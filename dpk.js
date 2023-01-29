const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {

  //declaring and initializing constant variable MAX_PARTITION_KEY_LENGTH
  const MAX_PARTITION_KEY_LENGTH = 256;

  //declaring and initializing constant variable TRIVIAL_PARTITION_KEY
  const TRIVIAL_PARTITION_KEY = "0";

  //declaring variable to hold the return value
  let candidate;

  //Checking if function was called with an argument and process the following logic if true
  if (event) {
    if (event.partitionKey) {
      candidate = JSON.stringify(event.partitionKey);
    } else {

      //creating cryto hash with sha3-512 algorithm
      const createdHash = crypto.createHash("sha3-512");

      //updating created hash with user input
      const updatedHash = createdHash.update(JSON.stringify(event))

      //Digesting updated hash using hex encoding and assigning value to the candidate variable
      candidate = updatedHash.digest("hex");

    }
  }

  //if candidate has no computed value,  default it to the TRIVIAL_PARTITION_KEY value
  if(!candidate){
    candidate = TRIVIAL_PARTITION_KEY;
  }

  /*
* checking if computed return value character length is greater than the value of the max partition key constant
* If true, go ahead and compute the crypto hash of the value
 */
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {

    //creating cryto hash with sha3-512 algorithm
    const createdHash = crypto.createHash("sha3-512");

    //updating created hash with computed candidate value above
    const updatedHash = createdHash.update(candidate)

    //Digesting updated hash using hex encoding and assigning value to the candidate variable
    candidate = updatedHash.digest("hex");
  }

  return candidate;
};