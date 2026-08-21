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
    fr: {
      title: "Espace purgeable sur Mac : d'où vient-il et comment le récupérer ?",
      metaDescription:
        "Votre Mac affiche « X GB purgeables » ? Ce sont souvent les instantanés locaux de Time Machine. Comment les lister, les alléger et les supprimer avec tmutil.",
      subtitle: "Les instantanés locaux de Time Machine et les gigaoctets qui manquent",
      intro: [
        "Réponse courte : l'espace purgeable (purgeable space) d'un Mac correspond aux données que macOS peut supprimer de lui-même lorsqu'il a besoin de place, et il s'agit pour l'essentiel des instantanés locaux (local snapshots) que Time Machine crée toutes les heures. Listez-les dans le Terminal avec tmutil listlocalsnapshots / et libérez de la place avec tmutil thinlocalsnapshots / 50000000000 4, où le nombre indique l'objectif en octets. Pour empêcher la création de nouveaux instantanés, il faut désactiver la sauvegarde automatique de Time Machine.",
        "La situation qui déroute le plus les utilisateurs de Mac est la suivante : le Finder annonce 200 GB disponibles, mais la copie d'un fichier échoue sur un message d'espace insuffisant, ou bien l'Utilitaire de disque et le Finder donnent des chiffres complètement différents. La raison tient à APFS, qui compte l'espace purgeable comme disponible alors qu'il n'est pas encore réellement libre. Ce guide explique d'où vient cet espace, comment le récupérer et ce que vous perdez au passage.",
      ],
      keyTakeaways: [
        "L'espace purgeable désigne les données que macOS peut supprimer en cas de besoin ; il s'agit surtout des instantanés locaux de Time Machine.",
        "Quand Time Machine est activé, macOS crée un instantané local chaque heure et le conserve environ 24 heures, même sans disque externe connecté.",
        "Le Finder et l'Utilitaire de disque affichent des chiffres différents parce que l'Utilitaire de disque ne compte pas l'espace purgeable comme libre.",
        "La commande tmutil listlocalsnapshots / affiche tous les instantanés existants avec leur horodatage.",
        "La commande tmutil thinlocalsnapshots / <octets> 4 supprime juste assez d'instantanés pour récupérer le volume visé, au niveau d'urgence le plus agressif.",
        "Supprimer les instantanés locaux n'affecte pas votre sauvegarde Time Machine externe : vous perdez seulement le retour rapide sur les dernières 24 heures.",
      ],
      howTo: {
        name: "Supprimer les instantanés locaux sur un Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Voir la part d'espace purgeable",
            text: "Dans le Finder, faites un clic droit sur l'icône Macintosh HD et choisissez Lire les informations. La ligne Disponible indique entre parenthèses la quantité purgeable.",
          },
          {
            name: "Ouvrir le Terminal",
            text: "Ouvrez le Terminal depuis Applications > Utilitaires, ou appuyez sur Commande+Espace et tapez Terminal.",
          },
          {
            name: "Lister les instantanés existants",
            text: "Exécutez tmutil listlocalsnapshots /. Chaque ligne correspond à un instantané avec sa date et son heure ; les entrées commençant par com.apple.TimeMachine sont les instantanés locaux de Time Machine.",
          },
          {
            name: "Alléger les instantanés",
            text: "Exécutez tmutil thinlocalsnapshots / 50000000000 4. Le nombre correspond à l'espace à récupérer en octets (50000000000 équivaut à environ 50 GB) et le 4 final représente le niveau d'urgence le plus agressif.",
          },
          {
            name: "Supprimer un instantané précis si nécessaire",
            text: "Pour retirer un instantané en particulier, utilisez tmutil deletelocalsnapshots 2026-08-17-120000 en remplaçant l'horodatage par celui vu dans la liste.",
          },
          {
            name: "Empêcher la création de nouveaux instantanés",
            text: "Pour une solution durable, désactivez la sauvegarde automatique dans Réglages Système > Général > Time Machine (Préférences Système > Time Machine sous macOS 12). Vous pouvez toujours lancer vos sauvegardes manuellement.",
          },
        ],
      },
      sections: [
        {
          title: "Qu'est-ce que l'espace purgeable exactement ?",
          content: [
            "Sur le système de fichiers APFS, macOS marque certaines données du disque comme sacrifiables en cas de besoin. Ces données correspondent à de vrais fichiers, mais macOS a le droit de les supprimer sans vous demander votre avis lorsque la place vient à manquer. Le Finder les compte dans l'espace disponible, puisque, techniquement, vous pouvez les récupérer à tout moment.",
            "Trois types de données entrent dans cette catégorie. Le premier, et de loin le plus volumineux, ce sont les instantanés locaux de Time Machine. Le deuxième regroupe les fichiers téléchargés depuis iCloud Drive, qu'il suffirait de télécharger à nouveau. Le troisième rassemble les caches d'applications, les données dérivées de Xcode et les fichiers temporaires du système.",
            "Le problème, c'est que ce mécanisme ne se déclenche pas toujours assez vite. Quand vous copiez un gros fichier d'un seul tenant, macOS tente de libérer l'espace nécessaire, mais l'opération dépasse parfois le délai imparti et vous obtenez une erreur d'espace insuffisant, alors que le Finder affiche toujours 200 GB de libre.",
          ],
        },
        {
          title: "Les instantanés locaux de Time Machine : la source principale",
          content: [
            "Dès que vous activez Time Machine pour sauvegarder vers un disque externe, macOS se met aussi à créer des instantanés horaires sur votre disque interne. Ils sont créés même lorsque le disque externe n'est pas branché, afin que vous puissiez revenir sur les dernières heures loin de votre disque de sauvegarde.",
            "Ces instantanés sont généralement conservés environ 24 heures et, grâce à la copie sur écriture (copy-on-write) d'APFS, ils n'occupent presque rien au départ. Mais à mesure que vos fichiers changent, les anciennes versions sont conservées et l'empreinte grossit vite. Pour qui manipule de gros fichiers — montage vidéo, machines virtuelles, jeux de données volumineux —, les instantanés locaux dépassent facilement 100 GB.",
            "macOS allège ces instantanés automatiquement lorsque l'espace libre devient critique. Le problème, c'est que le mécanisme attend justement ce moment critique : si vous voulez récupérer la place avant, il faut intervenir vous-même.",
          ],
        },
        {
          title: "Pourquoi le Finder et l'Utilitaire de disque ne sont pas d'accord",
          content: [
            "Voir deux chiffres différents déroute, mais l'explication est simple : les deux outils répondent à la même question de deux façons. Le Finder inclut l'espace purgeable dans le volume disponible et répond donc à « combien pourriez-vous avoir en théorie ». L'Utilitaire de disque, lui, n'indique que ce qui est réellement libre à l'instant présent.",
            "C'est ainsi que le Finder peut annoncer 200 GB disponibles pendant que l'Utilitaire de disque affiche 40 GB libres. Les 160 GB d'écart sont des instantanés et des caches qui devraient être supprimés mais ne l'ont pas encore été. Si vous demandez lequel des deux chiffres est le bon, la réponse est : les deux. L'un mesure un potentiel, l'autre une réalité.",
            "Auquel se fier en pratique ? Prenez le chiffre de l'Utilitaire de disque avant toute opération exigeante. Si vous vous apprêtez à copier un gros fichier, à installer une application ou à lancer une mise à jour de macOS, c'est l'espace réellement libre qui décide de la réussite.",
          ],
        },
        {
          title: "Ce que vous perdez en supprimant les instantanés",
          content: [
            "Supprimer les instantanés locaux n'affecte en rien les sauvegardes Time Machine de votre disque externe. Ce sont deux choses entièrement distinctes : la sauvegarde externe est votre archive de long terme, tandis que les instantanés locaux sont des copies temporaires destinées à un retour rapide sur les dernières heures.",
            "La seule chose que vous abandonnez, c'est la possibilité de « revenir à l'état d'il y a deux heures » quand le disque externe est débranché. Un fichier supprimé par erreur pouvait jusque-là être récupéré depuis ces instantanés ; ensuite, il vous faudra la sauvegarde externe pour cela.",
            "Pour la plupart des utilisateurs, le compromis est raisonnable, surtout si le disque tourne en permanence plein. Mais si vous ne faites pas de sauvegardes externes régulières, les instantanés locaux constituent votre seul filet de sécurité : dans ce cas, lancez au moins une sauvegarde Time Machine avant de les effacer.",
          ],
        },
        {
          title: "Les autres sources d'espace purgeable",
          content: [
            "Les instantanés ne sont pas la seule source. La catégorie « Données système » de l'écran de stockage (autrefois appelée « Autre ») regroupe les caches d'applications, les fichiers journaux, les sauvegardes d'appareils iOS, les pièces jointes de Mail et les mises à jour logicielles téléchargées ; à elle seule, elle atteint facilement plusieurs dizaines de gigaoctets.",
            "Si vous développez des logiciels, Xcode forme une catégorie à part entière : les données dérivées (DerivedData), les fichiers de prise en charge des appareils et les images de simulateur dépassent ensemble 50 GB sans difficulté. Les caches des navigateurs, les images Docker et le cache de Homebrew participent à la même accumulation silencieuse.",
            "La version macOS de Disk Mop réunit ces catégories sur un seul écran : le Nettoyeur de cache (Cache Cleaner) liste plus de dix catégories propres à macOS, dont les caches utilisateur, Homebrew et Xcode, tandis que l'Analyse du disque (Disk Analysis) dessine le volume sous forme de treemap pour rendre évident le dossier réellement enflé. Le module Gros fichiers (Large Files) s'appuie sur l'index mdfind sous macOS : les analyses répondent donc vite, sans parcourir tout le disque.",
          ],
        },
        {
          title: "Mettre en place une solution qui tient dans la durée",
          content: [
            "Un allègement ponctuel tient quelques jours : tant que Time Machine reste activé, les instantanés s'accumulent de nouveau. Pour un réglage durable, deux options s'offrent à vous : désactiver la sauvegarde automatique et lancer les sauvegardes à la main, ou garder en permanence 15-20 % du disque libres afin que le mécanisme d'allègement de macOS ait de quoi respirer.",
            "La seconde option est plus sûre, car vous conservez la protection des sauvegardes. Y parvenir suppose de s'occuper non pas de l'espace purgeable, mais des vrais fichiers : anciens téléchargements, photos en double, applications que vous n'utilisez plus et grosses archives vidéo.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Qu'est-ce que l'espace purgeable sur un Mac ?",
          answer:
            "Ce sont des données que macOS peut supprimer de lui-même quand il manque de place. L'essentiel provient des instantanés locaux que Time Machine crée toutes les heures ; le reste correspond à des fichiers retéléchargeables depuis iCloud et à des caches d'applications. Le Finder les compte dans l'espace disponible, l'Utilitaire de disque non.",
        },
        {
          question: "Le Finder indique 200 GB libres mais je ne peux pas copier un fichier, pourquoi ?",
          answer:
            "Parce que la majeure partie de ces 200 GB est de l'espace purgeable qui n'a pas encore été réellement libéré. macOS essaie de le libérer pendant la copie, mais l'opération peut dépasser le délai imparti. Libérez la place à l'avance avec tmutil thinlocalsnapshots / 50000000000 4 dans le Terminal et le problème disparaît.",
        },
        {
          question: "Comment supprimer les instantanés locaux ?",
          answer:
            "Listez-les dans le Terminal avec tmutil listlocalsnapshots /, puis supprimez-en assez avec tmutil thinlocalsnapshots / <octets> 4 — par exemple 50000000000 pour récupérer environ 50 GB. Pour retirer un instantané précis, utilisez tmutil deletelocalsnapshots suivi de l'horodatage vu dans la liste.",
        },
        {
          question: "Supprimer les instantanés locaux abîme-t-il ma sauvegarde Time Machine ?",
          answer:
            "Non. Les sauvegardes Time Machine de votre disque externe sont totalement distinctes et ne sont pas touchées. Vous perdez seulement la possibilité de revenir sur les dernières heures quand le disque externe est débranché. Votre archive de long terme reste intacte.",
        },
        {
          question: "Puis-je désactiver complètement les instantanés locaux ?",
          answer:
            "L'ancienne commande sudo tmutil disablelocal a été retirée à partir de macOS High Sierra. Aujourd'hui, la seule voie consiste à désactiver la sauvegarde automatique de Time Machine : ouvrez Réglages Système > Général > Time Machine (Préférences Système > Time Machine sous macOS 12), désactivez la sauvegarde automatique et lancez vos sauvegardes à la main.",
        },
        {
          question: "Pourquoi la catégorie « Données système » est-elle si volumineuse ?",
          answer:
            "Cette catégorie additionne les caches d'applications, les fichiers journaux, les sauvegardes d'appareils iOS, les pièces jointes de Mail, les mises à jour logicielles téléchargées et les instantanés locaux. Si vous développez, les données dérivées de Xcode et les images de simulateur s'y ajoutent. Ce n'est pas un poste unique mais la somme de dizaines de petites sources : d'où l'intérêt d'une analyse dossier par dossier pour trouver celle qui a enflé.",
        },
      ],
      verdict: [
        "L'espace purgeable d'un Mac n'est pas un défaut mais un choix de conception d'APFS : macOS compte comme disponibles des données qu'il pourrait supprimer. Le seul vrai problème, c'est que le mécanisme attend le moment critique pour agir.",
        "Si vous voulez récupérer la place tout de suite, la route passe par tmutil : listez les instantanés avec listlocalsnapshots, puis libérez ce qu'il vous faut avec thinlocalsnapshots. L'opération ne touche pas à votre sauvegarde Time Machine externe, elle vous coûte seulement le retour rapide sur les dernières heures.",
        "La réponse durable ne consiste pas à gérer des instantanés mais à créer de la vraie place sur le disque. Gardez 15-20 % de libre et l'allègement intégré de macOS travaille tranquillement en arrière-plan : vous ne rencontrerez tout simplement plus le problème.",
      ],
      ctaText: "Voyez où passe l'espace de votre Mac",
    },
    es: {
      title: "¿Qué es el espacio purgable en un Mac y cómo se recupera?",
      metaDescription:
        "Si tu Mac indica « X GB purgables », lo normal es que sean las instantáneas locales de Time Machine. Cómo listarlas, reducirlas y borrarlas con tmutil.",
      subtitle: "Las instantáneas locales de Time Machine y los gigabytes que faltan",
      intro: [
        "Respuesta corta: el espacio purgable (purgeable space) de un Mac son datos que macOS puede borrar por su cuenta cuando necesita sitio, y en su mayoría son las instantáneas locales (local snapshots) que Time Machine crea cada hora. Puedes listarlas en el Terminal con tmutil listlocalsnapshots / y liberar espacio con tmutil thinlocalsnapshots / 50000000000 4, donde el número es el objetivo en bytes. Para que no se creen instantáneas nuevas hay que desactivar la copia de seguridad automática de Time Machine.",
        "La situación que más desconcierta a los usuarios de Mac es esta: el Finder indica 200 GB disponibles, pero al copiar un archivo aparece un aviso de espacio insuficiente, o bien la Utilidad de Discos y el Finder dan cifras completamente distintas. El motivo es que APFS cuenta el espacio purgable como disponible aunque todavía no esté realmente libre. Esta guía explica de dónde sale ese espacio, cómo recuperarlo y qué pierdes por el camino.",
      ],
      keyTakeaways: [
        "El espacio purgable son datos que macOS puede borrar cuando lo necesita; la mayor parte son instantáneas locales de Time Machine.",
        "Con Time Machine activado, macOS crea una instantánea local cada hora y la conserva unas 24 horas, aunque no haya ningún disco externo conectado.",
        "El Finder y la Utilidad de Discos dan cifras distintas porque la Utilidad de Discos no cuenta el espacio purgable como libre.",
        "El comando tmutil listlocalsnapshots / muestra todas las instantáneas existentes con su marca de tiempo.",
        "El comando tmutil thinlocalsnapshots / <bytes> 4 borra solo las instantáneas necesarias para liberar la cantidad que indiques, en el nivel de urgencia más agresivo.",
        "Borrar las instantáneas locales no afecta a tu copia de seguridad externa de Time Machine: solo pierdes la vuelta atrás rápida de las últimas 24 horas.",
      ],
      howTo: {
        name: "Eliminar las instantáneas locales en un Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Comprobar cuánto espacio es purgable",
            text: "En el Finder, haz clic derecho en el icono de Macintosh HD y elige Obtener información. La línea Disponible muestra entre paréntesis la cantidad purgable.",
          },
          {
            name: "Abrir el Terminal",
            text: "Abre el Terminal desde Aplicaciones > Utilidades, o pulsa Comando+Espacio y escribe Terminal.",
          },
          {
            name: "Listar las instantáneas existentes",
            text: "Ejecuta tmutil listlocalsnapshots /. Cada línea es una instantánea con su fecha y hora; las entradas que empiezan por com.apple.TimeMachine son las instantáneas locales de Time Machine.",
          },
          {
            name: "Reducir las instantáneas",
            text: "Ejecuta tmutil thinlocalsnapshots / 50000000000 4. El número es el espacio que quieres recuperar en bytes (50000000000 equivale a unos 50 GB) y el 4 final es el nivel de urgencia más agresivo.",
          },
          {
            name: "Borrar instantáneas concretas si hace falta",
            text: "Para eliminar una instantánea en concreto, usa tmutil deletelocalsnapshots 2026-08-17-120000 sustituyendo la marca de tiempo por la que hayas visto en el listado.",
          },
          {
            name: "Evitar que se creen instantáneas nuevas",
            text: "Para una solución permanente, desactiva la copia de seguridad automática en Ajustes del Sistema > General > Time Machine (Preferencias del Sistema > Time Machine en macOS 12). Podrás seguir iniciando las copias a mano.",
          },
        ],
      },
      sections: [
        {
          title: "¿Qué es exactamente el espacio purgable?",
          content: [
            "En el sistema de archivos APFS, macOS marca ciertos datos del disco como prescindibles si hace falta. Son archivos reales, pero macOS tiene permiso para borrarlos sin preguntar cuando te quedas sin sitio. El Finder los cuenta dentro del espacio disponible porque, técnicamente, puedes recuperarlos en cualquier momento.",
            "En esta categoría entran tres tipos de datos. El primero, y con diferencia el mayor, son las instantáneas locales de Time Machine. El segundo son los archivos descargados de iCloud Drive, que bastaría con volver a descargar. El tercero son las cachés de las aplicaciones, los datos derivados de Xcode y los archivos temporales del sistema.",
            "El problema es que este mecanismo no siempre entra en acción con la rapidez suficiente. Cuando intentas copiar un archivo grande de una sola vez, macOS intenta liberar el espacio necesario, pero a veces la operación agota el tiempo de espera y recibes un aviso de espacio insuficiente mientras el Finder sigue mostrando 200 GB libres.",
          ],
        },
        {
          title: "Instantáneas locales de Time Machine: la fuente principal",
          content: [
            "En cuanto activas Time Machine para copiar a un disco externo, macOS empieza además a crear instantáneas cada hora en el disco interno. Se crean también cuando el disco externo no está conectado, para que puedas volver atrás unas horas aunque no lleves encima el disco de copias.",
            "Estas instantáneas suelen conservarse unas 24 horas y, gracias al diseño de copia al escribir (copy-on-write) de APFS, al principio casi no ocupan nada. Pero a medida que tus archivos cambian se retienen las versiones antiguas y el volumen crece deprisa. Para quien trabaja con archivos grandes —edición de vídeo, máquinas virtuales, conjuntos de datos extensos— las instantáneas locales superan los 100 GB con facilidad.",
            "macOS reduce estas instantáneas por su cuenta cuando el espacio libre escasea. El inconveniente es que el mecanismo espera al momento crítico; si quieres el espacio antes, tendrás que intervenir a mano.",
          ],
        },
        {
          title: "Por qué el Finder y la Utilidad de Discos no coinciden",
          content: [
            "Ver dos cifras distintas confunde, pero la explicación es sencilla: las dos herramientas responden a la misma pregunta de forma diferente. El Finder incluye el espacio purgable en la cifra de disponible y responde a « cuánto podrías tener en teoría ». La Utilidad de Discos informa solo de lo que está realmente libre ahora mismo.",
            "Así es como el Finder puede decir 200 GB disponibles mientras la Utilidad de Discos dice 40 GB libres. Esos 160 GB de diferencia son instantáneas y cachés que deberían haberse borrado pero todavía no lo han hecho. Si preguntas cuál de las dos cifras es la correcta, la respuesta es que ambas: una mide el potencial y la otra, la realidad.",
            "¿En cuál conviene fiarse en la práctica? Guíate por la cifra de la Utilidad de Discos antes de cualquier operación exigente. Si vas a copiar un archivo grande, instalar una aplicación o aplicar una actualización de macOS, lo que decide el resultado es el espacio realmente libre.",
          ],
        },
        {
          title: "Qué pierdes al borrar las instantáneas",
          content: [
            "Borrar las instantáneas locales no afecta a las copias de Time Machine del disco externo. Son dos cosas totalmente distintas: la copia externa es tu archivo a largo plazo, mientras que las instantáneas locales son copias temporales pensadas para volver atrás unas pocas horas.",
            "A lo único que renuncias es a poder « volver al estado de hace dos horas » con el disco externo desconectado. Un archivo borrado por error podías recuperarlo de esas instantáneas; a partir de ahora necesitarás la copia externa para eso.",
            "Para la mayoría de los usuarios es un intercambio razonable, sobre todo si el disco funciona permanentemente lleno. Pero si no haces copias externas con regularidad, las instantáneas locales son tu única red de seguridad: en ese caso, ejecuta al menos una copia de Time Machine antes de eliminarlas.",
          ],
        },
        {
          title: "Otras fuentes de espacio purgable",
          content: [
            "Las instantáneas no son la única fuente. La categoría « Datos del sistema » de la pantalla de almacenamiento (antes llamada « Otro ») engloba cachés de aplicaciones, archivos de registro, copias de dispositivos iOS, adjuntos de Mail y actualizaciones de software descargadas, y por sí sola puede llegar a decenas de gigabytes.",
            "Si desarrollas software, Xcode es una categoría en sí misma: los datos derivados (DerivedData), los archivos de compatibilidad de dispositivos y las imágenes del simulador superan juntos los 50 GB sin esfuerzo. Las cachés de los navegadores, las imágenes de Docker y la caché de Homebrew forman parte de la misma acumulación silenciosa.",
            "La versión de Disk Mop para macOS reúne estas categorías en una sola pantalla: el Limpiador de caché (Cache Cleaner) lista más de diez categorías propias de macOS, incluidas las cachés de usuario, Homebrew y Xcode, mientras que el Análisis de disco (Disk Analysis) dibuja la unidad como un treemap para que la carpeta realmente hinchada salte a la vista. El módulo Archivos grandes (Large Files) usa el índice mdfind en macOS, así que los análisis responden rápido sin recorrer todo el disco.",
          ],
        },
        {
          title: "Montar algo que dure",
          content: [
            "Una reducción puntual dura unos días: mientras Time Machine siga activado, las instantáneas se acumulan otra vez. Para un arreglo duradero hay dos opciones: desactivar la copia automática y lanzar las copias a mano, o mantener siempre el disco con un 15-20 % libre para que el propio mecanismo de reducción de macOS tenga margen de maniobra.",
            "La segunda opción es más segura porque no pierdes la protección de las copias. Conseguirlo no pasa por el espacio purgable, sino por los archivos reales: descargas antiguas, fotos duplicadas, aplicaciones que ya no usas y archivos de vídeo voluminosos.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Qué es el espacio purgable en un Mac?",
          answer:
            "Son datos que macOS puede borrar por su cuenta cuando necesita sitio. La mayor parte son las instantáneas locales que Time Machine crea cada hora; el resto son archivos que podrían volver a descargarse de iCloud y cachés de aplicaciones. El Finder los incluye en el espacio disponible y la Utilidad de Discos no.",
        },
        {
          question: "El Finder dice 200 GB libres pero no puedo copiar un archivo, ¿por qué?",
          answer:
            "Porque la mayor parte de esos 200 GB es espacio purgable que todavía no se ha liberado de verdad. macOS intenta liberarlo durante la copia, pero la operación puede agotar el tiempo de espera. Libera el espacio de antemano con tmutil thinlocalsnapshots / 50000000000 4 en el Terminal y el problema desaparece.",
        },
        {
          question: "¿Cómo borro las instantáneas locales?",
          answer:
            "Lístalas en el Terminal con tmutil listlocalsnapshots / y después elimina las necesarias con tmutil thinlocalsnapshots / <bytes> 4; por ejemplo, 50000000000 para recuperar unos 50 GB. Para quitar una instantánea concreta, usa tmutil deletelocalsnapshots con la marca de tiempo del listado.",
        },
        {
          question: "¿Borrar las instantáneas locales estropea mi copia de Time Machine?",
          answer:
            "No. Las copias de Time Machine del disco externo son completamente independientes y no se ven afectadas. Lo único que pierdes es la posibilidad de volver atrás unas horas mientras el disco externo está desconectado. Tu archivo a largo plazo queda intacto.",
        },
        {
          question: "¿Puedo desactivar del todo las instantáneas locales?",
          answer:
            "El antiguo comando sudo tmutil disablelocal se retiró en macOS High Sierra. Hoy la única vía es desactivar la copia de seguridad automática de Time Machine: entra en Ajustes del Sistema > General > Time Machine (Preferencias del Sistema > Time Machine en macOS 12), desactiva la copia automática e inicia las copias a mano.",
        },
        {
          question: "¿Por qué es tan grande la categoría « Datos del sistema »?",
          answer:
            "Esa categoría suma cachés de aplicaciones, archivos de registro, copias de dispositivos iOS, adjuntos de Mail, actualizaciones de software descargadas e instantáneas locales. Si desarrollas software, se añaden los datos derivados de Xcode y las imágenes del simulador. No es un único elemento, sino la suma de decenas de fuentes pequeñas: por eso hace falta un análisis por carpetas para dar con la que se ha hinchado.",
        },
      ],
      verdict: [
        "El espacio purgable de un Mac no es un fallo, sino una decisión de diseño de APFS: macOS cuenta como disponibles unos datos que podría borrar. El único problema real es que el mecanismo espera al momento crítico para actuar.",
        "Si quieres el espacio ya, el camino pasa por tmutil: mira las instantáneas con listlocalsnapshots y libera lo que necesites con thinlocalsnapshots. Hacerlo no toca tu copia externa de Time Machine; solo te cuesta la vuelta atrás rápida de las últimas horas.",
        "La respuesta duradera no es gestionar instantáneas, sino crear espacio libre de verdad en el disco. Mantén un 15-20 % libre y la reducción propia de macOS trabajará en segundo plano sin hacer ruido, de modo que ni siquiera llegarás a encontrarte con el problema.",
      ],
      ctaText: "Descubre adónde va el espacio de tu Mac",
    },
    it: {
      title: "Che cos'è lo spazio eliminabile sul Mac e come si recupera?",
      metaDescription:
        "Se il Mac segnala « X GB eliminabili », la causa sono quasi sempre gli snapshot locali di Time Machine. Come elencarli, ridurli ed eliminarli con tmutil.",
      subtitle: "Gli snapshot locali di Time Machine e i gigabyte che spariscono",
      intro: [
        "Risposta breve: lo spazio eliminabile (purgeable space) sul Mac è costituito da dati che macOS può cancellare da solo quando ha bisogno di posto, e in gran parte si tratta degli snapshot locali (local snapshots) che Time Machine crea ogni ora. Puoi elencarli nel Terminale con tmutil listlocalsnapshots / e liberare spazio con tmutil thinlocalsnapshots / 50000000000 4, dove il numero indica l'obiettivo in byte. Per impedire la creazione di nuovi snapshot devi disattivare il backup automatico di Time Machine.",
        "La situazione che disorienta di più gli utenti Mac è questa: il Finder segnala 200 GB disponibili, ma la copia di un file si interrompe con un errore di spazio insufficiente, oppure Utility Disco e Finder indicano numeri completamente diversi. Il motivo è che APFS conteggia lo spazio eliminabile come disponibile anche se non è ancora davvero libero. Questa guida spiega da dove arriva quello spazio, come riprenderselo e a che cosa rinunci nel farlo.",
      ],
      keyTakeaways: [
        "Lo spazio eliminabile è costituito da dati che macOS può cancellare quando serve; la parte più consistente sono gli snapshot locali di Time Machine.",
        "Con Time Machine attivo macOS crea uno snapshot locale ogni ora e lo conserva per circa 24 ore, anche senza alcun disco esterno collegato.",
        "Finder e Utility Disco mostrano numeri diversi perché Utility Disco non considera libero lo spazio eliminabile.",
        "Il comando tmutil listlocalsnapshots / elenca tutti gli snapshot esistenti con la relativa data e ora.",
        "Il comando tmutil thinlocalsnapshots / <byte> 4 elimina solo gli snapshot necessari a recuperare la quantità indicata, al livello di urgenza più aggressivo.",
        "Eliminare gli snapshot locali non tocca il backup esterno di Time Machine: perdi soltanto il ritorno rapido alle ultime 24 ore.",
      ],
      howTo: {
        name: "Eliminare gli snapshot locali sul Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Vedere quanto spazio è eliminabile",
            text: "Nel Finder fai clic con il tasto destro sull'icona Macintosh HD e scegli Ottieni informazioni. Alla voce Disponibili la quantità eliminabile è indicata tra parentesi.",
          },
          {
            name: "Aprire il Terminale",
            text: "Apri il Terminale da Applicazioni > Utility, oppure premi Comando+Spazio e digita Terminale.",
          },
          {
            name: "Elencare gli snapshot esistenti",
            text: "Esegui tmutil listlocalsnapshots /. Ogni riga corrisponde a uno snapshot con data e ora; le voci che iniziano con com.apple.TimeMachine sono gli snapshot locali di Time Machine.",
          },
          {
            name: "Ridurre gli snapshot",
            text: "Esegui tmutil thinlocalsnapshots / 50000000000 4. Il numero indica lo spazio da recuperare in byte (50000000000 equivale a circa 50 GB) e il 4 finale è il livello di urgenza più aggressivo.",
          },
          {
            name: "Eliminare singoli snapshot se serve",
            text: "Per rimuovere uno snapshot specifico usa tmutil deletelocalsnapshots 2026-08-17-120000, sostituendo la data e ora con quella vista nell'elenco.",
          },
          {
            name: "Impedire la creazione di nuovi snapshot",
            text: "Per una soluzione definitiva disattiva il backup automatico in Impostazioni di Sistema > Generali > Time Machine (Preferenze di Sistema > Time Machine su macOS 12). Potrai comunque avviare i backup manualmente.",
          },
        ],
      },
      sections: [
        {
          title: "Che cos'è di preciso lo spazio eliminabile?",
          content: [
            "Nel file system APFS macOS contrassegna alcuni dati del disco come sacrificabili in caso di necessità. Si tratta di file veri e propri, ma macOS può cancellarli senza chiedere quando lo spazio scarseggia. Il Finder li conteggia nello spazio disponibile perché, tecnicamente, puoi riaverli in qualsiasi momento.",
            "In questa categoria rientrano tre tipi di dati. Il primo, e di gran lunga il più voluminoso, sono gli snapshot locali di Time Machine. Il secondo sono i file scaricati da iCloud Drive, che basterebbe scaricare di nuovo. Il terzo comprende le cache delle applicazioni, i dati derivati di Xcode e i file temporanei di sistema.",
            "Il problema è che questo meccanismo non entra sempre in azione abbastanza in fretta. Quando provi a copiare un file di grandi dimensioni in un colpo solo, macOS tenta di liberare lo spazio necessario, ma l'operazione a volte va in timeout e ottieni un errore di spazio insufficiente mentre il Finder continua a mostrare 200 GB liberi.",
          ],
        },
        {
          title: "Snapshot locali di Time Machine: la fonte principale",
          content: [
            "Nel momento in cui attivi Time Machine per il backup su un disco esterno, macOS inizia anche a creare snapshot ogni ora sul disco interno. Vengono creati anche quando il disco esterno non è collegato, così puoi tornare indietro di qualche ora pur essendo lontano dal disco di backup.",
            "Gli snapshot restano di norma per circa 24 ore e, grazie al meccanismo copy-on-write di APFS, all'inizio occupano quasi nulla. Ma via via che i file cambiano le versioni precedenti vengono conservate e l'ingombro cresce in fretta. Per chi lavora con file di grandi dimensioni — montaggio video, macchine virtuali, dataset corposi — gli snapshot locali superano facilmente i 100 GB.",
            "macOS riduce automaticamente questi snapshot quando lo spazio libero scarseggia. Il punto è che il meccanismo aspetta il momento critico: se vuoi riprenderti lo spazio prima, devi intervenire a mano.",
          ],
        },
        {
          title: "Perché Finder e Utility Disco non concordano",
          content: [
            "Vedere due numeri diversi confonde, ma la spiegazione è semplice: i due strumenti rispondono alla stessa domanda in modo diverso. Il Finder include lo spazio eliminabile nel valore disponibile e risponde quindi a « quanto potresti avere in teoria ». Utility Disco riporta soltanto ciò che è davvero libero in questo momento.",
            "Ecco perché il Finder può indicare 200 GB disponibili mentre Utility Disco dichiara 40 GB liberi. I 160 GB di differenza sono snapshot e cache che andrebbero cancellati ma non lo sono ancora stati. Alla domanda su quale numero sia corretto la risposta è: entrambi. Uno misura il potenziale, l'altro la situazione reale.",
            "A quale conviene affidarsi nella pratica? Prima di qualsiasi operazione impegnativa fai riferimento al valore di Utility Disco. Se stai per copiare un file di grandi dimensioni, installare un'applicazione o applicare un aggiornamento di macOS, è lo spazio davvero libero a decidere se andrà a buon fine.",
          ],
        },
        {
          title: "Che cosa perdi eliminando gli snapshot",
          content: [
            "Eliminare gli snapshot locali non tocca i backup di Time Machine sul disco esterno. Sono due cose completamente distinte: il backup esterno è il tuo archivio di lungo periodo, mentre gli snapshot locali sono copie temporanee pensate per tornare indietro rapidamente di poche ore.",
            "L'unica cosa a cui rinunci è la possibilità di « tornare a com'era due ore fa » quando il disco esterno è scollegato. Un file cancellato per sbaglio potevi recuperarlo da quegli snapshot; da quel momento in poi ti servirà il backup esterno.",
            "Per la maggior parte degli utenti è uno scambio ragionevole, soprattutto se il disco lavora sempre pieno. Ma se non fai backup esterni regolari, gli snapshot locali sono la tua unica rete di sicurezza: in quel caso esegui almeno un backup di Time Machine prima di cancellarli.",
          ],
        },
        {
          title: "Le altre fonti di spazio eliminabile",
          content: [
            "Gli snapshot non sono l'unica fonte. La categoria « Dati di sistema » nella schermata dello spazio di archiviazione (un tempo chiamata « Altro ») raccoglie cache delle applicazioni, file di log, backup di dispositivi iOS, allegati di Mail e aggiornamenti software scaricati, e da sola può arrivare a decine di gigabyte.",
            "Se sviluppi software, Xcode è una categoria a sé: dati derivati (DerivedData), file di supporto per i dispositivi e immagini del simulatore superano insieme i 50 GB senza fatica. Le cache dei browser, le immagini Docker e la cache di Homebrew fanno parte dello stesso accumulo silenzioso.",
            "La versione macOS di Disk Mop raccoglie queste categorie in un'unica schermata: Cache Cleaner elenca più di dieci categorie specifiche di macOS, comprese le cache utente, Homebrew e Xcode, mentre l'analisi del disco (Disk Analysis) disegna l'unità come treemap, così la cartella davvero gonfia salta subito all'occhio. Il modulo File di grandi dimensioni (Large Files) su macOS sfrutta l'indice mdfind, quindi le scansioni rispondono in fretta senza percorrere l'intero disco.",
          ],
        },
        {
          title: "Impostare una soluzione che duri",
          content: [
            "Una riduzione una tantum regge pochi giorni: finché Time Machine resta attivo, gli snapshot tornano ad accumularsi. Per una sistemazione stabile ci sono due strade: disattivare il backup automatico e avviare i backup a mano, oppure tenere sempre il disco libero al 15-20 % così che il meccanismo di riduzione interno a macOS abbia spazio di manovra.",
            "La seconda strada è più sicura perché non perdi la protezione del backup. Per percorrerla non serve occuparsi dello spazio eliminabile, ma dei file veri: vecchi download, foto duplicate, applicazioni che non usi più e grandi archivi video.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "Che cos'è lo spazio eliminabile sul Mac?",
          answer:
            "Sono dati che macOS può cancellare da solo quando ha bisogno di posto. La parte più consistente sono gli snapshot locali creati ogni ora da Time Machine; il resto sono file riscaricabili da iCloud e cache delle applicazioni. Il Finder li include nello spazio disponibile, Utility Disco no.",
        },
        {
          question: "Il Finder dice 200 GB liberi ma non riesco a copiare un file, perché?",
          answer:
            "Perché gran parte di quei 200 GB è spazio eliminabile non ancora liberato davvero. macOS prova a liberarlo durante la copia, ma l'operazione può andare in timeout. Libera lo spazio in anticipo con tmutil thinlocalsnapshots / 50000000000 4 nel Terminale e il problema si risolve.",
        },
        {
          question: "Come elimino gli snapshot locali?",
          answer:
            "Elencali nel Terminale con tmutil listlocalsnapshots /, poi rimuovine quanti bastano con tmutil thinlocalsnapshots / <byte> 4: per esempio 50000000000 per recuperare circa 50 GB. Per togliere uno snapshot specifico usa tmutil deletelocalsnapshots con la data e ora presa dall'elenco.",
        },
        {
          question: "Eliminare gli snapshot locali rovina il backup di Time Machine?",
          answer:
            "No. I backup di Time Machine sul disco esterno sono del tutto separati e restano intatti. L'unica cosa che perdi è la possibilità di tornare indietro di poche ore mentre il disco esterno è scollegato. Il tuo archivio di lungo periodo non viene toccato.",
        },
        {
          question: "Posso disattivare del tutto gli snapshot locali?",
          answer:
            "Il vecchio comando sudo tmutil disablelocal è stato rimosso con macOS High Sierra. Oggi l'unica strada è disattivare il backup automatico di Time Machine: vai in Impostazioni di Sistema > Generali > Time Machine (Preferenze di Sistema > Time Machine su macOS 12), disattiva il backup automatico e avvia i backup manualmente.",
        },
        {
          question: "Perché la categoria « Dati di sistema » è così grande?",
          answer:
            "Quella categoria somma cache delle applicazioni, file di log, backup di dispositivi iOS, allegati di Mail, aggiornamenti software scaricati e snapshot locali. Se sviluppi software si aggiungono i dati derivati di Xcode e le immagini del simulatore. Non è una voce sola, ma la somma di decine di piccole fonti: per questo serve un'analisi cartella per cartella per capire quale si è gonfiata.",
        },
      ],
      verdict: [
        "Lo spazio eliminabile sul Mac non è un difetto ma una scelta di progetto di APFS: macOS conteggia come disponibili dati che potrebbe cancellare. L'unico vero problema è che il meccanismo aspetta il momento critico per agire.",
        "Se vuoi lo spazio subito, la strada passa da tmutil: guarda gli snapshot con listlocalsnapshots e libera quanto ti serve con thinlocalsnapshots. L'operazione non tocca il backup esterno di Time Machine, ti costa soltanto il ritorno rapido alle ultime ore.",
        "La risposta duratura non è gestire gli snapshot, ma creare spazio libero reale sul disco. Tieni il 15-20 % libero e la riduzione interna a macOS lavora in silenzio in secondo piano, così il problema non si presenta nemmeno.",
      ],
      ctaText: "Scopri dove finisce lo spazio del tuo Mac",
    },
    pt: {
      title: "O que é o espaço liberável no Mac e como recuperá-lo?",
      metaDescription:
        "Se o seu Mac mostra “X GB liberáveis”, a causa costuma ser os instantâneos locais do Time Machine. Como listar, reduzir e apagar tudo isso com o tmutil.",
      subtitle: "Os instantâneos locais do Time Machine e os gigabytes que somem",
      intro: [
        "Resposta rápida: o espaço liberável (purgeable space) do Mac são dados que o macOS pode apagar sozinho quando precisa de lugar, e a maior parte deles são os instantâneos locais (local snapshots) que o Time Machine cria a cada hora. Liste-os no Terminal com tmutil listlocalsnapshots / e libere espaço com tmutil thinlocalsnapshots / 50000000000 4, em que o número é a meta em bytes. Para impedir a criação de novos instantâneos, é preciso desativar o backup automático do Time Machine.",
        "A situação que mais confunde quem usa Mac é esta: o Finder informa 200 GB disponíveis, mas a cópia de um arquivo falha com um aviso de espaço insuficiente, ou então o Utilitário de Disco e o Finder mostram números completamente diferentes. O motivo é que o APFS conta o espaço liberável como disponível mesmo que ele ainda não esteja realmente livre. Este guia explica de onde vem esse espaço, como recuperá-lo e do que você abre mão no caminho.",
      ],
      keyTakeaways: [
        "Espaço liberável são dados que o macOS pode apagar quando precisa; a maior parte são instantâneos locais do Time Machine.",
        "Com o Time Machine ativado, o macOS cria um instantâneo local a cada hora e o mantém por cerca de 24 horas, mesmo sem nenhum disco externo conectado.",
        "Finder e Utilitário de Disco mostram números diferentes porque o Utilitário de Disco não conta o espaço liberável como livre.",
        "O comando tmutil listlocalsnapshots / lista todos os instantâneos existentes com data e hora.",
        "O comando tmutil thinlocalsnapshots / <bytes> 4 apaga apenas os instantâneos necessários para recuperar a quantidade indicada, no nível de urgência mais agressivo.",
        "Apagar os instantâneos locais não afeta o backup externo do Time Machine: você perde só a volta rápida às últimas 24 horas.",
      ],
      howTo: {
        name: "Apagar os instantâneos locais no Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ver quanto espaço é liberável",
            text: "No Finder, clique com o botão direito no ícone do Macintosh HD e escolha Obter Informações. A linha Disponível mostra entre parênteses a quantidade liberável.",
          },
          {
            name: "Abrir o Terminal",
            text: "Abra o Terminal em Aplicativos > Utilitários ou pressione Comando+Espaço e digite Terminal.",
          },
          {
            name: "Listar os instantâneos existentes",
            text: "Execute tmutil listlocalsnapshots /. Cada linha é um instantâneo com data e hora; as entradas que começam com com.apple.TimeMachine são os instantâneos locais do Time Machine.",
          },
          {
            name: "Reduzir os instantâneos",
            text: "Execute tmutil thinlocalsnapshots / 50000000000 4. O número é o espaço que você quer recuperar em bytes (50000000000 equivale a cerca de 50 GB) e o 4 no final é o nível de urgência mais agressivo.",
          },
          {
            name: "Apagar instantâneos específicos se precisar",
            text: "Para remover um instantâneo específico, use tmutil deletelocalsnapshots 2026-08-17-120000, trocando a data e hora pela que apareceu na listagem.",
          },
          {
            name: "Impedir a criação de novos instantâneos",
            text: "Para uma solução definitiva, desative o backup automático em Ajustes do Sistema > Geral > Time Machine (Preferências do Sistema > Time Machine no macOS 12). Você continua podendo iniciar os backups manualmente.",
          },
        ],
      },
      sections: [
        {
          title: "O que é exatamente o espaço liberável?",
          content: [
            "No sistema de arquivos APFS, o macOS marca certos dados do disco como descartáveis quando necessário. São arquivos de verdade, mas o macOS tem permissão para apagá-los sem perguntar quando o espaço fica curto. O Finder os conta como parte do espaço disponível porque, tecnicamente, você pode tê-los de volta a qualquer momento.",
            "Três tipos de dados caem nessa categoria. O primeiro, e de longe o maior, são os instantâneos locais do Time Machine. O segundo são os arquivos baixados do iCloud Drive, que bastaria baixar de novo. O terceiro reúne caches de aplicativos, dados derivados do Xcode e arquivos temporários do sistema.",
            "O problema é que esse mecanismo nem sempre entra em ação rápido o bastante. Quando você tenta copiar um arquivo grande de uma vez só, o macOS tenta liberar o espaço necessário, mas a operação às vezes estoura o tempo limite e você recebe um aviso de espaço insuficiente enquanto o Finder continua mostrando 200 GB livres.",
          ],
        },
        {
          title: "Instantâneos locais do Time Machine: a fonte principal",
          content: [
            "Assim que você ativa o Time Machine para fazer backup em um disco externo, o macOS passa a criar também instantâneos a cada hora no disco interno. Eles são criados mesmo com o disco externo desconectado, para que você consiga voltar às últimas horas longe do disco de backup.",
            "Os instantâneos costumam ficar guardados por cerca de 24 horas e, graças ao esquema de cópia na escrita (copy-on-write) do APFS, quase não ocupam espaço no começo. Mas, à medida que seus arquivos mudam, as versões antigas continuam guardadas e o volume cresce depressa. Para quem trabalha com arquivos grandes — edição de vídeo, máquinas virtuais, grandes conjuntos de dados — os instantâneos locais passam de 100 GB com facilidade.",
            "O macOS reduz esses instantâneos sozinho quando o espaço livre fica escasso. O detalhe é que o mecanismo espera o momento crítico; se você quiser o espaço antes disso, precisa intervir manualmente.",
          ],
        },
        {
          title: "Por que o Finder e o Utilitário de Disco discordam",
          content: [
            "Ver dois números diferentes confunde, mas a explicação é simples: as duas ferramentas respondem à mesma pergunta de jeitos diferentes. O Finder inclui o espaço liberável no número de disponível, respondendo a “quanto você poderia ter em teoria”. O Utilitário de Disco informa apenas o que está realmente livre agora.",
            "É assim que o Finder pode dizer 200 GB disponíveis enquanto o Utilitário de Disco diz 40 GB livres. Os 160 GB de diferença são instantâneos e caches que deveriam ter sido apagados, mas ainda não foram. Se a pergunta é qual número está certo, a resposta é: os dois. Um mede o potencial, o outro mede o que existe de fato.",
            "Em qual confiar na prática? Vá pelo número do Utilitário de Disco antes de qualquer operação pesada. Se você vai copiar um arquivo grande, instalar um aplicativo ou aplicar uma atualização do macOS, quem decide o resultado é o espaço realmente livre.",
          ],
        },
        {
          title: "O que você perde ao apagar os instantâneos",
          content: [
            "Apagar os instantâneos locais não afeta os backups do Time Machine no seu disco externo. São duas coisas completamente separadas: o backup externo é o seu arquivo de longo prazo, enquanto os instantâneos locais são cópias temporárias mantidas para voltar rapidamente algumas horas.",
            "A única coisa de que você abre mão é a possibilidade de “voltar para como estava duas horas atrás” com o disco externo desconectado. Um arquivo apagado por engano podia ser recuperado desses instantâneos; depois disso, você vai precisar do backup externo para isso.",
            "Para a maioria das pessoas é uma troca razoável, principalmente quando o disco vive cheio. Mas, se você não faz backups externos com regularidade, os instantâneos locais são a sua única rede de segurança: nesse caso, rode ao menos um backup do Time Machine antes de apagá-los.",
          ],
        },
        {
          title: "Outras fontes de espaço liberável",
          content: [
            "Os instantâneos não são a única fonte. A categoria “Dados do Sistema” na tela de armazenamento (antes chamada de “Outros”) reúne caches de aplicativos, arquivos de log, backups de dispositivos iOS, anexos do Mail e atualizações de software baixadas, e sozinha já chega a dezenas de gigabytes.",
            "Se você desenvolve software, o Xcode é uma categoria à parte: dados derivados (DerivedData), arquivos de suporte a dispositivos e imagens de simulador passam juntos de 50 GB sem esforço. Caches de navegadores, imagens do Docker e o cache do Homebrew fazem parte do mesmo acúmulo silencioso.",
            "A versão do Disk Mop para macOS reúne essas categorias em uma única tela: o Limpador de Cache (Cache Cleaner) lista mais de dez categorias específicas do macOS, incluindo caches de usuário, Homebrew e Xcode, enquanto a Análise de Disco (Disk Analysis) desenha a unidade como um treemap para deixar óbvia a pasta que realmente inchou. O módulo Arquivos Grandes (Large Files) usa o índice mdfind no macOS, então as varreduras respondem rápido sem percorrer o disco inteiro.",
          ],
        },
        {
          title: "Montar uma solução que dure",
          content: [
            "Uma redução pontual dura poucos dias: enquanto o Time Machine seguir ativado, os instantâneos voltam a se acumular. Para um arranjo duradouro há duas opções: desativar o backup automático e rodar os backups manualmente, ou manter o disco sempre com 15-20 % livres, para que o próprio mecanismo de redução do macOS tenha fôlego.",
            "A segunda opção é mais segura porque você não perde a proteção do backup. Chegar lá não passa pelo espaço liberável, e sim pelos arquivos de verdade: downloads antigos, fotos duplicadas, aplicativos que você não usa mais e arquivos de vídeo volumosos.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "O que é espaço liberável no Mac?",
          answer:
            "São dados que o macOS pode apagar sozinho quando precisa de lugar. A maior parte são os instantâneos locais que o Time Machine cria a cada hora; o resto são arquivos que poderiam ser baixados de novo do iCloud e caches de aplicativos. O Finder inclui isso no espaço disponível; o Utilitário de Disco, não.",
        },
        {
          question: "O Finder diz 200 GB livres, mas não consigo copiar um arquivo. Por quê?",
          answer:
            "Porque a maior parte desses 200 GB é espaço liberável que ainda não foi de fato liberado. O macOS tenta liberá-lo durante a cópia, mas a operação pode estourar o tempo limite. Libere o espaço antes com tmutil thinlocalsnapshots / 50000000000 4 no Terminal e o problema some.",
        },
        {
          question: "Como apago os instantâneos locais?",
          answer:
            "Liste-os no Terminal com tmutil listlocalsnapshots / e depois remova quantos forem necessários com tmutil thinlocalsnapshots / <bytes> 4 — por exemplo, 50000000000 para recuperar cerca de 50 GB. Para remover um instantâneo específico, use tmutil deletelocalsnapshots com a data e hora da listagem.",
        },
        {
          question: "Apagar os instantâneos locais estraga meu backup do Time Machine?",
          answer:
            "Não. Os backups do Time Machine no disco externo são totalmente separados e não são afetados. A única coisa que você perde é a possibilidade de voltar às últimas horas com o disco externo desconectado. Seu arquivo de longo prazo continua intacto.",
        },
        {
          question: "Dá para desativar os instantâneos locais por completo?",
          answer:
            "O antigo comando sudo tmutil disablelocal foi removido no macOS High Sierra. Hoje o único caminho é desativar o backup automático do Time Machine: vá em Ajustes do Sistema > Geral > Time Machine (Preferências do Sistema > Time Machine no macOS 12), desative o backup automático e inicie os backups manualmente.",
        },
        {
          question: "Por que a categoria “Dados do Sistema” é tão grande?",
          answer:
            "Essa categoria soma caches de aplicativos, arquivos de log, backups de dispositivos iOS, anexos do Mail, atualizações de software baixadas e instantâneos locais. Se você desenvolve software, entram ainda os dados derivados do Xcode e as imagens de simulador. Não é um item só, mas a soma de dezenas de fontes pequenas — por isso é preciso uma análise pasta a pasta para achar a que inchou.",
        },
      ],
      verdict: [
        "O espaço liberável no Mac não é um defeito, e sim uma decisão de projeto do APFS: o macOS conta como disponíveis dados que poderia apagar. O único problema real é que o mecanismo espera o momento crítico para agir.",
        "Se você quer o espaço agora, o caminho é o tmutil: veja os instantâneos com listlocalsnapshots e libere o que precisar com thinlocalsnapshots. Isso não encosta no seu backup externo do Time Machine; custa apenas a volta rápida às últimas horas.",
        "A resposta duradoura não é administrar instantâneos, e sim criar espaço livre de verdade no disco. Mantenha 15-20 % livres e a redução do próprio macOS roda em silêncio no segundo plano, de modo que você nem chega a esbarrar no problema.",
      ],
      ctaText: "Veja para onde vai o espaço do seu Mac",
    },
    ja: {
      title: "Macの「削除可能」な領域とは？空き容量を取り戻す方法",
      metaDescription:
        "Macで「XX GBの削除可能」と表示される主な原因は、Time Machineのローカルスナップショットです。tmutilで一覧表示・削減・削除する具体的な手順と、Finderとディスクユーティリティで数字が食い違う理由、そして削除で失うものを解説します。",
      subtitle: "Time Machineのローカルスナップショットと、消えたギガバイトの行方",
      intro: [
        "短い答えから。Macの「削除可能」（purgeable space）な領域とは、macOSが容量を必要としたときに自分で削除できるデータのことで、その大半はTime Machineが1時間ごとに作成するローカルスナップショット（local snapshots）です。ターミナルでtmutil listlocalsnapshots /を実行すれば一覧を表示でき、tmutil thinlocalsnapshots / 50000000000 4で容量を解放できます。数字は解放したい容量をバイト単位で指定するものです。新しいスナップショットが作られないようにするには、Time Machineの自動バックアップをオフにする必要があります。",
        "Macユーザーを最も戸惑わせるのは次のような場面です。Finderは200 GBの空きがあると表示しているのに、ファイルをコピーしようとすると容量不足のエラーが出る。あるいは、ディスクユーティリティとFinderがまったく違う数字を示す。原因は、APFSが「削除可能」な領域を、まだ実際には解放されていないにもかかわらず空き容量として数えている点にあります。この記事では、その領域がどこから来るのか、どうすれば取り戻せるのか、そして取り戻す代わりに何を失うのかを説明します。",
      ],
      keyTakeaways: [
        "「削除可能」な領域とは、macOSが必要に応じて削除できるデータのことで、その大半はTime Machineのローカルスナップショットです。",
        "Time Machineを有効にしていると、macOSは1時間ごとにローカルスナップショットを作成し、外付けドライブを接続していなくてもおよそ24時間保持します。",
        "Finderとディスクユーティリティの数字が食い違うのは、ディスクユーティリティが「削除可能」な領域を空き容量として数えないためです。",
        "tmutil listlocalsnapshots /を実行すると、既存のスナップショットが日時とともにすべて一覧表示されます。",
        "tmutil thinlocalsnapshots / <バイト数> 4は、指定した容量を取り戻すのに必要なだけのスナップショットを、最も強い緊急度で削除します。",
        "ローカルスナップショットを削除しても外付けディスクのTime Machineバックアップには影響せず、失うのは直近24時間へすばやく戻れる機能だけです。",
      ],
      howTo: {
        name: "Macでローカルスナップショットを削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "削除可能な容量を確認する",
            text: "Finderで「Macintosh HD」のアイコンを右クリックし、「情報を見る」を選びます。「使用可能」の行に、括弧書きで削除可能な容量が表示されます。",
          },
          {
            name: "ターミナルを開く",
            text: "「アプリケーション」>「ユーティリティ」からターミナルを開くか、Command+スペースを押して「ターミナル」と入力します。",
          },
          {
            name: "既存のスナップショットを一覧表示する",
            text: "tmutil listlocalsnapshots /を実行します。1行が1つのスナップショットで、日付と時刻が表示されます。com.apple.TimeMachineで始まる項目がTime Machineのローカルスナップショットです。",
          },
          {
            name: "スナップショットを削減する",
            text: "tmutil thinlocalsnapshots / 50000000000 4を実行します。数字は取り戻したい容量をバイト単位で指定するもので（50000000000はおよそ50 GB）、末尾の4は最も強い緊急度を表します。",
          },
          {
            name: "必要なら個別に削除する",
            text: "特定のスナップショットだけを削除するには、一覧に表示された日時を使ってtmutil deletelocalsnapshots 2026-08-17-120000のように実行します。",
          },
          {
            name: "新しいスナップショットを作らせない",
            text: "恒久的に解決するには、「システム設定」>「一般」>「Time Machine」（macOS 12では「システム環境設定」>「Time Machine」）で自動バックアップをオフにします。バックアップは手動で開始できます。",
          },
        ],
      },
      sections: [
        {
          title: "「削除可能」な領域とは何なのか",
          content: [
            "APFSファイルシステムでは、macOSはディスク上の一部のデータを「必要になれば手放してよいもの」として扱います。中身は実在するファイルですが、容量が足りなくなるとmacOSは確認なしにそれらを削除できます。Finderがこの領域を使用可能な容量に含めているのは、技術的にはいつでも取り戻せるからです。",
            "このカテゴリーには3種類のデータが含まれます。1つ目は、最も大きな割合を占めるTime Machineのローカルスナップショットです。2つ目はiCloud Driveからダウンロード済みで、必要ならもう一度ダウンロードできるファイルです。3つ目はアプリケーションのキャッシュ、Xcodeの派生データ、システムの一時ファイルです。",
            "問題は、この仕組みが常に十分な速さで働くとは限らないことです。大きなファイルを一度にコピーしようとすると、macOSは必要な容量を解放しようとしますが、処理がタイムアウトすることがあり、Finderが200 GBの空きを表示したままで容量不足のエラーが出ます。",
          ],
        },
        {
          title: "Time Machineのローカルスナップショット：最大の原因",
          content: [
            "外付けディスクへバックアップするためにTime Machineを有効にすると、macOSは内蔵ディスク上でも1時間ごとのスナップショットの作成を始めます。これは外付けディスクを接続していないときにも作られます。バックアップ用のディスクが手元になくても、直近数時間の状態に戻せるようにするためです。",
            "スナップショットは通常24時間ほど保持され、APFSのコピーオンライト（copy-on-write）方式のおかげで作成直後はほとんど容量を使いません。しかしファイルを変更するほど古いバージョンが保持され続け、占有量は急速に増えていきます。動画編集、仮想マシン、大きなデータセットなど大容量ファイルを扱う環境では、ローカルスナップショットが100 GBを超えることも珍しくありません。",
            "空き容量が少なくなると、macOSはこれらのスナップショットを自動的に削減します。やっかいなのは、この仕組みがぎりぎりの状態になるまで動かない点です。その前に容量を取り戻したいなら、自分で手を動かす必要があります。",
          ],
        },
        {
          title: "Finderとディスクユーティリティの数字が食い違う理由",
          content: [
            "2つの異なる数字を目にすると混乱しますが、説明は単純です。2つのツールは同じ問いに違う答え方をしています。Finderは「削除可能」な領域を使用可能な容量に含めて、「理論上どれだけ使えるか」を答えています。一方のディスクユーティリティは、いま本当に空いている容量だけを表示します。",
            "だからFinderが200 GB使用可能と表示している一方で、ディスクユーティリティは40 GBの空きと表示することがあります。差分の160 GBは、削除されるべきなのにまだ削除されていないスナップショットとキャッシュです。どちらの数字が正しいのかと問われれば、答えは「どちらも正しい」です。一方は可能性を、もう一方は現状を測っています。",
            "実際にはどちらを信じるべきでしょうか。負荷の大きい作業の前は、ディスクユーティリティの数字を基準にしてください。大きなファイルをコピーする、アプリケーションをインストールする、macOSのアップデートを適用するといった場面では、成否を決めるのは本当に空いている容量です。",
          ],
        },
        {
          title: "スナップショットを削除して失うもの",
          content: [
            "ローカルスナップショットを削除しても、外付けディスク上のTime Machineバックアップには影響しません。この2つはまったく別物です。外付けのバックアップは長期の保管庫であり、ローカルスナップショットは直近数時間へすばやく戻るための一時的なコピーです。",
            "失うのは、外付けディスクを接続していない状態で「2時間前の状態に戻す」ことができる機能だけです。誤って削除したファイルはこれまでスナップショットから復元できましたが、削除したあとは外付けのバックアップが必要になります。",
            "多くの人にとって、これは納得できる取引です。特にディスクが常に満杯に近い状態で使われている場合はそうでしょう。ただし外付けへのバックアップを定期的に取っていないなら、ローカルスナップショットが唯一の安全網です。その場合は削除する前に、少なくとも一度はTime Machineのバックアップを実行してください。",
          ],
        },
        {
          title: "「削除可能」な領域を生むそのほかの原因",
          content: [
            "スナップショットだけが原因ではありません。ストレージ画面の「システムデータ」（以前は「その他」と呼ばれていたもの）は、アプリケーションのキャッシュ、ログファイル、iOSデバイスのバックアップ、Mailの添付ファイル、ダウンロード済みのソフトウェアアップデートをまとめたもので、これだけで数十ギガバイトに達することがあります。",
            "ソフトウェアを開発しているなら、Xcodeはそれ自体が1つのカテゴリーです。派生データ（DerivedData）、デバイスサポートファイル、シミュレータのイメージを合わせると、簡単に50 GBを超えます。ブラウザーのキャッシュ、Dockerのイメージ、Homebrewのキャッシュも、同じように静かに積み上がっていきます。",
            "Disk MopのmacOS版は、これらのカテゴリーを1つの画面にまとめています。キャッシュクリーナー（Cache Cleaner）はユーザーキャッシュ、Homebrew、Xcodeを含む10種類以上のmacOS固有のカテゴリーを一覧表示し、ディスク分析（Disk Analysis）はドライブをツリーマップとして描くため、本当に肥大化しているフォルダーがひと目で分かります。大きいファイル（Large Files）モジュールはmacOSではmdfindのインデックスを使うので、ディスク全体をたどらずに素早く結果を返します。",
          ],
        },
        {
          title: "長続きする仕組みをつくる",
          content: [
            "一度きりの削減で保つのは数日です。Time Machineが有効なままなら、スナップショットはまた積み上がります。長続きさせるには2つの方法があります。自動バックアップをオフにして手動でバックアップを実行するか、ディスクを常に15-20%空けておき、macOS自身の削減の仕組みに余裕を持たせるかです。",
            "後者のほうが安全です。バックアップによる保護を失わずに済むからです。そのために取り組むべきなのは「削除可能」な領域ではなく、実際のファイルのほうです。古いダウンロード、重複した写真、もう使っていないアプリケーション、そして大きな動画のアーカイブが対象になります。",
            "Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "Macの「削除可能」な領域とは何ですか？",
          answer:
            "macOSが容量を必要としたときに自分で削除できるデータのことです。その大半はTime Machineが1時間ごとに作成するローカルスナップショットで、残りはiCloudから再ダウンロードできるファイルやアプリケーションのキャッシュです。Finderはこれを使用可能な容量に含めますが、ディスクユーティリティは含めません。",
        },
        {
          question: "Finderには200 GBの空きと出るのにファイルをコピーできません。なぜですか？",
          answer:
            "その200 GBの大半が「削除可能」な領域で、まだ実際には解放されていないからです。macOSはコピー中に解放しようとしますが、処理がタイムアウトすることがあります。ターミナルでtmutil thinlocalsnapshots / 50000000000 4を実行し、あらかじめ容量を解放しておけば解決します。",
        },
        {
          question: "ローカルスナップショットはどうやって削除しますか？",
          answer:
            "ターミナルでtmutil listlocalsnapshots /を実行して一覧を表示し、続けてtmutil thinlocalsnapshots / <バイト数> 4で必要な分だけ削除します。たとえば約50 GBを取り戻すなら50000000000と指定します。特定のスナップショットだけを消す場合は、一覧の日時を付けてtmutil deletelocalsnapshotsを実行します。",
        },
        {
          question: "ローカルスナップショットを削除するとTime Machineのバックアップは壊れますか？",
          answer:
            "壊れません。外付けディスク上のTime Machineバックアップは完全に別物で、影響を受けません。失うのは、外付けディスクを接続していないときに直近数時間へ戻れる機能だけです。長期の保管庫はそのまま残ります。",
        },
        {
          question: "ローカルスナップショットを完全に無効にできますか？",
          answer:
            "かつて使われていたsudo tmutil disablelocalコマンドは、macOS High Sierraで廃止されました。現在の唯一の方法は、Time Machineの自動バックアップをオフにすることです。「システム設定」>「一般」>「Time Machine」（macOS 12では「システム環境設定」>「Time Machine」）で自動バックアップを無効にし、バックアップは手動で開始してください。",
        },
        {
          question: "「システムデータ」のカテゴリーはなぜこれほど大きいのですか？",
          answer:
            "このカテゴリーは、アプリケーションのキャッシュ、ログファイル、iOSデバイスのバックアップ、Mailの添付ファイル、ダウンロード済みのソフトウェアアップデート、そしてローカルスナップショットをまとめて数えています。ソフトウェアを開発しているなら、Xcodeの派生データやシミュレータのイメージも加わります。単一の項目ではなく、数十の小さな要因の合計です。そのため、どれが肥大化しているのかを知るにはフォルダー単位の分析が必要になります。",
        },
      ],
      verdict: [
        "Macの「削除可能」な領域は不具合ではなく、APFSの設計上の判断です。macOSは、必要になれば削除できるデータを空き容量として数えています。本当に困るのは、この仕組みがぎりぎりの状態になるまで動かない点だけです。",
        "いますぐ容量を取り戻したいなら、道筋はtmutilです。listlocalsnapshotsで一覧を確認し、thinlocalsnapshotsで必要な分を解放してください。この操作は外付けディスクのTime Machineバックアップには影響せず、代償は直近数時間へすばやく戻れる機能だけです。",
        "長続きする答えは、スナップショットを管理することではなく、ディスクに本当の空き容量をつくることです。15-20%を空けておけば、macOS自身の削減の仕組みが静かに動き、この問題に出会うことすらなくなります。",
      ],
      ctaText: "Macの容量がどこへ消えているかを確かめる",
    },
  },
};
