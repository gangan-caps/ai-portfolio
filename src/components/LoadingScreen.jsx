import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 1800)
    const removeTimer = setTimeout(() => setVisible(false), 2400)
    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`loading-screen${fading ? ' fade-out' : ''}`}
      data-component="loading-screen"
      aria-label="页面加载中"
     data-qoder-id="qel-loading-screen-5fa63cae" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-loading-screen-5fa63cae&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/LoadingScreen.jsx&quot;,&quot;componentName&quot;:&quot;LoadingScreen&quot;,&quot;elementRole&quot;:&quot;loading-screen&quot;,&quot;loc&quot;:{&quot;line&quot;:19,&quot;column&quot;:5}}">
      <div className="loading-ink-circle" aria-hidden="true"  data-qoder-id="qel-loading-ink-circle-47b38370" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-loading-ink-circle-47b38370&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/LoadingScreen.jsx&quot;,&quot;componentName&quot;:&quot;LoadingScreen&quot;,&quot;elementRole&quot;:&quot;loading-ink-circle&quot;,&quot;loc&quot;:{&quot;line&quot;:24,&quot;column&quot;:7}}"/>
      <span className="loading-name" data-qoder-id="qel-loading-name-c6eba630" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-loading-name-c6eba630&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/LoadingScreen.jsx&quot;,&quot;componentName&quot;:&quot;LoadingScreen&quot;,&quot;elementRole&quot;:&quot;loading-name&quot;,&quot;loc&quot;:{&quot;line&quot;:25,&quot;column&quot;:7}}">王洁</span>
    </div>
  )
}
