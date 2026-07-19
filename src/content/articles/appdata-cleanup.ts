import type { Article } from '../types';

export const appdataCleanup: Article = {
  slug: 'appdata-folder-cleanup',
  type: 'guide',
  category: 'Disk Cleanup',
  date: '2026-07-18',
  readingTime: 7,
  content: {
    tr: {
      title: 'AppData Klasörü Temizleme: Neler Güvenle Silinebilir?',
      metaDescription:
        'AppData klasörü çok mu şişti? AppData klasörü temizleme rehberi: Local, LocalLow ve Roaming\'de nelerin güvenle silinebileceğini adım adım öğrenin.',
      subtitle: 'AppData\'nın Üç Alt Klasörü İçin Güvenli-Riskli Haritası',
      intro: [
        'AppData klasörünüz onlarca gigabayta mı ulaştı? Çoğu durumda AppData\'yı küçültmenin güvenli yolu üç adımdan geçer: AppData\\Local içindeki Temp klasörünü boşaltmak, uygulama önbelleklerini temizlemek ve çoktan kaldırdığınız programlardan geriye kalan klasörleri silmek. Asla yapmamanız gereken şey ise AppData klasörünün tamamını silmektir; çünkü bu klasör, kurulu uygulamalarınızın çalışmak için ihtiyaç duyduğu ayarları, profilleri ve kayıtlı verileri de barındırır.',
        'Bu rehberde önce AppData\'nın üç alt klasörünün (Local, LocalLow, Roaming) ne işe yaradığını açıklayacak, ardından nelerin güvenle silinebileceğini ve nelere kesinlikle dokunulmaması gerektiğini net bir haritayla göstereceğiz. Temp ve önbellek temizliğini adım adım yapacak, kaldırılmış programların artıklarını bulacak ve son olarak bu temizliği otomatikleştirerek AppData\'nın bir daha şişmesini engelleyeceğiz.',
      ],
      sections: [
        {
          title: 'AppData Klasörü Nedir? Local, LocalLow ve Roaming Açıklaması',
          content: [
            'AppData, her Windows kullanıcı hesabının altında bulunan gizli bir klasördür ve C:\\Users\\KullanıcıAdınız\\AppData yolunda yer alır. Varsayılan olarak gizli olduğu için görmek isterseniz Dosya Gezgini\'nde Görünüm menüsünden Gizli öğeleri göster seçeneğini açmanız gerekir. Daha hızlı bir yol ise Win+R tuşlarına basıp %appdata% yazmaktır; bu komut sizi doğrudan Roaming alt klasörüne götürür.',
            'AppData\'nın üç alt klasörü vardır ve her biri farklı bir amaca hizmet eder. Local, yalnızca bu bilgisayara özgü verileri tutar: uygulama önbellekleri, geçici dosyalar ve Temp klasörü buradadır; genellikle en çok yer kaplayan bölüm de burasıdır. LocalLow, kısıtlı izinlerle çalışan uygulamaların (korumalı moddaki tarayıcılar, bazı oyunlar) verilerini saklar ve çoğu sistemde küçüktür. Roaming ise sizi takip etmesi gereken ayarları barındırır: tarayıcı profilleri, uygulama yapılandırmaları ve birçok oyunun kayıt dosyaları burada tutulur.',
            'Bu ayrımı akılda tutmak, tüm temizlik sürecinin pusulasıdır: silinmesi güvenli olan gereksiz verilerin büyük kısmı Local\'de birikir, korumanız gereken değerli verilerin çoğu ise Roaming\'de durur. Rehberin geri kalanındaki her adım bu haritaya göre ilerleyecek.',
          ],
        },
        {
          title: 'AppData Neden Sessizce Onlarca Gigabayta Ulaşır?',
          content: [
            'Modern uygulamalar agresif şekilde önbellek kullanır. Mesajlaşma uygulamaları, müzik ve video platformlarının masaüstü sürümleri, video konferans araçları ve kod editörleri; her biri AppData altında yüzlerce megabayttan birkaç gigabayta kadar önbellek biriktirebilir. Buna ek olarak güncelleme araçları eski kurulum dosyalarını saklar, uygulamalar günlük (log) dosyaları üretir ve çökme dökümleri %localappdata%\\CrashDumps klasöründe birikir.',
            'İşin kötüsü, Windows bu verilerin çoğunu kendiliğinden temizlemez. Depolama Algılayıcısı yalnızca bazı geçici dosyaları silebilir; uygulama önbelleklerine ve sahipsiz klasörlere dokunmaz. Program kaldırıcıları da genellikle ayar klasörlerini bilerek geride bırakır; amaç, uygulamayı yeniden kurarsanız ayarlarınızın korunmasıdır. Sonuç olarak yıllar içinde AppData, kimsenin düzenli bakmadığı bir depoya dönüşür.',
            'Durumu görmek için AppData klasörüne sağ tıklayıp Özellikler\'i seçerek toplam boyuta bakabilirsiniz; ancak bu yöntem hangi alt klasörün şiştiğini göstermez. Disk Mop\'un disk analizi (Disk Analysis) özelliği, sürücünüzü görsel bir treemap ile tarayarak AppData içindeki en büyük klasörleri tek bakışta ortaya çıkarır ve temizliğe nereden başlayacağınızı netleştirir.',
          ],
        },
        {
          title: 'AppData Silinebilir mi? Neler Güvenli, Neler Değil',
          content: [
            'Sık sorulan sorunun net yanıtı: hayır, AppData klasörünün tamamı silinmez. Bu klasörü topluca silerseniz kurulu uygulamalarınız ayarlarını, oturumlarını, lisans bilgilerini ve kayıtlı verilerini kaybeder; birçoğu açılmaz ya da sıfırlanmış halde açılır. Doğru yaklaşım, klasörün tamamını değil, içindeki belirli gereksiz öğeleri hedeflemektir.',
            'Güvenle silinebilecekler şunlardır: %localappdata%\\Temp klasörünün içeriği; kapalı durumdaki bir uygulamanın klasörü altında adı doğrudan Cache veya GPUCache olan alt klasörler; %localappdata%\\CrashDumps içindeki eski çökme dökümleri; ve kaldırdığınızdan emin olduğunuz programlara ait klasörlerin tamamı. Uygulamalar önbelleklerini bir sonraki açılışta yeniden oluşturur, bu yüzden önbellek silmek veri kaybına yol açmaz.',
            'Dokunulmaması gerekenler ise şunlardır: Roaming altındaki Microsoft klasörü (Office şablonları, e-posta imzaları ve Windows profil verileri burada durur); tarayıcı profil klasörleri (yer imleri, kayıtlı parolalar ve eklentiler buradadır); ve halen kurulu bir uygulamaya ait, önbellek olduğu açıkça belli olmayan her klasör. Emin olamadığınız bir klasör varsa silmek yerine adının sonuna .old ekleyip bir hafta bekleyin; hiçbir uygulama şikayet etmezse güvenle silebilirsiniz.',
          ],
        },
        {
          title: 'AppData Local Temp Klasörünü ve Uygulama Önbelleklerini Adım Adım Temizleyin',
          content: [
            'En hızlı kazanım Temp klasöründedir. Win+R tuşlarına basın, %localappdata%\\Temp yazın ve Enter\'a basın. Açılan klasörde Ctrl+A ile tüm öğeleri seçin ve silin; Windows kullanımda olan dosyaları silemeyeceğini söylediğinde Atla seçeneğini tıklamanız yeterlidir. Alanın gerçekten boşalması için işlem sonunda Geri Dönüşüm Kutusu\'nu da boşaltmayı unutmayın.',
            'Windows\'un yerleşik aracını da kullanabilirsiniz: Ayarlar\'ı açın, Sistem bölümünden Depolama\'ya girin ve Geçici dosyalar\'a tıklayın. Windows 10 ve Windows 11\'de bulunan bu ekran, Windows Update artıkları ve teslim iyileştirme dosyaları gibi sistem düzeyindeki geçici verileri de listeler; kutucukları gözden geçirip Dosyaları kaldır\'a basın.',
            'Uygulama önbelleklerini elle temizlemek için önce uygulamayı tamamen kapatın (sistem tepsisinde çalışmaya devam etmediğinden emin olun), ardından %localappdata% veya %appdata% altındaki klasörünü açın ve yalnızca adı Cache veya GPUCache olan alt klasörlerin içeriğini silin. Uygulama bir sonraki açılışında bu klasörleri otomatik olarak yeniden oluşturur.',
            'Bu adımları her uygulama için tek tek yapmak zahmetliyse, Disk Mop\'un önbellek temizleyicisi (Cache Cleaner) sistem ve uygulama önbelleklerini tek taramada bulup güvenle silinebilecekleri gösterir. Tarayıcı önbelleği temizleyicisi Chrome, Firefox ve Edge\'i kapsar; Hızlandır (Speed Up) özelliği ise eski indirmeleri, sistem önbelleğini, tarayıcı önbelleğini ve geri dönüşüm kutusunu tek tıkla temizler.',
          ],
        },
        {
          title: 'Kaldırılmış Programların Artıklarını Roaming ve Local\'den Silin',
          content: [
            'AppData\'nın sessiz şişmesinin en çok gözden kaçan nedeni, kaldırılmış programların geride bıraktığı klasörlerdir. Bir programı kaldırdığınızda Roaming\'deki ayar klasörü ve Local\'deki önbellek klasörü çoğu zaman yerinde kalır. Yıllar içinde, çoktan vazgeçtiğiniz onlarca uygulamanın artığı gigabaytlarca yer tutmaya devam eder.',
            'Elle kontrol için %appdata% ve %localappdata% klasörlerini açın ve klasörleri ada göre sıralayın. Gördüğünüz her uygulama veya üretici adını, Ayarlar içindeki Uygulamalar bölümünde yer alan Yüklü uygulamalar listesiyle karşılaştırın. Artık kurulu olmayan bir programa ait klasörü silebilirsiniz. Yalnızca bir konuda dikkatli olun: bazı klasörler uygulama adı değil üretici adı taşır ve aynı üreticinin halen kullandığınız başka bir programının verilerini de içeriyor olabilir.',
            'Disk Mop bu işi gözle tarama zahmetinden kurtarır: disk analizi treemap görünümünde, sahipsiz kalmış büyük klasörler anında dikkat çeker ve büyük dosya bulucu 500 MB üzerindeki dosyaları AppData\'nın derinliklerinde bile işaretler. Böylece hangi artıkların gerçekten yer kapladığını tahmin etmek yerine doğrudan görürsünüz.',
          ],
        },
        {
          title: 'AppData Temizliğini Otomatikleştirin, Bir Daha Şişmesin',
          content: [
            'Tek seferlik temizlik birkaç ay içinde etkisini yitirir; kalıcı çözüm otomasyondur. Windows tarafında Ayarlar, Sistem, Depolama yolunu izleyip Depolama Algılayıcısı\'nı açabilir ve geçici dosyaların hangi sıklıkla silineceğini ayarlayabilirsiniz. Bu iyi bir başlangıçtır; ancak uygulama önbelleklerine ve kaldırılmış program artıklarına dokunmaz.',
            'Disk Mop\'un zamanlanmış temizlik (Scheduled Cleanup) özelliği bu boşluğu doldurur: haftalık veya aylık görevler oluşturarak önbellek temizliğini, geçici dosya silmeyi ve geri dönüşüm kutusu boşaltmayı otomatik hale getirir. Sistem sağlık puanı (System Health Score) ise diskinizin ne zaman ilgiye ihtiyaç duyduğunu tek bakışta gösterir; böylece AppData siz fark etmeden yeniden şişemez.',
            'Otomasyonun yanına küçük bir alışkanlık ekleyin: birkaç ayda bir kaldırılmış program artıklarını gözden geçirin ve C: sürücüsünde boş alan azalmaya başladığında disk analizini çalıştırın. Bu ikili, AppData\'yı kalıcı olarak kontrol altında tutar.',
          ],
        },
      ],
      verdict: [
        'AppData\'nın büyümesi bir hata değil, modern uygulamaların önbellek alışkanlıklarının doğal sonucudur; ama kontrolsüz büyümesi kabul etmek zorunda olduğunuz bir şey değildir. Local, LocalLow ve Roaming haritasını öğrenmek, Temp ve önbellekleri temizlemek, kaldırılmış programların artıklarını silmek ve klasörün tamamına asla dokunmamak — bu dört ilkeyi uyguladığınızda AppData\'yı güvenle gigabaytlarca küçültebilirsiniz.',
        'Disk Mop, bu rehberdeki tüm adımları tek uygulamada birleştirir: disk analizi şişen klasörleri gösterir, önbellek temizleyici sistem ve uygulama önbelleklerini güvenle siler, zamanlanmış temizlik ise AppData\'nın yeniden birikmesini engeller. Tek seferlik $9.90 lisansla ömür boyu kullanabilir, Windows 10, Windows 11 ve macOS üzerinde çalıştırabilirsiniz.',
      ],
      ctaText: 'Disk Mop ile AppData klasörünüzü temizleyin',
    },
    en: {
      title: 'AppData Folder Too Big? How to Clean It Up Safely',
      metaDescription:
        'Is your AppData folder too big? Learn what is safe to delete in Local, LocalLow and Roaming, clear Temp and app caches, and shrink it safely today.',
      subtitle: 'A Safe-vs-Unsafe Map for AppData\'s Three Subfolders',
      intro: [
        'Is your AppData folder too big? In most cases you can safely shrink it by emptying the Temp folder inside AppData\\Local, clearing application caches, and deleting folders left behind by programs you have already uninstalled. What you should never do is delete the entire AppData folder, because it also stores the settings, profiles and saved data your installed apps need to run.',
        'In this guide we will first explain what AppData\'s three subfolders (Local, LocalLow and Roaming) actually do, then draw a clear map of what is safe to delete and what you must leave alone. You will clear the Temp folder and app caches step by step, hunt down leftovers from uninstalled programs that most guides ignore, and finally automate the cleanup so AppData never balloons to tens of gigabytes again.',
      ],
      sections: [
        {
          title: 'What Is the AppData Folder? Local, LocalLow and Roaming Explained',
          content: [
            'AppData is a hidden folder that exists under every Windows user account at C:\\Users\\YourName\\AppData. Because it is hidden by default, you need to enable Show hidden items from the View menu in File Explorer to see it. A faster route is pressing Win+R and typing %appdata%, which takes you straight to the Roaming subfolder.',
            'AppData contains three subfolders, each with a distinct job. Local holds data tied to this specific PC: application caches, temporary files and the Temp folder all live here, and it is usually by far the largest of the three. LocalLow stores data for apps that run with restricted permissions, such as browsers in protected mode and some games, and it stays small on most systems. Roaming holds the settings meant to follow you around: browser profiles, app configurations and the save files of many games.',
            'Keeping this distinction in mind is the compass for the whole cleanup: most of the junk that is safe to remove piles up in Local, while most of the data you want to protect sits in Roaming. Every step in the rest of this guide follows that map.',
          ],
        },
        {
          title: 'Why AppData Quietly Grows to Tens of Gigabytes',
          content: [
            'Modern applications cache aggressively. Messaging apps, desktop clients for music and video platforms, video conferencing tools and code editors can each accumulate anywhere from hundreds of megabytes to several gigabytes under AppData. On top of that, updaters keep old installer files around, apps write log files continuously, and crash dumps pile up in %localappdata%\\CrashDumps.',
            'The bigger problem is that Windows cleans almost none of this on its own. Storage Sense can remove some temporary files, but it never touches application caches or orphaned folders. Uninstallers often leave settings folders behind deliberately, so your preferences survive if you ever reinstall. The result is that over the years AppData turns into a storage room nobody ever inspects.',
            'To see where you stand, right-click the AppData folder and choose Properties to check its total size — though that will not tell you which subfolder is the heavy one. Disk Mop\'s Disk Analysis feature scans your drive with a visual treemap that instantly reveals the largest folders inside AppData, so you know exactly where to start cleaning.',
          ],
        },
        {
          title: 'Can I Delete AppData? What Is Safe — and What Isn\'t',
          content: [
            'The direct answer to a very common question: no, you cannot delete the AppData folder as a whole. Wipe it and your installed applications lose their settings, sessions, license data and saved work; many will refuse to start or open in a factory-reset state. The right approach is to target specific disposable items inside it, never the folder itself.',
            'Safe to delete: the contents of %localappdata%\\Temp; subfolders literally named Cache or GPUCache inside an app\'s folder, as long as that app is fully closed; old crash dumps in %localappdata%\\CrashDumps; and the entire folders of programs you have verified are no longer installed. Applications rebuild their caches on the next launch, so clearing a cache never costs you real data.',
            'Not safe to delete: the Microsoft folder inside Roaming, which stores Office templates, mail signatures and Windows profile data; browser profile folders, which hold your bookmarks, saved passwords and extensions; and any folder belonging to an app you still use, unless it is clearly just a cache. When you are unsure about a folder, do not delete it — rename it by adding .old to the end and wait a week. If nothing complains, it is safe to remove.',
          ],
        },
        {
          title: 'Clear the AppData Local Temp Folder and App Caches Step by Step',
          content: [
            'The fastest win is the Temp folder. Press Win+R, type %localappdata%\\Temp and press Enter. In the folder that opens, select everything with Ctrl+A and delete it; when Windows reports that some files are in use, simply click Skip. Empty the Recycle Bin afterwards so the space is actually reclaimed.',
            'Windows also has a built-in cleanup that reaches system-level temporary data: open Settings, go to System, then Storage, and click Temporary files. This screen, available on both Windows 10 and Windows 11, lists items like Windows Update leftovers and delivery optimization files — review the checkboxes and click Remove files.',
            'To clear an individual app\'s cache manually, close the app completely first (check the system tray, since many apps keep running there), then open its folder under %localappdata% or %appdata% and delete only the contents of subfolders named Cache or GPUCache. The app recreates them automatically the next time it starts.',
            'If repeating that for every app sounds tedious, Disk Mop\'s Cache Cleaner finds system and application caches in a single scan and shows exactly what can be removed safely. Its Browser Cache Cleaner covers Chrome, Firefox and Edge, and the Speed Up feature clears old downloads, system cache, browser cache and the recycle bin in one click.',
          ],
        },
        {
          title: 'Remove Leftovers from Uninstalled Programs in Roaming and Local',
          content: [
            'The most overlooked reason AppData keeps growing is the trail of folders left behind by uninstalled programs. When you remove a program, its settings folder in Roaming and its cache folder in Local usually stay right where they were. Over the years, the remains of dozens of apps you abandoned long ago can keep holding gigabytes hostage.',
            'To check manually, open %appdata% and %localappdata% and sort the folders by name. Compare each app or vendor name you see against the Installed apps list under Settings and Apps. If a program is no longer installed, its folder can go. Just watch for one trap: some folders carry a vendor name rather than an app name, and the same vendor folder may also contain data for another of their programs you still use.',
            'Disk Mop takes the guesswork out of this hunt: in the Disk Analysis treemap, large orphaned folders stand out immediately, and the Large File Finder flags files over 500 MB even when they hide deep inside AppData. Instead of guessing which leftovers actually matter, you see them.',
          ],
        },
        {
          title: 'Automate AppData Cleanup So It Never Balloons Again',
          content: [
            'A one-time cleanup loses its effect within a few months; the lasting fix is automation. On the Windows side, open Settings, go to System, then Storage, and turn on Storage Sense, where you can choose how often temporary files are deleted. It is a good baseline — but it does not touch application caches or the leftovers of uninstalled programs.',
            'Disk Mop\'s Scheduled Cleanup fills exactly that gap: you can create weekly or monthly tasks that automatically clean caches, remove temporary files and empty the recycle bin. The System Health Score shows at a glance when your disk needs attention, so AppData can never quietly balloon again while you are not looking.',
            'Pair the automation with one small habit: every few months, review the leftovers of uninstalled programs, and run a disk analysis whenever free space on your C: drive starts shrinking. Together they keep AppData permanently under control.',
          ],
        },
      ],
      verdict: [
        'An oversized AppData folder is not a malfunction — it is the natural result of how aggressively modern apps cache — but unlimited growth is not something you have to accept. Learn the map of Local, LocalLow and Roaming, clear Temp and the caches, remove the leftovers of uninstalled programs, and never delete the folder as a whole: apply those four principles and you can safely reclaim gigabytes.',
        'Disk Mop brings every step of this guide into one app: Disk Analysis shows you which folders have ballooned, Cache Cleaner safely clears system and application caches, and Scheduled Cleanup stops AppData from piling up again. A one-time $9.90 license covers lifetime use on Windows 10, Windows 11 and macOS.',
      ],
      ctaText: 'Clean up your AppData folder with Disk Mop',
    },
    de: {
      title: 'AppData-Ordner zu groß? So bereinigen Sie ihn sicher',
      metaDescription:
        'Ist Ihr AppData-Ordner zu groß? Erfahren Sie, was Sie in Local, LocalLow und Roaming sicher löschen können, und halten Sie ihn dauerhaft schlank.',
      subtitle: 'Die Sicher-oder-Riskant-Karte für AppDatas drei Unterordner',
      intro: [
        'Ist Ihr AppData-Ordner auf Dutzende Gigabyte angewachsen? In den meisten Fällen lässt er sich sicher verkleinern, indem Sie den Temp-Ordner in AppData\\Local leeren, Anwendungs-Caches bereinigen und Ordner löschen, die von längst deinstallierten Programmen zurückgeblieben sind. Was Sie niemals tun sollten: den gesamten AppData-Ordner löschen — denn er enthält auch die Einstellungen, Profile und gespeicherten Daten, die Ihre installierten Programme zum Laufen brauchen.',
        'In diesem Leitfaden erklären wir zunächst die drei Unterordner Local, LocalLow und Roaming, ziehen dann eine klare Grenze zwischen sicher löschbaren und unantastbaren Daten, bereinigen Temp und App-Caches Schritt für Schritt, entfernen Reste deinstallierter Programme und automatisieren die Bereinigung, damit AppData nie wieder ausufert.',
      ],
      sections: [
        {
          title: 'Was ist der AppData-Ordner? Local, LocalLow und Roaming erklärt',
          content: [
            'AppData ist ein versteckter Ordner unter jedem Windows-Benutzerkonto, zu finden unter C:\\Users\\IhrName\\AppData. Um ihn zu sehen, aktivieren Sie im Datei-Explorer über das Menü Ansicht die Option Ausgeblendete Elemente. Schneller geht es mit Win+R und der Eingabe von %appdata%, die Sie direkt in den Unterordner Roaming führt.',
            'Die drei Unterordner haben klar getrennte Aufgaben. Local speichert Daten, die nur zu diesem PC gehören: Anwendungs-Caches, temporäre Dateien und der Temp-Ordner liegen hier — meist ist es der mit Abstand größte Bereich. LocalLow gehört Apps mit eingeschränkten Rechten, etwa Browsern im geschützten Modus, und bleibt in der Regel klein. Roaming enthält Einstellungen, die Sie begleiten sollen: Browserprofile, App-Konfigurationen und die Spielstände vieler Spiele.',
            'Diese Unterscheidung ist der Kompass der gesamten Bereinigung: Der meiste gefahrlos löschbare Ballast sammelt sich in Local, die meisten schützenswerten Daten liegen in Roaming.',
          ],
        },
        {
          title: 'Warum AppData unbemerkt auf Dutzende Gigabyte anwächst',
          content: [
            'Moderne Anwendungen cachen aggressiv: Messenger, Desktop-Clients für Musik- und Videoplattformen, Videokonferenz-Tools und Code-Editoren können jeweils Hunderte Megabyte bis mehrere Gigabyte unter AppData ansammeln. Dazu kommen alte Installationsdateien von Update-Programmen, ständig wachsende Protokolldateien und Absturzabbilder in %localappdata%\\CrashDumps.',
            'Windows räumt davon fast nichts selbst auf. Die Speicheroptimierung entfernt nur einen Teil der temporären Dateien und lässt App-Caches sowie verwaiste Ordner unberührt. Deinstallationsprogramme lassen Einstellungsordner oft absichtlich zurück, damit Ihre Einstellungen eine Neuinstallation überleben. So wird AppData über die Jahre zur Abstellkammer, in die niemand hineinschaut.',
            'Die Gesamtgröße prüfen Sie per Rechtsklick auf AppData und Eigenschaften — welcher Unterordner das Problem ist, verrät das jedoch nicht. Disk Mops Festplattenanalyse (Disk Analysis) scannt das Laufwerk als visuelle Treemap und zeigt die größten Ordner in AppData auf einen Blick.',
          ],
        },
        {
          title: 'Kann ich AppData löschen? Was sicher ist — und was nicht',
          content: [
            'Die klare Antwort auf eine häufige Frage: Nein, der AppData-Ordner darf nicht als Ganzes gelöscht werden. Sonst verlieren installierte Programme ihre Einstellungen, Sitzungen, Lizenzdaten und gespeicherten Inhalte; viele starten danach gar nicht mehr oder im Werkszustand. Richtig ist, gezielt entbehrliche Inhalte zu entfernen.',
            'Sicher löschbar sind: der Inhalt von %localappdata%\\Temp; Unterordner mit Namen wie Cache oder GPUCache im Ordner einer vollständig geschlossenen App; alte Absturzabbilder in %localappdata%\\CrashDumps; sowie komplette Ordner von Programmen, deren Deinstallation Sie überprüft haben. Caches baut jede App beim nächsten Start neu auf — es gehen keine echten Daten verloren.',
            'Nicht anfassen sollten Sie: den Microsoft-Ordner in Roaming (Office-Vorlagen, E-Mail-Signaturen, Windows-Profildaten), Browserprofil-Ordner (Lesezeichen, gespeicherte Passwörter, Erweiterungen) und jeden Ordner einer noch genutzten App, der nicht eindeutig ein Cache ist. Im Zweifel nicht löschen, sondern umbenennen: Hängen Sie .old an und warten Sie eine Woche — meldet sich keine App, kann der Ordner weg.',
          ],
        },
        {
          title: 'Den AppData-Temp-Ordner und App-Caches Schritt für Schritt leeren',
          content: [
            'Der schnellste Erfolg wartet im Temp-Ordner: Drücken Sie Win+R, geben Sie %localappdata%\\Temp ein und bestätigen Sie mit Enter. Markieren Sie alles mit Strg+A und löschen Sie es; bei Dateien, die gerade in Benutzung sind, klicken Sie einfach auf Überspringen. Leeren Sie danach den Papierkorb, damit der Platz tatsächlich frei wird.',
            'Auch Windows selbst bietet eine Bereinigung: Öffnen Sie die Einstellungen, gehen Sie zu System, dann Speicher, und klicken Sie auf Temporäre Dateien. Diese Ansicht gibt es unter Windows 10 und Windows 11; sie erfasst auch Windows-Update-Reste — Häkchen prüfen und auf Dateien entfernen klicken.',
            'App-Caches leeren Sie manuell, indem Sie die App vollständig schließen (auch im Infobereich), ihren Ordner unter %localappdata% oder %appdata% öffnen und nur den Inhalt von Unterordnern namens Cache oder GPUCache löschen. Wem das pro App zu mühsam ist: Disk Mops Cache-Bereiniger (Cache Cleaner) findet System- und Anwendungs-Caches in einem Durchgang, der Browser-Cache-Bereiniger deckt Chrome, Firefox und Edge ab, und die Beschleunigen-Funktion (Speed Up) erledigt alte Downloads, System-Cache, Browser-Cache und Papierkorb mit einem Klick.',
          ],
        },
        {
          title: 'Reste deinstallierter Programme aus Roaming und Local entfernen',
          content: [
            'Der am häufigsten übersehene Grund für ein wachsendes AppData sind Ordner deinstallierter Programme. Beim Entfernen eines Programms bleiben sein Einstellungsordner in Roaming und sein Cache-Ordner in Local meist zurück. Über Jahre können die Überreste Dutzender längst aufgegebener Apps Gigabytes belegen.',
            'Zur manuellen Kontrolle öffnen Sie %appdata% und %localappdata%, sortieren die Ordner nach Namen und vergleichen jeden App- oder Herstellernamen mit der Liste der installierten Apps in den Einstellungen. Ist ein Programm nicht mehr installiert, kann sein Ordner weg. Achtung nur bei Herstellerordnern: Sie können auch Daten eines anderen, noch genutzten Programms desselben Anbieters enthalten.',
            'Disk Mop nimmt dieser Suche das Rätselraten: In der Treemap der Festplattenanalyse stechen große verwaiste Ordner sofort hervor, und der Große-Dateien-Finder markiert Dateien über 500 MB selbst tief in AppData.',
          ],
        },
        {
          title: 'AppData-Bereinigung automatisieren, damit der Ordner schlank bleibt',
          content: [
            'Eine einmalige Bereinigung verpufft nach wenigen Monaten — die dauerhafte Lösung ist Automatisierung. Aktivieren Sie unter Einstellungen, System, Speicher die Speicheroptimierung und legen Sie fest, wie oft temporäre Dateien gelöscht werden. Das ist eine gute Basis, erreicht aber weder App-Caches noch Programmreste.',
            'Genau diese Lücke schließt Disk Mops geplante Bereinigung (Scheduled Cleanup): Wöchentliche oder monatliche Aufgaben bereinigen Caches, entfernen temporäre Dateien und leeren den Papierkorb automatisch. Der Systemzustands-Score (System Health Score) zeigt auf einen Blick, wann Ihre Festplatte Aufmerksamkeit braucht. Ergänzen Sie das um eine kleine Gewohnheit: alle paar Monate Programmreste prüfen und bei knapper werdendem Speicherplatz eine Festplattenanalyse starten.',
          ],
        },
      ],
      verdict: [
        'Ein großer AppData-Ordner ist keine Fehlfunktion, sondern die natürliche Folge aggressiven App-Cachings — unkontrolliertes Wachstum müssen Sie deshalb aber nicht hinnehmen. Die Karte von Local, LocalLow und Roaming kennen, Temp und Caches leeren, Reste deinstallierter Programme entfernen und den Ordner niemals als Ganzes löschen: Mit diesen vier Prinzipien gewinnen Sie sicher Gigabytes zurück.',
        'Disk Mop vereint alle Schritte dieses Leitfadens in einer App: Die Festplattenanalyse zeigt aufgeblähte Ordner, der Cache-Bereiniger entfernt System- und App-Caches sicher, und die geplante Bereinigung verhindert, dass sich AppData erneut füllt. Die einmalige Lizenz für $9.90 gilt lebenslang unter Windows 10, Windows 11 und macOS.',
      ],
      ctaText: 'Bereinigen Sie Ihren AppData-Ordner mit Disk Mop',
    },
  },
};
