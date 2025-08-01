const startScreen = document.querySelector(".startScreen");
const mazeContainer = document.querySelector(".mazeContainer");
const startBtn = document.querySelector(".startButton");
const maze = document.querySelector(".maze");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");

const size = 15; // Rozmiar labiryntu
const mazePattern = Array.from({ length: size }, () => Array(size).fill(0));
const startPosition = { row: 1, col: 1 };
const goalPosition = { row: 13, col: 13 };

for (let row = 0; row < size; row++) {
	for (let col = 0; col < size; col++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
			cell.classList.add("wall");
			mazePattern[row][col] = 1; // Ściana
		}

		if (row === startPosition.row && col === startPosition.col) {
			cell.classList.add("start");
		}
		if (row === goalPosition.row && col === goalPosition.col) {
			cell.classList.add("exit");
		}
		maze.appendChild(cell);
	}
}

function updatePlayerPosition() {
	document
		.querySelectorAll(".cell")
		.forEach((cell) => cell.classList.remove("start"));
	const index = startPosition.row * size + startPosition.col;
	document.querySelectorAll(".cell")[index].classList.add("start");
}

leftBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (col > 0 && mazePattern[row][col - 1] === 0) {
		col--;
		startPosition.col = col;
		updatePlayerPosition();
		console.log(`Moved to: (${row}, ${col})`);
	}
});

rightBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (col < size - 1 && mazePattern[row][col + 1] === 0) {
		col++;
		startPosition.col = col;
		updatePlayerPosition();
		console.log(`Moved to: (${row}, ${col})`);
	}
});

upBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (row > 0 && mazePattern[row - 1][col] === 0) {
		row--;
		startPosition.row = row;
		updatePlayerPosition();
		console.log(`Moved to: (${row}, ${col})`);
	}
});

downBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (row < size - 1 && mazePattern[row + 1][col] === 0) {
		row++;
		startPosition.row = row;
		updatePlayerPosition();
		console.log(`Moved to: (${row}, ${col})`);
	}
});

startBtn.addEventListener("click", () => {
	startScreen.style.display = "none";
	mazeContainer.style.display = "flex";
});
