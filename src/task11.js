var seconds = 3665;
var input_sec = seconds % 60;
var hours = Math.floor(seconds / 60 / 60);
var minutes = Math.floor(seconds / 60) - (hours * 60);
var itog = hours + ' час ' + minutes + ' минута ' + input_sec + ' секунд';
console.log(itog);