const imageElement = document.getElementById('image');
const cardsContainer = document.getElementById('cards-container');
const xInput = document.getElementById('x-input');
const yInput = document.getElementById('y-input');
const splitButton = document.getElementById('split-button');

let cards = [];

function splitImage() {
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);

    cardsContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    cardsContainer.style.gridTemplateRows = `repeat(${y}, 1fr)`;

    cardsContainer.innerHTML = '';

    cards = [];

    for (let i = 0; i < x * y; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => disappearCard(card));
        cardsContainer.appendChild(card);
        cards.push(card);
    }
}

function disappearCard(card) {
    card.classList.add('disappear');
    setTimeout(() => {
        card.remove();
    }, 500);
}

splitButton.addEventListener('click', splitImage);