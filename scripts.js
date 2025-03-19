/*const tasks = [
  { id: 1, title: "Basic HTML Styling", url: "./src/Tasks/Task1/index.html" },
  { id: 2, title: "CSS Hover", url: "./src/Tasks/Task2/index.html" },
  { id: 3, title: "Welcome to JS", url: "./src/Tasks/Task3/index.html" },
  { id: 4, title: "Calculator with JS", url: "./src/Tasks/Task4/index.html" },
  { id: 5, title: "String Operation", url: "./src/Tasks/Task5/index.html" },
  { id: 6, title: "Conditions", url: "./src/Tasks/Task6/index.html" },
  {
    id: 7,
    title: "Call-Stack with Array",
    url: "./src/Tasks/Task7/index.html",
  },
  { id: 8, title: "For Loop", url: "./src/Tasks/Task8/index.html" },
  { id: 9, title: "R triangle Gen", url: "./src/Tasks/Task9/index.html" },
  { id: 10, title: "object", url: "./src/Tasks/Task10/index.html" },
  { id: 11, title: "function", url: "./src/Tasks/Task11/index.html" },
  { id: 12, title: "Bootstrap", url: "./src/Tasks/Task12/index.html" },
];

const header = document.getElementById("header");
const iframeContent = document.getElementById("iframeContent");
const previewContainer = document.createElement("div");
previewContainer.id = "previewContainer";
document.body.appendChild(previewContainer);

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.onclick = () => {
  iframeContent.src = "";
  previewContainer.innerHTML = "";
  displayTasks(tasks);
};
header.appendChild(homeButton);

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search tasks...";
searchInput.oninput = () => {
  const query = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(query)
  );
  displayTasks(filteredTasks);
};
header.appendChild(searchInput);

tasks.forEach((task) => {
  const button = document.createElement("button");
  button.textContent = task.title;
  button.onclick = () => {
    iframeContent.src = task.url;
    previewContainer.innerHTML = "";
  };
  header.appendChild(button);
});

function displayTasks(tasks) {
  previewContainer.innerHTML = "";
  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <iframe src="${task.url}"  class="sort" width="300" height="200"></iframe>
    `;
    previewContainer.appendChild(card);
  });
}

*/ const tasks = [
  { id: 1, title: "Basic HTML Styling", url: "./src/Tasks/Task1/index.html" },
  { id: 2, title: "CSS Hover", url: "./src/Tasks/Task2/index.html" },
  { id: 3, title: "Welcome to JS", url: "./src/Tasks/Task3/index.html" },
  { id: 4, title: "Calculator with JS", url: "./src/Tasks/Task4/index.html" },
  { id: 5, title: "String Operation", url: "./src/Tasks/Task5/index.html" },
  { id: 6, title: "Conditions", url: "./src/Tasks/Task6/index.html" },
  {
    id: 7,
    title: "Call-Stack with Array",
    url: "./src/Tasks/Task7/index.html",
  },
  { id: 8, title: "For Loop", url: "./src/Tasks/Task8/index.html" },
  { id: 9, title: "R triangle Gen", url: "./src/Tasks/Task9/index.html" },
  { id: 10, title: "object", url: "./src/Tasks/Task10/index.html" },
  { id: 11, title: "function", url: "./src/Tasks/Task11/index.html" },
  { id: 12, title: "Bootstrap", url: "./src/Tasks/Task12/index.html" },
];

const header = document.getElementById("header");
const iframeContent = document.getElementById("iframeContent");
const previewContainer = document.createElement("div");
previewContainer.id = "previewContainer";
document.body.appendChild(previewContainer);

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.onclick = () => {
  iframeContent.src = "";
  previewContainer.innerHTML = "";
  displayTasks(tasks);
};
header.appendChild(homeButton);

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search tasks...";
searchInput.oninput = () => {
  const query = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(query)
  );
  displayTasks(filteredTasks);
};
header.appendChild(searchInput);

tasks.forEach((task) => {
  const button = document.createElement("button");
  button.textContent = task.title;
  button.onclick = () => {
    iframeContent.src = task.url;
    previewContainer.innerHTML = "";
    showPopup(task.title);
  };
  header.appendChild(button);
});

function displayTasks(tasks) {
  previewContainer.innerHTML = "";
  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <iframe src="${task.url}" class="sort" width="300" height="200"></iframe>
    `;
    previewContainer.appendChild(card);
  });
}

function showPopup(taskTitle) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent = taskTitle;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 1000);
}
