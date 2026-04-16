'use strict';

const form = document.querySelector('#tv-search');
const results = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  results.innerHTML = '';

  const query = document.querySelector('#query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  console.log(data); // for console task

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const show = item.show;

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;

    const a = document.createElement('a');
    a.href = show.url;
    a.target = '_blank';
    a.textContent = 'View details';

    const img = document.createElement('img');
    if (show.image) {
      img.src = show.image.medium;
    } else {
      img.src = 'https://placehold.co/210x295?text=Not%20Found';
    }
    img.alt = show.name;

    const summary = document.createElement('div');
    summary.innerHTML = show.summary;


    article.appendChild(h2);
    article.appendChild(a);
    article.appendChild(img);
    article.appendChild(summary);

    results.appendChild(article);
  }
});