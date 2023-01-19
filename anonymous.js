//print odd number in an aray
let arr = [2,5,6,9,4];
let odd = function(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 != 0) result.push(arr[i]);
     }
    return result;
};
console.log(odd(arr).join(' '));
//output:5 9

//convert all the strings to title caps in a string array
let str = ["my","name","is","sithick"];
let titlecaps = function(str) {
 for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
} 
return str.join(' ');
 }
console.log(titlecaps(str));
//output: My Name Is Sithick

//sum of all numbers in an array
let arr1 = [1,2,3,4,5]
let sumnum = function(arr1) {
    let sum = 0;
 for (var i = 0; i < arr1.length; i++) {
     sum = sum + arr[i];
}
return sum;
}
console.log(sumnum(arr1));
//output:15

//return all the prime numbers in an array
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime = function(arr2) {
arr2 = arr2.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
return arr2.join(' ');
}
console.log(prime(arr2));
//output:2 3 5 7

//return all the palindromes in an array
let input = ["malayalam","orange","dad","mother"];
let ispali = function(str)  {
   let a = "";
    for(let i=str.length-1; i>=0; i--){
        a += str[i];
    }
    if(a == str) return true;
    else return false;
}
let arr3 = [];
for(let i=0; i<input.length; i++){
    let vari;
    let result;
    vari = input[i];
    result = ispali(vari)
    if(result == true){
        arr3.push(vari);
    }
    
}
console.log(arr3.join(' '));
//output:malayalam dad

//Return median of two sorted arrays of the same size
let city2 = ["london","newyork","london","newyork","habibi"];
let duplicate2 = function(city) {
    return [...new Set(city2)]
};
console.log(duplicate2(city2).join(' '));
//output:london newyork habibi


//Rotate an array by k times
let array1 = [1,2,3,4,5,6];
let rotate1 = function(array1){
 k1 = array1.pop();
 k2 = array1.unshift(k1);
 return array1.join(' ');
};  
 console.log(rotate1(array1))
//output:6 1 2 3 4 5








