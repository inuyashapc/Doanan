// function sum(a, b) {
//     return a + b
// }
//arrow function
//c1
// const sum = (a, b) => a + b
const ten1 = () => 'Doan an'
const ten2 = () => {
    return 'Doan an'
}
//c2
const sum = (a, b) => {
    const ab = 4
    return a + b + ab
}
const a = 'a'
console.log('check = ', a)
console.log('check = ', sum(1, 2))
console.log('check1 = ', ten1())
console.log('check2 = ', ten2())