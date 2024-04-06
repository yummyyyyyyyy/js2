class win extends Phaser.Scene {
  constructor() {
      super({ key: 'win' });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image('winimg', 'assets/winpage.png');
      this.load.audio("winsound", "assets/win.wav");

  }

  create() {
      this.winSnd = this.sound.add("winsound").setVolume(1);
      this.add.image(0, 0, 'winimg').setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto voucher");
          this.scene.start("voucher");
      }, this);

}
}