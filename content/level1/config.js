export const level1Config = {
    playerSpeed: 500,
    jumpForce: 650,
    nbLives: 2,
    playerStartPosX: 180,
    playerStartPosY: 200,

    batPositions: [
        () => vec2(500, 230),
    ],
    batRanges: [70],
    batType: 1,

    nightmarePositions: [
        () => vec2(1700, 700),
    ],
    nightmareAmplitudes: [700],
    nightmareSpeeds: [2],
    nightmareType: 1,

    demonPositions: [
        () => vec2(3190, 490)
    ],
    demonRanges: [90],
    demonType: 1
}
  