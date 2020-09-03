function mathOperations(num1, num2, string) {
    if (
        typeof num1 === "number" &&
        typeof num2 === "number" &&
        typeof string === "string"
    ) {
        if (
            string === "+" ||
            string === "-" ||
            string === "*" ||
            string === "/" ||
            string === "%" ||
            string === "**"
        ) {
            console.log(eval(`num1 ${string} num2`));
        } else {
            console.log("Wrong operator");
        }
    } else {
        console.log("Wrong input type");
    }
}
mathOperations(3, 5.5, "*");
