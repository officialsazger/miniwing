/**
 * Miniwing Main Module
 * 
 * This is the main entry point for the miniwing package.
 * It exports all the core modules for external use.
 */

const scanner = require('./scanner');
const generator = require('./generator');

module.exports = {
  scanner,
  generator,
  // Re-export commonly used functions
  scanHTMLFiles: scanner.scanHTMLFiles,
  generateCSS: generator.generateCSS
};
