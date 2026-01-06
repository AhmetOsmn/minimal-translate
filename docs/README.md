# Minimal Translate Dokümantasyon

Bu proje, Minimal Translate uygulaması için GitHub Pages'de yayınlanan dokümantasyon sitesidir.

## Geliştirme

### Gereksinimler

- Node.js 18 veya üzeri
- pnpm

### Kurulum

```bash
cd docs
pnpm install
```

### Geliştirme Sunucusu

```bash
pnpm dev
```

Site `http://localhost:5174` adresinde çalışacaktır.

### Build

```bash
pnpm build
```

Build çıktısı `dist/` klasörüne oluşturulacaktır.

### Önizleme

```bash
pnpm preview
```

## GitHub Pages Deployment

Bu proje GitHub Actions ile otomatik olarak deploy edilir. `main` branch'ine push yapıldığında otomatik olarak build edilir ve GitHub Pages'e deploy edilir.

## Yapı

```
docs/
├── public/           # Statik dosyalar
├── src/
│   ├── components/   # Bileşenler
│   ├── pages/        # Sayfalar
│   ├── styles/       # Stiller
│   ├── App.tsx       # Ana uygulama
│   └── main.tsx      # Giriş noktası
├── index.html
└── vite.config.ts    # Vite yapılandırması
```

## Notlar

- Base path `/minimal-translate/` olarak ayarlanmıştır
- Tüm içerik Türkçe'dir
- Dark mode desteği vardır

