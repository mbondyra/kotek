package  {
	
	import flash.display.MovieClip;
	import flash.display.Shader;
	import flash.display.Shape;
	
	
	public class Mouse extends MovieClip {
		
	
		private var speed:Number;
		private var frightened:Number;
		
		
		public function Mouse(_x:Number=0, _y:Number=0) {
			speed = 10;
			x = _x;
			y = _y;
			frightened = 0;
		}
		
		public function setSpeed(s:Number):void{
			speed=s;
		}
		
		public function move():void{
			if (frightened==1){
				if (x>225){
				x+=speed*3;}
				else {
				x-=speed*3;
				}
			}
			else{
				y += speed;
			}
			if (y > 450 || x<-20 || x>590){
				come_back();
			}
		}
			
		public function come_back(){
			var randY:Number = -800+ Math.random()*200;
			y += randY;
			var randX:Number = Math.random() *530;
			x=randX;
			frightened=0;
		}
		public function setFrightened(v:Number){
			frightened = v;
		}
			
		
		public function hitSock(s:Sock, c:ScoreCounter):void{
			if ( hitTestObject(s) && frightened==0 && s.x>0 &&s.x<550){
				c.addScore(1);
				frightened=1;
			}
		}
		
		public function eatCheese(c:Cheese):void{
			if ( hitTestObject(c) && frightened==0){
				c.setEaten();
				come_back();
			}
		}
		public function tryWin():Boolean{
			var borderDown:Number=400;
			
			if ( y>borderDown){
				return true;
			}
			return false;
		}
		
		
	}
	
}
