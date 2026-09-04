import type { Article } from '../types';

export const androidStorageFull: Article = {
  slug: 'android-storage-full',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'Android Telefonda Depolama Dolu: Yeri Gerçekte Ne Kaplıyor?',
      metaDescription:
        'Android depolama dolu uyarısı alıyorsanız yeri kaplayan genelde fotoğraf değil: WhatsApp medyası, uygulama önbelleği ve kaldırılan uygulamaların artıkları. Sırayla ne temizlenir?',
      subtitle: 'Fotoğrafları Silmeden Önce Bakılacak Dört Yer',
      intro: [
        'Kısa cevap: Android\'de yeri kaplayan ilk üç şey neredeyse her zaman mesajlaşma medyası (WhatsApp/Telegram), uygulama önbelleği ve İndirilenler klasörüdür. Ayarlar > Depolama ekranındaki "Diğer" kalemi ise çoğunlukla kaldırılmış uygulamaların geride bıraktığı klasörlerdir. Fotoğraflarınızı silmeye başlamadan önce bu dördünü temizleyin.',
        'Telefon "depolama alanı yetersiz" dediğinde ilk refleks galeriye gitmek olur, ama bu genelde yanlış yerdir. Modern bir telefonda 200 fotoğraf birkaç yüz megabayt tutarken, iki yıllık bir WhatsApp geçmişi tek başına 15-20 GB\'a çıkabilir. Bu rehberde alanın gerçekte nereye gittiğini, neyin güvenle silinebileceğini ve neye dokunulmaması gerektiğini anlatıyoruz.',
      ],
      keyTakeaways: [
        'Ayarlar > Depolama ekranı kategorileri gösterir ama "Sistem" kalemi silinemez; onu temizlemeye çalışmayın.',
        'WhatsApp ve Telegram medyası çoğu telefonda en büyük tek kalemdir; sohbetleri silmeden yalnızca medyayı temizleyebilirsiniz.',
        'Uygulama önbelleğini silmek veri kaybettirmez: oturumunuz açık kalır, ayarlarınız korunur. Uygulama depolamasını (veri) silmek ise sizi çıkış yaptırır.',
        'Kaldırdığınız uygulamalar `Android/data` ve `Android/media` altında klasör bırakabilir; bunlar "Diğer" kategorisinde görünür.',
        'Google Fotoğraflar\'da yedekleme açıksa "Yer aç" seçeneği yedeklenmiş fotoğrafların yalnızca telefondaki kopyasını siler.',
        'Android 11 ve sonrasında dosya yöneticileri `Android/data` klasörünü göremez; bu klasörlere erişim uygulamanın kendi ayarlarından veya özel izinle yapılır.',
      ],
      howTo: {
        name: 'Android telefonda yer açma',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Neyin yer kapladığını görün',
            text: 'Ayarlar > Depolama yolunu açın. Kategorilerin boyutlarına bakın: Uygulamalar, Resimler, Videolar, Ses, Belgeler ve Diğer. Hangi kalemin beklenenden büyük olduğunu not edin.',
          },
          {
            name: 'Mesajlaşma medyasını temizleyin',
            text: 'WhatsApp\'ta Ayarlar > Depolama ve veriler > Depolamayı yönet ekranı en çok yer kaplayan sohbetleri ve 5 MB üzeri dosyaları listeler. Buradan sohbeti silmeden yalnızca medyayı kaldırabilirsiniz.',
          },
          {
            name: 'Uygulama önbelleğini boşaltın',
            text: 'Ayarlar > Uygulamalar içinden büyük bir uygulamayı seçin, Depolama ve önbellek > Önbelleği temizle. Bu işlem oturumunuzu kapatmaz. "Depolamayı temizle" ise uygulamayı sıfırlar, onu yalnızca bilerek kullanın.',
          },
          {
            name: 'Fotoğrafları yedekleyip yerelden kaldırın',
            text: 'Google Fotoğraflar\'da yedekleme açıksa profil simgesi > "Cihazda yer aç" seçeneği, bulutta güvende olan fotoğrafların telefondaki kopyalarını siler. Yedekleme kapalıysa bu adımı atlayın.',
          },
          {
            name: 'İndirilenleri ve kullanılmayan uygulamaları gözden geçirin',
            text: 'Dosyalar uygulamasında İndirilenler klasörünü açın; kurulum dosyaları (APK), arşivler ve eski belgeler burada birikir. Ardından aylardır açmadığınız uygulamaları kaldırın.',
          },
        ],
      },
      sections: [
        {
          title: 'Depolama Ekranındaki "Diğer" Nedir?',
          content: [
            'Ayarlar > Depolama ekranı alanı kategorilere böler, ama en kafa karıştırıcı kalem "Diğer" veya "Diğer dosyalar" olarak görünendir. Bu, Android\'in bilinen bir kategoriye sokamadığı her şeydir: uygulamaların dış depolamaya yazdığı veri klasörleri, oyun varlık paketleri, çevrimdışı haritalar, indirilen diziler ve kaldırılmış uygulamaların geride bıraktığı klasörler.',
            'Kaldırma artıkları özellikle sinsi bir kalemdir. Bir uygulamayı sildiğinizde Android onun `Android/data/<paket.adı>` klasörünü genellikle temizler, ama `Android/media` altındaki dosyalar ve uygulamanın kök dizine yazdığı klasörler kalabilir. Aylar sonra bu klasörler tek başına birkaç gigabayta ulaşabilir ve hangi uygulamaya ait olduklarını hatırlamazsınız.',
            '"Sistem" kalemi ise farklıdır ve buna dokunulamaz. Android sürümü, önyükleyici ve üretici yazılımı burada sayılır. Bazı telefonlarda 15-25 GB görünmesi normaldir; bunu küçültmenin bir yolu yoktur ve küçültmeye çalışan uygulamalardan uzak durun.',
          ],
        },
        {
          title: 'Asıl Suçlu Genelde Mesajlaşma Uygulamaları',
          content: [
            'WhatsApp varsayılan olarak aldığınız her fotoğrafı, videoyu, sesli mesajı ve belgeyi telefona indirir ve galeriye kaydeder. Aktif grupların olduğu bir hesapta bu birikim ayda birkaç gigabayta ulaşır. İki yıl sonra WhatsApp klasörü tek başına 15-20 GB olabilir.',
            'İyi haber, sohbetlerinizi kaybetmeden bunu temizleyebilmenizdir. WhatsApp\'ta Ayarlar > Depolama ve veriler > Depolamayı yönet ekranı, en çok yer kaplayan sohbetleri ve 5 MB\'tan büyük dosyaları ayrı ayrı listeler. Buradan yalnızca medyayı silerseniz mesaj metinleri yerinde kalır.',
            'Kalıcı çözüm otomatik indirmeyi kısmaktır: aynı ekrandaki "Medyanın otomatik indirilmesi" ayarını mobil veride ve Wi-Fi\'da "yalnızca fotoğraflar" ya da tamamen kapalı yapabilirsiniz. Telegram\'da karşılığı Ayarlar > Veri ve depolama > Depolama kullanımı ekranıdır ve önbelleği kaç günde bir temizleyeceğini belirleyebilirsiniz.',
          ],
        },
        {
          title: 'Önbellek Silmek Güvenli mi?',
          content: [
            'Evet, uygulama önbelleğini silmek güvenlidir ve veri kaybettirmez. Önbellek, uygulamanın hızlı çalışmak için sakladığı geçici kopyalardır: küçük resimler, indirilmiş görseller, arama sonuçları. Silindiğinde uygulama bir sonraki açılışta bunları yeniden oluşturur; oturumunuz açık kalır, ayarlarınız korunur.',
            'Karıştırılmaması gereken şey "Depolamayı temizle" (veya "Verileri temizle") seçeneğidir. Bu, uygulamayı yeni kurulmuş hâline döndürür: oturumunuz kapanır, uygulama içi ayarlar sıfırlanır, çevrimdışı indirdikleriniz gider. Sadece bir uygulama bozulduğunda ve ne yaptığınızı bilerek kullanın.',
            'Android 8 ile birlikte "tüm önbelleği tek seferde temizle" düğmesi sistemden kaldırıldı; artık uygulama uygulama ilerlemek gerekiyor. Disk Mop\'un Android sürümü bu adımı tek ekranda toplar: uygulamaları önbellek boyutuna göre sıralar ve neyin ne kadar yer kapladığını silmeden önce gösterir.',
          ],
        },
        {
          title: 'Fotoğraflar: Silmeden Yer Açmak',
          content: [
            'Fotoğrafları silmek çoğu kişinin en son yapmak istediği şeydir, üstelik genellikle gerekmez. Google Fotoğraflar\'da yedekleme açıksa, profil simgesine dokunup "Cihazda yer aç" seçeneğini kullandığınızda uygulama yalnızca buluta güvenle yüklenmiş fotoğrafların telefondaki kopyasını siler. Fotoğraflar uygulamada görünmeye devam eder, sadece internet gerektirir.',
            'Yedekleme kapalıysa bu seçeneği kullanmayın; o durumda silinen fotoğrafın başka kopyası olmaz. Önce yedeklemeyi açın, tamamlanmasını bekleyin, sonra yer açın.',
            'Yerelde asıl yeri kaplayanlar genelde fotoğraflar değil videolardır. Bir dakikalık 4K video 350-500 MB tutar; birkaç ekran kaydı ve tatil videosu kolayca birkaç gigabayt eder. Ayrıca ekran görüntüleri, aynı anın art arda çekilmiş kopyaları ve bulanık kareler de birikir — Disk Mop\'un Android sürümü fotoğrafları eski, büyük, bulanık, benzer ve ekran görüntüsü olarak ayırıp bunları toplu seçmenizi sağlar.',
          ],
        },
      ],
      faq: [
        {
          question: 'Depolamayı temizleyen uygulamalar telefonu hızlandırır mı?',
          answer:
            'Doğrudan hızlandırmaz. Android boş RAM\'i verimsizlik değil, verimlilik sayar ve arka plan uygulamalarını kendi yönetir. Ancak depolama %90\'ın üzerinde dolduğunda dosya sistemi yazma işlemleri yavaşlar; bu durumda yer açmak gözle görülür bir fark yaratır.',
        },
        {
          question: 'Android/data klasörünü dosya yöneticisiyle göremiyorum, neden?',
          answer:
            'Android 11 ile gelen kapsamlı depolama (scoped storage) kuralları gereği dosya yöneticileri bu klasörü listeleyemez. Uygulamaların kendi verilerine erişim, uygulamanın içinden veya özel izin verilmiş yönetim uygulamalarıyla yapılır.',
        },
        {
          question: 'SD kart takarsam sorun çözülür mü?',
          answer:
            'Kısmen. SD kart fotoğraf, video ve müzik için iyi bir alandır ama çoğu uygulama kendisini ve verisini dâhili depolamada tutmak zorundadır. Ayrıca ucuz kartlar yavaş olabilir; kamera ve oyun performansını etkiler.',
        },
        {
          question: 'Telefonu fabrika ayarlarına döndürmek en temiz çözüm mü?',
          answer:
            'En radikal çözümdür ama nadiren gereklidir. Yukarıdaki dört adım (mesajlaşma medyası, önbellek, indirilenler, kullanılmayan uygulamalar) tipik bir telefonda 10-20 GB açar. Fabrika ayarı yalnızca sistem gerçekten bozulduğunda mantıklıdır.',
        },
      ],
      verdict: [
        'Android\'de "depolama dolu" sorununun çözümü fotoğraf silmek değil, doğru sırayla ilerlemektir: önce mesajlaşma medyası, sonra uygulama önbelleği, ardından indirilenler ve kullanılmayan uygulamalar. Bu dördü tipik bir telefonda 10-20 GB açar ve hiçbir anınızı kaybettirmez.',
        'Disk Mop\'un Android sürümü bu adımları tek uygulamada toplar: çöp temizliği, fotoğraf ayıklama (eski, büyük, bulanık, benzer, ekran görüntüsü), WhatsApp ve Telegram medyası, indirilenler ve uygulama yönetimi. Her adımda ne silineceğini önce gösterir, onayınızı bekler.',
      ],
      ctaText: 'Disk Mop\'u Google Play\'den indirin',
    },
    en: {
      title: 'Android Storage Full: What Is Actually Taking Up the Space?',
      metaDescription:
        'When Android says storage is full, the culprit is rarely your photos: it is messaging media, app cache and leftovers from uninstalled apps. Here is what to clear, in order.',
      subtitle: 'Four Places to Look Before You Delete a Single Photo',
      intro: [
        'Short answer: the top three space consumers on Android are almost always messaging media (WhatsApp/Telegram), app cache and the Downloads folder. The "Other" line in Settings > Storage is usually folders left behind by apps you already uninstalled. Clear those four before you start deleting photos.',
        'When a phone says "storage space running out", the first instinct is to open the gallery — usually the wrong place. On a modern phone 200 photos take a few hundred megabytes, while two years of WhatsApp history can reach 15-20 GB on its own. This guide shows where the space actually goes, what is safe to delete, and what you should leave alone.',
      ],
      keyTakeaways: [
        'Settings > Storage shows categories, but the "System" figure cannot be cleared — do not try to shrink it.',
        'WhatsApp and Telegram media is the single largest item on most phones; you can clear only the media without deleting the chats.',
        'Clearing an app cache loses no data: you stay signed in and settings are kept. Clearing app storage (data) signs you out and resets the app.',
        'Uninstalled apps can leave folders under `Android/data` and `Android/media`; those show up under "Other".',
        'If Google Photos backup is on, "Free up space" removes only the local copy of photos already saved to the cloud.',
        'On Android 11 and later, file managers cannot list the `Android/data` folder; access happens from inside the app or with a special permission.',
      ],
      howTo: {
        name: 'Free up space on an Android phone',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'See what is using the space',
            text: 'Open Settings > Storage. Look at the size of each category: Apps, Images, Videos, Audio, Documents and Other. Note which line is larger than you expected.',
          },
          {
            name: 'Clear messaging media',
            text: 'In WhatsApp, Settings > Storage and data > Manage storage lists the largest chats and every file over 5 MB. From there you can remove media without deleting the conversation.',
          },
          {
            name: 'Empty app caches',
            text: 'Go to Settings > Apps, pick a large app, then Storage and cache > Clear cache. This does not sign you out. "Clear storage" resets the app, so use it deliberately.',
          },
          {
            name: 'Back up photos, then free the local copies',
            text: 'If Google Photos backup is on, tap your profile icon and choose "Free up space on this device" to delete local copies of photos already safe in the cloud. Skip this step if backup is off.',
          },
          {
            name: 'Review Downloads and unused apps',
            text: 'Open the Downloads folder in the Files app; installers (APKs), archives and old documents pile up there. Then uninstall apps you have not opened in months.',
          },
        ],
      },
      sections: [
        {
          title: 'What Is "Other" in the Storage Screen?',
          content: [
            'Settings > Storage splits usage into categories, and the most confusing line is the one labelled "Other" or "Other files". It is everything Android could not sort into a known category: data folders apps write to external storage, game asset packs, offline maps, downloaded series, and folders left behind by apps you removed.',
            'Uninstall leftovers are a particularly sneaky item. When you remove an app, Android usually clears its `Android/data/<package.name>` folder, but files under `Android/media` and folders the app wrote to the root directory can survive. Months later those folders add up to several gigabytes and you no longer remember which app they belonged to.',
            'The "System" figure is different and untouchable. The Android version, bootloader and manufacturer firmware are counted there. On some phones 15-25 GB is normal; there is no way to shrink it, and you should stay away from any app claiming otherwise.',
          ],
        },
        {
          title: 'The Real Culprit Is Usually Messaging',
          content: [
            'By default WhatsApp downloads every photo, video, voice message and document you receive and saves it to the gallery. On an account with active groups that accumulates several gigabytes a month. After two years the WhatsApp folder alone can be 15-20 GB.',
            'The good news is that you can clear it without losing conversations. In WhatsApp, Settings > Storage and data > Manage storage lists the chats using the most space and every file larger than 5 MB, separately. Deleting only the media there leaves the message text in place.',
            'The lasting fix is to limit auto-download: on the same screen, set "Media auto-download" to photos only, or off entirely, on both mobile data and Wi-Fi. The Telegram equivalent is Settings > Data and storage > Storage usage, where you can also set how often the cache clears itself.',
          ],
        },
        {
          title: 'Is Clearing Cache Safe?',
          content: [
            'Yes, clearing an app cache is safe and loses no data. The cache holds temporary copies an app keeps so it can start faster: thumbnails, downloaded images, search results. Once cleared, the app rebuilds them on next launch; you stay signed in and your settings are kept.',
            'The option not to confuse it with is "Clear storage" (or "Clear data"). That returns the app to a freshly installed state: you are signed out, in-app settings reset, and anything downloaded for offline use is gone. Use it only when an app is misbehaving and you know what you are doing.',
            'Android 8 removed the system-wide "clear all cached data" button, so today you have to work app by app. The Android version of Disk Mop collects this into one screen: it sorts apps by cache size and shows exactly what each one holds before anything is deleted.',
          ],
        },
        {
          title: 'Photos: Freeing Space Without Deleting',
          content: [
            'Deleting photos is the last thing most people want to do, and usually it is not necessary. If Google Photos backup is on, tapping your profile icon and choosing "Free up space on this device" removes only the local copy of photos already uploaded safely. The photos still appear in the app; they just need a connection.',
            'Do not use that option if backup is off — in that case the deleted photo has no other copy. Turn backup on first, wait for it to finish, then free the space.',
            'Locally, the real space usually goes to video rather than photos. One minute of 4K video is 350-500 MB; a few screen recordings and holiday clips easily reach several gigabytes. Screenshots, burst copies of the same moment and blurred frames accumulate too — the Android version of Disk Mop sorts photos into old, large, blurry, similar and screenshots so you can select them in bulk.',
          ],
        },
      ],
      faq: [
        {
          question: 'Do storage cleaner apps make a phone faster?',
          answer:
            'Not directly. Android treats free RAM as wasted RAM and manages background apps itself. However, once storage is over 90% full, filesystem writes do slow down — in that situation freeing space makes a noticeable difference.',
        },
        {
          question: 'Why can my file manager not see the Android/data folder?',
          answer:
            'Scoped storage rules introduced in Android 11 stop file managers from listing that folder. Access to app data happens from inside the app itself, or through management apps granted a special permission.',
        },
        {
          question: 'Will adding an SD card solve it?',
          answer:
            'Partly. An SD card is good for photos, video and music, but most apps must keep themselves and their data on internal storage. Cheap cards can also be slow, which affects camera and game performance.',
        },
        {
          question: 'Is a factory reset the cleanest fix?',
          answer:
            'It is the most drastic one and rarely necessary. The four steps above (messaging media, cache, downloads, unused apps) free 10-20 GB on a typical phone. A reset only makes sense when the system itself is genuinely broken.',
        },
      ],
      verdict: [
        'Fixing "storage full" on Android is not about deleting photos, it is about working in the right order: messaging media first, then app cache, then downloads and unused apps. Those four free 10-20 GB on a typical phone without costing you a single memory.',
        'The Android version of Disk Mop brings those steps into one app: junk cleanup, photo triage (old, large, blurry, similar, screenshots), WhatsApp and Telegram media, downloads and app management. Every step shows what will be deleted first and waits for your confirmation.',
      ],
      ctaText: 'Get Disk Mop on Google Play',
    },
    de: {
      title: 'Android-Speicher voll: Was belegt den Platz wirklich?',
      metaDescription:
        'Wenn Android meldet, der Speicher sei voll, sind selten die Fotos schuld: Es sind Messenger-Medien, App-Cache und Reste deinstallierter Apps. Was in welcher Reihenfolge zu löschen ist.',
      subtitle: 'Vier Stellen, bevor Sie ein einziges Foto löschen',
      intro: [
        'Kurze Antwort: Die drei größten Platzfresser unter Android sind fast immer Messenger-Medien (WhatsApp/Telegram), der App-Cache und der Ordner Downloads. Der Posten "Sonstiges" unter Einstellungen > Speicher besteht meist aus Ordnern, die bereits deinstallierte Apps hinterlassen haben. Räumen Sie diese vier auf, bevor Sie Fotos löschen.',
        'Meldet das Telefon "Speicherplatz wird knapp", geht der erste Griff zur Galerie — meist die falsche Stelle. Auf einem modernen Gerät belegen 200 Fotos einige hundert Megabyte, während zwei Jahre WhatsApp-Verlauf allein 15-20 GB erreichen können. Dieser Leitfaden zeigt, wohin der Platz tatsächlich geht, was sich gefahrlos löschen lässt und was Sie in Ruhe lassen sollten.',
      ],
      keyTakeaways: [
        'Einstellungen > Speicher zeigt Kategorien, aber der Wert "System" lässt sich nicht bereinigen — versuchen Sie es gar nicht erst.',
        'WhatsApp- und Telegram-Medien sind auf den meisten Telefonen der größte Einzelposten; die Medien lassen sich löschen, ohne die Chats anzutasten.',
        'Das Leeren des App-Cache kostet keine Daten: Sie bleiben angemeldet, Einstellungen bleiben erhalten. "Speicher löschen" meldet Sie hingegen ab und setzt die App zurück.',
        'Deinstallierte Apps können Ordner unter `Android/data` und `Android/media` hinterlassen; sie erscheinen unter "Sonstiges".',
        'Ist die Sicherung in Google Fotos aktiv, entfernt "Speicherplatz freigeben" nur die lokale Kopie bereits gesicherter Fotos.',
        'Ab Android 11 können Dateimanager den Ordner `Android/data` nicht mehr auflisten; der Zugriff erfolgt aus der App heraus oder mit einer besonderen Berechtigung.',
      ],
      howTo: {
        name: 'Speicherplatz auf einem Android-Telefon freigeben',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Sehen, was den Platz belegt',
            text: 'Öffnen Sie Einstellungen > Speicher. Prüfen Sie die Größe jeder Kategorie: Apps, Bilder, Videos, Audio, Dokumente und Sonstiges. Notieren Sie, welcher Posten größer ist als erwartet.',
          },
          {
            name: 'Messenger-Medien bereinigen',
            text: 'In WhatsApp listet Einstellungen > Speicher und Daten > Speicher verwalten die größten Chats und alle Dateien über 5 MB. Dort lassen sich Medien entfernen, ohne die Unterhaltung zu löschen.',
          },
          {
            name: 'App-Caches leeren',
            text: 'Gehen Sie zu Einstellungen > Apps, wählen Sie eine große App und dann Speicher und Cache > Cache leeren. Das meldet Sie nicht ab. "Speicher löschen" setzt die App zurück — bewusst einsetzen.',
          },
          {
            name: 'Fotos sichern, dann lokale Kopien freigeben',
            text: 'Ist die Sicherung in Google Fotos aktiv, tippen Sie auf Ihr Profilbild und wählen "Speicherplatz auf diesem Gerät freigeben". Ist die Sicherung aus, überspringen Sie diesen Schritt.',
          },
          {
            name: 'Downloads und ungenutzte Apps durchsehen',
            text: 'Öffnen Sie den Ordner Downloads in der Dateien-App; Installationsdateien (APKs), Archive und alte Dokumente sammeln sich dort. Deinstallieren Sie anschließend Apps, die Sie seit Monaten nicht geöffnet haben.',
          },
        ],
      },
      sections: [
        {
          title: 'Was ist "Sonstiges" im Speicher-Bildschirm?',
          content: [
            'Einstellungen > Speicher teilt die Belegung in Kategorien auf, und der verwirrendste Posten heißt "Sonstiges" oder "Andere Dateien". Darin steckt alles, was Android keiner bekannten Kategorie zuordnen konnte: Datenordner, die Apps in den externen Speicher schreiben, Asset-Pakete von Spielen, Offline-Karten, heruntergeladene Serien und Ordner entfernter Apps.',
            'Deinstallationsreste sind ein besonders heimtückischer Posten. Beim Entfernen einer App löscht Android in der Regel den Ordner `Android/data/<Paketname>`, doch Dateien unter `Android/media` und Ordner im Wurzelverzeichnis können überleben. Monate später summieren sich diese Ordner auf mehrere Gigabyte, und man weiß nicht mehr, zu welcher App sie gehörten.',
            'Der Wert "System" ist etwas anderes und unantastbar. Android-Version, Bootloader und Hersteller-Firmware werden dort gezählt. Auf manchen Telefonen sind 15-25 GB normal; verkleinern lässt sich das nicht, und Apps, die es versprechen, sollten Sie meiden.',
          ],
        },
        {
          title: 'Der eigentliche Übeltäter ist meist der Messenger',
          content: [
            'WhatsApp lädt standardmäßig jedes empfangene Foto, Video, jede Sprachnachricht und jedes Dokument herunter und speichert es in der Galerie. Bei aktiven Gruppen kommen so mehrere Gigabyte pro Monat zusammen. Nach zwei Jahren kann allein der WhatsApp-Ordner 15-20 GB groß sein.',
            'Die gute Nachricht: Das lässt sich bereinigen, ohne Unterhaltungen zu verlieren. In WhatsApp listet Einstellungen > Speicher und Daten > Speicher verwalten die platzintensivsten Chats und alle Dateien über 5 MB getrennt auf. Löschen Sie dort nur die Medien, bleiben die Nachrichtentexte erhalten.',
            'Dauerhaft hilft, den automatischen Download zu begrenzen: Stellen Sie im selben Bildschirm "Automatischer Medien-Download" für Mobilfunk und WLAN auf "nur Fotos" oder ganz aus. Das Gegenstück in Telegram ist Einstellungen > Daten und Speicher > Speichernutzung, wo sich zusätzlich einstellen lässt, wie oft sich der Cache selbst leert.',
          ],
        },
        {
          title: 'Ist das Leeren des Cache sicher?',
          content: [
            'Ja, das Leeren des App-Cache ist sicher und kostet keine Daten. Der Cache enthält temporäre Kopien, die eine App für schnelleren Start vorhält: Miniaturbilder, geladene Grafiken, Suchergebnisse. Nach dem Leeren baut die App sie beim nächsten Start neu auf; Sie bleiben angemeldet, Einstellungen bleiben erhalten.',
            'Nicht zu verwechseln ist das mit "Speicher löschen" (oder "Daten löschen"). Das versetzt die App in den Zustand direkt nach der Installation: Sie werden abgemeldet, App-interne Einstellungen sind zurückgesetzt, Offline-Downloads sind weg. Nutzen Sie es nur, wenn eine App wirklich klemmt.',
            'Mit Android 8 verschwand die systemweite Schaltfläche "gesamten Cache leeren", heute muss man App für App vorgehen. Die Android-Version von Disk Mop fasst diesen Schritt in einem Bildschirm zusammen: Sie sortiert Apps nach Cache-Größe und zeigt vor dem Löschen genau, was jede einzelne belegt.',
          ],
        },
        {
          title: 'Fotos: Platz schaffen, ohne zu löschen',
          content: [
            'Fotos zu löschen ist das Letzte, was die meisten wollen, und meist gar nicht nötig. Ist die Sicherung in Google Fotos aktiv, entfernt der Weg über das Profilbild und "Speicherplatz auf diesem Gerät freigeben" nur die lokale Kopie bereits hochgeladener Fotos. Die Bilder bleiben in der App sichtbar, brauchen dann aber eine Verbindung.',
            'Nutzen Sie diese Option nicht, wenn die Sicherung aus ist — dann existiert vom gelöschten Foto keine weitere Kopie. Erst Sicherung einschalten, abwarten, dann Platz freigeben.',
            'Lokal geht der Platz meist eher an Videos als an Fotos. Eine Minute 4K-Video belegt 350-500 MB; ein paar Bildschirmaufnahmen und Urlaubsclips ergeben schnell mehrere Gigabyte. Dazu kommen Screenshots, Serienaufnahmen desselben Moments und unscharfe Bilder — die Android-Version von Disk Mop sortiert Fotos nach alt, groß, unscharf, ähnlich und Screenshot, sodass sie sich gesammelt auswählen lassen.',
          ],
        },
      ],
      faq: [
        {
          question: 'Machen Speicher-Reiniger das Telefon schneller?',
          answer:
            'Nicht unmittelbar. Android betrachtet freien Arbeitsspeicher als verschwendet und verwaltet Hintergrund-Apps selbst. Ist der Speicher jedoch zu über 90 % belegt, werden Schreibvorgänge im Dateisystem langsamer — dann bringt Platzschaffen einen spürbaren Unterschied.',
        },
        {
          question: 'Warum sieht mein Dateimanager den Ordner Android/data nicht?',
          answer:
            'Die mit Android 11 eingeführten Regeln zum bereichsbezogenen Speicher (scoped storage) verhindern das Auflisten dieses Ordners. Der Zugriff auf App-Daten erfolgt aus der App selbst oder über Verwaltungs-Apps mit besonderer Berechtigung.',
        },
        {
          question: 'Löst eine SD-Karte das Problem?',
          answer:
            'Teilweise. Eine SD-Karte eignet sich für Fotos, Video und Musik, aber die meisten Apps müssen sich und ihre Daten im internen Speicher halten. Günstige Karten sind zudem oft langsam, was Kamera und Spiele beeinträchtigt.',
        },
        {
          question: 'Ist das Zurücksetzen auf Werkseinstellungen die sauberste Lösung?',
          answer:
            'Es ist die drastischste und selten nötig. Die vier Schritte oben (Messenger-Medien, Cache, Downloads, ungenutzte Apps) geben auf einem typischen Telefon 10-20 GB frei. Ein Zurücksetzen lohnt nur, wenn das System tatsächlich defekt ist.',
        },
      ],
      verdict: [
        'Bei "Speicher voll" unter Android geht es nicht ums Löschen von Fotos, sondern um die richtige Reihenfolge: zuerst Messenger-Medien, dann App-Cache, dann Downloads und ungenutzte Apps. Diese vier geben auf einem typischen Telefon 10-20 GB frei, ohne eine einzige Erinnerung zu kosten.',
        'Die Android-Version von Disk Mop bündelt diese Schritte in einer App: Junk-Bereinigung, Foto-Sortierung (alt, groß, unscharf, ähnlich, Screenshots), WhatsApp- und Telegram-Medien, Downloads und App-Verwaltung. Jeder Schritt zeigt zuerst, was gelöscht wird, und wartet auf Ihre Bestätigung.',
      ],
      ctaText: 'Disk Mop bei Google Play holen',
    },
    fr: {
      title: 'Stockage Android saturé : qu\'est-ce qui prend vraiment la place ?',
      metaDescription:
        'Quand Android annonce un stockage plein, ce sont rarement vos photos : ce sont les médias de messagerie, le cache des applis et les résidus d\'applis désinstallées. Que vider, et dans quel ordre.',
      subtitle: 'Quatre endroits à vérifier avant de supprimer la moindre photo',
      intro: [
        'Réponse courte : les trois plus gros consommateurs d\'espace sur Android sont presque toujours les médias de messagerie (WhatsApp/Telegram), le cache des applications et le dossier Téléchargements. La ligne « Autre » dans Paramètres > Stockage correspond le plus souvent aux dossiers laissés par des applis déjà désinstallées. Videz ces quatre postes avant de supprimer des photos.',
        'Quand le téléphone affiche « espace de stockage insuffisant », le réflexe est d\'ouvrir la galerie — généralement au mauvais endroit. Sur un téléphone moderne, 200 photos occupent quelques centaines de mégaoctets, alors que deux ans d\'historique WhatsApp peuvent atteindre 15 à 20 Go à eux seuls. Ce guide montre où part réellement la place, ce qui se supprime sans risque et ce qu\'il faut laisser tranquille.',
      ],
      keyTakeaways: [
        'Paramètres > Stockage affiche des catégories, mais la ligne « Système » ne peut pas être vidée — n\'essayez pas de la réduire.',
        'Les médias WhatsApp et Telegram constituent le plus gros poste sur la plupart des téléphones ; on peut vider les médias sans supprimer les conversations.',
        'Vider le cache d\'une appli ne fait perdre aucune donnée : vous restez connecté et vos réglages sont conservés. Effacer le stockage (données) vous déconnecte et réinitialise l\'appli.',
        'Les applis désinstallées peuvent laisser des dossiers dans `Android/data` et `Android/media` ; ils apparaissent sous « Autre ».',
        'Si la sauvegarde Google Photos est active, « Libérer de l\'espace » ne supprime que la copie locale des photos déjà enregistrées dans le cloud.',
        'À partir d\'Android 11, les gestionnaires de fichiers ne peuvent plus lister le dossier `Android/data` ; l\'accès se fait depuis l\'appli ou via une autorisation spéciale.',
      ],
      howTo: {
        name: 'Libérer de l\'espace sur un téléphone Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Voir ce qui occupe la place',
            text: 'Ouvrez Paramètres > Stockage. Regardez la taille de chaque catégorie : Applications, Images, Vidéos, Audio, Documents et Autre. Notez la ligne plus grosse que prévu.',
          },
          {
            name: 'Vider les médias de messagerie',
            text: 'Dans WhatsApp, Paramètres > Stockage et données > Gérer le stockage liste les conversations les plus volumineuses et tous les fichiers de plus de 5 Mo. Vous pouvez y retirer les médias sans supprimer la discussion.',
          },
          {
            name: 'Vider les caches d\'applications',
            text: 'Allez dans Paramètres > Applications, choisissez une grosse application puis Stockage et cache > Vider le cache. Cela ne vous déconnecte pas. « Effacer le stockage » réinitialise l\'appli : à utiliser sciemment.',
          },
          {
            name: 'Sauvegarder les photos puis libérer les copies locales',
            text: 'Si la sauvegarde Google Photos est active, touchez votre photo de profil et choisissez « Libérer de l\'espace sur cet appareil ». Si la sauvegarde est désactivée, passez cette étape.',
          },
          {
            name: 'Passer en revue Téléchargements et applis inutilisées',
            text: 'Ouvrez le dossier Téléchargements dans l\'appli Fichiers ; installateurs (APK), archives et vieux documents s\'y accumulent. Désinstallez ensuite les applis que vous n\'avez pas ouvertes depuis des mois.',
          },
        ],
      },
      sections: [
        {
          title: 'Que contient la ligne « Autre » ?',
          content: [
            'Paramètres > Stockage répartit l\'occupation par catégories, et la ligne la plus déroutante s\'appelle « Autre » ou « Autres fichiers ». Elle regroupe tout ce qu\'Android n\'a pas su classer : dossiers de données que les applis écrivent dans le stockage externe, packs de ressources de jeux, cartes hors ligne, séries téléchargées et dossiers laissés par des applis supprimées.',
            'Les résidus de désinstallation sont particulièrement sournois. À la suppression d\'une appli, Android efface en général son dossier `Android/data/<nom.du.paquet>`, mais les fichiers sous `Android/media` et les dossiers créés à la racine peuvent survivre. Des mois plus tard, ces dossiers totalisent plusieurs gigaoctets et vous ne savez plus à quelle appli ils appartenaient.',
            'La ligne « Système » est différente et intouchable. Version d\'Android, chargeur d\'amorçage et micrologiciel du constructeur y sont comptés. Sur certains téléphones, 15 à 25 Go est normal ; il n\'existe aucun moyen de la réduire, et mieux vaut éviter les applis qui le promettent.',
          ],
        },
        {
          title: 'Le vrai coupable est souvent la messagerie',
          content: [
            'Par défaut, WhatsApp télécharge chaque photo, vidéo, message vocal et document reçu et l\'enregistre dans la galerie. Sur un compte avec des groupes actifs, cela représente plusieurs gigaoctets par mois. Après deux ans, le dossier WhatsApp peut peser 15 à 20 Go à lui seul.',
            'Bonne nouvelle : on peut le vider sans perdre les conversations. Dans WhatsApp, Paramètres > Stockage et données > Gérer le stockage liste séparément les discussions les plus lourdes et tous les fichiers de plus de 5 Mo. En n\'y supprimant que les médias, le texte des messages reste en place.',
            'La solution durable consiste à limiter le téléchargement automatique : sur le même écran, réglez « Téléchargement automatique des médias » sur photos uniquement, ou désactivez-le, en données mobiles comme en Wi-Fi. L\'équivalent Telegram est Paramètres > Données et stockage > Utilisation du stockage, où l\'on peut aussi définir la fréquence de vidage du cache.',
          ],
        },
        {
          title: 'Vider le cache est-il sans risque ?',
          content: [
            'Oui, vider le cache d\'une application est sans risque et ne fait perdre aucune donnée. Le cache contient des copies temporaires que l\'appli conserve pour démarrer plus vite : miniatures, images téléchargées, résultats de recherche. Une fois vidé, l\'appli les reconstruit au lancement suivant ; vous restez connecté et vos réglages sont conservés.',
            'À ne pas confondre avec « Effacer le stockage » (ou « Effacer les données »). Cela ramène l\'appli à son état d\'installation : déconnexion, réglages internes réinitialisés, contenus hors ligne supprimés. À réserver aux applis vraiment défaillantes.',
            'Android 8 a supprimé le bouton système « vider toutes les données en cache » ; il faut désormais procéder appli par appli. La version Android de Disk Mop regroupe cette étape sur un seul écran : elle classe les applis par taille de cache et montre exactement ce que chacune occupe avant toute suppression.',
          ],
        },
        {
          title: 'Photos : libérer de la place sans supprimer',
          content: [
            'Supprimer des photos est la dernière chose que l\'on souhaite, et c\'est rarement nécessaire. Si la sauvegarde Google Photos est active, passer par la photo de profil puis « Libérer de l\'espace sur cet appareil » ne retire que la copie locale des photos déjà envoyées en toute sécurité. Les photos restent visibles dans l\'appli, elles demandent simplement une connexion.',
            'N\'utilisez pas cette option si la sauvegarde est désactivée : la photo supprimée n\'aurait alors aucune autre copie. Activez d\'abord la sauvegarde, attendez la fin, puis libérez l\'espace.',
            'En local, la place part surtout dans la vidéo plutôt que dans les photos. Une minute de vidéo 4K occupe 350 à 500 Mo ; quelques enregistrements d\'écran et clips de vacances atteignent vite plusieurs gigaoctets. S\'y ajoutent captures d\'écran, rafales du même instant et images floues — la version Android de Disk Mop trie les photos en anciennes, volumineuses, floues, similaires et captures d\'écran pour les sélectionner en lot.',
          ],
        },
      ],
      faq: [
        {
          question: 'Les applis de nettoyage accélèrent-elles le téléphone ?',
          answer:
            'Pas directement. Android considère la RAM libre comme de la RAM gaspillée et gère lui-même les applis en arrière-plan. En revanche, au-delà de 90 % de stockage occupé, les écritures sur le système de fichiers ralentissent : libérer de la place fait alors une différence nette.',
        },
        {
          question: 'Pourquoi mon gestionnaire de fichiers ne voit-il pas Android/data ?',
          answer:
            'Les règles de stockage cloisonné introduites avec Android 11 empêchent les gestionnaires de fichiers de lister ce dossier. L\'accès aux données d\'une appli se fait depuis l\'appli elle-même ou via des applis de gestion disposant d\'une autorisation spéciale.',
        },
        {
          question: 'Une carte SD règle-t-elle le problème ?',
          answer:
            'En partie. Une carte SD convient aux photos, vidéos et musiques, mais la plupart des applications doivent rester, elles et leurs données, dans le stockage interne. Les cartes bon marché peuvent aussi être lentes, ce qui pénalise l\'appareil photo et les jeux.',
        },
        {
          question: 'La réinitialisation d\'usine est-elle la solution la plus propre ?',
          answer:
            'C\'est la plus radicale, et rarement nécessaire. Les quatre étapes ci-dessus (médias de messagerie, cache, téléchargements, applis inutilisées) libèrent 10 à 20 Go sur un téléphone typique. Une réinitialisation ne se justifie que si le système est réellement défaillant.',
        },
      ],
      verdict: [
        'Régler un « stockage plein » sous Android ne passe pas par la suppression de photos, mais par le bon ordre : d\'abord les médias de messagerie, puis le cache des applis, puis les téléchargements et les applis inutilisées. Ces quatre postes libèrent 10 à 20 Go sur un téléphone typique sans coûter un seul souvenir.',
        'La version Android de Disk Mop réunit ces étapes dans une seule appli : nettoyage des fichiers inutiles, tri des photos (anciennes, volumineuses, floues, similaires, captures), médias WhatsApp et Telegram, téléchargements et gestion des applications. Chaque étape montre d\'abord ce qui sera supprimé et attend votre confirmation.',
      ],
      ctaText: 'Télécharger Disk Mop sur Google Play',
    },
    es: {
      title: 'Almacenamiento lleno en Android: ¿qué ocupa realmente el espacio?',
      metaDescription:
        'Cuando Android avisa de que el almacenamiento está lleno, rara vez son tus fotos: son los medios de mensajería, la caché de apps y los restos de apps desinstaladas. Qué borrar y en qué orden.',
      subtitle: 'Cuatro sitios que revisar antes de borrar una sola foto',
      intro: [
        'Respuesta corta: los tres mayores consumidores de espacio en Android son casi siempre los medios de mensajería (WhatsApp/Telegram), la caché de las aplicaciones y la carpeta Descargas. La línea «Otros» en Ajustes > Almacenamiento suele corresponder a carpetas dejadas por apps que ya desinstalaste. Limpia esos cuatro antes de empezar a borrar fotos.',
        'Cuando el teléfono dice «queda poco espacio», el primer impulso es abrir la galería, y normalmente es el sitio equivocado. En un móvil moderno 200 fotos ocupan unos cientos de megabytes, mientras que dos años de historial de WhatsApp pueden llegar por sí solos a 15-20 GB. Esta guía muestra a dónde va realmente el espacio, qué se puede borrar con seguridad y qué conviene no tocar.',
      ],
      keyTakeaways: [
        'Ajustes > Almacenamiento muestra categorías, pero la cifra de «Sistema» no se puede limpiar: no intentes reducirla.',
        'Los medios de WhatsApp y Telegram son la partida más grande en la mayoría de teléfonos; puedes borrar solo los medios sin eliminar los chats.',
        'Borrar la caché de una app no pierde datos: sigues con la sesión iniciada y se conservan los ajustes. Borrar el almacenamiento (datos) cierra la sesión y reinicia la app.',
        'Las apps desinstaladas pueden dejar carpetas en `Android/data` y `Android/media`; aparecen bajo «Otros».',
        'Si la copia de seguridad de Google Fotos está activa, «Liberar espacio» elimina solo la copia local de las fotos ya guardadas en la nube.',
        'Desde Android 11 los gestores de archivos no pueden listar la carpeta `Android/data`; el acceso se hace desde la propia app o con un permiso especial.',
      ],
      howTo: {
        name: 'Liberar espacio en un teléfono Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Ver qué está ocupando el espacio',
            text: 'Abre Ajustes > Almacenamiento. Mira el tamaño de cada categoría: Aplicaciones, Imágenes, Vídeos, Audio, Documentos y Otros. Anota cuál es mayor de lo esperado.',
          },
          {
            name: 'Limpiar los medios de mensajería',
            text: 'En WhatsApp, Ajustes > Almacenamiento y datos > Administrar almacenamiento enumera los chats más pesados y todos los archivos de más de 5 MB. Desde ahí puedes quitar medios sin borrar la conversación.',
          },
          {
            name: 'Vaciar cachés de aplicaciones',
            text: 'Ve a Ajustes > Aplicaciones, elige una app grande y luego Almacenamiento y caché > Borrar caché. Esto no cierra tu sesión. «Borrar almacenamiento» reinicia la app: úsalo a conciencia.',
          },
          {
            name: 'Respaldar fotos y liberar las copias locales',
            text: 'Si la copia de Google Fotos está activa, toca tu foto de perfil y elige «Liberar espacio en este dispositivo». Si la copia está desactivada, salta este paso.',
          },
          {
            name: 'Revisar Descargas y apps sin usar',
            text: 'Abre la carpeta Descargas en la app Archivos; ahí se acumulan instaladores (APK), archivos comprimidos y documentos viejos. Después desinstala las apps que no abres desde hace meses.',
          },
        ],
      },
      sections: [
        {
          title: '¿Qué es «Otros» en la pantalla de almacenamiento?',
          content: [
            'Ajustes > Almacenamiento reparte el uso en categorías, y la línea más confusa es la etiquetada «Otros» u «Otros archivos». Ahí entra todo lo que Android no pudo clasificar: carpetas de datos que las apps escriben en el almacenamiento externo, paquetes de recursos de juegos, mapas sin conexión, series descargadas y carpetas dejadas por apps que eliminaste.',
            'Los restos de desinstalación son una partida especialmente traicionera. Al quitar una app, Android suele borrar su carpeta `Android/data/<nombre.paquete>`, pero los archivos bajo `Android/media` y las carpetas creadas en la raíz pueden sobrevivir. Meses después suman varios gigabytes y ya no recuerdas a qué app pertenecían.',
            'La cifra de «Sistema» es distinta e intocable. Ahí se cuentan la versión de Android, el gestor de arranque y el firmware del fabricante. En algunos teléfonos 15-25 GB es normal; no hay forma de reducirlo y conviene alejarse de cualquier app que prometa lo contrario.',
          ],
        },
        {
          title: 'El culpable real suele ser la mensajería',
          content: [
            'Por defecto WhatsApp descarga cada foto, vídeo, nota de voz y documento que recibes y lo guarda en la galería. En una cuenta con grupos activos eso son varios gigabytes al mes. Tras dos años, solo la carpeta de WhatsApp puede ocupar 15-20 GB.',
            'La buena noticia es que puedes limpiarla sin perder conversaciones. En WhatsApp, Ajustes > Almacenamiento y datos > Administrar almacenamiento enumera por separado los chats que más ocupan y todos los archivos mayores de 5 MB. Si borras solo los medios, el texto de los mensajes se queda.',
            'La solución duradera es limitar la descarga automática: en esa misma pantalla, pon «Descarga automática de archivos» en solo fotos, o desactívala, tanto en datos móviles como en Wi-Fi. El equivalente en Telegram es Ajustes > Datos y almacenamiento > Uso de almacenamiento, donde además puedes fijar cada cuánto se vacía la caché.',
          ],
        },
        {
          title: '¿Es seguro borrar la caché?',
          content: [
            'Sí, borrar la caché de una app es seguro y no pierde datos. La caché guarda copias temporales que la app conserva para arrancar más rápido: miniaturas, imágenes descargadas, resultados de búsqueda. Al borrarla, la app las reconstruye en el siguiente arranque; sigues con la sesión iniciada y tus ajustes se mantienen.',
            'No hay que confundirlo con «Borrar almacenamiento» (o «Borrar datos»). Eso devuelve la app al estado recién instalado: cierra tu sesión, reinicia los ajustes internos y elimina lo descargado para uso sin conexión. Úsalo solo cuando una app falle y sepas lo que haces.',
            'Android 8 retiró el botón del sistema para «borrar todos los datos en caché», así que hoy hay que ir app por app. La versión Android de Disk Mop reúne este paso en una sola pantalla: ordena las apps por tamaño de caché y muestra exactamente qué ocupa cada una antes de borrar nada.',
          ],
        },
        {
          title: 'Fotos: liberar espacio sin borrar',
          content: [
            'Borrar fotos es lo último que la mayoría quiere hacer, y casi nunca hace falta. Si la copia de Google Fotos está activa, tocar tu foto de perfil y elegir «Liberar espacio en este dispositivo» elimina solo la copia local de las fotos ya subidas con seguridad. Las fotos siguen apareciendo en la app; solo necesitan conexión.',
            'No uses esa opción si la copia está desactivada: en ese caso la foto borrada no tendría ninguna otra copia. Activa primero la copia, espera a que termine y luego libera espacio.',
            'En local, el espacio suele irse en vídeo más que en fotos. Un minuto de vídeo 4K ocupa 350-500 MB; unas cuantas grabaciones de pantalla y clips de vacaciones llegan fácilmente a varios gigabytes. Además se acumulan capturas, ráfagas del mismo momento y fotos movidas — la versión Android de Disk Mop clasifica las fotos en antiguas, grandes, borrosas, similares y capturas para seleccionarlas en bloque.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Las apps limpiadoras hacen más rápido el teléfono?',
          answer:
            'No directamente. Android considera que la RAM libre es RAM desperdiciada y gestiona él mismo las apps en segundo plano. Ahora bien, cuando el almacenamiento supera el 90 %, las escrituras del sistema de archivos sí se ralentizan: ahí liberar espacio se nota.',
        },
        {
          question: '¿Por qué mi gestor de archivos no ve la carpeta Android/data?',
          answer:
            'Las reglas de almacenamiento delimitado introducidas en Android 11 impiden que los gestores de archivos listen esa carpeta. El acceso a los datos de una app se hace desde la propia app o mediante apps de gestión con un permiso especial.',
        },
        {
          question: '¿Poner una tarjeta SD lo soluciona?',
          answer:
            'En parte. Una tarjeta SD va bien para fotos, vídeo y música, pero la mayoría de aplicaciones deben permanecer, ellas y sus datos, en el almacenamiento interno. Las tarjetas baratas además pueden ser lentas y afectar a la cámara y a los juegos.',
        },
        {
          question: '¿Restablecer de fábrica es la solución más limpia?',
          answer:
            'Es la más drástica y rara vez necesaria. Los cuatro pasos anteriores (medios de mensajería, caché, descargas, apps sin usar) liberan 10-20 GB en un teléfono típico. Un restablecimiento solo tiene sentido si el sistema está realmente dañado.',
        },
      ],
      verdict: [
        'Resolver el «almacenamiento lleno» en Android no consiste en borrar fotos, sino en seguir el orden correcto: primero medios de mensajería, luego caché de apps, después descargas y apps sin usar. Esos cuatro liberan 10-20 GB en un teléfono típico sin costarte un solo recuerdo.',
        'La versión Android de Disk Mop reúne esos pasos en una sola app: limpieza de basura, clasificación de fotos (antiguas, grandes, borrosas, similares, capturas), medios de WhatsApp y Telegram, descargas y gestión de aplicaciones. Cada paso muestra antes qué se va a borrar y espera tu confirmación.',
      ],
      ctaText: 'Consigue Disk Mop en Google Play',
    },
    it: {
      title: 'Memoria piena su Android: cosa occupa davvero lo spazio?',
      metaDescription:
        'Quando Android segnala memoria piena, raramente la colpa è delle foto: sono i media di messaggistica, la cache delle app e i residui delle app disinstallate. Cosa svuotare e in che ordine.',
      subtitle: 'Quattro punti da controllare prima di cancellare una sola foto',
      intro: [
        'Risposta breve: i tre maggiori consumatori di spazio su Android sono quasi sempre i media di messaggistica (WhatsApp/Telegram), la cache delle app e la cartella Download. La voce «Altro» in Impostazioni > Memoria corrisponde di solito a cartelle lasciate da app già disinstallate. Svuota queste quattro voci prima di cancellare foto.',
        'Quando il telefono avvisa «spazio di archiviazione in esaurimento», il primo istinto è aprire la galleria — di solito il posto sbagliato. Su un telefono moderno 200 foto occupano qualche centinaio di megabyte, mentre due anni di cronologia WhatsApp possono raggiungere da soli 15-20 GB. Questa guida mostra dove finisce davvero lo spazio, cosa si può eliminare senza rischi e cosa è meglio non toccare.',
      ],
      keyTakeaways: [
        'Impostazioni > Memoria mostra le categorie, ma la voce «Sistema» non si può svuotare: non provare a ridurla.',
        'I media di WhatsApp e Telegram sono la voce singola più grande sulla maggior parte dei telefoni; puoi eliminare solo i media senza cancellare le chat.',
        'Svuotare la cache di un\'app non comporta perdita di dati: resti connesso e le impostazioni restano. Cancellare l\'archiviazione (dati) ti disconnette e reimposta l\'app.',
        'Le app disinstallate possono lasciare cartelle in `Android/data` e `Android/media`; compaiono sotto «Altro».',
        'Se il backup di Google Foto è attivo, «Libera spazio» elimina soltanto la copia locale delle foto già salvate nel cloud.',
        'Da Android 11 i file manager non possono elencare la cartella `Android/data`; l\'accesso avviene dall\'app stessa o con un permesso speciale.',
      ],
      howTo: {
        name: 'Liberare spazio su un telefono Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Vedere cosa occupa lo spazio',
            text: 'Apri Impostazioni > Memoria. Guarda la dimensione di ogni categoria: App, Immagini, Video, Audio, Documenti e Altro. Annota quale voce è più grande del previsto.',
          },
          {
            name: 'Svuotare i media di messaggistica',
            text: 'In WhatsApp, Impostazioni > Spazio e dati > Gestisci spazio elenca le chat più pesanti e tutti i file oltre 5 MB. Da lì puoi rimuovere i media senza cancellare la conversazione.',
          },
          {
            name: 'Svuotare le cache delle app',
            text: 'Vai in Impostazioni > App, scegli un\'app grande e poi Spazio di archiviazione e cache > Svuota cache. Non ti disconnette. «Cancella archiviazione» reimposta l\'app: usala consapevolmente.',
          },
          {
            name: 'Eseguire il backup delle foto e liberare le copie locali',
            text: 'Se il backup di Google Foto è attivo, tocca la tua immagine del profilo e scegli «Libera spazio su questo dispositivo». Se il backup è disattivato, salta questo passaggio.',
          },
          {
            name: 'Rivedere Download e app inutilizzate',
            text: 'Apri la cartella Download nell\'app File; lì si accumulano file di installazione (APK), archivi e vecchi documenti. Poi disinstalla le app che non apri da mesi.',
          },
        ],
      },
      sections: [
        {
          title: 'Cos\'è «Altro» nella schermata della memoria?',
          content: [
            'Impostazioni > Memoria divide l\'occupazione in categorie, e la voce più confusa è quella etichettata «Altro» o «Altri file». Contiene tutto ciò che Android non ha saputo classificare: cartelle di dati che le app scrivono nella memoria esterna, pacchetti di risorse dei giochi, mappe offline, serie scaricate e cartelle lasciate da app rimosse.',
            'I residui di disinstallazione sono una voce particolarmente insidiosa. Quando rimuovi un\'app, Android di solito cancella la cartella `Android/data/<nome.pacchetto>`, ma i file sotto `Android/media` e le cartelle create nella radice possono sopravvivere. Mesi dopo queste cartelle sommano diversi gigabyte e non ricordi più a quale app appartenessero.',
            'La voce «Sistema» è diversa e intoccabile. Vi rientrano la versione di Android, il bootloader e il firmware del produttore. Su alcuni telefoni 15-25 GB è normale; non c\'è modo di ridurla, ed è meglio evitare le app che promettono il contrario.',
          ],
        },
        {
          title: 'Il vero colpevole di solito è la messaggistica',
          content: [
            'Per impostazione predefinita WhatsApp scarica ogni foto, video, messaggio vocale e documento ricevuto e lo salva nella galleria. Su un account con gruppi attivi si accumulano diversi gigabyte al mese. Dopo due anni la sola cartella di WhatsApp può pesare 15-20 GB.',
            'La buona notizia è che si può svuotare senza perdere le conversazioni. In WhatsApp, Impostazioni > Spazio e dati > Gestisci spazio elenca separatamente le chat che occupano di più e tutti i file oltre 5 MB. Cancellando lì solo i media, il testo dei messaggi resta.',
            'La soluzione duratura è limitare il download automatico: nella stessa schermata imposta «Download automatico media» su sole foto, o disattivalo, sia in rete mobile sia in Wi-Fi. L\'equivalente in Telegram è Impostazioni > Dati e archiviazione > Utilizzo memoria, dove puoi anche stabilire ogni quanto svuotare la cache.',
          ],
        },
        {
          title: 'Svuotare la cache è sicuro?',
          content: [
            'Sì, svuotare la cache di un\'app è sicuro e non comporta perdita di dati. La cache contiene copie temporanee che l\'app conserva per avviarsi più in fretta: miniature, immagini scaricate, risultati di ricerca. Una volta svuotata, l\'app le ricostruisce al successivo avvio; resti connesso e le impostazioni restano.',
            'Da non confondere con «Cancella archiviazione» (o «Cancella dati»). Questo riporta l\'app allo stato di appena installata: vieni disconnesso, le impostazioni interne si azzerano e i contenuti scaricati per l\'uso offline spariscono. Usalo solo quando un\'app dà problemi e sai cosa stai facendo.',
            'Android 8 ha rimosso il pulsante di sistema «cancella tutti i dati memorizzati nella cache», quindi oggi bisogna procedere app per app. La versione Android di Disk Mop raccoglie questo passaggio in una schermata: ordina le app per dimensione della cache e mostra esattamente cosa occupa ciascuna prima di cancellare qualsiasi cosa.',
          ],
        },
        {
          title: 'Foto: liberare spazio senza cancellare',
          content: [
            'Cancellare foto è l\'ultima cosa che la maggior parte delle persone vuole fare, e quasi mai è necessario. Se il backup di Google Foto è attivo, toccando l\'immagine del profilo e scegliendo «Libera spazio su questo dispositivo» si rimuove solo la copia locale delle foto già caricate in sicurezza. Le foto restano visibili nell\'app, richiedono soltanto una connessione.',
            'Non usare quell\'opzione se il backup è disattivato: in quel caso la foto cancellata non avrebbe altre copie. Attiva prima il backup, aspetta che finisca, poi libera lo spazio.',
            'In locale lo spazio se ne va soprattutto in video più che in foto. Un minuto di video 4K occupa 350-500 MB; qualche registrazione dello schermo e qualche clip delle vacanze arrivano facilmente a diversi gigabyte. Si accumulano inoltre screenshot, raffiche dello stesso momento e scatti mossi — la versione Android di Disk Mop divide le foto in vecchie, grandi, sfocate, simili e screenshot, così puoi selezionarle in blocco.',
          ],
        },
      ],
      faq: [
        {
          question: 'Le app di pulizia rendono il telefono più veloce?',
          answer:
            'Non direttamente. Android considera la RAM libera come RAM sprecata e gestisce da sé le app in background. Tuttavia, quando la memoria supera il 90% di occupazione, le scritture sul file system rallentano davvero: in quel caso liberare spazio fa una differenza evidente.',
        },
        {
          question: 'Perché il mio file manager non vede la cartella Android/data?',
          answer:
            'Le regole di archiviazione con ambito introdotte con Android 11 impediscono ai file manager di elencare quella cartella. L\'accesso ai dati di un\'app avviene dall\'app stessa o tramite app di gestione con un permesso speciale.',
        },
        {
          question: 'Una scheda SD risolve il problema?',
          answer:
            'In parte. Una scheda SD va bene per foto, video e musica, ma la maggior parte delle app deve restare, con i propri dati, nella memoria interna. Le schede economiche inoltre possono essere lente e penalizzare fotocamera e giochi.',
        },
        {
          question: 'Il ripristino di fabbrica è la soluzione più pulita?',
          answer:
            'È la più drastica e raramente necessaria. I quattro passaggi qui sopra (media di messaggistica, cache, download, app inutilizzate) liberano 10-20 GB su un telefono tipico. Un ripristino ha senso solo se il sistema è davvero compromesso.',
        },
      ],
      verdict: [
        'Risolvere la «memoria piena» su Android non significa cancellare foto, ma procedere nell\'ordine giusto: prima i media di messaggistica, poi la cache delle app, quindi i download e le app inutilizzate. Questi quattro liberano 10-20 GB su un telefono tipico senza costarti un solo ricordo.',
        'La versione Android di Disk Mop riunisce questi passaggi in un\'unica app: pulizia dei file inutili, selezione delle foto (vecchie, grandi, sfocate, simili, screenshot), media di WhatsApp e Telegram, download e gestione delle app. Ogni passaggio mostra prima cosa verrà eliminato e attende la tua conferma.',
      ],
      ctaText: 'Scarica Disk Mop da Google Play',
    },
    pt: {
      title: 'Armazenamento cheio no Android: o que está ocupando o espaço?',
      metaDescription:
        'Quando o Android avisa que o armazenamento está cheio, raramente a culpa é das fotos: são as mídias de mensagens, o cache dos apps e as sobras de apps desinstalados. O que limpar e em que ordem.',
      subtitle: 'Quatro lugares para checar antes de apagar uma única foto',
      intro: [
        'Resposta curta: os três maiores consumidores de espaço no Android são quase sempre as mídias de mensagens (WhatsApp/Telegram), o cache dos aplicativos e a pasta Downloads. A linha «Outros» em Configurações > Armazenamento costuma ser pastas deixadas por apps que você já desinstalou. Limpe esses quatro antes de começar a apagar fotos.',
        'Quando o telefone avisa «pouco espaço de armazenamento», o primeiro impulso é abrir a galeria — normalmente o lugar errado. Num celular moderno 200 fotos ocupam algumas centenas de megabytes, enquanto dois anos de histórico do WhatsApp podem chegar sozinhos a 15-20 GB. Este guia mostra para onde o espaço realmente vai, o que dá para apagar com segurança e o que é melhor não tocar.',
      ],
      keyTakeaways: [
        'Configurações > Armazenamento mostra categorias, mas o valor de «Sistema» não pode ser limpo — não tente reduzi-lo.',
        'As mídias de WhatsApp e Telegram são o maior item isolado na maioria dos celulares; dá para limpar só as mídias sem apagar as conversas.',
        'Limpar o cache de um app não perde dados: você continua conectado e as configurações ficam. Limpar o armazenamento (dados) desconecta e reinicia o app.',
        'Apps desinstalados podem deixar pastas em `Android/data` e `Android/media`; elas aparecem em «Outros».',
        'Se o backup do Google Fotos estiver ligado, «Liberar espaço» remove apenas a cópia local das fotos já salvas na nuvem.',
        'A partir do Android 11 os gerenciadores de arquivos não conseguem listar a pasta `Android/data`; o acesso é feito de dentro do app ou com permissão especial.',
      ],
      howTo: {
        name: 'Liberar espaço em um celular Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Ver o que está ocupando espaço',
            text: 'Abra Configurações > Armazenamento. Veja o tamanho de cada categoria: Apps, Imagens, Vídeos, Áudio, Documentos e Outros. Anote qual está maior do que o esperado.',
          },
          {
            name: 'Limpar as mídias de mensagens',
            text: 'No WhatsApp, Configurações > Armazenamento e dados > Gerenciar armazenamento lista as conversas mais pesadas e todos os arquivos acima de 5 MB. Ali você remove mídias sem apagar a conversa.',
          },
          {
            name: 'Esvaziar caches dos aplicativos',
            text: 'Vá em Configurações > Apps, escolha um app grande e depois Armazenamento e cache > Limpar cache. Isso não desconecta você. «Limpar armazenamento» reinicia o app: use com consciência.',
          },
          {
            name: 'Fazer backup das fotos e liberar as cópias locais',
            text: 'Se o backup do Google Fotos estiver ligado, toque na sua foto de perfil e escolha «Liberar espaço neste dispositivo». Se o backup estiver desligado, pule esta etapa.',
          },
          {
            name: 'Revisar Downloads e apps sem uso',
            text: 'Abra a pasta Downloads no app Arquivos; ali se acumulam instaladores (APK), arquivos compactados e documentos antigos. Depois desinstale os apps que você não abre há meses.',
          },
        ],
      },
      sections: [
        {
          title: 'O que é «Outros» na tela de armazenamento?',
          content: [
            'Configurações > Armazenamento divide o uso em categorias, e a linha mais confusa é a marcada como «Outros» ou «Outros arquivos». Nela entra tudo o que o Android não conseguiu classificar: pastas de dados que apps gravam no armazenamento externo, pacotes de recursos de jogos, mapas offline, séries baixadas e pastas deixadas por apps removidos.',
            'As sobras de desinstalação são um item especialmente traiçoeiro. Ao remover um app, o Android costuma apagar a pasta `Android/data/<nome.do.pacote>`, mas arquivos em `Android/media` e pastas criadas na raiz podem sobreviver. Meses depois essas pastas somam vários gigabytes e você já não lembra a qual app pertenciam.',
            'O valor de «Sistema» é diferente e intocável. Versão do Android, bootloader e firmware do fabricante são contados ali. Em alguns celulares 15-25 GB é normal; não há como reduzir, e convém evitar qualquer app que prometa o contrário.',
          ],
        },
        {
          title: 'O verdadeiro culpado geralmente é o mensageiro',
          content: [
            'Por padrão o WhatsApp baixa cada foto, vídeo, mensagem de voz e documento recebido e salva na galeria. Numa conta com grupos ativos isso significa vários gigabytes por mês. Depois de dois anos, só a pasta do WhatsApp pode ter 15-20 GB.',
            'A boa notícia é que dá para limpar sem perder conversas. No WhatsApp, Configurações > Armazenamento e dados > Gerenciar armazenamento lista separadamente as conversas que mais ocupam e todos os arquivos maiores que 5 MB. Apagando ali apenas as mídias, o texto das mensagens permanece.',
            'A solução duradoura é limitar o download automático: na mesma tela, ajuste «Download automático de mídia» para somente fotos, ou desligue, tanto em dados móveis quanto em Wi-Fi. O equivalente no Telegram é Configurações > Dados e armazenamento > Uso de armazenamento, onde também dá para definir de quanto em quanto tempo o cache se limpa.',
          ],
        },
        {
          title: 'Limpar o cache é seguro?',
          content: [
            'Sim, limpar o cache de um app é seguro e não perde dados. O cache guarda cópias temporárias que o app mantém para abrir mais rápido: miniaturas, imagens baixadas, resultados de busca. Depois de limpo, o app as reconstrói na próxima abertura; você continua conectado e suas configurações ficam.',
            'Não confunda com «Limpar armazenamento» (ou «Limpar dados»). Isso devolve o app ao estado recém-instalado: você é desconectado, as configurações internas voltam ao padrão e o que foi baixado para uso offline some. Use apenas quando um app estiver com problema e você souber o que está fazendo.',
            'O Android 8 removeu o botão do sistema para «limpar todos os dados em cache», então hoje é preciso ir app por app. A versão Android do Disk Mop reúne essa etapa em uma tela só: ordena os apps por tamanho de cache e mostra exatamente o que cada um guarda antes de apagar qualquer coisa.',
          ],
        },
        {
          title: 'Fotos: liberar espaço sem apagar',
          content: [
            'Apagar fotos é a última coisa que a maioria quer fazer, e quase nunca é necessário. Se o backup do Google Fotos estiver ligado, tocar na foto de perfil e escolher «Liberar espaço neste dispositivo» remove apenas a cópia local das fotos já enviadas com segurança. As fotos continuam aparecendo no app; só precisam de conexão.',
            'Não use essa opção se o backup estiver desligado — nesse caso a foto apagada não teria outra cópia. Ligue o backup primeiro, espere terminar e só então libere o espaço.',
            'Localmente o espaço costuma ir para vídeo, não para fotos. Um minuto de vídeo 4K ocupa 350-500 MB; algumas gravações de tela e clipes de viagem chegam facilmente a vários gigabytes. Somam-se ainda capturas de tela, sequências do mesmo momento e fotos tremidas — a versão Android do Disk Mop separa as fotos em antigas, grandes, desfocadas, semelhantes e capturas de tela, para selecioná-las em lote.',
          ],
        },
      ],
      faq: [
        {
          question: 'Apps de limpeza deixam o celular mais rápido?',
          answer:
            'Não diretamente. O Android considera RAM livre como RAM desperdiçada e gerencia sozinho os apps em segundo plano. Porém, quando o armazenamento passa de 90% ocupado, as gravações no sistema de arquivos realmente ficam mais lentas — aí liberar espaço faz diferença perceptível.',
        },
        {
          question: 'Por que meu gerenciador de arquivos não vê a pasta Android/data?',
          answer:
            'As regras de armazenamento delimitado introduzidas no Android 11 impedem que gerenciadores de arquivos listem essa pasta. O acesso aos dados de um app acontece de dentro do próprio app ou por apps de gerenciamento com permissão especial.',
        },
        {
          question: 'Colocar um cartão SD resolve?',
          answer:
            'Em parte. Um cartão SD é bom para fotos, vídeo e música, mas a maioria dos aplicativos precisa manter a si mesma e seus dados no armazenamento interno. Cartões baratos também podem ser lentos, o que afeta câmera e jogos.',
        },
        {
          question: 'Restaurar o padrão de fábrica é a solução mais limpa?',
          answer:
            'É a mais drástica e raramente necessária. Os quatro passos acima (mídias de mensagens, cache, downloads, apps sem uso) liberam 10-20 GB num celular típico. Uma restauração só faz sentido se o sistema estiver de fato comprometido.',
        },
      ],
      verdict: [
        'Resolver o «armazenamento cheio» no Android não é apagar fotos, é seguir a ordem certa: primeiro mídias de mensagens, depois cache dos apps, então downloads e apps sem uso. Esses quatro liberam 10-20 GB num celular típico sem custar uma única lembrança.',
        'A versão Android do Disk Mop reúne essas etapas em um app só: limpeza de lixo, triagem de fotos (antigas, grandes, desfocadas, semelhantes, capturas), mídias de WhatsApp e Telegram, downloads e gerenciamento de apps. Cada etapa mostra antes o que será apagado e espera sua confirmação.',
      ],
      ctaText: 'Baixe o Disk Mop no Google Play',
    },
    ja: {
      title: 'Android のストレージがいっぱい: 実際に容量を使っているのは何か',
      metaDescription:
        'Android で「ストレージの空き容量がありません」と出るとき、原因は写真ではありません。メッセージアプリのメディア、アプリのキャッシュ、アンインストール済みアプリの残骸です。消す順番を解説します。',
      subtitle: '写真を 1 枚消す前に見るべき 4 か所',
      intro: [
        '短い答え: Android で容量を食っている上位 3 つは、ほぼ必ずメッセージアプリのメディア（WhatsApp / Telegram）、アプリのキャッシュ、そして「ダウンロード」フォルダーです。設定 > ストレージの「その他」は、たいていアンインストール済みアプリが残したフォルダーです。写真を消し始める前に、この 4 つを片付けてください。',
        '「ストレージの空き容量が少なくなっています」と表示されると、まずギャラリーを開きたくなりますが、たいていそこは間違った場所です。最近のスマートフォンでは写真 200 枚は数百メガバイトですが、2 年分の WhatsApp 履歴だけで 15〜20 GB に達することがあります。この記事では容量が実際にどこへ消えているか、何を安全に削除できるか、何に触れるべきでないかを説明します。',
      ],
      keyTakeaways: [
        '設定 > ストレージはカテゴリー別に表示しますが、「システム」の容量は削除できません。減らそうとしないでください。',
        'WhatsApp と Telegram のメディアは多くの端末で最大の単一項目です。チャットを消さずにメディアだけを削除できます。',
        'アプリのキャッシュ削除でデータは失われません。ログイン状態も設定も維持されます。一方「ストレージを消去」はログアウトし、アプリを初期化します。',
        'アンインストールしたアプリは `Android/data` や `Android/media` にフォルダーを残すことがあり、「その他」として表示されます。',
        'Google フォトのバックアップが有効なら、「空き容量を増やす」はクラウドに保存済みの写真の端末内コピーだけを削除します。',
        'Android 11 以降、ファイルマネージャーは `Android/data` フォルダーを一覧表示できません。アクセスはアプリ内か特別な権限経由になります。',
      ],
      howTo: {
        name: 'Android スマートフォンの空き容量を増やす',
        totalTime: 'PT15M',
        steps: [
          {
            name: '何が容量を使っているか確認する',
            text: '設定 > ストレージを開きます。アプリ、画像、動画、音声、ドキュメント、その他の各カテゴリーのサイズを確認し、想定より大きい項目を控えます。',
          },
          {
            name: 'メッセージアプリのメディアを整理する',
            text: 'WhatsApp では 設定 > ストレージとデータ > ストレージを管理 で、容量の大きいチャットと 5 MB を超えるファイルが一覧表示されます。会話を削除せずにメディアだけ削除できます。',
          },
          {
            name: 'アプリのキャッシュを空にする',
            text: '設定 > アプリ から大きなアプリを選び、ストレージとキャッシュ > キャッシュを削除 を実行します。ログアウトはしません。「ストレージを消去」はアプリを初期化するので、意図して使ってください。',
          },
          {
            name: '写真をバックアップして端末内のコピーを解放する',
            text: 'Google フォトのバックアップが有効なら、プロフィール画像をタップして「このデバイスの空き容量を増やす」を選びます。バックアップが無効ならこの手順は飛ばしてください。',
          },
          {
            name: 'ダウンロードと未使用アプリを見直す',
            text: 'Files アプリでダウンロードフォルダーを開きます。インストーラー（APK）、圧縮ファイル、古い書類がたまっています。続いて数か月開いていないアプリをアンインストールします。',
          },
        ],
      },
      sections: [
        {
          title: 'ストレージ画面の「その他」とは何か',
          content: [
            '設定 > ストレージは使用量をカテゴリーに分けますが、最も分かりにくいのが「その他」または「その他のファイル」という項目です。ここには Android が既知のカテゴリーに分類できなかったすべてが入ります。アプリが外部ストレージに書き込むデータフォルダー、ゲームのアセットパック、オフライン地図、ダウンロードした番組、そして削除済みアプリが残したフォルダーです。',
            'アンインストールの残骸は特に厄介です。アプリを削除すると Android は通常 `Android/data/<パッケージ名>` フォルダーを消しますが、`Android/media` 配下のファイルやルート直下に作られたフォルダーは残ることがあります。数か月後にはこれらが数ギガバイトに達し、どのアプリのものだったかも分からなくなります。',
            '「システム」の数値は別物で、手を触れられません。Android のバージョン、ブートローダー、メーカーのファームウェアがここに含まれます。端末によっては 15〜25 GB でも正常です。これを減らす方法はなく、減らせると謳うアプリは避けてください。',
          ],
        },
        {
          title: '本当の原因はたいていメッセージアプリ',
          content: [
            'WhatsApp は既定で、受信したすべての写真、動画、ボイスメッセージ、ドキュメントを端末にダウンロードしギャラリーに保存します。やり取りの多いグループがあるアカウントでは月に数ギガバイト増えます。2 年後には WhatsApp のフォルダーだけで 15〜20 GB になることがあります。',
            '幸い、会話を失わずに整理できます。WhatsApp の 設定 > ストレージとデータ > ストレージを管理 では、容量を多く使っているチャットと 5 MB を超えるファイルが別々に表示されます。そこでメディアだけを削除すれば、メッセージ本文はそのまま残ります。',
            '恒久的な対策は自動ダウンロードを絞ることです。同じ画面で「メディアの自動ダウンロード」をモバイルデータと Wi-Fi の両方で「写真のみ」または完全にオフにします。Telegram では 設定 > データとストレージ > ストレージの使用状況 が相当し、キャッシュを何日ごとに自動削除するかも設定できます。',
          ],
        },
        {
          title: 'キャッシュ削除は安全か',
          content: [
            'はい、アプリのキャッシュ削除は安全で、データは失われません。キャッシュはアプリが素早く起動するために保持している一時的なコピー（サムネイル、ダウンロード済み画像、検索結果）です。削除しても次回起動時に作り直されます。ログイン状態も設定も維持されます。',
            '混同してはいけないのが「ストレージを消去」（または「データを削除」）です。これはアプリをインストール直後の状態に戻します。ログアウトされ、アプリ内設定はリセットされ、オフライン用にダウンロードした内容も消えます。アプリの調子が本当に悪いときだけ、意図して使ってください。',
            'Android 8 でシステム全体の「キャッシュデータをすべて削除」ボタンは廃止され、今はアプリごとに進める必要があります。Disk Mop の Android 版はこの手順を 1 画面にまとめ、アプリをキャッシュサイズ順に並べて、削除前にそれぞれの内訳を表示します。',
          ],
        },
        {
          title: '写真: 削除せずに空き容量を作る',
          content: [
            '写真の削除はほとんどの人が最後に選びたい手段ですが、たいてい必要ありません。Google フォトのバックアップが有効なら、プロフィール画像から「このデバイスの空き容量を増やす」を選ぶと、すでに安全にアップロード済みの写真の端末内コピーだけが削除されます。写真はアプリ上に表示され続け、通信が必要になるだけです。',
            'バックアップが無効の場合はこの機能を使わないでください。その状態では、削除した写真に他のコピーが存在しません。まずバックアップを有効にし、完了を待ってから空き容量を増やします。',
            '端末内で容量を使っているのは、写真よりも動画であることがほとんどです。4K 動画は 1 分で 350〜500 MB。画面録画や旅行の動画が数本あれば簡単に数ギガバイトになります。さらにスクリーンショット、同じ瞬間の連写、ぶれた写真もたまります。Disk Mop の Android 版は写真を「古い」「大きい」「ぶれている」「似ている」「スクリーンショット」に分類し、まとめて選択できるようにします。',
          ],
        },
      ],
      faq: [
        {
          question: 'クリーナーアプリでスマートフォンは速くなりますか。',
          answer:
            '直接は速くなりません。Android は空き RAM を無駄と考え、バックグラウンドのアプリを自分で管理します。ただしストレージの使用率が 90% を超えるとファイルシステムの書き込みは実際に遅くなります。その場合は空き容量を作ると体感差が出ます。',
        },
        {
          question: 'ファイルマネージャーで Android/data フォルダーが見えないのはなぜですか。',
          answer:
            'Android 11 で導入されたスコープ付きストレージの規則により、ファイルマネージャーはこのフォルダーを一覧できません。アプリのデータへのアクセスはアプリ自身から、または特別な権限を付与された管理アプリから行います。',
        },
        {
          question: 'SD カードを入れれば解決しますか。',
          answer:
            '部分的には解決します。SD カードは写真、動画、音楽には適していますが、多くのアプリは本体とデータを内部ストレージに置く必要があります。安価なカードは速度が遅く、カメラやゲームの性能に影響することもあります。',
        },
        {
          question: '初期化がいちばん確実な方法ですか。',
          answer:
            '最も極端な方法ですが、必要になることはまれです。上記の 4 手順（メッセージのメディア、キャッシュ、ダウンロード、未使用アプリ）で一般的な端末なら 10〜20 GB 空きます。初期化はシステム自体が本当に壊れている場合にのみ意味があります。',
        },
      ],
      verdict: [
        'Android の「ストレージがいっぱい」を解決する鍵は写真を消すことではなく、正しい順序で進めることです。まずメッセージアプリのメディア、次にアプリのキャッシュ、続いてダウンロードと未使用アプリ。この 4 つで一般的な端末なら 10〜20 GB が空き、思い出は 1 つも失われません。',
        'Disk Mop の Android 版はこれらの手順を 1 つのアプリにまとめています。不要ファイルの削除、写真の仕分け（古い・大きい・ぶれ・類似・スクリーンショット）、WhatsApp と Telegram のメディア、ダウンロード、アプリ管理。各手順で何を削除するかを先に表示し、確認を待ちます。',
      ],
      ctaText: 'Google Play で Disk Mop を入手',
    },
  },
};
