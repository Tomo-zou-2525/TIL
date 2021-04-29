// const moment = require("moment");

console.log("Hello from JavaScript!");
console.log(moment().startOf("day").fromNow());

moment({
  year: 2018,
  month: 11,
  day: 25,
  hour: 1,
  minute: 30,
  second: 0,
  millsecond: 123,
}); // 2018-12-24T16:30:00.000Z
moment("2018-12-25", "YYYY-MM-DD").set("year", 2015); // 2015-12-24T15:00:00.000Z
moment("2018-12-25", "YYYY-MM-DD").set("month", 0); // 2018-01-24T15:00:00.000Z (0から始まる)
moment("2018-12-25", "YYYY-MM-DD").set("date", 1); // 2018-11-30T15:00:00.000Z
moment("2018-12-25", "YYYY-MM-DD").set("day", 1); // 2018-12-23T15:00:00.000Z (曜日)
moment("2018-12-25", "YYYY-MM-DD").set("hour", 1); // 2018-12-24T16:00:00.000Z
moment("2018-12-25", "YYYY-MM-DD").set("minute", 1); // 2018-12-24T15:01:00.000Z
moment("2018-12-25", "YYYY-MM-DD").set("second", 1); // 2018-12-24T15:00:01.000Z
moment("2018-12-25", "YYYY-MM-DD").set("millisecond", 1); // 2018-12-24T15:00:00.001Z

moment().toDate();
