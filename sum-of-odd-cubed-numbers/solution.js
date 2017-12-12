'use strict'

function cubeOdd(arr) {
  if (arr.filter(x => isNaN(x)).length>0) return undefined;
  return arr.map(x => x*x*x).filter(x => (x%2 === 1) || (x%2 === -1) ).reduce((x, y) => x + y,0);
}
