const startScreen = document.querySelector(".startScreen");
const mazeContainer = document.querySelector(".mazeContainer");
const finishScreen = document.querySelector(".finishScreen");
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

generateMaze();

for (let row = 0; row < size; row++) {
	for (let col = 0; col < size; col++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
			mazePattern[row][col] = 1;
		}
		if (row === startPosition.row && col === startPosition.col) {
			cell.classList.add("start");
		}
		if (row === goalPosition.row && col === goalPosition.col) {
			cell.classList.add("exit");
		}
		if (mazePattern[row][col] === 1) {
			cell.classList.add("wall");
		}

		maze.appendChild(cell);
	}
}

function generateMaze() {
	for (let row = 0; row < size; row++) {
		for (let col = 0; col < size; col++) {
			mazePattern[row][col] = 1;
		}
	}

	const visited = Array.from({ length: size }, () => Array(size).fill(false));

	function visit(row, col) {
		visited[row][col] = true;
		mazePattern[row][col] = 0;

		const directions = [
			{ row: -2, col: 0 }, // Góra
			{ row: 2, col: 0 }, // Dół
			{ row: 0, col: -2 }, // Lewo
			{ row: 0, col: 2 }, // Prawo
		];
		directions.sort(() => Math.random() - 0.5);

		for (dir of directions) {
			const newRow = row + dir.row;
			const newCol = col + dir.col;

			if (
				newRow > 0 &&
				newCol > 0 &&
				newRow < size - 1 &&
				newCol < size - 1 &&
				!visited[newRow][newCol]
			) {
				wallRow = row + dir.row / 2;
				wallCol = col + dir.col / 2;

				mazePattern[wallRow][wallCol] = 0;
				visit(newRow, newCol);
			}
		}
	}

	visit(startPosition.row, startPosition.col);
}

function updatePlayerPosition() {
	const cells = document.querySelectorAll(".cell");
	cells.forEach((cell) => {
		cell.classList.remove("start");
	});
	const index = startPosition.row * size + startPosition.col;
	cells[index].classList.add("start");
	checkWin();
}

function checkWin() {
	if (
		startPosition.row === goalPosition.row &&
		startPosition.col === goalPosition.col
	) {
		mazeContainer.style.display = "none";
		finishScreen.style.display = "flex";
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp") {
		upBtn.click();
	} else if (e.key === "ArrowDown") {
		downBtn.click();
	} else if (e.key === "ArrowLeft") {
		leftBtn.click();
	} else if (e.key === "ArrowRight") {
		rightBtn.click();
	}
});

leftBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (col > 0 && mazePattern[row][col - 1] === 0) {
		col--;
		startPosition.col = col;
		updatePlayerPosition();
	}
});

rightBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (col < size - 1 && mazePattern[row][col + 1] === 0) {
		col++;
		startPosition.col = col;
		updatePlayerPosition();
	}
});

upBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (row > 0 && mazePattern[row - 1][col] === 0) {
		row--;
		startPosition.row = row;
		updatePlayerPosition();
	}
});

downBtn.addEventListener("click", () => {
	let { row, col } = startPosition;
	if (row < size - 1 && mazePattern[row + 1][col] === 0) {
		row++;
		startPosition.row = row;
		updatePlayerPosition();
	}
});

startBtn.addEventListener("click", () => {
	startScreen.style.display = "none";
	mazeContainer.style.display = "flex";
});
