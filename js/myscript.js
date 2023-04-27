
//crea variabili

let userName;
let userSurname;
let color;
let message;
let message2;

//informa sulle intenzioni

alert("Adesso scriverai alcuni TUOI DATI.");
alert("Dopo io GENERERÓ per te una PASSWORD INSICURA");
alert("CLICCA 'OK' PER PROCEDERE.");


//chiedi il nome

userName = prompt("Scrivi qua il tuo NOME.");
console.log(userName);

//chiedi il cognome

userSurname = prompt("Scrivi qua il tuo COGNOME.");
console.log(userSurname);

//chiedi colore preferito

color = prompt("Scrivi qua il tuo COLORE PREFERITO.");
console.log(color);

//informa sul risultato

alert(
    `
    Ti chiami ${userName} ${userSurname}.
    Il tuo colore preferito é ${color}.
    Prosegui per leggere la PASSWORD.
    `
);

//valorizza il messaggio

message =
    `
    La PASSWORD INSICURA é
    <br>
    <br>
    <u>
    ${userName}${userSurname}${color}21
    </u>
    `;



//scrivi password

document.getElementById("mio_id").innerHTML = message;
