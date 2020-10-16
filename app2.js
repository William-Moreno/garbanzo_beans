
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


// function likeIt(){
  beans = '<img src="garbanzo.png">';

  var rate;
  var finalScore;

  function rateIt(){
    var rating = prompt('From 1 to 5, How many beans would you rate this dish?');

    while(rating < 1 || rating > 5){
      var rating = prompt('Please enter a number between 1 and 5.');
    }

    rate = rating;
    showRating();
    stampIt();
  }

  function showRating(){
    var score = '';
    for(i = 0; i < rate ; i++){
      score += beans;
    }
    finalScore = score;
  }

  function stampIt(){
    star.innerHTML = finalScore;
  }
// }