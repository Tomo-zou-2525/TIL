<template>
  <div>
    <div class="contents">
      <div id="calendar-header" class="button-area">
        <span @click="setLastMonth" class="">＜</span>
        <span>{{ displayDate }}</span>
        <span @click="setNextMonth" class="">＞</span>
      </div>

      <div class="calendar">
        <div class="calendar-weekly">
          <div class="calendar-weekday" v-for="n in 7" :key="n">
            {{ weekDay(n - 1) }}
          </div>
        </div>
        <div
          class="calendar-weekly"
          v-for="(week, outsidepass) in calendars"
          :key="outsidepass"
        >
          <div
            class="calendar-daily"
            :class="{ outside: currentMonth !== day.month }"
            v-for="(day, insidepass) in week"
            :key="insidepass"
            @click="dateClick(xxx)"
          >
            <div
              :class="{ 'calendar-today': isToday(xxx), active: day === xxx }"
            >
              <div v-if="isToday(xxx)">今日</div>
              <div v-else class="calendar-day">
                {{ day.day }}
              </div>
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
      const dayOfWeekNum = date.day();
      return date.subtract(dayOfWeekNum, "days");
    },
    getEndDate() {
      let date = moment(this.currentDate);
      date.endOf("month");
      const dayOfWeekNum = date.day();
      return date.subtract(dayOfWeekNum, "days");
    },
    getCalendar() {
      let startDate = this.getStartDate();
      const endDate = this.getEndDate();
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

      let calendars = [];
      let calendarDate = this.getStartDate();
      for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
          weekRow.push({
            day: calendarDate.get("date"),
            month: calendarDate.format("YYYY-MM"),
          });
          calendarDate.add(1, "days");
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
    weekDay(dayIndex) {
      const week = ["日", "月", "火", "水", "木", "金", "土"];
      return week[dayIndex];
    },
    //日付クリック時の処理
    dateClick: function(day) {
      if (day !== this.currentDate) {
        this.currentDate = day;
      }
    },
    //現在の日時を判定する処理
    isToday: function() {
      let date = moment();
      if (this.getCalendar === date) {
        return true;
      }
      return false;
    },
  },
  computed: {
    calendars() {
      return this.getCalendar();
    },
    displayDate() {
      return this.currentDate.format("YYYY[年]M[月]");
    },
    //背景色を分けるために使用するデータを定義：currentMonth
    currentMonth() {
      //formatしておく
      return this.currentDate.format("YYYY-MM");
    },
  },
  mounted() {
    console.log(this.getCalendar());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  margin: 2em auto;
  width: 100％;
}
#calendar-header {
  font-size: 1.7rem;
  padding: 0;
  text-align: center;
  margin-bottom: 0.8rem;
  background-color: darkorange;
  border-bottom: 0.08rem solid #ddd;
  display: flex;
  justify-content: space-between;
}
#calendar-header span {
  padding: 1.07rem 1.42rem;
  color: white;
  display: inline-block;
}
.button-area {
  margin: 0.5em 0;
}
.button {
  padding: 0.3rem 0.57rem;
  margin-right: 0.57rem;
}
.calendar {
  border-top: 0.07rem solid #e0e0e0;
  font-size: 0.8em;
}
.calendar-weekly {
  display: flex;
  border-left: 0.07rem solid #e0e0e0;
}
.calendar-weekday {
  flex: 1;
  border-bottom: 0.07rem solid #e0e0e0;
  border-right: 0.07rem solid #e0e0e0;
  margin-right: -0.07rem;
  text-align: center;
}
.calendar-daily {
  flex: 1;
  min-height: 8.92rem;
  border-right: 0.07rem solid #e0e0e0;
  border-bottom: 0.07rem solid #e0e0e0;
  margin-right: -0.07rem;
}
.calendar-day {
  text-align: center;
}
.outside {
  background-color: #f7f7f733;
}
.cal-today {
  background-color: #fcf8e3;
}
.cal-day.active {
  background-color: #ffc9d7;
}
</style>
