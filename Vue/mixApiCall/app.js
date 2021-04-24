// const 親component = {
//   template: `
//   <div>
//     <h2>子供です</h2>
//     <span v-bind:"props名"=""></span>
//     <input v-on:click=""></input>
//   </div>
//   `
// }

// const 子component = {
//   props: {
//     /*親コンポーネント（UserList）がpropsを参照する時
//     v-bind:user="ユーザーオブジェクト"
//     と記述することになる
//     え、ユーザーオブジェクトってなにかって？
//     自分で作ってもいいし、他にあるやつ使えバカやろー
//      */
//     user: {
//       type: Object
//     }
//   },
//   template: `
//     <div>
//       <h1>propsで渡ってきました</h1>
//       <h2>選択されたユーザー</h2>
//       {{ user.name }}
//     </div>
//   `
// }

// const UserList = {
//   components: {
//     'list-title': ListTitle,
//   },
//   data: {
//     users: [
//       { id: 1, name: 'ユーザー１' },
//       { id: 2, name: 'ユーザー2' },
//       { id: 3, name: 'ユーザー3' },
//       { id: 4, name: 'ユーザー4' },
//       { id: 5, name: 'ユーザー5' }
//     ]
//   },
//   template: `
//     <div>
//       <list-title></list-title>
//       <ul>
//         <li v-for="user in users" :key="user.id">
//           {{ user.name }}
//         </li>
//       </ul>
//      </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   data: {

//   },
//   components: {
//     'user-list': UserList
//   }
// })
