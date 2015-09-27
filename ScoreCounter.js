/**
 * Created by saphire on 2015-09-27.
 */
var scoreCounter= {
    score: 0,
    incrementScore: function () {
        $('#score').html(this.score++)
    }
};