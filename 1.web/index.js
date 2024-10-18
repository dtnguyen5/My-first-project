window.addEventListener('load', () => {
    // Najdeme elementy, které chceme animovat
    const sekce1 = document.querySelector('.sekce1');
    const container = document.querySelector('.container');
    const mobile = document.querySelector('.mobile');

    // Přidáme třídu visible
    sekce1.classList.add('visible');
    container.classList.add('visible');
    mobile.classList.add('visible');

    const section = document.querySelector('.sekce2');
    section.style.visibility = 'visible';
    section.style.opacity = '1';

    
});