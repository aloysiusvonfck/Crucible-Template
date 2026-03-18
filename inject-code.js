#!/usr/bin/env node

/**
 * inject-code.js
 * Safely injects Kotlin code into a file, preserving package/imports structure.
 * 
 * Usage: node inject-code.js <code> <file_name>
 */

const fs = require('fs');
const path = require('path');

// Get arguments
const code = process.argv[2];
const fileName = process.argv[3] || 'GeneratedModuleContent.kt';

if (!code) {
  console.error('Error: No code provided');
  process.exit(1);
}

// Define the file path
const filePath = path.join(__dirname, 'app', 'src', 'main', 'java', 'com', 'nexuside', 'dynamic', fileName);

// Ensure directory exists
const dir = path.dirname(filePath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Define the template with package and imports
const template = `package com.nexuside.dynamic

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun GeneratedModuleContent() {
${code}
}
`;

// Write the file
try {
  fs.writeFileSync(filePath, template, 'utf8');
  console.log(`Successfully wrote ${fileName}`);
} catch (err) {
  console.error('Error writing file:', err.message);
  process.exit(1);
}
