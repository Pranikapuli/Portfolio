import { motion } from 'framer-motion'
import { personal } from '../data/content'
import { ABCBunting, ClassroomBorder, DoodleStar, DoodleHeart, PushPin, HandDrawnUnderline } from '../components/Doodles'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

export default function Contact() {
  return (
    <div className="min-h-screen paper-texture font-body pt-16 pb-24 overflow-hidden">
      <div className="overflow-hidden"><ABCBunting /></div>

      <div className="absolute top-28 right-6 float-anim opacity-30 pointer-events-none"><DoodleStar size={44} color="#f0a500"/></div>
      <div className="absolute top-1/2 left-4 float-slow opacity-25 pointer-events-none"><DoodleHeart size={36} color="#e85d4a"/></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 relative z-10">

        {/* Heading */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp} className="inline-block bg-mustard-100 border-2 border-mustard-300 rounded-full px-4 py-1 mb-4">
            <span className="font-fun font-600 text-mustard-600 text-sm">✉️ Let's Connect</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-fun font-700 text-4xl md:text-5xl text-navy-800 mb-3">
            Get in Touch
          </motion.h1>
          <HandDrawnUnderline color="#e85d4a" width={180} className="mx-auto mb-4"/>
          <motion.p variants={fadeUp} className="font-body text-navy-700/70 text-lg max-w-xl mx-auto leading-relaxed">
            I would love to speak with your school about how I can contribute to your early childhood programme. Reach out anytime!
          </motion.p>
        </motion.div>

        {/* Contact details — clean, large, centered */}
        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="corkboard rounded-3xl p-8 md:p-12 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Email — single clickable link */}
            <motion.div variants={fadeUp}
              className="pinned-card relative bg-coral-100 border-2 border-coral-300 rounded-2xl p-6 text-center shadow-deep -rotate-1 hover:rotate-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="#e85d4a" size={16}/>
              </div>
              <div className="text-4xl mb-3">✉️</div>
              <p className="font-fun font-700 text-sm uppercase tracking-wide text-coral-600 mb-2">Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="font-body text-navy-800 text-sm break-all leading-relaxed hover:text-coral-600 transition-colors underline"
              >
                {personal.email}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp}
              className="pinned-card relative bg-mustard-100 border-2 border-mustard-300 rounded-2xl p-6 text-center shadow-deep rotate-2 hover:rotate-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="#f0a500" size={16}/>
              </div>
              <div className="text-4xl mb-3">📞</div>
              <p className="font-fun font-700 text-sm uppercase tracking-wide text-mustard-600 mb-2">Phone</p>
              <a
                href={`tel:${personal.phone}`}
                className="font-body text-navy-800 text-sm leading-relaxed hover:text-mustard-600 transition-colors underline"
              >
                {personal.phone}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeUp}
              className="pinned-card relative bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 text-center shadow-deep -rotate-2 hover:rotate-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="#1a7a7a" size={16}/>
              </div>
              <div className="text-4xl mb-3">📍</div>
              <p className="font-fun font-700 text-sm uppercase tracking-wide text-teal-600 mb-2">Location</p>
              <p className="font-body text-navy-800 text-sm leading-relaxed">{personal.location}</p>
            </motion.div>

          </div>
        </motion.div>

        {/* Open to opportunities */}
        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
          className="relative"
        >
          <div className="relative bg-mustard-100 border-4 border-mustard-400 rounded-3xl p-8 text-center shadow-deep">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <PushPin color="#e85d4a" size={22}/>
            </div>
            <div className="absolute -top-2 -left-2 w-16 h-5 bg-teal-400 opacity-80 -rotate-12 rounded-sm"/>
            <div className="absolute -top-2 -right-2 w-14 h-5 bg-coral-400 opacity-80 rotate-12 rounded-sm"/>

            <div className="text-5xl mb-3">🌱</div>
            <h2 className="font-fun font-700 text-2xl text-navy-800 mb-3">
              Open to Opportunities
            </h2>
            <p className="font-body text-navy-700/80 leading-relaxed max-w-lg mx-auto mb-5">
              I am actively seeking an Early Childhood teaching role in Hyderabad.
              I bring creativity, warmth, and a genuine love for early childhood education to every classroom I walk into.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['🍎 Early Childhood Teacher','🎨 Creative Arts & Display','📚 Science · Maths · Language','🤝 CBSE & HVT Certified'].map((tag,i) => (
                <span key={i} className="bg-white border-2 border-mustard-300 text-navy-700 font-fun font-600 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ClassroomBorder className="mt-16 opacity-60"/>
    </div>
  )
}
