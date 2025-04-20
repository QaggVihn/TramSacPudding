
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '1rem 5%';
    }
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.style.backgroundImage
            .replace('url("', '')
            .replace('")', '');
        const lightbox = document.createElement('div');
        lightbox.style = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10000;
        `;
        lightbox.innerHTML = `
            <img src="${imgSrc}" style="max-width: 90%; max-height: 90%; border-radius: 10px;">
        `;
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
    });
});