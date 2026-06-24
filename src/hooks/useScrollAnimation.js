import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Draws a vertical line progressively as the user scrolls through a ref'd container.
// Pass refs to the scroll container and the line element to animate (scaleY 0 -> 1).
export function useScrollDrawLine(containerRef, lineRef) {
  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(lineRef.current, { scaleY: self.progress })
      },
    })

    return () => trigger.kill()
  }, [containerRef, lineRef])
}

// Generic fade/slide-in for a list of elements with a stagger — used sparingly,
// not on every section, so motion stays purposeful rather than uniform.
export function useStaggerReveal(containerRef, selector, options = {}) {
  useEffect(() => {
    if (!containerRef.current) return
    const els = containerRef.current.querySelectorAll(selector)
    if (!els.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        els,
        { opacity: 0, y: options.y ?? 24 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          stagger: options.stagger ?? 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, selector, options])
}
