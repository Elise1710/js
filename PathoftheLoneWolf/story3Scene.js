class story3Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story3Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 3", "assets/Storyboard 3.png",);

          this.load.audio("caveSnd","assets/Cave.wav")
    }

    create() {

        console.log('*** Storyboard 3 Screen scene');


        this.add.image (480,480,'storyboard 3')

              // use global music variable, turn on loop, adjust the volume
globalBgMusic2 = this.sound.add("caveSnd",{loop: true}).setVolume(2.0);

// start the background musicc
globalBgMusic2.play();

     if (globalBgMusic1) { // Check if globalBgMusic is defined before calling stop()
            globalBgMusic1.stop();
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
        console.log('Jump to storyboard 4 scene');

            this.scene.start('story4Scene',
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