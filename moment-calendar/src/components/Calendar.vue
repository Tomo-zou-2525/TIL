<template>
  <h1>Calendar</h1>
  <h1>
    {{ number }}
  </h1>
  <input v-model="number" />
  <button @click="getStartDate"></button>
</template>

<script>
//momentをimport
import moment from "moment";
export default {
  data() {
    return {
      number: "777",
      //現在のカレンダーにアクセスしているデータを取得
      currentDate: moment(),
    };
  },
  //カレンダー最初の日付を出すメソッド
  methods: {
    mounted() {
      //変数dateにmomentで取得したその月の初めの1日の曜日の数字を代入
      let date = moment().startOf("month");
      //定数weekDayに変数dateからdayメソッドで曜日を出力
      const weekDay = date.day();
      console.log(weekDay);
      //momentのsubstractメソッドを使用し、月初の日曜日を求める減算を行う
      //(第一引数：曜日の数字, 第二引数：減算の対象)
      let calcDay = date.subtract(weekDay, "days");
      console.log(calcDay);
      //以上の動作を関数に纏めると、以下のようになる
    },

    // getStartDate() {
    //   //this.currentDateのコピーを行う
    //   let date = moment(this.currentDate);
    //   //現在の現在の月初日を取得
    //   date.startOf("month");
    //   //dayメソッドで曜日を出力
    //   const weekNumber = date.day();
    //   //月初日を戻り値として返す
    //   return date.subtract(weekNumber, "days");
    // },
    // getEndDate() {
    //   let date = moment(this.currentDate);
    //   date.endOf("month");
    //   const weekNumber = date.day();
    //   return date.add(6 - weekNumber, "days");
    // },
    // mounted() {
    //   console.log(this.getStartDate());
    //   console.log(this.getEndDate());
    // },
  },
};
</script>
