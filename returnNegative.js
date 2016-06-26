//NOTE: write a function that accepts a number as a parameter and reutnrs that number as a negative number, 0 cannot be negative.$anchorScroll

// my solution:
function makeNegative(num) {
    'use strict';
    if ((num === 0) || (num < 0)) {
        return num;
    } else {
        num -= (num * 2);
        return num;
    }
}


// other solutions that I found upon completion, some of them quite clever.
// this also works

function makeNegative(num) {
    'use strict';
    return -Math.abs(num);
}

// this also works

makeNegative = n => -Math.abs(n)

// this also works

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// this also works

function makeNegative(num) {
  return num <= 0 ? num : num*-1;
}

// this also works

var makeNegative=n=>~(n>>31<<1)*n

// this also works

function makeNegative(num) {
  return 0-Math.abs(num);
}

// this also works

function makeNegative(num) {
  if (num.toString().charAt(0) !== "-" && num !== 0) {
    return (num*-1);
  }
  return num; 
}

// this also works

function makeNegative(num) {
  if ( num > 0 ) { return 0-num; }
  return num;
}