class UIManager {

    displayBlinkingUIMessage(content, position) {
        const message = add([
            text(content, {
                size: 30,
                font:"Roboto-Black"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])

        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (opacity) => (message.opacity = opacity),
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (opacity) => (message.opacity = opacity),
                easings.linear
            )
            message.enterState("flash-up")
        })
    }

    displayMainMenu() {
        add([
            sprite("background-black"),
            scale(2),
            pos(0, 0)
        ])
        
        add([
            sprite("background-menu"),
            scale(1),
            pos(0, 69)
        ])

        this.displayBlinkingUIMessage(
            "Pressione [ Enter ] para continuar ",
            vec2(center().x, center().y + 312)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5})
            go("intro")
        })
    }

    displayIntro() {
        add([
            sprite("background-black"),
            scale(2),
            pos(0, 0)
        ])

        add([
            sprite("background-menu"),
            scale(1),
            pos(0, 69),
            opacity(0.40)
        ])

        add([
            text("Introdução", { size: 50,font:"Roboto-Black"}),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])

        const controlPrompts = add([
            pos(center().x + 30, center().y)
        ])

        //sprites intro
        controlPrompts.add([sprite("whiteEmerald", { anim: "spin" }),pos(-400, -55), scale(3.5)])
        controlPrompts.add([sprite("goldEmerald", { anim: "spin" }),pos(-300, -55), scale(3.5)])
        controlPrompts.add([sprite("marineEmerald", { anim: "spin" }),pos(-200, -55), scale(3.5)])
        controlPrompts.add([sprite("redEmerald", { anim: "spin" }),pos(-100, -55), scale(3.5)])
        controlPrompts.add([sprite("greenEmerald", { anim: "spin" }),pos(0, -55), scale(3.5)])
        controlPrompts.add([sprite("blueEmerald", { anim: "spin" }),pos(100, -55), scale(3.5)])
        controlPrompts.add([sprite("purpleEmerald", { anim: "spin" }),pos(200, -55), scale(3.5)])
        controlPrompts.add([sprite("hp"),pos(-480, 165), scale(3.5)])

        controlPrompts.add([
            text("Após ser presa em um pesadelo, a condição imposta para ser liberta é enfrentar seus medos e juntar as 7 Esmeraldas Místicas!", { font: "Roboto-Black", size: 35, width: 1200}),
            pos(-580, -150)
        ])

        controlPrompts.add([
            text("Colete-os e siga para uma noite maravilhosa.", { font: "Roboto-Black", size: 35, width: 1200}),
            pos(-580, 50)
        ])

        controlPrompts.add([
            text("Evite os monstros e não encoste neles, você não é imortal.", { font: "Roboto-Black", size: 35, width: 1200}),
            pos(-580, 150)
        ])

        controlPrompts.add([
            text("Vidas = 5x", { font: "Roboto-Black", size: 35, width: 1200}),
            pos(-580, 250)
        ])

        this.displayBlinkingUIMessage(
            "Pressione [ Enter ] para continuar",
            vec2(center().x, center().y + 312)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5})
            go("controls")
        })
    }

    displayControlsMenu() {
        add([
            sprite("background-black"),
            scale(2),
            pos(0, 0)
        ])

        add([
            sprite("background-menu"),
            scale(1),
            pos(0, 69),
            opacity(0.40)
        ])

        add([
            text("Controles", { size: 50,font:"Roboto-Black"}),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])

        const controlPrompts = add([
            pos(center().x + -50, center().y)
        ])

        controlPrompts.add([sprite("key-up"),pos(0, -80)])
        controlPrompts.add([sprite("key-down"),pos()])
        controlPrompts.add([sprite("key-left"),pos(-80, 0)])
        controlPrompts.add([sprite("key-right"),pos(80, 0)])

        controlPrompts.add([
            text("Mover e Pular", { font: "Roboto-Black", size: 40}),
            pos(-80, 120)
        ])

        this.displayBlinkingUIMessage(
            "Pressione [ Enter ] para iniciar",
            vec2(center().x, center().y + 312)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5})
            go(1)
        })
    }

    displayGameOver() {
        add([
            sprite("background-black"),
            scale(2),
            pos(0, 0)
        ])
        
        add([
            sprite("background-menu"),
            scale(1),
            pos(0, 69),
            opacity(0.40)
        ])

        add([
            text("GAME OVER", { size: 100,font:"Roboto-Black"}),
            area(),
            anchor("center"),
            pos(center().x, center().y - (-40))
        ])

        this.displayBlinkingUIMessage(
            "Pressione [ Enter ] para iniciar um novo jogo ",
            vec2(center().x, center().y + 312)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5})
            go("intro")
        })
    }

    displayLivesCount(player) {
        this.livesCountUI = add([
          text(`${player.lives}`, {
            font: "Roboto-Black",
            size: 50,
          }),
          fixed(),
          pos(90, 100),
        ])
    
        this.livesCountUI.add([
          sprite("hp"),
          pos(-140, -60),
          scale(3),
          fixed(),
        ])
    }

    displayEmeraldCount(player) {
        this.emeraldCountUI = add([
            text(`${player.emeralds} / ${this.fullEmeraldCount}`, {
                font: "Roboto-Black",
                size: 50,
            }),
            {
                fullEmeraldCount: get("emerald", { recursive: true }).length,
            },
            fixed(),
            pos(90, 170)
        ])
    
        this.emeraldCountUI.add([sprite("superEmerald", {anim: "shiny"}), pos(-80, -5), scale(2), fixed()])
    }
}

export const uiManager = new UIManager()