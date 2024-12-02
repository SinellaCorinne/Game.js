//Variables et tableau de cartes
const cards = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
//Fonction de mélange aléatoire des cartes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//Création du plateau de jeu:Crée les éléments de carte et les ajoute au plateau de jeu après les avoir mélangées.

function createBoard() {
    const board = document.getElementById('game-board');
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });
}
//Retourner une carte :Gère le retournement des cartes et vérifie si deux cartes retournées sont identiques.

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    this.textContent = this.dataset.value;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}
//Vérifier les paires : Compare les deux cartes retournées, désactive les cartes si elles correspondent, ou les retourne de nouveau après une seconde si elles ne correspondent pas.

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.textContent = '';
        secondCard.textContent = '';

        resetBoard();
    }, 1000);
}
//Réinitialiser l'état du plateau
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}
//Appelle createBoard pour initialiser le plateau de jeu au chargement de la page.
createBoard();
