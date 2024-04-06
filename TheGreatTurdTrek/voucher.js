class voucher extends Phaser.Scene {
  constructor() {
      super({ key: 'voucher' });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image('voucherimg', 'assets/voucher.png');
      this.load.audio("winsound", "assets/win.wav");
  }

  create() {
    this.winSnd = this.sound.add("winsound").setVolume(0.4);
    this.add.image(0, 0, 'winimg').setOrigin(0, 0);

    this.winSnd.play();
      this.add.image(0, 0, 'voucherimg').setOrigin(0, 0);

     

      // Step 2 : Preload any images here

  } // end of preload //

}