/**
 * Miniwing Configuration File
 * 
 * This file contains the configuration for miniwing CSS utility generator.
 * You can customize the colors, spacing, and other utility settings here.
 */

module.exports = {
  // Output configuration
  output: {
    // Path where compiled CSS will be saved
    path: './dist/output.css',
    // Whether to minify the output
    minify: false,
    // Whether to include comments in output
    comments: true
  },
  
  // HTML files to scan for class names
  scan: [
    './apps/docs/index.html',
    './playground/index.html'
  ],
  
  // Custom colors to include (in addition to defaults)
  colors: {
    // Add custom colors here
    // Example: 'brand': '#ff5500'
  },
  
  // Custom spacing values (in addition to defaults)
  spacing: {
    // Add custom spacing here
    // Example: '128': '32rem'
  },
  
  // Enable/disable specific utility categories
  utilities: {
    backgroundColors: true,
    textColors: true,
    padding: true,
    margin: true,
    width: true,
    height: true,
    display: true,
    flexbox: true,
    grid: true,
    position: true,
    border: true,
    borderRadius: true,
    shadow: true,
    opacity: true,
    zIndex: true,
    fontSize: true,
    fontWeight: true,
    textAlign: true,
    lineHeight: true,
    letterSpacing: true,
    visibility: true,
    overflow: true,
    cursor: true,
    userSelect: true,
    transition: true,
    transform: true,
    whitespace: true,
    pointerEvents: true
  }
};
