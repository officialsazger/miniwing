# miniwing

A lightweight, token-driven CSS utility framework generator.

[![CI](https://github.com/sager93134-droid/miniwind/actions/workflows/ci.yml/badge.svg)](https://github.com/officialsazger/miniwind/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/miniwing.svg)]([https://www.npmjs.com/package/miniwing](https://www.npmjs.com/package/@sazger/miniwing))
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Why miniwing

- Scans HTML and extracts utility classes automatically
- Generates CSS from design tokens
- Supports token overrides via `miniwing.config.js`
- Ships as an npm CLI package
- Includes docs deployment via Netlify

## Quick Start

```bash
npm install
npm run build
```

Or run directly:

```bash
npx miniwing
```

Build output:
- Generated CSS: `packages/miniwing/dist/output.css`
- Docs CSS: `apps/docs/style.css`

## Configuration

Customize token behavior in:
- `packages/miniwing/miniwing.config.js`
- `packages/miniwing/tokens.json`

## Repository Layout

```text
miniwing/
  packages/miniwing/      # npm package (CLI + generator core)
  apps/docs/              # static docs site
  playground/             # local playground
  .github/workflows/      # CI + release automation
  netlify.toml            # Netlify deployment config
```

## Release and Publishing

- npm publish is automated via GitHub Actions on Release publish
- GitHub Packages publish is handled in a dedicated workflow
- GitHub Releases are used as the canonical release event

Required repository secrets:
- `NPM_TOKEN` for npm publish workflow

## Deployment

Netlify is configured through `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `apps/docs`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Security

See [SECURITY.md](./SECURITY.md).

## License

MIT. See [LICENSE](./LICENSE).
