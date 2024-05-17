export class RightHearts {
    constructor(positions, type) {
        this.righthearts = []
        for (const position of positions) {
            add([
                sprite(`rightheart-${type}`, { anim: "heartr-anim" }),
                pos(position),
                anchor("center"),
                scale(2)
            ])
        }
    }
}
