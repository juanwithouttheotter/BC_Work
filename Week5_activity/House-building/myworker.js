

$(document).ready(function() {

    var bucketsOfDirt = 0;
    var bricks = 0;
    var word = "";
    var house = ['H','O','U','S','E'];

    $('#getWorkersBtn').on('click', function(){
        $('#digDirtBtn').removeClass('hide');
        $('#buildBricksBtn').removeClass('hide');
        $('#buildHouseBtn').removeClass('hide');
        $('#bucketCounter').text("Buckets of dirt: " + 0);
        $('#brickCounter').text("Bricks: " + 0);
    });
    $('#digDirtBtn').on('click', function(){
        bucketsOfDirt = digDirt(bucketsOfDirt);
        $('#bucketCounter').text("Buckets of dirt: " + bucketsOfDirt);
    });
    
    function digDirt(bucketsOfDirt){
        bucketsOfDirt = bucketsOfDirt + Math.floor(Math.random()*100) + 1;
        return bucketsOfDirt
    }

    $('#buildBricksBtn').on('click', function(){
        var brickResults = getBricks(bricks,bucketsOfDirt);
        bucketsOfDirt = brickResults[1];
        bricks = brickResults[0];
        console.log('buckets', bucketsOfDirt);
        console.log('bricks', bricks);
        $('#bucketCounter').text("Buckets of dirt: " + bucketsOfDirt);
        $('#brickCounter').text("Bricks: " + bricks);
        $('#buidBricksBtn').
    });  
    

    var getBricks = function(bricks, bucketsOfDirt){
        bucketToBrick  = Math.floor(bucketsOfDirt / 10);
        bricks = bricks + bucketToBrick;
        bucketsOfDirt = bucketsOfDirt - (bucketToBrick * 10)
        return [bricks, bucketsOfDirt]
    }

  
        // 100 bricks is 1 letter of HOUSE
        // need to have a remainder of bricks
        // need to subtract that number of bricks from bricks
        // Array [H,O,U,S,E]
        // string HOUSE string[0-4]
        // log the letter, but also the full phrase
            // H, H
            // O, HO
            // U, House

    var buidHouse = function(word, house, bricks){
        var letter = Math.floor(bricks / 100);
        for(i = 0; i < letter; i++){
            if (house.length > 0){
            word = word + house.shift();
            bricks = bricks - (letter * 100);
            }
        }
        return [word, house, bricks]
    }

    $('#buildHouseBtn').on('click', function(){
       var construction = buidHouse(word, house, bricks);
        word = construction[0];
        house = construction[1];
        bricks = construction[2];
        $('#plot').text(word)
        console.log('house' + house);
        console.log('bricks' + bricks);
        $('#brickCounter').text("Bricks: " + bricks);

    });