function welcome(){
  var userName = prompt('Hello. What is your name?', 'Visitor');
  var today = new Date();
  var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  var dayNow = weekday[today.getDay()];
  
  document.write('<h2><i>' + userName + '</i>, the suggested recipe  for <b>' + dayNow + '</b> is...</h2>');
}
var lower;
var award;

function daysRecipe(){
  var random = Math.floor(Math.random() * 3);

  if (random == 0){
    var card = document.getElementById('left');
    var star = document.getElementById('curry');
  } else if (random == 1){
    var card = document.getElementById('middle');
    var star = document.getElementById('nuggets');
  } else {
    var card = document.getElementById('right');
    var star = document.getElementById('falafel');
  } 

  card.classList.add("lift");
  award = star;
  lower = card;
}


function likeIt(){
  beans = '<img src="garbanzo.png" width="50px" height="50px">';

  var rate;
  var finalScore;
  rateIt();

  function rateIt(){
    var rating = prompt('From 1 to 5, How many beans would you rate this dish?');

    while(rating < 1 || rating > 5){
      var rating = prompt('Please enter a number between 1 and 5.');
    }

    rate = rating;
    showRating();
    stampIt();
    lower.classList.remove("lift");
  }

  function showRating(){
    var score = '';
    for(i = 0; i < rate ; i++){
      score += beans;
    }
    finalScore = score;
  }

  function stampIt(){
    award.innerHTML = finalScore + '<br /><h6>' + rate + '</h6>';
  }
}

