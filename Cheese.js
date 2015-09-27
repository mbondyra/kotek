/**
 * Created by saphire on 2015-09-27.
 */

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