//1. Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

var odd=function(a){
    var b=[];
    for (var i of a)
    {
        if(i%2!=0)
        b.push(i)
    }
    console.log(b)
}([1,2,4,5,6,7,8]);

//output
//[ 1, 5, 7 ]
//-------------------------------------------------------------------------------------------------------------


//b.Convert all the strings to title caps in a string array

const titleCase=function(str){
    let str1=str.split(" ");
    let str2= str1.map(word=>word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
    console.log(str2.join(" "))
}("this is how the program works");

//output
//This Is How The Program Works
//-------------------------------------------------------------------------------------------------------------


//c.Sum of all numbers in an array

const sum=function(a){
    let sum =0;
    a.forEach(value=> {
        sum +=value;
    });
    console.log(sum);
}([1,2,4,5,6]);

//output
// 18
//-------------------------------------------------------------------------------------------------------------


//d.Return all the prime numbers in an array
const primeNo=function (a){
    let b=[];
    a.forEach(element => {
     let factor=0;
        for(var i=0;i<=element;i++)
        {
            if(element%i==0)
            factor++;
        }
        if (factor==2)
        {
            b.push(element)
        }
        
    });
    console.log(b);
}([2,4,6,7,11,13,15]);

//output
//[ 2, 7, 11, 13 ]
//-------------------------------------------------------------------------------------------------------------


// e.Return all the palindromes in an array

const palindrome=function(a){
    let c=[];
    let b=a.map(word=>word.split("").reverse().join(""));
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==b[i])
        c.push(a[i])
    }
    console.log(c);
}(['madam','pramila',"12121"]);

//output
//[ 'madam', '12121' ]
//-------------------------------------------------------------------------------------------------------------


//f.Return median of two sorted arrays of the same size.

let a=[2,4,8];
let b=[1,4,9];
const median=function (c){
   let n=c.length;
    console.log("median:",(c[n/2-1]+c[n/2])/2); 
}(a.concat(b).sort());

//output
//median: 4
//-------------------------------------------------------------------------------------------------------------


//g.Remove duplicates from an array

const duplicates=function(a){
let b=[];
for(var i=0;i<a.length;i++)
{
    let count=0;
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
          count++;
            break;
        }       
    }
    if(count==0)
    b.push(a[i]);
}
console.log(b);
}([1,2,3,3,4,5,5,1]);

//output
//[ 2, 3, 4, 5, 1 ]
//-------------------------------------------------------------------------------------------------------------


//h.Rotate an array by k times

const rotateArray=function(a){
let b=[];
let k=2;
let n=a.length;
for(var i=0;i<n;i++)
{
    b[i]=a[(i+k)%n];
}
console.log(b);
}([5,55,9,23,3]);

//output
//[ 9, 23, 3, 5, 55 ]
//-------------------------------------------------------------------------------------------------------------


// 2.Do the below programs in arrow functions.
// a.Print odd numbers in an array

const odd= (a) => {
               var b=[];
            for (var i of a)
            {
                if(i%2!=0)
                b.push(i)
            }
            console.log(b)
      
};
odd([1,2,4,5,6,7,8]);

//output
//[ 1, 5, 7 ]
//-------------------------------------------------------------------------------------------------------------


//b. Convert all the strings to title caps in a string array

const titleCase=(str)=>{
        let str1=str.split(" ");
        let str2= str1.map(word=>word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
        console.log(str2.join(" "))
    };
    titleCase("this is how the program works");

//output
//This Is How The Program Works
//-------------------------------------------------------------------------------------------------------------


// c.Sum of all numbers in an array

const sum=(a)=>{
        let sum =0;
        a.forEach(value=> {
            sum +=value;
        });
        console.log(sum);
    };
    sum([1,2,4,5,6]);

//output 
//18
//-------------------------------------------------------------------------------------------------------------


// d.Return all the prime numbers in an array

const primeNo= (a)=>{
        let b=[];
        a.forEach(element => {
         let factor=0;
            for(var i=0;i<=element;i++)
            {
                if(element%i==0)
                factor++;
            }
            if (factor==2)
            {
                b.push(element)
            }
            
        });
    console.log(b);
    };
    primeNo([2,4,6,7,11,13,15]);

//output
//[ 2, 7, 11, 13 ]
//-------------------------------------------------------------------------------------------------------------


// e.Return all the palindromes in an array

const palindrome=(a)=>{
        let c=[];
        let b=a.map(word=>word.split("").reverse().join(""));
        for(var i=0;i<a.length;i++)
        {
            if(a[i]==b[i])
            c.push(a[i])
        }
        console.log(c);
    }
    palindrome(['madam','pramila',"12121"]);

    //output
    //[ 'madam', '12121' ]
    //-------------------------------------------------------------------------------------------------------------