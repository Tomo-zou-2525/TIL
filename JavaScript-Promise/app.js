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

const sleep = fetch(
//   "https://api.jikan.moe/v3/search/anime?q=kimetus%limit=10"
// );
//⑦.thenメソッドを追加して、コールバック後の処理を記述する
// result.then((res) => {
//resの中身を見る
//   console.log(res);
// });
