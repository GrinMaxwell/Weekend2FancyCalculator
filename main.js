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
var bSquare = document.getElementById('square');
var bCube = document.getElementById('cube');
var bExponent = document.getElementById('exponent');
var bSquareroot = document.getElementById('squareroot');
var bCuberoot = document.getElementById('cuberoot');
var bRoot = document.getElementById('root');
var bSin = document.getElementById('sin');
var bCos = document.getElementById('cos');
var bTan = document.getElementById('tan');
var bSinH = document.getElementById('sinh');
var bCosH = document.getElementById('cosh');
var bTanH = document.getElementById('tanh');
var bLog = document.getElementById('log');
var bE = document.getElementById('e');
var bPi = document.getElementById('pi');
var savFancyOp = false;

bOne.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 1;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 1);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bTwo.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 2;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 2);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/2));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bThree.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 3;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 3);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/3));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bFour.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 4;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 4);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/4));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bFive.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 5;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 5);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/5));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bSix.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 6;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 6);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/6));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bSeven.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 7;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 7);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/7));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bEight.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 8;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 8);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/8));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bNine.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 9;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 9);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, (1/9));
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
}
});
bZero.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 0;
} else if (savFancyOp === 'exponent'){
  var num1 = document.querySelector('output').innerText;
  var answer = Math.pow(num1, 0);
  document.querySelector('output').innerText = answer;
  savFancyOp = false;
} else if (savFancyOp === 'root') {
  document.querySelector('output').innerText = 'Error';
  savFancyOp = false;
}
});
bDot.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += '.';
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});

bPlus.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += '+';
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});
bMinus.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += '-';
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});
bDivide.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += '/';
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});
bMultiply.addEventListener('click', function(){
if (savFancyOp === false) {
document.querySelector('output').innerText += 'x';
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});

bClear.addEventListener('click', function(){
document.querySelector('output').innerText = '';
});

bNegative.addEventListener('click', function(){
if (savFancyOp === false) {
  var num = Number(document.querySelector('output').innerText);
  num = -num;
  document.querySelector('output').innerText = String(num);
} else if (savFancyOp === 'exponent' || savFancyOp === 'root'){
  document.querySelector('output').innerText = 'Error!';
}
});

bSquare.addEventListener('click', function(){
var num = Number(document.querySelector('output').innerText);
num = Math.pow(num, 2);
document.querySelector('output').innerText = num;
});
bCube.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.pow(num, 3);
  document.querySelector('output').innerText = num;});
bExponent.addEventListener('click', function(){
  savFancyOp = 'exponent';
});
bSquareroot.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.sqrt(num);
  document.querySelector('output').innerText = num;});
bCuberoot.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.cbrt(num);
  document.querySelector('output').innerText = num;});
bRoot.addEventListener('click', function(){
  savFancyOp = 'root';
});
bSin.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.sin(num);
  document.querySelector('output').innerText = num;});
bCos.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.cos(num);
  document.querySelector('output').innerText = num;});
bTan.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.tan(num);
  document.querySelector('output').innerText = num;});
bSinH.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.sinh(num);
  document.querySelector('output').innerText = num;});
bCosH.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.cosh(num);
  document.querySelector('output').innerText = num;});
bTanH.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.tanh(num);
  document.querySelector('output').innerText = num;});
bLog.addEventListener('click', function(){
  var num = Number(document.querySelector('output').innerText);
  num = Math.log(num);
  document.querySelector('output').innerText = num;
});
bE.addEventListener('click', function(){
  document.querySelector('output').innerText += String(Math.E);
});
bPi.addEventListener('click', function(){
  document.querySelector('output').innerText += String(Math.PI);
  console.log('pi');
});

bEquals.addEventListener('click', function(){
if (savFancyOp === false) {
  var equation = document.querySelector('output').innerText;
  var num1 = 0;
  var num2 = 0;
  var operation = 0;
  var previous = 0;
  var answer;
  for(i=0; i<equation.length; i++){
    if((equation[i]==='+' || equation[i]==='-' || equation[i]==='/' || equation[i]==='x') && operation === 0) {
      num1 = Number(previous);
      operation = equation[i];
    } else if ((equation[i]==='+' || equation[i]==='-' || equation[i]==='/' || equation[i]==='x') && operation !== 0) {
      document.querySelector('output').innerText = 'Error!';
      return;
    } else if (num1 === 0) {
      previous += equation[i];
    } else if (num1 !== 0) {
      num2 += equation[i];
    } else {
      document.querySelector('output').innerText = 'Error!';
      return;
    }
  }
  if(equation[0] === '-'){
    num1 = -num1;
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
  if(answer !== undefined){
  document.querySelector('output').innerText = answer;
  } else {
  document.querySelector('output').innerText = 'Error!';
   }
} else {
  document.querySelector('output').innerText = 'Error!';
  savFancyOp = false;
}
});











//
