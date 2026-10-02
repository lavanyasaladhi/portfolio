import { isSafePortfolioUrl } from '../data/urls.js'

// Small SVG previews so no image files are needed.
function MazePreview() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="Maze preview with a player dot and an exit">
      <rect width="240" height="150" fill="#0b1226" />
      <g stroke="#4f8cff" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M20 20H220V130H20Z" />
        <path d="M20 50H80M110 20V80H170M140 50H190M50 50V110H110M80 80H80M140 110H200M170 80V110M200 50V80" />
      </g>
      <circle className="maze-player" cx="35" cy="35" r="7" fill="#22d3ee" />
      <rect x="203" y="113" width="14" height="14" rx="3" fill="#a78bfa" />
    </svg>
  )
}

function GhostPreview() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="Preview of a ghost floating beside lit candles">
      <rect width="240" height="150" fill="#0a0814" />
      <circle cx="120" cy="80" r="70" fill="#f59e0b" opacity="0.07" />
      <g className="ghost-float">
        <path d="M95 95V62a25 25 0 0 1 50 0v33l-8-7-8 7-9-7-9 7-8-7z" fill="#e6edf7" opacity="0.92" />
        <circle cx="111" cy="62" r="3.5" fill="#0a0814" />
        <circle cx="129" cy="62" r="3.5" fill="#0a0814" />
      </g>
      {[40, 190].map((x) => (
        <g key={x}>
          <rect x={x} y="100" width="12" height="32" rx="2" fill="#d6c7a1" />
          <ellipse className="flame" cx={x + 6} cy="92" rx="4.5" ry="9" fill="#fbbf24" />
        </g>
      ))}
      <rect x="0" y="132" width="240" height="18" fill="#14102a" />
    </svg>
  )
}

export default function ProjectPreview({ id, image }) {
  return (
    <div className={`project-preview project-preview-${id}`}>
      {image && isSafePortfolioUrl(image) ? (
        <img src={image} alt={`${id} project preview`} />
      ) : id === 'maze' || id === 'maze-escape' ? <MazePreview /> : <GhostPreview />}
    </div>
  )
}
