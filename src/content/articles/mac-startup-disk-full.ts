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
        'Disk Mop, tüm bu kontrol listesini macOS 12 ve üzeri için tek uygulamada toplar: Disk Analizi, Büyük Dosya Bulucu, Yinelenen Dosya Dedektörü, İndirilenler Temizleyicisi, önbellek temizliği ve Zamanlanmış Temizlik birlikte çalışarak başlangıç diskinizi elle uğraşmadan temiz tutar. Uygulamayı sınırlı özelliklerle ücretsiz indirebilir, $19.90 tutarında tek seferlik ödemeyle ömür boyu lisansa ve tüm özelliklere sahip olabilirsiniz.',
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
        'Disk Mop packs the whole checklist into a single app for macOS 12 and later: Disk Analysis, Large File Finder, Duplicate Detector, Downloads Cleaner, cache cleaning, and Scheduled Cleanup work together so your startup disk stays lean without manual digging. You can download it for free with limited features, and a one-time payment of $19.90 unlocks the full toolkit with a lifetime license.',
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
            'Das Startvolume ist das Laufwerk, auf dem macOS läuft — auf den meisten Macs das interne Volume Macintosh HD. Die Warnung erscheint, wenn der freie Speicherplatz dort kritisch niedrig wird. Das ist kein bloßer Hinweis: macOS signalisiert damit, dass es mit dem verbliebenen Platz kaum noch arbeiten kann.',
            'macOS benötigt im laufenden Betrieb durchgehend freien Speicherplatz. Es lagert bei vollem Arbeitsspeicher Daten auf die Festplatte aus, schreibt temporäre Dateien für Apps und lädt große Systemupdates herunter. Ist Macintosh HD voll, werden Apps langsam oder hängen sich auf, Dateien lassen sich nicht mehr speichern und Updates scheitern.',
            'Als Faustregel sollten mindestens 10-15 % des Startvolumes frei bleiben. Ein Teil des belegten Speichers wird als \'löschbar\' angezeigt — Daten wie lokale Kopien von iCloud-Dateien, die das System bei Bedarf selbst entfernt. Ziel dieser Anleitung ist, Sie deutlich über diese Sicherheitsmarge zu bringen.',
          ],
        },
        {
          title: 'Speicherbelegung in den macOS-Einstellungen prüfen',
          content: [
            'Bevor Sie etwas löschen, prüfen Sie, was den Platz belegt. Unter macOS Ventura und neuer öffnen Sie das Apple-Menü, wählen Systemeinstellungen, dann Allgemein und Speicher. Unter macOS Monterey wählen Sie im Apple-Menü Über diesen Mac, klicken auf Speicher und dann auf Verwalten.',
            'Ein farbiger Balken teilt die Belegung in Kategorien wie Apps, Dokumente, Fotos und Systemdaten auf. Darunter bietet macOS eigene Empfehlungen an: Dateien in iCloud speichern, den Speicher durch Entfernen gesehener Filme und Sendungen optimieren und den Papierkorb automatisch leeren. Das ist in Sekunden aktiviert und kann Platz zurückholen, ohne dass etwas gelöscht wird, das Ihnen wichtig ist.',
            'Die Übersicht hat jedoch Grenzen: Kategorien wie Systemdaten können Dutzende Gigabyte umfassen, ohne zu verraten, was darin steckt, und ein Blick in einzelne Ordner ist nicht möglich. Genau hier setzen die manuellen Schritte der nächsten Abschnitte — oder ein spezialisiertes Analysewerkzeug — an.',
          ],
        },
        {
          title: 'Papierkorb entleeren und den Downloads-Ordner aufräumen',
          content: [
            'Gelöschte Dateien belegen weiter Platz auf dem Startvolume, bis der Papierkorb geleert wird. Klicken Sie mit gedrückter Ctrl-Taste auf das Papierkorb-Symbol im Dock und wählen Sie die Option zum Entleeren, oder öffnen Sie den Papierkorb im Finder und klicken Sie auf Entleeren. Soll macOS das für Sie übernehmen, können Sie in den Finder-Einstellungen unter Erweitert festlegen, dass Objekte nach 30 Tagen automatisch entfernt werden.',
            'Der Downloads-Ordner ist der andere Klassiker. Öffnen Sie ihn im Finder über das Menü Gehe zu und Downloads (Option-Command-L), sortieren Sie in der Listendarstellung nach Größe und löschen Sie alte .dmg-Images, Installer und .zip-Archive — die installierten Apps bleiben davon unberührt.',
            'Disk Mop automatisiert beides ab macOS 12: Der Downloads Cleaner kategorisiert alte Dateien im Downloads-Ordner für die Massenbereinigung, und die Ein-Klick-Funktion Speed Up leert alte Downloads, Caches und den Papierkorb in einem Durchgang.',
          ],
        },
        {
          title: 'Große Dateien und Duplikate finden und löschen',
          content: [
            'Wenige vergessene Riesendateien belegen oft mehr Platz als tausende kleine. Öffnen Sie ein Finder-Fenster, drücken Sie Command-F, stellen Sie die Suche auf Diesen Mac und filtern Sie über das Kriterium Dateigröße (falls nicht sichtbar, über Andere hinzufügen) nach Dateien über 500 MB. Alte Videoexporte, virtuelle Maschinen und Backup-Archive sind typische Kandidaten.',
            'Duplikate sind von Hand schwer zu finden, weil Kopien oft andere Namen tragen und in verschiedenen Ordnern liegen. Ein doppelt exportiertes Foto oder ein \'sicherheitshalber\' kopierter Projektordner verschwendet auf einem vollen Macintosh HD schnell etliche Gigabyte.',
            'Hier zeigt Disk Mop seine Stärken: Die Festplattenanalyse (Disk Analysis) stellt das Startvolume als visuelle Treemap dar, sodass die größten Ordner sofort ins Auge springen. Der Große-Dateien-Finder listet alles über 500 MB auf, und der Duplikat-Detektor vergleicht Dateiinhalte per SHA-256-Hash und findet identische Fotos, Videos und Dokumente — so löschen Sie echte Kopien statt bloß ähnlich benannter Dateien.',
          ],
        },
        {
          title: 'App- und Browser-Caches sicher leeren',
          content: [
            'Apps und Browser legen Caches an, die still auf viele Gigabyte anwachsen können. Öffnen Sie im Finder das Menü Gehe zu, dann Gehe zum Ordner (Shift-Command-G), und geben Sie ~/Library/Caches ein. Den Inhalt von Cache-Ordnern bekannter Apps können Sie gefahrlos löschen — die Apps bauen ihn neu auf. Lassen Sie unbekannte Ordner jedoch unangetastet.',
            'Browser verwalten ihren Speicher selbst. In Safari entfernen Sie gespeicherte Website-Daten unter Einstellungen im Bereich Datenschutz über die Verwaltung der Website-Daten; Chrome und Firefox bieten Ähnliches in ihren Einstellungen zum Löschen von Browserdaten. Beachten Sie, dass Sie sich danach bei manchen Websites neu anmelden müssen.',
            'Wer nicht im Library-Ordner wühlen möchte: Disk Mops Cache Cleaner scannt System- und App-Caches und zeigt, was sicher entfernt werden kann; der Browser Cache Cleaner deckt Safari, Chrome, Firefox und Edge an einer Stelle ab, sodass Sie den Cache auf dem Mac leeren können, ohne sich durch die Menüs jedes einzelnen Browsers zu klicken.',
          ],
        },
        {
          title: 'Dateien in iCloud oder auf eine externe Festplatte auslagern',
          content: [
            'Manche Dateien sind es wert, behalten zu werden, müssen aber nicht auf dem Startvolume liegen. Aktivieren Sie in den Speichereinstellungen die iCloud-Option, damit ältere Dateien und Fotos in voller Auflösung in der Cloud liegen und auf dem Mac nur Platzhalter bleiben. Der kostenlose iCloud-Speicher ist klein; größere Bibliotheken erfordern einen bezahlten iCloud+-Tarif.',
            'Eine externe SSD oder Festplatte ist die Alternative mit Einmalkosten. Verschieben Sie speicherhungrige Ordner wie Videoprojekte oder alte Fotoarchive, prüfen Sie die Kopien, löschen Sie dann die Originale und leeren Sie den Papierkorb. Von unersetzlichen Daten sollten Sie stets eine zweite Kopie behalten — ein Time-Machine-Backup auf einem separaten Laufwerk ist dafür die einfachste Absicherung.',
          ],
        },
        {
          title: 'Das Startvolume automatisch schlank halten',
          content: [
            'Einmal Platz zu schaffen ist gut — ihn frei zu halten ist besser. Aktivieren Sie das automatische Leeren des Papierkorbs, sehen Sie den Downloads-Ordner monatlich durch und werfen Sie einen Blick auf die Speicherübersicht, sobald der freie Platz knapp wird. Diese kleinen Gewohnheiten verhindern den Schreckmoment, in dem die Warnung mitten in einem Projekt plötzlich auftaucht.',
            'Disk Mop ist genau für diese Pflege gebaut: Die geplante Bereinigung (Scheduled Cleanup) räumt wöchentlich oder monatlich automatisch Caches, alte Downloads und den Papierkorb auf, und der System Health Score zeigt den Zustand Ihres Macs auf einen Blick.',
            'Mit einer festen Routine gehört die Warnung der Vergangenheit an: Ihr Mac behält stets genug freien Platz für Speicherauslagerung und Updates, und Sie müssen nie wieder in Eile Dutzende Gigabyte freiräumen.',
          ],
        },
      ],
      verdict: [
        'Die Warnung vor dem fast vollen Startvolume heißt schlicht: Macintosh HD braucht Luft. Papierkorb entleeren, Downloads aufräumen, große Dateien und Duplikate löschen, Caches leeren und selten Genutztes auslagern — all das gelingt mit macOS-Bordmitteln und etwas Geduld.',
        'Disk Mop bündelt die komplette Checkliste ab macOS 12 in einer App: Festplattenanalyse, Große-Dateien-Finder, Duplikat-Detektor, Downloads Cleaner, Cache-Bereinigung und geplante Bereinigung halten das Startvolume dauerhaft schlank. Der Download ist mit eingeschränkten Funktionen kostenlos; die einmalige Zahlung von 19,90 $ schaltet mit lebenslanger Lizenz alle Funktionen frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Ihrem Mac',
    },
    fr: {
      title: "Disque de démarrage presque plein sur Mac : comment y remédier",
      metaDescription:
        "Votre Mac affiche « Votre disque de démarrage est presque plein » ? Comprenez l'alerte et libérez de l'espace avec les outils macOS et Disk Mop, pas à pas.",
      subtitle: "Le guide pas à pas pour libérer de l'espace disque sur votre Mac",
      intro: [
        "L'alerte « Votre disque de démarrage est presque plein » signifie que le disque sur lequel votre Mac démarre — en général le volume interne nommé Macintosh HD — n'a presque plus d'espace libre. Pour y remédier : videz la Corbeille, faites le ménage dans le dossier Téléchargements, supprimez les fichiers volumineux et les doublons, effacez les caches et déplacez vers iCloud ou un disque externe les fichiers dont vous vous servez rarement. Récupérer ne serait-ce que 10 à 20 Go suffit généralement à faire disparaître le message.",
        "macOS a besoin en permanence d'espace libre pour fonctionner correctement : il transfère la mémoire sur le disque lorsque la RAM sature, écrit des fichiers temporaires pour les applications et télécharge des mises à jour système qui pèsent plusieurs gigaoctets. Quand le disque est plein, les apps ralentissent, les fichiers refusent de s'enregistrer et les mises à jour s'interrompent en cours de route.",
        "Dans ce guide, nous allons d'abord libérer de l'espace étape par étape avec les outils de stockage intégrés à macOS, puis voir comment Disk Mop réunit le même travail dans une seule application, sous macOS 12 et versions ultérieures.",
      ],
      sections: [
        {
          title: "Ce que signifie vraiment l'alerte « disque de démarrage presque plein »",
          content: [
            "Votre disque de démarrage est le volume depuis lequel votre Mac exécute macOS : sur la plupart des machines, il s'agit du volume interne nommé Macintosh HD. L'alerte apparaît dès que l'espace libre de ce volume passe sous un seuil critique. Ce n'est pas une simple suggestion : macOS vous prévient qu'il parvient à peine à travailler avec ce qu'il lui reste.",
            "macOS a besoin d'espace libre en continu pendant qu'il tourne. Il transfère les données de la mémoire sur le disque quand la RAM est saturée, écrit des fichiers temporaires pour les applications et télécharge de volumineuses mises à jour système. Lorsque Macintosh HD est plein, vous constatez des applications qui ralentissent ou se figent, des fichiers impossibles à enregistrer et des mises à jour qui refusent de s'installer.",
            "En règle générale, visez au moins 10 à 15 % d'espace libre sur votre disque de démarrage. Il est par ailleurs normal que macOS annonce une partie de l'espace comme purgeable : ce sont des données, comme les copies locales de fichiers iCloud, que le système peut supprimer de lui-même en cas de besoin. L'objectif de ce guide est de vous faire repasser confortablement au-dessus de cette marge de sécurité.",
          ],
        },
        {
          title: "Vérifiez ce qui occupe le stockage dans les réglages de macOS",
          content: [
            "Avant de supprimer quoi que ce soit, identifiez ce qui prend réellement de la place. Sous macOS Ventura et versions ultérieures, ouvrez le menu Pomme, choisissez Réglages Système, allez dans Général et cliquez sur Stockage. Sous macOS Monterey, ouvrez le menu Pomme, choisissez « À propos de ce Mac », passez à l'onglet Stockage et appuyez sur Gérer.",
            "Une barre colorée répartit alors votre utilisation en catégories : Applications, Documents, Photos, Données système, etc. En dessous, macOS propose ses propres recommandations : stocker les fichiers dans iCloud, optimiser le stockage en supprimant les films et séries déjà regardés, et vider automatiquement la Corbeille. Activer ces options prend quelques secondes et peut récupérer de l'espace sans effacer quoi que ce soit qui compte pour vous.",
            "Cette vue d'ensemble est un bon point de départ, mais elle a ses limites. Des catégories comme Données système peuvent représenter des dizaines de gigaoctets sans jamais expliquer ce qu'elles contiennent, et rien ne permet de descendre dans les dossiers pour voir où l'espace est vraiment passé. C'est là qu'interviennent les manipulations manuelles des sections suivantes — ou un analyseur de disque dédié.",
          ],
        },
        {
          title: "Videz la Corbeille et faites le ménage dans le dossier Téléchargements",
          content: [
            "Les fichiers que vous supprimez ne disparaissent pas tant que la Corbeille n'est pas vidée : entre-temps, ils continuent d'occuper votre disque de démarrage. Cliquez sur l'icône de la Corbeille dans le Dock en maintenant la touche Contrôle et choisissez de la vider, ou ouvrez la Corbeille dans le Finder et cliquez sur Vider. Si vous préférez que macOS s'en charge, ouvrez les réglages du Finder, allez dans l'onglet Avancé et activez l'option qui supprime les éléments de la Corbeille au bout de 30 jours.",
            "Le dossier Téléchargements est l'autre grand dévoreur d'espace. Dans le Finder, ouvrez le menu Aller puis Téléchargements (ou appuyez sur Option-Command-L), passez en présentation par liste et triez par taille. Les anciennes images disque (.dmg), les programmes d'installation (.pkg) et les archives .zip dont vous vous êtes servi il y a longtemps peuvent en général partir immédiatement : les applications qu'ils ont installées ne sont pas affectées.",
            "Disk Mop automatise ces deux tâches sous macOS 12 et versions ultérieures. Son nettoyeur de téléchargements (Downloads Cleaner) classe par catégorie les vieux fichiers qui traînent dans le dossier Téléchargements pour que vous les effaciez en bloc, et sa fonction Accélérer (Speed Up) nettoie en un clic les anciens téléchargements, les caches et la Corbeille en une seule passe.",
          ],
        },
        {
          title: "Trouvez et supprimez les fichiers volumineux et les doublons",
          content: [
            "Une poignée de gros fichiers oubliés occupe souvent plus de place que des milliers de petits. Pour les débusquer à la main, ouvrez une fenêtre du Finder, appuyez sur Command-F, réglez la recherche sur Ce Mac et ajoutez un critère de taille de fichier (choisissez Autre dans la liste des critères s'il n'apparaît pas) afin de chercher les fichiers de plus de 500 Mo. Anciens exports vidéo, disques de machines virtuelles et archives de sauvegarde sont les suspects habituels.",
            "Les doublons sont plus difficiles à repérer manuellement, car les copies portent souvent des noms différents et se cachent dans des dossiers séparés. La même photo exportée deux fois, ou un dossier de projet copié « au cas où », peut gaspiller discrètement plusieurs gigaoctets sur un Macintosh HD déjà saturé.",
            "C'est ici que Disk Mop se rend le plus utile. L'analyse de disque (Disk Analysis) parcourt votre disque de démarrage et l'affiche sous forme de treemap : les dossiers les plus gourmands sautent immédiatement aux yeux. Le détecteur de gros fichiers (Large File Finder) rassemble dans une seule liste tout ce qui dépasse 500 Mo, et le détecteur de doublons (Duplicate Detector) compare le contenu des fichiers par empreinte SHA-256 pour repérer photos, vidéos et documents strictement identiques — vous supprimez ainsi de vraies copies, et non des fichiers qui partagent simplement un nom.",
          ],
        },
        {
          title: "Videz sans risque les caches des applications et des navigateurs",
          content: [
            "Applications et navigateurs mettent des données en cache pour gagner du temps, et ces caches peuvent atteindre plusieurs gigaoctets sans bruit. Pour les inspecter manuellement, ouvrez le Finder, choisissez le menu Aller puis Aller au dossier (Shift-Command-G) et saisissez ~/Library/Caches. Vous pouvez supprimer sans crainte le contenu des dossiers de cache appartenant à des applications que vous reconnaissez — elles les reconstruiront — mais laissez tranquilles ceux dont vous ignorez l'origine.",
            "Les navigateurs gèrent leur propre stockage. Dans Safari, ouvrez les Réglages, allez dans Confidentialité et servez-vous de l'écran de gestion des données de sites web pour effacer les données enregistrées ; Chrome et Firefox proposent des options équivalentes dans leurs réglages d'effacement des données de navigation. Gardez à l'esprit que ce nettoyage peut vous déconnecter des sites où vous étiez identifié.",
            "Si fouiller dans les dossiers Bibliothèque vous met mal à l'aise, le nettoyeur de cache (Cache Cleaner) de Disk Mop analyse les caches système et applicatifs et montre exactement ce qui peut être supprimé sans danger. Son nettoyeur de cache navigateur (Browser Cache Cleaner) couvre Safari, Chrome, Firefox et Edge au même endroit : vous videz le cache de votre Mac sans parcourir les menus de chaque navigateur.",
          ],
        },
        {
          title: "Déplacez vos fichiers vers iCloud ou un disque externe",
          content: [
            "Certains fichiers méritent d'être conservés sans avoir besoin de rester sur le disque de démarrage. macOS peut les déporter vers iCloud : activez l'option de stockage dans iCloud dans les réglages de stockage, et les fichiers anciens ainsi que les photos en pleine résolution restent dans le nuage, tandis que seuls de légers substituts demeurent sur votre Mac. Attention, l'offre gratuite d'iCloud est limitée : les grandes photothèques exigent un abonnement iCloud+ payant.",
            "Un SSD ou un disque dur externe constitue une alternative à coût unique. Déplacez-y les dossiers les plus gourmands, comme les projets vidéo et les vieilles archives photo, vérifiez que les copies s'ouvrent correctement, puis supprimez les originaux et videz la Corbeille. Pour les données irremplaçables, conservez toujours une seconde copie : une sauvegarde Time Machine sur un disque distinct reste l'assurance la plus simple.",
          ],
        },
        {
          title: "Gardez automatiquement votre disque de démarrage au régime",
          content: [
            "Libérer de l'espace une fois, c'est bien ; le garder libre, c'est mieux. Activez le vidage automatique de la Corbeille, passez en revue votre dossier Téléchargements une fois par mois et jetez un œil à la vue d'ensemble du stockage dès que l'espace libre commence à fondre. Ces petites habitudes évitent le moment de panique où l'alerte surgit en plein milieu d'un projet.",
            "Disk Mop est justement conçu pour ce type d'entretien. Le nettoyage planifié (Scheduled Cleanup) exécute automatiquement des tâches hebdomadaires ou mensuelles qui vident les caches, les anciens téléchargements et la Corbeille avant qu'ils ne s'accumulent, tandis que l'indice de santé du système (System Health Score) vous donne d'un coup d'œil l'état de votre Mac.",
            "Une fois la routine en place, l'alerte « disque de démarrage presque plein » appartient au passé. Votre Mac conserve en permanence une réserve d'espace confortable pour la mémoire virtuelle et les mises à jour, et vous n'aurez plus jamais à libérer des dizaines de gigaoctets dans l'urgence.",
          ],
        },
      ],
      verdict: [
        "L'alerte de disque de démarrage presque plein signifie simplement que Macintosh HD a besoin de respirer. Vider la Corbeille, nettoyer le dossier Téléchargements, supprimer les fichiers volumineux et les doublons, effacer les caches et déporter les données rarement utilisées vers iCloud ou un disque externe suffit à récupérer l'espace perdu — et chacune de ces étapes se réalise avec les outils intégrés de macOS et un peu de patience.",
        "Disk Mop rassemble toute cette liste de contrôle dans une seule application, sous macOS 12 et versions ultérieures : analyse de disque, détecteur de gros fichiers, détecteur de doublons, nettoyeur de téléchargements, nettoyage des caches et nettoyage planifié travaillent de concert pour garder votre disque de démarrage au régime sans fouille manuelle. Le téléchargement est gratuit avec des fonctions limitées, et un paiement unique de 19,90 $ débloque toute la boîte à outils avec une licence à vie.",
      ],
      ctaText: "Libérez le disque de démarrage de votre Mac avec Disk Mop",
    },
    es: {
      title: "¿Disco de arranque casi lleno en tu Mac? Así se soluciona",
      metaDescription:
        "¿Tu Mac avisa de que el disco de arranque está casi lleno? Descubre qué significa y libera espacio paso a paso con las herramientas de macOS y Disk Mop.",
      subtitle: "Guía paso a paso para liberar espacio en el disco de tu Mac",
      intro: [
        "El aviso « El disco de arranque está casi lleno » significa que al disco desde el que arranca tu Mac — normalmente el volumen interno llamado Macintosh HD — apenas le queda espacio libre. Para solucionarlo: vacía la Papelera, limpia la carpeta Descargas, borra archivos grandes y duplicados, elimina cachés y mueve a iCloud o a un disco externo los archivos que casi nunca usas. Recuperar tan solo 10-20 GB suele bastar para que el aviso desaparezca.",
        "macOS necesita espacio libre de forma constante para funcionar con soltura: intercambia memoria al disco cuando la RAM se llena, escribe archivos temporales para las apps y descarga actualizaciones del sistema que pesan varios gigabytes. Cuando el disco se llena, las aplicaciones se ralentizan, los archivos no se guardan y las actualizaciones fallan a medio camino.",
        "En esta guía liberaremos espacio primero paso a paso con las herramientas de almacenamiento integradas en macOS y después veremos cómo Disk Mop reúne ese mismo trabajo en una sola aplicación para macOS 12 y posteriores.",
      ],
      sections: [
        {
          title: "Qué significa realmente el aviso de disco de arranque casi lleno",
          content: [
            "El disco de arranque es la unidad desde la que tu Mac ejecuta macOS: en la mayoría de los equipos es el volumen interno llamado Macintosh HD. El aviso aparece cuando el espacio libre de ese volumen baja de un nivel crítico. No es una simple sugerencia: macOS te está diciendo que apenas puede trabajar con lo que le queda.",
            "macOS necesita espacio libre de manera continua mientras funciona. Intercambia datos de memoria al disco cuando la RAM está llena, escribe archivos temporales para las aplicaciones y descarga actualizaciones del sistema de gran tamaño. Cuando Macintosh HD está lleno, notarás apps que se ralentizan o se quedan bloqueadas, archivos que no se guardan y actualizaciones que se niegan a instalarse.",
            "Como regla general, intenta mantener libre al menos el 10-15 % del disco de arranque. También es normal que macOS presente una parte del espacio como purgable: datos como las copias locales de archivos de iCloud que el sistema puede eliminar por su cuenta cuando hace falta. El objetivo de esta guía es dejarte holgadamente por encima de ese margen de seguridad.",
          ],
        },
        {
          title: "Comprueba qué ocupa el almacenamiento en los ajustes de macOS",
          content: [
            "Antes de borrar nada, averigua qué está ocupando el espacio de verdad. En macOS Ventura y posteriores, abre el menú Apple, entra en Ajustes del Sistema, ve a General y haz clic en Almacenamiento. En macOS Monterey, abre el menú Apple, elige « Acerca de este Mac », cambia a la pestaña Almacenamiento y pulsa Gestionar.",
            "Verás una barra de colores que reparte el uso en categorías como Aplicaciones, Documentos, Fotos y Datos del Sistema. Debajo, macOS ofrece sus propias recomendaciones: guardar archivos en iCloud, optimizar el almacenamiento eliminando las películas y series que ya has visto y vaciar la Papelera automáticamente. Activarlas lleva segundos y puede recuperar espacio sin borrar nada que te importe.",
            "El resumen de almacenamiento es un buen punto de partida, pero tiene límites. Categorías como Datos del Sistema pueden acumular decenas de gigabytes sin explicar qué hay dentro, y no existe forma de entrar en las carpetas para ver adónde ha ido a parar el espacio exactamente. Ahí es donde entran los pasos manuales de las secciones siguientes, o un analizador de disco específico.",
          ],
        },
        {
          title: "Vacía la Papelera y limpia la carpeta Descargas",
          content: [
            "Los archivos que borras no desaparecen de verdad hasta que vacías la Papelera y, mientras tanto, siguen ocupando el disco de arranque. Haz clic en el icono de la Papelera del Dock con la tecla Control pulsada y elige la opción de vaciarla, o abre la Papelera en el Finder y pulsa Vaciar. Si prefieres que macOS se encargue por ti, abre los ajustes del Finder, ve a la pestaña Avanzado y activa la opción que borra los ítems de la Papelera al cabo de 30 días.",
            "La carpeta Descargas es el otro gran devorador de espacio. En el Finder, abre el menú Ir y elige Descargas (o pulsa Option-Command-L), cambia a la vista de lista y ordena por tamaño. Las imágenes de disco antiguas (.dmg), los instaladores (.pkg) y los archivos .zip que usaste hace mucho suelen poder borrarse de inmediato: las apps que instalaron siguen intactas.",
            "Disk Mop automatiza ambas tareas en macOS 12 y posteriores. Su limpiador de descargas (Downloads Cleaner) clasifica por categorías los archivos viejos que se acumulan en la carpeta Descargas para que los elimines en bloque, y la función Acelerar (Speed Up) limpia de una pasada y con un solo clic las descargas antiguas, las cachés y la Papelera.",
          ],
        },
        {
          title: "Encuentra y elimina archivos grandes y duplicados",
          content: [
            "Un puñado de archivos grandes olvidados suele ocupar más que miles de archivos pequeños. Para dar con ellos a mano, abre una ventana del Finder, pulsa Command-F, ajusta la búsqueda a Este Mac y añade un filtro de tamaño de archivo (elige Otros en la lista de criterios si no aparece) para buscar archivos de más de 500 MB. Las exportaciones de vídeo antiguas, los discos de máquinas virtuales y los archivos de copia de seguridad son los sospechosos habituales.",
            "Los duplicados cuestan más de detectar a mano, porque las copias suelen llevar nombres distintos y vivir en carpetas diferentes. La misma foto exportada dos veces, o una carpeta de proyecto copiada « por si acaso », puede desperdiciar gigabytes en silencio en un Macintosh HD que ya va justo.",
            "Aquí es donde Disk Mop hace su trabajo más visible. El análisis de disco (Disk Analysis) escanea el disco de arranque y lo muestra como un treemap visual, así que las carpetas que más ocupan saltan a la vista al instante. El buscador de archivos grandes (Large File Finder) reúne en una sola lista todo lo que supera los 500 MB, y el detector de duplicados (Duplicate Detector) compara el contenido de los archivos mediante hashes SHA-256 para localizar fotos, vídeos y documentos idénticos: así borras copias reales, no archivos que solo comparten nombre.",
          ],
        },
        {
          title: "Limpia sin riesgo las cachés de apps y navegadores",
          content: [
            "Las aplicaciones y los navegadores guardan datos en caché para ir más rápido, y esas cachés pueden crecer en silencio hasta varios gigabytes. Para revisarlas a mano, abre el Finder, elige el menú Ir, después Ir a la carpeta (Shift-Command-G) y escribe ~/Library/Caches. Puedes borrar sin miedo el contenido de las carpetas de caché de las apps que reconozcas — las aplicaciones las reconstruyen solas —, pero deja en paz las carpetas cuyo origen no tengas claro.",
            "Los navegadores gestionan su propio almacenamiento. En Safari, abre Ajustes, ve a Privacidad y utiliza la pantalla de gestión de datos de sitios web para eliminar los datos guardados; Chrome y Firefox ofrecen opciones parecidas en sus ajustes de borrado de datos de navegación. Ten en cuenta que borrar los datos del navegador puede cerrar tus sesiones en las webs.",
            "Si rebuscar en las carpetas Biblioteca te da respeto, el limpiador de caché (Cache Cleaner) de Disk Mop analiza las cachés del sistema y de las aplicaciones y muestra exactamente qué se puede quitar sin riesgo. Su limpiador de caché del navegador (Browser Cache Cleaner) cubre Safari, Chrome, Firefox y Edge en un mismo sitio, así que puedes vaciar la caché del Mac sin recorrer los menús de cada navegador.",
          ],
        },
        {
          title: "Mueve archivos a iCloud o a un disco externo",
          content: [
            "Hay archivos que merece la pena conservar pero que no necesitan vivir en el disco de arranque. macOS puede descargarlos a iCloud: activa la opción de guardar en iCloud dentro de los ajustes de almacenamiento y los archivos antiguos y las fotos a resolución completa se quedarán en la nube, mientras en tu Mac solo permanecen marcadores ligeros. Ten presente que el plan gratuito de iCloud es pequeño, así que las bibliotecas grandes requieren un plan iCloud+ de pago.",
            "Un SSD o disco duro externo es la alternativa con un coste único. Mueve al disco externo las carpetas que más ocupan, como proyectos de vídeo y archivos fotográficos antiguos, comprueba que las copias se abren bien y borra después los originales y vacía la Papelera. Para los datos irremplazables, guarda siempre una segunda copia: una copia de seguridad de Time Machine en otra unidad es el seguro más sencillo.",
          ],
        },
        {
          title: "Mantén tu disco de arranque despejado de forma automática",
          content: [
            "Liberar espacio una vez está bien; mantenerlo libre está mejor. Activa el vaciado automático de la Papelera, revisa la carpeta Descargas una vez al mes y consulta el resumen de almacenamiento en cuanto el espacio libre empiece a bajar. Esos pequeños hábitos evitan el momento de pánico en el que el aviso aparece de golpe en mitad de un proyecto.",
            "Disk Mop está pensado justo para este tipo de mantenimiento. La limpieza programada (Scheduled Cleanup) ejecuta automáticamente tareas semanales o mensuales que vacían cachés, descargas antiguas y la Papelera antes de que se acumulen, y la puntuación de salud del sistema (System Health Score) te da de un vistazo el estado de tu Mac.",
            "Con la rutina en marcha, el aviso de « disco de arranque casi lleno » pasa a la historia. Tu Mac conserva siempre un colchón sano de espacio libre para el intercambio de memoria y las actualizaciones, y no volverás a tener que borrar decenas de gigabytes con prisas.",
          ],
        },
      ],
      verdict: [
        "El aviso de disco de arranque casi lleno significa, sencillamente, que Macintosh HD necesita respirar. Vaciar la Papelera, limpiar la carpeta Descargas, borrar archivos grandes y duplicados, eliminar cachés y llevar los datos que apenas usas a iCloud o a un disco externo recupera ese espacio, y todos esos pasos se pueden dar con las herramientas integradas de macOS y algo de paciencia.",
        "Disk Mop concentra toda esa lista en una sola aplicación para macOS 12 y posteriores: el análisis de disco, el buscador de archivos grandes, el detector de duplicados, el limpiador de descargas, la limpieza de cachés y la limpieza programada trabajan juntos para que tu disco de arranque siga despejado sin rebuscar a mano. Puedes descargarlo gratis con funciones limitadas, y un pago único de 19,90 $ desbloquea todas las herramientas con licencia de por vida.",
      ],
      ctaText: "Libera espacio en el disco de arranque de tu Mac con Disk Mop",
    },
    it: {
      title: "Disco di avvio quasi pieno sul Mac? Come liberare spazio",
      metaDescription:
        "Il Mac segnala che il disco di avvio è quasi pieno? Scoprite che cosa significa l'avviso e come liberare spazio passo dopo passo con macOS e Disk Mop.",
      subtitle: "La guida passo dopo passo per liberare spazio sul disco del Mac",
      intro: [
        "L'avviso « Il disco di avvio è quasi pieno » indica che sul disco da cui il Mac si avvia — di solito il volume interno chiamato Macintosh HD — non è rimasto quasi più spazio libero. Per risolvere: svuotate il Cestino, ripulite la cartella Download, eliminate i file di grandi dimensioni e i duplicati, cancellate le cache e spostate su iCloud o su un disco esterno i file che usate di rado. Recuperare anche solo 10-20 GB di solito basta a far sparire l'avviso.",
        "macOS ha bisogno di spazio libero in continuazione per funzionare senza intoppi: sposta la memoria sul disco quando la RAM si riempie, scrive file temporanei per le app e scarica aggiornamenti di sistema che pesano diversi gigabyte. Quando il disco si riempie, le app rallentano, i file non si salvano e gli aggiornamenti si bloccano a metà.",
        "In questa guida libereremo spazio prima passo dopo passo con gli strumenti di archiviazione integrati in macOS, poi vedremo come Disk Mop riunisca lo stesso lavoro in un'unica app per macOS 12 e versioni successive.",
      ],
      sections: [
        {
          title: "Che cosa significa davvero l'avviso « disco di avvio quasi pieno »",
          content: [
            "Il disco di avvio è l'unità da cui il Mac esegue macOS: sulla maggior parte delle macchine è il volume interno chiamato Macintosh HD. L'avviso compare quando lo spazio libero su quel volume scende sotto una soglia critica. Non è un semplice suggerimento: macOS vi sta comunicando che riesce a malapena a lavorare con quello che gli resta.",
            "macOS ha bisogno di spazio libero in modo continuo mentre lavora. Sposta i dati della memoria sul disco quando la RAM è satura, scrive file temporanei per le applicazioni e scarica aggiornamenti di sistema di grandi dimensioni. Quando Macintosh HD è pieno, noterete app che rallentano o si bloccano, file che non si salvano e aggiornamenti che si rifiutano di installarsi.",
            "Come regola pratica, puntate a tenere libero almeno il 10-15 % del disco di avvio. È inoltre normale che macOS indichi una parte dello spazio come eliminabile: dati come le copie locali dei file iCloud, che il sistema può rimuovere da solo quando serve. L'obiettivo di questa guida è portarvi comodamente oltre quel margine di sicurezza.",
          ],
        },
        {
          title: "Controllate che cosa occupa lo spazio nelle impostazioni di macOS",
          content: [
            "Prima di cancellare qualsiasi cosa, scoprite che cosa sta davvero occupando spazio. Su macOS Ventura e versioni successive aprite il menu Apple, scegliete Impostazioni di Sistema, andate in Generali e fate clic su Spazio. Su macOS Monterey aprite il menu Apple, scegliete « Informazioni su questo Mac », passate al pannello Archiviazione e premete Gestisci.",
            "Comparirà una barra colorata che suddivide l'utilizzo in categorie come Applicazioni, Documenti, Foto e Dati di sistema. Sotto, macOS propone i propri suggerimenti: archiviare i file su iCloud, ottimizzare lo spazio rimuovendo film e serie già viste e svuotare automaticamente il Cestino. Attivarli richiede pochi secondi e può recuperare spazio senza cancellare nulla a cui tenete.",
            "La panoramica è un buon punto di partenza, ma ha dei limiti. Categorie come Dati di sistema possono contenere decine di gigabyte senza spiegare che cosa ci sia dentro, e non c'è modo di entrare nelle singole cartelle per capire dove sia finito lo spazio. È qui che entrano in gioco i passaggi manuali delle sezioni successive — oppure uno strumento di analisi del disco dedicato.",
          ],
        },
        {
          title: "Svuotate il Cestino e ripulite la cartella Download",
          content: [
            "I file che eliminate non spariscono davvero finché non svuotate il Cestino e, nel frattempo, continuano a occupare il disco di avvio. Fate clic sull'icona del Cestino nel Dock tenendo premuto il tasto Ctrl e scegliete l'opzione per svuotarlo, oppure aprite il Cestino nel Finder e fate clic su Svuota. Se preferite che se ne occupi macOS, aprite le impostazioni del Finder, andate nel pannello Avanzate e attivate l'opzione che rimuove gli elementi dal Cestino dopo 30 giorni.",
            "La cartella Download è l'altro classico divoratore di spazio. Nel Finder aprite il menu Vai e scegliete Download (oppure premete Option-Command-L), passate alla vista a elenco e ordinate per dimensione. Vecchie immagini disco (.dmg), installer (.pkg) e archivi .zip usati tempo fa si possono quasi sempre eliminare subito: le app che hanno installato restano al loro posto.",
            "Disk Mop automatizza entrambe le operazioni su macOS 12 e versioni successive. Il pulitore dei download (Downloads Cleaner) suddivide per categoria i vecchi file rimasti nella cartella Download così da eliminarli in blocco, mentre la funzione Accelera (Speed Up) ripulisce con un clic download datati, cache e Cestino in un'unica passata.",
          ],
        },
        {
          title: "Trovate ed eliminate i file di grandi dimensioni e i duplicati",
          content: [
            "Pochi file enormi dimenticati occupano spesso più spazio di migliaia di file piccoli. Per scovarli a mano aprite una finestra del Finder, premete Command-F, impostate la ricerca su Questo Mac e aggiungete un criterio di dimensione del file (scegliete Altro nell'elenco dei criteri se non è visibile) per cercare i file superiori a 500 MB. Vecchie esportazioni video, dischi di macchine virtuali e archivi di backup sono i soliti indiziati.",
            "I duplicati sono più difficili da individuare a mano, perché le copie spesso hanno nomi diversi e si trovano in cartelle diverse. La stessa foto esportata due volte, o una cartella di progetto copiata « per sicurezza », può sprecare silenziosamente gigabyte su un Macintosh HD già pieno.",
            "È qui che Disk Mop dà il meglio di sé. L'analisi del disco (Disk Analysis) scansiona il disco di avvio e lo mostra come una treemap visiva, così le cartelle che occupano più spazio saltano subito all'occhio. Il ricercatore di file di grandi dimensioni (Large File Finder) raccoglie in un unico elenco tutto ciò che supera i 500 MB, e il rilevatore di duplicati (Duplicate Detector) confronta il contenuto dei file tramite hash SHA-256 per trovare foto, video e documenti identici: eliminate copie reali, non file che condividono soltanto il nome.",
          ],
        },
        {
          title: "Svuotate in sicurezza le cache di app e browser",
          content: [
            "App e browser mettono in cache i dati per velocizzare il lavoro, e quelle cache possono crescere in silenzio fino a molti gigabyte. Per esaminarle a mano aprite il Finder, scegliete il menu Vai, poi Vai alla cartella (Shift-Command-G) e digitate ~/Library/Caches. Potete eliminare senza problemi il contenuto delle cartelle di cache appartenenti ad app che riconoscete — le applicazioni le ricostruiscono da sole — ma lasciate stare le cartelle di cui non conoscete l'origine.",
            "I browser gestiscono il proprio spazio in autonomia. In Safari aprite Impostazioni, andate su Privacy e usate la schermata di gestione dei dati dei siti web per rimuovere i dati salvati; Chrome e Firefox offrono opzioni analoghe nelle impostazioni di cancellazione dei dati di navigazione. Tenete presente che cancellare i dati del browser può disconnettervi dai siti su cui avete effettuato l'accesso.",
            "Se frugare nelle cartelle Libreria vi mette a disagio, il pulitore della cache (Cache Cleaner) di Disk Mop analizza le cache di sistema e delle applicazioni e mostra esattamente che cosa si può rimuovere in sicurezza. Il pulitore della cache del browser (Browser Cache Cleaner) copre Safari, Chrome, Firefox ed Edge in un unico punto, così svuotate la cache del Mac senza passare per i menu di ogni singolo browser.",
          ],
        },
        {
          title: "Spostate i file su iCloud o su un disco esterno",
          content: [
            "Alcuni file vale la pena conservarli, ma non devono per forza restare sul disco di avvio. macOS può spostarli su iCloud: attivate l'opzione di archiviazione su iCloud nelle impostazioni dello spazio e i file più datati e le foto a piena risoluzione resteranno nel cloud, mentre sul Mac rimarranno solo leggeri segnaposto. Tenete presente che il piano gratuito di iCloud è ridotto: le librerie più grandi richiedono un piano iCloud+ a pagamento.",
            "Un SSD o un disco rigido esterno è l'alternativa a costo unico. Spostate sul disco esterno le cartelle più ingombranti, come progetti video e vecchi archivi fotografici, verificate che le copie si aprano correttamente, poi eliminate gli originali e svuotate il Cestino. Per i dati insostituibili conservate sempre una seconda copia: un backup Time Machine su un disco separato è l'assicurazione più semplice.",
          ],
        },
        {
          title: "Mantenete automaticamente snello il disco di avvio",
          content: [
            "Liberare spazio una volta va bene; mantenerlo libero è meglio. Attivate lo svuotamento automatico del Cestino, rivedete la cartella Download una volta al mese e date un'occhiata alla panoramica dello spazio non appena quello libero inizia a calare. Sono piccole abitudini che evitano il momento di panico in cui l'avviso compare all'improvviso nel bel mezzo di un progetto.",
            "Disk Mop è pensato esattamente per questo tipo di manutenzione. La pulizia pianificata (Scheduled Cleanup) esegue automaticamente attività settimanali o mensili che svuotano cache, download datati e Cestino prima che si accumulino, mentre il punteggio di salute del sistema (System Health Score) mostra a colpo d'occhio come sta il vostro Mac.",
            "Con una routine avviata, l'avviso « disco di avvio quasi pieno » diventa un ricordo. Il Mac mantiene sempre un margine sano di spazio libero per lo scambio di memoria e per gli aggiornamenti, e non dovrete più liberare decine di gigabyte di corsa.",
          ],
        },
      ],
      verdict: [
        "L'avviso di disco di avvio quasi pieno significa semplicemente che Macintosh HD ha bisogno di respirare. Svuotare il Cestino, ripulire la cartella Download, eliminare file di grandi dimensioni e duplicati, cancellare le cache e spostare su iCloud o su un disco esterno i dati usati di rado permette di recuperare lo spazio: ognuno di questi passaggi si può eseguire con gli strumenti integrati di macOS e un po' di pazienza.",
        "Disk Mop raccoglie l'intera lista in un'unica app per macOS 12 e versioni successive: analisi del disco, ricercatore di file di grandi dimensioni, rilevatore di duplicati, pulitore dei download, pulizia della cache e pulizia pianificata lavorano insieme per mantenere snello il disco di avvio senza ricerche manuali. Potete scaricarlo gratuitamente con funzioni limitate, mentre un pagamento una tantum di 19,90 $ sblocca l'intero set di strumenti con una licenza a vita.",
      ],
      ctaText: "Liberate spazio sul disco di avvio del Mac con Disk Mop",
    },
    pt: {
      title: "Disco de inicialização quase cheio no Mac? Veja como resolver",
      metaDescription:
        "O seu Mac avisa que o disco de inicialização está quase cheio? Entenda o alerta e libere espaço passo a passo com as ferramentas do macOS e o Disk Mop.",
      subtitle: "O guia passo a passo para liberar espaço em disco no seu Mac",
      intro: [
        "O alerta “O disco de inicialização está quase cheio” significa que o disco de onde o seu Mac inicia — normalmente o volume interno chamado Macintosh HD — está praticamente sem espaço livre. Para resolver: esvazie o Lixo, limpe a pasta Downloads, apague arquivos grandes e duplicados, remova caches e mova para o iCloud ou para um disco externo os arquivos que você quase não usa. Recuperar apenas 10 a 20 GB costuma bastar para o alerta sumir.",
        "O macOS precisa de espaço livre o tempo todo para funcionar bem: ele passa memória para o disco quando a RAM enche, grava arquivos temporários para os apps e baixa atualizações de sistema de vários gigabytes. Quando o disco lota, os apps ficam lentos, os arquivos não salvam e as atualizações falham no meio do caminho.",
        "Neste guia vamos primeiro liberar espaço passo a passo com as ferramentas de armazenamento embutidas no macOS e depois ver como o Disk Mop reúne o mesmo trabalho em um único app para macOS 12 e versões mais recentes.",
      ],
      sections: [
        {
          title: "O que o alerta de disco de inicialização quase cheio realmente significa",
          content: [
            "O disco de inicialização é a unidade de onde o seu Mac roda o macOS: na maioria das máquinas, é o volume interno chamado Macintosh HD. O alerta aparece quando o espaço livre desse volume cai abaixo de um nível crítico. Não é uma simples sugestão: o macOS está avisando que mal consegue operar com o que sobrou.",
            "O macOS precisa de espaço livre continuamente enquanto trabalha. Ele passa dados da memória para o disco quando a RAM está cheia, grava arquivos temporários para os aplicativos e baixa atualizações grandes do sistema. Com o Macintosh HD lotado, você vai notar apps lentos ou travando, arquivos que não salvam e atualizações que se recusam a instalar.",
            "Como regra geral, procure manter livre pelo menos 10% a 15% do disco de inicialização. Também é normal o macOS mostrar parte do espaço como purgável: dados como as cópias locais de arquivos do iCloud, que o sistema pode remover sozinho quando precisa. O objetivo deste guia é deixar você com folga acima dessa margem de segurança.",
          ],
        },
        {
          title: "Veja o que está ocupando espaço nos ajustes do macOS",
          content: [
            "Antes de apagar qualquer coisa, descubra o que realmente está ocupando espaço. No macOS Ventura e versões mais recentes, abra o menu Apple, escolha Ajustes do Sistema, vá em Geral e clique em Armazenamento. No macOS Monterey, abra o menu Apple, escolha “Sobre Este Mac”, mude para a aba Armazenamento e clique em Gerenciar.",
            "Você verá uma barra colorida que divide o uso em categorias como Aplicativos, Documentos, Fotos e Dados do Sistema. Abaixo dela, o macOS oferece as próprias recomendações: guardar arquivos no iCloud, otimizar o armazenamento removendo filmes e séries já assistidos e esvaziar o Lixo automaticamente. Ativar essas opções leva segundos e pode recuperar espaço sem apagar nada que importe para você.",
            "O resumo de armazenamento é um bom ponto de partida, mas tem limites. Categorias como Dados do Sistema podem guardar dezenas de gigabytes sem explicar o que há lá dentro, e não dá para entrar nas pastas e ver exatamente para onde o espaço foi. É aí que entram os passos manuais das próximas seções — ou um analisador de disco dedicado.",
          ],
        },
        {
          title: "Esvazie o Lixo e limpe a pasta Downloads",
          content: [
            "Os arquivos que você apaga não somem de verdade até o Lixo ser esvaziado e, até lá, continuam ocupando o disco de inicialização. Clique no ícone do Lixo no Dock segurando a tecla Control e escolha a opção de esvaziar, ou abra o Lixo no Finder e clique em Esvaziar. Se preferir que o macOS cuide disso, abra os ajustes do Finder, vá na aba Avançado e ative a opção que remove itens do Lixo depois de 30 dias.",
            "A pasta Downloads é o outro devorador de espaço clássico. No Finder, abra o menu Ir e escolha Downloads (ou pressione Option-Command-L), mude para a visualização em lista e ordene por tamanho. Imagens de disco antigas (.dmg), instaladores (.pkg) e arquivos .zip que você usou há muito tempo quase sempre podem ir embora na hora: os apps que eles instalaram continuam intactos.",
            "O Disk Mop automatiza as duas tarefas no macOS 12 e versões mais recentes. O limpador de downloads (Downloads Cleaner) organiza por categoria os arquivos antigos parados na pasta Downloads para você apagá-los em lote, e a função Acelerar (Speed Up) limpa downloads antigos, caches e o Lixo de uma vez só, com um clique.",
          ],
        },
        {
          title: "Encontre e remova arquivos grandes e duplicados",
          content: [
            "Alguns poucos arquivos grandes esquecidos costumam ocupar mais espaço que milhares de arquivos pequenos. Para caçá-los manualmente, abra uma janela do Finder, pressione Command-F, ajuste a busca para Este Mac e acrescente um filtro de tamanho de arquivo (escolha Outros na lista de critérios se ele não aparecer) para procurar arquivos com mais de 500 MB. Exportações de vídeo antigas, discos de máquinas virtuais e arquivos de backup são os suspeitos de sempre.",
            "Duplicados são mais difíceis de pegar no olho, porque as cópias costumam ter nomes diferentes e ficar em pastas separadas. A mesma foto exportada duas vezes, ou uma pasta de projeto copiada “por via das dúvidas”, desperdiça gigabytes em silêncio em um Macintosh HD que já está no limite.",
            "É aqui que o Disk Mop faz o trabalho mais visível. A análise de disco (Disk Analysis) escaneia o disco de inicialização e mostra tudo como um treemap visual, então as pastas que mais ocupam saltam aos olhos na hora. O localizador de arquivos grandes (Large File Finder) reúne em uma lista só tudo acima de 500 MB, e o detector de duplicados (Duplicate Detector) compara o conteúdo dos arquivos por hash SHA-256 para achar fotos, vídeos e documentos idênticos: assim você apaga cópias de verdade, não arquivos que apenas têm o mesmo nome.",
          ],
        },
        {
          title: "Limpe com segurança os caches de apps e navegadores",
          content: [
            "Apps e navegadores guardam dados em cache para acelerar as coisas, e esses caches podem crescer em silêncio até vários gigabytes. Para inspecionar manualmente, abra o Finder, escolha o menu Ir, depois Ir para Pasta (Shift-Command-G), e digite ~/Library/Caches. Dá para apagar sem medo o conteúdo das pastas de cache de apps que você reconhece — os aplicativos reconstroem tudo sozinhos —, mas deixe em paz as pastas cuja origem você não conhece.",
            "Os navegadores cuidam do próprio armazenamento. No Safari, abra os Ajustes, vá em Privacidade e use a tela de gerenciamento de dados de sites para remover os dados guardados; Chrome e Firefox oferecem opções parecidas nos ajustes de limpeza de dados de navegação. Lembre-se de que limpar os dados do navegador pode desconectar você dos sites.",
            "Se mexer nas pastas Biblioteca parece arriscado, o limpador de cache (Cache Cleaner) do Disk Mop analisa os caches do sistema e dos aplicativos e mostra exatamente o que dá para remover com segurança. O limpador de cache do navegador (Browser Cache Cleaner) cobre Safari, Chrome, Firefox e Edge em um lugar só, então você limpa o cache do Mac sem percorrer o menu de cada navegador.",
          ],
        },
        {
          title: "Mova arquivos para o iCloud ou para um disco externo",
          content: [
            "Alguns arquivos valem a pena guardar, mas não precisam morar no disco de inicialização. O macOS consegue transferi-los para o iCloud: ative a opção de guardar no iCloud nos ajustes de armazenamento e os arquivos mais antigos e as fotos em resolução total ficam na nuvem, enquanto no Mac permanecem apenas marcadores leves. Vale lembrar que o plano gratuito do iCloud é pequeno, então bibliotecas maiores exigem um plano iCloud+ pago.",
            "Um SSD ou HD externo é a alternativa de custo único. Mova para o disco externo as pastas que mais ocupam espaço, como projetos de vídeo e acervos de fotos antigos, confirme que as cópias abrem direito e só então apague os originais e esvazie o Lixo. Para dados insubstituíveis, mantenha sempre uma segunda cópia: um backup do Time Machine em outro disco é o seguro mais simples.",
          ],
        },
        {
          title: "Mantenha o disco de inicialização enxuto automaticamente",
          content: [
            "Liberar espaço uma vez é bom; manter esse espaço livre é melhor. Ative o esvaziamento automático do Lixo, revise a pasta Downloads uma vez por mês e confira o resumo de armazenamento sempre que o espaço livre começar a cair. Esses pequenos hábitos evitam o momento de pânico em que o alerta aparece bem no meio de um projeto.",
            "O Disk Mop foi feito exatamente para esse tipo de manutenção. A limpeza agendada (Scheduled Cleanup) executa tarefas semanais ou mensais automaticamente, limpando caches, downloads antigos e o Lixo antes que tudo se acumule, enquanto a pontuação de saúde do sistema (System Health Score) dá um indicador rápido de como o seu Mac está.",
            "Com a rotina em pé, o alerta de “disco de inicialização quase cheio” vira coisa do passado. O seu Mac mantém sempre uma reserva saudável de espaço livre para a troca de memória e para as atualizações, e você nunca mais precisa apagar dezenas de gigabytes na correria.",
          ],
        },
      ],
      verdict: [
        "O alerta de disco de inicialização quase cheio significa apenas que o Macintosh HD precisa de espaço para respirar. Esvaziar o Lixo, limpar a pasta Downloads, apagar arquivos grandes e duplicados, remover caches e mandar os dados pouco usados para o iCloud ou para um disco externo recupera esse espaço — e cada um desses passos pode ser feito com as ferramentas embutidas do macOS e um pouco de paciência.",
        "O Disk Mop reúne a lista inteira em um app só para macOS 12 e versões mais recentes: análise de disco, localizador de arquivos grandes, detector de duplicados, limpador de downloads, limpeza de cache e limpeza agendada trabalham juntos para o seu disco de inicialização continuar enxuto sem garimpo manual. Dá para baixar de graça com recursos limitados, e um pagamento único de 19,90 $ libera o kit completo com licença vitalícia.",
      ],
      ctaText: "Libere espaço no disco de inicialização do seu Mac com o Disk Mop",
    },
    ja: {
      title: "Macの起動ディスクがほぼ一杯？空き容量を取り戻す方法",
      metaDescription:
        "Macで「起動ディスクの空き容量がほとんどありません」と表示されていませんか。この警告が意味することと、macOS標準のストレージ機能やDisk Mopを使って空き容量を取り戻す具体的な手順を、順を追って解説します。",
      subtitle: "Macの空き容量を増やすためのステップバイステップガイド",
      intro: [
        "「起動ディスクの空き容量がほとんどありません」という警告は、Macが起動しているディスク — 多くの場合は「Macintosh HD」という名前の内蔵ボリューム — の空き容量がほとんど残っていないことを意味します。対処法は、「ゴミ箱」を空にする、「ダウンロード」フォルダを整理する、大きなファイルと重複ファイルを削除する、キャッシュを消去する、めったに使わないファイルをiCloudや外付けドライブに移す、の5つです。10〜20 GBほど空けるだけで、たいていは警告が消えます。",
        "macOSが快適に動作するには、常に空き容量が必要です。RAMが逼迫すればメモリの内容をディスクにスワップし、アプリのために一時ファイルを書き込み、数ギガバイト規模のシステムアップデートをダウンロードします。ディスクが一杯になると、アプリの動作が遅くなり、ファイルが保存できなくなり、アップデートも途中で失敗します。",
        "この記事では、まずmacOSに標準で備わっているストレージ機能を使って順番に空き容量を増やし、そのあとで、同じ作業をmacOS 12以降の1つのアプリにまとめたDisk Mopを見ていきます。",
      ],
      sections: [
        {
          title: "「起動ディスクの空き容量がほとんどありません」が本当に意味すること",
          content: [
            "起動ディスクとは、MacがmacOSを実行しているドライブのことです。ほとんどの機種では「Macintosh HD」という名前の内蔵ボリュームがこれにあたります。警告が表示されるのは、このボリュームの空き容量が危険な水準まで落ち込んだときです。単なる提案ではありません。macOSは、残された容量ではもう動作がぎりぎりだと伝えているのです。",
            "macOSは動作している間、常に空き容量を必要とします。RAMが一杯になればメモリのデータをディスクにスワップし、アプリケーションのために一時ファイルを書き込み、大きなシステムアップデートをダウンロードします。Macintosh HDが一杯になると、アプリが遅くなったり固まったり、ファイルが保存できなくなったり、アップデートがインストールできなくなったりします。",
            "目安として、起動ディスクの空き容量は少なくとも10〜15%を保つようにしてください。macOSが容量の一部を「パージ可能」と表示するのは正常な動作です。これはiCloudファイルのローカルコピーのように、必要になればシステムが自分で削除できるデータを指します。この記事の目的は、その安全マージンを余裕をもって上回る状態にすることです。",
          ],
        },
        {
          title: "macOSの設定でストレージの内訳を確認する",
          content: [
            "何かを削除する前に、実際に何が容量を占めているのかを把握しましょう。macOS Ventura以降では、アップルメニューから「システム設定」を開き、「一般」に進んで「ストレージ」をクリックします。macOS Montereyでは、アップルメニューから「このMacについて」を選び、「ストレージ」タブに切り替えて「管理」をクリックします。",
            "色分けされたバーが表示され、使用状況が「アプリケーション」「書類」「写真」「システムデータ」などの分類に分けられます。その下には、macOS自身の推奨項目が並びます。ファイルをiCloudに保存する設定、視聴済みの映画やテレビ番組を削除して容量を最適化する設定、そして「ゴミ箱」を自動的に空にする設定です。どれも数秒で有効にでき、大切なものを何ひとつ削除せずに容量を取り戻せる場合があります。",
            "ストレージの概要は出発点としては優秀ですが、限界もあります。「システムデータ」のような分類は、中身の説明がないまま数十ギガバイトを占めることがあり、フォルダ単位で掘り下げて容量の行き先を正確に確認する方法は用意されていません。次章以降の手動の手順、あるいは専用のディスク分析ツールが必要になるのは、まさにこの点です。",
          ],
        },
        {
          title: "「ゴミ箱」を空にして「ダウンロード」フォルダを整理する",
          content: [
            "削除したファイルは、「ゴミ箱」を空にするまで実際には消えず、その間も起動ディスクの容量を占め続けます。Dockのゴミ箱アイコンをControlキーを押しながらクリックして空にする項目を選ぶか、Finderで「ゴミ箱」を開いて「空にする」をクリックしてください。macOSに任せたい場合は、Finder設定の「詳細」タブを開き、30日経過した項目を「ゴミ箱」から削除するオプションを有効にします。",
            "「ダウンロード」フォルダも、定番の容量食いです。Finderの「移動」メニューから「ダウンロード」を選び（Option-Command-Lでも開けます）、リスト表示に切り替えてサイズ順に並べ替えます。ずいぶん前に使った .dmg のディスクイメージ、.pkg のインストーラー、.zip のアーカイブは、たいていすぐ削除してかまいません。それらがインストールしたアプリには何の影響もありません。",
            "Disk MopはmacOS 12以降で、この2つの作業をどちらも自動化します。ダウンロード クリーナー（Downloads Cleaner）は「ダウンロード」フォルダに残った古いファイルを種類ごとに分類し、まとめて削除できるようにします。ワンクリックの高速化機能（Speed Up）は、古いダウンロード、キャッシュ、「ゴミ箱」を一度の処理でまとめて片付けます。",
          ],
        },
        {
          title: "大きなファイルと重複ファイルを見つけて削除する",
          content: [
            "忘れられた数個の巨大ファイルは、何千個もの小さなファイルより多くの容量を占めていることがよくあります。手作業で探すには、Finderのウインドウを開いてCommand-Fを押し、検索対象を「このMac」に設定します。そのうえで検索条件にファイルサイズを追加し（一覧に見当たらない場合は「その他」から追加できます）、500 MBを超えるファイルを探します。古い書き出し済みの動画、仮想マシンのディスク、バックアップのアーカイブが定番の容疑者です。",
            "重複ファイルは手作業ではさらに見つけにくい相手です。コピーは名前が違うことが多く、別々のフォルダに散らばっているからです。2回書き出した同じ写真や、「念のため」とコピーしたプロジェクトフォルダが、ただでさえ一杯のMacintosh HDで静かに数ギガバイトを浪費します。",
            "ここがDisk Mopの最も分かりやすい活躍どころです。ディスク分析（Disk Analysis）は起動ディスクをスキャンし、視覚的なツリーマップとして表示します。容量を食っているフォルダがひと目で浮かび上がります。大容量ファイル検索（Large File Finder）は500 MBを超えるものをすべて1つのリストにまとめ、重複ファイル検出（Duplicate Detector）はSHA-256のハッシュでファイルの中身を比較して、まったく同じ写真、動画、書類を洗い出します。名前が似ているだけのファイルではなく、本物のコピーだけを削除できます。",
          ],
        },
        {
          title: "アプリとブラウザーのキャッシュを安全に削除する",
          content: [
            "アプリやブラウザーは動作を速くするためにデータをキャッシュしますが、そのキャッシュは気づかないうちに何ギガバイトにも膨らみます。手動で確認するには、Finderの「移動」メニューから「フォルダへ移動」（Shift-Command-G）を選び、~/Library/Caches と入力します。見覚えのあるアプリのキャッシュフォルダの中身は安全に削除できます。アプリが自動的に作り直すからです。ただし、何のフォルダか分からないものには手を出さないでください。",
            "ブラウザーは自分のデータを自分で管理します。Safariでは設定を開き、「プライバシー」からWebサイトデータの管理画面に進んで、保存されたサイトデータを削除します。ChromeとFirefoxも、閲覧データの削除設定に同様の項目を用意しています。ブラウザーのデータを削除すると、Webサイトからログアウトする場合がある点には注意してください。",
            "「ライブラリ」フォルダを掘り進めるのが不安なら、Disk Mopのキャッシュ クリーナー（Cache Cleaner）がシステムとアプリケーションのキャッシュをスキャンし、安全に削除できるものを正確に示してくれます。ブラウザーキャッシュ クリーナー（Browser Cache Cleaner）はSafari、Chrome、Firefox、Edgeを1か所でまとめて扱うので、ブラウザーごとにメニューをたどらなくてもMacのキャッシュを削除できます。",
          ],
        },
        {
          title: "ファイルをiCloudや外付けドライブに移す",
          content: [
            "手元に残しておきたいけれど、起動ディスク上にある必要はないファイルもあります。macOSはそうしたファイルをiCloudに移せます。ストレージ設定でiCloudに保存するオプションを有効にすると、古いファイルやフル解像度の写真はクラウドに置かれ、Mac上には軽量なプレースホルダだけが残ります。ただし、iCloudの無料容量はわずかです。大きなライブラリを預けるには有料のiCloud+プランが必要になります。",
            "外付けSSDやハードディスクは、初期費用だけで済む選択肢です。動画プロジェクトや古い写真アーカイブのような容量を食うフォルダを外付けドライブに移し、コピーが正しく開けることを確認してから、元のファイルを削除して「ゴミ箱」を空にします。替えのきかないデータについては、必ず2つ目のコピーを用意してください。別のドライブに取るTime Machineのバックアップが、いちばん手軽な保険になります。",
          ],
        },
        {
          title: "起動ディスクを自動でスリムに保つ",
          content: [
            "一度空き容量を作るのは良いことですが、空いた状態を保てればもっと良いはずです。「ゴミ箱」の自動削除を有効にし、「ダウンロード」フォルダを月に一度見直し、空き容量が減り始めたらストレージの概要を確認してください。こうした小さな習慣が、プロジェクトの真っ最中に突然警告が出るという慌ただしい瞬間を防いでくれます。",
            "Disk Mopは、まさにこの種のメンテナンスのために作られています。スケジュール クリーンアップ（Scheduled Cleanup）は週次または月次の清掃タスクを自動で実行し、キャッシュ、古いダウンロード、「ゴミ箱」がたまる前に片付けます。システムの健全性スコア（System Health Score）は、Macの状態をひと目で示す指標になります。",
            "習慣として定着すれば、「起動ディスクの空き容量がほとんどありません」という警告は過去のものになります。Macはメモリのスワップやアップデートのために十分な空き容量を常に確保し、何十ギガバイトも慌てて削除する必要は二度となくなります。",
          ],
        },
      ],
      verdict: [
        "起動ディスクの空き容量がほとんどないという警告は、要するにMacintosh HDに余裕が必要だということです。「ゴミ箱」を空にする、「ダウンロード」フォルダを整理する、大きなファイルと重複ファイルを削除する、キャッシュを消去する、めったに使わないデータをiCloudや外付けドライブに移す。これだけで容量は取り戻せますし、どの手順もmacOS標準の機能と少しの手間だけで実行できます。",
        "Disk Mopは、このチェックリスト全体をmacOS 12以降の1つのアプリにまとめています。ディスク分析、大容量ファイル検索、重複ファイル検出、ダウンロード クリーナー、キャッシュの削除、スケジュール クリーンアップが連携して働き、手作業で掘り進めなくても起動ディスクをスリムに保ちます。基本機能は無料でダウンロードでき、19.90ドルの買い切りで永続ライセンスとしてすべての機能が使えるようになります。",
      ],
      ctaText: "Disk MopでMacの起動ディスクの空き容量を増やす",
    },
  },
};
