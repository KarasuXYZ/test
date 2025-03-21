document.addEventListener('DOMContentLoaded', function() {
    const words = ["Kliknij mnie dwa razy", "A zobaczysz co pragniesz","MMMMMMmmmmm","Nudeskiii","Poka dupe"];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 150;
    const erasingSpeed = 70;
    const delayBetweenWords = 1400;

    const textElement = document.querySelector(".typed-text");
    const cursorElement = document.querySelector(".cursor");

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex++);
        } else {
            textElement.textContent = currentWord.substring(0, charIndex--);
        }
        cursorElement.classList.add("typing");

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                cursorElement.classList.remove("typing");
            }, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }

    typeEffect();
});