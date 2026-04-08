class story5Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story5Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 5", "assets/Storyboard 5.png",);

          this.load.audio("lavaSnd","assets/Lava.wav")
    }

    create() {

        console.log('*** Storyboard 5 Screen scene');


        this.add.image (480,480,'storyboard 5')

                      // use global music variable, turn on loop, adjust the volume
globalBgMusic3 = this.sound.add("lavaSnd",{loop: true}).setVolume(3.0);

// start the background musicc
globalBgMusic3.play();

     if (globalBgMusic1) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic1.stop();
        }

         if (globalBgMusic2) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic2.stop();
        }

         if (globalBgMusic4) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic4.stop();
        }
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');



        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to myMap3 scene');

            this.scene.start('myMap3',
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