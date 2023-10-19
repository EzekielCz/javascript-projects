const whoWon = require ("../RPS.js");

describe ("whoWon", function(){

    test("if players tie", function(){
        expect(whoWon.whoWon("rock","rock")).toEqual("TIE!");
    });
    test("if player 1 in put rock and player 2 inputs paper ", function(){
        expect(whoWon.whoWon("rock","paper")).toEqual("Player 2 wins!");
    });
    test("if player 1 input paper and player 2 inputs scissor", function(){
        expect(whoWon.whoWon("paper","scissors")).toEqual("Player 2 wins!");
    });
    test("if player 1 inputs scissors and player 2 inputs rock", function(){
        expect(whoWon.whoWon("scissors","rock")).toEqual("Player 2 wins!");
    });
});