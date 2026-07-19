import type { Article } from '../types';

export const windowsOldFolder: Article = {
  slug: 'delete-windows-old-folder',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-07-17',
  readingTime: 7,
  content: {
    tr: {
      title: 'Windows.old Klasörü Nasıl Silinir? Güvenli Silme Rehberi',
      metaDescription:
        'Windows.old klasörü nasıl silinir? Disk Temizleme ve Depolama Algılayıcısı ile güvenli silme adımları, silinmeyen klasör çözümü ve daha fazlası bu rehberde.',
      subtitle: 'Önceki Windows Yüklemesini Güvenle Kaldırma Rehberi',
      intro: [
        'Kısa cevap: Evet, Windows.old klasörünü silmek güvenlidir — yeter ki önceki Windows sürümünüze geri dönmeyi planlamıyor olun. Bu klasör, Windows 11\'e yükseltme veya büyük bir özellik güncellemesi sonrasında oluşur, eski kurulumunuzun tam bir kopyasını içerir ve C: sürücünüzde çoğu zaman 10 GB\'ın çok üzerinde yer kaplar. En güvenli silme yöntemleri, Windows\'un yerleşik Disk Temizleme aracı ve Ayarlar\'daki depolama seçenekleridir.',
        'Bu rehberde önce Windows.old\'un ne olduğunu ve neden var olduğunu açıklayacağız, ardından hem Disk Temizleme hem de Depolama Algılayıcısı üzerinden adım adım silme yollarını göstereceğiz. Klasör inatla silinmiyorsa kullanabileceğiniz komut satırı çözümünü de bulacaksınız.',
        'Son olarak, yükseltmenin geride bıraktığı diğer gizli dosyalara bakacak ve her büyük güncellemeden sonra C: sürücünüzü nasıl temiz tutacağınızı anlatacağız.',
      ],
      sections: [
        {
          title: 'Windows.old Klasörü Nedir ve Neden Var?',
          content: [
            'Windows 10\'dan Windows 11\'e yükseltme yaptığınızda veya büyük bir özellik güncellemesi yüklediğinizde, kurulum programı önceki işletim sistemi kurulumunuzun tamamını C:\\Windows.old klasörüne taşır. Bu klasörün içinde eski Windows sistem dosyaları, eski Program Files klasörleri ve kullanıcı profili klasörlerinizin bir kopyası bulunur. Kısacası, bir önceki sisteminizin neredeyse eksiksiz bir yedeğidir.',
            'Bu klasörün amacı bir güvenlik ağı sağlamaktır: Yeni sürümde ciddi bir sorun yaşarsanız, Ayarlar, Sistem, Kurtarma yolunu izleyip \'Geri dön\' seçeneğiyle önceki Windows sürümünüze dönebilirsiniz. Windows bu klasörü yükseltmeden sonra yaklaşık 10 gün boyunca saklar ve süre dolunca otomatik olarak siler. Ancak birçok kullanıcı, kapladığı alan nedeniyle bu süreyi beklemek istemez.',
            'Silmeden önce bilmeniz gereken faydalı bir detay: Eski kullanıcı profilinizdeki kişisel dosyalara C:\\Windows.old\\Users yolundan hâlâ erişebilirsiniz. Yükseltme sırasında bir şeylerin eksik kaldığını düşünüyorsanız, klasörü silmeden önce buradan kontrol edin.',
          ],
        },
        {
          title: 'Windows.old\'u Silmek Güvenli mi?',
          content: [
            'Evet, iki koşulu göz önünde bulundurduğunuz sürece Windows.old\'u silmek tamamen güvenlidir. Birincisi, klasörü sildiğinizde \'Geri dön\' seçeneği kalıcı olarak devre dışı kalır; yani önceki Windows sürümüne tek tıkla dönme imkânınız ortadan kalkar. İkincisi, silmeden önce eski Users klasöründe ihtiyacınız olan kişisel dosya kalıp kalmadığını kontrol etmelisiniz.',
            'Önemli bir uyarı: Windows.old\'u Dosya Gezgini\'nde seçip Geri Dönüşüm Kutusu\'na sürükleyerek silmeye çalışmayın. Klasördeki dosyaların çoğu sistem izinleriyle korunur; bu yöntem izin hatalarına ve yarım kalmış, bozuk bir silme işlemine yol açar. Doğru yol, bu iş için tasarlanmış yerleşik araçları kullanmaktır.',
            'Klasörü ne zaman tutmalısınız? Yükseltmeyi henüz birkaç gün önce yaptıysanız ve sisteminizin kararlı çalıştığından emin değilseniz, biraz bekleyin. Sürücüleriniz, yazılımlarınız ve donanımınız sorunsuz çalışıyorsa klasörü gönül rahatlığıyla kaldırabilirsiniz.',
          ],
        },
        {
          title: 'Disk Temizleme ile Windows.old Silme',
          content: [
            'Klasik ve en bilinen yöntem Disk Temizleme aracıdır. Başlat menüsüne \'Disk Temizleme\' yazın (veya Çalıştır penceresine cleanmgr komutunu girin) ve aracı açın. Sürücü seçmeniz istenirse C: sürücüsünü seçin. Açılan pencerede alttaki \'Sistem dosyalarını temizle\' düğmesine tıklayın; bu adım yönetici izni gerektirir ve gerekirse tekrar C: sürücüsünü seçmenizi ister.',
            'Yeni listede \'Önceki Windows yüklemeleri\' seçeneğini işaretleyin. Dilerseniz \'Windows Update Temizleme\' ve \'Geçici Windows yükleme dosyaları\' kutularını da işaretleyerek aynı anda daha fazla alan kazanabilirsiniz. Tamam\'a ve ardından \'Dosyaları Sil\' onayına tıklayın. Klasörün boyutuna bağlı olarak işlem birkaç dakika sürebilir.',
            'İşlem bittiğinde Windows.old klasörü ya tamamen kaybolur ya da içi boş küçük bir kalıntı olarak kalır. Kalıntı görürseniz bilgisayarı yeniden başlatın; çoğu durumda klasör bir sonraki açılışta kendiliğinden temizlenir.',
          ],
        },
        {
          title: 'Ayarlar\'da Depolama Algılayıcısı ile Önceki Windows Yüklemesini Kaldırma',
          content: [
            'Windows 11\'de aynı işi modern Ayarlar arayüzünden de yapabilirsiniz. Ayarlar, Sistem, Depolama yolunu izleyin ve \'Geçici dosyalar\' bölümüne tıklayın. Windows sürücünüzü taradıktan sonra silinebilecek öğelerin listesini gösterir. Listede \'Önceki Windows yüklemeleri\' kutusunu işaretleyin ve üstteki \'Dosyaları kaldır\' düğmesine basın.',
            'Aynı bölümdeki temizleme önerileri de yükseltmeden sonra önceki Windows kurulumunu genellikle en üstte listeler. Sonuç Disk Temizleme ile birebir aynıdır; sadece arayüz daha modern ve anlaşılırdır. Hangisini kullanacağınız tamamen tercih meselesidir.',
            'Bonus ipucu: Depolama Algılayıcısı\'nı açık tutarsanız, Windows geçici dosyaları belirli aralıklarla otomatik temizler. Bu, gelecekteki güncellemelerin ardından biriken geçici kurulum dosyalarının uzun süre yer kaplamasını da önler.',
          ],
        },
        {
          title: 'Windows.old Silinmiyorsa Ne Yapmalı?',
          content: [
            'Bazen Disk Temizleme sonrasında bile Windows.old klasörünün bir kısmı diskte kalır ya da silme işlemi izin hatasıyla durur. Bunun en yaygın nedenleri, devam eden bir güncellemenin klasördeki dosyaları hâlâ kullanıyor olması ve dosya sahipliğinin TrustedInstaller gibi sistem hesaplarında olmasıdır. İlk adım olarak bilgisayarı yeniden başlatın, bekleyen güncellemelerin tamamlanmasına izin verin ve Disk Temizleme\'yi yeniden çalıştırın.',
            'Kalıntı hâlâ duruyorsa komut satırı çözümü devreye girer. Başlat menüsünde Komut İstemi\'ni bulup \'Yönetici olarak çalıştır\' deyin ve şu üç komutu sırayla girin: önce takeown /F C:\\Windows.old /R /A /D Y komutuyla klasörün sahipliğini alın, sonra icacls C:\\Windows.old /grant Administrators:F /T komutuyla yöneticilere tam izin verin, en son rd /S /Q C:\\Windows.old komutuyla klasörü silin. Son komutun geri dönüşü yoktur; yazdığınız yolun doğru olduğundan emin olun.',
            'Silme işlemi tamamlandıktan sonra alanın gerçekten geri geldiğini doğrulamak isterseniz, Disk Mop\'un disk analizi (Disk Analysis) özelliği C: sürücünüzü görsel bir treemap ile tarayarak Windows.old\'un gerçekten gittiğini ve kalan alanın nerelere dağıldığını saniyeler içinde gösterir.',
          ],
        },
        {
          title: 'Ne Kadar Alan Kazanırsınız ve Başka Neler Gizli?',
          content: [
            'Windows.old klasörünün boyutu, eski kurulumunuzun doluluğuna bağlı olarak genellikle 10 GB ile 30 GB arasında değişir; bazı sistemlerde daha da büyük olabilir. Ancak yükseltmenin geride bıraktığı tek şey bu değildir: C: sürücüsünün kökünde gizli olarak duran $WINDOWS.~BT ve $WINDOWS.~WS klasörleri, Windows Update artıkları, eski sürücü paketleri ve teslim iyileştirme önbelleği de sessizce yer kaplar.',
            'Bu gizli kalıntıları tek tek elle bulmak zahmetlidir. Disk Mop\'un disk analizi özelliği, tüm sürücünüzü görsel olarak haritalandırır ve en çok yer kaplayan klasörleri anında öne çıkarır. Büyük dosya bulucu (Large File Finder) ise 500 MB\'ın üzerindeki dosyaları — örneğin indirilmiş eski Windows kurulum kalıntılarını — otomatik olarak tespit eder.',
            'Her büyük güncellemeden sonra bu kalıntıları temizlemek, C: sürücünüzün sağlığı için önemlidir. Genel kural olarak sistem sürücünüzde en az yüzde 15-20 boş alan bırakmayı hedefleyin; bu, hem güncellemelerin sorunsuz inmesini hem de sanal belleğin rahat çalışmasını sağlar.',
          ],
        },
        {
          title: 'Her Yükseltmeden Sonra C: Sürücünüzü Temiz Tutun',
          content: [
            'Windows özellik güncellemeleri düzenli olarak gelmeye devam edecek ve her büyük güncelleme yeni bir Windows.old klasörü ile bir dizi geçici dosya oluşturacaktır. Bu nedenle tek seferlik temizlik yerine düzenli bir bakım alışkanlığı edinmek çok daha etkilidir.',
            'Disk Mop bu rutini kolaylaştırır: Hızlandır (Speed Up) özelliği tek tıkla eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve geri dönüşüm kutusunu temizler. Zamanlanmış temizlik (Scheduled Cleanup) ile haftalık veya aylık otomatik bakım görevleri kurabilir, sistem sağlık puanı ile diskinizin genel durumunu tek bakışta izleyebilirsiniz.',
            'En iyi yaklaşım ikisini birleştirmektir: Windows.old gibi korumalı sistem klasörleri için Windows\'un yerleşik araçlarını kullanın, geri kalan her şey — önbellekler, indirmeler, yinelenen dosyalar ve büyük unutulmuş dosyalar — için düzenli bir Disk Mop rutini oluşturun.',
          ],
        },
      ],
      verdict: [
        'Windows.old klasörünü silmek, geri dönüş yapmayacağınızdan eminseniz güvenli ve mantıklıdır. Disk Temizleme veya Ayarlar\'daki depolama seçenekleri işin çoğunu halleder; inatçı kalıntılar için takeown, icacls ve rd komutlarıyla ilerleyen komut satırı yöntemi her zaman elinizin altındadır. Tek başına bu adım bile C: sürücünüzde onlarca gigabaytlık alan açabilir.',
        'Yükseltmenin geride bıraktığı diğer dosyaları bulmak ve diskinizi uzun vadede temiz tutmak içinse Disk Mop pratik bir yardımcıdır. Disk analizi, büyük dosya bulucu, önbellek temizleyici ve zamanlanmış temizlik özelliklerinin tamamı, $9.90\'lık tek seferlik ömür boyu lisansla sunulur — abonelik yoktur.',
      ],
      ctaText: 'Disk Mop ile C: sürücünüzde yer açın',
    },
    en: {
      title: 'How to Delete Windows.old Folder Safely (Windows 11)',
      metaDescription:
        'Delete Windows.old folder safely with Disk Cleanup or Storage Sense, fix a folder that won\'t delete, and reclaim gigabytes on your C: drive today.',
      subtitle: 'A Safe, Step-by-Step Guide to Removing Your Previous Windows Installation',
      intro: [
        'Short answer: yes, it is safe to delete the Windows.old folder — as long as you don\'t plan to roll back to your previous version of Windows. The folder appears after an upgrade to Windows 11 or a major feature update, contains a full copy of your old installation, and often takes up well over 10 GB on your C: drive. The safest ways to remove it are Windows\' built-in Disk Cleanup tool or the storage options in Settings.',
        'In this guide, we\'ll first explain what Windows.old is and why it exists, then walk through both removal paths step by step: Disk Cleanup and Storage Sense. You\'ll also find the command-line fix for the stubborn case where Windows.old won\'t delete no matter what you try.',
        'Finally, we\'ll look at the other hidden files an upgrade leaves behind and how to keep your C: drive lean after every major update going forward.',
      ],
      sections: [
        {
          title: 'What Is the Windows.old Folder and Why It Exists',
          content: [
            'When you upgrade from Windows 10 to Windows 11, or install a major feature update, Windows Setup moves your entire previous installation into C:\\Windows.old. Inside you\'ll find the old Windows system files, the previous Program Files folders, and a copy of your user profile folders. In short, it\'s a nearly complete snapshot of the system you were running before the upgrade.',
            'The folder exists as a safety net: if something goes seriously wrong on the new version, you can go to Settings, then System, then Recovery, and use the \'Go back\' option to restore your previous version of Windows. Windows keeps the folder for roughly 10 days after the upgrade and then removes it automatically. Many users, however, don\'t want to wait that long given how much space it occupies.',
            'One useful detail before you delete anything: your personal files from the old user profile are still accessible under C:\\Windows.old\\Users. If you suspect something didn\'t carry over during the upgrade, check there first — once the folder is gone, so is that copy.',
          ],
        },
        {
          title: 'Is Windows.old Safe to Delete?',
          content: [
            'Yes, deleting Windows.old is completely safe as long as you keep two things in mind. First, removing it permanently disables the \'Go back\' option, so you lose the one-click path back to your previous Windows version. Second, you should confirm there are no personal files you still need inside the old Users folder before you remove it.',
            'One important warning: don\'t try to delete Windows.old by selecting it in File Explorer and sending it to the Recycle Bin. Most files inside are protected by system permissions, so that approach ends in access-denied errors and a half-deleted, broken folder. The right way is to use the built-in tools designed exactly for this job.',
            'When should you keep it? If you upgraded only a few days ago and aren\'t yet sure the new version is stable on your hardware, wait a little longer. Once your drivers, apps, and peripherals all work as expected, you can remove the folder with confidence.',
          ],
        },
        {
          title: 'Delete Windows.old with Disk Cleanup',
          content: [
            'The classic method is the Disk Cleanup tool. Open the Start menu, type \'Disk Cleanup\' (or run cleanmgr from the Run dialog), and launch it. If you\'re asked to pick a drive, choose C:. In the window that opens, click the \'Clean up system files\' button at the bottom — this step requires administrator rights and may ask you to select the C: drive again.',
            'In the refreshed list, check \'Previous Windows installation(s)\'. While you\'re there, you can also tick \'Windows Update Cleanup\' and \'Temporary Windows installation files\' to reclaim even more space in the same pass. Click OK, then confirm with \'Delete Files\'. Depending on the folder\'s size, the process can take several minutes.',
            'When it finishes, the Windows.old folder is either gone entirely or reduced to a small empty remnant. If a stub remains, restart your PC — in most cases Windows clears it automatically on the next boot.',
          ],
        },
        {
          title: 'Remove the Previous Windows Installation with Storage Sense',
          content: [
            'On Windows 11 you can do the same job from the modern Settings app. Go to Settings, then System, then Storage, and click \'Temporary files\'. After Windows scans your drive, it shows a list of removable items. Check the \'Previous Windows installation(s)\' entry and click the \'Remove files\' button at the top.',
            'The cleanup recommendations in the same Storage section usually list the previous installation near the top right after an upgrade, too. The result is identical to Disk Cleanup — only the interface is more modern and easier to read. Which one you use is purely a matter of preference.',
            'A bonus tip: if you keep Storage Sense enabled, Windows will clear temporary files automatically on a schedule. That also prevents leftover setup files from future updates from sitting on your drive for months unnoticed.',
          ],
        },
        {
          title: 'What to Do When Windows.old Won\'t Delete',
          content: [
            'Sometimes part of Windows.old survives even after Disk Cleanup, or the deletion stops with a permission error. The most common causes are a pending update that is still using files in the folder, and file ownership held by system accounts such as TrustedInstaller. As a first step, restart your PC, let any pending updates finish, and run Disk Cleanup again.',
            'If a remnant still refuses to go, the command line will finish the job. Find Command Prompt in the Start menu, choose \'Run as administrator\', and enter three commands in order: first take ownership of the folder with takeown /F C:\\Windows.old /R /A /D Y, then grant administrators full control with icacls C:\\Windows.old /grant Administrators:F /T, and finally delete it with rd /S /Q C:\\Windows.old. The last command is immediate and irreversible, so double-check the path before pressing Enter.',
            'Once the deletion goes through, you may want to verify the space actually came back. Disk Mop\'s Disk Analysis feature scans your C: drive into a visual treemap, confirming in seconds that Windows.old is really gone and showing you exactly where the remaining space is being used.',
          ],
        },
        {
          title: 'How Much Space You Get Back — and What Else Is Hiding',
          content: [
            'The size of Windows.old typically ranges from around 10 GB to 30 GB, depending on how full your old installation was — on some systems it\'s even larger. But it\'s not the only thing an upgrade leaves behind: hidden folders named $WINDOWS.~BT and $WINDOWS.~WS in the root of C:, Windows Update leftovers, old driver packages, and the delivery optimization cache all quietly consume space as well.',
            'Hunting down these hidden leftovers by hand is tedious. Disk Mop\'s Disk Analysis maps your entire drive visually and instantly highlights the folders eating the most space. Its Large File Finder automatically detects files over 500 MB — such as forgotten Windows installation media or old download archives.',
            'Clearing these remnants after every major update matters for the long-term health of your C: drive. As a general rule, aim to keep at least 15-20% of your system drive free so updates can download smoothly and virtual memory has room to work.',
          ],
        },
        {
          title: 'Keep Your C: Drive Lean After Every Upgrade',
          content: [
            'Windows feature updates will keep arriving on a regular cadence, and every major one creates a fresh Windows.old folder along with a batch of temporary files. That\'s why building a regular maintenance habit beats doing a heroic one-off cleanup every time your drive fills up.',
            'Disk Mop makes that routine effortless: the Speed Up feature cleans old downloads, system cache, browser cache, and the recycle bin in a single click. With Scheduled Cleanup you can set up weekly or monthly automatic maintenance tasks, and the System Health Score gives you an at-a-glance view of how your disk is doing.',
            'The best approach combines both worlds: use Windows\' built-in tools for protected system folders like Windows.old, and let a regular Disk Mop routine handle everything else — caches, downloads, duplicates, and large forgotten files.',
          ],
        },
      ],
      verdict: [
        'Deleting the Windows.old folder is safe and sensible once you\'re sure you won\'t roll back. Disk Cleanup or the storage options in Settings handle most of the work, and for stubborn remnants the command-line route with takeown, icacls, and rd is always available. That single step alone can free tens of gigabytes on your C: drive.',
        'For finding everything else the upgrade left behind — and keeping your disk lean long term — Disk Mop is a practical companion. Disk Analysis, the Large File Finder, the Cache Cleaner, and Scheduled Cleanup are all included in a one-time $9.90 lifetime license, with no subscription attached.',
      ],
      ctaText: 'Reclaim gigabytes on your C: drive with Disk Mop',
    },
    de: {
      title: 'Windows.old Ordner löschen: Sicher entfernen (Windows 11)',
      metaDescription:
        'Windows.old Ordner löschen: alte Windows-Installation sicher per Datenträgerbereinigung oder Speicheroptimierung entfernen und Gigabytes zurückgewinnen.',
      subtitle: 'Schritt für Schritt die vorherige Windows-Installation sicher entfernen',
      intro: [
        'Kurze Antwort: Ja, Sie können den Windows.old Ordner sicher löschen — solange Sie nicht zur vorherigen Windows-Version zurückkehren möchten. Der Ordner entsteht nach einem Upgrade auf Windows 11 oder einem großen Funktionsupdate, enthält eine vollständige Kopie Ihrer alten Installation und belegt oft weit über 10 GB auf dem C:-Laufwerk. Am sichersten entfernen Sie ihn mit der Datenträgerbereinigung oder über die Speicheroptionen in den Einstellungen.',
        'In diesem Leitfaden erklären wir zunächst, was Windows.old ist, und zeigen dann beide Löschwege Schritt für Schritt. Dazu kommt die Kommandozeilen-Lösung für den hartnäckigen Fall, dass sich Windows.old einfach nicht löschen lässt.',
        'Zum Schluss sehen wir uns an, welche versteckten Dateien ein Upgrade sonst noch hinterlässt und wie Sie Ihr C:-Laufwerk nach jedem großen Update dauerhaft schlank halten.',
      ],
      sections: [
        {
          title: 'Was ist der Windows.old Ordner und warum existiert er?',
          content: [
            'Bei einem Upgrade von Windows 10 auf Windows 11 oder einem großen Funktionsupdate verschiebt das Windows-Setup Ihre komplette vorherige Installation nach C:\\Windows.old. Darin liegen die alten Windows-Systemdateien, die früheren Program-Files-Ordner und eine Kopie Ihrer Benutzerprofile — praktisch ein Abbild des Systems, das Sie vor dem Upgrade genutzt haben.',
            'Der Ordner dient als Sicherheitsnetz: Läuft auf der neuen Version etwas schief, können Sie unter Einstellungen, System, Wiederherstellung mit der Option „Zurück“ zur vorherigen Windows-Version wechseln. Windows behält den Ordner etwa 10 Tage nach dem Upgrade und entfernt ihn dann automatisch. Viele Nutzer wollen angesichts der Größe aber nicht so lange warten.',
            'Ein nützliches Detail vor dem Löschen: Ihre persönlichen Dateien aus dem alten Benutzerprofil sind unter C:\\Windows.old\\Users weiterhin erreichbar. Prüfen Sie dort zuerst, ob beim Upgrade etwas verloren gegangen ist — nach dem Löschen ist auch diese Kopie weg.',
          ],
        },
        {
          title: 'Ist es sicher, Windows.old zu löschen?',
          content: [
            'Ja, das Löschen von Windows.old ist völlig sicher, wenn Sie zwei Dinge beachten. Erstens: Danach ist die Option „Zurück“ dauerhaft deaktiviert — der einfache Weg zur vorherigen Windows-Version entfällt. Zweitens sollten Sie vorher prüfen, ob im alten Users-Ordner noch persönliche Dateien liegen, die Sie brauchen.',
            'Wichtige Warnung: Versuchen Sie nicht, Windows.old im Datei-Explorer in den Papierkorb zu ziehen. Die meisten Dateien darin sind durch Systemberechtigungen geschützt; dieser Weg endet in Zugriffsfehlern und einem halb gelöschten, beschädigten Ordner. Nutzen Sie stattdessen die dafür vorgesehenen Bordmittel.',
            'Wann sollten Sie den Ordner behalten? Wenn das Upgrade erst wenige Tage her ist und Sie noch nicht sicher sind, dass alles stabil läuft, warten Sie lieber. Sobald Treiber, Programme und Geräte einwandfrei funktionieren, können Sie den Ordner bedenkenlos entfernen.',
          ],
        },
        {
          title: 'Windows.old mit der Datenträgerbereinigung löschen',
          content: [
            'Der klassische Weg führt über die Datenträgerbereinigung. Öffnen Sie das Startmenü, tippen Sie „Datenträgerbereinigung“ (oder starten Sie cleanmgr über das Ausführen-Fenster) und wählen Sie bei Nachfrage das Laufwerk C:. Klicken Sie dann unten auf „Systemdateien bereinigen“ — dieser Schritt erfordert Administratorrechte und fragt gegebenenfalls erneut nach dem Laufwerk.',
            'Setzen Sie in der neuen Liste ein Häkchen bei „Vorherige Windows-Installation(en)“. Bei der Gelegenheit können Sie auch „Windows Update-Bereinigung“ und „Temporäre Windows-Installationsdateien“ auswählen, um noch mehr Platz freizugeben. Bestätigen Sie mit OK und „Dateien löschen“. Je nach Ordnergröße dauert der Vorgang einige Minuten.',
            'Danach ist Windows.old entweder komplett verschwunden oder nur noch ein leerer Rest. Bleibt ein Rest übrig, starten Sie den PC neu — meist räumt Windows ihn beim nächsten Start automatisch weg.',
          ],
        },
        {
          title: 'Vorherige Windows-Installation mit der Speicheroptimierung entfernen',
          content: [
            'Unter Windows 11 geht dasselbe auch über die modernen Einstellungen. Öffnen Sie Einstellungen, System, Speicher und klicken Sie auf „Temporäre Dateien“. Nach dem Scan zeigt Windows eine Liste löschbarer Elemente. Markieren Sie „Vorherige Windows-Installation(en)“ und klicken Sie oben auf „Dateien entfernen“.',
            'Auch die Bereinigungsempfehlungen im Speicher-Bereich listen die vorherige Installation nach einem Upgrade meist ganz oben. Das Ergebnis ist identisch mit der Datenträgerbereinigung — nur die Oberfläche ist moderner. Welche Variante Sie nutzen, ist reine Geschmackssache.',
            'Bonus-Tipp: Lassen Sie die Speicheroptimierung aktiviert, dann räumt Windows temporäre Dateien automatisch nach Zeitplan auf — so bleiben auch Setup-Reste künftiger Updates nicht monatelang liegen.',
          ],
        },
        {
          title: 'Was tun, wenn sich Windows.old nicht löschen lässt?',
          content: [
            'Manchmal überlebt ein Teil von Windows.old selbst die Datenträgerbereinigung, oder das Löschen bricht mit einem Berechtigungsfehler ab. Häufigste Ursachen: ein noch laufendes Update nutzt Dateien im Ordner, oder die Dateien gehören Systemkonten wie TrustedInstaller. Starten Sie zunächst den PC neu, lassen Sie ausstehende Updates abschließen und führen Sie die Datenträgerbereinigung erneut aus.',
            'Bleibt ein Rest hartnäckig, hilft die Kommandozeile. Öffnen Sie die Eingabeaufforderung per „Als Administrator ausführen“ und geben Sie drei Befehle nacheinander ein: Übernehmen Sie mit takeown /F C:\\Windows.old /R /A /D Y den Besitz des Ordners, gewähren Sie mit icacls C:\\Windows.old /grant Administrators:F /T volle Rechte und löschen Sie den Ordner mit rd /S /Q C:\\Windows.old. Der letzte Befehl ist sofort wirksam und endgültig — prüfen Sie den Pfad genau.',
            'Ob der Platz wirklich zurück ist, prüfen Sie anschließend am schnellsten mit der Festplattenanalyse (Disk Analysis) von Disk Mop: Sie scannt das C:-Laufwerk in eine visuelle Treemap und zeigt in Sekunden, dass Windows.old wirklich weg ist.',
          ],
        },
        {
          title: 'Wie viel Platz Sie zurückbekommen — und was sich sonst noch versteckt',
          content: [
            'Windows.old ist je nach Füllstand der alten Installation meist zwischen etwa 10 GB und 30 GB groß, auf manchen Systemen sogar mehr. Doch das Upgrade hinterlässt noch mehr: die versteckten Ordner $WINDOWS.~BT und $WINDOWS.~WS im Stammverzeichnis von C:, Windows-Update-Rückstände, alte Treiberpakete und den Übermittlungsoptimierungs-Cache.',
            'Diese versteckten Reste von Hand aufzuspüren ist mühsam. Disk Mops Festplattenanalyse kartiert das gesamte Laufwerk visuell und hebt die größten Platzfresser sofort hervor. Der Große-Dateien-Finder erkennt automatisch Dateien über 500 MB, etwa vergessene Windows-Installationsmedien.',
            'Räumen Sie diese Reste nach jedem großen Update auf, und halten Sie als Faustregel mindestens 15-20 % Ihres Systemlaufwerks frei — für reibungslose Updates und ausreichend virtuellen Speicher.',
          ],
        },
        {
          title: 'Halten Sie Ihr C:-Laufwerk nach jedem Upgrade schlank',
          content: [
            'Windows-Funktionsupdates erscheinen regelmäßig, und jedes große Update erzeugt einen neuen Windows.old Ordner samt temporärer Dateien. Eine feste Wartungsroutine ist deshalb wirksamer als eine große Einmal-Aufräumaktion, wenn das Laufwerk schon voll ist.',
            'Disk Mop macht diese Routine mühelos: Die Speed-Up-Funktion bereinigt alte Downloads, System-Cache, Browser-Cache und Papierkorb mit einem Klick. Mit der geplanten Bereinigung (Scheduled Cleanup) richten Sie wöchentliche oder monatliche Wartungsaufgaben ein, und der System Health Score zeigt den Zustand Ihres Laufwerks auf einen Blick.',
            'Der beste Ansatz kombiniert beides: Nutzen Sie die Windows-Bordmittel für geschützte Systemordner wie Windows.old — und überlassen Sie den Rest, von Caches über Downloads bis zu Duplikaten, einer regelmäßigen Disk-Mop-Routine.',
          ],
        },
      ],
      verdict: [
        'Den Windows.old Ordner zu löschen ist sicher und sinnvoll, sobald feststeht, dass Sie nicht zurückwechseln wollen. Datenträgerbereinigung oder die Speicheroptionen in den Einstellungen erledigen den Großteil, und für hartnäckige Reste steht der Kommandozeilenweg mit takeown, icacls und rd bereit. Allein dieser Schritt kann Dutzende Gigabytes auf dem C:-Laufwerk freigeben.',
        'Um alles Übrige zu finden, was das Upgrade hinterlassen hat, und das Laufwerk langfristig schlank zu halten, ist Disk Mop ein praktischer Begleiter. Festplattenanalyse, Große-Dateien-Finder, Cache-Bereiniger und geplante Bereinigung sind in einer einmaligen Lifetime-Lizenz für $9.90 enthalten — ganz ohne Abo.',
      ],
      ctaText: 'Gewinnen Sie mit Disk Mop Gigabytes zurück',
    },
  },
};
