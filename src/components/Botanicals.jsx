// Manga / kawaii tropical stickers — thick black outlines, pop colors,
// chibi proportions. Each shape is designed to work as a "sticker" with
// offset drop shadow in CSS.

const STROKE = '#0A0A0A'
const SW = 3.5

export function Toucan({ className = '' }) {
  return (
    <svg viewBox="0 0 260 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="beak2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FFD23F" />
          <stop offset="0.5" stopColor="#FF8E2A" />
          <stop offset="1" stopColor="#FF3B4A" />
        </linearGradient>
      </defs>
      {/* chibi body — oversized head */}
      <path
        d="M50 160
           C 30 120, 40 60, 100 40
           C 160 30, 210 70, 215 120
           C 215 170, 170 200, 120 200
           C 85 202, 60 190, 50 160 Z"
        fill="#111"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* chest belly (cream) */}
      <path
        d="M95 130
           C 110 115, 165 115, 175 140
           C 178 170, 140 180, 105 170
           C 90 160, 90 140, 95 130 Z"
        fill="#FFF2C9"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* belly blush */}
      <ellipse cx="115" cy="160" rx="9" ry="5" fill="#FF5E8A" opacity="0.6" />
      <ellipse cx="155" cy="160" rx="9" ry="5" fill="#FF5E8A" opacity="0.6" />
      {/* big kawaii eye */}
      <circle cx="125" cy="90" r="22" fill="#FFF2C9" stroke={STROKE} strokeWidth={SW} />
      <circle cx="128" cy="94" r="12" fill="#0A0A0A" />
      <circle cx="124" cy="90" r="4.5" fill="#FFFFFF" />
      <circle cx="132" cy="98" r="2" fill="#FFFFFF" />
      {/* eyelash/brow */}
      <path
        d="M107 78 C 115 72, 132 72, 143 78"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      {/* toucan beak — big chunky rainbow */}
      <path
        d="M150 95
           C 225 80, 250 100, 245 130
           C 238 152, 200 160, 160 145
           C 148 135, 145 110, 150 95 Z"
        fill="url(#beak2)"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M162 120 C 195 125, 225 122, 240 118"
        stroke={STROKE}
        strokeWidth="1.8"
        fill="none"
        opacity="0.45"
      />
      {/* feet */}
      <path d="M90 195 l-2 16 M98 198 l3 16 M108 199 l9 14"
        stroke={STROKE} strokeWidth={SW} strokeLinecap="round" fill="none" />
      <path d="M150 199 l-2 16 M160 200 l4 15 M170 198 l10 12"
        stroke={STROKE} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* wing line */}
      <path
        d="M85 120 C 100 105, 120 100, 140 110"
        stroke={STROKE}
        strokeWidth="2.4"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export function Hibiscus({ className = '' }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="petal2" cx="0.5" cy="0.7" r="0.8">
          <stop offset="0" stopColor="#FFE48A" />
          <stop offset="0.45" stopColor="#FF6FA2" />
          <stop offset="1" stopColor="#D21E4E" />
        </radialGradient>
      </defs>
      {[0, 72, 144, 216, 288].map((r, i) => (
        <g key={i} transform={`rotate(${r} 110 110)`}>
          <path
            d="M110 110
               C 92 88, 82 50, 104 28
               C 126 20, 144 32, 146 58
               C 146 88, 132 108, 110 110 Z"
            fill="url(#petal2)"
            stroke={STROKE}
            strokeWidth={SW}
            strokeLinejoin="round"
          />
          <path
            d="M110 108 C 112 82, 118 56, 122 42"
            stroke={STROKE}
            strokeWidth="1.5"
            fill="none"
            opacity="0.45"
          />
        </g>
      ))}
      <path
        d="M110 110 C 118 88, 122 62, 116 42"
        stroke="#FFBC3F"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="116" cy="40" r="7" fill="#FFD23F" stroke={STROKE} strokeWidth="2" />
      <circle cx="110" cy="56" r="3" fill="#FFD23F" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="120" cy="70" r="3" fill="#FFD23F" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="113" cy="84" r="3" fill="#FFD23F" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="110" cy="110" r="10" fill="#0A0A0A" />
      <circle cx="110" cy="110" r="5" fill="#FFD23F" />
    </svg>
  )
}

