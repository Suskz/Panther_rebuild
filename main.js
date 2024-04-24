import kaboom from "./libs/kaboom.mjs"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { bgSoundManager } from "./utils/BGSoundManager.js"
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
        level1.drawMapLayout(level1Layout, level1Mappings)
    }
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("menu")