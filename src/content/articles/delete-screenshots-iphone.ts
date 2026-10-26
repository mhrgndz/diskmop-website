import type { Article } from "../types";

export const deleteScreenshotsIphone: Article = {
  slug: "delete-screenshots-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone'da Ekran Görüntülerini ve Ekran Kayıtlarını Silme (Gerekenleri Kaybetmeden)",
      metaDescription:
        "Ekran görüntüleri binlerle birikir, ekran kayıtları yüzlerce MB tutar. Hepsini bulma, toplu silme ve ihtiyacınız olan fiş, bilet ve kodları koruma adımları.",
      subtitle:
        "Apple'ın zaten verdiği iki albüm, toplu silmenin riski ve ekran görüntülerini içeriğine göre ayırma",
      intro: [
        "Kısa cevap: Fotoğraflar > Albümler'i açın, Ortam Türleri'ne inin ve Ekran Görüntüleri'ni açın; Seç'e dokunun, birçoğunu birden seçmek için parmağınızı ızgarada sürükleyin ve silin. Aynısını Ekran Kayıtları'nda yapın; genellikle çok daha fazla yer açar, çünkü tek bir dakikalık kayıt 100 ila 200 MB tutabilir. Sonra Son Silinenler'i boşaltın, yoksa 30 gün boyunca hiçbir şey değişmez.",
        "İşin püf noktası, film rulosundaki ekran görüntülerinin hepsinin çöp olmamasıdır. Capslerin ve sohbet görüntülerinin arasında yeniden ihtiyaç duyacağınız biniş kartları, otopark fişleri, faturalar ve QR kodlar durur. Bu rehber her ekran görüntüsünü ve kaydı nasıl bulacağınızı, bunları atmadan nasıl hızla sileceğinizi ve iPhone için DiskMop'un ekran görüntülerini içeriklerine göre nasıl ayırdığını ve aynı ekranın tekrarlanan görüntülerini nasıl yakaladığını anlatıyor.",
      ],
      keyTakeaways: [
        "Fotoğraflar > Albümler > Ortam Türleri, Ekran Görüntüleri ve Ekran Kayıtları'nı ayrı ayrı listeler; ikisi de ızgarada parmağı sürükleyerek toplu seçilebilir.",
        "Ağır olan kısım ekran kayıtlarıdır: bir dakikalık kayıt genellikle 100 ila 200 MB tutarken bir ekran görüntüsü birkaç megabayttır.",
        "Ekran görüntüsü aldıktan hemen sonra küçük resmine dokunun, Bitti'ye dokunun ve Ekran Görüntüsünü Sil'i seçin; böylece bir kez kullanır, hiç saklamazsınız.",
        "Apple Intelligence açık bir iOS 26 aygıtında DiskMop her ekran görüntüsündeki metni aygıtta okur ve fiş, bilet gibi saklamak isteyebileceklerinizi önerir.",
        "Aynı ekranın birkaç görüntüsü, fotoğraflarınızdan ayrı olarak benzer ekran görüntüleri diye gruplanır; birini tutup gerisini silebilirsiniz.",
        "Silinen öğeler 30 gün Son Silinenler'de kalır; alan ancak o albümü boşalttıktan sonra geri gelir.",
      ],
      dataTable: {
        caption: "iPhone'da ekran yakalamalarının tipik boyutları",
        columns: ["Öğe", "Tipik boyut", "100 tanesi"],
        rows: [
          ["Ekran görüntüsü", "2–8 MB", "0,2–0,8 GB"],
          ["10 saniyelik ekran kaydı", "15–35 MB", "1,5–3,5 GB"],
          ["30 saniyelik ekran kaydı", "50–100 MB", "5–10 GB"],
          ["1 dakikalık ekran kaydı", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "iPhone'da ekran görüntülerini ve ekran kayıtlarını silme",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ekran Görüntüleri albümünü açın",
            text: "Fotoğraflar'da Albümler'e gidin, Ortam Türleri'ne inin ve Ekran Görüntüleri'ni açın. Seç'e dokunun ve birçoğunu birden seçmek için parmağınızı ızgarada sürükleyin.",
          },
          {
            name: "Hâlâ gerekenleri ayırın",
            text: "Silmeden önce biniş kartlarının, fişlerin, biletlerin ve QR kodların seçimini kaldırın. DiskMop'ta Ekran görüntüleri listesi, Apple Intelligence açık iOS 26'da Bunları saklamak isteyebilirsin grubunu gösterir; böylece bunları fark etmek kolaylaşır.",
          },
          {
            name: "Ekran kayıtlarını temizleyin",
            text: "Ortam Türleri > Ekran Kayıtları'nı açın. Kayıtlar büyüktür; birkaçını silmek bile fark edilir bir alan açar. Birini saklayıp küçültmek istiyorsanız silmek yerine küçültün.",
          },
          {
            name: "Tekrarlanan görüntüleri silin",
            text: "DiskMop'ta aynı ekranın görüntülerinden oluşan grupları görmek için Benzer ekran görüntüleri'ni açın. Her grupta en iyisini tutun, gerisini silin.",
          },
          {
            name: "Son Silinenler'i boşaltın",
            text: "Fotoğraflar > Albümler > Son Silinenler'i açın, alanı hemen açmak için Seç'e ve Tümünü Sil'e dokunun.",
          },
        ],
      },
      sections: [
        {
          title:
            "Ekran Görüntüleri Neden Birikir ve Alan Gerçekte Nereye Gider",
          content: [
            "Bir ekran görüntüsü bir saniye sürer ve genellikle bir dakikalığına gerekir: gönderilecek bir adres, yazılacak bir kod, paylaşılacak komik bir mesaj. Sonra kalır. Birkaç yıl sonra binlerce ekran görüntüsü olağandır ve ekranda küçük göründükleri için kimse saymaz. Tanesi birkaç megabayttan bin ekran görüntüsü yine de birkaç gigabayt eder.",
            "Ekran kayıtları başka bir ölçektir. Bir oyunun, görüntülü bir görüşmenin ya da bir eğitimin kaydı ekran çözünürlüğünde tam bir video olarak kaydedilir ve tek bir dakika genellikle 100 ila 200 MB tutar. Unutulmuş on kayıt telefondaki tüm ekran görüntülerinden kolayca ağır basabilir; iki albüme de bakmanın karşılığını almanızın sebebi budur.",
            "iPhone bir alışkanlıkta yardımcı olur: ekran görüntüsü alır almaz köşede bir küçük resim belirir. Ona dokunun, ihtiyacınız olanı işaretleyin ya da kopyalayın, sonra Bitti'ye dokunup Ekran Görüntüsünü Sil'i seçin. Böyle kullanıldığında, yalnızca bir kez gereken bir ekran görüntüsü kitaplığınıza hiç ulaşmaz.",
          ],
        },
        {
          title: "Fotoğraflar'da Her Ekran Görüntüsünü ve Kaydı Bulma",
          content: [
            "Fotoğraflar uygulaması ekran yakalamalarını kamera fotoğraflarından zaten ayırır. Albümler'i açıp Ortam Türleri'ne inin; Ekran Görüntüleri ve Ekran Kayıtları'nı kendi albümleri olarak bulursunuz. Herhangi birinin içinde Seç'e dokunun ve bir satırı ya da bütün bir bloğu bir kerede seçmek için parmağınızı küçük resimlerin üzerinde sürükleyin, ardından çöp kutusu simgesine dokunun.",
            "Toplu silme hızlıdır, ama yararlı ekran görüntülerinin kaybolma yolu da budur. Biniş kartları, etkinlik biletleri, iade için faturalar, otopark fişleri, QR kodlar ve talimat ekran görüntülerinin hepsi ızgarada sıradan ekran görüntüleri gibi görünür. Bunlar için binlerce minik küçük resmi taramak, insanların yarıda bıraktığı türden yorucu bir iştir.",
            "İki basit kural işi güvenli kılar. En eskiden başlayarak tarihe göre silin; üç yıl önceki bir bilet nadiren önemlidir. Son ayların üzerinden ise daha yavaş geçin ya da onları tek tek gözden geçirin; [iPhone fotoğraflarını kaydırarak temizleme](/blog/swipe-to-delete-photos-iphone) rehberimiz kaydırarak gözden geçirmenin tam da bu tür bir listeyi nasıl ele aldığını gösteriyor.",
          ],
        },
        {
          title: "Ekran Görüntülerini İçeriklerine Göre Ayırma",
          content: [
            "iPhone için DiskMop ekran görüntülerini kendi kategorisi olarak listeler ve bunları yalnızca iOS'un kendisinin ekran görüntüsü olarak işaretlediği fotoğraflardan alır; böylece bir kamera fotoğrafı oraya yanlışlıkla düşmez. Apple Intelligence açık iOS 26'da bir adım daha ileri gider: her ekran görüntüsündeki metni Apple'ın Vision çerçevesiyle okur ve Apple'ın aygıttaki dil modeline onu fiş, bilet, sohbet, not, harita ya da diğer ekran olarak sınıflandırtır. İki adım da telefonda çalışır; hiçbir şey yüklenmez.",
            "Sonuç bir seçim değil, bir öneridir. Fişler ve biletler Bunları saklamak isteyebilirsin altında; sohbetler, haritalar, notlar ve diğer uygulama ekranları Silinebilir görünenler altında görünür. Sizin yerinize hiçbir şey işaretlenmez; her gruba yine siz karar verirsiniz. Aygıttaki modelin olmadığı aygıtlarda ya da iOS sürümlerinde ekran görüntüleri yalnızca birlikte listelenir ve uygulama neden ayrılmadıklarını söyler.",
            "Tekrarlanan görüntülerin kendi kartı vardır. Aynı ekranın birkaç görüntüsünü aldığınızda bunlar Benzer ekran görüntüleri grubu oluşturur ve benzer fotoğraflardan ayrı tutulur; böylece aynı uygulamanın iki farklı ekran görüntüsü bir anının kopyası sanılmaz. En netini tutun, gerisini bırakın.",
          ],
        },
        {
          title: "Ekran Kayıtları: Silin, Küçültün ya da Tutun",
          content: [
            "DiskMop ekran kayıtlarını iOS'un kaydettiği ekran kaydı türünden tanır, yedek denetim olarak iOS'un kayıtlara verdiği dosya adlarını da kullanır ve onları boyutlarıyla birlikte kendi kategorisinde listeler. Önce en büyüğe göre sıralayın; genellikle yüzlerce ekran görüntüsünden daha fazla yer tutan birkaç uzun kayıt bulursunuz.",
            "Her kayıt gitmemeli. Destek için kaydedilmiş bir hata, hazırladığınız bir eğitim ya da bir oyundan bir an saklanmaya değer olabilir, yalnızca tam boyutta değil. DiskMop'un Araçlar bölümünde küçültmek daha küçük bir kopya kaydeder ve özgünü Son Silinenler'e taşır; [iPhone'da video boyutunu küçültme](/blog/reduce-video-size-iphone) rehberimiz bunun artılarını ve eksilerini anlatıyor.",
            "Hangisini seçerseniz seçin, Son Silinenler'de bitirin. Siz onu boşaltana kadar silinen ekran görüntüleri ve kayıtlar depolama alanınızdan sayılmaya devam eder. DiskMop'ta tarama ücretsizdir; abonelik olmadan günde beş fotoğrafa kadar silebilirsiniz, 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro ise sınırı kaldırır ve küçültmeyi açar. 100 ekran görüntüsü silmek ayrıca Ekran Görüntüsü Avcısı kupasını kazandırır.",
          ],
        },
      ],
      faq: [
        {
          question:
            "iPhone'da tüm ekran görüntülerini bir kerede nasıl silerim?",
          answer:
            "Fotoğraflar > Albümler > Ortam Türleri > Ekran Görüntüleri'ni açın, Seç'e dokunun ve onları seçmek için parmağınızı ızgarada sürükleyin, ardından çöp kutusu simgesine dokunun. Önce bilet ve fişlere bakın, sonra Son Silinenler'i boşaltın.",
        },
        {
          question: "Ekran görüntülerini silmek neden yer açmadı?",
          answer:
            "Silinen öğeler 30 gün Son Silinenler'de bekler ve depolama alanından sayılmaya devam eder. Alanı hemen geri almak için o albümü boşaltın.",
        },
        {
          question: "Ekran kayıtları iPhone'da nerede saklanır?",
          answer:
            "Fotoğraflar uygulamasında, Albümler > Ortam Türleri > Ekran Kayıtları altında ve ana kitaplıkta. Bir dakikalık kayıt genellikle 100 ila 200 MB tutar.",
        },
        {
          question:
            "DiskMop'un ekran görüntülerini içeriğe göre ayırması için ne gerekir?",
          answer:
            "iOS 26 ve açık Apple Intelligence, çünkü ayırma Apple'ın aygıttaki dil modelini kullanır. Diğer aygıtlarda ekran görüntüleri birlikte listelenir; benzer ekran görüntüsü grupları ise desteklenen her iPhone'da çalışır.",
        },
        {
          question: "Ekran görüntülerim sınıflandırılmak için yükleniyor mu?",
          answer:
            "Hayır. Metin tanıma ve sınıflandırma Apple'ın çerçeveleriyle iPhone'da çalışır. DiskMop'un sunucusu ve hesabı yoktur ve App Store gizlilik etiketinde Veri Toplanmaz yazar.",
        },
      ],
      verdict: [
        "Apple'ın zaten sunduğu iki albümle başlayın: Ortam Türleri altındaki Ekran Görüntüleri ve Ekran Kayıtları. Eski ekran görüntülerini toplu silin, yenilerin üzerinden daha yavaş geçin ve hızla yere ihtiyacınız varsa önce kayıtlara bakın. Son Silinenler'i boşaltarak bitirin.",
        "iPhone için DiskMop albümlerde olmayanı ekler: Apple Intelligence açık iOS 26'da içeriğine göre ayrılmış ekran görüntüleri, tekrarlanan görüntü grupları ve boyuta göre listelenen ekran kayıtları; hepsi aygıtta ve hiçbir şey önceden seçili değil. Tarama ücretsizdir, günde beş fotoğrafa kadar ücretsiz silinebilir ve 7 günlük ücretsiz denemesi olan DiskMop Pro sınırı kaldırır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Delete Screenshots and Screen Recordings on iPhone (Without Losing the Ones You Need)",
      metaDescription:
        "Screenshots pile up by the thousand and screen recordings weigh hundreds of MB. Find them all, delete in bulk and keep the receipts, tickets and codes you need.",
      subtitle:
        "Two albums Apple already gives you, why a bulk delete is risky, and sorting screenshots by what they show",
      intro: [
        "Short answer: open Photos > Albums, scroll to Media Types and open Screenshots; tap Select, drag across the grid to select many at once and delete them. Do the same in Screen Recordings, which usually frees far more space because a single minute of recording can take 100 to 200 MB. Then empty Recently Deleted, or nothing changes for 30 days.",
        "The catch is that a camera roll's screenshots are not all junk. Among the memes and chat captures sit boarding passes, parking tickets, receipts and QR codes you will need again. This guide explains how to find every screenshot and recording, how to delete them quickly without throwing those away, and how DiskMop for iPhone sorts screenshots by what they contain and spots repeated captures of the same screen.",
      ],
      keyTakeaways: [
        "Photos > Albums > Media Types lists Screenshots and Screen Recordings separately; both can be selected in bulk by dragging across the grid.",
        "Screen recordings are the heavy part: a minute of recording typically takes 100 to 200 MB, while a screenshot is a few megabytes.",
        "Right after taking a screenshot, tap its thumbnail, tap Done and choose Delete Screenshot to use it once and never store it.",
        "On iOS 26 with Apple Intelligence turned on, DiskMop reads the text in each screenshot on the device and suggests which ones you may want to keep, such as receipts and tickets.",
        "Several screenshots of the same screen are grouped as similar screenshots, separately from your photos, so you can keep one and delete the rest.",
        "Deleted items stay in Recently Deleted for 30 days; the space comes back only after you empty that album.",
      ],
      dataTable: {
        caption: "Typical sizes of screen captures on iPhone",
        columns: ["Item", "Typical size", "100 of them"],
        rows: [
          ["Screenshot", "2–8 MB", "0.2–0.8 GB"],
          ["10-second screen recording", "15–35 MB", "1.5–3.5 GB"],
          ["30-second screen recording", "50–100 MB", "5–10 GB"],
          ["1-minute screen recording", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "Delete screenshots and screen recordings on iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open the Screenshots album",
            text: "In Photos, go to Albums, scroll to Media Types and open Screenshots. Tap Select and drag across the grid to select many at once.",
          },
          {
            name: "Keep the ones you still need",
            text: "Before deleting, deselect boarding passes, receipts, tickets and QR codes. In DiskMop, the Screenshots list shows a You may want to keep these group on iOS 26 with Apple Intelligence, so those are easier to spot.",
          },
          {
            name: "Clear screen recordings",
            text: "Open Media Types > Screen Recordings. Recordings are large, so deleting even a few frees noticeable space. To keep one but make it smaller, shrink it instead.",
          },
          {
            name: "Delete repeated captures",
            text: "In DiskMop, open Similar screenshots to see groups of captures of the same screen. Keep the best one in each group and delete the rest.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Open Photos > Albums > Recently Deleted, tap Select and Delete All to free the space now.",
          },
        ],
      },
      sections: [
        {
          title: "Why Screenshots Pile Up, and Where the Space Really Goes",
          content: [
            "A screenshot takes a second and is usually needed for a minute: an address to send, a code to type, a funny message to share. Then it stays. After a few years, thousands of screenshots are normal, and because they look small on the screen, nobody counts them. At a few megabytes each, a thousand screenshots is still several gigabytes.",
            "Screen recordings are a different scale. A recording of a game, a video call or a tutorial is saved as a full video at the screen's resolution, and a single minute typically takes 100 to 200 MB. Ten forgotten recordings can easily outweigh every screenshot on the phone, which is why it pays to look at both albums.",
            "The iPhone helps with one habit: right after you take a screenshot, a thumbnail appears in the corner. Tap it, mark up or copy what you need, then tap Done and choose Delete Screenshot. Used this way, a screenshot you only need once never reaches your library at all.",
          ],
        },
        {
          title: "Finding Every Screenshot and Recording in Photos",
          content: [
            "The Photos app already separates screen captures from camera photos. Open Albums, scroll to Media Types, and you will find Screenshots and Screen Recordings as their own albums. Inside either one, tap Select and drag your finger across the thumbnails to select a row or a whole block at once, then tap the trash icon.",
            "A bulk delete is fast, but it is also how useful screenshots get lost. Boarding passes, event tickets, receipts for returns, parking tickets, QR codes and screenshots of instructions all look like ordinary screenshots in the grid. Scanning thousands of tiny thumbnails for those is exactly the kind of tiring work that makes people stop halfway.",
            "Two simple rules make it safer. Delete by date, starting with the oldest screenshots, since a ticket from three years ago rarely matters. And go through the most recent months more slowly, or review them one at a time; [cleaning up iPhone photos by swiping](/blog/swipe-to-delete-photos-iphone) shows how a swipe review handles exactly this kind of list.",
          ],
        },
        {
          title: "Sorting Screenshots by What They Show",
          content: [
            "DiskMop for iPhone lists screenshots as their own category, taken only from photos that iOS itself marks as screenshots, so a camera photo never ends up there by mistake. On iOS 26 with Apple Intelligence turned on, it goes a step further: it reads the text in each screenshot with Apple's Vision framework and has Apple's on-device language model classify it as a receipt, ticket, chat, note, map or other screen. Both steps run on the phone; nothing is uploaded.",
            "The result is a suggestion, not a selection. Receipts and tickets appear under You may want to keep these; chats, maps, notes and other app screens appear under Probably safe to let go. Nothing is ticked for you, so you still decide on every group. On devices or iOS versions without the on-device model, the screenshots are simply listed together and the app says why they were not sorted.",
            "Repeated captures get their own card. When you take several screenshots of the same screen, they form a Similar screenshots group, kept apart from the similar photos so that two different screenshots of the same app are not mistaken for duplicates of a memory. Keep the clearest one and let the rest go.",
          ],
        },
        {
          title: "Screen Recordings: Delete, Shrink or Keep",
          content: [
            "DiskMop recognises screen recordings through the screen-recording type that iOS records, with the file names iOS uses for recordings as a backup check, and lists them in their own category with their sizes. Sort by largest first and you will usually find a few long recordings that are worth more space than hundreds of screenshots.",
            "Not every recording should go. A recording of a bug for support, a tutorial you made or a moment from a game can be worth keeping, just not at full size. Shrinking it in DiskMop's Tools saves a smaller copy and moves the original to Recently Deleted; our guide on [reducing video size on iPhone](/blog/reduce-video-size-iphone) explains the trade-offs.",
            "Whichever you choose, finish in Recently Deleted. Until you empty it, deleted screenshots and recordings still count against your storage. Scanning is free in DiskMop; without a subscription you can delete up to five photos a day, and DiskMop Pro, a monthly subscription with a 7-day free trial, removes the limit and unlocks shrinking. Deleting 100 screenshots also earns the Screenshot Hunter trophy.",
          ],
        },
      ],
      faq: [
        {
          question: "How do I delete all screenshots on iPhone at once?",
          answer:
            "Open Photos > Albums > Media Types > Screenshots, tap Select and drag across the grid to select them, then tap the trash icon. Check for tickets and receipts first, and empty Recently Deleted afterwards.",
        },
        {
          question: "Why didn't deleting screenshots free up space?",
          answer:
            "Deleted items wait 30 days in Recently Deleted and still count against storage. Empty that album to get the space back now.",
        },
        {
          question: "Where are screen recordings stored on iPhone?",
          answer:
            "In the Photos app, under Albums > Media Types > Screen Recordings, as well as in the main library. A minute of recording typically takes 100 to 200 MB.",
        },
        {
          question: "What does DiskMop need to sort screenshots by content?",
          answer:
            "iOS 26 and Apple Intelligence turned on, because the sorting uses Apple's on-device language model. On other devices the screenshots are listed together, and the similar-screenshot groups work on every supported iPhone.",
        },
        {
          question: "Are my screenshots uploaded to be classified?",
          answer:
            "No. Text recognition and classification run on the iPhone with Apple's frameworks. DiskMop has no server and no account, and its App Store privacy label states Data Not Collected.",
        },
      ],
      verdict: [
        "Start with the two albums Apple already provides: Screenshots and Screen Recordings under Media Types. Delete old screenshots in bulk, go slower through recent ones, and look at recordings first if you need space quickly. Finish by emptying Recently Deleted.",
        "DiskMop for iPhone adds what the albums lack: screenshots sorted by what they show on iOS 26 with Apple Intelligence, groups of repeated captures, and screen recordings listed by size, all on the device and with nothing preselected. Scanning is free, up to five photos a day can be deleted for free, and DiskMop Pro, with a 7-day free trial, removes the limit.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Bildschirmfotos und Bildschirmaufnahmen auf dem iPhone löschen (ohne Wichtiges zu verlieren)",
      metaDescription:
        "Screenshots sammeln sich zu Tausenden, Bildschirmaufnahmen wiegen Hunderte MB. So finden Sie alle, löschen in Mengen und behalten Belege, Tickets und Codes.",
      subtitle:
        "Zwei Alben, die Apple schon mitliefert, warum Massenlöschen riskant ist und wie man Screenshots nach Inhalt sortiert",
      intro: [
        "Kurze Antwort: Öffnen Sie Fotos > Alben, scrollen Sie zu Medienarten und öffnen Sie Bildschirmfotos; tippen Sie auf Auswählen, ziehen Sie über das Raster, um viele auf einmal zu markieren, und löschen Sie sie. Machen Sie dasselbe in Bildschirmaufnahmen, was meist weit mehr Platz bringt, denn schon eine Minute Aufnahme kann 100 bis 200 MB belegen. Leeren Sie danach „Zuletzt gelöscht“, sonst ändert sich 30 Tage lang nichts.",
        "Der Haken: Nicht jedes Bildschirmfoto in der Mediathek ist Müll. Zwischen Memes und Chat-Ausschnitten liegen Bordkarten, Parktickets, Belege und QR-Codes, die Sie wieder brauchen. Dieser Ratgeber erklärt, wie Sie jedes Bildschirmfoto und jede Aufnahme finden, wie Sie schnell löschen, ohne diese wegzuwerfen, und wie DiskMop für iPhone Screenshots nach Inhalt sortiert und wiederholte Aufnahmen desselben Bildschirms erkennt.",
      ],
      keyTakeaways: [
        "Fotos > Alben > Medienarten listet Bildschirmfotos und Bildschirmaufnahmen getrennt auf; beide lassen sich durch Ziehen über das Raster in großen Mengen auswählen.",
        "Bildschirmaufnahmen sind der schwere Teil: Eine Minute Aufnahme belegt typischerweise 100 bis 200 MB, ein Bildschirmfoto nur wenige Megabyte.",
        "Tippen Sie direkt nach einem Bildschirmfoto auf die Miniatur, dann auf Fertig und wählen Sie „Bildschirmfoto löschen“, um es einmal zu nutzen und nie zu speichern.",
        "Unter iOS 26 mit aktivierter Apple Intelligence liest DiskMop den Text jedes Screenshots auf dem Gerät und schlägt vor, welche Sie vielleicht behalten möchten, etwa Belege und Tickets.",
        "Mehrere Screenshots desselben Bildschirms werden als ähnliche Screenshots gruppiert, getrennt von Ihren Fotos, sodass Sie einen behalten und den Rest löschen können.",
        "Gelöschte Objekte bleiben 30 Tage in „Zuletzt gelöscht“; der Platz kommt erst zurück, wenn Sie dieses Album leeren.",
      ],
      dataTable: {
        caption: "Typische Größen von Bildschirmaufnahmen auf dem iPhone",
        columns: ["Objekt", "Typische Größe", "100 davon"],
        rows: [
          ["Bildschirmfoto", "2–8 MB", "0,2–0,8 GB"],
          ["10-Sekunden-Bildschirmaufnahme", "15–35 MB", "1,5–3,5 GB"],
          ["30-Sekunden-Bildschirmaufnahme", "50–100 MB", "5–10 GB"],
          ["1-Minuten-Bildschirmaufnahme", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "Bildschirmfotos und Bildschirmaufnahmen auf dem iPhone löschen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Das Album Bildschirmfotos öffnen",
            text: "Gehen Sie in Fotos zu Alben, scrollen Sie zu Medienarten und öffnen Sie Bildschirmfotos. Tippen Sie auf Auswählen und ziehen Sie über das Raster, um viele auf einmal zu markieren.",
          },
          {
            name: "Behalten, was Sie noch brauchen",
            text: "Heben Sie vor dem Löschen die Auswahl von Bordkarten, Belegen, Tickets und QR-Codes auf. In DiskMop zeigt die Liste Screenshots unter iOS 26 mit Apple Intelligence die Gruppe „Diese möchtest du vielleicht behalten“, was das Erkennen erleichtert.",
          },
          {
            name: "Bildschirmaufnahmen aufräumen",
            text: "Öffnen Sie Medienarten > Bildschirmaufnahmen. Aufnahmen sind groß, schon wenige zu löschen bringt spürbar Platz. Wollen Sie eine behalten, aber kleiner machen, verkleinern Sie sie stattdessen.",
          },
          {
            name: "Wiederholte Aufnahmen löschen",
            text: "Öffnen Sie in DiskMop „Ähnliche Screenshots“, um Gruppen von Aufnahmen desselben Bildschirms zu sehen. Behalten Sie jeweils die beste und löschen Sie den Rest.",
          },
          {
            name: "„Zuletzt gelöscht“ leeren",
            text: "Öffnen Sie Fotos > Alben > Zuletzt gelöscht, tippen Sie auf Auswählen und Alle löschen, um den Platz sofort freizugeben.",
          },
        ],
      },
      sections: [
        {
          title:
            "Warum sich Bildschirmfotos stapeln und wohin der Platz wirklich geht",
          content: [
            "Ein Bildschirmfoto dauert eine Sekunde und wird meist eine Minute gebraucht: eine Adresse zum Weiterschicken, ein Code zum Abtippen, eine lustige Nachricht zum Teilen. Dann bleibt es. Nach ein paar Jahren sind Tausende normal, und weil sie auf dem Display klein wirken, zählt sie niemand. Bei wenigen Megabyte pro Stück sind tausend Bildschirmfotos trotzdem mehrere Gigabyte.",
            "Bildschirmaufnahmen spielen in einer anderen Liga. Die Aufnahme eines Spiels, eines Videoanrufs oder einer Anleitung wird als vollständiges Video in Displayauflösung gespeichert, und schon eine Minute belegt typischerweise 100 bis 200 MB. Zehn vergessene Aufnahmen wiegen leicht mehr als alle Bildschirmfotos zusammen; deshalb lohnt der Blick in beide Alben.",
            "Das iPhone hilft bei einer Gewohnheit: Direkt nach einem Bildschirmfoto erscheint in der Ecke eine Miniatur. Tippen Sie darauf, markieren oder kopieren Sie, was Sie brauchen, tippen Sie dann auf Fertig und wählen Sie „Bildschirmfoto löschen“. So erreicht ein Bildschirmfoto, das Sie nur einmal brauchen, Ihre Mediathek gar nicht erst.",
          ],
        },
        {
          title: "Jedes Bildschirmfoto und jede Aufnahme in Fotos finden",
          content: [
            "Die Fotos-App trennt Bildschirmaufnahmen bereits von Kamerafotos. Öffnen Sie Alben, scrollen Sie zu Medienarten, und Sie finden Bildschirmfotos und Bildschirmaufnahmen als eigene Alben. Tippen Sie in einem davon auf Auswählen und ziehen Sie den Finger über die Miniaturen, um eine Reihe oder einen ganzen Block auf einmal zu markieren, dann tippen Sie auf den Papierkorb.",
            "Massenlöschen geht schnell, aber genau so gehen nützliche Screenshots verloren. Bordkarten, Eintrittskarten, Belege für Rücksendungen, Parktickets, QR-Codes und Screenshots von Anleitungen sehen im Raster aus wie gewöhnliche Bildschirmfotos. Tausende winziger Miniaturen danach abzusuchen ist genau die ermüdende Arbeit, bei der man auf halber Strecke aufgibt.",
            "Zwei einfache Regeln machen es sicherer. Löschen Sie nach Datum, beginnend mit den ältesten, denn ein Ticket von vor drei Jahren zählt selten. Und gehen Sie die letzten Monate langsamer durch oder prüfen Sie sie einzeln; [iPhone-Fotos per Wischen aufräumen](/blog/swipe-to-delete-photos-iphone) zeigt, wie eine Wisch-Prüfung genau so eine Liste bewältigt.",
          ],
        },
        {
          title: "Screenshots nach Inhalt sortieren",
          content: [
            "DiskMop für iPhone führt Screenshots als eigene Kategorie und nimmt dafür nur Fotos, die iOS selbst als Bildschirmfoto kennzeichnet, sodass kein Kamerafoto versehentlich dort landet. Unter iOS 26 mit aktivierter Apple Intelligence geht es einen Schritt weiter: Es liest den Text jedes Screenshots mit Apples Vision-Framework und lässt Apples geräteinternes Sprachmodell ihn als Beleg, Ticket, Chat, Notiz, Karte oder sonstigen Bildschirm einordnen. Beide Schritte laufen auf dem Telefon; nichts wird hochgeladen.",
            "Das Ergebnis ist ein Vorschlag, keine Auswahl. Belege und Tickets erscheinen unter „Diese möchtest du vielleicht behalten“, Chats, Karten, Notizen und andere App-Bildschirme unter „Vermutlich entbehrlich“. Nichts wird für Sie abgehakt; Sie entscheiden weiterhin über jede Gruppe. Auf Geräten oder iOS-Versionen ohne das geräteinterne Modell werden die Screenshots einfach gemeinsam aufgelistet, und die App sagt, warum sie nicht sortiert wurden.",
            "Wiederholte Aufnahmen bekommen eine eigene Karte. Machen Sie mehrere Screenshots desselben Bildschirms, bilden sie eine Gruppe „Ähnliche Screenshots“, getrennt von ähnlichen Fotos, damit zwei verschiedene Screenshots derselben App nicht für Duplikate einer Erinnerung gehalten werden. Behalten Sie den klarsten und lassen Sie den Rest gehen.",
          ],
        },
        {
          title: "Bildschirmaufnahmen: löschen, verkleinern oder behalten",
          content: [
            "DiskMop erkennt Bildschirmaufnahmen am Aufnahmetyp, den iOS dafür vermerkt, nutzt die Dateinamen, die iOS für Aufnahmen vergibt, als zusätzliche Prüfung und listet sie in einer eigenen Kategorie mit ihrer Größe auf. Sortieren Sie nach Größte, und Sie finden meist ein paar lange Aufnahmen, die mehr Platz belegen als Hunderte Screenshots.",
            "Nicht jede Aufnahme muss weg. Ein aufgezeichneter Fehler für den Support, eine selbst erstellte Anleitung oder ein Moment aus einem Spiel kann es wert sein, behalten zu werden, nur nicht in voller Größe. Das Verkleinern in den Werkzeugen von DiskMop speichert eine kleinere Kopie und verschiebt das Original nach „Zuletzt gelöscht“; unser Ratgeber zum [Verkleinern von Videos auf dem iPhone](/blog/reduce-video-size-iphone) erklärt die Abwägungen.",
            "Wofür Sie sich auch entscheiden: Enden Sie in „Zuletzt gelöscht“. Bis Sie es leeren, zählen gelöschte Screenshots und Aufnahmen weiter zu Ihrem Speicher. Der Scan ist in DiskMop kostenlos; ohne Abo können Sie bis zu fünf Fotos pro Tag löschen, und DiskMop Pro, ein Monatsabo mit 7-tägiger Gratis-Testphase, hebt das Limit auf und schaltet das Verkleinern frei. 100 gelöschte Screenshots bringen außerdem die Trophäe Screenshot-Jäger.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Wie lösche ich alle Bildschirmfotos auf dem iPhone auf einmal?",
          answer:
            "Öffnen Sie Fotos > Alben > Medienarten > Bildschirmfotos, tippen Sie auf Auswählen, ziehen Sie über das Raster, um sie zu markieren, und tippen Sie auf den Papierkorb. Prüfen Sie vorher Tickets und Belege und leeren Sie anschließend „Zuletzt gelöscht“.",
        },
        {
          question:
            "Warum hat das Löschen von Bildschirmfotos keinen Platz freigegeben?",
          answer:
            "Gelöschte Objekte warten 30 Tage in „Zuletzt gelöscht“ und zählen weiter zum Speicher. Leeren Sie dieses Album, um den Platz sofort zurückzubekommen.",
        },
        {
          question: "Wo werden Bildschirmaufnahmen auf dem iPhone gespeichert?",
          answer:
            "In der Fotos-App unter Alben > Medienarten > Bildschirmaufnahmen sowie in der Hauptmediathek. Eine Minute Aufnahme belegt typischerweise 100 bis 200 MB.",
        },
        {
          question:
            "Was braucht DiskMop, um Screenshots nach Inhalt zu sortieren?",
          answer:
            "iOS 26 und aktivierte Apple Intelligence, denn die Sortierung nutzt Apples geräteinternes Sprachmodell. Auf anderen Geräten werden die Screenshots gemeinsam aufgelistet; die Gruppen ähnlicher Screenshots funktionieren auf jedem unterstützten iPhone.",
        },
        {
          question: "Werden meine Screenshots zur Einordnung hochgeladen?",
          answer:
            "Nein. Texterkennung und Einordnung laufen auf dem iPhone mit Apples Frameworks. DiskMop hat weder Server noch Benutzerkonto, und sein Datenschutzetikett im App Store lautet „Keine Daten erfasst“.",
        },
      ],
      verdict: [
        "Beginnen Sie mit den beiden Alben, die Apple schon mitliefert: Bildschirmfotos und Bildschirmaufnahmen unter Medienarten. Löschen Sie alte Screenshots in großen Mengen, gehen Sie neue langsamer durch und schauen Sie zuerst auf Aufnahmen, wenn Sie schnell Platz brauchen. Leeren Sie zum Schluss „Zuletzt gelöscht“.",
        "DiskMop für iPhone ergänzt, was den Alben fehlt: Screenshots nach Inhalt sortiert unter iOS 26 mit Apple Intelligence, Gruppen wiederholter Aufnahmen und Bildschirmaufnahmen nach Größe, alles auf dem Gerät und ohne Vorauswahl. Der Scan ist kostenlos, bis zu fünf Fotos pro Tag lassen sich gratis löschen, und DiskMop Pro mit 7-tägiger Gratis-Testphase hebt das Limit auf.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Supprimer les captures et enregistrements d'écran sur iPhone (sans perdre ceux qui comptent)",
      metaDescription:
        "Les captures s'accumulent par milliers et les enregistrements pèsent des centaines de Mo. Les trouver, les supprimer en masse et garder reçus, billets et codes.",
      subtitle:
        "Deux albums qu'Apple fournit déjà, pourquoi la suppression en masse est risquée et le tri des captures selon leur contenu",
      intro: [
        "Réponse courte : ouvrez Photos > Albums, faites défiler jusqu'à Types de médias et ouvrez Captures d'écran ; touchez Sélectionner, faites glisser le doigt sur la grille pour en sélectionner beaucoup d'un coup et supprimez-les. Faites de même dans Enregistrements d'écran, ce qui libère souvent bien plus d'espace, car une seule minute d'enregistrement peut peser de 100 à 200 Mo. Videz ensuite Supprimés récemment, sinon rien ne change pendant 30 jours.",
        "Le problème, c'est que toutes les captures d'une pellicule ne sont pas bonnes à jeter. Entre les mèmes et les captures de discussions se trouvent des cartes d'embarquement, des tickets de parking, des reçus et des QR codes dont vous aurez encore besoin. Ce guide explique comment trouver chaque capture et chaque enregistrement, comment les supprimer vite sans jeter ceux-là, et comment DiskMop pour iPhone trie les captures selon leur contenu et repère les captures répétées d'un même écran.",
      ],
      keyTakeaways: [
        "Photos > Albums > Types de médias liste séparément les Captures d'écran et les Enregistrements d'écran ; les deux se sélectionnent en masse en faisant glisser le doigt sur la grille.",
        "Les enregistrements d'écran sont la partie lourde : une minute d'enregistrement pèse généralement de 100 à 200 Mo, une capture quelques mégaoctets.",
        "Juste après une capture, touchez sa vignette, touchez OK et choisissez Supprimer la capture d'écran pour l'utiliser une fois sans jamais la stocker.",
        "Sous iOS 26 avec Apple Intelligence activé, DiskMop lit sur l'appareil le texte de chaque capture et suggère celles que vous voudrez peut-être garder, comme les reçus et les billets.",
        "Plusieurs captures d'un même écran sont regroupées en captures similaires, à part de vos photos, pour en garder une et supprimer les autres.",
        "Les éléments supprimés restent 30 jours dans Supprimés récemment ; l'espace ne revient qu'une fois cet album vidé.",
      ],
      dataTable: {
        caption: "Tailles typiques des captures d'écran sur iPhone",
        columns: ["Élément", "Taille typique", "Pour 100"],
        rows: [
          ["Capture d'écran", "2–8 Mo", "0,2–0,8 Go"],
          ["Enregistrement d'écran de 10 secondes", "15–35 Mo", "1,5–3,5 Go"],
          ["Enregistrement d'écran de 30 secondes", "50–100 Mo", "5–10 Go"],
          ["Enregistrement d'écran d'une minute", "100–200 Mo", "10–20 Go"],
        ],
      },
      howTo: {
        name: "Supprimer les captures et enregistrements d'écran sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir l'album Captures d'écran",
            text: "Dans Photos, allez dans Albums, faites défiler jusqu'à Types de médias et ouvrez Captures d'écran. Touchez Sélectionner et faites glisser le doigt sur la grille pour en sélectionner beaucoup d'un coup.",
          },
          {
            name: "Garder celles dont vous avez encore besoin",
            text: "Avant de supprimer, désélectionnez les cartes d'embarquement, reçus, billets et QR codes. Dans DiskMop, la liste Captures d'écran affiche sous iOS 26 avec Apple Intelligence un groupe « Vous voudrez peut-être les garder », qui les rend plus faciles à repérer.",
          },
          {
            name: "Nettoyer les enregistrements d'écran",
            text: "Ouvrez Types de médias > Enregistrements d'écran. Les enregistrements sont lourds : en supprimer quelques-uns libère déjà un espace notable. Pour en garder un tout en l'allégeant, réduisez-le plutôt.",
          },
          {
            name: "Supprimer les captures répétées",
            text: "Dans DiskMop, ouvrez Captures d'écran similaires pour voir les groupes de captures d'un même écran. Gardez la meilleure de chaque groupe et supprimez les autres.",
          },
          {
            name: "Vider Supprimés récemment",
            text: "Ouvrez Photos > Albums > Supprimés récemment, touchez Sélectionner puis Tout supprimer pour libérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title:
            "Pourquoi les captures s'accumulent, et où part vraiment l'espace",
          content: [
            "Une capture prend une seconde et sert généralement une minute : une adresse à envoyer, un code à recopier, un message drôle à partager. Puis elle reste. Après quelques années, des milliers de captures sont la norme, et comme elles semblent petites à l'écran, personne ne les compte. À quelques mégaoctets pièce, mille captures représentent tout de même plusieurs gigaoctets.",
            "Les enregistrements d'écran jouent dans une autre catégorie. L'enregistrement d'un jeu, d'un appel vidéo ou d'un tutoriel est stocké comme une vidéo complète à la résolution de l'écran, et une seule minute pèse généralement de 100 à 200 Mo. Dix enregistrements oubliés peuvent facilement peser plus que toutes les captures du téléphone ; c'est pourquoi il vaut la peine de regarder les deux albums.",
            "L'iPhone aide pour une habitude : juste après une capture, une vignette apparaît dans le coin. Touchez-la, annotez ou copiez ce dont vous avez besoin, puis touchez OK et choisissez Supprimer la capture d'écran. Utilisée ainsi, une capture qui ne sert qu'une fois n'atteint jamais votre photothèque.",
          ],
        },
        {
          title: "Trouver chaque capture et chaque enregistrement dans Photos",
          content: [
            "L'app Photos sépare déjà les captures d'écran des photos prises avec l'appareil photo. Ouvrez Albums, faites défiler jusqu'à Types de médias : Captures d'écran et Enregistrements d'écran y figurent comme albums à part. Dans l'un ou l'autre, touchez Sélectionner et faites glisser le doigt sur les vignettes pour sélectionner une rangée ou un bloc entier d'un coup, puis touchez l'icône de la corbeille.",
            "La suppression en masse est rapide, mais c'est aussi ainsi que l'on perd des captures utiles. Cartes d'embarquement, billets de spectacle, reçus pour un retour, tickets de parking, QR codes et captures de modes d'emploi ressemblent tous à des captures ordinaires dans la grille. Les chercher parmi des milliers de minuscules vignettes est exactement le genre de travail fatigant qu'on abandonne à mi-chemin.",
            "Deux règles simples rendent l'opération plus sûre. Supprimez par date, en commençant par les plus anciennes, car un billet d'il y a trois ans compte rarement. Et parcourez plus lentement les derniers mois, ou passez-les en revue une par une ; [trier ses photos iPhone en balayant](/blog/swipe-to-delete-photos-iphone) montre comment un tri par balayage traite exactement ce genre de liste.",
          ],
        },
        {
          title: "Trier les captures selon ce qu'elles montrent",
          content: [
            "DiskMop pour iPhone présente les captures d'écran comme une catégorie à part, constituée uniquement des photos qu'iOS marque lui-même comme captures, si bien qu'aucune photo prise avec l'appareil photo n'y atterrit par erreur. Sous iOS 26 avec Apple Intelligence activé, il va plus loin : il lit le texte de chaque capture avec le framework Vision d'Apple et fait classer la capture par le modèle de langage d'Apple intégré à l'appareil comme reçu, billet, discussion, note, carte ou autre écran. Les deux étapes se déroulent sur le téléphone ; rien n'est envoyé.",
            "Le résultat est une suggestion, pas une sélection. Les reçus et les billets apparaissent sous « Vous voudrez peut-être les garder » ; les discussions, cartes, notes et autres écrans d'apps sous « Probablement inutiles ». Rien n'est coché à votre place, vous décidez toujours de chaque groupe. Sur les appareils ou versions d'iOS sans ce modèle, les captures sont simplement listées ensemble et l'app explique pourquoi elles n'ont pas été triées.",
            "Les captures répétées ont leur propre carte. Quand vous prenez plusieurs captures du même écran, elles forment un groupe Captures d'écran similaires, séparé des photos similaires pour que deux captures différentes d'une même app ne soient pas prises pour des doublons d'un souvenir. Gardez la plus nette et laissez partir les autres.",
          ],
        },
        {
          title: "Enregistrements d'écran : supprimer, réduire ou garder",
          content: [
            "DiskMop reconnaît les enregistrements d'écran grâce au type « enregistrement d'écran » qu'iOS leur attribue, avec en vérification de secours les noms de fichiers qu'iOS utilise pour les enregistrements, et les liste dans leur propre catégorie avec leur taille. Triez par Plus lourdes et vous trouverez souvent quelques longs enregistrements qui pèsent plus que des centaines de captures.",
            "Tous les enregistrements ne doivent pas partir. L'enregistrement d'un bug pour le support, un tutoriel que vous avez réalisé ou un moment de jeu peuvent valoir la peine d'être gardés, simplement pas en taille réelle. Les réduire dans les Outils de DiskMop enregistre une copie plus légère et place l'original dans Supprimés récemment ; notre guide pour [réduire la taille d'une vidéo sur iPhone](/blog/reduce-video-size-iphone) détaille les compromis.",
            "Quel que soit votre choix, terminez par Supprimés récemment. Tant que vous ne le videz pas, les captures et enregistrements supprimés comptent toujours dans votre stockage. L'analyse est gratuite dans DiskMop ; sans abonnement, vous pouvez supprimer jusqu'à cinq photos par jour, et DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours, supprime la limite et débloque la réduction. Supprimer 100 captures rapporte aussi le trophée Chasseur de captures.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Comment supprimer toutes les captures d'écran d'un coup sur iPhone ?",
          answer:
            "Ouvrez Photos > Albums > Types de médias > Captures d'écran, touchez Sélectionner, faites glisser le doigt sur la grille pour les sélectionner, puis touchez l'icône de la corbeille. Vérifiez d'abord billets et reçus, et videz ensuite Supprimés récemment.",
        },
        {
          question:
            "Pourquoi supprimer des captures n'a-t-il pas libéré d'espace ?",
          answer:
            "Les éléments supprimés attendent 30 jours dans Supprimés récemment et comptent toujours dans le stockage. Videz cet album pour récupérer l'espace tout de suite.",
        },
        {
          question: "Où sont stockés les enregistrements d'écran sur iPhone ?",
          answer:
            "Dans l'app Photos, sous Albums > Types de médias > Enregistrements d'écran, ainsi que dans la photothèque principale. Une minute d'enregistrement pèse généralement de 100 à 200 Mo.",
        },
        {
          question:
            "De quoi DiskMop a-t-il besoin pour trier les captures par contenu ?",
          answer:
            "D'iOS 26 et d'Apple Intelligence activé, car le tri utilise le modèle de langage d'Apple intégré à l'appareil. Sur les autres appareils, les captures sont listées ensemble ; les groupes de captures similaires fonctionnent sur tous les iPhone pris en charge.",
        },
        {
          question: "Mes captures sont-elles envoyées pour être classées ?",
          answer:
            "Non. La reconnaissance du texte et le classement se font sur l'iPhone avec les frameworks d'Apple. DiskMop n'a ni serveur ni compte, et son étiquette de confidentialité sur l'App Store indique Données non collectées.",
        },
      ],
      verdict: [
        "Commencez par les deux albums qu'Apple fournit déjà : Captures d'écran et Enregistrements d'écran sous Types de médias. Supprimez en masse les anciennes captures, parcourez plus lentement les récentes et regardez d'abord les enregistrements si vous avez besoin d'espace rapidement. Terminez en vidant Supprimés récemment.",
        "DiskMop pour iPhone ajoute ce qui manque aux albums : des captures triées selon leur contenu sous iOS 26 avec Apple Intelligence, des groupes de captures répétées et des enregistrements d'écran listés par taille, le tout sur l'appareil et sans rien présélectionner. L'analyse est gratuite, jusqu'à cinq photos par jour peuvent être supprimées gratuitement, et DiskMop Pro, avec un essai gratuit de 7 jours, supprime la limite.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo borrar capturas y grabaciones de pantalla en iPhone (sin perder las que necesitas)",
      metaDescription:
        "Las capturas se acumulan por miles y las grabaciones de pantalla pesan cientos de MB. Cómo encontrarlas, borrarlas en bloque y conservar recibos, billetes y códigos.",
      subtitle:
        "Dos álbumes que Apple ya te da, por qué borrar en bloque es arriesgado y cómo ordenar las capturas por lo que muestran",
      intro: [
        "Respuesta corta: abre Fotos > Álbumes, desplázate hasta Tipos de contenido y abre Capturas de pantalla; toca Seleccionar, arrastra el dedo por la cuadrícula para elegir muchas a la vez y bórralas. Haz lo mismo en Grabaciones de pantalla, que suele liberar mucho más espacio, porque un solo minuto de grabación puede ocupar entre 100 y 200 MB. Luego vacía Eliminados recientemente o no cambiará nada durante 30 días.",
        "El problema es que no todas las capturas del carrete son basura. Entre memes y capturas de chats hay tarjetas de embarque, tiques de aparcamiento, recibos y códigos QR que volverás a necesitar. Esta guía explica cómo encontrar cada captura y cada grabación, cómo borrarlas rápido sin tirar esas, y cómo DiskMop para iPhone ordena las capturas por su contenido y detecta capturas repetidas de la misma pantalla.",
      ],
      keyTakeaways: [
        "Fotos > Álbumes > Tipos de contenido muestra por separado Capturas de pantalla y Grabaciones de pantalla; en ambos puedes seleccionar en bloque arrastrando el dedo por la cuadrícula.",
        "Las grabaciones de pantalla son la parte pesada: un minuto de grabación suele ocupar entre 100 y 200 MB, mientras que una captura ocupa unos pocos megas.",
        "Justo después de hacer una captura, toca la miniatura, toca OK y elige Eliminar captura de pantalla para usarla una vez y no guardarla nunca.",
        "En iOS 26 con Apple Intelligence activado, DiskMop lee en el dispositivo el texto de cada captura y sugiere cuáles quizá quieras conservar, como recibos y billetes.",
        "Varias capturas de la misma pantalla se agrupan como capturas similares, aparte de tus fotos, para que conserves una y borres las demás.",
        "Lo borrado se queda 30 días en Eliminados recientemente; el espacio solo vuelve cuando vacías ese álbum.",
      ],
      dataTable: {
        caption: "Tamaños habituales de las capturas de pantalla en iPhone",
        columns: ["Elemento", "Tamaño habitual", "100 de ellos"],
        rows: [
          ["Captura de pantalla", "2–8 MB", "0,2–0,8 GB"],
          ["Grabación de pantalla de 10 segundos", "15–35 MB", "1,5–3,5 GB"],
          ["Grabación de pantalla de 30 segundos", "50–100 MB", "5–10 GB"],
          ["Grabación de pantalla de 1 minuto", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "Borrar capturas y grabaciones de pantalla en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abre el álbum Capturas de pantalla",
            text: "En Fotos, ve a Álbumes, desplázate hasta Tipos de contenido y abre Capturas de pantalla. Toca Seleccionar y arrastra el dedo por la cuadrícula para elegir muchas a la vez.",
          },
          {
            name: "Conserva las que aún necesitas",
            text: "Antes de borrar, desmarca tarjetas de embarque, recibos, billetes y códigos QR. En DiskMop, la lista Capturas de pantalla muestra en iOS 26 con Apple Intelligence el grupo Quizá quieras conservar estas, que facilita encontrarlas.",
          },
          {
            name: "Limpia las grabaciones de pantalla",
            text: "Abre Tipos de contenido > Grabaciones de pantalla. Las grabaciones son grandes, así que borrar unas pocas ya libera bastante espacio. Si quieres conservar una pero que ocupe menos, redúcela en lugar de borrarla.",
          },
          {
            name: "Borra las capturas repetidas",
            text: "En DiskMop, abre Capturas de pantalla similares para ver grupos de capturas de la misma pantalla. Conserva la mejor de cada grupo y borra el resto.",
          },
          {
            name: "Vacía Eliminados recientemente",
            text: "Abre Fotos > Álbumes > Eliminados recientemente, toca Seleccionar y Eliminar todo para liberar el espacio ahora.",
          },
        ],
      },
      sections: [
        {
          title:
            "Por qué se acumulan las capturas y adónde va de verdad el espacio",
          content: [
            "Una captura tarda un segundo y suele hacer falta un minuto: una dirección para enviar, un código para teclear, un mensaje gracioso para compartir. Después se queda. Al cabo de unos años, tener miles es lo normal y, como parecen pequeñas en la pantalla, nadie las cuenta. A unos pocos megas cada una, mil capturas siguen siendo varios gigas.",
            "Las grabaciones de pantalla juegan en otra liga. La grabación de un juego, una videollamada o un tutorial se guarda como un vídeo completo a la resolución de la pantalla, y un solo minuto suele ocupar entre 100 y 200 MB. Diez grabaciones olvidadas pueden pesar fácilmente más que todas las capturas del teléfono; por eso merece la pena mirar los dos álbumes.",
            "El iPhone ayuda con un hábito: justo después de hacer una captura aparece una miniatura en la esquina. Tócala, marca o copia lo que necesites y luego toca OK y elige Eliminar captura de pantalla. Usada así, una captura que solo necesitas una vez nunca llega a tu fototeca.",
          ],
        },
        {
          title: "Encontrar todas las capturas y grabaciones en Fotos",
          content: [
            "La app Fotos ya separa las capturas de las fotos de la cámara. Abre Álbumes, desplázate hasta Tipos de contenido y verás Capturas de pantalla y Grabaciones de pantalla como álbumes propios. Dentro de cualquiera de ellos, toca Seleccionar y arrastra el dedo sobre las miniaturas para elegir una fila o un bloque entero de una vez y luego toca el icono de la papelera.",
            "Borrar en bloque es rápido, pero también es la forma en que se pierden capturas útiles. Tarjetas de embarque, entradas, recibos para devoluciones, tiques de aparcamiento, códigos QR y capturas de instrucciones parecen capturas normales en la cuadrícula. Buscarlas entre miles de miniaturas diminutas es justo el tipo de trabajo agotador que hace que la gente lo deje a medias.",
            "Dos reglas sencillas lo hacen más seguro. Borra por fecha, empezando por las más antiguas, porque un billete de hace tres años rara vez importa. Y repasa más despacio los últimos meses, o revísalos uno a uno; [limpiar las fotos del iPhone deslizando](/blog/swipe-to-delete-photos-iphone) muestra cómo una revisión deslizando gestiona justo este tipo de lista.",
          ],
        },
        {
          title: "Ordenar las capturas por lo que muestran",
          content: [
            "DiskMop para iPhone muestra las capturas de pantalla como una categoría propia, formada solo por las fotos que el propio iOS marca como capturas, así que ninguna foto de la cámara acaba ahí por error. En iOS 26 con Apple Intelligence activado va un paso más allá: lee el texto de cada captura con el framework Vision de Apple y hace que el modelo de lenguaje de Apple que funciona en el dispositivo la clasifique como recibo, billete, chat, nota, mapa u otra pantalla. Los dos pasos se ejecutan en el teléfono; no se sube nada.",
            "El resultado es una sugerencia, no una selección. Los recibos y billetes aparecen en Quizá quieras conservar estas; los chats, mapas, notas y otras pantallas de apps, en Probablemente prescindibles. No se marca nada por ti, así que sigues decidiendo sobre cada grupo. En dispositivos o versiones de iOS sin ese modelo, las capturas simplemente se muestran juntas y la app explica por qué no se ordenaron.",
            "Las capturas repetidas tienen su propia tarjeta. Cuando haces varias capturas de la misma pantalla, forman un grupo de Capturas de pantalla similares, separado de las fotos similares para que dos capturas distintas de la misma app no se confundan con duplicados de un recuerdo. Conserva la más clara y deja ir el resto.",
          ],
        },
        {
          title: "Grabaciones de pantalla: borrar, reducir o conservar",
          content: [
            "DiskMop reconoce las grabaciones de pantalla por el tipo de grabación de pantalla que iOS registra, usa como comprobación adicional los nombres de archivo que iOS da a las grabaciones y las muestra en su propia categoría con su tamaño. Ordena por Más grandes y normalmente encontrarás unas pocas grabaciones largas que ocupan más que cientos de capturas.",
            "No todas las grabaciones deben irse. La grabación de un fallo para soporte, un tutorial que hiciste o un momento de un juego pueden merecer la pena, solo que no a tamaño completo. Reducirlas en las Herramientas de DiskMop guarda una copia más pequeña y mueve el original a Eliminados recientemente; nuestra guía para [reducir el tamaño de un vídeo en iPhone](/blog/reduce-video-size-iphone) explica los pros y contras.",
            "Elijas lo que elijas, termina en Eliminados recientemente. Hasta que lo vacíes, las capturas y grabaciones borradas siguen contando en tu almacenamiento. El análisis es gratis en DiskMop; sin suscripción puedes borrar hasta cinco fotos al día, y DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita, elimina el límite y desbloquea la reducción. Borrar 100 capturas también te da el trofeo Cazador de capturas.",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿Cómo borro todas las capturas de pantalla del iPhone de una vez?",
          answer:
            "Abre Fotos > Álbumes > Tipos de contenido > Capturas de pantalla, toca Seleccionar, arrastra el dedo por la cuadrícula para elegirlas y toca el icono de la papelera. Revisa antes billetes y recibos, y vacía después Eliminados recientemente.",
        },
        {
          question: "¿Por qué borrar capturas no liberó espacio?",
          answer:
            "Lo borrado espera 30 días en Eliminados recientemente y sigue contando en el almacenamiento. Vacía ese álbum para recuperar el espacio ya.",
        },
        {
          question: "¿Dónde se guardan las grabaciones de pantalla en iPhone?",
          answer:
            "En la app Fotos, en Álbumes > Tipos de contenido > Grabaciones de pantalla, además de en la fototeca principal. Un minuto de grabación suele ocupar entre 100 y 200 MB.",
        },
        {
          question:
            "¿Qué necesita DiskMop para ordenar las capturas por contenido?",
          answer:
            "iOS 26 y Apple Intelligence activado, porque la clasificación usa el modelo de lenguaje de Apple que funciona en el dispositivo. En otros dispositivos las capturas se muestran juntas; los grupos de capturas similares funcionan en todos los iPhone compatibles.",
        },
        {
          question: "¿Se suben mis capturas para clasificarlas?",
          answer:
            "No. El reconocimiento de texto y la clasificación se hacen en el iPhone con los frameworks de Apple. DiskMop no tiene servidor ni cuenta, y su etiqueta de privacidad en el App Store indica Datos no recopilados.",
        },
      ],
      verdict: [
        "Empieza por los dos álbumes que Apple ya ofrece: Capturas de pantalla y Grabaciones de pantalla en Tipos de contenido. Borra en bloque las capturas antiguas, repasa más despacio las recientes y mira primero las grabaciones si necesitas espacio rápido. Termina vaciando Eliminados recientemente.",
        "DiskMop para iPhone añade lo que les falta a los álbumes: capturas ordenadas por su contenido en iOS 26 con Apple Intelligence, grupos de capturas repetidas y grabaciones de pantalla ordenadas por tamaño, todo en el dispositivo y sin nada preseleccionado. El análisis es gratis, se pueden borrar hasta cinco fotos al día sin coste y DiskMop Pro, con 7 días de prueba gratuita, elimina el límite.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come eliminare screenshot e registrazioni schermo su iPhone (senza perdere quelli utili)",
      metaDescription:
        "Gli screenshot si accumulano a migliaia e le registrazioni schermo pesano centinaia di MB. Come trovarli, eliminarli in blocco e tenere ricevute, biglietti e codici.",
      subtitle:
        "Due album che Apple offre già, perché l'eliminazione in blocco è rischiosa e come ordinare gli screenshot in base al contenuto",
      intro: [
        "Risposta breve: apri Foto > Album, scorri fino a Tipi di media e apri Istantanee schermo; tocca Seleziona, trascina il dito sulla griglia per selezionarne molte insieme ed eliminale. Fai lo stesso in Registrazioni schermo, che di solito libera molto più spazio, perché un solo minuto di registrazione può occupare da 100 a 200 MB. Poi svuota Eliminati di recente, altrimenti per 30 giorni non cambia nulla.",
        "Il problema è che non tutti gli screenshot del rullino sono da buttare. Tra meme e catture di chat ci sono carte d'imbarco, ticket del parcheggio, ricevute e codici QR che ti serviranno ancora. Questa guida spiega come trovare ogni screenshot e ogni registrazione, come eliminarli in fretta senza buttare quelli, e come DiskMop per iPhone ordina gli screenshot in base al contenuto e individua le catture ripetute della stessa schermata.",
      ],
      keyTakeaways: [
        "Foto > Album > Tipi di media elenca separatamente Istantanee schermo e Registrazioni schermo; in entrambi si può selezionare in blocco trascinando il dito sulla griglia.",
        "Le registrazioni schermo sono la parte pesante: un minuto di registrazione occupa in genere da 100 a 200 MB, uno screenshot pochi megabyte.",
        "Subito dopo uno screenshot, tocca la miniatura, tocca Fine e scegli Elimina istantanea schermo per usarlo una volta senza mai conservarlo.",
        "Su iOS 26 con Apple Intelligence attiva, DiskMop legge sul dispositivo il testo di ogni screenshot e suggerisce quali potresti voler tenere, come ricevute e biglietti.",
        "Più screenshot della stessa schermata vengono raggruppati come screenshot simili, separati dalle foto, così puoi tenerne uno ed eliminare gli altri.",
        "Gli elementi eliminati restano 30 giorni in Eliminati di recente; lo spazio torna solo dopo aver svuotato quell'album.",
      ],
      dataTable: {
        caption: "Dimensioni tipiche delle catture dello schermo su iPhone",
        columns: ["Elemento", "Dimensione tipica", "100 elementi"],
        rows: [
          ["Screenshot", "2–8 MB", "0,2–0,8 GB"],
          ["Registrazione schermo di 10 secondi", "15–35 MB", "1,5–3,5 GB"],
          ["Registrazione schermo di 30 secondi", "50–100 MB", "5–10 GB"],
          ["Registrazione schermo di 1 minuto", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "Eliminare screenshot e registrazioni schermo su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Apri l'album Istantanee schermo",
            text: "In Foto vai in Album, scorri fino a Tipi di media e apri Istantanee schermo. Tocca Seleziona e trascina il dito sulla griglia per selezionarne molte insieme.",
          },
          {
            name: "Tieni quelli che ti servono ancora",
            text: "Prima di eliminare, deseleziona carte d'imbarco, ricevute, biglietti e codici QR. In DiskMop la lista Screenshot mostra su iOS 26 con Apple Intelligence il gruppo Potresti volerle tenere, che li rende più facili da individuare.",
          },
          {
            name: "Ripulisci le registrazioni schermo",
            text: "Apri Tipi di media > Registrazioni schermo. Le registrazioni sono pesanti, quindi eliminarne anche poche libera uno spazio evidente. Se vuoi tenerne una ma più leggera, riducila invece di eliminarla.",
          },
          {
            name: "Elimina le catture ripetute",
            text: "In DiskMop apri Screenshot simili per vedere i gruppi di catture della stessa schermata. Tieni la migliore di ogni gruppo ed elimina le altre.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Apri Foto > Album > Eliminati di recente, tocca Seleziona ed Elimina tutto per liberare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title:
            "Perché gli screenshot si accumulano e dove va davvero lo spazio",
          content: [
            "Uno screenshot richiede un secondo e di solito serve per un minuto: un indirizzo da inviare, un codice da digitare, un messaggio divertente da condividere. Poi resta lì. Dopo qualche anno averne migliaia è normale e, poiché sullo schermo sembrano piccoli, nessuno li conta. A pochi megabyte l'uno, mille screenshot sono comunque diversi gigabyte.",
            "Le registrazioni schermo sono un'altra scala. La registrazione di un gioco, di una videochiamata o di un tutorial viene salvata come un video completo alla risoluzione dello schermo, e un solo minuto occupa in genere da 100 a 200 MB. Dieci registrazioni dimenticate possono facilmente pesare più di tutti gli screenshot del telefono; per questo conviene guardare entrambi gli album.",
            "L'iPhone aiuta con un'abitudine: subito dopo uno screenshot compare una miniatura nell'angolo. Toccala, annota o copia ciò che ti serve, poi tocca Fine e scegli Elimina istantanea schermo. Usato così, uno screenshot che ti serve una sola volta non arriva mai nella libreria.",
          ],
        },
        {
          title: "Trovare ogni screenshot e ogni registrazione in Foto",
          content: [
            "L'app Foto separa già le catture dello schermo dalle foto della fotocamera. Apri Album, scorri fino a Tipi di media e troverai Istantanee schermo e Registrazioni schermo come album a sé. In ciascuno tocca Seleziona e trascina il dito sulle miniature per selezionare una riga o un intero blocco in una volta, poi tocca l'icona del cestino.",
            "L'eliminazione in blocco è veloce, ma è anche il modo in cui si perdono screenshot utili. Carte d'imbarco, biglietti per eventi, ricevute per i resi, ticket del parcheggio, codici QR e screenshot di istruzioni sembrano tutti screenshot qualsiasi nella griglia. Cercarli tra migliaia di minuscole miniature è proprio il tipo di lavoro faticoso che si abbandona a metà.",
            "Due regole semplici lo rendono più sicuro. Elimina per data, partendo dai più vecchi, perché un biglietto di tre anni fa conta raramente. E scorri più lentamente gli ultimi mesi, o rivedili uno alla volta; [pulire le foto dell'iPhone scorrendo](/blog/swipe-to-delete-photos-iphone) mostra come una revisione a scorrimento gestisce proprio questo tipo di lista.",
          ],
        },
        {
          title: "Ordinare gli screenshot in base a ciò che mostrano",
          content: [
            "DiskMop per iPhone presenta gli screenshot come una categoria a sé, composta solo dalle foto che iOS stesso contrassegna come screenshot, così nessuna foto della fotocamera finisce lì per errore. Su iOS 26 con Apple Intelligence attiva fa un passo in più: legge il testo di ogni screenshot con il framework Vision di Apple e lo fa classificare dal modello linguistico di Apple sul dispositivo come ricevuta, biglietto, chat, nota, mappa o altra schermata. Entrambi i passaggi avvengono sul telefono; non viene caricato nulla.",
            "Il risultato è un suggerimento, non una selezione. Ricevute e biglietti compaiono in Potresti volerle tenere; chat, mappe, note e altre schermate di app in Probabilmente eliminabili. Nulla viene spuntato al posto tuo, quindi decidi sempre tu su ogni gruppo. Sui dispositivi o sulle versioni di iOS senza quel modello, gli screenshot vengono semplicemente elencati insieme e l'app spiega perché non sono stati ordinati.",
            "Le catture ripetute hanno una scheda propria. Quando fai più screenshot della stessa schermata, formano un gruppo di Screenshot simili, separato dalle foto simili perché due screenshot diversi della stessa app non vengano scambiati per doppioni di un ricordo. Tieni il più chiaro e lascia andare il resto.",
          ],
        },
        {
          title: "Registrazioni schermo: eliminare, ridurre o tenere",
          content: [
            "DiskMop riconosce le registrazioni schermo dal tipo di registrazione che iOS assegna loro, usa come verifica aggiuntiva i nomi di file che iOS dà alle registrazioni e le elenca in una categoria propria con le loro dimensioni. Ordina per Più grandi e di solito troverai alcune registrazioni lunghe che occupano più di centinaia di screenshot.",
            "Non tutte le registrazioni devono sparire. La registrazione di un bug per l'assistenza, un tutorial che hai creato o un momento di un gioco possono valere la pena, solo non a grandezza piena. Ridurle negli Strumenti di DiskMop salva una copia più piccola e sposta l'originale in Eliminati di recente; la nostra guida per [ridurre le dimensioni dei video su iPhone](/blog/reduce-video-size-iphone) spiega i compromessi.",
            "Qualunque cosa scegli, concludi in Eliminati di recente. Finché non lo svuoti, gli screenshot e le registrazioni eliminati continuano a occupare spazio. L'analisi è gratuita in DiskMop; senza abbonamento puoi eliminare fino a cinque foto al giorno, e DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita, rimuove il limite e sblocca la riduzione. Eliminare 100 screenshot fa guadagnare anche il trofeo Cacciatore di screenshot.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Come elimino tutti gli screenshot dell'iPhone in una volta?",
          answer:
            "Apri Foto > Album > Tipi di media > Istantanee schermo, tocca Seleziona, trascina il dito sulla griglia per selezionarle e tocca l'icona del cestino. Controlla prima biglietti e ricevute e poi svuota Eliminati di recente.",
        },
        {
          question: "Perché eliminare gli screenshot non ha liberato spazio?",
          answer:
            "Gli elementi eliminati restano 30 giorni in Eliminati di recente e continuano a occupare spazio. Svuota quell'album per recuperarlo subito.",
        },
        {
          question: "Dove vengono salvate le registrazioni schermo su iPhone?",
          answer:
            "Nell'app Foto, in Album > Tipi di media > Registrazioni schermo, oltre che nella libreria principale. Un minuto di registrazione occupa in genere da 100 a 200 MB.",
        },
        {
          question:
            "Di cosa ha bisogno DiskMop per ordinare gli screenshot per contenuto?",
          answer:
            "Di iOS 26 e di Apple Intelligence attiva, perché la classificazione usa il modello linguistico di Apple sul dispositivo. Sugli altri dispositivi gli screenshot vengono elencati insieme; i gruppi di screenshot simili funzionano su tutti gli iPhone supportati.",
        },
        {
          question:
            "I miei screenshot vengono caricati per essere classificati?",
          answer:
            "No. Il riconoscimento del testo e la classificazione avvengono sull'iPhone con i framework di Apple. DiskMop non ha server né account e la sua etichetta sulla privacy nell'App Store indica Dati non raccolti.",
        },
      ],
      verdict: [
        "Comincia dai due album che Apple offre già: Istantanee schermo e Registrazioni schermo in Tipi di media. Elimina in blocco gli screenshot vecchi, scorri più lentamente quelli recenti e guarda prima le registrazioni se ti serve spazio in fretta. Concludi svuotando Eliminati di recente.",
        "DiskMop per iPhone aggiunge ciò che manca agli album: screenshot ordinati in base al contenuto su iOS 26 con Apple Intelligence, gruppi di catture ripetute e registrazioni schermo elencate per dimensione, tutto sul dispositivo e senza nulla di preselezionato. L'analisi è gratuita, si possono eliminare gratis fino a cinque foto al giorno e DiskMop Pro, con 7 giorni di prova gratuita, rimuove il limite.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como apagar capturas e gravações de tela no iPhone (sem perder as que você precisa)",
      metaDescription:
        "As capturas de tela se acumulam aos milhares e as gravações de tela pesam centenas de MB. Como encontrar tudo, apagar em lote e manter recibos, ingressos e códigos.",
      subtitle:
        "Dois álbuns que a Apple já oferece, por que apagar em lote é arriscado e como separar capturas pelo que elas mostram",
      intro: [
        "Resposta curta: abra Fotos > Álbuns, role até Tipos de Mídia e abra Capturas de Tela; toque em Selecionar, arraste o dedo pela grade para selecionar várias de uma vez e apague. Faça o mesmo em Gravações de Tela, o que costuma liberar muito mais espaço, porque um único minuto de gravação pode ocupar de 100 a 200 MB. Depois esvazie Apagados Recentemente, ou nada muda por 30 dias.",
        "O problema é que nem toda captura do rolo da câmera é lixo. Entre memes e capturas de conversas há cartões de embarque, tíquetes de estacionamento, recibos e QR codes de que você vai precisar de novo. Este guia explica como encontrar cada captura e cada gravação, como apagá-las rápido sem jogar essas fora, e como o DiskMop para iPhone separa as capturas pelo conteúdo e identifica capturas repetidas da mesma tela.",
      ],
      keyTakeaways: [
        "Fotos > Álbuns > Tipos de Mídia lista separadamente Capturas de Tela e Gravações de Tela; nos dois dá para selecionar em lote arrastando o dedo pela grade.",
        "As gravações de tela são a parte pesada: um minuto de gravação costuma ocupar de 100 a 200 MB, enquanto uma captura tem poucos megabytes.",
        "Logo depois de fazer uma captura, toque na miniatura, toque em OK e escolha Apagar Captura de Tela para usá-la uma vez e nunca guardá-la.",
        "No iOS 26 com a Apple Intelligence ativada, o DiskMop lê no aparelho o texto de cada captura e sugere quais talvez você queira guardar, como recibos e ingressos.",
        "Várias capturas da mesma tela são agrupadas como capturas semelhantes, separadas das suas fotos, para você manter uma e apagar o resto.",
        "Os itens apagados ficam 30 dias em Apagados Recentemente; o espaço só volta depois que você esvazia esse álbum.",
      ],
      dataTable: {
        caption: "Tamanhos típicos de capturas da tela no iPhone",
        columns: ["Item", "Tamanho típico", "100 deles"],
        rows: [
          ["Captura de tela", "2–8 MB", "0,2–0,8 GB"],
          ["Gravação de tela de 10 segundos", "15–35 MB", "1,5–3,5 GB"],
          ["Gravação de tela de 30 segundos", "50–100 MB", "5–10 GB"],
          ["Gravação de tela de 1 minuto", "100–200 MB", "10–20 GB"],
        ],
      },
      howTo: {
        name: "Apagar capturas e gravações de tela no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abra o álbum Capturas de Tela",
            text: "No Fotos, vá em Álbuns, role até Tipos de Mídia e abra Capturas de Tela. Toque em Selecionar e arraste o dedo pela grade para selecionar várias de uma vez.",
          },
          {
            name: "Mantenha as que ainda são necessárias",
            text: "Antes de apagar, desmarque cartões de embarque, recibos, ingressos e QR codes. No DiskMop, a lista de capturas mostra no iOS 26 com a Apple Intelligence o grupo Talvez queira guardar estas, o que facilita encontrá-las.",
          },
          {
            name: "Limpe as gravações de tela",
            text: "Abra Tipos de Mídia > Gravações de Tela. As gravações são grandes, então apagar até poucas já libera um espaço visível. Para manter uma, mas menor, reduza-a em vez de apagar.",
          },
          {
            name: "Apague as capturas repetidas",
            text: "No DiskMop, abra Capturas de ecrã semelhantes para ver grupos de capturas da mesma tela. Mantenha a melhor de cada grupo e apague o resto.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "Abra Fotos > Álbuns > Apagados Recentemente, toque em Selecionar e Apagar Tudo para liberar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title:
            "Por que as capturas se acumulam e para onde o espaço realmente vai",
          content: [
            "Uma captura leva um segundo e geralmente serve por um minuto: um endereço para mandar, um código para digitar, uma mensagem engraçada para compartilhar. Depois fica. Em alguns anos, milhares de capturas são normais e, como parecem pequenas na tela, ninguém conta. A poucos megabytes cada, mil capturas ainda somam vários gigabytes.",
            "As gravações de tela estão em outra escala. A gravação de um jogo, de uma videochamada ou de um tutorial é salva como um vídeo completo na resolução da tela, e um único minuto costuma ocupar de 100 a 200 MB. Dez gravações esquecidas podem facilmente pesar mais que todas as capturas do telefone; por isso vale a pena olhar os dois álbuns.",
            "O iPhone ajuda com um hábito: logo depois de uma captura, aparece uma miniatura no canto. Toque nela, marque ou copie o que precisar, depois toque em OK e escolha Apagar Captura de Tela. Usada assim, uma captura de que você só precisa uma vez nunca chega à sua fototeca.",
          ],
        },
        {
          title: "Encontrando cada captura e gravação no Fotos",
          content: [
            "O app Fotos já separa as capturas de tela das fotos da câmera. Abra Álbuns, role até Tipos de Mídia e você encontra Capturas de Tela e Gravações de Tela como álbuns próprios. Em qualquer um deles, toque em Selecionar e arraste o dedo sobre as miniaturas para selecionar uma linha ou um bloco inteiro de uma vez, depois toque no ícone da lixeira.",
            "Apagar em lote é rápido, mas também é assim que capturas úteis se perdem. Cartões de embarque, ingressos, recibos para trocas, tíquetes de estacionamento, QR codes e capturas de instruções parecem capturas comuns na grade. Procurar por eles entre milhares de miniaturas minúsculas é exatamente o tipo de trabalho cansativo que faz as pessoas pararem no meio.",
            "Duas regras simples deixam tudo mais seguro. Apague por data, começando pelas mais antigas, porque um ingresso de três anos atrás raramente importa. E passe mais devagar pelos últimos meses, ou revise um a um; [limpar as fotos do iPhone deslizando](/blog/swipe-to-delete-photos-iphone) mostra como uma revisão deslizando lida com exatamente esse tipo de lista.",
          ],
        },
        {
          title: "Separando as capturas pelo que elas mostram",
          content: [
            "O DiskMop para iPhone lista as capturas de tela como uma categoria própria, formada só pelas fotos que o próprio iOS marca como captura, então nenhuma foto da câmera vai parar ali por engano. No iOS 26 com a Apple Intelligence ativada, ele vai além: lê o texto de cada captura com o framework Vision da Apple e faz o modelo de linguagem da Apple que roda no aparelho classificá-la como recibo, ingresso, conversa, nota, mapa ou outra tela. As duas etapas acontecem no telefone; nada é enviado.",
            "O resultado é uma sugestão, não uma seleção. Recibos e ingressos aparecem em Talvez queira guardar estas; conversas, mapas, notas e outras telas de apps aparecem em Provavelmente dispensáveis. Nada é marcado por você, então você continua decidindo sobre cada grupo. Em aparelhos ou versões do iOS sem esse modelo, as capturas simplesmente aparecem juntas e o app explica por que não foram separadas.",
            "As capturas repetidas têm um cartão próprio. Quando você faz várias capturas da mesma tela, elas formam um grupo de Capturas de ecrã semelhantes, separado das fotos semelhantes para que duas capturas diferentes do mesmo app não sejam confundidas com duplicatas de uma lembrança. Mantenha a mais nítida e deixe o resto ir.",
          ],
        },
        {
          title: "Gravações de tela: apagar, reduzir ou manter",
          content: [
            "O DiskMop reconhece as gravações de tela pelo tipo de gravação de tela que o iOS registra, usa como verificação extra os nomes de arquivo que o iOS dá às gravações e as lista numa categoria própria com o tamanho de cada uma. Ordene por Maiores e normalmente você encontra algumas gravações longas que ocupam mais que centenas de capturas.",
            "Nem toda gravação precisa sair. A gravação de um erro para o suporte, um tutorial que você fez ou um momento de um jogo podem valer a pena, só não em tamanho cheio. Reduzi-las nas Ferramentas do DiskMop salva uma cópia menor e move o original para Apagados Recentemente; nosso guia para [reduzir o tamanho de vídeos no iPhone](/blog/reduce-video-size-iphone) explica os prós e contras.",
            "Seja qual for a escolha, termine em Apagados Recentemente. Até você esvaziá-lo, capturas e gravações apagadas continuam ocupando armazenamento. A análise é grátis no DiskMop; sem assinatura, você pode apagar até cinco fotos por dia, e o DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito, remove o limite e libera a redução. Apagar 100 capturas também rende o troféu Caçador de capturas.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Como apago todas as capturas de tela do iPhone de uma vez?",
          answer:
            "Abra Fotos > Álbuns > Tipos de Mídia > Capturas de Tela, toque em Selecionar, arraste o dedo pela grade para selecioná-las e toque no ícone da lixeira. Confira antes ingressos e recibos e depois esvazie Apagados Recentemente.",
        },
        {
          question: "Por que apagar capturas não liberou espaço?",
          answer:
            "Os itens apagados esperam 30 dias em Apagados Recentemente e continuam contando no armazenamento. Esvazie esse álbum para recuperar o espaço agora.",
        },
        {
          question: "Onde ficam as gravações de tela no iPhone?",
          answer:
            "No app Fotos, em Álbuns > Tipos de Mídia > Gravações de Tela, além da fototeca principal. Um minuto de gravação costuma ocupar de 100 a 200 MB.",
        },
        {
          question:
            "Do que o DiskMop precisa para separar capturas pelo conteúdo?",
          answer:
            "Do iOS 26 e da Apple Intelligence ativada, porque a classificação usa o modelo de linguagem da Apple que roda no aparelho. Em outros aparelhos, as capturas aparecem juntas; os grupos de capturas semelhantes funcionam em todos os iPhones compatíveis.",
        },
        {
          question: "Minhas capturas são enviadas para serem classificadas?",
          answer:
            "Não. O reconhecimento de texto e a classificação acontecem no iPhone com os frameworks da Apple. O DiskMop não tem servidor nem conta, e o rótulo de privacidade na App Store diz Dados Não Coletados.",
        },
      ],
      verdict: [
        "Comece pelos dois álbuns que a Apple já oferece: Capturas de Tela e Gravações de Tela em Tipos de Mídia. Apague em lote as capturas antigas, passe mais devagar pelas recentes e olhe primeiro as gravações se precisar de espaço rápido. Termine esvaziando Apagados Recentemente.",
        "O DiskMop para iPhone acrescenta o que falta aos álbuns: capturas separadas pelo conteúdo no iOS 26 com a Apple Intelligence, grupos de capturas repetidas e gravações de tela listadas por tamanho, tudo no aparelho e sem nada pré-selecionado. A análise é grátis, até cinco fotos por dia podem ser apagadas sem custo e o DiskMop Pro, com 7 dias de teste gratuito, remove o limite.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone のスクリーンショットと画面収録を削除する方法（必要なものは残して）",
      metaDescription:
        "スクリーンショットは数千枚単位で溜まり、画面収録は数百 MB にもなります。まとめて見つけて一括削除しつつ、レシートやチケット、コードを残す方法を解説します。",
      subtitle:
        "Apple が用意している 2 つのアルバム、一括削除の落とし穴、内容によるスクリーンショットの仕分け",
      intro: [
        "結論から言うと、写真 > アルバムを開いてメディアタイプまでスクロールし、「スクリーンショット」を開きます。「選択」をタップしてグリッドを指でなぞれば一度に多数を選べるので、そのまま削除します。「画面収録」でも同じことをしましょう。1 分の収録で 100〜200 MB になることもあるため、たいていこちらのほうがずっと多くの容量が空きます。最後に「最近削除した項目」を空にしないと、30 日間は何も変わりません。",
        "ただし、カメラロールのスクリーンショットがすべて不要とは限りません。ミームやチャットの画面に混じって、搭乗券、駐車券、レシート、QR コードなど、また必要になるものがあります。このガイドでは、すべてのスクリーンショットと画面収録の見つけ方、それらを捨てずに手早く削除する方法、そして iPhone 版 DiskMop がスクリーンショットを内容で仕分け、同じ画面を何度も撮ったものを見つけるしくみを解説します。",
      ],
      keyTakeaways: [
        "写真 > アルバム > メディアタイプには「スクリーンショット」と「画面収録」が別々にあり、どちらもグリッドを指でなぞってまとめて選択できます。",
        "重いのは画面収録です。1 分の収録は一般に 100〜200 MB、スクリーンショットは数 MB です。",
        "スクリーンショットを撮った直後にサムネイルをタップし、「完了」から「スクリーンショットを削除」を選べば、一度使うだけで保存せずに済みます。",
        "Apple Intelligence をオンにした iOS 26 では、DiskMop が各スクリーンショットの文字を端末上で読み取り、レシートやチケットなど残しておきたいかもしれないものを提案します。",
        "同じ画面を撮った複数のスクリーンショットは、写真とは別に「類似のスクリーンショット」としてまとめられ、1 枚を残して残りを削除できます。",
        "削除した項目は「最近削除した項目」に 30 日間残ります。容量が戻るのは、そのアルバムを空にしたあとです。",
      ],
      dataTable: {
        caption: "iPhone の画面キャプチャの一般的なサイズ",
        columns: ["項目", "一般的なサイズ", "100 件分"],
        rows: [
          ["スクリーンショット", "2〜8 MB", "0.2〜0.8 GB"],
          ["10 秒の画面収録", "15〜35 MB", "1.5〜3.5 GB"],
          ["30 秒の画面収録", "50〜100 MB", "5〜10 GB"],
          ["1 分の画面収録", "100〜200 MB", "10〜20 GB"],
        ],
      },
      howTo: {
        name: "iPhone のスクリーンショットと画面収録を削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "「スクリーンショット」アルバムを開く",
            text: "写真アプリでアルバムを開き、メディアタイプまでスクロールして「スクリーンショット」を開きます。「選択」をタップし、グリッドを指でなぞってまとめて選びます。",
          },
          {
            name: "まだ必要なものを外す",
            text: "削除する前に、搭乗券、レシート、チケット、QR コードの選択を外します。DiskMop のスクリーンショット一覧では、Apple Intelligence をオンにした iOS 26 で「残しておきたいかもしれません」グループが表示されるので、見つけやすくなります。",
          },
          {
            name: "画面収録を片付ける",
            text: "メディアタイプ >「画面収録」を開きます。収録はサイズが大きいので、数本消すだけでもはっきり容量が空きます。残したいけれど小さくしたい場合は、削除せずに縮小しましょう。",
          },
          {
            name: "繰り返し撮ったものを削除する",
            text: "DiskMop で「類似のスクリーンショット」を開くと、同じ画面のキャプチャがグループで表示されます。各グループでいちばん良いものを残し、残りを削除します。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "写真 > アルバム > 最近削除した項目を開き、「選択」>「すべて削除」をタップすると、すぐに容量が空きます。",
          },
        ],
      },
      sections: [
        {
          title: "スクリーンショットが溜まる理由と、容量の本当の行き先",
          content: [
            "スクリーンショットは撮るのに 1 秒、必要なのもたいてい 1 分です。送りたい住所、入力するコード、共有したいおもしろいメッセージ。そしてそのまま残ります。数年経てば数千枚あるのは普通で、画面上では小さく見えるため誰も数えません。1 枚数 MB でも、千枚あれば数 GB になります。",
            "画面収録は桁が違います。ゲームやビデオ通話、操作説明の収録は、画面の解像度のまま完全な動画として保存され、1 分で一般に 100〜200 MB を使います。忘れられた収録が 10 本あれば、iPhone のスクリーンショット全部より重くなることも珍しくありません。両方のアルバムを見る価値があるのはこのためです。",
            "iPhone には役立つ習慣がひとつあります。スクリーンショットを撮った直後、隅にサムネイルが表示されます。それをタップして必要な部分にマークを付けたりコピーしたりしたら、「完了」をタップして「スクリーンショットを削除」を選びます。こうすれば、一度しか使わないスクリーンショットがライブラリに残ることはありません。",
          ],
        },
        {
          title: "写真アプリですべてのスクリーンショットと収録を見つける",
          content: [
            "写真アプリは、画面キャプチャをカメラで撮った写真とすでに分けて管理しています。アルバムを開いてメディアタイプまでスクロールすると、「スクリーンショット」と「画面収録」がそれぞれ独立したアルバムとしてあります。どちらでも「選択」をタップし、サムネイルの上を指でなぞれば 1 行やブロックごと一度に選択でき、あとはゴミ箱アイコンをタップするだけです。",
            "一括削除は速い反面、役に立つスクリーンショットを失う原因にもなります。搭乗券、イベントのチケット、返品用のレシート、駐車券、QR コード、手順の画面などは、グリッドではどれも普通のスクリーンショットに見えます。何千もの小さなサムネイルからそれを探し出すのは、途中で投げ出したくなる典型的な疲れる作業です。",
            "2 つの簡単なルールで安全になります。古いものから日付順に削除すること。3 年前のチケットが重要なことはめったにありません。そして直近の数か月はゆっくり見るか、1 枚ずつ確認すること。[スワイプで iPhone の写真を整理する方法](/blog/swipe-to-delete-photos-iphone)では、まさにこうしたリストをスワイプ整理でどう片付けるかを紹介しています。",
          ],
        },
        {
          title: "写っている内容でスクリーンショットを仕分ける",
          content: [
            "iPhone 版 DiskMop はスクリーンショットを独立したカテゴリとして表示し、iOS 自身がスクリーンショットとして記録している写真だけをそこに入れるので、カメラで撮った写真が誤って入ることはありません。Apple Intelligence をオンにした iOS 26 では、さらに一歩進みます。各スクリーンショットの文字を Apple の Vision フレームワークで読み取り、端末上で動く Apple の言語モデルに、レシート、チケット、チャット、メモ、地図、その他の画面のどれかに分類させます。どちらの処理も iPhone 上で行われ、何もアップロードされません。",
            "結果はあくまで提案で、選択ではありません。レシートとチケットは「残しておきたいかもしれません」に、チャット、地図、メモ、そのほかのアプリ画面は「手放してよさそうです」に表示されます。勝手にチェックが入ることはないので、どのグループも最終的にはあなたが判断します。端末内のモデルがないデバイスや iOS のバージョンでは、スクリーンショットはまとめて表示され、仕分けされなかった理由がアプリに表示されます。",
            "繰り返し撮ったキャプチャには専用のカードがあります。同じ画面を何枚も撮ると「類似のスクリーンショット」グループになり、類似写真とは分けて扱われます。同じアプリの別々のスクリーンショットが、思い出の写真の重複と取り違えられないようにするためです。いちばん鮮明な 1 枚を残し、残りは手放しましょう。",
          ],
        },
        {
          title: "画面収録は削除するか、縮小するか、残すか",
          content: [
            "DiskMop は iOS が記録している画面収録の種類から画面収録を見分け、念のため iOS が収録に付けるファイル名でも確認し、サイズ付きで専用のカテゴリに一覧表示します。「大きい順」に並べ替えると、たいてい数百枚のスクリーンショットより大きい長い収録がいくつか見つかります。",
            "すべての収録を消すべきとは限りません。サポートに送る不具合の記録、自分で作った操作説明、ゲームの名場面などは残す価値があるでしょう。ただ、フルサイズである必要はありません。DiskMop の「ツール」で縮小すると小さなコピーが保存され、元の動画は「最近削除した項目」に移ります。メリットとデメリットは[iPhone で動画のサイズを小さくする方法](/blog/reduce-video-size-iphone)で解説しています。",
            "どれを選んでも、最後は「最近削除した項目」で締めくくりましょう。空にするまで、削除したスクリーンショットや収録はストレージを使い続けます。DiskMop のスキャンは無料です。サブスクリプションなしでも 1 日 5 枚まで削除でき、7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro なら制限がなくなり、縮小機能も使えます。スクリーンショットを 100 枚削除すると、トロフィー「スクショハンター」も手に入ります。",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone のスクリーンショットを一度にすべて削除するには？",
          answer:
            "写真 > アルバム > メディアタイプ >「スクリーンショット」を開き、「選択」をタップしてグリッドを指でなぞって選び、ゴミ箱アイコンをタップします。先にチケットやレシートを確認し、そのあと「最近削除した項目」を空にしてください。",
        },
        {
          question:
            "スクリーンショットを削除しても空き容量が増えないのはなぜですか？",
          answer:
            "削除した項目は「最近削除した項目」で 30 日間待機し、その間もストレージを使い続けます。すぐに容量を取り戻すには、そのアルバムを空にしてください。",
        },
        {
          question: "iPhone の画面収録はどこに保存されていますか？",
          answer:
            "写真アプリのアルバム > メディアタイプ >「画面収録」と、メインのライブラリにあります。1 分の収録は一般に 100〜200 MB です。",
        },
        {
          question:
            "DiskMop がスクリーンショットを内容で仕分けるには何が必要ですか？",
          answer:
            "iOS 26 と、オンになった Apple Intelligence です。仕分けには端末上で動く Apple の言語モデルを使うためです。それ以外のデバイスではスクリーンショットはまとめて表示され、類似のスクリーンショットのグループ化は対応するすべての iPhone で動作します。",
        },
        {
          question: "分類のためにスクリーンショットがアップロードされますか？",
          answer:
            "いいえ。文字の認識も分類も、Apple のフレームワークを使って iPhone 上で行われます。DiskMop はサーバーもアカウントも持たず、App Store のプライバシーラベルには「データの収集なし」と記載されています。",
        },
      ],
      verdict: [
        "まずは Apple が用意している 2 つのアルバム、メディアタイプの「スクリーンショット」と「画面収録」から始めましょう。古いスクリーンショットはまとめて削除し、新しいものはゆっくり確認し、急いで容量が必要なら収録から見ます。最後に「最近削除した項目」を空にします。",
        "iPhone 版 DiskMop は、アルバムにないものを補います。Apple Intelligence をオンにした iOS 26 での内容によるスクリーンショットの仕分け、繰り返し撮ったキャプチャのグループ、サイズ順の画面収録一覧。すべて端末上で処理され、事前選択はありません。スキャンは無料、1 日 5 枚までは無料で削除でき、7 日間の無料トライアル付きの DiskMop Pro なら制限がなくなります。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
