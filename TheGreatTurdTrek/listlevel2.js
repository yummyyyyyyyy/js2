class listlevel2 extends Phaser.Scene {
    constructor() {
        super({ key: 'listlevel2' });
    }

    preload() {

        // Step 1, load JSON
        // simple Main Page image
        this.load.image('listlevel2img', 'assets/level2.jpg');
        

    }

    create() {
        // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
        // this.music.play();
        this.add.image(0, 0, 'listlevel2img').setOrigin(0, 0);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
            console.log("Spacebar pressed, goto listlevel2details");
            this.scene.start("listlevel2details");
        }, this);

        // Step 2 : Preload any images here

    } // end of preload //
}