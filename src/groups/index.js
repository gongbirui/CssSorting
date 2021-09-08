//参考https://github.com/constverum/stylelint-config-rational-order

const special = require("./special");
const positioning = require("./positioning");
const boxModel = require("./boxModel");
const typography = require("./typography");
const visual = require("./visual");
const animation = require("./animation");
const misc = require("./misc");
let a = ({
  "border-in-box-model": borderInBoxModel = false,
  "empty-line-between-groups": emptyLineBetweenGroups = false,
} = {}) => {
  return [
    ["Special", special],
    ["Positioning", positioning],
    ["Box Model", boxModel({ border: borderInBoxModel })],
    ["Typography", typography],
    ["Visual", visual({ border: !borderInBoxModel })],
    ["Animation", animation],
    ["Misc", misc],
  ].map(([groupName, properties]) => {
    return {
      emptyLineBefore: emptyLineBetweenGroups ? "always" : "never",
      properties,
      groupName,
    };
  });
};
let rules = [
  ...special,
  ...positioning,
  ...boxModel({ border: false }),
  ...typography,
  ...visual({ border: !false }),
  ...animation,
  ...misc,
];
let ruleObj = {}
rules = rules.map((ele,index)=>{
  ruleObj[ele] = index;
})
console.log(JSON.stringify(ruleObj));
