// We import Chai to use its asserting functions here.
const { expect } = require('chai') //断言模块 
const { ethers} = require('hardhat') //安全帽模块
var redis = require("redis")         //redis
const util = require('util');
// `describe` is a Mocha function that allows you to organize your tests. It's
// not actually needed, but having your tests organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the tests of that section. This callback can't be
// an async function.


describe("GLDToken Transactions", function () {

  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();
   
    // Transfer 50 tokens from owner to addr1
    await hardhatToken.safeTransferFrom(owner,addr1.address, 1);

    //Event
    // The null field indicates any value matches, this specifies
    // "any Transfer from any to myAddress"
    let filter = contract.Transfer(null, myNFT.address);

    // Listen for our filtered results
      contract.on(filter, (from, to, value) => {
        //redis 操作
      console.log('I received ' + value.toString() + ' tokens from ' + from);
      const client = redis.createClient( 6379, '127.0.0.1');
      client.auth(123456);
        var res = client.set('transferation', value.toString() , (err, transferationdata) => {
          console.log('err: ', err, ' data: ', transferationdata);
    }); 
    });

  });
});