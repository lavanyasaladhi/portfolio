export function isSafePortfolioUrl(value = '') {
  return /^(https?:\/\/|\/(?!\/)|\.{1,2}\/)/i.test(value)
}
