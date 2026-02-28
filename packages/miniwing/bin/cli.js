#!/usr/bin/env node

/**
 * Miniwing CLI Entry Point
 * 
 * This is the main entry point for the miniwing CLI.
 * It handles the 'build' command to scan HTML files and generate CSS utilities
 * using design tokens from tokens.json.
 */

const path = require('path');
const fs = require('fs');
const scanner = require('../src/scanner');
const generator = require('../src/generator');
const tokenLoader = require('../src/token-loader');

/**
 * Main CLI function that orchestrates the build process
 */
function main() {
  console.log('Starting miniwing build...');
  console.log('='.repeat(40));
  
  // Get the root directory (2 levels up from bin/cli.js)
  const rootDir = path.resolve(__dirname, '../..');
  
  // Define paths
  const tokensPath = path.join(__dirname, '../tokens.json');
  const configPath = path.join(__dirname, '../miniwing.config.js');
  
  // Load tokens (this also loads and merges config)
  console.log('\n[1] Loading design tokens...');
  const tokens = tokenLoader.loadAndMergeTokens({
    tokensPath: tokensPath,
    configPath: configPath
  });
  
  // Initialize generator with tokens
  console.log('\n[2] Initializing generator with tokens...');
  generator.initialize({
    tokensPath: tokensPath,
    configPath: configPath
  });
  
  // Define the HTML files to scan
  const htmlFiles = [
    path.join(rootDir, 'apps/docs/index.html'),
    path.join(rootDir, 'playground/index.html')
  ];
  
  // Scan HTML files for class names
  console.log('\n[3] Scanning HTML files for class names...');
  const classNames = scanner.scanHTMLFiles(htmlFiles);
  console.log(`Found ${classNames.length} unique class names`);
  
  // Generate CSS from found class names
  console.log('\n[4] Generating CSS from tokens...');
  const css = generator.generateCSS(classNames);
  
  // Define output path
  const outputDir = path.join(rootDir, 'packages/miniwing/dist');
  const outputPath = path.join(outputDir, 'output.css');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write compiled CSS to output file
  fs.writeFileSync(outputPath, css, 'utf8');
  console.log(`CSS compiled to: ${outputPath}`);
  
  // Copy to apps/docs/style.css
  const docsStylePath = path.join(rootDir, 'apps/docs/style.css');
  fs.writeFileSync(docsStylePath, css, 'utf8');
  console.log(`CSS copied to: ${docsStylePath}`);
  
  console.log('\n' + '='.repeat(40));
  console.log('miniwing build complete!');
  
  // Print token summary
  console.log('\nToken Summary:');
  console.log(`  - Colors: ${Object.keys(tokens.colors).length}`);
  console.log(`  - Spacing: ${Object.keys(tokens.spacing).length}`);
  if (tokens.typography) {
    const fontSizes = tokens.typography.fontSize ? Object.keys(tokens.typography.fontSize).length : 0;
    const fontWeights = tokens.typography.fontWeight ? Object.keys(tokens.typography.fontWeight).length : 0;
    console.log(`  - Font Sizes: ${fontSizes}`);
    console.log(`  - Font Weights: ${fontWeights}`);
  }
}

// Run the main function
main();
