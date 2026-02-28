/**
 * CSS Generator Module
 * 
 * This module generates CSS utilities from class names found in HTML files.
 * It supports background colors, spacing, and other common utility classes.
 */

const fs = require('fs');
const path = require('path');

/**
 * Mapping of color names to CSS color values
 */
const COLORS = {
  // Background colors
  'blue': '#3b82f6',
  'red': '#ef4444',
  'green': '#22c55e',
  'yellow': '#eab308',
  'purple': '#a855f7',
  'pink': '#ec4899',
  'indigo': '#6366f1',
  'cyan': '#06b6d4',
  'teal': '#14b8a6',
  'orange': '#f97316',
  'gray': '#6b7280',
  'slate': '#64748b',
  'zinc': '#71717a',
  'neutral': '#737373',
  'stone': '#78716c',
  'emerald': '#10b981',
  'lime': '#84cc16',
  'amber': '#f59e0b',
  'rose': '#f43f5e',
  'fuchsia': '#d946ef',
  'violet': '#8b5cf6',
  'sky': '#0ea5e9',
  
  // Text colors (prefixed with text-)
  'white': '#ffffff',
  'black': '#000000',
  
  // Additional colors
  'transparent': 'transparent',
  'current': 'currentColor',
  'inherit': 'inherit'
};

/**
 * Spacing scale (in rem)
 */
const SPACING = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem'
};

/**
 * Generates CSS from an array of class names
 * 
 * @param {string[]} classNames - Array of class names to generate CSS for
 * @returns {string} - Generated CSS string
 */
