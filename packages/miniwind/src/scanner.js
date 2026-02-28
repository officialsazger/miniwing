/**
 * HTML Scanner Module
 * 
 * This module scans HTML files for class names and extracts them.
 * It uses regex to find class attributes in HTML elements.
 */

const fs = require('fs');
const path = require('path');

/**
 * Regular expression to match class attributes in HTML
 * Matches: class="class1 class2" or class='class1 class2'
 */
const CLASS_ATTR_REGEX = /class=["']([^"']+)["']/g;

/**
 * Regular expression to match utility class patterns
 * Matches patterns like: bg-blue, bg-red, p-1, p-2, m-1, etc.
 */
const UTILITY_CLASS_REGEX = /^(bg-|text-|p-|m-|pt-|pb-|pl-|pr-|mt-|mb-|ml-|mr-|w-|h-|flex-|grid-|block-|inline-|hidden|visible|overflow-|cursor-|font-|leading-|tracking-|rounded-|shadow-|opacity-|z-|top-|left-|right-|bottom-|position-|border-|whitespace-|select-|pointer-|animate-|transition-|duration-|ease-|delay-|scale-|rotate-|translate-|skew-|transform-|origin-|backdrop-|ring-|outline-|caret-|fill-|stroke-|aspect-|grow-|shrink-|flex-|order-|self-|justify-|content-|items-|leading-|tracking-|whitespace-|break-|container-|columns-|gap-|space-|divide-|ring-|space-|accent-|scroll-|snap-|will-|content-|invalid-|peer-|placeholder-|[a-z]+-[0-9]+|[a-z]+-[a-z0-9-]+)/;

/**
 * Scans an array of HTML file paths and extracts all unique class names
 * 
 * @param {string[]} htmlFiles - Array of file paths to scan
 * @returns {string[]} - Array of unique class names found
 */
function scanHTMLFiles(htmlFiles) {
  const classNames = new Set();
  
  htmlFiles.forEach(filePath => {
    // Resolve relative paths
    const resolvedPath = path.resolve(filePath);
    
    // Check if file exists
    if (!fs.existsSync(resolvedPath)) {
      console.warn(`Warning: File not found: ${resolvedPath}`);
      return;
    }
    
    // Read the HTML file
    const content = fs.readFileSync(resolvedPath, 'utf8');
    
    // Extract class names from the file
    const extractedClasses = extractClassesFromHTML(content);
    
    // Add to set (automatically handles duplicates)
    extractedClasses.forEach(cls => classNames.add(cls));
  });
  
  return Array.from(classNames);
}

/**
 * Extracts class names from HTML content string
 * 
 * @param {string} htmlContent - The HTML content to parse
 * @returns {string[]} - Array of class names found
 */
function extractClassesFromHTML(htmlContent) {
  const classes = [];
  let match;
  
  // Reset regex lastIndex for global regex
  CLASS_ATTR_REGEX.lastIndex = 0;
  
  // Find all class attributes
  while ((match = CLASS_ATTR_REGEX.exec(htmlContent)) !== null) {
    const classValue = match[1];
    // Split by whitespace to get individual class names
    const individualClasses = classValue.split(/\s+/);
    
    individualClasses.forEach(cls => {
      const trimmedClass = cls.trim();
      if (trimmedClass) {
        classes.push(trimmedClass);
      }
    });
  }
  
  return classes;
}

/**
 * Filters class names to only include utility classes
 * This helps reduce the output CSS size by only generating utilities that exist
 * 
 * @param {string[]} classNames - Array of class names to filter
 * @returns {string[]} - Filtered array of utility class names
 */
function filterUtilityClasses(classNames) {
  return classNames.filter(cls => UTILITY_CLASS_REGEX.test(cls));
}

module.exports = {
  scanHTMLFiles,
  extractClassesFromHTML,
  filterUtilityClasses
};
