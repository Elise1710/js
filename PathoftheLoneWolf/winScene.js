class winScene extends Phaser.Scene {

       constructor() {
        super({
            key: 'winScene'
        });
    }

      preload() {
          this.load.image("winScene", "assets/Victory Screen.png");

    }

   create() {

            console.log('*** Victory scene');

        this.add.image (480,480,'winScene')

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

item1 = 0;
item2 = 0;
item3 = 0;
item4 = 0;

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
        this.add.text(80, 850, 'Press spacebar to continue', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}