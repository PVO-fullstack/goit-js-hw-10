!function(){var n=document.querySelector("#search-box"),e="";n.addEventListener("input",(function(n){return e=n.currentTarget.value,console.log(e),e})),fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages").then((function(n){return n.json()})).then((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.29952ef6.js.map
