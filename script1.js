let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let clear = document.getElementById('clear');
//Ajouter des écouteurs d'événements aux boutons :
buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (display.innerText === "0") {
            display.innerText = "";
        }

        if (e.target.innerText === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Erreur";
            }
            return;
        }

        display.innerText += e.target.innerText;
    });
});
//Réinitialiser l'affichage
clear.addEventListener('click', () => {
    display.innerText = "0";
});
