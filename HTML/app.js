const date = new Date()
const options = { era: 'long' };
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(date));
console.log(date);
