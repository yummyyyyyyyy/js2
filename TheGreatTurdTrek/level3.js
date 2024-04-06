
class level3 extends Phaser.Scene {
    constructor() {
      super({ key: "level3" });
    }
  
    // Put global variable here
  
    preload() {
      // Step 1, load JSON
      
     

      this.load.tilemapTiledJSON("level3", "assets/level3.tmj");
      this.load.spritesheet("gen", "assets/boy.png", {
        frameWidth: 64,
        frameHeight: 65,
      });
      this.load.spritesheet("mouse", "assets/mouse2.png", {
        frameWidth: 64,
        frameHeight: 64,
      });
      this.load.spritesheet("toilet", "assets/toilet.png", {
        frameWidth: 400,
        frameHeight: 345,
      });
  
      // Step 2 : Preload any images here
      this.load.image("basementIMG", "assets/14_Basement_32x32.png");
      this.load.image("livingroomIMG", "assets/2_LivingRoom_32x32.png");
      this.load.image("telivisionIMG", "assets/23_Tevelision_and_Film_Studio_32x32.png");
      this.load.image("bathroomIMG", "assets/3_Bathroom_32x32.png");
      this.load.image("wallsIMG", "assets/nauticalWalls.png");
      this.load.image("tileIMG", "assets/TileAndStone.png");
      this.load.image("trimsanddoorsIMG", "assets/trimsanddoors.png");
      this.load.image("woodIMG", "assets/Wood.png");
      this.load.image("allwallIMG", "assets/allwall.png");
      
    }
  
    create() {
      console.log("Tile tutorial");
      console.log("mouse", window.mouse );
      this.anims.create({
        key:'toilet',
        frames:this.anims.generateFrameNumbers('toilet',{ start:0, end:1 }),
        frameRate:3,
        repeat:-1
    });
      


//gen
      this.anims.create({
        key: "gen-up",
        frames: this.anims.generateFrameNumbers("gen", { start: 9, end: 11 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "gen-left",
        frames: this.anims.generateFrameNumbers("gen", { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "gen-down",
        frames: this.anims.generateFrameNumbers("gen", { start: 3, end: 5 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "gen-right",
        frames: this.anims.generateFrameNumbers("gen", { start: 6, end: 8 }),
        frameRate: 5,
        repeat: -1,
      });
   
      // this.anims.create({
      // key:'slowframe',
      // frames:this.anims.generateFrameNumbers('fire'),
      //{ start:0, end:3 }),
      //  frameRate:5,
      // repeat:-1
  
      //Step 3 - Create the map from main
      let map = this.make.tilemap({ key: "level3" });
  
      // Step 4 Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      let basementTiles = map.addTilesetImage("14_Basement_32x32", "basementIMG");
      let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32","livingroomIMG");
      let telivisionTiles = map.addTilesetImage("23_Tevelision_and_Film_Studio_32x32","telivisionIMG");
      let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32","bathroomIMG");
      let wallsTiles = map.addTilesetImage("nauticalWalls","wallsIMG");
      let tileTiles = map.addTilesetImage("TileAndStone", "tileIMG");
    let trimsanddoorsTiles = map.addTilesetImage("trimsanddoors","trimsanddoorsIMG");
    let woodTiles = map.addTilesetImage("Wood", "woodIMG");
      let allwallTiles = map.addTilesetImage("allwall", "allwallIMG");
      
      // Step 5  create an array of tiles
      let tilesArray = [
        basementTiles,
        livingroomTiles,
        telivisionTiles,
        bathroomTiles,
        wallsTiles,
        tileTiles,
        trimsanddoorsTiles,
        woodTiles,
        allwallTiles,
,
      ];
  
      // Step 6  Load in layers by layers
      this.ground = map.createLayer("ground", tilesArray, 0, 0);
      this.ground2 = map.createLayer("ground2", tilesArray, 0, 0);
      this.stair = map.createLayer("stair", tilesArray, 0, 0);
      this.wall1 = map.createLayer("wall1", tilesArray, 0, 0);
      this.texture = map.createLayer("texture", tilesArray, 0, 0);
      this.wall2 = map.createLayer("wall2", tilesArray, 0, 0);
      this.walltexture = map.createLayer("walltexture", tilesArray, 0, 0)
      this.accessoriesbathroom = map.createLayer("accessoriesbathroom", tilesArray, 0, 0);
      this.toiletwall1 = map.createLayer("toiletwall1", tilesArray, 0, 0);
      this.toiletwall2 = map.createLayer("toiletwall2", tilesArray, 0, 0);
      this.sofa = map.createLayer("sofa", tilesArray, 0, 0);
      this.rak = map.createLayer("rak", tilesArray, 0, 0);
      this.television = map.createLayer("television", tilesArray, 0, 0);
      this.accessories = map.createLayer("accessories", tilesArray, 0, 0);
      
  
  //load object layer
      let start = map.findObject("ObjectLayer", (obj) => obj.name === "start");
      let toilet = map.findObject("ObjectLayer2", (obj) => obj.name === "toilet");
      let mouse1 = map.findObject("ObjectLayer3", (obj) => obj.name === "mouse1"); 

      this.player = this.physics.add.sprite(start.x, start.y, "gen").setScale(1);
      window.player = this.player;

      this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.2);
      this.toilet = this.physics.add.sprite(toilet.x, toilet.y, "toilet").play("toilet").setScale(0.2);
      this.mouse1 = this.physics.add.sprite(mouse1.x, mouse1.y, "mouse")

      this.tweens.add({
        targets: this.mouse1,
        y: 474,
        flipX: true,
        yoyo: true,
        duration: 1200,
        repeat: -1
    })
  
      //block layer

    this.wall1.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall1);
  
      this.texture.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.texture);
  
      this.wall2.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.wall2);

      this.walltexture.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.walltexture);

      this.accessoriesbathroom.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.accessoriesbathroom);

      this.toiletwall1.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.toiletwall1);

      this.toiletwall2.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.toiletwall2);

      this.sofa.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.sofa);
      
      this.rak.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.rak);
  
      this.television.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.television);

      this.accessories.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.accessories);
      // make the camera follow the player
      // this.cameras.main.startFollow(this.player);
  
      // create the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
      console.log("This is preloadScene spacebar V3");

    var spaceDown = this.input.keyboard.addKey('SPACE');

    spaceDown.on('down', function () {
      console.log("Space pressed, goto level2");
      this.scene.start("farm");
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
  
      // // camera follow player
      this.cameras.main.startFollow(this.player);

      this.physics.add.overlap(this.player, [this.toilet], this.collecttoilet, null, this)
      this.physics.add.overlap(this.player, [this.mouse1], this.hitmouse1, null, this)
      
    }
    // end of create //
  
    update() {
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
    }
  
    // end of update //
    // Function to jump to room1
 
    level3(player, tile) {
      console.log("level3 function");
      this.scene.start("level3",);
    
  }
  collecttoilet(player, item) {
    console.log("collecttoilet");
    this.cameras.main.shake(200);
   this.scene.start("win")
    return false;
  }

  hitmouse1(player, item) {
    console.log("hitmouse1");
    this.cameras.main.shake(200);
   this.scene.start("gameoverlevel3")
    return false;
  }
  }
  