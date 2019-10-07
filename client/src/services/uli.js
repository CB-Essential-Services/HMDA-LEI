const uliFunc = (input, createOrCheck) => {
  // Replacing letters in input string with corresponding numbers
  const inputArray = input.split('');
  inputArray.forEach((char, idx) => {
    if (/[a-zA-Z]+/g.test(char)){
      switch (char.toUpperCase()) {
        case 'A':
          inputArray[idx] = '10';
          break;
        case 'B':
          inputArray[idx] = '11';
          break;
        case 'C':
          inputArray[idx] = '12';
          break;
        case 'D':
          inputArray[idx] = '13';
          break;
        case 'E':
          inputArray[idx] = '14';
          break;
        case 'F':
          inputArray[idx] = '15';
          break;
        case 'G':
          inputArray[idx] = '16';
          break;
        case 'H':
          inputArray[idx] = '17';
          break;
        case 'I':
          inputArray[idx] = '18';
          break;
        case 'J':
          inputArray[idx] = '19';
          break;
        case 'K':
          inputArray[idx] = '20';
          break;
        case 'L':
          inputArray[idx] = '21';
        break;
        case 'M':
          inputArray[idx] = '22';
          break;
        case 'N':
          inputArray[idx] = '23';
          break;
        case 'O':
          inputArray[idx] = '24';
          break;
        case 'P':
          inputArray[idx] = '25';
          break;
        case 'Q':
          inputArray[idx] = '26';
          break;
        case 'R':
          inputArray[idx] = '27';
          break;
        case 'S':
          inputArray[idx] = '28';
          break;
        case 'T':
          inputArray[idx] = '29';
          break;
        case 'U':
          inputArray[idx] = '30';
          break;
        case 'V':
          inputArray[idx] = '31';
          break;
        case 'W':
          inputArray[idx] = '32';
          break;
        case 'X':
          inputArray[idx] = '33';
          break;
        case 'Y':
          inputArray[idx] = '34';
          break;
        case 'Z':
          inputArray[idx] = '35';
          break;
      }
    }
  })

  // JS Big Integer limitation workaround
  function modulo(divident, divisor){
   return Array.from(divident).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % divisor,0);
};

  if (createOrCheck === "check") {
    let modNum = modulo(inputArray.join(''), 97);
    if (modNum === 1) {
      console.log(true);
      return true
    }
    else {
      console.log(false);
      return false
    }
  }

  inputArray.push('00')
  let modNum = modulo(inputArray.join(''), 97);
  modNum = 98 - modNum;
  if (modNum < 10) {
    modNum = '0' + modNum;
  }
  console.log(((input + modNum).toUpperCase()));
  return ((input + modNum).toUpperCase());
}

export { uliFunc }
