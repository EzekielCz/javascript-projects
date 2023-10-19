
const checkFive = require('../checkFive.js');
console.log(typeof checkFive);
describe("checkFive", function(){

   test("produces the correct output when passed a number less than 5", function() {
    let output =checkFive.checkFive(2);
    expect(output).toEqual("2 is less than 5.");
   });
   test("if a value greater than five is passed.", function(){
      let output =checkFive.checkFive(6);
      expect(output).toEqual("6 is greater than 5.");
   });
   test("if value passed equals 5", function(){
      let output = checkFive.checkFive(5);
      expect(output).toEqual("5 is equal to 5.")
   });
});