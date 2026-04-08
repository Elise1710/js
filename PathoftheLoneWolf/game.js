var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 30,
    height: 32 * 30,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload,myMap1,roomMap1,,myMap2,roomMap2,myMap3,roomMap3,winScene,gameOver,instructionScene,
        story1Scene,story2Scene,story3Scene,story4Scene,story5Scene,story6Scene]
};


var game = new Phaser.Game(config);

let life = 4
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0

let globalBgMusic1;
let globalBgMusic2;
let globalBgMusic3;
let globalBgMusic4;