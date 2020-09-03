function printRevArr(arr) {
    let rev = arr.reverse();
    rev.forEach(element => {
        console.log(element);
    });
}
printRevArr([ '20', '1', '20', '1', '20' ]);