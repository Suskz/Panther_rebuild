export const load = {
    fonts: () => {
        loadFont("Roboto-Black", "./assets/Roboto-Black.ttf")
    },
    assets: () => {
        //menu
        loadSprite("background-menu", "./assets/background-menu.jpg")
        loadSprite("background-black", "./assets/background-black.jpg")
        loadSprite("key-up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("key-down", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("key-left", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("key-right", "./assets/Arrow_Right_Key_Dark.png")

        //background map 1
        loadSprite("background", "./assets/background.jpg")

        loadSprite("water_brown", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
              wave: {
                from: 0,
                to: 7,
                speed: 14,
                loop: true,
              },
              "wave-reversed": {
                from: 7,
                to: 0,
                speed: 14,
                loop: true,
              },
            },
        })

        //background map 2
        loadSprite("background-0_2", "./assets/background_0_2.jpg")
        loadSprite('background-1_2', './assets/background_1_2.png')
        loadSprite('background-2_2', './assets/background_2_2.png')
        loadSprite('stars', './assets/stars.png')
        loadSprite('stars1', './assets/stars1.png')
        loadSprite('moon', './assets/moon.png')

        loadSprite("water_night", "./assets/Water_1.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
              wave: {
                from: 0,
                to: 7,
                speed: 14,
                loop: true,
              },
              "wave-reversed": {
                from: 7,
                to: 0,
                speed: 14,
                loop: true,
              },
            },
        })

        loadSprite("cat-1", "./assets/Cat01.png", {
            sliceX: 12,
            sliceY: 8,
            anims: {
              walk: { from: 19, to: 23, loop: true },
              idle: 0,
            },
        })

        loadSprite("bird-1", "./assets/Bird_1.png", {
            sliceX: 4,
            sliceY: 8,
            anims: {
              fly: {
                from: 4,
                to: 7,
                speed: 9,
                loop: true,
              },
            },
        })

        //hearts effects
        loadSprite('heart-1', 'assets/heart.png', {
            sliceX: 7,
            sliceY: 1,
            anims: { 'heart-anim': {from: 0, to: 6, loop: true}}
        })

        loadSprite('rightheart-1', 'assets/heartRight.png', {
            sliceX: 1,
            sliceY: 7,
            anims: { 'heartr-anim': {from: 0, to: 6, loop: true}}
        })

        loadSprite('leftheart-1', 'assets/heartLeft.png', {
            sliceX: 1,
            sliceY: 7,
            anims: { 'heartl-anim': {from: 0, to: 6, loop: true}}
        })

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

        //Mobs
        loadSprite("bat-1", "./assets/Bat_1.png", {
            sliceX: 4,
            sliceY: 8,
            anims: {
              fly: {
                from: 4,
                to: 7,
                speed: 6,
                loop: true,
              },
            },
        })

        loadSprite('nightmare-1', './assets/nightmare.png', {
            sliceX: 8,
            sliceY: 1,
            anims: { 
                run: {from: 0, to: 3, loop: true},
                idle: {from: 4, to: 7, loop: true}
            }
        })

        loadSprite('demon-1', './assets/demon.png', {
            sliceX: 11,
            sliceY: 1,
            anims: { 
                fly: {from: 0, to: 10, loop: true},
            }
        })

        //hp
        loadSprite('hp', './assets/hp.png')

        //Emeralds 
        loadSprite('purpleEmerald', './assets/purpleEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('marineEmerald', './assets/marineEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('blueEmerald', './assets/blueEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('whiteEmerald', './assets/whiteEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('redEmerald', './assets/redEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('greenEmerald', './assets/greenEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('goldEmerald', './assets/goldEmerald.png', {
            sliceX: 17,
            sliceY: 1,
            anims: { 'spin' : { from: 0, to: 16, loop: true }}
        })

        loadSprite('superEmerald', './assets/superEmerald.png', {
            sliceX: 4,
            sliceY: 1,
            anims: { 'shiny' : { from: 0, to: 3, loop: true }}
        })

        loadSprite('emeraldStars', './assets/emeraldStars.png', {
            sliceX: 4,
            sliceY: 1,
            anims: { 'explosion' : { from: 0, to: 3, loop: true, speed: 8 }}
        })

        loadSprite('bigEmerald', './assets/bigEmerald.png', {
            sliceX: 8,
            sliceY: 1,
            anims: { 'shine' : { from: 0, to: 7, loop: true }}
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
        loadSound("hit", "./sounds/hit.wav")
        loadSound("dark", "./sounds/dark.mp3")
        loadSound("jump", "./sounds/jump.mp3")
        loadSound("dive", "./sounds/dive.mp3")
        loadSound("emerald", "./sounds/emerald.mp3")
        //loadSound("menusong", "./sounds/menusong.mp3")
    }
}