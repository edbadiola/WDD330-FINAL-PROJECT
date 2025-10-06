import { createEl } from '../utils/dom.js'
import { initForm } from './form.js'


export function initSearch() {
  const input = document.querySelector('#search-input')
  const btn = document.querySelector('#search-btn')
  const results = document.querySelector('#results')

  btn.addEventListener('click', async () => {
    const query = input.value.trim()
    if (!query) return

    results.innerHTML = 'Loading...'
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ba178059e1a8bb86cd8f42f6d38c30f&query=${query}`)
    const data = await res.json()

    results.innerHTML = ''
    data.results.slice(0, 10).forEach(movie => {
      const card = createEl('div', 'movie-card')
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>${movie.release_date?.split('-')[0] || ''}</p>
      `

      card.addEventListener('click', () => {
      showForm(movie)
      })

      results.append(card)
    })
  })

  function showForm(movie) {
  const formSection = document.querySelector('#log-form-section')
  const infoBox = document.querySelector('#movie-info')

  formSection.classList.remove('hidden') // shows the form section
  infoBox.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
    <h2>${movie.title}</h2>
    <p>${movie.release_date?.split('-')[0] || 'Unknown Year'}</p>
  `
  const results = document.querySelector('#results')
    results.innerHTML = '' // clears the search results
    initForm() // show rating sliders


}

}
