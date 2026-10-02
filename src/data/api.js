const apiBase = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api').replace(/\/$/, '')

export async function getPortfolioResource(path, signal) {
  const response = await fetch(`${apiBase}${path}`, { signal })
  if (!response.ok) throw new Error(`The portfolio API returned ${response.status}.`)
  return response.json()
}

export async function submitContactMessage(message) {
  const response = await fetch(`${apiBase}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })
  if (!response.ok) {
    const detail = await response.text()
    throw new Error(detail || `The contact API returned ${response.status}.`)
  }
  return response.json()
}
