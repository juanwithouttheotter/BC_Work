API is a application programming interface

takes a request:
- url: http://nyt-mongo-scraper.herokuapp.com/api/headlines
-methos GET
    - POST, PUT, PATCH, DELETE, OPTIONS
     CRUD
     -create(POST)
     -read(GET)
     -update(PUT or PATCH)
     -delete (METHOD)

Giives a response:
    - in JSON format


ex. GET: http://nyt-mongo-scraper.herokuapp.com/api/headlines
    RESPOND: "{'stuff':inside}"
//http contracts

    {
        PLAYER: "Frank Thomas",
        battingAvg: 333,
    }

    AJAX makes a request to the API and retrieves it in JSON aka information