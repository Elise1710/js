class gameOver extends Phaser.Scene {

       constructor() {
        super({
            key: 'gameOver'
        });
    }

      preload() {
          this.load.image("gameOver", "assets/Game Over Screen.png");
          
          this.load.audio("sadSnd","assets/Wolf Sad Howling.wav")

    }

   create() {

            console.log('*** Game Over scene');

        this.add.image (480,480,'gameOver')

        // Ensure globalBgMusic1 is defined before attempting to stop it
        if (globalBgMusic1) {
            globalBgMusic1.stop();
        }

        // Ensure globalBgMusic2 is defined before attempting to stop it
        if (globalBgMusic2) {
            globalBgMusic2.stop();
        }

        // Ensure globalBgMusic3 is defined before attempting to stop it
        if (globalBgMusic3) {
            globalBgMusic3.stop();
        }

        // Ensure globalBgMusic4 is defined before attempting to stop it
         if (globalBgMusic4) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic4.stop();
        }

        this.gameOverSnd = this.sound.add("sadSnd");
        this.gameOverSnd.play();

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');


life = 4;
item1 = 0;
item2 = 0;
item3 = 0;
item4 = 0;

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to title scene');

            this.scene.start('preload',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(80, 850, 'Press spacebar to restart', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}