import type { Article } from "../types";

export const cDriveFullForNoReason: Article = {
  slug: "c-drive-full-for-no-reason",
  type: "guide",
  category: "Disk Management",
  date: "2026-06-05",
  updated: "2026-11-06",
  readingTime: 8,
  content: {
    tr: {
      title: "C Diski Sebepsiz Doluyor mu? Windows 10/11 için 8 Çözüm",
      metaDescription:
        "C diski sebepsiz doluyor mu? hiberfil.sys, sayfa dosyası, geri yükleme noktaları ve AppData önbelleklerinin kapladığı alanı görün, adım adım yer açın.",
      subtitle:
        "Sistem diskinizi yiyen gizli dosyaları önce teşhis edip sonra güvenle temizleme rehberi",
      intro: [
        "C diski sebepsiz doluyor gibi görünüyorsa, alanı neredeyse her zaman Windows'un sizden gizlediği dosyalar kaplıyordur: hazırda bekletme dosyası hiberfil.sys, sayfa dosyası pagefile.sys, sistem geri yükleme noktaları ve AppData klasöründeki gigabaytlarca uygulama önbelleği. Dosya Gezgini bu korumalı sistem dosyalarını varsayılan olarak göstermez; bu yüzden görünen klasörlerin toplamı, Windows'un dolu gösterdiği alandan çok daha az çıkar. Çözüm, önce teşhis koymak — diski gerçekte neyin kapladığını görmek — ve ancak ondan sonra silmeye başlamaktır.",
        "C diskinin sürekli dolması sinir bozucudur çünkü suçlular sessizce büyür: Windows güncellemeleri artık dosyalar bırakır, uygulamalar önbelleklerini şişirir ve tek başına hazırda bekletme dosyası, takılı RAM'inizin önemli bir bölümü kadar yer kaplayabilir. Bu rehberde sekiz pratik çözüm bulacaksınız: gizli dosyaları görünür yapmak, disk kullanımını görsel olarak haritalamak, hiberfil.sys'i küçültmek veya kaldırmak, sayfa dosyasını doğru boyutlandırmak, geri yükleme noktalarını sınırlamak, geçici dosyaları ve önbellekleri temizlemek, AppData ile İndirilenler klasörlerini düzenlemek ve son olarak tüm rutini otomatikleştirmek.",
      ],
      keyTakeaways: [
        "C diski asla sebepsiz dolmaz; alanı gizlice kaplayanlar çoğunlukla hiberfil.sys, pagefile.sys, geri yükleme noktaları ve AppData önbellekleridir.",
        "Hazırda bekletmeyi kullanmıyorsanız yönetici Komut İstemi'nde 'powercfg /h off' çalıştırmak RAM boyutunuz kadar (8–32 GB) alanı anında geri kazandırır.",
        "pagefile.sys dosyasını tamamen silmeyin; Windows kararlılığı için gereklidir ancak boyutunu Windows yönetimine bırakmak şişmeyi önler.",
        "Sistem Geri Yükleme noktaları sınırlandırılmadığında onlarca gigabayt tüketebilir; eski noktaları temizlemek tek tıkla büyük yer açar.",
        "DiskMop Disk Analizi görsel treemap ile C diskinizdeki devasa gizli klasörleri saniyeler içinde tespit eder.",
      ],
      dataTable: {
        caption:
          "C diskini sebepsiz dolduran gizli alan tüketicileri ve çözümleri",
        columns: [
          "Gizli Öğe",
          "Tipik Boyut",
          "Güvenlik Seviyesi",
          "Nasıl Temizlenir?",
        ],
        rows: [
          [
            "hiberfil.sys (Hazırda Bekletme)",
            "8 GB – 32 GB (RAM ile orantılı)",
            "Güvenli (Kullanılmıyorsa)",
            "Komut İstemi'nde 'powercfg /h off' çalıştırın",
          ],
          [
            "Sistem Geri Yükleme Noktaları",
            "5 GB – 25 GB",
            "Güvenli (Son nokta hariç)",
            "Disk Temizleme > Diğer Seçenekler > Gölge Kopyaları Temizle",
          ],
          [
            "AppData ve Temp Önbellekleri",
            "5 GB – 30 GB",
            "Tamamen Güvenli",
            "%temp% boşaltın ve DiskMop Önbellek Temizleyici çalıştırın",
          ],
          [
            "Windows Update Artıkları",
            "2 GB – 10 GB",
            "Tamamen Güvenli",
            "Ayarlar > Depolama > Geçici Dosyalar > Güncelleme Temizliği",
          ],
          [
            "pagefile.sys (Sanal Bellek)",
            "4 GB – 16 GB",
            "Silinmemeli (Yönetilmeli)",
            "Boyutunu 'Sistem tarafından yönetilen' olarak ayarlayın",
          ],
        ],
      },
      howTo: {
        name: "Dolan C Diskinde Hızlıca Yer Açma Adımları",
        totalTime: "PT15M",
        steps: [
          {
            name: "Gizli dosyaları görünür yapın",
            text: "Dosya Gezgini > Görünüm menüsünden 'Gizli öğeler' seçeneğini işaretleyin. Klasör Seçenekleri'nden korumalı sistem dosyalarını açarak asıl yükü görün.",
          },
          {
            name: "Gereksizse hazırda bekletmeyi kapatın",
            text: "Başlat'a sağ tıklayıp Terminal (Yönetici) açın. 'powercfg /h off' yazıp Enter'a basın; hiberfil.sys anında silinir ve GB'larca alan açılır.",
          },
          {
            name: "Eski sistem geri yükleme noktalarını silin",
            text: "Disk Temizleme'yi yönetici olarak açın, C: diskini seçin, 'Diğer Seçenekler' sekmesinden Sistem Geri Yükleme altındaki 'Temizle'ye basın.",
          },
          {
            name: "Geçici dosyaları ve Temp klasörünü boşaltın",
            text: "Win+R ile %temp% klasörünü açın, her şeyi seçip silin. Ayarlar > Sistem > Depolama altındaki Geçici Dosyaları temizleyin.",
          },
          {
            name: "Geri Dönüşüm Kutusu'nu boşaltın",
            text: "Masaüstündeki Geri Dönüşüm Kutusu'na sağ tıklayıp 'Boşalt' diyerek silinen dosyaların alanını sisteme geri verin.",
          },
        ],
      },
      sections: [
        {
          title: "C Diski Neden Sebepsiz Doluyor?",
          content: [
            "C diskim neden dolu diye soranlara dürüst cevap şudur: disk asla sebepsiz dolmaz, sebepler yalnızca görünmezdir. Windows, hiberfil.sys ve pagefile.sys gibi çekirdek dosyaları korumalı işletim sistemi dosyası olarak işaretler ve Dosya Gezgini bunları varsayılan olarak gizler. Geri yükleme noktaları gizli System Volume Information klasöründe, uygulama önbellekleri ise yine gizli olan AppData içinde durur. Görünen tüm klasörleri seçip toplam boyutlarına bakarsanız, çoğu zaman onlarca gigabaytın hesapta olmadığını görürsünüz.",
            "Resmin gizli tarafını görmek için Dosya Gezgini'nde gizli öğeleri açın: Windows 11'de Görünüm menüsünden Göster ve ardından Gizli öğeler seçeneğini işaretleyin; Windows 10'da Görünüm sekmesindeki Gizli öğeler kutusunu işaretleyin. Korumalı sistem dosyalarını da görmek için Klasör Seçenekleri'ni açın, Görünüm sekmesine geçin ve korumalı işletim sistemi dosyalarını gizleyen seçeneğin işaretini kaldırın. Şimdilik sadece bakın, silmeyin — bu dosyaların bir kısmı hayati önemdedir ve her birini güvenle küçültmenin yolu aşağıdaki bölümlerde anlatılıyor.",
            "Diskin zamanla neden dolmaya devam ettiğini anlamak da faydalıdır. Windows güncellemeleri gigabaytlarca veri indirir ve bir süre geri alma verisi saklar, tarayıcılar ve uygulamalar önbelleklerini sürekli büyütür, silinen her dosya da önce yine C diskinde duran Geri Dönüşüm Kutusu'na gider. Bunların hiçbiri arıza değildir — düzenli bakım gerektiren normal bir davranıştır.",
          ],
        },
        {
          title: "Alanı Gerçekte Neyin Kapladığını Görün",
          content: [
            "Herhangi bir şeyi silmeden önce bir harita çıkarın. Windows'un yerleşik özeti Ayarlar, Sistem, Depolama altındadır: C diskini Uygulamalar ve özellikler, Geçici dosyalar, Sistem ve ayrılmış gibi kategorilere böler ve bir kategoriye tıklayınca daha fazla ayrıntı gösterir. İyi bir ilk duraktır ancak kategoriler geniştir — Diğer veya Sistem, tam da bulmanız gereken klasörleri gizleyebilir ve görünüm tek tek dosyalara inemez.",
            "Görsel bir treemap bu soruyu çok daha hızlı yanıtlar. Disk Mop'un disk analizi (Disk Analysis), sürücüyü tarayıp her klasörü kapladığı alanla orantılı bir blok olarak çizer; böylece şişmiş bir önbellek klasörü veya unutulmuş bir video arşivi bir kategorinin içinde saklanmak yerine anında göze çarpar. Windows'ta [yer kaplayan büyük dosyaları bulma](/blog/find-large-files-windows) rehberimizde belirttiğimiz gibi, Büyük dosya bulucu (Large File Finder) da 500 MB'ın üzerindeki tüm dosyaları listeleyerek en hızlı kazanımların adresini gösterir.",
            "Hangi aracı kullanırsanız kullanın tek bir kurala uyun: ne olduğunu bilmediğiniz bir dosyayı asla silmeyin. Büyük bir dosya C:\\Windows veya System Volume Information içindeyse önce ne işe yaradığını öğrenin — aşağıdaki bölümler, büyük sistem dosyalarını elle silmek yerine güvenle küçültmenin yolunu anlatıyor.",
          ],
        },
        {
          title:
            "Gizli Alan Yiyiciler: hiberfil.sys, Sayfa Dosyası ve Geri Yükleme Noktaları",
          content: [
            "Çoğu sistemdeki en büyük sürpriz, detaylarını [hiberfil.sys ve pagefile.sys silme](/blog/delete-pagefile-sys-hiberfil-sys) rehberimizde incelediğimiz, Windows'un hazırda bekletme ve hızlı başlangıç için kullandığı hiberfil.sys dosyasıdır. hiberfil.sys boyutu takılı RAM ile orantılıdır; 16 veya 32 GB bellekli bir makinede sessizce gigabaytlarca alan kaplayabilir. Hazırda bekletmeyi hiç kullanmıyorsanız dosyayı kaldırabilirsiniz: Komut İstemi'ni yönetici olarak açın ve powercfg /h off komutunu çalıştırın — dosya anında silinir. Bunun hızlı başlangıcı da kapattığını unutmayın; hızlı başlangıç kalsın istiyorsanız dosyayı silmek yerine küçültmek için powercfg /h /type reduced komutunu kullanın.",
            "Sayfa dosyası pagefile.sys, Windows'un RAM'i diske doğru genişlettiği alandır ve o da birkaç gigabayt tutabilir. Bu dosyayı silmeyin veya devre dışı bırakmayın — Windows kararlılık için ona ihtiyaç duyar. Boyutunu gözden geçirmek isterseniz Win+R tuşlarına basın, sysdm.cpl yazın, Gelişmiş sekmesini açın, Performans altındaki Ayarlar'a tıklayın, tekrar Gelişmiş'e geçin ve Sanal bellek altındaki Değiştir'i seçin. Çoğu kullanıcı için en iyi ayar, boyutu Windows'un otomatik yönetmesine izin vermektir.",
            "Sistem geri yükleme noktaları faydalı bir sigortadır ancak varsayılan olarak diskin hatırı sayılır bir dilimini ayırabilir. Aynı sysdm.cpl penceresinde Sistem Koruması sekmesine geçin, C diskini seçin ve kullanabilecekleri en fazla disk alanını düşürmek için Yapılandır'a tıklayın. Eski noktaları tek seferde silmek için Disk Temizleme'yi yönetici olarak çalıştırın, Sistem dosyalarını temizle'ye tıklayın, Diğer Seçenekler sekmesini açın ve Sistem Geri Yükleme ve Gölge Kopyalar altındaki temizleme düğmesini kullanın — en son nokta hariç tüm geri yükleme noktaları silinir.",
          ],
        },
        {
          title: "Geçici Dosyaları ve Uygulama Önbelleklerini Temizleyin",
          content: [
            "[Windows'ta disk alanı açmanın](/blog/how-to-free-disk-space) klasik cevabı [geçici dosyaları silmektir](/blog/delete-temporary-files-windows) ve Windows bunları temizlemek için iki yerleşik yol sunar. Ayarlar, Sistem, Depolama altında Geçici dosyalar bölümünü açın, onay kutularını gözden geçirin ve ihtiyacınız olmayanları kaldırın — Windows Update temizleme ve Teslim İyileştirme dosyaları genellikle en büyük kalemlerdir. Daha eski Disk Temizleme aracı (cleanmgr) aynı işi yapar ve Sistem dosyalarını temizle düğmesi ek kategorilerin kilidini açar.",
            "Geçici klasörleri doğrudan da boşaltabilirsiniz: Win+R tuşlarına basın, %temp% yazın ve açılan klasörün içeriğini silin; ardından aynısını C:\\Windows\\Temp için tekrarlayın. O anda kullanımda olan dosyalar silinmeyi reddeder — onları atlamanız yeterli. Ayrıca her tarayıcı yüzlerce megabaytı bulan kendi önbelleğini tutar ve normalde her tarayıcının içinden ayrı ayrı temizlenmesi gerekir.",
            "Disk Mop tüm bunları tek adıma indirir. Önbellek temizleyici (Cache Cleaner) sistem ve uygulama önbelleklerini birlikte tarar, tarayıcı önbelleği temizleyici Chrome, Firefox ve Edge'i tek geçişte kapsar, Speed Up düğmesi ise eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve Geri Dönüşüm Kutusu'nu tek tıkla temizler — yukarıdaki manuel turun sonucunu beş ayrı yere uğramadan verir.",
          ],
        },
        {
          title: "AppData ve İndirilenler Klasörlerini Kontrol Edin",
          content: [
            "Sistem dosyalarını eledikten sonra alan kaplayan AppData ile karşılaştıysanız yalnız değilsiniz: [AppData klasörünü temizleme](/blog/appdata-folder-cleanup) rehberimizde açıkladığımız gibi neredeyse her uygulama verilerini ve önbelleklerini bu gizli klasörde saklar. En büyük bölümünü açmak için Win+R tuşlarına basıp %localappdata% yazın. Sohbet, müzik ve video uygulamaları sık rastlanan suçlulardır — her birinin önbellek alt klasörü birkaç gigabayta şişebilir. Bir uygulamanın klasörü içindeki Cache klasörünü boşaltmak güvenlidir; ancak uygulama kuruluyken tüm klasörünü silmeyin, artık kullanmıyorsanız Ayarlar, Uygulamalar üzerinden düzgün şekilde kaldırın.",
            "İndirilenler klasörü ise diğer sessiz biriktiricidir. Kurulum dosyaları, ZIP arşivleri ve disk kalıpları genellikle tam bir kez kullanılır ve sonra unutulur; İndirilenler C diskinde durduğu için hepsi sistem alanınızdan düşer. Klasörü boyuta göre sıralayın, gerçekten gerekenleri tutup kalanını silin — ve dosyaların Geri Dönüşüm Kutusu boşaltılana kadar tam olarak gitmediğini unutmayın.",
            "Disk Mop'un [indirilenler temizleyicisi](/blog/clean-up-downloads-folder), İndirilenler klasöründeki eski dosyaları kategorilere ayırarak grup halinde temizlemenizi sağlar; [yinelenen dosya bulucu](/blog/find-duplicate-files-windows) ise SHA-256 karmaları kullanarak diske dağılmış özdeş fotoğraf, video ve belge kopyalarını bulur — kopyalar saf alan israfıdır ve tek kopyaya indirmek her zaman güvenlidir.",
          ],
        },
        {
          title: "C Diskini Otomatik Olarak Temiz Tutun",
          content: [
            "Diskin yeniden dolmasını engelleyen bir şey yoksa yukarıdaki her çözüm geçicidir. Windows bunun için [Depolama Alanı Algılayıcısı'nı (Storage Sense)](/blog/disk-mop-vs-storage-sense) sunar: Ayarlar, Sistem, Depolama altında etkinleştirdiğinizde geçici dosyaları otomatik siler, Geri Dönüşüm Kutusu'nu belirli aralıklarla boşaltır ve isteğe bağlı olarak İndirilenler'deki eski dosyaları da temizleyebilir. Açmaya değer; ancak uygulama ve tarayıcı önbelleklerine dokunmaz.",
            "Disk Mop'un zamanlanmış temizliği (Scheduled Cleanup) bir adım öteye gider: haftalık veya aylık bir görev kurduğunuzda önbellekleri, geçici dosyaları ve Geri Dönüşüm Kutusu'nu otomatik temizler; sistem sağlığı puanı (System Health Score) da diskin ne zaman ilgi istediğini tek bakışta gösterir. C diskinin yaklaşık %15-20'sini boş tutmayı hedefleyin — güncellemeler ve sanal bellek için yeterli alan kaldığında Windows akıcı kalır ve disk bir daha sebepsiz doluyormuş gibi görünmez.",
          ],
        },
      ],
      faq: [
        {
          question: "C diski neden sebepsiz yere dolar?",
          answer:
            "C diski asla sebepsiz dolmaz. Genellikle hazırda bekletme dosyası (hiberfil.sys), sanal bellek (pagefile.sys), sistem geri yükleme gölge kopyaları ve AppData içindeki gizli önbellekler kullanıcıdan gizlendiği için sebepsiz doluyormuş gibi görünür.",
        },
        {
          question: "hiberfil.sys dosyasını silmek zararlı mıdır?",
          answer:
            "Hayır, bilgisayarınızı 'Hazırda Beklet' moduna almıyorsanız bu dosyayı silmek tamamen güvenlidir. Yönetici Komut İstemi'nde 'powercfg /h off' yazarak dosyayı güvenle kaldırabilirsiniz.",
        },
        {
          question: "pagefile.sys dosyasını silebilir miyim?",
          answer:
            "Hayır, pagefile.sys dosyasını silmemelisiniz. Windows fiziksel RAM yetmediğinde veya çökmeleri önlemek için bu sanal bellek dosyasına ihtiyaç duyar. Boyutunu Windows'un yönetmesine izin vermek en güvenli yoldur.",
        },
        {
          question: "C diskinde ne kadar boş alan bırakılmalıdır?",
          answer:
            "Windows'un ve SSD sürücünüzün takılmadan çalışması için C diskinde en az %15 ila %20 oranında (veya en az 20–30 GB) boş alan bırakılması önerilir.",
        },
      ],
      verdict: [
        "Sebepsiz doluyor gibi görünen bir C diski aslında görünmez dosyalarla dolu bir disktir: hiberfil.sys, sayfa dosyası, geri yükleme noktaları, geçici dosyalar ve AppData önbellekleri. Sekiz çözümü sırayla uygulayın — gizli dosyaları gösterin, alanı görsel olarak haritalayın, hazırda bekletme dosyasını küçültün, sayfa dosyasını Windows'a bırakın, geri yükleme noktalarını sınırlayın, geçici dosyaları ve önbellekleri temizleyin, AppData ile İndirilenler'i düzenleyin ve rutini otomatikleştirin — gizem, dağınıklıkla birlikte ortadan kalkacaktır.",
        "Disk Mop tüm bu iş akışını tek uygulamada toplar: disk analizi alanın nereye gittiğini gösterir, önbellek temizleyici ve Speed Up alanı geri kazanır, indirilenler temizleyici ve yinelenen dosya dedektörü unuttuğunuz klasörlerle ilgilenir, zamanlanmış temizlik de diski o günden sonra temiz tutar. $19.90 karşılığında tek seferlik ödemeyle ömür boyu lisans sunar; ücretsiz sürümle yükseltmeden önce deneyebilirsiniz.",
      ],
      ctaText: "Disk Mop ile C diskinizde yer açın",
    },
    en: {
      title: "C Drive Full for No Reason? 8 Fixes for Windows 10/11",
      metaDescription:
        "C drive full for no reason? Learn what hiberfil.sys, the page file, restore points and AppData really consume, and free up space on Windows 10/11 today.",
      subtitle:
        "A diagnose-first guide to finding and removing the hidden files that eat your system drive",
      intro: [
        "If your C drive is full for no reason, the space is almost always being used by files Windows hides from you: the hibernation file hiberfil.sys, the page file pagefile.sys, System Restore points and gigabytes of application caches inside the AppData folder. File Explorer does not show these protected system files by default, so your visible folders add up to far less than what Windows reports as used. The solution is to diagnose first — see exactly what occupies the drive — and only then start deleting.",
        "A C drive that keeps filling up is frustrating because the culprits grow silently: Windows updates leave leftovers behind, apps expand their caches and the hibernation file alone can consume a sizeable share of your installed RAM. In this guide you will find eight practical fixes: reveal hidden files, map your disk usage visually, shrink or remove hiberfil.sys, right-size the page file, limit restore points, clear temporary files and caches, tidy up AppData and Downloads, and finally automate the whole routine so the problem never comes back.",
      ],
      keyTakeaways: [
        "A C drive is never full for no reason; the consumed space almost always stems from hidden system files like hiberfil.sys, pagefile.sys, restore points, and AppData caches.",
        "Disabling hibernation with 'powercfg /h off' in an admin command prompt instantly frees up disk space equal to your RAM capacity (8–32 GB).",
        "Never delete pagefile.sys outright; Windows relies on it for stability, but letting Windows manage its size automatically prevents ballooning.",
        "Unrestricted System Restore points can hoard 20+ GB of shadow copies; pruning older points recovers space in seconds.",
        "DiskMop Disk Analysis uses visual treemaps to expose hidden disk hogs on your C drive instantly.",
      ],
      dataTable: {
        caption:
          "Hidden space hogs causing C drive fullness and their solutions",
        columns: [
          "Hidden Component",
          "Typical Size",
          "Safety Level",
          "How to Fix",
        ],
        rows: [
          [
            "hiberfil.sys (Hibernation file)",
            "8 GB – 32 GB (matches RAM)",
            "Safe (If not using hibernation)",
            "Run 'powercfg /h off' in admin terminal",
          ],
          [
            "System Restore Points",
            "5 GB – 25 GB",
            "Safe (Keep newest point)",
            "Disk Cleanup > More Options > Clean up System Restore",
          ],
          [
            "AppData & Temp Caches",
            "5 GB – 30 GB",
            "Completely Safe",
            "Empty %temp% and run DiskMop Cache Cleaner",
          ],
          [
            "Windows Update Leftovers",
            "2 GB – 10 GB",
            "Completely Safe",
            "Settings > Storage > Temporary files > Cleanup",
          ],
          [
            "pagefile.sys (Virtual memory)",
            "4 GB – 16 GB",
            "Manage Only (Do not delete)",
            "Set to 'System managed size' in Virtual Memory settings",
          ],
        ],
      },
      howTo: {
        name: "How to quickly free space on a full C drive",
        totalTime: "PT15M",
        steps: [
          {
            name: "Reveal hidden operating system files",
            text: "Open File Explorer, go to View > Show > Hidden items. In Folder Options, temporarily untick 'Hide protected operating system files' to see what is eating space.",
          },
          {
            name: "Disable hibernation to reclaim RAM-sized space",
            text: "Open Terminal as Administrator and run 'powercfg /h off'. This immediately deletes hiberfil.sys, reclaiming 8 to 32 GB.",
          },
          {
            name: "Delete old System Restore points",
            text: "Launch Disk Cleanup as Administrator on drive C:, open the More Options tab, and click Clean up under System Restore and Shadow Copies.",
          },
          {
            name: "Empty temporary folders",
            text: "Press Win+R, type %temp%, and delete the contents. Clear Windows temporary files in Settings > System > Storage.",
          },
          {
            name: "Empty the Recycle Bin",
            text: "Right-click the Recycle Bin and choose Empty Recycle Bin to release deleted gigabytes back to the operating system.",
          },
        ],
      },
      sections: [
        {
          title: "Why Your C Drive Fills Up for No Reason",
          content: [
            "When people ask why is my C drive full, the honest answer is that it is never full for no reason — the reasons are just invisible. Windows marks core files such as hiberfil.sys and pagefile.sys as protected operating system files, and File Explorer hides them by default. Restore points live in a hidden System Volume Information folder, and application caches sit in AppData, which is also hidden. Select all your visible folders, check their combined size, and you will often find tens of gigabytes unaccounted for.",
            "To see the hidden part of the picture, open File Explorer and enable hidden items: on Windows 11 use the View menu, choose Show and tick Hidden items; on Windows 10 tick Hidden items on the View tab. To reveal protected system files as well, open Folder Options, switch to the View tab and untick the option that hides protected operating system files. Look but do not delete yet — some of these files are essential, and the safe way to handle each one is covered in the sections below.",
            "It also helps to understand why the drive keeps filling up over time. Windows updates download several gigabytes and keep rollback data for a while, browsers and apps grow their caches continuously, and every deleted file first lands in the Recycle Bin, which still lives on the C drive. None of this is a malfunction — it is normal behavior that simply needs regular housekeeping.",
          ],
        },
        {
          title: "See What Is Actually Taking Up Space",
          content: [
            "Before deleting anything, get a map. Windows has a built-in overview under Settings, System, Storage: it breaks the C drive down into categories such as Apps and features, Temporary files and System and reserved, and clicking a category shows more detail. It is a good first stop, but the categories are broad — Other or System can hide exactly the folders you need to find, and the view cannot drill down to individual files.",
            "A visual treemap answers the question much faster. Disk Mop's Disk Analysis scans the drive and draws every folder as a block sized by how much space it takes, so a bloated cache folder or a forgotten video archive jumps out immediately instead of hiding inside a category. As covered in our guide on [finding large files on Windows](/blog/find-large-files-windows), the Large File Finder complements this by listing every file over 500 MB, which is usually where the fastest wins are.",
            "Whichever tool you use, follow one rule: never delete a file you cannot identify. If a large file sits inside C:\\Windows or System Volume Information, look up what it does first — the sections below explain how to shrink the big system files safely instead of deleting them by hand.",
          ],
        },
        {
          title:
            "Hidden Space Hogs: hiberfil.sys, Page File and Restore Points",
          content: [
            "The single biggest surprise on most systems is [hiberfil.sys and pagefile.sys](/blog/delete-pagefile-sys-hiberfil-sys), the files Windows uses for hibernation and Fast Startup. The hiberfil.sys size is proportional to your installed RAM, so on a machine with 16 or 32 GB of memory it can quietly consume many gigabytes of the C drive. If you never use hibernation, you can remove it: open Command Prompt as administrator and run powercfg /h off — the file disappears immediately. Keep in mind this also turns off Fast Startup; if you want to keep that, run powercfg /h /type reduced instead to shrink the file rather than delete it.",
            "The page file, pagefile.sys, is where Windows extends your RAM onto disk, and it can also occupy several gigabytes. Do not delete or disable it — Windows needs it for stability. If you want to review its size, press Win+R, type sysdm.cpl, open the Advanced tab, click Settings under Performance, open Advanced again and choose Change under Virtual memory. For most users the best setting is to let Windows manage the size automatically.",
            "System Restore points are useful insurance, but by default they can reserve a noticeable slice of the drive. In the same sysdm.cpl window, switch to the System Protection tab, select the C drive and click Configure to lower the maximum disk space they may use. To remove old points in one go, run Disk Cleanup as administrator, click Clean up system files, open the More Options tab and use the clean-up button under System Restore and Shadow Copies — it deletes every restore point except the most recent one.",
          ],
        },
        {
          title: "Clean Temporary Files and App Caches",
          content: [
            "As explained in our guide to [free up disk space on Windows](/blog/how-to-free-disk-space), [clearing temporary files](/blog/delete-temporary-files-windows) is the classic answer when you need to reclaim storage on your C drive, and Windows gives you two built-in ways to clear them. Under Settings, System, Storage, open Temporary files, review the checkboxes and remove what you do not need — Windows Update Cleanup and Delivery Optimization files are usually the largest entries. The older Disk Cleanup tool (run cleanmgr) does the same job, and its Clean up system files button unlocks additional categories.",
            "You can also empty the temp folders directly: press Win+R, type %temp% and delete the contents of the folder that opens, then repeat with C:\\Windows\\Temp. Files that are currently in use will refuse to delete — just skip them. Each browser additionally keeps its own cache of hundreds of megabytes or more, which normally has to be cleared from inside every browser separately.",
            "Disk Mop condenses all of this into one step. The Cache Cleaner scans system and application caches together, the Browser Cache Cleaner covers Chrome, Firefox and Edge in a single pass, and the Speed Up button clears old downloads, system cache, browser cache and the Recycle Bin with one click — the same result as the manual round above, without visiting five different places.",
          ],
        },
        {
          title: "Check the AppData and Downloads Folders",
          content: [
            "If you have ruled out system files and found [AppData taking up space](/blog/appdata-folder-cleanup), you are in good company: nearly every application stores its data and caches in this hidden folder. Press Win+R and type %localappdata% to open the largest part of it. Chat, music and video apps are frequent offenders — their cache subfolders can swell to several gigabytes each. It is safe to empty a Cache folder inside an app's directory, but do not delete an application's whole folder while it is installed; if you no longer use the app, uninstall it properly under Settings, Apps.",
            "The Downloads folder is the other quiet accumulator. Installers, ZIP archives and disc images are usually needed exactly once and then forgotten, and because Downloads lives on the C drive, they all count against your system space. Sort the folder by size, keep what you genuinely need and delete the rest — then remember the files are not truly gone until the Recycle Bin is emptied.",
            "Disk Mop's [Downloads Cleaner](/blog/clean-up-downloads-folder) automates this review by categorizing old files in the Downloads folder so you can clear them in groups, and the [Duplicate Detector](/blog/find-duplicate-files-windows) uses SHA-256 hashes to find identical copies of photos, videos and documents scattered across the drive — duplicates are pure wasted space and are always safe to reduce to a single copy.",
          ],
        },
        {
          title: "Keep the C Drive Clean Automatically",
          content: [
            "Every fix above is temporary if nothing prevents the drive from filling up again. Windows offers [Storage Sense](/blog/disk-mop-vs-storage-sense) for this: under Settings, System, Storage you can enable it to delete temporary files automatically, empty the Recycle Bin on a schedule and optionally clean up old files in Downloads. It is worth switching on, though it does not touch application or browser caches.",
            "Disk Mop's Scheduled Cleanup goes further: set up a weekly or monthly task and it clears caches, temporary files and the Recycle Bin automatically, while the System Health Score shows at a glance when the drive needs attention. Aim to keep roughly 15-20% of the C drive free — with enough headroom for updates and virtual memory, Windows stays responsive and the drive stops feeling like it fills up for no reason.",
          ],
        },
      ],
      faq: [
        {
          question: "Why is my C drive filling up automatically for no reason?",
          answer:
            "A C drive never fills up on its own without cause. In almost all cases, hidden OS files like hiberfil.sys, the page file (pagefile.sys), system restore shadow copies, or unpurged AppData caches are silently consuming space in the background.",
        },
        {
          question: "Is it safe to delete hiberfil.sys?",
          answer:
            "Yes, if you do not use Windows Hibernation. Running 'powercfg /h off' in an elevated command prompt immediately and safely removes hiberfil.sys and frees up several gigabytes.",
        },
        {
          question: "Can I remove pagefile.sys to save space?",
          answer:
            "No, you should not disable or delete pagefile.sys. Windows requires this virtual memory file to prevent program crashes when physical RAM is exhausted. Setting its size to be automatically managed by Windows is best.",
        },
        {
          question: "How much free space should I keep on my C drive?",
          answer:
            "You should aim to keep at least 15% to 20% (or roughly 20 to 30 GB) of free space on your C drive to allow Windows updates, virtual memory expansion, and SSD wear-leveling algorithms to function smoothly.",
        },
      ],
      verdict: [
        "A C drive that seems full for no reason is really a drive full of invisible files: hiberfil.sys, the page file, restore points, temporary files and AppData caches. Work through the eight fixes in order — reveal hidden files, map the space visually, shrink the hibernation file, leave the page file to Windows, cap restore points, clear temporary files and caches, tidy AppData and Downloads, and automate the routine — and the mystery disappears along with the clutter.",
        "Disk Mop packs the whole workflow into one app: Disk Analysis shows where the space went, the Cache Cleaner and Speed Up reclaim it, the Downloads Cleaner and Duplicate Detector handle the folders you forget about, and Scheduled Cleanup keeps the drive clean from then on. It is a one-time purchase of $19.90 with a lifetime license, and the free version lets you try it before upgrading.",
      ],
      ctaText: "Free up your C drive with Disk Mop",
    },
    de: {
      title: "Laufwerk C ohne Grund voll? 8 Lösungen für Windows 10/11",
      metaDescription:
        "Laufwerk C ohne Grund voll? Erfahren Sie, wie viel Platz hiberfil.sys, Auslagerungsdatei und AppData belegen, und schaffen Sie Schritt für Schritt Platz.",
      subtitle:
        "Erst diagnostizieren, dann löschen: die versteckten Dateien finden, die Ihr Systemlaufwerk füllen",
      intro: [
        "Wenn Laufwerk C scheinbar ohne Grund voll ist, belegen fast immer versteckte Dateien den Platz: die Ruhezustandsdatei hiberfil.sys, die Auslagerungsdatei pagefile.sys, Systemwiederherstellungspunkte und gigabyteweise App-Caches im AppData-Ordner. Der Datei-Explorer blendet diese geschützten Systemdateien standardmäßig aus, weshalb Ihre sichtbaren Ordner deutlich weniger ergeben, als Windows als belegt anzeigt. Die Lösung: erst diagnostizieren, was den Platz wirklich belegt — und erst dann löschen.",
        "In diesem Leitfaden finden Sie acht praktische Lösungen: versteckte Dateien einblenden, die Belegung visuell kartieren, hiberfil.sys verkleinern oder entfernen, die Auslagerungsdatei richtig dimensionieren, Wiederherstellungspunkte begrenzen, temporäre Dateien und Caches bereinigen, AppData und Downloads aufräumen und die Routine schließlich automatisieren, damit das Problem nicht zurückkehrt.",
      ],
      keyTakeaways: [
        "Das Laufwerk C: ist nie ohne Grund voll; der belegte Speicherplatz stammt fast immer von versteckten Systemdateien wie hiberfil.sys, pagefile.sys, Wiederherstellungspunkten und AppData-Caches.",
        "Das Deaktivieren des Ruhezustands mit 'powercfg /h off' in einer Administrator-Eingabeaufforderung gibt sofort Speicherplatz in Höhe Ihrer RAM-Kapazität frei (8–32 GB).",
        "Löschen Sie pagefile.sys keinesfalls direkt; Windows benötigt die Auslagerungsdatei für Systemstabilität. Überlassen Sie die Größenverwaltung am besten automatisch Windows.",
        "Unbegrenzte Systemwiederherstellungspunkte können über 20 GB an Schattenkopien anhäufen; das Bereinigen alter Punkte bringt in Sekunden massiv Speicher zurück.",
        "Die DiskMop-Festplattenanalyse deckt versteckte Speicherfresser auf Laufwerk C: mithilfe visueller Treemaps sofort auf.",
      ],
      sections: [
        {
          title: "Warum sich Laufwerk C scheinbar ohne Grund füllt",
          content: [
            "Ein Laufwerk füllt sich nie ohne Grund — die Gründe sind nur unsichtbar. Windows markiert Kerndateien wie hiberfil.sys und pagefile.sys als geschützte Systemdateien, Wiederherstellungspunkte liegen im versteckten Ordner System Volume Information, und App-Caches stecken im ebenfalls versteckten AppData-Ordner. Zählt man alle sichtbaren Ordner zusammen, fehlen deshalb oft Dutzende Gigabytes in der Rechnung.",
            "Um das vollständige Bild zu sehen, aktivieren Sie im Datei-Explorer die Anzeige ausgeblendeter Elemente: unter Windows 11 über das Menü Anzeigen und dann Einblenden, unter Windows 10 auf der Registerkarte Ansicht. In den Ordneroptionen können Sie zusätzlich das Ausblenden geschützter Systemdateien deaktivieren. Schauen Sie zunächst nur — einige dieser Dateien sind unverzichtbar, und die folgenden Abschnitte zeigen, wie Sie jede davon sicher verkleinern.",
            "Dass sich das Laufwerk immer wieder füllt, ist zudem normal: Windows-Updates hinterlassen Rückstände, Browser und Apps vergrößern ihre Caches laufend, und jede gelöschte Datei landet zunächst im Papierkorb, der ebenfalls auf Laufwerk C liegt. Das ist kein Defekt, sondern Alltag, der regelmäßige Pflege braucht.",
          ],
        },
        {
          title: "Sehen Sie, was den Speicherplatz wirklich belegt",
          content: [
            "Verschaffen Sie sich vor dem Löschen eine Karte. Die integrierte Übersicht unter Einstellungen, System, Speicher teilt Laufwerk C in Kategorien wie Apps und Features, Temporäre Dateien sowie System auf. Das ist ein guter Anfang, doch die Kategorien sind grob — gerade die Ordner, die Sie suchen, verstecken sich oft hinter Sonstiges oder System, und bis zu einzelnen Dateien kommt die Ansicht nicht.",
            "Eine visuelle Treemap beantwortet die Frage schneller. Disk Mops Festplattenanalyse (Disk Analysis) zeichnet jeden Ordner als Block proportional zu seiner Größe, sodass ein aufgeblähter Cache-Ordner oder ein vergessenes Videoarchiv sofort ins Auge springt. Der Große-Dateien-Finder listet ergänzend alle Dateien über 500 MB auf — dort liegen meist die schnellsten Erfolge.",
            "Egal welches Werkzeug Sie nutzen: Löschen Sie nie eine Datei, die Sie nicht identifizieren können. Liegt eine große Datei in C:\\Windows oder System Volume Information, klären Sie zuerst ihre Funktion — die folgenden Abschnitte zeigen den sicheren Weg.",
          ],
        },
        {
          title:
            "Versteckte Platzfresser: hiberfil.sys, Auslagerungsdatei und Wiederherstellungspunkte",
          content: [
            "Die größte Überraschung ist auf den meisten Systemen hiberfil.sys, die Datei für Ruhezustand und Schnellstart. Ihre Größe ist proportional zum eingebauten RAM und kann bei 16 oder 32 GB Arbeitsspeicher viele Gigabytes belegen. Wer den Ruhezustand nie nutzt, kann die Datei entfernen: die Eingabeaufforderung als Administrator öffnen und powercfg /h off ausführen. Beachten Sie, dass damit auch der Schnellstart deaktiviert wird; alternativ verkleinert powercfg /h /type reduced die Datei, statt sie zu löschen.",
            "Die Auslagerungsdatei pagefile.sys erweitert den RAM auf die Festplatte und belegt ebenfalls mehrere Gigabytes. Löschen oder deaktivieren Sie sie nicht — Windows braucht sie für die Stabilität. Zum Überprüfen drücken Sie Win+R, tippen sysdm.cpl, öffnen die Registerkarte Erweitert, klicken unter Leistung auf Einstellungen und wählen unter Virtueller Arbeitsspeicher die Option Ändern. Für die meisten Nutzer ist die automatische Verwaltung durch Windows die beste Wahl.",
            "Wiederherstellungspunkte sind eine nützliche Versicherung, reservieren aber standardmäßig einen spürbaren Teil des Laufwerks. Wechseln Sie im selben Fenster zur Registerkarte Computerschutz, wählen Sie Laufwerk C und klicken Sie auf Konfigurieren, um die maximale Belegung zu senken. Alte Punkte entfernen Sie gesammelt über die Datenträgerbereinigung: Systemdateien bereinigen, Registerkarte Weitere Optionen, dann die Bereinigung unter Systemwiederherstellung und Schattenkopien — alle Punkte außer dem neuesten werden gelöscht.",
          ],
        },
        {
          title: "Temporäre Dateien und App-Caches bereinigen",
          content: [
            "Temporäre Dateien sind der Klassiker, wenn Sie auf Laufwerk C Platz schaffen wollen. Öffnen Sie unter Einstellungen, System, Speicher den Bereich Temporäre Dateien und entfernen Sie, was Sie nicht brauchen — die Windows Update-Bereinigung und Übermittlungsoptimierungsdateien sind meist die größten Posten. Die ältere Datenträgerbereinigung (cleanmgr) erledigt dasselbe; die Schaltfläche Systemdateien bereinigen schaltet weitere Kategorien frei.",
            "Die Temp-Ordner lassen sich auch direkt leeren: Win+R drücken, %temp% eingeben und den Inhalt des Ordners löschen, danach dasselbe für C:\\Windows\\Temp. Gerade genutzte Dateien lassen sich nicht löschen — überspringen Sie sie einfach. Zusätzlich führt jeder Browser einen eigenen Cache, der normalerweise in jedem Browser separat geleert werden muss.",
            "Disk Mop verdichtet all das auf einen Schritt: Der Cache-Bereiniger scannt System- und Anwendungs-Caches gemeinsam, der Browser-Cache-Bereiniger deckt Chrome, Firefox und Edge in einem Durchgang ab, und die Speed-Up-Funktion leert alte Downloads, Systemcache, Browsercache und Papierkorb mit einem Klick.",
          ],
        },
        {
          title: "AppData- und Downloads-Ordner überprüfen",
          content: [
            "Fast jede Anwendung speichert Daten und Caches im versteckten AppData-Ordner. Drücken Sie Win+R und tippen Sie %localappdata%, um den größten Teil zu öffnen. Chat-, Musik- und Video-Apps sind häufige Platzfresser — ihre Cache-Unterordner wachsen auf mehrere Gigabytes an. Den Cache-Ordner einer App zu leeren ist sicher; löschen Sie aber nie den gesamten Ordner einer installierten Anwendung. Nicht mehr genutzte Programme deinstallieren Sie sauber unter Einstellungen, Apps.",
            "Der Downloads-Ordner ist der zweite stille Sammler: Installationsdateien, ZIP-Archive und Datenträgerabbilder werden meist genau einmal gebraucht und dann vergessen. Sortieren Sie den Ordner nach Größe, behalten Sie nur das Nötige — und denken Sie daran, dass der Platz erst nach dem Leeren des Papierkorbs wirklich frei wird.",
            "Disk Mops Downloads-Bereiniger kategorisiert alte Dateien im Downloads-Ordner für die gruppenweise Bereinigung, und der Duplikatfinder findet per SHA-256-Hash identische Kopien von Fotos, Videos und Dokumenten — Duplikate sind reine Platzverschwendung und lassen sich immer gefahrlos auf eine Kopie reduzieren.",
          ],
        },
        {
          title: "Laufwerk C automatisch sauber halten",
          content: [
            "Jede Lösung bleibt vorübergehend, wenn nichts das erneute Volllaufen verhindert. Windows bietet dafür die Speicheroptimierung (Storage Sense): Unter Einstellungen, System, Speicher aktiviert, löscht sie temporäre Dateien automatisch, leert den Papierkorb nach Zeitplan und kann optional alte Downloads aufräumen. Anwendungs- und Browser-Caches deckt sie jedoch nicht ab.",
            "Disk Mops geplante Bereinigung (Scheduled Cleanup) geht weiter: Ein wöchentlicher oder monatlicher Task bereinigt Caches, temporäre Dateien und Papierkorb automatisch, und der System Health Score zeigt auf einen Blick, wann das Laufwerk Pflege braucht. Halten Sie etwa 15-20 % von Laufwerk C frei — dann bleibt Windows reaktionsschnell, und das Laufwerk wirkt nie wieder grundlos voll.",
          ],
        },
      ],
      howTo: {
        name: "So geben Sie schnell Speicherplatz auf einem vollen C-Laufwerk frei",
        totalTime: "PT15M",
        steps: [
          {
            name: "Versteckte Systemdateien einblenden",
            text: "Öffnen Sie den Datei-Explorer, klicken Sie auf Anzeigen > Einblenden > Ausgeblendete Elemente. Deaktivieren Sie in den Ordneroptionen vorübergehend 'Geschützte Systemdateien ausblenden', um die Speicherbelegung zu sehen.",
          },
          {
            name: "Ruhezustand deaktivieren, um RAM-großen Speicherplatz freizugeben",
            text: "Öffnen Sie das Terminal als Administrator und führen Sie 'powercfg /h off' aus. Dies löscht hiberfil.sys sofort und gibt 8 bis 32 GB frei.",
          },
          {
            name: "Alte Systemwiederherstellungspunkte löschen",
            text: "Starten Sie die Datenträgerbereinigung als Administrator für Laufwerk C:, wechseln Sie zum Reiter 'Weitere Optionen' und klicken Sie unter 'Systemwiederherstellung und Schattenkopien' auf 'Bereinigen'.",
          },
          {
            name: "Temporäre Ordner leeren",
            text: "Drücken Sie Win+R, geben Sie %temp% ein und löschen Sie den Inhalt. Bereinigen Sie zudem die temporären Windows-Dateien unter Einstellungen > System > Speicher.",
          },
          {
            name: "Papierkorb leeren",
            text: "Klicken Sie mit der rechten Maustaste auf den Papierkorb und wählen Sie 'Papierkorb leeren', um die gelöschten Gigabytes wieder an das Betriebssystem freizugeben.",
          },
        ],
      },
      dataTable: {
        caption:
          "Versteckte Speicherfresser auf Laufwerk C: und deren Lösungen",
        columns: [
          "Versteckte Komponente",
          "Typische Größe",
          "Sicherheitsstufe",
          "Lösungsmethode",
        ],
        rows: [
          [
            "hiberfil.sys (Ruhezustandsdatei)",
            "8 GB – 32 GB (entspricht RAM)",
            "Sicher (ohne Ruhezustand)",
            "'powercfg /h off' im Admin-Terminal ausführen",
          ],
          [
            "Systemwiederherstellungspunkte",
            "5 GB – 25 GB",
            "Sicher (neuesten Punkt behalten)",
            "Datenträgerbereinigung > Weitere Optionen > Wiederherstellung bereinigen",
          ],
          [
            "AppData & Temp-Caches",
            "5 GB – 30 GB",
            "Vollständig sicher",
            "%temp% leeren und DiskMop Cache-Cleaner ausführen",
          ],
          [
            "Windows Update-Reste",
            "2 GB – 10 GB",
            "Vollständig sicher",
            "Einstellungen > Speicher > Temporäre Dateien > Bereinigen",
          ],
          [
            "pagefile.sys (Virtueller Speicher)",
            "4 GB – 16 GB",
            "Nur verwalten (nicht löschen)",
            "Auf 'Größe wird vom System verwaltet' belassen",
          ],
        ],
      },
      faq: [
        {
          question:
            "Warum füllt sich mein Laufwerk C: scheinbar grundlos von alleine?",
          answer:
            "Ein C-Laufwerk füllt sich niemals ohne konkrete Ursache. In den allermeisten Fällen belegen versteckte Betriebssystemdateien wie hiberfil.sys, die Auslagerungsdatei (pagefile.sys), Volumeschattenkopien der Systemwiederherstellung oder unbereinigte AppData-Caches unbemerkt im Hintergrund den Speicher.",
        },
        {
          question: "Ist es sicher, die Datei hiberfil.sys zu löschen?",
          answer:
            "Ja, sofern Sie den Ruhezustand (Hibernation) von Windows nicht verwenden. Der Befehl 'powercfg /h off' in einem Administrator-Terminal entfernt hiberfil.sys sofort und sicher und gibt mehrere Gigabyte frei.",
        },
        {
          question:
            "Kann ich pagefile.sys löschen, um Speicherplatz zu sparen?",
          answer:
            "Nein, Sie sollten die Auslagerungsdatei pagefile.sys weder deaktivieren noch manuell löschen. Windows benötigt diesen virtuellen Arbeitsspeicher, um Abstürze bei voller RAM-Auslastung zu verhindern. Die Option 'Größe wird vom System verwaltet' ist optimal.",
        },
        {
          question:
            "Wie viel freien Speicherplatz sollte ich auf Laufwerk C: behalten?",
          answer:
            "Sie sollten stets mindestens 15 % bis 20 % (oder etwa 20 bis 30 GB) freien Speicherplatz auf Laufwerk C: behalten, damit Windows-Updates, dynamischer virtueller Speicher und SSD-Wear-Leveling reibungslos funktionieren.",
        },
      ],
      verdict: [
        "Ein scheinbar grundlos volles Laufwerk C ist in Wahrheit voller unsichtbarer Dateien: hiberfil.sys, Auslagerungsdatei, Wiederherstellungspunkte, temporäre Dateien und AppData-Caches. Arbeiten Sie die acht Lösungen der Reihe nach durch — versteckte Dateien einblenden, Belegung kartieren, Ruhezustandsdatei verkleinern, Auslagerungsdatei Windows überlassen, Wiederherstellungspunkte begrenzen, Caches bereinigen, AppData und Downloads aufräumen, Routine automatisieren — und das Rätsel verschwindet zusammen mit dem Ballast.",
        "Disk Mop bündelt den gesamten Ablauf in einer App: Die Festplattenanalyse zeigt, wohin der Platz verschwunden ist, Cache-Bereiniger und Speed Up holen ihn zurück, Downloads-Bereiniger und Duplikatfinder kümmern sich um die vergessenen Ordner, und die geplante Bereinigung hält das Laufwerk dauerhaft sauber. Einmalig 19,90 $, lebenslange Lizenz — die kostenlose Version können Sie vorab testen.",
      ],
      ctaText: "Schaffen Sie mit Disk Mop Platz auf Laufwerk C",
    },
    fr: {
      title:
        "Le disque C se remplit sans raison ? 8 solutions pour Windows 10/11",
      metaDescription:
        "Disque C plein sans raison ? Voyez ce que consomment hiberfil.sys, le fichier d'échange, les points de restauration et AppData, et libérez de la place.",
      subtitle:
        "Un guide qui commence par le diagnostic pour trouver et supprimer les fichiers cachés qui saturent votre disque système",
      intro: [
        "Si votre disque C est plein sans raison apparente, l'espace est presque toujours occupé par des fichiers que Windows vous cache : le fichier de mise en veille prolongée hiberfil.sys, le fichier d'échange pagefile.sys, les points de restauration système et plusieurs gigaoctets de caches applicatifs dans le dossier AppData. L'Explorateur de fichiers n'affiche pas ces fichiers système protégés par défaut : la somme de vos dossiers visibles est donc bien inférieure à ce que Windows annonce comme occupé. La bonne méthode consiste à diagnostiquer d'abord — voir exactement ce qui remplit le disque — et à ne supprimer qu'ensuite.",
        "Un disque C qui se remplit sans cesse est agaçant parce que les coupables grossissent en silence : les mises à jour de Windows laissent des résidus, les applications gonflent leurs caches et le seul fichier de mise en veille prolongée peut occuper une part non négligeable de votre mémoire vive installée. Ce guide rassemble huit solutions concrètes : afficher les fichiers cachés, cartographier visuellement l'occupation du disque, réduire ou supprimer hiberfil.sys, dimensionner correctement le fichier d'échange, limiter les points de restauration, vider les fichiers temporaires et les caches, faire le tri dans AppData et Téléchargements, et enfin automatiser toute la routine pour que le problème ne revienne pas.",
      ],
      keyTakeaways: [
        "Le disque C: n'est jamais plein sans raison ; l'espace occupé provient presque toujours de fichiers système cachés comme hiberfil.sys, pagefile.sys, les points de restauration et les caches AppData.",
        "Désactiver la mise en veille prolongée via 'powercfg /h off' dans une invite administrateur libère immédiatement un espace équivalent à votre RAM (8 à 32 Go).",
        "Ne supprimez jamais pagefile.sys directement ; Windows en a besoin pour sa stabilité, mais laisser Windows gérer automatiquement sa taille évite les débordements.",
        "Les points de restauration système non limités peuvent accaparer plus de 20 Go d'instantanés ; purger les anciens points récupère de l'espace en quelques secondes.",
        "L'analyse de disque DiskMop localise instantanément les fichiers volumineux masqués sur votre lecteur C: grâce à ses cartes arborescentes.",
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
          title:
            "Les dévoreurs d'espace cachés : hiberfil.sys, fichier d'échange et points de restauration",
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
      howTo: {
        name: "Comment libérer rapidement de l'espace sur un disque C: plein",
        totalTime: "PT15M",
        steps: [
          {
            name: "Afficher les fichiers système masqués",
            text: "Ouvrez l'Explorateur de fichiers, cliquez sur Affichage > Afficher > Éléments masqués. Dans les options des dossiers, décochez temporairement 'Masquer les fichiers protégés du système'.",
          },
          {
            name: "Désactiver la veille prolongée pour récupérer l'équivalent de la RAM",
            text: "Ouvrez le Terminal en tant qu'administrateur et tapez 'powercfg /h off'. Cela supprime immédiatement hiberfil.sys et libère 8 à 32 Go.",
          },
          {
            name: "Supprimer les anciens points de restauration système",
            text: "Lancez le Nettoyage de disque en mode administrateur sur le lecteur C:, allez dans l'onglet 'Autres options' et cliquez sur Nettoyer sous 'Restauration du système et clichés instantanés'.",
          },
          {
            name: "Vider les dossiers temporaires",
            text: "Appuyez sur Win+R, tapez %temp% et supprimez le contenu. Nettoyez également les fichiers temporaires dans Paramètres > Système > Stockage.",
          },
          {
            name: "Vider la Corbeille",
            text: "Faites un clic droit sur la Corbeille et choisissez 'Vider la corbeille' pour réattribuer définitivement les gigaoctets libérés au système.",
          },
        ],
      },
      dataTable: {
        caption:
          "Fichiers cachés responsables de la saturation du disque C: et solutions",
        columns: [
          "Composant masqué",
          "Taille typique",
          "Niveau de sécurité",
          "Comment résoudre",
        ],
        rows: [
          [
            "hiberfil.sys (Fichier de veille prolongée)",
            "8 Go – 32 Go (égal à la RAM)",
            "Sûr (si veille prolongée inutile)",
            "Exécuter 'powercfg /h off' dans un terminal admin",
          ],
          [
            "Points de restauration système",
            "5 Go – 25 Go",
            "Sûr (en conservant le dernier)",
            "Nettoyage de disque > Autres options > Nettoyer la restauration",
          ],
          [
            "AppData & Caches temporaires",
            "5 Go – 30 Go",
            "Totalement sûr",
            "Vider %temp% et lancer le nettoyeur de cache DiskMop",
          ],
          [
            "Résidus de Windows Update",
            "2 Go – 10 Go",
            "Totalement sûr",
            "Paramètres > Stockage > Fichiers temporaires > Nettoyer",
          ],
          [
            "pagefile.sys (Mémoire virtuelle)",
            "4 Go – 16 Go",
            "Gérer uniquement (ne pas supprimer)",
            "Conserver l'option 'Taille gérée par le système'",
          ],
        ],
      },
      faq: [
        {
          question:
            "Pourquoi mon disque C: se remplit-il tout seul sans raison apparente ?",
          answer:
            "Un lecteur C: ne se remplit jamais sans cause. Dans la majorité des cas, des fichiers système masqués comme hiberfil.sys, le fichier d'échange (pagefile.sys), les clichés instantanés de restauration ou les caches AppData occupent silencieusement l'espace en arrière-plan.",
        },
        {
          question: "Peut-on supprimer hiberfil.sys en toute sécurité ?",
          answer:
            "Oui, si vous n'utilisez pas la mise en veille prolongée de Windows. Exécuter 'powercfg /h off' dans une invite de commandes avec privilèges administrateur supprime immédiatement et sans danger hiberfil.sys, libérant plusieurs gigaoctets.",
        },
        {
          question: "Puis-je supprimer pagefile.sys pour libérer de l'espace ?",
          answer:
            "Non, il ne faut ni désactiver ni supprimer pagefile.sys. Windows requiert cette mémoire virtuelle pour éviter les plantages d'applications quand la RAM physique est saturée. Laissez plutôt Windows gérer automatiquement sa taille.",
        },
        {
          question:
            "Combien d'espace libre faut-il conserver sur le lecteur C: ?",
          answer:
            "Il est conseillé de conserver au moins 15 % à 20 % (soit environ 20 à 30 Go) d'espace libre sur votre disque C: afin de permettre les mises à jour Windows, l'expansion de la mémoire virtuelle et l'usure équilibrée du SSD (wear-leveling).",
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
      subtitle:
        "Una guía que empieza por el diagnóstico para encontrar y borrar los archivos ocultos que llenan tu disco del sistema",
      intro: [
        "Si tu disco C está lleno sin motivo aparente, el espacio casi siempre lo ocupan archivos que Windows te oculta: el archivo de hibernación hiberfil.sys, el archivo de paginación pagefile.sys, los puntos de restauración del sistema y varios gigabytes de cachés de aplicaciones dentro de la carpeta AppData. El Explorador de archivos no muestra estos archivos protegidos del sistema operativo de forma predeterminada, así que la suma de tus carpetas visibles queda muy por debajo de lo que Windows marca como ocupado. La solución pasa por diagnosticar primero — ver exactamente qué llena la unidad — y borrar solo después.",
        "Un disco C que se llena una y otra vez resulta exasperante porque los culpables crecen en silencio: las actualizaciones de Windows dejan restos, las aplicaciones engordan sus cachés y el archivo de hibernación por sí solo puede ocupar una parte considerable de la memoria RAM instalada. En esta guía encontrarás ocho soluciones prácticas: mostrar los archivos ocultos, cartografiar visualmente el uso del disco, reducir o eliminar hiberfil.sys, ajustar el tamaño del archivo de paginación, limitar los puntos de restauración, borrar archivos temporales y cachés, ordenar AppData y Descargas y, por último, automatizar toda la rutina para que el problema no vuelva.",
      ],
      keyTakeaways: [
        "La unidad C: nunca se llena sin razón; el espacio ocupado casi siempre proviene de archivos ocultos del sistema como hiberfil.sys, pagefile.sys, puntos de restauración y cachés de AppData.",
        "Desactivar la hibernación con 'powercfg /h off' en un símbolo del sistema de administrador libera al instante un espacio igual a la memoria RAM (8 a 32 GB).",
        "Nunca elimines pagefile.sys directamente; Windows lo necesita para su estabilidad, pero permitir que Windows administre su tamaño automáticamente evita que se dispare.",
        "Los puntos de restauración sin límite pueden acumular más de 20 GB de instantáneas; purgar los puntos antiguos recupera gigabytes en segundos.",
        "El análisis de disco de DiskMop utiliza mapas de árbol visuales para revelar de inmediato los archivos gigantes ocultos en tu unidad C:.",
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
          title:
            "Devoradores de espacio ocultos: hiberfil.sys, archivo de paginación y puntos de restauración",
          content: [
            "La mayor sorpresa en casi cualquier equipo es hiberfil.sys, el archivo que Windows usa para la hibernación y el Inicio rápido. El tamaño de hiberfil.sys es proporcional a la memoria RAM instalada, así que en un equipo con 16 o 32 GB puede consumir en silencio muchos gigabytes del disco C. Si nunca usas la hibernación, puedes eliminarlo: abre el Símbolo del sistema como administrador y ejecuta powercfg /h off — el archivo desaparece al momento. Ten en cuenta que eso desactiva también el Inicio rápido; si quieres conservarlo, ejecuta powercfg /h /type reduced para reducir el archivo en vez de borrarlo.",
            "El archivo de paginación, pagefile.sys, es donde Windows extiende la memoria RAM al disco, y también puede ocupar varios gigabytes. No lo borres ni lo desactives: Windows lo necesita para mantener la estabilidad. Si quieres revisar su tamaño, pulsa Win+R, escribe sysdm.cpl, abre la pestaña Opciones avanzadas, haz clic en Configuración dentro de Rendimiento, vuelve a Opciones avanzadas y elige Cambiar en Memoria virtual. Para la mayoría de los usuarios, lo mejor es dejar que Windows administre el tamaño automáticamente.",
            "Los puntos de restauración del sistema son un seguro útil, pero de forma predeterminada pueden reservar una porción nada despreciable de la unidad. En esa misma ventana de sysdm.cpl, pasa a la pestaña Protección del sistema, selecciona el disco C y pulsa Configurar para bajar el espacio máximo que pueden usar. Para eliminar los puntos antiguos de una vez, ejecuta el Liberador de espacio en disco como administrador, pulsa Limpiar archivos de sistema, abre la pestaña Más opciones y usa el botón de limpieza de Restaurar sistema y instantáneas: borra todos los puntos de restauración salvo el más reciente.",
          ],
        },
        {
          title:
            "Borra los archivos temporales y las cachés de las aplicaciones",
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
      howTo: {
        name: "Cómo liberar espacio rápidamente en un disco C: lleno",
        totalTime: "PT15M",
        steps: [
          {
            name: "Mostrar archivos protegidos del sistema",
            text: "Abre el Explorador de archivos, ve a Ver > Mostrar > Elementos ocultos. En Opciones de carpeta, desmarca temporalmente 'Ocultar archivos protegidos del sistema operativo'.",
          },
          {
            name: "Desactivar la hibernación para recuperar espacio equivalente a la RAM",
            text: "Abre la Terminal como Administrador y ejecuta 'powercfg /h off'. Esto eliminará de inmediato hiberfil.sys, liberando de 8 a 32 GB.",
          },
          {
            name: "Eliminar puntos de restauración antiguos",
            text: "Abre el Liberador de espacio en disco como Administrador en C:, ve a la pestaña 'Más opciones' y haz clic en Liberar en 'Restaurar sistema e instantáneas'.",
          },
          {
            name: "Vaciar carpetas temporales",
            text: "Pulsa Win+R, escribe %temp% y borra todo su contenido. Limpia también los archivos temporales en Configuración > Sistema > Almacenamiento.",
          },
          {
            name: "Vaciar la Papelera de reciclaje",
            text: "Haz clic derecho en la Papelera de reciclaje y selecciona 'Vaciar papelera de reciclaje' para devolver los gigabytes borrados al sistema operativo.",
          },
        ],
      },
      dataTable: {
        caption: "Elementos ocultos que saturan la unidad C: y sus soluciones",
        columns: [
          "Componente oculto",
          "Tamaño típico",
          "Nivel de seguridad",
          "Cómo solucionarlo",
        ],
        rows: [
          [
            "hiberfil.sys (Archivo de hibernación)",
            "8 GB – 32 GB (igual a la RAM)",
            "Seguro (si no se usa hibernación)",
            "Ejecutar 'powercfg /h off' en consola admin",
          ],
          [
            "Puntos de restauración del sistema",
            "5 GB – 25 GB",
            "Seguro (conservando el último)",
            "Liberador de espacio > Más opciones > Limpiar Restauración",
          ],
          [
            "Cachés de AppData y temporales",
            "5 GB – 30 GB",
            "Totalmente seguro",
            "Vaciar %temp% y ejecutar el Limpiador de Caché de DiskMop",
          ],
          [
            "Restos de Windows Update",
            "2 GB – 10 GB",
            "Totalmente seguro",
            "Configuración > Almacenamiento > Archivos temporales > Limpiar",
          ],
          [
            "pagefile.sys (Memoria virtual)",
            "4 GB – 16 GB",
            "Solo administrar (no eliminar)",
            "Mantener en 'Tamaño administrado por el sistema'",
          ],
        ],
      },
      faq: [
        {
          question:
            "¿Por qué mi disco C: se llena solo sin ninguna razón aparente?",
          answer:
            "Un disco C: jamás se llena de forma espontánea sin motivo. En la gran mayoría de los casos, archivos ocultos del sistema como hiberfil.sys, el archivo de paginación (pagefile.sys), copias de seguridad de restauración o cachés de AppData consumen espacio silenciosamente en segundo plano.",
        },
        {
          question: "¿Es seguro eliminar hiberfil.sys?",
          answer:
            "Sí, siempre que no utilices la función de hibernación de Windows. Ejecutar 'powercfg /h off' en una consola con permisos de administrador elimina hiberfil.sys de forma inmediata y segura, liberando varios gigabytes.",
        },
        {
          question: "¿Puedo borrar pagefile.sys para ganar espacio?",
          answer:
            "No, no debes deshabilitar ni borrar pagefile.sys. Windows requiere este archivo de memoria virtual para evitar cierres imprevistos cuando se agota la memoria RAM física. Lo más recomendable es dejar que Windows gestione su tamaño automáticamente.",
        },
        {
          question: "¿Cuánto espacio libre debería mantener en el disco C:?",
          answer:
            "Es aconsejable mantener al menos entre un 15 % y un 20 % (o unos 20 a 30 GB) de espacio libre en la unidad C: para que las actualizaciones de Windows, la expansión de memoria virtual y la nivelación de desgaste del SSD funcionen con normalidad.",
        },
      ],
      verdict: [
        "Un disco C que parece lleno sin motivo es en realidad un disco lleno de archivos invisibles: hiberfil.sys, el archivo de paginación, los puntos de restauración, los archivos temporales y las cachés de AppData. Aplica las ocho soluciones en orden — mostrar los archivos ocultos, cartografiar el espacio, reducir el archivo de hibernación, dejar el archivo de paginación en manos de Windows, limitar los puntos de restauración, borrar archivos temporales y cachés, ordenar AppData y Descargas y automatizar la rutina — y el misterio desaparecerá junto con el desorden.",
        "Disk Mop reúne todo el flujo de trabajo en una sola aplicación: el análisis de disco enseña adónde fue el espacio, el limpiador de caché y Speed Up lo recuperan, el limpiador de descargas y el detector de duplicados se ocupan de las carpetas que sueles olvidar, y la limpieza programada mantiene la unidad limpia a partir de ahí. Es un pago único de 19,90 $ con licencia de por vida, y la versión gratuita te permite probarlo antes de dar el salto.",
      ],
      ctaText: "Libera espacio en tu disco C con Disk Mop",
    },
    it: {
      title:
        "Il disco C si riempie senza motivo? 8 soluzioni per Windows 10/11",
      metaDescription:
        "Il disco C si riempie senza motivo? Scopri quanto occupano davvero hiberfil.sys, il file di paging, i punti di ripristino e AppData e libera spazio.",
      subtitle:
        "Una guida che parte dalla diagnosi per individuare e rimuovere i file nascosti che saturano il disco di sistema",
      intro: [
        "Se il disco C è pieno senza motivo apparente, lo spazio è quasi sempre occupato da file che Windows tiene nascosti: il file di ibernazione hiberfil.sys, il file di paging pagefile.sys, i punti di ripristino del sistema e diversi gigabyte di cache delle applicazioni dentro la cartella AppData. Esplora file non mostra questi file di sistema protetti per impostazione predefinita, quindi la somma delle cartelle visibili è molto inferiore a quanto Windows indica come occupato. La strada giusta è diagnosticare prima — vedere esattamente che cosa riempie il disco — e solo dopo iniziare a cancellare.",
        "Un disco C che continua a riempirsi è frustrante perché i responsabili crescono in silenzio: gli aggiornamenti di Windows lasciano residui, le applicazioni gonfiano le proprie cache e il solo file di ibernazione può occupare una fetta consistente della RAM installata. In questa guida trovi otto soluzioni concrete: mostrare i file nascosti, mappare visivamente l'occupazione del disco, ridurre o rimuovere hiberfil.sys, dimensionare correttamente il file di paging, limitare i punti di ripristino, svuotare file temporanei e cache, mettere ordine in AppData e Download e, infine, automatizzare tutta la routine perché il problema non si ripresenti.",
      ],
      keyTakeaways: [
        "Il disco C: non si riempie mai senza motivo: lo spazio occupato proviene quasi sempre da file di sistema nascosti come hiberfil.sys, pagefile.sys, punti di ripristino e cache di AppData.",
        "Disattivare l'ibernazione con 'powercfg /h off' in un prompt amministratore libera immediatamente uno spazio pari alla memoria RAM installata (8–32 GB).",
        "Non eliminare mai direttamente pagefile.sys; Windows ne ha bisogno per la stabilità, ma lasciare che Windows ne gestisca le dimensioni in automatico ne evita l'ingrossamento anomalo.",
        "I punti di ripristino del sistema non regolati possono accumulare oltre 20 GB di copie shadow; eliminare i punti meno recenti recupera gigabyte in pochi istanti.",
        "L'Analisi Disco di DiskMop usa mappe ad albero visive per individuare immediatamente i file giganti nascosti nell'unità C:.",
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
          title:
            "Divoratori di spazio nascosti: hiberfil.sys, file di paging e punti di ripristino",
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
      howTo: {
        name: "Come liberare rapidamente spazio su un disco C: pieno",
        totalTime: "PT15M",
        steps: [
          {
            name: "Rendere visibili i file di sistema protetti",
            text: "Apri Esplora file, vai su Visualizza > Mostra > Elementi nascosti. Nelle Opzioni cartella, deseleziona temporaneamente 'Nascondi i file protetti di sistema'.",
          },
          {
            name: "Disattivare l'ibernazione per recuperare la dimensione della RAM",
            text: "Apri il Terminale come amministratore ed esegui 'powercfg /h off'. Questo comando cancella immediatamente hiberfil.sys liberando da 8 a 32 GB.",
          },
          {
            name: "Eliminare i vecchi punti di ripristino",
            text: "Avvia Pulizia disco come amministratore sull'unità C:, apri la scheda 'Altre opzioni' e clicca su Esegui pulizia sotto 'Ripristino configurazione di sistema e copie shadow'.",
          },
          {
            name: "Svuotare le cartelle temporanee",
            text: "Premi Win+R, digita %temp% ed elimina il contenuto. Pulisci anche i file temporanei in Impostazioni > Sistema > Archiviazione.",
          },
          {
            name: "Svuotare il Cestino",
            text: "Fai clic destro sul Cestino e scegli 'Svuota cestino' per restituire definitivamente i gigabyte eliminati al sistema operativo.",
          },
        ],
      },
      dataTable: {
        caption: "File nascosti che saturano l'unità C: e relative soluzioni",
        columns: [
          "Componente nascosto",
          "Dimensione tipica",
          "Livello di sicurezza",
          "Come intervenire",
        ],
        rows: [
          [
            "hiberfil.sys (File di ibernazione)",
            "8 GB – 32 GB (pari alla RAM)",
            "Sicuro (se non si usa l'ibernazione)",
            "Eseguire 'powercfg /h off' nel terminale admin",
          ],
          [
            "Punti di ripristino del sistema",
            "5 GB – 25 GB",
            "Sicuro (mantenendo l'ultimo)",
            "Pulizia disco > Altre opzioni > Pulisci Ripristino",
          ],
          [
            "Cache di AppData e temporanei",
            "5 GB – 30 GB",
            "Completamente sicuro",
            "Svuotare %temp% e avviare Pulizia Cache di DiskMop",
          ],
          [
            "Residui di Windows Update",
            "2 GB – 10 GB",
            "Completamente sicuro",
            "Impostazioni > Archiviazione > File temporanei > Pulisci",
          ],
          [
            "pagefile.sys (Memoria virtuale)",
            "4 GB – 16 GB",
            "Solo gestire (non eliminare)",
            "Impostare su 'Dimensioni gestite dal sistema'",
          ],
        ],
      },
      faq: [
        {
          question:
            "Perché l'unità C: si riempie automaticamente senza motivo apparente?",
          answer:
            "Un disco C: non si satura mai da solo per caso. Nella quasi totalità dei casi, file nascosti del sistema operativo come hiberfil.sys, il file di paging (pagefile.sys), le copie shadow di ripristino o le cache accumulate in AppData consumano spazio silenziosamente in background.",
        },
        {
          question: "È sicuro eliminare il file hiberfil.sys?",
          answer:
            "Sì, a patto di non utilizzare l'Ibernazione di Windows. Eseguendo 'powercfg /h off' in un prompt dei comandi con privilegi di amministratore, il file hiberfil.sys viene rimosso istantaneamente in tutta sicurezza, liberando svariati gigabyte.",
        },
        {
          question: "Posso rimuovere pagefile.sys per recuperare spazio?",
          answer:
            "No, non dovresti disabilitare né cancellare pagefile.sys. Windows richiede questo file di memoria virtuale per prevenire crash improvvisi quando la RAM fisica si esaurisce. L'impostazione consigliata è 'Dimensioni gestite dal sistema'.",
        },
        {
          question: "Quanto spazio libero dovrei mantenere sull'unità C:?",
          answer:
            "È opportuno conservare almeno il 15-20% di spazio libero (o circa 20-30 GB) sull'unità C: per consentire agli aggiornamenti di Windows, all'espansione della memoria virtuale e agli algoritmi di wear-leveling dell'SSD di funzionare in modo ottimale.",
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
      subtitle:
        "Um guia que começa pelo diagnóstico para encontrar e remover os arquivos ocultos que lotam o disco do sistema",
      intro: [
        "Se o seu disco C está cheio sem motivo aparente, o espaço quase sempre está sendo usado por arquivos que o Windows esconde de você: o arquivo de hibernação hiberfil.sys, o arquivo de paginação pagefile.sys, os pontos de restauração do sistema e vários gigabytes de caches de aplicativos dentro da pasta AppData. O Explorador de Arquivos não mostra esses arquivos protegidos do sistema operacional por padrão, então a soma das suas pastas visíveis fica bem abaixo do que o Windows aponta como ocupado. O caminho certo é diagnosticar primeiro — ver exatamente o que ocupa a unidade — e só depois começar a apagar.",
        "Um disco C que vive enchendo é irritante porque os culpados crescem em silêncio: as atualizações do Windows deixam resíduos, os aplicativos engordam seus caches e só o arquivo de hibernação já consome uma fatia considerável da memória RAM instalada. Neste guia você encontra oito soluções práticas: exibir os arquivos ocultos, mapear visualmente o uso do disco, reduzir ou remover o hiberfil.sys, dimensionar corretamente o arquivo de paginação, limitar os pontos de restauração, apagar arquivos temporários e caches, organizar AppData e Downloads e, por fim, automatizar toda a rotina para que o problema não volte.",
      ],
      keyTakeaways: [
        "A unidade C: nunca fica cheia sem motivo; o espaço ocupado quase sempre se deve a arquivos ocultos do sistema como hiberfil.sys, pagefile.sys, pontos de restauração e caches do AppData.",
        "Desativar a hibernação com 'powercfg /h off' no prompt de comando como administrador libera na hora uma quantidade de espaço equivalente à sua RAM (8–32 GB).",
        "Nunca exclua o pagefile.sys diretamente; o Windows precisa dele para manter a estabilidade, mas deixar o Windows gerenciar seu tamanho automaticamente previne inchaço excessivo.",
        "Pontos de Restauração sem limites podem acumular mais de 20 GB de cópias de sombra; descartar pontos antigos recupera espaço em poucos segundos.",
        "A Análise de Disco do DiskMop emprega mapas em árvore visuais para revelar instantaneamente grandes consumidores ocultos de espaço no seu disco C:.",
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
          title:
            "Vilões escondidos: hiberfil.sys, arquivo de paginação e pontos de restauração",
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
      howTo: {
        name: "Como liberar espaço rapidamente em um disco C: cheio",
        totalTime: "PT15M",
        steps: [
          {
            name: "Exibir arquivos ocultos e do sistema",
            text: "Abra o Explorador de Arquivos, vá em Visualizar > Mostrar > Itens ocultos. Nas Opções de Pasta, desmarque temporariamente 'Ocultar arquivos protegidos do sistema operacional'.",
          },
          {
            name: "Desativar a hibernação para liberar o espaço equivalente à RAM",
            text: "Abra o Terminal como Administrador e execute 'powercfg /h off'. Isso apaga imediatamente o hiberfil.sys, liberando de 8 a 32 GB.",
          },
          {
            name: "Excluir pontos de restauração antigos",
            text: "Abra a Limpeza de Disco como Administrador na unidade C:, vá para a aba 'Mais Opções' e clique em Limpar sob 'Restauração do Sistema e Cópias de Sombra'.",
          },
          {
            name: "Esvaziar pastas temporárias",
            text: "Pressione Win+R, digite %temp% e apague todo o conteúdo. Limpe também os temporários do Windows em Configurações > Sistema > Armazenamento.",
          },
          {
            name: "Esvaziar a Lixeira",
            text: "Clique com o botão direito na Lixeira e selecione 'Esvaziar Lixeira' para devolver em definitivo os gigabytes liberados ao sistema.",
          },
        ],
      },
      dataTable: {
        caption:
          "Consumidores ocultos de espaço na unidade C: e como resolvê-los",
        columns: [
          "Componente oculto",
          "Tamanho típico",
          "Nível de segurança",
          "Como resolver",
        ],
        rows: [
          [
            "hiberfil.sys (Arquivo de hibernação)",
            "8 GB – 32 GB (igual à RAM)",
            "Seguro (se não usa hibernação)",
            "Executar 'powercfg /h off' no terminal admin",
          ],
          [
            "Pontos de Restauração do Sistema",
            "5 GB – 25 GB",
            "Seguro (mantendo o mais recente)",
            "Limpeza de Disco > Mais Opções > Limpar Restauração",
          ],
          [
            "Caches do AppData e temporários",
            "5 GB – 30 GB",
            "Totalmente seguro",
            "Esvaziar %temp% e rodar o Limpador de Cache do DiskMop",
          ],
          [
            "Sobras do Windows Update",
            "2 GB – 10 GB",
            "Totalmente seguro",
            "Configurações > Armazenamento > Temporários > Limpar",
          ],
          [
            "pagefile.sys (Memória virtual)",
            "4 GB – 16 GB",
            "Apenas gerenciar (não excluir)",
            "Deixar como 'Tamanho gerenciado pelo sistema'",
          ],
        ],
      },
      faq: [
        {
          question:
            "Por que meu disco C: fica enchendo sozinho sem nenhum motivo aparente?",
          answer:
            "A unidade C: nunca se enche sem causa concreta. Na imensa maioria das vezes, arquivos ocultos do sistema operacional como hiberfil.sys, o arquivo de paginação (pagefile.sys), cópias de segurança da restauração do sistema ou caches não limpos no AppData estão ocupando espaço silenciosamente em segundo plano.",
        },
        {
          question: "É seguro excluir o arquivo hiberfil.sys?",
          answer:
            "Sim, desde que você não utilize o recurso de Hibernação do Windows. Executar 'powercfg /h off' em um prompt com privilégios de administrador remove o hiberfil.sys na hora com total segurança, liberando vários gigabytes.",
        },
        {
          question: "Posso apagar o pagefile.sys para economizar espaço?",
          answer:
            "Não, você não deve desativar nem deletar o pagefile.sys. O Windows necessita dessa memória virtual para evitar falhas e travamentos de programas quando a RAM física se esgota. O recomendável é manter a opção de 'Tamanho gerenciado pelo sistema'.",
        },
        {
          question: "Quanto espaço livre devo manter na unidade C:?",
          answer:
            "O ideal é manter pelo menos 15% a 20% (ou cerca de 20 a 30 GB) de espaço livre na unidade C: para que as atualizações do Windows, a alocação de memória virtual e os algoritmos de nivelamento de desgaste do SSD operem com total fluidez.",
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
      subtitle:
        "システムドライブを圧迫する隠しファイルを、まず診断してから安全に削除するためのガイド",
      intro: [
        "Cドライブが理由もなくいっぱいになっているように見えるとき、その容量はほとんどの場合、Windowsが利用者から隠しているファイルが使っています。休止状態ファイルの hiberfil.sys、ページ ファイルの pagefile.sys、システムの復元ポイント、そしてAppDataフォルダーの中に積み上がった数ギガバイト規模のアプリのキャッシュです。エクスプローラーはこれらの保護されたシステム ファイルを既定では表示しないため、目に見えるフォルダーを合計しても、Windowsが使用済みとして示す容量にはまるで届きません。正しい進め方は、まず診断すること、つまり何が容量を使っているのかを正確に把握してから、削除に取りかかることです。",
        "Cドライブが何度も満杯になるのが厄介なのは、原因が静かに大きくなっていくからです。Windows Updateは残骸を残し、アプリはキャッシュを膨らませ、休止状態ファイルだけでも搭載メモリのかなりの割合に相当する容量を占めることがあります。この記事では、実践的な8つの対処法を紹介します。隠しファイルを表示する、ディスクの使用状況を視覚的に把握する、hiberfil.sysを縮小または削除する、ページ ファイルを適切なサイズにする、復元ポイントの上限を下げる、一時ファイルとキャッシュを削除する、AppDataとダウンロード フォルダーを整理する、そして最後に一連の作業を自動化して同じ問題が再発しないようにする、という流れです。",
      ],
      keyTakeaways: [
        "Cドライブが理由もなく満杯になることはありません。消費されている領域の正体は、hiberfil.sys、pagefile.sys、復元ポイント、AppDataキャッシュなどの隠しシステムファイルです。",
        "管理者コマンドプロンプトで「powercfg /h off」を実行して休止状態を無効にすると、搭載RAMと同容量（8〜32 GB）の空き容量が即座に解放されます。",
        "pagefile.sysを不用意に削除しないでください。Windowsの安定性に必須ですが、システムによる自動管理に設定することで肥大化を防止できます。",
        "無制限のシステムの復元ポイントは20 GB以上のシャドウコピーを溜め込むことがあります。古いポイントを削除することで瞬時に容量を回復できます。",
        "DiskMopのディスク分析は、視覚的なツリーマップによりCドライブの隠れた大容量ファイルを瞬時に特定します。",
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
          title:
            "見えない容量食い：hiberfil.sys、ページ ファイル、復元ポイント",
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
      howTo: {
        name: "満杯になったCドライブの空き容量を素早く確保する方法",
        totalTime: "PT15M",
        steps: [
          {
            name: "隠しシステムファイルを表示する",
            text: "エクスプローラーを開き、「表示」>「表示」>「隠しファイル」にチェックを入れます。フォルダーオプションで「保護されたオペレーティング システム ファイルを表示しない」のチェックを一時的に外して原因を確認します。",
          },
          {
            name: "休止状態を無効化してRAMサイズの容量を解放する",
            text: "管理者としてターミナルを開き、「powercfg /h off」を実行します。これによりhiberfil.sysが直ちに削除され、8〜32 GBが解放されます。",
          },
          {
            name: "古いシステムの復元ポイントを削除する",
            text: "Cドライブの「ディスク クリーンアップ」を管理者として実行し、「詳細オプション」タブを開いて「システムの復元とシャドウ コピー」の「クリーンアップ」をクリックします。",
          },
          {
            name: "一時フォルダーを空にする",
            text: "Win+Rを押し、「%temp%」と入力して中身を削除します。また「設定」>「システム」>「ストレージ」からもWindowsの一時ファイルを削除します。",
          },
          {
            name: "ごみ箱を空にする",
            text: "デスクトップのごみ箱アイコンを右クリックし、「ごみ箱を空にする」を選択して消去した領域をOSに完全に返還します。",
          },
        ],
      },
      dataTable: {
        caption: "Cドライブを圧迫する隠しファイルとそれぞれの解決策",
        columns: [
          "隠れたコンポーネント",
          "典型的なサイズ",
          "安全性レベル",
          "解決方法",
        ],
        rows: [
          [
            "hiberfil.sys（休止状態ファイル）",
            "8 GB – 32 GB（RAM同等）",
            "安全（休止状態不使用時）",
            "管理者端末で「powercfg /h off」を実行",
          ],
          [
            "システムの復元ポイント",
            "5 GB – 25 GB",
            "安全（最新ポイントは保持）",
            "ディスク クリーンアップ > 詳細オプション > 復元のクリーンアップ",
          ],
          [
            "AppData＆一時キャッシュ",
            "5 GB – 30 GB",
            "完全に安全",
            "%temp%を削除しDiskMopキャッシュクリーナーを実行",
          ],
          [
            "Windows Updateの残骸",
            "2 GB – 10 GB",
            "完全に安全",
            "設定 > ストレージ > 一時ファイル > 削除を実行",
          ],
          [
            "pagefile.sys（仮想メモリ）",
            "4 GB – 16 GB",
            "管理のみ（削除非推奨）",
            "仮想メモリ設定で「システム管理サイズ」に設定",
          ],
        ],
      },
      faq: [
        {
          question:
            "なぜCドライブは何もしないのに勝手に容量がいっぱいになるのですか？",
          answer:
            "Cドライブが原因もなく自然に満杯になることはありません。ほとんどの場合、休止状態ファイル（hiberfil.sys）、仮想メモリ（pagefile.sys）、システムの復元のシャドウコピー、または肥大化したAppDataキャッシュがバックグラウンドで気付かぬうちに領域を消費しています。",
        },
        {
          question: "hiberfil.sysファイルを削除しても安全ですか？",
          answer:
            "はい、Windowsの休止状態（ハイバネーション）機能を使用しないのであれば完全に安全です。管理者権限のコマンドプロンプトで「powercfg /h off」を実行するだけで、hiberfil.sysが安全に即時消去され、数ギガバイト以上の空き容量が生まれます。",
        },
        {
          question:
            "容量確保のためにpagefile.sysを無効化・削除してもいいですか？",
          answer:
            "いいえ、pagefile.sysを無効化または削除するべきではありません。物理メモリが不足した際やクラッシュダンプ生成時にシステムが必要とするため、完全に切るとアプリの強制終了が発生します。「システム管理サイズ」にしておくのが最善です。",
        },
        {
          question: "Cドライブには最低どれくらいの空き容量を残すべきですか？",
          answer:
            "Windows Updateの正常な適用、仮想メモリの動的拡張、SSDのウェアレベリングを円滑に行うため、Cドライブには常に最低15〜20%（約20〜30 GB）の空き容量を確保しておくことが推奨されます。",
        },
      ],
      verdict: [
        "理由もなくいっぱいに見えるCドライブは、実際には見えないファイルで埋まったドライブです。hiberfil.sys、ページ ファイル、復元ポイント、一時ファイル、そしてAppDataのキャッシュがその正体です。8つの対処法を順に進めてください。隠しファイルを表示する、容量を視覚的に把握する、休止状態ファイルを縮小する、ページ ファイルはWindowsに任せる、復元ポイントの上限を下げる、一時ファイルとキャッシュを削除する、AppDataとダウンロード フォルダーを整理する、そして一連の作業を自動化する。これで不要なデータとともに、謎そのものも消えていきます。",
        "Disk Mopは、この一連の流れを1つのアプリにまとめています。ディスク分析が容量の行方を示し、キャッシュ クリーナーと「Speed Up」が空き容量を取り戻し、ダウンロード クリーナーと重複ファイル検索が忘れがちなフォルダーを引き受け、スケジュール クリーンアップがその後もドライブをきれいに保ちます。買い切り19.90ドルの永続ライセンスで、無料版を試してから移行することもできます。",
      ],
      ctaText: "Disk MopでCドライブの空き容量を増やしましょう",
    },
    ar: {
      title: "امتلاء قرص C بدون سبب؟ 8 حلول فعالة في ويندوز",
      metaDescription:
        "هل يمتلئ قرص C تلقائياً؟ اكتشف الملفات المخفية مثل hiberfil.sys ونقاط الاستعادة وذاكرة AppData المؤقتة واستعد مساحتك خطوة بخطوة الآن.",
      subtitle:
        "دليل تشخيص وتنظيف الملفات المخفية التي تستهلك قرص النظام بأمان",
      intro: [
        "إذا كان محرك الأقراص C يبدو ممتلئاً بدون سبب واضح، فإن المساحة تكون مشغولة تقريباً بملفات يخفيها ويندوز عنك: ملف الإسبات hiberfil.sys، وملف ترحيل الصفحات pagefile.sys، ونقاط استعادة النظام، وملفات التخزين المؤقت في AppData. لا يعرض مستكشف الملفات هذه الملفات المحمية افتراضياً، لذلك يكون إجمالي حجم المجلدات المرئية أقل بكثير من المساحة المستخدمة الفعلية.",
        "الحل هو التشخيص أولاً: معرفة ما يشغل القرص بدقة قبل البدء في الحذف العشوائي. في هذا الدليل، ستجد 8 حلول عملية تبدأ بإظهار الملفات المخفية، وتحليل المساحة بصرياً، وتعطيل الإسبات غير الضروري، وإدارة الذاكرة الافتراضية ونقاط الاستعادة، وصولاً إلى أتمتة الصيانة الدورية.",
      ],
      keyTakeaways: [
        "لا يمتلئ قرص C دون سبب؛ الجناة عادة هم hiberfil.sys وpagefile.sys ونقاط الاستعادة وذاكرة AppData المؤقتة.",
        "تعطيل الإسبات عبر أمر 'powercfg /h off' يستعيد فوراً مساحة بحجم ذاكرة RAM (بين 8 إلى 32 جيجابايت).",
        "لا تحذف ملف pagefile.sys نهائياً لأنه ضروري لاستقرار النظام؛ اضبطه على خيار الإدارة التلقائية من ويندوز.",
        "نقاط استعادة النظام القديمة يمكن أن تستهلك عشرات الجيجابايت؛ تنظيف النسخ السابقة يحرر مساحة ضخمة بضغطة زر.",
        "يقوم DiskMop بتحليل القرص عبر خريطة شجرية بصرية لكشف المجلدات المتضخمة المخفية خلال ثوانٍ معدودة.",
      ],
      dataTable: {
        caption: "أبرز مستهلكي المساحة المخفيين في قرص C وطرق معالجتهم بأمان",
        columns: [
          "العنصر المخفي",
          "الحجم التقديري",
          "مستوى الأمان",
          "طريقة التنظيف",
        ],
        rows: [
          [
            "hiberfil.sys (الإسبات)",
            "8 - 32 جيجابايت",
            "آمن (إذا لم يُستخدم)",
            "تشغيل 'powercfg /h off' في موجه الأوامر",
          ],
          [
            "نقاط استعادة النظام",
            "5 - 25 جيجابايت",
            "آمن (باستثناء أحدث نقطة)",
            "تنظيف القرص > تنظيف ملفات النظام > خيارات إضافية",
          ],
          [
            "مؤقتات AppData وTemp",
            "5 - 30 جيجابايت",
            "آمن تماماً",
            "تفريغ %temp% واستخدام منظف الذاكرة المؤقتة في DiskMop",
          ],
          [
            "مخلفات Windows Update",
            "2 - 10 جيجابايت",
            "آمن تماماً",
            "الإعدادات > النظام > التخزين > الملفات المؤقتة",
          ],
          [
            "pagefile.sys (الذاكرة الظاهرية)",
            "4 - 16 جيجابايت",
            "يجب إدارته لا حذفه",
            "ضبط الحجم ليكون مداراً تلقائياً من قبل النظام",
          ],
        ],
      },
      howTo: {
        name: "خطوات تحرير المساحة في قرص C الممتلئ",
        totalTime: "PT15M",
        steps: [
          {
            name: "إظهار الملفات المخفية وملفات النظام",
            text: "افتح مستكشف الملفات وانتقل إلى خيارات العرض، ثم فعّل إظهار العناصر المخفية وتراجع عن إخفاء ملفات نظام التشغيل المحمية.",
          },
          {
            name: "تعطيل الإسبات لاستعادة مساحة فورية",
            text: "افتح موجه الأوامر كمسؤول واكتب 'powercfg /h off' واضغط Enter لحذف hiberfil.sys واستعادة عدة جيجابايت فوراً.",
          },
          {
            name: "تنظيف نقاط استعادة النظام القديمة",
            text: "افتح أداة تنظيف القرص (Disk Cleanup)، واضغط على تنظيف ملفات النظام، ثم من علامة تبويب خيارات إضافية احذف نقاط الاستعادة السابقة.",
          },
          {
            name: "تفريغ الملفات المؤقتة وبيانات AppData",
            text: "استخدم أداة DiskMop لفحص ذاكرة التخزين المؤقت وحذف المخلفات الرقمية ومجلدات التنزيلات الزائدة بأمان.",
          },
        ],
      },
      sections: [
        {
          title: "كشف الملفات المخفية ومجلدات النظام المحمية",
          content: [
            "السبب الرئيسي لغموض امتلاء قرص C هو أن أدوات العرض العادية تخفي ملفات النظام الحيوية لحمايتها من الحذف غير المقصود. عند فحص القرص في مستكشف الملفات، قد تظن أن البرامج والمجلدات المرئية تشغل 100 جيجابايت فقط بينما يظهر القرص أنه مستهلك بالكامل بمساحة 250 جيجابايت.",
            "لإظهار الحقيقة، توجّه إلى خيارات المجلد في مستكشف الملفات وقم بإلغاء تحديد خيار إخفاء ملفات نظام التشغيل المحمية. ستظهر ملفات في جذر محرك الأقراص C مثل hiberfil.sys وpagefile.sys، بالإضافة إلى مجلد System Volume Information الذي يحتوي على نقاط الاستعادة.",
          ],
        },
        {
          title: "التخلص من ملف الإسبات hiberfil.sys",
          content: [
            "يحفظ ملف hiberfil.sys حالة الذاكرة النشطة على القرص الصلب عند الدخول في وضع الإسبات أو بدء التشغيل السريع. إذا كان جهازك يحتوي على 16 أو 32 جيجابايت من الذاكرة العشوائية RAM، فإن هذا الملف يستقطع حجماً مساوياً له تقريباً من القرص C طوال الوقت.",
            "إذا كنت لا تستخدم وضع الإسبات وتفضل إيقاف التشغيل الكامل، يمكنك إيقافه بلمح البصر: افتح موجه الأوامر (CMD) بصلاحيات المسؤول واكتب الأمر 'powercfg /h off'. سيختفي الملف فوراً وتعود المساحة إلى قرصك دون الحاجة لإعادة التشغيل.",
          ],
        },
        {
          title: "تنظيف التخزين المؤقت وتراكمات AppData",
          content: [
            "يعد مجلد AppData المنزلق الأكبر لاستهلاك المساحة بمرور الوقت؛ فكل برنامج أو متصفح أو منصة ألعاب مثل Steam وChrome وDiscord تخزن غيغابايتات من البيانات المؤقتة التي لا تحذف تلقائياً. كما تترك تحديثات ويندوز القديمة حزم تثبيت مهملة في مجلد SoftwareDistribution.",
            "يوفر DiskMop وحدة فحص متخصصة لقراءة وتحليل AppData والملفات المؤقتة، مما يمكنك من مسح البيانات الزائدة بضغطة زر واحدة دون لمس إعدادات البرامج أو ملفاتك الشخصية.",
          ],
        },
      ],
      faq: [
        {
          question: "هل حذف ملف hiberfil.sys آمن لنظام ويندوز؟",
          answer:
            "نعم، حذف hiberfil.sys آمن تماماً طالما أنك لا تعتمد على وضع الإسبات (Hibernate). تنفيذ أمر 'powercfg /h off' يغلق الميزة ويحذف الملف رسمياً دون أي مشاكل بالنظام.",
        },
        {
          question: "كم يجب أن أترك من مساحة فارغة في قرص C؟",
          answer:
            "يُوصى دائماً بترك ما بين 15% إلى 20% مساحة فارغة (على الأقل 25-30 جيجابايت) لضمان عمل تحديثات النظام وتجنب تدهور أداء أقراص SSD.",
        },
        {
          question: "لماذا لا تظهر بعض الملفات الضخمة في مستكشف الملفات؟",
          answer:
            "يقوم ويندوز بإخفاء ملفات النظام الحساسة وملفات الذاكرة الافتراضية لمنع العبث بها، ولا يمكن قياس حجمها بدقة إلا عبر أدوات التحليل الشجري مثل DiskMop.",
        },
      ],
      verdict: [
        "امتلاء قرص C دون سبب ظاهر ليس لغزاً لا يمكن حله؛ إنه نتيجة طبيعية لتراكم مخلفات النظام والملفات المحمية بمرور الوقت. باتباع خطوات الفحص والتعطيل المدروس، يمكنك استعادة عشرات الجيجابايت في دقائق معدودة.",
        "يوفر DiskMop حلاً متكاملاً يجمع بين تحليل المساحة البصري وتنظيف الملفات المؤقتة والمكررة بكفاءة عالية ورخصة مدى الحياة.",
      ],
      ctaText: "نظّف قرص C واستعد مساحتك باستخدام DiskMop",
    },
    he: {
      title: "כונן C מלא ללא סיבה? 8 פתרונות לווינדוס 10/11",
      metaDescription:
        "כונן C מלא ללא סיבה נראית לעין? גלו כיצד קבצים מוסתרים כמו hiberfil.sys, נקודות שחזור ומטמון AppData גוזלים מקום, ופנו שטח שלב אחר שלב.",
      subtitle:
        "מדריך לאבחון ופינוי קבצים מוסתרים התופסים מקום בכונן המערכת בבטחה",
      intro: [
        "כאשר כונן C מציג שהוא מלא ללא סיבה ברורה, השטח תפוס כמעט תמיד על ידי קבצים שווינדוס מסתיר כברירת מחדל: קובץ מצב השינה hiberfil.sys, זיכרון וירטואלי pagefile.sys, נקודות שחזור ומטמון אפליקציות ב-AppData.",
        "במדריך זה תלמדו כיצד לאבחן את השימוש האמיתי בדיסק, להציג קבצים מוגנים, לצמצם או לבטל קבצי מערכת תפוחים ולפנות עשרות גיגה-בייט במהירות ובבטחה.",
      ],
      keyTakeaways: [
        "כונן C לא מתמלא מעצמו; האשמים העיקריים הם hiberfil.sys, נקודות שחזור ומטמון בתיקיית AppData.",
        "כיבוי מצב שינה באמצעות 'powercfg /h off' מחזיר מיד שטח בגודל זיכרון ה-RAM (בין 8 ל-32GB).",
        "אין למחוק את pagefile.sys לחלוטין; מומלץ להשאירו במצב ניהול אוטומטי של המערכת.",
        "מחיקת נקודות שחזור מערכת ישנות מפנה שטח אחסון ניכר בפעולה אחת.",
        "DiskMop ממפה את השימוש בכונן בתרשים עץ ויזואלי ומזהה תיקיות ענק תוך שניות.",
      ],
      dataTable: {
        caption: "צרכני שטח מוסתרים בכונן C ופתרונות בטוחים לטיפול בהם",
        columns: ["רכיב מוסתר", "גודל טיפוסי", "רמת בטיחות", "כיצד לפנות?"],
        rows: [
          [
            "hiberfil.sys (מצב שינה)",
            "8GB - 32GB",
            "בטוח (אם לא בשימוש)",
            "הרצת 'powercfg /h off' בשורת הפקודה",
          ],
          [
            "נקודות שחזור מערכת",
            "5GB - 25GB",
            "בטוח (למעט נקודה אחרונה)",
            "ניקוי דיסק > נקה קבצי מערכת > אפשרויות נוספות",
          ],
          [
            "מטמון AppData וקבצי Temp",
            "5GB - 30GB",
            "בטוח לחלוטין",
            "ריקון %temp% וסריקת מטמון באמצעות DiskMop",
          ],
          [
            "שאריות Windows Update",
            "2GB - 10GB",
            "בטוח לחלוטין",
            "הגדרות > מערכת > אחסון > קבצים זמניים",
          ],
          [
            "pagefile.sys (זיכרון וירטואלי)",
            "4GB - 16GB",
            "לנהל ולא למחוק",
            "הגדרה כ'מנוהל על ידי המערכת'",
          ],
        ],
      },
      howTo: {
        name: "צעדים לפינוי מהיר של כונן C מלא",
        totalTime: "PT15M",
        steps: [
          {
            name: "הצגת קבצים מוסתרים",
            text: "בסייר הקבצים עברו לתצוגה וסמנו פריטים מוסתרים וביטול הסתרת קבצי מערכת הפעלה מוגנים.",
          },
          {
            name: "ביטול מצב שינה במידת הצורך",
            text: "פתחו שורת פקודה כמנהל והריצו 'powercfg /h off' למחיקה מידית של hiberfil.sys.",
          },
          {
            name: "ניקוי נקודות שחזור ישנות",
            text: "הפעילו ניקוי דיסק כמנהל, ובחרו באפשרויות נוספות כדי למחוק נקודות שחזור ישנות.",
          },
          {
            name: "פינוי מטמון ושאריות עם DiskMop",
            text: "השתמשו ב-DiskMop כדי לסרוק ולמחוק קבצי מטמון והורדות מיותרות בצורה מאובטחת.",
          },
        ],
      },
      sections: [
        {
          title: "חשיפת קבצי מערכת מוגנים",
          content: [
            "הסיבה לכך שסך גודל התיקיות בסייר הקבצים אינו תואם לשטח התפוס היא שווינדוס מגנה על קבצי ליבה ומסתירה אותם מעיני המשתמש.",
            "הגדרת הצגת קבצי מערכת תאפשר לכם לראות את גודלם האמיתי של hiberfil.sys ו-pagefile.sys בשורש הכונן.",
          ],
        },
        {
          title: "השבתת קובץ ההשבתה hiberfil.sys",
          content: [
            "עבור משתמשי מחשב נייח או נייד שאינם משתמשים במצב שינה עמוק, קובץ זה תופס שטח מיותר השווה לגודל ה-RAM.",
            "הרצת פקודה קצרה כמנהל מבטלת את הקובץ ומשחררת מיד גיגה-בייטים רבים.",
          ],
        },
        {
          title: "ניקוי תיקיות AppData וקבצים זמניים",
          content: [
            "תוכנות כמו דפדפנים ומשחקים אוגרות מידע זמני רב בתיקיית AppData שאינו נמחק מעצמו.",
            "סריקה עם כלי ייעודי כמו DiskMop מנקה את הנתונים העודפים ללא סיכון להגדרות התוכנה.",
          ],
        },
      ],
      faq: [
        {
          question: "האם מחיקת hiberfil.sys בטוחה?",
          answer:
            "כן, מחיקת הקובץ באמצעות הפקודה הרשמית בטוחה לחלוטין אם אינכם משתמשים במצב שינה.",
        },
        {
          question: "כמה מקום פנוי חובה להשאיר בכונן C?",
          answer:
            "מומלץ להשאיר לפחות 15%-20% (כ-25 עד 30 גיגה-בייט) לשמירה על ביצועי SSD ותקינות עדכונים.",
        },
        {
          question: "האם כדאי לבטל את pagefile.sys?",
          answer:
            "לא, ביטולו עלול לגרום לקריסות של אפליקציות הדורשות זיכרון נוסף.",
        },
      ],
      verdict: [
        "כונן C מלא אינו תעלומה בלתי פתירה, אלא תוצאה של הצטברות קבצים נסתרים. נקיטת פעולות פשוטות מחזירה את השטח במהירות.",
        "DiskMop מציעה פתרון קל ומקיף לאיתור וניקוי קבצים מוסתרים ברישיון לכל החיים.",
      ],
      ctaText: "פנו שטח בכונן C עכשיו עם DiskMop",
    },
    id: {
      title: "Drive C Penuh Tanpa Sebab? 8 Solusi di Windows 10/11",
      metaDescription:
        "Drive C penuh tanpa sebab yang jelas? Temukan file tersembunyi seperti hiberfil.sys, titik pemulihan, dan cache AppData, lalu kosongkan ruang langkah demi langkah.",
      subtitle:
        "Panduan mendiagnosis dan membersihkan file tersembunyi yang menyedot disk sistem secara aman",
      intro: [
        "Jika drive C Anda tampak penuh tanpa sebab yang jelas, ruang disk tersebut hampir selalu diisi oleh file-file yang disembunyikan Windows: file hibernasi hiberfil.sys, pagefile.sys, titik pemulihan sistem (System Restore points), dan gigabyte cache aplikasi di AppData.",
        "File Explorer tidak menampilkan file sistem yang dilindungi ini secara default. Melalui panduan ini, Anda akan mempelajari 8 solusi praktis untuk memetakan kapasitas disk secara visual, mengurangi file sistem yang membengkak, dan memulihkan ruang penyimpanan berharga Anda.",
      ],
      keyTakeaways: [
        "Drive C tidak pernah penuh tanpa alasan; pelakunya sering kali hiberfil.sys, pagefile.sys, titik pemulihan, dan cache AppData.",
        "Menonaktifkan hibernasi dengan perintah 'powercfg /h off' langsung membebaskan ruang sebesar kapasitas RAM (8–32 GB).",
        "Jangan hapus pagefile.sys; cukup atur ukurannya agar dikelola secara otomatis oleh Windows untuk stabilitas sistem.",
        "Menghapus titik System Restore lama bisa mengembalikan ruang puluhan gigabyte dalam hitungan detik.",
        "Analisis disk visual di DiskMop menampilkan folder tersembunyi berukuran raksasa secara instan melalui peta treemap.",
      ],
      dataTable: {
        caption:
          "Konsumen ruang tersembunyi utama di drive C dan metode pembersihan amannya",
        columns: [
          "Elemen Tersembunyi",
          "Ukuran Tipikal",
          "Tingkat Keamanan",
          "Cara Membersihkan",
        ],
        rows: [
          [
            "hiberfil.sys (Hibernasi)",
            "8 GB – 32 GB",
            "Aman (Bila tidak dipakai)",
            "Jalankan 'powercfg /h off' di Command Prompt Administrator",
          ],
          [
            "System Restore Points",
            "5 GB – 25 GB",
            "Aman (Kecuali titik terbaru)",
            "Disk Cleanup > Clean up system files > More Options",
          ],
          [
            "Cache AppData & Temp",
            "5 GB – 30 GB",
            "Sangat Aman",
            "Kosongkan %temp% dan gunakan Cache Cleaner di DiskMop",
          ],
          [
            "Sisa Windows Update",
            "2 GB – 10 GB",
            "Sangat Aman",
            "Settings > System > Storage > Temporary files",
          ],
          [
            "pagefile.sys (Virtual Memory)",
            "4 GB – 16 GB",
            "Perlu Dikelola, Bukan Dihapus",
            "Atur ukuran ke 'Automatically manage paging file size'",
          ],
        ],
      },
      howTo: {
        name: "Langkah Cepat Mengosongkan Drive C yang Penuh",
        totalTime: "PT15M",
        steps: [
          {
            name: "Tampilkan file tersembunyi dan file sistem",
            text: "Buka File Explorer > View > centang Hidden items dan buka Folder Options untuk melihat file sistem yang dilindungi.",
          },
          {
            name: "Matikan fitur hibernasi jika tidak dibutuhkan",
            text: "Buka Command Prompt sebagai Administrator, ketik 'powercfg /h off', lalu tekan Enter untuk menghapus file hiberfil.sys seketika.",
          },
          {
            name: "Bersihkan titik pemulihan sistem yang usang",
            text: "Jalankan Disk Cleanup sebagai admin, klik Clean up system files, lalu pada tab More Options hapus salinan bayangan lama.",
          },
          {
            name: "Hapus cache dan file sisa dengan DiskMop",
            text: "Jalankan pemindaian DiskMop untuk membersihkan cache AppData dan file unduhan duplikat secara aman.",
          },
        ],
      },
      sections: [
        {
          title: "Mengungkap File Tersembunyi dan File Sistem yang Dilindungi",
          content: [
            "Banyak pengguna bingung saat menjumlahkan ukuran folder di C: dan mendapati angkanya jauh di bawah kapasitas total yang terpakai. Windows sengaja mengunci dan menyembunyikan file sistem tertentu agar tidak terhapus secara tidak sengaja.",
            "Dengan mengaktifkan opsi penampilan file tersembunyi di Folder Options, Anda dapat melihat secara jelas berkas hiberfil.sys dan folder sistem lainnya di direktori utama drive C:.",
          ],
        },
        {
          title: "Menonaktifkan File Hibernasi hiberfil.sys",
          content: [
            "File hiberfil.sys menyimpan data RAM saat komputer beralih ke mode hibernate atau fast startup. Pada komputer dengan RAM 16 GB atau 32 GB, file ini akan memakan ruang penyimpanan dalam jumlah yang sama secara permanen.",
            "Jika Anda jarang menggunakan hibernate, cukup jalankan 'powercfg /h off' di Command Prompt (Admin). Berkas ini akan terhapus seketika tanpa memerlukan reboot.",
          ],
        },
        {
          title: "Membersihkan Cache dan Sisa Pembaruan",
          content: [
            "Aplikasi modern dan browser terus menumpuk data cache di dalam folder AppData. Di samping itu, file instalasi pembaruan Windows lama sering kali tertinggal di folder SoftwareDistribution.",
            "Menggunakan DiskMop membantu Anda menemukan dan menyapu bersih tumpukan sampah digital ini tanpa merusak konfigurasi atau dokumen penting.",
          ],
        },
      ],
      faq: [
        {
          question: "Apakah aman menghapus hiberfil.sys?",
          answer:
            "Sangat aman asalkan Anda tidak memerlukan mode hibernate. Menonaktifkannya lewat perintah resmi 'powercfg /h off' tidak akan merusak sistem operasi.",
        },
        {
          question: "Berapa sisa ruang minimal yang harus ada di drive C?",
          answer:
            "Disarankan untuk selalu menyisakan minimal 15% hingga 20% (sekitar 20–30 GB) agar Windows Update dan SSD dapat bekerja dengan optimal.",
        },
        {
          question:
            "Mengapa Folder Explorer tidak menampilkan semua penggunaan disk?",
          answer:
            "File Explorer menyembunyikan file virtual memory dan restore points demi keamanan. Gunakan software analisis disk visual seperti DiskMop untuk melihat semuanya.",
        },
      ],
      verdict: [
        "Drive C yang penuh tanpa sebab sebenarnya dipicu oleh berkas sistem tersembunyi yang terus membengkak. Dengan diagnosis yang cermat, Anda bisa membebaskan puluhan gigabyte dengan cepat.",
        "DiskMop menyediakan perkakas lengkap mulai dari peta visual disk hingga pembersih cache dalam lisensi seumur hidup yang praktis.",
      ],
      ctaText: "Bersihkan Drive C Anda Sekarang dengan DiskMop",
    },
    ko: {
      title: "C 드라이브 용량 부족 이유와 해결법: 윈도우 10/11 8가지 팁",
      metaDescription:
        "C 드라이브 용량이 이유 없이 꽉 찼나요? hiberfil.sys, 복원 지점, AppData 캐시 등 숨겨진 대용량 파일을 찾아 안전하게 용량을 확보하세요.",
      subtitle:
        "시스템 디스크를 차지하는 숨겨진 파일을 진단하고 안전하게 정리하는 가이드",
      intro: [
        "C 드라이브가 특별한 설치 없이도 가득 찬다면, Windows가 기본적으로 숨겨둔 시스템 파일 때문일 가능성이 큽니다. 대표적으로 최대 절전 모드 파일(hiberfil.sys), 가상 메모리(pagefile.sys), 시스템 복원 지점, 그리고 AppData에 쌓인 수십 기가바이트의 응용 프로그램 캐시가 있습니다.",
        "파일 탐색기에서는 이 보호된 파일들이 보이지 않아 용량 합계가 맞지 않습니다. 이 가이드에서는 원인을 시각적으로 파악하고, 불필요한 시스템 파일을 축소하거나 제거하여 C 드라이브 여유 공간을 안전하게 되찾는 8가지 방법을 안내합니다.",
      ],
      keyTakeaways: [
        "C 드라이브는 이유 없이 차지 않으며, 주범은 hiberfil.sys, pagefile.sys, 시스템 복원 지점 및 AppData 캐시입니다.",
        "최대 절전 모드를 쓰지 않는다면 'powercfg /h off' 명령어로 설치된 RAM 용량(8~32GB)만큼 즉시 공간을 확보할 수 있습니다.",
        "pagefile.sys는 시스템 안정성에 필수적이므로 삭제하지 말고 '시스템이 관리하는 크기'로 설정하세요.",
        "이전 시스템 복원 지점을 정리하면 단 한 번의 클릭으로 수십 기가바이트를 회수할 수 있습니다.",
        "DiskMop의 디스크 시각화 트리맵은 숨겨진 대용량 폴더를 단 몇 초 만에 식별해 냅니다.",
      ],
      dataTable: {
        caption: "C 드라이브 숨은 용량 차지 요소와 안전한 해결 방법",
        columns: ["숨은 항목", "일반적인 크기", "안전도", "정리 방법"],
        rows: [
          [
            "hiberfil.sys (최대 절전 모드)",
            "8GB – 32GB (RAM 비례)",
            "안전 (미사용 시)",
            "관리자 명령 프롬프트에서 'powercfg /h off' 실행",
          ],
          [
            "시스템 복원 지점",
            "5GB – 25GB",
            "안전 (최신 지점 제외)",
            "디스크 정리 > 시스템 파일 정리 > 기타 옵션",
          ],
          [
            "AppData 및 임시 캐시",
            "5GB – 30GB",
            "매우 안전",
            "%temp% 비우기 및 DiskMop 캐시 클리너 활용",
          ],
          [
            "Windows Update 잔여 파일",
            "2GB – 10GB",
            "매우 안전",
            "설정 > 시스템 > 저장소 > 임시 파일 정리",
          ],
          [
            "pagefile.sys (가상 메모리)",
            "4GB – 16GB",
            "관리 필요 (삭제 금지)",
            "페이징 파일 크기를 '시스템 관리'로 지정",
          ],
        ],
      },
      howTo: {
        name: "가득 찬 C 드라이브 용량 빠르게 비우는 순서",
        totalTime: "PT15M",
        steps: [
          {
            name: "숨김 파일 및 보호된 시스템 파일 표시",
            text: "파일 탐색기 보기 메뉴에서 '숨긴 항목'에 체크하고, 폴더 옵션에서 보호된 운영 체제 파일 숨기기를 해제합니다.",
          },
          {
            name: "불필요한 최대 절전 모드 해제",
            text: "명령 프롬프트를 관리자 권한으로 실행한 뒤 'powercfg /h off'를 입력해 hiberfil.sys를 즉시 제거합니다.",
          },
          {
            name: "오래된 복원 지점 및 섀도 복사본 정리",
            text: "디스크 정리를 실행하여 시스템 파일 정리로 이동한 뒤, 기타 옵션 탭에서 이전 복원 지점을 삭제합니다.",
          },
          {
            name: "DiskMop으로 앱 캐시 및 다운로드 폴더 청소",
            text: "DiskMop을 구동하여 축적된 AppData 캐시와 불필요한 대용량 다운로드 파일을 일괄 정리합니다.",
          },
        ],
      },
      sections: [
        {
          title: "숨겨진 시스템 파일과 실제 사용 공간 확인하기",
          content: [
            "보이는 폴더 용량을 모두 더해도 C 드라이브의 실제 사용량에 한참 못 미치는 이유는 Windows가 핵심 보호 파일을 감추어 두었기 때문입니다.",
            "폴더 옵션에서 숨김 해제를 적용하면 루트 드라이브에 상주하는 hiberfil.sys와 System Volume Information 등의 실질적 점유 크기를 파악할 수 있습니다.",
          ],
        },
        {
          title: "hiberfil.sys(최대 절전 모드) 파일 제거하기",
          content: [
            "hiberfil.sys는 컴퓨터를 최대 절전 모드로 전환할 때 RAM 상태를 디스크에 저장합니다. RAM이 16GB나 32GB인 PC에서는 그만큼의 용량이 항시 묶여 있게 됩니다.",
            "최대 절전 모드를 쓰지 않는다면 관리자 CMD에서 'powercfg /h off'를 실행하는 것만으로 재부팅 없이 즉시 수십 GB가 환원됩니다.",
          ],
        },
        {
          title: "AppData 캐시 및 업데이트 잔여물 청소",
          content: [
            "웹 브라우저와 게임 런처, 메신저 등은 AppData 폴더에 방대한 캐시 데이터를 남깁니다. Windows Update 역시 구버전 설치 파일을 백업해 두어 공간을 낭비합니다.",
            "DiskMop을 사용하면 중요한 개인 설정은 보존하면서 잉여 캐시 데이터만 정확하게 골라내어 디스크를 청소할 수 있습니다.",
          ],
        },
      ],
      faq: [
        {
          question: "hiberfil.sys를 삭제해도 윈도우 동작에 문제가 없나요?",
          answer:
            "네, 최대 절전 모드를 사용하지 않는다면 전혀 문제되지 않습니다. 공식 명령어로 비활성화하면 안전하게 용량을 확보할 수 있습니다.",
        },
        {
          question: "C 드라이브 여유 공간은 최소 얼마를 유지해야 하나요?",
          answer:
            "원활한 업데이트와 SSD 수명(웨어 레벨링) 유지를 위해 전체 용량의 15~20%(최소 20~30GB 이상)를 비워두는 것이 권장됩니다.",
        },
        {
          question: "pagefile.sys를 완전히 삭제해도 되나요?",
          answer:
            "아니요, 물리 메모리가 부족하거나 시스템 오류 덤프를 생성할 때 충돌이 발생할 수 있으므로 삭제하지 않는 것이 안전합니다.",
        },
      ],
      verdict: [
        "이유 없이 찬 C 드라이브의 미스터리는 사실 숨겨진 시스템 파일들의 누적 때문입니다. 진단과 적절한 설정만으로 단 몇 분 만에 대용량 공간을 확보할 수 있습니다.",
        "DiskMop은 시각적 디스크 분석과 캐시 정리를 한 번에 지원하는 평생 라이선스 유틸리티입니다.",
      ],
      ctaText: "DiskMop으로 C 드라이브 공간 지금 확보하기",
    },
    pl: {
      title: "Dysk C zapełnia się sam? 8 rozwiązań dla Windows 10/11",
      metaDescription:
        "Dysk C zapełnia się bez powodu? Dowiedz się, jak ukryte pliki hiberfil.sys, punkty przywracania i pamięć podręczna AppData zabierają miejsce i jak je odzyskać.",
      subtitle:
        "Przewodnik po bezpiecznym diagnozowaniu i oczyszczaniu ukrytych plików pożerających dysk",
      intro: [
        "Jeśli Twój dysk C zapełnia się pozornie bez powodu, miejsce jest niemal zawsze pochłaniane przez pliki, które system Windows domyślnie ukrywa: plik hibernacji hiberfil.sys, plik stronicowania pagefile.sys, punkty przywracania systemu oraz gigabajty pamięci podręcznej w katalogu AppData.",
        "W tym przewodniku przedstawiamy 8 sprawdzonych sposobów na zlokalizowanie ukrytych pożeraczy miejsca, bezpieczne zmniejszenie plików systemowych i odzyskanie cennej przestrzeni dyskowej.",
      ],
      keyTakeaways: [
        "Dysk C nigdy nie zapełnia się bez przyczyny; winowajcami są najczęściej hiberfil.sys, punkty przywracania oraz cache AppData.",
        "Wyłączenie hibernacji poleceniem 'powercfg /h off' natychmiast uwalnia tyle miejsca, ile wynosi pamięć RAM (od 8 do 32 GB).",
        "Nie usuwaj pliku pagefile.sys – jest potrzebny do stabilności; pozostaw jego rozmiar pod kontrolą systemu Windows.",
        "Usunięcie starych punktów przywracania systemu pozwala odzyskać dziesiątki gigabajtów jednym kliknięciem.",
        "Analizator DiskMop za pomocą mapy drzewa (treemap) błyskawicznie lokalizuje olbrzymie ukryte foldery.",
      ],
      dataTable: {
        caption:
          "Główni ukryci pożeracze miejsca na dysku C i metody ich bezpiecznego usuwania",
        columns: [
          "Ukryty element",
          "Typowy rozmiar",
          "Poziom bezpieczeństwa",
          "Jak wyczyścić?",
        ],
        rows: [
          [
            "hiberfil.sys (Hibernacja)",
            "8 GB – 32 GB",
            "Bezpieczne (gdy nieużywane)",
            "Uruchom 'powercfg /h off' w Wierszu polecenia jako admin",
          ],
          [
            "Punkty przywracania",
            "5 GB – 25 GB",
            "Bezpieczne (oprócz najnowszego)",
            "Oczyszczanie dysku > Pliki systemowe > Więcej opcji",
          ],
          [
            "Pamięć podręczna AppData",
            "5 GB – 30 GB",
            "Całkowicie bezpieczne",
            "Opróżnij %temp% i użyj narzędzia Cache Cleaner w DiskMop",
          ],
          [
            "Pozostałości Windows Update",
            "2 GB – 10 GB",
            "Całkowicie bezpieczne",
            "Ustawienia > System > Pamięć > Pliki tymczasowe",
          ],
          [
            "pagefile.sys (Pamięć wirtualna)",
            "4 GB – 16 GB",
            "Zarządzaj, nie usuwaj",
            "Ustaw rozmiar na 'Zarządzany przez system'",
          ],
        ],
      },
      howTo: {
        name: "Kroki szybkiego zwalniania miejsca na dysku C",
        totalTime: "PT15M",
        steps: [
          {
            name: "Włącz pokazywanie ukrytych plików",
            text: "W Eksploratorze plików zaznacz opcję 'Ukryte elementy' i wyłącz ukrywanie chronionych plików systemu operacyjnego.",
          },
          {
            name: "Wyłącz zbędny plik hibernacji",
            text: "Uruchom Wiersz polecenia jako administrator i wpisz 'powercfg /h off', aby od razu usunąć hiberfil.sys.",
          },
          {
            name: "Wyczyść stare punkty przywracania",
            text: "Uruchom Oczyszczanie dysku z uprawnieniami administratora i usuń kopie w tle w zakładce Więcej opcji.",
          },
          {
            name: "Oczyść pamięć podręczną z DiskMop",
            text: "Przeskanuj system programem DiskMop, aby bezpiecznie usunąć zbędne pliki tymczasowe i duplikaty.",
          },
        ],
      },
      sections: [
        {
          title: "Odkrywanie niewidocznych plików systemowych",
          content: [
            "Gdy zaznaczysz wszystkie widoczne foldery na dysku C, ich łączny rozmiar jest często o dziesiątki gigabajtów mniejszy niż zajęte miejsce raportowane przez Windows. Wynika to z blokady widoczności plików systemowych.",
            "Włączenie widoku chronionych plików pozwala zobaczyć olbrzymie pliki hiberfil.sys i zawartość ukrytych folderów systemowych.",
          ],
        },
        {
          title: "Wyłączanie pliku hiberfil.sys",
          content: [
            "Plik ten przechowuje stan pamięci RAM przy wchodzeniu w stan hibernacji. Na komputerach z 16 lub 32 GB RAM zajmuje on na stałe równorzędną ilość cennego miejsca na dysku SSD.",
            "Jeśli nie korzystasz z hibernacji, polecenie 'powercfg /h off' trwale usuwa plik bez konieczności restartu komputera.",
          ],
        },
        {
          title: "Czyszczenie pamięci podręcznej i folderu AppData",
          content: [
            "Katalog AppData przechowuje gigabajty danych tymczasowych z przeglądarek, Discorda czy platform gier. Z kolei aktualizacje systemu gromadzą archiwa w folderze SoftwareDistribution.",
            "DiskMop ułatwia selektywne usunięcie tych śmieci bez ryzyka uszkodzenia ważnych ustawień czy programów.",
          ],
        },
      ],
      faq: [
        {
          question: "Czy wyłączenie pliku hiberfil.sys jest bezpieczne?",
          answer:
            "Tak, jeśli nie używasz trybu hibernacji, usunięcie pliku za pomocą oficjalnego polecenia jest w 100% bezpieczne dla systemu.",
        },
        {
          question: "Ile wolnego miejsca powinno pozostać na dysku C?",
          answer:
            "Zaleca się utrzymywanie co najmniej 15–20% (minimum 25–30 GB) wolnej przestrzeni, aby Windows i dysk SSD mogły działać z optymalną prędkością.",
        },
        {
          question: "Czy mogę skasować plik pagefile.sys?",
          answer:
            "Nie należy usuwać ani wyłączać pliku wymiany, gdyż może to powodować awarie aplikacji wymagających pamięci wirtualnej.",
        },
      ],
      verdict: [
        "Samoczynnie kurczące się miejsce na dysku C to typowy objaw rozrostu plików systemowych i pamięci podręcznej. Odpowiednie kroki pozwalają szybko odzyskać kontrolę nad dyskiem.",
        "DiskMop oferuje kompleksowe narzędzia do analizy wizualnej i oczyszczania komputera w formule dożywotniej licencji.",
      ],
      ctaText: "Odzyskaj miejsce na dysku C z programem DiskMop",
    },
    ro: {
      title: "Se umple discul C fără motiv? 8 soluții pentru Windows 10/11",
      metaDescription:
        "Discul C se umple fără motiv aparent? Află cum fișierele ascunse hiberfil.sys, punctele de restaurare și cache-ul AppData ocupă spațiu și eliberează-l pas cu pas.",
      subtitle:
        "Ghid pentru diagnosticarea și curățarea în siguranță a fișierelor ascunse care consumă spațiul de sistem",
      intro: [
        "Dacă discul C pare că se umple fără niciun motiv evident, spațiul este aproape întotdeauna ocupat de fișiere pe care Windows le ascunde în mod prestabilit: fișierul de hibernare hiberfil.sys, memoria virtuală pagefile.sys, punctele de restaurare și cache-ul acumulat în AppData.",
        "În acest ghid, vei găsi 8 soluții practice pentru a mapa vizual spațiul ocupat, a reduce fișierele de sistem supradimensionate și a elibera gigaocteți de spațiu prețios în deplină siguranță.",
      ],
      keyTakeaways: [
        "Discul C nu se umple niciodată fără motiv; principalii vinovați sunt hiberfil.sys, pagefile.sys, punctele de restaurare și cache-ul AppData.",
        "Dezactivarea hibernării cu comanda 'powercfg /h off' eliberează instantaneu un spațiu egal cu memoria RAM (8–32 GB).",
        "Nu ștergeți pagefile.sys; lăsați dimensiunea acestuia să fie gestionată automat de Windows pentru stabilitate.",
        "Ștergerea punctelor vechi de restaurare a sistemului eliberează zeci de gigaocteți printr-un singur clic.",
        "DiskMop mapează vizual discul într-o diagramă treemap, evidențiind folderele ascunse gigantice în câteva secunde.",
      ],
      dataTable: {
        caption:
          "Principalii consumatori ascunși de spațiu de pe discul C și metode sigure de curățare",
        columns: [
          "Element ascuns",
          "Dimensiune tipică",
          "Nivel de siguranță",
          "Cum se curăță?",
        ],
        rows: [
          [
            "hiberfil.sys (Hibernare)",
            "8 GB – 32 GB",
            "Sigur (dacă nu e folosit)",
            "Rulați 'powercfg /h off' în Command Prompt ca admin",
          ],
          [
            "Puncte de restaurare sistem",
            "5 GB – 25 GB",
            "Sigur (cu excepția ultimului)",
            "Disk Cleanup > Clean up system files > More Options",
          ],
          [
            "Cache AppData și Temp",
            "5 GB – 30 GB",
            "Complet sigur",
            "Goliți %temp% și folosiți Cache Cleaner din DiskMop",
          ],
          [
            "Reziduuri Windows Update",
            "2 GB – 10 GB",
            "Complet sigur",
            "Settings > System > Storage > Temporary files",
          ],
          [
            "pagefile.sys (Memorie virtuală)",
            "4 GB – 16 GB",
            "Trebuie gestionat, nu șters",
            "Setați dimensiunea pe 'Gestionat de sistem'",
          ],
        ],
      },
      howTo: {
        name: "Pași pentru eliberarea rapidă a spațiului de pe discul C",
        totalTime: "PT15M",
        steps: [
          {
            name: "Afișați fișierele ascunse și de sistem",
            text: "În File Explorer bifați 'Hidden items' și debifați ascunderea fișierelor protejate de sistem din Folder Options.",
          },
          {
            name: "Dezactivați hibernarea dacă nu o utilizați",
            text: "Deschideți Command Prompt ca administrator și rulați 'powercfg /h off' pentru a șterge instant hiberfil.sys.",
          },
          {
            name: "Curățați punctele vechi de restaurare",
            text: "Rulați Disk Cleanup ca administrator și ștergeți punctele de restaurare anterioare din fila More Options.",
          },
          {
            name: "Eliminați fișierele temporare cu DiskMop",
            text: "Utilizați DiskMop pentru a analiza și șterge în siguranță datele reziduale din cache și fișierele descărcate duplicate.",
          },
        ],
      },
      sections: [
        {
          title: "Vizualizarea fișierelor protejate de sistem",
          content: [
            "Diferența dintre suma folderelor vizibile și spațiul total ocupat raportat de Windows este cauzată de fișierele de sistem protejate pe care Explorer le ascunde.",
            "Debifarea opțiunii de ascundere a fișierelor protejate vă permite să vedeți exact cât spațiu ocupă hiberfil.sys și folderul System Volume Information.",
          ],
        },
        {
          title: "Dezactivarea fișierului hiberfil.sys",
          content: [
            "Acest fișier stochează conținutul memoriei RAM pentru pornire rapidă sau hibernare. Pe un computer cu 16 sau 32 GB RAM, el reține permanent o cantitate echivalentă de spațiu pe SSD.",
            "Dacă nu folosiți hibernarea, comanda 'powercfg /h off' elimină fișierul imediat, fără a necesita repornirea computerului.",
          ],
        },
        {
          title: "Curățarea memoriei cache din AppData",
          content: [
            "Aplicațiile și browserele stochează continuu date temporare în folderul AppData, iar actualizările Windows lasă în urmă fișiere voluminoase de instalare.",
            "DiskMop identifică precis aceste depuneri digitale și le curăță fără a atinge documentele personale sau preferințele importante.",
          ],
        },
      ],
      faq: [
        {
          question: "Este sigură ștergerea fișierului hiberfil.sys?",
          answer:
            "Da, dacă nu folosiți modul de hibernare, dezactivarea acestuia prin comanda oficială este 100% sigură.",
        },
        {
          question: "Cât spațiu liber trebuie păstrat pe discul C?",
          answer:
            "Este recomandat să păstrați liber cel puțin 15–20% din capacitate (aproximativ 25–30 GB) pentru funcționarea optimă a SSD-ului.",
        },
        {
          question: "Pot șterge pagefile.sys pentru a câștiga spațiu?",
          answer:
            "Nu este recomandat să ștergeți sau să dezactivați pagefile.sys, deoarece sistemul are nevoie de memoria virtuală pentru a preveni erorile de tip crash.",
        },
      ],
      verdict: [
        "Umplerea discului C fără motiv este de fapt o consecință a fișierelor de sistem ascunse și a memoriei cache necurățate. Urmând acești pași, puteți recăpăta zeci de gigaocteți rapid.",
        "DiskMop oferă un pachet complet de analiză vizuală și curățare sigură cu licență pe viață.",
      ],
      ctaText: "Eliberați spațiu pe discul C acum cu DiskMop",
    },
    ru: {
      title: "Диск C заполняется сам по себе? 8 решений для Windows 10/11",
      metaDescription:
        "Диск C переполнен без видимой причины? Узнайте, как скрытые файлы hiberfil.sys, точки восстановления и кэш AppData съедают место, и освободите память шаг за шагом.",
      subtitle:
        "Руководство по безопасной диагностике и очистке скрытых файлов системного диска",
      intro: [
        "Если системный диск C заполняется сам по себе, свободное место почти всегда отнимают файлы, которые Windows скрывает по умолчанию: файл гибернации hiberfil.sys, файл подкачки pagefile.sys, теневые копии точек восстановления и гигабайты кэша приложений в папке AppData.",
        "Проводник Windows не показывает эти защищенные файлы в общем списке. В этой статье вы найдете 8 проверенных решений: от визуального анализа занятого пространства до безопасного отключения громоздких системных компонентов.",
      ],
      keyTakeaways: [
        "Диск C никогда не заполняется без причины; главные виновники — hiberfil.sys, точки восстановления и кэш в папке AppData.",
        "Отключение гибернации командой 'powercfg /h off' мгновенно освобождает объем памяти, равный размеру вашей RAM (от 8 до 32 ГБ).",
        "Не удаляйте pagefile.sys полностью — оставьте размер под управлением системы для стабильности Windows.",
        "Удаление старых точек восстановления освобождает десятки гигабайт за один клик.",
        "Визуальный анализ DiskMop с помощью древовидной карты (treemap) выявляет гигантские скрытые папки за считанные секунды.",
      ],
      dataTable: {
        caption:
          "Основные скрытые потребители памяти на диске C и безопасные методы их очистки",
        columns: [
          "Скрытый элемент",
          "Типичный размер",
          "Уровень безопасности",
          "Как очистить?",
        ],
        rows: [
          [
            "hiberfil.sys (Гибернация)",
            "8 ГБ – 32 ГБ (соразмерно RAM)",
            "Безопасно (если не используется)",
            "Выполнить 'powercfg /h off' в командной строке от имени администратора",
          ],
          [
            "Точки восстановления системы",
            "5 ГБ – 25 ГБ",
            "Безопасно (кроме последней точки)",
            "Очистка диска > Очистить системные файлы > Дополнительно",
          ],
          [
            "Кэш AppData и папка Temp",
            "5 ГБ – 30 ГБ",
            "Полностью безопасно",
            "Очистить %temp% и запустить очистку кэша в DiskMop",
          ],
          [
            "Остатки Windows Update",
            "2 ГБ – 10 ГБ",
            "Полностью безопасно",
            "Параметры > Система > Память > Временные файлы",
          ],
          [
            "pagefile.sys (Файл подкачки)",
            "4 ГБ – 16 ГБ",
            "Требует настройки, не удаления",
            "Установить размер 'По выбору системы'",
          ],
        ],
      },
      howTo: {
        name: "Порядок действий для быстрой очистки диска C",
        totalTime: "PT15M",
        steps: [
          {
            name: "Включите отображение скрытых и системных файлов",
            text: "В Проводнике перейдите во вкладку 'Вид', включите 'Скрытые элементы' и отключите скрытие защищенных системных файлов в параметрах папок.",
          },
          {
            name: "Отключите ненужный режим гибернации",
            text: "Откройте командную строку от имени администратора и введите 'powercfg /h off', чтобы мгновенно удалить файл hiberfil.sys.",
          },
          {
            name: "Удалите старые контрольные точки восстановления",
            text: "Запустите 'Очистку диска' от администратора и во вкладке 'Дополнительно' удалите предыдущие теневые копии.",
          },
          {
            name: "Очистите кэш и дубликаты с помощью DiskMop",
            text: "Запустите сканирование в DiskMop для безопасного удаления накопленного кэша приложений и ненужных загрузок.",
          },
        ],
      },
      sections: [
        {
          title: "Отображение скрытых системных файлов",
          content: [
            "Пользователи часто удивляются, когда сумма объемов видимых папок в корне диска C оказывается значительно меньше занятого места. Причина кроется в защищенных системных файлах, которые скрыты от случайного вмешательства.",
            "Включение показа защищенных файлов в параметрах папок позволит воочию увидеть hiberfil.sys и папку System Volume Information.",
          ],
        },
        {
          title: "Удаление файла гибернации hiberfil.sys",
          content: [
            "Файл hiberfil.sys сохраняет содержимое оперативной памяти при переходе в спящий режим или при быстрой загрузке. Если на компьютере установлено 16 или 32 ГБ RAM, этот файл занимает ровно столько же места на диске.",
            "Если вы не пользуетесь гибернацией, команда 'powercfg /h off' освобождает эти гигабайты моментально без перезагрузки системы.",
          ],
        },
        {
          title: "Очистка кэша AppData и временных файлов",
          content: [
            "Папка AppData быстро разрастается из-за кэша веб-браузеров, мессенджеров и игровых клиентов, а обновления Windows сохраняют объемные резервные копии.",
            "DiskMop находит и безопасно удаляет эти временные данные, не затрагивая важные пользовательские настройки.",
          ],
        },
      ],
      faq: [
        {
          question: "Безопасно ли удалять hiberfil.sys?",
          answer:
            "Да, если вам не нужна гибернация, отключение этой функции штатной командой Windows абсолютно безопасно для системы.",
        },
        {
          question: "Сколько свободного места должно оставаться на диске C?",
          answer:
            "Рекомендуется держать свободными не менее 15–20% (около 25–30 ГБ) для стабильной работы обновлений и поддержания скорости SSD.",
        },
        {
          question: "Можно ли полностью удалить файл pagefile.sys?",
          answer:
            "Нет, полное отключение файла подкачки может приводить к сбоям программ при нехватке физической оперативной памяти.",
        },
      ],
      verdict: [
        "Самопроизвольное заполнение диска C — это результат накопления скрытых системных файлов и временных кэшей. Выполнив простые шаги, вы легко освободите десятки гигабайт.",
        "DiskMop сочетает наглядный анализ занятого пространства и глубокую очистку диска в рамках бессрочной лицензии.",
      ],
      ctaText: "Освободите место на диске C с DiskMop",
    },
    th: {
      title: "ไดรฟ์ C เต็มโดยไม่ทราบสาเหตุ? 8 วิธีแก้บน Windows 10/11",
      metaDescription:
        "ไดรฟ์ C เต็มโดยไม่มีสาเหตุชัดเจน? ค้นพบไฟล์ที่ซ่อนอยู่ เช่น hiberfil.sys, จุดคืนค่าระบบ และแคช AppData พร้อมวิธีเพิ่มพื้นที่ว่างทีละขั้นตอนอย่างปลอดภัย",
      subtitle:
        "คู่มือการวินิจฉัยและลบไฟล์ระบบที่ซ่อนอยู่ซึ่งกินพื้นที่ดิสก์อย่างปลอดภัย",
      intro: [
        "หากไดรฟ์ C ของคุณเต็มขึ้นมาเรื่อยๆ โดยหาสาเหตุไม่ได้ พื้นที่ส่วนใหญ่มักถูกใช้ไปกับไฟล์ที่ Windows ซ่อนไว้ตามค่าเริ่มต้น เช่น ไฟล์ไฮเบอร์เนต hiberfil.sys, หน่วยความจำเสมือน pagefile.sys, จุดคืนค่าระบบ (System Restore) และแคชแอปพลิเคชันจำนวนมากใน AppData",
        "ในคู่มือนี้ คุณจะได้พบกับ 8 วิธีการแก้ไขที่มีประสิทธิภาพ ตั้งแต่การแสดงไฟล์ที่ซ่อนอยู่ การวิเคราะห์ไดรฟ์แบบภาพ แผนผัง ไปจนถึงการล้างแคชเพื่อทวงคืนพื้นที่ว่างหลายสิบกิกะไบต์อย่างปลอดภัย",
      ],
      keyTakeaways: [
        "ไดรฟ์ C ไม่มีวันเต็มโดยไร้สาเหตุ ตัวการหลักคือไฟล์ hiberfil.sys, จุดคืนค่าระบบ และแคชใน AppData",
        "การปิดโหมดไฮเบอร์เนตด้วยคำสั่ง 'powercfg /h off' จะคืนพื้นที่เท่ากับขนาด RAM ทันที (8–32 GB)",
        "ไม่ควรลบ pagefile.sys ทิ้ง ให้ตั้งค่าเป็น 'System managed size' เพื่อความเสถียรของระบบ",
        "การลบจุดคืนค่าระบบที่ล้าสมัยช่วยเพิ่มพื้นที่ว่างได้มหาศาลในการคลิกเพียงครั้งเดียว",
        "การวิเคราะห์ดิสก์ของ DiskMop ช่วยแสดงโฟลเดอร์ขนาดใหญ่ที่ซ่อนอยู่ได้ในเวลาไม่กี่วินาที",
      ],
      dataTable: {
        caption:
          "รายการไฟล์ที่ซ่อนอยู่ซึ่งกินพื้นที่ไดรฟ์ C และวิธีจัดการอย่างปลอดภัย",
        columns: [
          "รายการที่ซ่อนอยู่",
          "ขนาดทั่วไป",
          "ระดับความปลอดภัย",
          "วิธีทำความสะอาด",
        ],
        rows: [
          [
            "hiberfil.sys (ไฮเบอร์เนต)",
            "8 GB – 32 GB",
            "ปลอดภัย (หากไม่ได้ใช้งาน)",
            "รันคำสั่ง 'powercfg /h off' ใน Command Prompt",
          ],
          [
            "จุดคืนค่าระบบ (System Restore)",
            "5 GB – 25 GB",
            "ปลอดภัย (ยกเว้นจุดล่าสุด)",
            "Disk Cleanup > Clean up system files > More Options",
          ],
          [
            "แคช AppData และไฟล์ Temp",
            "5 GB – 30 GB",
            "ปลอดภัยอย่างยิ่ง",
            "ล้างโฟลเดอร์ %temp% และใช้ Cache Cleaner ใน DiskMop",
          ],
          [
            "ไฟล์ตกค้างจาก Windows Update",
            "2 GB – 10 GB",
            "ปลอดภัยอย่างยิ่ง",
            "Settings > System > Storage > Temporary files",
          ],
          [
            "pagefile.sys (หน่วยความจำเสมือน)",
            "4 GB – 16 GB",
            "ควรจัดการ ไม่ควรลบ",
            "ตั้งค่าขนาดเป็น 'ให้ระบบจัดการอัตโนมัติ'",
          ],
        ],
      },
      howTo: {
        name: "ขั้นตอนการเพิ่มพื้นที่ว่างในไดรฟ์ C อย่างรวดเร็ว",
        totalTime: "PT15M",
        steps: [
          {
            name: "เปิดการแสดงไฟล์ที่ซ่อนอยู่และไฟล์ระบบ",
            text: "เปิด File Explorer ไปที่แถบ View แล้วเลือก Hidden items รวมถึงยกเลิกการซ่อนไฟล์ระบบปฏิบัติการใน Folder Options",
          },
          {
            name: "ปิดการทำงานของโหมดไฮเบอร์เนต",
            text: "เปิด Command Prompt ในฐานะผู้ดูแลระบบ แล้วพิมพ์ 'powercfg /h off' เพื่อลบ hiberfil.sys ทันที",
          },
          {
            name: "ลบจุดคืนค่าระบบที่เก่าแล้ว",
            text: "เปิด Disk Cleanup ในโหมดผู้ดูแลระบบ แล้วไปที่แท็บ More Options เพื่อลบจุดกู้คืนเก่าออก",
          },
          {
            name: "ทำความสะอาดแคชสะสมด้วย DiskMop",
            text: "ใช้ DiskMop สแกนและลบไฟล์แคช AppData รวมถึงไฟล์ดาวน์โหลดที่ซ้ำซ้อนอย่างปลอดภัย",
          },
        ],
      },
      sections: [
        {
          title: "เปิดเผยไฟล์ระบบที่ถูกซ่อนอยู่",
          content: [
            "หลายคนสงสัยว่าทำไมขนาดของโฟลเดอร์ทั้งหมดที่มองเห็นได้จึงรวมกันได้น้อยกว่าพื้นที่ที่ระบบแจ้งเตือนว่าใช้งานไป นั่นเป็นเพราะ Windows ซ่อนไฟล์ระบบที่สำคัญเอาไว้",
            "การเปิดให้แสดงไฟล์ระบบจะช่วยให้คุณมองเห็นไฟล์ขนาดใหญ่อย่าง hiberfil.sys และ System Volume Information ได้อย่างชัดเจน",
          ],
        },
        {
          title: "ปิดการใช้งานไฟล์ hiberfil.sys",
          content: [
            "ไฟล์นี้ทำหน้าที่เก็บข้อมูล RAM เมื่อเข้าสู่โหมด Hibernate หรือ Fast Startup หากเครื่องมี RAM 16 หรือ 32 GB ไฟล์นี้ก็จะกินพื้นที่บน SSD ไปตามขนาดนั้นตลอดเวลา",
            "หากคุณไม่ได้ใช้โหมดนี้ คำสั่ง 'powercfg /h off' จะช่วยคืนพื้นที่ไดรฟ์กลับมาทันทีโดยไม่ต้องรีสตาร์ตเครื่อง",
          ],
        },
        {
          title: "ล้างแคชสะสมในโฟลเดอร์ AppData",
          content: [
            "แอปพลิเคชันอย่างเบราว์เซอร์และเกมมักเก็บไฟล์แคชสะสมไว้ใน AppData เป็นจำนวนมากโดยไม่มีการลบออกเอง",
            "DiskMop จะช่วยค้นหาและล้างไฟล์ขยะดิจิทัลเหล่านี้ได้อย่างแม่นยำโดยไม่กระทบต่อการตั้งค่าสำคัญของคุณ",
          ],
        },
      ],
      faq: [
        {
          question: "การลบ hiberfil.sys ปลอดภัยหรือไม่?",
          answer:
            "ปลอดภัยแน่นอน หากคุณไม่จำเป็นต้องใช้โหมด Hibernate การปิดด้วยคำสั่งอย่างเป็นทางการจะไม่ส่งผลเสียต่อระบบ",
        },
        {
          question: "ควรเหลือพื้นที่ว่างในไดรฟ์ C ไว้อย่างน้อยเท่าไร?",
          answer:
            "แนะนำให้เหลือพื้นที่ว่างไว้อย่างน้อย 15–20% (ประมาณ 25–30 GB) เพื่อให้ Windows และ SSD ทำงานได้อย่างเต็มประสิทธิภาพ",
        },
        {
          question: "สามารถลบ pagefile.sys ได้หรือไม่?",
          answer:
            "ไม่แนะนำให้ลบ เนื่องจากระบบจำเป็นต้องใช้หน่วยความจำเสมือนเมื่อแรมจริงไม่เพียงพอ เพื่อป้องกันโปรแกรมแครช",
        },
      ],
      verdict: [
        "ไดรฟ์ C ที่เต็มโดยหาสาเหตุไม่ได้มักเกิดจากไฟล์ระบบและแคชที่ถูกซ่อนไว้ การทำตามขั้นตอนข้างต้นจะช่วยกู้คืนพื้นที่ว่างหลายสิบกิกะไบต์ได้อย่างง่ายดาย",
        "DiskMop นำเสนอเครื่องมือวิเคราะห์ดิสก์แบบเห็นภาพและตัวทำความสะอาดแคชครบวงจรในสิทธิ์การใช้งานตลอดชีพ",
      ],
      ctaText: "เพิ่มพื้นที่ว่างให้ไดรฟ์ C ของคุณวันนี้ด้วย DiskMop",
    },
    vi: {
      title: "Ổ C bị đầy không rõ nguyên nhân? 8 cách xử lý trên Windows",
      metaDescription:
        "Ổ C đầy bất thường không rõ nguyên nhân? Tìm hiểu cách các tệp ẩn hiberfil.sys, điểm khôi phục và bộ nhớ đệm AppData chiếm dụng dung lượng và cách giải phóng.",
      subtitle:
        "Hướng dẫn chẩn đoán và dọn dẹp an toàn các tệp ẩn đang làm đầy ổ đĩa hệ thống",
      intro: [
        "Nếu ổ đĩa C của bạn dường như bị đầy mà không rõ nguyên nhân, dung lượng gần như luôn bị chiếm giữ bởi các tệp mà Windows ẩn đi theo mặc định: tệp ngủ đông hiberfil.sys, tệp bộ nhớ ảo pagefile.sys, các điểm khôi phục hệ thống (System Restore) và hàng gigabyte bộ nhớ đệm ứng dụng trong AppData.",
        "File Explorer không hiển thị các tệp được bảo vệ này theo mặc định. Trong bài viết này, bạn sẽ nắm được 8 giải pháp thực tế để lập bản đồ trực quan dung lượng ổ đĩa, thu nhỏ các tệp hệ thống phình to và lấy lại không gian lưu trữ an toàn.",
      ],
      keyTakeaways: [
        "Ổ C không bao giờ đầy vô cớ; thủ phạm chính là hiberfil.sys, pagefile.sys, điểm khôi phục và bộ nhớ đệm AppData.",
        "Tắt chế độ ngủ đông bằng lệnh 'powercfg /h off' giúp giải phóng ngay dung lượng tương đương kích thước RAM (8–32 GB).",
        "Không nên xóa tệp pagefile.sys; hãy để Windows tự động quản lý kích thước để đảm bảo tính ổn định của hệ thống.",
        "Xóa các điểm khôi phục hệ thống cũ giúp lấy lại hàng chục gigabyte chỉ với một cú nhấp chuột.",
        "Tính năng phân tích trực quan của DiskMop giúp phát hiện các thư mục khổng lồ bị ẩn chỉ trong vài giây.",
      ],
      dataTable: {
        caption:
          "Các thành phần ẩn chiếm nhiều dung lượng trên ổ C và cách dọn dẹp an toàn",
        columns: [
          "Thành phần ẩn",
          "Dung lượng thông thường",
          "Mức độ an toàn",
          "Cách làm sạch",
        ],
        rows: [
          [
            "hiberfil.sys (Chế độ ngủ đông)",
            "8 GB – 32 GB",
            "An toàn (Nếu không dùng)",
            "Chạy 'powercfg /h off' trong Command Prompt quản trị",
          ],
          [
            "Điểm khôi phục hệ thống",
            "5 GB – 25 GB",
            "An toàn (Trừ điểm mới nhất)",
            "Disk Cleanup > Clean up system files > More Options",
          ],
          [
            "Bộ nhớ đệm AppData & Temp",
            "5 GB – 30 GB",
            "Hoàn toàn an toàn",
            "Dọn %temp% và dùng tính năng Cache Cleaner của DiskMop",
          ],
          [
            "Dữ liệu thừa Windows Update",
            "2 GB – 10 GB",
            "Hoàn toàn an toàn",
            "Settings > System > Storage > Temporary files",
          ],
          [
            "pagefile.sys (Bộ nhớ ảo)",
            "4 GB – 16 GB",
            "Cần quản lý, không xóa",
            "Đặt kích thước thành 'Do hệ thống tự động quản lý'",
          ],
        ],
      },
      howTo: {
        name: "Các bước giải phóng nhanh không gian ổ C bị đầy",
        totalTime: "PT15M",
        steps: [
          {
            name: "Hiển thị các tệp ẩn và tệp hệ thống",
            text: "Trong File Explorer, mở tab View, đánh dấu vào 'Hidden items' và tắt tùy chọn ẩn các tệp hệ điều hành được bảo vệ.",
          },
          {
            name: "Tắt chế độ ngủ đông nếu không cần thiết",
            text: "Mở Command Prompt với quyền quản trị viên, nhập lệnh 'powercfg /h off' và nhấn Enter để xóa tệp hiberfil.sys ngay lập tức.",
          },
          {
            name: "Dọn dẹp các điểm khôi phục hệ thống cũ",
            text: "Khởi chạy công cụ Disk Cleanup với tư cách admin và xóa các bản sao lưu trước đó trong tab More Options.",
          },
          {
            name: "Quét dọn bộ nhớ đệm với DiskMop",
            text: "Sử dụng DiskMop để phân tích và dọn sạch các tệp đệm AppData cũng như tệp tải về trùng lặp an toàn.",
          },
        ],
      },
      sections: [
        {
          title: "Hiển thị các tệp hệ thống được bảo vệ",
          content: [
            "Nhiều người dùng nhận thấy tổng dung lượng các thư mục nhìn thấy trên ổ C nhỏ hơn nhiều so với dung lượng đã sử dụng. Điều này là do Windows ẩn các tệp hệ thống quan trọng để tránh bị xóa nhầm.",
            "Việc bật hiển thị tệp ẩn trong Folder Options sẽ cho phép bạn nhìn thấy các tệp lớn như hiberfil.sys và thư mục System Volume Information.",
          ],
        },
        {
          title: "Xóa tệp ngủ đông hiberfil.sys",
          content: [
            "Tệp hiberfil.sys lưu trữ trạng thái của RAM khi máy tính vào chế độ ngủ đông. Trên các máy tính có 16 hoặc 32 GB RAM, tệp này luôn chiếm một dung lượng tương đương trên ổ SSD.",
            "Nếu không sử dụng tính năng ngủ đông, lệnh 'powercfg /h off' sẽ giải phóng dung lượng này ngay lập tức mà không cần khởi động lại máy.",
          ],
        },
        {
          title: "Dọn dẹp bộ nhớ đệm và tệp tạm trong AppData",
          content: [
            "Các ứng dụng và trình duyệt liên tục tích lũy dữ liệu đệm trong thư mục AppData, trong khi Windows Update cũng để lại các tệp cài đặt cũ.",
            "DiskMop giúp bạn phát hiện và làm sạch các dữ liệu dư thừa này một cách chính xác mà không làm ảnh hưởng đến cấu hình cá nhân.",
          ],
        },
      ],
      faq: [
        {
          question: "Xóa tệp hiberfil.sys có an toàn không?",
          answer:
            "Rất an toàn nếu bạn không sử dụng chế độ ngủ đông. Vô hiệu hóa tính năng này bằng lệnh chính thức không gây hại cho Windows.",
        },
        {
          question: "Nên để trống bao nhiêu dung lượng trên ổ C?",
          answer:
            "Nên giữ trống ít nhất 15% đến 20% dung lượng (khoảng 25–30 GB) để đảm bảo cập nhật hệ thống và hiệu suất ổ SSD.",
        },
        {
          question: "Có nên xóa tệp pagefile.sys không?",
          answer:
            "Không nên xóa hay tắt tệp bộ nhớ ảo này vì nó cần thiết cho sự ổn định của hệ thống khi chạy các tác vụ nặng.",
        },
      ],
      verdict: [
        "Ổ C bị đầy không rõ nguyên nhân thực chất là do sự tích tụ của các tệp hệ thống ẩn và bộ nhớ đệm. Bằng các bước xử lý đơn giản, bạn có thể giải phóng hàng chục GB nhanh chóng.",
        "DiskMop mang đến giải pháp toàn diện kết hợp phân tích trực quan và dọn dẹp thông minh với giấy phép trọn đời.",
      ],
      ctaText: "Giải phóng dung lượng ổ C ngay với DiskMop",
    },
    "zh-Hans": {
      title: "C盘莫名其妙满了？Win10/11深度清理的8个解决方法",
      metaDescription:
        "C盘空间莫名其妙变红变满？深入剖析休眠文件hiberfil.sys、虚拟内存、系统还原点及AppData缓存，带你一步步安全释放几十G空间。",
      subtitle: "诊断并安全清理蚕食系统盘空间的隐藏文件实用指南",
      intro: [
        "如果你的C盘在没有安装大型软件的情况下莫名其妙变满，空间通常被Windows默认隐藏的系统文件占用了：休眠文件 hiberfil.sys、虚拟内存 pagefile.sys、系统还原点以及 AppData 目录下数以十G计的应用程序缓存。",
        "由于文件资源管理器默认隐藏这些受保护的文件，所有可见文件夹的大小相加往往远小于系统显示的已用空间。本指南将介绍8个行之有效的解决方案，帮助你安全找出并清理这些隐藏的空间杀手。",
      ],
      keyTakeaways: [
        "C盘不会无缘无故变满；罪魁祸首往往是 hiberfil.sys、pagefile.sys、还原点和 AppData 缓存。",
        "若不使用休眠功能，通过管理员命令 'powercfg /h off' 可瞬间释放等同于内存大小（8–32 GB）的空间。",
        "切勿强行删除 pagefile.sys；建议保持系统自动管理大小，以确保系统在极端负载下的稳定性。",
        "清理旧版本的系统还原点与卷影副本，只需一次点击即可释放数十吉字节的空间。",
        "DiskMop 采用直观的树状图（Treemap）可视化分析，几秒钟内揪出所有隐藏的超大文件夹。",
      ],
      dataTable: {
        caption: "C盘主要隐藏空间占用项目及安全清理方案",
        columns: ["隐藏项目", "常见占用大小", "安全级别", "清理方法"],
        rows: [
          [
            "hiberfil.sys (休眠文件)",
            "8 GB – 32 GB",
            "安全 (不使用休眠时)",
            "以管理员身份在CMD中运行 'powercfg /h off'",
          ],
          [
            "系统还原点",
            "5 GB – 25 GB",
            "安全 (保留最新一点)",
            "磁盘清理 > 清理系统文件 > 其他选项 > 清理卷影副本",
          ],
          [
            "AppData及Temp缓存",
            "5 GB – 30 GB",
            "极其安全",
            "清空 %temp% 并使用 DiskMop 缓存清理功能",
          ],
          [
            "Windows Update更新残留",
            "2 GB – 10 GB",
            "极其安全",
            "设置 > 系统 > 存储 > 临时文件 > Windows更新清理",
          ],
          [
            "pagefile.sys (虚拟内存)",
            "4 GB – 16 GB",
            "建议管理而非删除",
            "在高级系统设置中将分页文件设为'系统管理的大小'",
          ],
        ],
      },
      howTo: {
        name: "快速腾出爆满C盘空间的步骤",
        totalTime: "PT15M",
        steps: [
          {
            name: "显示隐藏及受保护的系统文件",
            text: "在文件资源管理器中勾选'隐藏的项目'，并在文件夹选项中取消勾选'隐藏受保护的操作系统文件'。",
          },
          {
            name: "禁用不需要的系统休眠功能",
            text: "以管理员身份打开命令提示符，输入 'powercfg /h off' 并回车，即可瞬间删除 hiberfil.sys 释放数G空间。",
          },
          {
            name: "清除多余的历史还原点",
            text: "以管理员身份运行磁盘清理，进入清理系统文件，在'其他选项'中删除以往的还原点。",
          },
          {
            name: "使用 DiskMop 深度清理缓存与冗余文件",
            text: "运行 DiskMop 扫描 AppData 中的臃肿缓存和下载目录中的重复文件，一键安全瘦身。",
          },
        ],
      },
      sections: [
        {
          title: "揭秘隐藏在C盘根目录的受保护文件",
          content: [
            "许多用户在计算C盘中所有可见文件夹的总合后，会困惑地发现总容量远远对不上已用空间。这是因为Windows为了防止误删，默认对核心系统文件进行了高级隐藏保护。",
            "通过在文件夹选项中显示受保护的操作系统文件，你便能在C盘根目录下看到巨大的 hiberfil.sys 和 System Volume Information 目录。",
          ],
        },
        {
          title: "安全移除休眠文件 hiberfil.sys",
          content: [
            "hiberfil.sys 用于在进入休眠模式时保存内存状态。如果你的电脑拥有 16GB 或 32GB 内存，该文件就会在SSD上常驻同等大小的空间。",
            "如果你习惯于常规关机或睡眠，无需休眠功能，只需运行 'powercfg /h off' 命令即可在不重启的情况下瞬间回收几十GB硬盘空间。",
          ],
        },
        {
          title: "清理 AppData 缓存与更新垃圾",
          content: [
            "各类浏览器、社交软件和游戏客户端会在 AppData 中日积月累留下庞大的缓存与日志，而 Windows Update 也会保留过往的安装包。",
            "借助 DiskMop 的专业缓存清理工具，你可以精准剔除这些数字垃圾，绝不损坏任何个人文档或软件配置。",
          ],
        },
      ],
      faq: [
        {
          question: "删除 hiberfil.sys 会影响电脑正常运行吗？",
          answer:
            "完全不会。只要你不使用休眠（Hibernate）功能，通过官方命令关闭它对日常开机和软件运行没有任何不良影响。",
        },
        {
          question: "C盘应该预留多少可用空间最合适？",
          answer:
            "建议始终保持至少 15%–20%（约 20–30 GB）的可用空间，以保证系统补丁顺利安装以及固态硬盘（SSD）磨损均衡算法正常运转。",
        },
        {
          question: "可以直接删除 pagefile.sys 吗？",
          answer:
            "不建议禁用或删除虚拟内存，否则在运行高内存消耗软件或游戏时可能会直接崩溃或报错。",
        },
      ],
      verdict: [
        "C盘无故变满从来都不是无法破解的谜团，而是隐藏系统文件与应用程序缓存自然膨胀的结果。只需几个简单的清理步骤，就能迅速恢复宽裕的磁盘空间。",
        "DiskMop 将可视化空间分析、缓存清理与重复文件查找集成于一体，一次性买断终身授权，轻松守护电脑健康。",
      ],
      ctaText: "立即使用 DiskMop 释放C盘可用空间",
    },
  },
};
