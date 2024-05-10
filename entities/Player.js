export class Player {
    heightDelta = 0

    isMoving = false

    isRespawning = false

    lives = 3

    hasJumpedOnce = false

    coyoteLapse = 0.1

    emeralds = 0

    constructor(
        posX,
        posY,
        playerRespawPosX,
        playerRespawPosY,
        speed,
        jumpForce,
        nbLives,
        currentLevelScene,
        isInTerminalScene
    ) {
        this.isInTerminalScene = isInTerminalScene
        this.currentLevelScene = currentLevelScene
        this.makePlayer(posX, posY)
        this.playerRespawPosX = playerRespawPosX
        this.playerRespawPosY = playerRespawPosY
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
        this.setPlayerControls()
        this.update()
    }

    makePlayer(x, y) {
        this.initialX = x
        this.initialY = y
        this.gameObj = add([
          sprite("idle-sprite"),
          area({ shape: new Rect(vec2(0), 32, 32), offset: vec2(0,6) }),
          anchor("center"),
          pos(this.initialX, this.initialY),
          scale(2),
          body(),
          "player",
        ])
    }

    //passar entre plataformas
    enablePassthrough() {
        this.gameObj.onBeforePhysicsResolve((collision) => {
          if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
            collision.preventResolution()
          }
    
          if (collision.target.is("passthrough") && isKeyDown("down")) {
            collision.preventResolution()
          }
        })
    }

    //controles do jogador
    setPlayerControls() {
        onKeyDown('right', () => {
            if (this.gameObj.curAnim() !== 'run-anim' && this.gameObj.isGrounded()) {
                this.gameObj.use(sprite('run-sprite'))
                this.gameObj.play('run-anim')
                if (!this.isRespawning)
                this.gameObj.flipX = false
                this.isMoving = true
            }

            if (this.gameObj.direction !== 'right') this.gameObj.direction = 'right'
            this.gameObj.move(this.speed, 0)
        })

        onKeyRelease('right', () => {
            this.gameObj.use(sprite('idle-sprite'))
            this.gameObj.play('idle-anim')
        })

        onKeyDown('left', () => {
            if (this.gameObj.curAnim() !== 'run-anim' && this.gameObj.isGrounded()) {
                this.gameObj.use(sprite('run-sprite'))
                this.gameObj.play('run-anim')
                this.gameObj.flipX = true
                if (!this.isRespawning) 
                this.isMoving = true
            }

            if (this.gameObj.direction !== 'left') this.gameObj.direction = 'left'
            this.gameObj.move(-this.speed, 0)
        })
        
        onKeyRelease('left', () => {
            this.gameObj.use(sprite('idle-sprite'))
            this.gameObj.play('idle-anim')
        })

        onKeyPress('up', () => {
            if (this.gameObj.isGrounded()) {
                this.gameObj.jump()
                this.gameObj.use(sprite('jump-sprite'))
                this.hasJumpedOnce = true
                this.gameObj.jump(this.jumpForce)
                this.gameObj.play('jump-anim')
                play("jump")
            }

            if (
                !this.gameObj.isGrounded() &&
                time() - this.timeSinceLastGrounded < this.coyoteLapse &&
                !this.hasJumpedOnce
              ) {
                this.hasJumpedOnce = true
                this.gameObj.jump(this.jumpForce)
                play("jump")
              }
        })
    }

    //reviver
    respawnPlayer() {
        if (this.lives > 0) {
          this.gameObj.pos = vec2(this.playerRespawPosX, this.playerRespawPosY)
          this.lives--
          this.isRespawning = true
          setTimeout(() => (this.isRespawning = false), 700)
          return
        }
    
        go("gameover")
    }

    //vunerabilidade a mobs
    enableMobVunerability() {
        function hitAndRespawn(context) {
            play("hit", { speed: 1.5 })
            context.respawnPlayer()
        }
        this.gameObj.onCollide("bats", () => hitAndRespawn(this))
        this.gameObj.onCollide("nightmares", () => hitAndRespawn(this))
        this.gameObj.onCollide("demons", () => hitAndRespawn(this))
    }

    //pegar e destruir esmeralda
    enableEmeraldPickUp() {
        this.gameObj.onCollide("emerald", (emerald) => {
          this.emeralds++
          destroy(emerald)
          play("emerald")
        })
    }

    update() {
        camScale(1.5)
        onUpdate(() => {
            if (this.gameObj.previousHeight) {
                this.gameObj.heightDelta = this.gameObj.previousHeight - this.gameObj.pos.y
            }
        
            this.gameObj.previousHeight = this.gameObj.pos.y
        
            const cameraLeftBound = 550
            const cameraRightBound = 3000
            const cameraVerticalOffset = this.gameObj.pos.y - 100
        
            if (cameraLeftBound > this.gameObj.pos.x) {
                camPos(cameraLeftBound, cameraVerticalOffset)
            } else if (cameraRightBound < this.gameObj.pos.x) {
                camPos(cameraRightBound, cameraVerticalOffset)
            } else {
                camPos(this.gameObj.pos.x, cameraVerticalOffset)
            }
        
            if (this.gameObj.curAnim() !== 'run-anim' && this.gameObj.isGrounded()) {
                this.gameObj.use(sprite('idle-sprite'))
                this.gameObj.play('idle-anim')
            }
        
            if (this.gameObj.curAnim() !== 'jump-anim' && !this.gameObj.isGrounded() && this.gameObj.heightDelta > 0) {
                this.gameObj.use(sprite('jump-sprite'))
                this.gameObj.play('jump-anim')
            }
        
            if (this.gameObj.curAnim() !== 'fall-anim' && !this.gameObj.isGrounded() && this.gameObj.heightDelta < 0) {
                this.gameObj.use(sprite('fall-sprite'))
                this.gameObj.play('fall-anim')
            }

            if (this.gameObj.direction === 'left') {
                this.gameObj.flipX = true
            } else {
                this.gameObj.flipX = false
            }

            if (this.gameObj.pos.y > 3000) {
                play("hit", { speed: 1.5 })
                this.respawnPlayer()
            }
        })
    }

    updateCount(emeraldCountUI) {
        onUpdate(() => {
          emeraldCountUI.text = `${this.emeralds} / ${emeraldCountUI.fullEmeraldCount}`
          if (this.emeralds === emeraldCountUI.fullEmeraldCount && this.emeralds > 1) {  
            go(this.isInTerminalScene ? "end" : this.currentLevelScene + 1)
          }
        })
    }
}