import type { Article } from "../types";

export const swipeToDeletePhotosIphone: Article = {
  slug: "swipe-to-delete-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone Fotoğraflarını Kaydırarak Temizleme: Sağa Tut, Sola Sil (Pişman Olmadan)",
      metaDescription:
        "Fotoğraflar'da tek tek seçmek ellinci fotoğrafta yorar. Tutmak için sağa, silmek için sola kaydırmak binlercesini bitirir; erken hiçbir şey kaybolmaz.",
      subtitle:
        "Her seferinde tek fotoğraf, anında silme yerine bir sepet ve gerçekten biten bir kitaplık",
      intro: [
        'Kısa cevap: Fotoğraflar uygulamasında "tut ya da sil" diye bir gözden geçirme modu yoktur. Küçük resimlerin üzerinde parmağınızı sürükleyerek çok sayıda fotoğraf seçebilir ya da tam ekran görünümde fotoğrafları tek tek silebilirsiniz, ama hangi fotoğraflara zaten baktığınızı hiçbir şey hatırlamaz. Kaydırarak gözden geçirme bu boşluğu doldurur: tek bir fotoğraf görürsünüz, tutmak için sağa, sepete atmak için sola kaydırırsınız ve sonunda, siz onayladıktan sonra yalnızca sepet silinir.',
        "Bu rehber, ızgarada seçmenin işe yaramadığı yerde kaydırmanın neden işe yaradığını, yerleşik Fotoğraflar araçlarının neyi yapıp neyi yapamadığını, iPhone için DiskMop'taki kaydırma modunun kararlarınızı nasıl yönettiğini ve birkaç bin fotoğraflık bir film rulosunu birkaç oturumda toparlayan kısa bir düzeni anlatıyor.",
      ],
      keyTakeaways: [
        "Fotoğraflar uygulaması ızgarada parmağınızı sürükleyerek birden çok fotoğraf seçmenize izin verir, ama gözden geçirilmemiş fotoğraflar için bir sıra tutmaz ve neyi saklamaya karar verdiğinizi hatırlamaz.",
        "Kaydırmak büyük bir temizliği binlerce küçük evet-hayır kararına böler; insanların kaydırarak gözden geçirmeyi bitirip ızgara seçimini yarıda bırakmasının sebebi budur.",
        "DiskMop'ta sola kaydırmak fotoğrafı yalnızca bir sepete koyar; sepeti boşaltıp iOS'un kendi penceresinde onaylayana kadar hiçbir şey silinmez.",
        "Kararlar fotoğraf başına kaydedilir: tuttuğunuz bir fotoğraf başka bir listede yeniden sorulmaz ve uygulama kapansa bile gözden geçirme kaldığınız yerden sürer.",
        "Son 50 karar tek tek geri alınabilir; sepetteki bir fotoğraf da silmeden önce sepetten yeniden çıkarılabilir.",
        "Silinen fotoğraflar 30 gün boyunca Son Silinenler'de kalır; depolama çubuğu ancak o albümü boşalttıktan sonra değişir.",
      ],
      dataTable: {
        caption: "Fotoğraflar'da ızgarada seçme ile kaydırarak gözden geçirme",
        columns: [
          "Soru",
          "Fotoğraflar uygulaması (ızgara)",
          "Kaydırarak gözden geçirme (DiskMop)",
        ],
        rows: [
          [
            "Nasıl karar verirsiniz",
            "Çoğu zaman minik küçük resimleri işaretleyerek",
            "Her seferinde tek, tam boy fotoğrafla",
          ],
          ["Neyi tuttuğunuzu hatırlar mı", "Hayır", "Evet, fotoğraf başına"],
          [
            "Uygulama kapanınca devam",
            "Seçim kaybolur",
            "Kaldığınız yerden sürer",
          ],
          [
            "Hatayı geri alma",
            "Son Silinenler'den geri yükleme",
            "Silmeden önce son 50 kararı geri alma",
          ],
          [
            "Silme ne zaman olur",
            "Hemen, Son Silinenler'e",
            "Yalnızca sepeti boşalttığınızda",
          ],
        ],
      },
      howTo: {
        name: "iPhone fotoğraflarını kaydırarak temizleme",
        totalTime: "PT15M",
        steps: [
          {
            name: "Neyi kaydıracağınızı seçin",
            text: "DiskMop'u açıp Kaydır sekmesine gidin. Hemen başlamak için Tüm fotoğraflar'ı seçin ya da taramanın bitmesini bekleyip Ekran görüntüleri, Bulanık fotoğraflar, Sohbet uygulamalarından veya Diğer fotoğraflar gibi daha dar bir liste seçin.",
          },
          {
            name: "Her seferinde tek fotoğrafa karar verin",
            text: "Bir fotoğrafı tutmak için sağa, sepete atmak için sola kaydırın. Kartın altındaki Tut ve Sepete at düğmeleri aynı işi yapar ve tek elle daha rahattır. Bir videoyu kartın içinde oynatmak için üzerine basılı tutun.",
          },
          {
            name: "Fikrinizi değiştirince geri alın",
            text: "Önceki fotoğrafı geri getirmek için Geri al'a dokunun. Son 50 kararınızı adım adım geri alabilirsiniz.",
          },
          {
            name: "Sepete bakın",
            text: "Sepet kaç fotoğraf içerdiğini ve yaklaşık boyutlarını gösterir. Açın, saklamak istediğiniz her şeyi çıkarın ve emin olduğunuzda Sepeti boşalt'a dokunun.",
          },
          {
            name: "Onaylayıp alanı açın",
            text: "iOS bir şey silinmeden önce onay ister. Silinen fotoğraflar ardından Fotoğraflar > Albümler > Son Silinenler'de 30 gün bekler; alanı hemen geri almak için o albümü boşaltın.",
          },
        ],
      },
      sections: [
        {
          title: "Seçmenin İşe Yaramadığı Yerde Kaydırma Neden İşe Yarar",
          content: [
            "Film rulosunu temizlemeye çalışan çoğu kişi birkaç dakika sonra bırakır. Sorun ızgaradır: yüzlerce küçük resim, her biri gözlerinizi kısarak vermeniz gereken bir karar ve tek bir yanlış dokunuş yanlış fotoğrafı seçebilir. Elli kadar seçimden sonra emek ödülü geçer, seçim yarıda kalır ve kitaplık büyümeye devam eder.",
            "Kaydırarak gözden geçirme işin şeklini değiştirir. Tek bir dev seçim yerine, her biri tek bir tam boy fotoğrafla ilgili binlerce küçük ve ayrı karar verirsiniz. Tutulsun ya da tutulmasın. Her kaydırma yaptığınız anda biter; iki dakika sonra bırakmak bile geride gerçek bir ilerleme bırakır ve bir sonraki oturum öncekinin bittiği yerden başlar.",
            "İkinci avantaj dürüstlüktür. Tam boy bir fotoğrafta kapalı gözleri, bulanık çıkmış çocuğu, geçen yıldan kalma bir otopark ekran görüntüsünü fark edersiniz. Küçük resim ızgarasında bu ayrıntılar kaybolur; ızgarayla yapılan temizliklerin ya çok az şey silmesinin ya da daha kötüsü yanlış kareyi silmesinin sebebi budur.",
          ],
        },
        {
          title: "Fotoğraflar Uygulamasının Zaten Sunduğu",
          content: [
            "Yerleşik Fotoğraflar uygulamasında toplu silmenin iki yolu vardır. Kitaplık ızgarasında Seç'e dokunun ve bir satırı ya da bloğu bir kerede seçmek için parmağınızı küçük resimlerin üzerinde sürükleyin; ardından çöp kutusu simgesine dokunun. Tam ekran görünümde ise baktığınız fotoğrafı silip sonrakine geçebilirsiniz. İkisi de ücretsizdir ve bir avuç fotoğraf için hızlıdır.",
            "Fotoğraflar'da olmayan şey hafızadır. Hangi fotoğraflara zaten bakıp saklamaya karar verdiğinizi bilmez, bu yüzden her temizlik kitaplığın en üstünden yeniden başlar. Bir bekleme alanı da yoktur: sildiğiniz fotoğraf doğrudan Son Silinenler'e gider ve fikrinizi değiştirirseniz onu orada bulmanız gerekir.",
            "Fotoğraflar'ın her gözden geçirmeyi kısaltan yararlı süzgeçleri de vardır. Albümler > Ortam Türleri; Ekran Görüntüleri, Ekran Kayıtları, Live Photo'lar ve Videolar'ı ayrı ayrı listeler, Albümler > Yardımcı Programlar ise birebir kopyalar için Kopyalar'ı içerir. Neredeyse aynı tekrar çekimler için [iPhone'da kopya ve benzer fotoğrafları bulma](/blog/find-duplicate-similar-photos-iphone) rehberimiz Apple'ın albümünün kaçırdıklarını anlatıyor.",
          ],
        },
        {
          title: "DiskMop'ta Kaydırarak Gözden Geçirme Nasıl Çalışır",
          content: [
            "iPhone için DiskMop'un Kaydır sekmesi tek bir kural üzerine kuruludur: kaydırmak silmek değildir. Sağa kaydırırsanız fotoğraf tutulur, sola kaydırırsanız sepete girer. Sürüklerken kart eğilir ve bir TUT ya da SEPET damgası belirir; böylece parmağınızı kaldırmadan önce kararın hangi yöne gideceğini her zaman bilirsiniz. Sepet yaklaşık boyutunu gösterir ve siz onu boşaltıp iOS penceresinde onaylayana kadar kitaplığınızdan hiçbir şey çıkmaz.",
            "Kararlar listeye değil fotoğrafa aittir. Diğer fotoğraflar'da kaydırırken tuttuğunuz bir fotoğraf Ekran görüntüleri ya da Bulanık fotoğraflar altında yeniden sorulmaz. Uygulamayı yarıda kapatırsanız gözden geçirme aynı yerden sürer. Seçimleriniz telefondaki bir dosyada saklanır ve telefondan hiç çıkmaz. Temiz bir başlangıç isterseniz Baştan başla, tek bir fotoğraf silmeden tüm kararları temizler ve sepeti boşaltır.",
            "Neyi kaydıracağınızı siz seçersiniz. Tüm fotoğraflar, ilk tarama bitmeden bile hemen çalışır. Taramadan sonra daha dar listelerde kaydırabilirsiniz: Ekran görüntüleri, Bulanık fotoğraflar, Belgeler ve fişler, Sohbet uygulamalarından, Ekran kayıtları, Büyük videolar ve hiçbir kategoriye girmeyen her şeyi toplayan Diğer fotoğraflar. Videolar karta basılı tuttuğunuz sürece sessiz oynar; yalnızca iCloud'da duran fotoğraflar da karar vermeden önce bilmeniz için işaretlenir.",
          ],
        },
        {
          title: "Gerçekten Biten Bir Düzen",
          content: [
            "Kararların en kolay olduğu yerden başlayın. Ekran görüntüleri ve sohbet uygulamalarından kaydedilen fotoğraflar çoğunlukla gözden çıkarılabilir; onları hızla kaydırır ve sepetin büyüdüğünü görürsünüz, bu da motive eder. Tüm fotoğraflar'ı sonraya bırakın: gerçek anılarınız oradadır ve daha yavaş, daha dikkatli oturumları hak eder.",
            "Oturumları kısa tutun. Günde beş dakika birkaç yüz fotoğrafı gözden geçirmeye yeter ve her karar kaydedildiği için kısa oturumlar birikir. DiskMop bir şey sildiğiniz günler için günlük seri sayar; seriler ve 500 kaydırma kararı için verilen Karar Makinesi gibi kupalar, Pro'su olmayan kullanıcılara ekstra ücretsiz silme hakkı kazandırır.",
            "Sepeti haftalarca büyütmek yerine her oturumun sonunda boşaltın. Açın, tereddüt ettiğiniz her şeyi çıkarın ve gerisini silin. Ardından Son Silinenler'i unutmayın: siz onu boşaltana kadar silinen fotoğraflar depolama alanınızdan sayılmaya devam eder; bunu [fotoğraf silmenin iPhone'da neden yer açmadığı](/blog/iphone-storage-full) rehberimizde anlattık.",
          ],
        },
      ],
      faq: [
        {
          question: "Sola kaydırmak fotoğrafı hemen siler mi?",
          answer:
            "Hayır. DiskMop'ta sola kaydırmak fotoğrafı yalnızca sepete koyar. Silme, Sepeti boşalt'a dokunup iOS'un kendi penceresinde onayladığınızda olur ve o zaman bile fotoğraflar 30 gün Son Silinenler'de bekler.",
        },
        {
          question: "Bir kaydırmayı geri alabilir miyim?",
          answer:
            "Evet. Önceki fotoğrafı geri getirmek için Geri al'a dokunun; son 50 karar tek tek geri alınabilir. Sepeti boşaltmadan önce herhangi bir fotoğrafı sepetten de çıkarabilirsiniz.",
        },
        {
          question: "Bir dahaki sefere aynı fotoğrafları yeniden görür müyüm?",
          answer:
            "Hayır. Her karar o fotoğraf için kaydedilir; tuttuğunuz fotoğraflar farklı bir listede bile yeniden sorulmaz. Her şeyi baştan gözden geçirmek isterseniz Baştan başla tüm kararları temizler.",
        },
        {
          question: "Fotoğraflar uygulamasında kaydırarak silme modu var mı?",
          answer:
            "Gözden geçirme modu yok. Tam ekran görünümde fotoğraflar arasında kaydırıp onları tek tek silebilir ya da ızgarada parmağınızı sürükleyerek çok sayıda fotoğraf seçebilirsiniz, ama Fotoğraflar gözden geçirilmemiş fotoğraflar için bir sıra tutmaz ve hangilerini tuttuğunuzu hatırlamaz.",
        },
        {
          question: "Kaydırmak ücretsiz mi?",
          answer:
            "Kaydırmak ve taramak ücretsizdir. Abonelik olmadan günde beş fotoğrafa kadar, artı seriler ve kupalarla kazanılan ekstra hak kadar silebilirsiniz. 7 günlük ücretsiz denemeyle başlayan aylık abonelik DiskMop Pro sınırı kaldırır.",
        },
      ],
      verdict: [
        "Film rulonuz seçmenin mümkün görünmediği noktayı geçtiyse zorlamak yerine yöntemi değiştirin. Her seferinde tek bir tam boy fotoğraf, anında silme yerine bir sepet ve hatırlanan kararlar, imkânsız görünen bir angaryayı birkaç kısa oturuma dönüştürür.",
        "iPhone için DiskMop kitaplığınıza bu gözden geçirme modunu ekler: tutmak için sağa, sepete atmak için sola kaydırın, son 50 kararı geri alın ve yalnızca siz onaylayınca silin. Tarama ve kaydırma ücretsizdir, günde beş fotoğrafa kadar ücretsiz silinebilir ve 7 günlük ücretsiz denemesi olan DiskMop Pro sınırı kaldırır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "Swipe to Clean Up iPhone Photos: Keep Right, Delete Left (Without Regrets)",
      metaDescription:
        "Selecting photos one by one in the Photos app wears you out after fifty. Swiping right to keep and left to delete gets through thousands, with nothing lost early.",
      subtitle:
        "One photo at a time, a basket instead of instant deletion, and a library you actually finish",
      intro: [
        "Short answer: the Photos app has no keep-or-delete review mode. You can drag across thumbnails to select many at once or delete one photo at a time from the full-screen viewer, but nothing remembers which photos you have already looked at. A swipe review fills that gap: you see one photo, swipe right to keep it or left to put it in a basket, and only the basket is deleted at the end, after you confirm.",
        "This guide explains why swiping works when grid selection does not, what the built-in Photos tools can and cannot do, how a swipe review in DiskMop for iPhone handles your decisions, and a short routine that gets a camera roll of several thousand photos under control in a few sessions.",
      ],
      keyTakeaways: [
        "The Photos app lets you select several photos by dragging across the grid, but it has no queue of unreviewed photos and does not remember what you already decided to keep.",
        "Swiping turns a large clean-up into thousands of small yes-or-no decisions, which is why people finish a swipe review and abandon a grid selection.",
        "In DiskMop, swiping left only puts a photo in a basket; nothing is deleted until you empty the basket and confirm in iOS's own dialog.",
        "Decisions are saved per photo, so a photo you kept is not asked again in another list, and the review resumes where you stopped after the app is closed.",
        "The last 50 decisions can be undone one by one, and a photo in the basket can be taken out again before anything is deleted.",
        "Deleted photos stay in Recently Deleted for 30 days; the storage bar moves only after you empty that album.",
      ],
      dataTable: {
        caption: "Grid selection in Photos versus a swipe review",
        columns: ["Question", "Photos app (grid)", "Swipe review (DiskMop)"],
        rows: [
          [
            "How you decide",
            "Tick thumbnails, often tiny",
            "One full-size photo at a time",
          ],
          ["Remembers what you kept", "No", "Yes, per photo"],
          [
            "Resume after closing the app",
            "Selection is lost",
            "Continues where you stopped",
          ],
          [
            "Undo a mistake",
            "Restore from Recently Deleted",
            "Undo the last 50 decisions before deleting",
          ],
          [
            "When deletion happens",
            "Immediately, to Recently Deleted",
            "Only when you empty the basket",
          ],
        ],
      },
      howTo: {
        name: "Clean up iPhone photos by swiping",
        totalTime: "PT15M",
        steps: [
          {
            name: "Pick what to swipe",
            text: "Open DiskMop and go to the Swipe tab. Choose All photos to start right away, or wait for the scan and pick a narrower list such as Screenshots, Blurry & badly shot, Saved from chat apps or Other photos.",
          },
          {
            name: "Decide one photo at a time",
            text: "Swipe right to keep a photo and left to put it in the basket. The Keep and Put in basket buttons below the card do the same, which is easier with one hand. Touch and hold a video to play it inside the card.",
          },
          {
            name: "Undo when you change your mind",
            text: "Tap Undo to bring back the previous photo. You can step back through the last 50 decisions.",
          },
          {
            name: "Check the basket",
            text: "The basket shows how many photos it holds and their approximate size. Open it, take out anything you want to keep, and tap Empty basket when you are sure.",
          },
          {
            name: "Confirm and free the space",
            text: "iOS asks for confirmation before anything is deleted. Deleted photos then wait 30 days in Photos > Albums > Recently Deleted; empty that album to get the space back now.",
          },
        ],
      },
      sections: [
        {
          title: "Why Swiping Works When Selecting Does Not",
          content: [
            "Most people who try to clean up their camera roll stop after a few minutes. The grid is the problem: hundreds of small thumbnails, each one a decision you have to make while squinting, and a single mistaken tap can select the wrong photo. After fifty or so choices the effort outweighs the reward, the selection is abandoned, and the library keeps growing.",
            "A swipe review changes the shape of the task. Instead of one huge selection you make thousands of small, separate decisions, each about a single full-size photo. Keep or not keep. Every swipe is finished the moment you make it, so stopping after two minutes still leaves real progress behind, and the next session starts where the last one ended.",
            "The second advantage is honesty. On a full-size photo you notice the closed eyes, the blurred child, the screenshot of a parking spot from last year. In a grid of thumbnails those details disappear, which is why grid clean-ups tend to delete too little or, worse, the wrong frame.",
          ],
        },
        {
          title: "What the Photos App Already Offers",
          content: [
            "The built-in Photos app has two ways to delete in bulk. In the library grid, tap Select and drag your finger across thumbnails to select a whole row or block at once; then tap the trash icon. In the full-screen viewer you can delete the photo you are looking at and move on to the next. Both are free and fast for a handful of photos.",
            "What Photos does not have is memory. It does not know which photos you have already looked at and decided to keep, so every clean-up starts again from the top of the library. There is also no holding area: a photo you delete goes straight to Recently Deleted, and if you change your mind, you have to find it there.",
            "Photos does have useful filters that make any review shorter. Albums > Media Types lists Screenshots, Screen Recordings, Live Photos and Videos separately, and Albums > Utilities contains Duplicates for exact copies. For near-identical retries, our guide on [finding duplicate and similar photos on iPhone](/blog/find-duplicate-similar-photos-iphone) covers what Apple's album misses.",
          ],
        },
        {
          title: "How a Swipe Review Works in DiskMop",
          content: [
            "DiskMop for iPhone has a Swipe tab built around one rule: swiping is not deleting. Swipe right and the photo is kept; swipe left and it goes into a basket. As you drag, the card tilts and a KEEP or BASKET stamp appears, so you always know which way the decision will go before you let go. The basket shows its approximate size, and nothing leaves your library until you empty it and confirm in the iOS dialog.",
            "Decisions belong to the photo, not to the list. Keep a photo while swiping through Other photos and it will not be asked again under Screenshots or Blurry. Close the app halfway through and the review resumes at the same place. Your choices are stored in a file on the phone and never leave it. If you want a fresh start, Start over clears all decisions and empties the basket without deleting a single photo.",
            "You can choose what to swipe. All photos works immediately, even before the first scan finishes. After the scan you can swipe through narrower lists: Screenshots, Blurry & badly shot, Documents & receipts, Saved from chat apps, Screen recordings, Large videos, and Other photos, which collects everything that did not fall into any category. Videos play silently while you touch and hold the card, and photos stored only in iCloud are marked so you know before you decide.",
          ],
        },
        {
          title: "A Routine That Actually Finishes",
          content: [
            "Start where the decisions are easiest. Screenshots and photos saved from chat apps are mostly disposable, so you will swipe through them quickly and see the basket grow, which is motivating. Leave All photos for later: it holds your real memories, and those deserve slower, more careful sessions.",
            "Keep sessions short. Five minutes a day is enough to review several hundred photos, and because every decision is saved, short sessions add up. DiskMop counts a daily streak for days on which you delete something, and streaks and trophies such as Decision Maker for 500 swipe decisions earn extra free deletions for users without Pro.",
            "Empty the basket at the end of each session rather than letting it grow for weeks. Open it, take out anything you hesitated over, and delete the rest. Then remember Recently Deleted: until you empty it, the deleted photos still count against your storage, as explained in our guide on [why deleting photos does not free up iPhone storage](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Does swiping left delete the photo immediately?",
          answer:
            "No. In DiskMop a left swipe only puts the photo in the basket. Deletion happens when you tap Empty basket and confirm in iOS's own dialog, and even then the photos wait 30 days in Recently Deleted.",
        },
        {
          question: "Can I undo a swipe?",
          answer:
            "Yes. Tap Undo to bring back the previous photo; the last 50 decisions can be undone one by one. You can also remove any photo from the basket before you empty it.",
        },
        {
          question: "Will I see the same photos again next time?",
          answer:
            "No. Every decision is saved for that photo, so kept photos are not asked again, even in a different list. Start over clears all decisions if you want to review everything again.",
        },
        {
          question: "Does the Photos app have a swipe-to-delete mode?",
          answer:
            "Not a review mode. You can swipe between photos in the full-screen viewer and delete them one by one, or drag across the grid to select many, but Photos does not keep a queue of unreviewed photos or remember which ones you kept.",
        },
        {
          question: "Is swiping free?",
          answer:
            "Swiping and scanning are free. Without a subscription you can delete up to five photos a day, plus extra deletions earned with streaks and trophies. DiskMop Pro, a monthly subscription that starts with a 7-day free trial, removes the limit.",
        },
      ],
      verdict: [
        "If your camera roll has grown past the point where selecting feels possible, change the method rather than forcing it. One full-size photo at a time, a basket instead of instant deletion, and decisions that are remembered turn an impossible chore into a few short sessions.",
        "DiskMop for iPhone adds that review mode to your library: swipe right to keep, left to put in the basket, undo the last 50 decisions, and delete only when you confirm. Scanning and swiping are free, up to five photos a day can be deleted for free, and DiskMop Pro, with a 7-day free trial, removes the limit.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "iPhone-Fotos per Wischen aufräumen: Rechts behalten, links löschen (ohne Reue)",
      metaDescription:
        "Fotos einzeln in der Fotos-App auszuwählen ermüdet nach fünfzig Bildern. Rechts zum Behalten, links zum Löschen wischen schafft Tausende, ohne vorschnellen Verlust.",
      subtitle:
        "Ein Foto nach dem anderen, ein Korb statt sofortigem Löschen und eine Mediathek, die Sie wirklich fertig bekommen",
      intro: [
        "Kurze Antwort: Die Fotos-App hat keinen Prüfmodus nach dem Prinzip „behalten oder löschen“. Sie können mit dem Finger über Miniaturen ziehen, um viele auf einmal auszuwählen, oder in der Vollbildansicht ein Foto nach dem anderen löschen, aber nichts merkt sich, welche Fotos Sie bereits angesehen haben. Eine Wisch-Prüfung schließt diese Lücke: Sie sehen ein Foto, wischen nach rechts, um es zu behalten, oder nach links, um es in einen Korb zu legen, und am Ende wird nur der Korb gelöscht, nachdem Sie bestätigt haben.",
        "Dieser Ratgeber erklärt, warum Wischen funktioniert, wo die Auswahl im Raster scheitert, was die eingebauten Werkzeuge der Fotos-App können und was nicht, wie die Wisch-Prüfung in DiskMop für iPhone mit Ihren Entscheidungen umgeht und mit welcher kurzen Routine Sie eine Aufnahmen-Mediathek mit mehreren tausend Fotos in wenigen Sitzungen in den Griff bekommen.",
      ],
      keyTakeaways: [
        "In der Fotos-App können Sie mehrere Fotos auswählen, indem Sie über das Raster ziehen, aber es gibt keine Warteschlange ungeprüfter Fotos, und die App merkt sich nicht, was Sie bereits behalten wollten.",
        "Wischen verwandelt eine große Aufräumaktion in Tausende kleiner Ja-oder-Nein-Entscheidungen; deshalb bringen Menschen eine Wisch-Prüfung zu Ende und brechen eine Rasterauswahl ab.",
        "In DiskMop legt ein Wisch nach links ein Foto nur in einen Korb; gelöscht wird erst, wenn Sie den Korb leeren und im iOS-eigenen Dialog bestätigen.",
        "Entscheidungen werden pro Foto gespeichert: Ein behaltenes Foto wird in keiner anderen Liste erneut abgefragt, und nach dem Schließen der App geht die Prüfung an derselben Stelle weiter.",
        "Die letzten 50 Entscheidungen lassen sich einzeln rückgängig machen, und ein Foto im Korb kann vor dem Löschen wieder herausgenommen werden.",
        "Gelöschte Fotos bleiben 30 Tage in „Zuletzt gelöscht“; der Speicherbalken bewegt sich erst, wenn Sie dieses Album leeren.",
      ],
      dataTable: {
        caption:
          "Rasterauswahl in der Fotos-App im Vergleich zur Wisch-Prüfung",
        columns: ["Frage", "Fotos-App (Raster)", "Wisch-Prüfung (DiskMop)"],
        rows: [
          [
            "Wie Sie entscheiden",
            "Miniaturen abhaken, oft winzig",
            "Ein Foto in voller Größe nach dem anderen",
          ],
          ["Merkt sich Behaltenes", "Nein", "Ja, pro Foto"],
          [
            "Weitermachen nach dem Schließen",
            "Auswahl geht verloren",
            "Geht an derselben Stelle weiter",
          ],
          [
            "Fehler rückgängig machen",
            "Aus „Zuletzt gelöscht“ wiederherstellen",
            "Letzte 50 Entscheidungen vor dem Löschen zurücknehmen",
          ],
          [
            "Wann gelöscht wird",
            "Sofort, nach „Zuletzt gelöscht“",
            "Erst wenn Sie den Korb leeren",
          ],
        ],
      },
      howTo: {
        name: "iPhone-Fotos per Wischen aufräumen",
        totalTime: "PT15M",
        steps: [
          {
            name: "Auswählen, was Sie durchwischen",
            text: "Öffnen Sie DiskMop und wechseln Sie zum Tab Wischen. Wählen Sie Alle Fotos, um sofort zu beginnen, oder warten Sie auf den Scan und wählen Sie eine engere Liste wie Screenshots, Unscharf & schlecht aufgenommen, Aus Chat-Apps gespeichert oder Weitere Fotos.",
          },
          {
            name: "Foto für Foto entscheiden",
            text: "Wischen Sie nach rechts, um ein Foto zu behalten, und nach links, um es in den Korb zu legen. Die Tasten Behalten und In den Korb unter der Karte tun dasselbe und sind einhändig bequemer. Halten Sie ein Video gedrückt, um es in der Karte abzuspielen.",
          },
          {
            name: "Bei Meinungsänderung zurücknehmen",
            text: "Tippen Sie auf Rückgängig, um das vorherige Foto zurückzuholen. Sie können die letzten 50 Entscheidungen Schritt für Schritt zurücknehmen.",
          },
          {
            name: "Den Korb prüfen",
            text: "Der Korb zeigt, wie viele Fotos er enthält und wie groß sie ungefähr sind. Öffnen Sie ihn, nehmen Sie alles heraus, was Sie behalten möchten, und tippen Sie auf Korb leeren, wenn Sie sicher sind.",
          },
          {
            name: "Bestätigen und Platz freigeben",
            text: "iOS fragt vor dem Löschen nach einer Bestätigung. Gelöschte Fotos warten anschließend 30 Tage unter Fotos > Alben > Zuletzt gelöscht; leeren Sie dieses Album, um den Platz sofort zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Warum Wischen funktioniert, wo Auswählen scheitert",
          content: [
            "Die meisten, die ihre Mediathek aufräumen wollen, hören nach ein paar Minuten auf. Das Problem ist das Raster: Hunderte kleiner Miniaturen, jede eine Entscheidung, die Sie mit zusammengekniffenen Augen treffen müssen, und ein einziger falscher Tipp kann das falsche Foto auswählen. Nach etwa fünfzig Entscheidungen übersteigt der Aufwand den Nutzen, die Auswahl wird aufgegeben, und die Mediathek wächst weiter.",
            "Eine Wisch-Prüfung verändert die Form der Aufgabe. Statt einer riesigen Auswahl treffen Sie Tausende kleiner, getrennter Entscheidungen, jede über ein einzelnes Foto in voller Größe. Behalten oder nicht. Jeder Wisch ist in dem Moment erledigt, in dem Sie ihn machen; selbst wer nach zwei Minuten aufhört, hinterlässt echten Fortschritt, und die nächste Sitzung beginnt dort, wo die letzte endete.",
            "Der zweite Vorteil ist Ehrlichkeit. Auf einem Foto in voller Größe bemerken Sie die geschlossenen Augen, das verwackelte Kind, den Screenshot eines Parkplatzes vom letzten Jahr. In einem Raster aus Miniaturen verschwinden diese Details; deshalb löschen Aufräumaktionen im Raster meist zu wenig oder, schlimmer, das falsche Bild.",
          ],
        },
        {
          title: "Was die Fotos-App bereits bietet",
          content: [
            "Die eingebaute Fotos-App kennt zwei Wege, viele Fotos auf einmal zu löschen. Tippen Sie im Raster der Mediathek auf Auswählen und ziehen Sie den Finger über die Miniaturen, um eine ganze Reihe oder einen Block auf einmal zu markieren; tippen Sie dann auf den Papierkorb. In der Vollbildansicht können Sie das angezeigte Foto löschen und zum nächsten gehen. Beides ist kostenlos und für eine Handvoll Fotos schnell.",
            "Was der Fotos-App fehlt, ist ein Gedächtnis. Sie weiß nicht, welche Fotos Sie bereits angesehen und behalten wollten, also beginnt jede Aufräumaktion wieder oben in der Mediathek. Einen Zwischenbereich gibt es auch nicht: Ein gelöschtes Foto landet direkt in „Zuletzt gelöscht“, und wenn Sie es sich anders überlegen, müssen Sie es dort suchen.",
            "Nützliche Filter, die jede Prüfung verkürzen, hat die Fotos-App durchaus. Alben > Medienarten listet Bildschirmfotos, Bildschirmaufnahmen, Live Photos und Videos getrennt auf, und unter Alben > Dienstprogramme finden Sie Duplikate für exakte Kopien. Für fast identische Wiederholungsaufnahmen erklärt unser Ratgeber zum [Finden doppelter und ähnlicher Fotos auf dem iPhone](/blog/find-duplicate-similar-photos-iphone), was Apples Album übersieht.",
          ],
        },
        {
          title: "So funktioniert die Wisch-Prüfung in DiskMop",
          content: [
            "DiskMop für iPhone hat einen Tab Wischen, der auf einer Regel aufbaut: Wischen ist nicht Löschen. Wischen Sie nach rechts, wird das Foto behalten; wischen Sie nach links, kommt es in einen Korb. Beim Ziehen neigt sich die Karte, und ein Stempel BEHALTEN oder KORB erscheint, sodass Sie immer wissen, in welche Richtung die Entscheidung geht, bevor Sie loslassen. Der Korb zeigt seine ungefähre Größe, und nichts verlässt Ihre Mediathek, bevor Sie ihn leeren und im iOS-Dialog bestätigen.",
            "Entscheidungen gehören zum Foto, nicht zur Liste. Behalten Sie ein Foto beim Durchwischen von Weitere Fotos, wird es unter Screenshots oder Unscharf nicht erneut abgefragt. Schließen Sie die App mittendrin, geht die Prüfung an derselben Stelle weiter. Ihre Entscheidungen liegen in einer Datei auf dem Telefon und verlassen es nie. Wenn Sie neu anfangen möchten, löscht Neu beginnen alle Entscheidungen und leert den Korb, ohne ein einziges Foto zu löschen.",
            "Sie entscheiden, was Sie durchwischen. Alle Fotos funktioniert sofort, sogar bevor der erste Scan fertig ist. Nach dem Scan können Sie engere Listen durchwischen: Screenshots, Unscharf & schlecht aufgenommen, Dokumente & Belege, Aus Chat-Apps gespeichert, Bildschirmaufnahmen, Große Videos und Weitere Fotos, die alles sammeln, was in keine Kategorie fiel. Videos laufen stumm, solange Sie die Karte gedrückt halten, und Fotos, die nur in iCloud liegen, sind markiert, damit Sie es wissen, bevor Sie entscheiden.",
          ],
        },
        {
          title: "Eine Routine, die wirklich zu Ende kommt",
          content: [
            "Beginnen Sie dort, wo die Entscheidungen am leichtesten fallen. Screenshots und Fotos aus Chat-Apps sind meist entbehrlich; Sie wischen schnell hindurch und sehen den Korb wachsen, und das motiviert. Heben Sie Alle Fotos für später auf: Dort liegen Ihre echten Erinnerungen, und die verdienen langsamere, sorgfältigere Sitzungen.",
            "Halten Sie die Sitzungen kurz. Fünf Minuten am Tag reichen, um mehrere hundert Fotos zu prüfen, und weil jede Entscheidung gespeichert wird, summieren sich kurze Sitzungen. DiskMop zählt eine tägliche Serie für Tage, an denen Sie etwas löschen; Serien und Trophäen wie Entscheider für 500 Wisch-Entscheidungen bringen Nutzern ohne Pro zusätzliche kostenlose Löschungen.",
            "Leeren Sie den Korb am Ende jeder Sitzung, statt ihn wochenlang wachsen zu lassen. Öffnen Sie ihn, nehmen Sie alles heraus, bei dem Sie gezögert haben, und löschen Sie den Rest. Denken Sie dann an „Zuletzt gelöscht“: Bis Sie es leeren, zählen die gelöschten Fotos weiter zu Ihrem Speicher, wie unser Ratgeber erklärt, [warum Fotos löschen auf dem iPhone keinen Speicher freigibt](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Löscht ein Wisch nach links das Foto sofort?",
          answer:
            "Nein. In DiskMop legt ein Wisch nach links das Foto nur in den Korb. Gelöscht wird, wenn Sie auf Korb leeren tippen und im iOS-eigenen Dialog bestätigen, und selbst dann warten die Fotos 30 Tage in „Zuletzt gelöscht“.",
        },
        {
          question: "Kann ich einen Wisch rückgängig machen?",
          answer:
            "Ja. Tippen Sie auf Rückgängig, um das vorherige Foto zurückzuholen; die letzten 50 Entscheidungen lassen sich einzeln zurücknehmen. Vor dem Leeren können Sie außerdem jedes Foto wieder aus dem Korb nehmen.",
        },
        {
          question: "Sehe ich beim nächsten Mal dieselben Fotos wieder?",
          answer:
            "Nein. Jede Entscheidung wird für das jeweilige Foto gespeichert, behaltene Fotos werden also nicht erneut abgefragt, auch nicht in einer anderen Liste. Neu beginnen löscht alle Entscheidungen, wenn Sie alles noch einmal prüfen möchten.",
        },
        {
          question: "Hat die Fotos-App einen Modus zum Löschen per Wischen?",
          answer:
            "Keinen Prüfmodus. Sie können in der Vollbildansicht zwischen Fotos wischen und sie einzeln löschen oder über das Raster ziehen, um viele auszuwählen, aber die Fotos-App führt keine Warteschlange ungeprüfter Fotos und merkt sich nicht, welche Sie behalten haben.",
        },
        {
          question: "Ist das Wischen kostenlos?",
          answer:
            "Wischen und Scannen sind kostenlos. Ohne Abo können Sie bis zu fünf Fotos pro Tag löschen, dazu zusätzliche Löschungen, die Sie mit Serien und Trophäen verdienen. DiskMop Pro, ein Monatsabo, das mit einer 7-tägigen Gratis-Testphase beginnt, hebt das Limit auf.",
        },
      ],
      verdict: [
        "Wenn Ihre Mediathek über den Punkt hinausgewachsen ist, an dem Auswählen noch machbar wirkt, ändern Sie die Methode, statt sie zu erzwingen. Ein Foto in voller Größe nach dem anderen, ein Korb statt sofortigem Löschen und Entscheidungen, die gespeichert bleiben, machen aus einer unmöglichen Pflicht ein paar kurze Sitzungen.",
        "DiskMop für iPhone ergänzt Ihre Mediathek um diesen Prüfmodus: rechts wischen zum Behalten, links in den Korb, die letzten 50 Entscheidungen rückgängig machen und erst löschen, wenn Sie bestätigen. Scannen und Wischen sind kostenlos, bis zu fünf Fotos pro Tag lassen sich gratis löschen, und DiskMop Pro mit 7-tägiger Gratis-Testphase hebt das Limit auf.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Trier ses photos iPhone en balayant : à droite on garde, à gauche on supprime",
      metaDescription:
        "Sélectionner ses photos une à une dans Photos épuise vite. Balayer à droite pour garder, à gauche pour supprimer en trie des milliers sans rien perdre trop tôt.",
      subtitle:
        "Une photo à la fois, une corbeille plutôt qu'une suppression immédiate, et une photothèque que l'on finit vraiment",
      intro: [
        "Réponse courte : l'app Photos n'a pas de mode de tri « garder ou supprimer ». Vous pouvez faire glisser le doigt sur les vignettes pour en sélectionner beaucoup d'un coup, ou supprimer les photos une par une en plein écran, mais rien ne retient celles que vous avez déjà regardées. Un tri par balayage comble ce manque : vous voyez une photo, vous balayez à droite pour la garder ou à gauche pour la mettre dans une corbeille, et à la fin seule la corbeille est supprimée, après votre confirmation.",
        "Ce guide explique pourquoi le balayage fonctionne là où la sélection dans la grille échoue, ce que les outils intégrés de Photos savent faire ou non, comment le tri par balayage de DiskMop pour iPhone gère vos décisions, et une courte routine qui permet de reprendre en main une pellicule de plusieurs milliers de photos en quelques séances.",
      ],
      keyTakeaways: [
        "L'app Photos permet de sélectionner plusieurs photos en faisant glisser le doigt sur la grille, mais elle ne tient aucune file des photos non triées et ne retient pas ce que vous avez décidé de garder.",
        "Le balayage transforme un grand nettoyage en milliers de petites décisions oui ou non ; c'est pourquoi on termine un tri par balayage alors qu'on abandonne une sélection dans la grille.",
        "Dans DiskMop, balayer à gauche place seulement la photo dans une corbeille ; rien n'est supprimé avant que vous vidiez la corbeille et confirmiez dans la fenêtre d'iOS.",
        "Les décisions sont enregistrées photo par photo : une photo gardée n'est pas reproposée dans une autre liste, et le tri reprend là où vous l'aviez laissé après la fermeture de l'app.",
        "Les 50 dernières décisions peuvent être annulées une à une, et une photo placée dans la corbeille peut en être retirée avant toute suppression.",
        "Les photos supprimées restent 30 jours dans Supprimés récemment ; la barre de stockage ne bouge qu'une fois cet album vidé.",
      ],
      dataTable: {
        caption: "Sélection dans la grille de Photos ou tri par balayage",
        columns: [
          "Question",
          "App Photos (grille)",
          "Tri par balayage (DiskMop)",
        ],
        rows: [
          [
            "Comment vous décidez",
            "En cochant des vignettes, souvent minuscules",
            "Une photo en grand à la fois",
          ],
          ["Retient ce que vous gardez", "Non", "Oui, photo par photo"],
          [
            "Reprise après fermeture de l'app",
            "La sélection est perdue",
            "Reprend là où vous vous êtes arrêté",
          ],
          [
            "Annuler une erreur",
            "Restaurer depuis Supprimés récemment",
            "Annuler les 50 dernières décisions avant de supprimer",
          ],
          [
            "Quand la suppression a lieu",
            "Immédiatement, vers Supprimés récemment",
            "Seulement quand vous videz la corbeille",
          ],
        ],
      },
      howTo: {
        name: "Trier ses photos iPhone en balayant",
        totalTime: "PT15M",
        steps: [
          {
            name: "Choisir ce que vous allez trier",
            text: "Ouvrez DiskMop et allez dans l'onglet Balayer. Choisissez Toutes les photos pour commencer tout de suite, ou attendez la fin de l'analyse et choisissez une liste plus ciblée comme Captures d'écran, Floues et ratées, Enregistrées depuis les messageries ou Autres photos.",
          },
          {
            name: "Décider photo par photo",
            text: "Balayez à droite pour garder une photo et à gauche pour la mettre dans la corbeille. Les boutons Garder et Mettre à la corbeille sous la carte font la même chose et sont plus pratiques à une main. Maintenez une vidéo appuyée pour la lire dans la carte.",
          },
          {
            name: "Annuler si vous changez d'avis",
            text: "Touchez Annuler pour faire revenir la photo précédente. Vous pouvez remonter ainsi les 50 dernières décisions.",
          },
          {
            name: "Vérifier la corbeille",
            text: "La corbeille indique combien de photos elle contient et leur taille approximative. Ouvrez-la, retirez ce que vous voulez garder, puis touchez Vider quand vous êtes sûr.",
          },
          {
            name: "Confirmer et libérer l'espace",
            text: "iOS demande une confirmation avant toute suppression. Les photos supprimées attendent ensuite 30 jours dans Photos > Albums > Supprimés récemment ; videz cet album pour récupérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi le balayage marche là où la sélection échoue",
          content: [
            "La plupart des gens qui essaient de nettoyer leur pellicule abandonnent au bout de quelques minutes. Le problème, c'est la grille : des centaines de petites vignettes, chacune une décision à prendre en plissant les yeux, et un seul toucher maladroit peut sélectionner la mauvaise photo. Après une cinquantaine de choix, l'effort dépasse le bénéfice, la sélection est abandonnée et la photothèque continue de grossir.",
            "Le tri par balayage change la forme de la tâche. Au lieu d'une énorme sélection, vous prenez des milliers de petites décisions séparées, chacune portant sur une seule photo en grand. Garder ou non. Chaque balayage est terminé dès que vous le faites ; s'arrêter au bout de deux minutes laisse donc un vrai progrès, et la séance suivante commence là où la précédente s'est arrêtée.",
            "Le second avantage, c'est l'honnêteté. Sur une photo en grand, vous remarquez les yeux fermés, l'enfant flou, la capture d'écran d'une place de parking de l'an dernier. Dans une grille de vignettes, ces détails disparaissent ; c'est pourquoi les nettoyages dans la grille suppriment souvent trop peu ou, pire, la mauvaise image.",
          ],
        },
        {
          title: "Ce que l'app Photos propose déjà",
          content: [
            "L'app Photos intégrée offre deux façons de supprimer en masse. Dans la grille de la photothèque, touchez Sélectionner et faites glisser le doigt sur les vignettes pour sélectionner une rangée ou un bloc entier d'un coup, puis touchez l'icône de la corbeille. En plein écran, vous pouvez supprimer la photo affichée et passer à la suivante. Les deux méthodes sont gratuites et rapides pour une poignée de photos.",
            "Ce qui manque à Photos, c'est la mémoire. L'app ne sait pas quelles photos vous avez déjà regardées et décidé de garder, donc chaque nettoyage repart du haut de la photothèque. Il n'y a pas non plus de zone d'attente : une photo supprimée part directement dans Supprimés récemment, et si vous changez d'avis, il faut aller l'y rechercher.",
            "Photos dispose tout de même de filtres utiles qui raccourcissent n'importe quel tri. Albums > Types de médias liste séparément les Captures d'écran, les Enregistrements d'écran, les Live Photos et les Vidéos, et Albums > Utilitaires contient Doublons pour les copies exactes. Pour les reprises presque identiques, notre guide pour [trouver les photos en double et similaires sur iPhone](/blog/find-duplicate-similar-photos-iphone) détaille ce que l'album d'Apple laisse passer.",
          ],
        },
        {
          title: "Comment fonctionne le tri par balayage dans DiskMop",
          content: [
            "DiskMop pour iPhone possède un onglet Balayer construit autour d'une règle : balayer n'est pas supprimer. Balayez à droite et la photo est gardée ; balayez à gauche et elle va dans une corbeille. Pendant le glissement, la carte s'incline et un tampon GARDER ou CORBEILLE apparaît, pour que vous sachiez toujours dans quel sens part la décision avant de relâcher. La corbeille affiche sa taille approximative, et rien ne quitte votre photothèque avant que vous la vidiez et confirmiez dans la fenêtre d'iOS.",
            "Les décisions appartiennent à la photo, pas à la liste. Gardez une photo en balayant Autres photos et elle ne sera pas reproposée dans Captures d'écran ou Floues et ratées. Fermez l'app en plein tri et il reprend au même endroit. Vos choix sont enregistrés dans un fichier sur le téléphone et n'en sortent jamais. Si vous voulez repartir de zéro, Recommencer efface toutes les décisions et vide la corbeille sans supprimer une seule photo.",
            "Vous choisissez ce que vous triez. Toutes les photos fonctionne immédiatement, avant même la fin de la première analyse. Après l'analyse, vous pouvez balayer des listes plus ciblées : Captures d'écran, Floues et ratées, Documents et reçus, Enregistrées depuis les messageries, Enregistrements d'écran, Vidéos volumineuses et Autres photos, qui regroupe tout ce qui n'entre dans aucune catégorie. Les vidéos se lisent sans le son tant que vous maintenez la carte appuyée, et les photos stockées uniquement dans iCloud sont signalées pour que vous le sachiez avant de décider.",
          ],
        },
        {
          title: "Une routine qu'on mène vraiment jusqu'au bout",
          content: [
            "Commencez là où les décisions sont les plus faciles. Les captures d'écran et les photos enregistrées depuis les messageries sont pour la plupart jetables ; vous les balayerez vite et verrez la corbeille se remplir, ce qui motive. Gardez Toutes les photos pour plus tard : ce sont vos vrais souvenirs, et ils méritent des séances plus lentes et plus attentives.",
            "Faites des séances courtes. Cinq minutes par jour suffisent pour trier plusieurs centaines de photos, et comme chaque décision est enregistrée, les petites séances s'additionnent. DiskMop compte une série quotidienne pour les jours où vous supprimez quelque chose ; les séries et les trophées, comme Décideur pour 500 décisions de balayage, rapportent des suppressions gratuites supplémentaires aux utilisateurs sans Pro.",
            "Videz la corbeille à la fin de chaque séance au lieu de la laisser grossir pendant des semaines. Ouvrez-la, retirez ce qui vous a fait hésiter et supprimez le reste. Pensez ensuite à Supprimés récemment : tant que vous ne le videz pas, les photos supprimées comptent toujours dans votre stockage, comme l'explique notre guide sur [pourquoi supprimer des photos ne libère pas d'espace sur iPhone](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Balayer à gauche supprime-t-il la photo immédiatement ?",
          answer:
            "Non. Dans DiskMop, un balayage à gauche place seulement la photo dans la corbeille. La suppression a lieu quand vous touchez Vider et confirmez dans la fenêtre d'iOS, et même alors les photos attendent 30 jours dans Supprimés récemment.",
        },
        {
          question: "Puis-je annuler un balayage ?",
          answer:
            "Oui. Touchez Annuler pour faire revenir la photo précédente ; les 50 dernières décisions peuvent être annulées une à une. Vous pouvez aussi retirer n'importe quelle photo de la corbeille avant de la vider.",
        },
        {
          question: "Reverrai-je les mêmes photos la prochaine fois ?",
          answer:
            "Non. Chaque décision est enregistrée pour la photo concernée, donc les photos gardées ne sont pas reproposées, même dans une autre liste. Recommencer efface toutes les décisions si vous voulez tout revoir.",
        },
        {
          question:
            "L'app Photos a-t-elle un mode de suppression par balayage ?",
          answer:
            "Pas de mode de tri. Vous pouvez passer d'une photo à l'autre en plein écran et les supprimer une par une, ou faire glisser le doigt sur la grille pour en sélectionner beaucoup, mais Photos ne tient pas de file des photos non triées et ne retient pas celles que vous avez gardées.",
        },
        {
          question: "Le tri par balayage est-il gratuit ?",
          answer:
            "Le balayage et l'analyse sont gratuits. Sans abonnement, vous pouvez supprimer jusqu'à cinq photos par jour, plus les suppressions supplémentaires gagnées grâce aux séries et aux trophées. DiskMop Pro, un abonnement mensuel qui commence par un essai gratuit de 7 jours, supprime la limite.",
        },
      ],
      verdict: [
        "Si votre pellicule a dépassé le point où sélectionner semble possible, changez de méthode plutôt que de vous forcer. Une photo en grand à la fois, une corbeille plutôt qu'une suppression immédiate et des décisions mémorisées transforment une corvée impossible en quelques courtes séances.",
        "DiskMop pour iPhone ajoute ce mode de tri à votre photothèque : balayez à droite pour garder, à gauche pour mettre à la corbeille, annulez les 50 dernières décisions et ne supprimez qu'après confirmation. L'analyse et le balayage sont gratuits, jusqu'à cinq photos par jour peuvent être supprimées gratuitement, et DiskMop Pro, avec un essai gratuit de 7 jours, supprime la limite.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Limpiar las fotos del iPhone deslizando: derecha conservas, izquierda borras",
      metaDescription:
        "Seleccionar fotos una a una en Fotos agota enseguida. Deslizar a la derecha para conservar y a la izquierda para borrar despacha miles sin perder nada antes de tiempo.",
      subtitle:
        "Una foto cada vez, una papelera en lugar de borrar al instante y una fototeca que de verdad terminas",
      intro: [
        "Respuesta corta: la app Fotos no tiene un modo de revisión de «conservar o borrar». Puedes arrastrar el dedo sobre las miniaturas para seleccionar muchas a la vez o borrar las fotos una a una desde la vista a pantalla completa, pero nada recuerda qué fotos ya has mirado. Una revisión deslizando llena ese hueco: ves una foto, deslizas a la derecha para conservarla o a la izquierda para dejarla en una papelera, y al final solo se borra la papelera, después de que confirmes.",
        "Esta guía explica por qué deslizar funciona donde la selección en la cuadrícula fracasa, qué pueden y qué no pueden hacer las herramientas integradas de Fotos, cómo gestiona tus decisiones la revisión deslizando de DiskMop para iPhone y una rutina corta que pone en orden un carrete de varios miles de fotos en unas pocas sesiones.",
      ],
      keyTakeaways: [
        "La app Fotos permite seleccionar varias fotos arrastrando el dedo por la cuadrícula, pero no mantiene una cola de fotos sin revisar ni recuerda lo que ya decidiste conservar.",
        "Deslizar convierte una gran limpieza en miles de pequeñas decisiones de sí o no; por eso la gente termina una revisión deslizando y abandona una selección en la cuadrícula.",
        "En DiskMop, deslizar a la izquierda solo deja la foto en una papelera; no se borra nada hasta que vacías la papelera y confirmas en el propio diálogo de iOS.",
        "Las decisiones se guardan por foto: una foto que conservaste no vuelve a preguntarse en otra lista, y la revisión continúa donde la dejaste aunque cierres la app.",
        "Las últimas 50 decisiones se pueden deshacer una a una, y una foto que está en la papelera puede volver a sacarse antes de borrar nada.",
        "Las fotos borradas se quedan 30 días en Eliminados recientemente; la barra de almacenamiento solo se mueve cuando vacías ese álbum.",
      ],
      dataTable: {
        caption:
          "Selección en la cuadrícula de Fotos frente a revisión deslizando",
        columns: [
          "Pregunta",
          "App Fotos (cuadrícula)",
          "Revisión deslizando (DiskMop)",
        ],
        rows: [
          [
            "Cómo decides",
            "Marcando miniaturas, a menudo diminutas",
            "Una foto a tamaño completo cada vez",
          ],
          ["Recuerda lo que conservas", "No", "Sí, por foto"],
          [
            "Seguir tras cerrar la app",
            "La selección se pierde",
            "Continúa donde lo dejaste",
          ],
          [
            "Deshacer un error",
            "Recuperar desde Eliminados recientemente",
            "Deshacer las últimas 50 decisiones antes de borrar",
          ],
          [
            "Cuándo se borra",
            "Al instante, a Eliminados recientemente",
            "Solo cuando vacías la papelera",
          ],
        ],
      },
      howTo: {
        name: "Limpiar las fotos del iPhone deslizando",
        totalTime: "PT15M",
        steps: [
          {
            name: "Elige qué vas a revisar",
            text: "Abre DiskMop y ve a la pestaña Deslizar. Elige Todas las fotos para empezar ya, o espera al análisis y elige una lista más concreta, como Capturas de pantalla, Borrosas y mal tomadas, Guardadas de apps de chat u Otras fotos.",
          },
          {
            name: "Decide foto a foto",
            text: "Desliza a la derecha para conservar una foto y a la izquierda para dejarla en la papelera. Los botones Conservar y A la papelera bajo la tarjeta hacen lo mismo y son más cómodos con una mano. Mantén pulsado un vídeo para reproducirlo dentro de la tarjeta.",
          },
          {
            name: "Deshaz si cambias de opinión",
            text: "Toca Deshacer para recuperar la foto anterior. Puedes retroceder paso a paso por las últimas 50 decisiones.",
          },
          {
            name: "Revisa la papelera",
            text: "La papelera muestra cuántas fotos contiene y su tamaño aproximado. Ábrela, saca lo que quieras conservar y toca Vaciar cuando estés seguro.",
          },
          {
            name: "Confirma y libera el espacio",
            text: "iOS pide confirmación antes de borrar nada. Después, las fotos borradas esperan 30 días en Fotos > Álbumes > Eliminados recientemente; vacía ese álbum para recuperar el espacio ahora.",
          },
        ],
      },
      sections: [
        {
          title: "Por qué deslizar funciona donde seleccionar fracasa",
          content: [
            "La mayoría de la gente que intenta limpiar su carrete lo deja a los pocos minutos. El problema es la cuadrícula: cientos de miniaturas pequeñas, cada una una decisión que tomas entornando los ojos, y un solo toque desafortunado puede seleccionar la foto equivocada. Tras unas cincuenta elecciones, el esfuerzo supera a la recompensa, la selección se abandona y la fototeca sigue creciendo.",
            "Una revisión deslizando cambia la forma de la tarea. En lugar de una selección enorme, tomas miles de decisiones pequeñas y separadas, cada una sobre una sola foto a tamaño completo. Conservar o no. Cada deslizamiento queda terminado en el momento en que lo haces, así que parar a los dos minutos ya deja un avance real, y la siguiente sesión empieza donde acabó la anterior.",
            "La segunda ventaja es la honestidad. En una foto a tamaño completo notas los ojos cerrados, el niño movido, la captura de una plaza de aparcamiento del año pasado. En una cuadrícula de miniaturas esos detalles desaparecen; por eso las limpiezas en la cuadrícula suelen borrar demasiado poco o, peor aún, la foto equivocada.",
          ],
        },
        {
          title: "Lo que la app Fotos ya ofrece",
          content: [
            "La app Fotos integrada tiene dos maneras de borrar en bloque. En la cuadrícula de la fototeca, toca Seleccionar y arrastra el dedo sobre las miniaturas para seleccionar una fila o un bloque entero de una vez; luego toca el icono de la papelera. En la vista a pantalla completa puedes borrar la foto que estás viendo y pasar a la siguiente. Las dos son gratuitas y rápidas para un puñado de fotos.",
            "Lo que Fotos no tiene es memoria. No sabe qué fotos ya miraste y decidiste conservar, así que cada limpieza vuelve a empezar desde arriba. Tampoco hay una zona de espera: una foto borrada va directamente a Eliminados recientemente y, si cambias de opinión, tienes que buscarla allí.",
            "Fotos sí tiene filtros útiles que acortan cualquier revisión. Álbumes > Tipos de contenido muestra por separado Capturas de pantalla, Grabaciones de pantalla, Live Photos y Vídeos, y Álbumes > Utilidades incluye Duplicados para las copias exactas. Para las repeticiones casi idénticas, nuestra guía para [encontrar fotos duplicadas y similares en iPhone](/blog/find-duplicate-similar-photos-iphone) explica lo que se le escapa al álbum de Apple.",
          ],
        },
        {
          title: "Cómo funciona la revisión deslizando en DiskMop",
          content: [
            "DiskMop para iPhone tiene una pestaña Deslizar construida sobre una regla: deslizar no es borrar. Desliza a la derecha y la foto se conserva; desliza a la izquierda y va a una papelera. Mientras arrastras, la tarjeta se inclina y aparece un sello CONSERVAR o PAPELERA, así que siempre sabes hacia dónde irá la decisión antes de soltar. La papelera muestra su tamaño aproximado y nada sale de tu fototeca hasta que la vacías y confirmas en el diálogo de iOS.",
            "Las decisiones pertenecen a la foto, no a la lista. Si conservas una foto mientras revisas Otras fotos, no volverá a preguntarse en Capturas de pantalla ni en Borrosas y mal tomadas. Cierra la app a mitad de camino y la revisión sigue en el mismo punto. Tus elecciones se guardan en un archivo del teléfono y nunca salen de él. Si quieres empezar de cero, Empezar de nuevo borra todas las decisiones y vacía la papelera sin eliminar ni una sola foto.",
            "Tú eliges qué revisar. Todas las fotos funciona al momento, incluso antes de que termine el primer análisis. Después del análisis puedes deslizar por listas más concretas: Capturas de pantalla, Borrosas y mal tomadas, Documentos y recibos, Guardadas de apps de chat, Grabaciones de pantalla, Vídeos grandes y Otras fotos, que reúne todo lo que no entró en ninguna categoría. Los vídeos se reproducen sin sonido mientras mantienes pulsada la tarjeta, y las fotos guardadas solo en iCloud aparecen marcadas para que lo sepas antes de decidir.",
          ],
        },
        {
          title: "Una rutina que de verdad se termina",
          content: [
            "Empieza por donde las decisiones son más fáciles. Las capturas de pantalla y las fotos guardadas de apps de chat son casi siempre prescindibles; las revisarás rápido y verás crecer la papelera, lo que motiva. Deja Todas las fotos para más adelante: ahí están tus recuerdos de verdad, y merecen sesiones más lentas y cuidadosas.",
            "Haz sesiones cortas. Cinco minutos al día bastan para revisar varios cientos de fotos y, como cada decisión se guarda, las sesiones cortas se suman. DiskMop cuenta una racha diaria para los días en que borras algo; las rachas y los trofeos, como Decisor por 500 decisiones deslizando, dan borrados gratuitos extra a quienes no tienen Pro.",
            "Vacía la papelera al final de cada sesión en lugar de dejar que crezca durante semanas. Ábrela, saca lo que te hizo dudar y borra el resto. Después recuerda Eliminados recientemente: hasta que lo vacíes, las fotos borradas siguen contando en tu almacenamiento, como explicamos en nuestra guía sobre [por qué borrar fotos no libera espacio en el iPhone](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "¿Deslizar a la izquierda borra la foto al instante?",
          answer:
            "No. En DiskMop, deslizar a la izquierda solo deja la foto en la papelera. El borrado ocurre cuando tocas Vaciar y confirmas en el propio diálogo de iOS, e incluso entonces las fotos esperan 30 días en Eliminados recientemente.",
        },
        {
          question: "¿Puedo deshacer un deslizamiento?",
          answer:
            "Sí. Toca Deshacer para recuperar la foto anterior; las últimas 50 decisiones se pueden deshacer una a una. También puedes sacar cualquier foto de la papelera antes de vaciarla.",
        },
        {
          question: "¿Volveré a ver las mismas fotos la próxima vez?",
          answer:
            "No. Cada decisión se guarda para esa foto, así que las fotos conservadas no vuelven a preguntarse, ni siquiera en otra lista. Empezar de nuevo borra todas las decisiones si quieres revisarlo todo otra vez.",
        },
        {
          question: "¿Tiene la app Fotos un modo de borrar deslizando?",
          answer:
            "No como modo de revisión. Puedes pasar de una foto a otra a pantalla completa y borrarlas una a una, o arrastrar el dedo por la cuadrícula para seleccionar muchas, pero Fotos no mantiene una cola de fotos sin revisar ni recuerda cuáles conservaste.",
        },
        {
          question: "¿Deslizar es gratis?",
          answer:
            "Deslizar y analizar son gratis. Sin suscripción puedes borrar hasta cinco fotos al día, más los borrados extra que ganas con rachas y trofeos. DiskMop Pro, una suscripción mensual que empieza con una prueba gratuita de 7 días, elimina el límite.",
        },
      ],
      verdict: [
        "Si tu carrete ha pasado del punto en que seleccionar parece posible, cambia de método en lugar de forzarlo. Una foto a tamaño completo cada vez, una papelera en vez de un borrado inmediato y decisiones que se recuerdan convierten una tarea imposible en unas cuantas sesiones cortas.",
        "DiskMop para iPhone añade ese modo de revisión a tu fototeca: desliza a la derecha para conservar, a la izquierda para dejar en la papelera, deshaz las últimas 50 decisiones y borra solo cuando confirmes. El análisis y el deslizamiento son gratis, se pueden borrar hasta cinco fotos al día sin coste y DiskMop Pro, con 7 días de prueba gratuita, elimina el límite.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Pulire le foto dell'iPhone scorrendo: a destra tieni, a sinistra elimini",
      metaDescription:
        "Selezionare le foto una per una in Foto stanca presto. Scorrere a destra per tenere e a sinistra per eliminare ne smaltisce migliaia, senza perdite affrettate.",
      subtitle:
        "Una foto alla volta, un cestino invece dell'eliminazione immediata e una libreria che finisci davvero",
      intro: [
        "Risposta breve: l'app Foto non ha una modalità di revisione «tieni o elimina». Puoi trascinare il dito sulle miniature per selezionarne molte insieme oppure eliminare le foto una alla volta dalla vista a schermo intero, ma niente ricorda quali foto hai già guardato. Una revisione a scorrimento colma questa lacuna: vedi una foto, scorri a destra per tenerla o a sinistra per metterla in un cestino, e alla fine viene eliminato solo il cestino, dopo la tua conferma.",
        "Questa guida spiega perché lo scorrimento funziona dove la selezione nella griglia fallisce, cosa sanno e non sanno fare gli strumenti integrati di Foto, come la revisione a scorrimento di DiskMop per iPhone gestisce le tue decisioni e una breve routine che mette in ordine un rullino di diverse migliaia di foto in poche sessioni.",
      ],
      keyTakeaways: [
        "L'app Foto permette di selezionare più foto trascinando il dito sulla griglia, ma non tiene una coda delle foto non ancora riviste e non ricorda cosa hai già deciso di tenere.",
        "Scorrere trasforma una grande pulizia in migliaia di piccole decisioni sì o no; per questo le persone portano a termine una revisione a scorrimento e abbandonano una selezione nella griglia.",
        "In DiskMop, scorrere a sinistra mette la foto soltanto in un cestino; non viene eliminato nulla finché non svuoti il cestino e confermi nella finestra di iOS.",
        "Le decisioni vengono salvate foto per foto: una foto che hai tenuto non viene riproposta in un'altra lista, e la revisione riprende da dove l'hai lasciata anche dopo aver chiuso l'app.",
        "Le ultime 50 decisioni si possono annullare una per una, e una foto nel cestino può essere tolta prima che venga eliminato qualcosa.",
        "Le foto eliminate restano 30 giorni in Eliminati di recente; la barra dello spazio si muove solo dopo aver svuotato quell'album.",
      ],
      dataTable: {
        caption:
          "Selezione nella griglia di Foto e revisione a scorrimento a confronto",
        columns: [
          "Domanda",
          "App Foto (griglia)",
          "Revisione a scorrimento (DiskMop)",
        ],
        rows: [
          [
            "Come decidi",
            "Spuntando miniature, spesso minuscole",
            "Una foto a grandezza piena alla volta",
          ],
          ["Ricorda cosa tieni", "No", "Sì, foto per foto"],
          [
            "Riprendere dopo aver chiuso l'app",
            "La selezione va persa",
            "Riprende da dove ti eri fermato",
          ],
          [
            "Annullare un errore",
            "Ripristinare da Eliminati di recente",
            "Annullare le ultime 50 decisioni prima di eliminare",
          ],
          [
            "Quando avviene l'eliminazione",
            "Subito, in Eliminati di recente",
            "Solo quando svuoti il cestino",
          ],
        ],
      },
      howTo: {
        name: "Pulire le foto dell'iPhone scorrendo",
        totalTime: "PT15M",
        steps: [
          {
            name: "Scegli cosa rivedere",
            text: "Apri DiskMop e vai alla scheda Scorri. Scegli Tutte le foto per iniziare subito, oppure attendi la fine dell'analisi e scegli una lista più mirata come Screenshot, Sfocate e venute male, Salvate dalle app di chat o Altre foto.",
          },
          {
            name: "Decidi una foto alla volta",
            text: "Scorri a destra per tenere una foto e a sinistra per metterla nel cestino. I pulsanti Tieni e Metti nel cestino sotto la scheda fanno la stessa cosa e sono più comodi con una mano. Tieni premuto un video per riprodurlo dentro la scheda.",
          },
          {
            name: "Annulla se cambi idea",
            text: "Tocca Annulla per riportare indietro la foto precedente. Puoi tornare indietro passo dopo passo fino alle ultime 50 decisioni.",
          },
          {
            name: "Controlla il cestino",
            text: "Il cestino mostra quante foto contiene e quanto pesano all'incirca. Aprilo, togli ciò che vuoi tenere e tocca Svuota quando sei sicuro.",
          },
          {
            name: "Conferma e libera lo spazio",
            text: "iOS chiede una conferma prima di eliminare qualsiasi cosa. Le foto eliminate restano poi 30 giorni in Foto > Album > Eliminati di recente; svuota quell'album per recuperare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Perché scorrere funziona dove selezionare fallisce",
          content: [
            "La maggior parte delle persone che prova a ripulire il rullino si ferma dopo pochi minuti. Il problema è la griglia: centinaia di piccole miniature, ognuna una decisione da prendere strizzando gli occhi, e un solo tocco sbagliato può selezionare la foto sbagliata. Dopo una cinquantina di scelte la fatica supera il beneficio, la selezione viene abbandonata e la libreria continua a crescere.",
            "Una revisione a scorrimento cambia la forma del compito. Invece di un'unica enorme selezione prendi migliaia di piccole decisioni separate, ognuna su una sola foto a grandezza piena. Tenere o no. Ogni scorrimento è concluso nel momento in cui lo fai; anche fermarsi dopo due minuti lascia un progresso reale, e la sessione successiva comincia dove è finita l'ultima.",
            "Il secondo vantaggio è l'onestà. Su una foto a grandezza piena noti gli occhi chiusi, il bambino mosso, lo screenshot di un parcheggio dell'anno scorso. In una griglia di miniature quei dettagli spariscono; per questo le pulizie nella griglia tendono a eliminare troppo poco o, peggio, lo scatto sbagliato.",
          ],
        },
        {
          title: "Cosa offre già l'app Foto",
          content: [
            "L'app Foto integrata ha due modi per eliminare in blocco. Nella griglia della libreria tocca Seleziona e trascina il dito sulle miniature per selezionare un'intera riga o un blocco in una volta; poi tocca l'icona del cestino. Nella vista a schermo intero puoi eliminare la foto che stai guardando e passare alla successiva. Entrambi i metodi sono gratuiti e veloci per una manciata di foto.",
            "Ciò che manca a Foto è la memoria. Non sa quali foto hai già guardato e deciso di tenere, quindi ogni pulizia riparte dall'inizio della libreria. Non c'è nemmeno un'area di attesa: una foto eliminata finisce direttamente in Eliminati di recente e, se cambi idea, devi andarla a cercare lì.",
            "Foto ha comunque filtri utili che accorciano qualsiasi revisione. Album > Tipi di media elenca separatamente Istantanee schermo, Registrazioni schermo, Live Photo e Video, e Album > Utility contiene Duplicati per le copie esatte. Per gli scatti ripetuti quasi identici, la nostra guida per [trovare foto duplicate e simili su iPhone](/blog/find-duplicate-similar-photos-iphone) spiega cosa sfugge all'album di Apple.",
          ],
        },
        {
          title: "Come funziona la revisione a scorrimento in DiskMop",
          content: [
            "DiskMop per iPhone ha una scheda Scorri costruita su una regola: scorrere non è eliminare. Scorri a destra e la foto viene tenuta; scorri a sinistra e finisce in un cestino. Mentre trascini, la scheda si inclina e compare un timbro TIENI o CESTINO, così sai sempre in che direzione andrà la decisione prima di lasciare. Il cestino mostra la sua dimensione approssimativa e nulla esce dalla libreria finché non lo svuoti e confermi nella finestra di iOS.",
            "Le decisioni appartengono alla foto, non alla lista. Se tieni una foto mentre scorri Altre foto, non ti verrà richiesta in Screenshot o in Sfocate e venute male. Chiudi l'app a metà e la revisione riprende dallo stesso punto. Le tue scelte sono salvate in un file sul telefono e non ne escono mai. Se vuoi ripartire da zero, Ricomincia cancella tutte le decisioni e svuota il cestino senza eliminare nemmeno una foto.",
            "Sei tu a scegliere cosa rivedere. Tutte le foto funziona subito, persino prima che finisca la prima analisi. Dopo l'analisi puoi scorrere liste più mirate: Screenshot, Sfocate e venute male, Documenti e ricevute, Salvate dalle app di chat, Registrazioni schermo, Video di grandi dimensioni e Altre foto, che raccoglie tutto ciò che non rientra in nessuna categoria. I video si riproducono senza audio mentre tieni premuta la scheda, e le foto conservate solo su iCloud sono segnalate, così lo sai prima di decidere.",
          ],
        },
        {
          title: "Una routine che si porta davvero a termine",
          content: [
            "Comincia da dove le decisioni sono più facili. Gli screenshot e le foto salvate dalle app di chat sono per lo più sacrificabili; li scorrerai in fretta e vedrai crescere il cestino, il che motiva. Lascia Tutte le foto per dopo: lì ci sono i tuoi veri ricordi, e meritano sessioni più lente e attente.",
            "Fai sessioni brevi. Cinque minuti al giorno bastano per rivedere diverse centinaia di foto e, poiché ogni decisione viene salvata, le sessioni brevi si sommano. DiskMop conta una serie giornaliera per i giorni in cui elimini qualcosa; le serie e i trofei, come Decisionista per 500 decisioni a scorrimento, fanno guadagnare eliminazioni gratuite extra a chi non ha Pro.",
            "Svuota il cestino alla fine di ogni sessione invece di lasciarlo crescere per settimane. Aprilo, togli ciò su cui hai esitato ed elimina il resto. Poi ricordati di Eliminati di recente: finché non lo svuoti, le foto eliminate continuano a occupare spazio, come spieghiamo nella nostra guida sul [perché eliminare foto non libera spazio sull'iPhone](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Scorrere a sinistra elimina subito la foto?",
          answer:
            "No. In DiskMop scorrere a sinistra mette la foto soltanto nel cestino. L'eliminazione avviene quando tocchi Svuota e confermi nella finestra di iOS, e anche allora le foto restano 30 giorni in Eliminati di recente.",
        },
        {
          question: "Posso annullare uno scorrimento?",
          answer:
            "Sì. Tocca Annulla per riportare indietro la foto precedente; le ultime 50 decisioni si possono annullare una per una. Puoi anche togliere qualsiasi foto dal cestino prima di svuotarlo.",
        },
        {
          question: "La prossima volta rivedrò le stesse foto?",
          answer:
            "No. Ogni decisione viene salvata per quella foto, quindi le foto tenute non vengono riproposte, nemmeno in un'altra lista. Ricomincia cancella tutte le decisioni se vuoi rivedere tutto da capo.",
        },
        {
          question: "L'app Foto ha una modalità per eliminare scorrendo?",
          answer:
            "Non come modalità di revisione. Puoi passare da una foto all'altra a schermo intero ed eliminarle una alla volta, oppure trascinare il dito sulla griglia per selezionarne molte, ma Foto non tiene una coda delle foto non riviste e non ricorda quali hai tenuto.",
        },
        {
          question: "Scorrere è gratis?",
          answer:
            "Scorrere e analizzare sono gratis. Senza abbonamento puoi eliminare fino a cinque foto al giorno, più le eliminazioni extra guadagnate con serie e trofei. DiskMop Pro, un abbonamento mensile che inizia con una prova gratuita di 7 giorni, rimuove il limite.",
        },
      ],
      verdict: [
        "Se il tuo rullino ha superato il punto in cui selezionare sembra possibile, cambia metodo invece di forzarlo. Una foto a grandezza piena alla volta, un cestino invece dell'eliminazione immediata e decisioni che vengono ricordate trasformano un compito impossibile in poche sessioni brevi.",
        "DiskMop per iPhone aggiunge questa modalità di revisione alla tua libreria: scorri a destra per tenere, a sinistra per mettere nel cestino, annulla le ultime 50 decisioni ed elimina solo quando confermi. Analisi e scorrimento sono gratuiti, si possono eliminare gratis fino a cinque foto al giorno e DiskMop Pro, con 7 giorni di prova gratuita, rimuove il limite.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Limpar as fotos do iPhone deslizando: direita mantém, esquerda apaga (sem arrependimento)",
      metaDescription:
        "Selecionar fotos uma a uma no Fotos cansa rápido. Deslizar para a direita para manter e para a esquerda para apagar dá conta de milhares sem perdas precipitadas.",
      subtitle:
        "Uma foto de cada vez, um cesto em vez de apagar na hora e uma fototeca que você realmente termina",
      intro: [
        'Resposta curta: o app Fotos não tem um modo de revisão do tipo "manter ou apagar". Você pode arrastar o dedo sobre as miniaturas para selecionar muitas de uma vez ou apagar as fotos uma a uma na visualização em tela cheia, mas nada lembra quais fotos você já viu. Uma revisão deslizando preenche essa lacuna: você vê uma foto, desliza para a direita para mantê-la ou para a esquerda para colocá-la num cesto, e no final só o cesto é apagado, depois que você confirma.',
        "Este guia explica por que deslizar funciona onde a seleção na grade falha, o que as ferramentas nativas do Fotos fazem e o que não fazem, como a revisão deslizando do DiskMop para iPhone cuida das suas decisões e uma rotina curta que coloca em ordem um rolo de câmera de vários milhares de fotos em poucas sessões.",
      ],
      keyTakeaways: [
        "O app Fotos permite selecionar várias fotos arrastando o dedo pela grade, mas não mantém uma fila de fotos não revisadas nem lembra o que você já decidiu manter.",
        "Deslizar transforma uma grande limpeza em milhares de pequenas decisões de sim ou não; é por isso que as pessoas terminam uma revisão deslizando e abandonam uma seleção na grade.",
        "No DiskMop, deslizar para a esquerda apenas coloca a foto num cesto; nada é apagado até você esvaziar o cesto e confirmar na própria janela do iOS.",
        "As decisões são salvas por foto: uma foto que você manteve não é perguntada de novo em outra lista, e a revisão continua de onde você parou mesmo depois de fechar o app.",
        "As últimas 50 decisões podem ser desfeitas uma a uma, e uma foto no cesto pode ser tirada de lá antes de qualquer exclusão.",
        "As fotos apagadas ficam 30 dias em Apagados Recentemente; a barra de armazenamento só se move depois que você esvazia esse álbum.",
      ],
      dataTable: {
        caption: "Seleção na grade do Fotos versus revisão deslizando",
        columns: [
          "Pergunta",
          "App Fotos (grade)",
          "Revisão deslizando (DiskMop)",
        ],
        rows: [
          [
            "Como você decide",
            "Marcando miniaturas, muitas vezes minúsculas",
            "Uma foto em tamanho cheio de cada vez",
          ],
          ["Lembra o que você manteve", "Não", "Sim, por foto"],
          [
            "Continuar depois de fechar o app",
            "A seleção se perde",
            "Continua de onde você parou",
          ],
          [
            "Desfazer um erro",
            "Recuperar em Apagados Recentemente",
            "Desfazer as últimas 50 decisões antes de apagar",
          ],
          [
            "Quando a exclusão acontece",
            "Na hora, para Apagados Recentemente",
            "Só quando você esvazia o cesto",
          ],
        ],
      },
      howTo: {
        name: "Limpar as fotos do iPhone deslizando",
        totalTime: "PT15M",
        steps: [
          {
            name: "Escolha o que revisar",
            text: "Abra o DiskMop e vá para a aba Deslizar. Escolha Todas as fotos para começar já, ou espere a análise terminar e escolha uma lista mais específica, como Capturas de ecrã, Desfocadas e mal tiradas, Salvas de apps de conversa ou Outras fotos.",
          },
          {
            name: "Decida uma foto de cada vez",
            text: "Deslize para a direita para manter uma foto e para a esquerda para colocá-la no cesto. Os botões Manter e Pôr no cesto abaixo do cartão fazem o mesmo e são mais práticos com uma mão. Toque e segure um vídeo para reproduzi-lo dentro do cartão.",
          },
          {
            name: "Desfaça se mudar de ideia",
            text: "Toque em Desfazer para trazer de volta a foto anterior. Você pode voltar passo a passo pelas últimas 50 decisões.",
          },
          {
            name: "Confira o cesto",
            text: "O cesto mostra quantas fotos contém e o tamanho aproximado delas. Abra-o, tire o que quiser manter e toque em Esvaziar quando tiver certeza.",
          },
          {
            name: "Confirme e libere o espaço",
            text: "O iOS pede confirmação antes de apagar qualquer coisa. Depois, as fotos apagadas esperam 30 dias em Fotos > Álbuns > Apagados Recentemente; esvazie esse álbum para recuperar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title: "Por que deslizar funciona onde selecionar falha",
          content: [
            "A maioria das pessoas que tenta limpar o rolo de câmera desiste depois de alguns minutos. O problema é a grade: centenas de miniaturas pequenas, cada uma uma decisão tomada com os olhos apertados, e um único toque errado pode selecionar a foto errada. Depois de umas cinquenta escolhas, o esforço supera a recompensa, a seleção é abandonada e a fototeca continua crescendo.",
            "Uma revisão deslizando muda o formato da tarefa. Em vez de uma seleção enorme, você toma milhares de decisões pequenas e separadas, cada uma sobre uma única foto em tamanho cheio. Manter ou não. Cada deslize termina no momento em que você o faz; parar depois de dois minutos já deixa um progresso real, e a próxima sessão começa onde a anterior parou.",
            "A segunda vantagem é a honestidade. Numa foto em tamanho cheio você percebe os olhos fechados, a criança tremida, a captura de tela de uma vaga de estacionamento do ano passado. Numa grade de miniaturas esses detalhes desaparecem; é por isso que limpezas na grade costumam apagar pouco demais ou, pior, a foto errada.",
          ],
        },
        {
          title: "O que o app Fotos já oferece",
          content: [
            "O app Fotos nativo tem duas formas de apagar em lote. Na grade da fototeca, toque em Selecionar e arraste o dedo sobre as miniaturas para selecionar uma linha ou um bloco inteiro de uma vez; depois toque no ícone da lixeira. Na visualização em tela cheia, você pode apagar a foto que está vendo e passar para a próxima. As duas formas são gratuitas e rápidas para um punhado de fotos.",
            "O que falta ao Fotos é memória. Ele não sabe quais fotos você já viu e decidiu manter, então cada limpeza recomeça do topo da fototeca. Também não existe uma área de espera: uma foto apagada vai direto para Apagados Recentemente e, se você mudar de ideia, precisa procurá-la lá.",
            "O Fotos tem, sim, filtros úteis que encurtam qualquer revisão. Álbuns > Tipos de Mídia lista separadamente Capturas de Tela, Gravações de Tela, Live Photos e Vídeos, e Álbuns > Utilitários traz Duplicatas para as cópias exatas. Para as repetições quase idênticas, nosso guia para [encontrar fotos duplicadas e semelhantes no iPhone](/blog/find-duplicate-similar-photos-iphone) explica o que escapa ao álbum da Apple.",
          ],
        },
        {
          title: "Como funciona a revisão deslizando no DiskMop",
          content: [
            "O DiskMop para iPhone tem uma aba Deslizar construída sobre uma regra: deslizar não é apagar. Deslize para a direita e a foto é mantida; deslize para a esquerda e ela vai para um cesto. Enquanto você arrasta, o cartão se inclina e aparece um carimbo MANTER ou CESTO, então você sempre sabe para que lado a decisão vai antes de soltar. O cesto mostra o tamanho aproximado e nada sai da sua fototeca até você esvaziá-lo e confirmar na janela do iOS.",
            "As decisões pertencem à foto, não à lista. Se você mantiver uma foto ao revisar Outras fotos, ela não será perguntada de novo em Capturas de ecrã ou em Desfocadas e mal tiradas. Feche o app no meio do caminho e a revisão continua do mesmo ponto. Suas escolhas ficam salvas num arquivo no telefone e nunca saem dele. Se quiser começar do zero, Recomeçar apaga todas as decisões e esvazia o cesto sem excluir uma única foto.",
            "Você escolhe o que revisar. Todas as fotos funciona na hora, antes mesmo de a primeira análise terminar. Depois da análise, você pode deslizar por listas mais específicas: Capturas de ecrã, Desfocadas e mal tiradas, Documentos e recibos, Salvas de apps de conversa, Gravações de ecrã, Vídeos grandes e Outras fotos, que reúne tudo o que não entrou em nenhuma categoria. Os vídeos tocam sem som enquanto você mantém o cartão pressionado, e as fotos guardadas só no iCloud aparecem marcadas para você saber antes de decidir.",
          ],
        },
        {
          title: "Uma rotina que realmente chega ao fim",
          content: [
            "Comece por onde as decisões são mais fáceis. Capturas de tela e fotos salvas de apps de conversa são quase sempre descartáveis; você vai deslizar por elas rapidamente e ver o cesto crescer, o que motiva. Deixe Todas as fotos para depois: ali estão suas memórias de verdade, e elas merecem sessões mais lentas e cuidadosas.",
            "Faça sessões curtas. Cinco minutos por dia bastam para revisar várias centenas de fotos e, como cada decisão fica salva, as sessões curtas se somam. O DiskMop conta uma sequência diária para os dias em que você apaga algo; as sequências e os troféus, como Decisor por 500 decisões deslizando, rendem exclusões gratuitas extras para quem não tem o Pro.",
            "Esvazie o cesto no fim de cada sessão em vez de deixá-lo crescer por semanas. Abra-o, tire o que fez você hesitar e apague o resto. Depois lembre-se de Apagados Recentemente: até você esvaziá-lo, as fotos apagadas continuam ocupando armazenamento, como explicamos no nosso guia sobre [por que apagar fotos não libera espaço no iPhone](/blog/iphone-storage-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Deslizar para a esquerda apaga a foto na hora?",
          answer:
            "Não. No DiskMop, deslizar para a esquerda apenas coloca a foto no cesto. A exclusão acontece quando você toca em Esvaziar e confirma na própria janela do iOS, e mesmo assim as fotos esperam 30 dias em Apagados Recentemente.",
        },
        {
          question: "Posso desfazer um deslize?",
          answer:
            "Sim. Toque em Desfazer para trazer de volta a foto anterior; as últimas 50 decisões podem ser desfeitas uma a uma. Você também pode tirar qualquer foto do cesto antes de esvaziá-lo.",
        },
        {
          question: "Vou ver as mesmas fotos de novo na próxima vez?",
          answer:
            "Não. Cada decisão fica salva para aquela foto, então as fotos mantidas não são perguntadas de novo, nem em outra lista. Recomeçar apaga todas as decisões se você quiser revisar tudo outra vez.",
        },
        {
          question: "O app Fotos tem um modo de apagar deslizando?",
          answer:
            "Não como modo de revisão. Você pode passar de uma foto para outra em tela cheia e apagá-las uma a uma, ou arrastar o dedo pela grade para selecionar muitas, mas o Fotos não mantém uma fila de fotos não revisadas nem lembra quais você manteve.",
        },
        {
          question: "Deslizar é grátis?",
          answer:
            "Deslizar e analisar são grátis. Sem assinatura, você pode apagar até cinco fotos por dia, mais as exclusões extras ganhas com sequências e troféus. O DiskMop Pro, uma assinatura mensal que começa com um teste gratuito de 7 dias, remove o limite.",
        },
      ],
      verdict: [
        "Se o seu rolo de câmera passou do ponto em que selecionar parece possível, mude o método em vez de forçá-lo. Uma foto em tamanho cheio de cada vez, um cesto em vez de exclusão imediata e decisões que ficam lembradas transformam uma tarefa impossível em algumas sessões curtas.",
        "O DiskMop para iPhone acrescenta esse modo de revisão à sua fototeca: deslize para a direita para manter, para a esquerda para pôr no cesto, desfaça as últimas 50 decisões e apague só quando confirmar. A análise e o deslizar são grátis, até cinco fotos por dia podem ser apagadas sem custo e o DiskMop Pro, com 7 dias de teste gratuito, remove o limite.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title: "スワイプで iPhone の写真を整理：右で残す、左で削除（後悔なしで）",
      metaDescription:
        "写真アプリで 1 枚ずつ選ぶのは 50 枚で疲れます。右にスワイプで残す、左で削除。この方法なら数千枚でも最後まで片付き、早まって大切な写真を失うこともありません。",
      subtitle:
        "1 枚ずつ判断し、すぐ削除せず「かご」に入れ、本当に最後まで終わる整理術",
      intro: [
        "結論から言うと、写真アプリには「残すか削除するか」を順に判断していくモードがありません。サムネイルの上で指をなぞって多数を一度に選択したり、全画面表示で 1 枚ずつ削除したりはできますが、どの写真をすでに見たかは何も記憶されません。スワイプ整理はこの穴を埋めます。写真を 1 枚表示し、残すなら右へ、かごに入れるなら左へスワイプ。最後に、あなたが確認したあとで、かごの中身だけが削除されます。",
        "このガイドでは、グリッドでの選択が挫折しやすいのにスワイプなら続く理由、写真アプリの標準機能でできること・できないこと、iPhone 版 DiskMop のスワイプ整理があなたの判断をどう扱うか、そして数千枚のカメラロールを数回のセッションで片付ける短い習慣を紹介します。",
      ],
      keyTakeaways: [
        "写真アプリではグリッド上で指をなぞって複数の写真を選択できますが、未確認の写真の順番待ちリストはなく、すでに残すと決めた写真も記憶されません。",
        "スワイプは大掃除を何千もの小さな「はい・いいえ」の判断に分けます。グリッド選択は途中で投げ出されがちなのに、スワイプ整理は最後まで続くのはこのためです。",
        "DiskMop では左スワイプは写真をかごに入れるだけです。かごを空にして iOS 自身の確認ダイアログで承認するまで、何も削除されません。",
        "判断は写真ごとに保存されます。残した写真は別のリストで再び尋ねられず、アプリを閉じても止めたところから再開できます。",
        "直近 50 回の判断は 1 回ずつ取り消せます。かごに入れた写真も、削除する前なら取り出せます。",
        "削除した写真は「最近削除した項目」に 30 日間残ります。ストレージのバーが動くのは、そのアルバムを空にしたあとです。",
      ],
      dataTable: {
        caption: "写真アプリのグリッド選択とスワイプ整理の比較",
        columns: ["項目", "写真アプリ（グリッド）", "スワイプ整理（DiskMop）"],
        rows: [
          [
            "判断のしかた",
            "小さなサムネイルにチェック",
            "フルサイズの写真を 1 枚ずつ",
          ],
          ["残した写真を記憶", "しない", "する（写真ごと）"],
          ["アプリを閉じたあとの再開", "選択は消える", "止めたところから再開"],
          [
            "間違いの取り消し",
            "「最近削除した項目」から復元",
            "削除前に直近 50 回の判断を取り消し",
          ],
          [
            "削除のタイミング",
            "即座に「最近削除した項目」へ",
            "かごを空にしたときだけ",
          ],
        ],
      },
      howTo: {
        name: "スワイプで iPhone の写真を整理する",
        totalTime: "PT15M",
        steps: [
          {
            name: "整理する対象を選ぶ",
            text: "DiskMop を開いて「スワイプ」タブへ。すぐ始めるなら「すべての写真」を、スキャン完了を待つなら「スクリーンショット」「ぶれ・失敗写真」「チャットアプリから保存」「その他の写真」などの絞り込んだリストを選びます。",
          },
          {
            name: "1 枚ずつ判断する",
            text: "残すなら右へ、かごに入れるなら左へスワイプします。カードの下の「残す」「かごに入れる」ボタンでも同じ操作ができ、片手ならこちらが楽です。動画はカードを長押しするとカード内で再生されます。",
          },
          {
            name: "気が変わったら取り消す",
            text: "「取り消す」をタップすると直前の写真が戻ります。直近 50 回の判断まで 1 回ずつさかのぼれます。",
          },
          {
            name: "かごを確認する",
            text: "かごには入っている枚数とおおよそのサイズが表示されます。開いて残したいものを取り出し、確信が持てたら「かごを空にする」をタップします。",
          },
          {
            name: "承認して容量を空ける",
            text: "削除の前に iOS が確認を求めます。削除した写真はその後 30 日間、写真 > アルバム > 最近削除した項目に残ります。今すぐ容量を取り戻すには、このアルバムを空にしてください。",
          },
        ],
      },
      sections: [
        {
          title: "選択は挫折するのにスワイプは続く理由",
          content: [
            "カメラロールを整理しようとした人の多くは、数分でやめてしまいます。原因はグリッドです。何百もの小さなサムネイルひとつひとつを目を凝らして判断しなければならず、1 回の押し間違いで違う写真が選択されることもあります。50 枚ほど選んだところで労力が成果を上回り、選択は放り出され、ライブラリは増え続けます。",
            "スワイプ整理は作業の形そのものを変えます。巨大な選択を 1 回する代わりに、フルサイズの写真 1 枚についての小さく独立した判断を何千回も重ねます。残すか、残さないか。スワイプはその瞬間に完結するので、2 分でやめても確かな前進が残り、次のセッションは前回終わったところから始まります。",
            "もうひとつの利点は、判断が正直になることです。フルサイズの写真なら、閉じた目、ぶれた子ども、去年の駐車場のスクリーンショットに気づけます。サムネイルのグリッドではこうした細部が消えてしまいます。グリッドでの整理が削除不足に終わったり、もっと悪いことに違うカットを消してしまったりするのはこのためです。",
          ],
        },
        {
          title: "写真アプリにすでにある機能",
          content: [
            "標準の写真アプリには、まとめて削除する方法が 2 つあります。ライブラリのグリッドで「選択」をタップし、サムネイルの上を指でなぞれば 1 行やブロックごと一気に選択でき、そのあとゴミ箱アイコンをタップします。全画面表示では、見ている写真を削除して次に進めます。どちらも無料で、数枚程度なら速い方法です。",
            "写真アプリにないのは記憶です。どの写真をすでに見て残すと決めたかを知らないので、整理するたびにライブラリの先頭からやり直しになります。保留場所もありません。削除した写真はそのまま「最近削除した項目」へ移り、気が変わったらそこから探し出す必要があります。",
            "とはいえ写真アプリには、どんな整理も短くしてくれる便利な絞り込みがあります。アルバム > メディアタイプでは、スクリーンショット、画面収録、Live Photos、ビデオが別々に一覧でき、アルバム > ユーティリティには完全な複製を集めた「重複項目」があります。ほぼ同じ撮り直し写真については、[iPhone で重複写真と類似写真を見つける方法](/blog/find-duplicate-similar-photos-iphone)で Apple のアルバムが見逃すものを解説しています。",
          ],
        },
        {
          title: "DiskMop のスワイプ整理のしくみ",
          content: [
            "iPhone 版 DiskMop の「スワイプ」タブは、「スワイプは削除ではない」というひとつのルールの上に作られています。右へスワイプすれば写真は残り、左へスワイプすればかごに入ります。ドラッグ中はカードが傾き、「残す」または「かご」のスタンプが現れるので、指を離す前にどちらに決まるのか常にわかります。かごにはおおよそのサイズが表示され、かごを空にして iOS のダイアログで承認するまで、ライブラリからは何も消えません。",
            "判断はリストではなく写真に結びつきます。「その他の写真」で残した写真は、「スクリーンショット」や「ぶれ・失敗写真」で再び尋ねられることはありません。途中でアプリを閉じても、同じ場所から再開します。選択内容は iPhone 内のファイルに保存され、端末の外には出ません。最初からやり直したいときは「最初からやり直す」で、写真を 1 枚も削除せずにすべての判断を消去し、かごを空にできます。",
            "何を整理するかは自分で選べます。「すべての写真」は最初のスキャンが終わる前からすぐに使えます。スキャン後は、「スクリーンショット」「ぶれ・失敗写真」「書類・レシート」「チャットアプリから保存」「画面収録」「大きな動画」、そしてどのカテゴリにも入らなかった写真を集めた「その他の写真」といった、絞り込んだリストをスワイプできます。動画はカードを長押ししている間だけ無音で再生され、iCloud にしかない写真には印が付くので、判断の前にわかります。",
          ],
        },
        {
          title: "最後までやり遂げられる習慣",
          content: [
            "判断がいちばん楽なところから始めましょう。スクリーンショットやチャットアプリから保存した写真は、ほとんどが手放せるものです。すばやくスワイプでき、かごが増えていくのが見えるのでやる気が出ます。「すべての写真」は後回しに。そこには本当の思い出があり、もっとゆっくり丁寧なセッションに値します。",
            "セッションは短く。1 日 5 分で数百枚は確認でき、判断はすべて保存されるので、短いセッションでも積み重なります。DiskMop は何かを削除した日を連続記録として数えます。連続記録や、スワイプ判断 500 回で得られる「決断の達人」などのトロフィーは、Pro を利用していない人に追加の無料削除回数をもたらします。",
            "かごを何週間も溜めず、セッションの終わりごとに空にしましょう。開いて迷ったものを取り出し、残りを削除します。そのあと「最近削除した項目」も忘れずに。空にするまで、削除した写真はストレージを使い続けます。詳しくは[写真を削除しても iPhone の空き容量が増えない理由](/blog/iphone-storage-full)で解説しています。",
          ],
        },
      ],
      faq: [
        {
          question: "左にスワイプすると写真はすぐに削除されますか？",
          answer:
            "いいえ。DiskMop では左スワイプは写真をかごに入れるだけです。削除されるのは「かごを空にする」をタップし、iOS 自身のダイアログで承認したときで、その場合も写真は 30 日間「最近削除した項目」に残ります。",
        },
        {
          question: "スワイプを取り消せますか？",
          answer:
            "はい。「取り消す」をタップすると直前の写真が戻り、直近 50 回の判断を 1 回ずつ取り消せます。かごを空にする前なら、どの写真もかごから取り出せます。",
        },
        {
          question: "次回また同じ写真が表示されますか？",
          answer:
            "いいえ。判断はその写真ごとに保存されるため、残した写真は別のリストでも再び尋ねられません。すべてを見直したい場合は「最初からやり直す」で判断をすべて消去できます。",
        },
        {
          question: "写真アプリにスワイプで削除するモードはありますか？",
          answer:
            "整理モードとしてはありません。全画面表示で写真を切り替えて 1 枚ずつ削除したり、グリッドを指でなぞって多数を選択したりはできますが、写真アプリは未確認の写真のリストを持たず、どれを残したかも記憶しません。",
        },
        {
          question: "スワイプ整理は無料ですか？",
          answer:
            "スワイプとスキャンは無料です。サブスクリプションなしでも 1 日 5 枚まで、さらに連続記録やトロフィーで得た追加分を削除できます。7 日間の無料トライアルから始まる月額サブスクリプション DiskMop Pro なら制限がなくなります。",
        },
      ],
      verdict: [
        "カメラロールが「選択なんて無理」と感じるほど膨らんでいるなら、無理に続けるより方法を変えましょう。フルサイズで 1 枚ずつ、即削除ではなくかごへ、そして判断を覚えておくこと。この 3 つで、不可能に思えた作業が数回の短いセッションに変わります。",
        "iPhone 版 DiskMop は、その整理モードをあなたのライブラリに加えます。右で残す、左でかごへ、直近 50 回の判断は取り消し可能、削除はあなたが承認したときだけ。スキャンとスワイプは無料、1 日 5 枚までは無料で削除でき、7 日間の無料トライアル付きの DiskMop Pro なら制限がなくなります。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
