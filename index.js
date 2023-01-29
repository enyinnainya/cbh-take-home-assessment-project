const {deterministicPartitionKey} = require("./dpk");

//test value
const testEventValue = "34222233"

console.log(deterministicPartitionKey(testEventValue));