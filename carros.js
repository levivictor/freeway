//código do carro

let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [40, 96, 150, 210, 265, 316];
let velocidadeCarros = [2, 2.5, 3.2, -4, -3, -2.1];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function voltaPosicaoInicialCarro2(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela2(xCarros[i])){
      xCarros[i] = -20;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
function passouTodaATela2(xCarro){
  return xCarro > 600;
}