/**
 * CSS Generator Module
 * 
 * This module generates CSS utilities from class names found in HTML files.
 * It uses design tokens loaded from tokens.json for all values.
 */

const tokenLoader = require('./token-loader');

/**
 * Generator state - tokens are loaded dynamically
 */
let tokens = null;

/**
 * Initializes the generator with tokens
 * This must be called before generateCSS
 * 
 * @param {object} options - Options for token loading
 */
function initialize(options = {}) {
  tokens = tokenLoader.loadAndMergeTokens(options);
  console.log('Generator initialized with dynamic tokens');
}

/**
 * Gets the current tokens
 * @returns {object} - Current tokens
 */
function getTokens() {
  if (!tokens) {
    initialize();
  }
  return tokens;
}

/**
 * Generates CSS from an array of class names
 * 
 * @param {string[]} classNames - Array of class names to generate CSS for
 * @param {object} options - Generator options
 * @returns {string} - Generated CSS string
 */
function generateCSS(classNames, options = {}) {
  // Initialize tokens if not already done
  if (!tokens) {
    initialize(options);
  }
  
  let css = '';
  
  // Add header comment
  css += '/* Miniwing Generated CSS */\n';
  css += '/* Generated from design tokens */\n\n';
  
  // Generate CSS for each class
  classNames.forEach(className => {
    const classCSS = generateClassCSS(className);
    if (classCSS) {
      css += classCSS + '\n';
    }
  });
  
  return css;
}

/**
 * Generates CSS for a single class name
 * Uses tokens from tokens.json dynamically
 * 
 * @param {string} className - The class name to generate CSS for
 * @returns {string} - CSS for the class, or empty string if not supported
 */
