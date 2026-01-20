const user = {
    name: "Doan An",
    age: 20,
    city: "Hà Nội"
};

const { name, age } = user;

console.log(`Xin chao ${name} toi la the nay toi muon ${name} lam cai nay cho toi`);
console.log(name, age);
//array destructuring
const colors = ["red", "green", "blue"];

const [a, b] = colors;
console.log(a, b); // red
