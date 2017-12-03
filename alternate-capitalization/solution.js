'use strict'

function capitalize(s){
  let even = [];
  let odd = [];

  for (let i = 0; i < s.length ; i++) {
    if ( i % 2 === 0) {
      even.push(s[i].toUpperCase());
      odd.push(s[i]);

    } else {
      odd.push(s[i].toUpperCase());
      even.push(s[i]);
    }
  }
  return [even.join(''), odd.join('')];
}
