//3. Write a javascript function to find average of all numbers and variance of those
//numbers ? Write Async/await function for both of calculations
const arr = [4, 6, 7, 8, 9, 10, 10];
const findVariance = (arr = []) =&gt; {
if(!arr.length){
return 0;
};
const sum = arr.reduce((acc, val) =&gt; acc + val);
const { length: num } = arr; const
median = sum / num; let variance =
0; arr.forEach(num =&gt; {
variance += ((num - median) * (num - median));
});
variance /= num;
return variance;
};
console.log(findVariance(arr))