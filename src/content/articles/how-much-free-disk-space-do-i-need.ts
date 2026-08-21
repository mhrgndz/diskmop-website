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
    fr: {
      title: "Combien d'espace disque libre faut-il laisser ? Les chiffres pour SSD et HDD",
      metaDescription:
        "Combien d'espace libre laisser sur son disque ? 15-20 % sur un SSD, 10-15 % sur un HDD. Les chiffres réels pour les mises à jour Windows, les jeux et la vidéo.",
      subtitle: "Pourcentages ou gigaoctets ? Les vrais seuils selon le type de disque",
      intro: [
        "Réponse courte : laissez au moins 15-20 % de la capacité totale libre sur un SSD, et au moins 10-15 % sur un disque dur. Pour un SSD de 500 GB, cela représente environ 75-100 GB ; pour un SSD de 1 TB, 150-200 GB. Votre disque système a besoin en plus d'une réserve d'environ 20 GB pour les mises à jour de fonctionnalités de Windows, ou de 15-20 GB pour les mises à jour de macOS.",
        "La réponse à « mon disque est plein mais tout fonctionne encore, où est le problème ? » tient en une phrase : l'espace libre n'est pas seulement du rangement, le système d'exploitation en a besoin pour fonctionner. Sur un SSD, l'espace libre influence directement la vitesse d'écriture. Sous Windows, la mémoire virtuelle, les fichiers temporaires et l'installation des mises à jour puisent tous dans la même réserve. Ce guide vous donne les chiffres à viser selon votre type de disque et votre usage de la machine.",
      ],
      keyTakeaways: [
        "Laissez au moins 15-20 % d'espace libre sur un SSD : au-delà de 90 % de remplissage, la vitesse d'écriture chute nettement.",
        "Sur un disque dur, 10-15 % d'espace libre suffisent, mais la défragmentation a besoin d'au moins 15 % pour fonctionner correctement.",
        "Les mises à jour de fonctionnalités de Windows 11 réclament environ 20 GB libres sur le disque système et s'interrompent avant même de démarrer si cet espace manque.",
        "Prévoyez 15-20 GB libres pour les mises à jour de macOS et les instantanés APFS.",
        "Sur un SSD de 1 TB, l'objectif pratique est de 150-200 GB libres ; sur un SSD de 500 GB, 75-100 GB.",
        "Quand l'espace libre approche de zéro, Windows ne peut plus agrandir le fichier d'échange et les applications peuvent se fermer sur une erreur de mémoire.",
      ],
      sections: [
        {
          title: "La réponse courte : les pourcentages à viser selon le type de disque",
          content: [
            "Règle générale : gardez au moins 10-15 % de chaque disque libre. S'il s'agit d'un SSD, montez ce seuil à 15-20 %. Raisonner en pourcentage est plus juste que raisonner en gigaoctets, car la marge nécessaire augmente avec la taille du disque.",
            "En chiffres concrets : visez environ 40-50 GB libres sur un SSD de 256 GB, 75-100 GB sur un SSD de 500 GB, 150-200 GB sur un SSD de 1 TB et 300-400 GB sur un SSD de 2 TB. Sur un disque dur, la borne basse de ces fourchettes suffit.",
            "Cela ne s'applique pas de la même façon à tous les disques. Le disque système reste toujours prioritaire : c'est là que Windows et macOS écrivent les fichiers temporaires, la mémoire virtuelle, les paquets de mise à jour et les journaux. Remplir un disque de données secondaire à 95 % ne pose aucun problème, alors que remplir le disque système à 95 % ralentit la machine et bloque les mises à jour.",
          ],
        },
        {
          title: "Pourquoi l'espace libre influence la vitesse d'un SSD",
          content: [
            "Un SSD ne peut pas réécrire des données par-dessus les anciennes : il doit d'abord effacer un bloc. C'est pour cela que le contrôleur effectue en arrière-plan le ramasse-miettes (garbage collection) et le nivellement d'usure (wear leveling), deux opérations qui ont besoin de blocs libres. À mesure que le disque se remplit, la marge de manœuvre du contrôleur se réduit, chaque écriture exige de plus en plus souvent un effacement préalable, et la vitesse d'écriture baisse.",
            "Le deuxième facteur est le cache SLC. Les SSD TLC et QLC modernes font fonctionner une partie de leurs cellules vides en mode SLC rapide pour accélérer l'écriture. Plus le disque se remplit, moins il reste de place à allouer à ce cache : c'est la raison pour laquelle la copie d'un gros fichier démarre vite puis s'effondre après quelques secondes. Au-delà de 90 % de remplissage, cette chute devient permanente au lieu d'être passagère.",
            "TRIM dépend de l'espace libre pour la même raison. TRIM indique au contrôleur quels blocs appartiennent à des fichiers supprimés afin qu'ils soient nettoyés à l'avance ; un disque en permanence plein ne lui laisse rien à nettoyer. Le module Santé du disque (Disk Health) de Disk Mop affiche l'état de TRIM à côté des valeurs S.M.A.R.T.",
          ],
        },
        {
          title: "L'espace nécessaire aux mises à jour de Windows",
          content: [
            "Les grandes mises à jour de fonctionnalités de Windows 11 exigent environ 20 GB d'espace libre sur le disque système pendant l'installation. Cet espace se partage entre le paquet téléchargé, les fichiers temporaires qu'il décompresse et la version précédente conservée pour un retour en arrière. Sans marge suffisante, la mise à jour ne démarre pas du tout ou est annulée en cours de route.",
            "Les mises à jour de sécurité mensuelles demandent bien moins, en général de quelques centaines de mégaoctets à quelques gigaoctets. Mais les paquets téléchargés s'accumulent dans le dossier SoftwareDistribution et atteignent plusieurs gigaoctets avec le temps s'ils ne sont jamais nettoyés.",
            "Si une mise à jour vous renvoie l'erreur « espace disque insuffisant », Windows propose d'utiliser une clé USB externe. Cela fonctionne, mais c'est un contournement, pas une solution : le vrai problème est un disque système qui tourne en permanence plein. La solution durable consiste à garder ces 20 GB de réserve libres en permanence.",
          ],
        },
        {
          title: "macOS et les autres cas particuliers",
          content: [
            "Prévoyez 15-20 GB libres pour les mises à jour de macOS. macOS consomme aussi discrètement de l'espace pour les instantanés APFS et les sauvegardes Time Machine locales ; cet espace apparaît comme « purgeable » dans le Finder et se libère automatiquement en cas de besoin, mais le mécanisme ne suit plus si le disque est déjà à un niveau critique.",
            "Si vous jouez, refaites le calcul : un seul jeu récent à gros budget occupe 100-150 GB et réclame temporairement près du double pendant sa mise à jour. Steam et les plateformes équivalentes conservent un moment les anciens et les nouveaux fichiers côte à côte.",
            "Le montage vidéo, les machines virtuelles et le développement logiciel suivent la même logique : tous réclament de l'espace de travail temporaire. Le montage de rushes en 4K génère des fichiers de prévisualisation et de cache plusieurs fois plus volumineux que le projet lui-même. Pour ces usages, considérez 20 % d'espace libre comme un plancher et déplacez si possible les fichiers de travail sur un disque séparé.",
          ],
        },
        {
          title: "Ce qui se passe vraiment quand un disque se remplit",
          content: [
            "Les symptômes arrivent par paliers à mesure que l'espace libre diminue. D'abord, les écritures ralentissent et les copies de fichiers durent plus longtemps. Ensuite, Windows ne parvient plus à agrandir le fichier d'échange autant qu'il le faudrait, et les navigateurs à dizaines d'onglets ou les applications gourmandes en mémoire commencent à se fermer sur des erreurs de mémoire.",
            "Vient ensuite l'étape où les mises à jour ne s'installent plus, où les points de restauration ne peuvent plus être créés, et où certaines applications refusent carrément de se lancer faute de pouvoir écrire un fichier temporaire. Windows affiche généralement une notification d'espace disque faible quand l'espace libre passe sous environ 10 % de la capacité — mais à ce stade, la perte de performances a déjà commencé.",
            "Si le disque se remplit complètement, le risque de perte de données devient réel : les documents non enregistrés ne peuvent plus l'être, et certains fichiers de base de données se corrompent lorsqu'une écriture échoue en cours de route. L'objectif n'est donc pas de faire le ménage quand le disque est plein, mais de ne jamais en arriver là.",
          ],
        },
        {
          title: "La méthode concrète pour atteindre votre objectif",
          content: [
            "Une fois que vous savez combien de gigaoctets récupérer, reste à savoir où les trouver. Procédez dans l'ordre : fichiers temporaires et caches, téléchargements auxquels vous n'avez pas touché depuis des mois, photos et vidéos en double, restes de programmes désinstallés, et jeux auxquels vous ne jouez plus. Sur la plupart des machines, ces cinq postes couvrent la totalité de l'objectif.",
            "Disk Mop propose un module dédié à chaque étape : l'Analyse du disque (Disk Analysis) montre sous forme de treemap quel dossier a enflé, Gros fichiers (Large Files) liste tout ce qui dépasse un seuil de taille, Doublons (Duplicates) repère les copies identiques au bit près grâce à SHA-256, le Nettoyeur de cache (Cache Cleaner) rassemble les caches système et navigateur, et Restes de désinstallation (Uninstall Leftovers) supprime les fichiers et entrées de registre laissés par les programmes retirés. Le score de santé du système affiché sur le tableau de bord montre d'un coup d'œil à quel point vous approchez de votre objectif.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Combien d'espace libre faut-il laisser sur un SSD ?",
          answer:
            "Laissez au moins 15-20 % de la capacité totale libre. Sur un SSD de 500 GB, cela représente 75-100 GB ; sur un SSD de 1 TB, 150-200 GB. Cette marge sert au nivellement d'usure, au ramasse-miettes et au cache SLC : au-delà de 90 % de remplissage, la vitesse d'écriture chute nettement.",
        },
        {
          question: "10 % d'espace libre, est-ce suffisant ?",
          answer:
            "Sur un disque dur, oui la plupart du temps ; sur un SSD, c'est limite. Sur un HDD, 10-15 % restent acceptables, même si la défragmentation a besoin d'au moins 15 % pour bien fonctionner. Sur un SSD, 10 % correspond au seuil où la dégradation des performances commence : viser 15-20 % est plus sûr.",
        },
        {
          question: "Combien d'espace libre faut-il pour une mise à jour de Windows 11 ?",
          answer:
            "Les grandes mises à jour de fonctionnalités réclament environ 20 GB d'espace libre sur le disque système. Cet espace se partage entre le paquet téléchargé, les fichiers d'installation temporaires et la version précédente conservée pour un retour en arrière. Sans marge suffisante, la mise à jour ne démarre pas ou est annulée en cours de route.",
        },
        {
          question: "Un disque plein peut-il endommager l'ordinateur ?",
          answer:
            "Il ne provoque aucun dommage matériel permanent, mais bien des problèmes de fonctionnement. La vitesse d'écriture chute, Windows ne peut plus agrandir le fichier d'échange et les applications peuvent se fermer sur une erreur de mémoire, les mises à jour échouent et les points de restauration ne peuvent plus être créés. Si le disque se remplit totalement, les documents non enregistrés sont perdus et certains fichiers peuvent être corrompus par une écriture interrompue.",
        },
        {
          question: "Puis-je remplir complètement un disque de données ?",
          answer:
            "Remplir un disque secondaire qui n'héberge aucun fichier système n'affecte pas la stabilité du système, mais s'il s'agit d'un SSD, la vitesse d'écriture baisse quand même. Remplir un disque dur d'archivage à 95 % ne pose aucun problème pratique ; le même taux de remplissage sur un SSD que vous sollicitez en écriture provoque un ralentissement net.",
        },
        {
          question: "Comment vérifier mon espace libre ?",
          answer:
            "Sous Windows, Paramètres > Système > Stockage affiche l'utilisation de chaque disque avec le détail par catégorie, et l'Explorateur de fichiers montre l'espace libre de chaque disque sous Ce PC. Sur macOS, passez par le menu Pomme > À propos de ce Mac > Stockage.",
        },
      ],
      verdict: [
        "L'objectif est simple : 15-20 % libres sur un SSD, 10-15 % sur un disque dur. Sur le disque système, ajoutez une réserve de mise à jour de 20 GB pour Windows ou de 15-20 GB pour macOS. Sur un SSD système de 1 TB, l'objectif pratique est de 150-200 GB libres.",
        "Les pourcentages sont plus fiables que des valeurs fixes en gigaoctets, car le besoin augmente avec la taille du disque. Pour les usages qui réclament de l'espace de travail temporaire — jeu, montage vidéo, machines virtuelles — considérez 20 % comme un plancher, pas comme un objectif.",
        "Surtout, voyez ce seuil comme une réserve à entretenir plutôt que comme un cap à franchir une seule fois. Éviter un disque plein par un nettoyage régulier est à la fois plus rapide et plus sûr que d'y réagir dans l'urgence.",
      ],
      ctaText: "Atteignez votre objectif d'espace libre dès aujourd'hui",
    },
    es: {
      title: "¿Cuánto espacio libre en disco necesito? Cifras reales para SSD y HDD",
      metaDescription:
        "¿Cuánto espacio libre dejar en el disco? Un 15-20 % en SSD y un 10-15 % en HDD. Las cifras reales para actualizaciones de Windows, juegos y edición de vídeo.",
      subtitle: "¿Porcentajes o gigabytes? Los umbrales reales según el tipo de unidad",
      intro: [
        "Respuesta corta: deja libre al menos el 15-20 % de la capacidad total en un SSD y al menos el 10-15 % en un disco duro. En un SSD de 500 GB eso equivale a unos 75-100 GB; en uno de 1 TB, a 150-200 GB. Además, la unidad del sistema necesita un margen de unos 20 GB para las actualizaciones de características de Windows, o de 15-20 GB para las de macOS.",
        "La respuesta a «mi disco está lleno pero todo sigue funcionando, ¿dónde está el problema?» es que el espacio libre no es solo almacenamiento: el sistema operativo lo necesita para funcionar. En los SSD, el espacio libre afecta directamente a la velocidad de escritura. En Windows, la memoria virtual, los archivos temporales y la preparación de las actualizaciones beben del mismo depósito. Esta guía te da las cifras que debes marcarte según el tipo de unidad y el uso que le das al equipo.",
      ],
      keyTakeaways: [
        "Deja libre al menos el 15-20 % de un SSD: por encima del 90 % de ocupación la velocidad de escritura cae de forma notable.",
        "En un disco duro basta con un 10-15 % libre, pero la desfragmentación necesita al menos un 15 % para funcionar bien.",
        "Las actualizaciones de características de Windows 11 exigen unos 20 GB libres en la unidad del sistema y se detienen antes de empezar si no los encuentran.",
        "Reserva 15-20 GB libres para las actualizaciones de macOS y las instantáneas APFS.",
        "En un SSD de 1 TB el objetivo práctico son 150-200 GB libres; en uno de 500 GB, 75-100 GB.",
        "Cuando el espacio libre se acerca a cero, Windows no puede ampliar el archivo de paginación y las aplicaciones pueden cerrarse con errores de memoria.",
      ],
      sections: [
        {
          title: "La respuesta corta: porcentajes objetivo según el tipo de unidad",
          content: [
            "Como regla general, mantén libre al menos el 10-15 % de cada unidad. Si es un SSD, sube ese umbral al 15-20 %. Pensar en porcentajes es más preciso que pensar en gigabytes, porque el margen necesario crece con el tamaño de la unidad.",
            "En cifras concretas: apunta a unos 40-50 GB libres en un SSD de 256 GB, 75-100 GB en uno de 500 GB, 150-200 GB en uno de 1 TB y 300-400 GB en uno de 2 TB. En discos duros basta con el extremo inferior de esos rangos.",
            "Esto no se aplica por igual a todas las unidades. La del sistema es siempre la prioritaria: Windows y macOS escriben allí los archivos temporales, la memoria virtual, los paquetes de actualización y los registros. Llenar al 95 % una unidad de datos secundaria no causa ningún daño, mientras que llenar al 95 % la del sistema ralentiza el equipo y bloquea las actualizaciones.",
          ],
        },
        {
          title: "Por qué el espacio libre afecta a la velocidad de un SSD",
          content: [
            "Un SSD no puede sobrescribir datos directamente: antes tiene que borrar el bloque. Por eso la controladora ejecuta en segundo plano la recolección de basura (garbage collection) y el nivelado de desgaste (wear leveling), y ambas tareas necesitan bloques libres. A medida que la unidad se llena, el margen de maniobra de la controladora se reduce, cada escritura exige cada vez más a menudo un borrado previo y la velocidad de escritura baja.",
            "El segundo factor es la caché SLC. Los SSD TLC y QLC modernos hacen funcionar parte de sus celdas vacías en el modo rápido SLC para acelerar la escritura. Cuanto más llena está la unidad, menos espacio queda para esa caché: por eso al copiar un archivo grande la velocidad arranca alta y se desploma a los pocos segundos. Por encima del 90 % de ocupación, esa caída deja de ser pasajera y se vuelve permanente.",
            "TRIM depende del espacio libre por el mismo motivo. TRIM le indica a la controladora qué bloques pertenecen a archivos borrados para que puedan limpiarse por adelantado; una unidad permanentemente llena no le deja nada que limpiar. El módulo Estado del disco (Disk Health) de Disk Mop muestra el estado de TRIM junto a los valores S.M.A.R.T.",
          ],
        },
        {
          title: "Cuánto espacio necesitan las actualizaciones de Windows",
          content: [
            "Las grandes actualizaciones de características de Windows 11 requieren unos 20 GB libres en la unidad del sistema durante la instalación. Ese espacio se reparte entre el paquete descargado, los archivos temporales que se extraen de él y la versión anterior que se conserva para poder revertir. Sin margen suficiente, la actualización no llega a empezar o se revierte a mitad de camino.",
            "Las actualizaciones de seguridad mensuales necesitan mucho menos, normalmente entre unos cientos de megabytes y unos pocos gigabytes. Sin embargo, los paquetes descargados se acumulan en la carpeta SoftwareDistribution y con el tiempo llegan a ocupar varios gigabytes si nunca se limpian.",
            "Si durante una actualización aparece el error «no hay suficiente espacio en disco», Windows ofrece usar una unidad USB externa. Funciona, pero es un apaño más que una solución: el problema de fondo es una unidad de sistema que trabaja siempre llena. La solución definitiva es mantener esos 20 GB de margen libres de forma permanente.",
          ],
        },
        {
          title: "macOS y otros casos especiales",
          content: [
            "Deja 15-20 GB libres para las actualizaciones de macOS. macOS además consume espacio en silencio para las instantáneas APFS y las copias locales de Time Machine; ese espacio aparece como «purgable» en el Finder y se libera automáticamente cuando hace falta, pero el mecanismo no da abasto si la unidad ya está en un nivel crítico.",
            "Si juegas, rehaz las cuentas: un solo título moderno de gran presupuesto puede ocupar 100-150 GB y exigir temporalmente casi el doble mientras se actualiza. Steam y plataformas similares mantienen los archivos antiguos y los nuevos a la vez durante parte del proceso.",
            "La edición de vídeo, las máquinas virtuales y el desarrollo de software siguen el mismo patrón: todos piden espacio de trabajo temporal. Editar material en 4K genera archivos de previsualización y caché varias veces mayores que el propio proyecto. Para estas cargas de trabajo, toma el 20 % libre como suelo y mueve los archivos de trabajo a una unidad aparte siempre que puedas.",
          ],
        },
        {
          title: "Qué ocurre realmente cuando un disco se llena",
          content: [
            "Los síntomas llegan por fases a medida que se reduce el espacio libre. Primero las escrituras se ralentizan y las copias de archivos tardan más. Después Windows ya no puede ampliar el archivo de paginación tanto como necesita, y los navegadores con muchas pestañas o las aplicaciones que consumen mucha memoria empiezan a cerrarse con errores de memoria.",
            "A continuación, las actualizaciones no se instalan, no se pueden crear puntos de restauración y algunas aplicaciones ni siquiera arrancan porque no consiguen escribir un archivo temporal. Windows suele mostrar un aviso de espacio insuficiente cuando el espacio libre baja de aproximadamente el 10 % de la capacidad, pero a esas alturas la pérdida de rendimiento ya ha empezado.",
            "Si la unidad se llena por completo, aparece un riesgo real de pérdida de datos: los documentos sin guardar no se pueden escribir y algunos archivos de base de datos se corrompen cuando una escritura falla a medias. El objetivo, por tanto, no es limpiar cuando el disco se llena, sino no llegar nunca a ese punto.",
          ],
        },
        {
          title: "La forma práctica de alcanzar tu objetivo",
          content: [
            "Una vez que sabes cuántos gigabytes tienes que recuperar, la siguiente pregunta es de dónde sacarlos. Ve por orden: archivos temporales y cachés, descargas que llevan meses sin tocarse, fotos y vídeos duplicados, restos de programas desinstalados y juegos a los que ya no juegas. En la mayoría de los equipos, esas cinco categorías cubren el objetivo entero.",
            "Disk Mop ofrece un módulo dedicado a cada paso: Análisis de disco (Disk Analysis) muestra en un treemap qué carpeta se ha hinchado, Archivos grandes (Large Files) lista todo lo que supera un umbral de tamaño, Duplicados (Duplicates) encuentra copias idénticas bit a bit mediante SHA-256, el Limpiador de caché (Cache Cleaner) reúne las cachés del sistema y de los navegadores, y Restos de desinstalación (Uninstall Leftovers) borra los archivos y entradas del registro que dejan los programas eliminados. La puntuación de salud del sistema del panel muestra de un vistazo cuánto te falta para llegar al objetivo.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Cuánto espacio libre debo dejar en un SSD?",
          answer:
            "Deja libre al menos el 15-20 % de la capacidad total. En un SSD de 500 GB eso son 75-100 GB; en uno de 1 TB, 150-200 GB. Ese margen lo necesitan el nivelado de desgaste, la recolección de basura y la caché SLC: por encima del 90 % de ocupación la velocidad de escritura cae de forma notable.",
        },
        {
          question: "¿Es suficiente con un 10 % de espacio libre?",
          answer:
            "En un disco duro, normalmente sí; en un SSD está al límite. En un HDD un 10-15 % es aceptable, aunque la desfragmentación necesita al menos un 15 % para trabajar bien. En un SSD, el 10 % es justo donde empieza la degradación del rendimiento, así que apuntar al 15-20 % es la opción más segura.",
        },
        {
          question: "¿Cuánto espacio libre necesita una actualización de Windows 11?",
          answer:
            "Las grandes actualizaciones de características piden unos 20 GB libres en la unidad del sistema. Ese espacio se reparte entre el paquete descargado, los archivos temporales de instalación y la versión anterior que se guarda para poder revertir. Sin margen suficiente, la actualización no arranca o se revierte a mitad de camino.",
        },
        {
          question: "¿Un disco lleno puede dañar el ordenador?",
          answer:
            "No causa daños permanentes en el hardware, pero sí problemas de funcionamiento. La velocidad de escritura baja, Windows no puede ampliar el archivo de paginación y las aplicaciones pueden cerrarse con errores de memoria, las actualizaciones fallan y no se pueden crear puntos de restauración. Si la unidad se llena del todo, los documentos sin guardar no se pueden escribir y algunos archivos pueden corromperse por una escritura fallida.",
        },
        {
          question: "¿Puedo llenar por completo un disco de datos?",
          answer:
            "Llenar una unidad secundaria que no contiene archivos del sistema no afecta a la estabilidad del sistema, pero si es un SSD la velocidad de escritura baja igualmente. Llenar al 95 % un disco duro de archivo no supone ningún problema práctico; ese mismo nivel de ocupación en un SSD en el que escribes a diario provoca una lentitud evidente.",
        },
        {
          question: "¿Cómo compruebo el espacio libre que me queda?",
          answer:
            "En Windows, Configuración > Sistema > Almacenamiento muestra el uso de cada unidad desglosado por categorías, y el Explorador de archivos indica el espacio libre de cada unidad en Este equipo. En macOS, ve al menú Apple > Acerca de este Mac > Almacenamiento.",
        },
      ],
      verdict: [
        "El objetivo es sencillo: un 15-20 % libre en un SSD y un 10-15 % en un disco duro. En la unidad del sistema, añade un margen de actualización de 20 GB para Windows o de 15-20 GB para macOS. En un SSD de sistema de 1 TB, el objetivo práctico son 150-200 GB libres.",
        "Los porcentajes son más fiables que las cifras fijas en gigabytes, porque la necesidad crece con el tamaño de la unidad. Para las tareas que exigen espacio de trabajo temporal —juegos, edición de vídeo, máquinas virtuales— toma el 20 % como suelo, no como meta.",
        "Y lo más importante: trata este umbral como un margen que se mantiene, no como una meta que se alcanza una vez. Evitar que el disco se llene con limpiezas periódicas es más rápido y más seguro que reaccionar cuando ya está lleno.",
      ],
      ctaText: "Alcanza hoy tu objetivo de espacio libre",
    },
    it: {
      title: "Quanto spazio libero serve sul disco? Numeri reali per SSD e HDD",
      metaDescription:
        "Quanto spazio libero lasciare sul disco? Il 15-20 % su SSD e il 10-15 % su HDD. I valori reali per gli aggiornamenti di Windows, i giochi e il montaggio video.",
      subtitle: "Percentuali o gigabyte? Le soglie reali per ogni tipo di unità",
      intro: [
        "Risposta breve: lascia libero almeno il 15-20 % della capacità totale su un SSD e almeno il 10-15 % su un disco fisso. Su un SSD da 500 GB significa circa 75-100 GB; su uno da 1 TB, 150-200 GB. L'unità di sistema richiede in più un margine di circa 20 GB per gli aggiornamenti delle funzionalità di Windows, oppure 15-20 GB per gli aggiornamenti di macOS.",
        "La risposta a «il disco è pieno ma funziona ancora tutto, dov'è il problema?» è che lo spazio libero non serve solo ad archiviare: il sistema operativo ne ha bisogno per lavorare. Sugli SSD lo spazio libero incide direttamente sulla velocità di scrittura. Su Windows, memoria virtuale, file temporanei e preparazione degli aggiornamenti attingono tutti alla stessa riserva. Questa guida ti indica i numeri da puntare in base al tipo di unità e a come usi il computer.",
      ],
      keyTakeaways: [
        "Lascia libero almeno il 15-20 % di un SSD: oltre il 90 % di riempimento la velocità di scrittura cala in modo evidente.",
        "Su un disco fisso basta il 10-15 % libero, ma la deframmentazione ha bisogno di almeno il 15 % per funzionare correttamente.",
        "Gli aggiornamenti delle funzionalità di Windows 11 richiedono circa 20 GB liberi sull'unità di sistema e si fermano prima ancora di partire se non li trovano.",
        "Tieni liberi 15-20 GB per gli aggiornamenti di macOS e le istantanee APFS.",
        "Su un SSD da 1 TB l'obiettivo pratico è 150-200 GB liberi; su uno da 500 GB, 75-100 GB.",
        "Quando lo spazio libero si avvicina allo zero, Windows non riesce più ad ampliare il file di paging e le applicazioni possono chiudersi con errori di memoria.",
      ],
      sections: [
        {
          title: "La risposta breve: le percentuali da puntare per tipo di unità",
          content: [
            "Come regola generale, tieni libero almeno il 10-15 % di ogni unità. Se si tratta di un SSD, alza la soglia al 15-20 %. Ragionare in percentuale è più corretto che ragionare in gigabyte, perché il margine necessario cresce insieme alla dimensione dell'unità.",
            "In numeri concreti: punta a circa 40-50 GB liberi su un SSD da 256 GB, 75-100 GB su uno da 500 GB, 150-200 GB su uno da 1 TB e 300-400 GB su uno da 2 TB. Sui dischi fissi è sufficiente l'estremo inferiore di questi intervalli.",
            "Il discorso non vale allo stesso modo per tutte le unità. Quella di sistema ha sempre la precedenza: è lì che Windows e macOS scrivono file temporanei, memoria virtuale, pacchetti di aggiornamento e registri. Riempire al 95 % un'unità dati secondaria non crea problemi, mentre riempire al 95 % quella di sistema rallenta il computer e blocca gli aggiornamenti.",
          ],
        },
        {
          title: "Perché lo spazio libero influisce sulla velocità di un SSD",
          content: [
            "Un SSD non può sovrascrivere i dati sul posto: deve prima cancellare il blocco. Per questo il controller esegue in background il garbage collection e il wear leveling, due operazioni che hanno bisogno di blocchi liberi. Man mano che l'unità si riempie, il margine di manovra del controller si riduce, ogni scrittura richiede sempre più spesso una cancellazione preliminare e la velocità di scrittura scende.",
            "Il secondo fattore è la cache SLC. Gli SSD TLC e QLC moderni fanno lavorare una parte delle celle vuote nella modalità veloce SLC per aumentare la velocità di scrittura. Più l'unità si riempie, meno spazio resta da destinare a questa cache: è il motivo per cui la copia di un file di grandi dimensioni parte veloce e poi crolla dopo pochi secondi. Oltre il 90 % di riempimento quel crollo diventa permanente invece che temporaneo.",
            "TRIM dipende dallo spazio libero per la stessa ragione. TRIM comunica al controller quali blocchi appartengono a file eliminati, così da poterli ripulire in anticipo; un'unità sempre piena non gli lascia nulla da ripulire. Il modulo Stato del disco (Disk Health) di Disk Mop mostra lo stato di TRIM accanto ai valori S.M.A.R.T.",
          ],
        },
        {
          title: "Lo spazio richiesto dagli aggiornamenti di Windows",
          content: [
            "I grandi aggiornamenti delle funzionalità di Windows 11 richiedono circa 20 GB di spazio libero sull'unità di sistema durante l'installazione. Quello spazio si divide fra il pacchetto scaricato, i file temporanei che ne vengono estratti e la versione precedente conservata per il ripristino. Senza margine sufficiente l'aggiornamento non parte affatto oppure viene annullato a metà.",
            "Gli aggiornamenti di sicurezza mensili chiedono molto meno, di solito da qualche centinaio di megabyte a pochi gigabyte. I pacchetti scaricati però si accumulano nella cartella SoftwareDistribution e con il tempo arrivano a diversi gigabyte se non vengono mai ripuliti.",
            "Se durante un aggiornamento compare l'errore «spazio su disco insufficiente», Windows propone di usare una chiavetta USB esterna. Funziona, ma è un ripiego più che una soluzione: il problema di fondo è un'unità di sistema che lavora sempre piena. La soluzione stabile è tenere quei 20 GB di margine liberi in modo permanente.",
          ],
        },
        {
          title: "macOS e gli altri casi particolari",
          content: [
            "Tieni liberi 15-20 GB per gli aggiornamenti di macOS. macOS occupa inoltre spazio in silenzio per le istantanee APFS e i backup locali di Time Machine; quello spazio compare come «eliminabile» nel Finder e viene liberato automaticamente quando serve, ma il meccanismo non riesce a stare al passo se l'unità è già a un livello critico.",
            "Se giochi, rifai i conti: un singolo titolo moderno ad alto budget può occupare 100-150 GB e chiedere temporaneamente quasi il doppio mentre si aggiorna. Steam e le piattaforme simili tengono vecchi e nuovi file affiancati per una parte del processo di aggiornamento.",
            "Montaggio video, macchine virtuali e sviluppo software seguono lo stesso schema: tutti reclamano spazio di lavoro temporaneo. Il montaggio di materiale in 4K genera file di anteprima e di cache grandi diverse volte il progetto stesso. Per questi carichi di lavoro considera il 20 % libero come pavimento e sposta i file di lavoro su un'unità separata quando possibile.",
          ],
        },
        {
          title: "Che cosa succede davvero quando un disco si riempie",
          content: [
            "I sintomi arrivano per gradi via via che lo spazio libero si riduce. Prima rallentano le scritture e le copie dei file durano di più. Poi Windows non riesce più ad ampliare il file di paging quanto servirebbe, e i browser con molte schede o le applicazioni affamate di memoria iniziano a chiudersi con errori di memoria.",
            "Nella fase successiva gli aggiornamenti non si installano, non è possibile creare punti di ripristino e alcune applicazioni non si avviano affatto perché non riescono a scrivere un file temporaneo. Windows di solito mostra una notifica di spazio insufficiente quando lo spazio libero scende sotto il 10 % circa della capacità, ma a quel punto la perdita di prestazioni è già cominciata.",
            "Se l'unità si riempie del tutto nasce un rischio concreto di perdita di dati: i documenti non salvati non possono essere scritti e alcuni file di database si danneggiano quando una scrittura fallisce a metà. L'obiettivo, quindi, non è fare pulizia quando il disco è pieno, ma non arrivare mai a quel punto.",
          ],
        },
        {
          title: "Il modo pratico per raggiungere l'obiettivo",
          content: [
            "Una volta che sai quanti gigabyte devi recuperare, resta da capire dove trovarli. Procedi in ordine: file temporanei e cache, download non toccati da mesi, foto e video duplicati, residui dei programmi disinstallati e giochi a cui non giochi più. Sulla maggior parte dei computer queste cinque voci coprono l'intero obiettivo.",
            "Disk Mop mette a disposizione un modulo dedicato per ogni passaggio: Analisi disco (Disk Analysis) mostra con una treemap quale cartella si è gonfiata, File di grandi dimensioni (Large Files) elenca tutto ciò che supera una soglia di dimensione, Duplicati (Duplicates) individua le copie identiche bit per bit tramite SHA-256, Pulizia cache (Cache Cleaner) raccoglie le cache di sistema e dei browser e Residui di disinstallazione (Uninstall Leftovers) rimuove file e voci di registro lasciati dai programmi rimossi. Il punteggio di salute del sistema nella dashboard mostra a colpo d'occhio quanto sei vicino all'obiettivo.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto spazio libero devo lasciare su un SSD?",
          answer:
            "Lascia libero almeno il 15-20 % della capacità totale. Su un SSD da 500 GB significa 75-100 GB; su uno da 1 TB, 150-200 GB. Quel margine serve al wear leveling, al garbage collection e alla cache SLC: oltre il 90 % di riempimento la velocità di scrittura cala in modo evidente.",
        },
        {
          question: "Il 10 % di spazio libero è sufficiente?",
          answer:
            "Su un disco fisso di solito sì, su un SSD è al limite. Su un HDD il 10-15 % è accettabile, anche se la deframmentazione ha bisogno di almeno il 15 % per lavorare bene. Su un SSD il 10 % è esattamente il punto in cui comincia il calo di prestazioni, quindi puntare al 15-20 % è la scelta più sicura.",
        },
        {
          question: "Quanto spazio libero serve per un aggiornamento di Windows 11?",
          answer:
            "I grandi aggiornamenti delle funzionalità richiedono circa 20 GB liberi sull'unità di sistema. Quello spazio si divide fra il pacchetto scaricato, i file temporanei di installazione e la versione precedente conservata per il ripristino. Senza margine sufficiente l'aggiornamento non parte oppure viene annullato a metà.",
        },
        {
          question: "Un disco pieno può danneggiare il computer?",
          answer:
            "Non provoca danni permanenti all'hardware, ma causa problemi di funzionamento. La velocità di scrittura cala, Windows non riesce ad ampliare il file di paging e le applicazioni possono chiudersi con errori di memoria, gli aggiornamenti non si installano e non è possibile creare punti di ripristino. Se l'unità si riempie completamente i documenti non salvati non possono essere scritti e alcuni file si danneggiano per una scrittura fallita.",
        },
        {
          question: "Posso riempire completamente un disco dati?",
          answer:
            "Riempire un'unità secondaria che non contiene file di sistema non compromette la stabilità del sistema, ma se è un SSD la velocità di scrittura cala comunque. Riempire al 95 % un disco fisso di archivio non crea problemi pratici; lo stesso livello di riempimento su un SSD su cui scrivi tutti i giorni produce un rallentamento evidente.",
        },
        {
          question: "Come controllo lo spazio libero?",
          answer:
            "Su Windows, Impostazioni > Sistema > Archiviazione mostra l'occupazione di ogni unità suddivisa per categorie, mentre Esplora file indica lo spazio libero di ciascuna unità in Questo PC. Su macOS, apri il menu Apple > Informazioni su questo Mac > Archiviazione.",
        },
      ],
      verdict: [
        "L'obiettivo è semplice: 15-20 % libero su un SSD, 10-15 % su un disco fisso. Sull'unità di sistema aggiungi un margine per gli aggiornamenti di 20 GB per Windows o di 15-20 GB per macOS. Su un SSD di sistema da 1 TB l'obiettivo pratico è 150-200 GB liberi.",
        "Le percentuali sono più affidabili dei valori fissi in gigabyte, perché il fabbisogno cresce con la dimensione dell'unità. Per i carichi di lavoro che richiedono spazio temporaneo — gioco, montaggio video, macchine virtuali — considera il 20 % come pavimento, non come traguardo.",
        "Soprattutto, tratta questa soglia come un margine da mantenere e non come un obiettivo da raggiungere una volta sola. Evitare che il disco si riempia con una pulizia regolare è più rapido e più sicuro che correre ai ripari quando è già pieno.",
      ],
      ctaText: "Raggiungi oggi il tuo obiettivo di spazio libero",
    },
    pt: {
      title: "Quanto espaço livre em disco eu preciso? Números reais para SSD e HDD",
      metaDescription:
        "Quanto espaço livre deixar no disco? 15-20 % em um SSD e 10-15 % em um HDD. Os números reais para atualizações do Windows, jogos e edição de vídeo em 4K.",
      subtitle: "Porcentagem ou gigabytes? Os limites reais por tipo de unidade",
      intro: [
        "Resposta curta: deixe pelo menos 15-20 % da capacidade total livre em um SSD e pelo menos 10-15 % em um disco rígido. Em um SSD de 500 GB, isso significa cerca de 75-100 GB; em um de 1 TB, 150-200 GB. A unidade do sistema precisa ainda de uma folga de aproximadamente 20 GB para as atualizações de recursos do Windows, ou de 15-20 GB para as atualizações do macOS.",
        "A resposta para “meu disco está cheio, mas tudo continua funcionando, qual é o problema?” é que o espaço livre não serve apenas para guardar arquivos: o sistema operacional precisa dele para trabalhar. Em SSDs, o espaço livre afeta diretamente a velocidade de gravação. No Windows, a memória virtual, os arquivos temporários e a preparação das atualizações bebem da mesma reserva. Este guia traz os números que você deve mirar conforme o tipo de unidade e o uso que faz do computador.",
      ],
      keyTakeaways: [
        "Deixe pelo menos 15-20 % livres em um SSD: acima de 90 % de ocupação, a velocidade de gravação cai de forma perceptível.",
        "Em um disco rígido, 10-15 % livres bastam, mas a desfragmentação precisa de pelo menos 15 % para funcionar direito.",
        "As atualizações de recursos do Windows 11 exigem cerca de 20 GB livres na unidade do sistema e simplesmente param antes de começar se não os encontrarem.",
        "Reserve 15-20 GB livres para as atualizações do macOS e os instantâneos APFS.",
        "Em um SSD de 1 TB, a meta prática é 150-200 GB livres; em um de 500 GB, 75-100 GB.",
        "Quando o espaço livre chega perto de zero, o Windows não consegue aumentar o arquivo de paginação e os aplicativos podem fechar com erros de memória.",
      ],
      sections: [
        {
          title: "A resposta curta: porcentagens ideais por tipo de unidade",
          content: [
            "Como regra geral, mantenha pelo menos 10-15 % de cada unidade livres. Se for um SSD, eleve esse limite para 15-20 %. Pensar em porcentagem é mais preciso do que pensar em gigabytes, porque a folga necessária cresce junto com o tamanho da unidade.",
            "Em números concretos: mire cerca de 40-50 GB livres em um SSD de 256 GB, 75-100 GB em um de 500 GB, 150-200 GB em um de 1 TB e 300-400 GB em um de 2 TB. Em discos rígidos, a ponta inferior dessas faixas já é suficiente.",
            "Isso não vale igualmente para todas as unidades. A do sistema é sempre a prioridade: é nela que o Windows e o macOS gravam arquivos temporários, memória virtual, pacotes de atualização e logs. Encher uma unidade de dados secundária a 95 % não causa problema algum, enquanto encher a do sistema a 95 % deixa a máquina lenta e trava as atualizações.",
          ],
        },
        {
          title: "Por que o espaço livre afeta a velocidade do SSD",
          content: [
            "Um SSD não consegue sobrescrever dados no lugar: ele precisa apagar o bloco antes. Por isso a controladora executa em segundo plano a coleta de lixo (garbage collection) e o nivelamento de desgaste (wear leveling), e as duas tarefas precisam de blocos livres. Conforme a unidade enche, a margem de manobra da controladora encolhe, cada gravação passa a exigir um apagamento prévio com mais frequência e a velocidade de gravação cai.",
            "O segundo fator é o cache SLC. Os SSDs TLC e QLC modernos operam parte das células vazias no modo rápido SLC para acelerar a gravação. Quanto mais cheia a unidade, menos espaço sobra para esse cache: é por isso que a cópia de um arquivo grande começa rápida e despenca depois de alguns segundos. Acima de 90 % de ocupação, essa queda deixa de ser passageira e vira permanente.",
            "O TRIM depende do espaço livre pelo mesmo motivo. O TRIM informa à controladora quais blocos pertencem a arquivos apagados para que sejam limpos com antecedência; uma unidade permanentemente cheia não deixa nada para limpar. O módulo Saúde do Disco (Disk Health) do Disk Mop mostra o status do TRIM ao lado dos valores S.M.A.R.T.",
          ],
        },
        {
          title: "Quanto espaço as atualizações do Windows exigem",
          content: [
            "As grandes atualizações de recursos do Windows 11 exigem cerca de 20 GB de espaço livre na unidade do sistema durante a instalação. Esse espaço é dividido entre o pacote baixado, os arquivos temporários extraídos dele e a versão anterior guardada para reversão. Sem folga suficiente, a atualização nem começa ou é revertida no meio do caminho.",
            "As atualizações mensais de segurança pedem bem menos, normalmente de algumas centenas de megabytes a poucos gigabytes. Mesmo assim, os pacotes baixados se acumulam na pasta SoftwareDistribution e chegam a vários gigabytes com o tempo se nunca forem limpos.",
            "Se durante uma atualização aparecer o erro “espaço em disco insuficiente”, o Windows oferece usar um pendrive USB externo. Funciona, mas é um paliativo, não uma solução: o problema real é uma unidade de sistema que trabalha sempre cheia. A solução definitiva é manter esses 20 GB de folga livres em caráter permanente.",
          ],
        },
        {
          title: "macOS e outros casos especiais",
          content: [
            "Deixe 15-20 GB livres para as atualizações do macOS. O macOS também consome espaço em silêncio para os instantâneos APFS e os backups locais do Time Machine; esse espaço aparece como “purgável” no Finder e é liberado automaticamente quando necessário, mas o mecanismo não dá conta se a unidade já estiver em nível crítico.",
            "Se você joga, refaça as contas: um único jogo moderno de grande orçamento ocupa 100-150 GB e chega a exigir quase o dobro disso enquanto se atualiza. A Steam e plataformas semelhantes mantêm arquivos antigos e novos lado a lado durante parte do processo.",
            "Edição de vídeo, máquinas virtuais e desenvolvimento de software seguem o mesmo padrão: todos pedem espaço de trabalho temporário. Editar material em 4K gera arquivos de pré-visualização e de cache várias vezes maiores que o próprio projeto. Para essas cargas de trabalho, trate 20 % livres como piso e mova os arquivos de trabalho para uma unidade separada sempre que possível.",
          ],
        },
        {
          title: "O que realmente acontece quando o disco enche",
          content: [
            "Os sintomas chegam em etapas conforme o espaço livre diminui. Primeiro, as gravações ficam lentas e as cópias de arquivos demoram mais. Depois, o Windows deixa de conseguir aumentar o arquivo de paginação como precisaria, e navegadores com muitas abas ou aplicativos que consomem muita memória começam a fechar com erros de memória.",
            "Em seguida, as atualizações não instalam, não é possível criar pontos de restauração e alguns aplicativos nem abrem porque não conseguem gravar um arquivo temporário. O Windows costuma exibir um aviso de pouco espaço quando o espaço livre cai abaixo de cerca de 10 % da capacidade, mas nesse ponto a perda de desempenho já começou.",
            "Se a unidade encher por completo, surge um risco real de perda de dados: documentos não salvos não podem ser gravados e alguns arquivos de banco de dados são corrompidos quando uma gravação falha no meio. A meta, portanto, não é limpar quando o disco enche, e sim nunca chegar a esse ponto.",
          ],
        },
        {
          title: "O caminho prático para chegar à sua meta",
          content: [
            "Depois de saber quantos gigabytes precisa recuperar, a próxima pergunta é onde encontrá-los. Siga a ordem: arquivos temporários e caches, downloads intocados há meses, fotos e vídeos duplicados, sobras de programas desinstalados e jogos que você não joga mais. Na maioria dos computadores, essas cinco categorias cobrem a meta inteira.",
            "O Disk Mop oferece um módulo dedicado a cada etapa: a Análise de Disco (Disk Analysis) mostra em um treemap qual pasta inchou, Arquivos Grandes (Large Files) lista tudo acima de um limite de tamanho, Duplicados (Duplicates) encontra cópias idênticas bit a bit com SHA-256, o Limpador de Cache (Cache Cleaner) reúne os caches do sistema e dos navegadores, e Sobras de Desinstalação (Uninstall Leftovers) apaga arquivos e entradas de registro deixados por programas removidos. A pontuação de saúde do sistema no painel mostra num relance o quanto você está perto da meta.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto espaço livre devo deixar em um SSD?",
          answer:
            "Deixe pelo menos 15-20 % da capacidade total livres. Em um SSD de 500 GB isso significa 75-100 GB; em um de 1 TB, 150-200 GB. Essa folga é necessária para o nivelamento de desgaste, a coleta de lixo e o cache SLC: acima de 90 % de ocupação, a velocidade de gravação cai de forma perceptível.",
        },
        {
          question: "10 % de espaço livre é suficiente?",
          answer:
            "Em um disco rígido, geralmente sim; em um SSD, está no limite. No HDD, 10-15 % é aceitável, embora a desfragmentação precise de pelo menos 15 % para funcionar bem. No SSD, 10 % é justamente onde começa a queda de desempenho, então mirar 15-20 % é a escolha mais segura.",
        },
        {
          question: "Quanto espaço livre uma atualização do Windows 11 precisa?",
          answer:
            "As grandes atualizações de recursos exigem cerca de 20 GB livres na unidade do sistema. Esse espaço é dividido entre o pacote baixado, os arquivos temporários de instalação e a versão anterior mantida para reversão. Sem folga suficiente, a atualização não começa ou é revertida no meio do caminho.",
        },
        {
          question: "Um disco cheio pode danificar o computador?",
          answer:
            "Não causa dano permanente ao hardware, mas causa problemas de funcionamento. A velocidade de gravação cai, o Windows não consegue aumentar o arquivo de paginação e os aplicativos podem fechar com erros de memória, as atualizações falham e não é possível criar pontos de restauração. Se a unidade encher por completo, documentos não salvos não podem ser gravados e alguns arquivos podem ser corrompidos por uma gravação interrompida.",
        },
        {
          question: "Posso encher totalmente um disco de dados?",
          answer:
            "Encher uma unidade secundária que não guarda arquivos do sistema não afeta a estabilidade do sistema, mas, se ela for um SSD, a velocidade de gravação cai mesmo assim. Encher um disco rígido de arquivamento a 95 % não traz problema prático algum; o mesmo nível de ocupação em um SSD no qual você grava com frequência gera lentidão evidente.",
        },
        {
          question: "Como verifico o espaço livre?",
          answer:
            "No Windows, Configurações > Sistema > Armazenamento mostra o uso por unidade com a divisão por categorias, e o Explorador de Arquivos exibe o espaço livre de cada unidade em Este Computador. No macOS, use o menu Apple > Sobre Este Mac > Armazenamento.",
        },
      ],
      verdict: [
        "A meta é direta: 15-20 % livres em um SSD e 10-15 % em um disco rígido. Na unidade do sistema, acrescente uma folga de atualização de 20 GB para o Windows ou de 15-20 GB para o macOS. Em um SSD de sistema de 1 TB, a meta prática é 150-200 GB livres.",
        "Porcentagens são mais confiáveis do que valores fixos em gigabytes, porque a necessidade cresce junto com a unidade. Para as cargas de trabalho que exigem espaço temporário — jogos, edição de vídeo, máquinas virtuais — trate 20 % como piso, não como objetivo.",
        "Acima de tudo, encare esse limite como uma folga que se mantém, não como uma meta que se alcança uma vez. Evitar o disco cheio com limpezas regulares é mais rápido e mais seguro do que reagir depois que ele já encheu.",
      ],
      ctaText: "Alcance hoje sua meta de espaço livre",
    },
    ja: {
      title: "ディスクの空き容量はどれくらい必要？SSD・HDD別の具体的な目安",
      metaDescription:
        "ディスクの空き容量はどれくらい残すべきでしょうか。目安はSSDが15-20%、HDDが10-15%です。Windowsの更新プログラム、ゲーム、動画編集に必要な容量を具体的な数字で解説します。",
      subtitle: "パーセントかギガバイトか、ドライブの種類ごとの現実的な基準",
      intro: [
        "短い答えから。SSDでは総容量の15-20%以上、ハードディスク（HDD）では10-15%以上を空けておいてください。500 GBのSSDならおよそ75-100 GB、1 TBのSSDなら150-200 GBにあたります。システムドライブにはこれに加えて、Windowsの機能更新プログラム用に約20 GB、macOSのアップデート用には15-20 GBの余裕が必要です。",
        "「ディスクはいっぱいなのに問題なく動いている。何がいけないのか」という疑問への答えはこうです。空き容量は保存場所であるだけでなく、OS自身が動作するために使う領域でもあります。SSDでは空き容量が書き込み速度に直接影響します。Windowsでは仮想メモリ、一時ファイル、更新プログラムの展開先が、すべて同じ空き容量から確保されます。この記事では、ドライブの種類と使い方に応じて目指すべき具体的な数字をお伝えします。",
      ],
      keyTakeaways: [
        "SSDは最低でも15-20%を空けてください。使用率が90%を超えると書き込み速度がはっきりと低下します。",
        "HDDなら10-15%の空きで十分ですが、デフラグを正しく実行するには最低15%が必要です。",
        "Windows 11の機能更新プログラムはシステムドライブに約20 GBの空きを要求し、足りなければ開始する前に止まります。",
        "macOSのアップデートとAPFSスナップショット用に15-20 GBを空けておきましょう。",
        "1 TBのSSDなら150-200 GB、500 GBのSSDなら75-100 GBの空き容量が現実的な目標です。",
        "空き容量がゼロに近づくと、Windowsはページファイルを拡張できなくなり、アプリがメモリ不足エラーで落ちることがあります。",
      ],
      sections: [
        {
          title: "結論：ドライブの種類別に見た目標の空き容量",
          content: [
            "基本のルールとして、どのドライブでも容量の10-15%以上は空けておきます。SSDならこの基準を15-20%まで引き上げてください。ギガバイト単位で考えるよりパーセントで考えるほうが正確です。必要な余裕はドライブの容量に比例して増えるからです。",
            "具体的な数字にすると、256 GBのSSDならおよそ40-50 GB、500 GBなら75-100 GB、1 TBなら150-200 GB、2 TBなら300-400 GBの空きを目指します。ハードディスクの場合は、それぞれの範囲の下限で十分です。",
            "ただし、すべてのドライブに同じ基準が当てはまるわけではありません。優先すべきは常にシステムドライブです。WindowsもmacOSも、一時ファイル、仮想メモリ、更新パッケージ、ログをここに書き込みます。データ用のセカンドドライブを95%まで使っても実害はありませんが、システムドライブを95%まで埋めると動作が重くなり、更新プログラムも止まります。",
          ],
        },
        {
          title: "SSDの速度が空き容量に左右される理由",
          content: [
            "SSDはデータをその場で上書きできず、まずブロックを消去しなければなりません。そのためコントローラーはバックグラウンドでガベージコレクションとウェアレベリングを行いますが、どちらも空きブロックを必要とします。ドライブが埋まるほどコントローラーの余裕はなくなり、書き込みのたびに消去が先に必要になる場面が増えて、書き込み速度が落ちていきます。",
            "2つ目の要因はSLCキャッシュです。最近のTLCやQLCのSSDは、空きセルの一部を高速なSLCモードで動かして書き込み速度を稼いでいます。ドライブが埋まるほど、このキャッシュに割り当てられる領域は小さくなります。大きなファイルをコピーすると最初は速く、数秒後に急に遅くなるのはこのためです。使用率が90%を超えると、この速度低下は一時的なものではなく常態になります。",
            "TRIMが空き容量に依存するのも同じ理由です。TRIMは削除されたファイルが使っていたブロックをコントローラーに伝え、あらかじめ消去できるようにする仕組みですが、常に満杯のドライブでは消去できるブロックが見つかりません。Disk Mopのディスク健全性（Disk Health）モジュールでは、S.M.A.R.T.の値と並べてTRIMの状態も確認できます。",
          ],
        },
        {
          title: "Windowsの更新プログラムに必要な空き容量",
          content: [
            "Windows 11の大型機能更新プログラムは、インストール中にシステムドライブで約20 GBの空き容量を必要とします。この領域は、ダウンロードしたパッケージ、そこから展開される一時ファイル、そして復元用に保持される以前のバージョンで分け合われます。余裕が足りないと、更新は始まらないか、途中で中断されて元に戻されます。",
            "毎月のセキュリティ更新プログラムに必要な容量ははるかに小さく、通常は数百メガバイトから数ギガバイト程度です。ただしダウンロードされたパッケージはSoftwareDistributionフォルダーにたまり続け、一度も整理しなければ時間とともに数ギガバイトに膨らみます。",
            "更新中に「ディスクの空き容量が不足しています」というエラーが出ると、Windowsは外付けUSBメモリの利用を提案します。これは有効ではありますが、あくまで回避策です。根本にあるのは、システムドライブが常に満杯のまま使われていることです。恒久的な解決策は、20 GBの余裕を常に空けたままにしておくことです。",
          ],
        },
        {
          title: "macOSとそのほかの特殊なケース",
          content: [
            "macOSのアップデート用には15-20 GBを空けておきます。macOSはAPFSスナップショットやTime Machineのローカルバックアップのためにも静かに容量を使っています。この領域はFinderで「消去可能」と表示され、必要になれば自動的に解放されますが、ドライブがすでに危険な水準まで埋まっている場合はこの仕組みが間に合いません。",
            "ゲームをするなら計算をやり直してください。最近の大型タイトルは1本で100-150 GBを占め、アップデート中には一時的にその倍近い容量を要求します。Steamなどのプラットフォームは、更新処理の一部の期間、古いファイルと新しいファイルを同時に保持するためです。",
            "動画編集、仮想マシン、ソフトウェア開発も同じ構図です。いずれも作業用の一時領域を必要とします。4K素材を編集すると、プロジェクト自体の数倍にあたるプレビューファイルやキャッシュファイルが生成されます。こうした用途では20%の空きを下限と考え、可能であれば作業ファイルを別のドライブへ移してください。",
          ],
        },
        {
          title: "ディスクがいっぱいになると実際に何が起きるか",
          content: [
            "空き容量が減るにつれて、症状は段階的に現れます。まず書き込みが遅くなり、ファイルのコピーに時間がかかるようになります。次にWindowsが必要なだけページファイルを拡張できなくなり、タブを多数開いたブラウザーやメモリを多く使うアプリがメモリ不足エラーで終了し始めます。",
            "その次の段階では、更新プログラムがインストールできなくなり、復元ポイントも作成できず、一時ファイルを書き込めないために起動すらしないアプリが出てきます。Windowsは通常、空き容量が容量の10%程度を下回ると通知を表示しますが、その時点ではすでに性能の低下が始まっています。",
            "ドライブが完全に埋まると、データ損失の危険も現実になります。保存していない書類を保存できなくなり、一部のデータベースファイルは書き込みが途中で失敗すると破損することがあります。したがって目指すべきは、いっぱいになってから片づけることではなく、そもそもその状態にしないことです。",
          ],
        },
        {
          title: "目標の空き容量に到達する現実的な手順",
          content: [
            "取り戻すべき容量が分かったら、次の問題はどこから空けるかです。順番に見ていきましょう。一時ファイルとキャッシュ、何か月も触っていないダウンロード、重複した写真と動画、アンインストール済みプログラムの残骸、そしてもう遊んでいないゲームです。たいていのパソコンでは、この5つで目標のすべてをまかなえます。",
            "Disk Mopはこれらの手順ごとに専用モジュールを用意しています。ディスク分析（Disk Analysis）はどのフォルダーが肥大化しているかをツリーマップで示し、大きなファイル（Large Files）はしきい値を超えるファイルを一覧表示し、重複ファイル（Duplicates）はSHA-256でビット単位に同一のコピーを見つけ、キャッシュクリーナー（Cache Cleaner）はシステムとブラウザーのキャッシュをまとめて集め、アンインストール残骸（Uninstall Leftovers）は削除済みプログラムが残したファイルとレジストリ項目を消去します。ダッシュボードのシステム健全性スコアを見れば、目標にどこまで近づいたかが一目で分かります。",
            "Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "SSDの空き容量はどれくらい残すべきですか？",
          answer:
            "総容量の15-20%以上を空けてください。500 GBのSSDなら75-100 GB、1 TBのSSDなら150-200 GBにあたります。この余裕はウェアレベリング、ガベージコレクション、SLCキャッシュのために必要で、使用率が90%を超えると書き込み速度がはっきりと低下します。",
        },
        {
          question: "空き容量は10%あれば足りますか？",
          answer:
            "ハードディスクなら多くの場合は足りますが、SSDでは境界線上です。HDDでは10-15%でも許容範囲ですが、デフラグを正しく動かすには最低15%が必要です。SSDの10%は性能低下が始まる領域なので、15-20%を目標にするほうが安全です。",
        },
        {
          question: "Windows 11の更新プログラムにはどれくらいの空き容量が必要ですか？",
          answer:
            "大型の機能更新プログラムには、システムドライブに約20 GBの空き容量が必要です。この領域はダウンロードしたパッケージ、一時的なインストールファイル、復元用に保持される以前のバージョンで分け合われます。余裕が足りない場合、更新は始まらないか、途中で中断されて元に戻されます。",
        },
        {
          question: "ディスクがいっぱいになるとパソコンは壊れますか？",
          answer:
            "ハードウェアが恒久的に壊れることはありませんが、動作上の問題は起こります。書き込み速度が落ち、Windowsはページファイルを拡張できずアプリがメモリ不足エラーで終了することがあり、更新プログラムはインストールできず、復元ポイントも作成できません。ドライブが完全に埋まると、保存していない書類を保存できなくなり、書き込みの失敗で一部のファイルが破損することもあります。",
        },
        {
          question: "データ用ドライブは満杯まで使ってもよいですか？",
          answer:
            "システムファイルを置いていないセカンドドライブを満杯近くまで使ってもシステムの安定性には影響しませんが、SSDであれば書き込み速度はやはり低下します。保管用のHDDを95%まで使っても実用上の問題はほとんどありませんが、日常的に書き込んでいるSSDで同じ使用率になると、はっきりとした速度低下を感じます。",
        },
        {
          question: "空き容量はどこで確認できますか？",
          answer:
            "Windowsでは「設定」>「システム」>「ストレージ」で、ドライブごとの使用状況と種類別の内訳を確認できます。エクスプローラーの「PC」からも各ドライブの空き容量が分かります。macOSでは、Appleメニュー >「このMacについて」>「ストレージ」から確認します。",
        },
      ],
      verdict: [
        "目標はシンプルです。SSDは15-20%、ハードディスクは10-15%を空けておくこと。システムドライブでは、これに加えてWindowsなら20 GB、macOSなら15-20 GBの更新用の余裕を確保します。1 TBのシステムSSDであれば、150-200 GBの空き容量が現実的な目標です。",
        "固定のギガバイト数よりパーセントのほうが信頼できます。必要な容量はドライブの大きさとともに増えるからです。ゲーム、動画編集、仮想マシンのように作業用の一時領域を必要とする用途では、20%を目標ではなく下限として扱ってください。",
        "そして何より、この基準は一度達成すれば終わりの目標ではなく、維持し続ける余裕だと考えることが大切です。定期的な整理でディスクが満杯になるのを防ぐほうが、満杯になってから対処するより速く、そして安全です。",
      ],
      ctaText: "今日から目標の空き容量を確保する",
    },
  },
};
