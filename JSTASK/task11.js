// Function to remove dupllicate elemenyts from an array.
function removeDuplicates(arr){
    // using set to store unique elements.
    const uniqueelemnts = new Set(arr);
    //Converting the set back to an array.
    return[uniqueelemnts];
}
//example
const myArray =[1,2,3,4,5,1,2,6,5,7];
const uniquearray = removeDuplicates(myArray);
console.log(uniquearray); // 