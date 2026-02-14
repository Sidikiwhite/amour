// Variables pour compter les tentatives
let horrorNoAttempts = 0;
let valentineNoAttempts = 0;
let messageNoAttempts = 0;
let finalNoAttempts = 0;

// Fonction pour esquiver le bouton NON
function dodgeNo(event, page) {
    const btn = event.currentTarget;
    
    // Incrémenter le compteur selon la page
    if (page === 'horror') {
        horrorNoAttempts++;
        
        // Afficher le message "Clique encore pour sortir"
        const msg = document.getElementById('horrorClickAgain');
        msg.classList.add('show');
        setTimeout(() => msg.classList.remove('show'), 2000);
    } else if (page === 'valentine') {
        valentineNoAttempts++;
    } else if (page === 'endmessage') {
        messageNoAttempts++;
    } else if (page === 'final') {
        finalNoAttempts++;
    }

    // Déplacer le bouton aléatoirement sur l'écran
    const maxX = window.innerWidth - btn.offsetWidth - 100;
    const maxY = window.innerHeight - btn.offsetHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// Accepter l'intro horror et rediriger vers page valentine
function acceptHorror() {
    window.location.href = 'valentine.html';
}

// Accepter la Saint-Valentin et rediriger vers la galerie
function acceptValentine() {
    const yayMsg = document.getElementById('yayMessage');
    yayMsg.classList.add('show');
    
    // Attendre 2 secondes puis rediriger
    setTimeout(() => {
        window.location.href = 'numerique.html';
    }, 2000);
}

// Scroll vers la page message
function scrollToMessage() {
    window.location.href = 'endmessage.html';
}

// Afficher le poème
function showPoem() {
    const poem = document.getElementById('poemContainer');
    poem.classList.add('show');
    
    // Afficher la question finale après 2 secondes
    setTimeout(() => {
        const finalQuestion = document.getElementById('finalQuestionContainer');
        if (finalQuestion) {
            finalQuestion.classList.remove('hidden');
        }
    }, 2000);
}

// Célébration finale avec animation de coeurs
function celebrate() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
    
    // Créer 100 coeurs qui montent
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.setProperty('--x-offset', (Math.random() - 0.5) * 200 + 'px');
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            
            container.appendChild(heart);
            
            // Supprimer le coeur après l'animation
            setTimeout(() => heart.remove(), 4000);
        }, i * 50);
    }
}