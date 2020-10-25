let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "Q", "J", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const divCartaJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

//esta funcion permite tomar una carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  console.log(deck);
  console.log(carta); // carta debe ser la baraja
  return carta;
};

//    pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
const valor = valorCarta(pedirCarta());
console.log({ valor });

// eventos

btnPedir.addEventListener('click', () => {

  const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    //          <img class="carta" src="assets/cartas/10C.png" alt="" />

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartaJugador.append(imgCarta);

    if(puntosJugador >21){
      console.warn('Perdiste');
      btnPedir.disabled=true;
    } else if(puntosJugador == 21 ){
      console.warn('ganaste')
      btnPedir.disabled=true;
    }


});