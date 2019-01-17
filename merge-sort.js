
var data = [8,9,10,3,1,17,101,91,7,13,6,42,3,9,32,19,54,-1,-2, -10, -5,0];

/**
 * 
 * @param {*} data 
 * @param {*} firstArr 
 * @param {*} lastArr 
 */
function compareAndSort(data, firstArr, lastArr) {
    
    var i = 0, j =0; k=0;

    while (i<firstArr.length && j<lastArr.length){
        data[k++] = (firstArr[i] < lastArr[j]) ? firstArr[i++] : lastArr[j++];
    }

    while (i != firstArr.length) {
        data[k++] = firstArr[i++];
    }

    while (j != lastArr.length) {
        data[k++] = lastArr[j++];
    }

    return data;
}

/**
 * 
 * @param {*} arr 
 */
function divide(arr) {
    
    if (arr.length <= 1)  return arr; 
    
    var mid      = Math.ceil(arr.length/2),
        firstArr = arr.slice(0, mid),
        lastArr  = arr.slice(mid, arr.length);

    divide(firstArr);
    divide(lastArr);

    return compareAndSort(arr, firstArr, lastArr);    
};


var mergeSort = (arr) => {

    arr = divide(arr);

    console.log('Final Arr: ', arr);
};

mergeSort(data);



