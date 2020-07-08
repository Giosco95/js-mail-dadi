var email = ['pippo','pluto','paperino','topolino'];
var inserisci = prompt('inserisci mail');



for (var i = 0; i < email.length; i++){

  if (email[i] == inserisci){
    alert('email corretta');

  }
  else {
    alert('email errata')

  }
  
  break;
}
