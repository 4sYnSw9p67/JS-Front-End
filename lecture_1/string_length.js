function stringLength(x, y, z) {
    let length = x.length + y.length + z.length;
    let average = Math.round(length / 3);
    console.log(`Length of all strings (${x}, ${y}, ${z}) is: ${length}`);
    console.log(`Average length of strings (${x}, ${y}, ${z}) is: ${average}`);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');