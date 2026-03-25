class preload extends Phaser.Scene {

    constructor() {
        super({
            key: 'preload'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here
        this.load.spritesheet("Ashen", "assets/character-32x32.png", {
            frameWidth: 134,
            frameHeight: 135,
        });

        this.load.spritesheet("Echo", "assets/NPC-32x32(2).png", {
            frameWidth: 134,
            frameHeight: 135,
        });

        this.load.spritesheet("enemy1", "assets/enemy1-32x32(1).png", {
            frameWidth: 137,
            frameHeight: 135,
        });

        this.load.spritesheet("enemy1(1)", "assets/enemy1-32x32(2).png", {
            frameWidth: 137,
            frameHeight: 135,
        });

        this.load.spritesheet("enemy2", "assets/enemy2-32x32(1).png", {
            frameWidth: 134,
            frameHeight: 134,
        });

        this.load.spritesheet("enemy2(1)", "assets/enemy2-32x32(2).png", {
            frameWidth: 134,
            frameHeight: 134,
        });


       this.load.spritesheet("boss", "assets/boss-43x43.png", {
            frameWidth: 181,
            frameHeight: 181,
        });
          this.load.image("title", "assets/Title Screen.png",);

    }

    create() {

        console.log('*** Title Screen scene');

        this.add.image (480,480,'title')

        this.anims.create({
            key: 'Ashen-left',
            frames: this.anims.generateFrameNumbers('Ashen',
                { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Ashen-right',
            frames: this.anims.generateFrameNumbers('Ashen',
                { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Ashen-up',
            frames: this.anims.generateFrameNumbers('Ashen',
                { start: 8, end: 11 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Ashen-down',
            frames: this.anims.generateFrameNumbers('Ashen',
                { start: 12, end: 15 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Echo-right',
            frames: this.anims.generateFrameNumbers('Echo',
                { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Echo-left',
            frames: this.anims.generateFrameNumbers('Echo',
                { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Echo-down',
            frames: this.anims.generateFrameNumbers('Echo',
                { start: 8, end: 11 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'Echo-up',
            frames: this.anims.generateFrameNumbers('Echo',
                { start: 12, end: 15 }),
            frameRate: 5,
            repeat: -1
        });

           this.anims.create({
        key:'enemy2-left',
        frames:this.anims.generateFrameNumbers('enemy2',
         { start:0, end:2 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'enemy2-right',
        frames:this.anims.generateFrameNumbers('enemy2',
           { start:3, end:5 }),
        frameRate:5,
        repeat:-1
    });

     this.anims.create({
        key:'enemy2-up',
        frames:this.anims.generateFrameNumbers('enemy2',
          { start:6, end:8 }),
        frameRate:5,
        repeat:-1
    });

      this.anims.create({
        key:'enemy2-down',
        frames:this.anims.generateFrameNumbers('enemy2',
       { start:12, end:15 }),
        frameRate:5,
        repeat:-1
    });

        this.anims.create({
        key:'enemy2-right',
        frames:this.anims.generateFrameNumbers('enemy2(1)',
         { start:0, end:2 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'enemy2-left',
        frames:this.anims.generateFrameNumbers('enemy2(1)',
           { start:3, end:5 }),
        frameRate:5,
        repeat:-1
    });

     this.anims.create({
        key:'enemy2-down',
        frames:this.anims.generateFrameNumbers('enemy2(1)',
          { start:6, end:8 }),
        frameRate:5,
        repeat:-1
    });

      this.anims.create({
        key:'enemy2-up',
        frames:this.anims.generateFrameNumbers('enemy2(1)',
       { start:12, end:15 }),
        frameRate:5,
        repeat:-1
    });

          this.anims.create({
        key:'boss-down',
        frames:this.anims.generateFrameNumbers('boss',
       { start:0, end:3 }),
        frameRate:5,
        repeat:-1
    });

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to myMap1 scene');

            this.scene.start('myMap1',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(80, 700, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}