//const myArrays = ["Loic","Mathis","Bricia","Eudes","Eleo","Aime","Chany","Christ","Ivan"];
const arrayNumbers = [2,4,5,34,98,28,56];
//Let's use a For Loop to get all array's value

// for(let i=0; i < myArrays.length; i++){
//     console.log(myArray[i]);
// }

//For each 
//Let see the simple and short way of doing this
//for(const myArray of myArrays){
//    console.log(myArray);
//}
let doubleOfArray = []
//Let's get the double of this array
for(const arrayNumber of arrayNumbers){
    doubleOfArray.push(arrayNumber * 2);
}
console.log(doubleOfArray);