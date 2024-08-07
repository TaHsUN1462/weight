let kg1 = document.getElementById('kg1');
let kg2 = document.getElementById('kg2');
let result1 = document.getElementById('lbs1');
let result2 = document.getElementById('lbs2');
function calc1() {
  if (kg1.value=="") {
    result1.value="Invalid Number"
  }else{
    calc()
  }
}
function calc2() {
  if (result2.value=="") {
    kg2.value="Invalid Number"
  }else{
    calcK()
  }
}
function calc() {
  result1.value = kg1.value*2.205;
  kg1.value = ""
}
function calcK() {
  kg2.value = result2.value*0.453592;
  result2.value = ""
}
function reset() {
  result2.value = "";
  result1.value = "";
  kg1.value = "";
  kg2.value = "";
}