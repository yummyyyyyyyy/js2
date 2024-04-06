
class level2 extends Phaser.Scene {
    constructor() {
      super({ key: "level2" });
    }
  
    // Put global variable here
  
    preload() {
      // Step 1, load JSON
     
   

      this.load.tilemapTiledJSON("level2", "assets/level2.tmj");
      this.load.spritesheet("toiletpaper", "assets/toiletpaper.png", {
        frameWidth: 400,
        frameHeight: 345,
      });
      this.load.spritesheet("water", "assets/water.png", {
        frameWidth: 400,
        frameHeight: 345,
      });

      // this.load.spritesheet('fire', 'assets/fire.png',{ frameWidth:40, frameHeight:70 });
  
      // Step 2 : Preload any images here

      this.load.image("groceryIMG", "assets/16_Grocery_store_32x32.png");
      this.load.image("livingroomIMG", "assets/2_LivingRoom_32x32.png");
      this.load.image("allwallIMG", "assets/allwall.png");
      this.load.image("tileIMG", "assets/TileAndStone.png");
      this.load.image("trimsanddoorsIMG", "assets/trimsanddoors.png");
      this.load.image("wallIMG", "assets/walltexture.png");
      this.load.image("woodIMG", "assets/Wood.png");
      
      this.load.audio("collect", "assets/collect.wav");

      this.load.spritesheet("gen", "assets/boy.png", {
        frameWidth: 64,
        frameHeight: 65,
      });
      this.load.spritesheet("mouse", "assets/mouse.png", {
        frameWidth: 64,
        frameHeight: 65,
      });
     
      

    }
  
