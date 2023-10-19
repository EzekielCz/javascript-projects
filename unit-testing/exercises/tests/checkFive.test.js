const checkFive = require('../checkFive');

describe("checkFive", function(){

   test("produces the correct output when passed a number less than 5", function() {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
   });

});