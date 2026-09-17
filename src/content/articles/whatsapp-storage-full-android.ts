import type { Article } from '../types';

export const whatsappStorageFullAndroid: Article = {
  slug: 'whatsapp-storage-full-android',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-17',
  readingTime: 7,
  content: {
    tr: {
      title: 'WhatsApp Android\'de Çok Yer Kaplıyor: Sohbetleri Kaybetmeden Medyayı Temizleyin',
      metaDescription:
        'WhatsApp Android\'de sessizce 10–20 GB\'a ulaşabilir. Tek bir sohbeti silmeden fotoğraf, video ve sesli mesajları temizleme ve yeniden dolmasını önleme yolları.',
      subtitle: 'Depolamayı yönet, otomatik indirme ayarları ve WhatsApp\'ın telefonda bıraktığı klasörler',
      intro: [
        'Kısa cevap: WhatsApp büyür, çünkü aldığınız her fotoğrafı, videoyu, sesli mesajı ve belgeyi indirir ve telefonda sonsuza dek saklar. Bu dosyaları tek bir mesaj bile silmeden WhatsApp > Ayarlar > Depolama ve veriler > Depolamayı yönet ekranından kaldırabilir, ilgilenmediğiniz gruplar için medyanın otomatik indirilmesini kapatarak büyümeyi durdurabilirsiniz.',
        'Bu rehber ilgili ekranları tek tek gösterir, medyası silindiğinde bir sohbete ne olduğunu açıklar, Telegram\'daki karşılık gelen ayarları ele alır ve dosyaların telefonda gerçekte bulunduğu klasörü işaret eder.',
      ],
      keyTakeaways: [
        'WhatsApp > Ayarlar > Depolama ve veriler > Depolamayı yönet ekranı en büyük sohbetleri ve 5 MB\'tan büyük her dosyayı listeler; buradan silmek dosyaları kaldırır ama mesajları korur.',
        'Telefonunuzdaki medyayı silmek karşı taraftan silmez; yalnızca sizdeki yerel kopyayı kaldırır.',
        'Otomatik indirme varsayılan olarak mobil veride fotoğraflar, Wi-Fi\'da ise her şey için açıktır; kapatmak sohbetleri etkilemeden büyümeyi durdurur.',
        'WhatsApp\'ın önbelleğini temizlemek zararsızdır, ama Depolamayı temizle (Verileri temizle) oturumunuzu kapatır ve sohbetleri geri getirmek için yedek gerektirir.',
        'Android 11 ve sonrasında medya Android/media/com.whatsapp klasöründedir; çoğu dosya yöneticisi bunu gösterir ama tam olarak yönetemez; Ayarlar > Depolama bunu Uygulamalar ya da Diğer altında sayar.',
        'Telegram kendi önbelleğini tutar; Ayarlar > Veri ve Depolama > Depolama Kullanımı ekranından silebilir ve medyanın ne kadar süre saklanacağını belirleyebilirsiniz.',
      ],
      howTo: {
        name: 'Sohbetleri silmeden Android\'de WhatsApp alanı boşaltma',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Depolamayı yönet ekranını açın',
            text: 'WhatsApp\'ta üç noktaya dokunun > Ayarlar > Depolama ve veriler > Depolamayı yönet. Üst kısımda WhatsApp\'ın telefonda ne kadar yer kapladığı ve iki kısayol görünür: 5 MB\'tan büyük ve Çok kez iletildi.',
          },
          {
            name: 'Önce büyük dosyaları silin',
            text: '5 MB\'tan büyük ekranını açın, boyuta göre sıralayın, ihtiyaç duymadıklarınızı seçin ve çöp kutusu simgesine dokunun. Alanın büyük kısmı genelde uzun videolar ve iletilmiş kliplerdir. Mesajlar sohbetlerde kalır.',
          },
          {
            name: 'Medyayı sohbet sohbet temizleyin',
            text: 'Depolamayı yönet ekranına dönün; sohbetler boyuta göre listelenir. Bir grubu açın, Tümünü seç\'e dokunun ya da öğeleri tek tek seçin ve silin. İşaretlediklerinizi korumak için Yıldızlı seçeneğinin işaretini kaldırın.',
          },
          {
            name: 'Otomatik indirmeyi kapatın',
            text: 'Ayarlar > Depolama ve veriler ekranında, Medyanın otomatik indirilmesi altında Mobil veri kullanırken seçeneğini Medya yok, Wi-Fi\'a bağlıyken seçeneğini Yalnızca fotoğraflar ya da Medya yok olarak ayarlayın. Dokunduğunuz medya yine indirilir.',
          },
          {
            name: 'Aynısını Telegram\'da yapın',
            text: 'Telegram > Ayarlar > Veri ve Depolama > Depolama Kullanımı ekranı önbelleği sohbete ve türe göre gösterir; Önbelleği temizle\'ye dokunun. Kendi kendine temizlenmesi için Medyayı Sakla ayarını 1 hafta ya da 1 ay yapın.',
          },
          {
            name: 'Telefon genelindeki görünüme bakın',
            text: 'Disk Mop\'un Android sürümü WhatsApp ve Telegram medyasını türe ve boyuta göre tek ekranda listeler; böylece iki uygulamanın fotoğraflarını, videolarını, sesli mesajlarını ve belgelerini bir arada görüp artık gerekmeyenleri silebilirsiniz.',
          },
        ],
      },
      sections: [
        {
          title: 'WhatsApp Neden 20 GB\'a Ulaşır',
          content: [
            'WhatsApp varsayılan olarak mobil veride fotoğrafları, Wi-Fi\'da ise fotoğraf, ses, video ve belgeleri otomatik indirir. Birkaç aktif grupta bu, bakmış olun ya da olmayın her caps\'in, iletilmiş videonun ve sesli mesajın telefona inmesi demektir. Elli üyeli bir grup günde kolayca 100 MB üretir ve WhatsApp kendi başına hiçbir şeyi silmez.',
            'İkinci çarpan, varsayılan olarak açık olan ve indirilen her dosyayı galeride gösteren Medya görünürlüğü ayarıdır. Fotoğraflar böylece Google Fotoğraflar\'a yedeklenir ve bazı galeri uygulamalarında telefonda iki kez sayılır. İki yıllık sıradan kullanım WhatsApp\'ın telefondaki en büyük uygulama olmasına yeter; Ayarlar > Depolama ekranında 10–20 GB görmek olağandır.',
            'Bunların hiçbiri bir hata değildir ve hiçbiri sohbet silmeyi gerektirmez. Mesajlar küçücüktür; ağırlık medyadadır ve WhatsApp depolama araçlarında bu ikisini net biçimde ayırır.',
          ],
        },
        {
          title: 'Sohbetlere Dokunmadan Medyayı Temizlemek',
          content: [
            'Depolamayı yönet (Ayarlar > Depolama ve veriler > Depolamayı yönet) tam olarak bunun için tasarlanmıştır. 5 MB\'tan büyük görünümü tüm sohbetlerdeki büyük dosyaları boyuta ve tarihe göre sıralanabilir biçimde listeler ve toplu silmeye izin verir. Çok kez iletildi görünümü, size birkaç gruptan ulaşan viral klipleri bir araya toplar. Bunların altında sohbetler boyuta göre sıralanır; böylece ağır grupları tek tek temizleyebilirsiniz.',
            'Burada bir dosyayı sildiğinizde, onu taşıyan mesaj sohbette bir yer tutucuyla kalır. Gönderen dosyayı hâlâ tutuyorsa çoğu zaman daha sonra mesajdan yeniden indirebilirsiniz, ama buna güvenmeyin; silmeyi kalıcı sayın ve saklamak istediklerinizi önce yedekleyin. Yıldızlı mesajlar hariç tutulabilir, böylece favorileriniz toplu temizlikten etkilenmez.',
            'Kaçınılması gereken iki şey var. Android\'in uygulama ayarlarındaki Önbelleği temizle güvenlidir ama nadiren çok yer açar. WhatsApp uygulamasında Depolamayı temizle (ya da Verileri temizle) ise bir temizlik değildir: yerel sohbet geçmişinizi kaldırır ve oturumunuzu kapatır; sohbetleri geri almak için Google Drive yedeğine ihtiyacınız olur.',
          ],
        },
        {
          title: 'Yeniden Olmasını Önlemek',
          content: [
            'Kalıcı çözüm Ayarlar > Depolama ve veriler ekranında, Medyanın otomatik indirilmesi altındadır. Üç satır mobil veride, Wi-Fi\'da ve dolaşımda neyin indirileceğini belirler. Mobil veriyi Medya yok, Wi-Fi\'ı Yalnızca fotoğraflar yapmak telefonun hiç istemediğiniz videolarla dolmasını engeller; dokunduğunuz her şey yine istek üzerine indirilir.',
            'Ayarlar > Sohbetler altındaki Medya görünürlüğü, indirilen dosyaların galeride görünüp görünmeyeceğine karar verir. Yoğun gruplar için kapatmak caps\'leri fotoğraf kitaplığınızdan ve bulut yedeğinizden uzak tutar. Tek tek sohbetler için aynı anahtar sohbetin bilgi sayfasındadır.',
            'Telegram farklı çalışır: görüntülediğiniz her şeyin önbelleğini tutar ve bunu sınırlayabilir. Ayarlar > Veri ve Depolama > Depolama Kullanımı önbelleği sohbete ve türe göre gösterir; Medyayı Sakla ile 3 gün, 1 hafta, 1 ay ya da sonsuza dek seçebilirsiniz; bu süre dolunca Telegram yerel kopyaları siler, sunucularındakileri korur. Aynı ekrandaki Azami önbellek boyutu kaydırıcısı toplamı sınırlar.',
          ],
        },
        {
          title: 'Dosyalar Telefonda Gerçekte Nerede',
          content: [
            'Android 11 ve sonrasında WhatsApp medyayı Android/media/com.whatsapp/WhatsApp/Media altında; resimler, video, ses, sesli mesajlar, belgeler, çıkartmalar ve durumlar için ayrı klasörlerde saklar. Eski kurulumlar hâlâ dâhili depolamanın en üst düzeyindeki WhatsApp klasörünü kullanır. Ayarlar > Depolama bunu WhatsApp olarak göstermez; Uygulamalar, Resimler ve Videolar ya da Diğer altında görünür; uygulamanın orada olduğundan küçük görünmesinin nedeni budur.',
            'Android\'in kapsamlı depolama kuralları yüzünden genel dosya yöneticileri bu klasörlere göz atabilir ama bazıları ek izin olmadan içlerinde silme yapamaz; gizli .Statuses klasörü de görüntülediğiniz her durumu önbelleğe alır. Medyayı WhatsApp\'ın içinden ya da medya izni olan bir temizleyiciyle silmek güvenilir yoldur.',
            'Disk Mop\'un Android sürümünde bunun için bir Mesajlaşma bölümü var: WhatsApp ve Telegram medya klasörlerini okur, dosyaları türe göre gruplar, hiçbir şeye dokunmadan önce boyutları gösterir ve yalnızca işaretlediklerinizi siler. Tamamen telefonda, hesapsız ve sunucusuz çalışır; ilk üç tekli silme ücretsizdir, böylece ödemeden önce ne bulduğunu görebilirsiniz.',
          ],
        },
      ],
      dataTable: {
        caption: 'WhatsApp medya otomatik indirme varsayılanları ve daha hafif bir yapılandırma',
        columns: ['Ayar', 'Varsayılan', 'Daha hafif ayar'],
        rows: [
          ['Mobil veri kullanırken', 'Fotoğraflar', 'Medya yok'],
          ['Wi-Fi\'a bağlıyken', 'Fotoğraflar, ses, videolar, belgeler', 'Yalnızca fotoğraflar'],
          ['Dolaşımdayken', 'Medya yok', 'Medya yok'],
          ['Medya görünürlüğü (galeride göster)', 'Açık', 'Yoğun gruplar için kapalı'],
        ],
      },
      faq: [
        {
          question: 'WhatsApp medyasını telefonumdan silersem karşı taraftan da silinir mi?',
          answer:
            'Hayır. Depolamayı yönet ekranından ya da galeriden silmek yalnızca sizdeki yerel kopyayı kaldırır. Karşı tarafın telefonu ve WhatsApp sunucuları etkilenmez.',
        },
        {
          question: 'WhatsApp önbelleğini temizlemek mesajlarımı siler mi?',
          answer:
            'Hayır. Android\'in uygulama ayarlarındaki Önbelleği temizle yalnızca geçici dosyaları kaldırır. Depolamayı temizle ya da Verileri temizle farklıdır: yerel sohbet geçmişinizi siler ve oturumunuzu kapatır; bunu yalnızca yedeğiniz varsa ve yeniden kurmayı planlıyorsanız kullanın.',
        },
        {
          question: 'WhatsApp gigabaytlarca yer kaplarken Ayarlar > Depolama neden onu küçük gösteriyor?',
          answer:
            'Android, WhatsApp\'ın medya klasörünü uygulamanın altında değil Resimler, Videolar, Ses ya da Diğer altında sayar. WhatsApp\'ın kendi Depolamayı yönet ekranı gerçek toplamı gösterir.',
        },
        {
          question: 'Medyayı silmek Google Drive yedeğimi küçültür mü?',
          answer:
            'Evet. Yedek, telefonda hâlâ duran medyayı içerir; eski videoları ve sesli mesajları kaldırmak bir sonraki yedeği küçültür ve hızlandırır.',
        },
      ],
      verdict: [
        'WhatsApp neredeyse her zaman bir Android telefondaki en büyük tek kalemdir ve çözüm hiçbir zaman sohbet silmekten geçmez. Büyük ve iletilmiş dosyaları kaldırmak için Depolamayı yönet ekranını kullanın, en ağır grupları temizleyin, otomatik indirme ve medya görünürlüğünü size uygun ayarlara çekin. Telegram\'ın Medyayı Sakla ayarı aynı işi otomatik yapar.',
        'Disk Mop\'un Android sürümü WhatsApp ve Telegram medyasını telefonun geri kalanıyla yan yana gösterir; böylece temizlik beş ekran yerine tek ekranda biter. Hiçbir şey silinmeden önce boyutları gösterir, sizin yerinize hiçbir şey seçmez ve tamamen cihazda çalışır.',
      ],
      ctaText: 'Disk Mop\'u Google Play\'den edinin',
    },
    en: {
      title: 'WhatsApp Taking Up Too Much Space on Android: Clear Media Without Losing Chats',
      metaDescription:
        'WhatsApp can quietly reach 10–20 GB on Android. Here is how to clear photos, videos and voice notes without deleting a conversation, and how to stop it from filling up again.',
      subtitle: 'Manage Storage, auto-download settings and the folders WhatsApp leaves on the phone',
      intro: [
        'Short answer: WhatsApp grows because it downloads every photo, video, voice note and document you receive and keeps them on the phone forever. You can remove those files without deleting a single message from WhatsApp > Settings > Storage and data > Manage storage, and you can stop the growth by turning off media auto-download for groups you do not care about.',
        'This guide shows the exact screens, explains what happens to a chat when its media is deleted, covers Telegram\'s equivalent settings, and points out the folder on the phone where the files actually live.',
      ],
      keyTakeaways: [
        'WhatsApp > Settings > Storage and data > Manage storage lists the largest chats and every file over 5 MB; deleting from there removes the files but keeps the messages.',
        'Deleting media on your phone does not delete it for the other person; it only removes your local copy.',
        'Auto-download is on by default for photos on mobile data and for everything on Wi-Fi; turning it off stops the growth without affecting chats.',
        'Clearing WhatsApp\'s cache is harmless, but Clear storage (Clear data) signs you out and needs a backup to restore your chats.',
        'On Android 11 and later the media lives in Android/media/com.whatsapp, which most file managers show but cannot fully manage; Settings > Storage counts it under Apps or Other.',
        'Telegram keeps its own cache; Settings > Data and Storage > Storage Usage lets you delete it and set how long media is kept.',
      ],
      howTo: {
        name: 'Free up WhatsApp space on Android without deleting chats',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Open Manage storage',
            text: 'In WhatsApp, tap the three dots > Settings > Storage and data > Manage storage. The top shows how much WhatsApp uses on the phone and two shortcuts: Larger than 5 MB and Forwarded many times.',
          },
          {
            name: 'Delete the big files first',
            text: 'Open Larger than 5 MB, sort by size, select what you do not need and tap the trash icon. Long videos and forwarded clips are usually most of the space. The messages stay in the chats.',
          },
          {
            name: 'Clear media chat by chat',
            text: 'Back in Manage storage, the chats are listed by size. Open a group, tap Select all or pick items, and delete. Untick Starred to keep anything you marked.',
          },
          {
            name: 'Turn off auto-download',
            text: 'In Settings > Storage and data, under Media auto-download, set When using mobile data to No media and When connected on Wi-Fi to Photos only or No media. Media you tap will still download.',
          },
          {
            name: 'Do the same in Telegram',
            text: 'Telegram > Settings > Data and Storage > Storage Usage shows the cache by chat and type; tap Clear cache. Set Keep Media to 1 week or 1 month so it cleans itself.',
          },
          {
            name: 'Check the phone-wide view',
            text: 'Disk Mop for Android lists WhatsApp and Telegram media by type and size in one screen, so you can see photos, videos, voice notes and documents from both apps together and delete what you no longer need.',
          },
        ],
      },
      sections: [
        {
          title: 'Why WhatsApp Grows to 20 GB',
          content: [
            'By default WhatsApp downloads photos automatically on mobile data, and photos, audio, videos and documents on Wi-Fi. In a couple of active groups that means every meme, forwarded video and voice note lands on the phone whether you looked at it or not. A group with fifty members can easily generate 100 MB a day, and WhatsApp never deletes anything on its own.',
            'The second multiplier is Media visibility, which is on by default and makes every downloaded file appear in the gallery. Photos then get backed up to Google Photos and counted twice on the phone by some galleries. Two years of ordinary use is enough for WhatsApp to become the largest app on the phone, and it is common to see 10 to 20 GB in Settings > Storage.',
            'None of this is a bug, and none of it requires deleting conversations. The messages are tiny; the media is the weight, and WhatsApp separates the two cleanly in its storage tools.',
          ],
        },
        {
          title: 'Clearing Media Without Touching the Chats',
          content: [
            'Manage storage (Settings > Storage and data > Manage storage) is built for exactly this. The Larger than 5 MB view lists every big file across all chats, sortable by size and date, and lets you delete in bulk. The Forwarded many times view collects the viral clips that reached you from several groups. Below them, chats are listed by size so you can clear one heavy group at a time.',
            'When you delete a file here, the message that carried it stays in the chat with a placeholder. If the sender still has the file, you can often re-download it from the message later, but do not count on it; treat the deletion as permanent and back up anything you want to keep first. Starred messages can be excluded so favorites survive a bulk cleanup.',
            'Two things to avoid. Clear cache in Android\'s app settings is safe and rarely frees much. Clear storage (or Clear data) on the WhatsApp app is not a cleanup: it removes your local chat history and signs you out, and you will need a Google Drive backup to get the chats back.',
          ],
        },
        {
          title: 'Stop It from Happening Again',
          content: [
            'The lasting fix is in Settings > Storage and data under Media auto-download. Three lines control what downloads on mobile data, on Wi-Fi and while roaming. Setting mobile data to No media and Wi-Fi to Photos only keeps the phone from filling up with videos you never asked for; anything you tap still downloads on demand.',
            'Media visibility, in Settings > Chats, decides whether downloaded files appear in the gallery. Turning it off for busy groups keeps memes out of your photo library and out of your cloud backup. For individual chats, the same switch is in the chat\'s info page.',
            'Telegram works differently: it keeps a cache of everything you view and can limit it. Settings > Data and Storage > Storage Usage shows the cache by chat and by type, and Keep Media lets you choose 3 days, 1 week, 1 month or forever, after which Telegram deletes local copies while keeping them on its servers. A Maximum cache size slider on the same screen caps the total.',
          ],
        },
        {
          title: 'Where the Files Actually Live on the Phone',
          content: [
            'On Android 11 and later, WhatsApp stores media in Android/media/com.whatsapp/WhatsApp/Media, with folders for images, video, audio, voice notes, documents, stickers and statuses. Older installs still use a WhatsApp folder in the top level of internal storage. Settings > Storage does not show this as WhatsApp; it appears under Apps, Images and Videos, or Other, which is why the app looks smaller there than it really is.',
            'Because of Android\'s scoped storage rules, general file managers can browse these folders but some cannot delete inside them without extra permissions, and the hidden .Statuses folder caches every status you viewed. Deleting media from inside WhatsApp, or with a cleaner that has media permission, is the reliable route.',
            'Disk Mop for Android has a Messaging section for this: it reads the WhatsApp and Telegram media folders, groups the files by type, shows sizes before anything is touched and deletes only what you tick. It works entirely on the phone, without an account or a server, and the first three single deletions are free so you can see what it finds before paying.',
          ],
        },
      ],
      dataTable: {
        caption: 'WhatsApp media auto-download defaults and a lighter configuration',
        columns: ['Setting', 'Default', 'Lighter setting'],
        rows: [
          ['When using mobile data', 'Photos', 'No media'],
          ['When connected on Wi-Fi', 'Photos, audio, videos, documents', 'Photos only'],
          ['When roaming', 'No media', 'No media'],
          ['Media visibility (show in gallery)', 'On', 'Off for busy groups'],
        ],
      },
      faq: [
        {
          question: 'If I delete WhatsApp media from my phone, is it deleted for the other person?',
          answer:
            'No. Deleting from Manage storage or the gallery removes only your local copy. The other person\'s phone and WhatsApp\'s servers are not affected.',
        },
        {
          question: 'Will clearing WhatsApp cache delete my messages?',
          answer:
            'No. Clear cache in Android\'s app settings removes temporary files only. Clear storage or Clear data is different: it deletes your local chat history and signs you out, so use it only if you have a backup and intend to reinstall.',
        },
        {
          question: 'Why does Settings > Storage show WhatsApp as small when it uses gigabytes?',
          answer:
            'Android counts WhatsApp\'s media folder under Images, Videos, Audio or Other rather than under the app. WhatsApp\'s own Manage storage screen shows the true total.',
        },
        {
          question: 'Does deleting media make my Google Drive backup smaller?',
          answer:
            'Yes. The backup includes media that is still on the phone, so removing old videos and voice notes shrinks the next backup and speeds it up.',
        },
      ],
      verdict: [
        'WhatsApp is almost always the largest single item on an Android phone, and the fix never involves deleting a chat. Use Manage storage to remove the big and forwarded files, clear the heaviest groups, and switch auto-download and media visibility to settings that suit you. Telegram\'s Keep Media setting does the same job automatically.',
        'Disk Mop for Android shows WhatsApp and Telegram media side by side with the rest of the phone, so the cleanup takes one screen instead of five. It shows sizes before anything is deleted, selects nothing for you, and runs entirely on the device.',
      ],
      ctaText: 'Get Disk Mop for Android on Google Play',
    },
    de: {
      title: 'WhatsApp belegt zu viel Speicher unter Android: Medien löschen, ohne Chats zu verlieren',
      metaDescription:
        'WhatsApp erreicht unter Android unbemerkt 10–20 GB. So löschen Sie Fotos, Videos und Sprachnachrichten, ohne einen Chat zu verlieren, und stoppen das Wachstum.',
      subtitle: 'Speicher verwalten, automatischer Download und die Ordner, die WhatsApp auf dem Telefon hinterlässt',
      intro: [
        'Kurze Antwort: WhatsApp wächst, weil es jedes empfangene Foto, Video, jede Sprachnachricht und jedes Dokument herunterlädt und für immer auf dem Telefon behält. Diese Dateien lassen sich unter WhatsApp > Einstellungen > Speicher und Daten > Speicher verwalten entfernen, ohne eine einzige Nachricht zu löschen, und das Wachstum stoppen Sie, indem Sie den automatischen Download von Medien für Gruppen abschalten, die Ihnen nicht wichtig sind.',
        'Dieser Leitfaden zeigt die genauen Bildschirme, erklärt, was mit einem Chat passiert, wenn seine Medien gelöscht werden, behandelt die entsprechenden Einstellungen in Telegram und zeigt den Ordner auf dem Telefon, in dem die Dateien tatsächlich liegen.',
      ],
      keyTakeaways: [
        'WhatsApp > Einstellungen > Speicher und Daten > Speicher verwalten listet die größten Chats und jede Datei über 5 MB; Löschen von dort entfernt die Dateien, behält aber die Nachrichten.',
        'Medien auf Ihrem Telefon zu löschen löscht sie nicht bei der anderen Person; es entfernt nur Ihre lokale Kopie.',
        'Der automatische Download ist standardmäßig für Fotos im Mobilfunknetz und für alles im WLAN aktiv; ihn abzuschalten stoppt das Wachstum, ohne die Chats zu beeinflussen.',
        'Den Cache von WhatsApp zu leeren ist harmlos, aber Speicher löschen (Daten löschen) meldet Sie ab und erfordert ein Backup, um die Chats wiederherzustellen.',
        'Ab Android 11 liegen die Medien unter Android/media/com.whatsapp; die meisten Dateimanager zeigen den Ordner, können ihn aber nicht vollständig verwalten; Einstellungen > Speicher zählt ihn unter Apps oder Sonstiges.',
        'Telegram führt einen eigenen Cache; unter Einstellungen > Daten und Speicher > Speichernutzung können Sie ihn löschen und festlegen, wie lange Medien behalten werden.',
      ],
      howTo: {
        name: 'WhatsApp-Speicher unter Android freigeben, ohne Chats zu löschen',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Speicher verwalten öffnen',
            text: 'Tippen Sie in WhatsApp auf die drei Punkte > Einstellungen > Speicher und Daten > Speicher verwalten. Oben sehen Sie, wie viel WhatsApp auf dem Telefon belegt, sowie zwei Verknüpfungen: Größer als 5 MB und Oft weitergeleitet.',
          },
          {
            name: 'Zuerst die großen Dateien löschen',
            text: 'Öffnen Sie Größer als 5 MB, sortieren Sie nach Größe, wählen Sie aus, was Sie nicht brauchen, und tippen Sie auf das Papierkorb-Symbol. Lange Videos und weitergeleitete Clips machen meist den Großteil aus. Die Nachrichten bleiben in den Chats.',
          },
          {
            name: 'Medien Chat für Chat bereinigen',
            text: 'Zurück in Speicher verwalten sind die Chats nach Größe sortiert. Öffnen Sie eine Gruppe, tippen Sie auf Alle auswählen oder wählen Sie einzelne Elemente und löschen Sie. Entfernen Sie das Häkchen bei Mit Stern markiert, um Markiertes zu behalten.',
          },
          {
            name: 'Automatischen Download abschalten',
            text: 'Stellen Sie unter Einstellungen > Speicher und Daten im Abschnitt Automatischer Download von Medien die Option Bei mobiler Datenverbindung auf Keine Medien und Bei WLAN-Verbindung auf Nur Fotos oder Keine Medien. Medien, auf die Sie tippen, werden weiterhin geladen.',
          },
          {
            name: 'Dasselbe in Telegram tun',
            text: 'Telegram > Einstellungen > Daten und Speicher > Speichernutzung zeigt den Cache nach Chat und Typ; tippen Sie auf Cache leeren. Stellen Sie Medien behalten auf 1 Woche oder 1 Monat, damit er sich selbst bereinigt.',
          },
          {
            name: 'Die Gesamtansicht des Telefons prüfen',
            text: 'Die Android-Version von Disk Mop listet WhatsApp- und Telegram-Medien nach Typ und Größe auf einem Bildschirm, sodass Sie Fotos, Videos, Sprachnachrichten und Dokumente beider Apps zusammen sehen und löschen können, was Sie nicht mehr brauchen.',
          },
        ],
      },
      sections: [
        {
          title: 'Warum WhatsApp auf 20 GB anwächst',
          content: [
            'Standardmäßig lädt WhatsApp Fotos im Mobilfunknetz automatisch herunter und im WLAN Fotos, Audio, Videos und Dokumente. In ein paar aktiven Gruppen bedeutet das, dass jedes Meme, jedes weitergeleitete Video und jede Sprachnachricht auf dem Telefon landet, ob Sie es angesehen haben oder nicht. Eine Gruppe mit fünfzig Mitgliedern erzeugt leicht 100 MB pro Tag, und WhatsApp löscht von sich aus nie etwas.',
            'Der zweite Multiplikator ist die Medien-Sichtbarkeit, die standardmäßig aktiv ist und jede heruntergeladene Datei in der Galerie erscheinen lässt. Fotos werden dann in Google Fotos gesichert und von manchen Galerien auf dem Telefon doppelt gezählt. Zwei Jahre gewöhnlicher Nutzung reichen, damit WhatsApp zur größten App auf dem Telefon wird, und 10–20 GB unter Einstellungen > Speicher sind keine Seltenheit.',
            'Nichts davon ist ein Fehler, und nichts davon erfordert das Löschen von Unterhaltungen. Die Nachrichten sind winzig; das Gewicht sind die Medien, und WhatsApp trennt beides in seinen Speicherwerkzeugen sauber.',
          ],
        },
        {
          title: 'Medien löschen, ohne die Chats anzutasten',
          content: [
            'Speicher verwalten (Einstellungen > Speicher und Daten > Speicher verwalten) ist genau dafür gebaut. Die Ansicht Größer als 5 MB listet jede große Datei über alle Chats hinweg, sortierbar nach Größe und Datum, und erlaubt das Löschen im Stapel. Die Ansicht Oft weitergeleitet sammelt die viralen Clips, die Sie aus mehreren Gruppen erreicht haben. Darunter sind die Chats nach Größe sortiert, sodass Sie eine schwere Gruppe nach der anderen bereinigen können.',
            'Wenn Sie hier eine Datei löschen, bleibt die Nachricht, die sie enthielt, mit einem Platzhalter im Chat. Hat der Absender die Datei noch, können Sie sie oft später aus der Nachricht erneut laden, aber verlassen Sie sich nicht darauf; betrachten Sie das Löschen als endgültig und sichern Sie vorher alles, was Sie behalten wollen. Mit Stern markierte Nachrichten lassen sich ausnehmen, damit Favoriten eine Stapelbereinigung überstehen.',
            'Zwei Dinge sind zu vermeiden. Cache leeren in den App-Einstellungen von Android ist sicher und gibt selten viel frei. Speicher löschen (oder Daten löschen) bei der WhatsApp-App ist keine Bereinigung: Es entfernt Ihren lokalen Chatverlauf und meldet Sie ab, und Sie brauchen ein Google-Drive-Backup, um die Chats zurückzubekommen.',
          ],
        },
        {
          title: 'Verhindern, dass es wieder passiert',
          content: [
            'Die dauerhafte Lösung steckt unter Einstellungen > Speicher und Daten im Abschnitt Automatischer Download von Medien. Drei Zeilen steuern, was im Mobilfunknetz, im WLAN und beim Roaming geladen wird. Mobile Daten auf Keine Medien und WLAN auf Nur Fotos zu stellen verhindert, dass sich das Telefon mit Videos füllt, die Sie nie wollten; alles, worauf Sie tippen, wird weiterhin bei Bedarf geladen.',
            'Die Medien-Sichtbarkeit unter Einstellungen > Chats entscheidet, ob heruntergeladene Dateien in der Galerie erscheinen. Sie für rege Gruppen abzuschalten hält Memes aus Ihrer Fotobibliothek und aus Ihrem Cloud-Backup fern. Für einzelne Chats findet sich derselbe Schalter auf der Infoseite des Chats.',
            'Telegram arbeitet anders: Es führt einen Cache von allem, was Sie ansehen, und kann ihn begrenzen. Einstellungen > Daten und Speicher > Speichernutzung zeigt den Cache nach Chat und Typ, und unter Medien behalten wählen Sie 3 Tage, 1 Woche, 1 Monat oder für immer; danach löscht Telegram die lokalen Kopien, behält sie aber auf seinen Servern. Ein Regler Maximale Cache-Größe auf demselben Bildschirm deckelt das Gesamtvolumen.',
          ],
        },
        {
          title: 'Wo die Dateien auf dem Telefon tatsächlich liegen',
          content: [
            'Ab Android 11 speichert WhatsApp Medien unter Android/media/com.whatsapp/WhatsApp/Media, mit Ordnern für Bilder, Video, Audio, Sprachnachrichten, Dokumente, Sticker und Status. Ältere Installationen nutzen noch einen WhatsApp-Ordner auf der obersten Ebene des internen Speichers. Einstellungen > Speicher zeigt das nicht als WhatsApp; es erscheint unter Apps, Bilder und Videos oder Sonstiges, weshalb die App dort kleiner wirkt, als sie wirklich ist.',
            'Wegen der Regeln zum bereichsbezogenen Speicher (scoped storage) unter Android können allgemeine Dateimanager diese Ordner durchsuchen, aber manche können ohne zusätzliche Berechtigungen nichts darin löschen, und der versteckte Ordner .Statuses speichert jeden Status, den Sie angesehen haben. Medien aus WhatsApp heraus oder mit einem Reiniger mit Medienberechtigung zu löschen ist der zuverlässige Weg.',
            'Die Android-Version von Disk Mop hat dafür einen Bereich Messaging: Sie liest die Medienordner von WhatsApp und Telegram, gruppiert die Dateien nach Typ, zeigt Größen, bevor irgendetwas angefasst wird, und löscht nur, was Sie anhaken. Sie arbeitet vollständig auf dem Telefon, ohne Konto oder Server, und die ersten drei Einzellöschungen sind kostenlos, sodass Sie sehen, was sie findet, bevor Sie bezahlen.',
          ],
        },
      ],
      dataTable: {
        caption: 'Standardwerte des automatischen Medien-Downloads in WhatsApp und eine sparsamere Konfiguration',
        columns: ['Einstellung', 'Standard', 'Sparsamere Einstellung'],
        rows: [
          ['Bei mobiler Datenverbindung', 'Fotos', 'Keine Medien'],
          ['Bei WLAN-Verbindung', 'Fotos, Audio, Videos, Dokumente', 'Nur Fotos'],
          ['Beim Roaming', 'Keine Medien', 'Keine Medien'],
          ['Medien-Sichtbarkeit (in Galerie anzeigen)', 'An', 'Aus für rege Gruppen'],
        ],
      },
      faq: [
        {
          question: 'Wenn ich WhatsApp-Medien von meinem Telefon lösche, werden sie auch bei der anderen Person gelöscht?',
          answer:
            'Nein. Löschen über Speicher verwalten oder die Galerie entfernt nur Ihre lokale Kopie. Das Telefon der anderen Person und die Server von WhatsApp bleiben unberührt.',
        },
        {
          question: 'Löscht das Leeren des WhatsApp-Cache meine Nachrichten?',
          answer:
            'Nein. Cache leeren in den App-Einstellungen von Android entfernt nur temporäre Dateien. Speicher löschen oder Daten löschen ist etwas anderes: Es löscht Ihren lokalen Chatverlauf und meldet Sie ab; nutzen Sie es nur, wenn Sie ein Backup haben und neu installieren wollen.',
        },
        {
          question: 'Warum zeigt Einstellungen > Speicher WhatsApp als klein, obwohl es Gigabytes belegt?',
          answer:
            'Android zählt den Medienordner von WhatsApp unter Bilder, Videos, Audio oder Sonstiges statt unter der App. Der Bildschirm Speicher verwalten in WhatsApp selbst zeigt die tatsächliche Summe.',
        },
        {
          question: 'Wird mein Google-Drive-Backup kleiner, wenn ich Medien lösche?',
          answer:
            'Ja. Das Backup enthält Medien, die noch auf dem Telefon liegen; alte Videos und Sprachnachrichten zu entfernen verkleinert das nächste Backup und beschleunigt es.',
        },
      ],
      verdict: [
        'WhatsApp ist fast immer der größte Einzelposten auf einem Android-Telefon, und die Lösung erfordert nie das Löschen eines Chats. Entfernen Sie über Speicher verwalten die großen und weitergeleiteten Dateien, bereinigen Sie die schwersten Gruppen und stellen Sie automatischen Download und Medien-Sichtbarkeit so ein, wie es Ihnen passt. Die Einstellung Medien behalten in Telegram erledigt dieselbe Aufgabe automatisch.',
        'Die Android-Version von Disk Mop zeigt WhatsApp- und Telegram-Medien Seite an Seite mit dem Rest des Telefons, sodass die Bereinigung einen Bildschirm statt fünf braucht. Sie zeigt Größen, bevor etwas gelöscht wird, wählt nichts für Sie aus und läuft vollständig auf dem Gerät.',
      ],
      ctaText: 'Disk Mop bei Google Play holen',
    },
    fr: {
      title: 'WhatsApp prend trop de place sur Android : supprimer les médias sans perdre les discussions',
      metaDescription:
        'Sur Android, WhatsApp atteint vite 10–20 GB. Comment supprimer photos, vidéos et messages vocaux sans effacer une discussion, et l\'empêcher de se remplir à nouveau.',
      subtitle: 'Gérer le stockage, réglages de téléchargement automatique et dossiers que WhatsApp laisse sur le téléphone',
      intro: [
        'Réponse courte : WhatsApp grossit parce qu\'il télécharge chaque photo, vidéo, message vocal et document que vous recevez et les garde pour toujours sur le téléphone. Vous pouvez retirer ces fichiers sans supprimer un seul message depuis WhatsApp > Paramètres > Stockage et données > Gérer le stockage, et stopper la croissance en désactivant le téléchargement automatique des médias pour les groupes qui ne vous intéressent pas.',
        'Ce guide montre les écrans exacts, explique ce qui arrive à une discussion quand ses médias sont supprimés, couvre les réglages équivalents de Telegram et indique le dossier du téléphone où les fichiers se trouvent réellement.',
      ],
      keyTakeaways: [
        'WhatsApp > Paramètres > Stockage et données > Gérer le stockage liste les discussions les plus volumineuses et chaque fichier de plus de 5 MB ; supprimer depuis cet écran retire les fichiers mais conserve les messages.',
        'Supprimer un média sur votre téléphone ne le supprime pas chez l\'autre personne ; seule votre copie locale est retirée.',
        'Le téléchargement automatique est activé par défaut pour les photos en données mobiles et pour tout en Wi-Fi ; le désactiver stoppe la croissance sans toucher aux discussions.',
        'Vider le cache de WhatsApp est sans danger, mais Effacer le stockage (Effacer les données) vous déconnecte et exige une sauvegarde pour retrouver vos discussions.',
        'Sur Android 11 et versions ultérieures, les médias vivent dans Android/media/com.whatsapp, que la plupart des gestionnaires de fichiers affichent sans pouvoir le gérer entièrement ; Paramètres > Stockage les compte sous Applications ou Autre.',
        'Telegram garde son propre cache ; Paramètres > Données et stockage > Utilisation du stockage permet de le supprimer et de définir combien de temps les médias sont conservés.',
      ],
      howTo: {
        name: 'Libérer l\'espace de WhatsApp sur Android sans supprimer de discussion',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ouvrir Gérer le stockage',
            text: 'Dans WhatsApp, touchez les trois points > Paramètres > Stockage et données > Gérer le stockage. Le haut de l\'écran indique combien WhatsApp occupe sur le téléphone et propose deux raccourcis : Plus de 5 Mo et Transférés plusieurs fois.',
          },
          {
            name: 'Supprimer d\'abord les gros fichiers',
            text: 'Ouvrez Plus de 5 Mo, triez par taille, sélectionnez ce dont vous n\'avez pas besoin et touchez l\'icône de corbeille. Les longues vidéos et les clips transférés représentent en général l\'essentiel de la place. Les messages restent dans les discussions.',
          },
          {
            name: 'Nettoyer les médias discussion par discussion',
            text: 'De retour dans Gérer le stockage, les discussions sont classées par taille. Ouvrez un groupe, touchez Tout sélectionner ou choisissez des éléments, puis supprimez. Décochez Importants pour conserver ce que vous avez marqué d\'une étoile.',
          },
          {
            name: 'Désactiver le téléchargement automatique',
            text: 'Dans Paramètres > Stockage et données, sous Téléchargement automatique des médias, réglez Avec les données mobiles sur Aucun média et Connecté au Wi-Fi sur Photos uniquement ou Aucun média. Les médias que vous touchez se téléchargeront toujours.',
          },
          {
            name: 'Faire de même dans Telegram',
            text: 'Telegram > Paramètres > Données et stockage > Utilisation du stockage affiche le cache par discussion et par type ; touchez Vider le cache. Réglez Conserver les médias sur 1 semaine ou 1 mois pour qu\'il se nettoie tout seul.',
          },
          {
            name: 'Vérifier la vue d\'ensemble du téléphone',
            text: 'La version Android de Disk Mop liste les médias WhatsApp et Telegram par type et par taille sur un seul écran : vous voyez ensemble les photos, vidéos, messages vocaux et documents des deux applis et supprimez ce dont vous n\'avez plus besoin.',
          },
        ],
      },
      sections: [
        {
          title: 'Pourquoi WhatsApp grossit jusqu\'à 20 GB',
          content: [
            'Par défaut, WhatsApp télécharge automatiquement les photos en données mobiles, et les photos, l\'audio, les vidéos et les documents en Wi-Fi. Dans deux ou trois groupes actifs, cela signifie que chaque mème, vidéo transférée et message vocal atterrit sur le téléphone, que vous l\'ayez regardé ou non. Un groupe de cinquante membres génère facilement 100 MB par jour, et WhatsApp ne supprime jamais rien de lui-même.',
            'Le second multiplicateur est la Visibilité des médias, activée par défaut, qui fait apparaître chaque fichier téléchargé dans la galerie. Les photos sont alors sauvegardées dans Google Photos et comptées deux fois sur le téléphone par certaines galeries. Deux ans d\'usage ordinaire suffisent pour que WhatsApp devienne la plus grosse appli du téléphone, et il est courant de voir 10–20 GB dans Paramètres > Stockage.',
            'Rien de tout cela n\'est un bug, et rien n\'oblige à supprimer des discussions. Les messages sont minuscules ; ce sont les médias qui pèsent, et WhatsApp sépare nettement les deux dans ses outils de stockage.',
          ],
        },
        {
          title: 'Supprimer les médias sans toucher aux discussions',
          content: [
            'Gérer le stockage (Paramètres > Stockage et données > Gérer le stockage) est conçu exactement pour cela. La vue Plus de 5 Mo liste tous les gros fichiers de toutes les discussions, triables par taille et par date, et permet de supprimer en lot. La vue Transférés plusieurs fois rassemble les clips viraux qui vous sont parvenus par plusieurs groupes. En dessous, les discussions sont classées par taille pour nettoyer un groupe lourd à la fois.',
            'Quand vous supprimez un fichier ici, le message qui le contenait reste dans la discussion avec un espace réservé. Si l\'expéditeur a encore le fichier, vous pourrez souvent le retélécharger plus tard depuis le message, mais n\'y comptez pas ; considérez la suppression comme définitive et sauvegardez d\'abord ce que vous voulez garder. Les messages importants peuvent être exclus pour que vos favoris survivent à un nettoyage en lot.',
            'Deux choses à éviter. Vider le cache dans les paramètres d\'application d\'Android est sans danger et libère rarement beaucoup. Effacer le stockage (ou Effacer les données) sur l\'appli WhatsApp n\'est pas un nettoyage : cela supprime votre historique local et vous déconnecte, et il vous faudra une sauvegarde Google Drive pour récupérer les discussions.',
          ],
        },
        {
          title: 'Empêcher que cela se reproduise',
          content: [
            'La solution durable se trouve dans Paramètres > Stockage et données, sous Téléchargement automatique des médias. Trois lignes contrôlent ce qui se télécharge en données mobiles, en Wi-Fi et en itinérance. Régler les données mobiles sur Aucun média et le Wi-Fi sur Photos uniquement empêche le téléphone de se remplir de vidéos que vous n\'avez jamais demandées ; tout ce que vous touchez se télécharge encore à la demande.',
            'La Visibilité des médias, dans Paramètres > Discussions, décide si les fichiers téléchargés apparaissent dans la galerie. La désactiver pour les groupes bavards garde les mèmes hors de votre photothèque et de votre sauvegarde cloud. Pour une discussion donnée, le même interrupteur se trouve dans la page d\'informations de la discussion.',
            'Telegram fonctionne autrement : il garde un cache de tout ce que vous consultez et peut le limiter. Paramètres > Données et stockage > Utilisation du stockage affiche le cache par discussion et par type, et Conserver les médias permet de choisir 3 jours, 1 semaine, 1 mois ou toujours ; passé ce délai, Telegram supprime les copies locales tout en les gardant sur ses serveurs. Un curseur Taille maximale du cache sur le même écran plafonne le total.',
          ],
        },
        {
          title: 'Où les fichiers se trouvent réellement sur le téléphone',
          content: [
            'Sur Android 11 et versions ultérieures, WhatsApp stocke les médias dans Android/media/com.whatsapp/WhatsApp/Media, avec des dossiers pour les images, les vidéos, l\'audio, les messages vocaux, les documents, les stickers et les statuts. Les installations plus anciennes utilisent encore un dossier WhatsApp à la racine du stockage interne. Paramètres > Stockage ne l\'affiche pas comme WhatsApp ; il apparaît sous Applications, Images et Vidéos, ou Autre, ce qui explique pourquoi l\'appli y paraît plus petite qu\'elle ne l\'est.',
            'À cause des règles de stockage cloisonné d\'Android, les gestionnaires de fichiers généralistes peuvent parcourir ces dossiers, mais certains ne peuvent rien y supprimer sans autorisations supplémentaires, et le dossier caché .Statuses met en cache chaque statut que vous avez consulté. Supprimer les médias depuis WhatsApp, ou avec un nettoyeur disposant de l\'autorisation médias, est la voie fiable.',
            'La version Android de Disk Mop possède une section Messagerie pour cela : elle lit les dossiers de médias de WhatsApp et Telegram, regroupe les fichiers par type, affiche les tailles avant de toucher à quoi que ce soit et ne supprime que ce que vous cochez. Elle fonctionne entièrement sur le téléphone, sans compte ni serveur, et les trois premières suppressions unitaires sont gratuites : vous voyez ce qu\'elle trouve avant de payer.',
          ],
        },
      ],
      dataTable: {
        caption: 'Réglages par défaut du téléchargement automatique des médias WhatsApp et une configuration plus légère',
        columns: ['Réglage', 'Par défaut', 'Réglage plus léger'],
        rows: [
          ['Avec les données mobiles', 'Photos', 'Aucun média'],
          ['Connecté au Wi-Fi', 'Photos, audio, vidéos, documents', 'Photos uniquement'],
          ['En itinérance', 'Aucun média', 'Aucun média'],
          ['Visibilité des médias (afficher dans la galerie)', 'Activée', 'Désactivée pour les groupes bavards'],
        ],
      },
      faq: [
        {
          question: 'Si je supprime un média WhatsApp de mon téléphone, est-il supprimé chez l\'autre personne ?',
          answer:
            'Non. Supprimer depuis Gérer le stockage ou la galerie ne retire que votre copie locale. Le téléphone de l\'autre personne et les serveurs de WhatsApp ne sont pas concernés.',
        },
        {
          question: 'Vider le cache de WhatsApp supprime-t-il mes messages ?',
          answer:
            'Non. Vider le cache dans les paramètres d\'application d\'Android ne retire que des fichiers temporaires. Effacer le stockage ou Effacer les données est différent : cela supprime votre historique local et vous déconnecte ; ne l\'utilisez que si vous avez une sauvegarde et comptez réinstaller.',
        },
        {
          question: 'Pourquoi Paramètres > Stockage affiche-t-il WhatsApp comme petit alors qu\'il occupe des gigaoctets ?',
          answer:
            'Android compte le dossier de médias de WhatsApp sous Images, Vidéos, Audio ou Autre plutôt que sous l\'appli. L\'écran Gérer le stockage de WhatsApp lui-même affiche le vrai total.',
        },
        {
          question: 'Supprimer des médias réduit-il ma sauvegarde Google Drive ?',
          answer:
            'Oui. La sauvegarde inclut les médias encore présents sur le téléphone ; retirer les vieilles vidéos et les messages vocaux réduit la prochaine sauvegarde et l\'accélère.',
        },
      ],
      verdict: [
        'WhatsApp est presque toujours le plus gros poste d\'un téléphone Android, et la solution ne passe jamais par la suppression d\'une discussion. Utilisez Gérer le stockage pour retirer les gros fichiers et les fichiers transférés, nettoyez les groupes les plus lourds et réglez le téléchargement automatique et la visibilité des médias comme il vous convient. Le réglage Conserver les médias de Telegram fait le même travail automatiquement.',
        'La version Android de Disk Mop affiche les médias WhatsApp et Telegram côte à côte avec le reste du téléphone, si bien que le nettoyage tient sur un écran au lieu de cinq. Elle montre les tailles avant toute suppression, ne sélectionne rien à votre place et fonctionne entièrement sur l\'appareil.',
      ],
      ctaText: 'Télécharger Disk Mop sur Google Play',
    },
    es: {
      title: 'WhatsApp ocupa demasiado espacio en Android: borra los medios sin perder los chats',
      metaDescription:
        'WhatsApp puede llegar sin avisar a 10–20 GB en Android. Cómo borrar fotos, vídeos y notas de voz sin eliminar ninguna conversación y evitar que vuelva a llenarse.',
      subtitle: 'Administrar almacenamiento, ajustes de descarga automática y las carpetas que WhatsApp deja en el teléfono',
      intro: [
        'Respuesta corta: WhatsApp crece porque descarga cada foto, vídeo, nota de voz y documento que recibes y los guarda en el teléfono para siempre. Puedes quitar esos archivos sin borrar un solo mensaje desde WhatsApp > Ajustes > Almacenamiento y datos > Administrar almacenamiento, y puedes frenar el crecimiento desactivando la descarga automática en los grupos que no te interesan.',
        'Esta guía muestra las pantallas exactas, explica qué le pasa a un chat cuando se borran sus medios, cubre los ajustes equivalentes de Telegram y señala la carpeta del teléfono donde realmente viven los archivos.',
      ],
      keyTakeaways: [
        'WhatsApp > Ajustes > Almacenamiento y datos > Administrar almacenamiento enumera los chats más grandes y cada archivo de más de 5 MB; borrar desde ahí elimina los archivos pero conserva los mensajes.',
        'Borrar medios en tu teléfono no los borra para la otra persona; solo elimina tu copia local.',
        'La descarga automática viene activada para fotos con datos móviles y para todo con Wi-Fi; desactivarla frena el crecimiento sin afectar a los chats.',
        'Borrar la caché de WhatsApp es inofensivo, pero Borrar almacenamiento (Borrar datos) cierra tu sesión y necesita una copia de seguridad para recuperar los chats.',
        'En Android 11 y posteriores los medios viven en Android/media/com.whatsapp, que la mayoría de gestores de archivos muestran pero no pueden administrar del todo; Ajustes > Almacenamiento los cuenta en Aplicaciones u Otros.',
        'Telegram mantiene su propia caché; Ajustes > Datos y almacenamiento > Uso de almacenamiento permite borrarla y fijar cuánto tiempo se conservan los medios.',
      ],
      howTo: {
        name: 'Liberar espacio de WhatsApp en Android sin borrar chats',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Abrir Administrar almacenamiento',
            text: 'En WhatsApp, toca los tres puntos > Ajustes > Almacenamiento y datos > Administrar almacenamiento. Arriba se ve cuánto ocupa WhatsApp en el teléfono y dos accesos directos: Mayores de 5 MB y Reenviados muchas veces.',
          },
          {
            name: 'Borrar primero los archivos grandes',
            text: 'Abre Mayores de 5 MB, ordena por tamaño, selecciona lo que no necesites y toca el icono de la papelera. Los vídeos largos y los clips reenviados suelen ser la mayor parte del espacio. Los mensajes se quedan en los chats.',
          },
          {
            name: 'Limpiar los medios chat por chat',
            text: 'De vuelta en Administrar almacenamiento, los chats aparecen ordenados por tamaño. Abre un grupo, toca Seleccionar todo o elige elementos, y borra. Desmarca Destacados para conservar lo que hayas marcado.',
          },
          {
            name: 'Desactivar la descarga automática',
            text: 'En Ajustes > Almacenamiento y datos, bajo Descarga automática, pon Con datos móviles en Sin archivos y Con Wi-Fi en Solo fotos o Sin archivos. Lo que toques se seguirá descargando.',
          },
          {
            name: 'Hacer lo mismo en Telegram',
            text: 'Telegram > Ajustes > Datos y almacenamiento > Uso de almacenamiento muestra la caché por chat y por tipo; toca Borrar caché. Pon Conservar archivos en 1 semana o 1 mes para que se limpie sola.',
          },
          {
            name: 'Revisar la vista de todo el teléfono',
            text: 'La versión Android de Disk Mop enumera los medios de WhatsApp y Telegram por tipo y tamaño en una sola pantalla, así que puedes ver juntas las fotos, los vídeos, las notas de voz y los documentos de ambas apps y borrar lo que ya no necesites.',
          },
        ],
      },
      sections: [
        {
          title: 'Por qué WhatsApp llega a 20 GB',
          content: [
            'Por defecto WhatsApp descarga automáticamente las fotos con datos móviles, y fotos, audio, vídeos y documentos con Wi-Fi. En un par de grupos activos eso significa que cada meme, vídeo reenviado y nota de voz acaba en el teléfono, lo hayas mirado o no. Un grupo de cincuenta miembros genera fácilmente 100 MB al día, y WhatsApp nunca borra nada por su cuenta.',
            'El segundo multiplicador es la Visibilidad de archivos multimedia, activada por defecto, que hace que cada archivo descargado aparezca en la galería. Las fotos se suben entonces a Google Fotos y algunas galerías las cuentan dos veces en el teléfono. Dos años de uso normal bastan para que WhatsApp sea la app más grande del teléfono, y es habitual ver 10–20 GB en Ajustes > Almacenamiento.',
            'Nada de esto es un fallo, y nada obliga a borrar conversaciones. Los mensajes son diminutos; el peso son los medios, y WhatsApp separa ambos con claridad en sus herramientas de almacenamiento.',
          ],
        },
        {
          title: 'Borrar medios sin tocar los chats',
          content: [
            'Administrar almacenamiento (Ajustes > Almacenamiento y datos > Administrar almacenamiento) está hecho justo para esto. La vista Mayores de 5 MB enumera cada archivo grande de todos los chats, ordenable por tamaño y fecha, y permite borrar en bloque. La vista Reenviados muchas veces reúne los clips virales que te llegaron por varios grupos. Debajo, los chats aparecen ordenados por tamaño para limpiar un grupo pesado cada vez.',
            'Cuando borras un archivo aquí, el mensaje que lo contenía se queda en el chat con un marcador. Si el remitente aún tiene el archivo, a menudo podrás volver a descargarlo desde el mensaje, pero no cuentes con ello; trata el borrado como definitivo y guarda antes lo que quieras conservar. Los mensajes destacados pueden excluirse para que los favoritos sobrevivan a una limpieza en bloque.',
            'Dos cosas que evitar. Borrar caché en los ajustes de aplicaciones de Android es seguro y rara vez libera mucho. Borrar almacenamiento (o Borrar datos) en la app de WhatsApp no es una limpieza: elimina tu historial local de chats y cierra tu sesión, y necesitarás una copia de seguridad en Google Drive para recuperar los chats.',
          ],
        },
        {
          title: 'Evitar que vuelva a pasar',
          content: [
            'El arreglo duradero está en Ajustes > Almacenamiento y datos, bajo Descarga automática. Tres líneas controlan qué se descarga con datos móviles, con Wi-Fi y en itinerancia. Poner los datos móviles en Sin archivos y el Wi-Fi en Solo fotos evita que el teléfono se llene de vídeos que nunca pediste; lo que toques se sigue descargando bajo demanda.',
            'La Visibilidad de archivos multimedia, en Ajustes > Chats, decide si los archivos descargados aparecen en la galería. Desactivarla en los grupos con más tráfico mantiene los memes fuera de tu biblioteca de fotos y de tu copia en la nube. Para chats concretos, el mismo interruptor está en la página de información del chat.',
            'Telegram funciona distinto: guarda una caché de todo lo que ves y puede limitarla. Ajustes > Datos y almacenamiento > Uso de almacenamiento muestra la caché por chat y por tipo, y Conservar archivos permite elegir 3 días, 1 semana, 1 mes o siempre; pasado ese plazo, Telegram borra las copias locales y las mantiene en sus servidores. Un control deslizante de Tamaño máximo de caché en la misma pantalla limita el total.',
          ],
        },
        {
          title: 'Dónde viven realmente los archivos en el teléfono',
          content: [
            'En Android 11 y posteriores, WhatsApp guarda los medios en Android/media/com.whatsapp/WhatsApp/Media, con carpetas para imágenes, vídeo, audio, notas de voz, documentos, stickers y estados. Las instalaciones antiguas todavía usan una carpeta WhatsApp en la raíz del almacenamiento interno. Ajustes > Almacenamiento no lo muestra como WhatsApp; aparece bajo Aplicaciones, Imágenes y Vídeos, u Otros, y por eso la app parece ahí más pequeña de lo que es.',
            'Por las reglas de almacenamiento delimitado de Android, los gestores de archivos genéricos pueden explorar esas carpetas, pero algunos no pueden borrar dentro sin permisos extra, y la carpeta oculta .Statuses guarda en caché cada estado que hayas visto. Borrar los medios desde dentro de WhatsApp, o con un limpiador que tenga permiso de medios, es la vía fiable.',
            'La versión Android de Disk Mop tiene una sección de Mensajería para esto: lee las carpetas de medios de WhatsApp y Telegram, agrupa los archivos por tipo, muestra los tamaños antes de tocar nada y borra solo lo que marques. Funciona por completo en el teléfono, sin cuenta ni servidor, y los tres primeros borrados individuales son gratis para que veas lo que encuentra antes de pagar.',
          ],
        },
      ],
      dataTable: {
        caption: 'Valores por defecto de la descarga automática de WhatsApp y una configuración más ligera',
        columns: ['Ajuste', 'Por defecto', 'Ajuste más ligero'],
        rows: [
          ['Con datos móviles', 'Fotos', 'Sin archivos'],
          ['Con Wi-Fi', 'Fotos, audio, vídeos, documentos', 'Solo fotos'],
          ['En itinerancia', 'Sin archivos', 'Sin archivos'],
          ['Visibilidad de archivos multimedia (mostrar en la galería)', 'Activada', 'Desactivada en grupos con mucho tráfico'],
        ],
      },
      faq: [
        {
          question: 'Si borro medios de WhatsApp de mi teléfono, ¿se borran para la otra persona?',
          answer:
            'No. Borrar desde Administrar almacenamiento o desde la galería solo elimina tu copia local. El teléfono de la otra persona y los servidores de WhatsApp no se ven afectados.',
        },
        {
          question: '¿Borrar la caché de WhatsApp elimina mis mensajes?',
          answer:
            'No. Borrar caché en los ajustes de aplicaciones de Android solo elimina archivos temporales. Borrar almacenamiento o Borrar datos es distinto: elimina tu historial local de chats y cierra tu sesión, así que úsalo solo si tienes copia de seguridad y piensas reinstalar.',
        },
        {
          question: '¿Por qué Ajustes > Almacenamiento muestra WhatsApp como pequeño si ocupa gigabytes?',
          answer:
            'Android cuenta la carpeta de medios de WhatsApp en Imágenes, Vídeos, Audio u Otros en lugar de en la app. La propia pantalla Administrar almacenamiento de WhatsApp muestra el total real.',
        },
        {
          question: '¿Borrar medios hace más pequeña mi copia de seguridad de Google Drive?',
          answer:
            'Sí. La copia incluye los medios que siguen en el teléfono, así que quitar vídeos viejos y notas de voz reduce la siguiente copia y la acelera.',
        },
      ],
      verdict: [
        'WhatsApp es casi siempre el elemento más grande de un teléfono Android, y la solución nunca pasa por borrar un chat. Usa Administrar almacenamiento para quitar los archivos grandes y reenviados, limpia los grupos más pesados y ajusta la descarga automática y la visibilidad de archivos multimedia a tu gusto. El ajuste Conservar archivos de Telegram hace el mismo trabajo automáticamente.',
        'La versión Android de Disk Mop muestra los medios de WhatsApp y Telegram junto al resto del teléfono, así que la limpieza ocupa una pantalla en vez de cinco. Muestra los tamaños antes de borrar nada, no selecciona nada por ti y funciona por completo en el dispositivo.',
      ],
      ctaText: 'Consigue Disk Mop en Google Play',
    },
    it: {
      title: 'WhatsApp occupa troppo spazio su Android: elimina i media senza perdere le chat',
      metaDescription:
        'Su Android WhatsApp arriva in silenzio a 10–20 GB. Come eliminare foto, video e vocali senza cancellare una sola chat, ed evitare che si riempia di nuovo.',
      subtitle: 'Gestisci spazio, impostazioni di download automatico e le cartelle che WhatsApp lascia sul telefono',
      intro: [
        'Risposta breve: WhatsApp cresce perché scarica ogni foto, video, messaggio vocale e documento che ricevi e li tiene sul telefono per sempre. Puoi rimuovere quei file senza cancellare un solo messaggio da WhatsApp > Impostazioni > Spazio e dati > Gestisci spazio, e puoi fermare la crescita disattivando il download automatico dei media per i gruppi che non ti interessano.',
        'Questa guida mostra le schermate esatte, spiega cosa succede a una chat quando i suoi media vengono eliminati, copre le impostazioni equivalenti di Telegram e indica la cartella del telefono in cui i file si trovano davvero.',
      ],
      keyTakeaways: [
        'WhatsApp > Impostazioni > Spazio e dati > Gestisci spazio elenca le chat più grandi e ogni file oltre 5 MB; eliminare da lì rimuove i file ma conserva i messaggi.',
        'Eliminare i media sul tuo telefono non li elimina per l\'altra persona; rimuove solo la tua copia locale.',
        'Il download automatico è attivo per impostazione predefinita per le foto con la rete mobile e per tutto con il Wi-Fi; disattivarlo ferma la crescita senza toccare le chat.',
        'Svuotare la cache di WhatsApp è innocuo, ma Cancella archiviazione (Cancella dati) ti disconnette e richiede un backup per ripristinare le chat.',
        'Da Android 11 in poi i media stanno in Android/media/com.whatsapp, che la maggior parte dei file manager mostra ma non può gestire del tutto; Impostazioni > Spazio di archiviazione lo conta sotto App o Altro.',
        'Telegram tiene una cache propria; Impostazioni > Dati e archiviazione > Utilizzo memoria permette di eliminarla e di stabilire per quanto tempo conservare i media.',
      ],
      howTo: {
        name: 'Liberare lo spazio di WhatsApp su Android senza eliminare le chat',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Aprire Gestisci spazio',
            text: 'In WhatsApp tocca i tre puntini > Impostazioni > Spazio e dati > Gestisci spazio. In alto vedi quanto occupa WhatsApp sul telefono e due scorciatoie: Più grandi di 5 MB e Inoltrati molte volte.',
          },
          {
            name: 'Eliminare prima i file grandi',
            text: 'Apri Più grandi di 5 MB, ordina per dimensione, seleziona ciò che non ti serve e tocca l\'icona del cestino. I video lunghi e le clip inoltrate sono di solito la maggior parte dello spazio. I messaggi restano nelle chat.',
          },
          {
            name: 'Ripulire i media chat per chat',
            text: 'Tornato in Gestisci spazio, le chat sono elencate per dimensione. Apri un gruppo, tocca Seleziona tutto o scegli i singoli elementi, ed elimina. Togli la spunta a Importanti per conservare ciò che hai contrassegnato.',
          },
          {
            name: 'Disattivare il download automatico',
            text: 'In Impostazioni > Spazio e dati, sotto Download automatico media, imposta Con rete mobile su Nessun media e Con Wi-Fi su Solo foto o Nessun media. I media che tocchi verranno comunque scaricati.',
          },
          {
            name: 'Fare lo stesso in Telegram',
            text: 'Telegram > Impostazioni > Dati e archiviazione > Utilizzo memoria mostra la cache per chat e per tipo; tocca Svuota cache. Imposta Conserva media su 1 settimana o 1 mese perché si pulisca da sola.',
          },
          {
            name: 'Controllare la vista dell\'intero telefono',
            text: 'La versione Android di Disk Mop elenca i media di WhatsApp e Telegram per tipo e dimensione in un\'unica schermata, così vedi insieme foto, video, messaggi vocali e documenti di entrambe le app ed elimini ciò che non ti serve più.',
          },
        ],
      },
      sections: [
        {
          title: 'Perché WhatsApp arriva a 20 GB',
          content: [
            'Per impostazione predefinita WhatsApp scarica automaticamente le foto con la rete mobile e foto, audio, video e documenti con il Wi-Fi. In un paio di gruppi attivi significa che ogni meme, video inoltrato e messaggio vocale finisce sul telefono, che tu l\'abbia guardato o no. Un gruppo di cinquanta membri genera facilmente 100 MB al giorno, e WhatsApp non elimina mai nulla da solo.',
            'Il secondo moltiplicatore è la Visibilità dei media, attiva per impostazione predefinita, che fa comparire ogni file scaricato nella galleria. Le foto vengono quindi salvate in Google Foto e alcune gallerie le contano due volte sul telefono. Due anni di uso normale bastano perché WhatsApp diventi l\'app più grande del telefono, ed è comune vedere 10–20 GB in Impostazioni > Spazio di archiviazione.',
            'Niente di tutto questo è un bug, e niente richiede di eliminare conversazioni. I messaggi sono minuscoli; il peso sono i media, e WhatsApp separa nettamente le due cose nei suoi strumenti di archiviazione.',
          ],
        },
        {
          title: 'Eliminare i media senza toccare le chat',
          content: [
            'Gestisci spazio (Impostazioni > Spazio e dati > Gestisci spazio) è fatto esattamente per questo. La vista Più grandi di 5 MB elenca ogni file grande di tutte le chat, ordinabile per dimensione e data, e permette di eliminare in blocco. La vista Inoltrati molte volte raccoglie le clip virali che ti sono arrivate da più gruppi. Sotto, le chat sono elencate per dimensione, così puoi ripulire un gruppo pesante alla volta.',
            'Quando elimini un file qui, il messaggio che lo conteneva resta nella chat con un segnaposto. Se il mittente ha ancora il file, spesso potrai riscaricarlo dal messaggio più tardi, ma non farci affidamento; considera l\'eliminazione definitiva e fai prima un backup di ciò che vuoi tenere. I messaggi importanti possono essere esclusi, così i preferiti sopravvivono a una pulizia in blocco.',
            'Due cose da evitare. Svuota cache nelle impostazioni delle app di Android è sicuro e raramente libera molto. Cancella archiviazione (o Cancella dati) sull\'app WhatsApp non è una pulizia: rimuove la cronologia locale delle chat e ti disconnette, e ti servirà un backup su Google Drive per riavere le chat.',
          ],
        },
        {
          title: 'Evitare che succeda di nuovo',
          content: [
            'La soluzione duratura è in Impostazioni > Spazio e dati, sotto Download automatico media. Tre righe controllano cosa viene scaricato con la rete mobile, con il Wi-Fi e in roaming. Impostare la rete mobile su Nessun media e il Wi-Fi su Solo foto evita che il telefono si riempia di video che non hai mai chiesto; tutto ciò che tocchi viene comunque scaricato su richiesta.',
            'La Visibilità dei media, in Impostazioni > Chat, decide se i file scaricati compaiono nella galleria. Disattivarla per i gruppi più affollati tiene i meme fuori dalla tua libreria fotografica e dal tuo backup nel cloud. Per le singole chat, lo stesso interruttore si trova nella pagina delle informazioni della chat.',
            'Telegram funziona in modo diverso: tiene una cache di tutto ciò che guardi e può limitarla. Impostazioni > Dati e archiviazione > Utilizzo memoria mostra la cache per chat e per tipo, e Conserva media permette di scegliere 3 giorni, 1 settimana, 1 mese o per sempre; trascorso il periodo, Telegram elimina le copie locali mantenendole sui suoi server. Un cursore Dimensione massima cache nella stessa schermata limita il totale.',
          ],
        },
        {
          title: 'Dove si trovano davvero i file sul telefono',
          content: [
            'Da Android 11 in poi WhatsApp salva i media in Android/media/com.whatsapp/WhatsApp/Media, con cartelle per immagini, video, audio, messaggi vocali, documenti, sticker e stati. Le installazioni più vecchie usano ancora una cartella WhatsApp al primo livello della memoria interna. Impostazioni > Spazio di archiviazione non la mostra come WhatsApp; compare sotto App, Immagini e Video, oppure Altro, ed è per questo che l\'app lì sembra più piccola di quanto sia.',
            'Per le regole di archiviazione con ambito di Android, i file manager generici possono sfogliare queste cartelle, ma alcuni non possono eliminare al loro interno senza permessi aggiuntivi, e la cartella nascosta .Statuses mette in cache ogni stato che hai visualizzato. Eliminare i media dall\'interno di WhatsApp, o con un pulitore che ha il permesso sui media, è la via affidabile.',
            'La versione Android di Disk Mop ha una sezione Messaggistica per questo: legge le cartelle dei media di WhatsApp e Telegram, raggruppa i file per tipo, mostra le dimensioni prima di toccare qualsiasi cosa ed elimina solo ciò che spunti. Funziona interamente sul telefono, senza account né server, e le prime tre eliminazioni singole sono gratuite, così vedi cosa trova prima di pagare.',
          ],
        },
      ],
      dataTable: {
        caption: 'Impostazioni predefinite del download automatico dei media di WhatsApp e una configurazione più leggera',
        columns: ['Impostazione', 'Predefinita', 'Impostazione più leggera'],
        rows: [
          ['Con rete mobile', 'Foto', 'Nessun media'],
          ['Con Wi-Fi', 'Foto, audio, video, documenti', 'Solo foto'],
          ['In roaming', 'Nessun media', 'Nessun media'],
          ['Visibilità dei media (mostra nella galleria)', 'Attiva', 'Disattivata per i gruppi affollati'],
        ],
      },
      faq: [
        {
          question: 'Se elimino i media di WhatsApp dal mio telefono, vengono eliminati anche per l\'altra persona?',
          answer:
            'No. Eliminare da Gestisci spazio o dalla galleria rimuove solo la tua copia locale. Il telefono dell\'altra persona e i server di WhatsApp non vengono toccati.',
        },
        {
          question: 'Svuotare la cache di WhatsApp cancella i miei messaggi?',
          answer:
            'No. Svuota cache nelle impostazioni delle app di Android rimuove solo file temporanei. Cancella archiviazione o Cancella dati è diverso: elimina la cronologia locale delle chat e ti disconnette, quindi usalo solo se hai un backup e intendi reinstallare.',
        },
        {
          question: 'Perché Impostazioni > Spazio di archiviazione mostra WhatsApp come piccolo se occupa gigabyte?',
          answer:
            'Android conta la cartella dei media di WhatsApp sotto Immagini, Video, Audio o Altro invece che sotto l\'app. La schermata Gestisci spazio di WhatsApp stesso mostra il totale reale.',
        },
        {
          question: 'Eliminare i media rende più piccolo il mio backup su Google Drive?',
          answer:
            'Sì. Il backup include i media ancora presenti sul telefono, quindi rimuovere vecchi video e messaggi vocali riduce il backup successivo e lo velocizza.',
        },
      ],
      verdict: [
        'WhatsApp è quasi sempre la singola voce più grande su un telefono Android, e la soluzione non passa mai dall\'eliminazione di una chat. Usa Gestisci spazio per rimuovere i file grandi e inoltrati, ripulisci i gruppi più pesanti e regola download automatico e visibilità dei media come preferisci. L\'impostazione Conserva media di Telegram fa lo stesso lavoro in automatico.',
        'La versione Android di Disk Mop mostra i media di WhatsApp e Telegram fianco a fianco con il resto del telefono, così la pulizia richiede una schermata invece di cinque. Mostra le dimensioni prima di eliminare qualsiasi cosa, non seleziona nulla al posto tuo e funziona interamente sul dispositivo.',
      ],
      ctaText: 'Scarica Disk Mop da Google Play',
    },
    pt: {
      title: 'WhatsApp ocupando muito espaço no Android: apague as mídias sem perder as conversas',
      metaDescription:
        'No Android, o WhatsApp pode chegar a 10–20 GB sem você perceber. Como apagar fotos, vídeos e áudios sem excluir nenhuma conversa e impedir que ele encha de novo.',
      subtitle: 'Gerenciar armazenamento, ajustes de download automático e as pastas que o WhatsApp deixa no celular',
      intro: [
        'Resposta curta: o WhatsApp cresce porque baixa cada foto, vídeo, mensagem de voz e documento que você recebe e guarda tudo no celular para sempre. Dá para remover esses arquivos sem apagar uma única mensagem em WhatsApp > Configurações > Armazenamento e dados > Gerenciar armazenamento, e dá para frear o crescimento desligando o download automático de mídia nos grupos que não importam para você.',
        'Este guia mostra as telas exatas, explica o que acontece com uma conversa quando suas mídias são apagadas, cobre as configurações equivalentes do Telegram e aponta a pasta do celular onde os arquivos realmente ficam.',
      ],
      keyTakeaways: [
        'WhatsApp > Configurações > Armazenamento e dados > Gerenciar armazenamento lista as maiores conversas e todo arquivo acima de 5 MB; apagar por ali remove os arquivos, mas mantém as mensagens.',
        'Apagar mídias no seu celular não as apaga para a outra pessoa; só remove a sua cópia local.',
        'O download automático vem ligado para fotos em dados móveis e para tudo em Wi-Fi; desligá-lo freia o crescimento sem afetar as conversas.',
        'Limpar o cache do WhatsApp é inofensivo, mas Limpar armazenamento (Limpar dados) desconecta você e exige um backup para restaurar as conversas.',
        'No Android 11 e posteriores as mídias ficam em Android/media/com.whatsapp, que a maioria dos gerenciadores de arquivos mostra mas não consegue gerenciar por completo; Configurações > Armazenamento conta isso em Apps ou Outros.',
        'O Telegram mantém o próprio cache; Configurações > Dados e armazenamento > Uso de armazenamento permite apagá-lo e definir por quanto tempo as mídias ficam guardadas.',
      ],
      howTo: {
        name: 'Liberar espaço do WhatsApp no Android sem apagar conversas',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Abrir Gerenciar armazenamento',
            text: 'No WhatsApp, toque nos três pontos > Configurações > Armazenamento e dados > Gerenciar armazenamento. No topo aparece quanto o WhatsApp ocupa no celular e dois atalhos: Maiores que 5 MB e Encaminhados muitas vezes.',
          },
          {
            name: 'Apagar primeiro os arquivos grandes',
            text: 'Abra Maiores que 5 MB, ordene por tamanho, selecione o que você não precisa e toque no ícone da lixeira. Vídeos longos e clipes encaminhados costumam ser a maior parte do espaço. As mensagens continuam nas conversas.',
          },
          {
            name: 'Limpar as mídias conversa por conversa',
            text: 'De volta em Gerenciar armazenamento, as conversas aparecem ordenadas por tamanho. Abra um grupo, toque em Selecionar tudo ou escolha itens, e apague. Desmarque Favoritas para manter o que você marcou.',
          },
          {
            name: 'Desligar o download automático',
            text: 'Em Configurações > Armazenamento e dados, em Download automático de mídia, defina Usando dados móveis como Nenhuma mídia e Conectado ao Wi-Fi como Somente fotos ou Nenhuma mídia. As mídias em que você tocar ainda serão baixadas.',
          },
          {
            name: 'Fazer o mesmo no Telegram',
            text: 'Telegram > Configurações > Dados e armazenamento > Uso de armazenamento mostra o cache por conversa e por tipo; toque em Limpar cache. Defina Manter mídia em 1 semana ou 1 mês para que ele se limpe sozinho.',
          },
          {
            name: 'Conferir a visão geral do celular',
            text: 'A versão Android do Disk Mop lista as mídias do WhatsApp e do Telegram por tipo e tamanho em uma tela só, então você vê juntas as fotos, os vídeos, as mensagens de voz e os documentos dos dois apps e apaga o que não precisa mais.',
          },
        ],
      },
      sections: [
        {
          title: 'Por que o WhatsApp chega a 20 GB',
          content: [
            'Por padrão, o WhatsApp baixa fotos automaticamente em dados móveis e fotos, áudios, vídeos e documentos em Wi-Fi. Em dois ou três grupos ativos, isso significa que cada meme, vídeo encaminhado e mensagem de voz vai parar no celular, tenha você olhado ou não. Um grupo com cinquenta membros gera facilmente 100 MB por dia, e o WhatsApp nunca apaga nada sozinho.',
            'O segundo multiplicador é a Visibilidade da mídia, que vem ligada e faz cada arquivo baixado aparecer na galeria. As fotos então entram no backup do Google Fotos e algumas galerias as contam duas vezes no celular. Dois anos de uso comum bastam para o WhatsApp virar o maior app do celular, e é comum ver 10–20 GB em Configurações > Armazenamento.',
            'Nada disso é um defeito, e nada disso exige apagar conversas. As mensagens são minúsculas; o peso são as mídias, e o WhatsApp separa as duas coisas com clareza nas suas ferramentas de armazenamento.',
          ],
        },
        {
          title: 'Apagar mídias sem mexer nas conversas',
          content: [
            'Gerenciar armazenamento (Configurações > Armazenamento e dados > Gerenciar armazenamento) foi feito exatamente para isso. A visão Maiores que 5 MB lista todo arquivo grande de todas as conversas, ordenável por tamanho e data, e permite apagar em lote. A visão Encaminhados muitas vezes reúne os clipes virais que chegaram até você por vários grupos. Abaixo, as conversas aparecem por tamanho, para limpar um grupo pesado de cada vez.',
            'Quando você apaga um arquivo ali, a mensagem que o trazia continua na conversa com um marcador. Se quem enviou ainda tiver o arquivo, muitas vezes dá para baixá-lo de novo pela mensagem, mas não conte com isso; trate a exclusão como definitiva e faça backup antes do que quiser guardar. As mensagens favoritas podem ser excluídas da seleção para que seus favoritos sobrevivam a uma limpeza em lote.',
            'Duas coisas a evitar. Limpar cache nas configurações de apps do Android é seguro e raramente libera muito. Limpar armazenamento (ou Limpar dados) no app do WhatsApp não é limpeza: remove seu histórico local de conversas e desconecta você, e será preciso um backup no Google Drive para recuperar as conversas.',
          ],
        },
        {
          title: 'Impedir que aconteça de novo',
          content: [
            'A correção duradoura está em Configurações > Armazenamento e dados, em Download automático de mídia. Três linhas controlam o que é baixado em dados móveis, em Wi-Fi e em roaming. Definir dados móveis como Nenhuma mídia e Wi-Fi como Somente fotos impede que o celular encha de vídeos que você nunca pediu; tudo em que você tocar continua sendo baixado sob demanda.',
            'A Visibilidade da mídia, em Configurações > Conversas, decide se os arquivos baixados aparecem na galeria. Desligá-la nos grupos movimentados mantém os memes fora da sua biblioteca de fotos e do seu backup na nuvem. Para conversas individuais, a mesma chave fica na página de informações da conversa.',
            'O Telegram funciona de outro jeito: mantém um cache de tudo o que você vê e pode limitá-lo. Configurações > Dados e armazenamento > Uso de armazenamento mostra o cache por conversa e por tipo, e Manter mídia permite escolher 3 dias, 1 semana, 1 mês ou para sempre; passado o prazo, o Telegram apaga as cópias locais mantendo-as em seus servidores. Um controle de Tamanho máximo do cache na mesma tela limita o total.',
          ],
        },
        {
          title: 'Onde os arquivos realmente ficam no celular',
          content: [
            'No Android 11 e posteriores, o WhatsApp guarda as mídias em Android/media/com.whatsapp/WhatsApp/Media, com pastas para imagens, vídeo, áudio, mensagens de voz, documentos, figurinhas e status. Instalações antigas ainda usam uma pasta WhatsApp na raiz do armazenamento interno. Configurações > Armazenamento não mostra isso como WhatsApp; aparece em Apps, Imagens e Vídeos, ou Outros, e é por isso que o app parece menor ali do que realmente é.',
            'Por causa das regras de armazenamento delimitado do Android, gerenciadores de arquivos comuns conseguem navegar por essas pastas, mas alguns não conseguem apagar dentro delas sem permissões extras, e a pasta oculta .Statuses guarda em cache cada status que você viu. Apagar as mídias de dentro do WhatsApp, ou com um limpador que tenha permissão de mídia, é o caminho confiável.',
            'A versão Android do Disk Mop tem uma seção de Mensagens para isso: ela lê as pastas de mídia do WhatsApp e do Telegram, agrupa os arquivos por tipo, mostra os tamanhos antes de tocar em qualquer coisa e apaga só o que você marcar. Funciona inteiramente no celular, sem conta nem servidor, e as três primeiras exclusões individuais são gratuitas, para você ver o que ela encontra antes de pagar.',
          ],
        },
      ],
      dataTable: {
        caption: 'Padrões do download automático de mídia do WhatsApp e uma configuração mais leve',
        columns: ['Configuração', 'Padrão', 'Configuração mais leve'],
        rows: [
          ['Usando dados móveis', 'Fotos', 'Nenhuma mídia'],
          ['Conectado ao Wi-Fi', 'Fotos, áudios, vídeos, documentos', 'Somente fotos'],
          ['Em roaming', 'Nenhuma mídia', 'Nenhuma mídia'],
          ['Visibilidade da mídia (mostrar na galeria)', 'Ligada', 'Desligada em grupos movimentados'],
        ],
      },
      faq: [
        {
          question: 'Se eu apagar mídias do WhatsApp do meu celular, elas são apagadas para a outra pessoa?',
          answer:
            'Não. Apagar em Gerenciar armazenamento ou na galeria remove só a sua cópia local. O celular da outra pessoa e os servidores do WhatsApp não são afetados.',
        },
        {
          question: 'Limpar o cache do WhatsApp apaga minhas mensagens?',
          answer:
            'Não. Limpar cache nas configurações de apps do Android remove só arquivos temporários. Limpar armazenamento ou Limpar dados é diferente: apaga seu histórico local de conversas e desconecta você, então use só se tiver backup e pretender reinstalar.',
        },
        {
          question: 'Por que Configurações > Armazenamento mostra o WhatsApp como pequeno se ele usa gigabytes?',
          answer:
            'O Android conta a pasta de mídia do WhatsApp em Imagens, Vídeos, Áudio ou Outros, e não no app. A tela Gerenciar armazenamento do próprio WhatsApp mostra o total verdadeiro.',
        },
        {
          question: 'Apagar mídias deixa meu backup do Google Drive menor?',
          answer:
            'Sim. O backup inclui as mídias que ainda estão no celular, então remover vídeos antigos e mensagens de voz reduz o próximo backup e o deixa mais rápido.',
        },
      ],
      verdict: [
        'O WhatsApp é quase sempre o maior item isolado de um celular Android, e a solução nunca envolve apagar uma conversa. Use Gerenciar armazenamento para remover os arquivos grandes e encaminhados, limpe os grupos mais pesados e ajuste o download automático e a visibilidade da mídia do jeito que preferir. A configuração Manter mídia do Telegram faz o mesmo trabalho automaticamente.',
        'A versão Android do Disk Mop mostra as mídias do WhatsApp e do Telegram lado a lado com o resto do celular, então a limpeza cabe em uma tela em vez de cinco. Mostra os tamanhos antes de apagar qualquer coisa, não seleciona nada por você e roda inteiramente no aparelho.',
      ],
      ctaText: 'Baixe o Disk Mop no Google Play',
    },
    ja: {
      title: 'Android で WhatsApp の容量が大きすぎる: チャットを消さずにメディアを削除する',
      metaDescription:
        'Android の WhatsApp は気づかないうちに 10〜20 GB に達します。会話を 1 つも消さずに写真・動画・ボイスメッセージを削除する方法と、再び膨らむのを防ぐ設定を解説します。',
      subtitle: 'ストレージを管理、自動ダウンロード設定、WhatsApp が端末に残すフォルダー',
      intro: [
        '短い答え: WhatsApp が肥大化するのは、受信したすべての写真、動画、ボイスメッセージ、ドキュメントをダウンロードし、端末に永久に保存し続けるからです。これらのファイルは WhatsApp > 設定 > ストレージとデータ > ストレージを管理 から、メッセージを 1 件も消さずに削除できます。さらに、関心のないグループでメディアの自動ダウンロードをオフにすれば、増え続けるのを止められます。',
        'この記事では該当する画面を順に示し、メディアを削除したチャットがどうなるかを説明し、Telegram の対応する設定を取り上げ、ファイルが実際に置かれている端末内のフォルダーを示します。',
      ],
      keyTakeaways: [
        'WhatsApp > 設定 > ストレージとデータ > ストレージを管理 には、容量の大きいチャットと 5 MB を超えるすべてのファイルが一覧表示されます。ここから削除するとファイルは消えますが、メッセージは残ります。',
        '自分の端末でメディアを削除しても、相手側では削除されません。消えるのは自分のローカルコピーだけです。',
        '自動ダウンロードは既定でモバイルデータでは写真、Wi-Fi ではすべてが有効です。オフにすればチャットに影響を与えずに増加を止められます。',
        'WhatsApp のキャッシュ削除は無害ですが、「ストレージを消去」（データを削除）はログアウトさせ、チャットを戻すにはバックアップが必要になります。',
        'Android 11 以降、メディアは Android/media/com.whatsapp にあります。多くのファイルマネージャーは表示できても完全には管理できず、設定 > ストレージ では「アプリ」や「その他」として計上されます。',
        'Telegram は独自のキャッシュを持ちます。設定 > データとストレージ > ストレージの使用状況 から削除でき、メディアを保持する期間も設定できます。',
      ],
      howTo: {
        name: 'チャットを削除せずに Android の WhatsApp の容量を空ける',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'ストレージを管理を開く',
            text: 'WhatsApp で右上の 3 点メニュー > 設定 > ストレージとデータ > ストレージを管理 をタップします。上部に WhatsApp が端末で使用している容量と、2 つのショートカット「5MB以上」「何度も転送されたもの」が表示されます。',
          },
          {
            name: '大きいファイルから削除する',
            text: '「5MB以上」を開き、サイズ順に並べ替え、不要なものを選んでゴミ箱アイコンをタップします。長い動画や転送されたクリップが容量の大半を占めているのが普通です。メッセージはチャットに残ります。',
          },
          {
            name: 'チャットごとにメディアを整理する',
            text: 'ストレージを管理に戻ると、チャットがサイズ順に並んでいます。グループを開き、「すべて選択」をタップするか項目を個別に選んで削除します。スターを付けたものを残すには「スター付き」のチェックを外します。',
          },
          {
            name: '自動ダウンロードをオフにする',
            text: '設定 > ストレージとデータ の「メディアの自動ダウンロード」で、「モバイルデータ使用時」を「メディアなし」に、「Wi-Fi接続時」を「写真のみ」または「メディアなし」に設定します。タップしたメディアは引き続きダウンロードされます。',
          },
          {
            name: 'Telegram でも同じことをする',
            text: 'Telegram > 設定 > データとストレージ > ストレージの使用状況 にキャッシュがチャット別・種類別に表示されます。「キャッシュを削除」をタップし、「メディアを保持」を 1 週間または 1 か月にしておくと自動的に整理されます。',
          },
          {
            name: '端末全体の状況を確認する',
            text: 'Disk Mop の Android 版は WhatsApp と Telegram のメディアを種類とサイズ別に 1 つの画面に一覧表示します。両アプリの写真、動画、ボイスメッセージ、ドキュメントをまとめて確認し、不要になったものを削除できます。',
          },
        ],
      },
      sections: [
        {
          title: 'WhatsApp が 20 GB まで膨らむ理由',
          content: [
            'WhatsApp は既定で、モバイルデータでは写真を、Wi-Fi では写真、音声、動画、ドキュメントを自動ダウンロードします。活発なグループが 2 つ 3 つあれば、見たかどうかにかかわらず、すべてのミーム、転送された動画、ボイスメッセージが端末に入ってきます。メンバー 50 人のグループなら 1 日 100 MB は簡単に生み出しますし、WhatsApp が自分から何かを削除することはありません。',
            '2 つ目の要因は「メディアの表示」で、既定でオンになっており、ダウンロードしたファイルをすべてギャラリーに表示します。すると写真は Google フォトにバックアップされ、ギャラリーアプリによっては端末上で二重に数えられます。普通の使い方でも 2 年あれば WhatsApp は端末で最大のアプリになり、設定 > ストレージ で 10〜20 GB を目にするのは珍しくありません。',
            'これらはどれも不具合ではなく、会話を削除しなければならない理由にもなりません。メッセージ自体は極小で、重いのはメディアです。WhatsApp はストレージ機能の中でこの 2 つをきれいに分けています。',
          ],
        },
        {
          title: 'チャットに触れずにメディアを削除する',
          content: [
            'ストレージを管理（設定 > ストレージとデータ > ストレージを管理）はまさにこのための機能です。「5MB以上」の画面にはすべてのチャットの大きなファイルがサイズ順・日付順で並び、まとめて削除できます。「何度も転送されたもの」の画面には、複数のグループから届いた拡散クリップが集まります。その下にはチャットがサイズ順に並ぶので、重いグループを 1 つずつ整理できます。',
            'ここでファイルを削除しても、そのファイルを含んでいたメッセージはプレースホルダー付きでチャットに残ります。送信者がまだファイルを持っていれば後からメッセージから再ダウンロードできることも多いですが、当てにはしないでください。削除は取り消せないものとして扱い、残したいものは先にバックアップしましょう。スター付きメッセージは除外できるので、お気に入りは一括削除の対象になりません。',
            '避けるべきことが 2 つあります。Android のアプリ設定にある「キャッシュを削除」は安全ですが、空く容量はわずかです。WhatsApp アプリの「ストレージを消去」（または「データを削除」）は掃除ではありません。ローカルのチャット履歴を消してログアウトさせるため、チャットを戻すには Google ドライブのバックアップが必要になります。',
          ],
        },
        {
          title: '再発を防ぐ',
          content: [
            '恒久的な対策は 設定 > ストレージとデータ の「メディアの自動ダウンロード」にあります。3 つの項目で、モバイルデータ時、Wi-Fi 時、ローミング時に何をダウンロードするかを決めます。モバイルデータを「メディアなし」、Wi-Fi を「写真のみ」にすれば、頼んでもいない動画で端末が埋まることはなくなります。タップしたものはその場でダウンロードされます。',
            '設定 > チャット にある「メディアの表示」は、ダウンロードしたファイルをギャラリーに表示するかどうかを決めます。にぎやかなグループでオフにすれば、ミームが写真ライブラリやクラウドバックアップに入り込みません。個別のチャットでは、同じスイッチがチャットの情報ページにあります。',
            'Telegram の仕組みは異なります。閲覧したものすべてのキャッシュを保持し、その上限を設定できます。設定 > データとストレージ > ストレージの使用状況 にキャッシュがチャット別・種類別に表示され、「メディアを保持」で 3 日、1 週間、1 か月、無期限のいずれかを選べます。期限を過ぎると Telegram はローカルコピーを削除しますが、サーバー上には残ります。同じ画面の「キャッシュの最大サイズ」スライダーで合計容量に上限を設けられます。',
          ],
        },
        {
          title: 'ファイルは端末のどこにあるのか',
          content: [
            'Android 11 以降、WhatsApp はメディアを Android/media/com.whatsapp/WhatsApp/Media に保存し、画像、動画、音声、ボイスメッセージ、ドキュメント、ステッカー、ステータスごとのフォルダーに分けています。古いインストールでは内部ストレージ直下の WhatsApp フォルダーが今も使われています。設定 > ストレージ はこれを WhatsApp として表示せず、「アプリ」「画像と動画」「その他」に振り分けるため、実際よりアプリが小さく見えるのです。',
            'Android のスコープ付きストレージの規則により、一般的なファイルマネージャーはこれらのフォルダーを閲覧できますが、追加の権限なしには中のファイルを削除できないものもあります。また隠しフォルダー .Statuses には閲覧したすべてのステータスがキャッシュされます。WhatsApp の中から削除するか、メディア権限を持つクリーナーで削除するのが確実な方法です。',
            'Disk Mop の Android 版にはこのための「メッセージ」セクションがあります。WhatsApp と Telegram のメディアフォルダーを読み取り、ファイルを種類別にまとめ、何かに触れる前にサイズを表示し、チェックを入れたものだけを削除します。アカウントもサーバーも不要で、処理はすべて端末内で完結します。最初の 3 回の個別削除は無料なので、支払う前に何が見つかるかを確認できます。',
          ],
        },
      ],
      dataTable: {
        caption: 'WhatsApp のメディア自動ダウンロードの既定値と、より軽い設定',
        columns: ['設定', '既定値', 'より軽い設定'],
        rows: [
          ['モバイルデータ使用時', '写真', 'メディアなし'],
          ['Wi-Fi接続時', '写真、音声、動画、ドキュメント', '写真のみ'],
          ['ローミング時', 'メディアなし', 'メディアなし'],
          ['メディアの表示（ギャラリーに表示）', 'オン', 'にぎやかなグループではオフ'],
        ],
      },
      faq: [
        {
          question: '自分の端末から WhatsApp のメディアを削除すると、相手側でも削除されますか。',
          answer:
            'いいえ。ストレージを管理やギャラリーから削除しても、消えるのは自分のローカルコピーだけです。相手の端末や WhatsApp のサーバーには影響しません。',
        },
        {
          question: 'WhatsApp のキャッシュを削除するとメッセージは消えますか。',
          answer:
            'いいえ。Android のアプリ設定にある「キャッシュを削除」は一時ファイルを消すだけです。「ストレージを消去」や「データを削除」は別物で、ローカルのチャット履歴を消してログアウトさせます。バックアップがあり、再インストールするつもりの場合だけ使ってください。',
        },
        {
          question: 'WhatsApp が数ギガバイト使っているのに、設定 > ストレージ では小さく表示されるのはなぜですか。',
          answer:
            'Android は WhatsApp のメディアフォルダーをアプリではなく「画像」「動画」「音声」「その他」として計上するからです。WhatsApp 自身の「ストレージを管理」画面が本当の合計を示します。',
        },
        {
          question: 'メディアを削除すると Google ドライブのバックアップは小さくなりますか。',
          answer:
            'はい。バックアップには端末にまだ残っているメディアが含まれるため、古い動画やボイスメッセージを削除すれば次回のバックアップは小さく、速くなります。',
        },
      ],
      verdict: [
        'WhatsApp はほぼ常に Android 端末で最大の単一項目ですが、解決にチャットの削除が必要になることはありません。ストレージを管理で大きなファイルと転送されたファイルを削除し、最も重いグループを整理し、自動ダウンロードとメディアの表示を自分に合った設定に切り替えましょう。Telegram の「メディアを保持」設定は同じことを自動でやってくれます。',
        'Disk Mop の Android 版は WhatsApp と Telegram のメディアを端末の他の内容と並べて表示するので、掃除が 5 画面ではなく 1 画面で済みます。削除前にサイズを表示し、勝手に何かを選ぶことはなく、すべて端末内で動作します。',
      ],
      ctaText: 'Google Play で Disk Mop を入手',
    },
  },
};
