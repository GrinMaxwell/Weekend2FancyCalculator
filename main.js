var bOne = document.getElementById('one');
var bTwo = document.getElementById('two');
var bThree = document.getElementById('three');
var bFour = document.getElementById('four');
var bFive = document.getElementById('five');
var bSix = document.getElementById('six');
var bSeven = document.getElementById('seven');
var bEight = document.getElementById('eight');
var bNine = document.getElementById('nine');
var bZero = document.getElementById('zero');
var bDot = document.getElementById('dot');
var bNegative = document.getElementById('negative');
var bPlus = document.getElementById('plus');
var bMinus = document.getElementById('minus');
var bDivide = document.getElementById('divide');
var bMultiply = document.getElementById('multiply');
var bEquals = document.getElementById('equals');
var bClear = document.getElementById('clear');

bOne.addEventListener('click', function(){
document.querySelector('output').innerText += 1;
});
bTwo.addEventListener('click', function(){
document.querySelector('output').innerText += 2;
});
bThree.addEventListener('click', function(){
document.querySelector('output').innerText += 3;
});
bFour.addEventListener('click', function(){
document.querySelector('output').innerText += 4;
});
bFive.addEventListener('click', function(){
document.querySelector('output').innerText += 5;
});
bSix.addEventListener('click', function(){
document.querySelector('output').innerText += 6;
});
bSeven.addEventListener('click', function(){
document.querySelector('output').innerText += 7;
});
bEight.addEventListener('click', function(){
document.querySelector('output').innerText += 8;
});
bNine.addEventListener('click', function(){
document.querySelector('output').innerText += 9;
});
bZero.addEventListener('click', function(){
document.querySelector('output').innerText += 0;
});
bDot.addEventListener('click', function(){
document.querySelector('output').innerText += '.';
});

bPlus.addEventListener('click', function(){
document.querySelector('output').innerText += '+';
});
bMinus.addEventListener('click', function(){
document.querySelector('output').innerText += '-';
});
bDivide.addEventListener('click', function(){
document.querySelector('output').innerText += '/';
});
bMultiply.addEventListener('click', function(){
document.querySelector('output').innerText += 'x';
});

bClear.addEventListener('click', function(){
document.querySelector('output').innerText = '';
});

bEquals.addEventListener('click', function(){
  var equation = document.querySelector('output').innerText;
  var num1 = 0;
  var num2 = 0;
  var operation;
  var prev = 0;
  var answer;
  for(i=0; i<equation.length; i++){
    if(equation[i]==='+'){
      num1 = Number(prev);
      operation = equation[i];
      console.log(prev);
    } else if (equation[i]==='-') {
      num1 = Number(prev);
      operation = equation[i];
    } else if (equation[i]==='/') {
      num1 = Number(prev);
      operation = equation[i];
    } else if (equation[i]==='x') {
      num1 = Number(prev);
      operation = 'x';
    } else if (num1 === 0) {
      prev += equation[i];
    } else if (num1 !== 0) {
      num2 += equation[i];
    } else {
      document.querySelector('output').innerText = 'Error';
    }
  }
  if(operation==='+'){
    answer = num1 + Number(num2);
  } else if (operation==='-') {
    answer = num1 - Number(num2);
  } else if (operation==='/') {
    answer = num1 / Number(num2);
  } else if (operation==='x') {
    answer = num1 * Number(num2);
  }
  console.log(num1);
  console.log(num2);
  console.log(equation);
  console.log(prev);

  document.querySelector('output').innerText = answer;
});











//
