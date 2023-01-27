import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v2/all?fields=name,capital,currencies').then(result => result.json()).then(console.log);

