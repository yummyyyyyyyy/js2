class listlevel1 extends Phaser.Scene {
    constructor() {
        super({ key: 'listlevel1' });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image('listlevel1img', 'assets/level1.jpg');
        

    }

    create() {
        // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
        // this.music.play();
        this.add.image(0, 0, 'listlevel1img').setOrigin(0, 0);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto level1");
            this.scene.start("level1");
        }, this);

        // Step 2 : Preload any images here

    } // end of preload //
}