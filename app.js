// creating array of cards
const cardArray = [                       //  array
    {                                     //
        name: 'fries',                    //  object
        img: 'images/fries.png'           //
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // shuffle the array randomly

const gridDisplay = document.querySelector('#grid') // select the grid

const result = document.querySelector('#result') // select the scores

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() { // function to create the board
    for (let i=0;i<cardArray.length;i++) {
        const card = document.createElement('img')   // creating element of type image
        card.setAttribute('src', 'images/blank.png') // provide image
        card.setAttribute('data-id', i)              // provide id
        card.addEventListener('click', flipCard)     // adding event listener - click
        gridDisplay.appendChild(card)                // appending them one after the other
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img') // select all the cards

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
    }
    result.innerHTML = cardsWon.length

    // reset everything
    cardsChosen = []
    cardsChosenIds = []
    
    if (cardsWon.length == cardArray.length/2) {
        result.innerHTML = 'You Won!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id') 
    cardsChosen.push(cardArray[cardId].name) // store card name
    cardsChosenIds.push(cardId)              // store card id

    this.setAttribute('src', cardArray[cardId].img) // show the card img
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 400)
    }
}