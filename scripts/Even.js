const nums = [5,10,6,30,1,4,100]

function even(n) {
    return n % 2 === 0;
}
const result = nums.filter(even);
console.log(result)