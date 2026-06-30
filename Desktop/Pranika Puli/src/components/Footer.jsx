import { Link } from 'react-router-dom'
import { personal } from '../data/content'
import { ClassroomBorder } from './Doodles'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-200 relative overflow-hidden mt-0">
      <ClassroomBorder className="opacity-40" />
      {/* Decorative doodles */}
      <div className="absolute top-4 right-8 text-4xl opacity-20 float-slow">🍎</div>
      <div className="absolute top-8 left-12 text-3xl opacity-15 float-anim">✏️</div>
      <div className="absolute bottom-4 right-24 text-2xl opacity-10">📚</div>

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-fun font-700 text-xl mb-1">
              <span className="text-mustard-300">{personal.name.split(' ')[0]}</span>
              <span className="text-coral-300"> {personal.name.split(' ')[1]}</span>
            </div>
            <p className="text-cream-300 text-sm font-body leading-relaxed">
              Pre-Primary Educator · Hyderabad, India<br/>
              EVS · Math · Language · Arts
            </p>
          </div>
          <div>
            <p className="font-fun font-600 text-mustard-300 text-sm uppercase tracking-wide mb-3">Quick Links</p>
            <div className="grid grid-cols-2 gap-1">
              {[
                ['/', 'Home'],['resume','Resume'],
                ['experience','Experience'],['artwork','Artwork'],
                ['testimonials','Kind Words'],['contact','Connect'],
              ].map(([to,label]) => (
                <Link key={to} to={`/${to === '/' ? '' : to}`}
                  className="text-sm text-cream-300 hover:text-mustard-300 transition-colors font-body">
                  › {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-fun font-600 text-mustard-300 text-sm uppercase tracking-wide mb-3">Contact</p>
            <p className="text-cream-300 text-sm font-body">{personal.email}</p>
            <p className="text-cream-300 text-sm font-body">{personal.phone}</p>
            <p className="text-cream-300 text-sm font-body mt-1">{personal.location}</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 text-center text-xs text-cream-400 font-body">
          © {new Date().getFullYear()} {personal.name} · Made with ❤️ for the love of teaching
        </div>
      </div>
    </footer>
  )
}
