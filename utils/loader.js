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

        //Player
        loadSprite('idle-sprite', 'assets/pantera_stand.png', {
            sliceX: 2,
            sliceY: 1,
            anims: { 'idle-anim': { from: 0, to: 1, loop: true }}
        })
        loadSprite('run-sprite', './assets/pantera_run.png', {
            sliceX: 6,
            sliceY: 1,
            anims: { 'run-anim': { from: 0, to: 5, loop: true }}
        })
        loadSprite('jump-sprite', 'assets/pantera_jump.png', {
            sliceX: 1,
            sliceY: 1,
            anims: { 'jump-anim': { from: 0, to: 0, loop: true }}
        })
        loadSprite('fall-sprite', 'assets/pantera_fall.png', {
            sliceX: 1,
            sliceY: 1,
            anims: { 'fall-anim' : { from: 0, to: 0, loop: true }}
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