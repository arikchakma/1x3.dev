import hash from 'string-hash'
import color from 'tinycolor2'

export default function AvatarGenerate({ name, className }: { name: string, className?: string }) {
  const hashed = hash(name)
  const c = color({ h: hashed % 360, s: 0.95, l: 0.5 })
  const c1 = c.toHexString()
  const c2 = c.triad()[1].toHexString()
  return (
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 80 80"
      className={className}
    >
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id={name}>
          <stop stopColor={c1} offset="0%" />
          <stop stopColor={c2} offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none">
        <rect fill={`url(#${name})`} x="0" y="0" width="100%" height="100%" />
      </g>
    </svg>
  )
}
