class myMap2 extends Phaser.Scene {
  constructor() {
    super({
      key: "myMap2",
    });

    // Put global variable here
  }

  // incoming data from scene below
    init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {

    // this is the exported JSON map file
    this.load.tilemapTiledJSON("myMap2", "assets/Map2.tmj");

    this.load.image("Ground", "assets/crystal cave tiles.png");

    this.load.image("Wall", "assets/crystal cave tiles.png");

    this.load.image("Doorway", "assets/crystal cave tiles.png");

    this.load.image("Mushroom", "assets/Glowing mushroom.png");

    this.load.image("Mushroom 2", "assets/crystal cave tiles (1).png");

    this.load.image("Candle", "assets/pixel-art-fire-torch-set.png");

    this.load.image("Crystal", "assets/crystal cave tiles (1).png");

    this.load.image("Crystal 2", "assets/crystal cave tiles (1).png");

    this.load.image("Crystal 3", "assets/CrystalTiles.png");

    this.load.image("Crystal 4", "assets/CrystalTiles (1).png");

    this.load.image("Crystal 5", "assets/crystal cave tiles (1).png");

    this.load.image("Stone", "assets/crystal cave tiles (1).png");
    
    this.load.image("Stairs", "assets/wooden_stairs-ns_1 (B&W) (2).png");

  

    this.load.spritesheet("orb","assets/orb-32x32.png",{
    frameWidth: 134,
    frameHeight: 135,
   });
   
  }
  create() {
    console.log("*** myMap2 scene");

    // Create the map from main
    let map = this.make.tilemap({
      key: "myMap2",
    });

      this.anims.create({
        key: 'orbAnim',
       frames: [
            { key: 'orb', frame: 0 },
            { key: 'orb', frame: 1 },
            { key: 'orb', frame: 2 },
            { key: 'orb', frame: 3 },
            { key: 'orb', frame: 4 },

        ],
        frameRate:5,
        repeat:-1
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let GroundTiles = map.addTilesetImage("crystal cave tiles", "Ground");

    let WallTiles = map.addTilesetImage("crystal cave tiles", "Wall");

    let CandleTiles = map.addTilesetImage("pixel-art-fire-torch-set", "Candle");

    let CrystalTiles = map.addTilesetImage("crystal cave tiles (1)", "Crystal")

    let Crystal2Tiles= map.addTilesetImage("crystal cave tiles (1)", "Crystal 2")

    let Crystal3Tiles = map.addTilesetImage("CrystalTiles", "Crystal 3")

    let Crystal4Tiles = map.addTilesetImage("CrystalTiles (1)", "Crystal 4")

    let Crystal5Tiles = map.addTilesetImage("crystal cave tiles (1)", "Crystal 5")
 
    let MushroomTiles = map.addTilesetImage("Glowing mushroom", "Mushroom");

    let Mushroom2Tiles = map.addTilesetImage("Assets_Shroom_Cave (1)", "Mushroom 2");

    let StoneTiles = map.addTilesetImage("crystal cave tiles (1)", "Stone")

    let StairsTiles = map.addTilesetImage("wooden_stairs-ns_1 (B&W) (2)", "Stairs")
    

  let tilesArray = [GroundTiles,WallTiles,MushroomTiles,Mushroom2Tiles,
        CandleTiles,CrystalTiles,Crystal2Tiles,Crystal3Tiles,Crystal4Tiles,
        Crystal5Tiles,StoneTiles,StairsTiles]

  // Load in layers by layers
    this.GroundLayer = map.createLayer("Ground", tilesArray, 0,0,)

    this.WallLayer = map.createLayer("Wall", tilesArray, 0,0,)

    this.CandleLayer = map.createLayer("Candle", tilesArray, 0,0,)

    this.CrystalLayer = map.createLayer("Crystal", tilesArray, 0,0,)

    this.Crystal2Layer = map.createLayer("Crystal 2", tilesArray, 0,0,)

    this.Crystal3Layer = map.createLayer("Crystal 3", tilesArray, 0,0,)

    this.Crystal4Layer = map.createLayer("Crystal 4", tilesArray, 0,0,)

    this.Crystal5Layer = map.createLayer("Crystal 5", tilesArray, 0,0,)
  
    this.MushroomLayer = map.createLayer("Mushroom", tilesArray, 0,0,)

    this.Mushroom2Layer = map.createLayer("Mushroom 2", tilesArray, 0,0,)

    this.StoneLayer = map.createLayer("Stone", tilesArray, 0,0,)

    this.StairsLayer = map.createLayer("Stairs", tilesArray, 0,0,)

   this.physics.world.bounds.width = this.GroundLayer.width;
   this.physics.world.bounds.height = this.GroundLayer.height;

// Object Layers
// Put Tiled object layer here
var startPoint = map.findObject("objectLayer",(obj)=> obj.name === "start")  


let enemy1 = map.findObject("objectLayer2",(obj)=> obj.name === "enemy1")

let enemy2 = map.findObject("objectLayer2",(obj)=> obj.name === "enemy2")

let enemy3 = map.findObject("objectLayer2",(obj)=> obj.name === "enemy3")

let enemy4 = map.findObject("objectLayer2",(obj)=> obj.name === "enemy4")


let item1 = map.findObject("objectLayer3",(obj)=> obj.name === "item1")

let item2 = map.findObject("objectLayer3",(obj)=> obj.name === "item2")

let item3 = map.findObject("objectLayer3",(obj)=> obj.name === "item3")

let item4 = map.findObject("objectLayer3",(obj)=> obj.name === "item4")

// The player and its settings
this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'Ashen');
this.player.setScale(0.8);

// debug player
window.player = this.player

// adjust the width & height bounding box
this.player.body.setSize(this.player.width * 0.8, this.player.height * 0.8)

this.orb1 = this.physics.add.sprite(item1.x, item1.y, 'orb').setScale(0.3).play("orbAnim")

this.orb2 = this.physics.add.sprite(item2.x, item2.y, 'orb').setScale(0.3).play("orbAnim")

this.orb3 = this.physics.add.sprite(item3.x, item3.y, 'orb').setScale(0.3).play("orbAnim")

this.orb4 = this.physics.add.sprite(item4.x, item4.y, 'orb').setScale(0.3).play("orbAnim")


this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, 'enemy1').setScale(0.8).play("enemy1-left")

this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, 'enemy2(1)').setScale(0.8).play("enemy2-right")

this.enemy3 = this.physics.add.sprite(enemy3.x, enemy3.y, 'enemy2').setScale(0.8).play("enemy2-left")

this.enemy4 = this.physics.add.sprite(enemy4.x, enemy4.y, 'enemy1(1)').setScale(0.8).play("enemy1-right")


this.physics.add.overlap(this.player, [this.orb1,this.orb2,this.orb3,this.orb4],this.collectOrb, null,this);

this.physics.add.overlap(this.player, [this.enemy1,this.enemy2,this.enemy3,this.enemy4],this.hitEnemy, null,this);


