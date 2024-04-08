class gameoverlevel3 extends Phaser.Scene {
  constructor() {
      super({ key: 'gameoverlevel3' });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image('gameoverimg', 'assets/gameover.png');
      this.load.audio("gameoversound", "assets/gameover.wav");

  }

  create() {
    this.music = this.sound.add("gameoversound").setVolume(0.4);
    this.music.play();
    this.add.image(0, 0, "gameoverimg").setOrigin(0, 0);

    var spaceDown = this.input.keyboard.addKey('SPACE');

    spaceDown.on('down', function () {
        console.log("Spacebar pressed, goto listlevel3");
        this.scene.start("listlevel3");
    }, this);

    // Step 2 : Preload any images here

} // end of preload //
}