import type { Article } from "../types";

export const findDuplicateVideosIphone: Article = {
  slug: "find-duplicate-videos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone'da Kopya ve Benzer Videoları Bulma (ve En İyi Çekimi Tutma)",
      metaDescription:
        "Aynı anın üç çekimi bin fotoğraftan fazla yer kaplayabilir. iPhone'da benzer videoları bulma, en iyi çekimi seçme ve gigabaytlarca alanı güvenle açma adımları.",
      subtitle:
        "Tekrarlanan kliplerin kitaplıktaki en ağır dağınıklık olmasının sebebi ve hiçbir şey yüklemeden video karşılaştırmanın nasıl çalıştığı",
      intro: [
        "Kısa cevap: Fotoğraflar'daki Apple'ın Kopyalar albümü birebir kopyaları birleştirir, ama aynı anın iki ayrı çekimini kopya saymaz. Bir doğum günü şarkısını iki kez, bir gün batımını üç kez ya da bir çocuğun ilk adımlarını birkaç açıdan kaydetmek, birbirine benzeyen ama farklı dosyalar olan videolar üretir ve her biri yüzlerce megabayt tutabilir. Bunları bulmak, dosyaların değil videoların ne gösterdiğinin karşılaştırılmasını gerektirir.",
        "Bu rehber tekrarlanan kliplerin neden tekrarlanan fotoğraflardan daha önemli olduğunu, Fotoğraflar uygulamasının zaten neler sunduğunu, iPhone için DiskMop'un videoları aygıtta nasıl karşılaştırdığını ve hangi çekimi tutmayı önerdiğini, saklamak istediğiniz ama tam boyutta istemediğiniz uzun bir videoyla ne yapacağınızı anlatıyor.",
      ],
      keyTakeaways: [
        "Çoğu iPhone'da en ağır şey videodur: 60 fps'de bir dakikalık 4K yaklaşık 400 MB'tır; birkaç tekrar çekim yüzlerce fotoğraftan ağır basabilir.",
        "Fotoğraflar'daki Kopyalar albümü (Albümler > Yardımcı Programlar) birebir kopyaları yönetir; aynı anın ayrı çekimleri farklı dosyalardır ve orada listelenmez.",
        "DiskMop her videonun uzunluğunun %10'undaki, %50'sindeki ve %90'ındaki üç kareyi karşılaştırır; bunlardan biri bile farklıysa videolar gruplanmaz.",
        "Videolar yalnızca yaklaşık yarım saat içinde çekilmiş ve benzer uzunluktaki diğer videolarla karşılaştırılır; bu, aynı etkinliğin farklı anlarını ayrı tutar.",
        "Her grupta önerilen video önce favori ya da düzenlenmiş olandır, sonra en yüksek çözünürlüklü ve en uzun çekim gelir; silinmek üzere hiçbir şey seçilmez.",
        "Silinen videolar 30 gün Son Silinenler'de kalır; alanı geri almak için o albümü boşaltın.",
      ],
      dataTable: {
        caption:
          "Bir dakikalık iPhone videosunun yaklaşık boyutu (Apple'ın tahminleri)",
        columns: ["Kayıt biçimi", "Dakika başına", "30 saniyelik üç çekim"],
        rows: [
          ["30 fps'de 720p HD", "Yaklaşık 45 MB", "Yaklaşık 70 MB"],
          ["30 fps'de 1080p HD", "Yaklaşık 60 MB", "Yaklaşık 90 MB"],
          ["30 fps'de 4K", "Yaklaşık 170 MB", "Yaklaşık 255 MB"],
          ["60 fps'de 4K", "Yaklaşık 400 MB", "Yaklaşık 600 MB"],
        ],
      },
      howTo: {
        name: "iPhone'da benzer videoları bulma ve silme",
        totalTime: "PT10M",
        steps: [
          {
            name: "Önce birebir kopyaları birleştirin",
            text: "Fotoğraflar > Albümler > Yardımcı Programlar > Kopyalar'ı açın ve Apple'ın bulduğu birebir kopyaları birleştirin. Bu ücretsizdir ve en iyi sürümü saklar.",
          },
          {
            name: "Benzer videoları tarayın",
            text: "DiskMop'u açın ve taramanın bitmesini bekleyin. Telefonda duran videolar aygıtta kare kare karşılaştırılır; gruplar bulununca ana ekranda Benzer videolar kartı belirir.",
          },
          {
            name: "Çekimleri karşılaştırın",
            text: "Bir grubu açın. Önerilen video işaretlidir; karar vermeden önce bir videoyu önizlemek ve diğerleriyle karşılaştırmak için üzerine basılı tutun.",
          },
          {
            name: "Fazla çekimleri silin",
            text: "İhtiyacınız olmayan çekimleri işaretleyip silin. iOS onay ister ve videolar Son Silinenler'e gider.",
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
            "Tekrarlanan Videolar Neden Tekrarlanan Fotoğraflardan Pahalıdır",
          content: [
            "Fotoğraflarda birkaç fazla deneme birkaç megabayta mal olur. Videoda her fazla çekim tam bir kayıttır. Apple'ın kendi tahminlerine göre 30 fps'de bir dakikalık 1080p yaklaşık 60 MB, 60 fps'de bir dakikalık 4K yaklaşık 400 MB'tır. Bu yüzden aynı anın 4K'da üç adet 30 saniyelik çekimi birkaç yüz sıradan fotoğraftan fazla yer kaplayabilir.",
            "Tekrar çekimler yaygındır. İnsanlar biri güldüğü için, kamera geç başladığı için ya da daha iyi bir açı istedikleri için kaydı yeniden başlatır. Bu denemelerin her biri kitaplıkta kalır, iCloud Fotoğrafları'na eşitlenir ve Anılar'da görünür; neredeyse hiç kimse zayıf olanları silmek için geri dönmez.",
            "Videoların gerçek alan açmanın genellikle en hızlı yolu olmasının sebebi budur. [Fotoğraf silmenin iPhone'da neden yer açmadığı](/blog/iphone-storage-full) rehberimiz birkaç büyük videonun Fotoğraflar'daki diğer her şeyden çoğu zaman nasıl ağır bastığını gösteriyor.",
          ],
        },
        {
          title: "Fotoğraflar Uygulamasının Zaten Bulduğu",
          content: [
            "iOS 16'dan beri Fotoğraflar kitaplığı arka planda tarar ve birebir aynı öğeleri Albümler > Yardımcı Programlar > Kopyalar altında listeler. Birleştirmek en yüksek kaliteli sürümü saklar ve meta verileri birleştirir; bu yüzden örneğin Mesajlar'dan ya da AirDrop'tan iki kez kaydedilmiş kopyalar için güvenli bir ilk adımdır.",
            "Ayrı çekimler başka bir konudur. Aynı sahnenin iki kaydı; farklı uzunlukları, farklı ilk kareleri ve farklı ses anları olan iki farklı dosyadır; aynı içeriği arayan bir kopya denetimi onları listelemez. Fotoğraflar her videoya göz atabileceğiniz Albümler > Ortam Türleri > Videolar'ı da sunar, ama orası benzerliğe göre sıralanmaz.",
            "Videolar albümü boyuta göre değil tarihe göre sıralanır; bu da en ağır klipleri bulmayı olması gerekenden zorlaştırır. Boyutlarıyla birlikte ayrı bir büyük videolar listesi bu kısmı çözer; benzerlik karşılaştırması ise tekrar çekimleri.",
          ],
        },
        {
          title: "Benzer Videolar Aygıtta Nasıl Bulunur",
          content: [
            "iPhone için DiskMop videoları fotoğrafları karşılaştırdığı gibi, nasıl göründüklerine göre karşılaştırır. Telefonda duran her videodan uzunluğun %10'unda, %50'sinde ve %90'ında üç küçük kare alır ve her birini Apple'ın Vision çerçevesiyle görsel bir parmak izine dönüştürür. İki video yalnızca üç kare çiftinin üçü de yakınsa benzer sayılır; bir klipte araba içi, diğerinde yol gibi farklı tek bir kare onları ayrı tutar.",
            "İki denetim daha yanlış eşleşmeleri önler. Videolar birbirinden yaklaşık yarım saat içinde çekilmiş olmalıdır, tekrar çekimler de orada yaşar; uzunlukları ise en fazla bir buçuk kat farklı olabilir. Böylece aynı konserdeki farklı şarkılar ya da aynı tatilin farklı anları birbirine benzese de ayrı gruplarda kalır.",
            "Yalnızca iCloud'da duran videolar karşılaştırma için indirilmez; bu, mobil verinizi ve zamanınızı korur, ekran da kaçının atlandığını söyler. Geri kalan her şey Apple'ın çerçeveleriyle iPhone'da olur. DiskMop'un sunucusu ve hesabı yoktur, hiçbir şey yüklenmez.",
          ],
        },
        {
          title: "Tutulacak Çekimi Seçmek",
          content: [
            "DiskMop her grupta tutulacak bir videoyu işaretler. Favori olarak işaretlediğiniz video önce gelir, sonra düzenlediğiniz video, sonra en yüksek çözünürlüklü çekim ve eşitse en uzun olanı. Silinmek üzere hiçbir şey seçilmez: grubu açarsınız, klipleri önizlemek için basılı tutarsınız ve ihtiyacınız olmayan çekimleri işaretlersiniz.",
            "Bazen doğru cevap uzun bir videoyu tutup küçültmektir. DiskMop büyük videoları ve küçültmeye değer videoları da listeler; Araçlar bölümü ise ne kadar küçüleceğini önceden gösterip herhangi bir videonun daha küçük bir kopyasını kaydedebilir, özgün de Son Silinenler'e gider. [iPhone'da video boyutunu küçültme](/blog/reduce-video-size-iphone) rehberimiz kalite ayarlarını anlatıyor.",
            "Kaldırılan videoların 30 gün boyunca depolama alanınızdan sayılmaya devam ettiği Son Silinenler'de bitirin. DiskMop'ta tarama ücretsizdir; abonelik olmadan günde beş öğeye kadar silebilirsiniz, 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro ise sınırı kaldırır ve küçültmeyi açar. Tekrarlanan fotoğraflar için aynı yaklaşım [iPhone'da kopya ve benzer fotoğrafları bulma](/blog/find-duplicate-similar-photos-iphone) rehberinde anlatılıyor.",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone'un Kopyalar albümü kopya videoları bulur mu?",
          answer:
            "Birebir kopyaları listeler. Aynı anın ayrı kayıtları farklı dosyalardır ve orada görünmez; onları bulmak videoların ne gösterdiğini karşılaştırmayı gerektirir.",
        },
        {
          question: "DiskMop iki videonun benzer olduğuna nasıl karar verir?",
          answer:
            "Her videonun uzunluğunun %10'u, %50'si ve %90'ındaki üç karenin görsel parmak izlerini karşılaştırır. Üçü de yakın olmalı, videolar birbirinden yaklaşık yarım saat içinde çekilmiş olmalı ve uzunlukları en fazla 1,5 kat farklı olmalıdır.",
        },
        {
          question: "DiskMop hangi videoyu tutmayı önerir?",
          answer:
            "Önce favoriyi, sonra düzenlenmiş videoyu, sonra en yüksek çözünürlüklü ve eşitse en uzun çekimi. Bunun yerine herhangi bir başka videoyu tutabilirsiniz; silinmek üzere hiçbir şey seçilmez.",
        },
        {
          question: "Bazı videolar neden karşılaştırılmadı?",
          answer:
            "Yalnızca iCloud'da duran videolar, veri ve zaman harcamamak için karşılaştırmaya indirilmez. DiskMop kaçının atlandığını gösterir.",
        },
        {
          question: "Videolarım karşılaştırma için yükleniyor mu?",
          answer:
            "Hayır. Kareler Apple'ın Vision çerçevesiyle iPhone'da analiz edilir. DiskMop'un sunucusu yoktur ve App Store gizlilik etiketinde Veri Toplanmaz yazar.",
        },
      ],
      verdict: [
        "Hızla yere ihtiyacınız varsa fotoğraflardan önce videolara bakın. Birebir kopyaları Apple'ın Kopyalar albümüyle birleştirin, sonra yalnızca görsel karşılaştırmanın görebileceği tekrar çekimleri bulun, en iyisini tutun ve Son Silinenler'i boşaltın.",
        "iPhone için DiskMop her videonun üç karesini aygıtta karşılaştırır, yalnızca aynı anın çekimlerini gruplar, en iyisini önerir ve silinmek üzere hiçbir şey seçmez. Tarama ücretsizdir, günde beş öğeye kadar ücretsiz silinebilir ve 7 günlük ücretsiz denemesi olan DiskMop Pro sınırı kaldırır ve video küçültmeyi ekler.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Find Duplicate and Similar Videos on iPhone (and Keep the Best Take)",
      metaDescription:
        "Three takes of the same clip can cost more space than a thousand photos. How to find similar videos on iPhone, pick the best take and free gigabytes safely.",
      subtitle:
        "Why repeated clips are the heaviest clutter in a library, and how video comparison works without uploading anything",
      intro: [
        "Short answer: Apple's Duplicates album in Photos merges identical copies, but it does not treat two separate takes of the same moment as duplicates. Recording a birthday song twice, a sunset three times or a child's first steps from a few angles produces videos that look alike but are different files, and each one can take hundreds of megabytes. Finding those takes a comparison of what the videos show, not of their files.",
        "This guide explains why repeated clips matter more than repeated photos, what the Photos app already offers, how DiskMop for iPhone compares videos on the device and which take it suggests keeping, and what to do with a long video you want to keep but not at full size.",
      ],
      keyTakeaways: [
        "Video is the heaviest thing on most iPhones: a minute of 4K at 60 fps is about 400 MB, so a few repeated takes can outweigh hundreds of photos.",
        "The Duplicates album in Photos (Albums > Utilities) handles identical copies; separate takes of the same moment are different files and are not listed there.",
        "DiskMop compares three frames of each video, at 10%, 50% and 90% of its length; if any one of them differs, the videos are not grouped.",
        "Videos are only compared with others recorded within about half an hour and of similar length, which keeps different moments of the same event apart.",
        "In each group the suggested keeper is a favourite or edited video first, then the highest resolution and the longest take; nothing is selected for deletion.",
        "Deleted videos stay in Recently Deleted for 30 days, so empty that album to get the space back.",
      ],
      dataTable: {
        caption:
          "Approximate size of one minute of iPhone video (Apple's estimates)",
        columns: [
          "Recording format",
          "Per minute",
          "Three takes of 30 seconds",
        ],
        rows: [
          ["720p HD at 30 fps", "About 45 MB", "About 70 MB"],
          ["1080p HD at 30 fps", "About 60 MB", "About 90 MB"],
          ["4K at 30 fps", "About 170 MB", "About 255 MB"],
          ["4K at 60 fps", "About 400 MB", "About 600 MB"],
        ],
      },
      howTo: {
        name: "Find and delete similar videos on iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Merge exact copies first",
            text: "Open Photos > Albums > Utilities > Duplicates and merge the identical copies Apple has found. This is free and keeps the best version.",
          },
          {
            name: "Scan for similar videos",
            text: "Open DiskMop and let the scan finish. Videos stored on the phone are compared frame by frame on the device; the Similar videos card appears on the home screen when groups are found.",
          },
          {
            name: "Compare the takes",
            text: "Open a group. The suggested keeper is marked; touch and hold a video to preview it and compare it with the others before deciding.",
          },
          {
            name: "Delete the extra takes",
            text: "Tick the takes you do not need and delete them. iOS asks for confirmation, and the videos go to Recently Deleted.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Open Photos > Albums > Recently Deleted, tap Select and Delete All to free the space now.",
          },
        ],
      },
      sections: [
        {
          title: "Why Repeated Videos Cost More Than Repeated Photos",
          content: [
            "With photos, a few extra attempts cost a few megabytes. With video, every extra take is a full recording. Apple's own estimates put one minute of 1080p at 30 frames per second at about 60 MB and one minute of 4K at 60 frames per second at about 400 MB. Three 30-second takes of the same moment in 4K can therefore take more space than a few hundred ordinary photos.",
            "Repeated takes are common. People restart a recording because someone laughed, because the camera started too late or because they want a better angle. Every one of those attempts stays in the library, syncs to iCloud Photos and shows up in Memories, and almost nobody goes back to delete the weaker ones.",
            "That is why videos are usually the fastest way to free real space. Our guide on [why deleting photos does not free up iPhone storage](/blog/iphone-storage-full) shows how a few large videos often outweigh everything else in Photos.",
          ],
        },
        {
          title: "What the Photos App Already Finds",
          content: [
            "Since iOS 16, Photos scans the library in the background and lists identical items under Albums > Utilities > Duplicates. Merging keeps the highest-quality version and combines the metadata, so it is a safe first step for copies that were saved twice, for example from Messages or AirDrop.",
            "Separate takes are a different matter. Two recordings of the same scene are two different files with different lengths, different first frames and different moments of sound, so a duplicate check, which looks for the same content, does not list them. Photos also offers Albums > Media Types > Videos, where you can browse every video, but it is not sorted by similarity.",
            "The Videos album is ordered by date rather than by size, which makes finding the heaviest clips harder than it should be. A dedicated list of large videos, with their sizes, solves that part; a similarity comparison solves the repeated takes.",
          ],
        },
        {
          title: "How Similar Videos Are Found on the Device",
          content: [
            "DiskMop for iPhone compares videos the way it compares photos, by what they look like. From each video stored on the phone it takes three small frames, at 10%, 50% and 90% of the length, and turns each into a visual fingerprint with Apple's Vision framework. Two videos are only considered similar if all three pairs of frames are close; a single frame that differs, such as a car interior in one clip and a road in the other, keeps them apart.",
            "Two more checks prevent false matches. Videos must have been recorded within about half an hour of each other, which is where repeated takes live, and their lengths may differ by at most one and a half times. Different songs at the same concert or different moments of the same holiday therefore stay in separate groups, even though they look alike.",
            "Videos that exist only in iCloud are not downloaded for the comparison, which saves your mobile data and time; the screen says how many were skipped. Everything else happens on the iPhone with Apple's frameworks. DiskMop has no server and no account, and nothing is uploaded.",
          ],
        },
        {
          title: "Choosing the Take to Keep",
          content: [
            "In every group DiskMop marks one video to keep. A video you marked as a favourite comes first, then one you edited, then the take with the highest resolution and, if they are equal, the longest one. Nothing is selected for deletion: you open the group, touch and hold to preview the clips, and tick the takes you do not need.",
            "Sometimes the right answer is to keep one long video but make it smaller. DiskMop also lists large videos and videos worth shrinking, and its Tools can save a smaller copy of any video, with a preview of how small it will get, while the original goes to Recently Deleted. Our guide on [reducing video size on iPhone](/blog/reduce-video-size-iphone) explains the quality settings.",
            "Finish in Recently Deleted, where removed videos still count against your storage for 30 days. Scanning is free in DiskMop; without a subscription you can delete up to five items a day, and DiskMop Pro, a monthly subscription with a 7-day free trial, removes the limit and unlocks shrinking. For repeated photos, the same approach is described in [finding duplicate and similar photos on iPhone](/blog/find-duplicate-similar-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "Does the iPhone Duplicates album find duplicate videos?",
          answer:
            "It lists identical copies. Separate recordings of the same moment are different files and do not appear there; finding them needs a comparison of what the videos show.",
        },
        {
          question: "How does DiskMop decide two videos are similar?",
          answer:
            "It compares visual fingerprints of three frames from each video, at 10%, 50% and 90% of the length. All three must be close, the videos must be recorded within about half an hour of each other, and their lengths may differ by at most 1.5 times.",
        },
        {
          question: "Which video does DiskMop suggest keeping?",
          answer:
            "A favourite first, then an edited video, then the highest resolution and, if equal, the longest take. You can keep any other video instead; nothing is selected for deletion.",
        },
        {
          question: "Why were some videos not compared?",
          answer:
            "Videos stored only in iCloud are not downloaded for the comparison, to save data and time. DiskMop shows how many were skipped.",
        },
        {
          question: "Are my videos uploaded for the comparison?",
          answer:
            "No. Frames are analysed on the iPhone with Apple's Vision framework. DiskMop has no server and its App Store privacy label states Data Not Collected.",
        },
      ],
      verdict: [
        "If you need space quickly, look at videos before photos. Merge exact copies with Apple's Duplicates album, then find the repeated takes that only a visual comparison can see, keep the best one and empty Recently Deleted.",
        "DiskMop for iPhone compares three frames of every video on the device, groups only takes of the same moment, suggests the best one and selects nothing for deletion. Scanning is free, up to five items a day can be deleted for free, and DiskMop Pro, with a 7-day free trial, removes the limit and adds video shrinking.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Doppelte und ähnliche Videos auf dem iPhone finden (und die beste Aufnahme behalten)",
      metaDescription:
        "Drei Aufnahmen desselben Clips können mehr Platz kosten als tausend Fotos. So finden Sie ähnliche Videos auf dem iPhone, wählen die beste und geben Gigabytes frei.",
      subtitle:
        "Warum wiederholte Clips die schwerste Unordnung in der Mediathek sind und wie ein Videovergleich ohne Upload funktioniert",
      intro: [
        "Kurze Antwort: Apples Album Duplikate in Fotos führt identische Kopien zusammen, behandelt aber zwei getrennte Aufnahmen desselben Moments nicht als Duplikate. Wer ein Geburtstagsständchen zweimal, einen Sonnenuntergang dreimal oder die ersten Schritte eines Kindes aus mehreren Winkeln filmt, erzeugt Videos, die sich ähneln, aber verschiedene Dateien sind, und jedes kann Hunderte Megabyte belegen. Sie zu finden erfordert einen Vergleich dessen, was die Videos zeigen, nicht ihrer Dateien.",
        "Dieser Ratgeber erklärt, warum wiederholte Clips mehr ins Gewicht fallen als wiederholte Fotos, was die Fotos-App bereits bietet, wie DiskMop für iPhone Videos auf dem Gerät vergleicht und welche Aufnahme es zum Behalten vorschlägt, und was Sie mit einem langen Video tun, das Sie behalten möchten, aber nicht in voller Größe.",
      ],
      keyTakeaways: [
        "Video ist auf den meisten iPhones das Schwerste: Eine Minute 4K mit 60 fps sind etwa 400 MB, sodass wenige wiederholte Aufnahmen Hunderte Fotos aufwiegen können.",
        "Das Album Duplikate in Fotos (Alben > Dienstprogramme) behandelt identische Kopien; getrennte Aufnahmen desselben Moments sind verschiedene Dateien und erscheinen dort nicht.",
        "DiskMop vergleicht drei Bilder jedes Videos bei 10 %, 50 % und 90 % seiner Länge; weicht auch nur eines ab, werden die Videos nicht gruppiert.",
        "Verglichen werden nur Videos, die innerhalb von etwa einer halben Stunde und mit ähnlicher Länge aufgenommen wurden; so bleiben verschiedene Momente desselben Ereignisses getrennt.",
        "In jeder Gruppe wird zuerst ein Favorit oder bearbeitetes Video vorgeschlagen, dann die höchste Auflösung und die längste Aufnahme; nichts wird zum Löschen ausgewählt.",
        "Gelöschte Videos bleiben 30 Tage in „Zuletzt gelöscht“; leeren Sie dieses Album, um den Platz zurückzubekommen.",
      ],
      dataTable: {
        caption:
          "Ungefähre Größe einer Minute iPhone-Video (Apples Schätzungen)",
        columns: [
          "Aufnahmeformat",
          "Pro Minute",
          "Drei Aufnahmen à 30 Sekunden",
        ],
        rows: [
          ["720p HD mit 30 fps", "Etwa 45 MB", "Etwa 70 MB"],
          ["1080p HD mit 30 fps", "Etwa 60 MB", "Etwa 90 MB"],
          ["4K mit 30 fps", "Etwa 170 MB", "Etwa 255 MB"],
          ["4K mit 60 fps", "Etwa 400 MB", "Etwa 600 MB"],
        ],
      },
      howTo: {
        name: "Ähnliche Videos auf dem iPhone finden und löschen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Zuerst exakte Kopien zusammenführen",
            text: "Öffnen Sie Fotos > Alben > Dienstprogramme > Duplikate und führen Sie die identischen Kopien zusammen, die Apple gefunden hat. Das ist kostenlos und behält die beste Version.",
          },
          {
            name: "Nach ähnlichen Videos scannen",
            text: "Öffnen Sie DiskMop und lassen Sie den Scan durchlaufen. Videos auf dem Telefon werden auf dem Gerät Bild für Bild verglichen; werden Gruppen gefunden, erscheint auf dem Startbildschirm die Karte Ähnliche Videos.",
          },
          {
            name: "Die Aufnahmen vergleichen",
            text: "Öffnen Sie eine Gruppe. Der Vorschlag zum Behalten ist markiert; halten Sie ein Video gedrückt, um es in der Vorschau anzusehen und mit den anderen zu vergleichen.",
          },
          {
            name: "Überzählige Aufnahmen löschen",
            text: "Haken Sie die Aufnahmen ab, die Sie nicht brauchen, und löschen Sie sie. iOS bittet um Bestätigung, und die Videos landen in „Zuletzt gelöscht“.",
          },
          {
            name: "„Zuletzt gelöscht“ leeren",
            text: "Öffnen Sie Fotos > Alben > Zuletzt gelöscht, tippen Sie auf Auswählen und Alle löschen, um den Platz sofort freizugeben.",
          },
        ],
      },
      sections: [
        {
          title: "Warum wiederholte Videos mehr kosten als wiederholte Fotos",
          content: [
            "Bei Fotos kosten ein paar zusätzliche Versuche ein paar Megabyte. Bei Video ist jede zusätzliche Aufnahme eine vollständige Aufzeichnung. Apples eigene Schätzungen nennen für eine Minute 1080p mit 30 Bildern pro Sekunde etwa 60 MB und für eine Minute 4K mit 60 Bildern pro Sekunde etwa 400 MB. Drei 30-Sekunden-Aufnahmen desselben Moments in 4K können also mehr Platz belegen als einige hundert gewöhnliche Fotos.",
            "Wiederholte Aufnahmen sind häufig. Man startet neu, weil jemand gelacht hat, weil die Kamera zu spät lief oder weil man einen besseren Winkel will. Jeder dieser Versuche bleibt in der Mediathek, wird mit iCloud-Fotos synchronisiert und taucht in Rückblicken auf, und kaum jemand geht zurück, um die schwächeren zu löschen.",
            "Deshalb sind Videos meist der schnellste Weg zu echtem Platz. Unser Ratgeber, [warum Fotos löschen auf dem iPhone keinen Speicher freigibt](/blog/iphone-storage-full), zeigt, wie wenige große Videos oft alles andere in Fotos aufwiegen.",
          ],
        },
        {
          title: "Was die Fotos-App bereits findet",
          content: [
            "Seit iOS 16 durchsucht Fotos die Mediathek im Hintergrund und listet identische Objekte unter Alben > Dienstprogramme > Duplikate auf. Beim Zusammenführen bleibt die Version mit der höchsten Qualität erhalten und die Metadaten werden kombiniert; für Kopien, die etwa aus Nachrichten oder per AirDrop doppelt gespeichert wurden, ist das ein sicherer erster Schritt.",
            "Getrennte Aufnahmen sind etwas anderes. Zwei Aufzeichnungen derselben Szene sind zwei verschiedene Dateien mit unterschiedlicher Länge, anderen ersten Bildern und anderen Tonmomenten, daher listet eine Duplikatprüfung, die nach gleichem Inhalt sucht, sie nicht auf. Fotos bietet außerdem Alben > Medienarten > Videos, wo Sie alle Videos durchsehen können, aber nicht nach Ähnlichkeit sortiert.",
            "Das Album Videos ist nach Datum statt nach Größe geordnet, was das Finden der schwersten Clips unnötig schwer macht. Eine eigene Liste großer Videos mit ihren Größen löst diesen Teil; ein Ähnlichkeitsvergleich löst die wiederholten Aufnahmen.",
          ],
        },
        {
          title: "So werden ähnliche Videos auf dem Gerät gefunden",
          content: [
            "DiskMop für iPhone vergleicht Videos so, wie es Fotos vergleicht: nach ihrem Aussehen. Aus jedem Video auf dem Telefon nimmt es drei kleine Bilder bei 10 %, 50 % und 90 % der Länge und macht aus jedem mit Apples Vision-Framework einen visuellen Fingerabdruck. Zwei Videos gelten nur dann als ähnlich, wenn alle drei Bildpaare nah beieinander liegen; ein einziges abweichendes Bild, etwa ein Autoinnenraum im einen Clip und eine Straße im anderen, hält sie auseinander.",
            "Zwei weitere Prüfungen verhindern Fehltreffer. Die Videos müssen innerhalb von etwa einer halben Stunde aufgenommen worden sein, denn dort entstehen wiederholte Aufnahmen, und ihre Länge darf sich höchstens um das Anderthalbfache unterscheiden. Verschiedene Songs desselben Konzerts oder verschiedene Momente desselben Urlaubs bleiben so in getrennten Gruppen, auch wenn sie sich ähneln.",
            "Videos, die nur in iCloud liegen, werden für den Vergleich nicht geladen, was mobile Daten und Zeit spart; der Bildschirm zeigt, wie viele übersprungen wurden. Alles andere geschieht mit Apples Frameworks auf dem iPhone. DiskMop hat weder Server noch Benutzerkonto, und nichts wird hochgeladen.",
          ],
        },
        {
          title: "Die Aufnahme wählen, die bleibt",
          content: [
            "In jeder Gruppe markiert DiskMop ein Video zum Behalten. Ein als Favorit markiertes Video kommt zuerst, dann ein bearbeitetes, dann die Aufnahme mit der höchsten Auflösung und bei Gleichstand die längste. Nichts wird zum Löschen ausgewählt: Sie öffnen die Gruppe, halten zum Ansehen gedrückt und haken die Aufnahmen ab, die Sie nicht brauchen.",
            "Manchmal ist die richtige Antwort, ein langes Video zu behalten, aber kleiner zu machen. DiskMop listet auch große Videos und Videos, die sich verkleinern lassen, und seine Werkzeuge können von jedem Video eine kleinere Kopie speichern, mit einer Vorschau, wie klein es wird, während das Original nach „Zuletzt gelöscht“ geht. Unser Ratgeber zum [Verkleinern von Videos auf dem iPhone](/blog/reduce-video-size-iphone) erklärt die Qualitätsstufen.",
            "Enden Sie in „Zuletzt gelöscht“, wo entfernte Videos 30 Tage lang weiter zum Speicher zählen. Der Scan ist in DiskMop kostenlos; ohne Abo können Sie bis zu fünf Objekte pro Tag löschen, und DiskMop Pro, ein Monatsabo mit 7-tägiger Gratis-Testphase, hebt das Limit auf und schaltet das Verkleinern frei. Für wiederholte Fotos beschreibt [Doppelte und ähnliche Fotos auf dem iPhone finden](/blog/find-duplicate-similar-photos-iphone) denselben Ansatz.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Findet das Album Duplikate auf dem iPhone doppelte Videos?",
          answer:
            "Es listet identische Kopien. Getrennte Aufzeichnungen desselben Moments sind verschiedene Dateien und erscheinen dort nicht; sie zu finden erfordert einen Vergleich dessen, was die Videos zeigen.",
        },
        {
          question: "Wie entscheidet DiskMop, dass zwei Videos ähnlich sind?",
          answer:
            "Es vergleicht visuelle Fingerabdrücke von drei Bildern jedes Videos bei 10 %, 50 % und 90 % der Länge. Alle drei müssen nah beieinander liegen, die Videos müssen innerhalb von etwa einer halben Stunde entstanden sein, und ihre Länge darf sich höchstens um das 1,5-Fache unterscheiden.",
        },
        {
          question: "Welches Video schlägt DiskMop zum Behalten vor?",
          answer:
            "Zuerst einen Favoriten, dann ein bearbeitetes Video, dann die höchste Auflösung und bei Gleichstand die längste Aufnahme. Sie können stattdessen jedes andere Video behalten; nichts wird zum Löschen ausgewählt.",
        },
        {
          question: "Warum wurden einige Videos nicht verglichen?",
          answer:
            "Videos, die nur in iCloud liegen, werden für den Vergleich nicht geladen, um Daten und Zeit zu sparen. DiskMop zeigt, wie viele übersprungen wurden.",
        },
        {
          question: "Werden meine Videos für den Vergleich hochgeladen?",
          answer:
            "Nein. Die Bilder werden auf dem iPhone mit Apples Vision-Framework analysiert. DiskMop hat keinen Server, und sein Datenschutzetikett im App Store lautet „Keine Daten erfasst“.",
        },
      ],
      verdict: [
        "Wenn Sie schnell Platz brauchen, sehen Sie sich Videos vor Fotos an. Führen Sie exakte Kopien mit Apples Album Duplikate zusammen, finden Sie dann die wiederholten Aufnahmen, die nur ein visueller Vergleich erkennt, behalten Sie die beste und leeren Sie „Zuletzt gelöscht“.",
        "DiskMop für iPhone vergleicht drei Bilder jedes Videos auf dem Gerät, gruppiert nur Aufnahmen desselben Moments, schlägt die beste vor und wählt nichts zum Löschen aus. Der Scan ist kostenlos, bis zu fünf Objekte pro Tag lassen sich gratis löschen, und DiskMop Pro mit 7-tägiger Gratis-Testphase hebt das Limit auf und ergänzt das Verkleinern von Videos.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Trouver les vidéos en double et similaires sur iPhone (et garder la meilleure prise)",
      metaDescription:
        "Trois prises du même clip peuvent coûter plus que mille photos. Trouver les vidéos similaires sur iPhone, garder la meilleure prise et libérer des Go sans risque.",
      subtitle:
        "Pourquoi les clips répétés sont le désordre le plus lourd d'une photothèque, et comment comparer des vidéos sans rien envoyer",
      intro: [
        "Réponse courte : l'album Doublons de Photos fusionne les copies identiques, mais il ne considère pas deux prises distinctes d'un même moment comme des doublons. Filmer deux fois une chanson d'anniversaire, trois fois un coucher de soleil ou les premiers pas d'un enfant sous plusieurs angles produit des vidéos qui se ressemblent mais sont des fichiers différents, et chacune peut peser des centaines de mégaoctets. Pour les trouver, il faut comparer ce que montrent les vidéos, pas leurs fichiers.",
        "Ce guide explique pourquoi les clips répétés comptent davantage que les photos répétées, ce que l'app Photos propose déjà, comment DiskMop pour iPhone compare les vidéos sur l'appareil et quelle prise il suggère de garder, et que faire d'une longue vidéo que vous voulez conserver, mais pas en taille réelle.",
      ],
      keyTakeaways: [
        "La vidéo est ce qui pèse le plus sur la plupart des iPhone : une minute de 4K à 60 i/s fait environ 400 Mo, si bien que quelques prises répétées peuvent peser plus que des centaines de photos.",
        "L'album Doublons de Photos (Albums > Utilitaires) traite les copies identiques ; des prises distinctes d'un même moment sont des fichiers différents et n'y figurent pas.",
        "DiskMop compare trois images de chaque vidéo, à 10 %, 50 % et 90 % de sa durée ; si une seule diffère, les vidéos ne sont pas regroupées.",
        "Les vidéos ne sont comparées qu'à celles filmées dans la même demi-heure environ et de durée proche, ce qui sépare les différents moments d'un même événement.",
        "Dans chaque groupe, la vidéo suggérée est d'abord une favorite ou une vidéo retouchée, puis la plus haute résolution et la prise la plus longue ; rien n'est sélectionné pour suppression.",
        "Les vidéos supprimées restent 30 jours dans Supprimés récemment ; videz cet album pour récupérer l'espace.",
      ],
      dataTable: {
        caption:
          "Taille approximative d'une minute de vidéo iPhone (estimations d'Apple)",
        columns: [
          "Format d'enregistrement",
          "Par minute",
          "Trois prises de 30 secondes",
        ],
        rows: [
          ["720p HD à 30 i/s", "Environ 45 Mo", "Environ 70 Mo"],
          ["1080p HD à 30 i/s", "Environ 60 Mo", "Environ 90 Mo"],
          ["4K à 30 i/s", "Environ 170 Mo", "Environ 255 Mo"],
          ["4K à 60 i/s", "Environ 400 Mo", "Environ 600 Mo"],
        ],
      },
      howTo: {
        name: "Trouver et supprimer les vidéos similaires sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Fusionner d'abord les copies exactes",
            text: "Ouvrez Photos > Albums > Utilitaires > Doublons et fusionnez les copies identiques trouvées par Apple. C'est gratuit et la meilleure version est conservée.",
          },
          {
            name: "Rechercher les vidéos similaires",
            text: "Ouvrez DiskMop et laissez l'analyse se terminer. Les vidéos présentes sur le téléphone sont comparées image par image sur l'appareil ; la carte Vidéos similaires apparaît sur l'écran d'accueil quand des groupes sont trouvés.",
          },
          {
            name: "Comparer les prises",
            text: "Ouvrez un groupe. La vidéo suggérée est marquée ; maintenez le doigt sur une vidéo pour la prévisualiser et la comparer aux autres avant de décider.",
          },
          {
            name: "Supprimer les prises en trop",
            text: "Cochez les prises dont vous n'avez pas besoin et supprimez-les. iOS demande une confirmation, et les vidéos partent dans Supprimés récemment.",
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
            "Pourquoi les vidéos répétées coûtent plus cher que les photos répétées",
          content: [
            "Pour les photos, quelques essais de plus coûtent quelques mégaoctets. Pour la vidéo, chaque prise supplémentaire est un enregistrement complet. Selon les estimations d'Apple, une minute de 1080p à 30 images par seconde pèse environ 60 Mo et une minute de 4K à 60 images par seconde environ 400 Mo. Trois prises de 30 secondes du même moment en 4K peuvent donc occuper plus d'espace que quelques centaines de photos ordinaires.",
            "Les prises répétées sont fréquentes. On relance un enregistrement parce que quelqu'un a ri, parce que la caméra a démarré trop tard ou pour trouver un meilleur angle. Chacun de ces essais reste dans la photothèque, se synchronise avec Photos iCloud et apparaît dans les Souvenirs, et presque personne ne revient supprimer les moins bons.",
            "C'est pourquoi les vidéos sont généralement le moyen le plus rapide de libérer un espace réel. Notre guide sur [pourquoi supprimer des photos ne libère pas d'espace sur iPhone](/blog/iphone-storage-full) montre comment quelques grosses vidéos pèsent souvent plus que tout le reste de Photos.",
          ],
        },
        {
          title: "Ce que l'app Photos trouve déjà",
          content: [
            "Depuis iOS 16, Photos analyse la photothèque en arrière-plan et liste les éléments identiques dans Albums > Utilitaires > Doublons. La fusion conserve la version de meilleure qualité et combine les métadonnées ; c'est donc une première étape sûre pour les copies enregistrées deux fois, par exemple depuis Messages ou AirDrop.",
            "Les prises distinctes, c'est autre chose. Deux enregistrements de la même scène sont deux fichiers différents, avec des durées, des premières images et des sons différents ; une vérification de doublons, qui cherche un contenu identique, ne les liste donc pas. Photos propose aussi Albums > Types de médias > Vidéos pour parcourir toutes les vidéos, mais sans tri par similarité.",
            "L'album Vidéos est classé par date et non par taille, ce qui rend la recherche des clips les plus lourds plus difficile qu'elle ne devrait l'être. Une liste dédiée des vidéos volumineuses, avec leur taille, règle cette partie ; une comparaison de similarité règle les prises répétées.",
          ],
        },
        {
          title: "Comment les vidéos similaires sont trouvées sur l'appareil",
          content: [
            "DiskMop pour iPhone compare les vidéos comme il compare les photos : selon leur apparence. De chaque vidéo présente sur le téléphone, il extrait trois petites images, à 10 %, 50 % et 90 % de la durée, et transforme chacune en empreinte visuelle avec le framework Vision d'Apple. Deux vidéos ne sont jugées similaires que si les trois paires d'images sont proches ; une seule image différente, comme l'intérieur d'une voiture dans un clip et une route dans l'autre, les sépare.",
            "Deux vérifications supplémentaires évitent les faux rapprochements. Les vidéos doivent avoir été filmées à environ une demi-heure d'intervalle au plus, là où naissent les prises répétées, et leurs durées ne peuvent pas différer de plus d'une fois et demie. Différentes chansons d'un même concert ou différents moments d'un même voyage restent ainsi dans des groupes séparés, même s'ils se ressemblent.",
            "Les vidéos stockées uniquement dans iCloud ne sont pas téléchargées pour la comparaison, ce qui économise vos données mobiles et du temps ; l'écran indique combien ont été ignorées. Tout le reste se passe sur l'iPhone avec les frameworks d'Apple. DiskMop n'a ni serveur ni compte, et rien n'est envoyé.",
          ],
        },
        {
          title: "Choisir la prise à garder",
          content: [
            "Dans chaque groupe, DiskMop marque une vidéo à garder. Une vidéo marquée comme favorite passe en premier, puis une vidéo retouchée, puis la prise de plus haute résolution et, à égalité, la plus longue. Rien n'est sélectionné pour suppression : vous ouvrez le groupe, maintenez le doigt pour prévisualiser les clips et cochez les prises dont vous n'avez pas besoin.",
            "Parfois, la bonne réponse est de garder une longue vidéo tout en la réduisant. DiskMop liste aussi les vidéos volumineuses et les vidéos à réduire, et ses Outils peuvent enregistrer une copie plus légère de n'importe quelle vidéo, avec un aperçu de la taille obtenue, tandis que l'original part dans Supprimés récemment. Notre guide pour [réduire la taille d'une vidéo sur iPhone](/blog/reduce-video-size-iphone) explique les réglages de qualité.",
            "Terminez par Supprimés récemment, où les vidéos retirées comptent encore dans votre stockage pendant 30 jours. L'analyse est gratuite dans DiskMop ; sans abonnement, vous pouvez supprimer jusqu'à cinq éléments par jour, et DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours, supprime la limite et débloque la réduction. Pour les photos répétées, la même approche est décrite dans [trouver les photos en double et similaires sur iPhone](/blog/find-duplicate-similar-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question:
            "L'album Doublons de l'iPhone trouve-t-il les vidéos en double ?",
          answer:
            "Il liste les copies identiques. Des enregistrements distincts d'un même moment sont des fichiers différents et n'y apparaissent pas ; pour les trouver, il faut comparer ce que montrent les vidéos.",
        },
        {
          question:
            "Comment DiskMop décide-t-il que deux vidéos sont similaires ?",
          answer:
            "Il compare les empreintes visuelles de trois images de chaque vidéo, à 10 %, 50 % et 90 % de la durée. Les trois doivent être proches, les vidéos doivent avoir été filmées à environ une demi-heure d'intervalle au plus, et leurs durées ne peuvent pas différer de plus de 1,5 fois.",
        },
        {
          question: "Quelle vidéo DiskMop suggère-t-il de garder ?",
          answer:
            "D'abord une favorite, puis une vidéo retouchée, puis la plus haute résolution et, à égalité, la prise la plus longue. Vous pouvez garder n'importe quelle autre vidéo à la place ; rien n'est sélectionné pour suppression.",
        },
        {
          question: "Pourquoi certaines vidéos n'ont-elles pas été comparées ?",
          answer:
            "Les vidéos stockées uniquement dans iCloud ne sont pas téléchargées pour la comparaison, afin d'économiser données et temps. DiskMop indique combien ont été ignorées.",
        },
        {
          question: "Mes vidéos sont-elles envoyées pour la comparaison ?",
          answer:
            "Non. Les images sont analysées sur l'iPhone avec le framework Vision d'Apple. DiskMop n'a pas de serveur et son étiquette de confidentialité sur l'App Store indique Données non collectées.",
        },
      ],
      verdict: [
        "Si vous avez besoin d'espace rapidement, regardez les vidéos avant les photos. Fusionnez les copies exactes avec l'album Doublons d'Apple, puis trouvez les prises répétées que seule une comparaison visuelle peut voir, gardez la meilleure et videz Supprimés récemment.",
        "DiskMop pour iPhone compare trois images de chaque vidéo sur l'appareil, ne regroupe que les prises d'un même moment, suggère la meilleure et ne sélectionne rien pour suppression. L'analyse est gratuite, jusqu'à cinq éléments par jour peuvent être supprimés gratuitement, et DiskMop Pro, avec un essai gratuit de 7 jours, supprime la limite et ajoute la réduction des vidéos.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo encontrar vídeos duplicados y similares en iPhone (y quedarte con la mejor toma)",
      metaDescription:
        "Tres tomas del mismo clip pueden ocupar más que mil fotos. Cómo encontrar vídeos similares en iPhone, elegir la mejor toma y liberar gigas con seguridad.",
      subtitle:
        "Por qué los clips repetidos son el desorden más pesado de la fototeca y cómo se comparan vídeos sin subir nada",
      intro: [
        "Respuesta corta: el álbum Duplicados de Fotos combina las copias idénticas, pero no considera duplicados dos tomas distintas del mismo momento. Grabar dos veces una canción de cumpleaños, tres veces una puesta de sol o los primeros pasos de un niño desde varios ángulos produce vídeos que se parecen pero son archivos distintos, y cada uno puede ocupar cientos de megas. Para encontrarlos hay que comparar lo que muestran los vídeos, no sus archivos.",
        "Esta guía explica por qué los clips repetidos importan más que las fotos repetidas, qué ofrece ya la app Fotos, cómo DiskMop para iPhone compara vídeos en el dispositivo y qué toma sugiere conservar, y qué hacer con un vídeo largo que quieres conservar, pero no a tamaño completo.",
      ],
      keyTakeaways: [
        "El vídeo es lo que más pesa en la mayoría de los iPhone: un minuto de 4K a 60 fps ocupa unos 400 MB, así que unas pocas tomas repetidas pueden pesar más que cientos de fotos.",
        "El álbum Duplicados de Fotos (Álbumes > Utilidades) gestiona las copias idénticas; las tomas distintas de un mismo momento son archivos diferentes y no aparecen ahí.",
        "DiskMop compara tres fotogramas de cada vídeo, al 10 %, al 50 % y al 90 % de su duración; si uno solo difiere, los vídeos no se agrupan.",
        "Los vídeos solo se comparan con otros grabados en torno a la misma media hora y de duración parecida, lo que separa los distintos momentos de un mismo evento.",
        "En cada grupo se sugiere primero un favorito o un vídeo editado, luego la mayor resolución y la toma más larga; no se selecciona nada para borrar.",
        "Los vídeos borrados se quedan 30 días en Eliminados recientemente; vacía ese álbum para recuperar el espacio.",
      ],
      dataTable: {
        caption:
          "Tamaño aproximado de un minuto de vídeo del iPhone (estimaciones de Apple)",
        columns: [
          "Formato de grabación",
          "Por minuto",
          "Tres tomas de 30 segundos",
        ],
        rows: [
          ["720p HD a 30 fps", "Unos 45 MB", "Unos 70 MB"],
          ["1080p HD a 30 fps", "Unos 60 MB", "Unos 90 MB"],
          ["4K a 30 fps", "Unos 170 MB", "Unos 255 MB"],
          ["4K a 60 fps", "Unos 400 MB", "Unos 600 MB"],
        ],
      },
      howTo: {
        name: "Encontrar y borrar vídeos similares en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Combina primero las copias exactas",
            text: "Abre Fotos > Álbumes > Utilidades > Duplicados y combina las copias idénticas que ha encontrado Apple. Es gratis y conserva la mejor versión.",
          },
          {
            name: "Busca vídeos similares",
            text: "Abre DiskMop y deja que termine el análisis. Los vídeos guardados en el teléfono se comparan fotograma a fotograma en el dispositivo; cuando aparecen grupos, la tarjeta Vídeos similares se muestra en la pantalla de inicio.",
          },
          {
            name: "Compara las tomas",
            text: "Abre un grupo. La toma sugerida está marcada; mantén pulsado un vídeo para previsualizarlo y compararlo con los demás antes de decidir.",
          },
          {
            name: "Borra las tomas que sobran",
            text: "Marca las tomas que no necesitas y bórralas. iOS pide confirmación y los vídeos van a Eliminados recientemente.",
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
            "Por qué los vídeos repetidos cuestan más que las fotos repetidas",
          content: [
            "Con las fotos, unos cuantos intentos de más cuestan unos pocos megas. Con el vídeo, cada toma extra es una grabación completa. Según las propias estimaciones de Apple, un minuto de 1080p a 30 fotogramas por segundo ocupa unos 60 MB y un minuto de 4K a 60 fotogramas por segundo unos 400 MB. Tres tomas de 30 segundos del mismo momento en 4K pueden ocupar más que unos cientos de fotos normales.",
            "Las tomas repetidas son habituales. Se vuelve a grabar porque alguien se rió, porque la cámara empezó tarde o para buscar un ángulo mejor. Cada uno de esos intentos se queda en la fototeca, se sincroniza con Fotos en iCloud y aparece en Recuerdos, y casi nadie vuelve para borrar los peores.",
            "Por eso los vídeos suelen ser la forma más rápida de liberar espacio de verdad. Nuestra guía sobre [por qué borrar fotos no libera espacio en el iPhone](/blog/iphone-storage-full) muestra cómo unos pocos vídeos grandes suelen pesar más que todo lo demás en Fotos.",
          ],
        },
        {
          title: "Lo que la app Fotos ya encuentra",
          content: [
            "Desde iOS 16, Fotos analiza la fototeca en segundo plano y muestra los elementos idénticos en Álbumes > Utilidades > Duplicados. Al combinarlos se conserva la versión de mayor calidad y se reúnen los metadatos, así que es un primer paso seguro para las copias guardadas dos veces, por ejemplo desde Mensajes o AirDrop.",
            "Las tomas distintas son otra cosa. Dos grabaciones de la misma escena son dos archivos diferentes, con duraciones, primeros fotogramas y momentos de sonido distintos, así que una comprobación de duplicados, que busca el mismo contenido, no las muestra. Fotos también ofrece Álbumes > Tipos de contenido > Vídeos para ver todos los vídeos, pero no los ordena por parecido.",
            "El álbum Vídeos está ordenado por fecha y no por tamaño, lo que hace más difícil de lo necesario encontrar los clips más pesados. Una lista propia de vídeos grandes, con sus tamaños, resuelve esa parte; una comparación de similitud resuelve las tomas repetidas.",
          ],
        },
        {
          title: "Cómo se encuentran los vídeos similares en el dispositivo",
          content: [
            "DiskMop para iPhone compara los vídeos igual que las fotos: por cómo se ven. De cada vídeo guardado en el teléfono toma tres fotogramas pequeños, al 10 %, al 50 % y al 90 % de la duración, y convierte cada uno en una huella visual con el framework Vision de Apple. Dos vídeos solo se consideran similares si las tres parejas de fotogramas se parecen; un solo fotograma distinto, como el interior de un coche en un clip y una carretera en el otro, los mantiene separados.",
            "Dos comprobaciones más evitan falsas coincidencias. Los vídeos deben haberse grabado con una diferencia de una media hora como mucho, que es donde están las tomas repetidas, y sus duraciones no pueden diferir más de una vez y media. Así, distintas canciones de un mismo concierto o distintos momentos de unas mismas vacaciones quedan en grupos separados aunque se parezcan.",
            "Los vídeos guardados solo en iCloud no se descargan para la comparación, lo que ahorra datos móviles y tiempo; la pantalla indica cuántos se han omitido. Todo lo demás ocurre en el iPhone con los frameworks de Apple. DiskMop no tiene servidor ni cuenta, y no se sube nada.",
          ],
        },
        {
          title: "Elegir la toma que se queda",
          content: [
            "En cada grupo, DiskMop marca un vídeo para conservar. Un vídeo marcado como favorito va primero, luego uno editado, después la toma de mayor resolución y, si empatan, la más larga. No se selecciona nada para borrar: abres el grupo, mantienes pulsado para previsualizar los clips y marcas las tomas que no necesitas.",
            "A veces lo correcto es conservar un vídeo largo pero hacerlo más pequeño. DiskMop también muestra los vídeos grandes y los que conviene reducir, y sus Herramientas pueden guardar una copia más pequeña de cualquier vídeo, con una vista previa de cuánto ocupará, mientras el original va a Eliminados recientemente. Nuestra guía para [reducir el tamaño de un vídeo en iPhone](/blog/reduce-video-size-iphone) explica los niveles de calidad.",
            "Termina en Eliminados recientemente, donde los vídeos quitados siguen contando en tu almacenamiento durante 30 días. El análisis es gratis en DiskMop; sin suscripción puedes borrar hasta cinco elementos al día, y DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita, elimina el límite y desbloquea la reducción. Para las fotos repetidas, el mismo enfoque se describe en [encontrar fotos duplicadas y similares en iPhone](/blog/find-duplicate-similar-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿El álbum Duplicados del iPhone encuentra vídeos duplicados?",
          answer:
            "Muestra las copias idénticas. Las grabaciones distintas de un mismo momento son archivos diferentes y no aparecen ahí; para encontrarlas hay que comparar lo que muestran los vídeos.",
        },
        {
          question: "¿Cómo decide DiskMop que dos vídeos son similares?",
          answer:
            "Compara las huellas visuales de tres fotogramas de cada vídeo, al 10 %, al 50 % y al 90 % de la duración. Los tres deben parecerse, los vídeos deben grabarse con una diferencia de una media hora como mucho y sus duraciones no pueden diferir más de 1,5 veces.",
        },
        {
          question: "¿Qué vídeo sugiere conservar DiskMop?",
          answer:
            "Primero un favorito, luego un vídeo editado, después la mayor resolución y, si empatan, la toma más larga. Puedes conservar cualquier otro vídeo en su lugar; no se selecciona nada para borrar.",
        },
        {
          question: "¿Por qué algunos vídeos no se compararon?",
          answer:
            "Los vídeos guardados solo en iCloud no se descargan para la comparación, para ahorrar datos y tiempo. DiskMop indica cuántos se omitieron.",
        },
        {
          question: "¿Se suben mis vídeos para compararlos?",
          answer:
            "No. Los fotogramas se analizan en el iPhone con el framework Vision de Apple. DiskMop no tiene servidor y su etiqueta de privacidad en el App Store indica Datos no recopilados.",
        },
      ],
      verdict: [
        "Si necesitas espacio rápido, mira los vídeos antes que las fotos. Combina las copias exactas con el álbum Duplicados de Apple, después encuentra las tomas repetidas que solo una comparación visual puede ver, quédate con la mejor y vacía Eliminados recientemente.",
        "DiskMop para iPhone compara tres fotogramas de cada vídeo en el dispositivo, agrupa solo las tomas de un mismo momento, sugiere la mejor y no selecciona nada para borrar. El análisis es gratis, se pueden borrar hasta cinco elementos al día sin coste y DiskMop Pro, con 7 días de prueba gratuita, elimina el límite y añade la reducción de vídeos.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come trovare video duplicati e simili su iPhone (e tenere la ripresa migliore)",
      metaDescription:
        "Tre riprese dello stesso clip possono occupare più di mille foto. Come trovare i video simili su iPhone, tenere la ripresa migliore e liberare gigabyte.",
      subtitle:
        "Perché i clip ripetuti sono il disordine più pesante della libreria e come si confrontano i video senza caricare nulla",
      intro: [
        "Risposta breve: l'album Duplicati di Foto unisce le copie identiche, ma non considera duplicate due riprese distinte dello stesso momento. Registrare due volte una canzone di compleanno, tre volte un tramonto o i primi passi di un bambino da più angolazioni produce video che si somigliano ma sono file diversi, e ognuno può occupare centinaia di megabyte. Per trovarli bisogna confrontare ciò che mostrano i video, non i loro file.",
        "Questa guida spiega perché i clip ripetuti contano più delle foto ripetute, cosa offre già l'app Foto, come DiskMop per iPhone confronta i video sul dispositivo e quale ripresa suggerisce di tenere, e cosa fare con un video lungo che vuoi conservare, ma non a grandezza piena.",
      ],
      keyTakeaways: [
        "Il video è la cosa più pesante sulla maggior parte degli iPhone: un minuto di 4K a 60 fps occupa circa 400 MB, quindi poche riprese ripetute possono pesare più di centinaia di foto.",
        "L'album Duplicati di Foto (Album > Utility) gestisce le copie identiche; riprese distinte dello stesso momento sono file diversi e non compaiono lì.",
        "DiskMop confronta tre fotogrammi di ogni video, al 10%, al 50% e al 90% della durata; se anche uno solo è diverso, i video non vengono raggruppati.",
        "I video vengono confrontati solo con quelli registrati entro circa mezz'ora e di durata simile, così i diversi momenti di uno stesso evento restano separati.",
        "In ogni gruppo viene suggerito prima un preferito o un video modificato, poi la risoluzione più alta e la ripresa più lunga; nulla viene selezionato per l'eliminazione.",
        "I video eliminati restano 30 giorni in Eliminati di recente; svuota quell'album per recuperare lo spazio.",
      ],
      dataTable: {
        caption:
          "Dimensione approssimativa di un minuto di video iPhone (stime di Apple)",
        columns: [
          "Formato di registrazione",
          "Al minuto",
          "Tre riprese da 30 secondi",
        ],
        rows: [
          ["720p HD a 30 fps", "Circa 45 MB", "Circa 70 MB"],
          ["1080p HD a 30 fps", "Circa 60 MB", "Circa 90 MB"],
          ["4K a 30 fps", "Circa 170 MB", "Circa 255 MB"],
          ["4K a 60 fps", "Circa 400 MB", "Circa 600 MB"],
        ],
      },
      howTo: {
        name: "Trovare ed eliminare i video simili su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Unisci prima le copie esatte",
            text: "Apri Foto > Album > Utility > Duplicati e unisci le copie identiche trovate da Apple. È gratuito e conserva la versione migliore.",
          },
          {
            name: "Cerca i video simili",
            text: "Apri DiskMop e lascia terminare l'analisi. I video presenti sul telefono vengono confrontati fotogramma per fotogramma sul dispositivo; quando vengono trovati gruppi, nella schermata principale compare la scheda Video simili.",
          },
          {
            name: "Confronta le riprese",
            text: "Apri un gruppo. La ripresa suggerita è segnata; tieni premuto un video per vederne l'anteprima e confrontarlo con gli altri prima di decidere.",
          },
          {
            name: "Elimina le riprese in più",
            text: "Spunta le riprese che non ti servono ed eliminale. iOS chiede conferma e i video finiscono in Eliminati di recente.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Apri Foto > Album > Eliminati di recente, tocca Seleziona ed Elimina tutto per liberare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Perché i video ripetuti costano più delle foto ripetute",
          content: [
            "Con le foto, qualche tentativo in più costa qualche megabyte. Con i video, ogni ripresa in più è una registrazione completa. Secondo le stime di Apple, un minuto di 1080p a 30 fotogrammi al secondo occupa circa 60 MB e un minuto di 4K a 60 fotogrammi al secondo circa 400 MB. Tre riprese da 30 secondi dello stesso momento in 4K possono quindi occupare più di qualche centinaio di foto normali.",
            "Le riprese ripetute sono frequenti. Si ricomincia perché qualcuno ha riso, perché la registrazione è partita tardi o per avere un'angolazione migliore. Ognuno di questi tentativi resta nella libreria, si sincronizza con Foto di iCloud e compare nei Ricordi, e quasi nessuno torna indietro a eliminare quelli peggiori.",
            "Per questo i video sono di solito il modo più rapido per liberare spazio vero. La nostra guida sul [perché eliminare foto non libera spazio sull'iPhone](/blog/iphone-storage-full) mostra come pochi video grandi pesino spesso più di tutto il resto in Foto.",
          ],
        },
        {
          title: "Cosa trova già l'app Foto",
          content: [
            "Da iOS 16 Foto analizza la libreria in background ed elenca gli elementi identici in Album > Utility > Duplicati. L'unione conserva la versione di qualità più alta e combina i metadati, quindi è un primo passo sicuro per le copie salvate due volte, per esempio da Messaggi o AirDrop.",
            "Le riprese distinte sono un'altra cosa. Due registrazioni della stessa scena sono due file diversi, con durate, primi fotogrammi e momenti audio differenti, quindi un controllo dei duplicati, che cerca lo stesso contenuto, non le elenca. Foto offre anche Album > Tipi di media > Video per sfogliare tutti i video, ma non li ordina per somiglianza.",
            "L'album Video è ordinato per data e non per dimensione, il che rende più difficile del necessario trovare i clip più pesanti. Un elenco dedicato dei video di grandi dimensioni, con il loro peso, risolve questa parte; un confronto di somiglianza risolve le riprese ripetute.",
          ],
        },
        {
          title: "Come vengono trovati i video simili sul dispositivo",
          content: [
            "DiskMop per iPhone confronta i video come confronta le foto: in base al loro aspetto. Da ogni video presente sul telefono prende tre piccoli fotogrammi, al 10%, al 50% e al 90% della durata, e trasforma ciascuno in un'impronta visiva con il framework Vision di Apple. Due video sono considerati simili solo se tutte e tre le coppie di fotogrammi sono vicine; un solo fotogramma diverso, come l'interno di un'auto in un clip e una strada nell'altro, li tiene separati.",
            "Altri due controlli evitano falsi abbinamenti. I video devono essere stati registrati entro circa mezz'ora l'uno dall'altro, dove nascono le riprese ripetute, e le loro durate possono differire al massimo di una volta e mezza. Così canzoni diverse dello stesso concerto o momenti diversi della stessa vacanza restano in gruppi separati, anche se si somigliano.",
            "I video conservati solo su iCloud non vengono scaricati per il confronto, risparmiando dati mobili e tempo; la schermata indica quanti sono stati saltati. Tutto il resto avviene sull'iPhone con i framework di Apple. DiskMop non ha server né account e non viene caricato nulla.",
          ],
        },
        {
          title: "Scegliere la ripresa da tenere",
          content: [
            "In ogni gruppo DiskMop segna un video da tenere. Un video contrassegnato come preferito viene per primo, poi uno modificato, poi la ripresa con la risoluzione più alta e, a parità, la più lunga. Nulla viene selezionato per l'eliminazione: apri il gruppo, tieni premuto per vedere l'anteprima dei clip e spunti le riprese che non ti servono.",
            "A volte la risposta giusta è tenere un video lungo ma renderlo più piccolo. DiskMop elenca anche i video di grandi dimensioni e quelli da rimpicciolire, e i suoi Strumenti possono salvare una copia più leggera di qualsiasi video, con un'anteprima di quanto diventerà piccolo, mentre l'originale va in Eliminati di recente. La nostra guida per [ridurre le dimensioni dei video su iPhone](/blog/reduce-video-size-iphone) spiega i livelli di qualità.",
            "Concludi in Eliminati di recente, dove i video rimossi continuano a occupare spazio per 30 giorni. L'analisi è gratuita in DiskMop; senza abbonamento puoi eliminare fino a cinque elementi al giorno, e DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita, rimuove il limite e sblocca la riduzione. Per le foto ripetute, lo stesso approccio è descritto in [trovare foto duplicate e simili su iPhone](/blog/find-duplicate-similar-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "L'album Duplicati dell'iPhone trova i video duplicati?",
          answer:
            "Elenca le copie identiche. Registrazioni distinte dello stesso momento sono file diversi e non compaiono lì; per trovarle bisogna confrontare ciò che mostrano i video.",
        },
        {
          question: "Come decide DiskMop che due video sono simili?",
          answer:
            "Confronta le impronte visive di tre fotogrammi di ogni video, al 10%, al 50% e al 90% della durata. Tutti e tre devono essere vicini, i video devono essere stati registrati entro circa mezz'ora e le durate possono differire al massimo di 1,5 volte.",
        },
        {
          question: "Quale video suggerisce di tenere DiskMop?",
          answer:
            "Prima un preferito, poi un video modificato, poi la risoluzione più alta e, a parità, la ripresa più lunga. Puoi tenere qualsiasi altro video al suo posto; nulla viene selezionato per l'eliminazione.",
        },
        {
          question: "Perché alcuni video non sono stati confrontati?",
          answer:
            "I video conservati solo su iCloud non vengono scaricati per il confronto, per risparmiare dati e tempo. DiskMop indica quanti sono stati saltati.",
        },
        {
          question: "I miei video vengono caricati per il confronto?",
          answer:
            "No. I fotogrammi vengono analizzati sull'iPhone con il framework Vision di Apple. DiskMop non ha server e la sua etichetta sulla privacy nell'App Store indica Dati non raccolti.",
        },
      ],
      verdict: [
        "Se ti serve spazio in fretta, guarda i video prima delle foto. Unisci le copie esatte con l'album Duplicati di Apple, poi trova le riprese ripetute che solo un confronto visivo può vedere, tieni la migliore e svuota Eliminati di recente.",
        "DiskMop per iPhone confronta tre fotogrammi di ogni video sul dispositivo, raggruppa solo le riprese dello stesso momento, suggerisce la migliore e non seleziona nulla per l'eliminazione. L'analisi è gratuita, si possono eliminare gratis fino a cinque elementi al giorno e DiskMop Pro, con 7 giorni di prova gratuita, rimuove il limite e aggiunge la riduzione dei video.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como encontrar vídeos duplicados e semelhantes no iPhone (e ficar com a melhor tomada)",
      metaDescription:
        "Três tomadas do mesmo clipe podem ocupar mais que mil fotos. Como encontrar vídeos semelhantes no iPhone, escolher a melhor tomada e liberar gigabytes com segurança.",
      subtitle:
        "Por que clipes repetidos são a bagunça mais pesada da fototeca e como comparar vídeos sem enviar nada",
      intro: [
        "Resposta curta: o álbum Duplicatas do Fotos combina cópias idênticas, mas não considera duplicatas duas tomadas diferentes do mesmo momento. Gravar duas vezes um parabéns, três vezes um pôr do sol ou os primeiros passos de uma criança de vários ângulos gera vídeos parecidos que são arquivos diferentes, e cada um pode ocupar centenas de megabytes. Para encontrá-los é preciso comparar o que os vídeos mostram, não seus arquivos.",
        "Este guia explica por que clipes repetidos pesam mais que fotos repetidas, o que o app Fotos já oferece, como o DiskMop para iPhone compara vídeos no aparelho e qual tomada sugere manter, e o que fazer com um vídeo longo que você quer manter, mas não em tamanho cheio.",
      ],
      keyTakeaways: [
        "O vídeo é o que mais pesa na maioria dos iPhones: um minuto de 4K a 60 qps tem cerca de 400 MB, então poucas tomadas repetidas podem pesar mais que centenas de fotos.",
        "O álbum Duplicatas do Fotos (Álbuns > Utilitários) cuida das cópias idênticas; tomadas diferentes do mesmo momento são arquivos diferentes e não aparecem ali.",
        "O DiskMop compara três quadros de cada vídeo, a 10%, 50% e 90% da duração; se um só for diferente, os vídeos não são agrupados.",
        "Os vídeos só são comparados com outros gravados dentro de cerca de meia hora e com duração parecida, o que separa momentos diferentes do mesmo evento.",
        "Em cada grupo, a sugestão é primeiro um favorito ou um vídeo editado, depois a maior resolução e a tomada mais longa; nada é selecionado para apagar.",
        "Os vídeos apagados ficam 30 dias em Apagados Recentemente; esvazie esse álbum para recuperar o espaço.",
      ],
      dataTable: {
        caption:
          "Tamanho aproximado de um minuto de vídeo do iPhone (estimativas da Apple)",
        columns: [
          "Formato de gravação",
          "Por minuto",
          "Três tomadas de 30 segundos",
        ],
        rows: [
          ["720p HD a 30 qps", "Cerca de 45 MB", "Cerca de 70 MB"],
          ["1080p HD a 30 qps", "Cerca de 60 MB", "Cerca de 90 MB"],
          ["4K a 30 qps", "Cerca de 170 MB", "Cerca de 255 MB"],
          ["4K a 60 qps", "Cerca de 400 MB", "Cerca de 600 MB"],
        ],
      },
      howTo: {
        name: "Encontrar e apagar vídeos semelhantes no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Combine primeiro as cópias exatas",
            text: "Abra Fotos > Álbuns > Utilitários > Duplicatas e combine as cópias idênticas que a Apple encontrou. É grátis e mantém a melhor versão.",
          },
          {
            name: "Procure vídeos semelhantes",
            text: "Abra o DiskMop e deixe a análise terminar. Os vídeos guardados no telefone são comparados quadro a quadro no aparelho; quando há grupos, o cartão Vídeos semelhantes aparece na tela inicial.",
          },
          {
            name: "Compare as tomadas",
            text: "Abra um grupo. A tomada sugerida está marcada; toque e segure um vídeo para pré-visualizá-lo e compará-lo com os outros antes de decidir.",
          },
          {
            name: "Apague as tomadas extras",
            text: "Marque as tomadas de que não precisa e apague. O iOS pede confirmação e os vídeos vão para Apagados Recentemente.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "Abra Fotos > Álbuns > Apagados Recentemente, toque em Selecionar e Apagar Tudo para liberar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title: "Por que vídeos repetidos custam mais que fotos repetidas",
          content: [
            "Com fotos, algumas tentativas a mais custam alguns megabytes. Com vídeo, cada tomada extra é uma gravação completa. Pelas estimativas da própria Apple, um minuto de 1080p a 30 quadros por segundo ocupa cerca de 60 MB, e um minuto de 4K a 60 quadros por segundo cerca de 400 MB. Três tomadas de 30 segundos do mesmo momento em 4K podem ocupar mais que algumas centenas de fotos comuns.",
            "Tomadas repetidas são comuns. A gente recomeça porque alguém riu, porque a gravação começou tarde ou para pegar um ângulo melhor. Cada uma dessas tentativas fica na fototeca, sincroniza com o Fotos do iCloud e aparece nas Memórias, e quase ninguém volta para apagar as piores.",
            "É por isso que os vídeos costumam ser o jeito mais rápido de liberar espaço de verdade. Nosso guia sobre [por que apagar fotos não libera espaço no iPhone](/blog/iphone-storage-full) mostra como poucos vídeos grandes muitas vezes pesam mais que todo o resto do Fotos.",
          ],
        },
        {
          title: "O que o app Fotos já encontra",
          content: [
            "Desde o iOS 16, o Fotos analisa a fototeca em segundo plano e lista itens idênticos em Álbuns > Utilitários > Duplicatas. Combinar mantém a versão de maior qualidade e junta os metadados, então é um primeiro passo seguro para cópias salvas duas vezes, por exemplo pelo Mensagens ou pelo AirDrop.",
            "Tomadas diferentes são outra história. Duas gravações da mesma cena são dois arquivos diferentes, com durações, primeiros quadros e momentos de som diferentes, então uma verificação de duplicatas, que procura o mesmo conteúdo, não as lista. O Fotos também oferece Álbuns > Tipos de Mídia > Vídeos para ver todos os vídeos, mas sem ordenar por semelhança.",
            "O álbum Vídeos é ordenado por data, não por tamanho, o que torna mais difícil do que deveria achar os clipes mais pesados. Uma lista própria de vídeos grandes, com os tamanhos, resolve essa parte; uma comparação de semelhança resolve as tomadas repetidas.",
          ],
        },
        {
          title: "Como os vídeos semelhantes são encontrados no aparelho",
          content: [
            "O DiskMop para iPhone compara vídeos como compara fotos: pela aparência. De cada vídeo guardado no telefone, ele pega três quadros pequenos, a 10%, 50% e 90% da duração, e transforma cada um numa impressão digital visual com o framework Vision da Apple. Dois vídeos só são considerados semelhantes se os três pares de quadros forem próximos; um único quadro diferente, como o interior de um carro num clipe e uma estrada no outro, os mantém separados.",
            "Mais duas verificações evitam falsas combinações. Os vídeos precisam ter sido gravados com no máximo cerca de meia hora de diferença, que é onde estão as tomadas repetidas, e as durações podem diferir no máximo uma vez e meia. Assim, músicas diferentes do mesmo show ou momentos diferentes da mesma viagem ficam em grupos separados, mesmo que pareçam iguais.",
            "Vídeos guardados só no iCloud não são baixados para a comparação, o que economiza dados móveis e tempo; a tela mostra quantos foram pulados. Todo o resto acontece no iPhone com os frameworks da Apple. O DiskMop não tem servidor nem conta, e nada é enviado.",
          ],
        },
        {
          title: "Escolhendo a tomada que fica",
          content: [
            "Em cada grupo, o DiskMop marca um vídeo para manter. Um vídeo marcado como favorito vem primeiro, depois um editado, depois a tomada de maior resolução e, se empatar, a mais longa. Nada é selecionado para apagar: você abre o grupo, toca e segura para pré-visualizar os clipes e marca as tomadas de que não precisa.",
            "Às vezes a resposta certa é manter um vídeo longo, mas deixá-lo menor. O DiskMop também lista vídeos grandes e vídeos que vale a pena reduzir, e as Ferramentas podem salvar uma cópia menor de qualquer vídeo, com uma prévia de quanto ele vai ocupar, enquanto o original vai para Apagados Recentemente. Nosso guia para [reduzir o tamanho de vídeos no iPhone](/blog/reduce-video-size-iphone) explica os níveis de qualidade.",
            "Termine em Apagados Recentemente, onde os vídeos removidos continuam ocupando armazenamento por 30 dias. A análise é grátis no DiskMop; sem assinatura, você pode apagar até cinco itens por dia, e o DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito, remove o limite e libera a redução. Para fotos repetidas, a mesma abordagem está em [encontrar fotos duplicadas e semelhantes no iPhone](/blog/find-duplicate-similar-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "O álbum Duplicatas do iPhone encontra vídeos duplicados?",
          answer:
            "Ele lista cópias idênticas. Gravações diferentes do mesmo momento são arquivos diferentes e não aparecem ali; para encontrá-las é preciso comparar o que os vídeos mostram.",
        },
        {
          question: "Como o DiskMop decide que dois vídeos são semelhantes?",
          answer:
            "Ele compara as impressões digitais visuais de três quadros de cada vídeo, a 10%, 50% e 90% da duração. Os três precisam ser próximos, os vídeos precisam ter sido gravados com até cerca de meia hora de diferença e as durações podem diferir no máximo 1,5 vez.",
        },
        {
          question: "Qual vídeo o DiskMop sugere manter?",
          answer:
            "Primeiro um favorito, depois um vídeo editado, depois a maior resolução e, se empatar, a tomada mais longa. Você pode manter qualquer outro vídeo no lugar; nada é selecionado para apagar.",
        },
        {
          question: "Por que alguns vídeos não foram comparados?",
          answer:
            "Vídeos guardados só no iCloud não são baixados para a comparação, para economizar dados e tempo. O DiskMop mostra quantos foram pulados.",
        },
        {
          question: "Meus vídeos são enviados para a comparação?",
          answer:
            "Não. Os quadros são analisados no iPhone com o framework Vision da Apple. O DiskMop não tem servidor e o rótulo de privacidade na App Store diz Dados Não Coletados.",
        },
      ],
      verdict: [
        "Se precisar de espaço rápido, olhe os vídeos antes das fotos. Combine as cópias exatas com o álbum Duplicatas da Apple, depois encontre as tomadas repetidas que só uma comparação visual enxerga, fique com a melhor e esvazie Apagados Recentemente.",
        "O DiskMop para iPhone compara três quadros de cada vídeo no aparelho, agrupa só as tomadas do mesmo momento, sugere a melhor e não seleciona nada para apagar. A análise é grátis, até cinco itens por dia podem ser apagados sem custo e o DiskMop Pro, com 7 dias de teste gratuito, remove o limite e adiciona a redução de vídeos.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone で重複・類似した動画を見つける方法（いちばん良いテイクを残す）",
      metaDescription:
        "同じ場面を 3 回撮った動画は、写真 1,000 枚より容量を使うこともあります。iPhone で似ている動画を見つけ、ベストテイクを選んで安全に容量を空ける方法です。",
      subtitle:
        "撮り直した動画がライブラリでいちばん重い散らかりになる理由と、何もアップロードせずに動画を比較するしくみ",
      intro: [
        "結論から言うと、写真アプリの「重複項目」アルバムは完全に同じコピーを結合しますが、同じ瞬間を別々に撮った 2 本の動画は重複として扱いません。誕生日の歌を 2 回、夕焼けを 3 回、子どもの初めての一歩を何通りかの角度で撮ると、よく似ていても別ファイルの動画ができ、1 本で数百 MB になることもあります。これらを見つけるには、ファイルではなく動画に何が映っているかを比べる必要があります。",
        "このガイドでは、撮り直した動画が撮り直した写真より問題になる理由、写真アプリにすでにある機能、iPhone 版 DiskMop が端末上で動画を比較するしくみとどのテイクを残すよう提案するか、そして残したいけれどフルサイズでなくてよい長い動画の扱い方を解説します。",
      ],
      keyTakeaways: [
        "ほとんどの iPhone で最も容量を使うのは動画です。4K・60 fps の 1 分は約 400 MB なので、撮り直しが数本あるだけで写真数百枚分を超えることがあります。",
        "写真アプリの「重複項目」アルバム（アルバム > ユーティリティ）が扱うのは完全に同じコピーです。同じ瞬間を別々に撮った動画は別ファイルなので表示されません。",
        "DiskMop は各動画の長さの 10%、50%、90% の位置にある 3 つのフレームを比べます。1 つでも違えば、その動画はグループにまとめられません。",
        "比較の対象は、およそ 30 分以内に撮影された長さの近い動画だけです。同じイベントの別々の場面は別のものとして扱われます。",
        "各グループで残す候補になるのは、まずお気に入りや編集済みの動画、次に解像度が最も高く最も長いテイクです。削除対象として選択されるものはありません。",
        "削除した動画は「最近削除した項目」に 30 日間残ります。容量を取り戻すには、そのアルバムを空にしてください。",
      ],
      dataTable: {
        caption: "iPhone の動画 1 分あたりのおおよそのサイズ（Apple の目安）",
        columns: ["撮影形式", "1 分あたり", "30 秒のテイク 3 本"],
        rows: [
          ["720p HD・30 fps", "約 45 MB", "約 70 MB"],
          ["1080p HD・30 fps", "約 60 MB", "約 90 MB"],
          ["4K・30 fps", "約 170 MB", "約 255 MB"],
          ["4K・60 fps", "約 400 MB", "約 600 MB"],
        ],
      },
      howTo: {
        name: "iPhone で似ている動画を見つけて削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "まず完全なコピーを結合する",
            text: "写真 > アルバム > ユーティリティ >「重複項目」を開き、Apple が見つけた完全なコピーを結合します。無料で、最も良いバージョンが残ります。",
          },
          {
            name: "似ている動画をスキャンする",
            text: "DiskMop を開き、スキャンが終わるのを待ちます。iPhone に保存されている動画が端末上でフレームごとに比較され、グループが見つかるとホーム画面に「似ているビデオ」カードが表示されます。",
          },
          {
            name: "テイクを見比べる",
            text: "グループを開くと、残す候補に印が付いています。動画を長押しすればプレビューでき、決める前にほかのテイクと見比べられます。",
          },
          {
            name: "余分なテイクを削除する",
            text: "不要なテイクにチェックを入れて削除します。iOS が確認を求め、動画は「最近削除した項目」に移ります。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "写真 > アルバム > 最近削除した項目を開き、「選択」>「すべて削除」をタップすると、すぐに容量が空きます。",
          },
        ],
      },
      sections: [
        {
          title: "撮り直した動画が写真より高くつく理由",
          content: [
            "写真なら、数回余分に撮っても数 MB で済みます。動画では、余分なテイクのひとつひとつが完全な記録です。Apple の目安では、1080p・30 fps の 1 分は約 60 MB、4K・60 fps の 1 分は約 400 MB です。同じ瞬間を 4K で 30 秒ずつ 3 回撮れば、普通の写真数百枚より容量を使うことになります。",
            "撮り直しはよくあることです。誰かが笑ってしまった、撮り始めが遅れた、もっと良い角度で撮りたかった。こうした試みはすべてライブラリに残り、iCloud 写真に同期され、「メモリー」にも登場しますが、出来の悪いほうを消しに戻る人はほとんどいません。",
            "だからこそ、動画は実際に容量を空ける最速の手段になりがちです。[写真を削除しても iPhone の空き容量が増えない理由](/blog/iphone-storage-full)では、数本の大きな動画が写真アプリのほかのすべてより重いことが多い理由を紹介しています。",
          ],
        },
        {
          title: "写真アプリがすでに見つけてくれるもの",
          content: [
            "iOS 16 以降、写真アプリはバックグラウンドでライブラリを調べ、完全に同じ項目をアルバム > ユーティリティ >「重複項目」に表示します。結合すると最も品質の高いバージョンが残り、メタデータもまとめられるので、メッセージや AirDrop から 2 回保存したコピーなどには安全な最初の一歩です。",
            "別々に撮ったテイクは事情が違います。同じ場面を撮った 2 本の記録は、長さも、最初のフレームも、音のタイミングも異なる別ファイルなので、同じ内容を探す重複チェックには表示されません。写真アプリにはすべての動画を見られるアルバム > メディアタイプ >「ビデオ」もありますが、似ている順には並びません。",
            "「ビデオ」アルバムはサイズではなく日付順に並ぶため、重いクリップを探すのは本来より手間がかかります。サイズ付きの大きな動画の一覧があればその部分は解決し、類似性の比較があれば撮り直しの問題が解決します。",
          ],
        },
        {
          title: "端末上で似ている動画を見つけるしくみ",
          content: [
            "iPhone 版 DiskMop は、写真と同じように見た目で動画を比べます。iPhone に保存されている各動画から、長さの 10%、50%、90% の位置で小さなフレームを 3 枚取り出し、それぞれを Apple の Vision フレームワークで視覚的な指紋に変換します。2 本の動画が似ていると判断されるのは、3 組のフレームがすべて近い場合だけです。片方は車内、もう片方は道路というように 1 枚でも違えば、別々のままです。",
            "誤った組み合わせを防ぐチェックがさらに 2 つあります。撮り直しが生まれるのはその範囲なので、撮影時刻がおよそ 30 分以内であること、そして長さの差が 1.5 倍以内であることです。これにより、同じコンサートの別の曲や、同じ旅行の別の場面は、見た目が似ていても別のグループになります。",
            "iCloud にしかない動画は比較のためにダウンロードしません。モバイルデータと時間を節約するためで、スキップした本数は画面に表示されます。それ以外の処理はすべて Apple のフレームワークを使って iPhone 上で行われます。DiskMop にはサーバーもアカウントもなく、何もアップロードされません。",
          ],
        },
        {
          title: "残すテイクを選ぶ",
          content: [
            "DiskMop は各グループで残す動画を 1 本示します。お気に入りに登録した動画が最優先で、次に編集した動画、次に解像度が最も高いテイク、同じなら最も長いものです。削除対象として選択されるものはありません。グループを開き、長押しでクリップをプレビューし、不要なテイクにチェックを入れます。",
            "長い動画は残しつつ小さくするのが正解の場合もあります。DiskMop は大きな動画や圧縮する価値のある動画も一覧にし、「ツール」ではどれくらい小さくなるかをプレビューしてから、任意の動画の小さなコピーを保存できます。元の動画は「最近削除した項目」に移ります。画質の設定については[iPhone で動画のサイズを小さくする方法](/blog/reduce-video-size-iphone)で解説しています。",
            "最後は「最近削除した項目」で締めくくりましょう。削除した動画も 30 日間はストレージを使い続けます。DiskMop のスキャンは無料です。サブスクリプションなしでも 1 日 5 件まで削除でき、7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro なら制限がなくなり、縮小機能も使えます。撮り直した写真については、同じ考え方を[iPhone で重複写真と類似写真を見つける方法](/blog/find-duplicate-similar-photos-iphone)で紹介しています。",
          ],
        },
      ],
      faq: [
        {
          question:
            "iPhone の「重複項目」アルバムで重複した動画は見つかりますか？",
          answer:
            "完全に同じコピーは表示されます。同じ瞬間を別々に撮った動画は別ファイルなので表示されません。見つけるには、動画に映っている内容を比較する必要があります。",
        },
        {
          question:
            "DiskMop はどうやって 2 本の動画が似ていると判断するのですか？",
          answer:
            "各動画の長さの 10%、50%、90% にある 3 つのフレームの視覚的な指紋を比べます。3 つすべてが近いこと、撮影時刻がおよそ 30 分以内であること、長さの差が 1.5 倍以内であることが条件です。",
        },
        {
          question: "DiskMop はどの動画を残すよう提案しますか？",
          answer:
            "まずお気に入り、次に編集済みの動画、次に解像度が最も高いもの、同じなら最も長いテイクです。代わりにほかの動画を残すこともでき、削除対象として選択されるものはありません。",
        },
        {
          question: "比較されなかった動画があるのはなぜですか？",
          answer:
            "iCloud にしかない動画は、データと時間を節約するため比較用にダウンロードしません。スキップした本数は DiskMop に表示されます。",
        },
        {
          question: "比較のために動画がアップロードされますか？",
          answer:
            "いいえ。フレームは Apple の Vision フレームワークを使って iPhone 上で分析されます。DiskMop にはサーバーがなく、App Store のプライバシーラベルには「データの収集なし」と記載されています。",
        },
      ],
      verdict: [
        "急いで容量が必要なら、写真より先に動画を見ましょう。完全なコピーは Apple の「重複項目」アルバムで結合し、そのうえで視覚的な比較でしか見つからない撮り直しを探して、いちばん良いテイクを残し、「最近削除した項目」を空にします。",
        "iPhone 版 DiskMop は、すべての動画の 3 つのフレームを端末上で比較し、同じ瞬間のテイクだけをまとめ、ベストを提案し、削除対象を勝手に選びません。スキャンは無料、1 日 5 件までは無料で削除でき、7 日間の無料トライアル付きの DiskMop Pro なら制限がなくなり、動画の縮小も使えます。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
