const tasks = [
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
  iframeContent.style = "display:none";
};
header.appendChild(searchInput);

tasks.forEach((task) => {
  const button = document.createElement("button");
  button.textContent = task.title;
  button.onclick = () => {
    iframeContent.src = task.url;
    previewContainer.innerHTML = "";
    showPopup(task.title);
    iframeContent.style = "display:block";
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

// Bubble  Effect

function createBubble(x, y) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Set bubble position
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  // Random size
  let size = Math.random() * 10 + 5;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random color variation
  let colors = [
    "rgba(255, 255, 255, 0.7)",
    "rgba(255, 182, 193, 0.7)",
    "rgba(135, 206, 235, 0.7)",
    "rgba(2, 27, 37, 0.9)",
  ];
  bubble.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(bubble);

  // Remove bubble after animation
  setTimeout(() => {
    bubble.remove();
  }, 1500);
}

// Listen for mouse movement on main document
document.addEventListener("mousemove", function (event) {
  createBubble(event.clientX, event.clientY);
});

// Function to apply event listener inside the iframe
function applyBubbleEffectInIframe() {
  const iframe = document.getElementById("iframeContent");

  iframe.onload = function () {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.addEventListener("mousemove", function (event) {
      // Get iframe position relative to the main page
      const iframeRect = iframe.getBoundingClientRect();
      const x = event.clientX + iframeRect.left;
      const y = event.clientY + iframeRect.top;
      createBubble(x, y);
    });
  };
}

// Call function to enable bubbles inside iframe
applyBubbleEffectInIframe();

// Bubble text
function showPopupBubble(taskTitle) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = taskTitle;
  document.body.appendChild(bubble);

  // Set initial position at the bottom center
  bubble.style.left = "50%";
  bubble.style.bottom = "0";
  bubble.style.transform = "translateX(-50%)";

  // Animate the bubble moving upwards
  // bubble.animate(
  //   [
  //     { transform: "translate(-50%, 0)" },
  //     { transform: "translate(-50%, -100vh)" },
  //   ],
  //   { duration: 2000, easing: "ease-out" }
  // );

  // Remove the bubble after animation
  // setTimeout(() => {
  //   bubble.remove();
  // }, 2000);
}
window.onload = () => {
  homeButton.onclick();
};
