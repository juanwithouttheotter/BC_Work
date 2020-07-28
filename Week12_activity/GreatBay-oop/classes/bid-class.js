const bidModel = require('../models/bids-models');

class Bid {
    constructor(bid_obj){
        this._bid = bid_obj;
    }
    get id(){
        return this._bid.id;
    }

    get name(){
        return this._bid.item_name;
    }
    set name(item_name){
        this._bid.item_name = item_name;
    }

    get category(){
        return this.category;
    }
    set category(category){
        this._bid.category = category;
    }

    get starting_bid(){
        return this.starting_bid;
    }
    set starting_bid(starting_bid){
        this._bid.starting_bid = starting_bid;
    }

    get highest_bid(){
        return this.highest_bid;
    }
    set highest_bid(highest_bid){
        this._bid.highest_bid = highest_bid;
    }
    merge(new_bid){
        this._bid = {...this.bid, ...new_bid};
    }
    //methods he had
    async insertToDB(){
        const results = await auctions.insert(this._item);
        this._bid = results.insertId;
    }
    async populateFromId(){
        const result = await acutions.getById(this._item.id);
        this._item = result;
    }



}

