/**
 * Created by saphire on 2015-09-27.
 */

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
        if (this.y > 500 || this.x<-20 || this.x>590){
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
            return true;
        }
        return false;

    };
}