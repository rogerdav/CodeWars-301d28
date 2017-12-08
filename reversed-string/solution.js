'use strict'
function solution(str){
  let arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr.join('');
}
