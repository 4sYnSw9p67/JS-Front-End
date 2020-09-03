function printElements() {
    let capitals = ["Sofia", "Washington", "London", "Paris"];

    capitals.forEach(element => {
        console.log(element);
    });
    console.log("------------------------");
    for (const index in capitals) {
        if (capitals.hasOwnProperty(index)) {
            const element = capitals[index];
            console.log(element);
        }
    }
    console.log("------------------------");
    for (const element of capitals) {
        console.log(element);
    }
    console.log("------------------------");
    for (let i = 0; i < capitals.length; i++) {
        const element = capitals[i];
        console.log(element);
    }
    console.log("------------------------");
}
printElements();