function lifeInWeeks(age) {
    
    const yearsRemaining = lifeExpectancy - age;
    const daysRemaining = yearsRemaining * 365;
    const weeksRemaining = yearsRemaining * 52;
    const monthsRemaining = yearsRemaining * 12;

    console.log("You have" + daysRemaining + "days, " + weeksRemaining + "weeks, and" + monthsRemaining + "months left.");
}

lifeInWeeks(age);
