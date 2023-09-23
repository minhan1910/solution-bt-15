// constraint:
// 0 <= max(num1) <= 10 ^ 6
// 0 <= max(num2) <= 10 ^ 6

// maxNum = 1 trieu phan tu
// const num1 = [1, 2, 3, 4, 1000000];

const num1 = [1, 2, 3, 4, 5];
const num2 = [2, 7, 8, 10, 1, 3];


const markNum1Length = Math.max(...num1) + 1;
const markNum1 = Array.from({ length: markNum1Length }, (_, cur) => 0);

const markNum2Length = Math.max(...num2) + 1;
const markNum2 = Array.from({ length: markNum2Length }, (_, cur) => 0);

for (let i = 0; i < num1.length; ++i) {
  const valueFromNum1 = num1[i];
  markNum1[valueFromNum1]++;
}

// [0, 1, 1, 1, 1, 1]
// console.log(markNum1);

for (let i = 0; i < num2.length; ++i) {
  const valueFromNum2 = num2[i];
  markNum2[valueFromNum2]++;
}

// [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1]
// console.log(markNum2);

// so sanh rui queyt dinh lay ra cac so chung

const result = [];

const minLengthMarkNum1AndMarkNum2 = Math.min(markNum1.length, markNum2.length);

// num1.length = 5
// num2.length = 6
// min = 5
// => 5 lần
for (let i = 0; i < minLengthMarkNum1AndMarkNum2; ++i) {
  const valueFromMarkNum1 = markNum1[i];
  const valueFromMarkNum2 = markNum2[i];

  if (valueFromMarkNum1 >= 1 && valueFromMarkNum2 >= 1) {
    result.push(i);
  }
}

console.log(result);

// Tốc độ: xử lý cái bài toán
// 5 lần + 6 lần + 5 lần = 16 lần
// 3 vòng for lồng nhau => mất hơn 10 000 lần







// markNum1 = [0, 4, 1, 1, 1, 1]
// markNum2 = [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1];

// 1, 2, 3


// markNum1: [0, 4, 1, 1, 1, 1]
// markNum2: [0, 1, 1, 1, 0, 0,

// for: 0 < markNum1.length
//   markNum1[index]
//   markNum2[index]
