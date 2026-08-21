import type { Article } from '../types';

export const isItSafeToDeleteWindowsFiles: Article = {
  slug: 'is-it-safe-to-delete-windows-files',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-08-17',
  readingTime: 10,
  content: {
    tr: {
      title: "Bu Windows Dosyalarını Silmek Güvenli mi? Dosya Dosya Cevap",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution ve Installer klasörü: hangisini silmek güvenli, hangisi sistemi bozar? Her dosya için net cevap.",
      subtitle: "Silinebilir, Şartlı Silinebilir ve Asla Dokunulmaz Listesi",
      intro: [
        "Kısa cevap: geçici dosyalar, Windows.old, Prefetch, küçük resim önbelleği ve SoftwareDistribution indirme klasörü silinebilir. pagefile.sys ve hiberfil.sys silinmez ama Windows ayarlarından kapatılabilir. WinSxS, C:\\Windows\\Installer, System32 ve System Volume Information klasörlerine ise asla elle dokunulmaz — bunları silmek uygulamaların kaldırılmasını, güncellemeleri ve sistem kurtarmayı kalıcı olarak bozar.",
        "İnternette \"şu klasörü sil, 20 GB kazan\" tavsiyesi bol. Bu tavsiyelerin bir kısmı doğru, bir kısmı ise yıllar sonra ortaya çıkan onarılamaz hasar bırakıyor. Bu rehber Windows'ta yer kaplayan dosyaları üç net kategoriye ayırıyor: silinebilir, şartlı silinebilir ve asla dokunulmaz. Her madde için ne olduğunu, ne kadar yer kapladığını ve silersen ne kaybettiğini yazdık.",
      ],
      keyTakeaways: [
        "Geçici dosyalar (%TEMP% ve C:\\Windows\\Temp) her zaman güvenle silinebilir; kullanımda olan dosyaları Windows zaten atlar.",
        "Windows.old silinebilir ama sildikten sonra bir önceki Windows sürümüne geri dönemezsiniz. Zaten 10 gün sonra otomatik silinir.",
        "WinSxS klasörü ASLA elle silinmez. Boyutu yanıltıcıdır çünkü içindeki dosyaların çoğu sabit bağlantıdır; temizliği yalnızca DISM /StartComponentCleanup ile yapılır.",
        "C:\\Windows\\Installer klasörünü silmek en yaygın ve en yıkıcı tavsiyedir: MSI tabanlı programların kaldırılması ve onarılması kalıcı olarak bozulur.",
        "pagefile.sys ve hiberfil.sys silinmez; sırasıyla sanal bellek ayarlarından ve powercfg /hibernate off komutuyla kapatılır.",
        "Prefetch klasörü silinebilir ama önerilmez: Windows onu yeniden oluşturana kadar uygulamalar birkaç gün daha yavaş açılır.",
      ],
      sections: [
        {
          title: "Güvenle Silinebilir: Geçici Dosyalar ve Önbellekler",
          content: [
            "Geçici dosya klasörleri Windows'ta güvenle boşaltılabilecek en büyük alandır. Kullanıcı geçici klasörü %TEMP% (genellikle C:\\Users\\KullanıcıAdı\\AppData\\Local\\Temp) ve sistem geçici klasörü C:\\Windows\\Temp, kurulum artıkları, yarım kalan indirmeler ve program çalışma dosyalarıyla dolar. Aylardır temizlenmemiş bir bilgisayarda bu iki klasör toplamda 5 ila 20 GB arasında yer tutabilir.",
            "Silme işlemi risksizdir çünkü Windows o anda kullanımda olan dosyaları kilitler ve silinmelerine izin vermez; siz \"tümünü sil\" deseniz bile atlanırlar. Bir programın çalışırken oluşturduğu geçici dosya silinemezse basitçe kalır, hata oluşmaz.",
            "Aynı kategoriye küçük resim önbelleği (thumbcache_*.db), Windows Update günlükleri, bellek dökümü dosyaları (.dmp) ve Teslimat Optimizasyonu dosyaları da girer. Hepsi yeniden oluşturulabilir. Disk Mop'un Önbellek Temizleyici (Cache Cleaner) modülü bu kategorilerin yaklaşık yirmisini tek ekranda listeler ve hangisinin ne kadar yer kapladığını silmeden önce gösterir.",
          ],
        },
        {
          title: "Güvenle Silinebilir: Windows.old ve Yükseltme Artıkları",
          content: [
            "Windows.old, büyük bir Windows sürüm yükseltmesinden sonra oluşan ve eski kurulumunuzun tamamını içeren klasördür. Boyutu genellikle 15 ila 30 GB'dir ve tek işlevi, yükseltmeden sonraki ilk 10 gün içinde eski sürüme geri dönebilmenizi sağlamaktır.",
            "Silmek güvenlidir, tek kaybınız o geri dönüş hakkıdır. Zaten Windows 10 gün sonra klasörü kendiliğinden siler. Yeni sürümde bir sorun yaşamıyorsanız beklemek yerine Ayarlar > Sistem > Depolama > Geçici dosyalar yolundan \"Önceki Windows kurulumları\" kutusunu işaretleyip kaldırabilirsiniz.",
            "Yanında $WINDOWS.~BT ve $WINDOWS.~WS gizli klasörleri de bulunur; bunlar yükseltme sırasında kullanılan çalışma dosyalarıdır ve aynı ekrandan temizlenir. Bu klasörleri Dosya Gezgini'nden elle silmeye çalışmak izin hatası verir — doğru yol her zaman Windows'un kendi temizlik aracıdır.",
          ],
        },
        {
          title: "Şartlı Silinebilir: pagefile.sys, hiberfil.sys ve Prefetch",
          content: [
            "pagefile.sys sanal bellek dosyasıdır ve boyutu genellikle RAM'inizle orantılıdır; 16 GB RAM'li bir makinede birkaç gigabayt tutar. Bu dosya silinmez — Windows onu anında yeniden oluşturur. Küçültmek isterseniz Gelişmiş sistem ayarları > Performans > Gelişmiş > Sanal bellek yolundan özel bir boyut verebilirsiniz. Tamamen kapatmak, az RAM'li sistemlerde uygulama çökmelerine ve çekirdek hata ayıklama dökümlerinin kaybına yol açar.",
            "hiberfil.sys hazırda bekletme dosyasıdır ve RAM'inizin yaklaşık %40'ı kadar yer kaplar. Doğru kaldırma yolu, yönetici olarak açılmış komut isteminde powercfg /hibernate off yazmaktır; bu komut dosyayı kendiliğinden kaldırır. Bedeli: hazırda bekletme özelliği ve onunla birlikte Windows'un Hızlı Başlangıç (Fast Startup) özelliği devre dışı kalır, yani açılış birkaç saniye uzayabilir.",
            "Prefetch klasörü (C:\\Windows\\Prefetch) sık kullandığınız uygulamaların daha hızlı açılması için tutulan küçük dosyalardır ve nadiren birkaç yüz megabaytı geçer. Silinmesi zararsızdır ama faydasızdır: kazandığınız alan ihmal edilebilir, karşılığında Windows verileri yeniden toplayana kadar birkaç gün boyunca uygulamalar biraz daha yavaş açılır. Kısacası yapılabilir ama yapmaya değmez.",
          ],
        },
        {
          title: "Asla Dokunmayın: WinSxS ve C:\\Windows\\Installer",
          content: [
            "WinSxS (Bileşen Deposu), Windows'un tüm sistem bileşenlerinin ve güncelleme sürümlerinin tutulduğu klasördür. Dosya Gezgini bu klasörü genellikle 10 GB'ın üzerinde gösterir ama bu rakam yanıltıcıdır: içindeki dosyaların büyük kısmı Windows'un başka yerlerindeki dosyalara verilen sabit bağlantılardır (hard link), yani aynı veri iki kez sayılır. Gerçek kazanç çoğu zaman gösterilen boyutun çok altındadır.",
            "Bu klasörden elle dosya silmek Windows'u onarılamaz biçimde bozar: güncellemeler kurulamaz, sistem dosyası denetimi başarısız olur ve bazı özellikler açılamaz hale gelir. Tek doğru temizlik yöntemi yönetici komut isteminde DISM /Online /Cleanup-Image /StartComponentCleanup komutudur; bu komut yalnızca gerçekten gereksiz olan eski bileşen sürümlerini kaldırır.",
            "C:\\Windows\\Installer klasörü ise internetteki en tehlikeli tavsiyenin hedefidir. Klasör gizlidir, onlarca gigabayta ulaşabilir ve içindeki .msi/.msp dosyaları gereksiz görünür. Oysa Windows bu dosyaları MSI tabanlı programları kaldırırken ve onarırken kullanır. Sildiğinizde Office gibi programlar ne kaldırılabilir ne onarılabilir hale gelir ve tek çözüm çoğu zaman temiz kurulumdur. Bu klasöre asla dokunmayın.",
          ],
        },
        {
          title: "Asla Dokunmayın: System32, Sürücü Deposu ve Sistem Geri Yükleme",
          content: [
            "C:\\Windows\\System32 Windows'un kendisidir; buradan dosya silmek sistemi açılamaz hale getirir. \"System32'yi sil, bilgisayarın hızlanır\" tavsiyesi internetin en eski şakalarından biridir ve maalesef hâlâ ciddiye alan çıkmaktadır.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository sürücü deposudur ve 5 ila 15 GB tutabilir. İçinde eski sürücü sürümleri birikir ama elle silmek sürücü güncellemelerini ve donanım kurtarmayı bozar. Gerçekten yer kazanmak isterseniz doğru araç pnputil /enum-drivers ile listeleyip yalnızca gereksiz eski paketleri kaldırmaktır.",
            "System Volume Information klasörü sistem geri yükleme noktalarını ve Gölge Kopyaları tutar. Bu klasöre erişim bilerek kısıtlanmıştır. Yer açmak istiyorsanız doğru yol Denetim Masası > Sistem > Sistem koruması ekranından geri yükleme noktalarına ayrılan disk yüzdesini düşürmek veya eski noktaları oradan temizlemektir. Klasörü zorla silmeye çalışmak sistem kurtarmayı işlevsiz bırakır.",
          ],
        },
        {
          title: "Silmeden Önce Ne Kadar Yer Kazanacağınızı Görün",
          content: [
            "Bu listenin en önemli dersi, kazanacağınız alanın çoğu zaman tahmin ettiğinizden farklı olmasıdır. WinSxS 12 GB görünüp 2 GB kazandırabilir; hiç aklınıza gelmeyen bir oyun önbelleği ise 40 GB tutuyor olabilir. Doğru sıra önce ölçmek, sonra silmektir.",
            "Disk Mop'un Disk Analizi (Disk Analysis) modülü sürücünüzü tarayıp klasörleri boyuta göre görsel bir treemap olarak dizer; hangi klasörün gerçekten şiştiğini tek bakışta görürsünüz. Sistem Dosyası Koruması ise bu rehberdeki \"asla dokunmayın\" listesini kod düzeyinde uygular: System32, WinSxS ve Installer gibi kritik yollar korumalı listede tutulur, bir silme işlemine karışırlarsa ayrı bir uyarıyla işaretlenir ve onaysız silinmezler.",
            "Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "Windows.old klasörünü silmek güvenli mi?",
          answer:
            "Evet, güvenlidir. Windows.old yalnızca yükseltme sonrası ilk 10 gün içinde eski Windows sürümüne geri dönmenizi sağlar. Sildiğinizde tek kaybınız bu geri dönüş hakkıdır ve klasör zaten 10 gün sonra otomatik silinir. Doğru yol Ayarlar > Sistem > Depolama > Geçici dosyalar ekranından \"Önceki Windows kurulumları\" seçeneğini kullanmaktır.",
        },
        {
          question: "WinSxS klasörünü silebilir miyim?",
          answer:
            "Hayır. WinSxS'ten elle dosya silmek Windows güncellemelerini ve sistem dosyası onarımını kalıcı olarak bozar. Klasörün Dosya Gezgini'nde görünen boyutu da yanıltıcıdır çünkü içindeki dosyaların çoğu sabit bağlantıdır ve iki kez sayılır. Tek güvenli temizlik yöntemi yönetici komut isteminde DISM /Online /Cleanup-Image /StartComponentCleanup komutunu çalıştırmaktır.",
        },
        {
          question: "C:\\Windows\\Installer klasörünü silmek yer kazandırır mı?",
          answer:
            "Kazandırır ama bunu asla yapmayın. Windows bu klasördeki .msi ve .msp dosyalarını MSI tabanlı programları kaldırırken ve onarırken kullanır. Klasörü sildiğinizde Microsoft Office gibi uygulamalar ne kaldırılabilir ne de onarılabilir hale gelir; çoğu durumda tek çözüm işletim sisteminin temiz kurulumudur.",
        },
        {
          question: "pagefile.sys silinebilir mi?",
          answer:
            "Silinemez; Windows dosyayı anında yeniden oluşturur. Yer kazanmak istiyorsanız Gelişmiş sistem ayarları > Performans > Gelişmiş > Sanal bellek yolundan özel bir boyut belirleyebilirsiniz. Sayfa dosyasını tamamen kapatmak, özellikle 8 GB ve altı RAM'e sahip sistemlerde uygulama çökmelerine ve hata ayıklama dökümlerinin kaybına yol açar.",
        },
        {
          question: "hiberfil.sys dosyasından nasıl kurtulurum?",
          answer:
            "Yönetici olarak açtığınız komut isteminde powercfg /hibernate off yazın; dosya kendiliğinden kaldırılır ve RAM'inizin yaklaşık %40'ı kadar alan boşalır. Karşılığında hazırda bekletme özelliği ve Windows'un Hızlı Başlangıç özelliği kapanır, bu da açılış süresini birkaç saniye uzatabilir.",
        },
        {
          question: "Prefetch klasörünü silmek bilgisayarı hızlandırır mı?",
          answer:
            "Hayır, tam tersi. Prefetch, sık kullandığınız uygulamaların daha hızlı açılması için tutulan verilerdir ve nadiren birkaç yüz megabayttan fazla yer kaplar. Sildiğinizde kazandığınız alan ihmal edilebilir düzeydedir, buna karşılık Windows verileri yeniden toplayana kadar uygulamalar birkaç gün boyunca biraz daha yavaş açılır.",
        },
      ],
      verdict: [
        "Windows'ta yer açmanın güvenli yolu bellidir: geçici dosyalar, önbellekler, Windows.old ve yükseltme artıkları serbestçe silinebilir; pagefile.sys ile hiberfil.sys silinmez, Windows'un kendi ayarlarından kapatılır; WinSxS, Installer, System32, sürücü deposu ve System Volume Information ise elle dokunulmaması gereken alanlardır.",
        "Genel kural şudur: bir klasörü Dosya Gezgini'nden silmek için yönetici izni veya sahiplik değişikliği gerekiyorsa, o klasör muhtemelen sizin silmeniz için tasarlanmamıştır. Windows'un o alan için sunduğu kendi aracını kullanın — Depolama ayarları, DISM, powercfg veya sistem koruması ekranı.",
        "En büyük kazanç genellikle bu tartışmalı sistem klasörlerinde değil, gözden kaçan kullanıcı dosyalarındadır: unutulmuş indirmeler, yinelenen fotoğraflar, eski oyun kurulumları ve kaldırılmış programların artıkları. Önce ölçün, sonra silin.",
      ],
      ctaText: "Neyin Silinebilir Olduğunu Tahmin Etmeyi Bırakın",
    },
    en: {
      title: "Is It Safe to Delete These Windows Files? A File-by-File Answer",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution and the Installer folder: which are safe to delete and which break your system? A clear verdict for each.",
      subtitle: "The Safe, Conditional and Never-Touch Lists",
      intro: [
        "Short answer: temporary files, Windows.old, Prefetch, the thumbnail cache and the SoftwareDistribution download folder are safe to delete. pagefile.sys and hiberfil.sys should not be deleted but can be disabled through Windows settings. WinSxS, C:\\Windows\\Installer, System32 and System Volume Information must never be touched by hand — deleting them permanently breaks program uninstalls, Windows updates and system recovery.",
        "The internet is full of \"delete this folder, reclaim 20 GB\" advice. Some of it is correct and some of it leaves damage that only surfaces years later, when an update refuses to install or a program cannot be uninstalled. This guide sorts the space hogs in Windows into three clear buckets: safe, conditional and never. For each entry you get what it is, how much space it typically uses and exactly what you lose by removing it.",
      ],
      keyTakeaways: [
        "Temporary files (%TEMP% and C:\\Windows\\Temp) are always safe to delete; Windows automatically skips any file currently in use.",
        "Windows.old is safe to delete, but you lose the ability to roll back to your previous Windows version. It is removed automatically after 10 days anyway.",
        "Never delete anything from WinSxS by hand. Its reported size is misleading because most files inside are hard links; the only safe cleanup is DISM /StartComponentCleanup.",
        "Deleting C:\\Windows\\Installer is the most common and most destructive advice online: it permanently breaks uninstall and repair for every MSI-based program.",
        "pagefile.sys and hiberfil.sys are not deleted but disabled — through virtual memory settings and the powercfg /hibernate off command respectively.",
        "The Prefetch folder can be deleted but should not be: apps launch slightly slower for a few days until Windows rebuilds the data, and the space saved is negligible.",
      ],
      sections: [
        {
          title: "Safe to Delete: Temporary Files and Caches",
          content: [
            "Temporary file folders are the single largest area you can clear in Windows without risk. The user temp folder %TEMP% (usually C:\\Users\\YourName\\AppData\\Local\\Temp) and the system temp folder C:\\Windows\\Temp fill up with installer leftovers, abandoned downloads and program working files. On a machine that has never been cleaned, these two folders together commonly hold between 5 and 20 GB.",
            "Deleting them carries no risk because Windows locks any file that is currently in use and refuses to remove it, even if you select everything. If a running program is holding a temp file, that file is simply skipped — no error, no damage.",
            "The same category includes the thumbnail cache (thumbcache_*.db), Windows Update logs, memory dump files (.dmp) and Delivery Optimization files. All of them are regenerated on demand. Disk Mop's Cache Cleaner lists around twenty of these categories on one screen and shows how much each one is holding before you delete anything.",
          ],
        },
        {
          title: "Safe to Delete: Windows.old and Upgrade Leftovers",
          content: [
            "Windows.old is created after a major Windows version upgrade and contains your entire previous installation. It is typically 15 to 30 GB, and its only purpose is to let you roll back to the old version within the first 10 days after upgrading.",
            "Deleting it is safe; the only thing you give up is that rollback option. Windows removes the folder on its own after 10 days regardless. If the new version is running fine, you can reclaim the space immediately via Settings > System > Storage > Temporary files by ticking \"Previous Windows installation(s)\".",
            "You will often find the hidden $WINDOWS.~BT and $WINDOWS.~WS folders alongside it. These are working files from the upgrade process and are cleared from the same screen. Trying to delete them manually in File Explorer produces permission errors — the built-in cleanup tool is always the correct route.",
          ],
        },
        {
          title: "Conditional: pagefile.sys, hiberfil.sys and Prefetch",
          content: [
            "pagefile.sys is the virtual memory file and its size scales with your RAM; on a 16 GB machine it typically occupies several gigabytes. You cannot delete it — Windows recreates it immediately. If you want it smaller, set a custom size under Advanced system settings > Performance > Advanced > Virtual memory. Disabling it entirely causes application crashes on low-RAM systems and eliminates kernel crash dumps, which makes future troubleshooting much harder.",
            "hiberfil.sys backs the hibernation feature and takes roughly 40% of your installed RAM. The correct way to remove it is powercfg /hibernate off in an administrator command prompt, which deletes the file for you. The cost: hibernation is disabled, and so is Windows Fast Startup, which may add a few seconds to boot time.",
            "The Prefetch folder (C:\\Windows\\Prefetch) holds small files that help frequently used applications launch faster and rarely exceeds a few hundred megabytes. Deleting it is harmless but pointless: the space you reclaim is negligible, and in exchange your applications open a little slower for several days while Windows rebuilds the data. It can be done, but there is no reason to do it.",
          ],
        },
        {
          title: "Never Touch: WinSxS and C:\\Windows\\Installer",
          content: [
            "WinSxS, the component store, holds every Windows system component and every superseded update version. File Explorer usually reports it as more than 10 GB, but that figure is misleading: most of the files inside are hard links to files that live elsewhere in Windows, so the same data is counted twice. The real recoverable space is typically far smaller than the number shown.",
            "Deleting files from this folder breaks Windows in ways that cannot be repaired: updates fail to install, system file checks fail, and some features can no longer be enabled. The only correct cleanup is DISM /Online /Cleanup-Image /StartComponentCleanup in an administrator command prompt, which removes only genuinely superseded component versions.",
            "C:\\Windows\\Installer is the target of the single most dangerous piece of advice on the internet. The folder is hidden, can grow to tens of gigabytes, and the .msi and .msp files inside look like junk. They are not: Windows uses them whenever you uninstall or repair an MSI-based program. Delete them and applications like Microsoft Office can neither be removed nor repaired, and a clean OS install is often the only way out. Leave this folder alone.",
          ],
        },
        {
          title: "Never Touch: System32, the Driver Store and System Restore",
          content: [
            "C:\\Windows\\System32 is Windows itself; removing files from it makes the system unbootable. The old \"delete System32 to speed up your PC\" line is one of the internet's oldest pranks, and people still fall for it.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository is the driver store and can hold 5 to 15 GB of accumulated driver packages, including old versions. Deleting from it by hand breaks driver updates and hardware recovery. If you genuinely need that space, the correct tool is pnputil /enum-drivers to list packages and remove only the obsolete ones.",
            "System Volume Information holds System Restore points and Shadow Copies, and access to it is restricted deliberately. To reclaim space, lower the disk percentage reserved for restore points, or delete old points, under Control Panel > System > System Protection. Forcing your way into the folder to delete files leaves system recovery non-functional.",
          ],
        },
        {
          title: "Measure Before You Delete",
          content: [
            "The most useful lesson from this list is that the space you reclaim is often nothing like what you expected. WinSxS may report 12 GB and free up 2 GB; meanwhile a game cache you never think about may be sitting on 40 GB. The right order is always measure first, delete second.",
            "Disk Mop's Disk Analysis scans your drive and lays folders out as a visual treemap sized by how much they actually hold, so the genuinely bloated folder is obvious at a glance. Its System File Protection enforces the never-touch list from this guide in code: critical paths such as System32, WinSxS and Installer are kept on a protected list, flagged separately if they ever appear in a delete operation, and never removed without an explicit confirmation.",
            "You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "Is it safe to delete the Windows.old folder?",
          answer:
            "Yes. Windows.old exists only so you can roll back to your previous Windows version within 10 days of an upgrade. Deleting it costs you that rollback option and nothing else, and Windows removes the folder automatically after 10 days anyway. Use Settings > System > Storage > Temporary files and tick \"Previous Windows installation(s)\" rather than deleting it in File Explorer.",
        },
        {
          question: "Can I delete the WinSxS folder?",
          answer:
            "No. Deleting files from WinSxS by hand permanently breaks Windows updates and system file repair. The folder size shown in File Explorer is also misleading, because most files inside are hard links and get counted twice. The only safe cleanup is running DISM /Online /Cleanup-Image /StartComponentCleanup from an administrator command prompt.",
        },
        {
          question: "Does deleting C:\\Windows\\Installer free up space?",
          answer:
            "It does, but you should never do it. Windows uses the .msi and .msp files in that folder whenever you uninstall or repair an MSI-based program. Once deleted, applications such as Microsoft Office can neither be uninstalled nor repaired, and in many cases a clean reinstall of Windows is the only remaining fix.",
        },
        {
          question: "Can pagefile.sys be deleted?",
          answer:
            "No — Windows recreates it immediately. If you need the space, set a custom size under Advanced system settings > Performance > Advanced > Virtual memory. Turning the page file off completely causes application crashes on systems with 8 GB of RAM or less and removes kernel crash dumps, which makes diagnosing future problems significantly harder.",
        },
        {
          question: "How do I get rid of hiberfil.sys?",
          answer:
            "Run powercfg /hibernate off in an administrator command prompt. The file is removed automatically, freeing roughly 40% of your installed RAM in disk space. In exchange, hibernation is disabled along with Windows Fast Startup, which can add a few seconds to boot time.",
        },
        {
          question: "Does deleting the Prefetch folder speed up my PC?",
          answer:
            "No, it does the opposite. Prefetch stores data that helps your frequently used applications launch faster, and it rarely exceeds a few hundred megabytes. Deleting it reclaims a negligible amount of space and makes applications open slightly slower for several days while Windows rebuilds the data.",
        },
      ],
      verdict: [
        "The safe path to free space in Windows is well defined: temporary files, caches, Windows.old and upgrade leftovers can be removed freely; pagefile.sys and hiberfil.sys are disabled through Windows settings rather than deleted; and WinSxS, Installer, System32, the driver store and System Volume Information should never be touched by hand.",
        "A reliable rule of thumb: if deleting a folder in File Explorer requires administrator rights or taking ownership, that folder was probably not designed for you to delete. Use the tool Windows provides for that area instead — Storage settings, DISM, powercfg or the System Protection screen.",
        "The biggest wins are usually not in these contested system folders at all, but in overlooked user data: forgotten downloads, duplicate photos, old game installs and leftovers from uninstalled programs. Measure first, then delete.",
      ],
      ctaText: "Stop Guessing What Is Safe to Delete",
    },
    de: {
      title: "Ist es sicher, diese Windows-Dateien zu löschen? Datei für Datei erklärt",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution und der Installer-Ordner: Was können Sie gefahrlos löschen und was zerstört Ihr System? Ein klares Urteil zu jeder Datei.",
      subtitle: "Die Listen: gefahrlos, bedingt und niemals anfassen",
      intro: [
        "Kurze Antwort: Temporäre Dateien, Windows.old, Prefetch, der Miniaturansichten-Cache und der SoftwareDistribution-Download-Ordner können gefahrlos gelöscht werden. pagefile.sys und hiberfil.sys sollten nicht gelöscht, sondern über die Windows-Einstellungen deaktiviert werden. WinSxS, C:\\Windows\\Installer, System32 und System Volume Information dürfen niemals von Hand angefasst werden — sie zu löschen zerstört dauerhaft die Deinstallation von Programmen, Windows-Updates und die Systemwiederherstellung.",
        "Das Internet ist voll von Ratschlägen der Sorte \"lösche diesen Ordner und gewinne 20 GB\". Ein Teil davon stimmt, ein anderer Teil hinterlässt Schäden, die erst Jahre später auffallen — wenn ein Update sich nicht mehr installieren lässt oder ein Programm sich nicht deinstallieren lässt. Dieser Ratgeber sortiert die Speicherfresser in Windows in drei klare Kategorien: gefahrlos, bedingt und niemals. Zu jedem Eintrag erfahren Sie, worum es sich handelt, wie viel Platz er üblicherweise belegt und was Sie durch das Löschen verlieren.",
      ],
      keyTakeaways: [
        "Temporäre Dateien (%TEMP% und C:\\Windows\\Temp) können immer gefahrlos gelöscht werden; Windows überspringt automatisch jede gerade verwendete Datei.",
        "Windows.old kann gelöscht werden, aber Sie verlieren die Möglichkeit, zur vorherigen Windows-Version zurückzukehren. Nach 10 Tagen wird der Ordner ohnehin automatisch entfernt.",
        "Löschen Sie niemals etwas von Hand aus WinSxS. Die angezeigte Größe ist irreführend, weil die meisten Dateien darin Hardlinks sind; die einzig sichere Bereinigung ist DISM /StartComponentCleanup.",
        "C:\\Windows\\Installer zu löschen ist der häufigste und zerstörerischste Ratschlag im Netz: Er zerstört dauerhaft Deinstallation und Reparatur aller MSI-basierten Programme.",
        "pagefile.sys und hiberfil.sys werden nicht gelöscht, sondern deaktiviert — über die Einstellungen für virtuellen Arbeitsspeicher beziehungsweise den Befehl powercfg /hibernate off.",
        "Der Prefetch-Ordner kann gelöscht werden, sollte es aber nicht: Programme starten einige Tage lang langsamer, bis Windows die Daten neu aufgebaut hat, und der gewonnene Platz ist vernachlässigbar.",
      ],
      sections: [
        {
          title: "Gefahrlos löschbar: temporäre Dateien und Caches",
          content: [
            "Die Ordner für temporäre Dateien sind der mit Abstand größte Bereich, den Sie in Windows ohne Risiko leeren können. Der Benutzerordner %TEMP% (meist C:\\Users\\IhrName\\AppData\\Local\\Temp) und der Systemordner C:\\Windows\\Temp füllen sich mit Installationsresten, abgebrochenen Downloads und Arbeitsdateien von Programmen. Auf einem nie bereinigten Rechner belegen diese beiden Ordner zusammen häufig 5 bis 20 GB.",
            "Das Löschen ist risikofrei, weil Windows jede gerade verwendete Datei sperrt und das Entfernen verweigert, selbst wenn Sie alles auswählen. Hält ein laufendes Programm eine temporäre Datei fest, wird sie einfach übersprungen — ohne Fehlermeldung und ohne Schaden.",
            "Zur selben Kategorie gehören der Miniaturansichten-Cache (thumbcache_*.db), Windows-Update-Protokolle, Speicherabbilddateien (.dmp) und Übermittlungsoptimierungs-Dateien. Alle werden bei Bedarf neu erzeugt. Der Cache Cleaner von Disk Mop listet rund zwanzig dieser Kategorien auf einem Bildschirm auf und zeigt vor dem Löschen, wie viel Platz jede einzelne belegt.",
          ],
        },
        {
          title: "Gefahrlos löschbar: Windows.old und Upgrade-Reste",
          content: [
            "Windows.old entsteht nach einem großen Windows-Versionsupgrade und enthält Ihre komplette vorherige Installation. Der Ordner ist typischerweise 15 bis 30 GB groß und hat nur einen Zweck: Er erlaubt die Rückkehr zur alten Version innerhalb der ersten 10 Tage nach dem Upgrade.",
            "Das Löschen ist sicher; Sie geben ausschließlich diese Rückkehrmöglichkeit auf. Windows entfernt den Ordner nach 10 Tagen ohnehin selbst. Läuft die neue Version einwandfrei, holen Sie sich den Platz sofort zurück über Einstellungen > System > Speicher > Temporäre Dateien, indem Sie \"Vorherige Windows-Installationen\" ankreuzen.",
            "Daneben finden sich häufig die versteckten Ordner $WINDOWS.~BT und $WINDOWS.~WS. Das sind Arbeitsdateien des Upgrade-Vorgangs, die über denselben Bildschirm entfernt werden. Ein manueller Löschversuch im Explorer erzeugt nur Berechtigungsfehler — der richtige Weg ist immer das eingebaute Bereinigungswerkzeug.",
          ],
        },
        {
          title: "Bedingt: pagefile.sys, hiberfil.sys und Prefetch",
          content: [
            "pagefile.sys ist die Auslagerungsdatei, ihre Größe richtet sich nach Ihrem Arbeitsspeicher; auf einem Rechner mit 16 GB RAM belegt sie typischerweise mehrere Gigabyte. Löschen lässt sie sich nicht — Windows legt sie sofort neu an. Wenn Sie sie verkleinern wollen, setzen Sie unter Erweiterte Systemeinstellungen > Leistung > Erweitert > Virtueller Arbeitsspeicher eine benutzerdefinierte Größe. Ein vollständiges Abschalten führt auf Systemen mit wenig RAM zu Programmabstürzen und beseitigt die Kernel-Absturzabbilder, was spätere Fehlersuche erheblich erschwert.",
            "hiberfil.sys gehört zum Ruhezustand und belegt rund 40 % Ihres installierten Arbeitsspeichers. Der richtige Weg zum Entfernen ist der Befehl powercfg /hibernate off in einer Eingabeaufforderung als Administrator; er löscht die Datei selbstständig. Der Preis: Der Ruhezustand wird deaktiviert und damit auch der Windows-Schnellstart, was den Startvorgang um einige Sekunden verlängern kann.",
            "Der Prefetch-Ordner (C:\\Windows\\Prefetch) enthält kleine Dateien, die häufig genutzten Programmen zu einem schnelleren Start verhelfen, und überschreitet selten ein paar hundert Megabyte. Ihn zu löschen ist harmlos, aber sinnlos: Der gewonnene Platz ist vernachlässigbar, dafür starten Ihre Programme mehrere Tage lang etwas langsamer, während Windows die Daten neu sammelt.",
          ],
        },
        {
          title: "Niemals anfassen: WinSxS und C:\\Windows\\Installer",
          content: [
            "WinSxS, der Komponentenspeicher, enthält sämtliche Windows-Systemkomponenten und alle ersetzten Update-Versionen. Der Explorer meldet meist über 10 GB, doch diese Zahl ist irreführend: Die meisten Dateien darin sind Hardlinks auf Dateien, die an anderer Stelle in Windows liegen, dieselben Daten werden also doppelt gezählt. Der tatsächlich freigebbare Platz liegt in der Regel weit unter dem angezeigten Wert.",
            "Dateien aus diesem Ordner zu löschen beschädigt Windows irreparabel: Updates lassen sich nicht mehr installieren, die Systemdateiprüfung schlägt fehl und manche Funktionen lassen sich nicht mehr aktivieren. Die einzige korrekte Bereinigung ist DISM /Online /Cleanup-Image /StartComponentCleanup in einer Eingabeaufforderung als Administrator; dieser Befehl entfernt ausschließlich tatsächlich überflüssige Komponentenversionen.",
            "C:\\Windows\\Installer ist das Ziel des gefährlichsten Ratschlags im Internet überhaupt. Der Ordner ist versteckt, kann auf Dutzende Gigabyte anwachsen, und die enthaltenen .msi- und .msp-Dateien sehen nach Müll aus. Das sind sie nicht: Windows verwendet sie bei jeder Deinstallation und Reparatur eines MSI-basierten Programms. Nach dem Löschen lassen sich Anwendungen wie Microsoft Office weder entfernen noch reparieren, und oft bleibt nur eine Neuinstallation des Betriebssystems. Lassen Sie diesen Ordner in Ruhe.",
          ],
        },
        {
          title: "Niemals anfassen: System32, Treiberspeicher und Systemwiederherstellung",
          content: [
            "C:\\Windows\\System32 ist Windows selbst; Dateien daraus zu entfernen macht das System nicht mehr startfähig. Der alte Spruch \"lösche System32, dann wird dein PC schneller\" ist einer der ältesten Scherze des Internets — und es fallen bis heute Leute darauf herein.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository ist der Treiberspeicher und kann 5 bis 15 GB angesammelter Treiberpakete enthalten, darunter alte Versionen. Manuelles Löschen zerstört Treiberupdates und die Hardware-Wiederherstellung. Wenn Sie den Platz wirklich brauchen, ist das richtige Werkzeug pnputil /enum-drivers, um die Pakete aufzulisten und gezielt nur veraltete zu entfernen.",
            "System Volume Information enthält die Wiederherstellungspunkte und Schattenkopien, und der Zugriff darauf ist bewusst eingeschränkt. Um Platz zu gewinnen, verringern Sie unter Systemsteuerung > System > Computerschutz den für Wiederherstellungspunkte reservierten Anteil oder löschen dort alte Punkte. Sich gewaltsam Zugriff auf den Ordner zu verschaffen, macht die Systemwiederherstellung funktionsunfähig.",
          ],
        },
        {
          title: "Erst messen, dann löschen",
          content: [
            "Die wichtigste Lehre aus dieser Liste: Der tatsächlich gewonnene Platz weicht meist deutlich von der Erwartung ab. WinSxS meldet vielleicht 12 GB und gibt 2 GB frei, während ein Spiele-Cache, an den Sie nie denken, 40 GB belegt. Die richtige Reihenfolge ist immer erst messen, dann löschen.",
            "Die Datenträgeranalyse von Disk Mop durchsucht Ihr Laufwerk und stellt Ordner als visuelle Treemap dar, deren Flächen ihrer tatsächlichen Größe entsprechen — der wirklich aufgeblähte Ordner ist auf einen Blick erkennbar. Der Systemdateischutz setzt die Niemals-anfassen-Liste aus diesem Ratgeber im Code durch: Kritische Pfade wie System32, WinSxS und Installer stehen auf einer geschützten Liste, werden gesondert markiert, falls sie je in einem Löschvorgang auftauchen, und niemals ohne ausdrückliche Bestätigung entfernt.",
            "Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Ist es sicher, den Ordner Windows.old zu löschen?",
          answer:
            "Ja. Windows.old existiert nur, damit Sie innerhalb von 10 Tagen nach einem Upgrade zur vorherigen Windows-Version zurückkehren können. Beim Löschen verlieren Sie ausschließlich diese Rückkehrmöglichkeit, und Windows entfernt den Ordner nach 10 Tagen ohnehin automatisch. Nutzen Sie Einstellungen > System > Speicher > Temporäre Dateien und kreuzen Sie \"Vorherige Windows-Installationen\" an, statt im Explorer zu löschen.",
        },
        {
          question: "Kann ich den WinSxS-Ordner löschen?",
          answer:
            "Nein. Dateien von Hand aus WinSxS zu löschen zerstört dauerhaft Windows-Updates und die Reparatur von Systemdateien. Die im Explorer angezeigte Ordnergröße ist zudem irreführend, weil die meisten Dateien darin Hardlinks sind und doppelt gezählt werden. Die einzige sichere Bereinigung ist DISM /Online /Cleanup-Image /StartComponentCleanup in einer Eingabeaufforderung als Administrator.",
        },
        {
          question: "Bringt das Löschen von C:\\Windows\\Installer Speicherplatz?",
          answer:
            "Ja, aber tun Sie es niemals. Windows verwendet die .msi- und .msp-Dateien in diesem Ordner bei jeder Deinstallation und Reparatur eines MSI-basierten Programms. Nach dem Löschen lassen sich Anwendungen wie Microsoft Office weder deinstallieren noch reparieren, und in vielen Fällen bleibt nur eine Neuinstallation von Windows.",
        },
        {
          question: "Kann pagefile.sys gelöscht werden?",
          answer:
            "Nein — Windows legt die Datei sofort neu an. Wenn Sie Platz brauchen, setzen Sie unter Erweiterte Systemeinstellungen > Leistung > Erweitert > Virtueller Arbeitsspeicher eine benutzerdefinierte Größe. Die Auslagerungsdatei komplett abzuschalten führt auf Systemen mit 8 GB RAM oder weniger zu Programmabstürzen und entfernt die Kernel-Absturzabbilder, was die spätere Fehlersuche deutlich erschwert.",
        },
        {
          question: "Wie werde ich hiberfil.sys los?",
          answer:
            "Führen Sie powercfg /hibernate off in einer Eingabeaufforderung als Administrator aus. Die Datei wird automatisch entfernt und gibt rund 40 % Ihres installierten Arbeitsspeichers als Speicherplatz frei. Im Gegenzug werden der Ruhezustand und der Windows-Schnellstart deaktiviert, was den Startvorgang um einige Sekunden verlängern kann.",
        },
        {
          question: "Macht das Löschen des Prefetch-Ordners den PC schneller?",
          answer:
            "Nein, im Gegenteil. Prefetch speichert Daten, die häufig genutzten Programmen zu einem schnelleren Start verhelfen, und belegt selten mehr als ein paar hundert Megabyte. Das Löschen bringt vernachlässigbar wenig Platz und lässt Programme mehrere Tage lang etwas langsamer starten, während Windows die Daten neu aufbaut.",
        },
      ],
      verdict: [
        "Der sichere Weg zu freiem Speicher unter Windows ist klar umrissen: Temporäre Dateien, Caches, Windows.old und Upgrade-Reste dürfen bedenkenlos entfernt werden; pagefile.sys und hiberfil.sys werden über die Windows-Einstellungen deaktiviert statt gelöscht; WinSxS, Installer, System32, der Treiberspeicher und System Volume Information bleiben unangetastet.",
        "Eine verlässliche Faustregel: Wenn das Löschen eines Ordners im Explorer Administratorrechte oder eine Besitzübernahme erfordert, war dieser Ordner vermutlich nicht zum Löschen durch Sie gedacht. Nutzen Sie stattdessen das Werkzeug, das Windows für diesen Bereich vorsieht — Speichereinstellungen, DISM, powercfg oder den Computerschutz.",
        "Die größten Gewinne liegen ohnehin selten in diesen umstrittenen Systemordnern, sondern in übersehenen eigenen Daten: vergessene Downloads, doppelte Fotos, alte Spielinstallationen und Reste deinstallierter Programme. Erst messen, dann löschen.",
      ],
      ctaText: "Hören Sie auf zu raten, was sicher löschbar ist",
    },
    fr: {
      title: "Peut-on supprimer ces fichiers Windows sans risque ? La réponse fichier par fichier",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution et le dossier Installer : lesquels supprimer sans risque et lesquels cassent Windows ? Un verdict clair pour chacun.",
      subtitle: "Les listes : sans risque, sous conditions et à ne jamais toucher",
      intro: [
        "Réponse courte : les fichiers temporaires, Windows.old, Prefetch, le cache des miniatures et le dossier de téléchargement SoftwareDistribution peuvent être supprimés sans risque. pagefile.sys et hiberfil.sys ne se suppriment pas, ils se désactivent depuis les paramètres de Windows. WinSxS, C:\\Windows\\Installer, System32 et System Volume Information ne doivent jamais être touchés à la main — les supprimer casse définitivement la désinstallation des programmes, les mises à jour de Windows et la récupération du système.",
        "Internet regorge de conseils du type « supprimez ce dossier et récupérez 20 Go ». Une partie est exacte, l'autre laisse des dégâts qui n'apparaissent que des années plus tard, le jour où une mise à jour refuse de s'installer ou qu'un programme ne peut plus être désinstallé. Ce guide range les gros consommateurs d'espace de Windows en trois catégories nettes : sans risque, sous conditions et jamais. Pour chaque entrée, vous saurez de quoi il s'agit, combien de place elle occupe habituellement et ce que vous perdez exactement en la supprimant.",
      ],
      keyTakeaways: [
        "Les fichiers temporaires (%TEMP% et C:\\Windows\\Temp) peuvent toujours être supprimés sans risque : Windows ignore automatiquement tout fichier en cours d'utilisation.",
        "Windows.old peut être supprimé, mais vous perdez la possibilité de revenir à la version précédente de Windows. De toute façon, le dossier disparaît tout seul au bout de 10 jours.",
        "Ne supprimez jamais quoi que ce soit dans WinSxS à la main. La taille affichée est trompeuse, car la plupart des fichiers qu'il contient sont des liens physiques ; le seul nettoyage sûr est DISM /StartComponentCleanup.",
        "Supprimer C:\\Windows\\Installer est le conseil le plus répandu et le plus destructeur du web : il casse définitivement la désinstallation et la réparation de tous les programmes basés sur MSI.",
        "pagefile.sys et hiberfil.sys ne se suppriment pas, ils se désactivent — respectivement dans les paramètres de mémoire virtuelle et avec la commande powercfg /hibernate off.",
        "Le dossier Prefetch peut être supprimé mais ne devrait pas l'être : les applications démarrent un peu plus lentement pendant quelques jours, le temps que Windows reconstruise les données, et l'espace gagné est négligeable.",
      ],
      sections: [
        {
          title: "Suppression sans risque : fichiers temporaires et caches",
          content: [
            "Les dossiers de fichiers temporaires constituent de loin la plus grande zone que vous pouvez vider dans Windows sans aucun risque. Le dossier temporaire de l'utilisateur %TEMP% (en général C:\\Users\\VotreNom\\AppData\\Local\\Temp) et le dossier temporaire système C:\\Windows\\Temp se remplissent de restes d'installation, de téléchargements abandonnés et de fichiers de travail des programmes. Sur une machine jamais nettoyée, ces deux dossiers réunis contiennent couramment entre 5 et 20 Go.",
            "Les supprimer ne présente aucun danger, car Windows verrouille tout fichier en cours d'utilisation et refuse de l'effacer, même si vous sélectionnez tout. Si un programme en cours d'exécution retient un fichier temporaire, ce fichier est simplement ignoré — sans erreur ni dommage.",
            "La même catégorie englobe le cache des miniatures (thumbcache_*.db), les journaux de Windows Update, les fichiers de vidage mémoire (.dmp) et les fichiers d'optimisation de la distribution. Tous sont régénérés à la demande. Le nettoyeur de cache (Cache Cleaner) de Disk Mop réunit une vingtaine de ces catégories sur un seul écran et indique combien chacune occupe avant que vous ne supprimiez quoi que ce soit.",
          ],
        },
        {
          title: "Suppression sans risque : Windows.old et restes de mise à niveau",
          content: [
            "Windows.old est créé après une mise à niveau majeure de Windows et contient l'intégralité de votre installation précédente. Il pèse généralement 15 à 30 Go et n'a qu'un seul rôle : vous permettre de revenir à l'ancienne version dans les 10 jours qui suivent la mise à niveau.",
            "Le supprimer est sans danger ; la seule chose que vous abandonnez est cette possibilité de retour en arrière. Windows efface de toute façon le dossier tout seul au bout de 10 jours. Si la nouvelle version fonctionne bien, récupérez l'espace immédiatement via Paramètres > Système > Stockage > Fichiers temporaires en cochant « Installations précédentes de Windows ».",
            "Vous trouverez souvent à côté les dossiers masqués $WINDOWS.~BT et $WINDOWS.~WS. Ce sont des fichiers de travail du processus de mise à niveau, qui se nettoient depuis le même écran. Tenter de les supprimer à la main dans l'Explorateur de fichiers ne produit que des erreurs d'autorisation — l'outil de nettoyage intégré est toujours la bonne voie.",
          ],
        },
        {
          title: "Sous conditions : pagefile.sys, hiberfil.sys et Prefetch",
          content: [
            "pagefile.sys est le fichier d'échange de la mémoire virtuelle et sa taille suit celle de votre RAM ; sur une machine de 16 Go, il occupe généralement plusieurs gigaoctets. Vous ne pouvez pas le supprimer — Windows le recrée immédiatement. Pour le réduire, définissez une taille personnalisée dans Paramètres système avancés > Performances > Avancé > Mémoire virtuelle. Le désactiver complètement provoque des plantages d'applications sur les systèmes peu dotés en RAM et supprime les vidages mémoire du noyau, ce qui complique nettement tout diagnostic ultérieur.",
            "hiberfil.sys sert à la mise en veille prolongée et occupe environ 40 % de la RAM installée. La bonne façon de le supprimer est la commande powercfg /hibernate off dans une invite de commandes en tant qu'administrateur, qui efface le fichier à votre place. Le prix à payer : la veille prolongée est désactivée, tout comme le démarrage rapide de Windows, ce qui peut allonger le démarrage de quelques secondes.",
            "Le dossier Prefetch (C:\\Windows\\Prefetch) contient de petits fichiers qui accélèrent le lancement des applications les plus utilisées et dépasse rarement quelques centaines de mégaoctets. Le supprimer est inoffensif mais inutile : l'espace récupéré est négligeable et, en échange, vos applications s'ouvrent un peu plus lentement pendant plusieurs jours, le temps que Windows reconstitue les données. C'est possible, mais il n'y a aucune raison de le faire.",
          ],
        },
        {
          title: "À ne jamais toucher : WinSxS et C:\\Windows\\Installer",
          content: [
            "WinSxS, le magasin de composants, contient tous les composants système de Windows ainsi que toutes les versions de mises à jour remplacées. L'Explorateur de fichiers annonce souvent plus de 10 Go, mais ce chiffre est trompeur : la plupart des fichiers qu'il renferme sont des liens physiques vers des fichiers situés ailleurs dans Windows, si bien que les mêmes données sont comptées deux fois. L'espace réellement récupérable est en général très inférieur au nombre affiché.",
            "Supprimer des fichiers de ce dossier casse Windows de façon irréparable : les mises à jour ne s'installent plus, la vérification des fichiers système échoue et certaines fonctionnalités ne peuvent plus être activées. Le seul nettoyage correct est DISM /Online /Cleanup-Image /StartComponentCleanup dans une invite de commandes en tant qu'administrateur, qui ne retire que les versions de composants réellement obsolètes.",
            "C:\\Windows\\Installer est la cible du conseil le plus dangereux d'Internet. Le dossier est masqué, il peut atteindre plusieurs dizaines de gigaoctets, et les fichiers .msi et .msp qu'il contient ressemblent à des déchets. Ils n'en sont pas : Windows s'en sert à chaque désinstallation ou réparation d'un programme basé sur MSI. Une fois supprimés, des applications comme Microsoft Office ne peuvent plus être ni désinstallées ni réparées, et une réinstallation propre du système est souvent la seule issue. Laissez ce dossier tranquille.",
          ],
        },
        {
          title: "À ne jamais toucher : System32, le magasin de pilotes et la restauration du système",
          content: [
            "C:\\Windows\\System32, c'est Windows lui-même ; en retirer des fichiers rend le système impossible à démarrer. La vieille blague « supprimez System32 pour accélérer votre PC » est l'un des plus anciens canulars du web, et des gens tombent encore dans le panneau.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository est le magasin de pilotes ; il peut accumuler 5 à 15 Go de paquets de pilotes, anciennes versions comprises. Y supprimer des fichiers à la main casse les mises à jour de pilotes et la récupération du matériel. Si vous avez vraiment besoin de cet espace, le bon outil est pnputil /enum-drivers, qui liste les paquets et permet de ne retirer que ceux qui sont obsolètes.",
            "System Volume Information contient les points de restauration système et les clichés instantanés, et l'accès y est délibérément restreint. Pour libérer de l'espace, réduisez le pourcentage de disque réservé aux points de restauration, ou supprimez les anciens points, dans Panneau de configuration > Système > Protection du système. Forcer l'accès au dossier pour y effacer des fichiers laisse la récupération du système hors service.",
          ],
        },
        {
          title: "Mesurez avant de supprimer",
          content: [
            "La leçon la plus utile de cette liste, c'est que l'espace récupéré n'a souvent rien à voir avec celui que vous imaginiez. WinSxS peut annoncer 12 Go et n'en libérer que 2, pendant qu'un cache de jeu auquel vous ne pensez jamais occupe 40 Go. Le bon ordre est toujours : mesurer d'abord, supprimer ensuite.",
            "L'analyse de disque (Disk Analysis) de Disk Mop parcourt votre lecteur et dispose les dossiers en une treemap visuelle dont les surfaces reflètent ce qu'ils occupent réellement : le dossier vraiment obèse saute aux yeux. Sa protection des fichiers système (System File Protection) applique dans le code la liste « à ne jamais toucher » de ce guide : les chemins critiques comme System32, WinSxS et Installer figurent sur une liste protégée, sont signalés à part s'ils apparaissent dans une opération de suppression, et ne sont jamais effacés sans confirmation explicite.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Peut-on supprimer le dossier Windows.old sans risque ?",
          answer:
            "Oui. Windows.old n'existe que pour vous permettre de revenir à la version précédente de Windows dans les 10 jours suivant une mise à niveau. En le supprimant, vous perdez uniquement cette possibilité de retour en arrière, et Windows efface de toute façon le dossier automatiquement au bout de 10 jours. Passez par Paramètres > Système > Stockage > Fichiers temporaires et cochez « Installations précédentes de Windows » plutôt que de le supprimer dans l'Explorateur de fichiers.",
        },
        {
          question: "Puis-je supprimer le dossier WinSxS ?",
          answer:
            "Non. Supprimer des fichiers de WinSxS à la main casse définitivement les mises à jour de Windows et la réparation des fichiers système. La taille affichée dans l'Explorateur de fichiers est en outre trompeuse, car la plupart des fichiers qu'il contient sont des liens physiques comptés deux fois. Le seul nettoyage sûr consiste à exécuter DISM /Online /Cleanup-Image /StartComponentCleanup dans une invite de commandes en tant qu'administrateur.",
        },
        {
          question: "Supprimer C:\\Windows\\Installer libère-t-il de l'espace ?",
          answer:
            "Oui, mais il ne faut jamais le faire. Windows utilise les fichiers .msi et .msp de ce dossier à chaque désinstallation ou réparation d'un programme basé sur MSI. Une fois supprimés, des applications comme Microsoft Office ne peuvent plus être ni désinstallées ni réparées, et dans bien des cas une réinstallation propre de Windows reste la seule solution.",
        },
        {
          question: "Peut-on supprimer pagefile.sys ?",
          answer:
            "Non — Windows le recrée immédiatement. Si vous avez besoin de place, définissez une taille personnalisée dans Paramètres système avancés > Performances > Avancé > Mémoire virtuelle. Désactiver complètement le fichier d'échange provoque des plantages d'applications sur les systèmes disposant de 8 Go de RAM ou moins et supprime les vidages mémoire du noyau, ce qui rend le diagnostic des problèmes futurs nettement plus difficile.",
        },
        {
          question: "Comment supprimer hiberfil.sys ?",
          answer:
            "Exécutez powercfg /hibernate off dans une invite de commandes en tant qu'administrateur. Le fichier est supprimé automatiquement et libère environ 40 % de la RAM installée en espace disque. En contrepartie, la veille prolongée est désactivée, ainsi que le démarrage rapide de Windows, ce qui peut allonger le démarrage de quelques secondes.",
        },
        {
          question: "Supprimer le dossier Prefetch accélère-t-il le PC ?",
          answer:
            "Non, c'est l'inverse. Prefetch stocke des données qui accélèrent le lancement de vos applications les plus utilisées et dépasse rarement quelques centaines de mégaoctets. Le supprimer ne récupère qu'un espace négligeable et fait démarrer les applications un peu plus lentement pendant plusieurs jours, le temps que Windows reconstruise les données.",
        },
      ],
      verdict: [
        "La voie sûre pour libérer de l'espace sous Windows est bien balisée : fichiers temporaires, caches, Windows.old et restes de mise à niveau peuvent être supprimés librement ; pagefile.sys et hiberfil.sys se désactivent depuis les paramètres de Windows au lieu d'être effacés ; et WinSxS, Installer, System32, le magasin de pilotes et System Volume Information ne doivent jamais être touchés à la main.",
        "Une règle empirique fiable : si supprimer un dossier dans l'Explorateur de fichiers exige des droits d'administrateur ou une prise de propriété, c'est que ce dossier n'a probablement pas été conçu pour que vous le supprimiez. Utilisez plutôt l'outil que Windows prévoit pour cette zone — les paramètres de stockage, DISM, powercfg ou l'écran de protection du système.",
        "Les plus gros gains ne se trouvent d'ailleurs presque jamais dans ces dossiers système controversés, mais dans des données personnelles oubliées : téléchargements laissés de côté, photos en double, vieilles installations de jeux et résidus de programmes désinstallés. Mesurez d'abord, supprimez ensuite.",
      ],
      ctaText: "Arrêtez de deviner ce qui peut être supprimé sans risque",
    },
    es: {
      title: "¿Es seguro borrar estos archivos de Windows? La respuesta archivo por archivo",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution y la carpeta Installer: cuáles puedes borrar sin riesgo y cuáles rompen Windows. Un veredicto claro para cada uno.",
      subtitle: "Las listas: seguro, con condiciones y nunca tocar",
      intro: [
        "Respuesta corta: los archivos temporales, Windows.old, Prefetch, la caché de miniaturas y la carpeta de descargas SoftwareDistribution se pueden borrar sin riesgo. pagefile.sys y hiberfil.sys no se borran, se desactivan desde la configuración de Windows. WinSxS, C:\\Windows\\Installer, System32 y System Volume Information no deben tocarse nunca a mano: borrarlos rompe de forma permanente la desinstalación de programas, las actualizaciones de Windows y la recuperación del sistema.",
        "Internet está lleno de consejos del tipo « borra esta carpeta y recupera 20 GB ». Una parte es correcta y otra deja daños que solo salen a la luz años después, el día en que una actualización se niega a instalarse o un programa no se deja desinstalar. Esta guía ordena lo que más espacio ocupa en Windows en tres categorías claras: seguro, con condiciones y nunca. De cada entrada verás qué es, cuánto espacio suele ocupar y qué pierdes exactamente al eliminarla.",
      ],
      keyTakeaways: [
        "Los archivos temporales (%TEMP% y C:\\Windows\\Temp) siempre se pueden borrar sin riesgo: Windows omite automáticamente cualquier archivo que esté en uso.",
        "Windows.old se puede borrar, pero pierdes la opción de volver a la versión anterior de Windows. De todos modos, la carpeta desaparece sola a los 10 días.",
        "Nunca borres nada de WinSxS a mano. El tamaño que muestra es engañoso, porque la mayoría de los archivos que contiene son enlaces duros; la única limpieza segura es DISM /StartComponentCleanup.",
        "Borrar C:\\Windows\\Installer es el consejo más repetido y más destructivo de internet: rompe de forma permanente la desinstalación y la reparación de todos los programas basados en MSI.",
        "pagefile.sys y hiberfil.sys no se borran, se desactivan: el primero desde la configuración de memoria virtual y el segundo con el comando powercfg /hibernate off.",
        "La carpeta Prefetch se puede borrar, pero no conviene: las aplicaciones tardan un poco más en abrirse durante unos días, hasta que Windows reconstruye los datos, y el espacio que ganas es insignificante.",
      ],
      sections: [
        {
          title: "Seguro de borrar: archivos temporales y cachés",
          content: [
            "Las carpetas de archivos temporales son, con diferencia, la mayor zona que puedes vaciar en Windows sin ningún riesgo. La carpeta temporal del usuario %TEMP% (normalmente C:\\Users\\TuNombre\\AppData\\Local\\Temp) y la temporal del sistema C:\\Windows\\Temp se llenan de restos de instaladores, descargas abandonadas y archivos de trabajo de los programas. En un equipo que nunca se ha limpiado, entre las dos suelen acumular entre 5 y 20 GB.",
            "Borrarlas no entraña riesgo porque Windows bloquea cualquier archivo que esté en uso y se niega a eliminarlo, aunque lo selecciones todo. Si un programa en ejecución retiene un archivo temporal, ese archivo simplemente se omite: ni error ni daño.",
            "A la misma categoría pertenecen la caché de miniaturas (thumbcache_*.db), los registros de Windows Update, los archivos de volcado de memoria (.dmp) y los archivos de optimización de distribución. Todos se regeneran cuando hacen falta. El limpiador de caché (Cache Cleaner) de Disk Mop reúne unas veinte de estas categorías en una sola pantalla y muestra cuánto ocupa cada una antes de que borres nada.",
          ],
        },
        {
          title: "Seguro de borrar: Windows.old y restos de la actualización",
          content: [
            "Windows.old se crea después de actualizar a una versión mayor de Windows y contiene toda tu instalación anterior. Suele ocupar entre 15 y 30 GB y tiene una única función: permitirte volver a la versión antigua durante los 10 primeros días tras la actualización.",
            "Borrarla es seguro; a lo único que renuncias es a esa vuelta atrás. Windows elimina la carpeta por su cuenta a los 10 días de todas formas. Si la versión nueva funciona bien, recupera el espacio ya mismo desde Configuración > Sistema > Almacenamiento > Archivos temporales marcando « Instalaciones anteriores de Windows ».",
            "A su lado aparecen a menudo las carpetas ocultas $WINDOWS.~BT y $WINDOWS.~WS. Son archivos de trabajo del proceso de actualización y se limpian desde esa misma pantalla. Intentar borrarlas a mano en el Explorador de archivos solo produce errores de permisos: la herramienta de limpieza integrada es siempre el camino correcto.",
          ],
        },
        {
          title: "Con condiciones: pagefile.sys, hiberfil.sys y Prefetch",
          content: [
            "pagefile.sys es el archivo de paginación de la memoria virtual y su tamaño va ligado a la RAM; en un equipo de 16 GB suele ocupar varios gigabytes. No puedes borrarlo: Windows lo vuelve a crear al instante. Si quieres reducirlo, define un tamaño personalizado en Configuración avanzada del sistema > Rendimiento > Opciones avanzadas > Memoria virtual. Desactivarlo del todo provoca cierres inesperados de aplicaciones en equipos con poca RAM y elimina los volcados de memoria del kernel, lo que dificulta mucho cualquier diagnóstico posterior.",
            "hiberfil.sys sostiene la función de hibernación y ocupa alrededor del 40 % de la RAM instalada. La forma correcta de eliminarlo es ejecutar powercfg /hibernate off en un símbolo del sistema como administrador, que borra el archivo por ti. El precio: se desactiva la hibernación y, con ella, el inicio rápido de Windows, lo que puede añadir unos segundos al arranque.",
            "La carpeta Prefetch (C:\\Windows\\Prefetch) guarda archivos pequeños que ayudan a que las aplicaciones más usadas se abran antes y rara vez pasa de unos cientos de megabytes. Borrarla es inofensivo pero inútil: el espacio que recuperas es insignificante y, a cambio, tus aplicaciones tardan un poco más en abrirse durante varios días mientras Windows rehace los datos. Se puede hacer, pero no hay ninguna razón para hacerlo.",
          ],
        },
        {
          title: "Nunca tocar: WinSxS y C:\\Windows\\Installer",
          content: [
            "WinSxS, el almacén de componentes, guarda todos los componentes del sistema de Windows y todas las versiones de actualizaciones sustituidas. El Explorador de archivos suele indicar más de 10 GB, pero esa cifra engaña: la mayoría de los archivos que contiene son enlaces duros a archivos que viven en otro punto de Windows, así que los mismos datos se cuentan dos veces. El espacio realmente recuperable suele ser mucho menor que el número que ves.",
            "Borrar archivos de esta carpeta rompe Windows de una forma que no tiene arreglo: las actualizaciones dejan de instalarse, la comprobación de archivos de sistema falla y algunas funciones ya no se pueden activar. La única limpieza correcta es DISM /Online /Cleanup-Image /StartComponentCleanup en un símbolo del sistema como administrador, que retira solo las versiones de componentes realmente sustituidas.",
            "C:\\Windows\\Installer es el blanco del consejo más peligroso que circula por internet. La carpeta está oculta, puede crecer hasta decenas de gigabytes y los archivos .msi y .msp que contiene parecen basura. No lo son: Windows los usa cada vez que desinstalas o reparas un programa basado en MSI. Si los borras, aplicaciones como Microsoft Office ya no se pueden desinstalar ni reparar, y muchas veces la única salida es reinstalar el sistema desde cero. Deja esta carpeta en paz.",
          ],
        },
        {
          title: "Nunca tocar: System32, el almacén de controladores y Restaurar sistema",
          content: [
            "C:\\Windows\\System32 es Windows en sí; quitarle archivos deja el sistema sin poder arrancar. Aquello de « borra System32 para acelerar tu PC » es una de las bromas más antiguas de internet, y todavía hay quien pica.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository es el almacén de controladores y puede acumular entre 5 y 15 GB de paquetes, versiones antiguas incluidas. Borrar ahí a mano rompe las actualizaciones de controladores y la recuperación del hardware. Si de verdad necesitas ese espacio, la herramienta correcta es pnputil /enum-drivers, que lista los paquetes y permite quitar solo los obsoletos.",
            "System Volume Information contiene los puntos de restauración del sistema y las instantáneas de volumen, y su acceso está restringido a propósito. Para liberar espacio, reduce el porcentaje de disco reservado a los puntos de restauración, o borra los puntos antiguos, en Panel de control > Sistema > Protección del sistema. Forzar la entrada en la carpeta para borrar archivos deja la recuperación del sistema inservible.",
          ],
        },
        {
          title: "Mide antes de borrar",
          content: [
            "La lección más útil de esta lista es que el espacio que recuperas casi nunca coincide con el que esperabas. WinSxS puede indicar 12 GB y liberar 2, mientras que una caché de juegos en la que nunca piensas está ocupando 40 GB. El orden correcto siempre es medir primero y borrar después.",
            "El análisis de disco (Disk Analysis) de Disk Mop escanea tu unidad y distribuye las carpetas en un treemap visual cuyas áreas reflejan lo que ocupan de verdad, así que la carpeta realmente hinchada salta a la vista. Su protección de archivos del sistema (System File Protection) aplica en el código la lista de « nunca tocar » de esta guía: rutas críticas como System32, WinSxS e Installer están en una lista protegida, se marcan aparte si alguna vez aparecen en una operación de borrado y nunca se eliminan sin una confirmación explícita.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Es seguro borrar la carpeta Windows.old?",
          answer:
            "Sí. Windows.old solo existe para que puedas volver a la versión anterior de Windows durante los 10 días siguientes a una actualización. Al borrarla pierdes únicamente esa vuelta atrás, y Windows elimina la carpeta automáticamente a los 10 días de todos modos. Usa Configuración > Sistema > Almacenamiento > Archivos temporales y marca « Instalaciones anteriores de Windows » en lugar de borrarla desde el Explorador de archivos.",
        },
        {
          question: "¿Puedo borrar la carpeta WinSxS?",
          answer:
            "No. Borrar archivos de WinSxS a mano rompe de forma permanente las actualizaciones de Windows y la reparación de archivos del sistema. Además, el tamaño que muestra el Explorador de archivos engaña, porque la mayoría de los archivos que contiene son enlaces duros y se cuentan dos veces. La única limpieza segura es ejecutar DISM /Online /Cleanup-Image /StartComponentCleanup en un símbolo del sistema como administrador.",
        },
        {
          question: "¿Borrar C:\\Windows\\Installer libera espacio?",
          answer:
            "Sí, pero nunca deberías hacerlo. Windows usa los archivos .msi y .msp de esa carpeta cada vez que desinstalas o reparas un programa basado en MSI. Una vez borrados, aplicaciones como Microsoft Office ya no se pueden desinstalar ni reparar, y en muchos casos la única solución que queda es reinstalar Windows desde cero.",
        },
        {
          question: "¿Se puede borrar pagefile.sys?",
          answer:
            "No, Windows lo vuelve a crear al instante. Si necesitas el espacio, define un tamaño personalizado en Configuración avanzada del sistema > Rendimiento > Opciones avanzadas > Memoria virtual. Desactivar el archivo de paginación por completo provoca cierres inesperados de aplicaciones en equipos con 8 GB de RAM o menos y elimina los volcados de memoria del kernel, lo que complica bastante diagnosticar problemas futuros.",
        },
        {
          question: "¿Cómo elimino hiberfil.sys?",
          answer:
            "Ejecuta powercfg /hibernate off en un símbolo del sistema como administrador. El archivo se borra solo y libera en disco alrededor del 40 % de la RAM instalada. A cambio se desactiva la hibernación junto con el inicio rápido de Windows, lo que puede añadir unos segundos al arranque.",
        },
        {
          question: "¿Borrar la carpeta Prefetch acelera el PC?",
          answer:
            "No, hace lo contrario. Prefetch guarda datos que ayudan a que tus aplicaciones más usadas se abran antes y rara vez pasa de unos cientos de megabytes. Borrarla recupera una cantidad insignificante de espacio y hace que las aplicaciones tarden un poco más en abrirse durante varios días mientras Windows reconstruye los datos.",
        },
      ],
      verdict: [
        "El camino seguro para liberar espacio en Windows está bien delimitado: archivos temporales, cachés, Windows.old y restos de actualización se pueden eliminar sin reparos; pagefile.sys y hiberfil.sys se desactivan desde la configuración de Windows en lugar de borrarse; y WinSxS, Installer, System32, el almacén de controladores y System Volume Information no se tocan nunca a mano.",
        "Una regla práctica fiable: si borrar una carpeta en el Explorador de archivos exige permisos de administrador o tomar posesión, esa carpeta probablemente no estaba pensada para que la borres tú. Usa en su lugar la herramienta que Windows ofrece para esa zona: la configuración de almacenamiento, DISM, powercfg o la pantalla de protección del sistema.",
        "Además, las mayores ganancias casi nunca están en estas carpetas de sistema en disputa, sino en datos propios olvidados: descargas que nadie recuerda, fotos duplicadas, instalaciones de juegos antiguos y restos de programas desinstalados. Mide primero y borra después.",
      ],
      ctaText: "Deja de adivinar qué se puede borrar sin riesgo",
    },
    it: {
      title: "È sicuro eliminare questi file di Windows? La risposta file per file",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution e la cartella Installer: quali si possono eliminare senza rischi e quali rompono Windows. Un verdetto chiaro per ciascuno.",
      subtitle: "Le liste: sicuro, con riserva e da non toccare mai",
      intro: [
        "Risposta breve: i file temporanei, Windows.old, Prefetch, la cache delle miniature e la cartella di download SoftwareDistribution si possono eliminare senza rischi. pagefile.sys e hiberfil.sys non si eliminano, si disattivano dalle impostazioni di Windows. WinSxS, C:\\Windows\\Installer, System32 e System Volume Information non vanno mai toccati a mano: eliminarli compromette in modo permanente la disinstallazione dei programmi, gli aggiornamenti di Windows e il ripristino del sistema.",
        "Internet è pieno di consigli del tipo « elimina questa cartella e recuperi 20 GB ». Una parte è corretta, un'altra lascia danni che emergono solo anni dopo, il giorno in cui un aggiornamento si rifiuta di installarsi o un programma non si lascia disinstallare. Questa guida divide i divoratori di spazio di Windows in tre categorie nette: sicuro, con riserva e mai. Per ogni voce trovi che cos'è, quanto spazio occupa di solito e che cosa perdi esattamente eliminandola.",
      ],
      keyTakeaways: [
        "I file temporanei (%TEMP% e C:\\Windows\\Temp) si possono sempre eliminare senza rischi: Windows salta automaticamente qualsiasi file in uso.",
        "Windows.old si può eliminare, ma perdi la possibilità di tornare alla versione precedente di Windows. Del resto la cartella sparisce da sola dopo 10 giorni.",
        "Non eliminare mai nulla da WinSxS a mano. La dimensione mostrata è ingannevole, perché la maggior parte dei file al suo interno sono collegamenti reali; l'unica pulizia sicura è DISM /StartComponentCleanup.",
        "Eliminare C:\\Windows\\Installer è il consiglio più diffuso e più distruttivo della rete: compromette in modo permanente disinstallazione e riparazione di tutti i programmi basati su MSI.",
        "pagefile.sys e hiberfil.sys non si eliminano, si disattivano: il primo dalle impostazioni della memoria virtuale, il secondo con il comando powercfg /hibernate off.",
        "La cartella Prefetch si può eliminare ma è meglio di no: per qualche giorno le applicazioni si avviano un po' più lentamente, finché Windows non ricostruisce i dati, e lo spazio guadagnato è trascurabile.",
      ],
      sections: [
        {
          title: "Sicuro da eliminare: file temporanei e cache",
          content: [
            "Le cartelle dei file temporanei sono di gran lunga l'area più grande che puoi svuotare in Windows senza correre rischi. La cartella temporanea dell'utente %TEMP% (di solito C:\\Users\\TuoNome\\AppData\\Local\\Temp) e quella di sistema C:\\Windows\\Temp si riempiono di residui di installazione, download interrotti e file di lavoro dei programmi. Su una macchina mai ripulita, insieme arrivano spesso a contenere tra i 5 e i 20 GB.",
            "Eliminarle non comporta rischi, perché Windows blocca qualsiasi file in uso e si rifiuta di rimuoverlo, anche se selezioni tutto. Se un programma in esecuzione tiene occupato un file temporaneo, quel file viene semplicemente saltato: nessun errore, nessun danno.",
            "Nella stessa categoria rientrano la cache delle miniature (thumbcache_*.db), i registri di Windows Update, i file di dump della memoria (.dmp) e i file di ottimizzazione recapito. Tutti vengono rigenerati all'occorrenza. Il pulitore della cache (Cache Cleaner) di Disk Mop raccoglie una ventina di queste categorie in un'unica schermata e mostra quanto occupa ciascuna prima che tu elimini qualcosa.",
          ],
        },
        {
          title: "Sicuro da eliminare: Windows.old e residui dell'aggiornamento",
          content: [
            "Windows.old viene creata dopo un aggiornamento di versione importante e contiene l'intera installazione precedente. Di solito pesa tra i 15 e i 30 GB e ha un unico scopo: permetterti di tornare alla vecchia versione entro i primi 10 giorni dall'aggiornamento.",
            "Eliminarla è sicuro; l'unica cosa a cui rinunci è quel ritorno indietro. Windows rimuove comunque la cartella da solo dopo 10 giorni. Se la nuova versione funziona bene, recupera subito lo spazio da Impostazioni > Sistema > Archiviazione > File temporanei spuntando « Installazioni precedenti di Windows ».",
            "Accanto trovi spesso le cartelle nascoste $WINDOWS.~BT e $WINDOWS.~WS. Sono file di lavoro del processo di aggiornamento e si rimuovono dalla stessa schermata. Provare a eliminarle a mano in Esplora file produce soltanto errori di autorizzazione: lo strumento di pulizia integrato è sempre la strada giusta.",
          ],
        },
        {
          title: "Con riserva: pagefile.sys, hiberfil.sys e Prefetch",
          content: [
            "pagefile.sys è il file di paging della memoria virtuale e la sua dimensione segue quella della RAM; su una macchina da 16 GB occupa in genere diversi gigabyte. Non puoi eliminarlo: Windows lo ricrea immediatamente. Se vuoi ridurlo, imposta una dimensione personalizzata in Impostazioni di sistema avanzate > Prestazioni > Avanzate > Memoria virtuale. Disattivarlo del tutto provoca arresti anomali delle applicazioni sui sistemi con poca RAM ed elimina i dump di arresto del kernel, rendendo molto più difficile qualsiasi diagnosi futura.",
            "hiberfil.sys serve alla sospensione e occupa circa il 40 % della RAM installata. Il modo corretto di rimuoverlo è il comando powercfg /hibernate off in un prompt dei comandi come amministratore, che cancella il file al posto tuo. Il prezzo: la sospensione viene disattivata e con essa l'avvio rapido di Windows, il che può allungare l'accensione di qualche secondo.",
            "La cartella Prefetch (C:\\Windows\\Prefetch) contiene piccoli file che aiutano le applicazioni più usate ad avviarsi prima e raramente supera qualche centinaio di megabyte. Eliminarla è innocuo ma inutile: lo spazio recuperato è trascurabile e in cambio le applicazioni si aprono un po' più lentamente per diversi giorni, mentre Windows ricostruisce i dati. Si può fare, ma non c'è alcun motivo per farlo.",
          ],
        },
        {
          title: "Da non toccare mai: WinSxS e C:\\Windows\\Installer",
          content: [
            "WinSxS, l'archivio componenti, contiene tutti i componenti di sistema di Windows e tutte le versioni di aggiornamento sostituite. Esplora file di solito indica oltre 10 GB, ma quel numero inganna: la maggior parte dei file al suo interno sono collegamenti reali a file che si trovano altrove in Windows, quindi gli stessi dati vengono contati due volte. Lo spazio davvero recuperabile è in genere molto inferiore alla cifra mostrata.",
            "Eliminare file da questa cartella danneggia Windows in modo irreparabile: gli aggiornamenti non si installano più, il controllo dei file di sistema fallisce e alcune funzionalità non si possono più attivare. L'unica pulizia corretta è DISM /Online /Cleanup-Image /StartComponentCleanup in un prompt dei comandi come amministratore, che rimuove soltanto le versioni di componenti realmente sostituite.",
            "C:\\Windows\\Installer è il bersaglio del consiglio più pericoloso che circoli in rete. La cartella è nascosta, può crescere fino a decine di gigabyte e i file .msi e .msp al suo interno sembrano spazzatura. Non lo sono: Windows li usa ogni volta che disinstalli o ripari un programma basato su MSI. Una volta eliminati, applicazioni come Microsoft Office non si possono più né rimuovere né riparare, e spesso l'unica via d'uscita è reinstallare il sistema da zero. Lascia stare questa cartella.",
          ],
        },
        {
          title: "Da non toccare mai: System32, l'archivio driver e Ripristino configurazione di sistema",
          content: [
            "C:\\Windows\\System32 è Windows stesso; togliere file da lì rende il sistema non più avviabile. La vecchia battuta « elimina System32 per velocizzare il PC » è uno degli scherzi più antichi di internet, e c'è ancora chi ci casca.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository è l'archivio driver e può accumulare dai 5 ai 15 GB di pacchetti, versioni vecchie comprese. Eliminare lì a mano rompe gli aggiornamenti dei driver e il ripristino dell'hardware. Se quello spazio ti serve davvero, lo strumento corretto è pnputil /enum-drivers, che elenca i pacchetti e permette di rimuovere solo quelli obsoleti.",
            "System Volume Information contiene i punti di ripristino del sistema e le copie shadow, e l'accesso è limitato di proposito. Per liberare spazio, riduci la percentuale di disco riservata ai punti di ripristino oppure elimina quelli vecchi da Pannello di controllo > Sistema > Protezione sistema. Forzare l'ingresso nella cartella per cancellare file lascia il ripristino del sistema fuori uso.",
          ],
        },
        {
          title: "Misura prima di eliminare",
          content: [
            "La lezione più utile di questo elenco è che lo spazio recuperato quasi mai coincide con quello che ti aspettavi. WinSxS può segnare 12 GB e liberarne 2, mentre una cache di gioco a cui non pensi mai ne occupa 40. L'ordine giusto è sempre: prima misurare, poi eliminare.",
            "L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità e dispone le cartelle in una treemap visiva le cui aree riflettono quanto occupano davvero, così la cartella davvero gonfia salta subito all'occhio. La sua protezione dei file di sistema (System File Protection) applica nel codice la lista « da non toccare mai » di questa guida: percorsi critici come System32, WinSxS e Installer stanno in un elenco protetto, vengono segnalati a parte se compaiono in un'operazione di eliminazione e non vengono mai rimossi senza una conferma esplicita.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "È sicuro eliminare la cartella Windows.old?",
          answer:
            "Sì. Windows.old esiste solo per permetterti di tornare alla versione precedente di Windows entro 10 giorni da un aggiornamento. Eliminandola perdi soltanto quel ritorno indietro, e Windows rimuove comunque la cartella in automatico dopo 10 giorni. Usa Impostazioni > Sistema > Archiviazione > File temporanei e spunta « Installazioni precedenti di Windows » invece di eliminarla da Esplora file.",
        },
        {
          question: "Posso eliminare la cartella WinSxS?",
          answer:
            "No. Eliminare file da WinSxS a mano compromette in modo permanente gli aggiornamenti di Windows e la riparazione dei file di sistema. Anche la dimensione mostrata da Esplora file inganna, perché la maggior parte dei file al suo interno sono collegamenti reali e vengono contati due volte. L'unica pulizia sicura è eseguire DISM /Online /Cleanup-Image /StartComponentCleanup in un prompt dei comandi come amministratore.",
        },
        {
          question: "Eliminare C:\\Windows\\Installer libera spazio?",
          answer:
            "Sì, ma non dovresti mai farlo. Windows usa i file .msi e .msp di quella cartella ogni volta che disinstalli o ripari un programma basato su MSI. Una volta eliminati, applicazioni come Microsoft Office non si possono più disinstallare né riparare e, in molti casi, l'unico rimedio rimasto è reinstallare Windows da zero.",
        },
        {
          question: "Si può eliminare pagefile.sys?",
          answer:
            "No, Windows lo ricrea immediatamente. Se ti serve spazio, imposta una dimensione personalizzata in Impostazioni di sistema avanzate > Prestazioni > Avanzate > Memoria virtuale. Disattivare del tutto il file di paging provoca arresti anomali delle applicazioni sui sistemi con 8 GB di RAM o meno ed elimina i dump di arresto del kernel, rendendo molto più difficile diagnosticare i problemi futuri.",
        },
        {
          question: "Come mi libero di hiberfil.sys?",
          answer:
            "Esegui powercfg /hibernate off in un prompt dei comandi come amministratore. Il file viene rimosso automaticamente e libera su disco circa il 40 % della RAM installata. In cambio vengono disattivate la sospensione e l'avvio rapido di Windows, il che può allungare l'accensione di qualche secondo.",
        },
        {
          question: "Eliminare la cartella Prefetch velocizza il PC?",
          answer:
            "No, fa l'opposto. Prefetch conserva i dati che aiutano le applicazioni più usate ad avviarsi prima e raramente supera qualche centinaio di megabyte. Eliminarla recupera una quantità di spazio trascurabile e fa aprire le applicazioni un po' più lentamente per diversi giorni, mentre Windows ricostruisce i dati.",
        },
      ],
      verdict: [
        "La strada sicura per liberare spazio in Windows è ben tracciata: file temporanei, cache, Windows.old e residui dell'aggiornamento si possono rimuovere senza esitazioni; pagefile.sys e hiberfil.sys si disattivano dalle impostazioni di Windows invece di essere eliminati; WinSxS, Installer, System32, l'archivio driver e System Volume Information non si toccano mai a mano.",
        "Una regola pratica affidabile: se eliminare una cartella in Esplora file richiede i diritti di amministratore o la presa di proprietà, probabilmente quella cartella non era pensata perché la eliminassi tu. Usa piuttosto lo strumento che Windows prevede per quell'area: le impostazioni di archiviazione, DISM, powercfg o la schermata di protezione sistema.",
        "I guadagni maggiori, del resto, quasi mai si trovano in queste contese cartelle di sistema, ma nei dati personali dimenticati: download di cui non ricordi più nulla, foto duplicate, vecchie installazioni di giochi e residui di programmi disinstallati. Prima misura, poi elimina.",
      ],
      ctaText: "Smetti di tirare a indovinare su che cosa si può eliminare",
    },
    pt: {
      title: "É seguro apagar estes arquivos do Windows? A resposta arquivo por arquivo",
      metaDescription:
        "Windows.old, WinSxS, pagefile.sys, hiberfil.sys, Prefetch, SoftwareDistribution e a pasta Installer: quais dá para apagar sem risco e quais quebram o Windows. Um veredito claro para cada um.",
      subtitle: "As listas: seguro, condicional e nunca toque",
      intro: [
        "Resposta curta: arquivos temporários, Windows.old, Prefetch, o cache de miniaturas e a pasta de downloads SoftwareDistribution podem ser apagados sem risco. pagefile.sys e hiberfil.sys não se apagam, se desativam pelas configurações do Windows. WinSxS, C:\\Windows\\Installer, System32 e System Volume Information nunca devem ser tocados na mão — apagá-los quebra de forma permanente a desinstalação de programas, as atualizações do Windows e a recuperação do sistema.",
        "A internet está cheia de conselhos do tipo “apague esta pasta e recupere 20 GB”. Parte deles está certa e parte deixa estragos que só aparecem anos depois, no dia em que uma atualização se recusa a instalar ou um programa não deixa ser desinstalado. Este guia separa os devoradores de espaço do Windows em três categorias claras: seguro, condicional e nunca. Em cada item você vê o que é, quanto espaço costuma ocupar e o que exatamente perde ao remover.",
      ],
      keyTakeaways: [
        "Arquivos temporários (%TEMP% e C:\\Windows\\Temp) sempre podem ser apagados com segurança: o Windows ignora automaticamente qualquer arquivo em uso.",
        "A Windows.old pode ser apagada, mas você perde a opção de voltar para a versão anterior do Windows. De qualquer forma, a pasta some sozinha depois de 10 dias.",
        "Nunca apague nada de WinSxS na mão. O tamanho exibido engana, porque a maioria dos arquivos ali dentro são links físicos; a única limpeza segura é DISM /StartComponentCleanup.",
        "Apagar C:\\Windows\\Installer é o conselho mais repetido e mais destrutivo da internet: ele quebra de forma permanente a desinstalação e o reparo de todos os programas baseados em MSI.",
        "pagefile.sys e hiberfil.sys não são apagados, são desativados — o primeiro nas configurações de memória virtual e o segundo com o comando powercfg /hibernate off.",
        "A pasta Prefetch pode ser apagada, mas não deveria: os aplicativos abrem um pouco mais devagar por alguns dias, até o Windows reconstruir os dados, e o espaço ganho é insignificante.",
      ],
      sections: [
        {
          title: "Seguro apagar: arquivos temporários e caches",
          content: [
            "As pastas de arquivos temporários são, de longe, a maior área que dá para esvaziar no Windows sem risco nenhum. A pasta temporária do usuário %TEMP% (normalmente C:\\Users\\SeuNome\\AppData\\Local\\Temp) e a temporária do sistema C:\\Windows\\Temp enchem de sobras de instaladores, downloads abandonados e arquivos de trabalho dos programas. Em uma máquina que nunca foi limpa, as duas juntas costumam guardar de 5 a 20 GB.",
            "Apagá-las não oferece risco porque o Windows bloqueia qualquer arquivo em uso e se recusa a removê-lo, mesmo se você selecionar tudo. Se um programa em execução estiver segurando um arquivo temporário, esse arquivo é simplesmente ignorado — sem erro e sem estrago.",
            "Na mesma categoria entram o cache de miniaturas (thumbcache_*.db), os logs do Windows Update, os arquivos de despejo de memória (.dmp) e os arquivos de Otimização de Entrega. Todos são recriados quando necessário. O limpador de cache (Cache Cleaner) do Disk Mop reúne cerca de vinte dessas categorias em uma única tela e mostra quanto cada uma está ocupando antes de você apagar qualquer coisa.",
          ],
        },
        {
          title: "Seguro apagar: Windows.old e sobras da atualização",
          content: [
            "A Windows.old é criada depois de uma atualização de versão importante do Windows e contém toda a instalação anterior. Costuma ter de 15 a 30 GB e tem uma única finalidade: permitir que você volte para a versão antiga nos primeiros 10 dias após a atualização.",
            "Apagá-la é seguro; a única coisa de que você abre mão é dessa volta atrás. O Windows remove a pasta sozinho depois de 10 dias de qualquer jeito. Se a versão nova está rodando bem, recupere o espaço na hora em Configurações > Sistema > Armazenamento > Arquivos temporários, marcando “Instalações anteriores do Windows”.",
            "Ao lado dela costumam aparecer as pastas ocultas $WINDOWS.~BT e $WINDOWS.~WS. São arquivos de trabalho do processo de atualização e saem pela mesma tela. Tentar apagá-las na mão pelo Explorador de Arquivos só gera erros de permissão — a ferramenta de limpeza embutida é sempre o caminho certo.",
          ],
        },
        {
          title: "Condicional: pagefile.sys, hiberfil.sys e Prefetch",
          content: [
            "O pagefile.sys é o arquivo de paginação da memória virtual e seu tamanho acompanha a RAM; em uma máquina de 16 GB ele costuma ocupar vários gigabytes. Você não consegue apagá-lo — o Windows o recria na hora. Se quiser deixá-lo menor, defina um tamanho personalizado em Configurações avançadas do sistema > Desempenho > Avançado > Memória virtual. Desativá-lo por completo causa travamentos de aplicativos em sistemas com pouca RAM e elimina os despejos de memória do kernel, o que dificulta bastante qualquer diagnóstico futuro.",
            "O hiberfil.sys sustenta a hibernação e ocupa cerca de 40% da RAM instalada. A forma correta de removê-lo é o comando powercfg /hibernate off em um prompt de comando como administrador, que apaga o arquivo para você. O preço: a hibernação é desativada e, junto com ela, a Inicialização Rápida do Windows, o que pode acrescentar alguns segundos ao boot.",
            "A pasta Prefetch (C:\\Windows\\Prefetch) guarda arquivos pequenos que ajudam os aplicativos mais usados a abrir mais rápido e raramente passa de algumas centenas de megabytes. Apagá-la é inofensivo, mas inútil: o espaço recuperado é insignificante e, em troca, seus aplicativos abrem um pouco mais devagar por vários dias enquanto o Windows refaz os dados. Dá para fazer, mas não há motivo nenhum para fazer.",
          ],
        },
        {
          title: "Nunca toque: WinSxS e C:\\Windows\\Installer",
          content: [
            "O WinSxS, o repositório de componentes, guarda todos os componentes de sistema do Windows e todas as versões de atualização substituídas. O Explorador de Arquivos costuma indicar mais de 10 GB, mas esse número engana: a maioria dos arquivos ali dentro são links físicos para arquivos que ficam em outro lugar do Windows, então os mesmos dados são contados duas vezes. O espaço realmente recuperável costuma ser bem menor do que o número exibido.",
            "Apagar arquivos dessa pasta quebra o Windows de um jeito que não tem conserto: as atualizações param de instalar, a verificação de arquivos de sistema falha e alguns recursos não podem mais ser ativados. A única limpeza correta é DISM /Online /Cleanup-Image /StartComponentCleanup em um prompt de comando como administrador, que remove apenas as versões de componentes de fato substituídas.",
            "C:\\Windows\\Installer é o alvo do conselho mais perigoso da internet. A pasta é oculta, pode crescer até dezenas de gigabytes e os arquivos .msi e .msp lá dentro parecem lixo. Não são: o Windows os usa toda vez que você desinstala ou repara um programa baseado em MSI. Depois de apagados, aplicativos como o Microsoft Office não podem mais ser removidos nem reparados, e muitas vezes a única saída é reinstalar o sistema do zero. Deixe essa pasta em paz.",
          ],
        },
        {
          title: "Nunca toque: System32, o repositório de drivers e a Restauração do Sistema",
          content: [
            "C:\\Windows\\System32 é o próprio Windows; tirar arquivos de lá deixa o sistema sem conseguir iniciar. Aquela velha frase “apague o System32 para deixar o PC mais rápido” é uma das pegadinhas mais antigas da internet, e ainda tem gente que cai.",
            "C:\\Windows\\System32\\DriverStore\\FileRepository é o repositório de drivers e pode acumular de 5 a 15 GB de pacotes, versões antigas incluídas. Apagar ali na mão quebra as atualizações de driver e a recuperação de hardware. Se você precisa mesmo desse espaço, a ferramenta certa é pnputil /enum-drivers, que lista os pacotes e permite remover só os obsoletos.",
            "A System Volume Information guarda os pontos de restauração do sistema e as cópias de sombra, e o acesso a ela é restrito de propósito. Para liberar espaço, reduza a porcentagem de disco reservada aos pontos de restauração, ou apague os pontos antigos, em Painel de Controle > Sistema > Proteção do Sistema. Forçar a entrada na pasta para apagar arquivos deixa a recuperação do sistema sem funcionar.",
          ],
        },
        {
          title: "Meça antes de apagar",
          content: [
            "A lição mais útil desta lista é que o espaço recuperado quase nunca é o que você imaginava. O WinSxS pode indicar 12 GB e liberar 2, enquanto um cache de jogos em que você nunca pensa está ocupando 40 GB. A ordem certa é sempre medir primeiro e apagar depois.",
            "A análise de disco (Disk Analysis) do Disk Mop varre a unidade e distribui as pastas em um treemap visual cujas áreas refletem o que elas realmente ocupam, então a pasta de fato inchada salta aos olhos. A proteção de arquivos do sistema (System File Protection) aplica no código a lista de “nunca toque” deste guia: caminhos críticos como System32, WinSxS e Installer ficam em uma lista protegida, são sinalizados à parte caso apareçam em uma operação de exclusão e nunca são removidos sem confirmação explícita.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "É seguro apagar a pasta Windows.old?",
          answer:
            "Sim. A Windows.old existe apenas para você poder voltar à versão anterior do Windows dentro de 10 dias após uma atualização. Ao apagá-la você perde só essa volta atrás, e o Windows remove a pasta automaticamente depois de 10 dias de qualquer forma. Use Configurações > Sistema > Armazenamento > Arquivos temporários e marque “Instalações anteriores do Windows” em vez de apagar pelo Explorador de Arquivos.",
        },
        {
          question: "Posso apagar a pasta WinSxS?",
          answer:
            "Não. Apagar arquivos do WinSxS na mão quebra de forma permanente as atualizações do Windows e o reparo de arquivos de sistema. O tamanho mostrado pelo Explorador de Arquivos também engana, porque a maioria dos arquivos ali dentro são links físicos e acabam contados duas vezes. A única limpeza segura é rodar DISM /Online /Cleanup-Image /StartComponentCleanup em um prompt de comando como administrador.",
        },
        {
          question: "Apagar C:\\Windows\\Installer libera espaço?",
          answer:
            "Libera, mas você nunca deve fazer isso. O Windows usa os arquivos .msi e .msp dessa pasta toda vez que você desinstala ou repara um programa baseado em MSI. Depois de apagados, aplicativos como o Microsoft Office não podem mais ser desinstalados nem reparados e, em muitos casos, a única solução que sobra é reinstalar o Windows do zero.",
        },
        {
          question: "Dá para apagar o pagefile.sys?",
          answer:
            "Não — o Windows o recria na hora. Se você precisa do espaço, defina um tamanho personalizado em Configurações avançadas do sistema > Desempenho > Avançado > Memória virtual. Desligar o arquivo de paginação por completo causa travamentos de aplicativos em sistemas com 8 GB de RAM ou menos e remove os despejos de memória do kernel, o que dificulta bastante diagnosticar problemas futuros.",
        },
        {
          question: "Como me livro do hiberfil.sys?",
          answer:
            "Rode powercfg /hibernate off em um prompt de comando como administrador. O arquivo é removido automaticamente e libera em disco cerca de 40% da RAM instalada. Em troca, a hibernação é desativada junto com a Inicialização Rápida do Windows, o que pode acrescentar alguns segundos ao boot.",
        },
        {
          question: "Apagar a pasta Prefetch deixa o PC mais rápido?",
          answer:
            "Não, faz o contrário. O Prefetch guarda dados que ajudam os aplicativos mais usados a abrir mais rápido e raramente passa de algumas centenas de megabytes. Apagá-lo recupera uma quantidade insignificante de espaço e faz os aplicativos abrirem um pouco mais devagar por vários dias, enquanto o Windows reconstrói os dados.",
        },
      ],
      verdict: [
        "O caminho seguro para liberar espaço no Windows é bem definido: arquivos temporários, caches, Windows.old e sobras de atualização podem ser removidos à vontade; pagefile.sys e hiberfil.sys são desativados pelas configurações do Windows em vez de apagados; e WinSxS, Installer, System32, o repositório de drivers e System Volume Information nunca devem ser tocados na mão.",
        "Uma regra prática confiável: se apagar uma pasta pelo Explorador de Arquivos exige direitos de administrador ou apropriação, essa pasta provavelmente não foi feita para você apagar. Use a ferramenta que o Windows oferece para aquela área — as configurações de armazenamento, o DISM, o powercfg ou a tela de Proteção do Sistema.",
        "Os maiores ganhos, aliás, quase nunca estão nessas pastas de sistema disputadas, e sim em dados próprios esquecidos: downloads de que ninguém se lembra, fotos duplicadas, instalações de jogos antigos e restos de programas desinstalados. Meça primeiro, apague depois.",
      ],
      ctaText: "Pare de adivinhar o que é seguro apagar",
    },
    ja: {
      title: "これらのWindowsファイルは削除しても安全？ ファイル別に答えます",
      metaDescription:
        "Windows.old、WinSxS、pagefile.sys、hiberfil.sys、Prefetch、SoftwareDistribution、Installerフォルダー。削除しても安全なものと、システムを壊してしまうものを、ファイルごとにはっきり判定します。",
      subtitle: "安全・条件付き・絶対に触らない、3つのリスト",
      intro: [
        "短い答えです。一時ファイル、Windows.old、Prefetch、サムネイルキャッシュ、SoftwareDistribution のダウンロードフォルダーは、削除しても安全です。pagefile.sys と hiberfil.sys は削除するものではなく、Windowsの設定から無効化します。WinSxS、C:\\Windows\\Installer、System32、System Volume Information には手作業で絶対に触ってはいけません。これらを削除すると、プログラムのアンインストール、Windows Update、システムの回復が、元に戻せない形で壊れます。",
        "インターネットには「このフォルダーを削除すれば20 GB空く」という助言があふれています。その一部は正しいのですが、残りは数年後になって初めて表面化する損傷を残します。更新プログラムがインストールできなくなったり、プログラムをアンインストールできなくなったりするのです。この記事では、Windowsで容量を食っているものを、安全・条件付き・絶対に不可という3つのはっきりしたグループに分けます。項目ごとに、それが何なのか、通常どれくらいの容量を占めるのか、削除すると何を失うのかを示します。",
      ],
      keyTakeaways: [
        "一時ファイル（%TEMP% と C:\\Windows\\Temp）はいつでも安全に削除できます。使用中のファイルはWindowsが自動的にスキップします。",
        "Windows.old は削除できますが、以前のWindowsバージョンに戻せなくなります。どのみち10日後には自動的に削除されます。",
        "WinSxS の中身を手作業で削除してはいけません。中のファイルの大半はハードリンクのため表示サイズは当てにならず、安全な整理方法は DISM /StartComponentCleanup だけです。",
        "C:\\Windows\\Installer の削除は、ネット上で最もよく見かけ、最も破壊的な助言です。MSIベースのすべてのプログラムで、アンインストールと修復が永久に壊れます。",
        "pagefile.sys と hiberfil.sys は削除ではなく無効化します。前者は仮想メモリの設定から、後者は powercfg /hibernate off コマンドで行います。",
        "Prefetch フォルダーは削除できますが、すべきではありません。Windowsがデータを作り直すまでの数日間はアプリの起動がわずかに遅くなり、空く容量はごくわずかです。",
      ],
      sections: [
        {
          title: "安全に削除できるもの：一時ファイルとキャッシュ",
          content: [
            "一時ファイルのフォルダーは、Windowsでリスクなく空けられる領域として最大のものです。ユーザーの一時フォルダー %TEMP%（通常は C:\\Users\\ユーザー名\\AppData\\Local\\Temp）とシステムの一時フォルダー C:\\Windows\\Temp には、インストーラーの残骸、途中で放置されたダウンロード、プログラムの作業ファイルがたまり続けます。一度も掃除していないパソコンでは、この2つで5〜20 GBに達していることが珍しくありません。",
            "削除しても危険がないのは、使用中のファイルをWindowsがロックしており、すべてを選択しても削除を拒否するからです。実行中のプログラムが一時ファイルをつかんでいる場合、そのファイルは単に飛ばされるだけで、エラーも損傷も起きません。",
            "同じ分類には、サムネイルキャッシュ（thumbcache_*.db）、Windows Updateのログ、メモリダンプファイル（.dmp）、配信の最適化ファイルも含まれます。いずれも必要になれば再生成されます。Disk Mopのキャッシュ クリーナー（Cache Cleaner）は、この種のカテゴリを20個ほど1画面にまとめ、何かを削除する前にそれぞれがどれだけ容量を占めているかを表示します。",
          ],
        },
        {
          title: "安全に削除できるもの：Windows.old とアップグレードの残骸",
          content: [
            "Windows.old はWindowsのメジャーバージョンアップ後に作られ、以前のインストール環境がまるごと入っています。サイズは通常15〜30 GBで、目的はただ一つ、アップグレードから10日以内なら以前のバージョンに戻せるようにすることです。",
            "削除しても安全で、失うのはそのロールバックの選択肢だけです。10日経てばWindowsが自動的にフォルダーを削除します。新しいバージョンが問題なく動いているなら、「設定」>「システム」>「ストレージ」>「一時ファイル」で「以前のWindowsのインストール」にチェックを入れれば、すぐに容量を取り戻せます。",
            "その隣には、隠しフォルダーの $WINDOWS.~BT と $WINDOWS.~WS が残っていることもよくあります。これらはアップグレード処理の作業ファイルで、同じ画面から削除できます。エクスプローラーで手作業で消そうとしてもアクセス許可のエラーが出るだけなので、正しい方法は常に組み込みのクリーンアップ機能です。",
          ],
        },
        {
          title: "条件付き：pagefile.sys、hiberfil.sys、Prefetch",
          content: [
            "pagefile.sys は仮想メモリのファイルで、サイズは搭載メモリに応じて決まります。16 GBのパソコンでは数ギガバイトを占めるのが一般的です。削除することはできず、Windowsがすぐに作り直します。小さくしたい場合は、「システムの詳細設定」>「パフォーマンス」>「詳細設定」>「仮想メモリ」でカスタムサイズを指定します。完全に無効化すると、メモリの少ない環境ではアプリがクラッシュしやすくなり、カーネルのクラッシュダンプも取得できなくなるため、後々の原因調査が格段に難しくなります。",
            "hiberfil.sys は休止状態を支えるファイルで、搭載メモリのおよそ40%を占めます。正しい取り除き方は、管理者としてコマンド プロンプトを開き、powercfg /hibernate off を実行することです。ファイルは自動的に削除されます。代償として休止状態が無効になり、Windowsの高速スタートアップも使えなくなるため、起動に数秒余分にかかることがあります。",
            "Prefetch フォルダー（C:\\Windows\\Prefetch）には、よく使うアプリの起動を速くするための小さなファイルが入っており、数百メガバイトを超えることはめったにありません。削除しても害はありませんが、意味もありません。取り戻せる容量はごくわずかで、その代わりWindowsがデータを集め直すまでの数日間、アプリの起動が少し遅くなります。実行は可能ですが、やる理由がないのです。",
          ],
        },
        {
          title: "絶対に触らないもの：WinSxS と C:\\Windows\\Installer",
          content: [
            "コンポーネントストアである WinSxS には、Windowsのシステムコンポーネントと、置き換えられた更新プログラムのすべてのバージョンが保管されています。エクスプローラーは10 GB超と表示することが多いのですが、この数字は当てになりません。中のファイルの大半はWindowsの別の場所にある実体へのハードリンクで、同じデータが二重に数えられているからです。実際に取り戻せる容量は、表示された数字よりはるかに小さいのが普通です。",
            "このフォルダーからファイルを削除すると、Windowsは修復不能な形で壊れます。更新プログラムがインストールできなくなり、システムファイルのチェックは失敗し、有効化できなくなる機能も出てきます。唯一の正しい整理方法は、管理者としてコマンド プロンプトで DISM /Online /Cleanup-Image /StartComponentCleanup を実行することです。このコマンドは、本当に不要になったコンポーネントのバージョンだけを取り除きます。",
            "C:\\Windows\\Installer は、インターネット上で最も危険な助言の標的になっているフォルダーです。隠しフォルダーで、数十ギガバイトまで膨らむことがあり、中の .msi ファイルや .msp ファイルはいかにもゴミのように見えます。しかしゴミではありません。Windowsは、MSIベースのプログラムをアンインストールしたり修復したりするたびに、これらを使います。削除してしまうと、Microsoft Officeのようなアプリは削除も修復もできなくなり、OSのクリーンインストール以外に解決策が残らないことも多々あります。このフォルダーには手を出さないでください。",
          ],
        },
        {
          title: "絶対に触らないもの：System32、ドライバーストア、システムの復元",
          content: [
            "C:\\Windows\\System32 はWindows本体そのもので、ここからファイルを削除するとシステムは起動しなくなります。「System32を削除するとパソコンが速くなる」という古い言い回しは、インターネット最古級のいたずらですが、今でも引っかかる人がいます。",
            "C:\\Windows\\System32\\DriverStore\\FileRepository はドライバーストアで、古いバージョンを含むドライバーパッケージが5〜15 GBたまっていることがあります。ここを手作業で削除すると、ドライバーの更新とハードウェアの回復が壊れます。どうしてもその容量が必要なら、正しい方法は pnputil /enum-drivers でパッケージを一覧表示し、古いものだけを取り除くことです。",
            "System Volume Information には、システムの復元ポイントとシャドウ コピーが保存されており、アクセスは意図的に制限されています。容量を空けたいときは、「コントロール パネル」>「システム」>「システムの保護」で復元ポイント用に確保するディスクの割合を下げるか、古い復元ポイントを削除します。無理やりフォルダーに入り込んでファイルを消すと、システムの回復が機能しなくなります。",
          ],
        },
        {
          title: "削除する前に測る",
          content: [
            "このリストから得られる最も役立つ教訓は、実際に空く容量が想像とかけ離れていることが多い、という点です。WinSxSは12 GBと表示されても実際に空くのは2 GBという一方で、まったく意識していなかったゲームのキャッシュが40 GBを占めていることもあります。正しい順番は、いつでも「まず測ってから削除する」です。",
            "Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンし、実際の占有量に応じた面積のツリーマップとしてフォルダーを並べるので、本当に肥大化しているフォルダーが一目で分かります。システムファイル保護（System File Protection）は、この記事の「絶対に触らない」リストをコードとして実装しています。System32、WinSxS、Installer といった重要なパスは保護リストに登録され、削除操作に現れた場合は個別に警告され、明示的な確認なしに削除されることはありません。",
            "Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "Windows.old フォルダーは削除しても安全ですか？",
          answer:
            "安全です。Windows.old は、アップグレードから10日以内に以前のWindowsバージョンへ戻せるようにするためだけに存在します。削除して失うのはそのロールバックの選択肢だけで、どのみち10日後にはWindowsが自動的にフォルダーを削除します。エクスプローラーで消すのではなく、「設定」>「システム」>「ストレージ」>「一時ファイル」を開き、「以前のWindowsのインストール」にチェックを入れてください。",
        },
        {
          question: "WinSxS フォルダーは削除できますか？",
          answer:
            "できません。WinSxS のファイルを手作業で削除すると、Windows Update とシステムファイルの修復が永久に壊れます。エクスプローラーが示すフォルダーサイズも当てになりません。中のファイルの大半はハードリンクで、二重に数えられているからです。安全な整理方法は、管理者としてコマンド プロンプトで DISM /Online /Cleanup-Image /StartComponentCleanup を実行することだけです。",
        },
        {
          question: "C:\\Windows\\Installer を削除すると容量は空きますか？",
          answer:
            "空きますが、絶対に削除してはいけません。Windowsは、MSIベースのプログラムをアンインストールしたり修復したりするたびに、このフォルダーの .msi ファイルと .msp ファイルを使います。削除してしまうと、Microsoft Officeのようなアプリはアンインストールも修復もできなくなり、多くの場合はWindowsをクリーンインストールし直す以外に手が残りません。",
        },
        {
          question: "pagefile.sys は削除できますか？",
          answer:
            "できません。Windowsがすぐに作り直します。容量が必要なら、「システムの詳細設定」>「パフォーマンス」>「詳細設定」>「仮想メモリ」でカスタムサイズを指定してください。ページングファイルを完全に無効にすると、メモリが8 GB以下の環境ではアプリがクラッシュしやすくなり、カーネルのクラッシュダンプも失われるため、今後のトラブルの原因究明が大幅に難しくなります。",
        },
        {
          question: "hiberfil.sys を消すにはどうすればいいですか？",
          answer:
            "管理者としてコマンド プロンプトを開き、powercfg /hibernate off を実行してください。ファイルは自動的に削除され、搭載メモリのおよそ40%に相当するディスク容量が空きます。その代わり休止状態が無効になり、Windowsの高速スタートアップも使えなくなるため、起動に数秒余分にかかることがあります。",
        },
        {
          question: "Prefetch フォルダーを削除するとパソコンは速くなりますか？",
          answer:
            "いいえ、逆効果です。Prefetch は、よく使うアプリの起動を速くするためのデータを保存しており、数百メガバイトを超えることはめったにありません。削除しても空く容量はごくわずかで、Windowsがデータを作り直すまでの数日間は、アプリの起動がかえって少し遅くなります。",
        },
      ],
      verdict: [
        "Windowsで安全に容量を空ける道筋は、はっきりしています。一時ファイル、キャッシュ、Windows.old、アップグレードの残骸は自由に削除して構いません。pagefile.sys と hiberfil.sys は、削除ではなくWindowsの設定から無効化します。そして WinSxS、Installer、System32、ドライバーストア、System Volume Information には、手作業で決して触れないことです。",
        "使える目安があります。エクスプローラーでフォルダーを削除しようとして管理者権限や所有権の取得を求められたなら、そのフォルダーはおそらく利用者が削除する前提で作られていません。その領域のためにWindowsが用意している手段、つまりストレージの設定、DISM、powercfg、システムの保護の画面を使ってください。",
        "そもそも最も効果が大きいのは、こうした論争の的になるシステムフォルダーではなく、見落とされている自分のデータであることがほとんどです。忘れられたダウンロード、重複した写真、古いゲームのインストール、アンインストール済みプログラムの残骸などです。まず測り、それから削除しましょう。",
      ],
      ctaText: "削除して安全かどうかを推測するのは、もうやめましょう",
    },
  },
};
