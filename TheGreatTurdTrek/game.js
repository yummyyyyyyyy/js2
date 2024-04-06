
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    backgroundColor: '#000000',
    scene: [ intro,storyline,gameplay,gameoverlevel2,gameoverlevel3,listlevel1,listlevel2,listlevel2details,level1,level2,listlevel3,level3,win,voucher],
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
       },

};

let game = new Phaser.Game(config);
window.fruit=0
window.paper=0
window.water=0