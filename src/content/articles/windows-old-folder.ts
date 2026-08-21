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
        'Yükseltmenin geride bıraktığı diğer dosyaları bulmak ve diskinizi uzun vadede temiz tutmak içinse Disk Mop pratik bir yardımcıdır. Disk analizi, büyük dosya bulucu, önbellek temizleyici ve zamanlanmış temizlik özelliklerinin tamamı, $19.90\'lık tek seferlik ömür boyu lisansla sunulur — abonelik yoktur.',
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
        'For finding everything else the upgrade left behind — and keeping your disk lean long term — Disk Mop is a practical companion. Disk Analysis, the Large File Finder, the Cache Cleaner, and Scheduled Cleanup are all included in a one-time $19.90 lifetime license, with no subscription attached.',
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
        'In diesem Leitfaden erklären wir zunächst, was Windows.old ist und warum es den Ordner überhaupt gibt, und zeigen dann beide Löschwege Schritt für Schritt: die Datenträgerbereinigung und die Speicheroptimierung. Dazu kommt die Kommandozeilen-Lösung für den hartnäckigen Fall, dass sich Windows.old einfach nicht löschen lässt, egal was Sie versuchen.',
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
            'Ob der Platz wirklich zurück ist, prüfen Sie anschließend am schnellsten mit der Festplattenanalyse (Disk Analysis) von Disk Mop: Sie scannt das C:-Laufwerk in eine visuelle Treemap und zeigt in Sekunden, dass Windows.old wirklich weg ist — und wohin der verbleibende Speicherplatz auf dem Laufwerk tatsächlich fließt.',
          ],
        },
        {
          title: 'Wie viel Platz Sie zurückbekommen — und was sich sonst noch versteckt',
          content: [
            'Windows.old ist je nach Füllstand der alten Installation meist zwischen etwa 10 GB und 30 GB groß, auf manchen Systemen sogar mehr. Doch das Upgrade hinterlässt noch mehr: die versteckten Ordner $WINDOWS.~BT und $WINDOWS.~WS im Stammverzeichnis von C:, Windows-Update-Rückstände, alte Treiberpakete und den Übermittlungsoptimierungs-Cache — sie alle belegen still und leise ebenfalls Platz auf Ihrem Systemlaufwerk.',
            'Diese versteckten Reste von Hand aufzuspüren ist mühsam. Disk Mops Festplattenanalyse kartiert das gesamte Laufwerk visuell und hebt die größten Platzfresser sofort hervor. Der Große-Dateien-Finder (Large File Finder) erkennt automatisch Dateien über 500 MB, etwa vergessene Windows-Installationsmedien oder alte Download-Archive.',
            'Diese Reste nach jedem großen Update aufzuräumen, zahlt sich langfristig für die Gesundheit Ihres C:-Laufwerks aus. Als Faustregel gilt: Halten Sie mindestens 15-20 % Ihres Systemlaufwerks frei, damit Updates reibungslos heruntergeladen werden und der virtuelle Speicher genügend Platz zum Arbeiten hat.',
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
        'Um alles Übrige zu finden, was das Upgrade hinterlassen hat, und das Laufwerk langfristig schlank zu halten, ist Disk Mop ein praktischer Begleiter. Festplattenanalyse, Große-Dateien-Finder, Cache-Bereiniger und geplante Bereinigung sind in einer einmaligen Lifetime-Lizenz für 19,90 $ enthalten — ganz ohne Abo.',
      ],
      ctaText: 'Gewinnen Sie mit Disk Mop Gigabytes zurück',
    },
    fr: {
      title: "Comment supprimer le dossier Windows.old sans risque (Windows 11)",
      metaDescription:
        "Supprimez le dossier Windows.old sans risque avec le Nettoyage de disque ou l'Assistant Stockage, débloquez un dossier récalcitrant et récupérez des Go sur C:.",
      subtitle: "Le guide pas à pas pour retirer sans risque votre installation Windows précédente",
      intro: [
        "Réponse courte : oui, supprimer le dossier Windows.old est sans danger — à condition de ne pas envisager un retour à votre version précédente de Windows. Ce dossier apparaît après une mise à niveau vers Windows 11 ou une mise à jour de fonctionnalités majeure, contient une copie complète de votre ancienne installation et dépasse souvent largement 10 Go sur le lecteur C:. Les méthodes de suppression les plus sûres sont l'outil Nettoyage de disque intégré à Windows et les options de stockage des Paramètres.",
        "Dans ce guide, nous expliquons d'abord ce qu'est Windows.old et pourquoi ce dossier existe, puis nous détaillons pas à pas les deux méthodes de suppression : le Nettoyage de disque et l'Assistant Stockage. Vous y trouverez également la solution en ligne de commande pour le cas tenace où Windows.old refuse de disparaître, quoi que vous tentiez.",
        "Enfin, nous verrons quels autres fichiers cachés une mise à niveau laisse derrière elle et comment garder votre lecteur C: allégé après chaque mise à jour majeure.",
      ],
      sections: [
        {
          title: "Qu'est-ce que le dossier Windows.old et pourquoi existe-t-il ?",
          content: [
            "Lorsque vous passez de Windows 10 à Windows 11, ou que vous installez une mise à jour de fonctionnalités majeure, le programme d'installation de Windows déplace l'intégralité de votre installation précédente dans C:\\Windows.old. Vous y retrouvez les anciens fichiers système de Windows, les précédents dossiers Program Files et une copie de vos dossiers de profil utilisateur. En résumé, il s'agit d'un instantané presque complet du système que vous utilisiez avant la mise à niveau.",
            "Ce dossier joue le rôle de filet de sécurité : si quelque chose tourne vraiment mal sur la nouvelle version, vous pouvez ouvrir Paramètres, puis Système, puis Récupération, et utiliser l'option « Revenir en arrière » pour restaurer votre version précédente de Windows. Windows conserve le dossier pendant environ 10 jours après la mise à niveau, puis le supprime automatiquement. Beaucoup d'utilisateurs ne souhaitent toutefois pas patienter aussi longtemps, vu la place qu'il occupe.",
            "Un détail utile avant de supprimer quoi que ce soit : vos fichiers personnels issus de l'ancien profil restent accessibles dans C:\\Windows.old\\Users. Si vous soupçonnez que quelque chose n'a pas été repris lors de la mise à niveau, allez vérifier là en premier — une fois le dossier supprimé, cette copie disparaît avec lui.",
          ],
        },
        {
          title: "Peut-on supprimer Windows.old sans risque ?",
          content: [
            "Oui, supprimer Windows.old est parfaitement sûr tant que vous gardez deux choses à l'esprit. D'abord, cette suppression désactive définitivement l'option « Revenir en arrière » : vous perdez le retour en un clic vers votre version précédente de Windows. Ensuite, vérifiez qu'il ne reste aucun fichier personnel dont vous avez encore besoin dans l'ancien dossier Users avant de lancer l'opération.",
            "Un avertissement important : n'essayez pas de supprimer Windows.old en le sélectionnant dans l'Explorateur de fichiers pour l'envoyer à la Corbeille. La plupart des fichiers qu'il contient sont protégés par des autorisations système ; cette approche se termine par des erreurs d'accès refusé et un dossier à moitié supprimé, donc inutilisable. La bonne méthode consiste à utiliser les outils intégrés conçus précisément pour ce travail.",
            "Quand faut-il le conserver ? Si la mise à niveau ne remonte qu'à quelques jours et que vous n'êtes pas encore certain de la stabilité de la nouvelle version sur votre matériel, patientez un peu. Dès que vos pilotes, vos applications et vos périphériques fonctionnent comme prévu, vous pouvez supprimer le dossier en toute confiance.",
          ],
        },
        {
          title: "Supprimer Windows.old avec le Nettoyage de disque",
          content: [
            "La méthode classique passe par l'outil Nettoyage de disque. Ouvrez le menu Démarrer, tapez « Nettoyage de disque » (ou lancez cleanmgr depuis la fenêtre Exécuter) et démarrez l'outil. S'il vous demande de choisir un lecteur, sélectionnez C:. Dans la fenêtre qui s'ouvre, cliquez en bas sur le bouton « Nettoyer les fichiers système » — cette étape exige des droits d'administrateur et peut vous demander de sélectionner à nouveau le lecteur C:.",
            "Dans la liste actualisée, cochez « Installation(s) Windows précédente(s) ». Tant que vous y êtes, vous pouvez aussi cocher « Nettoyage des mises à jour Windows » et « Fichiers d'installation Windows temporaires » pour récupérer encore plus d'espace en une seule passe. Cliquez sur OK, puis confirmez par « Supprimer les fichiers ». Selon la taille du dossier, l'opération peut prendre plusieurs minutes.",
            "Une fois l'opération terminée, le dossier Windows.old a soit entièrement disparu, soit été réduit à un petit résidu vide. S'il reste une coquille, redémarrez le PC : dans la plupart des cas, Windows la supprime automatiquement au démarrage suivant.",
          ],
        },
        {
          title: "Retirer l'installation Windows précédente avec l'Assistant Stockage",
          content: [
            "Sous Windows 11, vous pouvez faire exactement la même chose depuis l'application Paramètres moderne. Allez dans Paramètres, puis Système, puis Stockage, et cliquez sur « Fichiers temporaires ». Après l'analyse du lecteur, Windows affiche la liste des éléments supprimables. Cochez l'entrée « Installation(s) Windows précédente(s) » et cliquez sur le bouton « Supprimer les fichiers » en haut.",
            "Les recommandations de nettoyage de cette même section Stockage placent d'ailleurs l'installation précédente tout en haut de la liste juste après une mise à niveau. Le résultat est identique à celui du Nettoyage de disque — seule l'interface est plus moderne et plus lisible. Le choix de l'un ou de l'autre relève purement de la préférence personnelle.",
            "Un conseil bonus : si vous laissez l'Assistant Stockage activé, Windows efface automatiquement les fichiers temporaires selon une planification. Cela évite également que les fichiers d'installation résiduels des futures mises à jour ne restent des mois sur votre disque sans que vous le remarquiez.",
          ],
        },
        {
          title: "Que faire quand Windows.old refuse de se supprimer",
          content: [
            "Il arrive qu'une partie de Windows.old survive même au Nettoyage de disque, ou que la suppression s'arrête sur une erreur d'autorisation. Les causes les plus fréquentes sont une mise à jour en attente qui utilise encore des fichiers du dossier, et une propriété des fichiers détenue par des comptes système comme TrustedInstaller. Commencez par redémarrer le PC, laissez les mises à jour en attente se terminer, puis relancez le Nettoyage de disque.",
            "Si un résidu s'obstine, la ligne de commande viendra à bout du travail. Cherchez l'Invite de commandes dans le menu Démarrer, choisissez « Exécuter en tant qu'administrateur » et saisissez trois commandes dans l'ordre : prenez d'abord possession du dossier avec takeown /F C:\\Windows.old /R /A /D Y, accordez ensuite le contrôle total aux administrateurs avec icacls C:\\Windows.old /grant Administrators:F /T, puis supprimez-le avec rd /S /Q C:\\Windows.old. La dernière commande est immédiate et irréversible : vérifiez deux fois le chemin avant d'appuyer sur Entrée.",
            "Une fois la suppression effectuée, vous voudrez sans doute vérifier que l'espace est réellement revenu. L'analyse de disque (Disk Analysis) de Disk Mop scanne votre lecteur C: et l'affiche sous forme de treemap visuelle : en quelques secondes, vous confirmez que Windows.old a bien disparu et vous voyez exactement où part l'espace restant.",
          ],
        },
        {
          title: "Combien d'espace vous récupérez — et ce qui se cache encore",
          content: [
            "La taille de Windows.old oscille généralement entre environ 10 Go et 30 Go selon le niveau de remplissage de votre ancienne installation, et grimpe encore plus haut sur certains systèmes. Mais ce n'est pas la seule chose qu'une mise à niveau laisse derrière elle : les dossiers cachés $WINDOWS.~BT et $WINDOWS.~WS à la racine de C:, les résidus de Windows Update, les anciens paquets de pilotes et le cache d'optimisation de la distribution consomment eux aussi de l'espace en silence.",
            "Traquer ces restes cachés à la main est fastidieux. L'analyse de disque de Disk Mop cartographie visuellement l'ensemble du lecteur et met immédiatement en évidence les dossiers qui dévorent le plus d'espace. Son détecteur de gros fichiers (Large File Finder) repère automatiquement les fichiers de plus de 500 Mo — supports d'installation Windows oubliés ou vieilles archives de téléchargement, par exemple.",
            "Nettoyer ces résidus après chaque mise à jour majeure compte pour la santé de votre lecteur C: sur le long terme. En règle générale, visez au moins 15 à 20 % d'espace libre sur le disque système : les mises à jour se téléchargent alors sans accroc et la mémoire virtuelle dispose de la marge nécessaire pour travailler.",
          ],
        },
        {
          title: "Gardez votre lecteur C: allégé après chaque mise à niveau",
          content: [
            "Les mises à jour de fonctionnalités de Windows continueront d'arriver à un rythme régulier, et chacune des plus importantes crée un nouveau dossier Windows.old accompagné d'une série de fichiers temporaires. C'est pourquoi installer une habitude d'entretien régulière vaut bien mieux qu'un grand nettoyage héroïque à chaque fois que le disque sature.",
            "Disk Mop rend cette routine indolore : la fonction Speed Up efface les anciens téléchargements, le cache système, le cache des navigateurs et la Corbeille en un seul clic. Avec le nettoyage planifié (Scheduled Cleanup), vous mettez en place des tâches d'entretien automatiques hebdomadaires ou mensuelles, et le score de santé système (System Health Score) vous donne d'un coup d'œil l'état de votre disque.",
            "La meilleure approche combine les deux mondes : utilisez les outils intégrés de Windows pour les dossiers système protégés comme Windows.old, et confiez tout le reste — caches, téléchargements, doublons et gros fichiers oubliés — à une routine Disk Mop régulière.",
          ],
        },
      ],
      verdict: [
        "Supprimer le dossier Windows.old est sûr et judicieux dès l'instant où vous êtes certain de ne pas revenir en arrière. Le Nettoyage de disque ou les options de stockage des Paramètres se chargent de l'essentiel, et pour les résidus tenaces, la voie en ligne de commande avec takeown, icacls et rd reste toujours disponible. Cette seule étape peut libérer des dizaines de gigaoctets sur votre lecteur C:.",
        "Pour retrouver tout ce que la mise à niveau a laissé derrière elle — et garder votre disque allégé sur la durée — Disk Mop est un compagnon pratique. L'analyse de disque, le détecteur de gros fichiers, le nettoyeur de cache (Cache Cleaner) et le nettoyage planifié sont tous inclus dans une licence à vie payée une seule fois, 19,90 $, sans le moindre abonnement.",
      ],
      ctaText: "Récupérez des gigaoctets sur votre lecteur C: avec Disk Mop",
    },
    es: {
      title: "Cómo eliminar la carpeta Windows.old de forma segura (Windows 11)",
      metaDescription:
        "Elimina la carpeta Windows.old con el Liberador de espacio en disco o el Sensor de almacenamiento, soluciona si no se borra y recupera gigas en la unidad C:.",
      subtitle: "La guía paso a paso para quitar sin riesgos tu instalación anterior de Windows",
      intro: [
        "Respuesta corta: sí, eliminar la carpeta Windows.old es seguro, siempre que no pienses volver a tu versión anterior de Windows. La carpeta aparece después de una actualización a Windows 11 o de una gran actualización de características, contiene una copia completa de tu instalación antigua y a menudo ocupa bastante más de 10 GB en la unidad C:. Las formas más seguras de quitarla son el Liberador de espacio en disco integrado en Windows y las opciones de almacenamiento de Configuración.",
        "En esta guía explicamos primero qué es Windows.old y por qué existe, y después recorremos paso a paso las dos vías de eliminación: el Liberador de espacio en disco y el Sensor de almacenamiento. También encontrarás la solución por línea de comandos para ese caso testarudo en el que Windows.old no se borra hagas lo que hagas.",
        "Por último, veremos qué otros archivos ocultos deja atrás una actualización y cómo mantener ligera tu unidad C: después de cada gran actualización.",
      ],
      sections: [
        {
          title: "Qué es la carpeta Windows.old y por qué existe",
          content: [
            "Cuando actualizas de Windows 10 a Windows 11, o instalas una gran actualización de características, el programa de instalación de Windows traslada toda tu instalación anterior a C:\\Windows.old. Dentro encontrarás los archivos de sistema del Windows antiguo, las carpetas de Program Files previas y una copia de las carpetas de tu perfil de usuario. En resumen, es una instantánea casi completa del sistema que usabas antes de actualizar.",
            "La carpeta existe como red de seguridad: si algo falla de verdad en la nueva versión, puedes ir a Configuración, luego a Sistema y después a Recuperación, y usar la opción «Volver» para restaurar tu versión anterior de Windows. Windows conserva la carpeta unos 10 días después de la actualización y luego la elimina automáticamente. Muchos usuarios, sin embargo, no quieren esperar tanto por el espacio que ocupa.",
            "Un detalle útil antes de borrar nada: tus archivos personales del perfil de usuario antiguo siguen accesibles en C:\\Windows.old\\Users. Si sospechas que algo no se trasladó durante la actualización, mira ahí primero: cuando la carpeta desaparezca, esa copia se irá con ella.",
          ],
        },
        {
          title: "¿Es seguro eliminar Windows.old?",
          content: [
            "Sí, eliminar Windows.old es totalmente seguro siempre que tengas presentes dos cosas. La primera: al quitarla se desactiva de forma permanente la opción «Volver», así que pierdes el camino de un clic hacia tu versión anterior de Windows. La segunda: conviene confirmar que dentro de la carpeta Users antigua no queda ningún archivo personal que aún necesites.",
            "Un aviso importante: no intentes eliminar Windows.old seleccionándola en el Explorador de archivos y enviándola a la Papelera de reciclaje. La mayoría de los archivos que contiene están protegidos por permisos del sistema, así que ese camino termina en errores de acceso denegado y en una carpeta medio borrada e inservible. Lo correcto es usar las herramientas integradas pensadas justo para esta tarea.",
            "¿Cuándo conviene conservarla? Si actualizaste hace solo unos días y todavía no estás seguro de que la nueva versión sea estable en tu hardware, espera un poco más. En cuanto los controladores, las aplicaciones y los periféricos funcionen como esperabas, puedes eliminar la carpeta con total confianza.",
          ],
        },
        {
          title: "Eliminar Windows.old con el Liberador de espacio en disco",
          content: [
            "El método clásico es el Liberador de espacio en disco. Abre el menú Inicio, escribe «Liberador de espacio en disco» (o ejecuta cleanmgr desde el cuadro Ejecutar) e inícialo. Si te pide elegir una unidad, selecciona C:. En la ventana que se abre, haz clic abajo en el botón «Limpiar archivos de sistema»: este paso requiere permisos de administrador y puede pedirte que vuelvas a seleccionar la unidad C:.",
            "En la lista actualizada, marca «Instalaciones anteriores de Windows». Ya que estás, puedes marcar también «Limpieza de Windows Update» y «Archivos temporales de instalación de Windows» para recuperar aún más espacio en la misma pasada. Pulsa Aceptar y confirma con «Eliminar archivos». Según el tamaño de la carpeta, el proceso puede tardar varios minutos.",
            "Al terminar, la carpeta Windows.old habrá desaparecido por completo o quedará reducida a un pequeño resto vacío. Si queda ese resto, reinicia el equipo: en la mayoría de los casos Windows lo limpia solo en el siguiente arranque.",
          ],
        },
        {
          title: "Quitar la instalación anterior de Windows con el Sensor de almacenamiento",
          content: [
            "En Windows 11 puedes hacer lo mismo desde la aplicación Configuración moderna. Ve a Configuración, luego a Sistema y después a Almacenamiento, y haz clic en «Archivos temporales». Cuando Windows termine de analizar la unidad, mostrará una lista de elementos que se pueden eliminar. Marca la entrada «Instalaciones anteriores de Windows» y pulsa el botón «Quitar archivos» de la parte superior.",
            "Las recomendaciones de limpieza de esa misma sección de Almacenamiento también suelen colocar la instalación anterior en los primeros puestos justo después de una actualización. El resultado es idéntico al del Liberador de espacio en disco; solo cambia la interfaz, más moderna y fácil de leer. Cuál de las dos uses es puramente cuestión de preferencia.",
            "Un consejo extra: si dejas activado el Sensor de almacenamiento, Windows borrará los archivos temporales automáticamente según una programación. Eso también evita que los archivos de instalación sobrantes de futuras actualizaciones se queden meses en tu unidad sin que nadie lo note.",
          ],
        },
        {
          title: "Qué hacer cuando Windows.old no se elimina",
          content: [
            "A veces parte de Windows.old sobrevive incluso al Liberador de espacio en disco, o el borrado se detiene con un error de permisos. Las causas más habituales son una actualización pendiente que todavía usa archivos de la carpeta y la propiedad de esos archivos en manos de cuentas del sistema como TrustedInstaller. Como primer paso, reinicia el equipo, deja que terminen las actualizaciones pendientes y vuelve a ejecutar el Liberador de espacio en disco.",
            "Si el resto sigue resistiéndose, la línea de comandos termina el trabajo. Busca el Símbolo del sistema en el menú Inicio, elige «Ejecutar como administrador» e introduce tres comandos en orden: primero toma posesión de la carpeta con takeown /F C:\\Windows.old /R /A /D Y, luego concede control total a los administradores con icacls C:\\Windows.old /grant Administrators:F /T y, por último, elimínala con rd /S /Q C:\\Windows.old. El último comando es inmediato e irreversible, así que revisa dos veces la ruta antes de pulsar Intro.",
            "Cuando el borrado se complete, quizá quieras comprobar que el espacio ha vuelto de verdad. El análisis de disco (Disk Analysis) de Disk Mop escanea tu unidad C: y la representa en un treemap visual: en segundos confirmas que Windows.old ya no está y ves exactamente adónde va el espacio restante.",
          ],
        },
        {
          title: "Cuánto espacio recuperas y qué más está escondido",
          content: [
            "El tamaño de Windows.old suele moverse entre unos 10 GB y 30 GB, según lo llena que estuviera tu instalación antigua, y en algunos equipos llega a ser mayor. Pero no es lo único que deja atrás una actualización: las carpetas ocultas $WINDOWS.~BT y $WINDOWS.~WS en la raíz de C:, los restos de Windows Update, los paquetes de controladores antiguos y la caché de optimización de distribución también consumen espacio en silencio.",
            "Rastrear a mano esos restos ocultos es tedioso. El análisis de disco de Disk Mop cartografía toda la unidad de forma visual y destaca al instante las carpetas que más espacio devoran. Su buscador de archivos grandes (Large File Finder) detecta automáticamente los archivos de más de 500 MB, como medios de instalación de Windows olvidados o viejos archivos descargados.",
            "Limpiar estos residuos después de cada gran actualización importa para la salud a largo plazo de tu unidad C:. Como regla general, procura mantener libre al menos entre el 15 y el 20 % de la unidad del sistema para que las actualizaciones se descarguen sin tropiezos y la memoria virtual tenga margen para trabajar.",
          ],
        },
        {
          title: "Mantén ligera tu unidad C: después de cada actualización",
          content: [
            "Las actualizaciones de características de Windows seguirán llegando con regularidad, y cada una de las grandes crea una carpeta Windows.old nueva junto con un lote de archivos temporales. Por eso crear un hábito de mantenimiento periódico funciona mucho mejor que lanzarse a una limpieza heroica cada vez que la unidad se llena.",
            "Disk Mop hace que esa rutina no cueste nada: la función Speed Up limpia descargas antiguas, caché del sistema, caché del navegador y la Papelera de reciclaje con un solo clic. Con la limpieza programada (Scheduled Cleanup) puedes crear tareas de mantenimiento automáticas semanales o mensuales, y la puntuación de salud del sistema (System Health Score) te muestra de un vistazo cómo está tu disco.",
            "El mejor enfoque combina ambos mundos: usa las herramientas integradas de Windows para carpetas de sistema protegidas como Windows.old y deja que una rutina periódica de Disk Mop se ocupe de todo lo demás: cachés, descargas, duplicados y archivos grandes olvidados.",
          ],
        },
      ],
      verdict: [
        "Eliminar la carpeta Windows.old es seguro y sensato en cuanto tengas claro que no vas a volver atrás. El Liberador de espacio en disco o las opciones de almacenamiento de Configuración hacen casi todo el trabajo y, para los restos testarudos, la ruta por línea de comandos con takeown, icacls y rd está siempre disponible. Ese único paso puede liberar decenas de gigabytes en tu unidad C:.",
        "Para encontrar todo lo demás que dejó la actualización, y mantener el disco ligero a largo plazo, Disk Mop es un acompañante práctico. El análisis de disco, el buscador de archivos grandes, el limpiador de caché (Cache Cleaner) y la limpieza programada están incluidos en una licencia de por vida de pago único de 19,90 $, sin ninguna suscripción.",
      ],
      ctaText: "Recupera gigabytes en tu unidad C: con Disk Mop",
    },
    it: {
      title: "Come eliminare la cartella Windows.old in sicurezza (Windows 11)",
      metaDescription:
        "Elimina la cartella Windows.old in sicurezza con Pulizia disco o Sensore memoria, risolvi quando non si cancella e recupera gigabyte sull'unità C: del PC.",
      subtitle: "La guida passo passo per rimuovere senza rischi l'installazione precedente di Windows",
      intro: [
        "Risposta breve: sì, eliminare la cartella Windows.old è sicuro, a patto che tu non abbia intenzione di tornare alla versione precedente di Windows. La cartella compare dopo un aggiornamento a Windows 11 o dopo un aggiornamento delle funzionalità importante, contiene una copia completa della vecchia installazione e spesso occupa ben oltre 10 GB sull'unità C:. I modi più sicuri per rimuoverla sono lo strumento Pulizia disco integrato in Windows e le opzioni di archiviazione nelle Impostazioni.",
        "In questa guida spieghiamo prima che cos'è Windows.old e perché esiste, poi percorriamo passo passo entrambe le strade per la rimozione: Pulizia disco e Sensore memoria. Troverai anche la soluzione da riga di comando per il caso ostinato in cui Windows.old non si cancella qualunque cosa tu provi.",
        "Infine vedremo quali altri file nascosti lascia dietro di sé un aggiornamento e come mantenere leggera l'unità C: dopo ogni aggiornamento importante.",
      ],
      sections: [
        {
          title: "Che cos'è la cartella Windows.old e perché esiste",
          content: [
            "Quando passi da Windows 10 a Windows 11, o installi un aggiornamento delle funzionalità importante, il programma di installazione di Windows sposta l'intera installazione precedente in C:\\Windows.old. Al suo interno trovi i vecchi file di sistema di Windows, le precedenti cartelle Program Files e una copia delle cartelle del tuo profilo utente. In breve, è un'istantanea quasi completa del sistema che usavi prima dell'aggiornamento.",
            "La cartella esiste come rete di sicurezza: se sulla nuova versione qualcosa va davvero storto, puoi aprire Impostazioni, poi Sistema, quindi Ripristino, e usare l'opzione «Torna indietro» per ripristinare la versione precedente di Windows. Windows conserva la cartella per circa 10 giorni dopo l'aggiornamento e poi la rimuove automaticamente. Molti utenti, però, non vogliono aspettare tanto vista la quantità di spazio che occupa.",
            "Un dettaglio utile prima di cancellare qualsiasi cosa: i file personali del vecchio profilo utente restano accessibili in C:\\Windows.old\\Users. Se sospetti che qualcosa non sia stato trasferito durante l'aggiornamento, controlla prima lì: una volta sparita la cartella, sparisce anche quella copia.",
          ],
        },
        {
          title: "È sicuro eliminare Windows.old?",
          content: [
            "Sì, eliminare Windows.old è del tutto sicuro se tieni a mente due cose. La prima: rimuoverla disattiva in modo permanente l'opzione «Torna indietro», quindi perdi la strada rapida per tornare alla versione precedente di Windows. La seconda: prima di procedere verifica che nella vecchia cartella Users non siano rimasti file personali che ti servono ancora.",
            "Un avviso importante: non provare a eliminare Windows.old selezionandola in Esplora file e spostandola nel Cestino. La maggior parte dei file al suo interno è protetta dalle autorizzazioni di sistema, quindi quella strada finisce con errori di accesso negato e con una cartella cancellata a metà e ormai inservibile. Il modo corretto è usare gli strumenti integrati pensati esattamente per questo lavoro.",
            "Quando conviene tenerla? Se l'aggiornamento risale a pochi giorni fa e non sei ancora certo che la nuova versione sia stabile sul tuo hardware, aspetta ancora un po'. Non appena driver, applicazioni e periferiche funzionano come previsto, puoi rimuovere la cartella con tranquillità.",
          ],
        },
        {
          title: "Eliminare Windows.old con Pulizia disco",
          content: [
            "Il metodo classico è lo strumento Pulizia disco. Apri il menu Start, digita «Pulizia disco» (oppure esegui cleanmgr dalla finestra Esegui) e avvialo. Se ti viene chiesto di scegliere un'unità, seleziona C:. Nella finestra che si apre, fai clic in basso sul pulsante «Pulizia file di sistema»: questo passaggio richiede i diritti di amministratore e potrebbe chiederti di selezionare di nuovo l'unità C:.",
            "Nell'elenco aggiornato, spunta «Installazioni precedenti di Windows». Già che ci sei, puoi selezionare anche «Pulizia di Windows Update» e «File temporanei di installazione di Windows» per recuperare ancora più spazio nello stesso passaggio. Fai clic su OK e conferma con «Elimina file». A seconda delle dimensioni della cartella, l'operazione può richiedere diversi minuti.",
            "Al termine, la cartella Windows.old è sparita del tutto oppure si è ridotta a un piccolo residuo vuoto. Se resta un guscio, riavvia il PC: nella maggior parte dei casi Windows lo elimina da solo al riavvio successivo.",
          ],
        },
        {
          title: "Rimuovere l'installazione precedente di Windows con Sensore memoria",
          content: [
            "Su Windows 11 puoi fare lo stesso lavoro dalla moderna app Impostazioni. Vai su Impostazioni, poi Sistema, quindi Archiviazione, e fai clic su «File temporanei». Dopo la scansione dell'unità, Windows mostra l'elenco degli elementi rimovibili. Spunta la voce «Installazioni precedenti di Windows» e premi il pulsante «Rimuovi file» in alto.",
            "Anche i consigli per la pulizia nella stessa sezione Archiviazione mettono di solito l'installazione precedente ai primi posti subito dopo un aggiornamento. Il risultato è identico a quello di Pulizia disco: cambia solo l'interfaccia, più moderna e più leggibile. Quale usare è puramente una questione di preferenze.",
            "Un consiglio in più: se lasci attivo Sensore memoria, Windows cancella automaticamente i file temporanei secondo una pianificazione. Così eviti anche che i file di installazione avanzati dai futuri aggiornamenti restino mesi sull'unità senza che nessuno se ne accorga.",
          ],
        },
        {
          title: "Cosa fare quando Windows.old non si elimina",
          content: [
            "A volte una parte di Windows.old sopravvive persino a Pulizia disco, oppure la cancellazione si ferma con un errore di autorizzazioni. Le cause più comuni sono un aggiornamento in sospeso che sta ancora usando i file della cartella e la proprietà dei file in mano ad account di sistema come TrustedInstaller. Come primo passo riavvia il PC, lascia completare gli aggiornamenti in sospeso ed esegui di nuovo Pulizia disco.",
            "Se il residuo continua a resistere, ci pensa la riga di comando. Cerca il Prompt dei comandi nel menu Start, scegli «Esegui come amministratore» e inserisci tre comandi in ordine: prima prendi possesso della cartella con takeown /F C:\\Windows.old /R /A /D Y, poi concedi il controllo completo agli amministratori con icacls C:\\Windows.old /grant Administrators:F /T e infine eliminala con rd /S /Q C:\\Windows.old. L'ultimo comando è immediato e irreversibile, quindi ricontrolla il percorso prima di premere Invio.",
            "Una volta completata la cancellazione, ti verrà voglia di verificare che lo spazio sia davvero tornato. L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità C: e la rappresenta in una treemap visiva: in pochi secondi confermi che Windows.old è sparita davvero e vedi esattamente dove finisce lo spazio rimanente.",
          ],
        },
        {
          title: "Quanto spazio recuperi e cos'altro si nasconde",
          content: [
            "Le dimensioni di Windows.old si aggirano di solito tra circa 10 GB e 30 GB, a seconda di quanto fosse piena la vecchia installazione, e su alcuni sistemi salgono ancora. Ma non è l'unica cosa che un aggiornamento lascia indietro: le cartelle nascoste $WINDOWS.~BT e $WINDOWS.~WS nella radice di C:, i residui di Windows Update, i vecchi pacchetti di driver e la cache di ottimizzazione recapito occupano spazio anch'essi, in silenzio.",
            "Stanare a mano questi residui nascosti è noioso. L'analisi del disco di Disk Mop mappa visivamente l'intera unità e mette subito in evidenza le cartelle che divorano più spazio. Il suo cercatore di file di grandi dimensioni (Large File Finder) individua automaticamente i file oltre 500 MB, come supporti di installazione di Windows dimenticati o vecchi archivi scaricati.",
            "Ripulire questi residui dopo ogni aggiornamento importante conta per la salute a lungo termine dell'unità C:. Come regola generale, punta a lasciare libero almeno il 15-20 % dell'unità di sistema, così gli aggiornamenti si scaricano senza intoppi e la memoria virtuale ha spazio per lavorare.",
          ],
        },
        {
          title: "Mantieni leggera l'unità C: dopo ogni aggiornamento",
          content: [
            "Gli aggiornamenti delle funzionalità di Windows continueranno ad arrivare con cadenza regolare, e ognuno di quelli importanti crea una nuova cartella Windows.old insieme a una serie di file temporanei. Per questo costruire un'abitudine di manutenzione regolare funziona molto meglio di una pulizia eroica ogni volta che l'unità si riempie.",
            "Disk Mop rende questa routine indolore: la funzione Speed Up ripulisce vecchi download, cache di sistema, cache dei browser e Cestino con un solo clic. Con la pulizia programmata (Scheduled Cleanup) puoi impostare attività di manutenzione automatiche settimanali o mensili, e il punteggio di salute del sistema (System Health Score) ti mostra a colpo d'occhio come sta il disco.",
            "L'approccio migliore unisce i due mondi: usa gli strumenti integrati di Windows per le cartelle di sistema protette come Windows.old e lascia che una routine periodica di Disk Mop si occupi di tutto il resto, dalle cache ai download, dai duplicati ai grandi file dimenticati.",
          ],
        },
      ],
      verdict: [
        "Eliminare la cartella Windows.old è sicuro e sensato non appena hai la certezza di non voler tornare indietro. Pulizia disco o le opzioni di archiviazione nelle Impostazioni fanno quasi tutto il lavoro e, per i residui ostinati, la strada da riga di comando con takeown, icacls e rd resta sempre disponibile. Già solo questo passaggio può liberare decine di gigabyte sull'unità C:.",
        "Per trovare tutto il resto che l'aggiornamento ha lasciato indietro, e per mantenere il disco leggero nel tempo, Disk Mop è un compagno pratico. L'analisi del disco, il cercatore di file di grandi dimensioni, il pulitore della cache (Cache Cleaner) e la pulizia programmata sono tutti inclusi in una licenza a vita da pagare una volta sola, 19,90 $, senza alcun abbonamento.",
      ],
      ctaText: "Recupera gigabyte sull'unità C: con Disk Mop",
    },
    pt: {
      title: "Como excluir a pasta Windows.old com segurança (Windows 11)",
      metaDescription:
        "Exclua a pasta Windows.old com segurança pela Limpeza de Disco ou pelo Sensor de Armazenamento, resolva quando ela não some e recupere gigabytes no disco C:.",
      subtitle: "O guia passo a passo para remover sem risco a instalação anterior do Windows",
      intro: [
        "Resposta curta: sim, excluir a pasta Windows.old é seguro, desde que você não pretenda voltar para a versão anterior do Windows. A pasta aparece depois de uma atualização para o Windows 11 ou de uma grande atualização de recursos, guarda uma cópia completa da instalação antiga e costuma ocupar bem mais de 10 GB na unidade C:. As formas mais seguras de removê-la são a ferramenta Limpeza de Disco, nativa do Windows, e as opções de armazenamento em Configurações.",
        "Neste guia explicamos primeiro o que é a Windows.old e por que ela existe, e depois mostramos os dois caminhos de remoção passo a passo: a Limpeza de Disco e o Sensor de Armazenamento. Você também encontra a solução por linha de comando para aquele caso teimoso em que a Windows.old não é excluída de jeito nenhum.",
        "Por fim, vamos ver quais outros arquivos ocultos uma atualização deixa para trás e como manter a unidade C: enxuta depois de cada atualização importante.",
      ],
      sections: [
        {
          title: "O que é a pasta Windows.old e por que ela existe",
          content: [
            "Quando você atualiza do Windows 10 para o Windows 11, ou instala uma grande atualização de recursos, o instalador do Windows move toda a instalação anterior para C:\\Windows.old. Lá dentro estão os arquivos de sistema do Windows antigo, as pastas Program Files anteriores e uma cópia das pastas do seu perfil de usuário. Em resumo, é um retrato quase completo do sistema que você usava antes da atualização.",
            "A pasta existe como rede de segurança: se algo der muito errado na nova versão, você pode ir em Configurações, depois Sistema e então Recuperação, e usar a opção “Voltar” para restaurar a versão anterior do Windows. O Windows mantém a pasta por cerca de 10 dias após a atualização e depois a remove automaticamente. Só que muita gente não quer esperar tudo isso, dado o tanto de espaço que ela ocupa.",
            "Um detalhe útil antes de apagar qualquer coisa: os seus arquivos pessoais do perfil antigo continuam acessíveis em C:\\Windows.old\\Users. Se você desconfia que algo não veio junto na atualização, olhe ali primeiro — quando a pasta some, essa cópia some junto.",
          ],
        },
        {
          title: "É seguro excluir a Windows.old?",
          content: [
            "Sim, excluir a Windows.old é totalmente seguro desde que você tenha duas coisas em mente. A primeira: remover a pasta desativa em definitivo a opção “Voltar”, então você perde o caminho de um clique de volta para a versão anterior do Windows. A segunda: confirme que não sobrou nenhum arquivo pessoal de que você ainda precisa dentro da antiga pasta Users antes de apagar.",
            "Um aviso importante: não tente excluir a Windows.old selecionando a pasta no Explorador de Arquivos e mandando para a Lixeira. A maior parte dos arquivos ali dentro é protegida por permissões do sistema, então esse caminho termina em erros de acesso negado e em uma pasta pela metade, quebrada. O jeito certo é usar as ferramentas nativas feitas exatamente para essa tarefa.",
            "Quando vale a pena manter a pasta? Se a atualização foi há poucos dias e você ainda não tem certeza de que a nova versão está estável no seu hardware, espere mais um pouco. Assim que drivers, aplicativos e periféricos estiverem funcionando como esperado, dá para remover a pasta com tranquilidade.",
          ],
        },
        {
          title: "Excluir a Windows.old pela Limpeza de Disco",
          content: [
            "O método clássico é a ferramenta Limpeza de Disco. Abra o menu Iniciar, digite “Limpeza de Disco” (ou execute cleanmgr pela janela Executar) e abra a ferramenta. Se ela pedir para escolher uma unidade, selecione C:. Na janela que aparece, clique no botão “Limpar arquivos do sistema”, lá embaixo: esse passo exige direitos de administrador e pode pedir que você selecione a unidade C: de novo.",
            "Na lista atualizada, marque “Instalações anteriores do Windows”. Já que você está ali, também dá para marcar “Limpeza do Windows Update” e “Arquivos temporários de instalação do Windows” e recuperar ainda mais espaço na mesma passada. Clique em OK e confirme em “Excluir Arquivos”. Dependendo do tamanho da pasta, o processo pode levar vários minutos.",
            "Quando terminar, a pasta Windows.old ou some de vez ou fica reduzida a um pequeno resto vazio. Se sobrar essa casca, reinicie o computador: na maioria dos casos o Windows a limpa sozinho na próxima inicialização.",
          ],
        },
        {
          title: "Remover a instalação anterior do Windows com o Sensor de Armazenamento",
          content: [
            "No Windows 11 dá para fazer o mesmo trabalho pelo aplicativo Configurações moderno. Vá em Configurações, depois Sistema e então Armazenamento, e clique em “Arquivos temporários”. Depois de examinar a unidade, o Windows mostra a lista de itens que podem ser removidos. Marque “Instalações anteriores do Windows” e clique no botão “Remover arquivos”, no topo.",
            "As recomendações de limpeza dessa mesma seção de Armazenamento também costumam colocar a instalação anterior bem no topo logo depois de uma atualização. O resultado é idêntico ao da Limpeza de Disco: só a interface é mais moderna e mais fácil de ler. Qual das duas usar é pura questão de preferência.",
            "Uma dica extra: se você deixar o Sensor de Armazenamento ligado, o Windows apaga arquivos temporários automaticamente, seguindo uma programação. Isso também evita que as sobras de instalação das próximas atualizações fiquem meses no disco sem ninguém perceber.",
          ],
        },
        {
          title: "O que fazer quando a Windows.old não é excluída",
          content: [
            "Às vezes parte da Windows.old sobrevive até à Limpeza de Disco, ou a exclusão para com um erro de permissão. As causas mais comuns são uma atualização pendente que ainda está usando arquivos da pasta e a propriedade dos arquivos nas mãos de contas do sistema como o TrustedInstaller. Como primeiro passo, reinicie o computador, deixe as atualizações pendentes terminarem e rode a Limpeza de Disco de novo.",
            "Se o resto continuar resistindo, a linha de comando resolve. Procure o Prompt de Comando no menu Iniciar, escolha “Executar como administrador” e digite três comandos em ordem: primeiro assuma a propriedade da pasta com takeown /F C:\\Windows.old /R /A /D Y, depois conceda controle total aos administradores com icacls C:\\Windows.old /grant Administrators:F /T e, por fim, apague tudo com rd /S /Q C:\\Windows.old. O último comando é imediato e irreversível, então confira o caminho duas vezes antes de apertar Enter.",
            "Depois que a exclusão passar, você provavelmente vai querer conferir se o espaço voltou mesmo. A análise de disco (Disk Analysis) do Disk Mop varre a unidade C: e a desenha em um treemap visual: em segundos você confirma que a Windows.old realmente sumiu e vê exatamente para onde está indo o espaço restante.",
          ],
        },
        {
          title: "Quanto espaço você recupera e o que mais está escondido",
          content: [
            "O tamanho da Windows.old costuma ficar entre cerca de 10 GB e 30 GB, dependendo de quão cheia estava a instalação antiga, e em alguns computadores passa disso. Mas ela não é a única coisa que uma atualização deixa para trás: as pastas ocultas $WINDOWS.~BT e $WINDOWS.~WS na raiz do C:, sobras do Windows Update, pacotes de drivers antigos e o cache de otimização de entrega também consomem espaço em silêncio.",
            "Caçar essas sobras escondidas na mão é cansativo. A análise de disco do Disk Mop mapeia a unidade inteira de forma visual e destaca na hora as pastas que mais devoram espaço. O localizador de arquivos grandes (Large File Finder) detecta automaticamente arquivos acima de 500 MB, como mídias de instalação do Windows esquecidas ou downloads antigos.",
            "Limpar esses resíduos depois de cada atualização importante faz diferença na saúde da unidade C: no longo prazo. Como regra geral, procure deixar pelo menos 15 a 20 % do disco do sistema livre, para que as atualizações baixem sem tropeços e a memória virtual tenha espaço para trabalhar.",
          ],
        },
        {
          title: "Mantenha a unidade C: enxuta depois de cada atualização",
          content: [
            "As atualizações de recursos do Windows vão continuar chegando com regularidade, e cada uma das grandes cria uma pasta Windows.old nova junto com um lote de arquivos temporários. Por isso, criar um hábito de manutenção periódica funciona muito melhor do que partir para uma faxina heroica toda vez que o disco enche.",
            "O Disk Mop deixa essa rotina sem esforço: o recurso Speed Up limpa downloads antigos, cache do sistema, cache do navegador e a Lixeira em um único clique. Com a limpeza agendada (Scheduled Cleanup) você monta tarefas de manutenção automáticas semanais ou mensais, e a pontuação de saúde do sistema (System Health Score) mostra num relance como está o seu disco.",
            "A melhor abordagem junta os dois mundos: use as ferramentas nativas do Windows para pastas de sistema protegidas como a Windows.old e deixe uma rotina periódica do Disk Mop cuidar de todo o resto — caches, downloads, duplicados e arquivos grandes esquecidos.",
          ],
        },
      ],
      verdict: [
        "Excluir a pasta Windows.old é seguro e faz sentido assim que você tem certeza de que não vai voltar atrás. A Limpeza de Disco ou as opções de armazenamento em Configurações resolvem a maior parte, e para as sobras teimosas o caminho da linha de comando com takeown, icacls e rd está sempre disponível. Só esse passo já pode liberar dezenas de gigabytes na unidade C:.",
        "Para encontrar tudo o mais que a atualização deixou para trás e manter o disco enxuto no longo prazo, o Disk Mop é um companheiro prático. A análise de disco, o localizador de arquivos grandes, o limpador de cache (Cache Cleaner) e a limpeza agendada estão todos incluídos em uma licença vitalícia de pagamento único de 19,90 $, sem assinatura nenhuma.",
      ],
      ctaText: "Recupere gigabytes na unidade C: com o Disk Mop",
    },
    ja: {
      title: "Windows.oldフォルダーを安全に削除する方法（Windows 11）",
      metaDescription:
        "Windows.oldフォルダーを安全に削除する方法を解説します。ディスク クリーンアップとストレージ センサーの手順、削除できないときのコマンド、そしてCドライブで数十GBを取り戻すためのポイントまでまとめました。",
      subtitle: "以前のWindowsインストールを安全に取り除くための手順ガイド",
      intro: [
        "結論から言えば、Windows.oldフォルダーは削除しても問題ありません。ただし、以前のバージョンのWindowsに戻す予定がないことが条件です。このフォルダーはWindows 11へのアップグレードや大型の機能更新プログラムのあとに作られ、以前のインストール環境をまるごとコピーして保持しているため、Cドライブで10 GBをはるかに超える容量を占めることも珍しくありません。最も安全な削除方法は、Windowsに標準で用意されている「ディスク クリーンアップ」を使うか、「設定」の記憶域オプションから消す方法です。",
        "この記事ではまずWindows.oldとは何か、なぜ存在するのかを説明し、続いて2つの削除方法である「ディスク クリーンアップ」と「ストレージ センサー」を手順ごとに紹介します。さらに、何を試してもWindows.oldが消えてくれないという厄介なケースに向けて、コマンドラインでの対処法も取り上げます。",
        "最後に、アップグレードが残していくそのほかの隠しファイルを確認し、大型更新のたびにCドライブを軽く保つ方法をお伝えします。",
      ],
      sections: [
        {
          title: "Windows.oldフォルダーとは何か、なぜ作られるのか",
          content: [
            "Windows 10からWindows 11へアップグレードしたり、大型の機能更新プログラムをインストールしたりすると、Windowsセットアップは以前のインストール環境をまるごと C:\\Windows.old へ移動します。中には古いWindowsのシステムファイル、以前のProgram Filesフォルダー、そしてユーザープロファイルフォルダーのコピーが入っています。つまり、アップグレード前に使っていたシステムのほぼ完全なスナップショットです。",
            "このフォルダーはセーフティーネットとして用意されています。新しいバージョンで重大な不具合が起きた場合は、「設定」から「システム」、「回復」の順に進み、前のバージョンのWindowsに戻す「復元」を選べば以前の環境に戻せます。Windowsはアップグレードから約10日間このフォルダーを保持し、その後は自動的に削除します。とはいえ、占有する容量を考えると、そこまで待ちたくないという方も多いはずです。",
            "削除する前に知っておくと役立つ点があります。古いユーザープロファイルにあった個人用ファイルは、C:\\Windows.old\\Users から今も開けます。アップグレードの際に引き継がれなかったものがあるかもしれないと感じたら、まずはここを確認してください。フォルダーを削除すると、このコピーも一緒に消えてしまいます。",
          ],
        },
        {
          title: "Windows.oldは削除しても安全か",
          content: [
            "はい、2つの点さえ押さえておけば、Windows.oldの削除はまったく問題ありません。1つ目は、削除すると「復元」の選択肢が完全に無効になることです。つまり、以前のバージョンのWindowsへワンクリックで戻る道はなくなります。2つ目は、削除する前に、古いUsersフォルダーの中にまだ必要な個人用ファイルが残っていないかを確認しておくことです。",
            "重要な注意点があります。Windows.oldをエクスプローラーで選択し、「ごみ箱」へドラッグして削除しようとしないでください。中のファイルの大半はシステムのアクセス許可で保護されているため、この方法ではアクセス拒否のエラーが出て、中途半端に壊れたフォルダーが残るだけです。正しい手順は、この作業のために用意された標準ツールを使うことです。",
            "では、どんなときに残しておくべきでしょうか。アップグレードからまだ数日しか経っておらず、新しいバージョンがお使いのハードウェアで安定して動くか確信が持てない場合は、もう少し様子を見てください。ドライバー、アプリ、周辺機器がすべて期待どおりに動くようになったら、安心してフォルダーを削除できます。",
          ],
        },
        {
          title: "「ディスク クリーンアップ」でWindows.oldを削除する",
          content: [
            "定番の方法は「ディスク クリーンアップ」です。スタートメニューを開いて「ディスク クリーンアップ」と入力するか、「ファイル名を指定して実行」から cleanmgr を実行してツールを起動します。ドライブの選択を求められたらC:を選んでください。開いたウィンドウで、下部にある「システム ファイルのクリーンアップ」ボタンをクリックします。この操作には管理者権限が必要で、もう一度C:ドライブの選択を求められることがあります。",
            "更新された一覧で「以前のWindowsのインストール」にチェックを入れます。ついでに「Windows Updateのクリーンアップ」と「一時Windowsインストール ファイル」にもチェックを入れれば、同じ操作でさらに多くの容量を取り戻せます。「OK」をクリックし、「ファイルの削除」で確定してください。フォルダーの大きさによっては、完了までに数分かかることがあります。",
            "処理が終わると、Windows.oldフォルダーは完全に消えるか、中身のない小さな残骸だけが残ります。残骸が見えている場合はパソコンを再起動してください。多くの場合、次回の起動時にWindowsが自動的に片づけてくれます。",
          ],
        },
        {
          title: "「ストレージ センサー」で以前のWindowsインストールを削除する",
          content: [
            "Windows 11では、同じ作業を新しい「設定」アプリからも行えます。「設定」から「システム」、「記憶域」の順に進み、「一時ファイル」をクリックします。Windowsがドライブをスキャンすると、削除できる項目の一覧が表示されます。その中の「以前のWindowsのインストール」にチェックを入れ、上部の「ファイルの削除」ボタンをクリックしてください。",
            "同じ記憶域のセクションにあるクリーンアップの推奨項目でも、アップグレード直後は以前のインストールが上位に表示されるのが普通です。結果は「ディスク クリーンアップ」とまったく同じで、違うのは画面が新しく見やすいという点だけです。どちらを使うかは完全に好みの問題です。",
            "おまけの豆知識です。「ストレージ センサー」をオンにしたままにしておくと、Windowsはスケジュールに従って一時ファイルを自動的に削除します。今後の更新プログラムが残していくセットアップファイルが、気づかないまま何か月もドライブに居座るのを防ぐ効果もあります。",
          ],
        },
        {
          title: "Windows.oldが削除できないときの対処法",
          content: [
            "「ディスク クリーンアップ」を実行してもWindows.oldの一部が残ってしまう、あるいはアクセス許可のエラーで削除が止まってしまうことがあります。よくある原因は、保留中の更新プログラムがフォルダー内のファイルをまだ使っていること、そしてファイルの所有者がTrustedInstallerなどのシステムアカウントになっていることです。まずはパソコンを再起動し、保留中の更新を完了させてから、もう一度「ディスク クリーンアップ」を実行してください。",
            "それでも残骸が消えない場合は、コマンドラインで片をつけます。スタートメニューで「コマンド プロンプト」を探し、「管理者として実行」を選んで、3つのコマンドを順番に入力します。まず takeown /F C:\\Windows.old /R /A /D Y でフォルダーの所有権を取得し、次に icacls C:\\Windows.old /grant Administrators:F /T で管理者にフル コントロールを与え、最後に rd /S /Q C:\\Windows.old で削除します。最後のコマンドは即座に実行され、取り消しはできません。Enterキーを押す前に、パスを必ず二度確認してください。",
            "削除が完了したら、空き容量が本当に戻ったかを確かめたくなるはずです。Disk Mopのディスク分析（Disk Analysis）はCドライブをスキャンして視覚的なツリーマップに描き出すため、Windows.oldが確実に消えたことと、残りの容量が何に使われているのかを数秒で確認できます。",
          ],
        },
        {
          title: "どれくらい空くのか、ほかに何が隠れているのか",
          content: [
            "Windows.oldの容量は、以前のインストール環境の使用状況にもよりますが、おおむね10 GBから30 GB程度で、システムによってはさらに大きくなります。ただし、アップグレードが残していくのはこれだけではありません。Cドライブの直下にある隠しフォルダー $WINDOWS.~BT と $WINDOWS.~WS、Windows Updateの残骸、古いドライバーパッケージ、配信の最適化キャッシュなども、静かに容量を消費しています。",
            "こうした隠れた残骸を手作業で探し出すのは骨が折れます。Disk Mopのディスク分析はドライブ全体を視覚的にマッピングし、最も容量を食っているフォルダーを即座に浮かび上がらせます。大容量ファイル検索（Large File Finder）は、忘れられたWindowsのインストールメディアや古いダウンロードのアーカイブなど、500 MBを超えるファイルを自動的に見つけ出します。",
            "大型更新のたびにこうした残骸を片づけることは、Cドライブを長く健康に保つうえで意味があります。目安として、システムドライブには常に15〜20 %以上の空き容量を確保しておきましょう。そうすれば更新プログラムがスムーズにダウンロードでき、仮想メモリにも動作に十分な余裕が生まれます。",
          ],
        },
        {
          title: "アップグレードのたびにCドライブを軽く保つ",
          content: [
            "Windowsの機能更新プログラムはこれからも定期的に届き、大型のものが入るたびに新しいWindows.oldフォルダーと一連の一時ファイルが作られます。だからこそ、ドライブが満杯になってから大掃除に取りかかるよりも、日ごろのメンテナンスを習慣にするほうがずっと効果的です。",
            "Disk Mopはその習慣を手軽にします。高速化（Speed Up）機能は、古いダウンロード、システムキャッシュ、ブラウザーキャッシュ、ごみ箱をワンクリックでまとめて片づけます。定期クリーンアップ（Scheduled Cleanup）を使えば週次や月次の自動メンテナンスを設定でき、システム ヘルス スコア（System Health Score）ではディスクの状態をひと目で把握できます。",
            "最も良いのは、両方を組み合わせる方法です。Windows.oldのような保護されたシステムフォルダーにはWindows標準のツールを使い、キャッシュ、ダウンロード、重複ファイル、忘れられた大容量ファイルといったそれ以外のすべては、定期的なDisk Mopのルーティンに任せてしまいましょう。",
          ],
        },
      ],
      verdict: [
        "以前のバージョンに戻さないと決めたなら、Windows.oldフォルダーの削除は安全で理にかなった選択です。作業の大半は「ディスク クリーンアップ」か「設定」の記憶域オプションで片づき、しつこく残る残骸には takeown、icacls、rd を使うコマンドラインという手段がいつでも残されています。この一手だけでも、Cドライブに数十GBの空きが生まれることがあります。",
        "アップグレードが残していったそのほかのファイルを見つけ出し、ディスクを長く軽いまま保ちたいなら、Disk Mopが実用的な相棒になります。ディスク分析、大容量ファイル検索、キャッシュ クリーナー（Cache Cleaner）、定期クリーンアップはすべて、買い切りの永続ライセンス19.90ドルに含まれており、サブスクリプションは一切ありません。",
      ],
      ctaText: "Disk MopでCドライブの空き容量を取り戻す",
    },
  },
};
