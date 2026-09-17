import type { Article } from "../types";

export const findDuplicateSimilarPhotosIphone: Article = {
  slug: "find-duplicate-similar-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-09-17",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone'da Kopya ve Benzer Fotoğrafları Bulma (Apple'ın Kopyalar Albümünün Ötesinde)",
      metaDescription:
        "Apple'ın Kopyalar albümü sadece birebir kopyaları bulur. Seri çekimleri, tekrarları ve kırpılmış veya filtreli kopyaları en iyi kareyi kaybetmeden silmenin yolu.",
      subtitle:
        "Birebir kopyalar işin kolay kısmı; asıl yeri kaplayan aynı anın on farklı çekimi",
      intro: [
        "Kısa cevap: Fotoğraflar uygulaması birebir kopyaları kendi başına bulur (Albümler > Yardımcı Programlar > Kopyalar, iOS 16 ve sonrası) ve tek dokunuşla birleştirir. Bulamadığı şey ise çok daha büyük olan neredeyse aynı fotoğraflar grubudur: aynı selfie için beş deneme, koşan bir çocuğun seri çekimi, iki adım soldan çekilmiş aynı gün batımı ya da birinin kırpıp size geri gönderdiği bir kopya. Bunlar için görsel benzerlik taraması gerekir ve bu tarama tamamen telefonda çalışabilir.",
        "Bu rehber Apple'ın yerleşik araçlarının neyi kapsadığını, benzer çekimlerin neden genellikle gerçek kopyalardan daha fazla yer kapladığını, cihaz üzerinde çalışan bir benzerlik taramasının nasıl işlediğini ve körlemesine silmek yerine her grubun en iyi karesini nasıl saklayacağınızı anlatıyor.",
      ],
      keyTakeaways: [
        "Fotoğraflar'daki Kopyalar albümü (iOS 16+) yalnızca birebir aynı ve neredeyse aynı dosyaları bulur; seri çekimleri, tekrar çekimleri ve düzenlenmiş kopyaları gruplamaz.",
        "Fotoğraflar'da kopyaları birleştirmek en yüksek kaliteli sürümü saklar ve kopyaların meta verilerini tek bir fotoğrafta toplar; hiçbir şey kaybolmaz.",
        "Tipik bir kitaplıkta fotoğrafların dörtte biri ila üçte biri birbirinden saniyeler arayla çekilmiş bir gruba aittir ve bu gruplar birebir kopyalardan kat kat fazla yer kaplar.",
        "Benzerlik taraması dosya adlarını ya da tarihleri değil görsel parmak izlerini karşılaştırır; bu yüzden aylar sonra WhatsApp'tan kırpılmış, filtrelenmiş ya da yeniden kaydedilmiş bir kopyayı da yakalar.",
        "Tarama Apple'ın Vision çerçevesiyle telefonun üzerinde çalışabilir; yükleme ya da hesap gerekmez.",
        "Silinen fotoğraflar 30 gün boyunca Son Silinenler'de bekler; depolama çubuğu ancak o albümü boşalttığınızda hareket eder.",
      ],
      dataTable: {
        caption: "iPhone'da tekrarlanan fotoğrafları bulmanın yolları",
        columns: ["Yöntem", "Bulur", "Kaçırır"],
        rows: [
          [
            "Fotoğraflar > Kopyalar albümü (iOS 16+)",
            "Aynı görüntünün farklı çözünürlük ya da biçimleri dâhil birebir aynı dosyalar",
            "Tekrar çekimler, seri çekimler, kırpılmış ya da filtreli kopyalar",
          ],
          [
            "Fotoğraflar > Seri Çekimler albümü",
            "Seri Çekim moduyla yakalanan kareler",
            "Ayrı fotoğraf olarak çekilmiş tekrarlar",
          ],
          [
            "Görsel benzerlik taraması (DiskMop)",
            "Aynı anın çekimleri, yeniden kaydedilmiş ve düzenlenmiş kopyalar, seri çekimler",
            "Aynı konunun bilerek farklı çekilmiş fotoğrafları",
          ],
        ],
      },
      howTo: {
        name: "iPhone'da kopya ve benzer fotoğrafları kaldırma",
        totalTime: "PT10M",
        steps: [
          {
            name: "Fotoğraflar'da birebir kopyaları birleştirin",
            text: "Fotoğraflar > Albümler yolunu açın, Yardımcı Programlar bölümüne inin ve Kopyalar'ı açın. Bir çiftin yanındaki Birleştir'e ya da Seç > Tümünü Birleştir'e dokunun. Fotoğraflar en iyi sürümü saklar ve meta verileri birleştirir. Albüm görünmüyorsa telefon analizi henüz bitirmemiştir; bir gece kilitli ve şarjda bırakın.",
          },
          {
            name: "Seri çekimleri temizleyin",
            text: "Seri Çekimler albümünü (yine Yardımcı Programlar altında) açın, bir seri çekimi açıp Seç'e dokunun. İstediğiniz kareleri işaretleyip onaylayın; Fotoğraflar yalnızca seçilen kareleri saklayıp saklamayacağınızı sorar.",
          },
          {
            name: "Benzer çekimleri tarayın",
            text: "Görsel benzerlik taraması çalıştırın. iPhone için DiskMop aynı oturumda çekilmiş fotoğrafları ve sonradan yeniden kaydedilmiş kopyaları gruplar ve her grubun en iyi karesini işaretler. Tarama ücretsizdir ve telefonda gerçekleşir.",
          },
          {
            name: "Karşılaştırıp seçin",
            text: "Herhangi bir kareye basılı tutarak tam ekran görün, grup içinde kaydırın ve yüzlere yakınlaşın. Kaldırılacak kareleri işaretleyin; aksini seçmedikçe önerilen kare korunur. Sizin yerinize hiçbir şey seçilmez.",
          },
          {
            name: "Son Silinenler'i boşaltın",
            text: "Silinen fotoğraflar Fotoğraflar > Albümler > Son Silinenler'de 30 gün bekler. Albümü açın, Seç'e ve ardından Tümünü Sil'e dokunarak alanı hemen geri alın.",
          },
        ],
      },
      sections: [
        {
          title: "Apple'ın Kopyalar Albümü Neyi Bulur, Neyi Kaçırır?",
          content: [
            "iOS 16'dan beri Fotoğraflar kitaplığı arka planda tarar ve birebir kopyaları Albümler > Yardımcı Programlar > Kopyalar altında listeler. Kopyalardan biri farklı çözünürlükte ya da dosya biçiminde olsa bile aynı görüntüyü tanır; Birleştir düğmesi en yüksek kaliteli sürümü saklarken tarihleri, konumları ve açıklamaları birleştirir. Mesajlar ya da AirDrop'tan iki kez kaydedilmiş fotoğraflar için mevcut en hızlı çözümdür ve ücretsizdir.",
            "İki sınır önemlidir. Birincisi, albüm ancak telefon kitaplığı analiz ettikten sonra görünür; bu iş telefon kilitli ve şarjdayken yapılır, dolayısıyla yeni bir telefonda bir iki gün sürebilir. İkincisi ve daha önemlisi, albüm bilerek katıdır: bir saniye arayla çekilmiş iki fotoğraf, kırpılmış bir kopya, filtrelenmiş bir kopya ya da WhatsApp'ın size dönüş yolunda sıkıştırdığı bir sürüm Apple'ın tanımına göre kopya değildir ve albümde asla görünmez.",
            "Yine Yardımcı Programlar altındaki Seri Çekimler albümü bir durumu daha kapsar: Seri Çekim moduyla yakalanan kareler. Bir seri çekimi açın, favorileri seçin; Fotoğraflar gerisini silmeyi önerir. Ama tekrarlanan çekimlerin çoğu seri çekim değildir. Bunlar biri gözünü kırptığı için yeniden çekilmiş sıradan fotoğraflardır ve Fotoğraflar her birini benzersiz, birbiriyle ilgisiz bir resim olarak görür.",
          ],
        },
        {
          title: "Benzer Çekimler Neden Kopyalardan Daha Fazla Yer Kaplar?",
          content: [
            "iCloud ile eşitlenen bir iPhone'da birebir kopyalar nadirdir; çoğu kişide en fazla birkaç düzine bulunur. Tekrarlanan çekimler ise tam tersidir: her grup fotoğrafı, her manzara ve her evcil hayvan fotoğrafı üç ila on deneme üretir ve kimse fazlalıkları silmek için geri dönmez. Birkaç bin fotoğraflık bir kitaplıkta görüntülerin dörtte biri ila üçte birinin böyle bir gruba ait olması olağandır.",
            "Hesap acımasızdır. Her biri yaklaşık 2 MB olan on deneme, tek bir an için 20 MB demektir. Bir yılda iki yüz böyle an 4 GB eder; hiçbir Kopyalar albümünün bulabileceğinden fazla. Tekrar çekimler Live Photo ise her biri üç saniyelik bir video da taşır ve rakam kabaca ikiye katlanır.",
            "İyi haber, bu grupların yazılım tarafından kolayca görülebilmesidir. Aynı oturumda çekilen fotoğraflar aynı zaman aralığını paylaşır ve birbirine benzer; aylar sonra yeniden kaydedilmiş kopyalar tarihleri farklı olsa da birbirine benzer. Benzerlik taraması her iki sinyali de kullanır; kopya bulucu ise hiçbirini kullanmaz.",
          ],
        },
        {
          title: "Cihaz Üzerinde Benzerlik Taraması Nasıl Çalışır?",
          content: [
            "Modern iPhone'larda Apple'ın Vision çerçevesi bulunur; bu çerçeve herhangi bir fotoğrafı kompakt bir görsel parmak izine dönüştürebilir: piksellerinin ne olduğunu değil, görüntünün neye benzediğini anlatan bir sayı listesi. Aynı sahnenin iki fotoğrafı, biri kırpılmış, daha parlak ya da hafifçe döndürülmüş olsa bile birbirine yakın parmak izleri üretir. Parmak izlerini karşılaştırmak hızlıdır ve telefondan dışarı hiçbir şey göndermeyi gerektirmez.",
            "iPhone için DiskMop bu yaklaşımı kullanır. Önce tekrar çekimlerin yaşadığı yer olan aynı yarım saat içinde çekilmiş fotoğrafları karşılaştırır, ardından aylar sonra WhatsApp, Instagram ya da AirDrop üzerinden geri gelen kopyaları yakalamak için zaman sınırı olmadan ikinci bir tur çalıştırır. Uzun bir fotoğraf oturumunun tek bir dev gruba dönüşmemesi için bir kare, yalnızca komşusuna değil grubun ilk karesine yakınsa gruba katılır.",
            'Sonuç, her biri önerilen bir kare ve adaylarından oluşan bir anlar listesidir. Taramanın tamamı cihazda gerçekleşir; uygulamanın sunucusu ve hesabı yoktur, App Store\'daki gizlilik etiketinde "Veri Toplanmıyor" yazar. Ekran görüntüleri ve belgeler benzerlik gruplarının bilerek dışında tutulur, çünkü aynı uygulamanın iki ekran görüntüsü kopya olmadan da birbirine benzer.',
          ],
        },
        {
          title: "Körlemesine Silmek Yerine En İyi Kareyi Saklamak",
          content: [
            "Kopya temizleyicilerle ilgili en yaygın şikâyet fotoğrafları kaçırmaları değil, yanlış olanları silmeleridir. Birçok uygulama binlerce neredeyse aynı kareyi önceden seçilmiş olarak sunar ve Sil'e dokunmanıza güvenir. En iyi kare ilk değil de ikinci denemeyse gitmiştir ve bunu ancak haftalar sonra fark edersiniz.",
            "Daha güvenli bir akış seçimle değil öneriyle başlar. DiskMop her grupta en iyi saydığı kareyi önce Apple'ın görüntü estetiği puanına, eşitlik hâlinde çözünürlük ve tarihe göre işaretler; diğerlerini işaretsiz bırakır. Karar vermeden önce herhangi bir kareye basılı tutarak tam ekran görün, grubun kareleri arasında kaydırın ve yüzlere yakınlaşın. Başka bir kareyi tercih ederseniz tek dokunuş korunacak kareyi değiştirir.",
            "Hangi aracı kullanırsanız kullanın, silme işleminin 30 gün boyunca kesin olmadığını unutmayın. Her şey önce Son Silinenler'e gider; kaldırdığınıza pişman olduğunuz bir kareyi oradan geri yükleyebilirsiniz. O albümü boşalttığınızda alan serbest kalır ve karar kalıcı olur; bu yüzden boşaltmadan önce bir kez gözden geçirin.",
          ],
        },
      ],
      faq: [
        {
          question: "Kopyalar albümüm neden boş ya da yok?",
          answer:
            "Fotoğraflar albümü telefon kilitli ve şarjdayken arka planda oluşturur; bu yüzden yeni ya da yakın zamanda geri yüklenmiş bir telefonda görünmesi bir iki gün sürebilir. Boş kalıyorsa kitaplıkta birebir aynı dosya yoktur; neredeyse aynı çekimler orada gösterilmez.",
        },
        {
          question:
            "Fotoğraflar'da kopyaları birleştirmek kalite kaybettirir mi?",
          answer:
            "Hayır. Birleştir en yüksek kaliteli sürümü saklar ve kopyaların açıklama, konum gibi meta verilerini birleştirir. Diğer kopyalar Son Silinenler'e gider.",
        },
        {
          question:
            "Benzer fotoğrafları silmek onları iCloud'dan da kaldırır mı?",
          answer:
            "iCloud Fotoğrafları açıksa evet. Kitaplık eşitlendiği için fotoğraf 30 günlük Son Silinenler süresinin ardından tüm cihazlardan kaybolur. Fikrinizi değiştirirseniz o albümden geri yükleyin.",
        },
        {
          question:
            "Bir uygulamanın fotoğraf kitaplığımı taramasına izin vermek güvenli mi?",
          answer:
            'Tarama telefonda kalıyorsa güvenlidir. DiskMop Apple\'ın cihaz üzerinde çalışan çerçevelerini kullanır, sunucusu ve hesabı yoktur, App Store gizlilik etiketinde "Veri Toplanmıyor" yazar. Hesap isteyen ya da reklam gösteren her temizleyiciye şüpheyle yaklaşın.',
        },
      ],
      verdict: [
        "Araçları doğru sırayla kullanın. Fotoğraflar'ın birebir kopyaları birleştirmesine ve seri çekimleri ücretsiz kırpmasına izin verin, ardından boşa giden alanın çoğunu oluşturan tekrar çekimler ve yeniden kaydedilmiş kopyalar için görsel benzerlik taraması çalıştırın. Korunacak kareyi kendiniz seçin ve işiniz bitince Son Silinenler'i boşaltın.",
        "iPhone için DiskMop benzerlik kısmını cihaz üzerinde yapar: çekimleri ana göre gruplar, aylar sonra geri gelen kopyaları yakalar, önerilen bir kareyi işaretler ve önceden hiçbir şey seçmez. Tarama ücretsizdir, ilk üç silme ücretsizdir ve tam sürüm aboneliksiz tek seferlik bir satın almadır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Find Duplicate and Similar Photos on iPhone (Beyond Apple's Duplicates Album)",
      metaDescription:
        "Apple's Duplicates album finds only exact copies. Here is how to find bursts, retries and edited copies on iPhone and delete them without losing the best frame.",
      subtitle:
        "Exact copies are the easy part; the ten shots of the same moment are the real space hog",
      intro: [
        "Short answer: the Photos app finds exact duplicates on its own (Albums > Utilities > Duplicates, iOS 16 and later) and merges them with one tap. What it does not find is the far larger group of near-identical photos: five attempts at one selfie, a burst of a child running, the same sunset from two steps to the left, or a copy someone cropped and sent back to you. Those need a visual similarity scan, which can run entirely on the phone.",
        "This guide explains what Apple's built-in tools cover, why similar shots usually take more space than true duplicates, how an on-device similarity scan works, and how to keep the best frame of each group instead of deleting blindly.",
      ],
      keyTakeaways: [
        "The Duplicates album in Photos (iOS 16+) finds identical and near-identical files only; it does not group bursts, retries or edited copies.",
        "Merging duplicates in Photos keeps the highest-quality version and combines the metadata of the copies; nothing is lost.",
        "In a typical library, a quarter to a third of the photos belong to a group of shots taken within seconds of each other, and those groups outweigh exact duplicates many times over.",
        "A similarity scan compares visual fingerprints, not file names or dates, so it also catches a copy that was cropped, filtered or re-saved from WhatsApp months later.",
        "The scan can run on the phone with Apple's Vision framework; no upload or account is needed.",
        "Deleted photos stay in Recently Deleted for 30 days, so the storage bar only moves after you empty that album.",
      ],
      dataTable: {
        caption: "Ways to find repeated photos on an iPhone",
        columns: ["Method", "Finds", "Misses"],
        rows: [
          [
            "Photos > Duplicates album (iOS 16+)",
            "Identical files, including different resolutions or formats of the same image",
            "Retries, bursts, cropped or filtered copies",
          ],
          [
            "Photos > Bursts album",
            "Frames captured with Burst mode",
            "Retries taken as separate photos",
          ],
          [
            "Visual similarity scan (DiskMop)",
            "Shots of the same moment, re-saved and edited copies, bursts",
            "Deliberately different photos of the same subject",
          ],
        ],
      },
      howTo: {
        name: "Remove duplicate and similar photos on iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Merge exact duplicates in Photos",
            text: "Open Photos > Albums, scroll to Utilities and open Duplicates. Tap Merge next to a pair, or Select > Merge All. Photos keeps the best version and combines the metadata. If the album is missing, the phone has not finished analyzing yet; leave it locked and charging overnight.",
          },
          {
            name: "Clean up bursts",
            text: "Open the Bursts album (also under Utilities), open a burst and tap Select. Mark the frames you want and confirm; Photos asks whether to keep only the selected frames.",
          },
          {
            name: "Scan for similar shots",
            text: "Run a visual similarity scan. DiskMop for iPhone groups photos taken within the same session and copies re-saved later, and marks the best frame of every group. Scanning is free and happens on the phone.",
          },
          {
            name: "Compare and choose",
            text: "Press and hold any frame to see it full screen, swipe through the group and zoom in on faces. Tick the frames to remove; the suggested keeper stays unless you decide otherwise. Nothing is selected for you.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Deleted photos wait 30 days in Photos > Albums > Recently Deleted. Open it, tap Select and Delete All to get the space back now.",
          },
        ],
      },
      sections: [
        {
          title: "What Apple's Duplicates Album Finds, and What It Misses",
          content: [
            "Since iOS 16, Photos scans the library in the background and lists exact duplicates under Albums > Utilities > Duplicates. It recognizes the same image even when one copy is a different resolution or file format, and its Merge button keeps the highest-quality version while combining dates, locations and captions. For photos that were saved twice from Messages or AirDrop, it is the fastest fix available and it is free.",
            "Two limits matter. First, the album only appears after the phone has analyzed the library, which happens when it is locked and charging, so on a new phone it can take a day or two. Second, and more important, it is strict on purpose: two photos taken a second apart, a cropped copy, a filtered copy, or a version that WhatsApp compressed on the way back to you are not duplicates in Apple's definition and never appear in the album.",
            "The Bursts album, also under Utilities, covers one more case: frames captured with Burst mode. Open a burst, choose favorites, and Photos offers to delete the rest. But most repeated shots are not bursts. They are ordinary photos taken again because someone blinked, and Photos treats each of them as a unique, unrelated picture.",
          ],
        },
        {
          title: "Why Similar Shots Take More Space Than Duplicates",
          content: [
            "Exact duplicates are rare on an iPhone that syncs with iCloud; most people have a few dozen at most. Repeated shots are the opposite: every group photo, every landscape and every picture of a pet produces three to ten attempts, and nobody goes back to delete the extras. In a library of a few thousand photos it is common for a quarter to a third of the images to belong to such a group.",
            "The arithmetic is unforgiving. Ten attempts at one photo at about 2 MB each is 20 MB for one moment. Two hundred such moments over a year is 4 GB, more than any Duplicates album will ever find. If the retries were Live Photos, each carries a three-second video as well and the figure roughly doubles.",
            "The good news is that these groups are easy for software to see. Photos taken within the same session share a time window and look alike; copies re-saved months later look alike even though their dates differ. A similarity scan uses both signals, while a duplicate finder uses neither.",
          ],
        },
        {
          title: "How an On-Device Similarity Scan Works",
          content: [
            "Modern iPhones include Apple's Vision framework, which can turn any photo into a compact visual fingerprint: a list of numbers describing what the image looks like rather than what its pixels are. Two photos of the same scene produce fingerprints that are close to each other, even if one is cropped, brighter or slightly rotated. Comparing fingerprints is fast and does not require sending anything off the phone.",
            "DiskMop for iPhone uses this approach. It first compares photos taken within the same half hour, where repeated shots live, then runs a second pass without any time limit to catch copies that came back through WhatsApp, Instagram or AirDrop months later. To keep a long photo session from collapsing into one giant group, a frame joins a group only if it is close to the group's first frame, not just to its neighbor.",
            "The result is a list of moments, each with a suggested keeper and its candidates. The whole scan happens on the device; the app has no server and no account, and its privacy label on the App Store reads Data Not Collected. Screenshots and documents are kept out of the similarity groups on purpose, since two screenshots of the same app look alike without being copies.",
          ],
        },
        {
          title: "Keeping the Best Frame Instead of Deleting Blindly",
          content: [
            "The most common complaint about duplicate cleaners is not that they miss photos, but that they delete the wrong ones. Many apps present thousands of near-identical frames already selected and count on you to tap Delete. If the best frame was the second attempt rather than the first, it is gone, and you only notice weeks later.",
            "A safer workflow starts with a suggestion, not a selection. DiskMop marks the frame it considers best in each group, using Apple's image aesthetics score first and resolution and recency as tie-breakers, and leaves the others unticked. Press and hold any frame to see it full screen, swipe between the frames of the group and zoom in on the faces before you decide. If you prefer another frame, one tap changes the keeper.",
            "Whatever tool you use, remember that the deletion is not final for 30 days. Everything goes to Recently Deleted first, where you can restore a frame you regret removing. Once you empty that album, the space is freed and the decision is permanent, so review it once before you do.",
          ],
        },
      ],
      faq: [
        {
          question: "Why is my Duplicates album empty or missing?",
          answer:
            "Photos builds the album in the background while the phone is locked and charging, so on a new or recently restored phone it can take a day or two to appear. If it stays empty, the library simply has no identical files; near-identical shots are not shown there.",
        },
        {
          question: "Does merging duplicates in Photos lose quality?",
          answer:
            "No. Merge keeps the version with the highest quality and combines the metadata of the copies, such as captions and locations. The other copies go to Recently Deleted.",
        },
        {
          question: "Will deleting similar photos remove them from iCloud?",
          answer:
            "Yes, if iCloud Photos is on. The library is synchronized, so the photo disappears from all devices after the 30-day Recently Deleted period. Restore it from that album if you change your mind.",
        },
        {
          question: "Is it safe to let an app scan my photo library?",
          answer:
            "It is if the scan stays on the phone. DiskMop uses Apple's on-device frameworks, has no server and no account, and its App Store privacy label states Data Not Collected. Be wary of any cleaner that requires an account or shows ads.",
        },
      ],
      verdict: [
        "Use the tools in the right order. Let Photos merge exact duplicates and trim bursts for free, then run a visual similarity scan for the retries and re-saved copies that make up most of the wasted space. Choose the keeper yourself, and empty Recently Deleted when you are done.",
        "DiskMop for iPhone does the similarity part on the device: it groups shots by moment, catches copies that came back months later, marks a suggested keeper and pre-selects nothing. Scanning is free, the first three deletions are free, and the full version is a single purchase with no subscription.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Doppelte und ähnliche Fotos auf dem iPhone finden (jenseits von Apples Duplikate-Album)",
      metaDescription:
        "Apples Duplikate-Album findet nur exakte Kopien. So finden Sie auf dem iPhone auch Serien, Wiederholungen und bearbeitete Kopien und behalten das beste Bild.",
      subtitle:
        "Exakte Kopien sind der leichte Teil; die zehn Aufnahmen desselben Moments fressen den Platz",
      intro: [
        "Kurze Antwort: Die Fotos-App findet exakte Duplikate von selbst (Alben > Dienstprogramme > Duplikate, ab iOS 16) und führt sie mit einem Tipp zusammen. Was sie nicht findet, ist die weit größere Gruppe der fast identischen Fotos: fünf Versuche für ein Selfie, eine Serie eines rennenden Kindes, derselbe Sonnenuntergang zwei Schritte weiter links oder eine Kopie, die jemand beschnitten und Ihnen zurückgeschickt hat. Dafür braucht es einen visuellen Ähnlichkeitsscan, der vollständig auf dem Telefon laufen kann.",
        "Dieser Leitfaden erklärt, was Apples eingebaute Werkzeuge abdecken, warum ähnliche Aufnahmen meist mehr Platz belegen als echte Duplikate, wie ein Ähnlichkeitsscan auf dem Gerät funktioniert und wie Sie von jeder Gruppe das beste Bild behalten, statt blind zu löschen.",
      ],
      keyTakeaways: [
        "Das Duplikate-Album in Fotos (ab iOS 16) findet nur identische und nahezu identische Dateien; Serien, Wiederholungen oder bearbeitete Kopien gruppiert es nicht.",
        "Beim Zusammenführen von Duplikaten in Fotos bleibt die Version mit der höchsten Qualität erhalten, und die Metadaten der Kopien werden kombiniert; nichts geht verloren.",
        "In einer typischen Mediathek gehört ein Viertel bis ein Drittel der Fotos zu einer Gruppe von Aufnahmen, die innerhalb von Sekunden entstanden sind, und diese Gruppen wiegen exakte Duplikate um ein Vielfaches auf.",
        "Ein Ähnlichkeitsscan vergleicht visuelle Fingerabdrücke statt Dateinamen oder Datumsangaben und erkennt deshalb auch eine Kopie, die Monate später beschnitten, gefiltert oder erneut aus WhatsApp gespeichert wurde.",
        "Der Scan kann mit Apples Vision-Framework auf dem Telefon laufen; weder Upload noch Konto sind nötig.",
        'Gelöschte Fotos bleiben 30 Tage in "Zuletzt gelöscht"; der Speicherbalken bewegt sich erst, wenn Sie dieses Album leeren.',
      ],
      dataTable: {
        caption: "Wege, wiederholte Fotos auf einem iPhone zu finden",
        columns: ["Methode", "Findet", "Übersieht"],
        rows: [
          [
            "Fotos > Album Duplikate (ab iOS 16)",
            "Identische Dateien, auch verschiedene Auflösungen oder Formate desselben Bildes",
            "Wiederholungen, Serien, beschnittene oder gefilterte Kopien",
          ],
          [
            "Fotos > Album Serien",
            "Im Serienmodus aufgenommene Bilder",
            "Als einzelne Fotos aufgenommene Wiederholungen",
          ],
          [
            "Visueller Ähnlichkeitsscan (DiskMop)",
            "Aufnahmen desselben Moments, erneut gespeicherte und bearbeitete Kopien, Serien",
            "Bewusst unterschiedliche Fotos desselben Motivs",
          ],
        ],
      },
      howTo: {
        name: "Doppelte und ähnliche Fotos auf dem iPhone entfernen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Exakte Duplikate in Fotos zusammenführen",
            text: "Öffnen Sie Fotos > Alben, scrollen Sie zu Dienstprogramme und öffnen Sie Duplikate. Tippen Sie neben einem Paar auf Zusammenführen oder auf Auswählen > Alle zusammenführen. Fotos behält die beste Version und kombiniert die Metadaten. Fehlt das Album, ist die Analyse noch nicht abgeschlossen; lassen Sie das Telefon über Nacht gesperrt am Ladegerät.",
          },
          {
            name: "Serien aufräumen",
            text: "Öffnen Sie das Album Serien (ebenfalls unter Dienstprogramme), öffnen Sie eine Serie und tippen Sie auf Auswählen. Markieren Sie die gewünschten Bilder und bestätigen Sie; Fotos fragt, ob nur die ausgewählten Bilder behalten werden sollen.",
          },
          {
            name: "Nach ähnlichen Aufnahmen suchen",
            text: "Führen Sie einen visuellen Ähnlichkeitsscan aus. DiskMop für iPhone gruppiert Fotos aus derselben Sitzung sowie später erneut gespeicherte Kopien und markiert in jeder Gruppe das beste Bild. Der Scan ist kostenlos und läuft auf dem Telefon.",
          },
          {
            name: "Vergleichen und entscheiden",
            text: "Halten Sie ein Bild gedrückt, um es bildschirmfüllend zu sehen, wischen Sie durch die Gruppe und zoomen Sie auf die Gesichter. Haken Sie die Bilder ab, die weg sollen; der vorgeschlagene Favorit bleibt, sofern Sie nichts anderes entscheiden. Nichts wird für Sie vorausgewählt.",
          },
          {
            name: '"Zuletzt gelöscht" leeren',
            text: "Gelöschte Fotos warten 30 Tage unter Fotos > Alben > Zuletzt gelöscht. Öffnen Sie das Album, tippen Sie auf Auswählen und dann auf Alle löschen, um den Platz sofort zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Was Apples Duplikate-Album findet und was es übersieht",
          content: [
            "Seit iOS 16 durchsucht Fotos die Mediathek im Hintergrund und listet exakte Duplikate unter Alben > Dienstprogramme > Duplikate auf. Es erkennt dasselbe Bild auch dann, wenn eine Kopie eine andere Auflösung oder ein anderes Dateiformat hat, und die Schaltfläche Zusammenführen behält die Version mit der höchsten Qualität, während Datum, Ort und Beschreibungen kombiniert werden. Für Fotos, die zweimal aus Nachrichten oder per AirDrop gesichert wurden, ist das die schnellste verfügbare Lösung, und sie ist kostenlos.",
            "Zwei Grenzen sind wichtig. Erstens erscheint das Album erst, nachdem das Telefon die Mediathek analysiert hat, was gesperrt und am Ladegerät passiert; auf einem neuen Gerät kann das ein bis zwei Tage dauern. Zweitens, und das wiegt schwerer, ist es absichtlich streng: Zwei Fotos im Abstand von einer Sekunde, eine beschnittene Kopie, eine gefilterte Kopie oder eine Version, die WhatsApp auf dem Rückweg zu Ihnen komprimiert hat, sind nach Apples Definition keine Duplikate und tauchen in dem Album nie auf.",
            "Das Album Serien, ebenfalls unter Dienstprogramme, deckt einen weiteren Fall ab: Bilder, die im Serienmodus aufgenommen wurden. Öffnen Sie eine Serie, wählen Sie Favoriten, und Fotos bietet an, den Rest zu löschen. Doch die meisten wiederholten Aufnahmen sind keine Serien. Es sind gewöhnliche Fotos, die noch einmal gemacht wurden, weil jemand geblinzelt hat, und Fotos behandelt jedes davon als eigenständiges, unverbundenes Bild.",
          ],
        },
        {
          title: "Warum ähnliche Aufnahmen mehr Platz belegen als Duplikate",
          content: [
            "Exakte Duplikate sind auf einem iPhone, das mit iCloud synchronisiert, selten; die meisten Menschen haben höchstens ein paar Dutzend. Wiederholte Aufnahmen sind das Gegenteil: Jedes Gruppenfoto, jede Landschaft und jedes Bild eines Haustiers erzeugt drei bis zehn Versuche, und niemand löscht die überzähligen später. In einer Mediathek mit einigen tausend Fotos gehört häufig ein Viertel bis ein Drittel der Bilder zu einer solchen Gruppe.",
            "Die Rechnung ist unerbittlich. Zehn Versuche für ein Foto zu je etwa 2 MB ergeben 20 MB für einen einzigen Moment. Zweihundert solcher Momente im Jahr sind 4 GB, mehr als jedes Duplikate-Album je finden wird. Waren die Wiederholungen Live Photos, trägt jede zusätzlich ein dreisekündiges Video, und die Zahl verdoppelt sich ungefähr.",
            "Die gute Nachricht: Software erkennt diese Gruppen leicht. Fotos aus derselben Sitzung teilen sich ein Zeitfenster und sehen sich ähnlich; Kopien, die Monate später erneut gespeichert wurden, sehen sich ähnlich, obwohl ihre Datumsangaben abweichen. Ein Ähnlichkeitsscan nutzt beide Signale, ein Duplikatfinder keines von beiden.",
          ],
        },
        {
          title: "So funktioniert ein Ähnlichkeitsscan auf dem Gerät",
          content: [
            "Moderne iPhones enthalten Apples Vision-Framework, das jedes Foto in einen kompakten visuellen Fingerabdruck verwandeln kann: eine Liste von Zahlen, die beschreibt, wie das Bild aussieht, statt was seine Pixel sind. Zwei Fotos derselben Szene erzeugen Fingerabdrücke, die nahe beieinander liegen, selbst wenn eines beschnitten, heller oder leicht gedreht ist. Der Vergleich von Fingerabdrücken ist schnell und erfordert nicht, irgendetwas vom Telefon zu senden.",
            "DiskMop für iPhone nutzt diesen Ansatz. Es vergleicht zuerst Fotos aus derselben halben Stunde, wo die Wiederholungen sitzen, und macht dann einen zweiten Durchlauf ohne Zeitlimit, um Kopien zu erwischen, die Monate später über WhatsApp, Instagram oder AirDrop zurückgekommen sind. Damit eine lange Fotosession nicht zu einer einzigen Riesengruppe zusammenfällt, kommt ein Bild nur dann in eine Gruppe, wenn es dem ersten Bild der Gruppe ähnelt und nicht bloß seinem Nachbarn.",
            'Das Ergebnis ist eine Liste von Momenten, jeder mit einem vorgeschlagenen Favoriten und seinen Kandidaten. Der gesamte Scan findet auf dem Gerät statt; die App hat weder Server noch Konto, und ihr Datenschutzlabel im App Store lautet "Keine Daten erfasst". Screenshots und Dokumente bleiben absichtlich aus den Ähnlichkeitsgruppen heraus, denn zwei Screenshots derselben App sehen sich ähnlich, ohne Kopien zu sein.',
          ],
        },
        {
          title: "Das beste Bild behalten, statt blind zu löschen",
          content: [
            "Die häufigste Klage über Duplikat-Reiniger ist nicht, dass sie Fotos übersehen, sondern dass sie die falschen löschen. Viele Apps präsentieren Tausende fast identischer Bilder bereits vorausgewählt und verlassen sich darauf, dass Sie auf Löschen tippen. War das beste Bild der zweite Versuch statt des ersten, ist es weg, und Sie bemerken es erst Wochen später.",
            "Ein sicherer Ablauf beginnt mit einem Vorschlag, nicht mit einer Auswahl. DiskMop markiert in jeder Gruppe das Bild, das es für das beste hält, zuerst nach Apples Ästhetikbewertung, bei Gleichstand nach Auflösung und Aktualität, und lässt die übrigen unmarkiert. Halten Sie ein Bild gedrückt, um es bildschirmfüllend zu sehen, wischen Sie zwischen den Bildern der Gruppe und zoomen Sie auf die Gesichter, bevor Sie entscheiden. Bevorzugen Sie ein anderes Bild, ändert ein Tipp den Favoriten.",
            'Welches Werkzeug Sie auch verwenden: Das Löschen ist 30 Tage lang nicht endgültig. Alles landet zuerst in "Zuletzt gelöscht", wo Sie ein Bild wiederherstellen können, dessen Entfernung Sie bereuen. Sobald Sie dieses Album leeren, wird der Platz frei und die Entscheidung ist endgültig; sehen Sie es also vorher einmal durch.',
          ],
        },
      ],
      faq: [
        {
          question: "Warum ist mein Duplikate-Album leer oder fehlt?",
          answer:
            "Fotos erstellt das Album im Hintergrund, während das Telefon gesperrt ist und lädt; auf einem neuen oder frisch wiederhergestellten Gerät kann es daher ein bis zwei Tage dauern, bis es erscheint. Bleibt es leer, enthält die Mediathek schlicht keine identischen Dateien; fast identische Aufnahmen werden dort nicht angezeigt.",
        },
        {
          question:
            "Verliert man beim Zusammenführen von Duplikaten in Fotos Qualität?",
          answer:
            'Nein. Zusammenführen behält die Version mit der höchsten Qualität und kombiniert die Metadaten der Kopien, etwa Beschreibungen und Orte. Die übrigen Kopien wandern nach "Zuletzt gelöscht".',
        },
        {
          question:
            "Werden ähnliche Fotos beim Löschen auch aus iCloud entfernt?",
          answer:
            'Ja, wenn iCloud-Fotos aktiviert ist. Die Mediathek wird synchronisiert, das Foto verschwindet also nach den 30 Tagen in "Zuletzt gelöscht" von allen Geräten. Stellen Sie es aus diesem Album wieder her, falls Sie es sich anders überlegen.',
        },
        {
          question:
            "Ist es sicher, eine App meine Fotomediathek scannen zu lassen?",
          answer:
            'Ja, solange der Scan auf dem Telefon bleibt. DiskMop nutzt Apples Frameworks auf dem Gerät, hat weder Server noch Konto, und sein Datenschutzlabel im App Store lautet "Keine Daten erfasst". Seien Sie misstrauisch bei jedem Reiniger, der ein Konto verlangt oder Werbung zeigt.',
        },
      ],
      verdict: [
        'Nutzen Sie die Werkzeuge in der richtigen Reihenfolge. Lassen Sie Fotos exakte Duplikate zusammenführen und Serien kostenlos ausdünnen, und führen Sie dann einen visuellen Ähnlichkeitsscan für die Wiederholungen und erneut gespeicherten Kopien aus, die den größten Teil des verschwendeten Platzes ausmachen. Wählen Sie den Favoriten selbst, und leeren Sie "Zuletzt gelöscht", wenn Sie fertig sind.',
        "DiskMop für iPhone erledigt den Ähnlichkeitsteil auf dem Gerät: Es gruppiert Aufnahmen nach Moment, erwischt Kopien, die Monate später zurückgekommen sind, markiert einen vorgeschlagenen Favoriten und wählt nichts vorab aus. Der Scan ist kostenlos, die ersten drei Löschungen sind kostenlos, und die Vollversion ist ein einmaliger Kauf ohne Abo.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Photos en double et similaires sur iPhone : au-delà de l'album Doublons d'Apple",
      metaDescription:
        "L'album Doublons d'Apple ne voit que les copies exactes. Trouvez rafales, reprises et copies retouchées sur iPhone et supprimez-les en gardant la meilleure image.",
      subtitle:
        "Les copies exactes sont la partie facile ; les dix clichés du même instant sont les vrais dévoreurs d'espace",
      intro: [
        "Réponse courte : l'app Photos trouve les doublons exacts toute seule (Albums > Utilitaires > Doublons, iOS 16 et versions ultérieures) et les fusionne d'une touche. Ce qu'elle ne trouve pas, c'est le groupe bien plus vaste des photos quasi identiques : cinq essais pour un selfie, une rafale d'un enfant qui court, le même coucher de soleil pris deux pas plus à gauche, ou une copie que quelqu'un a recadrée avant de vous la renvoyer. Pour celles-là, il faut une analyse de similarité visuelle, qui peut s'exécuter entièrement sur le téléphone.",
        "Ce guide explique ce que couvrent les outils intégrés d'Apple, pourquoi les clichés similaires occupent généralement plus de place que les vrais doublons, comment fonctionne une analyse de similarité sur l'appareil, et comment conserver la meilleure image de chaque groupe au lieu de supprimer à l'aveugle.",
      ],
      keyTakeaways: [
        "L'album Doublons de Photos (iOS 16+) ne trouve que les fichiers identiques ou quasi identiques ; il ne regroupe ni les rafales, ni les reprises, ni les copies retouchées.",
        "Fusionner les doublons dans Photos conserve la version de meilleure qualité et combine les métadonnées des copies ; rien n'est perdu.",
        "Dans une photothèque typique, un quart à un tiers des photos appartiennent à un groupe de clichés pris à quelques secondes d'intervalle, et ces groupes pèsent bien plus lourd que les doublons exacts.",
        "Une analyse de similarité compare des empreintes visuelles, pas des noms de fichiers ni des dates ; elle repère donc aussi une copie recadrée, filtrée ou réenregistrée depuis WhatsApp des mois plus tard.",
        "L'analyse peut tourner sur le téléphone grâce au framework Vision d'Apple ; ni envoi ni compte ne sont nécessaires.",
        "Les photos supprimées restent 30 jours dans Supprimés récemment ; la jauge de stockage ne bouge qu'après avoir vidé cet album.",
      ],
      dataTable: {
        caption: "Les moyens de trouver les photos répétées sur un iPhone",
        columns: ["Méthode", "Trouve", "Rate"],
        rows: [
          [
            "Photos > album Doublons (iOS 16+)",
            "Fichiers identiques, y compris différentes résolutions ou formats de la même image",
            "Reprises, rafales, copies recadrées ou filtrées",
          ],
          [
            "Photos > album Rafales",
            "Images capturées en mode Rafale",
            "Reprises prises comme photos séparées",
          ],
          [
            "Analyse de similarité visuelle (DiskMop)",
            "Clichés du même instant, copies réenregistrées et retouchées, rafales",
            "Photos volontairement différentes du même sujet",
          ],
        ],
      },
      howTo: {
        name: "Supprimer les photos en double et similaires sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Fusionner les doublons exacts dans Photos",
            text: "Ouvrez Photos > Albums, faites défiler jusqu'à Utilitaires et ouvrez Doublons. Touchez Fusionner à côté d'une paire, ou Sélectionner > Tout fusionner. Photos garde la meilleure version et combine les métadonnées. Si l'album est absent, le téléphone n'a pas fini son analyse ; laissez-le verrouillé et en charge toute une nuit.",
          },
          {
            name: "Nettoyer les rafales",
            text: "Ouvrez l'album Rafales (également sous Utilitaires), ouvrez une rafale et touchez Sélectionner. Cochez les images à garder et confirmez ; Photos demande s'il faut ne conserver que les images sélectionnées.",
          },
          {
            name: "Rechercher les clichés similaires",
            text: "Lancez une analyse de similarité visuelle. DiskMop pour iPhone regroupe les photos prises au cours d'une même session et les copies réenregistrées plus tard, et marque la meilleure image de chaque groupe. L'analyse est gratuite et se fait sur le téléphone.",
          },
          {
            name: "Comparer et choisir",
            text: "Maintenez une image appuyée pour la voir en plein écran, balayez le groupe et zoomez sur les visages. Cochez les images à retirer ; l'image recommandée reste, sauf décision contraire de votre part. Rien n'est sélectionné à votre place.",
          },
          {
            name: "Vider Supprimés récemment",
            text: "Les photos supprimées attendent 30 jours dans Photos > Albums > Supprimés récemment. Ouvrez l'album, touchez Sélectionner puis Tout supprimer pour récupérer l'espace immédiatement.",
          },
        ],
      },
      sections: [
        {
          title: "Ce que l'album Doublons d'Apple trouve, et ce qu'il rate",
          content: [
            "Depuis iOS 16, Photos analyse la photothèque en arrière-plan et liste les doublons exacts sous Albums > Utilitaires > Doublons. Il reconnaît la même image même lorsqu'une copie a une résolution ou un format différent, et son bouton Fusionner conserve la version de meilleure qualité tout en combinant dates, lieux et légendes. Pour les photos enregistrées deux fois depuis Messages ou AirDrop, c'est la solution la plus rapide qui existe, et elle est gratuite.",
            "Deux limites comptent. D'abord, l'album n'apparaît qu'une fois que le téléphone a analysé la photothèque, ce qui se produit lorsqu'il est verrouillé et en charge ; sur un téléphone neuf, cela peut prendre un jour ou deux. Ensuite, et c'est plus important, il est strict à dessein : deux photos prises à une seconde d'intervalle, une copie recadrée, une copie filtrée ou une version que WhatsApp a compressée en vous la renvoyant ne sont pas des doublons au sens d'Apple et n'apparaissent jamais dans l'album.",
            "L'album Rafales, lui aussi sous Utilitaires, couvre un cas de plus : les images capturées en mode Rafale. Ouvrez une rafale, choisissez vos favorites, et Photos propose de supprimer le reste. Mais la plupart des clichés répétés ne sont pas des rafales. Ce sont des photos ordinaires reprises parce que quelqu'un a cligné des yeux, et Photos traite chacune d'elles comme une image unique, sans lien avec les autres.",
          ],
        },
        {
          title:
            "Pourquoi les clichés similaires prennent plus de place que les doublons",
          content: [
            "Les doublons exacts sont rares sur un iPhone synchronisé avec iCloud ; la plupart des gens en ont au plus quelques dizaines. Les clichés répétés, c'est l'inverse : chaque photo de groupe, chaque paysage et chaque portrait d'animal produit trois à dix essais, et personne ne revient supprimer les surplus. Dans une photothèque de quelques milliers de photos, il est courant qu'un quart à un tiers des images appartiennent à un tel groupe.",
            "L'arithmétique est implacable. Dix essais pour une photo d'environ 2 Mo chacun, c'est 20 Mo pour un seul instant. Deux cents instants de ce genre sur une année, c'est 4 Go, plus que ce qu'un album Doublons trouvera jamais. Si les reprises étaient des Live Photos, chacune embarque aussi une vidéo de trois secondes et le chiffre double à peu près.",
            "La bonne nouvelle, c'est que ces groupes sont faciles à voir pour un logiciel. Les photos prises au cours d'une même session partagent une fenêtre de temps et se ressemblent ; les copies réenregistrées des mois plus tard se ressemblent même si leurs dates diffèrent. Une analyse de similarité utilise les deux signaux, alors qu'un détecteur de doublons n'en utilise aucun.",
          ],
        },
        {
          title: "Comment fonctionne une analyse de similarité sur l'appareil",
          content: [
            "Les iPhone modernes intègrent le framework Vision d'Apple, capable de transformer n'importe quelle photo en une empreinte visuelle compacte : une liste de nombres décrivant à quoi ressemble l'image plutôt que ce que sont ses pixels. Deux photos de la même scène produisent des empreintes proches l'une de l'autre, même si l'une est recadrée, plus lumineuse ou légèrement tournée. Comparer des empreintes est rapide et n'exige d'envoyer quoi que ce soit hors du téléphone.",
            "DiskMop pour iPhone suit cette approche. Il compare d'abord les photos prises dans la même demi-heure, là où vivent les reprises, puis effectue une seconde passe sans limite de temps pour attraper les copies revenues par WhatsApp, Instagram ou AirDrop des mois plus tard. Pour éviter qu'une longue séance photo ne s'effondre en un seul groupe géant, une image ne rejoint un groupe que si elle est proche de la première image du groupe, et pas seulement de sa voisine.",
            "Le résultat est une liste d'instants, chacun avec une image recommandée et ses candidates. Toute l'analyse se déroule sur l'appareil ; l'app n'a ni serveur ni compte, et son étiquette de confidentialité sur l'App Store indique « Données non collectées ». Les captures d'écran et les documents sont volontairement exclus des groupes de similarité, car deux captures de la même app se ressemblent sans être des copies.",
          ],
        },
        {
          title: "Garder la meilleure image au lieu de supprimer à l'aveugle",
          content: [
            "Le reproche le plus fréquent fait aux nettoyeurs de doublons n'est pas qu'ils ratent des photos, mais qu'ils suppriment les mauvaises. Beaucoup d'apps présentent des milliers d'images quasi identiques déjà sélectionnées et comptent sur vous pour toucher Supprimer. Si la meilleure image était le deuxième essai plutôt que le premier, elle est perdue, et vous ne vous en rendez compte que des semaines plus tard.",
            "Un flux plus sûr commence par une suggestion, pas par une sélection. DiskMop marque dans chaque groupe l'image qu'il juge la meilleure, en s'appuyant d'abord sur le score esthétique d'Apple, puis sur la résolution et la date pour départager, et laisse les autres non cochées. Maintenez une image appuyée pour la voir en plein écran, balayez entre les images du groupe et zoomez sur les visages avant de décider. Si vous préférez une autre image, une touche change celle à garder.",
            "Quel que soit l'outil utilisé, rappelez-vous que la suppression n'est pas définitive pendant 30 jours. Tout passe d'abord par Supprimés récemment, où vous pouvez restaurer une image que vous regrettez d'avoir retirée. Une fois cet album vidé, l'espace est libéré et la décision est permanente ; relisez-le donc une fois avant de le faire.",
          ],
        },
      ],
      faq: [
        {
          question: "Pourquoi mon album Doublons est-il vide ou absent ?",
          answer:
            "Photos construit l'album en arrière-plan pendant que le téléphone est verrouillé et en charge ; sur un téléphone neuf ou récemment restauré, il peut donc mettre un jour ou deux à apparaître. S'il reste vide, la photothèque ne contient tout simplement aucun fichier identique ; les clichés quasi identiques n'y figurent pas.",
        },
        {
          question:
            "Fusionner les doublons dans Photos fait-il perdre de la qualité ?",
          answer:
            "Non. Fusionner conserve la version de meilleure qualité et combine les métadonnées des copies, comme les légendes et les lieux. Les autres copies partent dans Supprimés récemment.",
        },
        {
          question:
            "Supprimer des photos similaires les retire-t-il aussi d'iCloud ?",
          answer:
            "Oui, si Photos iCloud est activé. La photothèque est synchronisée, la photo disparaît donc de tous les appareils après les 30 jours de Supprimés récemment. Restaurez-la depuis cet album si vous changez d'avis.",
        },
        {
          question: "Est-il sûr de laisser une app analyser ma photothèque ?",
          answer:
            "Oui, tant que l'analyse reste sur le téléphone. DiskMop utilise les frameworks embarqués d'Apple, n'a ni serveur ni compte, et son étiquette de confidentialité sur l'App Store indique « Données non collectées ». Méfiez-vous de tout nettoyeur qui exige un compte ou affiche des publicités.",
        },
      ],
      verdict: [
        "Utilisez les outils dans le bon ordre. Laissez Photos fusionner gratuitement les doublons exacts et élaguer les rafales, puis lancez une analyse de similarité visuelle pour les reprises et les copies réenregistrées, qui représentent l'essentiel de l'espace gaspillé. Choisissez vous-même l'image à garder, et videz Supprimés récemment quand vous avez terminé.",
        "DiskMop pour iPhone assure la partie similarité sur l'appareil : il regroupe les clichés par instant, attrape les copies revenues des mois plus tard, marque une image recommandée et ne présélectionne rien. L'analyse est gratuite, les trois premières suppressions sont gratuites, et la version complète est un achat unique, sans abonnement.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Fotos duplicadas y similares en iPhone: más allá del álbum Duplicados de Apple",
      metaDescription:
        "El álbum Duplicados de Apple solo ve copias exactas. Cómo encontrar ráfagas, repeticiones y copias editadas en iPhone y borrarlas sin perder la mejor foto.",
      subtitle:
        "Las copias exactas son la parte fácil; las diez tomas del mismo momento son las que de verdad ocupan espacio",
      intro: [
        "Respuesta corta: la app Fotos encuentra los duplicados exactos por sí sola (Álbumes > Utilidades > Duplicados, iOS 16 o posterior) y los fusiona con un toque. Lo que no encuentra es el grupo mucho mayor de fotos casi idénticas: cinco intentos de un selfie, una ráfaga de un niño corriendo, el mismo atardecer desde dos pasos más a la izquierda, o una copia que alguien recortó y te devolvió. Para esas hace falta un análisis de similitud visual, que puede ejecutarse por completo en el teléfono.",
        "Esta guía explica qué cubren las herramientas integradas de Apple, por qué las tomas similares suelen ocupar más espacio que los duplicados reales, cómo funciona un análisis de similitud en el dispositivo y cómo conservar la mejor foto de cada grupo en lugar de borrar a ciegas.",
      ],
      keyTakeaways: [
        "El álbum Duplicados de Fotos (iOS 16+) solo encuentra archivos idénticos o casi idénticos; no agrupa ráfagas, repeticiones ni copias editadas.",
        "Fusionar duplicados en Fotos conserva la versión de mayor calidad y combina los metadatos de las copias; no se pierde nada.",
        "En una fototeca típica, entre un cuarto y un tercio de las fotos pertenecen a un grupo de tomas hechas con segundos de diferencia, y esos grupos pesan muchas veces más que los duplicados exactos.",
        "Un análisis de similitud compara huellas visuales, no nombres de archivo ni fechas, así que también detecta una copia recortada, filtrada o vuelta a guardar desde WhatsApp meses después.",
        "El análisis puede ejecutarse en el teléfono con el framework Vision de Apple; no hace falta subir nada ni crear una cuenta.",
        "Las fotos borradas permanecen 30 días en Eliminados recientemente, así que la barra de almacenamiento solo se mueve cuando vacías ese álbum.",
      ],
      dataTable: {
        caption: "Formas de encontrar fotos repetidas en un iPhone",
        columns: ["Método", "Encuentra", "Se le escapa"],
        rows: [
          [
            "Fotos > álbum Duplicados (iOS 16+)",
            "Archivos idénticos, incluidas distintas resoluciones o formatos de la misma imagen",
            "Repeticiones, ráfagas, copias recortadas o con filtro",
          ],
          [
            "Fotos > álbum Ráfagas",
            "Fotos capturadas en modo Ráfaga",
            "Repeticiones hechas como fotos separadas",
          ],
          [
            "Análisis de similitud visual (DiskMop)",
            "Tomas del mismo momento, copias guardadas de nuevo y editadas, ráfagas",
            "Fotos deliberadamente distintas del mismo sujeto",
          ],
        ],
      },
      howTo: {
        name: "Eliminar fotos duplicadas y similares en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Fusionar duplicados exactos en Fotos",
            text: "Abre Fotos > Álbumes, desplázate hasta Utilidades y abre Duplicados. Toca Fusionar junto a una pareja, o Seleccionar > Fusionar todo. Fotos conserva la mejor versión y combina los metadatos. Si el álbum no aparece, el teléfono aún no ha terminado de analizar; déjalo bloqueado y cargando durante la noche.",
          },
          {
            name: "Limpiar las ráfagas",
            text: "Abre el álbum Ráfagas (también en Utilidades), abre una ráfaga y toca Seleccionar. Marca las fotos que quieres y confirma; Fotos pregunta si quieres conservar solo las seleccionadas.",
          },
          {
            name: "Buscar tomas similares",
            text: "Ejecuta un análisis de similitud visual. DiskMop para iPhone agrupa las fotos hechas en la misma sesión y las copias guardadas de nuevo más tarde, y marca la mejor foto de cada grupo. El análisis es gratuito y se hace en el teléfono.",
          },
          {
            name: "Comparar y elegir",
            text: "Mantén pulsada cualquier foto para verla a pantalla completa, desliza por el grupo y amplía las caras. Marca las fotos que quieres quitar; la sugerida se queda a menos que decidas lo contrario. Nada se selecciona por ti.",
          },
          {
            name: "Vaciar Eliminados recientemente",
            text: "Las fotos borradas esperan 30 días en Fotos > Álbumes > Eliminados recientemente. Ábrelo, toca Seleccionar y luego Eliminar todo para recuperar el espacio ahora mismo.",
          },
        ],
      },
      sections: [
        {
          title:
            "Qué encuentra el álbum Duplicados de Apple, y qué se le escapa",
          content: [
            "Desde iOS 16, Fotos analiza la fototeca en segundo plano y lista los duplicados exactos en Álbumes > Utilidades > Duplicados. Reconoce la misma imagen aunque una copia tenga distinta resolución o formato de archivo, y su botón Fusionar conserva la versión de mayor calidad mientras combina fechas, ubicaciones y descripciones. Para fotos guardadas dos veces desde Mensajes o AirDrop es la solución más rápida que existe, y es gratis.",
            "Dos límites importan. Primero, el álbum solo aparece después de que el teléfono haya analizado la fototeca, algo que ocurre cuando está bloqueado y cargando, así que en un teléfono nuevo puede tardar uno o dos días. Segundo, y más importante, es estricto a propósito: dos fotos hechas con un segundo de diferencia, una copia recortada, una copia con filtro o una versión que WhatsApp comprimió al devolvértela no son duplicados según la definición de Apple y nunca aparecen en el álbum.",
            "El álbum Ráfagas, también en Utilidades, cubre un caso más: las fotos capturadas en modo Ráfaga. Abre una ráfaga, elige tus favoritas y Fotos ofrece borrar el resto. Pero la mayoría de tomas repetidas no son ráfagas. Son fotos normales que se volvieron a hacer porque alguien parpadeó, y Fotos trata cada una como una imagen única sin relación con las demás.",
          ],
        },
        {
          title:
            "Por qué las tomas similares ocupan más espacio que los duplicados",
          content: [
            "Los duplicados exactos son raros en un iPhone sincronizado con iCloud; la mayoría de la gente tiene como mucho unas decenas. Las tomas repetidas son lo contrario: cada foto de grupo, cada paisaje y cada foto de una mascota produce entre tres y diez intentos, y nadie vuelve a borrar los sobrantes. En una fototeca de unos miles de fotos es habitual que entre un cuarto y un tercio de las imágenes pertenezcan a uno de esos grupos.",
            "La aritmética no perdona. Diez intentos de una foto a unos 2 MB cada uno son 20 MB por un solo momento. Doscientos momentos así en un año son 4 GB, más de lo que cualquier álbum Duplicados encontrará jamás. Si las repeticiones eran Live Photos, cada una lleva además un vídeo de tres segundos y la cifra se duplica aproximadamente.",
            "La buena noticia es que estos grupos son fáciles de ver para el software. Las fotos hechas en la misma sesión comparten una ventana de tiempo y se parecen; las copias guardadas de nuevo meses después se parecen aunque sus fechas difieran. Un análisis de similitud usa ambas señales, mientras que un buscador de duplicados no usa ninguna.",
          ],
        },
        {
          title: "Cómo funciona un análisis de similitud en el dispositivo",
          content: [
            "Los iPhone modernos incluyen el framework Vision de Apple, capaz de convertir cualquier foto en una huella visual compacta: una lista de números que describe cómo se ve la imagen y no qué son sus píxeles. Dos fotos de la misma escena producen huellas cercanas entre sí, aunque una esté recortada, más luminosa o ligeramente girada. Comparar huellas es rápido y no requiere enviar nada fuera del teléfono.",
            "DiskMop para iPhone usa este enfoque. Primero compara las fotos hechas en la misma media hora, donde viven las repeticiones, y luego hace una segunda pasada sin límite de tiempo para cazar las copias que volvieron por WhatsApp, Instagram o AirDrop meses después. Para que una sesión de fotos larga no se convierta en un único grupo gigante, una foto solo entra en un grupo si se parece a la primera del grupo, no solo a su vecina.",
            "El resultado es una lista de momentos, cada uno con una foto sugerida y sus candidatas. Todo el análisis ocurre en el dispositivo; la app no tiene servidor ni cuenta, y su etiqueta de privacidad en el App Store dice «No se recopilan datos». Las capturas de pantalla y los documentos quedan fuera de los grupos de similitud a propósito, porque dos capturas de la misma app se parecen sin ser copias.",
          ],
        },
        {
          title: "Conservar la mejor foto en lugar de borrar a ciegas",
          content: [
            "La queja más común sobre los limpiadores de duplicados no es que se les escapen fotos, sino que borran las equivocadas. Muchas apps presentan miles de fotos casi idénticas ya seleccionadas y cuentan con que toques Eliminar. Si la mejor foto era el segundo intento y no el primero, desaparece, y solo te das cuenta semanas después.",
            "Un flujo más seguro empieza con una sugerencia, no con una selección. DiskMop marca en cada grupo la foto que considera mejor, usando primero la puntuación estética de Apple y la resolución y la fecha como desempate, y deja las demás sin marcar. Mantén pulsada cualquier foto para verla a pantalla completa, desliza entre las fotos del grupo y amplía las caras antes de decidir. Si prefieres otra, un toque cambia la foto que se conserva.",
            "Uses la herramienta que uses, recuerda que el borrado no es definitivo durante 30 días. Todo va primero a Eliminados recientemente, donde puedes restaurar una foto que te arrepientas de haber quitado. Cuando vacías ese álbum, el espacio se libera y la decisión es permanente, así que revísalo una vez antes de hacerlo.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Por qué mi álbum Duplicados está vacío o no aparece?",
          answer:
            "Fotos construye el álbum en segundo plano mientras el teléfono está bloqueado y cargando, así que en un teléfono nuevo o restaurado hace poco puede tardar uno o dos días en aparecer. Si sigue vacío, la fototeca simplemente no tiene archivos idénticos; las tomas casi idénticas no se muestran ahí.",
        },
        {
          question: "¿Fusionar duplicados en Fotos pierde calidad?",
          answer:
            "No. Fusionar conserva la versión de mayor calidad y combina los metadatos de las copias, como descripciones y ubicaciones. Las otras copias van a Eliminados recientemente.",
        },
        {
          question: "¿Borrar fotos similares las eliminará también de iCloud?",
          answer:
            "Sí, si Fotos en iCloud está activado. La fototeca está sincronizada, así que la foto desaparece de todos los dispositivos tras los 30 días de Eliminados recientemente. Restáurala desde ese álbum si cambias de opinión.",
        },
        {
          question: "¿Es seguro dejar que una app analice mi fototeca?",
          answer:
            "Lo es si el análisis se queda en el teléfono. DiskMop usa los frameworks de Apple en el dispositivo, no tiene servidor ni cuenta, y su etiqueta de privacidad en el App Store indica «No se recopilan datos». Desconfía de cualquier limpiador que exija una cuenta o muestre anuncios.",
        },
      ],
      verdict: [
        "Usa las herramientas en el orden correcto. Deja que Fotos fusione los duplicados exactos y recorte las ráfagas gratis, y luego ejecuta un análisis de similitud visual para las repeticiones y las copias guardadas de nuevo, que son la mayor parte del espacio desperdiciado. Elige tú la foto que se queda y vacía Eliminados recientemente cuando termines.",
        "DiskMop para iPhone hace la parte de similitud en el dispositivo: agrupa las tomas por momento, caza las copias que volvieron meses después, marca una foto sugerida y no preselecciona nada. El análisis es gratuito, los tres primeros borrados son gratuitos y la versión completa es una compra única sin suscripción.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come trovare foto duplicate e simili su iPhone (oltre l'album Duplicati di Apple)",
      metaDescription:
        "L'album Duplicati di Apple trova solo le copie esatte. Come scovare raffiche, ripetizioni e copie modificate su iPhone ed eliminarle tenendo lo scatto migliore.",
      subtitle:
        "Le copie esatte sono la parte facile; i dieci scatti dello stesso momento sono i veri divoratori di spazio",
      intro: [
        "Risposta breve: l'app Foto trova da sola i duplicati esatti (Album > Utility > Duplicati, iOS 16 e successivi) e li unisce con un tocco. Quello che non trova è il gruppo ben più grande delle foto quasi identiche: cinque tentativi per un selfie, una raffica di un bambino che corre, lo stesso tramonto da due passi più a sinistra, o una copia che qualcuno ha ritagliato e ti ha rimandato. Per queste serve un'analisi di somiglianza visiva, che può girare interamente sul telefono.",
        "Questa guida spiega cosa coprono gli strumenti integrati di Apple, perché gli scatti simili occupano di solito più spazio dei veri duplicati, come funziona un'analisi di somiglianza sul dispositivo e come conservare lo scatto migliore di ogni gruppo invece di cancellare alla cieca.",
      ],
      keyTakeaways: [
        "L'album Duplicati di Foto (iOS 16+) trova solo file identici o quasi identici; non raggruppa raffiche, scatti ripetuti o copie modificate.",
        "Unire i duplicati in Foto conserva la versione di qualità più alta e combina i metadati delle copie; non si perde nulla.",
        "In una libreria tipica, da un quarto a un terzo delle foto appartiene a un gruppo di scatti fatti a pochi secondi di distanza, e questi gruppi pesano molte volte più dei duplicati esatti.",
        "Un'analisi di somiglianza confronta impronte visive, non nomi di file o date, quindi individua anche una copia ritagliata, filtrata o salvata di nuovo da WhatsApp mesi dopo.",
        "L'analisi può girare sul telefono con il framework Vision di Apple; non servono caricamenti né account.",
        "Le foto eliminate restano 30 giorni in Eliminati di recente, quindi la barra dello spazio si muove solo dopo aver svuotato quell'album.",
      ],
      dataTable: {
        caption: "Modi per trovare le foto ripetute su un iPhone",
        columns: ["Metodo", "Trova", "Gli sfugge"],
        rows: [
          [
            "Foto > album Duplicati (iOS 16+)",
            "File identici, comprese risoluzioni o formati diversi della stessa immagine",
            "Scatti ripetuti, raffiche, copie ritagliate o con filtro",
          ],
          [
            "Foto > album Raffiche",
            "Scatti catturati in modalità Raffica",
            "Ripetizioni scattate come foto separate",
          ],
          [
            "Analisi di somiglianza visiva (DiskMop)",
            "Scatti dello stesso momento, copie salvate di nuovo e modificate, raffiche",
            "Foto volutamente diverse dello stesso soggetto",
          ],
        ],
      },
      howTo: {
        name: "Rimuovere foto duplicate e simili su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Unisci i duplicati esatti in Foto",
            text: "Apri Foto > Album, scorri fino a Utility e apri Duplicati. Tocca Unisci accanto a una coppia, oppure Seleziona > Unisci tutto. Foto conserva la versione migliore e combina i metadati. Se l'album manca, il telefono non ha ancora finito l'analisi; lascialo bloccato e in carica per una notte.",
          },
          {
            name: "Ripulisci le raffiche",
            text: "Apri l'album Raffiche (sempre sotto Utility), apri una raffica e tocca Seleziona. Segna gli scatti che vuoi tenere e conferma; Foto chiede se conservare solo quelli selezionati.",
          },
          {
            name: "Cerca gli scatti simili",
            text: "Esegui un'analisi di somiglianza visiva. DiskMop per iPhone raggruppa le foto scattate nella stessa sessione e le copie salvate di nuovo in seguito, e segna lo scatto migliore di ogni gruppo. L'analisi è gratuita e avviene sul telefono.",
          },
          {
            name: "Confronta e scegli",
            text: "Tieni premuto uno scatto per vederlo a schermo intero, scorri il gruppo e ingrandisci i volti. Spunta gli scatti da rimuovere; quello consigliato resta, a meno che tu non decida diversamente. Nulla viene selezionato al posto tuo.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Le foto eliminate aspettano 30 giorni in Foto > Album > Eliminati di recente. Aprilo, tocca Seleziona e poi Elimina tutto per recuperare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa trova l'album Duplicati di Apple e cosa gli sfugge",
          content: [
            "Da iOS 16, Foto analizza la libreria in background ed elenca i duplicati esatti in Album > Utility > Duplicati. Riconosce la stessa immagine anche quando una copia ha risoluzione o formato diversi, e il pulsante Unisci conserva la versione di qualità più alta combinando date, luoghi e didascalie. Per le foto salvate due volte da Messaggi o AirDrop è la soluzione più rapida disponibile, ed è gratuita.",
            "Due limiti contano. Primo, l'album compare solo dopo che il telefono ha analizzato la libreria, cosa che avviene quando è bloccato e in carica, quindi su un telefono nuovo può volerci un giorno o due. Secondo, e più importante, è rigoroso di proposito: due foto scattate a un secondo di distanza, una copia ritagliata, una copia con filtro o una versione che WhatsApp ha compresso nel rimandartela non sono duplicati secondo la definizione di Apple e non compaiono mai nell'album.",
            "L'album Raffiche, anch'esso sotto Utility, copre un caso in più: gli scatti catturati in modalità Raffica. Apri una raffica, scegli i preferiti e Foto propone di eliminare il resto. Ma la maggior parte degli scatti ripetuti non sono raffiche. Sono foto normali rifatte perché qualcuno ha sbattuto le palpebre, e Foto tratta ognuna di esse come un'immagine unica e senza legami con le altre.",
          ],
        },
        {
          title: "Perché gli scatti simili occupano più spazio dei duplicati",
          content: [
            "I duplicati esatti sono rari su un iPhone sincronizzato con iCloud; la maggior parte delle persone ne ha al massimo qualche decina. Gli scatti ripetuti sono l'opposto: ogni foto di gruppo, ogni paesaggio e ogni foto di un animale domestico produce da tre a dieci tentativi, e nessuno torna indietro a cancellare quelli in più. In una libreria di qualche migliaio di foto è normale che da un quarto a un terzo delle immagini appartenga a un gruppo del genere.",
            "L'aritmetica è spietata. Dieci tentativi per una foto da circa 2 MB l'uno fanno 20 MB per un solo momento. Duecento momenti così in un anno sono 4 GB, più di quanto qualsiasi album Duplicati troverà mai. Se le ripetizioni erano Live Photo, ognuna porta con sé anche un video di tre secondi e la cifra all'incirca raddoppia.",
            "La buona notizia è che questi gruppi sono facili da vedere per un software. Le foto scattate nella stessa sessione condividono una finestra temporale e si somigliano; le copie salvate di nuovo mesi dopo si somigliano anche se le date sono diverse. Un'analisi di somiglianza usa entrambi i segnali, mentre un cercatore di duplicati non ne usa nessuno.",
          ],
        },
        {
          title: "Come funziona un'analisi di somiglianza sul dispositivo",
          content: [
            "Gli iPhone moderni includono il framework Vision di Apple, capace di trasformare qualsiasi foto in un'impronta visiva compatta: un elenco di numeri che descrive che aspetto ha l'immagine, non cosa sono i suoi pixel. Due foto della stessa scena producono impronte vicine tra loro, anche se una è ritagliata, più luminosa o leggermente ruotata. Confrontare le impronte è veloce e non richiede di inviare nulla fuori dal telefono.",
            "DiskMop per iPhone usa questo approccio. Prima confronta le foto scattate nella stessa mezz'ora, dove vivono gli scatti ripetuti, poi esegue un secondo passaggio senza limiti di tempo per catturare le copie tornate indietro tramite WhatsApp, Instagram o AirDrop mesi dopo. Per evitare che una lunga sessione fotografica collassi in un unico gruppo gigante, uno scatto entra in un gruppo solo se è vicino al primo scatto del gruppo, non soltanto al suo vicino.",
            "Il risultato è un elenco di momenti, ciascuno con uno scatto consigliato e i suoi candidati. L'intera analisi avviene sul dispositivo; l'app non ha server né account, e la sua etichetta sulla privacy nell'App Store riporta «Dati non raccolti». Screenshot e documenti sono tenuti fuori dai gruppi di somiglianza di proposito, perché due screenshot della stessa app si somigliano senza essere copie.",
          ],
        },
        {
          title:
            "Conservare lo scatto migliore invece di cancellare alla cieca",
          content: [
            "La lamentela più comune sui pulitori di duplicati non è che si perdono delle foto, ma che cancellano quelle sbagliate. Molte app presentano migliaia di scatti quasi identici già selezionati e contano sul fatto che tu tocchi Elimina. Se lo scatto migliore era il secondo tentativo e non il primo, è sparito, e te ne accorgi solo settimane dopo.",
            "Un flusso più sicuro parte da un suggerimento, non da una selezione. DiskMop segna in ogni gruppo lo scatto che ritiene migliore, usando prima il punteggio estetico di Apple e poi risoluzione e data per gli spareggi, e lascia gli altri senza spunta. Tieni premuto uno scatto per vederlo a schermo intero, scorri tra gli scatti del gruppo e ingrandisci i volti prima di decidere. Se preferisci un altro scatto, un tocco cambia quello da conservare.",
            "Qualunque strumento tu usi, ricorda che l'eliminazione non è definitiva per 30 giorni. Tutto finisce prima in Eliminati di recente, dove puoi ripristinare uno scatto che ti penti di aver rimosso. Una volta svuotato quell'album, lo spazio viene liberato e la decisione è permanente, quindi dagli un'occhiata prima di farlo.",
          ],
        },
      ],
      faq: [
        {
          question: "Perché il mio album Duplicati è vuoto o manca?",
          answer:
            "Foto costruisce l'album in background mentre il telefono è bloccato e in carica, quindi su un telefono nuovo o ripristinato di recente può volerci un giorno o due prima che compaia. Se resta vuoto, la libreria semplicemente non contiene file identici; gli scatti quasi identici non vengono mostrati lì.",
        },
        {
          question: "Unire i duplicati in Foto fa perdere qualità?",
          answer:
            "No. Unisci conserva la versione di qualità più alta e combina i metadati delle copie, come didascalie e luoghi. Le altre copie finiscono in Eliminati di recente.",
        },
        {
          question: "Eliminare le foto simili le rimuove anche da iCloud?",
          answer:
            "Sì, se Foto di iCloud è attivo. La libreria è sincronizzata, quindi la foto sparisce da tutti i dispositivi dopo i 30 giorni in Eliminati di recente. Ripristinala da quell'album se cambi idea.",
        },
        {
          question:
            "È sicuro lasciare che un'app analizzi la mia libreria foto?",
          answer:
            "Lo è se l'analisi resta sul telefono. DiskMop usa i framework on-device di Apple, non ha server né account, e la sua etichetta sulla privacy nell'App Store riporta «Dati non raccolti». Diffida di qualsiasi pulitore che richieda un account o mostri pubblicità.",
        },
      ],
      verdict: [
        "Usa gli strumenti nell'ordine giusto. Lascia che Foto unisca gratis i duplicati esatti e sfoltisca le raffiche, poi esegui un'analisi di somiglianza visiva per gli scatti ripetuti e le copie salvate di nuovo, che costituiscono la maggior parte dello spazio sprecato. Scegli tu lo scatto da tenere e svuota Eliminati di recente quando hai finito.",
        "DiskMop per iPhone fa la parte di somiglianza sul dispositivo: raggruppa gli scatti per momento, cattura le copie tornate mesi dopo, segna uno scatto consigliato e non preseleziona nulla. L'analisi è gratuita, le prime tre eliminazioni sono gratuite e la versione completa è un acquisto unico senza abbonamento.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Fotos duplicadas e semelhantes no iPhone: além do álbum Duplicatas da Apple",
      metaDescription:
        "O álbum Duplicatas da Apple só encontra cópias exatas. Como achar sequências, repetições e cópias editadas no iPhone e apagá-las sem perder a melhor foto.",
      subtitle:
        "Cópias exatas são a parte fácil; as dez fotos do mesmo momento é que devoram o espaço",
      intro: [
        "Resposta curta: o app Fotos encontra duplicatas exatas sozinho (Álbuns > Utilitários > Duplicatas, iOS 16 ou posterior) e as combina com um toque. O que ele não encontra é o grupo bem maior de fotos quase idênticas: cinco tentativas de uma selfie, uma sequência de uma criança correndo, o mesmo pôr do sol dois passos mais à esquerda, ou uma cópia que alguém recortou e mandou de volta para você. Para essas é preciso uma análise de semelhança visual, que pode rodar inteiramente no telefone.",
        "Este guia explica o que as ferramentas nativas da Apple cobrem, por que fotos semelhantes costumam ocupar mais espaço que duplicatas de verdade, como funciona uma análise de semelhança no próprio aparelho e como manter a melhor foto de cada grupo em vez de apagar às cegas.",
      ],
      keyTakeaways: [
        "O álbum Duplicatas do Fotos (iOS 16+) encontra apenas arquivos idênticos ou quase idênticos; ele não agrupa sequências, repetições nem cópias editadas.",
        "Combinar duplicatas no Fotos mantém a versão de maior qualidade e junta os metadados das cópias; nada se perde.",
        "Em uma biblioteca típica, de um quarto a um terço das fotos pertence a um grupo de cliques feitos com segundos de diferença, e esses grupos pesam muitas vezes mais que as duplicatas exatas.",
        "Uma análise de semelhança compara impressões visuais, não nomes de arquivo ou datas, então também pega uma cópia recortada, com filtro ou salva de novo a partir do WhatsApp meses depois.",
        "A análise pode rodar no telefone com o framework Vision da Apple; não é preciso enviar nada nem criar conta.",
        "Fotos apagadas ficam 30 dias em Apagados Recentemente, então a barra de armazenamento só muda depois que você esvazia esse álbum.",
      ],
      dataTable: {
        caption: "Formas de encontrar fotos repetidas em um iPhone",
        columns: ["Método", "Encontra", "Deixa passar"],
        rows: [
          [
            "Fotos > álbum Duplicatas (iOS 16+)",
            "Arquivos idênticos, inclusive resoluções ou formatos diferentes da mesma imagem",
            "Repetições, sequências, cópias recortadas ou com filtro",
          ],
          [
            "Fotos > álbum Sequências",
            "Fotos capturadas no modo Sequência",
            "Repetições tiradas como fotos separadas",
          ],
          [
            "Análise de semelhança visual (DiskMop)",
            "Fotos do mesmo momento, cópias salvas de novo e editadas, sequências",
            "Fotos propositalmente diferentes do mesmo assunto",
          ],
        ],
      },
      howTo: {
        name: "Remover fotos duplicadas e semelhantes no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Combine as duplicatas exatas no Fotos",
            text: "Abra Fotos > Álbuns, role até Utilitários e abra Duplicatas. Toque em Combinar ao lado de um par, ou em Selecionar > Combinar Tudo. O Fotos mantém a melhor versão e junta os metadados. Se o álbum não aparecer, o telefone ainda não terminou a análise; deixe-o bloqueado e carregando durante a noite.",
          },
          {
            name: "Limpe as sequências",
            text: "Abra o álbum Sequências (também em Utilitários), abra uma sequência e toque em Selecionar. Marque as fotos que quer manter e confirme; o Fotos pergunta se deve manter só as selecionadas.",
          },
          {
            name: "Procure fotos semelhantes",
            text: "Rode uma análise de semelhança visual. O DiskMop para iPhone agrupa fotos tiradas na mesma sessão e cópias salvas de novo mais tarde, e marca a melhor foto de cada grupo. A análise é gratuita e acontece no telefone.",
          },
          {
            name: "Compare e escolha",
            text: "Toque e segure qualquer foto para vê-la em tela cheia, deslize pelo grupo e amplie os rostos. Marque as fotos a remover; a sugerida fica, a menos que você decida o contrário. Nada é selecionado por você.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "As fotos apagadas esperam 30 dias em Fotos > Álbuns > Apagados Recentemente. Abra o álbum, toque em Selecionar e depois em Apagar Tudo para recuperar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title:
            "O que o álbum Duplicatas da Apple encontra, e o que deixa passar",
          content: [
            "Desde o iOS 16, o Fotos analisa a biblioteca em segundo plano e lista as duplicatas exatas em Álbuns > Utilitários > Duplicatas. Ele reconhece a mesma imagem mesmo quando uma cópia tem resolução ou formato de arquivo diferente, e o botão Combinar mantém a versão de maior qualidade enquanto junta datas, locais e legendas. Para fotos salvas duas vezes a partir do Mensagens ou do AirDrop, é a solução mais rápida que existe, e é de graça.",
            "Dois limites importam. Primeiro, o álbum só aparece depois que o telefone analisou a biblioteca, o que acontece quando ele está bloqueado e carregando; em um telefone novo, isso pode levar um ou dois dias. Segundo, e mais importante, ele é rigoroso de propósito: duas fotos tiradas com um segundo de diferença, uma cópia recortada, uma cópia com filtro ou uma versão que o WhatsApp comprimiu no caminho de volta não são duplicatas na definição da Apple e nunca aparecem no álbum.",
            "O álbum Sequências, também em Utilitários, cobre mais um caso: fotos capturadas no modo Sequência. Abra uma sequência, escolha as favoritas e o Fotos oferece apagar o resto. Mas a maioria das fotos repetidas não são sequências. São fotos comuns tiradas de novo porque alguém piscou, e o Fotos trata cada uma como uma imagem única, sem relação com as outras.",
          ],
        },
        {
          title: "Por que fotos semelhantes ocupam mais espaço que duplicatas",
          content: [
            "Duplicatas exatas são raras em um iPhone sincronizado com o iCloud; a maioria das pessoas tem no máximo algumas dezenas. Fotos repetidas são o oposto: cada foto de grupo, cada paisagem e cada foto de um animal de estimação gera de três a dez tentativas, e ninguém volta para apagar as sobras. Em uma biblioteca de alguns milhares de fotos, é comum que de um quarto a um terço das imagens pertença a um grupo desses.",
            "A aritmética não perdoa. Dez tentativas de uma foto com cerca de 2 MB cada são 20 MB para um único momento. Duzentos momentos assim em um ano são 4 GB, mais do que qualquer álbum Duplicatas vai encontrar um dia. Se as repetições eram Live Photos, cada uma carrega também um vídeo de três segundos e o número praticamente dobra.",
            "A boa notícia é que esses grupos são fáceis de enxergar para um software. Fotos tiradas na mesma sessão compartilham uma janela de tempo e se parecem; cópias salvas de novo meses depois se parecem mesmo com datas diferentes. Uma análise de semelhança usa os dois sinais, enquanto um localizador de duplicatas não usa nenhum.",
          ],
        },
        {
          title: "Como funciona uma análise de semelhança no aparelho",
          content: [
            "Os iPhones modernos incluem o framework Vision da Apple, que transforma qualquer foto em uma impressão visual compacta: uma lista de números que descreve a aparência da imagem, não o que são seus pixels. Duas fotos da mesma cena produzem impressões próximas uma da outra, mesmo que uma esteja recortada, mais clara ou levemente girada. Comparar impressões é rápido e não exige enviar nada para fora do telefone.",
            "O DiskMop para iPhone usa essa abordagem. Primeiro ele compara fotos tiradas na mesma meia hora, onde moram as repetições, e depois faz uma segunda passagem sem limite de tempo para pegar cópias que voltaram pelo WhatsApp, Instagram ou AirDrop meses depois. Para que uma sessão longa de fotos não vire um único grupo gigante, uma foto só entra no grupo se for parecida com a primeira foto do grupo, e não apenas com a vizinha.",
            "O resultado é uma lista de momentos, cada um com uma foto sugerida e suas candidatas. Toda a análise acontece no aparelho; o app não tem servidor nem conta, e sua etiqueta de privacidade na App Store diz «Dados Não Coletados». Capturas de tela e documentos ficam de fora dos grupos de semelhança de propósito, porque duas capturas do mesmo app se parecem sem serem cópias.",
          ],
        },
        {
          title: "Manter a melhor foto em vez de apagar às cegas",
          content: [
            "A reclamação mais comum sobre limpadores de duplicatas não é que eles deixam fotos passar, mas que apagam as erradas. Muitos apps mostram milhares de fotos quase idênticas já selecionadas e contam com você para tocar em Apagar. Se a melhor foto era a segunda tentativa e não a primeira, ela se foi, e você só percebe semanas depois.",
            "Um fluxo mais seguro começa com uma sugestão, não com uma seleção. O DiskMop marca em cada grupo a foto que considera melhor, usando primeiro a pontuação estética da Apple e, para desempate, a resolução e a data, e deixa as outras desmarcadas. Toque e segure qualquer foto para vê-la em tela cheia, deslize entre as fotos do grupo e amplie os rostos antes de decidir. Se preferir outra foto, um toque troca a que fica.",
            "Seja qual for a ferramenta, lembre que a exclusão não é definitiva por 30 dias. Tudo vai primeiro para Apagados Recentemente, onde você pode restaurar uma foto que se arrependeu de remover. Depois que você esvazia esse álbum, o espaço é liberado e a decisão é permanente, então revise uma vez antes de fazer isso.",
          ],
        },
      ],
      faq: [
        {
          question: "Por que meu álbum Duplicatas está vazio ou não aparece?",
          answer:
            "O Fotos monta o álbum em segundo plano enquanto o telefone está bloqueado e carregando, então em um aparelho novo ou restaurado há pouco ele pode levar um ou dois dias para aparecer. Se continuar vazio, a biblioteca simplesmente não tem arquivos idênticos; fotos quase idênticas não são mostradas ali.",
        },
        {
          question: "Combinar duplicatas no Fotos perde qualidade?",
          answer:
            "Não. Combinar mantém a versão de maior qualidade e junta os metadados das cópias, como legendas e locais. As outras cópias vão para Apagados Recentemente.",
        },
        {
          question: "Apagar fotos semelhantes também as remove do iCloud?",
          answer:
            "Sim, se as Fotos do iCloud estiverem ativadas. A biblioteca é sincronizada, então a foto some de todos os aparelhos depois dos 30 dias em Apagados Recentemente. Restaure-a desse álbum se mudar de ideia.",
        },
        {
          question:
            "É seguro deixar um app analisar minha biblioteca de fotos?",
          answer:
            "É, desde que a análise fique no telefone. O DiskMop usa os frameworks da Apple no próprio aparelho, não tem servidor nem conta, e sua etiqueta de privacidade na App Store informa «Dados Não Coletados». Desconfie de qualquer limpador que exija conta ou mostre anúncios.",
        },
      ],
      verdict: [
        "Use as ferramentas na ordem certa. Deixe o Fotos combinar as duplicatas exatas e enxugar as sequências de graça, depois rode uma análise de semelhança visual para as repetições e cópias salvas de novo, que são a maior parte do espaço desperdiçado. Escolha você mesmo a foto que fica e esvazie Apagados Recentemente quando terminar.",
        "O DiskMop para iPhone faz a parte de semelhança no aparelho: agrupa as fotos por momento, pega cópias que voltaram meses depois, marca uma foto sugerida e não pré-seleciona nada. A análise é gratuita, as três primeiras exclusões são gratuitas e a versão completa é uma compra única, sem assinatura.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone で重複写真と類似写真を見つける方法（Apple の「重複項目」アルバムの先へ）",
      metaDescription:
        "Apple の「重複項目」アルバムが見つけるのは完全な複製だけです。iPhone でバースト、撮り直し、トリミングやフィルター済みのコピーを見つけ、ベストショットを失わずに削除する方法を解説します。",
      subtitle:
        "完全な複製は簡単な部類。本当に容量を食うのは、同じ瞬間を 10 枚撮った写真です",
      intro: [
        "短い答え: 写真アプリは完全な複製を自動で見つけ（アルバム > ユーティリティ > 重複項目、iOS 16 以降）、ワンタップで結合します。見つけてくれないのは、はるかに数の多い「ほぼ同じ」写真です。同じ自撮りを 5 回撮り直したもの、走る子どものバースト、2 歩左から撮った同じ夕日、誰かがトリミングして送り返してきたコピー。こうした写真には視覚的な類似性スキャンが必要で、これは完全に iPhone 上で実行できます。",
        "この記事では、Apple の標準ツールが何をカバーするか、なぜ類似写真は本当の複製より容量を食うことが多いのか、端末上で動く類似性スキャンの仕組み、そして闇雲に削除する代わりに各グループのベストショットを残す方法を説明します。",
      ],
      keyTakeaways: [
        "写真アプリの「重複項目」アルバム（iOS 16 以降）が見つけるのは同一またはほぼ同一のファイルだけで、バースト、撮り直し、編集済みのコピーはグループ化しません。",
        "写真アプリで重複項目を結合すると最高画質のバージョンが残り、コピーのメタデータも統合されます。失われるものはありません。",
        "典型的なライブラリでは写真の 4 分の 1 から 3 分の 1 が数秒以内に撮られたグループに属し、その容量は完全な複製の何倍にもなります。",
        "類似性スキャンはファイル名や日付ではなく視覚的な特徴量を比較するため、数か月後に WhatsApp からトリミング、フィルター、再保存されたコピーも捕まえます。",
        "スキャンは Apple の Vision フレームワークを使って iPhone 上で実行でき、アップロードもアカウントも必要ありません。",
        "削除した写真は 30 日間「最近削除した項目」に残るため、ストレージのバーはそのアルバムを空にして初めて動きます。",
      ],
      dataTable: {
        caption: "iPhone で繰り返し写真を見つける方法",
        columns: ["方法", "見つけるもの", "見逃すもの"],
        rows: [
          [
            "写真 > 「重複項目」アルバム（iOS 16 以降）",
            "同一のファイル（同じ画像の解像度違い・形式違いを含む）",
            "撮り直し、バースト、トリミングやフィルター済みのコピー",
          ],
          [
            "写真 > 「バースト」アルバム",
            "バーストモードで撮影したフレーム",
            "別々の写真として撮った撮り直し",
          ],
          [
            "視覚的な類似性スキャン（DiskMop）",
            "同じ瞬間の写真、再保存や編集されたコピー、バースト",
            "同じ被写体を意図的に変えて撮った写真",
          ],
        ],
      },
      howTo: {
        name: "iPhone で重複写真と類似写真を削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "写真アプリで完全な複製を結合する",
            text: "写真 > アルバムを開き、ユーティリティまでスクロールして「重複項目」を開きます。ペアの横の「結合」をタップするか、「選択」>「すべて結合」をタップします。写真アプリは最良のバージョンを残し、メタデータを統合します。アルバムが見当たらない場合は解析がまだ終わっていません。ロックした状態で一晩充電しておいてください。",
          },
          {
            name: "バーストを整理する",
            text: "「バースト」アルバム（同じくユーティリティ内）を開き、バーストを 1 つ開いて「選択」をタップします。残したいフレームにマークを付けて確定すると、写真アプリは選択したフレームだけを残すかどうかを尋ねてきます。",
          },
          {
            name: "類似写真をスキャンする",
            text: "視覚的な類似性スキャンを実行します。iPhone 版 DiskMop は同じセッションで撮った写真と後から再保存されたコピーをグループ化し、各グループのベストショットにマークを付けます。スキャンは無料で、iPhone 上で行われます。",
          },
          {
            name: "見比べて選ぶ",
            text: "任意のフレームを長押しすると全画面で表示され、グループ内をスワイプして顔にズームできます。削除するフレームにチェックを入れます。あなたが変更しない限り、提案されたベストショットはそのまま残ります。勝手に選択されるものはありません。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "削除した写真は写真 > アルバム > 最近削除した項目に 30 日間残ります。開いて「選択」をタップし、「すべて削除」で今すぐ容量を取り戻せます。",
          },
        ],
      },
      sections: [
        {
          title: "Apple の「重複項目」アルバムが見つけるもの、見逃すもの",
          content: [
            "iOS 16 以降、写真アプリはバックグラウンドでライブラリをスキャンし、完全な複製をアルバム > ユーティリティ > 重複項目に一覧表示します。片方の解像度やファイル形式が違っていても同じ画像として認識し、「結合」ボタンは最高画質のバージョンを残しつつ日付、位置情報、キャプションを統合します。メッセージや AirDrop から二重に保存された写真には、これが最速の解決策で、しかも無料です。",
            "重要な制限が 2 つあります。第一に、このアルバムは iPhone がライブラリを解析し終えて初めて表示されます。解析はロック中かつ充電中に行われるため、新しい iPhone では 1〜2 日かかることがあります。第二に、こちらのほうが重要ですが、判定は意図的に厳格です。1 秒差で撮った 2 枚、トリミングしたコピー、フィルターをかけたコピー、WhatsApp が送り返す途中で圧縮したバージョンは、Apple の定義では重複ではなく、このアルバムには決して表示されません。",
            "同じくユーティリティ内の「バースト」アルバムは、もう 1 つのケースをカバーします。バーストモードで撮影したフレームです。バーストを開いてお気に入りを選ぶと、写真アプリが残りを削除するか提案します。しかし繰り返し撮った写真の大半はバーストではありません。誰かがまばたきしたから撮り直した普通の写真で、写真アプリはそれぞれを無関係な別の 1 枚として扱います。",
          ],
        },
        {
          title: "なぜ類似写真は複製より容量を食うのか",
          content: [
            "iCloud と同期している iPhone では完全な複製はまれで、ほとんどの人は多くても数十枚です。撮り直しはその逆です。集合写真も風景もペットの写真も、1 枚ごとに 3〜10 回の試し撮りが生まれ、余分を後で消しに戻る人はいません。数千枚のライブラリでは、写真の 4 分の 1 から 3 分の 1 がこうしたグループに属していることが珍しくありません。",
            "計算は容赦がありません。1 枚あたり約 2 MB の試し撮りが 10 枚なら、1 つの瞬間で 20 MB です。そうした瞬間が 1 年に 200 回あれば 4 GB になり、どんな「重複項目」アルバムが見つける量よりも多くなります。撮り直しが Live Photos なら、それぞれに 3 秒の動画も付いてくるので、数字はおよそ 2 倍になります。",
            "朗報は、こうしたグループはソフトウェアにとって見つけやすいことです。同じセッションで撮った写真は時間帯が共通していて見た目も似ています。数か月後に再保存されたコピーは日付こそ違いますが、見た目は似ています。類似性スキャンはこの両方のシグナルを使い、重複ファインダーはどちらも使いません。",
          ],
        },
        {
          title: "端末上の類似性スキャンの仕組み",
          content: [
            "最近の iPhone には Apple の Vision フレームワークが搭載されており、どんな写真もコンパクトな視覚的特徴量に変換できます。ピクセルそのものではなく、画像がどう見えるかを表す数値の並びです。同じシーンの 2 枚の写真は、片方がトリミングされていても、明るくても、少し回転していても、互いに近い特徴量になります。特徴量の比較は高速で、iPhone の外に何かを送る必要はありません。",
            "iPhone 版 DiskMop はこの方式を採用しています。まず撮り直しが集中する同じ 30 分以内に撮られた写真を比較し、次に時間制限なしの 2 回目のパスで、数か月後に WhatsApp、Instagram、AirDrop 経由で戻ってきたコピーを捕まえます。長い撮影セッションが 1 つの巨大なグループにつぶれてしまわないよう、フレームは隣のフレームだけでなくグループの最初のフレームに近い場合にのみグループに加わります。",
            "結果は瞬間ごとのリストで、それぞれに提案されたベストショットと候補が並びます。スキャンはすべて端末上で完結し、アプリにはサーバーもアカウントもなく、App Store のプライバシーラベルは「データは収集されません」です。スクリーンショットと書類は意図的に類似グループから外しています。同じアプリのスクリーンショット 2 枚は、コピーでなくても似て見えるからです。",
          ],
        },
        {
          title: "闇雲に削除せず、ベストショットを残す",
          content: [
            "重複クリーナーへの最も多い不満は、写真を見逃すことではなく、間違ったほうを消すことです。多くのアプリは、ほぼ同じ数千枚のフレームを最初から選択済みの状態で見せ、あなたが「削除」をタップするのを待っています。ベストショットが 1 枚目ではなく 2 枚目だった場合、それは消えてしまい、気づくのは数週間後です。",
            "より安全な流れは、選択ではなく提案から始まります。DiskMop は各グループでベストと判断したフレームに印を付けます。まず Apple の画像美観スコアを使い、同点なら解像度と新しさで決め、残りはチェックなしのままにします。決める前に任意のフレームを長押しして全画面で表示し、グループ内のフレームをスワイプして顔にズームしてください。別のフレームのほうが良ければ、ワンタップで残す写真を変えられます。",
            "どのツールを使うにしても、削除は 30 日間は確定しないことを覚えておいてください。すべてはまず「最近削除した項目」に入り、消したことを後悔したフレームはそこから復元できます。このアルバムを空にした時点で容量が解放され、決定は取り消せなくなるので、その前に一度見直してください。",
          ],
        },
      ],
      faq: [
        {
          question:
            "「重複項目」アルバムが空、または見当たらないのはなぜですか。",
          answer:
            "写真アプリは iPhone がロック中かつ充電中にバックグラウンドでこのアルバムを作るため、新しい iPhone や復元したばかりの iPhone では表示まで 1〜2 日かかることがあります。空のままなら、ライブラリに同一のファイルがないだけです。ほぼ同じ写真はここには表示されません。",
        },
        {
          question: "写真アプリで重複項目を結合すると画質は落ちますか。",
          answer:
            "いいえ。「結合」は最高画質のバージョンを残し、キャプションや位置情報などコピーのメタデータを統合します。残りのコピーは「最近削除した項目」に移動します。",
        },
        {
          question: "類似写真を削除すると iCloud からも消えますか。",
          answer:
            "iCloud 写真がオンなら、はい。ライブラリは同期されているため、「最近削除した項目」の 30 日を過ぎると写真はすべてのデバイスから消えます。気が変わったらそのアルバムから復元してください。",
        },
        {
          question: "アプリに写真ライブラリをスキャンさせても安全ですか。",
          answer:
            "スキャンが iPhone の中で完結するなら安全です。DiskMop は Apple の端末上フレームワークを使い、サーバーもアカウントも持たず、App Store のプライバシーラベルは「データは収集されません」となっています。アカウントを要求したり広告を表示したりするクリーナーには注意してください。",
        },
      ],
      verdict: [
        "ツールは正しい順番で使いましょう。まず写真アプリに完全な複製の結合とバーストの整理を無料でやらせ、次に無駄な容量の大半を占める撮り直しと再保存コピーのために視覚的な類似性スキャンを実行します。残す写真は自分で選び、終わったら「最近削除した項目」を空にしてください。",
        "iPhone 版 DiskMop は類似性の部分を端末上で処理します。写真を瞬間ごとにグループ化し、数か月後に戻ってきたコピーを捕まえ、提案するベストショットに印を付け、何も事前選択しません。スキャンは無料、最初の 3 回の削除も無料で、フル版はサブスクリプションなしの買い切りです。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
