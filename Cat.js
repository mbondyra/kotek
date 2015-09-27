/**
 * Created by saphire on 2015-09-27.
 */


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

