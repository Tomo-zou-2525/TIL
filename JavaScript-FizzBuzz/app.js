// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

const date = new Date();
const options = { era: "long" };
console.log(
  new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(date)
);
console.log(date);

function drawFizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

drawFizzBuzz();
