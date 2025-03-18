const tasks = [
  { id: 1, title: "Basic HTML Styling", url: "Tasks/Task1/index.html" },
  { id: 2, title: "CSS Hover", url: "Tasks/Task2/index.html" },
  { id: 3, title: "Welcome to JS", url: "Tasks/Task3/index.html" },
  { id: 4, title: "Calculator with JS", url: "Tasks/Task4/index.html" },
  { id: 5, title: "String Operation", url: "Tasks/Task5/index.html" },
  { id: 6, title: "Conditions", url: "Tasks/Task6/index.html" },
  { id: 7, title: "Call-Stack with Array", url: "Tasks/Task7/index.html" },
  { id: 8, title: "For Loop", url: "Tasks/Task8/index.html" },
  { id: 9, title: "R triangle Gen", url: "Tasks/Task9/index.html" },
  { id: 10, title: "object", url: "Tasks/Task10/index.html" },
  { id: 11, title: "function", url: "Tasks/Task11/index.html" },
  { id: 12, title: "Bootstrap", url: "Tasks/Task12/index.html" },
];

const header = document.getElementById("header");
const iframeContent = document.getElementById("iframeContent");

tasks.forEach((task) => {
  const button = document.createElement("button");
  button.textContent = task.title;
  button.onclick = () => (iframeContent.src = task.url);
  header.appendChild(button);
});
