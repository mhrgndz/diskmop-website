import type { Article } from "../types";

export const deleteWhatsappPhotosIphone: Article = {
  slug: "delete-whatsapp-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title:
        "WhatsApp Fotoğraflarını iPhone Depolamasından Silme (ve Yenilerinin Birikmesini Durdurma)",
      metaDescription:
        "WhatsApp gelen her fotoğrafı kendi kopyasına ek olarak iPhone kitaplığına da kaydedebilir. Bunu durdurma, birikeni temizleme ve kopyaları bulma adımları.",
      subtitle:
        "Her resmin iki kopyası, varsayılan olarak açık bir ayar ve sohbetlerinize dokunmayan bir temizlik",
      intro: [
        "Kısa cevap: WhatsApp'ın Film Rulosuna Kaydet ayarı açıksa (bazı sürümlerde adı Fotoğraflar'a Kaydet), bir sohbette aldığınız her fotoğraf Fotoğraflar uygulamasına, WhatsApp adlı bir albüme de kaydedilir. Bu kopya WhatsApp'ın içindekinden ayrıdır; yani aynı caps, tebrik kartı ya da iletilmiş ekran görüntüsü iki kez yer kaplar. Ayarı WhatsApp > Ayarlar > Sohbetler'den kapatın, sonra zaten kaydedilenleri hem Fotoğraflar'daki WhatsApp albümünden hem de WhatsApp'ın kendi Depolamayı Yönet ekranından temizleyin.",
        "Bu rehber WhatsApp medyasının iPhone'da gerçekte nerede durduğunu, yeni fotoğrafların kitaplığınıza düşmesini nasıl durduracağınızı, sohbetleri kaybetmeden iki kopyayı nasıl temizleyeceğinizi ve iPhone için DiskMop'un WhatsApp'tan ve diğer sohbet uygulamalarından kaydedilen fotoğrafları tek yerde gözden geçirebilmeniz için nasıl topladığını anlatıyor.",
      ],
      keyTakeaways: [
        "Film Rulosuna Kaydet (ya da Fotoğraflar'a Kaydet) açıkken WhatsApp aldığınız fotoğraf ve videoları kendi kopyasını tutmanın yanında Fotoğraflar uygulamasına da kaydeder.",
        "Tüm sohbetler için WhatsApp > Ayarlar > Sohbetler'den kapatın; tek bir sohbet için sohbet adına dokunup Film Rulosuna Kaydet'i Asla yapın.",
        "Bir fotoğrafı Fotoğraflar uygulamasından silmek onu sohbetten kaldırmaz; WhatsApp'ta bir sohbeti temizlemek de Fotoğraflar'a zaten kaydedilmiş kopyayı kaldırmaz.",
        "WhatsApp > Ayarlar > Depolama ve Veriler > Depolamayı Yönet en büyük dosyaları ve en çok yer kaplayan sohbetleri listeler; mesajları silmeden uygulamanın içindeki medyayı temizleyebilirsiniz.",
        "WhatsApp üzerinden size geri gönderilen fotoğraflar kendi resimlerinizin yeniden sıkıştırılmış kopyalarıdır; görsel benzerlik taraması onları aylar sonra bile bulur.",
        "Silinen fotoğraflar 30 gün boyunca Son Silinenler'de kalır; alanı geri almak için o albümü boşaltın.",
      ],
      dataTable: {
        caption: "WhatsApp medyasının iPhone'da yer kapladığı yerler",
        columns: ["Konum", "Orada ne var", "Nasıl temizlenir"],
        rows: [
          [
            "Fotoğraflar uygulaması, WhatsApp albümü",
            "Otomatik kaydedilen gelen fotoğraf ve videolar",
            "Fotoğraflar'dan silin, sonra Son Silinenler'i boşaltın",
          ],
          [
            "WhatsApp'ın içi",
            "Sohbetlerinizdeki her fotoğraf, video, sesli mesaj ve belge",
            "Ayarlar > Depolama ve Veriler > Depolamayı Yönet",
          ],
          [
            "WhatsApp'ın iCloud yedeği",
            "Sohbetler ve açıksa videolar",
            "WhatsApp > Ayarlar > Sohbetler > Sohbet Yedeği",
          ],
          [
            "Fotoğraf kitaplığı, yeniden kaydedilen kopyalar",
            "Size geri gönderilen, yeniden sıkıştırılmış kendi fotoğraflarınız",
            "Görsel benzerlik taraması, ardından özgünü tutun",
          ],
        ],
      },
      howTo: {
        name: "WhatsApp fotoğraflarını iPhone depolamasından silme",
        totalTime: "PT15M",
        steps: [
          {
            name: "Otomatik kaydetmeyi durdurun",
            text: "WhatsApp > Ayarlar > Sohbetler'i açın ve Film Rulosuna Kaydet'i (Fotoğraflar'a Kaydet) kapatın. Kalabalık tek bir grup için grubu açın, adına dokunun ve Film Rulosuna Kaydet'i Asla yapın.",
          },
          {
            name: "Fotoğraflar'da birikmiş olana bakın",
            text: "Fotoğraflar'da Albümler'i açıp WhatsApp albümünü bulun. DiskMop'ta Sohbet uygulamalarından listesi, WhatsApp'ın ve diğer sohbet uygulamalarının albümlerindeki fotoğrafları her birinin üzerinde uygulama adıyla toplar.",
          },
          {
            name: "İhtiyacınız olmayan fotoğrafları silin",
            text: "Fotoğrafları seçin ya da kaydırarak tek tek geçin ve istemediklerinizi silin. Hiçbir şey önceden seçili gelmez; önem verdiğiniz fotoğraflar siz seçmedikçe kalır.",
          },
          {
            name: "WhatsApp'ın içindeki medyayı temizleyin",
            text: "WhatsApp'ta Ayarlar > Depolama ve Veriler > Depolamayı Yönet'i açın. Büyük dosyalara ve listenin başındaki sohbetlere bakıp oradaki medyayı silin; mesajlarınız kalır.",
          },
          {
            name: "Son Silinenler'i boşaltın",
            text: "Kitaplıktan silinen fotoğraflar Fotoğraflar > Albümler > Son Silinenler'de 30 gün bekler. Alanı hemen açmak için albümü açın, Seç'e ve Tümünü Sil'e dokunun.",
          },
        ],
      },
      sections: [
        {
          title: "WhatsApp Medyası iPhone'da Nerede Durur",
          content: [
            "WhatsApp gönderdiğiniz ve aldığınız her şeyi kendi depolamasında tutar: fotoğraflar, videolar, sesli mesajlar, çıkartmalar ve belgeler. Bunun ne kadar tuttuğunu Ayarlar > Genel > iPhone Depolama Alanı > WhatsApp altında görebilirsiniz; büyük rakam genellikle Belgeler ve Veriler'dir. Bu kopya, fotoğraf kitaplığınıza bir şey kaydedilsin ya da kaydedilmesin uygulamada kalır.",
            "Üstüne, WhatsApp gelen fotoğraf ve videoları Fotoğraflar uygulamasına da kaydedebilir. Seçenek açıkken WhatsApp adlı bir albüm oluşturur ve gelen medyayı hem bu albüme hem ana kitaplığınıza ekler. Bu ikinci kopyanın artık sohbetle bağı yoktur: Fotoğraflar'da silerseniz sohbet resmi göstermeye devam eder; sohbeti temizlerseniz Fotoğraflar'daki kopya kalır.",
            "Birkaç hareketli aile ya da iş grubunda bu hızla birikir. Günaydın resimleri, iletilmiş videolar, menüler, capsler ve başkalarının ekran görüntülerinin ekran görüntüleri her gün gelir; otomatik kaydetme açıkken her biri fotoğraf kitaplığınızın, iCloud Fotoğrafları depolamanızın ve iPhone'un ondan hazırladığı her slayt gösterisinin de parçası olur.",
          ],
        },
        {
          title:
            "Yeni WhatsApp Fotoğraflarının Kitaplığınıza Düşmesini Durdurun",
          content: [
            "Çözüm WhatsApp'ın kendisinde başlar. Ayarlar > Sohbetler'i açın ve Film Rulosuna Kaydet'i kapatın; sürüme göre anahtarın adı Fotoğraflar'a Kaydet olabilir. Bundan sonra gelen medya WhatsApp'ın içinde kalır; gerçekten saklamak istediğiniz tek bir fotoğrafı yine açıp Paylaş düğmesiyle kaydedebilirsiniz.",
            "Yalnızca en gürültülü grupları durdurmak istiyorsanız ayarı sohbet başına yapın: sohbeti açın, üstteki adına dokunun ve Film Rulosuna Kaydet'i Varsayılan'dan Asla'ya çevirin. Tersi de çalışır; genel anahtar kapalıyken bir iki önemli kişiden kaydetmeye devam edebilirsiniz.",
            "Ayarlar > Depolama ve Veriler > Medya Otomatik İndirme'ye de bakmaya değer. Videoları yalnızca Wi-Fi ya da Asla yapmak, büyük dosyaların siz dokunana kadar inmesini engeller. Bu fotoğraf kitaplığınızı etkilemez, ama WhatsApp'ın kendi depolamasının büyüme hızını yavaşlatır.",
          ],
        },
        {
          title: "Sohbetleri Kaybetmeden Birikmiş Olanı Temizleyin",
          content: [
            "Kitaplığınızdaki kopyalar için Fotoğraflar'daki WhatsApp albümüyle başlayın. Seç'e dokunup ızgarada parmağınızı sürükleyerek birçoğunu birden seçebilir, sonra silebilirsiniz. Sildiğiniz her şey 30 gün Son Silinenler'e gider; yanlışlıkla kaldırdığınız bir fotoğrafı yine geri getirebilirsiniz.",
            "Birden fazla sohbet uygulaması işin içindeyse iPhone için DiskMop bunu kolaylaştırır. Sohbet uygulamalarından listesi WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger ve diğer sohbet uygulamalarının albümlerinde duran fotoğrafları toplar ve her fotoğrafın üzerinde uygulamanın adını gösterir. Sizin yerinize hiçbir şey seçilmez: ızgarada fotoğrafları işaretleyebilir ya da listeyi Kaydır sekmesinde açıp her seferinde tek fotoğrafa karar verebilirsiniz. Liste yalnızca albüm üyeliğinden kurulur; kamerayla çektiğiniz bir fotoğraf asla sohbet medyası diye etiketlenmez.",
            "WhatsApp'ın içinde, Ayarlar > Depolama ve Veriler > Depolamayı Yönet 5 MB'tan büyük dosyaları, çok kez iletilenleri ve boyuta göre sıralı bir sohbet listesini gösterir. Medyasını ızgara olarak görmek için oradan bir sohbet açın ve ihtiyacınız olmayanı silin; mesajların kendisi kalır. WhatsApp iCloud yedeğiniz videoları da içeriyorsa bunu Ayarlar > Sohbetler > Sohbet Yedeği'nden kapatmak yedeği de küçültür.",
          ],
        },
        {
          title: "Geri Gelen Kendi Fotoğraflarınızın Kopyaları",
          content: [
            "Hiçbir albümün göstermediği bir WhatsApp dağınıklığı daha vardır. Bir fotoğrafı paylaştığınızda ve biri onu size geri gönderdiğinde ya da bir gruptan kendi fotoğrafınızı kaydettiğinizde WhatsApp yeniden sıkıştırılmış bir kopya teslim eder: daha küçük, biraz daha yumuşak, yeni bir tarihle ve özgün meta veriler olmadan. Fotoğraflar uygulaması için bu farklı bir resimdir, bu yüzden Kopyalar albümü onu kopya saymaz.",
            "Görsel benzerlik taraması sayar. DiskMop fotoğrafları dosyalarına ya da tarihlerine göre değil, nasıl göründüklerine göre karşılaştırır ve aylar sonra WhatsApp, Instagram ya da AirDrop üzerinden geri gelen kopyaları yakalamak için özel olarak zaman sınırı olmayan bir geçiş yapar. Her grup, normalde özgün ve daha net sürüm olan önerilen kareyi işaretler ve kopyaları size bırakır.",
            "[iPhone'da kopya ve benzer fotoğrafları bulma](/blog/find-duplicate-similar-photos-iphone) rehberimiz bu taramanın nasıl çalıştığını daha ayrıntılı anlatıyor. WhatsApp sorunun yalnızca bir parçasıysa [iPhone fotoğraflarını kaydırarak temizleme](/blog/swipe-to-delete-photos-iphone), kitaplığın geri kalanından hızla geçmenin bir yoludur.",
          ],
        },
      ],
      faq: [
        {
          question:
            "WhatsApp fotoğraflarını Fotoğraflar uygulamasından silmek onları sohbetten de siler mi?",
          answer:
            "Hayır. Fotoğraflar'a kaydedilen kopya WhatsApp'ın içindekinden ayrıdır. Fotoğraflar'da silmek sohbete dokunmaz; sohbeti temizlemek de Fotoğraflar'daki kopyayı bırakır.",
        },
        {
          question:
            "WhatsApp'ın iPhone'a fotoğraf kaydetmesini nasıl durdururum?",
          answer:
            "WhatsApp > Ayarlar > Sohbetler'i açın ve Film Rulosuna Kaydet'i (bazı sürümlerde Fotoğraflar'a Kaydet) kapatın. Yalnızca bir sohbet için değiştirmek isterseniz sohbet adına dokunup Film Rulosuna Kaydet'i Asla yapın.",
        },
        {
          question: "WhatsApp iPhone Depolama Alanı'nda neden bu kadar büyük?",
          answer:
            "Belgeler ve Veriler rakamı sohbetlerinizdeki her fotoğrafı, videoyu, sesli mesajı ve belgeyi içerir. Mesajları silmeden büyük dosyaları ve kalabalık sohbetleri temizlemek için WhatsApp'ta Ayarlar > Depolama ve Veriler > Depolamayı Yönet'i kullanın.",
        },
        {
          question: "WhatsApp'ın içinde saklanan medyayı nasıl temizlerim?",
          answer:
            "iOS her uygulamanın kendi depolamasını özel tutar; bu yüzden WhatsApp'ın içindeki medya WhatsApp'ın kendisinde, Ayarlar > Depolama ve Veriler > Depolamayı Yönet altında temizlenir. Fotoğraf kitaplığınıza kaydedilen kopyalar ise DiskMop'un gözden geçirmenize yardım ettiği kısımdır.",
        },
        {
          question:
            "Bir uygulamanın fotoğraflarımı okumasına izin vermek güvenli mi?",
          answer:
            "DiskMop kitaplığı Apple'ın çerçeveleriyle aygıtta analiz eder, sunucusu ve hesabı yoktur ve App Store gizlilik etiketinde Veri Toplanmaz yazar.",
        },
      ],
      verdict: [
        "Önce WhatsApp'ın otomatik kaydetmesini kapatın; yoksa her temizlik birkaç hafta içinde boşa gider. Sonra iki kopyayı ayrı ayrı temizleyin: Fotoğraflar'daki WhatsApp albümünü ve Depolamayı Yönet üzerinden WhatsApp'ın içindeki medyayı. Son Silinenler'le bitirin, yoksa alan hiç geri gelmez.",
        "iPhone için DiskMop, WhatsApp'tan ve diğer sohbet uygulamalarından kaydedilen fotoğrafları her birinin üzerinde uygulama adıyla tek bir listede toplar, kendi resimlerinizin yeniden sıkıştırılmış kopyalarını bulur ve hiçbir şeyi önceden seçmez. Tarama ücretsizdir, günde beş fotoğrafa kadar ücretsiz silinebilir ve 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro sınırı kaldırır.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Delete WhatsApp Photos From iPhone Storage (and Stop New Ones Piling Up)",
      metaDescription:
        "WhatsApp can save every photo you receive into your iPhone library, on top of its own copy. How to stop it, clear what is there and find copies of your photos.",
      subtitle:
        "Two copies of every picture, a setting that is on by default, and a clean-up that does not touch your chats",
      intro: [
        "Short answer: if WhatsApp's Save to Camera Roll setting is on (some versions call it Save to Photos), every photo you receive in a chat is also saved into the Photos app, in an album called WhatsApp. That copy is separate from the one inside WhatsApp, so the same meme, greeting card or forwarded screenshot takes space twice. Turn the setting off in WhatsApp > Settings > Chats, then clear what was already saved, from the WhatsApp album in Photos and from WhatsApp's own Manage Storage screen.",
        "This guide explains where WhatsApp media actually lives on an iPhone, how to stop new photos from landing in your library, how to clear both copies without losing chats, and how DiskMop for iPhone groups photos saved from WhatsApp and other chat apps so you can review them in one place.",
      ],
      keyTakeaways: [
        "With Save to Camera Roll (or Save to Photos) on, WhatsApp saves received photos and videos into the Photos app as well as keeping its own copy inside the app.",
        "Turn it off for all chats in WhatsApp > Settings > Chats, or for a single chat by tapping the chat name and setting Save to Camera Roll to Never.",
        "Deleting a photo from the Photos app does not remove it from the chat, and clearing a chat in WhatsApp does not remove the copy already saved in Photos.",
        "WhatsApp > Settings > Storage and Data > Manage Storage lists the largest files and the chats that use the most space, so you can clear media inside the app without deleting messages.",
        "Photos sent back to you through WhatsApp are recompressed copies of your own pictures; a visual similarity scan finds them even months later.",
        "Deleted photos stay in Recently Deleted for 30 days; empty that album to get the space back.",
      ],
      dataTable: {
        caption: "Where WhatsApp media takes space on an iPhone",
        columns: ["Location", "What is there", "How to clear it"],
        rows: [
          [
            "Photos app, WhatsApp album",
            "Received photos and videos saved automatically",
            "Delete from Photos, then empty Recently Deleted",
          ],
          [
            "Inside WhatsApp",
            "Every photo, video, voice message and document in your chats",
            "Settings > Storage and Data > Manage Storage",
          ],
          [
            "iCloud backup of WhatsApp",
            "Chats and, if enabled, videos",
            "WhatsApp > Settings > Chats > Chat Backup",
          ],
          [
            "Photos library, re-saved copies",
            "Your own photos sent back to you, recompressed",
            "A visual similarity scan, then keep the original",
          ],
        ],
      },
      howTo: {
        name: "Delete WhatsApp photos from iPhone storage",
        totalTime: "PT15M",
        steps: [
          {
            name: "Stop automatic saving",
            text: "Open WhatsApp > Settings > Chats and turn off Save to Camera Roll (Save to Photos). For a single busy group, open it, tap its name and set Save to Camera Roll to Never.",
          },
          {
            name: "Review what is already in Photos",
            text: "In Photos, open Albums and find the WhatsApp album. In DiskMop, the Saved from chat apps list collects the photos from WhatsApp and other chat apps' albums, each labelled with its app.",
          },
          {
            name: "Delete the photos you do not need",
            text: "Select or swipe through them and delete the ones you do not want. Nothing is preselected, so photos you care about stay unless you choose them.",
          },
          {
            name: "Clear media inside WhatsApp",
            text: "In WhatsApp, open Settings > Storage and Data > Manage Storage. Review large files and the chats at the top of the list and delete media there; your messages stay.",
          },
          {
            name: "Empty Recently Deleted",
            text: "Photos deleted from the library wait 30 days in Photos > Albums > Recently Deleted. Open it, tap Select and Delete All to free the space now.",
          },
        ],
      },
      sections: [
        {
          title: "Where WhatsApp Media Lives on an iPhone",
          content: [
            "WhatsApp keeps everything you send and receive inside its own storage: photos, videos, voice messages, stickers and documents. You can see how much that is in Settings > General > iPhone Storage > WhatsApp, where Documents & Data is usually the large number. This copy stays in the app whether or not anything is saved to your photo library.",
            "On top of that, WhatsApp can save received photos and videos into the Photos app. When the option is on, it creates an album called WhatsApp and adds incoming media to it, as well as to your main library. That second copy is no longer connected to the chat: delete it in Photos and the chat still shows the picture; clear the chat and the copy in Photos stays.",
            "In a few active family or work groups this adds up quickly. Good-morning images, forwarded videos, menus, memes and screenshots of other people's screenshots arrive every day, and with automatic saving each one also becomes part of your photo library, your iCloud Photos storage and every slideshow the iPhone builds from it.",
          ],
        },
        {
          title: "Stop New WhatsApp Photos From Landing in Your Library",
          content: [
            "The fix starts in WhatsApp itself. Open Settings > Chats and switch off Save to Camera Roll; depending on the version the switch may be called Save to Photos. From then on, received media stays inside WhatsApp, and you can still save a single photo by opening it and using the Share button when you actually want to keep it.",
            "If you only want to stop the noisiest groups, set it per chat instead: open the chat, tap its name at the top and change Save to Camera Roll from Default to Never. The reverse also works, so you can keep saving from one or two important people while the global switch is off.",
            "It is also worth checking Settings > Storage and Data > Media Auto-Download. Setting videos to Wi-Fi only, or to Never, keeps large files from downloading until you tap them. That does not affect your photo library, but it slows down how fast WhatsApp's own storage grows.",
          ],
        },
        {
          title: "Clear What Is Already There Without Losing Chats",
          content: [
            "For the copies already in your library, start with the WhatsApp album in Photos. You can select many at once by tapping Select and dragging across the grid, then delete them. Anything you delete goes to Recently Deleted for 30 days, so you can still restore a photo you removed by mistake.",
            "DiskMop for iPhone makes this easier when several chat apps are involved. Its Saved from chat apps list collects the photos that sit in the albums of WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger and other chat apps, and shows the name of the app on each photo. Nothing is selected for you: you can tick photos in the grid or open the list in the Swipe tab and decide one photo at a time. The list is built only from album membership, so a photo you took with the camera is never labelled as chat media.",
            "Inside WhatsApp, Settings > Storage and Data > Manage Storage shows files larger than 5 MB, items forwarded many times and a list of chats sorted by size. Open a chat there to see its media as a grid and delete what you do not need; the messages themselves stay. If your WhatsApp iCloud backup includes videos, turning that off in Settings > Chats > Chat Backup makes the backup smaller as well.",
          ],
        },
        {
          title: "Copies of Your Own Photos That Came Back",
          content: [
            "There is one more kind of WhatsApp clutter that no album shows. When you share a photo and someone sends it back, or you save a picture of yourself from a group, WhatsApp delivers a recompressed copy: smaller, slightly softer, with a new date and without the original metadata. To the Photos app it is a different picture, so its Duplicates album does not treat it as a duplicate.",
            "A visual similarity scan does. DiskMop compares what photos look like rather than their files or dates, and runs a pass without any time limit specifically to catch copies that came back through WhatsApp, Instagram or AirDrop months later. Each group marks a suggested keeper, normally the original, sharper version, and leaves the copies for you to decide on.",
            "Our guide on [finding duplicate and similar photos on iPhone](/blog/find-duplicate-similar-photos-iphone) explains how that scan works in more detail. If WhatsApp is only part of the problem, [cleaning up iPhone photos by swiping](/blog/swipe-to-delete-photos-iphone) is a quick way through the rest of the library.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Does deleting WhatsApp photos from the Photos app delete them from the chat?",
          answer:
            "No. The copy saved in Photos is separate from the one inside WhatsApp. Deleting it in Photos leaves the chat untouched, and clearing the chat leaves the copy in Photos.",
        },
        {
          question: "How do I stop WhatsApp from saving photos to my iPhone?",
          answer:
            "Open WhatsApp > Settings > Chats and turn off Save to Camera Roll (Save to Photos in some versions). To change it for one chat only, tap the chat name and set Save to Camera Roll to Never.",
        },
        {
          question: "Why is WhatsApp so big in iPhone Storage?",
          answer:
            "The Documents & Data figure contains every photo, video, voice message and document from your chats. Use Settings > Storage and Data > Manage Storage in WhatsApp to clear large files and busy chats without deleting messages.",
        },
        {
          question: "How do I clear media stored inside WhatsApp?",
          answer:
            "iOS keeps every app's own storage private, so media inside WhatsApp is cleared in WhatsApp itself, under Settings > Storage and Data > Manage Storage. The copies saved in your photo library are the part DiskMop helps you review.",
        },
        {
          question: "Is it safe to let an app read my photos?",
          answer:
            "DiskMop analyses the library on the device with Apple's frameworks, has no server and no account, and its App Store privacy label states Data Not Collected.",
        },
      ],
      verdict: [
        "Turn off WhatsApp's automatic saving first; otherwise every clean-up is undone within weeks. Then clear the two copies separately: the WhatsApp album in Photos, and media inside WhatsApp through Manage Storage. Finish with Recently Deleted, or the space never comes back.",
        "DiskMop for iPhone collects photos saved from WhatsApp and other chat apps into one list with the app named on each photo, finds recompressed copies of your own pictures and preselects nothing. Scanning is free, up to five photos a day can be deleted for free, and DiskMop Pro, a monthly subscription with a 7-day free trial, removes the limit.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "WhatsApp-Fotos vom iPhone-Speicher löschen (und neue gar nicht erst sammeln)",
      metaDescription:
        "WhatsApp kann jedes empfangene Foto zusätzlich in der iPhone-Mediathek speichern. So stoppen Sie das, räumen Altlasten auf und finden Kopien eigener Fotos.",
      subtitle:
        "Zwei Kopien jedes Bildes, eine standardmäßig aktive Einstellung und ein Aufräumen, das Ihre Chats nicht anrührt",
      intro: [
        "Kurze Antwort: Ist in WhatsApp „In Aufnahmen sichern“ aktiviert (manche Versionen nennen es „In Fotos sichern“), wird jedes Foto, das Sie in einem Chat empfangen, zusätzlich in der Fotos-App gespeichert, in einem Album namens WhatsApp. Diese Kopie ist von der in WhatsApp getrennt, sodass dasselbe Meme, dieselbe Grußkarte oder derselbe weitergeleitete Screenshot doppelt Platz belegt. Schalten Sie die Einstellung unter WhatsApp > Einstellungen > Chats aus und räumen Sie dann auf, was schon gespeichert ist: im WhatsApp-Album in Fotos und im WhatsApp-eigenen Bereich „Speicher verwalten“.",
        "Dieser Ratgeber erklärt, wo WhatsApp-Medien auf dem iPhone tatsächlich liegen, wie Sie verhindern, dass neue Fotos in Ihrer Mediathek landen, wie Sie beide Kopien entfernen, ohne Chats zu verlieren, und wie DiskMop für iPhone Fotos aus WhatsApp und anderen Chat-Apps zusammenführt, damit Sie sie an einer Stelle prüfen können.",
      ],
      keyTakeaways: [
        "Mit aktiviertem „In Aufnahmen sichern“ speichert WhatsApp empfangene Fotos und Videos zusätzlich zur eigenen Kopie in der App auch in der Fotos-App.",
        "Schalten Sie es für alle Chats unter WhatsApp > Einstellungen > Chats aus oder für einen einzelnen Chat, indem Sie auf den Chatnamen tippen und „In Aufnahmen sichern“ auf Nie stellen.",
        "Ein Foto in der Fotos-App zu löschen entfernt es nicht aus dem Chat, und einen Chat in WhatsApp zu leeren entfernt nicht die bereits in Fotos gespeicherte Kopie.",
        "WhatsApp > Einstellungen > Speicher und Daten > Speicher verwalten listet die größten Dateien und die Chats mit dem meisten Platzbedarf, sodass Sie Medien in der App löschen können, ohne Nachrichten zu verlieren.",
        "Fotos, die Ihnen über WhatsApp zurückgeschickt werden, sind neu komprimierte Kopien Ihrer eigenen Bilder; ein visueller Ähnlichkeitsscan findet sie auch Monate später.",
        "Gelöschte Fotos bleiben 30 Tage in „Zuletzt gelöscht“; leeren Sie dieses Album, um den Platz zurückzubekommen.",
      ],
      dataTable: {
        caption: "Wo WhatsApp-Medien auf dem iPhone Platz belegen",
        columns: ["Ort", "Was dort liegt", "Wie man es leert"],
        rows: [
          [
            "Fotos-App, Album WhatsApp",
            "Automatisch gespeicherte empfangene Fotos und Videos",
            "In Fotos löschen, dann „Zuletzt gelöscht“ leeren",
          ],
          [
            "In WhatsApp",
            "Jedes Foto, Video, jede Sprachnachricht und jedes Dokument Ihrer Chats",
            "Einstellungen > Speicher und Daten > Speicher verwalten",
          ],
          [
            "iCloud-Backup von WhatsApp",
            "Chats und, falls aktiviert, Videos",
            "WhatsApp > Einstellungen > Chats > Chat-Backup",
          ],
          [
            "Fotomediathek, erneut gespeicherte Kopien",
            "Ihre eigenen Fotos, zurückgeschickt und neu komprimiert",
            "Visueller Ähnlichkeitsscan, dann das Original behalten",
          ],
        ],
      },
      howTo: {
        name: "WhatsApp-Fotos vom iPhone-Speicher löschen",
        totalTime: "PT15M",
        steps: [
          {
            name: "Automatisches Speichern stoppen",
            text: "Öffnen Sie WhatsApp > Einstellungen > Chats und schalten Sie „In Aufnahmen sichern“ (bzw. „In Fotos sichern“) aus. Für eine einzelne lebhafte Gruppe öffnen Sie diese, tippen auf ihren Namen und stellen „In Aufnahmen sichern“ auf Nie.",
          },
          {
            name: "Prüfen, was schon in Fotos liegt",
            text: "Öffnen Sie in Fotos die Alben und suchen Sie das Album WhatsApp. In DiskMop sammelt die Liste „Aus Chat-Apps gespeichert“ die Fotos aus den Alben von WhatsApp und anderen Chat-Apps, jeweils mit dem Namen der App.",
          },
          {
            name: "Nicht benötigte Fotos löschen",
            text: "Wählen Sie die Fotos aus oder wischen Sie sie einzeln durch und löschen Sie die, die Sie nicht möchten. Nichts ist vorausgewählt; wichtige Fotos bleiben, solange Sie sie nicht auswählen.",
          },
          {
            name: "Medien in WhatsApp entfernen",
            text: "Öffnen Sie in WhatsApp Einstellungen > Speicher und Daten > Speicher verwalten. Prüfen Sie große Dateien und die Chats oben in der Liste und löschen Sie dort Medien; Ihre Nachrichten bleiben.",
          },
          {
            name: "„Zuletzt gelöscht“ leeren",
            text: "Aus der Mediathek gelöschte Fotos warten 30 Tage unter Fotos > Alben > Zuletzt gelöscht. Öffnen Sie das Album, tippen Sie auf Auswählen und Alle löschen, um den Platz sofort freizugeben.",
          },
        ],
      },
      sections: [
        {
          title: "Wo WhatsApp-Medien auf dem iPhone liegen",
          content: [
            "WhatsApp bewahrt alles, was Sie senden und empfangen, im eigenen Speicher auf: Fotos, Videos, Sprachnachrichten, Sticker und Dokumente. Wie viel das ist, sehen Sie unter Einstellungen > Allgemein > iPhone-Speicher > WhatsApp, wo meist „Dokumente und Daten“ die große Zahl ist. Diese Kopie bleibt in der App, ganz gleich, ob etwas in Ihrer Fotomediathek gespeichert wird.",
            "Zusätzlich kann WhatsApp empfangene Fotos und Videos in der Fotos-App speichern. Ist die Option aktiv, legt die App ein Album namens WhatsApp an und fügt eingehende Medien diesem Album und Ihrer Hauptmediathek hinzu. Diese zweite Kopie hat keine Verbindung mehr zum Chat: Löschen Sie sie in Fotos, zeigt der Chat das Bild weiterhin; leeren Sie den Chat, bleibt die Kopie in Fotos.",
            "In ein paar aktiven Familien- oder Arbeitsgruppen summiert sich das schnell. Guten-Morgen-Bilder, weitergeleitete Videos, Speisekarten, Memes und Screenshots von Screenshots kommen jeden Tag, und mit automatischem Speichern wird jedes davon Teil Ihrer Fotomediathek, Ihres iCloud-Fotos-Speichers und jeder Diashow, die das iPhone daraus baut.",
          ],
        },
        {
          title: "Verhindern, dass neue WhatsApp-Fotos in der Mediathek landen",
          content: [
            "Die Lösung beginnt in WhatsApp selbst. Öffnen Sie Einstellungen > Chats und schalten Sie „In Aufnahmen sichern“ aus; je nach Version heißt der Schalter „In Fotos sichern“. Danach bleiben empfangene Medien in WhatsApp, und ein einzelnes Foto, das Sie wirklich behalten möchten, können Sie weiterhin öffnen und über die Teilen-Taste sichern.",
            "Möchten Sie nur die lautesten Gruppen bremsen, stellen Sie es pro Chat ein: Öffnen Sie den Chat, tippen Sie oben auf den Namen und ändern Sie „In Aufnahmen sichern“ von Standard auf Nie. Das funktioniert auch umgekehrt, sodass Sie bei ausgeschaltetem Hauptschalter von ein, zwei wichtigen Menschen weiter speichern.",
            "Ein Blick auf Einstellungen > Speicher und Daten > Automatischer Medien-Download lohnt sich ebenfalls. Stellen Sie Videos auf „Nur WLAN“ oder „Nie“, werden große Dateien erst geladen, wenn Sie darauf tippen. Ihre Fotomediathek betrifft das nicht, aber WhatsApps eigener Speicher wächst langsamer.",
          ],
        },
        {
          title: "Altlasten entfernen, ohne Chats zu verlieren",
          content: [
            "Für die Kopien in Ihrer Mediathek beginnen Sie mit dem Album WhatsApp in Fotos. Mit Auswählen und Ziehen über das Raster markieren Sie viele auf einmal und löschen sie dann. Alles Gelöschte landet 30 Tage in „Zuletzt gelöscht“, sodass Sie ein versehentlich entferntes Foto noch zurückholen können.",
            "Sind mehrere Chat-Apps im Spiel, macht DiskMop für iPhone das einfacher. Die Liste „Aus Chat-Apps gespeichert“ sammelt die Fotos, die in den Alben von WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger und anderen Chat-Apps liegen, und zeigt auf jedem Foto den Namen der App. Nichts wird für Sie ausgewählt: Sie können Fotos im Raster abhaken oder die Liste im Tab Wischen öffnen und Foto für Foto entscheiden. Die Liste entsteht ausschließlich aus der Albumzugehörigkeit, ein mit der Kamera aufgenommenes Foto wird also nie als Chat-Medium markiert.",
            "In WhatsApp zeigt Einstellungen > Speicher und Daten > Speicher verwalten Dateien über 5 MB, oft weitergeleitete Inhalte und eine nach Größe sortierte Chatliste. Öffnen Sie dort einen Chat, um seine Medien als Raster zu sehen, und löschen Sie, was Sie nicht brauchen; die Nachrichten selbst bleiben. Enthält Ihr WhatsApp-iCloud-Backup Videos, verkleinert es sich, wenn Sie das unter Einstellungen > Chats > Chat-Backup abschalten.",
          ],
        },
        {
          title: "Kopien eigener Fotos, die zurückgekommen sind",
          content: [
            "Es gibt noch eine Art von WhatsApp-Unordnung, die kein Album zeigt. Wenn Sie ein Foto teilen und jemand es zurückschickt, oder Sie ein Bild von sich aus einer Gruppe speichern, liefert WhatsApp eine neu komprimierte Kopie: kleiner, etwas weicher, mit neuem Datum und ohne die ursprünglichen Metadaten. Für die Fotos-App ist das ein anderes Bild, daher behandelt das Album Duplikate es nicht als Duplikat.",
            "Ein visueller Ähnlichkeitsscan schon. DiskMop vergleicht, wie Fotos aussehen, nicht ihre Dateien oder Daten, und führt eigens einen Durchgang ohne Zeitgrenze aus, um Kopien zu erwischen, die Monate später über WhatsApp, Instagram oder AirDrop zurückgekommen sind. Jede Gruppe markiert einen vorgeschlagenen Favoriten, normalerweise die originale, schärfere Fassung, und überlässt Ihnen die Entscheidung über die Kopien.",
            "Unser Ratgeber zum [Finden doppelter und ähnlicher Fotos auf dem iPhone](/blog/find-duplicate-similar-photos-iphone) erklärt diesen Scan genauer. Ist WhatsApp nur ein Teil des Problems, kommen Sie mit [iPhone-Fotos per Wischen aufräumen](/blog/swipe-to-delete-photos-iphone) schnell durch den Rest der Mediathek.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Löscht das Entfernen von WhatsApp-Fotos aus der Fotos-App sie auch im Chat?",
          answer:
            "Nein. Die in Fotos gespeicherte Kopie ist von der in WhatsApp getrennt. Löschen in Fotos lässt den Chat unberührt, und das Leeren des Chats lässt die Kopie in Fotos bestehen.",
        },
        {
          question:
            "Wie verhindere ich, dass WhatsApp Fotos auf dem iPhone speichert?",
          answer:
            "Öffnen Sie WhatsApp > Einstellungen > Chats und schalten Sie „In Aufnahmen sichern“ (in manchen Versionen „In Fotos sichern“) aus. Nur für einen Chat tippen Sie auf den Chatnamen und stellen „In Aufnahmen sichern“ auf Nie.",
        },
        {
          question: "Warum ist WhatsApp im iPhone-Speicher so groß?",
          answer:
            "Der Wert „Dokumente und Daten“ enthält jedes Foto, Video, jede Sprachnachricht und jedes Dokument aus Ihren Chats. Mit Einstellungen > Speicher und Daten > Speicher verwalten in WhatsApp entfernen Sie große Dateien und volle Chats, ohne Nachrichten zu löschen.",
        },
        {
          question:
            "Wie entferne ich Medien, die in WhatsApp gespeichert sind?",
          answer:
            "iOS hält den Speicher jeder App privat, daher werden Medien in WhatsApp in WhatsApp selbst entfernt, unter Einstellungen > Speicher und Daten > Speicher verwalten. Die in Ihrer Fotomediathek gespeicherten Kopien sind der Teil, bei dessen Prüfung DiskMop hilft.",
        },
        {
          question: "Ist es sicher, eine App meine Fotos lesen zu lassen?",
          answer:
            "DiskMop analysiert die Mediathek auf dem Gerät mit Apples Frameworks, hat weder Server noch Benutzerkonto, und sein Datenschutzetikett im App Store lautet „Keine Daten erfasst“.",
        },
      ],
      verdict: [
        "Schalten Sie zuerst das automatische Speichern von WhatsApp aus, sonst ist jedes Aufräumen in wenigen Wochen hinfällig. Entfernen Sie dann beide Kopien getrennt: das Album WhatsApp in Fotos und die Medien in WhatsApp über „Speicher verwalten“. Leeren Sie zum Schluss „Zuletzt gelöscht“, sonst kommt der Platz nie zurück.",
        "DiskMop für iPhone sammelt Fotos aus WhatsApp und anderen Chat-Apps in einer Liste mit dem App-Namen auf jedem Foto, findet neu komprimierte Kopien Ihrer eigenen Bilder und wählt nichts vorab aus. Der Scan ist kostenlos, bis zu fünf Fotos pro Tag lassen sich gratis löschen, und DiskMop Pro, ein Monatsabo mit 7-tägiger Gratis-Testphase, hebt das Limit auf.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Supprimer les photos WhatsApp du stockage de l'iPhone (et empêcher les nouvelles de s'accumuler)",
      metaDescription:
        "WhatsApp peut enregistrer chaque photo reçue dans la photothèque de l'iPhone, en plus de sa copie. Comment l'arrêter, faire le ménage et trouver les copies.",
      subtitle:
        "Deux copies de chaque image, un réglage activé par défaut et un nettoyage qui ne touche pas à vos discussions",
      intro: [
        "Réponse courte : si le réglage Enregistrer dans Pellicule de WhatsApp est activé (certaines versions l'appellent Enregistrer dans Photos), chaque photo reçue dans une discussion est aussi enregistrée dans l'app Photos, dans un album nommé WhatsApp. Cette copie est distincte de celle conservée dans WhatsApp : le même mème, la même carte de vœux ou la même capture transférée occupe donc deux fois de l'espace. Désactivez le réglage dans WhatsApp > Réglages > Discussions, puis faites le ménage dans ce qui a déjà été enregistré, dans l'album WhatsApp de Photos et dans l'écran Gérer le stockage de WhatsApp.",
        "Ce guide explique où se trouvent réellement les médias WhatsApp sur un iPhone, comment empêcher les nouvelles photos d'arriver dans votre photothèque, comment supprimer les deux copies sans perdre vos discussions, et comment DiskMop pour iPhone regroupe les photos enregistrées depuis WhatsApp et d'autres messageries pour les revoir au même endroit.",
      ],
      keyTakeaways: [
        "Avec Enregistrer dans Pellicule (ou Enregistrer dans Photos) activé, WhatsApp enregistre les photos et vidéos reçues dans l'app Photos en plus de conserver sa propre copie.",
        "Désactivez-le pour toutes les discussions dans WhatsApp > Réglages > Discussions, ou pour une seule en touchant son nom et en réglant Enregistrer dans Pellicule sur Jamais.",
        "Supprimer une photo dans l'app Photos ne la retire pas de la discussion, et vider une discussion dans WhatsApp ne retire pas la copie déjà enregistrée dans Photos.",
        "WhatsApp > Réglages > Stockage et données > Gérer le stockage liste les plus gros fichiers et les discussions les plus volumineuses, pour supprimer les médias dans l'app sans effacer les messages.",
        "Les photos qu'on vous renvoie par WhatsApp sont des copies recompressées de vos propres images ; une analyse de similarité visuelle les retrouve même des mois plus tard.",
        "Les photos supprimées restent 30 jours dans Supprimés récemment ; videz cet album pour récupérer l'espace.",
      ],
      dataTable: {
        caption: "Où les médias WhatsApp occupent de l'espace sur un iPhone",
        columns: ["Emplacement", "Ce qu'on y trouve", "Comment le vider"],
        rows: [
          [
            "App Photos, album WhatsApp",
            "Photos et vidéos reçues enregistrées automatiquement",
            "Supprimer dans Photos, puis vider Supprimés récemment",
          ],
          [
            "Dans WhatsApp",
            "Chaque photo, vidéo, message vocal et document de vos discussions",
            "Réglages > Stockage et données > Gérer le stockage",
          ],
          [
            "Sauvegarde iCloud de WhatsApp",
            "Les discussions et, si activé, les vidéos",
            "WhatsApp > Réglages > Discussions > Sauvegarde",
          ],
          [
            "Photothèque, copies réenregistrées",
            "Vos propres photos renvoyées, recompressées",
            "Une analyse de similarité visuelle, puis garder l'original",
          ],
        ],
      },
      howTo: {
        name: "Supprimer les photos WhatsApp du stockage de l'iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Arrêter l'enregistrement automatique",
            text: "Ouvrez WhatsApp > Réglages > Discussions et désactivez Enregistrer dans Pellicule (Enregistrer dans Photos). Pour un seul groupe très actif, ouvrez-le, touchez son nom et réglez Enregistrer dans Pellicule sur Jamais.",
          },
          {
            name: "Revoir ce qui est déjà dans Photos",
            text: "Dans Photos, ouvrez Albums et cherchez l'album WhatsApp. Dans DiskMop, la liste Enregistrées depuis les messageries regroupe les photos des albums de WhatsApp et d'autres messageries, chacune marquée du nom de son app.",
          },
          {
            name: "Supprimer les photos inutiles",
            text: "Sélectionnez-les ou balayez-les une par une et supprimez celles dont vous ne voulez pas. Rien n'est présélectionné ; les photos qui comptent restent tant que vous ne les choisissez pas.",
          },
          {
            name: "Vider les médias dans WhatsApp",
            text: "Dans WhatsApp, ouvrez Réglages > Stockage et données > Gérer le stockage. Examinez les gros fichiers et les discussions en tête de liste et supprimez-y les médias ; vos messages restent.",
          },
          {
            name: "Vider Supprimés récemment",
            text: "Les photos supprimées de la photothèque attendent 30 jours dans Photos > Albums > Supprimés récemment. Ouvrez l'album, touchez Sélectionner puis Tout supprimer pour libérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title: "Où se trouvent les médias WhatsApp sur un iPhone",
          content: [
            "WhatsApp conserve tout ce que vous envoyez et recevez dans son propre stockage : photos, vidéos, messages vocaux, autocollants et documents. Vous voyez combien cela représente dans Réglages > Général > Stockage iPhone > WhatsApp, où Documents et données est généralement le gros chiffre. Cette copie reste dans l'app, que quelque chose soit enregistré ou non dans votre photothèque.",
            "En plus, WhatsApp peut enregistrer les photos et vidéos reçues dans l'app Photos. Quand l'option est activée, il crée un album nommé WhatsApp et y ajoute les médias entrants, ainsi qu'à votre photothèque principale. Cette seconde copie n'a plus de lien avec la discussion : supprimez-la dans Photos et la discussion affiche toujours l'image ; videz la discussion et la copie reste dans Photos.",
            "Avec quelques groupes familiaux ou professionnels actifs, cela s'accumule vite. Images de bonjour, vidéos transférées, menus, mèmes et captures de captures arrivent chaque jour et, avec l'enregistrement automatique, chacune rejoint aussi votre photothèque, votre stockage Photos iCloud et chaque diaporama que l'iPhone en tire.",
          ],
        },
        {
          title:
            "Empêcher les nouvelles photos WhatsApp d'arriver dans votre photothèque",
          content: [
            "La solution commence dans WhatsApp. Ouvrez Réglages > Discussions et désactivez Enregistrer dans Pellicule ; selon la version, l'interrupteur peut s'appeler Enregistrer dans Photos. Dès lors, les médias reçus restent dans WhatsApp, et vous pouvez toujours enregistrer une photo précise en l'ouvrant et en utilisant le bouton Partager quand vous voulez vraiment la garder.",
            "Si vous voulez seulement faire taire les groupes les plus bruyants, réglez-le par discussion : ouvrez la discussion, touchez son nom en haut et passez Enregistrer dans Pellicule de Par défaut à Jamais. L'inverse fonctionne aussi : vous pouvez continuer à enregistrer depuis une ou deux personnes importantes alors que l'interrupteur général est désactivé.",
            "Jetez aussi un œil à Réglages > Stockage et données > Téléchargement auto des médias. Régler les vidéos sur Wi-Fi uniquement, ou sur Jamais, évite que les gros fichiers se téléchargent avant que vous les touchiez. Cela n'affecte pas votre photothèque, mais ralentit la croissance du stockage propre à WhatsApp.",
          ],
        },
        {
          title: "Faire le ménage sans perdre vos discussions",
          content: [
            "Pour les copies déjà présentes dans votre photothèque, commencez par l'album WhatsApp dans Photos. Touchez Sélectionner et faites glisser le doigt sur la grille pour en sélectionner beaucoup d'un coup, puis supprimez-les. Tout ce que vous supprimez part 30 jours dans Supprimés récemment, ce qui permet encore de récupérer une photo retirée par erreur.",
            "DiskMop pour iPhone simplifie les choses quand plusieurs messageries sont en jeu. Sa liste Enregistrées depuis les messageries regroupe les photos présentes dans les albums de WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger et d'autres messageries, et affiche le nom de l'app sur chaque photo. Rien n'est sélectionné à votre place : vous pouvez cocher des photos dans la grille ou ouvrir la liste dans l'onglet Balayer et décider photo par photo. La liste est construite uniquement à partir de l'appartenance aux albums, donc une photo prise avec l'appareil photo n'est jamais présentée comme venant d'une messagerie.",
            "Dans WhatsApp, Réglages > Stockage et données > Gérer le stockage affiche les fichiers de plus de 5 Mo, les éléments transférés de nombreuses fois et une liste des discussions triées par taille. Ouvrez-y une discussion pour voir ses médias en grille et supprimez ce qui ne sert plus ; les messages restent. Si votre sauvegarde iCloud de WhatsApp inclut les vidéos, la désactiver dans Réglages > Discussions > Sauvegarde réduit aussi la sauvegarde.",
          ],
        },
        {
          title: "Les copies de vos propres photos qui reviennent",
          content: [
            "Il existe une autre forme de désordre WhatsApp qu'aucun album ne montre. Quand vous partagez une photo et qu'on vous la renvoie, ou que vous enregistrez une photo de vous depuis un groupe, WhatsApp livre une copie recompressée : plus petite, un peu plus douce, avec une nouvelle date et sans les métadonnées d'origine. Pour l'app Photos, c'est une image différente, donc l'album Doublons ne la considère pas comme un doublon.",
            "Une analyse de similarité visuelle, si. DiskMop compare l'apparence des photos plutôt que leurs fichiers ou leurs dates, et effectue une passe sans limite de temps précisément pour repérer les copies revenues par WhatsApp, Instagram ou AirDrop des mois plus tard. Chaque groupe marque une image recommandée, en général la version originale, plus nette, et vous laisse décider pour les copies.",
            "Notre guide pour [trouver les photos en double et similaires sur iPhone](/blog/find-duplicate-similar-photos-iphone) explique cette analyse plus en détail. Si WhatsApp n'est qu'une partie du problème, [trier ses photos iPhone en balayant](/blog/swipe-to-delete-photos-iphone) permet de traverser rapidement le reste de la photothèque.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Supprimer des photos WhatsApp dans l'app Photos les supprime-t-il de la discussion ?",
          answer:
            "Non. La copie enregistrée dans Photos est distincte de celle conservée dans WhatsApp. La supprimer dans Photos ne touche pas la discussion, et vider la discussion laisse la copie dans Photos.",
        },
        {
          question:
            "Comment empêcher WhatsApp d'enregistrer des photos sur mon iPhone ?",
          answer:
            "Ouvrez WhatsApp > Réglages > Discussions et désactivez Enregistrer dans Pellicule (Enregistrer dans Photos dans certaines versions). Pour une seule discussion, touchez son nom et réglez Enregistrer dans Pellicule sur Jamais.",
        },
        {
          question:
            "Pourquoi WhatsApp prend-il autant de place dans Stockage iPhone ?",
          answer:
            "Le chiffre Documents et données contient chaque photo, vidéo, message vocal et document de vos discussions. Utilisez Réglages > Stockage et données > Gérer le stockage dans WhatsApp pour supprimer les gros fichiers et les discussions chargées sans effacer les messages.",
        },
        {
          question: "Comment vider les médias stockés dans WhatsApp ?",
          answer:
            "iOS garde privé le stockage de chaque app ; les médias présents dans WhatsApp se suppriment donc dans WhatsApp, sous Réglages > Stockage et données > Gérer le stockage. Les copies enregistrées dans votre photothèque sont la partie que DiskMop vous aide à revoir.",
        },
        {
          question: "Est-il sûr de laisser une app lire mes photos ?",
          answer:
            "DiskMop analyse la photothèque sur l'appareil avec les frameworks d'Apple, n'a ni serveur ni compte, et son étiquette de confidentialité sur l'App Store indique Données non collectées.",
        },
      ],
      verdict: [
        "Désactivez d'abord l'enregistrement automatique de WhatsApp, sinon chaque nettoyage est défait en quelques semaines. Supprimez ensuite les deux copies séparément : l'album WhatsApp dans Photos, et les médias dans WhatsApp via Gérer le stockage. Terminez par Supprimés récemment, sinon l'espace ne revient jamais.",
        "DiskMop pour iPhone regroupe les photos enregistrées depuis WhatsApp et d'autres messageries dans une seule liste, avec le nom de l'app sur chaque photo, retrouve les copies recompressées de vos propres images et ne présélectionne rien. L'analyse est gratuite, jusqu'à cinq photos par jour peuvent être supprimées gratuitement, et DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours, supprime la limite.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo borrar las fotos de WhatsApp del almacenamiento del iPhone (y evitar que se acumulen)",
      metaDescription:
        "WhatsApp puede guardar cada foto recibida en la fototeca del iPhone, además de su copia. Cómo evitarlo, limpiar lo acumulado y encontrar copias de tus fotos.",
      subtitle:
        "Dos copias de cada imagen, un ajuste activado por defecto y una limpieza que no toca tus chats",
      intro: [
        "Respuesta corta: si el ajuste Guardar en Carrete de WhatsApp está activado (algunas versiones lo llaman Guardar en Fotos), cada foto que recibes en un chat también se guarda en la app Fotos, en un álbum llamado WhatsApp. Esa copia es independiente de la que hay dentro de WhatsApp, así que el mismo meme, la misma felicitación o la misma captura reenviada ocupan espacio dos veces. Desactiva el ajuste en WhatsApp > Ajustes > Chats y luego limpia lo que ya se guardó, desde el álbum WhatsApp de Fotos y desde la pantalla Administrar almacenamiento de WhatsApp.",
        "Esta guía explica dónde están realmente los archivos de WhatsApp en un iPhone, cómo evitar que las fotos nuevas lleguen a tu fototeca, cómo borrar las dos copias sin perder chats y cómo DiskMop para iPhone reúne las fotos guardadas de WhatsApp y de otras apps de chat para revisarlas en un solo lugar.",
      ],
      keyTakeaways: [
        "Con Guardar en Carrete (o Guardar en Fotos) activado, WhatsApp guarda las fotos y vídeos recibidos en la app Fotos además de conservar su propia copia.",
        "Desactívalo para todos los chats en WhatsApp > Ajustes > Chats, o para uno solo tocando su nombre y poniendo Guardar en Carrete en Nunca.",
        "Borrar una foto en la app Fotos no la quita del chat, y vaciar un chat en WhatsApp no quita la copia que ya se guardó en Fotos.",
        "WhatsApp > Ajustes > Almacenamiento y datos > Administrar almacenamiento muestra los archivos más grandes y los chats que más ocupan, para borrar archivos dentro de la app sin eliminar mensajes.",
        "Las fotos que te devuelven por WhatsApp son copias recomprimidas de tus propias imágenes; un análisis de similitud visual las encuentra incluso meses después.",
        "Las fotos borradas se quedan 30 días en Eliminados recientemente; vacía ese álbum para recuperar el espacio.",
      ],
      dataTable: {
        caption: "Dónde ocupan espacio los archivos de WhatsApp en un iPhone",
        columns: ["Ubicación", "Qué hay", "Cómo limpiarlo"],
        rows: [
          [
            "App Fotos, álbum WhatsApp",
            "Fotos y vídeos recibidos guardados automáticamente",
            "Borrar en Fotos y luego vaciar Eliminados recientemente",
          ],
          [
            "Dentro de WhatsApp",
            "Cada foto, vídeo, nota de voz y documento de tus chats",
            "Ajustes > Almacenamiento y datos > Administrar almacenamiento",
          ],
          [
            "Copia de iCloud de WhatsApp",
            "Chats y, si está activado, vídeos",
            "WhatsApp > Ajustes > Chats > Copia de seguridad",
          ],
          [
            "Fototeca, copias guardadas de nuevo",
            "Tus propias fotos devueltas y recomprimidas",
            "Un análisis de similitud visual y conservar el original",
          ],
        ],
      },
      howTo: {
        name: "Borrar las fotos de WhatsApp del almacenamiento del iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Detén el guardado automático",
            text: "Abre WhatsApp > Ajustes > Chats y desactiva Guardar en Carrete (Guardar en Fotos). Para un solo grupo muy activo, ábrelo, toca su nombre y pon Guardar en Carrete en Nunca.",
          },
          {
            name: "Revisa lo que ya hay en Fotos",
            text: "En Fotos, abre Álbumes y busca el álbum WhatsApp. En DiskMop, la lista Guardadas de apps de chat reúne las fotos de los álbumes de WhatsApp y otras apps de chat, cada una con el nombre de su app.",
          },
          {
            name: "Borra las fotos que no necesitas",
            text: "Selecciónalas o revísalas deslizando una a una y borra las que no quieras. No hay nada preseleccionado; las fotos que te importan se quedan si no las eliges.",
          },
          {
            name: "Limpia los archivos dentro de WhatsApp",
            text: "En WhatsApp, abre Ajustes > Almacenamiento y datos > Administrar almacenamiento. Revisa los archivos grandes y los chats del principio de la lista y borra ahí los archivos; tus mensajes se quedan.",
          },
          {
            name: "Vacía Eliminados recientemente",
            text: "Las fotos borradas de la fototeca esperan 30 días en Fotos > Álbumes > Eliminados recientemente. Ábrelo, toca Seleccionar y Eliminar todo para liberar el espacio ahora.",
          },
        ],
      },
      sections: [
        {
          title: "Dónde están los archivos de WhatsApp en un iPhone",
          content: [
            "WhatsApp guarda todo lo que envías y recibes en su propio almacenamiento: fotos, vídeos, notas de voz, stickers y documentos. Puedes ver cuánto ocupa en Ajustes > General > Almacenamiento del iPhone > WhatsApp, donde Documentos y datos suele ser la cifra grande. Esa copia se queda en la app, se guarde o no algo en tu fototeca.",
            "Además, WhatsApp puede guardar las fotos y vídeos recibidos en la app Fotos. Con la opción activada, crea un álbum llamado WhatsApp y añade lo que llega tanto a ese álbum como a tu fototeca principal. Esa segunda copia ya no está ligada al chat: si la borras en Fotos, el chat sigue mostrando la imagen; si vacías el chat, la copia de Fotos se queda.",
            "Con unos cuantos grupos activos de familia o trabajo, esto se acumula rápido. Imágenes de buenos días, vídeos reenviados, menús, memes y capturas de capturas llegan cada día y, con el guardado automático, cada una pasa también a formar parte de tu fototeca, de tu almacenamiento de Fotos en iCloud y de cada presentación que el iPhone crea a partir de ella.",
          ],
        },
        {
          title: "Evita que las fotos nuevas de WhatsApp lleguen a tu fototeca",
          content: [
            "La solución empieza en el propio WhatsApp. Abre Ajustes > Chats y desactiva Guardar en Carrete; según la versión, el interruptor puede llamarse Guardar en Fotos. A partir de ahí, lo que recibes se queda dentro de WhatsApp y, cuando de verdad quieras conservar una foto concreta, puedes abrirla y guardarla con el botón Compartir.",
            "Si solo quieres frenar los grupos más ruidosos, ajústalo por chat: abre el chat, toca su nombre arriba y cambia Guardar en Carrete de Predeterminado a Nunca. También funciona al revés, así que puedes seguir guardando de una o dos personas importantes con el interruptor general desactivado.",
            "Merece la pena revisar también Ajustes > Almacenamiento y datos > Descarga automática. Poner los vídeos en Solo Wi-Fi, o en Nunca, evita que los archivos grandes se descarguen hasta que los toques. No afecta a tu fototeca, pero frena el crecimiento del almacenamiento propio de WhatsApp.",
          ],
        },
        {
          title: "Limpia lo acumulado sin perder chats",
          content: [
            "Para las copias que ya están en tu fototeca, empieza por el álbum WhatsApp de Fotos. Toca Seleccionar y arrastra el dedo por la cuadrícula para elegir muchas a la vez y luego bórralas. Todo lo que borras va 30 días a Eliminados recientemente, así que aún puedes recuperar una foto que quitaste por error.",
            "DiskMop para iPhone lo facilita cuando hay varias apps de chat de por medio. Su lista Guardadas de apps de chat reúne las fotos que están en los álbumes de WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger y otras apps de chat, y muestra el nombre de la app en cada foto. No se selecciona nada por ti: puedes marcar fotos en la cuadrícula o abrir la lista en la pestaña Deslizar y decidir foto a foto. La lista se forma solo a partir de la pertenencia a esos álbumes, así que una foto hecha con la cámara nunca se etiqueta como contenido de chat.",
            "Dentro de WhatsApp, Ajustes > Almacenamiento y datos > Administrar almacenamiento muestra los archivos de más de 5 MB, los reenviados muchas veces y una lista de chats ordenada por tamaño. Abre ahí un chat para ver sus archivos en cuadrícula y borra lo que no necesites; los mensajes se quedan. Si tu copia de seguridad de WhatsApp en iCloud incluye vídeos, desactivarlo en Ajustes > Chats > Copia de seguridad también la hace más pequeña.",
          ],
        },
        {
          title: "Copias de tus propias fotos que han vuelto",
          content: [
            "Hay otro tipo de desorden de WhatsApp que ningún álbum muestra. Cuando compartes una foto y alguien te la reenvía, o guardas una foto tuya desde un grupo, WhatsApp entrega una copia recomprimida: más pequeña, algo más suave, con fecha nueva y sin los metadatos originales. Para la app Fotos es una imagen distinta, así que su álbum Duplicados no la considera un duplicado.",
            "Un análisis de similitud visual sí. DiskMop compara cómo se ven las fotos y no sus archivos ni sus fechas, y hace una pasada sin límite de tiempo precisamente para cazar las copias que volvieron por WhatsApp, Instagram o AirDrop meses después. Cada grupo marca una foto sugerida, normalmente la original y más nítida, y te deja decidir sobre las copias.",
            "Nuestra guía para [encontrar fotos duplicadas y similares en iPhone](/blog/find-duplicate-similar-photos-iphone) explica ese análisis con más detalle. Si WhatsApp es solo una parte del problema, [limpiar las fotos del iPhone deslizando](/blog/swipe-to-delete-photos-iphone) es una forma rápida de recorrer el resto de la fototeca.",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿Borrar fotos de WhatsApp en la app Fotos las borra también del chat?",
          answer:
            "No. La copia guardada en Fotos es independiente de la que hay dentro de WhatsApp. Borrarla en Fotos no toca el chat, y vaciar el chat deja la copia en Fotos.",
        },
        {
          question: "¿Cómo evito que WhatsApp guarde fotos en mi iPhone?",
          answer:
            "Abre WhatsApp > Ajustes > Chats y desactiva Guardar en Carrete (Guardar en Fotos en algunas versiones). Para cambiarlo solo en un chat, toca su nombre y pon Guardar en Carrete en Nunca.",
        },
        {
          question:
            "¿Por qué WhatsApp ocupa tanto en el almacenamiento del iPhone?",
          answer:
            "La cifra de Documentos y datos incluye cada foto, vídeo, nota de voz y documento de tus chats. Usa Ajustes > Almacenamiento y datos > Administrar almacenamiento en WhatsApp para borrar archivos grandes y chats cargados sin eliminar mensajes.",
        },
        {
          question: "¿Cómo limpio los archivos guardados dentro de WhatsApp?",
          answer:
            "iOS mantiene privado el almacenamiento de cada app, así que los archivos que hay dentro de WhatsApp se borran en el propio WhatsApp, en Ajustes > Almacenamiento y datos > Administrar almacenamiento. Las copias guardadas en tu fototeca son la parte que DiskMop te ayuda a revisar.",
        },
        {
          question: "¿Es seguro dejar que una app lea mis fotos?",
          answer:
            "DiskMop analiza la fototeca en el dispositivo con los frameworks de Apple, no tiene servidor ni cuenta, y su etiqueta de privacidad en el App Store indica Datos no recopilados.",
        },
      ],
      verdict: [
        "Desactiva primero el guardado automático de WhatsApp; si no, cada limpieza se deshace en pocas semanas. Después borra las dos copias por separado: el álbum WhatsApp de Fotos y los archivos dentro de WhatsApp desde Administrar almacenamiento. Termina con Eliminados recientemente, o el espacio no volverá nunca.",
        "DiskMop para iPhone reúne en una sola lista las fotos guardadas de WhatsApp y otras apps de chat, con el nombre de la app en cada foto, encuentra copias recomprimidas de tus propias imágenes y no preselecciona nada. El análisis es gratis, se pueden borrar hasta cinco fotos al día sin coste y DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita, elimina el límite.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come eliminare le foto di WhatsApp dalla memoria dell'iPhone (e smettere di accumularle)",
      metaDescription:
        "WhatsApp può salvare ogni foto ricevuta nella libreria dell'iPhone, oltre alla sua copia. Come fermarlo, ripulire ciò che c'è e trovare le copie delle tue foto.",
      subtitle:
        "Due copie di ogni immagine, un'impostazione attiva per impostazione predefinita e una pulizia che non tocca le chat",
      intro: [
        "Risposta breve: se in WhatsApp è attiva l'opzione Salva nel Rullino (alcune versioni la chiamano Salva in Foto), ogni foto ricevuta in una chat viene salvata anche nell'app Foto, in un album chiamato WhatsApp. Questa copia è separata da quella dentro WhatsApp, quindi lo stesso meme, lo stesso biglietto di auguri o lo stesso screenshot inoltrato occupa spazio due volte. Disattiva l'opzione in WhatsApp > Impostazioni > Chat, poi ripulisci ciò che è già stato salvato, dall'album WhatsApp in Foto e dalla schermata Gestisci spazio di WhatsApp.",
        "Questa guida spiega dove si trovano davvero i media di WhatsApp su un iPhone, come impedire che le nuove foto finiscano nella libreria, come eliminare entrambe le copie senza perdere le chat e come DiskMop per iPhone raccoglie le foto salvate da WhatsApp e da altre app di chat per rivederle in un unico posto.",
      ],
      keyTakeaways: [
        "Con Salva nel Rullino (o Salva in Foto) attivo, WhatsApp salva le foto e i video ricevuti anche nell'app Foto, oltre a conservare la propria copia.",
        "Disattivalo per tutte le chat in WhatsApp > Impostazioni > Chat, oppure per una sola chat toccandone il nome e impostando Salva nel Rullino su Mai.",
        "Eliminare una foto dall'app Foto non la toglie dalla chat, e svuotare una chat in WhatsApp non toglie la copia già salvata in Foto.",
        "WhatsApp > Impostazioni > Spazio e dati > Gestisci spazio elenca i file più grandi e le chat che occupano più spazio, così puoi eliminare i media nell'app senza cancellare i messaggi.",
        "Le foto che ti rimandano su WhatsApp sono copie ricompresse delle tue immagini; un'analisi di somiglianza visiva le trova anche dopo mesi.",
        "Le foto eliminate restano 30 giorni in Eliminati di recente; svuota quell'album per recuperare lo spazio.",
      ],
      dataTable: {
        caption: "Dove i media di WhatsApp occupano spazio su un iPhone",
        columns: ["Posizione", "Cosa c'è", "Come ripulirla"],
        rows: [
          [
            "App Foto, album WhatsApp",
            "Foto e video ricevuti salvati automaticamente",
            "Elimina in Foto, poi svuota Eliminati di recente",
          ],
          [
            "Dentro WhatsApp",
            "Ogni foto, video, messaggio vocale e documento delle chat",
            "Impostazioni > Spazio e dati > Gestisci spazio",
          ],
          [
            "Backup iCloud di WhatsApp",
            "Le chat e, se attivato, i video",
            "WhatsApp > Impostazioni > Chat > Backup delle chat",
          ],
          [
            "Libreria foto, copie salvate di nuovo",
            "Le tue foto rimandate, ricompresse",
            "Un'analisi di somiglianza visiva, poi tieni l'originale",
          ],
        ],
      },
      howTo: {
        name: "Eliminare le foto di WhatsApp dalla memoria dell'iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Ferma il salvataggio automatico",
            text: "Apri WhatsApp > Impostazioni > Chat e disattiva Salva nel Rullino (Salva in Foto). Per un solo gruppo molto attivo, aprilo, tocca il nome e imposta Salva nel Rullino su Mai.",
          },
          {
            name: "Controlla cosa c'è già in Foto",
            text: "In Foto apri Album e cerca l'album WhatsApp. In DiskMop la lista Salvate dalle app di chat raccoglie le foto degli album di WhatsApp e di altre app di chat, ognuna con il nome della sua app.",
          },
          {
            name: "Elimina le foto che non ti servono",
            text: "Selezionale o scorrile una alla volta ed elimina quelle che non vuoi. Nulla è preselezionato; le foto a cui tieni restano finché non le scegli.",
          },
          {
            name: "Ripulisci i media dentro WhatsApp",
            text: "In WhatsApp apri Impostazioni > Spazio e dati > Gestisci spazio. Controlla i file grandi e le chat in cima all'elenco ed elimina lì i media; i messaggi restano.",
          },
          {
            name: "Svuota Eliminati di recente",
            text: "Le foto eliminate dalla libreria restano 30 giorni in Foto > Album > Eliminati di recente. Aprilo, tocca Seleziona ed Elimina tutto per liberare subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Dove si trovano i media di WhatsApp su un iPhone",
          content: [
            "WhatsApp conserva tutto ciò che invii e ricevi nel proprio spazio: foto, video, messaggi vocali, sticker e documenti. Puoi vedere quanto occupa in Impostazioni > Generali > Spazio iPhone > WhatsApp, dove di solito il numero grande è Documenti e dati. Questa copia resta nell'app, indipendentemente dal fatto che qualcosa venga salvato nella libreria foto.",
            "In più, WhatsApp può salvare le foto e i video ricevuti nell'app Foto. Con l'opzione attiva crea un album chiamato WhatsApp e vi aggiunge i media in arrivo, oltre che alla libreria principale. Questa seconda copia non è più legata alla chat: se la elimini in Foto, la chat mostra ancora l'immagine; se svuoti la chat, la copia in Foto resta.",
            "Con qualche gruppo attivo di famiglia o di lavoro, tutto questo si accumula in fretta. Immagini del buongiorno, video inoltrati, menu, meme e screenshot di screenshot arrivano ogni giorno e, con il salvataggio automatico, ognuno entra anche nella libreria foto, nello spazio di Foto di iCloud e in ogni presentazione che l'iPhone ne ricava.",
          ],
        },
        {
          title:
            "Impedisci che le nuove foto di WhatsApp finiscano nella libreria",
          content: [
            "La soluzione parte da WhatsApp. Apri Impostazioni > Chat e disattiva Salva nel Rullino; a seconda della versione l'interruttore può chiamarsi Salva in Foto. Da quel momento i media ricevuti restano in WhatsApp e, quando vuoi davvero tenere una foto, puoi sempre aprirla e salvarla con il pulsante Condividi.",
            "Se vuoi zittire solo i gruppi più rumorosi, impostalo per chat: apri la chat, tocca il nome in alto e cambia Salva nel Rullino da Predefinito a Mai. Funziona anche al contrario, così puoi continuare a salvare da una o due persone importanti con l'interruttore generale disattivato.",
            "Vale la pena controllare anche Impostazioni > Spazio e dati > Download automatico media. Impostare i video su Solo Wi-Fi, o su Mai, evita che i file grandi vengano scaricati finché non li tocchi. Non incide sulla libreria foto, ma rallenta la crescita dello spazio occupato da WhatsApp.",
          ],
        },
        {
          title: "Ripulisci ciò che c'è già senza perdere le chat",
          content: [
            "Per le copie già presenti nella libreria comincia dall'album WhatsApp in Foto. Tocca Seleziona e trascina il dito sulla griglia per selezionarne molte insieme, poi eliminale. Tutto ciò che elimini va per 30 giorni in Eliminati di recente, quindi puoi ancora recuperare una foto tolta per errore.",
            "DiskMop per iPhone semplifica le cose quando sono coinvolte più app di chat. La sua lista Salvate dalle app di chat raccoglie le foto presenti negli album di WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger e altre app di chat, e mostra il nome dell'app su ogni foto. Nulla viene selezionato al posto tuo: puoi spuntare le foto nella griglia oppure aprire la lista nella scheda Scorri e decidere una foto alla volta. La lista si basa solo sull'appartenenza agli album, quindi una foto scattata con la fotocamera non viene mai etichettata come contenuto di chat.",
            "In WhatsApp, Impostazioni > Spazio e dati > Gestisci spazio mostra i file più grandi di 5 MB, gli elementi inoltrati molte volte e un elenco delle chat ordinato per dimensione. Apri lì una chat per vederne i media in griglia ed elimina ciò che non serve; i messaggi restano. Se il backup iCloud di WhatsApp include i video, disattivarlo in Impostazioni > Chat > Backup delle chat riduce anche il backup.",
          ],
        },
        {
          title: "Le copie delle tue foto che sono tornate indietro",
          content: [
            "C'è un altro tipo di disordine di WhatsApp che nessun album mostra. Quando condividi una foto e qualcuno te la rimanda, o salvi una tua foto da un gruppo, WhatsApp consegna una copia ricompressa: più piccola, un po' più morbida, con una nuova data e senza i metadati originali. Per l'app Foto è un'immagine diversa, quindi l'album Duplicati non la considera un doppione.",
            "Un'analisi di somiglianza visiva sì. DiskMop confronta l'aspetto delle foto, non i file o le date, ed esegue un passaggio senza limiti di tempo proprio per scovare le copie tornate tramite WhatsApp, Instagram o AirDrop dopo mesi. Ogni gruppo segna uno scatto consigliato, di solito la versione originale e più nitida, e lascia a te la decisione sulle copie.",
            "La nostra guida per [trovare foto duplicate e simili su iPhone](/blog/find-duplicate-similar-photos-iphone) spiega questa analisi più nel dettaglio. Se WhatsApp è solo una parte del problema, [pulire le foto dell'iPhone scorrendo](/blog/swipe-to-delete-photos-iphone) è un modo rapido per passare in rassegna il resto della libreria.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Eliminare le foto di WhatsApp dall'app Foto le elimina anche dalla chat?",
          answer:
            "No. La copia salvata in Foto è separata da quella dentro WhatsApp. Eliminarla in Foto non tocca la chat, e svuotare la chat lascia la copia in Foto.",
        },
        {
          question: "Come impedisco a WhatsApp di salvare foto sull'iPhone?",
          answer:
            "Apri WhatsApp > Impostazioni > Chat e disattiva Salva nel Rullino (Salva in Foto in alcune versioni). Per cambiarlo solo in una chat, tocca il nome della chat e imposta Salva nel Rullino su Mai.",
        },
        {
          question: "Perché WhatsApp occupa così tanto in Spazio iPhone?",
          answer:
            "Il valore Documenti e dati contiene ogni foto, video, messaggio vocale e documento delle chat. Usa Impostazioni > Spazio e dati > Gestisci spazio in WhatsApp per eliminare file grandi e chat piene senza cancellare i messaggi.",
        },
        {
          question: "Come ripulisco i media salvati dentro WhatsApp?",
          answer:
            "iOS mantiene privato lo spazio di ogni app, quindi i media dentro WhatsApp si eliminano in WhatsApp stesso, in Impostazioni > Spazio e dati > Gestisci spazio. Le copie salvate nella libreria foto sono la parte che DiskMop ti aiuta a rivedere.",
        },
        {
          question: "È sicuro lasciare che un'app legga le mie foto?",
          answer:
            "DiskMop analizza la libreria sul dispositivo con i framework di Apple, non ha server né account e la sua etichetta sulla privacy nell'App Store indica Dati non raccolti.",
        },
      ],
      verdict: [
        "Disattiva prima il salvataggio automatico di WhatsApp, altrimenti ogni pulizia viene vanificata in poche settimane. Poi elimina le due copie separatamente: l'album WhatsApp in Foto e i media dentro WhatsApp con Gestisci spazio. Concludi con Eliminati di recente, altrimenti lo spazio non torna mai.",
        "DiskMop per iPhone raccoglie in un'unica lista le foto salvate da WhatsApp e da altre app di chat, con il nome dell'app su ogni foto, trova le copie ricompresse delle tue immagini e non preseleziona nulla. L'analisi è gratuita, si possono eliminare gratis fino a cinque foto al giorno e DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita, rimuove il limite.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como apagar as fotos do WhatsApp do armazenamento do iPhone (e parar de acumular novas)",
      metaDescription:
        "O WhatsApp pode salvar cada foto recebida na fototeca do iPhone, além da própria cópia. Como impedir, limpar o que já está lá e achar cópias das suas fotos.",
      subtitle:
        "Duas cópias de cada imagem, um ajuste ligado por padrão e uma limpeza que não mexe nas suas conversas",
      intro: [
        "Resposta curta: se o ajuste Salvar no Rolo da Câmera do WhatsApp estiver ligado (algumas versões chamam de Salvar em Fotos), cada foto que você recebe numa conversa também é salva no app Fotos, num álbum chamado WhatsApp. Essa cópia é separada da que fica dentro do WhatsApp, então o mesmo meme, o mesmo cartão de bom dia ou a mesma captura encaminhada ocupa espaço duas vezes. Desligue o ajuste em WhatsApp > Configurações > Conversas e depois limpe o que já foi salvo, no álbum WhatsApp do Fotos e na tela Gerenciar armazenamento do próprio WhatsApp.",
        "Este guia explica onde a mídia do WhatsApp fica de verdade no iPhone, como impedir que fotos novas caiam na sua fototeca, como apagar as duas cópias sem perder conversas e como o DiskMop para iPhone reúne as fotos salvas do WhatsApp e de outros apps de conversa para você revisar tudo num só lugar.",
      ],
      keyTakeaways: [
        "Com Salvar no Rolo da Câmera (ou Salvar em Fotos) ligado, o WhatsApp salva as fotos e os vídeos recebidos no app Fotos, além de manter a própria cópia.",
        "Desligue para todas as conversas em WhatsApp > Configurações > Conversas, ou para uma só tocando no nome dela e escolhendo Nunca em Salvar no Rolo da Câmera.",
        "Apagar uma foto no app Fotos não a remove da conversa, e limpar uma conversa no WhatsApp não remove a cópia que já foi salva no Fotos.",
        "WhatsApp > Configurações > Armazenamento e dados > Gerenciar armazenamento lista os maiores arquivos e as conversas que mais ocupam espaço, para apagar mídia no app sem apagar mensagens.",
        "As fotos que voltam para você pelo WhatsApp são cópias recomprimidas das suas próprias imagens; uma análise de semelhança visual as encontra mesmo meses depois.",
        "As fotos apagadas ficam 30 dias em Apagados Recentemente; esvazie esse álbum para recuperar o espaço.",
      ],
      dataTable: {
        caption: "Onde a mídia do WhatsApp ocupa espaço no iPhone",
        columns: ["Local", "O que tem lá", "Como limpar"],
        rows: [
          [
            "App Fotos, álbum WhatsApp",
            "Fotos e vídeos recebidos salvos automaticamente",
            "Apagar no Fotos e depois esvaziar Apagados Recentemente",
          ],
          [
            "Dentro do WhatsApp",
            "Cada foto, vídeo, áudio e documento das suas conversas",
            "Configurações > Armazenamento e dados > Gerenciar armazenamento",
          ],
          [
            "Backup do WhatsApp no iCloud",
            "As conversas e, se ativado, os vídeos",
            "WhatsApp > Configurações > Conversas > Backup de conversas",
          ],
          [
            "Fototeca, cópias salvas de novo",
            "Suas próprias fotos devolvidas e recomprimidas",
            "Uma análise de semelhança visual e manter o original",
          ],
        ],
      },
      howTo: {
        name: "Apagar as fotos do WhatsApp do armazenamento do iPhone",
        totalTime: "PT15M",
        steps: [
          {
            name: "Pare o salvamento automático",
            text: "Abra WhatsApp > Configurações > Conversas e desligue Salvar no Rolo da Câmera (Salvar em Fotos). Para um único grupo muito movimentado, abra-o, toque no nome e escolha Nunca em Salvar no Rolo da Câmera.",
          },
          {
            name: "Revise o que já está no Fotos",
            text: "No Fotos, abra Álbuns e procure o álbum WhatsApp. No DiskMop, a lista Salvas de apps de conversa reúne as fotos dos álbuns do WhatsApp e de outros apps de conversa, cada uma com o nome do app.",
          },
          {
            name: "Apague as fotos de que não precisa",
            text: "Selecione-as ou passe por elas deslizando uma a uma e apague as que não quiser. Nada vem pré-selecionado; as fotos importantes ficam, a menos que você as escolha.",
          },
          {
            name: "Limpe a mídia dentro do WhatsApp",
            text: "No WhatsApp, abra Configurações > Armazenamento e dados > Gerenciar armazenamento. Revise os arquivos grandes e as conversas do topo da lista e apague a mídia ali; suas mensagens ficam.",
          },
          {
            name: "Esvazie Apagados Recentemente",
            text: "As fotos apagadas da fototeca esperam 30 dias em Fotos > Álbuns > Apagados Recentemente. Abra o álbum, toque em Selecionar e Apagar Tudo para liberar o espaço agora.",
          },
        ],
      },
      sections: [
        {
          title: "Onde a mídia do WhatsApp fica no iPhone",
          content: [
            "O WhatsApp guarda tudo o que você envia e recebe no próprio armazenamento: fotos, vídeos, áudios, figurinhas e documentos. Dá para ver quanto isso ocupa em Ajustes > Geral > Armazenamento do iPhone > WhatsApp, onde Documentos e Dados costuma ser o número grande. Essa cópia fica no app, independentemente de algo ser salvo ou não na sua fototeca.",
            "Além disso, o WhatsApp pode salvar fotos e vídeos recebidos no app Fotos. Com a opção ligada, ele cria um álbum chamado WhatsApp e adiciona a mídia recebida tanto a esse álbum quanto à fototeca principal. Essa segunda cópia não tem mais ligação com a conversa: apague no Fotos e a conversa continua mostrando a imagem; limpe a conversa e a cópia do Fotos continua lá.",
            "Com alguns grupos ativos de família ou trabalho, isso se acumula rápido. Imagens de bom dia, vídeos encaminhados, cardápios, memes e capturas de capturas chegam todo dia e, com o salvamento automático, cada um também passa a fazer parte da sua fototeca, do armazenamento do Fotos do iCloud e de cada apresentação que o iPhone cria a partir dela.",
          ],
        },
        {
          title: "Impeça que fotos novas do WhatsApp caiam na sua fototeca",
          content: [
            "A solução começa no próprio WhatsApp. Abra Configurações > Conversas e desligue Salvar no Rolo da Câmera; dependendo da versão, o botão pode se chamar Salvar em Fotos. A partir daí, a mídia recebida fica dentro do WhatsApp e, quando quiser mesmo guardar uma foto específica, você ainda pode abri-la e salvá-la pelo botão Compartilhar.",
            "Se quiser calar só os grupos mais barulhentos, ajuste por conversa: abra a conversa, toque no nome no topo e mude Salvar no Rolo da Câmera de Padrão para Nunca. O contrário também funciona: com o botão geral desligado, você continua salvando de uma ou duas pessoas importantes.",
            "Vale olhar também Configurações > Armazenamento e dados > Download automático de mídia. Deixar os vídeos em Somente Wi-Fi, ou em Nunca, evita que arquivos grandes sejam baixados antes de você tocar neles. Isso não afeta a sua fototeca, mas desacelera o crescimento do armazenamento do próprio WhatsApp.",
          ],
        },
        {
          title: "Limpe o que já está lá sem perder conversas",
          content: [
            "Para as cópias que já estão na sua fototeca, comece pelo álbum WhatsApp no Fotos. Toque em Selecionar e arraste o dedo pela grade para selecionar várias de uma vez e depois apague. Tudo o que você apaga vai para Apagados Recentemente por 30 dias, então ainda dá para recuperar uma foto removida por engano.",
            "O DiskMop para iPhone facilita quando há vários apps de conversa envolvidos. A lista Salvas de apps de conversa reúne as fotos que estão nos álbuns do WhatsApp, WhatsApp Business, Telegram, Signal, Viber, Messenger e outros apps de conversa, e mostra o nome do app em cada foto. Nada é selecionado por você: dá para marcar fotos na grade ou abrir a lista na aba Deslizar e decidir uma foto de cada vez. A lista é montada só a partir da presença nesses álbuns, então uma foto tirada com a câmera nunca é marcada como mídia de conversa.",
            "Dentro do WhatsApp, Configurações > Armazenamento e dados > Gerenciar armazenamento mostra arquivos maiores que 5 MB, itens encaminhados com frequência e uma lista de conversas ordenada por tamanho. Abra uma conversa ali para ver a mídia em grade e apague o que não precisar; as mensagens ficam. Se o seu backup do WhatsApp no iCloud inclui vídeos, desligar isso em Configurações > Conversas > Backup de conversas também deixa o backup menor.",
          ],
        },
        {
          title: "Cópias das suas próprias fotos que voltaram",
          content: [
            "Existe mais um tipo de bagunça do WhatsApp que nenhum álbum mostra. Quando você compartilha uma foto e alguém a devolve, ou você salva uma foto sua de um grupo, o WhatsApp entrega uma cópia recomprimida: menor, um pouco mais suave, com data nova e sem os metadados originais. Para o app Fotos, é uma imagem diferente, então o álbum Duplicatas não a trata como duplicata.",
            "Uma análise de semelhança visual trata. O DiskMop compara a aparência das fotos, não os arquivos nem as datas, e faz uma passada sem limite de tempo justamente para pegar cópias que voltaram pelo WhatsApp, Instagram ou AirDrop meses depois. Cada grupo marca uma foto sugerida, normalmente a original e mais nítida, e deixa as cópias para você decidir.",
            "Nosso guia para [encontrar fotos duplicadas e semelhantes no iPhone](/blog/find-duplicate-similar-photos-iphone) explica essa análise em mais detalhes. Se o WhatsApp é só parte do problema, [limpar as fotos do iPhone deslizando](/blog/swipe-to-delete-photos-iphone) é um jeito rápido de passar pelo resto da fototeca.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Apagar fotos do WhatsApp no app Fotos apaga também da conversa?",
          answer:
            "Não. A cópia salva no Fotos é separada da que fica dentro do WhatsApp. Apagar no Fotos não mexe na conversa, e limpar a conversa deixa a cópia no Fotos.",
        },
        {
          question: "Como impedir que o WhatsApp salve fotos no meu iPhone?",
          answer:
            "Abra WhatsApp > Configurações > Conversas e desligue Salvar no Rolo da Câmera (Salvar em Fotos em algumas versões). Para mudar só numa conversa, toque no nome dela e escolha Nunca em Salvar no Rolo da Câmera.",
        },
        {
          question:
            "Por que o WhatsApp ocupa tanto no Armazenamento do iPhone?",
          answer:
            "O número de Documentos e Dados inclui cada foto, vídeo, áudio e documento das suas conversas. Use Configurações > Armazenamento e dados > Gerenciar armazenamento no WhatsApp para apagar arquivos grandes e conversas pesadas sem apagar mensagens.",
        },
        {
          question: "Como limpo a mídia guardada dentro do WhatsApp?",
          answer:
            "O iOS mantém privado o armazenamento de cada app, então a mídia dentro do WhatsApp é apagada no próprio WhatsApp, em Configurações > Armazenamento e dados > Gerenciar armazenamento. As cópias salvas na sua fototeca são a parte que o DiskMop ajuda você a revisar.",
        },
        {
          question: "É seguro deixar um app ler minhas fotos?",
          answer:
            "O DiskMop analisa a fototeca no aparelho com os frameworks da Apple, não tem servidor nem conta, e o rótulo de privacidade na App Store diz Dados Não Coletados.",
        },
      ],
      verdict: [
        "Desligue primeiro o salvamento automático do WhatsApp; senão, cada limpeza se desfaz em poucas semanas. Depois apague as duas cópias separadamente: o álbum WhatsApp no Fotos e a mídia dentro do WhatsApp pelo Gerenciar armazenamento. Termine com Apagados Recentemente, ou o espaço nunca volta.",
        "O DiskMop para iPhone reúne numa só lista as fotos salvas do WhatsApp e de outros apps de conversa, com o nome do app em cada foto, encontra cópias recomprimidas das suas próprias imagens e não pré-seleciona nada. A análise é grátis, até cinco fotos por dia podem ser apagadas sem custo e o DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito, remove o limite.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "WhatsApp の写真を iPhone のストレージから削除する方法（これ以上溜めないために）",
      metaDescription:
        "WhatsApp は受け取った写真をアプリ内とは別に iPhone のライブラリにも保存できます。保存を止める方法、溜まった写真の片付け方、自分の写真のコピーの見つけ方を解説します。",
      subtitle:
        "1 枚の画像に 2 つのコピー、初期状態でオンの設定、そしてチャットに影響しない片付け方",
      intro: [
        "結論から言うと、WhatsApp の「カメラロールに保存」（バージョンによっては「写真に保存」）がオンだと、チャットで受け取った写真はすべて写真アプリの「WhatsApp」というアルバムにも保存されます。このコピーは WhatsApp 内のものとは別なので、同じミーム、同じあいさつ画像、転送されてきた同じスクリーンショットが 2 回分の容量を使います。WhatsApp >「設定」>「チャット」でこの設定をオフにしたうえで、すでに保存されたものを、写真アプリの WhatsApp アルバムと WhatsApp の「ストレージを管理」の両方から片付けましょう。",
        "このガイドでは、WhatsApp のメディアが iPhone のどこにあるのか、新しい写真がライブラリに入らないようにする方法、チャットを失わずに 2 つのコピーを削除する方法、そして iPhone 版 DiskMop が WhatsApp やほかのチャットアプリから保存された写真を 1 か所にまとめて確認できるようにするしくみを解説します。",
      ],
      keyTakeaways: [
        "「カメラロールに保存」（または「写真に保存」）がオンだと、WhatsApp は受け取った写真やビデオをアプリ内に保持するのに加えて、写真アプリにも保存します。",
        "すべてのチャットでオフにするには WhatsApp >「設定」>「チャット」から、特定のチャットだけならチャット名をタップして「カメラロールに保存」を「しない」にします。",
        "写真アプリで写真を削除してもチャットからは消えず、WhatsApp でチャットを消去しても写真アプリに保存済みのコピーは残ります。",
        "WhatsApp >「設定」>「ストレージとデータ」>「ストレージを管理」では、大きなファイルや容量の多いチャットが一覧でき、メッセージを消さずにアプリ内のメディアを削除できます。",
        "WhatsApp で送り返されてきた写真は、自分の写真を再圧縮したコピーです。視覚的な類似性スキャンなら数か月後でも見つけられます。",
        "削除した写真は「最近削除した項目」に 30 日間残ります。容量を取り戻すには、そのアルバムを空にしてください。",
      ],
      dataTable: {
        caption: "iPhone で WhatsApp のメディアが容量を使っている場所",
        columns: ["場所", "中身", "片付け方"],
        rows: [
          [
            "写真アプリの WhatsApp アルバム",
            "自動保存された受信写真・ビデオ",
            "写真アプリで削除し、「最近削除した項目」を空にする",
          ],
          [
            "WhatsApp の内部",
            "チャット内のすべての写真、ビデオ、ボイスメッセージ、書類",
            "「設定」>「ストレージとデータ」>「ストレージを管理」",
          ],
          [
            "WhatsApp の iCloud バックアップ",
            "チャットと、有効ならビデオ",
            "WhatsApp >「設定」>「チャット」>「チャットのバックアップ」",
          ],
          [
            "写真ライブラリ内の再保存コピー",
            "送り返されて再圧縮された自分の写真",
            "視覚的な類似性スキャンでオリジナルを残す",
          ],
        ],
      },
      howTo: {
        name: "WhatsApp の写真を iPhone のストレージから削除する",
        totalTime: "PT15M",
        steps: [
          {
            name: "自動保存を止める",
            text: "WhatsApp >「設定」>「チャット」を開き、「カメラロールに保存」（「写真に保存」）をオフにします。にぎやかなグループだけ止めたい場合は、そのグループを開いて名前をタップし、「カメラロールに保存」を「しない」にします。",
          },
          {
            name: "写真アプリにすでにあるものを確認する",
            text: "写真アプリでアルバムを開き、WhatsApp アルバムを探します。DiskMop の「チャットアプリから保存」リストには、WhatsApp やほかのチャットアプリのアルバムにある写真が、アプリ名付きでまとめて表示されます。",
          },
          {
            name: "不要な写真を削除する",
            text: "写真を選択するか、スワイプで 1 枚ずつ確認して、いらないものを削除します。事前選択はないので、大切な写真は自分で選ばない限り残ります。",
          },
          {
            name: "WhatsApp 内のメディアを片付ける",
            text: "WhatsApp で「設定」>「ストレージとデータ」>「ストレージを管理」を開きます。大きなファイルやリスト上位のチャットを確認してメディアを削除します。メッセージは残ります。",
          },
          {
            name: "「最近削除した項目」を空にする",
            text: "ライブラリから削除した写真は、写真 > アルバム > 最近削除した項目に 30 日間残ります。開いて「選択」>「すべて削除」をタップすれば、すぐに容量が空きます。",
          },
        ],
      },
      sections: [
        {
          title: "iPhone のどこに WhatsApp のメディアがあるのか",
          content: [
            "WhatsApp は送受信したものをすべて独自のストレージに保存しています。写真、ビデオ、ボイスメッセージ、ステッカー、書類です。どれくらいの量かは「設定」>「一般」>「iPhone ストレージ」>「WhatsApp」で確認でき、たいてい「書類とデータ」が大きな数字になっています。このコピーは、写真ライブラリに何かを保存するかどうかに関係なくアプリ内に残ります。",
            "さらに WhatsApp は、受け取った写真やビデオを写真アプリにも保存できます。オプションがオンだと「WhatsApp」というアルバムを作り、受信したメディアをそのアルバムとメインのライブラリの両方に追加します。この 2 つ目のコピーはもうチャットとはつながっていません。写真アプリで削除してもチャットには画像が表示され続け、チャットを消去しても写真アプリのコピーは残ります。",
            "家族や仕事の活発なグループがいくつかあるだけで、これはすぐに溜まります。おはよう画像、転送された動画、メニュー、ミーム、スクリーンショットのスクリーンショットが毎日届き、自動保存がオンならそのひとつひとつが写真ライブラリ、iCloud 写真のストレージ、そして iPhone が作るスライドショーの一部になっていきます。",
          ],
        },
        {
          title: "新しい WhatsApp の写真をライブラリに入れない",
          content: [
            "対策は WhatsApp 自体から始まります。「設定」>「チャット」を開き、「カメラロールに保存」をオフにします。バージョンによってはスイッチの名前が「写真に保存」になっています。以後、受け取ったメディアは WhatsApp の中にとどまり、本当に残したい写真だけを開いて共有ボタンから保存できます。",
            "特にうるさいグループだけ止めたいなら、チャットごとに設定します。チャットを開いて上部の名前をタップし、「カメラロールに保存」を「デフォルト」から「しない」に変えます。逆も可能なので、全体のスイッチをオフにしたまま、大切な 1、2 人からの写真だけ保存し続けることもできます。",
            "「設定」>「ストレージとデータ」>「メディアの自動ダウンロード」も確認しておきましょう。ビデオを「Wi-Fi のみ」または「しない」にすれば、大きなファイルはタップするまでダウンロードされません。写真ライブラリには影響しませんが、WhatsApp 自身のストレージが増えるペースを抑えられます。",
          ],
        },
        {
          title: "チャットを失わずに溜まった分を片付ける",
          content: [
            "ライブラリにすでにあるコピーは、写真アプリの WhatsApp アルバムから始めます。「選択」をタップしてグリッドを指でなぞれば一度に多数を選べるので、そのまま削除します。削除したものは 30 日間「最近削除した項目」に入るので、間違えて消した写真も復元できます。",
            "複数のチャットアプリを使っているなら、iPhone 版 DiskMop を使うと楽になります。「チャットアプリから保存」リストは、WhatsApp、WhatsApp Business、Telegram、Signal、Viber、Messenger などのチャットアプリのアルバムにある写真を集め、各写真にアプリ名を表示します。勝手に選択されるものはなく、グリッドでチェックを付けても、「スワイプ」タブでリストを開いて 1 枚ずつ判断してもかまいません。リストはアルバムへの所属だけをもとに作られるので、カメラで撮った写真がチャットのメディアとして表示されることはありません。",
            "WhatsApp の「設定」>「ストレージとデータ」>「ストレージを管理」では、5 MB を超えるファイル、何度も転送されたメディア、サイズ順のチャット一覧が表示されます。そこからチャットを開くとメディアがグリッドで表示されるので、不要なものを削除します。メッセージ自体は残ります。WhatsApp の iCloud バックアップにビデオが含まれている場合は、「設定」>「チャット」>「チャットのバックアップ」でそれをオフにするとバックアップも小さくなります。",
          ],
        },
        {
          title: "送り返されてきた自分の写真のコピー",
          content: [
            "どのアルバムにも表示されない WhatsApp の散らかりがもうひとつあります。写真を共有して誰かが送り返してきたときや、グループから自分の写真を保存したとき、WhatsApp が届けるのは再圧縮されたコピーです。サイズが小さく、少し甘くなり、日付が新しく、元のメタデータもありません。写真アプリにとっては別の画像なので、「重複項目」アルバムは重複として扱いません。",
            "視覚的な類似性スキャンなら扱えます。DiskMop はファイルや日付ではなく写真の見た目を比較し、数か月後に WhatsApp、Instagram、AirDrop 経由で戻ってきたコピーを見つけるために、時間制限なしの比較もわざわざ行います。各グループでは、通常はオリジナルでよりシャープなものが提案されたベストショットとして印が付き、コピーをどうするかはあなたが決めます。",
            "このスキャンの詳細は、[iPhone で重複写真と類似写真を見つける方法](/blog/find-duplicate-similar-photos-iphone)で解説しています。WhatsApp が問題の一部にすぎないなら、[スワイプで iPhone の写真を整理する方法](/blog/swipe-to-delete-photos-iphone)で残りのライブラリもすばやく見直せます。",
          ],
        },
      ],
      faq: [
        {
          question:
            "写真アプリで WhatsApp の写真を削除すると、チャットからも消えますか？",
          answer:
            "いいえ。写真アプリに保存されたコピーは WhatsApp 内のものとは別です。写真アプリで削除してもチャットには影響せず、チャットを消去しても写真アプリのコピーは残ります。",
        },
        {
          question: "WhatsApp が iPhone に写真を保存しないようにするには？",
          answer:
            "WhatsApp >「設定」>「チャット」を開き、「カメラロールに保存」（バージョンによっては「写真に保存」）をオフにします。特定のチャットだけ変えるなら、チャット名をタップして「カメラロールに保存」を「しない」にします。",
        },
        {
          question:
            "iPhone ストレージで WhatsApp がこんなに大きいのはなぜですか？",
          answer:
            "「書類とデータ」には、チャット内のすべての写真、ビデオ、ボイスメッセージ、書類が含まれます。WhatsApp の「設定」>「ストレージとデータ」>「ストレージを管理」で、メッセージを消さずに大きなファイルや容量の多いチャットを片付けられます。",
        },
        {
          question: "WhatsApp の中に保存されたメディアはどう片付けますか？",
          answer:
            "iOS は各アプリのストレージを非公開に保つため、WhatsApp 内のメディアは WhatsApp 自体の「設定」>「ストレージとデータ」>「ストレージを管理」で削除します。写真ライブラリに保存されたコピーは、DiskMop で確認を手伝える部分です。",
        },
        {
          question: "アプリに写真を読み取らせても安全ですか？",
          answer:
            "DiskMop は Apple のフレームワークを使って端末上でライブラリを分析し、サーバーもアカウントも持たず、App Store のプライバシーラベルには「データの収集なし」と記載されています。",
        },
      ],
      verdict: [
        "まず WhatsApp の自動保存をオフにしましょう。そうしないと、片付けても数週間で元に戻ってしまいます。そのうえで 2 つのコピーを別々に片付けます。写真アプリの WhatsApp アルバムと、「ストレージを管理」から WhatsApp 内のメディアです。最後に「最近削除した項目」を空にしないと、容量は戻りません。",
        "iPhone 版 DiskMop は、WhatsApp やほかのチャットアプリから保存された写真を、アプリ名付きでひとつのリストにまとめ、自分の写真の再圧縮コピーを見つけ、何も事前選択しません。スキャンは無料、1 日 5 枚までは無料で削除でき、7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro なら制限がなくなります。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
