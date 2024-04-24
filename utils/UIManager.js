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
            sprite("background-intro"),
            scale(1),
            pos(0, 0),
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
            sprite("background-controls"),
            scale(1),
            pos(0, 0),
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
}

export const uiManager = new UIManager()