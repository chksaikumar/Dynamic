// let randomNumber = Math.random();

// // console.log(randomNumber);

// let floorNumber = Math.floor(10 * randomNumber);
// console.log(floorNumber);

// let content = document.getElementById(num);

function generateRandomNumber() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers for a and b.");
    return;
  }

  let randomNumber = Math.random();
  let randomValue = Math.floor(a + (b - a) * randomNumber);

  let resultElement = document.getElementById("result");
  resultElement.innerText = `Random value between ${a} and ${b}: ${randomValue}`;
  resultElement.style.color = getRandomColor();
  setTimeout(() => {
    resultElement.innerText = "";
  }, 5000);
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}

function sai() {
  console.log("sai");
}
