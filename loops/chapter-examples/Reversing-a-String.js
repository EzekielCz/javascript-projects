let str = "Choo choo";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);