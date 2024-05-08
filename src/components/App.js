// Aquí puedes realizar otras configuraciones si es necesario
// Por ejemplo, puedes adjuntar el componente al DOM
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
export const App = (data) => {
  const ul = document.createElement('ul');
    const duplicatedItems = [...data.items, ...data.items];

  duplicatedItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.classList.add('web__img');
    ul.appendChild(img);
  });

  return ul;
};

export default App;







