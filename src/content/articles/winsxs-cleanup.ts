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
        'Bileşen deposu dışında kalan her şey için Disk Mop devreye girer: disk analizi alanı neyin yediğini görselleştirir, önbellek ve indirme temizleyicileri birikintileri kaldırır, zamanlanmış temizlik ise bakımı otomatiğe bağlar. 9,90 dolarlık tek seferlik lisansla Windows ve macOS\'te ömür boyu kullanabilirsiniz; ücretsiz sürümle denemeye hemen başlayabilirsiniz.',
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
        'For everything outside the component store, Disk Mop takes over: Disk Analysis visualizes what\'s eating your space, the cache and downloads cleaners remove the buildup, and Scheduled Cleanup puts maintenance on autopilot. A one-time $9.90 license covers Windows and macOS for life, and the free version lets you start right away.',
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
            'Der Versuch, WinSxS im Datei-Explorer zu löschen, gehört zu den riskantesten Eingriffen in eine Windows-Installation. Wegen der harten Links löschen Sie oft keine Reservekopie, sondern genau die Datei, die das System aktiv verwendet. Die Folgen reichen von fehlgeschlagenen Updates über nicht funktionierende sfc /scannow-Reparaturen bis zu einem PC, der gar nicht mehr startet.',
            'Windows schützt den Ordner bewusst: Er gehört TrustedInstaller, und selbst Administratorkonten können den Inhalt nicht direkt entfernen. Wer die Berechtigungen mit Gewalt umgeht, installiert Windows meist kurz darauf neu. Meiden Sie aus demselben Grund auch dubiose WinSxS-Löschskripte und Komprimierungstricks aus dem Internet.',
            'Microsoft unterstützt nur drei Bereinigungswege: den DISM-Befehl StartComponentCleanup, die Windows Update-Bereinigung in der Datenträgerbereinigung und die automatische StartComponentCleanup-Aufgabe in der Aufgabenplanung. Der Rest dieses Leitfadens nutzt genau diese sicheren Methoden.',
          ],
        },
        {
          title: 'Die tatsächliche Größe mit DISM AnalyzeComponentStore prüfen',
          content: [
            'Messen Sie vor jeder Bereinigung, wie viel Platz WinSxS wirklich belegt. Klicken Sie mit der rechten Maustaste auf Start und wählen Sie Terminal (Administrator), oder suchen Sie cmd und wählen Sie Als Administrator ausführen. Geben Sie dann diesen Befehl ein: Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore. Die Analyse kann einige Minuten dauern.',
            'Zwei Zeilen der Ausgabe sind entscheidend: Die vom Explorer gemeldete Größe zeigt den durch harte Links aufgeblähten Wert, die tatsächliche Größe des Komponentenspeichers den real belegten Platz. Die Zeile Component Store Cleanup Recommended verrät, ob sich eine Bereinigung lohnt: Steht dort Yes, lohnt sich der Durchlauf; bei No ist WinSxS bereits aufgeräumt.',
            'Zeigt die Analyse, dass WinSxS unschuldig ist, frisst etwas anderes Ihren Speicher. Disk Mops Festplattenanalyse (Disk Analysis) scannt das Laufwerk als visuelle Treemap und zeigt die größten Ordner in Sekunden; der Große-Dateien-Finder listet Dateien über 500 MB, und der Duplikat-Detektor findet überflüssige Kopien per SHA-256-Vergleich.',
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
            'Unter Windows 11 und 10 gibt es dieselbe Option auch in den Einstellungen: Gehen Sie zu Einstellungen, System, Speicher, Temporäre Dateien, aktivieren Sie Windows Update-Bereinigung und klicken Sie auf Dateien entfernen. Beide Wege zielen auf dieselben Update-Reste.',
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
        'Für alles außerhalb des Komponentenspeichers übernimmt Disk Mop: Die Festplattenanalyse zeigt, was Ihren Platz frisst, Cache- und Download-Bereiniger entfernen den Ballast, und die geplante Bereinigung automatisiert die Wartung. Die einmalige Lizenz für 9,90 US-Dollar gilt lebenslang für Windows und macOS — die kostenlose Version können Sie sofort ausprobieren.',
      ],
      ctaText: 'Bereinigen Sie den Rest Ihres Laufwerks mit Disk Mop',
    },
  },
};
