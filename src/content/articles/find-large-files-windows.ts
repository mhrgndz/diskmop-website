import type { Article } from '../types';

export const findLargeFilesWindows: Article = {
  slug: 'find-large-files-windows',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-06-29',
  readingTime: 6,
  content: {
    tr: {
      title: 'Windows\'ta Büyük Dosyaları Bulmanın En Hızlı 3 Yolu',
      metaDescription:
        'Windows\'ta büyük dosyaları bulma yöntemleri: Dosya Gezgini boyut filtreleri, treemap analizi ve otomatik 500 MB taraması ile disk alanınızı geri kazanın.',
      subtitle: 'Dosya Gezgini filtrelerinden treemap analizine: diskinizi dolduran dosyaları dakikalar içinde bulun',
      intro: [
        'Windows 10 ve 11\'de büyük dosyaları bulmanın en hızlı yolu, Dosya Gezgini\'ni açıp Bu Bilgisayar görünümündeyken arama kutusuna size:gigantic yazmaktır; bu komut 4 GB\'ın üzerindeki tüm dosyaları listeler. Daha kapsamlı bir bakış için, treemap görünümlü bir disk analiz aracı sabit diskinizde neyin yer kapladığını tek bakışta gösterir. İki yöntem de beş dakikadan kısa sürer ve bu rehberde her adımı tek tek göreceksiniz.',
        'Diskler sessizce dolar: unutulmuş bir video dışa aktarımı, eski bir sanal makine diski veya artık oynamadığınız bir oyun onlarca gigabayt yutabilir. Bu rehber bir beceri merdiveni gibi ilerliyor: önce Dosya Gezgini\'nin az bilinen boyut arama operatörleri, ardından görsel treemap analizi ve son olarak 500 MB üzerindeki dosyaları otomatik yakalayan bir tarama. Sonunda diskinizi dolduran her büyük dosyayı bulabilecek ve ne yapacağınıza güvenle karar verebileceksiniz.',
      ],
      sections: [
        {
          title: 'Büyük Dosyalar Windows\'ta Neden Bu Kadar İyi Gizlenir',
          content: [
            'Dosya Gezgini varsayılan olarak klasörlerin boyutunu göstermez ve boyuta göre sıralama yalnızca o an içinde bulunduğunuz klasör için çalışır. Bu yüzden üç klasör derinlikte gömülü 20 GB\'lık bir dosya hiçbir zaman gözünüze çarpmaz. Üstüne, Windows sistem dosyalarını ve bazı klasörleri varsayılan olarak gizler; yani en büyük alan tüketicilerinin bir kısmı normal gezinmede hiç görünmez.',
            'İlk hızlı kontrol için Ayarlar, Sistem ve Depolama yolunu izleyin. Hem Windows 10 hem Windows 11, diskinizi uygulamalar, geçici dosyalar ve belgeler gibi kategorilere ayırarak gösterir. Bu ekran yönünüzü bulmak için iyidir, ancak kategori düzeyinde kalır: size diğer dosyaların 120 GB tuttuğunu söyler, hangi dosyaların tuttuğunu söylemez. Bilgisayardaki en büyük dosyaları tek tek görmek için aşağıdaki üç tekniğe ihtiyacınız var.',
          ],
        },
        {
          title: 'Dosya Gezgini\'nin Boyut Filtrelerini Kullanın (size:gigantic)',
          content: [
            'Dosya Gezgini\'ni açın ve tüm diski kapsaması için Bu Bilgisayar\'ı ya da doğrudan C: sürücüsünü seçin. Sağ üstteki arama kutusuna tıklayıp size: yazdığınızda Windows hazır filtreler önerir: Boş (0 KB), Çok küçük (16 KB\'a kadar), Küçük (16 KB - 1 MB), Orta (1 - 128 MB), Büyük (128 MB - 1 GB), Çok büyük (1 - 4 GB) ve Devasa (4 GB üzeri). En hızlı sonuç için size:gigantic filtresiyle 4 GB üzerindeki dosyaları listeleyin.',
            'Hazır aralıklar yetmezse kendi eşiğinizi yazabilirsiniz: size:>500MB veya size:>1GB gibi. Sonuçlar geldiğinde görünümü Ayrıntılar\'a çevirin ve Boyut sütununa tıklayarak büyükten küçüğe sıralayın. Gizli dosyaları da yakalamak için Windows 11\'de Görünüm, Göster ve Gizli öğeler seçeneğini, Windows 10\'da Görünüm sekmesindeki Gizli öğeler kutusunu işaretleyin.',
            'İki uyarı: pagefile.sys ve hiberfil.sys gibi sistem dosyalarına ve Windows klasörünün içindeki hiçbir dosyaya dokunmayın; bunlar işletim sisteminin çalışması için gereklidir. Ayrıca bu yöntemin sınırını bilin: dizinlenmemiş sürücülerde arama uzun sürebilir ve sonuç, hangi klasörlerin şiştiğini göstermeyen düz bir listedir.',
          ],
        },
        {
          title: 'Alan Yiyenleri Treemap ile Görsel Olarak Tespit Edin',
          content: [
            'Treemap, diskinizin tamamını iç içe dikdörtgenler olarak çizen bir görselleştirmedir: her dikdörtgenin alanı, o dosya veya klasörün kapladığı yerle orantılıdır. Dev bloklar anında göze çarpar ve düz arama listesinin çözemediği soruyu yanıtlar: ağırlık klasör ağacının neresinde? Tek bakışta videolar klasörünüzün mü, yoksa unutulmuş bir yedekleme klasörünün mü şiştiğini görürsünüz.',
            'Yıllardır var olan ücretsiz treemap araçları bu işi görür ve hakkını teslim etmek gerekir; ancak çoğunun arayüzü eskimiştir ve büyük disklerde tarama yavaş olabilir. Teknik kullanıcılar için sorun değil, ama sonucu hızlıca görüp temizliğe geçmek isteyenler için sürtünme yaratır.',
            'Disk Mop\'un disk analizi (Disk Analysis) özelliği, sürücünüzü tarayıp etkileşimli bir treemap çıkarır: en çok yer kaplayan klasörleri anında görür, bir klasöre tıklayarak içine iner ve her öğenin toplam alandaki payını okursunuz. Aynı deneyim hem Windows 10 ve 11\'de hem de macOS\'te aynı şekilde çalışır.',
          ],
        },
        {
          title: '500 MB Üzerindeki Dosyaları Otomatik Tarayın',
          content: [
            'Manuel aramalar anlık fotoğraflardır: operatör sözdizimini hatırlamanız, her sürücü için aramayı tekrarlamanız ve sonuçları kendiniz ayıklamanız gerekir. Otomatik bir büyük dosya taraması bu denklemi tersine çevirir: eşiği bir kez tanımlarsınız, araç tüm diski gezip sonuçları hazır getirir.',
            'Disk Mop\'un büyük dosya bulucusu (Large File Finder) tam olarak bunu yapar: 500 MB\'ın üzerindeki her dosyayı tespit eder ve konumlarıyla birlikte boyuta göre sıralı bir listede sunar. Konum bilgisi önemlidir, çünkü bir dosyanın silinip silinemeyeceğine ancak nerede durduğunu görerek karar verebilirsiniz. Treemap ile birlikte kullanıldığında hem genel harita hem de ayrıntılı döküm elinizde olur.',
            'Pratik bir iş akışı önerisi: taramayı çalıştırın, listenin en üstündeki on dosyayı tek tek gözden geçirin. Geri kazanılabilir alanın büyük kısmı neredeyse her zaman bu ilk sayfadadır; eski disk görüntüleri, video dosyaları ve unutulmuş indirmeler listenin tepesinde toplanır.',
          ],
        },
        {
          title: 'Neyi Sileceğinize, Taşıyacağınıza veya Arşivleyeceğinize Karar Verin',
          content: [
            'Bulduğunuz her büyük dosya için üç kutu kuralını uygulayın. Silin: kurulumu çoktan bitmiş yükleyiciler, eski ISO görüntüleri, süresi geçmiş yedekler ve bariz kopyalar. Taşıyın: saklamak istediğiniz ama nadiren açtığınız video arşivleri ve fotoğraf koleksiyonlarını harici bir diske veya ağ depolamasına aktarın. Arşivleyin: artık aktif olmayan proje klasörlerine sağ tıklayıp sıkıştırılmış klasöre göndererek yerinde küçültün.',
            'Güvenlik kuralları basittir: Windows klasöründen veya program kurulum klasörlerinden asla dosya silmeyin ve emin olmadığınız bir dosya adını önce araştırın. Sildiğiniz dosyaların Geri Dönüşüm Kutusu\'na gittiğini ve kutu boşaltılana kadar diskte yer kaplamaya devam ettiğini de unutmayın.',
            'Büyük dosyaların şaşırtıcı bir bölümü aslında kopyadır: aynı videonun iki dışa aktarımı, aynı fotoğraf klasörünün iki yedeği gibi. Disk Mop\'un yinelenen dosya dedektörü (Duplicate Detector) dosyaları SHA-256 özetiyle karşılaştırır; böylece adları farklı olsa bile içeriği birebir aynı olan kopyaları güvenle yakalarsınız.',
          ],
        },
        {
          title: 'Büyük Dosyaları Kontrol Altında Tutun',
          content: [
            'Çoğu bilgisayarda bir numaralı suçlu İndirilenler klasörüdür: yükleyiciler, ZIP arşivleri ve videolar sessizce birikir. Ayda bir kez klasörü boyuta göre sıralayıp tepedeki dosyaları gözden geçirmeyi alışkanlık haline getirin; bu beş dakikalık kontrol, diskin bir daha fark ettirmeden dolmasını engeller.',
            'Windows\'un yerleşik Depolama Algılayıcısı (Ayarlar, Sistem, Depolama yolunda) geçici dosyaları ve Geri Dönüşüm Kutusu\'nu otomatik temizleyebilir; bu iyi bir temel sağlar ve açık kalmasında fayda var. Ancak sizin oluşturduğunuz büyük dosyalara, video arşivlerine veya eski indirmelere dokunmaz; onlar için düzenli bir tarama gerekir.',
            'Disk Mop bu rutini otomatikleştirir: zamanlanmış temizlik (Scheduled Cleanup) haftalık veya aylık bakım görevleri kurar, indirilenler temizleyicisi ise İndirilenler klasörünüzdeki eski dosyaları kategorilere ayırarak gösterir. Büyük dosya taramasını da düzenli aralıklarla yeniden çalıştırdığınızda disk doluluğu bir daha sürpriz olmaz.',
          ],
        },
      ],
      verdict: [
        'Windows\'ta büyük dosyaları bulmak üç beceri katmanından oluşur: hızlı bir kontrol için Dosya Gezgini\'nde size:gigantic araması, diskin genel haritası için treemap analizi ve rutin denetim için 500 MB üzerini tarayan otomatik bir araç. Bu üçünü birlikte kullandığınızda, on beş dakikalık bir oturumda onlarca gigabayt alanı geri kazanmak çoğu bilgisayarda gerçekçi bir hedeftir.',
        'Disk Mop bu iş akışının tamamını tek uygulamada toplar: disk analizi treemap\'i, 500 MB üzerini bulan büyük dosya bulucu, SHA-256 tabanlı yinelenen dosya dedektörü ve zamanlanmış temizlik. Ücretsiz sürümle deneyebilir, tüm özellikleri 19,90 dolarlık tek seferlik ömür boyu lisansla açabilirsiniz.',
      ],
      ctaText: 'Disk Mop ile en büyük dosyalarınızı bulun',
    },
    en: {
      title: 'How to Find Large Files on Windows 10 and 11 Fast',
      metaDescription:
        'Learn how to find large files on Windows 10 and 11 using File Explorer size filters, treemap analysis, and an automatic 500 MB scan. Free up gigabytes today.',
      subtitle: 'From hidden size: search operators to treemap analysis — track down the files eating your disk in minutes',
      intro: [
        'The fastest way to find large files on Windows 10 and 11 is to open File Explorer, select This PC, and type size:gigantic in the search box — this lists every file over 4 GB. For a fuller picture, a disk analysis tool with a treemap view shows exactly what is taking up space on your hard drive at a glance. Both methods take under five minutes, and this guide walks through each one step by step.',
        'Drives fill up quietly. A forgotten video export, an old virtual machine disk, or a game you no longer play can swallow tens of gigabytes without ever crossing your screen. This guide is built as a skill progression: first File Explorer\'s little-known size search operators, then visual treemap analysis, and finally an automatic scan that catches every file over 500 MB. By the end, you\'ll be able to find the big files eating disk space and decide confidently what to do with each one.',
      ],
      sections: [
        {
          title: 'Why Big Files Hide So Well on Windows',
          content: [
            'File Explorer doesn\'t show folder sizes by default, and sorting by size only works within the folder you\'re currently viewing. That\'s why a 20 GB file buried three folders deep never catches your eye. On top of that, Windows hides system files and certain folders by default, so some of the biggest space consumers are invisible during normal browsing.',
            'For a first quick check, open Settings, then System, then Storage. Both Windows 10 and Windows 11 break your drive down into categories such as apps, temporary files, and documents. This screen is good for orientation, but it stops at the category level: it tells you that other files take 120 GB, not which files. To see the largest files on your PC one by one, you need the three techniques below.',
          ],
        },
        {
          title: 'Use File Explorer\'s Size Filters (size:gigantic)',
          content: [
            'Open File Explorer and select This PC, or the C: drive directly, so the search covers everything. Click the search box in the top right and type size: — Windows suggests preset filters: Empty (0 KB), Tiny (up to 16 KB), Small (16 KB to 1 MB), Medium (1 to 128 MB), Large (128 MB to 1 GB), Huge (1 to 4 GB), and Gigantic (over 4 GB). For the quickest win, run the size:gigantic search in File Explorer to list everything above 4 GB.',
            'If the presets don\'t fit, type your own threshold, such as size:>500MB or size:>1GB. Once results load, switch to the Details view and click the Size column to sort largest first. To catch hidden files too, enable View, then Show, then Hidden items on Windows 11, or tick Hidden items on the View tab in Windows 10.',
            'Two warnings: leave system files like pagefile.sys and hiberfil.sys alone, and never delete anything inside the Windows folder — the operating system needs them. Also know this method\'s limits: searching unindexed drives can be slow, and the output is a flat list that doesn\'t show which folders are bloated.',
          ],
        },
        {
          title: 'Spot Space Hogs Visually with a Treemap',
          content: [
            'A treemap draws your entire drive as nested rectangles, where each rectangle\'s area is proportional to the space that file or folder occupies. Giant blocks jump out immediately, and the view answers the question a flat search list can\'t: where in the folder tree does the weight sit? In one glance you see whether it\'s your videos folder or a forgotten backup directory that has ballooned.',
            'Free treemap utilities have existed for years and genuinely do the job — credit where it\'s due. But many have dated interfaces and can be slow to scan large drives. That\'s fine for technical users, though it adds friction if you just want to see the result and move straight to cleanup.',
            'Disk Mop\'s Disk Analysis feature scans your drive and renders an interactive treemap: you instantly see which folders take the most space, click into any folder to drill down, and read each item\'s share of the total. The same experience works identically on Windows 10, Windows 11, and macOS.',
          ],
        },
        {
          title: 'Scan for Files Over 500 MB Automatically',
          content: [
            'Manual searches are snapshots: you have to remember the operator syntax, repeat the search for every drive, and sift the results yourself. An automatic large file scan flips that equation — you define the threshold once, and the tool sweeps the whole disk and delivers the results ready-sorted.',
            'Disk Mop\'s Large File Finder does exactly this: it detects every file over 500 MB and presents them in a list sorted by size, with each file\'s location shown. Location matters, because you can only judge whether a file is safe to remove once you see where it lives. Combined with the treemap, you get both the overview map and the detailed inventory.',
            'A practical workflow: run the scan, then review the top ten entries one by one. Most of the reclaimable space is almost always on that first page — old disk images, video files, and forgotten downloads cluster at the top of the list.',
          ],
        },
        {
          title: 'Decide What to Delete, Move or Archive',
          content: [
            'Apply the three-bucket rule to every large file you find. Delete: installers you already ran, old ISO images, expired backups, and obvious copies. Move: video archives and photo collections you want to keep but rarely open belong on an external drive or network storage. Archive: for project folders that are no longer active, right-click and compress them to a ZIP file to shrink them in place.',
            'The safety rules are simple: never delete files from the Windows folder or from program installation folders, and look up any file name you don\'t recognize before touching it. Remember too that deleted files go to the Recycle Bin and keep occupying disk space until you empty it.',
            'A surprising share of large files are actually duplicates — two exports of the same video, two backups of the same photo folder. Disk Mop\'s Duplicate Detector compares files by SHA-256 hash, so it safely catches copies whose content is truly identical even when the file names differ.',
          ],
        },
        {
          title: 'Keep Large Files Under Control',
          content: [
            'On most PCs, the number one offender is the Downloads folder: installers, ZIP archives, and videos pile up silently. Make it a habit to sort the folder by size once a month and review the files at the top — this five-minute check stops the disk from quietly filling up again.',
            'Windows\' built-in Storage Sense (under Settings, System, Storage) can automatically clean temporary files and the Recycle Bin; it\'s a solid baseline and worth keeping enabled. But it never touches your own large files, video archives, or old downloads — those need a recurring scan of their own.',
            'Disk Mop automates that routine: Scheduled Cleanup sets up weekly or monthly maintenance tasks, and the Downloads Cleaner categorizes the old files in your Downloads folder so you can clear them in bulk. Re-run the large file scan at regular intervals and a full disk will never take you by surprise again.',
          ],
        },
      ],
      verdict: [
        'Finding large files on Windows comes down to three layers of skill: a size:gigantic search in File Explorer for a quick check, a treemap analysis for the overall map of your drive, and an automatic scanner for files over 500 MB as your recurring audit. Use all three together and reclaiming tens of gigabytes in a fifteen-minute session is a realistic goal on most PCs.',
        'Disk Mop packs this entire workflow into one app: the Disk Analysis treemap, the Large File Finder for files over 500 MB, the SHA-256 based Duplicate Detector, and Scheduled Cleanup for maintenance. You can try it free, and a one-time $19.90 lifetime license unlocks everything.',
      ],
      ctaText: 'Find your largest files with Disk Mop',
    },
    de: {
      title: "Große Dateien unter Windows finden: 3 schnelle Methoden",
      metaDescription:
        "Große Dateien unter Windows 10 und 11 finden: mit Explorer-Größenfiltern, Treemap-Analyse und automatischem 500-MB-Scan Speicherplatz zurückgewinnen.",
      subtitle: "Vom versteckten size:-Suchoperator bis zur Treemap-Analyse — finden Sie die Speicherfresser in Minuten",
      intro: [
        "Der schnellste Weg, große Dateien unter Windows 10 und 11 zu finden: Öffnen Sie den Datei-Explorer, wählen Sie Dieser PC und tippen Sie size:gigantic in das Suchfeld — so werden alle Dateien über 4 GB aufgelistet. Für das vollständige Bild zeigt ein Analyse-Tool mit Treemap-Ansicht auf einen Blick, was den Speicherplatz auf Ihrer Festplatte belegt. Beide Methoden dauern keine fünf Minuten, und diese Anleitung führt Sie Schritt für Schritt durch jede davon.",
        "Festplatten füllen sich leise: ein vergessener Videoexport, eine alte VM-Festplatte oder ein Spiel, das Sie längst nicht mehr spielen, kann Dutzende Gigabyte verschlingen. Diese Anleitung ist als Stufenmodell aufgebaut: zuerst die wenig bekannten size:-Suchoperatoren des Datei-Explorers, dann die visuelle Treemap-Analyse und schließlich ein automatischer Scan für alle Dateien über 500 MB. Am Ende wissen Sie, wie Sie jede große Datei aufspüren, die Ihren Speicherplatz belegt, und können sicher entscheiden, was damit geschehen soll.",
      ],
      sections: [
        {
          title: "Warum sich große Dateien unter Windows so gut verstecken",
          content: [
            "Der Datei-Explorer zeigt standardmäßig keine Ordnergrößen an, und die Sortierung nach Größe funktioniert nur innerhalb des aktuell geöffneten Ordners. Eine 20-GB-Datei, die drei Ebenen tief vergraben liegt, fällt Ihnen deshalb nie auf. Zudem blendet Windows Systemdateien und bestimmte Ordner standardmäßig aus — einige der größten Speicherfresser bleiben beim normalen Durchstöbern unsichtbar.",
            "Für einen ersten Überblick öffnen Sie Einstellungen, dann System, dann Speicher. Windows 10 und 11 zeigen dort eine Aufschlüsselung nach Kategorien wie Apps, temporäre Dateien und Dokumente. Das hilft bei der Orientierung, bleibt aber auf Kategorieebene: Sie erfahren, dass andere Dateien 120 GB belegen, aber nicht welche. Um die größten Dateien einzeln zu sehen, brauchen Sie die drei folgenden Techniken.",
          ],
        },
        {
          title: "Größenfilter im Datei-Explorer nutzen (size:gigantic)",
          content: [
            "Öffnen Sie den Datei-Explorer und wählen Sie Dieser PC oder direkt das Laufwerk C:, damit die Suche alles erfasst. Klicken Sie oben rechts in das Suchfeld und tippen Sie size: — Windows schlägt daraufhin fertige Filter vor: Leer (0 KB), Winzig (bis 16 KB), Klein (16 KB bis 1 MB), Mittel (1 bis 128 MB), Groß (128 MB bis 1 GB), Riesig (1 bis 4 GB) und Gigantisch (über 4 GB). Der schnellste Treffer: Mit size:gigantic listen Sie alles über 4 GB auf.",
            "Passen die Voreinstellungen nicht, tippen Sie einfach Ihre eigene Schwelle ein, etwa size:>500MB oder size:>1GB. Wechseln Sie nach dem Laden der Ergebnisse in die Detailansicht und sortieren Sie per Klick auf die Spalte Größe absteigend. Um auch versteckte Dateien zu erfassen, aktivieren Sie unter Windows 11 Ansicht, dann Anzeigen, dann Ausgeblendete Elemente — unter Windows 10 finden Sie dasselbe Kontrollkästchen auf der Registerkarte Ansicht.",
            "Zwei Warnungen: Lassen Sie Systemdateien wie pagefile.sys und hiberfil.sys unangetastet und löschen Sie niemals etwas aus dem Windows-Ordner — das Betriebssystem braucht diese Dateien. Und beachten Sie die Grenzen der Methode: Auf nicht indizierten Laufwerken kann die Suche lange dauern, und das Ergebnis ist eine flache Liste, die nicht zeigt, welche Ordner aufgebläht sind.",
          ],
        },
        {
          title: "Speicherfresser visuell per Treemap aufspüren",
          content: [
            "Eine Treemap zeichnet Ihr gesamtes Laufwerk als verschachtelte Rechtecke, deren Fläche proportional zum belegten Speicherplatz ist. Riesige Blöcke springen sofort ins Auge, und die Ansicht beantwortet die Frage, die eine flache Suchliste nicht klären kann: Wo im Ordnerbaum sitzt das Gewicht? Auf einen Blick sehen Sie, ob Ihr Videoordner oder ein vergessenes Backup-Verzeichnis aus dem Ruder gelaufen ist.",
            "Kostenlose Treemap-Tools gibt es seit Jahren, und sie erfüllen ihren Zweck — Ehre, wem Ehre gebührt. Viele wirken jedoch veraltet und scannen große Laufwerke langsam. Für technisch versierte Nutzer ist das kein Problem, doch wer das Ergebnis nur schnell sehen und direkt aufräumen will, spürt die zusätzliche Reibung.",
            "Disk Mops Festplattenanalyse (Disk Analysis) scannt Ihr Laufwerk und rendert eine interaktive Treemap: Sie sehen sofort, welche Ordner am meisten Platz belegen, klicken sich in jeden Ordner hinein und lesen den Anteil jedes Elements am Gesamtspeicher ab. Dieselbe Ansicht funktioniert identisch unter Windows 10, Windows 11 und macOS.",
          ],
        },
        {
          title: "Dateien über 500 MB automatisch scannen",
          content: [
            "Manuelle Suchen sind Momentaufnahmen: Sie müssen sich die Operator-Syntax merken, die Suche für jedes Laufwerk wiederholen und die Ergebnisse selbst durchsehen. Ein automatischer Scan dreht das um — Sie definieren die Schwelle einmal, und das Tool durchsucht die gesamte Festplatte und liefert die Ergebnisse fertig sortiert.",
            "Disk Mops Große-Dateien-Finder (Large File Finder) erkennt jede Datei über 500 MB und listet sie nach Größe sortiert samt Speicherort auf. Der Speicherort ist entscheidend, denn nur wer sieht, wo eine Datei liegt, kann beurteilen, ob sie gelöscht werden darf. Zusammen mit der Treemap haben Sie beides zur Hand: die Übersichtskarte und die detaillierte Auflistung.",
            "Ein praktischer Arbeitsablauf: Starten Sie den Scan und prüfen Sie die zehn obersten Einträge einzeln. Der Großteil des rückgewinnbaren Speicherplatzes steckt fast immer auf dieser ersten Seite — alte Datenträgerabbilder, Videodateien und vergessene Downloads sammeln sich ganz oben in der Liste.",
          ],
        },
        {
          title: "Löschen, verschieben oder archivieren: die richtige Entscheidung",
          content: [
            "Wenden Sie auf jede gefundene Datei die Drei-Körbe-Regel an. Löschen: bereits ausgeführte Installationsprogramme, alte ISO-Abbilder, abgelaufene Backups und offensichtliche Kopien. Verschieben: Videoarchive und Fotosammlungen, die Sie behalten, aber selten öffnen, gehören auf eine externe Festplatte oder ein Netzwerklaufwerk. Archivieren: Nicht mehr aktive Projektordner lassen sich per Rechtsklick in eine ZIP-Datei komprimieren und schrumpfen so an Ort und Stelle.",
            "Die Sicherheitsregeln sind einfach: Löschen Sie nie Dateien aus dem Windows-Ordner oder aus Programmordnern, und recherchieren Sie jeden Dateinamen, den Sie nicht kennen, bevor Sie ihn anfassen. Denken Sie außerdem daran, dass gelöschte Dateien im Papierkorb landen und dort weiter Speicherplatz belegen, bis Sie ihn leeren.",
            "Ein überraschend großer Teil der großen Dateien sind übrigens Duplikate — zwei Exporte desselben Videos, zwei Sicherungen desselben Fotoordners. Disk Mops Duplikatfinder (Duplicate Detector) vergleicht Dateien per SHA-256-Hash und findet inhaltsgleiche Kopien zuverlässig, selbst wenn die Dateinamen unterschiedlich sind.",
          ],
        },
        {
          title: "Große Dateien dauerhaft unter Kontrolle halten",
          content: [
            "Auf den meisten PCs ist der Downloads-Ordner der größte Übeltäter: Installationsdateien, ZIP-Archive und Videos sammeln sich unbemerkt an. Sortieren Sie den Ordner einmal im Monat nach Größe und prüfen Sie die obersten Einträge — diese Fünf-Minuten-Routine verhindert, dass die Festplatte erneut unbemerkt vollläuft.",
            "Die integrierte Speicheroptimierung von Windows (unter Einstellungen, System, Speicher) bereinigt temporäre Dateien und den Papierkorb automatisch — eine solide Grundlage, die aktiviert bleiben sollte. Ihre eigenen großen Dateien, Videoarchive oder alten Downloads rührt sie jedoch nie an; dafür braucht es einen eigenen, wiederkehrenden Scan.",
            "Disk Mop automatisiert genau diese Routine: Die geplante Bereinigung (Scheduled Cleanup) richtet wöchentliche oder monatliche Wartungsaufgaben ein, und der Downloads-Bereiniger kategorisiert die alten Dateien in Ihrem Downloads-Ordner, damit Sie sie gesammelt entfernen können. Wiederholen Sie den Scan nach großen Dateien in festen Abständen, und eine volle Festplatte überrascht Sie nie wieder.",
          ],
        },
      ],
      verdict: [
        "Große Dateien unter Windows zu finden besteht aus drei Kompetenzstufen: eine size:gigantic-Suche im Datei-Explorer für den Schnellcheck, eine Treemap-Analyse für die Gesamtkarte des Laufwerks und ein automatischer Scanner für Dateien über 500 MB als wiederkehrende Kontrolle. Wer alle drei kombiniert, kann auf den meisten PCs in einer Viertelstunde Dutzende Gigabyte zurückgewinnen.",
        "Disk Mop bündelt diesen gesamten Arbeitsablauf in einer App: Festplattenanalyse mit Treemap, Große-Dateien-Finder für alles über 500 MB, SHA-256-basierter Duplikatfinder und geplante Bereinigung. Sie können die App kostenlos testen; die einmalige Lifetime-Lizenz für 19,90 $ schaltet alle Funktionen frei.",
      ],
      ctaText: "Finden Sie Ihre größten Dateien mit Disk Mop",
    },
    fr: {
      title: "Trouver les gros fichiers sur Windows 10 et 11 : 3 méthodes rapides",
      metaDescription:
        "Trouver les gros fichiers sur Windows 10 et 11 : filtres de taille de l'Explorateur de fichiers, analyse en treemap et scan automatique dès 500 Mo.",
      subtitle: "Des opérateurs de recherche size: méconnus à l'analyse en treemap : repérez en quelques minutes les fichiers qui dévorent votre disque",
      intro: [
        "Le moyen le plus rapide de trouver les gros fichiers sous Windows 10 et 11 : ouvrez l'Explorateur de fichiers, sélectionnez Ce PC et tapez size:gigantic dans le champ de recherche — la liste affiche alors tous les fichiers de plus de 4 Go. Pour une vue d'ensemble complète, un outil d'analyse de disque doté d'une treemap montre d'un seul coup d'œil ce qui occupe l'espace de votre disque dur. Les deux méthodes prennent moins de cinq minutes, et ce guide vous accompagne pas à pas dans chacune d'elles.",
        "Les disques se remplissent en silence. Un export vidéo oublié, un ancien disque de machine virtuelle ou un jeu auquel vous ne jouez plus peuvent engloutir des dizaines de gigaoctets sans jamais attirer votre attention. Ce guide est construit comme une progression : d'abord les opérateurs de recherche size: méconnus de l'Explorateur de fichiers, puis l'analyse visuelle en treemap, et enfin un scan automatique qui repère tous les fichiers de plus de 500 Mo. À la fin, vous saurez débusquer les gros fichiers qui saturent votre disque et décider en confiance de ce qu'il faut en faire.",
      ],
      sections: [
        {
          title: "Pourquoi les gros fichiers se cachent si bien sous Windows",
          content: [
            "L'Explorateur de fichiers n'affiche pas la taille des dossiers par défaut, et le tri par taille ne fonctionne qu'à l'intérieur du dossier que vous consultez. C'est pourquoi un fichier de 20 Go enfoui trois niveaux plus bas ne vous saute jamais aux yeux. À cela s'ajoute le fait que Windows masque par défaut les fichiers système et certains dossiers : une partie des plus gros consommateurs d'espace reste donc invisible lors d'une navigation normale.",
            "Pour une première vérification rapide, ouvrez Paramètres, puis Système, puis Stockage. Windows 10 comme Windows 11 décomposent votre disque en catégories : applications, fichiers temporaires, documents, et ainsi de suite. Cet écran est utile pour se repérer, mais il s'arrête au niveau des catégories : il vous indique que les autres fichiers occupent 120 Go, pas lesquels. Pour voir un par un les fichiers les plus volumineux de votre PC, il vous faut les trois techniques qui suivent.",
          ],
        },
        {
          title: "Utilisez les filtres de taille de l'Explorateur de fichiers (size:gigantic)",
          content: [
            "Ouvrez l'Explorateur de fichiers et sélectionnez Ce PC, ou directement le lecteur C:, pour que la recherche couvre tout. Cliquez dans le champ de recherche en haut à droite et tapez size: — Windows propose alors des filtres prédéfinis : Vide (0 Ko), Minuscule (jusqu'à 16 Ko), Petit (16 Ko à 1 Mo), Moyen (1 à 128 Mo), Grand (128 Mo à 1 Go), Énorme (1 à 4 Go) et Gigantesque (plus de 4 Go). Pour un résultat immédiat, lancez la recherche size:gigantic afin de lister tout ce qui dépasse 4 Go.",
            "Si les valeurs prédéfinies ne conviennent pas, saisissez votre propre seuil, par exemple size:>500MB ou size:>1GB. Une fois les résultats affichés, basculez en mode Détails et cliquez sur la colonne Taille pour trier du plus grand au plus petit. Pour ne pas passer à côté des fichiers masqués, activez Affichage, puis Afficher, puis Éléments masqués sous Windows 11, ou cochez Éléments masqués dans l'onglet Affichage sous Windows 10.",
            "Deux avertissements : ne touchez pas aux fichiers système comme pagefile.sys et hiberfil.sys, et ne supprimez jamais quoi que ce soit dans le dossier Windows — le système d'exploitation en a besoin. Gardez aussi en tête les limites de la méthode : la recherche peut être très lente sur un lecteur non indexé, et le résultat n'est qu'une liste à plat qui ne montre pas quels dossiers sont gonflés.",
          ],
        },
        {
          title: "Repérez visuellement les gouffres d'espace avec une treemap",
          content: [
            "Une treemap dessine l'intégralité de votre disque sous forme de rectangles imbriqués, dont la surface est proportionnelle à l'espace occupé par chaque fichier ou dossier. Les blocs géants sautent aux yeux immédiatement, et cette vue répond à la question qu'une simple liste de résultats laisse sans réponse : où le poids se situe-t-il dans l'arborescence ? D'un seul regard, vous voyez si c'est votre dossier de vidéos ou un répertoire de sauvegarde oublié qui a enflé.",
            "Des utilitaires de treemap gratuits existent depuis des années et font honnêtement le travail — il faut le reconnaître. Mais beaucoup ont une interface vieillissante et analysent lentement les gros disques. Cela ne gêne pas les utilisateurs techniques, en revanche cela ajoute de la friction quand on veut simplement voir le résultat et passer directement au nettoyage.",
            "L'analyse de disque (Disk Analysis) de Disk Mop scanne votre lecteur et affiche une treemap interactive : vous voyez instantanément quels dossiers occupent le plus de place, vous cliquez dans n'importe quel dossier pour descendre d'un niveau et vous lisez la part de chaque élément dans le total. L'expérience est rigoureusement identique sous Windows 10, Windows 11 et macOS.",
          ],
        },
        {
          title: "Analysez automatiquement les fichiers de plus de 500 Mo",
          content: [
            "Les recherches manuelles ne sont que des instantanés : il faut se souvenir de la syntaxe des opérateurs, répéter la recherche pour chaque lecteur et trier les résultats soi-même. Un scan automatique des gros fichiers inverse l'équation : vous définissez le seuil une seule fois, et l'outil balaie tout le disque pour vous livrer des résultats déjà classés.",
            "Le détecteur de gros fichiers (Large File Finder) de Disk Mop fait exactement cela : il repère chaque fichier de plus de 500 Mo et les présente dans une liste triée par taille, avec l'emplacement de chacun. L'emplacement compte, car on ne peut juger si un fichier peut être supprimé sans risque qu'en voyant où il se trouve. Associé à la treemap, vous disposez à la fois de la carte générale et de l'inventaire détaillé.",
            "Une méthode de travail éprouvée : lancez le scan, puis passez en revue les dix premières entrées une par une. L'essentiel de l'espace récupérable se trouve presque toujours sur cette première page — vieilles images disque, fichiers vidéo et téléchargements oubliés se regroupent en haut de la liste.",
          ],
        },
        {
          title: "Décidez quoi supprimer, déplacer ou archiver",
          content: [
            "Appliquez la règle des trois paniers à chaque gros fichier trouvé. Supprimer : les programmes d'installation déjà exécutés, les vieilles images ISO, les sauvegardes périmées et les copies évidentes. Déplacer : les archives vidéo et les collections de photos que vous voulez garder mais ouvrez rarement ont leur place sur un disque externe ou un stockage réseau. Archiver : pour les dossiers de projets qui ne sont plus actifs, faites un clic droit et compressez-les en fichier ZIP afin de les réduire sur place.",
            "Les règles de sécurité sont simples : ne supprimez jamais de fichiers du dossier Windows ni des dossiers d'installation des programmes, et renseignez-vous sur tout nom de fichier que vous ne reconnaissez pas avant d'y toucher. N'oubliez pas non plus que les fichiers supprimés partent à la Corbeille et continuent d'occuper de l'espace disque tant que vous ne l'avez pas vidée.",
            "Une part surprenante des gros fichiers sont en réalité des doublons : deux exports de la même vidéo, deux sauvegardes du même dossier de photos. Le détecteur de doublons (Duplicate Detector) de Disk Mop compare les fichiers par empreinte SHA-256 : il repère donc en toute sécurité les copies dont le contenu est réellement identique, même lorsque les noms de fichiers diffèrent.",
          ],
        },
        {
          title: "Gardez durablement les gros fichiers sous contrôle",
          content: [
            "Sur la plupart des PC, le coupable numéro un est le dossier Téléchargements : programmes d'installation, archives ZIP et vidéos s'y accumulent en silence. Prenez l'habitude de trier ce dossier par taille une fois par mois et d'examiner les fichiers en tête de liste — cette vérification de cinq minutes empêche le disque de se remplir à nouveau sans que vous le remarquiez.",
            "L'Assistant Stockage intégré à Windows (dans Paramètres, Système, Stockage) peut nettoyer automatiquement les fichiers temporaires et la Corbeille : c'est une base solide, à laisser activée. En revanche, il ne touche jamais à vos propres gros fichiers, à vos archives vidéo ni à vos anciens téléchargements — ceux-là réclament leur propre analyse récurrente.",
            "Disk Mop automatise cette routine : le nettoyage planifié (Scheduled Cleanup) met en place des tâches d'entretien hebdomadaires ou mensuelles, et le nettoyeur de téléchargements classe par catégories les anciens fichiers de votre dossier Téléchargements pour que vous puissiez les effacer en bloc. Relancez le scan des gros fichiers à intervalles réguliers et un disque plein ne vous prendra plus jamais au dépourvu.",
          ],
        },
      ],
      verdict: [
        "Trouver les gros fichiers sous Windows repose sur trois niveaux de compétence : une recherche size:gigantic dans l'Explorateur de fichiers pour un contrôle rapide, une analyse en treemap pour la carte d'ensemble de votre disque, et un scanner automatique des fichiers de plus de 500 Mo comme audit récurrent. En combinant les trois, récupérer des dizaines de gigaoctets en un quart d'heure est un objectif réaliste sur la plupart des PC.",
        "Disk Mop réunit tout ce flux de travail dans une seule application : la treemap de l'analyse de disque, le détecteur de gros fichiers au-delà de 500 Mo, le détecteur de doublons fondé sur SHA-256 et le nettoyage planifié pour l'entretien. Vous pouvez l'essayer gratuitement, et une licence à vie à 19,90 $, payée une seule fois, débloque toutes les fonctions.",
      ],
      ctaText: "Trouvez vos fichiers les plus volumineux avec Disk Mop",
    },
    es: {
      title: "Cómo encontrar archivos grandes en Windows 10 y 11 rápidamente",
      metaDescription:
        "Cómo encontrar archivos grandes en Windows 10 y 11: filtros de tamaño del Explorador de archivos, análisis treemap y escaneo automático desde 500 MB.",
      subtitle: "De los operadores de búsqueda size: al análisis en treemap: localiza en minutos los archivos que se comen tu disco",
      intro: [
        "La forma más rápida de encontrar archivos grandes en Windows 10 y 11 es abrir el Explorador de archivos, seleccionar Este equipo y escribir size:gigantic en el cuadro de búsqueda: así aparecen todos los archivos de más de 4 GB. Para una visión más completa, una herramienta de análisis de disco con vista de treemap muestra de un vistazo qué está ocupando el espacio de tu disco duro. Ambos métodos llevan menos de cinco minutos, y esta guía recorre cada uno paso a paso.",
        "Los discos se llenan en silencio. Una exportación de vídeo olvidada, el disco de una máquina virtual antigua o un juego al que ya no juegas pueden tragarse decenas de gigabytes sin que llegues a verlos nunca. Esta guía está planteada como una progresión: primero los poco conocidos operadores de búsqueda size: del Explorador de archivos, después el análisis visual en treemap y, por último, un escaneo automático que detecta todos los archivos de más de 500 MB. Al terminar sabrás localizar los archivos grandes que ocupan tu disco y decidir con criterio qué hacer con cada uno.",
      ],
      sections: [
        {
          title: "Por qué los archivos grandes se esconden tan bien en Windows",
          content: [
            "El Explorador de archivos no muestra el tamaño de las carpetas de forma predeterminada, y ordenar por tamaño solo funciona dentro de la carpeta que estás viendo en ese momento. Por eso un archivo de 20 GB enterrado tres carpetas más abajo nunca te llama la atención. A eso se suma que Windows oculta por defecto los archivos de sistema y ciertas carpetas, así que algunos de los mayores consumidores de espacio son invisibles mientras navegas con normalidad.",
            "Para una primera comprobación rápida, abre Configuración, luego Sistema y luego Almacenamiento. Tanto Windows 10 como Windows 11 desglosan la unidad en categorías como aplicaciones, archivos temporales y documentos. Esta pantalla sirve para orientarte, pero se queda en el nivel de categoría: te dice que otros archivos ocupan 120 GB, no qué archivos son. Para ver uno por uno los archivos más grandes de tu PC necesitas las tres técnicas que vienen a continuación.",
          ],
        },
        {
          title: "Usa los filtros de tamaño del Explorador de archivos (size:gigantic)",
          content: [
            "Abre el Explorador de archivos y selecciona Este equipo, o directamente la unidad C:, para que la búsqueda lo abarque todo. Haz clic en el cuadro de búsqueda de la esquina superior derecha y escribe size:; Windows te sugiere filtros predefinidos: Vacío (0 KB), Diminuto (hasta 16 KB), Pequeño (16 KB a 1 MB), Mediano (1 a 128 MB), Grande (128 MB a 1 GB), Enorme (1 a 4 GB) y Gigantesco (más de 4 GB). Para el resultado más rápido, lanza la búsqueda size:gigantic y lista todo lo que supere los 4 GB.",
            "Si los valores predefinidos no te encajan, escribe tu propio umbral, por ejemplo size:>500MB o size:>1GB. Cuando aparezcan los resultados, cambia a la vista Detalles y haz clic en la columna Tamaño para ordenar de mayor a menor. Para no dejar fuera los archivos ocultos, activa Ver, luego Mostrar y luego Elementos ocultos en Windows 11, o marca Elementos ocultos en la pestaña Vista de Windows 10.",
            "Dos advertencias: no toques archivos de sistema como pagefile.sys y hiberfil.sys, y no borres nunca nada dentro de la carpeta Windows, porque el sistema operativo los necesita. Ten presentes también los límites del método: en unidades sin indexar la búsqueda puede tardar mucho, y el resultado es una lista plana que no revela qué carpetas están hinchadas.",
          ],
        },
        {
          title: "Detecta visualmente los devoradores de espacio con un treemap",
          content: [
            "Un treemap dibuja toda la unidad como rectángulos anidados, donde el área de cada rectángulo es proporcional al espacio que ocupa ese archivo o carpeta. Los bloques enormes saltan a la vista de inmediato, y esta vista responde a la pregunta que una lista de búsqueda plana no puede resolver: ¿en qué punto del árbol de carpetas está el peso? De un solo vistazo ves si lo que se ha desbordado es tu carpeta de vídeos o un directorio de copias de seguridad olvidado.",
            "Existen utilidades de treemap gratuitas desde hace años y cumplen su función, hay que reconocerlo. Pero muchas tienen interfaces anticuadas y analizan con lentitud las unidades grandes. Para un usuario técnico eso no supone un problema, aunque añade fricción si lo único que quieres es ver el resultado y pasar directamente a la limpieza.",
            "El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad y dibuja un treemap interactivo: ves al instante qué carpetas ocupan más espacio, entras en cualquiera de ellas para bajar de nivel y lees el porcentaje que representa cada elemento sobre el total. La experiencia es idéntica en Windows 10, Windows 11 y macOS.",
          ],
        },
        {
          title: "Escanea automáticamente los archivos de más de 500 MB",
          content: [
            "Las búsquedas manuales son fotos fijas: tienes que recordar la sintaxis de los operadores, repetir la búsqueda en cada unidad y filtrar tú mismo los resultados. Un escaneo automático de archivos grandes le da la vuelta a la ecuación: defines el umbral una vez y la herramienta recorre todo el disco y te entrega los resultados ya ordenados.",
            "El buscador de archivos grandes (Large File Finder) de Disk Mop hace justo eso: detecta todos los archivos de más de 500 MB y los presenta en una lista ordenada por tamaño, mostrando la ubicación de cada uno. La ubicación importa, porque solo puedes juzgar si un archivo se puede borrar con seguridad cuando ves dónde está guardado. Combinado con el treemap, tienes a la vez el mapa general y el inventario detallado.",
            "Un flujo de trabajo práctico: ejecuta el escaneo y revisa una a una las diez primeras entradas. Casi todo el espacio recuperable está siempre en esa primera página: imágenes de disco antiguas, archivos de vídeo y descargas olvidadas se acumulan en lo alto de la lista.",
          ],
        },
        {
          title: "Decide qué borrar, mover o archivar",
          content: [
            "Aplica la regla de los tres cajones a cada archivo grande que encuentres. Borrar: instaladores que ya ejecutaste, imágenes ISO antiguas, copias de seguridad caducadas y duplicados evidentes. Mover: los archivos de vídeo y las colecciones de fotos que quieres conservar pero abres rara vez tienen su sitio en un disco externo o en un almacenamiento de red. Archivar: las carpetas de proyectos que ya no están activos se comprimen en un ZIP con el botón derecho y encogen sin salir de su sitio.",
            "Las reglas de seguridad son sencillas: no borres nunca archivos de la carpeta Windows ni de las carpetas de instalación de programas, y busca información sobre cualquier nombre de archivo que no reconozcas antes de tocarlo. Recuerda además que los archivos borrados van a la Papelera de reciclaje y siguen ocupando espacio en disco hasta que la vacías.",
            "Una parte sorprendente de los archivos grandes son en realidad duplicados: dos exportaciones del mismo vídeo, dos copias de la misma carpeta de fotos. El detector de duplicados (Duplicate Detector) de Disk Mop compara los archivos por su hash SHA-256, así que localiza con seguridad las copias cuyo contenido es realmente idéntico aunque los nombres sean distintos.",
          ],
        },
        {
          title: "Mantén los archivos grandes bajo control",
          content: [
            "En la mayoría de los equipos, el culpable número uno es la carpeta Descargas: instaladores, archivos ZIP y vídeos se acumulan en silencio. Acostúmbrate a ordenar esa carpeta por tamaño una vez al mes y revisar los archivos de arriba; esa comprobación de cinco minutos evita que el disco vuelva a llenarse sin avisar.",
            "El Sensor de almacenamiento integrado en Windows (en Configuración, Sistema, Almacenamiento) puede limpiar automáticamente los archivos temporales y la Papelera de reciclaje: es una buena base y conviene dejarlo activado. Sin embargo, nunca toca tus propios archivos grandes, tus archivos de vídeo ni tus descargas antiguas, y para esos hace falta un escaneo periódico específico.",
            "Disk Mop automatiza esa rutina: la limpieza programada (Scheduled Cleanup) crea tareas de mantenimiento semanales o mensuales, y el limpiador de descargas clasifica por categorías los archivos antiguos de tu carpeta Descargas para que los elimines en bloque. Repite el escaneo de archivos grandes cada cierto tiempo y un disco lleno no volverá a pillarte por sorpresa.",
          ],
        },
      ],
      verdict: [
        "Encontrar archivos grandes en Windows se reduce a tres niveles: una búsqueda size:gigantic en el Explorador de archivos para la comprobación rápida, un análisis en treemap para el mapa general de la unidad y un escáner automático de archivos de más de 500 MB como revisión periódica. Usando los tres juntos, recuperar decenas de gigabytes en una sesión de quince minutos es un objetivo realista en la mayoría de los equipos.",
        "Disk Mop reúne todo ese flujo de trabajo en una sola aplicación: el treemap del análisis de disco, el buscador de archivos grandes desde 500 MB, el detector de duplicados basado en SHA-256 y la limpieza programada para el mantenimiento. Puedes probarlo gratis, y una licencia de por vida de 19,90 $ en un pago único lo desbloquea todo.",
      ],
      ctaText: "Encuentra tus archivos más grandes con Disk Mop",
    },
    it: {
      title: "Come trovare i file di grandi dimensioni su Windows 10 e 11",
      metaDescription:
        "Come trovare i file di grandi dimensioni su Windows 10 e 11 con i filtri di Esplora file, l'analisi treemap e una scansione automatica sopra i 500 MB.",
      subtitle: "Dagli operatori di ricerca size: poco noti all'analisi treemap: individua in pochi minuti i file che divorano il disco",
      intro: [
        "Il modo più rapido per trovare i file di grandi dimensioni su Windows 10 e 11 è aprire Esplora file, selezionare Questo PC e digitare size:gigantic nella casella di ricerca: compaiono così tutti i file oltre i 4 GB. Per un quadro più completo, uno strumento di analisi del disco con vista treemap mostra a colpo d'occhio che cosa sta occupando lo spazio sul disco. Entrambi i metodi richiedono meno di cinque minuti, e questa guida li percorre passo per passo.",
        "I dischi si riempiono in silenzio. Un'esportazione video dimenticata, il disco di una vecchia macchina virtuale o un gioco che non apri più possono divorare decine di gigabyte senza mai finirti davanti agli occhi. Questa guida è costruita come una progressione: prima gli operatori di ricerca size: poco conosciuti di Esplora file, poi l'analisi visiva con la treemap e infine una scansione automatica che intercetta ogni file oltre i 500 MB. Alla fine saprai individuare i file di grandi dimensioni che occupano il disco e decidere con sicurezza che cosa farne.",
      ],
      sections: [
        {
          title: "Perché i file di grandi dimensioni si nascondono così bene su Windows",
          content: [
            "Esplora file non mostra la dimensione delle cartelle per impostazione predefinita, e l'ordinamento per dimensione funziona solo all'interno della cartella che stai guardando in quel momento. Ecco perché un file da 20 GB sepolto tre cartelle più in basso non ti salta mai all'occhio. In più Windows nasconde i file di sistema e alcune cartelle per impostazione predefinita, quindi una parte dei maggiori divoratori di spazio resta invisibile durante la normale navigazione.",
            "Per un primo controllo veloce apri Impostazioni, poi Sistema, poi Archiviazione. Sia Windows 10 sia Windows 11 suddividono l'unità in categorie come app, file temporanei e documenti. Questa schermata è utile per orientarsi, ma si ferma al livello di categoria: ti dice che altri file occupano 120 GB, non quali file siano. Per vedere uno per uno i file più grandi del PC servono le tre tecniche descritte qui sotto.",
          ],
        },
        {
          title: "Usa i filtri di dimensione di Esplora file (size:gigantic)",
          content: [
            "Apri Esplora file e seleziona Questo PC, oppure direttamente l'unità C:, in modo che la ricerca copra tutto. Fai clic sulla casella di ricerca in alto a destra e digita size:; Windows propone filtri predefiniti: Vuoto (0 KB), Minuscolo (fino a 16 KB), Piccolo (da 16 KB a 1 MB), Medio (da 1 a 128 MB), Grande (da 128 MB a 1 GB), Enorme (da 1 a 4 GB) e Gigantesco (oltre 4 GB). Per il risultato più rapido lancia la ricerca size:gigantic ed elenca tutto ciò che supera i 4 GB.",
            "Se i valori predefiniti non ti bastano, scrivi la tua soglia, per esempio size:>500MB oppure size:>1GB. Quando i risultati compaiono, passa alla visualizzazione Dettagli e fai clic sulla colonna Dimensione per ordinare dal file più grande. Per intercettare anche i file nascosti attiva Visualizza, poi Mostra, poi Elementi nascosti su Windows 11, oppure spunta Elementi nascosti nella scheda Visualizza di Windows 10.",
            "Due avvertenze: lascia stare i file di sistema come pagefile.sys e hiberfil.sys e non eliminare mai nulla dalla cartella Windows, perché al sistema operativo servono. Tieni presenti anche i limiti del metodo: sulle unità non indicizzate la ricerca può essere lenta, e il risultato è un elenco piatto che non mostra quali cartelle si sono gonfiate.",
          ],
        },
        {
          title: "Individua visivamente i divoratori di spazio con la treemap",
          content: [
            "Una treemap disegna l'intera unità come rettangoli annidati, in cui l'area di ciascun rettangolo è proporzionale allo spazio occupato da quel file o da quella cartella. I blocchi giganti saltano subito all'occhio e la vista risponde alla domanda che un elenco di ricerca piatto non può sciogliere: in quale punto dell'albero delle cartelle si concentra il peso? Con una sola occhiata capisci se a essersi gonfiata è la cartella dei video o una directory di backup dimenticata.",
            "Le utility treemap gratuite esistono da anni e fanno onestamente il loro lavoro, va riconosciuto. Molte però hanno interfacce datate e scansionano lentamente i dischi capienti. Per un utente tecnico non è un problema, ma diventa un attrito se vuoi soltanto vedere il risultato e passare subito alla pulizia.",
            "L'analisi del disco (Disk Analysis) di Disk Mop scansiona l'unità e disegna una treemap interattiva: vedi immediatamente quali cartelle occupano più spazio, entri in una qualsiasi di esse per scendere di livello e leggi la quota di ogni elemento sul totale. La stessa esperienza funziona in modo identico su Windows 10, Windows 11 e macOS.",
          ],
        },
        {
          title: "Scansiona automaticamente i file oltre i 500 MB",
          content: [
            "Le ricerche manuali sono istantanee: devi ricordare la sintassi degli operatori, ripetere la ricerca per ogni unità e setacciare i risultati da solo. Una scansione automatica dei file di grandi dimensioni ribalta l'equazione: definisci la soglia una volta sola e lo strumento passa al setaccio l'intero disco consegnandoti i risultati già ordinati.",
            "Il ricercatore di file di grandi dimensioni (Large File Finder) di Disk Mop fa esattamente questo: rileva ogni file oltre i 500 MB e lo presenta in un elenco ordinato per dimensione, con il percorso di ciascun file. Il percorso è importante, perché puoi giudicare se un file si può eliminare senza rischi solo quando vedi dove si trova. Insieme alla treemap ottieni sia la mappa d'insieme sia l'inventario dettagliato.",
            "Un flusso di lavoro pratico: avvia la scansione e poi esamina una per una le prime dieci voci. Quasi tutto lo spazio recuperabile si trova sempre in quella prima pagina: vecchie immagini disco, file video e download dimenticati si accumulano in cima all'elenco.",
          ],
        },
        {
          title: "Decidi che cosa eliminare, spostare o archiviare",
          content: [
            "Applica la regola dei tre cesti a ogni file di grandi dimensioni che trovi. Elimina: i programmi di installazione già eseguiti, le vecchie immagini ISO, i backup scaduti e le copie evidenti. Sposta: gli archivi video e le raccolte di foto che vuoi conservare ma apri di rado stanno meglio su un disco esterno o su uno spazio di rete. Archivia: le cartelle di progetti non più attivi si comprimono in un file ZIP con il tasto destro e si rimpiccioliscono restando dove sono.",
            "Le regole di sicurezza sono semplici: non eliminare mai file dalla cartella Windows o dalle cartelle di installazione dei programmi, e cerca informazioni su qualsiasi nome di file che non riconosci prima di toccarlo. Ricorda inoltre che i file eliminati finiscono nel Cestino e continuano a occupare spazio sul disco finché non lo svuoti.",
            "Una quota sorprendente dei file di grandi dimensioni sono in realtà duplicati: due esportazioni dello stesso video, due backup della stessa cartella di foto. Il rilevatore di duplicati (Duplicate Detector) di Disk Mop confronta i file tramite hash SHA-256, quindi individua in sicurezza le copie con contenuto davvero identico anche quando i nomi sono diversi.",
          ],
        },
        {
          title: "Tieni sotto controllo i file di grandi dimensioni",
          content: [
            "Sulla maggior parte dei PC il colpevole numero uno è la cartella Download: programmi di installazione, archivi ZIP e video si accumulano in silenzio. Prendi l'abitudine di ordinare quella cartella per dimensione una volta al mese e di controllare i file in cima: questa verifica da cinque minuti impedisce al disco di riempirsi di nuovo senza farsi notare.",
            "Il Sensore memoria integrato in Windows (in Impostazioni, Sistema, Archiviazione) può pulire automaticamente i file temporanei e il Cestino: è una base solida e conviene lasciarlo attivo. Non tocca però mai i tuoi file di grandi dimensioni, gli archivi video o i download più vecchi: per quelli serve una scansione ricorrente dedicata.",
            "Disk Mop automatizza proprio questa routine: la pulizia pianificata (Scheduled Cleanup) imposta attività di manutenzione settimanali o mensili, mentre il pulitore dei download suddivide in categorie i file vecchi della cartella Download così puoi cancellarli in blocco. Ripeti la scansione dei file di grandi dimensioni a intervalli regolari e un disco pieno non ti coglierà più di sorpresa.",
          ],
        },
      ],
      verdict: [
        "Trovare i file di grandi dimensioni su Windows si riduce a tre livelli: una ricerca size:gigantic in Esplora file per il controllo veloce, un'analisi treemap per la mappa complessiva dell'unità e uno scanner automatico dei file oltre i 500 MB come verifica ricorrente. Usandoli insieme, recuperare decine di gigabyte in una sessione di un quarto d'ora è un obiettivo realistico sulla maggior parte dei PC.",
        "Disk Mop racchiude l'intero flusso di lavoro in un'unica app: la treemap dell'analisi del disco, il ricercatore di file oltre i 500 MB, il rilevatore di duplicati basato su SHA-256 e la pulizia pianificata per la manutenzione. Puoi provarla gratis e una licenza a vita da 19,90 $, pagata una volta sola, sblocca tutto.",
      ],
      ctaText: "Trova i file più grandi con Disk Mop",
    },
    pt: {
      title: "Como encontrar arquivos grandes no Windows 10 e 11 rapidamente",
      metaDescription:
        "Como encontrar arquivos grandes no Windows 10 e 11 com os filtros de tamanho do Explorador de Arquivos, a análise treemap e uma varredura automática de 500 MB.",
      subtitle: "Dos operadores de busca size: pouco conhecidos à análise em treemap: localize em minutos os arquivos que engolem seu disco",
      intro: [
        "A maneira mais rápida de encontrar arquivos grandes no Windows 10 e 11 é abrir o Explorador de Arquivos, selecionar Este Computador e digitar size:gigantic na caixa de pesquisa: isso lista todos os arquivos acima de 4 GB. Para um panorama mais completo, uma ferramenta de análise de disco com visualização em treemap mostra num relance o que está ocupando espaço no seu disco. Os dois métodos levam menos de cinco minutos, e este guia percorre cada um passo a passo.",
        "Os discos enchem em silêncio. Uma exportação de vídeo esquecida, o disco de uma máquina virtual antiga ou um jogo que você não abre mais podem engolir dezenas de gigabytes sem nunca aparecer na sua frente. Este guia foi montado como uma progressão: primeiro os operadores de busca size: pouco conhecidos do Explorador de Arquivos, depois a análise visual em treemap e, por fim, uma varredura automática que encontra todo arquivo acima de 500 MB. No final, você saberá localizar os arquivos grandes que ocupam o disco e decidir com segurança o que fazer com cada um.",
      ],
      sections: [
        {
          title: "Por que os arquivos grandes se escondem tão bem no Windows",
          content: [
            "O Explorador de Arquivos não mostra o tamanho das pastas por padrão, e a ordenação por tamanho só funciona dentro da pasta que você está vendo no momento. É por isso que um arquivo de 20 GB enterrado três pastas abaixo nunca chama sua atenção. Além disso, o Windows oculta arquivos de sistema e certas pastas por padrão, de modo que alguns dos maiores consumidores de espaço ficam invisíveis durante a navegação normal.",
            "Para uma primeira conferida rápida, abra Configurações, depois Sistema e depois Armazenamento. Tanto o Windows 10 quanto o Windows 11 dividem a unidade em categorias como aplicativos, arquivos temporários e documentos. Essa tela ajuda a se orientar, mas para no nível da categoria: ela informa que outros arquivos ocupam 120 GB, não quais arquivos são. Para ver um a um os maiores arquivos do PC, você precisa das três técnicas a seguir.",
          ],
        },
        {
          title: "Use os filtros de tamanho do Explorador de Arquivos (size:gigantic)",
          content: [
            "Abra o Explorador de Arquivos e selecione Este Computador, ou diretamente a unidade C:, para que a busca cubra tudo. Clique na caixa de pesquisa no canto superior direito e digite size:; o Windows sugere filtros prontos: Vazio (0 KB), Minúsculo (até 16 KB), Pequeno (16 KB a 1 MB), Médio (1 a 128 MB), Grande (128 MB a 1 GB), Enorme (1 a 4 GB) e Gigantesco (acima de 4 GB). Para o resultado mais rápido, rode a busca size:gigantic e liste tudo que passa de 4 GB.",
            "Se os valores prontos não servirem, digite seu próprio limite, como size:>500MB ou size:>1GB. Quando os resultados carregarem, mude para o modo Detalhes e clique na coluna Tamanho para ordenar do maior para o menor. Para não deixar de fora os arquivos ocultos, ative Exibir, depois Mostrar, depois Itens ocultos no Windows 11, ou marque Itens ocultos na guia Exibir do Windows 10.",
            "Dois avisos: não mexa em arquivos de sistema como pagefile.sys e hiberfil.sys e nunca apague nada dentro da pasta Windows, porque o sistema operacional precisa deles. Conheça também os limites do método: em unidades sem indexação a busca pode demorar, e o resultado é uma lista plana que não mostra quais pastas estão inchadas.",
          ],
        },
        {
          title: "Encontre os devoradores de espaço visualmente com o treemap",
          content: [
            "Um treemap desenha a unidade inteira como retângulos aninhados, em que a área de cada retângulo é proporcional ao espaço ocupado por aquele arquivo ou pasta. Os blocos gigantes saltam aos olhos na hora, e essa visão responde à pergunta que uma lista de busca plana não resolve: em que ponto da árvore de pastas está o peso? De um só olhar você vê se quem inchou foi a pasta de vídeos ou um diretório de backup esquecido.",
            "Utilitários de treemap gratuitos existem há anos e cumprem bem o papel, é preciso reconhecer. Mas muitos têm interfaces datadas e demoram para varrer discos grandes. Para o usuário técnico isso não é problema, embora crie atrito para quem só quer ver o resultado e partir direto para a limpeza.",
            "A análise de disco (Disk Analysis) do Disk Mop varre a unidade e desenha um treemap interativo: você vê na hora quais pastas ocupam mais espaço, entra em qualquer uma delas para descer um nível e lê a fatia de cada item no total. A mesma experiência funciona de forma idêntica no Windows 10, no Windows 11 e no macOS.",
          ],
        },
        {
          title: "Faça uma varredura automática de arquivos acima de 500 MB",
          content: [
            "As buscas manuais são fotografias momentâneas: você precisa lembrar a sintaxe dos operadores, repetir a busca em cada unidade e peneirar os resultados sozinho. Uma varredura automática de arquivos grandes inverte essa equação: você define o limite uma vez, e a ferramenta percorre o disco inteiro e entrega os resultados já ordenados.",
            "O localizador de arquivos grandes (Large File Finder) do Disk Mop faz exatamente isso: detecta todo arquivo acima de 500 MB e o apresenta em uma lista ordenada por tamanho, com a localização de cada um. A localização importa, porque só dá para julgar se um arquivo pode ser removido com segurança depois de ver onde ele está guardado. Combinado com o treemap, você tem ao mesmo tempo o mapa geral e o inventário detalhado.",
            "Um fluxo de trabalho prático: rode a varredura e revise um a um os dez primeiros itens. Quase todo o espaço recuperável está sempre nessa primeira página: imagens de disco antigas, arquivos de vídeo e downloads esquecidos se acumulam no topo da lista.",
          ],
        },
        {
          title: "Decida o que apagar, mover ou arquivar",
          content: [
            "Aplique a regra dos três cestos a cada arquivo grande que encontrar. Apagar: instaladores que você já executou, imagens ISO antigas, backups vencidos e cópias óbvias. Mover: arquivos de vídeo e coleções de fotos que você quer guardar mas abre raramente pertencem a um disco externo ou a um armazenamento de rede. Arquivar: pastas de projetos que não estão mais ativos podem ser compactadas em um arquivo ZIP com o botão direito, encolhendo sem sair do lugar.",
            "As regras de segurança são simples: nunca apague arquivos da pasta Windows nem das pastas de instalação de programas, e pesquise qualquer nome de arquivo que você não reconheça antes de mexer nele. Lembre também que os arquivos apagados vão para a Lixeira e continuam ocupando espaço em disco até você esvaziá-la.",
            "Uma parcela surpreendente dos arquivos grandes é, na verdade, duplicada: duas exportações do mesmo vídeo, dois backups da mesma pasta de fotos. O detector de duplicados (Duplicate Detector) do Disk Mop compara os arquivos pelo hash SHA-256, então encontra com segurança as cópias cujo conteúdo é realmente idêntico mesmo quando os nomes são diferentes.",
          ],
        },
        {
          title: "Mantenha os arquivos grandes sob controle",
          content: [
            "Na maioria dos PCs, o culpado número um é a pasta Downloads: instaladores, arquivos ZIP e vídeos se acumulam em silêncio. Crie o hábito de ordenar essa pasta por tamanho uma vez por mês e revisar os arquivos do topo: essa conferida de cinco minutos impede que o disco encha de novo sem você perceber.",
            "O Sensor de Armazenamento embutido no Windows (em Configurações, Sistema, Armazenamento) limpa automaticamente arquivos temporários e a Lixeira: é uma base sólida e vale deixar ativado. Ele nunca toca, porém, nos seus próprios arquivos grandes, nos arquivos de vídeo ou nos downloads antigos, e esses pedem uma varredura recorrente própria.",
            "O Disk Mop automatiza essa rotina: a limpeza agendada (Scheduled Cleanup) cria tarefas de manutenção semanais ou mensais, e o limpador de downloads separa por categorias os arquivos antigos da sua pasta Downloads para você apagá-los em lote. Repita a varredura de arquivos grandes em intervalos regulares e um disco cheio nunca mais vai te pegar de surpresa.",
          ],
        },
      ],
      verdict: [
        "Encontrar arquivos grandes no Windows se resume a três camadas: uma busca size:gigantic no Explorador de Arquivos para a checagem rápida, uma análise em treemap para o mapa geral da unidade e um scanner automático de arquivos acima de 500 MB como auditoria recorrente. Usando os três juntos, recuperar dezenas de gigabytes numa sessão de quinze minutos é uma meta realista na maioria dos PCs.",
        "O Disk Mop reúne todo esse fluxo de trabalho em um único aplicativo: o treemap da análise de disco, o localizador de arquivos acima de 500 MB, o detector de duplicados baseado em SHA-256 e a limpeza agendada para a manutenção. Você pode testar de graça, e uma licença vitalícia de 19,90 $ em pagamento único libera tudo.",
      ],
      ctaText: "Encontre seus maiores arquivos com o Disk Mop",
    },
    ja: {
      title: "Windowsで大きいファイルを探す3つの方法｜Windows 10/11対応",
      metaDescription:
        "Windows 10/11で大きいファイルを見つける方法。エクスプローラーのサイズ フィルター、ツリーマップ分析、500 MB超の自動スキャンを使い、容量を圧迫しているファイルを数分で特定して空き容量を取り戻します。",
      subtitle: "エクスプローラーの隠れたsize:検索からツリーマップ分析まで — ディスクを圧迫しているファイルを数分で突き止める",
      intro: [
        "Windows 10/11で大きいファイルをいちばん早く見つける方法は、エクスプローラーを開いて「PC」を選び、検索ボックスに size:gigantic と入力することです。これだけで4 GBを超えるファイルがすべて一覧表示されます。全体像をつかみたいときは、ツリーマップ表示に対応したディスク分析ツールを使えば、ハードディスクの容量を何が占めているのかがひと目で分かります。どちらの方法も5分とかかりません。この記事では、その手順をひとつずつ順を追って説明します。",
        "ディスクは静かに埋まっていきます。書き出したまま忘れた動画、古い仮想マシンのディスク、もう遊ばなくなったゲーム。こうしたファイルは、目に触れないまま数十ギガバイトを飲み込みます。この記事は段階を追って進む構成です。まずエクスプローラーのあまり知られていない size: 検索演算子、次に視覚的なツリーマップ分析、最後に500 MBを超えるファイルをすべて拾い出す自動スキャン。読み終えるころには、ディスクを圧迫している大きいファイルを見つけ出し、それぞれをどうするか自信を持って判断できるようになります。",
      ],
      sections: [
        {
          title: "Windowsで大きいファイルが見つけにくい理由",
          content: [
            "エクスプローラーは既定ではフォルダーのサイズを表示せず、サイズ順の並べ替えも、いま開いているフォルダーの中でしか効きません。だからこそ、3階層下に埋もれた20 GBのファイルは、いつまでたっても目に留まらないのです。さらにWindowsは、システムファイルや一部のフォルダーを既定で非表示にします。容量を大きく食っているものの一部は、普通に見て回っているだけでは姿を現しません。",
            "まずざっと確認するなら、設定、システム、記憶域の順に開きます。Windows 10でもWindows 11でも、アプリ、一時ファイル、ドキュメントといったカテゴリー別にドライブの内訳が表示されます。全体の見当をつけるには便利ですが、あくまでカテゴリー単位です。「その他のファイル」が120 GBを占めていることは分かっても、それがどのファイルなのかまでは分かりません。パソコンの中の大きいファイルを1つずつ見ていくには、次に紹介する3つの方法が必要です。",
          ],
        },
        {
          title: "エクスプローラーのサイズ フィルターを使う（size:gigantic）",
          content: [
            "エクスプローラーを開き、検索対象がすべてに及ぶように「PC」またはC:ドライブを直接選びます。右上の検索ボックスをクリックして size: と入力すると、Windowsが候補のフィルターを提示します。空（0 KB）、極小（16 KBまで）、小（16 KB〜1 MB）、中（1〜128 MB）、大（128 MB〜1 GB）、特大（1〜4 GB）、巨大（4 GB超）です。いちばん手っ取り早いのは size:gigantic での検索で、4 GBを超えるファイルがすべて並びます。",
            "既定の区分が合わなければ、size:>500MB や size:>1GB のように自分でしきい値を書けます。結果が表示されたら表示形式を「詳細」に切り替え、「サイズ」列をクリックして大きい順に並べ替えてください。隠しファイルも対象にするには、Windows 11では表示、次に表示、そして「隠しファイル」を有効にします。Windows 10では表示タブの「隠しファイル」にチェックを入れます。",
            "注意点が2つあります。pagefile.sys や hiberfil.sys のようなシステムファイルには手を触れないこと、そしてWindowsフォルダーの中身は絶対に削除しないことです。OSの動作に必要なファイルだからです。この方法の限界も知っておきましょう。インデックスが作成されていないドライブでは検索に時間がかかることがあり、得られるのは、どのフォルダーが膨らんでいるかを示さないフラットな一覧にすぎません。",
          ],
        },
        {
          title: "ツリーマップで容量を食っている場所を視覚的に見つける",
          content: [
            "ツリーマップは、ドライブ全体を入れ子の長方形として描く表示方法です。それぞれの長方形の面積は、そのファイルやフォルダーが占める容量に比例します。巨大なブロックはすぐ目に飛び込んできますし、フラットな検索結果では分からない問いにも答えてくれます。フォルダーの階層のどこに重さが集まっているのか、という問いです。膨らんでいるのが動画フォルダーなのか、それとも忘れられたバックアップ用のフォルダーなのかが、ひと目で分かります。",
            "無料のツリーマップ ツールは以前から存在し、実際にきちんと役目を果たします。ただ、多くは画面が古びており、容量の大きいドライブではスキャンに時間がかかります。技術に詳しい方なら気になりませんが、結果をさっと見て掃除に移りたいだけの場合には、余計な手間に感じられます。",
            "Disk Mopのディスク分析（Disk Analysis）は、ドライブをスキャンして対話的なツリーマップを描き出します。どのフォルダーが容量を使っているかがすぐに分かり、フォルダーをクリックすればその中に降りていけますし、各項目が全体に占める割合も読み取れます。同じ操作感はWindows 10、Windows 11、macOSのいずれでもまったく変わりません。",
          ],
        },
        {
          title: "500 MBを超えるファイルを自動でスキャンする",
          content: [
            "手作業の検索はその場かぎりのスナップショットです。演算子の書き方を覚え、ドライブごとに検索を繰り返し、結果を自分でふるいにかける必要があります。大容量ファイルの自動スキャンは、この関係を逆にします。しきい値を一度決めておけば、あとはツールがディスク全体を回り、並べ替え済みの結果を返してくれます。",
            "Disk Mopの大容量ファイル検索（Large File Finder）は、まさにこれを行います。500 MBを超えるファイルをすべて検出し、サイズ順に並べた一覧に、それぞれの保存場所を添えて表示します。保存場所は重要です。そのファイルを消してよいかどうかは、どこに置かれているかを見て初めて判断できるからです。ツリーマップと組み合わせれば、全体の地図と詳細な明細の両方が手に入ります。",
            "実際の進め方としては、スキャンを実行したうえで、上位10件を1つずつ確認するのがおすすめです。取り戻せる容量のほとんどは、ほぼ必ずこの1ページ目に集まっています。古いディスク イメージ、動画ファイル、忘れられたダウンロードが、一覧の上位に固まって現れます。",
          ],
        },
        {
          title: "削除・移動・アーカイブを見極める",
          content: [
            "見つかった大きいファイルには、3つの箱に振り分けるルールを当てはめます。削除するもの。すでに実行し終えたインストーラー、古いISOイメージ、期限切れのバックアップ、明らかな重複です。移動するもの。残しておきたいけれど滅多に開かない動画アーカイブや写真のコレクションは、外付けドライブやネットワーク ストレージが適しています。アーカイブするもの。すでに動いていないプロジェクトのフォルダーは、右クリックしてZIPファイルに圧縮すれば、その場で小さくできます。",
            "安全のための決まりはシンプルです。Windowsフォルダーやプログラムのインストール先フォルダーからはファイルを削除しないこと、見覚えのないファイル名は手を付ける前に調べること。削除したファイルはごみ箱に移るだけで、空にするまではディスクの容量を使い続けることも忘れないでください。",
            "大きいファイルのうち意外に多くの割合が、実は重複ファイルです。同じ動画を2回書き出したもの、同じ写真フォルダーのバックアップが2つ、といった具合です。Disk Mopの重複ファイル検出（Duplicate Detector）はSHA-256ハッシュでファイルを比較するため、名前が違っていても中身が完全に同じコピーを安全に見つけ出せます。",
          ],
        },
        {
          title: "大きいファイルを増やさない習慣をつくる",
          content: [
            "多くのパソコンで最大の原因はダウンロード フォルダーです。インストーラー、ZIPアーカイブ、動画が静かに積み上がっていきます。月に一度このフォルダーをサイズ順に並べ替え、上位のファイルを見直す習慣をつけてください。この5分の点検があるだけで、ディスクが知らないうちにまた埋まってしまうのを防げます。",
            "Windows標準のストレージ センサー（設定、システム、記憶域）は、一時ファイルやごみ箱を自動で整理してくれます。土台としては優秀で、有効にしておく価値があります。ただし、自分で作った大きいファイルや動画アーカイブ、古いダウンロードには一切手を付けません。そちらには専用の定期スキャンが必要です。",
            "Disk Mopはこの定期作業を自動化します。スケジュール クリーンアップ（Scheduled Cleanup）で週次または月次のメンテナンスを設定でき、ダウンロード クリーナーはダウンロード フォルダーの古いファイルをカテゴリー別に整理して、まとめて削除できるようにします。大容量ファイルのスキャンも一定の間隔で回しておけば、ディスクの空き不足に驚かされることはもうありません。",
          ],
        },
      ],
      verdict: [
        "Windowsで大きいファイルを見つける作業は、3つの段階に整理できます。手早く確認するためのエクスプローラーでの size:gigantic 検索、ドライブ全体を俯瞰するためのツリーマップ分析、そして定期点検としての500 MB超の自動スキャンです。この3つを組み合わせれば、15分ほどの作業で数十ギガバイトを取り戻すことも、多くのパソコンで十分に現実的な目標になります。",
        "Disk Mopは、この一連の流れを1つのアプリにまとめています。ディスク分析のツリーマップ、500 MB超を洗い出す大容量ファイル検索、SHA-256ベースの重複ファイル検出、そしてメンテナンス用のスケジュール クリーンアップ。無料で試すことができ、買い切り19.90ドルの永続ライセンスですべての機能が使えるようになります。",
      ],
      ctaText: "Disk Mopで最大のファイルを見つけましょう",
    },
  },
};
