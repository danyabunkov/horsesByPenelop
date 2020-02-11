

async function get(path, isJson = true) {
  const response = await fetch(path);
  return isJson ? response.json() : response.text();
}

(async () => {

  const articlesHbs = await get('/index.hbs', false);
  const horses = await get('/horses');
  const articlesTemplate = Handlebars.compile(articlesHbs);
  document.querySelector('#horsesOfPenelops').innerHTML += articlesTemplate({
    horses
  });

})();


document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const articlesHbs = await get('/new.hbs', false);
  const response = await fetch('/horses/new')
  const error = await response.json();
  const err = error.error
  const articlesTemplate = Handlebars.compile(articlesHbs);
  document.querySelector('#newForm').innerHTML = articlesTemplate({
    error: err
  });
})


document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const articlesHbs = await get('/horse.hbs', false);
  const response = await fetch('/horses/addNewHorse', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      'name': event.target.name.value,
      'age': event.target.age.value,
      'breed': event.target.breed.value,
    })

  })
  const horse = await response.json();
  const articlesTemplate = Handlebars.compile(articlesHbs);
  const a = articlesTemplate({
   horse
  })
  document.querySelector('#horsesOfPenelops').insertAdjacentHTML("afterbegin", a)


  const articlesHb = await get('/footNew.hbs', false);
  const articlesTemplat = Handlebars.compile(articlesHb);
  const b = articlesTemplat({
  })
  document.querySelector('#newForm').innerHTML = b;
})

document.addEventListener('click', async (event) => {
  if (event.target.className === 'big fancy-text light-link') {
    event.preventDefault();
    const href=event.target.getAttribute('href')
    console.log(href)
    const articlesHbs = await get('/show.hbs', false);
    const response = await fetch(href)
    const horse = await response.json();
    const articlesTemplate = Handlebars.compile(articlesHbs);
    event.target.parentNode.insertAdjacentHTML('beforeend', articlesTemplate({
      horse
    })
    )
  }
})
