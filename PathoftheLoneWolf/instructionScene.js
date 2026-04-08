class instructionScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'instructionScene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("instruction", "assets/Instruction Screen.png",);


    }

    create() {

        console.log('*** Instruction Screen scene');

       if (globalBgMusic1) { // Add this check
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

        this.add.image (480,480,'instruction')

    
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');



        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to storyboard 1 scene');

            this.scene.start('story1Scene',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(80, 880, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });

}
}