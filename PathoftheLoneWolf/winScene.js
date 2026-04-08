class winScene extends Phaser.Scene {

       constructor() {
        super({
            key: 'winScene'
        });
    }

      preload() {
          this.load.image("winScene", "assets/Victory Screen.png");

          this.load.audio("winSnd","assets/Wolf Victory Howling.wav")

    }

   create() {
        this.add.image (480,480,'winScene')

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

        this.winSceneSnd = this.sound.add("winSnd"); 

        this.winSceneSnd.play();

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        

item1 = 1;
item2 = 0;
item3 = 0;
item4 = 0;

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
         console.log('Jump to storyboard 6 scene');

            this.scene.start('story6Scene',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(80, 850, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}