    // // Add any text to the game

           this.orbText = this.add.text(
      100,100, 'Orb: 0', {font: "40px",fill: "#00FFFF",}
    ).setScrollFactor(0)
    .setDepth(999)


    this.lifeText = this.add.text(
      300,100, 'Life: 0', {font: "40px",fill: "#00FFFF",}
    ).setScrollFactor(0)
    .setDepth(999)



    // create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

// Camera follow player
this.cameras.main.startFollow(this.player);

  } /////////////////// end of create //////////////////////////////

  update() {

 if(
    this.player.x > 452 &&
    this.player.x < 517 &&
    this.player.y < 106

  ) {
    console.log("Jump to myMap3")
    this.map3()
  }

   if(
    this.player.x > 455 &&
    this.player.x < 520 &&
    this.player.y > 930 

  ) {
    console.log("Jump to myMap1")
    this.map1()
  }
  
let speed = 200;

if (this.cursors.left.isDown) {
	this.player.body.setVelocityX(-speed);
	this.player.anims.play("Ashen-left", true);

} else if (this.cursors.right.isDown) {
	this.player.body.setVelocityX(speed);
	this.player.anims.play("Ashen-right", true);

} else if (this.cursors.up.isDown) {
	this.player.body.setVelocityY(-speed);
	this.player.anims.play("Ashen-up", true);

} else if (this.cursors.down.isDown) {
	this.player.body.setVelocityY(speed);
	this.player.anims.play("Ashen-down", true);
} else {
	this.player.anims.stop();
	this.player.body.setVelocity(0, 0);
}


} /////////////////// end of update //////////////////////////////


collectOrb (player, item) {
  console.log("Player collect orb")
  
  item1++

  this.orbText.setText('Orb: {} ');


  // disable body
  item.disableBody (true,true)
  
}

hitEnemy (player, enemy) {
  console.log("Player hit enemy")

  life--
  //shake screen
  this.cameras.main.shake(300)

  this.lifeText.setText('Life: {} ')


  // disable body
  enemy.disableBody (true,true)

  if(life < 1) {
    this.scene.start("gameOver");
  }
}

map3() {

  this.scene.start("myMap3")
} 

map1(){

  this.scene.start("myMap1")
}

  // Function to jump to roomMap1
  roomMap1(player, tile) {
    console.log("roomMap2 function");
    this.scene.start("roomMap2", {
      player: player,
      inventory: this.inventory,
    });
  }

} //////////// end of class world ////////////////////////