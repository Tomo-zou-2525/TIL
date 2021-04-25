//①fetchでAPIを叩く
// const result = fetch(
//   "https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10"
// );
//②.thenメソッドを追加して、コールバック後の処理を記述する
// result.then((res) => {
//resの中身を見る
//   console.log(res);
// });
// console.log(result);

//③fetchでAPIを叩く（失敗してみる）
// const result = fetch("失敗");
//④.thenメソッドを追加して、コールバック後の処理を記述する
// result.catch((e) => {
// ⑤resの中身を見る
//   console.error(e);
// });

// console.log(result);

//⑥定数にPromiseオブジェクトを仕込む
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//thenチェーンで処理を記述
// sleep(2000)
//   .then(() => console.log("2second"))
//   .then(() => sleep(1500))
//   .then(() => console.log("1.5second"))
//   .then(() => sleep(3000))
//   .then(() => console.log("3second"))
//   .then(() => sleep(1000))
//   .then(() => console.log("1second"));
//   "https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10"
// );
//⑦.thenメソッドを追加して、コールバック後の処理を記述する
// result.then((res) => {
//resの中身を見る
//   console.log(res);
// });

//⑧ ①のAPIでthenチェーンで書いてみよう
// fetch("https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10")
//   .then((res) => console.log(res))
//   .then(() => fetch("https://api.jikan.moe/v3/search/anime?q=jojo%limit=10"))
//   .then((res) => console.log(res));

//⑨thenでつながない場合
// fetch("https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10").then((res) =>
//   console.log(res)
// );

// fetch("https://api.jikan.moe/v3/search/anime?q=jojo%limit=10").then((res) =>
//   console.log(res)
// );

//⑩catch処理を入れる
// fetch("https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10")
//   .then((res) => console.log(res))
//   .then(() => fetch("https://api.jikan.moe/v3/search/anime?q=jojo%limit=10"))
//   .then(() => {
//     throw new Error("強制的にエラー");
//   })
//   .then((res) => console.log(res))
//   .catch((e) => {
//     console.error(e);
//     console.log("エラーでっせ");
//   })
//   .then(() => {
//     console.log("続けるよ");
//   });

//11自分でPromiseオブジェクトを作ってみる
// function makePromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("成功");
//       console.log("uhouhouhouho");
//       reject("失敗");
//     }, 1000);
//   });
// }

// makePromise()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

//12 Promise.all
// Promise.all([カレー作る(), ご飯炊く()])
//95行目のthenが呼ばれるのは、93行目の引数の処理が終わってから行われる
// .then(([カレー、ライス]) => カレー + ライス)

// function カレーライス作る(ライス, カレー) {
//   return カレー + ライス
// }

const fetchA = fetch(
  "https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10"
).then((r) =>
  fetch("https://api.jikan.moe/v3/search/anime?q=hokuotnoken%limit=10")
);
const fetchB = fetch(
  "https://api.jikan.moe/v3/search/anime?q=papuwakun%limit=10"
);
Promise.all([fetchA, fetchB])
  .then(([hokuto, papuwa]) =>
    fetch("https://api.jikan.moe/v3/search/anime?q=jojo%limit=10")
  )
  .then((jojo) => console.log(jojo));

//110行めの引数は
//fetchAPIが実行したHTTPリクエストの結果がそれらの変数には代入されてます！
// 従ってHTTPリクエストの結果を用いて何かを処理する場合は書く必要があります。
// 使わないなら省略可能です😃
