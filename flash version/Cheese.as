package {

	import flash.display.MovieClip;


	public class Cheese extends MovieClip {


		public function Cheese(_x:Number=0,_y:Number=0) {
				x=_x;
				y=_y;
			// constructor code
		}
		
		public function setEaten(){
			x=-90;
			y=-90;
		}
	}

}