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
        'Disk Mop tüm bu iş akışını tek uygulamada toplar: disk analizi alanın nereye gittiğini gösterir, önbellek temizleyici ve Speed Up alanı geri kazanır, indirilenler temizleyici ve yinelenen dosya dedektörü unuttuğunuz klasörlerle ilgilenir, zamanlanmış temizlik de diski o günden sonra temiz tutar. $19.90 karşılığında tek seferlik ödemeyle ömür boyu lisans sunar; ücretsiz sürümle yükseltmeden önce deneyebilirsiniz.',
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
        'Disk Mop packs the whole workflow into one app: Disk Analysis shows where the space went, the Cache Cleaner and Speed Up reclaim it, the Downloads Cleaner and Duplicate Detector handle the folders you forget about, and Scheduled Cleanup keeps the drive clean from then on. It is a one-time purchase of $19.90 with a lifetime license, and the free version lets you try it before upgrading.',
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
        'Disk Mop bündelt den gesamten Ablauf in einer App: Die Festplattenanalyse zeigt, wohin der Platz verschwunden ist, Cache-Bereiniger und Speed Up holen ihn zurück, Downloads-Bereiniger und Duplikatfinder kümmern sich um die vergessenen Ordner, und die geplante Bereinigung hält das Laufwerk dauerhaft sauber. Einmalig 19,90 $, lebenslange Lizenz — die kostenlose Version können Sie vorab testen.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz auf Laufwerk C',
    },
    fr: {
      title: "Le disque C se remplit sans raison ? 8 solutions pour Windows 10/11",
      metaDescription:
        "Disque C plein sans raison ? Voyez ce que consomment hiberfil.sys, le fichier d'échange, les points de restauration et AppData, et libérez de la place.",
      subtitle: "Un guide qui commence par le diagnostic pour trouver et supprimer les fichiers cachés qui saturent votre disque système",
      intro: [
        "Si votre disque C est plein sans raison apparente, l'espace est presque toujours occupé par des fichiers que Windows vous cache : le fichier de mise en veille prolongée hiberfil.sys, le fichier d'échange pagefile.sys, les points de restauration système et plusieurs gigaoctets de caches applicatifs dans le dossier AppData. L'Explorateur de fichiers n'affiche pas ces fichiers système protégés par défaut : la somme de vos dossiers visibles est donc bien inférieure à ce que Windows annonce comme occupé. La bonne méthode consiste à diagnostiquer d'abord — voir exactement ce qui remplit le disque — et à ne supprimer qu'ensuite.",
        "Un disque C qui se remplit sans cesse est agaçant parce que les coupables grossissent en silence : les mises à jour de Windows laissent des résidus, les applications gonflent leurs caches et le seul fichier de mise en veille prolongée peut occuper une part non négligeable de votre mémoire vive installée. Ce guide rassemble huit solutions concrètes : afficher les fichiers cachés, cartographier visuellement l'occupation du disque, réduire ou supprimer hiberfil.sys, dimensionner correctement le fichier d'échange, limiter les points de restauration, vider les fichiers temporaires et les caches, faire le tri dans AppData et Téléchargements, et enfin automatiser toute la routine pour que le problème ne revienne pas.",
      ],
      sections: [
        {
          title: "Pourquoi votre disque C se remplit sans raison",
          content: [
            "Quand on demande pourquoi le disque C est plein, la réponse honnête est qu'il ne l'est jamais sans raison : les raisons sont simplement invisibles. Windows marque des fichiers essentiels comme hiberfil.sys et pagefile.sys en tant que fichiers protégés du système d'exploitation, et l'Explorateur de fichiers les masque par défaut. Les points de restauration résident dans un dossier caché nommé System Volume Information, et les caches applicatifs se trouvent dans AppData, lui aussi masqué. Sélectionnez tous vos dossiers visibles, regardez leur taille cumulée : il manque souvent des dizaines de gigaoctets à l'appel.",
            "Pour voir la partie immergée, ouvrez l'Explorateur de fichiers et activez l'affichage des éléments masqués : sous Windows 11, passez par le menu Affichage, puis Afficher, et cochez Éléments masqués ; sous Windows 10, cochez Éléments masqués dans l'onglet Affichage. Pour révéler aussi les fichiers système protégés, ouvrez les Options des dossiers, allez dans l'onglet Affichage et décochez l'option qui masque les fichiers protégés du système d'exploitation. Regardez, mais ne supprimez rien pour l'instant : certains de ces fichiers sont indispensables, et la manière sûre de traiter chacun d'eux est expliquée dans les sections suivantes.",
            "Il est également utile de comprendre pourquoi le disque continue de se remplir avec le temps. Les mises à jour de Windows téléchargent plusieurs gigaoctets et conservent un moment les données de restauration, les navigateurs et les applications font grossir leurs caches en permanence, et chaque fichier supprimé atterrit d'abord dans la Corbeille, qui reste sur le disque C. Rien de tout cela n'est un dysfonctionnement : c'est un comportement normal qui réclame simplement un entretien régulier.",
          ],
        },
        {
          title: "Voyez ce qui occupe réellement l'espace",
          content: [
            "Avant de supprimer quoi que ce soit, dressez une carte. Windows propose une vue d'ensemble intégrée dans Paramètres, Système, Stockage : elle découpe le disque C en catégories telles qu'Applications et fonctionnalités, Fichiers temporaires ou Système et réservé, et un clic sur une catégorie donne un peu plus de détail. C'est une bonne première étape, mais les catégories restent larges — Autres ou Système peut dissimuler précisément les dossiers que vous cherchez, et la vue ne descend jamais jusqu'aux fichiers individuels.",
            "Une treemap visuelle répond bien plus vite à la question. L'analyse de disque (Disk Analysis) de Disk Mop parcourt le lecteur et dessine chaque dossier sous la forme d'un bloc proportionnel à l'espace qu'il occupe : un dossier de cache hypertrophié ou une archive vidéo oubliée saute immédiatement aux yeux au lieu de se cacher derrière une catégorie. Le détecteur de gros fichiers (Large File Finder) complète l'analyse en listant tous les fichiers de plus de 500 Mo, là où se trouvent généralement les gains les plus rapides.",
            "Quel que soit l'outil retenu, respectez une règle : ne supprimez jamais un fichier que vous ne savez pas identifier. Si un fichier volumineux se trouve dans C:\\Windows ou System Volume Information, renseignez-vous d'abord sur son rôle — les sections suivantes expliquent comment réduire les gros fichiers système en toute sécurité plutôt que de les effacer à la main.",
          ],
        },
        {
          title: "Les dévoreurs d'espace cachés : hiberfil.sys, fichier d'échange et points de restauration",
          content: [
            "La plus grosse surprise, sur la plupart des systèmes, s'appelle hiberfil.sys : le fichier que Windows utilise pour la mise en veille prolongée et le démarrage rapide. La taille de hiberfil.sys est proportionnelle à la mémoire vive installée, si bien que sur une machine dotée de 16 ou 32 Go, il peut consommer discrètement plusieurs gigaoctets du disque C. Si vous n'utilisez jamais la mise en veille prolongée, vous pouvez le supprimer : ouvrez l'Invite de commandes en tant qu'administrateur et exécutez powercfg /h off — le fichier disparaît aussitôt. Attention, cela désactive aussi le démarrage rapide ; pour le conserver, exécutez plutôt powercfg /h /type reduced, qui réduit le fichier au lieu de l'effacer.",
            "Le fichier d'échange pagefile.sys est l'endroit où Windows prolonge la mémoire vive sur le disque, et il peut lui aussi occuper plusieurs gigaoctets. Ne le supprimez pas et ne le désactivez pas : Windows en a besoin pour rester stable. Pour vérifier sa taille, appuyez sur Win+R, tapez sysdm.cpl, ouvrez l'onglet Paramètres système avancés, cliquez sur Paramètres sous Performances, retournez dans l'onglet Avancé et choisissez Modifier sous Mémoire virtuelle. Pour la grande majorité des utilisateurs, le meilleur réglage reste la gestion automatique de la taille par Windows.",
            "Les points de restauration système sont une assurance utile, mais ils réservent par défaut une part notable du disque. Dans la même fenêtre sysdm.cpl, ouvrez l'onglet Protection du système, sélectionnez le disque C et cliquez sur Configurer pour abaisser l'espace disque maximal qu'ils peuvent utiliser. Pour supprimer d'un coup les anciens points, lancez le Nettoyage de disque en tant qu'administrateur, cliquez sur Nettoyer les fichiers système, ouvrez l'onglet Autres options et utilisez le bouton de nettoyage sous Restauration du système et clichés instantanés : tous les points de restauration sont effacés, sauf le plus récent.",
          ],
        },
        {
          title: "Videz les fichiers temporaires et les caches applicatifs",
          content: [
            "Les fichiers temporaires sont la réponse classique quand il faut libérer de l'espace sur le disque C, et Windows propose deux moyens intégrés de les effacer. Dans Paramètres, Système, Stockage, ouvrez Fichiers temporaires, passez les cases en revue et supprimez ce dont vous n'avez pas besoin : le Nettoyage de Windows Update et les fichiers d'optimisation de distribution sont généralement les postes les plus lourds. L'ancien outil Nettoyage de disque (commande cleanmgr) fait le même travail, et son bouton Nettoyer les fichiers système débloque des catégories supplémentaires.",
            "Vous pouvez aussi vider directement les dossiers temporaires : appuyez sur Win+R, tapez %temp% et supprimez le contenu du dossier qui s'ouvre, puis recommencez avec C:\\Windows\\Temp. Les fichiers en cours d'utilisation refuseront d'être supprimés — passez-les simplement. Chaque navigateur conserve en plus son propre cache, souvent de plusieurs centaines de mégaoctets, qu'il faut normalement vider depuis chaque navigateur séparément.",
            "Disk Mop condense tout cela en une seule étape. Le nettoyeur de cache (Cache Cleaner) analyse ensemble les caches système et applicatifs, le nettoyeur de cache navigateur (Browser Cache Cleaner) couvre Chrome, Firefox et Edge en une passe, et le bouton Speed Up vide les anciens téléchargements, le cache système, le cache des navigateurs et la Corbeille d'un seul clic — exactement le résultat du parcours manuel ci-dessus, sans avoir à passer par cinq endroits différents.",
          ],
        },
        {
          title: "Vérifiez les dossiers AppData et Téléchargements",
          content: [
            "Si vous avez écarté les fichiers système et découvert qu'AppData occupe une place considérable, vous n'êtes pas seul : presque toutes les applications rangent leurs données et leurs caches dans ce dossier masqué. Appuyez sur Win+R et tapez %localappdata% pour en ouvrir la plus grosse partie. Les applications de messagerie, de musique et de vidéo sont des coupables fréquents — leurs sous-dossiers de cache peuvent atteindre plusieurs gigaoctets chacun. Vider un dossier Cache à l'intérieur du répertoire d'une application est sans danger, mais ne supprimez jamais le dossier complet d'une application installée ; si vous ne vous en servez plus, désinstallez-la proprement depuis Paramètres, Applications.",
            "Le dossier Téléchargements est l'autre accumulateur silencieux. Programmes d'installation, archives ZIP et images disque ne servent en général qu'une seule fois avant d'être oubliés, et comme Téléchargements se trouve sur le disque C, tout cela est décompté de votre espace système. Triez le dossier par taille, gardez ce dont vous avez réellement besoin et supprimez le reste — sans oublier que les fichiers ne disparaissent vraiment qu'une fois la Corbeille vidée.",
            "Le nettoyeur de téléchargements (Downloads Cleaner) de Disk Mop automatise cette revue en classant par catégories les anciens fichiers du dossier Téléchargements, ce qui permet de les effacer par groupes, tandis que le détecteur de doublons (Duplicate Detector) s'appuie sur des empreintes SHA-256 pour repérer les copies identiques de photos, de vidéos et de documents éparpillées sur le disque — les doublons ne sont que de l'espace gaspillé, et il est toujours sans risque de n'en garder qu'un seul exemplaire.",
          ],
        },
        {
          title: "Gardez le disque C propre automatiquement",
          content: [
            "Chaque solution ci-dessus reste temporaire si rien n'empêche le disque de se remplir à nouveau. Windows propose l'Assistant Stockage pour cela : dans Paramètres, Système, Stockage, activez-le pour supprimer automatiquement les fichiers temporaires, vider la Corbeille selon un calendrier et, en option, nettoyer les anciens fichiers du dossier Téléchargements. Il mérite d'être activé, même s'il ne touche ni aux caches applicatifs ni à ceux des navigateurs.",
            "Le nettoyage planifié (Scheduled Cleanup) de Disk Mop va plus loin : programmez une tâche hebdomadaire ou mensuelle et l'application vide automatiquement les caches, les fichiers temporaires et la Corbeille, pendant que le score de santé du système (System Health Score) montre d'un coup d'œil quand le disque réclame de l'attention. Visez environ 15 à 20 % d'espace libre sur le disque C : avec assez de marge pour les mises à jour et la mémoire virtuelle, Windows reste réactif et le disque cesse de donner l'impression de se remplir sans raison.",
          ],
        },
      ],
      verdict: [
        "Un disque C qui semble plein sans raison est en réalité un disque rempli de fichiers invisibles : hiberfil.sys, le fichier d'échange, les points de restauration, les fichiers temporaires et les caches d'AppData. Déroulez les huit solutions dans l'ordre — afficher les fichiers cachés, cartographier l'espace, réduire le fichier de mise en veille prolongée, laisser Windows gérer le fichier d'échange, plafonner les points de restauration, vider les fichiers temporaires et les caches, faire le tri dans AppData et Téléchargements, automatiser la routine — et le mystère disparaîtra en même temps que l'encombrement.",
        "Disk Mop réunit tout ce déroulé dans une seule application : l'analyse de disque montre où l'espace est passé, le nettoyeur de cache et Speed Up le récupèrent, le nettoyeur de téléchargements et le détecteur de doublons s'occupent des dossiers que l'on oublie, et le nettoyage planifié garde le disque propre ensuite. C'est un achat unique de 19,90 $ avec licence à vie, et la version gratuite permet de l'essayer avant de passer à la version complète.",
      ],
      ctaText: "Libérez de l'espace sur votre disque C avec Disk Mop",
    },
    es: {
      title: "¿El disco C se llena sin motivo? 8 soluciones para Windows 10/11",
      metaDescription:
        "¿El disco C se llena sin motivo? Descubre cuánto ocupan hiberfil.sys, el archivo de paginación, los puntos de restauración y AppData, y libera espacio.",
      subtitle: "Una guía que empieza por el diagnóstico para encontrar y borrar los archivos ocultos que llenan tu disco del sistema",
      intro: [
        "Si tu disco C está lleno sin motivo aparente, el espacio casi siempre lo ocupan archivos que Windows te oculta: el archivo de hibernación hiberfil.sys, el archivo de paginación pagefile.sys, los puntos de restauración del sistema y varios gigabytes de cachés de aplicaciones dentro de la carpeta AppData. El Explorador de archivos no muestra estos archivos protegidos del sistema operativo de forma predeterminada, así que la suma de tus carpetas visibles queda muy por debajo de lo que Windows marca como ocupado. La solución pasa por diagnosticar primero — ver exactamente qué llena la unidad — y borrar solo después.",
        "Un disco C que se llena una y otra vez resulta exasperante porque los culpables crecen en silencio: las actualizaciones de Windows dejan restos, las aplicaciones engordan sus cachés y el archivo de hibernación por sí solo puede ocupar una parte considerable de la memoria RAM instalada. En esta guía encontrarás ocho soluciones prácticas: mostrar los archivos ocultos, cartografiar visualmente el uso del disco, reducir o eliminar hiberfil.sys, ajustar el tamaño del archivo de paginación, limitar los puntos de restauración, borrar archivos temporales y cachés, ordenar AppData y Descargas y, por último, automatizar toda la rutina para que el problema no vuelva.",
      ],
      sections: [
        {
          title: "Por qué el disco C se llena sin motivo",
          content: [
            "Cuando alguien pregunta por qué se llena el disco C, la respuesta honesta es que nunca se llena sin motivo: los motivos simplemente son invisibles. Windows marca archivos esenciales como hiberfil.sys y pagefile.sys como archivos protegidos del sistema operativo, y el Explorador de archivos los oculta de forma predeterminada. Los puntos de restauración viven en una carpeta oculta llamada System Volume Information, y las cachés de las aplicaciones están en AppData, que también está oculta. Selecciona todas tus carpetas visibles, mira el tamaño total y verás que a menudo faltan decenas de gigabytes.",
            "Para ver la parte oculta del cuadro, abre el Explorador de archivos y activa los elementos ocultos: en Windows 11 usa el menú Ver, elige Mostrar y marca Elementos ocultos; en Windows 10 marca Elementos ocultos en la pestaña Vista. Para que aparezcan también los archivos protegidos del sistema, abre Opciones de carpeta, ve a la pestaña Ver y desmarca la opción que oculta los archivos protegidos del sistema operativo. Mira, pero todavía no borres nada: algunos de estos archivos son imprescindibles, y en los apartados siguientes se explica la forma segura de tratar cada uno.",
            "También conviene entender por qué la unidad se sigue llenando con el tiempo. Las actualizaciones de Windows descargan varios gigabytes y guardan datos de reversión durante un tiempo, los navegadores y las aplicaciones amplían sus cachés continuamente, y cada archivo borrado aterriza primero en la Papelera de reciclaje, que sigue estando en el disco C. Nada de esto es una avería: es un comportamiento normal que solo necesita mantenimiento periódico.",
          ],
        },
        {
          title: "Comprueba qué está ocupando el espacio de verdad",
          content: [
            "Antes de borrar nada, hazte un mapa. Windows incluye un resumen en Configuración, Sistema, Almacenamiento: divide el disco C en categorías como Aplicaciones y características, Archivos temporales o Sistema y reservado, y al pulsar en una categoría muestra algo más de detalle. Es una buena primera parada, pero las categorías son muy amplias — Otros o Sistema puede esconder justo las carpetas que necesitas encontrar, y la vista no llega a bajar hasta los archivos individuales.",
            "Un treemap visual responde a la pregunta mucho más rápido. El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad y dibuja cada carpeta como un bloque proporcional al espacio que ocupa, de modo que una carpeta de caché desbordada o un archivo de vídeo olvidado saltan a la vista al instante en lugar de esconderse dentro de una categoría. El buscador de archivos grandes (Large File Finder) lo completa listando todos los archivos de más de 500 MB, que suelen ser las victorias más rápidas.",
            "Sea cual sea la herramienta, sigue una regla: nunca borres un archivo que no puedas identificar. Si un archivo grande está dentro de C:\\Windows o de System Volume Information, averigua primero para qué sirve — los apartados siguientes explican cómo reducir con seguridad los grandes archivos del sistema en lugar de eliminarlos a mano.",
          ],
        },
        {
          title: "Devoradores de espacio ocultos: hiberfil.sys, archivo de paginación y puntos de restauración",
          content: [
            "La mayor sorpresa en casi cualquier equipo es hiberfil.sys, el archivo que Windows usa para la hibernación y el Inicio rápido. El tamaño de hiberfil.sys es proporcional a la memoria RAM instalada, así que en un equipo con 16 o 32 GB puede consumir en silencio muchos gigabytes del disco C. Si nunca usas la hibernación, puedes eliminarlo: abre el Símbolo del sistema como administrador y ejecuta powercfg /h off — el archivo desaparece al momento. Ten en cuenta que eso desactiva también el Inicio rápido; si quieres conservarlo, ejecuta powercfg /h /type reduced para reducir el archivo en vez de borrarlo.",
            "El archivo de paginación, pagefile.sys, es donde Windows extiende la memoria RAM al disco, y también puede ocupar varios gigabytes. No lo borres ni lo desactives: Windows lo necesita para mantener la estabilidad. Si quieres revisar su tamaño, pulsa Win+R, escribe sysdm.cpl, abre la pestaña Opciones avanzadas, haz clic en Configuración dentro de Rendimiento, vuelve a Opciones avanzadas y elige Cambiar en Memoria virtual. Para la mayoría de los usuarios, lo mejor es dejar que Windows administre el tamaño automáticamente.",
            "Los puntos de restauración del sistema son un seguro útil, pero de forma predeterminada pueden reservar una porción nada despreciable de la unidad. En esa misma ventana de sysdm.cpl, pasa a la pestaña Protección del sistema, selecciona el disco C y pulsa Configurar para bajar el espacio máximo que pueden usar. Para eliminar los puntos antiguos de una vez, ejecuta el Liberador de espacio en disco como administrador, pulsa Limpiar archivos de sistema, abre la pestaña Más opciones y usa el botón de limpieza de Restaurar sistema y instantáneas: borra todos los puntos de restauración salvo el más reciente.",
          ],
        },
        {
          title: "Borra los archivos temporales y las cachés de las aplicaciones",
          content: [
            "Los archivos temporales son la respuesta clásica cuando necesitas liberar espacio en el disco C, y Windows ofrece dos formas integradas de borrarlos. En Configuración, Sistema, Almacenamiento, abre Archivos temporales, repasa las casillas y elimina lo que no necesites: la Limpieza de Windows Update y los archivos de Optimización de distribución suelen ser las entradas más grandes. La vieja herramienta Liberador de espacio en disco (comando cleanmgr) hace lo mismo, y su botón Limpiar archivos de sistema desbloquea categorías adicionales.",
            "También puedes vaciar las carpetas temporales directamente: pulsa Win+R, escribe %temp% y borra el contenido de la carpeta que se abre; después repite con C:\\Windows\\Temp. Los archivos que estén en uso se negarán a borrarse, así que sáltatelos sin más. Además, cada navegador guarda su propia caché de cientos de megabytes o más, que normalmente hay que vaciar desde dentro de cada navegador por separado.",
            "Disk Mop reduce todo esto a un solo paso. El limpiador de caché (Cache Cleaner) analiza a la vez las cachés del sistema y de las aplicaciones, el limpiador de caché del navegador (Browser Cache Cleaner) cubre Chrome, Firefox y Edge en una sola pasada, y el botón Speed Up borra descargas antiguas, caché del sistema, caché de los navegadores y Papelera de reciclaje con un clic — el mismo resultado que la ronda manual anterior, sin pasar por cinco sitios distintos.",
          ],
        },
        {
          title: "Revisa las carpetas AppData y Descargas",
          content: [
            "Si ya has descartado los archivos del sistema y has visto que AppData ocupa muchísimo, no eres el único: casi todas las aplicaciones guardan sus datos y sus cachés en esta carpeta oculta. Pulsa Win+R y escribe %localappdata% para abrir la parte más voluminosa. Las aplicaciones de chat, música y vídeo son culpables habituales, y sus subcarpetas de caché pueden hincharse hasta varios gigabytes cada una. Vaciar una carpeta Cache dentro del directorio de una aplicación es seguro, pero no borres la carpeta completa de una aplicación instalada; si ya no la usas, desinstálala correctamente desde Configuración, Aplicaciones.",
            "La carpeta Descargas es el otro acumulador silencioso. Los instaladores, los archivos ZIP y las imágenes de disco suelen hacer falta exactamente una vez y luego se olvidan, y como Descargas está en el disco C, todo eso resta espacio del sistema. Ordena la carpeta por tamaño, quédate con lo que realmente necesitas y borra el resto — recordando que los archivos no desaparecen del todo hasta que vacías la Papelera de reciclaje.",
            "El limpiador de descargas (Downloads Cleaner) de Disk Mop automatiza esa revisión clasificando por categorías los archivos antiguos de la carpeta Descargas para que puedas borrarlos por grupos, y el detector de duplicados (Duplicate Detector) usa hashes SHA-256 para encontrar copias idénticas de fotos, vídeos y documentos repartidas por la unidad — los duplicados son espacio desperdiciado sin más, y reducirlos a una sola copia siempre es seguro.",
          ],
        },
        {
          title: "Mantén el disco C limpio de forma automática",
          content: [
            "Todas las soluciones anteriores son temporales si nada impide que la unidad se vuelva a llenar. Windows ofrece el Sensor de almacenamiento para eso: en Configuración, Sistema, Almacenamiento puedes activarlo para que borre archivos temporales automáticamente, vacíe la Papelera de reciclaje según un calendario y, si quieres, limpie los archivos antiguos de Descargas. Merece la pena activarlo, aunque no toca las cachés de las aplicaciones ni las de los navegadores.",
            "La limpieza programada (Scheduled Cleanup) de Disk Mop va más allá: configura una tarea semanal o mensual y borrará cachés, archivos temporales y Papelera de reciclaje de forma automática, mientras que la puntuación de salud del sistema (System Health Score) muestra de un vistazo cuándo la unidad necesita atención. Intenta mantener libre entre el 15 y el 20 % del disco C: con margen suficiente para las actualizaciones y la memoria virtual, Windows sigue respondiendo bien y la unidad deja de parecer que se llena sin motivo.",
          ],
        },
      ],
      verdict: [
        "Un disco C que parece lleno sin motivo es en realidad un disco lleno de archivos invisibles: hiberfil.sys, el archivo de paginación, los puntos de restauración, los archivos temporales y las cachés de AppData. Aplica las ocho soluciones en orden — mostrar los archivos ocultos, cartografiar el espacio, reducir el archivo de hibernación, dejar el archivo de paginación en manos de Windows, limitar los puntos de restauración, borrar archivos temporales y cachés, ordenar AppData y Descargas y automatizar la rutina — y el misterio desaparecerá junto con el desorden.",
        "Disk Mop reúne todo el flujo de trabajo en una sola aplicación: el análisis de disco enseña adónde fue el espacio, el limpiador de caché y Speed Up lo recuperan, el limpiador de descargas y el detector de duplicados se ocupan de las carpetas que sueles olvidar, y la limpieza programada mantiene la unidad limpia a partir de ahí. Es un pago único de 19,90 $ con licencia de por vida, y la versión gratuita te permite probarlo antes de dar el salto.",
      ],
      ctaText: "Libera espacio en tu disco C con Disk Mop",
    },
    it: {
      title: "Il disco C si riempie senza motivo? 8 soluzioni per Windows 10/11",
      metaDescription:
        "Il disco C si riempie senza motivo? Scopri quanto occupano davvero hiberfil.sys, il file di paging, i punti di ripristino e AppData e libera spazio.",
      subtitle: "Una guida che parte dalla diagnosi per individuare e rimuovere i file nascosti che saturano il disco di sistema",
      intro: [
        "Se il disco C è pieno senza motivo apparente, lo spazio è quasi sempre occupato da file che Windows tiene nascosti: il file di ibernazione hiberfil.sys, il file di paging pagefile.sys, i punti di ripristino del sistema e diversi gigabyte di cache delle applicazioni dentro la cartella AppData. Esplora file non mostra questi file di sistema protetti per impostazione predefinita, quindi la somma delle cartelle visibili è molto inferiore a quanto Windows indica come occupato. La strada giusta è diagnosticare prima — vedere esattamente che cosa riempie il disco — e solo dopo iniziare a cancellare.",
        "Un disco C che continua a riempirsi è frustrante perché i responsabili crescono in silenzio: gli aggiornamenti di Windows lasciano residui, le applicazioni gonfiano le proprie cache e il solo file di ibernazione può occupare una fetta consistente della RAM installata. In questa guida trovi otto soluzioni concrete: mostrare i file nascosti, mappare visivamente l'occupazione del disco, ridurre o rimuovere hiberfil.sys, dimensionare correttamente il file di paging, limitare i punti di ripristino, svuotare file temporanei e cache, mettere ordine in AppData e Download e, infine, automatizzare tutta la routine perché il problema non si ripresenti.",
      ],
      sections: [
        {
          title: "Perché il disco C si riempie senza motivo",
          content: [
            "Quando ci si chiede perché il disco C sia pieno, la risposta onesta è che non è mai pieno senza motivo: i motivi sono semplicemente invisibili. Windows contrassegna file fondamentali come hiberfil.sys e pagefile.sys come file protetti di sistema, ed Esplora file li nasconde per impostazione predefinita. I punti di ripristino risiedono nella cartella nascosta System Volume Information, mentre le cache delle applicazioni si trovano in AppData, anch'essa nascosta. Seleziona tutte le cartelle visibili, controlla la dimensione complessiva e spesso scoprirai che mancano decine di gigabyte all'appello.",
            "Per vedere la parte nascosta del quadro, apri Esplora file e attiva la visualizzazione degli elementi nascosti: in Windows 11 usa il menu Visualizza, scegli Mostra e spunta Elementi nascosti; in Windows 10 spunta Elementi nascosti nella scheda Visualizza. Per mostrare anche i file di sistema protetti, apri Opzioni cartella, passa alla scheda Visualizzazione e togli la spunta all'opzione che nasconde i file protetti di sistema. Per ora limitati a guardare, senza cancellare: alcuni di questi file sono indispensabili e il modo sicuro di gestirli è spiegato nelle sezioni seguenti.",
            "Vale la pena capire anche perché il disco continua a riempirsi nel tempo. Gli aggiornamenti di Windows scaricano diversi gigabyte e conservano per un po' i dati per il rollback, i browser e le app fanno crescere le cache di continuo e ogni file eliminato finisce prima nel Cestino, che resta comunque sul disco C. Nulla di tutto questo è un guasto: è un comportamento normale che richiede semplicemente una manutenzione regolare.",
          ],
        },
        {
          title: "Scopri che cosa occupa davvero lo spazio",
          content: [
            "Prima di cancellare qualsiasi cosa, procurati una mappa. Windows offre un riepilogo integrato in Impostazioni, Sistema, Archiviazione: suddivide il disco C in categorie come App e funzionalità, File temporanei e Sistema e riservato, e facendo clic su una categoria mostra qualche dettaglio in più. È un buon punto di partenza, ma le categorie sono troppo generiche — Altro o Sistema può nascondere proprio le cartelle che stai cercando, e la vista non arriva mai ai singoli file.",
            "Una treemap visiva risponde alla domanda molto più in fretta. L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità e disegna ogni cartella come un blocco proporzionale allo spazio che occupa: una cartella di cache fuori controllo o un archivio video dimenticato saltano subito all'occhio invece di restare sepolti dentro una categoria. Il ricercatore di file di grandi dimensioni (Large File Finder) completa il quadro elencando tutti i file oltre i 500 MB, dove di solito si ottengono i risultati più rapidi.",
            "Qualunque strumento tu scelga, segui una regola: non cancellare mai un file che non sai identificare. Se un file di grandi dimensioni si trova in C:\\Windows o in System Volume Information, informati prima sulla sua funzione — le sezioni seguenti spiegano come ridurre in sicurezza i grandi file di sistema invece di eliminarli a mano.",
          ],
        },
        {
          title: "Divoratori di spazio nascosti: hiberfil.sys, file di paging e punti di ripristino",
          content: [
            "La sorpresa più grande, sulla maggior parte dei sistemi, è hiberfil.sys, il file che Windows usa per l'ibernazione e per l'Avvio rapido. La dimensione di hiberfil.sys è proporzionale alla RAM installata, quindi su una macchina con 16 o 32 GB di memoria può occupare in silenzio parecchi gigabyte del disco C. Se non usi mai l'ibernazione puoi rimuoverlo: apri il Prompt dei comandi come amministratore ed esegui powercfg /h off — il file sparisce immediatamente. Tieni presente che così disattivi anche l'Avvio rapido; se vuoi mantenerlo, esegui invece powercfg /h /type reduced, che riduce il file anziché eliminarlo.",
            "Il file di paging, pagefile.sys, è il punto in cui Windows estende la RAM sul disco e può occupare anch'esso diversi gigabyte. Non eliminarlo e non disattivarlo: Windows ne ha bisogno per la stabilità. Se vuoi controllarne la dimensione, premi Win+R, digita sysdm.cpl, apri la scheda Avanzate, fai clic su Impostazioni sotto Prestazioni, passa di nuovo ad Avanzate e scegli Cambia sotto Memoria virtuale. Per la maggior parte degli utenti l'impostazione migliore resta la gestione automatica da parte di Windows.",
            "I punti di ripristino sono un'assicurazione utile, ma per impostazione predefinita possono riservare una fetta notevole del disco. Nella stessa finestra di sysdm.cpl passa alla scheda Protezione sistema, seleziona il disco C e fai clic su Configura per abbassare lo spazio massimo che possono utilizzare. Per eliminare in un colpo solo i punti vecchi, avvia Pulizia disco come amministratore, fai clic su Pulizia file di sistema, apri la scheda Altre opzioni e usa il pulsante di pulizia sotto Ripristino configurazione di sistema e copie shadow: vengono cancellati tutti i punti di ripristino tranne il più recente.",
          ],
        },
        {
          title: "Elimina i file temporanei e le cache delle app",
          content: [
            "I file temporanei sono la risposta classica quando serve liberare spazio sul disco C, e Windows mette a disposizione due strade integrate per cancellarli. In Impostazioni, Sistema, Archiviazione apri File temporanei, controlla le caselle e rimuovi quello che non ti serve: la Pulizia degli aggiornamenti di Windows e i file di Ottimizzazione recapito sono di solito le voci più pesanti. Il più datato strumento Pulizia disco (comando cleanmgr) fa lo stesso lavoro e il pulsante Pulizia file di sistema sblocca categorie aggiuntive.",
            "Puoi anche svuotare direttamente le cartelle temporanee: premi Win+R, digita %temp% e cancella il contenuto della cartella che si apre, poi ripeti con C:\\Windows\\Temp. I file attualmente in uso rifiuteranno di essere eliminati: limitati a saltarli. Ogni browser inoltre conserva la propria cache da centinaia di megabyte o più, che normalmente va svuotata da dentro ciascun browser separatamente.",
            "Disk Mop riduce tutto questo a un unico passaggio. Il pulitore della cache (Cache Cleaner) analizza insieme le cache di sistema e delle applicazioni, il pulitore della cache dei browser (Browser Cache Cleaner) copre Chrome, Firefox ed Edge in un solo passaggio e il pulsante Speed Up svuota download vecchi, cache di sistema, cache dei browser e Cestino con un clic — lo stesso risultato del giro manuale descritto sopra, senza dover passare da cinque punti diversi.",
          ],
        },
        {
          title: "Controlla le cartelle AppData e Download",
          content: [
            "Se hai escluso i file di sistema e hai scoperto che AppData occupa moltissimo spazio, sei in buona compagnia: quasi tutte le applicazioni conservano dati e cache in questa cartella nascosta. Premi Win+R e digita %localappdata% per aprirne la parte più consistente. Le app di messaggistica, musica e video sono tra le più insidiose: le loro sottocartelle di cache possono gonfiarsi fino a diversi gigabyte ciascuna. Svuotare una cartella Cache all'interno della directory di un'applicazione è sicuro, ma non cancellare l'intera cartella di un'applicazione installata; se non la usi più, disinstallala correttamente da Impostazioni, App.",
            "La cartella Download è l'altro accumulatore silenzioso. Programmi di installazione, archivi ZIP e immagini disco servono di solito una volta sola e poi vengono dimenticati e, poiché Download si trova sul disco C, tutto questo viene sottratto allo spazio di sistema. Ordina la cartella per dimensione, tieni ciò che ti serve davvero ed elimina il resto — ricordando che i file spariscono del tutto solo dopo aver svuotato il Cestino.",
            "Il pulitore dei download (Downloads Cleaner) di Disk Mop automatizza questa verifica raggruppando per categorie i file vecchi della cartella Download, così puoi eliminarli in blocco, mentre il ricercatore di duplicati (Duplicate Detector) usa gli hash SHA-256 per trovare copie identiche di foto, video e documenti sparse sul disco — i duplicati sono spazio sprecato e ridurli a una sola copia è sempre sicuro.",
          ],
        },
        {
          title: "Mantieni pulito il disco C in automatico",
          content: [
            "Ogni soluzione vista finora è temporanea se niente impedisce al disco di riempirsi di nuovo. Windows mette a disposizione il Sensore memoria: in Impostazioni, Sistema, Archiviazione puoi attivarlo perché elimini automaticamente i file temporanei, svuoti il Cestino a intervalli regolari e, se vuoi, ripulisca i file vecchi nella cartella Download. Vale la pena attivarlo, anche se non tocca né le cache delle applicazioni né quelle dei browser.",
            "La pulizia pianificata (Scheduled Cleanup) di Disk Mop va oltre: imposti un'attività settimanale o mensile e l'app svuota automaticamente cache, file temporanei e Cestino, mentre il punteggio di salute del sistema (System Health Score) mostra a colpo d'occhio quando il disco richiede attenzione. Punta a mantenere libero circa il 15-20% del disco C: con spazio sufficiente per aggiornamenti e memoria virtuale, Windows resta reattivo e il disco smette di sembrare pieno senza motivo.",
          ],
        },
      ],
      verdict: [
        "Un disco C che sembra pieno senza motivo è in realtà un disco pieno di file invisibili: hiberfil.sys, il file di paging, i punti di ripristino, i file temporanei e le cache di AppData. Applica le otto soluzioni nell'ordine — mostrare i file nascosti, mappare lo spazio, ridurre il file di ibernazione, lasciare il file di paging a Windows, limitare i punti di ripristino, svuotare file temporanei e cache, mettere ordine in AppData e Download, automatizzare la routine — e il mistero sparirà insieme al disordine.",
        "Disk Mop raccoglie l'intero flusso di lavoro in un'unica app: l'analisi del disco mostra dove è finito lo spazio, il pulitore della cache e Speed Up lo recuperano, il pulitore dei download e il ricercatore di duplicati si occupano delle cartelle che dimentichi, e la pulizia pianificata mantiene il disco pulito da lì in avanti. Si acquista una volta sola a 19,90 $ con licenza a vita, e la versione gratuita permette di provarlo prima di passare alla Pro.",
      ],
      ctaText: "Libera spazio sul disco C con Disk Mop",
    },
    pt: {
      title: "Disco C enchendo sem motivo? 8 soluções para Windows 10/11",
      metaDescription:
        "Disco C enchendo sem motivo? Veja quanto espaço hiberfil.sys, arquivo de paginação, pontos de restauração e AppData consomem e libere espaço no Windows.",
      subtitle: "Um guia que começa pelo diagnóstico para encontrar e remover os arquivos ocultos que lotam o disco do sistema",
      intro: [
        "Se o seu disco C está cheio sem motivo aparente, o espaço quase sempre está sendo usado por arquivos que o Windows esconde de você: o arquivo de hibernação hiberfil.sys, o arquivo de paginação pagefile.sys, os pontos de restauração do sistema e vários gigabytes de caches de aplicativos dentro da pasta AppData. O Explorador de Arquivos não mostra esses arquivos protegidos do sistema operacional por padrão, então a soma das suas pastas visíveis fica bem abaixo do que o Windows aponta como ocupado. O caminho certo é diagnosticar primeiro — ver exatamente o que ocupa a unidade — e só depois começar a apagar.",
        "Um disco C que vive enchendo é irritante porque os culpados crescem em silêncio: as atualizações do Windows deixam resíduos, os aplicativos engordam seus caches e só o arquivo de hibernação já consome uma fatia considerável da memória RAM instalada. Neste guia você encontra oito soluções práticas: exibir os arquivos ocultos, mapear visualmente o uso do disco, reduzir ou remover o hiberfil.sys, dimensionar corretamente o arquivo de paginação, limitar os pontos de restauração, apagar arquivos temporários e caches, organizar AppData e Downloads e, por fim, automatizar toda a rotina para que o problema não volte.",
      ],
      sections: [
        {
          title: "Por que o disco C enche sem motivo",
          content: [
            "Quando alguém pergunta por que o disco C está cheio, a resposta honesta é que ele nunca fica cheio sem motivo: os motivos é que são invisíveis. O Windows marca arquivos essenciais como hiberfil.sys e pagefile.sys como arquivos protegidos do sistema operacional, e o Explorador de Arquivos os oculta por padrão. Os pontos de restauração ficam em uma pasta oculta chamada System Volume Information, e os caches dos aplicativos ficam em AppData, também oculta. Selecione todas as pastas visíveis, confira o tamanho somado e é comum faltarem dezenas de gigabytes na conta.",
            "Para ver a parte escondida do quadro, abra o Explorador de Arquivos e ative os itens ocultos: no Windows 11 use o menu Exibir, escolha Mostrar e marque Itens ocultos; no Windows 10 marque Itens ocultos na guia Exibir. Para revelar também os arquivos protegidos do sistema, abra as Opções de Pasta, vá até a guia Modo de Exibição e desmarque a opção que oculta os arquivos protegidos do sistema operacional. Por enquanto apenas observe, sem apagar: alguns desses arquivos são essenciais, e a forma segura de lidar com cada um está nas seções a seguir.",
            "Também ajuda entender por que a unidade continua enchendo com o tempo. As atualizações do Windows baixam vários gigabytes e guardam dados de reversão por um período, os navegadores e aplicativos aumentam seus caches continuamente, e todo arquivo excluído cai primeiro na Lixeira, que continua no disco C. Nada disso é defeito: é o comportamento normal, que apenas pede manutenção periódica.",
          ],
        },
        {
          title: "Veja o que está realmente ocupando espaço",
          content: [
            "Antes de apagar qualquer coisa, faça um mapa. O Windows traz um resumo embutido em Configurações, Sistema, Armazenamento: ele divide o disco C em categorias como Aplicativos e recursos, Arquivos temporários e Sistema e reservado, e clicar em uma categoria mostra um pouco mais de detalhe. É uma boa primeira parada, mas as categorias são amplas demais — Outros ou Sistema pode esconder justamente as pastas que você precisa encontrar, e a visualização não desce até os arquivos individuais.",
            "Um treemap visual responde à pergunta muito mais rápido. A análise de disco (Disk Analysis) do Disk Mop varre a unidade e desenha cada pasta como um bloco proporcional ao espaço que ela ocupa, então uma pasta de cache inchada ou um arquivo de vídeo esquecido salta aos olhos na hora, em vez de ficar escondido dentro de uma categoria. O localizador de arquivos grandes (Large File Finder) complementa listando todos os arquivos acima de 500 MB, que costumam render os ganhos mais rápidos.",
            "Seja qual for a ferramenta, siga uma regra: nunca apague um arquivo que você não consegue identificar. Se um arquivo grande estiver em C:\\Windows ou em System Volume Information, pesquise antes para que ele serve — as seções seguintes explicam como reduzir os grandes arquivos de sistema com segurança em vez de excluí-los na mão.",
          ],
        },
        {
          title: "Vilões escondidos: hiberfil.sys, arquivo de paginação e pontos de restauração",
          content: [
            "A maior surpresa na maioria dos sistemas é o hiberfil.sys, o arquivo que o Windows usa para a hibernação e para a Inicialização Rápida. O tamanho do hiberfil.sys é proporcional à memória RAM instalada, então em uma máquina com 16 ou 32 GB ele pode consumir silenciosamente muitos gigabytes do disco C. Se você nunca usa a hibernação, dá para removê-lo: abra o Prompt de Comando como administrador e execute powercfg /h off — o arquivo some na hora. Lembre-se de que isso também desliga a Inicialização Rápida; se quiser mantê-la, execute powercfg /h /type reduced para encolher o arquivo em vez de apagá-lo.",
            "O arquivo de paginação, pagefile.sys, é onde o Windows estende a memória RAM para o disco, e ele também pode ocupar vários gigabytes. Não apague nem desative esse arquivo — o Windows precisa dele para manter a estabilidade. Se quiser conferir o tamanho, pressione Win+R, digite sysdm.cpl, abra a guia Avançado, clique em Configurações dentro de Desempenho, volte para Avançado e escolha Alterar em Memória Virtual. Para a maioria dos usuários, o melhor ajuste é deixar o Windows gerenciar o tamanho automaticamente.",
            "Os pontos de restauração do sistema são um seguro útil, mas por padrão podem reservar uma fatia considerável da unidade. Nessa mesma janela do sysdm.cpl, vá até a guia Proteção do Sistema, selecione o disco C e clique em Configurar para reduzir o espaço máximo que eles podem usar. Para remover os pontos antigos de uma vez, execute a Limpeza de Disco como administrador, clique em Limpar arquivos do sistema, abra a guia Mais Opções e use o botão de limpeza em Restauração do Sistema e Cópias de Sombra: ele apaga todos os pontos de restauração, menos o mais recente.",
          ],
        },
        {
          title: "Limpe arquivos temporários e caches de aplicativos",
          content: [
            "Os arquivos temporários são a resposta clássica quando você precisa liberar espaço no disco C, e o Windows oferece dois caminhos nativos para apagá-los. Em Configurações, Sistema, Armazenamento, abra Arquivos temporários, revise as caixas de seleção e remova o que não precisa: a Limpeza do Windows Update e os arquivos de Otimização de Entrega costumam ser os itens mais pesados. A antiga ferramenta Limpeza de Disco (comando cleanmgr) faz o mesmo serviço, e o botão Limpar arquivos do sistema libera categorias adicionais.",
            "Você também pode esvaziar as pastas temporárias diretamente: pressione Win+R, digite %temp% e apague o conteúdo da pasta que abrir, depois repita com C:\\Windows\\Temp. Os arquivos em uso no momento vão se recusar a sair — basta pulá-los. Além disso, cada navegador mantém o próprio cache, de centenas de megabytes ou mais, que normalmente precisa ser limpo por dentro de cada navegador separadamente.",
            "O Disk Mop resume tudo isso a um passo só. O limpador de cache (Cache Cleaner) analisa os caches do sistema e dos aplicativos juntos, o limpador de cache de navegadores (Browser Cache Cleaner) cobre Chrome, Firefox e Edge em uma única passagem, e o botão Speed Up apaga downloads antigos, cache do sistema, cache dos navegadores e Lixeira com um clique — o mesmo resultado da rodada manual acima, sem passar por cinco lugares diferentes.",
          ],
        },
        {
          title: "Confira as pastas AppData e Downloads",
          content: [
            "Se você já descartou os arquivos de sistema e viu o AppData ocupando muito espaço, saiba que isso é comum: praticamente todo aplicativo guarda seus dados e caches nessa pasta oculta. Pressione Win+R e digite %localappdata% para abrir a maior parte dela. Aplicativos de mensagens, música e vídeo são reincidentes — suas subpastas de cache podem inchar até vários gigabytes cada uma. Esvaziar uma pasta Cache dentro do diretório de um aplicativo é seguro, mas não apague a pasta inteira de um aplicativo instalado; se você não usa mais, desinstale direito em Configurações, Aplicativos.",
            "A pasta Downloads é o outro acumulador silencioso. Instaladores, arquivos ZIP e imagens de disco costumam ser usados exatamente uma vez e depois esquecidos e, como Downloads fica no disco C, tudo isso é descontado do seu espaço de sistema. Ordene a pasta por tamanho, guarde o que realmente importa e apague o resto — lembrando que os arquivos só somem de verdade depois que a Lixeira é esvaziada.",
            "O limpador de downloads (Downloads Cleaner) do Disk Mop automatiza essa revisão separando por categorias os arquivos antigos da pasta Downloads, para você limpar em grupo, e o detector de duplicados (Duplicate Detector) usa hashes SHA-256 para achar cópias idênticas de fotos, vídeos e documentos espalhadas pela unidade — duplicados são desperdício puro de espaço, e reduzi-los a uma única cópia é sempre seguro.",
          ],
        },
        {
          title: "Mantenha o disco C limpo automaticamente",
          content: [
            "Toda solução acima é temporária se nada impedir a unidade de encher de novo. O Windows oferece o Sensor de Armazenamento para isso: em Configurações, Sistema, Armazenamento você pode ativá-lo para apagar arquivos temporários automaticamente, esvaziar a Lixeira em intervalos definidos e, opcionalmente, limpar arquivos antigos em Downloads. Vale a pena ligar, ainda que ele não toque nos caches dos aplicativos nem dos navegadores.",
            "A limpeza agendada (Scheduled Cleanup) do Disk Mop vai além: configure uma tarefa semanal ou mensal e o aplicativo limpa caches, arquivos temporários e Lixeira automaticamente, enquanto a pontuação de saúde do sistema (System Health Score) mostra num relance quando a unidade precisa de atenção. Procure manter cerca de 15% a 20% do disco C livre: com folga suficiente para atualizações e memória virtual, o Windows continua responsivo e o disco para de parecer que enche sem motivo.",
          ],
        },
      ],
      verdict: [
        "Um disco C que parece cheio sem motivo é, na verdade, um disco cheio de arquivos invisíveis: hiberfil.sys, arquivo de paginação, pontos de restauração, arquivos temporários e caches do AppData. Percorra as oito soluções na ordem — exibir os arquivos ocultos, mapear o espaço visualmente, encolher o arquivo de hibernação, deixar o arquivo de paginação com o Windows, limitar os pontos de restauração, apagar temporários e caches, organizar AppData e Downloads e automatizar a rotina — e o mistério desaparece junto com a bagunça.",
        "O Disk Mop reúne todo esse fluxo em um único aplicativo: a análise de disco mostra para onde o espaço foi, o limpador de cache e o Speed Up recuperam esse espaço, o limpador de downloads e o detector de duplicados cuidam das pastas que você esquece, e a limpeza agendada mantém a unidade limpa daí em diante. É uma compra única de 19,90 $ com licença vitalícia, e a versão gratuita permite testar antes de fazer o upgrade.",
      ],
      ctaText: "Libere espaço no disco C com o Disk Mop",
    },
    ja: {
      title: "Cドライブが勝手にいっぱいになる原因と8つの対処法｜Windows 10/11",
      metaDescription:
        "Cドライブが理由もなくいっぱいになるのはなぜでしょうか。hiberfil.sys、ページ ファイル、復元ポイント、AppDataのキャッシュが占める容量を確認し、安全に空き容量を増やす8つの手順を解説します。",
      subtitle: "システムドライブを圧迫する隠しファイルを、まず診断してから安全に削除するためのガイド",
      intro: [
        "Cドライブが理由もなくいっぱいになっているように見えるとき、その容量はほとんどの場合、Windowsが利用者から隠しているファイルが使っています。休止状態ファイルの hiberfil.sys、ページ ファイルの pagefile.sys、システムの復元ポイント、そしてAppDataフォルダーの中に積み上がった数ギガバイト規模のアプリのキャッシュです。エクスプローラーはこれらの保護されたシステム ファイルを既定では表示しないため、目に見えるフォルダーを合計しても、Windowsが使用済みとして示す容量にはまるで届きません。正しい進め方は、まず診断すること、つまり何が容量を使っているのかを正確に把握してから、削除に取りかかることです。",
        "Cドライブが何度も満杯になるのが厄介なのは、原因が静かに大きくなっていくからです。Windows Updateは残骸を残し、アプリはキャッシュを膨らませ、休止状態ファイルだけでも搭載メモリのかなりの割合に相当する容量を占めることがあります。この記事では、実践的な8つの対処法を紹介します。隠しファイルを表示する、ディスクの使用状況を視覚的に把握する、hiberfil.sysを縮小または削除する、ページ ファイルを適切なサイズにする、復元ポイントの上限を下げる、一時ファイルとキャッシュを削除する、AppDataとダウンロード フォルダーを整理する、そして最後に一連の作業を自動化して同じ問題が再発しないようにする、という流れです。",
      ],
      sections: [
        {
          title: "Cドライブが理由もなくいっぱいになる仕組み",
          content: [
            "Cドライブがなぜ満杯なのかという疑問に正直に答えるなら、理由なく満杯になることは決してなく、理由が見えていないだけです。Windowsは hiberfil.sys や pagefile.sys といった中核のファイルを保護されたオペレーティング システム ファイルとして扱い、エクスプローラーは既定でそれらを隠します。復元ポイントは隠しフォルダーの System Volume Information に置かれ、アプリのキャッシュも同じく隠し属性のAppDataの中にあります。表示されているフォルダーをすべて選んで合計サイズを確認すると、数十ギガバイトが計算に合わないことがよくあります。",
            "隠れている部分を確認するには、エクスプローラーで隠しファイルの表示を有効にします。Windows 11では「表示」メニューから「表示」を開き、「隠しファイル」にチェックを入れます。Windows 10では「表示」タブの「隠しファイル」にチェックを入れてください。保護されたシステム ファイルまで表示したい場合は、フォルダー オプションを開き、「表示」タブで「保護されたオペレーティング システム ファイルを表示しない」のチェックを外します。ただし今はまだ見るだけにして、削除はしないでください。これらの中には欠かせないファイルもあり、それぞれを安全に扱う方法はこのあとの各セクションで説明します。",
            "ドライブが時間とともに埋まり続ける理由を理解しておくことも役立ちます。Windows Updateは数ギガバイトをダウンロードし、しばらくの間はロールバック用のデータを保持します。ブラウザーやアプリのキャッシュは絶えず大きくなり、削除したファイルもまずCドライブ上のごみ箱に移動するだけです。これらはどれも不具合ではなく、定期的な手入れを前提とした通常の動作です。",
          ],
        },
        {
          title: "本当に容量を使っているものを見つける",
          content: [
            "何かを削除する前に、まず全体像を把握しましょう。Windowsには「設定」→「システム」→「ストレージ」に概要が用意されており、Cドライブを「アプリと機能」「一時ファイル」「システムと予約済み」といったカテゴリーに分けて表示します。カテゴリーをクリックすると、もう少し詳しい内訳も確認できます。出発点としては悪くありませんが、区分が大まかで、探しているフォルダーが「その他」や「システム」に埋もれてしまううえ、個々のファイルまで掘り下げることはできません。",
            "視覚的なツリーマップなら、同じ疑問にずっと早く答えが出ます。Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンし、各フォルダーを占有容量に比例した大きさのブロックとして描き出します。肥大化したキャッシュ フォルダーや存在を忘れていた動画の保管場所も、カテゴリーの陰に隠れることなく一目で浮かび上がります。大容量ファイル検索（Large File Finder）は500 MBを超えるファイルをすべて一覧にするので、最も手早く容量を取り戻せる候補がすぐに分かります。",
            "どのツールを使う場合でも、守るべきルールは1つです。正体の分からないファイルは決して削除しないでください。大きなファイルが C:\\Windows や System Volume Information の中にある場合は、まずその役割を調べましょう。以降のセクションでは、大きなシステム ファイルを手作業で削除するのではなく、安全に縮小する方法を説明します。",
          ],
        },
        {
          title: "見えない容量食い：hiberfil.sys、ページ ファイル、復元ポイント",
          content: [
            "多くの環境で最も大きな驚きになるのが、Windowsが休止状態と高速スタートアップのために使う hiberfil.sys です。hiberfil.sys のサイズは搭載メモリに比例するため、16 GBや32 GBのメモリを積んだパソコンでは、Cドライブの数ギガバイトを静かに使い続けます。休止状態をまったく使っていないなら削除できます。コマンド プロンプトを管理者として実行し、powercfg /h off と入力すれば、ファイルはすぐに消えます。ただしこの操作は高速スタートアップも無効にします。高速スタートアップを残したい場合は、削除ではなく powercfg /h /type reduced でファイルを縮小してください。",
            "ページ ファイルの pagefile.sys は、Windowsがメモリをディスク上に拡張するための領域で、こちらも数ギガバイトを占めることがあります。安定した動作に必要なので、削除も無効化もしないでください。サイズを確認したい場合は、Win+Rキーを押して sysdm.cpl と入力し、「詳細設定」タブを開いて「パフォーマンス」の「設定」をクリックし、もう一度「詳細設定」タブに移動して「仮想メモリ」の「変更」を選びます。ほとんどの利用者にとっては、サイズをWindowsに自動管理させる設定が最適です。",
            "システムの復元ポイントは万一のときに役立つ保険ですが、既定ではドライブのかなりの割合を確保することがあります。同じ sysdm.cpl の画面で「システムの保護」タブに切り替え、Cドライブを選んで「構成」をクリックすると、使用できる最大ディスク領域を減らせます。古い復元ポイントをまとめて削除するには、「ディスク クリーンアップ」を管理者として実行し、「システム ファイルのクリーンアップ」をクリックして「その他のオプション」タブを開き、「システムの復元とシャドウ コピー」の削除ボタンを使います。最新の1つを除くすべての復元ポイントが削除されます。",
          ],
        },
        {
          title: "一時ファイルとアプリのキャッシュを削除する",
          content: [
            "Cドライブの空き容量を増やしたいときの定番はやはり一時ファイルで、Windowsには標準の削除方法が2つ用意されています。「設定」→「システム」→「ストレージ」から「一時ファイル」を開き、チェックボックスを確認して不要なものを削除してください。「Windows Update のクリーンアップ」と「配信の最適化ファイル」が最も容量の大きい項目になりがちです。従来からある「ディスク クリーンアップ」（cleanmgr）も同じ役割を果たし、「システム ファイルのクリーンアップ」ボタンを押すとさらに多くのカテゴリーが選べるようになります。",
            "一時フォルダーを直接空にすることもできます。Win+Rキーを押して %temp% と入力し、開いたフォルダーの中身を削除したあと、C:\\Windows\\Temp でも同じ操作を行ってください。使用中のファイルは削除できないので、そのまま飛ばして構いません。さらに各ブラウザーは数百メガバイト以上の独自のキャッシュを持っており、通常はブラウザーごとに個別に消す必要があります。",
            "Disk Mopはこれらをまとめて1ステップにします。キャッシュ クリーナー（Cache Cleaner）はシステムとアプリのキャッシュを一度にスキャンし、ブラウザー キャッシュ クリーナー（Browser Cache Cleaner）はChrome、Firefox、Edgeを1回の処理でまとめて扱い、「Speed Up」ボタンは古いダウンロード、システム キャッシュ、ブラウザー キャッシュ、ごみ箱をワンクリックで削除します。上で説明した手作業と同じ結果を、5か所を回ることなく得られます。",
          ],
        },
        {
          title: "AppDataとダウンロード フォルダーを確認する",
          content: [
            "システム ファイルを調べ終えたあとにAppDataが大きな容量を占めていると分かっても、珍しいことではありません。ほとんどすべてのアプリが、この隠しフォルダーにデータとキャッシュを保存しています。Win+Rキーを押して %localappdata% と入力すると、その中でも特に大きい部分を開けます。チャット、音楽、動画のアプリは常連で、キャッシュのサブフォルダーがそれぞれ数ギガバイトまで膨らむこともあります。アプリのフォルダー内にある Cache フォルダーの中身を空にするのは安全ですが、インストール済みアプリのフォルダーごと削除してはいけません。使わなくなったアプリは「設定」→「アプリ」から正しくアンインストールしてください。",
            "もう1つの静かな蓄積場所がダウンロード フォルダーです。インストーラー、ZIP書庫、ディスク イメージはたいてい一度使ったきり忘れられますが、ダウンロード フォルダーはCドライブにあるため、そのすべてがシステムの空き容量を削っていきます。フォルダーをサイズ順に並べ替え、本当に必要なものだけ残して他は削除しましょう。ただし、ごみ箱を空にするまでファイルは本当には消えていない点を忘れないでください。",
            "Disk Mopのダウンロード クリーナー（Downloads Cleaner）は、ダウンロード フォルダー内の古いファイルをカテゴリー別に整理し、まとめて削除できるようにすることでこの見直しを自動化します。重複ファイル検索（Duplicate Detector）はSHA-256のハッシュ値を使い、ドライブ全体に散らばった同一内容の写真、動画、書類を洗い出します。重複はまったくの無駄な容量であり、1つだけ残す形に減らすのはいつでも安全です。",
          ],
        },
        {
          title: "Cドライブを自動できれいに保つ",
          content: [
            "ドライブが再び埋まるのを防ぐ仕組みがなければ、ここまでの対処はどれも一時的なものにとどまります。Windowsにはそのための「ストレージ センサー」があり、「設定」→「システム」→「ストレージ」で有効にすると、一時ファイルを自動で削除し、決めた間隔でごみ箱を空にし、必要に応じてダウンロード フォルダーの古いファイルも整理します。有効にしておく価値は十分にありますが、アプリやブラウザーのキャッシュには手を付けません。",
            "Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）はもう一歩進んでいます。週次または月次のタスクを設定しておけば、キャッシュ、一時ファイル、ごみ箱が自動で整理され、システム健全性スコア（System Health Score）を見れば、ドライブに手入れが必要な時期が一目で分かります。Cドライブは常に15〜20%程度の空きを保つことを目安にしてください。更新プログラムと仮想メモリに十分な余裕があれば、Windowsは軽快なまま動き続け、ドライブが理由もなくいっぱいになるように感じることもなくなります。",
          ],
        },
      ],
      verdict: [
        "理由もなくいっぱいに見えるCドライブは、実際には見えないファイルで埋まったドライブです。hiberfil.sys、ページ ファイル、復元ポイント、一時ファイル、そしてAppDataのキャッシュがその正体です。8つの対処法を順に進めてください。隠しファイルを表示する、容量を視覚的に把握する、休止状態ファイルを縮小する、ページ ファイルはWindowsに任せる、復元ポイントの上限を下げる、一時ファイルとキャッシュを削除する、AppDataとダウンロード フォルダーを整理する、そして一連の作業を自動化する。これで不要なデータとともに、謎そのものも消えていきます。",
        "Disk Mopは、この一連の流れを1つのアプリにまとめています。ディスク分析が容量の行方を示し、キャッシュ クリーナーと「Speed Up」が空き容量を取り戻し、ダウンロード クリーナーと重複ファイル検索が忘れがちなフォルダーを引き受け、スケジュール クリーンアップがその後もドライブをきれいに保ちます。買い切り19.90ドルの永続ライセンスで、無料版を試してから移行することもできます。",
      ],
      ctaText: "Disk MopでCドライブの空き容量を増やしましょう",
    },
  },
};
