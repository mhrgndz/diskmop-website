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
  },
};
