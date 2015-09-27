/**
 * Created by saphire on 2015-09-27.
 */
var index=0;
var Sock = function (){
    this.name = "Sock"+index++;
    this.fired = false;
    this.x = Cat.position.getX();
    this.y = Cat.position.getY();

    this.offset = function(){
        return $('#'+this.name).offset();
    }
    this.width = function(){
        return $('.cheese').width();
    }
    this.height = function(){
        return $('.cheese').height();
    }
    this.create = function (){

        $( "#screen").append( '<img src="sock.png" class="sock" id='+this.name+' />' );

    }
    this.fire = function (e, obj) {
        this.fired = true;
        this.move(e, obj);
    };


    this.move = function(e, obj){
        var a = (e.pageX-30);
        var b = (e.pageY-35);
        if (a>b) {
            var y = 0;
            var x = a * (b - y) / b;
        } else {
            var y = 0;
            var x = a * (b - y) / b;
        }
        $("#"+this.name).animate({
            left: a ,
            top: b
        }, function (){
            $(this).fadeOut();
            $(this).fadeIn();
            $(this).fadeOut();
            $(this).fadeIn();
            $(this).fadeOut();
            $(this).fadeIn();
            $(this).fadeOut();
            $(this).fadeIn();
            $(this).fadeOut( function(){
                $(this).css({
                        left:Cat.position.getX(),
                        top:Cat.position.getY(),
                });
                $(this).fadeIn();
                this.fired = false;
                socks.unshift(obj);
            });

        })
        ;
    };
    this.return = function(){

    }
};