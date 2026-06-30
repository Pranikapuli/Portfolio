/* Rich SVG doodles for the classroom wall theme */

export function DoodleStar({ className = '', color = '#f0a500', size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 4l3.5 10.5H34l-8.5 6.5 3 10.5L20 26l-8.5 9.5 3-10.5L6 13.5h10.5Z"
        fill={color} stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function DoodleApple({ className = '', size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M24 10 C18 10 12 15 12 24 C12 34 18 40 24 40 C30 40 36 34 36 24 C36 15 30 10 24 10Z"
        fill="#e85d4a" stroke="#c74638" strokeWidth="1.2"/>
      <path d="M24 10 C24 6 28 4 30 5" stroke="#4e7254" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <ellipse cx="18" cy="24" rx="3" ry="5" fill="rgba(255,255,255,0.3)" transform="rotate(-20,18,24)"/>
      <path d="M24 10 C22 7 20 6 19 8" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export function DoodlePencil({ className = '', size = 56, rotate = 0 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" className={className} aria-hidden
      style={{ transform: `rotate(${rotate}deg)` }}>
      <rect x="22" y="8" width="12" height="34" rx="2" fill="#f0a500" stroke="#d48e00" strokeWidth="1"/>
      <polygon points="22,42 34,42 28,52" fill="#f4d0a0" stroke="#c8a46e" strokeWidth="1"/>
      <polygon points="24,48 32,48 28,52" fill="#f8e8c0"/>
      <rect x="22" y="8" width="12" height="6" rx="2" fill="#e8e8e8" stroke="#ccc" strokeWidth="1"/>
      <rect x="22" y="8" width="12" height="2" rx="1" fill="#ffb0b0"/>
    </svg>
  )
}

export function DoodleRuler({ className = '', size = 80, rotate = 0 }) {
  return (
    <svg width={size} height={size/4} viewBox="0 0 80 20" className={className} aria-hidden
      style={{ transform: `rotate(${rotate}deg)` }}>
      <rect x="0" y="2" width="80" height="16" rx="3" fill="#96b899" stroke="#4e7254" strokeWidth="1"/>
      {[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75].map((x,i) => (
        <line key={i} x1={x} y1="2" x2={x} y2={i%5===0 ? 10 : 7} stroke="#4e7254" strokeWidth="0.8"/>
      ))}
      <text x="4" y="16" fontSize="5" fill="#2c4a2c" fontFamily="Nunito">cm</text>
    </svg>
  )
}

export function DoodleBook({ className = '', size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" className={className} aria-hidden>
      <rect x="6" y="8" width="18" height="34" rx="2" fill="#1a7a7a" stroke="#0f4a4a" strokeWidth="1"/>
      <rect x="28" y="8" width="18" height="34" rx="2" fill="#e85d4a" stroke="#c74638" strokeWidth="1"/>
      <path d="M24 8 L28 8 L28 42 L24 42" fill="#f4e8c1" stroke="#dfc87a" strokeWidth="0.5"/>
      <line x1="24" y1="8" x2="28" y2="8" stroke="#dfc87a" strokeWidth="0.5"/>
      {[14,20,26,32].map((y,i) => (
        <line key={i} x1="10" y1={y} x2="22" y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
      ))}
      {[14,20,26,32].map((y,i) => (
        <line key={i} x1="30" y1={y} x2="42" y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
      ))}
    </svg>
  )
}

export function DoodleHeart({ className = '', size = 36, color = '#e85d4a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" className={className} aria-hidden>
      <path d="M18 30 C18 30 4 20 4 12 C4 7 7.5 4 12 5.5 C14.5 6.2 16.5 7.8 18 10 C19.5 7.8 21.5 6.2 24 5.5 C28.5 4 32 7 32 12 C32 20 18 30 18 30Z"
        fill={color} stroke="white" strokeWidth="1.2"/>
    </svg>
  )
}

export function DoodleRainbow({ className = '', size = 100 }) {
  return (
    <svg width={size} height={size*0.6} viewBox="0 0 100 60" className={className} aria-hidden>
      {[
        { r:48, c:'#e85d4a' },
        { r:42, c:'#f0a500' },
        { r:36, c:'#f0d000' },
        { r:30, c:'#4e7254' },
        { r:24, c:'#1a7a7a' },
        { r:18, c:'#6b3d6b' },
      ].map(({ r, c }, i) => (
        <path key={i} d={`M ${50-r} 58 A ${r} ${r} 0 0 1 ${50+r} 58`}
          fill="none" stroke={c} strokeWidth="5.5" strokeLinecap="round"/>
      ))}
      <ellipse cx="12" cy="55" rx="10" ry="7" fill="white" opacity="0.9"/>
      <ellipse cx="88" cy="55" rx="10" ry="7" fill="white" opacity="0.9"/>
    </svg>
  )
}

export function DoodleSun({ className = '', size = 60 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} aria-hidden>
      <circle cx="30" cy="30" r="14" fill="#f0a500" stroke="#d48e00" strokeWidth="1.5"/>
      {Array.from({length:8},(_,i) => {
        const angle = (i*45) * Math.PI/180
        const x1 = 30 + 16*Math.cos(angle), y1 = 30 + 16*Math.sin(angle)
        const x2 = 30 + 24*Math.cos(angle), y2 = 30 + 24*Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f0a500" strokeWidth="3" strokeLinecap="round"/>
      })}
      <circle cx="26" cy="27" r="3" fill="rgba(255,255,255,0.4)"/>
    </svg>
  )
}

export function DoodleCloud({ className = '', size = 80 }) {
  return (
    <svg width={size} height={size*0.6} viewBox="0 0 80 48" className={className} aria-hidden>
      <ellipse cx="40" cy="30" rx="30" ry="16" fill="white" opacity="0.9"/>
      <circle cx="25" cy="26" r="12" fill="white" opacity="0.9"/>
      <circle cx="40" cy="20" r="16" fill="white" opacity="0.9"/>
      <circle cx="55" cy="26" r="11" fill="white" opacity="0.9"/>
    </svg>
  )
}

export function DoodleLeaf({ className = '', size = 40, color = '#4e7254' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 36 C20 36 6 24 8 12 C10 4 18 2 24 6 C32 10 34 20 28 28 C26 32 22 35 20 36Z"
        fill={color} stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <path d="M20 36 C20 36 16 26 18 16 M18 16 C18 16 22 20 26 22"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function DoodleNumber({ n, className = '', color = '#1a7a7a', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="14" fill={color} opacity="0.9"/>
      <text x="16" y="21" textAnchor="middle" fontSize="14" fontWeight="bold"
        fontFamily="Caveat,cursive" fill="white">{n}</text>
    </svg>
  )
}

export function DoodleScissors({ className = '', size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className={className} aria-hidden>
      <circle cx="12" cy="12" r="7" fill="none" stroke="#6b8f71" strokeWidth="2"/>
      <circle cx="32" cy="12" r="7" fill="none" stroke="#6b8f71" strokeWidth="2"/>
      <line x1="18" y1="16" x2="38" y2="38" stroke="#6b8f71" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="26" y1="16" x2="6" y2="38" stroke="#6b8f71" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

export function PushPin({ className = '', color = '#e85d4a', size = 20 }) {
  return (
    <svg width={size} height={size*1.5} viewBox="0 0 20 30" className={className} aria-hidden>
      <circle cx="10" cy="10" r="9" fill={color}/>
      <circle cx="7" cy="7" r="3" fill="rgba(255,255,255,0.35)"/>
      <line x1="10" y1="18" x2="10" y2="30" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function WashiTape({ className = '', color = '#96b899', width = 120, height = 22, opacity = 0.75, pattern = 'dots' }) {
  const patternId = `washi-${Math.random().toString(36).slice(2,7)}`
  const fills = {
    dots: (
      <pattern id={patternId} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <rect width="12" height="12" fill={color}/>
        <circle cx="6" cy="6" r="2" fill="rgba(255,255,255,0.5)"/>
      </pattern>
    ),
    stripes: (
      <pattern id={patternId} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill={color}/>
        <line x1="0" y1="4" x2="8" y2="4" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
      </pattern>
    ),
    stars: (
      <pattern id={patternId} x="0" y="0" width="14" height="12" patternUnits="userSpaceOnUse">
        <rect width="14" height="12" fill={color}/>
        <path d="M7 2l1 3h3l-2.5 2 1 3L7 8.5 4.5 10l1-3L3 5h3z" fill="rgba(255,255,255,0.5)" scale="0.6"/>
      </pattern>
    ),
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}
      style={{ opacity }} aria-hidden>
      <defs>{fills[pattern] || fills.dots}</defs>
      <rect x="0" y="0" width={width} height={height} fill={`url(#${patternId})`}
        rx="2" filter="url(#washi-blur)"/>
    </svg>
  )
}

export function ABCBunting({ className = '' }) {
  const flags = ['A','B','C','📚','D','E','F','🌟','G','H','I','🎨','J','K','L']
  const colors = ['#e85d4a','#f0a500','#1a7a7a','#6b3d6b','#4e7254','#e85d4a','#f0a500']
  const w = 60, total = flags.length
  const svgW = total * w + 20

  return (
    <svg width="100%" height="70" viewBox={`0 0 ${svgW} 70`} preserveAspectRatio="xMidYMid meet"
      className={className} aria-hidden>
      <path d={`M10 20 ${flags.map((_,i) => `L ${i*w+40} 20`).join(' ')}`}
        stroke="#8b6340" strokeWidth="1.5" fill="none" strokeDasharray="4 2"/>
      {flags.map((f, i) => {
        const x = i * w + 10, color = colors[i % colors.length]
        return (
          <g key={i}>
            <polygon points={`${x+5},22 ${x+35},22 ${x+35},55 ${x+20},65 ${x+5},55`}
              fill={color} stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
            <text x={x+20} y={f.length===1?46:44} textAnchor="middle"
              fontSize={f.length===1?18:14} fontFamily="Caveat,cursive"
              fontWeight="700" fill="white">{f}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function ClassroomBorder({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden>
      <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="xMidYMid slice">
        {Array.from({length:40},(_,i) => {
          const shapes = ['▲','★','●','♦','■']
          const colors = ['#e85d4a','#f0a500','#1a7a7a','#6b3d6b','#4e7254']
          return (
            <text key={i} x={i*10+2} y="18" fontSize="10" fill={colors[i%5]} opacity="0.8"
              textAnchor="middle">{shapes[i%5]}</text>
          )
        })}
      </svg>
    </div>
  )
}

export function HandDrawnUnderline({ className = '', color = '#f0a500', width = 200 }) {
  return (
    <svg width={width} height="12" viewBox={`0 0 ${width} 12`} className={className} aria-hidden>
      <path d={`M4 8 Q ${width*0.25} 4 ${width*0.5} 8 Q ${width*0.75} 12 ${width-4} 6`}
        stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"
        style={{strokeDasharray:300, strokeDashoffset:300, animation:'scribble 1s ease forwards 0.3s'}}/>
    </svg>
  )
}
