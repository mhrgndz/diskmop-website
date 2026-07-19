import type { Article } from '../types';

export const diskSpaceForGaming: Article = {
  slug: 'free-up-disk-space-for-gaming',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-07-19',
  readingTime: 8,
  content: {
    tr: {
      title: 'Oyunlar İçin Disk Alanı Boşaltma: Steam Rehberi',
      metaDescription:
        'Steam yeterli disk alanı yok hatası mı? Oyunlar için disk alanı boşaltma rehberi: Steam indirme önbelleği, kalıntı dosyalar ve oyun taşıma adımlarını öğrenin.',
      subtitle: 'Steam ve Diğer Oyunlar İçin Gigabaytlarca Alan Kazanma Rehberi',
      intro: [
        'Oyunlar için disk alanı boşaltmanın en hızlı yolu şu adımlardan geçer: Steam indirme önbelleğini temizlemek, artık oynamadığınız oyunların shader önbelleklerini ve Workshop dosyalarını silmek, kaldırılan oyunlardan geriye kalan klasörleri temizlemek ve büyük oyunları ikinci bir sürücüye taşımak. Bu adımlar, hâlâ oynadığınız tek bir oyunu bile silmeden onlarca gigabayt alan kazandırabilir.',
        'Modern oyunların 100 GB\'ı aşan kurulum boyutları ve her yamada büyüyen güncellemeleriyle, Steam\'in \'yeterli disk alanı yok\' uyarısı neredeyse her oyuncunun karşılaştığı bir sorun haline geldi. Sorunun asıl kaynağı çoğu zaman oyunların kendisi değil; indirme artıkları, shader önbellekleri, unutulmuş mod dosyaları ve yarım kalan kurulum kalıntılarıdır.',
        'Bu rehberde önce diskinizi neyin doldurduğunu nasıl göreceğinizi, ardından Steam\'i ve oyun klasörlerinizi adım adım nasıl temizleyeceğinizi anlatacağız. Her bölümde önce manuel yöntemi, sonra işi kolaylaştıran Disk Mop özelliklerini bulacaksınız.',
      ],
      sections: [
        {
          title: 'Modern Oyunlar Neden 100 GB\'tan Fazla Yer Kaplıyor?',
          content: [
            '4K çözünürlüklü doku paketleri, sıkıştırılmamış ses dosyaları ve yüksek kaliteli ara sahneler nedeniyle günümüzün büyük yapımları düzenli olarak 100 GB sınırını aşıyor. Üstelik iş kurulumla bitmiyor: büyük yamalar indirilirken önce sıkıştırılmış paketler diske yazılır, sonra açılır ve mevcut dosyaların üzerine uygulanır. Bu yüzden bir güncelleme, kendi boyutundan çok daha fazla geçici alana ihtiyaç duyabilir.',
            'Steam bu işlemler için oyunun kurulu olduğu sürücüde ek boş alan ister. İndirilen paketler önce steamapps klasörü altındaki geçici indirme alanına yazılır, açıldıktan sonra oyun klasörüne taşınır. Diskiniz görünürde oyuna yetecek kadar boş olsa bile bu ara adımlar için yer kalmadığında \'yeterli disk alanı yok\' hatasıyla karşılaşırsınız.',
            'Buna bir de shader önbellekleri, Workshop modları ve kaldırılmış oyunlardan kalan klasörler eklenince oyun diski hızla dolar. İyi haber şu: bu alanın önemli bir kısmını, hâlâ oynadığınız oyunlara dokunmadan geri kazanmak mümkün.',
          ],
        },
        {
          title: 'Silmeden Önce Diskinizi Neyin Doldurduğunu Görün',
          content: [
            'Rastgele dosya silmeye başlamadan önce diskin gerçek durumunu görmek gerekir. Windows\'ta Ayarlar, Sistem, Depolama yolunu izleyerek kategori bazlı bir döküm görebilirsiniz; macOS\'ta ise Sistem Ayarları altındaki Genel, Depolama bölümü benzer bir özet sunar. Bu yerleşik ekranlar iyi bir başlangıçtır ancak kaba kategorilerde kalır: \'Uygulamalar\' veya \'Diğer\' etiketi, hangi oyun klasörünün şiştiğini söylemez.',
            'Disk Mop\'un disk analizi (Disk Analysis) özelliği, sürücünüzü görsel bir treemap haritası olarak çizer: her klasör, kapladığı alanla orantılı bir blok olarak görünür. Oyun kütüphaneleri bu haritada anında öne çıkar; steamapps altındaki common klasörüne inerek her oyunun tam olarak kaç gigabayt kapladığını tek bakışta görebilirsiniz.',
            'Büyük dosya bulucu (Large File Finder) ise 500 MB\'ın üzerindeki dosyaları listeler. Oyun arşivleri, eski ISO kalıpları ve özellikle oyun içi video kayıtları bu listede sık görünür; kayıt araçlarının biriktirdiği klipler fark edilmeden onlarca gigabayta ulaşabilir. Neyi sileceğinize bu keşif adımından sonra karar verin.',
          ],
        },
        {
          title: 'Steam Temizliği: İndirme Önbelleği, Shader ve Workshop Dosyaları',
          content: [
            'İlk adres Steam\'in kendi indirme önbelleğidir. Steam\'de sol üstteki Steam menüsünden Ayarlar\'ı açın, İndirmeler sekmesine gelin ve İndirme Önbelleğini Temizle düğmesine tıklayın. Bu işlem takılan veya bozulan indirme verilerini siler; sonrasında Steam hesabınıza yeniden giriş yapmanız gerekir ancak kurulu oyunlarınıza ve kayıtlarınıza dokunulmaz.',
            'İkinci adres shader önbellekleridir. Steam kurulum klasörünüzde steamapps\\shadercache yolunda, her oyun için uygulama kimliğiyle adlandırılmış klasörler bulunur. Artık oynamadığınız oyunlara ait klasörleri silmek güvenlidir; oyun bir sonraki açılışta önbelleği yeniden oluşturur, yalnızca ilk oturumda kısa süreli takılmalar görülebilir.',
            'Üçüncü adres steamapps\\workshop klasörüdür. Workshop modları, özel haritalar ve topluluk içerikleri burada saklanır ve mod desteği güçlü oyunlarda bu klasör ciddi boyutlara ulaşabilir. Kullanmadığınız içeriklerin aboneliğini oyun içinden veya Workshop sayfasından iptal edin; ayrıca kaldırdığınız oyunlara ait Workshop içeriklerinin geride kalıp kalmadığını da bu klasörden kontrol edin.',
          ],
        },
        {
          title: 'Oyunları Doğru Şekilde Kaldırın ve Kalıntı Klasörleri Silin',
          content: [
            'Bir Steam oyununu kaldırmanın doğru yolu kütüphaneden geçer: oyuna sağ tıklayın, Yönet menüsünden Kaldır seçeneğini kullanın. Steam dışı oyunlar için Windows\'ta Ayarlar, Uygulamalar, Yüklü uygulamalar yolunu izleyip ilgili oyunu kaldırın. Oyun klasörünü doğrudan silmekten kaçının; başlatıcılar oyunun izini kaybeder ve geride manifest ile kayıt defteri kalıntıları bırakır.',
            'Ne yazık ki düzgün bir kaldırma işlemi bile her şeyi temizlemez. Modlar, yapılandırma dosyaları, çökme kayıtları ve başlatıcı artıkları çoğu zaman steamapps\\common altında kalır; kayıt dosyaları ve ayarlar ise Belgeler klasöründeki My Games ile AppData altında yaşamaya devam eder. Kayıt dosyalarını silmeden önce bulut kaydının açık olduğundan emin olun veya yedek alın.',
            'Disk Mop\'un treemap görünümü bu kalıntıları görünür kılar: kaldırdığınızı sandığınız bir oyunun klasörü hâlâ 20-30 GB yer kaplıyorsa haritada hemen dikkat çeker. Manuel olarak klasör klasör gezmek yerine, analiz ekranından büyük kalıntıları tespit edip güvenle temizleyebilirsiniz.',
          ],
        },
        {
          title: 'Yinelenen Kurulum Dosyalarını ve Unutulmuş İndirmeleri Bulun',
          content: [
            'İndirilenler klasörü, oyuncular için sessiz bir alan tüketicisidir: eski oyun kurulum dosyaları, defalarca indirilen başlatıcı kurulumları, DirectX ve Visual C++ gibi yardımcı paketler burada birikir. Oyun zaten kuruluysa bu dosyaların hiçbirine ihtiyacınız yoktur, ancak elle ayıklamak zaman alır.',
            'Disk Mop\'un indirilenler temizleyicisi (Downloads Cleaner), klasördeki eski dosyaları kategorilere ayırarak neyin ne kadar yer kapladığını gösterir. Yinelenen dosya dedektörü (Duplicate Detector) ise dosyaları SHA-256 içerik karmasıyla karşılaştırır: aynı kurulum dosyasının farklı adlarla kaydedilmiş kopyalarını, yinelenen ekran görüntülerini ve video klipleri güvenilir şekilde bulur.',
            'Karma tabanlı karşılaştırma, dosyaların bayt bayt aynı olduğunu doğrular; bu sayede kopyalardan birini silmenin güvenli olduğundan emin olursunuz. Birkaç dakikalık bir taramayla, varlığını unuttuğunuz gigabaytlarca yinelenen veriyi geri kazanabilirsiniz.',
          ],
        },
        {
          title: 'Oyunları Başka Bir Sürücüye Doğru Yöntemle Taşıyın',
          content: [
            'Silmek istemediğiniz büyük oyunlar için en iyi çözüm onları ikinci bir sürücüye taşımaktır. Steam bunun için yerleşik bir araç sunar: Steam menüsünden Ayarlar\'ı açın, Depolama sekmesine geçin, üstteki sürücü listesinden yeni sürücünüzü ekleyerek orada bir kütüphane klasörü oluşturun. Ardından taşımak istediğiniz oyunları işaretleyip Taşı düğmesine tıklamanız yeterlidir; yeniden indirme gerekmez.',
            'Oyun klasörlerini Dosya Gezgini\'nde kes-yapıştır yöntemiyle taşımaktan kaçının: Steam taşınan oyunu tanımayabilir ve sizi yeniden indirmeye zorlayabilir. Diğer başlatıcıların da kendi taşıma veya mevcut kurulumu bulma seçenekleri vardır; klasörü kopyaladıktan sonra başlatıcıya yeni konumu göstermek çoğu durumda yeniden indirmeyi önler.',
            'Pratik bir strateji: sık oynadığınız ve yükleme sürelerinin önemli olduğu oyunları en hızlı SSD\'nizde tutun, bitirdiğiniz veya sıraya aldığınız büyük yapımları ise daha geniş ikinci sürücüye taşıyın. Böylece hız kaybetmeden sistem sürücünüzü rahatlatırsınız.',
          ],
        },
        {
          title: 'Bir Sonraki Büyük Oyun İçin Alanı Hazır Tutun',
          content: [
            'Oyun diskinde her zaman yüzde 10-15 civarında boş alan ve bir büyük kurulumluk pay bırakmayı hedefleyin. Büyük çıkışlarda ön yükleme dönemleri çıkıştan günler önce başlar; alanınız hazır değilse oyunu ilk gün oynama şansınızı kaybedebilirsiniz.',
            'Basit bir rutin yeterlidir: Steam indirme önbelleğini ara sıra temizleyin, oyun kaldırdıktan sonra shader ve Workshop kalıntılarını kontrol edin, geri dönüşüm kutusunu boşaltın. Disk Mop\'un hızlandırma (Speed Up) özelliği bu rutinin büyük kısmını tek tıkla halleder: eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve geri dönüşüm kutusunu otomatik temizler. Zamanlanmış temizlik (Scheduled Cleanup) ile bu işlemi haftalık veya aylık otomatik göreve dönüştürebilirsiniz.',
            'Sistem sağlık puanı (System Health Score) da diskinizin genel durumunu tek bakışta gösterir. Böylece \'yeterli disk alanı yok\' hatasını ön yüklemenin ortasında görmek yerine, disk dolmaya başladığında önceden fark edip önlem alırsınız.',
          ],
        },
      ],
      verdict: [
        'Steam\'in disk alanı uyarısı, çoğu zaman tek bir büyük dosyanın değil birikmiş küçük kalıntıların sonucudur. Önce diski analiz edip gerçek tüketicileri görmek, ardından indirme önbelleğini, shader ve Workshop dosyalarını temizlemek, kalıntı klasörleri silmek, yinelenen kurulum dosyalarından kurtulmak ve büyük oyunları ikinci sürücüye taşımak — bu adımların tamamı uygulandığında, oynadığınız oyunlara dokunmadan onlarca gigabayt kazanırsınız.',
        'Disk Mop bu sürecin her adımında yanınızda: treemap disk analizi ve büyük dosya bulucu keşif aşamasını, yinelenen dosya dedektörü ile indirilenler temizleyicisi ayıklama aşamasını, hızlandırma ve zamanlanmış temizlik ise düzenli bakımı üstlenir. Ücretsiz sürümü indirip diskinizi hemen analiz edebilir, tüm özellikler için 9,90 dolarlık tek seferlik ömür boyu lisansa geçebilirsiniz.',
      ],
      ctaText: 'Disk Mop ile bir sonraki oyununuz için yer açın',
    },
    en: {
      title: 'How to Free Up Disk Space for Gaming (Steam & More)',
      metaDescription:
        'Steam says not enough disk space? Free up disk space for gaming: clear the Steam download cache, remove leftover game files and reclaim gigabytes today.',
      subtitle: 'A Practical Guide to Reclaiming Gigabytes for Steam and Beyond',
      intro: [
        'To free up disk space for gaming, clear Steam\'s download cache, delete shader caches and Workshop files for games you no longer play, remove leftover folders from uninstalled games, and move large titles to a second drive. These steps alone can recover tens of gigabytes without uninstalling a single game you still play.',
        'With modern releases regularly crossing 100 GB and patches growing with every update, Steam\'s \'not enough disk space\' error has become something almost every PC gamer runs into. The real culprit usually is not the games themselves but the debris around them: stuck download data, shader caches, forgotten mods and half-removed installation leftovers.',
        'In this guide we will first show you how to see exactly what is filling your drive, then walk through cleaning Steam and your game folders step by step. Each section covers the manual method first, followed by the Disk Mop features that make the job faster.',
      ],
      sections: [
        {
          title: 'Why Modern Games Eat 100+ GB of Disk Space',
          content: [
            '4K texture packs, uncompressed audio and high-quality cutscenes have pushed many big releases well past the 100 GB mark. And installation is only the beginning: when a large patch arrives, compressed chunks are written to disk first, then unpacked and applied to the existing files. That is why an update can temporarily need far more space than its download size suggests.',
            'Steam requires that extra headroom on the same drive where the game is installed. Downloaded chunks land in a temporary downloading area inside the steamapps folder, get unpacked, and are then moved into the game folder. Even if your drive looks like it has room for the game itself, running out of space for these intermediate steps triggers the \'not enough disk space\' error.',
            'Add shader caches, Workshop mods and folders left behind by uninstalled games, and a gaming drive fills up fast. The good news: a large share of that space can be reclaimed without touching the games you actually play.',
          ],
        },
        {
          title: 'See Exactly What Is Using Your Drive Before Deleting',
          content: [
            'Before deleting anything, do some reconnaissance. On Windows, open Settings, then System, then Storage to see a category breakdown of your drive; on macOS, System Settings under General, Storage offers a similar summary. These built-in views are a decent start, but they stop at rough categories — a bucket labeled \'Apps\' or \'Other\' will not tell you which game folder has ballooned.',
            'Disk Mop\'s Disk Analysis draws your drive as a visual treemap: every folder appears as a block sized proportionally to the space it occupies. Game libraries stand out instantly on this map, and drilling into the common folder under steamapps shows you exactly how many gigabytes each individual game takes.',
            'The Large File Finder complements this by listing every file over 500 MB. Game archives, old ISO images and especially gameplay recordings show up here often — capture tools can quietly accumulate tens of gigabytes of clips. Decide what to delete only after this recon step, not before.',
          ],
        },
        {
          title: 'Clean Up Steam: Download Cache, Shaders and Workshop Files',
          content: [
            'Start with Steam\'s own download cache. In Steam, open the Steam menu in the top-left corner, choose Settings, go to the Downloads tab and click Clear Download Cache. This removes stuck or corrupted download data; you will be signed out of the Steam client and need to log in again, but your installed games and saves are untouched.',
            'Next come shader caches. Inside your Steam installation you will find steamapps\\shadercache, containing one folder per game named after its app ID. Deleting the folders of games you no longer play is safe — each game rebuilds its cache on the next launch, with at most some brief stutter during the first session.',
            'Finally, check steamapps\\workshop. This is where Workshop mods, custom maps and community content live, and for heavily modded games it can grow enormous. Unsubscribe from content you no longer use, either in-game or from the Workshop pages, and check this folder for content belonging to games you have already uninstalled — it is often left behind.',
          ],
        },
        {
          title: 'Uninstall Games Properly and Remove Leftover Folders',
          content: [
            'The right way to remove a Steam game is through the library: right-click the game, open Manage and choose Uninstall. For non-Steam games on Windows, go to Settings, then Apps, then Installed apps and uninstall from there. Avoid deleting game folders directly — launchers lose track of the game and leave manifest and registry clutter behind.',
            'Unfortunately, even a proper uninstall rarely removes everything. Mods, config files, crash dumps and launcher remnants often stay behind under steamapps\\common, while saves and settings live on in the My Games folder inside Documents and under AppData. Before removing any save files, confirm cloud saves are enabled for that game or make a backup.',
            'Disk Mop\'s treemap makes these leftovers obvious: a folder from a game you thought you uninstalled that still occupies 20-30 GB jumps out immediately on the map. Instead of browsing folder by folder, you can spot the big remnants in the analysis view and clear them with confidence.',
          ],
        },
        {
          title: 'Hunt Down Duplicate Installers and Forgotten Downloads',
          content: [
            'The Downloads folder is a silent space consumer for gamers: old game installers, launcher setups downloaded more than once, and helper packages like DirectX or Visual C++ redistributables pile up there. Once a game is installed, none of these files are needed — but sorting them out by hand takes time.',
            'Disk Mop\'s Downloads Cleaner categorizes the old files in your Downloads folder so you can see what is taking space at a glance. The Duplicate Detector goes further by comparing files with SHA-256 content hashes: it reliably finds the same installer saved twice under different names, duplicate screenshots and repeated video clips.',
            'Because the comparison is hash-based, it confirms files are identical byte for byte — so you can be certain that deleting one of the copies is safe. A scan of a few minutes can recover gigabytes of duplicated data you forgot existed.',
          ],
        },
        {
          title: 'Move Games to Another Drive the Right Way',
          content: [
            'For big games you do not want to delete, the best answer is moving them to a second drive. Steam has a built-in tool for this: open the Steam menu, choose Settings, switch to the Storage tab, and use the drive selector at the top to add your other drive and create a library folder on it. Then tick the games you want to move and click the Move button — no re-download required.',
            'Avoid cutting and pasting game folders in File Explorer: Steam may fail to recognize the moved game and force a full re-download. Use the Storage manager instead, and for other launchers check their own move or locate options — after copying a folder, pointing the launcher at the new location usually avoids re-downloading.',
            'A practical strategy: keep the games you play most, where loading times matter, on your fastest SSD, and move large single-player titles from your backlog to a roomier secondary drive. You free up your system drive without sacrificing speed where it counts.',
          ],
        },
        {
          title: 'Keep Space Free for Your Next Big Release',
          content: [
            'Aim to keep around 10-15% of your gaming drive free, plus headroom for one large installation. Preload windows for major releases open days before launch — if the space is not there, you risk missing day one.',
            'A simple routine is enough: clear the Steam download cache occasionally, check for shader and Workshop leftovers after uninstalling a game, and empty the recycle bin. Disk Mop\'s Speed Up feature handles most of this routine in one click, automatically cleaning old downloads, system cache, browser cache and the recycle bin. With Scheduled Cleanup you can turn it into an automatic weekly or monthly task.',
            'The System Health Score adds an at-a-glance indicator of your disk\'s overall state. Instead of discovering the \'not enough disk space\' error in the middle of a preload, you notice the drive filling up early and act before it becomes a problem.',
          ],
        },
      ],
      verdict: [
        'Steam\'s disk space warning is usually the result of accumulated debris rather than one huge file. Analyze the drive first to see the real consumers, then clear the download cache, prune shader and Workshop files, remove leftover folders, eliminate duplicate installers and move big titles to a second drive — apply all of these steps and you can recover tens of gigabytes without touching the games you play.',
        'Disk Mop supports every stage of that process: the treemap Disk Analysis and Large File Finder cover reconnaissance, the Duplicate Detector and Downloads Cleaner handle the cleanup, and Speed Up with Scheduled Cleanup takes care of ongoing maintenance. You can download the free version and analyze your drive right away, and unlock everything with a one-time $9.90 lifetime license.',
      ],
      ctaText: 'Reclaim gigabytes for your next game with Disk Mop',
    },
    de: {
      title: 'Speicherplatz für Spiele freigeben: Steam-Guide',
      metaDescription:
        'Steam meldet zu wenig Speicherplatz? Speicherplatz für Spiele freigeben: Download-Cache leeren, Spielereste löschen und Gigabyte für neue Games zurückgewinnen.',
      subtitle: 'Der praktische Leitfaden für mehr Speicherplatz auf Ihrem Gaming-Laufwerk',
      intro: [
        'Um Speicherplatz für Spiele freizugeben, leeren Sie den Steam-Download-Cache, löschen Shader-Caches und Workshop-Dateien nicht mehr gespielter Titel, entfernen Restordner deinstallierter Spiele und verschieben große Titel auf ein zweites Laufwerk. Allein damit lassen sich oft Dutzende Gigabyte zurückgewinnen — ohne ein einziges Spiel zu deinstallieren, das Sie noch spielen.',
        'Moderne Spiele überschreiten regelmäßig die 100-GB-Marke, und mit jedem Patch wächst der Platzbedarf weiter. Die Steam-Meldung über zu wenig Speicherplatz kennt daher fast jeder PC-Spieler. Die eigentliche Ursache sind meist nicht die Spiele selbst, sondern der Ballast drumherum: hängengebliebene Downloads, Shader-Caches, vergessene Mods und Installationsreste.',
        'In diesem Leitfaden zeigen wir zuerst, wie Sie sehen, was Ihr Laufwerk wirklich füllt, und räumen dann Steam und Ihre Spieleordner Schritt für Schritt auf — jeweils erst manuell, dann mit den passenden Disk-Mop-Funktionen.',
      ],
      sections: [
        {
          title: 'Warum moderne Spiele über 100 GB Speicherplatz belegen',
          content: [
            '4K-Texturpakete, unkomprimierte Audiodateien und aufwendige Zwischensequenzen treiben viele große Titel weit über die 100-GB-Marke. Und die Installation ist nur der Anfang: Bei großen Patches werden zuerst komprimierte Pakete auf die Festplatte geschrieben, dann entpackt und auf die vorhandenen Dateien angewendet. Ein Update kann deshalb vorübergehend deutlich mehr Platz benötigen, als seine Downloadgröße vermuten lässt.',
            'Steam braucht diesen Puffer auf demselben Laufwerk, auf dem das Spiel installiert ist. Heruntergeladene Pakete landen zunächst in einem temporären Download-Bereich im steamapps-Ordner und werden erst danach in den Spielordner verschoben. Selbst wenn das Laufwerk scheinbar genug Platz für das Spiel hat, führt fehlender Platz für diese Zwischenschritte zur Fehlermeldung über zu wenig Speicherplatz.',
            'Kommen dann noch Shader-Caches, Workshop-Mods und Restordner deinstallierter Spiele hinzu, ist das Gaming-Laufwerk schnell voll. Die gute Nachricht: Ein großer Teil dieses Platzes lässt sich zurückholen, ohne die Spiele anzurühren, die Sie tatsächlich spielen.',
          ],
        },
        {
          title: 'Erst analysieren, dann löschen: Was belegt Ihr Laufwerk?',
          content: [
            'Löschen Sie nichts, bevor Sie wissen, was den Platz tatsächlich verbraucht. Unter Windows zeigt der Weg über Einstellungen, System, Speicher eine grobe Aufschlüsselung; unter macOS finden Sie Ähnliches in den Systemeinstellungen unter Allgemein, Speicher. Diese Bordmittel sind ein guter Anfang, bleiben aber bei groben Kategorien stehen — welcher Spielordner aufgebläht ist, verraten sie nicht.',
            'Die Festplattenanalyse (Disk Analysis) von Disk Mop stellt Ihr Laufwerk als visuelle Treemap dar: Jeder Ordner erscheint als Block, dessen Größe seinem Platzverbrauch entspricht. Spielebibliotheken stechen sofort hervor, und im common-Ordner unter steamapps sehen Sie auf einen Blick, wie viele Gigabyte jedes einzelne Spiel belegt.',
            'Der Große-Dateien-Finder (Large File Finder) listet zusätzlich alle Dateien über 500 MB auf — Spielarchive, alte ISO-Abbilder und vor allem Gameplay-Aufnahmen, die sich unbemerkt zu Dutzenden Gigabyte ansammeln können. Entscheiden Sie erst nach dieser Bestandsaufnahme, was gelöscht wird.',
          ],
        },
        {
          title: 'Steam aufräumen: Download-Cache, Shader und Workshop-Dateien',
          content: [
            'Beginnen Sie mit dem Download-Cache: Öffnen Sie in Steam das Steam-Menü oben links, wählen Sie Einstellungen, wechseln Sie zum Reiter Downloads und klicken Sie auf Download-Cache leeren. Das entfernt hängengebliebene oder beschädigte Downloaddaten; Sie werden vom Steam-Client abgemeldet und müssen sich neu anmelden, Ihre installierten Spiele und Spielstände bleiben unberührt.',
            'Danach die Shader-Caches: Im Steam-Ordner unter steamapps\\shadercache liegt für jedes Spiel ein nach seiner App-ID benannter Ordner. Die Ordner nicht mehr gespielter Titel können Sie gefahrlos löschen — das Spiel baut den Cache beim nächsten Start neu auf, höchstens mit kurzen Rucklern in der ersten Sitzung.',
            'Prüfen Sie zuletzt steamapps\\workshop: Hier liegen Mods, eigene Karten und Community-Inhalte, die bei modfreundlichen Spielen enorm wachsen können. Bestellen Sie ungenutzte Inhalte im Spiel oder über die Workshop-Seiten ab und kontrollieren Sie den Ordner auf Inhalte bereits deinstallierter Spiele — die bleiben häufig zurück.',
          ],
        },
        {
          title: 'Spiele richtig deinstallieren und Restordner entfernen',
          content: [
            'Steam-Spiele entfernen Sie korrekt über die Bibliothek: Rechtsklick auf das Spiel, dann Verwalten und Deinstallieren. Spiele außerhalb von Steam deinstallieren Sie unter Windows über Einstellungen, Apps, Installierte Apps. Löschen Sie Spielordner nicht direkt von Hand — der Launcher verliert sonst den Überblick und hinterlässt Manifest- und Registry-Reste.',
            'Selbst eine saubere Deinstallation entfernt selten alles: Mods, Konfigurationsdateien und Absturzprotokolle bleiben oft unter steamapps\\common zurück, Spielstände und Einstellungen leben im Ordner My Games unter Dokumente sowie unter AppData weiter. Prüfen Sie vor dem Löschen von Spielständen, ob Cloud-Speicherung aktiv ist, oder legen Sie ein Backup an.',
            'In der Treemap von Disk Mop fallen solche Reste sofort auf: Ein Ordner eines längst deinstallierten Spiels, der noch 20-30 GB belegt, ist auf der Karte nicht zu übersehen und lässt sich gezielt entfernen.',
          ],
        },
        {
          title: 'Doppelte Installer und vergessene Downloads aufspüren',
          content: [
            'Der Downloads-Ordner ist bei Spielern ein stiller Platzfresser: alte Spiel-Installer, mehrfach heruntergeladene Launcher-Setups und Hilfspakete wie DirectX- oder Visual-C++-Redistributables sammeln sich dort an. Sobald ein Spiel installiert ist, wird keine dieser Dateien mehr gebraucht — das Aussortieren von Hand kostet aber Zeit.',
            'Der Downloads-Bereiniger (Downloads Cleaner) von Disk Mop kategorisiert die alten Dateien in Ihrem Downloads-Ordner, und der Duplikatfinder (Duplicate Detector) vergleicht Dateien per SHA-256-Hash: So findet er denselben Installer unter verschiedenen Namen, doppelte Screenshots und mehrfach gespeicherte Videoclips zuverlässig.',
            'Da der Vergleich hashbasiert ist, steht fest, dass die Dateien Byte für Byte identisch sind — das Löschen einer Kopie ist also sicher. Ein Scan von wenigen Minuten bringt oft Gigabytes an vergessenen Duplikaten zurück.',
          ],
        },
        {
          title: 'Spiele richtig auf ein anderes Laufwerk verschieben',
          content: [
            'Große Spiele, die Sie behalten möchten, verschieben Sie am besten auf ein zweites Laufwerk. Steam bringt dafür ein eigenes Werkzeug mit: Öffnen Sie Einstellungen, wechseln Sie zum Reiter Speicher, fügen Sie über die Laufwerksauswahl oben Ihr anderes Laufwerk hinzu und legen Sie dort einen Bibliotheksordner an. Markieren Sie anschließend die gewünschten Spiele und klicken Sie auf Verschieben — ein erneuter Download ist nicht nötig.',
            'Verschieben Sie Spielordner nicht per Ausschneiden und Einfügen im Datei-Explorer: Steam erkennt das Spiel danach unter Umständen nicht mehr und erzwingt einen kompletten Neudownload. Auch andere Launcher bieten eigene Verschiebe- oder Suchfunktionen, mit denen sich ein Neudownload meist vermeiden lässt.',
            'Eine bewährte Strategie: Häufig gespielte Titel mit wichtigen Ladezeiten bleiben auf der schnellsten SSD, große Einzelspieler-Titel aus dem Backlog wandern auf das geräumigere Zweitlaufwerk.',
          ],
        },
        {
          title: 'Speicherplatz für den nächsten großen Release freihalten',
          content: [
            'Halten Sie auf dem Gaming-Laufwerk rund 10-15 % frei, plus Reserve für eine große Installation. Preload-Phasen großer Releases beginnen Tage vor dem Start — fehlt der Platz, riskieren Sie, den ersten Tag zu verpassen.',
            'Eine einfache Routine genügt: gelegentlich den Steam-Download-Cache leeren, nach Deinstallationen Shader- und Workshop-Reste prüfen, Papierkorb leeren. Die Speed-Up-Funktion von Disk Mop erledigt das meiste davon mit einem Klick — alte Downloads, System-Cache, Browser-Cache und Papierkorb werden automatisch bereinigt. Mit der geplanten Bereinigung (Scheduled Cleanup) wird daraus eine automatische wöchentliche oder monatliche Aufgabe.',
            'Der System Health Score zeigt den Zustand Ihres Laufwerks auf einen Blick. Statt die Speicherplatz-Fehlermeldung mitten im Preload zu entdecken, sehen Sie frühzeitig, wenn das Laufwerk voll läuft, und handeln rechtzeitig.',
          ],
        },
      ],
      verdict: [
        'Die Steam-Warnung über zu wenig Speicherplatz entsteht meist durch angesammelten Ballast, nicht durch eine einzelne riesige Datei. Erst das Laufwerk analysieren, dann Download-Cache, Shader- und Workshop-Dateien bereinigen, Restordner entfernen, doppelte Installer löschen und große Titel auf ein zweites Laufwerk verschieben — wer alle Schritte umsetzt, gewinnt Dutzende Gigabyte zurück, ohne die eigenen Spiele anzutasten.',
        'Disk Mop begleitet jeden dieser Schritte: Die Treemap-Festplattenanalyse und der Große-Dateien-Finder übernehmen die Bestandsaufnahme, Duplikatfinder und Downloads-Bereiniger das Aufräumen, Speed Up und die geplante Bereinigung die laufende Pflege. Die kostenlose Version analysiert Ihr Laufwerk sofort; alle Funktionen schaltet die einmalige Lifetime-Lizenz für 9,90 US-Dollar frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz für Ihr nächstes Spiel',
    },
  },
};
