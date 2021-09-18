//参考https://github.com/constverum/stylelint-config-rational-order

const special = require("./special");
const positioning = require("./positioning");
const boxModel = require("./boxModel");
const typography = require("./typography");
const visual = require("./visual");
const animation = require("./animation");
const misc = require("./misc");

let rules = [
  ...positioning,
  ...boxModel({ border: false }),
  ...typography,
  ...visual({ border: !false }),
  ...animation,
  ...misc,
];
const cssTypePrev = [
  "charset",
  "host",
  "import",
  "font-face",
  "namespace",
  "page",
  "document",
  "comment",
  "mixin",
  "extend",
];
const cssTypeNext = [
  "rule",
  "include",
  "custom-media",
  "media",
  "supports",
  "keyframes",
  "keyframe",
];

let cssTypePrevObj = {};
cssTypePrev.map((ele, index) => {
  cssTypePrevObj[ele] = index;
});

let ruleObj = {};
rules.map((ele, index) => {
  ruleObj[ele] = index + cssTypePrev.length;
});

let cssTypeNextObj = {};
cssTypeNext.map((ele, index) => {
  cssTypeNextObj[ele] = index + rules.length + cssTypePrev.length;
});
let cssTypeObj = Object.assign(cssTypePrevObj, cssTypeNextObj);
console.log("-----------cssTypeObj------start-----------------");
console.log(JSON.stringify(cssTypeObj));
console.log("-----------cssTypeObj--------end-----------------");
console.log("-------------------------------------------------");
console.log("-----------ruleObj---------start-----------------");
console.log(JSON.stringify(ruleObj));
console.log("-----------ruleObj-----------end-----------------");
