import type { Article } from '../types';

export const deleteDuplicatePhotosAndroid: Article = {
  slug: 'delete-duplicate-photos-android',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-17',
  readingTime: 7,
  content: {
    tr: {
      title: 'Android\'de Yinelenen ve Benzer Fotoğrafları Bulup Silme',
      metaDescription:
        'Google Fotoğraflar\'da yinelenen bulucu yok. Android\'de birebir kopyaları, WhatsApp yeniden kayıtlarını, seri çekimleri ve bulanık kareleri bulup toplu silme.',
      subtitle: 'Files by Google, Google Fotoğraflar, üretici galerileri ve görsel benzerlik taraması karşılaştırıldı',
      intro: [
        'Kısa cevap: Android\'de yerleşik bir yinelenen fotoğraf bulucu yoktur. Files by Google birebir kopyaları (iki kez kaydedilmiş aynı dosyayı) bulur, Google Fotoğraflar\'ın temizleme araçları telefonu değil bulut depolamanızı temizler ve ikisi de asıl yeri kaplayan, aynı anın on neredeyse özdeş karesini gruplamaz. Bunlar için görsel benzerlik taraması gerekir; bu tarama hiçbir şey yüklemeden telefonun üzerinde çalışabilir.',
        'Bu rehber Android\'de yinelenenlerin nereden geldiğini, ücretsiz araçların her birinin gerçekte neyi yakaladığını, benzerlik ve bulanıklık tespitinin nasıl çalıştığını ve Google Fotoğraflar, üretici galerileri ile dosya yöneticilerinin farklı çöp kutusu kurallarını göz önünde tutarak nasıl güvenle silebileceğinizi anlatıyor.',
      ],
      keyTakeaways: [
        'Files by Google > Temizle > Yinelenen dosyalar yalnızca bayt bayt özdeş kopyaları bulur; WhatsApp veya Instagram\'dan yeniden kaydedilen bir fotoğraf yeniden kodlanır ve artık özdeş değildir.',
        'Google Fotoğraflar birebir kopyaları yüklemeyi atlar ama telefondan asla silmez; Depolamayı yönet önerileri de cihazı değil Google hesabınızı temizler.',
        'Aynı anın kareleri (tekrar çekimler, seri çekimler, üç kez çekilen grup fotoğrafları) genellikle birebir kopyaların on katı yer tutar.',
        'Görsel benzerlik taraması fotoğrafların nasıl göründüğünü karşılaştırır; bu yüzden kırpılmış, filtrelenmiş ve sıkıştırılmış kopyaları orijinalle aynı grupta toplar.',
        'Bulanık fotoğraflar, kenar keskinliği ölçülerek telefonda tespit edilebilir; sonuç bir hüküm değil, gözden geçirme önerisidir.',
        'Android\'in sistem iletişim kutusuyla silinen fotoğraflar telefondan kaldırılır; Google Fotoğraflar\'a yedeklenmiş kopya bulutta kalır.',
      ],
      dataTable: {
        caption: 'Android\'de her aracın bulabildikleri',
        columns: ['Araç', 'Birebir kopyalar', 'Benzer kareler', 'Bulanık fotoğraflar', 'Ekran görüntüleri', 'Yalnızca telefonda çalışır'],
        rows: [
          ['Files by Google', 'Evet', 'Hayır', 'Öneriler', 'Eski ekran görüntüleri', 'Evet'],
          ['Google Fotoğraflar (Depolamayı yönet)', 'Hayır (kopyaları yüklemeyi atlar)', 'Hayır', 'Evet, bulutta', 'Evet, bulutta', 'Hayır, yedekleme gerekir'],
          ['Üretici galeri kartları', 'Bazen', 'Nadiren', 'Nadiren', 'Bazen', 'Evet'],
          ['Android için Disk Mop', 'Evet', 'Evet', 'Evet', 'Evet', 'Evet'],
        ],
      },
      howTo: {
        name: 'Android\'de yinelenen ve benzer fotoğrafları silme',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Birebir kopyaları Files by Google ile kaldırın',
            text: 'Files by Google\'ı açın, Temizle sekmesine dokunun ve Yinelenen dosyalar kartını bulun. Bu kart bayt bayt özdeş dosyaları listeler; kopyaları seçip silin. Aynı sohbetten iki kez kaydedilmiş fotoğraflar böyle yakalanır.',
          },
          {
            name: 'Google Fotoğraflar\'ın neyi yedeklediğini kontrol edin',
            text: 'Google Fotoğraflar\'da profil resminize dokunun > Fotoğraflar ayarları > Yedekleme. Yedekleme açıksa yerelde sildiğiniz her şeyin bir kopyası bulutta kalır ve Yer aç seçeneği zaten yedeklenmiş fotoğrafların yerel kopyalarını kaldırır. Bu yer açar ama yinelenenleri bulmaz.',
          },
          {
            name: 'Benzer ve bulanık kareleri tarayın',
            text: 'Görsel bir tarama çalıştırın. Android için Disk Mop birbirine benzeyen fotoğrafları gruplar, bulanık kareleri ve ekran görüntülerini işaretler, altı aydan eski fotoğrafları ve 100 MB üzeri videoları listeler; hepsi telefonun üzerinde.',
          },
          {
            name: 'Silmeden önce karşılaştırın',
            text: 'Herhangi bir fotoğrafa basılı tutarak tam ekran görün, sonra gidecekleri seçin. Her benzer grupta Tümünü seç bir kopyayı tutar; böylece bir an yanlışlıkla tamamen silinmez.',
          },
          {
            name: 'Sistem iletişim kutusunu onaylayın ve çöp kutusuna bakın',
            text: 'Android, dosyalar kaldırılmadan önce kendi onayını gösterir. Bunun yerine Google Fotoğraflar içinde sildiyseniz öğeler 60 güne kadar Çöp Kutusu\'nda bekler; alanı hemen geri almak için kutuyu boşaltın.',
          },
        ],
      },
      sections: [
        {
          title: 'Android\'de Yinelenenler Neden Birikir?',
          content: [
            'Klasik kaynak mesajlaşmadır. WhatsApp aldığınız her fotoğrafı galeriye kaydeder; iki grupta paylaşılan bir resim iki kez gelir, gönderip sonra geri aldığınız bir fotoğraf üç kez var olur. Instagram, Telegram ve Snapchat de kendi "galeriye kaydet" kopyalarını ekler; her biri yeniden kodlanır ve artık orijinalle bayt bayt özdeş değildir. Dosya tabanlı bir yinelenen bulucunun göremediği tam olarak budur.',
            'İkinci kaynak kameranın kendisidir. Tekrar çekimler, seri çekimler ve garanti olsun diye grup fotoğrafını üç kez çekme alışkanlığı, kimsenin dönüp ayıklamadığı neredeyse özdeş görüntü kümeleri üretir. Birkaç bin fotoğraflık bir kitaplıkta dörtte birinin böyle bir kümeye ait olması olağandır. Bunlar hiçbir dosya tanımına göre yinelenen değildir, ama yeri kaplayanlar bunlardır.',
            'Son olarak çoğu kişinin hiç silmediği ekran görüntüleri ve ekran kayıtları ile hareketli bir nesneden ya da titreyen elden kaynaklanan bulanık kareler vardır. Bunların hiçbirini de yinelenen bulucu yakalamaz; yalnızca dosya içeriğini karşılaştıran bir araç dağınıklığın büyük kısmını yerinde bırakır.',
          ],
        },
        {
          title: 'Birebir Kopyalar: Files by Google Bu İşi İyi Yapar',
          content: [
            'Çoğu Android telefonda önceden yüklü gelen Files by Google\'ın Temizle sekmesinde bir Yinelenen dosyalar kartı vardır. Dosya içeriklerini karşılaştırır; adları veya klasörleri ne olursa olsun son bayta kadar özdeş kopyaları bulur. WhatsApp\'ın çift kaydı için işe yarar, ücretsizdir ve Android\'in olağan onayıyla siler.',
            'Sınırı tanımın kendisidir. Bir kopya yeniden boyutlandırıldığı, yeniden sıkıştırıldığı veya düzenlendiği anda baytlar değişir ve kart onu artık listelemez. Aynı sekmede Büyük dosyalar, Eski ekran görüntüleri ve Bulanık resimler gibi başka yararlı kartlar da bulunur, ancak bunlar gözden geçirme önerileridir; uygulama yalnızca birbirine benzeyen fotoğrafları gruplayamaz.',
            'Üretici galerileri değişkenlik gösterir. Samsung Galeri ve Xiaomi Galeri bazı yazılım sürümlerinde benzer veya yinelenen görüntüler için öneri kartları sunmuştur; bulunduklarında genellikle temkinlidirler ve Files by Google gibi yakın kopyalara odaklanırlar. Galerinizde böyle bir kart varsa önce onu kullanın; hiçbir maliyeti yoktur.',
          ],
        },
        {
          title: 'Benzer ve Bulanık Fotoğraflar Görsel Tarama İster',
          content: [
            'Görsel tarama her fotoğrafı, nasıl göründüğünü anlatan küçük bir parmak izine dönüştürür ve sonra parmak izlerini karşılaştırır. Aynı sahnenin iki karesi, biri bir sohbet uygulamasınca kırpılmış, filtrelenmiş veya sıkıştırılmış olsa bile yakın puan alır; karşılaştırmayı telefon kendisi yapabilir: yükleme yok, hesap yok. Android için Disk Mop taramayı cihazda çalıştırır ve ortaya çıkan grupları her karenin önizlemesiyle gösterir.',
            'Bulanıklık tespiti, bir fotoğrafın ne kadar keskin kenar ayrıntısı içerdiğini ölçerek çalışır. Net bir fotoğrafın kenarları belirgindir; titrek veya odak dışı bir fotoğrafınki değildir. Ölçüm hızlıdır ve telefonda çalışır, ancak düz bir duvarın ya da sisli bir sabahın fotoğrafı da düşük puan alır; bu yüzden bulanık listesi körlemesine silinecek bir liste değil, gözden geçirilecek bir kuyruk olarak görülmelidir.',
            'Aynı tarama ekran görüntülerini kendi listesine ayırır, altı aydan eski fotoğrafları ve 100 MB üzeri videoları işaretler ve her grubun ne kadar yer açacağını gösterir. Karşılaştırma için Google Fotoğraflar\'ın Depolamayı yönet ekranının ne yaptığını bilmekte fayda var: Büyük fotoğraflar ve videolar, Bulanık fotoğraflar ve Ekran görüntüleri önerileri Google hesabınızın bulut depolamasını temizler; orada silmek fotoğrafı buluttan ve tüm cihazlardan kaldırır.',
          ],
        },
        {
          title: 'Güvenli Silme: Çöp Kutusu Kuralları ve Yedekler',
          content: [
            'Android\'de tek bir çöp kutusu yoktur. Google Fotoğraflar içinde silinen fotoğraflar uygulamanın Çöp Kutusu\'na gider; yedeklenmiş öğeler 60, yedeklenmemiş öğeler 30 gün orada kalır ve buluttan da kaldırılır. Samsung veya Xiaomi galerisinde silinen fotoğraflar o galerinin kendi geri dönüşüm kutusuna gider, genellikle 30 günlüğüne. Files by Google ve Disk Mop\'un kullandığı Android sistem iletişim kutusuyla silinen fotoğraflar ise doğrudan telefondan kaldırılır.',
            'Bu son nokta yedekler açısından önemlidir. Google Fotoğraflar yedeklemesi açıksa, bir temizleyiciyle yerel dosyayı silmek yalnızca telefondaki kopyayı kaldırır; bulut kopyası kalır ve Google Fotoğraflar onu bulut simgesiyle gösterir. Yedekleme kapalıysa silme kalıcıdır; bu yüzden büyük bir temizlikten önce yedekleme durumunu kontrol edin ve bekleyen bir yedeklemenin önce bitmesine izin verin.',
            'Disk Mop bu ihtiyat çevresinde tasarlanmıştır. Hiçbir şey önceden seçili gelmez, benzer grupta Tümünü seç bir kopyayı tutar, her öğe onaylamadan önce boyutunu gösterir ve son adım Android\'in kendi iletişim kutusudur. İlk üç tekil silme ücretsizdir, böylece sonuçları değerlendirebilirsiniz; tam sürüm abonelik ve reklam olmadan tek seferlik satın alımdır.',
          ],
        },
      ],
      faq: [
        {
          question: 'Google Fotoğraflar yinelenenleri otomatik siler mi?',
          answer:
            'Hayır. Yedekleme açıkken Google Fotoğraflar hesabınızda zaten bulunan bir fotoğrafı yüklemeyi atlar, ancak telefondaki kopyayı asla silmez. Cihazın kendisi için yine bir yinelenen bulucuya ihtiyacınız vardır.',
        },
        {
          question: 'Telefonumda bir fotoğrafı silmek onu Google Fotoğraflar\'dan da kaldırır mı?',
          answer:
            'Nerede sildiğinize bağlıdır. Google Fotoğraflar içinde silmek, çöp kutusu süresi dolunca fotoğrafı buluttan ve tüm cihazlardan kaldırır. Yerel dosyayı Files by Google veya Disk Mop ile silmek ise yedeklenmiş bulut kopyasını yerinde bırakır.',
        },
        {
          question: 'Files by Google yinelenenlerimin çoğunu neden kaçırıyor?',
          answer:
            'Dosya içeriklerini karşılaştırır ve yalnızca bayt bayt özdeş kopyaları bulur. WhatsApp, Instagram veya bir düzenleyiciden yeniden kaydedilen fotoğraf yeniden kodlanır; resim aynı görünse de baytlar farklıdır. Bunlar için görsel benzerlik taraması gerekir.',
        },
        {
          question: 'Fotoğraf benzerlik taraması gizliliğe uygun mu?',
          answer:
            'Olabilir. Disk Mop karşılaştırmayı telefonda yapar; sunucusu ve hesabı yoktur, dolayısıyla fotoğraflar cihazdan asla çıkmaz. Herhangi bir temizleyiciye kitaplığınızı okutmadan önce izinlerini ve gizlilik etiketini kontrol edin.',
        },
      ],
      verdict: [
        'Ücretsiz araçlarla başlayın: özdeş kopyalar için Files by Google, varsa galerinizin kendi önerileri. Ardından boşa giden alanın çoğunu oluşturan tekrar çekimler, yeniden kaydedilmiş kopyalar, bulanık kareler ve eski ekran görüntüleri için görsel bir tarama çalıştırın ve onaylamadan önce sildiklerinizin nereye gittiğini kontrol edin.',
        'Android için Disk Mop bu adımları tek ekranda birleştirir ve kontrolü sizde tutar: tam ekran önizlemeli gruplar, önceden seçili hiçbir şey, her zaman bir kopya tutulur, boyutlar silmeden önce gösterilir ve her şey telefonda hesaplanır.',
      ],
      ctaText: 'Disk Mop\'u Google Play\'den edinin',
    },
    en: {
      title: 'How to Find and Delete Duplicate and Similar Photos on Android',
      metaDescription:
        'Google Photos has no duplicate finder. How to spot exact copies, WhatsApp re-saves, bursts and blurry shots on Android and delete them, keeping the best one.',
      subtitle: 'Files by Google, Google Photos, manufacturer galleries and a visual-similarity scan compared',
      intro: [
        'Short answer: Android has no built-in duplicate photo finder. Files by Google finds exact copies (the same file saved twice), Google Photos\' cleanup tools work on your cloud storage rather than the phone, and neither of them groups the ten near-identical shots of one moment that take most of the space. For those you need a visual similarity scan, which can run on the phone without uploading anything.',
        'This guide explains where duplicates come from on Android, what each free tool actually catches, how similarity and blur detection work, and how to delete safely given the different trash rules of Google Photos, manufacturer galleries and file managers.',
      ],
      keyTakeaways: [
        'Files by Google > Clean > Duplicate files finds byte-identical copies only; a photo re-saved from WhatsApp or Instagram is re-encoded and no longer identical.',
        'Google Photos skips uploading exact duplicates but never deletes them from the phone, and its Manage storage suggestions clean your Google account, not the device.',
        'Shots of the same moment (retries, bursts, group photos taken three times) usually outweigh exact duplicates ten to one.',
        'A visual similarity scan compares how photos look, so it groups cropped, filtered and compressed copies together with the original.',
        'Blurry photos can be detected on the phone by measuring edge sharpness; the result is a suggestion to review, not a verdict.',
        'Photos deleted through Android\'s system dialog are removed from the phone; a backed-up copy in Google Photos stays in the cloud.',
      ],
      dataTable: {
        caption: 'What each tool on Android can find',
        columns: ['Tool', 'Exact duplicates', 'Similar shots', 'Blurry photos', 'Screenshots', 'Works on the phone only'],
        rows: [
          ['Files by Google', 'Yes', 'No', 'Suggestions', 'Old screenshots', 'Yes'],
          ['Google Photos (Manage storage)', 'No (skips uploading copies)', 'No', 'Yes, in the cloud', 'Yes, in the cloud', 'No, needs backup'],
          ['Manufacturer gallery cards', 'Sometimes', 'Rarely', 'Rarely', 'Sometimes', 'Yes'],
          ['Disk Mop for Android', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
        ],
      },
      howTo: {
        name: 'Delete duplicate and similar photos on Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Remove exact copies with Files by Google',
            text: 'Open Files by Google, tap Clean and look for the Duplicate files card. It lists files that are byte-for-byte identical; select the copies and delete them. This catches photos saved twice from the same chat.',
          },
          {
            name: 'Check what Google Photos has backed up',
            text: 'In Google Photos, tap your profile picture > Photos settings > Backup. If backup is on, the cloud keeps a copy of everything you delete locally, and Free up space removes the local copies of photos already backed up. This frees storage but does not find duplicates.',
          },
          {
            name: 'Scan for similar and blurry shots',
            text: 'Run a visual scan. Disk Mop for Android groups photos that look alike, flags blurry frames and screenshots, and lists photos older than six months and videos over 100 MB, all on the phone.',
          },
          {
            name: 'Compare before you delete',
            text: 'Press and hold any photo to see it full screen, then pick what goes. In each similar group, Select all keeps one copy so a whole moment is never wiped out by accident.',
          },
          {
            name: 'Confirm the system dialog and check the trash',
            text: 'Android shows its own confirmation before files are removed. If you deleted inside Google Photos instead, the items sit in its Trash for up to 60 days; empty it to get the space back now.',
          },
        ],
      },
      sections: [
        {
          title: 'Why Duplicates Pile Up on Android',
          content: [
            'The classic source is messaging. WhatsApp saves every received photo to the gallery, so a picture shared in two groups arrives twice, and a photo you send and later receive back exists three times. Instagram, Telegram and Snapchat add their own Save to gallery copies, each re-encoded so that it is no longer byte-identical to the original, which is exactly what a file-based duplicate finder cannot see.',
            'The second source is the camera itself. Retries, bursts and the habit of taking a group photo three times to be safe produce clusters of near-identical images that nobody goes back to prune. In a library of a few thousand photos it is common for a quarter of them to belong to such a cluster. These are not duplicates by any file definition, but they are the ones taking the space.',
            'Finally there are screenshots and screen recordings, which many people never delete, and blurry frames from a moving subject or a shaky hand. None of these are caught by a duplicate finder either, which is why a tool that only compares file contents leaves most of the mess in place.',
          ],
        },
        {
          title: 'Exact Duplicates: Files by Google Does This Well',
          content: [
            'Files by Google, preinstalled on most Android phones, has a Clean tab with a Duplicate files card. It compares file contents, so it finds copies that are identical down to the last byte regardless of their names or folders. For the WhatsApp double-save case it works, it is free, and it deletes through Android\'s normal confirmation.',
            'Its limit is the definition. The moment a copy has been resized, recompressed or edited, the bytes differ and the card no longer lists it. The same tab offers other useful cards, such as large files, old screenshots and blurry images, but those are suggestions to review, and the app cannot group photos that merely look alike.',
            'Manufacturer galleries vary. Samsung\'s Gallery and Xiaomi\'s Gallery have offered suggestion cards for similar or duplicate images in some versions of their software; when present they tend to be conservative and, like Files by Google, focus on close copies. If your gallery has such a card, use it first; it costs nothing.',
          ],
        },
        {
          title: 'Similar and Blurry Photos Need a Visual Scan',
          content: [
            'A visual scan turns each photo into a small fingerprint that describes how it looks, then compares fingerprints. Two frames of the same scene score as close even if one was cropped, filtered or compressed by a chat app, and the phone can do the comparison itself: no upload, no account. Disk Mop for Android runs the scan on the device and shows the resulting groups with a preview of each frame.',
            'Blur detection works by measuring how much sharp edge detail a photo contains. A crisp photo has strong edges; a shaky or out-of-focus one does not. The measurement is quick and runs on the phone, but a photo of a plain wall or a foggy morning also scores low, which is why the blurry list should be treated as a review queue and not deleted blindly.',
            'The same scan sorts screenshots into their own list, flags photos older than six months and videos over 100 MB, and shows how much space each group would free. It is worth knowing what Google Photos\' Manage storage does by comparison: its Large photos and videos, Blurry photos and Screenshots suggestions clean your Google account\'s cloud storage, and deleting there removes the photo from the cloud and from every device.',
          ],
        },
        {
          title: 'Deleting Safely: Trash Rules and Backups',
          content: [
            'Android does not have one trash. Photos deleted inside Google Photos go to its Trash, where backed-up items stay for 60 days and non-backed-up items for 30, and are removed from the cloud as well. Photos deleted in Samsung\'s or Xiaomi\'s gallery go to that gallery\'s own recycle bin, usually for 30 days. Photos deleted through Android\'s system dialog, which is what Files by Google and Disk Mop use, are removed from the phone directly.',
            'That last point matters for backups. If Google Photos backup is on, deleting a local file with a cleaner removes only the phone copy; the cloud copy stays and Google Photos shows it with a cloud icon. If backup is off, the deletion is final, so check the backup status before a large cleanup and let a pending backup finish first.',
            'Disk Mop is designed around that caution. Nothing is pre-selected, Select all in a similar group keeps one copy, every item shows its size before you confirm, and Android\'s own dialog is the last step. The first three single deletions are free so you can judge the results, and the full version is a one-time purchase with no subscription and no ads.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does Google Photos automatically delete duplicates?',
          answer:
            'No. When backup is on, Google Photos skips uploading a photo that already exists in your account, but it never deletes the copy on the phone. You still need a duplicate finder for the device itself.',
        },
        {
          question: 'Will deleting a photo on my phone remove it from Google Photos?',
          answer:
            'It depends on where you delete. Deleting inside Google Photos removes the photo from the cloud and every device after the trash period. Deleting the local file with Files by Google or Disk Mop leaves the backed-up cloud copy in place.',
        },
        {
          question: 'Why does Files by Google miss most of my duplicates?',
          answer:
            'It compares file contents and finds only byte-identical copies. A photo re-saved from WhatsApp, Instagram or an editor is re-encoded, so the bytes differ even though the picture looks the same. Those need a visual similarity scan.',
        },
        {
          question: 'Is a photo similarity scan private?',
          answer:
            'It can be. Disk Mop runs the comparison on the phone and has no server or account, so photos never leave the device. Check any cleaner\'s permissions and privacy label before letting it read your library.',
        },
      ],
      verdict: [
        'Start with the free tools: Files by Google for identical copies and your gallery\'s own suggestions if it has them. Then run a visual scan for the retries, re-saved copies, blurry frames and old screenshots that make up most of the wasted space, and check where your deletions go before you confirm.',
        'Disk Mop for Android combines those steps on one screen and keeps you in control: groups with a full-screen preview, nothing pre-selected, one copy always kept, sizes shown before deletion, and everything computed on the phone.',
      ],
      ctaText: 'Get Disk Mop for Android on Google Play',
    },
    de: {
      title: 'Doppelte und ähnliche Fotos unter Android finden und löschen',
      metaDescription:
        'Google Fotos hat keine Duplikatsuche. So finden Sie unter Android exakte Kopien, WhatsApp-Doppel, Serienbilder und unscharfe Fotos und löschen sie gesammelt.',
      subtitle: 'Files by Google, Google Fotos, Hersteller-Galerien und eine visuelle Ähnlichkeitsprüfung im Vergleich',
      intro: [
        'Kurze Antwort: Android hat keine eingebaute Duplikatsuche für Fotos. Files by Google findet exakte Kopien (dieselbe Datei zweimal gespeichert), die Aufräumfunktionen von Google Fotos wirken auf Ihren Cloud-Speicher statt auf das Telefon, und keines von beiden gruppiert die zehn fast identischen Aufnahmen eines Moments, die den meisten Platz belegen. Dafür brauchen Sie eine visuelle Ähnlichkeitsprüfung, die auf dem Telefon laufen kann, ohne etwas hochzuladen.',
        'Dieser Leitfaden erklärt, woher Duplikate unter Android kommen, was jedes kostenlose Werkzeug tatsächlich erfasst, wie Ähnlichkeits- und Unschärfeerkennung funktionieren und wie Sie angesichts der unterschiedlichen Papierkorb-Regeln von Google Fotos, Hersteller-Galerien und Dateimanagern sicher löschen.',
      ],
      keyTakeaways: [
        'Files by Google > Bereinigen > Doppelte Dateien findet nur byteidentische Kopien; ein aus WhatsApp oder Instagram erneut gespeichertes Foto ist neu kodiert und nicht mehr identisch.',
        'Google Fotos überspringt das Hochladen exakter Duplikate, löscht sie aber nie vom Telefon; die Vorschläge unter Speicher verwalten bereinigen Ihr Google-Konto, nicht das Gerät.',
        'Aufnahmen desselben Moments (Wiederholungen, Serienbilder, dreimal geschossene Gruppenfotos) belegen meist zehnmal so viel Platz wie exakte Duplikate.',
        'Eine visuelle Ähnlichkeitsprüfung vergleicht, wie Fotos aussehen, und gruppiert deshalb beschnittene, gefilterte und komprimierte Kopien zusammen mit dem Original.',
        'Unscharfe Fotos lassen sich auf dem Telefon über die Kantenschärfe erkennen; das Ergebnis ist ein Vorschlag zur Durchsicht, kein Urteil.',
        'Über den Systemdialog von Android gelöschte Fotos werden vom Telefon entfernt; eine in Google Fotos gesicherte Kopie bleibt in der Cloud.',
      ],
      dataTable: {
        caption: 'Was jedes Werkzeug unter Android finden kann',
        columns: ['Werkzeug', 'Exakte Duplikate', 'Ähnliche Aufnahmen', 'Unscharfe Fotos', 'Screenshots', 'Läuft nur auf dem Telefon'],
        rows: [
          ['Files by Google', 'Ja', 'Nein', 'Vorschläge', 'Alte Screenshots', 'Ja'],
          ['Google Fotos (Speicher verwalten)', 'Nein (überspringt das Hochladen von Kopien)', 'Nein', 'Ja, in der Cloud', 'Ja, in der Cloud', 'Nein, braucht Sicherung'],
          ['Karten der Hersteller-Galerie', 'Manchmal', 'Selten', 'Selten', 'Manchmal', 'Ja'],
          ['Disk Mop für Android', 'Ja', 'Ja', 'Ja', 'Ja', 'Ja'],
        ],
      },
      howTo: {
        name: 'Doppelte und ähnliche Fotos unter Android löschen',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Exakte Kopien mit Files by Google entfernen',
            text: 'Öffnen Sie Files by Google, tippen Sie auf Bereinigen und suchen Sie die Karte Doppelte Dateien. Sie listet Dateien, die Byte für Byte identisch sind; wählen Sie die Kopien aus und löschen Sie sie. Das erfasst Fotos, die zweimal aus demselben Chat gespeichert wurden.',
          },
          {
            name: 'Prüfen, was Google Fotos gesichert hat',
            text: 'Tippen Sie in Google Fotos auf Ihr Profilbild > Google Fotos-Einstellungen > Sicherung. Ist die Sicherung aktiv, behält die Cloud eine Kopie von allem, was Sie lokal löschen, und Speicherplatz freigeben entfernt die lokalen Kopien bereits gesicherter Fotos. Das schafft Platz, findet aber keine Duplikate.',
          },
          {
            name: 'Nach ähnlichen und unscharfen Aufnahmen suchen',
            text: 'Führen Sie eine visuelle Prüfung durch. Disk Mop für Android gruppiert Fotos, die sich ähneln, markiert unscharfe Bilder und Screenshots und listet Fotos, die älter als sechs Monate sind, sowie Videos über 100 MB, alles auf dem Telefon.',
          },
          {
            name: 'Vor dem Löschen vergleichen',
            text: 'Halten Sie ein Foto gedrückt, um es im Vollbild zu sehen, und wählen Sie dann aus, was weg soll. In jeder Ähnlichkeitsgruppe behält Alle auswählen eine Kopie, sodass ein ganzer Moment nie versehentlich verschwindet.',
          },
          {
            name: 'Systemdialog bestätigen und Papierkorb prüfen',
            text: 'Android zeigt vor dem Entfernen von Dateien eine eigene Bestätigung. Haben Sie stattdessen in Google Fotos gelöscht, liegen die Elemente bis zu 60 Tage im Papierkorb; leeren Sie ihn, um den Platz sofort zurückzubekommen.',
          },
        ],
      },
      sections: [
        {
          title: 'Warum sich Duplikate unter Android ansammeln',
          content: [
            'Die klassische Quelle sind Messenger. WhatsApp speichert jedes empfangene Foto in der Galerie, sodass ein in zwei Gruppen geteiltes Bild zweimal ankommt und ein Foto, das Sie senden und später zurückerhalten, dreimal existiert. Instagram, Telegram und Snapchat fügen eigene Kopien über "In Galerie speichern" hinzu, jede neu kodiert und damit nicht mehr byteidentisch mit dem Original, was eine dateibasierte Duplikatsuche genau nicht sehen kann.',
            'Die zweite Quelle ist die Kamera selbst. Wiederholungen, Serienbilder und die Gewohnheit, ein Gruppenfoto sicherheitshalber dreimal zu schießen, erzeugen Häufungen fast identischer Bilder, die niemand später ausdünnt. In einer Bibliothek mit einigen tausend Fotos gehört häufig ein Viertel zu einer solchen Häufung. Nach keiner Dateidefinition sind das Duplikate, aber sie belegen den Platz.',
            'Schließlich gibt es Screenshots und Bildschirmaufnahmen, die viele nie löschen, sowie unscharfe Bilder von einem bewegten Motiv oder einer zittrigen Hand. Auch die erfasst keine Duplikatsuche, weshalb ein Werkzeug, das nur Dateiinhalte vergleicht, den größten Teil der Unordnung bestehen lässt.',
          ],
        },
        {
          title: 'Exakte Duplikate: Files by Google kann das gut',
          content: [
            'Files by Google, auf den meisten Android-Telefonen vorinstalliert, hat einen Tab Bereinigen mit einer Karte Doppelte Dateien. Sie vergleicht Dateiinhalte und findet daher Kopien, die bis zum letzten Byte identisch sind, unabhängig von Namen oder Ordnern. Für die WhatsApp-Doppelspeicherung funktioniert das, es ist kostenlos und löscht über die normale Bestätigung von Android.',
            'Die Grenze liegt in der Definition. Sobald eine Kopie verkleinert, neu komprimiert oder bearbeitet wurde, unterscheiden sich die Bytes, und die Karte listet sie nicht mehr. Derselbe Tab bietet weitere nützliche Karten wie Große Dateien, Alte Screenshots und Unscharfe Bilder, doch das sind Vorschläge zur Durchsicht, und die App kann Fotos, die sich lediglich ähneln, nicht gruppieren.',
            'Hersteller-Galerien sind unterschiedlich. Die Galerie von Samsung und die von Xiaomi haben in manchen Softwareversionen Vorschlagskarten für ähnliche oder doppelte Bilder angeboten; wo vorhanden, sind sie meist zurückhaltend und konzentrieren sich wie Files by Google auf nahe Kopien. Hat Ihre Galerie eine solche Karte, nutzen Sie sie zuerst; sie kostet nichts.',
          ],
        },
        {
          title: 'Ähnliche und unscharfe Fotos brauchen eine visuelle Prüfung',
          content: [
            'Eine visuelle Prüfung verwandelt jedes Foto in einen kleinen Fingerabdruck, der beschreibt, wie es aussieht, und vergleicht dann die Fingerabdrücke. Zwei Aufnahmen derselben Szene gelten als nah beieinander, selbst wenn eine von einer Chat-App beschnitten, gefiltert oder komprimiert wurde, und das Telefon kann den Vergleich selbst durchführen: kein Upload, kein Konto. Disk Mop für Android führt die Prüfung auf dem Gerät aus und zeigt die entstehenden Gruppen mit einer Vorschau jedes Bildes.',
            'Die Unschärfeerkennung misst, wie viel scharfe Kantendetails ein Foto enthält. Ein knackiges Foto hat kräftige Kanten; ein verwackeltes oder unscharfes nicht. Die Messung ist schnell und läuft auf dem Telefon, aber ein Foto einer glatten Wand oder eines nebligen Morgens erzielt ebenfalls einen niedrigen Wert, weshalb die Unscharf-Liste als Prüfwarteschlange behandelt und nicht blind gelöscht werden sollte.',
            'Dieselbe Prüfung sortiert Screenshots in eine eigene Liste, markiert Fotos, die älter als sechs Monate sind, und Videos über 100 MB und zeigt, wie viel Platz jede Gruppe freigeben würde. Zum Vergleich lohnt sich ein Blick darauf, was Speicher verwalten in Google Fotos tut: Die Vorschläge Große Fotos und Videos, Unscharfe Fotos und Screenshots bereinigen den Cloud-Speicher Ihres Google-Kontos, und Löschen dort entfernt das Foto aus der Cloud und von jedem Gerät.',
          ],
        },
        {
          title: 'Sicher löschen: Papierkorb-Regeln und Sicherungen',
          content: [
            'Android hat nicht nur einen Papierkorb. In Google Fotos gelöschte Fotos landen in dessen Papierkorb, wo gesicherte Elemente 60 Tage und nicht gesicherte 30 Tage bleiben, und werden auch aus der Cloud entfernt. In der Galerie von Samsung oder Xiaomi gelöschte Fotos wandern in den eigenen Papierkorb dieser Galerie, meist für 30 Tage. Über den Systemdialog von Android gelöschte Fotos, den Files by Google und Disk Mop verwenden, werden direkt vom Telefon entfernt.',
            'Dieser letzte Punkt ist für Sicherungen wichtig. Ist die Sicherung in Google Fotos aktiv, entfernt das Löschen einer lokalen Datei mit einem Cleaner nur die Kopie auf dem Telefon; die Cloud-Kopie bleibt, und Google Fotos zeigt sie mit einem Wolkensymbol. Ist die Sicherung aus, ist das Löschen endgültig. Prüfen Sie daher vor einer großen Aufräumaktion den Sicherungsstatus und lassen Sie eine laufende Sicherung erst abschließen.',
            'Disk Mop ist um diese Vorsicht herum gebaut. Nichts ist vorausgewählt, Alle auswählen behält in einer Ähnlichkeitsgruppe eine Kopie, jedes Element zeigt vor der Bestätigung seine Größe, und der eigene Dialog von Android ist der letzte Schritt. Die ersten drei Einzellöschungen sind kostenlos, damit Sie die Ergebnisse beurteilen können, und die Vollversion ist ein Einmalkauf ohne Abo und ohne Werbung.',
          ],
        },
      ],
      faq: [
        {
          question: 'Löscht Google Fotos Duplikate automatisch?',
          answer:
            'Nein. Bei aktiver Sicherung überspringt Google Fotos das Hochladen eines Fotos, das bereits in Ihrem Konto existiert, löscht die Kopie auf dem Telefon aber nie. Für das Gerät selbst brauchen Sie weiterhin eine Duplikatsuche.',
        },
        {
          question: 'Wird ein auf dem Telefon gelöschtes Foto auch aus Google Fotos entfernt?',
          answer:
            'Das hängt davon ab, wo Sie löschen. Löschen in Google Fotos entfernt das Foto nach der Papierkorbfrist aus der Cloud und von jedem Gerät. Löschen der lokalen Datei mit Files by Google oder Disk Mop lässt die gesicherte Cloud-Kopie unangetastet.',
        },
        {
          question: 'Warum übersieht Files by Google die meisten meiner Duplikate?',
          answer:
            'Es vergleicht Dateiinhalte und findet nur byteidentische Kopien. Ein aus WhatsApp, Instagram oder einem Editor erneut gespeichertes Foto ist neu kodiert, sodass sich die Bytes unterscheiden, obwohl das Bild gleich aussieht. Dafür braucht es eine visuelle Ähnlichkeitsprüfung.',
        },
        {
          question: 'Ist eine Ähnlichkeitsprüfung für Fotos privat?',
          answer:
            'Sie kann es sein. Disk Mop führt den Vergleich auf dem Telefon aus und hat weder Server noch Konto, sodass Fotos das Gerät nie verlassen. Prüfen Sie bei jedem Cleaner die Berechtigungen und die Datenschutzangaben, bevor Sie ihn Ihre Bibliothek lesen lassen.',
        },
      ],
      verdict: [
        'Beginnen Sie mit den kostenlosen Werkzeugen: Files by Google für identische Kopien und, falls vorhanden, die Vorschläge Ihrer Galerie. Führen Sie dann eine visuelle Prüfung für die Wiederholungen, erneut gespeicherten Kopien, unscharfen Bilder und alten Screenshots durch, die den größten Teil des verschwendeten Platzes ausmachen, und prüfen Sie vor der Bestätigung, wohin Ihre Löschungen gehen.',
        'Disk Mop für Android vereint diese Schritte auf einem Bildschirm und lässt Sie die Kontrolle behalten: Gruppen mit Vollbildvorschau, nichts vorausgewählt, immer eine Kopie behalten, Größen vor dem Löschen angezeigt und alles auf dem Telefon berechnet.',
      ],
      ctaText: 'Disk Mop für Android bei Google Play holen',
    },
    fr: {
      title: 'Comment trouver et supprimer les photos en double et similaires sur Android',
      metaDescription:
        'Google Photos n\'a pas de détecteur de doublons. Comment repérer sur Android copies exactes, doubles WhatsApp, rafales et photos floues, et les supprimer en lot.',
      subtitle: 'Files by Google, Google Photos, galeries des constructeurs et analyse de similarité visuelle comparés',
      intro: [
        'Réponse courte : Android n\'a pas de détecteur de photos en double intégré. Files by Google trouve les copies exactes (le même fichier enregistré deux fois), les outils de nettoyage de Google Photos agissent sur votre stockage cloud plutôt que sur le téléphone, et aucun des deux ne regroupe les dix clichés quasi identiques d\'un même instant qui prennent le plus de place. Pour ceux-là, il faut une analyse de similarité visuelle, qui peut s\'exécuter sur le téléphone sans rien envoyer.',
        'Ce guide explique d\'où viennent les doublons sur Android, ce que chaque outil gratuit détecte réellement, comment fonctionnent la détection de similarité et de flou, et comment supprimer en toute sécurité compte tenu des règles de corbeille différentes de Google Photos, des galeries des constructeurs et des gestionnaires de fichiers.',
      ],
      keyTakeaways: [
        'Files by Google > Nettoyer > Fichiers en double ne trouve que les copies identiques octet pour octet ; une photo réenregistrée depuis WhatsApp ou Instagram est réencodée et n\'est plus identique.',
        'Google Photos évite d\'importer les doublons exacts mais ne les supprime jamais du téléphone, et ses suggestions de Gérer l\'espace de stockage nettoient votre compte Google, pas l\'appareil.',
        'Les clichés d\'un même instant (reprises, rafales, photos de groupe prises trois fois) pèsent généralement dix fois plus que les doublons exacts.',
        'Une analyse de similarité visuelle compare l\'apparence des photos ; elle regroupe donc les copies recadrées, filtrées et compressées avec l\'original.',
        'Les photos floues peuvent être détectées sur le téléphone en mesurant la netteté des contours ; le résultat est une suggestion à vérifier, pas un verdict.',
        'Les photos supprimées via la boîte de dialogue système d\'Android sont retirées du téléphone ; une copie sauvegardée dans Google Photos reste dans le cloud.',
      ],
      dataTable: {
        caption: 'Ce que chaque outil peut trouver sur Android',
        columns: ['Outil', 'Doublons exacts', 'Clichés similaires', 'Photos floues', 'Captures d\'écran', 'Fonctionne uniquement sur le téléphone'],
        rows: [
          ['Files by Google', 'Oui', 'Non', 'Suggestions', 'Anciennes captures d\'écran', 'Oui'],
          ['Google Photos (Gérer l\'espace de stockage)', 'Non (évite d\'importer les copies)', 'Non', 'Oui, dans le cloud', 'Oui, dans le cloud', 'Non, sauvegarde requise'],
          ['Cartes des galeries constructeurs', 'Parfois', 'Rarement', 'Rarement', 'Parfois', 'Oui'],
          ['Disk Mop pour Android', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
        ],
      },
      howTo: {
        name: 'Supprimer les photos en double et similaires sur Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Retirer les copies exactes avec Files by Google',
            text: 'Ouvrez Files by Google, touchez Nettoyer et cherchez la carte Fichiers en double. Elle liste les fichiers identiques octet pour octet ; sélectionnez les copies et supprimez-les. Cela attrape les photos enregistrées deux fois depuis la même discussion.',
          },
          {
            name: 'Vérifier ce que Google Photos a sauvegardé',
            text: 'Dans Google Photos, touchez votre photo de profil > Paramètres de Google Photos > Sauvegarde. Si la sauvegarde est active, le cloud conserve une copie de tout ce que vous supprimez localement, et Libérer de l\'espace retire les copies locales des photos déjà sauvegardées. Cela libère de la place mais ne trouve pas les doublons.',
          },
          {
            name: 'Rechercher les clichés similaires et flous',
            text: 'Lancez une analyse visuelle. Disk Mop pour Android regroupe les photos qui se ressemblent, signale les images floues et les captures d\'écran, et liste les photos de plus de six mois et les vidéos de plus de 100 Mo, le tout sur le téléphone.',
          },
          {
            name: 'Comparer avant de supprimer',
            text: 'Maintenez le doigt sur une photo pour la voir en plein écran, puis choisissez ce qui part. Dans chaque groupe similaire, Tout sélectionner conserve une copie, pour qu\'un instant entier ne soit jamais effacé par accident.',
          },
          {
            name: 'Confirmer la boîte de dialogue système et vérifier la corbeille',
            text: 'Android affiche sa propre confirmation avant de retirer les fichiers. Si vous avez plutôt supprimé dans Google Photos, les éléments restent jusqu\'à 60 jours dans sa Corbeille ; videz-la pour récupérer la place tout de suite.',
          },
        ],
      },
      sections: [
        {
          title: 'Pourquoi les doublons s\'accumulent sur Android',
          content: [
            'La source classique est la messagerie. WhatsApp enregistre chaque photo reçue dans la galerie : une image partagée dans deux groupes arrive deux fois, et une photo que vous envoyez puis recevez en retour existe trois fois. Instagram, Telegram et Snapchat ajoutent leurs propres copies « Enregistrer dans la galerie », chacune réencodée et donc plus identique octet pour octet à l\'original, exactement ce qu\'un détecteur de doublons basé sur les fichiers ne peut pas voir.',
            'La deuxième source est l\'appareil photo lui-même. Reprises, rafales et l\'habitude de prendre une photo de groupe trois fois par sécurité produisent des grappes d\'images quasi identiques que personne ne revient élaguer. Dans une bibliothèque de quelques milliers de photos, il est courant qu\'un quart d\'entre elles appartienne à une telle grappe. Ce ne sont pas des doublons au sens des fichiers, mais ce sont elles qui prennent la place.',
            'Il y a enfin les captures et enregistrements d\'écran, que beaucoup ne suppriment jamais, et les images floues dues à un sujet en mouvement ou à une main qui tremble. Aucun de ces cas n\'est détecté par un détecteur de doublons non plus, et c\'est pourquoi un outil qui ne compare que le contenu des fichiers laisse l\'essentiel du désordre en place.',
          ],
        },
        {
          title: 'Doublons exacts : Files by Google fait cela très bien',
          content: [
            'Files by Google, préinstallé sur la plupart des téléphones Android, possède un onglet Nettoyer avec une carte Fichiers en double. Il compare le contenu des fichiers et trouve donc les copies identiques jusqu\'au dernier octet, quels que soient leurs noms ou dossiers. Pour le double enregistrement WhatsApp, cela fonctionne, c\'est gratuit et la suppression passe par la confirmation normale d\'Android.',
            'Sa limite, c\'est la définition. Dès qu\'une copie a été redimensionnée, recompressée ou retouchée, les octets diffèrent et la carte ne la liste plus. Le même onglet propose d\'autres cartes utiles, comme les fichiers volumineux, les anciennes captures d\'écran et les images floues, mais ce sont des suggestions à vérifier, et l\'appli ne peut pas regrouper des photos qui se ressemblent simplement.',
            'Les galeries des constructeurs varient. La Galerie de Samsung et celle de Xiaomi ont proposé, dans certaines versions de leur logiciel, des cartes de suggestions pour les images similaires ou en double ; quand elles existent, elles sont plutôt prudentes et, comme Files by Google, se concentrent sur les copies proches. Si votre galerie a une telle carte, utilisez-la d\'abord ; cela ne coûte rien.',
          ],
        },
        {
          title: 'Les photos similaires et floues exigent une analyse visuelle',
          content: [
            'Une analyse visuelle transforme chaque photo en une petite empreinte qui décrit son apparence, puis compare les empreintes. Deux images d\'une même scène obtiennent un score proche même si l\'une a été recadrée, filtrée ou compressée par une appli de messagerie, et le téléphone peut faire la comparaison lui-même : pas d\'envoi, pas de compte. Disk Mop pour Android exécute l\'analyse sur l\'appareil et affiche les groupes obtenus avec un aperçu de chaque image.',
            'La détection de flou mesure la quantité de détails nets sur les contours d\'une photo. Une photo nette a des contours marqués ; une photo bougée ou mal mise au point non. La mesure est rapide et s\'exécute sur le téléphone, mais une photo d\'un mur uni ou d\'un matin brumeux obtient aussi un score faible, raison pour laquelle la liste des photos floues doit être traitée comme une file à vérifier et non supprimée à l\'aveugle.',
            'La même analyse range les captures d\'écran dans leur propre liste, signale les photos de plus de six mois et les vidéos de plus de 100 Mo, et indique combien d\'espace chaque groupe libérerait. Il est utile de savoir ce que fait en comparaison Gérer l\'espace de stockage de Google Photos : ses suggestions Photos et vidéos volumineuses, Photos floues et Captures d\'écran nettoient le stockage cloud de votre compte Google, et une suppression à cet endroit retire la photo du cloud et de tous les appareils.',
          ],
        },
        {
          title: 'Supprimer en sécurité : règles de corbeille et sauvegardes',
          content: [
            'Android n\'a pas une seule corbeille. Les photos supprimées dans Google Photos vont dans sa Corbeille, où les éléments sauvegardés restent 60 jours et les non sauvegardés 30, et elles sont aussi retirées du cloud. Les photos supprimées dans la galerie Samsung ou Xiaomi vont dans la corbeille propre à cette galerie, généralement pour 30 jours. Les photos supprimées via la boîte de dialogue système d\'Android, celle qu\'utilisent Files by Google et Disk Mop, sont retirées directement du téléphone.',
            'Ce dernier point compte pour les sauvegardes. Si la sauvegarde Google Photos est active, supprimer un fichier local avec un nettoyeur ne retire que la copie du téléphone ; la copie cloud reste et Google Photos l\'affiche avec une icône de nuage. Si la sauvegarde est désactivée, la suppression est définitive : vérifiez donc l\'état de la sauvegarde avant un grand nettoyage et laissez d\'abord se terminer une sauvegarde en attente.',
            'Disk Mop est conçu autour de cette prudence. Rien n\'est présélectionné, Tout sélectionner dans un groupe similaire conserve une copie, chaque élément affiche sa taille avant confirmation, et la boîte de dialogue d\'Android est la dernière étape. Les trois premières suppressions unitaires sont gratuites pour juger des résultats, et la version complète est un achat unique, sans abonnement ni publicité.',
          ],
        },
      ],
      faq: [
        {
          question: 'Google Photos supprime-t-il automatiquement les doublons ?',
          answer:
            'Non. Quand la sauvegarde est active, Google Photos évite d\'importer une photo déjà présente dans votre compte, mais il ne supprime jamais la copie sur le téléphone. Il vous faut toujours un détecteur de doublons pour l\'appareil lui-même.',
        },
        {
          question: 'Supprimer une photo sur mon téléphone la retire-t-il de Google Photos ?',
          answer:
            'Cela dépend de l\'endroit où vous supprimez. Supprimer dans Google Photos retire la photo du cloud et de tous les appareils à la fin du délai de corbeille. Supprimer le fichier local avec Files by Google ou Disk Mop laisse en place la copie cloud sauvegardée.',
        },
        {
          question: 'Pourquoi Files by Google rate-t-il la plupart de mes doublons ?',
          answer:
            'Il compare le contenu des fichiers et ne trouve que les copies identiques octet pour octet. Une photo réenregistrée depuis WhatsApp, Instagram ou un éditeur est réencodée : les octets diffèrent même si l\'image paraît la même. Ces cas exigent une analyse de similarité visuelle.',
        },
        {
          question: 'Une analyse de similarité de photos respecte-t-elle la vie privée ?',
          answer:
            'Elle peut. Disk Mop effectue la comparaison sur le téléphone et n\'a ni serveur ni compte, donc les photos ne quittent jamais l\'appareil. Vérifiez les autorisations et l\'étiquette de confidentialité de tout nettoyeur avant de le laisser lire votre bibliothèque.',
        },
      ],
      verdict: [
        'Commencez par les outils gratuits : Files by Google pour les copies identiques et, si elle en a, les suggestions de votre galerie. Lancez ensuite une analyse visuelle pour les reprises, les copies réenregistrées, les images floues et les vieilles captures d\'écran qui constituent l\'essentiel de l\'espace gaspillé, et vérifiez où vont vos suppressions avant de confirmer.',
        'Disk Mop pour Android réunit ces étapes sur un seul écran et vous laisse la maîtrise : des groupes avec aperçu plein écran, rien de présélectionné, une copie toujours conservée, les tailles affichées avant suppression, et tout calculé sur le téléphone.',
      ],
      ctaText: 'Obtenir Disk Mop pour Android sur Google Play',
    },
    es: {
      title: 'Cómo encontrar y borrar fotos duplicadas y similares en Android',
      metaDescription:
        'Google Fotos no tiene buscador de duplicados. Cómo detectar en Android copias exactas, reguardados de WhatsApp, ráfagas y fotos borrosas, y borrarlas en bloque.',
      subtitle: 'Files by Google, Google Fotos, galerías del fabricante y un análisis de similitud visual, comparados',
      intro: [
        'Respuesta corta: Android no tiene un buscador de fotos duplicadas integrado. Files by Google encuentra copias exactas (el mismo archivo guardado dos veces), las herramientas de limpieza de Google Fotos actúan sobre tu almacenamiento en la nube y no sobre el teléfono, y ninguna de las dos agrupa las diez tomas casi idénticas de un mismo momento que son las que más espacio ocupan. Para esas hace falta un análisis de similitud visual, que puede ejecutarse en el teléfono sin subir nada.',
        'Esta guía explica de dónde salen los duplicados en Android, qué detecta realmente cada herramienta gratuita, cómo funcionan la detección de similitud y de desenfoque, y cómo borrar con seguridad teniendo en cuenta las distintas reglas de papelera de Google Fotos, las galerías del fabricante y los gestores de archivos.',
      ],
      keyTakeaways: [
        'Files by Google > Limpiar > Archivos duplicados solo encuentra copias idénticas byte a byte; una foto reguardada desde WhatsApp o Instagram se recodifica y deja de ser idéntica.',
        'Google Fotos evita subir los duplicados exactos, pero nunca los borra del teléfono, y las sugerencias de Gestionar almacenamiento limpian tu cuenta de Google, no el dispositivo.',
        'Las tomas de un mismo momento (repeticiones, ráfagas, fotos de grupo hechas tres veces) suelen ocupar diez veces más que los duplicados exactos.',
        'Un análisis de similitud visual compara el aspecto de las fotos, así que agrupa las copias recortadas, filtradas y comprimidas junto con el original.',
        'Las fotos borrosas pueden detectarse en el teléfono midiendo la nitidez de los bordes; el resultado es una sugerencia para revisar, no un veredicto.',
        'Las fotos borradas mediante el diálogo del sistema de Android se eliminan del teléfono; una copia respaldada en Google Fotos permanece en la nube.',
      ],
      dataTable: {
        caption: 'Qué puede encontrar cada herramienta en Android',
        columns: ['Herramienta', 'Duplicados exactos', 'Tomas similares', 'Fotos borrosas', 'Capturas de pantalla', 'Funciona solo en el teléfono'],
        rows: [
          ['Files by Google', 'Sí', 'No', 'Sugerencias', 'Capturas antiguas', 'Sí'],
          ['Google Fotos (Gestionar almacenamiento)', 'No (evita subir las copias)', 'No', 'Sí, en la nube', 'Sí, en la nube', 'No, necesita copia de seguridad'],
          ['Tarjetas de la galería del fabricante', 'A veces', 'Rara vez', 'Rara vez', 'A veces', 'Sí'],
          ['Disk Mop para Android', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí'],
        ],
      },
      howTo: {
        name: 'Borrar fotos duplicadas y similares en Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Eliminar las copias exactas con Files by Google',
            text: 'Abre Files by Google, toca Limpiar y busca la tarjeta Archivos duplicados. Enumera los archivos idénticos byte a byte; selecciona las copias y bórralas. Así se capturan las fotos guardadas dos veces desde el mismo chat.',
          },
          {
            name: 'Comprobar qué ha respaldado Google Fotos',
            text: 'En Google Fotos, toca tu foto de perfil > Ajustes de Google Fotos > Copia de seguridad. Si la copia está activada, la nube conserva una copia de todo lo que borres en local, y Liberar espacio elimina las copias locales de las fotos ya respaldadas. Esto libera espacio pero no encuentra duplicados.',
          },
          {
            name: 'Analizar tomas similares y borrosas',
            text: 'Ejecuta un análisis visual. Disk Mop para Android agrupa las fotos que se parecen, marca los fotogramas borrosos y las capturas de pantalla, y lista las fotos de más de seis meses y los vídeos de más de 100 MB, todo en el teléfono.',
          },
          {
            name: 'Comparar antes de borrar',
            text: 'Mantén pulsada cualquier foto para verla a pantalla completa y luego elige qué se va. En cada grupo similar, Seleccionar todo conserva una copia para que un momento entero nunca se borre por accidente.',
          },
          {
            name: 'Confirmar el diálogo del sistema y revisar la papelera',
            text: 'Android muestra su propia confirmación antes de eliminar los archivos. Si en cambio borraste dentro de Google Fotos, los elementos permanecen hasta 60 días en su Papelera; vacíala para recuperar el espacio ahora.',
          },
        ],
      },
      sections: [
        {
          title: 'Por qué se acumulan los duplicados en Android',
          content: [
            'La fuente clásica es la mensajería. WhatsApp guarda en la galería cada foto recibida, así que una imagen compartida en dos grupos llega dos veces, y una foto que envías y luego te devuelven existe tres veces. Instagram, Telegram y Snapchat añaden sus propias copias de «Guardar en la galería», cada una recodificada, de modo que ya no es idéntica byte a byte al original, que es exactamente lo que un buscador de duplicados basado en archivos no puede ver.',
            'La segunda fuente es la propia cámara. Las repeticiones, las ráfagas y la costumbre de hacer una foto de grupo tres veces por si acaso producen grupos de imágenes casi idénticas que nadie vuelve a depurar. En una biblioteca de unos miles de fotos es habitual que una cuarta parte pertenezca a uno de esos grupos. No son duplicados según ninguna definición de archivo, pero son las que ocupan el espacio.',
            'Por último están las capturas y grabaciones de pantalla, que mucha gente nunca borra, y los fotogramas borrosos por un sujeto en movimiento o un pulso inestable. Un buscador de duplicados tampoco detecta nada de esto, y por eso una herramienta que solo compara el contenido de los archivos deja la mayor parte del desorden en su sitio.',
          ],
        },
        {
          title: 'Duplicados exactos: Files by Google lo hace bien',
          content: [
            'Files by Google, preinstalado en la mayoría de teléfonos Android, tiene una pestaña Limpiar con una tarjeta Archivos duplicados. Compara el contenido de los archivos, así que encuentra copias idénticas hasta el último byte sin importar sus nombres o carpetas. Para el caso del doble guardado de WhatsApp funciona, es gratis y borra mediante la confirmación normal de Android.',
            'Su límite es la definición. En cuanto una copia se ha redimensionado, recomprimido o editado, los bytes difieren y la tarjeta deja de listarla. La misma pestaña ofrece otras tarjetas útiles, como archivos grandes, capturas de pantalla antiguas e imágenes borrosas, pero son sugerencias para revisar, y la app no puede agrupar fotos que simplemente se parecen.',
            'Las galerías del fabricante varían. La Galería de Samsung y la de Xiaomi han ofrecido tarjetas de sugerencias para imágenes similares o duplicadas en algunas versiones de su software; cuando existen suelen ser conservadoras y, como Files by Google, se centran en copias muy próximas. Si tu galería tiene una tarjeta así, úsala primero; no cuesta nada.',
          ],
        },
        {
          title: 'Las fotos similares y borrosas necesitan un análisis visual',
          content: [
            'Un análisis visual convierte cada foto en una pequeña huella que describe su aspecto y luego compara las huellas. Dos fotogramas de la misma escena obtienen una puntuación cercana aunque uno haya sido recortado, filtrado o comprimido por una app de chat, y el teléfono puede hacer la comparación por sí mismo: sin subidas, sin cuenta. Disk Mop para Android ejecuta el análisis en el dispositivo y muestra los grupos resultantes con una vista previa de cada fotograma.',
            'La detección de desenfoque mide cuánto detalle nítido de bordes contiene una foto. Una foto nítida tiene bordes marcados; una movida o desenfocada no. La medición es rápida y se ejecuta en el teléfono, pero una foto de una pared lisa o de una mañana de niebla también puntúa bajo, y por eso la lista de borrosas debe tratarse como una cola de revisión y no borrarse a ciegas.',
            'El mismo análisis separa las capturas de pantalla en su propia lista, marca las fotos de más de seis meses y los vídeos de más de 100 MB, y muestra cuánto espacio liberaría cada grupo. Conviene saber qué hace en comparación Gestionar almacenamiento de Google Fotos: sus sugerencias de Fotos y vídeos grandes, Fotos borrosas y Capturas de pantalla limpian el almacenamiento en la nube de tu cuenta de Google, y borrar ahí elimina la foto de la nube y de todos los dispositivos.',
          ],
        },
        {
          title: 'Borrar con seguridad: reglas de papelera y copias de seguridad',
          content: [
            'Android no tiene una única papelera. Las fotos borradas dentro de Google Fotos van a su Papelera, donde los elementos respaldados permanecen 60 días y los no respaldados 30, y se eliminan también de la nube. Las fotos borradas en la galería de Samsung o Xiaomi van a la papelera propia de esa galería, normalmente durante 30 días. Las fotos borradas mediante el diálogo del sistema de Android, que es el que usan Files by Google y Disk Mop, se eliminan directamente del teléfono.',
            'Este último punto importa para las copias de seguridad. Si la copia de Google Fotos está activada, borrar un archivo local con un limpiador elimina solo la copia del teléfono; la copia en la nube se queda y Google Fotos la muestra con un icono de nube. Si la copia está desactivada, el borrado es definitivo, así que comprueba el estado de la copia antes de una limpieza grande y deja que termine primero cualquier copia pendiente.',
            'Disk Mop está diseñado en torno a esa cautela. Nada viene preseleccionado, Seleccionar todo en un grupo similar conserva una copia, cada elemento muestra su tamaño antes de confirmar, y el propio diálogo de Android es el último paso. Los tres primeros borrados individuales son gratis para que juzgues los resultados, y la versión completa es una compra única, sin suscripción ni anuncios.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Google Fotos borra los duplicados automáticamente?',
          answer:
            'No. Con la copia de seguridad activada, Google Fotos evita subir una foto que ya existe en tu cuenta, pero nunca borra la copia del teléfono. Sigues necesitando un buscador de duplicados para el propio dispositivo.',
        },
        {
          question: '¿Borrar una foto en mi teléfono la elimina de Google Fotos?',
          answer:
            'Depende de dónde la borres. Borrar dentro de Google Fotos elimina la foto de la nube y de todos los dispositivos cuando vence el plazo de la papelera. Borrar el archivo local con Files by Google o Disk Mop deja intacta la copia respaldada en la nube.',
        },
        {
          question: '¿Por qué Files by Google pasa por alto la mayoría de mis duplicados?',
          answer:
            'Compara el contenido de los archivos y solo encuentra copias idénticas byte a byte. Una foto reguardada desde WhatsApp, Instagram o un editor se recodifica, así que los bytes difieren aunque la imagen parezca la misma. Esas necesitan un análisis de similitud visual.',
        },
        {
          question: '¿Es privado un análisis de similitud de fotos?',
          answer:
            'Puede serlo. Disk Mop hace la comparación en el teléfono y no tiene servidor ni cuenta, así que las fotos nunca salen del dispositivo. Revisa los permisos y la etiqueta de privacidad de cualquier limpiador antes de dejarle leer tu biblioteca.',
        },
      ],
      verdict: [
        'Empieza por las herramientas gratuitas: Files by Google para las copias idénticas y las sugerencias de tu galería si las tiene. Después ejecuta un análisis visual para las repeticiones, las copias reguardadas, los fotogramas borrosos y las capturas antiguas que forman la mayor parte del espacio desperdiciado, y comprueba a dónde van tus borrados antes de confirmar.',
        'Disk Mop para Android combina esos pasos en una sola pantalla y te deja el control: grupos con vista previa a pantalla completa, nada preseleccionado, siempre se conserva una copia, tamaños mostrados antes de borrar y todo calculado en el teléfono.',
      ],
      ctaText: 'Consigue Disk Mop para Android en Google Play',
    },
    it: {
      title: 'Come trovare ed eliminare foto duplicate e simili su Android',
      metaDescription:
        'Google Foto non ha un rilevatore di duplicati. Come trovare su Android copie esatte, doppi di WhatsApp, raffiche e scatti sfocati, ed eliminarli in blocco.',
      subtitle: 'Files by Google, Google Foto, gallerie dei produttori e una scansione di somiglianza visiva a confronto',
      intro: [
        'Risposta breve: Android non ha un rilevatore di foto duplicate integrato. Files by Google trova le copie esatte (lo stesso file salvato due volte), gli strumenti di pulizia di Google Foto agiscono sul tuo spazio cloud e non sul telefono, e nessuno dei due raggruppa i dieci scatti quasi identici di uno stesso momento che occupano la maggior parte dello spazio. Per quelli serve una scansione di somiglianza visiva, che può girare sul telefono senza caricare nulla.',
        'Questa guida spiega da dove nascono i duplicati su Android, che cosa rileva davvero ciascuno strumento gratuito, come funzionano il rilevamento della somiglianza e della sfocatura, e come eliminare in sicurezza tenendo conto delle diverse regole del cestino di Google Foto, delle gallerie dei produttori e dei gestori di file.',
      ],
      keyTakeaways: [
        'Files by Google > Pulisci > File duplicati trova solo copie identiche byte per byte; una foto risalvata da WhatsApp o Instagram viene ricodificata e non è più identica.',
        'Google Foto evita di caricare i duplicati esatti ma non li elimina mai dal telefono, e i suggerimenti di Gestisci spazio di archiviazione puliscono il tuo account Google, non il dispositivo.',
        'Gli scatti dello stesso momento (ripetizioni, raffiche, foto di gruppo fatte tre volte) di solito pesano dieci volte più dei duplicati esatti.',
        'Una scansione di somiglianza visiva confronta l\'aspetto delle foto, quindi raggruppa le copie ritagliate, filtrate e compresse insieme all\'originale.',
        'Le foto sfocate possono essere rilevate sul telefono misurando la nitidezza dei bordi; il risultato è un suggerimento da verificare, non un verdetto.',
        'Le foto eliminate tramite la finestra di dialogo di sistema di Android vengono rimosse dal telefono; una copia salvata in Google Foto resta nel cloud.',
      ],
      dataTable: {
        caption: 'Che cosa può trovare ogni strumento su Android',
        columns: ['Strumento', 'Duplicati esatti', 'Scatti simili', 'Foto sfocate', 'Screenshot', 'Funziona solo sul telefono'],
        rows: [
          ['Files by Google', 'Sì', 'No', 'Suggerimenti', 'Screenshot vecchi', 'Sì'],
          ['Google Foto (Gestisci spazio di archiviazione)', 'No (evita di caricare le copie)', 'No', 'Sì, nel cloud', 'Sì, nel cloud', 'No, richiede il backup'],
          ['Riquadri della galleria del produttore', 'A volte', 'Raramente', 'Raramente', 'A volte', 'Sì'],
          ['Disk Mop per Android', 'Sì', 'Sì', 'Sì', 'Sì', 'Sì'],
        ],
      },
      howTo: {
        name: 'Eliminare foto duplicate e simili su Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Rimuovere le copie esatte con Files by Google',
            text: 'Apri Files by Google, tocca Pulisci e cerca la scheda File duplicati. Elenca i file identici byte per byte; seleziona le copie ed eliminale. Così si catturano le foto salvate due volte dalla stessa chat.',
          },
          {
            name: 'Controllare che cosa ha salvato Google Foto',
            text: 'In Google Foto, tocca la tua immagine del profilo > Impostazioni di Google Foto > Backup. Se il backup è attivo, il cloud conserva una copia di tutto ciò che elimini in locale, e Libera spazio rimuove le copie locali delle foto già salvate. Questo libera spazio ma non trova i duplicati.',
          },
          {
            name: 'Cercare scatti simili e sfocati',
            text: 'Esegui una scansione visiva. Disk Mop per Android raggruppa le foto che si somigliano, segnala i fotogrammi sfocati e gli screenshot, ed elenca le foto più vecchie di sei mesi e i video sopra i 100 MB, tutto sul telefono.',
          },
          {
            name: 'Confrontare prima di eliminare',
            text: 'Tieni premuta una foto per vederla a schermo intero, poi scegli che cosa eliminare. In ogni gruppo di foto simili, Seleziona tutto conserva una copia, così un intero momento non viene mai cancellato per errore.',
          },
          {
            name: 'Confermare la finestra di sistema e controllare il cestino',
            text: 'Android mostra la propria conferma prima di rimuovere i file. Se invece hai eliminato dentro Google Foto, gli elementi restano fino a 60 giorni nel suo Cestino; svuotalo per recuperare subito lo spazio.',
          },
        ],
      },
      sections: [
        {
          title: 'Perché i duplicati si accumulano su Android',
          content: [
            'La fonte classica è la messaggistica. WhatsApp salva nella galleria ogni foto ricevuta, quindi un\'immagine condivisa in due gruppi arriva due volte, e una foto che invii e poi ricevi indietro esiste tre volte. Instagram, Telegram e Snapchat aggiungono le proprie copie con «Salva nella galleria», ciascuna ricodificata e quindi non più identica byte per byte all\'originale, che è esattamente ciò che un rilevatore di duplicati basato sui file non può vedere.',
            'La seconda fonte è la fotocamera stessa. Ripetizioni, raffiche e l\'abitudine di scattare una foto di gruppo tre volte per sicurezza producono gruppi di immagini quasi identiche che nessuno torna a sfoltire. In una raccolta di qualche migliaio di foto è comune che un quarto appartenga a uno di questi gruppi. Non sono duplicati secondo alcuna definizione di file, ma sono loro a occupare lo spazio.',
            'Infine ci sono screenshot e registrazioni dello schermo, che molti non eliminano mai, e i fotogrammi sfocati dovuti a un soggetto in movimento o a una mano tremante. Nemmeno questi vengono catturati da un rilevatore di duplicati, ed è per questo che uno strumento che confronta solo il contenuto dei file lascia al suo posto la maggior parte del disordine.',
          ],
        },
        {
          title: 'Duplicati esatti: Files by Google lo fa bene',
          content: [
            'Files by Google, preinstallato sulla maggior parte dei telefoni Android, ha una scheda Pulisci con un riquadro File duplicati. Confronta il contenuto dei file, quindi trova le copie identiche fino all\'ultimo byte a prescindere da nomi o cartelle. Per il caso del doppio salvataggio di WhatsApp funziona, è gratuito ed elimina tramite la normale conferma di Android.',
            'Il suo limite è la definizione. Nel momento in cui una copia è stata ridimensionata, ricompressa o modificata, i byte cambiano e il riquadro non la elenca più. La stessa scheda offre altri riquadri utili, come file di grandi dimensioni, screenshot vecchi e immagini sfocate, ma sono suggerimenti da verificare, e l\'app non può raggruppare foto che semplicemente si somigliano.',
            'Le gallerie dei produttori variano. La Galleria di Samsung e quella di Xiaomi hanno offerto in alcune versioni del loro software riquadri di suggerimenti per immagini simili o duplicate; quando ci sono tendono a essere prudenti e, come Files by Google, si concentrano sulle copie molto vicine. Se la tua galleria ha un riquadro del genere, usalo per primo; non costa nulla.',
          ],
        },
        {
          title: 'Le foto simili e sfocate richiedono una scansione visiva',
          content: [
            'Una scansione visiva trasforma ogni foto in una piccola impronta che ne descrive l\'aspetto, poi confronta le impronte. Due fotogrammi della stessa scena risultano vicini anche se uno è stato ritagliato, filtrato o compresso da un\'app di chat, e il telefono può fare il confronto da solo: nessun caricamento, nessun account. Disk Mop per Android esegue la scansione sul dispositivo e mostra i gruppi risultanti con un\'anteprima di ogni fotogramma.',
            'Il rilevamento della sfocatura misura quanto dettaglio nitido dei bordi contiene una foto. Una foto nitida ha bordi marcati; una mossa o fuori fuoco no. La misurazione è rapida e gira sul telefono, ma anche la foto di una parete uniforme o di una mattina nebbiosa ottiene un punteggio basso, ed è per questo che l\'elenco delle sfocate va trattato come una coda di revisione e non eliminato alla cieca.',
            'La stessa scansione separa gli screenshot in un proprio elenco, segnala le foto più vecchie di sei mesi e i video sopra i 100 MB, e mostra quanto spazio libererebbe ogni gruppo. Vale la pena sapere che cosa fa in confronto Gestisci spazio di archiviazione di Google Foto: i suoi suggerimenti Foto e video di grandi dimensioni, Foto sfocate e Screenshot puliscono lo spazio cloud del tuo account Google, ed eliminare lì rimuove la foto dal cloud e da ogni dispositivo.',
          ],
        },
        {
          title: 'Eliminare in sicurezza: regole del cestino e backup',
          content: [
            'Android non ha un unico cestino. Le foto eliminate dentro Google Foto vanno nel suo Cestino, dove gli elementi salvati restano 60 giorni e quelli non salvati 30, e vengono rimosse anche dal cloud. Le foto eliminate nella galleria di Samsung o di Xiaomi vanno nel cestino di quella galleria, di solito per 30 giorni. Le foto eliminate tramite la finestra di dialogo di sistema di Android, quella usata da Files by Google e Disk Mop, vengono rimosse direttamente dal telefono.',
            'Quest\'ultimo punto conta per i backup. Se il backup di Google Foto è attivo, eliminare un file locale con un\'app di pulizia rimuove solo la copia sul telefono; la copia cloud resta e Google Foto la mostra con un\'icona a forma di nuvola. Se il backup è disattivato, l\'eliminazione è definitiva, quindi controlla lo stato del backup prima di una grande pulizia e lascia prima completare un backup in sospeso.',
            'Disk Mop è progettato attorno a questa cautela. Niente è preselezionato, Seleziona tutto in un gruppo di foto simili conserva una copia, ogni elemento mostra la sua dimensione prima della conferma, e la finestra di dialogo di Android è l\'ultimo passaggio. Le prime tre eliminazioni singole sono gratuite per farti valutare i risultati, e la versione completa è un acquisto una tantum senza abbonamento e senza pubblicità.',
          ],
        },
      ],
      faq: [
        {
          question: 'Google Foto elimina automaticamente i duplicati?',
          answer:
            'No. Con il backup attivo, Google Foto evita di caricare una foto già presente nel tuo account, ma non elimina mai la copia sul telefono. Per il dispositivo stesso ti serve comunque un rilevatore di duplicati.',
        },
        {
          question: 'Eliminare una foto sul telefono la rimuove anche da Google Foto?',
          answer:
            'Dipende da dove elimini. Eliminare dentro Google Foto rimuove la foto dal cloud e da ogni dispositivo allo scadere del periodo nel cestino. Eliminare il file locale con Files by Google o Disk Mop lascia intatta la copia cloud salvata.',
        },
        {
          question: 'Perché Files by Google non trova la maggior parte dei miei duplicati?',
          answer:
            'Confronta il contenuto dei file e trova solo copie identiche byte per byte. Una foto risalvata da WhatsApp, Instagram o un editor viene ricodificata, quindi i byte sono diversi anche se l\'immagine sembra la stessa. Per quelle serve una scansione di somiglianza visiva.',
        },
        {
          question: 'Una scansione di somiglianza delle foto rispetta la privacy?',
          answer:
            'Può farlo. Disk Mop esegue il confronto sul telefono e non ha server né account, quindi le foto non lasciano mai il dispositivo. Controlla i permessi e l\'etichetta sulla privacy di qualsiasi app di pulizia prima di lasciarle leggere la tua raccolta.',
        },
      ],
      verdict: [
        'Parti dagli strumenti gratuiti: Files by Google per le copie identiche e, se li ha, i suggerimenti della tua galleria. Poi esegui una scansione visiva per le ripetizioni, le copie risalvate, i fotogrammi sfocati e i vecchi screenshot che costituiscono la maggior parte dello spazio sprecato, e controlla dove finiscono le tue eliminazioni prima di confermare.',
        'Disk Mop per Android riunisce questi passaggi in un\'unica schermata e ti lascia il controllo: gruppi con anteprima a schermo intero, niente preselezionato, una copia sempre conservata, dimensioni mostrate prima dell\'eliminazione e tutto calcolato sul telefono.',
      ],
      ctaText: 'Scarica Disk Mop per Android da Google Play',
    },
    pt: {
      title: 'Como encontrar e apagar fotos duplicadas e parecidas no Android',
      metaDescription:
        'O Google Fotos não tem localizador de duplicatas. Como achar no Android cópias exatas, duplicatas do WhatsApp, sequências e fotos borradas, e apagar em lote.',
      subtitle: 'Files by Google, Google Fotos, galerias dos fabricantes e uma varredura de semelhança visual comparados',
      intro: [
        'Resposta curta: o Android não tem um localizador de fotos duplicadas embutido. O Files by Google encontra cópias exatas (o mesmo arquivo salvo duas vezes), as ferramentas de limpeza do Google Fotos agem no seu armazenamento na nuvem e não no celular, e nenhum dos dois agrupa as dez fotos quase idênticas de um mesmo momento, que são as que mais ocupam espaço. Para essas é preciso uma varredura de semelhança visual, que pode rodar no celular sem enviar nada.',
        'Este guia explica de onde vêm as duplicatas no Android, o que cada ferramenta gratuita realmente detecta, como funcionam a detecção de semelhança e de desfoque, e como apagar com segurança levando em conta as regras de lixeira diferentes do Google Fotos, das galerias dos fabricantes e dos gerenciadores de arquivos.',
      ],
      keyTakeaways: [
        'Files by Google > Limpar > Arquivos duplicados encontra apenas cópias idênticas byte a byte; uma foto salva de novo a partir do WhatsApp ou do Instagram é recodificada e deixa de ser idêntica.',
        'O Google Fotos pula o envio de duplicatas exatas, mas nunca as apaga do celular, e as sugestões de Gerenciar armazenamento limpam a sua conta do Google, não o aparelho.',
        'Fotos do mesmo momento (repetições, sequências, fotos de grupo tiradas três vezes) costumam ocupar dez vezes mais espaço que as duplicatas exatas.',
        'Uma varredura de semelhança visual compara a aparência das fotos, por isso agrupa cópias cortadas, com filtro e comprimidas junto com o original.',
        'Fotos borradas podem ser detectadas no celular medindo a nitidez das bordas; o resultado é uma sugestão para revisar, não um veredito.',
        'Fotos apagadas pela caixa de diálogo do sistema Android são removidas do celular; uma cópia com backup no Google Fotos continua na nuvem.',
      ],
      dataTable: {
        caption: 'O que cada ferramenta consegue encontrar no Android',
        columns: ['Ferramenta', 'Duplicatas exatas', 'Fotos parecidas', 'Fotos borradas', 'Capturas de tela', 'Funciona só no celular'],
        rows: [
          ['Files by Google', 'Sim', 'Não', 'Sugestões', 'Capturas antigas', 'Sim'],
          ['Google Fotos (Gerenciar armazenamento)', 'Não (pula o envio das cópias)', 'Não', 'Sim, na nuvem', 'Sim, na nuvem', 'Não, precisa de backup'],
          ['Cartões da galeria do fabricante', 'Às vezes', 'Raramente', 'Raramente', 'Às vezes', 'Sim'],
          ['Disk Mop para Android', 'Sim', 'Sim', 'Sim', 'Sim', 'Sim'],
        ],
      },
      howTo: {
        name: 'Apagar fotos duplicadas e parecidas no Android',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Remova as cópias exatas com o Files by Google',
            text: 'Abra o Files by Google, toque em Limpar e procure o cartão Arquivos duplicados. Ele lista arquivos idênticos byte a byte; selecione as cópias e apague. Isso pega as fotos salvas duas vezes a partir da mesma conversa.',
          },
          {
            name: 'Confira o que o Google Fotos já salvou no backup',
            text: 'No Google Fotos, toque na sua foto de perfil > Configurações do Google Fotos > Backup. Se o backup estiver ativado, a nuvem guarda uma cópia de tudo o que você apagar localmente, e Liberar espaço remove as cópias locais das fotos que já têm backup. Isso libera espaço, mas não encontra duplicatas.',
          },
          {
            name: 'Faça uma varredura de fotos parecidas e borradas',
            text: 'Rode uma varredura visual. O Disk Mop para Android agrupa fotos parecidas, sinaliza quadros borrados e capturas de tela, e lista fotos com mais de seis meses e vídeos acima de 100 MB, tudo no celular.',
          },
          {
            name: 'Compare antes de apagar',
            text: 'Mantenha qualquer foto pressionada para vê-la em tela cheia e depois escolha o que sai. Em cada grupo de fotos parecidas, Selecionar tudo mantém uma cópia, para que um momento inteiro nunca seja apagado por acidente.',
          },
          {
            name: 'Confirme a caixa de diálogo do sistema e verifique a lixeira',
            text: 'O Android mostra a própria confirmação antes de remover os arquivos. Se em vez disso você apagou dentro do Google Fotos, os itens ficam até 60 dias na Lixeira dele; esvazie-a para recuperar o espaço agora.',
          },
        ],
      },
      sections: [
        {
          title: 'Por que as duplicatas se acumulam no Android',
          content: [
            'A fonte clássica são os aplicativos de mensagens. O WhatsApp salva na galeria cada foto recebida, então uma imagem compartilhada em dois grupos chega duas vezes, e uma foto que você envia e depois recebe de volta existe três vezes. Instagram, Telegram e Snapchat acrescentam as próprias cópias de «Salvar na galeria», cada uma recodificada de modo que já não é idêntica byte a byte ao original, exatamente o que um localizador de duplicatas baseado em arquivos não consegue enxergar.',
            'A segunda fonte é a própria câmera. Repetições, sequências e o hábito de tirar a foto de grupo três vezes por garantia produzem conjuntos de imagens quase idênticas que ninguém volta para podar. Numa biblioteca de alguns milhares de fotos é comum que um quarto delas pertença a um conjunto desses. Não são duplicatas por nenhuma definição de arquivo, mas são elas que ocupam o espaço.',
            'Por fim há as capturas e gravações de tela, que muita gente nunca apaga, e os quadros borrados por um assunto em movimento ou uma mão trêmula. Nada disso é detectado por um localizador de duplicatas, e é por isso que uma ferramenta que só compara o conteúdo dos arquivos deixa a maior parte da bagunça no lugar.',
          ],
        },
        {
          title: 'Duplicatas exatas: o Files by Google faz isso bem',
          content: [
            'O Files by Google, pré-instalado na maioria dos celulares Android, tem uma aba Limpar com um cartão Arquivos duplicados. Ele compara o conteúdo dos arquivos, então encontra cópias idênticas até o último byte, independentemente de nomes ou pastas. Para o caso do salvamento duplo do WhatsApp funciona, é gratuito e apaga pela confirmação normal do Android.',
            'O limite é a definição. No momento em que uma cópia foi redimensionada, recomprimida ou editada, os bytes mudam e o cartão deixa de listá-la. A mesma aba oferece outros cartões úteis, como arquivos grandes, capturas de tela antigas e imagens borradas, mas são sugestões para revisar, e o app não consegue agrupar fotos que apenas se parecem.',
            'As galerias dos fabricantes variam. A Galeria da Samsung e a da Xiaomi já ofereceram cartões de sugestão para imagens parecidas ou duplicadas em algumas versões do software; quando existem, costumam ser conservadores e, como o Files by Google, focam em cópias muito próximas. Se a sua galeria tiver um cartão desses, use-o primeiro; não custa nada.',
          ],
        },
        {
          title: 'Fotos parecidas e borradas precisam de uma varredura visual',
          content: [
            'Uma varredura visual transforma cada foto numa pequena impressão digital que descreve a aparência dela e depois compara as impressões. Dois quadros da mesma cena recebem pontuação próxima mesmo que um tenha sido cortado, filtrado ou comprimido por um app de mensagens, e o celular pode fazer a comparação sozinho: sem envio, sem conta. O Disk Mop para Android roda a varredura no aparelho e mostra os grupos resultantes com uma prévia de cada quadro.',
            'A detecção de desfoque mede quanto detalhe nítido de bordas uma foto contém. Uma foto nítida tem bordas fortes; uma tremida ou fora de foco não. A medição é rápida e roda no celular, mas a foto de uma parede lisa ou de uma manhã de neblina também pontua baixo, e por isso a lista de borradas deve ser tratada como uma fila de revisão, não apagada às cegas.',
            'A mesma varredura separa as capturas de tela numa lista própria, sinaliza fotos com mais de seis meses e vídeos acima de 100 MB, e mostra quanto espaço cada grupo liberaria. Vale saber o que Gerenciar armazenamento do Google Fotos faz em comparação: as sugestões Fotos e vídeos grandes, Fotos borradas e Capturas de tela limpam o armazenamento na nuvem da sua conta do Google, e apagar ali remove a foto da nuvem e de todos os aparelhos.',
          ],
        },
        {
          title: 'Apagar com segurança: regras de lixeira e backups',
          content: [
            'O Android não tem uma lixeira única. Fotos apagadas dentro do Google Fotos vão para a Lixeira dele, onde itens com backup ficam 60 dias e itens sem backup ficam 30, e também são removidas da nuvem. Fotos apagadas na galeria da Samsung ou da Xiaomi vão para a lixeira própria dessa galeria, normalmente por 30 dias. Fotos apagadas pela caixa de diálogo do sistema Android, que é o que o Files by Google e o Disk Mop usam, são removidas do celular diretamente.',
            'Esse último ponto importa para os backups. Se o backup do Google Fotos estiver ativado, apagar um arquivo local com um limpador remove só a cópia do celular; a cópia na nuvem fica, e o Google Fotos a mostra com um ícone de nuvem. Se o backup estiver desativado, a exclusão é definitiva, então confira o status do backup antes de uma limpeza grande e deixe um backup pendente terminar primeiro.',
            'O Disk Mop foi desenhado em torno desse cuidado. Nada vem pré-selecionado, Selecionar tudo num grupo de fotos parecidas mantém uma cópia, cada item mostra o tamanho antes de você confirmar, e a caixa de diálogo do próprio Android é o último passo. As três primeiras exclusões avulsas são gratuitas para você avaliar os resultados, e a versão completa é uma compra única, sem assinatura e sem anúncios.',
          ],
        },
      ],
      faq: [
        {
          question: 'O Google Fotos apaga duplicatas automaticamente?',
          answer:
            'Não. Com o backup ativado, o Google Fotos pula o envio de uma foto que já existe na sua conta, mas nunca apaga a cópia do celular. Você ainda precisa de um localizador de duplicatas para o próprio aparelho.',
        },
        {
          question: 'Apagar uma foto no celular a remove do Google Fotos?',
          answer:
            'Depende de onde você apaga. Apagar dentro do Google Fotos remove a foto da nuvem e de todos os aparelhos quando o prazo da lixeira termina. Apagar o arquivo local com o Files by Google ou o Disk Mop deixa a cópia com backup na nuvem no lugar.',
        },
        {
          question: 'Por que o Files by Google deixa passar a maioria das minhas duplicatas?',
          answer:
            'Ele compara o conteúdo dos arquivos e encontra apenas cópias idênticas byte a byte. Uma foto salva de novo a partir do WhatsApp, do Instagram ou de um editor é recodificada, então os bytes mudam mesmo que a imagem pareça igual. Essas precisam de uma varredura de semelhança visual.',
        },
        {
          question: 'Uma varredura de semelhança de fotos é privada?',
          answer:
            'Pode ser. O Disk Mop faz a comparação no celular e não tem servidor nem conta, então as fotos nunca saem do aparelho. Verifique as permissões e o rótulo de privacidade de qualquer limpador antes de deixá-lo ler a sua biblioteca.',
        },
      ],
      verdict: [
        'Comece pelas ferramentas gratuitas: o Files by Google para cópias idênticas e as sugestões da sua galeria, se ela tiver. Depois rode uma varredura visual para as repetições, cópias salvas de novo, quadros borrados e capturas antigas que formam a maior parte do espaço desperdiçado, e confira para onde vão as suas exclusões antes de confirmar.',
        'O Disk Mop para Android reúne esses passos numa única tela e deixa o controle com você: grupos com prévia em tela cheia, nada pré-selecionado, uma cópia sempre mantida, tamanhos mostrados antes de apagar e tudo calculado no celular.',
      ],
      ctaText: 'Baixe o Disk Mop para Android no Google Play',
    },
    ja: {
      title: 'Android で重複写真と似た写真を見つけて削除する方法',
      metaDescription:
        'Google フォトに重複検出機能はありません。Android で完全な複製、WhatsApp の再保存、連写、ピンぼけ写真を見つけ、いちばん良い 1 枚を残してまとめて削除する方法を解説します。',
      subtitle: 'Files by Google、Google フォト、メーカー製ギャラリー、画像の類似度スキャンを比較',
      intro: [
        '短い答え: Android には重複写真を探す機能が標準では備わっていません。Files by Google は完全な複製（同じファイルが 2 回保存されたもの）を見つけ、Google フォトの整理ツールはスマートフォンではなくクラウド保存容量を対象にし、どちらも容量の大半を占める「同じ瞬間のほぼ同じ写真 10 枚」をまとめてはくれません。それには画像の類似度スキャンが必要で、これは何もアップロードせずにスマートフォン上で実行できます。',
        'この記事では、Android で重複が生まれる原因、各無料ツールが実際に検出できるもの、類似度とピンぼけ検出の仕組み、そして Google フォト、メーカー製ギャラリー、ファイルマネージャーでゴミ箱のルールが違うことを踏まえた安全な削除方法を説明します。',
      ],
      keyTakeaways: [
        'Files by Google > クリーン > 重複ファイルは、バイト単位で同一のコピーだけを見つけます。WhatsApp や Instagram から再保存した写真は再エンコードされるため同一ではなくなります。',
        'Google フォトは完全な複製のアップロードを省略しますが、端末からは決して削除しません。「保存容量を管理」の提案も端末ではなく Google アカウントを整理します。',
        '同じ瞬間の写真（撮り直し、連写、念のため 3 回撮った集合写真）は、完全な複製の 10 倍ほどの容量を占めるのが普通です。',
        '画像の類似度スキャンは写真の見た目を比較するため、トリミング、フィルター、圧縮されたコピーも元の写真と同じグループにまとめます。',
        'ピンぼけ写真は輪郭の鮮明さを測ることで端末上で検出できますが、その結果は確認用の提案であって判定ではありません。',
        'Android のシステムダイアログで削除した写真は端末から消えます。Google フォトにバックアップ済みのコピーはクラウドに残ります。',
      ],
      dataTable: {
        caption: 'Android で各ツールが見つけられるもの',
        columns: ['ツール', '完全な複製', '似た写真', 'ピンぼけ写真', 'スクリーンショット', '端末上だけで動作'],
        rows: [
          ['Files by Google', 'はい', 'いいえ', '提案のみ', '古いスクリーンショット', 'はい'],
          ['Google フォト（保存容量を管理）', 'いいえ（コピーのアップロードを省略）', 'いいえ', 'はい、クラウド上で', 'はい、クラウド上で', 'いいえ、バックアップが必要'],
          ['メーカー製ギャラリーのカード', '場合による', 'まれ', 'まれ', '場合による', 'はい'],
          ['Android 版 Disk Mop', 'はい', 'はい', 'はい', 'はい', 'はい'],
        ],
      },
      howTo: {
        name: 'Android で重複写真と似た写真を削除する',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Files by Google で完全な複製を削除する',
            text: 'Files by Google を開き、「クリーン」をタップして「重複ファイル」のカードを探します。バイト単位で同一のファイルが一覧表示されるので、コピーを選んで削除します。同じチャットから 2 回保存した写真はこれで見つかります。',
          },
          {
            name: 'Google フォトが何をバックアップしたか確認する',
            text: 'Google フォトでプロフィール写真 > フォトの設定 > バックアップをタップします。バックアップが有効なら、端末で削除したものはすべてクラウドにコピーが残り、「空き容量を増やす」でバックアップ済み写真の端末内コピーを削除できます。容量は空きますが、重複は見つかりません。',
          },
          {
            name: '似た写真とピンぼけ写真をスキャンする',
            text: '画像スキャンを実行します。Android 版 Disk Mop は見た目の似た写真をグループ化し、ピンぼけした写真とスクリーンショットに印を付け、6 か月より古い写真と 100 MB を超える動画を一覧にします。すべて端末上で処理されます。',
          },
          {
            name: '削除する前に見比べる',
            text: '写真を長押しすると全画面で確認でき、そのうえで消すものを選べます。似た写真の各グループでは「すべて選択」しても 1 枚は残るため、ある瞬間の写真がうっかり全部消えることはありません。',
          },
          {
            name: 'システムダイアログで確認し、ゴミ箱をチェックする',
            text: 'ファイルが削除される前に Android 自身の確認画面が表示されます。代わりに Google フォトの中で削除した場合、項目は最大 60 日間ゴミ箱に残ります。今すぐ容量を取り戻すにはゴミ箱を空にしてください。',
          },
        ],
      },
      sections: [
        {
          title: 'Android で重複がたまる理由',
          content: [
            '定番の原因はメッセージアプリです。WhatsApp は受信した写真をすべてギャラリーに保存するため、2 つのグループで共有された 1 枚の写真は 2 回届き、自分が送って後で送り返された写真は 3 つ存在することになります。Instagram、Telegram、Snapchat も「ギャラリーに保存」で独自のコピーを加えますが、それぞれ再エンコードされるため元の写真とバイト単位では一致しません。ファイルベースの重複検出がまさに見落とすのはこの部分です。',
            '2 つ目の原因はカメラそのものです。撮り直し、連写、念のため集合写真を 3 回撮る習慣は、誰も後から整理しないほぼ同一の写真の塊を生みます。数千枚の写真ライブラリでは、その 4 分の 1 がこうした塊に属していることも珍しくありません。どのファイル定義でも重複ではありませんが、容量を食っているのはこれらです。',
            '最後に、多くの人が一度も削除しないスクリーンショットと画面録画、そして動く被写体や手ぶれによるピンぼけ写真があります。これらも重複検出には引っかからないため、ファイルの中身だけを比較するツールでは散らかりの大半がそのまま残ります。',
          ],
        },
        {
          title: '完全な複製: Files by Google が得意な領域',
          content: [
            'ほとんどの Android スマートフォンにプリインストールされている Files by Google には、「クリーン」タブに「重複ファイル」のカードがあります。ファイルの中身を比較するため、名前やフォルダーに関係なく最後のバイトまで同一のコピーを見つけます。WhatsApp の二重保存のケースには有効で、無料で、削除は Android の通常の確認を経て行われます。',
            '限界は定義そのものにあります。コピーがリサイズ、再圧縮、編集された瞬間にバイトが変わり、カードには表示されなくなります。同じタブには「大きなファイル」「古いスクリーンショット」「ぼやけた画像」といった便利なカードもありますが、これらは確認用の提案であり、単に似ているだけの写真をアプリがグループ化することはできません。',
            'メーカー製ギャラリーはさまざまです。Samsung のギャラリーと Xiaomi のギャラリーは、ソフトウェアのバージョンによっては似た画像や重複画像の提案カードを提供してきました。存在する場合は控えめな傾向で、Files by Google と同じくごく近いコピーに絞られています。お使いのギャラリーにそのカードがあれば、まずそれを使ってください。費用はかかりません。',
          ],
        },
        {
          title: '似た写真とピンぼけ写真には画像スキャンが必要',
          content: [
            '画像スキャンは各写真を見た目を表す小さな指紋に変換し、その指紋どうしを比較します。同じ場面の 2 枚は、一方がチャットアプリでトリミング、フィルター、圧縮されていても近いと判定され、この比較はスマートフォン自身が行えます。アップロードもアカウントも不要です。Android 版 Disk Mop はスキャンを端末上で実行し、できたグループを各写真のプレビュー付きで表示します。',
            'ピンぼけ検出は、写真に鮮明な輪郭のディテールがどれだけ含まれるかを測って動作します。くっきりした写真は輪郭が強く、手ぶれやピント外れの写真はそうではありません。測定は高速で端末上で動きますが、のっぺりした壁や霧の朝の写真も低いスコアになるため、ピンぼけリストは確認待ちの列として扱い、やみくもに削除すべきではありません。',
            '同じスキャンはスクリーンショットを専用のリストに分け、6 か月より古い写真と 100 MB を超える動画に印を付け、各グループでどれだけ容量が空くかを示します。比較のために Google フォトの「保存容量を管理」が何をするかも知っておく価値があります。「サイズの大きい写真と動画」「ぼやけた写真」「スクリーンショット」の提案は Google アカウントのクラウド保存容量を整理するもので、そこで削除すると写真はクラウドとすべての端末から消えます。',
          ],
        },
        {
          title: '安全に削除する: ゴミ箱のルールとバックアップ',
          content: [
            'Android のゴミ箱は 1 つではありません。Google フォト内で削除した写真はそのゴミ箱に入り、バックアップ済みの項目は 60 日、未バックアップの項目は 30 日残ったのち、クラウドからも削除されます。Samsung や Xiaomi のギャラリーで削除した写真はそのギャラリー独自のごみ箱に入り、通常 30 日間保持されます。Files by Google と Disk Mop が使う Android のシステムダイアログで削除した写真は、端末から直接削除されます。',
            'この最後の点はバックアップにとって重要です。Google フォトのバックアップが有効なら、クリーナーで端末内のファイルを削除しても消えるのは端末のコピーだけで、クラウドのコピーは残り、Google フォトではクラウドのアイコン付きで表示されます。バックアップが無効なら削除は取り消せないので、大がかりな整理の前にバックアップの状態を確認し、進行中のバックアップは先に完了させてください。',
            'Disk Mop はこの慎重さを軸に設計されています。何も事前に選択されず、似た写真のグループで「すべて選択」しても 1 枚は残り、すべての項目が確定前にサイズを表示し、最後のステップは Android 自身のダイアログです。最初の 3 回の個別削除は無料なので結果を判断でき、フルバージョンはサブスクリプションも広告もない買い切りです。',
          ],
        },
      ],
      faq: [
        {
          question: 'Google フォトは重複を自動で削除しますか?',
          answer:
            'いいえ。バックアップが有効な場合、Google フォトはアカウントに既にある写真のアップロードを省略しますが、端末のコピーを削除することはありません。端末そのものには、やはり重複検出ツールが必要です。',
        },
        {
          question: 'スマートフォンで写真を削除すると Google フォトからも消えますか?',
          answer:
            'どこで削除するかによります。Google フォト内で削除すると、ゴミ箱の保持期間が過ぎた後にクラウドとすべての端末から消えます。Files by Google や Disk Mop で端末内のファイルを削除しても、バックアップ済みのクラウドのコピーは残ります。',
        },
        {
          question: 'Files by Google が重複のほとんどを見逃すのはなぜですか?',
          answer:
            'ファイルの中身を比較し、バイト単位で同一のコピーだけを見つけるためです。WhatsApp、Instagram、編集アプリから再保存された写真は再エンコードされるため、見た目は同じでもバイトは異なります。これらには画像の類似度スキャンが必要です。',
        },
        {
          question: '写真の類似度スキャンはプライバシーの面で安全ですか?',
          answer:
            '安全にできます。Disk Mop は比較を端末上で行い、サーバーもアカウントも持たないため、写真が端末の外に出ることはありません。どのクリーナーでも、ライブラリを読ませる前に権限とプライバシー表示を確認してください。',
        },
      ],
      verdict: [
        'まず無料ツールから始めましょう。同一コピーには Files by Google、ギャラリーに提案機能があればそれも使います。次に、無駄な容量の大半を占める撮り直し、再保存されたコピー、ピンぼけ写真、古いスクリーンショットのために画像スキャンを実行し、確定する前に削除したものがどこへ行くかを確認してください。',
        'Android 版 Disk Mop はこれらのステップを 1 つの画面にまとめ、主導権をあなたに残します。全画面プレビュー付きのグループ、事前選択なし、常に 1 枚は残す、削除前にサイズを表示、そしてすべて端末上で計算します。',
      ],
      ctaText: 'Google Play で Android 版 Disk Mop を入手',
    },
  },
};
