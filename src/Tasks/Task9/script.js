document.getElementById("generateButton").addEventListener("click", () => {
  const starContainer = document.getElementById("star-container");
  let size = parseInt(document.getElementById("sizeInput").value);
  starContainer.innerHTML = "";
  let i = 1;
  while (i <= size) {
    let stars = " ";
    let j = 1;
    do {
      stars += " * ";
      j++;
    } while (j <= i);
    console.log(stars);
    const starLine = document.createElement("div");
    starLine.textContent = stars;
    starLine.className = "stc";
    starLine.style.color = getRandomColor();
    starContainer.appendChild(starLine);
    i++;
  }
});
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
