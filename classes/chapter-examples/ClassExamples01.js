//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
class Cars {
  constructor (brand, model, price, reliabltiy ){
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.reliabltiy = reliabltiy;
  }
}

let bmw = new Cars ("BMW", "M4 Competition", "$82,000", "7/10");

console.log(bmw);
console.log(`${bmw.model}, - ${bmw.price}`);

bmw.color = "Sun Set Orange";
console.log(bmw.color);

let honda = new Cars ("Honda", "Civic Type R", "$43,800", "8.5/10");

console.log(honda);
honda.color = "Ash Grey";
console.log(honda.color);