//array [] mang
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
//dau 3 cham no pha vo cai mang
// console.log(arr2); // [1,2,3,4]

const arr3 = [[1, 2, 3], [4, 5, 6]];
const arr4 = [...arr3, 4];
// console.log(arr4);

//object {} doi tuong
const user = { name: "Doan An", age: 20 };
const newUser = { ...user, city: "HN" };
// console.log('🚀 ========= newUser:', newUser)

//cach tao nen 1 doi tuong
// const a = {
//     "ten": 'Doan an',
//     "tuoi": 22
// }

//co mang a = [1,2,3,4,5]
//toi muon lay ra mang b gom 3 phan tu dau tien
//c1 su dung destructuring
//c2 su dung spread de them vao mang so 6 va 7

//c1
const a = [1, 2, 3, 4, 5]
const [y, x, z] = a
const b = [x, y, z]
// console.log('🚀 ========= b:', b)

//c2
const newArray = [...a, 6, 7]
// console.log('🚀 ========= newArray:', newArray)

//co mang a = [1,2,3,4,5]
//toi muon lay ra mang gom 4 phan tu dau tien
//toi muon them 4 phan tu dau tien vao phia dau tien cua mang b =
//co mang a = [6,7,8,9,10]
//c1
//lay gia tri em phai lay o phia ben tay trai

const [g, h, j, k] = a
const b1 = [g, h, j, k, 6, 7, 8, 9, 10]

//c2
const mangcanlay = [1, 2, 3, 4]
const cacsosaucung = [6, 7, 8, 9, 10]
const newArray2 = [...mangcanlay, ...cacsosaucung]
// console.log('🚀 ========= newArray2:', newArray2)

//cho mang a = ['a', 'b', 'c]
//cho mang b = ['d', 'e', 'f]
//lam sao de lay ra phan tu dau tien cua a va phan tu dau tien cua b
// ma dung destructuring de cho vao mang
//lam sao de noi bang a voi bang b ma dung spread

//c1
const [first1, second1, third1] = a
const [first2, second2, third2] = b
console.log('check', [first1, first2])



