# Password Generator

A simple and responsive **Password Generator** web application built with **React** and **Vite**. It lets you generate secure random passwords with customizable options and copy them to your clipboard with a single click.

## Features

- **Configurable length** – Slide the range input to choose a password length between 9 and 40 characters.
- **Include numbers** – Toggle to add digits (0–9) to the character pool.
- **Include special characters** – Toggle to add special characters (`!@#$%^&*()_+`) to the character pool.
- **Auto-regenerate** – A new password is generated automatically whenever any option changes.
- **Copy to clipboard** – Click the **Copy** button to copy the current password to your clipboard instantly.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [ESLint](https://eslint.org/) | Code linting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

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

```bash
# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

## How It Works

1. A base character set of uppercase and lowercase letters is always included.
2. Enabling **Numbers** appends `0123456789` to the character set.
3. Enabling **Special Characters** appends `!@#$%^&*()_+` to the character set.
4. A random password of the selected length is generated from the combined character set using `Math.random()`.
5. The password field is read-only; use the **Copy** button to copy it to your clipboard.

## Project Structure

```
password-generator/
├── public/          # Static assets
├── src/
│   ├── App.css      # Component styles
│   ├── App.jsx      # Main Password Generator component
│   └── main.jsx     # React entry point
├── index.html       # HTML template
├── package.json
└── vite.config.js
```
