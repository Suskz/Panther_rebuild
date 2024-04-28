export class Level {

    drawWaves(type, anim) {
        let offset = 0
        for (let i = 0; i < 53; i++) {
          add([sprite(type, { anim }), pos(offset, 820), scale(4)])
          offset += 64
        }
    }

    drawBackgroundBat(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (0.7), fixed() ])
    }

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 16,
            tiles: mappings
        }

        this.map = []
        for (const layerLayout of levelLayout) {
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.map) {
            layer.use(scale(4))
        }
    }

    drawPlatform() {
        let offset = -700
        for (let i = 0; i < 30; i++) {
          add([sprite("platform-middle"), body({isStatic: true}), area({collisionIgnore: ["portal"]}), pos(offset, 1940), scale(4)])
          offset += 64
        }
    }
}