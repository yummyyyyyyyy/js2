class level1 extends Phaser.Scene {
  constructor() {
    super({ key: "level1" });
  }

  // Put global variable here

  preload() {
    // Step 1, load JSON
    //music
    

    this.load.tilemapTiledJSON("level1", "assets/level1.tmj");
    this.load.spritesheet("fruits1", "assets/fruits1.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("fruits2", "assets/fruits2.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("fruits3", "assets/fruits3.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("fruits4", "assets/fruits4.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("fruits5", "assets/fruits5.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    



    // Step 2 : Preload any images here
    this.load.image("kitchenIMG", "assets/12_Kitchen_32x32.png");
    this.load.image("classroomIMG", "assets/5_Classroom_and_library_32x32.png");
    this.load.image("allwallIMG", "assets/allwall.png");
    this.load.image("carpetIMG", "assets/Carpet.png");
    this.load.image("trimsanddoorsIMG", "assets/trimsanddoors.png");
    this.load.image("woodIMG", "assets/Wood.png");
    this.load.image('life', 'assets/heart2.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio("collect", "assets/collect.wav");


    this.load.spritesheet("gen", "assets/boy.png", {
      frameWidth: 64,
      frameHeight: 65,
    });

  }

  create() {
    console.log("Tile tutorial");
    var key2Down = this.input.keyboard.addKey(50);

    this.fruit = this.sound.add("collect");
   

    key2Down.on('down', function(){
        console.log("Key 2 pressed");
            this.scene.start("level2");
        }, this );

        //object
    this.anims.create({
      key:'apple',
      frames:this.anims.generateFrameNumbers('fruits1',{ start:0, end:1 }),
      frameRate:3,
      repeat:-1
  });
  this.anims.create({
    key:'watermelon',
    frames:this.anims.generateFrameNumbers('fruits1',{ start:2, end:3 }),
    frameRate:3,
    repeat:-1
});
this.anims.create({
  key:'orange',
  frames:this.anims.generateFrameNumbers('fruits1',{ start:4, end:5 }),
  frameRate:3,
  repeat:-1
});
this.anims.create({
  key:'pumkin',
  frames:this.anims.generateFrameNumbers('fruits1',{ start:6, end:7 }),
  frameRate:3,
  repeat:-1
});
this.anims.create({
  key:'carrot',
  frames:this.anims.generateFrameNumbers('fruits2',{ start:0, end:1 }),
  frameRate:3,
  repeat:-1
});
      //character
    this.anims.create({
      key: "gen-up",
      frames: this.anims.generateFrameNumbers("gen", { start: 9, end: 11 }),
      frameRate: 5,
      repeat: 1,
    });

    this.anims.create({
      key: "gen-left",
      frames: this.anims.generateFrameNumbers("gen", { start: 0, end: 2 }),
      frameRate: 5,
      repeat: 1,
    });

    this.anims.create({
      key: "gen-down",
      frames: this.anims.generateFrameNumbers("gen", { start: 3, end: 5 }),
      frameRate: 5,
      repeat: 1,
    });

    this.anims.create({
      key: "gen-right",
      frames: this.anims.generateFrameNumbers("gen", { start: 6, end: 8 }),
      frameRate: 5,
      repeat: 1,
    });

    // this.anims.create({
    // key:'slowframe',
    // frames:this.anims.generateFrameNumbers('fire'),
    //{ start:0, end:3 }),
    //  frameRate:5,
    // repeat:-1

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let kitchenTiles = map.addTilesetImage("12_Kitchen_32x32", "kitchenIMG");
    let classroomTiles = map.addTilesetImage(
      "5_Classroom_and_library_32x32",
      "classroomIMG"
    );
    let allwallTiles = map.addTilesetImage("allwall", "allwallIMG");
    let carpetlTiles = map.addTilesetImage("Carpet", "carpetIMG");
    let trimsanddoorsTiles = map.addTilesetImage(
      "trimsanddoors",
      "trimsanddoorsIMG"
    );
    let woodTiles = map.addTilesetImage("Wood", "woodIMG");

    // Step 5  create an array of tiles
    let tilesArray = [
      kitchenTiles,
      classroomTiles,
      allwallTiles,
      carpetlTiles,
      trimsanddoorsTiles,
      woodTiles,
    ];

    // Step 6  Load in layers by layers
    this.ground = map.createLayer("ground", tilesArray, 0, 0);
    this.ground2 = map.createLayer("ground2", tilesArray, 0, 0);
    this.wall = map.createLayer("wall", tilesArray, 0, 0);
    this.door = map.createLayer("door", tilesArray, 0, 0);
    this.exit = map.createLayer("exit", tilesArray, 0, 0);
    this.chair = map.createLayer("chair", tilesArray, 0, 0);
    this.table = map.createLayer("table", tilesArray, 0, 0);
    this.rak = map.createLayer("rak", tilesArray, 0, 0);
    this.accesories = map.createLayer("accessories", tilesArray, 0, 0);
    this.food = map.createLayer("food", tilesArray, 0, 0);

    
  //object layer
    let start = map.findObject("ObjectLayer", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(start.x, start.y, "gen").setScale(1);
    window.player = this.player;

    //load fruit layer
    let fruit1 = map.findObject("ObjectLayer2", (obj) => obj.name === "fruit1");
    let fruit2 = map.findObject("ObjectLayer2", (obj) => obj.name === "fruit2");
    let fruit3 = map.findObject("ObjectLayer2", (obj) => obj.name === "fruit3");
    let fruit4 = map.findObject("ObjectLayer2", (obj) => obj.name === "fruit4");
    let fruit5 = map.findObject("ObjectLayer2", (obj) => obj.name === "fruit5");

    
 // Define your items with objectLayer
    this.fruit1 = this.physics.add.sprite(fruit1.x, fruit1.y, "fruit1").play("apple").setScale(2);
    this.fruit2 = this.physics.add.sprite(fruit2.x, fruit2.y, "fruit2").play("watermelon").setScale(2);
    this.fruit3 = this.physics.add.sprite(fruit3.x, fruit3.y, "fruit3").play("orange").setScale(2);
    this.fruit4 = this.physics.add.sprite(fruit4.x, fruit4.y, "fruit4").play("pumkin").setScale(2);
    this.fruit5 = this.physics.add.sprite(fruit5.x, fruit5.y, "fruit5").play("carrot").setScale(2);

    //resize box 
    this.fruit1.body.setSize(this.fruit1.width * 1, this.fruit1.height * 1);
    this.fruit2.body.setSize(this.fruit2.width * 1, this.fruit2.height * 1);
    this.fruit3.body.setSize(this.fruit3.width * 1, this.fruit3.height * 1);
    this.fruit4.body.setSize(this.fruit4.width * 1, this.fruit4.height * 1);
    this.fruit5.body.setSize(this.fruit5.width * 1, this.fruit5.height * 1);
    
    this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.2);

    //block layer
    this.wall.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall);

    this.door.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.door);

    this.exit.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.exit);

    this.chair.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.chair);

    this.table.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.table);

    this.rak.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.rak);

    this.accesories.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.accesories);

    this.food.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.food);


    // make the camera follow the player
     this.cameras.main.startFollow(this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    console.log("This is preloadScene spacebar V3");

    var spaceDown = this.input.keyboard.addKey('SPACE');

    spaceDown.on('down', function () {
      console.log("Space pressed, goto level2");
      this.scene.start("level2");
    }, this);

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);


    key1Down.on('down', function () {
      console.log("Key 1 pressed");
      this.scene.start("level1");
    }, this);

    key2Down.on('down', function () {
      console.log("Key 2 pressed");
      this.scene.start("level2");
    }, this);

