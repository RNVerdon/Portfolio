import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './css/About.css'

const skills = [
  'React', 'JavaScript', 'Node.js', 'MySQL', 'MariaDB', 'PHP', 'Python', 'Java'
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 className="section-title">A little about myself</h2>
        </FadeIn>

        <div className="about-grid">
          <FadeIn delay={0.15}>
            <div className="about-text">
              <p>
                I'm a full-stack developer with a passion for building products that
                live at the intersection of <strong>great engineering</strong> and{' '}
                <strong>thoughtful design</strong>. I care deeply about the details —
                performance, accessibility, and the little interactions that make an
                interface feel alive.
              </p>
              <p>
                When I'm not coding, you'll find me reading about design systems,
                experimenting with generative art, or exploring other programming technologies to excel my craft.
              </p>
              <p>
                I'm currently based in <strong>Cavite City, 4100 Cavite, Philippines</strong> and open to remote
                or hybrid roles.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="about-skills">
              <p className="skills-label">Technologies I work with</p>
              <ul className="skills-grid">
                {skills.map(skill => (
                  <li key={skill} className="skill-pill">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
