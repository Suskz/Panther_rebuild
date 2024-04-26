export class Bats {
    constructor(positions, ranges, type) {
      this.ranges = ranges
      this.bats = []
      for (const position of positions) {
        this.bats.push(
          add([
            sprite(`bat-${type}`, { anim: "fly" }),
            area({ shape: new Rect(vec2(0), 10, 10) }),
            anchor("center"),
            pos(position),
            scale(2),
            rotate(),
            state("fly-left", [
              "fly-left",
              "fly-right",
              "dive-attack-left",
              "dive-attack-right",
            ]),
            offscreen(),
            "bats",
          ])
        )
      }
    }
  
    async fly(bat, moveBy, duration) {
      await tween(
        bat.pos.x,
        bat.pos.x + moveBy,
        duration,
        (posX) => (bat.pos.x = posX),
        easings.linear
      )
    }
  
    async dive(bat, target, duration) {
      await tween(
        bat.pos,
        target,
        duration,
        (pos) => (bat.pos = pos),
        easings.easeInSine
      )
    }
  
    setMovementPattern() {
      for (const [index, bat] of this.bats.entries()) {
        const flyLeft = bat.onStateEnter("fly-left", async () => {
          bat.flipX = false
          await this.fly(bat, -this.ranges[index], 0.5)
          bat.enterState("dive-attack-left")
        })
        const flyRight = bat.onStateEnter("fly-right", async () => {
          bat.flipX = true
          await this.fly(bat, this.ranges[index], 0.5)
          bat.enterState("dive-attack-right")
        })
  
        const diveAttackLeft = bat.onStateEnter("dive-attack-left", async () => {
          if (!bat.isOffScreen()) play("dive", { volume: 0.7 })
          await this.dive(
            bat,
            vec2(
              bat.pos.x - this.ranges[index],
              bat.pos.y + this.ranges[index]
            ),
            0.5
          )
          await this.dive(
            bat,
            vec2(
              bat.pos.x - this.ranges[index],
              bat.pos.y - this.ranges[index]
            ),
            0.5
          )
  
          bat.enterState("fly-right")
        })
  
        const diveAttackRight = bat.onStateEnter(
          "dive-attack-right",
          async () => {
            if (!bat.isOffScreen()) play("dive", { volume: 0.05 })
            await this.dive(
              bat,
              vec2(
                bat.pos.x + this.ranges[index],
                bat.pos.y + this.ranges[index]
              ),
              0.5
            )
            await this.dive(
              bat,
              vec2(
                bat.pos.x + this.ranges[index],
                bat.pos.y - this.ranges[index]
              ),
              0.5
            )
  
            bat.enterState("fly-left")
          }
        )
  
        onSceneLeave(() => {
          flyLeft.cancel()
          flyRight.cancel()
          diveAttackLeft.cancel()
          diveAttackRight.cancel()
        })
      }
    }
} 