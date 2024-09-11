function lifeInWeeks(age) {
    /************Don't change the code above************/    
    
    // Life expectancy assumption
    const lifeExpectancy = 90; // Adjust based on expected lifespan

    // Calculate the remaining years, weeks, and months
    const yearsRemaining = lifeExpectancy - age;
    const daysRemaining = yearsRemaining * 365;
    const weeksRemaining = yearsRemaining * 52;
    const monthsRemaining = yearsRemaining * 12;

    // Log the message with the remaining time
    console.log(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`);
}

// Example usage:
const age = parseInt(prompt("Enter your age: "), 10); // Convert age from string to number before passing
lifeInWeeks(age);
