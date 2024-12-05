<script src="script.js"></script>
document.addEventListener('DOMContentLoaded', () => {
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');
    const mannequinSelection = document.getElementById('mannequin-selection');
    const closet = document.getElementById('closet');
    const ratingScreen = document.getElementById('rating-screen');

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
        // Code to calculate and display rating
    });

    restartBtn.addEventListener('click', () => {
        ratingScreen.style.display = 'none';
        mannequinSelection.style.display = 'block';
        // Reset selections and mannequin display
    });

    // Additional event listeners for clothing selections
});
