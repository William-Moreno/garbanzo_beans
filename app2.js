var random = Math.floor(Math.random() * 3);

if (random == 0){
  document.getElementById('left').classList.add("lift");
} else if (random == 1){
  document.getElementById('middle').classList.add("lift");
} else {
  document.getElementById('right').classList.add("lift");
} 