//Business Logic

function beepBoop(input) {

  let number = parseInt(input);
  let array = [];
  let secArray = [];

  while (number >= 0) {
    array.push(+ number--);
  };
  console.log(array);

  const arrayRev = array.reverse();

  array.forEach(function(element) {
    let numString = element.toString();

    if (numString.includes("3")) {
      secArray.push(" Won't you be my neighbor?");
    } else if (numString.includes("2")) {
      secArray.push(" boop");
    } else if (numString.includes("1")) {
      secArray.push(" beep");
    } else secArray.push(" " + numString);
  });
  console.log(secArray);
  return secArray;
  
};

//UI Logic

window.onload = function() {
  let form = document.querySelector("form");

  form.onsubmit = function(event) {
    const input = document.getElementById("input").value

    let pElement = document.querySelector("p");

    pElement.innerText = beepBoop(input);

    event.preventDefault();
  };
};