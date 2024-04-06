class storyline extends Phaser.Scene {
  constructor() {
      super({ key: 'storyline' });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image('storylineimg', 'assets/storyline.png');
      
  }

  create() {
    
      this.add.image(0, 0, 'storylineimg').setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto gameplay");
          this.scene.start("gameplay");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //

}