/**
 * Adds the pug-loader inside ng-packagr config, if not there yet.
 * @see https://github.com/danguilherme/ng-cli-pug-loader
 */
const fs = require('fs');
const path = require('path');
const commonCliConfig = 'node_modules/ng-packagr/lib/ts/cache-compiler-host.js';
const pugProcessor = `
const pug = require('pug');
const pugProcessor = (filePath, content) => {
  return pug.render(content, { doctype: 'html', filename: filePath });
};`;
const pugRules = `if (/(pug|jade)$/.test(path.extname(fileName))) {
                    cache.content = pugProcessor(fileName, cache.content);
                } else if (!/(html|htm|svg)$/.test(path.extname(fileName))) {`;
const matchText = 'if (!/(html|htm|svg)$/.test(path.extname(fileName))) {';

fs.readFile(commonCliConfig, (err, data) => {
  if (err) throw err;

  const configText = data.toString();

  // make sure we don't add the rule if it already exists
  if (configText.indexOf(pugRules) > -1) { return; }
  if (configText.indexOf(pugProcessor) > -1) { return; }

  // Insert the pug webpack rule
  const position = configText.indexOf(matchText);
  const output = [
    configText.slice(0, 13),
    pugProcessor,
    configText.slice(13, position),
    pugRules,
    configText.slice(position + matchText.length)
  ].join('');
  const file = fs.openSync(commonCliConfig, 'r+');
  fs.writeFile(file, output, error => {
    if (error)
      console.error("An error occurred while overwriting ng-packagr config");

    fs.close(file, () => {});
  });
});
