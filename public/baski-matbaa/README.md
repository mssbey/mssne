# Baskı ve Matbaa Görselleri — Beklenen Dosya Yapısı

Her baskı hizmeti sayfası, aşağıdaki klasör yapısında görsel arar. Bu dosyalar bulunmadığı sürece
sayfa otomatik olarak marka renkleriyle uyumlu bir yer tutucu (placeholder) görsel gösterir —
site kırık görsel ikonu göstermez. Gerçek ürün fotoğraflarınızı aşağıdaki tam dosya adlarıyla
ilgili klasöre eklediğinizde, görseller otomatik olarak devreye girer (kod değişikliği gerekmez).

**Önerilen format:** `.jpg` — genişlik ≥ 1600px, sıkıştırılmış (WebP/AVIF'e Next.js Image
otomatik dönüştürür).

## kartvizit/
- `hero.jpg` — Sayfa üstü büyük hero görseli
- `gallery-1.jpg` — Kuşe kağıt kartvizit
- `gallery-2.jpg` — Bristol kartvizit yakın çekim
- `gallery-3.jpg` — Yaldız folyo detaylı premium kartvizit
- `gallery-4.jpg` — Kraft kartvizit tasarımı
- `gallery-5.jpg` — Metalize yüzey kartvizit
- `gallery-6.jpg` — Kesim süreci
- `gallery-7.jpg` — Baskı detayı
- `gallery-8.jpg` — Paketleme

## brosur/
- `hero.jpg` — Sayfa üstü büyük hero görseli
- `gallery-1.jpg` — Üç katlı broşür
- `gallery-2.jpg` — Katalog baskı
- `gallery-3.jpg` — Mağaza broşürü
- `gallery-4.jpg` — Turizm broşürü
- `gallery-5.jpg` — Baskı detayı
- `gallery-6.jpg` — Kesim süreci
- `gallery-7.jpg` — Spot UV detay
- `gallery-8.jpg` — Paketleme

## magnet/
- `hero.jpg` — Sayfa üstü büyük hero görseli
- `gallery-1.jpg` — Özel kesim magnet
- `gallery-2.jpg` — Restoran magneti
- `gallery-3.jpg` — Emlak magneti
- `gallery-4.jpg` — Hatıra magneti
- `gallery-5.jpg` — UV baskı detayı
- `gallery-6.jpg` — Kesim süreci
- `gallery-7.jpg` — Laminasyon detayı
- `gallery-8.jpg` — Paketleme

---

Dosya adlarının tam eşleşmesi gerekir (`hero.jpg`, `gallery-1.jpg` … `gallery-8.jpg`).
Kaynak: `lib/baski-matbaa.ts` içindeki `gallery[].alt` alanları.
