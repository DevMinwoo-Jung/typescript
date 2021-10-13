"use strict";
window.onload = () => {
    const btnBox = document.querySelectorAll('.closeBtn__box');
    const btn = document.querySelectorAll('.closeBtn');
    const addItem = document.querySelectorAll('.category');
    for (const button of btnBox) {
        button.addEventListener('click', () => {
            var _a, _b, _c, _d, _e;
            console.log((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode);
            (_d = (_c = (_b = button.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild((_e = button.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode);
        });
    }
    // 상자 지우기
    for (const button of btn) {
        button.addEventListener('click', () => {
            var _a, _b, _c;
            const toggleAdd = (_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.className;
            (_c = document.querySelector(`.${toggleAdd}`)) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "display: none");
        });
    }
    // 상자 열기
    for (const item of addItem) {
        item.addEventListener('click', () => {
            var _a, _b, _c, _d;
            switch (item.innerHTML) {
                case 'Image':
                    (_a = document.querySelector('.imgInput')) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display: block");
                    break;
                case 'Video':
                    (_b = document.querySelector('.videoInput')) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "display: block");
                    break;
                case 'Note':
                    (_c = document.querySelector('.noteInput')) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "display: block");
                    break;
                case 'Task':
                    (_d = document.querySelector('.taskInput')) === null || _d === void 0 ? void 0 : _d.setAttribute("style", "display: block");
                    break;
            }
        });
    }
};
//# sourceMappingURL=main.js.map