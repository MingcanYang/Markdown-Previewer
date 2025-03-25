# React Markdown Previewer

This project is a Markdown Previewer built with React. It converts Markdown syntax into HTML in real-time, providing a live preview as you type.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

The React Markdown Previewer is a simple and interactive web application that allows users to write Markdown text in an editor and view the rendered HTML in real-time. It was built as a project to practice React fundamentals and to work with third-party libraries like Marked.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Marked:** A JavaScript library for parsing Markdown.
- **CSS Flexbox:** For responsive layout and styling.

## Features

- **Live Preview:** The preview area updates automatically as you type in the Markdown editor.
- **Markdown Support:** Supports common Markdown elements such as headings, lists, code blocks, block quotes, links, images, and more.
- **Customizable Layout:** Side-by-side view with adjustable window sizes.
- **Window Controls:** Interactive window control buttons for minimizing, maximizing, and closing the editor/preview sections.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd markdown-previewer
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- **Editor:** Type Markdown in the editor on the left side. The content will be rendered in real-time on the right side.
- **Previewer:** See the rendered HTML version of your Markdown text.
- **Window Controls:** Use the window control buttons to minimize, maximize, or close the editor/preview windows.

## Customization

Feel free to modify the project according to your needs:
- Customize the styling in `App.css` or `index.css`.
- Enhance Markdown rendering by configuring the Marked library in `App.js`.
- Extend functionality by adding more features or custom styles.
