function equalizeArray(arr) {
  
    let map = new Map();

    arr.forEach((e) => {

        if (map.has(e)) {
                 map.set(e,map.get(e)+1)
        } else {
            map.set(e, 1);
             }
         
    })

    console.log(map)
    let max = 0;
    let count = 0;
    for (const k of map.keys()) {
        if (map.get(k) > max) {
            count += max;
            max = map.get(k);
        } else {
            count += map.get(k);
         }
    }

    console.log( count);
}

equalizeArray([1,2,3,2,2]);