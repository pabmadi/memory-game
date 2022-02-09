document.addEventListener('DOMContentLoaded', () => {
    
    const cards = [
        {
          name: 'fries',
          img: 'src/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'src/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'src/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'src/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'src/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'src/images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'src/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'src/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'src/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'src/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'src/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'src/images/hotdog.png'
        }
      ]

      //Mezclo las cartas
      cards.sort(() => 0.5 - Math.random())
      console.log(cards)
      const grid = document.querySelector('.grid')

      let cartasSeleccionadas = []
      let cartasSeleccionadasID = []
      let cartasGanadoras = []

      function crearTablero () {
          for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', FlipCard)
            grid.appendChild(card)  
        }
      }



function FlipCard () {
    let cardId = this.getAttribute('data-id')
    cartasSeleccionadas.push(cards[cardId])
    cartasSeleccionadasID.push(cardId)
    //console.log(cartasSeleccionadas)
    this.setAttribute('src',cards[cardId].img)
    if (cartasSeleccionadas.length === 2) {
        setTimeout(verifCoinciden, 1500)
    }
}

crearTablero()

function verifCoinciden() {
    const cartasSelec = document.querySelectorAll('img')
    const Carta1 = cartasSeleccionadasID[0]
    const Carta2 = cartasSeleccionadasID[1]
    
    if (Carta1 === Carta2){
        alert('Has seleccionado la misma carta')
        cartasSelec[Carta1].setAttribute('src', 'src/images/blank.png')
        cartasSelec[Carta2].setAttribute('src', 'src/images/blank.png')
    } else if (cartasSeleccionadas[0].name === cartasSeleccionadas[1].name) {
        alert('Coincidencia')
        cartasSelec[Carta1].removeEventListener('click', FlipCard)
        cartasSelec[Carta2].removeEventListener('click', FlipCard)
        cartasGanadoras.push(cartasSeleccionadas);
    } else {
        cartasSelec[Carta1].setAttribute('src', 'src/images/blank.png')
        cartasSelec[Carta2].setAttribute('src', 'src/images/blank.png')
    }
    cartasSeleccionadasID=[]
    cartasSeleccionadas=[]
    console.log(cartasGanadoras.length)

    if (cartasGanadoras.length === 6) {
        alert('Ganaste')
    }
}

})