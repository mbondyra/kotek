package  {
	
	public class ScoreCounter {
		
		private var score:Number;
		
		public function ScoreCounter(_score:Number=0) {
			// constructor code
			score = _score;
		}
		
		public function getScore():Number{
			return score;
		}
		
		public function addScore(s:Number):void{
			score+=s;
		}
		
		public function subtractScore(s:Number):void{
			score-=s;
		}
		

	}
	
}
