document.addEventListener("DOMContentLoaded", () => {
  let persons = [];

  const addPersonButton = document.getElementById("addPersonButton");
  const showDescriptionButton = document.getElementById(
    "showDescriptionButton"
  );
  const resetButton = document.getElementById("resetButton");
  const searchButton = document.getElementById("searchButton");

  // Constructor function for creating person objects
  function Person(name, city, mobile) {
    this.name = name;
    this.city = city;
    this.mobile = mobile;
    this.description = function () {
      return `The person's name is ${this.name}, belongs to ${this.city}, and their contact number is ${this.mobile}.`;
    };
  }

  addPersonButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const mobile = document.getElementById("mobile").value;

    // Create a new person object using the constructor
    const person = new Person(name, city, mobile);

    persons.push(person);
    document.getElementById("personForm").reset();
  });

  showDescriptionButton.addEventListener("click", () => {
    const descriptionContainer = document.getElementById(
      "descriptionContainer"
    );
    descriptionContainer.innerHTML = "";
    persons.forEach((person) => {
      const personDescription = document.createElement("div");
      personDescription.className = "dis";
      personDescription.textContent = person.description();
      descriptionContainer.appendChild(personDescription);
    });
  });

  resetButton.addEventListener("click", () => {
    document.getElementById("personForm").reset();
    persons = [];
    const descriptionContainer = document.getElementById(
      "descriptionContainer"
    );
    descriptionContainer.textContent = "";
  });

  searchButton.addEventListener("click", () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const descriptionContainer = document.getElementById(
      "descriptionContainer"
    );
    descriptionContainer.innerHTML = "";
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(searchValue)
    );
    filteredPersons.forEach((person) => {
      const personDescription = document.createElement("div");
      personDescription.className = "dis";
      personDescription.textContent = person.description();
      descriptionContainer.appendChild(personDescription);
    });
  });
});

// let data = async () => {
//   let content = await fetch("https://dummyjson.com/users");

//   let jsoncode = await content.json();
//   console.log(jsoncode);
// };

// data();
