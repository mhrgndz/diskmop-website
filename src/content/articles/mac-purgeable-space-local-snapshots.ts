import type { Article } from '../types';

export const macPurgeableSpaceLocalSnapshots: Article = {
  slug: 'mac-purgeable-space-local-snapshots',
  type: 'guide',
  category: 'Mac Tips',
  date: '2026-08-17',
  readingTime: 8,
  content: {
    tr: {
      title: "Mac'te Temizlenebilir (Purgeable) Alan Nedir ve Nasıl Geri Alınır?",
      metaDescription:
        "Mac'inizde \"X GB temizlenebilir\" yazıyorsa sebebi genellikle Time Machine yerel anlık görüntüleridir. tmutil ile listeleme, silme ve inceltme adımları.",
      subtitle: "Time Machine Yerel Anlık Görüntüleri ve Kaybolan Gigabaytlar",
      intro: [
        "Kısa cevap: Mac'te \"temizlenebilir\" (purgeable) alan, macOS'in yer gerektiğinde kendiliğinden silebileceği veridir ve büyük kısmı Time Machine'in saatlik yerel anlık görüntülerinden oluşur. Terminal'de tmutil listlocalsnapshots / komutuyla listeleyebilir, tmutil thinlocalsnapshots / 50000000000 4 komutuyla yaklaşık 50 GB'lık bir hedefle inceltebilirsiniz. Yeni anlık görüntülerin oluşmasını durdurmak için Time Machine'in otomatik yedeklemesini kapatmanız gerekir.",
        "Mac kullanıcılarını en çok şaşırtan durum şudur: Finder 200 GB boş alan gösterirken bir dosya kopyalamaya çalıştığınızda \"yeterli alan yok\" hatası alırsınız, ya da Disk İzlencesi ile Finder tamamen farklı rakamlar söyler. Sebep, APFS'in temizlenebilir alanı boş alan gibi sayması ama bu alanın anında serbest kalmamasıdır. Bu rehberde o alanın nereden geldiğini, nasıl geri alınacağını ve neyi feda ettiğinizi anlatıyoruz.",
      ],
      keyTakeaways: [
        "Temizlenebilir alan, macOS'in gerektiğinde silebileceği veridir; büyük kısmı Time Machine'in yerel anlık görüntüleridir.",
        "Time Machine açıkken macOS saatlik yerel anlık görüntü alır ve bunları yaklaşık 24 saat saklar — harici disk bağlı olmasa bile.",
        "Finder ile Disk İzlencesi farklı rakam gösterir çünkü Disk İzlencesi temizlenebilir alanı boş saymaz.",
        "tmutil listlocalsnapshots / komutu mevcut anlık görüntüleri tarihleriyle listeler.",
        "tmutil thinlocalsnapshots / <bayt> 4 komutu, hedeflediğiniz alanı açacak kadar anlık görüntüyü en agresif seviyede siler.",
        "Yerel anlık görüntüleri silmek harici Time Machine yedeğinizi etkilemez; yalnızca son 24 saate hızlı dönüş imkânını kaybedersiniz.",
      ],
      howTo: {
        name: "Mac'te yerel anlık görüntüleri temizleme",
        totalTime: "PT10M",
        steps: [
          {
            name: "Temizlenebilir alanı görün",
            text: "Finder'da Macintosh HD simgesine sağ tıklayıp Bilgi Al'ı seçin. \"Kullanılabilir\" satırında parantez içinde \"temizlenebilir\" olarak belirtilen miktarı göreceksiniz.",
          },
          {
            name: "Terminal'i açın",
            text: "Uygulamalar > İzlenceler klasöründen Terminal'i açın veya Spotlight'ta (Command+Boşluk) Terminal yazın.",
          },
          {
            name: "Mevcut anlık görüntüleri listeleyin",
            text: "tmutil listlocalsnapshots / komutunu çalıştırın. Her satır bir anlık görüntüyü tarih ve saatiyle gösterir; com.apple.TimeMachine ile başlayan girdiler Time Machine'in yerel anlık görüntüleridir.",
          },
          {
            name: "Anlık görüntüleri inceltin",
            text: "tmutil thinlocalsnapshots / 50000000000 4 komutunu çalıştırın. Buradaki sayı açmak istediğiniz alanı bayt cinsinden belirtir (50000000000 yaklaşık 50 GB'dir), sondaki 4 ise en agresif aciliyet seviyesidir.",
          },
          {
            name: "Gerekirse tek tek silin",
            text: "Belirli bir anlık görüntüyü kaldırmak için tmutil deletelocalsnapshots 2026-08-17-120000 biçiminde, listede gördüğünüz tarih damgasını kullanın.",
          },
          {
            name: "Yeni anlık görüntüleri durdurun",
            text: "Kalıcı çözüm için Sistem Ayarları > Genel > Time Machine (macOS 12'de Sistem Tercihleri > Time Machine) yolundan otomatik yedeklemeyi kapatın. Yedeklerinizi elle başlatmaya devam edebilirsiniz.",
          },
        ],
      },
      sections: [
        {
          title: "Temizlenebilir Alan Tam Olarak Nedir?",
          content: [
            "APFS dosya sisteminde macOS, diskteki bazı verileri \"gerektiğinde feda edilebilir\" olarak işaretler. Bu veri gerçek dosyalardan oluşur ama macOS, yer sıkıntısı çektiğinizde onları sizin haberiniz olmadan silebilir. Finder bu alanı kullanılabilir alanın bir parçası olarak sayar, çünkü teknik olarak istediğiniz an geri alınabilir.",
            "Bu kategoriye üç tür veri girer. Birincisi ve en büyüğü Time Machine'in yerel anlık görüntüleridir. İkincisi iCloud Drive'dan indirilmiş, gerektiğinde yeniden indirilebilecek dosyalardır. Üçüncüsü ise uygulama önbellekleri, Xcode türev verileri ve sistem geçici dosyalarıdır.",
            "Sorun, bu mekanizmanın her zaman yeterince hızlı devreye girmemesidir. Büyük bir dosyayı tek seferde kopyalamaya çalıştığınızda macOS gerekli alanı serbest bırakmaya çalışır ama işlem bazen zaman aşımına uğrar ve \"yeterli alan yok\" hatası alırsınız — Finder 200 GB boş gösterirken.",
          ],
        },
        {
          title: "Time Machine Yerel Anlık Görüntüleri: Asıl Kaynak",
          content: [
            "Time Machine'i harici bir diske yedekleme yapacak şekilde açtığınızda, macOS aynı zamanda dahili diskinizde saatlik anlık görüntüler almaya başlar. Bunlar harici disk takılı olmadığında da alınır; amaç, yedek diskiniz yanınızda değilken bile son saatlere dönebilmenizdir.",
            "Bu anlık görüntüler genellikle yaklaşık 24 saat saklanır ve APFS'in kopyala-yaz yapısı sayesinde başlangıçta neredeyse hiç yer kaplamaz. Ancak dosyalarınız değiştikçe eski sürümler tutulmaya devam eder ve alan hızla büyür. Büyük dosyalarla çalışan bir kullanıcıda — video düzenleme, sanal makine, büyük veri setleri — yerel anlık görüntüler kolayca 100 GB'ı aşabilir.",
            "macOS boş alan azaldığında bu anlık görüntüleri kendiliğinden inceltir. Sorun, bu mekanizmanın kritik ana kadar beklemesidir; siz o ana gelmeden alanı geri almak isterseniz elle müdahale etmeniz gerekir.",
          ],
        },
        {
          title: "Finder ve Disk İzlencesi Neden Farklı Rakam Gösteriyor?",
          content: [
            "Bu farkı görmek kafa karıştırıcıdır ama açıklaması basittir: iki araç aynı soruyu farklı yorumlar. Finder, temizlenebilir alanı kullanılabilir alanın içine katarak \"teorik olarak elinizde ne kadar var\" sorusunu cevaplar. Disk İzlencesi ise yalnızca gerçekten serbest olan alanı gösterir.",
            "Bu yüzden Finder 200 GB kullanılabilir derken Disk İzlencesi 40 GB boş diyebilir. Aradaki 160 GB, silinmesi gereken ama henüz silinmemiş anlık görüntüler ve önbelleklerdir. Hangi rakamın doğru olduğu sorusunun cevabı ikisidir de: biri potansiyeli, diğeri mevcudu ölçer.",
            "Pratikte hangisine güvenmelisiniz? Bir işlem yapmadan önce Disk İzlencesi'nin rakamını esas alın. Büyük bir dosya kopyalayacak, bir uygulama kuracak veya macOS güncellemesi yapacaksanız gerçekten serbest olan alan belirleyicidir.",
          ],
        },
        {
          title: "Anlık Görüntüleri Silmek Neyi Kaybettirir?",
          content: [
            "Yerel anlık görüntüleri silmek harici diskinizdeki Time Machine yedeklerini etkilemez. Bunlar tamamen ayrı iki şeydir: harici yedek uzun vadeli arşivinizdir, yerel anlık görüntüler ise son saatlere hızlı dönüş için tutulan geçici kopyalardır.",
            "Kaybettiğiniz tek şey, harici diskiniz bağlı değilken \"iki saat önceki hâline dön\" yapabilme imkânıdır. Yanlışlıkla sildiğiniz bir dosyayı bu anlık görüntülerden geri getirebiliyordunuz; sildikten sonra bunun için harici yedeğe ihtiyacınız olur.",
            "Bu takas çoğu kullanıcı için makuldür, özellikle disk sürekli dolu çalışıyorsa. Ancak düzenli harici yedek almıyorsanız yerel anlık görüntüler sizin tek güvenlik ağınızdır; bu durumda silmeden önce en azından bir kez Time Machine yedeği almanız yerinde olur.",
          ],
        },
        {
          title: "Temizlenebilir Alanın Diğer Kaynakları",
          content: [
            "Anlık görüntüler tek kaynak değildir. Depolama ekranındaki \"Sistem Verileri\" (eski adıyla \"Diğer\") kategorisi uygulama önbellekleri, günlük dosyaları, iOS aygıt yedekleri, Mail ekleri ve indirilmiş yazılım güncellemelerini içerir ve tek başına on gigabaytları bulabilir.",
            "Yazılım geliştiriyorsanız Xcode ayrı bir kategori sayılır: türev veriler (DerivedData), aygıt destek dosyaları ve simülatör imajları toplamda 50 GB'ı geçebilir. Tarayıcı önbellekleri, Docker imajları ve Homebrew önbelleği de aynı sessiz birikimin parçasıdır.",
            "Disk Mop'un macOS sürümü bu kategorileri tek ekranda toplar: Önbellek Temizleyici modülü kullanıcı önbellekleri, Homebrew ve Xcode dahil ondan fazla macOS kategorisini listeler, Disk Analizi ise sürücüyü treemap olarak çizerek hangi klasörün gerçekte şiştiğini gösterir. Büyük Dosyalar modülü macOS'ta mdfind altyapısını kullandığı için tarama tüm diski gezmeden hızlı sonuç verir.",
          ],
        },
        {
          title: "Kalıcı Düzen Kurmak",
          content: [
            "Tek seferlik inceltme birkaç gün dayanır; Time Machine açık kaldığı sürece anlık görüntüler yeniden birikir. Kalıcı bir düzen için iki seçenek var: ya otomatik yedeklemeyi kapatıp yedekleri elle başlatın, ya da diski her zaman %15-20 boş tutarak macOS'in kendi inceltme mekanizmasına nefes alma alanı bırakın.",
            "İkinci seçenek daha güvenlidir çünkü yedekleme korumasını kaybetmezsiniz. Bunun için asıl yapılması gereken, temizlenebilir alanla uğraşmak değil, gerçek dosyalarda yer açmaktır: eski indirmeler, yinelenen fotoğraflar, artık kullanılmayan uygulamalar ve büyük video arşivleri.",
            "Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "Mac'te temizlenebilir (purgeable) alan nedir?",
          answer:
            "macOS'in yer gerektiğinde kendiliğinden silebileceği veridir. Büyük kısmı Time Machine'in saatlik yerel anlık görüntülerinden oluşur; geri kalanı iCloud'dan yeniden indirilebilecek dosyalar ve uygulama önbellekleridir. Finder bu alanı kullanılabilir alana dahil eder, Disk İzlencesi ise etmez.",
        },
        {
          question: "Finder 200 GB boş diyor ama dosya kopyalayamıyorum, neden?",
          answer:
            "Çünkü o 200 GB'ın büyük kısmı temizlenebilir alandır ve henüz gerçekten serbest bırakılmamıştır. macOS kopyalama sırasında alanı boşaltmaya çalışır ama işlem zaman aşımına uğrayabilir. Terminal'de tmutil thinlocalsnapshots / 50000000000 4 komutuyla alanı önceden serbest bırakarak sorunu çözebilirsiniz.",
        },
        {
          question: "Yerel anlık görüntüleri nasıl silerim?",
          answer:
            "Terminal'de tmutil listlocalsnapshots / komutuyla listeleyin, ardından tmutil thinlocalsnapshots / <bayt> 4 komutuyla hedeflediğiniz alanı açacak kadarını silin — örneğin 50 GB için 50000000000 yazın. Belirli bir görüntüyü kaldırmak için tmutil deletelocalsnapshots komutunu tarih damgasıyla kullanın.",
        },
        {
          question: "Yerel anlık görüntüleri silmek Time Machine yedeğimi bozar mı?",
          answer:
            "Hayır. Harici diskinizdeki Time Machine yedekleri tamamen ayrıdır ve etkilenmez. Kaybettiğiniz tek şey, harici disk bağlı değilken son saatlere hızlı dönüş yapabilme imkânıdır. Uzun vadeli arşiviniz olduğu gibi kalır.",
        },
        {
          question: "Yerel anlık görüntüleri tamamen kapatabilir miyim?",
          answer:
            "Eskiden kullanılan sudo tmutil disablelocal komutu macOS High Sierra ile kaldırıldı. Bugün tek yol Time Machine'in otomatik yedeklemesini kapatmaktır: Sistem Ayarları > Genel > Time Machine (macOS 12'de Sistem Tercihleri > Time Machine) yolundan otomatik yedeklemeyi devre dışı bırakın ve yedekleri elle başlatın.",
        },
        {
          question: "\"Sistem Verileri\" kategorisi neden bu kadar büyük?",
          answer:
            "Bu kategori uygulama önbellekleri, günlük dosyaları, iOS aygıt yedekleri, Mail ekleri, indirilmiş yazılım güncellemeleri ve yerel anlık görüntüleri birlikte sayar. Yazılım geliştiriyorsanız Xcode türev verileri ve simülatör imajları da eklenir. Tek bir kalem değil, onlarca küçük kaynağın toplamıdır — bu yüzden hangisinin şiştiğini görmek için klasör bazlı bir analiz gerekir.",
        },
      ],
      verdict: [
        "Mac'teki temizlenebilir alan bir hata değil, APFS'in tasarım tercihidir: macOS gerektiğinde silebileceği veriyi boş alan gibi sayar. Sorun yalnızca bu mekanizmanın kritik ana kadar beklemesidir.",
        "Alanı hemen geri almak istiyorsanız yol tmutil'den geçer: listlocalsnapshots ile görün, thinlocalsnapshots ile hedeflediğiniz kadarını serbest bırakın. Bu işlem harici Time Machine yedeğinizi etkilemez, yalnızca son saatlere hızlı dönüşü kaybettirir.",
        "Kalıcı çözüm anlık görüntülerle uğraşmak değil, diskte gerçek boşluk yaratmaktır. %15-20 boş alan bıraktığınızda macOS'in kendi inceltme mekanizması zaten sessizce çalışır ve bu sorunla hiç karşılaşmazsınız.",
      ],
      ctaText: "Mac'inizde Alanın Nereye Gittiğini Görün",
    },
    en: {
      title: "What Is Purgeable Space on a Mac and How Do I Reclaim It?",
      metaDescription:
        "If your Mac reports \"X GB purgeable\", Time Machine local snapshots are usually the cause. How to list, thin and delete them with tmutil — and what you give up.",
      subtitle: "Time Machine Local Snapshots and the Missing Gigabytes",
      intro: [
        "Short answer: purgeable space on a Mac is data macOS can delete on its own when it needs room, and most of it consists of Time Machine's hourly local snapshots. List them in Terminal with tmutil listlocalsnapshots / and reclaim space with tmutil thinlocalsnapshots / 50000000000 4, where the number is the target in bytes. To stop new snapshots from being created, you have to turn off Time Machine's automatic backups.",
        "The situation that confuses Mac users most is this: Finder reports 200 GB available, yet copying a file fails with \"not enough space\", or Disk Utility and Finder disagree completely. The reason is that APFS counts purgeable space as available even though it is not actually free yet. This guide explains where that space comes from, how to get it back, and what you give up in the process.",
      ],
      keyTakeaways: [
        "Purgeable space is data macOS can delete when needed; most of it is Time Machine local snapshots.",
        "With Time Machine enabled, macOS takes hourly local snapshots and keeps them for roughly 24 hours — even when no external drive is connected.",
        "Finder and Disk Utility report different numbers because Disk Utility does not count purgeable space as free.",
        "tmutil listlocalsnapshots / lists every existing snapshot with its timestamp.",
        "tmutil thinlocalsnapshots / <bytes> 4 removes enough snapshots to reclaim your target amount at the most aggressive urgency level.",
        "Deleting local snapshots does not affect your external Time Machine backup; you only lose fast rollback to the last 24 hours.",
      ],
      howTo: {
        name: "Clear local snapshots on a Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "See how much space is purgeable",
            text: "In Finder, right-click the Macintosh HD icon and choose Get Info. The Available line shows the purgeable amount in parentheses.",
          },
          {
            name: "Open Terminal",
            text: "Open Terminal from Applications > Utilities, or press Command+Space and type Terminal.",
          },
          {
            name: "List the existing snapshots",
            text: "Run tmutil listlocalsnapshots /. Each line is one snapshot with its date and time; entries beginning with com.apple.TimeMachine are Time Machine's local snapshots.",
          },
          {
            name: "Thin the snapshots",
            text: "Run tmutil thinlocalsnapshots / 50000000000 4. The number is the space you want to reclaim in bytes (50000000000 is roughly 50 GB) and the trailing 4 is the most aggressive urgency level.",
          },
          {
            name: "Delete individual snapshots if needed",
            text: "To remove one specific snapshot, use tmutil deletelocalsnapshots 2026-08-17-120000, substituting the timestamp you saw in the listing.",
          },
          {
            name: "Stop new snapshots from being created",
            text: "For a permanent fix, turn off automatic backups under System Settings > General > Time Machine (System Preferences > Time Machine on macOS 12). You can still start backups manually.",
          },
        ],
      },
      sections: [
        {
          title: "What Exactly Is Purgeable Space?",
          content: [
            "On the APFS file system, macOS marks certain data on disk as expendable when necessary. That data consists of real files, but macOS is allowed to delete them without asking when you run short on room. Finder counts this as part of available space because, technically, you can have it back at any moment.",
            "Three kinds of data fall into this category. The first and largest is Time Machine's local snapshots. The second is files downloaded from iCloud Drive that could simply be downloaded again. The third is application caches, Xcode derived data and system temporary files.",
            "The problem is that this mechanism does not always kick in fast enough. When you try to copy a large file in one go, macOS attempts to free the space it needs, but the operation sometimes times out and you get a \"not enough space\" error — while Finder still shows 200 GB free.",
          ],
        },
        {
          title: "Time Machine Local Snapshots: The Main Source",
          content: [
            "When you enable Time Machine to back up to an external drive, macOS also starts taking hourly snapshots on your internal disk. These are taken even when the external drive is not connected, so you can roll back the last few hours while away from your backup drive.",
            "Snapshots are typically kept for about 24 hours and, thanks to the copy-on-write design of APFS, take almost no space at first. But as your files change, older versions are retained and the footprint grows quickly. For anyone working with large files — video editing, virtual machines, large datasets — local snapshots can easily exceed 100 GB.",
            "macOS thins these snapshots automatically when free space runs low. The catch is that the mechanism waits until the critical moment; if you want the space back before then, you have to intervene manually.",
          ],
        },
        {
          title: "Why Finder and Disk Utility Disagree",
          content: [
            "Seeing two different numbers is confusing, but the explanation is simple: the two tools answer the same question differently. Finder includes purgeable space in the available figure, answering \"how much could you theoretically have\". Disk Utility reports only what is genuinely free right now.",
            "That is how Finder can say 200 GB available while Disk Utility says 40 GB free. The 160 GB difference is snapshots and caches that should be deleted but have not been yet. Asked which number is correct, the answer is both: one measures potential, the other measures actual.",
            "Which should you trust in practice? Go by Disk Utility's number before doing anything demanding. If you are about to copy a large file, install an application or run a macOS update, genuinely free space is what determines whether it succeeds.",
          ],
        },
        {
          title: "What You Lose by Deleting Snapshots",
          content: [
            "Deleting local snapshots does not affect the Time Machine backups on your external drive. They are two entirely separate things: the external backup is your long-term archive, while local snapshots are temporary copies kept for fast rollback over the last few hours.",
            "The only thing you give up is the ability to \"go back to two hours ago\" while your external drive is disconnected. If you accidentally deleted a file, you could previously restore it from those snapshots; afterwards, you need the external backup for that.",
            "For most users that is a reasonable trade, particularly when the disk runs permanently full. But if you are not taking regular external backups, local snapshots are your only safety net — in that case, run at least one Time Machine backup before clearing them.",
          ],
        },
        {
          title: "Other Sources of Purgeable Space",
          content: [
            "Snapshots are not the only source. The \"System Data\" category on the storage screen (previously called \"Other\") covers application caches, log files, iOS device backups, Mail attachments and downloaded software updates, and can reach tens of gigabytes on its own.",
            "If you write software, Xcode is a category in itself: derived data, device support files and simulator images together can exceed 50 GB. Browser caches, Docker images and the Homebrew cache are part of the same quiet accumulation.",
            "The macOS build of Disk Mop gathers these categories on a single screen: Cache Cleaner lists more than ten macOS-specific categories including user caches, Homebrew and Xcode, while Disk Analysis draws the drive as a treemap so the genuinely bloated folder is obvious. Large Files uses the mdfind index on macOS, so scans return quickly without walking the entire disk.",
          ],
        },
        {
          title: "Setting Up Something That Lasts",
          content: [
            "A one-off thinning lasts a few days; as long as Time Machine stays enabled, snapshots accumulate again. For a durable arrangement you have two options: turn off automatic backups and run them manually, or keep the disk 15-20% free at all times so that macOS's own thinning mechanism has room to breathe.",
            "The second option is safer because you do not lose backup protection. Achieving it means dealing not with purgeable space but with real files: old downloads, duplicate photos, applications you no longer use and large video archives.",
            "You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "What is purgeable space on a Mac?",
          answer:
            "It is data macOS can delete on its own when it needs room. Most of it consists of Time Machine's hourly local snapshots; the rest is files that could be re-downloaded from iCloud plus application caches. Finder includes this in available space while Disk Utility does not.",
        },
        {
          question: "Finder says 200 GB free but I cannot copy a file — why?",
          answer:
            "Because most of that 200 GB is purgeable space that has not actually been released yet. macOS tries to free it during the copy, but the operation can time out. Releasing the space in advance with tmutil thinlocalsnapshots / 50000000000 4 in Terminal resolves it.",
        },
        {
          question: "How do I delete local snapshots?",
          answer:
            "List them in Terminal with tmutil listlocalsnapshots /, then remove enough of them with tmutil thinlocalsnapshots / <bytes> 4 — for example 50000000000 to reclaim about 50 GB. To remove one specific snapshot, use tmutil deletelocalsnapshots with the timestamp from the listing.",
        },
        {
          question: "Does deleting local snapshots break my Time Machine backup?",
          answer:
            "No. The Time Machine backups on your external drive are entirely separate and are unaffected. The only thing you lose is the ability to roll back to the last few hours while the external drive is disconnected. Your long-term archive stays intact.",
        },
        {
          question: "Can I disable local snapshots entirely?",
          answer:
            "The old sudo tmutil disablelocal command was removed in macOS High Sierra. Today the only route is turning off Time Machine's automatic backups: go to System Settings > General > Time Machine (System Preferences > Time Machine on macOS 12), disable automatic backups, and start backups manually instead.",
        },
        {
          question: "Why is the \"System Data\" category so large?",
          answer:
            "That category combines application caches, log files, iOS device backups, Mail attachments, downloaded software updates and local snapshots. If you develop software, Xcode derived data and simulator images are added on top. It is not one item but the sum of dozens of small sources, which is why a folder-level analysis is needed to find the one that is bloated.",
        },
      ],
      verdict: [
        "Purgeable space on a Mac is a design decision in APFS rather than a fault: macOS counts data it could delete as available. The only real problem is that the mechanism waits until the critical moment to act.",
        "If you want the space back now, the route is tmutil: list snapshots with listlocalsnapshots and release what you need with thinlocalsnapshots. Doing so does not touch your external Time Machine backup; it only costs you fast rollback over the last few hours.",
        "The durable answer is not managing snapshots but creating genuine free space on the disk. Keep 15-20% free and macOS's own thinning runs quietly in the background, so you never encounter this problem in the first place.",
      ],
      ctaText: "See Where the Space on Your Mac Goes",
    },
    de: {
      title: "Was ist bereinigbarer Speicher auf dem Mac und wie hole ich ihn zurück?",
      metaDescription:
        "Wenn Ihr Mac \"X GB bereinigbar\" meldet, sind meist lokale Time-Machine-Schnappschüsse die Ursache. So listen, verkleinern und löschen Sie sie mit tmutil.",
      subtitle: "Lokale Time-Machine-Schnappschüsse und die fehlenden Gigabyte",
      intro: [
        "Kurze Antwort: Bereinigbarer Speicher auf dem Mac sind Daten, die macOS bei Bedarf selbstständig löschen kann — überwiegend die stündlichen lokalen Schnappschüsse von Time Machine. Im Terminal listen Sie sie mit tmutil listlocalsnapshots / auf und geben Platz frei mit tmutil thinlocalsnapshots / 50000000000 4, wobei die Zahl das Ziel in Byte angibt. Damit keine neuen Schnappschüsse entstehen, müssen Sie die automatische Sicherung von Time Machine abschalten.",
        "Am meisten verwirrt Mac-Nutzer diese Situation: Der Finder meldet 200 GB verfügbar, doch das Kopieren einer Datei scheitert mit \"nicht genügend Speicherplatz\" — oder Festplattendienstprogramm und Finder nennen völlig unterschiedliche Werte. Der Grund: APFS zählt bereinigbaren Speicher als verfügbar, obwohl er noch nicht tatsächlich frei ist. Dieser Ratgeber erklärt, woher dieser Speicher kommt, wie Sie ihn zurückholen und was Sie dafür aufgeben.",
      ],
      keyTakeaways: [
        "Bereinigbarer Speicher sind Daten, die macOS bei Bedarf löschen kann; den größten Teil machen lokale Time-Machine-Schnappschüsse aus.",
        "Bei aktivierter Time Machine erstellt macOS stündliche lokale Schnappschüsse und behält sie rund 24 Stunden — auch ohne angeschlossene externe Festplatte.",
        "Finder und Festplattendienstprogramm zeigen unterschiedliche Werte, weil Letzteres bereinigbaren Speicher nicht als frei zählt.",
        "tmutil listlocalsnapshots / listet alle vorhandenen Schnappschüsse mit Zeitstempel auf.",
        "tmutil thinlocalsnapshots / <Byte> 4 entfernt so viele Schnappschüsse wie nötig, um den Zielwert freizugeben — auf der aggressivsten Dringlichkeitsstufe.",
        "Das Löschen lokaler Schnappschüsse berührt Ihre externe Time-Machine-Sicherung nicht; Sie verlieren nur die schnelle Rückkehr zu den letzten 24 Stunden.",
      ],
      howTo: {
        name: "Lokale Schnappschüsse auf dem Mac entfernen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Den bereinigbaren Speicher anzeigen",
            text: "Klicken Sie im Finder mit der rechten Maustaste auf das Symbol Macintosh HD und wählen Sie Informationen. In der Zeile Verfügbar steht der bereinigbare Anteil in Klammern.",
          },
          {
            name: "Das Terminal öffnen",
            text: "Öffnen Sie das Terminal über Programme > Dienstprogramme oder drücken Sie Befehl+Leertaste und geben Sie Terminal ein.",
          },
          {
            name: "Vorhandene Schnappschüsse auflisten",
            text: "Führen Sie tmutil listlocalsnapshots / aus. Jede Zeile steht für einen Schnappschuss mit Datum und Uhrzeit; Einträge, die mit com.apple.TimeMachine beginnen, sind lokale Time-Machine-Schnappschüsse.",
          },
          {
            name: "Die Schnappschüsse verkleinern",
            text: "Führen Sie tmutil thinlocalsnapshots / 50000000000 4 aus. Die Zahl gibt den freizugebenden Platz in Byte an (50000000000 entspricht etwa 50 GB), die abschließende 4 ist die aggressivste Dringlichkeitsstufe.",
          },
          {
            name: "Bei Bedarf einzelne Schnappschüsse löschen",
            text: "Um einen bestimmten Schnappschuss zu entfernen, verwenden Sie tmutil deletelocalsnapshots 2026-08-17-120000 mit dem Zeitstempel aus der Auflistung.",
          },
          {
            name: "Neue Schnappschüsse verhindern",
            text: "Für eine dauerhafte Lösung deaktivieren Sie die automatische Sicherung unter Systemeinstellungen > Allgemein > Time Machine (unter macOS 12: Systemeinstellungen > Time Machine). Sicherungen lassen sich weiterhin manuell starten.",
          },
        ],
      },
      sections: [
        {
          title: "Was genau ist bereinigbarer Speicher?",
          content: [
            "Im Dateisystem APFS markiert macOS bestimmte Daten auf dem Datenträger als bei Bedarf entbehrlich. Es handelt sich um echte Dateien, doch macOS darf sie ohne Rückfrage löschen, wenn der Platz knapp wird. Der Finder rechnet sie zum verfügbaren Speicher, weil sie technisch gesehen jederzeit zurückgewonnen werden können.",
            "Drei Arten von Daten fallen in diese Kategorie. Die erste und größte sind die lokalen Schnappschüsse von Time Machine. Die zweite sind aus iCloud Drive geladene Dateien, die sich einfach erneut herunterladen ließen. Die dritte sind Programm-Caches, Xcode-Zwischendaten und temporäre Systemdateien.",
            "Das Problem: Dieser Mechanismus greift nicht immer schnell genug. Wenn Sie eine große Datei in einem Zug kopieren, versucht macOS den nötigen Platz freizugeben, doch der Vorgang läuft mitunter in eine Zeitüberschreitung — und Sie erhalten \"nicht genügend Speicherplatz\", während der Finder weiter 200 GB frei meldet.",
          ],
        },
        {
          title: "Lokale Time-Machine-Schnappschüsse: die Hauptquelle",
          content: [
            "Sobald Sie Time Machine für die Sicherung auf eine externe Festplatte aktivieren, erstellt macOS zusätzlich stündliche Schnappschüsse auf Ihrem internen Laufwerk. Diese entstehen auch dann, wenn die externe Platte nicht angeschlossen ist — damit Sie auch unterwegs auf den Stand der letzten Stunden zurückgehen können.",
            "Schnappschüsse werden in der Regel etwa 24 Stunden aufbewahrt und belegen dank des Copy-on-Write-Prinzips von APFS anfangs kaum Platz. Doch je mehr sich Ihre Dateien ändern, desto mehr ältere Versionen werden festgehalten, und der Platzbedarf wächst rasch. Wer mit großen Dateien arbeitet — Videoschnitt, virtuelle Maschinen, große Datensätze —, kommt leicht auf über 100 GB.",
            "macOS verkleinert diese Schnappschüsse automatisch, wenn der freie Speicher knapp wird. Der Haken: Der Mechanismus wartet bis zum kritischen Moment. Wer den Platz vorher zurückhaben möchte, muss selbst eingreifen.",
          ],
        },
        {
          title: "Warum Finder und Festplattendienstprogramm sich widersprechen",
          content: [
            "Zwei unterschiedliche Zahlen zu sehen verwirrt, die Erklärung ist aber einfach: Die beiden Werkzeuge beantworten dieselbe Frage unterschiedlich. Der Finder rechnet bereinigbaren Speicher zum verfügbaren hinzu und beantwortet damit \"wie viel könnten Sie theoretisch haben\". Das Festplattendienstprogramm meldet nur, was jetzt tatsächlich frei ist.",
            "So kann der Finder 200 GB verfügbar melden, während das Festplattendienstprogramm 40 GB frei anzeigt. Die Differenz von 160 GB sind Schnappschüsse und Caches, die gelöscht werden sollten, aber noch nicht gelöscht wurden. Auf die Frage, welche Zahl stimmt, lautet die Antwort: beide — die eine misst Potenzial, die andere den Ist-Zustand.",
            "Worauf sollten Sie sich in der Praxis verlassen? Ziehen Sie vor anspruchsvollen Aktionen den Wert des Festplattendienstprogramms heran. Wenn Sie eine große Datei kopieren, ein Programm installieren oder ein macOS-Update einspielen wollen, entscheidet der tatsächlich freie Platz über den Erfolg.",
          ],
        },
        {
          title: "Was Sie beim Löschen von Schnappschüssen verlieren",
          content: [
            "Das Löschen lokaler Schnappschüsse berührt die Time-Machine-Sicherungen auf Ihrer externen Festplatte nicht. Das sind zwei völlig getrennte Dinge: Die externe Sicherung ist Ihr Langzeitarchiv, lokale Schnappschüsse sind temporäre Kopien für die schnelle Rückkehr über die letzten Stunden.",
            "Sie geben ausschließlich die Möglichkeit auf, bei nicht angeschlossener externer Platte \"auf den Stand von vor zwei Stunden\" zurückzugehen. Eine versehentlich gelöschte Datei konnten Sie zuvor aus diesen Schnappschüssen wiederherstellen; danach brauchen Sie dafür die externe Sicherung.",
            "Für die meisten Nutzer ist das ein vertretbarer Tausch, besonders bei dauerhaft vollem Laufwerk. Wer allerdings keine regelmäßigen externen Sicherungen anlegt, hat in den lokalen Schnappschüssen sein einziges Sicherheitsnetz — dann sollten Sie vor dem Löschen mindestens einmal eine Time-Machine-Sicherung durchführen.",
          ],
        },
        {
          title: "Weitere Quellen bereinigbaren Speichers",
          content: [
            "Schnappschüsse sind nicht die einzige Quelle. Die Kategorie \"Systemdaten\" in der Speicherübersicht (früher \"Sonstige\") umfasst Programm-Caches, Protokolldateien, iOS-Gerätesicherungen, Mail-Anhänge und heruntergeladene Softwareupdates und erreicht allein schon zweistellige Gigabyte-Beträge.",
            "Wer Software entwickelt, hat mit Xcode eine eigene Kategorie: Zwischendaten (DerivedData), Geräteunterstützungsdateien und Simulator-Images summieren sich leicht auf über 50 GB. Browser-Caches, Docker-Images und der Homebrew-Cache gehören zur selben stillen Ansammlung.",
            "Die macOS-Version von Disk Mop bündelt diese Kategorien auf einem Bildschirm: Der Cache Cleaner listet über zehn macOS-spezifische Kategorien einschließlich Benutzer-Caches, Homebrew und Xcode, während die Datenträgeranalyse das Laufwerk als Treemap zeichnet, sodass der tatsächlich aufgeblähte Ordner sofort auffällt. Das Modul Große Dateien nutzt unter macOS den mdfind-Index, wodurch Suchläufe schnell antworten, ohne das gesamte Laufwerk zu durchlaufen.",
          ],
        },
        {
          title: "Eine dauerhafte Lösung einrichten",
          content: [
            "Einmaliges Verkleinern hält nur wenige Tage; solange Time Machine aktiv ist, sammeln sich Schnappschüsse erneut an. Für eine dauerhafte Regelung gibt es zwei Wege: die automatische Sicherung abschalten und Sicherungen manuell starten, oder das Laufwerk stets zu 15-20 % frei halten, damit der eigene Verkleinerungsmechanismus von macOS Luft zum Arbeiten hat.",
            "Der zweite Weg ist sicherer, weil Sie den Sicherungsschutz behalten. Dafür geht es nicht um bereinigbaren Speicher, sondern um echte Dateien: alte Downloads, doppelte Fotos, nicht mehr genutzte Programme und große Videoarchive.",
            "Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Was ist bereinigbarer Speicher auf dem Mac?",
          answer:
            "Es sind Daten, die macOS bei Platzmangel selbstständig löschen kann. Den größten Teil machen die stündlichen lokalen Schnappschüsse von Time Machine aus; hinzu kommen aus iCloud erneut ladbare Dateien und Programm-Caches. Der Finder rechnet sie zum verfügbaren Speicher, das Festplattendienstprogramm nicht.",
        },
        {
          question: "Der Finder meldet 200 GB frei, trotzdem kann ich nichts kopieren — warum?",
          answer:
            "Weil der Großteil dieser 200 GB bereinigbarer Speicher ist, der noch nicht tatsächlich freigegeben wurde. macOS versucht ihn während des Kopiervorgangs freizugeben, was in eine Zeitüberschreitung laufen kann. Geben Sie den Platz vorab frei mit tmutil thinlocalsnapshots / 50000000000 4 im Terminal.",
        },
        {
          question: "Wie lösche ich lokale Schnappschüsse?",
          answer:
            "Listen Sie sie im Terminal mit tmutil listlocalsnapshots / auf und entfernen Sie anschließend mit tmutil thinlocalsnapshots / <Byte> 4 so viele wie nötig — etwa 50000000000 für rund 50 GB. Einen bestimmten Schnappschuss entfernen Sie mit tmutil deletelocalsnapshots und dem Zeitstempel aus der Auflistung.",
        },
        {
          question: "Zerstört das Löschen lokaler Schnappschüsse meine Time-Machine-Sicherung?",
          answer:
            "Nein. Die Time-Machine-Sicherungen auf Ihrer externen Festplatte sind vollständig getrennt und bleiben unberührt. Sie verlieren lediglich die Möglichkeit, bei getrennter externer Platte auf die letzten Stunden zurückzugehen. Ihr Langzeitarchiv bleibt vollständig erhalten.",
        },
        {
          question: "Kann ich lokale Schnappschüsse ganz abschalten?",
          answer:
            "Der frühere Befehl sudo tmutil disablelocal wurde mit macOS High Sierra entfernt. Heute bleibt nur, die automatische Sicherung von Time Machine abzuschalten: unter Systemeinstellungen > Allgemein > Time Machine (macOS 12: Systemeinstellungen > Time Machine) die automatische Sicherung deaktivieren und Sicherungen manuell starten.",
        },
        {
          question: "Warum ist die Kategorie \"Systemdaten\" so groß?",
          answer:
            "Diese Kategorie fasst Programm-Caches, Protokolldateien, iOS-Gerätesicherungen, Mail-Anhänge, heruntergeladene Softwareupdates und lokale Schnappschüsse zusammen. Wer Software entwickelt, hat zusätzlich Xcode-Zwischendaten und Simulator-Images. Es ist kein einzelner Posten, sondern die Summe vieler kleiner Quellen — deshalb braucht es eine ordnerbasierte Analyse, um den aufgeblähten Anteil zu finden.",
        },
      ],
      verdict: [
        "Bereinigbarer Speicher auf dem Mac ist kein Fehler, sondern eine Designentscheidung von APFS: macOS zählt Daten, die es löschen könnte, als verfügbar. Problematisch ist allein, dass der Mechanismus bis zum kritischen Moment wartet.",
        "Wer den Platz sofort zurückwill, geht über tmutil: mit listlocalsnapshots ansehen, mit thinlocalsnapshots den benötigten Anteil freigeben. Ihre externe Time-Machine-Sicherung bleibt davon unberührt, es entfällt lediglich die schnelle Rückkehr über die letzten Stunden.",
        "Die dauerhafte Antwort liegt nicht in der Verwaltung von Schnappschüssen, sondern im Schaffen echten freien Speichers. Halten Sie 15-20 % frei, dann arbeitet der Verkleinerungsmechanismus von macOS still im Hintergrund und das Problem tritt gar nicht erst auf.",
      ],
      ctaText: "Sehen Sie, wohin der Speicher auf Ihrem Mac geht",
    },
  },
};
