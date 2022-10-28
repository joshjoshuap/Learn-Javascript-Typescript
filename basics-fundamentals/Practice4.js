// Odd & Even
let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 1; i < numbers.length; i+=2) console.log(numbers[i]);
for (let i = 0; i < numbers.length; i+=2) console.log(numbers[i]);

for (let num of numbers) if (num % 2 === 0) console.log(num);
for (let num of numbers) if (num % 2 === 1) console.log(num);

numbers.filter(num => num % 2 === 0).forEach(num => console.log(num));
numbers.filter(num => num % 2 === 1).forEach(num => console.log(num));

/* 
Output:
2
4
6
8
10
1
3
5
7
9
*/

