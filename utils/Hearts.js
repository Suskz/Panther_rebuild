export class Hearts {
    constructor(positions, type) {
        this.hearts = []
        for (const position of positions) {
            add([
                sprite(`heart-${type}`, { anim: "heart-anim" }),
                pos(position),
                anchor("center"),
                scale(2)
            ])
        }
    }
}
