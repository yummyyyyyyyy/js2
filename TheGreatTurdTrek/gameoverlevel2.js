class gameoverlevel2 extends Phaser.Scene {
  constructor() {
      super({ key: 'gameoverlevel2' });
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
        console.log("Spacebar pressed, goto listlevel2");
        this.scene.start("listlevel2");
    }, this);

    // Step 2 : Preload any images here

} // end of preload //
}