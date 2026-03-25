class beforeRoom extends Phaser.Scene {

       constructor() {
        super({
            key: 'beforeRoom1'
        });
    }

      preload() {
          this.load.image("instruction", "assets/Instruction Screen.png");

    }

   create() {

            console.log('*** beforeRoom1 scene');

        this.add.image (480,480,'instruction')

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');


        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {

            this.scene.start('roomMap2');
        }, 
        this,
    );


        // Add any text in the main page
        this.add.text(80, 900, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}