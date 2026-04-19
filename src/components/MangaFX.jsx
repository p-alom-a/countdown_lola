// Manga-style visual effects: star-burst badge, sparkles, speech bubble,
// and halftone / speed-line backgrounds.

const STROKE = '#0A0A0A'

export function StarBurst({ className = '', children, color = '#FFD23F' }) {
  // 12-point star sticker, chunky black outline
  const points = []
  const cx = 100
  const cy = 100
  const outer = 92
  const inner = 62
  const n = 14
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (i * Math.PI) / n - Math.PI / 2
    points.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`)
  }
  return (
    <div className={`starburst ${className}`}>
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <polygon
          points={points.join(' ')}
          fill={color}
          stroke={STROKE}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points={points.join(' ')}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          opacity="0.55"
          transform="scale(0.82) translate(22 22)"
        />
      </svg>
      <span>{children}</span>
    </div>
  )
}

export function Sparkle({ className = '', size = 28, color = '#FFF2C9' }) {
  return (
    <svg
      className={`sparkle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <path
        d="M20 2 L22 16 L36 18 L22 20 L20 36 L18 20 L4 18 L18 16 Z"
        fill={color}
        stroke={STROKE}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Bubble({ className = '', children }) {
  // Cloud-style speech bubble with wobbly outline
  return (
    <div className={`bubble ${className}`}>
      <svg viewBox="0 0 260 130" className="bubble-bg" aria-hidden="true">
        <path
          d="M26 14
             C 14 30, 14 52, 30 62
             C 18 78, 28 100, 52 96
             C 62 114, 90 118, 102 104
             C 118 118, 148 118, 160 102
             C 180 114, 206 106, 212 88
             C 240 92, 252 70, 240 52
             C 256 38, 246 14, 222 16
             C 214 4, 190 2, 178 16
             C 164 0, 130 2, 122 18
             C 106 0, 74 4, 68 22
             C 46 10, 26 14, 26 14 Z"
          fill="#FFF8E7"
          stroke={STROKE}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M90 108 L 72 128 L 102 110"
          fill="#FFF8E7"
          stroke={STROKE}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="bubble-text">{children}</span>
    </div>
  )
}

export function SpeedLines({ className = '' }) {
  return <div className={`speedlines ${className}`} aria-hidden="true" />
}

export function Halftone({ className = '' }) {
  return <div className={`halftone ${className}`} aria-hidden="true" />
}
