window.addEventListener('load', () => {
    console.log('Script loaded');  // Přidá log pro kontrolu
    const sekce1 = document.querySelector('.sekce1');
    const sekce2 = document.querySelector('.sekce2');
    sekce1.classList.add('visible');
    sekce2.classList.add('visible');
});
