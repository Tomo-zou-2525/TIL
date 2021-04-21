const UserData = {
  //この場合のpropsは、親がUserDataを呼び出す際、v-bind:user=<ユーザーオブジェクト>の形で値を渡す
  props: {
    users: {
      type: Object
    }
  },
  template: `
    <div>
      <h1>Unko</h1>
    </div>
  `
}


const vm = new Vue({
  el: "#app"
})
