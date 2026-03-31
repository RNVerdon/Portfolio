import { motion } from 'framer-motion'
import './css/Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero-noise" />

      <div className="hero-content">
        <motion.p className="hero-greeting" {...fadeUp(0.1)}>
           Hello, good day! I'm
        </motion.p>

        <motion.h1 className="hero-name" {...fadeUp(0.25)}>
          Raven Neil
        </motion.h1>

        <motion.h2 className="hero-tagline" {...fadeUp(0.4)}>
          Aspiring{' '}
          <span className="accent">Software</span>, and{' '}
          <span className="accent">Full-stack</span> Developer.
        </motion.h2>

        <motion.p className="hero-sub" {...fadeUp(0.55)}>
          Mainly focused on React, Node.js, and professional UI.
          Currently open to new opportunities.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.7)}>
          <button className="btn-primary" onClick={scrollToProjects}>
            See My Work
          </button>
          <a
            className="btn-ghost"
            href="/Resume_Verdon.pdf"
            target="_blank"
            rel="noreferrer"
            download="Resume_Verdon.pdf"
          >
            Download Resume ↗
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  )
}
