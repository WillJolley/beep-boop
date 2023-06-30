//Business Logic

function beepBoop(input) {

  let number = parseInt(input);
  let array = [];

  while (number >= 0) {
    array.push(number--);
  };
  return array;

  
  
};