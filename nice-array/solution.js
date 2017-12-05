'use strict'

function isNice(arr){
  return arr.length === 0 ? false : arr.every( (currentitem) => (arr.includes(currentitem + 1) || arr.includes(currentitem - 1)));
}
