// FAQ toggle functionality
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
            answer.style.display = 'block';
        }
    });
});

// Testimonials carousel navigation (basic logic)
let currentIndex = 0;
const quotes = document.querySelectorAll('.quote, .bquote');

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.style.display = i === index ? 'block' : 'none';
    });
}

function scrollLeft() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex);
}

function scrollRight() {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
}

// Initialize first quote on load
window.onload = () => {
    showQuote(currentIndex);
};

// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add form validation or interactivity
document.querySelector('.sendmessage')?.addEventListener('click', () => {
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    if (!email || !message) {
        alert('Please enter both email and message.');
    } else {
        alert('Thank you for reaching out! We will get back to you soon.');
        // You could also clear the form
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
    }
});

