function daysRecipe(){
  var random = Math.floor(Math.random() * 3);

  if (random == 0){
    var card = document.getElementById('left');
  } else if (random == 1){
    var card = document.getElementById('middle');
  } else {
    var card = document.getElementById('right');
  } 

  card.classList.add("lift")
}