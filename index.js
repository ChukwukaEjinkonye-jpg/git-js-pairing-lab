function fiveToOneHundred(){
    for(let i = 5; i<= 100; i++){
        console.log(i)
    }    
}

//fiveToOneHundred()

function multiplesOfThree(){
    for(let i =3; i <= 100; i += 3){
        console.log(i);
    }
}

//multiplesOfThree();


function multiplesOfThreeOrFive(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
}

//multiplesOfThreeOrFive()
function untilNum(number){
    for(let i= 1; i <= number; i++){
        console.log(i); 
    }
}
untilNum(9);

function multiply(num1, num2){
    return num1 * num2
}

console.log(multiply(2, 4))

function add(num1, num2){
    if (num1 == num2){
      return (num1 + num2) * 3;
  } else {
      return num1 + num2;
    }
}
console.log(add(2,2));


function isNegative(num){
    return num < 0
}

function triangleArea(base,height){
    return base * height * 0.5;
}
console.log(triangleArea(6,8));


function betweenTwentyAndFourty(num){
    return num >= 20 && num <= 40
}

function largest(x, y, z){
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z){
        return y;
    } else {
        return z;
    }
} 
console.log(largest(4, 6, 8));

let date = Date()
let time = date.split(" ")
console.log(time[4])

function isLeapYear(year){
    if (year % 400 == 0){
        return true
    } else if (year % 100 == 0){
        return false;
    } else if (year <= 1752){
        return false;  
    } else if (year % 4 == 0){
        return true;
    } else {
        return false
    }
}
console.log(isLeapYear(4000));

function getExtention(file_name){
    let words = file_name.split(".")
    console.log("Test get extention: " + "." + words[1])
}
console.log("Test get extention: ")
getExtention("titular.png")

function absoluteNineteen(val){
    let abs = val - 19;
    if (val > 19){
        return abs * 3;
    } else {
        return Math.abs(abs);
    }
}
console.log(absoluteNineteen(-5));