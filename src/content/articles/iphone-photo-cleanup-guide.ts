import type { Article } from "../types";

export const iphonePhotoCleanupGuide: Article = {
  slug: "iphone-photo-cleanup-guide",
  type: "guide",
  category: "Mobile",
  date: "2026-11-03",
  updated: "2026-11-06",
  readingTime: 8,
  content: {
    tr: {
      title: "iPhone Fotoğraf Temizleme Rehberi: Neler Güvenle Silinir?",
      metaDescription:
        "iPhone fotoğraf temizliği yaparken anılarınızı kaybetmeyin. Nelerin güvenle silinebileceği (kopya, bulanık, video) ve korunma yolları rehberi.",
      subtitle:
        "Fotoğraflar kütüphanesi için Güvenli-Riskli haritası, iCloud tuzakları ve doğru temizleme sırası",
      intro: [
        "Kısa cevap: iPhone'da binlerce fotoğraf arasında kaybolmadan güvenle gigabaytlarca yer açmanın yolu, her fotoğrafa tek tek bakmak değil, türlerine göre ayrılmış bir haritayı takip etmektir. Bulanık ve sarsılmış kareler, birbirinin neredeyse aynısı olan seri fotoğraflar, unutulmuş 4K ekran kayıtları ve eski ekran görüntüleri güvenle silinebilir. Asla yapmamanız gereken şey ise, iCloud Fotoğrafları 'Optimize Et' modundayken yer açma umuduyla fotoğrafları rastgele silmektir; bu işlem telefonda neredeyse hiç yer açmaz ancak orijinal anıyı tüm cihazlarınızdan kalıcı olarak yok eder.",
        "Bu rehber, iPhone fotoğraf kütüphaneniz için net bir Güvenli-Riskli haritası sunuyor; en az çabayla en çok gigabaytı kurtaracak sıralamayı gösteriyor ve temizliği güvenli hale getiriyor.",
      ],
      keyTakeaways: [
        "iPhone'da yer açmanın en hızlı yolu sıradan fotoğrafları değil, ekran kayıtlarını ve 4K videoları ayıklamaktır (1 dakikalık 4K video yaklaşık 200 fotoğraf kadar yer kaplar).",
        "Fotoğraflar uygulamasındaki yerleşik 'Yinelenenler' albümü yalnızca birebir piksel-özdeş kopyaları bulur; aynı anın hafif farklı açılardan çekilmiş benzer karelerini yakalayamaz.",
        "Bulanık, odaksız ve titrek fotoğraflar yerleşik albümlerde görünmez; bunları tespit etmek için netlik ölçümü yapan aygıt içi araçlar gerekir.",
        "Silinen tüm fotoğraflar 30 gün boyunca 'Son Silinenler' albümünde yer kaplamaya devam eder; bu albüm boşaltılana kadar depolama alanı açılmaz.",
        "iCloud 'iPhone Depolama Alanını Optimize Et' açıkken fotoğrafları silmek, yerel depolamayı neredeyse hiç rahatlatmaz çünkü cihazda zaten yalnızca küçük önizlemeler saklanmaktadır.",
        "DiskMop for iPhone, fotoğraflarınızı hiçbir sunucuya yüklemeden tamamen aygıtta tarayarak benzerleri, bulanıkları ve ağır videoları güvenle gruplar.",
      ],
      dataTable: {
        caption:
          "iPhone fotoğraf ve ortam türlerinin Güvenli-Riskli temizlik haritası",
        columns: [
          "Ortam Türü",
          "Tipik Boyut",
          "Güvenlik Seviyesi",
          "Nasıl Ele Alınmalı?",
        ],
        rows: [
          [
            "Bulanık ve Titrek Fotoğraflar",
            "2 – 3 MB / kare",
            "Tamamen Güvenli",
            "Yapay zeka netlik taramasıyla bulun, önizleyin ve topluca silin",
          ],
          [
            "Ekran Kayıtları ve 4K/60fps Videolar",
            "100 – 400 MB / dakika",
            "Tamamen Güvenli",
            "En yüksek kazanç buradadır; izleyip işi bitenleri hemen silin",
          ],
          [
            "Eski Ekran Görüntüleri",
            "2 – 8 MB / kare",
            "Güvenli",
            "Fotoğraflar > Ekran Görüntüleri albümünden süresi geçmişleri ayıklayın",
          ],
          [
            "Benzer ve Seri Çekim Kareler",
            "2 – 5 MB / kare",
            "Dikkatle İncelenmeli",
            "En iyi 1 kareyi saklayıp diğer 4-5 varyasyonu silin",
          ],
          [
            "iCloud Optimize Edilmiş Fotoğraflar",
            "100 – 300 KB (yerelde)",
            "Yüksek Risk",
            "Telefonda yer açmaz; silindiğinde iCloud'daki asıl orijinal de silinir",
          ],
        ],
      },
      howTo: {
        name: "iPhone Fotoğraf Kütüphanesini Güvenle Temizleme Adımları",
        totalTime: "PT15M",
        steps: [
          {
            name: "En ağır yükleri önce temizleyin (Ekran Kayıtları ve Videolar)",
            text: "Fotoğraflar > Albümler > Ortam Türleri altından 'Ekran Kayıtları'nı açın. Unutulmuş uzun kayıtları silin; birkaç video ile anında 2–5 GB kazanırsınız.",
          },
          {
            name: "Bulanık ve net çıkmamış kareleri ayıklayın",
            text: "DiskMop for iPhone uygulamasını açın ve 'Bulanık Fotoğraflar' kategorisine dokunun. Netlik puanı düşük kareleri önizleyip gereksizleri temizleyin.",
          },
          {
            name: "Benzer ve yinelenen fotoğrafları teke indirin",
            text: "Aynı sahnenin art arda çekilmiş kareleri arasından en net olanı tutun, geri kalan denemeleri silin.",
          },
          {
            name: "Eski ekran görüntülerini temizleyin",
            text: "Albümler > Ekran Görüntüleri yoluna gidin. Aylar öncesinden kalan kargo kodları, biletler ve mesaj ekran görüntülerini işaretleyip silin.",
          },
          {
            name: "Son Silinenler albümünü boşaltın",
            text: "Fotoğraflar > Albümler > Son Silinenler albümünü Face ID ile açın, Seç'e ve Tümünü Sil'e dokunarak alanı kalıcı olarak geri kazanın.",
          },
        ],
      },
      sections: [
        {
          title: "Fotoğraf Temizliğinde Güvenli-Riskli Ayrımı Neden Hayatidir?",
          content: [
            "Bir bilgisayarda dosyayı çöp kutusuna attığınızda ne olacağını bilirsiniz. Ancak modern bir iPhone'da fotoğraf silmek, arkasında çalışan iCloud Fotoğrafları, yerel önbellekler ve senkronizasyon protokolleri yüzünden karmaşık bir iştir.",
            "Kullanıcıların yaptığı en büyük hata, yer açmak için galerinin en eski fotoğraflarına gidip duygusal değeri olan anıları rastgele silmeye başlamaktır. Oysa bu fotoğraflar yerel depolamada neredeyse hiç yer tutmazken, asıl yeri dün kaydedilen 3 dakikalık bir ekran kaydı veya aynı açıyla çekilmiş 15 adet peş peşe selfie kaplar.",
            "Doğru strateji, anılarınıza dokunmadan yalnızca 'dijital atık' sınıfına giren kareleri sistematik olarak temizlemektir.",
          ],
        },
        {
          title: "Neler Güvenle Silinebilir? (Yeşil Bölge)",
          content: [
            "1. Odaksız ve Titrek Fotoğraflar: Loş ışıkta veya hareket halindeyken çekilen, ayrıntısı kaybolmuş kareler bir değer taşımaz. Bunları silmek hiçbir şey kaybettirmez.",
            "2. Benzer Kareler ve Seri Çekim Artıkları: En iyi kareyi yakalamak için peş peşe 8 fotoğraf çektiyseniz, en iyi 1 tanesini seçip kalan 7 tanesini silmek albümünüzü hem hafifletir hem daha derli toplu yapar.",
            "3. Ekran Görüntüleri ve Ekran Kayıtları: Alışveriş fişleri, yön tarifleri veya sosyal medya hikaye ekran görüntüleri birkaç gün sonra çöp haline gelir. Ekran kayıtları ise 4K çözünürlükte dakikada 400 MB tüketir.",
            "4. WhatsApp ve Sohbet Medyaları: Grup sohbetlerinden otomatik indirilen ve zaten uygulamanın kendi sohbet geçmişinde duran kopyalar galeride boşuna durmamalıdır.",
          ],
        },
        {
          title:
            "Nelere Kesinlikle Dokunulmamalıdır? (Kırmızı Bölge & iCloud Tuzağı)",
          content: [
            "En kritik tehlike: iCloud Fotoğrafları açıkken ve 'iPhone Depolama Alanını Optimize Et' seçeneği devredeyken silme yapmak.",
            "Bu ayar açıkken, telefonunuzda 10.000 fotoğraf olsa bile bunlar tam boyutlu değildir; telefon yalnızca 150–200 KB boyutunda küçük önizleme dosyalarını (thumbnail) tutar, asıl 5 MB'lık orijinaller iCloud bulutundadır.",
            "Telefonda yer açılmadığını gören kullanıcı bu fotoğrafları silmeye başladığında, iOS 'Bu fotoğraf tüm aygıtlarınızdan silinecek' uyarısı verir. Fotoğrafı sildiğinizde yerel telefonda yalnızca 200 KB açılır, ancak iCloud'daki asıl yüksek çözünürlüklü orijinal sonsuza dek yok olur! Gerçekten yer açmak istiyorsanız videoları ve ekran kayıtlarını hedeflemelisiniz.",
          ],
        },
        {
          title: "Apple'ın Kendi Yinelenenler Albümü Neden Yetersiz Kalır?",
          content: [
            "iOS 16 ile birlikte Fotoğraflar uygulamasına bir 'Yinelenenler' (Duplicates) albümü eklendi. Bu yararlı bir araçtır, ancak çok katı bir kuralla çalışır: yalnızca piksel-özdeş olan birebir aynı dosyaları eşleştirir.",
            "Oysa gerçek hayattaki dağınıklık bundan ibaret değildir: Bir konserde veya doğum gününde 1 saniye arayla çekilmiş 5 kare piksel olarak farklıdır; Apple bunları yinelenen saymaz. İşte burada görsel benzerlik (Visual Similarity) algoritmaları devreye girer.",
            "DiskMop for iPhone, fotoğrafların görsel parmak izini aygıtta çıkararak birbirine çok benzeyen serileri tek grupta toplar ve en iyi kareyi korumanızı sağlar.",
          ],
        },
        {
          title: "DiskMop for iPhone ile Güvenli ve Gizlilik Odaklı Temizlik",
          content: [
            "Piyasadaki birçok temizlik uygulaması fotoğraflarınızı analiz etmek için harici sunuculara yükleme yapar veya haftalık astronomik abonelikler talep eder. DiskMop farklı bir yol izler:",
            "Tüm analizler (Vision netlik puanlama, benzerlik gruplama ve kopyalar) doğrudan iPhone'unuzun Neural Engine ve işlemcisi üzerinde gerçekleşir. Fotoğraflarınız asla telefonunuzu terk etmez, internet bağlantısı gerektirmez.",
            "Hiçbir fotoğraf onayınız olmadan seçilmez veya silinmez. Tek seferlik makul bir lisansla ömür boyu kullanabilir, fotoğraflarınızı güvenle yönetebilirsiniz.",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone'dan fotoğraf silersem iCloud'dan da silinir mi?",
          answer:
            "Evet! Eğer Ayarlar > [Adınız] > iCloud > Fotoğraflar seçeneği açıksa, telefondan sildiğiniz bir fotoğraf tüm Apple cihazlarınızdan ve iCloud.com üzerinden de silinir. Silinen öğe 30 gün boyunca Son Silinenler albümünde kalır.",
        },
        {
          question: "Fotoğraf sildim ama hiç yer açılmadı, neden?",
          answer:
            "İki nedeni vardır: 1) Silinen fotoğraflar 'Son Silinenler' albümüne gitmiştir ve orada 30 gün bekler; bu albümü boşaltmanız gerekir. 2) 'iPhone Depolama Alanını Optimize Et' açıktır ve sildiğiniz fotoğraflar zaten yerelde sadece küçük bir önizlemedir.",
        },
        {
          question: "Live Photo hareketsiz fotoğraftan daha mı çok yer kaplar?",
          answer:
            "Evet. Her Live Photo 12 MP bir hareketsiz fotoğrafın yanı sıra 3 saniyelik 1080p bir video klibi taşır ve sıradan bir fotoğrafa kıyasla yaklaşık iki kat yer kaplar.",
        },
        {
          question:
            "Bulanık fotoğrafları Fotoğraflar uygulamasında aratarak bulabilir miyim?",
          answer:
            "Hayır. Apple'ın Fotoğraflar uygulamasında bulanıklık filtresi veya bulanık fotoğraf albümü yoktur. Bunları tespit etmek için DiskMop for iPhone gibi görüntü netliği ölçen araçlar gerekir.",
        },
      ],
      verdict: [
        "iPhone fotoğraf temizliği bir hafıza silme işlemi değil, anılarınızı korurken dijital kalabalığı ayıklama sanatıdır. Güvenli-Riskli haritasını takip ederek önce videoları, ardından bulanık ve benzer kareleri temizlediğinizde, değerli tek bir fotoğrafı bile feda etmeden onlarca gigabayt alan açabilirsiniz.",
        "Aygıt üzerinde çalışan, gizlilik dostu DiskMop for iPhone ile fotoğraf kütüphanenizi birkaç dakika içinde düzenleyin.",
      ],
      ctaText: "DiskMop for iPhone'u İndirin ve Kitaplığınızı Temizleyin",
    },
    en: {
      title: "iPhone Photo Cleanup Guide: What to Delete and What to Keep",
      metaDescription:
        "Clean up thousands of iPhone photos without losing precious memories. A complete safe-vs-risk map of blurry shots, duplicates, Live Photos and iCloud pitfalls.",
      subtitle:
        "A practical safe-vs-risk roadmap for your Photos library, Live Photos, and iCloud sync rules",
      intro: [
        "Short answer: You do not need to scroll through thousands of photos one by one to free up gigabytes on your iPhone. Instead, follow a structured safety map: blurry and shaky shots, near-identical bursts, forgotten 4K screen recordings, and stale screenshots are completely safe to purge. What you should never do is blindly delete old family pictures while iCloud 'Optimize Storage' is active; doing so recovers virtually no local space while permanently destroying the high-res original across all your Apple devices.",
        "This guide lays out a crystal-clear Safe-vs-Risk roadmap for your iPhone Photos library, helping you recover maximum gigabytes with zero regrets.",
      ],
      keyTakeaways: [
        "The fastest way to reclaim space is targeting screen recordings and 4K video clips first (1 minute of 4K/60fps video equals roughly 200 standard photos).",
        "The built-in 'Duplicates' album in iOS Photos only identifies exact pixel-identical copies; it cannot catch similar shots taken seconds apart.",
        "Blurry, out-of-focus, and motion-blurred photos have no native album in iOS; finding them requires on-device visual analysis tools.",
        "Deleted photos remain in the 'Recently Deleted' album for 30 days and continue counting against your storage until that album is emptied.",
        "Deleting photos when iCloud 'Optimize iPhone Storage' is enabled saves minimal phone space because only tiny thumbnails were stored locally.",
        "DiskMop for iPhone analyzes your photo library entirely on-device without uploading your private images to any cloud server.",
      ],
      dataTable: {
        caption: "Safe-vs-risk cleanup matrix for iPhone media types",
        columns: [
          "Media Category",
          "Typical File Size",
          "Safety Level",
          "Action",
        ],
        rows: [
          [
            "Blurry & Shaky Photos",
            "2 – 3 MB each",
            "Completely Safe",
            "Detect via sharpness analysis, preview, and batch delete",
          ],
          [
            "Screen Recordings & 4K Videos",
            "100 – 400 MB / min",
            "Completely Safe",
            "Highest space savings; review and delete obsolete clips",
          ],
          [
            "Old Screenshots & Receipts",
            "2 – 8 MB each",
            "Safe",
            "Prune expired shipping labels, tickets, and chat caps",
          ],
          [
            "Similar & Burst Shot Groups",
            "2 – 5 MB each",
            "Review Needed",
            "Keep the single best shot; delete the remaining 4–5 variations",
          ],
          [
            "iCloud Optimized Photos",
            "100 – 300 KB locally",
            "High Risk",
            "Frees almost no local space; deletes high-res master from iCloud",
          ],
        ],
      },
      howTo: {
        name: "Step-by-step safe iPhone photo cleanup",
        totalTime: "PT15M",
        steps: [
          {
            name: "Purge the heaviest media first (Screen Recordings & 4K clips)",
            text: "Open Photos > Albums > Media Types > Screen Recordings. Delete outdated tutorials and gaming clips for instant gigabyte gains.",
          },
          {
            name: "Filter out blurry and unrecoverable shots",
            text: "Launch DiskMop for iPhone and navigate to 'Blurry Photos'. Review shots flagged with poor sharpness scores and remove them.",
          },
          {
            name: "Prune similar photo bursts",
            text: "Examine groups of photos taken seconds apart. Select and keep the sharpest shot, then discard the runner-ups.",
          },
          {
            name: "Clear stale screenshots",
            text: "Go to Albums > Screenshots. Select and delete old parking slips, verification codes, and temporary images.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Open Photos > Albums > Recently Deleted. Unlock with Face ID, tap Select, and tap Delete All to reclaim the space permanently.",
          },
        ],
      },
      sections: [
        {
          title: "Why a Safe-vs-Risk Framework Is Essential",
          content: [
            "On a PC, dragging a file to the Recycle Bin is straightforward. On an iPhone, photo storage is governed by background sync daemons, iCloud photo libraries, and thumbnail caches.",
            "The most common mistake users make when their phone is full is scrolling back five years and deleting precious nostalgic photos. In reality, these ancient photos barely take up local space if iCloud optimization is turned on, whereas a single 5-minute screen recording from yesterday eats up 2 GB.",
            "A structured cleanup focuses strictly on digital refuse: duplicate bursts, unreadable blurry frames, and temporary utility media.",
          ],
        },
        {
          title: "What Is Completely Safe to Delete? (The Green Zone)",
          content: [
            "1. Out-of-Focus and Shaky Pictures: Low-light captures where faces are smeared or focus landed on the background hold little emotional value. Deleting them is harmless.",
            "2. Similar Shots & Burst Leftovers: Taking 7 shots to get one good smile is normal camera behavior. Keeping all 7 is unnecessary hoarding. Pick the winner, scrap the rest.",
            "3. Screenshots & Receipts: Boarding passes, package tracking numbers, and meme screenshots have short lifespans. They clutter your camera roll and waste storage.",
            "4. Chat App Media: WhatsApp, Telegram, and Messenger auto-save countless memes and forwarded videos to your camera roll. These should be cleared regularly.",
          ],
        },
        {
          title: "The Danger Zone: The iCloud 'Optimize Storage' Trap",
          content: [
            "The single biggest trap on iPhone is deleting photos while iCloud Photos is active with 'Optimize iPhone Storage' turned on.",
            "Under this setting, your phone only keeps tiny 200 KB preview files on local flash memory. The full 4–8 MB camera master lives on Apple's iCloud servers.",
            "If you delete a photo on your phone under this mode, iOS warns: 'This photo will be deleted from all your devices.' You gain a negligible 200 KB of local phone storage, but you permanently erase the irreplaceable original from your iCloud backup! If you need real space, target heavy videos and unoptimized local files instead.",
          ],
        },
        {
          title: "Why Apple's Built-in Duplicates Album Falls Short",
          content: [
            "Apple introduced a 'Duplicates' album in iOS 16. While helpful, it relies on strict hash and metadata matching: it only identifies exact pixel-identical copies.",
            "It will not flag five photos of your pet taken half a second apart from slightly different angles, even though four of them are redundant. That requires visual similarity algorithms that compare compositions and facial expressions.",
            "DiskMop for iPhone fills this void by clustering near-identical shots so you can preserve the best memory and shed the dead weight.",
          ],
        },
        {
          title: "Private, On-Device Cleaning with DiskMop for iPhone",
          content: [
            "Many App Store cleaner apps demand intrusive weekly subscriptions or upload your private gallery to external cloud servers for analysis. DiskMop takes a privacy-first stance:",
            "All vision heuristics, sharpness calculations, and duplicate clustering run 100% locally on your iPhone using Apple's Neural Engine. Your photos never leave your device.",
            "Nothing is ever deleted automatically without your explicit confirmation. A transparent, one-time lifetime license provides complete control over your photo storage.",
          ],
        },
      ],
      faq: [
        {
          question: "Does deleting a photo from iPhone delete it from iCloud?",
          answer:
            "Yes! If iCloud Photos is turned on, deleting a photo removes it across all your Apple devices and iCloud.com. It will remain in the Recently Deleted album for 30 days before permanent erasure.",
        },
        {
          question:
            "I deleted 500 photos but free space did not increase. Why?",
          answer:
            "Two reasons: 1) The photos moved to 'Recently Deleted' where they still occupy space for 30 days until emptied. 2) 'Optimize iPhone Storage' was on, meaning the deleted items were merely tiny local thumbnails.",
        },
        {
          question:
            "Do Live Photos use significantly more storage than standard photos?",
          answer:
            "Yes. A Live Photo combines a 12 MP still photo with a 3-second 1080p video clip, taking roughly twice the space of a static image.",
        },
        {
          question: "Can I find blurry photos directly inside the Photos app?",
          answer:
            "No. The native Photos app has no filter or album for blurry shots. You need a dedicated on-device utility like DiskMop for iPhone to calculate image sharpness.",
        },
      ],
      verdict: [
        "Cleaning your iPhone photo library should never put treasured memories at risk. By following this safety roadmap—tackling heavy screen recordings first, then pruning blurry shots and similar bursts—you can free up tens of gigabytes safely.",
        "Download DiskMop for iPhone on the App Store to enjoy private, on-device library cleaning without subscription traps.",
      ],
      ctaText: "Get DiskMop for iPhone and Clean Your Library",
    },
    de: {
      title:
        "iPhone Fotos aufräumen: Was Sie sicher löschen können und was bleiben sollte",
      metaDescription:
        "Tausende iPhone-Fotos ohne Datenverlust bereinigen. Der Sicherheitsleitfaden für unscharfe Bilder, Duplikate, Bildschirmaufnahmen und die iCloud-Falle.",
      subtitle:
        "Die sichere Orientierung für Ihre Fotomediathek, Live Photos und iCloud-Regeln",
      intro: [
        "Kurze Antwort: Um Gigabytes auf dem iPhone freizugeben, müssen Sie nicht jedes Bild einzeln durchsehen. Halten Sie sich an eine klare Sicherheitsregel: Unscharfe Aufnahmen, fast identische Serienbilder und vergessene 4K-Bildschirmaufnahmen können gefahrlos gelöscht werden. Vermeiden Sie es jedoch, alte Familienfotos zu löschen, während die iCloud-Option 'iPhone-Speicher optimieren' aktiv ist – das bringt kaum Speicherplatz auf dem Gerät und löscht das Original überall.",
        "Dieser Leitfaden zeigt Ihnen die richtige Reihenfolge, um mit minimalem Aufwand maximalen Speicherplatz zu gewinnen.",
      ],
      keyTakeaways: [
        "Bildschirmaufnahmen und 4K-Videos belegen den meisten Platz (1 Minute 4K-Video entspricht rund 200 normalen Fotos).",
        "Das iOS-Album 'Duplikate' erkennt nur exakt identische Kopien, keine ähnlichen Serienaufnahmen.",
        "Unscharfe Fotos lassen sich mit Werkzeugen wie DiskMop für iPhone direkt auf dem Gerät identifizieren.",
        "Gelöschte Fotos belegen 30 Tage lang Speicher im Album 'Zuletzt gelöscht', bis dieses manuell geleert wird.",
      ],
      dataTable: {
        caption: "Sicherheitsmatrix für iPhone-Fotomedien",
        columns: ["Medientyp", "Typische Größe", "Sicherheit", "Maßnahme"],
        rows: [
          [
            "Unscharfe Fotos",
            "2 – 3 MB",
            "Völlig sicher",
            "Mit Schärfefilter prüfen und löschen",
          ],
          [
            "Bildschirmaufnahmen & 4K-Videos",
            "100 – 400 MB / Min",
            "Völlig sicher",
            "Alte Clips ansehen und entfernen",
          ],
          [
            "iCloud-optimierte Fotos",
            "100 – 300 KB lokal",
            "Hohes Risiko",
            "Bringt lokal kaum Platz, löscht Original in iCloud",
          ],
        ],
      },
      howTo: {
        name: "iPhone Fotomediathek sicher aufräumen",
        totalTime: "PT15M",
        steps: [
          {
            name: "Schwere Medien zuerst löschen",
            text: "Öffnen Sie Fotos > Alben > Medientypen > Bildschirmaufnahmen und löschen Sie überflüssige Aufnahmen.",
          },
          {
            name: "Unscharfe Fotos bereinigen",
            text: "Nutzen Sie DiskMop für iPhone, um verwackelte Bilder schnell aufzuspüren.",
          },
          {
            name: "Album 'Zuletzt gelöscht' leeren",
            text: "Öffnen Sie das Album 'Zuletzt gelöscht' und tippen Sie auf 'Alle löschen'.",
          },
        ],
      },
      sections: [
        {
          title: "Die iCloud-Speicherfalle verstehen",
          content: [
            "Wenn 'iPhone-Speicher optimieren' aktiv ist, liegen auf dem Telefon nur winzige Vorschaubilder. Wer sie löscht, gewinnt kaum Speicher auf dem iPhone, verliert aber das Original in der Cloud.",
          ],
        },
        {
          title: "DiskMop für iPhone: Privatsphäre an erster Stelle",
          content: [
            "DiskMop analysiert Fotos ausschließlich lokal auf dem iPhone ohne Cloud-Uploads. Sie behalten jederzeit die volle Kontrolle über Ihre Erinnerungen.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Löscht das Entfernen eines Fotos auf dem iPhone dieses auch aus iCloud?",
          answer:
            "Ja! Wenn iCloud-Fotos aktiv ist, wird das Foto auf allen Apple-Geräten und auf iCloud.com entfernt. Es verbleibt jedoch 30 Tage in 'Zuletzt gelöscht'.",
        },
        {
          question:
            "Ich habe 500 Fotos gelöscht, aber der Speicherplatz stieg nicht. Warum?",
          answer:
            "Zwei Gründe: 1) Die Fotos befinden sich noch 30 Tage im Album 'Zuletzt gelöscht'. 2) 'iPhone-Speicher optimieren' war aktiv, sodass lokal nur winzige Vorschaubilder lagen.",
        },
        {
          question:
            "Verbrauchen Live Photos deutlich mehr Speicherplatz als normale Fotos?",
          answer:
            "Ja. Ein Live Photo kombiniert ein 12-MP-Standbild mit einem 3-sekündigen Videoclip und belegt etwa doppelt so viel Speicher wie ein normales Foto.",
        },
        {
          question: "Kann ich unscharfe Fotos direkt in der Fotos-App finden?",
          answer:
            "Nein. Die native Fotos-App bietet keinen Filter für unscharfe Aufnahmen. Hierfür benötigen Sie ein On-Device-Tool wie DiskMop für iPhone.",
        },
      ],
      verdict: [
        "Konzentrieren Sie sich beim Aufräumen auf Videos, Bildschirmaufnahmen und Serienbilder. Mit DiskMop für iPhone gelingt die Bereinigung schnell und sicher.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Nettoyer les photos sur iPhone : que supprimer sans risque et que conserver",
      metaDescription:
        "Faites le tri dans des milliers de photos iPhone sans perdre de souvenirs précieux. Guide complet : doublons, flous, vidéos lourdes et pièges iCloud.",
      subtitle:
        "La feuille de route sécurisée pour votre photothèque, Live Photos et synchronisation iCloud",
      intro: [
        "Réponse courte : Pour libérer des gigaoctets sur votre iPhone, inutile de parcourir vos photos une par une. Suivez une règle simple : les photos floues, les rafales quasi identiques et les enregistrements d'écran 4K s'effacent sans hésiter. Ne supprimez jamais de vieilles photos quand l'option 'Optimiser le stockage de l'iPhone' est active : vous ne gagnerez presque rien en local et détruirez l'original sur iCloud.",
        "Ce guide vous donne la méthode étape par étape pour récupérer un maximum d'espace sans aucun regret.",
      ],
      keyTakeaways: [
        "Les enregistrements d'écran et vidéos 4K sont les plus volumineux (1 minute de 4K équivaut à environ 200 photos).",
        "L'album 'Doublons' d'Apple ne détecte que les fichiers strictement identiques au pixel près.",
        "DiskMop pour iPhone permet de repérer facilement les photos floues directement sur l'appareil.",
        "Les photos supprimées restent 30 jours dans 'Supprimés récemment' et continuent de prendre de la place.",
      ],
      dataTable: {
        caption: "Matrice de sécurité pour le tri des photos iPhone",
        columns: ["Type de média", "Taille moyenne", "Sécurité", "Action"],
        rows: [
          [
            "Photos floues",
            "2 – 3 Mo",
            "Totalement sûr",
            "Détecter via la netteté et supprimer",
          ],
          [
            "Enregistrements d'écran & 4K",
            "100 – 400 Mo / min",
            "Totalement sûr",
            "Vérifier et supprimer les vidéos obsolètes",
          ],
          [
            "Photos optimisées iCloud",
            "100 – 300 Ko local",
            "Risque élevé",
            "Ne libère presque rien en local, détruit l'original",
          ],
        ],
      },
      howTo: {
        name: "Nettoyer la photothèque iPhone en toute sécurité",
        totalTime: "PT15M",
        steps: [
          {
            name: "Supprimer les vidéos lourdes",
            text: "Allez dans Photos > Albums > Types de média > Enregistrements d'écran et supprimez les vidéos inutiles.",
          },
          {
            name: "Traiter les photos floues",
            text: "Ouvrez DiskMop pour iPhone pour lister et trier les clichés manquant de netteté.",
          },
          {
            name: "Vider l'album Supprimés récemment",
            text: "Ouvrez l'album 'Supprimés récemment' et appuyez sur 'Tout supprimer'.",
          },
        ],
      },
      sections: [
        {
          title: "Le piège de l'optimisation iCloud",
          content: [
            "Avec l'option 'Optimiser le stockage', les photos sur l'iPhone ne sont que des vignettes légères. Les supprimer efface le fichier maître d'iCloud sans réel gain d'espace sur le téléphone.",
          ],
        },
        {
          title: "La solution DiskMop pour iPhone",
          content: [
            "DiskMop pour iPhone fonctionne entièrement en local grâce au Neural Engine d'Apple. Aucune photo n'est transmise sur un serveur distant.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Supprimer une photo de l'iPhone la supprime-t-elle d'iCloud ?",
          answer:
            "Oui ! Si Photos iCloud est activé, la suppression s'applique à tous vos appareils Apple et à iCloud.com. Elle reste 30 jours dans 'Supprimés récemment'.",
        },
        {
          question:
            "J'ai supprimé 500 photos mais l'espace libre n'a pas augmenté. Pourquoi ?",
          answer:
            "Deux raisons : 1) Les photos sont dans 'Supprimés récemment' pendant 30 jours. 2) 'Optimiser le stockage de l'iPhone' était activé, réduisant l'impact local.",
        },
        {
          question: "Les Live Photos prennent-elles beaucoup plus de place ?",
          answer:
            "Oui. Une Live Photo associe une photo 12 Mpx à un clip vidéo de 3 secondes, occupant environ le double de place d'une photo classique.",
        },
        {
          question:
            "Peut-on repérer les photos floues directement dans l'app Photos ?",
          answer:
            "Non. L'application Photos native ne possède aucun filtre pour le flou. Il faut utiliser une application sur l'appareil comme DiskMop pour iPhone.",
        },
      ],
      verdict: [
        "Un bon nettoyage cible en priorité les vidéos, captures et photos floues. DiskMop pour iPhone vous permet d'assainir votre galerie en quelques minutes.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Guía para limpiar fotos en iPhone: qué borrar con seguridad y qué conservar",
      metaDescription:
        "Limpia miles de fotos en iPhone sin perder recuerdos valiosos. Mapa seguro de fotos borrosas, duplicados, vídeos pesados y la trampa de iCloud.",
      subtitle:
        "El mapa seguro para tu fototeca, Live Photos y sincronización con iCloud",
      intro: [
        "Respuesta corta: No necesitas revisar tus fotos una por una para liberar gigabytes en tu iPhone. Basta con seguir un mapa claro: las fotos borrosas, las ráfagas repetidas y las grabaciones de pantalla 4K se pueden eliminar con total tranquilidad. Lo que nunca debes hacer es borrar fotos antiguas con la opción 'Optimizar almacenamiento del iPhone' activa: apenas ganarás espacio local y borrarás el archivo original de iCloud.",
        "Esta guía te muestra el orden exacto para recuperar el máximo espacio posible sin riesgos.",
      ],
      keyTakeaways: [
        "Las grabaciones de pantalla y vídeos 4K ocupan la mayor parte del espacio (1 minuto de 4K equivale a unas 200 fotos).",
        "El álbum nativo 'Duplicados' de iOS solo encuentra copias idénticas al píxel, no fotos similares.",
        "DiskMop para iPhone localiza fotos desenfocadas y movidas en el propio dispositivo.",
        "Las fotos borradas permanecen 30 días en 'Eliminado recientemente' ocupando espacio hasta vaciar el álbum.",
      ],
      dataTable: {
        caption: "Matriz de seguridad para limpiar fotos en iPhone",
        columns: [
          "Tipo de medio",
          "Tamaño habitual",
          "Nivel de seguridad",
          "Acción recomendada",
        ],
        rows: [
          [
            "Fotos borrosas",
            "2 – 3 MB",
            "Totalmente seguro",
            "Detectar por nitidez y eliminar",
          ],
          [
            "Grabaciones de pantalla y 4K",
            "100 – 400 MB / min",
            "Totalmente seguro",
            "Revisar y eliminar vídeos innecesarios",
          ],
          [
            "Fotos optimizadas en iCloud",
            "100 – 300 KB local",
            "Alto riesgo",
            "Apenas libera espacio local y borra el original de iCloud",
          ],
        ],
      },
      howTo: {
        name: "Limpieza segura de fotos en iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Eliminar vídeos y grabaciones pesadas",
            text: "Entra en Fotos > Álbumes > Tipos de contenido > Grabaciones de pantalla y borra lo que ya no uses.",
          },
          {
            name: "Eliminar fotos borrosas",
            text: "Usa DiskMop para iPhone para detectar tomas movidas o desenfocadas de un vistazo.",
          },
          {
            name: "Vaciar el álbum Eliminado recientemente",
            text: "Abre el álbum 'Eliminado recientemente' y pulsa 'Eliminar todo' para liberar el espacio definitivamente.",
          },
        ],
      },
      sections: [
        {
          title: "La trampa del almacenamiento optimizado de iCloud",
          content: [
            "Con la optimización activada, las fotos en tu iPhone son solo vistas previas. Al borrarlas, no ganas espacio en el teléfono y pierdes el archivo original en la nube.",
          ],
        },
        {
          title: "Limpieza privada con DiskMop para iPhone",
          content: [
            "DiskMop procesa todas las fotos localmente en tu iPhone mediante el Neural Engine de Apple, sin subir nada a servidores externos.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Borrar una foto del iPhone la elimina también de iCloud?",
          answer:
            "¡Sí! Si Fotos en iCloud está activado, se borra de todos tus dispositivos Apple y de iCloud.com. Queda 30 días en 'Eliminado recientemente'.",
        },
        {
          question:
            "He borrado 500 fotos pero el espacio no ha aumentado. ¿Por qué?",
          answer:
            "Dos razones: 1) Siguen en el álbum 'Eliminado recientemente'. 2) 'Optimizar almacenamiento del iPhone' estaba activo y solo borraste miniaturas locales.",
        },
        {
          question:
            "¿Ocupan las Live Photos mucho más espacio que las fotos estándar?",
          answer:
            "Sí. Una Live Photo une una foto de 12 MP con un vídeo de 3 segundos a 1080p, ocupando aproximadamente el doble de espacio que una foto fija.",
        },
        {
          question:
            "¿Se pueden encontrar fotos borrosas directamente en la app Fotos?",
          answer:
            "No. La app Fotos no tiene álbum para fotos desenfocadas. Necesitas una herramienta local como DiskMop para iPhone.",
        },
      ],
      verdict: [
        "Prioriza siempre vídeos, capturas y fotos borrosas. Con DiskMop para iPhone mantendrás tu fototeca organizada y ligera con total privacidad.",
      ],
      ctaText: "Descargar DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Guida alla pulizia foto su iPhone: cosa eliminare in sicurezza e cosa conservare",
      metaDescription:
        "Fai spazio tra migliaia di foto su iPhone senza perdere ricordi importanti. Guida sicura per scatti sfocati, duplicati, video 4K e la trappola di iCloud.",
      subtitle:
        "La guida strategica per la tua libreria foto, Live Photos e le regole di iCloud",
      intro: [
        "Risposta breve: Per recuperare gigabyte sul tuo iPhone non serve esaminare ogni singolo scatto. Segui una mappa precisa: foto sfocate, raffiche quasi identiche e registrazioni schermo in 4K si possono eliminare in totale sicurezza. Evita invece di cancellare foto a caso se hai attivo 'Ottimizza spazio iPhone': guadagnerai pochissimo spazio locale ed eliminerai l'originale ad alta risoluzione da iCloud.",
        "Questa guida ti indica i passaggi migliori per liberare memoria velocemente e senza rimpianti.",
      ],
      keyTakeaways: [
        "Registrazioni schermo e video 4K sono i file più pesanti (1 minuto di 4K corrisponde a circa 200 foto standard).",
        "L'album nativo 'Duplicati' di Apple trova solo copie identiche al pixel, non foto simili scattate in sequenza.",
        "DiskMop per iPhone permette di scovare foto mosse e sfocate direttamente sul dispositivo.",
        "Le foto eliminate rimangono per 30 giorni nell'album 'Eliminati di recente' occupando spazio.",
      ],
      dataTable: {
        caption: "Matrice di sicurezza per la pulizia foto su iPhone",
        columns: ["Tipo di file", "Peso medio", "Sicurezza", "Azione"],
        rows: [
          [
            "Foto sfocate",
            "2 – 3 MB",
            "Sicurissimo",
            "Analizza la nitidezza ed elimina",
          ],
          [
            "Registrazioni schermo & 4K",
            "100 – 400 MB / min",
            "Sicurissimo",
            "Rivedi ed elimina i video inutili",
          ],
          [
            "Foto ottimizzate su iCloud",
            "100 – 300 KB locale",
            "Rischio alto",
            "Non libera spazio sul telefono e cancella l'originale su iCloud",
          ],
        ],
      },
      howTo: {
        name: "Pulizia sicura delle foto su iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Elimina i video più pesanti",
            text: "Apri Foto > Album > Tipi di file multimediali > Registrazioni schermo ed elimina i video obsoleti.",
          },
          {
            name: "Pulisci gli scatti sfocati",
            text: "Apri DiskMop per iPhone per identificare gli scatti non a fuoco.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Entra in 'Eliminati di recente' e tocca 'Elimina tutto' per recuperare spazio immediato.",
          },
        ],
      },
      sections: [
        {
          title: "La trappola dello spazio ottimizzato su iCloud",
          content: [
            "Con l'ottimizzazione attiva, sul telefono risiedono solo anteprime leggere. Cancellandole si perde l'originale sul cloud senza un reale guadagno locale.",
          ],
        },
        {
          title: "Perché scegliere DiskMop per iPhone",
          content: [
            "DiskMop esegue tutte le scansioni direttamente sul processore del tuo iPhone senza caricare le tue immagini private sul web.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Eliminare una foto dall'iPhone la cancella anche da iCloud?",
          answer:
            "Sì! Se Foto di iCloud è attivo, la cancellazione si riflette su tutti i dispositivi Apple e iCloud.com. Rimane per 30 giorni in 'Eliminati di recente'.",
        },
        {
          question:
            "Ho cancellato 500 foto ma lo spazio non è aumentato. Perché?",
          answer:
            "Due motivi: 1) Le foto sono ancora in 'Eliminati di recente'. 2) L'opzione 'Ottimizza spazio iPhone' era attiva e hai rimosso solo miniature leggere.",
        },
        {
          question:
            "Le Live Photo occupano molto più spazio delle foto normali?",
          answer:
            "Sì. Una Live Photo abbina uno scatto da 12 MP a un video da 3 secondi, occupando circa il doppio dello spazio di una normale foto statica.",
        },
        {
          question: "Posso trovare le foto sfocate direttamente nell'app Foto?",
          answer:
            "No. L'app Foto non ha un filtro per le immagini mosse. Serve uno strumento on-device come DiskMop per iPhone.",
        },
      ],
      verdict: [
        "Concentrati sui video e sulle raffiche inutili per liberare spazio all'istante. Con DiskMop per iPhone mantieni la tua galleria ordinata in tutta sicurezza.",
      ],
      ctaText: "Scarica DiskMop per iPhone su App Store",
    },
    pt: {
      title:
        "Guia de Limpeza de Fotos no iPhone: O Que Apagar com Segurança e o Que Manter",
      metaDescription:
        "Limpe milhares de fotos no iPhone sem perder memórias queridas. Mapa seguro para fotos borradas, duplicadas, vídeos pesados e a armadilha do iCloud.",
      subtitle:
        "O roteiro seguro para organizar sua fototeca, Live Photos e sincronização do iCloud",
      intro: [
        "Resposta rápida: Você não precisa rolar por milhares de imagens uma a uma para liberar espaço no iPhone. Siga um mapa seguro: fotos borradas, rajadas quase idênticas e gravações de tela em 4K podem ser apagadas tranquilamente. O que você nunca deve fazer é sair apagando fotos antigas com a opção 'Otimizar no iPhone' ativa no iCloud: isso quase não libera espaço no aparelho e apaga o original em alta resolução de todos os seus dispositivos.",
        "Este guia prático mostra a ordem exata para recuperar gigabytes com total tranquilidade.",
      ],
      keyTakeaways: [
        "Gravações de tela e vídeos 4K são os maiores vilões (1 minuto de vídeo 4K equivale a cerca de 200 fotos normais).",
        "O álbum nativo 'Duplicadas' do iOS só detecta arquivos exatamente idênticos, ignorando fotos semelhantes.",
        "O DiskMop para iPhone ajuda a encontrar fotos desfocadas e tremidas diretamente no aparelho.",
        "Fotos apagadas continuam ocupando espaço por 30 dias no álbum 'Apagados Recentemente'.",
      ],
      dataTable: {
        caption: "Matriz de segurança para limpeza de fotos no iPhone",
        columns: [
          "Tipo de Mídia",
          "Tamanho Médio",
          "Nível de Segurança",
          "Ação Recomendada",
        ],
        rows: [
          [
            "Fotos borradas",
            "2 – 3 MB",
            "Totalmente seguro",
            "Localizar por nitidez e excluir",
          ],
          [
            "Gravações de tela e 4K",
            "100 – 400 MB / min",
            "Totalmente seguro",
            "Revisar e apagar vídeos dispensáveis",
          ],
          [
            "Fotos otimizadas no iCloud",
            "100 – 300 KB local",
            "Alto risco",
            "Quase não libera espaço local e apaga o arquivo do iCloud",
          ],
        ],
      },
      howTo: {
        name: "Como fazer limpeza segura de fotos no iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Apague os vídeos pesados primeiro",
            text: "Acesse Fotos > Álbuns > Tipos de Mídia > Gravações de Tela e descarte arquivos antigos.",
          },
          {
            name: "Identifique fotos borradas",
            text: "Abra o DiskMop para iPhone para listar e conferir fotos fora de foco.",
          },
          {
            name: "Esvazie os Apagados Recentemente",
            text: "Vá ao álbum 'Apagados Recentemente' e toque em 'Apagar Tudo' para liberar espaço real.",
          },
        ],
      },
      sections: [
        {
          title: "A armadilha da otimização do iCloud",
          content: [
            "Quando a otimização está ativada, seu iPhone guarda apenas miniaturas compactas. Ao apagá-las, você não ganha espaço útil no telefone e destrói o original na nuvem.",
          ],
        },
        {
          title: "Privacidade com DiskMop para iPhone",
          content: [
            "O DiskMop analisa suas fotos exclusivamente no aparelho por meio do Neural Engine da Apple, sem enviar nada para servidores externos.",
          ],
        },
      ],
      faq: [
        {
          question: "Apagar uma foto do iPhone também a apaga do iCloud?",
          answer:
            "Sim! Se Fotografias do iCloud estiver ativo, a eliminação afeta todos os dispositivos Apple e o iCloud.com. Fica 30 dias em 'Apagados recentemente'.",
        },
        {
          question: "Apaguei 500 fotos e o espaço livre não aumentou. Porquê?",
          answer:
            "Duas razões: 1) Estão na pasta 'Apagados recentemente'. 2) 'Otimizar Armazenamento do iPhone' estava ligado e eram apenas miniaturas locais.",
        },
        {
          question: "As Live Photos ocupam significativamente mais espaço?",
          answer:
            "Sim. Uma Live Photo combina uma foto de 12 MP com um vídeo de 3 segundos, ocupando cerca do dobro de uma foto tradicional.",
        },
        {
          question: "Consigo encontrar fotos desfocadas na app Fotografias?",
          answer:
            "Não. A app Fotografias não possui filtro para fotos tremidas. Precisa de uma ferramenta no dispositivo como o DiskMop para iPhone.",
        },
      ],
      verdict: [
        "Foque em vídeos grandes, capturas de tela e fotos tremidas para recuperar espaço imediato. O DiskMop para iPhone garante praticidade e total privacidade.",
      ],
      ctaText: "Baixar DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhoneの写真整理完全ガイド：安全に削除できる写真と残すべき写真の見分け方",
      metaDescription:
        "大切な思い出を消さずにiPhoneの写真を整理する方法。ブレた写真、重複、大容量動画、iCloudの落とし穴まで安全な削除手順を徹底解説。",
      subtitle:
        "写真ライブラリ、Live Photos、iCloud同期ルールを正しく理解する安全マップ",
      intro: [
        "結論から言うと、iPhoneの空き容量を増やすために何千枚もの写真を1枚ずつ確認する必要はありません。ブレた写真、連写で似たような構図、不要になった4K画面収録などは安全に削除できます。絶対に避けるべきなのは、iCloudの「iPhoneのストレージを最適化」がオンの状態で昔の写真をやみくもに削除することです。本体の容量はほとんど増えないうえ、iCloud上のオリジナル高画質データが完全に消えてしまいます。",
        "このガイドでは、安全に削除できるファイルと保護すべきデータの見分け方、そして最も効率よくギガ単位の空き容量を増やす手順を詳しく解説します。",
      ],
      keyTakeaways: [
        "最も早く容量を空ける方法は、画面収録や4K動画から整理することです（4K動画1分は通常写真約200枚分に相当）。",
        "iOS標準の「重複項目」アルバムは完全一致する画像しか検出できず、わずかに構図が違う類似写真は見つけられません。",
        "ピンボケやブレた写真は標準アルバムでは抽出できません。DiskMopなどのオンデバイス診断ツールが役立ちます。",
        "削除した写真は「最近削除した項目」に30日間保持されるため、ここを完全に空にするまで容量は回復しません。",
      ],
      dataTable: {
        caption: "iPhoneメディアの安全度マトリクス",
        columns: ["メディア種類", "一般的なサイズ", "安全性", "推奨アクション"],
        rows: [
          [
            "ブレた写真・ピンボケ",
            "2〜3MB",
            "完全に安全",
            "鮮明度チェックで検出し一括削除",
          ],
          [
            "画面収録・4K動画",
            "100〜400MB / 分",
            "完全に安全",
            "見終わった不要動画を削除",
          ],
          [
            "iCloud最適化済み写真",
            "本体内100〜300KB",
            "高リスク",
            "本体容量はほぼ増えず、iCloudの元データが消去される",
          ],
        ],
      },
      howTo: {
        name: "iPhone写真ライブラリの安全な整理手順",
        totalTime: "PT15M",
        steps: [
          {
            name: "大容量動画から削除する",
            text: "「写真」>「アルバム」>「画面収録」を開き、不要な録画ファイルを削除します。",
          },
          {
            name: "ブレた写真を検出する",
            text: "「DiskMop for iPhone」を開き、鮮明度の低い写真をリストアップして確認・削除します。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "「最近削除した項目」アルバムを開き、「すべて削除」を実行して実際に容量を回復させます。",
          },
        ],
      },
      sections: [
        {
          title: "iCloud「ストレージ最適化」の注意点",
          content: [
            "最適化が有効な場合、iPhone本体には軽量なサムネイルしか置かれていません。本体から削除しても容量はほとんど増えず、クラウド上の原本が失われます。",
          ],
        },
        {
          title: "DiskMop for iPhoneの安心設計",
          content: [
            "DiskMopはすべての解析をiPhoneのチップ上（オンデバイス）で完結させます。写真データが外部サーバーへ送信されることは一切ありません。",
          ],
        },
      ],
      faq: [
        {
          question: "iPhoneから写真を削除するとiCloudからも消えますか？",
          answer:
            "はい。iCloud写真が有効な場合、すべてのApple端末およびiCloud.comから削除されます。ただし30日間は「最近削除した項目」に残ります。",
        },
        {
          question:
            "写真を数百枚削除したのに空き容量が増えないのはなぜですか？",
          answer:
            "原因は2つあります。1) 写真が「最近削除した項目」に残っている。2)「iPhoneのストレージを最適化」が有効で、本体にあったのは極小サムネイルだったためです。",
        },
        {
          question: "Live Photosは通常の写真より容量を多く消費しますか？",
          answer:
            "はい。1200万画素の静止画に加えて3秒間の動画データが保存されるため、通常の静止画の約2倍のストレージを消費します。",
        },
        {
          question:
            "写真アプリ標準機能でピンボケ・手ブレ写真を検出できますか？",
          answer:
            "できません。標準の写真アプリにはブレ写真の抽出機能はありません。端末内で解析するDiskMopのような専用アプリが必要です。",
        },
      ],
      verdict: [
        "写真整理の秘訣は、動画・画面収録・ブレた写真から着手することです。DiskMop for iPhoneを活用して、プライバシーを守りながら快適なストレージを取り戻しましょう。",
      ],
      ctaText: "App StoreでDiskMop for iPhoneを入手",
    },
  },
};
