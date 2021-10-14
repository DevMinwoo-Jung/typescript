import { Close } from './close.js';
import { Add } from './add.js';
window.onload = () => {
    const closeClass = new Close();
    const addClass = new Add();
    closeClass.closeContents();
    closeClass.closeInputs();
    addClass.checkInputType();
    const addItem = document.querySelectorAll('.category');
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