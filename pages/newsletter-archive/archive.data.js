import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const monthNames = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
};

function parseDateFromName(filename) {
  // Try to match patterns like "November_2025" or "November-2025" at the end of the file
  const match = filename.match(/([a-zA-Z]+)[_-](\d{4})\.html$/i);
  if (match) {
    const monthStr = match[1].toLowerCase();
    const year = parseInt(match[2], 10);
    const month = monthNames[monthStr];
    if (month) {
      // Return a sortable integer (e.g., 202511 for November 2025)
      return year * 100 + month;
    }
  }
  // Fallback if parsing fails
  return 0;
}

function formatName(filename) {
  // Remove the extension and the prefix "ESA_EO_Newsletter_"
  let name = filename.replace(/\.html$/i, '');
  name = name.replace(/ESA_EO_Newsletter_/i, '');
  
  // Replace remaining underscores with spaces (e.g. "November_2025" -> "November 2025")
  name = name.replace(/_/g, ' ').trim();
  
  return name;
}

export default {
  watch: ['../public/newsletter-archive/files/*.html'],
  load() {
    const filesDir = path.resolve(__dirname, '../public/newsletter-archive/files')
    
    // Check if directory exists to prevent crash if no files yet
    if (!fs.existsSync(filesDir)) {
      return []
    }

    const files = fs.readdirSync(filesDir).filter(file => file.endsWith('.html'))

    const processedFiles = files.map(file => {
      const content = fs.readFileSync(path.join(filesDir, file), 'utf-8')
      return {
        file: file,
        name: formatName(file),
        content: content,
        url: `/newsletter-archive/files/${file}`,
        sortKey: parseDateFromName(file)
      }
    })

    // Sort descending (newest first) based on the calculated sortKey
    processedFiles.sort((a, b) => {
      if (a.sortKey !== b.sortKey) {
        return b.sortKey - a.sortKey;
      }
      // Fallback to reverse alphabetical if dates are the same or not found
      return b.file.localeCompare(a.file);
    });

    // Clean up internal metadata before returning to the frontend
    return processedFiles.map(pf => ({
      name: pf.name,
      content: pf.content,
      url: pf.url
    }))
  }
}
