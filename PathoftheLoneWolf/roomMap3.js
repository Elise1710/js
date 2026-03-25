class roomMap3 extends Phaser.Scene {

    constructor() {
        super({ key: 'roomMap3' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

    }

    create() {
        console.log('*** roomMap3 scene');
        
    }

    update() {

    }
}
