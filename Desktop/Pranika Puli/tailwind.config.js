/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal:    { 50:'#e6f4f4', 100:'#b3dede', 300:'#4aabab', 400:'#2d9494', 500:'#1a7a7a', 600:'#156060', 700:'#0f4a4a', 800:'#0a3232', 900:'#061e1e' },
        mustard: { 100:'#fef3cc', 200:'#fde799', 300:'#fcd64d', 400:'#f0a500', 500:'#d48e00', 600:'#b07600' },
        coral:   { 100:'#fde8e5', 200:'#fbc4bc', 300:'#f59080', 400:'#ee6251', 500:'#e85d4a', 600:'#c74638', 700:'#a33328' },
        sage:    { 100:'#e8f0e9', 200:'#c5d9c7', 300:'#96b899', 400:'#6b8f71', 500:'#4e7254', 600:'#3a5a3f', 700:'#284030' },
        cream:   { 50:'#fefdf8', 100:'#faf3e0', 200:'#f4e8c1', 300:'#ecd99e', 400:'#dfc87a' },
        chalk:   { DEFAULT:'#f8f7f0', dark:'#e8e7de' },
        navy:    { 700:'#253060', 800:'#1a2744', 900:'#0f1829' },
        plum:    { 400:'#8b5e8b', 500:'#6b3d6b', 600:'#4f2a4f' },
      },
      fontFamily: {
        hand:    ['Caveat', 'cursive'],
        fun:     ['Quicksand', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
      },
      rotate: {
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        '1':  '1deg',
        '2':  '2deg',
        '3':  '3deg',
      },
      boxShadow: {
        pin:   '3px 3px 12px rgba(0,0,0,0.18)',
        card:  '0 4px 16px rgba(0,0,0,0.10)',
        deep:  '0 8px 32px rgba(0,0,0,0.18)',
        chalk: 'inset 0 0 0 2px rgba(255,255,255,0.15)',
      },
      backgroundImage: {
        'lined': "repeating-linear-gradient(transparent, transparent 27px, #c5d9c7 28px)",
        'dots':  "radial-gradient(circle, #c5d9c7 1px, transparent 1px)",
        'grid':  "linear-gradient(#e8f0e9 1px, transparent 1px), linear-gradient(90deg, #e8f0e9 1px, transparent 1px)",
      },
      backgroundSize: {
        'lined': '100% 28px',
        'dots':  '20px 20px',
        'grid':  '24px 24px',
      },
    },
  },
  plugins: [],
}
