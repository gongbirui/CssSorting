
/**
 * Identify, split, and sort CSS properties from within a string. Our
 * parameters are key/values split by a colon, the delimited by either
 * a semi-colon, line break, or closing bracket.
 *
 * @todo We shouldn't return 'any'. We should create an interface.
 * @todo Improve our initial clean-up lines.
 *
 * @return any
 */
 module.exports = function sortProperties(properties, defaultIndentation = 4) {
    properties = properties.replace(/^(\n)+/g, '');

    // Convert tabs to spaces
    properties = properties.replace(/\t/g, ' '.repeat(defaultIndentation));

    // Inherit indentation from the first line
    const indentation = (properties.match(/^\s+/g) || [''])[0].length;
    const tab = ' '.repeat(indentation);

    // Extract properties from CSS string and sort them
    const matches = [...properties.matchAll(/([$_a-zA-Z\-]+)\s{0,}:[^;\n}]+([^,][;\n}])/gm)].map(x => x[0].trim());
    matches.sort();

    // Erase all properties, retain our #key markers at end of line
    matches.forEach(match => properties = properties.replace(match, ''));

    // Erase double lines from
    properties = properties.replaceAll(/\n\s+$/gm, '');

    // Newly created CSS property block
    const block = tab + matches.join('\n' + tab).trim() + (properties ? '\n' + properties : '');

    // Return block and indentation information
    return { block, indentation, tab };
}
