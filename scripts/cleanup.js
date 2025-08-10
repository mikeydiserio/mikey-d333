#!/usr/bin/env node

// cleanup.js
const fs = require('fs')
const path = require('path')

const TARGET_DIRS = ['coverage', 'node_modules', 'dist']

function deleteDirRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) return

  fs.rmSync(dirPath, { recursive: true, force: true })
  console.log(`🗑 Deleted: ${dirPath}`)
}

function walkAndDelete(startPath) {
  // Skip if this path is one of the targets
  const baseName = path.basename(startPath)
  if (TARGET_DIRS.includes(baseName)) {
    deleteDirRecursive(startPath)
    return
  }

  // If it's a directory, walk into it
  if (fs.statSync(startPath).isDirectory()) {
    const entries = fs.readdirSync(startPath)
    for (const entry of entries) {
      walkAndDelete(path.join(startPath, entry))
    }
  }
}

// Run script
const root = process.cwd()
walkAndDelete(root)
