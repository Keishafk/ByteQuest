# ByteQuest 🎮

> **Ready for your Adventure in Web Development?**

ByteQuest is an interactive web-based learning project that teaches fundamental JavaScript concepts through hands-on activities. Built as a major course requirement for **ITE6**, this project demonstrates routing, DOM manipulation, event handling, and a functional grade calculator.

## 📖 About

**ByteQuest** is a single-page application (SPA) that showcases progressive JavaScript skills, from basic syntax to full DOM manipulation and a working grade calculator. It features hash-based routing, a dark/light mode toggle, and multiple interactive activities organized by exercise.

**Author:** Katina Lorraine Rosialda — BSCS 2C

---

## ✨ Features

* **Hash-based Routing** — Navigate between sections without page reloads
* **Dark / Light Mode Toggle** — Theme switching with persistent CSS variables
* **Fully Responsive** — Mobile-friendly layout with adaptive grid
* **Random Background Color** — Dynamic color generation via RGB
* **Mini To-Do List** — Add and delete tasks dynamically
* **Student Grade Calculator** — Weighted grading with quiz, exam, and MCO categories

---

## 🛠️ Tech Stack

| Layer   | Technology                              |
| ------- | --------------------------------------- |
| Markup  | HTML5                                   |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic   | Vanilla JavaScript (ES6+)               |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bytequest.git
```

### 2. Open the Project

Simply open `index.html` in your browser.

Or, use a local server:

```bash
npx serve .
```

### 3. Explore

* Click **Start Quest →** to begin
* Use the **Activities** dropdown to jump between exercises
* Try each activity to explore the JavaScript concepts

---

## 🧪 Exercises Overview

### Exercise 2 — Basic JavaScript

| # | Activity        | Concept                        |
| - | --------------- | ------------------------------ |
| 1 | Welcome Message | `console.log`, `alert`         |
| 2 | Variables       | `const`, template literals     |
| 3 | Arithmetic      | `+`, `-`, `*`, `/`             |
| 4 | User Prompts    | `prompt`, input handling       |
| 5 | Age Eligibility | `if/else`, `parseInt`, `isNaN` |
| 6 | Loops           | `for`, `while`                 |
| 7 | Click Event     | `addEventListener`             |

### Exercise 3 — DOM Manipulation

| # | Activity            | Concept                             |
| - | ------------------- | ----------------------------------- |
| 1 | Change Background   | `style`, random RGB                 |
| 2 | Dark Mode Toggle    | `classList.toggle`                  |
| 3 | Add List Items      | `createElement`, `appendChild`      |
| 4 | Remove Paragraph    | `.remove()`                         |
| 5 | Character Count     | `input` event                       |
| 6 | Addition Calculator | `parseFloat`, input validation      |
| 7 | Change Image        | `getAttribute`, `setAttribute`      |
| 8 | Mini To-Do List     | Dynamic elements + event delegation |

### Exercise 4 — Grade Calculator

The Grade Calculator generates dynamic input rows for:

* **Quiz**
* **Exam**
* **MCO**

#### Formula Per Item

```text
Grade = (Score / Total) × 50 + 50
```

#### Weighted Final Grade

```text
Final = (Quiz × 0.2) + (Exam × 0.3) + (MCO × 0.5)
```

#### Equivalent Scale

| Grade | Equivalent |
| ----- | ---------- |
| A     | ≥ 90       |
| B     | ≥ 80       |
| C     | ≥ 70       |
| D     | ≥ 60       |
| F     | < 60       |

---

## 🎯 Learning Objectives

ByteQuest demonstrates practical understanding of:

* JavaScript variables and data types
* Conditional statements
* Loops
* Functions and event handling
* User input and validation
* DOM manipulation
* Dynamic element creation
* Event delegation
* Hash-based navigation
* CSS variables and theme switching
* Responsive web design
* Basic mathematical logic and weighted grading

---
