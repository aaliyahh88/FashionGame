document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    const mannequinSelection = document.getElementById('mannequin-selection');
    const closet = document.getElementById('closet');
    const ratingScreen = document.getElementById('rating-screen');
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');
    const mannequinDisplay = document.getElementById('mannequin-display');
    const clothingOptions = document.getElementById('clothing-options');
    const ratingResult = document.getElementById('rating-result');

    let selectedMannequin = null;
    let selectedItems = [];

    playBtn.addEventListener('click', () => {
        playBtn.parentElement.classList.add('hidden');
        mannequinSelection.classList.remove('hidden');
    });

    maleBtn.addEventListener('click', () => {
        selectedMannequin = 'male';
        startDressing();
    });

    femaleBtn.addEventListener('click', () => {
        selectedMannequin = 'female';
        startDressing();
    });

    finishBtn.addEventListener('click', () => {
        calculateRating();
        closet.classList.add('hidden');
        ratingScreen.classList.remove('hidden');
    });

    restartBtn.addEventListener('click', () => {
        location.reload();
    });

    function startDressing() {
        mannequinSelection.classList.add('hidden');
        closet.classList.remove('hidden');
        displayMannequin();
        loadClothingItems();
    }

    function displayMannequin() {
        mannequinDisplay.innerHTML = `<img src="images/${selectedMannequin}-mannequin.png" alt="${selectedMannequin} mannequin">`;
    }

    function loadClothingItems() {
        const categories = ['skirts', 'hairstyles', 'shirts', 'jackets', 'shoes', 'purses'];
        categories.forEach(category => {
            for (let i = 1; i <= 3; i++) {
                const item = document.createElement('div');
                item.classList.add('clothing-item');
                item.innerHTML = `<img src="images/${category}${i}.png" alt="${category} ${i}" data-category="${category}">`;
                item.addEventListener('click', () => selectItem(item, category));
                clothingOptions.appendChild(item);
            }
        });
    }

    function selectItem(item, category) {
        // Deselect previous item in the same category
        selectedItems = selectedItems.filter(i => i
::contentReference[oaicite:0]{index=0}
 
