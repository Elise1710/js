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


          this.load.image("title", "assets/Title Screen.png",);

          this.load.audio("titleSnd","assets/Wolf Intro Howling.wav")

    }

    create() {

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
        

    
       console.log('*** Title Screen scene');

        // Stop background music
        if (globalBgMusic1) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic1.stop();
        }

        if (globalBgMusic2) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic2.stop();
        }

        if (globalBgMusic3) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic3.stop();
        }

        if (globalBgMusic4) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic4.stop();
        }
        
        
        this.add.image (480,480,'title')

        this.titleSceneSnd = this.sound.add("titleSnd"); 

        this.titleSceneSnd.play();

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');



        // On spacebar event, call the world scene        




        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to instruction scene');

            this.scene.start('instructionScene',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(80, 760, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });

}
}