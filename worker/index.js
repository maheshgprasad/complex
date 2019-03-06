const keys = require('./keys');
// keys for connection with the redis server.

const redis = require('redis');

// of-course a redis installation is required.

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 //time in milliseconds
});
// connect to the redis client using this above strategy

const sub = redisClient.duplicate();
// make a duplicate of the redis client that
// we have put together.

// fibonaaci function 
// function <function name> (<its parameters>){}

function fib(index){
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}
// incase that the entered number is less than 2, 
// return a value of 1 OR else 
// perform a calculation.

sub.on('message', (channel, message) => {
    redisClient.hset('values',message, fib(parseInt(message)));
});
//anytime that we get a new value that shows up in redis
// we are going to calculate a new fibonaaci value and then
// insert that into a hash of values

sub.subscribe('insert');