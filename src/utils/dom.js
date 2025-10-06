export function createEl(tag, className) {
  const el = document.createElement(tag)
  if (className) el.className = className
  return el
}