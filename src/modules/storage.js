export const storage = {
  save(movie) {
    const list = JSON.parse(localStorage.getItem('filmLog')) || []
    list.push(movie)
    localStorage.setItem('filmLog', JSON.stringify(list))
  },
  load() {
    return JSON.parse(localStorage.getItem('filmLog')) || []
  },
}