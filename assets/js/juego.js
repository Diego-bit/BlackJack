let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "Q", "J", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del HTML

const btnPedir = document.querySelectos('#btnPedir');
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

  sdeck = _.shuffle(deck);
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

    puntosJugador = puntosComputadora + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;


});