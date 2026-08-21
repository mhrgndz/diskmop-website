import type { Article } from '../types';

export const ssdHealthCheckWindows: Article = {
  slug: 'ssd-health-check-windows',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-08-17',
  readingTime: 9,
  content: {
    tr: {
      title: "SSD Sağlığı Nasıl Kontrol Edilir? S.M.A.R.T., TBW ve Ömür",
      metaDescription:
        "SSD'nizin ne kadar ömrü kaldığını öğrenin: S.M.A.R.T. değerleri, TBW dayanıklılık sınırı, TRIM kontrolü ve arıza belirtileri. Windows'un yerleşik komutlarıyla adım adım.",
      subtitle: "Hangi Değere Bakılır, Ne Zaman Endişelenilir?",
      intro: [
        "Kısa cevap: Windows'ta PowerShell'i açıp Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType komutunu çalıştırın; sağlıklı bir sürücü Healthy döner. Daha ayrıntılı bilgi için Get-PhysicalDisk | Get-StorageReliabilityCounter komutu yazma miktarını, sıcaklığı ve aşınma göstergesini verir. NVMe SSD'lerde asıl bakılacak değer \"Percentage Used\" (kullanılan yüzde), SATA SSD'lerde ise \"Wear Leveling Count\" ve \"Reallocated Sector Count\" değerleridir.",
        "SSD'ler sabit diskler gibi tıkırdayarak ölmez; sessizce aşınır ve genellikle bir noktada salt okunur moda geçer. İyi haber, modern bir SSD'nin dayanıklılık sınırının ortalama bir kullanıcının yıllarca ulaşamayacağı kadar yüksek olmasıdır. Bu rehberde sürücünüzün gerçek durumunu Windows'un kendi araçlarıyla nasıl ölçeceğinizi, hangi rakamın ne anlama geldiğini ve hangi belirtilerde hemen yedek almanız gerektiğini anlatıyoruz.",
      ],
      keyTakeaways: [
        "PowerShell'de Get-PhysicalDisk komutu her sürücü için Healthy, Warning veya Unhealthy durumunu döndürür.",
        "NVMe SSD'lerde en anlamlı gösterge \"Percentage Used\" değeridir: %100 dayanıklılık sınırına ulaşıldığını gösterir, sürücünün o anda öleceğini değil.",
        "Tipik bir 1 TB tüketici SSD'sinin TBW dayanıklılığı 300-600 TB'dir; günde 30 GB yazan bir kullanıcı bu sınıra ancak on yılı aşkın sürede ulaşır.",
        "TRIM'in açık olduğunu fsutil behavior query DisableDeleteNotify komutuyla doğrulayın; sonuç 0 ise TRIM etkindir.",
        "SSD'yi asla birleştirmeyin (defrag); Windows'un Sürücüleri İyileştir aracı SSD'lerde birleştirme değil TRIM çalıştırır.",
        "Sürücü salt okunur moda geçtiyse, dosyalar kayboluyorsa veya BIOS'ta görünmüyorsa hemen yedek alın — bunlar geri dönüşü olmayan aşamanın işaretleridir.",
      ],
      howTo: {
        name: "Windows'ta SSD sağlığını kontrol etme",
        totalTime: "PT10M",
        steps: [
          {
            name: "PowerShell'i yönetici olarak açın",
            text: "Başlat menüsüne PowerShell yazın, çıkan sonuca sağ tıklayın ve Yönetici olarak çalıştır'ı seçin. Aşağıdaki komutların bir kısmı yönetici yetkisi ister.",
          },
          {
            name: "Genel sağlık durumunu okuyun",
            text: "Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus komutunu çalıştırın. HealthStatus sütununda Healthy görmeniz gerekir; Warning veya Unhealthy görünüyorsa hemen yedek alın.",
          },
          {
            name: "Ayrıntılı güvenilirlik sayaçlarını görün",
            text: "Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours komutunu çalıştırın. Wear değeri aşınma yüzdesini, PowerOnHours ise sürücünün toplam çalışma saatini verir.",
          },
          {
            name: "TRIM'in açık olduğunu doğrulayın",
            text: "Komut isteminde fsutil behavior query DisableDeleteNotify yazın. Dönen değer 0 ise TRIM etkindir. 1 ise fsutil behavior set DisableDeleteNotify 0 komutuyla açın.",
          },
          {
            name: "İyileştirme zamanlamasını kontrol edin",
            text: "Başlat menüsünde \"Sürücüleri Birleştir ve İyileştir\" aracını açın. SSD'nizin Medya türü sütununda \"Katı hal sürücüsü\" yazdığından ve haftalık iyileştirmenin açık olduğundan emin olun. Bu araç SSD'de birleştirme değil TRIM çalıştırır.",
          },
        ],
      },
      sections: [
        {
          title: "S.M.A.R.T. Nedir ve Hangi Değerler Önemlidir?",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology), sürücülerin kendi durumlarını izleyip raporladığı bir standarttır. Onlarca değer üretir ama bunların hepsi eşit derecede anlamlı değildir; SSD'lerde asıl işe yarayan bir avuç göstergedir.",
            "NVMe SSD'lerde en anlamlı gösterge \"Percentage Used\" değeridir. Bu, üreticinin belirlediği dayanıklılık bütçesinin ne kadarının harcandığını yüzde olarak verir. %10 değeri, sürücünün ömrünün onda birinin kullanıldığını gösterir. \"Available Spare\" ise arızalı hücrelerin yerine geçmek üzere ayrılmış yedek alanın ne kadarının kaldığını söyler; bu değer %10'un altına inerse ciddiye alın.",
            "SATA SSD'lerde karşılığı \"Wear Leveling Count\" ve bazı üreticilerde doğrudan \"SSD Life Left\" olarak görünür. Her iki tipte de \"Reallocated Sector Count\" veya \"Media and Data Integrity Errors\" değerlerinin sıfırdan farklı olması ve zamanla artması, sürücünün fiziksel olarak bozulmaya başladığının en net işaretidir.",
          ],
        },
        {
          title: "TBW: SSD'niz Gerçekte Ne Kadar Dayanır?",
          content: [
            "TBW (Terabytes Written), üreticinin garanti ettiği toplam yazma miktarıdır ve SSD dayanıklılığının standart ölçüsüdür. Tipik bir tüketici SSD'sinde 500 GB modeller için 150-300 TB, 1 TB modeller için 300-600 TB civarındadır. Kapasite büyüdükçe TBW da artar, çünkü yazma işlemi daha fazla hücreye dağılır.",
            "Bu rakamı günlük hayata çevirmek çoğu kullanıcıyı rahatlatır. Ortalama bir kullanıcı günde 10-30 GB yazar; bu yılda yaklaşık 4-11 TB eder. 300 TB dayanıklılığa sahip bir sürücüde bu, on yılı rahatlıkla aşan bir kullanım ömrü demektir. Yani çoğu SSD, dayanıklılık sınırına ulaşmadan çok önce eskiyip değiştirilir.",
            "İstisnalar var: sürekli video düzenleyen, büyük veri setleriyle çalışan veya sanal makine çalıştıran sistemler günde yüzlerce gigabayt yazabilir. Böyle bir iş yükünüz varsa Get-StorageReliabilityCounter çıktısındaki yazma miktarını yılda bir kez kontrol etmek anlamlıdır.",
          ],
        },
        {
          title: "TRIM Neden Önemli ve Nasıl Kontrol Edilir?",
          content: [
            "SSD'ler veriyi doğrudan üzerine yazamaz; önce bloğu silmek zorundadır. TRIM komutu, işletim sisteminin sürücüye \"bu bloklar artık silinmiş dosyalara ait\" demesini sağlar; sürücü de bu blokları boş zamanında önceden temizler. TRIM olmadan her yazma işlemi önce silme gerektirir ve performans zamanla belirgin biçimde düşer.",
            "Windows 7'den beri TRIM varsayılan olarak açıktır ama bazı kurulumlarda kapalı kalabilir. Kontrol etmek için komut isteminde fsutil behavior query DisableDeleteNotify yazın. Dönen değer 0 ise TRIM etkin demektir; 1 ise fsutil behavior set DisableDeleteNotify 0 komutuyla açabilirsiniz.",
            "TRIM'in düzgün çalışması boş alana da bağlıdır: sürücü sürekli doluysa temizlenecek blok kalmaz. Bu yüzden SSD'lerde kapasitenin en az %15-20'sini boş tutmak yalnızca bir tavsiye değil, sürücünün tasarlandığı gibi çalışması için gerekli bir koşuldur. Disk Mop'un Disk Sağlığı (Disk Health) modülü S.M.A.R.T. değerlerinin yanında TRIM durumunu da tek ekranda gösterir.",
          ],
        },
        {
          title: "SSD Arızasının Belirtileri",
          content: [
            "SSD'ler sabit diskler gibi ses çıkararak uyarı vermez, bu yüzden belirtiler yazılım tarafında görünür. En sık rastlanan ilk işaret, dosya kopyalama hızının kalıcı olarak düşmesi ve büyük dosyaların kaydedilmesinin uzamasıdır.",
            "Daha ciddi aşamada dosyalar bozulmaya başlar: açılmayan belgeler, hata veren oyun kurulumları, tekrarlayan mavi ekranlar. Bazı sürücüler kritik aşamada kendilerini salt okunur moda alır — mevcut verileri okuyabilirsiniz ama hiçbir şey yazamazsınız. Bu, üreticinin bilinçli tasarladığı son savunma hattıdır ve \"hemen yedek al\" anlamına gelir.",
            "En sert belirti sürücünün BIOS'ta veya Disk Yönetimi'nde hiç görünmemesidir. Bu noktada veri kurtarma genellikle profesyonel hizmet gerektirir ve sonuç garantili değildir. Bu yüzden S.M.A.R.T. değerlerinde Warning görür görmez yedek almak, kaybı önlemenin tek güvenilir yoludur.",
          ],
        },
        {
          title: "SSD Ömrünü Uzatmak İçin Ne Yapmalı, Ne Yapmamalı?",
          content: [
            "Yapılmaması gereken en önemli şey birleştirmedir (defrag). Birleştirme, verileri fiziksel olarak yeniden düzenlemek için çok sayıda yazma işlemi yapar; sabit disklerde faydalıdır, SSD'lerde ise yalnızca gereksiz aşınma yaratır. Windows bunu zaten bilir: \"Sürücüleri Birleştir ve İyileştir\" aracı bir SSD gördüğünde birleştirme değil TRIM çalıştırır. Üçüncü parti eski birleştirme programlarını SSD'de kullanmayın.",
            "Yapılması gerekenler daha basit: yeterli boş alan bırakın (%15-20), TRIM'in açık olduğundan emin olun, firmware güncellemelerini üreticinin aracıyla takip edin ve sürücüyü aşırı sıcaklıklardan koruyun. NVMe SSD'ler yoğun yük altında ısınır ve 70°C üzerinde hız kısma (throttling) yapar; sıcaklığı Get-StorageReliabilityCounter çıktısındaki Temperature değerinden izleyebilirsiniz.",
            "Gereksiz yazmayı azaltmak da işe yarar. Sürekli büyüyen önbellekler, gereksiz geçici dosyalar ve arka planda çalışan eşitleme istemcileri sessizce yazma üretir. Disk Mop'un Disk Sağlığı modülü sürücü durumunu ve TRIM'i gösterirken, Önbellek Temizleyici ve zamanlanmış temizlik bu gereksiz birikimi düzenli olarak toplar. Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "SSD sağlığını Windows'ta program kurmadan nasıl kontrol ederim?",
          answer:
            "PowerShell'i yönetici olarak açıp Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus komutunu çalıştırın; sağlıklı sürücüler Healthy döner. Daha ayrıntılı veri için Get-PhysicalDisk | Get-StorageReliabilityCounter komutu aşınma yüzdesini, sıcaklığı, okuma/yazma hatalarını ve toplam çalışma saatini verir.",
        },
        {
          question: "SSD ne kadar dayanır?",
          answer:
            "Tipik bir tüketici SSD'sinin dayanıklılığı 500 GB modellerde 150-300 TBW, 1 TB modellerde 300-600 TBW civarındadır. Günde 10-30 GB yazan ortalama bir kullanıcı yılda 4-11 TB yazar, yani bu sınıra ulaşmak on yılı aşar. Çoğu SSD dayanıklılık sınırına ulaşmadan önce eskiyip değiştirilir.",
        },
        {
          question: "\"Percentage Used\" %100 olursa SSD ölür mü?",
          answer:
            "Hayır. Bu değer üreticinin garanti ettiği dayanıklılık bütçesinin tamamının harcandığını gösterir, sürücünün o anda duracağını değil. %100'ü geçen SSD'ler yıllarca çalışmaya devam edebilir. Ancak bu noktadan sonra garanti kapsamı biter ve düzenli yedek almak çok daha önemli hale gelir.",
        },
        {
          question: "TRIM'in açık olup olmadığını nasıl anlarım?",
          answer:
            "Komut isteminde fsutil behavior query DisableDeleteNotify yazın. Dönen DisableDeleteNotify değeri 0 ise TRIM etkindir. 1 dönüyorsa fsutil behavior set DisableDeleteNotify 0 komutuyla açabilirsiniz. TRIM'in verimli çalışması için sürücüde %15-20 boş alan da bulunmalıdır.",
        },
        {
          question: "SSD birleştirilmeli (defrag) mi?",
          answer:
            "Hayır. Birleştirme çok sayıda gereksiz yazma işlemi üretir ve SSD'yi boşuna aşındırır; performansa da katkısı yoktur çünkü SSD'lerde erişim süresi konuma bağlı değildir. Windows'un Sürücüleri Birleştir ve İyileştir aracı bir SSD algıladığında zaten birleştirme yerine TRIM çalıştırır.",
        },
        {
          question: "SSD'im bozuluyorsa nasıl anlarım?",
          answer:
            "İlk belirti genellikle yazma hızının kalıcı düşmesidir. Ardından dosya bozulmaları, açılmayan belgeler ve tekrarlayan mavi ekranlar gelir. Sürücünün salt okunur moda geçmesi veya BIOS'ta hiç görünmemesi son aşamadır. S.M.A.R.T. durumunda Warning gördüğünüz anda, başka belirti beklemeden yedek alın.",
        },
      ],
      verdict: [
        "SSD sağlığını kontrol etmek için üçüncü parti programa gerek yok: PowerShell'de Get-PhysicalDisk genel durumu, Get-StorageReliabilityCounter ise aşınma, sıcaklık ve hata sayaçlarını verir. NVMe'de \"Percentage Used\", SATA'da \"Wear Leveling Count\" bakılacak temel değerlerdir.",
        "Rakamlar çoğu kullanıcı için rahatlatıcıdır: 300-600 TBW dayanıklılığa sahip modern bir SSD, normal kullanımda on yılı aşan bir ömre sahiptir. Endişelenmeniz gereken şey aşınma değil, ani arıza belirtileridir — salt okunur mod, kaybolan dosyalar ve S.M.A.R.T. uyarıları.",
        "Ömrü uzatmanın yolu basittir: %15-20 boş alan bırakın, TRIM'i açık tutun, SSD'yi asla birleştirmeyin ve gereksiz yazma üreten birikmiş önbellekleri düzenli temizleyin.",
      ],
      ctaText: "Sürücünüzün Gerçek Durumunu Görün",
    },
    en: {
      title: "How to Check SSD Health: S.M.A.R.T., TBW and Real Lifespan",
      metaDescription:
        "Find out how much life your SSD has left: S.M.A.R.T. attributes, TBW endurance ratings, TRIM verification and failure warning signs — using Windows' own built-in commands.",
      subtitle: "Which Value Matters, and When to Worry",
      intro: [
        "Short answer: open PowerShell and run Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType — a healthy drive reports Healthy. For detail, Get-PhysicalDisk | Get-StorageReliabilityCounter reports wear, temperature and total bytes written. On NVMe SSDs the attribute that matters most is \"Percentage Used\"; on SATA SSDs it is \"Wear Leveling Count\" together with \"Reallocated Sector Count\".",
        "SSDs do not die with the clicking noises of a failing hard drive; they wear down quietly and usually end by dropping into read-only mode. The good news is that a modern SSD's endurance rating is far beyond what an average user will reach in years of normal use. This guide covers how to measure your drive's real condition with tools Windows already includes, what each number actually means, and which symptoms mean you should back up immediately.",
      ],
      keyTakeaways: [
        "Get-PhysicalDisk in PowerShell reports Healthy, Warning or Unhealthy for every drive in the system.",
        "On NVMe SSDs the most meaningful indicator is \"Percentage Used\": 100% means the rated endurance budget is spent, not that the drive is about to die.",
        "A typical 1 TB consumer SSD is rated for 300-600 TBW; a user writing 30 GB a day would take well over a decade to reach that.",
        "Verify TRIM with fsutil behavior query DisableDeleteNotify — a result of 0 means TRIM is enabled.",
        "Never defragment an SSD; Windows' Optimize Drives tool runs TRIM rather than defragmentation on solid state media.",
        "If the drive goes read-only, files start disappearing, or it vanishes from the BIOS, back up immediately — those mark the point of no return.",
      ],
      howTo: {
        name: "Check SSD health on Windows",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open PowerShell as administrator",
            text: "Type PowerShell into the Start menu, right-click the result and choose Run as administrator. Some of the commands below require elevated rights.",
          },
          {
            name: "Read the overall health status",
            text: "Run Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus. The HealthStatus column should read Healthy; if you see Warning or Unhealthy, back up straight away.",
          },
          {
            name: "Look at the detailed reliability counters",
            text: "Run Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours. Wear gives the wear percentage and PowerOnHours the drive's total running time.",
          },
          {
            name: "Verify that TRIM is enabled",
            text: "In a command prompt, run fsutil behavior query DisableDeleteNotify. A returned value of 0 means TRIM is active. If it returns 1, enable it with fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Check the optimization schedule",
            text: "Open \"Defragment and Optimize Drives\" from the Start menu. Confirm that your SSD shows \"Solid state drive\" in the Media type column and that weekly optimization is enabled. On an SSD this tool runs TRIM, not defragmentation.",
          },
        ],
      },
      sections: [
        {
          title: "What Is S.M.A.R.T. and Which Attributes Matter?",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) is the standard by which drives monitor and report on their own condition. It produces dozens of values, but they are not equally meaningful; for SSDs, only a handful actually matter.",
            "On NVMe SSDs the key indicator is \"Percentage Used\". It expresses how much of the manufacturer's rated endurance budget has been consumed, so a value of 10% means one tenth of the drive's rated life is gone. \"Available Spare\" tells you how much of the reserve capacity set aside to replace failed cells remains; take it seriously if it drops below 10%.",
            "On SATA SSDs the equivalents are \"Wear Leveling Count\" and, on some manufacturers, a direct \"SSD Life Left\" reading. On either type, a \"Reallocated Sector Count\" or \"Media and Data Integrity Errors\" value that is above zero and climbing over time is the clearest sign that the drive is physically degrading.",
          ],
        },
        {
          title: "TBW: How Long Will Your SSD Actually Last?",
          content: [
            "TBW (Terabytes Written) is the total write volume the manufacturer warrants and the standard measure of SSD endurance. Typical consumer drives are rated at 150-300 TB for 500 GB models and 300-600 TB for 1 TB models. Endurance rises with capacity because writes are spread across more cells.",
            "Translating that figure into daily life reassures most users. An average user writes 10-30 GB per day, which works out to roughly 4-11 TB per year. On a drive rated for 300 TB that means a service life comfortably beyond a decade. In practice most SSDs are replaced for being outdated long before they approach their endurance limit.",
            "There are exceptions: systems that continuously edit video, work with large datasets or run virtual machines can write hundreds of gigabytes per day. If that describes your workload, checking the total bytes written in Get-StorageReliabilityCounter once a year is worth the minute it takes.",
          ],
        },
        {
          title: "Why TRIM Matters and How to Check It",
          content: [
            "An SSD cannot overwrite data in place; it has to erase the block first. The TRIM command lets the operating system tell the drive which blocks belong to deleted files so it can clear them ahead of time during idle periods. Without TRIM, every write eventually requires an erase first and performance degrades noticeably over time.",
            "TRIM has been enabled by default since Windows 7, but it can end up disabled on some installations. To check, run fsutil behavior query DisableDeleteNotify in a command prompt. A returned value of 0 means TRIM is active; if it returns 1, enable it with fsutil behavior set DisableDeleteNotify 0.",
            "TRIM also depends on free space: a permanently full drive leaves nothing to pre-clear. That is why keeping at least 15-20% of an SSD free is not merely a suggestion but a requirement for the drive to behave as designed. Disk Mop's Disk Health module reports TRIM status alongside S.M.A.R.T. attributes on a single screen.",
          ],
        },
        {
          title: "Warning Signs of SSD Failure",
          content: [
            "SSDs give no audible warning the way hard drives do, so the symptoms appear on the software side. The most common first sign is file copy speed dropping permanently and large saves taking noticeably longer.",
            "At a more serious stage, files begin to corrupt: documents that will not open, game installs that fail verification, recurring blue screens. Some drives put themselves into read-only mode at the critical point — you can read existing data but write nothing. That is a deliberate last line of defence by the manufacturer, and it means back up now.",
            "The bluntest symptom is the drive not appearing in the BIOS or in Disk Management at all. At that stage, data recovery usually requires a professional service with no guaranteed outcome. This is exactly why backing up the moment S.M.A.R.T. reports Warning is the only reliable way to avoid loss.",
          ],
        },
        {
          title: "What to Do and What to Avoid for a Longer Life",
          content: [
            "The single most important thing to avoid is defragmentation. Defragmenting performs a large number of writes to physically rearrange data; it helps on hard drives and does nothing but cause needless wear on an SSD. Windows already knows this: when \"Defragment and Optimize Drives\" detects an SSD, it runs TRIM instead. Do not point old third-party defragmenters at solid state drives.",
            "The things you should do are simpler: leave enough free space (15-20%), make sure TRIM is enabled, keep firmware current using the manufacturer's utility, and protect the drive from extreme temperatures. NVMe SSDs run hot under sustained load and throttle above about 70°C; you can watch this via the Temperature value in Get-StorageReliabilityCounter.",
            "Reducing pointless writes helps too. Ever-growing caches, redundant temporary files and background sync clients all generate writes quietly. Disk Mop's Disk Health module reports drive status and TRIM, while Cache Cleaner and scheduled cleanup keep that accumulation in check. You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "How do I check SSD health on Windows without installing anything?",
          answer:
            "Open PowerShell as administrator and run Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus; healthy drives report Healthy. For more detail, Get-PhysicalDisk | Get-StorageReliabilityCounter reports wear percentage, temperature, read and write error counts and total power-on hours.",
        },
        {
          question: "How long does an SSD last?",
          answer:
            "Typical consumer drives are rated at 150-300 TBW for 500 GB models and 300-600 TBW for 1 TB models. An average user writing 10-30 GB per day writes 4-11 TB per year, meaning it would take over a decade to reach that limit. Most SSDs are replaced for age or capacity long before endurance becomes an issue.",
        },
        {
          question: "Does the SSD die when \"Percentage Used\" reaches 100%?",
          answer:
            "No. That value indicates the manufacturer's rated endurance budget has been fully consumed, not that the drive stops working. SSDs past 100% frequently keep running for years. What does change is that warranty coverage ends and regular backups become considerably more important.",
        },
        {
          question: "How do I know whether TRIM is enabled?",
          answer:
            "Run fsutil behavior query DisableDeleteNotify in a command prompt. If DisableDeleteNotify returns 0, TRIM is enabled. If it returns 1, enable it with fsutil behavior set DisableDeleteNotify 0. For TRIM to work efficiently, the drive should also have 15-20% free space available.",
        },
        {
          question: "Should I defragment an SSD?",
          answer:
            "No. Defragmentation generates a large volume of unnecessary writes and wears the drive for no benefit, since access time on an SSD does not depend on physical location. Windows' Defragment and Optimize Drives tool already detects solid state drives and runs TRIM instead of defragmenting them.",
        },
        {
          question: "How do I know if my SSD is failing?",
          answer:
            "The first sign is usually a permanent drop in write speed. Next come file corruption, documents that will not open and recurring blue screens. The drive switching to read-only mode, or disappearing from the BIOS entirely, is the final stage. Back up the moment S.M.A.R.T. reports Warning, without waiting for further symptoms.",
        },
      ],
      verdict: [
        "You do not need third-party software to check SSD health: Get-PhysicalDisk in PowerShell gives the overall status and Get-StorageReliabilityCounter gives wear, temperature and error counters. On NVMe watch \"Percentage Used\"; on SATA watch \"Wear Leveling Count\".",
        "The numbers are reassuring for most users: a modern SSD rated at 300-600 TBW has a service life well beyond a decade under normal use. What deserves your attention is not gradual wear but sudden failure signs — read-only mode, disappearing files and S.M.A.R.T. warnings.",
        "Extending the life of an SSD comes down to a short list: keep 15-20% free, leave TRIM enabled, never defragment it, and clear the accumulated caches that generate needless writes.",
      ],
      ctaText: "See Your Drive's Real Condition",
    },
    de: {
      title: "SSD-Zustand prüfen: S.M.A.R.T., TBW und tatsächliche Lebensdauer",
      metaDescription:
        "So ermitteln Sie, wie viel Leben Ihre SSD noch hat: S.M.A.R.T.-Werte, TBW-Ausdauer, TRIM-Prüfung und Ausfallanzeichen — mit den Bordmitteln von Windows.",
      subtitle: "Welcher Wert zählt und wann Sie handeln sollten",
      intro: [
        "Kurze Antwort: Öffnen Sie PowerShell und führen Sie Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType aus — ein gesundes Laufwerk meldet Healthy. Für Details liefert Get-PhysicalDisk | Get-StorageReliabilityCounter Abnutzung, Temperatur und geschriebene Datenmenge. Bei NVMe-SSDs ist \"Percentage Used\" der wichtigste Wert, bei SATA-SSDs sind es \"Wear Leveling Count\" und \"Reallocated Sector Count\".",
        "SSDs sterben nicht mit den Klickgeräuschen einer defekten Festplatte; sie nutzen sich still ab und enden meist im schreibgeschützten Modus. Die gute Nachricht: Die Ausdauer moderner SSDs liegt weit jenseits dessen, was normale Nutzung in Jahren erreicht. Dieser Ratgeber zeigt, wie Sie den tatsächlichen Zustand mit den Bordmitteln von Windows messen, was die einzelnen Werte bedeuten und bei welchen Symptomen Sie sofort sichern sollten.",
      ],
      keyTakeaways: [
        "Get-PhysicalDisk in PowerShell meldet für jedes Laufwerk Healthy, Warning oder Unhealthy.",
        "Bei NVMe-SSDs ist \"Percentage Used\" der aussagekräftigste Wert: 100 % bedeutet, das zugesicherte Ausdauerbudget ist aufgebraucht — nicht, dass das Laufwerk gleich ausfällt.",
        "Eine typische 1-TB-Consumer-SSD ist für 300-600 TBW spezifiziert; wer täglich 30 GB schreibt, braucht dafür weit über ein Jahrzehnt.",
        "Prüfen Sie TRIM mit fsutil behavior query DisableDeleteNotify — der Wert 0 bedeutet, TRIM ist aktiv.",
        "Defragmentieren Sie eine SSD niemals; das Windows-Werkzeug Laufwerke optimieren führt bei Flash-Speicher TRIM statt Defragmentierung aus.",
        "Wechselt das Laufwerk in den Schreibschutz, verschwinden Dateien oder taucht es im BIOS nicht mehr auf, sichern Sie sofort — das ist der Punkt ohne Wiederkehr.",
      ],
      howTo: {
        name: "SSD-Zustand unter Windows prüfen",
        totalTime: "PT10M",
        steps: [
          {
            name: "PowerShell als Administrator öffnen",
            text: "Geben Sie PowerShell im Startmenü ein, klicken Sie mit der rechten Maustaste auf das Ergebnis und wählen Sie Als Administrator ausführen. Einige der folgenden Befehle benötigen erhöhte Rechte.",
          },
          {
            name: "Den allgemeinen Zustand auslesen",
            text: "Führen Sie Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus aus. In der Spalte HealthStatus sollte Healthy stehen; bei Warning oder Unhealthy sichern Sie umgehend Ihre Daten.",
          },
          {
            name: "Die detaillierten Zuverlässigkeitszähler ansehen",
            text: "Führen Sie Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours aus. Wear gibt den Abnutzungsgrad in Prozent an, PowerOnHours die gesamte Betriebszeit.",
          },
          {
            name: "Prüfen, ob TRIM aktiviert ist",
            text: "Führen Sie in der Eingabeaufforderung fsutil behavior query DisableDeleteNotify aus. Der Rückgabewert 0 bedeutet, TRIM ist aktiv. Bei 1 aktivieren Sie es mit fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Den Optimierungszeitplan kontrollieren",
            text: "Öffnen Sie über das Startmenü \"Laufwerke defragmentieren und optimieren\". Vergewissern Sie sich, dass Ihre SSD in der Spalte Medientyp als \"Solid-State-Laufwerk\" erkannt wird und die wöchentliche Optimierung aktiv ist. Bei einer SSD führt dieses Werkzeug TRIM aus, keine Defragmentierung.",
          },
        ],
      },
      sections: [
        {
          title: "Was ist S.M.A.R.T. und welche Werte zählen?",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) ist der Standard, über den Laufwerke ihren eigenen Zustand überwachen und melden. Er liefert Dutzende Werte, die keineswegs alle gleich aussagekräftig sind; bei SSDs zählt nur eine Handvoll davon wirklich.",
            "Bei NVMe-SSDs ist \"Percentage Used\" der Schlüsselwert. Er gibt an, wie viel des vom Hersteller zugesicherten Ausdauerbudgets verbraucht ist — 10 % bedeutet also, ein Zehntel der spezifizierten Lebensdauer ist aufgebraucht. \"Available Spare\" zeigt, wie viel Reservekapazität zum Ersetzen ausgefallener Zellen noch vorhanden ist; fällt dieser Wert unter 10 %, sollten Sie ihn ernst nehmen.",
            "Bei SATA-SSDs entsprechen dem \"Wear Leveling Count\" und bei manchen Herstellern eine direkte Anzeige \"SSD Life Left\". Bei beiden Typen gilt: Ein \"Reallocated Sector Count\" oder \"Media and Data Integrity Errors\" oberhalb von null, der im Lauf der Zeit steigt, ist das deutlichste Zeichen für eine physische Degradation.",
          ],
        },
        {
          title: "TBW: Wie lange hält eine SSD wirklich?",
          content: [
            "TBW (Terabytes Written) ist die vom Hersteller garantierte Gesamtschreibmenge und das Standardmaß für SSD-Ausdauer. Typische Consumer-Laufwerke sind mit 150-300 TB bei 500-GB-Modellen und 300-600 TB bei 1-TB-Modellen spezifiziert. Mit der Kapazität steigt die Ausdauer, weil sich Schreibvorgänge auf mehr Zellen verteilen.",
            "Übersetzt in den Alltag beruhigt diese Zahl die meisten Nutzer. Ein durchschnittlicher Anwender schreibt 10-30 GB pro Tag, also etwa 4-11 TB im Jahr. Bei einem für 300 TB spezifizierten Laufwerk ergibt das eine Nutzungsdauer von deutlich über einem Jahrzehnt. In der Praxis werden die meisten SSDs wegen Alter oder Kapazität ersetzt, lange bevor die Ausdauergrenze relevant wird.",
            "Es gibt Ausnahmen: Systeme, die dauerhaft Video schneiden, mit großen Datensätzen arbeiten oder virtuelle Maschinen betreiben, schreiben leicht hunderte Gigabyte täglich. Trifft das auf Sie zu, lohnt es sich, die geschriebene Gesamtmenge in Get-StorageReliabilityCounter einmal jährlich zu prüfen.",
          ],
        },
        {
          title: "Warum TRIM wichtig ist und wie Sie es prüfen",
          content: [
            "Eine SSD kann Daten nicht direkt überschreiben, sie muss den Block zuvor löschen. Der TRIM-Befehl erlaubt dem Betriebssystem, dem Laufwerk mitzuteilen, welche Blöcke zu gelöschten Dateien gehören, damit sie in Ruhephasen vorab bereinigt werden. Ohne TRIM erfordert jeder Schreibvorgang irgendwann erst ein Löschen, und die Leistung sinkt spürbar.",
            "Seit Windows 7 ist TRIM standardmäßig aktiv, kann in einzelnen Installationen aber deaktiviert sein. Zur Prüfung führen Sie fsutil behavior query DisableDeleteNotify in der Eingabeaufforderung aus. Der Rückgabewert 0 bedeutet aktiv; bei 1 aktivieren Sie TRIM mit fsutil behavior set DisableDeleteNotify 0.",
            "TRIM hängt außerdem von freiem Platz ab: Ein dauerhaft volles Laufwerk bietet nichts zum Vorbereinigen. Deshalb sind 15-20 % freier Speicher auf einer SSD keine bloße Empfehlung, sondern Voraussetzung dafür, dass das Laufwerk wie vorgesehen arbeitet. Das Modul Datenträgerzustand von Disk Mop zeigt den TRIM-Status zusammen mit den S.M.A.R.T.-Werten auf einem Bildschirm.",
          ],
        },
        {
          title: "Anzeichen eines SSD-Ausfalls",
          content: [
            "SSDs warnen nicht akustisch wie Festplatten, die Symptome zeigen sich daher auf der Softwareseite. Das häufigste erste Anzeichen ist eine dauerhaft gesunkene Kopiergeschwindigkeit und spürbar längeres Speichern großer Dateien.",
            "In einem ernsteren Stadium beginnen Dateien zu korrumpieren: Dokumente lassen sich nicht mehr öffnen, Spielinstallationen scheitern an der Prüfung, blaue Bildschirme häufen sich. Manche Laufwerke schalten am kritischen Punkt in den Schreibschutz — vorhandene Daten lassen sich lesen, aber nichts mehr schreiben. Das ist eine bewusst eingebaute letzte Verteidigungslinie und bedeutet: sofort sichern.",
            "Das deutlichste Symptom ist ein Laufwerk, das im BIOS oder in der Datenträgerverwaltung gar nicht mehr erscheint. Dann erfordert die Datenrettung in der Regel professionelle Hilfe ohne Erfolgsgarantie. Genau deshalb ist eine Sicherung beim ersten Warning im S.M.A.R.T.-Status der einzig verlässliche Schutz vor Verlust.",
          ],
        },
        {
          title: "Was der Lebensdauer hilft — und was ihr schadet",
          content: [
            "Am wichtigsten ist, was Sie unterlassen sollten: defragmentieren. Eine Defragmentierung erzeugt sehr viele Schreibvorgänge, um Daten physisch umzuordnen; bei Festplatten hilft das, bei SSDs verursacht es nur unnötigen Verschleiß. Windows weiß das bereits: Erkennt \"Laufwerke defragmentieren und optimieren\" eine SSD, führt es TRIM aus. Setzen Sie keine alten Defragmentierungsprogramme von Drittanbietern auf SSDs an.",
            "Was Sie tun sollten, ist einfacher: genügend freien Platz lassen (15-20 %), TRIM aktiviert halten, Firmware mit dem Herstellerwerkzeug aktuell halten und das Laufwerk vor extremen Temperaturen schützen. NVMe-SSDs werden unter Dauerlast heiß und drosseln oberhalb von etwa 70 °C; die Temperatur können Sie über den Wert Temperature in Get-StorageReliabilityCounter verfolgen.",
            "Auch unnötige Schreibvorgänge zu reduzieren hilft. Stetig wachsende Caches, überflüssige temporäre Dateien und im Hintergrund laufende Synchronisierungsclients erzeugen still Schreiblast. Das Modul Datenträgerzustand von Disk Mop zeigt Laufwerkszustand und TRIM, während Cache Cleaner und geplante Bereinigung diese Ansammlung regelmäßig abtragen. Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Wie prüfe ich den SSD-Zustand unter Windows ohne Zusatzsoftware?",
          answer:
            "Öffnen Sie PowerShell als Administrator und führen Sie Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus aus; gesunde Laufwerke melden Healthy. Für mehr Details liefert Get-PhysicalDisk | Get-StorageReliabilityCounter Abnutzung in Prozent, Temperatur, Lese- und Schreibfehlerzähler sowie die gesamte Betriebszeit.",
        },
        {
          question: "Wie lange hält eine SSD?",
          answer:
            "Typische Consumer-Laufwerke sind mit 150-300 TBW bei 500-GB-Modellen und 300-600 TBW bei 1-TB-Modellen spezifiziert. Wer täglich 10-30 GB schreibt, kommt auf 4-11 TB pro Jahr — bis zu dieser Grenze vergeht also über ein Jahrzehnt. Die meisten SSDs werden lange vorher aus Alters- oder Kapazitätsgründen ersetzt.",
        },
        {
          question: "Stirbt die SSD, wenn \"Percentage Used\" 100 % erreicht?",
          answer:
            "Nein. Der Wert zeigt an, dass das zugesicherte Ausdauerbudget vollständig verbraucht ist, nicht dass das Laufwerk seinen Dienst einstellt. SSDs jenseits der 100 % laufen häufig noch jahrelang. Es endet allerdings die Garantie, und regelmäßige Sicherungen werden deutlich wichtiger.",
        },
        {
          question: "Woran erkenne ich, ob TRIM aktiviert ist?",
          answer:
            "Führen Sie fsutil behavior query DisableDeleteNotify in der Eingabeaufforderung aus. Gibt DisableDeleteNotify 0 zurück, ist TRIM aktiv. Bei 1 aktivieren Sie es mit fsutil behavior set DisableDeleteNotify 0. Damit TRIM effizient arbeitet, sollten zusätzlich 15-20 % des Laufwerks frei sein.",
        },
        {
          question: "Sollte man eine SSD defragmentieren?",
          answer:
            "Nein. Eine Defragmentierung erzeugt eine große Menge unnötiger Schreibvorgänge und nutzt das Laufwerk ohne Gegenwert ab, da die Zugriffszeit bei einer SSD nicht vom physischen Ort abhängt. Das Windows-Werkzeug Laufwerke defragmentieren und optimieren erkennt SSDs und führt stattdessen TRIM aus.",
        },
        {
          question: "Woran merke ich, dass meine SSD ausfällt?",
          answer:
            "Das erste Anzeichen ist meist eine dauerhaft gesunkene Schreibgeschwindigkeit. Danach folgen beschädigte Dateien, Dokumente, die sich nicht öffnen lassen, und wiederkehrende Bluescreens. Der Wechsel in den Schreibschutz oder das vollständige Verschwinden aus dem BIOS ist das Endstadium. Sichern Sie Ihre Daten, sobald S.M.A.R.T. Warning meldet, ohne weitere Symptome abzuwarten.",
        },
      ],
      verdict: [
        "Für die Zustandsprüfung einer SSD braucht es keine Zusatzsoftware: Get-PhysicalDisk liefert in PowerShell den Gesamtstatus, Get-StorageReliabilityCounter die Werte zu Abnutzung, Temperatur und Fehlern. Bei NVMe achten Sie auf \"Percentage Used\", bei SATA auf \"Wear Leveling Count\".",
        "Die Zahlen sind für die meisten Nutzer beruhigend: Eine moderne SSD mit 300-600 TBW hält bei normaler Nutzung weit über ein Jahrzehnt. Aufmerksamkeit verdient nicht die allmähliche Abnutzung, sondern plötzliche Ausfallanzeichen — Schreibschutz, verschwindende Dateien und S.M.A.R.T.-Warnungen.",
        "Die Lebensdauer verlängert sich mit einer kurzen Liste: 15-20 % frei lassen, TRIM aktiviert halten, niemals defragmentieren und die angesammelten Caches entfernen, die unnötige Schreiblast erzeugen.",
      ],
      ctaText: "Sehen Sie den echten Zustand Ihres Laufwerks",
    },
    fr: {
      title: "Comment vérifier la santé d'un SSD : S.M.A.R.T., TBW et durée de vie réelle",
      metaDescription:
        "Savoir combien de vie il reste à votre SSD : valeurs S.M.A.R.T., endurance TBW, vérification de TRIM et signes de panne, avec les outils intégrés à Windows.",
      subtitle: "Quelle valeur regarder, et à partir de quand s'inquiéter",
      intro: [
        "Réponse courte : ouvrez PowerShell et exécutez Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType — un disque en bon état renvoie Healthy. Pour le détail, Get-PhysicalDisk | Get-StorageReliabilityCounter indique l'usure, la température et le volume total écrit. Sur les SSD NVMe, la valeur qui compte le plus est « Percentage Used » ; sur les SSD SATA, ce sont « Wear Leveling Count » et « Reallocated Sector Count ».",
        "Un SSD ne meurt pas avec les cliquetis d'un disque dur en fin de vie : il s'use en silence et finit généralement par basculer en lecture seule. La bonne nouvelle, c'est que l'endurance d'un SSD moderne dépasse largement ce qu'un usage normal atteint en plusieurs années. Ce guide explique comment mesurer l'état réel de votre disque avec les outils déjà présents dans Windows, ce que signifie concrètement chaque chiffre et quels symptômes imposent une sauvegarde immédiate.",
      ],
      keyTakeaways: [
        "Dans PowerShell, Get-PhysicalDisk renvoie l'état Healthy, Warning ou Unhealthy pour chaque disque du système.",
        "Sur un SSD NVMe, l'indicateur le plus parlant est « Percentage Used » : 100 % signifie que le budget d'endurance annoncé est consommé, pas que le disque va s'arrêter.",
        "Un SSD grand public de 1 TB est généralement donné pour 300-600 TBW ; en écrivant 30 GB par jour, il faut bien plus de dix ans pour y arriver.",
        "Vérifiez TRIM avec fsutil behavior query DisableDeleteNotify : une valeur de 0 signifie que TRIM est actif.",
        "Ne défragmentez jamais un SSD : sur un support flash, l'outil Défragmenter et optimiser les lecteurs de Windows exécute TRIM et non une défragmentation.",
        "Si le disque passe en lecture seule, que des fichiers disparaissent ou qu'il n'apparaît plus dans le BIOS, sauvegardez immédiatement : c'est le point de non-retour.",
      ],
      howTo: {
        name: "Vérifier la santé d'un SSD sous Windows",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir PowerShell en administrateur",
            text: "Tapez PowerShell dans le menu Démarrer, faites un clic droit sur le résultat et choisissez Exécuter en tant qu'administrateur. Certaines des commandes ci-dessous exigent des droits élevés.",
          },
          {
            name: "Lire l'état de santé général",
            text: "Exécutez Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus. La colonne HealthStatus doit afficher Healthy ; si vous y lisez Warning ou Unhealthy, sauvegardez sans attendre.",
          },
          {
            name: "Consulter les compteurs de fiabilité détaillés",
            text: "Exécutez Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours. Wear donne le taux d'usure en pourcentage et PowerOnHours le temps de fonctionnement total du disque.",
          },
          {
            name: "Vérifier que TRIM est actif",
            text: "Dans une invite de commandes, exécutez fsutil behavior query DisableDeleteNotify. Une valeur renvoyée de 0 signifie que TRIM est actif. Si elle vaut 1, activez-le avec fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Contrôler la planification de l'optimisation",
            text: "Ouvrez « Défragmenter et optimiser les lecteurs » depuis le menu Démarrer. Vérifiez que votre SSD est bien identifié comme lecteur à état solide dans la colonne Type de support et que l'optimisation hebdomadaire est activée. Sur un SSD, cet outil exécute TRIM et non une défragmentation.",
          },
        ],
      },
      sections: [
        {
          title: "Qu'est-ce que S.M.A.R.T. et quelles valeurs comptent vraiment ?",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) est le standard par lequel les disques surveillent et rapportent leur propre état. Il produit des dizaines de valeurs, mais elles ne se valent pas toutes ; sur un SSD, une poignée d'entre elles seulement est réellement utile.",
            "Sur les SSD NVMe, l'indicateur clé est « Percentage Used ». Il exprime la part du budget d'endurance annoncé par le fabricant qui a déjà été consommée : une valeur de 10 % signifie qu'un dixième de la durée de vie spécifiée est parti. « Available Spare » indique de son côté combien il reste de capacité de réserve destinée à remplacer les cellules défaillantes ; prenez cette valeur au sérieux si elle descend sous 10 %.",
            "Sur les SSD SATA, les équivalents sont « Wear Leveling Count » et, chez certains fabricants, une lecture directe « SSD Life Left ». Dans les deux cas, un « Reallocated Sector Count » ou des « Media and Data Integrity Errors » supérieurs à zéro et qui augmentent avec le temps constituent le signe le plus net d'une dégradation physique du disque.",
          ],
        },
        {
          title: "TBW : combien de temps votre SSD va-t-il réellement durer ?",
          content: [
            "Le TBW (Terabytes Written) correspond au volume total d'écriture garanti par le fabricant ; c'est la mesure standard de l'endurance d'un SSD. Les modèles grand public sont typiquement donnés pour 150-300 TB en 500 GB et 300-600 TB en 1 TB. L'endurance augmente avec la capacité, car les écritures se répartissent sur davantage de cellules.",
            "Traduit en usage quotidien, ce chiffre rassure la plupart des utilisateurs. Un utilisateur moyen écrit 10-30 GB par jour, soit environ 4-11 TB par an. Sur un disque donné pour 300 TB, cela représente une durée de service confortablement supérieure à dix ans. Dans les faits, la plupart des SSD sont remplacés pour cause d'obsolescence bien avant d'approcher leur limite d'endurance.",
            "Il existe des exceptions : les machines qui montent de la vidéo en continu, traitent de gros jeux de données ou font tourner des machines virtuelles écrivent facilement plusieurs centaines de gigaoctets par jour. Si cela correspond à votre usage, vérifier une fois par an le volume total écrit dans Get-StorageReliabilityCounter vaut la minute que cela prend.",
          ],
        },
        {
          title: "Pourquoi TRIM est important et comment le vérifier",
          content: [
            "Un SSD ne peut pas réécrire les données par-dessus les anciennes : il doit d'abord effacer le bloc. La commande TRIM permet au système d'exploitation d'indiquer au disque quels blocs appartiennent à des fichiers supprimés, afin qu'il les nettoie à l'avance pendant les périodes d'inactivité. Sans TRIM, chaque écriture finit par exiger un effacement préalable et les performances se dégradent nettement avec le temps.",
            "TRIM est activé par défaut depuis Windows 7, mais il arrive qu'il soit désactivé sur certaines installations. Pour le vérifier, exécutez fsutil behavior query DisableDeleteNotify dans une invite de commandes. Une valeur renvoyée de 0 signifie que TRIM est actif ; si elle vaut 1, activez-le avec fsutil behavior set DisableDeleteNotify 0.",
            "TRIM dépend aussi de l'espace libre : un disque en permanence plein ne lui laisse rien à pré-nettoyer. C'est pourquoi garder au moins 15-20 % d'un SSD libre n'est pas une simple recommandation, mais une condition pour que le disque se comporte comme prévu. Le module Santé du disque (Disk Health) de Disk Mop affiche l'état de TRIM à côté des valeurs S.M.A.R.T., sur un seul écran.",
          ],
        },
        {
          title: "Les signes annonciateurs d'une panne de SSD",
          content: [
            "Un SSD n'émet aucun avertissement sonore, contrairement à un disque dur : les symptômes apparaissent donc du côté logiciel. Le premier signe le plus courant est une vitesse de copie qui chute durablement et des enregistrements de gros fichiers qui prennent visiblement plus de temps.",
            "À un stade plus avancé, les fichiers commencent à se corrompre : documents qui ne s'ouvrent plus, installations de jeux qui échouent à la vérification, écrans bleus à répétition. Certains disques se placent d'eux-mêmes en lecture seule au moment critique — vous pouvez lire les données existantes, mais plus rien écrire. C'est une dernière ligne de défense volontairement prévue par le fabricant, et elle signifie : sauvegardez maintenant.",
            "Le symptôme le plus brutal est un disque qui n'apparaît plus du tout dans le BIOS ni dans la Gestion des disques. À ce stade, la récupération de données passe généralement par un service professionnel, sans garantie de résultat. C'est exactement pour cela que sauvegarder dès que S.M.A.R.T. affiche Warning reste le seul moyen fiable d'éviter la perte.",
          ],
        },
        {
          title: "Ce qu'il faut faire — et éviter — pour prolonger la durée de vie",
          content: [
            "La chose la plus importante à éviter est la défragmentation. Défragmenter effectue un très grand nombre d'écritures pour réorganiser physiquement les données : c'est utile sur un disque dur, mais cela ne provoque qu'une usure inutile sur un SSD. Windows le sait déjà : lorsque « Défragmenter et optimiser les lecteurs » détecte un SSD, il exécute TRIM à la place. N'utilisez pas d'anciens défragmenteurs tiers sur un disque à état solide.",
            "Ce qu'il faut faire est plus simple : laisser assez d'espace libre (15-20 %), s'assurer que TRIM est actif, maintenir le micrologiciel à jour avec l'utilitaire du fabricant et protéger le disque des températures extrêmes. Les SSD NVMe chauffent sous charge soutenue et réduisent leur vitesse au-delà de 70 °C environ ; vous pouvez suivre cela via la valeur Temperature de Get-StorageReliabilityCounter.",
            "Réduire les écritures inutiles aide également. Les caches qui grossissent sans fin, les fichiers temporaires redondants et les clients de synchronisation en arrière-plan génèrent tous des écritures en silence. Le module Santé du disque (Disk Health) de Disk Mop affiche l'état du disque et de TRIM, tandis que le Nettoyeur de cache (Cache Cleaner) et le nettoyage planifié contiennent cette accumulation. Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Comment vérifier la santé d'un SSD sous Windows sans rien installer ?",
          answer:
            "Ouvrez PowerShell en tant qu'administrateur et exécutez Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus ; un disque en bon état renvoie Healthy. Pour plus de détail, Get-PhysicalDisk | Get-StorageReliabilityCounter donne le taux d'usure, la température, les compteurs d'erreurs de lecture et d'écriture ainsi que le temps de fonctionnement total.",
        },
        {
          question: "Combien de temps dure un SSD ?",
          answer:
            "Les modèles grand public sont donnés pour 150-300 TBW en 500 GB et 300-600 TBW en 1 TB. Un utilisateur moyen qui écrit 10-30 GB par jour écrit 4-11 TB par an : atteindre cette limite demanderait plus de dix ans. La plupart des SSD sont remplacés pour cause d'âge ou de capacité bien avant que l'endurance ne devienne un sujet.",
        },
        {
          question: "Le SSD meurt-il quand « Percentage Used » atteint 100 % ?",
          answer:
            "Non. Cette valeur indique que le budget d'endurance annoncé par le fabricant est entièrement consommé, pas que le disque cesse de fonctionner. Des SSD au-delà de 100 % continuent souvent de tourner pendant des années. Ce qui change, c'est que la garantie prend fin et que les sauvegardes régulières deviennent nettement plus importantes.",
        },
        {
          question: "Comment savoir si TRIM est activé ?",
          answer:
            "Exécutez fsutil behavior query DisableDeleteNotify dans une invite de commandes. Si DisableDeleteNotify renvoie 0, TRIM est activé. S'il renvoie 1, activez-le avec fsutil behavior set DisableDeleteNotify 0. Pour que TRIM travaille efficacement, le disque doit également disposer de 15-20 % d'espace libre.",
        },
        {
          question: "Faut-il défragmenter un SSD ?",
          answer:
            "Non. La défragmentation génère un volume important d'écritures inutiles et use le disque sans aucun bénéfice, puisque le temps d'accès d'un SSD ne dépend pas de l'emplacement physique des données. L'outil Défragmenter et optimiser les lecteurs de Windows détecte déjà les disques à état solide et exécute TRIM au lieu de les défragmenter.",
        },
        {
          question: "Comment savoir si mon SSD est en train de lâcher ?",
          answer:
            "Le premier signe est en général une baisse durable de la vitesse d'écriture. Viennent ensuite des fichiers corrompus, des documents qui ne s'ouvrent plus et des écrans bleus à répétition. Le passage en lecture seule, ou la disparition pure et simple du disque dans le BIOS, marque le stade final. Sauvegardez dès que S.M.A.R.T. affiche Warning, sans attendre d'autres symptômes.",
        },
      ],
      verdict: [
        "Vérifier la santé d'un SSD ne demande aucun logiciel tiers : dans PowerShell, Get-PhysicalDisk donne l'état général et Get-StorageReliabilityCounter fournit l'usure, la température et les compteurs d'erreurs. Sur NVMe, surveillez « Percentage Used » ; sur SATA, « Wear Leveling Count ».",
        "Les chiffres sont rassurants pour la plupart des utilisateurs : un SSD moderne donné pour 300-600 TBW tient bien plus de dix ans en usage normal. Ce qui mérite votre attention n'est pas l'usure progressive, mais les signes de panne soudaine — mode lecture seule, fichiers qui disparaissent et avertissements S.M.A.R.T.",
        "Prolonger la vie d'un SSD tient en une courte liste : garder 15-20 % d'espace libre, laisser TRIM activé, ne jamais le défragmenter et supprimer régulièrement les caches accumulés qui génèrent des écritures inutiles.",
      ],
      ctaText: "Découvrez l'état réel de votre disque",
    },
    es: {
      title: "Cómo comprobar la salud de un SSD: S.M.A.R.T., TBW y vida útil real",
      metaDescription:
        "Descubre cuánta vida le queda a tu SSD: valores S.M.A.R.T., resistencia TBW, comprobación de TRIM y señales de fallo, con las herramientas que ya trae Windows.",
      subtitle: "Qué valor mirar y cuándo hay que preocuparse",
      intro: [
        "Respuesta corta: abre PowerShell y ejecuta Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType; una unidad sana devuelve Healthy. Para el detalle, Get-PhysicalDisk | Get-StorageReliabilityCounter informa del desgaste, la temperatura y el total de datos escritos. En los SSD NVMe el valor que más importa es «Percentage Used»; en los SSD SATA son «Wear Leveling Count» junto a «Reallocated Sector Count».",
        "Los SSD no mueren con los chasquidos de un disco duro averiado: se desgastan en silencio y suelen acabar pasando a modo de solo lectura. La buena noticia es que la resistencia de un SSD moderno queda muy por encima de lo que un usuario medio alcanza en años de uso normal. Esta guía explica cómo medir el estado real de tu unidad con herramientas que Windows ya incluye, qué significa de verdad cada cifra y qué síntomas obligan a hacer una copia de seguridad de inmediato.",
      ],
      keyTakeaways: [
        "Get-PhysicalDisk en PowerShell devuelve el estado Healthy, Warning o Unhealthy de cada unidad del sistema.",
        "En los SSD NVMe el indicador más significativo es «Percentage Used»: el 100 % indica que se ha agotado el presupuesto de resistencia declarado, no que la unidad vaya a morir.",
        "Un SSD de consumo de 1 TB suele estar declarado para 300-600 TBW; escribiendo 30 GB al día se tarda bastante más de una década en llegar a ese límite.",
        "Comprueba TRIM con fsutil behavior query DisableDeleteNotify: un resultado de 0 significa que TRIM está activo.",
        "No desfragmentes nunca un SSD; en memoria flash, la herramienta Desfragmentar y optimizar unidades de Windows ejecuta TRIM en lugar de desfragmentar.",
        "Si la unidad pasa a solo lectura, empiezan a desaparecer archivos o deja de verse en la BIOS, haz una copia de seguridad ya: ese es el punto de no retorno.",
      ],
      howTo: {
        name: "Comprobar la salud de un SSD en Windows",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abrir PowerShell como administrador",
            text: "Escribe PowerShell en el menú Inicio, haz clic derecho en el resultado y elige Ejecutar como administrador. Algunos de los comandos siguientes requieren permisos elevados.",
          },
          {
            name: "Leer el estado de salud general",
            text: "Ejecuta Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus. En la columna HealthStatus deberías ver Healthy; si aparece Warning o Unhealthy, haz una copia de seguridad de inmediato.",
          },
          {
            name: "Consultar los contadores de fiabilidad detallados",
            text: "Ejecuta Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours. Wear indica el porcentaje de desgaste y PowerOnHours el tiempo total de funcionamiento de la unidad.",
          },
          {
            name: "Verificar que TRIM está activado",
            text: "En el símbolo del sistema, ejecuta fsutil behavior query DisableDeleteNotify. Un valor devuelto de 0 significa que TRIM está activo. Si devuelve 1, actívalo con fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Revisar la programación de la optimización",
            text: "Abre «Desfragmentar y optimizar unidades» desde el menú Inicio. Confirma que tu SSD aparece como unidad de estado sólido en la columna Tipo de medio y que la optimización semanal está activada. En un SSD, esta herramienta ejecuta TRIM, no una desfragmentación.",
          },
        ],
      },
      sections: [
        {
          title: "¿Qué es S.M.A.R.T. y qué valores importan?",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) es el estándar con el que las unidades vigilan e informan de su propio estado. Genera decenas de valores, pero no todos son igual de significativos; en un SSD solo un puñado resulta realmente útil.",
            "En los SSD NVMe el indicador clave es «Percentage Used». Expresa qué parte del presupuesto de resistencia declarado por el fabricante se ha consumido, así que un valor del 10 % significa que se ha gastado una décima parte de la vida declarada. «Available Spare» indica cuánta capacidad de reserva queda para sustituir celdas defectuosas; tómatelo en serio si baja del 10 %.",
            "En los SSD SATA los equivalentes son «Wear Leveling Count» y, en algunos fabricantes, una lectura directa de «SSD Life Left». En ambos tipos, un «Reallocated Sector Count» o unos «Media and Data Integrity Errors» por encima de cero y en aumento con el tiempo son la señal más clara de que la unidad se está degradando físicamente.",
          ],
        },
        {
          title: "TBW: ¿cuánto dura de verdad un SSD?",
          content: [
            "El TBW (Terabytes Written) es el volumen total de escritura que garantiza el fabricante y la medida estándar de la resistencia de un SSD. Las unidades de consumo típicas están declaradas en 150-300 TB para los modelos de 500 GB y en 300-600 TB para los de 1 TB. La resistencia sube con la capacidad, porque las escrituras se reparten entre más celdas.",
            "Traducir esa cifra al día a día tranquiliza a la mayoría. Un usuario medio escribe 10-30 GB diarios, es decir, unos 4-11 TB al año. En una unidad declarada para 300 TB eso supone una vida útil holgadamente superior a una década. En la práctica, la mayoría de los SSD se sustituyen por quedarse anticuados mucho antes de acercarse a su límite de resistencia.",
            "Hay excepciones: los equipos que editan vídeo de forma continua, trabajan con grandes conjuntos de datos o ejecutan máquinas virtuales pueden escribir cientos de gigabytes al día. Si ese es tu caso, revisar una vez al año el total escrito en Get-StorageReliabilityCounter compensa el minuto que cuesta.",
          ],
        },
        {
          title: "Por qué TRIM importa y cómo comprobarlo",
          content: [
            "Un SSD no puede sobrescribir datos en el sitio: antes tiene que borrar el bloque. El comando TRIM permite que el sistema operativo le diga a la unidad qué bloques pertenecen a archivos eliminados para que los limpie por adelantado en los periodos de inactividad. Sin TRIM, cada escritura acaba exigiendo un borrado previo y el rendimiento se degrada de forma notable con el tiempo.",
            "TRIM está activado por defecto desde Windows 7, pero en algunas instalaciones puede acabar desactivado. Para comprobarlo, ejecuta fsutil behavior query DisableDeleteNotify en el símbolo del sistema. Un valor devuelto de 0 significa que TRIM está activo; si devuelve 1, actívalo con fsutil behavior set DisableDeleteNotify 0.",
            "TRIM también depende del espacio libre: una unidad permanentemente llena no le deja nada que limpiar por adelantado. Por eso mantener al menos un 15-20 % del SSD libre no es una simple recomendación, sino un requisito para que la unidad se comporte como fue diseñada. El módulo Estado del disco (Disk Health) de Disk Mop muestra el estado de TRIM junto a los valores S.M.A.R.T. en una sola pantalla.",
          ],
        },
        {
          title: "Señales de que un SSD está fallando",
          content: [
            "Los SSD no avisan con ruido como los discos duros, así que los síntomas aparecen en el lado del software. La primera señal más habitual es que la velocidad de copia baja de forma permanente y guardar archivos grandes tarda mucho más.",
            "En una fase más grave los archivos empiezan a corromperse: documentos que no abren, instalaciones de juegos que fallan la verificación, pantallazos azules recurrentes. Algunas unidades se ponen solas en modo de solo lectura al llegar al punto crítico: puedes leer los datos existentes, pero no escribir nada. Es una última línea de defensa que el fabricante ha diseñado a propósito y significa hacer copia de seguridad ahora mismo.",
            "El síntoma más rotundo es que la unidad no aparezca en la BIOS ni en Administración de discos. A esas alturas, la recuperación de datos suele requerir un servicio profesional y sin resultado garantizado. Justo por eso, hacer una copia en cuanto S.M.A.R.T. informa de Warning es la única forma fiable de evitar la pérdida.",
          ],
        },
        {
          title: "Qué hacer y qué evitar para alargar la vida útil",
          content: [
            "Lo más importante que hay que evitar es la desfragmentación. Desfragmentar realiza una enorme cantidad de escrituras para reordenar físicamente los datos; en un disco duro ayuda, en un SSD solo genera desgaste inútil. Windows ya lo sabe: cuando «Desfragmentar y optimizar unidades» detecta un SSD, ejecuta TRIM en su lugar. No apuntes viejos desfragmentadores de terceros a una unidad de estado sólido.",
            "Lo que sí conviene hacer es más sencillo: dejar espacio libre suficiente (15-20 %), asegurarte de que TRIM está activo, mantener el firmware al día con la utilidad del fabricante y proteger la unidad de las temperaturas extremas. Los SSD NVMe se calientan bajo carga sostenida y reducen su velocidad por encima de unos 70 °C; puedes vigilarlo con el valor Temperature de Get-StorageReliabilityCounter.",
            "Reducir las escrituras innecesarias también ayuda. Las cachés que crecen sin parar, los archivos temporales redundantes y los clientes de sincronización en segundo plano generan escrituras en silencio. El módulo Estado del disco (Disk Health) de Disk Mop muestra el estado de la unidad y de TRIM, mientras que el Limpiador de caché (Cache Cleaner) y la limpieza programada mantienen a raya esa acumulación. Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Cómo compruebo la salud de un SSD en Windows sin instalar nada?",
          answer:
            "Abre PowerShell como administrador y ejecuta Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus; las unidades sanas devuelven Healthy. Para más detalle, Get-PhysicalDisk | Get-StorageReliabilityCounter muestra el porcentaje de desgaste, la temperatura, los contadores de errores de lectura y escritura y el total de horas de funcionamiento.",
        },
        {
          question: "¿Cuánto dura un SSD?",
          answer:
            "Las unidades de consumo típicas están declaradas en 150-300 TBW para los modelos de 500 GB y en 300-600 TBW para los de 1 TB. Un usuario medio que escribe 10-30 GB al día escribe 4-11 TB al año, así que llegar a ese límite le llevaría más de una década. La mayoría de los SSD se sustituyen por edad o por capacidad mucho antes de que la resistencia sea un problema.",
        },
        {
          question: "¿El SSD muere cuando «Percentage Used» llega al 100 %?",
          answer:
            "No. Ese valor indica que se ha consumido por completo el presupuesto de resistencia declarado por el fabricante, no que la unidad deje de funcionar. Es habitual que SSD por encima del 100 % sigan trabajando durante años. Lo que sí cambia es que se acaba la cobertura de garantía y las copias de seguridad periódicas pasan a ser mucho más importantes.",
        },
        {
          question: "¿Cómo sé si TRIM está activado?",
          answer:
            "Ejecuta fsutil behavior query DisableDeleteNotify en el símbolo del sistema. Si DisableDeleteNotify devuelve 0, TRIM está activado. Si devuelve 1, actívalo con fsutil behavior set DisableDeleteNotify 0. Para que TRIM trabaje con eficacia, la unidad también debería tener un 15-20 % de espacio libre.",
        },
        {
          question: "¿Hay que desfragmentar un SSD?",
          answer:
            "No. La desfragmentación genera un gran volumen de escrituras innecesarias y desgasta la unidad sin ningún beneficio, porque en un SSD el tiempo de acceso no depende de la ubicación física de los datos. La herramienta Desfragmentar y optimizar unidades de Windows ya detecta las unidades de estado sólido y ejecuta TRIM en lugar de desfragmentarlas.",
        },
        {
          question: "¿Cómo sé si mi SSD se está estropeando?",
          answer:
            "La primera señal suele ser una caída permanente de la velocidad de escritura. Después llegan los archivos corruptos, los documentos que no abren y los pantallazos azules recurrentes. Que la unidad pase a solo lectura o desaparezca por completo de la BIOS es la fase final. Haz una copia de seguridad en cuanto S.M.A.R.T. informe de Warning, sin esperar a más síntomas.",
        },
      ],
      verdict: [
        "No hace falta software de terceros para comprobar la salud de un SSD: Get-PhysicalDisk da el estado general en PowerShell y Get-StorageReliabilityCounter aporta desgaste, temperatura y contadores de errores. En NVMe vigila «Percentage Used»; en SATA, «Wear Leveling Count».",
        "Las cifras son tranquilizadoras para la mayoría: un SSD moderno declarado para 300-600 TBW tiene una vida útil muy superior a una década con un uso normal. Lo que merece atención no es el desgaste gradual, sino las señales de fallo repentino: modo de solo lectura, archivos que desaparecen y avisos de S.M.A.R.T.",
        "Alargar la vida de un SSD se resume en una lista corta: mantener un 15-20 % libre, dejar TRIM activado, no desfragmentarlo nunca y borrar las cachés acumuladas que generan escrituras innecesarias.",
      ],
      ctaText: "Comprueba el estado real de tu unidad",
    },
    it: {
      title: "Come controllare la salute di un SSD: S.M.A.R.T., TBW e durata reale",
      metaDescription:
        "Scopri quanta vita resta al tuo SSD: valori S.M.A.R.T., resistenza TBW, verifica di TRIM e segnali di guasto, usando solo gli strumenti già inclusi in Windows.",
      subtitle: "Quale valore conta davvero e quando preoccuparsi",
      intro: [
        "Risposta breve: apri PowerShell ed esegui Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType; un'unità in salute restituisce Healthy. Per i dettagli, Get-PhysicalDisk | Get-StorageReliabilityCounter riporta usura, temperatura e quantità totale di dati scritti. Sugli SSD NVMe il valore più importante è «Percentage Used»; sugli SSD SATA sono «Wear Leveling Count» e «Reallocated Sector Count».",
        "Gli SSD non muoiono con i ticchettii di un disco rigido guasto: si consumano in silenzio e di solito finiscono passando in sola lettura. La buona notizia è che la resistenza di un SSD moderno va ben oltre ciò che un utente medio raggiunge in anni di uso normale. Questa guida spiega come misurare lo stato reale della tua unità con gli strumenti già presenti in Windows, che cosa significa davvero ogni numero e quali sintomi impongono un backup immediato.",
      ],
      keyTakeaways: [
        "In PowerShell, Get-PhysicalDisk restituisce lo stato Healthy, Warning o Unhealthy per ogni unità del sistema.",
        "Sugli SSD NVMe l'indicatore più significativo è «Percentage Used»: il 100 % indica che il budget di resistenza dichiarato è esaurito, non che l'unità stia per rompersi.",
        "Un tipico SSD consumer da 1 TB è dichiarato per 300-600 TBW: scrivendo 30 GB al giorno servirebbero ben più di dieci anni per arrivarci.",
        "Verifica TRIM con fsutil behavior query DisableDeleteNotify: il valore 0 significa che TRIM è attivo.",
        "Non deframmentare mai un SSD; sulle memorie flash lo strumento Deframmenta e ottimizza unità di Windows esegue TRIM al posto della deframmentazione.",
        "Se l'unità passa in sola lettura, se i file iniziano a sparire o se non compare più nel BIOS, fai subito un backup: è il punto di non ritorno.",
      ],
      howTo: {
        name: "Controllare la salute di un SSD su Windows",
        totalTime: "PT10M",
        steps: [
          {
            name: "Aprire PowerShell come amministratore",
            text: "Digita PowerShell nel menu Start, fai clic con il tasto destro sul risultato e scegli Esegui come amministratore. Alcuni dei comandi seguenti richiedono privilegi elevati.",
          },
          {
            name: "Leggere lo stato di salute generale",
            text: "Esegui Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus. Nella colonna HealthStatus dovresti leggere Healthy; se compare Warning o Unhealthy, fai subito un backup.",
          },
          {
            name: "Guardare i contatori di affidabilità dettagliati",
            text: "Esegui Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours. Wear indica la percentuale di usura e PowerOnHours il tempo di funzionamento complessivo dell'unità.",
          },
          {
            name: "Verificare che TRIM sia attivo",
            text: "Dal prompt dei comandi esegui fsutil behavior query DisableDeleteNotify. Il valore restituito 0 significa che TRIM è attivo. Se restituisce 1, abilitalo con fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Controllare la pianificazione dell'ottimizzazione",
            text: "Apri «Deframmenta e ottimizza unità» dal menu Start. Verifica che il tuo SSD sia riconosciuto come unità a stato solido nella colonna Tipo di supporto e che l'ottimizzazione settimanale sia attiva. Su un SSD questo strumento esegue TRIM, non una deframmentazione.",
          },
        ],
      },
      sections: [
        {
          title: "Che cos'è S.M.A.R.T. e quali valori contano",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) è lo standard con cui le unità monitorano e segnalano il proprio stato. Produce decine di valori, che però non hanno tutti lo stesso peso: sugli SSD ne contano davvero solo una manciata.",
            "Sugli SSD NVMe l'indicatore chiave è «Percentage Used». Esprime quanta parte del budget di resistenza dichiarato dal produttore è stata consumata: un valore del 10 % significa che se n'è andato un decimo della vita dichiarata. «Available Spare» indica invece quanta capacità di riserva, destinata a sostituire le celle guaste, è ancora disponibile; se scende sotto il 10 %, prendilo sul serio.",
            "Sugli SSD SATA gli equivalenti sono «Wear Leveling Count» e, presso alcuni produttori, una lettura diretta «SSD Life Left». In entrambi i casi, un «Reallocated Sector Count» o dei «Media and Data Integrity Errors» sopra lo zero e in crescita nel tempo sono il segnale più chiaro che l'unità si sta degradando fisicamente.",
          ],
        },
        {
          title: "TBW: quanto dura davvero il tuo SSD?",
          content: [
            "Il TBW (Terabytes Written) è il volume totale di scritture garantito dal produttore ed è la misura standard della resistenza di un SSD. Le unità consumer tipiche sono dichiarate per 150-300 TB nei modelli da 500 GB e per 300-600 TB in quelli da 1 TB. La resistenza cresce con la capacità, perché le scritture si distribuiscono su più celle.",
            "Tradurre quel numero nella vita di tutti i giorni rassicura la maggior parte degli utenti. Un utente medio scrive 10-30 GB al giorno, cioè circa 4-11 TB all'anno. Su un'unità dichiarata per 300 TB significa una vita di servizio ampiamente superiore ai dieci anni. Nella pratica, quasi tutti gli SSD vengono sostituiti perché obsoleti molto prima di avvicinarsi al limite di resistenza.",
            "Le eccezioni esistono: i sistemi che montano video di continuo, lavorano con grandi set di dati o eseguono macchine virtuali possono scrivere centinaia di gigabyte al giorno. Se il tuo carico di lavoro è questo, controllare una volta all'anno il totale scritto in Get-StorageReliabilityCounter vale il minuto che richiede.",
          ],
        },
        {
          title: "Perché TRIM è importante e come verificarlo",
          content: [
            "Un SSD non può sovrascrivere i dati sul posto: deve prima cancellare il blocco. Il comando TRIM consente al sistema operativo di comunicare all'unità quali blocchi appartengono a file eliminati, così da ripulirli in anticipo nei momenti di inattività. Senza TRIM ogni scrittura finisce per richiedere prima una cancellazione e le prestazioni calano in modo evidente col tempo.",
            "TRIM è attivo per impostazione predefinita da Windows 7, ma in alcune installazioni può risultare disattivato. Per controllarlo esegui fsutil behavior query DisableDeleteNotify dal prompt dei comandi. Il valore 0 indica che TRIM è attivo; se restituisce 1, abilitalo con fsutil behavior set DisableDeleteNotify 0.",
            "TRIM dipende anche dallo spazio libero: un'unità sempre piena non gli lascia nulla da ripulire in anticipo. Per questo tenere libero almeno il 15-20 % di un SSD non è un semplice consiglio, ma una condizione perché l'unità funzioni come è stata progettata. Il modulo Stato del disco (Disk Health) di Disk Mop mostra lo stato di TRIM accanto ai valori S.M.A.R.T. in un'unica schermata.",
          ],
        },
        {
          title: "I segnali di un SSD che sta cedendo",
          content: [
            "Gli SSD non danno alcun avviso sonoro come fanno i dischi rigidi, quindi i sintomi compaiono dal lato software. Il primo segnale più comune è una velocità di copia che cala in modo permanente e il salvataggio dei file di grandi dimensioni che diventa visibilmente più lento.",
            "In una fase più seria i file iniziano a corrompersi: documenti che non si aprono, installazioni di giochi che non superano la verifica, schermate blu ricorrenti. Alcune unità, arrivate al punto critico, si mettono da sole in sola lettura: i dati esistenti si leggono ancora, ma non è più possibile scrivere nulla. È un'ultima linea di difesa voluta dal produttore e significa fare subito un backup.",
            "Il sintomo più netto è l'unità che non compare più nel BIOS né in Gestione disco. A quel punto il recupero dei dati richiede di norma un servizio professionale, senza garanzia di risultato. È esattamente per questo che fare un backup non appena S.M.A.R.T. segnala Warning è l'unico modo affidabile per evitare la perdita.",
          ],
        },
        {
          title: "Che cosa fare e che cosa evitare per una vita più lunga",
          content: [
            "La cosa più importante da evitare è la deframmentazione. Deframmentare esegue un numero enorme di scritture per riorganizzare fisicamente i dati: sui dischi rigidi serve, su un SSD produce solo usura inutile. Windows lo sa già: quando «Deframmenta e ottimizza unità» riconosce un SSD, esegue TRIM al suo posto. Non usare vecchi deframmentatori di terze parti sulle unità a stato solido.",
            "Le cose da fare sono più semplici: lasciare spazio libero a sufficienza (15-20 %), assicurarsi che TRIM sia attivo, tenere aggiornato il firmware con l'utility del produttore e proteggere l'unità dalle temperature estreme. Gli SSD NVMe si scaldano sotto carico prolungato e riducono la velocità oltre i 70 °C circa; puoi tenere d'occhio la cosa con il valore Temperature di Get-StorageReliabilityCounter.",
            "Anche ridurre le scritture inutili aiuta. Cache che crescono senza sosta, file temporanei ridondanti e client di sincronizzazione in background generano scritture in silenzio. Il modulo Stato del disco (Disk Health) di Disk Mop mostra lo stato dell'unità e di TRIM, mentre Pulizia cache (Cache Cleaner) e la pulizia pianificata tengono sotto controllo questo accumulo. Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "Come controllo la salute di un SSD su Windows senza installare nulla?",
          answer:
            "Apri PowerShell come amministratore ed esegui Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus; le unità in salute restituiscono Healthy. Per maggiori dettagli, Get-PhysicalDisk | Get-StorageReliabilityCounter riporta la percentuale di usura, la temperatura, i contatori degli errori di lettura e scrittura e le ore totali di funzionamento.",
        },
        {
          question: "Quanto dura un SSD?",
          answer:
            "Le unità consumer tipiche sono dichiarate per 150-300 TBW nei modelli da 500 GB e per 300-600 TBW in quelli da 1 TB. Un utente medio che scrive 10-30 GB al giorno arriva a 4-11 TB all'anno: per raggiungere quel limite servirebbero oltre dieci anni. Quasi tutti gli SSD vengono sostituiti per età o capacità molto prima che la resistenza diventi un problema.",
        },
        {
          question: "L'SSD muore quando «Percentage Used» arriva al 100 %?",
          answer:
            "No. Quel valore indica che il budget di resistenza dichiarato dal produttore è stato consumato per intero, non che l'unità smetta di funzionare. Gli SSD oltre il 100 % continuano spesso a lavorare per anni. Quello che cambia è che decade la garanzia e i backup regolari diventano molto più importanti.",
        },
        {
          question: "Come faccio a sapere se TRIM è attivo?",
          answer:
            "Esegui fsutil behavior query DisableDeleteNotify dal prompt dei comandi. Se DisableDeleteNotify restituisce 0, TRIM è attivo. Se restituisce 1, abilitalo con fsutil behavior set DisableDeleteNotify 0. Perché TRIM lavori in modo efficiente, l'unità dovrebbe avere anche il 15-20 % di spazio libero.",
        },
        {
          question: "Bisogna deframmentare un SSD?",
          answer:
            "No. La deframmentazione genera una grande quantità di scritture inutili e consuma l'unità senza alcun vantaggio, perché su un SSD il tempo di accesso non dipende dalla posizione fisica dei dati. Lo strumento Deframmenta e ottimizza unità di Windows riconosce già le unità a stato solido ed esegue TRIM invece di deframmentarle.",
        },
        {
          question: "Come capisco se il mio SSD si sta guastando?",
          answer:
            "Il primo segnale è di solito un calo permanente della velocità di scrittura. Poi arrivano i file corrotti, i documenti che non si aprono e le schermate blu ricorrenti. Il passaggio in sola lettura, o la scomparsa totale dell'unità dal BIOS, è la fase finale. Fai un backup appena S.M.A.R.T. segnala Warning, senza aspettare altri sintomi.",
        },
      ],
      verdict: [
        "Per controllare la salute di un SSD non serve software di terze parti: in PowerShell Get-PhysicalDisk restituisce lo stato generale e Get-StorageReliabilityCounter fornisce usura, temperatura e contatori di errore. Su NVMe tieni d'occhio «Percentage Used», su SATA «Wear Leveling Count».",
        "I numeri sono rassicuranti per la maggior parte degli utenti: un SSD moderno dichiarato per 300-600 TBW ha una vita di servizio ben oltre i dieci anni con un uso normale. A meritare attenzione non è l'usura graduale, ma i segnali di guasto improvviso: sola lettura, file che spariscono e avvisi S.M.A.R.T.",
        "Allungare la vita di un SSD si riduce a una lista breve: tenere libero il 15-20 %, lasciare TRIM attivo, non deframmentarlo mai e ripulire con regolarità le cache accumulate che generano scritture inutili.",
      ],
      ctaText: "Scopri lo stato reale della tua unità",
    },
    pt: {
      title: "Como verificar a saúde do SSD: S.M.A.R.T., TBW e vida útil real",
      metaDescription:
        "Descubra quanta vida ainda resta no seu SSD: valores S.M.A.R.T., resistência TBW, verificação do TRIM e sinais de falha usando os comandos nativos do Windows.",
      subtitle: "Qual valor olhar e quando é hora de se preocupar",
      intro: [
        "Resposta curta: abra o PowerShell e execute Get-PhysicalDisk | Select FriendlyName, HealthStatus, MediaType; uma unidade saudável retorna Healthy. Para detalhes, Get-PhysicalDisk | Get-StorageReliabilityCounter informa o desgaste, a temperatura e o total de dados gravados. Em SSDs NVMe o valor que mais importa é “Percentage Used”; em SSDs SATA são “Wear Leveling Count” e “Reallocated Sector Count”.",
        "SSDs não morrem com os estalos de um disco rígido com defeito: eles se desgastam em silêncio e costumam terminar entrando em modo somente leitura. A boa notícia é que a resistência de um SSD moderno está muito além do que o uso normal alcança em anos. Este guia mostra como medir o estado real da sua unidade com ferramentas que o Windows já traz, o que cada número significa na prática e quais sintomas exigem backup imediato.",
      ],
      keyTakeaways: [
        "No PowerShell, o Get-PhysicalDisk retorna o estado Healthy, Warning ou Unhealthy de cada unidade do sistema.",
        "Em SSDs NVMe o indicador mais significativo é “Percentage Used”: 100 % significa que o orçamento de resistência declarado acabou, não que a unidade vá parar de funcionar.",
        "Um SSD de consumo de 1 TB costuma ser declarado para 300-600 TBW; gravando 30 GB por dia, levaria bem mais de uma década para chegar lá.",
        "Verifique o TRIM com fsutil behavior query DisableDeleteNotify: o resultado 0 significa que o TRIM está ativo.",
        "Nunca desfragmente um SSD; em memória flash, a ferramenta Desfragmentar e Otimizar Unidades do Windows executa o TRIM em vez da desfragmentação.",
        "Se a unidade entrar em modo somente leitura, se arquivos começarem a sumir ou se ela não aparecer mais na BIOS, faça backup imediatamente: esse é o ponto sem volta.",
      ],
      howTo: {
        name: "Verificar a saúde do SSD no Windows",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abrir o PowerShell como administrador",
            text: "Digite PowerShell no menu Iniciar, clique com o botão direito no resultado e escolha Executar como administrador. Alguns dos comandos abaixo exigem privilégios elevados.",
          },
          {
            name: "Ler o estado geral de saúde",
            text: "Execute Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus. A coluna HealthStatus deve mostrar Healthy; se aparecer Warning ou Unhealthy, faça backup na hora.",
          },
          {
            name: "Ver os contadores de confiabilidade detalhados",
            text: "Execute Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHours. Wear mostra o percentual de desgaste e PowerOnHours o tempo total de funcionamento da unidade.",
          },
          {
            name: "Confirmar que o TRIM está ativo",
            text: "No prompt de comando, execute fsutil behavior query DisableDeleteNotify. O retorno 0 significa que o TRIM está ativo. Se retornar 1, ative-o com fsutil behavior set DisableDeleteNotify 0.",
          },
          {
            name: "Conferir o agendamento da otimização",
            text: "Abra “Desfragmentar e Otimizar Unidades” pelo menu Iniciar. Confirme que o seu SSD aparece como unidade de estado sólido na coluna Tipo de mídia e que a otimização semanal está ativada. Em um SSD, essa ferramenta executa o TRIM, não a desfragmentação.",
          },
        ],
      },
      sections: [
        {
          title: "O que é S.M.A.R.T. e quais valores importam",
          content: [
            "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) é o padrão pelo qual as unidades monitoram e relatam o próprio estado. Ele gera dezenas de valores, mas nem todos têm o mesmo peso: em SSDs, apenas um punhado deles realmente importa.",
            "Em SSDs NVMe o indicador principal é “Percentage Used”. Ele mostra quanto do orçamento de resistência declarado pelo fabricante já foi consumido, ou seja, um valor de 10 % significa que um décimo da vida declarada se foi. Já “Available Spare” informa quanto restou da capacidade reservada para substituir células com defeito; leve a sério se cair abaixo de 10 %.",
            "Em SSDs SATA os equivalentes são “Wear Leveling Count” e, em alguns fabricantes, uma leitura direta de “SSD Life Left”. Nos dois tipos, um “Reallocated Sector Count” ou “Media and Data Integrity Errors” acima de zero e subindo com o tempo é o sinal mais claro de que a unidade está se degradando fisicamente.",
          ],
        },
        {
          title: "TBW: quanto tempo o seu SSD dura de verdade?",
          content: [
            "O TBW (Terabytes Written) é o volume total de gravação que o fabricante garante e a medida padrão de resistência de um SSD. As unidades de consumo típicas são declaradas em 150-300 TB nos modelos de 500 GB e em 300-600 TB nos de 1 TB. A resistência cresce junto com a capacidade, porque as gravações se espalham por mais células.",
            "Traduzir esse número para o dia a dia tranquiliza a maioria das pessoas. Um usuário médio grava 10-30 GB por dia, o que dá cerca de 4-11 TB por ano. Em uma unidade declarada para 300 TB, isso significa uma vida útil folgadamente acima de uma década. Na prática, a maioria dos SSDs é trocada por ficar ultrapassada muito antes de chegar perto do limite de resistência.",
            "Existem exceções: máquinas que editam vídeo o tempo todo, trabalham com grandes conjuntos de dados ou rodam máquinas virtuais podem gravar centenas de gigabytes por dia. Se esse é o seu caso, conferir uma vez por ano o total gravado no Get-StorageReliabilityCounter vale o minuto que leva.",
          ],
        },
        {
          title: "Por que o TRIM importa e como verificá-lo",
          content: [
            "Um SSD não consegue sobrescrever dados no lugar: ele precisa apagar o bloco antes. O comando TRIM permite que o sistema operacional informe à unidade quais blocos pertencem a arquivos apagados, para que ela os limpe com antecedência nos períodos ociosos. Sem o TRIM, toda gravação acaba exigindo um apagamento antes, e o desempenho cai de forma perceptível com o tempo.",
            "O TRIM vem ativado por padrão desde o Windows 7, mas pode acabar desligado em algumas instalações. Para conferir, execute fsutil behavior query DisableDeleteNotify no prompt de comando. O retorno 0 significa que o TRIM está ativo; se retornar 1, ative-o com fsutil behavior set DisableDeleteNotify 0.",
            "O TRIM também depende do espaço livre: uma unidade permanentemente cheia não deixa nada para limpar com antecedência. É por isso que manter pelo menos 15-20 % de um SSD livre não é apenas uma sugestão, e sim uma condição para que a unidade funcione como foi projetada. O módulo Saúde do Disco (Disk Health) do Disk Mop mostra o status do TRIM ao lado dos valores S.M.A.R.T. em uma única tela.",
          ],
        },
        {
          title: "Sinais de que o SSD está falhando",
          content: [
            "SSDs não dão aviso sonoro como os discos rígidos, então os sintomas aparecem do lado do software. O primeiro sinal mais comum é a velocidade de cópia cair de forma permanente e o salvamento de arquivos grandes demorar bem mais.",
            "Em um estágio mais sério os arquivos começam a corromper: documentos que não abrem, instalações de jogos que falham na verificação, telas azuis recorrentes. Algumas unidades entram sozinhas em modo somente leitura no ponto crítico — você consegue ler os dados existentes, mas não gravar nada. Essa é uma última linha de defesa colocada de propósito pelo fabricante e significa fazer backup agora.",
            "O sintoma mais duro é a unidade não aparecer na BIOS nem no Gerenciamento de Disco. Nesse estágio, a recuperação de dados costuma exigir um serviço profissional e sem garantia de resultado. É exatamente por isso que fazer backup assim que o S.M.A.R.T. mostra Warning é a única forma confiável de evitar a perda.",
          ],
        },
        {
          title: "O que fazer e o que evitar para prolongar a vida útil",
          content: [
            "A coisa mais importante a evitar é a desfragmentação. Desfragmentar executa um número enorme de gravações para reorganizar fisicamente os dados; isso ajuda em discos rígidos e só causa desgaste inútil em um SSD. O Windows já sabe disso: quando “Desfragmentar e Otimizar Unidades” detecta um SSD, ele executa o TRIM no lugar. Não aponte desfragmentadores antigos de terceiros para unidades de estado sólido.",
            "O que você deve fazer é mais simples: deixar espaço livre suficiente (15-20 %), garantir que o TRIM esteja ativo, manter o firmware atualizado pelo utilitário do fabricante e proteger a unidade de temperaturas extremas. SSDs NVMe esquentam sob carga contínua e reduzem a velocidade acima de cerca de 70 °C; dá para acompanhar isso pelo valor Temperature do Get-StorageReliabilityCounter.",
            "Reduzir gravações desnecessárias também ajuda. Caches que crescem sem parar, arquivos temporários redundantes e clientes de sincronização em segundo plano geram gravações em silêncio. O módulo Saúde do Disco (Disk Health) do Disk Mop mostra o estado da unidade e do TRIM, enquanto o Limpador de Cache (Cache Cleaner) e a limpeza agendada seguram esse acúmulo. Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "Como verificar a saúde do SSD no Windows sem instalar nada?",
          answer:
            "Abra o PowerShell como administrador e execute Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus; unidades saudáveis retornam Healthy. Para mais detalhes, Get-PhysicalDisk | Get-StorageReliabilityCounter mostra o percentual de desgaste, a temperatura, os contadores de erros de leitura e gravação e o total de horas ligada.",
        },
        {
          question: "Quanto tempo dura um SSD?",
          answer:
            "As unidades de consumo típicas são declaradas em 150-300 TBW nos modelos de 500 GB e em 300-600 TBW nos de 1 TB. Um usuário médio que grava 10-30 GB por dia grava 4-11 TB por ano, ou seja, levaria mais de uma década para chegar a esse limite. A maioria dos SSDs é trocada por idade ou por falta de capacidade muito antes de a resistência virar problema.",
        },
        {
          question: "O SSD morre quando “Percentage Used” chega a 100 %?",
          answer:
            "Não. Esse valor indica que o orçamento de resistência declarado pelo fabricante foi totalmente consumido, não que a unidade pare de funcionar. SSDs acima de 100 % com frequência continuam rodando por anos. O que muda é que a garantia acaba e os backups regulares ficam bem mais importantes.",
        },
        {
          question: "Como sei se o TRIM está ativado?",
          answer:
            "Execute fsutil behavior query DisableDeleteNotify no prompt de comando. Se DisableDeleteNotify retornar 0, o TRIM está ativado. Se retornar 1, ative-o com fsutil behavior set DisableDeleteNotify 0. Para o TRIM trabalhar com eficiência, a unidade também deve ter 15-20 % de espaço livre.",
        },
        {
          question: "Devo desfragmentar um SSD?",
          answer:
            "Não. A desfragmentação gera um grande volume de gravações desnecessárias e desgasta a unidade sem nenhum benefício, já que o tempo de acesso de um SSD não depende da posição física dos dados. A ferramenta Desfragmentar e Otimizar Unidades do Windows já identifica unidades de estado sólido e executa o TRIM em vez de desfragmentá-las.",
        },
        {
          question: "Como sei se meu SSD está com defeito?",
          answer:
            "O primeiro sinal costuma ser uma queda permanente na velocidade de gravação. Depois vêm arquivos corrompidos, documentos que não abrem e telas azuis recorrentes. A unidade entrar em modo somente leitura, ou sumir por completo da BIOS, é o estágio final. Faça backup assim que o S.M.A.R.T. mostrar Warning, sem esperar por mais sintomas.",
        },
      ],
      verdict: [
        "Não é preciso software de terceiros para verificar a saúde de um SSD: o Get-PhysicalDisk mostra o estado geral no PowerShell e o Get-StorageReliabilityCounter traz desgaste, temperatura e contadores de erro. Em NVMe, acompanhe “Percentage Used”; em SATA, “Wear Leveling Count”.",
        "Os números são tranquilizadores para a maioria: um SSD moderno declarado para 300-600 TBW tem vida útil bem acima de uma década em uso normal. O que merece atenção não é o desgaste gradual, e sim os sinais de falha repentina — modo somente leitura, arquivos que somem e avisos do S.M.A.R.T.",
        "Prolongar a vida de um SSD cabe em uma lista curta: manter 15-20 % livres, deixar o TRIM ativo, nunca desfragmentar e limpar com regularidade os caches acumulados que geram gravações inúteis.",
      ],
      ctaText: "Veja o estado real da sua unidade",
    },
    ja: {
      title: "SSDの健康状態を確認する方法：S.M.A.R.T.、TBW、実際の寿命",
      metaDescription:
        "SSDにあとどれだけ寿命が残っているかを確認する方法です。S.M.A.R.T.の値、TBWによる耐久性の目安、TRIMの確認方法、故障の前兆まで、Windowsに標準で入っているコマンドだけで調べる手順を解説します。",
      subtitle: "どの値を見るべきか、いつ心配すべきか",
      intro: [
        "短い答えから。PowerShellを開いてGet-PhysicalDisk | Select FriendlyName, HealthStatus, MediaTypeを実行してください。健全なドライブはHealthyと表示されます。さらに詳しく知りたい場合は、Get-PhysicalDisk | Get-StorageReliabilityCounterで摩耗度、温度、総書き込み量が分かります。NVMe SSDで最も重要な項目は「Percentage Used」、SATA SSDでは「Wear Leveling Count」と「Reallocated Sector Count」です。",
        "SSDはハードディスクのようにカチカチと音を立てて壊れることはありません。静かに摩耗していき、多くの場合は最後に読み取り専用モードへ切り替わって終わります。よい知らせは、最近のSSDの耐久性は普通の使い方で何年かけても到達しないほど高いことです。この記事では、Windowsに標準で入っているツールでドライブの実際の状態を測る方法、それぞれの数値が何を意味するのか、そしてどの症状が出たらすぐにバックアップすべきかをお伝えします。",
      ],
      keyTakeaways: [
        "PowerShellのGet-PhysicalDiskは、システム内の各ドライブについてHealthy、Warning、Unhealthyのいずれかを返します。",
        "NVMe SSDで最も参考になる指標は「Percentage Used」です。100%は保証された耐久性の枠を使い切ったという意味で、ドライブがすぐ壊れるという意味ではありません。",
        "一般的な1 TBのコンシューマー向けSSDは300-600 TBWで設計されており、1日30 GB書き込む使い方でも到達には十年以上かかります。",
        "TRIMの状態はfsutil behavior query DisableDeleteNotifyで確認できます。戻り値が0ならTRIMは有効です。",
        "SSDにデフラグは絶対に実行しないでください。Windowsの「ドライブのデフラグと最適化」は、フラッシュメモリに対してはデフラグではなくTRIMを実行します。",
        "ドライブが読み取り専用になった、ファイルが消え始めた、BIOSから見えなくなった。このいずれかが起きたらすぐにバックアップしてください。ここが引き返せない地点です。",
      ],
      howTo: {
        name: "WindowsでSSDの健康状態を確認する",
        totalTime: "PT10M",
        steps: [
          {
            name: "PowerShellを管理者として開く",
            text: "スタートメニューでPowerShellと入力し、表示された結果を右クリックして「管理者として実行」を選びます。以下のコマンドの一部は管理者権限を必要とします。",
          },
          {
            name: "全体の健康状態を読む",
            text: "Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatusを実行します。HealthStatus列がHealthyであれば正常です。WarningやUnhealthyと表示された場合は、すぐにバックアップを取ってください。",
          },
          {
            name: "詳細な信頼性カウンターを見る",
            text: "Get-PhysicalDisk | Get-StorageReliabilityCounter | Select DeviceId, Wear, Temperature, ReadErrorsTotal, WriteErrorsTotal, PowerOnHoursを実行します。Wearが摩耗度のパーセント、PowerOnHoursがドライブの総稼働時間です。",
          },
          {
            name: "TRIMが有効か確認する",
            text: "コマンドプロンプトでfsutil behavior query DisableDeleteNotifyを実行します。戻り値が0ならTRIMは有効です。1が返る場合はfsutil behavior set DisableDeleteNotify 0で有効にできます。",
          },
          {
            name: "最適化のスケジュールを確認する",
            text: "スタートメニューから「ドライブのデフラグと最適化」を開きます。「メディアの種類」列でSSDが「ソリッド ステート ドライブ」と認識されていること、週1回の最適化が有効になっていることを確認してください。SSDに対して、このツールはデフラグではなくTRIMを実行します。",
          },
        ],
      },
      sections: [
        {
          title: "S.M.A.R.T.とは何か、どの項目を見るべきか",
          content: [
            "S.M.A.R.T.（Self-Monitoring, Analysis and Reporting Technology）は、ドライブが自分自身の状態を監視して報告するための標準規格です。数十もの値を出力しますが、すべてが同じように重要なわけではありません。SSDで実際に役立つのは、ごく一部の項目だけです。",
            "NVMe SSDで鍵になるのは「Percentage Used」です。メーカーが定めた耐久性の枠をどれだけ使ったかをパーセントで示すもので、10%であれば設計寿命の10分の1を使ったという意味になります。「Available Spare」は、不良セルの置き換え用に確保された予備領域がどれだけ残っているかを示します。この値が10%を下回ったら、真剣に受け止めてください。",
            "SATA SSDで対応するのは「Wear Leveling Count」で、メーカーによっては「SSD Life Left」として残り寿命が直接表示されます。どちらのタイプでも、「Reallocated Sector Count」や「Media and Data Integrity Errors」が0より大きく、時間とともに増えていく場合は、ドライブが物理的に劣化し始めている最も明確なサインです。",
          ],
        },
        {
          title: "TBW：SSDは実際どれくらい持つのか",
          content: [
            "TBW（Terabytes Written）はメーカーが保証する総書き込み量で、SSDの耐久性を示す標準的な指標です。一般的なコンシューマー向けドライブでは、500 GBモデルで150-300 TB、1 TBモデルで300-600 TBが目安になります。容量が大きいほど書き込みが多くのセルに分散されるため、TBWも大きくなります。",
            "この数字を日常の使い方に置き換えると、たいていの人は安心できます。平均的な使い方では1日あたり10-30 GB、年間にすると約4-11 TBの書き込みです。300 TBのTBWを持つドライブなら、十年を優に超える寿命ということになります。実際には、ほとんどのSSDは耐久性の限界に近づくずっと前に、古くなって買い替えられます。",
            "例外もあります。動画編集を続ける環境、大きなデータセットを扱う環境、仮想マシンを動かす環境では、1日に数百ギガバイトを書き込むこともあります。そうした使い方をしているなら、年に一度Get-StorageReliabilityCounterの総書き込み量を確認しておく価値があります。",
          ],
        },
        {
          title: "TRIMが重要な理由と確認方法",
          content: [
            "SSDはデータをその場で上書きできず、先にブロックを消去する必要があります。TRIMコマンドは、どのブロックが削除済みファイルのものかをOSからドライブへ伝える仕組みで、ドライブはアイドル時間にそれらをあらかじめ消去できます。TRIMがないと、やがてすべての書き込みの前に消去が必要になり、性能は目に見えて落ちていきます。",
            "TRIMはWindows 7以降、既定で有効になっていますが、環境によっては無効のままになっていることがあります。確認するには、コマンドプロンプトでfsutil behavior query DisableDeleteNotifyを実行してください。戻り値が0なら有効です。1が返る場合はfsutil behavior set DisableDeleteNotify 0で有効にできます。",
            "TRIMは空き容量にも左右されます。常に満杯のドライブでは、あらかじめ消去できるブロックが残りません。SSDで容量の15-20%以上を空けておくことが単なる推奨ではなく、ドライブが設計どおりに動くための条件だといわれるのはこのためです。Disk Mopのディスク健全性（Disk Health）モジュールなら、S.M.A.R.T.の値とTRIMの状態を1つの画面で確認できます。",
          ],
        },
        {
          title: "SSDが故障するときのサイン",
          content: [
            "SSDはハードディスクのように音で警告してくれないため、症状はソフトウェア側に現れます。最もよくある最初のサインは、ファイルのコピー速度が元に戻らないまま落ちること、そして大きなファイルの保存に明らかに時間がかかるようになることです。",
            "さらに進行すると、ファイルの破損が始まります。開けなくなった書類、検証に失敗するゲームのインストール、繰り返し発生するブルースクリーンなどです。一部のドライブは危険な段階に達すると、自ら読み取り専用モードに切り替わります。既存のデータは読めますが、何も書き込めません。これはメーカーが意図的に用意した最後の防衛線であり、「今すぐバックアップを取れ」という意味です。",
            "最も厳しい症状は、ドライブがBIOSにもディスクの管理にもまったく表示されなくなることです。この段階になるとデータ復旧は専門業者に頼ることが多く、成功する保証もありません。だからこそ、S.M.A.R.T.がWarningを示した時点でバックアップを取ることが、データ損失を防ぐ唯一確実な方法なのです。",
          ],
        },
        {
          title: "寿命を延ばすためにすべきこと、避けるべきこと",
          content: [
            "何よりも避けるべきなのはデフラグです。デフラグはデータを物理的に並べ替えるために大量の書き込みを行います。ハードディスクでは有効ですが、SSDでは無駄な摩耗を生むだけです。Windowsはそれを理解しており、「ドライブのデフラグと最適化」はSSDを検出するとデフラグではなくTRIMを実行します。古いサードパーティ製のデフラグソフトをSSDに使うのはやめてください。",
            "やるべきことは、もっと単純です。十分な空き容量を残すこと（15-20%）、TRIMが有効であることを確認すること、メーカーのユーティリティでファームウェアを最新に保つこと、そして極端な温度から守ることです。NVMe SSDは高い負荷が続くと発熱し、およそ70°Cを超えると速度を落とします。温度はGet-StorageReliabilityCounterのTemperatureの値で確認できます。",
            "不要な書き込みを減らすことも効果があります。際限なく増えていくキャッシュ、重複した一時ファイル、バックグラウンドで動く同期クライアントは、いずれも静かに書き込みを発生させています。Disk Mopのディスク健全性（Disk Health）モジュールはドライブの状態とTRIMを表示し、キャッシュクリーナー（Cache Cleaner）とスケジュール実行のクリーンアップがこうした蓄積を定期的に取り除きます。Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "Windowsでソフトを入れずにSSDの健康状態を確認するには？",
          answer:
            "PowerShellを管理者として開き、Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatusを実行してください。健全なドライブはHealthyと表示されます。さらに詳しく見たい場合は、Get-PhysicalDisk | Get-StorageReliabilityCounterで摩耗度、温度、読み書きのエラー数、総稼働時間が確認できます。",
        },
        {
          question: "SSDの寿命はどれくらいですか？",
          answer:
            "一般的なコンシューマー向けドライブは、500 GBモデルで150-300 TBW、1 TBモデルで300-600 TBWと設計されています。1日10-30 GB書き込む平均的な使い方では年間4-11 TBなので、この限界に達するには十年以上かかります。ほとんどのSSDは耐久性が問題になるずっと前に、古さや容量不足で買い替えられます。",
        },
        {
          question: "「Percentage Used」が100%になるとSSDは壊れますか？",
          answer:
            "いいえ。この値はメーカーが保証する耐久性の枠を使い切ったことを示すもので、ドライブが動作を止めるという意味ではありません。100%を超えたSSDが何年も動き続けることは珍しくありません。ただし保証期間は終了するため、定期的なバックアップの重要性は格段に高まります。",
        },
        {
          question: "TRIMが有効かどうかはどう確認しますか？",
          answer:
            "コマンドプロンプトでfsutil behavior query DisableDeleteNotifyを実行してください。DisableDeleteNotifyが0を返せばTRIMは有効です。1が返る場合はfsutil behavior set DisableDeleteNotify 0で有効にできます。TRIMが効率よく働くには、ドライブに15-20%の空き容量も必要です。",
        },
        {
          question: "SSDにデフラグは必要ですか？",
          answer:
            "必要ありません。デフラグは大量の不要な書き込みを発生させてドライブを消耗させるだけで、SSDではアクセス時間が物理的な位置に左右されないため性能上の利点もありません。Windowsの「ドライブのデフラグと最適化」はSSDを自動的に判別し、デフラグではなくTRIMを実行します。",
        },
        {
          question: "自分のSSDが壊れかけているかどうかを見分けるには？",
          answer:
            "最初のサインはたいてい、書き込み速度が元に戻らないまま低下することです。次にファイルの破損、開けなくなった書類、繰り返すブルースクリーンが続きます。読み取り専用モードへの切り替わりや、BIOSからドライブが消えることが最終段階です。S.M.A.R.T.がWarningを示したら、ほかの症状を待たずにバックアップしてください。",
        },
      ],
      verdict: [
        "SSDの健康状態を確認するのに、サードパーティ製のソフトは必要ありません。PowerShellのGet-PhysicalDiskで全体の状態が、Get-StorageReliabilityCounterで摩耗度、温度、エラーカウンターが分かります。NVMeなら「Percentage Used」、SATAなら「Wear Leveling Count」が見るべき基本の値です。",
        "数字自体は、ほとんどの人にとって安心できるものです。300-600 TBWで設計された最近のSSDは、通常の使い方なら十年を超えて使えます。気にすべきなのは少しずつ進む摩耗ではなく、突然の故障のサインです。読み取り専用モード、消えるファイル、S.M.A.R.T.の警告がそれにあたります。",
        "寿命を延ばす方法は、短いリストにまとまります。15-20%の空き容量を保つこと、TRIMを有効なままにしておくこと、決してデフラグしないこと、そして不要な書き込みを生むキャッシュの蓄積を定期的に片づけることです。",
      ],
      ctaText: "ドライブの本当の状態を確認する",
    },
  },
};
