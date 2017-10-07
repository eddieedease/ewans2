(function () {
    'use strict';

    function Screensaver() {

    }

    var keyq;
    var keyw;
    var keye;
    var keya;
    var keys;
    var keyd;
    var keyz;
    var keyx;
    var keyi;
    var keyo;
    var keyp;

    var keyleft;
    var keyright;
    var keyup;
    var keydown;

    var video;
    var sprite;

    var cursors;
    var keycursors;

    var valid;
    var creditadd;

    var credit;

    var tweenrecyclespeel;
    var recyclespeel;
   
    var kiesspelers;
    var selectie;

    var readytoplay = false;

     var letsplay;
    var letsplaytween;
    var kiesspelerstween;

    var animationstarted = false;

    var is1player = true;

    var levelsound;
    /*
        var distance = 700;
        var speed = 2;
        var max = 8;

        var canvas;

        var xx = [];
        var yy = [];
        var zz = [];

        var xx2 = [];
        var yy2 = [];
        var zz2 = [];

        var xx3 = [];
        var yy3 = [];
        var zz3 = [];*/

    var text;

    Screensaver.prototype = {
        create: function () {
            credit = localStorage.getItem('credits');
              // TODO: Video
            
            /*canvas = this.game.add.bitmapData(1000, 563);
            canvas.addToWorld();
            
            for (var i = 0; i < max; i++) {
              xx[i] = Math.floor(Math.random() * 1000) - 400;
              yy[i] = Math.floor(Math.random() * 563) - 300;
              zz[i] = Math.floor(Math.random() * 1700) - 100;
            }

            for (var n = 0; n < max; n++) {
              xx2[n] = Math.floor(Math.random() * 1000) - 400;
              yy2[n] = Math.floor(Math.random() * 563) - 300;
              zz2[n] = Math.floor(Math.random() * 1700) - 100;
            }

            for (var b = 0; b < max; b++) {
              xx3[b] = Math.floor(Math.random() * 1000) - 400;
              yy3[b] = Math.floor(Math.random() * 563) - 300;
              zz3[b] = Math.floor(Math.random() * 1700) - 100;
            }*/

            levelsound = this.game.add.audio('levelsound');
            
            this.game.stage.backgroundColor = "#000";

            video = this.game.add.video('introfilm');
            video.stop();
            video.play(true);

            
            sprite = video.addToWorld(0, 0, 0, 0);
            sprite.x = 0;
            sprite.y = 0;

            animationstarted = false;
            is1player = true;
            recyclespeel = this.game.add.sprite(70, 200, 'recyclespeel');
            recyclespeel.alpha = 0;
            //  Here we create a tween on the sprite created above
            // tweenrecyclespeel = this.game.add.tween(recyclespeel).to({
            //     alpha: 1
            // }, 2000, "Linear", true, 0, -1);


            //  The object defines the properties to tween.
            //  In this case it will move to x 800
            //  The 5000 is the duration in ms - 5000ms = 5 seconds
            //tweenrecyclespeel.yoyo(true, 3000);
            //text = this.game.add.bitmapText(this.game.width / 2, this.game.height / 5, 'scorefont', 'Gooi het afval in de goede container', 40);
            //text.align = "center";
            // text.anchor.set(0.5);


            letsplay = this.game.add.sprite(200, 180, 'letsplay');
            letsplay.alpha = 0;

            kiesspelers = this.game.add.sprite(90, 120, 'kiesspelers');
            kiesspelers.alpha = 0;

            selectie = this.game.add.sprite(80, 140, 'selectie');
            selectie.alpha = 0;



            readytoplay = false;
            this.game.multiplay = false;

          



            cursors = this.game.input.keyboard.createCursorKeys();


            // keyq = this.input.keyboard.addKey(Phaser.Keyboard.Q);
            // keyw = this.input.keyboard.addKey(Phaser.Keyboard.W);
            // keye = this.input.keyboard.addKey(Phaser.Keyboard.E);
            // keya = this.input.keyboard.addKey(Phaser.Keyboard.A);
            // keys = this.input.keyboard.addKey(Phaser.Keyboard.S);
            // keyd = this.input.keyboard.addKey(Phaser.Keyboard.D);
            keyz = this.input.keyboard.addKey(Phaser.Keyboard.Z);
            // keyx = this.input.keyboard.addKey(Phaser.Keyboard.X);
            keyi = this.input.keyboard.addKey(Phaser.Keyboard.I);
            // keyo = this.input.keyboard.addKey(Phaser.Keyboard.O);
            // keyp = this.input.keyboard.addKey(Phaser.Keyboard.P);





            // keyq.onDown.add(this.onDown, this);
            // keyw.onDown.add(this.onDown, this);
            // keye.onDown.add(this.onDown, this);
            // keya.onDown.add(this.onDown, this);
            // keys.onDown.add(this.onDown, this);
            // keyd.onDown.add(this.onDown, this);
            keyz.onDown.add(this.onDown, this);
            // keyx.onDown.add(this.onDown, this);
            keyi.onDown.add(this.onDown, this);
            // keyo.onDown.add(this.onDown, this);
            // keyp.onDown.add(this.onDown, this);
            //cursors.onDown.add(this.onDown, this);




            // creditadd = this.input.keyboard.addKey(Phaser.Keyboard.O);
            // creditadd.onDown.add(this.creditadd, this);




        },

        creditadd: function () {




            credit = parseInt(credit) + 3;

            localStorage.setItem('credits', credit);

            this.game.aantalphones = this.game.aantalphones + 1;
            localStorage.setItem('aantalphones', this.game.aantalphones);

            this.game.time.events.add(Phaser.Timer.SECOND * 3, this.creditgone, this);
        },
        creditgone: function () {
            this.game.time.events.remove(Phaser.Timer.SECOND * 3, this.creditgone, this);

            this.game.state.start('menu', true, false);
        },

        update: function () {

            if (cursors.left.isDown) {
                //  Move to the left
                this.game.state.start('menu', true, false);
                selectie.x = 80;
                this.game.multiplay = false;
            }
            if (cursors.right.isDown) {
                //  Move to the left
                this.game.state.start('menu', true, false);
                selectie.x = 550;
                this.game.multiplay = true;
            }

            /*canvas.clear();

      for (var i = 0; i < max; i++) {
        var perspective = distance / (distance + zz[i]);
        var x = this.game.world.centerX + xx[i] * perspective;
        z
        var y = this.game.world.centerY + yy[i] * perspective + 400;

        zz[i] += speed;

        if (zz[i] > 300) {
          zz[i] -= 600;
        }

        //  Swap this for a standard drawImage call
        canvas.draw('bullet2', x, y);
      }

      for (var q = 0; q < max; q++) {
        var perspectiveq = distance / (distance + zz2[q]);
        var x = this.game.world.centerX + xx2[q] * perspectiveq;
        var y = this.game.world.centerY + yy2[q] * perspectiveq + 300;

        zz2[q] += speed;

        if (zz2[q] > 300) {
          zz2[q] -= 600;
        }

        //  Swap this for a standard drawImage call
        canvas.draw('tel2', x, y);
      }

      for (var z = 0; z < max; z++) {
        var perspectivez = distance / (distance + zz3[z]);
        var x = this.game.world.centerX + xx3[z] * perspectivez;
        var y = this.game.world.centerY + yy3[z] * perspectivez + 300;

        zz3[z] += speed;

        if (zz3[z] > 300) {
          zz3[z] -= 600;
        }

        //  Swap this for a standard drawImage call
        canvas.draw('tel3', x, y);
      }
*/

        },
        onDown: function (key) {
            console.log(key.keyCode);

            if (key.keyCode === 73) {
                if (animationstarted === false) {
                    animationstarted = true;
                    // THIS WILL ENABLE MULTIPLAYER
                    //video.stop();

                    this.game.stage.backgroundColor = "#fff";
                    // NOTE starting the game
                    letsplay.alpha = 1;
                    letsplaytween = this.game.add.tween(letsplay).from({
                        y: -200
                    }, 1500, Phaser.Easing.Bounce.Out, true);
                    letsplaytween.onComplete.add(this.letplaysdone, this);
                }
            }

            if (key.keyCode === 90 && readytoplay === true) {
                video.stop();
                 this.game.state.start('platformer', true, false);
                 
            }


           
        },
        letplaysdone: function () {
            levelsound.play();
            console.log("comes here");
            kiesspelers.alpha = 1;
            kiesspelerstween = this.game.add.tween(kiesspelers).to({
                y: 80
            }, 1000, Phaser.Easing.Bounce.Out, true);
            kiesspelerstween.onComplete.add(this.kiesspelersdone, this);
        },
        kiesspelersdone: function () {
            console.log("comes here");
            selectie.alpha = 1;

            readytoplay = true;

        }


    };

    window['ewaste'] = window['ewaste'] || {};
    window['ewaste'].Screensaver = Screensaver;
}());