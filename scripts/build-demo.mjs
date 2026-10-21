// Rebuild the portable demo without network or package dependencies.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const source = new URL('../public/', import.meta.url);
const [template, css, js] = await Promise.all([
  readFile(new URL('teste.html', source), 'utf8'),
  readFile(new URL('demo.css', source), 'utf8'),
  readFile(new URL('demo.js', source), 'utf8'),
]);
new Script(js, { filename: 'demo.js' });
const html = template
  .replace('<link rel="stylesheet" href="demo.css">', () => `<style>\n${css.replace(/^@charset[^;]+;\s*/, '')}\n</style>`)
  .replace('<script src="demo.js"></script>', () => `<script>\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`);
if (html === template || /(?:src|href)="demo\.(?:js|css)"/.test(html)) {
  throw new Error('Não foi possível incorporar os arquivos da demonstração.');
}
const destination = new URL('../../TESTE-HRISTE-BOZE.html', import.meta.url);
await writeFile(destination, html, 'utf8');
console.log(`Demo offline atualizada: ${fileURLToPath(destination)}`);
