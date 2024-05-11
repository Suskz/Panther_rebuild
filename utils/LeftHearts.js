export class LeftHearts {
    constructor(positions, type) {
        this.lefthearts = []
        for (const position of positions) {
            add([
                sprite(`leftheart-${type}`, { anim: "heartl-anim" }),
                pos(position),
                anchor("center"),
                scale(2)
            ])
        }
    }
}
