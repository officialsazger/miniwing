/**
 * Token Loader Module
 * 
 * This module loads design tokens from tokens.json and merges them
 * with optional overrides from miniwing.config.js
 */

const fs = require('fs');
const path = require('path');

/**
 * Default tokens path
 */
const DEFAULT_TOKENS_PATH = path.join(__dirname, '../tokens.json');

/**
 * Default config path
 */
const DEFAULT_CONFIG_PATH = path.join(__dirname, '../miniwing.config.js');

/**
 * Loads tokens from a JSON file
 * 
 * @param {string} tokensPath - Path to tokens.json
 * @returns {object} - Parsed tokens object
 */
function loadTokens(tokensPath = DEFAULT_TOKENS_PATH) {
  try {
    const resolvedPath = path.resolve(tokensPath);
    
    if (!fs.existsSync(resolvedPath)) {
      console.warn(`Warning: tokens.json not found at ${resolvedPath}, using defaults`);
      return getDefaultTokens();
    }
    
    const tokensContent = fs.readFileSync(resolvedPath, 'utf8');
    const tokens = JSON.parse(tokensContent);
    
    console.log(`Loaded tokens from: ${resolvedPath}`);
    return tokens;
  } catch (error) {
    console.error(`Error loading tokens: ${error.message}`);
    return getDefaultTokens();
  }
}

/**
 * Loads configuration from miniwing.config.js
 * 
 * @param {string} configPath - Path to config file
 * @returns {object} - Configuration object
 */
function loadConfig(configPath = DEFAULT_CONFIG_PATH) {
  try {
    const resolvedPath = path.resolve(configPath);
    
    if (!fs.existsSync(resolvedPath)) {
      console.log(`No config file found at ${resolvedPath}, using defaults`);
      return {};
    }
    
    const config = require(resolvedPath);
    console.log(`Loaded config from: ${resolvedPath}`);
    return config;
  } catch (error) {
    console.warn(`Warning loading config: ${error.message}`);
    return {};
  }
}

/**
 * Merges tokens with config overrides
 * Config overrides take precedence over tokens.json values
 * 
 * @param {object} tokens - Base tokens from tokens.json
 * @param {object} config - Configuration with override values
 * @returns {object} - Merged tokens object
 */
function mergeTokensWithConfig(tokens, config) {
  const merged = JSON.parse(JSON.stringify(tokens)); // Deep clone
  
  // Merge colors
  if (config.colors && typeof config.colors === 'object') {
    merged.colors = {
      ...merged.colors,
      ...config.colors
    };
    console.log(`Merged ${Object.keys(config.colors).length} custom color(s)`);
  }
  
  // Merge spacing
  if (config.spacing && typeof config.spacing === 'object') {
    merged.spacing = {
      ...merged.spacing,
      ...config.spacing
    };
    console.log(`Merged ${Object.keys(config.spacing).length} custom spacing value(s)`);
  }
  
  // Merge typography
  if (config.typography && typeof config.typography === 'object') {
    merged.typography = merged.typography || {};
    for (const [key, value] of Object.entries(config.typography)) {
      if (typeof value === 'object' && value !== null) {
        merged.typography[key] = {
          ...merged.typography[key],
          ...value
        };
      } else {
        merged.typography[key] = value;
      }
    }
  }
  
  return merged;
}

/**
 * Gets default tokens if tokens.json is not available
 * 
 * @returns {object} - Default tokens
 */
function getDefaultTokens() {
  return {
    colors: {
      blue: '#3b82f6',
      red: '#ef4444',
      green: '#22c55e',
      yellow: '#eab308',
      purple: '#a855f7',
      pink: '#ec4899',
      indigo: '#6366f1',
      cyan: '#06b6d4',
      teal: '#14b8a6',
      orange: '#f97316',
      gray: '#6b7280',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent'
    },
    spacing: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem'
    }
  };
}

/**
 * Loads and merges tokens with configuration
 * This is the main entry point for token loading
 * 
 * @param {object} options - Options object
 * @param {string} options.tokensPath - Custom path to tokens.json
 * @param {string} options.configPath - Custom path to miniwing.config.js
 * @returns {object} - Merged tokens
 */
function loadAndMergeTokens(options = {}) {
  const tokensPath = options.tokensPath || DEFAULT_TOKENS_PATH;
  const configPath = options.configPath || DEFAULT_CONFIG_PATH;
  
  // Load base tokens
  const tokens = loadTokens(tokensPath);
  
  // Load config with overrides
  const config = loadConfig(configPath);
  
  // Merge tokens with config
  const mergedTokens = mergeTokensWithConfig(tokens, config);
  
  return mergedTokens;
}

module.exports = {
  loadTokens,
  loadConfig,
  mergeTokensWithConfig,
  loadAndMergeTokens,
  getDefaultTokens
};
