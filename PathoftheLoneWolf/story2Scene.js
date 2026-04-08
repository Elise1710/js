class story2Scene extends Phaser.Scene {

    constructor() {
        super({
            key: 'story2Scene'
        });

        // Put global variable here
    }

    preload() {
          this.load.image("storyboard 2", "assets/Storyboard 2.png",);


    }

    create() {

        console.log('*** Storyboard 2 Screen scene');


        this.add.image (480,480,'storyboard 2')

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
        console.log('Jump to myMap1 scene');

            this.scene.start('myMap1',
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