
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('animatedSlider');
    const progressBar = document.getElementById('slider-progress');
    const slideInterval = 6000; // Match this with data-bs-interval
    let startTime;
    let animationFrame;
    
    // Function to update progress bar
    function updateProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / slideInterval * 100, 100);
        
        progressBar.style.width = progress + '%';
        
        if (elapsed < slideInterval) {
            animationFrame = requestAnimationFrame(updateProgress);
        }
    }
    
    // Start progress animation
    animationFrame = requestAnimationFrame(updateProgress);
    
    // Reset progress on slide change
    carousel.addEventListener('slide.bs.carousel', function() {
        cancelAnimationFrame(animationFrame);
        progressBar.style.width = '0%';
        startTime = null;
        animationFrame = requestAnimationFrame(updateProgress);
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', function() {
        cancelAnimationFrame(animationFrame);
    });
    
    // Resume on mouse leave
    carousel.addEventListener('mouseleave', function() {
        startTime = null;
        animationFrame = requestAnimationFrame(updateProgress);
    });
});