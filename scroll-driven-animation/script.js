document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the animation
    function animateEntry(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    }

    // Setting up the observer
    const observer =new IntersectionObserver((entries) => {
        entries.forEach(animateEntry);
    }, {threshold: 0.5});  // Trigger when 50% of the element is in view

    // Observing elements
    document.querySelectorAll('.watch').forEach((el) => {
        observer.observe(el);
    });
});
