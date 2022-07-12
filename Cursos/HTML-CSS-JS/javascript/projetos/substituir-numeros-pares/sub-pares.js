function subPares(arr){
    if (!arr) return -1;
    if (!arr.length) return -1;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            console.log("Você já é zero");
        } else if (arr[i] % 2 === 0){
            arr[i] = 0;
        }
    }
    return arr;
}

let aray = [1, 3, 4, 11, 23, 22, 34, 99];
console.log(subPares(aray));
