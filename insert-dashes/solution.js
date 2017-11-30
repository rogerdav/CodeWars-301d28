'use strict'

function insertDash(num) {
  let array = num.toString();
  array = array.split('');
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2 === 1) && (array[i + 1] % 2 === 1)){
      array.splice(i+1,0, '-');
    }
  }
  array = array.join('');
  return array;
}
