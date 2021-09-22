const CSS = require("../../src/lib/css");
const css = new CSS();

const cssStr = `
.a{
    color:red;
}
.a{
    border:1px solid #eee;
    color:blue;
}
.a .b{
    font-size:10px;
}
@mixin mx{
    .a{
        color:red;
    }
}
`;

const ast = css.parse(cssStr);

const result = css.stringify(ast);
