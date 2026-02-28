#!/usr/bin/env node

/**
 * Miniwing CLI Entry Point
 * 
 * This is the main entry point for the miniwing CLI.
 * It handles the 'build' command to scan HTML files and generate CSS utilities.
 */

const path = require('path');
const fs = require('fs');
const scanner = require('../src/scanner');
const generator = require('../src/generator');

/**
 * Main CLI function that orchestrates the build process
 */
function main() {
  console.log('Starting miniwing build...');
  
  // Define the HTML files to scan
  const htmlFiles = [
    path.join(__dirname, '../../apps/docs/index.html'),
    path.join(__dirname, '../../playground/index.html')
  ];
  
  // Define output path for compiled CSS
  const outputDir = path.join(__dirname, '../dist');
  const outputPath = path.join(outputDir, 'output.css');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Scan HTML files for class names
  const classNames = scanner.scanHTMLFiles(htmlFiles);
  
  console.log(`Found ${classNames.length} unique class names`);
  
  // Generate CSS from found class names
  const css = generator.generateCSS(classNames);
  
  // Write compiled CSS to output file
  fs.writeFileSync(outputPath, css, 'utf8');
  
  console.log(`CSS compiled to: ${outputPath}`);
  
  // Copy to apps/docs/style.css
  const docsStylePath = path.join(__dirname, '../../apps/docs/style.css');
  fs.writeFileSync(docsStylePath, css, 'utf8');
  
  console.log(`CSS copied to: ${docsStylePath}`);
  
  console.log('miniwing build complete');
}

// Run the main function
main();