function generateClassCSS(className) {
  const currentTokens = getTokens();
  
  // Handle background colors (bg-*)
  if (className.startsWith('bg-')) {
    const colorName = className.substring(3);
    const colorValue = currentTokens.colors[colorName];
    if (colorValue) {
      return `.${className} { background-color: ${colorValue}; }`;
    }
  }
  
  // Handle text colors (text-*)
  if (className.startsWith('text-')) {
    const colorName = className.substring(5);
    const colorValue = currentTokens.colors[colorName];
    if (colorValue) {
      return `.${className} { color: ${colorValue}; }`;
    }
  }
  
  // Handle padding (p-*)
  if (className.startsWith('p-')) {
    const spacingValue = currentTokens.spacing[className.substring(2)];
    if (spacingValue) {
      return `.${className} { padding: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-top (pt-*)
  if (className.startsWith('pt-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-top: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-bottom (pb-*)
  if (className.startsWith('pb-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-left (pl-*)
  if (className.startsWith('pl-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-left: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-right (pr-*)
  if (className.startsWith('pr-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-right: ${spacingValue}; }`;
    }
  }
  
  // Handle margin (m-*)
  if (className.startsWith('m-')) {
    const spacingValue = currentTokens.spacing[className.substring(2)];
    if (spacingValue) {
      return `.${className} { margin: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-top (mt-*)
  if (className.startsWith('mt-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-top: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-bottom (mb-*)
  if (className.startsWith('mb-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-left (ml-*)
  if (className.startsWith('ml-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-left: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-right (mr-*)
  if (className.startsWith('mr-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-right: ${spacingValue}; }`;
    }
  }
  
  // Handle horizontal margin (mx-*)
  if (className.startsWith('mx-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-left: ${spacingValue}; margin-right: ${spacingValue}; }`;
    }
  }
  
  // Handle vertical margin (my-*)
  if (className.startsWith('my-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-top: ${spacingValue}; margin-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle horizontal padding (px-*)
  if (className.startsWith('px-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-left: ${spacingValue}; padding-right: ${spacingValue}; }`;
    }
  }
  
  // Handle vertical padding (py-*)
  if (className.startsWith('py-')) {
    const spacingValue = currentTokens.spacing[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-top: ${spacingValue}; padding-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle width (w-*)
  if (className.startsWith('w-')) {
    const spacingValue = currentTokens.spacing[className.substring(2)];
    if (spacingValue) {
      return `.${className} { width: ${spacingValue}; }`;
    }
    // Handle special width values
    if (className === 'w-full') return `.${className} { width: 100%; }`;
    if (className === 'w-auto') return `.${className} { width: auto; }`;
    if (className === 'w-screen') return `.${className} { width: 100vw; }`;
    if (className === 'w-min') return `.${className} { width: min-content; }`;
    if (className === 'w-max') return `.${className} { width: max-content; }`;
    if (className === 'w-fit') return `.${className} { width: fit-content; }`;
  }
  
  // Handle height (h-*)
  if (className.startsWith('h-')) {
    const spacingValue = currentTokens.spacing[className.substring(2)];
    if (spacingValue) {
      return `.${className} { height: ${spacingValue}; }`;
    }
    // Handle special height values
    if (className === 'h-full') return `.${className} { height: 100%; }`;
    if (className === 'h-auto') return `.${className} { height: auto; }`;
    if (className === 'h-screen') return `.${className} { height: 100vh; }`;
    if (className === 'h-min') return `.${className} { height: min-content; }`;
    if (className === 'h-max') return `.${className} { height: max-content; }`;
    if (className === 'h-fit') return `.${className} { height: fit-content; }`;
  }
  
  // Handle display utilities
  if (className === 'block') return `.${className} { display: block; }`;
  if (className === 'inline-block') return `.${className} { display: inline-block; }`;
  if (className === 'inline') return `.${className} { display: inline; }`;
  if (className === 'flex') return `.${className} { display: flex; }`;
  if (className === 'inline-flex') return `.${className} { display: inline-flex; }`;
  if (className === 'grid') return `.${className} { display: grid; }`;
  if (className === 'inline-grid') return `.${className} { display: inline-grid; }`;
  if (className === 'hidden') return `.${className} { display: none; }`;
  
  // Handle visibility
  if (className === 'visible') return `.${className} { visibility: visible; }`;
  if (className === 'invisible') return `.${className} { visibility: hidden; }`;
  
  // Handle flexbox utilities
  if (className === 'flex-row') return `.${className} { flex-direction: row; }`;
  if (className === 'flex-col') return `.${className} { flex-direction: column; }`;
  if (className === 'flex-wrap') return `.${className} { flex-wrap: wrap; }`;
  if (className === 'flex-nowrap') return `.${className} { flex-wrap: nowrap; }`;
  if (className === 'items-center') return `.${className} { align-items: center; }`;
  if (className === 'items-start') return `.${className} { align-items: flex-start; }`;
  if (className === 'items-end') return `.${className} { align-items: flex-end; }`;
  if (className === 'justify-center') return `.${className} { justify-content: center; }`;
  if (className === 'justify-start') return `.${className} { justify-content: flex-start; }`;
  if (className === 'justify-end') return `.${className} { justify-content: flex-end; }`;
  if (className === 'justify-between') return `.${className} { justify-content: space-between; }`;
  if (className === 'justify-around') return `.${className} { justify-content: space-around; }`;
  
  // Handle text utilities
  if (className === 'text-center') return `.${className} { text-align: center; }`;
  if (className === 'text-left') return `.${className} { text-align: left; }`;
  if (className === 'text-right') return `.${className} { text-align: right; }`;
  if (className === 'text-justify') return `.${className} { text-align: justify; }`;
  
  // Handle font sizes from tokens
  if (currentTokens.typography && currentTokens.typography.fontSize) {
    if (className.startsWith('text-')) {
      const sizeKey = className.substring(5);
      const fontSize = currentTokens.typography.fontSize[sizeKey];
      if (fontSize) {
        return `.${className} { font-size: ${fontSize}; }`;
      }
    }
  }
  
  // Handle font weights from tokens
  if (currentTokens.typography && currentTokens.typography.fontWeight) {
    if (className.startsWith('font-')) {
      const weightKey = className.substring(5);
      const fontWeight = currentTokens.typography.fontWeight[weightKey];
      if (fontWeight) {
        return `.${className} { font-weight: ${fontWeight}; }`;
      }
    }
  }
  
  // Handle border radius from tokens
  if (currentTokens.borderRadius) {
    if (className.startsWith('rounded-')) {
      const radiusKey = className.substring(8);
      const radius = currentTokens.borderRadius[radiusKey];
      if (radius) {
        return `.${className} { border-radius: ${radius}; }`;
      }
    }
  }
  
  // Handle position
  if (className === 'static') return `.${className} { position: static; }`;
  if (className === 'relative') return `.${className} { position: relative; }`;
  if (className === 'absolute') return `.${className} { position: absolute; }`;
  if (className === 'fixed') return `.${className} { position: fixed; }`;
  if (className === 'sticky') return `.${className} { position: sticky; }`;
  
  // Handle overflow
  if (className === 'overflow-auto') return `.${className} { overflow: auto; }`;
  if (className === 'overflow-hidden') return `.${className} { overflow: hidden; }`;
  if (className === 'overflow-visible') return `.${className} { overflow: visible; }`;
  if (className === 'overflow-scroll') return `.${className} { overflow: scroll; }`;
  
  // Handle cursor
  if (className === 'cursor-pointer') return `.${className} { cursor: pointer; }`;
  if (className === 'cursor-default') return `.${className} { cursor: default; }`;
  if (className === 'cursor-not-allowed') return `.${className} { cursor: not-allowed; }`;
  if (className === 'cursor-move') return `.${className} { cursor: move; }`;
  
  // Handle opacity from tokens
  if (currentTokens.opacity) {
    if (className.startsWith('opacity-')) {
      const opacityKey = className.substring(8);
      const opacity = currentTokens.opacity[opacityKey];
      if (opacity !== undefined) {
        return `.${className} { opacity: ${opacity}; }`;
      }
    }
  }
  
  // Handle z-index from tokens
  if (currentTokens.zIndex) {
    if (className.startsWith('z-')) {
      const zIndexKey = className.substring(2);
      const zIndex = currentTokens.zIndex[zIndexKey];
      if (zIndex !== undefined) {
        return `.${className} { z-index: ${zIndex}; }`;
      }
    }
  }
  
  // Handle top, right, bottom, left
  if (className.startsWith('top-')) {
    const value = className.substring(4);
    if (currentTokens.spacing[value]) return `.${className} { top: ${currentTokens.spacing[value]}; }`;
    if (value === 'auto') return `.${className} { top: auto; }`;
    if (value === '1/2') return `.${className} { top: 50%; }`;
    if (value === 'full') return `.${className} { top: 100%; }`;
  }
  if (className.startsWith('right-')) {
    const value = className.substring(6);
    if (currentTokens.spacing[value]) return `.${className} { right: ${currentTokens.spacing[value]}; }`;
    if (value === 'auto') return `.${className} { right: auto; }`;
    if (value === '0') return `.${className} { right: 0; }`;
    if (value === '1/2') return `.${className} { right: 50%; }`;
    if (value === 'full') return `.${className} { right: 100%; }`;
  }
  if (className.startsWith('bottom-')) {
    const value = className.substring(7);
    if (currentTokens.spacing[value]) return `.${className} { bottom: ${currentTokens.spacing[value]}; }`;
    if (value === 'auto') return `.${className} { bottom: auto; }`;
    if (value === '0') return `.${className} { bottom: 0; }`;
    if (value === '1/2') return `.${className} { bottom: 50%; }`;
    if (value === 'full') return `.${className} { bottom: 100%; }`;
  }
  if (className.startsWith('left-')) {
    const value = className.substring(5);
    if (currentTokens.spacing[value]) return `.${className} { left: ${currentTokens.spacing[value]}; }`;
    if (value === 'auto') return `.${className} { left: auto; }`;
    if (value === '0') return `.${className} { left: 0; }`;
    if (value === '1/2') return `.${className} { left: 50%; }`;
    if (value === 'full') return `.${className} { left: 100%; }`;
  }
  
  // Handle whitespace
  if (className === 'whitespace-normal') return `.${className} { white-space: normal; }`;
  if (className === 'whitespace-nowrap') return `.${className} { white-space: nowrap; }`;
  if (className === 'whitespace-pre') return `.${className} { white-space: pre; }`;
  if (className === 'whitespace-pre-line') return `.${className} { white-space: pre-line; }`;
  if (className === 'whitespace-pre-wrap') return `.${className} { white-space: pre-wrap; }`;
  
  // Handle pointer events
  if (className === 'pointer-events-none') return `.${className} { pointer-events: none; }`;
  if (className === 'pointer-events-auto') return `.${className} { pointer-events: auto; }`;
  
  // Handle select
  if (className === 'select-none') return `.${className} { user-select: none; }`;
  if (className === 'select-text') return `.${className} { user-select: text; }`;
  if (className === 'select-all') return `.${className} { user-select: all; }`;
  if (className === 'select-auto') return `.${className} { user-select: auto; }`;
  
  // Handle transitions
  if (className.startsWith('transition-')) return `.${className} { transition-property: ${className.substring(12)}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }`;
  if (className.startsWith('duration-')) return `.${className} { transition-duration: ${className.substring(9)}ms; }`;
  
  // Handle transforms
  if (className === 'transform') return `.${className} { transform: translateX(var(--tw-translate-x, 0)) translateY(var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1)); }`;
  if (className.startsWith('scale-')) return `.${className} { --tw-scale-x: ${className.substring(6)}; --tw-scale-y: ${className.substring(6)}; transform: scale(var(--tw-scale-x), var(--tw-scale-y)); }`;
  if (className.startsWith('rotate-')) return `.${className} { --tw-rotate: ${className.substring(7)}deg; transform: rotate(var(--tw-rotate)); }`;
  if (className.startsWith('translate-')) return `.${className} { --tw-translate-x: ${className.substring(10)}; transform: translateX(var(--tw-translate-x)); }`;
  
  // Handle border
  if (className === 'border') return `.${className} { border-width: 1px; }`;
  if (className.startsWith('border-')) {
    const borderColor = className.substring(7);
    if (currentTokens.colors[borderColor]) return `.${className} { border-color: ${currentTokens.colors[borderColor]}; }`;
  }
  
  // Handle shadow from tokens
  if (currentTokens.shadows) {
    if (className.startsWith('shadow-')) {
      const shadowKey = className.substring(7);
      const shadow = currentTokens.shadows[shadowKey];
      if (shadow) {
        return `.${className} { box-shadow: ${shadow}; }`;
      }
    }
  }
  
  // Handle line height from tokens
  if (currentTokens.typography && currentTokens.typography.lineHeight) {
    if (className.startsWith('leading-')) {
      const lhKey = className.substring(8);
      const lineHeight = currentTokens.typography.lineHeight[lhKey];
      if (lineHeight) {
        return `.${className} { line-height: ${lineHeight}; }`;
      }
    }
  }
  
  // Handle letter spacing from tokens
  if (currentTokens.typography && currentTokens.typography.letterSpacing) {
    if (className.startsWith('tracking-')) {
      const lsKey = className.substring(9);
      const letterSpacing = currentTokens.typography.letterSpacing[lsKey];
      if (letterSpacing) {
        return `.${className} { letter-spacing: ${letterSpacing}; }`;
      }
    }
  }
  
  return '';
}

module.exports = {
  generateCSS,
  generateClassCSS,
  initialize,
  getTokens
};
