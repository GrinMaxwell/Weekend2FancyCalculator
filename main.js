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
var bEqual = document.getElementById('equal');
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

// bEquals.addEventListener('click', function(){
//   var equation = document.querySelector('output').innerText;
//   var num1;
//   var num2;
//   for(i=0; i<equation.length; i++){
//     if(isNaN(equation[i])){
//
//     } else if (true) {
//
//     }
//   }
// });
