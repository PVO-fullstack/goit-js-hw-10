const e=document.querySelector("#search-box");let t="";e.addEventListener("input",(function(e){return t=e.currentTarget.value,console.log(t),t})),fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages").then((e=>e.json())).then((e=>console.log(e)));
//# sourceMappingURL=index.df3d850c.js.map
