export const level1Config = {
    playerSpeed: 500,
    jumpForce: 650,
    nbLives: 5,
    playerStartPosX: 150,
    playerStartPosY: 200,
    playerRespawPosX: 180,
    playerRespawPosY: 500,

    batPositions: [
        () => vec2(500, 230),
        () => vec2(800, 480),
        () => vec2(1800, 230),
        () => vec2(2200, 600),
        () => vec2(2800, 300),
        () => vec2(2900, 100),
    ],
    batRanges: [70, 30, 10, 10, 10, 10],
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
  