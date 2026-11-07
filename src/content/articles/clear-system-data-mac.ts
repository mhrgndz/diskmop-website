import type { Article } from "../types";

export const clearSystemDataMac: Article = {
  slug: "clear-system-data-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-07-03",
  updated: "2026-11-06",
  readingTime: 8,
  content: {
    tr: {
      title: "Mac Sistem Verisi Temizleme: 6 Güvenli Yöntem",
      metaDescription:
        "Mac'te sistem verisi çok mu yer kaplıyor? Mac sistem verisi temizleme için güvenli, geri alınabilir 6 adımı öğrenin ve depolama alanı kazanın. Hemen başlayın.",
      subtitle:
        "Apple'ın En Belirsiz Depolama Kategorisini Güvenle Küçültme Rehberi",
      intro: [
        "Mac'te Sistem Verisi; önbellekler, günlük dosyaları, sanal bellek takas dosyaları, yerel Time Machine anlık görüntüleri ve macOS'in Uygulamalar ya da Belgeler gibi kategorilere yerleştiremediği diğer her şeyi kapsayan toplama kategorisidir. Bu alanı güvenle temizlemek için önbellekleri ve eski indirmeleri silmeniz, eski yedekleri kaldırmanız, çöp sepetini boşaltmanız ve yinelenen dosyaları temizlemeniz yeterlidir — riskli sistem klasörü silme işlemlerine gerek yoktur.",
        "Sistem Verisi kategorisi birçok Mac'te onlarca gigabayta ulaşabilir ve Apple bu alanın içinde tam olarak ne olduğunu göstermez. Forumlarda sık rastlanan tavsiye, Library klasörünün içeriğini topluca silmektir; ancak bu yaklaşım uygulamaların bozulmasına ve veri kaybına yol açabilir. Bu rehberde bunun yerine tamamen güvenli ve geri alınabilir altı yöntem bulacaksınız.",
        "Önce macOS'in yerleşik araçlarıyla yapılabilecek manuel adımları anlatacağız, ardından tüm bu işlemleri tek uygulamada toplayan Disk Mop'un macOS sürümünün süreci nasıl hızlandırdığını göstereceğiz. Adımları sırayla uygulayarak diskinizde gözle görülür bir alan açabilirsiniz.",
      ],
      keyTakeaways: [
        "Sistem Verisi; önbellekler, sistem günlükleri, sanal bellek takas dosyaları ve Time Machine anlık görüntülerini içeren dinamik bir kategoridir.",
        "Library klasörünü toptan silmek sistem stabilitesini bozar; yalnızca ~/Library/Caches ve ~/Library/Logs içerikleri seçici temizlenmelidir.",
        "Eski iOS aygıt yedekleri ve yerel Time Machine anlık görüntüleri tek başına 20-50 GB Sistem Verisi işgal edebilir.",
        "Mac'i yeniden başlatmak (restart), biriken takas (swap) ve geçici çalışma dosyalarını otomatik olarak sıfırlar.",
        "DiskMop görsel treemap analiziyle devasa önbellek ve gizli sistem kalıntılarını saniyeler içinde tespit eder.",
      ],
      dataTable: {
        caption:
          "Mac Sistem Verisini (System Data) oluşturan ana bileşenler ve güvenli temizleme yolları",
        columns: [
          "Bileşen",
          "Tipik Boyut",
          "Nerede Saklanır?",
          "Güvenli Temizleme Yolu",
        ],
        rows: [
          [
            "Kullanıcı ve Uygulama Önbellekleri",
            "5 – 25 GB",
            "~/Library/Caches",
            "Finder ile seçerek temizleme veya DiskMop Önbellek Temizleyici",
          ],
          [
            "Sistem ve Uygulama Günlükleri",
            "1 – 5 GB",
            "~/Library/Logs",
            "Eski .log dosyalarını temizleme",
          ],
          [
            "Yerel Time Machine Anlık Görüntüleri",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Terminal 'tmutil deletelocalsnapshots' komutu",
          ],
          [
            "Eski iPhone & iPad Yedekleri",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > Genel > Yedekleri Yönet menüsünden silme",
          ],
          [
            "Sanal Bellek Takas Dosyaları",
            "2 – 16 GB",
            "/private/var/vm",
            "Mac'i normal şekilde yeniden başlatma",
          ],
        ],
      },
      howTo: {
        name: "Mac Sistem Verisi Nasıl Güvenle Temizlenir?",
        totalTime: "PT10M",
        steps: [
          {
            name: "Depolama dağılımını kontrol edin",
            text: "Apple menüsü > Sistem Ayarları > Genel > Depolama yolunu izleyerek Sistem Verisi boyutunu ölçün.",
          },
          {
            name: "Kullanıcı önbelleklerini temizleyin",
            text: "Finder'da Shift-Command-G ile ~/Library/Caches klasörüne gidin ve eski uygulama önbelleklerini temizleyin.",
          },
          {
            name: "Eski cihaz yedeklerini silin",
            text: "Finder'da iPhone/iPad aygıt yönetiminden veya MobileSync klasöründen artık kullanılmayan yedekleri kaldırın.",
          },
          {
            name: "Time Machine yerel anlık görüntülerini inceltin",
            text: "Terminal'de 'tmutil listlocalsnapshots /' ile listelenen gereksiz anlık görüntüleri silin.",
          },
          {
            name: "Mac'inizi yeniden başlatın",
            text: "Sanal bellek takas dosyalarının ve geçici bellek kütlelerinin sıfırlanması için bilgisayarı yeniden başlatın.",
          },
        ],
      },
      faq: [
        {
          question:
            "Mac'te Sistem Verisi neden 50-100 GB gibi devasa boyutlara ulaşır?",
          answer:
            "Time Machine'in harici disk bağlı değilken aldığı yerel anlık görüntüler, Adobe ve Xcode gibi dev araçların render önbellekleri ve eski iPhone yedekleri Sistem Verisi'ni onlarca gigabayt şişirebilir.",
        },
        {
          question: "Library klasörünü tamamen silmek güvenli midir?",
          answer:
            "Kesinlikle hayır. Library klasörünün kendisini silmek macOS uygulamalarının çökmesine ve kişisel ayarların kaybolmasına yol açar. Yalnızca Caches ve Logs klasörlerinin içi seçici temizlenmelidir.",
        },
        {
          question: "Mac'i yeniden başlatmak Sistem Verisini azaltır mı?",
          answer:
            "Evet. macOS'in RAM yetmediğinde diske yazdığı sanal bellek (swap / sleepimage) takas dosyaları yeniden başlatma esnasında otomatik olarak temizlenir.",
        },
        {
          question: "Sistem Verisini tamamen sıfırlamak mümkün müdür?",
          answer:
            "Hayır. macOS temel işletim işlevlerini yürütmek için her zaman birkaç gigabaytlık aktif sistem önbelleğine ihtiyaç duyar. Sağlıklı bir Sistem Verisi boyutu 10–20 GB civarıdır.",
        },
      ],
      sections: [
        {
          title: "Mac'te Sistem Verisi Nelerden Oluşur?",
          content: [
            "Sistem Verisi, eski macOS sürümlerinde Diğer olarak adlandırılan kategorinin devamıdır. İçinde uygulama önbellekleri ve geçici dosyalar, sistem ve uygulama günlükleri, sanal bellek takas dosyaları, yerel Time Machine anlık görüntüleri, uygulama destek dosyaları, eklentiler, disk imajları ve arşivler ile Finder'ın sakladığı eski iPhone ve iPad yedekleri gibi çok farklı öğeler bulunur (iPhone tarafındaki benzer durum için [iPhone Sistem Verilerini temizleme](/blog/clear-system-data-iphone) rehberimize bakabilirsiniz).",
            "Kategorinin bu kadar belirsiz olmasının nedeni basittir: macOS, Uygulamalar, Fotoğraflar veya Belgeler gibi net kategorilere sığmayan her şeyi buraya toplar. Bu yüzden boyutu gün içinde bile dalgalanabilir; sistem takas dosyası büyüdükçe veya Time Machine yeni bir anlık görüntü aldıkça rakam artar. Birçok kullanıcının bu kategoriyi onlarca gigabayt boyutunda görmesi olağandır.",
            "Önemli bir not: Sistem Verisi'nin tamamı çöp değildir. Takas dosyalarını macOS kendisi yönetir ve yerel anlık görüntüleri disk dolmaya başladığında otomatik olarak inceltir. Hedefimiz bu kategorinin tamamını sıfırlamak değil, güvenle silinebilecek bayat kısmı — eski önbellekler, günlükler, kullanılmayan yedekler ve unutulmuş büyük dosyalar — ortadan kaldırmaktır.",
          ],
        },
        {
          title: "Sistem Ayarları'ndan Depolama Dağılımını Kontrol Edin",
          content: [
            "İlk adım, neyle karşı karşıya olduğunuzu görmektir. macOS Ventura ve sonrasında Apple menüsünden Sistem Ayarları'nı açın, Genel bölümüne girin ve depolama ekranını seçin. Renkli çubuğun hesaplanması birkaç dakika sürebilir; tamamlandığında her rengin üzerine gelerek hangi kategorinin ne kadar yer kapladığını görebilirsiniz. macOS Monterey ve öncesinde aynı ekrana Apple menüsünden Bu Mac Hakkında ve ardından Depolama sekmesiyle ulaşılır.",
            "Bu ekranda Apple'ın yerleşik önerileri de yer alır: iCloud'da saklama, izlenen film ve dizileri otomatik kaldıran depolama alanını optimize etme seçeneği ve çöp sepetini 30 gün sonra otomatik boşaltma ayarı. Ayrıca kategori listesinden Uygulamalar bölümüne girerek uzun süredir açmadığınız büyük uygulamaları doğrudan buradan silebilirsiniz.",
            "Ekranın en büyük eksiği ise Sistem Verisi satırıdır: bu satıra tıklayıp içeriği göremezsiniz. Özellikle [Mac başlangıç diski neredeyse dolu uyarısı](/blog/mac-startup-disk-almost-full) alıyorsanız ve Apple herhangi bir döküm sunmadığı için kategoriyi küçültmenin yolu, sonraki bölümlerdeki manuel adımlar ya da diskin içeriğini dosya düzeyinde gösteren bir analiz aracı kullanmaktır.",
          ],
        },
        {
          title:
            "Önbellekleri, Günlükleri ve Eski İndirmeleri Güvenle Temizleyin",
          content: [
            "En güvenli başlangıç noktası tarayıcı önbellekleridir, çünkü silindiklerinde yeniden oluşurlar. Safari'de Ayarlar'ın İleri Düzey bölümünden Geliştirme menüsünü etkinleştirip bu menüden önbellekleri boşaltabilirsiniz. Chrome, Firefox ve Edge'de ise gizlilik ayarları altındaki tarama verilerini temizleme seçeneği aynı işi görür.",
            "Kullanıcı önbellekleri için Finder'da Git menüsünden Klasöre Git'i seçin (Shift-Command-G) ve ~/Library/Caches yazın. Burada tanıdığınız uygulamaların klasörlerini açıp içeriklerini silebilirsiniz; klasörlerin kendisini silmeyin. Asla Library klasörünü topluca silmeyin ve /System altındaki hiçbir şeye dokunmayın — forumlardaki riskli tavsiye tam olarak budur. Günlük dosyaları için aynı yöntemle ~/Library/Logs klasörüne bakabilirsiniz. İşlem sonrası Mac'inizi yeniden başlatmak, takas dosyalarının da temizlenmesini sağlar.",
            "İndirilenler klasörü de Sistem Verisi kadar sinsi bir alan tüketicisidir. Klasörü boyuta ve tarihe göre sıralayın; işi biten .dmg kurulum dosyaları ve eski arşivler genellikle güvenle silinebilir. Disk Mop bu üç işi tek noktada toplar: Önbellek Temizleyici sistem ve uygulama önbelleklerini, Tarayıcı Önbelleği Temizleyici Chrome, Firefox, Edge ve Safari verilerini, İndirilenler Temizleyicisi ise eski dosyaları kategorilere ayırarak tek tıkla temizler.",
            "Detaylarını [Mac silinebilir alan ve yerel anlık görüntüler](/blog/mac-purgeable-space-local-snapshots) rehberimizde ele aldığımız diğer bir gizli kalem ise yerel Time Machine anlık görüntüleri. Terminal'de tmutil listlocalsnapshots / komutuyla mevcut anlık görüntüleri listeleyebilirsiniz. macOS disk dolduğunda bunları kendiliğinden siler; acil alan gerekiyorsa tmutil deletelocalsnapshots komutunu anlık görüntünün tarihiyle birlikte kullanabilirsiniz.",
          ],
        },
        {
          title: "Çöp Sepetini Boşaltın ve Yinelenen Dosyaları Kaldırın",
          content: [
            "Çöp sepetindeki dosyalar silinmiş sayılmaz; diskte yer kaplamaya devam eder. Dock'taki çöp sepeti simgesine Control ile tıklayıp boşaltabilir ya da Finder ayarlarının İleri Düzey bölümünden öğelerin 30 gün sonra otomatik silinmesini açabilirsiniz. Bu tek ayar bile depolama alanının sessizce dolmasını önler.",
            "Eski iPhone ve iPad yedekleri de Sistem Verisi'nin görünmez kalemlerindendir; her biri gigabaytlarca yer kaplayabilir. Cihazınızı Mac'e bağlayın, Finder kenar çubuğundan cihazı seçin ve Genel sekmesindeki yedekleri yönetme düğmesiyle artık kullanmadığınız yedekleri silin. Yedekler ~/Library içinde derinlerde saklandığından çoğu kullanıcı varlıklarından haberdar bile değildir.",
            "Yinelenen dosyalar ise en sık gözden kaçan alan israfıdır: iki kez dışa aktarılmış fotoğraflar, tekrar tekrar indirilmiş belgeler, kopyalanmış klasörler. Bunları elle bulmak saatler alabilir. Disk Mop'un Yinelenen Dosya Dedektörü, dosyaları SHA-256 karma değeriyle karşılaştırır; yani yalnızca bayt bayt özdeş kopyalar işaretlenir ve bir kopyayı silmek tamamen güvenlidir.",
          ],
        },
        {
          title: "Diskinizi Dolduranları Treemap ile Görün",
          content: [
            "Sistem Verisi ile mücadelenin temel sorunu görünmezliktir: Apple size toplam boyutu söyler ama içeriği göstermez. Treemap adı verilen görselleştirme bu sorunu kökten çözer; diskteki her klasör, kapladığı alanla orantılı bir kutu olarak çizilir ve en büyük alan tüketicileri ilk bakışta ortaya çıkar.",
            "Disk Mop'un Disk Analizi özelliği sürücünüzü tarayıp bu treemap görünümünü oluşturur. Devasa boyuta ulaşmış bir önbellek klasörünü, unutulmuş bir sanal makine imajını veya yıllardır duran disk imajlarını saniyeler içinde fark edersiniz. Büyük Dosya Bulucu da 500 MB üzerindeki tüm dosyaları tek listede toplar. Piyasadaki alternatifleri merak edenler için [CleanMyMac karşılaştırmamız](/blog/disk-mop-vs-cleanmymac) ve görsel treemap sunan [DaisyDisk incelememiz](/blog/disk-mop-vs-daisydisk) farklı araçların yeteneklerini kıyaslar.",
            "Disk Mop, macOS 12 ve sonrasında Apple Silicon ve Intel işlemcili Mac'lerde yerel olarak çalışır ve Apple tarafından noter onaylıdır. Silme kararı her zaman sizdedir: uygulama yalnızca ne bulduğunu gösterir, siz incelemeden hiçbir şey kaldırılmaz. Hem Windows hem Mac kullanıyorsanız aynı uygulamayı iki platformda da kullanabilirsiniz.",
          ],
        },
        {
          title: "Sistem Verisinin Yeniden Büyümesini Önleyin",
          content: [
            "Sistem Verisi temizliği tek seferlik bir iş değildir; önbellekler ve günlükler tasarım gereği yeniden oluşur. Ayda bir kez depolama ekranına bakmak ve büyümeyi erkenden fark etmek, kriz anında saatlerce temizlik yapmaktan çok daha kolaydır.",
            "Birkaç basit alışkanlık büyük fark yaratır: Mac'inizi düzenli olarak yeniden başlatın (takas dosyaları temizlenir), çöp sepetinin otomatik boşaltma ayarını açık tutun, kullanmadığınız uygulamaları tamamen kaldırın ve İndirilenler klasörünü ay sonunda gözden geçirin.",
            "Bu rutini otomatiğe bağlamak isterseniz Disk Mop'un Zamanlanmış Temizlik özelliği haftalık veya aylık görevler oluşturur; önbellek temizliği, eski indirmelerin silinmesi ve çöp sepetinin boşaltılması sizin yerinize yapılır. Tek tıklık Hızlandır özelliği aynı işlemleri istediğiniz anda çalıştırır, Sistem Sağlığı Puanı ise Mac'inizin genel durumunu tek bakışta gösterir.",
          ],
        },
      ],
      verdict: [
        "Mac'te Sistem Verisi korkutucu görünse de aslında yönetilebilir bir kategoridir. Depolama dağılımını kontrol etmek, önbellekleri ve günlükleri güvenle temizlemek, eski indirmeleri ve yedekleri kaldırmak, çöp sepetini boşaltmak, yinelenenleri silmek ve diski bir treemap ile görselleştirmek — bu altı adım, riskli Library silme tavsiyelerine hiç bulaşmadan gigabaytlarca alan kazandırır.",
        "Disk Mop tüm bu adımları tek uygulamada birleştirir: Disk Analizi, Büyük Dosya Bulucu, Yinelenen Dosya Dedektörü, Önbellek Temizleyici ve Zamanlanmış Temizlik macOS üzerinde bir arada çalışır. Uygulamayı ücretsiz indirip deneyebilir, tüm özellikler için 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisansa geçebilirsiniz.",
      ],
      ctaText: "Disk Mop ile Mac'inizde yer açın",
    },
    en: {
      title: "How to Clear System Data Storage on Mac: 6 Safe Ways",
      metaDescription:
        "Is System Data taking up space on your Mac? Learn what it includes and how to clear System Data storage on Mac safely with six reversible steps. Start now.",
      subtitle:
        "A Safe, Step-by-Step Guide to Shrinking macOS's Most Mysterious Storage Category",
      intro: [
        "System Data on a Mac is the catch-all storage category that holds caches, log files, virtual memory swap files, local Time Machine snapshots and everything else macOS cannot assign to categories like Apps or Documents. To clear System Data storage on Mac safely, you clean caches and old downloads, remove outdated backups, empty the Trash and delete duplicate files — no risky system-folder deletions required.",
        "On many Macs, System Data grows to tens of gigabytes, and Apple never shows you what is actually inside it. The advice you often find in forums is to bulk-delete the contents of the Library folder, which can break applications and cause data loss. This guide takes the opposite approach: six methods that are safe, reversible and fully under your control.",
        "We will start with the manual steps you can do with macOS's built-in tools, then show how the macOS version of Disk Mop bundles the same cleanup into a few clicks. Work through the steps in order and you should see a noticeable amount of space come back.",
      ],
      keyTakeaways: [
        "System Data is a dynamic catch-all category holding caches, system logs, virtual memory swap files, and Time Machine snapshots.",
        "Bulk-deleting the Library folder risks breaking apps; only contents in ~/Library/Caches and ~/Library/Logs should be selectively pruned.",
        "Outdated iOS device backups and local Time Machine snapshots alone can consume 20–50 GB of System Data.",
        "Restarting your Mac automatically flushes virtual memory swap files and temporary runtime allocations.",
        "DiskMop's visual treemap locates bloated caches and hidden system clutter within seconds.",
      ],
      dataTable: {
        caption:
          "Main components of Mac System Data and how to clean them safely",
        columns: [
          "Component",
          "Typical Size",
          "Storage Location",
          "Safe Cleaning Method",
        ],
        rows: [
          [
            "User & App Caches",
            "5 – 25 GB",
            "~/Library/Caches",
            "Selective removal via Finder or DiskMop Cache Cleaner",
          ],
          [
            "System & App Logs",
            "1 – 5 GB",
            "~/Library/Logs",
            "Prune outdated .log files",
          ],
          [
            "Local Time Machine Snapshots",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Terminal 'tmutil deletelocalsnapshots' command",
          ],
          [
            "Old iPhone & iPad Backups",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > General > Manage Backups",
          ],
          [
            "Virtual Memory Swap Files",
            "2 – 16 GB",
            "/private/var/vm",
            "Standard Mac restart",
          ],
        ],
      },
      howTo: {
        name: "How to Clear System Data on Mac Safely",
        totalTime: "PT10M",
        steps: [
          {
            name: "Inspect storage breakdown",
            text: "Open Apple menu > System Settings > General > Storage to check your current System Data footprint.",
          },
          {
            name: "Clear user caches",
            text: "Press Shift-Command-G in Finder, navigate to ~/Library/Caches, and clear obsolete app caches.",
          },
          {
            name: "Delete old device backups",
            text: "Manage and delete obsolete iPhone/iPad backups in Finder to free tens of gigabytes.",
          },
          {
            name: "Thin local Time Machine snapshots",
            text: "Run 'tmutil listlocalsnapshots /' in Terminal and prune accumulated snapshots.",
          },
          {
            name: "Restart your Mac",
            text: "Reboot your computer to automatically purge virtual memory swap and temporary runtime caches.",
          },
        ],
      },
      faq: [
        {
          question: "Why does System Data take up 50 to 100 GB on my Mac?",
          answer:
            "Local Time Machine snapshots created when backup drives are disconnected, massive render caches from apps like Adobe and Xcode, and old iOS device backups are the most common culprits.",
        },
        {
          question: "Is it safe to delete the Library folder on Mac?",
          answer:
            "No. Deleting the entire Library folder will corrupt user profiles and break applications. Only contents inside Caches and Logs should ever be selectively removed.",
        },
        {
          question: "Does restarting a Mac reduce System Data storage?",
          answer:
            "Yes. macOS automatically flushes virtual memory swap files and sleepimage cache files during a clean system reboot.",
        },
        {
          question: "Can System Data ever be reduced to zero?",
          answer:
            "No. macOS requires active runtime caches and fonts to operate properly. A normal, healthy System Data allocation ranges between 10 and 20 GB.",
        },
      ],
      sections: [
        {
          title: "What Counts as System Data on a Mac?",
          content: [
            "System Data is the successor to the category older macOS versions called Other. It contains a wide mix of items: application caches and temporary files, system and app logs, virtual memory swap files, local Time Machine snapshots, app support files, plug-ins and extensions, disk images and archives, and the old iPhone and iPad backups that Finder stores on your drive (for the iOS equivalent, see our guide on [how to clear System Data on iPhone](/blog/clear-system-data-iphone)).",
            "The reason the category feels so vague is simple: macOS lumps together everything that does not fit a clean bucket like Apps, Photos or Documents. That is also why the number fluctuates, sometimes within a single day — the swap file grows under memory pressure, and Time Machine quietly takes new local snapshots. Seeing this category reach tens of gigabytes is completely normal.",
            "One important reassurance before you start deleting: not all System Data is junk. macOS manages swap files itself and automatically thins local snapshots when the disk starts filling up. The goal is not to force the category to zero, but to remove the stale part that is safe to delete — old caches, logs, unused backups and forgotten large files.",
          ],
        },
        {
          title: "Check Your Storage Breakdown in System Settings",
          content: [
            "The first step is seeing what you are dealing with. On macOS Ventura and later, open the Apple menu, choose System Settings, go to General and select the storage screen. The colored bar can take a few minutes to calculate; once it finishes, hover over each segment to see how much space every category uses. On macOS Monterey and earlier, the same view lives under About This Mac in the Apple menu, on the Storage tab.",
            "This screen also surfaces Apple's built-in recommendations: storing files in iCloud, an optimize-storage option that removes movies and TV shows you have already watched, and a setting that empties the Trash automatically after 30 days. You can also open the Applications category from the list and delete large apps you have not launched in months directly from there.",
            "The screen has one big limitation, though: the System Data row is not clickable. Especially if you are facing a [Mac startup disk almost full warning](/blog/mac-startup-disk-almost-full), Apple provides no breakdown of what is inside it, which is why you need either manual cleanup or a dedicated disk analyzer.",
          ],
        },
        {
          title: "Clear Caches, Logs and Old Downloads Safely",
          content: [
            "The safest place to start is browser caches, because they rebuild themselves after deletion. In Safari, enable the Develop menu from the Advanced section of Safari's settings, then use it to empty caches. In Chrome, Firefox and Edge, the clear-browsing-data option in each browser's privacy settings does the same job.",
            "For user-level caches, open Finder, choose Go and then Go to Folder (Shift-Command-G), and enter ~/Library/Caches. Open the folders of apps you recognize and delete their contents — not the folders themselves. Never bulk-delete the Library folder and never touch anything under /System; that is precisely the risky forum advice this guide exists to replace. Log files can be reviewed the same way at ~/Library/Logs. Restart your Mac afterwards, which also clears the swap files that count toward System Data.",
            "The Downloads folder is another quiet space consumer. Sort it by size and date; old .dmg installers and archives you have already used can usually be deleted without a second thought. Disk Mop brings these three chores together: its Cache Cleaner handles system and application caches, the Browser Cache Cleaner covers Chrome, Firefox, Edge and Safari, and the Downloads Cleaner categorizes old files so you can clear them in one click.",
            "As explained in our guide on [Mac purgeable space and local snapshots](/blog/mac-purgeable-space-local-snapshots), another hidden item deserves a mention: local Time Machine snapshots. In Terminal, the command tmutil listlocalsnapshots / lists the snapshots currently on your disk. macOS deletes them on its own when space runs low, but if you need room immediately, you can run tmutil deletelocalsnapshots followed by the snapshot's date.",
          ],
        },
        {
          title: "Empty the Trash and Remove Duplicate Files",
          content: [
            "Files in the Trash are not really gone — they still occupy disk space. Control-click the Trash icon in the Dock and choose to empty it, or better, open Finder's settings, go to Advanced and enable the option that removes items from the Trash after 30 days. That single setting stops storage from silently filling up again.",
            "Old iPhone and iPad backups are another invisible line item in System Data, and each one can weigh several gigabytes. Connect your device, select it in the Finder sidebar and use the manage-backups button on the General tab to delete backups you no longer need. Because they are stored deep inside the Library folder, most users never realize they exist.",
            "Duplicate files are the most commonly overlooked waste of space: photos exported twice, documents downloaded again and again, folders copied for safety and forgotten. Hunting them manually can take hours. Disk Mop's Duplicate Detector compares files by their SHA-256 hash, which means only byte-for-byte identical copies get flagged — so deleting one copy is completely safe.",
          ],
        },
        {
          title: "See Exactly What Fills Your Disk with a Treemap",
          content: [
            "The core problem with fighting System Data is invisibility: Apple tells you the total but never shows the contents. A treemap visualization solves this at the root. Every folder on your disk is drawn as a rectangle proportional to the space it uses, so the biggest space consumers jump out at first glance.",
            "Disk Mop's Disk Analysis feature scans your drive and builds exactly this treemap view. A cache folder that has ballooned out of control, a forgotten virtual machine image or a stack of disk images from years ago becomes obvious within seconds. The Large File Finder complements it by listing every file over 500 MB in a single view. If you are comparing tools, our guides on [Disk Mop vs CleanMyMac](/blog/disk-mop-vs-cleanmymac) and [Disk Mop vs DaisyDisk](/blog/disk-mop-vs-daisydisk) explore how different Mac disk cleaners stack up.",
            "Disk Mop runs natively on macOS 12 and later, on both Apple Silicon and Intel Macs, and is notarized by Apple. You stay in control the whole time: the app only shows you what it found, and nothing is removed without your review. If you use both Windows and Mac, the same app covers both platforms.",
          ],
        },
        {
          title: "Keep System Data from Growing Back",
          content: [
            "Clearing System Data is not a one-time job — caches and logs rebuild by design. A quick look at the storage screen once a month lets you catch growth early, which is far easier than doing a marathon cleanup when the disk-full warning appears.",
            "A few simple habits make a big difference: restart your Mac regularly so swap files get cleared, keep the automatic Trash-emptying setting on, uninstall applications you no longer use, and give the Downloads folder a quick review at the end of each month.",
            "If you would rather put the routine on autopilot, Disk Mop's Scheduled Cleanup creates weekly or monthly tasks that clean caches, remove old downloads and empty the Trash for you. The one-click Speed Up feature runs the same cleanup on demand, and the System Health Score shows your Mac's overall condition at a glance.",
          ],
        },
      ],
      verdict: [
        "System Data on a Mac looks intimidating, but it is a manageable category once you know what feeds it. Checking your storage breakdown, clearing caches and logs safely, removing old downloads and device backups, emptying the Trash, deleting duplicates and visualizing the disk with a treemap — these six steps can recover gigabytes of space without ever touching the risky Library-deletion advice found in forums.",
        "Disk Mop combines all six steps in one app: Disk Analysis, the Large File Finder, the Duplicate Detector, the Cache Cleaner and Scheduled Cleanup all work together on macOS. You can download it for free to try the essentials, and a one-time payment of $19.90 unlocks every feature with a lifetime license.",
      ],
      ctaText: "Free up space on your Mac with Disk Mop",
    },
    de: {
      title: "Systemdaten auf dem Mac löschen: 6 sichere Methoden",
      metaDescription:
        "Systemdaten belegen zu viel Speicher auf dem Mac? Erfahren Sie, was Systemdaten sind und wie Sie sie sicher löschen — in sechs Schritten. Jetzt Platz schaffen.",
      subtitle:
        "Der sichere Weg, die rätselhafteste Speicherkategorie von macOS zu verkleinern",
      intro: [
        "Systemdaten sind auf dem Mac die Sammelkategorie für Caches, Protokolldateien, Auslagerungsdateien des virtuellen Speichers, lokale Time-Machine-Schnappschüsse und alles, was macOS keiner Kategorie wie Apps oder Dokumente zuordnen kann. Um Systemdaten sicher zu löschen, bereinigen Sie Caches und alte Downloads, entfernen veraltete Backups, leeren den Papierkorb und löschen doppelte Dateien — riskante Eingriffe in Systemordner sind nicht nötig.",
        "Auf vielen Macs wachsen die Systemdaten auf Dutzende Gigabyte an, und Apple zeigt nie, was genau darin steckt. In Foren wird oft empfohlen, den Library-Ordner pauschal zu leeren — das kann jedoch Apps beschädigen und Daten kosten. Dieser Leitfaden zeigt stattdessen sechs sichere, umkehrbare Methoden, die vollständig in Ihrer Hand bleiben.",
        "Wir beginnen mit den manuellen Schritten über die Bordmittel von macOS und zeigen anschließend, wie die macOS-Version von Disk Mop dieselbe Bereinigung auf wenige Klicks reduziert. Arbeiten Sie die Schritte der Reihe nach ab, dann sollte spürbar Speicherplatz auf Ihrem Laufwerk zurückkommen.",
      ],
      keyTakeaways: [
        "Die Kategorie 'Systemdaten' ist ein dynamischer Sammelbereich für Caches, Systemprotokolle, Swap-Dateien des virtuellen Arbeitsspeichers und Time Machine-Schnappschüsse.",
        "Das pauschale Löschen des Library-Ordners kann Anwendungen unbrauchbar machen; nur Inhalte in ~/Library/Caches und ~/Library/Logs sollten selektiv entfernt werden.",
        "Veraltete Backups von iOS-Geräten und lokale Time Machine-Schnappschüsse können allein 20–50 GB der Systemdaten belegen.",
        "Ein Neustart Ihres Mac leert automatisch Swap-Dateien des virtuellen Speichers und temporäre Laufzeitdateien.",
        "Die visuelle Treemap von DiskMop spürt überquellende Caches und versteckten Systemmüll auf dem Mac innerhalb von Sekunden auf.",
      ],
      sections: [
        {
          title: "Was zählt auf dem Mac zu den Systemdaten?",
          content: [
            "Systemdaten sind der Nachfolger der Kategorie, die ältere macOS-Versionen als Andere bezeichneten. Darin stecken App-Caches und temporäre Dateien, System- und App-Protokolle, Auslagerungsdateien, lokale Time-Machine-Schnappschüsse, App-Support-Dateien, Plug-ins und Erweiterungen, Disk-Images und Archive sowie alte iPhone- und iPad-Backups, die der Finder auf dem Laufwerk ablegt.",
            "Die Kategorie wirkt so vage, weil macOS schlicht alles hineinpackt, was nicht in klare Kategorien wie Apps, Fotos oder Dokumente passt. Deshalb schwankt die Größe auch ständig: Die Auslagerungsdatei wächst bei Speicherdruck, und Time Machine erstellt im Hintergrund neue Schnappschüsse. Werte von mehreren Dutzend Gigabyte sind völlig normal.",
            "Wichtig zu wissen: Nicht alle Systemdaten sind Müll. macOS verwaltet Auslagerungsdateien selbst und verkleinert lokale Schnappschüsse automatisch, wenn der Speicher knapp wird. Ziel ist nicht null, sondern das sichere Entfernen des veralteten Teils — alte Caches, Protokolle, ungenutzte Backups und vergessene große Dateien.",
          ],
        },
        {
          title: "Speicherübersicht in den Systemeinstellungen prüfen",
          content: [
            "Verschaffen Sie sich zuerst einen Überblick. Öffnen Sie unter macOS Ventura und neuer das Apple-Menü, wählen Sie Systemeinstellungen, gehen Sie zu Allgemein und öffnen Sie die Speicheransicht. Die farbige Leiste braucht einige Minuten zur Berechnung; danach zeigt jedes Segment beim Überfahren seine Größe. Unter macOS Monterey und älter finden Sie dieselbe Ansicht im Apple-Menü unter Über diesen Mac im Tab Speicher.",
            "Dort erscheinen auch Apples eigene Empfehlungen: Dateien in iCloud speichern, die Speicheroptimierung, die bereits gesehene Filme und Serien entfernt, und das automatische Leeren des Papierkorbs nach 30 Tagen. Über die Kategorienliste können Sie zudem große, lange nicht genutzte Apps direkt löschen.",
            "Die große Schwäche der Ansicht: Die Zeile Systemdaten lässt sich nicht öffnen. Apple liefert keine Aufschlüsselung — genau deshalb brauchen Sie die manuellen Schritte der nächsten Abschnitte oder ein Analysetool, das das Laufwerk auf Dateiebene zeigt.",
          ],
        },
        {
          title: "Caches, Protokolle und alte Downloads sicher bereinigen",
          content: [
            "Am sichersten starten Sie mit den Browser-Caches, denn sie bauen sich nach dem Löschen selbst wieder auf. In Safari aktivieren Sie das Entwickler-Menü über den Bereich Erweitert in den Safari-Einstellungen und leeren darüber die Caches. In Chrome, Firefox und Edge erledigt das Löschen der Browserdaten in den Datenschutzeinstellungen dieselbe Aufgabe.",
            "Für Benutzer-Caches wählen Sie im Finder das Menü Gehe zu, dann Gehe zum Ordner (Shift-Command-G) und geben ~/Library/Caches ein. Öffnen Sie die Ordner von Apps, die Sie kennen, und löschen Sie deren Inhalt — nicht die Ordner selbst. Löschen Sie niemals den gesamten Library-Ordner und fassen Sie nichts unter /System an; genau das ist der riskante Forenrat, den dieser Leitfaden ersetzt. Protokolle finden Sie auf demselben Weg unter ~/Library/Logs. Starten Sie den Mac danach neu — das leert auch die Auslagerungsdateien.",
            "Auch der Downloads-Ordner frisst still Speicherplatz. Sortieren Sie ihn nach Größe und Datum; benutzte .dmg-Installationsdateien und alte Archive können in der Regel weg. Disk Mop bündelt diese Aufgaben: Der Cache-Bereiniger übernimmt System- und App-Caches, der Browser-Cache-Bereiniger deckt Chrome, Firefox, Edge und Safari ab, und der Downloads-Bereiniger sortiert alte Dateien für die Bereinigung mit einem Klick.",
            "Ein versteckter Posten fehlt noch: lokale Time-Machine-Schnappschüsse. Im Terminal listet der Befehl tmutil listlocalsnapshots / die vorhandenen Schnappschüsse auf. macOS löscht sie bei Platzmangel selbst; wer sofort Platz braucht, nutzt tmutil deletelocalsnapshots gefolgt vom Datum des Schnappschusses.",
          ],
        },
        {
          title: "Papierkorb leeren und doppelte Dateien entfernen",
          content: [
            "Dateien im Papierkorb sind nicht wirklich gelöscht — sie belegen weiter Speicherplatz. Klicken Sie mit gedrückter Control-Taste auf das Papierkorb-Symbol im Dock und leeren Sie ihn, oder aktivieren Sie besser in den Finder-Einstellungen unter Erweitert das automatische Entfernen von Objekten nach 30 Tagen. Schon diese eine Einstellung verhindert, dass sich der Speicher unbemerkt wieder füllt.",
            "Alte iPhone- und iPad-Backups sind ein weiterer unsichtbarer Posten der Systemdaten und können jeweils mehrere Gigabyte belegen. Verbinden Sie das Gerät, wählen Sie es in der Finder-Seitenleiste aus und löschen Sie über die Backup-Verwaltung im Tab Allgemein die Sicherungen, die Sie nicht mehr brauchen. Da sie tief im Library-Ordner liegen, ahnen die meisten Nutzer nicht einmal, dass es sie überhaupt gibt.",
            "Doppelte Dateien sind die am häufigsten übersehene Platzverschwendung: doppelt exportierte Fotos, mehrfach heruntergeladene Dokumente, kopierte und vergessene Ordner. Sie von Hand aufzuspüren kann Stunden dauern. Disk Mops Duplikat-Detektor vergleicht Dateien per SHA-256-Hash — markiert werden nur Byte für Byte identische Kopien, das Löschen einer Kopie ist also völlig sicher.",
          ],
        },
        {
          title: "Mit einer Treemap sehen, was die Festplatte füllt",
          content: [
            "Das Kernproblem im Kampf gegen Systemdaten ist die Unsichtbarkeit: Apple nennt die Gesamtgröße, zeigt aber nie den Inhalt. Eine Treemap löst das an der Wurzel — jeder Ordner erscheint als Rechteck proportional zu seinem Platzverbrauch, und die größten Speicherfresser springen sofort ins Auge.",
            "Disk Mops Festplattenanalyse scannt das Laufwerk und erstellt genau diese Treemap-Ansicht. Ein außer Kontrolle geratener Cache-Ordner, ein vergessenes VM-Image oder jahrealte Disk-Images werden in Sekunden sichtbar. Der Große-Dateien-Finder ergänzt das Bild mit einer Liste aller Dateien über 500 MB.",
            "Disk Mop läuft nativ unter macOS 12 und neuer, auf Apple-Silicon- und Intel-Macs, und ist von Apple notarisiert. Sie behalten jederzeit die Kontrolle: Die App zeigt nur, was sie gefunden hat — gelöscht wird nichts ohne Ihre Prüfung. Wer Windows und Mac nutzt, deckt mit derselben App beide Plattformen ab.",
          ],
        },
        {
          title: "Verhindern, dass die Systemdaten wieder anwachsen",
          content: [
            "Die Bereinigung der Systemdaten ist keine einmalige Aufgabe — Caches und Protokolle bauen sich konstruktionsbedingt neu auf. Ein kurzer Blick auf die Speicheransicht einmal im Monat erkennt Wachstum früh und erspart die Marathon-Bereinigung bei voller Festplatte.",
            "Ein paar einfache Gewohnheiten helfen enorm: Starten Sie den Mac regelmäßig neu, damit Auslagerungsdateien geleert werden, lassen Sie das automatische Papierkorb-Leeren aktiviert, deinstallieren Sie ungenutzte Apps und werfen Sie monatlich einen Blick in den Downloads-Ordner.",
            "Wer die Routine automatisieren möchte, nutzt Disk Mops geplante Bereinigung: Wöchentliche oder monatliche Aufgaben bereinigen Caches, entfernen alte Downloads und leeren den Papierkorb. Die Ein-Klick-Funktion Speed Up führt dieselbe Bereinigung bei Bedarf sofort aus, und der Systemzustand-Score zeigt den Gesamtzustand des Mac auf einen Blick.",
          ],
        },
      ],
      howTo: {
        name: "So bereinigen Sie die Systemdaten auf dem Mac sicher",
        totalTime: "PT10M",
        steps: [
          {
            name: "Speicherbelegung überprüfen",
            text: "Öffnen Sie das Apple-Menü > Systemeinstellungen > Allgemein > Speicher, um den aktuellen Speicherbedarf Ihrer Systemdaten zu sehen.",
          },
          {
            name: "Benutzer-Caches leeren",
            text: "Drücken Sie im Finder Umschalt-Befehl-G, geben Sie ~/Library/Caches ein und löschen Sie veraltete Cache-Dateien geschlossener Apps.",
          },
          {
            name: "Alte Geräte-Backups entfernen",
            text: "Verwalten und löschen Sie veraltete iPhone- und iPad-Sicherungen im Finder, um auf einen Schlag Dutzende Gigabyte freizugeben.",
          },
          {
            name: "Lokale Time Machine-Schnappschüsse ausdünnen",
            text: "Führen Sie im Terminal 'tmutil listlocalsnapshots /' aus und löschen Sie nicht mehr benötigte lokale Snapshots.",
          },
          {
            name: "Mac neu starten",
            text: "Starten Sie Ihren Computer neu, um virtuellen Swap-Speicher und temporäre Systemcaches automatisch zu leeren.",
          },
        ],
      },
      dataTable: {
        caption:
          "Hauptbestandteile der Mac-Systemdaten und sichere Bereinigungsmethoden",
        columns: [
          "Komponente",
          "Typische Größe",
          "Speicherort",
          "Sichere Bereinigungsmethode",
        ],
        rows: [
          [
            "Benutzer- & App-Caches",
            "5 – 25 GB",
            "~/Library/Caches",
            "Gezielte Bereinigung über Finder oder DiskMop Cache-Cleaner",
          ],
          [
            "System- & App-Protokolle (Logs)",
            "1 – 5 GB",
            "~/Library/Logs",
            "Veraltete .log-Dateien manuell oder automatisch löschen",
          ],
          [
            "Lokale Time Machine-Snapshots",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Terminal-Befehl 'tmutil deletelocalsnapshots'",
          ],
          [
            "Alte iPhone- & iPad-Backups",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > Allgemein > Backups verwalten",
          ],
          [
            "Virtuelle Speicher-Swap-Dateien",
            "2 – 16 GB",
            "/private/var/vm",
            "Regulärer Mac-Neustart",
          ],
        ],
      },
      faq: [
        {
          question:
            "Warum belegen die Systemdaten auf meinem Mac 50 bis 100 GB?",
          answer:
            "Häufigste Ursachen sind lokale Time Machine-Schnappschüsse (die entstehen, wenn externe Backup-Laufwerke nicht verbunden sind), riesige Render-Caches von Programmen wie Adobe oder Xcode sowie alte iOS-Geräte-Backups.",
        },
        {
          question: "Ist es sicher, den Library-Ordner auf dem Mac zu löschen?",
          answer:
            "Nein. Das Löschen des gesamten Library-Ordners zerstört Benutzerprofile und verhindert den Start vieler Apps. Entfernen Sie stets nur selektive Inhalte innerhalb von Unterordnern wie 'Caches' und 'Logs'.",
        },
        {
          question:
            "Verringert ein Neustart des Mac den Speicherbedarf der Systemdaten?",
          answer:
            "Ja. macOS löscht temporäre Swap-Dateien des virtuellen Speichers und Sleepimage-Cache-Dateien automatisch bei einem regulären Systemneustart.",
        },
        {
          question: "Können die Systemdaten jemals auf 0 GB reduziert werden?",
          answer:
            "Nein. macOS benötigt grundlegende Caches und Schriftarten für den einwandfreien Betrieb. Eine normale, gesunde Größe der Systemdaten liegt im Bereich zwischen 10 und 20 GB.",
        },
      ],
      verdict: [
        "Systemdaten wirken auf dem Mac einschüchternd, sind aber gut beherrschbar, sobald man weiß, was sie speist. Speicherübersicht prüfen, Caches und Protokolle sicher bereinigen, alte Downloads und Geräte-Backups entfernen, Papierkorb leeren, Duplikate löschen und die Festplatte per Treemap sichtbar machen — diese sechs Schritte gewinnen etliche Gigabyte zurück, ganz ohne die riskanten Library-Löschtipps aus Foren.",
        "Disk Mop vereint alle sechs Schritte in einer App: Festplattenanalyse, Große-Dateien-Finder, Duplikat-Detektor, Cache-Bereiniger und geplante Bereinigung arbeiten unter macOS zusammen. Der Download ist kostenlos, und eine einmalige Zahlung von 19,90 $ schaltet mit lebenslanger Lizenz alle Funktionen frei.",
      ],
      ctaText: "Schaffen Sie mit Disk Mop Platz auf Ihrem Mac",
    },
    fr: {
      title: "Effacer les données système sur Mac : 6 méthodes sûres",
      metaDescription:
        "Les données système saturent le stockage de votre Mac ? Découvrez ce que contient cette catégorie et comment la réduire en six étapes sûres et réversibles.",
      subtitle:
        "Le guide sûr, étape par étape, pour réduire la catégorie de stockage la plus mystérieuse de macOS",
      intro: [
        "Sur un Mac, les données système (System Data) forment la catégorie fourre-tout qui regroupe les caches, les fichiers journaux, les fichiers d'échange de la mémoire virtuelle, les instantanés locaux de Time Machine et tout ce que macOS ne parvient pas à ranger dans des catégories comme Apps ou Documents. Pour libérer cet espace sans risque, il suffit de nettoyer les caches et les anciens téléchargements, de supprimer les sauvegardes obsolètes, de vider la Corbeille et d'effacer les fichiers en double — aucune suppression hasardeuse dans les dossiers système n'est nécessaire.",
        "Sur beaucoup de Mac, les données système atteignent des dizaines de gigaoctets, et Apple ne montre jamais ce qu'elles contiennent réellement. Le conseil que l'on croise sans cesse sur les forums consiste à vider en bloc le dossier Bibliothèque (Library), au risque de casser des applications et de perdre des données. Ce guide prend le chemin inverse : six méthodes sûres, réversibles et entièrement sous votre contrôle.",
        "Nous commencerons par les manipulations manuelles réalisables avec les outils intégrés de macOS, puis nous verrons comment la version macOS de Disk Mop regroupe le même nettoyage en quelques clics. Suivez les étapes dans l'ordre et vous devriez récupérer une quantité d'espace tout à fait visible.",
      ],
      keyTakeaways: [
        "La catégorie 'Données Système' est un ensemble dynamique regroupant caches, journaux, fichiers de swap mémoire et instantanés Time Machine.",
        "Supprimer brutalement le dossier Bibliothèque peut bloquer vos applications ; seuls les contenus de ~/Library/Caches et ~/Library/Logs doivent être triés.",
        "Les anciennes sauvegardes d'appareils iOS et les instantanés locaux Time Machine peuvent à eux seuls monopoliser de 20 à 50 Go de Données Système.",
        "Redémarrer votre Mac vide automatiquement les fichiers de swap de mémoire virtuelle et les allocations de mémoire temporaires.",
        "L'arborescence visuelle de DiskMop identifie en quelques secondes les caches démesurés et les fichiers système cachés sur Mac.",
      ],
      sections: [
        {
          title: "Que contiennent vraiment les données système d'un Mac ?",
          content: [
            "Les données système ont remplacé la catégorie que les anciennes versions de macOS appelaient Autre. On y trouve un mélange très large : caches applicatifs et fichiers temporaires, journaux du système et des apps, fichiers d'échange de la mémoire virtuelle, instantanés locaux de Time Machine, fichiers de support d'applications, modules et extensions, images disque et archives, sans oublier les anciennes sauvegardes d'iPhone et d'iPad que le Finder conserve sur votre disque.",
            "Si la catégorie paraît aussi floue, la raison est simple : macOS y entasse tout ce qui n'entre pas dans une case nette comme Apps, Photos ou Documents. C'est aussi pourquoi le chiffre fluctue, parfois au cours d'une même journée — le fichier d'échange grossit dès que la mémoire est sollicitée et Time Machine crée discrètement de nouveaux instantanés locaux. Voir cette catégorie grimper à plusieurs dizaines de gigaoctets n'a donc rien d'anormal.",
            "Une précision rassurante avant de supprimer quoi que ce soit : toutes les données système ne sont pas des déchets. macOS gère lui-même les fichiers d'échange et allège automatiquement les instantanés locaux dès que le disque commence à se remplir. L'objectif n'est pas de ramener la catégorie à zéro, mais d'en retirer la part périmée que l'on peut effacer sans danger : vieux caches, journaux, sauvegardes inutilisées et gros fichiers oubliés.",
          ],
        },
        {
          title:
            "Consultez la répartition du stockage dans les Réglages Système",
          content: [
            "La première étape consiste à voir à quoi vous avez affaire. Sous macOS Ventura et versions ultérieures, ouvrez le menu Pomme, choisissez Réglages Système, allez dans Général et ouvrez l'écran Stockage. Le calcul de la barre colorée peut prendre quelques minutes ; une fois terminé, survolez chaque segment pour connaître l'espace occupé par chaque catégorie. Sous macOS Monterey et versions antérieures, le même écran se trouve dans le menu Pomme, sous « À propos de ce Mac », onglet Stockage.",
            "Cet écran affiche également les recommandations intégrées d'Apple : le stockage des fichiers dans iCloud, une option d'optimisation qui supprime les films et séries déjà regardés, et un réglage qui vide automatiquement la Corbeille au bout de 30 jours. Vous pouvez aussi ouvrir la catégorie Applications depuis la liste et supprimer directement les grosses apps que vous n'avez pas lancées depuis des mois.",
            "L'écran souffre toutefois d'une grosse limite : la ligne Données système n'est pas cliquable. Apple ne fournit aucun détail de son contenu, et c'est précisément pour cela qu'il vous faut soit les manipulations manuelles des sections suivantes, soit un analyseur de disque capable de montrer votre volume fichier par fichier.",
          ],
        },
        {
          title:
            "Nettoyez sans risque les caches, les journaux et les anciens téléchargements",
          content: [
            "Le point de départ le plus sûr reste les caches des navigateurs, car ils se reconstruisent tout seuls après suppression. Dans Safari, activez le menu Développement depuis la section Avancées des réglages de Safari, puis servez-vous-en pour vider les caches. Dans Chrome, Firefox et Edge, l'option d'effacement des données de navigation, dans les réglages de confidentialité, remplit exactement le même rôle.",
            "Pour les caches au niveau utilisateur, ouvrez le Finder, choisissez Aller puis Aller au dossier (Shift-Command-G) et saisissez ~/Library/Caches. Ouvrez les dossiers des applications que vous reconnaissez et supprimez leur contenu — pas les dossiers eux-mêmes. Ne videz jamais en bloc le dossier Bibliothèque et ne touchez à rien sous /System : c'est exactement le conseil risqué que ce guide est là pour remplacer. Les fichiers journaux s'examinent de la même façon dans ~/Library/Logs. Redémarrez ensuite votre Mac, ce qui vide aussi les fichiers d'échange comptabilisés dans les données système.",
            "Le dossier Téléchargements est un autre dévoreur d'espace discret. Triez-le par taille et par date : les vieux fichiers d'installation .dmg et les archives déjà utilisées peuvent presque toujours partir sans regret. Disk Mop réunit ces trois corvées au même endroit : son nettoyeur de cache (Cache Cleaner) s'occupe des caches système et applicatifs, le nettoyeur de cache navigateur (Browser Cache Cleaner) couvre Chrome, Firefox, Edge et Safari, et le nettoyeur de téléchargements (Downloads Cleaner) classe les anciens fichiers par catégorie pour que vous les effaciez en un clic.",
            "Un dernier élément caché mérite d'être mentionné : les instantanés locaux de Time Machine. Dans le Terminal, la commande tmutil listlocalsnapshots / liste les instantanés présents sur votre disque. macOS les supprime de lui-même lorsque la place vient à manquer, mais si vous avez besoin d'espace immédiatement, vous pouvez lancer tmutil deletelocalsnapshots suivi de la date de l'instantané.",
          ],
        },
        {
          title: "Videz la Corbeille et supprimez les fichiers en double",
          content: [
            "Les fichiers placés dans la Corbeille ne sont pas vraiment partis : ils occupent toujours de l'espace disque. Cliquez sur l'icône de la Corbeille dans le Dock en maintenant la touche Contrôle et choisissez de la vider ou, mieux, ouvrez les réglages du Finder, allez dans Avancé et activez l'option qui supprime les éléments de la Corbeille au bout de 30 jours. Ce simple réglage empêche le stockage de se remplir à nouveau en silence.",
            "Les anciennes sauvegardes d'iPhone et d'iPad forment une autre ligne invisible des données système, et chacune peut peser plusieurs gigaoctets. Connectez votre appareil, sélectionnez-le dans la barre latérale du Finder et utilisez le bouton de gestion des sauvegardes de l'onglet Général pour effacer celles dont vous n'avez plus besoin. Comme elles sont enfouies au fond du dossier Bibliothèque, la plupart des utilisateurs ignorent jusqu'à leur existence.",
            "Les fichiers en double sont le gaspillage d'espace le plus souvent négligé : photos exportées deux fois, documents téléchargés encore et encore, dossiers copiés par précaution puis oubliés. Les traquer à la main peut prendre des heures. Le détecteur de doublons (Duplicate Detector) de Disk Mop compare les fichiers par leur empreinte SHA-256 : seules les copies strictement identiques, octet par octet, sont signalées — supprimer l'un des exemplaires est donc parfaitement sûr.",
          ],
        },
        {
          title: "Voyez enfin ce qui remplit votre disque grâce à une treemap",
          content: [
            "Le vrai problème des données système, c'est leur invisibilité : Apple vous donne un total mais ne montre jamais le détail. Une visualisation en treemap règle la question à la racine. Chaque dossier de votre disque y est dessiné sous forme de rectangle proportionnel à l'espace qu'il occupe : les plus gros consommateurs sautent aux yeux dès le premier coup d'œil.",
            "L'analyse de disque (Disk Analysis) de Disk Mop scanne votre volume et construit exactement cette vue en treemap. Un dossier de cache devenu incontrôlable, une image de machine virtuelle oubliée ou une pile d'images disque vieilles de plusieurs années apparaissent en quelques secondes. Le détecteur de gros fichiers (Large File Finder) complète le tableau en listant, dans une seule vue, tous les fichiers de plus de 500 Mo.",
            "Disk Mop fonctionne nativement sous macOS 12 et versions ultérieures, sur les Mac Apple Silicon comme sur les Mac Intel, et il est notarisé par Apple. Vous gardez la main du début à la fin : l'application se contente de montrer ce qu'elle a trouvé et rien n'est supprimé sans votre validation. Si vous utilisez à la fois Windows et Mac, la même application couvre les deux plateformes.",
          ],
        },
        {
          title: "Empêchez les données système de regrossir",
          content: [
            "Nettoyer les données système n'est pas une opération unique : les caches et les journaux se reconstituent par conception. Un coup d'œil rapide à l'écran Stockage une fois par mois suffit à repérer la croissance très tôt, ce qui est bien plus confortable qu'un marathon de nettoyage le jour où l'alerte de disque plein s'affiche.",
            "Quelques habitudes simples changent tout : redémarrez régulièrement votre Mac pour que les fichiers d'échange soient vidés, laissez activé le vidage automatique de la Corbeille, désinstallez complètement les applications dont vous ne vous servez plus et passez en revue le dossier Téléchargements à la fin de chaque mois.",
            "Si vous préférez mettre cette routine en pilote automatique, le nettoyage planifié (Scheduled Cleanup) de Disk Mop crée des tâches hebdomadaires ou mensuelles qui nettoient les caches, suppriment les anciens téléchargements et vident la Corbeille à votre place. La fonction Accélérer (Speed Up) exécute le même nettoyage à la demande, en un clic, tandis que l'indice de santé du système (System Health Score) résume l'état général de votre Mac d'un seul regard.",
          ],
        },
      ],
      howTo: {
        name: "Comment nettoyer en toute sécurité les Données Système sur Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Vérifier la répartition du stockage",
            text: "Allez dans le menu Pomme > Réglages Système > Général > Stockage pour consulter la taille exacte de vos Données Système.",
          },
          {
            name: "Nettoyer les caches utilisateur",
            text: "Dans le Finder, faites Maj-Commande-G, saisissez ~/Library/Caches et videz les caches obsolètes d'applications fermées.",
          },
          {
            name: "Supprimer les vieilles sauvegardes d'appareils",
            text: "Gérez et supprimez les sauvegardes obsolètes d'iPhone ou d'iPad depuis le Finder pour libérer des dizaines de gigaoctets.",
          },
          {
            name: "Alléger les instantanés locaux Time Machine",
            text: "Exécutez 'tmutil listlocalsnapshots /' dans le Terminal et supprimez les instantanés accumulés.",
          },
          {
            name: "Redémarrer le Mac",
            text: "Redémarrez l'ordinateur afin de purger automatiquement la mémoire virtuelle swap et les caches temporaires du système.",
          },
        ],
      },
      dataTable: {
        caption:
          "Composants principaux des Données Système sur Mac et méthodes de nettoyage",
        columns: [
          "Composant",
          "Taille typique",
          "Emplacement",
          "Méthode sûre de nettoyage",
        ],
        rows: [
          [
            "Caches utilisateur & applications",
            "5 – 25 Go",
            "~/Library/Caches",
            "Nettoyage sélectif via Finder ou le nettoyeur de cache DiskMop",
          ],
          [
            "Journaux système & apps (Logs)",
            "1 – 5 Go",
            "~/Library/Logs",
            "Supprimer les anciens fichiers .log",
          ],
          [
            "Instantanés locaux Time Machine",
            "10 – 50 Go",
            "/Volumes/Data/.MobileBackups",
            "Commande Terminal 'tmutil deletelocalsnapshots'",
          ],
          [
            "Sauvegardes iPhone & iPad",
            "10 – 80 Go",
            "~/Library/Application Support/MobileSync",
            "Finder > Général > Gérer les sauvegardes",
          ],
          [
            "Fichiers d'échange de mémoire virtuelle",
            "2 – 16 Go",
            "/private/var/vm",
            "Redémarrage standard du Mac",
          ],
        ],
      },
      faq: [
        {
          question:
            "Pourquoi les Données Système occupent-elles 50 à 100 Go sur mon Mac ?",
          answer:
            "Les responsables les plus courants sont les instantanés locaux créés par Time Machine lorsque le disque externe est débranché, les gigantesques caches de rendu de logiciels comme Adobe ou Xcode, et les vieilles sauvegardes iOS.",
        },
        {
          question:
            "Est-il prudent de supprimer le dossier Bibliothèque sur Mac ?",
          answer:
            "Non. Effacer le dossier Bibliothèque complet corrompra votre profil et empêchera les applications de s'exécuter. Seuls les fichiers situés à l'intérieur de sous-dossiers spécifiques comme Caches et Logs peuvent être retirés.",
        },
        {
          question:
            "Le redémarrage du Mac réduit-il la taille des Données Système ?",
          answer:
            "Oui. macOS purge automatiquement les fichiers d'échange (swap) de mémoire virtuelle et les caches sleepimage lors d'un redémarrage complet du système.",
        },
        {
          question: "Les Données Système peuvent-elles être ramenées à zéro ?",
          answer:
            "Non. macOS a besoin de polices et de caches d'exécution actifs pour fonctionner de manière fluide. Un volume normal et sain de Données Système se situe habituellement entre 10 et 20 Go.",
        },
      ],
      verdict: [
        "Sur un Mac, les données système ont l'air intimidantes, mais la catégorie devient tout à fait gérable dès que l'on sait ce qui l'alimente. Consulter la répartition du stockage, nettoyer les caches et les journaux sans risque, supprimer les anciens téléchargements et les sauvegardes d'appareils, vider la Corbeille, effacer les doublons et visualiser le disque avec une treemap : ces six étapes récupèrent des gigaoctets d'espace sans jamais recourir aux conseils de suppression hasardeuse du dossier Bibliothèque que l'on lit sur les forums.",
        "Disk Mop réunit ces six étapes dans une seule application : l'analyse de disque, le détecteur de gros fichiers, le détecteur de doublons, le nettoyeur de cache et le nettoyage planifié travaillent de concert sous macOS. Le téléchargement est gratuit pour tester l'essentiel, et un paiement unique de 19,90 $ débloque toutes les fonctions avec une licence à vie.",
      ],
      ctaText: "Libérez de l'espace sur votre Mac avec Disk Mop",
    },
    es: {
      title: "Cómo liberar los datos del sistema en Mac: 6 métodos seguros",
      metaDescription:
        "¿Los datos del sistema ocupan demasiado en tu Mac? Descubre qué incluye esa categoría y cómo liberar espacio con seis pasos seguros y reversibles. Empieza ya.",
      subtitle:
        "Una guía segura, paso a paso, para reducir la categoría de almacenamiento más misteriosa de macOS",
      intro: [
        "En un Mac, los datos del sistema (System Data) son la categoría cajón de sastre que reúne cachés, archivos de registro, archivos de intercambio de la memoria virtual, instantáneas locales de Time Machine y todo aquello que macOS no puede asignar a categorías como Aplicaciones o Documentos. Para liberar ese espacio sin riesgos basta con limpiar cachés y descargas antiguas, eliminar copias de seguridad obsoletas, vaciar la Papelera y borrar archivos duplicados: no hace falta ninguna eliminación arriesgada en carpetas del sistema.",
        "En muchos Mac los datos del sistema crecen hasta decenas de gigabytes, y Apple nunca muestra qué hay realmente dentro. El consejo que se repite en los foros es vaciar de golpe la carpeta Biblioteca (Library), algo que puede romper aplicaciones y provocar pérdida de datos. Esta guía toma el camino contrario: seis métodos seguros, reversibles y bajo tu control en todo momento.",
        "Empezaremos por los pasos manuales que puedes dar con las herramientas integradas de macOS y después veremos cómo la versión para macOS de Disk Mop reúne esa misma limpieza en unos pocos clics. Sigue los pasos en orden y deberías recuperar una cantidad de espacio bien visible.",
      ],
      keyTakeaways: [
        "La categoría 'Datos del sistema' reúne cachés dinámicos, registros de depuración, archivos de intercambio de memoria (swap) e instantáneas de Time Machine.",
        "Eliminar la carpeta Biblioteca por completo puede inutilizar tus aplicaciones; solo el contenido de ~/Library/Caches y ~/Library/Logs debe depurarse selectivamente.",
        "Las copias de seguridad antiguas de dispositivos iOS y las instantáneas locales de Time Machine pueden ocupar por sí solas entre 20 y 50 GB de Datos del sistema.",
        "Reiniciar tu Mac vacía automáticamente los archivos de memoria swap y las asignaciones temporales de tiempo de ejecución.",
        "El mapa de árbol visual de DiskMop encuentra cachés hinchados y archivos ocultos del sistema en Mac en pocos segundos.",
      ],
      sections: [
        {
          title: "¿Qué se incluye en los datos del sistema de un Mac?",
          content: [
            "Los datos del sistema son los herederos de la categoría que las versiones antiguas de macOS llamaban Otros. Dentro hay una mezcla muy variada: cachés de aplicaciones y archivos temporales, registros del sistema y de las apps, archivos de intercambio de la memoria virtual, instantáneas locales de Time Machine, archivos de soporte de aplicaciones, plugins y extensiones, imágenes de disco y archivos comprimidos, además de las copias de seguridad antiguas de iPhone y iPad que el Finder guarda en tu disco.",
            "El motivo de que la categoría resulte tan vaga es sencillo: macOS amontona ahí todo lo que no encaja en un cajón claro como Aplicaciones, Fotos o Documentos. Por eso mismo la cifra fluctúa, a veces incluso a lo largo de un mismo día: el archivo de intercambio crece cuando hay presión de memoria y Time Machine crea nuevas instantáneas locales en segundo plano. Ver esta categoría en decenas de gigabytes es del todo normal.",
            "Una aclaración tranquilizadora antes de empezar a borrar: no todos los datos del sistema son basura. macOS gestiona por su cuenta los archivos de intercambio y adelgaza automáticamente las instantáneas locales cuando el disco empieza a llenarse. El objetivo no es dejar la categoría a cero, sino retirar la parte caducada que se puede borrar sin peligro: cachés viejas, registros, copias de seguridad en desuso y archivos grandes olvidados.",
          ],
        },
        {
          title:
            "Consulta el desglose del almacenamiento en Ajustes del Sistema",
          content: [
            "El primer paso es ver a qué te enfrentas. En macOS Ventura y posteriores, abre el menú Apple, entra en Ajustes del Sistema, ve a General y abre la pantalla de Almacenamiento. La barra de colores puede tardar unos minutos en calcularse; cuando termine, pasa el cursor por cada segmento para ver cuánto ocupa cada categoría. En macOS Monterey y anteriores, esa misma vista está en el menú Apple, en « Acerca de este Mac », pestaña Almacenamiento.",
            "Esta pantalla también muestra las recomendaciones propias de Apple: guardar archivos en iCloud, una opción de optimización que elimina las películas y series que ya has visto y un ajuste que vacía la Papelera automáticamente al cabo de 30 días. Además puedes abrir la categoría Aplicaciones desde la lista y borrar ahí mismo las apps grandes que llevas meses sin abrir.",
            "La pantalla tiene una limitación importante: la fila de datos del sistema no se puede pulsar. Apple no ofrece ningún desglose de lo que hay dentro, y justo por eso necesitas los pasos manuales de las secciones siguientes o un analizador de disco que muestre la unidad archivo por archivo.",
          ],
        },
        {
          title: "Limpia cachés, registros y descargas antiguas sin riesgo",
          content: [
            "El punto de partida más seguro son las cachés de los navegadores, porque se reconstruyen solas después de borrarlas. En Safari, activa el menú Desarrollo desde la sección Avanzado de los ajustes de Safari y úsalo para vaciar las cachés. En Chrome, Firefox y Edge, la opción de borrar datos de navegación de los ajustes de privacidad hace exactamente lo mismo.",
            "Para las cachés de usuario, abre el Finder, elige Ir y después Ir a la carpeta (Shift-Command-G) y escribe ~/Library/Caches. Abre las carpetas de las apps que reconozcas y borra su contenido, no las carpetas en sí. No vacíes nunca la carpeta Biblioteca entera ni toques nada dentro de /System: ese es precisamente el consejo arriesgado de los foros que esta guía viene a sustituir. Los archivos de registro se revisan igual en ~/Library/Logs. Reinicia después el Mac, algo que además vacía los archivos de intercambio que suman en los datos del sistema.",
            "La carpeta Descargas es otro devorador de espacio silencioso. Ordénala por tamaño y por fecha: los instaladores .dmg antiguos y los archivos comprimidos que ya usaste suelen poder borrarse sin pensarlo dos veces. Disk Mop reúne estas tres tareas en un mismo sitio: su limpiador de caché (Cache Cleaner) se ocupa de las cachés del sistema y de las aplicaciones, el limpiador de caché del navegador (Browser Cache Cleaner) cubre Chrome, Firefox, Edge y Safari, y el limpiador de descargas (Downloads Cleaner) clasifica los archivos antiguos para que los elimines de un clic.",
            "Queda un elemento oculto que merece mención aparte: las instantáneas locales de Time Machine. En el Terminal, el comando tmutil listlocalsnapshots / muestra las instantáneas que hay ahora mismo en tu disco. macOS las borra por su cuenta cuando escasea el espacio, pero si necesitas sitio de inmediato puedes ejecutar tmutil deletelocalsnapshots seguido de la fecha de la instantánea.",
          ],
        },
        {
          title: "Vacía la Papelera y elimina los archivos duplicados",
          content: [
            "Los archivos que están en la Papelera no han desaparecido: siguen ocupando espacio en el disco. Haz clic en el icono de la Papelera del Dock con la tecla Control pulsada y elige vaciarla o, mejor todavía, abre los ajustes del Finder, ve a Avanzado y activa la opción que borra los ítems de la Papelera al cabo de 30 días. Ese único ajuste evita que el almacenamiento vuelva a llenarse en silencio.",
            "Las copias de seguridad antiguas de iPhone y iPad son otra partida invisible de los datos del sistema, y cada una puede pesar varios gigabytes. Conecta el dispositivo, selecciónalo en la barra lateral del Finder y usa el botón de gestión de copias de la pestaña General para borrar las que ya no necesites. Como se guardan en lo más hondo de la carpeta Biblioteca, casi nadie sabe siquiera que existen.",
            "Los archivos duplicados son el desperdicio de espacio que más se pasa por alto: fotos exportadas dos veces, documentos descargados una y otra vez, carpetas copiadas por si acaso y olvidadas. Buscarlos a mano puede llevar horas. El detector de duplicados (Duplicate Detector) de Disk Mop compara los archivos por su hash SHA-256, así que solo marca las copias idénticas byte a byte: borrar una de ellas es completamente seguro.",
          ],
        },
        {
          title: "Descubre con un treemap qué llena de verdad tu disco",
          content: [
            "El problema de fondo al pelearse con los datos del sistema es la invisibilidad: Apple te da el total pero nunca enseña el contenido. Una visualización en treemap lo resuelve de raíz. Cada carpeta del disco se dibuja como un rectángulo proporcional al espacio que ocupa, así que los mayores consumidores saltan a la vista al primer vistazo.",
            "El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad y construye exactamente esa vista de treemap. Una carpeta de caché que se ha desmadrado, una imagen de máquina virtual olvidada o un montón de imágenes de disco de hace años se vuelven evidentes en segundos. El buscador de archivos grandes (Large File Finder) lo completa listando en una sola vista todos los archivos de más de 500 MB.",
            "Disk Mop funciona de forma nativa en macOS 12 y posteriores, tanto en Mac con Apple Silicon como con Intel, y está notarizado por Apple. Tú mandas en todo momento: la app solo muestra lo que ha encontrado y no elimina nada sin que lo revises antes. Si usas Windows y Mac a la vez, la misma aplicación cubre ambas plataformas.",
          ],
        },
        {
          title: "Evita que los datos del sistema vuelvan a crecer",
          content: [
            "Limpiar los datos del sistema no es una tarea de una sola vez: las cachés y los registros se rehacen por diseño. Un vistazo rápido a la pantalla de almacenamiento una vez al mes te permite detectar el crecimiento pronto, mucho más cómodo que una limpieza maratoniana el día que salta el aviso de disco lleno.",
            "Unos pocos hábitos sencillos marcan la diferencia: reinicia el Mac con regularidad para que se vacíen los archivos de intercambio, deja activado el vaciado automático de la Papelera, desinstala del todo las aplicaciones que ya no usas y revisa la carpeta Descargas al final de cada mes.",
            "Si prefieres poner la rutina en piloto automático, la limpieza programada (Scheduled Cleanup) de Disk Mop crea tareas semanales o mensuales que limpian cachés, borran descargas antiguas y vacían la Papelera por ti. La función Acelerar (Speed Up) ejecuta esa misma limpieza cuando tú quieras, de un solo clic, y la puntuación de salud del sistema (System Health Score) resume el estado general del Mac de un vistazo.",
          ],
        },
      ],
      howTo: {
        name: "Cómo limpiar los Datos del sistema en Mac de forma segura",
        totalTime: "PT10M",
        steps: [
          {
            name: "Consultar la distribución del almacenamiento",
            text: "Abre el menú Apple > Ajustes del Sistema > General > Almacenamiento para comprobar cuánto espacio ocupan los Datos del sistema.",
          },
          {
            name: "Limpiar cachés de usuario",
            text: "Presiona Mayús-Comando-G en el Finder, dirígete a ~/Library/Caches y elimina los cachés obsoletos de programas cerrados.",
          },
          {
            name: "Eliminar copias de seguridad de dispositivos",
            text: "Gestiona y elimina copias antiguas de iPhone o iPad en el Finder para liberar decenas de gigabytes de inmediato.",
          },
          {
            name: "Reducir instantáneas locales de Time Machine",
            text: "Ejecuta 'tmutil listlocalsnapshots /' en la app Terminal y purga los snapshots locales acumulados.",
          },
          {
            name: "Reiniciar el Mac",
            text: "Reinicia el equipo para purgar automáticamente la memoria virtual de intercambio y los cachés volátiles del sistema.",
          },
        ],
      },
      dataTable: {
        caption:
          "Componentes principales de los Datos del sistema en Mac y cómo limpiarlos",
        columns: [
          "Componente",
          "Tamaño típico",
          "Ubicación",
          "Método seguro de limpieza",
        ],
        rows: [
          [
            "Cachés de usuario y aplicaciones",
            "5 – 25 GB",
            "~/Library/Caches",
            "Eliminación selectiva en Finder o con DiskMop Cache Cleaner",
          ],
          [
            "Registros del sistema y apps (Logs)",
            "1 – 5 GB",
            "~/Library/Logs",
            "Purgar archivos .log antiguos",
          ],
          [
            "Instantáneas locales de Time Machine",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Comando de Terminal 'tmutil deletelocalsnapshots'",
          ],
          [
            "Copias antiguas de iPhone y iPad",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > General > Gestionar copias de seguridad",
          ],
          [
            "Archivos swap de memoria virtual",
            "2 – 16 GB",
            "/private/var/vm",
            "Reinicio habitual del Mac",
          ],
        ],
      },
      faq: [
        {
          question:
            "¿Por qué los Datos del sistema ocupan de 50 a 100 GB en mi Mac?",
          answer:
            "Los causantes más comunes son las instantáneas locales que Time Machine crea cuando el disco externo no está conectado, cachés masivos de programas como Adobe o Xcode y copias de seguridad antiguas de iPhone o iPad.",
        },
        {
          question: "¿Es seguro borrar la carpeta Biblioteca en Mac?",
          answer:
            "No. Eliminar la carpeta Biblioteca íntegra corromperá tu perfil de usuario y hará que las aplicaciones dejen de funcionar. Solo debes limpiar de manera selectiva subcarpetas como Caches y Logs.",
        },
        {
          question:
            "¿Reiniciar el Mac reduce el espacio ocupado por los Datos del sistema?",
          answer:
            "Sí. macOS vacía automáticamente los archivos de memoria virtual swap y los cachés de imagen de reposo al realizar un reinicio limpio del equipo.",
        },
        {
          question: "¿Pueden los Datos del sistema llegar a reducirse a cero?",
          answer:
            "No. macOS requiere tipos de letra y cachés de ejecución en tiempo real para operar fluidamente. Un tamaño normal y saludable oscila entre 10 y 20 GB.",
        },
      ],
      verdict: [
        "Los datos del sistema de un Mac imponen respeto, pero son una categoría manejable en cuanto sabes qué la alimenta. Consultar el desglose del almacenamiento, limpiar cachés y registros sin riesgo, eliminar descargas antiguas y copias de seguridad de dispositivos, vaciar la Papelera, borrar duplicados y visualizar el disco con un treemap: estos seis pasos recuperan gigabytes de espacio sin acercarse siquiera a los arriesgados consejos de borrar la carpeta Biblioteca que circulan por los foros.",
        "Disk Mop reúne los seis pasos en una sola aplicación: el análisis de disco, el buscador de archivos grandes, el detector de duplicados, el limpiador de caché y la limpieza programada trabajan juntos en macOS. Puedes descargarlo gratis para probar lo esencial, y un pago único de 19,90 $ desbloquea todas las funciones con licencia de por vida.",
      ],
      ctaText: "Libera espacio en tu Mac con Disk Mop",
    },
    it: {
      title: "Dati di sistema su Mac: 6 modi sicuri per liberare spazio",
      metaDescription:
        "I dati di sistema occupano troppo spazio sul Mac? Scopri che cosa contiene questa categoria e come ridurla con sei passaggi sicuri e reversibili. Inizia ora.",
      subtitle:
        "La guida sicura, passo dopo passo, per ridurre la categoria di archiviazione più misteriosa di macOS",
      intro: [
        "Sul Mac i dati di sistema (System Data) sono la categoria calderone che raccoglie cache, file di log, file di scambio della memoria virtuale, istantanee locali di Time Machine e tutto ciò che macOS non riesce ad assegnare a categorie come App o Documenti. Per liberare questo spazio in sicurezza basta ripulire cache e vecchi download, rimuovere i backup obsoleti, svuotare il Cestino ed eliminare i file duplicati: nessuna cancellazione azzardata nelle cartelle di sistema.",
        "Su molti Mac i dati di sistema arrivano a decine di gigabyte e Apple non mostra mai che cosa contengano davvero. Il consiglio che circola nei forum è svuotare in blocco la cartella Libreria (Library), una mossa che può danneggiare le applicazioni e far perdere dati. Questa guida sceglie la strada opposta: sei metodi sicuri, reversibili e sempre sotto il vostro controllo.",
        "Partiremo dai passaggi manuali che si possono eseguire con gli strumenti integrati di macOS, poi vedremo come la versione macOS di Disk Mop concentri la stessa pulizia in pochi clic. Seguendo i passaggi nell'ordine indicato dovreste recuperare una quantità di spazio ben visibile.",
      ],
      keyTakeaways: [
        "La categoria 'Dati di sistema' include cache dinamiche, file di log, file di swap della memoria virtuale e istantanee di Time Machine.",
        "Eliminare in blocco la cartella Libreria rischia di compromettere le app; solo i contenuti in ~/Library/Caches e ~/Library/Logs devono essere rimossi selettivamente.",
        "I vecchi backup di dispositivi iOS e le istantanee locali di Time Machine da soli possono occupare tra 20 e 50 GB di Dati di sistema.",
        "Il riavvio del Mac svuota automaticamente i file di swap della memoria virtuale e le allocazioni temporanee di sistema.",
        "La mappa ad albero interattiva di DiskMop individua le cache gonfie e lo spazio di sistema nascosto su Mac in una manciata di secondi.",
      ],
      sections: [
        {
          title: "Che cosa rientra nei dati di sistema di un Mac?",
          content: [
            "I dati di sistema sono l'erede della categoria che le vecchie versioni di macOS chiamavano Altro. Al loro interno convive un mix molto ampio: cache delle applicazioni e file temporanei, log del sistema e delle app, file di scambio della memoria virtuale, istantanee locali di Time Machine, file di supporto delle applicazioni, plug-in ed estensioni, immagini disco e archivi, oltre ai vecchi backup di iPhone e iPad che il Finder conserva sull'unità.",
            "Il motivo per cui la categoria appare così vaga è semplice: macOS ci ammassa tutto ciò che non rientra in una casella netta come App, Foto o Documenti. È anche la ragione per cui il valore oscilla, a volte nell'arco della stessa giornata: il file di scambio cresce quando la memoria è sotto pressione e Time Machine crea in silenzio nuove istantanee locali. Vedere questa categoria arrivare a decine di gigabyte è del tutto normale.",
            "Una rassicurazione prima di iniziare a cancellare: non tutti i dati di sistema sono spazzatura. macOS gestisce da solo i file di scambio e assottiglia automaticamente le istantanee locali quando il disco comincia a riempirsi. L'obiettivo non è azzerare la categoria, ma rimuovere la parte ormai scaduta che si può eliminare senza rischi: vecchie cache, log, backup inutilizzati e grossi file dimenticati.",
          ],
        },
        {
          title:
            "Controllate la ripartizione dello spazio nelle Impostazioni di Sistema",
          content: [
            "Il primo passo è capire con che cosa avete a che fare. Su macOS Ventura e versioni successive aprite il menu Apple, scegliete Impostazioni di Sistema, andate in Generali e aprite la schermata Archiviazione. La barra colorata può impiegare qualche minuto per il calcolo; al termine, passate il puntatore su ogni segmento per vedere quanto spazio occupa ciascuna categoria. Su macOS Monterey e versioni precedenti la stessa vista si trova nel menu Apple, sotto « Informazioni su questo Mac », nel pannello Archiviazione.",
            "Questa schermata propone anche i suggerimenti integrati di Apple: archiviare i file in iCloud, un'opzione di ottimizzazione che rimuove film e serie TV già guardati e un'impostazione che svuota automaticamente il Cestino dopo 30 giorni. Dall'elenco potete inoltre aprire la categoria Applicazioni ed eliminare direttamente da lì le app di grandi dimensioni che non avviate da mesi.",
            "La schermata ha però un grosso limite: la riga dei dati di sistema non è cliccabile. Apple non fornisce alcun dettaglio del contenuto, ed è esattamente per questo che servono i passaggi manuali delle sezioni successive oppure un analizzatore capace di mostrare l'unità file per file.",
          ],
        },
        {
          title: "Ripulite cache, log e vecchi download in sicurezza",
          content: [
            "Il punto di partenza più sicuro sono le cache dei browser, perché dopo la cancellazione si ricostruiscono da sole. In Safari attivate il menu Sviluppo dalla sezione Avanzate delle impostazioni di Safari e usatelo per svuotare le cache. In Chrome, Firefox ed Edge la voce per cancellare i dati di navigazione, nelle impostazioni sulla privacy, svolge esattamente lo stesso compito.",
            "Per le cache a livello utente aprite il Finder, scegliete Vai e poi Vai alla cartella (Shift-Command-G) e inserite ~/Library/Caches. Aprite le cartelle delle app che riconoscete ed eliminatene il contenuto, non le cartelle stesse. Non svuotate mai in blocco la cartella Libreria e non toccate nulla sotto /System: è proprio il consiglio rischioso dei forum che questa guida vuole sostituire. I file di log si esaminano allo stesso modo in ~/Library/Logs. Riavviate poi il Mac: l'operazione svuota anche i file di scambio conteggiati nei dati di sistema.",
            "Anche la cartella Download divora spazio in silenzio. Ordinatela per dimensione e per data: i vecchi installer .dmg e gli archivi già utilizzati si possono quasi sempre eliminare senza pensarci troppo. Disk Mop riunisce queste tre incombenze in un unico posto: il pulitore della cache (Cache Cleaner) si occupa delle cache di sistema e delle applicazioni, il pulitore della cache dei browser (Browser Cache Cleaner) copre Chrome, Firefox, Edge e Safari, e il pulitore dei download (Downloads Cleaner) suddivide in categorie i file più vecchi per eliminarli con un clic.",
            "Resta una voce nascosta che merita una menzione: le istantanee locali di Time Machine. Nel Terminale il comando tmutil listlocalsnapshots / elenca le istantanee presenti sul disco. macOS le cancella da solo quando lo spazio scarseggia, ma se vi serve spazio subito potete eseguire tmutil deletelocalsnapshots seguito dalla data dell'istantanea.",
          ],
        },
        {
          title: "Svuotate il Cestino e rimuovete i file duplicati",
          content: [
            "I file finiti nel Cestino non sono davvero spariti: continuano a occupare spazio sul disco. Fate clic sull'icona del Cestino nel Dock tenendo premuto il tasto Ctrl e scegliete di svuotarlo oppure, meglio ancora, aprite le impostazioni del Finder, andate in Avanzate e attivate l'opzione che rimuove gli elementi dal Cestino dopo 30 giorni. Questa singola impostazione impedisce allo spazio di riempirsi di nuovo in sordina.",
            "I vecchi backup di iPhone e iPad sono un'altra voce invisibile dei dati di sistema e ciascuno può pesare diversi gigabyte. Collegate il dispositivo, selezionatelo nella barra laterale del Finder e usate il pulsante di gestione dei backup nel pannello Generali per eliminare quelli che non vi servono più. Poiché sono nascosti in profondità nella cartella Libreria, la maggior parte delle persone non sospetta nemmeno che esistano.",
            "I file duplicati sono lo spreco di spazio che sfugge più spesso: foto esportate due volte, documenti scaricati più e più volte, cartelle copiate per sicurezza e poi dimenticate. Stanarli a mano può richiedere ore. Il rilevatore di duplicati (Duplicate Detector) di Disk Mop confronta i file tramite l'hash SHA-256, quindi segnala soltanto le copie identiche byte per byte: eliminarne una è del tutto sicuro.",
          ],
        },
        {
          title: "Scoprite con una treemap che cosa riempie davvero il disco",
          content: [
            "Il problema di fondo nella lotta ai dati di sistema è l'invisibilità: Apple vi dice il totale ma non mostra mai il contenuto. Una visualizzazione a treemap risolve la questione alla radice. Ogni cartella del disco viene disegnata come un rettangolo proporzionale allo spazio che occupa, così i maggiori divoratori di spazio saltano all'occhio al primo sguardo.",
            "L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità e costruisce esattamente questa vista a treemap. Una cartella di cache cresciuta a dismisura, un'immagine di macchina virtuale dimenticata o una pila di immagini disco vecchie di anni diventano evidenti in pochi secondi. Il ricercatore di file di grandi dimensioni (Large File Finder) completa il quadro elencando in un'unica schermata tutti i file oltre i 500 MB.",
            "Disk Mop gira in modo nativo su macOS 12 e versioni successive, sia sui Mac con Apple Silicon sia su quelli Intel, ed è notarizzato da Apple. Il controllo resta sempre vostro: l'app mostra soltanto ciò che ha trovato e non rimuove nulla senza una vostra verifica. Se usate sia Windows sia Mac, la stessa applicazione copre entrambe le piattaforme.",
          ],
        },
        {
          title: "Impedite ai dati di sistema di ricrescere",
          content: [
            "Ripulire i dati di sistema non è un lavoro da fare una volta sola: cache e log si ricostruiscono per progetto. Un'occhiata veloce alla schermata dell'archiviazione una volta al mese permette di intercettare per tempo la crescita, molto più comodo di una pulizia maratona il giorno in cui compare l'avviso di disco pieno.",
            "Poche abitudini semplici fanno una grande differenza: riavviate il Mac con regolarità così i file di scambio vengono svuotati, lasciate attiva la cancellazione automatica del Cestino, disinstallate completamente le applicazioni che non usate più e date una rapida occhiata alla cartella Download alla fine di ogni mese.",
            "Se preferite mettere la routine in pilota automatico, la pulizia pianificata (Scheduled Cleanup) di Disk Mop crea attività settimanali o mensili che ripuliscono le cache, rimuovono i vecchi download e svuotano il Cestino al posto vostro. La funzione Accelera (Speed Up) esegue la stessa pulizia su richiesta con un clic, mentre il punteggio di salute del sistema (System Health Score) riassume a colpo d'occhio le condizioni generali del Mac.",
          ],
        },
      ],
      howTo: {
        name: "Come ripulire in sicurezza i Dati di sistema su Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Esaminare l'occupazione di memoria",
            text: "Apri il menu Apple > Impostazioni di Sistema > Generali > Spazio per verificare la quantità esatta di Dati di sistema occupata.",
          },
          {
            name: "Svuotare le cache utente",
            text: "Premi Maiusc-Comando-G nel Finder, digita ~/Library/Caches ed elimina le cache obsolete generate dalle app chiuse.",
          },
          {
            name: "Eliminare i vecchi backup dei dispositivi",
            text: "Gestisci e rimuovi i vecchi backup di iPhone e iPad tramite il Finder per recuperare decine di gigabyte.",
          },
          {
            name: "Sfoltire le istantanee locali di Time Machine",
            text: "Esegui il comando 'tmutil listlocalsnapshots /' nel Terminale per rimuovere le snapshot locali accumulate.",
          },
          {
            name: "Riavviare il Mac",
            text: "Riavvia il computer per cancellare automaticamente la memoria virtuale di swap e i file di runtime temporanei.",
          },
        ],
      },
      dataTable: {
        caption:
          "Componenti principali dei Dati di sistema su Mac e metodi di pulizia sicura",
        columns: [
          "Componente",
          "Dimensione tipica",
          "Percorso",
          "Metodo di pulizia sicuro",
        ],
        rows: [
          [
            "Cache utente e applicazioni",
            "5 – 25 GB",
            "~/Library/Caches",
            "Pulizia selettiva con il Finder o DiskMop Cache Cleaner",
          ],
          [
            "Log di sistema e applicazioni",
            "1 – 5 GB",
            "~/Library/Logs",
            "Cancellazione dei vecchi file di log (.log)",
          ],
          [
            "Istantanee locali di Time Machine",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Comando da Terminale 'tmutil deletelocalsnapshots'",
          ],
          [
            "Vecchi backup di iPhone e iPad",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > Generali > Gestisci backup",
          ],
          [
            "File di swap della memoria virtuale",
            "2 – 16 GB",
            "/private/var/vm",
            "Riavvio standard del Mac",
          ],
        ],
      },
      faq: [
        {
          question: "Perché i Dati di sistema occupano 50-100 GB sul mio Mac?",
          answer:
            "Le cause principali sono le istantanee locali create da Time Machine quando il disco di backup non è connesso, enormi file di cache creati da programmi come Adobe o Xcode e vecchi backup di iPhone e iPad archiviati localmente.",
        },
        {
          question: "È sicuro eliminare la cartella Libreria su Mac?",
          answer:
            "No. L'eliminazione dell'intera cartella Libreria danneggerà il profilo utente e impedirà l'avvio delle applicazioni. Vanno rimossi solo file selezionati all'interno delle sottodirectory Caches e Logs.",
        },
        {
          question:
            "Riavviare il Mac riduce lo spazio occupato dai Dati di sistema?",
          answer:
            "Sì. macOS ripulisce in automatico i file di swap della memoria virtuale e i file temporanei di cache al termine di un riavvio completo del sistema.",
        },
        {
          question: "È possibile ridurre a zero la voce Dati di sistema?",
          answer:
            "No. macOS necessita di cache essenziali di runtime e font di sistema per poter funzionare correttamente. Un valore fisiologico e normale si aggira solitamente tra i 10 e i 20 GB.",
        },
      ],
      verdict: [
        "Sul Mac i dati di sistema sembrano intimidatori, ma diventano una categoria gestibile appena si capisce che cosa li alimenta. Controllare la ripartizione dello spazio, ripulire cache e log in sicurezza, rimuovere vecchi download e backup dei dispositivi, svuotare il Cestino, eliminare i duplicati e visualizzare il disco con una treemap: questi sei passaggi recuperano gigabyte di spazio senza mai avvicinarsi ai rischiosi consigli sulla cancellazione della cartella Libreria che si leggono nei forum.",
        "Disk Mop riunisce tutti e sei i passaggi in un'unica app: analisi del disco, ricercatore di file di grandi dimensioni, rilevatore di duplicati, pulitore della cache e pulizia pianificata lavorano insieme su macOS. Potete scaricarlo gratuitamente per provare le funzioni essenziali, mentre un pagamento una tantum di 19,90 $ sblocca tutto con una licenza a vita.",
      ],
      ctaText: "Liberate spazio sul vostro Mac con Disk Mop",
    },
    pt: {
      title: "Como limpar os dados do sistema no Mac: 6 formas seguras",
      metaDescription:
        "Os dados do sistema estão ocupando espaço no seu Mac? Veja o que essa categoria inclui e como limpá-la com seis passos seguros e reversíveis. Comece agora.",
      subtitle:
        "Um guia seguro, passo a passo, para reduzir a categoria de armazenamento mais misteriosa do macOS",
      intro: [
        "No Mac, os dados do sistema (System Data) são a categoria coringa que reúne caches, arquivos de log, arquivos de troca da memória virtual, instantâneos locais do Time Machine e tudo o mais que o macOS não consegue encaixar em categorias como Aplicativos ou Documentos. Para liberar esse espaço com segurança, basta limpar caches e downloads antigos, remover backups desatualizados, esvaziar o Lixo e apagar arquivos duplicados: nenhuma exclusão arriscada em pastas do sistema é necessária.",
        "Em muitos Macs, os dados do sistema chegam a dezenas de gigabytes, e a Apple nunca mostra o que existe de fato lá dentro. O conselho que se repete nos fóruns é apagar de uma vez o conteúdo da pasta Biblioteca (Library), o que pode quebrar aplicativos e causar perda de dados. Este guia segue o caminho oposto: seis métodos seguros, reversíveis e totalmente sob o seu controle.",
        "Vamos começar pelos passos manuais que dá para fazer com as ferramentas nativas do macOS e depois mostrar como a versão para macOS do Disk Mop reúne essa mesma limpeza em poucos cliques. Siga os passos na ordem e você deve ver uma quantidade bem visível de espaço voltar.",
      ],
      keyTakeaways: [
        "A categoria 'Dados do Sistema' é um agrupamento dinâmico de caches, relatórios de log, arquivos de paginação swap de memória e snapshots do Time Machine.",
        "Apagar a pasta Biblioteca por completo pode quebrar seus aplicativos; apenas os itens em ~/Library/Caches e ~/Library/Logs devem ser excluídos com critério.",
        "Backups antigos de dispositivos iOS e snapshots locais do Time Machine sozinhos podem ocupar de 20 a 50 GB em Dados do Sistema.",
        "Reiniciar o Mac esvazia de forma automática os arquivos de swap da memória virtual e as alocações temporárias em tempo de execução.",
        "O mapa visual em árvore do DiskMop localiza caches inflados e arquivos ocultos do sistema no Mac em questão de segundos.",
      ],
      sections: [
        {
          title: "O que entra nos dados do sistema de um Mac?",
          content: [
            "Os dados do sistema são os sucessores da categoria que as versões antigas do macOS chamavam de Outros. Lá dentro há uma mistura bem variada: caches de aplicativos e arquivos temporários, logs do sistema e dos apps, arquivos de troca da memória virtual, instantâneos locais do Time Machine, arquivos de suporte de aplicativos, plug-ins e extensões, imagens de disco e arquivos compactados, além dos backups antigos de iPhone e iPad que o Finder guarda no seu disco.",
            "O motivo de a categoria parecer tão vaga é simples: o macOS joga ali tudo o que não cabe em uma gaveta clara como Aplicativos, Fotos ou Documentos. É também por isso que o número oscila, às vezes no mesmo dia: o arquivo de troca cresce quando falta memória e o Time Machine cria novos instantâneos locais em silêncio. Ver essa categoria chegar a dezenas de gigabytes é completamente normal.",
            "Uma tranquilizada antes de sair apagando: nem todo dado do sistema é lixo. O macOS gerencia os arquivos de troca sozinho e afina automaticamente os instantâneos locais quando o disco começa a encher. O objetivo não é zerar a categoria, e sim remover a parte vencida que pode ser apagada com segurança: caches antigos, logs, backups em desuso e arquivos grandes esquecidos.",
          ],
        },
        {
          title: "Confira a divisão do armazenamento nos Ajustes do Sistema",
          content: [
            "O primeiro passo é enxergar com o que você está lidando. No macOS Ventura e versões mais recentes, abra o menu Apple, escolha Ajustes do Sistema, vá em Geral e abra a tela de Armazenamento. A barra colorida pode levar alguns minutos para calcular; quando terminar, passe o cursor por cada trecho para ver quanto cada categoria ocupa. No macOS Monterey e anteriores, a mesma visão fica no menu Apple, em “Sobre Este Mac”, na aba Armazenamento.",
            "Essa tela também traz as recomendações da própria Apple: guardar arquivos no iCloud, uma opção de otimização que remove filmes e séries que você já assistiu e um ajuste que esvazia o Lixo automaticamente depois de 30 dias. Dá ainda para abrir a categoria Aplicativos na lista e apagar dali mesmo os apps grandes que você não abre há meses.",
            "A tela tem uma limitação grande, porém: a linha dos dados do sistema não é clicável. A Apple não oferece nenhum detalhamento do que existe ali dentro, e é justamente por isso que você precisa dos passos manuais das próximas seções ou de um analisador de disco que mostre a unidade arquivo por arquivo.",
          ],
        },
        {
          title: "Limpe caches, logs e downloads antigos com segurança",
          content: [
            "O ponto de partida mais seguro são os caches dos navegadores, porque eles se refazem sozinhos depois da exclusão. No Safari, ative o menu Desenvolvedor pela seção Avançado dos ajustes do Safari e use-o para esvaziar os caches. No Chrome, no Firefox e no Edge, a opção de limpar dados de navegação, nos ajustes de privacidade, faz exatamente o mesmo trabalho.",
            "Para os caches de usuário, abra o Finder, escolha Ir e depois Ir para Pasta (Shift-Command-G) e digite ~/Library/Caches. Abra as pastas dos apps que você reconhece e apague o conteúdo delas, não as pastas em si. Nunca apague a pasta Biblioteca inteira nem mexa em nada dentro de /System: esse é exatamente o conselho arriscado de fórum que este guia existe para substituir. Os arquivos de log podem ser revisados do mesmo jeito em ~/Library/Logs. Reinicie o Mac depois, o que também limpa os arquivos de troca que contam nos dados do sistema.",
            "A pasta Downloads é outra consumidora silenciosa de espaço. Ordene por tamanho e por data: instaladores .dmg antigos e arquivos compactados que você já usou quase sempre podem ir embora sem dó. O Disk Mop junta essas três tarefas no mesmo lugar: o limpador de cache (Cache Cleaner) cuida dos caches do sistema e dos aplicativos, o limpador de cache de navegadores (Browser Cache Cleaner) cobre Chrome, Firefox, Edge e Safari, e o limpador de downloads (Downloads Cleaner) separa os arquivos antigos por categoria para você limpar em um clique.",
            "Falta ainda um item escondido que merece destaque: os instantâneos locais do Time Machine. No Terminal, o comando tmutil listlocalsnapshots / lista os instantâneos que estão no seu disco agora. O macOS apaga esses arquivos por conta própria quando o espaço aperta, mas, se você precisa de espaço na hora, pode executar tmutil deletelocalsnapshots seguido da data do instantâneo.",
          ],
        },
        {
          title: "Esvazie o Lixo e remova os arquivos duplicados",
          content: [
            "Os arquivos que estão no Lixo não sumiram de verdade: eles continuam ocupando espaço em disco. Clique no ícone do Lixo no Dock segurando a tecla Control e escolha esvaziar ou, melhor ainda, abra os ajustes do Finder, vá em Avançado e ative a opção que remove os itens do Lixo depois de 30 dias. Só esse ajuste já impede que o armazenamento encha de novo em silêncio.",
            "Backups antigos de iPhone e iPad são outro item invisível dos dados do sistema, e cada um pode pesar vários gigabytes. Conecte o aparelho, selecione-o na barra lateral do Finder e use o botão de gerenciar backups na aba Geral para apagar os que você não precisa mais. Como ficam bem no fundo da pasta Biblioteca, a maioria das pessoas nem desconfia que eles existem.",
            "Arquivos duplicados são o desperdício de espaço que mais passa batido: fotos exportadas duas vezes, documentos baixados de novo e de novo, pastas copiadas por precaução e esquecidas. Caçar tudo isso na mão pode levar horas. O detector de duplicados (Duplicate Detector) do Disk Mop compara os arquivos pelo hash SHA-256, ou seja, só marca cópias idênticas byte a byte: apagar uma delas é completamente seguro.",
          ],
        },
        {
          title: "Veja com um treemap o que realmente enche o seu disco",
          content: [
            "O problema central na briga contra os dados do sistema é a invisibilidade: a Apple informa o total, mas nunca mostra o conteúdo. Uma visualização em treemap resolve isso na raiz. Cada pasta do disco aparece como um retângulo proporcional ao espaço que ela ocupa, então os maiores consumidores saltam aos olhos logo de cara.",
            "A análise de disco (Disk Analysis) do Disk Mop varre a unidade e monta exatamente essa visão em treemap. Uma pasta de cache que saiu do controle, uma imagem de máquina virtual esquecida ou uma pilha de imagens de disco de anos atrás ficam evidentes em segundos. O localizador de arquivos grandes (Large File Finder) completa o quadro listando, em uma única tela, todos os arquivos acima de 500 MB.",
            "O Disk Mop roda nativamente no macOS 12 e versões mais recentes, tanto em Macs com Apple Silicon quanto com Intel, e é notarizado pela Apple. Você fica no comando o tempo todo: o app só mostra o que encontrou e nada é removido sem a sua conferência. Se você usa Windows e Mac, o mesmo aplicativo cobre as duas plataformas.",
          ],
        },
        {
          title: "Impeça que os dados do sistema voltem a crescer",
          content: [
            "Limpar os dados do sistema não é tarefa de uma vez só: caches e logs se refazem por projeto. Uma olhada rápida na tela de armazenamento uma vez por mês já permite perceber o crescimento cedo, o que é muito mais tranquilo do que encarar uma faxina maratona no dia em que aparece o aviso de disco cheio.",
            "Alguns hábitos simples fazem uma diferença enorme: reinicie o Mac com regularidade para que os arquivos de troca sejam limpos, mantenha ligado o esvaziamento automático do Lixo, desinstale por completo os aplicativos que você não usa mais e dê uma revisada na pasta Downloads no fim de cada mês.",
            "Se você prefere deixar a rotina no piloto automático, a limpeza agendada (Scheduled Cleanup) do Disk Mop cria tarefas semanais ou mensais que limpam caches, removem downloads antigos e esvaziam o Lixo por você. O recurso Acelerar (Speed Up) roda essa mesma limpeza na hora que você quiser, em um clique, e a pontuação de saúde do sistema (System Health Score) mostra a condição geral do Mac de relance.",
          ],
        },
      ],
      howTo: {
        name: "Como limpar os Dados do Sistema no Mac com segurança",
        totalTime: "PT10M",
        steps: [
          {
            name: "Verificar a distribuição do armazenamento",
            text: "Abra o menu Apple > Ajustes do Sistema > Geral > Armazenamento para checar o volume atual de Dados do Sistema.",
          },
          {
            name: "Limpar caches do usuário",
            text: "Pressione Shift-Command-G no Finder, acesse ~/Library/Caches e descarte os caches inúteis de aplicativos fechados.",
          },
          {
            name: "Excluir backups antigos de dispositivos",
            text: "Gerencie e delete backups desnecessários de iPhone e iPad pelo Finder para liberar dezenas de gigabytes de espaço.",
          },
          {
            name: "Reduzir snapshots locais do Time Machine",
            text: "Execute 'tmutil listlocalsnapshots /' no Terminal e apague os instantâneos locais excedentes.",
          },
          {
            name: "Reiniciar o Mac",
            text: "Reinicie o Mac para esvaziar a memória virtual de swap e os caches transitórios do sistema.",
          },
        ],
      },
      dataTable: {
        caption:
          "Principais componentes de Dados do Sistema no Mac e como limpá-los",
        columns: [
          "Componente",
          "Tamanho típico",
          "Localização",
          "Método seguro de limpeza",
        ],
        rows: [
          [
            "Caches de usuário e aplicativos",
            "5 – 25 GB",
            "~/Library/Caches",
            "Limpeza seletiva pelo Finder ou com o DiskMop Cache Cleaner",
          ],
          [
            "Logs do sistema e de aplicativos",
            "1 – 5 GB",
            "~/Library/Logs",
            "Remoção de arquivos de log obsoletos (.log)",
          ],
          [
            "Snapshots locais do Time Machine",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "Comando no Terminal 'tmutil deletelocalsnapshots'",
          ],
          [
            "Backups antigos de iPhone e iPad",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > Geral > Gerenciar Backups",
          ],
          [
            "Arquivos swap de memória virtual",
            "2 – 16 GB",
            "/private/var/vm",
            "Reinicialização padrão do Mac",
          ],
        ],
      },
      faq: [
        {
          question:
            "Por que os Dados do Sistema ocupam de 50 a 100 GB no meu Mac?",
          answer:
            "Os principais causadores costumam ser os instantâneos locais do Time Machine gravados quando a unidade externa está desconectada, caches de renderização pesados de programas como Adobe ou Xcode e backups antigos de iPhone/iPad.",
        },
        {
          question: "É seguro apagar a pasta Biblioteca (Library) no Mac?",
          answer:
            "Não. A exclusão completa da pasta Biblioteca danificará os perfis de usuário e impedirá o funcionamento dos seus aplicativos. Somente conteúdos específicos dentro de Caches e Logs devem ser removidos.",
        },
        {
          question:
            "Reiniciar o Mac diminui o espaço ocupado por Dados do Sistema?",
          answer:
            "Sim. O macOS descarta automaticamente os arquivos de memória virtual swap e caches transitórios ao reiniciar o sistema.",
        },
        {
          question: "É possível zerar totalmente os Dados do Sistema?",
          answer:
            "Não. O macOS necessita de caches ativos e fontes do sistema para funcionar adequadamente. O tamanho habitual e saudável de Dados do Sistema costuma variar entre 10 e 20 GB.",
        },
      ],
      verdict: [
        "Os dados do sistema no Mac assustam à primeira vista, mas viram uma categoria bem administrável quando você entende o que alimenta esse número. Conferir a divisão do armazenamento, limpar caches e logs com segurança, remover downloads antigos e backups de aparelhos, esvaziar o Lixo, apagar duplicados e enxergar o disco em um treemap: esses seis passos recuperam gigabytes de espaço sem nunca encostar nos conselhos arriscados de apagar a pasta Biblioteca que circulam nos fóruns.",
        "O Disk Mop reúne os seis passos em um app só: análise de disco, localizador de arquivos grandes, detector de duplicados, limpador de cache e limpeza agendada trabalham juntos no macOS. Dá para baixar de graça e testar o essencial, e um pagamento único de 19,90 $ libera todos os recursos com licença vitalícia.",
      ],
      ctaText: "Libere espaço no seu Mac com o Disk Mop",
    },
    ja: {
      title: "Macのシステムデータを削除する方法｜安全な6つの手順",
      metaDescription:
        "Macの「システムデータ」が容量を圧迫していませんか。この分類に何が含まれるのかを整理し、キャッシュの削除からローカルスナップショットの扱いまで、元に戻せる安全な6つの手順で空き容量を取り戻す方法を解説します。",
      subtitle:
        "macOSで最も分かりにくいストレージ分類を安全に減らすための手引き",
      intro: [
        "Macの「システムデータ」（System Data）は、キャッシュ、ログファイル、仮想メモリのスワップファイル、Time Machineのローカルスナップショットなど、macOSが「アプリケーション」や「書類」といった分類に振り分けられなかったものをまとめて放り込む受け皿の分類です。この領域を安全に減らすには、キャッシュと古いダウンロードを整理し、不要になったバックアップを削除し、「ゴミ箱」を空にして、重複ファイルを取り除けば十分です。危険を伴うシステムフォルダの削除は必要ありません。",
        "多くのMacでシステムデータは数十ギガバイトにまで膨らみますが、Appleはその中身を具体的に見せてくれません。フォーラムでよく見かけるのは「ライブラリ」フォルダの中身をまとめて削除するという助言ですが、これはアプリの動作を壊し、データを失う原因になります。この記事はその逆を行きます。安全で、元に戻せて、最後まで自分の判断で進められる6つの方法を紹介します。",
        "まずはmacOSの標準機能だけでできる手動の手順を説明し、そのうえで、同じ作業を数クリックにまとめてくれるDisk MopのmacOS版がどのように役立つかを見ていきます。手順どおりに順番に進めれば、目に見える量の空き容量が戻ってくるはずです。",
      ],
      keyTakeaways: [
        "「システムデータ」は、キャッシュ、システムログ、仮想メモリスワップファイル、Time Machineのスナップショットなどをまとめた動的な包括カテゴリです。",
        "ライブラリフォルダ全体を一括削除するとアプリが破損します。選別して削除すべきなのは~/Library/Cachesと~/Library/Logsの中身のみです。",
        "古いiOS端末のバックアップやローカルTime Machineスナップショットだけで、20〜50 GBものシステムデータを占有することがあります。",
        "Macを再起動すると、仮想メモリスワップファイルや一時的な実行時データが自動的にフラッシュ・消去されます。",
        "DiskMopの視覚的ツリーマップを使用すれば、肥大化したキャッシュや隠れたシステム上の不要ファイルをわずか数秒で特定できます。",
      ],
      sections: [
        {
          title: "Macのシステムデータには何が含まれるのか",
          content: [
            "システムデータは、以前のmacOSで「その他」と呼ばれていた分類の後継にあたります。中身は実に多彩で、アプリのキャッシュや一時ファイル、システムとアプリのログ、仮想メモリのスワップファイル、Time Machineのローカルスナップショット、アプリケーションサポートのファイル、プラグインや機能拡張、ディスクイメージやアーカイブ、さらにFinderがディスク上に保存している古いiPhoneやiPadのバックアップまでが含まれます。",
            "この分類が分かりにくく感じられる理由は単純です。macOSは「アプリケーション」「写真」「書類」のようにきれいに分けられないものを、すべてここにまとめてしまうからです。数値が同じ1日のうちにも変動するのはそのためで、メモリが逼迫すればスワップファイルが大きくなり、Time Machineは裏で新しいローカルスナップショットを作成します。この分類が数十ギガバイトに達していても、まったく珍しいことではありません。",
            "削除を始める前に、安心材料を1つ挙げておきます。システムデータのすべてが不要なごみというわけではありません。スワップファイルはmacOS自身が管理しており、ディスクの空きが減ってくるとローカルスナップショットは自動的に間引かれます。目指すのはこの分類をゼロにすることではなく、安全に削除できる古い部分 — 使われなくなったキャッシュやログ、不要なバックアップ、忘れられた大きなファイル — を取り除くことです。",
          ],
        },
        {
          title: "「システム設定」でストレージの内訳を確認する",
          content: [
            "最初の一歩は、状況を正確に把握することです。macOS Ventura以降では、アップルメニューから「システム設定」を開き、「一般」に進んで「ストレージ」の画面を表示します。色分けされたバーの計算には数分かかることがありますが、完了後は各区画にポインタを重ねると、分類ごとの使用量を確認できます。macOS Monterey以前では、アップルメニューの「このMacについて」にある「ストレージ」タブに同じ画面があります。",
            "この画面には、Apple自身が用意した推奨項目も並びます。ファイルをiCloudに保存する設定、視聴済みの映画やテレビ番組を自動的に削除する「ストレージを最適化」、そして30日経過した項目を「ゴミ箱」から自動で消す設定です。分類の一覧から「アプリケーション」を開けば、何か月も起動していない容量の大きいアプリをその場で削除することもできます。",
            "ただし、この画面には大きな弱点があります。「システムデータ」の行はクリックできないのです。Appleは中身の内訳をいっさい示してくれません。だからこそ、次の章から紹介する手動の手順か、ドライブの中身をファイル単位で見せてくれるディスク分析ツールが必要になります。",
          ],
        },
        {
          title: "キャッシュ・ログ・古いダウンロードを安全に整理する",
          content: [
            "最も安全な出発点はブラウザーのキャッシュです。削除しても必要に応じて自動的に作り直されるからです。Safariでは、設定の「詳細」から「開発」メニューを表示できるようにし、そのメニューからキャッシュを空にします。Chrome、Firefox、Edgeでは、プライバシー関連の設定にある閲覧データの削除が同じ役割を果たします。",
            "ユーザー領域のキャッシュを見るには、Finderの「移動」メニューから「フォルダへ移動」（Shift-Command-G）を選び、~/Library/Caches と入力します。見覚えのあるアプリのフォルダを開き、その中身だけを削除してください。フォルダそのものは残します。「ライブラリ」フォルダをまとめて削除したり、/System 以下に手を出したりしては絶対にいけません。まさにこれが、この記事で置き換えたい危険なフォーラムの助言です。ログファイルも同じ方法で ~/Library/Logs から確認できます。作業後にMacを再起動すると、システムデータに含まれるスワップファイルも整理されます。",
            "「ダウンロード」フォルダも、静かに容量を食い続ける存在です。サイズと日付で並べ替えてみてください。役目を終えた .dmg のインストーラーや、すでに展開したアーカイブは、たいていためらわずに削除できます。Disk Mopはこの3つの作業を1か所にまとめています。キャッシュ クリーナー（Cache Cleaner）がシステムとアプリのキャッシュを、ブラウザーキャッシュ クリーナー（Browser Cache Cleaner）がChrome、Firefox、Edge、Safariを受け持ち、ダウンロード クリーナー（Downloads Cleaner）は古いファイルを種類ごとに整理して、ワンクリックで削除できるようにします。",
            "もう1つ、見えにくい項目に触れておきます。Time Machineのローカルスナップショットです。ターミナルで tmutil listlocalsnapshots / を実行すると、現在ディスク上にあるスナップショットの一覧が表示されます。空き容量が不足すればmacOSが自動的に削除しますが、すぐに容量が必要な場合は tmutil deletelocalsnapshots にスナップショットの日付を続けて実行できます。",
          ],
        },
        {
          title: "「ゴミ箱」を空にして重複ファイルを削除する",
          content: [
            "「ゴミ箱」に入れたファイルは、まだ消えたわけではありません。ディスクの容量を占め続けています。Dockの「ゴミ箱」アイコンをControlキーを押しながらクリックして空にするか、より確実な方法として、Finder設定の「詳細」を開き、30日経過した項目を自動的に削除するオプションを有効にしてください。この設定1つで、気づかないうちに容量が埋まっていく事態を防げます。",
            "古いiPhoneやiPadのバックアップも、システムデータの見えない構成要素です。1つで数ギガバイトに達することも珍しくありません。デバイスをMacに接続し、Finderのサイドバーで選択したうえで、「一般」タブのバックアップ管理ボタンから不要なものを削除します。「ライブラリ」フォルダの奥深くに保存されているため、その存在に気づいていない方がほとんどです。",
            "重複ファイルは、最も見落とされやすい容量の無駄です。2回書き出した写真、何度もダウンロードし直した書類、念のためコピーしたまま忘れられたフォルダなどが積み重なります。手作業で探し出すには何時間もかかりかねません。Disk Mopの重複ファイル検出（Duplicate Detector）はSHA-256のハッシュ値でファイルを比較するため、1バイトまで完全に同じコピーだけが対象になります。そのため、片方を削除しても安全です。",
          ],
        },
        {
          title: "ツリーマップでディスクを圧迫している中身を見る",
          content: [
            "システムデータと向き合ううえで根本的な問題になるのが、中身が見えないことです。Appleは合計値を示すだけで、内訳は教えてくれません。ツリーマップによる可視化は、この問題を根本から解決します。ディスク上のフォルダが、それぞれの使用容量に比例した長方形として描かれるため、容量を大きく使っている場所がひと目で浮かび上がります。",
            "Disk Mopのディスク分析（Disk Analysis）は、ドライブをスキャンしてまさにこのツリーマップ表示を作り出します。制御を失って肥大化したキャッシュフォルダ、忘れられた仮想マシンのイメージ、何年も置きっぱなしのディスクイメージが、数秒ではっきりと分かります。大容量ファイル検索（Large File Finder）は、500 MBを超えるファイルを1つの画面にまとめて表示し、分析を補います。",
            "Disk MopはmacOS 12以降にネイティブ対応し、Apple SiliconのMacでもIntelのMacでも動作します。Appleの公証（notarization）も受けています。判断の主導権は常に利用者の側にあります。アプリは見つけた内容を示すだけで、確認を経ずに何かが削除されることはありません。WindowsとMacを併用している場合も、同じアプリで両方をカバーできます。",
          ],
        },
        {
          title: "システムデータが再び膨らむのを防ぐ",
          content: [
            "システムデータの整理は、一度やって終わりの作業ではありません。キャッシュやログは、仕組みのうえで必ず作り直されるからです。月に1度ストレージの画面をのぞいて増え方を早めに把握しておけば、ディスクの空き容量不足の警告が出てから何時間もかけて掃除するより、はるかに楽に済みます。",
            "いくつかの簡単な習慣が大きな差を生みます。スワップファイルが整理されるようMacを定期的に再起動する、「ゴミ箱」の自動削除設定を有効なままにしておく、使わなくなったアプリは完全にアンインストールする、月末に「ダウンロード」フォルダをざっと見直す。この4つです。",
            "この一連の作業を自動化したい場合は、Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）が役に立ちます。週次または月次のタスクを作成し、キャッシュの整理、古いダウンロードの削除、「ゴミ箱」を空にする処理を代わりに実行します。ワンクリックの高速化機能（Speed Up）は同じ処理を好きなタイミングで実行でき、システムの健全性スコア（System Health Score）はMac全体の状態をひと目で示します。",
          ],
        },
      ],
      howTo: {
        name: "Macのシステムデータを安全にクリーンアップする方法",
        totalTime: "PT10M",
        steps: [
          {
            name: "ストレージ内訳を確認する",
            text: "Appleメニュー >「システム設定」>「一般」>「ストレージ」を開き、システムデータがどれくらい容量を占めているか確認します。",
          },
          {
            name: "ユーザーキャッシュを消去する",
            text: "FinderでShift+Command+Gを押し、「~/Library/Caches」に移動して、終了済みアプリの不要なキャッシュを削除します。",
          },
          {
            name: "古いデバイスバックアップを削除する",
            text: "Finderから不要になったiPhoneやiPadのバックアップを管理・削除し、数十GBの空き容量を直ちに回復します。",
          },
          {
            name: "Time Machineのローカルスナップショットを削減する",
            text: "ターミナルで「tmutil listlocalsnapshots /」を実行し、溜まったローカルスナップショットを整理します。",
          },
          {
            name: "Macを再起動する",
            text: "Macを再起動して、仮想メモリスワップや実行時の一時キャッシュをOSによって自動解放させます。",
          },
        ],
      },
      dataTable: {
        caption: "Macのシステムデータの主な内訳と安全なクリーンアップ手順",
        columns: [
          "コンポーネント",
          "典型的なサイズ",
          "保存場所",
          "安全な削除方法",
        ],
        rows: [
          [
            "ユーザー＆アプリキャッシュ",
            "5 – 25 GB",
            "~/Library/Caches",
            "Finderでの選別削除またはDiskMopキャッシュクリーナー",
          ],
          [
            "システム＆アプリログ",
            "1 – 5 GB",
            "~/Library/Logs",
            "古い.logファイルの消去",
          ],
          [
            "Time Machineローカルスナップショット",
            "10 – 50 GB",
            "/Volumes/Data/.MobileBackups",
            "ターミナルコマンド「tmutil deletelocalsnapshots」",
          ],
          [
            "古いiPhone＆iPadバックアップ",
            "10 – 80 GB",
            "~/Library/Application Support/MobileSync",
            "Finder > 一般 > バックアップを管理",
          ],
          [
            "仮想メモリスワップファイル",
            "2 – 16 GB",
            "/private/var/vm",
            "Macの通常再起動",
          ],
        ],
      },
      faq: [
        {
          question: "なぜMacのシステムデータは50〜100 GBも肥大化するのですか？",
          answer:
            "外付けドライブ未接続時に生成されるTime Machineのローカルスナップショット、AdobeやXcodeなどの制作系アプリの巨大レンダリングキャッシュ、保存されたままの古いiPhone/iPadバックアップが主な要因です。",
        },
        {
          question:
            "Macのライブラリ（Library）フォルダを削除しても大丈夫ですか？",
          answer:
            "いいえ。ライブラリフォルダ全体を消すとユーザー設定が破壊され、アプリが正常に起動しなくなります。削除してよいのはCachesやLogsサブフォルダ内の不要なファイルのみです。",
        },
        {
          question: "Macを再起動するとシステムデータの容量は減りますか？",
          answer:
            "はい。macOSは通常の再起動プロセス中に、仮想メモリスワップファイルやsleepimage一時キャッシュを自動的にクリアします。",
        },
        {
          question: "システムデータを完全に0 GBにすることはできますか？",
          answer:
            "いいえ。macOSが正常に動作するために、リアルタイムのフォントキャッシュや実行時ファイルが必須です。システムデータの健全な通常範囲は概ね10〜20 GB程度です。",
        },
      ],
      verdict: [
        "Macのシステムデータは一見手ごわそうに見えますが、何がその容量を生んでいるのかが分かれば、十分に管理できる分類です。ストレージの内訳を確認する、キャッシュとログを安全に整理する、古いダウンロードとデバイスのバックアップを削除する、「ゴミ箱」を空にする、重複ファイルを取り除く、ツリーマップでディスクを可視化する。この6つの手順だけで、フォーラムで見かける危険な「ライブラリ」フォルダ削除にいっさい手を出すことなく、数ギガバイト規模の空き容量を取り戻せます。",
        "Disk Mopは、この6つの手順を1つのアプリにまとめています。ディスク分析、大容量ファイル検索、重複ファイル検出、キャッシュ クリーナー、スケジュール クリーンアップが、macOS上で連携して動作します。基本機能は無料でダウンロードして試すことができ、19.90ドルの買い切りですべての機能が永続ライセンスとして使えるようになります。",
      ],
      ctaText: "Disk MopでMacの空き容量を取り戻しましょう",
    },
    ar: {
      title: "تنظيف بيانات النظام على ماك: 6 طرق آمنة وفعالة",
      metaDescription:
        "هل تستهلك بيانات النظام مساحة ضخمة على ماك؟ تعلم 6 خطوات آمنة وقابلة للتراجع لتنظيف كاش ماك ونسخ تايم ماشين واستعد مساحتك التخزينية فوراً.",
      subtitle: "دليل تقليص الفئة الأكثر غموضاً في سعة تخزين أبل بأمان تام",
      intro: [
        "تعد فئة 'بيانات النظام' (System Data) في نظام macOS مظلة واسعة تجمع ملفات التخزين المؤقت، وسجلات التشغيل، وملفات ترحيل الذاكرة الافتراضية، ولقطات Time Machine المحلية، وكل ما لا يندرج تحت فئات التطبيقات أو المستندات.",
        "لتنظيف هذه المساحة بأمان، لا تحتاج إلى حذف مجلدات النظام الحساسة أو المخاطرة باستقرار ماك؛ فالحل يكمن في إفراغ الكاش القديم، وإزالة النسخ الاحتياطية الزائدة، والتعامل مع الملفات المكررة عبر خطوات عملية قابلة للتراجع.",
      ],
      keyTakeaways: [
        "بيانات النظام فئة ديناميكية تضم التخزين المؤقت والذاكرة الافتراضية ولقطات Time Machine التلقائية.",
        "تجنب حذف مجلد Library بالكامل؛ يجب تنظيف مجلدي Caches وLogs فقط وبشكل انتقائي للغاية.",
        "النسخ الاحتياطية القديمة لأجهزة iPhone ولقطات Time Machine قد تحتل وحدها من 20 إلى 50 جيجابايت.",
        "إعادة تشغيل جهاز Mac تقوم تلقائياً بتصفية ملفات التبديل (Swap) والتخزين المؤقت المؤقت للنظام.",
        "يكتشف DiskMop مجلدات الكاش المتضخمة والملفات المخفية على ماك عبر خريطة شجرية بصرية دقيقة.",
      ],
      dataTable: {
        caption: "المكونات الأساسية لبيانات النظام على ماك وطرق تنظيفها بأمان",
        columns: [
          "المكون",
          "الحجم التقديري",
          "موقع التخزين",
          "طريقة الإزالة الآمنة",
        ],
        rows: [
          [
            "كاش المستخدم والتطبيقات",
            "10 - 30 جيجابايت",
            "~/Library/Caches",
            "فحص وتنظيف آمن عبر DiskMop",
          ],
          [
            "لقطات Time Machine المحلية",
            "10 - 40 جيجابايت",
            "/System/Volumes/Data",
            "تشغيل أمر 'tmutil deletelocalsnapshots'",
          ],
          [
            "نسخ احتياطية لأجهزة iOS القديمة",
            "15 - 50 جيجابايت",
            "إدارة التخزين في ماك",
            "إعدادات النظام > عام > التخزين > ملفات iOS",
          ],
          [
            "سجلات النظام والتشخيص",
            "2 - 8 جيجابايت",
            "~/Library/Logs",
            "حذف السجلات القديمة دورياً",
          ],
          [
            "ملفات الذاكرة الافتراضية (Swap)",
            "4 - 16 جيجابايت",
            "/var/vm",
            "إعادة تشغيل جهاز Mac لإعادة ضبطها",
          ],
        ],
      },
      howTo: {
        name: "خطوات تقليص حجم بيانات النظام على أجهزة ماك",
        totalTime: "PT15M",
        steps: [
          {
            name: "إعادة تشغيل جهاز Mac",
            text: "أعد تشغيل الجهاز لتفريغ ملفات التبديل والذاكرة الافتراضية المتراكمة تلقائياً.",
          },
          {
            name: "مسح كاش المستخدم غير الضروري",
            text: "في Finder اضغط Command+Shift+G واكتب ~/Library/Caches، واحذف الملفات المؤقتة للتطبيقات المغلقة.",
          },
          {
            name: "إزالة النسخ الاحتياطية القديمة لهواتف آيفون",
            text: "انتقل إلى إعدادات النظام > عام > التخزين، وابحث عن ملفات أجهزة iOS القديمة واحذف ما لا تحتاجه.",
          },
          {
            name: "فحص ماك وتحرير المساحة باستخدام DiskMop",
            text: "شغّل DiskMop لفحص الملفات المكررة والكاش المتراكم والملفات الضخمة غير المرئية بضغطة زر.",
          },
        ],
      },
      sections: [
        {
          title: "ما هي بيانات النظام على ماك بالضبط؟",
          content: [
            "تجمع فئة بيانات النظام في macOS كل ما لا تستطيع أبل تصنيفه بدقة كملف صوتي أو فيديو أو مستند أو تطبيق. ويشمل ذلك كاش المتصفحات، وأطر عمل التطبيقات، وقواعد بيانات Spotlight المؤقتة.",
            "قد تتضخم هذه المساحة حتى تتجاوز 100 جيجابايت على بعض الأجهزة دون أن يدرك المستخدم السبب، مما يجعل الفحص الدوري أمراً حيوياً لتفادي امتلاء القرص.",
          ],
        },
        {
          title: "تنظيف كاش المستخدم بأمان دون مخاطرة",
          content: [
            "يحذر الخبراء دائماً من العبث بمجلد Library العام في النظام، لكن مجلد ~/Library/Caches الخاص بالمستخدم يحتوي في الغالب على نسخ مؤقتة غير حرجة يمكن تنظيفها بأمان.",
            "تأكد من إغلاق كافة البرامج النشطة قبل البدء في التنظيف، أو استعن بأدوات تنظيف ماك المتخصصة لمنع حذف ملفات قيد الاستخدام.",
          ],
        },
        {
          title: "التخلص من لقطات Time Machine المتراكمة",
          content: [
            "عند تفعيل النسخ الاحتياطي في Time Machine، يقوم macOS بإنشاء لقطات محلية على قرص الماك في حال عدم توصيل القرص الخارجي، وتُحسب هذه اللقطات ضمن بيانات النظام.",
            "يمكن تفريغ هذه اللقطات فوراً من خلال تطبيق Terminal أو باستخدام ميزة إدارة الأقراص في DiskMop.",
          ],
        },
      ],
      faq: [
        {
          question: "هل حذف مجلد Library في ماك آمن؟",
          answer:
            "لا، حذف مجلد Library بالكامل يؤدي إلى تلف إعدادات البرامج وانهيار النظام. يسمح فقط بحذف محتويات مجلدي Caches وLogs بحذر.",
        },
        {
          question: "هل يؤدي إعادة تشغيل ماك إلى تقليص بيانات النظام؟",
          answer:
            "نعم، تقوم إعادة التشغيل بمسح ملفات sleepimage والذاكرة الافتراضية المؤقتة وإعادة ضبط ملفات التبادل.",
        },
        {
          question: "ما هو الحجم الطبيعي لبيانات النظام على ماك؟",
          answer:
            "الحجم الطبيعي الصحي يتراوح عادة بين 15 إلى 25 جيجابايت لضمان عمل النظام بكفاءة وسرعة.",
        },
      ],
      verdict: [
        "لا داعي للقلق من تضخم بيانات النظام على ماك بمجرد فهم أسباب تراكمها. مع الخطوات الست الموضحة، يمكنك استعادة مساحتك دون التضحية باستقرار النظام.",
        "يقدم DiskMop لنظام macOS منظومة متكاملة من كشف الملفات المكررة وتنظيف الكاش الآمن مدى الحياة.",
      ],
      ctaText: "نظّف بيانات نظام ماك واستعد المساحة مع DiskMop",
    },
    he: {
      title: "ניקוי נתוני מערכת ב-Mac: 6 שיטות בטוחות ויעילות",
      metaDescription:
        "נתוני המערכת (System Data) תופסים מקום עצום ב-Mac? למדו 6 צעדים בטוחים לפינוי קבצי מטמון, גיבויים ישנים וקבצים כפולים במהירות וללא סיכון למערכת.",
      subtitle: "מדריך בטוח לצמצום הקטגוריה המעורפלת ביותר באחסון של אפל",
      intro: [
        "קטגוריית 'נתוני מערכת' (System Data) ב-macOS כוללת קבצי מטמון (Cache), קובצי יומן רישום, זיכרון וירטואלי, תצלומי בזק מקומיים של Time Machine וכל קובץ שאינו משתייך להגדרות אפליקציות או מסמכים.",
        "במדריך זה תגלו שש שיטות בטוחות לפינוי שטח נכבד ללא סיכון ליציבות המק וללא מחיקה עיוורת של תיקיות מערכת רגישות.",
      ],
      keyTakeaways: [
        "נתוני מערכת הם קטגוריה דינמית הכוללת מטמון יישומים, תצלומי Time Machine וקובצי החלפת זיכרון.",
        "אין למחוק את ספריית Library כולה; יש לנקות באופן סלקטיבי בלבד את תתי-התיקיות Caches ו-Logs.",
        "גיבויים ישנים של מכשירי iPhone עשויים לגזול לבדם עשרות גיגה-בייט מנתוני המערכת.",
        "הפעלה מחדש (Restart) מנקה באופן אוטומטי קובצי החלפה וזיכרון עבודה זמני.",
        "DiskMop מזהה קבצי ענק ומטמון מוסתרים ב-Mac באמצעות תרשים עץ ויזואלי ברור.",
      ],
      dataTable: {
        caption: "רכיבי נתוני המערכת ב-Mac ושיטות מחיקה בטוחות",
        columns: ["רכיב", "גודל טיפוסי", "מיקום", "שיטת פינוי בטוחה"],
        rows: [
          [
            "מטמון משתמש ואפליקציות",
            "10 - 30GB",
            "~/Library/Caches",
            "סריקה וניקוי באמצעות DiskMop",
          ],
          [
            "תצלומי Time Machine מקומיים",
            "10 - 40GB",
            "/System/Volumes/Data",
            "הרצת 'tmutil deletelocalsnapshots' במסוף",
          ],
          [
            "גיבויי iOS ישנים",
            "15 - 50GB",
            "ניהול אחסון במק",
            "הגדרות מערכת > כללי > אחסון > קבצי iOS",
          ],
          [
            "קובצי יומן (Logs)",
            "2 - 8GB",
            "~/Library/Logs",
            "מחיקת לוגים ישנים",
          ],
          [
            "קובצי זיכרון וירטואלי (Swap)",
            "4 - 16GB",
            "/var/vm",
            "הפעלה מחדש של ה-Mac",
          ],
        ],
      },
      howTo: {
        name: "צעדים לצמצום נתוני מערכת במחשבי Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "הפעילו מחדש את מחשב ה-Mac",
            text: "בצעו אתחול פשוט כדי לאפס קובצי זיכרון וירטואלי זמניים שהצטברו.",
          },
          {
            name: "נקו את תיקיית Caches של המשתמש",
            text: "ב-Finder הקישו Command+Shift+G והזינו ~/Library/Caches כדי למחוק קבצים זמניים ישנים.",
          },
          {
            name: "מחקו גיבויי אייפון קודמים שאינם נחוצים",
            text: "גשו להגדרות מערכת > כללי > אחסון ומחקו גיבויים כבדים של מכשירים קודמים.",
          },
          {
            name: "סרקו ונקו עם DiskMop",
            text: "הפעילו את DiskMop לאיתור כפילויות, קבצים גדולים ושאריות מטמון בלחיצת כפתור.",
          },
        ],
      },
      sections: [
        {
          title: "מהם נתוני מערכת ב-Mac?",
          content: [
            "אפל כוללת בקטגוריה זו את כל מה שאינו נופל תחת סיווג מסודר, כגון קבצי עבודה של דפדפנים, תוספים ונתוני תמיכה זמניים.",
            "עם הזמן נתונים אלו תופחים ועלולים לגזול עשרות גיגה-בייט יקרים מכונן ה-SSD.",
          ],
        },
        {
          title: "ניקוי מטמון משתמש ללא סכנה",
          content: [
            "בעוד מחיקה בתיקיית המערכת הכללית מסוכנת, תיקיית ~/Library/Caches מכילה נתונים שנועדו להאצת פעולות בלבד וניתן לפנותם.",
            "מומלץ לסגור אפליקציות פועלות טרם המחיקה או להשתמש בתוכנת ניקוי ייעודית.",
          ],
        },
        {
          title: "הסרת גיבויים ותצלומי בזק מקומיים",
          content: [
            "Time Machine יוצר לעיתים עותקים מקומיים בתוך הכונן כאשר הכונן החיצוני אינו מחובר.",
            "מחיקת עותקים אלו מחזירה שטח רב מיד לקטגוריית האחסון הפנוי.",
          ],
        },
      ],
      faq: [
        {
          question: "האם מותר למחוק את תיקיית Library במק?",
          answer:
            "לא! מחיקת כל התיקייה תגרום לקריסת אפליקציות ואובדן הגדרות. מותר לנקות רק פריטים ספציפיים בתוך Caches.",
        },
        {
          question: "האם אתחול המק באמת מקטין את נתוני המערכת?",
          answer: "כן, הפעלה מחדש מנקה אוטומטית קובצי Swap ונתוני שינה זמניים.",
        },
        {
          question: "מה הגודל התקין של נתוני מערכת?",
          answer:
            "בדרך כלל טווח של 15 עד 25 גיגה-בייט נחשב נורמלי ובריא לפעילות שוטפת של macOS.",
        },
      ],
      verdict: [
        "נתוני מערכת אינם גזירת גורל. בעזרת צעדים מובנים תוכלו לשלוט בנפחם ולשמור על מק מהיר ונקי.",
        "DiskMop עבור macOS מספקת פתרון אמין לאיתור כפילויות ופינוי מטמון ברישיון קבוע.",
      ],
      ctaText: "נקו את נתוני המערכת ב-Mac עכשיו עם DiskMop",
    },
    id: {
      title: "Bersihkan System Data Mac: 6 Cara Aman & Efektif",
      metaDescription:
        "System Data di Mac memakan terlalu banyak ruang? Pelajari 6 langkah aman dan reversibel untuk membersihkan cache Mac dan memulihkan penyimpanan sekarang juga.",
      subtitle:
        "Panduan aman merampingkan kategori penyimpanan Apple yang paling membingungkan",
      intro: [
        "Kategori 'System Data' di macOS mencakup file cache, log sistem, file swap memori virtual, snapshot lokal Time Machine, dan berkas lain yang tidak masuk dalam kategori Dokumen atau Aplikasi.",
        "Untuk membersihkan ruang ini, Anda tidak perlu menghapus folder sistem secara berisiko. Dengan menghapus cache usang, mencadangkan data secara selektif, dan membuang file duplikat, Anda dapat memulihkan puluhan gigabyte secara aman.",
      ],
      keyTakeaways: [
        "System Data merupakan kategori dinamis yang memuat cache, swap memory, dan snapshot lokal Time Machine.",
        "Jangan pernah menghapus seluruh folder Library; bersihkan hanya subfolder Caches dan Logs secara selektif.",
        "Cadangan lama iPhone dan snapshot Time Machine lokal dapat menyita 20 hingga 50 GB ruang penyimpanan.",
        "Melakukan restart Mac akan secara otomatis mereset file swap memori virtual yang menumpuk.",
        "DiskMop memetakan penggunaan disk Mac dalam bentuk diagram treemap untuk menemukan file tersembunyi seketika.",
      ],
      dataTable: {
        caption:
          "Komponen utama System Data Mac dan metode pembersihan amannya",
        columns: [
          "Komponen",
          "Ukuran Tipikal",
          "Lokasi Penyimpanan",
          "Metode Pembersihan Aman",
        ],
        rows: [
          [
            "Cache Pengguna & Aplikasi",
            "10 – 30 GB",
            "~/Library/Caches",
            "Pindai dan bersihkan via DiskMop",
          ],
          [
            "Snapshot Lokal Time Machine",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "Jalankan 'tmutil deletelocalsnapshots' di Terminal",
          ],
          [
            "Cadangan Perangkat iOS Lama",
            "15 – 50 GB",
            "Pengaturan Penyimpanan Mac",
            "System Settings > General > Storage > iOS Files",
          ],
          [
            "Log Sistem dan Diagnostik",
            "2 – 8 GB",
            "~/Library/Logs",
            "Hapus file log usang secara berkala",
          ],
          [
            "Swap Memori Virtual",
            "4 – 16 GB",
            "/var/vm",
            "Restart Mac untuk mereset otomatis",
          ],
        ],
      },
      howTo: {
        name: "Langkah Merampingkan System Data di Komputer Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "Restart komputer Mac Anda",
            text: "Lakukan restart untuk mengosongkan file swap dan cache sementara yang ditahan oleh sistem.",
          },
          {
            name: "Bersihkan folder Cache pengguna",
            text: "Buka Finder, tekan Command+Shift+G, buka ~/Library/Caches, lalu hapus folder cache aplikasi yang sudah tidak digunakan.",
          },
          {
            name: "Hapus cadangan iOS usang",
            text: "Buka System Settings > General > Storage, periksa bagian iOS Files dan hapus backup cadangan lama yang tak lagi dibutuhkan.",
          },
          {
            name: "Gunakan DiskMop untuk pemindaian menyeluruh",
            text: "Jalankan DiskMop for Mac untuk menemukan file sampah, duplikat, dan arsip unduhan besar yang tersembunyi.",
          },
        ],
      },
      sections: [
        {
          title: "Memahami Apa Itu System Data di macOS",
          content: [
            "System Data menampung semua file yang tidak bisa dikelompokkan macOS ke dalam format umum seperti Foto, Aplikasi, atau Dokumen.",
            "Kategori ini sering kali membengkak tanpa disadari akibat penumpukan file kerja browser, mesin virtual, dan data rendering aplikasi kreatif.",
          ],
        },
        {
          title: "Cara Aman Membersihkan Cache Pengguna",
          content: [
            "Menghapus folder Library sistem bisa merusak OS, tetapi membersihkan ~/Library/Caches milik pengguna umumnya aman dilakukan.",
            "Pastikan menutup aplikasi terlebih dahulu sebelum membersihkan cachenya agar tidak terjadi galat pada proses penulisan data.",
          ],
        },
        {
          title: "Mengelola Snapshot Lokal dan Cadangan Ponsel",
          content: [
            "Time Machine kerap menyimpan snapshot sementara di drive internal saat disk backup eksternal tidak terhubung.",
            "Snapshot ini dapat dihapus melalui Terminal untuk langsung mengembalikan ruang kosong puluhan gigabyte.",
          ],
        },
      ],
      faq: [
        {
          question: "Apakah aman menghapus folder Library di Mac?",
          answer:
            "Tidak aman jika menghapus keseluruhan folder Library. Hanya subfolder Caches dan Logs yang boleh dibersihkan secara selektif.",
        },
        {
          question: "Apakah restart Mac bisa mengurangi System Data?",
          answer:
            "Ya, restart mereset alokasi memori virtual (swap) dan membersihkan file sementara sleepimage.",
        },
        {
          question: "Berapa ukuran wajar untuk System Data Mac?",
          answer:
            "Ukuran standar yang sehat biasanya berkisar antara 15 hingga 25 GB untuk kelancaran operasional macOS.",
        },
      ],
      verdict: [
        "System Data yang membengkak di Mac bukanlah masalah permanen jika Anda memahami sumber datanya. Ikuti 6 langkah ini untuk membersihkan Mac Anda secara aman.",
        "DiskMop hadir untuk macOS sebagai utilitas pembersih cache dan pendeteksi file duplikat dengan lisensi seumur hidup yang efisien.",
      ],
      ctaText: "Pulihkan Ruang Penyimpanan Mac Anda dengan DiskMop",
    },
    ko: {
      title: "Mac 시스템 데이터 정리: 안전하게 용량 줄이는 6가지 방법",
      metaDescription:
        "Mac에서 시스템 데이터가 너무 많은 용량을 차지하나요? 캐시 삭제, 타임머신 스냅샷 정리 등 6단계 안전한 방법으로 저장 공간을 확보하세요.",
      subtitle:
        "Apple의 가장 모호한 저장 공간 항목을 안전하게 다이어트하는 가이드",
      intro: [
        "macOS의 '시스템 데이터(System Data)'는 앱 캐시, 로그 파일, 가상 메모리 스왑, 로컬 Time Machine 스냅샷 등 일반 문서나 앱으로 분류되지 않는 모든 데이터를 포함합니다.",
        "이 공간을 줄이기 위해 핵심 시스템 폴더를 무작정 지울 필요는 없습니다. 본 가이드에서는 파일 손상 위험 없이 수십 기가바이트의 저장 공간을 안전하게 되찾는 6가지 입증된 방법을 제시합니다.",
      ],
      keyTakeaways: [
        "시스템 데이터는 앱 캐시, 시스템 로그, 가상 메모리 및 Time Machine 스냅샷이 결합된 가변 항목입니다.",
        "라이브러리(Library) 폴더 전체를 삭제하면 안 되며, ~/Library/Caches 및 Logs만 선별 청소해야 합니다.",
        "오래된 iPhone 백업과 로컬 Time Machine 스냅샷은 단독으로 20~50GB를 차지할 수 있습니다.",
        "Mac을 재시동(Restart)하면 누적된 스왑 파일과 임시 런타임 캐시가 자동으로 초기화됩니다.",
        "DiskMop의 시각적 트리맵 분석은 Mac 드라이브의 숨은 대용량 캐시를 즉각적으로 짚어냅니다.",
      ],
      dataTable: {
        caption: "Mac 시스템 데이터 주요 구성 요소 및 안전한 정리 방법",
        columns: ["구성 요소", "일반 크기", "저장 위치", "안전한 정리 방법"],
        rows: [
          [
            "사용자 및 앱 캐시",
            "10 – 30GB",
            "~/Library/Caches",
            "DiskMop으로 안전하게 스캔 및 정리",
          ],
          [
            "로컬 Time Machine 스냅샷",
            "10 – 40GB",
            "/System/Volumes/Data",
            "터미널에서 'tmutil deletelocalsnapshots' 실행",
          ],
          [
            "구형 iOS 기기 백업",
            "15 – 50GB",
            "시스템 설정의 저장 공간",
            "시스템 설정 > 일반 > 저장 공간 > iOS 파일",
          ],
          [
            "시스템 및 진단 로그",
            "2 – 8GB",
            "~/Library/Logs",
            "오래된 로그 파일 정기 삭제",
          ],
          [
            "가상 메모리 스왑 파일",
            "4 – 16GB",
            "/var/vm",
            "Mac 재시동 시 자동 리셋",
          ],
        ],
      },
      howTo: {
        name: "Mac 시스템 데이터 용량 줄이는 실천 순서",
        totalTime: "PT15M",
        steps: [
          {
            name: "Mac 재시동하기",
            text: "컴퓨터를 다시 시작하여 누적된 가상 메모리 스왑과 임시 프로세스 파일을 비웁니다.",
          },
          {
            name: "사용자 캐시 폴더 정리",
            text: "Finder에서 Command+Shift+G를 누르고 ~/Library/Caches로 이동하여 미사용 앱 캐시를 지웁니다.",
          },
          {
            name: "불필요한 구형 iPhone 백업 삭제",
            text: "시스템 설정 > 일반 > 저장 공간에서 iOS 파일 항목을 확인하여 더 이상 쓰지 않는 백업을 삭제합니다.",
          },
          {
            name: "DiskMop으로 정밀 청소 수행",
            text: "DiskMop을 구동해 숨겨진 대용량 중복 파일과 잔여 캐시 데이터를 한 번에 정리합니다.",
          },
        ],
      },
      sections: [
        {
          title: "Mac 시스템 데이터(System Data)의 정체",
          content: [
            "macOS 저장 공간 분류에서 사진, 앱, 문서 등으로 구분하기 어려운 모든 잡다한 운영체제 작업 파일이 시스템 데이터로 묶입니다.",
            "브라우저 캐시와 개발 툴, 그래픽 작업 임시 렌더링 파일 등이 누적되면 순식간에 50~100GB 이상으로 불어나게 됩니다.",
          ],
        },
        {
          title: "사용자 라이브러리 캐시의 안전한 청소",
          content: [
            "루트 수준의 /Library 폴더 수정은 위험하지만, 사용자 계정에 종속된 ~/Library/Caches는 재생성 가능한 임시 데이터가 대부분입니다.",
            "정리 전 작업 중인 앱을 모두 종료하거나 전문 클리너 프로그램을 사용하는 것이 안전합니다.",
          ],
        },
        {
          title: "Time Machine 로컬 스냅샷과 백업 제거",
          content: [
            "외부 외장하드가 연결되지 않은 동안에도 Time Machine은 맥북 내부에 임시 복원 스냅샷을 만들어 둡니다.",
            "터미널 명령어나 디스크 유틸리티를 활용해 이를 해제하면 즉시 대용량 공간이 확보됩니다.",
          ],
        },
      ],
      faq: [
        {
          question: "Mac의 Library 폴더를 통째로 지워도 되나요?",
          answer:
            "절대 안 됩니다. 라이브러리 전체를 삭제하면 앱 설정이 망가지고 시스템 오류가 발생합니다. Caches 내 파일만 선별 정리해야 합니다.",
        },
        {
          question: "재시동만으로도 시스템 데이터가 줄어드나요?",
          answer:
            "네, macOS는 재부팅 과정에서 swapfile 및 sleepimage 임시 공간을 자동으로 비워냅니다.",
        },
        {
          question: "시스템 데이터의 정상적인 용량 범위는 얼마인가요?",
          answer:
            "일반적으로 15GB에서 25GB 내외를 유지하는 것이 가장 이상적이고 정상적인 상태입니다.",
        },
      ],
      verdict: [
        "Mac 시스템 데이터가 비대해지는 것은 관리 가능한 자연스러운 현상입니다. 위험한 폴더 삭제 없이 6가지 정석 방법만으로도 쾌적한 용량을 유지할 수 있습니다.",
        "DiskMop for Mac은 캐시 정리와 중복 파일 제거를 평생 라이선스로 완벽히 지원합니다.",
      ],
      ctaText: "DiskMop으로 Mac 저장 공간 지금 되찾기",
    },
    pl: {
      title: "Jak wyczyścić Dane systemowe na Macu: 6 bezpiecznych metod",
      metaDescription:
        "Dane systemowe na Macu zajmują za dużo miejsca? Poznaj 6 bezpiecznych sposobów na oczyszczenie pamięci podręcznej i odzyskanie pamięci masowej.",
      subtitle:
        "Bezpieczny przewodnik po redukcji najbardziej tajemniczej kategorii pamięci w systemie macOS",
      intro: [
        "Kategoria 'Dane systemowe' (System Data) w systemie macOS obejmuje pliki pamięci podręcznej, logi systemowe, pliki wymiany pamięci wirtualnej, lokalne migawki Time Machine oraz wszelkie dane niesklasyfikowane jako Dokumenty czy Aplikacje.",
        "Aby bezpiecznie odzyskać tę przestrzeń, nie musisz ryzykować uszkodzenia systemu. W tym przewodniku znajdziesz 6 sprawdzonych kroków, które pozwolą uwolnić dziesiątki gigabajtów.",
      ],
      keyTakeaways: [
        "Dane systemowe to zmienna kategoria obejmująca cache aplikacji, pliki swap oraz migawki Time Machine.",
        "Nigdy nie usuwaj całego folderu Library; selektywnie czyść jedynie podfoldery Caches i Logs.",
        "Stare kopie zapasowe iPhone'a i migawki Time Machine potrafią zająć od 20 do 50 GB miejsca.",
        "Ponowne uruchomienie Maca automatycznie czyści pliki wymiany swap i tymczasowe pamięci podręczne.",
        "DiskMop wizualizuje dysk Maca za pomocą mapy drzewa, błyskawicznie wykrywając ukryte olbrzymie foldery.",
      ],
      dataTable: {
        caption:
          "Główne składniki Danych systemowych w macOS i metody ich czyszczenia",
        columns: [
          "Składnik",
          "Typowy rozmiar",
          "Lokalizacja",
          "Bezpieczna metoda czyszczenia",
        ],
        rows: [
          [
            "Pamięć podręczna użytkownika",
            "10 – 30 GB",
            "~/Library/Caches",
            "Skanowanie i czyszczenie przez DiskMop",
          ],
          [
            "Lokalne migawki Time Machine",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "Uruchomienie 'tmutil deletelocalsnapshots' w Terminalu",
          ],
          [
            "Stare kopie zapasowe iOS",
            "15 – 50 GB",
            "Pamięć masowa Maca",
            "Ustawienia systemowe > Ogólne > Miejsce > Pliki iOS",
          ],
          [
            "Dzienniki i logi systemowe",
            "2 – 8 GB",
            "~/Library/Logs",
            "Okresowe usuwanie starych logów",
          ],
          [
            "Pamięć wirtualna (Swap)",
            "4 – 16 GB",
            "/var/vm",
            "Restart komputera Mac",
          ],
        ],
      },
      howTo: {
        name: "Kroki redukcji Danych systemowych na Macu",
        totalTime: "PT15M",
        steps: [
          {
            name: "Uruchom ponownie komputer Mac",
            text: "Zrestartuj system, aby zresetować pliki pamięci wirtualnej swap i bufor procesów.",
          },
          {
            name: "Wyczyść pamięć podręczną Caches",
            text: "W Finderze wciśnij Command+Shift+G, przejdź do ~/Library/Caches i usuń zbędne pliki tymczasowe.",
          },
          {
            name: "Usuń stare kopie zapasowe iPhone'a",
            text: "W Ustawieniach systemowych przejdź do Pamięci masowej i usuń nieaktualne backupy urządzeń iOS.",
          },
          {
            name: "Oczyść Maca za pomocą DiskMop",
            text: "Użyj DiskMop do zlokalizowania duplikatów i głębokiego oczyszczenia ukrytych plików tymczasowych.",
          },
        ],
      },
      sections: [
        {
          title: "Czym dokładnie są Dane systemowe w macOS?",
          content: [
            "Kategoria ta gromadzi wszystkie pliki, których system nie potrafi przypisać do muzyki, wideo, dokumentów czy programów.",
            "Z biegiem miesięcy rozrasta się ona wskutek działania przeglądarek, środowisk programistycznych czy edytorów wideo.",
          ],
        },
        {
          title: "Bezpieczne usuwanie pamięci podręcznej użytkownika",
          content: [
            "Modyfikowanie systemowego folderu /Library grozi awarią, lecz katalog ~/Library/Caches użytkownika zawiera dane odtwarzalne.",
            "Zaleca się zamknięcie uruchomionych aplikacji przed czyszczeniem lub skorzystanie z dedykowanego narzędzia.",
          ],
        },
        {
          title: "Zarządzanie migawkami Time Machine",
          content: [
            "Time Machine tworzy lokalne migawki na dysku wewnętrznym, gdy dysk zewnętrzny jest odłączony.",
            "Usunięcie ich poleceniem w Terminalu natychmiast uwalnia olbrzymie ilości miejsca.",
          ],
        },
      ],
      faq: [
        {
          question: "Czy mogę bezpiecznie skasować folder Library na Macu?",
          answer:
            "Nie! Skasowanie całego katalogu zniszczy ustawienia programów. Usuwaj wyłącznie zawartość Caches i Logs.",
        },
        {
          question: "Czy restart Maca naprawdę zmniejsza Dane systemowe?",
          answer:
            "Tak, restart powoduje automatyczne zwolnienie plików wymiany (swapfile) oraz danych sleepimage.",
        },
        {
          question: "Jaki jest prawidłowy rozmiar Danych systemowych?",
          answer:
            "Optymalna i typowa wielkość tej kategorii wynosi zazwyczaj od 15 do 25 GB.",
        },
      ],
      verdict: [
        "Rozrastające się Dane systemowe nie muszą być problemem. Dzięki 6 prostym krokom odzyskasz kontrolę nad dyskiem bez ryzyka.",
        "DiskMop dla macOS zapewnia kompleksowe czyszczenie pamięci podręcznej i usuwanie duplikatów w ramach licencji dożywotniej.",
      ],
      ctaText: "Odzyskaj pamięć masową Maca z programem DiskMop",
    },
    ro: {
      title: "Curățare Date de sistem pe Mac: 6 metode sigure și eficiente",
      metaDescription:
        "Datele de sistem ocupă prea mult spațiu pe Mac? Învață 6 pași siguri pentru curățarea cache-ului, a backup-urilor vechi și eliberarea spațiului pe disc.",
      subtitle:
        "Ghid sigur pentru reducerea celei mai neclare categorii de stocare din macOS",
      intro: [
        "Categoria 'Date de sistem' (System Data) din macOS include fișiere cache, jurnale de sistem, fișiere de memorie swap, instantanee locale Time Machine și tot ce nu se încadrează la Aplicații sau Documente.",
        "Nu este nevoie să ștergeți foldere critice pentru a face loc. Urmând aceste 6 metode dovedite, puteți recupera zeci de gigaocteți în deplină siguranță.",
      ],
      keyTakeaways: [
        "Datele de sistem reprezintă o categorie dinamică alcătuită din cache, swap și instantanee Time Machine.",
        "Nu ștergeți întregul folder Library; curățați doar subfolderele Caches și Logs în mod selectiv.",
        "Backup-urile vechi de iPhone și instantaneele Time Machine pot ocupa singure între 20 și 50 GB.",
        "Repornirea Mac-ului resetează automat fișierele temporare swap din memoria virtuală.",
        "DiskMop analizează discul prin diagrame treemap, găsind instantaneu folderele ascunse gigantice.",
      ],
      dataTable: {
        caption:
          "Componentele Datelor de sistem pe Mac și modalități sigure de curățare",
        columns: [
          "Componentă",
          "Dimensiune tipică",
          "Unde se află?",
          "Metodă sigură de curățare",
        ],
        rows: [
          [
            "Cache utilizator și aplicații",
            "10 – 30 GB",
            "~/Library/Caches",
            "Scanare și ștergere prin DiskMop",
          ],
          [
            "Instantanee locale Time Machine",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "Rulare 'tmutil deletelocalsnapshots' în Terminal",
          ],
          [
            "Backup-uri iOS vechi",
            "15 – 50 GB",
            "Stocare Mac",
            "Configurări de sistem > General > Stocare > Fișiere iOS",
          ],
          [
            "Jurnale și fișiere log",
            "2 – 8 GB",
            "~/Library/Logs",
            "Ștergerea periodică a jurnalelor vechi",
          ],
          [
            "Memorie swap virtuală",
            "4 – 16 GB",
            "/var/vm",
            "Repornirea Mac-ului",
          ],
        ],
      },
      howTo: {
        name: "Pași pentru micșorarea Datelor de sistem pe Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "Reporniți Mac-ul",
            text: "Efectuați o repornire pentru a goli memoria virtuală și fișierele de sistem temporare.",
          },
          {
            name: "Curățați folderul de cache al utilizatorului",
            text: "În Finder apăsați Command+Shift+G, tastați ~/Library/Caches și ștergeți fișierele temporare nefolosite.",
          },
          {
            name: "Ștergeți backup-urile vechi de iPhone",
            text: "Mergeți la Configurări de sistem > General > Stocare și eliminați backup-urile iOS inutile.",
          },
          {
            name: "Efectuați o scanare completă cu DiskMop",
            text: "Rulați DiskMop pentru Mac pentru a detecta fișierele duplicate și reziduurile ascunse.",
          },
        ],
      },
      sections: [
        {
          title: "Ce reprezintă Datele de sistem în macOS?",
          content: [
            "Această categorie adună toate fișierele pe care Apple nu le poate include direct în categoriile standard de documente sau aplicații.",
            "Cache-urile browserelor, fișierele de randare și datele auxiliare se acumulează rapid, depășind adesea 50 GB.",
          ],
        },
        {
          title: "Curățarea sigură a folderului Caches",
          content: [
            "Folderul de sistem /Library nu trebuie atins, însă ~/Library/Caches conține date ce pot fi recreate fără probleme de către aplicații.",
            "Închideți aplicațiile înainte de ștergere pentru a asigura o curățare fără erori.",
          ],
        },
        {
          title: "Eliminarea instantaneelor Time Machine locale",
          content: [
            "Dacă discul extern de backup nu este conectat, macOS creează instantanee locale pe discul intern.",
            "Ștergerea lor eliberează imediat un spațiu considerabil pe SSD.",
          ],
        },
      ],
      faq: [
        {
          question: "Este sigură ștergerea folderului Library pe Mac?",
          answer:
            "Nu! Ștergerea întregului folder va corupe configurările programelor. Se pot curăța doar subfolderele Caches și Logs.",
        },
        {
          question: "Repornirea chiar reduce Datele de sistem?",
          answer:
            "Da, repornirea șterge automat fișierele temporare swapfile și sleepimage.",
        },
        {
          question: "Care este dimensiunea normală pentru Datele de sistem?",
          answer:
            "O dimensiune uzuală și sănătoasă se situează între 15 și 25 GB pentru funcționarea optimă a macOS.",
        },
      ],
      verdict: [
        "Datele de sistem pe Mac pot fi ținute sub control cu ușurință. Acești 6 pași vă ajută să recuperați spațiul fără niciun risc pentru sistem.",
        "DiskMop pentru macOS oferă o soluție completă de curățare cache și deduplicare fișiere cu licență pe viață.",
      ],
      ctaText: "Eliberați spațiul de stocare pe Mac cu DiskMop",
    },
    ru: {
      title: "Очистка системных данных на Mac: 6 безопасных способов",
      metaDescription:
        "Категория 'Системные данные' на Mac занимает слишком много места? Узнайте 6 безопасных шагов для очистки кэша, резервных копий и освобождения диска.",
      subtitle:
        "Руководство по безопасному сокращению самой непонятной категории хранилища Apple",
      intro: [
        "Категория 'Системные данные' (System Data) в macOS объединяет кэш приложений, системные журналы, файлы подкачки виртуальной памяти, локальные снимки Time Machine и все данные, не относящиеся к Документам или Программам.",
        "Чтобы освободить место, не нужно рисковать стабильностью системы и удалять важные папки. В этом руководстве вы найдете 6 безопасных и обратимых шагов, которые вернут вам десятки гигабайт.",
      ],
      keyTakeaways: [
        "Системные данные — это динамическая категория, состоящая из кэша, виртуальной памяти swap и снимков Time Machine.",
        "Не удаляйте папку Library целиком; выборочной очистке подлежат только подпапки Caches и Logs.",
        "Старые резервные копии iPhone и локальные снимки Time Machine могут отнимать от 20 до 50 ГБ.",
        "Обычная перезагрузка Mac автоматически сбрасывает накопившиеся файлы подкачки и временные процессы.",
        "DiskMop с помощью наглядной карты (treemap) мгновенно находит гигантские скрытые папки кэша на Mac.",
      ],
      dataTable: {
        caption:
          "Основные составляющие системных данных на Mac и безопасные методы их удаления",
        columns: [
          "Компонент",
          "Обычный размер",
          "Где хранится?",
          "Безопасный способ очистки",
        ],
        rows: [
          [
            "Кэш пользователя и программ",
            "10 – 30 ГБ",
            "~/Library/Caches",
            "Сканирование и очистка в DiskMop",
          ],
          [
            "Локальные снимки Time Machine",
            "10 – 40 ГБ",
            "/System/Volumes/Data",
            "Выполнить 'tmutil deletelocalsnapshots' в Терминале",
          ],
          [
            "Старые бэкапы iOS-устройств",
            "15 – 50 ГБ",
            "Хранилище Mac",
            "Системные настройки > Основные > Хранилище > Файлы iOS",
          ],
          [
            "Системные логи и журналы",
            "2 – 8 ГБ",
            "~/Library/Logs",
            "Периодическая очистка устаревших логов",
          ],
          ["Файлы подкачки (Swap)", "4 – 16 ГБ", "/var/vm", "Перезагрузка Mac"],
        ],
      },
      howTo: {
        name: "Шаги по уменьшению системных данных на Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "Перезагрузите ваш Mac",
            text: "Выполните перезапуск системы для сброса виртуальной памяти и очистки временных файлов сна.",
          },
          {
            name: "Очистите кэш пользователя",
            text: "В Finder нажмите Command+Shift+G, перейдите в ~/Library/Caches и удалите устаревшие временные файлы.",
          },
          {
            name: "Удалите старые резервные копии iPhone",
            text: "Откройте Системные настройки > Основные > Хранилище и удалите неактуальные копии iOS.",
          },
          {
            name: "Запустите сканирование с DiskMop",
            text: "Используйте DiskMop для выявления скрытых дубликатов, кэша и гигантских забытых файлов.",
          },
        ],
      },
      sections: [
        {
          title: "Что скрывается за категорией 'Системные данные'?",
          content: [
            "Сюда попадает все, что macOS не может однозначно отнести к мультимедиа, приложениям или документам.",
            "Кэш веб-браузеров, рабочие данные сред разработки и графических редакторов со временем разрастаются до 50–100 ГБ.",
          ],
        },
        {
          title: "Безопасное удаление кэша пользователя",
          content: [
            "Трогать корневой каталог /Library опасно, но папка ~/Library/Caches в домашнем каталоге пользователя содержит временные данные, которые легко восстанавливаются приложениями.",
            "Перед очисткой рекомендуется закрыть активные программы во избежание сбоев.",
          ],
        },
        {
          title: "Удаление локальных снимков Time Machine",
          content: [
            "Когда внешний накопитель не подключен, Time Machine создает локальные снимки на внутреннем SSD.",
            "Очистка этих снимков через командную строку моментально освобождает десятки гигабайт.",
          ],
        },
      ],
      faq: [
        {
          question: "Можно ли удалять папку Library на Mac?",
          answer:
            "Категорически нет! Удаление всей папки нарушит работу приложений. Очищать можно только Caches и Logs.",
        },
        {
          question: "Правда ли перезагрузка уменьшает системные данные?",
          answer:
            "Да, во время перезапуска macOS очищает файлы swapfile и временные дампы оперативной памяти.",
        },
        {
          question: "Какой объем системных данных считается нормальным?",
          answer:
            "Нормальным рабочим диапазоном для большинства пользователей является объем от 15 до 25 ГБ.",
        },
      ],
      verdict: [
        "Разрастание системных данных на Mac — обычный процесс, которым легко управлять. Следуя 6 проверенным шагам, вы вернете гигабайты памяти без риска для стабильности системы.",
        "DiskMop для macOS предлагает комплексное решение для очистки кэша и поиска дубликатов с бессрочной лицензией.",
      ],
      ctaText: "Освободите хранилище вашего Mac с помощью DiskMop",
    },
    th: {
      title: "วิธีล้าง System Data บน Mac: 6 วิธีที่ปลอดภัยและได้ผล",
      metaDescription:
        "System Data บน Mac กินพื้นที่มากเกินไป? เรียนรู้ 6 ขั้นตอนที่ปลอดภัยในการล้างแคช ลบข้อมูลสำรองเก่า และเพิ่มพื้นที่ว่างบน Mac ของคุณทันที",
      subtitle:
        "คู่มือการลดขนาดหมวดหมู่พื้นที่จัดเก็บที่คลุมเครือที่สุดของ Apple อย่างปลอดภัย",
      intro: [
        "หมวดหมู่ 'System Data' (ข้อมูลระบบ) ใน macOS ประกอบด้วยไฟล์แคช, บันทึกระบบ, หน่วยความจำเสมือน (Swap), สแนปช็อตของ Time Machine และไฟล์อื่นๆ ที่ไม่เข้าเกณฑ์เอกสารหรือแอปพลิเคชัน",
        "คุณไม่จำเป็นต้องลบโฟลเดอร์ระบบที่สำคัญเพื่อเพิ่มพื้นที่ว่าง เพียงทำตาม 6 ขั้นตอนที่ปลอดภัยและย้อนกลับได้ในคู่มือนี้ คุณจะสามารถกู้คืนพื้นที่ว่างหลายสิบกิกะไบต์ได้อย่างมั่นใจ",
      ],
      keyTakeaways: [
        "System Data เป็นหมวดหมู่แบบไดนามิกที่รวมแคชของแอป, หน่วยความจำเสมือน และสแนปช็อตในเครื่อง",
        "ห้ามลบโฟลเดอร์ Library ทั้งหมด ให้เลือกล้างเฉพาะโฟลเดอร์ย่อย Caches และ Logs เท่านั้น",
        "การสำรองข้อมูล iPhone เก่าและสแนปช็อต Time Machine อาจกินพื้นที่ได้ถึง 20–50 GB",
        "การรีสตาร์ต Mac จะรีเซ็ตไฟล์สลับหน่วยความจำเสมือน (Swap) โดยอัตโนมัติ",
        "DiskMop แสดงแผนผังต้นไม้ช่วยค้นหาโฟลเดอร์แคชขนาดใหญ่ที่ซ่อนอยู่ใน Mac ภายในไม่กี่วินาที",
      ],
      dataTable: {
        caption: "ส่วนประกอบหลักของ System Data บน Mac และวิธีล้างอย่างปลอดภัย",
        columns: [
          "ส่วนประกอบ",
          "ขนาดทั่วไป",
          "ตำแหน่งจัดเก็บ",
          "วิธีล้างอย่างปลอดภัย",
        ],
        rows: [
          [
            "แคชผู้ใช้และแอปพลิเคชัน",
            "10 – 30 GB",
            "~/Library/Caches",
            "สแกนและล้างด้วย DiskMop",
          ],
          [
            "สแนปช็อต Time Machine ในเครื่อง",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "รันคำสั่ง 'tmutil deletelocalsnapshots' ใน Terminal",
          ],
          [
            "ข้อมูลสำรองอุปกรณ์ iOS เก่า",
            "15 – 50 GB",
            "ที่จัดเก็บข้อมูล Mac",
            "System Settings > General > Storage > iOS Files",
          ],
          [
            "ไฟล์บันทึกและ Log ระบบ",
            "2 – 8 GB",
            "~/Library/Logs",
            "ลบไฟล์บันทึกเก่าเป็นระยะ",
          ],
          [
            "หน่วยความจำเสมือน (Swap)",
            "4 – 16 GB",
            "/var/vm",
            "รีสตาร์ตเครื่อง Mac",
          ],
        ],
      },
      howTo: {
        name: "ขั้นตอนการลดขนาด System Data บน Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "รีสตาร์ตเครื่อง Mac ของคุณ",
            text: "การรีสตาร์ตจะช่วยล้างหน่วยความจำเสมือนและแคชกระบวนการทำงานชั่วคราวออกไป",
          },
          {
            name: "ล้างโฟลเดอร์แคชของผู้ใช้",
            text: "ใน Finder กด Command+Shift+G ไปที่ ~/Library/Caches แล้วลบไฟล์แคชแอปพลิเคชันที่ไม่ได้ใช้",
          },
          {
            name: "ลบข้อมูลสำรอง iPhone ที่ไม่จำเป็น",
            text: "ไปที่ System Settings > General > Storage แล้วลบข้อมูลสำรอง iOS ที่ล้าสมัยออก",
          },
          {
            name: "สแกนอย่างละเอียดด้วย DiskMop",
            text: "เปิดใช้ DiskMop เพื่อตรวจหาไฟล์ซ้ำและแคชตกค้างที่มองไม่เห็นอย่างแม่นยำ",
          },
        ],
      },
      sections: [
        {
          title: "System Data ใน macOS คืออะไรกันแน่?",
          content: [
            "หมวดหมู่นี้รวบรวมไฟล์ทั้งหมดที่ระบบไม่สามารถจัดกลุ่มลงในรูปภาพ เอกสาร หรือแอปพลิเคชันได้อย่างชัดเจน",
            "แคชของเบราว์เซอร์ เครื่องมือสำหรับนักพัฒนา และไฟล์เรนเดอร์กราฟิกมักจะสะสมจนเกิน 50 GB ได้อย่างรวดเร็ว",
          ],
        },
        {
          title: "การล้างแคชผู้ใช้อย่างปลอดภัย",
          content: [
            "การแตะต้องโฟลเดอร์ /Library ของระบบอาจทำให้เกิดความเสียหายได้ แต่ ~/Library/Caches ในบัญชีผู้ใช้นั้นปลอดภัยในการทำความสะอาด",
            "แนะนำให้ปิดแอปพลิเคชันก่อนล้าง เพื่อป้องกันข้อผิดพลาดในการเขียนข้อมูล",
          ],
        },
        {
          title: "การจัดการสแนปช็อต Time Machine ในเครื่อง",
          content: [
            "หากไม่ได้เชื่อมต่อฮาร์ดไดรฟ์ภายนอก Time Machine จะสร้างสแนปช็อตชั่วคราวไว้ในดิสก์ภายในเครื่อง",
            "การลบสแนปช็อตเหล่านี้จะช่วยคืนพื้นที่ว่างมหาศาลให้กับ Mac ได้ทันที",
          ],
        },
      ],
      faq: [
        {
          question: "สามารถลบโฟลเดอร์ Library ทั้งหมดได้หรือไม่?",
          answer:
            "ไม่ได้เด็ดขาด การลบทั้งโฟลเดอร์จะทำให้การตั้งค่าเสียหายและระบบทำงานผิดพลาด เลือกลบได้เฉพาะใน Caches เท่านั้น",
        },
        {
          question: "การรีสตาร์ต Mac ช่วยลดขนาด System Data ได้จริงหรือไม่?",
          answer:
            "จริง การรีสตาร์ตจะล้างไฟล์ swapfile และ sleepimage ชั่วคราวโดยอัตโนมัติ",
        },
        {
          question: "ขนาด System Data ปกติควรอยู่ที่เท่าไร?",
          answer:
            "โดยทั่วไปขนาดที่เหมาะสมจะอยู่ที่ประมาณ 15 ถึง 25 GB สำหรับการทำงานที่ราบรื่น",
        },
      ],
      verdict: [
        "System Data ที่บวมขึ้นไม่ใช่เรื่องน่ากลัวเมื่อคุณเข้าใจแหล่งที่มา ด้วย 6 วิธีข้างต้นคุณสามารถเพิ่มพื้นที่ว่างให้ Mac ได้อย่างปลอดภัย",
        "DiskMop สำหรับ macOS มอบเครื่องมือล้างแคชและค้นหาไฟล์ซ้ำครบวงจรด้วยสิทธิ์การใช้งานตลอดชีพ",
      ],
      ctaText: "ทวงคืนพื้นที่ว่างบน Mac ของคุณด้วย DiskMop",
    },
    vi: {
      title: "Dọn dẹp System Data trên Mac: 6 cách an toàn và hiệu quả",
      metaDescription:
        "Dữ liệu hệ thống (System Data) trên Mac chiếm quá nhiều dung lượng? Tìm hiểu 6 bước an toàn để dọn bộ nhớ đệm, bản sao lưu và giải phóng ổ đĩa ngay hôm nay.",
      subtitle:
        "Hướng dẫn an toàn để thu nhỏ danh mục lưu trữ mơ hồ nhất của Apple",
      intro: [
        "Danh mục 'System Data' (Dữ liệu hệ thống) trong macOS bao gồm các tệp bộ nhớ đệm (cache), nhật ký hệ thống, bộ nhớ ảo swap, ảnh chụp cục bộ Time Machine và bất cứ thứ gì không thuộc nhóm Ứng dụng hay Tài liệu.",
        "Bạn không cần phải xóa bừa các thư mục hệ thống gây nguy hiểm. Với 6 phương pháp an toàn và có thể khôi phục trong bài viết này, bạn sẽ lấy lại hàng chục gigabyte bộ nhớ một cách nhanh chóng.",
      ],
      keyTakeaways: [
        "System Data là danh mục động gồm bộ nhớ đệm ứng dụng, bộ nhớ ảo swap và ảnh chụp Time Machine.",
        "Không bao giờ được xóa toàn bộ thư mục Library; chỉ dọn dẹp có chọn lọc các thư mục con Caches và Logs.",
        "Bản sao lưu iPhone cũ và ảnh chụp Time Machine có thể tự chiếm từ 20 đến 50 GB dung lượng.",
        "Khởi động lại Mac sẽ tự động xóa các tệp hoán đổi bộ nhớ ảo (swap) và tệp tạm thời.",
        "DiskMop trực quan hóa dung lượng ổ đĩa Mac bằng biểu đồ cây treemap, phát hiện các thư mục khổng lồ ngay tức thì.",
      ],
      dataTable: {
        caption:
          "Các thành phần chính của System Data trên Mac và phương pháp dọn an toàn",
        columns: [
          "Thành phần",
          "Dung lượng thông thường",
          "Vị trí lưu trữ",
          "Cách dọn dẹp an toàn",
        ],
        rows: [
          [
            "Bộ nhớ đệm người dùng & ứng dụng",
            "10 – 30 GB",
            "~/Library/Caches",
            "Quét và dọn sạch bằng DiskMop",
          ],
          [
            "Ảnh chụp Time Machine cục bộ",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "Chạy 'tmutil deletelocalsnapshots' trong Terminal",
          ],
          [
            "Bản sao lưu thiết bị iOS cũ",
            "15 – 50 GB",
            "Cài đặt dung lượng Mac",
            "Cài đặt hệ thống > Cài đặt chung > Dung lượng > Tệp iOS",
          ],
          [
            "Nhật ký hệ thống và chẩn đoán",
            "2 – 8 GB",
            "~/Library/Logs",
            "Xóa định kỳ các tệp log cũ",
          ],
          ["Bộ nhớ ảo swap", "4 – 16 GB", "/var/vm", "Khởi động lại máy Mac"],
        ],
      },
      howTo: {
        name: "Các bước giảm dung lượng System Data trên Mac",
        totalTime: "PT15M",
        steps: [
          {
            name: "Khởi động lại máy Mac",
            text: "Khởi động lại máy để làm mới và giải phóng các tệp bộ nhớ ảo hoán đổi tạm thời.",
          },
          {
            name: "Dọn dẹp thư mục Cache của người dùng",
            text: "Trong Finder nhấn Command+Shift+G, nhập ~/Library/Caches và xóa các tệp tạm của ứng dụng không dùng.",
          },
          {
            name: "Xóa bản sao lưu iPhone không cần thiết",
            text: "Vào Cài đặt hệ thống > Cài đặt chung > Dung lượng và xóa các bản backup iOS cũ.",
          },
          {
            name: "Quét dọn thông minh với DiskMop",
            text: "Khởi chạy DiskMop để dò tìm tệp trùng lặp và các phần thừa của bộ nhớ đệm chỉ với một cú nhấp chuột.",
          },
        ],
      },
      sections: [
        {
          title: "System Data trên macOS thực chất là gì?",
          content: [
            "Danh mục này gom góp mọi dữ liệu mà Apple không thể phân loại rõ ràng thành ảnh, ứng dụng hay tài liệu.",
            "Dữ liệu đệm của trình duyệt, môi trường lập trình và tệp kết xuất đồ họa tích tụ rất nhanh, dễ dàng vượt mốc 50 GB.",
          ],
        },
        {
          title: "Dọn dẹp bộ nhớ đệm người dùng an toàn",
          content: [
            "Can thiệp vào thư mục /Library cấp hệ thống là nguy hiểm, nhưng thư mục ~/Library/Caches của người dùng lại chứa các dữ liệu tạm có thể tạo lại được.",
            "Nên thoát các ứng dụng đang chạy trước khi xóa tệp đệm để tránh phát sinh lỗi hệ thống.",
          ],
        },
        {
          title: "Xóa ảnh chụp Time Machine cục bộ",
          content: [
            "Khi không cắm ổ cứng ngoài, Time Machine tự động lưu các bản sao cục bộ ngay trên ổ SSD của máy.",
            "Xóa các bản sao này qua dòng lệnh sẽ lập tức giải phóng không gian lưu trữ đáng kể.",
          ],
        },
      ],
      faq: [
        {
          question: "Có được xóa toàn bộ thư mục Library trên Mac không?",
          answer:
            "Tuyệt đối không! Xóa cả thư mục sẽ làm hỏng thiết lập ứng dụng và hệ thống. Chỉ được dọn dẹp bên trong Caches và Logs.",
        },
        {
          question: "Khởi động lại Mac có thực sự giúp giảm System Data không?",
          answer:
            "Có, quá trình khởi động lại sẽ tự động xóa sạch các tệp swapfile và sleepimage tạm thời.",
        },
        {
          question: "Dung lượng System Data bình thường là bao nhiêu?",
          answer:
            "Thông thường mức từ 15 đến 25 GB được xem là bình thường và lành mạnh cho hệ thống macOS.",
        },
      ],
      verdict: [
        "System Data bị phình to trên Mac hoàn toàn có thể kiểm soát được. Áp dụng 6 bước trên sẽ giúp bạn duy trì máy Mac mượt mà và dồi dào dung lượng.",
        "DiskMop cho macOS cung cấp giải pháp làm sạch bộ nhớ đệm và tìm tệp trùng lặp hiệu quả với giấy phép trọn đời.",
      ],
      ctaText: "Giải phóng bộ nhớ Mac của bạn cùng DiskMop",
    },
    "zh-Hans": {
      title: "Mac系统数据怎么清理？6个安全有效释放空间的方法",
      metaDescription:
        "Mac储存空间中的'系统数据'过大爆满？详解6个安全无痛步骤清理Mac系统缓存、iOS旧备份与本地快照，快速释放几十G固态硬盘空间。",
      subtitle: "安全缩减Apple最令人困惑的储存空间类别的实用指南",
      intro: [
        "在 macOS 的储存空间概览中，'系统数据'（System Data）是一个包罗万象的类别，囊括了应用缓存、系统日志、虚拟内存交换文件、Time Machine 本地快照以及未能归入应用程序或文稿的所有散落文件。",
        "清理这部分空间绝不需要盲目删除关键系统文件或承担系统崩溃风险。本指南将介绍6种安全且完全可逆的方法，助你轻松找回数十吉字节宝贵空间。",
      ],
      keyTakeaways: [
        "系统数据是包含应用缓存、虚拟内存交换与 Time Machine 本地快照的动态分类。",
        "切勿直接删除整个 Library 资源库文件夹；只建议有针对性地清理 Caches 与 Logs 子目录。",
        "过往遗留的 iPhone 备份和 Time Machine 本地快照往往会单独霸占 20 至 50 GB 空间。",
        "重新启动 Mac（Restart）会自动清空累积的虚拟内存交换文件及休眠临时缓存。",
        "DiskMop 的树状图（Treemap）空间分析功能可在几秒内揪出 Mac 中隐匿的超大缓存文件夹。",
      ],
      dataTable: {
        caption: "Mac系统数据主要组成部分及安全清理方案",
        columns: ["构成要素", "常见占用大小", "储存路径", "安全清理方法"],
        rows: [
          [
            "用户及应用缓存",
            "10 – 30 GB",
            "~/Library/Caches",
            "使用 DiskMop 深度扫描并清理",
          ],
          [
            "Time Machine 本地快照",
            "10 – 40 GB",
            "/System/Volumes/Data",
            "在终端运行 'tmutil deletelocalsnapshots'",
          ],
          [
            "过往旧 iOS 设备备份",
            "15 – 50 GB",
            "系统设置存储管理",
            "系统设置 > 通用 > 储存空间 > iOS 文件",
          ],
          [
            "系统与诊断日志",
            "2 – 8 GB",
            "~/Library/Logs",
            "定期清理过期陈旧日志",
          ],
          [
            "虚拟内存交换文件 (Swap)",
            "4 – 16 GB",
            "/var/vm",
            "重启 Mac 即可自动重置",
          ],
        ],
      },
      howTo: {
        name: "清理缩减 Mac 系统数据的步骤",
        totalTime: "PT15M",
        steps: [
          {
            name: "重新启动您的 Mac 电脑",
            text: "执行常规重启，以便系统自动释放交换文件并清空运行期休眠缓存。",
          },
          {
            name: "清理用户缓存文件夹 (Caches)",
            text: "在访达中按下 Command+Shift+G，前往 ~/Library/Caches，安全清除已卸载或无用的软件缓存。",
          },
          {
            name: "移除已废弃的 iPhone 备份",
            text: "前往系统设置 > 通用 > 储存空间，检查 iOS 文件列表并删除过往无用的旧设备备份。",
          },
          {
            name: "使用 DiskMop 深度扫描清理",
            text: "借助 DiskMop for Mac 扫描磁盘中的大体积文件、重复项及各软件残余缓存，一键清理。",
          },
        ],
      },
      sections: [
        {
          title: "深入了解 macOS 系统数据的真实构成",
          content: [
            "macOS 会把所有无法精准分类为照片、应用或视频的文件通通归于'系统数据'之中。",
            "网页浏览器缓存、开发编译缓存（如 Xcode 衍生数据）和视频剪辑临时工程文件往往是使其迅速膨胀到 100GB 以上的元凶。",
          ],
        },
        {
          title: "安全清理用户层级缓存而避免损坏系统",
          content: [
            "直接删改系统级 /Library 可能会导致系统崩溃，但位于个人目录下的 ~/Library/Caches 绝大部分是应用运行时可再生的缓存文件。",
            "清理前建议彻底退出相关应用程序，或使用专业清理软件以防止写入冲突。",
          ],
        },
        {
          title: "管理 Time Machine 本地快照与移动设备备份",
          content: [
            "当未连接外置移动硬盘时，Time Machine 仍会在内置固态硬盘中悄悄保留临时版本快照。",
            "通过终端命令清理这部分快照，能够立竿见影地把被扣留的可用空间退还给用户。",
          ],
        },
      ],
      faq: [
        {
          question: "可以直接删除 Mac 上的 Library 文件夹吗？",
          answer:
            "绝对不可以！删除整个资源库会导致应用配置丢失甚至系统崩溃，仅可谨慎清理 Caches 和 Logs 内部的无用内容。",
        },
        {
          question: "重启 Mac 真的能够缩减系统数据吗？",
          answer:
            "是的，macOS 会在正常重启时自动释放 swapfile 交换空间以及清理临时内存映像。",
        },
        {
          question: "Mac 系统数据的健康正常范围是多少？",
          answer:
            "通常情况下，系统数据保持在 15GB 到 25GB 之间属于系统健康正常运转的标准区间。",
        },
      ],
      verdict: [
        "Mac 储存空间中的系统数据膨胀并非无法解决的难题。只要遵循上述6个规范步骤，就能在确保系统稳定的前提下找回大量空间。",
        "DiskMop 专为 macOS 打造，提供可视化磁盘分析、缓存清理与重复文件检测，买断制终身授权，是 Mac 用户的得力助手。",
      ],
      ctaText: "立即使用 DiskMop 释放 Mac 存储空间",
    },
  },
};
