//Gioco dei dadi
//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


//QUESTE SONO LE VARIABILI...

//GENERARE NUMERI RANDOM DA 1 A 6 PER ME E PER IL COMPUTER....
var mioDado = Math.floor(Math.random()*6)+1;
var dadoComputer = Math.floor(Math.random()*6)+1;

//QUESTA VARIABILE E' DEFINITA NELLE CONDIZIONI...
var risultato;

//QUESTE SONO LE CONDIZIONI


//SE VINCO...
if (mioDado > dadoComputer){
  risultato = 'Hai vinto!';
  console.log('Il mio punteggio:' + ' ' + mioDado);
  console.log('Il punteggio del Computer:' + ' ' + dadoComputer);
  console.log(risultato);
}
//SE PERDO...
else if (mioDado < dadoComputer){
  risultato = 'Hai perso!';
  console.log('Il mio punteggio:' + ' ' + mioDado);
  console.log('Il punteggio del Computer:' + ' ' + dadoComputer);
  console.log(risultato);
}
//ALTRIMENTI SE PAREGGIO...
else {
  risultato = 'Pareggio!';
  console.log('Il mio punteggio:' + ' ' + mioDado);
  console.log('Il punteggio del Computer:' + ' ' + dadoComputer);
  console.log(risultato);
}
