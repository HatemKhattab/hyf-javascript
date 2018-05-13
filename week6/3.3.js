function repeatStringNumTimes_byForLoop(str, num) {
  console.log('calling function repeatStringNumTimes_byForLoop(' + str+', '+ num+')');
  let string = '';
  if(num > 0){
    for(let i = 0; i < num; i++){
      string = string.concat(str);
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byForLoop("abc", 3));

function repeatStringNumTimes_byWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    while(i < num){
      string = string.concat(str);
      i++;
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byWhile('abc', 3));

function repeatStringNumTimes_byDoWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byDoWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    do {
      string = string.concat(str);
      i++;
    }while(i < num)
  }
  return string;
}

console.log(repeatStringNumTimes_byDoWhile('abc', 3));