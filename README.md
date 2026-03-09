# Password Generator

A simple and responsive **Password Generator** web application built with **React** and **Vite**. It lets you instantly generate secure, random passwords and copy them to your clipboard with a single click.

## Features

- 🔐 Generates a random password on load and on every setting change
- 📏 Adjustable password length (9 – 40 characters) via a range slider
- 🔢 Optional inclusion of numbers (0–9)
- 🔣 Optional inclusion of special characters (`!@#$%^&*()_+`)
- 📋 One-click **Copy to Clipboard** button

## Tech Stack

- [React 18](https://react.dev/) – UI library
- [Vite 5](https://vitejs.dev/) – build tool & dev server
- [ESLint](https://eslint.org/) – code linting

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/chakrateja70/password-generator.git
cd password-generator

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Usage

1. The app automatically generates a password when it loads.
2. Use the **Length** slider to choose how long the password should be (9–40 characters).
3. Check **Numbers** to include digits in the password.
4. Check **Character** to include special characters (`!@#$%^&*()_+`) in the password.
5. Click the **Copy** button to copy the generated password to your clipboard.
