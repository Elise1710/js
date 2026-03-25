class gameOver extends Phaser.Scene {

       constructor() {
        super({
            key: 'gameOver'
        });
    }

      preload() {
          this.load.image("gameOver", "assets/Game Over Screen.png");

    }

   create() {

            console.log('*** Game Over scene');

        this.add.image (480,480,'gameOver')

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

life = 4;
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
        this.add.text(80, 850, 'Press spacebar to restart', {
            font: '50px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}