export class Close {
    constructor() {
        this.btnBox = document.querySelectorAll('.closeBtn__box');
        this.btn = document.querySelectorAll('.closeBtn');
    }
    closeContents() {
        document.addEventListener('click', (event) => {
            var _a, _b;
            const btn = event.target;
            const content = ((_a = (btn).parentNode) === null || _a === void 0 ? void 0 : _a.parentNode).className;
            if (btn.className == 'closeBtn__box') {
                (_b = document.querySelector(`.${content}`)) === null || _b === void 0 ? void 0 : _b.remove();
            }
        });
    }
    closeInputs() {
        for (const button of this.btn) {
            button.addEventListener('click', () => {
                var _a, _b, _c;
                const toggleAdd = (_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.className;
                (_c = document.querySelector(`.${toggleAdd}`)) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "display: none");
            });
        }
    }
}
//# sourceMappingURL=close.js.map