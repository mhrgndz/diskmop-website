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
        'Disk Mop bu sürecin her adımında yanınızda: treemap disk analizi ve büyük dosya bulucu keşif aşamasını, yinelenen dosya dedektörü ile indirilenler temizleyicisi ayıklama aşamasını, hızlandırma ve zamanlanmış temizlik ise düzenli bakımı üstlenir. Ücretsiz sürümü indirip diskinizi hemen analiz edebilir, tüm özellikler için 19,90 dolarlık tek seferlik ömür boyu lisansa geçebilirsiniz.',
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
        'Disk Mop supports every stage of that process: the treemap Disk Analysis and Large File Finder cover reconnaissance, the Duplicate Detector and Downloads Cleaner handle the cleanup, and Speed Up with Scheduled Cleanup takes care of ongoing maintenance. You can download the free version and analyze your drive right away, and unlock everything with a one-time $19.90 lifetime license.',
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
            'Steam braucht diesen Puffer auf demselben Laufwerk, auf dem das Spiel installiert ist. Heruntergeladene Pakete landen zunächst in einem temporären Download-Bereich im steamapps-Ordner, werden dort entpackt und erst danach in den Spielordner verschoben. Selbst wenn das Laufwerk scheinbar genug Platz für das Spiel hat, führt fehlender Platz für diese Zwischenschritte zur Fehlermeldung über zu wenig Speicherplatz.',
            'Kommen dann noch Shader-Caches, Workshop-Mods und Restordner deinstallierter Spiele hinzu, ist das Gaming-Laufwerk schnell voll. Die gute Nachricht: Ein großer Teil dieses Platzes lässt sich zurückholen, ohne die Spiele anzurühren, die Sie tatsächlich spielen.',
          ],
        },
        {
          title: 'Erst analysieren, dann löschen: Was belegt Ihr Laufwerk?',
          content: [
            'Löschen Sie nichts, bevor Sie wissen, was den Platz tatsächlich verbraucht. Unter Windows zeigt der Weg über Einstellungen, System, Speicher eine grobe Aufschlüsselung; unter macOS finden Sie Ähnliches in den Systemeinstellungen unter Allgemein, Speicher. Diese Bordmittel sind ein guter Anfang, bleiben aber bei groben Kategorien stehen — welcher Spielordner aufgebläht ist, verraten sie nicht.',
            'Die Festplattenanalyse (Disk Analysis) von Disk Mop stellt Ihr Laufwerk als visuelle Treemap dar: Jeder Ordner erscheint als Block, dessen Größe seinem Platzverbrauch entspricht. Spielebibliotheken stechen sofort hervor, und im common-Ordner unter steamapps sehen Sie auf einen Blick, wie viele Gigabyte jedes einzelne Spiel belegt.',
            'Der Große-Dateien-Finder (Large File Finder) ergänzt dieses Bild und listet alle Dateien über 500 MB auf. Spielarchive, alte ISO-Abbilder und vor allem Gameplay-Aufnahmen tauchen hier besonders häufig auf — Aufnahmewerkzeuge sammeln unbemerkt Dutzende Gigabyte an Clips an. Entscheiden Sie erst nach dieser Bestandsaufnahme, was gelöscht wird, und nicht vorher.',
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
            'Selbst eine saubere Deinstallation entfernt selten alles: Mods, Konfigurationsdateien, Absturzprotokolle und Launcher-Reste bleiben oft unter steamapps\\common zurück, Spielstände und Einstellungen leben im Ordner My Games unter Dokumente sowie unter AppData weiter. Prüfen Sie vor dem Löschen von Spielständen, ob die Cloud-Speicherung für das jeweilige Spiel aktiv ist, oder legen Sie ein Backup an.',
            'In der Treemap von Disk Mop fallen solche Reste sofort auf: Ein Ordner eines längst deinstallierten Spiels, der noch 20-30 GB belegt, ist auf der Karte nicht zu übersehen. Statt sich Ordner für Ordner durchzuklicken, erkennen Sie die großen Überbleibsel direkt in der Analyseansicht und räumen sie mit gutem Gewissen weg.',
          ],
        },
        {
          title: 'Doppelte Installer und vergessene Downloads aufspüren',
          content: [
            'Der Downloads-Ordner ist bei Spielern ein stiller Platzfresser: alte Spiel-Installer, mehrfach heruntergeladene Launcher-Setups und Hilfspakete wie DirectX- oder Visual-C++-Redistributables sammeln sich dort an. Sobald ein Spiel installiert ist, wird keine dieser Dateien mehr gebraucht — das Aussortieren von Hand kostet aber Zeit.',
            'Der Downloads-Bereiniger (Downloads Cleaner) von Disk Mop sortiert die alten Dateien in Ihrem Downloads-Ordner nach Kategorien, sodass Sie auf einen Blick sehen, was wie viel Platz belegt. Der Duplikatfinder (Duplicate Detector) geht noch einen Schritt weiter und vergleicht Dateien anhand von SHA-256-Inhaltshashes: So findet er denselben Installer unter verschiedenen Namen, doppelte Screenshots und mehrfach gespeicherte Videoclips zuverlässig.',
            'Da der Vergleich hashbasiert ist, steht fest, dass die Dateien Byte für Byte identisch sind — das Löschen einer Kopie ist also sicher. Ein Scan von wenigen Minuten bringt oft Gigabytes an vergessenen Duplikaten zurück.',
          ],
        },
        {
          title: 'Spiele richtig auf ein anderes Laufwerk verschieben',
          content: [
            'Große Spiele, die Sie behalten möchten, verschieben Sie am besten auf ein zweites Laufwerk. Steam bringt dafür ein eigenes Werkzeug mit: Öffnen Sie das Steam-Menü, wählen Sie Einstellungen, wechseln Sie zum Reiter Speicher, fügen Sie über die Laufwerksauswahl oben Ihr anderes Laufwerk hinzu und legen Sie dort einen Bibliotheksordner an. Markieren Sie anschließend die gewünschten Spiele und klicken Sie auf Verschieben — ein erneuter Download ist nicht nötig.',
            'Verschieben Sie Spielordner nicht per Ausschneiden und Einfügen im Datei-Explorer: Steam erkennt das Spiel danach unter Umständen nicht mehr und erzwingt einen kompletten Neudownload. Nutzen Sie stattdessen die Speicherverwaltung im Steam-Client, und sehen Sie bei anderen Launchern nach deren eigenen Verschiebe- oder Suchfunktionen — wenn Sie den Ordner kopiert und dem Launcher anschließend den neuen Speicherort gezeigt haben, lässt sich ein Neudownload meist vermeiden.',
            'Eine bewährte Strategie: Häufig gespielte Titel, bei denen Ladezeiten zählen, bleiben auf der schnellsten SSD, große Einzelspieler-Titel aus dem Backlog wandern auf das geräumigere Zweitlaufwerk. So entlasten Sie Ihr Systemlaufwerk, ohne dort Geschwindigkeit einzubüßen, wo es wirklich darauf ankommt.',
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
        'Disk Mop begleitet jeden dieser Schritte: Die Treemap-Festplattenanalyse und der Große-Dateien-Finder übernehmen die Bestandsaufnahme, Duplikatfinder und Downloads-Bereiniger das Aufräumen, Speed Up und die geplante Bereinigung die laufende Pflege. Die kostenlose Version analysiert Ihr Laufwerk sofort; alle Funktionen schaltet die einmalige Lifetime-Lizenz für 19,90 $ frei.',
      ],
      ctaText: 'Schaffen Sie mit Disk Mop Platz für Ihr nächstes Spiel',
    },
    fr: {
      title: "Libérer de l'espace disque pour les jeux : le guide Steam",
      metaDescription:
        "Steam affiche « espace disque insuffisant » ? Libérez de l'espace disque pour vos jeux : cache de téléchargement, fichiers résiduels et déplacement des jeux.",
      subtitle: "Le guide pratique pour récupérer des gigaoctets sur Steam et ailleurs",
      intro: [
        "Pour libérer de l'espace disque pour vos jeux, videz le cache de téléchargement de Steam, supprimez les caches de shaders et les fichiers Workshop des jeux auxquels vous ne jouez plus, effacez les dossiers résiduels des jeux désinstallés et déplacez les gros titres vers un second disque. Ces seules étapes permettent de récupérer des dizaines de gigaoctets sans désinstaller le moindre jeu auquel vous jouez encore.",
        "Avec des sorties modernes qui dépassent régulièrement les 100 GB et des correctifs qui grossissent à chaque mise à jour, l'erreur « espace disque insuffisant » de Steam est devenue le quotidien de presque tous les joueurs PC. Le vrai coupable n'est généralement pas les jeux eux-mêmes, mais tout ce qui gravite autour : données de téléchargement bloquées, caches de shaders, mods oubliés et restes d'installations à moitié supprimées.",
        "Dans ce guide, nous verrons d'abord comment savoir exactement ce qui remplit votre disque, puis nous nettoierons Steam et vos dossiers de jeux étape par étape. Chaque section présente d'abord la méthode manuelle, puis les fonctions de Disk Mop qui accélèrent le travail.",
      ],
      sections: [
        {
          title: "Pourquoi les jeux modernes dévorent plus de 100 GB",
          content: [
            "Packs de textures 4K, audio non compressé et cinématiques haute qualité ont poussé de nombreuses grosses sorties bien au-delà de la barre des 100 GB. Et l'installation n'est que le début : quand un correctif volumineux arrive, les blocs compressés sont d'abord écrits sur le disque, puis décompressés et appliqués aux fichiers existants. C'est pourquoi une mise à jour peut temporairement exiger bien plus d'espace que ne le laisse penser sa taille de téléchargement.",
            "Steam exige cette marge sur le disque même où le jeu est installé. Les blocs téléchargés atterrissent dans une zone de téléchargement temporaire à l'intérieur du dossier steamapps, y sont décompressés, puis déplacés vers le dossier du jeu. Même si votre disque semble avoir la place pour le jeu lui-même, manquer d'espace pour ces étapes intermédiaires déclenche l'erreur « espace disque insuffisant ».",
            "Ajoutez à cela les caches de shaders, les mods Workshop et les dossiers laissés par les jeux désinstallés, et un disque de jeu se remplit à toute vitesse. La bonne nouvelle : une grande partie de cet espace peut être récupérée sans toucher aux jeux auxquels vous jouez réellement.",
          ],
        },
        {
          title: "Voyez ce qui occupe votre disque avant de supprimer",
          content: [
            "Avant de supprimer quoi que ce soit, faites un peu de repérage. Sous Windows, ouvrez Paramètres, puis Système, puis Stockage pour obtenir une répartition par catégorie de votre disque ; sous macOS, Réglages Système, Général, Stockage propose un résumé comparable. Ces vues intégrées constituent un bon point de départ, mais elles s'arrêtent à des catégories très larges — une case intitulée « Applications » ou « Autre » ne vous dira pas quel dossier de jeu a enflé.",
            "L'analyse de disque (Disk Analysis) de Disk Mop dessine votre disque sous forme de treemap visuelle : chaque dossier apparaît comme un bloc dont la taille est proportionnelle à l'espace qu'il occupe. Les bibliothèques de jeux ressortent immédiatement sur cette carte, et en descendant dans le dossier common sous steamapps, vous voyez exactement combien de gigaoctets prend chaque jeu.",
            "Le détecteur de gros fichiers (Large File Finder) complète le tableau en listant tous les fichiers de plus de 500 Mo. Archives de jeux, vieilles images ISO et surtout enregistrements de parties y apparaissent souvent — les outils de capture accumulent discrètement des dizaines de gigaoctets de clips. Décidez de ce que vous supprimez seulement après cette étape de repérage, jamais avant.",
          ],
        },
        {
          title: "Nettoyer Steam : cache de téléchargement, shaders et fichiers Workshop",
          content: [
            "Commencez par le cache de téléchargement de Steam. Dans Steam, ouvrez le menu Steam en haut à gauche, choisissez Paramètres, allez dans l'onglet Téléchargements et cliquez sur Vider le cache de téléchargement. Cette opération supprime les données de téléchargement bloquées ou corrompues ; vous serez déconnecté du client Steam et devrez vous reconnecter, mais vos jeux installés et vos sauvegardes restent intacts.",
            "Viennent ensuite les caches de shaders. Dans votre installation Steam, vous trouverez steamapps\\shadercache, qui contient un dossier par jeu nommé d'après son identifiant d'application. Supprimer les dossiers des jeux auxquels vous ne jouez plus est sans risque : chaque jeu reconstruit son cache au lancement suivant, avec tout au plus quelques saccades pendant la première session.",
            "Vérifiez enfin steamapps\\workshop. C'est là que vivent les mods Workshop, les cartes personnalisées et les contenus communautaires, et ce dossier peut atteindre une taille considérable sur les jeux très moddés. Désabonnez-vous des contenus que vous n'utilisez plus, dans le jeu ou depuis les pages du Workshop, et vérifiez si ce dossier contient encore du contenu appartenant à des jeux déjà désinstallés — il y reste souvent.",
          ],
        },
        {
          title: "Désinstallez proprement vos jeux et supprimez les dossiers résiduels",
          content: [
            "La bonne façon de supprimer un jeu Steam passe par la bibliothèque : faites un clic droit sur le jeu, ouvrez Gérer et choisissez Désinstaller. Pour les jeux hors Steam sous Windows, passez par Paramètres, Applications, Applications installées et désinstallez depuis cet écran. Évitez de supprimer les dossiers de jeux à la main — les lanceurs perdent la trace du jeu et laissent derrière eux des manifestes et des entrées de registre.",
            "Malheureusement, même une désinstallation propre efface rarement tout. Mods, fichiers de configuration, rapports de plantage et résidus de lanceurs restent souvent sous steamapps\\common, tandis que les sauvegardes et les réglages survivent dans le dossier My Games à l'intérieur de Documents et sous AppData. Avant de supprimer des fichiers de sauvegarde, vérifiez que la sauvegarde dans le cloud est activée pour ce jeu ou faites-en une copie.",
            "La treemap de Disk Mop rend ces résidus évidents : le dossier d'un jeu que vous pensiez avoir désinstallé et qui occupe encore 20 à 30 GB saute immédiatement aux yeux sur la carte. Plutôt que de parcourir les dossiers un par un, vous repérez les gros restes dans la vue d'analyse et vous les effacez en toute confiance.",
          ],
        },
        {
          title: "Traquez les installeurs en double et les téléchargements oubliés",
          content: [
            "Le dossier Téléchargements est un dévoreur d'espace silencieux chez les joueurs : anciens installeurs de jeux, programmes d'installation de lanceurs téléchargés plusieurs fois et paquets utilitaires comme les redistribuables DirectX ou Visual C++ s'y empilent. Une fois le jeu installé, aucun de ces fichiers n'est nécessaire — mais faire le tri à la main prend du temps.",
            "Le nettoyeur de téléchargements (Downloads Cleaner) de Disk Mop classe par catégories les anciens fichiers de votre dossier Téléchargements, pour voir d'un coup d'œil ce qui occupe de la place. Le détecteur de doublons (Duplicate Detector) va plus loin en comparant les fichiers par empreinte de contenu SHA-256 : il retrouve de façon fiable le même installeur enregistré deux fois sous des noms différents, les captures d'écran en double et les clips vidéo répétés.",
            "Comme la comparaison repose sur des empreintes, elle confirme que les fichiers sont identiques octet par octet — vous êtes donc certain qu'il est sans risque d'en supprimer une copie. Une analyse de quelques minutes peut récupérer des gigaoctets de données dupliquées dont vous aviez oublié l'existence.",
          ],
        },
        {
          title: "Déplacez vos jeux vers un autre disque de la bonne manière",
          content: [
            "Pour les gros jeux que vous ne voulez pas supprimer, la meilleure solution consiste à les déplacer vers un second disque. Steam intègre un outil prévu pour cela : ouvrez le menu Steam, choisissez Paramètres, passez à l'onglet Stockage et utilisez le sélecteur de disque en haut pour ajouter votre autre disque et y créer un dossier de bibliothèque. Cochez ensuite les jeux à déplacer et cliquez sur le bouton Déplacer — aucun nouveau téléchargement n'est nécessaire.",
            "Évitez de couper-coller les dossiers de jeux dans l'Explorateur de fichiers : Steam risque de ne plus reconnaître le jeu déplacé et d'imposer un téléchargement complet. Utilisez plutôt le gestionnaire de stockage, et pour les autres lanceurs, cherchez leurs propres options de déplacement ou de localisation — après avoir copié un dossier, indiquer le nouvel emplacement au lanceur évite en général de tout retélécharger.",
            "Une stratégie efficace : gardez sur votre SSD le plus rapide les jeux auxquels vous jouez le plus, ceux où les temps de chargement comptent, et déplacez les gros titres solo de votre backlog vers un second disque plus spacieux. Vous libérez votre disque système sans sacrifier la vitesse là où elle compte vraiment.",
          ],
        },
        {
          title: "Gardez de la place libre pour la prochaine grosse sortie",
          content: [
            "Visez environ 10 à 15 % d'espace libre sur votre disque de jeu, plus la marge nécessaire à une grosse installation. Les fenêtres de préchargement des sorties majeures s'ouvrent plusieurs jours avant le lancement — si la place n'est pas là, vous risquez de manquer le jour J.",
            "Une routine simple suffit : videz de temps en temps le cache de téléchargement de Steam, vérifiez les résidus de shaders et de Workshop après avoir désinstallé un jeu, et videz la Corbeille. La fonction d'accélération (Speed Up) de Disk Mop prend en charge l'essentiel de cette routine en un clic, en nettoyant automatiquement les anciens téléchargements, le cache système, le cache du navigateur et la Corbeille. Avec le nettoyage planifié (Scheduled Cleanup), vous en faites une tâche automatique hebdomadaire ou mensuelle.",
            "L'indice de santé du système (System Health Score) ajoute un indicateur immédiat de l'état général de votre disque. Au lieu de découvrir l'erreur « espace disque insuffisant » en plein préchargement, vous voyez le disque se remplir à l'avance et vous agissez avant que cela ne devienne un problème.",
          ],
        },
      ],
      verdict: [
        "L'avertissement d'espace disque de Steam résulte le plus souvent d'un empilement de résidus plutôt que d'un seul fichier énorme. Analysez d'abord le disque pour repérer les vrais gloutons, puis videz le cache de téléchargement, élaguez les fichiers de shaders et du Workshop, supprimez les dossiers résiduels, éliminez les installeurs en double et déplacez les gros titres vers un second disque — en appliquant toutes ces étapes, vous récupérez des dizaines de gigaoctets sans toucher aux jeux auxquels vous jouez.",
        "Disk Mop accompagne chaque étape du processus : l'analyse de disque en treemap et le détecteur de gros fichiers couvrent le repérage, le détecteur de doublons et le nettoyeur de téléchargements se chargent du tri, tandis que Speed Up et le nettoyage planifié assurent l'entretien courant. Vous pouvez télécharger la version gratuite et analyser votre disque tout de suite, puis tout débloquer avec une licence à vie unique à 19,90 $.",
      ],
      ctaText: "Récupérez des gigaoctets pour votre prochain jeu avec Disk Mop",
    },
    es: {
      title: "Cómo liberar espacio en disco para juegos (Steam y más)",
      metaDescription:
        "¿Steam dice que no hay suficiente espacio en disco? Libera espacio para tus juegos: vacía la caché de descargas, borra archivos residuales y gana gigabytes.",
      subtitle: "La guía práctica para recuperar gigabytes en Steam y en el resto de tus juegos",
      intro: [
        "Para liberar espacio en disco para tus juegos, vacía la caché de descargas de Steam, borra las cachés de shaders y los archivos de Workshop de los juegos que ya no juegas, elimina las carpetas residuales de los juegos desinstalados y mueve los títulos más pesados a una segunda unidad. Solo con estos pasos puedes recuperar decenas de gigabytes sin desinstalar ni uno de los juegos que sigues jugando.",
        "Con lanzamientos que superan de forma habitual los 100 GB y parches que crecen con cada actualización, el error de Steam por falta de espacio en disco se ha convertido en algo que casi todos los jugadores de PC acaban viendo. El verdadero culpable no suelen ser los juegos en sí, sino los restos que dejan a su alrededor: datos de descarga atascados, cachés de shaders, mods olvidados y sobras de instalaciones a medio borrar.",
        "En esta guía veremos primero cómo saber exactamente qué está llenando tu unidad y después limpiaremos Steam y tus carpetas de juegos paso a paso. En cada apartado encontrarás primero el método manual y luego las funciones de Disk Mop que aceleran el trabajo.",
      ],
      sections: [
        {
          title: "Por qué los juegos modernos ocupan más de 100 GB",
          content: [
            "Los paquetes de texturas en 4K, el audio sin comprimir y las cinemáticas de alta calidad han llevado a muchos grandes lanzamientos bastante más allá de los 100 GB. Y la instalación es solo el principio: cuando llega un parche grande, primero se escriben en el disco los bloques comprimidos, después se descomprimen y por último se aplican sobre los archivos existentes. Por eso una actualización puede necesitar de forma temporal mucho más espacio del que sugiere su tamaño de descarga.",
            "Steam exige ese margen en la misma unidad donde está instalado el juego. Los bloques descargados aterrizan en una zona temporal de descarga dentro de la carpeta steamapps, se descomprimen ahí y solo después se trasladan a la carpeta del juego. Aunque la unidad parezca tener sitio para el juego, quedarse sin espacio para esos pasos intermedios dispara el aviso de que no hay suficiente espacio en disco.",
            "Súmale las cachés de shaders, los mods de Workshop y las carpetas que dejan atrás los juegos desinstalados y una unidad de juegos se llena a toda velocidad. La buena noticia: gran parte de ese espacio se puede recuperar sin tocar los juegos a los que realmente juegas.",
          ],
        },
        {
          title: "Mira qué ocupa tu unidad antes de borrar nada",
          content: [
            "Antes de borrar nada, haz un poco de reconocimiento. En Windows, abre Configuración, luego Sistema y después Almacenamiento para ver un desglose por categorías de tu unidad; en macOS, Ajustes del Sistema, General, Almacenamiento ofrece un resumen parecido. Estas vistas integradas son un punto de partida decente, pero se quedan en categorías muy amplias: una etiqueta como «Aplicaciones» u «Otros» no te dirá qué carpeta de juego se ha disparado.",
            "El análisis de disco (Disk Analysis) de Disk Mop dibuja tu unidad como un treemap visual: cada carpeta aparece como un bloque de tamaño proporcional al espacio que ocupa. Las bibliotecas de juegos destacan al instante en ese mapa y, al entrar en la carpeta common dentro de steamapps, ves exactamente cuántos gigabytes ocupa cada juego.",
            "El buscador de archivos grandes (Large File Finder) completa el cuadro listando todos los archivos de más de 500 MB. Ahí aparecen a menudo archivos comprimidos de juegos, imágenes ISO antiguas y, sobre todo, grabaciones de partidas: las herramientas de captura acumulan en silencio decenas de gigabytes de clips. Decide qué borrar solo después de este reconocimiento, nunca antes.",
          ],
        },
        {
          title: "Limpia Steam: caché de descargas, shaders y archivos de Workshop",
          content: [
            "Empieza por la propia caché de descargas de Steam. En Steam, abre el menú Steam de la esquina superior izquierda, elige Configuración, ve a la pestaña Descargas y pulsa Vaciar caché de descargas. Esto elimina los datos de descarga atascados o dañados; se cerrará tu sesión en el cliente y tendrás que volver a iniciarla, pero tus juegos instalados y tus partidas guardadas quedan intactos.",
            "Después llegan las cachés de shaders. Dentro de tu instalación de Steam encontrarás steamapps\\shadercache, con una carpeta por juego nombrada según su ID de aplicación. Borrar las carpetas de los juegos a los que ya no juegas es seguro: cada juego reconstruye su caché en el siguiente arranque, con algún tirón puntual como mucho durante la primera sesión.",
            "Por último, revisa steamapps\\workshop. Ahí viven los mods de Workshop, los mapas personalizados y el contenido de la comunidad, y en juegos con mucho modding esa carpeta puede crecer enormemente. Cancela la suscripción al contenido que ya no uses, desde el propio juego o desde las páginas de Workshop, y comprueba si quedan archivos de juegos que ya desinstalaste: es muy habitual que se queden ahí.",
          ],
        },
        {
          title: "Desinstala los juegos correctamente y borra las carpetas residuales",
          content: [
            "La forma correcta de quitar un juego de Steam es desde la biblioteca: haz clic derecho sobre el juego, abre Administrar y elige Desinstalar. Para los juegos ajenos a Steam en Windows, ve a Configuración, luego Aplicaciones y después Aplicaciones instaladas y desinstala desde ahí. Evita borrar las carpetas de juegos a mano: los lanzadores pierden el rastro del juego y dejan atrás manifiestos y entradas del registro.",
            "Por desgracia, ni siquiera una desinstalación correcta lo borra todo. Mods, archivos de configuración, volcados de fallos y restos del lanzador suelen quedarse bajo steamapps\\common, mientras que las partidas guardadas y los ajustes siguen viviendo en la carpeta My Games dentro de Documentos y en AppData. Antes de borrar cualquier partida guardada, confirma que el guardado en la nube está activo para ese juego o haz una copia de seguridad.",
            "El treemap de Disk Mop deja esos restos a la vista: la carpeta de un juego que creías desinstalado y que aún ocupa entre 20 y 30 GB salta a la vista de inmediato en el mapa. En lugar de recorrer carpeta por carpeta, localizas los restos grandes en la vista de análisis y los eliminas con total confianza.",
          ],
        },
        {
          title: "Caza los instaladores duplicados y las descargas olvidadas",
          content: [
            "La carpeta Descargas es un devorador silencioso de espacio para quien juega: instaladores de juegos antiguos, ejecutables de lanzadores descargados más de una vez y paquetes auxiliares como los redistribuibles de DirectX o Visual C++ se van acumulando ahí. Una vez instalado el juego, ninguno de esos archivos hace falta, pero separarlos a mano lleva tiempo.",
            "El limpiador de descargas (Downloads Cleaner) de Disk Mop clasifica por categorías los archivos antiguos de tu carpeta Descargas para que veas de un vistazo qué está ocupando espacio. El detector de duplicados (Duplicate Detector) va más allá y compara los archivos mediante hashes de contenido SHA-256: encuentra de forma fiable el mismo instalador guardado dos veces con nombres distintos, capturas de pantalla repetidas y clips de vídeo duplicados.",
            "Como la comparación se basa en hashes, confirma que los archivos son idénticos byte a byte, así que puedes tener la certeza de que borrar una de las copias es seguro. Un análisis de unos pocos minutos puede recuperar gigabytes de datos duplicados que ni recordabas tener.",
          ],
        },
        {
          title: "Mueve los juegos a otra unidad de la forma correcta",
          content: [
            "Para los juegos grandes que no quieres borrar, la mejor respuesta es moverlos a una segunda unidad. Steam trae una herramienta integrada para ello: abre el menú Steam, elige Configuración, cambia a la pestaña Almacenamiento y usa el selector de unidades de la parte superior para añadir tu otra unidad y crear ahí una carpeta de biblioteca. Después marca los juegos que quieras mover y pulsa el botón Mover; no hace falta volver a descargar nada.",
            "Evita cortar y pegar carpetas de juegos en el Explorador de archivos: es posible que Steam no reconozca el juego movido y te obligue a descargarlo entero otra vez. Usa el gestor de almacenamiento en su lugar y, con otros lanzadores, busca sus propias opciones de mover o localizar: después de copiar una carpeta, indicarle al lanzador la nueva ubicación suele evitar una descarga completa.",
            "Una estrategia práctica: deja en tu SSD más rápido los juegos a los que más juegas, donde los tiempos de carga importan, y lleva los grandes títulos para un jugador de tu lista pendiente a una segunda unidad más espaciosa. Liberas la unidad del sistema sin sacrificar velocidad donde de verdad cuenta.",
          ],
        },
        {
          title: "Mantén espacio libre para el próximo gran lanzamiento",
          content: [
            "Procura mantener libre alrededor del 10-15 % de tu unidad de juegos, más margen para una instalación grande. Las ventanas de precarga de los grandes lanzamientos se abren varios días antes del estreno: si el espacio no está listo, te arriesgas a perderte el día uno.",
            "Basta con una rutina sencilla: vacía de vez en cuando la caché de descargas de Steam, revisa los restos de shaders y de Workshop después de desinstalar un juego y vacía la papelera de reciclaje. La función de aceleración (Speed Up) de Disk Mop resuelve la mayor parte de esa rutina con un clic y limpia automáticamente las descargas antiguas, la caché del sistema, la caché del navegador y la papelera. Con la limpieza programada (Scheduled Cleanup) puedes convertirlo en una tarea automática semanal o mensual.",
            "La puntuación de salud del sistema (System Health Score) añade un indicador rápido del estado general de tu disco. En vez de descubrir el aviso de falta de espacio en mitad de una precarga, ves cómo se llena la unidad con antelación y actúas antes de que se convierta en un problema.",
          ],
        },
      ],
      verdict: [
        "El aviso de espacio insuficiente de Steam suele ser el resultado de restos acumulados y no de un único archivo enorme. Analiza primero la unidad para ver quién consume de verdad, después vacía la caché de descargas, poda los archivos de shaders y de Workshop, borra las carpetas residuales, elimina los instaladores duplicados y mueve los títulos grandes a una segunda unidad: aplicando todos estos pasos puedes recuperar decenas de gigabytes sin tocar los juegos a los que juegas.",
        "Disk Mop acompaña cada fase del proceso: el análisis de disco con treemap y el buscador de archivos grandes cubren el reconocimiento, el detector de duplicados y el limpiador de descargas se encargan de la limpieza, y Speed Up junto con la limpieza programada se ocupan del mantenimiento continuo. Puedes descargar la versión gratuita y analizar tu unidad ahora mismo, y desbloquear todo con una licencia de por vida de pago único de 19,90 $.",
      ],
      ctaText: "Recupera gigabytes para tu próximo juego con Disk Mop",
    },
    it: {
      title: "Come liberare spazio su disco per i giochi (Steam e non solo)",
      metaDescription:
        "Steam segnala spazio su disco insufficiente? Libera spazio per i giochi: svuota la cache di download, elimina i file residui e recupera decine di gigabyte.",
      subtitle: "La guida pratica per recuperare gigabyte su Steam e sugli altri launcher",
      intro: [
        "Per liberare spazio su disco per i giochi, svuota la cache di download di Steam, elimina le cache degli shader e i file del Workshop dei giochi che non apri più, rimuovi le cartelle residue dei giochi disinstallati e sposta i titoli più pesanti su una seconda unità. Solo con questi passaggi puoi recuperare decine di gigabyte senza disinstallare nemmeno uno dei giochi a cui giochi ancora.",
        "Con le uscite moderne che superano regolarmente i 100 GB e le patch che crescono a ogni aggiornamento, l'errore di Steam sullo spazio su disco insufficiente è ormai un classico per quasi tutti i giocatori PC. Il vero colpevole di solito non sono i giochi in sé, ma quello che si accumula attorno: dati di download rimasti bloccati, cache degli shader, mod dimenticate e residui di installazioni rimosse a metà.",
        "In questa guida vediamo prima come capire con esattezza che cosa sta riempiendo il disco, poi ripuliamo Steam e le cartelle dei giochi passo dopo passo. In ogni sezione trovi prima il metodo manuale e poi le funzioni di Disk Mop che rendono il lavoro più rapido.",
      ],
      sections: [
        {
          title: "Perché i giochi moderni divorano più di 100 GB",
          content: [
            "Pacchetti di texture in 4K, audio non compresso e filmati ad alta qualità hanno spinto molte grandi uscite ben oltre la soglia dei 100 GB. E l'installazione è solo l'inizio: quando arriva una patch corposa, i blocchi compressi vengono prima scritti sul disco, poi decompressi e applicati ai file esistenti. Per questo un aggiornamento può richiedere temporaneamente molto più spazio di quanto suggerisca la dimensione del download.",
            "Steam pretende quel margine sulla stessa unità in cui è installato il gioco. I blocchi scaricati finiscono in un'area di download temporanea dentro la cartella steamapps, vengono decompressi lì e solo dopo spostati nella cartella del gioco. Anche se l'unità sembra avere spazio a sufficienza per il gioco, restare senza spazio per questi passaggi intermedi fa comparire l'errore sullo spazio su disco insufficiente.",
            "Aggiungi le cache degli shader, le mod del Workshop e le cartelle lasciate dai giochi disinstallati e un'unità dedicata ai giochi si riempie in fretta. La buona notizia: gran parte di quello spazio si può recuperare senza toccare i giochi che usi davvero.",
          ],
        },
        {
          title: "Guarda che cosa occupa il disco prima di cancellare",
          content: [
            "Prima di cancellare qualcosa, fai un po' di ricognizione. Su Windows apri Impostazioni, poi Sistema e infine Archiviazione per vedere una suddivisione per categorie dell'unità; su macOS trovi un riepilogo simile in Impostazioni di Sistema, alla voce Generali, Spazio. Queste schermate integrate sono un buon punto di partenza, ma si fermano a categorie molto ampie: una voce come «App» o «Altro» non ti dice quale cartella di gioco si è gonfiata.",
            "L'analisi del disco (Disk Analysis) di Disk Mop disegna l'unità come una treemap visiva: ogni cartella appare come un blocco di dimensione proporzionale allo spazio che occupa. Le librerie di giochi saltano subito all'occhio su questa mappa e, entrando nella cartella common sotto steamapps, vedi esattamente quanti gigabyte occupa ogni singolo gioco.",
            "Il ricercatore di file di grandi dimensioni (Large File Finder) completa il quadro elencando tutti i file oltre i 500 MB. Qui compaiono spesso archivi di gioco, vecchie immagini ISO e soprattutto registrazioni delle partite: gli strumenti di cattura accumulano in silenzio decine di gigabyte di clip. Decidi che cosa eliminare solo dopo questa ricognizione, mai prima.",
          ],
        },
        {
          title: "Ripulisci Steam: cache di download, shader e file del Workshop",
          content: [
            "Parti dalla cache di download di Steam. Nel client apri il menu Steam in alto a sinistra, scegli Impostazioni, vai alla scheda Download e fai clic su Svuota la cache di download. L'operazione rimuove i dati di download bloccati o danneggiati; verrai disconnesso dal client e dovrai accedere di nuovo, ma i giochi installati e i salvataggi restano intatti.",
            "Poi tocca alle cache degli shader. Dentro l'installazione di Steam trovi steamapps\\shadercache, con una cartella per ogni gioco nominata in base al suo ID applicazione. Eliminare le cartelle dei giochi che non apri più è sicuro: ogni gioco ricostruisce la cache al lancio successivo, al massimo con qualche scatto durante la prima sessione.",
            "Infine controlla steamapps\\workshop. Qui vivono le mod del Workshop, le mappe personalizzate e i contenuti della community, e nei giochi molto moddati la cartella può diventare enorme. Annulla l'iscrizione ai contenuti che non usi più, dal gioco stesso o dalle pagine del Workshop, e verifica se restano file appartenenti a giochi già disinstallati: molto spesso rimangono lì.",
          ],
        },
        {
          title: "Disinstalla i giochi nel modo giusto ed elimina le cartelle residue",
          content: [
            "Il modo corretto di rimuovere un gioco Steam passa dalla libreria: fai clic destro sul gioco, apri Gestisci e scegli Disinstalla. Per i giochi non Steam su Windows vai su Impostazioni, poi App e infine App installate e disinstalla da lì. Evita di cancellare a mano le cartelle dei giochi: i launcher perdono traccia del gioco e lasciano indietro manifest e voci di registro.",
            "Purtroppo nemmeno una disinstallazione corretta rimuove tutto. Mod, file di configurazione, dump dei crash e residui dei launcher restano spesso sotto steamapps\\common, mentre salvataggi e impostazioni continuano a vivere nella cartella My Games dentro Documenti e sotto AppData. Prima di eliminare i salvataggi, verifica che il salvataggio nel cloud sia attivo per quel gioco oppure fai una copia di sicurezza.",
            "La treemap di Disk Mop rende evidenti questi residui: la cartella di un gioco che credevi disinstallato e che occupa ancora 20-30 GB salta subito all'occhio sulla mappa. Invece di sfogliare cartella per cartella, individui i residui più grossi nella vista di analisi e li elimini senza timori.",
          ],
        },
        {
          title: "Scova gli installer duplicati e i download dimenticati",
          content: [
            "Per chi gioca, la cartella Download è un divoratore silenzioso di spazio: vecchi installer di giochi, setup dei launcher scaricati più di una volta e pacchetti di supporto come i redistributable di DirectX o Visual C++ si accumulano lì. Una volta installato il gioco nessuno di questi file serve più, ma fare la cernita a mano richiede tempo.",
            "Il pulitore dei download (Downloads Cleaner) di Disk Mop suddivide in categorie i file vecchi della cartella Download, così vedi a colpo d'occhio che cosa sta occupando spazio. Il rilevatore di duplicati (Duplicate Detector) va oltre e confronta i file tramite hash di contenuto SHA-256: individua in modo affidabile lo stesso installer salvato due volte con nomi diversi, gli screenshot doppi e le clip video ripetute.",
            "Poiché il confronto si basa sugli hash, conferma che i file sono identici byte per byte: puoi quindi essere certo che eliminare una delle copie è sicuro. Una scansione di pochi minuti può restituirti gigabyte di dati duplicati di cui avevi dimenticato l'esistenza.",
          ],
        },
        {
          title: "Sposta i giochi su un'altra unità nel modo corretto",
          content: [
            "Per i giochi voluminosi che non vuoi eliminare, la soluzione migliore è spostarli su una seconda unità. Steam mette a disposizione uno strumento apposito: apri il menu Steam, scegli Impostazioni, passa alla scheda Archiviazione e usa il selettore di unità in alto per aggiungere l'altro disco e creare lì una cartella libreria. Poi spunta i giochi da spostare e fai clic sul pulsante Sposta: non serve scaricare di nuovo nulla.",
            "Evita di tagliare e incollare le cartelle dei giochi in Esplora file: Steam potrebbe non riconoscere più il gioco spostato e costringerti a un download completo. Usa invece la gestione dell'archiviazione e, per gli altri launcher, cerca le loro funzioni di spostamento o di individuazione: dopo aver copiato una cartella, indicare al launcher la nuova posizione di solito evita di riscaricare tutto.",
            "Una strategia pratica: tieni sull'SSD più veloce i giochi a cui giochi di più, quelli in cui i tempi di caricamento contano, e sposta i grandi titoli per giocatore singolo del tuo arretrato su una seconda unità più capiente. Liberi il disco di sistema senza rinunciare alla velocità dove serve davvero.",
          ],
        },
        {
          title: "Tieni sempre spazio libero per la prossima grande uscita",
          content: [
            "Punta a mantenere libero circa il 10-15 % dell'unità dedicata ai giochi, più il margine per una installazione di grandi dimensioni. Le finestre di precaricamento delle uscite più attese si aprono giorni prima del lancio: se lo spazio non c'è, rischi di perderti il day one.",
            "Basta una routine semplice: svuota ogni tanto la cache di download di Steam, controlla i residui di shader e Workshop dopo aver disinstallato un gioco e svuota il cestino. La funzione di accelerazione (Speed Up) di Disk Mop gestisce gran parte di questa routine con un clic, ripulendo automaticamente vecchi download, cache di sistema, cache del browser e cestino. Con la pulizia pianificata (Scheduled Cleanup) la trasformi in un'attività automatica settimanale o mensile.",
            "Il punteggio di salute del sistema (System Health Score) aggiunge un indicatore immediato dello stato generale del disco. Invece di scoprire l'errore sullo spazio insufficiente nel bel mezzo di un precaricamento, ti accorgi per tempo che l'unità si sta riempiendo e intervieni prima che diventi un problema.",
          ],
        },
      ],
      verdict: [
        "L'avviso di Steam sullo spazio su disco è quasi sempre il risultato di residui accumulati, non di un singolo file enorme. Analizza prima l'unità per capire chi consuma davvero, poi svuota la cache di download, sfoltisci i file di shader e del Workshop, elimina le cartelle residue, cancella gli installer duplicati e sposta i titoli più pesanti su una seconda unità: applicando tutti questi passaggi recuperi decine di gigabyte senza toccare i giochi a cui giochi.",
        "Disk Mop ti accompagna in ogni fase: l'analisi del disco a treemap e il ricercatore di file di grandi dimensioni coprono la ricognizione, il rilevatore di duplicati e il pulitore dei download si occupano della cernita, mentre Speed Up e la pulizia pianificata gestiscono la manutenzione continua. Puoi scaricare la versione gratuita e analizzare subito il disco, e sbloccare tutto con una licenza a vita una tantum da 19,90 $.",
      ],
      ctaText: "Recupera gigabyte per il tuo prossimo gioco con Disk Mop",
    },
    pt: {
      title: "Como liberar espaço em disco para jogos (Steam e outros)",
      metaDescription:
        "O Steam avisa que não há espaço em disco suficiente? Libere espaço para os jogos: limpe o cache de download, remova arquivos residuais e ganhe gigabytes.",
      subtitle: "O guia prático para recuperar gigabytes no Steam e nos demais launchers",
      intro: [
        "Para liberar espaço em disco para jogos, limpe o cache de download do Steam, apague os caches de shader e os arquivos da Workshop dos jogos que você não joga mais, remova as pastas residuais de jogos desinstalados e mova os títulos maiores para uma segunda unidade. Só esses passos já recuperam dezenas de gigabytes sem desinstalar nenhum jogo que você ainda joga.",
        "Com lançamentos que passam com frequência dos 100 GB e patches que crescem a cada atualização, o erro do Steam sobre espaço em disco insuficiente virou rotina para quase todo jogador de PC. O verdadeiro vilão normalmente não são os jogos em si, e sim o entulho ao redor deles: dados de download travados, caches de shader, mods esquecidos e sobras de instalações removidas pela metade.",
        "Neste guia vamos ver primeiro como descobrir exatamente o que está enchendo a sua unidade e depois limpar o Steam e as pastas de jogos passo a passo. Em cada seção você encontra primeiro o método manual e, na sequência, os recursos do Disk Mop que agilizam o trabalho.",
      ],
      sections: [
        {
          title: "Por que os jogos modernos consomem mais de 100 GB",
          content: [
            "Pacotes de texturas em 4K, áudio sem compressão e cenas de alta qualidade empurraram muitos grandes lançamentos bem além da marca dos 100 GB. E a instalação é só o começo: quando chega um patch grande, os blocos compactados são primeiro gravados no disco, depois descompactados e aplicados sobre os arquivos existentes. Por isso uma atualização pode exigir temporariamente muito mais espaço do que o tamanho do download sugere.",
            "O Steam exige essa folga na mesma unidade em que o jogo está instalado. Os blocos baixados vão primeiro para uma área temporária de download dentro da pasta steamapps, são descompactados ali e só então movidos para a pasta do jogo. Mesmo que a unidade pareça ter espaço para o jogo em si, ficar sem espaço para essas etapas intermediárias dispara o aviso de espaço em disco insuficiente.",
            "Some a isso os caches de shader, os mods da Workshop e as pastas deixadas por jogos desinstalados e uma unidade dedicada a jogos enche rápido. A boa notícia: boa parte desse espaço dá para recuperar sem encostar nos jogos que você realmente joga.",
          ],
        },
        {
          title: "Veja o que está ocupando a unidade antes de apagar",
          content: [
            "Antes de apagar qualquer coisa, faça um reconhecimento. No Windows, abra Configurações, depois Sistema e então Armazenamento para ver a divisão por categorias da unidade; no macOS, Ajustes do Sistema, em Geral, Armazenamento, traz um resumo parecido. Essas telas nativas são um começo razoável, mas param em categorias muito amplas: um item chamado “Aplicativos” ou “Outros” não diz qual pasta de jogo inchou.",
            "A análise de disco (Disk Analysis) do Disk Mop desenha a unidade como um treemap visual: cada pasta aparece como um bloco proporcional ao espaço que ocupa. As bibliotecas de jogos saltam aos olhos na hora nesse mapa e, ao entrar na pasta common dentro de steamapps, você vê exatamente quantos gigabytes cada jogo consome.",
            "O localizador de arquivos grandes (Large File Finder) completa o quadro listando todos os arquivos acima de 500 MB. Arquivos compactados de jogos, imagens ISO antigas e, principalmente, gravações de partidas aparecem bastante ali: ferramentas de captura acumulam dezenas de gigabytes de clipes sem ninguém perceber. Decida o que apagar só depois desse reconhecimento, nunca antes.",
          ],
        },
        {
          title: "Limpe o Steam: cache de download, shaders e arquivos da Workshop",
          content: [
            "Comece pelo cache de download do próprio Steam. No cliente, abra o menu Steam no canto superior esquerdo, escolha Configurações, vá até a aba Downloads e clique em Limpar cache de download. Isso remove dados de download travados ou corrompidos; você será desconectado do cliente e terá de entrar de novo, mas os jogos instalados e os saves ficam intactos.",
            "Depois vêm os caches de shader. Dentro da instalação do Steam existe a pasta steamapps\\shadercache, com uma subpasta por jogo nomeada com o ID do aplicativo. Apagar as pastas dos jogos que você não joga mais é seguro: cada jogo reconstrói o cache no próximo início, no máximo com alguns engasgos na primeira sessão.",
            "Por fim, confira steamapps\\workshop. É ali que ficam os mods da Workshop, os mapas personalizados e o conteúdo da comunidade, e em jogos muito modificados essa pasta pode crescer bastante. Cancele a inscrição no conteúdo que não usa mais, pelo próprio jogo ou pelas páginas da Workshop, e verifique se sobrou conteúdo de jogos que você já desinstalou: é muito comum ficar para trás.",
          ],
        },
        {
          title: "Desinstale os jogos do jeito certo e remova as pastas residuais",
          content: [
            "A forma correta de remover um jogo do Steam é pela biblioteca: clique com o botão direito no jogo, abra Gerenciar e escolha Desinstalar. Para jogos fora do Steam no Windows, vá em Configurações, depois Aplicativos e então Aplicativos instalados e desinstale por ali. Evite apagar pastas de jogos na mão: os launchers perdem o rastro do jogo e deixam manifestos e entradas de registro para trás.",
            "Infelizmente, nem uma desinstalação correta remove tudo. Mods, arquivos de configuração, despejos de falha e restos do launcher costumam ficar em steamapps\\common, enquanto saves e ajustes continuam vivendo na pasta My Games dentro de Documentos e no AppData. Antes de apagar qualquer save, confirme se o salvamento na nuvem está ativo para aquele jogo ou faça um backup.",
            "O treemap do Disk Mop deixa esses restos evidentes: a pasta de um jogo que você achava que tinha desinstalado e que ainda ocupa 20 a 30 GB salta aos olhos no mapa. Em vez de percorrer pasta por pasta, você identifica os grandes resíduos na tela de análise e limpa com segurança.",
          ],
        },
        {
          title: "Cace instaladores duplicados e downloads esquecidos",
          content: [
            "Para quem joga, a pasta Downloads é um consumidor silencioso de espaço: instaladores antigos de jogos, executáveis de launchers baixados mais de uma vez e pacotes auxiliares como os redistribuíveis do DirectX ou do Visual C++ se acumulam ali. Depois que o jogo está instalado, nenhum desses arquivos é necessário, mas separar tudo na mão dá trabalho.",
            "O limpador de downloads (Downloads Cleaner) do Disk Mop separa por categorias os arquivos antigos da pasta Downloads, para você ver de imediato o que está ocupando espaço. O detector de duplicados (Duplicate Detector) vai além e compara os arquivos por hash de conteúdo SHA-256: encontra com precisão o mesmo instalador salvo duas vezes com nomes diferentes, capturas de tela repetidas e clipes de vídeo duplicados.",
            "Como a comparação é baseada em hash, ela confirma que os arquivos são idênticos byte a byte, então você tem certeza de que apagar uma das cópias é seguro. Uma varredura de poucos minutos pode devolver gigabytes de dados duplicados que você nem lembrava que existiam.",
          ],
        },
        {
          title: "Mova os jogos para outra unidade do jeito certo",
          content: [
            "Para os jogos grandes que você não quer apagar, a melhor saída é movê-los para uma segunda unidade. O Steam tem uma ferramenta própria para isso: abra o menu Steam, escolha Configurações, vá até a aba Armazenamento e use o seletor de unidades no topo para adicionar o outro disco e criar uma pasta de biblioteca nele. Depois marque os jogos que quer mover e clique no botão Mover: não é preciso baixar nada de novo.",
            "Evite recortar e colar pastas de jogos no Explorador de Arquivos: o Steam pode não reconhecer o jogo movido e forçar um download completo. Use o gerenciador de armazenamento e, nos outros launchers, procure as opções próprias de mover ou localizar: depois de copiar a pasta, apontar o novo caminho para o launcher costuma evitar o download inteiro.",
            "Uma estratégia prática: mantenha no SSD mais rápido os jogos que você joga com frequência, aqueles em que o tempo de carregamento faz diferença, e mande os grandes títulos para um jogador da sua fila para uma segunda unidade mais espaçosa. Você alivia o disco do sistema sem abrir mão da velocidade onde ela conta.",
          ],
        },
        {
          title: "Mantenha espaço livre para o próximo grande lançamento",
          content: [
            "Procure manter cerca de 10% a 15% da unidade de jogos livre, mais uma folga para uma instalação grande. As janelas de pré-carregamento dos lançamentos importantes abrem dias antes da estreia: se o espaço não estiver lá, você corre o risco de perder o dia da estreia.",
            "Uma rotina simples resolve: limpe o cache de download do Steam de vez em quando, verifique os resíduos de shader e da Workshop depois de desinstalar um jogo e esvazie a Lixeira. O recurso de aceleração (Speed Up) do Disk Mop cuida da maior parte dessa rotina em um clique, limpando automaticamente downloads antigos, cache do sistema, cache do navegador e Lixeira. Com a limpeza agendada (Scheduled Cleanup) isso vira uma tarefa automática semanal ou mensal.",
            "A pontuação de saúde do sistema (System Health Score) acrescenta um indicador rápido do estado geral do disco. Em vez de descobrir o aviso de espaço insuficiente no meio de um pré-carregamento, você percebe a unidade enchendo com antecedência e age antes que vire problema.",
          ],
        },
      ],
      verdict: [
        "O aviso de espaço em disco do Steam quase sempre é resultado de entulho acumulado, e não de um único arquivo gigante. Analise a unidade primeiro para ver quem realmente consome, depois limpe o cache de download, corte os arquivos de shader e da Workshop, remova as pastas residuais, elimine os instaladores duplicados e mova os títulos grandes para uma segunda unidade: aplicando todos esses passos dá para recuperar dezenas de gigabytes sem encostar nos jogos que você joga.",
        "O Disk Mop acompanha cada etapa desse processo: a análise de disco em treemap e o localizador de arquivos grandes cobrem o reconhecimento, o detector de duplicados e o limpador de downloads cuidam da faxina, e o Speed Up com a limpeza agendada garantem a manutenção contínua. Você pode baixar a versão gratuita e analisar a unidade agora mesmo, e liberar tudo com uma licença vitalícia de pagamento único de 19,90 $.",
      ],
      ctaText: "Recupere gigabytes para o seu próximo jogo com o Disk Mop",
    },
    ja: {
      title: "ゲーム用にディスク容量を空ける方法｜Steamの空き容量不足を解消",
      metaDescription:
        "Steamで「ディスク空き容量が不足しています」と表示されますか。ダウンロード キャッシュの削除、シェーダー キャッシュや残存ファイルの整理、別ドライブへのゲーム移動まで、ゲーム用にディスク容量を空ける手順を解説します。",
      subtitle: "Steamをはじめとするゲーム環境で数十GBを取り戻す実践ガイド",
      intro: [
        "ゲーム用にディスク容量を空けるには、Steamのダウンロード キャッシュを削除し、もう遊んでいないゲームのシェーダー キャッシュとWorkshopのファイルを消し、アンインストール済みのゲームが残したフォルダーを片づけ、容量の大きいタイトルを2台目のドライブへ移します。この手順だけでも、今も遊んでいるゲームを1本も消さずに数十GBを取り戻せます。",
        "最近のゲームは100 GBを超えることが珍しくなく、アップデートのたびにパッチの容量も膨らんでいきます。そのためSteamの「ディスク空き容量が不足しています」というエラーは、ほとんどのPCゲーマーが一度は目にする定番の悩みになりました。本当の原因はゲーム本体そのものではなく、その周辺にたまった残骸であることがほとんどです。途中で止まったダウンロードデータ、シェーダー キャッシュ、忘れられたMod、中途半端に消えたインストールの残りかすなどです。",
        "この記事では、まず何がドライブを圧迫しているのかを正確に把握する方法を紹介し、そのうえでSteamとゲームフォルダーを順番に整理していきます。各セクションでは手作業の方法を先に説明し、そのあとで作業を短縮できるDisk Mopの機能を紹介します。",
      ],
      sections: [
        {
          title: "最近のゲームが100 GB以上を消費する理由",
          content: [
            "4Kのテクスチャパック、非圧縮のオーディオ、高品質なカットシーンによって、大型タイトルの多くは100 GBの大台を大きく超えるようになりました。しかも、容量が必要なのはインストール時だけではありません。大きなパッチが配信されると、まず圧縮された断片がディスクに書き込まれ、そのあと展開されて既存のファイルに適用されます。だからこそ、アップデートはダウンロードサイズから想像するよりもはるかに多くの空き容量を一時的に必要とするのです。",
            "Steamはこの余裕を、ゲームがインストールされているのと同じドライブに求めます。ダウンロードされた断片はまずsteamappsフォルダー内の一時ダウンロード領域に置かれ、そこで展開されてからゲームのフォルダーへ移されます。ゲーム本体の分だけなら空きがあるように見えても、この中間処理のための容量が足りなければ「ディスク空き容量が不足しています」というエラーが表示されます。",
            "そこにシェーダー キャッシュ、WorkshopのMod、アンインストールしたゲームが残したフォルダーが加わると、ゲーム用ドライブはあっという間に埋まります。よい知らせもあります。この容量のかなりの部分は、実際に遊んでいるゲームには一切手を触れずに取り戻せます。",
          ],
        },
        {
          title: "削除する前に、何がドライブを使っているのかを確認する",
          content: [
            "何かを消す前に、まず現状を調べましょう。Windowsでは「設定」から「システム」、「ストレージ」と進むと、ドライブの内訳をカテゴリー別に確認できます。macOSでは「システム設定」の「一般」にある「ストレージ」が同じような概要を示します。これらの標準機能は出発点としては悪くありませんが、分類が大まかなところで止まってしまいます。「アプリ」や「その他」とまとめられた項目を見ても、どのゲームのフォルダーが膨らんでいるのかは分かりません。",
            "Disk Mopのディスク分析（Disk Analysis）は、ドライブを視覚的なツリーマップとして描き出します。各フォルダーは占有容量に比例した大きさのブロックとして表示されるため、ゲームのライブラリはこのマップ上ですぐに目立ちます。steamapps配下のcommonフォルダーまで掘り下げれば、1本ごとに何GB使っているかが一目で分かります。",
            "大容量ファイル検索（Large File Finder）はこれを補い、500 MBを超えるファイルをすべて一覧にします。ゲームのアーカイブ、古いISOイメージ、そして何よりプレイ動画の録画がここには頻繁に並びます。録画ツールは気づかないうちに数十GB分のクリップをためこんでいるものです。何を削除するかは、必ずこの調査を終えてから決めてください。",
          ],
        },
        {
          title: "Steamを整理する：ダウンロード キャッシュ、シェーダー、Workshopのファイル",
          content: [
            "まずはSteam自身のダウンロード キャッシュからです。Steamの画面左上にある「Steam」メニューを開いて「設定」を選び、「ダウンロード」タブに移動して「ダウンロード キャッシュを削除」をクリックします。これで途中で止まったデータや壊れたダウンロードデータが取り除かれます。Steamクライアントからはいったんサインアウトされるため再度ログインが必要ですが、インストール済みのゲームやセーブデータはそのまま残ります。",
            "次はシェーダー キャッシュです。Steamのインストール先にあるsteamapps\\shadercacheには、ゲームごとにアプリIDの名前が付いたフォルダーが並んでいます。もう遊んでいないゲームのフォルダーは安全に削除できます。次回起動時にキャッシュが作り直されるだけで、最初のセッションで一時的にカクつく程度の影響しかありません。",
            "最後にsteamapps\\workshopを確認します。ここにはWorkshopのMod、自作マップ、コミュニティ製のコンテンツが保存されており、Modを多用するゲームでは膨大な容量に育つことがあります。使わなくなったコンテンツはゲーム内かWorkshopのページから登録を解除し、すでにアンインストールしたゲームのコンテンツが残っていないかもこのフォルダーで確認してください。取り残されていることがよくあります。",
          ],
        },
        {
          title: "ゲームを正しくアンインストールし、残ったフォルダーを削除する",
          content: [
            "Steamのゲームを削除する正しい手順は、ライブラリからの操作です。ゲームを右クリックして「管理」を開き、「アンインストール」を選びます。Steam以外のゲームは、Windowsの「設定」から「アプリ」、「インストールされているアプリ」と進んで削除します。ゲームのフォルダーを直接消すのは避けてください。ランチャーがゲームを見失い、マニフェストやレジストリの残骸が残ってしまいます。",
            "残念ながら、正しくアンインストールしてもすべてが消えるわけではありません。Mod、設定ファイル、クラッシュログ、ランチャーの残骸はsteamapps\\commonの下に残ることが多く、セーブデータや各種設定は「ドキュメント」内のMy GamesフォルダーやAppDataに残り続けます。セーブデータを削除する前には、そのゲームでクラウド保存が有効になっているかを確認するか、バックアップを取っておきましょう。",
            "Disk Mopのツリーマップなら、こうした残骸がはっきり見えます。アンインストールしたはずのゲームのフォルダーが20〜30 GBも占有していれば、マップ上ですぐに目に飛び込んできます。フォルダーを1つずつたどる代わりに、分析画面で大きな残骸を見つけて安心して片づけられます。",
          ],
        },
        {
          title: "重複したインストーラーと忘れられたダウンロードを探し出す",
          content: [
            "ゲーマーにとって「ダウンロード」フォルダーは静かな容量の消費源です。古いゲームのインストーラー、何度もダウンロードしたランチャーのセットアップ、DirectXやVisual C++の再頒布可能パッケージなどがどんどんたまっていきます。ゲームのインストールが終われば、これらのファイルはどれも不要ですが、手作業で仕分けするには時間がかかります。",
            "Disk Mopのダウンロード クリーナー（Downloads Cleaner）は、「ダウンロード」フォルダー内の古いファイルをカテゴリー別に整理し、何がどれだけ容量を使っているかをひと目で示します。重複ファイル検出（Duplicate Detector）はさらに踏み込み、SHA-256の内容ハッシュでファイルを比較します。別の名前で二重に保存された同じインストーラー、重複したスクリーンショット、同じ動画クリップも確実に見つけ出します。",
            "比較はハッシュに基づいているため、ファイルが1バイトも違わず同一であることを確認できます。だからこそ、コピーの片方を削除しても安全だと確信できるのです。数分のスキャンで、存在すら忘れていた重複データを何GBも取り戻せることも珍しくありません。",
          ],
        },
        {
          title: "ゲームを正しい方法で別のドライブへ移す",
          content: [
            "削除したくない大容量のゲームは、2台目のドライブへ移すのが最善の答えです。Steamにはそのための専用ツールが用意されています。「Steam」メニューを開いて「設定」を選び、「ストレージ」タブに切り替えます。画面上部のドライブ選択から別のドライブを追加し、そこにライブラリ フォルダーを作成してください。あとは移したいゲームにチェックを入れて「移動」ボタンをクリックするだけで、ダウンロードし直す必要はありません。",
            "エクスプローラーでゲームのフォルダーを切り取って貼り付けるのは避けましょう。Steamが移動後のゲームを認識できず、丸ごと再ダウンロードになるおそれがあります。代わりにストレージ管理の画面を使ってください。ほかのランチャーにも独自の移動機能やインストール先の検出機能があります。フォルダーをコピーしたあとでランチャーに新しい場所を教えてやれば、たいていは再ダウンロードを避けられます。",
            "実用的な方針としては、プレイ頻度が高くロード時間が重要なゲームは最速のSSDに残し、積みゲーになっている大作のシングルプレイ作品は容量に余裕のある2台目のドライブへ移します。こうすれば、速さが必要な場面を犠牲にせずにシステムドライブを軽くできます。",
          ],
        },
        {
          title: "次の大型タイトルに備えて空き容量を確保しておく",
          content: [
            "ゲーム用ドライブには常に10〜15%程度の空きと、大型タイトル1本分のインストール余裕を確保しておきましょう。話題作のプリロードは発売の数日前から始まります。空き容量が用意できていないと、発売初日に遊べなくなるおそれがあります。",
            "難しいことは必要ありません。Steamのダウンロード キャッシュをときどき削除し、ゲームをアンインストールしたらシェーダーとWorkshopの残骸を確認し、ごみ箱を空にする。この程度の習慣で十分です。Disk Mopのスピードアップ（Speed Up）機能は、この作業の大半をワンクリックで片づけ、古いダウンロード、システム キャッシュ、ブラウザーのキャッシュ、ごみ箱を自動で整理します。スケジュール クリーンアップ（Scheduled Cleanup）を使えば、週次や月次の自動タスクにできます。",
            "システム ヘルス スコア（System Health Score）は、ディスク全体の状態をひと目で示す指標になります。プリロードの途中で「ディスク空き容量が不足しています」というエラーに気づくのではなく、ドライブが埋まり始めた段階で察知して、問題になる前に手を打てます。",
          ],
        },
      ],
      verdict: [
        "Steamの空き容量に関する警告は、1つの巨大なファイルではなく、積み重なった残骸が原因であることがほとんどです。まずドライブを分析して本当の消費元を突き止め、次にダウンロード キャッシュを削除し、シェーダーとWorkshopのファイルを整理し、残ったフォルダーを消し、重複したインストーラーを取り除き、容量の大きいタイトルを2台目のドライブへ移す。ここまで実行すれば、遊んでいるゲームには手を触れずに数十GBを取り戻せます。",
        "Disk Mopは、この流れのすべての段階を支えます。ツリーマップのディスク分析と大容量ファイル検索が現状把握を担い、重複ファイル検出とダウンロード クリーナーが不要データの整理を引き受け、スピードアップとスケジュール クリーンアップが日々のメンテナンスを受け持ちます。無料版をダウンロードすればすぐにドライブを分析でき、買い切り19.90ドルの永続ライセンスですべての機能を利用できます。",
      ],
      ctaText: "Disk Mopで次のゲームのための容量を取り戻しましょう",
    },
  },
};
