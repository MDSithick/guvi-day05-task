// print odd number in an array
let arr = [2,5,6,9,4];
let oddnum = (data) => {
    let result = [];
    for(let i=0; i<data.length; i++){
        if(data[i]%2 != 0) result.push(data[i]);
     }
    return result.join(' ');
};
console.log(oddnum(arr));
//output:5 9

//convert all the strings to title caps in a string array
let str = ["my","name","is","sithick"];
let titlecaps = (data) => {
 for (var i = 0; i < data.length; i++) {
data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1); 
} 
return data.join(' ');
 }
console.log(titlecaps(str));
//output: My Name Is Sithick

//sum of all numbers in an array
let arr1 = [1,2,3,4,5]
let sumnum = (data) => {
    let sum = 0;
 for (var i = 0; i < data.length; i++) {
     sum = sum + data[i];
}
return sum;
}
console.log(sumnum(arr1));
//output:15

//return all the prime numbers in an array
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime = (data) => {
data = data.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
return data.join(' ');
}
console.log(prime(arr2));
//output:2 3 5 7

//return all the palindromes in an array
let input = ["malayalam","orange","dad","mother"];
let ispali = (str) => {
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
        arr.push(vari);
    }
    
}
console.log(arr3.join(' '));
//output:malayalam dad

//Return median of two sorted arrays of the same size
let city = ["london","newyork","london","newyork","habibi"];
let duplicate = (data) => {
    return [...new Set(data)]
};
console.log(duplicate(city).join(' '));
//output:london newyork habibi


//Rotate an array by k times
let array = [1,2,3,4,5,6];
let rotate = (data) => {
  k1 = data.pop();
  k2 = data.unshift(k1);
  return data.join(' ');
};  
  console.log(rotate(array))
 //output:6 1 2 3 4 5