key3Down.on('down', function () {
      console.log("Key 3 pressed");
      this.scene.start("level3");
    }, this);

     //hearts
     this.life1 = this.add
     .image(50, 40, "life")
     .setScale(1.5)
     .setScrollFactor(0)
     .setVisible(false);
   this.life2 = this.add
     .image(100, 40, "life")
     .setScale(1.5)
     .setScrollFactor(0)
     .setVisible(false);
   this.life3 = this.add
     .image(150, 40, "life")
     .setScale(1.5)
     .setScrollFactor(0)
     .setVisible(false);

   if (window.heart >= 3) {
     this.life1.setVisible(true);
     this.life2.setVisible(true);
     this.life3.setVisible(true);
   }
   else if (window.heart == 2) {
     this.life1.setVisible(true);
     this.life2.setVisible(true);
   }
   else if (window.heart == 1) {
     this.life1.setVisible(true);
   }

    // // camera follow player
    this.cameras.main.startFollow(this.player);

this.physics.add.overlap(this.player, [this.fruit1, this.fruit2, this.fruit3, this.fruit4,this.fruit5], this.collectfruit, null, this);

this.player.setCollideWorldBounds(true);  // don't go out of the this.map
  }
  // end of create //
 

  update(){
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
  
    if (
      this.player.x > 751 &&
      this.player.x < 807 &&
      this.player.y < 121 &&
      this.player.y > 102
      &&window.fruit > 4
    ) {
      console.log("listlevel2");
      this.listlevel2();
    }
    

  }


  
  ////////////////////// end of update ////////////////////////////////
  listlevel2(player, tile) {
    console.log("listlevel2 function");
    this.scene.start("listlevel2",);
  }
  
  collectfruit(player, item) {
    console.log("collectfruit");
    //this.cameras.main.shake(200);
    window.fruit++
    item.disableBody(true, true); // remove fire
    return false;
  }

// call this function when overlap
collectfruit(player, item) {
  console.log("collectfruit")
  this.fruit.play()
  window.fruit++
  // this.cameras.main.shake(50) // 500ms
  item.disableBody(true, true)
  window.item1 = 1
  return false;
}

  
} //////////// end of class world ///////////////////////


