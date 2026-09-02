<div align="center">

# 🪨📄✂️ Rock Paper Scissors

### A classic browser-based game built with HTML, CSS, and JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

</div>

---

## 📖 Overview

Rock Paper Scissors is an interactive web game in which the player competes against the computer.

The player selects Rock, Paper, or Scissors, while the computer generates a random choice. The game instantly determines the winner and updates the scoreboard.

---

## ✨ Features

- 👤 Player versus computer gameplay
- 🎲 Random computer selections
- 🪨 Rock, 📄 Paper, and ✂️ Scissors options
- 🏆 Player and computer score tracking
- ⚡ Instant round results
- 🖼️ Image-based game controls
- 🌐 Runs directly in a web browser
- 📦 No external libraries or installation required

---

## 🎮 Game Rules

| Player choice | Defeats |
|---|---|
| 🪨 Rock | ✂️ Scissors |
| 📄 Paper | 🪨 Rock |
| ✂️ Scissors | 📄 Paper |

If both sides make the same choice, the round ends in a draw.

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Browser Local Storage
- Random number generation

---

## 📁 Project Structure

```text
rockPaperGame/
├── games/
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
├── index.html
├── style.css
├── script.js
└── README.md
```

### Main Files

- `index.html` — defines the game interface
- `style.css` — controls the layout and visual design
- `script.js` — handles game logic, random choices, results, and scoring
- `games/` — contains the Rock, Paper, and Scissors images

---

## 🚀 Getting Started

No installation or external dependencies are required.

### Option 1: Open Directly

Download the repository and open `index.html` in a web browser.

### Option 2: Clone the Repository

```bash
git clone https://github.com/eyadHaddad98/rockPaperGame.git
cd rockPaperGame
```

Then open:

```text
index.html
```

You can also run the project with the **Live Server** extension in Visual Studio Code.

---

## 🧠 How It Works

1. The player selects Rock, Paper, or Scissors.
2. JavaScript generates a random choice for the computer.
3. The choices are compared according to the game rules.
4. The selected images and round result are displayed.
5. The winner's score is increased on the scoreboard.
6. The player can continue playing additional rounds.

---

## 🔮 Possible Future Improvements

- Add a Reset Score button
- Save scores between browser sessions
- Add sound effects and animations
- Improve the mobile layout
- Add a best-of-three game mode
- Display round history
- Add light and dark themes
- Publish the game using GitHub Pages

<div align="center">

</div>
