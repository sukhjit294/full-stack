//data structures
// console.log()

// let obj = {
//     name: "Sukhjit Singh",
//     batch: "FS",
//     age: 20,
//     subjects: {
//         1: ["JS", "CSS", "HTML"],
//         2: ["ED", "Maths", "DSA"],
//         Specialization:{
//             1:"PPS",
//             2:"AI",
//             3:["SE","FLAT"],
//         },
//     },
//     college: "Rayat Bahrat University",
//     myFunction: function () {
//         let a = 10;
//         let b = 20;
//         return a + b;
//     },
// };
// // let out = obj.myFunction()
// // console.log(out);
// console.log(obj.myFunction());

//conditions

// let a = 40;
// let b = 31;
// if(a<b){
//     console.log("a is less than b");
// }
// else if(a==b){
//     console.log("a is equal to b");
// }
// else{
//     console.log("a is not less than b");
// }

//loops

// let str = "Sukhjit Singh";

// for (let i = 0; i < str.length; i=i+1) {
//     console.log(str[i]);
// }

// let i=1;
// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

//let str = "Sukhjit Singh";
// let n= 10;
// // i++
// // i--
// for (let i = n-1; i >= 0; i--) {
//     console.log(i);
// }


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(`Element ${arr[i]} is even`);
    }
}

