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
    };
    this.width = function(){
        return $('.cheese').width();
    };
    this.height = function(){
        return $('.cheese').height();
    };
    this.create = function (){
        $( "#screen").append( '<img src="sock.png" class="sock" id='+this.name+' />' );
    };
    this.fire = function (e, obj) {
        this.fired = true;
        this.move(e, obj);
    };
    this.move = function(e, obj){
        var a = (e.pageX-30);
        var b = (e.pageY-35);
        $("#"+this.name).animate({
            left: a ,
            top: b
        }, function (){

            $(this).fadeTo(500, 0.2);
            activeSocks.shift();
            $(this).delay(2000)

            $(this).fadeOut( function(){
                $(this).css({
                        left:Cat.position.getX(),
                        top:Cat.position.getY(),
                });
                $(this).fadeTo(10, 1);
                this.fired = false;
                socks.unshift(obj);
            });
        });
    };
};