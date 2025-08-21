# Maze

**Description**  
Maze is a simple browser game where the player has to find the way from the start to the exit. The maze is randomly generated with a fixed size, and the player can move using either on-screen buttons or keyboard arrow keys.

---

## Features

- Randomly generated maze with dimensions 15x15.
- Controls:
  - Arrow keys (`↑`, `↓`, `←`, `→`)
  - On-screen buttons (`Up`, `Down`, `Left`, `Right`)
- Start and exit positions marked in the maze.
- Start screen with a **Start** button.
- End screen with a congratulatory message.

---

## How to play

    1. Open `index.html` in your browser.
    2. Press the **Start** button to begin the game.
    3. Move the player using the buttons or arrow keys.
    4. Reaching the exit ends the game.

---

## How it works

- The maze is generated in the `mazePattern` array, where `0` is a free path and `1` is a wall.
- The player starts at `row: 1, col: 1` and can move only on free paths.
- Reaching the exit shows the end screen.
