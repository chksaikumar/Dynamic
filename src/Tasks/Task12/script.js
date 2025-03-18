class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  }
  calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthdate.getFullYear();
    const monthDifference = today.getMonth() - this.birthdate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < this.birthdate.getDate())
    ) {
      age--;
    }
    return age;
  }
}
function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate) {
    const ageCalculator = new AgeCalculator(birthdate);
    const age = ageCalculator.calculateAge();
    document.getElementById("result").textContent = `Your age is ${age} years.`;
  } else {
    document.getElementById("result").textContent =
      "Please enter a valid birthdate.";
  }
}
