import type { Directive } from 'vue'

const observer: IntersectionObserver | null =
  typeof IntersectionObserver === 'undefined'
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.intersectionRatio >= 0.15) {
              entry.target.classList.add('is-revealed')
            } else if (entry.intersectionRatio === 0) {
              entry.target.classList.remove('is-revealed')
            }
          }
        },
        { threshold: [0, 0.15] }
      )


export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add(binding.modifiers.stamp ? 'reveal-stamp' : 'reveal-panel')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    void el.offsetHeight 
    observer?.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}