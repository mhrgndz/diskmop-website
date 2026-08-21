import type { Article } from '../types';

export const findDuplicateFilesWindows: Article = {
  slug: 'find-duplicate-files-windows',
  type: 'guide',
  category: 'Disk Cleanup',
  date: '2026-06-14',
  readingTime: 7,
  content: {
    tr: {
      title: 'Windows\'ta Yinelenen Dosyaları Bulma ve Silme Rehberi',
      metaDescription:
        'Windows\'ta yinelenen dosyaları bulma ve silme rehberi: Dosya Gezgini ile manuel arama, SHA-256 karma eşleştirme ve güvenli silme adımları. Hemen yer açın.',
      subtitle: 'Fotoğraf, video ve belgelerdeki gereksiz kopyaları güvenle temizleyin',
      intro: [
        'Windows\'ta yinelenen dosyaları bulmanın iki yolu vardır: Dosya Gezgini\'nde klasörleri boyuta ve ada göre sıralayarak bariz kopyaları elle tespit etmek ya da dosyaları SHA-256 karma (hash) değerine göre karşılaştıran bir yinelenen dosya bulucu ile sürücünüzü taramak. Güvenilir olan tek yöntem karma tabanlı taramadır, çünkü bir dosyayı silmeden önce iki kopyanın bayt bayt aynı olduğunu kanıtlar. Windows 10 ve 11\'de yerleşik bir yinelenen dosya bulucu bulunmadığından, ya biraz el emeği ya da özel bir araç gerekir.',
        'Yinelenen dosyalar sinsi bir alan tüketicisidir: aynı tatil fotoğrafları iki farklı klasörde, aynı video hem masaüstünde hem İndirilenler\'de, aynı PDF üç ayrı e-posta ekinde durabilir. Bu rehberde kopyaların nasıl biriktiğini, Dosya Gezgini ile neyin mümkün olup neyin olmadığını, karma eşleştirmenin neden tek güvenli yöntem olduğunu ve hangi kopyaları gönül rahatlığıyla silebileceğinizi adım adım göstereceğiz.',
      ],
      sections: [
        {
          title: 'Yinelenen Dosyalar Bilgisayarınızda Nasıl Birikir?',
          content: [
            'Kopyalar nadiren bilinçli bir kararla oluşur. Telefonunuzdaki fotoğrafları bilgisayara birden fazla kez aktarırsınız ve her aktarım yeni bir klasöre gider. Bir dosyayı indirdiğinizi unutup tekrar indirirsiniz ve Windows onu dosya (1).pdf olarak kaydeder. Önemli bir klasörü yedeklemek için masaüstüne kopyalar, sonra bu kopyayı unutursunuz. Bulut eşitleme çakışmaları ve tekrar tekrar kaydedilen e-posta ekleri de listeye eklenir.',
            'En büyük alan kaybı fotoğraf ve videolardan gelir. Tek bir telefon videosu yüzlerce megabayt tutabilir; aynı video iki klasörde duruyorsa kayıp ikiye katlanır. Yıllar içinde biriken mükerrer fotoğraf arşivleri, bilgisayardaki yinelenen fotoğrafların gigabaytlarca yer kaplamasına neden olur.',
            'Sorun yalnızca alan da değildir. Kopyalar arama sonuçlarını kirletir, yedekleme sürelerini uzatır ve hangi dosyanın güncel sürüm olduğu konusunda kafa karışıklığı yaratır. Diskiniz dolmaya başladığında ilk bakılacak yerlerden biri yinelenen dosyalardır.',
          ],
        },
        {
          title: 'Dosya Gezgini ile Yinelenen Dosyalar Manuel Bulunur mu?',
          content: [
            'Kısmen evet. Windows tuşu + E ile Dosya Gezgini\'ni açın ve İndirilenler ya da Resimler gibi kopya birikmesine yatkın bir klasöre gidin. Görünüm menüsünden Ayrıntılar düzenine geçin ve Boyut sütununun başlığına tıklayarak dosyaları boyuta göre sıralayın. Aynı ada ve aynı boyuta sahip yan yana dosyalar büyük olasılıkla kopyadır.',
            'İkinci bir hile, Windows\'un otomatik yeniden adlandırma kalıplarını aramaktır. Klasörün sağ üstündeki arama kutusuna (1) ya da Kopya yazın; Windows aynı klasöre ikinci kez kaydedilen dosyalara bu ekleri kendisi verir. Bu arama, bariz kopyaların çoğunu birkaç dakikada ortaya çıkarır.',
            'Manuel yöntemin sınırı da burasıdır. Yalnızca adında ipucu taşıyan kopyaları yakalar; IMG_1034.jpg dosyasının plaj-gunu.jpg olarak yeniden adlandırılmış kopyasını asla göremezsiniz. Aynı boyut da içerik aynılığını kanıtlamaz. Üstelik bu taramayı tüm sürücüde klasör klasör yapmak saatler alır. Depolama Alanı Algılayıcısı ve Disk Temizleme gibi yerleşik araçlar da yinelenen dosya aramaz; bu iş için içerik karşılaştırması gerekir.',
          ],
        },
        {
          title: 'Karma (Hash) Eşleştirme Neden Dosya Adından Daha Güvenilir?',
          content: [
            'Ad ve boyuta göre eşleştirme iki yönde de yanılır. Aynı ada ve hatta aynı boyuta sahip iki dosya farklı içerikler taşıyabilir; örneğin fatura.pdf dosyasının iki ayrı sürümü. Tersine, bayt bayt aynı olan iki dosya tamamen farklı adlar taşıyabilir. Ada güvenerek silme yaparsanız ya yanlış dosyayı kaybedersiniz ya da gerçek kopyaları gözden kaçırırsınız.',
            'SHA-256 karması, bir dosyanın içeriğinden hesaplanan benzersiz bir parmak izidir. İki dosyanın SHA-256 değeri aynıysa içerikleri bayt bayt aynıdır; tek bir bayt bile değişse karma tamamen farklı çıkar. Bunu kendiniz denemek isterseniz Komut İstemi\'nde certutil -hashfile dosyaadi.jpg SHA256 komutunu çalıştırıp iki dosyanın çıktısını karşılaştırabilirsiniz.',
            'Ancak binlerce dosya için bu komutu elle çalıştırmak pratik değildir. Yinelenen dosya bulucular bu işi otomatikleştirir: tüm dosyaların karmalarını hesaplar ve yalnızca birebir aynı olanları gruplar. Disk Mop\'un yinelenen dosya dedektörü (Duplicate Detector) da tam olarak bu SHA-256 tabanlı yaklaşımı kullanır.',
          ],
        },
        {
          title: 'Sürücünüzü Yinelenen Dosya Dedektörü ile Tarayın',
          content: [
            'Disk Mop\'un yinelenen dosya dedektörü, seçtiğiniz klasörü ya da sürücüyü tarar, her dosyanın SHA-256 karmasını hesaplar ve fotoğraf, video ve belgelerdeki birebir aynı kopyaları gruplar halinde listeler. Yalnızca içeriği aynı olan dosyalar eşleştirildiği için, ekranda gördüğünüz her grup gerçek bir kopya kümesidir; tahmine yer yoktur.',
            'Kullanımı basittir: Disk Mop\'u indirin (Windows 10/11 64-bit ve macOS 12+ desteklenir), yinelenen dosya dedektörünü açın ve taramak istediğiniz konumu seçin. Tarama bittiğinde her kopya grubunu dosya yollarıyla birlikte görürsünüz; hangi kopyanın kalacağına siz karar verirsiniz, onayınız olmadan hiçbir şey silinmez.',
            'Disk Mop\'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm tüm özellikleri tek seferlik $19.90 ödemeyle, ömür boyu lisansla açar. Abonelik yoktur.',
          ],
        },
        {
          title: 'Hangi Kopyaları Silmek Güvenlidir?',
          content: [
            'Basit bir kural işinizi görür: düzenli ve kalıcı konumdaki kopyayı tutun, başıboş olanları silin. Fotoğraf arşivinizdeki sürüm kalsın; İndirilenler, masaüstü ya da geçici klasörlerdeki kopyalar gitsin. Her gruptan mutlaka bir kopyayı koruyun; amaç dosyayı yok etmek değil, fazlalıkları temizlemektir.',
            'İki konuda dikkatli olun. Birincisi, Windows ve Program Files klasörlerinde yinelenen dosya temizliği yapmayın; uygulamalar aynı dosyanın kopyalarını meşru nedenlerle bulundurabilir ve silmek programları bozabilir. İkincisi, OneDrive gibi bulut eşitlemeli klasörlerde sildiğiniz dosyanın buluttan da silineceğini unutmayın.',
            'Güvenlik ağı olarak Geri Dönüşüm Kutusu\'nu kullanın: dosyaları kalıcı silmek yerine önce kutuya gönderin, birkaç gün sorun çıkmazsa boşaltın. Disk Mop her kopyanın tam yolunu gösterdiği için hangi sürümün ana kopya olduğunu kolayca ayırt edebilirsiniz.',
          ],
        },
        {
          title: 'Yinelenen Dosyaların Geri Gelmesini Önleyin',
          content: [
            'Temizlikten sonra birkaç küçük alışkanlık kopyaların yeniden birikmesini önler. Telefon fotoğraflarını her seferinde tek ve aynı klasöre aktarın. Bir dosyayı yeniden indirmeden önce İndirilenler klasörünü kontrol edin. Yedeklerinizi masaüstüne dağınık kopyalar halinde değil, tek bir düzenli yedek konumunda tutun.',
            'İndirilenler klasörü kopyaların bir numaralı kaynağı olduğundan onu düzenli tutmak büyük fark yaratır. Disk Mop\'un indirilenler temizleyicisi (Downloads Cleaner) klasördeki eski dosyaları kategorilere ayırarak temizlemenizi kolaylaştırır; zamanlanmış temizlik (Scheduled Cleanup) özelliği ise haftalık veya aylık otomatik bakım görevleriyle eski indirmelerin ve önbelleğin hiç birikmemesini sağlar.',
            'Son olarak ayda bir kez yinelenen dosya dedektörünü yeniden çalıştırın ve disk analizi (Disk Analysis) görünümüyle hangi klasörlerin büyüdüğünü takip edin. Birkaç dakikalık bu rutin, diskinizin dolmasını beklemeden sorunu kaynağında çözer.',
          ],
        },
      ],
      verdict: [
        'Windows\'ta yinelenen dosyaları bulma ve silme işinde Dosya Gezgini yalnızca bariz kopyaları yakalar: aynı ad, aynı klasör, (1) ekleri. Gerçek temizlik için içerik karşılaştırması şarttır ve bunun güvenilir yolu SHA-256 karma eşleştirmesidir; yalnızca bayt bayt aynı dosyalar kopya sayılmalıdır.',
        'Disk Mop bu işi tek uygulamada toplar: SHA-256 tabanlı yinelenen dosya dedektörü gerçek kopyaları bulur, disk analizi ve büyük dosya bulucu alanın nereye gittiğini gösterir, indirilenler temizleyicisi ve zamanlanmış temizlik ise kopyaların geri dönmesini engeller. Tek seferlik $19.90 karşılığında ömür boyu lisansla diskiniz temiz kalır.',
      ],
      ctaText: 'Disk Mop ile yinelenen dosyaları bulun ve temizleyin',
    },
    en: {
      title: 'How to Find Duplicate Files on Windows and Delete Them',
      metaDescription:
        'Learn how to find duplicate files on Windows with File Explorer and SHA-256 hash matching, plus which copies are safe to delete. Free up gigabytes today.',
      subtitle: 'Safely remove redundant copies of photos, videos and documents',
      intro: [
        'There are two ways to find duplicate files on Windows: sort folders by size and name in File Explorer to spot obvious copies manually, or scan your drive with a duplicate file finder that compares files by their SHA-256 hash. Hash-based scanning is the only reliable method, because it proves two files are byte-for-byte identical before you delete anything. Windows 10 and 11 have no built-in duplicate finder, so you either need a little manual work or a dedicated tool.',
        'Duplicates are a sneaky space hog: the same vacation photos in two folders, the same video on your desktop and in Downloads, the same PDF saved from three separate emails. In this guide we\'ll walk through how copies accumulate, what File Explorer can and can\'t do, why hash matching is the only safe approach, and which copies you can delete with confidence.',
      ],
      sections: [
        {
          title: 'How Duplicate Files Pile Up on Your PC',
          content: [
            'Duplicates rarely come from a deliberate decision. You import photos from your phone more than once, and each import lands in a new folder. You forget you already downloaded a file and download it again, so Windows saves it as file (1).pdf. You copy an important folder to the desktop as a quick backup and then forget about it. Cloud sync conflict copies and email attachments saved multiple times round out the list.',
            'Photos and videos are the worst offenders. A single phone video can weigh hundreds of megabytes, and if it sits in two folders the waste doubles. Over the years, repeated imports quietly build up duplicate photos on your PC that consume gigabytes of space.',
            'The cost isn\'t just storage. Duplicates pollute search results, make backups take longer, and create confusion about which file is the current version. When your drive starts filling up, duplicate files are one of the first places to look.',
          ],
        },
        {
          title: 'Can You Find Duplicates Manually in File Explorer?',
          content: [
            'Partially, yes. Press Windows key + E to open File Explorer and navigate to a folder where copies tend to collect, such as Downloads or Pictures. Switch to the Details layout from the View menu, then click the Size column header to sort files by size. Files sitting next to each other with the same name and the same size are very likely duplicates.',
            'A second trick is searching for Windows\' automatic rename patterns. Type (1) or Copy into the search box at the top right of the folder; Windows adds these suffixes itself whenever a file is saved into the same folder twice. This search surfaces most of the obvious copies in a few minutes.',
            'That\'s also where the manual method ends. It only catches copies whose names give them away; you\'ll never spot that IMG_1034.jpg has a renamed twin called beach-day.jpg. Matching sizes don\'t prove matching content either. And repeating this folder by folder across a whole drive takes hours. Built-in tools like Storage Sense and Disk Cleanup don\'t look for duplicates at all — this job requires comparing file contents.',
          ],
        },
        {
          title: 'Why Hash-Based Matching Beats Filename Matching',
          content: [
            'Matching by name and size fails in both directions. Two files with the same name and even the same size can hold different content — think of two revisions of invoice.pdf. Conversely, two byte-identical files can carry completely different names. If you delete based on names, you\'ll either lose the wrong file or miss real duplicates.',
            'A SHA-256 hash is a unique fingerprint computed from a file\'s content. If two files share the same SHA-256 value, their contents are byte-for-byte identical; change even a single byte and the hash comes out completely different. You can try this yourself in Command Prompt by running certutil -hashfile filename.jpg SHA256 on two files and comparing the output.',
            'Running that command by hand for thousands of files isn\'t practical, though. Duplicate file finders automate it: they hash every file and group only the ones that match exactly. Disk Mop\'s Duplicate Detector uses exactly this SHA-256-based approach.',
          ],
        },
        {
          title: 'Scan Your Drive with a Duplicate Detector',
          content: [
            'Disk Mop\'s Duplicate Detector scans the folder or drive you choose, computes the SHA-256 hash of every file, and lists byte-identical copies of photos, videos and documents in groups. Because only files with matching content are paired, every group you see on screen is a genuine set of duplicates — there\'s no guesswork involved.',
            'The workflow is simple: download Disk Mop (it supports Windows 10/11 64-bit and macOS 12+), open the Duplicate Detector, and pick the location you want to scan. When the scan finishes you see each duplicate group with full file paths, and you decide which copy stays — nothing is deleted without your confirmation.',
            'You can download Disk Mop for free and try it with limited features; Pro unlocks everything with a one-time $19.90 lifetime license. There\'s no subscription.',
          ],
        },
        {
          title: 'Which Duplicate Copies Are Safe to Delete?',
          content: [
            'A simple rule covers most cases: keep the copy in its organized, permanent location and delete the strays. The version in your photo archive stays; the copies in Downloads, on the desktop, or in temp folders can go. Always preserve one copy from every group — the goal is removing redundancy, not the file itself.',
            'Two areas deserve caution when you delete duplicate files on Windows 11 or 10. First, never deduplicate inside the Windows or Program Files folders; applications legitimately ship identical copies of some files, and removing them can break programs. Second, remember that in cloud-synced folders like OneDrive, deleting a local file removes it from the cloud as well.',
            'Use the Recycle Bin as your safety net: send files there instead of permanently deleting them, and empty it a few days later once nothing is missing. Because Disk Mop shows the full path of every copy, it\'s easy to tell which version is the master and which are the leftovers.',
          ],
        },
        {
          title: 'Keep Duplicates from Coming Back',
          content: [
            'After the cleanup, a few small habits stop copies from building up again. Import phone photos into one and the same folder every time. Check your Downloads folder before re-downloading a file. Keep backups in a single structured location instead of scattering copy-paste folders across your desktop.',
            'Since the Downloads folder is the number one source of duplicates, keeping it tidy makes a big difference. Disk Mop\'s Downloads Cleaner categorizes the old files in that folder so they\'re easy to clear out, and the Scheduled Cleanup feature runs weekly or monthly maintenance automatically, so old downloads and cache never pile up in the first place.',
            'Finally, re-run the Duplicate Detector about once a month and use the Disk Analysis treemap to watch which folders are growing. A few minutes of routine catches the problem at the source, long before your drive fills up.',
          ],
        },
      ],
      verdict: [
        'When it comes to finding duplicate files on Windows, File Explorer only catches the obvious ones: same name, same folder, a (1) suffix. A real cleanup requires comparing file contents, and the reliable way to do that is SHA-256 hash matching — only byte-identical files should ever count as duplicates.',
        'Disk Mop brings the whole job into one app: the SHA-256-based Duplicate Detector finds true copies, Disk Analysis and the Large File Finder show where your space is going, and the Downloads Cleaner plus Scheduled Cleanup keep duplicates from returning. All of it comes with a one-time $19.90 lifetime license.',
      ],
      ctaText: 'Find and remove duplicate files with Disk Mop',
    },
    de: {
      title: 'Doppelte Dateien unter Windows finden und löschen',
      metaDescription:
        'So finden Sie doppelte Dateien unter Windows: Datei-Explorer-Suche, SHA-256-Hash-Abgleich und sichere Löschtipps. Jetzt Speicherplatz freigeben.',
      subtitle: 'Überflüssige Kopien von Fotos, Videos und Dokumenten sicher entfernen',
      intro: [
        'Es gibt zwei Wege, doppelte Dateien unter Windows zu finden: Ordner im Datei-Explorer nach Größe und Name sortieren, um offensichtliche Kopien manuell zu erkennen, oder das Laufwerk mit einem Duplikatfinder scannen, der Dateien anhand ihres SHA-256-Hashes vergleicht. Nur der Hash-Abgleich ist wirklich zuverlässig, denn er beweist vor dem Löschen, dass zwei Dateien Byte für Byte identisch sind. Windows 10 und 11 haben keinen eingebauten Duplikatfinder — es braucht also etwas Handarbeit oder ein spezialisiertes Tool.',
        'Duplikate sind heimliche Speicherfresser: dieselben Urlaubsfotos in zwei Ordnern, dasselbe Video auf dem Desktop und in Downloads, dasselbe PDF aus drei E-Mails gespeichert. Dieser Leitfaden zeigt, wie Kopien entstehen, was der Datei-Explorer leisten kann, warum der Hash-Abgleich die einzig sichere Methode ist und welche Kopien Sie bedenkenlos löschen können.',
      ],
      sections: [
        {
          title: 'Wie sich doppelte Dateien auf dem PC ansammeln',
          content: [
            'Duplikate entstehen selten absichtlich. Fotos werden mehrfach vom Smartphone importiert, jedes Mal in einen neuen Ordner. Eine bereits heruntergeladene Datei wird erneut geladen und von Windows als datei (1).pdf gespeichert. Ein wichtiger Ordner wird als Schnellsicherung auf den Desktop kopiert und vergessen. Dazu kommen Konfliktkopien der Cloud-Synchronisierung und mehrfach gespeicherte E-Mail-Anhänge.',
            'Fotos und Videos sind die größten Platzfresser: Ein einziges Smartphone-Video kann Hunderte Megabytes belegen, und in zwei Ordnern verdoppelt sich der Verlust. Über die Jahre sammeln sich so doppelte Fotos an, die Gigabytes an Speicherplatz kosten.',
            'Es geht dabei nicht nur um Speicherplatz: Duplikate verstopfen Suchergebnisse, verlängern Backups und stiften Verwirrung darüber, welche Datei die aktuelle Version ist. Wenn das Laufwerk voll zu werden droht, gehören doppelte Dateien zu den ersten Stellen, an denen sich das Nachsehen lohnt.',
          ],
        },
        {
          title: 'Duplikate manuell im Datei-Explorer finden — geht das?',
          content: [
            'Teilweise, ja. Öffnen Sie den Datei-Explorer mit Windows-Taste + E und wechseln Sie in einen Ordner, in dem sich Kopien sammeln, etwa Downloads oder Bilder. Stellen Sie über das Ansicht-Menü das Layout Details ein und klicken Sie auf die Spaltenüberschrift Größe, um nach Dateigröße zu sortieren. Nebeneinanderliegende Dateien mit gleichem Namen und gleicher Größe sind sehr wahrscheinlich Kopien.',
            'Ein zweiter Trick: Suchen Sie nach den automatischen Umbenennungsmustern von Windows. Geben Sie (1) oder Kopie in das Suchfeld oben rechts ein — diese Zusätze vergibt Windows selbst, wenn eine Datei zweimal im selben Ordner landet. Diese Suche fördert die meisten offensichtlichen Kopien in wenigen Minuten zutage.',
            'Hier endet die manuelle Methode allerdings auch. Sie findet nur Kopien mit verräterischen Namen; dass IMG_1034.jpg einen umbenannten Zwilling namens strandtag.jpg hat, bleibt unsichtbar. Gleiche Größe beweist zudem keine gleichen Inhalte, und die Suche Ordner für Ordner über ein ganzes Laufwerk dauert Stunden. Auch Speicheroptimierung und Datenträgerbereinigung suchen keine Duplikate — dafür ist ein Inhaltsvergleich nötig.',
          ],
        },
        {
          title: 'Warum Hash-Abgleich besser ist als Dateinamen-Vergleich',
          content: [
            'Der Abgleich nach Name und Größe irrt in beide Richtungen: Zwei Dateien mit gleichem Namen und sogar gleicher Größe können unterschiedliche Inhalte haben, etwa zwei Versionen von rechnung.pdf. Umgekehrt können zwei Byte-identische Dateien völlig verschiedene Namen tragen. Wer nach Namen löscht, verliert entweder die falsche Datei oder übersieht echte Duplikate.',
            'Ein SHA-256-Hash ist ein eindeutiger Fingerabdruck des Dateiinhalts. Stimmen die SHA-256-Werte zweier Dateien überein, sind ihre Inhalte Byte für Byte identisch; ändert sich auch nur ein Byte, fällt der Hash völlig anders aus. Zum Ausprobieren: Führen Sie in der Eingabeaufforderung certutil -hashfile dateiname.jpg SHA256 für zwei Dateien aus und vergleichen Sie die Ausgabe.',
            'Für Tausende Dateien ist das von Hand unpraktisch. Duplikatfinder automatisieren den Vorgang: Sie berechnen die Hashes aller Dateien und gruppieren nur exakte Treffer. Genau diesen SHA-256-Ansatz verwendet der Duplikatfinder (Duplicate Detector) von Disk Mop.',
          ],
        },
        {
          title: 'Das Laufwerk mit einem Duplikatfinder scannen',
          content: [
            'Disk Mops Duplikatfinder scannt den gewählten Ordner oder das Laufwerk, berechnet für jede Datei den SHA-256-Hash und listet Byte-identische Kopien von Fotos, Videos und Dokumenten in Gruppen auf. Da nur inhaltsgleiche Dateien gepaart werden, ist jede angezeigte Gruppe ein echtes Duplikat-Set — ohne Rätselraten.',
            'Der Ablauf ist einfach: Disk Mop herunterladen (unterstützt Windows 10/11 64-Bit und macOS 12+), den Duplikatfinder öffnen und den gewünschten Ort auswählen. Nach dem Scan sehen Sie jede Duplikatgruppe mit vollständigen Dateipfaden und entscheiden selbst, welche Kopie bleibt — ohne Ihre Bestätigung wird nichts gelöscht.',
            'Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; Pro schaltet alles für einmalig 19,90 $ mit lebenslanger Lizenz frei. Ein Abo gibt es nicht.',
          ],
        },
        {
          title: 'Welche doppelten Kopien können gelöscht werden?',
          content: [
            'Eine einfache Regel genügt meist: Behalten Sie die Kopie am organisierten, dauerhaften Ort und löschen Sie die verstreuten Exemplare. Die Version im Fotoarchiv bleibt; die Kopien in Downloads, auf dem Desktop oder in temporären Ordnern können weg. Bewahren Sie aus jeder Gruppe immer eine Kopie auf — es geht darum, die Redundanz zu beseitigen, nicht die Datei selbst.',
            'Zwei Punkte erfordern Vorsicht, wenn Sie unter Windows 11 oder 10 doppelte Dateien löschen. Erstens: Löschen Sie niemals Duplikate in den Ordnern Windows oder Program Files — Programme legen identische Dateikopien aus guten Gründen ab, und deren Entfernung kann Anwendungen beschädigen. Zweitens: Bedenken Sie, dass in cloud-synchronisierten Ordnern wie OneDrive eine lokal gelöschte Datei auch aus der Cloud verschwindet.',
            'Nutzen Sie den Papierkorb als Sicherheitsnetz: erst dorthin verschieben, nach ein paar Tagen ohne Probleme endgültig leeren. Da Disk Mop den vollständigen Pfad jeder Kopie anzeigt, erkennen Sie leicht, welche Version das Original ist.',
          ],
        },
        {
          title: 'So verhindern Sie neue Duplikate',
          content: [
            'Nach dem Aufräumen verhindern ein paar kleine Gewohnheiten neuen Wildwuchs. Importieren Sie Smartphone-Fotos jedes Mal in ein und denselben Ordner. Prüfen Sie den Downloads-Ordner, bevor Sie eine Datei ein zweites Mal herunterladen. Und bewahren Sie Backups an einem einzigen strukturierten Ort auf, statt Kopien per Kopieren und Einfügen über den Desktop zu verstreuen.',
            'Da der Downloads-Ordner die häufigste Duplikatquelle ist, lohnt es sich, ihn sauber zu halten. Disk Mops Downloads-Bereiniger (Downloads Cleaner) kategorisiert alte Dateien für die schnelle Durchsicht, und die geplante Bereinigung (Scheduled Cleanup) erledigt wöchentliche oder monatliche Wartung automatisch, sodass sich alte Downloads und Cache gar nicht erst ansammeln.',
            'Führen Sie den Duplikatfinder etwa einmal im Monat erneut aus und beobachten Sie mit der Treemap der Festplattenanalyse (Disk Analysis), welche Ordner wachsen. Wenige Minuten Routine lösen das Problem an der Quelle — lange bevor Ihr Laufwerk voll ist.',
          ],
        },
      ],
      verdict: [
        'Beim Finden doppelter Dateien unter Windows erkennt der Datei-Explorer nur die offensichtlichen Fälle: gleicher Name, gleicher Ordner, ein (1)-Zusatz. Für ein echtes Aufräumen braucht es einen Inhaltsvergleich — und der zuverlässige Weg dafür ist der SHA-256-Hash-Abgleich, bei dem nur Byte-identische Dateien als Duplikate gelten.',
        'Disk Mop vereint die gesamte Aufgabe in einer App: Der SHA-256-basierte Duplikatfinder findet echte Kopien, Festplattenanalyse und Große-Dateien-Finder zeigen, wohin der Speicherplatz verschwindet, und Downloads-Bereiniger plus geplante Bereinigung verhindern neue Duplikate. Das alles mit einer einmaligen Lifetime-Lizenz für 19,90 $.',
      ],
      ctaText: 'Finden und entfernen Sie doppelte Dateien mit Disk Mop',
    },
    fr: {
      title: "Comment trouver et supprimer les fichiers en double sous Windows",
      metaDescription:
        "Trouvez les fichiers en double sous Windows : repérage manuel dans l'Explorateur de fichiers, comparaison par hachage SHA-256 et suppression sans risque.",
      subtitle: "Supprimez sans risque les copies redondantes de vos photos, vidéos et documents",
      intro: [
        "Il existe deux façons de trouver les fichiers en double sous Windows : trier les dossiers par taille et par nom dans l'Explorateur de fichiers pour repérer les copies évidentes à la main, ou analyser votre disque avec un détecteur de doublons qui compare les fichiers par leur empreinte SHA-256. Seule l'analyse par hash est réellement fiable, car elle prouve que deux fichiers sont identiques octet par octet avant que vous ne supprimiez quoi que ce soit. Windows 10 et 11 n'intègrent aucun détecteur de doublons : il faut donc soit un peu de travail manuel, soit un outil dédié.",
        "Les doublons sont des dévoreurs d'espace discrets : les mêmes photos de vacances dans deux dossiers, la même vidéo sur le Bureau et dans Téléchargements, le même PDF enregistré depuis trois e-mails différents. Dans ce guide, nous verrons comment les copies s'accumulent, ce que l'Explorateur de fichiers permet et ne permet pas, pourquoi la comparaison par hash est la seule approche sûre, et quelles copies vous pouvez supprimer en toute confiance.",
      ],
      sections: [
        {
          title: "Comment les fichiers en double s'accumulent sur votre PC",
          content: [
            "Les doublons résultent rarement d'une décision consciente. Vous importez plusieurs fois les photos de votre téléphone, et chaque import atterrit dans un nouveau dossier. Vous oubliez qu'un fichier est déjà téléchargé, vous le retéléchargez, et Windows l'enregistre sous le nom fichier (1).pdf. Vous copiez un dossier important sur le Bureau en guise de sauvegarde rapide, puis vous l'oubliez. Ajoutez à cela les copies de conflit de la synchronisation cloud et les pièces jointes enregistrées plusieurs fois.",
            "Les photos et les vidéos sont de loin les pires. Une seule vidéo de téléphone peut peser plusieurs centaines de mégaoctets, et si elle se trouve dans deux dossiers, le gaspillage double. Au fil des années, ces imports répétés font grossir en silence une collection de photos en double qui occupe plusieurs gigaoctets.",
            "Le coût ne se limite pas au stockage. Les doublons polluent les résultats de recherche, allongent la durée des sauvegardes et sèment le doute sur la version réellement à jour d'un fichier. Quand votre disque commence à saturer, les fichiers en double font partie des premiers endroits à inspecter.",
          ],
        },
        {
          title: "Peut-on trouver les doublons manuellement dans l'Explorateur de fichiers ?",
          content: [
            "En partie, oui. Appuyez sur la touche Windows + E pour ouvrir l'Explorateur de fichiers et rendez-vous dans un dossier où les copies s'accumulent, comme Téléchargements ou Images. Passez en disposition Détails depuis le menu Affichage, puis cliquez sur l'en-tête de colonne Taille pour trier les fichiers par taille. Deux fichiers voisins portant le même nom et la même taille sont très probablement des doublons.",
            "Deuxième astuce : rechercher les schémas de renommage automatique de Windows. Tapez (1) ou Copie dans la zone de recherche en haut à droite du dossier ; ce sont les suffixes que Windows ajoute lui-même lorsqu'un fichier est enregistré deux fois dans le même dossier. Cette recherche fait remonter la plupart des copies évidentes en quelques minutes.",
            "C'est aussi là que s'arrête la méthode manuelle. Elle ne repère que les copies dont le nom les trahit ; vous ne verrez jamais que IMG_1034.jpg possède un jumeau renommé journee-plage.jpg. Une taille identique ne prouve pas non plus un contenu identique. Et répéter l'opération dossier par dossier sur un disque entier prend des heures. Les outils intégrés comme l'Assistant de stockage et le Nettoyage de disque ne cherchent pas du tout les doublons : cette tâche exige de comparer le contenu des fichiers.",
          ],
        },
        {
          title: "Pourquoi la comparaison par hash l'emporte sur la comparaison par nom",
          content: [
            "La comparaison par nom et par taille se trompe dans les deux sens. Deux fichiers portant le même nom, et même la même taille, peuvent contenir des choses différentes : pensez à deux révisions de facture.pdf. À l'inverse, deux fichiers identiques octet par octet peuvent porter des noms totalement différents. Si vous supprimez en vous fiant aux noms, vous perdrez le mauvais fichier ou vous laisserez passer de vrais doublons.",
            "Une empreinte SHA-256 est une signature unique calculée à partir du contenu d'un fichier. Si deux fichiers partagent la même valeur SHA-256, leur contenu est identique octet par octet ; qu'un seul octet change et le hash devient complètement différent. Vous pouvez le vérifier vous-même dans l'Invite de commandes en exécutant certutil -hashfile nomfichier.jpg SHA256 sur deux fichiers, puis en comparant les résultats.",
            "Lancer cette commande à la main pour des milliers de fichiers n'a toutefois rien de pratique. Les détecteurs de doublons automatisent le travail : ils calculent l'empreinte de chaque fichier et ne regroupent que les correspondances exactes. Le détecteur de doublons (Duplicate Detector) de Disk Mop repose précisément sur cette approche fondée sur SHA-256.",
          ],
        },
        {
          title: "Analysez votre disque avec un détecteur de doublons",
          content: [
            "Le détecteur de doublons de Disk Mop analyse le dossier ou le disque de votre choix, calcule l'empreinte SHA-256 de chaque fichier et liste par groupes les copies identiques octet par octet de vos photos, vidéos et documents. Comme seuls les fichiers au contenu strictement identique sont appariés, chaque groupe affiché à l'écran est un véritable ensemble de doublons : aucune approximation.",
            "Le déroulé est simple : téléchargez Disk Mop (compatible Windows 10/11 64 bits et macOS 12+), ouvrez le détecteur de doublons et choisissez l'emplacement à analyser. À la fin de l'analyse, chaque groupe de doublons s'affiche avec les chemins complets des fichiers, et c'est vous qui décidez quelle copie reste : rien n'est supprimé sans votre confirmation.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro débloque tout avec une licence à vie payée une seule fois, 19,90 $. Il n'y a aucun abonnement.",
          ],
        },
        {
          title: "Quelles copies peut-on supprimer sans risque ?",
          content: [
            "Une règle simple couvre la plupart des cas : gardez la copie rangée à son emplacement définitif et supprimez les exemplaires égarés. La version de votre photothèque reste ; celles qui traînent dans Téléchargements, sur le Bureau ou dans des dossiers temporaires peuvent partir. Conservez toujours une copie par groupe : l'objectif est de supprimer la redondance, pas le fichier lui-même.",
            "Deux zones méritent de la prudence lorsque vous supprimez des fichiers en double sous Windows 11 ou 10. D'abord, ne dédoublonnez jamais les dossiers Windows et Program Files : les applications embarquent légitimement des copies identiques de certains fichiers, et les supprimer peut casser des programmes. Ensuite, rappelez-vous que dans les dossiers synchronisés avec le cloud comme OneDrive, supprimer un fichier en local le supprime aussi du cloud.",
            "Utilisez la Corbeille comme filet de sécurité : envoyez-y les fichiers au lieu de les supprimer définitivement, et videz-la quelques jours plus tard, une fois certain que rien ne manque. Comme Disk Mop affiche le chemin complet de chaque copie, il est facile de distinguer la version de référence des restes à éliminer.",
          ],
        },
        {
          title: "Empêchez les doublons de revenir",
          content: [
            "Après le nettoyage, quelques petites habitudes empêchent les copies de se reformer. Importez les photos de votre téléphone dans un seul et même dossier, à chaque fois. Vérifiez votre dossier Téléchargements avant de retélécharger un fichier. Conservez vos sauvegardes à un emplacement unique et structuré plutôt que de disperser des dossiers copiés-collés sur votre Bureau.",
            "Comme le dossier Téléchargements est la première source de doublons, le garder en ordre change beaucoup de choses. Le nettoyeur de téléchargements (Downloads Cleaner) de Disk Mop classe par catégories les anciens fichiers de ce dossier pour les passer en revue rapidement, et le nettoyage planifié (Scheduled Cleanup) exécute automatiquement un entretien hebdomadaire ou mensuel, si bien que les vieux téléchargements et le cache ne s'accumulent jamais.",
            "Enfin, relancez le détecteur de doublons environ une fois par mois et surveillez avec la treemap de l'analyse de disque (Disk Analysis) les dossiers qui grossissent. Quelques minutes de routine règlent le problème à la source, bien avant que votre disque ne soit plein.",
          ],
        },
      ],
      verdict: [
        "Pour trouver les fichiers en double sous Windows, l'Explorateur de fichiers ne repère que les cas évidents : même nom, même dossier, un suffixe (1). Un vrai nettoyage impose de comparer le contenu des fichiers, et la façon fiable de le faire est la comparaison par hash SHA-256 : seuls des fichiers identiques octet par octet devraient être considérés comme des doublons.",
        "Disk Mop réunit toute la tâche dans une seule application : le détecteur de doublons fondé sur SHA-256 trouve les vraies copies, l'analyse de disque et le détecteur de gros fichiers (Large File Finder) montrent où part votre espace, et le nettoyeur de téléchargements avec le nettoyage planifié empêchent les doublons de revenir. Le tout avec une licence à vie payée une seule fois, 19,90 $.",
      ],
      ctaText: "Trouvez et supprimez vos fichiers en double avec Disk Mop",
    },
    es: {
      title: "Cómo encontrar y eliminar archivos duplicados en Windows",
      metaDescription:
        "Aprende a encontrar archivos duplicados en Windows con el Explorador de archivos y la comparación de hash SHA-256, y qué copias puedes borrar sin riesgo.",
      subtitle: "Elimina con seguridad las copias redundantes de fotos, vídeos y documentos",
      intro: [
        "Hay dos formas de encontrar archivos duplicados en Windows: ordenar las carpetas por tamaño y nombre en el Explorador de archivos para detectar a mano las copias evidentes, o analizar la unidad con un buscador de duplicados que compara los archivos por su hash SHA-256. El análisis basado en hash es el único método fiable, porque demuestra que dos archivos son idénticos byte a byte antes de que borres nada. Windows 10 y 11 no incluyen ningún buscador de duplicados, así que necesitas algo de trabajo manual o una herramienta dedicada.",
        "Los duplicados son un devorador de espacio silencioso: las mismas fotos de vacaciones en dos carpetas, el mismo vídeo en el escritorio y en Descargas, el mismo PDF guardado desde tres correos distintos. En esta guía verás cómo se acumulan las copias, qué puede y qué no puede hacer el Explorador de archivos, por qué la comparación por hash es el único enfoque seguro y qué copias puedes borrar con total tranquilidad.",
      ],
      sections: [
        {
          title: "Cómo se acumulan los archivos duplicados en tu PC",
          content: [
            "Los duplicados casi nunca nacen de una decisión consciente. Importas las fotos del móvil más de una vez y cada importación acaba en una carpeta nueva. Olvidas que ya habías descargado un archivo, lo descargas otra vez y Windows lo guarda como archivo (1).pdf. Copias una carpeta importante al escritorio como copia de seguridad rápida y luego te olvidas de ella. A eso se suman las copias en conflicto de la sincronización en la nube y los adjuntos de correo guardados varias veces.",
            "Las fotos y los vídeos son los peores culpables. Un solo vídeo grabado con el móvil puede ocupar cientos de megabytes, y si está en dos carpetas el desperdicio se duplica. Con los años, esas importaciones repetidas van formando en silencio una colección de fotos duplicadas que se come varios gigabytes.",
            "Y el coste no es solo de almacenamiento. Los duplicados ensucian los resultados de búsqueda, alargan las copias de seguridad y generan dudas sobre cuál es la versión actual de un archivo. Cuando la unidad empieza a llenarse, los archivos duplicados son uno de los primeros sitios donde mirar.",
          ],
        },
        {
          title: "¿Se pueden encontrar duplicados a mano en el Explorador de archivos?",
          content: [
            "En parte, sí. Pulsa la tecla Windows + E para abrir el Explorador de archivos y ve a una carpeta donde se acumulen copias, como Descargas o Imágenes. Cambia al diseño Detalles desde el menú Vista y haz clic en el encabezado de la columna Tamaño para ordenar los archivos por tamaño. Dos archivos contiguos con el mismo nombre y el mismo tamaño son casi con seguridad duplicados.",
            "Un segundo truco consiste en buscar los patrones de renombrado automático de Windows. Escribe (1) o copia en el cuadro de búsqueda de la esquina superior derecha de la carpeta; son los sufijos que el propio Windows añade cuando un archivo se guarda dos veces en la misma carpeta. Esta búsqueda saca a la luz la mayoría de las copias evidentes en unos minutos.",
            "Ahí es también donde se acaba el método manual. Solo caza las copias cuyo nombre las delata; nunca descubrirás que IMG_1034.jpg tiene un gemelo renombrado como dia-de-playa.jpg. Un tamaño igual tampoco demuestra un contenido igual. Y repetir esto carpeta por carpeta en una unidad entera lleva horas. Herramientas integradas como el Sensor de almacenamiento y el Liberador de espacio en disco ni siquiera buscan duplicados: este trabajo exige comparar el contenido de los archivos.",
          ],
        },
        {
          title: "Por qué la comparación por hash gana a la comparación por nombre",
          content: [
            "Comparar por nombre y tamaño falla en las dos direcciones. Dos archivos con el mismo nombre, e incluso el mismo tamaño, pueden contener cosas distintas: piensa en dos revisiones de factura.pdf. Al revés, dos archivos idénticos byte a byte pueden llamarse de forma completamente distinta. Si borras guiándote por los nombres, perderás el archivo equivocado o dejarás escapar duplicados reales.",
            "Un hash SHA-256 es una huella única calculada a partir del contenido del archivo. Si dos archivos comparten el mismo valor SHA-256, su contenido es idéntico byte a byte; basta con que cambie un solo byte para que el hash salga completamente distinto. Puedes comprobarlo tú mismo en el Símbolo del sistema ejecutando certutil -hashfile nombrearchivo.jpg SHA256 sobre dos archivos y comparando la salida.",
            "Ejecutar ese comando a mano para miles de archivos no es práctico. Los buscadores de duplicados lo automatizan: calculan el hash de todos los archivos y agrupan solo los que coinciden exactamente. El detector de duplicados (Duplicate Detector) de Disk Mop utiliza justamente este enfoque basado en SHA-256.",
          ],
        },
        {
          title: "Analiza tu unidad con un detector de duplicados",
          content: [
            "El detector de duplicados de Disk Mop analiza la carpeta o la unidad que elijas, calcula el hash SHA-256 de cada archivo y agrupa las copias idénticas byte a byte de fotos, vídeos y documentos. Como solo se emparejan archivos con contenido idéntico, cada grupo que ves en pantalla es un conjunto real de duplicados: aquí no se adivina nada.",
            "El proceso es sencillo: descarga Disk Mop (compatible con Windows 10/11 de 64 bits y macOS 12+), abre el detector de duplicados y elige la ubicación que quieres analizar. Al terminar el análisis verás cada grupo de duplicados con las rutas completas de los archivos, y tú decides qué copia se queda: no se borra nada sin tu confirmación.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro lo desbloquea todo con una licencia de por vida de pago único, 19,90 $. No hay suscripción.",
          ],
        },
        {
          title: "¿Qué copias duplicadas se pueden borrar sin riesgo?",
          content: [
            "Una regla sencilla cubre casi todos los casos: conserva la copia que está en su ubicación ordenada y definitiva, y borra las sueltas. La versión de tu archivo fotográfico se queda; las copias en Descargas, en el escritorio o en carpetas temporales pueden irse. Guarda siempre una copia de cada grupo: el objetivo es eliminar la redundancia, no el archivo.",
            "Hay dos zonas que exigen prudencia cuando borras archivos duplicados en Windows 11 o 10. Primero, no elimines duplicados dentro de las carpetas Windows ni Program Files: las aplicaciones incluyen copias idénticas de algunos archivos por motivos legítimos y quitarlas puede romper programas. Segundo, recuerda que en carpetas sincronizadas con la nube como OneDrive, borrar un archivo local lo borra también de la nube.",
            "Usa la Papelera de reciclaje como red de seguridad: envía ahí los archivos en lugar de eliminarlos de forma permanente y vacíala unos días después, cuando compruebes que no falta nada. Como Disk Mop muestra la ruta completa de cada copia, es fácil distinguir cuál es la versión principal y cuáles son los sobrantes.",
          ],
        },
        {
          title: "Evita que los duplicados vuelvan",
          content: [
            "Después de la limpieza, unos pocos hábitos evitan que las copias se acumulen otra vez. Importa las fotos del móvil siempre a la misma carpeta. Revisa la carpeta Descargas antes de volver a descargar un archivo. Y guarda las copias de seguridad en una única ubicación estructurada en lugar de esparcir carpetas copiadas y pegadas por el escritorio.",
            "Como la carpeta Descargas es la fuente número uno de duplicados, mantenerla ordenada marca una gran diferencia. El limpiador de descargas (Downloads Cleaner) de Disk Mop clasifica por categorías los archivos antiguos de esa carpeta para que sea fácil vaciarla, y la limpieza programada (Scheduled Cleanup) ejecuta el mantenimiento semanal o mensual de forma automática, de modo que las descargas viejas y la caché no lleguen a acumularse.",
            "Por último, vuelve a ejecutar el detector de duplicados una vez al mes y usa el treemap del análisis de disco (Disk Analysis) para vigilar qué carpetas están creciendo. Unos minutos de rutina atajan el problema en su origen, mucho antes de que la unidad se llene.",
          ],
        },
      ],
      verdict: [
        "A la hora de encontrar archivos duplicados en Windows, el Explorador de archivos solo caza los casos obvios: mismo nombre, misma carpeta, un sufijo (1). Una limpieza de verdad exige comparar el contenido de los archivos, y la forma fiable de hacerlo es la comparación de hash SHA-256: solo los archivos idénticos byte a byte deberían contar como duplicados.",
        "Disk Mop reúne todo el trabajo en una sola aplicación: el detector de duplicados basado en SHA-256 encuentra las copias reales, el análisis de disco y el buscador de archivos grandes (Large File Finder) muestran adónde va tu espacio, y el limpiador de descargas junto con la limpieza programada evitan que los duplicados vuelvan. Todo ello con una licencia de por vida de pago único, 19,90 $.",
      ],
      ctaText: "Encuentra y elimina archivos duplicados con Disk Mop",
    },
    it: {
      title: "Come trovare ed eliminare i file duplicati su Windows",
      metaDescription:
        "Come trovare i file duplicati su Windows con Esplora file e il confronto degli hash SHA-256, e quali copie puoi eliminare senza rischi. Libera spazio subito.",
      subtitle: "Elimina in sicurezza le copie superflue di foto, video e documenti",
      intro: [
        "Ci sono due modi per trovare i file duplicati su Windows: ordinare le cartelle per dimensione e nome in Esplora file, individuando a mano le copie più evidenti, oppure analizzare l'unità con un rilevatore di duplicati che confronta i file in base al loro hash SHA-256. La scansione basata sull'hash è l'unico metodo davvero affidabile, perché dimostra che due file sono identici byte per byte prima che tu elimini qualcosa. Windows 10 e 11 non includono alcun rilevatore di duplicati: serve quindi un po' di lavoro manuale oppure uno strumento dedicato.",
        "I duplicati divorano spazio in silenzio: le stesse foto delle vacanze in due cartelle, lo stesso video sul desktop e in Download, lo stesso PDF salvato da tre e-mail diverse. In questa guida vediamo come si accumulano le copie, che cosa può e non può fare Esplora file, perché il confronto degli hash è l'unico approccio sicuro e quali copie puoi eliminare senza alcun timore.",
      ],
      sections: [
        {
          title: "Come si accumulano i file duplicati sul PC",
          content: [
            "I duplicati nascono raramente da una scelta consapevole. Importi le foto dal telefono più di una volta e ogni importazione finisce in una cartella nuova. Dimentichi di aver già scaricato un file, lo scarichi di nuovo e Windows lo salva come file (1).pdf. Copi una cartella importante sul desktop come backup veloce e poi te ne dimentichi. A completare il quadro ci sono le copie in conflitto della sincronizzazione cloud e gli allegati e-mail salvati più volte.",
            "Foto e video sono i colpevoli peggiori. Un singolo video girato con il telefono può pesare centinaia di megabyte e, se si trova in due cartelle, lo spreco raddoppia. Con gli anni, queste importazioni ripetute costruiscono in silenzio un archivio di foto duplicate che si mangia diversi gigabyte.",
            "Il costo però non è solo di spazio. I duplicati sporcano i risultati di ricerca, allungano i tempi di backup e creano confusione su quale sia la versione aggiornata di un file. Quando l'unità inizia a riempirsi, i file duplicati sono tra i primi posti da controllare.",
          ],
        },
        {
          title: "Si possono trovare i duplicati manualmente in Esplora file?",
          content: [
            "In parte sì. Premi il tasto Windows + E per aprire Esplora file e apri una cartella in cui le copie tendono ad accumularsi, come Download o Immagini. Passa al layout Dettagli dal menu Visualizza, poi fai clic sull'intestazione della colonna Dimensione per ordinare i file per dimensione. Due file vicini con lo stesso nome e la stessa dimensione sono quasi certamente duplicati.",
            "Un secondo trucco è cercare gli schemi di rinomina automatica di Windows. Digita (1) oppure copia nella casella di ricerca in alto a destra della cartella: sono i suffissi che Windows aggiunge da solo quando un file viene salvato due volte nella stessa cartella. Questa ricerca fa emergere gran parte delle copie evidenti in pochi minuti.",
            "Ed è anche qui che il metodo manuale si ferma. Intercetta solo le copie che si tradiscono nel nome; non scoprirai mai che IMG_1034.jpg ha un gemello rinominato giornata-al-mare.jpg. Nemmeno la dimensione identica dimostra un contenuto identico. E ripetere l'operazione cartella per cartella su un'intera unità richiede ore. Strumenti integrati come Sensore memoria e Pulizia disco non cercano affatto i duplicati: questo lavoro richiede il confronto del contenuto dei file.",
          ],
        },
        {
          title: "Perché il confronto degli hash batte il confronto dei nomi",
          content: [
            "Il confronto per nome e dimensione sbaglia in entrambe le direzioni. Due file con lo stesso nome, e perfino con la stessa dimensione, possono contenere cose diverse: pensa a due revisioni di fattura.pdf. Al contrario, due file identici byte per byte possono avere nomi completamente diversi. Se elimini fidandoti dei nomi, o perdi il file sbagliato o ti lasci sfuggire duplicati veri.",
            "Un hash SHA-256 è un'impronta univoca calcolata a partire dal contenuto del file. Se due file hanno lo stesso valore SHA-256, il loro contenuto è identico byte per byte; basta che cambi un solo byte e l'hash risulta completamente diverso. Puoi provarlo tu stesso nel Prompt dei comandi eseguendo certutil -hashfile nomefile.jpg SHA256 su due file e confrontando l'output.",
            "Eseguire quel comando a mano per migliaia di file, però, non è pratico. I rilevatori di duplicati automatizzano tutto: calcolano l'hash di ogni file e raggruppano solo le corrispondenze esatte. Il rilevatore di duplicati (Duplicate Detector) di Disk Mop usa esattamente questo approccio basato su SHA-256.",
          ],
        },
        {
          title: "Analizza l'unità con un rilevatore di duplicati",
          content: [
            "Il rilevatore di duplicati di Disk Mop analizza la cartella o l'unità che scegli, calcola l'hash SHA-256 di ogni file ed elenca in gruppi le copie identiche byte per byte di foto, video e documenti. Poiché vengono accoppiati solo i file con contenuto identico, ogni gruppo che vedi a schermo è un insieme reale di duplicati: non c'è nulla da indovinare.",
            "Il procedimento è semplice: scarica Disk Mop (supporta Windows 10/11 a 64 bit e macOS 12+), apri il rilevatore di duplicati e scegli la posizione da analizzare. Al termine della scansione vedi ogni gruppo di duplicati con i percorsi completi dei file e decidi tu quale copia resta: nulla viene eliminato senza la tua conferma.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro sblocca tutto con una licenza a vita pagata una sola volta, 19,90 $. Non ci sono abbonamenti.",
          ],
        },
        {
          title: "Quali copie duplicate si possono eliminare in sicurezza?",
          content: [
            "Una regola semplice copre quasi tutti i casi: tieni la copia che si trova nella sua posizione ordinata e definitiva ed elimina quelle sparse. La versione nell'archivio fotografico resta; le copie in Download, sul desktop o nelle cartelle temporanee possono andarsene. Conserva sempre una copia per ogni gruppo: l'obiettivo è eliminare la ridondanza, non il file.",
            "Due aree meritano prudenza quando elimini file duplicati su Windows 11 o 10. Primo, non deduplicare mai le cartelle Windows e Program Files: le applicazioni includono copie identiche di alcuni file per motivi legittimi e rimuoverle può danneggiare i programmi. Secondo, ricorda che nelle cartelle sincronizzate con il cloud come OneDrive eliminare un file in locale lo cancella anche dal cloud.",
            "Usa il Cestino come rete di sicurezza: sposta lì i file invece di eliminarli definitivamente e svuotalo dopo qualche giorno, quando avrai verificato che non manca nulla. Poiché Disk Mop mostra il percorso completo di ogni copia, è facile capire quale versione è l'originale e quali sono gli avanzi.",
          ],
        },
        {
          title: "Impedisci ai duplicati di tornare",
          content: [
            "Dopo la pulizia, poche piccole abitudini evitano che le copie si accumulino di nuovo. Importa le foto del telefono sempre nella stessa identica cartella. Controlla la cartella Download prima di riscaricare un file. E conserva i backup in un'unica posizione strutturata, invece di disseminare cartelle copiate e incollate sul desktop.",
            "Poiché la cartella Download è la prima fonte di duplicati, tenerla in ordine fa una grande differenza. Il pulitore dei download (Downloads Cleaner) di Disk Mop suddivide in categorie i file più vecchi di quella cartella, così è facile fare piazza pulita, e la pulizia pianificata (Scheduled Cleanup) esegue automaticamente la manutenzione settimanale o mensile, in modo che vecchi download e cache non si accumulino affatto.",
            "Infine, riesegui il rilevatore di duplicati circa una volta al mese e usa la treemap dell'analisi del disco (Disk Analysis) per tenere d'occhio quali cartelle stanno crescendo. Pochi minuti di routine risolvono il problema alla radice, molto prima che l'unità si riempia.",
          ],
        },
      ],
      verdict: [
        "Quando si tratta di trovare i file duplicati su Windows, Esplora file intercetta solo i casi ovvi: stesso nome, stessa cartella, il suffisso (1). Una pulizia vera richiede il confronto del contenuto dei file, e il modo affidabile per farlo è il confronto degli hash SHA-256: solo i file identici byte per byte dovrebbero essere considerati duplicati.",
        "Disk Mop riunisce l'intero lavoro in un'unica app: il rilevatore di duplicati basato su SHA-256 trova le copie vere, l'analisi del disco e la ricerca dei file di grandi dimensioni (Large File Finder) mostrano dove finisce lo spazio, mentre il pulitore dei download e la pulizia pianificata impediscono ai duplicati di tornare. Il tutto con una licenza a vita pagata una sola volta, 19,90 $.",
      ],
      ctaText: "Trova ed elimina i file duplicati con Disk Mop",
    },
    pt: {
      title: "Como encontrar e excluir arquivos duplicados no Windows",
      metaDescription:
        "Veja como encontrar arquivos duplicados no Windows com o Explorador de Arquivos e a comparação de hash SHA-256, e quais cópias dá para excluir com segurança.",
      subtitle: "Remova com segurança as cópias repetidas de fotos, vídeos e documentos",
      intro: [
        "Existem duas formas de encontrar arquivos duplicados no Windows: ordenar as pastas por tamanho e nome no Explorador de Arquivos para identificar as cópias óbvias manualmente, ou varrer a unidade com um localizador de duplicatas que compara os arquivos pelo hash SHA-256. A varredura baseada em hash é o único método confiável, porque prova que dois arquivos são idênticos byte a byte antes de você excluir qualquer coisa. O Windows 10 e o 11 não têm um localizador de duplicatas nativo, então é preciso um pouco de trabalho manual ou uma ferramenta dedicada.",
        "As duplicatas são devoradoras silenciosas de espaço: as mesmas fotos de viagem em duas pastas, o mesmo vídeo na área de trabalho e em Downloads, o mesmo PDF salvo a partir de três e-mails diferentes. Neste guia você vai ver como as cópias se acumulam, o que o Explorador de Arquivos consegue e não consegue fazer, por que a comparação por hash é a única abordagem segura e quais cópias dá para excluir com tranquilidade.",
      ],
      sections: [
        {
          title: "Como os arquivos duplicados se acumulam no seu PC",
          content: [
            "As duplicatas quase nunca vêm de uma decisão consciente. Você importa as fotos do celular mais de uma vez e cada importação cai em uma pasta nova. Esquece que já tinha baixado um arquivo, baixa de novo, e o Windows salva como arquivo (1).pdf. Copia uma pasta importante para a área de trabalho como backup rápido e depois esquece dela. Some a isso as cópias de conflito da sincronização na nuvem e os anexos de e-mail salvos várias vezes.",
            "Fotos e vídeos são os piores vilões. Um único vídeo gravado no celular pode ocupar centenas de megabytes e, se ele estiver em duas pastas, o desperdício dobra. Com o passar dos anos, essas importações repetidas formam em silêncio um acervo de fotos duplicadas que consome vários gigabytes.",
            "E o custo não é só de armazenamento. As duplicatas poluem os resultados de busca, alongam o tempo de backup e geram dúvida sobre qual arquivo é a versão atual. Quando a unidade começa a encher, os arquivos duplicados estão entre os primeiros lugares a investigar.",
          ],
        },
        {
          title: "Dá para encontrar duplicatas manualmente no Explorador de Arquivos?",
          content: [
            "Em parte, sim. Pressione a tecla Windows + E para abrir o Explorador de Arquivos e vá até uma pasta onde as cópias costumam se acumular, como Downloads ou Imagens. Mude para o layout Detalhes no menu Exibir e clique no cabeçalho da coluna Tamanho para ordenar os arquivos por tamanho. Arquivos vizinhos com o mesmo nome e o mesmo tamanho são quase sempre duplicatas.",
            "Um segundo truque é procurar pelos padrões de renomeação automática do Windows. Digite (1) ou cópia na caixa de pesquisa no canto superior direito da pasta: são os sufixos que o próprio Windows acrescenta quando um arquivo é salvo duas vezes na mesma pasta. Essa busca revela a maior parte das cópias óbvias em poucos minutos.",
            "É aí também que o método manual termina. Ele só pega as cópias que se entregam pelo nome; você nunca vai descobrir que IMG_1034.jpg tem um gêmeo renomeado como dia-de-praia.jpg. Tamanho igual também não prova conteúdo igual. E repetir isso pasta por pasta em uma unidade inteira leva horas. Ferramentas nativas como o Sensor de Armazenamento e a Limpeza de Disco nem sequer procuram duplicatas: esse trabalho exige comparar o conteúdo dos arquivos.",
          ],
        },
        {
          title: "Por que a comparação por hash vence a comparação por nome",
          content: [
            "Comparar por nome e tamanho erra nas duas direções. Dois arquivos com o mesmo nome, e até com o mesmo tamanho, podem ter conteúdos diferentes: pense em duas versões de fatura.pdf. Do lado oposto, dois arquivos idênticos byte a byte podem ter nomes completamente distintos. Se você excluir confiando nos nomes, vai perder o arquivo errado ou deixar passar duplicatas reais.",
            "Um hash SHA-256 é uma impressão digital única calculada a partir do conteúdo do arquivo. Se dois arquivos têm o mesmo valor SHA-256, o conteúdo deles é idêntico byte a byte; basta um único byte mudar para o hash sair completamente diferente. Você pode testar isso no Prompt de Comando executando certutil -hashfile nomedoarquivo.jpg SHA256 em dois arquivos e comparando a saída.",
            "Rodar esse comando manualmente para milhares de arquivos, porém, não é prático. Os localizadores de duplicatas automatizam o processo: calculam o hash de cada arquivo e agrupam apenas os que batem exatamente. O detector de duplicatas (Duplicate Detector) do Disk Mop usa exatamente essa abordagem baseada em SHA-256.",
          ],
        },
        {
          title: "Faça a varredura da unidade com um detector de duplicatas",
          content: [
            "O detector de duplicatas do Disk Mop varre a pasta ou a unidade que você escolher, calcula o hash SHA-256 de cada arquivo e lista em grupos as cópias idênticas byte a byte de fotos, vídeos e documentos. Como só arquivos com conteúdo igual são pareados, todo grupo que aparece na tela é um conjunto real de duplicatas: não há adivinhação.",
            "O fluxo é simples: baixe o Disk Mop (compatível com Windows 10/11 de 64 bits e macOS 12+), abra o detector de duplicatas e escolha o local que quer varrer. Quando a varredura termina, você vê cada grupo de duplicatas com os caminhos completos dos arquivos e decide qual cópia fica: nada é excluído sem a sua confirmação.",
            "Dá para baixar o Disk Mop de graça e testar com recursos limitados; a versão Pro libera tudo com uma licença vitalícia de pagamento único, 19,90 $. Não há assinatura.",
          ],
        },
        {
          title: "Quais cópias duplicadas dá para excluir com segurança?",
          content: [
            "Uma regra simples resolve a maioria dos casos: mantenha a cópia que está no lugar organizado e definitivo e exclua as avulsas. A versão do seu acervo de fotos fica; as cópias em Downloads, na área de trabalho ou em pastas temporárias podem ir embora. Preserve sempre uma cópia de cada grupo: o objetivo é eliminar a redundância, não o arquivo.",
            "Duas áreas pedem cuidado na hora de excluir arquivos duplicados no Windows 11 ou 10. Primeiro, nunca faça deduplicação dentro das pastas Windows e Program Files: os programas trazem cópias idênticas de alguns arquivos por motivos legítimos, e removê-las pode quebrar aplicativos. Segundo, lembre-se de que em pastas sincronizadas com a nuvem, como o OneDrive, excluir um arquivo local também o apaga da nuvem.",
            "Use a Lixeira como rede de segurança: mande os arquivos para lá em vez de excluí-los em definitivo e esvazie alguns dias depois, quando tiver certeza de que nada faz falta. Como o Disk Mop mostra o caminho completo de cada cópia, fica fácil saber qual versão é a principal e quais são as sobras.",
          ],
        },
        {
          title: "Evite que as duplicatas voltem",
          content: [
            "Depois da limpeza, alguns hábitos simples impedem que as cópias voltem a se acumular. Importe as fotos do celular sempre para a mesma pasta. Confira a pasta Downloads antes de baixar um arquivo de novo. E guarde os backups em um único local estruturado, em vez de espalhar pastas copiadas e coladas pela área de trabalho.",
            "Como a pasta Downloads é a fonte número um de duplicatas, mantê-la organizada faz muita diferença. O limpador de downloads (Downloads Cleaner) do Disk Mop separa os arquivos antigos dessa pasta em categorias, o que facilita a faxina, e a limpeza agendada (Scheduled Cleanup) executa a manutenção semanal ou mensal automaticamente, de modo que downloads velhos e cache nem cheguem a se acumular.",
            "Por fim, rode o detector de duplicatas mais ou menos uma vez por mês e use o treemap da análise de disco (Disk Analysis) para acompanhar quais pastas estão crescendo. Poucos minutos de rotina resolvem o problema na origem, muito antes de a unidade encher.",
          ],
        },
      ],
      verdict: [
        "Quando o assunto é encontrar arquivos duplicados no Windows, o Explorador de Arquivos só pega os casos óbvios: mesmo nome, mesma pasta, um sufixo (1). Uma limpeza de verdade exige comparar o conteúdo dos arquivos, e o jeito confiável de fazer isso é a comparação de hash SHA-256: só arquivos idênticos byte a byte deveriam contar como duplicatas.",
        "O Disk Mop reúne o trabalho inteiro em um só aplicativo: o detector de duplicatas baseado em SHA-256 encontra as cópias verdadeiras, a análise de disco e o localizador de arquivos grandes (Large File Finder) mostram para onde vai o seu espaço, e o limpador de downloads somado à limpeza agendada impede que as duplicatas voltem. Tudo isso com uma licença vitalícia de pagamento único, 19,90 $.",
      ],
      ctaText: "Encontre e remova arquivos duplicados com o Disk Mop",
    },
    ja: {
      title: "Windowsで重複ファイルを見つけて削除する方法",
      metaDescription:
        "Windowsで重複ファイルを見つけて削除する方法を解説します。「エクスプローラー」での手動チェック、SHA-256ハッシュによる確実な照合、安全に消せるコピーの見分け方、そして重複を増やさない習慣まで。写真や動画の無駄なコピーを整理して空き容量を取り戻しましょう。",
      subtitle: "写真・動画・書類の不要なコピーを安全に整理する",
      intro: [
        "Windowsで重複ファイルを見つける方法は2つあります。「エクスプローラー」でフォルダーをサイズと名前で並べ替え、明らかなコピーを目視で探す方法と、ファイルをSHA-256ハッシュで比較する重複ファイル検出ツールでドライブをスキャンする方法です。信頼できるのはハッシュを使ったスキャンだけです。削除する前に、2つのファイルが1バイトも違わないことを証明できるからです。Windows 10と11には重複ファイル検出機能が標準搭載されていないため、多少の手作業か専用ツールのどちらかが必要になります。",
        "重複ファイルはひそかに容量を食いつぶします。同じ旅行写真が2つのフォルダーに、同じ動画がデスクトップと「ダウンロード」フォルダーに、同じPDFが3通のメールからそれぞれ保存されている、といった具合です。この記事では、コピーがどのようにたまるのか、「エクスプローラー」でできることとできないこと、なぜハッシュ照合だけが安全な方法なのか、そしてどのコピーなら安心して削除できるのかを順に見ていきます。",
      ],
      sections: [
        {
          title: "重複ファイルがパソコンにたまっていく理由",
          content: [
            "重複ファイルは、意図して作られることはほとんどありません。スマートフォンの写真を何度も取り込めば、そのたびに新しいフォルダーへ保存されます。すでにダウンロード済みだったことを忘れてもう一度落とすと、Windowsは「ファイル (1).pdf」という名前で保存します。大事なフォルダーを簡易バックアップとしてデスクトップにコピーし、そのまま忘れてしまうこともあります。さらにクラウド同期の競合コピーや、何度も保存したメールの添付ファイルが加わります。",
            "特に容量を圧迫するのは写真と動画です。スマートフォンで撮った動画は1本で数百MBに達することもあり、それが2つのフォルダーにあれば無駄も倍になります。何年も取り込みを繰り返すうちに、重複した写真が静かに積み重なり、数ギガバイトを占めるようになります。",
            "問題は容量だけではありません。重複ファイルは検索結果を見づらくし、バックアップの時間を長くし、どれが最新版なのか分からなくさせます。ドライブの空きが減ってきたとき、まず確認したい場所の1つが重複ファイルです。",
          ],
        },
        {
          title: "「エクスプローラー」で重複ファイルを手動で探せますか",
          content: [
            "ある程度は可能です。Windowsキー + Eで「エクスプローラー」を開き、「ダウンロード」や「ピクチャ」など、コピーがたまりやすいフォルダーを表示します。「表示」メニューからレイアウトを「詳細」に切り替え、「サイズ」列の見出しをクリックしてファイルをサイズ順に並べ替えます。隣り合って並ぶ同じ名前・同じサイズのファイルは、重複である可能性がかなり高いといえます。",
            "もう1つのコツは、Windowsが自動で付ける名前のパターンを検索することです。フォルダー右上の検索ボックスに「(1)」または「コピー」と入力してください。同じフォルダーに同じファイルが2回保存されると、Windows自身がこれらの語を末尾に付けます。この検索だけで、分かりやすいコピーの大半は数分で洗い出せます。",
            "ただし、手作業で分かるのはここまでです。名前から重複と判断できるものしか見つけられず、IMG_1034.jpgに「海水浴.jpg」という名前で保存された双子がいても気づけません。サイズが同じでも中身が同じとは限りません。しかも、ドライブ全体をフォルダーごとに確認していけば何時間もかかります。「ストレージ センサー」や「ディスク クリーンアップ」といった標準機能も重複ファイルは探してくれません。この作業にはファイルの中身の比較が必要だからです。",
          ],
        },
        {
          title: "ファイル名よりハッシュ照合が確実な理由",
          content: [
            "名前とサイズによる照合は、どちらの方向にも間違えます。同じ名前で、しかも同じサイズのファイルが、まったく違う内容ということもあります。たとえば「請求書.pdf」の2つの改訂版です。逆に、1バイトも違わない同じ内容のファイルが、まったく別の名前で保存されていることもあります。名前を頼りに削除すると、必要なファイルを失うか、本物の重複を見逃すかのどちらかになります。",
            "SHA-256ハッシュは、ファイルの中身から計算される固有の指紋のようなものです。2つのファイルのSHA-256値が一致すれば、その中身は1バイトに至るまで同一です。逆に1バイトでも変われば、ハッシュはまったく別の値になります。試してみたい場合は、コマンド プロンプトで certutil -hashfile filename.jpg SHA256 を2つのファイルに実行し、出力を比べてみてください。",
            "とはいえ、何千ものファイルに対してこのコマンドを手で実行するのは現実的ではありません。重複ファイル検出ツールはこれを自動化し、すべてのファイルのハッシュを計算して、完全に一致するものだけをグループにまとめます。Disk Mopの重複ファイル検出（Duplicate Detector）も、まさにこのSHA-256方式を採用しています。",
          ],
        },
        {
          title: "重複ファイル検出でドライブをスキャンする",
          content: [
            "Disk Mopの重複ファイル検出は、指定したフォルダーやドライブをスキャンし、各ファイルのSHA-256ハッシュを計算して、内容が完全に一致する写真・動画・書類のコピーをグループごとに一覧表示します。中身が同じファイルだけが組み合わされるため、画面に並ぶグループはすべて本物の重複です。推測が入り込む余地はありません。",
            "使い方はシンプルです。Disk Mopをダウンロードし（Windows 10/11の64ビットとmacOS 12以降に対応）、重複ファイル検出を開いて、スキャンしたい場所を選びます。スキャンが終わると、重複グループごとにファイルのフルパスが表示され、どのコピーを残すかはご自身で決められます。確認なしに削除されることはありません。",
            "Disk Mopは無料でダウンロードでき、機能を絞った状態で試せます。Proはすべての機能を解放する買い切りの永続ライセンスで、19.90ドルです。サブスクリプションはありません。",
          ],
        },
        {
          title: "どの重複コピーなら安全に削除できますか",
          content: [
            "多くの場合は、シンプルな基準で判断できます。きちんと整理された保管場所にあるコピーを残し、あちこちに散らばったものを削除するという考え方です。写真アーカイブにある版は残し、「ダウンロード」やデスクトップ、一時フォルダーにあるコピーは削除して構いません。ただし、どのグループでも必ず1つはコピーを残してください。目的はファイルそのものを消すことではなく、重複をなくすことです。",
            "Windows 11や10で重複ファイルを削除するときは、2つの点に注意が必要です。1つ目は、WindowsフォルダーやProgram Filesフォルダーの中で重複削除をしないことです。アプリケーションは正当な理由で同じファイルのコピーを持っていることがあり、削除するとプログラムが動かなくなる場合があります。2つ目は、OneDriveのようなクラウド同期フォルダーでは、ローカルで削除したファイルがクラウドからも消えるという点です。",
            "安全策として「ごみ箱」を活用しましょう。完全に削除せずにいったんごみ箱へ送り、数日たって何も困らないことを確認してから空にします。Disk Mopは各コピーのフルパスを表示するため、どれが本来残すべき版で、どれが不要な残りものなのかを簡単に見分けられます。",
          ],
        },
        {
          title: "重複ファイルを増やさないために",
          content: [
            "片づけたあとは、ちょっとした習慣でコピーの再発を防げます。スマートフォンの写真は毎回同じ1つのフォルダーに取り込みましょう。ファイルをダウンロードし直す前に「ダウンロード」フォルダーを確認しましょう。バックアップはデスクトップにコピーを散らかすのではなく、決まった1か所にまとめて保管しましょう。",
            "「ダウンロード」フォルダーは重複ファイルの最大の発生源なので、ここを整理しておくだけでも大きな効果があります。Disk Mopのダウンロード クリーナー（Downloads Cleaner）は、このフォルダー内の古いファイルをカテゴリー別に整理して、まとめて片づけやすくします。スケジュール クリーンアップ（Scheduled Cleanup）は週次・月次のメンテナンスを自動で実行するため、古いダウンロードやキャッシュがそもそもたまりません。",
            "最後に、月に1回ほど重複ファイル検出を実行し、ディスク分析（Disk Analysis）のツリーマップでどのフォルダーが膨らんでいるかを確認しましょう。数分の習慣が、ドライブがいっぱいになるずっと前に原因を断ってくれます。",
          ],
        },
      ],
      verdict: [
        "Windowsで重複ファイルを見つける作業において、「エクスプローラー」で拾えるのは分かりやすいものだけです。同じ名前、同じフォルダー、末尾の (1) といったケースに限られます。本格的に片づけるにはファイルの中身を比較する必要があり、その確実な方法がSHA-256ハッシュの照合です。1バイトも違わないファイルだけを重複とみなすべきです。",
        "Disk Mopは、この一連の作業を1つのアプリにまとめています。SHA-256方式の重複ファイル検出が本物のコピーを見つけ出し、ディスク分析と大容量ファイル検索（Large File Finder）が容量の行き先を示し、ダウンロード クリーナーとスケジュール クリーンアップが重複の再発を防ぎます。これらすべてが、買い切り19.90ドルの永続ライセンスに含まれます。",
      ],
      ctaText: "Disk Mopで重複ファイルを見つけて削除しましょう",
    },
  },
};
