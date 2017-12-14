'use strict'

function mutateMyStrings(stringOne, stringTwo){
  let x1, x2;

  x1 = stringOne.split('');
  x2 = stringTwo.split('');
  let accarray = [x1.join('')];
  for (i = 0; i < x1.length; i++) {
    if(x1[i] !== x2[i]) {
      x1[i] = x2[i];
      accarray.push(x1.join(''));

      // console.log('accarray at i',accarray);
    }
  }
  let final = accarray.join('\n')+('\n');
  return final;
}
