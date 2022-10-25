#!/usr/bin/node
function RockPaperScissor(USER) {
  let RPS = ['piedra', 'papel', 'tijera'];
  let random = Math.random() * RPS.length | 0;
  console.log("Tu Elección " + USER + "," + " La Máquina " + RPS[random])
  if (USER == RPS[random]) {
    console.log(">Empate<");
  } else if (USER == RPS[0] && RPS[random] == RPS[1]) {
    console.log(">Perdiste<");
  } else if (USER == RPS[1] && RPS[random] == RPS[2]) {
    console.log(">Perdiste<");
  } else if (USER == RPS[2] && RPS[random] == RPS[0]) {
    console.log(">Perdiste<");
  } else {
    console.log(">Ganaste<");
  }
}
RockPaperScissor("piedra")