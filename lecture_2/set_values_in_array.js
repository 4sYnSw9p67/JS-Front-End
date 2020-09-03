function fillArray(input) {
    let len = +input.shift();
    let arr = new Array(len);
    arr.fill(0);

    input.forEach(element => {
        let e = element.split(" - ");
        arr[e[0]] = e[1];
    });

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
fillArray(["5", "0 - 5", "0 - 6", "0 - 7", "4 - 2"]);
