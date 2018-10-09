const nums = [1,10,3,30,-1,-4,-10]

function positive(n) {
    return n >0;
}
const result = nums.filter(positive);
console.log(result)