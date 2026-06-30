import { motion } from 'framer-motion'
import { experience } from '../data/content'
import {
  ABCBunting, ClassroomBorder, PushPin, DoodlePencil,
  DoodleBook, DoodleStar, DoodleApple, HandDrawnUnderline
} from '../components/Doodles'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { show: { transition: { staggerChildren: 0.09 } } }

const jobStyles = [
  {
    headerBg: 'bg-teal-600',
    cardBg: 'bg-white',
    border: 'border-teal-200',
    accent: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700 border-teal-300',
    bulletColor: '#1a7a7a',
    tilt: '-rotate-1',
    pinColor: '#1a7a7a',
  },
  {
    headerBg: 'bg-coral-500',
    cardBg: 'bg-white',
    border: 'border-coral-200',
    accent: 'text-coral-700',
    badge: 'bg-coral-100 text-coral-700 border-coral-300',
    bulletColor: '#e85d4a',
    tilt: 'rotate-1',
    pinColor: '#e85d4a',
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen paper-texture font-body pt-16 pb-24 overflow-hidden">
      {/* Top bunting */}
      <div className="overflow-hidden"><ABCBunting /></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once:true }}
          variants={stagger} className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="inline-block bg-mustard-100 border-2 border-mustard-300 rounded-full px-4 py-1 mb-4">
            <span className="font-fun font-600 text-mustard-600 text-sm">🏫 Career Journey</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-fun font-700 text-4xl md:text-5xl text-navy-800 mb-2">
            Teaching Experience
          </motion.h1>
          <HandDrawnUnderline color="#e85d4a" width={220} className="mx-auto"/>
          <motion.p variants={fadeUp} className="mt-4 text-navy-700/70 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Three-plus years shaping young learners across two inspiring schools — each role deepening my passion for purposeful, joyful early childhood education.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rope */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-mustard-300 rounded-full hidden md:block" style={{transform:'translateX(-50%)'}}/>

          <div className="space-y-16">
            {experience.map((exp, i) => {
              const s = jobStyles[i % jobStyles.length]
              const isRight = i % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once:true, margin:'-30px' }}
                  variants={stagger}
                  className={`relative flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start md:items-center`}
                >
                  {/* Center dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-8 h-8 rounded-full items-center justify-center z-10 border-4 border-cream-100 shadow-pin"
                    style={{background: s.pinColor}}>
                    <div className="w-3 h-3 rounded-full bg-white"/>
                  </div>

                  {/* Card */}
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className={`relative w-full md:w-[46%] ${s.cardBg} ${s.border} border-2 rounded-3xl shadow-deep overflow-hidden ${s.tilt} hover:rotate-0 transition-all duration-300`}
                  >
                    {/* Pin top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <PushPin color={s.pinColor} size={18}/>
                    </div>

                    {/* Card header */}
                    <div className={`${s.headerBg} px-6 pt-6 pb-5 relative`}>
                      {/* Washi tape on header */}
                      <div className="absolute top-2 right-2 w-14 h-4 bg-white/20 rounded-sm rotate-3"/>
                      <div className={`inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-3`}>
                        <span className="text-white/80 text-xs font-fun font-600">{exp.period}</span>
                      </div>
                      <h2 className="font-fun font-700 text-xl text-white">{exp.role}</h2>
                      <p className="font-fun font-700 text-xl text-mustard-300 tracking-wide">{exp.school}</p>
                      <p className="text-white/70 text-sm mt-1">{exp.location}</p>
                    </div>

                    {/* Card body — faint lines only */}
                    <div className="notebook-paper px-6 py-5">
                      <p className="font-hand text-base italic text-navy-700/70 mb-4 border-l-4 border-current pl-3"
                        style={{borderColor: s.pinColor}}>
                        {exp.classContext}
                      </p>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((r, j) => (
                          <motion.li key={j} variants={fadeUp}
                            className="flex gap-3 text-sm text-navy-800/85 leading-relaxed">
                            <span className="flex-shrink-0 mt-1.5 text-lg" style={{color: s.bulletColor}}>›</span>
                            <span>{r}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[46%]"/>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h2 className="font-fun font-700 text-3xl text-navy-800 mb-2">Skills Toolkit</h2>
            <HandDrawnUnderline color="#f0a500" width={160} className="mx-auto"/>
          </div>

          <div className="corkboard rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label:'Teaching & Pedagogy', emoji:'📚', items: ['Heuristic Visible Thinking','CBSE Framework','Thematic Lesson Planning','Phonics & Early Literacy','Early Numeracy','EVS','Differentiated Instruction','Social-Emotional Learning'] },
                { label:'Creative & Arts', emoji:'🎨', items: ['Art Direction','Dance & Movement','Drama & Storytelling','Display Material Design','Instagram & Facebook Content','Event Materials'] },
                { label:'Interpersonal', emoji:'🤝', items: ['Parent Communication','School Tour Facilitation','Admin Coordination','Team Collaboration','Child Behaviour Guidance'] },
              ].map((group, i) => (
                <div key={i} className={`pinned-card bg-white rounded-2xl p-5 shadow-pin ${['rotate-1','-rotate-1','rotate-2'][i]}`}>
                  <div className="text-3xl mb-2 text-center">{group.emoji}</div>
                  <h3 className="font-fun font-700 text-center text-navy-800 mb-3 text-sm">{group.label}</h3>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {group.items.map((item,j) => (
                      <span key={j} className="text-xs bg-cream-100 border border-cream-300 text-navy-700 rounded-full px-2.5 py-0.5 font-body">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ClassroomBorder className="mt-16 opacity-60"/>
    </div>
  )
}
