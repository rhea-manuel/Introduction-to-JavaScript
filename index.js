/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;
console.log(votingAge > 18)



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let curWeather = 'None';
let temperature = 81;

if (temperature > 80) {
    curWeather = 'Hot';
}

else if (temperature > 50) {
    curWeather = 'Warm'
}

else if (temperature > 30) {
    curWeather = 'Cool'
}

else {
    curWeather = 'Cold'
}

console.log(curWeather); //For testing purposes



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let num = Number('1999');


//Task d: Write a function to multiply a*b 
function multiply(a, b) {
    return a * b;
}

console.log(multiply(12, 5)); //For testing purposes




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogAgeConvertor(humanAge) {
    return humanAge * 7;
}

console.log(dogAgeConvertor(18)); //For testing purposes



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// For this function: I considered the use case. If the client wants to add more refined percentages, the following setup will allow them to do so very effortlessly.

function dogFeeder(weight, age) {

    // Since the adult calcs are based off weight, they are defined here.
    let adultWeights = [5, 10, 15];
    let adultPercents = [.05, .04, .03, .02];

    // Respectively, the puppies calcs are based off ages, so they are here.
    let puppyAges = [1 / 3, 7 / 12];
    let puppyPercents = [.10, .05, .04];

    // The metric by default is set to the puppy metrics.
    let metric = age;
    let metricCompare = puppyAges;
    let percents = puppyPercents;

    // If the dog is an adult, switches the metrics to that.
    if (age >= 1) {
        metric = weight;
        metricCompare = adultWeights;
        percents = adultPercents;
    }

    // The loop goes through the metrics and compares it to the correct array.
    for (let i = 0; i < metricCompare.length; i++) {
        if (metric <= metricCompare[i]) {

            // Immediately returns as soon as the correct value is found, saving time.
            return metric * percents[i];
        }

    }

    // If the value is part of the highest range, multiplies it by the highest metric.
    return metric * percents[percents.length - 1];

    // return weight*adultPercents[adultPercents.length-1];

    // if(age>=1){
    //     for (let i = 0; i<adultWeights.length; i++){
    //         if (weight<=adultWeights[i]){
    //             return weight*adultPercents[i];
    //         }

    //     }
    //     return weight*adultPercents[adultPercents.length-1];
    // }

    // else{
    //     for (let i = 0; i<puppyAges.length; i++){
    //         if (age<=puppyAges[i]){
    //             return age*puppyPercents[i];
    //         }

    //     }
    //     return age*puppyAges[puppyPercents.length-1];
    // }



    // if(age<1){
    //     if (weight<=5){
    //         return weight*.05;
    //     }
    //     else if(weight<=10){
    //         return weight*.04;
    //     }
    //     else if(weight)
    // }
}

console.log(dogFeeder(15, 1));





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(playerChoice) {

    let playerNum = 0;

    if (playerChoice.toUpperCase() === ('ROCK')) {
        playerNum = 1;
    }
    else if (playerChoice.toUpperCase() === ('PAPER')) {
        playerNum = 2;
    }
    else if (playerChoice.toUpperCase() === ('SCISSORS')) {
        playerNum = 3;
    }

    //   Immediately cuts the function short if it's an invalid input.
    else {
        return 'Invalid Input';
    }

    let computerNum = Math.floor(Math.random() * 3) + 1;

    //   console.log(playerNum);
    //   console.log(computerNum);

    //   Calculates draw first.
    if (computerNum === playerNum) {
        return 'Draw';
    }

    //   Lose state is always calculated first, then win state.
    else if (computerNum === 3 || playerNum === 3) {

        if (computerNum === 1) {
            return 'Lose';
        }

        //   No else statement needed because only other possible state is win.
        return 'Win';
    }

    // Calculate win/lose otherwise.
    else if (computerNum > playerNum) {
        return 'Lose';
    }

    else {
        return 'Win';
    }

}

console.log(rockPaperScissors('scissors')); //For testing purposes


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(km) {
    return km * 0.621371;
}


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCm(feet) {
    return feet * 30.48;
}

console.log(kmToMiles(3)); //For testing purposes


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(starting) {
    for (let i = starting; i >= 1; i--) {
        console.log(i);
    }
}

annoyingSong(5);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradeCalculator(number) {

    if (number > 100) {
        return 'Invalid number!'
    }

    let grades = ['A', 'B', 'C', 'D'];
    let numbers = [90, 80, 70, 60];

    for (let i = 0; i < numbers.length; i++) {
        if (number >= numbers[i]) {
            return grades[i];
        }
    }

    return grades[grades.length - 1];

}

console.log(gradeCalculator(40));



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowelCount(word) {
    word = word.toUpperCase();
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let letter of word) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

console.log(vowelCount('aaaaaee')); //For testing purposes


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





