import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/content'
import { ABCBunting, ClassroomBorder, PushPin, HandDrawnUnderline } from '../components/Doodles'

function buildItems() {
  return testimonials.images.map((f, i) => ({
    id: `t${i}`,
    src: `/src/assets/testimonials/${f}`,
  }))
}

const pinColors = ['#e85d4a','#f0a500','#1a7a7a','#4e7254','#6b3d6b','#e85d4a','#f0a500','#1a7a7a']
const tapeColors = ['#1a7a7a','#e85d4a','#f0a500','#6b3d6b','#4e7254','#1a7a7a','#e85d4a','#f0a500']
const tilts = ['-rotate-1','rotate-2','-rotate-2','rotate-1','-rotate-1','rotate-2','-rotate-2','rotate-1']
const cardBgs = ['bg-white','bg-cream-50','bg-white','bg-mustard-50','bg-white','bg-cream-50','bg-white','bg-teal-50']

export default function Testimonials() {
  const items = buildItems()
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen paper-texture font-body pt-16 pb-24 overflow-hidden">
      <div className="overflow-hidden"><ABCBunting /></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-mustard-100 border-2 border-mustard-300 rounded-full px-4 py-1 mb-4">
            <span className="font-fun font-600 text-mustard-600 text-sm">💬 What Others Say</span>
          </div>
          <h1 className="font-fun font-700 text-4xl md:text-5xl text-navy-800 mb-3">Kind Words</h1>
          <HandDrawnUnderline color="#1a7a7a" width={180} className="mx-auto mb-4"/>
          <p className="font-body text-navy-700/70 text-lg max-w-xl mx-auto">{testimonials.intro}</p>
        </motion.div>

        {/* Cork board */}
        <div className="corkboard rounded-3xl p-6 md:p-10">

          {/* Desktop: 3-column masonry */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show:{ transition:{ staggerChildren:0.06 } } }}
            className="hidden md:block"
            style={{ columns: 3, columnGap: '20px' }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                variants={{ hidden:{ opacity:0, y:16 }, show:{ opacity:1, y:0, transition:{ duration:0.45 } } }}
                className={`break-inside-avoid mb-5 relative ${tilts[i % tilts.length]} hover:rotate-0 hover:scale-103 transition-all duration-300 cursor-pointer`}
                style={{ display: 'inline-block', width: '100%' }}
                onClick={() => setLightbox(item)}
              >
                {/* Push pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <PushPin color={pinColors[i % pinColors.length]} size={14}/>
                </div>
                {/* Washi tape */}
                <div className="absolute -top-1.5 left-8 w-14 h-3 rounded-sm z-20"
                  style={{ background: tapeColors[i % tapeColors.length], opacity: 0.8 }}/>

                <div className={`${cardBgs[i % cardBgs.length]} p-2.5 pb-5 shadow-pin`}>
                  <img
                    src={item.src}
                    alt={`Kind words ${i+1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full block rounded-sm"
                  />
                  {/* Small decorative caption — no heading labels */}
                  <div className="text-center mt-2">
                    <span className="font-hand text-xs text-gray-300">✦</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: 2-column masonry */}
          <div className="md:hidden" style={{ columns: 2, columnGap: '12px' }}>
            {items.map((item, i) => (
              <div
                key={`mob-${item.id}`}
                className={`break-inside-avoid mb-3 relative ${tilts[i % tilts.length]} hover:rotate-0 transition-all duration-300 cursor-pointer`}
                style={{ display: 'inline-block', width: '100%' }}
                onClick={() => setLightbox(item)}
              >
                <div className={`${cardBgs[i % cardBgs.length]} p-2 shadow-pin`}>
                  <img
                    src={item.src}
                    alt={`Kind words ${i+1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full block rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote chalkboard */}
        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="mt-20 text-center"
        >
          <div className="chalkboard rounded-3xl px-8 py-10 max-w-2xl mx-auto inline-block">
            <div className="font-serif text-7xl text-white/20 leading-none mb-2">"</div>
            <p className="chalk-text font-hand text-2xl text-cream-200 leading-relaxed">
              Teaching is the greatest act of optimism.
            </p>
            <p className="font-hand text-mustard-300 text-lg mt-3">— Colleen Wilcox</p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox-overlay"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => setLightbox(null)}>
            <motion.div
              initial={{ scale:0.9 }} animate={{ scale:1 }} exit={{ scale:0.9 }}
              className="relative max-w-2xl mx-4 bg-white p-4 shadow-deep rounded-xl"
              onClick={e => e.stopPropagation()}>
              <img src={lightbox.src} alt="Testimonial" className="w-full rounded-lg block"/>
              <button onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-coral-500 text-white rounded-full shadow-pin flex items-center justify-center font-bold hover:bg-coral-600 transition">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ClassroomBorder className="mt-12 opacity-60"/>
    </div>
  )
}
