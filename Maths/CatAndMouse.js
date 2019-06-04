function catAndMouse(x, y, z) {

    x = (x - z)<0 ? -(x-z):x-z;
    y = (y - z) < 0 ? -(y-z):(y-z);
    if (x == y) {
        process.stdout.write("Mouse C");  //console.log("Mouse C")
    } else if (x < y) {
        process.stdout.write("Cat A");   //console.log("Cat A")
    } else {
        process.stdout.write("Cat B");   //console.log("Cat B")
    }

    console.log()
}

catAndMouse(1,3,2);