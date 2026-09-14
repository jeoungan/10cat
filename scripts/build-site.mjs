import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'dist');
const runtimeFiles = [
  'index.html', 'app.js', 'game.js', 'motion.js', 'wardrobe.js',
  'wardrobe-seams.js', 'wearing-motion.js', 'style.css', 'polish.css',
  'motion.css', 'wardrobe.css',
];
const imageExtensions = new Set(['.png', '.svg', '.webp', '.jpg', '.jpeg', '.ico']);
let files = 0;
let bytes = 0;

async function copy(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(destination, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(source, target);
  files += 1;
  bytes += (await stat(source)).size;
}

async function copyImages(relativeDirectory) {
  for (const entry of await readdir(path.join(root, relativeDirectory), { withFileTypes: true })) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) await copyImages(relativePath);
    else if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) await copy(relativePath);
  }
}

for (const relativePath of runtimeFiles) await copy(relativePath);
await copyImages('assets');
console.log(JSON.stringify({ directory: 'dist', files, bytes }));
