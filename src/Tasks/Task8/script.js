document.getElementById("calculateButton").addEventListener("click", () => {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const resultDiv = document.getElementById("result");
  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Please enter valid numbers for both a and b.";
    return;
  }
  const sum = sumOfNumbers(a, b);
  resultDiv.textContent = `The sum of numbers between ${a} and ${b} is ${sum}`;
});
function sumOfNumbers(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
