const startScreen = document.querySelector(".startScreen");
const mazeContainer = document.querySelector(".mazeContainer");
const startBtn = document.querySelector(".startButton");

startBtn.addEventListener("click", () => {
	startScreen.style.display = "none";
	mazeContainer.style.display = "block";
});
