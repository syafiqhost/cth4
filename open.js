// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textSpans = document.querySelectorAll('.text span');

    // Optional: Trigger additional effects after the animation
    setTimeout(() => {
        textSpans.forEach((span) => {
            span.style.transition = 'all 0.5s ease-in-out';
            span.style.letterSpacing = '0.1rem';
        });
    }, 2000);
});