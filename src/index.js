import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
let countryName = '';

inputEl.addEventListener('input', onInput);


function onInput(e) {
  countryName = e.currentTarget.value;
  console.log(countryName);
  return countryName;
}


fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages').then(result => result.json()).then(country => console.log(country));