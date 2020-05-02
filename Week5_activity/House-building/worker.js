$(document).ready(function() {
// digger object
    // keep track of buckets
    // function randomly add dirt to his buckets
    // function resets the number of buckets to 0
        // return the number of buckets of dirt
        var digger = {
            buckets: 0,
            dig: function(){
                this.buckets = this.buckets +  Math.floor(Math.random() * 100);
            },
            dump: function(){
                var buckets = this.buckets;
                this.buckets = 0;
                return buckets;
            }
        }
        // brickMaker
    // keep track of bricks
    // keep track of buckets of dirt
    // a function to build bricks, that takes buckets of dirt,
        // every 10 buckets is equal to 1 brick
        // he needs to keep the remainder of buckets of dirt for later use
    // a function to get the bricks, and reset number of bricks to 0
        var brickMaker = {
            buckets: 0,
            bricks: 0,
            oven: function(digger){
                this.buckets = this.buckets + digger.dump();
                var bucketsToBricks = Math.floor(buckets / 10);
                this.bricks = this.bricks + bucketsToBricks;
                this.buckets = this.buckets - (bucketsToBricks * 10);
            },
            stack: function(){
                var bricks = this.bricks;
                this.bricks = 0;
                return bricks;
            }


        }
        

// keeps track for the blueprint (house array)
    // keep track of which part of the house they are building (optional)
    // keep track of the remainder of bricks
    // function to build the house,
        // take the number of bricks divided by 100
        // for every 100th brick wright a letter to the plot
        var carpenter ={
            bricks: 0,
            blueprint: ['H','O','U','S','E'],
            word: '',
            buildHouse: function(brickMaker){
                this.bricks = this.bricks + brickMaker.stack();
                var partOfHouse = Math.floor(bricks / 100);
                for (var i = 0; i < partOfHouse; i++){
                    if (this.blueprint.length !== 0){
                        var letter = this.blueprint.shift();
                        this.word = this.word + letter;
                        $('#plot').text(this.word);
                    } else {
                        $('#tearDownHouse').show();
                    }
                }
                this.bricks = this.bricks - 

            }


        }





$('#getWorkersBtn').on('click', function(){
    $('#digDirtBtn').show();
    $('#buildBricksBtn').show();
    $('#buildHouseBtn').show();
});

$('#digDirtBtn').on('click', function(){
    digger.dig();
    $('#bucketCounter').html('buckets: '+ digger.buckets);

});
$('#buildBricksBtn').on('click', function(){
    brickMaker.oven(digger);

    bucketsOfDirt = brickResults[1];
    bricks = brickResults[0];
    $('#brickCounter').html('bricks: '+ brickMaker.bricks);
    $('#bucketCounter').html('buckets: '+ brickMaker.buckets);



});