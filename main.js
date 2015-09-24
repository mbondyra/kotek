$( document ).ready(function() {
    var socks=[];
    $('#screen').mousemove(function(e) {
        var relX = e.pageX - Cat.position.getX();
        var relY = Cat.position.getY() - e.pageY ;
        var arotation=Math.atan(relX/relY);
        Cat.rotation=(arotation > 0 ? arotation : (2*Math.PI + arotation)) * 360 / (2*Math.PI);
        Cat.move();
    });

    $('#screen').bind('mouseleave',function() {
        Cat.streighten();
    });
    $('#screen').click(function() {
        Cat.streighten();
    });

});

var Sock = {
    
}
var Cat = {
    id: $('#cat'),
    rotation: 0,
    size: {
        getHeight:function(){ return $('#cat').height()},
        getWidth:function (){ return $('#cat').width()},
    },
    position: {
        getX: function(){return $('#cat').offset().left + Cat.size.getWidth()/2},
        getY: function(){return $('#cat').offset().top + Cat.size.getHeight()/2}
    },
    move:function() {
        $('#cat').css({
            "transform":"rotate("+Cat.rotation+"deg)"
        });

    },
    streighten:function(){
        $('#cat').css({
            "transform":"rotate(0deg)"
        })
    }

}

var MousePosition = {
    x: function(){

    },
    y:function(){

    },

    getDegree:function(){

    }
}
