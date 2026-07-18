import type { Article } from '../types';

export const cDriveFullForNoReason: Article = {
  slug: 'c-drive-full-for-no-reason',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-06-05',
  readingTime: 8,
  content: {
    tr: {
      title: 'C Diski Sebepsiz Doluyor mu? Windows 10/11 için 8 Çözüm',
      metaDescription:
        'C diski sebepsiz doluyor mu? hiberfil.sys, sayfa dosyası, geri yükleme noktaları ve AppData önbelleklerinin kapladığı alanı görün, adım adım yer açın.',
      subtitle: 'Sistem diskinizi yiyen gizli dosyaları önce teşhis edip sonra güvenle temizleme rehberi',
      intro: [
        'C diski sebepsiz doluyor gibi görünüyorsa, alanı neredeyse her zaman Windows\'un sizden gizlediği dosyalar kaplıyordur: hazırda bekletme dosyası hiberfil.sys, sayfa dosyası pagefile.sys, sistem geri yükleme noktaları ve AppData klasöründeki gigabaytlarca uygulama önbelleği. Dosya Gezgini bu korumalı sistem dosyalarını varsayılan olarak göstermez; bu yüzden görünen klasörlerin toplamı, Windows\'un dolu gösterdiği alandan çok daha az çıkar. Çözüm, önce teşhis koymak — diski gerçekte neyin kapladığını görmek — ve ancak ondan sonra silmeye başlamaktır.',
        'C diskinin sürekli dolması sinir bozucudur çünkü suçlular sessizce büyür: Windows güncellemeleri artık dosyalar bırakır, uygulamalar önbelleklerini şişirir ve tek başına hazırda bekletme dosyası, takılı RAM\'inizin önemli bir bölümü kadar yer kaplayabilir. Bu rehberde sekiz pratik çözüm bulacaksınız: gizli dosyaları görünür yapmak, disk kullanımını görsel olarak haritalamak, hiberfil.sys\'i küçültmek veya kaldırmak, sayfa dosyasını doğru boyutlandırmak, geri yükleme noktalarını sınırlamak, geçici dosyaları ve önbellekleri temizlemek, AppData ile İndirilenler klasörlerini düzenlemek ve son olarak tüm rutini otomatikleştirmek.',
      ],
      sections: [
        {
          title: 'C Diski Neden Sebepsiz Doluyor?',
          content: [
            'C diskim neden dolu diye soranlara dürüst cevap şudur: disk asla sebepsiz dolmaz, sebepler yalnızca görünmezdir. Windows, hiberfil.sys ve pagefile.sys gibi çekirdek dosyaları korumalı işletim sistemi dosyası olarak işaretler ve Dosya Gezgini bunları varsayılan olarak gizler. Geri yükleme noktaları gizli System Volume Information klasöründe, uygulama önbellekleri ise yine gizli olan AppData içinde durur. Görünen tüm klasörleri seçip toplam boyutlarına bakarsanız, çoğu zaman onlarca gigabaytın hesapta olmadığını görürsünüz.',
            'Resmin gizli tarafını görmek için Dosya Gezgini\'nde gizli öğeleri açın: Windows 11\'de Görünüm menüsünden Göster ve ardından Gizli öğeler seçeneğini işaretleyin; Windows 10\'da Görünüm sekmesindeki Gizli öğeler kutusunu işaretleyin. Korumalı sistem dosyalarını da görmek için Klasör Seçenekleri\'ni açın, Görünüm sekmesine geçin ve korumalı işletim sistemi dosyalarını gizleyen seçeneğin işaretini kaldırın. Şimdilik sadece bakın, silmeyin — bu dosyaların bir kısmı hayati önemdedir ve her birini güvenle küçültmenin yolu aşağıdaki bölümlerde anlatılıyor.',
            'Diskin zamanla neden dolmaya devam ettiğini anlamak da faydalıdır. Windows güncellemeleri gigabaytlarca veri indirir ve bir süre geri alma verisi saklar, tarayıcılar ve uygulamalar önbelleklerini sürekli büyütür, silinen her dosya da önce yine C diskinde duran Geri Dönüşüm Kutusu\'na gider. Bunların hiçbiri arıza değildir — düzenli bakım gerektiren normal bir davranıştır.',
          ],
        },
        {
          title: 'Alanı Gerçekte Neyin Kapladığını Görün',
          content: [
            'Herhangi bir şeyi silmeden önce bir harita çıkarın. Windows\'un yerleşik özeti Ayarlar, Sistem, Depolama altındadır: C diskini Uygulamalar ve özellikler, Geçici dosyalar, Sistem ve ayrılmış gibi kategorilere böler ve bir kategoriye tıklayınca daha fazla ayrıntı gösterir. İyi bir ilk duraktır ancak kategoriler geniştir — Diğer veya Sistem, tam da bulmanız gereken klasörleri gizleyebilir ve görünüm tek tek dosyalara inemez.',
            'Görsel bir treemap bu soruyu çok daha hızlı yanıtlar. Disk Mop\'un disk analizi (Disk Analysis), sürücüyü tarayıp her klasörü kapladığı alanla orantılı bir blok olarak çizer; böylece şişmiş bir önbellek klasörü veya unutulmuş bir video arşivi bir kategorinin içinde saklanmak yerine anında göze çarpar. Büyük dosya bulucu (Large File Finder) da 500 MB\'ın üzerindeki tüm dosyaları listeleyerek en hızlı kazanımların adresini gösterir.',
            'Hangi aracı kullanırsanız kullanın tek bir kurala uyun: ne olduğunu bilmediğiniz bir dosyayı asla silmeyin. Büyük bir dosya C:\\Windows veya System Volume Information içindeyse önce ne işe yaradığını öğrenin — aşağıdaki bölümler, büyük sistem dosyalarını elle silmek yerine güvenle küçültmenin yolunu anlatıyor.',
          ],
        },
        {
          title: 'Gizli Alan Yiyiciler: hiberfil.sys, Sayfa Dosyası ve Geri Yükleme Noktaları',
          content: [
            'Çoğu sistemdeki en büyük sürpriz, Windows\'un hazırda bekletme ve hızlı başlangıç için kullandığı hiberfil.sys dosyasıdır. hiberfil.sys boyutu takılı RAM ile orantılıdır; 16 veya 32 GB bellekli bir makinede sessizce gigabaytlarca alan kaplayabilir. Hazırda bekletmeyi hiç kullanmıyorsanız dosyayı kaldırabilirsiniz: Komut İstemi\'ni yönetici olarak açın ve powercfg /h off komutunu çalıştırın — dosya anında silinir. Bunun hızlı başlangıcı da kapattığını unutmayın; hızlı başlangıç kalsın istiyorsanız dosyayı silmek yerine küçültmek için powercfg /h /type reduced komutunu kullanın.',
            'Sayfa dosyası pagefile.sys, Windows\'un RAM\'i diske doğru genişlettiği alandır ve o da birkaç gigabayt tutabilir. Bu dosyayı silmeyin veya devre dışı bırakmayın — Windows kararlılık için ona ihtiyaç duyar. Boyutunu gözden geçirmek isterseniz Win+R tuşlarına basın, sysdm.cpl yazın, Gelişmiş sekmesini açın, Performans altındaki Ayarlar\'a tıklayın, tekrar Gelişmiş\'e geçin ve Sanal bellek altındaki Değiştir\'i seçin. Çoğu kullanıcı için en iyi ayar, boyutu Windows\'un otomatik yönetmesine izin vermektir.',
            'Sistem geri yükleme noktaları faydalı bir sigortadır ancak varsayılan olarak diskin hatırı sayılır bir dilimini ayırabilir. Aynı sysdm.cpl penceresinde Sistem Koruması sekmesine geçin, C diskini seçin ve kullanabilecekleri en fazla disk alanını düşürmek için Yapılandır\'a tıklayın. Eski noktaları tek seferde silmek için Disk Temizleme\'yi yönetici olarak çalıştırın, Sistem dosyalarını temizle\'ye tıklayın, Diğer Seçenekler sekmesini açın ve Sistem Geri Yükleme ve Gölge Kopyalar altındaki temizleme düğmesini kullanın — en son nokta hariç tüm geri yükleme noktaları silinir.',
          ],
        },
        {
          title: 'Geçici Dosyaları ve Uygulama Önbelleklerini Temizleyin',
          content: [
            'C diskinde yer açmanın klasik cevabı geçici dosyalardır ve Windows bunları temizlemek için iki yerleşik yol sunar. Ayarlar, Sistem, Depolama altında Geçici dosyalar bölümünü açın, onay kutularını gözden geçirin ve ihtiyacınız olmayanları kaldırın — Windows Update temizleme ve Teslim İyileştirme dosyaları genellikle en büyük kalemlerdir. Daha eski Disk Temizleme aracı (cleanmgr) aynı işi yapar ve Sistem dosyalarını temizle düğmesi ek kategorilerin kilidini açar.',
            'Geçici klasörleri doğrudan da boşaltabilirsiniz: Win+R tuşlarına basın, %temp% yazın ve açılan klasörün içeriğini silin; ardından aynısını C:\\Windows\\Temp için tekrarlayın. O anda kullanımda olan dosyalar silinmeyi reddeder — onları atlamanız yeterli. Ayrıca her tarayıcı yüzlerce megabaytı bulan kendi önbelleğini tutar ve normalde her tarayıcının içinden ayrı ayrı temizlenmesi gerekir.',
            'Disk Mop tüm bunları tek adıma indirir. Önbellek temizleyici (Cache Cleaner) sistem ve uygulama önbelleklerini birlikte tarar, tarayıcı önbelleği temizleyici Chrome, Firefox ve Edge\'i tek geçişte kapsar, Speed Up düğmesi ise eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve Geri Dönüşüm Kutusu\'nu tek tıkla temizler — yukarıdaki manuel turun sonucunu beş ayrı yere uğramadan verir.',
          ],
        },
        {
          title: 'AppData ve İndirilenler Klasörlerini Kontrol Edin',
          content: [
            'Sistem dosyalarını eledikten sonra alan kaplayan AppData ile karşılaştıysanız yalnız değilsiniz: neredeyse her uygulama verilerini ve önbelleklerini bu gizli klasörde saklar. En büyük bölümünü açmak için Win+R tuşlarına basıp %localappdata% yazın. Sohbet, müzik ve video uygulamaları sık rastlanan suçlulardır — her birinin önbellek alt klasörü birkaç gigabayta şişebilir. Bir uygulamanın klasörü içindeki Cache klasörünü boşaltmak güvenlidir; ancak uygulama kuruluyken tüm klasörünü silmeyin, artık kullanmıyorsanız Ayarlar, Uygulamalar üzerinden düzgün şekilde kaldırın.',
            'İndirilenler klasörü ise diğer sessiz biriktiricidir. Kurulum dosyaları, ZIP arşivleri ve disk kalıpları genellikle tam bir kez kullanılır ve sonra unutulur; İndirilenler C diskinde durduğu için hepsi sistem alanınızdan düşer. Klasörü boyuta göre sıralayın, gerçekten gerekenleri tutup kalanını silin — ve dosyaların Geri Dönüşüm Kutusu boşaltılana kadar tam olarak gitmediğini unutmayın.',
            'Disk Mop\'un indirilenler temizleyicisi (Downloads Cleaner), İndirilenler klasöründeki eski dosyaları kategorilere ayırarak grup halinde temizlemenizi sağlar; yinelenen dosya dedektörü (Duplicate Detector) ise SHA-256 karmaları kullanarak diske dağılmış özdeş fotoğraf, video ve belge kopyalarını bulur — kopyalar saf alan israfıdır ve tek kopyaya indirmek her zaman güvenlidir.',
          ],
        },
        {
          title: 'C Diskini Otomatik Olarak Temiz Tutun',
          content: [
            'Diskin yeniden dolmasını engelleyen bir şey yoksa yukarıdaki her çözüm geçicidir. Windows bunun için Depolama Alanı Algılayıcısı\'nı (Storage Sense) sunar: Ayarlar, Sistem, Depolama altında etkinleştirdiğinizde geçici dosyaları otomatik siler, Geri Dönüşüm Kutusu\'nu belirli aralıklarla boşaltır ve isteğe bağlı olarak İndirilenler\'deki eski dosyaları da temizleyebilir. Açmaya değer; ancak uygulama ve tarayıcı önbelleklerine dokunmaz.',
            'Disk Mop\'un zamanlanmış temizliği (Scheduled Cleanup) bir adım öteye gider: haftalık veya aylık bir görev kurduğunuzda önbellekleri, geçici dosyaları ve Geri Dönüşüm Kutusu\'nu otomatik temizler; sistem sağlığı puanı (System Health Score) da diskin ne zaman ilgi istediğini tek bakışta gösterir. C diskinin yaklaşık %15-20\'sini boş tutmayı hedefleyin — güncellemeler ve sanal bellek için yeterli alan kaldığında Windows akıcı kalır ve disk bir daha sebepsiz doluyormuş gibi görünmez.',
          ],
        },
      ],
      verdict: [
        'Sebepsiz doluyor gibi görünen bir C diski aslında görünmez dosyalarla dolu bir disktir: hiberfil.sys, sayfa dosyası, geri yükleme noktaları, geçici dosyalar ve AppData önbellekleri. Sekiz çözümü sırayla uygulayın — gizli dosyaları gösterin, alanı görsel olarak haritalayın, hazırda bekletme dosyasını küçültün, sayfa dosyasını Windows\'a bırakın, geri yükleme noktalarını sınırlayın, geçici dosyaları ve önbellekleri temizleyin, AppData ile İndirilenler\'i düzenleyin ve rutini otomatikleştirin — gizem, dağınıklıkla birlikte ortadan kalkacaktır.',
        'Disk Mop tüm bu iş akışını tek uygulamada toplar: disk analizi alanın nereye gittiğini gösterir, önbellek temizleyici ve Speed Up alanı geri kazanır, indirilenler temizleyici ve yinelenen dosya dedektörü unuttuğunuz klasörlerle ilgilenir, zamanlanmış temizlik de diski o günden sonra temiz tutar. $9.90 karşılığında tek seferlik ödemeyle ömür boyu lisans sunar; ücretsiz sürümle yükseltmeden önce deneyebilirsiniz.',
      ],
      ctaText: 'Disk Mop ile C diskinizde yer açın',
    },
    en: {
      title: 'C Drive Full for No Reason? 8 Fixes for Windows 10/11',
      metaDescription:
        'C drive full for no reason? Learn what hiberfil.sys, the page file, restore points and AppData really consume, and free up space on Windows 10/11 today.',
      subtitle: 'A diagnose-first guide to finding and removing the hidden files that eat your system drive',
      intro: [
        'If your C drive is full for no reason, the space is almost always being used by files Windows hides from you: the hibernation file hiberfil.sys, the page file pagefile.sys, System Restore points and gigabytes of application caches inside the AppData folder. File Explorer does not show these protected system files by default, so your visible folders add up to far less than what Windows reports as used. The solution is to diagnose first — see exactly what occupies the drive — and only then start deleting.',
        'A C drive that keeps filling up is frustrating because the culprits grow silently: Windows updates leave leftovers behind, apps expand their caches and the hibernation file alone can consume a sizeable share of your installed RAM. In this guide you will find eight practical fixes: reveal hidden files, map your disk usage visually, shrink or remove hiberfil.sys, right-size the page file, limit restore points, clear temporary files and caches, tidy up AppData and Downloads, and finally automate the whole routine so the problem never comes back.',
      ],
      sections: [
        {
          title: 'Why Your C Drive Fills Up for No Reason',
          content: [
            'When people ask why is my C drive full, the honest answer is that it is never full for no reason — the reasons are just invisible. Windows marks core files such as hiberfil.sys and pagefile.sys as protected operating system files, and File Explorer hides them by default. Restore points live in a hidden System Volume Information folder, and application caches sit in AppData, which is also hidden. Select all your visible folders, check their combined size, and you will often find tens of gigabytes unaccounted for.',
            'To see the hidden part of the picture, open File Explorer and enable hidden items: on Windows 11 use the View menu, choose Show and tick Hidden items; on Windows 10 tick Hidden items on the View tab. To reveal protected system files as well, open Folder Options, switch to the View tab and untick the option that hides protected operating system files. Look but do not delete yet — some of these files are essential, and the safe way to handle each one is covered in the sections below.',
            'It also helps to understand why the drive keeps filling up over time. Windows updates download several gigabytes and keep rollback data for a while, browsers and apps grow their caches continuously, and every deleted file first lands in the Recycle Bin, which still lives on the C drive. None of this is a malfunction — it is normal behavior that simply needs regular housekeeping.',
          ],
        },
        {
          title: 'See What Is Actually Taking Up Space',
          content: [
            'Before deleting anything, get a map. Windows has a built-in overview under Settings, System, Storage: it breaks the C drive down into categories such as Apps and features, Temporary files and System and reserved, and clicking a category shows more detail. It is a good first stop, but the categories are broad — Other or System can hide exactly the folders you need to find, and the view cannot drill down to individual files.',
            'A visual treemap answers the question much faster. Disk Mop\'s Disk Analysis scans the drive and draws every folder as a block sized by how much space it takes, so a bloated cache folder or a forgotten video archive jumps out immediately instead of hiding inside a category. The Large File Finder complements this by listing every file over 500 MB, which is usually where the fastest wins are.',
            'Whichever tool you use, follow one rule: never delete a file you cannot identify. If a large file sits inside C:\\Windows or System Volume Information, look up what it does first — the sections below explain how to shrink the big system files safely instead of deleting them by hand.',
          ],
        },
        {
          title: 'Hidden Space Hogs: hiberfil.sys, Page File and Restore Points',
          content: [
            'The single biggest surprise on most systems is hiberfil.sys, the file Windows uses for hibernation and Fast Startup. The hiberfil.sys size is proportional to your installed RAM, so on a machine with 16 or 32 GB of memory it can quietly consume many gigabytes of the C drive. If you never use hibernation, you can remove it: open Command Prompt as administrator and run powercfg /h off — the file disappears immediately. Keep in mind this also turns off Fast Startup; if you want to keep that, run powercfg /h /type reduced instead to shrink the file rather than delete it.',
            'The page file, pagefile.sys, is where Windows extends your RAM onto disk, and it can also occupy several gigabytes. Do not delete or disable it — Windows needs it for stability. If you want to review its size, press Win+R, type sysdm.cpl, open the Advanced tab, click Settings under Performance, open Advanced again and choose Change under Virtual memory. For most users the best setting is to let Windows manage the size automatically.',
            'System Restore points are useful insurance, but by default they can reserve a noticeable slice of the drive. In the same sysdm.cpl window, switch to the System Protection tab, select the C drive and click Configure to lower the maximum disk space they may use. To remove old points in one go, run Disk Cleanup as administrator, click Clean up system files, open the More Options tab and use the clean-up button under System Restore and Shadow Copies — it deletes every restore point except the most recent one.',
          ],
        },
        {
          title: 'Clean Temporary Files and App Caches',
          content: [
            'Temporary files are the classic answer when you need to free up space on C drive, and Windows gives you two built-in ways to clear them. Under Settings, System, Storage, open Temporary files, review the checkboxes and remove what you do not need — Windows Update Cleanup and Delivery Optimization files are usually the largest entries. The older Disk Cleanup tool (run cleanmgr) does the same job, and its Clean up system files button unlocks additional categories.',
            'You can also empty the temp folders directly: press Win+R, type %temp% and delete the contents of the folder that opens, then repeat with C:\\Windows\\Temp. Files that are currently in use will refuse to delete — just skip them. Each browser additionally keeps its own cache of hundreds of megabytes or more, which normally has to be cleared from inside every browser separately.',
            'Disk Mop condenses all of this into one step. The Cache Cleaner scans system and application caches together, the Browser Cache Cleaner covers Chrome, Firefox and Edge in a single pass, and the Speed Up button clears old downloads, system cache, browser cache and the Recycle Bin with one click — the same result as the manual round above, without visiting five different places.',
          ],
        },
        {
          title: 'Check the AppData and Downloads Folders',
          content: [
            'If you have ruled out system files and found AppData taking up space, you are in good company: nearly every application stores its data and caches in this hidden folder. Press Win+R and type %localappdata% to open the largest part of it. Chat, music and video apps are frequent offenders — their cache subfolders can swell to several gigabytes each. It is safe to empty a Cache folder inside an app\'s directory, but do not delete an application\'s whole folder while it is installed; if you no longer use the app, uninstall it properly under Settings, Apps.',
            'The Downloads folder is the other quiet accumulator. Installers, ZIP archives and disc images are usually needed exactly once and then forgotten, and because Downloads lives on the C drive, they all count against your system space. Sort the folder by size, keep what you genuinely need and delete the rest — then remember the files are not truly gone until the Recycle Bin is emptied.',
            'Disk Mop\'s Downloads Cleaner automates this review by categorizing old files in the Downloads folder so you can clear them in groups, and the Duplicate Detector uses SHA-256 hashes to find identical copies of photos, videos and documents scattered across the drive — duplicates are pure wasted space and are always safe to reduce to a single copy.',
          ],
        },
        {
          title: 'Keep the C Drive Clean Automatically',
          content: [
            'Every fix above is temporary if nothing prevents the drive from filling up again. Windows offers Storage Sense for this: under Settings, System, Storage you can enable it to delete temporary files automatically, empty the Recycle Bin on a schedule and optionally clean up old files in Downloads. It is worth switching on, though it does not touch application or browser caches.',
            'Disk Mop\'s Scheduled Cleanup goes further: set up a weekly or monthly task and it clears caches, temporary files and the Recycle Bin automatically, while the System Health Score shows at a glance when the drive needs attention. Aim to keep roughly 15-20% of the C drive free — with enough headroom for updates and virtual memory, Windows stays responsive and the drive stops feeling like it fills up for no reason.',
          ],
        },
      ],
      verdict: [
        'A C drive that seems full for no reason is really a drive full of invisible files: hiberfil.sys, the page file, restore points, temporary files and AppData caches. Work through the eight fixes in order — reveal hidden files, map the space visually, shrink the hibernation file, leave the page file to Windows, cap restore points, clear temporary files and caches, tidy AppData and Downloads, and automate the routine — and the mystery disappears along with the clutter.',
        'Disk Mop packs the whole workflow into one app: Disk Analysis shows where the space went, the Cache Cleaner and Speed Up reclaim it, the Downloads Cleaner and Duplicate Detector handle the folders you forget about, and Scheduled Cleanup keeps the drive clean from then on. It is a one-time purchase of $9.90 with a lifetime license, and the free version lets you try it before upgrading.',
      ],
      ctaText: 'Free up your C drive with Disk Mop',
    },
    de: {
      title: 'Laufwerk C ohne Grund voll? 8 Lösungen für Windows 10/11',
      metaDescription:
        'Laufwerk C ohne Grund voll? Erfahren Sie, wie viel Platz hiberfil.sys, Auslagerungsdatei und AppData belegen, und schaffen Sie Schritt für Schritt Platz.',
      subtitle: 'Erst diagnostizieren, dann löschen: die versteckten Dateien finden, die Ihr Systemlaufwerk füllen',
      intro: [
        'Wenn Laufwerk C scheinbar ohne Grund voll ist, belegen fast immer versteckte Dateien den Platz: die Ruhezustandsdatei hiberfil.sys, die Auslagerungsdatei pagefile.sys, Systemwiederherstellungspunkte und gigabyteweise App-Caches im AppData-Ordner. Der Datei-Explorer blendet diese geschützten Systemdateien standardmäßig aus, weshalb Ihre sichtbaren Ordner deutlich weniger ergeben, als Windows als belegt anzeigt. Die Lösung: erst diagnostizieren, was den Platz wirklich belegt — und erst dann löschen.',
        'In diesem Leitfaden finden Sie acht praktische Lösungen: versteckte Dateien einblenden, die Belegung visuell kartieren, hiberfil.sys verkleinern oder entfernen, die Auslagerungsdatei richtig dimensionieren, Wiederherstellungspunkte begrenzen, temporäre Dateien und Caches bereinigen, AppData und Downloads aufräumen und die Routine schließlich automatisieren, damit das Problem nicht zurückkehrt.',
      ],
      sections: [
        {
          title: 'Warum sich Laufwerk C scheinbar ohne Grund füllt',
          content: [
            'Ein Laufwerk füllt sich nie ohne Grund — die Gründe sind nur unsichtbar. Windows markiert Kerndateien wie hiberfil.sys und pagefile.sys als geschützte Systemdateien, Wiederherstellungspunkte liegen im versteckten Ordner System Volume Information, und App-Caches stecken im ebenfalls versteckten AppData-Ordner. Zählt man alle sichtbaren Ordner zusammen, fehlen deshalb oft Dutzende Gigabytes in der Rechnung.',
            'Um das vollständige Bild zu sehen, aktivieren Sie im Datei-Explorer die Anzeige ausgeblendeter Elemente: unter Windows 11 über das Menü Anzeigen und dann Einblenden, unter Windows 10 auf der Registerkarte Ansicht. In den Ordneroptionen können Sie zusätzlich das Ausblenden geschützter Systemdateien deaktivieren. Schauen Sie zunächst nur — einige dieser Dateien sind unverzichtbar, und die folgenden Abschnitte zeigen, wie Sie jede davon sicher verkleinern.',
            'Dass sich das Laufwerk immer wieder füllt, ist zudem normal: Windows-Updates hinterlassen Rückstände, Browser und Apps vergrößern ihre Caches laufend, und jede gelöschte Datei landet zunächst im Papierkorb, der ebenfalls auf Laufwerk C liegt. Das ist kein Defekt, sondern Alltag, der regelmäßige Pflege braucht.',
          ],
        },
        {
          title: 'Sehen Sie, was den Speicherplatz wirklich belegt',
          content: [
            'Verschaffen Sie sich vor dem Löschen eine Karte. Die integrierte Übersicht unter Einstellungen, System, Speicher teilt Laufwerk C in Kategorien wie Apps und Features, Temporäre Dateien sowie System auf. Das ist ein guter Anfang, doch die Kategorien sind grob — gerade die Ordner, die Sie suchen, verstecken sich oft hinter Sonstiges oder System, und bis zu einzelnen Dateien kommt die Ansicht nicht.',
            'Eine visuelle Treemap beantwortet die Frage schneller. Disk Mops Festplattenanalyse (Disk Analysis) zeichnet jeden Ordner als Block proportional zu seiner Größe, sodass ein aufgeblähter Cache-Ordner oder ein vergessenes Videoarchiv sofort ins Auge springt. Der Große-Dateien-Finder listet ergänzend alle Dateien über 500 MB auf — dort liegen meist die schnellsten Erfolge.',
            'Egal welches Werkzeug Sie nutzen: Löschen Sie nie eine Datei, die Sie nicht identifizieren können. Liegt eine große Datei in C:\\Windows oder System Volume Information, klären Sie zuerst ihre Funktion — die folgenden Abschnitte zeigen den sicheren Weg.',
          ],
        },
        {
          title: 'Versteckte Platzfresser: hiberfil.sys, Auslagerungsdatei und Wiederherstellungspunkte',
          content: [
            'Die größte Überraschung ist auf den meisten Systemen hiberfil.sys, die Datei für Ruhezustand und Schnellstart. Ihre Größe ist proportional zum eingebauten RAM und kann bei 16 oder 32 GB Arbeitsspeicher viele Gigabytes belegen. Wer den Ruhezustand nie nutzt, kann die Datei entfernen: die Eingabeaufforderung als Administrator öffnen und powercfg /h off ausführen. Beachten Sie, dass damit auch der Schnellstart deaktiviert wird; alternativ verkleinert powercfg /h /type reduced die Datei, statt sie zu löschen.',
            'Die Auslagerungsdatei pagefile.sys erweitert den RAM auf die Festplatte und belegt ebenfalls mehrere Gigabytes. Löschen oder deaktivieren Sie sie nicht — Windows braucht sie für die Stabilität. Zum Überprüfen drücken Sie Win+R, tippen sysdm.cpl, öffnen die Registerkarte Erweitert, klicken unter Leistung auf Einstellungen und wählen unter Virtueller Arbeitsspeicher die Option Ändern. Für die meisten Nutzer ist die automatische Verwaltung durch Windows die beste Wahl.',
            'Wiederherstellungspunkte sind eine nützliche Versicherung, reservieren aber standardmäßig einen spürbaren Teil des Laufwerks. Wechseln Sie im selben Fenster zur Registerkarte Computerschutz, wählen Sie Laufwerk C und klicken Sie auf Konfigurieren, um die maximale Belegung zu senken. Alte Punkte entfernen Sie gesammelt über die Datenträgerbereinigung: Systemdateien bereinigen, Registerkarte Weitere Optionen, dann die Bereinigung unter Systemwiederherstellung und Schattenkopien — alle Punkte außer dem neuesten werden gelöscht.',
          ],
        },
        {
          title: 'Temporäre Dateien und App-Caches bereinigen',
          content: [
            'Temporäre Dateien sind der Klassiker, wenn Sie auf Laufwerk C Platz schaffen wollen. Öffnen Sie unter Einstellungen, System, Speicher den Bereich Temporäre Dateien und entfernen Sie, was Sie nicht brauchen — die Windows Update-Bereinigung und Übermittlungsoptimierungsdateien sind meist die größten Posten. Die ältere Datenträgerbereinigung (cleanmgr) erledigt dasselbe; die Schaltfläche Systemdateien bereinigen schaltet weitere Kategorien frei.',
            'Die Temp-Ordner lassen sich auch direkt leeren: Win+R drücken, %temp% eingeben und den Inhalt des Ordners löschen, danach dasselbe für C:\\Windows\\Temp. Gerade genutzte Dateien lassen sich nicht löschen — überspringen Sie sie einfach. Zusätzlich führt jeder Browser einen eigenen Cache, der normalerweise in jedem Browser separat geleert werden muss.',
            'Disk Mop verdichtet all das auf einen Schritt: Der Cache-Bereiniger scannt System- und Anwendungs-Caches gemeinsam, der Browser-Cache-Bereiniger deckt Chrome, Firefox und Edge in einem Durchgang ab, und die Speed-Up-Funktion leert alte Downloads, Systemcache, Browsercache und Papierkorb mit einem Klick.',
          ],
        },
        {
          title: 'AppData- und Downloads-Ordner überprüfen',
          content: [
            'Fast jede Anwendung speichert Daten und Caches im versteckten AppData-Ordner. Drücken Sie Win+R und tippen Sie %localappdata%, um den größten Teil zu öffnen. Chat-, Musik- und Video-Apps sind häufige Platzfresser — ihre Cache-Unterordner wachsen auf mehrere Gigabytes an. Den Cache-Ordner einer App zu leeren ist sicher; löschen Sie aber nie den gesamten Ordner einer installierten Anwendung. Nicht mehr genutzte Programme deinstallieren Sie sauber unter Einstellungen, Apps.',
            'Der Downloads-Ordner ist der zweite stille Sammler: Installationsdateien, ZIP-Archive und Datenträgerabbilder werden meist genau einmal gebraucht und dann vergessen. Sortieren Sie den Ordner nach Größe, behalten Sie nur das Nötige — und denken Sie daran, dass der Platz erst nach dem Leeren des Papierkorbs wirklich frei wird.',
            'Disk Mops Downloads-Bereiniger kategorisiert alte Dateien im Downloads-Ordner für die gruppenweise Bereinigung, und der Duplikatfinder findet per SHA-256-Hash identische Kopien von Fotos, Videos und Dokumenten — Duplikate sind reine Platzverschwendung und lassen sich immer gefahrlos auf eine Kopie reduzieren.',
          ],
        },
        {
          title: 'Laufwerk C automatisch sauber halten',
          content: [
            'Jede Lösung bleibt vorübergehend, wenn nichts das erneute Volllaufen verhindert. Windows bietet dafür die Speicheroptimierung (Storage Sense): Unter Einstellungen, System, Speicher aktiviert, löscht sie temporäre Dateien automatisch, leert den Papierkorb nach Zeitplan und kann optional alte Downloads aufräumen. Anwendungs- und Browser-Caches deckt sie jedoch nicht ab.',
            'Disk Mops geplante Bereinigung (Scheduled Cleanup) geht weiter: Ein wöchentlicher oder monatlicher Task bereinigt Caches, temporäre Dateien und Papierkorb automatisch, und der System Health Score zeigt auf einen Blick, wann das Laufwerk Pflege braucht. Halten Sie etwa 15-20 % von Laufwerk C frei — dann bleibt Windows reaktionsschnell, und das Laufwerk wirkt nie wieder grundlos voll.',
          ],
        },
      ],
      verdict: [
        'Ein scheinbar grundlos volles Laufwerk C ist in Wahrheit voller unsichtbarer Dateien: hiberfil.sys, Auslagerungsdatei, Wiederherstellungspunkte, temporäre Dateien und AppData-Caches. Arbeiten Sie die acht Lösungen der Reihe nach durch — versteckte Dateien einblenden, Belegung kartieren, Ruhezustandsdatei verkleinern, Auslagerungsdatei Windows überlassen, Wiederherstellungspunkte begrenzen, Caches bereinigen, AppData und Downloads aufräumen, Routine automatisieren — und das Rätsel verschwindet zusammen mit dem Ballast.',
        'Disk Mop bündelt den gesamten Ablauf in einer App: Die Festplattenanalyse zeigt, wohin der Platz verschwunden ist, Cache-Bereiniger und Speed Up holen ihn zurück, Downloads-Bereiniger und Duplikatfinder kümmern sich um die vergessenen Ordner, und die geplante Bereinigung hält das Laufwerk dauerhaft sauber. Einmalig $9.90, lebenslange Lizenz — die kostenlose Version können Sie vorab testen.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Laufwerk C',
    },
  },
};
