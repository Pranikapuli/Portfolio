import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { personal, philosophy, highlights } from '../data/content'
import {
  ABCBunting, ClassroomBorder, DoodleStar, DoodleApple, DoodlePencil,
  DoodleBook, DoodleRainbow, DoodleSun, DoodleLeaf, DoodleHeart,
  DoodleScissors, PushPin, HandDrawnUnderline
} from '../components/Doodles'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const highlightColors = [
  { bg: 'bg-coral-100',   border: 'border-coral-300',   pin: '#e85d4a', accent: 'text-coral-600',   tilt: 'rotate-1'  },
  { bg: 'bg-mustard-100', border: 'border-mustard-300', pin: '#f0a500', accent: 'text-mustard-600', tilt: '-rotate-1' },
  { bg: 'bg-teal-50',     border: 'border-teal-300',    pin: '#1a7a7a', accent: 'text-teal-600',    tilt: 'rotate-2'  },
  { bg: 'bg-sage-100',    border: 'border-sage-300',    pin: '#4e7254', accent: 'text-sage-600',    tilt: '-rotate-2' },
]

export default function Home() {
  return (
    <div className="font-body overflow-x-hidden">

      {/* ══════ HERO — full viewport, seamlessly below navbar ══════ */}
      <section className="relative paper-texture overflow-hidden" style={{ minHeight: '100dvh', paddingTop: '60px' }}>

        {/* Bunting sits right below nav */}
        <div className="overflow-hidden"><ABCBunting /></div>

        {/* Ambient doodles */}
        <div className="absolute top-24 left-4 float-anim opacity-60 pointer-events-none"><DoodleSun size={48}/></div>
        <div className="absolute top-28 right-6 float-slow opacity-50 pointer-events-none"><DoodleRainbow size={84}/></div>
        <div className="absolute bottom-44 left-5 float-anim opacity-40 pointer-events-none" style={{animationDelay:'1s'}}><DoodleLeaf size={40} color="#6b8f71"/></div>
        <div className="absolute bottom-20 right-5 opacity-40 wiggle-anim pointer-events-none"><DoodleScissors size={34}/></div>
        <div className="absolute top-1/2 right-5 opacity-35 float-slow pointer-events-none" style={{animationDelay:'2s'}}><DoodleStar size={32} color="#f0a500"/></div>
        <div className="absolute top-1/3 left-3 opacity-35 float-anim pointer-events-none" style={{animationDelay:'0.5s'}}><DoodleHeart size={28} color="#e85d4a"/></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 md:py-10 pb-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

            {/* ── Left text ── */}
            <motion.div
              className="flex-1 text-center lg:text-left w-full"
              variants={stagger} initial="hidden" animate="show"
            >
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-mustard-100 border-2 border-mustard-300 rounded-full px-4 py-1.5 mb-5">
                <span>✏️</span>
                <span className="font-fun font-600 text-mustard-600 text-sm">Early Childhood Educator · Hyderabad, India</span>
              </motion.div>

              {/* Chalkboard name sign */}
              <motion.div variants={fadeUp} className="mb-5">
                <div className="chalkboard rounded-2xl px-6 pt-5 pb-6 inline-block shadow-deep max-w-full">
                  <p className="font-hand text-cream-200/70 text-sm mb-2 tracking-widest">
                    ✦ Welcome to the classroom of ✦
                  </p>
                  <h1 className="font-fun leading-tight" style={{fontWeight:700}}>
                    <span style={{fontSize:'clamp(2.8rem,7vw,4.5rem)', color:'#faf3e0'}}>Pranika</span>
                    <br/>
                    <span style={{fontSize:'clamp(2.8rem,7vw,4.5rem)', color:'#fcd64d'}}>Puli</span>
                  </h1>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-3">
                <p className="font-fun font-700 text-2xl sm:text-3xl text-teal-700">{personal.title}</p>
                <p className="font-fun font-600 text-lg text-coral-500 mt-1">{personal.subtitle}</p>
                <HandDrawnUnderline color="#f0a500" width={260} className="mt-1"/>
              </motion.div>

              {/* Tagline — clean cream card, no distracting lines */}
              <motion.div variants={fadeUp}
                className="mt-5 cream-card rounded-r-2xl rounded-bl-2xl p-4 max-w-md mx-auto lg:mx-0 shadow-card">
                <p className="font-hand text-xl font-700 text-navy-800 leading-relaxed">
                  "{personal.tagline}"
                </p>
              </motion.div>

              {/* CTA buttons — always visible, never cut */}
              <motion.div variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link to="/resume"
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-fun font-700 rounded-full shadow-pin hover:shadow-deep transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
                  <span>📄</span> View Resume
                </Link>
                <Link to="/experience"
                  className="px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white font-fun font-700 rounded-full shadow-pin hover:shadow-deep transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
                  <span>🏫</span> My Experience
                </Link>
                <Link to="/artwork"
                  className="px-6 py-3 bg-white border-2 border-mustard-400 text-mustard-600 hover:bg-mustard-50 font-fun font-700 rounded-full shadow-card hover:shadow-pin transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
                  <span>🎨</span> Artwork
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: Portrait photo — candid frame, face-forward ── */}
            <motion.div
              className="flex-shrink-0 relative mt-6 lg:mt-0"
              initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Shadow stacks behind — rotated for depth */}
              <div className="absolute inset-0 bg-mustard-200 rounded-3xl shadow-deep" style={{transform:'rotate(4deg) translate(6px,8px)'}}/>
              <div className="absolute inset-0 bg-coral-200 rounded-3xl" style={{transform:'rotate(-2deg) translate(-4px,4px)'}}/>

              {/* Main frame — thick white border like a printed photo */}
              <div className="relative rounded-3xl overflow-hidden border-[10px] border-white shadow-deep"
                style={{ width:'280px', height:'340px' }}>
                {personal.heroPhotoPath ? (
                  <img
                    src={personal.heroPhotoPath}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 18%' }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cream-200 to-sage-100 flex flex-col items-center justify-center gap-2">
                    <div className="text-6xl">👩‍🏫</div>
                    <p className="font-hand text-lg text-teal-600">{personal.name}</p>
                  </div>
                )}
                {/* Subtle vignette so it looks editorial */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{background:'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)'}}/>
              </div>

              {/* Caption card pinned below */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[200px] bg-white rounded-xl shadow-pin py-2 px-4 text-center border-2 border-cream-200"
                style={{transform:'translateX(-50%) rotate(-1deg)'}}>
                <p className="font-hand text-teal-700 text-base leading-tight">{personal.name}</p>
                <p className="font-body text-xs text-gray-400 mt-0.5">{personal.location}</p>
              </div>

              {/* Washi tape across top-left */}
              <div className="absolute -top-3 left-8 w-20 h-5 bg-mustard-300 opacity-85 rounded-sm shadow-sm" style={{transform:'rotate(-3deg)'}}/>

              {/* Floating doodles */}
              <div className="absolute -top-6 -right-4 float-anim pointer-events-none"><DoodleApple size={36}/></div>
              <div className="absolute -bottom-10 -left-5 float-slow pointer-events-none"><DoodlePencil size={44} rotate={-20}/></div>
              <div className="absolute top-1/2 -right-7 float-anim pointer-events-none" style={{animationDelay:'1.5s'}}><DoodleBook size={32}/></div>
              <DoodleStar size={22} color="#f0a500" className="absolute top-4 -left-7 float-slow pointer-events-none"/>
            </motion.div>
          </div>
        </div>

        <ClassroomBorder />
      </section>

      {/* ══════ PHILOSOPHY ══════ */}
      <section className="relative py-16 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{backgroundImage:'radial-gradient(circle, #c5d9c7 1px, transparent 1px)', backgroundSize:'24px 24px'}}/>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, margin:'-60px' }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block bg-teal-700 text-cream-100 font-hand text-lg px-5 py-1.5 rounded-full mb-4 shadow-pin">
                ✦ My Teaching Philosophy ✦
              </span>
              <HandDrawnUnderline color="#e85d4a" width={200} className="mx-auto"/>
            </motion.div>

            <div className="space-y-6">
              {philosophy.paragraphs.map((para, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="relative pl-5 border-l-4 border-mustard-400">
                  {i === 0 && (
                    <span className="absolute -left-3 -top-1 text-mustard-400 font-serif text-5xl leading-none select-none">"</span>
                  )}
                  <p className="font-body text-navy-800/85 leading-8 text-base md:text-lg">{para}</p>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="text-right">
                <span className="font-hand text-coral-500 text-xl">— Pranika Puli, Educator</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-6 right-6 float-anim opacity-25 pointer-events-none"><DoodleSun size={52}/></div>
        <div className="absolute bottom-4 left-6 float-slow opacity-20 pointer-events-none"><DoodleLeaf size={44} color="#4e7254"/></div>
      </section>

      {/* ══════ WHAT I BRING ══════ */}
      <section className="relative py-16 overflow-hidden paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, margin:'-40px' }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="font-hand text-coral-500 text-xl mb-1">— pinned to the notice board —</p>
              <h2 className="font-fun font-700 text-3xl md:text-4xl text-navy-800">What I Bring</h2>
              <HandDrawnUnderline color="#1a7a7a" width={160} className="mx-auto mt-2"/>
            </motion.div>

            <div className="corkboard rounded-3xl p-6 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7">
                {highlights.map((item, i) => {
                  const c = highlightColors[i]
                  return (
                    <motion.div
                      key={i} variants={fadeUp}
                      whileHover={{ scale: 1.04, rotate: 0 }}
                      className={`relative ${c.bg} ${c.tilt} border-2 ${c.border} rounded-2xl p-5 shadow-pin hover:shadow-deep transition-all duration-300 cursor-default`}
                      style={{ minHeight: '200px' }}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-md z-10"
                        style={{background:`radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6) 0%, ${c.pin} 60%)`}}/>
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="text-4xl mb-3 mt-2">{item.icon}</div>
                        <h3 className={`font-fun font-700 text-base mb-2 ${c.accent}`}>{item.title}</h3>
                        <p className="font-body text-sm text-navy-700/80 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="py-12 bg-gradient-to-r from-teal-700 via-teal-600 to-sage-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n:'3+', label:'Years Teaching', emoji:'📅' },
              { n:'2',  label:'Schools',        emoji:'🏫' },
              { n:'200+', label:'Young Learners', emoji:'👦' },
              { n:'CBSE + HVT', label:'Curricula', emoji:'✅' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className="bg-white/10 rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-2xl mb-1">{s.emoji}</div>
                <div className="font-fun font-700 text-xl text-mustard-300 leading-tight">{s.n}</div>
                <div className="font-body text-xs text-cream-200 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="paper-texture py-14 relative overflow-hidden">
        <div className="absolute top-4 left-4 opacity-25 float-anim pointer-events-none"><DoodleRainbow size={72}/></div>
        <div className="absolute bottom-4 right-6 opacity-20 float-slow pointer-events-none"><DoodleStar size={38} color="#f0a500"/></div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="bg-white border-4 border-mustard-300 rounded-3xl px-6 py-8 shadow-deep relative">
              <div className="absolute -top-3 -left-3 w-14 h-5 bg-coral-300 opacity-80 -rotate-12 rounded-sm"/>
              <div className="absolute -top-3 -right-3 w-12 h-5 bg-teal-300 opacity-80 rotate-12 rounded-sm"/>
              <p className="font-hand text-xl text-coral-500 mb-2">🌟 Ready to meet your next favourite teacher?</p>
              <h2 className="font-fun font-700 text-2xl md:text-3xl text-navy-800 mb-5">
                Let's connect and create something wonderful!
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact"
                  className="px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white font-fun font-700 rounded-full shadow-pin transition-all text-sm sm:text-base">
                  ✉️ Get in Touch
                </Link>
                <Link to="/testimonials"
                  className="px-6 py-3 bg-mustard-400 hover:bg-mustard-500 text-white font-fun font-700 rounded-full shadow-pin transition-all text-sm sm:text-base">
                  💬 Kind Words
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
