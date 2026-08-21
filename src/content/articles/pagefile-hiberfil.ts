import type { Article } from '../types';

export const pagefileHiberfil: Article = {
  slug: 'delete-pagefile-sys-hiberfil-sys',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-07-17',
  readingTime: 7,
  content: {
    tr: {
      title: 'Pagefile.sys ve Hiberfil.sys Silinir mi? Güvenli Yöntemler',
      metaDescription:
        'Pagefile.sys ve hiberfil.sys silinir mi? Bu gizli sistem dosyalarının görevini ve gigabaytlarca alanı güvenle nasıl geri kazanacağınızı öğrenin.',
      subtitle: 'Windows\'un İki Dev Gizli Dosyası İçin Güvenli Alan Kazanma Rehberi',
      intro: [
        'Pagefile.sys ve hiberfil.sys silinir mi? Kısa cevap: hiberfil.sys\'i, yönetici olarak açtığınız bir terminalde powercfg -h off komutunu çalıştırarak güvenle kaldırabilirsiniz; Windows dosyayı anında siler. Pagefile.sys ise Windows\'un sanal bellek dosyasıdır ve silinmesi önerilmez; onu sistem yönetimine bırakmak en güvenli seçenektir.',
        'Bu iki dosya birçok bilgisayarda toplamda 10-20 GB\'tan fazla yer kaplar ve normal dosyalar gibi silinemez: Windows çalışırken ikisini de kilitler. Bu rehberde bu dosyaların ne işe yaradığını, hiberfil.sys\'in hazırda bekletmeyi kapatarak nasıl güvenle kaldırılacağını, pagefile.sys\'e neden dokunmamanız gerektiğini ve aynı gigabaytları çok daha az riskle nasıl geri kazanabileceğinizi adım adım anlatacağız.',
      ],
      sections: [
        {
          title: 'Pagefile.sys, Hiberfil.sys ve Swapfile.sys Nedir?',
          content: [
            'Pagefile.sys, Windows\'un sanal bellek (sayfalama) dosyasıdır ve C: sürücüsünün kök dizininde bulunur. RAM dolmaya başladığında Windows, az kullanılan bellek sayfalarını bu dosyaya taşıyarak uygulamaların çökmeden çalışmaya devam etmesini sağlar. Ayrıca sistem çöktüğünde hata ayıklama için kullanılan bellek dökümleri de bu dosya aracılığıyla yazılır.',
            'Hiberfil.sys ise hazırda bekletme (hibernation) dosyasıdır. Bilgisayarı hazırda beklettiğinizde RAM\'in içeriği bu dosyaya kaydedilir; böylece açtığınızda tüm pencereleriniz kaldığınız yerden geri gelir. Windows 10 ve 11\'deki hızlı başlangıç (Fast Startup) özelliği de kapanışta sistem oturumunu bu dosyaya yazarak açılışı hızlandırır.',
            'Swapfile.sys bu ailenin küçük üyesidir: Microsoft Store (UWP) uygulamalarının askıya alınıp devam ettirilmesi için kullanılır ve genellikle en fazla birkaç yüz megabayt yer kaplar. Üç dosya da gizli ve korumalı sistem dosyasıdır; görmek için Dosya Gezgini\'nde Klasör Seçenekleri\'ni açıp Görünüm sekmesinde \'Korumalı işletim sistemi dosyalarını gizle\' seçeneğinin işaretini kaldırmanız ve gizli öğeleri göstermeniz gerekir.',
          ],
        },
        {
          title: 'Bu Gizli Sistem Dosyaları Neden Bu Kadar Büyük?',
          content: [
            'Her iki dosyanın boyutu da doğrudan RAM miktarınıza bağlıdır. Hiberfil.sys, belleğin bir kopyasını saklamak zorunda olduğu için genellikle kurulu RAM\'in yüzde 40\'ı ile tamamı arasında bir boyuta ulaşır; 16 GB RAM\'li bir sistemde bu, tek başına 6 GB\'tan fazla alan demektir. Pagefile.sys ise sistem yönetimli modda ihtiyaca göre büyüyüp küçülür ve çoğu bilgisayarda birkaç gigabayt yer kaplar.',
            'İkisi birlikte 256 GB\'lık bir SSD\'de fark edilir bir pay alır; bu yüzden disk analizi yapan herkesin gözüne ilk takılan dosyalar genellikle bunlardır. Windows bu dosyaları keyfi olarak tutmaz: sayfalama dosyası bellek sıkışıklığına karşı güvenlik ağıdır, hazırda bekletme dosyası hem pil tasarrufu hem de hızlı açılış sağlar.',
            'Bu dosyaları Dosya Gezgini\'nden silmeyi denerseniz erişim engellendi hatası alırsınız, çünkü Windows çalışırken ikisini de kilitler. Doğru yöntem, dosyaları doğrudan silmeye çalışmak değil, aşağıdaki bölümlerde anlatıldığı gibi ilgili özelliği Windows\'un kendi araçlarıyla kapatmak veya yeniden boyutlandırmaktır.',
          ],
        },
        {
          title: 'Hazırda Bekletmeyi Kapatarak Hiberfil.sys Nasıl Silinir?',
          content: [
            'Hiberfil.sys\'i kaldırmanın tek güvenli yolu hazırda bekletmeyi kapatmaktır. Başlat düğmesine sağ tıklayın ve Windows 11\'de Terminal (Yönetici), Windows 10\'da Windows PowerShell (Yönetici) seçeneğini açın. Ardından powercfg -h off komutunu yazıp Enter\'a basın; komut hiçbir çıktı vermeden tamamlanır ve hiberfil.sys yeniden başlatma gerekmeden anında silinir.',
            'Bu değişikliğin iki bedeli vardır: güç menüsünden Hazırda Beklet seçeneği kaybolur ve hızlı başlangıç devre dışı kalır, yani soğuk açılışlar bir miktar uzayabilir. Masaüstü bilgisayarlarda bu özellikler genellikle özlenmez; dizüstü kullanıyorsanız ve pili bitmeden oturumunuzu saklamak istiyorsanız iki kez düşünün. Fikrinizi değiştirirseniz powercfg -h on komutuyla her şeyi geri açabilirsiniz.',
            'Bir orta yol da vardır: yönetici terminalinde powercfg /h /type reduced komutu, dosyayı yaklaşık yarı boyuta indirir ve hızlı başlangıcı korur; yalnızca tam hazırda bekletme özelliğinden vazgeçmiş olursunuz. Hem alan kazanmak hem de açılış hızını korumak isteyen dizüstü kullanıcıları için iyi bir uzlaşmadır.',
          ],
        },
        {
          title: 'Pagefile.sys Yeniden Boyutlandırılmalı mı, Devre Dışı mı Bırakılmalı?',
          content: [
            'Kısa tavsiyemiz: pagefile.sys\'i devre dışı bırakmayın. Bol RAM\'iniz olsa bile Windows ve birçok uygulama bir sayfalama dosyasının varlığına güvenir; dosya yokken bellek dolduğunda uygulamalar hata verip kapanabilir ve sistem çökmelerinde bellek dökümü yazılamadığı için sorun teşhisi zorlaşır. Kazanılan birkaç gigabayt, bu riskleri nadiren karşılar.',
            'Yine de boyutu görmek veya ayarlamak isterseniz: Win+R tuşlarına basıp sysdm.cpl yazın ve Enter\'a basın, Gelişmiş sekmesinde Performans altındaki Ayarlar\'a tıklayın, açılan pencerede yine Gelişmiş sekmesine geçip Sanal bellek bölümündeki Değiştir düğmesine basın. \'Tüm sürücüler için disk belleği dosyası boyutunu otomatik olarak yönet\' seçeneğinin işaretini kaldırdığınızda özel bir boyut belirleyebilir veya dosyayı başka bir sürücüye taşıyabilirsiniz; değişiklikler yeniden başlatma gerektirir.',
            'Sistem sürücünüz doluysa, sabit ve makul bir özel boyut belirlemek ya da sayfalama dosyasını ikinci bir diske taşımak, \'Disk belleği dosyası yok\' seçeneğinden çok daha güvenlidir. Özel bir nedeniniz yoksa en doğru ayar, çoğu kullanıcı için varsayılan olan sistem yönetimli boyuttur.',
          ],
        },
        {
          title: 'Gigabaytlarca Alanı Geri Kazanmanın Daha Güvenli Yolları',
          content: [
            'Sanal belleği kısmadan önce asıl birikintiye bakın: geçici dosyalar, tarayıcı önbellekleri, aylardır duran indirmeler ve dolu geri dönüşüm kutusu çoğu bilgisayarda hiberfil.sys kadar yer tutar. Windows\'un yerleşik araçları da yardımcı olur: Ayarlar, Sistem, Depolama yolundaki Depolama Alanı Algılayıcısı geçici dosyaları otomatik temizleyebilir; klasik Disk Temizleme aracını ise cleanmgr komutuyla açabilirsiniz.',
            'Bu temizliği tek tek yapmak yerine Disk Mop\'un Speed Up özelliği eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve geri dönüşüm kutusunu tek tıkla temizler. Tarayıcı önbelleği temizleyicisi Chrome, Firefox ve Edge\'i ayrı ayrı ele alır; İndirilenler temizleyicisi ise klasördeki dosyaları kategorilere ayırarak nelerin güvenle silinebileceğini gösterir.',
            'Zamanlanmış temizlik özelliğiyle haftalık veya aylık otomatik bakım görevleri oluşturursanız bu birikinti bir daha aynı boyuta ulaşmaz. Tek seferlik büyük temizlik yerine düzenli küçük temizlikler, sistem dosyalarına hiç dokunmadan diskinizi sürekli ferah tutar.',
          ],
        },
        {
          title: 'Diskinizi Gerçekte Neyin Doldurduğunu Bulun',
          content: [
            'Pagefile.sys ve hiberfil.sys gözle görülür iki büyük dosya olduğu için ilk hedef haline gelir, ancak çoğu diskte asıl alanı unutulmuş videolar, eski kurulum dosyaları, ISO kalıpları ve yinelenen fotoğraflar yer. Bunları Dosya Gezgini\'nde klasör klasör dolaşarak bulmak saatler alabilir.',
            'Disk Mop\'un disk analizi, sürücünüzü görsel bir treemap ile tarayarak en çok yer kaplayan klasörleri tek bakışta gösterir. Büyük dosya bulucu 500 MB\'ın üzerindeki tüm dosyaları listeler; yinelenen dosya dedektörü ise SHA-256 karma karşılaştırmasıyla birebir aynı fotoğraf, video ve belgeleri güvenle tespit eder, böylece yanlışlıkla farklı bir dosyayı silme riski ortadan kalkar.',
            'Disk Mop\'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Hazırda bekletmeyi kapatmak size bir kez birkaç gigabayt kazandırır; diskinizi gerçekten neyin doldurduğunu görmek ise her ay yeniden alan kazandırır.',
          ],
        },
      ],
      verdict: [
        'Özetle: hiberfil.sys, powercfg -h off komutuyla güvenle kaldırılabilir; karşılığında hazırda bekletme ve hızlı başlangıç özelliklerinden vazgeçersiniz. Pagefile.sys silinmemeli, çoğu durumda sistem yönetimli boyutta bırakılmalıdır; swapfile.sys ise zaten o kadar küçüktür ki uğraşmaya değmez. Bu dosyalara dokunmadan önce asıl alan kaybının nerede olduğunu görmek her zaman daha akıllıcadır.',
        'Disk Mop tam bu noktada devreye girer: disk analizi ve büyük dosya bulucu diskinizi gerçekte neyin doldurduğunu gösterir, Speed Up eski indirmeleri, önbellekleri ve geri dönüşüm kutusunu tek tıkla temizler, zamanlanmış temizlik ise kazandığınız alanın kalıcı olmasını sağlar. Sistem dosyalarını riske atmadan aynı gigabaytları geri kazanmanın en kolay yolu budur.',
      ],
      ctaText: 'Disk Mop ile disk alanınızı güvenle geri kazanın',
    },
    en: {
      title: 'Pagefile.sys and Hiberfil.sys: Can You Delete Them?',
      metaDescription:
        'Wondering if you can delete pagefile.sys and hiberfil.sys? Learn what these hidden Windows files do, how to shrink them safely, and free up gigabytes today.',
      subtitle: 'A Safe Guide to Windows\' Two Giant Hidden Files',
      intro: [
        'Can you delete pagefile.sys and hiberfil.sys? The short answer: you can safely remove hiberfil.sys by running powercfg -h off in an administrator terminal, and Windows will delete the file instantly. Pagefile.sys, however, is Windows\' virtual memory file and should not be deleted — leaving it system managed is the safe choice.',
        'Together these two files often occupy well over 10-20 GB, and you cannot delete them like normal files because Windows keeps both locked while it is running. In this guide we\'ll explain what each file actually does, show the safe way to remove hiberfil.sys by disabling hibernation, explain why pagefile.sys deserves to stay, and walk through lower-risk ways to reclaim the same gigabytes of disk space.',
      ],
      sections: [
        {
          title: 'What Are Pagefile.sys, Hiberfil.sys and Swapfile.sys?',
          content: [
            'So what is pagefile.sys exactly? It is Windows\' virtual memory file, also called the paging file, and it lives in the root of your C: drive. When your RAM starts filling up, Windows moves less-used memory pages into this file so that applications keep running instead of crashing. It is also the channel through which Windows writes memory dumps after a system crash, which matters for diagnosing blue screens.',
            'Hiberfil.sys is the hibernation file. When you hibernate your PC, the contents of your RAM are saved into this file so that every open window comes back exactly as you left it. The Fast Startup feature in Windows 10 and 11 also relies on it: at shutdown, Windows writes the system session into hiberfil.sys to make the next boot faster.',
            'Swapfile.sys is the small sibling of the family: it is used to suspend and resume Microsoft Store (UWP) apps and typically takes up a few hundred megabytes at most. All three are hidden, protected operating system files. To see them, open Folder Options in File Explorer, switch to the View tab, untick \'Hide protected operating system files\' and enable showing hidden items.',
          ],
        },
        {
          title: 'Why These Hidden System Files Are So Large',
          content: [
            'The size of both files is tied directly to how much RAM you have. Because hiberfil.sys has to store a copy of your memory, it usually ends up somewhere between 40 percent and the full size of your installed RAM — on a 16 GB machine that can mean more than 6 GB for this one file alone. Pagefile.sys, in its default system-managed mode, grows and shrinks with demand and commonly occupies several gigabytes.',
            'Combined, the pair takes a noticeable bite out of a 256 GB SSD, which is why they are usually the first thing people spot when analyzing their disk. Windows does not keep them around arbitrarily: the paging file is a safety net against memory pressure, and the hibernation file enables both battery-saving hibernation and faster boots.',
            'If you try to delete either file in File Explorer, you will get an access denied error, because Windows locks both while it is running. The correct approach is never to attack the files directly, but to turn off or resize the underlying feature using Windows\' own tools, as described in the next sections.',
          ],
        },
        {
          title: 'How to Remove Hiberfil.sys by Disabling Hibernation',
          content: [
            'The only safe way to delete hiberfil.sys is to disable hibernation. Right-click the Start button and open Terminal (Admin) on Windows 11, or Windows PowerShell (Admin) on Windows 10. Then type powercfg -h off and press Enter; the command completes silently, and hiberfil.sys is removed immediately without a reboot.',
            'This change has two costs: the Hibernate option disappears from the power menu, and Fast Startup is turned off, so cold boots may take slightly longer. On desktop PCs these features are rarely missed; if you use a laptop and rely on hibernation to preserve your session when the battery runs low, think twice. If you change your mind, powercfg -h on restores everything.',
            'There is also a middle ground: running powercfg /h /type reduced in the same administrator terminal shrinks the file to roughly half its size while keeping Fast Startup — you only give up full hibernation. For laptop users who want to save space without losing quick boots, this is a sensible compromise.',
          ],
        },
        {
          title: 'Should You Resize or Disable Pagefile.sys?',
          content: [
            'Our short advice: do not disable pagefile.sys. Even with plenty of RAM, Windows and many applications expect a paging file to exist; without one, programs can fail with out-of-memory errors once RAM fills up, and Windows cannot write a memory dump after a crash, making problems harder to diagnose. The few gigabytes you would gain rarely justify those risks.',
            'If you still want to inspect or adjust it: press Win+R, type sysdm.cpl and hit Enter, open the Advanced tab and click Settings under Performance, then switch to the Advanced tab in that window and click Change under Virtual memory. Unticking \'Automatically manage paging file size for all drives\' lets you set a custom size or move the file to another drive; changes take effect after a restart.',
            'If your system drive is genuinely cramped, setting a fixed, modest custom size or moving the paging file to a second drive is far safer than selecting \'No paging file\'. Unless you have a specific reason, the right setting for most people is the default: system managed size.',
          ],
        },
        {
          title: 'Safer Ways to Reclaim Gigabytes of Disk Space',
          content: [
            'Before squeezing your virtual memory, look at the actual clutter: temporary files, browser caches, months-old downloads and a full recycle bin often add up to as much space as hiberfil.sys itself. Windows\' built-in tools help here: Storage Sense under Settings, System, Storage can clean temporary files automatically, and the classic Disk Cleanup tool opens with the cleanmgr command.',
            'Instead of doing each of those cleanups by hand, Disk Mop\'s Speed Up feature clears old downloads, system cache, browser cache and the recycle bin in a single click. Its Browser Cache Cleaner handles Chrome, Firefox and Edge individually, and the Downloads Cleaner categorizes the files in your Downloads folder so you can see at a glance what is safe to remove.',
            'With Scheduled Cleanup you can set up weekly or monthly maintenance tasks so the clutter never builds back up to its old size. Regular small cleanups beat one heroic purge — and they keep your drive breathing without ever touching a system file.',
          ],
        },
        {
          title: 'Find What Is Really Eating Your Drive',
          content: [
            'Pagefile.sys and hiberfil.sys become targets because they are two big, visible files, but on most drives the real space is lost to forgotten videos, old installers, ISO images and duplicate photos. Hunting those down folder by folder in File Explorer can take hours.',
            'Disk Mop\'s Disk Analysis scans your drive into a visual treemap that shows the largest folders at a glance. The Large File Finder lists every file over 500 MB, and the Duplicate Detector compares files with SHA-256 hashes, so identical photos, videos and documents are identified with certainty rather than guesswork — no risk of deleting a file that merely looks similar.',
            'You can download Disk Mop for free with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. Disabling hibernation saves you a few gigabytes exactly once — seeing what really fills your drive keeps paying off month after month.',
          ],
        },
      ],
      verdict: [
        'To sum up: hiberfil.sys can be removed safely with powercfg -h off, at the cost of hibernation and Fast Startup. Pagefile.sys should not be deleted and is best left at its system-managed size, and swapfile.sys is too small to be worth touching. Before reaching for system files at all, it is always smarter to find out where your disk space is actually going.',
        'That is exactly where Disk Mop fits in: Disk Analysis and the Large File Finder show what is really filling your drive, Speed Up clears old downloads, caches and the recycle bin in one click, and Scheduled Cleanup keeps the space you reclaimed from disappearing again. It is the easiest way to win back the same gigabytes without putting a single system file at risk.',
      ],
      ctaText: 'Reclaim your disk space safely with Disk Mop',
    },
    de: {
      title: 'Pagefile.sys und Hiberfil.sys: Kann man sie löschen?',
      metaDescription:
        'Kann man pagefile.sys und hiberfil.sys löschen? Erfahren Sie, wozu diese versteckten Windows-Dateien dienen und wie Sie damit sicher Gigabytes freigeben.',
      subtitle: 'Der sichere Umgang mit den zwei riesigen versteckten Windows-Dateien',
      intro: [
        'Kann man pagefile.sys und hiberfil.sys löschen? Die kurze Antwort: hiberfil.sys lässt sich sicher entfernen, indem Sie in einem Administrator-Terminal powercfg -h off ausführen — Windows löscht die Datei sofort. Pagefile.sys ist dagegen die Auslagerungsdatei von Windows und sollte nicht gelöscht werden; die systemverwaltete Einstellung ist die sichere Wahl.',
        'Zusammen belegen diese beiden Dateien oft mehr als 10-20 GB, und sie lassen sich nicht wie normale Dateien löschen, da Windows beide im laufenden Betrieb sperrt. Dieser Leitfaden erklärt, wozu die Dateien dienen, wie Sie hiberfil.sys durch Deaktivieren des Ruhezustands sicher entfernen, warum pagefile.sys bleiben sollte und wie Sie dieselben Gigabytes mit deutlich weniger Risiko zurückgewinnen.',
      ],
      sections: [
        {
          title: 'Was sind Pagefile.sys, Hiberfil.sys und Swapfile.sys?',
          content: [
            'Was genau ist pagefile.sys? Es ist die Auslagerungsdatei von Windows, auch Paging-Datei genannt, und sie liegt im Stammverzeichnis des C:-Laufwerks. Wenn der Arbeitsspeicher knapp wird, verschiebt Windows selten genutzte Speicherseiten in diese Datei, damit Anwendungen weiterlaufen statt abzustürzen. Außerdem schreibt Windows über sie nach einem Systemabsturz Speicherabbilder — genau die Dateien, die bei der Diagnose von Bluescreens helfen.',
            'Hiberfil.sys ist die Ruhezustandsdatei: Beim Versetzen in den Ruhezustand wird der RAM-Inhalt hier gespeichert, sodass alle offenen Fenster beim nächsten Start genau so zurückkehren, wie Sie sie verlassen haben. Auch der Schnellstart von Windows 10 und 11 stützt sich darauf: Beim Herunterfahren schreibt Windows die Systemsitzung in hiberfil.sys, damit der nächste Start schneller abläuft.',
            'Swapfile.sys ist das kleine Geschwister der Familie: Es dient dem Anhalten und Fortsetzen von Microsoft-Store-Apps (UWP) und belegt meist nur wenige Hundert Megabyte. Alle drei sind versteckte, geschützte Systemdateien. Sichtbar werden sie erst, wenn Sie in den Ordneroptionen des Datei-Explorers auf der Registerkarte Ansicht die Option „Geschützte Systemdateien ausblenden“ deaktivieren und versteckte Elemente einblenden.',
          ],
        },
        {
          title: 'Warum diese versteckten Systemdateien so groß sind',
          content: [
            'Die Größe beider Dateien hängt direkt von Ihrem Arbeitsspeicher ab. Da hiberfil.sys eine Kopie des Speichers aufnehmen muss, erreicht sie meist zwischen 40 Prozent und der vollen Größe des installierten RAM — bei 16 GB RAM können das allein über 6 GB sein. Pagefile.sys wächst und schrumpft im systemverwalteten Modus je nach Bedarf und belegt üblicherweise mehrere Gigabyte.',
            'Zusammen beanspruchen beide Dateien auf einer 256-GB-SSD einen spürbaren Anteil — deshalb fallen sie bei jeder Datenträgeranalyse als Erstes auf. Windows hält sie jedoch nicht ohne Grund vor: Die Auslagerungsdatei ist ein Sicherheitsnetz bei Speicherknappheit, die Ruhezustandsdatei ermöglicht Akkusparen und schnelles Hochfahren.',
            'Ein Löschversuch im Datei-Explorer endet mit einer Zugriffsverweigerung, weil Windows beide Dateien im Betrieb sperrt. Der richtige Weg führt nie über die Dateien selbst, sondern über das Deaktivieren oder Anpassen der zugehörigen Funktion mit den Bordmitteln von Windows — genau so, wie es die nächsten Abschnitte beschreiben.',
          ],
        },
        {
          title: 'Hiberfil.sys entfernen: Ruhezustand deaktivieren',
          content: [
            'Der einzig sichere Weg, hiberfil.sys zu löschen, ist das Deaktivieren des Ruhezustands. Klicken Sie mit der rechten Maustaste auf die Start-Schaltfläche und öffnen Sie unter Windows 11 Terminal (Administrator) bzw. unter Windows 10 Windows PowerShell (Administrator). Geben Sie powercfg -h off ein und drücken Sie die Eingabetaste — der Befehl läuft ohne Ausgabe durch, und hiberfil.sys verschwindet sofort, ganz ohne Neustart.',
            'Die Änderung hat zwei Nachteile: Die Option Ruhezustand verschwindet aus dem Energiemenü, und der Schnellstart wird deaktiviert, wodurch Kaltstarts etwas länger dauern können. Auf Desktop-PCs vermisst man beides selten; Laptop-Nutzer, die den Ruhezustand zum Sichern der Sitzung bei niedrigem Akkustand verwenden, sollten es sich gut überlegen. Mit powercfg -h on lässt sich alles jederzeit wiederherstellen.',
            'Es gibt auch einen Mittelweg: Der Befehl powercfg /h /type reduced, im selben Administrator-Terminal ausgeführt, verkleinert die Datei auf etwa die Hälfte und behält den Schnellstart bei — nur der vollständige Ruhezustand entfällt. Für Laptop-Nutzer ein sinnvoller Kompromiss zwischen Speicherplatz und Startgeschwindigkeit.',
          ],
        },
        {
          title: 'Pagefile.sys anpassen oder deaktivieren?',
          content: [
            'Unser kurzer Rat: Deaktivieren Sie pagefile.sys nicht. Selbst mit viel RAM erwarten Windows und viele Anwendungen eine vorhandene Auslagerungsdatei; fehlt sie, können Programme bei vollem Speicher mit Fehlern abbrechen, und nach einem Absturz kann Windows kein Speicherabbild schreiben, was die Fehlersuche deutlich erschwert. Die wenigen gewonnenen Gigabytes rechtfertigen diese Risiken selten.',
            'Zum Prüfen oder Anpassen: Drücken Sie Win+R, geben Sie sysdm.cpl ein und bestätigen Sie, öffnen Sie die Registerkarte Erweitert, klicken Sie unter Leistung auf Einstellungen und dort unter Erweitert im Bereich Virtueller Arbeitsspeicher auf Ändern. Wenn Sie das Häkchen bei „Auslagerungsdateigröße für alle Laufwerke automatisch verwalten“ entfernen, können Sie eine eigene Größe festlegen oder die Datei auf ein anderes Laufwerk verschieben; die Änderungen greifen nach einem Neustart.',
            'Ist das Systemlaufwerk wirklich knapp, sind eine feste, moderate Größe oder das Verschieben auf ein zweites Laufwerk deutlich sicherer als die Option „Keine Auslagerungsdatei“. Ohne besonderen Grund bleibt die beste Einstellung für die meisten: systemverwaltete Größe.',
          ],
        },
        {
          title: 'Sicherere Wege, Gigabytes an Speicherplatz freizugeben',
          content: [
            'Bevor Sie am virtuellen Speicher sparen, werfen Sie einen Blick auf den eigentlichen Ballast: temporäre Dateien, Browser-Caches, monatealte Downloads und ein voller Papierkorb belegen oft ebenso viel Platz wie hiberfil.sys. Die Bordmittel helfen: Die Speicheroptimierung unter Einstellungen, System, Speicher räumt temporäre Dateien automatisch auf, die klassische Datenträgerbereinigung öffnen Sie mit dem Befehl cleanmgr.',
            'Statt jede dieser Bereinigungen einzeln durchzuführen, erledigt Disk Mops Speed Up alte Downloads, Systemcache, Browser-Cache und Papierkorb mit einem einzigen Klick. Der Browser-Cache-Bereiniger behandelt Chrome, Firefox und Edge einzeln, und der Downloads-Bereiniger kategorisiert die Dateien im Downloads-Ordner, sodass sofort erkennbar ist, was sicher gelöscht werden kann.',
            'Mit der geplanten Bereinigung richten Sie wöchentliche oder monatliche Wartungsaufgaben ein, damit sich der Ballast gar nicht erst wieder ansammelt. Regelmäßige kleine Bereinigungen schlagen die einmalige Großaktion — ganz ohne Eingriff in Systemdateien.',
          ],
        },
        {
          title: 'Finden Sie heraus, was Ihr Laufwerk wirklich füllt',
          content: [
            'Pagefile.sys und hiberfil.sys geraten ins Visier, weil sie zwei große, sichtbare Dateien sind — auf den meisten Laufwerken geht der Platz jedoch an vergessene Videos, alte Installationsdateien, ISO-Abbilder und doppelte Fotos verloren. Diese im Datei-Explorer Ordner für Ordner aufzuspüren kostet Stunden.',
            'Disk Mops Festplattenanalyse stellt Ihr Laufwerk als visuelle Treemap dar und zeigt die größten Ordner auf einen Blick. Der Große-Dateien-Finder listet alle Dateien über 500 MB auf, und der Duplikatfinder vergleicht Dateien per SHA-256-Hash — identische Fotos, Videos und Dokumente werden zweifelsfrei erkannt, ohne das Risiko, eine nur ähnlich aussehende Datei zu löschen.',
            'Disk Mop ist als kostenloser Download mit eingeschränkten Funktionen erhältlich; die Pro-Version kostet einmalig 19,90 $ mit lebenslanger Lizenz. Das Deaktivieren des Ruhezustands spart einmalig ein paar Gigabytes — zu wissen, was das Laufwerk wirklich füllt, zahlt sich Monat für Monat aus.',
          ],
        },
      ],
      verdict: [
        'Kurz gefasst: hiberfil.sys lässt sich mit powercfg -h off sicher entfernen — um den Preis von Ruhezustand und Schnellstart. Pagefile.sys sollte nicht gelöscht werden und bleibt am besten systemverwaltet, und swapfile.sys ist zu klein, um sich damit zu beschäftigen. Bevor Sie überhaupt an Systemdateien denken, lohnt sich immer zuerst der Blick darauf, wohin der Speicherplatz tatsächlich verschwindet.',
        'Genau hier setzt Disk Mop an: Festplattenanalyse und Große-Dateien-Finder zeigen, was das Laufwerk wirklich füllt, Speed Up bereinigt alte Downloads, Caches und den Papierkorb mit einem Klick, und die geplante Bereinigung sorgt dafür, dass der gewonnene Platz erhalten bleibt. So gewinnen Sie dieselben Gigabytes zurück, ohne eine einzige Systemdatei zu gefährden.',
      ],
      ctaText: 'Gewinnen Sie Ihren Speicherplatz sicher zurück mit Disk Mop',
    },
    fr: {
      title: "Pagefile.sys et hiberfil.sys : peut-on les supprimer ?",
      metaDescription:
        "Peut-on supprimer pagefile.sys et hiberfil.sys ? Découvrez à quoi servent ces fichiers Windows cachés, comment les réduire sans risque et libérer plusieurs Go.",
      subtitle: "Le guide sûr des deux fichiers cachés les plus volumineux de Windows",
      intro: [
        "Peut-on supprimer pagefile.sys et hiberfil.sys ? Réponse courte : vous pouvez retirer hiberfil.sys sans risque en exécutant powercfg -h off dans un terminal administrateur, et Windows supprime le fichier immédiatement. Pagefile.sys, en revanche, est le fichier d'échange de Windows et ne doit pas être supprimé — le laisser en mode géré par le système reste le choix sûr.",
        "À eux deux, ces fichiers occupent souvent bien plus de 10 à 20 Go, et vous ne pouvez pas les effacer comme des fichiers ordinaires : Windows les verrouille tant qu'il fonctionne. Dans ce guide, nous expliquons à quoi sert réellement chacun d'eux, comment supprimer hiberfil.sys sans danger en désactivant la veille prolongée, pourquoi pagefile.sys mérite de rester, et quelles méthodes bien moins risquées permettent de récupérer les mêmes gigaoctets d'espace disque.",
      ],
      sections: [
        {
          title: "Que sont pagefile.sys, hiberfil.sys et swapfile.sys ?",
          content: [
            "Qu'est-ce que pagefile.sys exactement ? C'est le fichier d'échange de Windows, aussi appelé fichier de pagination, et il se trouve à la racine de votre lecteur C:. Lorsque la mémoire vive commence à saturer, Windows déplace dans ce fichier les pages mémoire les moins sollicitées afin que les applications continuent de tourner au lieu de planter. C'est aussi par lui que Windows écrit les vidages mémoire après un plantage, ce qui compte beaucoup pour diagnostiquer un écran bleu.",
            "Hiberfil.sys est le fichier de veille prolongée. Quand vous mettez le PC en veille prolongée, le contenu de la RAM est enregistré dans ce fichier, si bien que chaque fenêtre ouverte revient exactement comme vous l'aviez laissée. Le démarrage rapide de Windows 10 et 11 s'appuie lui aussi dessus : à l'extinction, Windows écrit la session système dans hiberfil.sys pour accélérer le démarrage suivant.",
            "Swapfile.sys est le petit frère de la famille : il sert à suspendre et à reprendre les applications du Microsoft Store (UWP) et ne dépasse généralement pas quelques centaines de mégaoctets. Les trois sont des fichiers système cachés et protégés. Pour les voir, ouvrez les Options de l'Explorateur de fichiers, allez dans l'onglet Affichage, décochez « Masquer les fichiers protégés du système d'exploitation » et activez l'affichage des éléments masqués.",
          ],
        },
        {
          title: "Pourquoi ces fichiers système cachés sont-ils si volumineux ?",
          content: [
            "La taille des deux fichiers dépend directement de la quantité de mémoire vive installée. Comme hiberfil.sys doit stocker une copie de la mémoire, il finit généralement entre 40 pour cent et la totalité de la RAM installée : sur une machine de 16 Go, cela représente plus de 6 Go pour ce seul fichier. Pagefile.sys, dans son mode géré par le système activé par défaut, grandit et rétrécit selon la demande et occupe couramment plusieurs gigaoctets.",
            "Réunis, les deux prennent une part bien visible d'un SSD de 256 Go, et c'est pour cela qu'ils sautent aux yeux dès que l'on analyse son disque. Windows ne les conserve pourtant pas au hasard : le fichier d'échange est un filet de sécurité contre la pression mémoire, et le fichier de veille prolongée permet à la fois d'économiser la batterie et de démarrer plus vite.",
            "Si vous essayez de supprimer l'un ou l'autre depuis l'Explorateur de fichiers, vous obtiendrez une erreur d'accès refusé, car Windows verrouille les deux pendant son fonctionnement. La bonne méthode ne consiste jamais à s'attaquer directement aux fichiers, mais à désactiver ou redimensionner la fonction correspondante avec les outils de Windows, comme expliqué dans les sections suivantes.",
          ],
        },
        {
          title: "Supprimer hiberfil.sys en désactivant la veille prolongée",
          content: [
            "Le seul moyen sûr de supprimer hiberfil.sys est de désactiver la veille prolongée. Faites un clic droit sur le bouton Démarrer et ouvrez Terminal (administrateur) sous Windows 11, ou Windows PowerShell (admin) sous Windows 10. Tapez ensuite powercfg -h off et appuyez sur Entrée : la commande s'exécute sans afficher le moindre message, et hiberfil.sys disparaît aussitôt, sans redémarrage.",
            "Ce changement a deux contreparties : l'option Mettre en veille prolongée disparaît du menu Alimentation, et le démarrage rapide est désactivé, donc les démarrages à froid peuvent devenir légèrement plus longs. Sur un PC de bureau, ces fonctions ne manquent presque jamais ; si vous utilisez un portable et comptez sur la veille prolongée pour préserver votre session quand la batterie faiblit, réfléchissez-y à deux fois. En cas de regret, powercfg -h on rétablit tout.",
            "Il existe aussi une voie intermédiaire : la commande powercfg /h /type reduced, lancée dans le même terminal administrateur, réduit le fichier à environ la moitié de sa taille tout en conservant le démarrage rapide — vous ne perdez que la veille prolongée complète. Pour les utilisateurs de portables qui veulent gagner de la place sans renoncer aux démarrages rapides, c'est un compromis raisonnable.",
          ],
        },
        {
          title: "Faut-il redimensionner ou désactiver pagefile.sys ?",
          content: [
            "Notre conseil tient en une phrase : ne désactivez pas pagefile.sys. Même avec beaucoup de RAM, Windows et de nombreuses applications s'attendent à trouver un fichier d'échange ; sans lui, des programmes peuvent s'arrêter sur une erreur de mémoire insuffisante dès que la RAM se remplit, et Windows ne peut plus écrire de vidage mémoire après un plantage, ce qui rend les problèmes bien plus difficiles à diagnostiquer. Les quelques gigaoctets gagnés justifient rarement ces risques.",
            "Si vous voulez tout de même l'inspecter ou l'ajuster : appuyez sur Win+R, tapez sysdm.cpl et validez, ouvrez l'onglet Paramètres système avancés, cliquez sur Paramètres sous Performances, puis passez à l'onglet Avancé de cette fenêtre et cliquez sur Modifier dans la zone Mémoire virtuelle. En décochant « Gestion automatique du fichier d'échange pour les lecteurs », vous pouvez définir une taille personnalisée ou déplacer le fichier sur un autre lecteur ; les modifications prennent effet après un redémarrage.",
            "Si votre disque système est vraiment à l'étroit, fixer une taille personnalisée modeste ou déplacer le fichier d'échange vers un second disque est bien plus sûr que de choisir « Aucun fichier d'échange ». Sauf raison précise, le bon réglage pour la plupart des gens reste celui par défaut : taille gérée par le système.",
          ],
        },
        {
          title: "Des moyens plus sûrs de récupérer des gigaoctets d'espace disque",
          content: [
            "Avant de rogner sur la mémoire virtuelle, regardez le vrai fouillis : fichiers temporaires, caches de navigateur, téléchargements vieux de plusieurs mois et Corbeille pleine représentent souvent autant d'espace que hiberfil.sys lui-même. Les outils intégrés de Windows aident déjà : l'Assistant Stockage, dans Paramètres, Système, Stockage, nettoie automatiquement les fichiers temporaires, et le classique Nettoyage de disque s'ouvre avec la commande cleanmgr.",
            "Plutôt que de faire chacun de ces nettoyages à la main, la fonction Accélérer (Speed Up) de Disk Mop efface les anciens téléchargements, le cache système, le cache des navigateurs et la Corbeille en un seul clic. Son nettoyeur de cache des navigateurs (Browser Cache Cleaner) traite Chrome, Firefox et Edge séparément, et le nettoyeur de téléchargements (Downloads Cleaner) classe par catégories les fichiers de votre dossier Téléchargements : vous voyez d'un coup d'œil ce qui peut partir sans risque.",
            "Avec le nettoyage programmé (Scheduled Cleanup), vous mettez en place des tâches d'entretien hebdomadaires ou mensuelles pour que le fouillis ne revienne jamais à son ancienne taille. De petits nettoyages réguliers valent mieux qu'un grand ménage héroïque — et ils laissent respirer votre disque sans jamais toucher au moindre fichier système.",
          ],
        },
        {
          title: "Découvrez ce qui remplit vraiment votre disque",
          content: [
            "Pagefile.sys et hiberfil.sys deviennent des cibles parce que ce sont deux gros fichiers bien visibles, mais sur la plupart des disques l'espace part en réalité dans des vidéos oubliées, de vieux programmes d'installation, des images ISO et des photos en double. Traquer tout cela dossier par dossier dans l'Explorateur de fichiers peut prendre des heures.",
            "L'analyse de disque (Disk Analysis) de Disk Mop parcourt votre lecteur et l'affiche sous forme de treemap visuelle qui montre les dossiers les plus lourds d'un seul coup d'œil. Le détecteur de gros fichiers (Large File Finder) liste tous les fichiers de plus de 500 Mo, et le détecteur de doublons (Duplicate Detector) compare les fichiers par empreinte SHA-256 : les photos, vidéos et documents identiques sont identifiés avec certitude plutôt qu'au jugé, sans le moindre risque de supprimer un fichier qui se contente de leur ressembler.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Désactiver la veille prolongée vous fait gagner quelques gigaoctets une seule fois — savoir ce qui remplit vraiment votre disque continue de rapporter mois après mois.",
          ],
        },
      ],
      verdict: [
        "En résumé : hiberfil.sys peut être supprimé sans risque avec powercfg -h off, au prix de la veille prolongée et du démarrage rapide. Pagefile.sys ne doit pas être supprimé et se laisse au mieux à sa taille gérée par le système, tandis que swapfile.sys est bien trop petit pour qu'on s'en préoccupe. Avant même de penser aux fichiers système, il est toujours plus malin de découvrir où passe réellement votre espace disque.",
        "C'est exactement là que Disk Mop intervient : l'analyse de disque et le détecteur de gros fichiers montrent ce qui remplit vraiment votre lecteur, la fonction Accélérer efface anciens téléchargements, caches et Corbeille en un clic, et le nettoyage programmé empêche l'espace récupéré de disparaître à nouveau. C'est la façon la plus simple de reprendre les mêmes gigaoctets sans mettre en danger le moindre fichier système.",
      ],
      ctaText: "Récupérez votre espace disque en toute sécurité avec Disk Mop",
    },
    es: {
      title: "Pagefile.sys e hiberfil.sys: ¿se pueden borrar?",
      metaDescription:
        "¿Se pueden borrar pagefile.sys e hiberfil.sys? Descubre para qué sirven estos archivos ocultos de Windows, cómo reducirlos sin riesgo y liberar varios gigas.",
      subtitle: "Guía segura para los dos archivos ocultos más grandes de Windows",
      intro: [
        "¿Se pueden borrar pagefile.sys e hiberfil.sys? Respuesta corta: hiberfil.sys se puede eliminar sin riesgo ejecutando powercfg -h off en un terminal de administrador, y Windows borra el archivo al instante. Pagefile.sys, en cambio, es el archivo de paginación de Windows y no conviene borrarlo: dejarlo administrado por el sistema es la opción segura.",
        "Entre los dos suelen ocupar bastante más de 10 o 20 GB, y no puedes eliminarlos como archivos normales porque Windows mantiene ambos bloqueados mientras está en marcha. En esta guía explicamos qué hace realmente cada uno, cómo eliminar hiberfil.sys de forma segura desactivando la hibernación, por qué pagefile.sys merece quedarse y qué caminos mucho menos arriesgados te devuelven esos mismos gigabytes de espacio en disco.",
      ],
      sections: [
        {
          title: "¿Qué son pagefile.sys, hiberfil.sys y swapfile.sys?",
          content: [
            "¿Qué es pagefile.sys exactamente? Es el archivo de memoria virtual de Windows, también llamado archivo de paginación, y vive en la raíz de la unidad C:. Cuando la memoria RAM empieza a llenarse, Windows traslada a este archivo las páginas de memoria menos usadas para que las aplicaciones sigan funcionando en lugar de cerrarse. Además, es el canal por el que Windows escribe los volcados de memoria tras un fallo del sistema, algo clave para diagnosticar un pantallazo azul.",
            "Hiberfil.sys es el archivo de hibernación. Cuando hibernas el equipo, el contenido de la RAM se guarda en este archivo para que cada ventana abierta vuelva exactamente como la dejaste. El inicio rápido de Windows 10 y 11 también depende de él: al apagar, Windows escribe la sesión del sistema en hiberfil.sys para que el siguiente arranque sea más veloz.",
            "Swapfile.sys es el hermano pequeño de la familia: sirve para suspender y reanudar las aplicaciones de Microsoft Store (UWP) y rara vez pasa de unos cientos de megabytes. Los tres son archivos del sistema ocultos y protegidos. Para verlos, abre las Opciones de carpeta en el Explorador de archivos, ve a la pestaña Ver, desmarca « Ocultar archivos protegidos del sistema operativo » y activa la visualización de elementos ocultos.",
          ],
        },
        {
          title: "Por qué estos archivos de sistema ocultos son tan grandes",
          content: [
            "El tamaño de ambos archivos está ligado directamente a la cantidad de RAM que tengas. Como hiberfil.sys debe guardar una copia de la memoria, suele situarse entre el 40 por ciento y el total de la RAM instalada: en un equipo de 16 GB eso puede suponer más de 6 GB solo para este archivo. Pagefile.sys, en su modo predeterminado administrado por el sistema, crece y se encoge según la demanda y normalmente ocupa varios gigabytes.",
            "Juntos se llevan un buen mordisco de un SSD de 256 GB, y por eso son lo primero que la gente detecta al analizar el disco. Windows no los mantiene por capricho: el archivo de paginación es una red de seguridad frente a la presión de memoria, y el archivo de hibernación permite tanto ahorrar batería como arrancar más rápido.",
            "Si intentas borrar cualquiera de los dos desde el Explorador de archivos, recibirás un error de acceso denegado, porque Windows bloquea ambos mientras está funcionando. El enfoque correcto nunca es atacar los archivos directamente, sino desactivar o redimensionar la función correspondiente con las propias herramientas de Windows, tal como se explica en las secciones siguientes.",
          ],
        },
        {
          title: "Cómo eliminar hiberfil.sys desactivando la hibernación",
          content: [
            "La única forma segura de borrar hiberfil.sys es desactivar la hibernación. Haz clic derecho en el botón Inicio y abre Terminal (administrador) en Windows 11, o Windows PowerShell (administrador) en Windows 10. Después escribe powercfg -h off y pulsa Intro; el comando termina sin mostrar nada y hiberfil.sys desaparece de inmediato, sin necesidad de reiniciar.",
            "El cambio tiene dos costes: la opción Hibernar desaparece del menú de apagado y el inicio rápido queda desactivado, así que los arranques en frío pueden tardar algo más. En equipos de sobremesa casi nadie las echa de menos; si usas un portátil y confías en la hibernación para conservar la sesión cuando baja la batería, piénsalo dos veces. Si cambias de idea, powercfg -h on lo restaura todo.",
            "También existe un término medio: ejecutar powercfg /h /type reduced en ese mismo terminal de administrador reduce el archivo a aproximadamente la mitad y mantiene el inicio rápido; solo renuncias a la hibernación completa. Para quien usa portátil y quiere ganar espacio sin perder arranques rápidos, es un compromiso muy sensato.",
          ],
        },
        {
          title: "¿Conviene redimensionar o desactivar pagefile.sys?",
          content: [
            "Nuestro consejo breve: no desactives pagefile.sys. Aunque te sobre RAM, Windows y muchas aplicaciones dan por hecho que existe un archivo de paginación; sin él, los programas pueden fallar con errores de memoria insuficiente en cuanto la RAM se llena, y Windows no puede escribir un volcado de memoria tras un fallo, lo que complica mucho el diagnóstico. Los pocos gigabytes que ganarías rara vez compensan esos riesgos.",
            "Si aun así quieres revisarlo o ajustarlo: pulsa Win+R, escribe sysdm.cpl y pulsa Intro, abre la pestaña Opciones avanzadas y haz clic en Configuración dentro de Rendimiento; después ve a la pestaña Opciones avanzadas de esa ventana y pulsa Cambiar en el apartado Memoria virtual. Al desmarcar « Administrar automáticamente el tamaño del archivo de paginación para todas las unidades » podrás fijar un tamaño personalizado o mover el archivo a otra unidad; los cambios se aplican tras reiniciar.",
            "Si tu unidad de sistema va realmente justa, fijar un tamaño personalizado moderado o mover el archivo de paginación a un segundo disco es mucho más seguro que elegir « Sin archivo de paginación ». Salvo que tengas un motivo concreto, el ajuste correcto para la mayoría es el predeterminado: tamaño administrado por el sistema.",
          ],
        },
        {
          title: "Formas más seguras de recuperar gigabytes de espacio",
          content: [
            "Antes de estrujar la memoria virtual, mira dónde está el desorden de verdad: archivos temporales, cachés del navegador, descargas de hace meses y una papelera llena suman a menudo tanto espacio como el propio hiberfil.sys. Las herramientas integradas de Windows ayudan: el Sensor de almacenamiento, en Configuración, Sistema, Almacenamiento, borra archivos temporales de forma automática, y el clásico Liberador de espacio en disco se abre con el comando cleanmgr.",
            "En lugar de hacer cada una de esas limpiezas a mano, la función Acelerar (Speed Up) de Disk Mop borra descargas antiguas, caché del sistema, caché del navegador y papelera de reciclaje con un solo clic. Su limpiador de caché del navegador (Browser Cache Cleaner) trata Chrome, Firefox y Edge por separado, y el limpiador de descargas (Downloads Cleaner) clasifica los archivos de la carpeta Descargas para que veas de un vistazo qué se puede eliminar sin riesgo.",
            "Con la limpieza programada (Scheduled Cleanup) puedes crear tareas de mantenimiento semanales o mensuales para que el desorden no vuelva a alcanzar su tamaño anterior. Las limpiezas pequeñas y regulares ganan a la gran purga heroica, y mantienen la unidad respirando sin tocar ni un solo archivo de sistema.",
          ],
        },
        {
          title: "Descubre qué se está comiendo de verdad tu disco",
          content: [
            "Pagefile.sys e hiberfil.sys acaban en el punto de mira porque son dos archivos grandes y visibles, pero en la mayoría de las unidades el espacio se pierde en vídeos olvidados, instaladores antiguos, imágenes ISO y fotos duplicadas. Rastrear todo eso carpeta por carpeta en el Explorador de archivos puede llevarte horas.",
            "El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad y la representa en un treemap visual que muestra las carpetas más grandes de un vistazo. El buscador de archivos grandes (Large File Finder) lista todos los archivos de más de 500 MB, y el detector de duplicados (Duplicate Detector) compara los archivos con hashes SHA-256, así que las fotos, vídeos y documentos idénticos se identifican con certeza y no a ojo, sin riesgo de borrar un archivo que solo se parece a otro.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro es un pago único de 19,90 $ con licencia de por vida. Desactivar la hibernación te ahorra unos gigabytes una sola vez; saber qué llena de verdad tu disco te sigue devolviendo espacio mes tras mes.",
          ],
        },
      ],
      verdict: [
        "En resumen: hiberfil.sys se puede eliminar sin riesgo con powercfg -h off, a cambio de renunciar a la hibernación y al inicio rápido. Pagefile.sys no debería borrarse y lo mejor es dejarlo con el tamaño administrado por el sistema, mientras que swapfile.sys es demasiado pequeño como para molestarse. Antes siquiera de pensar en archivos de sistema, siempre es más inteligente averiguar adónde va realmente tu espacio en disco.",
        "Ahí es justo donde encaja Disk Mop: el análisis de disco y el buscador de archivos grandes enseñan qué llena de verdad la unidad, Acelerar borra descargas antiguas, cachés y papelera con un clic, y la limpieza programada evita que el espacio recuperado vuelva a esfumarse. Es la manera más fácil de recuperar esos mismos gigabytes sin poner en peligro ni un solo archivo de sistema.",
      ],
      ctaText: "Recupera tu espacio en disco con seguridad gracias a Disk Mop",
    },
    it: {
      title: "Pagefile.sys e hiberfil.sys: si possono eliminare?",
      metaDescription:
        "Si possono eliminare pagefile.sys e hiberfil.sys? Scopri a cosa servono questi file nascosti di Windows, come ridurli in sicurezza e liberare parecchi giga.",
      subtitle: "La guida sicura ai due file nascosti più ingombranti di Windows",
      intro: [
        "Si possono eliminare pagefile.sys e hiberfil.sys? Risposta breve: hiberfil.sys si può rimuovere senza rischi eseguendo powercfg -h off in un terminale da amministratore e Windows cancella il file all'istante. Pagefile.sys, invece, è il file di paging di Windows e non va eliminato: lasciarlo gestito dal sistema resta la scelta sicura.",
        "Insieme questi due file occupano spesso ben più di 10-20 GB e non si cancellano come file qualsiasi, perché Windows li tiene bloccati mentre è in funzione. In questa guida spieghiamo a cosa serve davvero ciascuno, come rimuovere hiberfil.sys in sicurezza disattivando l'ibernazione, perché pagefile.sys merita di restare al suo posto e quali strade molto meno rischiose recuperano gli stessi gigabyte di spazio su disco.",
      ],
      sections: [
        {
          title: "Che cosa sono pagefile.sys, hiberfil.sys e swapfile.sys?",
          content: [
            "Che cos'è di preciso pagefile.sys? È il file di memoria virtuale di Windows, chiamato anche file di paging, e si trova nella radice dell'unità C:. Quando la RAM inizia a riempirsi, Windows sposta in questo file le pagine di memoria meno utilizzate, così le applicazioni continuano a funzionare invece di chiudersi con un errore. È anche il canale attraverso cui Windows scrive i dump della memoria dopo un arresto anomalo, un dettaglio prezioso per diagnosticare le schermate blu.",
            "Hiberfil.sys è il file dell'ibernazione. Quando mandi il PC in ibernazione, il contenuto della RAM viene salvato in questo file, così ogni finestra aperta torna esattamente come l'avevi lasciata. Anche l'avvio rapido di Windows 10 e 11 si appoggia a questo file: allo spegnimento Windows vi scrive la sessione di sistema per rendere più veloce l'avvio successivo.",
            "Swapfile.sys è il fratello minore della famiglia: serve a sospendere e riprendere le app del Microsoft Store (UWP) e di solito occupa al massimo qualche centinaio di megabyte. Tutti e tre sono file di sistema nascosti e protetti. Per vederli apri le Opzioni cartella in Esplora file, passa alla scheda Visualizzazione, togli la spunta a « Nascondi i file protetti di sistema » e attiva la visualizzazione degli elementi nascosti.",
          ],
        },
        {
          title: "Perché questi file di sistema nascosti sono così grandi",
          content: [
            "La dimensione di entrambi i file dipende direttamente da quanta RAM hai. Poiché hiberfil.sys deve conservare una copia della memoria, di norma si assesta tra il 40 per cento e l'intera dimensione della RAM installata: su una macchina da 16 GB può significare oltre 6 GB per questo solo file. Pagefile.sys, nella modalità predefinita gestita dal sistema, cresce e si riduce in base alla richiesta e occupa comunemente diversi gigabyte.",
            "Messi insieme, i due si prendono una fetta ben visibile di un SSD da 256 GB: ecco perché sono la prima cosa che salta all'occhio quando si analizza il disco. Windows però non li tiene lì per capriccio: il file di paging è una rete di sicurezza contro la pressione sulla memoria, mentre il file di ibernazione consente sia di risparmiare batteria sia di avviare il PC più in fretta.",
            "Se provi a cancellare uno dei due da Esplora file ottieni un errore di accesso negato, perché Windows li blocca entrambi mentre è in esecuzione. L'approccio corretto non è mai attaccare i file direttamente, ma disattivare o ridimensionare la funzione che li genera usando gli strumenti di Windows, come spiegato nelle sezioni successive.",
          ],
        },
        {
          title: "Come rimuovere hiberfil.sys disattivando l'ibernazione",
          content: [
            "L'unico modo sicuro per eliminare hiberfil.sys è disattivare l'ibernazione. Fai clic destro sul pulsante Start e apri Terminale (amministratore) su Windows 11 oppure Windows PowerShell (amministratore) su Windows 10. Digita quindi powercfg -h off e premi Invio: il comando si completa senza alcun messaggio e hiberfil.sys sparisce subito, senza bisogno di riavviare.",
            "La modifica ha due costi: la voce Ibernazione scompare dal menu di arresto e l'avvio rapido viene disattivato, quindi gli avvii a freddo possono risultare un po' più lenti. Sui PC fissi queste funzioni non mancano quasi a nessuno; se invece usi un portatile e conti sull'ibernazione per salvare la sessione quando la batteria si esaurisce, pensaci due volte. Se cambi idea, powercfg -h on ripristina tutto.",
            "Esiste anche una via di mezzo: eseguire powercfg /h /type reduced nello stesso terminale da amministratore riduce il file a circa metà della sua dimensione mantenendo l'avvio rapido, e rinunci soltanto all'ibernazione completa. Per chi usa un portatile e vuole recuperare spazio senza perdere avvii veloci è un compromesso sensato.",
          ],
        },
        {
          title: "Meglio ridimensionare o disattivare pagefile.sys?",
          content: [
            "Il nostro consiglio in breve: non disattivare pagefile.sys. Anche con tanta RAM, Windows e molte applicazioni danno per scontato che esista un file di paging; senza, i programmi possono chiudersi con errori di memoria esaurita non appena la RAM si riempie e Windows non riesce più a scrivere un dump della memoria dopo un crash, rendendo i problemi molto più difficili da diagnosticare. I pochi gigabyte guadagnati raramente valgono questi rischi.",
            "Se vuoi comunque controllarlo o modificarlo: premi Win+R, digita sysdm.cpl e dai Invio, apri la scheda Avanzate e fai clic su Impostazioni sotto Prestazioni, poi passa alla scheda Avanzate di quella finestra e premi Cambia nella sezione Memoria virtuale. Togliendo la spunta a « Gestisci automaticamente dimensioni file di paging per tutte le unità » puoi impostare una dimensione personalizzata o spostare il file su un'altra unità; le modifiche diventano effettive dopo un riavvio.",
            "Se l'unità di sistema è davvero al limite, impostare una dimensione personalizzata fissa e contenuta o spostare il file di paging su un secondo disco è molto più sicuro che scegliere « Nessun file di paging ». Salvo motivi particolari, l'impostazione giusta per la maggior parte delle persone resta quella predefinita: dimensioni gestite dal sistema.",
          ],
        },
        {
          title: "Modi più sicuri per recuperare gigabyte di spazio su disco",
          content: [
            "Prima di strizzare la memoria virtuale, guarda dov'è il disordine vero: file temporanei, cache dei browser, download vecchi di mesi e un Cestino pieno arrivano spesso a occupare quanto hiberfil.sys stesso. Gli strumenti integrati di Windows danno una mano: Sensore memoria, in Impostazioni, Sistema, Archiviazione, cancella i file temporanei in automatico, mentre la classica Pulizia disco si apre con il comando cleanmgr.",
            "Invece di eseguire ognuna di queste pulizie a mano, la funzione Accelera (Speed Up) di Disk Mop cancella vecchi download, cache di sistema, cache dei browser e Cestino con un solo clic. Il suo pulitore della cache dei browser (Browser Cache Cleaner) tratta Chrome, Firefox ed Edge separatamente, e il pulitore dei download (Downloads Cleaner) suddivide in categorie i file della cartella Download, così vedi a colpo d'occhio che cosa si può rimuovere senza rischi.",
            "Con la pulizia pianificata (Scheduled Cleanup) imposti attività di manutenzione settimanali o mensili, in modo che il disordine non torni mai alle dimensioni di prima. Piccole pulizie regolari battono la grande pulizia eroica e lasciano respirare il disco senza toccare nemmeno un file di sistema.",
          ],
        },
        {
          title: "Scopri che cosa sta davvero divorando il tuo disco",
          content: [
            "Pagefile.sys e hiberfil.sys finiscono nel mirino perché sono due file grandi e ben visibili, ma sulla maggior parte dei dischi lo spazio se ne va in video dimenticati, vecchi programmi di installazione, immagini ISO e foto duplicate. Stanarli cartella per cartella in Esplora file può richiedere ore.",
            "L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità e la rappresenta in una treemap visiva che mostra a colpo d'occhio le cartelle più ingombranti. Il ricercatore di file di grandi dimensioni (Large File Finder) elenca tutti i file oltre i 500 MB, mentre il rilevatore di duplicati (Duplicate Detector) confronta i file tramite hash SHA-256: foto, video e documenti identici vengono riconosciuti con certezza e non a intuito, senza il rischio di cancellare un file che si limita a somigliare a un altro.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro è un pagamento una tantum di 19,90 $ con licenza a vita. Disattivare l'ibernazione ti fa guadagnare qualche gigabyte una volta sola, mentre capire che cosa riempie davvero il disco continua a ripagare mese dopo mese.",
          ],
        },
      ],
      verdict: [
        "In sintesi: hiberfil.sys si può rimuovere in sicurezza con powercfg -h off, al prezzo di rinunciare a ibernazione e avvio rapido. Pagefile.sys non va eliminato ed è meglio lasciarlo con le dimensioni gestite dal sistema, mentre swapfile.sys è troppo piccolo perché valga la pena occuparsene. Prima ancora di mettere mano ai file di sistema, è sempre più intelligente scoprire dove finisce davvero lo spazio su disco.",
        "È esattamente qui che entra in gioco Disk Mop: l'analisi del disco e il ricercatore di file di grandi dimensioni mostrano che cosa riempie davvero l'unità, Accelera cancella vecchi download, cache e Cestino con un clic, e la pulizia pianificata evita che lo spazio recuperato sparisca di nuovo. È il modo più semplice per riprendersi gli stessi gigabyte senza mettere a rischio un solo file di sistema.",
      ],
      ctaText: "Recupera lo spazio su disco in sicurezza con Disk Mop",
    },
    pt: {
      title: "Pagefile.sys e hiberfil.sys: dá para apagar?",
      metaDescription:
        "Dá para apagar pagefile.sys e hiberfil.sys? Veja para que servem esses arquivos ocultos do Windows, como reduzi-los com segurança e liberar vários gigabytes.",
      subtitle: "O guia seguro para os dois arquivos ocultos gigantes do Windows",
      intro: [
        "Dá para apagar pagefile.sys e hiberfil.sys? Resposta curta: você pode remover o hiberfil.sys com segurança executando powercfg -h off em um terminal de administrador, e o Windows apaga o arquivo na hora. Já o pagefile.sys é o arquivo de paginação do Windows e não deve ser excluído: deixá-lo no modo gerenciado pelo sistema é a escolha segura.",
        "Juntos, esses dois arquivos costumam passar bem dos 10 a 20 GB, e você não consegue apagá-los como arquivos comuns porque o Windows mantém os dois bloqueados enquanto está em execução. Neste guia explicamos o que cada um realmente faz, mostramos o jeito seguro de remover o hiberfil.sys desativando a hibernação, contamos por que o pagefile.sys merece ficar e apresentamos caminhos bem menos arriscados para recuperar os mesmos gigabytes de espaço em disco.",
      ],
      sections: [
        {
          title: "O que são pagefile.sys, hiberfil.sys e swapfile.sys?",
          content: [
            "Afinal, o que é o pagefile.sys? É o arquivo de memória virtual do Windows, também chamado de arquivo de paginação, e ele fica na raiz da unidade C:. Quando a memória RAM começa a encher, o Windows move para esse arquivo as páginas de memória menos usadas, de modo que os aplicativos continuem rodando em vez de travar. Ele também é o caminho pelo qual o Windows grava os despejos de memória depois de uma falha do sistema, o que faz diferença na hora de diagnosticar uma tela azul.",
            "O hiberfil.sys é o arquivo de hibernação. Quando você hiberna o PC, o conteúdo da RAM é salvo nesse arquivo para que todas as janelas abertas voltem exatamente como estavam. A inicialização rápida do Windows 10 e 11 também depende dele: ao desligar, o Windows grava a sessão do sistema no hiberfil.sys para deixar a próxima inicialização mais veloz.",
            "O swapfile.sys é o irmão caçula da família: serve para suspender e retomar aplicativos da Microsoft Store (UWP) e normalmente ocupa no máximo algumas centenas de megabytes. Os três são arquivos de sistema ocultos e protegidos. Para vê-los, abra as Opções de Pasta no Explorador de Arquivos, vá até a guia Exibir, desmarque “Ocultar arquivos protegidos do sistema operacional” e ative a exibição de itens ocultos.",
          ],
        },
        {
          title: "Por que esses arquivos de sistema ocultos são tão grandes",
          content: [
            "O tamanho dos dois arquivos está diretamente ligado à quantidade de memória RAM instalada. Como o hiberfil.sys precisa guardar uma cópia da memória, ele costuma ficar entre 40 por cento e o total da RAM instalada: em uma máquina de 16 GB, isso pode significar mais de 6 GB só para esse arquivo. Já o pagefile.sys, no modo padrão gerenciado pelo sistema, cresce e encolhe conforme a demanda e normalmente ocupa vários gigabytes.",
            "Somados, os dois abocanham uma fatia bem visível de um SSD de 256 GB, e é por isso que costumam ser a primeira coisa que aparece quando alguém analisa o disco. O Windows não os mantém por capricho: o arquivo de paginação é uma rede de proteção contra a falta de memória, e o arquivo de hibernação permite economizar bateria e acelerar a inicialização.",
            "Se você tentar apagar qualquer um deles pelo Explorador de Arquivos, vai receber um erro de acesso negado, porque o Windows bloqueia os dois enquanto está funcionando. A abordagem correta nunca é atacar os arquivos diretamente, e sim desativar ou redimensionar o recurso por trás deles usando as próprias ferramentas do Windows, como explicamos nas próximas seções.",
          ],
        },
        {
          title: "Como remover o hiberfil.sys desativando a hibernação",
          content: [
            "A única forma segura de apagar o hiberfil.sys é desativar a hibernação. Clique com o botão direito no botão Iniciar e abra o Terminal (Administrador) no Windows 11 ou o Windows PowerShell (Administrador) no Windows 10. Depois digite powercfg -h off e pressione Enter; o comando termina sem exibir nada e o hiberfil.sys é removido na mesma hora, sem precisar reiniciar.",
            "Essa mudança tem dois custos: a opção Hibernar some do menu de energia e a inicialização rápida é desligada, então as inicializações a frio podem demorar um pouco mais. Em desktops quase ninguém sente falta desses recursos; se você usa notebook e conta com a hibernação para preservar a sessão quando a bateria acaba, pense duas vezes. Se mudar de ideia, powercfg -h on devolve tudo.",
            "Também existe um meio-termo: rodar powercfg /h /type reduced no mesmo terminal de administrador reduz o arquivo para cerca de metade do tamanho e mantém a inicialização rápida, e você abre mão apenas da hibernação completa. Para quem usa notebook e quer ganhar espaço sem perder inicializações rápidas, é um acordo bem razoável.",
          ],
        },
        {
          title: "Redimensionar ou desativar o pagefile.sys?",
          content: [
            "Nosso conselho curto: não desative o pagefile.sys. Mesmo com bastante RAM, o Windows e muitos aplicativos contam com a existência de um arquivo de paginação; sem ele, programas podem fechar com erros de memória insuficiente assim que a RAM lota, e o Windows não consegue gravar um despejo de memória depois de uma falha, o que dificulta muito o diagnóstico. Os poucos gigabytes ganhos raramente compensam esses riscos.",
            "Se mesmo assim quiser conferir ou ajustar: pressione Win+R, digite sysdm.cpl e dê Enter, abra a guia Avançado e clique em Configurações na área Desempenho; em seguida, vá até a guia Avançado dessa janela e clique em Alterar na seção Memória virtual. Ao desmarcar “Gerenciar automaticamente o tamanho do arquivo de paginação de todas as unidades”, você pode definir um tamanho personalizado ou mover o arquivo para outra unidade; as mudanças passam a valer depois de reiniciar.",
            "Se a unidade do sistema estiver mesmo apertada, definir um tamanho personalizado fixo e moderado ou mover o arquivo de paginação para um segundo disco é muito mais seguro do que escolher “Sem arquivo de paginação”. A não ser que você tenha um motivo específico, a configuração certa para a maioria das pessoas é a padrão: tamanho gerenciado pelo sistema.",
          ],
        },
        {
          title: "Formas mais seguras de recuperar gigabytes de espaço",
          content: [
            "Antes de espremer a memória virtual, olhe onde está a bagunça de verdade: arquivos temporários, caches de navegador, downloads de meses atrás e uma Lixeira cheia costumam somar tanto espaço quanto o próprio hiberfil.sys. As ferramentas nativas do Windows ajudam: o Sensor de Armazenamento, em Configurações, Sistema, Armazenamento, apaga arquivos temporários automaticamente, e a clássica Limpeza de Disco abre com o comando cleanmgr.",
            "Em vez de fazer cada uma dessas limpezas na mão, o recurso Acelerar (Speed Up) do Disk Mop apaga downloads antigos, cache do sistema, cache do navegador e Lixeira em um único clique. O limpador de cache dos navegadores (Browser Cache Cleaner) trata Chrome, Firefox e Edge separadamente, e o limpador de downloads (Downloads Cleaner) organiza por categoria os arquivos da pasta Downloads, para você ver de relance o que dá para remover com segurança.",
            "Com a limpeza agendada (Scheduled Cleanup), você cria tarefas de manutenção semanais ou mensais e a bagunça nunca volta ao tamanho de antes. Limpezas pequenas e frequentes vencem a grande faxina heroica e mantêm o disco respirando sem encostar em um único arquivo de sistema.",
          ],
        },
        {
          title: "Descubra o que está realmente consumindo o seu disco",
          content: [
            "O pagefile.sys e o hiberfil.sys viram alvo porque são dois arquivos grandes e visíveis, mas na maioria das unidades o espaço some em vídeos esquecidos, instaladores antigos, imagens ISO e fotos duplicadas. Caçar tudo isso pasta por pasta no Explorador de Arquivos pode levar horas.",
            "A análise de disco (Disk Analysis) do Disk Mop varre a unidade e monta um treemap visual que mostra as maiores pastas de relance. O localizador de arquivos grandes (Large File Finder) lista todos os arquivos acima de 500 MB, e o detector de duplicados (Duplicate Detector) compara os arquivos por hash SHA-256, então fotos, vídeos e documentos idênticos são identificados com certeza, e não no chute, sem risco de apagar um arquivo que apenas parece igual.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro é um pagamento único de 19,90 $ com licença vitalícia. Desativar a hibernação libera alguns gigabytes uma única vez; saber o que realmente enche o seu disco continua rendendo espaço mês após mês.",
          ],
        },
      ],
      verdict: [
        "Resumindo: o hiberfil.sys pode ser removido com segurança usando powercfg -h off, com o custo de perder a hibernação e a inicialização rápida. O pagefile.sys não deve ser apagado e fica melhor no tamanho gerenciado pelo sistema, e o swapfile.sys é pequeno demais para valer o esforço. Antes de pensar em mexer em arquivos de sistema, é sempre mais inteligente descobrir para onde o seu espaço em disco está indo de verdade.",
        "É exatamente aí que o Disk Mop entra: a análise de disco e o localizador de arquivos grandes mostram o que realmente enche a unidade, o Acelerar apaga downloads antigos, caches e a Lixeira em um clique, e a limpeza agendada impede que o espaço recuperado suma outra vez. É o jeito mais fácil de reconquistar os mesmos gigabytes sem colocar um único arquivo de sistema em risco.",
      ],
      ctaText: "Recupere seu espaço em disco com segurança usando o Disk Mop",
    },
    ja: {
      title: "pagefile.sysとhiberfil.sysは削除していい？安全な対処法",
      metaDescription:
        "pagefile.sysとhiberfil.sysは削除できるのでしょうか。Windowsに隠れたこの2つの巨大ファイルの役割と、休止状態の設定で安全に減らし、数ギガバイトの空き容量を取り戻す手順を解説します。",
      subtitle: "Windowsに潜む2つの巨大な隠しファイルを安全に扱うガイド",
      intro: [
        "pagefile.sysとhiberfil.sysは削除できるのでしょうか。短い答えはこうです。hiberfil.sysは管理者権限のターミナルでpowercfg -h offを実行すれば安全に取り除け、Windowsがその場でファイルを削除します。一方のpagefile.sysはWindowsの仮想メモリファイルで、削除はおすすめできません。システム管理サイズのままにしておくのが安全な選択です。",
        "この2つのファイルは合計で10〜20 GBをゆうに超えることも珍しくありませんが、通常のファイルのように削除することはできません。Windowsは動作中、どちらのファイルもロックしているからです。この記事では、それぞれのファイルが実際に何をしているのか、休止状態を無効にしてhiberfil.sysを安全に取り除く方法、pagefile.sysを残しておくべき理由、そして同じ数ギガバイトをもっと低いリスクで取り戻す方法を順番に説明します。",
      ],
      sections: [
        {
          title: "pagefile.sys、hiberfil.sys、swapfile.sysとは何か",
          content: [
            "そもそもpagefile.sysとは何でしょうか。これはWindowsの仮想メモリファイルで「ページ ファイル」とも呼ばれ、C:ドライブの直下に置かれています。メモリが足りなくなってくると、Windowsは使用頻度の低いメモリページをこのファイルへ移し、アプリを強制終了させずに動かし続けます。さらに、システムがクラッシュした際のメモリダンプもこのファイルを通して書き込まれるため、ブルースクリーンの原因を突き止めるうえでも欠かせません。",
            "hiberfil.sysは休止状態のためのファイルです。PCを休止状態にすると、メモリの内容がこのファイルに保存され、復帰したときに開いていたウィンドウがそのまま戻ってきます。Windows 10と11の「高速スタートアップ」もこのファイルを利用しており、シャットダウン時にシステムのセッションをhiberfil.sysへ書き出して、次回の起動を速くしています。",
            "swapfile.sysはこの一家の末っ子です。Microsoft Store（UWP）アプリの中断と再開に使われ、通常は大きくても数百メガバイト程度にしかなりません。3つとも隠しファイルであり、保護されたシステムファイルでもあります。表示するには、エクスプローラーでフォルダー オプションを開き、表示タブで「保護されたオペレーティング システム ファイルを表示しない」のチェックを外し、隠しファイルの表示を有効にします。",
          ],
        },
        {
          title: "隠しシステムファイルがこれほど大きくなる理由",
          content: [
            "どちらのファイルもサイズは搭載メモリの量に直結しています。hiberfil.sysはメモリの内容をまるごと保存する必要があるため、通常は搭載RAMの40パーセントから同容量までの大きさになります。16 GBのPCなら、このファイルだけで6 GBを超えることもあるわけです。pagefile.sysは既定のシステム管理モードで必要に応じて拡大縮小し、多くの環境で数ギガバイトを占めています。",
            "2つ合わせると256 GBのSSDでは無視できない割合になります。ディスクの中身を調べたときに真っ先に目に留まるのがこの2つなのは、そのためです。とはいえWindowsが意味もなく置いているわけではありません。ページ ファイルはメモリ不足に対する安全網であり、休止状態のファイルはバッテリーの節約と起動の高速化の両方を支えています。",
            "エクスプローラーからどちらかを削除しようとすると、アクセスが拒否されましたというエラーになります。Windowsが動作中に両方をロックしているためです。正しい進め方は、ファイルそのものを狙うことではなく、次の各セクションで説明するとおり、Windows標準の設定でその機能自体を無効にしたり、サイズを変更したりすることです。",
          ],
        },
        {
          title: "休止状態を無効にしてhiberfil.sysを削除する手順",
          content: [
            "hiberfil.sysを安全に削除する唯一の方法は、休止状態を無効にすることです。スタートボタンを右クリックし、Windows 11ならターミナル（管理者）、Windows 10ならWindows PowerShell（管理者）を開きます。続いてpowercfg -h offと入力してEnterキーを押します。コマンドは何も表示せずに完了し、hiberfil.sysは再起動なしで即座に消えます。",
            "この変更には2つの代償があります。電源メニューから休止状態の項目が消え、高速スタートアップも無効になるため、コールドブートが少し遅くなる可能性があります。デスクトップPCではどちらも惜しまれることはほとんどありませんが、ノートPCでバッテリー切れの前にセッションを保存する用途で休止状態を頼りにしているなら、よく考えてから実行してください。気が変わった場合はpowercfg -h onですべて元に戻せます。",
            "中間の選択肢もあります。同じ管理者ターミナルでpowercfg /h /type reducedを実行すると、ファイルサイズがおよそ半分になり、高速スタートアップは維持されたままです。手放すのは完全な休止状態だけです。空き容量も起動の速さも諦めたくないノートPCユーザーには、現実的な落としどころになります。",
          ],
        },
        {
          title: "pagefile.sysはサイズ変更すべきか、無効にすべきか",
          content: [
            "結論から言えば、pagefile.sysは無効にしないでください。メモリに余裕があっても、Windowsも多くのアプリケーションもページ ファイルが存在することを前提にしています。ページ ファイルがないと、メモリを使い切った時点でプログラムがメモリ不足のエラーで落ちることがあり、クラッシュ後にメモリダンプを書き出せないため原因の切り分けも難しくなります。得られる数ギガバイトが、これらのリスクに見合うことはまずありません。",
            "それでも状態を確認したり調整したりしたい場合は、Win+Rを押してsysdm.cplと入力しEnterキーを押します。詳細設定タブを開き、パフォーマンスの「設定」をクリックし、開いたウィンドウでもう一度詳細設定タブに切り替えて、仮想メモリの「変更」を押します。「すべてのドライブのページング ファイルのサイズを自動的に管理する」のチェックを外せば、カスタムサイズを指定したり、ファイルを別のドライブへ移したりできます。変更は再起動後に反映されます。",
            "システムドライブが本当に手狭なら、控えめな固定サイズを指定するか、ページ ファイルを2台目のドライブへ移すほうが、「ページング ファイルなし」を選ぶよりはるかに安全です。特別な理由がない限り、ほとんどの人にとって正しい設定は既定のまま、つまりシステム管理サイズです。",
          ],
        },
        {
          title: "数ギガバイトをもっと安全に取り戻す方法",
          content: [
            "仮想メモリを削る前に、本当の散らかりに目を向けてみてください。一時ファイル、ブラウザーのキャッシュ、何か月も前のダウンロード、そして中身が残ったままのごみ箱を合計すると、hiberfil.sysと同じくらいの容量になることも珍しくありません。Windows標準の機能も役立ちます。設定、システム、ストレージにあるストレージ センサーは一時ファイルを自動で片付けてくれますし、従来のディスク クリーンアップはcleanmgrコマンドで開けます。",
            "こうした片付けを一つずつ手作業でこなす代わりに、Disk Mopの高速化（Speed Up）機能を使えば、古いダウンロード、システム キャッシュ、ブラウザー キャッシュ、ごみ箱をワンクリックでまとめて整理できます。ブラウザー キャッシュ クリーナー（Browser Cache Cleaner）はChrome、Firefox、Edgeを個別に扱い、ダウンロード クリーナー（Downloads Cleaner）はダウンロード フォルダーのファイルをカテゴリーごとに分類するので、安全に消せるものが一目で分かります。",
            "スケジュール クリーンアップ（Scheduled Cleanup）で週次または月次のメンテナンス タスクを組んでおけば、散らかりが元の量まで戻ることはありません。一度きりの大掃除よりも小さな片付けを定期的に続けるほうが効果的で、システムファイルには一切触れずにディスクの余裕を保てます。",
          ],
        },
        {
          title: "ディスクを本当に埋めているものを突き止める",
          content: [
            "pagefile.sysとhiberfil.sysが標的にされやすいのは、大きくて目につく2つのファイルだからです。しかし多くのドライブでは、実際の容量は忘れられた動画、古いインストーラー、ISOイメージ、重複した写真に食われています。これらをエクスプローラーでフォルダーごとに探して回ると、何時間もかかりかねません。",
            "Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンし、容量の大きいフォルダーが一目で分かる視覚的なツリーマップとして表示します。大容量ファイル検索（Large File Finder）は500 MBを超えるファイルをすべて一覧にし、重複ファイル検出（Duplicate Detector）はSHA-256のハッシュでファイルを比較するため、同一の写真、動画、書類を推測ではなく確実に特定できます。見た目が似ているだけの別のファイルを誤って削除する心配もありません。",
            "Disk Mopは無料でダウンロードでき、機能を絞った状態で試せます。Pro版は買い切り19.90ドルで、永続ライセンスが付属します。休止状態を無効にして得られる数ギガバイトは一度きりですが、ディスクを本当に埋めているものが分かる環境は、毎月のように空き容量を返してくれます。",
          ],
        },
      ],
      verdict: [
        "まとめると、hiberfil.sysはpowercfg -h offで安全に削除できますが、その代わりに休止状態と高速スタートアップを手放すことになります。pagefile.sysは削除すべきではなく、システム管理サイズのままにしておくのが最善です。swapfile.sysは気にするには小さすぎます。そもそもシステムファイルに手を伸ばす前に、ディスクの容量が実際にどこへ消えているのかを確かめるほうが、いつでも賢明です。",
        "そこで役立つのがDisk Mopです。ディスク分析と大容量ファイル検索がドライブを本当に埋めているものを示し、高速化が古いダウンロード、キャッシュ、ごみ箱をワンクリックで片付け、スケジュール クリーンアップが取り戻した空き容量を守り続けます。システムファイルを1つも危険にさらすことなく、同じ数ギガバイトを取り戻す最も簡単な方法です。",
      ],
      ctaText: "Disk Mopでディスク容量を安全に取り戻す",
    },
  },
};
