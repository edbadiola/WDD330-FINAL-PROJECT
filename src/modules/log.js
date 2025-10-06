import { storage } from './storage.js'
import { createEl } from '../utils/dom.js'

const container = document.querySelector('#film-log')
const films = storage.load()

if (films.length === 0) {
  container.textContent = 'No films logged yet.'
} else {
  films.forEach(film => {
    const card = createEl('div', 'film-entry')
    card.innerHTML = `<h3>${film.title}</h3><p>Total Score: ${film.total}</p>`
    container.append(card)
  })
}
