import type { Article } from "../types";

export const livePhotosStorageIphone: Article = {
  slug: "live-photos-storage-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "Live Photo'lar iPhone'da Daha Fazla Yer Kaplar mı? Yalnızca Fotoğrafı Tutma",
      metaDescription:
        "Her Live Photo, çoğu zaman fotoğraftan büyük kısa bir video taşır. Live'ı kapatmak neden yer açmaz, yalnızca fotoğraf nasıl tutulur ve birikme nasıl durdurulur?",
      subtitle:
        "Bir Live Photo'nun içinde ne var, akla ilk gelen anahtar neden yer açmaz ve gerçekten açan yollar",
      intro: [
        "Kısa cevap: evet. Bir Live Photo, durağan bir görüntü ile deklanşöre basmadan hemen önceki ve sonraki anları içeren yaklaşık üç saniyelik kısa bir videodur. Bu video çoğu zaman fotoğrafın kendisinden büyüktür; bu yüzden Live Photo'lardan oluşan bir kitaplık, aynı resimlerin durağan hâlinin kabaca iki katı yer kaplayabilir. Fotoğraf düzenleyicide Live'a dokunup kapatmak işe yaramaz, çünkü yeniden açabilmeniz için video dosyada kalır.",
        "Bu rehber bir Live Photo'nun neler içerdiğini, yerleşik anahtarın neden yer açmadığını, Fotoğraflar uygulamasıyla ya da iPhone için DiskMop'la yalnızca fotoğrafı nasıl tutacağınızı ve sevdiklerinizi kaybetmeden yeni Live Photo'ların birikmesini nasıl durduracağınızı anlatıyor.",
      ],
      keyTakeaways: [
        "Bir Live Photo durağan bir görüntü ve yaklaşık üç saniyelik bir video saklar; video kısmı çoğu zaman toplam boyutun yarısından fazlasıdır.",
        "Fotoğraf düzenleyicide Live'ı kapatmak geri alınabilir; video dosyada kalır ve hiç yer açılmaz.",
        "Fotoğraflar, Çoğalt ile bir Live Photo'nun durağan kopyasını oluşturabilir, ama siz silene kadar özgün kalır; yani iki kez temizlik yapmanız gerekir.",
        "DiskMop'un Araçlar bölümü seçili Live Photo'ları tek adımda durağan fotoğrafa çevirir; tarih, konum, favori durumu ve albümler korunur, özgünler Son Silinenler'e taşınır.",
        "Daha az Live Photo çekmek için Kamera'da Live'ı kapatın ve kapalı kalması için Ayarlar > Kamera > Ayarları Koru > Live Photo'yu açın.",
        "Alan ancak Son Silinenler boşaltılınca, en geç 30 gün sonra geri gelir.",
      ],
      dataTable: {
        caption: "Bir Live Photo'nun video kısmına ne olur",
        columns: ["İşlem", "Video kaldırılır mı?", "Açılan alan"],
        rows: [
          [
            "Düzenle'de Live'a dokunup kapatmak",
            "Hayır, yeniden açılabilir",
            "Yok",
          ],
          [
            "Durağan fotoğraf olarak çoğaltmak",
            "Yalnızca yeni kopyada",
            "Özgün silinene kadar yok",
          ],
          [
            "DiskMop'ta yalnızca fotoğrafı tutmak",
            "Evet, özgün Son Silinenler'e gider",
            "Son Silinenler boşaltılınca her Live Photo'nun yaklaşık %60'ı",
          ],
          [
            "Live Photo'yu silmek",
            "Evet, fotoğrafla birlikte",
            "Son Silinenler boşaltılınca tamamı",
          ],
        ],
      },
      howTo: {
        name: "iPhone'da Live Photo'ların yalnızca fotoğrafını tutma",
        totalTime: "PT10M",
        steps: [
          {
            name: "Kaç Live Photo'nuz olduğunu görün",
            text: "Fotoğraflar'da Albümler > Ortam Türleri > Live Photo'lar'ı açın. DiskMop'un ana ekranındaki depolama dağılımı, Live Photo'ların toplamda ne kadar yer kapladığını gösterir.",
          },
          {
            name: "Düzleştirilecekleri seçin",
            text: "DiskMop'ta Araçlar'ı açın ve kitaplığınızdan Live Photo'lar'ı seçin. Hareketine ihtiyacınız olmayan fotoğrafları işaretleyin; sizin yerinize hiçbir şey seçilmez.",
          },
          {
            name: "Yalnızca fotoğrafı tutun",
            text: "Yalnızca fotoğrafı tut'a dokunun. DiskMop her birini tarihi, konumu, favori durumu ve albümleriyle durağan bir fotoğraf olarak kaydeder; iOS özgünlerin Son Silinenler'e taşınması için bir kez onay ister.",
          },
          {
            name: "Yeni Live Photo'ları durdurun",
            text: "Kamera'da Live düğmesine dokunup kapatın. Ardından kameranın seçiminizi hatırlaması için Ayarlar > Kamera > Ayarları Koru > Live Photo'yu açın.",
          },
          {
            name: "Son Silinenler'i boşaltın",
            text: "Fotoğraflar > Albümler > Son Silinenler'i açın, alanı hemen geri almak için Seç'e ve Tümünü Sil'e dokunun.",
          },
        ],
      },
      sections: [
        {
          title: "Bir Live Photo'nun İçinde Ne Var",
          content: [
            "Live açıkken iPhone kamerası deklanşöre basmadan önce ve sonra bir an kayda devam eder. Sonuç bir çift olarak kaydedilir: durağan bir görüntü ve sesli, yaklaşık üç saniyelik kısa bir video. Fotoğraflar bunları tek öğe olarak gösterir; hareketi görmek için basılı tutarsınız.",
            "Bu video küçük değildir. Kameraya ve sahneye göre çoğu zaman birkaç megabayttır ve bu, Live Photo'nun toplam boyutunun yarısından fazlasıdır. DiskMop'un ölçümlerinde video kısmı genellikle boyutun yaklaşık %60'ıdır. Bu yüzden binlerce Live Photo'dan oluşan bir kitaplık, neredeyse hiç oynatılmayan üç saniyelik kliplerden birkaç gigabayt barındırabilir.",
            "Yeni iPhone'larda Live Photo varsayılan olarak açıktır; bu yüzden çoğu kitaplıkta sahiplerinin sandığından çok daha fazlası vardır. Fotoğraflar uygulamasında Albümler > Ortam Türleri > Live Photo'lar hepsini listeler.",
          ],
        },
        {
          title: "Live'ı Kapatmak Neden Yer Açmaz",
          content: [
            "Akla ilk gelen yol bir Live Photo'yu açıp Düzenle'ye ve kapatmak için Live düğmesine dokunmaktır. Fotoğraf artık durağan gibi davranır. Ama Fotoğraflar'da düzenleme yıkıcı değildir: her değişikliği geri alabilmeniz için özgün saklanır ve buna video da dahildir. Sonra yeniden Live'a dokunursanız hareket geri gelir; yani dosyadan hiç çıkmamıştır.",
            "Fotoğraflar uygulamasında gerçek bir durağan fotoğraf oluşturan ikinci bir seçenek vardır. Bir ya da daha fazla Live Photo seçin, Daha Fazla menüsünü açın ve Çoğalt'ı seçin; Live Photo'lar için bunları durağan fotoğraf olarak çoğaltmayı önerir. Yeni kopyaların videosu yoktur, ama özgünler yerinde durur; sonra onları bulup silmeniz ve ardından Son Silinenler'i boşaltmanız gerekir.",
            "Bir avuç fotoğraf için bu iyidir. Yüzlercesi için iki kez, bir kez çoğaltmak ve bir kez doğru özgünleri silmek için uğraşmak tam da hiç yapılmayan türden bir iştir.",
          ],
        },
        {
          title: "DiskMop'la Yalnızca Fotoğrafı Tutmak",
          content: [
            "iPhone için DiskMop iki adımı birden yapar. Araçlar'daki Live Photo'lar listesi kitaplığınızdaki Live Photo'ları gösterir; hareketine ihtiyacınız olmayanları seçin ve Yalnızca fotoğrafı tut'a dokunun. DiskMop her biri için durağan bir fotoğraf kaydeder ve özgün Live Photo'yu Son Silinenler'e taşır; iOS onayını her fotoğraf için ayrı ayrı değil, tüm grup için bir kez ister.",
            "Yeni fotoğraf önemli olanı korur: özgün tarihi ve konumu, favori ve gizli durumunu ve albümlerinizdeki yerini; böylece tam olarak Live Photo'nun durduğu yerde görünür. Fotoğrafa yaptığınız kırpma ya da filtre gibi düzenlemeler göründükleri hâliyle korunur. Herhangi bir fotoğraf için durağan kopya oluşturulamazsa o özgün silinmez; tek kopya asla kaldırılmaz.",
            "Düzleştirme, fotoğraf ve video küçültmeyle birlikte 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro'nun parçasıdır. Live Photo yerine uzun bir videoyu saklamak istiyorsanız [iPhone'da video boyutunu küçültme](/blog/reduce-video-size-iphone) rehberimiz o aracı anlatıyor.",
          ],
        },
        {
          title: "Yeni Live Photo'ları Durdurun ve Alanı Geri Alın",
          content: [
            "Kamera uygulamasında Live düğmesine (iç içe daireler) dokunup üzerini çizili hâle getirin. Kendi hâline bırakılırsa iPhone kamerayı bir sonraki açışınızda Live'ı yeniden açar; bunu durdurmak için Ayarlar > Kamera > Ayarları Koru'yu açın ve Live Photo'yu etkinleştirin. Kamera artık Live'ı açık mı kapalı mı bıraktığınızı hatırlar.",
            "Live Photo'lardan tamamen vazgeçmeniz gerekmez. Birçok kişi hareketin asıl mesele olduğu çocuklar ve evcil hayvanlar için onları açık tutar, an geçince eskileri gruplar hâlinde düzleştirir. Birkaç yüz Live Photo'yu düzleştirmek genellikle aynı sayıda sıradan fotoğrafı silmekten daha fazla yer açar.",
            "Ne yaparsanız yapın, Son Silinenler'de bitirin: değiştirilen özgünler o albüm boşaltılana kadar depolama alanınızdan sayılır. Fotoğraf silmek depolama çubuğunu hiç değiştirmiyor gibi görünüyorsa [fotoğraf silmenin iPhone'da neden yer açmadığı](/blog/iphone-storage-full) rehberimiz diğer olağan sebepleri anlatıyor.",
          ],
        },
      ],
      faq: [
        {
          question: "Bir Live Photo ne kadar fazla yer kaplar?",
          answer:
            "Live Photo durağan görüntüye yaklaşık üç saniyelik bir video ekler. Video çoğu zaman toplam boyutun yarısından fazlasıdır; DiskMop'un ölçümlerinde genellikle yaklaşık %60'tır.",
        },
        {
          question: "Düzenle'de Live'ı kapatmak dosya boyutunu küçültür mü?",
          answer:
            "Hayır. Fotoğraflar'da düzenleme geri alınabilir; video dosyada kalır ve Live'ı sonra yeniden açabilirsiniz. Hiç yer açılmaz.",
        },
        {
          question:
            "iPhone'da Live Photo'ları durağan fotoğrafa nasıl çeviririm?",
          answer:
            "Fotoğraflar'da onları seçin, Daha Fazla menüsünü açıp durağan fotoğraf olarak çoğaltın, sonra özgünleri silin. DiskMop'un Yalnızca fotoğrafı tut özelliği ikisini tek adımda yapar ve özgünleri Son Silinenler'e taşır.",
        },
        {
          question: "Durağan fotoğraf tarihini ve albümlerini korur mu?",
          answer:
            "DiskMop'la evet: durağan fotoğraf özgün tarihi, konumu, favori ve gizli durumunu ve albüm üyeliğini korur; böylece Live Photo'nun durduğu yerde görünür.",
        },
        {
          question: "Kameranın Live'ı yeniden açmasını nasıl durdururum?",
          answer:
            "Kamera'da Live'ı kapatın, ardından Ayarlar > Kamera > Ayarları Koru > Live Photo'yu açın. Kamera son seçiminizi korur.",
        },
      ],
      verdict: [
        "Live Photo'lar birçok fotoğraf kitaplığının boyutunu sessizce iki katına çıkarır ve düzenleyicideki bariz anahtar bunu değiştirmez. Alanı geri almak için video kısmının gitmesi gerekir: Fotoğraflar'da durağan olarak çoğaltıp özgünleri silin ya da ikisini birden yapın, sonra Son Silinenler'i boşaltın.",
        "iPhone için DiskMop Live Photo'ların ne kadar yer kapladığını gösterir ve seçilenleri tek adımda durağan fotoğrafa çevirir; tarihleri, konumları ve albümleri korur, tek kopyayı asla kaldırmaz. Tarama ücretsizdir; düzleştirme 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro'nun parçasıdır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "Do Live Photos Take Up More Space on iPhone? How to Keep Only the Still",
      metaDescription:
        "Every Live Photo carries a short video that is often bigger than the photo. Why turning Live off frees nothing, how to keep only the still and stop the growth.",
      subtitle:
        "What is inside a Live Photo, why the obvious switch saves no space, and the ways that actually do",
      intro: [
        "Short answer: yes. A Live Photo is a still image plus a short video of about three seconds, the moments just before and after you pressed the shutter. That video is often larger than the photo itself, so a library of Live Photos can take roughly twice the space of the same pictures as stills. Tapping Live to turn it off in the photo editor does not help, because the video stays in the file so you can switch it back on.",
        "This guide explains what a Live Photo contains, why the built-in switch frees no space, how to keep only the still with the Photos app or with DiskMop for iPhone, and how to stop new Live Photos from piling up without losing the ones you love.",
      ],
      keyTakeaways: [
        "A Live Photo stores a still image and a video of about three seconds; the video part is often more than half of the total size.",
        "Turning Live off in the photo editor is reversible, so the video stays in the file and no space is freed.",
        "Photos can make a still copy of a Live Photo with Duplicate, but the original stays until you delete it, so you have to clean up twice.",
        "DiskMop's Tools can replace selected Live Photos with stills in one step, keeping the date, location, favourite status and albums, and moving the originals to Recently Deleted.",
        "To take fewer Live Photos, turn Live off in Camera and enable Settings > Camera > Preserve Settings > Live Photo so it stays off.",
        "Space comes back only after Recently Deleted is emptied, 30 days later at the latest.",
      ],
      dataTable: {
        caption: "What happens to the video part of a Live Photo",
        columns: ["Action", "Video removed?", "Space freed"],
        rows: [
          [
            "Tap Live to turn it off in Edit",
            "No, it can be switched back on",
            "None",
          ],
          [
            "Duplicate as a still photo",
            "Only in the new copy",
            "None until the original is deleted",
          ],
          [
            "Keep the still in DiskMop",
            "Yes, the original goes to Recently Deleted",
            "About 60% of each Live Photo, after Recently Deleted is emptied",
          ],
          [
            "Delete the Live Photo",
            "Yes, with the photo",
            "All of it, after Recently Deleted is emptied",
          ],
        ],
      },
      howTo: {
        name: "Keep only the still of Live Photos on iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "See how many Live Photos you have",
            text: "In Photos, open Albums > Media Types > Live Photos. DiskMop's storage breakdown on the home screen shows how much space Live Photos take in total.",
          },
          {
            name: "Choose the ones to flatten",
            text: "In DiskMop, open Tools and choose Live Photos from your library. Select the photos whose motion you do not need; nothing is selected for you.",
          },
          {
            name: "Keep the still",
            text: "Tap Keep the still. DiskMop saves each one as a still photo with its date, location, favourite status and albums, and iOS asks once to confirm moving the originals to Recently Deleted.",
          },
          {
            name: "Stop new Live Photos",
            text: "In Camera, tap the Live button so it is off. Then turn on Settings > Camera > Preserve Settings > Live Photo so the camera remembers your choice.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Open Photos > Albums > Recently Deleted, tap Select and Delete All to get the space back now.",
          },
        ],
      },
      sections: [
        {
          title: "What Is Inside a Live Photo",
          content: [
            "When Live is on, the iPhone camera keeps recording for a moment before and after you press the shutter. The result is saved as a pair: a still image and a short video of about three seconds with sound. Photos shows them as one item; press and hold to see the motion.",
            "That video is not small. Depending on the camera and the scene it is often a few megabytes, which is more than half of the total size of the Live Photo. In DiskMop's measurements the video part is typically around 60% of the size. A library of thousands of Live Photos can therefore hold several gigabytes of three-second clips that are almost never played.",
            "Live Photos are switched on by default on new iPhones, so most libraries contain far more of them than their owners realise. Albums > Media Types > Live Photos in the Photos app lists them all.",
          ],
        },
        {
          title: "Why Turning Live Off Frees No Space",
          content: [
            "The obvious approach is to open a Live Photo, tap Edit and tap the Live button to turn it off. The photo then behaves like a still. But editing in Photos is non-destructive: the original is kept so you can undo any change, and that includes the video. Tap Live again later and the motion comes back, which means it never left the file.",
            "The Photos app has a second option that does create a real still. Select one or more Live Photos, open the More menu and choose Duplicate; for Live Photos it offers to duplicate them as still photos. The new copies have no video, but the originals are still there, so you have to find and delete them afterwards, and then empty Recently Deleted.",
            "For a handful of photos that is fine. For hundreds, doing it twice, once to duplicate and once to delete the right originals, is exactly the kind of job that never gets done.",
          ],
        },
        {
          title: "Keeping Only the Still With DiskMop",
          content: [
            "DiskMop for iPhone does both steps at once. In Tools, the Live Photos list shows the Live Photos in your library; select the ones whose motion you do not need and tap Keep the still. For each one DiskMop saves a still photo and moves the original Live Photo to Recently Deleted, asking iOS for confirmation once for the whole batch rather than once per photo.",
            "The new still keeps what matters: the original date and location, its favourite and hidden status, and its place in your albums, so it appears exactly where the Live Photo used to be. Edits you made to the photo, such as a crop or a filter, are kept as they look. If creating the still fails for any photo, that original is not deleted; a single copy is never removed.",
            "Flattening is part of DiskMop Pro, a monthly subscription with a 7-day free trial, together with photo and video shrinking. If what you want is to keep a long video rather than a Live Photo, our guide on [reducing video size on iPhone](/blog/reduce-video-size-iphone) covers that tool.",
          ],
        },
        {
          title: "Stop New Live Photos and Get the Space Back",
          content: [
            "In the Camera app, tap the Live button (the concentric circles) so it is crossed out. On its own, the iPhone turns Live back on the next time you open the camera; to stop that, open Settings > Camera > Preserve Settings and turn on Live Photo. The camera then remembers whether you left Live on or off.",
            "You do not have to give up Live Photos entirely. Many people keep them on for children and pets, where the motion is the point, and flatten older ones in batches once the moment has passed. Flattening a few hundred Live Photos typically frees more space than deleting the same number of ordinary photos.",
            "Whatever you do, finish in Recently Deleted: replaced originals still count against your storage until that album is emptied. If deleting photos does not seem to change the storage bar at all, our guide on [why deleting photos does not free up iPhone storage](/blog/iphone-storage-full) explains the other usual causes.",
          ],
        },
      ],
      faq: [
        {
          question: "How much more space does a Live Photo take?",
          answer:
            "A Live Photo adds a video of about three seconds to the still image. The video is often more than half the total size; in DiskMop's measurements it is typically around 60%.",
        },
        {
          question: "Does turning off Live in Edit reduce the file size?",
          answer:
            "No. Editing in Photos is reversible, so the video stays in the file and you can turn Live back on later. No space is freed.",
        },
        {
          question: "How do I convert Live Photos to still photos on iPhone?",
          answer:
            "In Photos, select them, open the More menu and choose Duplicate as still photos, then delete the originals. DiskMop's Keep the still does both in one step and moves the originals to Recently Deleted.",
        },
        {
          question: "Will the still keep its date and albums?",
          answer:
            "With DiskMop, yes: the still keeps the original date, location, favourite and hidden status, and album membership, so it appears where the Live Photo was.",
        },
        {
          question: "How do I stop the camera from turning Live back on?",
          answer:
            "Turn Live off in Camera, then turn on Settings > Camera > Preserve Settings > Live Photo. The camera will keep your last choice.",
        },
      ],
      verdict: [
        "Live Photos quietly double the size of many photo libraries, and the obvious switch in the editor does not change that. To get space back, the video part has to go: duplicate as stills and delete the originals in Photos, or do both at once, then empty Recently Deleted.",
        "DiskMop for iPhone shows how much space Live Photos take and replaces selected ones with stills in one step, keeping dates, locations and albums and never removing the only copy. Scanning is free; flattening is part of DiskMop Pro, a monthly subscription with a 7-day free trial.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Brauchen Live Photos mehr Platz auf dem iPhone? So behalten Sie nur das Standbild",
      metaDescription:
        "Jedes Live Photo trägt ein kurzes Video, oft größer als das Foto. Warum Live ausschalten nichts freigibt und wie Sie nur das Standbild behalten.",
      subtitle:
        "Was in einem Live Photo steckt, warum der naheliegende Schalter keinen Platz spart und welche Wege es wirklich tun",
      intro: [
        "Kurze Antwort: Ja. Ein Live Photo ist ein Standbild plus ein kurzes Video von etwa drei Sekunden mit den Momenten kurz vor und nach dem Auslösen. Dieses Video ist oft größer als das Foto selbst, sodass eine Mediathek voller Live Photos ungefähr doppelt so viel Platz belegen kann wie dieselben Bilder als Standbilder. Live im Foto-Editor auszuschalten hilft nicht, denn das Video bleibt in der Datei, damit Sie es wieder einschalten können.",
        "Dieser Ratgeber erklärt, was ein Live Photo enthält, warum der eingebaute Schalter keinen Platz freigibt, wie Sie mit der Fotos-App oder mit DiskMop für iPhone nur das Standbild behalten und wie Sie verhindern, dass sich neue Live Photos stapeln, ohne die liebsten zu verlieren.",
      ],
      keyTakeaways: [
        "Ein Live Photo speichert ein Standbild und ein Video von etwa drei Sekunden; der Videoteil macht oft mehr als die Hälfte der Gesamtgröße aus.",
        "Live im Foto-Editor auszuschalten ist umkehrbar; das Video bleibt in der Datei, und es wird kein Platz frei.",
        "Fotos kann mit Duplizieren eine Standbild-Kopie eines Live Photo anlegen, aber das Original bleibt, bis Sie es löschen; Sie räumen also zweimal auf.",
        "Die Werkzeuge von DiskMop ersetzen ausgewählte Live Photos in einem Schritt durch Standbilder, behalten Datum, Ort, Favoritenstatus und Alben und verschieben die Originale nach „Zuletzt gelöscht“.",
        "Für weniger Live Photos schalten Sie Live in der Kamera aus und aktivieren Einstellungen > Kamera > Einstellungen beibehalten > Live Photo, damit es aus bleibt.",
        "Der Platz kommt erst zurück, wenn „Zuletzt gelöscht“ geleert ist, spätestens nach 30 Tagen.",
      ],
      dataTable: {
        caption: "Was mit dem Videoteil eines Live Photo passiert",
        columns: ["Aktion", "Video entfernt?", "Freigegebener Platz"],
        rows: [
          [
            "Live unter Bearbeiten ausschalten",
            "Nein, lässt sich wieder einschalten",
            "Keiner",
          ],
          [
            "Als Standbild duplizieren",
            "Nur in der neuen Kopie",
            "Keiner, bis das Original gelöscht ist",
          ],
          [
            "Standbild behalten in DiskMop",
            "Ja, das Original geht nach „Zuletzt gelöscht“",
            "Rund 60 % jedes Live Photo, nach dem Leeren von „Zuletzt gelöscht“",
          ],
          [
            "Live Photo löschen",
            "Ja, mit dem Foto",
            "Alles, nach dem Leeren von „Zuletzt gelöscht“",
          ],
        ],
      },
      howTo: {
        name: "Auf dem iPhone nur das Standbild von Live Photos behalten",
        totalTime: "PT10M",
        steps: [
          {
            name: "Sehen, wie viele Live Photos Sie haben",
            text: "Öffnen Sie in Fotos Alben > Medienarten > Live Photos. Die Speicheraufteilung auf dem Startbildschirm von DiskMop zeigt, wie viel Platz Live Photos insgesamt belegen.",
          },
          {
            name: "Die umzuwandelnden auswählen",
            text: "Öffnen Sie in DiskMop die Werkzeuge und wählen Sie Live Photos aus Ihrer Mediathek. Markieren Sie die Fotos, deren Bewegung Sie nicht brauchen; nichts wird für Sie ausgewählt.",
          },
          {
            name: "Das Standbild behalten",
            text: "Tippen Sie auf Standbild behalten. DiskMop speichert jedes als Standbild mit Datum, Ort, Favoritenstatus und Alben, und iOS fragt einmal nach Bestätigung, die Originale nach „Zuletzt gelöscht“ zu verschieben.",
          },
          {
            name: "Neue Live Photos stoppen",
            text: "Tippen Sie in der Kamera auf die Live-Taste, damit sie aus ist. Aktivieren Sie dann Einstellungen > Kamera > Einstellungen beibehalten > Live Photo, damit sich die Kamera Ihre Wahl merkt.",
          },
          {
            name: "„Zuletzt gelöscht“ leeren",
            text: "Öffnen Sie Fotos > Alben > Zuletzt gelöscht, tippen Sie auf Auswählen und Alle löschen, um den Platz sofort zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Was in einem Live Photo steckt",
          content: [
            "Ist Live aktiv, zeichnet die iPhone-Kamera einen Moment vor und nach dem Auslösen weiter auf. Das Ergebnis wird als Paar gespeichert: ein Standbild und ein kurzes Video von etwa drei Sekunden mit Ton. Fotos zeigt beides als ein Objekt; halten Sie es gedrückt, um die Bewegung zu sehen.",
            "Dieses Video ist nicht klein. Je nach Kamera und Motiv sind es oft einige Megabyte und damit mehr als die Hälfte der Gesamtgröße des Live Photo. In den Messungen von DiskMop macht der Videoteil typischerweise rund 60 % der Größe aus. Eine Mediathek mit Tausenden Live Photos kann also mehrere Gigabyte an Drei-Sekunden-Clips enthalten, die fast nie abgespielt werden.",
            "Live Photos sind auf neuen iPhones standardmäßig eingeschaltet, daher enthalten die meisten Mediatheken weit mehr davon, als ihren Besitzern bewusst ist. Alben > Medienarten > Live Photos in der Fotos-App listet sie alle auf.",
          ],
        },
        {
          title: "Warum Live ausschalten keinen Platz freigibt",
          content: [
            "Der naheliegende Weg ist, ein Live Photo zu öffnen, auf Bearbeiten und dann auf die Live-Taste zu tippen, um es auszuschalten. Das Foto verhält sich danach wie ein Standbild. Bearbeiten in Fotos ist aber nicht destruktiv: Das Original bleibt erhalten, damit Sie jede Änderung zurücknehmen können, und dazu gehört das Video. Tippen Sie später erneut auf Live, kommt die Bewegung zurück; sie hat die Datei also nie verlassen.",
            "Die Fotos-App hat eine zweite Möglichkeit, die ein echtes Standbild erzeugt. Wählen Sie ein oder mehrere Live Photos aus, öffnen Sie das Menü Mehr und wählen Sie Duplizieren; bei Live Photos bietet die App an, sie als Standbilder zu duplizieren. Die neuen Kopien haben kein Video, aber die Originale sind noch da, sodass Sie sie danach finden und löschen und anschließend „Zuletzt gelöscht“ leeren müssen.",
            "Für eine Handvoll Fotos ist das in Ordnung. Für Hunderte ist es genau die Art Arbeit, die nie erledigt wird: einmal duplizieren und einmal die richtigen Originale löschen.",
          ],
        },
        {
          title: "Nur das Standbild behalten mit DiskMop",
          content: [
            "DiskMop für iPhone erledigt beide Schritte auf einmal. In den Werkzeugen zeigt die Liste Live Photos die Live Photos Ihrer Mediathek; wählen Sie die aus, deren Bewegung Sie nicht brauchen, und tippen Sie auf Standbild behalten. Für jedes speichert DiskMop ein Standbild und verschiebt das ursprüngliche Live Photo nach „Zuletzt gelöscht“, wobei iOS einmal für den ganzen Stapel statt für jedes Foto einzeln um Bestätigung bittet.",
            "Das neue Standbild behält, was zählt: das ursprüngliche Datum und den Ort, den Favoriten- und Ausgeblendet-Status und seinen Platz in Ihren Alben, sodass es genau dort erscheint, wo das Live Photo war. Bearbeitungen wie ein Zuschnitt oder Filter bleiben so erhalten, wie sie aussehen. Schlägt das Erzeugen des Standbilds bei einem Foto fehl, wird dieses Original nicht gelöscht; eine einzige Kopie wird nie entfernt.",
            "Das Umwandeln gehört zu DiskMop Pro, einem Monatsabo mit 7-tägiger Gratis-Testphase, zusammen mit dem Verkleinern von Fotos und Videos. Möchten Sie statt eines Live Photo ein langes Video behalten, erklärt unser Ratgeber zum [Verkleinern von Videos auf dem iPhone](/blog/reduce-video-size-iphone) dieses Werkzeug.",
          ],
        },
        {
          title: "Neue Live Photos stoppen und den Platz zurückholen",
          content: [
            "Tippen Sie in der Kamera-App auf die Live-Taste (die konzentrischen Kreise), sodass sie durchgestrichen ist. Von sich aus schaltet das iPhone Live beim nächsten Öffnen der Kamera wieder ein; um das zu verhindern, öffnen Sie Einstellungen > Kamera > Einstellungen beibehalten und aktivieren Live Photo. Die Kamera merkt sich dann, ob Sie Live an- oder ausgelassen haben.",
            "Sie müssen nicht ganz auf Live Photos verzichten. Viele lassen sie für Kinder und Haustiere an, wo die Bewegung gerade den Reiz ausmacht, und wandeln ältere stapelweise um, wenn der Moment vorbei ist. Ein paar hundert Live Photos umzuwandeln bringt meist mehr Platz, als dieselbe Zahl gewöhnlicher Fotos zu löschen.",
            "Was auch immer Sie tun, enden Sie in „Zuletzt gelöscht“: Ersetzte Originale zählen weiter zum Speicher, bis dieses Album geleert ist. Scheint das Löschen von Fotos den Speicherbalken gar nicht zu verändern, erklärt unser Ratgeber, [warum Fotos löschen auf dem iPhone keinen Speicher freigibt](/blog/iphone-storage-full), die anderen üblichen Ursachen.",
          ],
        },
      ],
      faq: [
        {
          question: "Wie viel mehr Platz braucht ein Live Photo?",
          answer:
            "Ein Live Photo fügt dem Standbild ein Video von etwa drei Sekunden hinzu. Das Video macht oft mehr als die Hälfte der Gesamtgröße aus; in den Messungen von DiskMop typischerweise rund 60 %.",
        },
        {
          question:
            "Verkleinert das Ausschalten von Live unter Bearbeiten die Datei?",
          answer:
            "Nein. Bearbeiten in Fotos ist umkehrbar; das Video bleibt in der Datei, und Sie können Live später wieder einschalten. Es wird kein Platz frei.",
        },
        {
          question:
            "Wie wandle ich Live Photos auf dem iPhone in Standbilder um?",
          answer:
            "Wählen Sie sie in Fotos aus, öffnen Sie das Menü Mehr und duplizieren Sie sie als Standbilder, dann löschen Sie die Originale. „Standbild behalten“ in DiskMop erledigt beides in einem Schritt und verschiebt die Originale nach „Zuletzt gelöscht“.",
        },
        {
          question: "Behält das Standbild Datum und Alben?",
          answer:
            "Mit DiskMop ja: Das Standbild behält ursprüngliches Datum, Ort, Favoriten- und Ausgeblendet-Status sowie die Albumzugehörigkeit und erscheint dort, wo das Live Photo war.",
        },
        {
          question:
            "Wie verhindere ich, dass die Kamera Live wieder einschaltet?",
          answer:
            "Schalten Sie Live in der Kamera aus und aktivieren Sie dann Einstellungen > Kamera > Einstellungen beibehalten > Live Photo. Die Kamera behält Ihre letzte Wahl bei.",
        },
      ],
      verdict: [
        "Live Photos verdoppeln still und leise die Größe vieler Fotomediatheken, und der naheliegende Schalter im Editor ändert daran nichts. Um Platz zurückzubekommen, muss der Videoteil weg: in Fotos als Standbilder duplizieren und die Originale löschen oder beides auf einmal erledigen, dann „Zuletzt gelöscht“ leeren.",
        "DiskMop für iPhone zeigt, wie viel Platz Live Photos belegen, und ersetzt ausgewählte in einem Schritt durch Standbilder, wobei Datum, Ort und Alben erhalten bleiben und nie die einzige Kopie entfernt wird. Der Scan ist kostenlos; das Umwandeln gehört zu DiskMop Pro, einem Monatsabo mit 7-tägiger Gratis-Testphase.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Les Live Photos prennent-elles plus de place sur iPhone ? Garder seulement l'image fixe",
      metaDescription:
        "Chaque Live Photo contient une courte vidéo souvent plus lourde que la photo. Pourquoi désactiver Live ne libère rien et comment garder l'image fixe.",
      subtitle:
        "Ce que contient une Live Photo, pourquoi l'interrupteur évident n'économise rien et les méthodes qui fonctionnent vraiment",
      intro: [
        "Réponse courte : oui. Une Live Photo est une image fixe accompagnée d'une courte vidéo d'environ trois secondes, les instants juste avant et juste après la pression sur le déclencheur. Cette vidéo est souvent plus lourde que la photo elle-même, si bien qu'une photothèque de Live Photos peut occuper environ deux fois l'espace des mêmes images en version fixe. Toucher Live pour le désactiver dans l'éditeur n'aide pas : la vidéo reste dans le fichier pour que vous puissiez le réactiver.",
        "Ce guide explique ce que contient une Live Photo, pourquoi l'interrupteur intégré ne libère pas d'espace, comment ne garder que l'image fixe avec l'app Photos ou avec DiskMop pour iPhone, et comment empêcher les nouvelles Live Photos de s'accumuler sans perdre celles que vous aimez.",
      ],
      keyTakeaways: [
        "Une Live Photo stocke une image fixe et une vidéo d'environ trois secondes ; la partie vidéo représente souvent plus de la moitié de la taille totale.",
        "Désactiver Live dans l'éditeur est réversible ; la vidéo reste dans le fichier et aucun espace n'est libéré.",
        "Photos peut créer une copie fixe d'une Live Photo avec Dupliquer, mais l'original reste jusqu'à ce que vous le supprimiez ; il faut donc faire le ménage deux fois.",
        "Les Outils de DiskMop remplacent les Live Photos sélectionnées par des images fixes en une seule étape, en conservant date, lieu, statut de favori et albums, et placent les originaux dans Supprimés récemment.",
        "Pour prendre moins de Live Photos, désactivez Live dans Appareil photo et activez Réglages > Appareil photo > Conserver les réglages > Live Photo pour qu'il reste désactivé.",
        "L'espace ne revient qu'une fois Supprimés récemment vidé, au plus tard après 30 jours.",
      ],
      dataTable: {
        caption: "Ce qui arrive à la partie vidéo d'une Live Photo",
        columns: ["Action", "Vidéo supprimée ?", "Espace libéré"],
        rows: [
          ["Désactiver Live dans Modifier", "Non, réactivable", "Aucun"],
          [
            "Dupliquer en photo fixe",
            "Seulement dans la nouvelle copie",
            "Aucun tant que l'original n'est pas supprimé",
          ],
          [
            "Garder l'image fixe dans DiskMop",
            "Oui, l'original part dans Supprimés récemment",
            "Environ 60 % de chaque Live Photo, une fois Supprimés récemment vidé",
          ],
          [
            "Supprimer la Live Photo",
            "Oui, avec la photo",
            "La totalité, une fois Supprimés récemment vidé",
          ],
        ],
      },
      howTo: {
        name: "Ne garder que l'image fixe des Live Photos sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Voir combien de Live Photos vous avez",
            text: "Dans Photos, ouvrez Albums > Types de médias > Live Photos. La répartition du stockage sur l'écran d'accueil de DiskMop indique combien d'espace occupent les Live Photos au total.",
          },
          {
            name: "Choisir celles à convertir",
            text: "Dans DiskMop, ouvrez Outils et choisissez Live Photos dans votre photothèque. Sélectionnez les photos dont vous n'avez pas besoin du mouvement ; rien n'est sélectionné à votre place.",
          },
          {
            name: "Garder l'image fixe",
            text: "Touchez Garder l'image fixe. DiskMop enregistre chacune comme photo fixe avec sa date, son lieu, son statut de favori et ses albums, et iOS demande une seule fois de confirmer le déplacement des originaux dans Supprimés récemment.",
          },
          {
            name: "Arrêter les nouvelles Live Photos",
            text: "Dans Appareil photo, touchez le bouton Live pour le désactiver. Activez ensuite Réglages > Appareil photo > Conserver les réglages > Live Photo pour que l'appareil se souvienne de votre choix.",
          },
          {
            name: "Vider Supprimés récemment",
            text: "Ouvrez Photos > Albums > Supprimés récemment, touchez Sélectionner puis Tout supprimer pour récupérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title: "Ce que contient une Live Photo",
          content: [
            "Quand Live est activé, l'appareil photo de l'iPhone continue d'enregistrer un instant avant et après la pression sur le déclencheur. Le résultat est enregistré sous forme de paire : une image fixe et une courte vidéo d'environ trois secondes, avec le son. Photos les présente comme un seul élément ; maintenez le doigt dessus pour voir le mouvement.",
            "Cette vidéo n'est pas petite. Selon l'appareil et la scène, elle pèse souvent quelques mégaoctets, soit plus de la moitié de la taille totale de la Live Photo. Dans les mesures de DiskMop, la partie vidéo représente généralement environ 60 % de la taille. Une photothèque de milliers de Live Photos peut donc contenir plusieurs gigaoctets de clips de trois secondes qui ne sont presque jamais lus.",
            "Les Live Photos sont activées par défaut sur les nouveaux iPhone ; la plupart des photothèques en contiennent donc bien plus que leurs propriétaires ne l'imaginent. Albums > Types de médias > Live Photos, dans l'app Photos, les liste toutes.",
          ],
        },
        {
          title: "Pourquoi désactiver Live ne libère pas d'espace",
          content: [
            "La méthode évidente consiste à ouvrir une Live Photo, toucher Modifier puis le bouton Live pour le désactiver. La photo se comporte alors comme une image fixe. Mais la retouche dans Photos est non destructive : l'original est conservé pour que vous puissiez annuler toute modification, vidéo comprise. Touchez Live plus tard et le mouvement revient : il n'a donc jamais quitté le fichier.",
            "L'app Photos propose une seconde option qui crée une vraie image fixe. Sélectionnez une ou plusieurs Live Photos, ouvrez le menu Plus et choisissez Dupliquer ; pour les Live Photos, l'app propose de les dupliquer en photos fixes. Les nouvelles copies n'ont pas de vidéo, mais les originaux sont toujours là : il faut ensuite les retrouver, les supprimer, puis vider Supprimés récemment.",
            "Pour quelques photos, cela convient. Pour des centaines, s'y prendre à deux fois, une pour dupliquer et une pour supprimer les bons originaux, est exactement le genre de tâche qu'on ne fait jamais.",
          ],
        },
        {
          title: "Ne garder que l'image fixe avec DiskMop",
          content: [
            "DiskMop pour iPhone fait les deux étapes à la fois. Dans Outils, la liste Live Photos affiche les Live Photos de votre photothèque ; sélectionnez celles dont vous n'avez pas besoin du mouvement et touchez Garder l'image fixe. Pour chacune, DiskMop enregistre une photo fixe et place la Live Photo d'origine dans Supprimés récemment, en ne demandant la confirmation d'iOS qu'une fois pour tout le lot plutôt qu'une fois par photo.",
            "La nouvelle image fixe conserve l'essentiel : la date et le lieu d'origine, son statut de favori et de photo masquée, et sa place dans vos albums, si bien qu'elle apparaît exactement là où se trouvait la Live Photo. Les retouches comme un recadrage ou un filtre sont conservées telles qu'elles apparaissent. Si la création de l'image fixe échoue pour une photo, cet original n'est pas supprimé ; une copie unique n'est jamais retirée.",
            "La conversion fait partie de DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours, avec la réduction des photos et des vidéos. Si vous voulez plutôt garder une longue vidéo qu'une Live Photo, notre guide pour [réduire la taille d'une vidéo sur iPhone](/blog/reduce-video-size-iphone) présente cet outil.",
          ],
        },
        {
          title: "Arrêter les nouvelles Live Photos et récupérer l'espace",
          content: [
            "Dans l'app Appareil photo, touchez le bouton Live (les cercles concentriques) pour qu'il soit barré. Par défaut, l'iPhone réactive Live à la prochaine ouverture de l'appareil photo ; pour l'en empêcher, ouvrez Réglages > Appareil photo > Conserver les réglages et activez Live Photo. L'appareil photo se souvient alors si vous avez laissé Live activé ou non.",
            "Inutile de renoncer complètement aux Live Photos. Beaucoup de gens les gardent pour les enfants et les animaux, où le mouvement fait tout l'intérêt, et convertissent les plus anciennes par lots une fois le moment passé. Convertir quelques centaines de Live Photos libère généralement plus d'espace que supprimer le même nombre de photos ordinaires.",
            "Quoi que vous fassiez, terminez par Supprimés récemment : les originaux remplacés comptent toujours dans votre stockage jusqu'à ce que cet album soit vidé. Si supprimer des photos ne semble pas faire bouger la barre de stockage, notre guide sur [pourquoi supprimer des photos ne libère pas d'espace sur iPhone](/blog/iphone-storage-full) explique les autres causes habituelles.",
          ],
        },
      ],
      faq: [
        {
          question: "Combien d'espace en plus prend une Live Photo ?",
          answer:
            "Une Live Photo ajoute à l'image fixe une vidéo d'environ trois secondes. La vidéo représente souvent plus de la moitié de la taille totale ; dans les mesures de DiskMop, environ 60 % en général.",
        },
        {
          question:
            "Désactiver Live dans Modifier réduit-il la taille du fichier ?",
          answer:
            "Non. La retouche dans Photos est réversible ; la vidéo reste dans le fichier et vous pouvez réactiver Live plus tard. Aucun espace n'est libéré.",
        },
        {
          question:
            "Comment convertir des Live Photos en photos fixes sur iPhone ?",
          answer:
            "Dans Photos, sélectionnez-les, ouvrez le menu Plus et dupliquez-les en photos fixes, puis supprimez les originaux. Garder l'image fixe dans DiskMop fait les deux en une étape et place les originaux dans Supprimés récemment.",
        },
        {
          question: "L'image fixe conserve-t-elle sa date et ses albums ?",
          answer:
            "Avec DiskMop, oui : l'image fixe conserve la date d'origine, le lieu, le statut de favori et de photo masquée, et l'appartenance aux albums, si bien qu'elle apparaît là où était la Live Photo.",
        },
        {
          question: "Comment empêcher l'appareil photo de réactiver Live ?",
          answer:
            "Désactivez Live dans Appareil photo, puis activez Réglages > Appareil photo > Conserver les réglages > Live Photo. L'appareil photo gardera votre dernier choix.",
        },
      ],
      verdict: [
        "Les Live Photos doublent discrètement la taille de nombreuses photothèques, et l'interrupteur évident de l'éditeur n'y change rien. Pour récupérer de l'espace, la partie vidéo doit disparaître : dupliquez en photos fixes et supprimez les originaux dans Photos, ou faites les deux à la fois, puis videz Supprimés récemment.",
        "DiskMop pour iPhone montre combien d'espace occupent les Live Photos et remplace celles que vous choisissez par des images fixes en une étape, en conservant dates, lieux et albums et sans jamais supprimer une copie unique. L'analyse est gratuite ; la conversion fait partie de DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "¿Las Live Photos ocupan más espacio en iPhone? Cómo quedarte solo con la foto",
      metaDescription:
        "Cada Live Photo lleva un vídeo corto que a menudo pesa más que la foto. Por qué desactivar Live no libera nada y cómo quedarte solo con la foto fija.",
      subtitle:
        "Qué hay dentro de una Live Photo, por qué el interruptor obvio no ahorra espacio y qué formas sí lo hacen",
      intro: [
        "Respuesta corta: sí. Una Live Photo es una imagen fija más un vídeo corto de unos tres segundos con los instantes justo antes y después de pulsar el disparador. Ese vídeo suele pesar más que la propia foto, así que una fototeca de Live Photos puede ocupar aproximadamente el doble que las mismas imágenes como fotos fijas. Tocar Live para desactivarlo en el editor no sirve, porque el vídeo se queda en el archivo para que puedas volver a activarlo.",
        "Esta guía explica qué contiene una Live Photo, por qué el interruptor integrado no libera espacio, cómo quedarte solo con la foto fija con la app Fotos o con DiskMop para iPhone y cómo evitar que se acumulen nuevas Live Photos sin perder las que te gustan.",
      ],
      keyTakeaways: [
        "Una Live Photo guarda una imagen fija y un vídeo de unos tres segundos; la parte de vídeo suele ser más de la mitad del tamaño total.",
        "Desactivar Live en el editor es reversible; el vídeo se queda en el archivo y no se libera espacio.",
        "Fotos puede crear una copia fija de una Live Photo con Duplicar, pero el original sigue ahí hasta que lo borres, así que hay que limpiar dos veces.",
        "Las Herramientas de DiskMop sustituyen las Live Photos elegidas por fotos fijas en un solo paso, conservando fecha, ubicación, estado de favorita y álbumes, y mueven los originales a Eliminados recientemente.",
        "Para hacer menos Live Photos, desactiva Live en Cámara y activa Ajustes > Cámara > Conservar ajustes > Live Photo para que siga desactivado.",
        "El espacio solo vuelve cuando se vacía Eliminados recientemente, como mucho a los 30 días.",
      ],
      dataTable: {
        caption: "Qué pasa con la parte de vídeo de una Live Photo",
        columns: ["Acción", "¿Se quita el vídeo?", "Espacio liberado"],
        rows: [
          [
            "Desactivar Live en Editar",
            "No, se puede volver a activar",
            "Ninguno",
          ],
          [
            "Duplicar como foto fija",
            "Solo en la copia nueva",
            "Ninguno hasta borrar el original",
          ],
          [
            "Quedarme con la foto en DiskMop",
            "Sí, el original va a Eliminados recientemente",
            "Cerca del 60 % de cada Live Photo, al vaciar Eliminados recientemente",
          ],
          [
            "Borrar la Live Photo",
            "Sí, junto con la foto",
            "Todo, al vaciar Eliminados recientemente",
          ],
        ],
      },
      howTo: {
        name: "Quedarte solo con la foto fija de las Live Photos en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Mira cuántas Live Photos tienes",
            text: "En Fotos, abre Álbumes > Tipos de contenido > Live Photos. El reparto del almacenamiento en la pantalla de inicio de DiskMop muestra cuánto ocupan las Live Photos en total.",
          },
          {
            name: "Elige las que quieres convertir",
            text: "En DiskMop, abre Herramientas y elige Live Photos de tu fototeca. Selecciona las fotos cuyo movimiento no necesitas; no se selecciona nada por ti.",
          },
          {
            name: "Quédate con la foto",
            text: "Toca Quedarme con la foto. DiskMop guarda cada una como foto fija con su fecha, ubicación, estado de favorita y álbumes, e iOS pide una sola vez confirmación para mover los originales a Eliminados recientemente.",
          },
          {
            name: "Deja de hacer Live Photos",
            text: "En Cámara, toca el botón Live para desactivarlo. Después activa Ajustes > Cámara > Conservar ajustes > Live Photo para que la cámara recuerde tu elección.",
          },
          {
            name: "Vacía Eliminados recientemente",
            text: "Abre Fotos > Álbumes > Eliminados recientemente, toca Seleccionar y Eliminar todo para recuperar el espacio ahora.",
          },
        ],
      },
      sections: [
        {
          title: "Qué hay dentro de una Live Photo",
          content: [
            "Con Live activado, la cámara del iPhone sigue grabando un momento antes y después de pulsar el disparador. El resultado se guarda como una pareja: una imagen fija y un vídeo corto de unos tres segundos con sonido. Fotos los muestra como un solo elemento; mantén pulsado para ver el movimiento.",
            "Ese vídeo no es pequeño. Según la cámara y la escena, suele ocupar unos megas, más de la mitad del tamaño total de la Live Photo. En las mediciones de DiskMop, la parte de vídeo ronda normalmente el 60 % del tamaño. Una fototeca con miles de Live Photos puede guardar varios gigas de clips de tres segundos que casi nunca se reproducen.",
            "Las Live Photos vienen activadas por defecto en los iPhone nuevos, así que la mayoría de las fototecas tienen muchas más de las que sus dueños creen. Álbumes > Tipos de contenido > Live Photos, en la app Fotos, las muestra todas.",
          ],
        },
        {
          title: "Por qué desactivar Live no libera espacio",
          content: [
            "Lo obvio es abrir una Live Photo, tocar Editar y luego el botón Live para desactivarlo. La foto pasa a comportarse como una foto fija. Pero editar en Fotos no es destructivo: el original se conserva para que puedas deshacer cualquier cambio, y eso incluye el vídeo. Si vuelves a tocar Live más tarde, el movimiento regresa; nunca salió del archivo.",
            "La app Fotos tiene una segunda opción que sí crea una foto fija de verdad. Selecciona una o varias Live Photos, abre el menú Más y elige Duplicar; con las Live Photos ofrece duplicarlas como fotos fijas. Las copias nuevas no tienen vídeo, pero los originales siguen ahí, así que después tienes que encontrarlos, borrarlos y vaciar Eliminados recientemente.",
            "Para unas pocas fotos está bien. Para cientos, hacerlo dos veces, una para duplicar y otra para borrar los originales correctos, es justo el tipo de tarea que nunca se hace.",
          ],
        },
        {
          title: "Quedarte solo con la foto con DiskMop",
          content: [
            "DiskMop para iPhone hace los dos pasos a la vez. En Herramientas, la lista Live Photos muestra las Live Photos de tu fototeca; selecciona las que no necesitas en movimiento y toca Quedarme con la foto. Para cada una, DiskMop guarda una foto fija y mueve la Live Photo original a Eliminados recientemente, pidiendo la confirmación de iOS una sola vez para todo el lote en lugar de una vez por foto.",
            "La foto fija nueva conserva lo importante: la fecha y la ubicación originales, su estado de favorita y de oculta, y su sitio en tus álbumes, así que aparece justo donde estaba la Live Photo. Las ediciones, como un recorte o un filtro, se mantienen tal como se ven. Si la foto fija no puede crearse en algún caso, ese original no se borra; nunca se elimina una copia única.",
            "Convertir forma parte de DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita, junto con la reducción de fotos y vídeos. Si lo que quieres conservar es un vídeo largo y no una Live Photo, nuestra guía para [reducir el tamaño de un vídeo en iPhone](/blog/reduce-video-size-iphone) explica esa herramienta.",
          ],
        },
        {
          title: "Deja de crear Live Photos y recupera el espacio",
          content: [
            "En la app Cámara, toca el botón Live (los círculos concéntricos) para que aparezca tachado. Por su cuenta, el iPhone vuelve a activar Live la próxima vez que abres la cámara; para evitarlo, abre Ajustes > Cámara > Conservar ajustes y activa Live Photo. Así la cámara recuerda si dejaste Live activado o no.",
            "No hace falta renunciar del todo a las Live Photos. Mucha gente las mantiene para niños y mascotas, donde el movimiento es lo importante, y convierte las antiguas por tandas cuando el momento ya pasó. Convertir unos cientos de Live Photos suele liberar más espacio que borrar el mismo número de fotos normales.",
            "Hagas lo que hagas, termina en Eliminados recientemente: los originales sustituidos siguen contando en tu almacenamiento hasta que vacíes ese álbum. Si borrar fotos parece no mover la barra de almacenamiento, nuestra guía sobre [por qué borrar fotos no libera espacio en el iPhone](/blog/iphone-storage-full) explica las demás causas habituales.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Cuánto espacio de más ocupa una Live Photo?",
          answer:
            "Una Live Photo añade a la imagen fija un vídeo de unos tres segundos. El vídeo suele ser más de la mitad del tamaño total; en las mediciones de DiskMop, normalmente cerca del 60 %.",
        },
        {
          question: "¿Desactivar Live en Editar reduce el tamaño del archivo?",
          answer:
            "No. Editar en Fotos es reversible; el vídeo se queda en el archivo y puedes volver a activar Live más tarde. No se libera espacio.",
        },
        {
          question: "¿Cómo convierto Live Photos en fotos fijas en iPhone?",
          answer:
            "En Fotos, selecciónalas, abre el menú Más, duplícalas como fotos fijas y luego borra los originales. Quedarme con la foto en DiskMop hace las dos cosas en un paso y mueve los originales a Eliminados recientemente.",
        },
        {
          question: "¿La foto fija conserva su fecha y sus álbumes?",
          answer:
            "Con DiskMop, sí: la foto fija conserva la fecha original, la ubicación, el estado de favorita y de oculta y la pertenencia a álbumes, así que aparece donde estaba la Live Photo.",
        },
        {
          question: "¿Cómo evito que la cámara vuelva a activar Live?",
          answer:
            "Desactiva Live en Cámara y luego activa Ajustes > Cámara > Conservar ajustes > Live Photo. La cámara mantendrá tu última elección.",
        },
      ],
      verdict: [
        "Las Live Photos duplican en silencio el tamaño de muchas fototecas, y el interruptor obvio del editor no lo cambia. Para recuperar espacio, la parte de vídeo tiene que desaparecer: duplica como fotos fijas y borra los originales en Fotos, o haz ambas cosas a la vez, y luego vacía Eliminados recientemente.",
        "DiskMop para iPhone muestra cuánto ocupan las Live Photos y sustituye las elegidas por fotos fijas en un solo paso, conservando fechas, ubicaciones y álbumes, sin eliminar nunca la única copia. El análisis es gratis; convertir forma parte de DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Le Live Photo occupano più spazio su iPhone? Come tenere solo la foto",
      metaDescription:
        "Ogni Live Photo contiene un breve video spesso più pesante della foto. Perché disattivare Live non libera nulla, come tenere solo la foto e fermare la crescita.",
      subtitle:
        "Cosa c'è dentro una Live Photo, perché l'interruttore più ovvio non fa risparmiare spazio e i metodi che funzionano davvero",
      intro: [
        "Risposta breve: sì. Una Live Photo è un'immagine fissa più un breve video di circa tre secondi con gli istanti subito prima e subito dopo lo scatto. Quel video è spesso più pesante della foto stessa, quindi una libreria di Live Photo può occupare circa il doppio delle stesse immagini come foto fisse. Toccare Live per disattivarlo nell'editor non serve, perché il video resta nel file per poterlo riattivare.",
        "Questa guida spiega cosa contiene una Live Photo, perché l'interruttore integrato non libera spazio, come tenere solo la foto fissa con l'app Foto o con DiskMop per iPhone e come evitare che si accumulino nuove Live Photo senza perdere quelle a cui tieni.",
      ],
      keyTakeaways: [
        "Una Live Photo conserva un'immagine fissa e un video di circa tre secondi; la parte video è spesso più della metà della dimensione totale.",
        "Disattivare Live nell'editor è reversibile; il video resta nel file e non si libera spazio.",
        "Foto può creare una copia fissa di una Live Photo con Duplica, ma l'originale resta finché non lo elimini, quindi bisogna fare pulizia due volte.",
        "Gli Strumenti di DiskMop sostituiscono le Live Photo scelte con foto fisse in un solo passaggio, conservando data, luogo, stato di preferita e album, e spostano gli originali in Eliminati di recente.",
        "Per scattare meno Live Photo, disattiva Live in Fotocamera e attiva Impostazioni > Fotocamera > Mantieni impostazioni > Live Photo perché resti disattivato.",
        "Lo spazio torna solo quando Eliminati di recente viene svuotato, al massimo dopo 30 giorni.",
      ],
      dataTable: {
        caption: "Cosa succede alla parte video di una Live Photo",
        columns: ["Azione", "Video rimosso?", "Spazio liberato"],
        rows: [
          ["Disattivare Live in Modifica", "No, si può riattivare", "Nessuno"],
          [
            "Duplicare come foto fissa",
            "Solo nella nuova copia",
            "Nessuno finché l'originale non viene eliminato",
          ],
          [
            "Tieni solo la foto in DiskMop",
            "Sì, l'originale va in Eliminati di recente",
            "Circa il 60% di ogni Live Photo, dopo aver svuotato Eliminati di recente",
          ],
          [
            "Eliminare la Live Photo",
            "Sì, insieme alla foto",
            "Tutto, dopo aver svuotato Eliminati di recente",
          ],
        ],
      },
      howTo: {
        name: "Tenere solo la foto fissa delle Live Photo su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Guarda quante Live Photo hai",
            text: "In Foto apri Album > Tipi di media > Live Photo. La suddivisione dello spazio nella schermata principale di DiskMop mostra quanto occupano in totale le Live Photo.",
          },
          {
            name: "Scegli quelle da convertire",
            text: "In DiskMop apri Strumenti e scegli Live Photo dalla tua libreria. Seleziona le foto di cui non ti serve il movimento; nulla viene selezionato al posto tuo.",
          },
          {
            name: "Tieni solo la foto",
            text: "Tocca Tieni solo la foto. DiskMop salva ciascuna come foto fissa con data, luogo, stato di preferita e album, e iOS chiede una sola volta di confermare lo spostamento degli originali in Eliminati di recente.",
          },
          {
            name: "Ferma le nuove Live Photo",
            text: "In Fotocamera tocca il pulsante Live per disattivarlo. Poi attiva Impostazioni > Fotocamera > Mantieni impostazioni > Live Photo perché la fotocamera ricordi la tua scelta.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Apri Foto > Album > Eliminati di recente, tocca Seleziona ed Elimina tutto per recuperare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa c'è dentro una Live Photo",
          content: [
            "Con Live attivo, la fotocamera dell'iPhone continua a registrare per un istante prima e dopo lo scatto. Il risultato viene salvato come coppia: un'immagine fissa e un breve video di circa tre secondi con audio. Foto li mostra come un unico elemento; tieni premuto per vedere il movimento.",
            "Quel video non è piccolo. A seconda della fotocamera e della scena pesa spesso qualche megabyte, più della metà della dimensione totale della Live Photo. Nelle misurazioni di DiskMop la parte video è in genere circa il 60% della dimensione. Una libreria di migliaia di Live Photo può quindi contenere diversi gigabyte di clip da tre secondi che non vengono quasi mai riprodotti.",
            "Le Live Photo sono attive per impostazione predefinita sui nuovi iPhone, quindi la maggior parte delle librerie ne contiene molte più di quanto i proprietari immaginino. Album > Tipi di media > Live Photo nell'app Foto le elenca tutte.",
          ],
        },
        {
          title: "Perché disattivare Live non libera spazio",
          content: [
            "Il metodo più ovvio è aprire una Live Photo, toccare Modifica e poi il pulsante Live per disattivarlo. La foto si comporta allora come una foto fissa. Ma la modifica in Foto non è distruttiva: l'originale viene conservato per poter annullare qualsiasi cambiamento, video compreso. Tocca di nuovo Live più tardi e il movimento torna: non ha mai lasciato il file.",
            "L'app Foto offre una seconda opzione che crea davvero una foto fissa. Seleziona una o più Live Photo, apri il menu Altro e scegli Duplica; per le Live Photo propone di duplicarle come foto fisse. Le nuove copie non hanno video, ma gli originali sono ancora lì, quindi poi devi trovarli, eliminarli e svuotare Eliminati di recente.",
            "Per poche foto va bene. Per centinaia, farlo due volte, una per duplicare e una per eliminare gli originali giusti, è proprio il tipo di lavoro che non si fa mai.",
          ],
        },
        {
          title: "Tenere solo la foto con DiskMop",
          content: [
            "DiskMop per iPhone fa entrambi i passaggi insieme. In Strumenti, l'elenco Live Photo mostra le Live Photo della tua libreria; seleziona quelle di cui non ti serve il movimento e tocca Tieni solo la foto. Per ciascuna DiskMop salva una foto fissa e sposta la Live Photo originale in Eliminati di recente, chiedendo la conferma di iOS una sola volta per tutto il gruppo invece che per ogni foto.",
            "La nuova foto fissa conserva ciò che conta: data e luogo originali, stato di preferita e di nascosta e il suo posto negli album, così compare esattamente dove si trovava la Live Photo. Le modifiche come un ritaglio o un filtro restano come appaiono. Se per una foto la creazione della copia fissa non riesce, quell'originale non viene eliminato; una copia unica non viene mai rimossa.",
            "La conversione fa parte di DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita, insieme alla riduzione di foto e video. Se invece di una Live Photo vuoi conservare un video lungo, la nostra guida per [ridurre le dimensioni dei video su iPhone](/blog/reduce-video-size-iphone) spiega quello strumento.",
          ],
        },
        {
          title: "Fermare le nuove Live Photo e recuperare lo spazio",
          content: [
            "Nell'app Fotocamera tocca il pulsante Live (i cerchi concentrici) perché appaia barrato. Da solo, l'iPhone riattiva Live la volta successiva che apri la fotocamera; per evitarlo, apri Impostazioni > Fotocamera > Mantieni impostazioni e attiva Live Photo. La fotocamera ricorderà così se hai lasciato Live attivo o no.",
            "Non serve rinunciare del tutto alle Live Photo. Molti le tengono attive per bambini e animali, dove il movimento è il bello, e convertono quelle vecchie a gruppi quando il momento è passato. Convertire qualche centinaio di Live Photo libera di solito più spazio che eliminare lo stesso numero di foto normali.",
            "Qualunque cosa tu faccia, concludi in Eliminati di recente: gli originali sostituiti continuano a occupare spazio finché quell'album non viene svuotato. Se eliminare le foto sembra non spostare per niente la barra dello spazio, la nostra guida sul [perché eliminare foto non libera spazio sull'iPhone](/blog/iphone-storage-full) spiega le altre cause abituali.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto spazio in più occupa una Live Photo?",
          answer:
            "Una Live Photo aggiunge all'immagine fissa un video di circa tre secondi. Il video è spesso più della metà della dimensione totale; nelle misurazioni di DiskMop in genere circa il 60%.",
        },
        {
          question:
            "Disattivare Live in Modifica riduce la dimensione del file?",
          answer:
            "No. La modifica in Foto è reversibile; il video resta nel file e puoi riattivare Live più tardi. Non si libera spazio.",
        },
        {
          question: "Come converto le Live Photo in foto fisse su iPhone?",
          answer:
            "In Foto selezionale, apri il menu Altro, duplicale come foto fisse e poi elimina gli originali. Tieni solo la foto in DiskMop fa entrambe le cose in un passaggio e sposta gli originali in Eliminati di recente.",
        },
        {
          question: "La foto fissa conserva data e album?",
          answer:
            "Con DiskMop sì: la foto fissa conserva data originale, luogo, stato di preferita e di nascosta e appartenenza agli album, così compare dove si trovava la Live Photo.",
        },
        {
          question: "Come impedisco alla fotocamera di riattivare Live?",
          answer:
            "Disattiva Live in Fotocamera, poi attiva Impostazioni > Fotocamera > Mantieni impostazioni > Live Photo. La fotocamera manterrà la tua ultima scelta.",
        },
      ],
      verdict: [
        "Le Live Photo raddoppiano in silenzio la dimensione di molte librerie, e l'interruttore ovvio nell'editor non cambia le cose. Per recuperare spazio la parte video deve sparire: duplica come foto fisse ed elimina gli originali in Foto, oppure fai entrambe le cose insieme, poi svuota Eliminati di recente.",
        "DiskMop per iPhone mostra quanto spazio occupano le Live Photo e sostituisce quelle scelte con foto fisse in un solo passaggio, conservando date, luoghi e album e senza mai rimuovere l'unica copia. L'analisi è gratuita; la conversione fa parte di DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Live Photos ocupam mais espaço no iPhone? Como ficar só com a foto",
      metaDescription:
        "Cada Live Photo carrega um vídeo curto que muitas vezes pesa mais que a foto. Por que desligar o Live não libera nada e como ficar só com a foto.",
      subtitle:
        "O que existe dentro de uma Live Photo, por que o botão óbvio não economiza espaço e os caminhos que funcionam",
      intro: [
        "Resposta curta: sim. Uma Live Photo é uma imagem fixa mais um vídeo curto de cerca de três segundos, com os instantes logo antes e logo depois de você apertar o obturador. Esse vídeo muitas vezes pesa mais que a própria foto, então uma fototeca de Live Photos pode ocupar cerca do dobro das mesmas imagens como fotos fixas. Tocar em Live para desligá-lo no editor não ajuda, porque o vídeo continua no arquivo para você poder ligá-lo de novo.",
        "Este guia explica o que uma Live Photo contém, por que o botão nativo não libera espaço, como ficar só com a foto fixa usando o app Fotos ou o DiskMop para iPhone e como impedir que novas Live Photos se acumulem sem perder as que você ama.",
      ],
      keyTakeaways: [
        "Uma Live Photo guarda uma imagem fixa e um vídeo de cerca de três segundos; a parte de vídeo muitas vezes é mais da metade do tamanho total.",
        "Desligar o Live no editor é reversível; o vídeo continua no arquivo e nenhum espaço é liberado.",
        "O Fotos pode criar uma cópia fixa de uma Live Photo com Duplicar, mas o original fica até você apagá-lo, então é preciso limpar duas vezes.",
        "As Ferramentas do DiskMop trocam as Live Photos escolhidas por fotos fixas numa só etapa, mantendo data, local, status de favorita e álbuns, e movem os originais para Apagados Recentemente.",
        "Para tirar menos Live Photos, desligue o Live na Câmera e ative Ajustes > Câmera > Preservar Ajustes > Live Photo para que continue desligado.",
        "O espaço só volta quando Apagados Recentemente é esvaziado, no máximo depois de 30 dias.",
      ],
      dataTable: {
        caption: "O que acontece com a parte de vídeo de uma Live Photo",
        columns: ["Ação", "O vídeo é removido?", "Espaço liberado"],
        rows: [
          ["Desligar o Live em Editar", "Não, dá para religar", "Nenhum"],
          [
            "Duplicar como foto fixa",
            "Só na cópia nova",
            "Nenhum até apagar o original",
          ],
          [
            "Ficar com a foto no DiskMop",
            "Sim, o original vai para Apagados Recentemente",
            "Cerca de 60% de cada Live Photo, depois de esvaziar Apagados Recentemente",
          ],
          [
            "Apagar a Live Photo",
            "Sim, junto com a foto",
            "Tudo, depois de esvaziar Apagados Recentemente",
          ],
        ],
      },
      howTo: {
        name: "Ficar só com a foto fixa das Live Photos no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Veja quantas Live Photos você tem",
            text: "No Fotos, abra Álbuns > Tipos de Mídia > Live Photos. A divisão do armazenamento na tela inicial do DiskMop mostra quanto espaço as Live Photos ocupam no total.",
          },
          {
            name: "Escolha as que vai converter",
            text: "No DiskMop, abra Ferramentas e escolha Live Photos da sua fototeca. Selecione as fotos cujo movimento você não precisa; nada é selecionado por você.",
          },
          {
            name: "Fique com a foto",
            text: "Toque em Ficar com a foto. O DiskMop salva cada uma como foto fixa com data, local, status de favorita e álbuns, e o iOS pede uma única confirmação para mover os originais para Apagados Recentemente.",
          },
          {
            name: "Pare de criar Live Photos",
            text: "Na Câmera, toque no botão Live para desligá-lo. Depois ative Ajustes > Câmera > Preservar Ajustes > Live Photo para a câmera lembrar sua escolha.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "Abra Fotos > Álbuns > Apagados Recentemente, toque em Selecionar e Apagar Tudo para recuperar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title: "O que existe dentro de uma Live Photo",
          content: [
            "Com o Live ligado, a câmera do iPhone continua gravando por um instante antes e depois de você apertar o obturador. O resultado é salvo como um par: uma imagem fixa e um vídeo curto de cerca de três segundos, com som. O Fotos mostra os dois como um só item; toque e segure para ver o movimento.",
            "Esse vídeo não é pequeno. Dependendo da câmera e da cena, costuma ter alguns megabytes, mais da metade do tamanho total da Live Photo. Nas medições do DiskMop, a parte de vídeo fica normalmente em torno de 60% do tamanho. Uma fototeca com milhares de Live Photos pode, portanto, guardar vários gigabytes de clipes de três segundos que quase nunca são reproduzidos.",
            "As Live Photos vêm ligadas por padrão nos iPhones novos, então a maioria das fototecas tem muito mais delas do que os donos imaginam. Álbuns > Tipos de Mídia > Live Photos, no app Fotos, lista todas.",
          ],
        },
        {
          title: "Por que desligar o Live não libera espaço",
          content: [
            "O caminho óbvio é abrir uma Live Photo, tocar em Editar e depois no botão Live para desligá-lo. A foto passa a se comportar como uma foto fixa. Mas editar no Fotos não é destrutivo: o original é mantido para você poder desfazer qualquer alteração, e isso inclui o vídeo. Toque em Live de novo depois e o movimento volta, ou seja, ele nunca saiu do arquivo.",
            "O app Fotos tem uma segunda opção que cria uma foto fixa de verdade. Selecione uma ou mais Live Photos, abra o menu Mais e escolha Duplicar; para Live Photos, ele oferece duplicá-las como fotos fixas. As cópias novas não têm vídeo, mas os originais continuam lá, então depois você precisa encontrá-los, apagá-los e esvaziar Apagados Recentemente.",
            "Para poucas fotos, tudo bem. Para centenas, fazer duas vezes, uma para duplicar e outra para apagar os originais certos, é exatamente o tipo de tarefa que nunca é feita.",
          ],
        },
        {
          title: "Ficando só com a foto no DiskMop",
          content: [
            "O DiskMop para iPhone faz as duas etapas de uma vez. Em Ferramentas, a lista Live Photos mostra as Live Photos da sua fototeca; selecione aquelas cujo movimento você não precisa e toque em Ficar com a foto. Para cada uma, o DiskMop salva uma foto fixa e move a Live Photo original para Apagados Recentemente, pedindo a confirmação do iOS uma única vez para o lote inteiro, e não uma vez por foto.",
            "A foto fixa nova mantém o que importa: a data e o local originais, o status de favorita e de oculta e o lugar dela nos seus álbuns, então ela aparece exatamente onde a Live Photo estava. Edições como um corte ou um filtro são mantidas como aparecem. Se a criação da foto fixa falhar em algum caso, aquele original não é apagado; uma cópia única nunca é removida.",
            "Converter faz parte do DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito, junto com a redução de fotos e vídeos. Se o que você quer manter é um vídeo longo, e não uma Live Photo, nosso guia para [reduzir o tamanho de vídeos no iPhone](/blog/reduce-video-size-iphone) explica essa ferramenta.",
          ],
        },
        {
          title: "Pare de criar Live Photos e recupere o espaço",
          content: [
            "No app Câmera, toque no botão Live (os círculos concêntricos) para que ele fique riscado. Sozinho, o iPhone religa o Live na próxima vez que você abre a câmera; para evitar isso, abra Ajustes > Câmera > Preservar Ajustes e ative Live Photo. A câmera passa a lembrar se você deixou o Live ligado ou desligado.",
            "Não é preciso desistir das Live Photos de vez. Muita gente as mantém para crianças e animais, em que o movimento é o que importa, e converte as antigas em lotes quando o momento já passou. Converter algumas centenas de Live Photos costuma liberar mais espaço que apagar o mesmo número de fotos comuns.",
            "Faça o que fizer, termine em Apagados Recentemente: os originais substituídos continuam ocupando armazenamento até esse álbum ser esvaziado. Se apagar fotos parece não mexer na barra de armazenamento, nosso guia sobre [por que apagar fotos não libera espaço no iPhone](/blog/iphone-storage-full) explica as outras causas comuns.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto espaço a mais uma Live Photo ocupa?",
          answer:
            "Uma Live Photo acrescenta à imagem fixa um vídeo de cerca de três segundos. O vídeo muitas vezes é mais da metade do tamanho total; nas medições do DiskMop, normalmente cerca de 60%.",
        },
        {
          question: "Desligar o Live em Editar reduz o tamanho do arquivo?",
          answer:
            "Não. Editar no Fotos é reversível; o vídeo continua no arquivo e você pode religar o Live depois. Nenhum espaço é liberado.",
        },
        {
          question: "Como converto Live Photos em fotos fixas no iPhone?",
          answer:
            "No Fotos, selecione-as, abra o menu Mais, duplique como fotos fixas e depois apague os originais. Ficar com a foto, no DiskMop, faz as duas coisas numa etapa e move os originais para Apagados Recentemente.",
        },
        {
          question: "A foto fixa mantém a data e os álbuns?",
          answer:
            "Com o DiskMop, sim: a foto fixa mantém a data original, o local, o status de favorita e de oculta e os álbuns, então aparece onde a Live Photo estava.",
        },
        {
          question: "Como impeço a câmera de religar o Live?",
          answer:
            "Desligue o Live na Câmera e depois ative Ajustes > Câmera > Preservar Ajustes > Live Photo. A câmera vai manter sua última escolha.",
        },
      ],
      verdict: [
        "As Live Photos dobram silenciosamente o tamanho de muitas fototecas, e o botão óbvio do editor não muda isso. Para recuperar espaço, a parte de vídeo precisa sair: duplique como fotos fixas e apague os originais no Fotos, ou faça as duas coisas de uma vez, e depois esvazie Apagados Recentemente.",
        "O DiskMop para iPhone mostra quanto espaço as Live Photos ocupam e troca as escolhidas por fotos fixas numa só etapa, mantendo datas, locais e álbuns e nunca removendo a única cópia. A análise é grátis; converter faz parte do DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title: "Live Photos は iPhone の容量を多く使う？ 静止画だけ残す方法",
      metaDescription:
        "Live Photos には写真より大きいことも多い短い動画が付いています。Live をオフにしても容量が空かない理由、静止画だけを残す方法、増え続けるのを止める方法を解説します。",
      subtitle:
        "Live Photos の中身、すぐ思いつくスイッチで容量が減らない理由、そして本当に効く方法",
      intro: [
        "結論から言うと、使います。Live Photos は静止画に、シャッターを押す直前と直後を記録した約 3 秒の短い動画が付いたものです。この動画は写真そのものより大きいことが多く、Live Photos ばかりのライブラリは、同じ写真を静止画で持つ場合のおよそ 2 倍の容量を使うことがあります。写真の編集画面で Live をタップしてオフにしても効果はありません。あとでオンに戻せるよう、動画はファイルに残るからです。",
        "このガイドでは、Live Photos の中身、標準のスイッチで容量が空かない理由、写真アプリや iPhone 版 DiskMop で静止画だけを残す方法、そしてお気に入りを失わずに新しい Live Photos が増え続けるのを止める方法を解説します。",
      ],
      keyTakeaways: [
        "Live Photos は静止画と約 3 秒の動画を保存しており、動画部分が全体の半分以上を占めることがよくあります。",
        "編集画面で Live をオフにする操作は元に戻せるため、動画はファイルに残り、容量は空きません。",
        "写真アプリの「複製」で Live Photos の静止画コピーを作れますが、元の写真は削除するまで残るので、片付けが 2 回必要になります。",
        "DiskMop の「ツール」なら、選んだ Live Photos を 1 回の操作で静止画に置き換え、日付、位置情報、お気に入りの状態、アルバムを保ったまま、元の写真を「最近削除した項目」に移します。",
        "Live Photos を減らすには、カメラで Live をオフにし、「設定」>「カメラ」>「設定を保持」>「Live Photos」をオンにしてオフの状態を保ちます。",
        "容量が戻るのは「最近削除した項目」を空にしたとき、遅くとも 30 日後です。",
      ],
      dataTable: {
        caption: "Live Photos の動画部分はどうなるか",
        columns: ["操作", "動画は消える？", "空く容量"],
        rows: [
          ["「編集」で Live をオフにする", "いいえ（元に戻せる）", "なし"],
          [
            "静止画として複製する",
            "新しいコピーだけ",
            "元の写真を削除するまでなし",
          ],
          [
            "DiskMop で静止画だけ残す",
            "はい（元の写真は「最近削除した項目」へ）",
            "「最近削除した項目」を空にすると 1 枚あたり約 60%",
          ],
          [
            "Live Photos を削除する",
            "はい（写真ごと）",
            "「最近削除した項目」を空にするとすべて",
          ],
        ],
      },
      howTo: {
        name: "iPhone の Live Photos を静止画だけにする",
        totalTime: "PT10M",
        steps: [
          {
            name: "Live Photos の数を確認する",
            text: "写真アプリでアルバム > メディアタイプ >「Live Photos」を開きます。DiskMop のホーム画面にあるストレージの内訳では、Live Photos が全体でどれだけ容量を使っているかがわかります。",
          },
          {
            name: "静止画にする写真を選ぶ",
            text: "DiskMop で「ツール」を開き、ライブラリから「Live Photos」を選びます。動きが不要な写真を選択します。勝手に選択されるものはありません。",
          },
          {
            name: "静止画だけ残す",
            text: "「静止画だけ残す」をタップします。DiskMop が日付、位置情報、お気に入りの状態、アルバムとともに各写真を静止画として保存し、元の写真を「最近削除した項目」に移すことについて iOS が 1 回だけ確認を求めます。",
          },
          {
            name: "新しい Live Photos を止める",
            text: "カメラで Live ボタンをタップしてオフにします。続いて「設定」>「カメラ」>「設定を保持」>「Live Photos」をオンにすると、カメラが選択を覚えます。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "写真 > アルバム > 最近削除した項目を開き、「選択」>「すべて削除」をタップすると、すぐに容量が戻ります。",
          },
        ],
      },
      sections: [
        {
          title: "Live Photos の中身",
          content: [
            "Live がオンのとき、iPhone のカメラはシャッターを押す前後のわずかな時間も記録し続けます。結果はペアで保存されます。静止画と、音声付きの約 3 秒の短い動画です。写真アプリではこれが 1 つの項目として表示され、長押しすると動きが見られます。",
            "この動画は小さくありません。カメラや場面によって数 MB になることが多く、Live Photos 全体のサイズの半分以上を占めます。DiskMop の計測では、動画部分はたいていサイズの約 60% です。そのため数千枚の Live Photos があるライブラリには、ほとんど再生されない 3 秒のクリップが数 GB 分も含まれていることがあります。",
            "新しい iPhone では Live Photos が初期設定でオンになっているため、多くのライブラリには持ち主が思っている以上の数が入っています。写真アプリのアルバム > メディアタイプ >「Live Photos」で一覧できます。",
          ],
        },
        {
          title: "Live をオフにしても容量が空かない理由",
          content: [
            "すぐ思いつくのは、Live Photos を開いて「編集」をタップし、Live ボタンをタップしてオフにする方法です。すると写真は静止画のように振る舞います。しかし写真アプリの編集は非破壊です。どんな変更でも元に戻せるようオリジナルが保持され、そこには動画も含まれます。あとでもう一度 Live をタップすると動きが戻るのは、動画が一度もファイルから消えていないからです。",
            "写真アプリには、本物の静止画を作る 2 つ目の方法もあります。Live Photos を 1 枚以上選び、「その他」メニューから「複製」を選ぶと、Live Photos の場合は静止画として複製するかを選べます。新しいコピーには動画がありませんが、元の写真はそのまま残るため、あとでそれらを探して削除し、さらに「最近削除した項目」を空にする必要があります。",
            "数枚ならそれで十分です。しかし数百枚となると、複製で 1 回、正しい元の写真を削除するのでもう 1 回と、2 度の手間がかかり、結局手を付けずに終わりがちです。",
          ],
        },
        {
          title: "DiskMop で静止画だけ残す",
          content: [
            "iPhone 版 DiskMop は、この 2 つの手順を一度に行います。「ツール」の「Live Photos」一覧にはライブラリ内の Live Photos が表示されるので、動きが不要なものを選んで「静止画だけ残す」をタップします。DiskMop は 1 枚ごとに静止画を保存し、元の Live Photos を「最近削除した項目」に移します。iOS の確認は 1 枚ずつではなく、まとめて 1 回だけです。",
            "新しい静止画には大事な情報が引き継がれます。元の日付と位置情報、お気に入りと非表示の状態、そしてアルバム内の位置です。そのため Live Photos があった場所にそのまま表示されます。トリミングやフィルタなどの編集も見たままの状態で保たれます。どれかの写真で静止画の作成に失敗した場合、その元の写真は削除されません。唯一のコピーが消されることはありません。",
            "静止画への変換は、写真や動画の縮小とともに、7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro の機能です。Live Photos ではなく長い動画を残したい場合は、[iPhone で動画のサイズを小さくする方法](/blog/reduce-video-size-iphone)でそのツールを紹介しています。",
          ],
        },
        {
          title: "新しい Live Photos を止めて容量を取り戻す",
          content: [
            "カメラアプリで Live ボタン（同心円のアイコン）をタップし、斜線が入った状態にします。そのままだと iPhone は次にカメラを開いたとき Live をオンに戻すので、それを防ぐには「設定」>「カメラ」>「設定を保持」を開いて「Live Photos」をオンにします。これでカメラは Live をオンにしたかオフにしたかを覚えます。",
            "Live Photos を完全にやめる必要はありません。動きこそが魅力の子どもやペットにはオンのまま使い、時間が経った古いものをまとめて静止画にする人も多くいます。数百枚の Live Photos を静止画にすると、同じ枚数の普通の写真を削除するより多くの容量が空くのが一般的です。",
            "どの方法でも、最後は「最近削除した項目」で締めくくりましょう。置き換えた元の写真は、そのアルバムを空にするまでストレージを使い続けます。写真を削除してもストレージのバーがまったく動かないように見えるなら、[写真を削除しても iPhone の空き容量が増えない理由](/blog/iphone-storage-full)でほかのよくある原因を解説しています。",
          ],
        },
      ],
      faq: [
        {
          question: "Live Photos はどれくらい多く容量を使いますか？",
          answer:
            "Live Photos は静止画に約 3 秒の動画を追加します。動画は全体の半分以上になることが多く、DiskMop の計測ではたいてい約 60% です。",
        },
        {
          question:
            "「編集」で Live をオフにするとファイルサイズは小さくなりますか？",
          answer:
            "いいえ。写真アプリの編集は元に戻せるため、動画はファイルに残り、あとで Live をオンに戻せます。容量は空きません。",
        },
        {
          question: "iPhone で Live Photos を静止画に変換するには？",
          answer:
            "写真アプリで選択して「その他」メニューから静止画として複製し、元の写真を削除します。DiskMop の「静止画だけ残す」なら、両方を 1 回の操作で行い、元の写真を「最近削除した項目」に移します。",
        },
        {
          question: "静止画に日付やアルバムは引き継がれますか？",
          answer:
            "DiskMop なら引き継がれます。元の日付、位置情報、お気に入りと非表示の状態、アルバムへの所属が保たれるため、Live Photos があった場所に表示されます。",
        },
        {
          question: "カメラが Live をオンに戻さないようにするには？",
          answer:
            "カメラで Live をオフにしてから、「設定」>「カメラ」>「設定を保持」>「Live Photos」をオンにします。カメラが最後の選択を保持します。",
        },
      ],
      verdict: [
        "Live Photos は多くの写真ライブラリのサイズを知らないうちに倍にしていますが、編集画面のスイッチではそれは変わりません。容量を取り戻すには動画部分を消す必要があります。写真アプリで静止画として複製して元の写真を削除するか、両方を一度に行い、そのあと「最近削除した項目」を空にしましょう。",
        "iPhone 版 DiskMop は Live Photos が使っている容量を表示し、選んだものを 1 回の操作で静止画に置き換えます。日付、位置情報、アルバムは保たれ、唯一のコピーが消されることはありません。スキャンは無料で、静止画への変換は 7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro の機能です。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
