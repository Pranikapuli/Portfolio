import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { personal, education, experience, skills, resume } from '../data/content'

const TNR = '"Times New Roman", Times, Georgia, serif'

export default function Resume() {
  const resumeRef = useRef(null)
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${personal.name} — Resume`,
  })

  return (
    <div className="min-h-screen pt-20 pb-16 font-body paper-texture">

      {/* Download bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-5 no-print">
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-deep">
          <div>
            <p className="font-fun font-700 text-white text-base md:text-lg flex items-center gap-2">
              <span>✏️</span>
              <span className="font-hand italic text-cream-100">"The best teachers are those who show you where to look but don't tell you what to see."</span>
            </p>
            <p className="text-teal-200 text-xs sm:text-sm mt-0.5 pl-7">— Alexandra K. Trenfor</p>
          </div>
          <button onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-teal-700 rounded-full font-fun font-700 text-sm shadow-pin hover:shadow-deep transition-all whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download / Print PDF
          </button>
        </div>
      </div>

      {/* ── RESUME DOCUMENT — Zaleski format, single page ── */}
      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-deep"
        style={{
          fontFamily: TNR,
          fontSize: '12px',
          lineHeight: '1.6',
          color: '#111',
          padding: '40px 52px',
        }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '6px' }}>
          <h1 style={{
            fontFamily: TNR, fontSize: '26px', fontWeight: '700',
            letterSpacing: '2px', margin: '0 0 6px',
            color: '#000',
          }}>
            {personal.name.toUpperCase()}
          </h1>
          <p style={{ margin: '0 0 2px', color: '#222', fontFamily: TNR, fontSize: '12px' }}>
            {personal.address}
          </p>
          <p style={{ margin: '0', color: '#222', fontFamily: TNR, fontSize: '12px' }}>
            {'Phone: '}
            <a href={`tel:${personal.phone}`}
              style={{ color: '#222', textDecoration: 'underline' }}>
              {personal.phone}
            </a>
            {'  *  Email: '}
            <a href={`mailto:${personal.email}`}
              style={{ color: '#222', textDecoration: 'underline' }}>
              {personal.email}
            </a>
          </p>
          <div style={{ borderBottom: '2px solid #111', marginTop: '10px' }}/>
        </div>

        {/* ── SUMMARY ── */}
        <Section label="SUMMARY">
          <p style={{ margin: '0', fontFamily: TNR, fontSize: '12px' }}>
            {resume.summary}
          </p>
        </Section>

        {/* ── EDUCATION ── */}
        <Section label="EDUCATION">
          {education.map((edu, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: TNR }}>{edu.degree}</span>
                {edu.gpa && <span>GPA {edu.gpa}</span>}
              </div>
              <div style={{ fontFamily: TNR }}>{edu.institution}, {edu.location}</div>
            </div>
          ))}
        </Section>

        {/* ── RELATED EXPERIENCE ── */}
        <Section label="RELATED EXPERIENCE">
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: i < experience.length - 1 ? '14px' : '0' }}>
              {/* Role: School: Location   Date */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                <span style={{ fontFamily: TNR, fontWeight: '700', fontSize: '12px', textDecoration: 'underline' }}>
                  {exp.role}: {exp.school}: {exp.location}
                </span>
                <span style={{ fontSize: '12px', color: '#333', flexShrink: 0 }}>
                  {exp.period}
                </span>
              </div>
              {/* Class context indented */}
              <div style={{ fontFamily: TNR, marginLeft: '18px', fontStyle: 'italic', fontSize: '12px', marginTop: '1px', marginBottom: '3px', color: '#444' }}>
                {exp.classContext}
              </div>
              {/* Bullets */}
              {exp.responsibilities.map((r, j) => (
                <div key={j} style={{ display: 'flex', gap: '8px', marginLeft: '18px', marginBottom: '2px', fontFamily: TNR, fontSize: '12px' }}>
                  <span style={{ flexShrink: 0 }}>-</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          ))}
        </Section>

        {/* ── SKILLS ── */}
        <Section label="SKILLS">
          <p style={{ margin: '0', fontFamily: TNR, fontSize: '12px' }}>
            {[...skills.teaching, ...skills.creative, ...skills.interpersonal].join(', ')}
          </p>
        </Section>

      </div>
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div style={{ marginTop: '14px' }}>
      <div style={{ borderBottom: '1px solid #333', marginBottom: '4px' }}>
        <strong style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '12px', letterSpacing: '0.05em' }}>
          {label}:
        </strong>
      </div>
      {children}
    </div>
  )
}
