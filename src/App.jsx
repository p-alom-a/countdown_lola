import { AnimatePresence, motion } from 'motion/react'
import { useCountdown } from './hooks/useCountdown'
import { Bubble, Halftone, SpeedLines, Sparkle, StarBurst } from './components/MangaFX'

const TARGET = new Date('2026-07-28T00:00:00')

const pad = (n, size = 2) => String(n).padStart(size, '0')

function FlipNum({ value, size = 2 }) {
  const str = pad(value, size)
  return (
    <span className="num">
      <AnimatePresence mode="popLayout" initial={false}>
        {str.split('').map((ch, i) => (
          <motion.span
            key={`${i}-${ch}`}
            initial={{ y: '60%', opacity: 0, rotate: -12 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: '-60%', opacity: 0, rotate: 12, position: 'absolute' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            {ch}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  )
}

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET)

  return (
    <div className="stage">
      <Halftone />
      <SpeedLines />

      <Sparkle className="spk-1" size={32} color="#FFD23F" />
      <Sparkle className="spk-2" size={22} color="#FF6FA2" />
      <Sparkle className="spk-3" size={28} color="#6BE4C5" />
      <Sparkle className="spk-4" size={36} color="#FFF8E7" />
      <Sparkle className="spk-5" size={20} color="#FFD23F" />
      <Sparkle className="spk-6" size={26} color="#FF8E2A" />

      <div className="frame">
        <div className="hero">
          <h1 className="title">
            <span>é</span><span>t</span><span>é</span>
            <span className="gap">&nbsp;</span>
            <span>2</span><span>0</span><span>2</span><span>6</span>
          </h1>
          <p className="scribble">en attendant le retour ♡</p>

          <div className="split">
            <figure className="photo-panel">
              <div className="tape tape-tl" />
              <div className="tape tape-br" />
              <img src="/hero.png" alt="" className="photo-img" />
              <StarBurst className="over-photo" color="#FFD23F">
                J-{days}
              </StarBurst>
              <Bubble className="over-photo-bubble">28 juillet !!</Bubble>
            </figure>

            <div className="countdown-side">
              <section className="countdown" aria-label="Compte à rebours">
                <div className="panel">
                  <FlipNum value={days} size={3} />
                  <span className="label">jours</span>
                </div>
                <div className="panel">
                  <FlipNum value={hours} />
                  <span className="label">heures</span>
                </div>
                <div className="panel">
                  <FlipNum value={minutes} />
                  <span className="label">min</span>
                </div>
                <div className="panel">
                  <FlipNum value={seconds} />
                  <span className="label">sec</span>
                </div>
              </section>

              <p className="date">
                <b>28 juillet !!</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
