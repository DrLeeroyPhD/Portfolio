
var basic = document.getElementById('basic');
var english =  document.getElementById('english');
var input;


english.onclick = function(){
  input = document.getElementById('input').value;
  basic.innerHTML = input;
};
