import type { Article } from "../types";

export const deleteBlurryPhotosIphone: Article = {
  slug: "delete-blurry-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone'da Bulanık Fotoğrafları Bulma ve Silme (Yumuşak Bir Anıyı Kaybetmeden)",
      metaDescription:
        "Fotoğraflar'da bulanık kareler için albüm yok. Aygıttaki netlik taraması titrek ve odaksız fotoğrafları nasıl bulur, güvenle nasıl gözden geçirilir?",
      subtitle:
        "Fotoğraflar'ın bulanıklığı neden ayıramadığı, netlik ölçümünün nasıl çalıştığı ve silmeden önce nelere bakmalı",
      intro: [
        "Kısa cevap: Fotoğraflar uygulaması size yalnızca bulanık fotoğrafları gösteremez. Odağı kaymış ya da titrek kareleri bulan bir bulanık albümü, süzgeç ya da arama terimi yoktur; yerleşik yol kitaplıkta gezip onları gözle silmektir. Netlik taraması bu işi sizin yerinize yapar: her fotoğrafın ne kadar ince ayrıntı içerdiğini ölçer, eşiğin altında kalanları listeler ve kararı size bırakır.",
        "Bu rehber bulanık fotoğrafların neden zor bulunduğunu, iPhone için DiskMop'un düz gökyüzlerini ve beyaz duvarları işaretlemeden netliği aygıtta nasıl ölçtüğünü, yumuşak çıkmış değerli bir fotoğrafı silmeden listeyi nasıl gözden geçireceğinizi ve baştan daha az bulanık kare çekmenizi sağlayacak birkaç kamera alışkanlığını anlatıyor.",
      ],
      keyTakeaways: [
        "Fotoğraflar'da ekran görüntüleri, videolar ve kopyalar için albümler var, ama bulanık ya da titrek fotoğrafları gruplayan bir şey yok; onları elle bulmak tüm kitaplıkta gezmek demektir.",
        "Netlik ölçümü fotoğrafın küçük bir kopyasındaki ince kenarları sayar: net fotoğraflarda çok sayıda keskin kenar, odağı kaymış ve sarsılmış fotoğraflarda az kenar vardır.",
        "Beyaz bir duvar ya da açık bir gökyüzü gibi düz sahnelerde, tamamen net olsalar bile az kenar bulunur; iyi bir tarama bir fotoğrafa bulanık demeden önce doku olup olmadığına bakar.",
        "DiskMop netlik ölçümünü Apple'ın görüntü kalitesi puanıyla birleştirir ve sonuçları Bulanık fotoğraflar altında listeler; belgeler ve fişler dışarıda tutulur, hiçbir şey önceden seçilmez.",
        "Yumuşak bir fotoğraf bir anın tek resmi olabilir; silmeden önce her birine tam ekran bakın.",
        "Bulanık bir Live Photo bazen kurtarılabilir: Düzenle'de daha net bir kareyi anahtar fotoğraf yapın.",
      ],
      dataTable: {
        caption: "Bulanık iPhone fotoğraflarının yaygın sebepleri",
        columns: ["Sebep", "Nasıl görünür", "Nasıl önlenir"],
        rows: [
          [
            "Kamera sarsıntısı",
            "Her şey tek yöne doğru lekelenmiş, çoğu zaman az ışıkta",
            "Kıpırdamayın, kollarınızı destekleyin, Gece modunda telefonu sabit tutun",
          ],
          [
            "Kaçan odak",
            "Arka plan net, konu yumuşak",
            "Odaklamak için konuya dokunun; odağı kilitlemek için basılı tutun",
          ],
          [
            "Hareket eden konu",
            "Konu lekelenmiş, arka plan net",
            "Seri Çekim ya da daha fazla ışık kullanın, sonra en iyi kareyi tutun",
          ],
          [
            "Kirli lens",
            "Puslu, düşük kontrastlı, parlayan ışıklar",
            "Çekmeden önce lensi yumuşak bir bezle silin",
          ],
        ],
      },
      howTo: {
        name: "iPhone'da bulanık fotoğrafları bulma ve silme",
        totalTime: "PT10M",
        steps: [
          {
            name: "Kitaplığı tarayın",
            text: "DiskMop'u açın ve fotoğraflarınıza erişime izin verin. Tarama telefonda çalışır ve her fotoğrafın netliğini ölçer; sonuçlar tarama sürerken görünmeye başlar.",
          },
          {
            name: "Bulanık listesini açın",
            text: "Ana ekranda Bulanık fotoğraflar'a dokunun. Liste odağı kaymış ve titrek fotoğrafları ve görüntü kalitesi puanı çok düşük olanları en yeniden başlayarak gösterir.",
          },
          {
            name: "Her fotoğrafa tam ekran bakın",
            text: "Büyük görmek ve yakınlaştırmak için bir fotoğrafa basılı tutun. Yumuşak olsalar bile önemli olanları tutun; yalnızca emin olduklarınızı işaretleyin.",
          },
          {
            name: "Ya da tek tek gözden geçirin",
            text: "Kaydır sekmesinde Bulanık fotoğraflar'ı seçin; tutmak için sağa, sepete atmak için sola kaydırın. Bitirince sepeti boşaltın.",
          },
          {
            name: "Son Silinenler'i boşaltın",
            text: "Silinen fotoğraflar Fotoğraflar > Albümler > Son Silinenler'de 30 gün bekler. Alanı hemen açmak için albümü açın, Seç'e ve Tümünü Sil'e dokunun.",
          },
        ],
      },
      sections: [
        {
          title: "Fotoğraflar Uygulaması Bulanık Fotoğrafları Neden Ayıramaz",
          content: [
            "Fotoğraflar uygulaması kitaplığınızı birçok yararlı şekilde düzenler: tarihe, kişilere, yerlere, ortam türüne göre; birebir kopyaları bile bulur. Yapmadığı şey bir fotoğrafın net olup olmadığına karar vermektir. Ortam Türleri ya da Yardımcı Programlar altında bir Bulanık albümü yoktur; bulanık ya da odaksız gibi kelimelerle aramak da kastettiğiniz kareleri getirmez.",
            "Geriye gezinmek kalır. Küçük bir ekranda ve bir küçük resim ızgarasında bulanıklığı görmek şaşırtıcı derecede zordur; küçük resim olarak iyi görünen bir fotoğraf açınca yumuşak çıkabilir. Birkaç bin fotoğrafı tek tek kontrol etmek hiç bitmeyen türden bir iştir.",
            "Bulanık fotoğraflar yalnızca dağınıklık değildir. Çoğu zaman topluca çekilirler: loş bir akşam yemeğinde beş deneme ya da yerinde durmayan bir çocuk; her biri iyi bir fotoğraf kadar yer kaplar. Bunlar Live Photo ise her deneme ayrıca kısa bir video da taşır.",
          ],
        },
        {
          title: "Aygıtta Netlik Taraması Nasıl Çalışır",
          content: [
            "Net bir fotoğraf keskin kenarlarla doludur: kirpikler, yapraklar, kumaşın dokusu. Bir fotoğrafın odağı kaydığında ya da telefon kıpırdadığında bu kenarlar yumuşak geçişlere dönüşür. Netlik ölçümü bunu yazılım için görünür kılar. iPhone için DiskMop her fotoğrafın küçük, gri bir kopyasına bakar ve parlaklığın bir pikselden diğerine ne kadar güçlü değiştiğini ölçer; çok sayıda güçlü değişim net, az değişim bulanık demektir.",
            "Zor olan, yalnızca ayrıntısı az olan net fotoğrafları işaretlememektir. Beyaz bir duvar, açık bir gökyüzü, kar ya da düz bir zemin önündeki bir ürün, tamamen odakta olsa bile az kenar içerir. Bu yüzden DiskMop önce fotoğrafın ne kadarının dokulu olduğuna bakar ve neredeyse tamamen düz olan fotoğrafları atlar. Ayrıca en keskin dokulu bölgelere de bakar; böylece düz bir arka plan önündeki net bir yüz net sayılır.",
            "Sonuç, pozlamayı, kompozisyonu ve genel kaliteyi değerlendiren Apple'ın görüntü kalitesi puanıyla birleştirilerek Bulanık fotoğraflar listesi oluşturulur. Apple'ın analizinin fiş ve not gibi belge olarak tanıdığı fotoğraflar bu listenin dışında tutulur. Her şey Apple'ın çerçeveleriyle telefonda çalışır; hiçbir şey yüklenmez, uygulamanın sunucusu ve hesabı yoktur.",
          ],
        },
        {
          title: "Silmeden Önce Gözden Geçirin",
          content: [
            "Yazılım yumuşaklığı ölçebilir, ama bir fotoğrafın sizin için ne anlama geldiğini bilemez. Büyükannenizin son doğum gününün tek fotoğrafı biraz odaksız olabilir; bulanık bir konser karesi yine de istediğiniz anı olabilir. DiskMop listeyi açtığınızda bunu size hatırlatır ve sizin yerinize asla bir şey seçmez.",
            "Tam ekran görmek ve yüzlere yakınlaşmak için herhangi bir fotoğrafa basılı tutun. Her seferinde tek fotoğrafa karar vermeyi tercih ederseniz Bulanık fotoğraflar'ı Kaydır sekmesinde açın: tutmak için sağa, sepete atmak için sola kaydırın; sepeti boşaltıp onaylayana kadar hiçbir şey silinmez. Bir avuç neredeyse aynı deneme için benzer fotoğraf grupları çoğu zaman daha iyi bir araçtır; [iPhone'da kopya ve benzer fotoğrafları bulma](/blog/find-duplicate-similar-photos-iphone) rehberimiz bunu anlatıyor.",
            "Bulanık bir Live Photo'yu silmeden önce içinde daha iyi bir kare saklanıp saklanmadığına bakın. Fotoğrafı açın, Düzenle'ye, ardından Live Photo düğmesine dokunun ve kareler arasında sürükleyin; biri daha netse Anahtar Fotoğraf Yap'ı seçin. Fotoğraf Live Photo olarak kalır, artık daha net bir durağan kareyle.",
          ],
        },
        {
          title: "Gelecekte Daha Az Bulanık Fotoğraf",
          content: [
            "Bulanıklığın çoğu dört sebepten gelir: sarsıntı, kaçan odak, hareket eden konular ve kirli bir lens. Lensi hızla silmek bulanıklığa benzeyen pusu giderir. Çekmeden önce konuya dokunmak kameraya neye odaklanacağını söyler; basılı tutmak ise kadrajı ayarlarken odağın ve pozlamanın kaymaması için ikisini kilitler.",
            "Az ışıkta iPhone Gece moduna geçer ve deklanşörü bir saniye ya da daha uzun süre açık tutar; çekim bitene kadar kıpırdamamak her şeyden önemlidir. Çocuklar, evcil hayvanlar ve spor için deklanşörü Seri Çekim'de basılı tutun ya da kısa bir video çekip sonra en iyi kareyi seçin, ardından gerisini silin.",
            "Temizlik yaptığınızda Son Silinenler'de bitirin: siz onu boşaltana kadar silinen fotoğraflar depolama alanınızdan sayılmaya devam eder. DiskMop'ta tarama ücretsizdir; abonelik olmadan günde beş fotoğrafa kadar silebilirsiniz, 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro ise sınırı kaldırır. Bulanık kareler sorunun yalnızca bir parçasıysa [iPhone fotoğraflarını kaydırarak temizleme](/blog/swipe-to-delete-photos-iphone) kitaplığın geri kalanını kapsar.",
          ],
        },
      ],
      faq: [
        {
          question:
            "iPhone Fotoğraflar uygulaması bulanık fotoğrafları bulabilir mi?",
          answer:
            "Hayır. Fotoğraflar'da bulanık ya da titrek fotoğraflar için albüm, süzgeç ya da arama terimi yoktur. Onları gezinerek gözle silebilir ya da netliği ölçen bir uygulama kullanabilirsiniz.",
        },
        {
          question:
            "DiskMop bir fotoğrafın bulanık olduğuna nasıl karar verir?",
          answer:
            "Her fotoğrafın küçük bir kopyasındaki ince ayrıntıyı ölçer, neredeyse tamamen düz olan fotoğrafları yok sayar, en keskin dokulu bölgelere bakar ve sonucu Apple'ın görüntü kalitesi puanıyla birleştirir. Fiş gibi belgeler dışarıda tutulur.",
        },
        {
          question: "DiskMop bulanık fotoğrafları kendiliğinden siler mi?",
          answer:
            "Hayır. Onları listeler ve hiçbirini seçmez. Her fotoğrafı siz gözden geçirip karar verirsiniz; iOS da bir şey silinmeden önce onay ister.",
        },
        {
          question: "Bulanık bir Live Photo'yu düzeltebilir miyim?",
          answer:
            "Bazen. Düzenle'de Live Photo düğmesine dokunup kareler arasında gezinin; biri daha netse Anahtar Fotoğraf Yap'ı seçin.",
        },
        {
          question: "Tarama için fotoğraflarım yükleniyor mu?",
          answer:
            "Hayır. Netlik ölçümü ve Apple'ın kalite puanı iPhone'da hesaplanır. DiskMop'un sunucusu yoktur ve App Store gizlilik etiketinde Veri Toplanmaz yazar.",
        },
      ],
      verdict: [
        "Bulanık fotoğrafları yalnızca Fotoğraflar uygulamasıyla bulmak zordur, çünkü netliği değerlendirmenin bir yolu yoktur. Netlik taraması, düz sahneleri yok saydığı ve son kararı size bıraktığı sürece saatlerce gezinmeyi kısa bir listeye dönüştürür.",
        "iPhone için DiskMop netliği aygıtta ölçer, düz fotoğrafları ve belgeleri atlar, sonucu Apple'ın kalite puanıyla birleştirir ve fotoğrafları hiçbirini önceden seçmeden Bulanık fotoğraflar altında listeler. Tarama ücretsizdir, günde beş fotoğrafa kadar ücretsiz silinebilir ve 7 günlük ücretsiz denemesi olan DiskMop Pro sınırı kaldırır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Find and Delete Blurry Photos on iPhone (Without Losing a Soft Memory)",
      metaDescription:
        "The Photos app has no album for blurry shots. How an on-device sharpness scan finds out-of-focus and shaky photos, how to review them safely and how to take fewer.",
      subtitle:
        "Why Photos cannot sort blur for you, how a sharpness measurement works, and what to check before you delete",
      intro: [
        "Short answer: the Photos app cannot show you only the blurry photos. There is no blurry album, no filter and no search term that finds out-of-focus or shaky shots, so the built-in way is to scroll through the library and delete them by eye. A sharpness scan does that work for you: it measures how much fine detail each photo contains, lists the ones that fall below a threshold and leaves the decision to you.",
        "This guide explains why blurry photos are hard to find, how DiskMop for iPhone measures sharpness on the device without flagging plain skies and white walls, how to review the list without deleting a precious photo that happens to be soft, and a few camera habits that mean fewer blurry shots in the first place.",
      ],
      keyTakeaways: [
        "Photos has albums for screenshots, videos and duplicates, but nothing that groups blurry or shaky photos; finding them by hand means scrolling the whole library.",
        "A sharpness measurement counts fine edges in a small copy of the photo: sharp photos have many crisp edges, out-of-focus and shaken photos have few.",
        "Plain scenes such as a white wall or a clear sky have few edges even when perfectly sharp, so a good scan checks for texture before calling a photo blurry.",
        "DiskMop combines its sharpness measurement with Apple's image quality score and lists the results under Blurry & badly shot; documents and receipts are left out, and nothing is preselected.",
        "A soft photo can still be the only picture of a moment, so review each one full screen before deleting.",
        "A blurry Live Photo can sometimes be rescued: in Edit, choose a sharper frame as the key photo.",
      ],
      dataTable: {
        caption: "Common causes of blurry iPhone photos",
        columns: ["Cause", "What it looks like", "How to avoid it"],
        rows: [
          [
            "Camera shake",
            "Everything smeared in one direction, often in low light",
            "Hold still, brace your arms, keep the phone steady during Night mode",
          ],
          [
            "Missed focus",
            "Background sharp, subject soft",
            "Tap the subject to focus; touch and hold to lock focus",
          ],
          [
            "Moving subject",
            "Subject smeared, background sharp",
            "Use Burst mode or more light, then keep the best frame",
          ],
          [
            "Dirty lens",
            "Hazy, low contrast, glowing highlights",
            "Wipe the lens with a soft cloth before shooting",
          ],
        ],
      },
      howTo: {
        name: "Find and delete blurry photos on iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Scan the library",
            text: "Open DiskMop and allow access to your photos. The scan runs on the phone and measures the sharpness of every photo; results appear while it is still running.",
          },
          {
            name: "Open the blurry list",
            text: "Tap Blurry & badly shot on the home screen. It lists out-of-focus and shaky photos, and photos with a very low image quality score, newest first.",
          },
          {
            name: "Check each photo full screen",
            text: "Press and hold a photo to see it large and zoom in. Keep the ones that matter even if they are soft; tick only the ones you are sure about.",
          },
          {
            name: "Or review them one at a time",
            text: "In the Swipe tab, choose Blurry & badly shot and swipe right to keep, left to put in the basket. Empty the basket when you are done.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Deleted photos wait 30 days in Photos > Albums > Recently Deleted. Open it, tap Select and Delete All to free the space now.",
          },
        ],
      },
      sections: [
        {
          title: "Why the Photos App Cannot Sort Blurry Photos",
          content: [
            "The Photos app organises your library in many useful ways: by date, by people, by places, by media type, and it even finds exact duplicates. What it does not do is judge whether a photo is sharp. There is no Blurry album under Media Types or Utilities, and searching for words such as blurry or out of focus does not return the shots you mean.",
            "That leaves scrolling. On a small screen and in a grid of thumbnails, blur is surprisingly hard to see; a photo that looks fine as a thumbnail can turn out to be soft when you open it. Checking a few thousand photos one by one is the kind of job that never gets finished.",
            "Blurry photos are not only clutter. They are often taken in batches, such as five attempts at a dimly lit dinner or a child who would not stand still, and each one takes as much space as a good photo. If those were Live Photos, every attempt also carries a short video.",
          ],
        },
        {
          title: "How an On-Device Sharpness Scan Works",
          content: [
            "A sharp photo is full of crisp edges: eyelashes, leaves, the texture of fabric. When a photo is out of focus or the phone moved, those edges smear into soft gradients. A sharpness measurement makes this visible to software. DiskMop for iPhone looks at a small grey copy of each photo and measures how strongly brightness changes from one pixel to the next; many strong changes mean sharp, few mean blurred.",
            "The hard part is not flagging sharp photos that simply have little detail. A white wall, a clear sky, snow or a product on a plain background has few edges even when it is perfectly in focus. DiskMop therefore checks first how much of the photo has texture at all and skips photos that are almost entirely flat. It also looks at the sharpest textured areas, so a crisp face in front of a plain background counts as sharp.",
            "The result is combined with Apple's image quality score, which rates exposure, composition and overall quality, to form the list Blurry & badly shot. Photos that Apple's analysis recognises as documents, such as receipts and notes, are kept out of it. Everything runs on the phone with Apple's frameworks; nothing is uploaded, and the app has no server and no account.",
          ],
        },
        {
          title: "Review Before You Delete",
          content: [
            "Software can measure softness, but it cannot know what a photo means to you. The only picture of a grandparent's last birthday may be slightly out of focus; a blurry shot of a concert can still be the memory you want. DiskMop reminds you of this when you open the list, and it never selects anything for you.",
            "Press and hold any photo to see it full screen and zoom in on the faces. If you prefer to decide one photo at a time, open Blurry & badly shot in the Swipe tab: swipe right to keep, left to put it in the basket, and nothing is deleted until you empty the basket and confirm. For a handful of near-identical attempts, the similar-photo groups are often the better tool, as our guide on [finding duplicate and similar photos on iPhone](/blog/find-duplicate-similar-photos-iphone) explains.",
            "Before deleting a blurry Live Photo, check whether a better frame is hidden inside it. Open the photo, tap Edit, then the Live Photo button, and drag through the frames; if one is sharper, choose Make Key Photo. The photo stays a Live Photo, now with a sharper still.",
          ],
        },
        {
          title: "Fewer Blurry Photos in the Future",
          content: [
            "Most blur comes from four causes: shake, missed focus, moving subjects and a dirty lens. A quick wipe of the lens fixes haze that looks like blur. Tapping the subject before you shoot tells the camera what to focus on, and touching and holding locks focus and exposure so they do not jump while you frame.",
            "In low light, the iPhone switches to Night mode and keeps the shutter open for a second or more; holding still until the capture finishes matters more than anything else. For children, pets and sports, hold the shutter in Burst mode or shoot a short video and pick the best frame later, then delete the rest.",
            "When you do clean up, finish in Recently Deleted: until you empty it, deleted photos still count against your storage. Scanning is free in DiskMop; without a subscription you can delete up to five photos a day, and DiskMop Pro, a monthly subscription with a 7-day free trial, removes the limit. If the blurry shots are only part of the problem, [cleaning up iPhone photos by swiping](/blog/swipe-to-delete-photos-iphone) covers the rest of the library.",
          ],
        },
      ],
      faq: [
        {
          question: "Can the iPhone Photos app find blurry photos?",
          answer:
            "No. Photos has no album, filter or search term for blurry or shaky photos. You can scroll and delete them by eye, or use an app that measures sharpness.",
        },
        {
          question: "How does DiskMop decide that a photo is blurry?",
          answer:
            "It measures fine detail in a small copy of each photo, ignores photos that are almost entirely plain, checks the sharpest textured areas and combines the result with Apple's image quality score. Documents such as receipts are excluded.",
        },
        {
          question: "Will DiskMop delete blurry photos automatically?",
          answer:
            "No. It lists them and selects nothing. You review each photo and decide, and iOS asks for confirmation before anything is deleted.",
        },
        {
          question: "Can I fix a blurry Live Photo?",
          answer:
            "Sometimes. In Edit, tap the Live Photo button and look through the frames; if one is sharper, choose Make Key Photo.",
        },
        {
          question: "Are my photos uploaded for the scan?",
          answer:
            "No. The sharpness measurement and Apple's quality score are calculated on the iPhone. DiskMop has no server and its App Store privacy label states Data Not Collected.",
        },
      ],
      verdict: [
        "Blurry photos are hard to find with the Photos app alone because it has no way to judge sharpness. A sharpness scan turns hours of scrolling into a short list, as long as it ignores plain scenes and leaves the final decision to you.",
        "DiskMop for iPhone measures sharpness on the device, skips flat photos and documents, combines the result with Apple's quality score and lists the photos under Blurry & badly shot with nothing preselected. Scanning is free, up to five photos a day can be deleted for free, and DiskMop Pro, with a 7-day free trial, removes the limit.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Unscharfe Fotos auf dem iPhone finden und löschen (ohne eine weiche Erinnerung zu verlieren)",
      metaDescription:
        "Fotos hat kein Album für unscharfe Bilder. Wie ein Schärfe-Scan auf dem Gerät verwackelte Fotos findet, wie Sie sicher prüfen und künftig weniger machen.",
      subtitle:
        "Warum Fotos Unschärfe nicht sortieren kann, wie eine Schärfemessung funktioniert und was Sie vor dem Löschen prüfen sollten",
      intro: [
        "Kurze Antwort: Die Fotos-App kann Ihnen nicht nur die unscharfen Fotos zeigen. Es gibt kein Album, keinen Filter und keinen Suchbegriff für unscharfe oder verwackelte Aufnahmen; der eingebaute Weg ist, durch die Mediathek zu scrollen und sie nach Augenmaß zu löschen. Ein Schärfe-Scan nimmt Ihnen diese Arbeit ab: Er misst, wie viel feine Details jedes Foto enthält, listet die auf, die unter einem Schwellenwert liegen, und überlässt Ihnen die Entscheidung.",
        "Dieser Ratgeber erklärt, warum unscharfe Fotos schwer zu finden sind, wie DiskMop für iPhone die Schärfe auf dem Gerät misst, ohne klare Himmel und weiße Wände zu markieren, wie Sie die Liste prüfen, ohne ein wertvolles, nur leicht weiches Foto zu löschen, und welche Kameragewohnheiten von vornherein weniger unscharfe Bilder bringen.",
      ],
      keyTakeaways: [
        "Fotos hat Alben für Bildschirmfotos, Videos und Duplikate, aber nichts, was unscharfe oder verwackelte Fotos sammelt; sie von Hand zu finden heißt, die ganze Mediathek durchzuscrollen.",
        "Eine Schärfemessung zählt feine Kanten in einer kleinen Kopie des Fotos: Scharfe Fotos haben viele klare Kanten, unscharfe und verwackelte nur wenige.",
        "Schlichte Motive wie eine weiße Wand oder ein klarer Himmel haben selbst bei perfekter Schärfe wenige Kanten; ein guter Scan prüft daher zuerst, ob überhaupt Struktur vorhanden ist.",
        "DiskMop kombiniert seine Schärfemessung mit Apples Bildqualitätswert und listet die Ergebnisse unter „Unscharf & schlecht aufgenommen“; Dokumente und Belege bleiben außen vor, nichts ist vorausgewählt.",
        "Ein weiches Foto kann das einzige Bild eines Moments sein; sehen Sie sich deshalb jedes im Vollbild an, bevor Sie löschen.",
        "Ein unscharfes Live Photo lässt sich manchmal retten: Wählen Sie unter Bearbeiten ein schärferes Bild als Schlüsselfoto.",
      ],
      dataTable: {
        caption: "Häufige Ursachen unscharfer iPhone-Fotos",
        columns: ["Ursache", "Wie es aussieht", "Wie Sie es vermeiden"],
        rows: [
          [
            "Verwacklung",
            "Alles in eine Richtung verschmiert, oft bei wenig Licht",
            "Stillhalten, Arme abstützen, im Nachtmodus das Telefon ruhig halten",
          ],
          [
            "Verfehlter Fokus",
            "Hintergrund scharf, Motiv weich",
            "Auf das Motiv tippen; gedrückt halten, um den Fokus zu sperren",
          ],
          [
            "Bewegtes Motiv",
            "Motiv verschmiert, Hintergrund scharf",
            "Serienbild oder mehr Licht nutzen, dann das beste Bild behalten",
          ],
          [
            "Schmutzige Linse",
            "Dunstig, kontrastarm, leuchtende Lichter",
            "Vor der Aufnahme die Linse mit einem weichen Tuch abwischen",
          ],
        ],
      },
      howTo: {
        name: "Unscharfe Fotos auf dem iPhone finden und löschen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Die Mediathek scannen",
            text: "Öffnen Sie DiskMop und erlauben Sie den Zugriff auf Ihre Fotos. Der Scan läuft auf dem Telefon und misst die Schärfe jedes Fotos; Ergebnisse erscheinen schon, während er noch läuft.",
          },
          {
            name: "Die Liste der unscharfen Fotos öffnen",
            text: "Tippen Sie auf dem Startbildschirm auf „Unscharf & schlecht aufgenommen“. Die Liste zeigt unscharfe und verwackelte Fotos sowie Fotos mit sehr niedrigem Bildqualitätswert, die neuesten zuerst.",
          },
          {
            name: "Jedes Foto im Vollbild prüfen",
            text: "Halten Sie ein Foto gedrückt, um es groß zu sehen und hineinzuzoomen. Behalten Sie die wichtigen, auch wenn sie weich sind; haken Sie nur ab, bei dem Sie sicher sind.",
          },
          {
            name: "Oder einzeln durchgehen",
            text: "Wählen Sie im Tab Wischen „Unscharf & schlecht aufgenommen“ und wischen Sie nach rechts zum Behalten, nach links in den Korb. Leeren Sie den Korb, wenn Sie fertig sind.",
          },
          {
            name: "„Zuletzt gelöscht“ leeren",
            text: "Gelöschte Fotos warten 30 Tage unter Fotos > Alben > Zuletzt gelöscht. Öffnen Sie das Album, tippen Sie auf Auswählen und Alle löschen, um den Platz sofort freizugeben.",
          },
        ],
      },
      sections: [
        {
          title: "Warum die Fotos-App unscharfe Fotos nicht sortieren kann",
          content: [
            "Die Fotos-App ordnet Ihre Mediathek auf viele nützliche Arten: nach Datum, Personen, Orten, Medienart, und sie findet sogar exakte Duplikate. Was sie nicht tut, ist zu beurteilen, ob ein Foto scharf ist. Unter Medienarten oder Dienstprogramme gibt es kein Album „Unscharf“, und die Suche nach Wörtern wie unscharf oder verwackelt liefert nicht die Aufnahmen, die Sie meinen.",
            "Bleibt das Scrollen. Auf einem kleinen Bildschirm und in einem Raster aus Miniaturen ist Unschärfe erstaunlich schwer zu erkennen; ein Foto, das als Miniatur gut aussieht, kann sich beim Öffnen als weich herausstellen. Ein paar tausend Fotos einzeln zu prüfen ist die Art Arbeit, die nie fertig wird.",
            "Unscharfe Fotos sind nicht nur Unordnung. Sie entstehen oft in Serien, etwa fünf Versuche bei einem schummrigen Abendessen oder ein Kind, das nicht stillhalten wollte, und jedes belegt so viel Platz wie ein gutes Foto. Waren es Live Photos, trägt jeder Versuch außerdem ein kurzes Video mit sich.",
          ],
        },
        {
          title: "So funktioniert ein Schärfe-Scan auf dem Gerät",
          content: [
            "Ein scharfes Foto steckt voller klarer Kanten: Wimpern, Blätter, die Struktur von Stoff. Ist ein Foto unscharf oder hat sich das Telefon bewegt, verlaufen diese Kanten zu weichen Übergängen. Eine Schärfemessung macht das für Software sichtbar. DiskMop für iPhone betrachtet eine kleine graue Kopie jedes Fotos und misst, wie stark sich die Helligkeit von Pixel zu Pixel ändert; viele starke Änderungen bedeuten scharf, wenige bedeuten unscharf.",
            "Schwierig ist, scharfe Fotos nicht zu markieren, die einfach wenig Details haben. Eine weiße Wand, ein klarer Himmel, Schnee oder ein Produkt vor schlichtem Hintergrund hat selbst bei perfektem Fokus wenige Kanten. DiskMop prüft deshalb zuerst, wie viel des Fotos überhaupt Struktur hat, und überspringt Fotos, die fast vollständig flächig sind. Außerdem betrachtet es die schärfsten strukturierten Bereiche, sodass ein scharfes Gesicht vor schlichtem Hintergrund als scharf gilt.",
            "Das Ergebnis wird mit Apples Bildqualitätswert kombiniert, der Belichtung, Bildaufbau und Gesamtqualität bewertet, und daraus entsteht die Liste „Unscharf & schlecht aufgenommen“. Fotos, die Apples Analyse als Dokumente erkennt, etwa Belege und Notizen, bleiben außen vor. Alles läuft mit Apples Frameworks auf dem Telefon; nichts wird hochgeladen, und die App hat weder Server noch Benutzerkonto.",
          ],
        },
        {
          title: "Vor dem Löschen prüfen",
          content: [
            "Software kann Weichheit messen, aber nicht wissen, was ein Foto Ihnen bedeutet. Das einzige Bild vom letzten Geburtstag der Großmutter ist vielleicht leicht unscharf; eine verwackelte Konzertaufnahme kann trotzdem die Erinnerung sein, die Sie wollen. DiskMop erinnert Sie beim Öffnen der Liste daran und wählt nie etwas für Sie aus.",
            "Halten Sie ein Foto gedrückt, um es im Vollbild zu sehen und auf die Gesichter zu zoomen. Wenn Sie lieber Foto für Foto entscheiden, öffnen Sie „Unscharf & schlecht aufgenommen“ im Tab Wischen: rechts zum Behalten, links in den Korb, und nichts wird gelöscht, bevor Sie den Korb leeren und bestätigen. Für eine Handvoll fast identischer Versuche sind die Gruppen ähnlicher Fotos oft das bessere Werkzeug, wie unser Ratgeber zum [Finden doppelter und ähnlicher Fotos auf dem iPhone](/blog/find-duplicate-similar-photos-iphone) erklärt.",
            "Prüfen Sie vor dem Löschen eines unscharfen Live Photo, ob darin ein besseres Bild steckt. Öffnen Sie das Foto, tippen Sie auf Bearbeiten, dann auf die Live Photo-Taste, und ziehen Sie durch die Bilder; ist eines schärfer, wählen Sie „Als Schlüsselfoto“. Das Foto bleibt ein Live Photo, nun mit schärferem Standbild.",
          ],
        },
        {
          title: "Künftig weniger unscharfe Fotos",
          content: [
            "Die meisten Unschärfen haben vier Ursachen: Verwacklung, verfehlter Fokus, bewegte Motive und eine schmutzige Linse. Ein kurzes Abwischen der Linse beseitigt Dunst, der wie Unschärfe aussieht. Ein Tipp auf das Motiv vor dem Auslösen sagt der Kamera, worauf sie scharfstellen soll, und Gedrückthalten sperrt Fokus und Belichtung, damit sie beim Ausrichten nicht springen.",
            "Bei wenig Licht wechselt das iPhone in den Nachtmodus und belichtet eine Sekunde oder länger; stillzuhalten, bis die Aufnahme fertig ist, zählt mehr als alles andere. Für Kinder, Haustiere und Sport halten Sie den Auslöser im Serienbildmodus gedrückt oder drehen ein kurzes Video und wählen später das beste Bild, dann löschen Sie den Rest.",
            "Wenn Sie aufräumen, enden Sie in „Zuletzt gelöscht“: Bis Sie es leeren, zählen gelöschte Fotos weiter zu Ihrem Speicher. Der Scan ist in DiskMop kostenlos; ohne Abo können Sie bis zu fünf Fotos pro Tag löschen, und DiskMop Pro, ein Monatsabo mit 7-tägiger Gratis-Testphase, hebt das Limit auf. Sind die unscharfen Aufnahmen nur ein Teil des Problems, hilft [iPhone-Fotos per Wischen aufräumen](/blog/swipe-to-delete-photos-iphone) beim Rest der Mediathek.",
          ],
        },
      ],
      faq: [
        {
          question: "Kann die Fotos-App auf dem iPhone unscharfe Fotos finden?",
          answer:
            "Nein. Fotos hat kein Album, keinen Filter und keinen Suchbegriff für unscharfe oder verwackelte Fotos. Sie können sie nach Augenmaß löschen oder eine App nutzen, die die Schärfe misst.",
        },
        {
          question: "Wie entscheidet DiskMop, dass ein Foto unscharf ist?",
          answer:
            "Es misst feine Details in einer kleinen Kopie jedes Fotos, ignoriert fast vollständig flächige Fotos, prüft die schärfsten strukturierten Bereiche und kombiniert das Ergebnis mit Apples Bildqualitätswert. Dokumente wie Belege werden ausgeschlossen.",
        },
        {
          question: "Löscht DiskMop unscharfe Fotos automatisch?",
          answer:
            "Nein. Es listet sie auf und wählt nichts aus. Sie prüfen jedes Foto und entscheiden, und iOS bittet vor jedem Löschen um Bestätigung.",
        },
        {
          question: "Kann ich ein unscharfes Live Photo reparieren?",
          answer:
            "Manchmal. Tippen Sie unter Bearbeiten auf die Live Photo-Taste und sehen Sie sich die Bilder an; ist eines schärfer, wählen Sie „Als Schlüsselfoto“.",
        },
        {
          question: "Werden meine Fotos für den Scan hochgeladen?",
          answer:
            "Nein. Die Schärfemessung und Apples Qualitätswert werden auf dem iPhone berechnet. DiskMop hat keinen Server, und sein Datenschutzetikett im App Store lautet „Keine Daten erfasst“.",
        },
      ],
      verdict: [
        "Unscharfe Fotos sind mit der Fotos-App allein schwer zu finden, weil sie Schärfe nicht beurteilen kann. Ein Schärfe-Scan macht aus stundenlangem Scrollen eine kurze Liste, solange er schlichte Motive ignoriert und Ihnen die letzte Entscheidung überlässt.",
        "DiskMop für iPhone misst die Schärfe auf dem Gerät, überspringt flächige Fotos und Dokumente, kombiniert das Ergebnis mit Apples Qualitätswert und listet die Fotos unter „Unscharf & schlecht aufgenommen“ auf, ohne etwas vorauszuwählen. Der Scan ist kostenlos, bis zu fünf Fotos pro Tag lassen sich gratis löschen, und DiskMop Pro mit 7-tägiger Gratis-Testphase hebt das Limit auf.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Trouver et supprimer les photos floues sur iPhone (sans perdre un souvenir un peu flou)",
      metaDescription:
        "Photos n'a pas d'album pour les photos floues. Comment une analyse de netteté sur l'appareil trouve les clichés flous et bougés, et comment les revoir.",
      subtitle:
        "Pourquoi Photos ne sait pas trier le flou, comment fonctionne une mesure de netteté et que vérifier avant de supprimer",
      intro: [
        "Réponse courte : l'app Photos ne peut pas vous montrer uniquement les photos floues. Il n'existe ni album, ni filtre, ni terme de recherche qui trouve les clichés flous ou bougés ; la méthode intégrée consiste à faire défiler la photothèque et à les supprimer à l'œil. Une analyse de netteté fait ce travail pour vous : elle mesure la quantité de détails fins de chaque photo, liste celles qui passent sous un seuil et vous laisse décider.",
        "Ce guide explique pourquoi les photos floues sont difficiles à trouver, comment DiskMop pour iPhone mesure la netteté sur l'appareil sans signaler les ciels dégagés ni les murs blancs, comment revoir la liste sans supprimer une photo précieuse simplement un peu douce, et quelques habitudes de prise de vue pour faire moins de photos floues dès le départ.",
      ],
      keyTakeaways: [
        "Photos a des albums pour les captures d'écran, les vidéos et les doublons, mais rien qui regroupe les photos floues ou bougées ; les trouver à la main oblige à parcourir toute la photothèque.",
        "Une mesure de netteté compte les contours fins dans une petite copie de la photo : les photos nettes en ont beaucoup, les photos floues ou bougées peu.",
        "Les scènes unies, comme un mur blanc ou un ciel dégagé, ont peu de contours même parfaitement nettes ; une bonne analyse vérifie donc d'abord la présence de texture.",
        "DiskMop combine sa mesure de netteté avec le score de qualité d'image d'Apple et liste les résultats sous Floues et ratées ; les documents et reçus sont écartés, et rien n'est présélectionné.",
        "Une photo un peu floue peut être la seule image d'un moment ; regardez donc chacune en plein écran avant de supprimer.",
        "Une Live Photo floue peut parfois être sauvée : dans Modifier, choisissez une image plus nette comme photo clé.",
      ],
      dataTable: {
        caption: "Causes fréquentes des photos floues sur iPhone",
        columns: ["Cause", "À quoi cela ressemble", "Comment l'éviter"],
        rows: [
          [
            "Bougé de l'appareil",
            "Tout est étalé dans une direction, souvent en faible lumière",
            "Restez immobile, calez vos bras, gardez le téléphone stable en mode Nuit",
          ],
          [
            "Mise au point ratée",
            "Arrière-plan net, sujet flou",
            "Touchez le sujet pour faire la mise au point ; maintenez pour la verrouiller",
          ],
          [
            "Sujet en mouvement",
            "Sujet étalé, arrière-plan net",
            "Utilisez le mode Rafale ou plus de lumière, puis gardez la meilleure image",
          ],
          [
            "Objectif sale",
            "Image voilée, peu contrastée, lumières qui bavent",
            "Essuyez l'objectif avec un chiffon doux avant de photographier",
          ],
        ],
      },
      howTo: {
        name: "Trouver et supprimer les photos floues sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Analyser la photothèque",
            text: "Ouvrez DiskMop et autorisez l'accès à vos photos. L'analyse se fait sur le téléphone et mesure la netteté de chaque photo ; les résultats apparaissent pendant qu'elle se poursuit.",
          },
          {
            name: "Ouvrir la liste des photos floues",
            text: "Touchez Floues et ratées sur l'écran d'accueil. La liste montre les photos floues et bougées ainsi que celles dont le score de qualité d'image est très bas, des plus récentes aux plus anciennes.",
          },
          {
            name: "Examiner chaque photo en plein écran",
            text: "Maintenez le doigt sur une photo pour la voir en grand et zoomer. Gardez celles qui comptent même si elles sont douces ; ne cochez que celles dont vous êtes sûr.",
          },
          {
            name: "Ou les revoir une par une",
            text: "Dans l'onglet Balayer, choisissez Floues et ratées et balayez à droite pour garder, à gauche pour mettre à la corbeille. Videz la corbeille quand vous avez terminé.",
          },
          {
            name: "Vider Supprimés récemment",
            text: "Les photos supprimées attendent 30 jours dans Photos > Albums > Supprimés récemment. Ouvrez l'album, touchez Sélectionner puis Tout supprimer pour libérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi l'app Photos ne sait pas trier les photos floues",
          content: [
            "L'app Photos organise votre photothèque de nombreuses façons utiles : par date, par personnes, par lieux, par type de média, et elle trouve même les doublons exacts. Ce qu'elle ne fait pas, c'est juger si une photo est nette. Il n'y a pas d'album Floues sous Types de médias ou Utilitaires, et chercher des mots comme flou ou bougé ne renvoie pas les clichés que vous visez.",
            "Reste le défilement. Sur un petit écran et dans une grille de vignettes, le flou est étonnamment difficile à voir ; une photo qui semble correcte en vignette peut se révéler douce une fois ouverte. Vérifier quelques milliers de photos une par une est le genre de tâche qu'on ne termine jamais.",
            "Les photos floues ne sont pas qu'un désordre. Elles sont souvent prises en série, comme cinq essais lors d'un dîner peu éclairé ou un enfant qui ne voulait pas rester en place, et chacune occupe autant d'espace qu'une bonne photo. S'il s'agissait de Live Photos, chaque essai emporte aussi une courte vidéo.",
          ],
        },
        {
          title: "Comment fonctionne une analyse de netteté sur l'appareil",
          content: [
            "Une photo nette est pleine de contours précis : cils, feuilles, texture d'un tissu. Quand la mise au point est ratée ou que le téléphone a bougé, ces contours se fondent en dégradés doux. Une mesure de netteté rend cela visible pour un logiciel. DiskMop pour iPhone examine une petite copie en niveaux de gris de chaque photo et mesure à quel point la luminosité change d'un pixel à l'autre ; beaucoup de changements marqués signifient net, peu signifient flou.",
            "La difficulté est de ne pas signaler des photos nettes qui ont simplement peu de détails. Un mur blanc, un ciel dégagé, de la neige ou un produit sur fond uni a peu de contours même parfaitement net. DiskMop vérifie donc d'abord quelle part de la photo présente de la texture et ignore les photos presque entièrement unies. Il regarde aussi les zones texturées les plus nettes, de sorte qu'un visage net devant un fond uni compte comme net.",
            "Le résultat est combiné avec le score de qualité d'image d'Apple, qui évalue l'exposition, la composition et la qualité générale, pour former la liste Floues et ratées. Les photos que l'analyse d'Apple reconnaît comme des documents, comme les reçus et les notes, en sont écartées. Tout se fait sur le téléphone avec les frameworks d'Apple ; rien n'est envoyé, et l'app n'a ni serveur ni compte.",
          ],
        },
        {
          title: "Revoir avant de supprimer",
          content: [
            "Un logiciel peut mesurer la douceur, mais il ne peut pas savoir ce qu'une photo représente pour vous. La seule photo du dernier anniversaire d'une grand-mère est peut-être un peu floue ; un cliché bougé de concert peut rester le souvenir que vous voulez garder. DiskMop vous le rappelle quand vous ouvrez la liste, et ne sélectionne jamais rien à votre place.",
            "Maintenez le doigt sur une photo pour la voir en plein écran et zoomer sur les visages. Si vous préférez décider photo par photo, ouvrez Floues et ratées dans l'onglet Balayer : à droite pour garder, à gauche pour mettre à la corbeille, et rien n'est supprimé avant que vous vidiez la corbeille et confirmiez. Pour une poignée d'essais presque identiques, les groupes de photos similaires sont souvent le meilleur outil, comme l'explique notre guide pour [trouver les photos en double et similaires sur iPhone](/blog/find-duplicate-similar-photos-iphone).",
            "Avant de supprimer une Live Photo floue, vérifiez si une meilleure image s'y cache. Ouvrez la photo, touchez Modifier, puis le bouton Live Photo, et faites glisser à travers les images ; si l'une est plus nette, choisissez Définir comme photo clé. La photo reste une Live Photo, désormais avec une image fixe plus nette.",
          ],
        },
        {
          title: "Moins de photos floues à l'avenir",
          content: [
            "La plupart des flous viennent de quatre causes : le bougé, une mise au point ratée, un sujet en mouvement et un objectif sale. Un rapide coup de chiffon sur l'objectif supprime le voile qui ressemble à du flou. Toucher le sujet avant de déclencher indique à l'appareil où faire la mise au point, et maintenir le doigt verrouille la mise au point et l'exposition pour qu'elles ne sautent pas pendant le cadrage.",
            "En faible lumière, l'iPhone passe en mode Nuit et garde l'obturateur ouvert une seconde ou plus ; rester immobile jusqu'à la fin de la prise compte plus que tout. Pour les enfants, les animaux et le sport, maintenez le déclencheur en mode Rafale ou filmez une courte vidéo et choisissez plus tard la meilleure image, puis supprimez le reste.",
            "Quand vous faites le ménage, terminez par Supprimés récemment : tant que vous ne le videz pas, les photos supprimées comptent toujours dans votre stockage. L'analyse est gratuite dans DiskMop ; sans abonnement, vous pouvez supprimer jusqu'à cinq photos par jour, et DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours, supprime la limite. Si les photos floues ne sont qu'une partie du problème, [trier ses photos iPhone en balayant](/blog/swipe-to-delete-photos-iphone) couvre le reste de la photothèque.",
          ],
        },
      ],
      faq: [
        {
          question:
            "L'app Photos de l'iPhone peut-elle trouver les photos floues ?",
          answer:
            "Non. Photos n'a ni album, ni filtre, ni terme de recherche pour les photos floues ou bougées. Vous pouvez les supprimer à l'œil ou utiliser une app qui mesure la netteté.",
        },
        {
          question: "Comment DiskMop décide-t-il qu'une photo est floue ?",
          answer:
            "Il mesure les détails fins dans une petite copie de chaque photo, ignore les photos presque entièrement unies, examine les zones texturées les plus nettes et combine le résultat avec le score de qualité d'image d'Apple. Les documents comme les reçus sont exclus.",
        },
        {
          question: "DiskMop supprime-t-il les photos floues automatiquement ?",
          answer:
            "Non. Il les liste et ne sélectionne rien. Vous examinez chaque photo et décidez, et iOS demande une confirmation avant toute suppression.",
        },
        {
          question: "Puis-je corriger une Live Photo floue ?",
          answer:
            "Parfois. Dans Modifier, touchez le bouton Live Photo et parcourez les images ; si l'une est plus nette, choisissez Définir comme photo clé.",
        },
        {
          question: "Mes photos sont-elles envoyées pour l'analyse ?",
          answer:
            "Non. La mesure de netteté et le score de qualité d'Apple sont calculés sur l'iPhone. DiskMop n'a pas de serveur et son étiquette de confidentialité sur l'App Store indique Données non collectées.",
        },
      ],
      verdict: [
        "Les photos floues sont difficiles à trouver avec la seule app Photos, car elle n'a aucun moyen de juger la netteté. Une analyse de netteté transforme des heures de défilement en une courte liste, à condition d'ignorer les scènes unies et de vous laisser la décision finale.",
        "DiskMop pour iPhone mesure la netteté sur l'appareil, ignore les photos unies et les documents, combine le résultat avec le score de qualité d'Apple et liste les photos sous Floues et ratées sans rien présélectionner. L'analyse est gratuite, jusqu'à cinq photos par jour peuvent être supprimées gratuitement, et DiskMop Pro, avec un essai gratuit de 7 jours, supprime la limite.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo encontrar y borrar fotos borrosas en iPhone (sin perder un recuerdo algo suave)",
      metaDescription:
        "Fotos no tiene un álbum de fotos borrosas. Cómo un análisis de nitidez en el dispositivo encuentra fotos desenfocadas y movidas, y cómo revisarlas.",
      subtitle:
        "Por qué Fotos no sabe ordenar lo borroso, cómo funciona una medición de nitidez y qué revisar antes de borrar",
      intro: [
        "Respuesta corta: la app Fotos no puede mostrarte solo las fotos borrosas. No hay un álbum, un filtro ni un término de búsqueda que encuentre las fotos desenfocadas o movidas, así que la forma integrada es recorrer la fototeca y borrarlas a ojo. Un análisis de nitidez hace ese trabajo por ti: mide cuánto detalle fino contiene cada foto, muestra las que quedan por debajo de un umbral y te deja la decisión.",
        "Esta guía explica por qué las fotos borrosas son difíciles de encontrar, cómo DiskMop para iPhone mide la nitidez en el dispositivo sin marcar cielos despejados ni paredes blancas, cómo revisar la lista sin borrar una foto valiosa que simplemente salió algo suave, y unos hábitos de cámara para hacer menos fotos borrosas desde el principio.",
      ],
      keyTakeaways: [
        "Fotos tiene álbumes para capturas, vídeos y duplicados, pero nada que agrupe las fotos borrosas o movidas; encontrarlas a mano obliga a recorrer toda la fototeca.",
        "Una medición de nitidez cuenta los bordes finos en una copia pequeña de la foto: las fotos nítidas tienen muchos bordes definidos; las desenfocadas y movidas, pocos.",
        "Las escenas lisas, como una pared blanca o un cielo despejado, tienen pocos bordes aunque estén perfectamente nítidas, así que un buen análisis comprueba primero si hay textura.",
        "DiskMop combina su medición de nitidez con la puntuación de calidad de imagen de Apple y muestra el resultado en Borrosas y mal tomadas; los documentos y recibos quedan fuera y no se preselecciona nada.",
        "Una foto algo suave puede ser la única imagen de un momento; mira cada una a pantalla completa antes de borrarla.",
        "Una Live Photo borrosa a veces se puede salvar: en Editar, elige un fotograma más nítido como foto principal.",
      ],
      dataTable: {
        caption: "Causas habituales de las fotos borrosas en iPhone",
        columns: ["Causa", "Cómo se ve", "Cómo evitarla"],
        rows: [
          [
            "Movimiento de la cámara",
            "Todo corrido en una dirección, a menudo con poca luz",
            "Quédate quieto, apoya los brazos y mantén el teléfono firme en modo Noche",
          ],
          [
            "Enfoque fallido",
            "Fondo nítido, sujeto suave",
            "Toca el sujeto para enfocar; mantén pulsado para bloquear el enfoque",
          ],
          [
            "Sujeto en movimiento",
            "Sujeto corrido, fondo nítido",
            "Usa el modo Ráfaga o más luz y luego quédate con la mejor foto",
          ],
          [
            "Lente sucia",
            "Imagen velada, poco contraste, luces que brillan",
            "Limpia la lente con un paño suave antes de disparar",
          ],
        ],
      },
      howTo: {
        name: "Encontrar y borrar fotos borrosas en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Analiza la fototeca",
            text: "Abre DiskMop y permite el acceso a tus fotos. El análisis se hace en el teléfono y mide la nitidez de cada foto; los resultados aparecen mientras sigue en marcha.",
          },
          {
            name: "Abre la lista de fotos borrosas",
            text: "Toca Borrosas y mal tomadas en la pantalla de inicio. La lista muestra las fotos desenfocadas y movidas y las que tienen una puntuación de calidad muy baja, de la más reciente a la más antigua.",
          },
          {
            name: "Revisa cada foto a pantalla completa",
            text: "Mantén pulsada una foto para verla en grande y ampliarla. Conserva las que importan aunque estén suaves; marca solo aquellas de las que estés seguro.",
          },
          {
            name: "O revísalas una a una",
            text: "En la pestaña Deslizar, elige Borrosas y mal tomadas y desliza a la derecha para conservar o a la izquierda para dejar en la papelera. Vacía la papelera al terminar.",
          },
          {
            name: "Vacía Eliminados recientemente",
            text: "Las fotos borradas esperan 30 días en Fotos > Álbumes > Eliminados recientemente. Ábrelo, toca Seleccionar y Eliminar todo para liberar el espacio ahora.",
          },
        ],
      },
      sections: [
        {
          title: "Por qué la app Fotos no puede ordenar las fotos borrosas",
          content: [
            "La app Fotos organiza tu fototeca de muchas formas útiles: por fecha, personas, lugares, tipo de contenido, e incluso encuentra duplicados exactos. Lo que no hace es juzgar si una foto está nítida. No hay un álbum Borrosas en Tipos de contenido ni en Utilidades, y buscar palabras como borrosa o desenfocada no devuelve las fotos que buscas.",
            "Queda recorrerla. En una pantalla pequeña y en una cuadrícula de miniaturas, lo borroso cuesta sorprendentemente de ver; una foto que parece bien como miniatura puede resultar suave al abrirla. Revisar unos miles de fotos una a una es el tipo de tarea que nunca se termina.",
            "Las fotos borrosas no son solo desorden. A menudo se hacen en serie, como cinco intentos en una cena con poca luz o un niño que no se quedaba quieto, y cada una ocupa tanto como una buena foto. Si eran Live Photos, cada intento lleva además un vídeo corto.",
          ],
        },
        {
          title: "Cómo funciona un análisis de nitidez en el dispositivo",
          content: [
            "Una foto nítida está llena de bordes definidos: pestañas, hojas, la textura de una tela. Cuando una foto está desenfocada o el teléfono se movió, esos bordes se convierten en degradados suaves. Una medición de nitidez lo hace visible para un programa. DiskMop para iPhone mira una copia pequeña en gris de cada foto y mide con qué fuerza cambia el brillo de un píxel a otro; muchos cambios fuertes significan nítida, pocos significan borrosa.",
            "Lo difícil es no marcar fotos nítidas que simplemente tienen poco detalle. Una pared blanca, un cielo despejado, la nieve o un producto sobre fondo liso tienen pocos bordes aunque estén perfectamente enfocados. Por eso DiskMop comprueba primero qué parte de la foto tiene textura y se salta las fotos casi totalmente lisas. También mira las zonas con textura más nítidas, de modo que una cara nítida delante de un fondo liso cuenta como nítida.",
            "El resultado se combina con la puntuación de calidad de imagen de Apple, que valora la exposición, la composición y la calidad general, para formar la lista Borrosas y mal tomadas. Las fotos que el análisis de Apple reconoce como documentos, como recibos y notas, quedan fuera. Todo se ejecuta en el teléfono con los frameworks de Apple; no se sube nada y la app no tiene servidor ni cuenta.",
          ],
        },
        {
          title: "Revisa antes de borrar",
          content: [
            "Un programa puede medir la suavidad, pero no saber qué significa una foto para ti. La única foto del último cumpleaños de una abuela puede estar algo desenfocada; una foto movida de un concierto puede seguir siendo el recuerdo que quieres. DiskMop te lo recuerda cuando abres la lista y nunca selecciona nada por ti.",
            "Mantén pulsada cualquier foto para verla a pantalla completa y ampliar las caras. Si prefieres decidir foto a foto, abre Borrosas y mal tomadas en la pestaña Deslizar: a la derecha para conservar, a la izquierda para la papelera, y no se borra nada hasta que vacías la papelera y confirmas. Para un puñado de intentos casi iguales, los grupos de fotos similares suelen ser mejor herramienta, como explica nuestra guía para [encontrar fotos duplicadas y similares en iPhone](/blog/find-duplicate-similar-photos-iphone).",
            "Antes de borrar una Live Photo borrosa, mira si dentro se esconde un fotograma mejor. Abre la foto, toca Editar y luego el botón Live Photo, y arrastra por los fotogramas; si uno está más nítido, elige Convertir en foto principal. La foto sigue siendo una Live Photo, ahora con una imagen fija más nítida.",
          ],
        },
        {
          title: "Menos fotos borrosas en el futuro",
          content: [
            "La mayoría de las fotos borrosas tienen cuatro causas: movimiento, enfoque fallido, sujetos en movimiento y una lente sucia. Limpiar la lente rápidamente quita el velo que parece desenfoque. Tocar el sujeto antes de disparar le dice a la cámara dónde enfocar, y mantener pulsado bloquea el enfoque y la exposición para que no salten mientras encuadras.",
            "Con poca luz, el iPhone pasa al modo Noche y mantiene el obturador abierto un segundo o más; quedarse quieto hasta que termina la captura importa más que nada. Para niños, mascotas y deporte, mantén el disparador en modo Ráfaga o graba un vídeo corto y elige después la mejor imagen; luego borra el resto.",
            "Cuando limpies, termina en Eliminados recientemente: hasta que lo vacíes, las fotos borradas siguen contando en tu almacenamiento. El análisis es gratis en DiskMop; sin suscripción puedes borrar hasta cinco fotos al día, y DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita, elimina el límite. Si las fotos borrosas son solo una parte del problema, [limpiar las fotos del iPhone deslizando](/blog/swipe-to-delete-photos-iphone) cubre el resto de la fototeca.",
          ],
        },
      ],
      faq: [
        {
          question: "¿La app Fotos del iPhone puede encontrar fotos borrosas?",
          answer:
            "No. Fotos no tiene álbum, filtro ni término de búsqueda para fotos borrosas o movidas. Puedes borrarlas a ojo o usar una app que mida la nitidez.",
        },
        {
          question: "¿Cómo decide DiskMop que una foto está borrosa?",
          answer:
            "Mide el detalle fino en una copia pequeña de cada foto, ignora las fotos casi totalmente lisas, mira las zonas con textura más nítidas y combina el resultado con la puntuación de calidad de imagen de Apple. Los documentos como recibos quedan excluidos.",
        },
        {
          question: "¿DiskMop borra las fotos borrosas automáticamente?",
          answer:
            "No. Las muestra y no selecciona ninguna. Tú revisas cada foto y decides, e iOS pide confirmación antes de borrar nada.",
        },
        {
          question: "¿Puedo arreglar una Live Photo borrosa?",
          answer:
            "A veces. En Editar, toca el botón Live Photo y recorre los fotogramas; si uno está más nítido, elige Convertir en foto principal.",
        },
        {
          question: "¿Se suben mis fotos para el análisis?",
          answer:
            "No. La medición de nitidez y la puntuación de calidad de Apple se calculan en el iPhone. DiskMop no tiene servidor y su etiqueta de privacidad en el App Store indica Datos no recopilados.",
        },
      ],
      verdict: [
        "Las fotos borrosas son difíciles de encontrar solo con la app Fotos, porque no tiene forma de juzgar la nitidez. Un análisis de nitidez convierte horas de recorrer la fototeca en una lista corta, siempre que ignore las escenas lisas y te deje la decisión final.",
        "DiskMop para iPhone mide la nitidez en el dispositivo, se salta las fotos lisas y los documentos, combina el resultado con la puntuación de calidad de Apple y muestra las fotos en Borrosas y mal tomadas sin preseleccionar nada. El análisis es gratis, se pueden borrar hasta cinco fotos al día sin coste y DiskMop Pro, con 7 días de prueba gratuita, elimina el límite.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come trovare ed eliminare le foto sfocate su iPhone (senza perdere un ricordo un po' morbido)",
      metaDescription:
        "L'app Foto non ha un album per le foto sfocate. Come un'analisi della nitidezza sul dispositivo trova gli scatti sfocati e mossi, come rivederli e come farne meno.",
      subtitle:
        "Perché Foto non sa ordinare lo sfocato, come funziona una misura della nitidezza e cosa controllare prima di eliminare",
      intro: [
        "Risposta breve: l'app Foto non può mostrarti solo le foto sfocate. Non esistono album, filtri o termini di ricerca che trovino gli scatti fuori fuoco o mossi, quindi il metodo integrato è scorrere la libreria ed eliminarli a occhio. Un'analisi della nitidezza fa questo lavoro per te: misura quanti dettagli fini contiene ogni foto, elenca quelle sotto una soglia e lascia a te la decisione.",
        "Questa guida spiega perché le foto sfocate sono difficili da trovare, come DiskMop per iPhone misura la nitidezza sul dispositivo senza segnalare cieli limpidi e pareti bianche, come rivedere l'elenco senza eliminare una foto preziosa venuta solo un po' morbida, e alcune abitudini di scatto per fare meno foto sfocate fin dall'inizio.",
      ],
      keyTakeaways: [
        "Foto ha album per screenshot, video e duplicati, ma nulla che raccolga le foto sfocate o mosse; trovarle a mano significa scorrere tutta la libreria.",
        "Una misura della nitidezza conta i contorni fini in una piccola copia della foto: le foto nitide ne hanno molti e definiti, quelle sfocate o mosse pochi.",
        "Le scene uniformi, come una parete bianca o un cielo limpido, hanno pochi contorni anche se perfettamente nitide, quindi una buona analisi controlla prima che ci sia trama.",
        "DiskMop combina la sua misura della nitidezza con il punteggio di qualità dell'immagine di Apple ed elenca i risultati in Sfocate e venute male; documenti e ricevute restano fuori e nulla è preselezionato.",
        "Una foto un po' morbida può essere l'unica immagine di un momento, quindi guarda ognuna a schermo intero prima di eliminarla.",
        "Una Live Photo sfocata a volte si può salvare: in Modifica scegli un fotogramma più nitido come foto principale.",
      ],
      dataTable: {
        caption: "Cause comuni delle foto sfocate su iPhone",
        columns: ["Causa", "Come appare", "Come evitarla"],
        rows: [
          [
            "Mosso della fotocamera",
            "Tutto strisciato in una direzione, spesso con poca luce",
            "Stai fermo, appoggia le braccia, tieni il telefono saldo in modalità Notte",
          ],
          [
            "Messa a fuoco sbagliata",
            "Sfondo nitido, soggetto morbido",
            "Tocca il soggetto per mettere a fuoco; tieni premuto per bloccarla",
          ],
          [
            "Soggetto in movimento",
            "Soggetto strisciato, sfondo nitido",
            "Usa la modalità Raffica o più luce, poi tieni lo scatto migliore",
          ],
          [
            "Obiettivo sporco",
            "Immagine velata, poco contrasto, luci che si allargano",
            "Pulisci l'obiettivo con un panno morbido prima di scattare",
          ],
        ],
      },
      howTo: {
        name: "Trovare ed eliminare le foto sfocate su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Analizza la libreria",
            text: "Apri DiskMop e consenti l'accesso alle foto. L'analisi avviene sul telefono e misura la nitidezza di ogni foto; i risultati compaiono mentre è ancora in corso.",
          },
          {
            name: "Apri l'elenco delle foto sfocate",
            text: "Tocca Sfocate e venute male nella schermata principale. L'elenco mostra le foto sfocate e mosse e quelle con un punteggio di qualità molto basso, dalle più recenti.",
          },
          {
            name: "Guarda ogni foto a schermo intero",
            text: "Tieni premuta una foto per vederla in grande e ingrandirla. Tieni quelle importanti anche se morbide; spunta solo quelle su cui sei sicuro.",
          },
          {
            name: "Oppure rivedile una alla volta",
            text: "Nella scheda Scorri scegli Sfocate e venute male e scorri a destra per tenere, a sinistra per mettere nel cestino. Svuota il cestino quando hai finito.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Le foto eliminate restano 30 giorni in Foto > Album > Eliminati di recente. Aprilo, tocca Seleziona ed Elimina tutto per liberare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Perché l'app Foto non sa ordinare le foto sfocate",
          content: [
            "L'app Foto organizza la libreria in molti modi utili: per data, persone, luoghi, tipo di media, e trova perfino i duplicati esatti. Quello che non fa è giudicare se una foto è nitida. Non c'è un album Sfocate in Tipi di media o in Utility, e cercare parole come sfocato o mosso non restituisce gli scatti che intendi.",
            "Resta lo scorrimento. Su uno schermo piccolo e in una griglia di miniature lo sfocato è sorprendentemente difficile da vedere; una foto che sembra a posto come miniatura può rivelarsi morbida una volta aperta. Controllare qualche migliaio di foto una per una è il tipo di lavoro che non si finisce mai.",
            "Le foto sfocate non sono solo disordine. Spesso vengono scattate in serie, come cinque tentativi a una cena poco illuminata o un bambino che non voleva stare fermo, e ognuna occupa lo stesso spazio di una buona foto. Se erano Live Photo, ogni tentativo porta con sé anche un breve video.",
          ],
        },
        {
          title: "Come funziona un'analisi della nitidezza sul dispositivo",
          content: [
            "Una foto nitida è piena di contorni definiti: ciglia, foglie, la trama di un tessuto. Quando una foto è fuori fuoco o il telefono si è mosso, quei contorni si sciolgono in sfumature morbide. Una misura della nitidezza rende tutto ciò visibile a un software. DiskMop per iPhone esamina una piccola copia in grigio di ogni foto e misura quanto cambia la luminosità da un pixel all'altro; molti cambiamenti forti significano nitida, pochi significano sfocata.",
            "La parte difficile è non segnalare foto nitide che hanno semplicemente pochi dettagli. Una parete bianca, un cielo limpido, la neve o un prodotto su sfondo uniforme hanno pochi contorni anche se perfettamente a fuoco. DiskMop controlla quindi prima quanta parte della foto ha una trama e salta le foto quasi del tutto uniformi. Guarda anche le zone con trama più nitide, così un volto nitido davanti a uno sfondo uniforme conta come nitido.",
            "Il risultato viene combinato con il punteggio di qualità dell'immagine di Apple, che valuta esposizione, composizione e qualità generale, per formare l'elenco Sfocate e venute male. Le foto che l'analisi di Apple riconosce come documenti, come ricevute e note, restano fuori. Tutto avviene sul telefono con i framework di Apple; non viene caricato nulla e l'app non ha server né account.",
          ],
        },
        {
          title: "Rivedi prima di eliminare",
          content: [
            "Un software può misurare la morbidezza, ma non sapere cosa significa una foto per te. L'unica foto dell'ultimo compleanno della nonna può essere un po' sfocata; uno scatto mosso di un concerto può restare il ricordo che vuoi. DiskMop te lo ricorda quando apri l'elenco e non seleziona mai nulla al posto tuo.",
            "Tieni premuta una foto per vederla a schermo intero e ingrandire i volti. Se preferisci decidere una foto alla volta, apri Sfocate e venute male nella scheda Scorri: a destra per tenere, a sinistra per il cestino, e nulla viene eliminato finché non svuoti il cestino e confermi. Per una manciata di tentativi quasi identici, i gruppi di foto simili sono spesso lo strumento migliore, come spiega la nostra guida per [trovare foto duplicate e simili su iPhone](/blog/find-duplicate-similar-photos-iphone).",
            "Prima di eliminare una Live Photo sfocata, controlla se al suo interno si nasconde un fotogramma migliore. Apri la foto, tocca Modifica, poi il pulsante Live Photo, e trascina tra i fotogrammi; se uno è più nitido, scegli Imposta come foto principale. La foto resta una Live Photo, ora con un'immagine fissa più nitida.",
          ],
        },
        {
          title: "Meno foto sfocate in futuro",
          content: [
            "La maggior parte delle foto sfocate ha quattro cause: mosso, messa a fuoco sbagliata, soggetti in movimento e un obiettivo sporco. Una rapida pulizia dell'obiettivo elimina il velo che sembra sfocatura. Toccare il soggetto prima di scattare dice alla fotocamera dove mettere a fuoco, e tenere premuto blocca messa a fuoco ed esposizione perché non saltino mentre inquadri.",
            "Con poca luce l'iPhone passa alla modalità Notte e tiene aperto l'otturatore per un secondo o più; restare fermi fino alla fine dello scatto conta più di tutto. Per bambini, animali e sport, tieni premuto il pulsante di scatto in modalità Raffica o gira un breve video e scegli poi il fotogramma migliore, quindi elimina il resto.",
            "Quando fai pulizia, concludi in Eliminati di recente: finché non lo svuoti, le foto eliminate continuano a occupare spazio. L'analisi è gratuita in DiskMop; senza abbonamento puoi eliminare fino a cinque foto al giorno, e DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita, rimuove il limite. Se le foto sfocate sono solo una parte del problema, [pulire le foto dell'iPhone scorrendo](/blog/swipe-to-delete-photos-iphone) copre il resto della libreria.",
          ],
        },
      ],
      faq: [
        {
          question: "L'app Foto dell'iPhone può trovare le foto sfocate?",
          answer:
            "No. Foto non ha album, filtri o termini di ricerca per le foto sfocate o mosse. Puoi eliminarle a occhio o usare un'app che misura la nitidezza.",
        },
        {
          question: "Come decide DiskMop che una foto è sfocata?",
          answer:
            "Misura i dettagli fini in una piccola copia di ogni foto, ignora le foto quasi del tutto uniformi, controlla le zone con trama più nitide e combina il risultato con il punteggio di qualità dell'immagine di Apple. I documenti come le ricevute sono esclusi.",
        },
        {
          question: "DiskMop elimina automaticamente le foto sfocate?",
          answer:
            "No. Le elenca e non ne seleziona nessuna. Sei tu a rivedere ogni foto e decidere, e iOS chiede conferma prima di eliminare qualsiasi cosa.",
        },
        {
          question: "Posso sistemare una Live Photo sfocata?",
          answer:
            "A volte. In Modifica tocca il pulsante Live Photo e scorri i fotogrammi; se uno è più nitido, scegli Imposta come foto principale.",
        },
        {
          question: "Le mie foto vengono caricate per l'analisi?",
          answer:
            "No. La misura della nitidezza e il punteggio di qualità di Apple vengono calcolati sull'iPhone. DiskMop non ha server e la sua etichetta sulla privacy nell'App Store indica Dati non raccolti.",
        },
      ],
      verdict: [
        "Le foto sfocate sono difficili da trovare con la sola app Foto, perché non ha modo di giudicare la nitidezza. Un'analisi della nitidezza trasforma ore di scorrimento in un breve elenco, purché ignori le scene uniformi e lasci a te la decisione finale.",
        "DiskMop per iPhone misura la nitidezza sul dispositivo, salta le foto uniformi e i documenti, combina il risultato con il punteggio di qualità di Apple ed elenca le foto in Sfocate e venute male senza preselezionare nulla. L'analisi è gratuita, si possono eliminare gratis fino a cinque foto al giorno e DiskMop Pro, con 7 giorni di prova gratuita, rimuove il limite.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como encontrar e apagar fotos borradas no iPhone (sem perder uma lembrança meio suave)",
      metaDescription:
        "O app Fotos não tem um álbum de fotos borradas. Como uma análise de nitidez no aparelho encontra fotos fora de foco e tremidas, como revisá-las e como tirar menos.",
      subtitle:
        "Por que o Fotos não separa o que está borrado, como funciona uma medição de nitidez e o que conferir antes de apagar",
      intro: [
        "Resposta curta: o app Fotos não consegue mostrar só as fotos borradas. Não existe álbum, filtro ou termo de busca que encontre fotos fora de foco ou tremidas, então o jeito nativo é rolar a fototeca e apagá-las no olho. Uma análise de nitidez faz esse trabalho por você: mede quanto detalhe fino cada foto tem, lista as que ficam abaixo de um limite e deixa a decisão com você.",
        "Este guia explica por que fotos borradas são difíceis de encontrar, como o DiskMop para iPhone mede a nitidez no aparelho sem marcar céus limpos e paredes brancas, como revisar a lista sem apagar uma foto preciosa que só saiu um pouco suave, e alguns hábitos de câmera para tirar menos fotos borradas desde o início.",
      ],
      keyTakeaways: [
        "O Fotos tem álbuns para capturas de tela, vídeos e duplicatas, mas nada que reúna fotos borradas ou tremidas; encontrá-las à mão significa rolar a fototeca inteira.",
        "Uma medição de nitidez conta as bordas finas numa cópia pequena da foto: fotos nítidas têm muitas bordas definidas; fotos fora de foco e tremidas, poucas.",
        "Cenas lisas, como uma parede branca ou um céu limpo, têm poucas bordas mesmo perfeitamente nítidas, então uma boa análise confere primeiro se há textura.",
        "O DiskMop combina sua medição de nitidez com a nota de qualidade de imagem da Apple e lista o resultado em Desfocadas e mal tiradas; documentos e recibos ficam de fora e nada é pré-selecionado.",
        "Uma foto meio suave pode ser a única imagem de um momento, então veja cada uma em tela cheia antes de apagar.",
        "Uma Live Photo borrada às vezes pode ser salva: em Editar, escolha um quadro mais nítido como foto principal.",
      ],
      dataTable: {
        caption: "Causas comuns de fotos borradas no iPhone",
        columns: ["Causa", "Como fica", "Como evitar"],
        rows: [
          [
            "Câmera tremida",
            "Tudo arrastado numa direção, muitas vezes com pouca luz",
            "Fique parado, apoie os braços e mantenha o telefone firme no modo Noite",
          ],
          [
            "Foco errado",
            "Fundo nítido, assunto suave",
            "Toque no assunto para focar; toque e segure para travar o foco",
          ],
          [
            "Assunto em movimento",
            "Assunto arrastado, fundo nítido",
            "Use o modo Sequência ou mais luz e depois fique com a melhor foto",
          ],
          [
            "Lente suja",
            "Imagem enevoada, pouco contraste, luzes que brilham",
            "Limpe a lente com um pano macio antes de fotografar",
          ],
        ],
      },
      howTo: {
        name: "Encontrar e apagar fotos borradas no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Analise a fototeca",
            text: "Abra o DiskMop e permita o acesso às suas fotos. A análise acontece no telefone e mede a nitidez de cada foto; os resultados aparecem enquanto ela ainda está rodando.",
          },
          {
            name: "Abra a lista de fotos borradas",
            text: "Toque em Desfocadas e mal tiradas na tela inicial. A lista mostra fotos fora de foco e tremidas e as que têm nota de qualidade muito baixa, das mais recentes para as mais antigas.",
          },
          {
            name: "Veja cada foto em tela cheia",
            text: "Toque e segure uma foto para vê-la grande e ampliar. Mantenha as importantes mesmo que estejam suaves; marque só aquelas de que você tem certeza.",
          },
          {
            name: "Ou revise uma de cada vez",
            text: "Na aba Deslizar, escolha Desfocadas e mal tiradas e deslize para a direita para manter ou para a esquerda para pôr no cesto. Esvazie o cesto quando terminar.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "As fotos apagadas esperam 30 dias em Fotos > Álbuns > Apagados Recentemente. Abra o álbum, toque em Selecionar e Apagar Tudo para liberar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title: "Por que o app Fotos não consegue separar fotos borradas",
          content: [
            "O app Fotos organiza sua fototeca de muitas formas úteis: por data, pessoas, lugares, tipo de mídia, e até encontra duplicatas exatas. O que ele não faz é julgar se uma foto está nítida. Não existe um álbum Borradas em Tipos de Mídia ou Utilitários, e buscar palavras como borrada ou fora de foco não traz as fotos que você quer.",
            "Sobra rolar. Numa tela pequena e numa grade de miniaturas, o borrado é surpreendentemente difícil de ver; uma foto que parece boa em miniatura pode se revelar suave ao ser aberta. Conferir alguns milhares de fotos uma a uma é o tipo de tarefa que nunca termina.",
            "Fotos borradas não são só bagunça. Muitas vezes são tiradas em série, como cinco tentativas num jantar com pouca luz ou uma criança que não parava quieta, e cada uma ocupa tanto espaço quanto uma boa foto. Se eram Live Photos, cada tentativa ainda leva um vídeo curto junto.",
          ],
        },
        {
          title: "Como funciona uma análise de nitidez no aparelho",
          content: [
            "Uma foto nítida é cheia de bordas definidas: cílios, folhas, a textura de um tecido. Quando uma foto sai fora de foco ou o telefone se mexe, essas bordas viram degradês suaves. Uma medição de nitidez torna isso visível para um programa. O DiskMop para iPhone olha uma cópia pequena e cinza de cada foto e mede com que força o brilho muda de um pixel para outro; muitas mudanças fortes significam nítida, poucas significam borrada.",
            "O difícil é não marcar fotos nítidas que simplesmente têm pouco detalhe. Uma parede branca, um céu limpo, neve ou um produto sobre fundo liso têm poucas bordas mesmo perfeitamente focados. Por isso o DiskMop confere primeiro quanto da foto tem textura e pula as fotos quase totalmente lisas. Ele também olha as áreas com textura mais nítidas, de modo que um rosto nítido diante de um fundo liso conta como nítido.",
            "O resultado é combinado com a nota de qualidade de imagem da Apple, que avalia exposição, composição e qualidade geral, para formar a lista Desfocadas e mal tiradas. As fotos que a análise da Apple reconhece como documentos, como recibos e anotações, ficam de fora. Tudo roda no telefone com os frameworks da Apple; nada é enviado, e o app não tem servidor nem conta.",
          ],
        },
        {
          title: "Revise antes de apagar",
          content: [
            "Um programa pode medir a suavidade, mas não sabe o que uma foto significa para você. A única foto do último aniversário da avó pode estar um pouco fora de foco; uma foto tremida de um show pode continuar sendo a lembrança que você quer. O DiskMop lembra disso quando você abre a lista e nunca seleciona nada por você.",
            "Toque e segure qualquer foto para vê-la em tela cheia e ampliar os rostos. Se preferir decidir uma foto de cada vez, abra Desfocadas e mal tiradas na aba Deslizar: para a direita para manter, para a esquerda para o cesto, e nada é apagado até você esvaziar o cesto e confirmar. Para um punhado de tentativas quase iguais, os grupos de fotos semelhantes costumam ser a melhor ferramenta, como explica nosso guia para [encontrar fotos duplicadas e semelhantes no iPhone](/blog/find-duplicate-similar-photos-iphone).",
            "Antes de apagar uma Live Photo borrada, veja se há um quadro melhor escondido nela. Abra a foto, toque em Editar e depois no botão Live Photo, e arraste pelos quadros; se um estiver mais nítido, escolha Tornar Foto Principal. A foto continua sendo uma Live Photo, agora com uma imagem fixa mais nítida.",
          ],
        },
        {
          title: "Menos fotos borradas no futuro",
          content: [
            "A maioria das fotos borradas tem quatro causas: tremor, foco errado, assuntos em movimento e lente suja. Uma limpeza rápida da lente tira a névoa que parece desfoque. Tocar no assunto antes de fotografar diz à câmera onde focar, e tocar e segurar trava o foco e a exposição para que não pulem enquanto você enquadra.",
            "Com pouca luz, o iPhone entra no modo Noite e deixa o obturador aberto por um segundo ou mais; ficar parado até a captura terminar importa mais que tudo. Para crianças, animais e esportes, segure o botão no modo Sequência ou grave um vídeo curto e escolha depois o melhor quadro; então apague o resto.",
            "Quando fizer a limpeza, termine em Apagados Recentemente: até você esvaziá-lo, as fotos apagadas continuam ocupando armazenamento. A análise é grátis no DiskMop; sem assinatura, você pode apagar até cinco fotos por dia, e o DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito, remove o limite. Se as fotos borradas são só parte do problema, [limpar as fotos do iPhone deslizando](/blog/swipe-to-delete-photos-iphone) cobre o resto da fototeca.",
          ],
        },
      ],
      faq: [
        {
          question: "O app Fotos do iPhone consegue encontrar fotos borradas?",
          answer:
            "Não. O Fotos não tem álbum, filtro ou termo de busca para fotos borradas ou tremidas. Você pode apagá-las no olho ou usar um app que mede a nitidez.",
        },
        {
          question: "Como o DiskMop decide que uma foto está borrada?",
          answer:
            "Ele mede o detalhe fino numa cópia pequena de cada foto, ignora fotos quase totalmente lisas, confere as áreas com textura mais nítidas e combina o resultado com a nota de qualidade de imagem da Apple. Documentos como recibos ficam de fora.",
        },
        {
          question: "O DiskMop apaga fotos borradas automaticamente?",
          answer:
            "Não. Ele lista as fotos e não seleciona nenhuma. Você revisa cada foto e decide, e o iOS pede confirmação antes de apagar qualquer coisa.",
        },
        {
          question: "Posso consertar uma Live Photo borrada?",
          answer:
            "Às vezes. Em Editar, toque no botão Live Photo e passe pelos quadros; se um estiver mais nítido, escolha Tornar Foto Principal.",
        },
        {
          question: "Minhas fotos são enviadas para a análise?",
          answer:
            "Não. A medição de nitidez e a nota de qualidade da Apple são calculadas no iPhone. O DiskMop não tem servidor e o rótulo de privacidade na App Store diz Dados Não Coletados.",
        },
      ],
      verdict: [
        "Fotos borradas são difíceis de encontrar só com o app Fotos, porque ele não tem como julgar a nitidez. Uma análise de nitidez transforma horas de rolagem numa lista curta, desde que ignore cenas lisas e deixe a decisão final com você.",
        "O DiskMop para iPhone mede a nitidez no aparelho, pula fotos lisas e documentos, combina o resultado com a nota de qualidade da Apple e lista as fotos em Desfocadas e mal tiradas sem pré-selecionar nada. A análise é grátis, até cinco fotos por dia podem ser apagadas sem custo e o DiskMop Pro, com 7 dias de teste gratuito, remove o limite.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone のぼやけた写真を見つけて削除する方法（少しぼけた思い出は失わずに）",
      metaDescription:
        "写真アプリにはぼやけた写真のアルバムがありません。端末内のシャープネス分析でピンぼけや手ぶれ写真を見つける方法、安全な確認のしかた、ぶれを減らすコツを解説します。",
      subtitle:
        "写真アプリがぼけを仕分けられない理由、シャープネス測定のしくみ、削除前に確認すべきこと",
      intro: [
        "結論から言うと、写真アプリではぼやけた写真だけを表示することはできません。ピンぼけや手ぶれの写真を見つけるアルバムも、フィルタも、検索語もないため、標準の方法はライブラリをスクロールして目で見て削除することです。シャープネス分析はその作業を代わりに行います。各写真に含まれる細かなディテールの量を測り、基準を下回るものを一覧にして、判断はあなたに任せます。",
        "このガイドでは、ぼやけた写真が見つけにくい理由、iPhone 版 DiskMop が晴れた空や白い壁を誤って拾わずに端末上でシャープネスを測るしくみ、少しぼけているだけの大切な写真を消さずに一覧を確認する方法、そしてそもそもぶれた写真を減らすためのカメラの習慣を紹介します。",
      ],
      keyTakeaways: [
        "写真アプリにはスクリーンショット、ビデオ、重複項目のアルバムはありますが、ぼやけた写真や手ぶれ写真をまとめるものはありません。手で探すにはライブラリ全体をスクロールすることになります。",
        "シャープネス測定は写真の小さなコピーに含まれる細かなエッジを数えます。シャープな写真にはくっきりしたエッジが多く、ピンぼけや手ぶれの写真には少ししかありません。",
        "白い壁や晴れた空のような単調な場面は、完全にピントが合っていてもエッジが少ないため、優れた分析はぼけと判定する前にまず質感があるかを確認します。",
        "DiskMop は独自のシャープネス測定を Apple の画像品質スコアと組み合わせ、結果を「ぶれ・失敗写真」に表示します。書類やレシートは除外され、事前選択はありません。",
        "少しぼけた写真が、その瞬間の唯一の 1 枚かもしれません。削除する前に必ず全画面で確認しましょう。",
        "ぼやけた Live Photos は救える場合があります。「編集」で、よりシャープなフレームをキー写真に選んでください。",
      ],
      dataTable: {
        caption: "iPhone の写真がぼやける主な原因",
        columns: ["原因", "見た目", "防ぎ方"],
        rows: [
          [
            "手ぶれ",
            "全体が一方向に流れる。暗い場所で多い",
            "体を固定し、腕を支え、ナイトモード中は iPhone を動かさない",
          ],
          [
            "ピントのずれ",
            "背景はシャープで被写体がぼける",
            "被写体をタップしてピントを合わせ、長押しで固定する",
          ],
          [
            "被写体ぶれ",
            "被写体が流れ、背景はシャープ",
            "バーストモードや明るい環境で撮り、いちばん良い 1 枚を残す",
          ],
          [
            "レンズの汚れ",
            "かすんで低コントラスト、光がにじむ",
            "撮影前に柔らかい布でレンズを拭く",
          ],
        ],
      },
      howTo: {
        name: "iPhone のぼやけた写真を見つけて削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "ライブラリをスキャンする",
            text: "DiskMop を開いて写真へのアクセスを許可します。スキャンは iPhone 上で行われ、すべての写真のシャープネスを測ります。結果はスキャン中から表示され始めます。",
          },
          {
            name: "ぼやけた写真の一覧を開く",
            text: "ホーム画面の「ぶれ・失敗写真」をタップします。ピンぼけや手ぶれの写真と、画像品質スコアが非常に低い写真が新しい順に表示されます。",
          },
          {
            name: "1 枚ずつ全画面で確認する",
            text: "写真を長押しすると大きく表示され、ズームできます。大切な写真はぼけていても残し、確信が持てるものだけにチェックを入れます。",
          },
          {
            name: "または 1 枚ずつ判断する",
            text: "「スワイプ」タブで「ぶれ・失敗写真」を選び、残すなら右、かごに入れるなら左にスワイプします。終わったらかごを空にします。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "削除した写真は写真 > アルバム > 最近削除した項目に 30 日間残ります。開いて「選択」>「すべて削除」をタップすれば、すぐに容量が空きます。",
          },
        ],
      },
      sections: [
        {
          title: "写真アプリがぼやけた写真を仕分けられない理由",
          content: [
            "写真アプリは、日付、人物、場所、メディアタイプなど、さまざまな便利な方法でライブラリを整理し、完全な重複まで見つけてくれます。しかし写真がシャープかどうかは判断しません。メディアタイプやユーティリティに「ぼやけた写真」のアルバムはなく、「ぼけ」や「ピンぼけ」といった言葉で検索しても目的の写真は出てきません。",
            "残る手段はスクロールです。小さな画面のサムネイルのグリッドでは、ぼけは意外なほど見分けにくく、サムネイルでは問題なく見えた写真が開くとぼやけていることもあります。数千枚を 1 枚ずつ確認するのは、決して終わらない種類の作業です。",
            "ぼやけた写真はただ散らかるだけではありません。薄暗いディナーでの 5 回の撮り直しや、じっとしていない子どもなど、まとめて撮られることが多く、1 枚 1 枚が良い写真と同じだけ容量を使います。それが Live Photos なら、撮り直しのたびに短い動画も付いてきます。",
          ],
        },
        {
          title: "端末内のシャープネス分析のしくみ",
          content: [
            "シャープな写真には、まつ毛や葉、布の質感など、くっきりしたエッジがたくさんあります。ピントが外れたり iPhone が動いたりすると、そのエッジはなめらかなグラデーションに崩れます。シャープネス測定は、これをソフトウェアに見える形にします。iPhone 版 DiskMop は各写真の小さなグレースケールのコピーを見て、隣り合うピクセルの明るさがどれだけ強く変化するかを測ります。強い変化が多ければシャープ、少なければぼけです。",
            "難しいのは、単に細部が少ないだけのシャープな写真を拾わないことです。白い壁、晴れた空、雪、無地の背景に置いた商品などは、ピントが完璧でもエッジが少なくなります。そのため DiskMop は、まず写真のどれだけの部分に質感があるかを確認し、ほぼ全体が平坦な写真は対象外にします。さらに質感のある部分のうち最もシャープな箇所も確認するので、無地の背景の前にあるシャープな顔はシャープと判定されます。",
            "この結果を、露出、構図、全体的な品質を評価する Apple の画像品質スコアと組み合わせて、「ぶれ・失敗写真」の一覧ができあがります。レシートやメモなど、Apple の解析が書類と認識した写真は除外されます。処理はすべて Apple のフレームワークを使って iPhone 上で行われ、何もアップロードされません。アプリにはサーバーもアカウントもありません。",
          ],
        },
        {
          title: "削除する前に確認する",
          content: [
            "ソフトウェアはぼけを測れても、その写真があなたにとって何を意味するかはわかりません。祖母の最後の誕生日の唯一の写真が少しピンぼけかもしれませんし、手ぶれしたライブの写真こそ残したい思い出かもしれません。DiskMop は一覧を開いたときにそのことを伝え、勝手に何かを選択することはありません。",
            "写真を長押しすれば全画面で表示され、顔にズームできます。1 枚ずつ判断したいなら、「スワイプ」タブで「ぶれ・失敗写真」を開きましょう。右で残す、左でかごへ。かごを空にして承認するまで何も削除されません。ほぼ同じ撮り直しが数枚ある場合は、類似写真のグループのほうが向いていることが多く、詳しくは[iPhone で重複写真と類似写真を見つける方法](/blog/find-duplicate-similar-photos-iphone)で解説しています。",
            "ぼやけた Live Photos を削除する前に、中にもっと良いフレームが隠れていないか確かめましょう。写真を開いて「編集」をタップし、Live Photos ボタンをタップしてフレームをドラッグします。よりシャープなフレームがあれば「キー写真に設定」を選びます。写真は Live Photos のまま、よりシャープな静止画になります。",
          ],
        },
        {
          title: "これからぼやけた写真を減らすには",
          content: [
            "ぼけの原因の多くは、手ぶれ、ピントのずれ、被写体ぶれ、レンズの汚れの 4 つです。レンズをさっと拭くだけで、ぼけのように見えるかすみが消えます。撮る前に被写体をタップすればカメラにピントの位置を伝えられ、長押しすればピントと露出が固定されて、構図を決める間に変わることがありません。",
            "暗い場所では iPhone がナイトモードに切り替わり、1 秒以上シャッターを開けたままにします。撮影が終わるまで動かないことが何より大切です。子どもやペット、スポーツは、バーストモードでシャッターを押し続けるか短い動画を撮り、あとでいちばん良いコマを選んで残りを削除しましょう。",
            "整理したら、最後は「最近削除した項目」で締めくくります。空にするまで、削除した写真はストレージを使い続けます。DiskMop のスキャンは無料です。サブスクリプションなしでも 1 日 5 枚まで削除でき、7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro なら制限がなくなります。ぼやけた写真が問題の一部にすぎないなら、[スワイプで iPhone の写真を整理する方法](/blog/swipe-to-delete-photos-iphone)で残りのライブラリも見直せます。",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone の写真アプリでぼやけた写真を見つけられますか？",
          answer:
            "いいえ。写真アプリには、ぼやけた写真や手ぶれ写真のためのアルバムも、フィルタも、検索語もありません。目で見て削除するか、シャープネスを測るアプリを使います。",
        },
        {
          question:
            "DiskMop はどうやって写真がぼやけていると判断するのですか？",
          answer:
            "各写真の小さなコピーで細かなディテールを測り、ほぼ全体が平坦な写真は対象外にし、質感のある部分で最もシャープな箇所を確認したうえで、Apple の画像品質スコアと組み合わせます。レシートなどの書類は除外されます。",
        },
        {
          question: "DiskMop はぼやけた写真を自動で削除しますか？",
          answer:
            "いいえ。一覧にするだけで、何も選択しません。1 枚ずつ確認して判断するのはあなたで、削除の前には iOS が確認を求めます。",
        },
        {
          question: "ぼやけた Live Photos は直せますか？",
          answer:
            "場合によっては直せます。「編集」で Live Photos ボタンをタップしてフレームを見比べ、よりシャープなものがあれば「キー写真に設定」を選びます。",
        },
        {
          question: "スキャンのために写真がアップロードされますか？",
          answer:
            "いいえ。シャープネスの測定も Apple の品質スコアも iPhone 上で計算されます。DiskMop にはサーバーがなく、App Store のプライバシーラベルには「データの収集なし」と記載されています。",
        },
      ],
      verdict: [
        "写真アプリだけでぼやけた写真を探すのは難しいものです。シャープネスを判断する手段がないからです。シャープネス分析は、単調な場面を誤って拾わず、最終判断をあなたに任せる限り、何時間ものスクロールを短い一覧に変えてくれます。",
        "iPhone 版 DiskMop は端末上でシャープネスを測り、平坦な写真や書類を除外し、結果を Apple の品質スコアと組み合わせて、事前選択なしで「ぶれ・失敗写真」に一覧表示します。スキャンは無料、1 日 5 枚までは無料で削除でき、7 日間の無料トライアル付きの DiskMop Pro なら制限がなくなります。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
