import { useState, useEffect, useCallback, useRef } from 'react'

/* Placeholder images with labeled areas */
const defaultImages = [
  { id: 1, label: '作品展示图 1', alt: 'Placeholder — 请替换为实际作品图片' },
  { id: 2, label: '作品展示图 2', alt: 'Placeholder — 请替换为实际作品图片' },
  { id: 3, label: '作品展示图 3', alt: 'Placeholder — 请替换为实际作品图片' },
  { id: 4, label: '作品展示图 4', alt: 'Placeholder — 请替换为实际作品图片' },
]

function PlaceholderBlock({ label, className, ...qoderProps }) {
  return (
    <div className={`placeholder-img ${className || ''}`} style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
      <span data-qoder-id="qel-span-b9c2071c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-b9c2071c&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;PlaceholderBlock&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:14,&quot;column&quot;:7}}">{label}</span>
    </div>
  )
}

export default function ImageGallery({ images = defaultImages, ...qoderProps }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const galleryRef = useRef(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(-1)
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }, [images.length])
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex < 0) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div data-component="image-gallery" ref={galleryRef} data-qoder-id="qel-image-gallery-7f956e25" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-image-gallery-7f956e25&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;image-gallery&quot;,&quot;loc&quot;:{&quot;line&quot;:44,&quot;column&quot;:5}}" style={qoderProps?.style} className={qoderProps?.className}>
      <div className="gallery-grid" data-qoder-id="qel-gallery-grid-8bad53ff" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-gallery-grid-8bad53ff&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;gallery-grid&quot;,&quot;loc&quot;:{&quot;line&quot;:45,&quot;column&quot;:7}}">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            aria-label={`查看${img.label}`}
           data-qoder-id="qel-gallery-item-880d9647" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-gallery-item-880d9647&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;gallery-item&quot;,&quot;loc&quot;:{&quot;line&quot;:47,&quot;column&quot;:11}}">
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onLoad={(e) => e.target.classList.add('loaded')}
               data-qoder-id="qel-img-4e2fa7a7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-4e2fa7a7&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:57,&quot;column&quot;:15}}"/>
            ) : (
              <PlaceholderBlock label={img.label}  data-qoder-id="qel-placeholderblock-f5b2c3e0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-placeholderblock-f5b2c3e0&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;placeholderblock&quot;,&quot;loc&quot;:{&quot;line&quot;:64,&quot;column&quot;:15}}"/>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-label="图片查看" data-qoder-id="qel-div-434c3d99" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-434c3d99&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:71,&quot;column&quot;:9}}">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="关闭" data-qoder-id="qel-button-3c63b54e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-button-3c63b54e&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;button&quot;,&quot;loc&quot;:{&quot;line&quot;:72,&quot;column&quot;:11}}">✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="上一张" data-qoder-id="qel-button-fee24af2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-button-fee24af2&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;button&quot;,&quot;loc&quot;:{&quot;line&quot;:73,&quot;column&quot;:11}}">‹</button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="下一张" data-qoder-id="qel-button-ffe24c85" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-button-ffe24c85&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;button&quot;,&quot;loc&quot;:{&quot;line&quot;:74,&quot;column&quot;:11}}">›</button>
          <div onClick={(e) => e.stopPropagation()} data-qoder-id="qel-div-a21666c4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-a21666c4&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:75,&quot;column&quot;:11}}">
            {images[lightboxIndex].src ? (
              <img src={images[lightboxIndex].src} alt={images[lightboxIndex].alt}  data-qoder-id="qel-img-38fd61e7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-38fd61e7&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:77,&quot;column&quot;:15}}"/>
            ) : (
              <div style={{ width: '60vw', maxWidth: 600, aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--seed-surface-muted)', borderRadius: 'var(--seed-radius)', color: 'var(--fg-muted)', fontSize: 16 }} data-qoder-id="qel-div-a016639e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-a016639e&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ImageGallery.jsx&quot;,&quot;componentName&quot;:&quot;ImageGallery&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:79,&quot;column&quot;:15}}">
                {images[lightboxIndex].label} — 大图预览
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
