import type { Article } from '../types';

export const macStartupDiskFull: Article = {
  slug: 'mac-startup-disk-almost-full',
  type: 'guide',
  category: 'Mac Tips',
  date: '2026-07-18',
  readingTime: 8,
  content: {
    tr: {
      title: 'Mac Başlangıç Diski Neredeyse Dolu mu? Çözüm Rehberi',
      metaDescription:
        'Mac başlangıç diski neredeyse dolu uyarısı mı alıyorsunuz? macOS araçları ve Disk Mop ile disk alanı boşaltmayı adım adım öğrenin, uyarıdan kurtulun.',
      subtitle: 'Mac\'te Disk Alanı Boşaltma Rehberi — Adım Adım',
      intro: [
        '\'Başlangıç diskiniz neredeyse dolu\' uyarısı, Mac\'inizin açıldığı diskte — genellikle Macintosh HD adlı birimde — boş alanın kritik seviyeye düştüğü anlamına gelir. Sorunu çözmek için Çöp Sepeti\'ni boşaltın, İndirilenler klasörünü temizleyin, büyük ve yinelenen dosyaları silin, önbellekleri temizleyin ve nadiren kullandığınız dosyaları iCloud\'a veya harici bir diske taşıyın. Genellikle 10-20 GB alan açmak bile uyarının kaybolması için yeterlidir.',
        'macOS\'in sorunsuz çalışması için boş disk alanına sürekli ihtiyacı vardır: RAM dolduğunda bellek takası yapar, uygulamalar için geçici dosyalar oluşturur ve gigabaytlarca yer kaplayan sistem güncellemelerini indirir. Disk dolduğunda uygulamalar yavaşlar, dosyalar kaydedilemez ve güncellemeler yarıda kalır.',
        'Bu rehberde önce macOS\'in yerleşik depolama araçlarıyla adım adım alan açacağız, ardından aynı işi tek uygulamada toplayan Disk Mop\'un macOS 12 ve üzeri için sunduğu özelliklere bakacağız.',
      ],
      sections: [
        {
          title: '\'Başlangıç Diskiniz Neredeyse Dolu\' Uyarısı Gerçekte Ne Anlama Geliyor?',
          content: [
            'Başlangıç diski, Mac\'inizin macOS\'i çalıştırdığı sürücüdür; çoğu bilgisayarda Macintosh HD adlı dahili birimdir. Uyarı, bu birimdeki boş alan kritik seviyenin altına düştüğünde görünür. Bu yalnızca bir öneri değildir: macOS, elindeki alanla zar zor çalışabildiğini size bildirmektedir.',
            'macOS\'in çalışmak için sürekli boş alana ihtiyacı vardır. RAM dolduğunda bellek verilerini diske takas eder, uygulamalar için geçici dosyalar yazar ve büyük sistem güncellemelerini indirir. Macintosh HD dolduğunda uygulamaların yavaşladığını veya donduğunu, dosyaların kaydedilemediğini ve güncellemelerin başarısız olduğunu görürsünüz.',
            'Genel kural olarak başlangıç diskinizin en az %10-15\'ini boş tutmayı hedefleyin. macOS\'in bir kısım alanı \'temizlenebilir\' olarak göstermesi normaldir; bunlar iCloud dosyalarının yerel kopyaları gibi sistemin gerektiğinde kendi başına silebileceği verilerdir. Bu rehberin amacı, sizi bu güvenlik payının rahatça üzerine çıkarmaktır.',
          ],
        },
        {
          title: 'macOS Ayarlarından Neyin Yer Kapladığını Kontrol Edin',
          content: [
            'Herhangi bir şey silmeden önce alanı neyin kapladığını öğrenin. macOS Ventura ve sonrasında Apple menüsünden Sistem Ayarları\'nı açın, Genel bölümüne gidin ve Saklama Alanı\'na tıklayın. macOS Monterey\'de ise Apple menüsünden Bu Mac Hakkında\'yı seçin, Saklama Alanı sekmesine geçin ve Yönet düğmesine basın.',
            'Karşınıza kullanımı Uygulamalar, Belgeler, Fotoğraflar ve Sistem Verileri gibi kategorilere ayıran renkli bir çubuk çıkar. Altında macOS\'in yerleşik önerileri yer alır: iCloud\'da saklama, izlediğiniz film ve dizileri kaldırarak saklama alanını eniyileme ve Çöp Sepeti\'ni otomatik boşaltma. Bu seçenekleri açmak saniyeler sürer ve önemsediğiniz hiçbir şeyi silmeden alan kazandırabilir.',
            'Depolama özeti iyi bir başlangıç noktasıdır ama sınırları vardır. Sistem Verileri gibi kategoriler, içinde ne olduğunu açıklamadan onlarca gigabayt tutabilir ve alanın tam olarak nereye gittiğini görmek için klasörlere inme imkanı yoktur. Sonraki bölümlerdeki manuel adımlar — veya özel bir disk analiz aracı — tam bu noktada devreye girer.',
          ],
        },
        {
          title: 'Çöp Sepetini Boşaltın ve İndirilenler Klasörünü Temizleyin',
          content: [
            'Sildiğiniz dosyalar Çöp Sepeti boşaltılana kadar aslında silinmez ve başlangıç diskinde yer kaplamaya devam eder. Dock\'taki Çöp Sepeti simgesine Ctrl ile tıklayıp boşaltma seçeneğini kullanın veya Finder\'da Çöp Sepeti\'ni açıp Boşalt düğmesine basın. Bunu macOS\'in otomatik yapmasını isterseniz Finder ayarlarında İleri Düzey sekmesinden öğelerin 30 gün sonra silinmesi seçeneğini etkinleştirin.',
            'İndirilenler klasörü diğer klasik alan tüketicisidir. Finder\'da Git menüsünden İndirilenler\'i seçin (veya Option-Command-L kısayolunu kullanın), liste görünümüne geçip boyuta göre sıralayın. Uzun süre önce kullandığınız disk görüntüleri (.dmg), yükleyiciler (.pkg) ve .zip arşivleri genellikle hemen silinebilir; yükledikleri uygulamalar bundan etkilenmez.',
            'Disk Mop, macOS 12 ve sonrasında her iki işi de otomatikleştirir. İndirilenler Temizleyicisi (Downloads Cleaner) klasördeki eski dosyaları kategorilere ayırarak toplu şekilde temizlemenizi sağlar; tek tıklık Hızlandır (Speed Up) özelliği ise eski indirmeleri, önbellekleri ve Çöp Sepeti\'ni tek seferde temizler.',
          ],
        },
        {
          title: 'Büyük ve Yinelenen Dosyaları Bulup Silin',
          content: [
            'Unutulmuş birkaç büyük dosya, çoğu zaman binlerce küçük dosyadan daha fazla yer kaplar. Bunları elle bulmak için bir Finder penceresi açın, Command-F\'e basın, aramayı Bu Mac olarak ayarlayın ve ölçüt listesine dosya büyüklüğü filtresini ekleyerek (listede yoksa Diğer seçeneğinden ekleyebilirsiniz) 500 MB\'tan büyük dosyaları arayın. Eski video dışa aktarımları, sanal makine diskleri ve yedek arşivleri tipik suçlulardır.',
            'Yinelenen dosyaları elle yakalamak daha zordur çünkü kopyalar genellikle farklı adlar taşır ve farklı klasörlerde bulunur. İki kez dışa aktarılan aynı fotoğraf veya \'ne olur ne olmaz\' diye kopyalanan bir proje klasörü, zaten dolu olan Macintosh HD\'de sessizce gigabaytlarca alan harcayabilir.',
            'Disk Mop en görünür işini burada yapar. Disk Analizi (Disk Analysis) başlangıç diskinizi tarayıp görsel bir treemap olarak gösterir; en çok yer kaplayan klasörler anında göze çarpar. Büyük Dosya Bulucu (Large File Finder) 500 MB üzerindeki her şeyi tek listede toplar, Yinelenen Dosya Dedektörü (Duplicate Detector) ise dosya içeriklerini SHA-256 karmalarıyla karşılaştırarak birebir aynı fotoğraf, video ve belgeleri bulur — böylece yalnızca adı benzeyen dosyaları değil, gerçek kopyaları silersiniz.',
          ],
        },
        {
          title: 'Uygulama ve Tarayıcı Önbelleklerini Güvenle Temizleyin',
          content: [
            'Uygulamalar ve tarayıcılar işleri hızlandırmak için veri önbelleğe alır ve bu önbellekler sessizce gigabaytlarca büyüyebilir. Elle incelemek için Finder\'da Git menüsünden Klasöre Git\'i seçin (Shift-Command-G) ve ~/Library/Caches yazın. Tanıdığınız uygulamalara ait önbellek klasörlerinin içeriğini güvenle silebilirsiniz — uygulamalar bunları yeniden oluşturur — ancak ne olduğundan emin olmadığınız klasörlere dokunmayın.',
            'Tarayıcılar kendi depolama alanlarını kendileri yönetir. Safari\'de Ayarlar\'ı açın, Gizlilik bölümüne gidin ve web sitesi verilerini yönetme ekranından kayıtlı site verilerini kaldırın; Chrome ve Firefox benzer seçenekleri tarama verilerini temizleme ayarlarında sunar. Tarayıcı verilerini temizlemenin sizi web sitelerindeki oturumlardan çıkarabileceğini unutmayın.',
            'Library klasörlerinde dolaşmak gözünüzü korkutuyorsa Disk Mop\'un Önbellek Temizleyicisi (Cache Cleaner) sistem ve uygulama önbelleklerini tarayarak nelerin güvenle silinebileceğini gösterir. Tarayıcı Önbelleği Temizleyicisi ise Safari, Chrome, Firefox ve Edge\'i tek yerden temizler; her tarayıcının menülerinde tek tek gezinmenize gerek kalmaz.',
          ],
        },
        {
          title: 'Dosyaları iCloud\'a veya Harici Diske Taşıyın',
          content: [
            'Bazı dosyalar saklamaya değer ama başlangıç diskinde durmak zorunda değildir. macOS bunları iCloud\'a taşıyabilir: depolama ayarlarında iCloud\'da saklama seçeneğini etkinleştirdiğinizde eski dosyalar ve tam çözünürlüklü fotoğraflar bulutta tutulur, Mac\'inizde yalnızca hafif yer tutucular kalır. iCloud\'un ücretsiz alanı küçüktür; büyük arşivler için ücretli bir iCloud+ planı gerekir.',
            'Harici bir SSD veya sabit disk, tek seferlik maliyeti olan bir alternatiftir. Video projeleri ve eski fotoğraf arşivleri gibi yer kaplayan klasörleri harici diske taşıyın, kopyaların açıldığını doğrulayın, ardından orijinalleri silip Çöp Sepeti\'ni boşaltın. Yeri doldurulamaz veriler için ikinci bir kopya bulundurun — ayrı bir diskte tutulan Time Machine yedeği en basit sigortadır.',
          ],
        },
        {
          title: 'Başlangıç Diskinizi Otomatik Olarak Temiz Tutun',
          content: [
            'Bir kez alan açmak iyidir; alanı boş tutmak daha iyidir. Çöp Sepeti\'nin otomatik boşaltılmasını açın, İndirilenler klasörünü ayda bir gözden geçirin ve boş alan azaldığında depolama özetine bakın. Bu küçük alışkanlıklar, uyarının bir projenin tam ortasında aniden belirdiği panik anlarını önler.',
            'Disk Mop tam da bu tür bakım için tasarlandı. Zamanlanmış Temizlik (Scheduled Cleanup) haftalık veya aylık görevlerle önbellekleri, eski indirmeleri ve Çöp Sepeti\'ni birikmeden otomatik olarak temizler; Sistem Sağlık Skoru ise Mac\'inizin genel durumunu tek bakışta gösterir.',
            'Rutin oturduğunda \'başlangıç diskiniz neredeyse dolu\' uyarısı geçmişte kalır. Mac\'iniz bellek takası ve güncellemeler için her zaman sağlıklı bir boş alan payı korur ve bir daha aceleyle onlarca gigabayt temizlemek zorunda kalmazsınız.',
          ],
        },
      ],
      verdict: [
        'Başlangıç diski neredeyse dolu uyarısı, aslında Macintosh HD\'nin nefes alacak alana ihtiyacı olduğu anlamına gelir. Çöp Sepeti\'ni boşaltmak, İndirilenler klasörünü temizlemek, büyük ve yinelenen dosyaları silmek, önbellekleri temizlemek ve az kullanılan verileri iCloud\'a veya harici diske taşımak alanı geri kazandırır — bu adımların tamamı macOS\'in yerleşik araçlarıyla ve biraz sabırla yapılabilir.',
        'Disk Mop, tüm bu kontrol listesini macOS 12 ve üzeri için tek uygulamada toplar: Disk Analizi, Büyük Dosya Bulucu, Yinelenen Dosya Dedektörü, İndirilenler Temizleyicisi, önbellek temizliği ve Zamanlanmış Temizlik birlikte çalışarak başlangıç diskinizi elle uğraşmadan temiz tutar. Uygulamayı sınırlı özelliklerle ücretsiz indirebilir, $9.90 tutarında tek seferlik ödemeyle ömür boyu lisansa ve tüm özelliklere sahip olabilirsiniz.',
      ],
      ctaText: 'Disk Mop ile Mac\'inizde disk alanı boşaltın',
    },
    en: {
      title: 'Mac Startup Disk Almost Full? Here\'s How to Fix It',
      metaDescription:
        'Is your Mac startup disk almost full? Learn what the warning means and free up disk space with built-in macOS tools and Disk Mop, step by step. Fix it now.',
      subtitle: 'A Step-by-Step Guide to Freeing Up Disk Space on Your Mac',
      intro: [
        'The \'Your startup disk is almost full\' warning means the disk your Mac boots from — usually the internal volume named Macintosh HD — has almost no free space left. To fix it, empty the Trash, clean out your Downloads folder, delete large and duplicate files, clear caches, and move rarely used files to iCloud or an external drive. Freeing up even 10-20 GB is usually enough to make the warning disappear.',
        'macOS constantly needs free disk space to run smoothly: it swaps memory to disk when your RAM fills up, writes temporary files for apps, and downloads system updates that weigh several gigabytes. When the disk fills up, apps slow down, files refuse to save, and updates fail halfway through.',
        'In this guide we will first free up space step by step with the storage tools built into macOS, then look at how Disk Mop bundles the same job into a single app for macOS 12 and later.',
      ],
      sections: [
        {
          title: 'What the Startup Disk Is Almost Full Warning Really Means',
          content: [
            'Your startup disk is the drive your Mac runs macOS from — on most machines it is the internal volume named Macintosh HD. The warning appears when free space on that volume drops below a critical level. It is not just a suggestion: macOS is telling you it can barely operate with the space it has left.',
            'macOS needs free space continuously while it works. It swaps memory data to disk when your RAM is full, writes temporary files for applications, and downloads large system updates. When Macintosh HD is full, you will notice apps slowing down or freezing, files failing to save, and updates refusing to install.',
            'As a rule of thumb, aim to keep at least 10-15% of your startup disk free. It is also normal for macOS to report some space as purgeable — data like local copies of iCloud files that the system can remove on its own when needed. The goal of this guide is to get you comfortably past that safety margin.',
          ],
        },
        {
          title: 'Check What Is Using Storage in macOS Settings',
          content: [
            'Before deleting anything, find out what is actually taking up space. On macOS Ventura and later, open the Apple menu, choose System Settings, go to General, and click Storage. On macOS Monterey, open the Apple menu, choose About This Mac, switch to the Storage tab, and press Manage.',
            'You will see a color-coded bar that breaks your usage into categories such as Applications, Documents, Photos, and System Data. Below it, macOS offers built-in recommendations: storing files in iCloud, optimizing storage by removing watched movies and TV shows, and emptying the Trash automatically. Turning these on takes seconds and can recover space without deleting anything you care about.',
            'The storage overview is a good starting point, but it has limits. Categories like System Data can hold tens of gigabytes without explaining what is inside, and there is no way to drill down into individual folders to see exactly where the space went. That is where the manual steps in the next sections — or a dedicated disk analysis tool — come in.',
          ],
        },
        {
          title: 'Empty the Trash and Clean Out the Downloads Folder',
          content: [
            'Files you delete are not actually gone until you empty the Trash, and they keep occupying your startup disk in the meantime. Ctrl-click the Trash icon in the Dock and choose the empty option, or open the Trash in Finder and click Empty. If you want macOS to handle this for you, open Finder settings, go to the Advanced tab, and enable the option to remove items from the Trash after 30 days.',
            'The Downloads folder is the other classic space hog. In Finder, choose the Go menu and then Downloads (or press Option-Command-L), switch to list view, and sort by size. Old disk images (.dmg), installers (.pkg), and .zip archives you used long ago can usually be deleted right away — the apps they installed remain untouched.',
            'Disk Mop automates both jobs on macOS 12 and later. Its Downloads Cleaner categorizes the old files sitting in your Downloads folder so you can clear them out in bulk, and its one-click Speed Up feature cleans old downloads, caches, and the Trash in a single pass.',
          ],
        },
        {
          title: 'Find and Remove Large and Duplicate Files',
          content: [
            'A handful of forgotten large files often takes up more space than thousands of small ones. To hunt them down manually, open a Finder window, press Command-F, set the search to This Mac, and add a file size filter (choose Other in the criteria list if it is not shown) to look for files larger than 500 MB. Old video exports, virtual machine disks, and backup archives are the usual suspects.',
            'Duplicates are harder to catch by hand, because copies often carry different names and live in different folders. The same photo exported twice, or a project folder copied \'just in case\', can quietly waste gigabytes on a Macintosh HD that is already full.',
            'This is where Disk Mop does its most visible work. Disk Analysis scans your startup disk and displays it as a visual treemap, so the folders taking the most space jump out immediately. Large File Finder collects everything over 500 MB in one list, and Duplicate Detector compares file contents using SHA-256 hashes to find identical photos, videos, and documents — so you delete real copies, not files that merely share a name.',
          ],
        },
        {
          title: 'Clear App and Browser Caches Safely',
          content: [
            'Apps and browsers cache data to speed things up, and those caches can quietly grow to many gigabytes. To inspect them manually, open Finder, choose the Go menu, then Go to Folder (Shift-Command-G), and enter ~/Library/Caches. You can safely delete the contents of cache folders belonging to apps you recognize — the apps will simply rebuild them — but leave folders alone if you are not sure what they belong to.',
            'Browsers manage their own storage. In Safari, open Settings, go to Privacy, and use the manage website data screen to remove stored site data; Chrome and Firefox offer similar options in their clear browsing data settings. Keep in mind that clearing browser data may sign you out of websites.',
            'If digging through Library folders feels risky, Disk Mop\'s Cache Cleaner scans system and application caches and shows exactly what can be removed safely. Its Browser Cache Cleaner covers Safari, Chrome, Firefox, and Edge in one place, so you can clear cache on your Mac without stepping through each browser\'s menus.',
          ],
        },
        {
          title: 'Offload Files to iCloud or an External Drive',
          content: [
            'Some files are worth keeping but do not need to live on your startup disk. macOS can offload them to iCloud: enable the store in iCloud option in the storage settings and older files and full-resolution photos are kept in the cloud, while only lightweight placeholders stay on your Mac. Note that iCloud\'s free tier is small, so larger libraries require a paid iCloud+ plan.',
            'An external SSD or hard drive is an alternative with a one-time cost. Move space-hungry folders such as video projects and old photo archives to the external drive, verify the copies open correctly, then delete the originals and empty the Trash. For irreplaceable data, keep a second copy — a Time Machine backup on a separate drive is the simplest insurance.',
          ],
        },
        {
          title: 'Keep Your Startup Disk Lean Automatically',
          content: [
            'Freeing up space once is good; keeping it free is better. Turn on automatic Trash emptying, review your Downloads folder monthly, and check the storage overview whenever free space starts to dip. These small habits prevent the panic moment when the warning suddenly appears in the middle of a project.',
            'Disk Mop is built for exactly this kind of maintenance. Scheduled Cleanup runs weekly or monthly cleaning tasks automatically, clearing caches, old downloads, and the Trash before they pile up, while the System Health Score gives you an at-a-glance indicator of how your Mac is doing.',
            'With a routine in place, the \'startup disk almost full\' warning becomes a thing of the past. Your Mac keeps a healthy buffer of free space for memory swapping and updates, and you never have to clear tens of gigabytes in a hurry again.',
          ],
        },
      ],
      verdict: [
        'The startup disk almost full warning simply means Macintosh HD needs breathing room. Emptying the Trash, cleaning the Downloads folder, deleting large and duplicate files, clearing caches, and offloading rarely used data to iCloud or an external drive will recover the space — every one of these steps can be done with macOS\'s built-in tools and a bit of patience.',
        'Disk Mop packs the whole checklist into a single app for macOS 12 and later: Disk Analysis, Large File Finder, Duplicate Detector, Downloads Cleaner, cache cleaning, and Scheduled Cleanup work together so your startup disk stays lean without manual digging. You can download it for free with limited features, and a one-time payment of $9.90 unlocks the full toolkit with a lifetime license.',
      ],
      ctaText: 'Free up your Mac\'s startup disk with Disk Mop',
    },
    de: {
      title: 'Mac-Startvolume fast voll? So schaffen Sie Platz',
      metaDescription:
        'Mac-Startvolume fast voll? Erfahren Sie, was die Warnung bedeutet und wie Sie mit macOS-Bordmitteln und Disk Mop Schritt für Schritt Platz schaffen.',
      subtitle: 'Schritt-für-Schritt-Anleitung zum Freigeben von Speicherplatz auf dem Mac',
      intro: [
        'Die Meldung \'Dein Startvolume ist fast voll\' bedeutet, dass auf dem Laufwerk, von dem Ihr Mac startet — meist das interne Volume Macintosh HD —, kaum noch freier Speicherplatz vorhanden ist. Die Lösung: Papierkorb entleeren, den Downloads-Ordner aufräumen, große Dateien und Duplikate löschen, Caches leeren und selten genutzte Dateien in iCloud oder auf eine externe Festplatte auslagern. Schon 10-20 GB freier Platz lassen die Warnung in der Regel verschwinden.',
        'macOS braucht ständig freien Speicherplatz: für die Auslagerung von Arbeitsspeicher, temporäre Dateien und mehrere Gigabyte große Systemupdates. Ist das Volume voll, werden Apps träge, Dateien lassen sich nicht mehr sichern und Updates schlagen fehl.',
        'In dieser Anleitung schaffen wir zuerst mit den Bordmitteln von macOS Platz und zeigen dann, wie Disk Mop dieselben Aufgaben ab macOS 12 in einer einzigen App erledigt.',
      ],
      sections: [
        {
          title: 'Was die Meldung \'Dein Startvolume ist fast voll\' wirklich bedeutet',
          content: [
            'Das Startvolume ist das Laufwerk, auf dem macOS läuft — auf den meisten Macs das interne Volume Macintosh HD. Die Warnung erscheint, wenn der freie Speicherplatz dort kritisch niedrig wird. Das System signalisiert damit, dass es kaum noch Spielraum zum Arbeiten hat.',
            'macOS lagert bei vollem Arbeitsspeicher Daten auf die Festplatte aus, schreibt temporäre Dateien und lädt große Updates herunter. Ist Macintosh HD voll, werden Apps langsam, Dateien lassen sich nicht speichern und Updates scheitern.',
            'Als Faustregel sollten mindestens 10-15 % des Startvolumes frei bleiben. Ein Teil des belegten Speichers wird als \'löschbar\' angezeigt — Daten wie lokale Kopien von iCloud-Dateien, die das System bei Bedarf selbst entfernt. Ziel dieser Anleitung ist, Sie deutlich über diese Sicherheitsmarge zu bringen.',
          ],
        },
        {
          title: 'Speicherbelegung in den macOS-Einstellungen prüfen',
          content: [
            'Bevor Sie etwas löschen, prüfen Sie, was den Platz belegt. Unter macOS Ventura und neuer öffnen Sie das Apple-Menü, wählen Systemeinstellungen, dann Allgemein und Speicher. Unter macOS Monterey wählen Sie im Apple-Menü Über diesen Mac, klicken auf Speicher und dann auf Verwalten.',
            'Ein farbiger Balken teilt die Belegung in Kategorien wie Apps, Dokumente, Fotos und Systemdaten auf. Darunter bietet macOS eigene Empfehlungen an: Dateien in iCloud speichern, den Speicher durch Entfernen gesehener Filme und Sendungen optimieren und den Papierkorb automatisch leeren — schnell aktiviert und oft schon spürbar wirksam.',
            'Die Übersicht hat jedoch Grenzen: Kategorien wie Systemdaten können Dutzende Gigabyte umfassen, ohne zu verraten, was darin steckt, und ein Blick in einzelne Ordner ist nicht möglich. Genau hier setzen die manuellen Schritte der nächsten Abschnitte — oder ein spezialisiertes Analysewerkzeug — an.',
          ],
        },
        {
          title: 'Papierkorb entleeren und den Downloads-Ordner aufräumen',
          content: [
            'Gelöschte Dateien belegen weiter Platz auf dem Startvolume, bis der Papierkorb geleert wird. Klicken Sie mit gedrückter Ctrl-Taste auf das Papierkorb-Symbol im Dock und wählen Sie die Option zum Entleeren. In den Finder-Einstellungen unter Erweitert können Sie zudem festlegen, dass Objekte nach 30 Tagen automatisch entfernt werden.',
            'Der Downloads-Ordner ist der andere Klassiker. Öffnen Sie ihn im Finder über das Menü Gehe zu und Downloads (Option-Command-L), sortieren Sie in der Listendarstellung nach Größe und löschen Sie alte .dmg-Images, Installer und .zip-Archive — die installierten Apps bleiben davon unberührt.',
            'Disk Mop automatisiert beides ab macOS 12: Der Downloads Cleaner kategorisiert alte Dateien im Downloads-Ordner für die Massenbereinigung, und die Ein-Klick-Funktion Speed Up leert alte Downloads, Caches und den Papierkorb in einem Durchgang.',
          ],
        },
        {
          title: 'Große Dateien und Duplikate finden und löschen',
          content: [
            'Wenige vergessene Riesendateien belegen oft mehr Platz als tausende kleine. Öffnen Sie ein Finder-Fenster, drücken Sie Command-F, stellen Sie die Suche auf Diesen Mac und filtern Sie über das Kriterium Dateigröße (falls nicht sichtbar, über Andere hinzufügen) nach Dateien über 500 MB. Alte Videoexporte, virtuelle Maschinen und Backup-Archive sind typische Kandidaten.',
            'Duplikate sind von Hand schwer zu finden, weil Kopien oft andere Namen tragen und in verschiedenen Ordnern liegen. Ein doppelt exportiertes Foto oder ein \'sicherheitshalber\' kopierter Projektordner verschwendet auf einem vollen Macintosh HD schnell etliche Gigabyte.',
            'Hier zeigt Disk Mop seine Stärken: Die Festplattenanalyse (Disk Analysis) stellt das Startvolume als visuelle Treemap dar, sodass die größten Ordner sofort ins Auge springen. Der Große-Dateien-Finder listet alles über 500 MB auf, und der Duplikat-Detektor vergleicht Dateiinhalte per SHA-256-Hash — so löschen Sie echte Kopien statt bloß ähnlich benannter Dateien.',
          ],
        },
        {
          title: 'App- und Browser-Caches sicher leeren',
          content: [
            'Apps und Browser legen Caches an, die still auf viele Gigabyte anwachsen können. Öffnen Sie im Finder das Menü Gehe zu, dann Gehe zum Ordner (Shift-Command-G), und geben Sie ~/Library/Caches ein. Den Inhalt von Cache-Ordnern bekannter Apps können Sie gefahrlos löschen — die Apps bauen ihn neu auf. Lassen Sie unbekannte Ordner jedoch unangetastet.',
            'In Safari entfernen Sie gespeicherte Website-Daten unter Einstellungen im Bereich Datenschutz über die Verwaltung der Website-Daten; Chrome und Firefox bieten Ähnliches in ihren Einstellungen zum Löschen von Browserdaten. Beachten Sie, dass Sie sich danach bei manchen Websites neu anmelden müssen.',
            'Wer nicht im Library-Ordner wühlen möchte: Disk Mops Cache Cleaner scannt System- und App-Caches und zeigt, was sicher entfernt werden kann; der Browser Cache Cleaner deckt Safari, Chrome, Firefox und Edge an einer Stelle ab.',
          ],
        },
        {
          title: 'Dateien in iCloud oder auf eine externe Festplatte auslagern',
          content: [
            'Manche Dateien sind es wert, behalten zu werden, müssen aber nicht auf dem Startvolume liegen. Aktivieren Sie in den Speichereinstellungen die iCloud-Option, damit ältere Dateien und Fotos in voller Auflösung in der Cloud liegen und auf dem Mac nur Platzhalter bleiben. Der kostenlose iCloud-Speicher ist klein; größere Bibliotheken erfordern einen bezahlten iCloud+-Tarif.',
            'Eine externe SSD oder Festplatte ist die Alternative mit Einmalkosten. Verschieben Sie speicherhungrige Ordner wie Videoprojekte oder alte Fotoarchive, prüfen Sie die Kopien, löschen Sie dann die Originale und leeren Sie den Papierkorb. Für unersetzliche Daten empfiehlt sich zusätzlich ein Time-Machine-Backup auf einem separaten Laufwerk.',
          ],
        },
        {
          title: 'Das Startvolume automatisch schlank halten',
          content: [
            'Einmal Platz zu schaffen ist gut — ihn frei zu halten ist besser. Aktivieren Sie das automatische Leeren des Papierkorbs, sehen Sie den Downloads-Ordner monatlich durch und werfen Sie regelmäßig einen Blick auf die Speicherübersicht.',
            'Disk Mop ist genau für diese Pflege gebaut: Die geplante Bereinigung (Scheduled Cleanup) räumt wöchentlich oder monatlich automatisch Caches, alte Downloads und den Papierkorb auf, und der System Health Score zeigt den Zustand Ihres Macs auf einen Blick.',
            'Mit einer festen Routine gehört die Warnung der Vergangenheit an: Ihr Mac behält stets genug freien Platz für Speicherauslagerung und Updates, und Sie müssen nie wieder in Eile Dutzende Gigabyte freiräumen.',
          ],
        },
      ],
      verdict: [
        'Die Warnung vor dem fast vollen Startvolume heißt schlicht: Macintosh HD braucht Luft. Papierkorb entleeren, Downloads aufräumen, große Dateien und Duplikate löschen, Caches leeren und selten Genutztes auslagern — all das gelingt mit macOS-Bordmitteln und etwas Geduld.',
        'Disk Mop bündelt die komplette Checkliste ab macOS 12 in einer App: Festplattenanalyse, Große-Dateien-Finder, Duplikat-Detektor, Downloads Cleaner, Cache-Bereinigung und geplante Bereinigung halten das Startvolume dauerhaft schlank. Der Download ist mit eingeschränkten Funktionen kostenlos; die einmalige Zahlung von $9.90 schaltet mit lebenslanger Lizenz alle Funktionen frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Ihrem Mac',
    },
  },
};
