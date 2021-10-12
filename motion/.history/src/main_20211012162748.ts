import {CloseBtn} from './close';

const ex = new CloseBtn();
ex.closeBtn();

document.querySelector('.closeBtn__box')
?.addEventListener('click', () => {
  alert("안녕");
})