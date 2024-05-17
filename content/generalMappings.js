export function generateMappings() {
    return {
        0: () => [
            sprite('platform-left'),
            area(),
            body({isStatic: true})
        ],
        1: () => [
            sprite('platform-middle'),
            area(),
            body({isStatic: true})
        ],
        2: () => [
            sprite('platform-right'),
            area(),
            body({isStatic: true})
        ],
        3: () => [
            sprite('ground'),
            area(),
            body({isStatic: true})
        ],
        4: () => [
            sprite('ground-deep'),
            area(),
            body({isStatic: true})
        ],
        5: () => [
            rect(16, 16),
            opacity(0),
            area(),
            body({isStatic: true})
        ]
    }   
}