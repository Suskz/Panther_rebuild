export class Nightmares {
    rangeX = 0
    rangeY = 800
      
    constructor(positions, amplitudes, velocities, type) {
      
      this.amplitudes = amplitudes
      this.velocities = velocities
      this.nightmares = []
      for (const position of positions) {
        this.nightmares.push(
          add([
            sprite(`nightmare-${type}`, { anim: "run" }),
            pos(position),
            area({
              shape: new Rect(vec2(0, 15), 80, 50),
              collisionIgnore: ["demons", "bats"]
            }),
            anchor("center"),
            body(),
            scale(2),
            state("idle", ["idle", "run-left", "run-right"]),
            offscreen(),
            "nightmares",
          ])
        )
      }
    }

    async run(nightmare, moveBy, duration) {
        if (nightmare.currAnim !== "run") nightmare.play("run")
      
        await tween(
        nightmare.pos.x,
        nightmare.pos.x + moveBy,
        duration,
        (posX) => (nightmare.pos.x = posX),
        easings.easeOutSine
        )
    }
      
    setMovementPattern() {
        for (const [index, nightmare] of this.nightmares.entries()) {
            const idle = nightmare.onStateEnter("idle", async (previousState) => {
                if (nightmare.currAnim !== "idle") nightmare.play("idle")
      
                await new Promise((resolve) => {
                setTimeout(() => resolve(), 1000)
            })
      
            if (previousState === "run-left") {
                nightmare.enterState("run-right")
            } else {
                //nightmare.jump()
                if (!nightmare.isOffScreen()) {
                  //play("nightmare-attack", { volume: 0.6 })
                }
      
                nightmare.enterState("run-left")
                }
            })
      
            const walkLeft = nightmare.onStateEnter("run-left", async () => {
              nightmare.flipX = false
      
              await this.run(
                nightmare,
                -this.amplitudes[index],
                this.velocities[index]
              )
              nightmare.enterState("idle", "run-left")
            })
      
            const walkRight = nightmare.onStateEnter("run-right", async () => {
              nightmare.flipX = true
      
              await this.run(nightmare, this.amplitudes[index], this.velocities[index])
              nightmare.enterState("idle", "run-right")
            })
      
            onSceneLeave(() => {
              idle.cancel()
              walkLeft.cancel()
              walkRight.cancel()
            })
          }
        }
      
        enablePassthrough() {
          for (const nightmare of this.nightmares) {
            nightmare.onBeforePhysicsResolve((collision) => {
              if (collision.target.is("passthrough") && nightmare.isJumping()) {
                collision.preventResolution()
              }
            })
          }
    }
}  