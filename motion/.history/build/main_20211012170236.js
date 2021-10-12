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
    console.log("시발");
    var ex = new close_1.CloseBtn();
    function closeBtn() {
        var _a;
        (_a = document.querySelector('.closeBtn__box')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            alert("안녕");
        });
    }
    closeBtn();
});
//# sourceMappingURL=main.js.map