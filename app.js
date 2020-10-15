function welcome(){
  var userName = prompt(`Hello. What is your name?`, 'Visitor');
  var today = new Date();
  var weekday = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]
  var dayNow = weekday[today.getDay()];
  
  document.write(`<h2>${userName}, the suggested recipe  for ${dayNow} is...</h2>`);

}

function daysRecipe(){
  var random = Math.floor(Math.random() * 3);

  if (random == 0){
    var card = document.getElementById('left');
  } else if (random == 1){
    var card = document.getElementById('middle');
  } else {
    var card = document.getElementById('right');
  } 

  card.classList.add("lift");
}



