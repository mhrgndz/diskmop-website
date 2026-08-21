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
        'Disk Mop, bu rehberdeki tüm adımları tek uygulamada birleştirir: disk analizi şişen klasörleri gösterir, önbellek temizleyici sistem ve uygulama önbelleklerini güvenle siler, zamanlanmış temizlik ise AppData\'nın yeniden birikmesini engeller. Tek seferlik $19.90 lisansla ömür boyu kullanabilir, Windows 10, Windows 11 ve macOS üzerinde çalıştırabilirsiniz.',
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
        'Disk Mop brings every step of this guide into one app: Disk Analysis shows you which folders have ballooned, Cache Cleaner safely clears system and application caches, and Scheduled Cleanup stops AppData from piling up again. A one-time $19.90 license covers lifetime use on Windows 10, Windows 11 and macOS.',
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
            'App-Caches leeren Sie manuell, indem Sie die App vollständig schließen (auch im Infobereich), ihren Ordner unter %localappdata% oder %appdata% öffnen und nur den Inhalt von Unterordnern namens Cache oder GPUCache löschen. Beim nächsten Start legt die App diese Ordner automatisch neu an.',
            'Wem das pro App zu mühsam ist: Disk Mops Cache-Bereiniger (Cache Cleaner) findet System- und Anwendungs-Caches in einem Durchgang und zeigt genau, was sich gefahrlos entfernen lässt. Der Browser-Cache-Bereiniger deckt Chrome, Firefox und Edge ab, und die Beschleunigen-Funktion (Speed Up) erledigt alte Downloads, System-Cache, Browser-Cache und Papierkorb mit einem Klick.',
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
            'Genau diese Lücke schließt Disk Mops geplante Bereinigung (Scheduled Cleanup): Wöchentliche oder monatliche Aufgaben bereinigen Caches, entfernen temporäre Dateien und leeren den Papierkorb automatisch. Der Systemzustands-Score (System Health Score) zeigt auf einen Blick, wann Ihre Festplatte Aufmerksamkeit braucht — so füllt sich AppData nicht mehr unbemerkt.',
            'Ergänzen Sie das um eine kleine Gewohnheit: Prüfen Sie alle paar Monate die Reste deinstallierter Programme und starten Sie eine Festplattenanalyse, sobald der freie Speicherplatz auf Laufwerk C: knapper wird. Zusammen halten beide AppData dauerhaft unter Kontrolle.',
          ],
        },
      ],
      verdict: [
        'Ein großer AppData-Ordner ist keine Fehlfunktion, sondern die natürliche Folge aggressiven App-Cachings — unkontrolliertes Wachstum müssen Sie deshalb aber nicht hinnehmen. Die Karte von Local, LocalLow und Roaming kennen, Temp und Caches leeren, Reste deinstallierter Programme entfernen und den Ordner niemals als Ganzes löschen: Mit diesen vier Prinzipien gewinnen Sie sicher Gigabytes zurück.',
        'Disk Mop vereint alle Schritte dieses Leitfadens in einer App: Die Festplattenanalyse zeigt aufgeblähte Ordner, der Cache-Bereiniger entfernt System- und App-Caches sicher, und die geplante Bereinigung verhindert, dass sich AppData erneut füllt. Die einmalige Lizenz für 19,90 $ gilt lebenslang unter Windows 10, Windows 11 und macOS.',
      ],
      ctaText: 'Bereinigen Sie Ihren AppData-Ordner mit Disk Mop',
    },
    fr: {
      title: "Dossier AppData trop volumineux ? Comment le nettoyer sans risque",
      metaDescription:
        "Votre dossier AppData est trop volumineux ? Découvrez ce qui peut être supprimé sans risque dans Local, LocalLow et Roaming, et videz Temp et les caches.",
      subtitle: "La carte du sûr et du risqué pour les trois sous-dossiers d'AppData",
      intro: [
        "Votre dossier AppData est-il devenu trop volumineux ? Dans la plupart des cas, vous pouvez le réduire sans risque en trois gestes : vider le dossier Temp situé dans AppData\\Local, effacer les caches des applications et supprimer les dossiers laissés derrière eux par des programmes que vous avez déjà désinstallés. Ce qu'il ne faut jamais faire, en revanche, c'est supprimer l'intégralité du dossier AppData : il contient aussi les réglages, les profils et les données enregistrées dont vos applications installées ont besoin pour fonctionner.",
        "Dans ce guide, nous expliquons d'abord à quoi servent réellement les trois sous-dossiers d'AppData (Local, LocalLow et Roaming), puis nous traçons une carte claire de ce qui peut être supprimé sans danger et de ce à quoi il ne faut surtout pas toucher. Vous viderez le dossier Temp et les caches applicatifs étape par étape, vous débusquerez les résidus des programmes désinstallés que la plupart des guides ignorent, et vous finirez par automatiser le nettoyage pour qu'AppData ne gonfle plus jamais jusqu'à des dizaines de gigaoctets.",
      ],
      sections: [
        {
          title: "Qu'est-ce que le dossier AppData ? Local, LocalLow et Roaming expliqués",
          content: [
            "AppData est un dossier masqué présent sous chaque compte utilisateur Windows, à l'emplacement C:\\Users\\VotreNom\\AppData. Comme il est masqué par défaut, vous devez activer l'option Éléments masqués depuis le menu Affichage de l'Explorateur de fichiers pour le voir. Plus rapide encore : appuyez sur Win+R et tapez %appdata%, ce qui vous conduit directement dans le sous-dossier Roaming.",
            "AppData contient trois sous-dossiers, chacun avec un rôle bien distinct. Local conserve les données propres à ce PC : caches applicatifs, fichiers temporaires et dossier Temp s'y trouvent, et c'est de loin le plus volumineux des trois. LocalLow stocke les données des applications qui s'exécutent avec des autorisations restreintes, comme les navigateurs en mode protégé et certains jeux ; il reste petit sur la plupart des systèmes. Roaming, enfin, héberge les réglages censés vous suivre : profils de navigateur, configurations d'applications et sauvegardes de nombreux jeux.",
            "Garder cette distinction en tête, c'est la boussole de tout le nettoyage : l'essentiel de ce qui peut être supprimé sans risque s'accumule dans Local, tandis que la majorité des données à protéger se trouve dans Roaming. Chacune des étapes suivantes de ce guide suit cette carte.",
          ],
        },
        {
          title: "Pourquoi AppData grossit discrètement jusqu'à des dizaines de gigaoctets",
          content: [
            "Les applications modernes mettent tout en cache, et de façon agressive. Messageries, clients de bureau des plateformes de musique et de vidéo, outils de visioconférence, éditeurs de code : chacun peut accumuler de quelques centaines de mégaoctets à plusieurs gigaoctets sous AppData. À cela s'ajoutent les anciens fichiers d'installation conservés par les utilitaires de mise à jour, les journaux que les applications écrivent en continu et les rapports de plantage qui s'entassent dans %localappdata%\\CrashDumps.",
            "Le vrai problème, c'est que Windows n'en nettoie presque rien de lui-même. L'Assistant Stockage peut supprimer certains fichiers temporaires, mais il ne touche jamais aux caches applicatifs ni aux dossiers orphelins. Les programmes de désinstallation laissent souvent les dossiers de réglages en place, volontairement, pour que vos préférences survivent à une réinstallation. Résultat : au fil des années, AppData se transforme en débarras que personne n'inspecte jamais.",
            "Pour faire le point, cliquez avec le bouton droit sur le dossier AppData et choisissez Propriétés afin d'en connaître la taille totale — cela ne vous dira pourtant pas quel sous-dossier pèse le plus lourd. L'analyse de disque (Disk Analysis) de Disk Mop scanne votre lecteur et l'affiche sous forme de treemap visuelle qui révèle instantanément les plus gros dossiers à l'intérieur d'AppData : vous savez ainsi exactement par où commencer.",
          ],
        },
        {
          title: "Peut-on supprimer AppData ? Ce qui est sûr et ce qui ne l'est pas",
          content: [
            "Réponse directe à une question très fréquente : non, le dossier AppData ne se supprime pas en bloc. Effacez-le et vos applications installées perdent leurs réglages, leurs sessions, leurs données de licence et votre travail enregistré ; beaucoup refuseront de démarrer ou s'ouvriront comme au premier jour. La bonne approche consiste à cibler des éléments précis et jetables à l'intérieur, jamais le dossier lui-même.",
            "Ce que vous pouvez supprimer sans risque : le contenu de %localappdata%\\Temp ; les sous-dossiers portant littéralement le nom Cache ou GPUCache dans le dossier d'une application, à condition que celle-ci soit complètement fermée ; les anciens rapports de plantage dans %localappdata%\\CrashDumps ; et les dossiers entiers des programmes dont vous avez vérifié qu'ils ne sont plus installés. Les applications reconstruisent leurs caches au démarrage suivant : vider un cache ne vous coûte donc jamais de véritables données.",
            "Ce à quoi il ne faut pas toucher : le dossier Microsoft situé dans Roaming, qui contient les modèles Office, les signatures de messagerie et les données de profil Windows ; les dossiers de profil des navigateurs, où résident vos favoris, vos mots de passe enregistrés et vos extensions ; et tout dossier appartenant à une application que vous utilisez encore, sauf s'il s'agit manifestement d'un simple cache. En cas de doute, ne supprimez pas : renommez le dossier en ajoutant .old à la fin et attendez une semaine. Si rien ne se plaint, vous pouvez l'effacer en toute tranquillité.",
          ],
        },
        {
          title: "Videz le dossier Temp d'AppData Local et les caches applicatifs, étape par étape",
          content: [
            "Le gain le plus rapide se trouve dans le dossier Temp. Appuyez sur Win+R, tapez %localappdata%\\Temp et validez avec Entrée. Dans le dossier qui s'ouvre, sélectionnez tout avec Ctrl+A et supprimez ; lorsque Windows signale que certains fichiers sont en cours d'utilisation, cliquez simplement sur Ignorer. Videz ensuite la Corbeille pour que l'espace soit réellement récupéré.",
            "Windows dispose aussi d'un nettoyage intégré qui atteint les données temporaires du système : ouvrez les Paramètres, allez dans Système, puis Stockage, et cliquez sur Fichiers temporaires. Cet écran, disponible aussi bien sous Windows 10 que sous Windows 11, liste des éléments comme les résidus de Windows Update et les fichiers d'optimisation de la distribution — vérifiez les cases puis cliquez sur Supprimer les fichiers.",
            "Pour vider manuellement le cache d'une application, fermez-la d'abord complètement (vérifiez la zone de notification, car beaucoup d'applications continuent d'y tourner), puis ouvrez son dossier sous %localappdata% ou %appdata% et supprimez uniquement le contenu des sous-dossiers nommés Cache ou GPUCache. L'application les recrée automatiquement au prochain lancement.",
            "Si répéter l'opération pour chaque application vous semble fastidieux, le nettoyeur de cache (Cache Cleaner) de Disk Mop trouve les caches système et applicatifs en une seule analyse et montre exactement ce qui peut être supprimé sans risque. Son nettoyeur de cache navigateur (Browser Cache Cleaner) couvre Chrome, Firefox et Edge, et la fonction Accélérer (Speed Up) efface anciens téléchargements, cache système, cache navigateur et Corbeille en un clic.",
          ],
        },
        {
          title: "Supprimez les résidus des programmes désinstallés dans Roaming et Local",
          content: [
            "La raison la plus négligée de la croissance continue d'AppData, c'est la traînée de dossiers laissée par les programmes désinstallés. Quand vous supprimez un programme, son dossier de réglages dans Roaming et son dossier de cache dans Local restent le plus souvent exactement là où ils étaient. Au fil des années, les restes de dizaines d'applications abandonnées depuis longtemps peuvent retenir plusieurs gigaoctets en otage.",
            "Pour vérifier manuellement, ouvrez %appdata% et %localappdata% puis triez les dossiers par nom. Comparez chaque nom d'application ou d'éditeur que vous y voyez avec la liste Applications installées, dans Paramètres puis Applications. Si un programme n'est plus installé, son dossier peut disparaître. Attention toutefois à un piège : certains dossiers portent un nom d'éditeur plutôt qu'un nom d'application, et le même dossier d'éditeur peut aussi contenir les données d'un autre de ses programmes que vous utilisez encore.",
            "Disk Mop supprime toute part de devinette dans cette chasse : dans la treemap de l'analyse de disque, les gros dossiers orphelins sautent immédiatement aux yeux, et le détecteur de gros fichiers (Large File Finder) signale les fichiers de plus de 500 Mo, même cachés au plus profond d'AppData. Au lieu de deviner quels résidus comptent vraiment, vous les voyez.",
          ],
        },
        {
          title: "Automatisez le nettoyage d'AppData pour qu'il ne regonfle jamais",
          content: [
            "Un nettoyage ponctuel perd son effet en quelques mois ; la solution durable, c'est l'automatisation. Côté Windows, ouvrez les Paramètres, allez dans Système, puis Stockage, et activez l'Assistant Stockage, où vous choisissez la fréquence de suppression des fichiers temporaires. C'est une bonne base — mais elle ne touche ni aux caches applicatifs ni aux résidus des programmes désinstallés.",
            "Le nettoyage planifié (Scheduled Cleanup) de Disk Mop comble précisément cette lacune : vous créez des tâches hebdomadaires ou mensuelles qui nettoient automatiquement les caches, effacent les fichiers temporaires et vident la Corbeille. Le score de santé du système (System Health Score) indique d'un coup d'œil quand votre disque réclame de l'attention, si bien qu'AppData ne peut plus regonfler en silence pendant que vous avez le dos tourné.",
            "Associez à cette automatisation une petite habitude : tous les deux ou trois mois, passez en revue les résidus des programmes désinstallés, et lancez une analyse de disque dès que l'espace libre du lecteur C: commence à se réduire. Ensemble, les deux gardent AppData durablement sous contrôle.",
          ],
        },
      ],
      verdict: [
        "Un dossier AppData surdimensionné n'est pas une panne : c'est la conséquence naturelle de l'appétit des applications modernes pour le cache. Cela ne signifie pas pour autant qu'il faille accepter une croissance sans limite. Apprenez la carte de Local, LocalLow et Roaming, videz Temp et les caches, supprimez les résidus des programmes désinstallés et ne supprimez jamais le dossier dans son ensemble : appliquez ces quatre principes et vous récupérerez des gigaoctets en toute sécurité.",
        "Disk Mop réunit chaque étape de ce guide dans une seule application : l'analyse de disque montre quels dossiers ont gonflé, le nettoyeur de cache efface sans risque les caches système et applicatifs, et le nettoyage planifié empêche AppData de s'accumuler à nouveau. Une licence unique à 19,90 $ couvre une utilisation à vie sous Windows 10, Windows 11 et macOS.",
      ],
      ctaText: "Nettoyez votre dossier AppData avec Disk Mop",
    },
    es: {
      title: "¿Carpeta AppData demasiado grande? Cómo limpiarla sin riesgos",
      metaDescription:
        "¿Tu carpeta AppData es demasiado grande? Descubre qué se puede borrar sin riesgo en Local, LocalLow y Roaming, vacía Temp y las cachés de las aplicaciones.",
      subtitle: "El mapa de lo seguro y lo arriesgado en las tres subcarpetas de AppData",
      intro: [
        "¿Tu carpeta AppData ha crecido demasiado? En la mayoría de los casos puedes reducirla sin riesgo con tres gestos: vaciar la carpeta Temp que hay dentro de AppData\\Local, borrar las cachés de las aplicaciones y eliminar las carpetas que dejaron atrás los programas que ya desinstalaste. Lo que nunca debes hacer es borrar la carpeta AppData entera, porque también guarda la configuración, los perfiles y los datos guardados que tus aplicaciones instaladas necesitan para funcionar.",
        "En esta guía explicamos primero para qué sirven realmente las tres subcarpetas de AppData (Local, LocalLow y Roaming) y después trazamos un mapa claro de lo que se puede borrar sin peligro y de lo que conviene no tocar. Vaciarás la carpeta Temp y las cachés de las aplicaciones paso a paso, localizarás los restos de programas desinstalados que casi ninguna guía menciona y, por último, automatizarás la limpieza para que AppData no vuelva a dispararse hasta decenas de gigabytes.",
      ],
      sections: [
        {
          title: "¿Qué es la carpeta AppData? Local, LocalLow y Roaming explicados",
          content: [
            "AppData es una carpeta oculta que existe en cada cuenta de usuario de Windows, en la ruta C:\\Users\\TuNombre\\AppData. Como está oculta de forma predeterminada, para verla tienes que activar Elementos ocultos en el menú Vista del Explorador de archivos. Hay un atajo más rápido: pulsa Win+R y escribe %appdata%, y llegarás directamente a la subcarpeta Roaming.",
            "AppData tiene tres subcarpetas y cada una cumple una función distinta. Local guarda los datos ligados a este equipo concreto: aquí están las cachés de las aplicaciones, los archivos temporales y la carpeta Temp, y suele ser con diferencia la más voluminosa de las tres. LocalLow almacena los datos de las aplicaciones que se ejecutan con permisos restringidos, como los navegadores en modo protegido y algunos juegos, y en la mayoría de los sistemas se mantiene pequeña. Roaming contiene la configuración pensada para acompañarte: perfiles del navegador, ajustes de aplicaciones y las partidas guardadas de muchos juegos.",
            "Tener presente esta distinción es la brújula de toda la limpieza: casi toda la basura que se puede eliminar sin riesgo se acumula en Local, mientras que la mayoría de los datos que quieres proteger están en Roaming. Cada paso del resto de la guía sigue ese mapa.",
          ],
        },
        {
          title: "Por qué AppData crece en silencio hasta decenas de gigabytes",
          content: [
            "Las aplicaciones modernas usan la caché de forma agresiva. Las apps de mensajería, los clientes de escritorio de las plataformas de música y vídeo, las herramientas de videoconferencia y los editores de código pueden acumular cada una desde cientos de megabytes hasta varios gigabytes dentro de AppData. A eso se suman los instaladores antiguos que conservan los actualizadores, los registros que las aplicaciones escriben sin parar y los volcados de fallos que se amontonan en %localappdata%\\CrashDumps.",
            "El problema mayor es que Windows casi no limpia nada de esto por su cuenta. El Sensor de almacenamiento puede eliminar algunos archivos temporales, pero nunca toca las cachés de las aplicaciones ni las carpetas huérfanas. Los desinstaladores dejan a menudo las carpetas de configuración a propósito, para que tus preferencias sobrevivan si algún día reinstalas. El resultado es que, con los años, AppData se convierte en un trastero que nadie revisa.",
            "Para saber en qué punto estás, haz clic con el botón derecho en la carpeta AppData y elige Propiedades para ver su tamaño total, aunque eso no te dirá cuál de las subcarpetas es la pesada. El análisis de disco (Disk Analysis) de Disk Mop escanea la unidad con un treemap visual que revela al instante las carpetas más grandes dentro de AppData, así sabes exactamente por dónde empezar.",
          ],
        },
        {
          title: "¿Se puede borrar AppData? Qué es seguro y qué no",
          content: [
            "La respuesta directa a una pregunta muy habitual: no, la carpeta AppData no se puede borrar entera. Si la eliminas, tus aplicaciones instaladas pierden su configuración, sus sesiones, sus datos de licencia y el trabajo guardado; muchas se negarán a arrancar o se abrirán como recién instaladas. El enfoque correcto es apuntar a elementos concretos y prescindibles de su interior, nunca a la carpeta en sí.",
            "Se puede borrar sin riesgo: el contenido de %localappdata%\\Temp; las subcarpetas que se llaman literalmente Cache o GPUCache dentro de la carpeta de una aplicación, siempre que esa aplicación esté completamente cerrada; los volcados de fallos antiguos de %localappdata%\\CrashDumps; y las carpetas completas de programas que hayas comprobado que ya no están instalados. Las aplicaciones reconstruyen sus cachés en el siguiente arranque, así que vaciar una caché nunca te cuesta datos reales.",
            "No se debe borrar: la carpeta Microsoft que hay dentro de Roaming, donde se guardan las plantillas de Office, las firmas de correo y los datos de perfil de Windows; las carpetas de perfil de los navegadores, con tus marcadores, contraseñas guardadas y extensiones; y cualquier carpeta de una aplicación que sigas usando, salvo que sea claramente una caché. Si tienes dudas sobre una carpeta, no la borres: cámbiale el nombre añadiendo .old al final y espera una semana. Si nada se queja, ya puedes eliminarla con tranquilidad.",
          ],
        },
        {
          title: "Vacía la carpeta Temp de AppData Local y las cachés de las aplicaciones paso a paso",
          content: [
            "La victoria más rápida está en la carpeta Temp. Pulsa Win+R, escribe %localappdata%\\Temp y pulsa Intro. En la carpeta que se abre, selecciona todo con Ctrl+A y bórralo; cuando Windows avise de que algunos archivos están en uso, basta con hacer clic en Omitir. Vacía después la Papelera de reciclaje para que el espacio se libere de verdad.",
            "Windows también incluye una limpieza propia que llega a los datos temporales del sistema: abre Configuración, entra en Sistema y luego en Almacenamiento, y haz clic en Archivos temporales. Esta pantalla, disponible tanto en Windows 10 como en Windows 11, muestra elementos como los restos de Windows Update y los archivos de optimización de entrega; revisa las casillas y pulsa Quitar archivos.",
            "Para vaciar a mano la caché de una aplicación concreta, ciérrala del todo primero (comprueba el área de notificación, porque muchas siguen funcionando ahí), abre después su carpeta en %localappdata% o %appdata% y borra únicamente el contenido de las subcarpetas llamadas Cache o GPUCache. La aplicación las vuelve a crear sola la próxima vez que se inicia.",
            "Si repetir esto con cada aplicación te parece pesado, el limpiador de caché (Cache Cleaner) de Disk Mop encuentra las cachés del sistema y de las aplicaciones en un solo análisis y muestra exactamente qué se puede eliminar sin riesgo. Su limpiador de caché del navegador (Browser Cache Cleaner) cubre Chrome, Firefox y Edge, y la función Acelerar (Speed Up) borra en un clic las descargas antiguas, la caché del sistema, la caché del navegador y la papelera de reciclaje.",
          ],
        },
        {
          title: "Elimina los restos de programas desinstalados en Roaming y Local",
          content: [
            "El motivo que más se pasa por alto cuando AppData no deja de crecer es el rastro de carpetas que dejan los programas desinstalados. Cuando quitas un programa, su carpeta de configuración en Roaming y su carpeta de caché en Local suelen quedarse justo donde estaban. Con los años, los restos de decenas de aplicaciones que abandonaste hace mucho pueden retener gigabytes enteros.",
            "Para comprobarlo a mano, abre %appdata% y %localappdata% y ordena las carpetas por nombre. Compara cada nombre de aplicación o de fabricante que veas con la lista Aplicaciones instaladas de Configuración, en la sección Aplicaciones. Si un programa ya no está instalado, su carpeta puede irse. Solo cuidado con una trampa: algunas carpetas llevan el nombre del fabricante y no el de la aplicación, y esa misma carpeta puede contener también los datos de otro programa suyo que sigues usando.",
            "Disk Mop elimina las conjeturas de esta búsqueda: en el treemap del análisis de disco, las carpetas huérfanas grandes destacan de inmediato, y el buscador de archivos grandes (Large File Finder) señala los archivos de más de 500 MB aunque estén escondidos en lo más profundo de AppData. En lugar de adivinar qué restos importan de verdad, los ves.",
          ],
        },
        {
          title: "Automatiza la limpieza de AppData para que no vuelva a dispararse",
          content: [
            "Una limpieza puntual pierde su efecto en pocos meses; la solución duradera es la automatización. Por el lado de Windows, abre Configuración, entra en Sistema y luego en Almacenamiento y activa el Sensor de almacenamiento, donde puedes elegir cada cuánto se borran los archivos temporales. Es una buena base, pero no toca las cachés de las aplicaciones ni los restos de los programas desinstalados.",
            "La limpieza programada (Scheduled Cleanup) de Disk Mop cubre justo ese hueco: puedes crear tareas semanales o mensuales que limpien las cachés, eliminen los archivos temporales y vacíen la papelera de reciclaje de forma automática. La puntuación de salud del sistema (System Health Score) muestra de un vistazo cuándo tu disco necesita atención, así que AppData ya no puede volver a inflarse en silencio mientras miras hacia otro lado.",
            "Acompaña la automatización con un pequeño hábito: cada pocos meses, revisa los restos de los programas desinstalados y lanza un análisis de disco en cuanto el espacio libre de la unidad C: empiece a menguar. Juntos mantienen AppData controlada de forma permanente.",
          ],
        },
      ],
      verdict: [
        "Una carpeta AppData enorme no es un fallo: es la consecuencia natural de lo agresivas que son las aplicaciones modernas con la caché. Pero que crezca sin límite no es algo que tengas que aceptar. Aprende el mapa de Local, LocalLow y Roaming, vacía Temp y las cachés, elimina los restos de los programas desinstalados y no borres nunca la carpeta entera: con esos cuatro principios recuperarás gigabytes sin correr riesgos.",
        "Disk Mop reúne todos los pasos de esta guía en una sola aplicación: el análisis de disco te enseña qué carpetas se han disparado, el limpiador de caché borra sin riesgo las cachés del sistema y de las aplicaciones, y la limpieza programada evita que AppData vuelva a acumularse. Una licencia única de 19,90 $ cubre el uso de por vida en Windows 10, Windows 11 y macOS.",
      ],
      ctaText: "Limpia tu carpeta AppData con Disk Mop",
    },
    it: {
      title: "Cartella AppData troppo grande? Come svuotarla in sicurezza",
      metaDescription:
        "La cartella AppData è troppo grande? Scopri cosa si può eliminare senza rischi in Local, LocalLow e Roaming, svuota Temp e le cache delle applicazioni.",
      subtitle: "La mappa di ciò che è sicuro e di ciò che non lo è nelle tre sottocartelle di AppData",
      intro: [
        "La tua cartella AppData è diventata troppo grande? Nella maggior parte dei casi puoi ridurla in sicurezza con tre mosse: svuotare la cartella Temp che si trova dentro AppData\\Local, cancellare le cache delle applicazioni ed eliminare le cartelle lasciate indietro dai programmi che hai già disinstallato. Quello che non devi mai fare è eliminare l'intera cartella AppData, perché contiene anche le impostazioni, i profili e i dati salvati di cui le tue applicazioni hanno bisogno per funzionare.",
        "In questa guida spieghiamo prima a cosa servono davvero le tre sottocartelle di AppData (Local, LocalLow e Roaming), poi tracciamo una mappa chiara di ciò che si può eliminare senza pericolo e di ciò che è meglio non toccare. Svuoterai la cartella Temp e le cache delle app passo dopo passo, andrai a caccia dei residui dei programmi disinstallati che quasi nessuna guida considera e infine automatizzerai la pulizia, così AppData non si gonfierà mai più fino a decine di gigabyte.",
      ],
      sections: [
        {
          title: "Che cos'è la cartella AppData? Local, LocalLow e Roaming spiegati",
          content: [
            "AppData è una cartella nascosta presente sotto ogni account utente di Windows, nel percorso C:\\Users\\TuoNome\\AppData. Poiché è nascosta per impostazione predefinita, per vederla devi attivare Elementi nascosti dal menu Visualizza di Esplora file. La via più rapida è premere Win+R e digitare %appdata%, che ti porta direttamente nella sottocartella Roaming.",
            "AppData contiene tre sottocartelle, ciascuna con un compito preciso. Local conserva i dati legati a questo specifico PC: qui si trovano le cache delle applicazioni, i file temporanei e la cartella Temp, ed è di gran lunga la più voluminosa delle tre. LocalLow ospita i dati delle app che girano con autorizzazioni limitate, come i browser in modalità protetta e alcuni giochi, e sulla maggior parte dei sistemi resta piccola. Roaming raccoglie invece le impostazioni pensate per seguirti: profili del browser, configurazioni delle applicazioni e i salvataggi di molti giochi.",
            "Tenere a mente questa distinzione è la bussola dell'intera pulizia: quasi tutto ciò che si può rimuovere senza rischi si accumula in Local, mentre la maggior parte dei dati da proteggere si trova in Roaming. Ogni passo del resto della guida segue questa mappa.",
          ],
        },
        {
          title: "Perché AppData cresce in silenzio fino a decine di gigabyte",
          content: [
            "Le applicazioni moderne usano la cache in modo aggressivo. App di messaggistica, client desktop delle piattaforme musicali e video, strumenti di videoconferenza ed editor di codice possono accumulare ciascuno da qualche centinaio di megabyte a diversi gigabyte dentro AppData. A questo si aggiungono i vecchi file di installazione conservati dagli aggiornatori, i log che le applicazioni scrivono senza sosta e i dump di arresto anomalo che si accatastano in %localappdata%\\CrashDumps.",
            "Il problema più grande è che Windows non pulisce quasi nulla di tutto ciò da solo. Il Sensore memoria può rimuovere alcuni file temporanei, ma non tocca mai le cache delle applicazioni né le cartelle orfane. I programmi di disinstallazione lasciano spesso indietro le cartelle delle impostazioni di proposito, così le tue preferenze sopravvivono a un'eventuale reinstallazione. Il risultato è che negli anni AppData diventa un ripostiglio che nessuno controlla mai.",
            "Per capire a che punto sei, fai clic con il tasto destro sulla cartella AppData e scegli Proprietà per vederne la dimensione totale, anche se questo non ti dirà quale sottocartella pesa di più. L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità con una treemap visiva che rivela all'istante le cartelle più grandi dentro AppData, così sai esattamente da dove cominciare.",
          ],
        },
        {
          title: "Si può eliminare AppData? Che cosa è sicuro e che cosa no",
          content: [
            "La risposta diretta a una domanda molto comune: no, la cartella AppData non si elimina per intero. Se la cancelli, le applicazioni installate perdono impostazioni, sessioni, dati di licenza e lavoro salvato; molte si rifiuteranno di avviarsi o si apriranno come appena installate. L'approccio corretto è colpire elementi specifici e sacrificabili al suo interno, mai la cartella in sé.",
            "Si possono eliminare senza rischi: il contenuto di %localappdata%\\Temp; le sottocartelle chiamate letteralmente Cache o GPUCache dentro la cartella di un'applicazione, purché quell'applicazione sia completamente chiusa; i vecchi dump di arresto anomalo in %localappdata%\\CrashDumps; e le cartelle complete dei programmi che hai verificato non essere più installati. Le applicazioni ricostruiscono le proprie cache al successivo avvio, quindi svuotare una cache non ti costa mai dati reali.",
            "Non vanno eliminati: la cartella Microsoft dentro Roaming, che conserva i modelli di Office, le firme della posta e i dati del profilo di Windows; le cartelle dei profili dei browser, dove vivono segnalibri, password salvate ed estensioni; e qualsiasi cartella appartenente a un'app che usi ancora, a meno che non sia chiaramente solo una cache. Se hai un dubbio su una cartella non cancellarla: rinominala aggiungendo .old alla fine e aspetta una settimana. Se nessuno protesta, puoi rimuoverla tranquillamente.",
          ],
        },
        {
          title: "Svuota la cartella Temp di AppData Local e le cache delle app passo dopo passo",
          content: [
            "Il risultato più rapido arriva dalla cartella Temp. Premi Win+R, digita %localappdata%\\Temp e premi Invio. Nella cartella che si apre seleziona tutto con Ctrl+A ed elimina; quando Windows segnala che alcuni file sono in uso, ti basta fare clic su Ignora. Svuota poi il Cestino, così lo spazio viene davvero recuperato.",
            "Anche Windows ha una pulizia integrata che arriva ai dati temporanei di sistema: apri le Impostazioni, vai su Sistema, poi su Archiviazione e fai clic su File temporanei. Questa schermata, presente sia in Windows 10 sia in Windows 11, elenca voci come i residui di Windows Update e i file di ottimizzazione recapito: controlla le caselle e premi Rimuovi file.",
            "Per svuotare a mano la cache di una singola app, chiudila prima del tutto (controlla l'area di notifica, perché molte continuano a girare lì), poi apri la sua cartella in %localappdata% o %appdata% ed elimina soltanto il contenuto delle sottocartelle chiamate Cache o GPUCache. L'applicazione le ricrea da sola al successivo avvio.",
            "Se ripetere l'operazione per ogni applicazione ti sembra faticoso, il pulitore della cache (Cache Cleaner) di Disk Mop trova le cache di sistema e delle applicazioni in una sola scansione e mostra con precisione che cosa si può rimuovere in sicurezza. Il pulitore della cache dei browser (Browser Cache Cleaner) copre Chrome, Firefox ed Edge, e la funzione Accelera (Speed Up) cancella con un clic i vecchi download, la cache di sistema, quella del browser e il cestino.",
          ],
        },
        {
          title: "Rimuovi i residui dei programmi disinstallati da Roaming e Local",
          content: [
            "Il motivo più trascurato della crescita continua di AppData è la scia di cartelle lasciata dai programmi disinstallati. Quando rimuovi un programma, la sua cartella delle impostazioni in Roaming e quella della cache in Local restano quasi sempre esattamente dove erano. Negli anni i resti di decine di app abbandonate da tempo possono tenere in ostaggio diversi gigabyte.",
            "Per controllare a mano, apri %appdata% e %localappdata% e ordina le cartelle per nome. Confronta ogni nome di applicazione o di produttore che vedi con l'elenco App installate in Impostazioni, sezione App. Se un programma non è più installato, la sua cartella può sparire. Attenzione solo a una trappola: alcune cartelle portano il nome del produttore invece di quello dell'app, e la stessa cartella può contenere anche i dati di un altro programma dello stesso produttore che usi ancora.",
            "Disk Mop toglie ogni congettura da questa caccia: nella treemap dell'analisi del disco le grandi cartelle orfane saltano subito all'occhio, e il cercatore di file di grandi dimensioni (Large File Finder) segnala i file oltre i 500 MB anche quando si nascondono nelle profondità di AppData. Invece di indovinare quali residui pesino davvero, li vedi.",
          ],
        },
        {
          title: "Automatizza la pulizia di AppData perché non si gonfi mai più",
          content: [
            "Una pulizia una tantum perde efficacia nel giro di pochi mesi; la soluzione duratura è l'automazione. Sul fronte Windows, apri le Impostazioni, vai su Sistema, poi su Archiviazione e attiva il Sensore memoria, dove puoi scegliere ogni quanto eliminare i file temporanei. È una buona base, ma non tocca le cache delle applicazioni né i residui dei programmi disinstallati.",
            "La pulizia pianificata (Scheduled Cleanup) di Disk Mop colma esattamente questa lacuna: puoi creare attività settimanali o mensili che puliscono le cache, rimuovono i file temporanei e svuotano il cestino in automatico. Il punteggio di salute del sistema (System Health Score) mostra a colpo d'occhio quando il disco ha bisogno di attenzione, così AppData non può più gonfiarsi in silenzio mentre guardi altrove.",
            "Affianca all'automazione una piccola abitudine: ogni pochi mesi ricontrolla i residui dei programmi disinstallati e avvia un'analisi del disco appena lo spazio libero sull'unità C: inizia a ridursi. Insieme tengono AppData sotto controllo in modo permanente.",
          ],
        },
      ],
      verdict: [
        "Una cartella AppData enorme non è un malfunzionamento: è la conseguenza naturale di quanto le app moderne usino la cache. Questo però non significa che la crescita senza limiti vada accettata. Impara la mappa di Local, LocalLow e Roaming, svuota Temp e le cache, rimuovi i residui dei programmi disinstallati e non eliminare mai la cartella per intero: applica questi quattro principi e recupererai gigabyte in tutta sicurezza.",
        "Disk Mop riunisce ogni passaggio di questa guida in un'unica applicazione: l'analisi del disco mostra quali cartelle si sono gonfiate, il pulitore della cache rimuove in sicurezza le cache di sistema e delle applicazioni, e la pulizia pianificata impedisce ad AppData di riaccumularsi. Una licenza una tantum da 19,90 $ copre l'uso a vita su Windows 10, Windows 11 e macOS.",
      ],
      ctaText: "Pulisci la tua cartella AppData con Disk Mop",
    },
    pt: {
      title: "Pasta AppData muito grande? Como limpar com segurança",
      metaDescription:
        "A pasta AppData está muito grande? Veja o que dá para apagar com segurança em Local, LocalLow e Roaming, limpe a pasta Temp e os caches dos aplicativos.",
      subtitle: "O mapa do que é seguro e do que não é nas três subpastas do AppData",
      intro: [
        "A sua pasta AppData ficou grande demais? Na maioria dos casos dá para reduzi-la com segurança em três movimentos: esvaziar a pasta Temp que fica dentro de AppData\\Local, limpar os caches dos aplicativos e apagar as pastas deixadas para trás por programas que você já desinstalou. O que você nunca deve fazer é apagar a pasta AppData inteira, porque ela também guarda as configurações, os perfis e os dados salvos de que os seus aplicativos precisam para funcionar.",
        "Neste guia explicamos primeiro para que servem de fato as três subpastas do AppData (Local, LocalLow e Roaming) e depois desenhamos um mapa claro do que pode ser apagado sem risco e do que é melhor não tocar. Você vai esvaziar a pasta Temp e os caches dos aplicativos passo a passo, caçar os restos de programas desinstalados que a maioria dos guias ignora e, por fim, automatizar a limpeza para que o AppData nunca mais chegue a dezenas de gigabytes.",
      ],
      sections: [
        {
          title: "O que é a pasta AppData? Local, LocalLow e Roaming explicados",
          content: [
            "AppData é uma pasta oculta que existe em toda conta de usuário do Windows, no caminho C:\\Users\\SeuNome\\AppData. Como ela fica oculta por padrão, para vê-la é preciso marcar Itens ocultos no menu Exibir do Explorador de Arquivos. Um caminho mais rápido é pressionar Win+R e digitar %appdata%, o que leva direto para a subpasta Roaming.",
            "O AppData tem três subpastas, cada uma com uma função bem definida. Local guarda os dados ligados a este PC específico: os caches dos aplicativos, os arquivos temporários e a pasta Temp ficam aqui, e costuma ser de longe a maior das três. LocalLow armazena dados de aplicativos que rodam com permissões restritas, como navegadores em modo protegido e alguns jogos, e permanece pequena na maioria dos sistemas. Roaming reúne as configurações feitas para acompanhar você: perfis de navegador, ajustes de aplicativos e os saves de muitos jogos.",
            "Ter essa diferença em mente é a bússola de toda a limpeza: quase todo o lixo que pode ser removido sem risco se acumula em Local, enquanto a maior parte dos dados que você quer proteger está em Roaming. Cada passo do restante do guia segue esse mapa.",
          ],
        },
        {
          title: "Por que o AppData cresce em silêncio até dezenas de gigabytes",
          content: [
            "Os aplicativos modernos usam cache de forma agressiva. Mensageiros, clientes de desktop de plataformas de música e vídeo, ferramentas de videoconferência e editores de código podem acumular, cada um, de centenas de megabytes a vários gigabytes dentro do AppData. Some a isso os instaladores antigos que os atualizadores guardam, os logs que os aplicativos escrevem sem parar e os despejos de falha que se empilham em %localappdata%\\CrashDumps.",
            "O problema maior é que o Windows quase não limpa nada disso sozinho. O Sensor de Armazenamento remove alguns arquivos temporários, mas nunca toca nos caches dos aplicativos nem nas pastas órfãs. Os desinstaladores costumam deixar as pastas de configuração de propósito, para que as suas preferências sobrevivam a uma reinstalação. O resultado é que, com os anos, o AppData vira um depósito que ninguém nunca abre.",
            "Para saber como está a situação, clique com o botão direito na pasta AppData e escolha Propriedades para ver o tamanho total, embora isso não revele qual subpasta é a pesada. A análise de disco (Disk Analysis) do Disk Mop varre a unidade com um treemap visual que mostra na hora as maiores pastas dentro do AppData, então você sabe exatamente por onde começar.",
          ],
        },
        {
          title: "Dá para apagar o AppData? O que é seguro e o que não é",
          content: [
            "A resposta direta para uma dúvida muito comum: não, a pasta AppData não pode ser apagada por inteiro. Se você apagar tudo, os aplicativos instalados perdem configurações, sessões, dados de licença e trabalho salvo; muitos vão se recusar a abrir ou vão abrir como recém-instalados. A abordagem certa é mirar itens específicos e descartáveis lá dentro, nunca a pasta em si.",
            "Pode apagar sem risco: o conteúdo de %localappdata%\\Temp; as subpastas chamadas literalmente Cache ou GPUCache dentro da pasta de um aplicativo, desde que ele esteja completamente fechado; os despejos de falha antigos em %localappdata%\\CrashDumps; e as pastas inteiras de programas que você confirmou não estarem mais instalados. Os aplicativos reconstroem os próprios caches na abertura seguinte, então limpar um cache nunca custa dados de verdade.",
            "Não apague: a pasta Microsoft dentro de Roaming, que guarda modelos do Office, assinaturas de e-mail e dados de perfil do Windows; as pastas de perfil dos navegadores, onde ficam favoritos, senhas salvas e extensões; e qualquer pasta de um aplicativo que você ainda usa, a não ser que seja claramente só um cache. Na dúvida sobre uma pasta, não apague: renomeie acrescentando .old ao final e espere uma semana. Se nada reclamar, pode remover com tranquilidade.",
          ],
        },
        {
          title: "Limpe a pasta Temp do AppData Local e os caches dos aplicativos passo a passo",
          content: [
            "O ganho mais rápido está na pasta Temp. Pressione Win+R, digite %localappdata%\\Temp e tecle Enter. Na pasta que abrir, selecione tudo com Ctrl+A e apague; quando o Windows avisar que alguns arquivos estão em uso, basta clicar em Ignorar. Depois esvazie a Lixeira para que o espaço seja realmente liberado.",
            "O Windows também tem uma limpeza embutida que alcança os dados temporários do sistema: abra as Configurações, vá em Sistema, depois Armazenamento, e clique em Arquivos temporários. Essa tela, disponível no Windows 10 e no Windows 11, lista itens como restos do Windows Update e arquivos de otimização de entrega; confira as caixas de seleção e clique em Remover arquivos.",
            "Para limpar o cache de um aplicativo específico na mão, feche-o completamente primeiro (confira a área de notificação, porque muitos continuam rodando ali), depois abra a pasta dele em %localappdata% ou %appdata% e apague apenas o conteúdo das subpastas chamadas Cache ou GPUCache. O aplicativo recria essas pastas sozinho na próxima vez que iniciar.",
            "Se repetir isso para cada aplicativo parece cansativo, o limpador de cache (Cache Cleaner) do Disk Mop encontra caches do sistema e dos aplicativos em uma única varredura e mostra exatamente o que pode ser removido com segurança. O limpador de cache dos navegadores (Browser Cache Cleaner) cobre Chrome, Firefox e Edge, e o recurso Acelerar (Speed Up) limpa downloads antigos, cache do sistema, cache do navegador e a lixeira em um clique.",
          ],
        },
        {
          title: "Remova os restos de programas desinstalados em Roaming e Local",
          content: [
            "O motivo mais ignorado para o AppData continuar crescendo é o rastro de pastas deixado por programas desinstalados. Quando você remove um programa, a pasta de configurações dele em Roaming e a pasta de cache em Local costumam ficar exatamente onde estavam. Com os anos, os restos de dezenas de aplicativos abandonados há muito tempo podem manter gigabytes reféns.",
            "Para conferir na mão, abra %appdata% e %localappdata% e ordene as pastas por nome. Compare cada nome de aplicativo ou de fabricante que aparecer com a lista Aplicativos instalados, em Configurações e Aplicativos. Se um programa não está mais instalado, a pasta dele pode ir embora. Só fique atento a uma armadilha: algumas pastas trazem o nome do fabricante em vez do nome do aplicativo, e essa mesma pasta pode conter também os dados de outro programa da mesma empresa que você ainda usa.",
            "O Disk Mop tira o achismo dessa caça: no treemap da análise de disco, as pastas órfãs grandes saltam aos olhos na hora, e o localizador de arquivos grandes (Large File Finder) marca arquivos acima de 500 MB mesmo escondidos nas profundezas do AppData. Em vez de adivinhar quais restos realmente importam, você os vê.",
          ],
        },
        {
          title: "Automatize a limpeza do AppData para que ele nunca mais inche",
          content: [
            "Uma limpeza pontual perde o efeito em poucos meses; a solução duradoura é a automação. Do lado do Windows, abra as Configurações, vá em Sistema, depois Armazenamento, e ative o Sensor de Armazenamento, onde dá para escolher com que frequência os arquivos temporários são apagados. É uma boa base, mas ele não toca nos caches dos aplicativos nem nos restos de programas desinstalados.",
            "A limpeza agendada (Scheduled Cleanup) do Disk Mop preenche exatamente essa lacuna: você cria tarefas semanais ou mensais que limpam caches, removem arquivos temporários e esvaziam a lixeira automaticamente. A pontuação de saúde do sistema (System Health Score) mostra num relance quando o seu disco precisa de atenção, então o AppData não consegue mais inchar em silêncio enquanto você olha para outro lado.",
            "Junte à automação um pequeno hábito: a cada poucos meses, revise os restos de programas desinstalados e rode uma análise de disco assim que o espaço livre da unidade C: começar a diminuir. Juntos, eles mantêm o AppData sob controle de forma permanente.",
          ],
        },
      ],
      verdict: [
        "Uma pasta AppData enorme não é um defeito: é a consequência natural de como os aplicativos modernos usam cache. Mas crescer sem limite não é algo que você precise aceitar. Aprenda o mapa de Local, LocalLow e Roaming, limpe a Temp e os caches, remova os restos de programas desinstalados e nunca apague a pasta inteira: aplique esses quatro princípios e recupere gigabytes com segurança.",
        "O Disk Mop reúne todas as etapas deste guia em um único aplicativo: a análise de disco mostra quais pastas incharam, o limpador de cache apaga com segurança os caches do sistema e dos aplicativos, e a limpeza agendada impede que o AppData volte a se acumular. Uma licença única de 19,90 $ cobre o uso vitalício no Windows 10, no Windows 11 e no macOS.",
      ],
      ctaText: "Limpe a sua pasta AppData com o Disk Mop",
    },
    ja: {
      title: "AppDataフォルダーが大きすぎる？安全に減らす方法",
      metaDescription:
        "AppDataフォルダーが肥大化していませんか。Local、LocalLow、Roamingで安全に削除できるものと残すべきものを整理し、Tempとアプリのキャッシュを減らす手順を解説します。",
      subtitle: "AppDataの3つのサブフォルダーで「消してよいもの」と「消してはいけないもの」の地図",
      intro: [
        "AppDataフォルダーが大きくなりすぎていませんか。ほとんどの場合、AppData\\Localの中にあるTempフォルダーを空にし、アプリケーションのキャッシュを削除し、すでにアンインストールしたプログラムが残していったフォルダーを消せば、安全に容量を減らせます。逆に絶対にやってはいけないのが、AppDataフォルダーごと削除することです。このフォルダーには、インストール済みのアプリが動作するために必要な設定やプロファイル、保存データも入っているからです。",
        "この記事ではまず、AppDataの3つのサブフォルダー（Local、LocalLow、Roaming）がそれぞれ何をしているのかを説明し、そのうえで「安全に削除できるもの」と「触ってはいけないもの」をはっきりと切り分けます。Tempフォルダーとアプリのキャッシュを手順どおりに削除し、多くの記事が触れないアンインストール済みプログラムの残骸を洗い出し、最後にクリーンアップを自動化して、AppDataが再び数十ギガバイトまで膨らまないようにします。",
      ],
      sections: [
        {
          title: "AppDataフォルダーとは？Local、LocalLow、Roamingの違い",
          content: [
            "AppDataは、Windowsのすべてのユーザーアカウントの下にある隠しフォルダーで、場所は C:\\Users\\ユーザー名\\AppData です。既定では非表示になっているため、表示するにはエクスプローラーの「表示」メニューで「隠しファイル」をオンにする必要があります。より手早い方法は、Win+Rキーを押して %appdata% と入力することです。これでRoamingサブフォルダーへ直接移動できます。",
            "AppDataには3つのサブフォルダーがあり、それぞれ役割が異なります。Localはこのパソコンだけに紐づくデータを保持します。アプリケーションのキャッシュ、一時ファイル、そしてTempフォルダーはすべてここにあり、3つの中で群を抜いて大きくなるのが普通です。LocalLowは、保護モードのブラウザーや一部のゲームなど、制限された権限で動作するアプリのデータを保存する場所で、たいていのシステムでは小さいままです。Roamingには、ユーザーについて回るべき設定が入ります。ブラウザーのプロファイル、アプリの構成、多くのゲームのセーブデータなどです。",
            "この区別を頭に入れておくことが、クリーンアップ全体の羅針盤になります。安全に消せる不要データの大半はLocalにたまり、守りたいデータの多くはRoamingにあります。この記事の以降の手順は、すべてこの地図に沿って進みます。",
          ],
        },
        {
          title: "AppDataが気づかないうちに数十ギガバイトまで膨らむ理由",
          content: [
            "最近のアプリケーションは積極的にキャッシュを作ります。メッセージングアプリ、音楽や動画配信サービスのデスクトップ版、ビデオ会議ツール、コードエディターなどは、それぞれAppDataの下に数百メガバイトから数ギガバイトのデータをためこむことがあります。さらに、アップデーターが古いインストーラーを保管し、アプリは絶えずログを書き出し、クラッシュダンプは %localappdata%\\CrashDumps に積み上がっていきます。",
            "より大きな問題は、Windowsがこれらをほとんど自動で片づけてくれないことです。ストレージ センサーは一部の一時ファイルを削除できますが、アプリケーションのキャッシュや持ち主のいないフォルダーには決して手を出しません。アンインストーラーも、再インストールしたときに設定が残るよう、あえて設定フォルダーを残していくことがよくあります。その結果、AppDataは年々、誰も点検しない物置のような場所になっていきます。",
            "現状を確認するには、AppDataフォルダーを右クリックして「プロパティ」を選び、合計サイズを見ます。ただしこの方法では、どのサブフォルダーが重いのかまでは分かりません。Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンし、視覚的なツリーマップでAppData内の大きなフォルダーを瞬時に示してくれるので、どこから手を付ければよいかがはっきりします。",
          ],
        },
        {
          title: "AppDataは削除できる？消してよいもの・いけないもの",
          content: [
            "よくある質問への率直な答えは、「いいえ、AppDataフォルダーをまるごと削除することはできません」です。消してしまうと、インストール済みのアプリは設定、ログイン状態、ライセンス情報、保存した作業内容を失います。多くは起動しなくなるか、初期状態で開くことになります。正しいやり方は、フォルダー自体ではなく、その中の不要なものだけを狙って消すことです。",
            "安全に削除できるのは次のものです。%localappdata%\\Temp の中身、完全に終了しているアプリのフォルダー内にある Cache や GPUCache という名前のサブフォルダー、%localappdata%\\CrashDumps にたまった古いクラッシュダンプ、そしてすでにアンインストール済みだと確認できたプログラムのフォルダー全体です。アプリは次回起動時にキャッシュを作り直すため、キャッシュを消しても実際のデータが失われることはありません。",
            "反対に、触ってはいけないものもあります。Roaming内のMicrosoftフォルダー（Officeのテンプレート、メールの署名、Windowsのプロファイルデータが入っています）、ブラウザーのプロファイルフォルダー（ブックマーク、保存したパスワード、拡張機能が入っています）、そして今も使っているアプリのフォルダーは、明らかにキャッシュだと分かるもの以外はすべて残してください。判断に迷うフォルダーがあれば、削除せずに名前の末尾に .old を付けて1週間ほど様子を見ます。どのアプリからも不具合が出なければ、安心して削除できます。",
          ],
        },
        {
          title: "AppData LocalのTempフォルダーとアプリのキャッシュを削除する手順",
          content: [
            "いちばん手早く効果が出るのはTempフォルダーです。Win+Rキーを押して %localappdata%\\Temp と入力し、Enterキーを押します。開いたフォルダーでCtrl+Aを押してすべて選択し、削除します。使用中のファイルがあるとWindowsが知らせてきますが、「スキップ」をクリックすれば問題ありません。最後にごみ箱を空にして、はじめて空き容量が実際に戻ります。",
            "Windows標準のクリーンアップ機能も、システム側の一時データまで届きます。「設定」を開き、「システム」から「記憶域」に進み、「一時ファイル」をクリックしてください。この画面はWindows 10とWindows 11の両方にあり、Windows Updateの残骸や配信最適化ファイルなども一覧に表示されます。チェックボックスを確認して「ファイルの削除」をクリックします。",
            "個々のアプリのキャッシュを手動で消す場合は、まずそのアプリを完全に終了してください（通知領域で動き続けているアプリが多いので確認しましょう）。次に %localappdata% または %appdata% にあるそのアプリのフォルダーを開き、Cache や GPUCache という名前のサブフォルダーの中身だけを削除します。これらのフォルダーは、次回の起動時にアプリが自動で作り直します。",
            "アプリごとに同じ作業を繰り返すのが面倒なら、Disk Mopのキャッシュ クリーナー（Cache Cleaner）が役に立ちます。1回のスキャンでシステムとアプリケーションのキャッシュを見つけ出し、安全に削除できるものを正確に示してくれます。ブラウザーキャッシュ クリーナー（Browser Cache Cleaner）はChrome、Firefox、Edgeに対応し、高速化（Speed Up）機能を使えば、古いダウンロード、システムキャッシュ、ブラウザーキャッシュ、ごみ箱をワンクリックでまとめて片づけられます。",
          ],
        },
        {
          title: "RoamingとLocalに残ったアンインストール済みプログラムの残骸を消す",
          content: [
            "AppDataが増え続ける理由として最も見落とされがちなのが、アンインストールしたプログラムが残していったフォルダーです。プログラムを削除しても、Roamingにある設定フォルダーとLocalにあるキャッシュフォルダーは、たいていそのまま置き去りになります。何年も経つうちに、とうの昔に使わなくなった数十本のアプリの残骸が、ギガバイト単位の容量を占め続けることになります。",
            "手動で確認するには、%appdata% と %localappdata% を開き、フォルダーを名前順に並べ替えます。そこに並ぶアプリ名やメーカー名を、「設定」の「アプリ」にある「インストールされているアプリ」の一覧と照らし合わせてください。すでにインストールされていないプログラムのフォルダーは削除して構いません。ひとつだけ落とし穴があります。フォルダー名がアプリ名ではなくメーカー名になっていることがあり、その場合、同じメーカーの今も使っている別のプログラムのデータが一緒に入っていることがあります。",
            "Disk Mopを使えば、この作業から当てずっぽうがなくなります。ディスク分析のツリーマップでは、持ち主のいない大きなフォルダーがひと目で浮かび上がり、大容量ファイル検索（Large File Finder）はAppDataの奥深くに隠れた500 MB超のファイルも見つけ出します。どの残骸が本当に容量を食っているのかを推測する必要はありません。",
          ],
        },
        {
          title: "AppDataのクリーンアップを自動化して二度と膨らませない",
          content: [
            "一度きりのクリーンアップは、数か月で効果を失います。長続きする対策は自動化です。Windows側では、「設定」から「システム」、「記憶域」へ進み、ストレージ センサーをオンにして、一時ファイルを削除する頻度を選びます。土台としては優秀ですが、アプリケーションのキャッシュやアンインストール済みプログラムの残骸には手が届きません。",
            "Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）は、まさにその隙間を埋めます。週次や月次のタスクを作っておけば、キャッシュの削除、一時ファイルの整理、ごみ箱を空にする処理が自動で実行されます。システム健全性スコア（System Health Score）を見れば、ディスクがいつ手入れを必要としているかがひと目で分かるので、目を離しているあいだにAppDataが静かに膨らんでいくこともなくなります。",
            "この自動化に、ちょっとした習慣を組み合わせてください。数か月に一度アンインストール済みプログラムの残骸を見直し、C:ドライブの空き容量が減り始めたらディスク分析を実行するだけです。この2つを続けていれば、AppDataは長期的にきちんと管理された状態を保てます。",
          ],
        },
      ],
      verdict: [
        "AppDataフォルダーが大きいこと自体は故障ではなく、最近のアプリが積極的にキャッシュを使うことの自然な結果です。とはいえ、その増加を野放しにする必要はありません。Local、LocalLow、Roamingの地図を覚え、Tempとキャッシュを削除し、アンインストール済みプログラムの残骸を取り除き、フォルダーごと削除は絶対にしない。この4つの原則を守れば、安全にギガバイト単位の空き容量を取り戻せます。",
        "Disk Mopは、この記事のすべての手順を1つのアプリにまとめています。ディスク分析で膨らんだフォルダーを見つけ、キャッシュ クリーナーでシステムとアプリのキャッシュを安全に削除し、スケジュール クリーンアップでAppDataが再びたまるのを防ぎます。買い切り19.90ドルのライセンスで、Windows 10、Windows 11、macOSで永続的に利用できます。",
      ],
      ctaText: "Disk MopでAppDataフォルダーを整理しましょう",
    },
  },
};
