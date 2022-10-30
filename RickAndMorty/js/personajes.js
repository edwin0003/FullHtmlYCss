const URL = "https://rickandmortyapi.com/api/character";

const getData = (apiURL) =>
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => {
      console.log(error);
    });

const showData = (data) => {
  console.log(data);
  let html = "";

  data.results.forEach((ep) => {
    //var show = showContent();
    html += `
        
        <article>
        <img src="${ep.image}" alt="">
            <h2>${ep.name}</h2>
            <p>${ep.episode}</p>
            <a href="./personaje.html"> Ver mas</a>
        </article>
        `;
  });

  document.getElementById("container-personajes").innerHTML = html;
};
getData(URL);