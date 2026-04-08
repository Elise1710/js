class story4Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story4Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 4", "assets/Storyboard 4.png",);


    }

    create() {

        console.log('*** Storyboard 4 Screen scene');


        this.add.image (480,480,'storyboard 4')

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
            console.log('Jump to myMap2 scene');

            this.scene.start('myMap2',
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