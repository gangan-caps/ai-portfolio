import { useEffect, useRef, useState } from 'react'

/*
 * 水墨雨燕光标 — 直接使用用户提供的水墨画燕子图
 * 头部朝左上 · hover链接/按钮时原位扇翅
 */
export default function BirdCursor() {
  const cursorRef = useRef(null)
  const [isClickable, setIsClickable] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [cursorSrc, setCursorSrc] = useState('/assets/gundam-cursor.png')
  const rafRef = useRef(null)
  const suppressNextClickRef = useRef(false)

  useEffect(() => {
    const prefersTouch =
      window.matchMedia?.('(hover: none), (pointer: coarse)')?.matches ??
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)

    setIsTouchDevice(prefersTouch)
    if (prefersTouch) {
      document.documentElement.classList.remove('has-custom-cursor')
      return
    }

    document.documentElement.classList.add('has-custom-cursor')

    const clickableSelector = 'a, button, [role="button"], input, textarea, select, label'
    const anchorX = 28
    const anchorY = 56
    const cursorSize = 56

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - anchorX}px, ${e.clientY - anchorY}px)`
      }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const clickable = el?.closest(clickableSelector)
      setIsClickable(!!clickable)
    }

    const handlePointerDown = (e) => {
      if (e.button !== 0) return

      const directEl = document.elementFromPoint(e.clientX, e.clientY)
      const directClickable = directEl?.closest(clickableSelector)
      if (directClickable) return

      const left = e.clientX - anchorX
      const top = e.clientY - anchorY
      const points = [
        [left + cursorSize * 0.5, top + cursorSize * 0.35],
        [left + cursorSize * 0.5, top + cursorSize * 0.5],
        [left + cursorSize * 0.5, top + cursorSize * 0.65],
        [left + cursorSize * 0.35, top + cursorSize * 0.5],
        [left + cursorSize * 0.65, top + cursorSize * 0.5],
        [left + cursorSize * 0.5, top + cursorSize * 0.2],
      ]

      for (const [x, y] of points) {
        const el = document.elementFromPoint(x, y)
        const clickable = el?.closest(clickableSelector)
        if (!clickable) continue

        e.preventDefault()
        e.stopPropagation()
        suppressNextClickRef.current = true

        if (typeof clickable.focus === 'function') {
          clickable.focus({ preventScroll: true })
        }

        clickable.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: x,
            clientY: y,
          }),
        )
        return
      }
    }

    const handleClickCapture = (e) => {
      if (!suppressNextClickRef.current) return
      if (!e.isTrusted) return
      suppressNextClickRef.current = false
      e.preventDefault()
      e.stopPropagation()
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('pointerdown', handlePointerDown, { capture: true })
    document.addEventListener('click', handleClickCapture, { capture: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('pointerdown', handlePointerDown, { capture: true })
      document.removeEventListener('click', handleClickCapture, { capture: true })
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <div ref={cursorRef} className="bird-cursor" aria-hidden="true" data-qoder-id="qel-bird-cursor-b6fcc031" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-bird-cursor-b6fcc031&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/BirdCursor.jsx&quot;,&quot;componentName&quot;:&quot;BirdCursor&quot;,&quot;elementRole&quot;:&quot;bird-cursor&quot;,&quot;loc&quot;:{&quot;line&quot;:49,&quot;column&quot;:5}}">
      {/* Inner wrapper: receives flap animation, does NOT override outer positioning */}
      <div className={isClickable ? 'bird-cursor-clickable' : 'bird-cursor-idle'} data-qoder-id="qel-div-1587267b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-1587267b&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/BirdCursor.jsx&quot;,&quot;componentName&quot;:&quot;BirdCursor&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:51,&quot;column&quot;:7}}">
        <img
          src={cursorSrc}
          alt=""
          className="bird-cursor-img"
          draggable={false}
          onError={() => setCursorSrc('/assets/bird-cursor.png')}
         data-qoder-id="qel-bird-cursor-img-79f0efb5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-bird-cursor-img-79f0efb5&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/BirdCursor.jsx&quot;,&quot;componentName&quot;:&quot;BirdCursor&quot;,&quot;elementRole&quot;:&quot;bird-cursor-img&quot;,&quot;loc&quot;:{&quot;line&quot;:52,&quot;column&quot;:9}}"/>
      </div>
    </div>
  )
}
