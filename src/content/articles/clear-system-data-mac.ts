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
        'Disk Mop tüm bu adımları tek uygulamada birleştirir: Disk Analizi, Büyük Dosya Bulucu, Yinelenen Dosya Dedektörü, Önbellek Temizleyici ve Zamanlanmış Temizlik macOS üzerinde bir arada çalışır. Uygulamayı ücretsiz indirip deneyebilir, tüm özellikler için 9,90 dolarlık tek seferlik ödemeyle ömür boyu lisansa geçebilirsiniz.',
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
        'Disk Mop combines all six steps in one app: Disk Analysis, the Large File Finder, the Duplicate Detector, the Cache Cleaner and Scheduled Cleanup all work together on macOS. You can download it for free to try the essentials, and a one-time payment of $9.90 unlocks every feature with a lifetime license.',
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
        'Auf vielen Macs wachsen die Systemdaten auf Dutzende Gigabyte an, und Apple zeigt nie, was genau darin steckt. In Foren wird oft empfohlen, den Library-Ordner pauschal zu leeren — das kann jedoch Apps beschädigen und Daten kosten. Dieser Leitfaden zeigt stattdessen sechs sichere, umkehrbare Methoden.',
        'Wir beginnen mit den manuellen Schritten über die Bordmittel von macOS und zeigen anschließend, wie die macOS-Version von Disk Mop dieselbe Bereinigung auf wenige Klicks reduziert.',
      ],
      sections: [
        {
          title: 'Was zählt auf dem Mac zu den Systemdaten?',
          content: [
            'Systemdaten sind der Nachfolger der Kategorie, die ältere macOS-Versionen als Andere bezeichneten. Darin stecken App-Caches und temporäre Dateien, System- und App-Protokolle, Auslagerungsdateien, lokale Time-Machine-Schnappschüsse, App-Support-Dateien, Plug-ins, Disk-Images und Archive sowie alte iPhone- und iPad-Backups, die der Finder auf dem Laufwerk ablegt.',
            'Die Kategorie wirkt so vage, weil macOS schlicht alles hineinpackt, was nicht in klare Kategorien wie Apps oder Fotos passt. Deshalb schwankt die Größe auch ständig: Die Auslagerungsdatei wächst bei Speicherdruck, und Time Machine erstellt im Hintergrund neue Schnappschüsse. Werte von mehreren Dutzend Gigabyte sind völlig normal.',
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
            'Dateien im Papierkorb sind nicht wirklich gelöscht — sie belegen weiter Speicherplatz. Klicken Sie mit gedrückter Control-Taste auf das Papierkorb-Symbol im Dock und leeren Sie ihn, oder aktivieren Sie besser in den Finder-Einstellungen unter Erweitert das automatische Entfernen von Objekten nach 30 Tagen.',
            'Alte iPhone- und iPad-Backups sind ein weiterer unsichtbarer Posten der Systemdaten und können jeweils mehrere Gigabyte belegen. Verbinden Sie das Gerät, wählen Sie es in der Finder-Seitenleiste aus und löschen Sie über die Backup-Verwaltung im Tab Allgemein die Sicherungen, die Sie nicht mehr brauchen.',
            'Doppelte Dateien sind die am häufigsten übersehene Platzverschwendung: doppelt exportierte Fotos, mehrfach heruntergeladene Dokumente, kopierte und vergessene Ordner. Disk Mops Duplikat-Detektor vergleicht Dateien per SHA-256-Hash — markiert werden nur Byte für Byte identische Kopien, das Löschen einer Kopie ist also völlig sicher.',
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
        'Disk Mop vereint alle sechs Schritte in einer App: Festplattenanalyse, Große-Dateien-Finder, Duplikat-Detektor, Cache-Bereiniger und geplante Bereinigung arbeiten unter macOS zusammen. Der Download ist kostenlos, und eine einmalige Zahlung von 9,90 US-Dollar schaltet mit lebenslanger Lizenz alle Funktionen frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Ihrem Mac',
    },
  },
};
