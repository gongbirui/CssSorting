
const findNearestBlock = require("./find-nearest-block");
const replaceAll = require("./replace-all");
const sortProperties = require("./sort-properties");

/**
 * Process a selection of CSS
 *
 * @todo Improve our post cleanup and autoformatting
 * @return string
 */
 module.exports =  function sortCssBlock(css, openingBracket = '{', closingBracket = '}') {
    let blocks = [];
    let match;
    const identifiedIndentation = (css.match(/(^ +)/m) || ['    '])[0].length;

    // Extract all blocks into an array
    while (css.indexOf(openingBracket, 0) > -1) {
        const key = blocks.length;
        const block= findNearestBlock(css, openingBracket, closingBracket);
        blocks.push(block);

        // Save position marker that we can defer to later for replacement
        css = css.replace(`{${block}}`, `#!${key}`);
    }
    
    // Iterate through key markers
    do {
        if (match = css.match(/(?:#!)(\d+)/)) {
            const index = parseFloat(match[1]);
            const props = sortProperties(blocks[index]);
            const closingIndentation = ' '.repeat(Math.max(0, props.indentation - identifiedIndentation));
            css = css.replace('#!' + match[1], `{\n${props.block}\n${closingIndentation}}`);
        }
    } while (match);

    // Consecutive empty lines
    css = replaceAll(css, /(?:\s+\n){1,}(\s+\n)/gm, '$1');

    // Empty lines with a bracket
    css = replaceAll(css, /(?:\s+\n){1,}( +)?}/gm, '\n$1}');

    return css;
}
