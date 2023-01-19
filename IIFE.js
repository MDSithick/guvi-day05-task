//print odd number in an array
(function(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 != 0) result.push(arr[i]);
     }
    console.log(result.join(' '));
})([2,5,6,9,4]);
//output:5 9

//convert all the strings to title caps in a string array
(function(str) {
    let result = [];
 for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
result.push(str[i]);
} 
console.log(result.join(' '));
})(["my","name","is","sithick"]);
//output: My Name Is Sithick

//sum of all numbers in an array
(function(arr) {
    let sum = 0;
    let result = [];
 for (var i = 0; i < arr.length; i++) {
     sum = sum + arr[i];
}
result.push(sum);
console.log(result.join(' '));
})([1,2,3,4,5]);
//output:15

//return all the prime numbers in an array
(function(arr) {
    arr = arr.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0) return false;
     }
     return true;
   });
   console.log(arr.join(' '));
   })([2, 3, 4, 5, 6, 7, 8, 9, 10]);
   //output:2 3 5 7

//return all the palindromes in an array
   let input = ["malayalam","orange","dad","mother"];
function ispali (str)  {
   let a = "";
    for(let i=str.length-1; i>=0; i--){
        a += str[i];
    }
    if(a == str) return true;
    else return false;
}
(function(arr){
for(let i=0; i<input.length; i++){
    let vari;
    let result;
    vari = input[i];
    result = ispali(vari)
    if(result == true){
        arr.push(vari);
    }
    
}
console.log(arr.join(' '));
})([]);
//output:malayalam dad

//Return median of two sorted arrays of the same size
(function(city){
    let result;
    result = [...new Set(city)];
  console.log(result.join(" "));
})(["london","newyork","london","newyork","habibi"]);
//output:london newyork habibi


 //Rotate an array by k times  
 (function(array2) {
    var result
  k1 = array2.pop();
  k2 = array2.unshift(k1);
  result = array2.join(' ');
  console.log(result);
})([1,2,3,4,5,6]);
//output:6 1 2 3 4 5