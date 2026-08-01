import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const htmlPath = path.join(distDir, 'index.html');

const html = await fs.readFile(htmlPath, 'utf8');

const scriptMatch = html.match(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/
);
const styleMatch = html.match(
  /<link rel="stylesheet" crossorigin href="([^"]+)">/
);

if (!scriptMatch || !styleMatch) {
  throw new Error('Could not find built asset references in dist/index.html');
}

const scriptPath = path.join(distDir, scriptMatch[1]);
const stylePath = path.join(distDir, styleMatch[1]);

const [scriptContent, styleContent] = await Promise.all([
  fs.readFile(scriptPath, 'utf8'),
  fs.readFile(stylePath, 'utf8'),
]);

const inlinedHtml = html
  .replace(
    /<script type="module" crossorigin src="[^"]+"><\/script>/,
    () => `<script type="module">${scriptContent}</script>`
  )
  .replace(
    /<link rel="stylesheet" crossorigin href="[^"]+">/,
    () => `<style>${styleContent}</style>`
  );

await fs.writeFile(htmlPath, inlinedHtml, 'utf8');
