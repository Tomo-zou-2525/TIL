<template>
  <div>
    <div class="content">
      <h2>カレンダー{{ currentDate }}</h2>
      <div class="button-area">
        <button @click="setLastMonth" class="button">前の月</button>
        <button @click="setNextMonth" class="button">次の月</button>
      </div>
      <div class="calendar">
        <div
          class="calendar-weekly"
          v-for="(week, index) in calendars"
          :key="index"
        >
          <div class="calendar-daily" v-for="(day, index) in week" :key="index">
            <div class="calendar-day">
              {{ day.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      currentDate: moment(),
    };
  },
  methods: {
    getStartDate() {
      let date = moment(this.currentDate);
      date.startOf("month");
      const youbiNum = date.day();
      return date.subtract(youbiNum, "days");
    },
    getEndDate() {
      let date = moment(this.currentDate);
      date.endOf("month");
      const youbiNum = date.day();
      return date.subtract(youbiNum, "days");
    },
    getCalendar() {
      let startDate = this.getStartDate();
      const endDate = this.getEndDate();
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

      let calendars = [];
      for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
          weekRow.push({
            date: startDate.get("date"),
          });
          startDate.add(1, "days");
        }
        calendars.push(weekRow);
      }
      return calendars;
    },
    setNextMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month");
    },
    setLastMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month");
    },
  },
  computed: {
    calendars() {
      return this.getCalendar();
    },
  },
  mounted() {
    console.log(this.getCalendar());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: 2em auto;
  width: 900px;
}
.button-area {
  margin: 0.5em 0;
}
.button {
  padding: 4px 8px;
  margin-right: 8px;
}
.calendar {
  max-width: 900px;
  border-top: 1px solid #e0e0e0;
  font-size: 0.8em;
}
.calendar-weekly {
  display: flex;
  border-left: 1px solid #e0e0e0;
  /* background-color: black; */
}
.calendar-daily {
  flex: 1;
  min-height: 125px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-right: -1px;
}
.calendar-day {
  text-align: center;
}
</style>
