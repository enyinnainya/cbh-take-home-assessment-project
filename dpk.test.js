const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  /** test: Should be able to return the same literal provided in the input object key 'partitionKey'
   * if literal character length is not above 256
   */
  it("Returns the same literal provided in the input object key 'partitionKey' if literal character length is not above 256", () => {
    const literal=234513;
    const trivialKey = deterministicPartitionKey({partitionKey: literal});
    expect(trivialKey).toBe(JSON.stringify(literal));
  });

  /** test: Should be able to return the correct hashed value if provided input is not an object
   * or is an object but does not contain the object key 'partitionKey' whose literal character length is not above 256
   */
  it("Returns the correct hashed value if provided input is not an object or is an object but does not contain the object key 'partitionKey' whose literal character length is not above 256", () => {
    const literal=234513;
    const trivialKey = deterministicPartitionKey(literal);

    //creating cryto hash with sha3-512 algorithm
    const createdHash = crypto.createHash("sha3-512");

    //updating created hash with the test literal value
    const updatedHash = createdHash.update(JSON.stringify(literal))

    //Digesting updated hash using hex encoding and assigning value to the hashedCandidateToMatch variable
    const hashedCandidateToMatch = updatedHash.digest("hex");

    expect(trivialKey).toBe(hashedCandidateToMatch);
  });

});
