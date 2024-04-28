import kaboom from "./libs/kaboom.mjs"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { bgSoundManager } from "./utils/BGSoundManager.js"
import { Player } from "./entities/Player.js"
import { Bats } from "./entities/Bats.js"
import { Nightmares } from "./entities/Nightmares.js"
import { Demons } from "./entities/Demons.js"
import { level1Config } from "./content/level1/config.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
    debug: false
})

load.assets()
load.fonts()
load.sounds()

setGravity(1000)

const scenes = {
    menu: () => {
        bgSoundManager.pauseAllSounds()
        uiManager.displayMainMenu()
    },

    intro: () => {
        bgSoundManager.pauseAllSounds()
        /*bgSoundManager.addSound("menusong", {
            volume: 0.4,
            loop: true,
        })
        bgSoundManager.play("menusong")*/
        uiManager.displayIntro()
    },

    controls: () => {
        uiManager.displayControlsMenu()
    },

    1: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("dark", {
            volume: 0.6,
            loop: true,
        })
        bgSoundManager.play("dark")

        const level1 = new Level()
        
        level1.drawBackgroundBat('background')
        level1.drawMapLayout(level1Layout, level1Mappings)
        
        const player = new Player(
            level1Config.playerStartPosX,
            level1Config.playerStartPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )

        player.enablePassthrough()
        player.enableMobVunerability()

        player.update()

        const bats = new Bats(
            level1Config.batPositions.map((batPos) => batPos()),
            level1Config.batRanges,
            level1Config.batType
        )
        bats.setMovementPattern()

        const nightmares = new Nightmares(
            level1Config.nightmarePositions.map((nightmarePos) => nightmarePos()),
            level1Config.nightmareAmplitudes,
            level1Config.nightmareSpeeds,
            level1Config.nightmareType
        )
        nightmares.setMovementPattern()
        nightmares.enablePassthrough()

        const demons = new Demons(
            level1Config.demonPositions.map((demonPos) => demonPos()),
            level1Config.demonRanges,
            level1Config.demonType
        )
      
        demons.setMovementPattern()

        level1.drawWaves("water_night", "wave")
    },

    2: () => {

    },

    gameover: () => {
        
    },

    end: () => {

    }
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go(1)