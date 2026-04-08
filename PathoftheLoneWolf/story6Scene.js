class story6Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story6Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 6", "assets/Storyboard 6.png",);

          this.load.audio("endSnd","assets/Ending.wav")
    }

    create() {

        console.log('*** Storyboard 6 Screen scene');


        this.add.image (480,480,'storyboard 6')

                      // use global music variable, turn on loop, adjust the volume
globalBgMusic4 = this.sound.add("endSnd",{loop: true}).setVolume(4.0);

// start the background musicc
globalBgMusic4.play();

         if (globalBgMusic1) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic1.stop();
        }

         if (globalBgMusic2) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic2.stop();
        }

         if (globalBgMusic3) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic3.stop();
        }
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');



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
        this.add.text(170, 910, 'Press spacebar to continue', {
            font: '40px Courier',
            fill: '#FFFFFF'
        });

}
}