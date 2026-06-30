import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { artwork } from '../data/content'
import { ABCBunting, ClassroomBorder, HandDrawnUnderline } from '../components/Doodles'

function buildImages() {
  return artwork.images.map((f, i) => ({
    id: `r${i}`,
    src: `/artwork/${f}`,
    alt: `Artwork ${i + 1}`,
  }))
}

// Children-themed frame styles — not just white boxes
const frameStyles = [
  // Crayon-style multi-shadow
  { border: '6px solid #fcd64d', shadow: '4px 4px 0 #e85d4a, 8px 8px 0 #1a7a7a', tilt: 'rotate-1', tape: '#e85d4a' },
  // Dashed scallop
  { border: '4px dashed #e85d4a', shadow: '3px 3px 0 #fcd64d', tilt: '-rotate-2', tape: '#f0a500' },
  // Double border
  { border: '6px solid #4e7254', shadow: '0 0 0 3px #faf3e0, 0 0 0 6px #4e7254, 4px 6px 12px rgba(0,0,0,0.2)', tilt: 'rotate-2', tape: '#4e7254' },
  // Coral polaroid
  { border: '8px solid white', shadow: '0 0 0 3px #e85d4a, 3px 5px 14px rgba(0,0,0,0.2)', tilt: '-rotate-1', tape: '#1a7a7a' },
  // Mustard thick
  { border: '7px solid #f0a500', shadow: '3px 3px 0 #e85d4a', tilt: 'rotate-1', tape: '#f0a500' },
  // Teal dashed
  { border: '4px dashed #1a7a7a', shadow: '4px 4px 0 #fcd64d, 8px 8px 0 #4e7254', tilt: '-rotate-2', tape: '#e85d4a' },
  // Classic white with colored shadow
  { border: '8px solid white', shadow: '5px 5px 0 #6b3d6b, 9px 9px 0 #f0a500', tilt: 'rotate-2', tape: '#6b3d6b' },
  { border: '6px solid #fcd64d', shadow: '3px 3px 0 #1a7a7a', tilt: '-rotate-1', tape: '#fcd64d' },
]

export default function Artwork() {
  const images = buildImages()
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen paper-texture font-body pt-16 pb-24 overflow-hidden">
      <div className="overflow-hidden"><ABCBunting /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} className="text-center mb-12"
        >
          <div className="inline-block bg-mustard-100 border-2 border-mustard-300 rounded-full px-4 py-1 mb-4">
            <span className="font-fun font-600 text-mustard-600 text-sm">🎨 Creative Portfolio</span>
          </div>
          <h1 className="font-fun font-700 text-4xl md:text-5xl text-navy-800 mb-3">
            Artwork & Classroom Creativity
          </h1>
          <HandDrawnUnderline color="#e85d4a" width={240} className="mx-auto mb-4"/>
          <p className="font-body text-navy-700/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {artwork.intro}
          </p>
        </motion.div>

        {/* ── GALLERY — CSS columns masonry, full images, no cropping ── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="hidden md:block"
          style={{ columns: 3, columnGap: '20px' }}
        >
          {images.map((img, i) => {
            const f = frameStyles[i % frameStyles.length]
            return (
              <motion.div
                key={img.id}
                variants={{ hidden: { opacity:0, y:24 }, show: { opacity:1, y:0, transition:{ duration:0.5 } } }}
                className={`relative break-inside-avoid mb-5 cursor-pointer ${f.tilt} hover:rotate-0 hover:scale-102 transition-all duration-300`}
                style={{ display: 'inline-block', width: '100%' }}
                onClick={() => setLightbox(img)}
              >
                {/* Washi tape strip at top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 rounded-sm z-10"
                  style={{ background: f.tape, opacity: 0.88 }}/>

                {/* Themed frame */}
                <div style={{ border: f.border, boxShadow: f.shadow, background: 'white' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full block"
                    style={{ display: 'block' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile: 2 columns */}
        <div className="md:hidden" style={{ columns: 2, columnGap: '12px' }}>
          {images.map((img, i) => {
            const f = frameStyles[i % frameStyles.length]
            return (
              <div
                key={`mob-${img.id}`}
                className={`break-inside-avoid mb-3 cursor-pointer ${f.tilt} hover:rotate-0 transition-all duration-300`}
                style={{ display: 'inline-block', width: '100%' }}
                onClick={() => setLightbox(img)}
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 z-10 rounded-sm"
                  style={{ background: f.tape, opacity: 0.85, position: 'relative', margin: '0 auto', display: 'block' }}/>
                <div style={{ border: f.border, boxShadow: f.shadow, background: 'white' }}>
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full block"/>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale:0.85 }} animate={{ scale:1 }} exit={{ scale:0.85 }}
              className="relative mx-4 bg-white p-3 shadow-deep max-w-3xl w-full"
              style={{ border: '8px solid white', boxShadow: '5px 5px 0 #f0a500, 10px 10px 0 #e85d4a' }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain block"/>
              <button onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-coral-500 text-white rounded-full shadow-pin flex items-center justify-center font-bold hover:bg-coral-600 transition">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ClassroomBorder className="mt-12 opacity-60"/>
    </div>
  )
}
