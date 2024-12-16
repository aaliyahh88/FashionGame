document.addEventListener('DOMContentLoaded', () => {
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');
    const mannequinSelection = document.getElementById('mannequin-selection');
    const closet = document.getElementById('closet');
    const ratingScreen = document.getElementById('rating-screen');
    const ratingDisplay = document.getElementById('rating-display');
    const ratingFeedback = document.getElementById('rating-feedback');

    maleBtn.addEventListener('click', () => {
        mannequinSelection.style.display = 'none';
        closet.style.display = 'block';
        // Additional code to display male mannequin
    });

    femaleBtn.addEventListener('click', () => {
        mannequinSelection.style.display = 'none';
        closet.style.display = 'block';
        // Additional code to display female mannequin
    });

    finishBtn.addEventListener('click', () => {
        closet.style.display = 'none';
        ratingScreen.style.display = 'block';
        calculateRating();
    });

    restartBtn.addEventListener('click', () => {
        ratingScreen.style.display = 'none';
        mannequinSelection.style.display = 'block';
        // Reset selections and mannequin display
    });

    function calculateRating() {
        // Placeholder logic for rating calculation
        const rating = Math.floor(Math.random() * 100) + 1;
        ratingDisplay.textContent = `Your rating: ${rating}%`;
        ratingFeedback.textContent = rating > 50 ? 'Great job! Try again to improve your score.' : 'Keep trying! You can do better.';
    }
});
