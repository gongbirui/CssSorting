
let cssTypeObj = {
  charset: 0,
  host: 1,
  import: 2,
  "font-face": 3,
  namespace: 4,
  page: 5,
  document: 6,
  comment: 7,
  mixin: 8,
  extend: 9,
  rule: 244,
  include: 245,
  "custom-media": 246,
  media: 247,
  supports: 248,
  keyframes: 249,
  keyframe: 250,
};
let ruleObj = {
  composes: 10,
  "@import": 11,
  "@extend": 12,
  "@mixin": 13,
  "@at-root": 14,
  position: 15,
  top: 16,
  right: 17,
  bottom: 18,
  left: 19,
  "z-index": 20,
  display: 21,
  flex: 22,
  "flex-basis": 23,
  "flex-direction": 24,
  "flex-flow": 25,
  "flex-grow": 26,
  "flex-shrink": 27,
  "flex-wrap": 28,
  grid: 29,
  "grid-area": 30,
  "grid-auto-rows": 31,
  "grid-auto-columns": 32,
  "grid-auto-flow": 33,
  "grid-gap": 34,
  "grid-row": 35,
  "grid-row-start": 36,
  "grid-row-end": 37,
  "grid-row-gap": 38,
  "grid-column": 39,
  "grid-column-start": 40,
  "grid-column-end": 41,
  "grid-column-gap": 42,
  "grid-template": 43,
  "grid-template-areas": 44,
  "grid-template-rows": 45,
  "grid-template-columns": 46,
  gap: 47,
  "align-content": 48,
  "align-items": 49,
  "align-self": 50,
  "justify-content": 51,
  "justify-items": 52,
  "justify-self": 53,
  order: 54,
  float: 55,
  clear: 56,
  "box-sizing": 57,
  width: 58,
  "min-width": 59,
  "max-width": 60,
  height: 61,
  "min-height": 62,
  "max-height": 63,
  margin: 64,
  "margin-top": 65,
  "margin-right": 66,
  "margin-bottom": 67,
  "margin-left": 68,
  padding: 69,
  "padding-top": 70,
  "padding-right": 71,
  "padding-bottom": 72,
  "padding-left": 73,
  "object-fit": 74,
  "object-position": 75,
  overflow: 76,
  "overflow-x": 77,
  "overflow-y": 78,
  color: 79,
  font: 80,
  "font-weight": 81,
  "font-size": 82,
  "font-family": 83,
  "font-style": 84,
  "font-variant": 85,
  "font-size-adjust": 86,
  "font-stretch": 87,
  "font-effect": 88,
  "font-emphasize": 89,
  "font-emphasize-position": 90,
  "font-emphasize-style": 91,
  "font-smooth": 92,
  "line-height": 93,
  direction: 94,
  "letter-spacing": 95,
  "white-space": 96,
  "text-align": 97,
  "text-align-last": 98,
  "text-transform": 99,
  "text-decoration": 100,
  "text-emphasis": 101,
  "text-emphasis-color": 102,
  "text-emphasis-style": 103,
  "text-emphasis-position": 104,
  "text-indent": 105,
  "text-justify": 106,
  "text-outline": 107,
  "text-wrap": 108,
  "text-overflow": 109,
  "text-overflow-ellipsis": 110,
  "text-overflow-mode": 111,
  "text-orientation": 112,
  "text-shadow": 113,
  "vertical-align": 114,
  "word-wrap": 115,
  "word-break": 116,
  "word-spacing": 117,
  "overflow-wrap": 118,
  "tab-size": 119,
  hyphens: 120,
  "unicode-bidi": 121,
  columns: 122,
  "column-count": 123,
  "column-fill": 124,
  "column-gap": 125,
  "column-rule": 126,
  "column-rule-color": 127,
  "column-rule-style": 128,
  "column-rule-width": 129,
  "column-span": 130,
  "column-width": 131,
  "page-break-after": 132,
  "page-break-before": 133,
  "page-break-inside": 134,
  src: 135,
  "list-style": 136,
  "list-style-position": 137,
  "list-style-type": 138,
  "list-style-image": 139,
  "table-layout": 140,
  "empty-cells": 141,
  "caption-side": 142,
  background: 143,
  "background-color": 144,
  "background-image": 145,
  "background-repeat": 146,
  "background-position": 147,
  "background-position-x": 148,
  "background-position-y": 149,
  "background-size": 150,
  "background-clip": 151,
  "background-origin": 152,
  "background-attachment": 153,
  "background-blend-mode": 154,
  border: 155,
  "border-color": 156,
  "border-style": 157,
  "border-width": 158,
  "border-top": 159,
  "border-top-color": 160,
  "border-top-width": 161,
  "border-top-style": 162,
  "border-right": 163,
  "border-right-color": 164,
  "border-right-width": 165,
  "border-right-style": 166,
  "border-bottom": 167,
  "border-bottom-color": 168,
  "border-bottom-width": 169,
  "border-bottom-style": 170,
  "border-left": 171,
  "border-left-color": 172,
  "border-left-width": 173,
  "border-left-style": 174,
  "border-radius": 175,
  "border-top-left-radius": 176,
  "border-top-right-radius": 177,
  "border-bottom-right-radius": 178,
  "border-bottom-left-radius": 179,
  "border-image": 180,
  "border-image-source": 181,
  "border-image-slice": 182,
  "border-image-width": 183,
  "border-image-outset": 184,
  "border-image-repeat": 185,
  "border-collapse": 186,
  "border-spacing": 187,
  outline: 188,
  "outline-width": 189,
  "outline-style": 190,
  "outline-color": 191,
  "outline-offset": 192,
  "box-shadow": 193,
  "box-decoration-break": 194,
  transform: 195,
  "transform-origin": 196,
  "transform-style": 197,
  "backface-visibility": 198,
  perspective: 199,
  "perspective-origin": 200,
  visibility: 201,
  cursor: 202,
  opacity: 203,
  filter: 204,
  isolation: 205,
  "backdrop-filter": 206,
  "mix-blend-mode": 207,
  transition: 208,
  "transition-delay": 209,
  "transition-timing-function": 210,
  "transition-duration": 211,
  "transition-property": 212,
  animation: 213,
  "animation-name": 214,
  "animation-duration": 215,
  "animation-play-state": 216,
  "animation-timing-function": 217,
  "animation-delay": 218,
  "animation-iteration-count": 219,
  "animation-direction": 220,
  "animation-fill-mode": 221,
  appearance: 222,
  content: 223,
  clip: 224,
  "clip-path": 225,
  "counter-reset": 226,
  "counter-increment": 227,
  resize: 228,
  "user-select": 229,
  "nav-index": 230,
  "nav-up": 231,
  "nav-right": 232,
  "nav-down": 233,
  "nav-left": 234,
  "pointer-events": 235,
  quotes: 236,
  "touch-action": 237,
  "will-change": 238,
  zoom: 239,
  fill: 240,
  "fill-rule": 241,
  "clip-rule": 242,
  stroke: 243,
};
let ast = {
  type: "stylesheet",
  stylesheet: {
    rules: [
      {
        type: "rule",
        selectors: [".a"],
        declarations: [
          {
            type: "declaration",
            prototype: "position",
            value: "absolute",
            position: {
              start: {
                line: 11,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "declaration",
            prototype: "left",
            value: "0",
            position: {
              start: {
                line: 12,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "declaration",
            prototype: "display",
            value: "block",
            position: {
              start: {
                line: 13,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "declaration",
            prototype: "align-self",
            value: "center",
            position: {
              start: {
                line: 14,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "declaration",
            prototype: "color",
            value: "#fff",
            position: {
              start: {
                line: 15,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "rule",
            selectors: ["&.a"],
            declarations: [
              {
                type: "include",
                include: "link-colors(blue, red, green)",
                position: {
                  start: {
                    line: 17,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 16,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "rule",
            selectors: [".b"],
            declarations: [
              {
                type: "declaration",
                prototype: "border-color",
                value: "transparent",
                position: {
                  start: {
                    line: 20,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "declaration",
                prototype: "font-size",
                value: "12px",
                position: {
                  start: {
                    line: 21,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "declaration",
                prototype: "line-height",
                value: "22px",
                position: {
                  start: {
                    line: 22,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "declaration",
                prototype: "height",
                value: "22px",
                position: {
                  start: {
                    line: 23,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "declaration",
                prototype: "min-width",
                value: "22px",
                position: {
                  start: {
                    line: 24,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 19,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "declaration",
            prototype: "font-family",
            value: "element-icons !important",
            position: {
              start: {
                line: 26,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "keyframes",
            name: "test",
            vendor: undefined,
            keyframes: [
              {
                type: "keyframe",
                values: ["from"],
                declarations: [
                  {
                    type: "declaration",
                    prototype: "opacity",
                    value: "1",
                    position: {
                      start: {
                        line: 29,
                        column: 7,
                      },
                      end: {},
                      content: "",
                    },
                  },
                ],
                position: {
                  start: {
                    line: 28,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "keyframe",
                values: ["to"],
                declarations: [
                  {
                    type: "declaration",
                    prototype: "opacity",
                    value: ".9",
                    position: {
                      start: {
                        line: 32,
                        column: 7,
                      },
                      end: {},
                      content: "",
                    },
                  },
                ],
                position: {
                  start: {
                    line: 31,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 27,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "media",
            media: "screen",
            rules: [
              {
                type: "declaration",
                prototype: "display",
                value: "block",
                position: {
                  start: {
                    line: 36,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
              {
                type: "rule",
                selectors: [".a"],
                declarations: [
                  {
                    type: "declaration",
                    prototype: "color",
                    value: "red",
                    position: {
                      start: {
                        line: 38,
                        column: 7,
                      },
                      end: {},
                      content: "",
                    },
                  },
                ],
                position: {
                  start: {
                    line: 37,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 35,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
        ],
        position: {
          start: {
            line: 10,
            column: 1,
          },
          end: {},
          content: "",
        },
      },
      {
        type: "mixin",
        mixin: "link-colors($normal, $hover, $visited)",
        rules: [
          {
            type: "declaration",
            prototype: "color",
            value: "$normal",
            position: {
              start: {
                line: 2,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "rule",
            selectors: ["&:hover"],
            declarations: [
              {
                type: "declaration",
                prototype: "color",
                value: "$hover",
                position: {
                  start: {
                    line: 4,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 3,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
          {
            type: "rule",
            selectors: ["&:visited"],
            declarations: [
              {
                type: "declaration",
                prototype: "color",
                value: "$visited",
                position: {
                  start: {
                    line: 7,
                    column: 5,
                  },
                  end: {},
                  content: "",
                },
              },
            ],
            position: {
              start: {
                line: 6,
                column: 3,
              },
              end: {},
              content: "",
            },
          },
        ],
        position: {
          start: {
            line: 1,
            column: 1,
          },
          end: {},
          content: "",
        },
      },
    ],
  },
};
let reference = {
  rule: "declarations",
  media: "rules",
  mixin: "rules",
  document: "rules",
  keyframes: "keyframes",
  keyframe: "declarations",
  page: "declarations",
  "font-face": "declarations",
  host: "rules",
};
function Weights(obj) {
  if (obj.type == "declaration") {
    return ruleObj[obj.prototype];
  }
  return cssTypeObj[obj.type];
}

function sorting(arr) {
  return arr.sort((pre, next) => {
    let preV = Weights(pre);
    let nextV = Weights(next);
    if (preV < nextV) {
      return -1;
    }
    if (preV > nextV) {
      return 1;
    }
    return 0;
  });
}

function deepVisit(obj) {
  let deepKey = reference[obj.type];
  if (deepKey) {
    obj[deepKey] = sorting(obj[deepKey]);
    obj[deepKey] = obj[deepKey].map(deepVisit);
  }
  return obj;
}

let astRules = ast.stylesheet.rules;
astRules = sorting(astRules);
astRules = astRules.map(deepVisit);
console.log(astRules);