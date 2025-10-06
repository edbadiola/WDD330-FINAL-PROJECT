export function initForm() {
  const ratingsBox = document.querySelector('#ratings')
  ratingsBox.innerHTML = '' // clear any old sliders if user selects another movie

  const totalBox = document.createElement('p')
  totalBox.id = 'total-score'

  // Define categories
  const categories = [
    'Feel',
    'Storytelling',
    'Performances & Direction',
    'Sound Design',
    'Visual Production'
  ]

  // Build sliders dynamically
  categories.forEach(category => {
    const label = document.createElement('label')
    label.textContent = category

    const input = document.createElement('input')
    input.type = 'range'
    input.min = '0'
    input.max = '2'
    input.value = '0'
    input.step = '0.1' // ✅ allows decimals like 1.1, 1.2, etc.
    input.classList.add('rating-slider')

    const valueDisplay = document.createElement('span')
    valueDisplay.textContent = '0.0'

    input.addEventListener('input', () => {
      valueDisplay.textContent = parseFloat(input.value).toFixed(1)
      updateTotal()
    })

    const container = document.createElement('div')
    container.classList.add('rating-item')
    container.append(label, input, valueDisplay)
    ratingsBox.append(container)
  })

  ratingsBox.append(totalBox)

  // Function to update total
  function updateTotal() {
    const sliders = document.querySelectorAll('.rating-slider')
    let total = 0
    sliders.forEach(slider => (total += parseFloat(slider.value)))
    totalBox.textContent = `Total Score: ${total.toFixed(1)}/10`
  }

  // Initialize display
  updateTotal()
}
