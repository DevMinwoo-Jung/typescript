(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./close"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var close_1 = require("./close");
    var ex = new close_1.CloseBtn();
    ex.closeBtn();
    console.log("시발");
});
//# sourceMappingURL=main.js.map