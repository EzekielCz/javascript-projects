//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addscore(newScore) {
     this.scores.push(newScore)
    }
    average(){
        let averageScore = 0;
        for(let i=0; i<this.scores.length; i++){
          averageScore += this.scores[i] 
        }
        return Math.round(averageScore/this.scores.length*10) /10 
        // this.scores * this.scores.length / this.scores.length = this.scoreAverage(Math.round())
    }
    // admitted(){
        // if(){

        // }
    // }
    status(){
        let statusOcu = ["Accepted", "Reserve","Probationary",'Rejected'];
        if(this.average >= 90){
            console.log(statusOcu[0]);
       /* } else if (this.average >=80) {
            console.log(statusOcu[1]);
        } else if (this.average >=70){
            console.log(statusOcu[2]);
        }else if (this.average <70){
        console.log(statusOcu[3]);*/
        }
    }
}

let bear = new CrewCandidate ("Bubba Bear", "135 kg", [88,85,90,83]);
let merry = new CrewCandidate("Merry Maltese", "1.5 kg", [93,88,97]);
let gator = new CrewCandidate ("Glad Gator", "225 kg", [75,78,62]);
console.log(bear);
console.log(merry);
console.log(gator);
console.log(bear.scores);
console.log(merry.average());
console.log(merry.status(merry));
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.