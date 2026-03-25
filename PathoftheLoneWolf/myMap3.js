class myMap3 extends Phaser.Scene {
  constructor() {
    super({
      key: "myMap3",
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
    this.load.tilemapTiledJSON("myMap3", "assets/Map3.tmj");

    this.load.image("Wall", "assets/crystal cave tiles.png");

    this.load.image("Lava", "assets/cubic-pixel-lava-magma.png");

    this.load.image("Ground", "assets/crystal cave tiles (1).png");


    this.load.spritesheet("orb","assets/orb-32x32.png",{
    frameWidth: 134,
    frameHeight: 135,
   });

    this.load.spritesheet("boss", "assets/boss-43x43.png", {
     frameWidth: 181,
    frameHeight: 181,
  });
  }

  create() {
    console.log("*** myMap3 scene");

    // Create the map from main
    let map = this.make.tilemap({
      key: "myMap3",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let WallTiles = map.addTilesetImage("crystal cave tiles", "Wall");

    let LavaTiles = map.addTilesetImage("cubic-pixel-lava-magma", "Lava");

    let GroundTiles = map.addTilesetImage("crystal cave tiles (1)", "Ground");

    let tilesArray = [WallTiles,LavaTiles,GroundTiles]

    // Load in layers by layers

    this.WallLayer = map.createLayer("Wall", tilesArray, 0,0,)

    this.LavaLayer = map.createLayer("Lava", tilesArray, 0,0,)
  
    this.GroundLayer = map.createLayer("Ground", tilesArray, 0,0,)


   this.physics.world.bounds.width = this.GroundLayer.width;
   this.physics.world.bounds.height = this.GroundLayer.height;

// Object Layers
// Put Tiled object layer here
var startPoint = map.findObject("objectLayer",(obj)=> obj.name === "start")   

let boss = map.findObject("objectLayer2",(obj)=> obj.name === "boss")

let item1 = map.findObject("objectLayer3",(obj)=> obj.name === "item1")

let item2 = map.findObject("objectLayer3",(obj)=> obj.name === "item2")

let item3 = map.findObject("objectLayer3",(obj)=> obj.name === "item3")

let item4 = map.findObject("objectLayer3",(obj)=> obj.name === "item4")


// The player and its settings
this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'Ashen');
this.player.setScale(0.8);

this.orb1 = this.physics.add.sprite(item1.x, item1.y, 'orb').setScale(0.3).play("orbAnim")

this.orb2 = this.physics.add.sprite(item2.x, item2.y, 'orb').setScale(0.3).play("orbAnim")

this.orb3 = this.physics.add.sprite(item3.x, item3.y, 'orb').setScale(0.3).play("orbAnim")

this.orb4 = this.physics.add.sprite(item4.x, item4.y, 'orb').setScale(0.3).play("orbAnim")


this.boss = this.physics.add.sprite(boss.x, boss.y, 'boss').setScale(0.8).play("boss-down")


this.physics.add.overlap(this.player, [this.orb1,this.orb2,this.orb3,this.orb4],this.collectOrb, null,this);

this.physics.add.overlap(this.player, [this.boss],this.hitEnemy, null,this);

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
      300,100, 'Life: 0', {font: "40px",fill: "#00FFFF",}
    ).setScrollFactor(0)
    .setDepth(999)


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
}/////////////////// end of update //////////////////////////////

collectOrb (player, item) {
  console.log("Player collect orb")
  
  item1++

  this.orbText.setText('Orb: {} ');

  // disable body
  item.disableBody (true,true)  
  
  if(item1 > 5) {
    this.winScene()
  }
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

map2() {

  this.scene.start("myMap2")
} 

winScene(){
this.scene.start("winScene")
}
 
  // Function to jump to roomMap3
  roomMap3(player, tile) {
    console.log("roomMap3 function");
    this.scene.start("roomMap3", {
    });
  }

} //////////// end of class world ////////////////////////
