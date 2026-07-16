# Hizmet Görselleri — Beklenen Dosya Yapısı

Her hizmet sayfası, aşağıdaki klasör yapısında görsel arar. Bu dosyalar bulunmadığı sürece
sayfa otomatik olarak marka renkleriyle uyumlu bir yer tutucu (placeholder) görsel gösterir —
site kırık görsel ikonu göstermez. Gerçek proje fotoğraflarınızı aşağıdaki tam dosya adlarıyla
ilgili klasöre eklediğinizde, görseller otomatik olarak devreye girer (kod değişikliği gerekmez).

**Önerilen format:** `.jpg` — genişlik ≥ 1600px, sıkıştırılmış (WebP/AVIF'e Next.js Image
otomatik dönüştürür).

## kutu-harf/
- `hero.jpg` — Sayfa üstü büyük hero görseli (krom kutu harf cephe)
- `gallery-1.jpg` — Pastane cephesinde ışıklı kutu harf tabela uygulaması
- `gallery-2.jpg` — Krom kaplama kutu harf tabela uygulaması
- `gallery-3.jpg` — Gece LED ışıklı kutu harf tabela
- `gallery-4.jpg` — Mağaza cephesinde ışıklı pleksi kutu harf tabela
- `gallery-5.jpg` — Ofis iç mekânında ışıklı kutu harf logo tabela
- `gallery-6.jpg` — Restoran cephesinde ışıklı kutu harf tabela
- `gallery-7.jpg` — Kutu harf tabela montaj süreci, vinç ile kurulum
- `gallery-8.jpg` — Kutu harf içi LED modül ve trafo detay görüntüsü
- `gallery-9.jpg` — Paslanmaz krom kutu harf tabela yakın çekim detay
- `gallery-10.jpg` — Restoran cephesinde ışıklı kutu harf marka logosu
- `gallery-11.jpg` — Alüminyum statik boyalı kutu harf tabela
- `gallery-12.jpg` — Cephede krom kutu harf tabela uygulaması

## isikli-isiksiz-tabela/
- `hero.jpg` — Sayfa üstü büyük hero görseli (örn. gece ışıklı tabela)
- `gallery-1.jpg` — Cadde üzerinde ışıklı kutu tabela uygulaması
- `gallery-2.jpg` — Gece LED ışıklı tabela çekimi
- `gallery-3.jpg` — Cafe cephesinde ışıklı tabela uygulaması
- `gallery-4.jpg` — Işıksız tabela dijital baskı yakın çekim
- `gallery-5.jpg` — Ofis binası içi yönlendirme tabelası
- `gallery-6.jpg` — Poliklinik giriş ışıklı tabelası
- `gallery-7.jpg` — Işıklı tabela cephe montaj süreci
- `gallery-8.jpg` — Işıklı tabela iç LED modül detayı

## kompozit-tabela/
- `hero.jpg` — Sayfa üstü büyük hero görseli (örn. ACP cephe kaplama)
- `gallery-1.jpg` — Alüminyum kompozit panel ile kaplanmış bina cephesi
- `gallery-2.jpg` — Kompozit tabela kesim ve uygulama detayı
- `gallery-3.jpg` — Kompozit panel üzerine UV baskı yakın çekim
- `gallery-4.jpg` — Plaza cephesinde kompozit tabela ve kaplama
- `gallery-5.jpg` — Mağaza cephesinde kompozit panel kaplama
- `gallery-6.jpg` — Kompozit panel cephe montaj süreci
- `gallery-7.jpg` — Kompozit panel farklı renk ve doku seçenekleri
- `gallery-8.jpg` — CNC ile kesilmiş kompozit panel logo detayı

## totem/
- `hero.jpg` — Sayfa üstü büyük hero görseli (örn. benzin istasyonu totemi)
- `gallery-1.jpg` — Benzin istasyonu girişinde yüksek totem tabela
- `gallery-2.jpg` — Ana yol kenarında reklam totemi
- `gallery-3.jpg` — Gece LED aydınlatmalı totem tabela
- `gallery-4.jpg` — Oto galeri girişinde marka totemi
- `gallery-5.jpg` — AVM giriş yolunda yönlendirme totemi
- `gallery-6.jpg` — Totem çelik konstrüksiyon üretim aşaması
- `gallery-7.jpg` — Totem tabela vinç ile dikey montaj süreci
- `gallery-8.jpg` — Totem beton temel ve ankraj çalışması

## cephe-giydirme/
- `hero.jpg` — Sayfa üstü büyük hero görseli (örn. kurumsal bina cephesi)
- `gallery-1.jpg` — Alüminyum kompozit panel ile kaplanmış kurumsal bina cephesi
- `gallery-2.jpg` — Modern cam cephe sistemi uygulaması
- `gallery-3.jpg` — Bina cephesinde kompozit panel kaplama detayı
- `gallery-4.jpg` — Plaza binası cephe giydirme uygulaması
- `gallery-5.jpg` — Cephe giydirme iskele kurulumu ve montaj süreci
- `gallery-6.jpg` — Cephe giydirme alüminyum alt yapı profil detayı
- `gallery-7.jpg` — Cephe panel derz ve su yalıtım detayı
- `gallery-8.jpg` — Gece aydınlatmalı cephe giydirme görünümü

---

Dosya adlarının tam eşleşmesi gerekir (`hero.jpg`, `gallery-1.jpg` … `gallery-8.jpg`).
Kaynak: `lib/services.ts` içindeki `gallery[].alt` alanları.
