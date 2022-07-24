// Problem No 1 - Checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8] -> input 
// [-4,-4] -> output
// o(n^2) quadratic time complexity
function getSumPairZero(array){
    for( let number of array){
        for(let j=1; j<array.length; j++){
            if((number + array[j]) === 0){
                return [number, array[j]];
            }
        }
    }
}

let resultOfGetSumPairZero = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(resultOfGetSumPairZero);



