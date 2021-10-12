"use strict";
console.log("시발");
function closeBtn() {
    var btn = document.querySelector('.closeBtn__box');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", closeBtnBox);
}
function closeBtnBox(ev) {
    ev.preventDefault();
    alert("하이");
}
closeBtn();
//# sourceMappingURL=main.js.map