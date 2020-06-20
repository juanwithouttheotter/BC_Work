mySQL will define the structure of storage.
understanding the basic types found in mySQL

in order to create relationships between tables you will need foreing keys. Most of the time you will need to use foreign key constraints as it has a faster process.

Implied foreign keys works but will have some items that are unaccounted for. 
Impicit foreign keys will match all items and if the parent is deleted then so are it's children. 

most relationships are cascading in which the parent, if deleted, will also remove it's children.

when calling mysql server from js. make sure to end the connection with connection.end(); or else the code will continue to make connections and hit the max. 

taking the data that is duplicate and making it more legible
*make sure to study up on map method. 

```const results ={
    customer_id: data[0].customer_id,
    email: data[0].email,
}
results.order = data.map((data) =>{
    const obj = {
        order_id: data.order_id,/
        order_date: data.order_date,
    }
    return obj;
    console.log(results);
    connection.end();
});
```
when using mysql2/promise, the return gives an array of [row, ]

CRUD
create, read, update delete

mysql uses ? to prevent sql injections 
* do not use ${variable} as commands can be injected into your sql and someone can change your things



How would you remake twitter

need to creat a twitter database
users,
users will make tweets
users can fav twts
user can reply tweets


Twitter database
user table
* contains all user informaton; id, name, email, handle

user tweets 

* linked to the users id 
* tweet id,tweets, liked 

tweet reply
like id, user id, reply

