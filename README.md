# Minimal Translate

Hızlı, minimal ve güçlü bir masaüstü çeviri uygulaması. Global kısayol ile her yerden anında çeviriye erişin. AI destekli çeviri motorları ile profesyonel sonuçlar alın.

Minimal Translate, günlük iş akışınızı bozmadan hızlı ve doğru çeviriler yapmanızı sağlar. Sistem tepsisinde arka planda çalışır ve global kısayol tuşu ile her zaman erişilebilir durumdadır.

## İçindekiler

- [Özellikler](#özellikler)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [İndirme](#indirme)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Ayarlar](#ayarlar)
- [API Anahtarları](#api-anahtarları)
- [Geliştirme](#geliştirme)
- [Teknolojiler](#teknolojiler)
- [Lisans](#lisans)

## Özellikler

### Çeviri Özellikleri

- 🚀 **Anında Erişim**: Global kısayol tuşu (`Ctrl+Shift+T` / `Cmd+Shift+T`) ile her yerden çeviri penceresini açın
- 🤖 **Çoklu AI Desteği**: OpenAI (GPT-4, GPT-4o-mini), Google Gemini ve OpenRouter üzerinden yüzlerce model desteği
- 📋 **Otomatik Kopyalama**: Çeviri tamamlandığında sonuç otomatik olarak panoya kopyalanır
- 🌍 **Hedef Dil Seçimi**: 100+ dil desteği ile istediğiniz dile çeviri yapın
- ✨ **İyileştirme Modu**: İngilizce çevirileri için otomatik iyileştirme özelliği
- 📝 **Özel Promptlar**: Kendi çeviri promptlarınızı oluşturun ve kullanın (5'e kadar özel prompt)

### Kullanıcı Deneyimi

- ⚙️ **Özelleştirilebilir Kısayollar**: İstediğiniz kısayol tuş kombinasyonunu belirleyin
- 🎨 **Dark Mode**: Göz yormayan karanlık tema desteği
- 🌐 **Çoklu Dil Arayüzü**: İngilizce ve Türkçe arayüz desteği
- 🖥️ **Cross-Platform**: Windows, macOS ve Linux desteği
- 📱 **Sistem Tepsi Entegrasyonu**: Arka planda çalışır, sistem tepsisinden erişilebilir
- 🔒 **Güvenli API Anahtarları**: API anahtarlarınız sistem güvenli depolama ile şifrelenir

### Teknik Özellikler

- ⚡ **Hızlı Başlatma**: Electron tabanlı, optimize edilmiş performans
- 💾 **Yerel Veri Depolama**: Ayarlarınız yerel olarak saklanır
- 🔄 **Pencere Yönetimi**: Son konumda açılma desteği
- 🎯 **Odak Yönetimi**: Otomatik odaklanma ile hızlı kullanım

## Ekran Görüntüleri

> **Not**: Ekran görüntüleri yakında eklenecektir. Uygulama arayüzünü görmek için [GitHub Releases](https://github.com/AhmetOsmn/minimal-translate/releases/latest) sayfasından indirip deneyebilirsiniz.

<!-- 
Screenshot veya GIF'leri buraya ekleyebilirsiniz:
![Ana Ekran](screenshots/main.png)
![Ayarlar](screenshots/settings.png)
-->

## İndirme

En son sürümü [GitHub Releases](https://github.com/AhmetOsmn/minimal-translate/releases/latest) sayfasından indirebilirsiniz.

### Platform Bazlı İndirme

#### Windows

- **Installer (NSIS)**: `Minimal Translate Setup *.exe` dosyasını indirin ve kurulum sihirbazını takip edin
- **Portable**: `Minimal Translate *.exe` dosyasını indirin, kurulum gerektirmez

[GitHub Releases](https://github.com/AhmetOsmn/minimal-translate/releases/latest) sayfasından Windows sürümünü indirin.

#### macOS

- **Disk Image (DMG)**: `Minimal Translate-*-*.dmg` dosyasını indirin
- DMG dosyasını açın ve uygulamayı Applications klasörüne sürükleyin

[GitHub Releases](https://github.com/AhmetOsmn/minimal-translate/releases/latest) sayfasından macOS sürümünü indirin.

#### Linux

- **AppImage**: Evrensel Linux formatı, kurulum gerektirmez
- **Debian Package (DEB)**: Debian/Ubuntu tabanlı sistemler için

[GitHub Releases](https://github.com/AhmetOsmn/minimal-translate/releases/latest) sayfasından Linux sürümünü indirin.

> **Not**: Tüm platformlar için tüm sürümleri görmek için [releases sayfasını](https://github.com/AhmetOsmn/minimal-translate/releases) ziyaret edin.

## Kurulum

### Kullanıcı Kurulumu

1. Yukarıdaki [İndirme](#indirme) bölümünden platformunuza uygun dosyayı indirin
2. İndirilen dosyayı açın ve kurulum talimatlarını takip edin
3. Uygulamayı başlatın ve sistem tepsisindeki ikona tıklayarak ayarları yapın

### Geliştirici Kurulumu

#### Gereksinimler

- Node.js 18 veya üzeri
- pnpm (paket yöneticisi)

#### Adımlar

```bash
# Depoyu klonlayın
git clone https://github.com/AhmetOsmn/minimal-translate.git
cd minimal-translate

# Bağımlılıkları yükleyin
pnpm install

# Geliştirme modunda çalıştırın (ilk terminal)
pnpm dev

# Electron uygulamasını başlatın (ikinci terminal)
pnpm start
```

### Build

```bash
# Tüm platformlar için build
pnpm dist

# Belirli platformlar için build
pnpm dist:mac    # macOS
pnpm dist:win    # Windows
pnpm dist:linux  # Linux
```

Build çıktıları `release/` dizininde oluşturulacaktır.

## Kullanım

### Hızlı Başlangıç

1. **Kısayol Tuşu**: Varsayılan olarak `Ctrl+Shift+T` (Windows/Linux) veya `Cmd+Shift+T` (macOS) tuşlarına basın
2. **Metni Girin**: Açılan pencereye çevirmek istediğiniz metni yazın veya yapıştırın
3. **Çevir**: Enter tuşuna basın veya çeviri butonuna tıklayın
4. **Kullan**: Çeviri otomatik olarak panoya kopyalanır, istediğiniz yere `Ctrl+V` / `Cmd+V` ile yapıştırabilirsiniz

### İpuçları

- **Kısayol Değiştirme**: Sistem tepsisindeki ikona sağ tıklayın ve "Ayarlar"ı seçin, "Kısayol Tuşları" bölümünden özelleştirin
- **Model Seçimi**: Çeviri penceresinde model seçiciyi kullanarak farklı AI modelleri arasında geçiş yapabilirsiniz
- **Pencereyi Kapatma**: `Escape` tuşuna basarak çeviri penceresini kapatabilirsiniz
- **Ayarlara Erişim**: Sistem tepsisindeki ikona tıklayarak ayarlar paneline erişebilirsiniz

## Ayarlar

Sistem tepsisindeki ikona tıklayarak ayarlar paneline erişebilirsiniz. Ayarlar paneli aşağıdaki bölümleri içerir:

### AI Modelleri

- **OpenAI**: GPT-4, GPT-4o-mini ve diğer OpenAI modelleri
- **Google Gemini**: Gemini Pro ve diğer Gemini modelleri
- **OpenRouter**: Yüzlerce farklı AI modeline erişim (Claude, Llama, Mistral, vb.)

Kullanmak istediğiniz çeviri servisini seçin. OpenRouter için özel model seçimi yapabilirsiniz.

### API Anahtarları

Her çeviri servisi için API anahtarı gereklidir. API anahtarlarınız güvenli bir şekilde şifrelenerek saklanır. Detaylar için [API Anahtarları](#api-anahtarları) bölümüne bakın.

### Çeviri Ayarları

- **Hedef Dil**: Çevirilerin yapılacağı hedef dili seçin (100+ dil desteği)
- **İyileştirme Modu**: İngilizce çevirileri için otomatik iyileştirme özelliğini açın/kapatın
- **Özel Promptlar**: Kendi çeviri promptlarınızı oluşturun (en fazla 5 adet)

### Kısayol Tuşları

Varsayılan kısayol `CommandOrControl+Shift+T`'dir. İstediğiniz kısayol kombinasyonunu belirleyebilirsiniz.

### Görünüm

- **Dark Mode**: Karanlık tema desteğini açın/kapatın
- **Arayüz Dili**: İngilizce veya Türkçe arayüz seçimi

## API Anahtarları

Her çeviri servisi için geçerli bir API anahtarı gereklidir. API anahtarlarınız sistem güvenli depolama kullanılarak şifrelenir ve güvenli bir şekilde saklanır.

### OpenAI

1. [OpenAI Platform](https://platform.openai.com/api-keys) sayfasına gidin
2. Giriş yapın veya hesap oluşturun
3. "Create new secret key" butonuna tıklayın
4. Oluşturulan API anahtarını kopyalayın ve uygulamaya yapıştırın

**Not**: OpenAI API kullanımı ücretlidir. Fiyatlandırma için [OpenAI Pricing](https://openai.com/pricing) sayfasını ziyaret edin.

### Google Gemini

1. [Google AI Studio](https://makersuite.google.com/app/apikey) sayfasına gidin
2. Google hesabınızla giriş yapın
3. "Create API Key" butonuna tıklayın
4. Oluşturulan API anahtarını kopyalayın ve uygulamaya yapıştırın

**Not**: Gemini API'nin ücretsiz kullanım kotası vardır. Detaylar için [Google AI Studio](https://makersuite.google.com/app/apikey) sayfasını ziyaret edin.

### OpenRouter

1. [OpenRouter](https://openrouter.ai/) sayfasına gidin
2. Giriş yapın veya hesap oluşturun
3. [API Keys](https://openrouter.ai/keys) sayfasına gidin
4. "Create Key" butonuna tıklayın
5. Oluşturulan API anahtarını kopyalayın ve uygulamaya yapıştırın

**Not**: OpenRouter farklı modeller için farklı fiyatlandırma kullanır. Bazı modeller ücretsizdir. Detaylar için [OpenRouter Pricing](https://openrouter.ai/docs/pricing) sayfasını ziyaret edin.

## Geliştirme

### Proje Yapısı

```
minimal-translate/
├── src/
│   ├── main/           # Electron main process
│   │   ├── index.ts    # Ana uygulama dosyası
│   │   ├── preload.ts  # Preload script
│   │   ├── translator.ts # Çeviri motoru
│   │   └── tray-icon.ts # Sistem tepsi ikonu
│   └── renderer/       # Electron renderer process
│       ├── translate/  # Çeviri penceresi
│       ├── settings/   # Ayarlar paneli
│       ├── i18n/       # Çeviri dosyaları
│       └── styles/     # Stil dosyaları
├── assets/             # Uygulama varlıkları
└── package.json        # Proje yapılandırması
```

### Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Teknolojiler

Minimal Translate aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

- **Electron** - Cross-platform masaüstü uygulama framework'ü
- **React** - Kullanıcı arayüzü kütüphanesi
- **TypeScript** - Tip güvenli JavaScript
- **Vite** - Hızlı build tool ve dev server
- **Tailwind CSS** - Utility-first CSS framework
- **electron-store** - Electron uygulamaları için basit veri persistansı
- **i18next** - Uluslararasılaştırma (i18n) framework'ü
- **Axios** - HTTP client

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

**Yapımcı**: Ahmet Osman Sezgin

**GitHub**: [@AhmetOsmn](https://github.com/AhmetOsmn)

**Sorun Bildirimi**: [Issues](https://github.com/AhmetOsmn/minimal-translate/issues)

**Özellik İsteği**: [Feature Requests](https://github.com/AhmetOsmn/minimal-translate/issues/new)
