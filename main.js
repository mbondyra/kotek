$( document ).ready(function() {
    var mice = [
        new Mouse(100,-100, 1),
        new Mouse(350,-200, 2),
        new Mouse(100,-300, 3),
        new Mouse(200,-400, 4),
        new Mouse(450,-500, 5),
        new Mouse(200,-600, 6)
    ];

    var cheeses = new Array(
        new Cheese(0),
        new Cheese(1),
        new Cheese(2),
        new Cheese(3),
        new Cheese(4),
        new Cheese(5),
        new Cheese(6),
        new Cheese(7),
        new Cheese(8),
        new Cheese(9),
        new Cheese(10),
        new Cheese(11),
        new Cheese(12),
        new Cheese(13),
        new Cheese(14),
        new Cheese(15),
        new Cheese(16),
        new Cheese(17)
    );


   socks=[
        new Sock(),
        new Sock(),
        new Sock(),
        new Sock(),
        new Sock(),
        new Sock()
    ];



    for (i in cheeses){
        cheeses[i].putCheese();
    }

    for (i in socks){
        socks[i].create();
    }

    var bulletsLeft = socks.length-1;

    for (i in mice){
        mice[i].createMouse();
    }

    $('#screen').bind('mouseleave',function() {
        Cat.streighten();
    });

    $('#screen').mousemove(function(e) {
        Cat.move(e);
    });

    activeSocks = [];

    $('#screen').click(function(e) {
        var activeSock = socks[0];
        activeSocks.push(activeSock);
        activeSock.fire(e, socks.shift());
    });

    var pause = true;
    var timer = null;
    $("#pause").click(function() {
        event.stopPropagation();
        pause = !pause;

        if (pause) {
            $("#pause").html("RESUME");
            clearInterval(timer);
            timer = null;
        } else {

            if (timer !== null) return;
            timer = setInterval(function () {
                for (i in mice) {
                    mice[i].move();
                    for (var u in activeSocks) {
                        if (mice[i].collidesWith(activeSocks[u]) && mice[i].frightened==0){
                            mice[i].come_back();
                            scoreCounter.incrementScore();
                            mice[i].frightened=1;
                        }
                    }
                    if(mice[i].y>300) {
                        for (a in cheeses) {
                            if (mice[i].collidesWith(cheeses[a])) {
                                cheeses[a].setEaten();
                                mice[i].come_back();
                            }
                        }
                        if(mice[i].y>450) {
                            gameOver();
                            clearInterval(timer);
                            timer = null;
                            $('#screen').off('mousemove');
                        }
                    }

                }
            }, 100);
            $("#pause").html("PAUSE");
        }
    });
});


