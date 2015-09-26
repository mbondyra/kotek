$( document ).ready(function() {

    var socks=[];
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

    for (i in mice){
        mice[i].createMouse();
    }

    for (i in cheeses){
        cheeses[i].putCheese();
    }



    $('#screen').mousemove(function(e) {
        Cat.move(e);
    });

    $('#screen').click(function(e) {
        Cat.move(e);
    });

    var pause = true;
    var timer = null;
    $("#pause").click(function() {
        pause = !pause;

        if (pause) {
           // $("#pause").html("PAUSE");
            $("#pause").html("RESUME");
            clearInterval(timer);
            timer = null;
        } else {

            if (timer !== null) return;
            timer = setInterval(function () {
                for (i in mice) {
                    mice[i].move();
                    if(mice[i].y>300) {
                        for (a in cheeses) {
                            if (mice[i].collidesWith(cheeses[a])) {
                                cheeses[a].setEaten();
                            }
                        }
                    }
                }
            }, 100);
            $("#pause").html("PAUSE");
        }
    });

    $('#screen').bind('mouseleave',function() {
        Cat.streighten();
    });


});


var Cat = {
    id: "cat",
    rotation: 0,
    size: {
        getHeight: function(){ return $('#cat').height()},
        getWidth: function (){ return $('#cat').width()},
    },
    position: {
        getX: function(){return $('#cat').offset().left + Cat.size.getWidth()/2},
        getY: function(){return $('#cat').offset().top + Cat.size.getHeight()/2}
    },
    move:function(e) {
        var relX = e.pageX - Cat.position.getX();
        var relY = Cat.position.getY() - e.pageY ;
        var arotation=Math.atan(relX/relY);
        Cat.rotation=(arotation > 0 ? arotation : (2*Math.PI + arotation)) * 360 / (2*Math.PI);
        $('#cat').css({
            "transform":"rotate("+Cat.rotation+"deg)"
        });

    },
    streighten:function(){
        $('#cat').css({
            "transform":"rotate(0deg)"
        })
    }
};

var Sock = function (index){
    this.name = "Sock"+index;
    this.fired = false;
    this.shootSock = function () {
        $( "#screen").append( '<img src="sock.png" class="sock" id='+this.name+' />' );
    }
}

var Cheese = function (index){
    this.x = function (){
        return index*this.width()%600;
    };
    this.y = function(){
        return parseInt(index*this.width()/600)*50;
    };
    this.offset = function(){
        return $('#'+this.name).offset();
    }
    this.width = function(){
        return $('.cheese').width();
    }
    this.height = function(){
        return $('.cheese').height();
    }
    this.name = "Cheese"+index;
    this.html = '<img src="Cheese.png" class="cheese" id='+this.name+' />'
    this.putCheese = function (){

        $( "#cheeseWall").append( this.html );
        $('#'+this.name).css({
            'left':this.x(),
            'top':this.y()
        })
    };
    this.setEaten = function (){
         $('#'+this.name).css({
         'display':'none'
         })
    }
}

var Mouse = function (_x, _y, index){
    this.speed = 10;
    this.frightened = 0;
    this.hasEaten = 0;
    this.x = _x;
    this.y = _y;
    this.name = "Mouse"+index;
    this.offset = function(){
        return $('#'+this.name).offset();
    }
    this.width = function(){
        return $('.mouse').width();
    };
    this.height = function(){
        return $('.mouse').width();
    }
    this.html = '<img src="rat.png" class="mouse" id='+this.name+' />';
    this.createMouse = function () {
        $( "#mouseHouse" ).prepend(this.html );
        $('#'+this.name).css({
            'left':this.x,
            'top':this.y
        })
    };
    this.move = function (){
        this.moveLogic();
        $('#'+this.name).css({
            'left':this.x,
            'top':this.y
        })
    }
    this.moveLogic = function (){
        if (this.frightened==1){
            if (this.x>225){
                this.x+=this.speed*3;}
            else {
                this.x-=this.speed*3;
            }
        }
        else if (this.hasEaten) {
            this.come_back();
        }else {
                this.y += this.speed;

        }
        if (this.y > 450 || this.x<-20 || this.x>590){
            this.come_back();
        }
    };

    this.come_back = function(){
        var randY = -800+ Math.random()*200;
        this.y += randY;
        var randX = Math.random() *530;
        this.x=randX;
        this.frightened=0;
        $('#'+this.name).css({
            'left':this.x,
            'top':this.y
        })
    };
    this.collidesWith = function(element){

            var Element1 = {};
            var Element2 = {};

            Element1.top = this.y;
            Element1.left = this.x;
            Element1.right = +this.x + this.width();
            Element1.bottom = +this.y + this.height();

            var offset = element.offset();
            Element2.top = offset.top;
            Element2.left = offset.left;
            Element2.right = +offset.left + element.width();
            Element2.bottom = +offset.top + element.height();

            if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
                //console.log( Element1.right,Element1.left, Element1.top, Element1.bottom);
                //console.log(Element2.right,  Element2.left,Element2.top, Element2.bottom);
                this.come_back();
                return true;
            }
            return false;

    };
}