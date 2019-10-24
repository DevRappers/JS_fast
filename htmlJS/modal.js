const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    // style바꾸기 보여지게끔
    modal.style.display = 'flex';
}

close.onclick = () => {
    modal.style.display = 'none';
}