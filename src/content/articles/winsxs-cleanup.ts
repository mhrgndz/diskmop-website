import type { Article } from '../types';

export const winsxsCleanup: Article = {
  slug: 'winsxs-folder-cleanup',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-07-17',
  readingTime: 7,
  content: {
    tr: {
      title: 'WinSxS Klasörü Temizleme: Güvenli Yöntem (Windows 11/10)',
      metaDescription:
        'WinSxS klasörü temizleme rehberi: klasörün neden büyük göründüğünü, DISM StartComponentCleanup komutunu ve güvenli küçültme adımlarını öğrenin.',
      subtitle: 'WinSxS Klasörünü Silmeden Güvenle Küçültme Rehberi',
      intro: [
        'WinSxS klasörü aslında göründüğünden çok daha küçüktür: Windows, sistem dosyalarının çoğunu WinSxS\'e işaret eden sabit bağlantılar (hard link) olarak tutar ve Dosya Gezgini aynı dosyayı birden fazla kez sayar. Bu klasörü asla elle silmemelisiniz; Windows\'un açılması, güncellenmesi ve kendini onarması için gereken bileşenler burada durur. Güvenli WinSxS klasörü temizleme yolu, yerleşik Dism.exe /Online /Cleanup-Image /StartComponentCleanup komutu ve Disk Temizleme aracındaki Windows Update Temizliği seçeneğidir.',
        'Bu rehberde önce WinSxS\'in ne olduğunu ve boyutunun neden yanıltıcı olduğunu açıklayacağız. Ardından gerçek boyutu DISM ile nasıl ölçeceğinizi, klasörü hangi komutlarla güvenle küçülteceğinizi ve güncelleme kalıntılarının birikmesini nasıl önleyeceğinizi adım adım göstereceğiz.',
        'İnternette dolaşan \'WinSxS\'i silin, 10 GB kazanın\' tarzı tavsiyelerin aksine, buradaki her adım Microsoft\'un desteklediği yöntemlere dayanır. Amacımız disk alanı kazanırken sisteminizin güncellenebilir ve onarılabilir kalmasını sağlamaktır.',
      ],
      sections: [
        {
          title: 'WinSxS Klasörü Nedir ve Neden Bu Kadar Büyük Görünür?',
          content: [
            'WinSxS (Windows Side-by-Side), C:\\Windows\\WinSxS yolunda bulunan ve Windows\'un bileşen deposu (component store) olarak görev yapan klasördür. İşletim sisteminin neredeyse tüm parçaları — sistem dosyaları, sürücü paketleri, isteğe bağlı özellikler ve güncellemelerle gelen yeni bileşen sürümleri — burada saklanır. Windows bu depoyu güncellemeleri kurmak, özellikleri etkinleştirmek ve bozulan sistem dosyalarını onarmak için kullanır.',
            'Klasör bu kadar büyük görünür, çünkü Dosya Gezgini sabit bağlantıları gerçek dosya gibi sayar. System32 gibi klasörlerdeki sistem dosyalarının çoğu aslında WinSxS içindeki tek bir kopyaya işaret eden bağlantılardır; Gezgin ise aynı veriyi hem orada hem burada toplama ekler. Bu yüzden özellikler penceresinde çoğu zaman on gigabaytı aşan bir rakam görürsünüz, oysa klasörün diskte kapladığı gerçek alan bunun belirgin şekilde altındadır.',
            'Yine de klasör zamanla gerçekten büyür. Her kümülatif güncelleme yeni bileşen sürümleri ekler ve Windows, güncellemeyi geri alabilmeniz için eski sürümleri bir süre saklar. Kontrolsüz büyüyen kısım işte bu değiştirilen eski bileşenlerdir ve doğru araçlarla güvenle temizlenebilir.',
          ],
        },
        {
          title: 'WinSxS Klasörünü Neden Asla Elle Silmemelisiniz?',
          content: [
            'WinSxS\'i Dosya Gezgini\'nden silmeye çalışmak, Windows\'u onarılamaz şekilde bozabilecek en riskli işlemlerden biridir. Sabit bağlantılar nedeniyle sildiğiniz şey \'yedek kopya\' değil, çoğu zaman sistemin aktif olarak kullandığı dosyanın kendisidir. Sonuç: başarısız güncellemeler, açılmayan Windows özellikleri, çalışmayan sfc /scannow onarımları ve en kötü durumda hiç açılmayan bir sistem olabilir.',
            'Windows bu klasörü bilinçli olarak korur: sahibi TrustedInstaller\'dır ve normal yönetici hesapları bile içeriği doğrudan silemez. İzinleri zorla değiştirip silmeyi başaran kullanıcılar, genellikle kısa süre sonra sistemi sıfırdan kurmak zorunda kalır. Aynı nedenle internette bulunan \'WinSxS silme scriptleri\' ve klasörü sıkıştırma numaralarından da uzak durmalısınız.',
            'Microsoft\'un desteklediği yalnızca üç temizleme yolu vardır: DISM StartComponentCleanup komutu, Disk Temizleme\'deki Windows Update Temizliği ve Görev Zamanlayıcı\'daki otomatik StartComponentCleanup görevi. Bu rehberin geri kalanı tam olarak bu güvenli yöntemleri kullanır.',
          ],
        },
        {
          title: 'Gerçek Boyutu DISM AnalyzeComponentStore ile Kontrol Edin',
          content: [
            'Temizliğe başlamadan önce WinSxS\'in gerçekte ne kadar yer kapladığını ölçün. Başlat düğmesine sağ tıklayıp Terminal (Yönetici) seçeneğini açın veya arama kutusuna cmd yazıp Yönetici olarak çalıştır deyin. Ardından şu komutu girin: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. Analiz birkaç dakika sürebilir.',
            'Çıktıda iki satır özellikle önemlidir. Windows Gezgini\'nin bildirdiği boyut, sabit bağlantılar dahil şişirilmiş rakamı gösterir; bileşen deposunun gerçek boyutu (Actual Size of Component Store) ise diskte fiilen kaplanan alandır. En altta yer alan Component Store Cleanup Recommended satırı Yes diyorsa, DISM temizlikten kazanç elde edeceğinizi öngörüyor demektir; No diyorsa WinSxS zaten derli topludur.',
            'Analiz sonucu WinSxS\'in masum olduğunu gösteriyorsa, alanı asıl yiyen başka klasörlerdir. Disk Mop\'un disk analizi (Disk Analysis) özelliği, sürücünüzü görsel bir treemap ile tarayarak en büyük klasörleri saniyeler içinde ortaya çıkarır; büyük dosya bulucu 500 MB üzerindeki dosyaları listeler, yinelenen dosya dedektörü ise SHA-256 karşılaştırmasıyla gereksiz kopyaları bulur. Böylece suçu bileşen deposuna atmadan önce diskin gerçek fotoğrafını görürsünüz.',
          ],
        },
        {
          title: 'WinSxS Klasörünü DISM StartComponentCleanup ile Güvenle Küçültün',
          content: [
            'Bileşen deposunu küçültmenin resmi yolu şu komuttur: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Yönetici olarak açtığınız terminale bu komutu yazın ve işlemin bitmesini bekleyin; süre sisteminize göre birkaç dakika ile yarım saat arasında değişebilir. Komut, güncellemelerle değiştirilen eski bileşen sürümlerini kaldırır ve sistemin kullandığı güncel dosyalara dokunmaz.',
            'Aynı görev Görev Zamanlayıcı tarafından arka planda da çalıştırılır, ancak zamanlanmış sürüm değiştirilen bileşenleri 30 gün bekletir ve kısıtlı süre çalışır. Komutu elle çalıştırdığınızda bekleme süresi uygulanmaz; bu yüzden büyük bir güncelleme sonrasında manuel çalıştırma çoğu zaman daha fazla alan kazandırır.',
            'Daha agresif temizlik için komuta /ResetBase eklenebilir: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Bu, değiştirilen tüm eski sürümleri kaldırır ama önemli bir bedeli vardır: mevcut güncellemeleri artık kaldıramazsınız. Bu bayrağı yalnızca sistem güncel ve sorunsuz çalışırken kullanın ve işlem sırasında bilgisayarı asla kapatmayın.',
          ],
        },
        {
          title: 'Disk Temizleme ile Windows Update Temizliği Yapın',
          content: [
            'Komut satırı size göre değilse, aynı temizliğin büyük bölümünü Disk Temizleme aracıyla yapabilirsiniz. Başlat menüsüne Disk Temizleme yazın, aracı açın ve C: sürücüsünü seçin. Açılan pencerede Sistem dosyalarını temizle düğmesine tıklayın, listeden Windows Update Temizleme kutusunu (dilerseniz Teslim İyileştirme Dosyaları ve Geçici dosyalar ile birlikte) işaretleyin ve Tamam deyin. Windows bazı dosyaları bir sonraki yeniden başlatma sırasında siler; bu normaldir.',
            'Windows 11 ve 10\'da aynı seçenek Ayarlar üzerinden de sunulur: Ayarlar, Sistem, Depolama, Geçici dosyalar yolunu izleyin, Windows Update Temizleme kutusunu işaretleyip Dosyaları kaldır düğmesine basın. İki yöntem de aynı güncelleme kalıntılarını hedefler; hangisi kolayınıza geliyorsa onu kullanın.',
            'Disk Temizleme yalnızca Windows\'un kendi artıklarını görür; tarayıcı ve uygulama önbelleklerine dokunmaz. Disk Mop\'un önbellek temizleyicisi (Cache Cleaner) sistem ve uygulama önbelleklerini, tarayıcı önbelleği temizleyicisi ise Chrome, Firefox ve Edge birikintilerini tek arayüzden temizleyerek bu boşluğu doldurur.',
          ],
        },
        {
          title: 'Güncelleme Kalabalığını Otomatik Olarak Kontrol Altında Tutun',
          content: [
            'İyi haber şu ki WinSxS için sürekli elle müdahale gerekmez. Windows, StartComponentCleanup görevini otomatik bakım sırasında kendisi çalıştırır; sizin yapmanız gereken, birkaç ayda bir AnalyzeComponentStore komutuyla durumu kontrol etmek ve büyük sürüm yükseltmelerinden sonra bir kez manuel temizlik çalıştırmaktır.',
            'Diskin geri kalanı ise bu kadar şanslı değildir: indirilen kurulum dosyaları, uygulama önbellekleri ve geri dönüşüm kutusu sessizce büyümeye devam eder. Disk Mop\'un zamanlanmış temizlik (Scheduled Cleanup) özelliği, haftalık veya aylık otomatik görevlerle bu birikintileri düzenli olarak süpürür; tek tıklık Hızlandır (Speed Up) özelliği ise eski indirmeleri, sistem ve tarayıcı önbelleğini ve geri dönüşüm kutusunu bir kerede temizler.',
            'Sistem sağlığı puanı (System Health Score) da diskinizin genel durumunu tek bakışta gösterir; puan düştüğünde temizlik zamanının geldiğini anlarsınız. Böylece DISM bileşen deposunu, Disk Mop ise diskin geri kalanını kontrol altında tutar ve C: sürücüsü bir daha sessizce dolmaz.',
          ],
        },
      ],
      verdict: [
        'WinSxS klasörünün korkutucu boyutu büyük ölçüde bir yanılsamadır: sabit bağlantılar Dosya Gezgini\'nin rakamını şişirir ve klasörü elle silmek Windows\'u kullanılamaz hale getirebilir. Gerçek boyutu Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore ile ölçüp, temizliği StartComponentCleanup komutuna ve Disk Temizleme\'deki Windows Update Temizleme seçeneğine bırakmak hem güvenli hem de yeterlidir.',
        'Bileşen deposu dışında kalan her şey için Disk Mop devreye girer: disk analizi alanı neyin yediğini görselleştirir, önbellek ve indirme temizleyicileri birikintileri kaldırır, zamanlanmış temizlik ise bakımı otomatiğe bağlar. 19,90 dolarlık tek seferlik lisansla Windows ve macOS\'te ömür boyu kullanabilirsiniz; ücretsiz sürümle denemeye hemen başlayabilirsiniz.',
      ],
      ctaText: 'Diskinizin geri kalanını Disk Mop ile temizleyin',
    },
    en: {
      title: 'WinSxS Folder Too Big? Safe Cleanup for Windows 11/10',
      metaDescription:
        'Is your WinSxS folder too big? Learn why its size is misleading and how to shrink it safely with DISM commands and Windows Update Cleanup. Free up space today.',
      subtitle: 'How to Shrink the Component Store Without Breaking Windows',
      intro: [
        'The WinSxS folder is almost never as big as it looks: Windows stores most system files as hard links pointing into WinSxS, so File Explorer counts the same data more than once. You should never delete the folder manually — it holds the components Windows needs to boot, update, and repair itself. The safe way to shrink it is the built-in command Dism.exe /Online /Cleanup-Image /StartComponentCleanup, combined with the Windows Update Cleanup option in Disk Cleanup.',
        'In this guide we\'ll first explain what WinSxS actually is and why its reported size is misleading. Then we\'ll show you how to measure its real footprint with DISM, which exact commands shrink it safely, and how to keep update leftovers from piling up again.',
        'Unlike the \'delete WinSxS and reclaim 10 GB\' advice floating around the internet, every step here relies on methods Microsoft supports. The goal is to free disk space while keeping your system updatable and repairable.',
      ],
      sections: [
        {
          title: 'What Is the WinSxS Folder and Why It Looks Huge',
          content: [
            'WinSxS (Windows Side-by-Side) lives at C:\\Windows\\WinSxS and serves as the Windows component store. Nearly every part of the operating system is kept here — system files, driver packages, optional features, and the new component versions that arrive with each update. Windows uses this store to install updates, enable features on demand, and repair corrupted system files.',
            'The folder looks enormous because File Explorer counts hard links as if they were full files. Most system files in folders like System32 are actually links pointing to a single copy inside WinSxS, yet Explorer adds the same data to the total in both places. That\'s why the Properties dialog often reports ten gigabytes or more, while the space the folder truly occupies on disk is significantly smaller.',
            'That said, the store does grow over time. Every cumulative update adds new component versions, and Windows keeps the superseded ones for a while so updates can be uninstalled if something goes wrong. Those retired components are the part that genuinely bloats — and the part you can safely clean with the right tools.',
          ],
        },
        {
          title: 'Why You Should Never Delete WinSxS Manually',
          content: [
            'Trying to delete WinSxS from File Explorer is one of the riskiest things you can do to a Windows installation. Because of hard links, what you delete is often not a spare copy but the very file the system is actively using. The fallout can include failed updates, Windows features that refuse to enable, sfc /scannow repairs that no longer work, and in the worst case a PC that won\'t boot at all.',
            'Windows protects the folder deliberately: it\'s owned by TrustedInstaller, and even administrator accounts can\'t remove its contents directly. Users who force their way through the permissions usually end up reinstalling Windows shortly after. For the same reason, stay away from third-party \'WinSxS deleter\' scripts and folder compression hacks you may find online.',
            'There are only three cleanup paths Microsoft supports: the DISM StartComponentCleanup command, Windows Update Cleanup in Disk Cleanup, and the automatic StartComponentCleanup task in Task Scheduler. The rest of this guide uses exactly these safe methods.',
          ],
        },
        {
          title: 'Check the Real Size with DISM AnalyzeComponentStore',
          content: [
            'Before cleaning anything, measure how much space WinSxS actually uses. Right-click the Start button and choose Terminal (Admin), or search for cmd and pick Run as administrator. Then enter this command: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. The analysis can take a few minutes.',
            'Two lines in the output matter most. The size reported by Windows Explorer shows the inflated number that includes hard links, while the Actual Size of Component Store is the space genuinely occupied on disk. At the bottom, the Component Store Cleanup Recommended line tells you whether DISM expects a cleanup to pay off: Yes means it\'s worth running, No means WinSxS is already tidy.',
            'If the analysis shows WinSxS is innocent, something else is eating your drive. Disk Mop\'s Disk Analysis feature scans your disk with a visual treemap and reveals the largest folders in seconds; the Large File Finder lists files over 500 MB, and the Duplicate Detector uses SHA-256 hashing to find redundant copies. That way you see the real picture of your drive before blaming the component store.',
          ],
        },
        {
          title: 'Shrink WinSxS Safely with DISM StartComponentCleanup',
          content: [
            'The official way to shrink the component store is this command: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Type it into your elevated terminal and let it finish; depending on your system it can take anywhere from a few minutes to half an hour. The command removes old component versions that updates have superseded and never touches the current files your system relies on.',
            'Windows also runs this same task in the background via Task Scheduler, but the scheduled version waits 30 days before removing superseded components and only runs for a limited time. Running the command manually skips the waiting period, which is why a manual pass right after a large update usually reclaims more space.',
            'For a more aggressive cleanup you can add the /ResetBase flag: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. This removes all superseded versions but comes at a real cost — you can no longer uninstall any currently installed update. Only use it when your system is fully updated and running without problems, and never shut the PC down while it\'s working.',
          ],
        },
        {
          title: 'Run Windows Update Cleanup via Disk Cleanup',
          content: [
            'If the command line isn\'t your thing, you can do much of the same cleanup with the Disk Cleanup tool. Type Disk Cleanup into the Start menu, open the tool, and select your C: drive. In the window that appears, click the Clean up system files button, tick the Windows Update Cleanup box (optionally along with Delivery Optimization Files and Temporary files), and confirm with OK. Windows may finish deleting some files during the next restart — that\'s normal.',
            'On Windows 11 and 10 the same option is also available through Settings: go to Settings, System, Storage, Temporary files, tick the Windows Update Cleanup box, and click Remove files. Both routes target the same update leftovers, so use whichever feels easier.',
            'Keep in mind that Disk Cleanup only sees Windows\' own leftovers — it doesn\'t touch browser or application caches. Disk Mop fills that gap: its Cache Cleaner handles system and app caches, and its Browser Cache Cleaner clears the buildup from Chrome, Firefox, and Edge, all from a single interface.',
          ],
        },
        {
          title: 'Keep Update Bloat Under Control Automatically',
          content: [
            'The good news is that WinSxS doesn\'t need constant manual attention. Windows runs the StartComponentCleanup task on its own during automatic maintenance; all you need to do is check in with AnalyzeComponentStore every few months and run one manual cleanup after major version upgrades.',
            'The rest of your drive isn\'t so lucky: downloaded installers, application caches, and the recycle bin keep growing quietly. Disk Mop\'s Scheduled Cleanup feature sweeps that buildup on a weekly or monthly schedule, while the one-click Speed Up feature clears old downloads, system and browser caches, and the recycle bin in a single pass.',
            'The System Health Score gives you an at-a-glance view of your disk\'s overall condition, so a dropping score tells you it\'s time to clean. With DISM keeping the component store in check and Disk Mop covering everything else, your C: drive won\'t silently fill up again.',
          ],
        },
      ],
      verdict: [
        'The scary size of the WinSxS folder is largely an illusion: hard links inflate the number File Explorer shows, and deleting the folder by hand can leave Windows unbootable. Measuring the real size with Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore and leaving the cleanup to StartComponentCleanup and Windows Update Cleanup is both safe and sufficient.',
        'For everything outside the component store, Disk Mop takes over: Disk Analysis visualizes what\'s eating your space, the cache and downloads cleaners remove the buildup, and Scheduled Cleanup puts maintenance on autopilot. A one-time $19.90 license covers Windows and macOS for life, and the free version lets you start right away.',
      ],
      ctaText: 'Clean up the rest of your drive with Disk Mop',
    },
    de: {
      title: 'WinSxS-Ordner zu groß? Sichere Bereinigung für Windows 11',
      metaDescription:
        'Ist Ihr WinSxS-Ordner zu groß? Erfahren Sie, warum die Größe täuscht und wie Sie ihn mit DISM StartComponentCleanup sicher verkleinern. Jetzt Platz schaffen.',
      subtitle: 'So verkleinern Sie den Komponentenspeicher, ohne Windows zu beschädigen',
      intro: [
        'Der WinSxS-Ordner ist fast nie so groß, wie er aussieht: Windows speichert die meisten Systemdateien als harte Links, die auf WinSxS verweisen, sodass der Datei-Explorer dieselben Daten mehrfach zählt. Löschen Sie den Ordner niemals manuell — er enthält die Komponenten, die Windows zum Starten, Aktualisieren und Reparieren benötigt. Der sichere Weg zur Verkleinerung ist der integrierte Befehl Dism.exe /Online /Cleanup-Image /StartComponentCleanup, kombiniert mit der Windows Update-Bereinigung in der Datenträgerbereinigung.',
        'In diesem Leitfaden erklären wir zunächst, was WinSxS ist und warum die angezeigte Größe täuscht. Danach zeigen wir, wie Sie die tatsächliche Größe mit DISM messen, mit welchen Befehlen Sie den Ordner sicher verkleinern und wie Sie neuen Update-Ballast verhindern.',
        'Anders als die im Internet kursierenden Tipps nach dem Motto \'WinSxS löschen und 10 GB gewinnen\' stützt sich jeder Schritt hier auf von Microsoft unterstützte Methoden. Ziel ist es, Speicherplatz freizugeben, ohne die Update- und Reparaturfähigkeit des Systems zu gefährden.',
      ],
      sections: [
        {
          title: 'Was ist der WinSxS-Ordner und warum wirkt er so groß?',
          content: [
            'WinSxS (Windows Side-by-Side) liegt unter C:\\Windows\\WinSxS und dient als Komponentenspeicher von Windows. Nahezu alle Teile des Betriebssystems werden hier abgelegt — Systemdateien, Treiberpakete, optionale Features und die neuen Komponentenversionen jedes Updates. Windows nutzt diesen Speicher, um Updates zu installieren, Features zu aktivieren und beschädigte Systemdateien zu reparieren.',
            'Der Ordner wirkt riesig, weil der Datei-Explorer harte Links wie vollständige Dateien zählt. Die meisten Systemdateien in Ordnern wie System32 sind in Wirklichkeit Links auf eine einzige Kopie in WinSxS, doch der Explorer addiert dieselben Daten an beiden Orten. Deshalb zeigt der Eigenschaften-Dialog oft zehn Gigabyte oder mehr an, während der tatsächlich belegte Platz deutlich kleiner ist.',
            'Dennoch wächst der Speicher mit der Zeit: Jedes kumulative Update fügt neue Komponentenversionen hinzu, und Windows behält die ersetzten Versionen eine Weile, damit Updates deinstalliert werden können. Genau diese Altversionen sind der Teil, der wirklich Platz frisst — und der sich mit den richtigen Werkzeugen sicher bereinigen lässt.',
          ],
        },
        {
          title: 'Warum Sie WinSxS niemals manuell löschen sollten',
          content: [
            'Der Versuch, WinSxS im Datei-Explorer zu löschen, gehört zu den riskantesten Eingriffen in eine Windows-Installation. Wegen der harten Links löschen Sie oft keine Reservekopie, sondern genau die Datei, die das System aktiv verwendet. Die Folgen reichen von fehlgeschlagenen Updates über Windows-Features, die sich nicht mehr aktivieren lassen, und nicht funktionierende sfc /scannow-Reparaturen bis zu einem PC, der gar nicht mehr startet.',
            'Windows schützt den Ordner bewusst: Er gehört TrustedInstaller, und selbst Administratorkonten können den Inhalt nicht direkt entfernen. Wer die Berechtigungen mit Gewalt umgeht, installiert Windows meist kurz darauf neu. Meiden Sie aus demselben Grund auch dubiose WinSxS-Löschskripte und Komprimierungstricks aus dem Internet.',
            'Microsoft unterstützt nur drei Bereinigungswege: den DISM-Befehl StartComponentCleanup, die Windows Update-Bereinigung in der Datenträgerbereinigung und die automatische StartComponentCleanup-Aufgabe in der Aufgabenplanung. Der Rest dieses Leitfadens nutzt genau diese sicheren Methoden.',
          ],
        },
        {
          title: 'Die tatsächliche Größe mit DISM AnalyzeComponentStore prüfen',
          content: [
            'Messen Sie vor jeder Bereinigung, wie viel Platz WinSxS wirklich belegt. Klicken Sie mit der rechten Maustaste auf Start und wählen Sie Terminal (Administrator), oder suchen Sie cmd und wählen Sie Als Administrator ausführen. Geben Sie dann diesen Befehl ein: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. Die Analyse kann einige Minuten dauern.',
            'Zwei Zeilen der Ausgabe sind entscheidend: Die vom Explorer gemeldete Größe zeigt den durch harte Links aufgeblähten Wert, die tatsächliche Größe des Komponentenspeichers den real belegten Platz. Die Zeile Component Store Cleanup Recommended verrät, ob sich eine Bereinigung lohnt: Steht dort Yes, lohnt sich der Durchlauf; bei No ist WinSxS bereits aufgeräumt.',
            'Zeigt die Analyse, dass WinSxS unschuldig ist, frisst etwas anderes Ihren Speicher. Disk Mops Festplattenanalyse (Disk Analysis) scannt das Laufwerk als visuelle Treemap und zeigt die größten Ordner in Sekunden; der Große-Dateien-Finder listet Dateien über 500 MB, und der Duplikat-Detektor findet überflüssige Kopien per SHA-256-Vergleich. So sehen Sie das wahre Bild Ihres Laufwerks, bevor Sie dem Komponentenspeicher die Schuld geben.',
          ],
        },
        {
          title: 'WinSxS sicher verkleinern mit DISM StartComponentCleanup',
          content: [
            'Der offizielle Weg zur Verkleinerung des Komponentenspeichers ist dieser Befehl: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Geben Sie ihn im Administrator-Terminal ein und lassen Sie ihn durchlaufen; je nach System dauert das wenige Minuten bis eine halbe Stunde. Der Befehl entfernt nur durch Updates ersetzte Altversionen und rührt die aktuell genutzten Dateien nicht an.',
            'Dieselbe Aufgabe läuft auch automatisch über die Aufgabenplanung, allerdings wartet die geplante Version 30 Tage, bevor sie ersetzte Komponenten entfernt, und läuft nur begrenzte Zeit. Der manuelle Befehl überspringt die Wartezeit — direkt nach einem großen Update gewinnt ein manueller Durchlauf daher meist mehr Platz.',
            'Für eine aggressivere Bereinigung gibt es den Zusatz /ResetBase: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Er entfernt alle ersetzten Versionen, hat aber einen Preis: Installierte Updates lassen sich danach nicht mehr deinstallieren. Nutzen Sie ihn nur auf einem stabilen, vollständig aktualisierten System und schalten Sie den PC währenddessen nicht aus.',
          ],
        },
        {
          title: 'Windows Update-Bereinigung über die Datenträgerbereinigung',
          content: [
            'Wenn Ihnen die Kommandozeile nicht liegt, erledigt die Datenträgerbereinigung einen großen Teil derselben Arbeit. Tippen Sie Datenträgerbereinigung ins Startmenü, öffnen Sie das Tool und wählen Sie Laufwerk C:. Klicken Sie auf Systemdateien bereinigen, setzen Sie den Haken bei Windows Update-Bereinigung (optional auch bei Übermittlungsoptimierungsdateien und temporären Dateien) und bestätigen Sie mit OK. Einige Dateien löscht Windows erst beim nächsten Neustart — das ist normal.',
            'Unter Windows 11 und 10 gibt es dieselbe Option auch in den Einstellungen: Gehen Sie zu Einstellungen, System, Speicher, Temporäre Dateien, aktivieren Sie Windows Update-Bereinigung und klicken Sie auf Dateien entfernen. Beide Wege zielen auf dieselben Update-Reste — nehmen Sie einfach den, der Ihnen leichter fällt.',
            'Bedenken Sie: Die Datenträgerbereinigung sieht nur die eigenen Rückstände von Windows, nicht die Caches von Browsern und Anwendungen. Disk Mop schließt diese Lücke — der Cache-Bereiniger übernimmt System- und App-Caches, der Browser-Cache-Bereiniger räumt Chrome, Firefox und Edge auf, alles in einer Oberfläche.',
          ],
        },
        {
          title: 'Update-Ballast automatisch unter Kontrolle halten',
          content: [
            'Die gute Nachricht: WinSxS braucht keine ständige manuelle Pflege. Windows führt die StartComponentCleanup-Aufgabe während der automatischen Wartung selbst aus; prüfen Sie einfach alle paar Monate mit AnalyzeComponentStore den Zustand und starten Sie nach großen Versionsupgrades einmal eine manuelle Bereinigung.',
            'Der Rest des Laufwerks hat weniger Glück: Heruntergeladene Installer, App-Caches und der Papierkorb wachsen still weiter. Disk Mops geplante Bereinigung (Scheduled Cleanup) räumt diesen Ballast wöchentlich oder monatlich automatisch ab, und die Ein-Klick-Funktion Speed Up leert alte Downloads, System- und Browser-Caches sowie den Papierkorb in einem Durchgang.',
            'Der System Health Score zeigt den Gesamtzustand Ihres Laufwerks auf einen Blick — sinkt der Wert, ist es Zeit zum Aufräumen. So hält DISM den Komponentenspeicher in Schach und Disk Mop den Rest, damit sich Laufwerk C: nicht wieder unbemerkt füllt.',
          ],
        },
      ],
      verdict: [
        'Die erschreckende Größe des WinSxS-Ordners ist größtenteils eine Illusion: Harte Links blähen den Explorer-Wert auf, und manuelles Löschen kann Windows startunfähig machen. Die tatsächliche Größe mit Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore messen und die Bereinigung StartComponentCleanup und der Windows Update-Bereinigung überlassen — das ist sicher und völlig ausreichend.',
        'Für alles außerhalb des Komponentenspeichers übernimmt Disk Mop: Die Festplattenanalyse zeigt, was Ihren Platz frisst, Cache- und Download-Bereiniger entfernen den Ballast, und die geplante Bereinigung automatisiert die Wartung. Die einmalige Lizenz für 19,90 $ gilt lebenslang für Windows und macOS — die kostenlose Version können Sie sofort ausprobieren.',
      ],
      ctaText: 'Bereinigen Sie den Rest Ihres Laufwerks mit Disk Mop',
    },
    fr: {
      title: "Dossier WinSxS trop volumineux ? Nettoyage sûr sous Windows 11/10",
      metaDescription:
        "Votre dossier WinSxS est trop gros ? Découvrez pourquoi sa taille est trompeuse et comment le réduire sans risque avec DISM et le Nettoyage de Windows Update.",
      subtitle: "Comment réduire le magasin de composants sans casser Windows",
      intro: [
        "Le dossier WinSxS n'est presque jamais aussi volumineux qu'il en a l'air : Windows stocke la plupart des fichiers système sous forme de liens physiques (hardlink) pointant vers WinSxS, si bien que l'Explorateur de fichiers compte plusieurs fois les mêmes données. Ne supprimez jamais ce dossier à la main — il contient les composants dont Windows a besoin pour démarrer, se mettre à jour et se réparer. La bonne méthode pour le réduire est la commande intégrée Dism.exe /Online /Cleanup-Image /StartComponentCleanup, complétée par l'option Nettoyage de Windows Update du Nettoyage de disque.",
        "Dans ce guide, nous expliquons d'abord ce qu'est réellement WinSxS et pourquoi la taille affichée est trompeuse. Nous montrons ensuite comment mesurer son encombrement réel avec DISM, quelles commandes exactes le réduisent sans risque, et comment empêcher les résidus de mises à jour de s'accumuler à nouveau.",
        "Contrairement aux conseils du type « supprimez WinSxS et récupérez 10 Go » qui circulent sur Internet, chaque étape présentée ici s'appuie sur des méthodes prises en charge par Microsoft. L'objectif est de libérer de l'espace disque tout en gardant un système capable de se mettre à jour et de se réparer.",
      ],
      sections: [
        {
          title: "Qu'est-ce que le dossier WinSxS et pourquoi paraît-il si volumineux ?",
          content: [
            "WinSxS (Windows Side-by-Side) se trouve dans C:\\Windows\\WinSxS et joue le rôle de magasin de composants de Windows. Presque toutes les pièces du système d'exploitation y sont conservées — fichiers système, packages de pilotes, fonctionnalités facultatives et nouvelles versions de composants apportées par chaque mise à jour. Windows s'appuie sur ce magasin pour installer les mises à jour, activer des fonctionnalités à la demande et réparer les fichiers système endommagés.",
            "Le dossier semble énorme parce que l'Explorateur de fichiers compte les liens physiques comme s'il s'agissait de fichiers entiers. La plupart des fichiers système présents dans des dossiers comme System32 ne sont en réalité que des liens vers une copie unique stockée dans WinSxS, et pourtant l'Explorateur additionne les mêmes données aux deux endroits. C'est pour cela que la fenêtre Propriétés annonce souvent dix gigaoctets ou plus, alors que l'espace réellement occupé sur le disque est nettement inférieur.",
            "Cela dit, le magasin grossit bel et bien avec le temps. Chaque mise à jour cumulative ajoute de nouvelles versions de composants, et Windows conserve un moment celles qu'elles remplacent afin de pouvoir désinstaller une mise à jour en cas de problème. Ce sont ces composants périmés qui font vraiment enfler le dossier — et ce sont eux que l'on peut nettoyer sans risque avec les bons outils.",
          ],
        },
        {
          title: "Pourquoi il ne faut jamais supprimer WinSxS à la main",
          content: [
            "Tenter de supprimer WinSxS depuis l'Explorateur de fichiers est l'une des manipulations les plus risquées que l'on puisse infliger à une installation Windows. À cause des liens physiques, ce que vous effacez n'est souvent pas une copie de secours mais le fichier même que le système utilise activement. Les conséquences vont des mises à jour qui échouent aux fonctionnalités Windows qui refusent de s'activer, en passant par les réparations sfc /scannow qui ne fonctionnent plus et, dans le pire des cas, un PC qui ne démarre plus du tout.",
            "Windows protège ce dossier volontairement : il appartient à TrustedInstaller, et même un compte administrateur ne peut pas en supprimer le contenu directement. Les utilisateurs qui forcent les autorisations finissent généralement par réinstaller Windows peu de temps après. Pour la même raison, tenez-vous à l'écart des scripts « suppresseurs de WinSxS » et des astuces de compression du dossier que l'on trouve en ligne.",
            "Microsoft ne prend en charge que trois méthodes de nettoyage : la commande DISM StartComponentCleanup, le Nettoyage de Windows Update dans le Nettoyage de disque, et la tâche automatique StartComponentCleanup du Planificateur de tâches. Le reste de ce guide n'utilise que ces méthodes sûres.",
          ],
        },
        {
          title: "Vérifiez la taille réelle avec DISM AnalyzeComponentStore",
          content: [
            "Avant de nettoyer quoi que ce soit, mesurez la place que WinSxS occupe vraiment. Faites un clic droit sur le bouton Démarrer et choisissez Terminal (administrateur), ou recherchez cmd et sélectionnez Exécuter en tant qu'administrateur. Saisissez ensuite cette commande : Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. L'analyse peut prendre quelques minutes.",
            "Deux lignes du résultat comptent plus que les autres. La taille signalée par l'Explorateur Windows correspond au chiffre gonflé par les liens physiques, tandis que la taille réelle du magasin de composants (Actual Size of Component Store) indique l'espace véritablement occupé sur le disque. Tout en bas, la ligne Component Store Cleanup Recommended vous dit si DISM estime qu'un nettoyage sera payant : Yes signifie que l'opération en vaut la peine, No que WinSxS est déjà bien rangé.",
            "Si l'analyse innocente WinSxS, c'est que le coupable se trouve ailleurs. L'analyse de disque (Disk Analysis) de Disk Mop parcourt votre lecteur et le représente sous forme de treemap visuelle pour révéler les plus gros dossiers en quelques secondes ; le détecteur de gros fichiers (Large File Finder) liste les fichiers de plus de 500 Mo, et le détecteur de doublons (Duplicate Detector) s'appuie sur des empreintes SHA-256 pour repérer les copies inutiles. Vous obtenez ainsi une photographie fidèle de votre disque avant d'accuser le magasin de composants.",
          ],
        },
        {
          title: "Réduisez WinSxS sans risque avec DISM StartComponentCleanup",
          content: [
            "La méthode officielle pour réduire le magasin de composants tient dans cette commande : Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Tapez-la dans votre terminal ouvert en administrateur et laissez-la aller jusqu'au bout ; selon la machine, cela prend de quelques minutes à une demi-heure. La commande supprime les anciennes versions de composants remplacées par les mises à jour et ne touche jamais aux fichiers actuels dont votre système dépend.",
            "Windows exécute la même tâche en arrière-plan via le Planificateur de tâches, mais la version planifiée attend 30 jours avant de retirer les composants remplacés et ne s'exécute que pendant une durée limitée. Lancer la commande à la main court-circuite ce délai d'attente : c'est pourquoi un passage manuel juste après une grosse mise à jour libère généralement davantage d'espace.",
            "Pour un nettoyage plus agressif, vous pouvez ajouter l'option /ResetBase : Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Elle supprime toutes les versions remplacées, mais le prix à payer est réel : vous ne pourrez plus désinstaller la moindre mise à jour déjà installée. Réservez-la à un système entièrement à jour et sans problème, et n'éteignez jamais le PC pendant l'opération.",
          ],
        },
        {
          title: "Lancez le Nettoyage de Windows Update depuis le Nettoyage de disque",
          content: [
            "Si la ligne de commande n'est pas votre tasse de thé, l'outil Nettoyage de disque effectue une grande partie du même travail. Tapez Nettoyage de disque dans le menu Démarrer, ouvrez l'outil et sélectionnez votre lecteur C:. Dans la fenêtre qui s'affiche, cliquez sur le bouton Nettoyer les fichiers système, cochez la case Nettoyage de Windows Update (éventuellement avec les fichiers d'optimisation de la distribution et les fichiers temporaires), puis validez par OK. Windows terminera peut-être la suppression de certains fichiers au redémarrage suivant : c'est normal.",
            "Sous Windows 11 et 10, la même option est aussi accessible depuis les Paramètres : allez dans Paramètres, Système, Stockage, Fichiers temporaires, cochez la case Nettoyage de Windows Update et cliquez sur Supprimer les fichiers. Les deux chemins visent les mêmes résidus de mises à jour : prenez celui qui vous semble le plus simple.",
            "Gardez en tête que le Nettoyage de disque ne voit que les résidus propres à Windows — il ne touche ni aux caches des navigateurs ni à ceux des applications. Disk Mop comble ce vide : son nettoyeur de cache (Cache Cleaner) prend en charge les caches système et applicatifs, et son nettoyeur de cache navigateur (Browser Cache Cleaner) efface les accumulations de Chrome, Firefox et Edge, le tout depuis une seule interface.",
          ],
        },
        {
          title: "Gardez le ballast des mises à jour sous contrôle automatiquement",
          content: [
            "La bonne nouvelle, c'est que WinSxS ne réclame pas d'attention permanente. Windows exécute lui-même la tâche StartComponentCleanup pendant la maintenance automatique ; il vous suffit de faire le point avec AnalyzeComponentStore tous les quelques mois et de lancer un nettoyage manuel après les grosses mises à niveau de version.",
            "Le reste de votre disque n'a pas cette chance : programmes d'installation téléchargés, caches d'applications et Corbeille continuent de grossir en silence. Le nettoyage planifié (Scheduled Cleanup) de Disk Mop balaie ces accumulations selon un rythme hebdomadaire ou mensuel, tandis que la fonction Accélérer (Speed Up) efface en une seule passe les anciens téléchargements, les caches système et navigateur ainsi que la Corbeille.",
            "Le score de santé du système (System Health Score) résume d'un coup d'œil l'état général de votre disque : quand il baisse, c'est qu'il est temps de faire le ménage. Avec DISM qui tient le magasin de composants et Disk Mop qui s'occupe de tout le reste, votre lecteur C: ne se remplira plus en silence.",
          ],
        },
      ],
      verdict: [
        "La taille effrayante du dossier WinSxS est en grande partie une illusion : les liens physiques gonflent le chiffre affiché par l'Explorateur de fichiers, et supprimer le dossier à la main peut rendre Windows impossible à démarrer. Mesurer la taille réelle avec Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore, puis confier le nettoyage à StartComponentCleanup et au Nettoyage de Windows Update, est à la fois sûr et suffisant.",
        "Pour tout ce qui se trouve hors du magasin de composants, Disk Mop prend le relais : l'analyse de disque montre ce qui dévore votre espace, les nettoyeurs de cache et de téléchargements éliminent les accumulations, et le nettoyage planifié met l'entretien en pilote automatique. Une licence unique à 19,90 $ couvre Windows et macOS à vie, et la version gratuite vous permet de commencer tout de suite.",
      ],
      ctaText: "Nettoyez le reste de votre disque avec Disk Mop",
    },
    es: {
      title: "¿La carpeta WinSxS ocupa demasiado? Limpieza segura en Windows",
      metaDescription:
        "¿Tu carpeta WinSxS es enorme? Descubre por qué su tamaño engaña y cómo reducirla sin riesgos con DISM y la Limpieza de Windows Update. Libera espacio hoy mismo.",
      subtitle: "Cómo reducir el almacén de componentes sin romper Windows",
      intro: [
        "La carpeta WinSxS casi nunca es tan grande como parece: Windows guarda la mayoría de los archivos del sistema como vínculos físicos (hardlink) que apuntan a WinSxS, así que el Explorador de archivos cuenta los mismos datos más de una vez. Nunca borres la carpeta a mano — ahí están los componentes que Windows necesita para arrancar, actualizarse y repararse. La forma segura de reducirla es el comando integrado Dism.exe /Online /Cleanup-Image /StartComponentCleanup, combinado con la opción Limpieza de Windows Update del Liberador de espacio en disco.",
        "En esta guía explicamos primero qué es realmente WinSxS y por qué el tamaño que muestra Windows resulta engañoso. Después verás cómo medir su tamaño real con DISM, qué comandos exactos la reducen sin riesgo y cómo evitar que los restos de las actualizaciones se vuelvan a acumular.",
        "A diferencia de los consejos del tipo « borra WinSxS y recupera 10 GB » que circulan por Internet, cada paso de este artículo se apoya en métodos admitidos por Microsoft. El objetivo es liberar espacio en disco manteniendo un sistema que se pueda seguir actualizando y reparando.",
      ],
      sections: [
        {
          title: "¿Qué es la carpeta WinSxS y por qué parece tan grande?",
          content: [
            "WinSxS (Windows Side-by-Side) se encuentra en C:\\Windows\\WinSxS y funciona como el almacén de componentes de Windows. Allí se guarda casi cada pieza del sistema operativo: archivos del sistema, paquetes de controladores, características opcionales y las nuevas versiones de componentes que llegan con cada actualización. Windows usa ese almacén para instalar actualizaciones, activar características a petición y reparar archivos del sistema dañados.",
            "La carpeta parece enorme porque el Explorador de archivos cuenta los vínculos físicos como si fueran archivos completos. La mayoría de los archivos del sistema que ves en carpetas como System32 son en realidad vínculos a una única copia dentro de WinSxS, pero el Explorador suma los mismos datos en los dos sitios. Por eso la ventana de propiedades suele indicar diez gigabytes o más, mientras que el espacio que la carpeta ocupa de verdad en el disco es bastante menor.",
            "Dicho esto, el almacén sí crece con el tiempo. Cada actualización acumulativa añade versiones nuevas de los componentes, y Windows conserva durante un tiempo las que quedan sustituidas para poder desinstalar la actualización si algo sale mal. Esos componentes retirados son la parte que de verdad engorda la carpeta, y también la que puedes limpiar con seguridad usando las herramientas adecuadas.",
          ],
        },
        {
          title: "Por qué nunca debes borrar WinSxS a mano",
          content: [
            "Intentar borrar WinSxS desde el Explorador de archivos es una de las cosas más arriesgadas que puedes hacerle a una instalación de Windows. Por culpa de los vínculos físicos, lo que eliminas no suele ser una copia de repuesto, sino el propio archivo que el sistema está usando en ese momento. Las consecuencias van desde actualizaciones que fallan y características de Windows que se niegan a activarse hasta reparaciones sfc /scannow que dejan de funcionar y, en el peor de los casos, un equipo que ya no arranca.",
            "Windows protege esa carpeta a propósito: su propietario es TrustedInstaller y ni siquiera las cuentas de administrador pueden eliminar su contenido de forma directa. Quienes fuerzan los permisos acaban reinstalando Windows poco después. Por el mismo motivo, mantente lejos de los scripts « borradores de WinSxS » y de los trucos de compresión de carpetas que circulan por Internet.",
            "Solo hay tres vías de limpieza admitidas por Microsoft: el comando DISM StartComponentCleanup, la Limpieza de Windows Update del Liberador de espacio en disco y la tarea automática StartComponentCleanup del Programador de tareas. El resto de esta guía utiliza exactamente esos métodos seguros.",
          ],
        },
        {
          title: "Comprueba el tamaño real con DISM AnalyzeComponentStore",
          content: [
            "Antes de limpiar nada, mide cuánto espacio ocupa WinSxS en realidad. Haz clic derecho en el botón Inicio y elige Terminal (administrador), o busca cmd y selecciona Ejecutar como administrador. Después escribe este comando: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. El análisis puede tardar unos minutos.",
            "Hay dos líneas del resultado que importan más que el resto. El tamaño que indica el Explorador de Windows es la cifra inflada que incluye los vínculos físicos, mientras que el tamaño real del almacén de componentes (Actual Size of Component Store) es el espacio que se ocupa de verdad en el disco. Abajo del todo, la línea Component Store Cleanup Recommended te dice si DISM espera que la limpieza merezca la pena: Yes significa que conviene ejecutarla y No que WinSxS ya está ordenado.",
            "Si el análisis demuestra que WinSxS es inocente, el espacio se lo está comiendo otra cosa. El análisis de disco (Disk Analysis) de Disk Mop recorre la unidad con un treemap visual y revela las carpetas más grandes en segundos; el buscador de archivos grandes (Large File Finder) lista los archivos de más de 500 MB, y el detector de duplicados (Duplicate Detector) usa hashes SHA-256 para encontrar copias redundantes. Así ves la foto real de tu disco antes de culpar al almacén de componentes.",
          ],
        },
        {
          title: "Reduce WinSxS con seguridad usando DISM StartComponentCleanup",
          content: [
            "La forma oficial de reducir el almacén de componentes es este comando: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Escríbelo en el terminal abierto como administrador y deja que termine; según el equipo puede tardar desde unos minutos hasta media hora. El comando elimina las versiones antiguas de componentes que han sustituido las actualizaciones y no toca en ningún momento los archivos actuales de los que depende el sistema.",
            "Windows también ejecuta esa misma tarea en segundo plano a través del Programador de tareas, pero la versión programada espera 30 días antes de retirar los componentes sustituidos y solo se ejecuta durante un tiempo limitado. Lanzar el comando a mano se salta esa espera, y por eso una pasada manual justo después de una actualización grande suele recuperar más espacio.",
            "Para una limpieza más agresiva puedes añadir el modificador /ResetBase: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Elimina todas las versiones sustituidas, pero tiene un coste real: ya no podrás desinstalar ninguna actualización instalada. Úsalo solo cuando el sistema esté completamente actualizado y funcione sin problemas, y no apagues nunca el equipo mientras trabaja.",
          ],
        },
        {
          title: "Ejecuta la Limpieza de Windows Update desde el Liberador de espacio en disco",
          content: [
            "Si la línea de comandos no es lo tuyo, buena parte de esa misma limpieza la puedes hacer con el Liberador de espacio en disco. Escribe Liberador de espacio en disco en el menú Inicio, abre la herramienta y selecciona la unidad C:. En la ventana que aparece, pulsa el botón Limpiar archivos de sistema, marca la casilla Limpieza de Windows Update (si quieres, junto con Archivos de Optimización de distribución y Archivos temporales) y confirma con Aceptar. Puede que Windows termine de borrar algunos archivos en el siguiente reinicio: es normal.",
            "En Windows 11 y 10 la misma opción está también en Configuración: entra en Configuración, Sistema, Almacenamiento, Archivos temporales, marca la casilla Limpieza de Windows Update y pulsa Quitar archivos. Los dos caminos apuntan a los mismos restos de actualizaciones, así que usa el que te resulte más cómodo.",
            "Ten en cuenta que el Liberador de espacio en disco solo ve los restos del propio Windows: no toca las cachés de los navegadores ni las de las aplicaciones. Disk Mop cubre ese hueco — su limpiador de caché (Cache Cleaner) se encarga de las cachés del sistema y de las aplicaciones, y su limpiador de caché del navegador (Browser Cache Cleaner) borra lo acumulado por Chrome, Firefox y Edge, todo desde una misma interfaz.",
          ],
        },
        {
          title: "Mantén a raya el lastre de las actualizaciones de forma automática",
          content: [
            "La buena noticia es que WinSxS no necesita atención manual constante. Windows ejecuta por su cuenta la tarea StartComponentCleanup durante el mantenimiento automático; a ti solo te toca comprobar el estado con AnalyzeComponentStore cada varios meses y lanzar una limpieza manual después de las grandes actualizaciones de versión.",
            "El resto del disco no tiene tanta suerte: los instaladores descargados, las cachés de las aplicaciones y la papelera de reciclaje siguen creciendo en silencio. La limpieza programada (Scheduled Cleanup) de Disk Mop barre esa acumulación cada semana o cada mes, mientras que la función Acelerar (Speed Up) borra de una sola pasada las descargas antiguas, las cachés del sistema y del navegador y la papelera de reciclaje.",
            "La puntuación de salud del sistema (System Health Score) te da una visión del estado general del disco de un vistazo, así que cuando baja sabes que toca limpiar. Con DISM controlando el almacén de componentes y Disk Mop ocupándose de todo lo demás, tu unidad C: no volverá a llenarse en silencio.",
          ],
        },
      ],
      verdict: [
        "El tamaño aterrador de la carpeta WinSxS es en buena medida una ilusión: los vínculos físicos inflan la cifra que muestra el Explorador de archivos, y borrar la carpeta a mano puede dejar Windows sin arrancar. Medir el tamaño real con Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore y dejar la limpieza en manos de StartComponentCleanup y de la Limpieza de Windows Update es seguro y más que suficiente.",
        "Para todo lo que queda fuera del almacén de componentes, toma el relevo Disk Mop: el análisis de disco muestra qué se está comiendo tu espacio, los limpiadores de caché y de descargas eliminan lo acumulado, y la limpieza programada pone el mantenimiento en piloto automático. Una licencia única de 19,90 $ cubre Windows y macOS de por vida, y con la versión gratuita puedes empezar ahora mismo.",
      ],
      ctaText: "Limpia el resto de tu disco con Disk Mop",
    },
    it: {
      title: "Cartella WinSxS troppo grande? Pulizia sicura su Windows 11/10",
      metaDescription:
        "La cartella WinSxS è troppo grande? Scopri perché le dimensioni ingannano e come ridurla in sicurezza con DISM e Pulizia di Windows Update. Libera spazio ora.",
      subtitle: "Come ridurre l'archivio componenti senza danneggiare Windows",
      intro: [
        "La cartella WinSxS non è quasi mai grande quanto sembra: Windows conserva la maggior parte dei file di sistema come collegamenti reali (hardlink) che puntano a WinSxS, così Esplora file conta più volte gli stessi dati. Non eliminarla mai a mano — contiene i componenti che servono a Windows per avviarsi, aggiornarsi e ripararsi. Il modo sicuro per ridurla è il comando integrato Dism.exe /Online /Cleanup-Image /StartComponentCleanup, insieme all'opzione Pulizia di Windows Update in Pulizia disco.",
        "In questa guida spieghiamo prima che cos'è davvero WinSxS e perché la dimensione mostrata inganna. Poi vediamo come misurare lo spazio realmente occupato con DISM, quali comandi la riducono in sicurezza e come evitare che i residui degli aggiornamenti si accumulino di nuovo.",
        "A differenza dei consigli tipo « elimina WinSxS e recupera 10 GB » che girano in rete, ogni passaggio di questa guida si basa su metodi supportati da Microsoft. L'obiettivo è liberare spazio su disco mantenendo un sistema che si possa ancora aggiornare e riparare.",
      ],
      sections: [
        {
          title: "Che cos'è la cartella WinSxS e perché sembra enorme",
          content: [
            "WinSxS (Windows Side-by-Side) si trova in C:\\Windows\\WinSxS e funziona da archivio componenti di Windows. Qui è conservata quasi ogni parte del sistema operativo: file di sistema, pacchetti di driver, funzionalità facoltative e le nuove versioni dei componenti che arrivano con ogni aggiornamento. Windows usa questo archivio per installare gli aggiornamenti, attivare funzionalità su richiesta e riparare i file di sistema danneggiati.",
            "La cartella sembra enorme perché Esplora file conta i collegamenti reali come se fossero file interi. La maggior parte dei file di sistema che vedi in cartelle come System32 sono in realtà collegamenti a un'unica copia dentro WinSxS, eppure Esplora file somma gli stessi dati in entrambi i punti. Ecco perché la finestra delle proprietà indica spesso dieci gigabyte o più, mentre lo spazio davvero occupato sul disco è nettamente inferiore.",
            "Detto questo, l'archivio cresce comunque nel tempo. Ogni aggiornamento cumulativo aggiunge nuove versioni dei componenti e Windows conserva per un po' quelle sostituite, così da poter disinstallare l'aggiornamento se qualcosa va storto. Sono proprio questi componenti superati a gonfiare davvero la cartella, ed è la parte che puoi ripulire in sicurezza con gli strumenti giusti.",
          ],
        },
        {
          title: "Perché non devi mai eliminare WinSxS a mano",
          content: [
            "Provare a eliminare WinSxS da Esplora file è una delle cose più rischiose che si possano fare a un'installazione di Windows. A causa dei collegamenti reali, quello che cancelli spesso non è una copia di riserva ma proprio il file che il sistema sta usando. Le conseguenze vanno dagli aggiornamenti che falliscono alle funzionalità di Windows che non si attivano più, dalle riparazioni sfc /scannow che smettono di funzionare fino, nel caso peggiore, a un PC che non si avvia affatto.",
            "Windows protegge la cartella di proposito: il proprietario è TrustedInstaller e nemmeno gli account amministratore possono rimuoverne il contenuto in modo diretto. Chi forza le autorizzazioni di solito finisce per reinstallare Windows poco dopo. Per lo stesso motivo, stai alla larga dagli script « cancella WinSxS » e dai trucchi di compressione della cartella che si trovano online.",
            "Le strade di pulizia supportate da Microsoft sono soltanto tre: il comando DISM StartComponentCleanup, la Pulizia di Windows Update in Pulizia disco e l'attività automatica StartComponentCleanup nell'Utilità di pianificazione. Il resto di questa guida usa esattamente questi metodi sicuri.",
          ],
        },
        {
          title: "Controlla le dimensioni reali con DISM AnalyzeComponentStore",
          content: [
            "Prima di pulire qualsiasi cosa, misura quanto spazio occupa davvero WinSxS. Fai clic con il pulsante destro sul pulsante Start e scegli Terminale (amministratore), oppure cerca cmd e seleziona Esegui come amministratore. Digita quindi questo comando: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. L'analisi può richiedere qualche minuto.",
            "Due righe del risultato contano più delle altre. Le dimensioni segnalate da Esplora file mostrano il valore gonfiato dai collegamenti reali, mentre le dimensioni effettive dell'archivio componenti (Actual Size of Component Store) indicano lo spazio realmente occupato sul disco. In fondo, la riga Component Store Cleanup Recommended dice se DISM prevede che la pulizia sia utile: Yes significa che vale la pena eseguirla, No che WinSxS è già in ordine.",
            "Se l'analisi scagiona WinSxS, a divorare il disco è qualcos'altro. L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità con una treemap visiva e mostra le cartelle più grandi in pochi secondi; il ricercatore di file di grandi dimensioni (Large File Finder) elenca i file oltre i 500 MB e il rilevatore di duplicati (Duplicate Detector) usa gli hash SHA-256 per trovare le copie superflue. Così vedi la fotografia reale del disco prima di dare la colpa all'archivio componenti.",
          ],
        },
        {
          title: "Riduci WinSxS in sicurezza con DISM StartComponentCleanup",
          content: [
            "Il modo ufficiale per ridurre l'archivio componenti è questo comando: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Digitalo nel terminale aperto come amministratore e lascialo finire: a seconda del sistema può volerci da qualche minuto a mezz'ora. Il comando rimuove le vecchie versioni dei componenti sostituite dagli aggiornamenti e non tocca mai i file attuali su cui il sistema fa affidamento.",
            "La stessa attività viene eseguita anche in background dall'Utilità di pianificazione, ma la versione pianificata aspetta 30 giorni prima di rimuovere i componenti sostituiti e resta in esecuzione solo per un tempo limitato. Eseguire il comando a mano salta l'attesa: per questo un passaggio manuale subito dopo un aggiornamento importante recupera di solito più spazio.",
            "Per una pulizia più aggressiva puoi aggiungere l'opzione /ResetBase: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Rimuove tutte le versioni sostituite, ma ha un prezzo concreto: non potrai più disinstallare nessun aggiornamento già installato. Usala solo su un sistema completamente aggiornato e senza problemi, e non spegnere mai il PC mentre è al lavoro.",
          ],
        },
        {
          title: "Esegui la Pulizia di Windows Update da Pulizia disco",
          content: [
            "Se la riga di comando non fa per te, gran parte della stessa pulizia si ottiene con lo strumento Pulizia disco. Scrivi Pulizia disco nel menu Start, apri lo strumento e seleziona l'unità C:. Nella finestra che compare fai clic sul pulsante Pulizia file di sistema, spunta la casella Pulizia di Windows Update (volendo insieme a File di Ottimizzazione recapito e File temporanei) e conferma con OK. Windows potrebbe completare l'eliminazione di alcuni file al riavvio successivo: è normale.",
            "Su Windows 11 e 10 la stessa opzione è disponibile anche dalle Impostazioni: vai su Impostazioni, Sistema, Archiviazione, File temporanei, spunta la casella Pulizia di Windows Update e fai clic su Rimuovi file. Entrambe le strade puntano agli stessi residui degli aggiornamenti, quindi scegli quella che ti risulta più comoda.",
            "Tieni presente che Pulizia disco vede solo i residui di Windows: non tocca le cache dei browser né quelle delle applicazioni. Disk Mop colma questa lacuna — il pulitore della cache (Cache Cleaner) si occupa delle cache di sistema e delle app, mentre il pulitore della cache del browser (Browser Cache Cleaner) cancella gli accumuli di Chrome, Firefox ed Edge, tutto da un'unica interfaccia.",
          ],
        },
        {
          title: "Tieni sotto controllo il peso degli aggiornamenti in automatico",
          content: [
            "La buona notizia è che WinSxS non richiede attenzioni manuali costanti. Windows esegue da solo l'attività StartComponentCleanup durante la manutenzione automatica; a te basta fare il punto con AnalyzeComponentStore ogni pochi mesi ed eseguire una pulizia manuale dopo i grandi aggiornamenti di versione.",
            "Il resto del disco non è altrettanto fortunato: programmi di installazione scaricati, cache delle applicazioni e Cestino continuano a crescere in silenzio. La pulizia pianificata (Scheduled Cleanup) di Disk Mop spazza via questi accumuli con cadenza settimanale o mensile, mentre la funzione Accelera (Speed Up) cancella in un unico passaggio i vecchi download, le cache di sistema e del browser e il Cestino.",
            "Il punteggio di salute del sistema (System Health Score) mostra a colpo d'occhio le condizioni generali del disco: quando scende, è il momento di fare pulizia. Con DISM che tiene a bada l'archivio componenti e Disk Mop che si occupa di tutto il resto, l'unità C: non tornerà a riempirsi in silenzio.",
          ],
        },
      ],
      verdict: [
        "Le dimensioni spaventose della cartella WinSxS sono in gran parte un'illusione: i collegamenti reali gonfiano il numero mostrato da Esplora file ed eliminare la cartella a mano può lasciare Windows incapace di avviarsi. Misurare le dimensioni reali con Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore e affidare la pulizia a StartComponentCleanup e alla Pulizia di Windows Update è sicuro e più che sufficiente.",
        "Per tutto ciò che sta fuori dall'archivio componenti subentra Disk Mop: l'analisi del disco mostra che cosa sta divorando lo spazio, i pulitori di cache e download rimuovono gli accumuli e la pulizia pianificata mette la manutenzione in automatico. Una licenza una tantum da 19,90 $ copre Windows e macOS a vita, e con la versione gratuita puoi iniziare subito.",
      ],
      ctaText: "Pulisci il resto del disco con Disk Mop",
    },
    pt: {
      title: "Pasta WinSxS muito grande? Limpeza segura no Windows 11/10",
      metaDescription:
        "Sua pasta WinSxS está enorme? Veja por que o tamanho engana e como reduzi-la com segurança usando o DISM e a Limpeza do Windows Update. Libere espaço agora.",
      subtitle: "Como reduzir o repositório de componentes sem quebrar o Windows",
      intro: [
        "A pasta WinSxS quase nunca é tão grande quanto parece: o Windows guarda a maior parte dos arquivos de sistema como links físicos (hardlink) que apontam para o WinSxS, então o Explorador de Arquivos conta os mesmos dados mais de uma vez. Nunca apague a pasta manualmente — é ali que ficam os componentes de que o Windows precisa para iniciar, se atualizar e se reparar. O jeito seguro de reduzi-la é o comando nativo Dism.exe /Online /Cleanup-Image /StartComponentCleanup, combinado com a opção Limpeza do Windows Update na Limpeza de Disco.",
        "Neste guia explicamos primeiro o que é de fato o WinSxS e por que o tamanho exibido engana. Depois mostramos como medir o espaço real com o DISM, quais comandos exatos reduzem a pasta com segurança e como impedir que os restos de atualização voltem a se acumular.",
        "Ao contrário das dicas do tipo “apague o WinSxS e ganhe 10 GB” que circulam pela internet, cada passo daqui se apoia em métodos suportados pela Microsoft. A meta é liberar espaço em disco mantendo o sistema capaz de se atualizar e se reparar.",
      ],
      sections: [
        {
          title: "O que é a pasta WinSxS e por que ela parece gigante",
          content: [
            "O WinSxS (Windows Side-by-Side) fica em C:\\Windows\\WinSxS e funciona como o repositório de componentes do Windows. Quase toda peça do sistema operacional é guardada ali: arquivos de sistema, pacotes de drivers, recursos opcionais e as novas versões de componentes que chegam a cada atualização. O Windows usa esse repositório para instalar atualizações, ativar recursos sob demanda e reparar arquivos de sistema corrompidos.",
            "A pasta parece enorme porque o Explorador de Arquivos conta os links físicos como se fossem arquivos inteiros. A maioria dos arquivos de sistema em pastas como System32 é, na verdade, apenas um link para uma única cópia dentro do WinSxS, mas o Explorador soma os mesmos dados nos dois lugares. É por isso que a janela de propriedades costuma indicar dez gigabytes ou mais, enquanto o espaço realmente ocupado no disco é bem menor.",
            "Dito isso, o repositório cresce mesmo com o tempo. Cada atualização cumulativa acrescenta novas versões de componentes, e o Windows mantém por um período as versões substituídas para permitir desinstalar a atualização se algo der errado. São esses componentes aposentados que realmente incham a pasta — e são justamente eles que dá para limpar com segurança usando as ferramentas certas.",
          ],
        },
        {
          title: "Por que você nunca deve apagar o WinSxS manualmente",
          content: [
            "Tentar apagar o WinSxS pelo Explorador de Arquivos é uma das coisas mais arriscadas que se pode fazer com uma instalação do Windows. Por causa dos links físicos, o que você apaga muitas vezes não é uma cópia reserva, e sim o próprio arquivo que o sistema está usando. O estrago vai de atualizações que falham e recursos do Windows que se recusam a ativar até reparos sfc /scannow que param de funcionar e, no pior caso, um PC que não inicia mais.",
            "O Windows protege a pasta de propósito: o dono dela é o TrustedInstaller, e nem contas de administrador conseguem remover o conteúdo diretamente. Quem força as permissões costuma reinstalar o Windows pouco tempo depois. Pelo mesmo motivo, fique longe dos scripts “apagador de WinSxS” e dos truques de compactação da pasta que aparecem pela internet.",
            "Só existem três caminhos de limpeza suportados pela Microsoft: o comando DISM StartComponentCleanup, a Limpeza do Windows Update dentro da Limpeza de Disco e a tarefa automática StartComponentCleanup no Agendador de Tarefas. O restante deste guia usa exatamente esses métodos seguros.",
          ],
        },
        {
          title: "Confira o tamanho real com o DISM AnalyzeComponentStore",
          content: [
            "Antes de limpar qualquer coisa, meça quanto espaço o WinSxS realmente ocupa. Clique com o botão direito no botão Iniciar e escolha Terminal (Administrador), ou pesquise por cmd e selecione Executar como administrador. Em seguida digite este comando: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. A análise pode levar alguns minutos.",
            "Duas linhas do resultado importam mais que as outras. O tamanho informado pelo Explorador do Windows mostra o número inflado pelos links físicos, enquanto o tamanho real do repositório de componentes (Actual Size of Component Store) é o espaço de fato ocupado no disco. Lá embaixo, a linha Component Store Cleanup Recommended diz se o DISM espera que a limpeza compense: Yes significa que vale a pena executar, No que o WinSxS já está enxuto.",
            "Se a análise inocentar o WinSxS, é outra coisa que está devorando a unidade. A análise de disco (Disk Analysis) do Disk Mop varre o disco com um treemap visual e revela as maiores pastas em segundos; o localizador de arquivos grandes (Large File Finder) lista arquivos acima de 500 MB e o detector de duplicados (Duplicate Detector) usa hashes SHA-256 para achar cópias redundantes. Assim você enxerga o retrato real da unidade antes de culpar o repositório de componentes.",
          ],
        },
        {
          title: "Reduza o WinSxS com segurança usando o DISM StartComponentCleanup",
          content: [
            "O jeito oficial de reduzir o repositório de componentes é este comando: Dism.exe /Online /Cleanup-Image /StartComponentCleanup. Digite-o no terminal aberto como administrador e deixe terminar; dependendo do sistema, leva de poucos minutos a meia hora. O comando remove as versões antigas de componentes que as atualizações substituíram e nunca encosta nos arquivos atuais dos quais o sistema depende.",
            "O Windows também executa essa mesma tarefa em segundo plano pelo Agendador de Tarefas, mas a versão agendada espera 30 dias antes de remover os componentes substituídos e roda apenas por um tempo limitado. Rodar o comando na mão pula essa espera — por isso uma passada manual logo depois de uma atualização grande costuma recuperar mais espaço.",
            "Para uma limpeza mais agressiva, dá para acrescentar o parâmetro /ResetBase: Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase. Ele remove todas as versões substituídas, mas tem um custo real: você não conseguirá mais desinstalar nenhuma atualização já instalada. Use apenas com o sistema totalmente atualizado e funcionando sem problemas, e jamais desligue o PC enquanto ele estiver trabalhando.",
          ],
        },
        {
          title: "Rode a Limpeza do Windows Update pela Limpeza de Disco",
          content: [
            "Se a linha de comando não é o seu forte, boa parte dessa mesma limpeza sai pela ferramenta Limpeza de Disco. Digite Limpeza de Disco no menu Iniciar, abra a ferramenta e selecione a unidade C:. Na janela que aparecer, clique no botão Limpar arquivos do sistema, marque a caixa Limpeza do Windows Update (se quiser, junto com Arquivos de Otimização de Entrega e Arquivos temporários) e confirme em OK. O Windows pode terminar de apagar alguns arquivos na próxima reinicialização: isso é normal.",
            "No Windows 11 e no 10 a mesma opção também aparece em Configurações: vá em Configurações, Sistema, Armazenamento, Arquivos temporários, marque a caixa Limpeza do Windows Update e clique em Remover arquivos. Os dois caminhos miram os mesmos restos de atualização, então use o que achar mais fácil.",
            "Vale lembrar que a Limpeza de Disco só enxerga os restos do próprio Windows — ela não toca nos caches de navegadores e aplicativos. O Disk Mop preenche essa lacuna: o limpador de cache (Cache Cleaner) cuida dos caches do sistema e dos aplicativos, e o limpador de cache do navegador (Browser Cache Cleaner) apaga o acúmulo de Chrome, Firefox e Edge, tudo em uma única interface.",
          ],
        },
        {
          title: "Mantenha o peso das atualizações sob controle automaticamente",
          content: [
            "A boa notícia é que o WinSxS não exige atenção manual constante. O Windows executa a tarefa StartComponentCleanup sozinho durante a manutenção automática; a você cabe apenas conferir o estado com o AnalyzeComponentStore a cada poucos meses e rodar uma limpeza manual depois das grandes atualizações de versão.",
            "O resto da unidade não tem a mesma sorte: instaladores baixados, caches de aplicativos e a lixeira seguem crescendo em silêncio. A limpeza agendada (Scheduled Cleanup) do Disk Mop varre esse acúmulo semanal ou mensalmente, enquanto o recurso Acelerar (Speed Up) apaga downloads antigos, caches do sistema e do navegador e a lixeira em uma única passada.",
            "A pontuação de saúde do sistema (System Health Score) mostra num relance a condição geral do disco, então uma nota em queda avisa que chegou a hora de limpar. Com o DISM cuidando do repositório de componentes e o Disk Mop cobrindo todo o resto, a sua unidade C: não vai encher em silêncio de novo.",
          ],
        },
      ],
      verdict: [
        "O tamanho assustador da pasta WinSxS é, em boa parte, uma ilusão: os links físicos inflam o número que o Explorador de Arquivos mostra, e apagar a pasta na mão pode deixar o Windows sem iniciar. Medir o tamanho real com Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore e deixar a limpeza por conta do StartComponentCleanup e da Limpeza do Windows Update é seguro e suficiente.",
        "Para tudo o que está fora do repositório de componentes, o Disk Mop assume: a análise de disco mostra o que está devorando o seu espaço, os limpadores de cache e de downloads removem o acúmulo, e a limpeza agendada coloca a manutenção no piloto automático. Uma licença única de 19,90 $ cobre Windows e macOS para sempre, e a versão gratuita deixa você começar agora mesmo.",
      ],
      ctaText: "Limpe o resto do seu disco com o Disk Mop",
    },
    ja: {
      title: "WinSxSフォルダーが大きい？安全に減らす方法（Windows 11/10）",
      metaDescription:
        "WinSxSフォルダーの容量が気になっていませんか。表示サイズが実際より大きく見える理由と、DISMのStartComponentCleanupや「Windows Update のクリーンアップ」で安全に減らす手順を解説します。",
      subtitle: "Windowsを壊さずにコンポーネント ストアを小さくする方法",
      intro: [
        "WinSxSフォルダーは、見た目ほど大きいことはほとんどありません。Windowsはシステム ファイルの多くを、WinSxS内の実体を指すハードリンク（hardlink）として保持しているため、エクスプローラーは同じデータを何度も数えてしまいます。このフォルダーを手動で削除するのは絶対にやめてください。Windowsが起動し、更新され、自分自身を修復するために必要なコンポーネントがここに置かれています。安全に小さくする方法は、標準搭載のコマンド Dism.exe /Online /Cleanup-Image /StartComponentCleanup と、「ディスク クリーンアップ」の「Windows Update のクリーンアップ」の組み合わせです。",
        "この記事では、まずWinSxSとは何か、そしてなぜ表示されるサイズが実態とずれるのかを説明します。続いて、DISMで実際の使用量を測る方法、安全に容量を減らせる具体的なコマンド、更新プログラムの残骸が再びたまるのを防ぐ方法を順に見ていきます。",
        "インターネットでよく見かける「WinSxSを削除して10 GB空ける」といった助言とは違い、ここで紹介する手順はすべてMicrosoftがサポートしている方法にもとづいています。目的は、システムを更新・修復できる状態に保ったまま、ディスクの空き容量を増やすことです。",
      ],
      sections: [
        {
          title: "WinSxSフォルダーとは何か、なぜ巨大に見えるのか",
          content: [
            "WinSxS（Windows Side-by-Side）は C:\\Windows\\WinSxS にあり、Windowsのコンポーネント ストアとして機能します。システム ファイル、ドライバー パッケージ、オプション機能、そして更新のたびに追加される新しいコンポーネントのバージョンなど、OSのほぼすべての部品がここに保管されています。Windowsはこのストアを使って更新プログラムをインストールし、必要に応じて機能を有効化し、破損したシステム ファイルを修復します。",
            "フォルダーが巨大に見えるのは、エクスプローラーがハードリンクを実体のあるファイルとして数えるからです。System32のようなフォルダーにあるシステム ファイルの多くは、実際にはWinSxS内の1つの実体を指すリンクにすぎませんが、エクスプローラーは同じデータを両方の場所で合計に加えます。そのためプロパティ画面では10 GB以上と表示されることが多いのに、ディスク上で実際に占めている容量はそれよりかなり小さいのです。",
            "とはいえ、ストア自体も時間とともに大きくなります。累積更新プログラムのたびに新しいコンポーネントのバージョンが追加され、Windowsは問題が起きたときに更新をアンインストールできるよう、置き換えられた古いバージョンをしばらく保持します。この役目を終えたコンポーネントこそが本当に容量を圧迫している部分であり、適切なツールを使えば安全に整理できる部分でもあります。",
          ],
        },
        {
          title: "WinSxSを手動で削除してはいけない理由",
          content: [
            "エクスプローラーからWinSxSを削除しようとするのは、Windows環境に対してできる最も危険な操作の1つです。ハードリンクの仕組みがあるため、削除しているのは予備のコピーではなく、システムが現在使っているファイルそのものであることがよくあります。その結果、更新プログラムの失敗、Windowsの機能が有効にできなくなる、sfc /scannow による修復が効かなくなる、そして最悪の場合はPCがまったく起動しなくなる、といった事態を招きます。",
            "Windowsはこのフォルダーを意図的に保護しています。所有者はTrustedInstallerであり、管理者アカウントでも中身を直接削除することはできません。権限を強引に変更して削除した人の多くは、ほどなくWindowsを再インストールする羽目になります。同じ理由から、ネット上で見かける「WinSxS削除スクリプト」やフォルダーを圧縮する小技にも手を出さないでください。",
            "Microsoftがサポートしているクリーンアップの方法は3つだけです。DISMのStartComponentCleanupコマンド、「ディスク クリーンアップ」の「Windows Update のクリーンアップ」、そしてタスク スケジューラに登録されている自動のStartComponentCleanupタスクです。この記事の残りの部分では、この安全な方法だけを使います。",
          ],
        },
        {
          title: "DISM AnalyzeComponentStoreで実際のサイズを確認する",
          content: [
            "何かを削除する前に、WinSxSが実際にどれだけの容量を使っているかを測りましょう。スタート ボタンを右クリックして「ターミナル（管理者）」を選ぶか、cmd を検索して「管理者として実行」を選びます。そこで次のコマンドを入力します。Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore。分析には数分かかることがあります。",
            "出力の中でとくに重要なのは2行です。Windowsエクスプローラーが報告するサイズは、ハードリンクを含んだ水増しの数値です。一方、コンポーネント ストアの実際のサイズ（Actual Size of Component Store）が、ディスク上で本当に占めている容量です。最後にある Component Store Cleanup Recommended の行は、DISMがクリーンアップの効果を見込んでいるかどうかを示します。Yes なら実行する価値があり、No ならWinSxSはすでに整理済みです。",
            "分析の結果WinSxSが潔白だと分かったなら、容量を食っているのは別の場所です。Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンして視覚的なツリーマップで表示し、容量の大きいフォルダーを数秒で洗い出します。大容量ファイル検索（Large File Finder）は500 MBを超えるファイルを一覧にし、重複ファイル検出（Duplicate Detector）はSHA-256のハッシュ値で無駄なコピーを見つけ出します。コンポーネント ストアを疑う前に、ディスクの本当の姿を確かめられます。",
          ],
        },
        {
          title: "DISM StartComponentCleanupでWinSxSを安全に小さくする",
          content: [
            "コンポーネント ストアを縮小する公式な方法が、次のコマンドです。Dism.exe /Online /Cleanup-Image /StartComponentCleanup。管理者権限で開いたターミナルに入力し、完了するまで待ちましょう。環境によって、数分から30分程度かかります。このコマンドは更新によって置き換えられた古いコンポーネントのバージョンだけを削除し、システムが現在使用しているファイルには一切手を触れません。",
            "同じタスクはタスク スケジューラによってバックグラウンドでも実行されますが、スケジュールされた方は置き換えられたコンポーネントを削除するまでに30日待ち、実行時間にも制限があります。手動でコマンドを実行するとこの待機期間が適用されないため、大きな更新の直後に手動で実行すると、より多くの容量を取り戻せることが多いのです。",
            "より徹底的に整理したい場合は /ResetBase を追加できます。Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase。置き換えられたバージョンをすべて削除しますが、相応の代償があります。インストール済みの更新プログラムをアンインストールできなくなるのです。システムが最新の状態で問題なく動いているときにだけ使い、実行中はPCの電源を絶対に切らないでください。",
          ],
        },
        {
          title: "「ディスク クリーンアップ」で「Windows Update のクリーンアップ」を実行する",
          content: [
            "コマンド ラインが苦手なら、同じ作業の大部分は「ディスク クリーンアップ」で行えます。スタート メニューに「ディスク クリーンアップ」と入力してツールを開き、C:ドライブを選びます。表示された画面で「システム ファイルのクリーンアップ」ボタンをクリックし、「Windows Update のクリーンアップ」にチェックを入れて（必要なら「配信の最適化ファイル」や「一時ファイル」も一緒に）、「OK」で確定します。一部のファイルは次回の再起動時に削除が完了しますが、これは正常な動作です。",
            "Windows 11と10では、同じ項目を「設定」からも実行できます。「設定」→「システム」→「ストレージ」→「一時ファイル」と進み、「Windows Update のクリーンアップ」にチェックを入れて「ファイルの削除」をクリックしてください。どちらの経路でも対象は同じ更新プログラムの残骸なので、やりやすい方を選んで構いません。",
            "ただし、「ディスク クリーンアップ」が見ているのはWindows自身の残骸だけで、ブラウザーやアプリのキャッシュには手が届きません。その隙間を埋めるのがDisk Mopです。キャッシュ クリーナー（Cache Cleaner）がシステムとアプリのキャッシュを処理し、ブラウザー キャッシュ クリーナー（Browser Cache Cleaner）がChrome、Firefox、Edgeにたまったデータを、すべて1つの画面から削除します。",
          ],
        },
        {
          title: "更新プログラムの肥大化を自動で抑える",
          content: [
            "うれしいことに、WinSxSに常時手をかける必要はありません。Windowsは自動メンテナンスの中でStartComponentCleanupタスクを自ら実行します。利用者がすべきことは、数か月に一度 AnalyzeComponentStore で状態を確認し、大型バージョンアップの後に一度だけ手動でクリーンアップを実行することだけです。",
            "一方、ディスクの他の部分はそう恵まれていません。ダウンロードしたインストーラー、アプリのキャッシュ、ごみ箱は静かに増え続けます。Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）は、週次または月次のスケジュールでこうした蓄積を一掃します。ワンクリックの高速化（Speed Up）機能を使えば、古いダウンロード、システムとブラウザーのキャッシュ、ごみ箱をまとめて一度に片付けられます。",
            "システム ヘルス スコア（System Health Score）はディスク全体の状態をひと目で示すので、スコアが下がってきたら掃除の合図です。DISMがコンポーネント ストアを抑え、Disk Mopがそれ以外のすべてを引き受ければ、C:ドライブが知らないうちにいっぱいになることはなくなります。",
          ],
        },
      ],
      verdict: [
        "WinSxSフォルダーの恐ろしいサイズは、その多くが錯覚です。ハードリンクがエクスプローラーの表示を水増ししているだけで、フォルダーを手動で削除するとWindowsが起動しなくなることさえあります。Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore で実際のサイズを測り、クリーンアップはStartComponentCleanupと「Windows Update のクリーンアップ」に任せる。これが安全であり、それで十分です。",
        "コンポーネント ストア以外の場所は、Disk Mopが引き受けます。ディスク分析が容量を食っている犯人を可視化し、キャッシュとダウンロードのクリーナーが蓄積を取り除き、スケジュール クリーンアップがメンテナンスを自動化します。買い切り19.90ドルのライセンスでWindowsとmacOSを生涯利用でき、無料版ならすぐに試し始められます。",
      ],
      ctaText: "ディスクの残りの部分もDisk Mopで整理しましょう",
    },
  },
};
