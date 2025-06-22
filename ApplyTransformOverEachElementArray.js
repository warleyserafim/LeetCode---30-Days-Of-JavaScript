/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    let returnedArray = [];

    arr.forEach(function(array, i){
        return returnedArray.push(fn(array, i));
    });

    return returnedArray;
    
};