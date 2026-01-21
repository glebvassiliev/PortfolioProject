import { useEffect, useMemo, useRef, useState } from 'react'

type NavItem = {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function FloatingSectionNav() {
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.href.replace('#', '')).filter(Boolean), [])
  const [activeId, setActiveId] = useState<string>('home')
  const isNavigatingRef = useRef(false)
  const navigationTargetRef = useRef<string | null>(null)
  const navigationTargetTopRef = useRef<number | null>(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const getDocTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY
    const computeTops = () => elements.map((el) => ({ id: el.id, top: getDocTop(el) })).sort((a, b) => a.top - b.top)
    let tops = computeTops()

    const computeActive = () => {
      // Use a "top-of-viewport + offset" rule so we don't select the next section prematurely
      // (common when scrollIntoView aligns a section to the top).
      const offset = 120
      const y = window.scrollY + offset

      // Find last section whose top is <= y
      let nextId = tops[0]?.id
      for (const s of tops) {
        if (s.top <= y) nextId = s.id
        else break
      }

      if (!nextId) return

      // During smooth-scroll, keep the indicator on the clicked target until we reach it.
      const targetId = navigationTargetRef.current
      const targetTop = navigationTargetTopRef.current
      if (isNavigatingRef.current && targetId && targetTop != null) {
        const dist = Math.abs(window.scrollY - targetTop)
        if (dist > 16) return
        // reached
        isNavigatingRef.current = false
        navigationTargetRef.current = null
        navigationTargetTopRef.current = null
        nextId = targetId
      }

      setActiveId(nextId)
    }

    // Throttle via rAF to keep scroll smooth.
    let raf = 0
    const onScrollOrResize = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(computeActive)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    const onResize = () => {
      tops = computeTops()
      onScrollOrResize()
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('hashchange', onScrollOrResize)

    // Initial sync (also respects existing hash)
    onScrollOrResize()

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hashchange', onScrollOrResize)
    }
  }, [sectionIds])

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = href.replace('#', '')
    if (!id) return
    e.preventDefault()

    // Update indicator immediately on click.
    setActiveId(id)
    isNavigatingRef.current = true
    navigationTargetRef.current = id

    const el = document.getElementById(id)
    navigationTargetTopRef.current = el ? el.getBoundingClientRect().top + window.scrollY : null
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Release after typical smooth-scroll duration.
    window.setTimeout(() => {
      isNavigatingRef.current = false
      navigationTargetRef.current = null
      navigationTargetTopRef.current = null
    }, 600)
  }

  return (
    <>
      {/* Full rail (desktop) */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative pointer-events-auto">
          {/* Glass panel like your section cards */}
          <div className="glass-effect-blur rounded-[28px] p-3 shadow-2xl shadow-black/25 overflow-visible">
            <nav aria-label="Section shortcuts" className="flex flex-col items-stretch gap-2 w-[92px]">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = id === activeId
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={[
                      'relative w-full px-3 py-2 text-xs font-light tracking-wide text-center',
                      'text-cream/90 hover:text-cream transition-colors rounded-2xl',
                      'hover:bg-white/10',
                      isActive ? 'bg-white/10 text-cream' : '',
                    ].join(' ')}
                  >
                    {/* Active section indicator (outside the glass panel, aligned to this row) */}
                    <span
                      aria-hidden="true"
                      className={[
                        'absolute -left-4 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-sage transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                    />
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mini rail (mobile/tablet): dots only */}
      <div className="lg:hidden fixed left-3 sm:left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative pointer-events-auto">
          <nav
            aria-label="Section shortcuts"
            className="glass-effect-blur rounded-full p-2 shadow-2xl shadow-black/25 flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = id === activeId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  aria-label={item.label}
                  title={item.label}
                  className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className={[
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      isActive ? 'bg-sage' : 'bg-white/25',
                    ].join(' ')}
                  />
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}

