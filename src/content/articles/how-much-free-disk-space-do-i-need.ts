import type { Article } from '../types';

export const howMuchFreeDiskSpaceDoINeed: Article = {
  slug: 'how-much-free-disk-space-do-i-need',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-08-17',
  readingTime: 8,
  content: {
    tr: {
      title: "Ne Kadar Boş Disk Alanı Gerekir? SSD ve HDD İçin Net Rakamlar",
      metaDescription:
        "Diskinizde ne kadar boş alan bırakmalısınız? SSD için %15-20, HDD için %10-15. Windows güncellemeleri, oyun ve video düzenleme için gereken alanın rakamları.",
      subtitle: "Yüzde mi Gigabayt mı? Sürücü Tipine Göre Gerçek Eşikler",
      intro: [
        "Kısa cevap: SSD'lerde toplam kapasitenin en az %15-20'sini, sabit disklerde (HDD) en az %10-15'ini boş bırakın. 500 GB'lık bir SSD için bu yaklaşık 75-100 GB, 1 TB'lık bir SSD için 150-200 GB demektir. Sistem diskinizde ayrıca Windows özellik güncellemeleri için yaklaşık 20 GB, macOS güncellemeleri için 15-20 GB ek boşluk bulunmalıdır.",
        "\"Diskim doldu ama hâlâ çalışıyor, sorun ne?\" sorusunun cevabı, boş alanın yalnızca depolama için değil, işletim sisteminin çalışması için de gerekli olmasıdır. SSD'lerde boş alan doğrudan yazma hızını etkiler; Windows'ta ise sanal bellek, geçici dosyalar ve güncelleme alanı hep aynı boşluktan beslenir. Bu rehberde sürücü tipine ve kullanım biçimine göre hedeflemeniz gereken rakamları veriyoruz.",
      ],
      keyTakeaways: [
        "SSD'de en az %15-20 boş alan bırakın; %90'ın üzerinde dolu bir SSD'de yazma hızı belirgin biçimde düşer.",
        "HDD'de %10-15 boş alan yeterlidir, ancak birleştirme (defrag) işleminin düzgün çalışması için en az %15 gerekir.",
        "Windows 11 özellik güncellemeleri için sistem diskinde yaklaşık 20 GB boş alan ister; yetmezse güncelleme başlamadan durur.",
        "macOS güncellemeleri ve APFS anlık görüntüleri için 15-20 GB boşluk bırakın.",
        "1 TB SSD'de pratik hedef 150-200 GB boş alandır; 500 GB SSD'de 75-100 GB.",
        "Boş alan sıfıra yaklaştığında Windows sanal bellek dosyasını büyütemez ve uygulamalar bellek hatasıyla çökebilir.",
      ],
      sections: [
        {
          title: "Kısa Cevap: Sürücü Tipine Göre Hedef Yüzdeler",
          content: [
            "Genel kural olarak her sürücüde kapasitenin en az %10-15'ini boş tutun. SSD kullanıyorsanız bu eşiği %15-20'ye çıkarın. Yüzde üzerinden düşünmek gigabayt üzerinden düşünmekten daha doğrudur, çünkü ihtiyaç duyulan boşluk sürücünün büyüklüğüyle orantılı artar.",
            "Somut rakamlarla: 256 GB SSD'de yaklaşık 40-50 GB, 500 GB SSD'de 75-100 GB, 1 TB SSD'de 150-200 GB, 2 TB SSD'de 300-400 GB boş alan hedefleyin. Sabit disklerde bu rakamların alt sınırı yeterlidir.",
            "Bu yalnızca veri sürücüleri için geçerli değildir. Sistem diskiniz her zaman en yüksek önceliktir: Windows ve macOS geçici dosyalarını, sanal belleği, güncelleme paketlerini ve günlükleri hep oraya yazar. İkincil bir veri diskini %95 doldurmak sorun yaratmazken, sistem diskini %95 doldurmak makineyi yavaşlatır ve güncellemeleri durdurur.",
          ],
        },
        {
          title: "SSD'lerde Boş Alan Neden Hızı Etkiler?",
          content: [
            "SSD'ler veriyi doğrudan üzerine yazamaz; önce bloğu silmek zorundadır. Bu yüzden denetleyici, arka planda çöp toplama (garbage collection) ve aşınma dengeleme (wear leveling) yapar ve bu işlemler için serbest bloklara ihtiyaç duyar. Sürücü dolduğunda denetleyicinin manevra alanı daralır, her yazma işlemi önce silme gerektirmeye başlar ve yazma hızı düşer.",
            "İkinci etken SLC önbelleğidir. Modern TLC ve QLC SSD'ler, boş hücrelerin bir kısmını hızlı SLC modunda kullanarak yazma hızını yükseltir. Sürücü dolduğunda bu önbelleğe ayrılabilecek alan küçülür; büyük dosya kopyalarken hızın birkaç saniye sonra sert biçimde düşmesinin sebebi budur. %90'ın üzerinde dolu bir SSD'de bu düşüş sürekli hale gelir.",
            "Aynı sebeple TRIM'in düzgün çalışması da boş alana bağlıdır. TRIM, silinen dosyaların bloklarını denetleyiciye bildirerek önceden temizlenmesini sağlar; disk sürekli doluysa temizlenecek blok bulunamaz. Disk Mop'un Disk Sağlığı (Disk Health) modülü S.M.A.R.T. değerlerinin yanında TRIM durumunu da gösterir.",
          ],
        },
        {
          title: "Windows Güncellemeleri İçin Gereken Alan",
          content: [
            "Windows 11'in büyük özellik güncellemeleri, kurulum sırasında sistem diskinde yaklaşık 20 GB boş alan ister. Bu alan indirilen paket, açılan geçici dosyalar ve geri dönüş için saklanan eski sürüm arasında paylaşılır. Yeterli boşluk yoksa güncelleme başlamaz veya yarıda kesilerek geri alınır.",
            "Küçük aylık güvenlik güncellemeleri çok daha az yer ister, genellikle birkaç yüz megabayttan birkaç gigabayta kadar. Ancak indirilen paketler SoftwareDistribution klasöründe birikir ve temizlenmezse zamanla gigabaytlara ulaşır.",
            "Güncelleme sırasında \"yeterli disk alanı yok\" hatası alıyorsanız Windows harici bir USB bellek kullanmayı teklif eder. Bu bir çözümdür ama kalıcı değildir; asıl mesele sistem diskinin sürekli dolu çalışmasıdır. Kalıcı çözüm için güncelleme öncesi 20 GB'lık tamponu kalıcı olarak boş tutmak gerekir.",
          ],
        },
        {
          title: "macOS ve Diğer Özel Durumlar",
          content: [
            "macOS güncellemeleri için 15-20 GB boş alan bırakın. macOS ayrıca APFS anlık görüntüleri (snapshot) ve Time Machine yerel yedekleri için sessizce yer kullanır; bu alan Finder'da \"temizlenebilir\" (purgeable) olarak görünür ve gerektiğinde otomatik boşaltılır, ama sürücü zaten kritik seviyedeyse bu mekanizma yetişemez.",
            "Oyun oynuyorsanız hesabı yeniden yapın: modern büyük bütçeli oyunlar tek başına 100-150 GB tutabilir ve güncellemeleri sırasında geçici olarak iki katına yakın alan ister. Steam ve benzeri platformlar güncelleme sırasında eski ve yeni dosyaları bir süre birlikte tutar.",
            "Video düzenleme, sanal makineler ve yazılım geliştirme aynı mantıkla çalışır: hepsi geçici çalışma alanı ister. 4K video düzenlerken proje boyutunun birkaç katı kadar önizleme ve önbellek dosyası oluşur. Bu iş yüklerinde %20 boş alanı alt sınır olarak alın, mümkünse çalışma dosyalarını ayrı bir sürücüye taşıyın.",
          ],
        },
        {
          title: "Disk Dolduğunda Ne Olur?",
          content: [
            "Boş alan azaldıkça belirtiler kademeli gelir. Önce yazma işlemleri yavaşlar ve dosya kopyalama uzar. Ardından Windows sanal bellek dosyasını gerektiği kadar büyütemez hale gelir; çok sekmeli tarayıcılar ve büyük uygulamalar bellek hatalarıyla kapanmaya başlar.",
            "Sonraki aşamada güncellemeler kurulamaz, sistem geri yükleme noktası oluşturulamaz ve bazı uygulamalar geçici dosya yazamadığı için hiç açılmaz. Windows genellikle boş alan kapasitenin %10'unun altına indiğinde uyarı bildirimi gösterir, ancak o noktaya gelindiğinde performans kaybı çoktan başlamıştır.",
            "Sürücü tamamen dolarsa veri kaybı riski de doğar: kaydedilmemiş belgeler kaydedilemez ve bazı veritabanı dosyaları yazma hatası aldıklarında bozulabilir. Bu yüzden hedef, disk dolduğunda temizlemek değil, hiç o noktaya gelmemektir.",
          ],
        },
        {
          title: "Hedef Boşluğa Ulaşmanın Pratik Yolu",
          content: [
            "Kaç gigabayt açmanız gerektiğini biliyorsanız sonraki soru nereden açacağınızdır. Sırayla bakın: geçici dosyalar ve önbellekler, aylardır açılmamış indirmeler, yinelenen fotoğraf ve videolar, kaldırılmış programların artıkları ve artık oynamadığınız oyunlar. Bu beş kalem çoğu bilgisayarda hedefin tamamını karşılar.",
            "Disk Mop bu adımların her biri için ayrı bir modül sunar: Disk Analizi hangi klasörün şiştiğini treemap ile gösterir, Büyük Dosyalar eşik üstü dosyaları listeler, Yinelenenler bit düzeyinde aynı kopyaları SHA-256 ile bulur, Önbellek Temizleyici sistem ve tarayıcı önbelleklerini toplar, Kaldırma Artıkları ise silinmiş programların geride bıraktığı dosya ve kayıt defteri girdilerini temizler. Panodaki sistem sağlık puanı, hedeflediğiniz boşluğa ne kadar yaklaştığınızı tek bakışta gösterir.",
            "Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "SSD'de ne kadar boş alan bırakmalıyım?",
          answer:
            "Toplam kapasitenin en az %15-20'sini boş bırakın. 500 GB'lık bir SSD için bu 75-100 GB, 1 TB'lık bir SSD için 150-200 GB demektir. Bu boşluk aşınma dengeleme, çöp toplama ve SLC önbelleği için gereklidir; %90'ın üzerinde dolu bir SSD'de yazma hızı belirgin biçimde düşer.",
        },
        {
          question: "%10 boş alan yeterli mi?",
          answer:
            "Sabit disk (HDD) için genellikle yeterlidir, SSD için sınırdadır. HDD'de %10-15 kabul edilebilir, ancak disk birleştirmenin düzgün çalışması için en az %15 gerekir. SSD'de %10, performans düşüşünün başladığı bölgedir; %15-20 hedeflemek daha güvenlidir.",
        },
        {
          question: "Windows 11 güncellemesi için ne kadar boş alan gerekir?",
          answer:
            "Büyük özellik güncellemeleri sistem diskinde yaklaşık 20 GB boş alan ister. Bu alan indirilen paket, geçici kurulum dosyaları ve geri dönüş için saklanan önceki sürüm arasında paylaşılır. Yeterli boşluk yoksa güncelleme hiç başlamaz veya yarıda kesilip geri alınır.",
        },
        {
          question: "Disk dolarsa bilgisayara zarar verir mi?",
          answer:
            "Donanıma kalıcı zarar vermez ama işlevsel sorunlara yol açar. Yazma hızı düşer, Windows sanal bellek dosyasını büyütemez ve uygulamalar bellek hatasıyla kapanabilir, güncellemeler kurulamaz ve sistem geri yükleme noktası oluşturulamaz. Sürücü tamamen dolarsa kaydedilmemiş belgeler kaydedilemez ve bazı dosyalar yazma hatasıyla bozulabilir.",
        },
        {
          question: "Veri diskini tamamen doldurabilir miyim?",
          answer:
            "Sistem dosyası barındırmayan ikincil bir veri diskini yüksek doluluk oranında kullanmak sistem kararlılığını etkilemez, ancak SSD ise yazma hızı yine düşer. Arşiv amaçlı bir HDD'yi %95'e kadar doldurmak pratikte sorun yaratmaz; aktif olarak yazdığınız bir SSD'de aynı doluluk belirgin yavaşlama getirir.",
        },
        {
          question: "Boş alanı nasıl kontrol ederim?",
          answer:
            "Windows'ta Ayarlar > Sistem > Depolama ekranı sürücü başına doluluk ve kategori kırılımı verir; Dosya Gezgini'nde Bu Bilgisayar altında da her sürücünün boş alanı görünür. macOS'ta menü çubuğundaki Elma menüsünden Bu Mac Hakkında > Depolama yolunu izleyin.",
        },
      ],
      verdict: [
        "Hedef basittir: SSD'de %15-20, HDD'de %10-15 boş alan. Sistem diskinde bunun üzerine Windows için 20 GB, macOS için 15-20 GB güncelleme tamponu ekleyin. 1 TB'lık bir sistem SSD'sinde pratik hedef 150-200 GB boş alandır.",
        "Yüzde hesabı, gigabayt hesabından daha güvenilirdir çünkü ihtiyaç sürücü büyüdükçe artar. Oyun, video düzenleme ve sanal makine gibi geçici çalışma alanı isteyen işlerde alt sınırı %20 kabul edin.",
        "En önemlisi, bu eşiği bir kez ulaşılıp geçilecek hedef değil, sürekli korunacak bir tampon olarak görmektir. Disk dolduğunda temizlemek yerine düzenli temizlikle o noktaya hiç gelmemek hem daha hızlı hem daha güvenlidir.",
      ],
      ctaText: "Hedef Boşluğa Bugün Ulaşın",
    },
    en: {
      title: "How Much Free Disk Space Do I Need? Real Numbers for SSD and HDD",
      metaDescription:
        "How much free space should you leave on your drive? 15-20% for SSDs, 10-15% for HDDs. The actual figures for Windows updates, gaming and video editing.",
      subtitle: "Percentages or Gigabytes? The Real Thresholds by Drive Type",
      intro: [
        "Short answer: leave at least 15-20% of total capacity free on an SSD and at least 10-15% free on a hard drive. For a 500 GB SSD that is roughly 75-100 GB; for a 1 TB SSD, 150-200 GB. Your system drive additionally needs about 20 GB of headroom for Windows feature updates, or 15-20 GB for macOS updates.",
        "The answer to \"my disk is full but everything still works, what's the problem?\" is that free space is not only storage — the operating system needs it to function. On SSDs, free space directly affects write speed. On Windows, virtual memory, temporary files and update staging all draw from the same pool. This guide gives you the numbers to target based on your drive type and how you use the machine.",
      ],
      keyTakeaways: [
        "Leave at least 15-20% free on an SSD; write speeds drop noticeably once an SSD is more than 90% full.",
        "10-15% free is enough on a hard drive, but defragmentation needs at least 15% to run properly.",
        "Windows 11 feature updates require roughly 20 GB of free space on the system drive, and simply stop before starting if it is not available.",
        "Leave 15-20 GB free for macOS updates and APFS snapshots.",
        "On a 1 TB SSD the practical target is 150-200 GB free; on a 500 GB SSD, 75-100 GB.",
        "When free space approaches zero, Windows cannot grow the page file and applications may crash with out-of-memory errors.",
      ],
      sections: [
        {
          title: "The Short Answer: Target Percentages by Drive Type",
          content: [
            "As a general rule, keep at least 10-15% of every drive free. If it is an SSD, raise that threshold to 15-20%. Thinking in percentages is more accurate than thinking in gigabytes, because the headroom you need scales with the size of the drive.",
            "In concrete numbers: target roughly 40-50 GB free on a 256 GB SSD, 75-100 GB on a 500 GB SSD, 150-200 GB on a 1 TB SSD and 300-400 GB on a 2 TB SSD. On hard drives, the lower end of those ranges is sufficient.",
            "This does not apply equally to every drive. Your system drive is always the priority: Windows and macOS write temporary files, virtual memory, update packages and logs there. Filling a secondary data drive to 95% causes no harm, while filling the system drive to 95% slows the machine down and blocks updates.",
          ],
        },
        {
          title: "Why Free Space Affects SSD Speed",
          content: [
            "An SSD cannot overwrite data in place; it must erase a block first. That is why the controller performs garbage collection and wear leveling in the background, and both need free blocks to work with. As the drive fills, the controller's room to manoeuvre shrinks, every write increasingly requires an erase first, and write speed falls.",
            "The second factor is the SLC cache. Modern TLC and QLC drives run a portion of their empty cells in fast SLC mode to boost write speed. As the drive fills, less space can be allocated to that cache — this is why copying a large file starts fast and then drops sharply after a few seconds. Above 90% full, that drop becomes permanent rather than temporary.",
            "TRIM depends on free space for the same reason. TRIM tells the controller which blocks belong to deleted files so they can be cleared in advance; a permanently full drive gives it nothing to clear. Disk Mop's Disk Health module reports TRIM status alongside S.M.A.R.T. attributes.",
          ],
        },
        {
          title: "Space Required for Windows Updates",
          content: [
            "Major Windows 11 feature updates require around 20 GB of free space on the system drive during installation. That space is shared between the downloaded package, the temporary files it expands into, and the previous version kept for rollback. Without enough headroom, the update either never starts or is rolled back partway through.",
            "Monthly security updates need far less, typically a few hundred megabytes to a few gigabytes. However, the downloaded packages accumulate in the SoftwareDistribution folder and grow into gigabytes over time if never cleared.",
            "If you hit a \"not enough disk space\" error during an update, Windows offers to use an external USB drive. That works, but it is a workaround rather than a fix; the underlying problem is a system drive that runs permanently full. The real solution is keeping that 20 GB buffer free as a standing rule.",
          ],
        },
        {
          title: "macOS and Other Special Cases",
          content: [
            "Leave 15-20 GB free for macOS updates. macOS also quietly consumes space for APFS snapshots and local Time Machine backups; that space shows up as \"purgeable\" in Finder and is released automatically when needed, but the mechanism cannot keep up if the drive is already at a critical level.",
            "If you game, redo the maths: a single modern big-budget title can occupy 100-150 GB and temporarily demand close to double that while updating. Steam and similar platforms keep old and new files side by side for part of the update process.",
            "Video editing, virtual machines and software development follow the same pattern: all of them want scratch space. Editing 4K footage generates preview and cache files several times the size of the project itself. For these workloads, treat 20% free as the floor and move working files to a separate drive where possible.",
          ],
        },
        {
          title: "What Actually Happens When a Disk Fills Up",
          content: [
            "The symptoms arrive in stages as free space shrinks. First, writes slow down and file copies take longer. Then Windows can no longer grow the page file as needed, and browsers with many tabs or memory-hungry applications begin closing with out-of-memory errors.",
            "Next, updates fail to install, restore points cannot be created, and some applications refuse to launch at all because they cannot write a temporary file. Windows typically shows a low-disk-space notification once free space falls below about 10% of capacity — but by that point the performance loss has already started.",
            "If the drive fills completely, there is a genuine risk of data loss: unsaved documents cannot be written, and some database files can be corrupted when a write fails partway through. The goal, therefore, is not to clean up when the disk fills but to never reach that point.",
          ],
        },
        {
          title: "The Practical Way to Hit Your Target",
          content: [
            "Once you know how many gigabytes you need to reclaim, the next question is where to find them. Work through them in order: temporary files and caches, downloads untouched for months, duplicate photos and videos, leftovers from uninstalled programs, and games you no longer play. On most machines those five categories cover the entire target.",
            "Disk Mop provides a dedicated module for each step: Disk Analysis shows which folder is bloated as a treemap, Large Files lists everything above a size threshold, Duplicates finds bit-identical copies using SHA-256, Cache Cleaner collects system and browser caches, and Uninstall Leftovers clears files and registry entries abandoned by removed programs. The system health score on the dashboard shows at a glance how close you are to your target.",
            "You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "How much free space should I leave on an SSD?",
          answer:
            "Leave at least 15-20% of total capacity free. On a 500 GB SSD that is 75-100 GB; on a 1 TB SSD, 150-200 GB. That headroom is needed for wear leveling, garbage collection and the SLC cache; write speeds drop noticeably once the drive is more than 90% full.",
        },
        {
          question: "Is 10% free space enough?",
          answer:
            "For a hard drive, usually yes; for an SSD it is borderline. On an HDD, 10-15% is acceptable, though defragmentation needs at least 15% to work properly. On an SSD, 10% is where performance degradation begins, so targeting 15-20% is the safer choice.",
        },
        {
          question: "How much free space does a Windows 11 update need?",
          answer:
            "Major feature updates require roughly 20 GB of free space on the system drive. That space is shared between the downloaded package, temporary installation files and the previous version retained for rollback. Without enough headroom, the update either never begins or is rolled back partway through.",
        },
        {
          question: "Can a full disk damage my computer?",
          answer:
            "It causes no permanent hardware damage, but it does cause functional problems. Write speeds drop, Windows cannot grow the page file so applications may crash with out-of-memory errors, updates fail to install and restore points cannot be created. If the drive fills completely, unsaved documents cannot be written and some files can be corrupted by a failed write.",
        },
        {
          question: "Can I fill a data drive completely?",
          answer:
            "Filling a secondary drive that holds no system files will not affect system stability, but if it is an SSD the write speed still drops. Filling an archival hard drive to 95% causes no practical problem; the same fill level on an SSD you actively write to produces noticeable slowdown.",
        },
        {
          question: "How do I check my free space?",
          answer:
            "On Windows, Settings > System > Storage shows usage per drive with a category breakdown, and File Explorer displays free space for each drive under This PC. On macOS, use the Apple menu > About This Mac > Storage.",
        },
      ],
      verdict: [
        "The target is straightforward: 15-20% free on an SSD, 10-15% on a hard drive. On the system drive, add a further update buffer of 20 GB for Windows or 15-20 GB for macOS. On a 1 TB system SSD, the practical target is 150-200 GB free.",
        "Percentages are more reliable than fixed gigabyte figures because the requirement grows with the drive. For workloads that need scratch space — gaming, video editing, virtual machines — treat 20% as the floor rather than the goal.",
        "Most importantly, treat this threshold as a buffer you maintain rather than a target you hit once. Preventing a full disk through regular cleanup is both faster and safer than reacting to one.",
      ],
      ctaText: "Reach Your Target Free Space Today",
    },
    de: {
      title: "Wie viel freier Speicherplatz wird benötigt? Konkrete Zahlen für SSD und HDD",
      metaDescription:
        "Wie viel freien Speicher sollten Sie auf Ihrem Laufwerk lassen? 15-20 % bei SSDs, 10-15 % bei Festplatten. Die tatsächlichen Werte für Windows-Updates, Gaming und Videobearbeitung.",
      subtitle: "Prozent oder Gigabyte? Die realen Schwellenwerte je Laufwerkstyp",
      intro: [
        "Kurze Antwort: Lassen Sie auf einer SSD mindestens 15-20 % der Gesamtkapazität frei, auf einer Festplatte mindestens 10-15 %. Bei einer 500-GB-SSD sind das etwa 75-100 GB, bei einer 1-TB-SSD 150-200 GB. Auf dem Systemlaufwerk kommen rund 20 GB Reserve für Windows-Funktionsupdates hinzu, beziehungsweise 15-20 GB für macOS-Updates.",
        "Die Antwort auf \"meine Festplatte ist voll, aber alles läuft noch — wo ist das Problem?\" lautet: Freier Speicher ist nicht nur Ablagefläche, das Betriebssystem braucht ihn zum Arbeiten. Bei SSDs beeinflusst freier Platz direkt die Schreibgeschwindigkeit; unter Windows speisen sich Auslagerungsdatei, temporäre Dateien und Update-Installation aus demselben Vorrat. Dieser Ratgeber nennt die Zahlen, die Sie je nach Laufwerkstyp und Nutzung anpeilen sollten.",
      ],
      keyTakeaways: [
        "Lassen Sie auf einer SSD mindestens 15-20 % frei; ab etwa 90 % Füllstand sinkt die Schreibgeschwindigkeit spürbar.",
        "Auf einer Festplatte genügen 10-15 % frei, für eine saubere Defragmentierung sind jedoch mindestens 15 % nötig.",
        "Windows-11-Funktionsupdates verlangen rund 20 GB freien Speicher auf dem Systemlaufwerk und brechen sonst vor dem Start ab.",
        "Halten Sie 15-20 GB für macOS-Updates und APFS-Schnappschüsse frei.",
        "Auf einer 1-TB-SSD lautet das praktische Ziel 150-200 GB frei, auf einer 500-GB-SSD 75-100 GB.",
        "Geht der freie Speicher gegen null, kann Windows die Auslagerungsdatei nicht mehr vergrößern und Programme stürzen mit Speicherfehlern ab.",
      ],
      sections: [
        {
          title: "Die kurze Antwort: Zielwerte nach Laufwerkstyp",
          content: [
            "Als Faustregel gilt: Halten Sie auf jedem Laufwerk mindestens 10-15 % der Kapazität frei. Handelt es sich um eine SSD, erhöhen Sie diese Schwelle auf 15-20 %. In Prozent zu denken ist zutreffender als in Gigabyte, weil der benötigte Puffer mit der Laufwerksgröße wächst.",
            "In konkreten Zahlen: Peilen Sie rund 40-50 GB frei bei einer 256-GB-SSD an, 75-100 GB bei 500 GB, 150-200 GB bei 1 TB und 300-400 GB bei 2 TB. Auf Festplatten reicht jeweils das untere Ende dieser Spannen.",
            "Das gilt nicht für alle Laufwerke gleichermaßen. Das Systemlaufwerk hat immer Vorrang: Windows und macOS schreiben dorthin temporäre Dateien, virtuellen Arbeitsspeicher, Update-Pakete und Protokolle. Ein zweites Datenlaufwerk zu 95 % zu füllen ist unproblematisch; dasselbe beim Systemlaufwerk bremst den Rechner aus und blockiert Updates.",
          ],
        },
        {
          title: "Warum freier Platz die SSD-Geschwindigkeit beeinflusst",
          content: [
            "Eine SSD kann Daten nicht direkt überschreiben, sie muss den Block zuvor löschen. Deshalb führt der Controller im Hintergrund Garbage Collection und Wear Leveling durch, und beides benötigt freie Blöcke. Füllt sich das Laufwerk, schrumpft der Spielraum des Controllers, jeder Schreibvorgang erfordert zunehmend erst ein Löschen, und die Schreibrate fällt.",
            "Der zweite Faktor ist der SLC-Cache. Moderne TLC- und QLC-SSDs betreiben einen Teil der leeren Zellen im schnellen SLC-Modus, um die Schreibgeschwindigkeit zu erhöhen. Je voller das Laufwerk, desto weniger Platz bleibt für diesen Cache — genau deshalb bricht die Geschwindigkeit beim Kopieren großer Dateien nach einigen Sekunden ein. Oberhalb von 90 % Füllstand wird dieser Einbruch zum Dauerzustand.",
            "Aus demselben Grund hängt auch TRIM von freiem Platz ab. TRIM meldet dem Controller, welche Blöcke zu gelöschten Dateien gehören, damit sie vorab bereinigt werden können; ein dauerhaft volles Laufwerk gibt ihm nichts zu bereinigen. Das Modul Datenträgerzustand von Disk Mop zeigt den TRIM-Status neben den S.M.A.R.T.-Werten an.",
          ],
        },
        {
          title: "Speicherbedarf für Windows-Updates",
          content: [
            "Große Funktionsupdates von Windows 11 benötigen während der Installation etwa 20 GB freien Speicher auf dem Systemlaufwerk. Dieser Platz verteilt sich auf das heruntergeladene Paket, die daraus entpackten temporären Dateien und die zur Rückkehr aufbewahrte Vorversion. Ohne ausreichenden Puffer startet das Update entweder gar nicht oder wird mittendrin zurückgenommen.",
            "Monatliche Sicherheitsupdates brauchen weit weniger, typischerweise einige hundert Megabyte bis wenige Gigabyte. Die heruntergeladenen Pakete sammeln sich jedoch im Ordner SoftwareDistribution an und wachsen mit der Zeit auf mehrere Gigabyte, wenn sie nie bereinigt werden.",
            "Erscheint während eines Updates die Meldung \"nicht genügend Speicherplatz\", bietet Windows die Nutzung eines externen USB-Sticks an. Das funktioniert, ist aber ein Notbehelf; die eigentliche Ursache ist ein dauerhaft volles Systemlaufwerk. Die dauerhafte Lösung besteht darin, den 20-GB-Puffer grundsätzlich freizuhalten.",
          ],
        },
        {
          title: "macOS und weitere Sonderfälle",
          content: [
            "Halten Sie 15-20 GB für macOS-Updates frei. macOS belegt zusätzlich still Speicher für APFS-Schnappschüsse und lokale Time-Machine-Sicherungen; dieser Platz erscheint im Finder als \"bereinigbar\" und wird bei Bedarf automatisch freigegeben — der Mechanismus kommt jedoch nicht hinterher, wenn das Laufwerk bereits kritisch voll ist.",
            "Wenn Sie spielen, rechnen Sie neu: Ein einzelner moderner Blockbuster belegt 100-150 GB und verlangt beim Aktualisieren zeitweise fast das Doppelte. Steam und vergleichbare Plattformen halten während eines Teils des Update-Vorgangs alte und neue Dateien gleichzeitig vor.",
            "Videobearbeitung, virtuelle Maschinen und Softwareentwicklung folgen demselben Muster: Alle benötigen Arbeitsspeicherplatz auf dem Laufwerk. Beim Schnitt von 4K-Material entstehen Vorschau- und Cache-Dateien in mehrfacher Projektgröße. Nehmen Sie bei solchen Aufgaben 20 % freien Platz als Untergrenze und lagern Sie Arbeitsdateien nach Möglichkeit auf ein separates Laufwerk aus.",
          ],
        },
        {
          title: "Was passiert, wenn das Laufwerk volläuft",
          content: [
            "Die Symptome treten stufenweise auf. Zuerst werden Schreibvorgänge langsamer und Kopiervorgänge dauern länger. Dann kann Windows die Auslagerungsdatei nicht mehr wie nötig vergrößern, und Browser mit vielen Tabs oder speicherhungrige Programme schließen sich mit Speicherfehlern.",
            "Danach lassen sich Updates nicht mehr installieren, es können keine Wiederherstellungspunkte angelegt werden, und manche Programme starten überhaupt nicht mehr, weil sie keine temporäre Datei schreiben können. Windows zeigt in der Regel eine Warnung, sobald der freie Speicher unter etwa 10 % der Kapazität fällt — zu diesem Zeitpunkt hat der Leistungsverlust jedoch längst begonnen.",
            "Läuft das Laufwerk vollständig voll, besteht echtes Datenverlustrisiko: Ungespeicherte Dokumente lassen sich nicht sichern, und manche Datenbankdateien können beschädigt werden, wenn ein Schreibvorgang mittendrin scheitert. Das Ziel ist deshalb nicht, bei vollem Laufwerk aufzuräumen, sondern diesen Punkt nie zu erreichen.",
          ],
        },
        {
          title: "Der praktische Weg zum Zielwert",
          content: [
            "Wenn Sie wissen, wie viele Gigabyte Sie freimachen müssen, lautet die nächste Frage: woher. Gehen Sie der Reihe nach vor: temporäre Dateien und Caches, seit Monaten unberührte Downloads, doppelte Fotos und Videos, Reste deinstallierter Programme und Spiele, die Sie nicht mehr spielen. Auf den meisten Rechnern decken diese fünf Posten den gesamten Bedarf ab.",
            "Disk Mop bietet für jeden dieser Schritte ein eigenes Modul: Die Datenträgeranalyse zeigt als Treemap, welcher Ordner aufgebläht ist, Große Dateien listet alles oberhalb einer Größenschwelle, Duplikate findet bitgleiche Kopien per SHA-256, der Cache Cleaner sammelt System- und Browser-Caches, und Deinstallationsreste entfernt Dateien und Registrierungseinträge gelöschter Programme. Der Systemzustandswert im Dashboard zeigt auf einen Blick, wie nah Sie Ihrem Ziel sind.",
            "Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Wie viel freien Speicher sollte ich auf einer SSD lassen?",
          answer:
            "Lassen Sie mindestens 15-20 % der Gesamtkapazität frei. Bei einer 500-GB-SSD sind das 75-100 GB, bei einer 1-TB-SSD 150-200 GB. Dieser Puffer wird für Wear Leveling, Garbage Collection und den SLC-Cache benötigt; ab etwa 90 % Füllstand sinkt die Schreibgeschwindigkeit spürbar.",
        },
        {
          question: "Reichen 10 % freier Speicher?",
          answer:
            "Bei einer Festplatte in der Regel ja, bei einer SSD ist es grenzwertig. Auf einer HDD sind 10-15 % vertretbar, für eine saubere Defragmentierung sind allerdings mindestens 15 % nötig. Auf einer SSD beginnt bei 10 % bereits der Leistungsabfall, 15-20 % sind die sicherere Wahl.",
        },
        {
          question: "Wie viel freien Speicher braucht ein Windows-11-Update?",
          answer:
            "Große Funktionsupdates benötigen rund 20 GB freien Speicher auf dem Systemlaufwerk. Dieser Platz verteilt sich auf das heruntergeladene Paket, temporäre Installationsdateien und die zur Rückkehr aufbewahrte Vorversion. Ohne ausreichenden Puffer startet das Update nicht oder wird mittendrin zurückgenommen.",
        },
        {
          question: "Kann ein volles Laufwerk den Computer beschädigen?",
          answer:
            "Bleibende Hardwareschäden entstehen nicht, funktionale Probleme sehr wohl. Die Schreibgeschwindigkeit sinkt, Windows kann die Auslagerungsdatei nicht vergrößern, wodurch Programme mit Speicherfehlern abstürzen können, Updates schlagen fehl und Wiederherstellungspunkte lassen sich nicht anlegen. Bei vollständig vollem Laufwerk können ungespeicherte Dokumente nicht gesichert und manche Dateien durch abgebrochene Schreibvorgänge beschädigt werden.",
        },
        {
          question: "Darf ich ein Datenlaufwerk komplett füllen?",
          answer:
            "Ein zweites Laufwerk ohne Systemdateien nahezu vollständig zu füllen beeinträchtigt die Systemstabilität nicht, bei einer SSD sinkt aber trotzdem die Schreibgeschwindigkeit. Eine Archivfestplatte zu 95 % zu füllen ist praktisch unproblematisch; derselbe Füllstand auf einer aktiv beschriebenen SSD führt zu deutlicher Verlangsamung.",
        },
        {
          question: "Wie prüfe ich meinen freien Speicherplatz?",
          answer:
            "Unter Windows zeigt Einstellungen > System > Speicher die Belegung je Laufwerk samt Kategorien, im Explorer sehen Sie den freien Platz jedes Laufwerks unter Dieser PC. Unter macOS führt der Weg über das Apple-Menü > Über diesen Mac > Speicher.",
        },
      ],
      verdict: [
        "Das Ziel ist eindeutig: 15-20 % frei auf einer SSD, 10-15 % auf einer Festplatte. Auf dem Systemlaufwerk kommt ein Update-Puffer von 20 GB für Windows beziehungsweise 15-20 GB für macOS hinzu. Auf einer 1-TB-System-SSD lautet das praktische Ziel 150-200 GB frei.",
        "Prozentwerte sind verlässlicher als feste Gigabyte-Angaben, weil der Bedarf mit der Laufwerksgröße wächst. Bei Aufgaben mit hohem Bedarf an Arbeitsspeicherplatz — Gaming, Videoschnitt, virtuelle Maschinen — gilt 20 % als Untergrenze, nicht als Ziel.",
        "Vor allem aber sollten Sie diese Schwelle als dauerhaft zu haltenden Puffer verstehen, nicht als einmalig erreichtes Ziel. Ein volles Laufwerk durch regelmäßige Bereinigung zu vermeiden ist schneller und sicherer, als darauf zu reagieren.",
      ],
      ctaText: "Erreichen Sie Ihren Zielwert noch heute",
    },
  },
};
