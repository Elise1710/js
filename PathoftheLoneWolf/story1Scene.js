class story1Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story1Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 1", "assets/Storyboard 1.png",);

          this.load.audio("forestSnd","assets/Forest.wav")
    }

    create() {

        console.log('*** Storyboard 1 Screen scene');


        this.add.image (480,480,'storyboard 1')

          // use global music variable, turn on loop, adjust the volume
globalBgMusic1 = this.sound.add("forestSnd",{loop: true}).setVolume(1.0);

// start the background musicc
globalBgMusic1.play();

        if (globalBgMusic2) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic2.stop();
        }

           if (globalBgMusic3) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic3.stop();
        }

         if (globalBgMusic4) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic4.stop();
        }
    
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');



        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
       console.log('Jump to storyboard 2 scene');

            this.scene.start('story2Scene',
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