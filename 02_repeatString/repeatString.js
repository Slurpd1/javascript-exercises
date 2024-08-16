const repeatString = function(givenString, numOfLoops) {
    // take a given string and loop it a certain amount of times
    if (numOfLoops < 0) {
        return "ERROR";
    }
    
    let returnString = "";

    for (let i = 0; i < numOfLoops; i++) {
        returnString += givenString;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
