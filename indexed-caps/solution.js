'use strict'

function capitalize(s,arr){

  let b = s.split('');
  arr.forEach(i => {
    if (i < s.length) {
      b[i] = (s[i].toUpperCase());
    }
  })
  return b.join('');
}
