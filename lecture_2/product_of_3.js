function testPosOrNeg(input) {
    let num1 = input[0];
    let num2 = input[1];
    let num3 = input[2];

    let counter = 0;
    if (num1 < 0) {
        counter++;
    }
    if (num2 < 0) {
        counter++;
    }
    if (num3 < 0) {
        counter++;
    }
    if (counter % 2 === 0 || num1 === 0 || num2 === 0 || num3 === 0) {
        return "Positive";
    }
    return "Negative";
}
console.log(testPosOrNeg([2, 3, -1]));