function generateCSS(classNames) {
  let css = '';
  
  // Add header comment
  css += '/* Miniwing Generated CSS */\n';
  css += '/* Auto-generated from HTML class names */\n\n';
  
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
 * 
 * @param {string} className - The class name to generate CSS for
 * @returns {string} - CSS for the class, or empty string if not supported
 */
function generateClassCSS(className) {
  // Handle background colors (bg-*)
  if (className.startsWith('bg-')) {
    const colorName = className.substring(3);
    const colorValue = COLORS[colorName];
    if (colorValue) {
      return `.${className} { background-color: ${colorValue}; }`;
    }
  }
  
  // Handle text colors (text-*)
  if (className.startsWith('text-')) {
    const colorName = className.substring(5);
    const colorValue = COLORS[colorName];
    if (colorValue) {
      return `.${className} { color: ${colorValue}; }`;
    }
  }
  
  // Handle padding (p-*)
  if (className.startsWith('p-')) {
    const spacingValue = SPACING[className.substring(2)];
    if (spacingValue) {
      return `.${className} { padding: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-top (pt-*)
  if (className.startsWith('pt-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-top: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-bottom (pb-*)
  if (className.startsWith('pb-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-left (pl-*)
  if (className.startsWith('pl-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-left: ${spacingValue}; }`;
    }
  }
  
  // Handle padding-right (pr-*)
  if (className.startsWith('pr-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { padding-right: ${spacingValue}; }`;
    }
  }
  
  // Handle margin (m-*)
  if (className.startsWith('m-')) {
    const spacingValue = SPACING[className.substring(2)];
    if (spacingValue) {
      return `.${className} { margin: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-top (mt-*)
  if (className.startsWith('mt-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-top: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-bottom (mb-*)
  if (className.startsWith('mb-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-bottom: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-left (ml-*)
  if (className.startsWith('ml-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-left: ${spacingValue}; }`;
    }
  }
  
  // Handle margin-right (mr-*)
  if (className.startsWith('mr-')) {
    const spacingValue = SPACING[className.substring(3)];
    if (spacingValue) {
      return `.${className} { margin-right: ${spacingValue}; }`;
    }
  }
  
  // Handle width (w-*)
  if (className.startsWith('w-')) {
    const spacingValue = SPACING[className.substring(2)];
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
    const spacingValue = SPACING[className.substring(2)];
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
  
  // Handle font sizes
  if (className === 'text-xs') return `.${className} { font-size: 0.75rem; }`;
  if (className === 'text-sm') return `.${className} { font-size: 0.875rem; }`;
  if (className === 'text-base') return `.${className} { font-size: 1rem; }`;
  if (className === 'text-lg') return `.${className} { font-size: 1.125rem; }`;
  if (className === 'text-xl') return `.${className} { font-size: 1.25rem; }`;
  if (className === 'text-2xl') return `.${className} { font-size: 1.5rem; }`;
  if (className === 'text-3xl') return `.${className} { font-size: 1.875rem; }`;
  if (className === 'text-4xl') return `.${className} { font-size: 2.25rem; }`;
  
  // Handle font weights
  if (className === 'font-thin') return `.${className} { font-weight: 100; }`;
  if (className === 'font-light') return `.${className} { font-weight: 300; }`;
  if (className === 'font-normal') return `.${className} { font-weight: 400; }`;
  if (className === 'font-medium') return `.${className} { font-weight: 500; }`;
  if (className === 'font-semibold') return `.${className} { font-weight: 600; }`;
  if (className === 'font-bold') return `.${className} { font-weight: 700; }`;
  
  // Handle border radius
  if (className === 'rounded') return `.${className} { border-radius: 0.25rem; }`;
  if (className === 'rounded-sm') return `.${className} { border-radius: 0.125rem; }`;
  if (className === 'rounded-md') return `.${className} { border-radius: 0.375rem; }`;
  if (className === 'rounded-lg') return `.${className} { border-radius: 0.5rem; }`;
  if (className === 'rounded-xl') return `.${className} { border-radius: 0.75rem; }`;
  if (className === 'rounded-2xl') return `.${className} { border-radius: 1rem; }`;
  if (className === 'rounded-full') return `.${className} { border-radius: 9999px; }`;
  if (className === 'rounded-none') return `.${className} { border-radius: 0; }`;
  
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
  
  // Handle opacity
  if (className.startsWith('opacity-')) {
    const opacityValue = className.substring(8);
    const opacityMap = {
      '0': '0',
      '5': '0.05',
      '10': '0.1',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '90': '0.9',
      '95': '0.95',
      '100': '1'
    };
    if (opacityMap[opacityValue]) {
      return `.${className} { opacity: ${opacityMap[opacityValue]}; }`;
    }
  }
  
  // Handle z-index
  if (className.startsWith('z-')) {
    const zIndexValue = className.substring(2);
    const zIndexMap = {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      'auto': 'auto',
      'fixed': '100',
      'max': '9999'
    };
    if (zIndexMap[zIndexValue]) {
      return `.${className} { z-index: ${zIndexMap[zIndexValue]}; }`;
    }
  }
  
  // Handle top, right, bottom, left
  if (className.startsWith('top-')) {
    const value = className.substring(4);
    if (SPACING[value]) return `.${className} { top: ${SPACING[value]}; }`;
    if (value === 'auto') return `.${className} { top: auto; }`;
    if (value === '1/2') return `.${className} { top: 50%; }`;
    if (value === 'full') return `.${className} { top: 100%; }`;
  }
  if (className.startsWith('right-')) {
    const value = className.substring(6);
    if (SPACING[value]) return `.${className} { right: ${SPACING[value]}; }`;
    if (value === 'auto') return `.${className} { right: auto; }`;
    if (value === '0') return `.${className} { right: 0; }`;
    if (value === '1/2') return `.${className} { right: 50%; }`;
    if (value === 'full') return `.${className} { right: 100%; }`;
  }
  if (className.startsWith('bottom-')) {
    const value = className.substring(7);
    if (SPACING[value]) return `.${className} { bottom: ${SPACING[value]}; }`;
    if (value === 'auto') return `.${className} { bottom: auto; }`;
    if (value === '0') return `.${className} { bottom: 0; }`;
    if (value === '1/2') return `.${className} { bottom: 50%; }`;
    if (value === 'full') return `.${className} { bottom: 100%; }`;
  }
  if (className.startsWith('left-')) {
    const value = className.substring(5);
    if (SPACING[value]) return `.${className} { left: ${SPACING[value]}; }`;
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
    if (COLORS[borderColor]) return `.${className} { border-color: ${COLORS[borderColor]}; }`;
  }
  
  // Handle shadow
  if (className === 'shadow-sm') return `.${className} { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }`;
  if (className === 'shadow') return `.${className} { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }`;
  if (className === 'shadow-md') return `.${className} { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }`;
  if (className === 'shadow-lg') return `.${className} { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }`;
  if (className === 'shadow-xl') return `.${className} { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }`;
  if (className === 'shadow-none') return `.${className} { box-shadow: none; }`;
  
  // Handle line height
  if (className === 'leading-none') return `.${className} { line-height: 1; }`;
  if (className === 'leading-tight') return `.${className} { line-height: 1.25; }`;
  if (className === 'leading-snug') return `.${className} { line-height: 1.375; }`;
  if (className === 'leading-normal') return `.${className} { line-height: 1.5; }`;
  if (className === 'leading-relaxed') return `.${className} { line-height: 1.625; }`;
  if (className === 'leading-loose') return `.${className} { line-height: 2; }`;
  
  // Handle letter spacing
  if (className === 'tracking-tighter') return `.${className} { letter-spacing: -0.05em; }`;
  if (className === 'tracking-tight') return `.${className} { letter-spacing: -0.025em; }`;
  if (className === 'tracking-normal') return `.${className} { letter-spacing: 0; }`;
  if (className === 'tracking-wide') return `.${className} { letter-spacing: 0.025em; }`;
  if (className === 'tracking-wider') return `.${className} { letter-spacing: 0.05em; }`;
  if (className === 'tracking-widest') return `.${className} { letter-spacing: 0.1em; }`;
  
  return '';
}

module.exports = {
  generateCSS,
  generateClassCSS,
  COLORS,
  SPACING
};
