class roomMap1 extends Phaser.Scene {

    constructor() {
        super({ key: 'roomMap1' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

    }

    create() {
        console.log('*** roomMap1 scene');
        
    }

    update() {

    }

    

}