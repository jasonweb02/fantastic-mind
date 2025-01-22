// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Live Forex Chart (Chart.js setup)
const ctx = document.getElementById('forexChart').getContext('2d');
const forexChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Profit Trend',
            data: [120, 190, 300, 500, 200, 300],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            }
        }
    }
});

// Form validation and submission (client-side)
const form = document.querySelector('form');
const successMessage = document.createElement('div');
successMessage.classList.add('success-message');
successMessage.style.display = 'none';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission success
    form.reset();
    successMessage.textContent = 'Your message has been sent successfully!';
    document.querySelector('.container').appendChild(successMessage);
    successMessage.style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

// Animations for sections on page load (fade-in effect)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transition = 'opacity 1s ease-out';
        }, index * 500);  // Delay for each section
    });
});

// Optional: Real-time data update for the chart (simulated with random da
