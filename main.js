// function lifeInWeeks(age) {
    
//     const yearsRemaining = 90 - age;
//     const daysRemaining = yearsRemaining * 365;
//     const weeksRemaining = yearsRemaining * 52;
//     const monthsRemaining = yearsRemaining * 12;

//     console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");
// }

// lifeInWeeks(20);

function fibonnaciGenerator(n){
    var output = [];
    if (n === 1){
        output = [0];
    }else if (n === 2){
        output = [0, 1];
    }else{
        output = [0, 1];

        for (var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }

    return output;
}

output = fibonnaciGenerator(10);
console.log(output);





