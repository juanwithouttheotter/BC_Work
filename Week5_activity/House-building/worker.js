$(document).ready(function() {
    var localBuckets = localStorage.getItem('bucketsOfDirt');
    var bucketsOfDirt = 0;
        if(localBuckets !=== null){
            bucketsOfDirt = parseInt(localBuckets);
            $('#bucketCounter').html('buckets: ' + bucketsOfDirt);
        }
    var bricks = 0;
    var word = '';
    var house = ['H','O','U','S','E'];
    var getDirt = function(buckets){
        buckets = buckets + Math.floor(Math.random() * 100);
        console.log('buckets', buckets);
        return buckets;
    }
    var getBricks = function(bricks, buckets){
        var bucketsToBricks = Math.floor(buckets / 10);
        bricks = bricks + bucketsToBricks;
        buckets = buckets - (bucketsToBricks * 10);
        console.log('buckets', buckets);
        console.log('bricks', bricks);
        return [bricks, buckets];
    }
    var getHouse = function(house, bricks, word){
        var partOfHouse = Math.floor(bricks / 100);
        for (var i = 0; i < partOfHouse; i++){
            if (house.length !== 0){
                var letter = house.shift();
                word = word + letter;
                console.log(letter, word)
            } else {
                $('#tearDownHouse').show();
            }
        }
        bricks = bricks - (Math.floor(bricks / 100) * 100);
        return [bricks, house, word];
    }
    $('#tearDownHouse').on('click', function(){
        bucketsOfDirt = 0;
        bricks = 0;
        word = '';
        house = ['H','O','U','S','E'];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
        $('#plot').text(word);
        $('#tearDownHouse').hide();
        localStorage.setItem('bucketsOfDirt', bucketsOfDirt);
    });
    $('#getWorkersBtn').on('click', function(){
        $('#digDirtBtn').show();
        $('#buildBricksBtn').show();
        $('#buildHouseBtn').show();
    });
    $('#digDirtBtn').on('click', function(){
        bucketsOfDirt = getDirt(bucketsOfDirt);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
        localStorage.setItem('bucketsOfDirt', bucketsOfDirt);
    });
    $('#buildBricksBtn').on('click', function(){
        var brickResults = getBricks(bricks, bucketsOfDirt);
        bucketsOfDirt = brickResults[1];
        bricks = brickResults[0];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
        localStorage.setItem('bucketsOfDirt', bucketsOfDirt);
    });
    $('#buildHouseBtn').on('click', function(){
        var houseResults = getHouse(house, bricks, word);
        bricks = houseResults[0];
        house = houseResults[1];
        word = houseResults[2];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#plot').text(word);
        
    });
});
    
   