export function Monstera({ className = '' }) {
  return (
    <svg viewBox="0 0 260 320" className={className} aria-hidden="true">
      <path
        d="M128 315 C 122 245, 115 185, 96 135"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M96 138
           C 40 122, 12 72, 32 34
           C 62 22, 98 38, 112 62
           C 132 48, 172 42, 202 62
           C 232 92, 228 142, 192 162
           C 172 176, 145 172, 130 158
           C 118 168, 95 176, 78 165
           C 65 155, 68 138, 96 138 Z"
        fill="#26A15A"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* fenestrations / cuts */}
      <path d="M60 58 L 92 90" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      <path d="M50 98 L 90 112" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      <path d="M150 58 L 150 102" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      <path d="M195 78 L 165 112" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      <path d="M210 118 L 175 138" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      <path d="M112 118 L 128 150" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      {/* highlight sheen */}
      <path
        d="M72 52 C 100 50, 135 60, 160 80"
        stroke="#6BD48A"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

export function Heliconia({ className = '' }) {
  return (
    <svg viewBox="0 0 180 340" className={className} aria-hidden="true">
      <path d="M90 335 L 90 30" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {[
        { y: 60, dir: -1, c: '#FF3B4A' },
        { y: 110, dir: 1, c: '#FF8E2A' },
        { y: 160, dir: -1, c: '#FFD23F' },
        { y: 210, dir: 1, c: '#FF3B4A' },
        { y: 260, dir: -1, c: '#FF8E2A' },
      ].map((b, i) => (
        <g key={i} transform={`translate(90 ${b.y}) scale(${b.dir} 1)`}>
          <path
            d="M0 0 C 24 -10, 62 -4, 78 16 C 62 26, 28 26, 0 16 Z"
            fill={b.c}
            stroke={STROKE}
            strokeWidth={SW}
            strokeLinejoin="round"
          />
        </g>
      ))}
      <path
        d="M90 40 C 55 22, 44 -8, 88 -14 C 126 -4, 120 30, 90 40 Z"
        fill="#26A15A"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PalmFrond({ className = '' }) {
  return (
    <svg viewBox="0 0 420 180" className={className} aria-hidden="true">
      <path
        d="M10 160 C 120 120, 260 80, 410 30"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      {Array.from({ length: 16 }).map((_, i) => {
        const t = i / 15
        const x = 10 + t * 400
        const y = 160 - t * 130
        const len = 22 + Math.sin(t * 3.1) * 18 + t * 26
        const angle = -55 - t * 15
        const x2 = x + len * Math.cos((angle * Math.PI) / 180)
        const y2 = y + len * Math.sin((angle * Math.PI) / 180)
        return (
          <g key={`u-${i}`}>
            <path
              d={`M${x} ${y} Q ${(x + x2) / 2 + 2} ${(y + y2) / 2 - 4} ${x2} ${y2}`}
              stroke="#26A15A"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d={`M${x} ${y} Q ${(x + x2) / 2 + 2} ${(y + y2) / 2 - 4} ${x2} ${y2}`}
              stroke={STROKE}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </g>
        )
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const t = i / 15
        const x = 10 + t * 400
        const y = 160 - t * 130
        const len = 22 + Math.cos(t * 3.1) * 16 + t * 22
        const angle = 120 + t * 12
        const x2 = x + len * Math.cos((angle * Math.PI) / 180)
        const y2 = y + len * Math.sin((angle * Math.PI) / 180)
        return (
          <g key={`d-${i}`}>
            <path
              d={`M${x} ${y} Q ${(x + x2) / 2 - 2} ${(y + y2) / 2 + 4} ${x2} ${y2}`}
              stroke="#26A15A"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d={`M${x} ${y} Q ${(x + x2) / 2 - 2} ${(y + y2) / 2 + 4} ${x2} ${y2}`}
              stroke={STROKE}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </g>
        )
      })}
    </svg>
  )
}
