/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    let arrayFiltered = [];

    arr.forEach(function(array, i) {

        if(fn(array, i)) {
            return arrayFiltered.push(array)
        }
    })

    return arrayFiltered;
    
};