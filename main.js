var count = 0;

function pressed() {
  count ++;

  if(count == 1)
    document.getElementById('1').style.backgroundColor = "yellow";
  if(count == 2)
    document.getElementById('2').style.backgroundColor = "yellow";
  if(count == 3)
    document.getElementById('3').style.backgroundColor = "yellow";
  if(count == 4)
    document.getElementById('4').style.backgroundColor = "yellow";
  if(count == 5){
    document.getElementById('5').style.backgroundColor = "yellow";
    document.getElementById('3').innerHTML = "YOU WIN";
  }
}
