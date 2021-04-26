// async function testAsync() {
//   return "resolve";
// }

// async function test() {
//   //なんかしら
//   return "resolve!!";
// }
// test().then(() => {
//   setTimeout(console.log("UNKOOOOOO"), 2000);
// });

// function sampleResolve(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 2000);
//   });
// }

// //関数を定義
// function sampleResolve(value) {
//   // 戻り値にPromiseを生成
//   return new Promise((resolve) => {
//     // resolveの値として、setTimeoutを仕込む
//     setTimeout(() => {
//       //resolveの返り血として、value * 2 した値が返される
//       resolve(value * 2);
//       //その発動は2秒後
//     }, 2000);
//   });
// }

// function doubleReplay(value) {
//   return new Promise((resolve) => {
//     setTimeout((resolve(value * 2), 2000));
//   });
// }
// function testTimeout() {
//   return new Promise((resolve) => {
//     //処理を書く
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 2000);
//   });
// }

function countDouble(value) {
  return new Promise((response) => {
    setTimeout(() => {
      response(value * 2);
    }, 2000);
  });
}

async function sample() {
  const result = await countDouble(10);
  return result + 15;
}

sample().then((response) => {
  console.log(response);
});
