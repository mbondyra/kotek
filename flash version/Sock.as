package  {
	
	import flash.display.MovieClip;
	
	
	public class Sock extends MovieClip {
		
		private var direction:Number;
		public var heroPosX:Number;
		public var heroPosY:Number;
		public var mousePosX:Number;
		public var mousePosY:Number;
		
		public function Sock(hero:Hero) {
			
			heroPosX=hero.x;
			heroPosY=hero.y;
			x=heroPosX;
			y=heroPosY;
			mousePosX=mouseX;
			mousePosY=mouseY;
			// constructor code
		}
		
		public function move():void {
			var angle:Number = Math.atan2((mousePosY),(mousePosX));
			x += 10*Math.cos(angle);
			y += 10*Math.sin(angle);
			
		}
		
		public function isOutsideBorders():Boolean{
			if (y<-50 ||x<-40 ||x>690)
			{return true;}
			return false;
		}
		
	
		
	}
	
}
