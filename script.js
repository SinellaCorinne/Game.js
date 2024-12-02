//Variables et configuration de l'API
const apiKey = 'YOUR_API_KEY';
const apiURL = 'https://open.er-api.com/v6/latest/';
//Initialiser l'application
//Configure l'événement de clic pour le bouton de conversion et appelle fetchCurrencies pour récupérer les devises disponibles dès le chargement de la page.

document.addEventListener('DOMContentLoaded', () => {
    fetchCurrencies();
    document.getElementById('convert').addEventListener('click', convertCurrency);
});
//Récupérer les devises disponibles :

function fetchCurrencies() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            const fromCurrency = document.getElementById('fromCurrency');
            const toCurrency = document.getElementById('toCurrency');
            
            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency;
                option.textContent = currency;
                fromCurrency.appendChild(option.cloneNode(true));
                toCurrency.appendChild(option.cloneNode(true));
            });
        })
        .catch(error => console.error('Error fetching currencies:', error));
}
//Effectuer la conversion
function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || fromCurrency === '' || toCurrency === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    fetch(`${apiURL}${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = amount * rate;
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error converting currency:', error));
}
