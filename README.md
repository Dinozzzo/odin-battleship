# odin-battleship

---

A browser version of the classic Battleship game built with JavaScript, HTML and CSS as part of The Odin Project curriculum.

The project focuses on modular architecture, game logic separation and DOM rendering. Every part of the game — ships, boards, players and UI updates — is handled through dedicated modules and factory functions.

## Features

The game includes a complete turn-based system against a computer opponent on a dynamic 10×10 board. Attacks are tracked in real time with visual feedback for hits and missed shots, while ships can be destroyed individually until one side loses its entire fleet. A restart screen appears once the game ends, allowing the player to instantly launch a new match.

## Project Structure

The application is separated into different modules to keep logic organized and maintainable.

gameboard.js handles ship placement and attacks.
ship.js manages ship state and hit tracking.
player.js creates player objects.
dom.js is responsible for rendering the boards and updating the interface.
game.js controls the game flow and turn system.

## What I Practiced

This project was mainly focused on improving:

- Modular JavaScript
- DOM manipulation
- Event listeners and rerendering
- -Grid coordinate systems
- Game state management
- Separation between logic and UI

## Source

https://www.theodinproject.com/lessons/node-path-javascript-battleship
