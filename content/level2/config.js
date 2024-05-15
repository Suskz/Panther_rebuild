export const level2Config = {
    playerSpeed: 500,
    jumpForce: 650,
    nbLives: 3,
    playerStartPosX: 900,
    playerStartPosY: 10,
    
    heartPositions: [
        //beca
        () => vec2(353, -70),
        () => vec2(550, -70),
        //beca1
        () => vec2(353, 160),
        () => vec2(550, 160),
        //beca2
        () => vec2(735, 350),
        //beca3
        () => vec2(1750, -80),
        () => vec2(1960, -80),
        //beca4
        () => vec2(1568, 140),
        //beca5
        () => vec2(1950, 160),
        //beca6
        () => vec2(2400, -25),
        () => vec2(2340, -25),
        //beca7
        () => vec2(2847, 160),
        //beca8
        () => vec2(3040, -170)
    ],
    heartType: 1,

    rightheartPositions: [
        //beca
        () => vec2(630, -1),
        //beca1
        () => vec2(630, 230),
        //beca2
        () => vec2(815, 445),
        //beca3
        () => vec2(2040, 0),
        //beca4
        () => vec2(1660, 220),
        //beca5
        () => vec2(2040, 210),
        () => vec2(2040, 360),
        //beca6
        () => vec2(2478, 50),
        () => vec2(2478, 170),
        //beca7
        () => vec2(2930, 215),
        () => vec2(2930, 360),
        //beca8
        () => vec2(3120, -100),
        () => vec2(3120, 40)
    ],
    rightheartType: 1,

    leftheartPositions: [
        //beca
        () => vec2(270, -1),
        //beca1
        () => vec2(270, 250),
        //beca2
        () => vec2(650, 445),
        //beca3
        () => vec2(1665, 0),
        //beca4
        () => vec2(1480, 220),
        //beca5
        () => vec2(1860, 210),
        () => vec2(1860, 360),
        //beca6
        () => vec2(2260, 50),
        () => vec2(2260, 170),
        //beca7
        () => vec2(2765, 215),
        () => vec2(2765, 360),
        //beca8
        () => vec2(2950, -100),
        () => vec2(2950, 40)
    ],
    leftheartType: 1,
    
    birdPositions: [
        () => vec2(570, 50),
        () => vec2(1200, 150),
        () => vec2(1800, 500),
        () => vec2(2600, 400),
        () => vec2(1400, 400),
        () => vec2(2100, 100),
        () => vec2(2900, 100),
    ],
    birdRanges: [30, 50, 10, 10, 50, 20, 10],
    birdType: 1,

    catPositions: [
        () => vec2(1710, 616),
        () => vec2(910, 650),
    ],
    catAmplitudes: [300, 400],
    catSpeeds: [3, 2],
    catType: 1
}
  