function calculateGrade() {
  let score = document.getElementById("scoreInput").value;
  let result = document.getElementById("result");
  if (score === "") {
    result.innerHTML = "Please enter a score!";
    result.style.color = "red";
    return;
  }
  score = parseInt(score);
  let grade;
  if (score >= 80) {
    grade = "A";
  } else if (score >= 60) {
    grade = "B";
  } else if (score >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }
  result.innerHTML = `Your Grade: <span style="color:green;">${grade}</span>`;
}
