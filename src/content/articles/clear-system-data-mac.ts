import type { Article } from '../types';

export const clearSystemDataMac: Article = {
  slug: 'clear-system-data-mac',
  type: 'guide',
  category: 'Mac Tips',
  date: '2026-07-03',
  readingTime: 8,
  content: {
    tr: {
      title: 'Mac Sistem Verisi Temizleme: 6 Güvenli Yöntem',
      metaDescription:
        'Mac\'te sistem verisi çok mu yer kaplıyor? Mac sistem verisi temizleme için güvenli, geri alınabilir 6 adımı öğrenin ve depolama alanı kazanın. Hemen başlayın.',
      subtitle: 'Apple\'ın En Belirsiz Depolama Kategorisini Güvenle Küçültme Rehberi',
      intro: [
        'Mac\'te Sistem Verisi; önbellekler, günlük dosyaları, sanal bellek takas dosyaları, yerel Time Machine anlık görüntüleri ve macOS\'in Uygulamalar ya da Belgeler gibi kategorilere yerleştiremediği diğer her şeyi kapsayan toplama kategorisidir. Bu alanı güvenle temizlemek için önbellekleri ve eski indirmeleri silmeniz, eski yedekleri kaldırmanız, çöp sepetini boşaltmanız ve yinelenen dosyaları temizlemeniz yeterlidir — riskli sistem klasörü silme işlemlerine gerek yoktur.',
        'Sistem Verisi kategorisi birçok Mac\'te onlarca gigabayta ulaşabilir ve Apple bu alanın içinde tam olarak ne olduğunu göstermez. Forumlarda sık rastlanan tavsiye, Library klasörünün içeriğini topluca silmektir; ancak bu yaklaşım uygulamaların bozulmasına ve veri kaybına yol açabilir. Bu rehberde bunun yerine tamamen güvenli ve geri alınabilir altı yöntem bulacaksınız.',
        'Önce macOS\'in yerleşik araçlarıyla yapılabilecek manuel adımları anlatacağız, ardından tüm bu işlemleri tek uygulamada toplayan Disk Mop\'un macOS sürümünün süreci nasıl hızlandırdığını göstereceğiz. Adımları sırayla uygulayarak diskinizde gözle görülür bir alan açabilirsiniz.',
      ],
      sections: [
        {
          title: 'Mac\'te Sistem Verisi Nelerden Oluşur?',
          content: [
            'Sistem Verisi, eski macOS sürümlerinde Diğer olarak adlandırılan kategorinin devamıdır. İçinde uygulama önbellekleri ve geçici dosyalar, sistem ve uygulama günlükleri, sanal bellek takas dosyaları, yerel Time Machine anlık görüntüleri, uygulama destek dosyaları, eklentiler, disk imajları ve arşivler ile Finder\'ın sakladığı eski iPhone ve iPad yedekleri gibi çok farklı öğeler bulunur.',
            'Kategorinin bu kadar belirsiz olmasının nedeni basittir: macOS, Uygulamalar, Fotoğraflar veya Belgeler gibi net kategorilere sığmayan her şeyi buraya toplar. Bu yüzden boyutu gün içinde bile dalgalanabilir; sistem takas dosyası büyüdükçe veya Time Machine yeni bir anlık görüntü aldıkça rakam artar. Birçok kullanıcının bu kategoriyi onlarca gigabayt boyutunda görmesi olağandır.',
            'Önemli bir not: Sistem Verisi\'nin tamamı çöp değildir. Takas dosyalarını macOS kendisi yönetir ve yerel anlık görüntüleri disk dolmaya başladığında otomatik olarak inceltir. Hedefimiz bu kategorinin tamamını sıfırlamak değil, güvenle silinebilecek bayat kısmı — eski önbellekler, günlükler, kullanılmayan yedekler ve unutulmuş büyük dosyalar — ortadan kaldırmaktır.',
          ],
        },
        {
          title: 'Sistem Ayarları\'ndan Depolama Dağılımını Kontrol Edin',
          content: [
            'İlk adım, neyle karşı karşıya olduğunuzu görmektir. macOS Ventura ve sonrasında Apple menüsünden Sistem Ayarları\'nı açın, Genel bölümüne girin ve depolama ekranını seçin. Renkli çubuğun hesaplanması birkaç dakika sürebilir; tamamlandığında her rengin üzerine gelerek hangi kategorinin ne kadar yer kapladığını görebilirsiniz. macOS Monterey ve öncesinde aynı ekrana Apple menüsünden Bu Mac Hakkında ve ardından Depolama sekmesiyle ulaşılır.',
            'Bu ekranda Apple\'ın yerleşik önerileri de yer alır: iCloud\'da saklama, izlenen film ve dizileri otomatik kaldıran depolama alanını optimize etme seçeneği ve çöp sepetini 30 gün sonra otomatik boşaltma ayarı. Ayrıca kategori listesinden Uygulamalar bölümüne girerek uzun süredir açmadığınız büyük uygulamaları doğrudan buradan silebilirsiniz.',
            'Ekranın en büyük eksiği ise Sistem Verisi satırıdır: bu satıra tıklayıp içeriği göremezsiniz. Apple herhangi bir döküm sunmadığı için kategoriyi küçültmenin yolu, sonraki bölümlerdeki manuel adımlar ya da diskin içeriğini dosya düzeyinde gösteren bir analiz aracı kullanmaktır.',
          ],
        },
        {
          title: 'Önbellekleri, Günlükleri ve Eski İndirmeleri Güvenle Temizleyin',
          content: [
            'En güvenli başlangıç noktası tarayıcı önbellekleridir, çünkü silindiklerinde yeniden oluşurlar. Safari\'de Ayarlar\'ın İleri Düzey bölümünden Geliştirme menüsünü etkinleştirip bu menüden önbellekleri boşaltabilirsiniz. Chrome, Firefox ve Edge\'de ise gizlilik ayarları altındaki tarama verilerini temizleme seçeneği aynı işi görür.',
            'Kullanıcı önbellekleri için Finder\'da Git menüsünden Klasöre Git\'i seçin (Shift-Command-G) ve ~/Library/Caches yazın. Burada tanıdığınız uygulamaların klasörlerini açıp içeriklerini silebilirsiniz; klasörlerin kendisini silmeyin. Asla Library klasörünü topluca silmeyin ve /System altındaki hiçbir şeye dokunmayın — forumlardaki riskli tavsiye tam olarak budur. Günlük dosyaları için aynı yöntemle ~/Library/Logs klasörüne bakabilirsiniz. İşlem sonrası Mac\'inizi yeniden başlatmak, takas dosyalarının da temizlenmesini sağlar.',
            'İndirilenler klasörü de Sistem Verisi kadar sinsi bir alan tüketicisidir. Klasörü boyuta ve tarihe göre sıralayın; işi biten .dmg kurulum dosyaları ve eski arşivler genellikle güvenle silinebilir. Disk Mop bu üç işi tek noktada toplar: Önbellek Temizleyici sistem ve uygulama önbelleklerini, Tarayıcı Önbelleği Temizleyici Chrome, Firefox, Edge ve Safari verilerini, İndirilenler Temizleyicisi ise eski dosyaları kategorilere ayırarak tek tıkla temizler.',
            'Bir de gizli kalem var: yerel Time Machine anlık görüntüleri. Terminal\'de tmutil listlocalsnapshots / komutuyla mevcut anlık görüntüleri listeleyebilirsiniz. macOS disk dolduğunda bunları kendiliğinden siler; acil alan gerekiyorsa tmutil deletelocalsnapshots komutunu anlık görüntünün tarihiyle birlikte kullanabilirsiniz.',
          ],
        },
        {
          title: 'Çöp Sepetini Boşaltın ve Yinelenen Dosyaları Kaldırın',
          content: [
            'Çöp sepetindeki dosyalar silinmiş sayılmaz; diskte yer kaplamaya devam eder. Dock\'taki çöp sepeti simgesine Control ile tıklayıp boşaltabilir ya da Finder ayarlarının İleri Düzey bölümünden öğelerin 30 gün sonra otomatik silinmesini açabilirsiniz. Bu tek ayar bile depolama alanının sessizce dolmasını önler.',
            'Eski iPhone ve iPad yedekleri de Sistem Verisi\'nin görünmez kalemlerindendir; her biri gigabaytlarca yer kaplayabilir. Cihazınızı Mac\'e bağlayın, Finder kenar çubuğundan cihazı seçin ve Genel sekmesindeki yedekleri yönetme düğmesiyle artık kullanmadığınız yedekleri silin. Yedekler ~/Library içinde derinlerde saklandığından çoğu kullanıcı varlıklarından haberdar bile değildir.',
            'Yinelenen dosyalar ise en sık gözden kaçan alan israfıdır: iki kez dışa aktarılmış fotoğraflar, tekrar tekrar indirilmiş belgeler, kopyalanmış klasörler. Bunları elle bulmak saatler alabilir. Disk Mop\'un Yinelenen Dosya Dedektörü, dosyaları SHA-256 karma değeriyle karşılaştırır; yani yalnızca bayt bayt özdeş kopyalar işaretlenir ve bir kopyayı silmek tamamen güvenlidir.',
          ],
        },
        {
          title: 'Diskinizi Dolduranları Treemap ile Görün',
          content: [
            'Sistem Verisi ile mücadelenin temel sorunu görünmezliktir: Apple size toplam boyutu söyler ama içeriği göstermez. Treemap adı verilen görselleştirme bu sorunu kökten çözer; diskteki her klasör, kapladığı alanla orantılı bir kutu olarak çizilir ve en büyük alan tüketicileri ilk bakışta ortaya çıkar.',
            'Disk Mop\'un Disk Analizi özelliği sürücünüzü tarayıp bu treemap görünümünü oluşturur. Devasa boyuta ulaşmış bir önbellek klasörünü, unutulmuş bir sanal makine imajını veya yıllardır duran disk imajlarını saniyeler içinde fark edersiniz. Büyük Dosya Bulucu da 500 MB üzerindeki tüm dosyaları tek listede toplar.',
            'Disk Mop, macOS 12 ve sonrasında Apple Silicon ve Intel işlemcili Mac\'lerde yerel olarak çalışır ve Apple tarafından noter onaylıdır. Silme kararı her zaman sizdedir: uygulama yalnızca ne bulduğunu gösterir, siz incelemeden hiçbir şey kaldırılmaz. Hem Windows hem Mac kullanıyorsanız aynı uygulamayı iki platformda da kullanabilirsiniz.',
          ],
        },
        {
          title: 'Sistem Verisinin Yeniden Büyümesini Önleyin',
          content: [
            'Sistem Verisi temizliği tek seferlik bir iş değildir; önbellekler ve günlükler tasarım gereği yeniden oluşur. Ayda bir kez depolama ekranına bakmak ve büyümeyi erkenden fark etmek, kriz anında saatlerce temizlik yapmaktan çok daha kolaydır.',
            'Birkaç basit alışkanlık büyük fark yaratır: Mac\'inizi düzenli olarak yeniden başlatın (takas dosyaları temizlenir), çöp sepetinin otomatik boşaltma ayarını açık tutun, kullanmadığınız uygulamaları tamamen kaldırın ve İndirilenler klasörünü ay sonunda gözden geçirin.',
            'Bu rutini otomatiğe bağlamak isterseniz Disk Mop\'un Zamanlanmış Temizlik özelliği haftalık veya aylık görevler oluşturur; önbellek temizliği, eski indirmelerin silinmesi ve çöp sepetinin boşaltılması sizin yerinize yapılır. Tek tıklık Hızlandır özelliği aynı işlemleri istediğiniz anda çalıştırır, Sistem Sağlığı Puanı ise Mac\'inizin genel durumunu tek bakışta gösterir.',
          ],
        },
      ],
      verdict: [
        'Mac\'te Sistem Verisi korkutucu görünse de aslında yönetilebilir bir kategoridir. Depolama dağılımını kontrol etmek, önbellekleri ve günlükleri güvenle temizlemek, eski indirmeleri ve yedekleri kaldırmak, çöp sepetini boşaltmak, yinelenenleri silmek ve diski bir treemap ile görselleştirmek — bu altı adım, riskli Library silme tavsiyelerine hiç bulaşmadan gigabaytlarca alan kazandırır.',
        'Disk Mop tüm bu adımları tek uygulamada birleştirir: Disk Analizi, Büyük Dosya Bulucu, Yinelenen Dosya Dedektörü, Önbellek Temizleyici ve Zamanlanmış Temizlik macOS üzerinde bir arada çalışır. Uygulamayı ücretsiz indirip deneyebilir, tüm özellikler için 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisansa geçebilirsiniz.',
      ],
      ctaText: 'Disk Mop ile Mac\'inizde yer açın',
    },
    en: {
      title: 'How to Clear System Data Storage on Mac: 6 Safe Ways',
      metaDescription:
        'Is System Data taking up space on your Mac? Learn what it includes and how to clear System Data storage on Mac safely with six reversible steps. Start now.',
      subtitle: 'A Safe, Step-by-Step Guide to Shrinking macOS\'s Most Mysterious Storage Category',
      intro: [
        'System Data on a Mac is the catch-all storage category that holds caches, log files, virtual memory swap files, local Time Machine snapshots and everything else macOS cannot assign to categories like Apps or Documents. To clear System Data storage on Mac safely, you clean caches and old downloads, remove outdated backups, empty the Trash and delete duplicate files — no risky system-folder deletions required.',
        'On many Macs, System Data grows to tens of gigabytes, and Apple never shows you what is actually inside it. The advice you often find in forums is to bulk-delete the contents of the Library folder, which can break applications and cause data loss. This guide takes the opposite approach: six methods that are safe, reversible and fully under your control.',
        'We will start with the manual steps you can do with macOS\'s built-in tools, then show how the macOS version of Disk Mop bundles the same cleanup into a few clicks. Work through the steps in order and you should see a noticeable amount of space come back.',
      ],
      sections: [
        {
          title: 'What Counts as System Data on a Mac?',
          content: [
            'System Data is the successor to the category older macOS versions called Other. It contains a wide mix of items: application caches and temporary files, system and app logs, virtual memory swap files, local Time Machine snapshots, app support files, plug-ins and extensions, disk images and archives, and the old iPhone and iPad backups that Finder stores on your drive.',
            'The reason the category feels so vague is simple: macOS lumps together everything that does not fit a clean bucket like Apps, Photos or Documents. That is also why the number fluctuates, sometimes within a single day — the swap file grows under memory pressure, and Time Machine quietly takes new local snapshots. Seeing this category reach tens of gigabytes is completely normal.',
            'One important reassurance before you start deleting: not all System Data is junk. macOS manages swap files itself and automatically thins local snapshots when the disk starts filling up. The goal is not to force the category to zero, but to remove the stale part that is safe to delete — old caches, logs, unused backups and forgotten large files.',
          ],
        },
        {
          title: 'Check Your Storage Breakdown in System Settings',
          content: [
            'The first step is seeing what you are dealing with. On macOS Ventura and later, open the Apple menu, choose System Settings, go to General and select the storage screen. The colored bar can take a few minutes to calculate; once it finishes, hover over each segment to see how much space every category uses. On macOS Monterey and earlier, the same view lives under About This Mac in the Apple menu, on the Storage tab.',
            'This screen also surfaces Apple\'s built-in recommendations: storing files in iCloud, an optimize-storage option that removes movies and TV shows you have already watched, and a setting that empties the Trash automatically after 30 days. You can also open the Applications category from the list and delete large apps you have not launched in months directly from there.',
            'The screen has one big limitation, though: the System Data row is not clickable. Apple provides no breakdown of what is inside it, which is exactly why you need either the manual steps in the next sections or a disk analyzer that shows your drive at the file level.',
          ],
        },
        {
          title: 'Clear Caches, Logs and Old Downloads Safely',
          content: [
            'The safest place to start is browser caches, because they rebuild themselves after deletion. In Safari, enable the Develop menu from the Advanced section of Safari\'s settings, then use it to empty caches. In Chrome, Firefox and Edge, the clear-browsing-data option in each browser\'s privacy settings does the same job.',
            'For user-level caches, open Finder, choose Go and then Go to Folder (Shift-Command-G), and enter ~/Library/Caches. Open the folders of apps you recognize and delete their contents — not the folders themselves. Never bulk-delete the Library folder and never touch anything under /System; that is precisely the risky forum advice this guide exists to replace. Log files can be reviewed the same way at ~/Library/Logs. Restart your Mac afterwards, which also clears the swap files that count toward System Data.',
            'The Downloads folder is another quiet space consumer. Sort it by size and date; old .dmg installers and archives you have already used can usually be deleted without a second thought. Disk Mop brings these three chores together: its Cache Cleaner handles system and application caches, the Browser Cache Cleaner covers Chrome, Firefox, Edge and Safari, and the Downloads Cleaner categorizes old files so you can clear them in one click.',
            'One more hidden item deserves a mention: local Time Machine snapshots. In Terminal, the command tmutil listlocalsnapshots / lists the snapshots currently on your disk. macOS deletes them on its own when space runs low, but if you need room immediately, you can run tmutil deletelocalsnapshots followed by the snapshot\'s date.',
          ],
        },
        {
          title: 'Empty the Trash and Remove Duplicate Files',
          content: [
            'Files in the Trash are not really gone — they still occupy disk space. Control-click the Trash icon in the Dock and choose to empty it, or better, open Finder\'s settings, go to Advanced and enable the option that removes items from the Trash after 30 days. That single setting stops storage from silently filling up again.',
            'Old iPhone and iPad backups are another invisible line item in System Data, and each one can weigh several gigabytes. Connect your device, select it in the Finder sidebar and use the manage-backups button on the General tab to delete backups you no longer need. Because they are stored deep inside the Library folder, most users never realize they exist.',
            'Duplicate files are the most commonly overlooked waste of space: photos exported twice, documents downloaded again and again, folders copied for safety and forgotten. Hunting them manually can take hours. Disk Mop\'s Duplicate Detector compares files by their SHA-256 hash, which means only byte-for-byte identical copies get flagged — so deleting one copy is completely safe.',
          ],
        },
        {
          title: 'See Exactly What Fills Your Disk with a Treemap',
          content: [
            'The core problem with fighting System Data is invisibility: Apple tells you the total but never shows the contents. A treemap visualization solves this at the root. Every folder on your disk is drawn as a rectangle proportional to the space it uses, so the biggest space consumers jump out at first glance.',
            'Disk Mop\'s Disk Analysis feature scans your drive and builds exactly this treemap view. A cache folder that has ballooned out of control, a forgotten virtual machine image or a stack of disk images from years ago becomes obvious within seconds. The Large File Finder complements it by listing every file over 500 MB in a single view.',
            'Disk Mop runs natively on macOS 12 and later, on both Apple Silicon and Intel Macs, and is notarized by Apple. You stay in control the whole time: the app only shows you what it found, and nothing is removed without your review. If you use both Windows and Mac, the same app covers both platforms.',
          ],
        },
        {
          title: 'Keep System Data from Growing Back',
          content: [
            'Clearing System Data is not a one-time job — caches and logs rebuild by design. A quick look at the storage screen once a month lets you catch growth early, which is far easier than doing a marathon cleanup when the disk-full warning appears.',
            'A few simple habits make a big difference: restart your Mac regularly so swap files get cleared, keep the automatic Trash-emptying setting on, uninstall applications you no longer use, and give the Downloads folder a quick review at the end of each month.',
            'If you would rather put the routine on autopilot, Disk Mop\'s Scheduled Cleanup creates weekly or monthly tasks that clean caches, remove old downloads and empty the Trash for you. The one-click Speed Up feature runs the same cleanup on demand, and the System Health Score shows your Mac\'s overall condition at a glance.',
          ],
        },
      ],
      verdict: [
        'System Data on a Mac looks intimidating, but it is a manageable category once you know what feeds it. Checking your storage breakdown, clearing caches and logs safely, removing old downloads and device backups, emptying the Trash, deleting duplicates and visualizing the disk with a treemap — these six steps can recover gigabytes of space without ever touching the risky Library-deletion advice found in forums.',
        'Disk Mop combines all six steps in one app: Disk Analysis, the Large File Finder, the Duplicate Detector, the Cache Cleaner and Scheduled Cleanup all work together on macOS. You can download it for free to try the essentials, and a one-time payment of $19.90 unlocks every feature with a lifetime license.',
      ],
      ctaText: 'Free up space on your Mac with Disk Mop',
    },
    de: {
      title: 'Systemdaten auf dem Mac löschen: 6 sichere Methoden',
      metaDescription:
        'Systemdaten belegen zu viel Speicher auf dem Mac? Erfahren Sie, was Systemdaten sind und wie Sie sie sicher löschen — in sechs Schritten. Jetzt Platz schaffen.',
      subtitle: 'Der sichere Weg, die rätselhafteste Speicherkategorie von macOS zu verkleinern',
      intro: [
        'Systemdaten sind auf dem Mac die Sammelkategorie für Caches, Protokolldateien, Auslagerungsdateien des virtuellen Speichers, lokale Time-Machine-Schnappschüsse und alles, was macOS keiner Kategorie wie Apps oder Dokumente zuordnen kann. Um Systemdaten sicher zu löschen, bereinigen Sie Caches und alte Downloads, entfernen veraltete Backups, leeren den Papierkorb und löschen doppelte Dateien — riskante Eingriffe in Systemordner sind nicht nötig.',
        'Auf vielen Macs wachsen die Systemdaten auf Dutzende Gigabyte an, und Apple zeigt nie, was genau darin steckt. In Foren wird oft empfohlen, den Library-Ordner pauschal zu leeren — das kann jedoch Apps beschädigen und Daten kosten. Dieser Leitfaden zeigt stattdessen sechs sichere, umkehrbare Methoden, die vollständig in Ihrer Hand bleiben.',
        'Wir beginnen mit den manuellen Schritten über die Bordmittel von macOS und zeigen anschließend, wie die macOS-Version von Disk Mop dieselbe Bereinigung auf wenige Klicks reduziert. Arbeiten Sie die Schritte der Reihe nach ab, dann sollte spürbar Speicherplatz auf Ihrem Laufwerk zurückkommen.',
      ],
      sections: [
        {
          title: 'Was zählt auf dem Mac zu den Systemdaten?',
          content: [
            'Systemdaten sind der Nachfolger der Kategorie, die ältere macOS-Versionen als Andere bezeichneten. Darin stecken App-Caches und temporäre Dateien, System- und App-Protokolle, Auslagerungsdateien, lokale Time-Machine-Schnappschüsse, App-Support-Dateien, Plug-ins und Erweiterungen, Disk-Images und Archive sowie alte iPhone- und iPad-Backups, die der Finder auf dem Laufwerk ablegt.',
            'Die Kategorie wirkt so vage, weil macOS schlicht alles hineinpackt, was nicht in klare Kategorien wie Apps, Fotos oder Dokumente passt. Deshalb schwankt die Größe auch ständig: Die Auslagerungsdatei wächst bei Speicherdruck, und Time Machine erstellt im Hintergrund neue Schnappschüsse. Werte von mehreren Dutzend Gigabyte sind völlig normal.',
            'Wichtig zu wissen: Nicht alle Systemdaten sind Müll. macOS verwaltet Auslagerungsdateien selbst und verkleinert lokale Schnappschüsse automatisch, wenn der Speicher knapp wird. Ziel ist nicht null, sondern das sichere Entfernen des veralteten Teils — alte Caches, Protokolle, ungenutzte Backups und vergessene große Dateien.',
          ],
        },
        {
          title: 'Speicherübersicht in den Systemeinstellungen prüfen',
          content: [
            'Verschaffen Sie sich zuerst einen Überblick. Öffnen Sie unter macOS Ventura und neuer das Apple-Menü, wählen Sie Systemeinstellungen, gehen Sie zu Allgemein und öffnen Sie die Speicheransicht. Die farbige Leiste braucht einige Minuten zur Berechnung; danach zeigt jedes Segment beim Überfahren seine Größe. Unter macOS Monterey und älter finden Sie dieselbe Ansicht im Apple-Menü unter Über diesen Mac im Tab Speicher.',
            'Dort erscheinen auch Apples eigene Empfehlungen: Dateien in iCloud speichern, die Speicheroptimierung, die bereits gesehene Filme und Serien entfernt, und das automatische Leeren des Papierkorbs nach 30 Tagen. Über die Kategorienliste können Sie zudem große, lange nicht genutzte Apps direkt löschen.',
            'Die große Schwäche der Ansicht: Die Zeile Systemdaten lässt sich nicht öffnen. Apple liefert keine Aufschlüsselung — genau deshalb brauchen Sie die manuellen Schritte der nächsten Abschnitte oder ein Analysetool, das das Laufwerk auf Dateiebene zeigt.',
          ],
        },
        {
          title: 'Caches, Protokolle und alte Downloads sicher bereinigen',
          content: [
            'Am sichersten starten Sie mit den Browser-Caches, denn sie bauen sich nach dem Löschen selbst wieder auf. In Safari aktivieren Sie das Entwickler-Menü über den Bereich Erweitert in den Safari-Einstellungen und leeren darüber die Caches. In Chrome, Firefox und Edge erledigt das Löschen der Browserdaten in den Datenschutzeinstellungen dieselbe Aufgabe.',
            'Für Benutzer-Caches wählen Sie im Finder das Menü Gehe zu, dann Gehe zum Ordner (Shift-Command-G) und geben ~/Library/Caches ein. Öffnen Sie die Ordner von Apps, die Sie kennen, und löschen Sie deren Inhalt — nicht die Ordner selbst. Löschen Sie niemals den gesamten Library-Ordner und fassen Sie nichts unter /System an; genau das ist der riskante Forenrat, den dieser Leitfaden ersetzt. Protokolle finden Sie auf demselben Weg unter ~/Library/Logs. Starten Sie den Mac danach neu — das leert auch die Auslagerungsdateien.',
            'Auch der Downloads-Ordner frisst still Speicherplatz. Sortieren Sie ihn nach Größe und Datum; benutzte .dmg-Installationsdateien und alte Archive können in der Regel weg. Disk Mop bündelt diese Aufgaben: Der Cache-Bereiniger übernimmt System- und App-Caches, der Browser-Cache-Bereiniger deckt Chrome, Firefox, Edge und Safari ab, und der Downloads-Bereiniger sortiert alte Dateien für die Bereinigung mit einem Klick.',
            'Ein versteckter Posten fehlt noch: lokale Time-Machine-Schnappschüsse. Im Terminal listet der Befehl tmutil listlocalsnapshots / die vorhandenen Schnappschüsse auf. macOS löscht sie bei Platzmangel selbst; wer sofort Platz braucht, nutzt tmutil deletelocalsnapshots gefolgt vom Datum des Schnappschusses.',
          ],
        },
        {
          title: 'Papierkorb leeren und doppelte Dateien entfernen',
          content: [
            'Dateien im Papierkorb sind nicht wirklich gelöscht — sie belegen weiter Speicherplatz. Klicken Sie mit gedrückter Control-Taste auf das Papierkorb-Symbol im Dock und leeren Sie ihn, oder aktivieren Sie besser in den Finder-Einstellungen unter Erweitert das automatische Entfernen von Objekten nach 30 Tagen. Schon diese eine Einstellung verhindert, dass sich der Speicher unbemerkt wieder füllt.',
            'Alte iPhone- und iPad-Backups sind ein weiterer unsichtbarer Posten der Systemdaten und können jeweils mehrere Gigabyte belegen. Verbinden Sie das Gerät, wählen Sie es in der Finder-Seitenleiste aus und löschen Sie über die Backup-Verwaltung im Tab Allgemein die Sicherungen, die Sie nicht mehr brauchen. Da sie tief im Library-Ordner liegen, ahnen die meisten Nutzer nicht einmal, dass es sie überhaupt gibt.',
            'Doppelte Dateien sind die am häufigsten übersehene Platzverschwendung: doppelt exportierte Fotos, mehrfach heruntergeladene Dokumente, kopierte und vergessene Ordner. Sie von Hand aufzuspüren kann Stunden dauern. Disk Mops Duplikat-Detektor vergleicht Dateien per SHA-256-Hash — markiert werden nur Byte für Byte identische Kopien, das Löschen einer Kopie ist also völlig sicher.',
          ],
        },
        {
          title: 'Mit einer Treemap sehen, was die Festplatte füllt',
          content: [
            'Das Kernproblem im Kampf gegen Systemdaten ist die Unsichtbarkeit: Apple nennt die Gesamtgröße, zeigt aber nie den Inhalt. Eine Treemap löst das an der Wurzel — jeder Ordner erscheint als Rechteck proportional zu seinem Platzverbrauch, und die größten Speicherfresser springen sofort ins Auge.',
            'Disk Mops Festplattenanalyse scannt das Laufwerk und erstellt genau diese Treemap-Ansicht. Ein außer Kontrolle geratener Cache-Ordner, ein vergessenes VM-Image oder jahrealte Disk-Images werden in Sekunden sichtbar. Der Große-Dateien-Finder ergänzt das Bild mit einer Liste aller Dateien über 500 MB.',
            'Disk Mop läuft nativ unter macOS 12 und neuer, auf Apple-Silicon- und Intel-Macs, und ist von Apple notarisiert. Sie behalten jederzeit die Kontrolle: Die App zeigt nur, was sie gefunden hat — gelöscht wird nichts ohne Ihre Prüfung. Wer Windows und Mac nutzt, deckt mit derselben App beide Plattformen ab.',
          ],
        },
        {
          title: 'Verhindern, dass die Systemdaten wieder anwachsen',
          content: [
            'Die Bereinigung der Systemdaten ist keine einmalige Aufgabe — Caches und Protokolle bauen sich konstruktionsbedingt neu auf. Ein kurzer Blick auf die Speicheransicht einmal im Monat erkennt Wachstum früh und erspart die Marathon-Bereinigung bei voller Festplatte.',
            'Ein paar einfache Gewohnheiten helfen enorm: Starten Sie den Mac regelmäßig neu, damit Auslagerungsdateien geleert werden, lassen Sie das automatische Papierkorb-Leeren aktiviert, deinstallieren Sie ungenutzte Apps und werfen Sie monatlich einen Blick in den Downloads-Ordner.',
            'Wer die Routine automatisieren möchte, nutzt Disk Mops geplante Bereinigung: Wöchentliche oder monatliche Aufgaben bereinigen Caches, entfernen alte Downloads und leeren den Papierkorb. Die Ein-Klick-Funktion Speed Up führt dieselbe Bereinigung bei Bedarf sofort aus, und der Systemzustand-Score zeigt den Gesamtzustand des Mac auf einen Blick.',
          ],
        },
      ],
      verdict: [
        'Systemdaten wirken auf dem Mac einschüchternd, sind aber gut beherrschbar, sobald man weiß, was sie speist. Speicherübersicht prüfen, Caches und Protokolle sicher bereinigen, alte Downloads und Geräte-Backups entfernen, Papierkorb leeren, Duplikate löschen und die Festplatte per Treemap sichtbar machen — diese sechs Schritte gewinnen etliche Gigabyte zurück, ganz ohne die riskanten Library-Löschtipps aus Foren.',
        'Disk Mop vereint alle sechs Schritte in einer App: Festplattenanalyse, Große-Dateien-Finder, Duplikat-Detektor, Cache-Bereiniger und geplante Bereinigung arbeiten unter macOS zusammen. Der Download ist kostenlos, und eine einmalige Zahlung von 19,90 $ schaltet mit lebenslanger Lizenz alle Funktionen frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Ihrem Mac',
    },
    fr: {
      title: "Effacer les données système sur Mac : 6 méthodes sûres",
      metaDescription:
        "Les données système saturent le stockage de votre Mac ? Découvrez ce que contient cette catégorie et comment la réduire en six étapes sûres et réversibles.",
      subtitle: "Le guide sûr, étape par étape, pour réduire la catégorie de stockage la plus mystérieuse de macOS",
      intro: [
        "Sur un Mac, les données système (System Data) forment la catégorie fourre-tout qui regroupe les caches, les fichiers journaux, les fichiers d'échange de la mémoire virtuelle, les instantanés locaux de Time Machine et tout ce que macOS ne parvient pas à ranger dans des catégories comme Apps ou Documents. Pour libérer cet espace sans risque, il suffit de nettoyer les caches et les anciens téléchargements, de supprimer les sauvegardes obsolètes, de vider la Corbeille et d'effacer les fichiers en double — aucune suppression hasardeuse dans les dossiers système n'est nécessaire.",
        "Sur beaucoup de Mac, les données système atteignent des dizaines de gigaoctets, et Apple ne montre jamais ce qu'elles contiennent réellement. Le conseil que l'on croise sans cesse sur les forums consiste à vider en bloc le dossier Bibliothèque (Library), au risque de casser des applications et de perdre des données. Ce guide prend le chemin inverse : six méthodes sûres, réversibles et entièrement sous votre contrôle.",
        "Nous commencerons par les manipulations manuelles réalisables avec les outils intégrés de macOS, puis nous verrons comment la version macOS de Disk Mop regroupe le même nettoyage en quelques clics. Suivez les étapes dans l'ordre et vous devriez récupérer une quantité d'espace tout à fait visible.",
      ],
      sections: [
        {
          title: "Que contiennent vraiment les données système d'un Mac ?",
          content: [
            "Les données système ont remplacé la catégorie que les anciennes versions de macOS appelaient Autre. On y trouve un mélange très large : caches applicatifs et fichiers temporaires, journaux du système et des apps, fichiers d'échange de la mémoire virtuelle, instantanés locaux de Time Machine, fichiers de support d'applications, modules et extensions, images disque et archives, sans oublier les anciennes sauvegardes d'iPhone et d'iPad que le Finder conserve sur votre disque.",
            "Si la catégorie paraît aussi floue, la raison est simple : macOS y entasse tout ce qui n'entre pas dans une case nette comme Apps, Photos ou Documents. C'est aussi pourquoi le chiffre fluctue, parfois au cours d'une même journée — le fichier d'échange grossit dès que la mémoire est sollicitée et Time Machine crée discrètement de nouveaux instantanés locaux. Voir cette catégorie grimper à plusieurs dizaines de gigaoctets n'a donc rien d'anormal.",
            "Une précision rassurante avant de supprimer quoi que ce soit : toutes les données système ne sont pas des déchets. macOS gère lui-même les fichiers d'échange et allège automatiquement les instantanés locaux dès que le disque commence à se remplir. L'objectif n'est pas de ramener la catégorie à zéro, mais d'en retirer la part périmée que l'on peut effacer sans danger : vieux caches, journaux, sauvegardes inutilisées et gros fichiers oubliés.",
          ],
        },
        {
          title: "Consultez la répartition du stockage dans les Réglages Système",
          content: [
            "La première étape consiste à voir à quoi vous avez affaire. Sous macOS Ventura et versions ultérieures, ouvrez le menu Pomme, choisissez Réglages Système, allez dans Général et ouvrez l'écran Stockage. Le calcul de la barre colorée peut prendre quelques minutes ; une fois terminé, survolez chaque segment pour connaître l'espace occupé par chaque catégorie. Sous macOS Monterey et versions antérieures, le même écran se trouve dans le menu Pomme, sous « À propos de ce Mac », onglet Stockage.",
            "Cet écran affiche également les recommandations intégrées d'Apple : le stockage des fichiers dans iCloud, une option d'optimisation qui supprime les films et séries déjà regardés, et un réglage qui vide automatiquement la Corbeille au bout de 30 jours. Vous pouvez aussi ouvrir la catégorie Applications depuis la liste et supprimer directement les grosses apps que vous n'avez pas lancées depuis des mois.",
            "L'écran souffre toutefois d'une grosse limite : la ligne Données système n'est pas cliquable. Apple ne fournit aucun détail de son contenu, et c'est précisément pour cela qu'il vous faut soit les manipulations manuelles des sections suivantes, soit un analyseur de disque capable de montrer votre volume fichier par fichier.",
          ],
        },
        {
          title: "Nettoyez sans risque les caches, les journaux et les anciens téléchargements",
          content: [
            "Le point de départ le plus sûr reste les caches des navigateurs, car ils se reconstruisent tout seuls après suppression. Dans Safari, activez le menu Développement depuis la section Avancées des réglages de Safari, puis servez-vous-en pour vider les caches. Dans Chrome, Firefox et Edge, l'option d'effacement des données de navigation, dans les réglages de confidentialité, remplit exactement le même rôle.",
            "Pour les caches au niveau utilisateur, ouvrez le Finder, choisissez Aller puis Aller au dossier (Shift-Command-G) et saisissez ~/Library/Caches. Ouvrez les dossiers des applications que vous reconnaissez et supprimez leur contenu — pas les dossiers eux-mêmes. Ne videz jamais en bloc le dossier Bibliothèque et ne touchez à rien sous /System : c'est exactement le conseil risqué que ce guide est là pour remplacer. Les fichiers journaux s'examinent de la même façon dans ~/Library/Logs. Redémarrez ensuite votre Mac, ce qui vide aussi les fichiers d'échange comptabilisés dans les données système.",
            "Le dossier Téléchargements est un autre dévoreur d'espace discret. Triez-le par taille et par date : les vieux fichiers d'installation .dmg et les archives déjà utilisées peuvent presque toujours partir sans regret. Disk Mop réunit ces trois corvées au même endroit : son nettoyeur de cache (Cache Cleaner) s'occupe des caches système et applicatifs, le nettoyeur de cache navigateur (Browser Cache Cleaner) couvre Chrome, Firefox, Edge et Safari, et le nettoyeur de téléchargements (Downloads Cleaner) classe les anciens fichiers par catégorie pour que vous les effaciez en un clic.",
            "Un dernier élément caché mérite d'être mentionné : les instantanés locaux de Time Machine. Dans le Terminal, la commande tmutil listlocalsnapshots / liste les instantanés présents sur votre disque. macOS les supprime de lui-même lorsque la place vient à manquer, mais si vous avez besoin d'espace immédiatement, vous pouvez lancer tmutil deletelocalsnapshots suivi de la date de l'instantané.",
          ],
        },
        {
          title: "Videz la Corbeille et supprimez les fichiers en double",
          content: [
            "Les fichiers placés dans la Corbeille ne sont pas vraiment partis : ils occupent toujours de l'espace disque. Cliquez sur l'icône de la Corbeille dans le Dock en maintenant la touche Contrôle et choisissez de la vider ou, mieux, ouvrez les réglages du Finder, allez dans Avancé et activez l'option qui supprime les éléments de la Corbeille au bout de 30 jours. Ce simple réglage empêche le stockage de se remplir à nouveau en silence.",
            "Les anciennes sauvegardes d'iPhone et d'iPad forment une autre ligne invisible des données système, et chacune peut peser plusieurs gigaoctets. Connectez votre appareil, sélectionnez-le dans la barre latérale du Finder et utilisez le bouton de gestion des sauvegardes de l'onglet Général pour effacer celles dont vous n'avez plus besoin. Comme elles sont enfouies au fond du dossier Bibliothèque, la plupart des utilisateurs ignorent jusqu'à leur existence.",
            "Les fichiers en double sont le gaspillage d'espace le plus souvent négligé : photos exportées deux fois, documents téléchargés encore et encore, dossiers copiés par précaution puis oubliés. Les traquer à la main peut prendre des heures. Le détecteur de doublons (Duplicate Detector) de Disk Mop compare les fichiers par leur empreinte SHA-256 : seules les copies strictement identiques, octet par octet, sont signalées — supprimer l'un des exemplaires est donc parfaitement sûr.",
          ],
        },
        {
          title: "Voyez enfin ce qui remplit votre disque grâce à une treemap",
          content: [
            "Le vrai problème des données système, c'est leur invisibilité : Apple vous donne un total mais ne montre jamais le détail. Une visualisation en treemap règle la question à la racine. Chaque dossier de votre disque y est dessiné sous forme de rectangle proportionnel à l'espace qu'il occupe : les plus gros consommateurs sautent aux yeux dès le premier coup d'œil.",
            "L'analyse de disque (Disk Analysis) de Disk Mop scanne votre volume et construit exactement cette vue en treemap. Un dossier de cache devenu incontrôlable, une image de machine virtuelle oubliée ou une pile d'images disque vieilles de plusieurs années apparaissent en quelques secondes. Le détecteur de gros fichiers (Large File Finder) complète le tableau en listant, dans une seule vue, tous les fichiers de plus de 500 Mo.",
            "Disk Mop fonctionne nativement sous macOS 12 et versions ultérieures, sur les Mac Apple Silicon comme sur les Mac Intel, et il est notarisé par Apple. Vous gardez la main du début à la fin : l'application se contente de montrer ce qu'elle a trouvé et rien n'est supprimé sans votre validation. Si vous utilisez à la fois Windows et Mac, la même application couvre les deux plateformes.",
          ],
        },
        {
          title: "Empêchez les données système de regrossir",
          content: [
            "Nettoyer les données système n'est pas une opération unique : les caches et les journaux se reconstituent par conception. Un coup d'œil rapide à l'écran Stockage une fois par mois suffit à repérer la croissance très tôt, ce qui est bien plus confortable qu'un marathon de nettoyage le jour où l'alerte de disque plein s'affiche.",
            "Quelques habitudes simples changent tout : redémarrez régulièrement votre Mac pour que les fichiers d'échange soient vidés, laissez activé le vidage automatique de la Corbeille, désinstallez complètement les applications dont vous ne vous servez plus et passez en revue le dossier Téléchargements à la fin de chaque mois.",
            "Si vous préférez mettre cette routine en pilote automatique, le nettoyage planifié (Scheduled Cleanup) de Disk Mop crée des tâches hebdomadaires ou mensuelles qui nettoient les caches, suppriment les anciens téléchargements et vident la Corbeille à votre place. La fonction Accélérer (Speed Up) exécute le même nettoyage à la demande, en un clic, tandis que l'indice de santé du système (System Health Score) résume l'état général de votre Mac d'un seul regard.",
          ],
        },
      ],
      verdict: [
        "Sur un Mac, les données système ont l'air intimidantes, mais la catégorie devient tout à fait gérable dès que l'on sait ce qui l'alimente. Consulter la répartition du stockage, nettoyer les caches et les journaux sans risque, supprimer les anciens téléchargements et les sauvegardes d'appareils, vider la Corbeille, effacer les doublons et visualiser le disque avec une treemap : ces six étapes récupèrent des gigaoctets d'espace sans jamais recourir aux conseils de suppression hasardeuse du dossier Bibliothèque que l'on lit sur les forums.",
        "Disk Mop réunit ces six étapes dans une seule application : l'analyse de disque, le détecteur de gros fichiers, le détecteur de doublons, le nettoyeur de cache et le nettoyage planifié travaillent de concert sous macOS. Le téléchargement est gratuit pour tester l'essentiel, et un paiement unique de 19,90 $ débloque toutes les fonctions avec une licence à vie.",
      ],
      ctaText: "Libérez de l'espace sur votre Mac avec Disk Mop",
    },
    es: {
      title: "Cómo liberar los datos del sistema en Mac: 6 métodos seguros",
      metaDescription:
        "¿Los datos del sistema ocupan demasiado en tu Mac? Descubre qué incluye esa categoría y cómo liberar espacio con seis pasos seguros y reversibles. Empieza ya.",
      subtitle: "Una guía segura, paso a paso, para reducir la categoría de almacenamiento más misteriosa de macOS",
      intro: [
        "En un Mac, los datos del sistema (System Data) son la categoría cajón de sastre que reúne cachés, archivos de registro, archivos de intercambio de la memoria virtual, instantáneas locales de Time Machine y todo aquello que macOS no puede asignar a categorías como Aplicaciones o Documentos. Para liberar ese espacio sin riesgos basta con limpiar cachés y descargas antiguas, eliminar copias de seguridad obsoletas, vaciar la Papelera y borrar archivos duplicados: no hace falta ninguna eliminación arriesgada en carpetas del sistema.",
        "En muchos Mac los datos del sistema crecen hasta decenas de gigabytes, y Apple nunca muestra qué hay realmente dentro. El consejo que se repite en los foros es vaciar de golpe la carpeta Biblioteca (Library), algo que puede romper aplicaciones y provocar pérdida de datos. Esta guía toma el camino contrario: seis métodos seguros, reversibles y bajo tu control en todo momento.",
        "Empezaremos por los pasos manuales que puedes dar con las herramientas integradas de macOS y después veremos cómo la versión para macOS de Disk Mop reúne esa misma limpieza en unos pocos clics. Sigue los pasos en orden y deberías recuperar una cantidad de espacio bien visible.",
      ],
      sections: [
        {
          title: "¿Qué se incluye en los datos del sistema de un Mac?",
          content: [
            "Los datos del sistema son los herederos de la categoría que las versiones antiguas de macOS llamaban Otros. Dentro hay una mezcla muy variada: cachés de aplicaciones y archivos temporales, registros del sistema y de las apps, archivos de intercambio de la memoria virtual, instantáneas locales de Time Machine, archivos de soporte de aplicaciones, plugins y extensiones, imágenes de disco y archivos comprimidos, además de las copias de seguridad antiguas de iPhone y iPad que el Finder guarda en tu disco.",
            "El motivo de que la categoría resulte tan vaga es sencillo: macOS amontona ahí todo lo que no encaja en un cajón claro como Aplicaciones, Fotos o Documentos. Por eso mismo la cifra fluctúa, a veces incluso a lo largo de un mismo día: el archivo de intercambio crece cuando hay presión de memoria y Time Machine crea nuevas instantáneas locales en segundo plano. Ver esta categoría en decenas de gigabytes es del todo normal.",
            "Una aclaración tranquilizadora antes de empezar a borrar: no todos los datos del sistema son basura. macOS gestiona por su cuenta los archivos de intercambio y adelgaza automáticamente las instantáneas locales cuando el disco empieza a llenarse. El objetivo no es dejar la categoría a cero, sino retirar la parte caducada que se puede borrar sin peligro: cachés viejas, registros, copias de seguridad en desuso y archivos grandes olvidados.",
          ],
        },
        {
          title: "Consulta el desglose del almacenamiento en Ajustes del Sistema",
          content: [
            "El primer paso es ver a qué te enfrentas. En macOS Ventura y posteriores, abre el menú Apple, entra en Ajustes del Sistema, ve a General y abre la pantalla de Almacenamiento. La barra de colores puede tardar unos minutos en calcularse; cuando termine, pasa el cursor por cada segmento para ver cuánto ocupa cada categoría. En macOS Monterey y anteriores, esa misma vista está en el menú Apple, en « Acerca de este Mac », pestaña Almacenamiento.",
            "Esta pantalla también muestra las recomendaciones propias de Apple: guardar archivos en iCloud, una opción de optimización que elimina las películas y series que ya has visto y un ajuste que vacía la Papelera automáticamente al cabo de 30 días. Además puedes abrir la categoría Aplicaciones desde la lista y borrar ahí mismo las apps grandes que llevas meses sin abrir.",
            "La pantalla tiene una limitación importante: la fila de datos del sistema no se puede pulsar. Apple no ofrece ningún desglose de lo que hay dentro, y justo por eso necesitas los pasos manuales de las secciones siguientes o un analizador de disco que muestre la unidad archivo por archivo.",
          ],
        },
        {
          title: "Limpia cachés, registros y descargas antiguas sin riesgo",
          content: [
            "El punto de partida más seguro son las cachés de los navegadores, porque se reconstruyen solas después de borrarlas. En Safari, activa el menú Desarrollo desde la sección Avanzado de los ajustes de Safari y úsalo para vaciar las cachés. En Chrome, Firefox y Edge, la opción de borrar datos de navegación de los ajustes de privacidad hace exactamente lo mismo.",
            "Para las cachés de usuario, abre el Finder, elige Ir y después Ir a la carpeta (Shift-Command-G) y escribe ~/Library/Caches. Abre las carpetas de las apps que reconozcas y borra su contenido, no las carpetas en sí. No vacíes nunca la carpeta Biblioteca entera ni toques nada dentro de /System: ese es precisamente el consejo arriesgado de los foros que esta guía viene a sustituir. Los archivos de registro se revisan igual en ~/Library/Logs. Reinicia después el Mac, algo que además vacía los archivos de intercambio que suman en los datos del sistema.",
            "La carpeta Descargas es otro devorador de espacio silencioso. Ordénala por tamaño y por fecha: los instaladores .dmg antiguos y los archivos comprimidos que ya usaste suelen poder borrarse sin pensarlo dos veces. Disk Mop reúne estas tres tareas en un mismo sitio: su limpiador de caché (Cache Cleaner) se ocupa de las cachés del sistema y de las aplicaciones, el limpiador de caché del navegador (Browser Cache Cleaner) cubre Chrome, Firefox, Edge y Safari, y el limpiador de descargas (Downloads Cleaner) clasifica los archivos antiguos para que los elimines de un clic.",
            "Queda un elemento oculto que merece mención aparte: las instantáneas locales de Time Machine. En el Terminal, el comando tmutil listlocalsnapshots / muestra las instantáneas que hay ahora mismo en tu disco. macOS las borra por su cuenta cuando escasea el espacio, pero si necesitas sitio de inmediato puedes ejecutar tmutil deletelocalsnapshots seguido de la fecha de la instantánea.",
          ],
        },
        {
          title: "Vacía la Papelera y elimina los archivos duplicados",
          content: [
            "Los archivos que están en la Papelera no han desaparecido: siguen ocupando espacio en el disco. Haz clic en el icono de la Papelera del Dock con la tecla Control pulsada y elige vaciarla o, mejor todavía, abre los ajustes del Finder, ve a Avanzado y activa la opción que borra los ítems de la Papelera al cabo de 30 días. Ese único ajuste evita que el almacenamiento vuelva a llenarse en silencio.",
            "Las copias de seguridad antiguas de iPhone y iPad son otra partida invisible de los datos del sistema, y cada una puede pesar varios gigabytes. Conecta el dispositivo, selecciónalo en la barra lateral del Finder y usa el botón de gestión de copias de la pestaña General para borrar las que ya no necesites. Como se guardan en lo más hondo de la carpeta Biblioteca, casi nadie sabe siquiera que existen.",
            "Los archivos duplicados son el desperdicio de espacio que más se pasa por alto: fotos exportadas dos veces, documentos descargados una y otra vez, carpetas copiadas por si acaso y olvidadas. Buscarlos a mano puede llevar horas. El detector de duplicados (Duplicate Detector) de Disk Mop compara los archivos por su hash SHA-256, así que solo marca las copias idénticas byte a byte: borrar una de ellas es completamente seguro.",
          ],
        },
        {
          title: "Descubre con un treemap qué llena de verdad tu disco",
          content: [
            "El problema de fondo al pelearse con los datos del sistema es la invisibilidad: Apple te da el total pero nunca enseña el contenido. Una visualización en treemap lo resuelve de raíz. Cada carpeta del disco se dibuja como un rectángulo proporcional al espacio que ocupa, así que los mayores consumidores saltan a la vista al primer vistazo.",
            "El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad y construye exactamente esa vista de treemap. Una carpeta de caché que se ha desmadrado, una imagen de máquina virtual olvidada o un montón de imágenes de disco de hace años se vuelven evidentes en segundos. El buscador de archivos grandes (Large File Finder) lo completa listando en una sola vista todos los archivos de más de 500 MB.",
            "Disk Mop funciona de forma nativa en macOS 12 y posteriores, tanto en Mac con Apple Silicon como con Intel, y está notarizado por Apple. Tú mandas en todo momento: la app solo muestra lo que ha encontrado y no elimina nada sin que lo revises antes. Si usas Windows y Mac a la vez, la misma aplicación cubre ambas plataformas.",
          ],
        },
        {
          title: "Evita que los datos del sistema vuelvan a crecer",
          content: [
            "Limpiar los datos del sistema no es una tarea de una sola vez: las cachés y los registros se rehacen por diseño. Un vistazo rápido a la pantalla de almacenamiento una vez al mes te permite detectar el crecimiento pronto, mucho más cómodo que una limpieza maratoniana el día que salta el aviso de disco lleno.",
            "Unos pocos hábitos sencillos marcan la diferencia: reinicia el Mac con regularidad para que se vacíen los archivos de intercambio, deja activado el vaciado automático de la Papelera, desinstala del todo las aplicaciones que ya no usas y revisa la carpeta Descargas al final de cada mes.",
            "Si prefieres poner la rutina en piloto automático, la limpieza programada (Scheduled Cleanup) de Disk Mop crea tareas semanales o mensuales que limpian cachés, borran descargas antiguas y vacían la Papelera por ti. La función Acelerar (Speed Up) ejecuta esa misma limpieza cuando tú quieras, de un solo clic, y la puntuación de salud del sistema (System Health Score) resume el estado general del Mac de un vistazo.",
          ],
        },
      ],
      verdict: [
        "Los datos del sistema de un Mac imponen respeto, pero son una categoría manejable en cuanto sabes qué la alimenta. Consultar el desglose del almacenamiento, limpiar cachés y registros sin riesgo, eliminar descargas antiguas y copias de seguridad de dispositivos, vaciar la Papelera, borrar duplicados y visualizar el disco con un treemap: estos seis pasos recuperan gigabytes de espacio sin acercarse siquiera a los arriesgados consejos de borrar la carpeta Biblioteca que circulan por los foros.",
        "Disk Mop reúne los seis pasos en una sola aplicación: el análisis de disco, el buscador de archivos grandes, el detector de duplicados, el limpiador de caché y la limpieza programada trabajan juntos en macOS. Puedes descargarlo gratis para probar lo esencial, y un pago único de 19,90 $ desbloquea todas las funciones con licencia de por vida.",
      ],
      ctaText: "Libera espacio en tu Mac con Disk Mop",
    },
    it: {
      title: "Dati di sistema su Mac: 6 modi sicuri per liberare spazio",
      metaDescription:
        "I dati di sistema occupano troppo spazio sul Mac? Scopri che cosa contiene questa categoria e come ridurla con sei passaggi sicuri e reversibili. Inizia ora.",
      subtitle: "La guida sicura, passo dopo passo, per ridurre la categoria di archiviazione più misteriosa di macOS",
      intro: [
        "Sul Mac i dati di sistema (System Data) sono la categoria calderone che raccoglie cache, file di log, file di scambio della memoria virtuale, istantanee locali di Time Machine e tutto ciò che macOS non riesce ad assegnare a categorie come App o Documenti. Per liberare questo spazio in sicurezza basta ripulire cache e vecchi download, rimuovere i backup obsoleti, svuotare il Cestino ed eliminare i file duplicati: nessuna cancellazione azzardata nelle cartelle di sistema.",
        "Su molti Mac i dati di sistema arrivano a decine di gigabyte e Apple non mostra mai che cosa contengano davvero. Il consiglio che circola nei forum è svuotare in blocco la cartella Libreria (Library), una mossa che può danneggiare le applicazioni e far perdere dati. Questa guida sceglie la strada opposta: sei metodi sicuri, reversibili e sempre sotto il vostro controllo.",
        "Partiremo dai passaggi manuali che si possono eseguire con gli strumenti integrati di macOS, poi vedremo come la versione macOS di Disk Mop concentri la stessa pulizia in pochi clic. Seguendo i passaggi nell'ordine indicato dovreste recuperare una quantità di spazio ben visibile.",
      ],
      sections: [
        {
          title: "Che cosa rientra nei dati di sistema di un Mac?",
          content: [
            "I dati di sistema sono l'erede della categoria che le vecchie versioni di macOS chiamavano Altro. Al loro interno convive un mix molto ampio: cache delle applicazioni e file temporanei, log del sistema e delle app, file di scambio della memoria virtuale, istantanee locali di Time Machine, file di supporto delle applicazioni, plug-in ed estensioni, immagini disco e archivi, oltre ai vecchi backup di iPhone e iPad che il Finder conserva sull'unità.",
            "Il motivo per cui la categoria appare così vaga è semplice: macOS ci ammassa tutto ciò che non rientra in una casella netta come App, Foto o Documenti. È anche la ragione per cui il valore oscilla, a volte nell'arco della stessa giornata: il file di scambio cresce quando la memoria è sotto pressione e Time Machine crea in silenzio nuove istantanee locali. Vedere questa categoria arrivare a decine di gigabyte è del tutto normale.",
            "Una rassicurazione prima di iniziare a cancellare: non tutti i dati di sistema sono spazzatura. macOS gestisce da solo i file di scambio e assottiglia automaticamente le istantanee locali quando il disco comincia a riempirsi. L'obiettivo non è azzerare la categoria, ma rimuovere la parte ormai scaduta che si può eliminare senza rischi: vecchie cache, log, backup inutilizzati e grossi file dimenticati.",
          ],
        },
        {
          title: "Controllate la ripartizione dello spazio nelle Impostazioni di Sistema",
          content: [
            "Il primo passo è capire con che cosa avete a che fare. Su macOS Ventura e versioni successive aprite il menu Apple, scegliete Impostazioni di Sistema, andate in Generali e aprite la schermata Archiviazione. La barra colorata può impiegare qualche minuto per il calcolo; al termine, passate il puntatore su ogni segmento per vedere quanto spazio occupa ciascuna categoria. Su macOS Monterey e versioni precedenti la stessa vista si trova nel menu Apple, sotto « Informazioni su questo Mac », nel pannello Archiviazione.",
            "Questa schermata propone anche i suggerimenti integrati di Apple: archiviare i file in iCloud, un'opzione di ottimizzazione che rimuove film e serie TV già guardati e un'impostazione che svuota automaticamente il Cestino dopo 30 giorni. Dall'elenco potete inoltre aprire la categoria Applicazioni ed eliminare direttamente da lì le app di grandi dimensioni che non avviate da mesi.",
            "La schermata ha però un grosso limite: la riga dei dati di sistema non è cliccabile. Apple non fornisce alcun dettaglio del contenuto, ed è esattamente per questo che servono i passaggi manuali delle sezioni successive oppure un analizzatore capace di mostrare l'unità file per file.",
          ],
        },
        {
          title: "Ripulite cache, log e vecchi download in sicurezza",
          content: [
            "Il punto di partenza più sicuro sono le cache dei browser, perché dopo la cancellazione si ricostruiscono da sole. In Safari attivate il menu Sviluppo dalla sezione Avanzate delle impostazioni di Safari e usatelo per svuotare le cache. In Chrome, Firefox ed Edge la voce per cancellare i dati di navigazione, nelle impostazioni sulla privacy, svolge esattamente lo stesso compito.",
            "Per le cache a livello utente aprite il Finder, scegliete Vai e poi Vai alla cartella (Shift-Command-G) e inserite ~/Library/Caches. Aprite le cartelle delle app che riconoscete ed eliminatene il contenuto, non le cartelle stesse. Non svuotate mai in blocco la cartella Libreria e non toccate nulla sotto /System: è proprio il consiglio rischioso dei forum che questa guida vuole sostituire. I file di log si esaminano allo stesso modo in ~/Library/Logs. Riavviate poi il Mac: l'operazione svuota anche i file di scambio conteggiati nei dati di sistema.",
            "Anche la cartella Download divora spazio in silenzio. Ordinatela per dimensione e per data: i vecchi installer .dmg e gli archivi già utilizzati si possono quasi sempre eliminare senza pensarci troppo. Disk Mop riunisce queste tre incombenze in un unico posto: il pulitore della cache (Cache Cleaner) si occupa delle cache di sistema e delle applicazioni, il pulitore della cache dei browser (Browser Cache Cleaner) copre Chrome, Firefox, Edge e Safari, e il pulitore dei download (Downloads Cleaner) suddivide in categorie i file più vecchi per eliminarli con un clic.",
            "Resta una voce nascosta che merita una menzione: le istantanee locali di Time Machine. Nel Terminale il comando tmutil listlocalsnapshots / elenca le istantanee presenti sul disco. macOS le cancella da solo quando lo spazio scarseggia, ma se vi serve spazio subito potete eseguire tmutil deletelocalsnapshots seguito dalla data dell'istantanea.",
          ],
        },
        {
          title: "Svuotate il Cestino e rimuovete i file duplicati",
          content: [
            "I file finiti nel Cestino non sono davvero spariti: continuano a occupare spazio sul disco. Fate clic sull'icona del Cestino nel Dock tenendo premuto il tasto Ctrl e scegliete di svuotarlo oppure, meglio ancora, aprite le impostazioni del Finder, andate in Avanzate e attivate l'opzione che rimuove gli elementi dal Cestino dopo 30 giorni. Questa singola impostazione impedisce allo spazio di riempirsi di nuovo in sordina.",
            "I vecchi backup di iPhone e iPad sono un'altra voce invisibile dei dati di sistema e ciascuno può pesare diversi gigabyte. Collegate il dispositivo, selezionatelo nella barra laterale del Finder e usate il pulsante di gestione dei backup nel pannello Generali per eliminare quelli che non vi servono più. Poiché sono nascosti in profondità nella cartella Libreria, la maggior parte delle persone non sospetta nemmeno che esistano.",
            "I file duplicati sono lo spreco di spazio che sfugge più spesso: foto esportate due volte, documenti scaricati più e più volte, cartelle copiate per sicurezza e poi dimenticate. Stanarli a mano può richiedere ore. Il rilevatore di duplicati (Duplicate Detector) di Disk Mop confronta i file tramite l'hash SHA-256, quindi segnala soltanto le copie identiche byte per byte: eliminarne una è del tutto sicuro.",
          ],
        },
        {
          title: "Scoprite con una treemap che cosa riempie davvero il disco",
          content: [
            "Il problema di fondo nella lotta ai dati di sistema è l'invisibilità: Apple vi dice il totale ma non mostra mai il contenuto. Una visualizzazione a treemap risolve la questione alla radice. Ogni cartella del disco viene disegnata come un rettangolo proporzionale allo spazio che occupa, così i maggiori divoratori di spazio saltano all'occhio al primo sguardo.",
            "L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità e costruisce esattamente questa vista a treemap. Una cartella di cache cresciuta a dismisura, un'immagine di macchina virtuale dimenticata o una pila di immagini disco vecchie di anni diventano evidenti in pochi secondi. Il ricercatore di file di grandi dimensioni (Large File Finder) completa il quadro elencando in un'unica schermata tutti i file oltre i 500 MB.",
            "Disk Mop gira in modo nativo su macOS 12 e versioni successive, sia sui Mac con Apple Silicon sia su quelli Intel, ed è notarizzato da Apple. Il controllo resta sempre vostro: l'app mostra soltanto ciò che ha trovato e non rimuove nulla senza una vostra verifica. Se usate sia Windows sia Mac, la stessa applicazione copre entrambe le piattaforme.",
          ],
        },
        {
          title: "Impedite ai dati di sistema di ricrescere",
          content: [
            "Ripulire i dati di sistema non è un lavoro da fare una volta sola: cache e log si ricostruiscono per progetto. Un'occhiata veloce alla schermata dell'archiviazione una volta al mese permette di intercettare per tempo la crescita, molto più comodo di una pulizia maratona il giorno in cui compare l'avviso di disco pieno.",
            "Poche abitudini semplici fanno una grande differenza: riavviate il Mac con regolarità così i file di scambio vengono svuotati, lasciate attiva la cancellazione automatica del Cestino, disinstallate completamente le applicazioni che non usate più e date una rapida occhiata alla cartella Download alla fine di ogni mese.",
            "Se preferite mettere la routine in pilota automatico, la pulizia pianificata (Scheduled Cleanup) di Disk Mop crea attività settimanali o mensili che ripuliscono le cache, rimuovono i vecchi download e svuotano il Cestino al posto vostro. La funzione Accelera (Speed Up) esegue la stessa pulizia su richiesta con un clic, mentre il punteggio di salute del sistema (System Health Score) riassume a colpo d'occhio le condizioni generali del Mac.",
          ],
        },
      ],
      verdict: [
        "Sul Mac i dati di sistema sembrano intimidatori, ma diventano una categoria gestibile appena si capisce che cosa li alimenta. Controllare la ripartizione dello spazio, ripulire cache e log in sicurezza, rimuovere vecchi download e backup dei dispositivi, svuotare il Cestino, eliminare i duplicati e visualizzare il disco con una treemap: questi sei passaggi recuperano gigabyte di spazio senza mai avvicinarsi ai rischiosi consigli sulla cancellazione della cartella Libreria che si leggono nei forum.",
        "Disk Mop riunisce tutti e sei i passaggi in un'unica app: analisi del disco, ricercatore di file di grandi dimensioni, rilevatore di duplicati, pulitore della cache e pulizia pianificata lavorano insieme su macOS. Potete scaricarlo gratuitamente per provare le funzioni essenziali, mentre un pagamento una tantum di 19,90 $ sblocca tutto con una licenza a vita.",
      ],
      ctaText: "Liberate spazio sul vostro Mac con Disk Mop",
    },
    pt: {
      title: "Como limpar os dados do sistema no Mac: 6 formas seguras",
      metaDescription:
        "Os dados do sistema estão ocupando espaço no seu Mac? Veja o que essa categoria inclui e como limpá-la com seis passos seguros e reversíveis. Comece agora.",
      subtitle: "Um guia seguro, passo a passo, para reduzir a categoria de armazenamento mais misteriosa do macOS",
      intro: [
        "No Mac, os dados do sistema (System Data) são a categoria coringa que reúne caches, arquivos de log, arquivos de troca da memória virtual, instantâneos locais do Time Machine e tudo o mais que o macOS não consegue encaixar em categorias como Aplicativos ou Documentos. Para liberar esse espaço com segurança, basta limpar caches e downloads antigos, remover backups desatualizados, esvaziar o Lixo e apagar arquivos duplicados: nenhuma exclusão arriscada em pastas do sistema é necessária.",
        "Em muitos Macs, os dados do sistema chegam a dezenas de gigabytes, e a Apple nunca mostra o que existe de fato lá dentro. O conselho que se repete nos fóruns é apagar de uma vez o conteúdo da pasta Biblioteca (Library), o que pode quebrar aplicativos e causar perda de dados. Este guia segue o caminho oposto: seis métodos seguros, reversíveis e totalmente sob o seu controle.",
        "Vamos começar pelos passos manuais que dá para fazer com as ferramentas nativas do macOS e depois mostrar como a versão para macOS do Disk Mop reúne essa mesma limpeza em poucos cliques. Siga os passos na ordem e você deve ver uma quantidade bem visível de espaço voltar.",
      ],
      sections: [
        {
          title: "O que entra nos dados do sistema de um Mac?",
          content: [
            "Os dados do sistema são os sucessores da categoria que as versões antigas do macOS chamavam de Outros. Lá dentro há uma mistura bem variada: caches de aplicativos e arquivos temporários, logs do sistema e dos apps, arquivos de troca da memória virtual, instantâneos locais do Time Machine, arquivos de suporte de aplicativos, plug-ins e extensões, imagens de disco e arquivos compactados, além dos backups antigos de iPhone e iPad que o Finder guarda no seu disco.",
            "O motivo de a categoria parecer tão vaga é simples: o macOS joga ali tudo o que não cabe em uma gaveta clara como Aplicativos, Fotos ou Documentos. É também por isso que o número oscila, às vezes no mesmo dia: o arquivo de troca cresce quando falta memória e o Time Machine cria novos instantâneos locais em silêncio. Ver essa categoria chegar a dezenas de gigabytes é completamente normal.",
            "Uma tranquilizada antes de sair apagando: nem todo dado do sistema é lixo. O macOS gerencia os arquivos de troca sozinho e afina automaticamente os instantâneos locais quando o disco começa a encher. O objetivo não é zerar a categoria, e sim remover a parte vencida que pode ser apagada com segurança: caches antigos, logs, backups em desuso e arquivos grandes esquecidos.",
          ],
        },
        {
          title: "Confira a divisão do armazenamento nos Ajustes do Sistema",
          content: [
            "O primeiro passo é enxergar com o que você está lidando. No macOS Ventura e versões mais recentes, abra o menu Apple, escolha Ajustes do Sistema, vá em Geral e abra a tela de Armazenamento. A barra colorida pode levar alguns minutos para calcular; quando terminar, passe o cursor por cada trecho para ver quanto cada categoria ocupa. No macOS Monterey e anteriores, a mesma visão fica no menu Apple, em “Sobre Este Mac”, na aba Armazenamento.",
            "Essa tela também traz as recomendações da própria Apple: guardar arquivos no iCloud, uma opção de otimização que remove filmes e séries que você já assistiu e um ajuste que esvazia o Lixo automaticamente depois de 30 dias. Dá ainda para abrir a categoria Aplicativos na lista e apagar dali mesmo os apps grandes que você não abre há meses.",
            "A tela tem uma limitação grande, porém: a linha dos dados do sistema não é clicável. A Apple não oferece nenhum detalhamento do que existe ali dentro, e é justamente por isso que você precisa dos passos manuais das próximas seções ou de um analisador de disco que mostre a unidade arquivo por arquivo.",
          ],
        },
        {
          title: "Limpe caches, logs e downloads antigos com segurança",
          content: [
            "O ponto de partida mais seguro são os caches dos navegadores, porque eles se refazem sozinhos depois da exclusão. No Safari, ative o menu Desenvolvedor pela seção Avançado dos ajustes do Safari e use-o para esvaziar os caches. No Chrome, no Firefox e no Edge, a opção de limpar dados de navegação, nos ajustes de privacidade, faz exatamente o mesmo trabalho.",
            "Para os caches de usuário, abra o Finder, escolha Ir e depois Ir para Pasta (Shift-Command-G) e digite ~/Library/Caches. Abra as pastas dos apps que você reconhece e apague o conteúdo delas, não as pastas em si. Nunca apague a pasta Biblioteca inteira nem mexa em nada dentro de /System: esse é exatamente o conselho arriscado de fórum que este guia existe para substituir. Os arquivos de log podem ser revisados do mesmo jeito em ~/Library/Logs. Reinicie o Mac depois, o que também limpa os arquivos de troca que contam nos dados do sistema.",
            "A pasta Downloads é outra consumidora silenciosa de espaço. Ordene por tamanho e por data: instaladores .dmg antigos e arquivos compactados que você já usou quase sempre podem ir embora sem dó. O Disk Mop junta essas três tarefas no mesmo lugar: o limpador de cache (Cache Cleaner) cuida dos caches do sistema e dos aplicativos, o limpador de cache de navegadores (Browser Cache Cleaner) cobre Chrome, Firefox, Edge e Safari, e o limpador de downloads (Downloads Cleaner) separa os arquivos antigos por categoria para você limpar em um clique.",
            "Falta ainda um item escondido que merece destaque: os instantâneos locais do Time Machine. No Terminal, o comando tmutil listlocalsnapshots / lista os instantâneos que estão no seu disco agora. O macOS apaga esses arquivos por conta própria quando o espaço aperta, mas, se você precisa de espaço na hora, pode executar tmutil deletelocalsnapshots seguido da data do instantâneo.",
          ],
        },
        {
          title: "Esvazie o Lixo e remova os arquivos duplicados",
          content: [
            "Os arquivos que estão no Lixo não sumiram de verdade: eles continuam ocupando espaço em disco. Clique no ícone do Lixo no Dock segurando a tecla Control e escolha esvaziar ou, melhor ainda, abra os ajustes do Finder, vá em Avançado e ative a opção que remove os itens do Lixo depois de 30 dias. Só esse ajuste já impede que o armazenamento encha de novo em silêncio.",
            "Backups antigos de iPhone e iPad são outro item invisível dos dados do sistema, e cada um pode pesar vários gigabytes. Conecte o aparelho, selecione-o na barra lateral do Finder e use o botão de gerenciar backups na aba Geral para apagar os que você não precisa mais. Como ficam bem no fundo da pasta Biblioteca, a maioria das pessoas nem desconfia que eles existem.",
            "Arquivos duplicados são o desperdício de espaço que mais passa batido: fotos exportadas duas vezes, documentos baixados de novo e de novo, pastas copiadas por precaução e esquecidas. Caçar tudo isso na mão pode levar horas. O detector de duplicados (Duplicate Detector) do Disk Mop compara os arquivos pelo hash SHA-256, ou seja, só marca cópias idênticas byte a byte: apagar uma delas é completamente seguro.",
          ],
        },
        {
          title: "Veja com um treemap o que realmente enche o seu disco",
          content: [
            "O problema central na briga contra os dados do sistema é a invisibilidade: a Apple informa o total, mas nunca mostra o conteúdo. Uma visualização em treemap resolve isso na raiz. Cada pasta do disco aparece como um retângulo proporcional ao espaço que ela ocupa, então os maiores consumidores saltam aos olhos logo de cara.",
            "A análise de disco (Disk Analysis) do Disk Mop varre a unidade e monta exatamente essa visão em treemap. Uma pasta de cache que saiu do controle, uma imagem de máquina virtual esquecida ou uma pilha de imagens de disco de anos atrás ficam evidentes em segundos. O localizador de arquivos grandes (Large File Finder) completa o quadro listando, em uma única tela, todos os arquivos acima de 500 MB.",
            "O Disk Mop roda nativamente no macOS 12 e versões mais recentes, tanto em Macs com Apple Silicon quanto com Intel, e é notarizado pela Apple. Você fica no comando o tempo todo: o app só mostra o que encontrou e nada é removido sem a sua conferência. Se você usa Windows e Mac, o mesmo aplicativo cobre as duas plataformas.",
          ],
        },
        {
          title: "Impeça que os dados do sistema voltem a crescer",
          content: [
            "Limpar os dados do sistema não é tarefa de uma vez só: caches e logs se refazem por projeto. Uma olhada rápida na tela de armazenamento uma vez por mês já permite perceber o crescimento cedo, o que é muito mais tranquilo do que encarar uma faxina maratona no dia em que aparece o aviso de disco cheio.",
            "Alguns hábitos simples fazem uma diferença enorme: reinicie o Mac com regularidade para que os arquivos de troca sejam limpos, mantenha ligado o esvaziamento automático do Lixo, desinstale por completo os aplicativos que você não usa mais e dê uma revisada na pasta Downloads no fim de cada mês.",
            "Se você prefere deixar a rotina no piloto automático, a limpeza agendada (Scheduled Cleanup) do Disk Mop cria tarefas semanais ou mensais que limpam caches, removem downloads antigos e esvaziam o Lixo por você. O recurso Acelerar (Speed Up) roda essa mesma limpeza na hora que você quiser, em um clique, e a pontuação de saúde do sistema (System Health Score) mostra a condição geral do Mac de relance.",
          ],
        },
      ],
      verdict: [
        "Os dados do sistema no Mac assustam à primeira vista, mas viram uma categoria bem administrável quando você entende o que alimenta esse número. Conferir a divisão do armazenamento, limpar caches e logs com segurança, remover downloads antigos e backups de aparelhos, esvaziar o Lixo, apagar duplicados e enxergar o disco em um treemap: esses seis passos recuperam gigabytes de espaço sem nunca encostar nos conselhos arriscados de apagar a pasta Biblioteca que circulam nos fóruns.",
        "O Disk Mop reúne os seis passos em um app só: análise de disco, localizador de arquivos grandes, detector de duplicados, limpador de cache e limpeza agendada trabalham juntos no macOS. Dá para baixar de graça e testar o essencial, e um pagamento único de 19,90 $ libera todos os recursos com licença vitalícia.",
      ],
      ctaText: "Libere espaço no seu Mac com o Disk Mop",
    },
    ja: {
      title: "Macのシステムデータを削除する方法｜安全な6つの手順",
      metaDescription:
        "Macの「システムデータ」が容量を圧迫していませんか。この分類に何が含まれるのかを整理し、キャッシュの削除からローカルスナップショットの扱いまで、元に戻せる安全な6つの手順で空き容量を取り戻す方法を解説します。",
      subtitle: "macOSで最も分かりにくいストレージ分類を安全に減らすための手引き",
      intro: [
        "Macの「システムデータ」（System Data）は、キャッシュ、ログファイル、仮想メモリのスワップファイル、Time Machineのローカルスナップショットなど、macOSが「アプリケーション」や「書類」といった分類に振り分けられなかったものをまとめて放り込む受け皿の分類です。この領域を安全に減らすには、キャッシュと古いダウンロードを整理し、不要になったバックアップを削除し、「ゴミ箱」を空にして、重複ファイルを取り除けば十分です。危険を伴うシステムフォルダの削除は必要ありません。",
        "多くのMacでシステムデータは数十ギガバイトにまで膨らみますが、Appleはその中身を具体的に見せてくれません。フォーラムでよく見かけるのは「ライブラリ」フォルダの中身をまとめて削除するという助言ですが、これはアプリの動作を壊し、データを失う原因になります。この記事はその逆を行きます。安全で、元に戻せて、最後まで自分の判断で進められる6つの方法を紹介します。",
        "まずはmacOSの標準機能だけでできる手動の手順を説明し、そのうえで、同じ作業を数クリックにまとめてくれるDisk MopのmacOS版がどのように役立つかを見ていきます。手順どおりに順番に進めれば、目に見える量の空き容量が戻ってくるはずです。",
      ],
      sections: [
        {
          title: "Macのシステムデータには何が含まれるのか",
          content: [
            "システムデータは、以前のmacOSで「その他」と呼ばれていた分類の後継にあたります。中身は実に多彩で、アプリのキャッシュや一時ファイル、システムとアプリのログ、仮想メモリのスワップファイル、Time Machineのローカルスナップショット、アプリケーションサポートのファイル、プラグインや機能拡張、ディスクイメージやアーカイブ、さらにFinderがディスク上に保存している古いiPhoneやiPadのバックアップまでが含まれます。",
            "この分類が分かりにくく感じられる理由は単純です。macOSは「アプリケーション」「写真」「書類」のようにきれいに分けられないものを、すべてここにまとめてしまうからです。数値が同じ1日のうちにも変動するのはそのためで、メモリが逼迫すればスワップファイルが大きくなり、Time Machineは裏で新しいローカルスナップショットを作成します。この分類が数十ギガバイトに達していても、まったく珍しいことではありません。",
            "削除を始める前に、安心材料を1つ挙げておきます。システムデータのすべてが不要なごみというわけではありません。スワップファイルはmacOS自身が管理しており、ディスクの空きが減ってくるとローカルスナップショットは自動的に間引かれます。目指すのはこの分類をゼロにすることではなく、安全に削除できる古い部分 — 使われなくなったキャッシュやログ、不要なバックアップ、忘れられた大きなファイル — を取り除くことです。",
          ],
        },
        {
          title: "「システム設定」でストレージの内訳を確認する",
          content: [
            "最初の一歩は、状況を正確に把握することです。macOS Ventura以降では、アップルメニューから「システム設定」を開き、「一般」に進んで「ストレージ」の画面を表示します。色分けされたバーの計算には数分かかることがありますが、完了後は各区画にポインタを重ねると、分類ごとの使用量を確認できます。macOS Monterey以前では、アップルメニューの「このMacについて」にある「ストレージ」タブに同じ画面があります。",
            "この画面には、Apple自身が用意した推奨項目も並びます。ファイルをiCloudに保存する設定、視聴済みの映画やテレビ番組を自動的に削除する「ストレージを最適化」、そして30日経過した項目を「ゴミ箱」から自動で消す設定です。分類の一覧から「アプリケーション」を開けば、何か月も起動していない容量の大きいアプリをその場で削除することもできます。",
            "ただし、この画面には大きな弱点があります。「システムデータ」の行はクリックできないのです。Appleは中身の内訳をいっさい示してくれません。だからこそ、次の章から紹介する手動の手順か、ドライブの中身をファイル単位で見せてくれるディスク分析ツールが必要になります。",
          ],
        },
        {
          title: "キャッシュ・ログ・古いダウンロードを安全に整理する",
          content: [
            "最も安全な出発点はブラウザーのキャッシュです。削除しても必要に応じて自動的に作り直されるからです。Safariでは、設定の「詳細」から「開発」メニューを表示できるようにし、そのメニューからキャッシュを空にします。Chrome、Firefox、Edgeでは、プライバシー関連の設定にある閲覧データの削除が同じ役割を果たします。",
            "ユーザー領域のキャッシュを見るには、Finderの「移動」メニューから「フォルダへ移動」（Shift-Command-G）を選び、~/Library/Caches と入力します。見覚えのあるアプリのフォルダを開き、その中身だけを削除してください。フォルダそのものは残します。「ライブラリ」フォルダをまとめて削除したり、/System 以下に手を出したりしては絶対にいけません。まさにこれが、この記事で置き換えたい危険なフォーラムの助言です。ログファイルも同じ方法で ~/Library/Logs から確認できます。作業後にMacを再起動すると、システムデータに含まれるスワップファイルも整理されます。",
            "「ダウンロード」フォルダも、静かに容量を食い続ける存在です。サイズと日付で並べ替えてみてください。役目を終えた .dmg のインストーラーや、すでに展開したアーカイブは、たいていためらわずに削除できます。Disk Mopはこの3つの作業を1か所にまとめています。キャッシュ クリーナー（Cache Cleaner）がシステムとアプリのキャッシュを、ブラウザーキャッシュ クリーナー（Browser Cache Cleaner）がChrome、Firefox、Edge、Safariを受け持ち、ダウンロード クリーナー（Downloads Cleaner）は古いファイルを種類ごとに整理して、ワンクリックで削除できるようにします。",
            "もう1つ、見えにくい項目に触れておきます。Time Machineのローカルスナップショットです。ターミナルで tmutil listlocalsnapshots / を実行すると、現在ディスク上にあるスナップショットの一覧が表示されます。空き容量が不足すればmacOSが自動的に削除しますが、すぐに容量が必要な場合は tmutil deletelocalsnapshots にスナップショットの日付を続けて実行できます。",
          ],
        },
        {
          title: "「ゴミ箱」を空にして重複ファイルを削除する",
          content: [
            "「ゴミ箱」に入れたファイルは、まだ消えたわけではありません。ディスクの容量を占め続けています。Dockの「ゴミ箱」アイコンをControlキーを押しながらクリックして空にするか、より確実な方法として、Finder設定の「詳細」を開き、30日経過した項目を自動的に削除するオプションを有効にしてください。この設定1つで、気づかないうちに容量が埋まっていく事態を防げます。",
            "古いiPhoneやiPadのバックアップも、システムデータの見えない構成要素です。1つで数ギガバイトに達することも珍しくありません。デバイスをMacに接続し、Finderのサイドバーで選択したうえで、「一般」タブのバックアップ管理ボタンから不要なものを削除します。「ライブラリ」フォルダの奥深くに保存されているため、その存在に気づいていない方がほとんどです。",
            "重複ファイルは、最も見落とされやすい容量の無駄です。2回書き出した写真、何度もダウンロードし直した書類、念のためコピーしたまま忘れられたフォルダなどが積み重なります。手作業で探し出すには何時間もかかりかねません。Disk Mopの重複ファイル検出（Duplicate Detector）はSHA-256のハッシュ値でファイルを比較するため、1バイトまで完全に同じコピーだけが対象になります。そのため、片方を削除しても安全です。",
          ],
        },
        {
          title: "ツリーマップでディスクを圧迫している中身を見る",
          content: [
            "システムデータと向き合ううえで根本的な問題になるのが、中身が見えないことです。Appleは合計値を示すだけで、内訳は教えてくれません。ツリーマップによる可視化は、この問題を根本から解決します。ディスク上のフォルダが、それぞれの使用容量に比例した長方形として描かれるため、容量を大きく使っている場所がひと目で浮かび上がります。",
            "Disk Mopのディスク分析（Disk Analysis）は、ドライブをスキャンしてまさにこのツリーマップ表示を作り出します。制御を失って肥大化したキャッシュフォルダ、忘れられた仮想マシンのイメージ、何年も置きっぱなしのディスクイメージが、数秒ではっきりと分かります。大容量ファイル検索（Large File Finder）は、500 MBを超えるファイルを1つの画面にまとめて表示し、分析を補います。",
            "Disk MopはmacOS 12以降にネイティブ対応し、Apple SiliconのMacでもIntelのMacでも動作します。Appleの公証（notarization）も受けています。判断の主導権は常に利用者の側にあります。アプリは見つけた内容を示すだけで、確認を経ずに何かが削除されることはありません。WindowsとMacを併用している場合も、同じアプリで両方をカバーできます。",
          ],
        },
        {
          title: "システムデータが再び膨らむのを防ぐ",
          content: [
            "システムデータの整理は、一度やって終わりの作業ではありません。キャッシュやログは、仕組みのうえで必ず作り直されるからです。月に1度ストレージの画面をのぞいて増え方を早めに把握しておけば、ディスクの空き容量不足の警告が出てから何時間もかけて掃除するより、はるかに楽に済みます。",
            "いくつかの簡単な習慣が大きな差を生みます。スワップファイルが整理されるようMacを定期的に再起動する、「ゴミ箱」の自動削除設定を有効なままにしておく、使わなくなったアプリは完全にアンインストールする、月末に「ダウンロード」フォルダをざっと見直す。この4つです。",
            "この一連の作業を自動化したい場合は、Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）が役に立ちます。週次または月次のタスクを作成し、キャッシュの整理、古いダウンロードの削除、「ゴミ箱」を空にする処理を代わりに実行します。ワンクリックの高速化機能（Speed Up）は同じ処理を好きなタイミングで実行でき、システムの健全性スコア（System Health Score）はMac全体の状態をひと目で示します。",
          ],
        },
      ],
      verdict: [
        "Macのシステムデータは一見手ごわそうに見えますが、何がその容量を生んでいるのかが分かれば、十分に管理できる分類です。ストレージの内訳を確認する、キャッシュとログを安全に整理する、古いダウンロードとデバイスのバックアップを削除する、「ゴミ箱」を空にする、重複ファイルを取り除く、ツリーマップでディスクを可視化する。この6つの手順だけで、フォーラムで見かける危険な「ライブラリ」フォルダ削除にいっさい手を出すことなく、数ギガバイト規模の空き容量を取り戻せます。",
        "Disk Mopは、この6つの手順を1つのアプリにまとめています。ディスク分析、大容量ファイル検索、重複ファイル検出、キャッシュ クリーナー、スケジュール クリーンアップが、macOS上で連携して動作します。基本機能は無料でダウンロードして試すことができ、19.90ドルの買い切りですべての機能が永続ライセンスとして使えるようになります。",
      ],
      ctaText: "Disk MopでMacの空き容量を取り戻しましょう",
    },
  },
};
