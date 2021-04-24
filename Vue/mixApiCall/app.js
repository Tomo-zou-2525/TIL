let vm = new Vue({
  el: "#app",
  data: {
    title: "ユーザ一覧",
    users: [],
  },
  created() {
    this.users = [
      {
        id: 1,
        name: "John Blue",
        address: "unko@tinko.com",
      },
      {
        id: 2,
        name: "John Red",
        address: "BigUnko@tinko.com",
      },
      {
        id: 3,
        name: "John Green",
        address: "LargeUnko@tinko.com",
      },
    ];
  },
});
