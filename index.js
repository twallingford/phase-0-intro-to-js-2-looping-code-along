function writeCards(nameArray, celebration) {
    debugger;
    let newArray = [];
    let i = 0;
    while (i < nameArray.length) {
        newArray.push("Thank you, " + nameArray[i] + ", for the wonderful " + celebration + " gift!");
        debugger;
        i = i + 1;
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number = number - 1;
    }
}