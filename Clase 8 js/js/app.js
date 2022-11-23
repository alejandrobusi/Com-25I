const options = ["Piedra", "Papel", "Tijera"];
let player = null;
let bot = null;

const botRandomNumber = () => {
  return (bot = Math.round(Math.random() * 2));
};

const userSelect = () => {
  player = parseInt(
    prompt("Ingresa un valor del 0 al 2. Piedra = 0, Papel = 1, Tijera = 2")
  );

  if (!isNaN(player)) {
    if (player >= 0 && player <= 2) {
      switch (true) {
        case player == bot:
          alert('EMPATE!🤗​')
          break;

        case (player == 0 && bot == 2):
          alert('Ganaste🥳​');
          break;

        case (player == 1 && bot == 0):
          alert('Ganaste🥳​');
          break;

        case (player == 2 && bot == 1):
          alert('Ganaste🥳​');
          break;

        default:
          alert('Perdiste😵');
          break;
      }
    } else {
      alert("Solo puedes ingresar un numero de 0 a 2");
    }
  } else {
    alert("Solo puedes ingresar numeros");
  }
  document.write(`<h1>El bot elije: ${options[bot]} </h1> <br> <h1>El usuario elije: ${options[player]}</h1> <br> <button onclick="playGame()">Jugar de nuevo</button>`);
};

const playGame = () =>  {
  botRandomNumber();
  userSelect();
};