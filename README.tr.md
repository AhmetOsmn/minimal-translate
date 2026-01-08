> **🌐 Dil / Language**: Bu sayfa şu dillerde mevcuttur: [Türkçe](https://ahmetosmn.github.io/minimal-translate/README.tr.html) | [English](https://ahmetosmn.github.io/minimal-translate/README.en.html)

# Minimal Translate - Kullanıcı Kılavuzu

Minimal Translate, hızlı, minimal ve güçlü bir masaüstü çeviri uygulamasıdır. Global kısayol ile her yerden anında çeviriye erişin. AI destekli çeviri motorları ile profesyonel sonuçlar alın.

## İçindekiler

- [Genel Bakış](#genel-bakış)
- [Ana Özellikler](#ana-özellikler)
- [Uygulama Ekranları](#uygulama-ekranları)
  - [Çeviri Penceresi](#çeviri-penceresi)
  - [Ayarlar Penceresi](#ayarlar-penceresi)
    - [Nasıl Kullanılır](#nasıl-kullanılır)
    - [AI Modelleri](#ai-modelleri)
    - [API Anahtarları](#api-anahtarları)
    - [Çeviri Ayarları](#çeviri-ayarları)
    - [Kısayol Tuşları](#kısayol-tuşları)
    - [Prompt Ayarları](#prompt-ayarları)
    - [Bildirimler](#bildirimler)
  - [Sidebar Özellikleri](#sidebar-özellikleri)
  - [Sistem Tepsi](#sistem-tepsi)

## Genel Bakış

Minimal Translate arka planda çalışır ve sistem tepsisinde erişilebilir durumda kalır. Global klavye kısayolu ile herhangi bir uygulamadan anında çeviri penceresini açabilir ve metinleri sorunsuz bir şekilde çevirebilirsiniz.

## Ana Özellikler

- **Anında Erişim**: Global kısayol (`Ctrl+Shift+T` / `Cmd+Shift+T`) ile her yerden çeviri penceresini açın
- **Çoklu AI Desteği**: OpenAI (GPT-4, GPT-4o-mini), Google Gemini ve OpenRouter ile yüzlerce modele erişim
- **Otomatik Kopyalama**: Çeviri sonuçları otomatik olarak panoya kopyalanır
- **100+ Dil Desteği**: 100'den fazla hedef dil desteği
- **İyileştirme Modu**: İngilizce çevirileri için otomatik iyileştirme
- **Özel Promptlar**: Kendi çeviri promptlarınızı oluşturun ve kullanın (en fazla 5)
- **Özelleştirilebilir Kısayollar**: İstediğiniz klavye kısayolu kombinasyonunu belirleyin
- **Koyu Tema**: Göz yormayan karanlık tema desteği
- **Çoklu Dil Arayüzü**: İngilizce ve Türkçe arayüz desteği
- **Cross-Platform**: Windows, macOS ve Linux desteği
- **Güvenli Depolama**: API anahtarları sistem güvenli depolama ile şifrelenir

## Uygulama Ekranları

### Çeviri Penceresi

Çeviri penceresi, çevirileri gerçekleştirdiğiniz ana arayüzdür. Global klavye kısayolu kullanılarak her yerden açılabilir.

#### Çeviri Penceresini Açma

- Herhangi bir uygulamadan global kısayol tuşlarına basın (`Ctrl+Shift+T` Windows/Linux'te veya `Cmd+Shift+T` macOS'te)
- Pencere ekranınızın ortasında görünür ve metin girişine odaklanır

#### Çeviri Penceresi Özellikleri

**Metin Giriş Alanı**
- Yazmaya başlamak için metin alanına tıklayın veya odaklanın
- Metni `Ctrl+V` / `Cmd+V` ile yapıştırın
- Textarea yazdıkça otomatik olarak genişler (maksimum 150px yükseklik)

**Model Seçimi**
- Başlıktaki model adı rozetine (örn. "GPT", "Gemini", "OpenRouter") tıklayın
- Açılan dropdown menüde mevcut modeller görünür:
  - **GPT**: OpenAI modelleri
  - **Gemini**: Google Gemini modelleri
  - **OpenRouter**: OpenRouter modelleri
- Çeviri servisini değiştirmek için bir model seçin
- Seçilen model otomatik olarak kaydedilir

**Hedef Dil Göstergesi**
- Model göstergesinin yanında mevcut hedef dil kodu görüntülenir (örn. "EN", "TR", "DE")
- Hedef dil Çeviri Ayarları'ndan belirlenir

**İyileştirme Modu Toggle**
- Başlıkta ✨ simgeli butonu bulun
- Tıklayarak iyileştirme modunu açıp kapatabilirsiniz
- Aktif olduğunda simge bir onay işareti gösterir (✨✓)
- İyileştirme modu İngilizce çevirileri daha iyi dil bilgisi ve ifade için iyileştirir
- Ayar otomatik olarak kaydedilir

**Çeviri İşlemi**
1. Çevirmek istediğiniz metni girin veya yapıştırın
2. Çeviriyi başlatmak için `Enter` tuşuna basın (Shift olmadan)
   - Veya metin girildiğinde görünen Enter tuşu göstergesine tıklayın
3. Çeviri sırasında başlıkta bir yükleme göstergesi görünür
4. Başarı durumunda:
   - Yeşil bir onay işareti görünür
   - "Panoya kopyalandı!" mesajı gösterilir
   - Çeviri otomatik olarak panonuza kopyalanır
   - Pencere 600ms sonra otomatik olarak kapanır
5. Hata durumunda:
   - Kırmızı bir X simgesi görünür
   - Hata mesajı giriş alanının altında gösterilir
   - Hata API anahtarları ile ilgiliyse, Ayarları açmak için bir bağlantı sağlanır

**Ayarlara Erişim**
- Başlığın sağ üst köşesindeki dişli simgesine (⚙️) tıklayın
- Ayarlar penceresini açar
- API anahtarlarına veya diğer ayarlara hızlı erişim için kullanışlıdır

**Pencereyi Kapatma**
- `Escape` tuşuna basın
- Pencere dışına tıklayın
- Başarılı çeviriden sonra pencere otomatik olarak kapanır

#### Çeviri Penceresindeki Klavye Kısayolları

- `Enter`: Çeviriyi başlat (metin girildiğinde)
- `Shift+Enter`: Textarea'da yeni satır ekle
- `Escape`: Çeviri penceresini kapat
- `Ctrl+V` / `Cmd+V`: Metni girişe yapıştır

---

### Ayarlar Penceresi

Ayarlar penceresi, tüm uygulama yapılandırma seçeneklerine erişim sağlar. Sistem tepsi simgesinden veya çeviri penceresinden açılabilir.

#### Ayarları Açma

- Sistem tepsi simgesine sağ tıklayın ve "Ayarlar"ı seçin
- Çeviri penceresindeki dişli simgesine (⚙️) tıklayın
- Ayarlar penceresi sol tarafta sidebar ile açılır

#### Ayarlar Penceresi Yapısı

Ayarlar penceresi şunlardan oluşur:
- **Üst Çubuk**: Sürüklenebilir başlık çubuğu (macOS'te trafik ışığı düğmeleri için alan)
- **Sidebar**: Sol tarafta tüm ayar sayfalarıyla navigasyon menüsü
- **Ana İçerik**: Sağ tarafta sayfa içeriği

---

### Nasıl Kullanılır

Bu, Ayarlar açıldığında varsayılan sayfadır. Minimal Translate'in nasıl kullanılacağına dair hızlı bir kılavuz sağlar.

#### Özellikler

**4 Adımlı Kullanım Kılavuzu**
1. **Kısayolu Kullanın**: Mevcut klavye kısayolunuzu gösterir (örn., `⌘/Ctrl + ⇧ + T`)
2. **Metni Yazın**: Çeviri penceresine metin girişi talimatları
3. **Enter Tuşuna Basın**: Çeviriyi nasıl tetikleyeceğiniz
4. **Yapıştırın**: Panoya kopyalanan çevrilmiş metni nasıl kullanacağınız

**İpuçları Bölümü**
- Çeviri penceresini kapatmak için `ESC` tuşuna basın
- Pencere dışına tıklayarak kapatabilirsiniz
- Çeviri tamamlandığında otomatik olarak panoya kopyalanır
- Kaynak dil otomatik olarak algılanır

---

### AI Modelleri

Bu sayfa, AI çeviri servisini seçmenize ve yapılandırmanıza olanak tanır.

#### Model Seçimi

Üç ana model mevcuttur:

**OpenAI (GPT-4)**
- OpenAI modellerini kullanmak için kartı seçin
- OpenAI API anahtarı gerektirir
- İçin ideal: Bağlamsal çeviri, deyimleri ve nüansları anlama
- Model seçim rozeti: 🤖

**Google Gemini**
- Google Gemini kullanmak için kartı seçin
- Google Gemini API anahtarı gerektirir
- İçin ideal: Gelişmiş AI çeviri, karmaşık metinler için ideal
- Model seçim rozeti: ✨

**OpenRouter**
- OpenRouter kullanmak için kartı seçin
- OpenRouter API anahtarı gerektirir
- İçin ideal: Tek bir API ile birçok AI modeline erişim, ücretsiz modeller mevcut
- Model seçim rozeti: 🌐

#### OpenRouter Model Seçimi

OpenRouter seçildiğinde, ek seçenekler görünür:

**Model Seçici**
- Şu anda seçili modeli gösterir (örn., "openai/gpt-4o-mini")
- Mevcut modelleri görmek için tıklayın
- Modeller OpenRouter API'sinden yüklenir
- Modelleri ada göre filtrelemek için arama çubuğu
- Yalnızca ücretsiz modelleri göstermek için "Ücretsiz" filtresi düğmesi
- Tam listeyi görmek için "Tüm modelleri görüntüle" bağlantısı
- Her model fiyatlandırma durumunu gösterir (Ücretsiz/Ücretli)

**Özel Model ID**
- İstediğiniz model listede yoksa, özel bir model ID girin
- Format: `sağlayıcı/model-adı` (örn., `openai/gpt-4o-mini`)
- Özel modeli kullanmak için "Kaydet"e tıklayın

**İşlemler**
- Model seçimi otomatik olarak kaydedilir
- Başarı mesajı görünür: "Model kaydedildi!"
- Model listesi yüklenemezse, "Tekrar Dene" düğmesi görünür

**Not**
- Seçtiğiniz model için API anahtarınızın API Anahtarları bölümünde tanımlı olduğundan emin olun

---

### API Anahtarları

Bu sayfa, tüm çeviri servisleri için API anahtarlarını yönetmenize olanak tanır. API anahtarları sistem güvenli depolama kullanılarak şifrelenmiş olarak saklanır.

#### API Anahtarı Yönetimi

Her servis için (OpenAI, Gemini, OpenRouter):

**API Anahtarı Girme**
1. Servis için giriş alanına tıklayın
2. API anahtarınızı girin
3. Alan varsayılan olarak maskelenmiş karakterler gösterir (şifre tipi)
4. Görünürlüğü açıp kapatmak için göz simgesine tıklayın

**API Anahtarları Alma**
- Her servis adının yanındaki "API key al" bağlantısına tıklayın
- Tarayıcınızda resmi API anahtarı sayfasını açar:
  - OpenAI: https://platform.openai.com/api-keys
  - Gemini: https://makersuite.google.com/app/apikey
  - OpenRouter: https://openrouter.ai/keys

**API Anahtarlarını Test Etme**
- Giriş alanının yanındaki "Test" düğmesine tıklayın
- Girilen API anahtarıyla bağlantıyı test eder
- Geçerliyse başarı mesajı görünür: "Bağlantı başarılı!"
- Geçersizse veya bağlantı başarısız olursa hata mesajı gösterilir
- Anahtarı değiştirdiğinizde test sonucu temizlenir

**API Anahtarlarını Kaydetme**
- Sağ alttaki "Kaydet" düğmesine tıklayın
- Girilen tüm API anahtarları bir kerede kaydedilir
- Başarı mesajı: "Kaydedildi!" 3 saniye boyunca görünür
- Anahtarlar sistem güvenli depolama (Keychain/Credential Store) kullanılarak şifrelenir

**Güvenlik Notu**
- API anahtarları işletim sisteminizin güvenli depolama sistemi kullanılarak şifrelenir
- Sunucularımıza asla gönderilmez
- Yalnızca çeviri istekleri için yerel olarak kullanılır
- Her platform kendi yerel güvenli depolama sistemini kullanır:
  - macOS: Keychain
  - Windows: Credential Store
  - Linux: Secret Service API

---

### Çeviri Ayarları

Bu sayfa, çeviri davranışını ve hedef dili özelleştirmenize olanak tanır.

#### Hedef Dil Seçimi

**Dil Seçici**
- Üstte arama çubuğu: Dil aramak için yazın
- Dropdown listesi tüm mevcut dilleri gösterir (100+)
- Her dil şunları gösterir:
  - Bayrak emojisi
  - İngilizce dil adı
  - Yerel yazıda dil adı (varsa)
- Hedef olarak ayarlamak için bir dil seçin
- Varsayılan dil İngilizce'dir (EN)

**Popüler Diller**
- Yaygın diller listede kolayca erişilebilir
- Diller alfabetik olarak düzenlenmiştir

#### İyileştirme Modu

**Toggle Düğmesi**
- Başlık şunu gösterir: "[Dil] İyileştirme" (örn., "İngilizce İyileştirme")
- Açıklama özelliği açıklar
- İyileştirme modunu açıp kapatmak için toggle
- Aktif olduğunda:
  - Düğme yeşil gösterge gösterir
  - Durum etiketi "Aktif" gösterir
- Pasif olduğunda:
  - Düğme gri gösterge gösterir
  - Durum etiketi "Pasif" gösterir

**İyileştirme Ne Yapar**
- Aktif olduğunda, seçilen dile yapılan çeviriler iyileştirilir
- AI modeli yalnızca çevirmez, aynı zamanda dil bilgisini ve ifadeyi de iyileştirir
- Daha akıcı, daha doğal çeviriler sağlar

#### Çeviri Örneği

**Örnek Görüntüleme**
- Örnek bir giriş metni gösterir
- Seçilen hedef dilde çeviri sonucunu gösterir
- Hedef dil değiştiğinde otomatik olarak güncellenir
- Çeviri kalitesini anlamanıza yardımcı olur

---

### Kısayol Tuşları

Bu sayfa, çeviri penceresini açmak için global klavye kısayolunu özelleştirmenize olanak tanır.

#### Mevcut Kısayol Görüntüleme

**Aktif Kısayol Kartı**
- Mevcut kısayolunuzu görsel formatta gösterir
- Değiştirici tuşları ve ana tuşu gösterir (örn., `⌘ + ⇧ + T`)
- "Aktif" durum göstergesi ile yeşil onay işareti

#### Kısayol Değiştirme

**Yeni Kısayol Kaydetme**
1. "Yeni Kısayol Belirle" düğmesine tıklayın
2. Kayıt alanı vurgulanır
3. İstediğiniz tuş kombinasyonuna basın:
   - En az bir değiştirici (Ctrl, Cmd, Alt, Shift) içermelidir
   - Düzenli bir tuş içermelidir
   - Örnek: `Ctrl+Shift+T`
4. Basılan tuşlar gerçek zamanlı olarak kayıt alanında görünür
5. Onaylamak için "Kaydet"e tıklayın
6. İptal etmek için "İptal"e tıklayın

**Kısayolu Kaydetme**
- Kayıttan sonra "Kaydet" düğmesine tıklayın
- Kısayol doğrulanır ve kaydedilir
- Başarı mesajı: "Kısayol başarıyla kaydedildi!"
- Global kısayol hemen güncellenir
- Eski kısayol otomatik olarak kayıtsız hale getirilir

**Doğrulama**
- Kısayol en az 2 tuş içermelidir (bir değiştirici + bir tuş)
- Sistem kritik sistem kısayolları ile çakışmaları önler
- Kısayol geçersizse, hata mesajı görünür

#### İpuçları

- En az bir değiştirici tuş (Ctrl, Cmd, Alt, Shift) kullanın
- Sistem kısayolları ile çakışmayan bir kombinasyon seçin
- Önerilen: `Ctrl+Shift+T` veya `Cmd+Shift+T`

---

### Prompt Ayarları

Bu sayfa, özel çeviri promptlarını oluşturmanıza ve yönetmenize olanak tanır. En fazla 5 prompt kaydedebilirsiniz.

#### Prompt Seçimi

**Prompt Listesi**
- Üstte tüm kaydedilmiş promptları gösterir
- Her prompt kartı şunları gösterir:
  - Prompt adı
  - Prompt içeriğinin önizlemesi (ilk 100 karakter)
  - Şu anda aktifse seçili gösterge (onay işareti)
- Seçmek için bir prompt kartına tıklayın
- Seçilen prompt tüm çeviriler için kullanılır
- Varsayılan sistem promptunu kullanmak için "Hiçbiri" seçeneği

#### Prompt Yönetimi

**Yeni Prompt Ekleme**
1. "Yeni Prompt Ekle" düğmesine tıklayın (5'ten az prompt varsa)
2. Modal dialog açılır
3. Prompt adını girin (örn., "Teknik Dokümantasyon")
4. Prompt içeriğini girin (gerçek prompt metni)
5. "Kaydet"e tıklayın
6. Prompt listeye eklenir

**Prompt Düzenleme**
1. Herhangi bir prompt kartındaki düzenle simgesine (kalem) tıklayın
2. Mevcut değerlerle modal dialog açılır
3. Adı veya içeriği değiştirin
4. "Kaydet"e tıklayın
5. Değişiklikler kaydedilir

**Prompt Silme**
1. Herhangi bir prompt kartındaki sil simgesine (çöp kutusu) tıklayın
2. Onay dialogu görünür: "Prompt'u Sil"
3. Onay mesajında prompt adını gösterir
4. Silmek için "Onayla"ya tıklayın (işlem geri alınamaz)
5. İptal etmek için "İptal"e tıklayın

**Limitler**
- Maksimum 5 prompt kaydedilebilir
- Limit ulaşıldığında, "Maksimum 5 prompt kaydedilebilir" mesajı görünür
- Limit ulaşıldığında "Yeni Prompt Ekle" düğmesi devre dışı bırakılır

**Boş Durum**
- Hiç prompt kaydedilmemişse, boş durum mesajı gösterilir
- İlk promptu oluşturmayı teşvik eder

---

### Bildirimler

Bu sayfa, çeviri tamamlanması için bildirim ayarlarını yönetmenize olanak tanır.

#### Bildirim Gönderme

**Toggle Düğmesi**
- Başlık: "Bildirim Gönder"
- Açıklama: "Aktif olduğunda, çeviri tamamlandığında bir bildirim gönderilir."
- Bildirimleri açıp kapatmak için toggle
- Aktif olduğunda:
  - Düğme yeşil gösterge gösterir
  - Durum etiketi "Aktif" gösterir
- Pasif olduğunda:
  - Düğme gri gösterge gösterir
  - Durum etiketi "Pasif" gösterir

#### Bildirim İzni

**İzin Uyarısı**
- Bildirimler etkinse ancak izin verilmemişse, bir uyarı görünür
- Mevcut izin durumunu gösterir:
  - "İzin kontrol ediliyor" (kontrol edilirken)
  - "İzin verildi" (verildiyse)
  - "İzin reddedildi" (reddedildiyse)
  - "Henüz izin verilmedi" (varsayılan)

**İzin Verme**
- "Bildirim Ayarlarını Aç" düğmesine tıklayın
- Uygulama için sistem bildirim ayarlarını açar
- Bildirimleri etkinleştirme talimatları sağlanır:
  1. Sistem Tercihleri'ni açın
  2. Bildirimler bölümüne gidin
  3. Minimal Translate uygulamasını bulun
  4. Bildirimleri etkinleştirin

**Otomatik Kontrol**
- Bildirimler etkin olduğunda izin durumu her 3 saniyede bir otomatik olarak kontrol edilir
- Manuel yenileme olmadan izin durumunu günceller

**İzin Reddedildi Durumu**
- İzin reddedilirse, manuel olarak etkinleştirmek için talimatlar gösterilir
- İzin verilene kadar bildirim gönderilemez

---

### Sidebar Özellikleri

Ayarlar penceresindeki sidebar, navigasyon ve ek kontroller sağlar.

#### Navigasyon Menüsü

**Menü Öğeleri**
- **Nasıl Kullanılır**: Hızlı başlangıç kılavuzu
- **AI Modelleri**: Model seçimi ve yapılandırması
- **API Anahtarları**: API anahtarı yönetimi
- **Çeviri Ayarları**: Dil ve iyileştirme ayarları
- **Kısayol Tuşları**: Kısayol özelleştirmesi
- **Prompt Ayarları**: Özel prompt yönetimi
- **Bildirimler**: Bildirim tercihleri

**Aktif Sayfa Göstergesi**
- Mevcut sayfa sidebar'da vurgulanır
- Herhangi bir menü öğesine tıklayarak o sayfaya gidin

#### Koyu Tema Toggle

**Konum**: Sidebar'ın alt kısmı

**Toggle Düğmesi**
- Koyu modu açıp kapatmak için toggle
- Hem Ayarlar hem de Çeviri pencerelerine uygulanır
- Tercih hemen kaydedilir

#### Dil Toggle

**Konum**: Sidebar'ın alt kısmı, koyu tema toggle'ının üstü

**Dil Seçenekleri**
- İngilizce (EN)
- Türkçe (TR)

**Dil Değiştirme**
- Geçerli dile tıklayarak toggle yapın
- UI dili hemen değişir
- Tercih otomatik olarak kaydedilir
- Tüm menüler, etiketler ve mesajlar seçilen dile güncellenir

---

### Sistem Tepsi

Minimal Translate arka planda çalışır ve sistem tepsisinde (macOS'te menü çubuğu, Windows/Linux'te sistem tepsi) görünür.

#### Tray İkonu

**Görünüm**
- Minimal Translate simgesi sistem tepsisinde görünür
- Uygulama çalışırken simge her zaman görünür
- Uygulama arka planda çalışır (dock/görev çubuğunda görünmez)

#### Sağ Tık Menüsü

Tray simgesine sağ tıklayarak erişin:

**Ayarlar**
- Ayarlar penceresini açar
- Çeviri penceresindeki dişli simgesine tıklamakla aynıdır

**Çıkış**
- Uygulamayı tamamen kapatır
- Tüm pencereler kapanır ve uygulama çıkar

#### İlk Çalıştırma

**Otomatik Ayarlar**
- İlk çalıştırmada, hiç API anahtarı yapılandırılmamışsa, Ayarlar penceresi otomatik olarak açılır
- En az bir API anahtarı yapılandırmanızı ister

---

## Klavye Kısayolları Referansı

### Global Kısayollar

- `Ctrl+Shift+T` (Windows/Linux) / `Cmd+Shift+T` (macOS): Çeviri penceresini aç
  - Ayarlar → Kısayol Tuşları'ndan özelleştirilebilir

### Çeviri Penceresi Kısayolları

- `Enter`: Çeviriyi başlat (metin girildiğinde)
- `Shift+Enter`: Textarea'da yeni satır
- `Escape`: Çeviri penceresini kapat

### Genel Kısayollar

- `Ctrl+V` / `Cmd+V`: Metni yapıştır (metin giriş alanlarında)
- `Ctrl+C` / `Cmd+C`: Metni kopyala (standart sistem kısayolu)

---

## İpuçları ve En İyi Uygulamalar

### Başlangıç

1. **Önce API Anahtarlarını Yapılandırın**: Uygulamayı kullanmadan önce, Ayarlar → API Anahtarları'na gidin ve en az bir API anahtarı ekleyin
2. **API Anahtarlarınızı Test Edin**: API anahtarlarınızın çalıştığını doğrulamak için "Test" düğmesini kullanın
3. **Modelinizi Seçin**: Ayarlar → AI Modelleri'nden ihtiyacınıza en uygun AI modelini seçin

### Verimli Kullanım

- **Kısayolunuzu Hatırlayın**: Varsayılan `Ctrl+Shift+T` / `Cmd+Shift+T`'dir, gerekiyorsa özelleştirin
- **İyileştirme Modunu Kullanın**: İngilizce çevirileri için daha iyi sonuçlar için iyileştirme modunu etkinleştirin
- **Özel Promptlar**: Belirli kullanım durumları için promptlar oluşturun (teknik dokümanlar, günlük konuşmalar, vb.)
- **Hedef Dil**: Çeviri Ayarları'nda en çok kullandığınız hedef dili ayarlayın

### Sorun Giderme

- **Çeviri Başarısız Oluyor**: API anahtarınızın geçerli olduğundan ve yeterli kredi/kota olduğundan emin olun
- **Pencere Açılmıyor**: Klavye kısayolunuzun sistem kısayolları ile çakışmadığını doğrulayın
- **Bildirimler Çalışmıyor**: Sistem ayarlarında bildirim izinlerini verin
- **API Anahtarı Hatası**: Ayarlar → API Anahtarları'na gidin ve API anahtarlarınızı doğrulayın/test edin

---

## Destek

Sorunlar, özellik istekleri veya katkılar için lütfen ziyaret edin:
- **GitHub**: [Issues](https://github.com/AhmetOsmn/minimal-translate/issues)
- **Releases**: [Son Sürüm](https://github.com/AhmetOsmn/minimal-translate/releases/latest)

---

**Ahmet Osman Sezgin tarafından ❤️ ile yapıldı**
