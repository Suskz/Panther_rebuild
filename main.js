import kaboom from "./libs/kaboom.mjs"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { bgSoundManager } from "./utils/BGSoundManager.js"
import { Player } from "./entities/Player.js"
import { Bats } from "./entities/Bats.js"
import { Nightmares } from "./entities/Nightmares.js"
import { Demons } from "./entities/Demons.js"
import { Cats } from "./entities/Cats.js"
import { Birds } from "./entities/Birds.js"
import { Hearts } from "./utils/Hearts.js"
import { RightHearts } from "./utils/RightHearts.js"
import { LeftHearts } from "./utils/LeftHearts.js"
import { level1Config } from "./content/level1/config.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import { level2Config } from "./content/level2/config.js"
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js"

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
        
        level1.drawInvisibleWall()
        level1.drawBackgroundBat('background')
        level1.drawEmerald("whiteEmerald", "goldEmerald", "marineEmerald", "redEmerald", "greenEmerald", "blueEmerald", "purpleEmerald")
        level1.drawMapLayout(level1Layout, level1Mappings)
        
        const player = new Player(
            level1Config.playerStartPosX,
            level1Config.playerStartPosY,
            level1Config.playerRespawPosX,
            level1Config.playerRespawPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )

        player.enablePassthrough()
        player.enableMobVunerability()
        player.enableEmeraldPickUp()

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

        uiManager.displayLivesCount(player)
        player.updateLives(uiManager.livesCountUI)

        uiManager.displayEmeraldCount(player)
        player.updateCount(uiManager.emeraldCountUI)
    },

    2: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("happybirthday", {
            volume: 0.6,
            loop: true,
        })
        bgSoundManager.play("happybirthday")

        const level2 = new Level()
        level2.drawInvisibleWall()
        level2.drawBackgroundForest("background-0_2")
        level2.drawBackgroundForestFlipX("background-0_2")
        level2.drawBackgroundForest("background-1_2")
        level2.drawBackgroundForestFlipX("background-1_2")
        level2.drawBackgroundForest("background-2_2")
        level2.drawBackgroundForestFlipX("background-2_2")
        level2.drawStars("stars", "stars1")
        level2.drawMoon("moon")
        level2.drawTree("smaller-tree")
        level2.drawBigTree("bigger-tree")
        level2.drawBeca()
        level2.drawEmeraldCircle("whiteEmerald", "redEmerald", "marineEmerald", "goldEmerald", "greenEmerald", "blueEmerald", "purpleEmerald")
        level2.drawEmeraldStars()
        level2.drawTable()

        level2.drawInvisibleWall()
        level2.drawMapLayout(level2Layout, level2Mappings)

        const hearts = new Hearts(
            level2Config.heartPositions.map((heartPos) => heartPos()),
            level2Config.heartType,
        )

        const righthearts = new RightHearts(
            level2Config.rightheartPositions.map((rightheartPos) => rightheartPos()),
            level2Config.rightheartType,
        )

        const lefthearts = new LeftHearts(
            level2Config.leftheartPositions.map((leftheartPos) => leftheartPos()),
            level2Config.leftheartType,
        )
        
        const player = new Player(
            level2Config.playerStartPosX,
            level2Config.playerStartPosY,
            level2Config.playerRespawPosX,
            level2Config.playerRespawPosY,
            level2Config.playerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false
        )

        player.enablePassthrough()
        player.enableMobVunerability()
        player.enableEmeraldPickUp()

        player.update()

        const cats = new Cats(
            level2Config.catPositions.map((catPos) => catPos()),
            level2Config.catAmplitudes,
            level2Config.catSpeeds,
            level2Config.catType
        )
        cats.setMovementPattern()
        cats.enablePassthrough()

        const birds = new Birds(
            level2Config.birdPositions.map((birdPos) => birdPos()),
            level2Config.birdRanges,
            level2Config.birdType
        )
      
        birds.setMovementPattern()

        level2.drawWaves("water_night", "wave")
    },

    gameover: () => {
        bgSoundManager.pauseAllSounds()
        uiManager.displayGameOver()
    },

    end: () => {
        //default

    }
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("menu")