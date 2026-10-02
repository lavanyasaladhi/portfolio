// Renders a real link when `href` is filled in, otherwise a disabled placeholder.
import { isSafePortfolioUrl } from '../data/urls.js'

export default function LinkButton({ href, children, variant = 'ghost', placeholderHint = 'Link coming soon', className: extraClass = '', download = false }) {
  const className = `btn btn-${variant} ${extraClass}`.trim()
  const isPlaceholder = !href || href.startsWith('YOUR_') || !isSafePortfolioUrl(href)
  if (isPlaceholder) {
    return (
      <button type="button" className={`${className} is-placeholder`} disabled title={placeholderHint}>
        {children}
      </button>
    )
  }
  const external = /^https?:\/\//i.test(href)
  return (
    <a className={className} href={href} {...(download ? { download: true } : {})} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}
