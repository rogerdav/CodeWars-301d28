
function formatWords(words){

  if (!words || (words.filter(val => val).length === 0)) {
    return '';
  }
  let newarr = words.filter(val => val);
  console.log('new array', newarr);
  if (newarr.length === 1) {
    return newarr.toString();
  } else if (newarr.length === 2) {
    console.log('only two');
    return `${newarr[0]} and ${newarr[1]}`;
  } else {
    let lastword = newarr.pop();
    let firstpart = newarr.join(', ');
    return `${firstpart} and ${lastword}`;
  }
}
