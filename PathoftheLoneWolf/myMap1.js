class myMap1 extends Phaser.Scene {
  constructor() {
    super({
      key: "myMap1",
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
    this.load.tilemapTiledJSON("myMap1", "assets/Map1.tmj");

    this.load.image("Grass", "assets/Pixel_art_grass_image.png");

    this.load.image("Ground", "assets/Digital brown ground background.png");

    this.load.image("Tree", "assets/forest_demo_objects.png");

    this.load.image("Rock", "assets/forest_demo_objects (1).png");

    this.load.image("Rock 2", "assets/forest_demo_objects.png");

    this.load.image("Water", "assets/pixelated-water-texture.png");

    this.load.image("Bridge", "assets/Bridges.png");

    this.load.image("Bushes", "assets/forest_demo_objects.png");

    this.load.image("Balcony", "assets/forest_demo_objects (1).png");


  }
  create() {
    console.log("*** myMap1 scene");

    // Create the map from main
    let map = this.make.tilemap({
      key: "myMap1",
    });

   
    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let GrassTiles = map.addTilesetImage("Pixel_art_grass_image", "Grass");

    let GroundTiles = map.addTilesetImage("Digital brown ground background", "Ground");

    let TreeTiles = map.addTilesetImage("forest_demo_terrain", "Tree");

    let RockTiles = map.addTilesetImage("forest_demo_objects (1)", "Rock");

    let Rock2Tiles = map.addTilesetImage("forest_demo_objects", "Rock 2");

    let WaterTiles = map.addTilesetImage("pixelated-water-texture", "Water");

    let BridgeTiles = map.addTilesetImage("Bridges", "Bridge");

    let BushesTiles = map.addTilesetImage("forest_demo_objects", "Bushes");

    let BalconyTiles = map.addTilesetImage("forest_demo_objects (1)", "Balcony")

    let tilesArray = [GrassTiles,GroundTiles,TreeTiles,RockTiles,Rock2Tiles,WaterTiles,
        BridgeTiles,BushesTiles,BalconyTiles]

         // Load in layers by layers
    this.GrassLayer = map.createLayer("Grass", tilesArray, 0,0,)

    this.GroundLayer = map.createLayer("Ground", tilesArray, 0,0,)

    this.TreeLayer = map.createLayer("Tree", tilesArray, 0,0,)

    this.RockLayer = map.createLayer("Rock", tilesArray, 0,0,)

    this.Rock2Layer = map.createLayer("Rock 2", tilesArray, 0,0,)

    this.WaterLayer = map.createLayer("Water", tilesArray, 0,0,)

    this.BridgeLayer = map.createLayer("Bridge", tilesArray, 0,0,)

    this.BushesLayer = map.createLayer("Bushes", tilesArray, 0,0,)

    this.BalconyLayer = map.createLayer("Balcony", tilesArray, 0,0,)

    
     this.physics.world.bounds.width = this.GrassLayer.width;
   this.physics.world.bounds.height = this.GrassLayer.height;
    
   this.physics.world.bounds.width = this.GroundLayer.width;
   this.physics.world.bounds.height = this.GroundLayer.height;

   this.physics.world.bounds.width = this.TreeLayer.width;
   this.physics.world.bounds.height = this.TreeLayer.height;

   this.physics.world.bounds.width = this.RockLayer.width;
   this.physics.world.bounds.height = this.RockLayer.height;

   this.physics.world.bounds.width = this.Rock2Layer.width;
   this.physics.world.bounds.height = this.Rock2Layer.height;

   this.physics.world.bounds.width = this.WaterLayer.width;
   this.physics.world.bounds.height = this.WaterLayer.height;

   this.physics.world.bounds.width = this.BridgeLayer.width;
   this.physics.world.bounds.height = this.BridgeLayer.height;

   this.physics.world.bounds.width = this.BushesLayer.width;
   this.physics.world.bounds.height = this.BushesLayer.height;

   this.physics.world.bounds.width = this.BalconyLayer.width;
   this.physics.world.bounds.height = this.BalconyLayer.height;


// Object Layers
// Put Tiled object layer here
var startPoint = map.findObject("objectLayer",(obj)=> obj.name === "start")    

var npcPoint = map.findObject("objectLayer2",(obj)=> obj.name === "npc")

// The player and its settings
this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'Ashen');
this.player.setScale(0.8);

this.npc = this.physics.add.sprite(npcPoint.x, npcPoint.y, 'Echo').setScale(0.55).play("Echo-right")

// debug player
window.player = this.player

// adjust the width & height bounding box
this.player.body.setSize(this.player.width * 0.8, this.player.height * 0.8)

    // // Add any text to the game
    
           this.orbText = this.add.text(
      100,100, 'Orb: 0', {font: "40px",fill: "#00FFFF",}
    ).setScrollFactor(0)
    .setDepth(999)


    this.lifeText = this.add.text(
      300,100, 'Life: 4', {font: "40px",fill: "#00FFFF",}
    ).setScrollFactor(0)
    .setDepth(999)



this.physics.add.collider(this.player)
    // create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

// Camera follow player
this.cameras.main.startFollow(this.player);

  } /////////////////// end of create //////////////////////////////

  update() {

  if(
    this.player.x > 455 &&
    this.player.x < 520 &&
    this.player.y > 930 

  ) {
    console.log("Jump to myMap2")
    this.map2()
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

map2() {

  this.scene.start("myMap2")

}
  roomMap1(player, tile) {
    this.scene.start("beforeRoom1");
  }

  endSceneFunc(){
  this.scene.start("roomMap1")
  }

} //////////// end of class world ////////////////////////