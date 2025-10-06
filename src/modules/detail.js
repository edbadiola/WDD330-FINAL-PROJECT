document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#detail-view')
  const stored = JSON.parse(localStorage.getItem('filmLog')) || []
  const selectedId = localStorage.getItem('selectedMovieId')

  if (!selectedId) {
    container.textContent = 'No movie selected.'
    return
  }

  const movie = stored.find(m => m.id == selectedId)

  if (!movie) {
    container.textContent = 'Movie not found in your log.'
    return
  }

  container.innerHTML = `
    <div class="detail-card">
      <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}" />
      <div class="detail-info">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <h3>Ratings</h3>
        <ul id="category-list"></ul>
        <p><strong>Total:</strong> ${movie.total}/10</p>
        <h3>Review</h3>
        <p>${movie.review || 'No review written.'}</p>
        <div class="actions">
          <button id="delete-btn"> Delete</button>
          <button id="back-btn"> Back to Log</button>
        </div>
      </div>
    </div>
  `

  // Show category ratings
  const categories = ['Feel', 'Storytelling', 'Performances & Direction', 'Sound Design', 'Visual Production']
  const list = document.querySelector('#category-list')
  movie.ratings.forEach((r, i) => {
    const li = document.createElement('li')
    li.textContent = `${categories[i]}: ${r.toFixed(1)}`
    list.append(li)
  })

  // Delete button
  document.querySelector('#delete-btn').addEventListener('click', () => {
    const confirmDelete = confirm(`Delete "${movie.title}" from your log?`)
    if (confirmDelete) {
      const updated = stored.filter(m => m.id != selectedId)
      localStorage.setItem('filmLog', JSON.stringify(updated))
      alert('Movie deleted successfully!')
      window.location.href = '/log.html'
    }
  })

  // Back button
  document.querySelector('#back-btn').addEventListener('click', () => {
    window.location.href = '/log.html'
  })
})
