export const load = {
    fonts: () => {
        loadFont("Roboto-Black", "./assets/Roboto-Black.ttf")
    },
    assets: () => {
        //menu
        loadSprite("background-menu", "./assets/background-menu.jpg")
        loadSprite("background-black", "./assets/background-black.jpg")
        loadSprite("background-intro", "./assets/background-intro.jpg")
        loadSprite("background-controls", "./assets/background-controls.jpg")
        loadSprite("key-up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("key-down", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("key-left", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("key-right", "./assets/Arrow_Right_Key_Dark.png")

        //map tileset
        loadSpriteAtlas('./assets/tileset.png', {
            'platform-left': { x: 82, y: 64, width: 16,
                height: 8
            },
            'platform-middle': {
                x: 112,
                y: 64,
                width: 16,
                height: 8
            },
            'platform-right': {
                x: 142,
                y: 64,
                width: 16,
                height: 8
            },
            'smaller-tree': {
                x: 0,
                y: 80,
                width: 60,
                height: 65
            },
            'bigger-tree': {
                x: 170,
                y: 10,
                width: 115,
                height: 200
            },
            'ground': {
                x: 80,
                y: 144,
                width: 16,
                height: 16
            },
            'ground-deep': {
                x: 0,
                y: 144,
                width: 16,
                height: 16
            }
        })
    },

        //Sounds
        sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
        loadSound("dark", "./sounds/dark.mp3")
        loadSound("jump", "./sounds/jump.mp3")
        //loadSound("menusong", "./sounds/menusong.mp3")
    }
}