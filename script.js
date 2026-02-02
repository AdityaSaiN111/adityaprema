const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('question-text');
const buttonGroup = document.getElementById('button-group');
const heartContainer = document.getElementById('heart-container');

// 1. No Button Runaway Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Yes Button Click Logic
yesBtn.addEventListener('click', () => {
    // Update Text
    questionText.innerHTML = "yehhh i know meri pumpkin you only click on yes meeeeriiiiiiii kalakandddd.....";
    questionText.style.color = "#d63384";
    
    // Hide buttons after clicking yes
    buttonGroup.style.display = "none";

    // Launch Hearts
    launchHearts();
});

// 3. Heart Explosion Function
function launchHearts() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            // Random horizontal position
            heart.style.left = Math.random() * 100 + 'vw';
            
            // Random size
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            // Random duration for variety
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            heartContainer.appendChild(heart);
            
            // Remove from DOM after animation finishes
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100); // Stagger the start times
    }
}