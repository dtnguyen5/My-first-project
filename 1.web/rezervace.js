window.addEventListener('load', () => {
    // Najdeme elementy, které chceme animovat
    const sekce1 = document.querySelector('.sekce1');
    const sekce2 = document.querySelector('.sekce2');

    // Přidáme třídu 'visible' pro plynulou animaci
    sekce1.classList.add('visible');
    sekce2.classList.add('visible');
});
