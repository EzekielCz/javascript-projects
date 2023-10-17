// Define your Book class here:
class Book {
    constructor(title, author, copyRightDate, ISBN, numPages, numOfTimesCheckedOut, ifItsBeenDiscareded ){
        this.title = title;
        this.author = author;
        this.copyRightDate = copyRightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numOfTimesCheckedOut  =numOfTimesCheckedOut;
        this.ifItsBeenDiscareded = ifItsBeenDiscareded;
    }
    checkout(uses =1){
        this.numOfTimesCheckedOut += uses
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyRightDate, ISBN, numPages, numOfTimesCheckedOut, ifItsBeenDiscareded ){
        super(title, author, copyRightDate, ISBN, numPages, numOfTimesCheckedOut, ifItsBeenDiscareded );
    }
    dispose(currentYear){
        // let currentYear = 
        if (currentYear-this.copyRightDate > 5) {
           this.ifItsBeenDiscareded = 'Yes';
        }
    }
}


class Novel extends Book{
    constructor(title, author, copyRightDate, ISBN, numPages, numOfTimesCheckedOut, ifItsBeenDiscareded ){
        super(title, author, copyRightDate, ISBN, numPages, numOfTimesCheckedOut, ifItsBeenDiscareded );
    }
    dispose(){
        if (this.numOfTimesCheckedOut > 100) {
           this.ifItsBeenDiscareded = 'Yes';
        }
     }
}


// Declare the objects for exercises 2 and 3 here:
let borrowedNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
borrowedNovel.checkout(5);
console.log(borrowedNovel);

let borrowedManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");
borrowedManual.dispose(2023);
console.log(borrowedManual);
// Code exercises 4 & 5 here:

