const rules = {
  composes: 0,
  "@import": 1,
  "@extend": 2,
  "@mixin": 3,
  "@at-root": 4,
  position: 5,
  top: 6,
  right: 7,
  bottom: 8,
  left: 9,
  "z-index": 10,
  display: 11,
  flex: 12,
  "flex-basis": 13,
  "flex-direction": 14,
  "flex-flow": 15,
  "flex-grow": 16,
  "flex-shrink": 17,
  "flex-wrap": 18,
  grid: 19,
  "grid-area": 20,
  "grid-auto-rows": 21,
  "grid-auto-columns": 22,
  "grid-auto-flow": 23,
  "grid-gap": 24,
  "grid-row": 25,
  "grid-row-start": 26,
  "grid-row-end": 27,
  "grid-row-gap": 28,
  "grid-column": 29,
  "grid-column-start": 30,
  "grid-column-end": 31,
  "grid-column-gap": 32,
  "grid-template": 33,
  "grid-template-areas": 34,
  "grid-template-rows": 35,
  "grid-template-columns": 36,
  gap: 37,
  "align-content": 38,
  "align-items": 39,
  "align-self": 40,
  "justify-content": 41,
  "justify-items": 42,
  "justify-self": 43,
  order: 44,
  float: 45,
  clear: 46,
  "box-sizing": 47,
  width: 48,
  "min-width": 49,
  "max-width": 50,
  height: 51,
  "min-height": 52,
  "max-height": 53,
  margin: 54,
  "margin-top": 55,
  "margin-right": 56,
  "margin-bottom": 57,
  "margin-left": 58,
  padding: 59,
  "padding-top": 60,
  "padding-right": 61,
  "padding-bottom": 62,
  "padding-left": 63,
  "object-fit": 64,
  "object-position": 65,
  overflow: 66,
  "overflow-x": 67,
  "overflow-y": 68,
  color: 69,
  font: 70,
  "font-weight": 71,
  "font-size": 72,
  "font-family": 73,
  "font-style": 74,
  "font-variant": 75,
  "font-size-adjust": 76,
  "font-stretch": 77,
  "font-effect": 78,
  "font-emphasize": 79,
  "font-emphasize-position": 80,
  "font-emphasize-style": 81,
  "font-smooth": 82,
  "line-height": 83,
  direction: 84,
  "letter-spacing": 85,
  "white-space": 86,
  "text-align": 87,
  "text-align-last": 88,
  "text-transform": 89,
  "text-decoration": 90,
  "text-emphasis": 91,
  "text-emphasis-color": 92,
  "text-emphasis-style": 93,
  "text-emphasis-position": 94,
  "text-indent": 95,
  "text-justify": 96,
  "text-outline": 97,
  "text-wrap": 98,
  "text-overflow": 99,
  "text-overflow-ellipsis": 100,
  "text-overflow-mode": 101,
  "text-orientation": 102,
  "text-shadow": 103,
  "vertical-align": 104,
  "word-wrap": 105,
  "word-break": 106,
  "word-spacing": 107,
  "overflow-wrap": 108,
  "tab-size": 109,
  hyphens: 110,
  "unicode-bidi": 111,
  columns: 112,
  "column-count": 113,
  "column-fill": 114,
  "column-gap": 115,
  "column-rule": 116,
  "column-rule-color": 117,
  "column-rule-style": 118,
  "column-rule-width": 119,
  "column-span": 120,
  "column-width": 121,
  "page-break-after": 122,
  "page-break-before": 123,
  "page-break-inside": 124,
  src: 125,
  "list-style": 126,
  "list-style-position": 127,
  "list-style-type": 128,
  "list-style-image": 129,
  "table-layout": 130,
  "empty-cells": 131,
  "caption-side": 132,
  background: 133,
  "background-color": 134,
  "background-image": 135,
  "background-repeat": 136,
  "background-position": 137,
  "background-position-x": 138,
  "background-position-y": 139,
  "background-size": 140,
  "background-clip": 141,
  "background-origin": 142,
  "background-attachment": 143,
  "background-blend-mode": 144,
  border: 145,
  "border-color": 146,
  "border-style": 147,
  "border-width": 148,
  "border-top": 149,
  "border-top-color": 150,
  "border-top-width": 151,
  "border-top-style": 152,
  "border-right": 153,
  "border-right-color": 154,
  "border-right-width": 155,
  "border-right-style": 156,
  "border-bottom": 157,
  "border-bottom-color": 158,
  "border-bottom-width": 159,
  "border-bottom-style": 160,
  "border-left": 161,
  "border-left-color": 162,
  "border-left-width": 163,
  "border-left-style": 164,
  "border-radius": 165,
  "border-top-left-radius": 166,
  "border-top-right-radius": 167,
  "border-bottom-right-radius": 168,
  "border-bottom-left-radius": 169,
  "border-image": 170,
  "border-image-source": 171,
  "border-image-slice": 172,
  "border-image-width": 173,
  "border-image-outset": 174,
  "border-image-repeat": 175,
  "border-collapse": 176,
  "border-spacing": 177,
  outline: 178,
  "outline-width": 179,
  "outline-style": 180,
  "outline-color": 181,
  "outline-offset": 182,
  "box-shadow": 183,
  "box-decoration-break": 184,
  transform: 185,
  "transform-origin": 186,
  "transform-style": 187,
  "backface-visibility": 188,
  perspective: 189,
  "perspective-origin": 190,
  visibility: 191,
  cursor: 192,
  opacity: 193,
  filter: 194,
  isolation: 195,
  "backdrop-filter": 196,
  "mix-blend-mode": 197,
  transition: 198,
  "transition-delay": 199,
  "transition-timing-function": 200,
  "transition-duration": 201,
  "transition-property": 202,
  animation: 203,
  "animation-name": 204,
  "animation-duration": 205,
  "animation-play-state": 206,
  "animation-timing-function": 207,
  "animation-delay": 208,
  "animation-iteration-count": 209,
  "animation-direction": 210,
  "animation-fill-mode": 211,
  appearance: 212,
  content: 213,
  clip: 214,
  "clip-path": 215,
  "counter-reset": 216,
  "counter-increment": 217,
  resize: 218,
  "user-select": 219,
  "nav-index": 220,
  "nav-up": 221,
  "nav-right": 222,
  "nav-down": 223,
  "nav-left": 224,
  "pointer-events": 225,
  quotes: 226,
  "touch-action": 227,
  "will-change": 228,
  zoom: 229,
  fill: 230,
  "fill-rule": 231,
  "clip-rule": 232,
  stroke: 233,
};

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
  properties = properties.replace(/^(\n)+/g, "");

  // Convert tabs to spaces
  properties = properties.replace(/\t/g, " ".repeat(defaultIndentation));

  // Inherit indentation from the first line
  const indentation = (properties.match(/^\s+/g) || [""])[0].length;
  const tab = " ".repeat(indentation);

  // Extract properties from CSS string and sort them
  const matches = [
    ...properties.matchAll(/([$_a-zA-Z\-]+)\s{0,}:[^;}]+([;\n}])/gm),
  ].map((x) => x[0].trim());
  matches.sort((a, b) => {
    let aProp = (/([$_a-zA-Z\-]+)\s{0,}:[^;}]+([;\n}])/gm).exec(a)[1]
    let bProp = (/([$_a-zA-Z\-]+)\s{0,}:[^;}]+([;\n}])/gm).exec(b)[1]
    if (aProp > bProp) {
      // 按某种排序标准进行比较, a 小于 b
      return -1;
    }
    if (aProp < bProp) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  // Erase all properties, retain our #key markers at end of line
  matches.forEach((match) => (properties = properties.replace(match, "")));

  // Erase double lines from
  properties = properties.replaceAll(/\n\s+$/gm, "");

  // Newly created CSS property block
  const block =
    tab +
    matches.join("\n" + tab).trim() +
    (properties ? "\n" + properties : "");

  // Return block and indentation information
  return { block, indentation, tab };
};
