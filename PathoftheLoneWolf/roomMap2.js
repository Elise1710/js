class roomMap2 extends Phaser.Scene {

    constructor() {
        super({ key: 'roomMap2' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

    }

    create() {
        console.log('*** roomMap2 scene');
        
    }

    update() {

    }

    

}