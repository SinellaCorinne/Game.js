const quotes = [
    "Le seul véritable échec est celui d’abandonner.",
    "L’imagination est plus importante que la connaissance.",
    "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
    "Le succès est un mauvais professeur. Il pousse les gens intelligents à croire qu'ils sont infaillibles.",
    "Le bonheur n'est pas une destination, c'est une manière de voyager."
];
//Événement de clic pour générer une nouvelle citation
document.getElementById('new-quote').addEventListener('click', generateQuote);
//Générer une citation aléatoire
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
