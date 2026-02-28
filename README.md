# Miniwing

A lightweight CSS utility generator that scans HTML files for class names and generates corresponding CSS utilities.

## Features

- **Automatic Class Detection**: Scans HTML files for class names
- **Utility CSS Generation**: Generates CSS utilities for:
  - Background colors (bg-blue, bg-red, etc.)
  - Text colors (text-white, text-black, etc.)
  - Spacing (p-1, p-2, m-1, m-2, etc.)
  - Typography (font sizes, weights, line height)
  - Flexbox utilities
  - Grid utilities
  - And more!

## Installation

```
bash
npm install
```

## Usage

Run the build command to scan HTML files and generate CSS:

```
bash
npm run build
```

Or use npx:

```
bash
npx miniwing
```

This will:
1. Scan HTML files in `apps/docs/` and `playground/`
2. Extract all class names
3. Generate corresponding CSS utilities
4. Output to `packages/miniwing/dist/output.css`
5. Copy to `apps/docs/style.css`

## CLI Output

When you run the build, you should see:
```
Starting miniwing build...
Found X unique class names
CSS compiled to: packages/miniwing/dist/output.css
CSS copied to: apps/docs/style.css
miniwing build complete
```

## Configuration

Edit `packages/miniwing/miniwing.config.js` to customize:
- Colors
- Spacing values
- Output path
- Which utilities to generate

## Netlify Deployment

This repo is configured for Netlify via `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `apps/docs`

## Project Structure

```
miniwing/
├── packages/
│   └── miniwing/           # Main package
│       ├── bin/
│       │   └── cli.js      # CLI entry point
│       ├── src/
│       │   ├── index.js    # Main module
│       │   ├── scanner.js  # HTML scanner
│       │   └── generator.js # CSS generator
│       └── dist/
│           └── output.css  # Generated CSS
├── apps/
│   └── docs/               # Documentation site
│       ├── index.html
│       └── style.css
└── playground/             # Playground for testing
```

## License

MIT
