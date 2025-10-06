import { createEl } from '../utils/dom.js'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#film-log')
  let stored = JSON.parse(localStorage.getItem('filmLog')) || []

  if (stored.length === 0) {
    container.textContent = 'No films logged yet.'
    return
  }

  // Sort by total score (highest first)
  stored.sort((a, b) => b.total - a.total)

  stored.forEach(movie => {
    const card = createEl('div', 'film-entry')
    const star = createEl('span', 'favorite-star')
    star.innerHTML = movie.favorite ? '⭐' : '☆'

    // toggle favorite when clicked
    star.addEventListener('click', e => {
      e.stopPropagation() // prevent redirect
      movie.favorite = !movie.favorite
      star.innerHTML = movie.favorite ? '⭐' : '☆'
      localStorage.setItem('filmLog', JSON.stringify(stored))
    })

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster}" alt="${movie.title}" />
      <div>
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <p>Score: ${movie.total}/10</p>
      </div>
    `
    card.prepend(star)

    // clicking anywhere else opens details
    card.addEventListener('click', () => {
      localStorage.setItem('selectedMovieId', movie.id)
      window.location.href = '/detail.html'
    })

    container.append(card)
  })
})
