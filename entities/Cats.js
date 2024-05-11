export class Cats {
    rangeX = 0
    rangeY = 800
      
    constructor(positions, amplitudes, velocities, type) {
      
      this.amplitudes = amplitudes
      this.velocities = velocities
      this.cats = []
      for (const position of positions) {
        this.cats.push(
          add([
            sprite(`cat-${type}`, { anim: "walk" }),
            pos(position),
            area({
              shape: new Rect(vec2(0, 4.5), 20, 6),
              collisionIgnore: ["player", "cats"]
            }),
            anchor("center"),
            body(),
            scale(1.2),
            state("idle", ["idle", "walk-left", "walk-right"]),
            offscreen(),
            "cats",
          ])
        )
      }
    }

    async walk(cat, moveBy, duration) {
        if (cat.currAnim !== "walk") cat.play("walk")
      
        await tween(
        cat.pos.x,
        cat.pos.x + moveBy,
        duration,
        (posX) => (cat.pos.x = posX),
        easings.easeOutSine
        )
    }
      
    setMovementPattern() {
        for (const [index, cat] of this.cats.entries()) {
            const idle = cat.onStateEnter("idle", async (previousState) => {
                if (cat.currAnim !== "idle") cat.play("idle")
      
                await new Promise((resolve) => {
                setTimeout(() => resolve(), 1000)
            })
      
            if (previousState === "walk-left") {
                cat.enterState("walk-right")
            } else {
                //cat.jump()
                if (!cat.isOffScreen()) {
                  //play("cat-attack", { volume: 0.6 })
                }
      
                cat.enterState("walk-left")
                }
            })
      
            const walkLeft = cat.onStateEnter("walk-left", async () => {
              cat.flipX = false
      
              await this.walk(
                cat,
                -this.amplitudes[index],
                this.velocities[index]
              )
              cat.enterState("idle", "walk-left")
            })
      
            const walkRight = cat.onStateEnter("walk-right", async () => {
              cat.flipX = true
      
              await this.walk(cat, this.amplitudes[index], this.velocities[index])
              cat.enterState("idle", "walk-right")
            })
      
            onSceneLeave(() => {
              idle.cancel()
              walkLeft.cancel()
              walkRight.cancel()
            })
          }
        }
      
        enablePassthrough() {
          for (const cat of this.cats) {
            cat.onBeforePhysicsResolve((collision) => {
              if (collision.target.is("passthrough") && cat.isJumping()) {
                collision.preventResolution()
              }
            })
          }
    }
}  