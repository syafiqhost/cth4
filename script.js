// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// start slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function toggleTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="toggleTab('${tab}')"]`).classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.custom-slide');
    let dots = document.querySelectorAll('.custom-dot');

    // Show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            dots[i].classList.remove('active');
        });

        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function currentSlide(index) {
        slideIndex = index - 1;
        showSlide(slideIndex);
    }

    // Initialize slideshow
    function initSlideshow() {
        showSlide(slideIndex);
        setInterval(nextSlide, 3000);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => currentSlide(i + 1));
    });

    initSlideshow();
});
// search
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.house-card');

    let found = false;

    cards.forEach(card => {
        const title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        card.classList.remove('highlight');

        if (title.includes(searchValue)) {
            card.classList.add('highlight');
            found = true;
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
        }
    });

    if (!found) {
        alert('Tidak ada hasil yang ditemukan!');
    }
});
// up
// Pilih tombol "Back to Top"
const backToTopButton = document.getElementById('back-to-top');

// Tampilkan tombol saat user scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Tampilkan jika sudah scroll 300px ke bawah
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Tambahkan event listener untuk klik tombol
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Scroll ke paling atas
        behavior: 'smooth' // Efek scroll smooth
    });
});