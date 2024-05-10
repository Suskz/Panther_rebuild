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

    drawInvisibleWall() {
        // left invisible wall
        add([ rect(16, 780), area(), body({isStatic: true}), opacity(0), pos(110,0) ])
    }

    //Emerald map 1
    drawEmerald(colorEmerald1, colorEmerald2, colorEmerald3, colorEmerald4, colorEmerald5, colorEmerald6, colorEmerald7) {
        add( [sprite(colorEmerald1, {anim: "spin"}), scale (2.2), pos(318, 230), area(), "emerald" ]),
        add( [sprite(colorEmerald2, {anim: "spin"}), scale (2.2), pos(700, 680), area(), "emerald" ]),
        add( [sprite(colorEmerald3, {anim: "spin"}), scale (2.2), pos(1300, 740), area(), "emerald" ]),
        add( [sprite(colorEmerald4, {anim: "spin"}), scale (2.2), pos(1665, 230), area(), "emerald" ]),
        add( [sprite(colorEmerald5, {anim: "spin"}), scale (2.2), pos(2363, 360), area(), "emerald" ]),
        add( [sprite(colorEmerald6, {anim: "spin"}), scale (2.2), pos(2816, 550), area(), "emerald" ]),
        add( [sprite(colorEmerald7, {anim: "spin"}), scale (2.2), pos(3005, 230), area(), "emerald" ])
    }
}