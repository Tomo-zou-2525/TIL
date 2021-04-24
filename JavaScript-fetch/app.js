// //apiから撮ってきたURLを仕込む関数
// const getGitUserName = () => {
//   //githubのapiを使用
//   const url = "https://api.github.com/users/deatiger";

//   //fetchメソッドを使用
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("成功");
//       return json.login;
//     })
//     .catch((error) => {
//       console.error("失敗", error);
//       return null;
//     });
// };

// const message = "GITのUserIDは";

// const username = getGitUserName();
// console.log(message + username);

import fetch from "node-fetch";

// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
  const url = "https://api.github.com/users/deatiger";

  // GitHub APIをFetchメソッドで実行
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log("これは非同期処理成功時のメッセージです");
      return json.login;
    })
    .catch((error) => {
      console.error("これは非同期処理失敗時のメッセージです。", error);
      return null;
    });
};

const message = "GitのユーザーIDは";
const username = getGitUsername();
console.log(message + username);