    create() {

var key3Down = this.input.keyboard.addKey(51);

this.paper = this.sound.add("collect");
this.water = this.sound.add("collect");

console.log("life:", window.heart);

      key3Down.on('down', function(){
          console.log("Key 3 pressed");
              this.scene.start("level3");
          }, this );

          this.anims.create({
            key:'paper1',
            frames:this.anims.generateFrameNumbers('toiletpaper',{ start:0, end:1 }),
            frameRate:3,
            repeat:-1
        });
        this.anims.create({
          key:'paper2',
          frames:this.anims.generateFrameNumbers('toiletpaper',{ start:0, end:1 }),
          frameRate:3,
          repeat:-1
      });
      this.anims.create({
        key:'paper3',
        frames:this.anims.generateFrameNumbers('toiletpaper',{ start:0, end:1 }),
        frameRate:3,
        repeat:-1
    });
    this.anims.create({
      key:'water1',
      frames:this.anims.generateFrameNumbers('water',{ start:0, end:1 }),
      frameRate:3,
      repeat:-1
  });
  this.anims.create({
    key:'water2',
    frames:this.anims.generateFrameNumbers('water',{ start:0, end:1 }),
    frameRate:3,
    repeat:-1
});
this.anims.create({
  key: 'mouseAnim', // Unique identifier for the animation
  frames: this.anims.generateFrameNumbers('mouse2', { start: 0, end: 2}), // Frame numbers or array of frame numbers
  frameRate: 5, // Number of frames per second
  repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
});

//gen
      console.log("Tile tutorial");
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

      //mouse
      this.anims.create({
        key: "mouse-left",
        frames: this.anims.generateFrameNumbers("mouse", { start: 9, end: 11 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "mouse-up",
        frames: this.anims.generateFrameNumbers("mouse", { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "mouse-right",
        frames: this.anims.generateFrameNumbers("mouse", { start: 3, end: 5 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "mouse-down",
        frames: this.anims.generateFrameNumbers("mouse", { start: 6, end: 8 }),
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
      let map = this.make.tilemap({ key: "level2" });
  
      // Step 4 Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      let groceryTiles = map.addTilesetImage("16_Grocery_store_32x32", "groceryIMG");
      let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32","livingroomIMG");
      let allwallTiles = map.addTilesetImage("allwall", "allwallIMG");
      let tileTiles = map.addTilesetImage("TileAndStone", "tileIMG");
      let trimsanddoorsTiles = map.addTilesetImage("trimsanddoors","trimsanddoorsIMG");
      let wallTiles = map.addTilesetImage("walltexture", "wallIMG");
      let woodTiles = map.addTilesetImage("Wood", "woodIMG");
      
      // Step 5  create an array of tiles
      let tilesArray = [
        groceryTiles,
        livingroomTiles,
        allwallTiles,
        tileTiles,
        trimsanddoorsTiles,
        wallTiles,
        woodTiles
,
      ];
  
      // Step 6  Load in layers by layers
      this.ground = map.createLayer("ground", tilesArray, 0, 0);
      this.wall = map.createLayer("wall", tilesArray, 0, 0);
      this.door = map.createLayer("door", tilesArray, 0, 0);
      this.exit = map.createLayer("exit", tilesArray, 0, 0);
      this.rak = map.createLayer("rak", tilesArray, 0, 0);
      this.accesories = map.createLayer("accessories", tilesArray, 0, 0);
      
  
  //object layer
      let start = map.findObject("ObjectLayer", (obj) => obj.name === "start");

//load paper object
let paper1 = map.findObject("ObjectLayer2", (obj) => obj.name === "paper1");
let paper2 = map.findObject("ObjectLayer2", (obj) => obj.name === "paper2");
let paper3 = map.findObject("ObjectLayer2", (obj) => obj.name === "paper3");

//load water object
let water1 = map.findObject("ObjectLayer2", (obj) => obj.name === "water1");
let water2 = map.findObject("ObjectLayer2", (obj) => obj.name === "water2");

//mouse
let mouse1 = map.findObject("ObjectLayer3", (obj) => obj.name === "mouse1"); 
let mouse2 = map.findObject("ObjectLayer3", (obj) => obj.name === "mouse2"); 
let mouse3 = map.findObject("ObjectLayer3", (obj) => obj.name === "mouse3"); 
let mouse4 = map.findObject("ObjectLayer3", (obj) => obj.name === "mouse4"); 
   

      this.player = this.physics.add.sprite(start.x, start.y, "gen").setScale(1);
      window.player = this.player;
  
      this.paper1 = this.physics.add.sprite(paper1.x, paper1.y, "paper1").play("paper1").setScale(0.1);
      this.paper2 = this.physics.add.sprite(paper2.x, paper2.y, "paper2").play("paper2").setScale(0.1);
      this.paper3 = this.physics.add.sprite(paper3.x, paper3.y, "paper3").play("paper3").setScale(0.1);
      this.water1 = this.physics.add.sprite(water1.x, water1.y, "water1").play("water1").setScale(0.1);
      this.water2 = this.physics.add.sprite(water2.x, water2.y, "water2").play("water2").setScale(0.1);

      this.mouse1 = this.physics.add.sprite(mouse1.x, mouse1.y, "mouse").play("mouse-left").setScale(1.2)
      this.mouse2 = this.physics.add.sprite(mouse2.x, mouse2.y, "mouse").play("mouse-right").setScale(1.2)
      this.mouse3 = this.physics.add.sprite(mouse3.x, mouse3.y, "mouse").play("mouse-left").setScale(1.2)
      this.mouse4 = this.physics.add.sprite(mouse4.x, mouse4.y, "mouse").play("mouse-right").setScale(1.2)
  
      this.paper1.body.setSize(this.paper1.width * 1, this.paper1.height * 1);
      this.paper2.body.setSize(this.paper2.width * 1, this.paper2.height * 1);
      this.paper3.body.setSize(this.paper3.width * 1, this.paper3.height * 1);
      this.water1.body.setSize(this.water1.width * 1, this.water1.height * 1);
      this.water2.body.setSize(this.water2.width * 1, this.water1.height * 1);

      
this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.2);
  

      //block layer
      this.wall.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.wall);
  
      this.door.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.door);
  
      this.exit.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.exit);

this.rak.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.rak);
  
      this.accesories.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.accesories);
  
      
  
  
      // make the camera follow the player
       this.cameras.main.startFollow(this.player);
  
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
      
      this.physics.add.overlap(this.player, [this.paper1, this.paper2, this.paper3], this.collectpaper, null, this)
      this.physics.add.overlap(this.player, [this.water1, this.water2], this.collectwater, null, this)
      this.physics.add.overlap(this.player,[this.mouse1,this.mouse2,this.mouse3,this.mouse4] ,this.hitmouse,null,this);

      this.player.setCollideWorldBounds(true);  // don't go out of the this.map
    }

    
    // end of create //
  
    update() {

      this.physics.moveToObject(this.mouse1,this.player, 250, 3000);
      this.physics.moveToObject(this.mouse2,this.player, 250, 3050);
      this.physics.moveToObject(this.mouse3,this.player, 250, 3000);
      this.physics.moveToObject(this.mouse4,this.player, 250, 3000);

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
  
      &&window.paper > 2
  &&window.water>1
      ) 
      {
        console.log("listlevel3");
        this.listlevel3();
  
      }
  
      // deduct live
     
    }
  
    ////////////////////// end of update ////////////////////////////////
    listlevel3(player, tile) {
      console.log("listlevel3 function");
      this.scene.start("listlevel3",);
    }
  collectpaper(player, item) {
    console.log("collectpaper");
    //this.cameras.main.shake(200);
    window.paper++
    item.disableBody(true, true); // remove fire
    return false;
  }

  collectwater(player, item) {
    console.log("collectwater");
    //this.cameras.main.shake(200);
    window.water++
    item.disableBody(true, true); // remove fire
    return false;
  }

// call this function when overlap
collectpaper(player, item) {
  console.log("collectpaper")
  this.paper.play()
  window.paper++
  // this.cameras.main.shake(50) // 500ms
  item.disableBody(true, true)
  window.item1 = 1
  return false;
}

collectwater(player, item) {
  console.log("collectwater")
  this.water.play()
  window.water++
  // this.cameras.main.shake(50) // 500ms
  item.disableBody(true, true)
  window.item1 = 1
  return false;
}
hitmouse(player, item) {
  console.log("hitmouse");
  this.cameras.main.shake(200);
 this.scene.start("gameoverlevel2")
  return false;
}

level3(player, tile) {
  console.log("level3 function");
  this.scene.start("level3",);
}


 


  
}

//////////// end of class world ///////////////////////

