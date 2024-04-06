class listlevel2details extends Phaser.Scene {
    constructor() {
        super({ key: 'listlevel2details' });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image('listlevel2detailsimg', 'assets/level2details.jpg');
        

    }

    create() {
        // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
        // this.music.play();
        this.add.image(0, 0, 'listlevel2detailsimg').setOrigin(0, 0);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto level2");
            this.scene.start("level2");
        }, this);

        // Step 2 : Preload any images here

    } // end of preload //
}