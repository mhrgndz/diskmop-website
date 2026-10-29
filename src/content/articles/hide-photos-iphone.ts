import type { Article } from "../types";

export const hidePhotosIphone: Article = {
  slug: "hide-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  updated: "2026-10-30",
  readingTime: 7,
  content: {
    tr: {
      title:
        "iPhone'da Fotoğraf Gizleme: Gizlenmiş Albüm mü, Kilitli ve Şifreli Kasa mı?",
      metaDescription:
        "Gizlenmiş albüm fotoğrafları kitaplıktan saklar ve Face ID ile kilitlenir, ama iCloud'a eşitlenmeye devam eder. Ayrı, şifreli bir kasa ne zaman daha iyi?",
      subtitle:
        "Apple'ın Gizlenmiş albümünün neyi koruyup neyi korumadığı ve telefondaki özel bir kasanın bedeli",
      intro: [
        "Kısa cevap: Fotoğraflar uygulamasında fotoğrafları seçin, Daha Fazla düğmesine dokunun ve Gizle'yi seçin. Kitaplıktan ve albümlerden kaybolup Gizlenmiş albümüne taşınırlar; bu albüm iOS 16 ve sonrasında yalnızca Face ID, Touch ID ya da parolanızla açılır. Çoğu kişi için bu yeterlidir. Ama Gizlenmiş albüm hâlâ fotoğraf kitaplığınızın parçasıdır: iCloud Fotoğrafları üzerinden Apple Hesabınızla oturum açılmış her aygıta eşitlenir ve iPhone'un parolasını bilen herkes için açılır.",
        "Bu rehber Gizlenmiş albümün doğru kullanımını, neye karşı koruyup neye karşı korumadığını, kilitli notlar ve kilitli uygulamalar gibi Apple'ın diğer seçeneklerini ve iPhone için DiskMop'taki gibi ayrı, şifreli bir kasanın ne zaman daha iyi bir seçim olduğunu anlatıyor; kullanmadan önce bilmeniz gereken tek bedel de dahil.",
      ],
      keyTakeaways: [
        "Bir fotoğrafı gizlemek için Fotoğraflar'da seçin, Daha Fazla'ya (üç nokta) dokunun ve Gizle'yi seçin; fotoğraf Albümler > Yardımcı Programlar > Gizlenmiş'e taşınır.",
        "iOS 16 ve sonrasında Gizlenmiş albüm varsayılan olarak Face ID, Touch ID ya da parolayla kilitlidir; ayar Ayarlar > Uygulamalar > Fotoğraflar'dadır.",
        "Aynı ayarlardaki Gizlenmiş Albümü Göster'i kapatmak albümü Yardımcı Programlar'dan tamamen kaldırır; böylece kimse var olduğunu görmez.",
        "Gizlenen fotoğraflar kitaplığınızda ve iCloud Fotoğrafları'nda kalır, diğer aygıtlarınıza eşitlenir ve parolanızı bilen herkes tarafından görülebilir.",
        "Ayrı bir kasa, şifreli kopyaları fotoğraf kitaplığının dışında saklar; DiskMop'ta anahtar aygıttan hiç çıkmaz ve kasa yalnızca Face ID ya da parolayla açılır.",
        "DiskMop'un kasası bilerek iCloud yedeklerinin dışında tutulur: uygulamayı silerseniz kasa da silinir, bu yüzden saklamak istediklerinizi önce Fotoğraflar'a geri aktarın.",
      ],
      dataTable: {
        caption: "iPhone'da fotoğrafları gizli tutmanın yolları",
        columns: [
          "Seçenek",
          "Nasıl kilitlenir",
          "Fotoğraflar nerede durur",
          "iCloud'da mı",
        ],
        rows: [
          [
            "Gizlenmiş albüm (Fotoğraflar)",
            "Face ID, Touch ID ya da parola (iOS 16+)",
            "Fotoğraf kitaplığında, ana görünümlerin dışında",
            "Evet, iCloud Fotoğrafları ile",
          ],
          [
            "Kilitli not (Notlar)",
            "Notlar parolası ya da aygıt parolası",
            "Notun içinde",
            "Evet, not iCloud'daysa",
          ],
          [
            "Fotoğraflar uygulamasında Face ID İste (iOS 18)",
            "Uygulamayı açmak için Face ID ya da parola",
            "Fotoğraf kitaplığında, değişmeden",
            "Evet, iCloud Fotoğrafları ile",
          ],
          [
            "DiskMop kasası",
            "Face ID, Touch ID ya da parola; anahtar yalnızca bu aygıtta",
            "Uygulamanın içinde şifreli dosyalar",
            "Hayır, bilerek iCloud yedeğinin dışında",
          ],
        ],
      },
      howTo: {
        name: "iPhone'da fotoğraf gizleme",
        totalTime: "PT5M",
        steps: [
          {
            name: "Fotoğrafları Fotoğraflar uygulamasında gizleyin",
            text: "Fotoğraflar'ı açın, Seç'e dokunun, fotoğrafları ve videoları seçin, Daha Fazla düğmesine ve ardından Gizle'ye dokunun. Onaylayın; öğeler Albümler > Yardımcı Programlar > Gizlenmiş'e taşınır.",
          },
          {
            name: "Albümün kilitli olduğunu kontrol edin",
            text: "Ayarlar > Uygulamalar > Fotoğraflar'ı açın ve Face ID Kullan'ın (ya da Touch ID veya Parola Kullan'ın) açık olduğundan emin olun. Albümü tamamen gözden kaldırmak isterseniz aynı ekranda Gizlenmiş Albümü Göster de vardır.",
          },
          {
            name: "En özel fotoğrafları bir kasaya taşıyın",
            text: "Kitaplığınızda ya da iCloud'da hiç durmaması gereken fotoğraflar için DiskMop'u açın, Ekstralar > Kasa'ya gidin, Face ID ile kilidi açın ve eklemek için + simgesine dokunun. Siz aksine karar verene kadar özgünler kitaplığınızda kalır.",
          },
          {
            name: "İsterseniz özgünleri kaldırın",
            text: "Ekledikten sonra DiskMop fotoğrafların kitaplığınızdan da kaldırılıp kaldırılmayacağını sorar. Kontrol edip iOS'ta onaylamak için Gözden geçir ve kaldır'ı ya da Kitaplıkta kalsın'ı seçin. Kaldırılan fotoğraflar 30 gün Son Silinenler'de bekler.",
          },
          {
            name: "Telefon değiştirmeden önce kopyalarını alın",
            text: "Kasa iCloud yedeklerine girmez. Uygulamayı silmeden ya da yeni bir iPhone'a geçmeden önce saklamak istediğiniz her öğeyi açıp Fotoğraflar'a aktar'a dokunun.",
          },
        ],
      },
      sections: [
        {
          title: "Yerleşik Yol: Apple'ın Gizlenmiş Albümü",
          content: [
            "Her iPhone, ek bir uygulama olmadan fotoğraf gizleyebilir. Fotoğraflar'da Seç'e dokunun, bir ya da daha fazla fotoğraf veya video seçin, Daha Fazla düğmesine dokunun ve Gizle'yi seçin. Gizlenen öğeler kitaplıktan, albümlerden ve Fotoğraflar araç takımından kaybolur ve Albümler > Yardımcı Programlar > Gizlenmiş'te toplanır. Birini geri getirmek için Gizlenmiş albümünü açın, öğeyi seçin ve Göster'i seçin.",
            "iOS 16'dan beri Gizlenmiş albüm ve Son Silinenler varsayılan olarak kilitlidir. Açmak için Face ID, Touch ID ya da parolanız gerekir; bunun anahtarı Ayarlar > Uygulamalar > Fotoğraflar'dadır. Aynı ekranda Gizlenmiş Albümü Göster, albümün Yardımcı Programlar altında görünüp görünmeyeceğini belirler; kapatırsanız bir şeyin gizlendiğine dair görünür bir iz kalmaz.",
            "Bir sürpriz hediyeyi ya da pasaportunuzun taramasını fotoğraflarınıza göz gezdiren birinden uzak tutmak için bu hızlı, ücretsiz ve yeterlidir. Yine de daha hassas bir şey için ona güvenmeden önce tam olarak neye karşı koruduğunu bilmekte fayda var.",
          ],
        },
        {
          title: "Gizlenmiş Albümün Korumadığı",
          content: [
            "Gizlemek bir görünüm ayarıdır, ayrı bir saklama yeri değil. Fotoğraflar kitaplığınızda kalır; iCloud Fotoğrafları açıksa iPad'inize, Mac'inize ve iCloud.com'a eşitlenir, oradaki Gizlenmiş albümün kendi kilidi vardır ama içeriği aynıdır. iPhone parolanızı bilen herkes de Gizlenmiş albümü açabilir, çünkü parola Face ID'nin her zaman kabul edilen alternatifidir.",
            "Apple iki seçenek daha sunar. Notlar tek tek notları bir parolayla ya da aygıt parolasıyla kilitleyebilir ve kilitli bir nota eklenen fotoğraflar bu kilitle korunur; ama oraya eklemek, siz silene kadar özgünleri kitaplığınızda bırakır. iOS 18'de bir uygulama simgesine basılı tutup Face ID İste'yi de seçebilirsiniz; Fotoğraflar uygulamasını kilitlemek tüm kitaplığı gelişigüzel erişime karşı korur, ama fotoğrafların nerede saklandığını hiç değiştirmez.",
            "İstediğiniz şey kitaplıkta, iCloud'da ve diğer aygıtlarınızda olmayan bir fotoğraf grubuysa farklı türde bir araca ihtiyacınız vardır: kendi şifreli kopyalarını bir uygulamanın içinde tutan bir kasa.",
          ],
        },
        {
          title: "DiskMop'ta Ayrı, Şifreli Bir Kasa",
          content: [
            "iPhone için DiskMop, Ekstralar > Kasa altında bir kasa içerir. Eklediğiniz fotoğraf ve videolar uygulamanın içine kopyalanır ve 256 bitlik bir anahtarla AES-GCM ile şifrelenir. Anahtar iPhone'un anahtar zincirinde saklanır, Face ID, Touch ID ya da aygıt parolasıyla korunur ve yalnızca bu aygıtta kullanılabilir olarak işaretlenir; bu yüzden yedeklere ya da başka aygıtlara taşınmaz. Kasanın neler içerdiğini gösteren dizin bile şifrelidir; kilitli bir kasa kaç öğe tuttuğunu bile açığa vurmaz.",
            "Kasa, uygulama arka plana geçer geçmez ya da kasa ekranından çıktığınızda kendini kilitler ve içeriği uygulama değiştiricide bulanık görünür. Unutulacak ayrı bir PIN yoktur: yedek yol aygıt parolasıdır. Yalnızca iCloud'da duran bir fotoğraf eklediğinizde indirilir; bir fotoğrafı düzenlediyseniz kasaya düzenlenmiş hâli girer.",
            "Bir fotoğrafı eklemek onu kitaplığınızdan kaldırmaz. DiskMop ardından özgünleri kaldırmak isteyip istemediğinizi sorar; isterseniz her zamanki gözden geçirmeden ve iOS onayından geçerler ve 30 gün Son Silinenler'de beklerler. Fotoğraflar'a aktar bir öğeyi özgün verileri, tarihi ve konumuyla kitaplığa geri koyar; kasadan silmek ise kalıcıdır ve geri alınamaz.",
          ],
        },
        {
          title: "Bilmeniz Gereken Tek Bedel",
          content: [
            "Kasa klasörü bilerek iCloud yedeklerinin dışında tutulur. İçeriğini Apple'ın sunucularından uzak tutan budur ve uygulamanın açıkça söylediği bir sonucu vardır: DiskMop'u silerseniz kasadaki her şey gider; kasa yeni bir iPhone'a da taşınmaz, çünkü anahtarı yalnızca onu oluşturan aygıtta bulunur. Geri yüklenecek bir hesap ya da sunucu kopyası yoktur.",
            "Kasayı bir yedek değil, özel bir depo olarak görün. Yeri doldurulamayacak her şeyin başka bir yerde kopyasını tutun ve telefon değiştirmeden önce kasayı açıp saklamak istediğiniz öğeleri Fotoğraflar'a geri aktarın. Bir aygıt parolası gerekir; parola yoksa kasa korunamaz ve açılmaz.",
            "Kasayı kullanmak ücretsizdir. Ekledikten sonra özgünleri kitaplığınızdan kaldırmak DiskMop'ta sıradan bir fotoğraf silme sayılır; bu, günde on fotoğrafa kadar ücretsiz, DiskMop Pro ile sınırsızdır. Fotoğrafları kitaplık kontrolden çıktığı için gizliyorsanız [iPhone fotoğraflarını kaydırarak temizleme](/blog/swipe-to-delete-photos-iphone) asıl sorunu çözebilir.",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone'da gizlenen fotoğraflar nereye gider?",
          answer:
            "Fotoğraflar uygulamasında Albümler > Yardımcı Programlar > Gizlenmiş'e taşınırlar. Artık kitaplıkta, albümlerde ya da Fotoğraflar araç takımında gösterilmezler, ama hâlâ fotoğraf kitaplığınızın parçasıdırlar.",
        },
        {
          question: "Gizlenen fotoğraflar hâlâ iCloud'da mı?",
          answer:
            "Evet. iCloud Fotoğrafları açıksa gizlenen fotoğraflar da diğer fotoğraflar gibi iCloud'a ve diğer aygıtlarınıza eşitlenir; yalnızca gösterilme biçimleri değişir.",
        },
        {
          question: "Birisi Gizlenmiş albümümü Face ID olmadan açabilir mi?",
          answer:
            "iPhone parolanızı bilen herkes açabilir, çünkü parola her zaman alternatif olarak kabul edilir. Aynı şey, DiskMop'un kasası dahil Face ID ile açılan her uygulama için geçerlidir.",
        },
        {
          question: "Uygulamayı silersem DiskMop kasasına ne olur?",
          answer:
            "İçeriği uygulamayla birlikte silinir. Kasa bilerek iCloud yedeklerinin dışında tutulur; bu yüzden uygulamayı silmeden ya da telefon değiştirmeden önce saklamak istediklerinizi Fotoğraflar'a geri aktarın.",
        },
        {
          question: "Kasaya fotoğraf eklemek onu Fotoğraflar'dan siler mi?",
          answer:
            "Hayır. Özgün, siz kaldırmayı seçene kadar kitaplığınızda kalır. Kaldırırsanız önce fotoğraflara bakarsınız, iOS onay ister ve fotoğraflar 30 gün Son Silinenler'de bekler.",
        },
      ],
      verdict: [
        "Günlük gizlilik için doğru araç Gizlenmiş albümdür: yerleşiktir, ücretsizdir, iOS 16'dan beri Face ID ile kilitlidir ve Gizlenmiş Albümü Göster ile görünmez yapılabilir. Yalnızca bunun ayrı bir yer değil bir görünüm olduğunu ve iCloud üzerinden kitaplığınızla birlikte dolaştığını unutmayın.",
        "Fotoğrafların kitaplıkta ya da iCloud'da hiç olmaması gerekiyorsa bir kasa daha uygundur. iPhone için DiskMop onları aygıttan hiç çıkmayan bir anahtarla aygıtta şifreli tutar, kendiliğinden kilitlenir ve siz aksini seçmedikçe kitaplığınıza dokunmaz. Uygulamayı silmeden önce kopyalarını alın, çünkü kasa bilerek yedeklenmez.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Hide Photos on iPhone: Hidden Album vs a Locked, Encrypted Vault",
      metaDescription:
        "The Hidden album keeps photos out of your library and locks with Face ID, but they still sync to iCloud. When a separate encrypted vault is the better choice.",
      subtitle:
        "What Apple's Hidden album protects, what it does not, and the trade-offs of a private vault on the phone",
      intro: [
        "Short answer: select the photos in the Photos app, tap the More button and choose Hide. They disappear from the library and the albums and move to the Hidden album, which on iOS 16 and later opens only with Face ID, Touch ID or your passcode. For most people that is enough. The Hidden album is still part of your photo library, though: it syncs through iCloud Photos to every device signed in with your Apple Account and opens for anyone who knows the iPhone's passcode.",
        "This guide explains how to use the Hidden album properly, what it does and does not protect against, Apple's other options such as locked notes and locked apps, and when a separate encrypted vault such as the one in DiskMop for iPhone is the better choice, including the one trade-off you must understand before you use it.",
      ],
      keyTakeaways: [
        "To hide a photo, select it in Photos, tap More (the three dots) and choose Hide; it moves to Albums > Utilities > Hidden.",
        "On iOS 16 and later the Hidden album is locked with Face ID, Touch ID or the passcode by default; the setting is in Settings > Apps > Photos.",
        "Turning off Show Hidden Album in the same settings removes the album from Utilities altogether, so nobody sees that it exists.",
        "Hidden photos stay in your library and in iCloud Photos, sync to your other devices and are visible to anyone who knows your passcode.",
        "A separate vault stores encrypted copies outside the photo library; in DiskMop the key never leaves the device and the vault opens only with Face ID or the passcode.",
        "DiskMop's vault is deliberately excluded from iCloud backups: if you delete the app, the vault is deleted too, so save anything you want to keep back to Photos first.",
      ],
      dataTable: {
        caption: "Ways to keep photos private on an iPhone",
        columns: [
          "Option",
          "How it is locked",
          "Where the photos live",
          "In iCloud",
        ],
        rows: [
          [
            "Hidden album (Photos)",
            "Face ID, Touch ID or passcode (iOS 16+)",
            "Photo library, out of the main views",
            "Yes, with iCloud Photos",
          ],
          [
            "Locked note (Notes)",
            "Notes password or device passcode",
            "Inside the note",
            "Yes, if the note is in iCloud",
          ],
          [
            "Require Face ID on the Photos app (iOS 18)",
            "Face ID or passcode to open the app",
            "Photo library, unchanged",
            "Yes, with iCloud Photos",
          ],
          [
            "DiskMop vault",
            "Face ID, Touch ID or passcode; key stored only on this device",
            "Encrypted files inside the app",
            "No, excluded from iCloud backup on purpose",
          ],
        ],
      },
      howTo: {
        name: "Hide photos on iPhone",
        totalTime: "PT5M",
        steps: [
          {
            name: "Hide photos in the Photos app",
            text: "Open Photos, tap Select, choose the photos and videos, tap the More button and then Hide. Confirm, and they move to Albums > Utilities > Hidden.",
          },
          {
            name: "Check that the album is locked",
            text: "Open Settings > Apps > Photos and make sure Use Face ID (or Touch ID, or Passcode) is on. The same screen has Show Hidden Album if you want the album out of sight entirely.",
          },
          {
            name: "Move the most private photos to a vault",
            text: "For photos that should not live in your library or iCloud at all, open DiskMop, go to Extras > Vault, unlock it with Face ID and tap + to add them. The originals stay in your library until you decide otherwise.",
          },
          {
            name: "Remove the originals if you want",
            text: "After adding, DiskMop asks whether to remove the photos from your library. Choose Review and remove to check them and confirm in iOS, or Keep in library. Removed photos wait 30 days in Recently Deleted.",
          },
          {
            name: "Save copies before you switch phones",
            text: "The vault is not in iCloud backups. Before deleting the app or moving to a new iPhone, open each item and tap Save to Photos for anything you want to keep.",
          },
        ],
      },
      sections: [
        {
          title: "The Built-In Way: Apple's Hidden Album",
          content: [
            "Every iPhone can hide photos without any extra app. In Photos, tap Select, choose one or more photos or videos, tap the More button and choose Hide. Hidden items disappear from the library, from albums and from the Photos widget, and are collected in Albums > Utilities > Hidden. To bring one back, open the Hidden album, select it and choose Unhide.",
            "Since iOS 16 the Hidden album and Recently Deleted are locked by default. Opening them requires Face ID, Touch ID or your passcode, and the switch for that is in Settings > Apps > Photos. On the same screen, Show Hidden Album controls whether the album appears under Utilities at all; turn it off and there is no visible sign that anything is hidden.",
            "For keeping a surprise gift or a scan of your passport away from someone scrolling through your photos, this is quick, free and good enough. It is worth knowing exactly what it protects against, though, before you rely on it for something more sensitive.",
          ],
        },
        {
          title: "What the Hidden Album Does Not Protect",
          content: [
            "Hidden is a view setting, not a separate storage place. The photos remain in your library, so with iCloud Photos turned on they sync to your iPad, your Mac and iCloud.com, where the Hidden album has its own lock but the same contents. Anyone who knows your iPhone passcode can also open the Hidden album, because the passcode is always an accepted alternative to Face ID.",
            "Apple offers two more options. Notes can lock individual notes with a password or the device passcode, and photos added to a locked note are protected with it, although adding them there leaves the originals in your library until you delete them. On iOS 18 you can also touch and hold an app icon and choose Require Face ID; locking the Photos app protects the whole library from casual access, but it changes nothing about where the photos are stored.",
            "If what you want is a set of photos that is not in the library, not in iCloud and not on your other devices, you need a different kind of tool: a vault that keeps its own encrypted copies inside an app.",
          ],
        },
        {
          title: "A Separate Encrypted Vault in DiskMop",
          content: [
            "DiskMop for iPhone includes a vault under Extras > Vault. Photos and videos you add are copied into the app and encrypted with AES-GCM using a 256-bit key that is stored in the iPhone's keychain, protected by Face ID, Touch ID or the device passcode, and marked as available on this device only, so it is not carried over to backups or other devices. Even the index of what the vault contains is encrypted, so a locked vault does not reveal how many items it holds.",
            "The vault locks itself as soon as the app goes to the background or you leave the vault screen, and its contents are blurred in the app switcher. There is no separate PIN to forget: the device passcode is the fallback. A photo stored only in iCloud is downloaded when you add it, and if you edited a photo, the edited version is what goes into the vault.",
            "Adding a photo does not remove it from your library. DiskMop asks afterwards whether you want to remove the originals; if you do, they go through the usual review and the iOS confirmation and wait 30 days in Recently Deleted. Save to Photos puts an item back into the library with its original data, date and location, while deleting from the vault is permanent and cannot be undone.",
          ],
        },
        {
          title: "The One Trade-Off You Must Understand",
          content: [
            "The vault folder is excluded from iCloud backups on purpose. That is what keeps its contents off Apple's servers, and it has a consequence the app states openly: if you delete DiskMop, everything in the vault is gone, and the vault does not move to a new iPhone either, because its key exists only on the device that created it. There is no account and no server copy to restore from.",
            "Treat the vault as private storage, not as a backup. Keep a copy elsewhere of anything irreplaceable, and before you switch phones, open the vault and save the items you want to keep back to Photos. A device passcode is required; without one, the vault cannot be protected and will not open.",
            "The vault is free to use. Removing the originals from your library after adding them counts as an ordinary photo deletion in DiskMop, which is free for up to ten photos a day and unlimited with DiskMop Pro. If you are hiding photos because the library has grown out of control, [cleaning up iPhone photos by swiping](/blog/swipe-to-delete-photos-iphone) may solve the bigger problem.",
          ],
        },
      ],
      faq: [
        {
          question: "Where do hidden photos go on iPhone?",
          answer:
            "They move to Albums > Utilities > Hidden in the Photos app. They are no longer shown in the library, albums or the Photos widget, but they are still part of your photo library.",
        },
        {
          question: "Are hidden photos still in iCloud?",
          answer:
            "Yes. With iCloud Photos on, hidden photos sync to iCloud and your other devices like any other photo; only the way they are displayed changes.",
        },
        {
          question: "Can someone open my Hidden album without Face ID?",
          answer:
            "Anyone who knows your iPhone passcode can, because the passcode is always accepted as an alternative. The same is true for any app that unlocks with Face ID, including DiskMop's vault.",
        },
        {
          question: "What happens to the DiskMop vault if I delete the app?",
          answer:
            "Its contents are deleted with the app. The vault is excluded from iCloud backups on purpose, so save anything you want to keep back to Photos before deleting the app or switching phones.",
        },
        {
          question: "Does adding a photo to the vault delete it from Photos?",
          answer:
            "No. The original stays in your library until you choose to remove it. If you do, you review the photos first, iOS asks for confirmation, and they wait 30 days in Recently Deleted.",
        },
      ],
      verdict: [
        "For everyday privacy, the Hidden album is the right tool: it is built in, free, locked with Face ID since iOS 16, and can be made invisible with Show Hidden Album. Just remember that it is a view, not a separate place, and that it travels with your library through iCloud.",
        "When photos should not be in the library or in iCloud at all, a vault is the better fit. DiskMop for iPhone keeps them encrypted on the device with a key that never leaves it, locks automatically and leaves your library untouched unless you choose otherwise. Save copies before deleting the app, because the vault is deliberately not backed up.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Fotos auf dem iPhone ausblenden: Album „Ausgeblendet“ oder verschlüsselter Tresor?",
      metaDescription:
        "Das Album „Ausgeblendet“ verbirgt Fotos und sperrt mit Face ID, doch sie synchronisieren weiter mit iCloud. Wann ein eigener verschlüsselter Tresor besser ist.",
      subtitle:
        "Was Apples Album „Ausgeblendet“ schützt, was nicht, und welchen Preis ein privater Tresor auf dem Telefon hat",
      intro: [
        "Kurze Antwort: Wählen Sie die Fotos in der Fotos-App aus, tippen Sie auf die Taste Mehr und wählen Sie Ausblenden. Sie verschwinden aus der Mediathek und den Alben und landen im Album „Ausgeblendet“, das sich ab iOS 16 nur mit Face ID, Touch ID oder Ihrem Code öffnet. Für die meisten reicht das. Das Album „Ausgeblendet“ bleibt aber Teil Ihrer Fotomediathek: Es synchronisiert über iCloud-Fotos mit jedem Gerät, das mit Ihrem Apple Account angemeldet ist, und öffnet sich für jeden, der den Code des iPhone kennt.",
        "Dieser Ratgeber erklärt, wie Sie das Album „Ausgeblendet“ richtig nutzen, wovor es schützt und wovor nicht, welche weiteren Möglichkeiten Apple mit gesperrten Notizen und gesperrten Apps bietet und wann ein eigener verschlüsselter Tresor wie der in DiskMop für iPhone die bessere Wahl ist, einschließlich des einen Kompromisses, den Sie vorher verstehen müssen.",
      ],
      keyTakeaways: [
        "Zum Ausblenden wählen Sie ein Foto in Fotos aus, tippen auf Mehr (die drei Punkte) und wählen Ausblenden; es wandert nach Alben > Dienstprogramme > Ausgeblendet.",
        "Ab iOS 16 ist das Album „Ausgeblendet“ standardmäßig mit Face ID, Touch ID oder dem Code gesperrt; die Einstellung finden Sie unter Einstellungen > Apps > Fotos.",
        "Wenn Sie in denselben Einstellungen die Anzeige des Albums „Ausgeblendet“ abschalten, verschwindet es ganz aus den Dienstprogrammen, und niemand sieht, dass es existiert.",
        "Ausgeblendete Fotos bleiben in Ihrer Mediathek und in iCloud-Fotos, synchronisieren mit Ihren anderen Geräten und sind für jeden sichtbar, der Ihren Code kennt.",
        "Ein eigener Tresor speichert verschlüsselte Kopien außerhalb der Fotomediathek; in DiskMop verlässt der Schlüssel nie das Gerät, und der Tresor öffnet sich nur mit Face ID oder dem Code.",
        "Der Tresor von DiskMop ist bewusst von iCloud-Backups ausgenommen: Löschen Sie die App, wird auch der Tresor gelöscht; sichern Sie also vorher alles, was Sie behalten möchten, zurück in Fotos.",
      ],
      dataTable: {
        caption: "Möglichkeiten, Fotos auf dem iPhone privat zu halten",
        columns: [
          "Option",
          "Wie gesperrt wird",
          "Wo die Fotos liegen",
          "In iCloud",
        ],
        rows: [
          [
            "Album „Ausgeblendet“ (Fotos)",
            "Face ID, Touch ID oder Code (iOS 16+)",
            "In der Fotomediathek, außerhalb der Hauptansichten",
            "Ja, mit iCloud-Fotos",
          ],
          [
            "Gesperrte Notiz (Notizen)",
            "Notizen-Passwort oder Gerätecode",
            "In der Notiz",
            "Ja, wenn die Notiz in iCloud liegt",
          ],
          [
            "Face ID für die Fotos-App anfordern (iOS 18)",
            "Face ID oder Code zum Öffnen der App",
            "In der Fotomediathek, unverändert",
            "Ja, mit iCloud-Fotos",
          ],
          [
            "DiskMop-Tresor",
            "Face ID, Touch ID oder Code; Schlüssel nur auf diesem Gerät",
            "Verschlüsselte Dateien in der App",
            "Nein, bewusst vom iCloud-Backup ausgenommen",
          ],
        ],
      },
      howTo: {
        name: "Fotos auf dem iPhone ausblenden",
        totalTime: "PT5M",
        steps: [
          {
            name: "Fotos in der Fotos-App ausblenden",
            text: "Öffnen Sie Fotos, tippen Sie auf Auswählen, wählen Sie die Fotos und Videos aus, tippen Sie auf die Taste Mehr und dann auf Ausblenden. Bestätigen Sie; die Objekte wandern nach Alben > Dienstprogramme > Ausgeblendet.",
          },
          {
            name: "Prüfen, ob das Album gesperrt ist",
            text: "Öffnen Sie Einstellungen > Apps > Fotos und stellen Sie sicher, dass Face ID verwenden (oder Touch ID bzw. Code verwenden) aktiviert ist. Auf demselben Bildschirm können Sie die Anzeige des Albums „Ausgeblendet“ abschalten, wenn es ganz verschwinden soll.",
          },
          {
            name: "Die privatesten Fotos in einen Tresor verschieben",
            text: "Für Fotos, die gar nicht in der Mediathek oder in iCloud liegen sollen, öffnen Sie DiskMop, gehen Sie zu Extras > Tresor, entsperren Sie ihn mit Face ID und tippen Sie auf +, um sie hinzuzufügen. Die Originale bleiben in der Mediathek, bis Sie anders entscheiden.",
          },
          {
            name: "Originale bei Bedarf entfernen",
            text: "Nach dem Hinzufügen fragt DiskMop, ob die Fotos aus der Mediathek entfernt werden sollen. Wählen Sie Prüfen und entfernen, um sie anzusehen und in iOS zu bestätigen, oder In Mediathek behalten. Entfernte Fotos warten 30 Tage in „Zuletzt gelöscht“.",
          },
          {
            name: "Vor dem Gerätewechsel Kopien sichern",
            text: "Der Tresor ist nicht in iCloud-Backups enthalten. Bevor Sie die App löschen oder auf ein neues iPhone umziehen, öffnen Sie jedes Objekt, das Sie behalten möchten, und tippen Sie auf In Fotos sichern.",
          },
        ],
      },
      sections: [
        {
          title: "Der eingebaute Weg: Apples Album „Ausgeblendet“",
          content: [
            "Jedes iPhone kann Fotos ohne zusätzliche App ausblenden. Tippen Sie in Fotos auf Auswählen, wählen Sie ein oder mehrere Fotos oder Videos, tippen Sie auf die Taste Mehr und wählen Sie Ausblenden. Ausgeblendete Objekte verschwinden aus der Mediathek, aus Alben und aus dem Fotos-Widget und werden unter Alben > Dienstprogramme > Ausgeblendet gesammelt. Um eines zurückzuholen, öffnen Sie das Album, wählen es aus und tippen auf Einblenden.",
            "Seit iOS 16 sind das Album „Ausgeblendet“ und „Zuletzt gelöscht“ standardmäßig gesperrt. Zum Öffnen braucht es Face ID, Touch ID oder Ihren Code; der Schalter dafür liegt unter Einstellungen > Apps > Fotos. Auf demselben Bildschirm legen Sie fest, ob das Album überhaupt unter Dienstprogramme erscheint; schalten Sie die Anzeige ab, gibt es kein sichtbares Zeichen dafür, dass etwas ausgeblendet ist.",
            "Um ein Überraschungsgeschenk oder den Scan Ihres Reisepasses vor jemandem zu verbergen, der durch Ihre Fotos blättert, ist das schnell, kostenlos und ausreichend. Bevor Sie sich für etwas Sensibleres darauf verlassen, sollten Sie aber genau wissen, wovor es schützt.",
          ],
        },
        {
          title: "Wovor das Album „Ausgeblendet“ nicht schützt",
          content: [
            "Ausblenden ist eine Ansichtseinstellung, kein eigener Speicherort. Die Fotos bleiben in Ihrer Mediathek, synchronisieren also mit aktivierten iCloud-Fotos auf iPad, Mac und iCloud.com, wo das Album „Ausgeblendet“ eine eigene Sperre, aber denselben Inhalt hat. Wer Ihren iPhone-Code kennt, kann das Album ebenfalls öffnen, denn der Code wird immer als Alternative zu Face ID akzeptiert.",
            "Apple bietet zwei weitere Möglichkeiten. In Notizen lassen sich einzelne Notizen mit einem Passwort oder dem Gerätecode sperren, und Fotos in einer gesperrten Notiz sind damit geschützt; die Originale bleiben dabei aber in der Mediathek, bis Sie sie löschen. Ab iOS 18 können Sie außerdem ein App-Symbol gedrückt halten und Face ID anfordern wählen; das Sperren der Fotos-App schützt die ganze Mediathek vor neugierigen Blicken, ändert aber nichts daran, wo die Fotos gespeichert sind.",
            "Wenn Sie eine Gruppe von Fotos möchten, die weder in der Mediathek noch in iCloud noch auf Ihren anderen Geräten liegt, brauchen Sie ein anderes Werkzeug: einen Tresor, der eigene verschlüsselte Kopien innerhalb einer App aufbewahrt.",
          ],
        },
        {
          title: "Ein eigener verschlüsselter Tresor in DiskMop",
          content: [
            "DiskMop für iPhone enthält unter Extras > Tresor einen Tresor. Hinzugefügte Fotos und Videos werden in die App kopiert und mit AES-GCM und einem 256-Bit-Schlüssel verschlüsselt. Der Schlüssel liegt im Schlüsselbund des iPhone, ist durch Face ID, Touch ID oder den Gerätecode geschützt und als nur auf diesem Gerät verfügbar markiert, gelangt also weder in Backups noch auf andere Geräte. Sogar das Verzeichnis des Tresorinhalts ist verschlüsselt, sodass ein gesperrter Tresor nicht einmal verrät, wie viele Objekte er enthält.",
            "Der Tresor sperrt sich, sobald die App in den Hintergrund geht oder Sie den Tresorbildschirm verlassen, und im App-Umschalter erscheint sein Inhalt verschwommen. Es gibt keine eigene PIN, die man vergessen könnte: Der Gerätecode ist die Ausweichlösung. Ein Foto, das nur in iCloud liegt, wird beim Hinzufügen geladen, und bei einem bearbeiteten Foto landet die bearbeitete Fassung im Tresor.",
            "Ein Foto hinzuzufügen entfernt es nicht aus der Mediathek. DiskMop fragt anschließend, ob Sie die Originale entfernen möchten; wenn ja, durchlaufen sie die übliche Prüfung und die iOS-Bestätigung und warten 30 Tage in „Zuletzt gelöscht“. In Fotos sichern legt ein Objekt mit seinen Originaldaten, Datum und Ort zurück in die Mediathek, während das Löschen aus dem Tresor endgültig ist und sich nicht rückgängig machen lässt.",
          ],
        },
        {
          title: "Der eine Kompromiss, den Sie verstehen müssen",
          content: [
            "Der Tresorordner ist bewusst von iCloud-Backups ausgenommen. Das hält seinen Inhalt von Apples Servern fern und hat eine Folge, die die App offen benennt: Löschen Sie DiskMop, ist alles im Tresor weg, und auf ein neues iPhone zieht der Tresor auch nicht um, weil sein Schlüssel nur auf dem Gerät existiert, das ihn erzeugt hat. Es gibt kein Konto und keine Serverkopie zum Wiederherstellen.",
            "Betrachten Sie den Tresor als privaten Speicher, nicht als Backup. Bewahren Sie von allem Unersetzlichen eine Kopie an anderer Stelle auf, und öffnen Sie vor einem Gerätewechsel den Tresor, um alles, was Sie behalten möchten, zurück in Fotos zu sichern. Ein Gerätecode ist Pflicht; ohne ihn kann der Tresor nicht geschützt werden und öffnet sich nicht.",
            "Der Tresor ist kostenlos. Die Originale nach dem Hinzufügen aus der Mediathek zu entfernen, zählt in DiskMop als gewöhnliche Fotolöschung; sie ist für bis zu zehn Fotos pro Tag kostenlos und mit DiskMop Pro unbegrenzt. Wenn Sie Fotos ausblenden, weil die Mediathek außer Kontrolle geraten ist, löst [iPhone-Fotos per Wischen aufräumen](/blog/swipe-to-delete-photos-iphone) vielleicht das größere Problem.",
          ],
        },
      ],
      faq: [
        {
          question: "Wo landen ausgeblendete Fotos auf dem iPhone?",
          answer:
            "Sie wandern in der Fotos-App nach Alben > Dienstprogramme > Ausgeblendet. In Mediathek, Alben und Fotos-Widget werden sie nicht mehr angezeigt, bleiben aber Teil Ihrer Fotomediathek.",
        },
        {
          question: "Sind ausgeblendete Fotos weiterhin in iCloud?",
          answer:
            "Ja. Mit aktivierten iCloud-Fotos synchronisieren ausgeblendete Fotos wie jedes andere Foto mit iCloud und Ihren anderen Geräten; nur ihre Anzeige ändert sich.",
        },
        {
          question:
            "Kann jemand mein Album „Ausgeblendet“ ohne Face ID öffnen?",
          answer:
            "Jeder, der Ihren iPhone-Code kennt, denn der Code wird immer als Alternative akzeptiert. Das gilt für jede App, die sich mit Face ID entsperrt, auch für den Tresor von DiskMop.",
        },
        {
          question:
            "Was passiert mit dem DiskMop-Tresor, wenn ich die App lösche?",
          answer:
            "Sein Inhalt wird mit der App gelöscht. Der Tresor ist bewusst von iCloud-Backups ausgenommen; sichern Sie also alles, was Sie behalten möchten, zurück in Fotos, bevor Sie die App löschen oder das Telefon wechseln.",
        },
        {
          question: "Löscht das Hinzufügen zum Tresor das Foto aus Fotos?",
          answer:
            "Nein. Das Original bleibt in Ihrer Mediathek, bis Sie es entfernen. Tun Sie das, prüfen Sie die Fotos zuerst, iOS bittet um Bestätigung, und sie warten 30 Tage in „Zuletzt gelöscht“.",
        },
      ],
      verdict: [
        "Für alltägliche Privatsphäre ist das Album „Ausgeblendet“ das richtige Werkzeug: eingebaut, kostenlos, seit iOS 16 mit Face ID gesperrt und auf Wunsch unsichtbar. Denken Sie nur daran, dass es eine Ansicht ist, kein eigener Ort, und dass es über iCloud mit Ihrer Mediathek mitreist.",
        "Sollen Fotos gar nicht in der Mediathek oder in iCloud liegen, passt ein Tresor besser. DiskMop für iPhone bewahrt sie verschlüsselt auf dem Gerät auf, mit einem Schlüssel, der es nie verlässt, sperrt sich automatisch und lässt Ihre Mediathek unangetastet, solange Sie nichts anderes wählen. Sichern Sie Kopien, bevor Sie die App löschen, denn der Tresor wird bewusst nicht gesichert.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Masquer des photos sur iPhone : album Masquées ou coffre chiffré verrouillé ?",
      metaDescription:
        "L'album Masquées cache les photos et se verrouille avec Face ID, mais elles restent synchronisées avec iCloud. Quand un coffre chiffré séparé est préférable.",
      subtitle:
        "Ce que protège l'album Masquées d'Apple, ce qu'il ne protège pas, et le prix d'un coffre privé sur le téléphone",
      intro: [
        "Réponse courte : sélectionnez les photos dans l'app Photos, touchez le bouton Plus et choisissez Masquer. Elles disparaissent de la photothèque et des albums pour rejoindre l'album Masquées, qui ne s'ouvre sous iOS 16 et versions ultérieures qu'avec Face ID, Touch ID ou votre code. Pour la plupart des gens, cela suffit. L'album Masquées fait pourtant toujours partie de votre photothèque : il se synchronise via Photos iCloud avec chaque appareil connecté à votre compte Apple et s'ouvre pour quiconque connaît le code de l'iPhone.",
        "Ce guide explique comment bien utiliser l'album Masquées, contre quoi il protège ou non, les autres options d'Apple comme les notes et les apps verrouillées, et quand un coffre chiffré séparé comme celui de DiskMop pour iPhone est le meilleur choix, y compris le compromis à bien comprendre avant de l'utiliser.",
      ],
      keyTakeaways: [
        "Pour masquer une photo, sélectionnez-la dans Photos, touchez Plus (les trois points) et choisissez Masquer ; elle rejoint Albums > Utilitaires > Masquées.",
        "Sous iOS 16 et versions ultérieures, l'album Masquées est verrouillé par défaut avec Face ID, Touch ID ou le code ; le réglage se trouve dans Réglages > Apps > Photos.",
        "Désactiver l'affichage de l'album Masquées dans ces mêmes réglages le retire complètement des Utilitaires, si bien que personne ne voit qu'il existe.",
        "Les photos masquées restent dans votre photothèque et dans Photos iCloud, se synchronisent avec vos autres appareils et sont visibles par quiconque connaît votre code.",
        "Un coffre séparé stocke des copies chiffrées hors de la photothèque ; dans DiskMop, la clé ne quitte jamais l'appareil et le coffre ne s'ouvre qu'avec Face ID ou le code.",
        "Le coffre de DiskMop est volontairement exclu des sauvegardes iCloud : si vous supprimez l'app, le coffre est supprimé aussi ; réenregistrez d'abord dans Photos ce que vous voulez garder.",
      ],
      dataTable: {
        caption: "Les façons de garder des photos privées sur iPhone",
        columns: [
          "Option",
          "Verrouillage",
          "Où sont les photos",
          "Dans iCloud",
        ],
        rows: [
          [
            "Album Masquées (Photos)",
            "Face ID, Touch ID ou code (iOS 16+)",
            "Dans la photothèque, hors des vues principales",
            "Oui, avec Photos iCloud",
          ],
          [
            "Note verrouillée (Notes)",
            "Mot de passe de Notes ou code de l'appareil",
            "Dans la note",
            "Oui, si la note est dans iCloud",
          ],
          [
            "Exiger Face ID pour l'app Photos (iOS 18)",
            "Face ID ou code pour ouvrir l'app",
            "Dans la photothèque, inchangée",
            "Oui, avec Photos iCloud",
          ],
          [
            "Coffre DiskMop",
            "Face ID, Touch ID ou code ; clé stockée sur cet appareil uniquement",
            "Fichiers chiffrés dans l'app",
            "Non, exclu volontairement de la sauvegarde iCloud",
          ],
        ],
      },
      howTo: {
        name: "Masquer des photos sur iPhone",
        totalTime: "PT5M",
        steps: [
          {
            name: "Masquer les photos dans l'app Photos",
            text: "Ouvrez Photos, touchez Sélectionner, choisissez les photos et vidéos, touchez le bouton Plus puis Masquer. Confirmez ; les éléments rejoignent Albums > Utilitaires > Masquées.",
          },
          {
            name: "Vérifier que l'album est verrouillé",
            text: "Ouvrez Réglages > Apps > Photos et assurez-vous que l'option Face ID (ou Touch ID, ou code) est activée. Le même écran permet aussi de ne plus afficher l'album Masquées du tout.",
          },
          {
            name: "Placer les photos les plus privées dans un coffre",
            text: "Pour les photos qui ne doivent figurer ni dans la photothèque ni dans iCloud, ouvrez DiskMop, allez dans Extras > Coffre, déverrouillez-le avec Face ID et touchez + pour les ajouter. Les originaux restent dans la photothèque tant que vous n'en décidez pas autrement.",
          },
          {
            name: "Retirer les originaux si vous le souhaitez",
            text: "Après l'ajout, DiskMop demande s'il faut retirer les photos de la photothèque. Choisissez Revoir et retirer pour les vérifier et confirmer dans iOS, ou Garder dans la photothèque. Les photos retirées attendent 30 jours dans Supprimés récemment.",
          },
          {
            name: "Enregistrer des copies avant de changer de téléphone",
            text: "Le coffre n'est pas inclus dans les sauvegardes iCloud. Avant de supprimer l'app ou de passer à un nouvel iPhone, ouvrez chaque élément à conserver et touchez Enregistrer dans Photos.",
          },
        ],
      },
      sections: [
        {
          title: "La méthode intégrée : l'album Masquées d'Apple",
          content: [
            "Tout iPhone peut masquer des photos sans app supplémentaire. Dans Photos, touchez Sélectionner, choisissez une ou plusieurs photos ou vidéos, touchez le bouton Plus et choisissez Masquer. Les éléments masqués disparaissent de la photothèque, des albums et du widget Photos, et sont regroupés dans Albums > Utilitaires > Masquées. Pour en faire revenir un, ouvrez l'album, sélectionnez l'élément et choisissez Afficher.",
            "Depuis iOS 16, l'album Masquées et Supprimés récemment sont verrouillés par défaut. Il faut Face ID, Touch ID ou votre code pour les ouvrir, et l'interrupteur correspondant se trouve dans Réglages > Apps > Photos. Le même écran détermine si l'album apparaît ou non sous Utilitaires ; désactivez son affichage et plus rien n'indique que quelque chose est masqué.",
            "Pour cacher un cadeau surprise ou le scan de votre passeport à quelqu'un qui fait défiler vos photos, c'est rapide, gratuit et suffisant. Mieux vaut toutefois savoir exactement contre quoi il protège avant de s'y fier pour quelque chose de plus sensible.",
          ],
        },
        {
          title: "Ce que l'album Masquées ne protège pas",
          content: [
            "Masquer est un réglage d'affichage, pas un lieu de stockage séparé. Les photos restent dans votre photothèque ; avec Photos iCloud activé, elles se synchronisent donc sur votre iPad, votre Mac et iCloud.com, où l'album Masquées a son propre verrou mais le même contenu. Quiconque connaît le code de votre iPhone peut aussi ouvrir l'album, car le code est toujours accepté en alternative à Face ID.",
            "Apple propose deux autres options. Notes peut verrouiller des notes individuelles avec un mot de passe ou le code de l'appareil, et les photos ajoutées à une note verrouillée sont protégées par ce verrou ; les originaux restent toutefois dans la photothèque jusqu'à ce que vous les supprimiez. Sous iOS 18, vous pouvez aussi maintenir le doigt sur l'icône d'une app et choisir Exiger Face ID ; verrouiller l'app Photos protège toute la photothèque des regards indiscrets, mais ne change rien à l'endroit où les photos sont stockées.",
            "Si vous voulez un ensemble de photos qui ne soit ni dans la photothèque, ni dans iCloud, ni sur vos autres appareils, il vous faut un autre type d'outil : un coffre qui conserve ses propres copies chiffrées à l'intérieur d'une app.",
          ],
        },
        {
          title: "Un coffre chiffré séparé dans DiskMop",
          content: [
            "DiskMop pour iPhone comprend un coffre sous Extras > Coffre. Les photos et vidéos ajoutées sont copiées dans l'app et chiffrées en AES-GCM avec une clé de 256 bits. La clé est stockée dans le trousseau de l'iPhone, protégée par Face ID, Touch ID ou le code de l'appareil, et marquée comme disponible sur cet appareil uniquement : elle ne passe ni dans les sauvegardes ni sur d'autres appareils. Même l'index du contenu est chiffré, si bien qu'un coffre verrouillé ne révèle pas combien d'éléments il contient.",
            "Le coffre se verrouille dès que l'app passe en arrière-plan ou que vous quittez l'écran du coffre, et son contenu apparaît flouté dans le sélecteur d'apps. Il n'y a pas de code PIN séparé à oublier : le code de l'appareil sert de solution de repli. Une photo stockée uniquement dans iCloud est téléchargée lors de l'ajout, et pour une photo retouchée, c'est la version retouchée qui entre dans le coffre.",
            "Ajouter une photo ne la retire pas de la photothèque. DiskMop demande ensuite si vous voulez retirer les originaux ; si oui, ils passent par la vérification habituelle et la confirmation d'iOS, puis attendent 30 jours dans Supprimés récemment. Enregistrer dans Photos remet un élément dans la photothèque avec ses données d'origine, sa date et son lieu, tandis que supprimer du coffre est définitif et irréversible.",
          ],
        },
        {
          title: "Le seul compromis à bien comprendre",
          content: [
            "Le dossier du coffre est volontairement exclu des sauvegardes iCloud. C'est ce qui garde son contenu loin des serveurs d'Apple, et cela a une conséquence que l'app énonce clairement : si vous supprimez DiskMop, tout ce que contient le coffre disparaît, et le coffre ne suit pas non plus sur un nouvel iPhone, car sa clé n'existe que sur l'appareil qui l'a créée. Il n'y a ni compte ni copie sur un serveur à restaurer.",
            "Considérez le coffre comme un espace privé, pas comme une sauvegarde. Gardez ailleurs une copie de tout ce qui est irremplaçable et, avant de changer de téléphone, ouvrez le coffre pour réenregistrer dans Photos ce que vous voulez conserver. Un code d'appareil est indispensable ; sans lui, le coffre ne peut pas être protégé et ne s'ouvre pas.",
            "Le coffre est gratuit. Retirer les originaux de la photothèque après les avoir ajoutés compte comme une suppression de photos ordinaire dans DiskMop, gratuite jusqu'à dix photos par jour et illimitée avec DiskMop Pro. Si vous masquez des photos parce que la photothèque est devenue ingérable, [trier ses photos iPhone en balayant](/blog/swipe-to-delete-photos-iphone) peut régler le vrai problème.",
          ],
        },
      ],
      faq: [
        {
          question: "Où vont les photos masquées sur iPhone ?",
          answer:
            "Elles rejoignent Albums > Utilitaires > Masquées dans l'app Photos. Elles n'apparaissent plus dans la photothèque, les albums ou le widget Photos, mais font toujours partie de votre photothèque.",
        },
        {
          question: "Les photos masquées sont-elles toujours dans iCloud ?",
          answer:
            "Oui. Avec Photos iCloud activé, les photos masquées se synchronisent avec iCloud et vos autres appareils comme toutes les autres ; seule leur présentation change.",
        },
        {
          question:
            "Quelqu'un peut-il ouvrir mon album Masquées sans Face ID ?",
          answer:
            "Toute personne qui connaît le code de votre iPhone, car le code est toujours accepté en alternative. Il en va de même pour toute app qui se déverrouille avec Face ID, y compris le coffre de DiskMop.",
        },
        {
          question: "Qu'arrive-t-il au coffre DiskMop si je supprime l'app ?",
          answer:
            "Son contenu est supprimé avec l'app. Le coffre est volontairement exclu des sauvegardes iCloud ; réenregistrez donc dans Photos ce que vous voulez garder avant de supprimer l'app ou de changer de téléphone.",
        },
        {
          question: "Ajouter une photo au coffre la supprime-t-il de Photos ?",
          answer:
            "Non. L'original reste dans votre photothèque jusqu'à ce que vous choisissiez de le retirer. Dans ce cas, vous vérifiez d'abord les photos, iOS demande une confirmation et elles attendent 30 jours dans Supprimés récemment.",
        },
      ],
      verdict: [
        "Pour la confidentialité au quotidien, l'album Masquées est le bon outil : intégré, gratuit, verrouillé par Face ID depuis iOS 16 et pouvant être rendu invisible. Rappelez-vous simplement que c'est un affichage, pas un lieu séparé, et qu'il voyage avec votre photothèque via iCloud.",
        "Quand des photos ne doivent figurer ni dans la photothèque ni dans iCloud, un coffre convient mieux. DiskMop pour iPhone les garde chiffrées sur l'appareil avec une clé qui ne le quitte jamais, se verrouille automatiquement et laisse votre photothèque intacte, sauf si vous en décidez autrement. Enregistrez des copies avant de supprimer l'app, car le coffre n'est volontairement pas sauvegardé.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo ocultar fotos en iPhone: álbum Oculto o caja fuerte cifrada y bloqueada",
      metaDescription:
        "El álbum Oculto esconde las fotos y se bloquea con Face ID, pero siguen sincronizándose con iCloud. Cuándo conviene más una caja fuerte cifrada aparte.",
      subtitle:
        "Lo que protege el álbum Oculto de Apple, lo que no, y el precio de una caja fuerte privada en el teléfono",
      intro: [
        "Respuesta corta: selecciona las fotos en la app Fotos, toca el botón Más y elige Ocultar. Desaparecen de la fototeca y de los álbumes y pasan al álbum Oculto, que en iOS 16 y posteriores solo se abre con Face ID, Touch ID o tu código. Para la mayoría basta. Pero el álbum Oculto sigue formando parte de tu fototeca: se sincroniza a través de Fotos en iCloud con todos los dispositivos que usan tu cuenta de Apple y se abre para cualquiera que sepa el código del iPhone.",
        "Esta guía explica cómo usar bien el álbum Oculto, de qué protege y de qué no, las otras opciones de Apple, como las notas y las apps bloqueadas, y cuándo una caja fuerte cifrada aparte, como la de DiskMop para iPhone, es la mejor opción, incluido el único inconveniente que debes entender antes de usarla.",
      ],
      keyTakeaways: [
        "Para ocultar una foto, selecciónala en Fotos, toca Más (los tres puntos) y elige Ocultar; pasa a Álbumes > Utilidades > Oculto.",
        "En iOS 16 y posteriores, el álbum Oculto está bloqueado por defecto con Face ID, Touch ID o el código; el ajuste está en Ajustes > Apps > Fotos.",
        "Desactivar Mostrar álbum Oculto en esos mismos ajustes lo quita por completo de Utilidades, así que nadie ve que existe.",
        "Las fotos ocultas siguen en tu fototeca y en Fotos en iCloud, se sincronizan con tus otros dispositivos y las puede ver cualquiera que sepa tu código.",
        "Una caja fuerte aparte guarda copias cifradas fuera de la fototeca; en DiskMop la clave nunca sale del dispositivo y la caja solo se abre con Face ID o el código.",
        "La caja fuerte de DiskMop está excluida a propósito de las copias de iCloud: si borras la app, la caja también se borra, así que guarda antes en Fotos lo que quieras conservar.",
      ],
      dataTable: {
        caption: "Formas de mantener fotos en privado en un iPhone",
        columns: [
          "Opción",
          "Cómo se bloquea",
          "Dónde están las fotos",
          "En iCloud",
        ],
        rows: [
          [
            "Álbum Oculto (Fotos)",
            "Face ID, Touch ID o código (iOS 16+)",
            "En la fototeca, fuera de las vistas principales",
            "Sí, con Fotos en iCloud",
          ],
          [
            "Nota bloqueada (Notas)",
            "Contraseña de Notas o código del dispositivo",
            "Dentro de la nota",
            "Sí, si la nota está en iCloud",
          ],
          [
            "Requerir Face ID en la app Fotos (iOS 18)",
            "Face ID o código para abrir la app",
            "En la fototeca, sin cambios",
            "Sí, con Fotos en iCloud",
          ],
          [
            "Caja fuerte de DiskMop",
            "Face ID, Touch ID o código; clave solo en este dispositivo",
            "Archivos cifrados dentro de la app",
            "No, excluida a propósito de la copia de iCloud",
          ],
        ],
      },
      howTo: {
        name: "Ocultar fotos en iPhone",
        totalTime: "PT5M",
        steps: [
          {
            name: "Oculta las fotos en la app Fotos",
            text: "Abre Fotos, toca Seleccionar, elige las fotos y vídeos, toca el botón Más y luego Ocultar. Confirma y pasarán a Álbumes > Utilidades > Oculto.",
          },
          {
            name: "Comprueba que el álbum está bloqueado",
            text: "Abre Ajustes > Apps > Fotos y asegúrate de que Usar Face ID (o Touch ID, o el código) está activado. En la misma pantalla está Mostrar álbum Oculto, por si quieres que el álbum desaparezca del todo.",
          },
          {
            name: "Pasa las fotos más privadas a una caja fuerte",
            text: "Para las fotos que no deben estar ni en la fototeca ni en iCloud, abre DiskMop, ve a Extras > Caja fuerte, desbloquéala con Face ID y toca + para añadirlas. Los originales se quedan en la fototeca hasta que decidas lo contrario.",
          },
          {
            name: "Quita los originales si quieres",
            text: "Tras añadirlas, DiskMop pregunta si quieres quitar las fotos de la fototeca. Elige Revisar y quitar para comprobarlas y confirmar en iOS, o Dejar en la fototeca. Las fotos quitadas esperan 30 días en Eliminados recientemente.",
          },
          {
            name: "Guarda copias antes de cambiar de teléfono",
            text: "La caja fuerte no entra en las copias de iCloud. Antes de borrar la app o pasarte a un iPhone nuevo, abre cada elemento que quieras conservar y toca Guardar en Fotos.",
          },
        ],
      },
      sections: [
        {
          title: "La forma integrada: el álbum Oculto de Apple",
          content: [
            "Cualquier iPhone puede ocultar fotos sin apps adicionales. En Fotos, toca Seleccionar, elige una o varias fotos o vídeos, toca el botón Más y elige Ocultar. Los elementos ocultos desaparecen de la fototeca, de los álbumes y del widget de Fotos, y se reúnen en Álbumes > Utilidades > Oculto. Para recuperar uno, abre el álbum Oculto, selecciónalo y elige Mostrar.",
            "Desde iOS 16, el álbum Oculto y Eliminados recientemente están bloqueados por defecto. Para abrirlos hace falta Face ID, Touch ID o tu código, y el interruptor está en Ajustes > Apps > Fotos. En esa misma pantalla, Mostrar álbum Oculto decide si el álbum aparece siquiera en Utilidades; si lo desactivas, no queda ninguna señal visible de que haya algo oculto.",
            "Para esconder un regalo sorpresa o el escaneo de tu pasaporte de alguien que pasa tus fotos, es rápido, gratuito y suficiente. Aun así, conviene saber exactamente de qué protege antes de confiarle algo más delicado.",
          ],
        },
        {
          title: "Lo que el álbum Oculto no protege",
          content: [
            "Ocultar es un ajuste de visualización, no un lugar de almacenamiento aparte. Las fotos siguen en tu fototeca, así que con Fotos en iCloud activado se sincronizan con tu iPad, tu Mac e iCloud.com, donde el álbum Oculto tiene su propio bloqueo pero el mismo contenido. Cualquiera que sepa el código de tu iPhone también puede abrirlo, porque el código siempre se acepta como alternativa a Face ID.",
            "Apple ofrece dos opciones más. Notas puede bloquear notas concretas con una contraseña o con el código del dispositivo, y las fotos añadidas a una nota bloqueada quedan protegidas por ese bloqueo; eso sí, los originales siguen en la fototeca hasta que los borres. En iOS 18 también puedes mantener pulsado el icono de una app y elegir Requerir Face ID; bloquear la app Fotos protege toda la fototeca de miradas casuales, pero no cambia nada sobre dónde se guardan las fotos.",
            "Si lo que quieres es un grupo de fotos que no esté ni en la fototeca, ni en iCloud, ni en tus otros dispositivos, necesitas otro tipo de herramienta: una caja fuerte que guarde sus propias copias cifradas dentro de una app.",
          ],
        },
        {
          title: "Una caja fuerte cifrada aparte en DiskMop",
          content: [
            "DiskMop para iPhone incluye una caja fuerte en Extras > Caja fuerte. Las fotos y vídeos que añades se copian dentro de la app y se cifran con AES-GCM usando una clave de 256 bits. La clave se guarda en el llavero del iPhone, protegida con Face ID, Touch ID o el código del dispositivo, y marcada como disponible solo en este dispositivo, así que no pasa a las copias de seguridad ni a otros dispositivos. Incluso el índice de lo que contiene la caja está cifrado, de modo que una caja bloqueada ni siquiera revela cuántos elementos guarda.",
            "La caja fuerte se bloquea en cuanto la app pasa a segundo plano o sales de su pantalla, y su contenido aparece borroso en el selector de apps. No hay un PIN aparte que olvidar: el código del dispositivo es la alternativa. Una foto guardada solo en iCloud se descarga al añadirla y, si editaste una foto, lo que entra en la caja es la versión editada.",
            "Añadir una foto no la quita de la fototeca. DiskMop pregunta después si quieres quitar los originales; si dices que sí, pasan por la revisión habitual y la confirmación de iOS, y esperan 30 días en Eliminados recientemente. Guardar en Fotos devuelve un elemento a la fototeca con sus datos originales, fecha y ubicación, mientras que borrar de la caja fuerte es definitivo y no se puede deshacer.",
          ],
        },
        {
          title: "El único inconveniente que debes entender",
          content: [
            "La carpeta de la caja fuerte está excluida a propósito de las copias de iCloud. Eso es lo que mantiene su contenido lejos de los servidores de Apple, y tiene una consecuencia que la app explica con claridad: si borras DiskMop, todo lo que hay en la caja desaparece, y la caja tampoco pasa a un iPhone nuevo, porque su clave solo existe en el dispositivo que la creó. No hay cuenta ni copia en un servidor desde la que restaurar.",
            "Trata la caja fuerte como almacenamiento privado, no como copia de seguridad. Guarda en otro sitio una copia de todo lo que sea insustituible y, antes de cambiar de teléfono, abre la caja y devuelve a Fotos lo que quieras conservar. Hace falta un código en el dispositivo; sin él, la caja no puede protegerse y no se abre.",
            "Usar la caja fuerte es gratis. Quitar los originales de la fototeca después de añadirlos cuenta como un borrado normal de fotos en DiskMop, gratuito hasta diez fotos al día e ilimitado con DiskMop Pro. Si ocultas fotos porque la fototeca se te ha ido de las manos, [limpiar las fotos del iPhone deslizando](/blog/swipe-to-delete-photos-iphone) puede resolver el problema de fondo.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Adónde van las fotos ocultas en iPhone?",
          answer:
            "Pasan a Álbumes > Utilidades > Oculto en la app Fotos. Ya no se muestran en la fototeca, los álbumes ni el widget de Fotos, pero siguen formando parte de tu fototeca.",
        },
        {
          question: "¿Las fotos ocultas siguen en iCloud?",
          answer:
            "Sí. Con Fotos en iCloud activado, las fotos ocultas se sincronizan con iCloud y con tus otros dispositivos como cualquier otra foto; solo cambia la forma de mostrarlas.",
        },
        {
          question: "¿Alguien puede abrir mi álbum Oculto sin Face ID?",
          answer:
            "Cualquiera que sepa el código de tu iPhone, porque el código siempre se acepta como alternativa. Lo mismo ocurre con cualquier app que se desbloquea con Face ID, incluida la caja fuerte de DiskMop.",
        },
        {
          question: "¿Qué pasa con la caja fuerte de DiskMop si borro la app?",
          answer:
            "Su contenido se borra con la app. La caja fuerte está excluida a propósito de las copias de iCloud, así que guarda en Fotos lo que quieras conservar antes de borrar la app o cambiar de teléfono.",
        },
        {
          question: "¿Añadir una foto a la caja fuerte la borra de Fotos?",
          answer:
            "No. El original se queda en tu fototeca hasta que decidas quitarlo. Si lo haces, primero revisas las fotos, iOS pide confirmación y esperan 30 días en Eliminados recientemente.",
        },
      ],
      verdict: [
        "Para la privacidad del día a día, el álbum Oculto es la herramienta adecuada: viene integrado, es gratis, se bloquea con Face ID desde iOS 16 y puede hacerse invisible con Mostrar álbum Oculto. Solo recuerda que es una vista, no un lugar aparte, y que viaja con tu fototeca a través de iCloud.",
        "Cuando las fotos no deben estar ni en la fototeca ni en iCloud, encaja mejor una caja fuerte. DiskMop para iPhone las guarda cifradas en el dispositivo con una clave que nunca sale de él, se bloquea sola y no toca tu fototeca salvo que tú lo decidas. Guarda copias antes de borrar la app, porque la caja fuerte no se incluye en las copias de seguridad a propósito.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come nascondere le foto su iPhone: album Nascosti o cassaforte cifrata?",
      metaDescription:
        "L'album Nascosti toglie le foto dalla libreria e si blocca con Face ID, ma restano sincronizzate con iCloud. Quando è meglio una cassaforte cifrata separata.",
      subtitle:
        "Cosa protegge l'album Nascosti di Apple, cosa no, e il prezzo di una cassaforte privata sul telefono",
      intro: [
        "Risposta breve: seleziona le foto nell'app Foto, tocca il pulsante Altro e scegli Nascondi. Spariscono dalla libreria e dagli album e finiscono nell'album Nascosti, che su iOS 16 e versioni successive si apre solo con Face ID, Touch ID o il codice. Per la maggior parte delle persone basta. L'album Nascosti resta però parte della tua libreria foto: si sincronizza tramite Foto di iCloud con ogni dispositivo collegato al tuo account Apple e si apre per chiunque conosca il codice dell'iPhone.",
        "Questa guida spiega come usare bene l'album Nascosti, da cosa protegge e da cosa no, le altre opzioni di Apple come le note e le app bloccate, e quando una cassaforte cifrata separata, come quella di DiskMop per iPhone, è la scelta migliore, compreso l'unico compromesso da capire prima di usarla.",
      ],
      keyTakeaways: [
        "Per nascondere una foto selezionala in Foto, tocca Altro (i tre puntini) e scegli Nascondi; finisce in Album > Utility > Nascosti.",
        "Su iOS 16 e versioni successive l'album Nascosti è bloccato per impostazione predefinita con Face ID, Touch ID o il codice; l'opzione si trova in Impostazioni > App > Foto.",
        "Disattivare Mostra album Nascosti nelle stesse impostazioni toglie del tutto l'album da Utility, così nessuno vede che esiste.",
        "Le foto nascoste restano nella libreria e in Foto di iCloud, si sincronizzano con gli altri dispositivi e sono visibili a chiunque conosca il codice.",
        "Una cassaforte separata conserva copie cifrate fuori dalla libreria foto; in DiskMop la chiave non lascia mai il dispositivo e la cassaforte si apre solo con Face ID o il codice.",
        "La cassaforte di DiskMop è esclusa di proposito dai backup di iCloud: se elimini l'app, viene eliminata anche la cassaforte, quindi salva prima in Foto ciò che vuoi tenere.",
      ],
      dataTable: {
        caption: "I modi per tenere private le foto su iPhone",
        columns: [
          "Opzione",
          "Come si blocca",
          "Dove stanno le foto",
          "Su iCloud",
        ],
        rows: [
          [
            "Album Nascosti (Foto)",
            "Face ID, Touch ID o codice (iOS 16+)",
            "Nella libreria foto, fuori dalle viste principali",
            "Sì, con Foto di iCloud",
          ],
          [
            "Nota bloccata (Note)",
            "Password di Note o codice del dispositivo",
            "Dentro la nota",
            "Sì, se la nota è su iCloud",
          ],
          [
            "Richiedi Face ID per l'app Foto (iOS 18)",
            "Face ID o codice per aprire l'app",
            "Nella libreria foto, invariata",
            "Sì, con Foto di iCloud",
          ],
          [
            "Cassaforte di DiskMop",
            "Face ID, Touch ID o codice; chiave solo su questo dispositivo",
            "File cifrati dentro l'app",
            "No, esclusa di proposito dal backup di iCloud",
          ],
        ],
      },
      howTo: {
        name: "Nascondere le foto su iPhone",
        totalTime: "PT5M",
        steps: [
          {
            name: "Nascondi le foto nell'app Foto",
            text: "Apri Foto, tocca Seleziona, scegli foto e video, tocca il pulsante Altro e poi Nascondi. Conferma e gli elementi finiranno in Album > Utility > Nascosti.",
          },
          {
            name: "Verifica che l'album sia bloccato",
            text: "Apri Impostazioni > App > Foto e assicurati che Usa Face ID (o Touch ID, o il codice) sia attivo. Nella stessa schermata c'è Mostra album Nascosti, se vuoi che l'album sparisca del tutto.",
          },
          {
            name: "Sposta le foto più private in una cassaforte",
            text: "Per le foto che non devono stare né nella libreria né su iCloud, apri DiskMop, vai in Extra > Cassaforte, sbloccala con Face ID e tocca + per aggiungerle. Gli originali restano nella libreria finché non decidi diversamente.",
          },
          {
            name: "Rimuovi gli originali se vuoi",
            text: "Dopo l'aggiunta, DiskMop chiede se rimuovere le foto dalla libreria. Scegli Rivedi e rimuovi per controllarle e confermare in iOS, oppure Tieni nella libreria. Le foto rimosse restano 30 giorni in Eliminati di recente.",
          },
          {
            name: "Salva le copie prima di cambiare telefono",
            text: "La cassaforte non è inclusa nei backup di iCloud. Prima di eliminare l'app o passare a un nuovo iPhone, apri ogni elemento da tenere e tocca Salva in Foto.",
          },
        ],
      },
      sections: [
        {
          title: "Il metodo integrato: l'album Nascosti di Apple",
          content: [
            "Ogni iPhone può nascondere le foto senza app aggiuntive. In Foto tocca Seleziona, scegli una o più foto o video, tocca il pulsante Altro e scegli Nascondi. Gli elementi nascosti spariscono dalla libreria, dagli album e dal widget Foto e vengono raccolti in Album > Utility > Nascosti. Per farne tornare uno, apri l'album Nascosti, selezionalo e scegli Mostra.",
            "Da iOS 16 l'album Nascosti ed Eliminati di recente sono bloccati per impostazione predefinita. Per aprirli servono Face ID, Touch ID o il codice, e l'interruttore si trova in Impostazioni > App > Foto. Nella stessa schermata, Mostra album Nascosti decide se l'album compare o meno in Utility; se lo disattivi, non resta alcun segno visibile che ci sia qualcosa di nascosto.",
            "Per tenere un regalo a sorpresa o la scansione del passaporto lontani da chi scorre le tue foto, è rapido, gratuito e sufficiente. Prima di affidargli qualcosa di più delicato, però, conviene sapere esattamente da cosa protegge.",
          ],
        },
        {
          title: "Cosa non protegge l'album Nascosti",
          content: [
            "Nascondere è un'impostazione di visualizzazione, non un luogo di archiviazione separato. Le foto restano nella libreria, quindi con Foto di iCloud attivo si sincronizzano su iPad, Mac e iCloud.com, dove l'album Nascosti ha un proprio blocco ma lo stesso contenuto. Chiunque conosca il codice del tuo iPhone può anche aprire l'album, perché il codice è sempre accettato come alternativa a Face ID.",
            "Apple offre altre due opzioni. Note può bloccare singole note con una password o con il codice del dispositivo, e le foto aggiunte a una nota bloccata sono protette da quel blocco; gli originali però restano nella libreria finché non li elimini. Su iOS 18 puoi anche tenere premuta l'icona di un'app e scegliere Richiedi Face ID; bloccare l'app Foto protegge l'intera libreria dagli sguardi casuali, ma non cambia nulla su dove sono archiviate le foto.",
            "Se vuoi un gruppo di foto che non stia né nella libreria, né su iCloud, né sugli altri dispositivi, ti serve un altro tipo di strumento: una cassaforte che conservi le proprie copie cifrate all'interno di un'app.",
          ],
        },
        {
          title: "Una cassaforte cifrata separata in DiskMop",
          content: [
            "DiskMop per iPhone include una cassaforte in Extra > Cassaforte. Le foto e i video aggiunti vengono copiati nell'app e cifrati con AES-GCM usando una chiave a 256 bit. La chiave è conservata nel portachiavi dell'iPhone, protetta da Face ID, Touch ID o dal codice del dispositivo, e contrassegnata come disponibile solo su questo dispositivo, quindi non passa nei backup né su altri dispositivi. Persino l'indice del contenuto è cifrato, così una cassaforte bloccata non rivela nemmeno quanti elementi contiene.",
            "La cassaforte si blocca non appena l'app passa in background o esci dalla sua schermata, e nel selettore delle app il contenuto appare sfocato. Non c'è un PIN separato da dimenticare: il codice del dispositivo fa da alternativa. Una foto conservata solo su iCloud viene scaricata quando la aggiungi e, se hai modificato una foto, nella cassaforte entra la versione modificata.",
            "Aggiungere una foto non la toglie dalla libreria. DiskMop chiede poi se vuoi rimuovere gli originali; se sì, passano dalla consueta revisione e dalla conferma di iOS e restano 30 giorni in Eliminati di recente. Salva in Foto rimette un elemento nella libreria con i dati originali, la data e il luogo, mentre l'eliminazione dalla cassaforte è definitiva e non si può annullare.",
          ],
        },
        {
          title: "L'unico compromesso da capire",
          content: [
            "La cartella della cassaforte è esclusa di proposito dai backup di iCloud. È ciò che tiene il contenuto lontano dai server di Apple, e ha una conseguenza che l'app dichiara apertamente: se elimini DiskMop, tutto ciò che è nella cassaforte sparisce, e la cassaforte non passa nemmeno a un nuovo iPhone, perché la sua chiave esiste solo sul dispositivo che l'ha creata. Non ci sono account né copie su server da cui ripristinare.",
            "Considera la cassaforte uno spazio privato, non un backup. Tieni altrove una copia di tutto ciò che è insostituibile e, prima di cambiare telefono, apri la cassaforte e salva in Foto ciò che vuoi conservare. Serve un codice sul dispositivo; senza, la cassaforte non può essere protetta e non si apre.",
            "La cassaforte è gratuita. Rimuovere gli originali dalla libreria dopo averli aggiunti conta in DiskMop come una normale eliminazione di foto, gratuita fino a dieci foto al giorno e illimitata con DiskMop Pro. Se nascondi le foto perché la libreria è sfuggita di mano, [pulire le foto dell'iPhone scorrendo](/blog/swipe-to-delete-photos-iphone) può risolvere il problema più grande.",
          ],
        },
      ],
      faq: [
        {
          question: "Dove finiscono le foto nascoste su iPhone?",
          answer:
            "Finiscono in Album > Utility > Nascosti nell'app Foto. Non compaiono più nella libreria, negli album o nel widget Foto, ma restano parte della libreria foto.",
        },
        {
          question: "Le foto nascoste sono ancora su iCloud?",
          answer:
            "Sì. Con Foto di iCloud attivo, le foto nascoste si sincronizzano con iCloud e con gli altri dispositivi come tutte le altre; cambia solo il modo in cui vengono mostrate.",
        },
        {
          question: "Qualcuno può aprire il mio album Nascosti senza Face ID?",
          answer:
            "Chiunque conosca il codice del tuo iPhone, perché il codice è sempre accettato come alternativa. Lo stesso vale per qualsiasi app che si sblocca con Face ID, compresa la cassaforte di DiskMop.",
        },
        {
          question: "Cosa succede alla cassaforte di DiskMop se elimino l'app?",
          answer:
            "Il suo contenuto viene eliminato insieme all'app. La cassaforte è esclusa di proposito dai backup di iCloud, quindi salva in Foto ciò che vuoi tenere prima di eliminare l'app o cambiare telefono.",
        },
        {
          question: "Aggiungere una foto alla cassaforte la elimina da Foto?",
          answer:
            "No. L'originale resta nella libreria finché non scegli di rimuoverlo. In quel caso prima controlli le foto, iOS chiede conferma e restano 30 giorni in Eliminati di recente.",
        },
      ],
      verdict: [
        "Per la privacy di tutti i giorni l'album Nascosti è lo strumento giusto: integrato, gratuito, bloccato con Face ID da iOS 16 e rendibile invisibile con Mostra album Nascosti. Ricorda solo che è una vista, non un luogo separato, e che viaggia con la libreria tramite iCloud.",
        "Quando le foto non devono stare né nella libreria né su iCloud, una cassaforte è più adatta. DiskMop per iPhone le conserva cifrate sul dispositivo con una chiave che non lo lascia mai, si blocca da sola e lascia intatta la libreria se non scegli diversamente. Salva le copie prima di eliminare l'app, perché la cassaforte di proposito non viene inclusa nei backup.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como ocultar fotos no iPhone: álbum Ocultos ou cofre criptografado e bloqueado?",
      metaDescription:
        "O álbum Ocultos esconde as fotos e bloqueia com Face ID, mas elas continuam sincronizando com o iCloud. Quando um cofre criptografado separado é melhor.",
      subtitle:
        "O que o álbum Ocultos da Apple protege, o que não protege e o preço de um cofre privado no telefone",
      intro: [
        "Resposta curta: selecione as fotos no app Fotos, toque no botão Mais e escolha Ocultar. Elas somem da fototeca e dos álbuns e vão para o álbum Ocultos, que no iOS 16 ou posterior só abre com Face ID, Touch ID ou o seu código. Para a maioria das pessoas, isso basta. Mas o álbum Ocultos continua fazendo parte da sua fototeca: ele sincroniza pelo Fotos do iCloud com todos os aparelhos conectados à sua Conta Apple e abre para qualquer pessoa que saiba o código do iPhone.",
        "Este guia explica como usar bem o álbum Ocultos, do que ele protege e do que não protege, as outras opções da Apple, como notas e apps bloqueados, e quando um cofre criptografado separado, como o do DiskMop para iPhone, é a melhor escolha, incluindo a única contrapartida que você precisa entender antes de usá-lo.",
      ],
      keyTakeaways: [
        "Para ocultar uma foto, selecione-a no Fotos, toque em Mais (os três pontos) e escolha Ocultar; ela vai para Álbuns > Utilitários > Ocultos.",
        "No iOS 16 ou posterior, o álbum Ocultos fica bloqueado por padrão com Face ID, Touch ID ou o código; o ajuste está em Ajustes > Apps > Fotos.",
        "Desativar Mostrar Álbum Ocultos nesses mesmos ajustes tira o álbum de Utilitários por completo, e ninguém vê que ele existe.",
        "As fotos ocultas continuam na sua fototeca e no Fotos do iCloud, sincronizam com seus outros aparelhos e podem ser vistas por qualquer pessoa que saiba o seu código.",
        "Um cofre separado guarda cópias criptografadas fora da fototeca; no DiskMop, a chave nunca sai do aparelho e o cofre só abre com Face ID ou o código.",
        "O cofre do DiskMop fica fora dos backups do iCloud de propósito: se você apagar o app, o cofre também é apagado, então salve antes no Fotos o que quiser manter.",
      ],
      dataTable: {
        caption: "Formas de manter fotos privadas no iPhone",
        columns: [
          "Opção",
          "Como é bloqueada",
          "Onde ficam as fotos",
          "No iCloud",
        ],
        rows: [
          [
            "Álbum Ocultos (Fotos)",
            "Face ID, Touch ID ou código (iOS 16+)",
            "Na fototeca, fora das visualizações principais",
            "Sim, com o Fotos do iCloud",
          ],
          [
            "Nota bloqueada (Notas)",
            "Senha do Notas ou código do aparelho",
            "Dentro da nota",
            "Sim, se a nota estiver no iCloud",
          ],
          [
            "Exigir Face ID no app Fotos (iOS 18)",
            "Face ID ou código para abrir o app",
            "Na fototeca, sem mudanças",
            "Sim, com o Fotos do iCloud",
          ],
          [
            "Cofre do DiskMop",
            "Face ID, Touch ID ou código; chave só neste aparelho",
            "Arquivos criptografados dentro do app",
            "Não, fora do backup do iCloud de propósito",
          ],
        ],
      },
      howTo: {
        name: "Ocultar fotos no iPhone",
        totalTime: "PT5M",
        steps: [
          {
            name: "Oculte as fotos no app Fotos",
            text: "Abra o Fotos, toque em Selecionar, escolha as fotos e os vídeos, toque no botão Mais e depois em Ocultar. Confirme, e os itens vão para Álbuns > Utilitários > Ocultos.",
          },
          {
            name: "Confira se o álbum está bloqueado",
            text: "Abra Ajustes > Apps > Fotos e verifique se Usar Face ID (ou Touch ID, ou o código) está ativado. Na mesma tela fica Mostrar Álbum Ocultos, caso queira que o álbum suma de vez.",
          },
          {
            name: "Leve as fotos mais privadas para um cofre",
            text: "Para fotos que não devem ficar nem na fototeca nem no iCloud, abra o DiskMop, vá em Extras > Cofre, desbloqueie com Face ID e toque em + para adicioná-las. Os originais ficam na fototeca até você decidir o contrário.",
          },
          {
            name: "Remova os originais, se quiser",
            text: "Depois de adicionar, o DiskMop pergunta se as fotos devem sair da fototeca. Escolha Rever e remover para conferir e confirmar no iOS, ou Manter na fototeca. As fotos removidas esperam 30 dias em Apagados Recentemente.",
          },
          {
            name: "Salve cópias antes de trocar de telefone",
            text: "O cofre não entra nos backups do iCloud. Antes de apagar o app ou passar para um iPhone novo, abra cada item que quiser manter e toque em Guardar em Fotos.",
          },
        ],
      },
      sections: [
        {
          title: "O jeito nativo: o álbum Ocultos da Apple",
          content: [
            "Todo iPhone pode ocultar fotos sem nenhum app extra. No Fotos, toque em Selecionar, escolha uma ou mais fotos ou vídeos, toque no botão Mais e escolha Ocultar. Os itens ocultos somem da fototeca, dos álbuns e do widget do Fotos e são reunidos em Álbuns > Utilitários > Ocultos. Para trazer um de volta, abra o álbum Ocultos, selecione o item e escolha Mostrar.",
            "Desde o iOS 16, o álbum Ocultos e Apagados Recentemente ficam bloqueados por padrão. Para abri-los é preciso Face ID, Touch ID ou o seu código, e a chave para isso fica em Ajustes > Apps > Fotos. Na mesma tela, Mostrar Álbum Ocultos define se o álbum aparece ou não em Utilitários; desative e não sobra nenhum sinal visível de que há algo oculto.",
            "Para esconder um presente surpresa ou a digitalização do seu passaporte de alguém que esteja rolando suas fotos, é rápido, grátis e suficiente. Ainda assim, vale saber exatamente do que ele protege antes de confiar algo mais sensível a ele.",
          ],
        },
        {
          title: "O que o álbum Ocultos não protege",
          content: [
            "Ocultar é um ajuste de exibição, não um lugar de armazenamento separado. As fotos continuam na sua fototeca, então, com o Fotos do iCloud ativado, elas sincronizam com seu iPad, seu Mac e o iCloud.com, onde o álbum Ocultos tem seu próprio bloqueio, mas o mesmo conteúdo. Qualquer pessoa que saiba o código do seu iPhone também pode abrir o álbum, porque o código é sempre aceito como alternativa ao Face ID.",
            "A Apple oferece mais duas opções. O Notas pode bloquear notas individuais com uma senha ou com o código do aparelho, e as fotos adicionadas a uma nota bloqueada ficam protegidas por esse bloqueio; mas os originais continuam na fototeca até você apagá-los. No iOS 18 você também pode tocar e segurar o ícone de um app e escolher Exigir Face ID; bloquear o app Fotos protege a fototeca inteira de olhares curiosos, mas não muda nada sobre onde as fotos ficam guardadas.",
            "Se o que você quer é um conjunto de fotos que não esteja na fototeca, nem no iCloud, nem nos seus outros aparelhos, precisa de outro tipo de ferramenta: um cofre que guarde as próprias cópias criptografadas dentro de um app.",
          ],
        },
        {
          title: "Um cofre criptografado separado no DiskMop",
          content: [
            "O DiskMop para iPhone inclui um cofre em Extras > Cofre. As fotos e os vídeos adicionados são copiados para dentro do app e criptografados com AES-GCM usando uma chave de 256 bits. A chave fica nas Chaves do iPhone, protegida por Face ID, Touch ID ou pelo código do aparelho, e marcada como disponível só neste aparelho, então ela não vai para backups nem para outros aparelhos. Até o índice do que há no cofre é criptografado, de modo que um cofre bloqueado nem revela quantos itens guarda.",
            "O cofre se bloqueia assim que o app vai para segundo plano ou você sai da tela do cofre, e o conteúdo aparece desfocado no alternador de apps. Não há um PIN separado para esquecer: o código do aparelho é a alternativa. Uma foto guardada só no iCloud é baixada quando você a adiciona e, se você editou uma foto, é a versão editada que vai para o cofre.",
            "Adicionar uma foto não a tira da fototeca. Depois, o DiskMop pergunta se você quer remover os originais; se quiser, eles passam pela revisão de sempre e pela confirmação do iOS e esperam 30 dias em Apagados Recentemente. Guardar em Fotos devolve um item à fototeca com os dados originais, a data e o local, enquanto apagar do cofre é definitivo e não pode ser desfeito.",
          ],
        },
        {
          title: "A única contrapartida que você precisa entender",
          content: [
            "A pasta do cofre fica fora dos backups do iCloud de propósito. É isso que mantém o conteúdo longe dos servidores da Apple, e há uma consequência que o app diz abertamente: se você apagar o DiskMop, tudo o que está no cofre se perde, e o cofre também não passa para um iPhone novo, porque a chave só existe no aparelho que a criou. Não há conta nem cópia em servidor para restaurar.",
            "Trate o cofre como armazenamento privado, não como backup. Mantenha em outro lugar uma cópia de tudo o que for insubstituível e, antes de trocar de telefone, abra o cofre e devolva ao Fotos o que quiser manter. É preciso ter um código no aparelho; sem ele, o cofre não pode ser protegido e não abre.",
            "Usar o cofre é grátis. Remover os originais da fototeca depois de adicioná-los conta como uma exclusão de fotos comum no DiskMop, grátis para até diez fotos por dia e ilimitada com o DiskMop Pro. Se você está ocultando fotos porque a fototeca saiu do controle, [limpar as fotos do iPhone deslizando](/blog/swipe-to-delete-photos-iphone) pode resolver o problema maior.",
          ],
        },
      ],
      faq: [
        {
          question: "Para onde vão as fotos ocultas no iPhone?",
          answer:
            "Elas vão para Álbuns > Utilitários > Ocultos no app Fotos. Deixam de aparecer na fototeca, nos álbuns e no widget do Fotos, mas continuam fazendo parte da sua fototeca.",
        },
        {
          question: "As fotos ocultas continuam no iCloud?",
          answer:
            "Sim. Com o Fotos do iCloud ativado, as fotos ocultas sincronizam com o iCloud e com seus outros aparelhos como qualquer outra foto; só muda a forma como são exibidas.",
        },
        {
          question: "Alguém pode abrir meu álbum Ocultos sem Face ID?",
          answer:
            "Qualquer pessoa que saiba o código do seu iPhone, porque o código é sempre aceito como alternativa. O mesmo vale para qualquer app que desbloqueia com Face ID, inclusive o cofre do DiskMop.",
        },
        {
          question: "O que acontece com o cofre do DiskMop se eu apagar o app?",
          answer:
            "O conteúdo é apagado junto com o app. O cofre fica fora dos backups do iCloud de propósito, então guarde no Fotos o que quiser manter antes de apagar o app ou trocar de telefone.",
        },
        {
          question: "Adicionar uma foto ao cofre apaga a foto do Fotos?",
          answer:
            "Não. O original fica na sua fototeca até você escolher removê-lo. Se fizer isso, você revisa as fotos primeiro, o iOS pede confirmação e elas esperam 30 dias em Apagados Recentemente.",
        },
      ],
      verdict: [
        "Para a privacidade do dia a dia, o álbum Ocultos é a ferramenta certa: é nativo, grátis, bloqueado com Face ID desde o iOS 16 e pode ficar invisível com Mostrar Álbum Ocultos. Só lembre que ele é uma forma de exibição, não um lugar separado, e que viaja com a sua fototeca pelo iCloud.",
        "Quando as fotos não devem estar nem na fototeca nem no iCloud, um cofre é a melhor opção. O DiskMop para iPhone as mantém criptografadas no aparelho com uma chave que nunca sai dele, bloqueia sozinho e não mexe na sua fototeca a menos que você escolha. Salve cópias antes de apagar o app, porque o cofre não entra nos backups de propósito.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone で写真を隠す方法：「非表示」アルバムか、暗号化された保管庫か",
      metaDescription:
        "「非表示」アルバムは写真をライブラリから外し Face ID でロックできますが、iCloud への同期は続きます。別の暗号化保管庫が向いているのはどんなときか、使い方とあわせて解説します。",
      subtitle:
        "Apple の「非表示」アルバムが守るもの、守らないもの、そして端末内のプライベート保管庫の注意点",
      intro: [
        "結論から言うと、写真アプリで写真を選び、「その他」ボタンをタップして「非表示」を選ぶだけです。写真はライブラリやアルバムから消えて「非表示」アルバムに移り、iOS 16 以降ではこのアルバムは Face ID、Touch ID、またはパスコードでしか開けません。多くの人にはこれで十分です。ただし「非表示」アルバムはあくまで写真ライブラリの一部です。iCloud 写真を通じて同じ Apple アカウントでサインインしたすべてのデバイスに同期され、iPhone のパスコードを知っている人なら誰でも開けます。",
        "このガイドでは、「非表示」アルバムの正しい使い方、それが守るもの・守らないもの、ロックしたメモやロックしたアプリといった Apple のほかの選択肢、そして iPhone 版 DiskMop の保管庫のような別の暗号化保管庫が適しているのはどんなときかを、使う前に理解しておくべき唯一の注意点も含めて解説します。",
      ],
      keyTakeaways: [
        "写真を隠すには、写真アプリで選択して「その他」（3 つの点）をタップし「非表示」を選びます。写真はアルバム > ユーティリティ >「非表示」に移ります。",
        "iOS 16 以降、「非表示」アルバムは初期設定で Face ID、Touch ID、またはパスコードでロックされています。設定は「設定」>「アプリ」>「写真」にあります。",
        "同じ設定で「非表示」アルバムの表示をオフにすると、ユーティリティからアルバム自体が消え、存在に気づかれなくなります。",
        "非表示にした写真はライブラリと iCloud 写真に残り、ほかのデバイスに同期され、パスコードを知っている人なら見られます。",
        "別の保管庫は写真ライブラリの外に暗号化したコピーを保存します。DiskMop では鍵が端末の外に出ることはなく、保管庫は Face ID かパスコードでしか開きません。",
        "DiskMop の保管庫は意図的に iCloud バックアップの対象外です。アプリを削除すると保管庫も消えるため、残したいものは先に写真に保存し直してください。",
      ],
      dataTable: {
        caption: "iPhone で写真を人目から守る方法",
        columns: ["方法", "ロックのしかた", "写真の保存場所", "iCloud"],
        rows: [
          [
            "「非表示」アルバム（写真）",
            "Face ID、Touch ID、パスコード（iOS 16 以降）",
            "写真ライブラリ内（メインの表示からは除外）",
            "あり（iCloud 写真）",
          ],
          [
            "ロックしたメモ（メモ）",
            "メモのパスワードまたはデバイスのパスコード",
            "メモの中",
            "あり（メモが iCloud にある場合）",
          ],
          [
            "写真アプリに Face ID を要求（iOS 18）",
            "アプリを開くのに Face ID かパスコード",
            "写真ライブラリ内（変化なし）",
            "あり（iCloud 写真）",
          ],
          [
            "DiskMop の保管庫",
            "Face ID、Touch ID、パスコード。鍵はこの端末にのみ保存",
            "アプリ内の暗号化ファイル",
            "なし（意図的に iCloud バックアップ対象外）",
          ],
        ],
      },
      howTo: {
        name: "iPhone で写真を隠す",
        totalTime: "PT5M",
        steps: [
          {
            name: "写真アプリで写真を非表示にする",
            text: "写真アプリを開いて「選択」をタップし、写真やビデオを選んで「その他」ボタン、続いて「非表示」をタップします。確認すると、項目はアルバム > ユーティリティ >「非表示」に移ります。",
          },
          {
            name: "アルバムがロックされているか確認する",
            text: "「設定」>「アプリ」>「写真」を開き、Face ID（または Touch ID、パスコード）を使用する設定がオンになっているか確認します。アルバムを完全に見えなくしたい場合は、同じ画面で「非表示」アルバムの表示をオフにできます。",
          },
          {
            name: "特に見られたくない写真は保管庫へ",
            text: "ライブラリにも iCloud にも置きたくない写真は、DiskMop を開いて「その他」>「保管庫」へ進み、Face ID でロックを解除して + をタップして追加します。あなたが決めるまで、元の写真はライブラリに残ります。",
          },
          {
            name: "必要なら元の写真を削除する",
            text: "追加後、DiskMop がライブラリからも削除するかを尋ねます。「確認して削除」を選べば内容を確認して iOS で承認でき、「ライブラリに残す」を選べばそのままです。削除した写真は 30 日間「最近削除した項目」に残ります。",
          },
          {
            name: "機種変更の前にコピーを保存する",
            text: "保管庫は iCloud バックアップに含まれません。アプリを削除したり新しい iPhone に移行したりする前に、残したい項目を開いて「写真に保存」をタップしてください。",
          },
        ],
      },
      sections: [
        {
          title: "標準の方法：Apple の「非表示」アルバム",
          content: [
            "どの iPhone でも、追加のアプリなしで写真を隠せます。写真アプリで「選択」をタップし、写真やビデオを 1 つ以上選んで「その他」ボタンをタップし、「非表示」を選びます。非表示にした項目はライブラリ、アルバム、写真ウィジェットから消え、アルバム > ユーティリティ >「非表示」にまとめられます。元に戻すには「非表示」アルバムを開き、項目を選んで非表示を解除します。",
            "iOS 16 以降、「非表示」アルバムと「最近削除した項目」は初期設定でロックされています。開くには Face ID、Touch ID、またはパスコードが必要で、その切り替えは「設定」>「アプリ」>「写真」にあります。同じ画面では、アルバムをユーティリティに表示するかどうかも選べます。表示をオフにすれば、何かが隠されていることを示す目に見える手がかりはなくなります。",
            "サプライズのプレゼントやパスポートのスキャン画像を、写真をスクロールする誰かの目から隠すには、手軽で無料、十分な方法です。ただし、もっと重要なものを任せる前に、何から守ってくれるのかを正確に知っておきましょう。",
          ],
        },
        {
          title: "「非表示」アルバムが守らないもの",
          content: [
            "非表示は表示の設定であって、別の保存場所ではありません。写真はライブラリに残るため、iCloud 写真がオンなら iPad、Mac、iCloud.com にも同期されます。そこでも「非表示」アルバムには独自のロックがありますが、中身は同じです。また、iPhone のパスコードを知っている人なら誰でもアルバムを開けます。パスコードは常に Face ID の代わりとして受け付けられるからです。",
            "Apple にはほかに 2 つの選択肢があります。メモアプリでは個々のメモをパスワードやデバイスのパスコードでロックでき、ロックしたメモに追加した写真もそのロックで守られます。ただし元の写真は、削除するまでライブラリに残ります。iOS 18 ではアプリのアイコンを長押しして Face ID を要求する設定も選べます。写真アプリをロックすればライブラリ全体を何気ないのぞき見から守れますが、写真の保存場所は何も変わりません。",
            "ライブラリにも iCloud にも、ほかのデバイスにも存在しない写真のまとまりが欲しいなら、別の種類のツールが必要です。アプリの中に独自の暗号化コピーを保管する「保管庫」です。",
          ],
        },
        {
          title: "DiskMop の独立した暗号化保管庫",
          content: [
            "iPhone 版 DiskMop には「その他」>「保管庫」に保管庫があります。追加した写真やビデオはアプリ内にコピーされ、256 ビットの鍵を使って AES-GCM で暗号化されます。鍵は iPhone のキーチェーンに保存され、Face ID、Touch ID、またはデバイスのパスコードで保護され、この端末でのみ利用可能として扱われるため、バックアップやほかのデバイスに移ることはありません。保管庫の中身を示す索引まで暗号化されているので、ロック中の保管庫からは何件入っているかさえわかりません。",
            "保管庫は、アプリがバックグラウンドに移るか保管庫の画面を離れた時点で自動的にロックされ、アプリスイッチャーでは中身がぼかして表示されます。忘れてしまう別の PIN はなく、デバイスのパスコードが代わりの手段です。iCloud にしかない写真は追加するときにダウンロードされ、編集した写真は編集後の状態で保管庫に入ります。",
            "写真を追加してもライブラリからは削除されません。DiskMop はそのあと元の写真を削除するかを尋ね、削除する場合はいつもの確認と iOS の承認を経て、30 日間「最近削除した項目」に残ります。「写真に保存」を使えば、項目を元のデータ、日付、位置情報とともにライブラリに戻せます。一方、保管庫からの削除は完全な削除で、取り消せません。",
          ],
        },
        {
          title: "必ず理解しておきたい唯一の注意点",
          content: [
            "保管庫のフォルダは、意図的に iCloud バックアップの対象から外されています。だからこそ中身が Apple のサーバーに置かれないのですが、その結果として、アプリが明示しているとおり DiskMop を削除すると保管庫の中身はすべて消えます。また鍵は作成した端末にしか存在しないため、新しい iPhone にも引き継がれません。復元に使えるアカウントやサーバー上のコピーはありません。",
            "保管庫はバックアップではなく、プライベートな保管場所と考えてください。かけがえのないものは別の場所にもコピーを残し、機種変更の前には保管庫を開いて残したいものを写真に保存し直しましょう。デバイスのパスコードの設定が必須で、パスコードがないと保管庫は保護できず、開きません。",
            "保管庫は無料で使えます。追加後に元の写真をライブラリから削除する操作は、DiskMop では通常の写真削除として扱われ、1 日 10 枚までは無料、DiskMop Pro なら無制限です。ライブラリが手に負えなくなったから写真を隠しているのなら、[スワイプで iPhone の写真を整理する方法](/blog/swipe-to-delete-photos-iphone)が根本的な解決になるかもしれません。",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone で非表示にした写真はどこに行きますか？",
          answer:
            "写真アプリのアルバム > ユーティリティ >「非表示」に移ります。ライブラリ、アルバム、写真ウィジェットには表示されなくなりますが、写真ライブラリの一部であることに変わりはありません。",
        },
        {
          question: "非表示にした写真は iCloud にも残っていますか？",
          answer:
            "はい。iCloud 写真がオンなら、非表示の写真もほかの写真と同じように iCloud やほかのデバイスに同期されます。変わるのは表示のされ方だけです。",
        },
        {
          question:
            "Face ID なしで「非表示」アルバムを開かれることはありますか？",
          answer:
            "iPhone のパスコードを知っている人なら開けます。パスコードは常に代わりの手段として受け付けられるためです。これは DiskMop の保管庫を含め、Face ID でロックを解除するすべてのアプリに当てはまります。",
        },
        {
          question: "アプリを削除すると DiskMop の保管庫はどうなりますか？",
          answer:
            "中身はアプリと一緒に削除されます。保管庫は意図的に iCloud バックアップの対象外なので、アプリの削除や機種変更の前に、残したいものを写真に保存し直してください。",
        },
        {
          question: "保管庫に写真を追加すると写真アプリから消えますか？",
          answer:
            "いいえ。削除を選ばない限り、元の写真はライブラリに残ります。削除する場合も、まず写真を確認し、iOS の承認を経て、30 日間「最近削除した項目」に残ります。",
        },
      ],
      verdict: [
        "日常的なプライバシーには「非表示」アルバムが適しています。標準搭載で無料、iOS 16 以降は Face ID でロックされ、アルバム自体を見えなくすることもできます。ただし、それは別の場所ではなく表示のしかたであり、iCloud を通じてライブラリと一緒に移動することを覚えておきましょう。",
        "写真をライブラリにも iCloud にも置きたくないなら、保管庫のほうが向いています。iPhone 版 DiskMop は、端末の外に出ない鍵で写真を端末内に暗号化して保管し、自動でロックし、あなたが選ばない限りライブラリには手を付けません。保管庫は意図的にバックアップされないため、アプリを削除する前にコピーを保存してください。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
