var userName = prompt(`Hello. What is your name?`, 'Visitor');
var today = new Date();
var hourNow = today.getHours();
var dateNow = today.getDate();
var weekday = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]
var dayNow = weekday[today.getDay()];
var greeting;


if (hourNow > 17){
 greeting = `Good evening, ${userName}!`;
} else if (hourNow > 12){
  greeting = `Good afternoon, ${userName}!`;
} else if (hourNow > 6){
  greeting = `Good morning, ${userName}!`;
} else {
  greeting = `You should be sleeping, ${userName}!`;
}

alert(greeting);

document.write(`<h2>${userName}, the suggested recipe  for ${dayNow} is...</h2>`);





