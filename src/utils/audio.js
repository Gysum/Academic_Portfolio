// Web Audio API synthesizer for clean micro-interaction sound feedback

let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

export function isSoundEnabled() {
  const saved = localStorage.getItem('sound_enabled')
  return saved === 'true' // Muted by default (returns false if null)
}

export function setSoundEnabled(enabled) {
  localStorage.setItem('sound_enabled', enabled ? 'true' : 'false')
}

export function playTick() {
  if (!isSoundEnabled()) return

  try {
    const ctx = getAudioContext()
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    const osc = ctx.createOscillator()
    const gainNode = ctx.createGain()

    osc.connect(gainNode)
    gainNode.connect(ctx.destination)

    // A subtle high-pitched mechanical tick sound
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1000, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.03)

    gainNode.gain.setValueAtTime(0.03, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03)

    osc.start()
    osc.stop(ctx.currentTime + 0.04)
  } catch (error) {
    console.warn('Web Audio playback failed:', error)
  }
}
