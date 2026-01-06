interface ScreenshotProps {
  src: string
  alt: string
  caption?: string
}

export default function Screenshot({ src, alt, caption }: ScreenshotProps) {
  return (
    <figure className="my-6">
      <div className="border border-theme-border-primary rounded-lg overflow-hidden bg-theme-bg-secondary">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect fill="%23f1f5f9" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="system-ui" font-size="24" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EEkran Görüntüsü Yakında%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-theme-text-secondary text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

