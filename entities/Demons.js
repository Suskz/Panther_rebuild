export class Demons {
    constructor(positions, ranges, type) {
      this.ranges = ranges
      this.demons = []
      for (const position of positions) {
        this.demons.push(
          add([
            sprite(`demon-${type}`, { anim: "fly" }),
            area({ shape: new Rect(vec2(0, 10), 130, 60) },
            ),
            anchor("center"),
            pos(position),
            scale(1.7),
            state("fly-left", [
              "fly-left",
              "fly-right",
              "dive-attack-left",
              "dive-attack-right",
            ]),
            offscreen(),
            "demons",
          ])
        )
      }
    }
  
    async fly(demon, moveBy, duration) {
      await tween(
        demon.pos.x,
        demon.pos.x + moveBy,
        duration,
        (posX) => (demon.pos.x = posX),
        easings.linear
      )
    }
  
    async dive(demon, target, duration) {
      await tween(
        demon.pos,
        target,
        duration,
        (pos) => (demon.pos = pos),
        easings.easeInSine
      )
    }
  
    setMovementPattern() {
      for (const [index, demon] of this.demons.entries()) {
        const flyLeft = demon.onStateEnter("fly-left", async () => {
          demon.flipX = false
          await this.fly(demon, -this.ranges[index], 0.5)
          demon.enterState("dive-attack-left")
        })
        const flyRight = demon.onStateEnter("fly-right", async () => {
          demon.flipX = true
          await this.fly(demon, this.ranges[index], 0.5)
          demon.enterState("dive-attack-right")
        })
  
        const diveAttackLeft = demon.onStateEnter("dive-attack-left", async () => {
          if (!demon.isOffScreen()) play("dive", { volume: 0.00 })
          await this.dive(
            demon,
            vec2(
              demon.pos.x - this.ranges[index],
              demon.pos.y + this.ranges[index]
            ),
            0.5
          )
          await this.dive(
            demon,
            vec2(
              demon.pos.x - this.ranges[index],
              demon.pos.y - this.ranges[index]
            ),
            3.5
          )
  
          demon.enterState("fly-right")
        })
  
        const diveAttackRight = demon.onStateEnter(
          "dive-attack-right",
          async () => {
            if (!demon.isOffScreen()) play("dive", { volume: 0.00 })
            await this.dive(
              demon,
              vec2(
                demon.pos.x + this.ranges[index],
                demon.pos.y + this.ranges[index]
              ),
              0.5
            )
            await this.dive(
              demon,
              vec2(
                demon.pos.x + this.ranges[index],
                demon.pos.y - this.ranges[index]
              ),
              0.5
            )
  
            demon.enterState("fly-left")
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