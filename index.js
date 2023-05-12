// 1. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
let num1=8
let num2=8
let diff=Math.abs(num1-num2)
let sum=num1+num2



    function checkNumbers(num1, num2) {
        let sum = num1 + num2;
        let diff = Math.abs(num1 - num2);
      
        if (num1 === 8 || num2 === 8 || sum === 8 || diff === 8) {
          console.log('One of the numbers is 8 or their sum/difference is 8');
        } else {
          console.log('None of the numbers is 8 and their sum/difference is not 8');
        }
      }
      checkNumbers(num1,num2);





// 2. Write a JavaScript program to convert a given number into hours and minutes
let num=79
 let minutes=0
 let hours=0 
if(num>60){
    hours=Math.trunc(num/60)
    minutes=num%60
    console.log(`The given Number can be approximately converted to ${hours} hours and ${minutes} minutes`);

}else{
    console.log(`The given Number can be approximately converted to ${hours} hours and ${minutes} minutes`);

}

// 3 Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
let array=["Man","Car","flowes","Tree"]

function createArray(array){
    let firstLast=[]
    firstLast.push(array[0])
    firstLast.push(array[array.length-1])
    console.log(firstLast);
}
createArray(array);
// question 4
// Write a JavaScript program to find the types of a given angle.

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

let angle=89
if(angle>0 && angle<90){
    console.log(`The given angle is an Acute angle`);
}
else if(angle==90){
    console.log("The given angle is a Right angle");
}
else if(angle> 90 && angle<180){
    console.log("The given angle is an Obtuse angle");
}else if(angle==180){
    console.log("The given angle is a straight angle ");
}else{
    console.log("Invalid angle");
}

// 5. What will be logged to the console from the below expression. explain why.

// let sum = 5+ 5+"5";

// console.log(sum);

console.log(`the output of the above code is 105 because the first tw0 5 are integers and when
 they are added together the sum up to 10. The second 5 is inside quotes making it
  a string ang when you use plus sign it gets concatenated to ten making answer 105`)

