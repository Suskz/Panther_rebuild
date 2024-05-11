export class Level {

    drawWaves(type, anim) {
        let offset = 0
        for (let i = 0; i < 53; i++) {
          add([sprite(type, { anim }), pos(offset, 640), scale(4)])
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

    //BG map2
    drawBackgroundForest(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (0.9), fixed() ])
    }

    drawBackgroundForest(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (4), fixed() ])
    }

    drawBackgroundForestFlipX(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (4), fixed(), pos(1000, 0) ]).flipX = true
    }
    
    drawStars(bgSpriteName, bgSpriteName1) {
        add( [sprite(bgSpriteName), scale (2), fixed() ])
        add( [sprite(bgSpriteName1), scale (2), fixed() ])
    }

    drawMoon(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (0.40), fixed(), pos(800, 85) ])
    }

    drawTree(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (4), pos(40, 190) ])
    }

    drawBigTree(bgSpriteName) {
        add( [sprite(bgSpriteName), scale (4), pos(900,104) ])
    }

    drawEmeraldCircle(colorEmerald1, colorEmerald2, colorEmerald3, colorEmerald4, colorEmerald5, colorEmerald6, colorEmerald7) {
        add( [sprite(colorEmerald1, {anim: "spin"}), scale (2), pos(905, 250), area() ]),
        add( [sprite(colorEmerald2, {anim: "spin"}), scale (2), pos(905, 310), area() ]),
        add( [sprite(colorEmerald3, {anim: "spin"}), scale (2), pos(1015, 250), area() ]),
        add( [sprite(colorEmerald4, {anim: "spin"}), scale (2), pos(1015, 310), area() ]),
        add( [sprite(colorEmerald5, {anim: "spin"}), scale (2), pos(960, 225), area() ]),
        add( [sprite(colorEmerald6, {anim: "spin"}), scale (2), pos(960, 280), area() ]),
        add( [sprite(colorEmerald7, {anim: "spin"}), scale (2), pos(960, 340), area() ])
    }

    drawEmeraldStars() {
        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(996, 280), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(885, 280), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(940, 310), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(940, 250), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(940, 190), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(885, 220), opacity(0.3), "emeraldStars" ]),

        add( [sprite("emeraldStars", {anim: "explosion"}), scale (1.7), pos(996, 220), opacity(0.3), "emeraldStars" ])
    }
}