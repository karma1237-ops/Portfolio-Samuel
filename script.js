document.addEventListener("DOMContentLoaded", function () {
    // Toggle le menu burger
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('toggle');
    });

    // Effets dynamiques sur les liens
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('hover-animate');
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('hover-animate');
        });
    });

    // Effet sur le logo
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseenter', () => {
        logo.classList.add('hover-animate');
    });
    logo.addEventListener('mouseleave', () => {
        logo.classList.remove('hover-animate');
    });

    // Effet scroll vers section projets (bouton)
    const button = document.querySelector('.btn');
    button?.addEventListener('click', function () {
        document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Hover sur lien CV
    const cvLink = document.querySelector('.cv-link');
    cvLink?.addEventListener("mouseover", () => cvLink.classList.add("hovered"));
    cvLink?.addEventListener("mouseout", () => cvLink.classList.remove("hovered"));

    // Animation outils-item (apparition au scroll)
    const outilsItems = document.querySelectorAll('.outils-item');

    function checkVisibility() {
        outilsItems.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Barre de progression horizontale
    const wrapper = document.querySelector('.skills-container-wrapper');
    const line = document.getElementById('scroll-line');

    wrapper?.addEventListener('scroll', () => {
        const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
        const scrolled = wrapper.scrollLeft;
        const percent = (scrolled / scrollWidth) * 100;
        line.style.width = `${percent}%`;
    });

    // Animation des éléments avec IntersectionObserver
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => observer.observe(el));
});