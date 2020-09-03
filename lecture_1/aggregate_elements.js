function aggregateElements(arr) {
    let sum = 0;
    let sumInverse = 0;
    let stringified = "";

    arr.forEach(element => {
        sum += element;
    });

    arr.forEach(element => {
        sumInverse += 1 / element;
    });

    arr.forEach(element => {
        stringified += String(element);
    });

    console.log(sum);
    console.log(sumInverse);
    console.log(stringified);
}
let arr = [1, 2, 3];
aggregateElements(arr);
