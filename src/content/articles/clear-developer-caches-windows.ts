import type { Article } from "../types";

export const clearDeveloperCachesWindows: Article = {
  slug: "clear-developer-caches-windows",
  type: "guide",
  category: "Windows Tips",
  date: "2026-11-18",
  updated: "2026-11-18",
  readingTime: 6,
  content: {
    "tr": {
      "title": "Windows'ta npm, pip, NuGet ve Gradle Önbellekleri Nasıl Temizlenir",
      "metaDescription": "npm, pip, NuGet ve Gradle önbellekleri Windows'ta sessizce gigabaytlarca yer kaplayabilir. Nerede olduklarını ve derlemeleri bozmadan nasıl temizleneceğini öğrenin.",
      "subtitle": "Geliştirici paket önbelleklerinden yer kazanın ve nelerden vazgeçtiğinizi tam olarak bilin",
      "keyTakeaways": [
        "npm, pip, NuGet ve Gradle, indirdikleri her paketi derlemeler hızlı olsun diye bir önbellekte tutar; önbellek her zaman yeniden indirilebilir, bu yüzden temizlemek güvenlidir ama sonrasında internet bağlantısı gerekir.",
        "Her aracın kendi temizleme komutu vardır (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear); Gradle önbelleği ise Gradle durdurulmuşken caches klasörü silinerek temizlenir.",
        "Temizlemeden sonraki ilk derleme daha yavaştır, çünkü tüm bağımlılıklar yeniden indirilir; bu yüzden teslim tarihinden hemen önce ya da çevrimdışıyken temizlemeyin."
      ],
      "dataTable": {
        "caption": "Windows'ta paket yöneticisi önbellekleri",
        "columns": [
          "Araç",
          "Önbellek konumu",
          "Resmî temizleme komutu",
          "Sonrasında ne olur"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (eski kurulumlarda: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Paketler bir sonraki kurulumda yeniden indirilir"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheel dosyaları ve indirmeler gerektiğinde yeniden alınır"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache ve plugins-cache",
            "dotnet nuget locals all --clear",
            "Paketler bir sonraki derlemede yeniden geri yüklenir"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Komut yok; Gradle durdurulmuşken caches klasörünü silin",
            "Bağımlılıklar bir sonraki derlemede yeniden indirilir"
          ]
        ]
      },
      "howTo": {
        "name": "Windows'ta geliştirici paket önbellekleri nasıl temizlenir",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Her önbelleğin boyutunu ölçün",
            "text": "Dosya Gezgini'ni açın ve her önbellek yolunu adres çubuğuna yapıştırın; örneğin %LOCALAPPDATA%\\npm-cache ve %USERPROFILE%\\.gradle\\caches. Hangisinin temizlemeye değer olduğunu görmek için Özellikler'de klasör boyutuna bakın."
          },
          {
            "name": "Derlemeleri ve IDE'leri durdurun",
            "text": "IDE'nizi ve çalışan tüm derlemeleri kapatın. Gradle için gradle --stop komutunu çalıştırın; böylece hiçbir daemon önbellek klasörünü açık tutmaz."
          },
          {
            "name": "Resmî komutları kullanın",
            "text": "Bir terminalde npm cache clean --force, pip cache purge ve dotnet nuget locals all --clear komutlarını çalıştırın. Her komut neyi sildiğini yazdırır."
          },
          {
            "name": "Gradle caches klasörünü silin",
            "text": "%USERPROFILE%\\.gradle\\caches içindekileri silin. Gradle klasörü yeniden oluşturur ve bağımlılıkları bir sonraki derlemede yeniden indirir."
          },
          {
            "name": "Ya da Disk Mop ile hepsini tek seferde temizleyin",
            "text": "Disk Mop'u açın, Yer aç sayfasına gidin ve taramayı çalıştırın. npm, pip, NuGet ve Gradle önbellekleri listelenir ama varsayılan olarak seçili gelmez; istediklerinizi işaretleyip onaylayın."
          }
        ]
      },
      "faq": [
        {
          "question": "npm önbelleğini silmek güvenli mi?",
          "answer": "Evet. npm önbelleği, npm'in daha önce indirdiği paketlerin deposudur. Temizlemek projelerinizi veya node_modules klasörlerinizi değiştirmez; npm, paketleri bir sonraki kurulumda yeniden indirir. npm'in kendisi de bunun için npm cache clean --force komutunu önerir."
        },
        {
          "question": "Gradle önbelleğini temizlemek projelerimi bozar mı?",
          "answer": "Hayır. caches klasöründeki dosyalar indirilmiş bağımlılıklar ve derleme verileridir. Kaynak kodunuz orada saklanmaz. Bir sonraki derleme ihtiyaç duyduklarını yeniden indirir; bu daha uzun sürer ve internet bağlantısı gerektirir."
        },
        {
          "question": "pip neden önbellek tutar?",
          "answer": "pip, indirdiği paketleri ve derlenmiş wheel dosyalarını saklar; böylece aynı paketi başka bir sanal ortama kurmak hızlıdır ve indirme gerektirmez. pip cache purge ile temizlemek yalnızca bu saklanan kopyayı siler."
        },
        {
          "question": "NuGet ve web önbelleği tarayıcı verilerini de kapsıyor mu?",
          "answer": "NuGet ve web önbelleği, NuGet'in paket önbelleklerini ve Windows bileşenlerinin web içeriği için kullandığı bir önbellek olan Windows INetCache klasörünü kapsar. Kendiliğinden yeniden oluşur ve belgelerinizi içermez."
        }
      ],
      "intro": [
        "Paket yöneticileri indirdikleri her şeyin bir kopyasını tutar. npm, pip, NuGet ve Gradle'ın her birinin profilinizde bir önbellek klasörü vardır ve geliştirici makinelerinde bu klasörler çoğunlukla birkaç gigabayta ulaşır. Paketler yeniden indirilebildiği için bunları temizlemek güvenlidir; bedeli, bir sonraki kurulumun veya derlemenin internet bağlantısı gerektirmesi ve daha uzun sürmesidir.",
        "Bu rehber her önbelleğin nerede olduğunu, onu temizleyen resmî komutu ve sonrasında neler beklemeniz gerektiğini listeler; dördünü Disk Mop ile tek seferde nasıl temizleyeceğinizi de gösterir. Ayrıca bu önbelleklerin bir temizleyicide neden varsayılan olarak seçili gelmediğini ve ne zaman dokunmamanın daha iyi olduğunu açıklar."
      ],
      "sections": [
        {
          "title": "Geliştirici Önbellekleri Neden Bu Kadar Büyür",
          "content": [
            "Bir bağımlılık kurduğunuzda araç, indirilen arşivi projenize açmadan önce bir önbelleğe kaydeder. Aynı sürüme ihtiyaç duyan bir sonraki proje, yeniden indirmek yerine önbellekteki kopyayı kullanır. Hız açısından iyi bir takastır, ama önbellek hiçbir şeyi unutmaz: yıllar önce bitirdiğiniz projelerin eski paket sürümleri içinde kalmaya devam eder.",
            "Gradle genellikle en büyüğüdür. caches klasörü, gördüğü her proje ve her sürüm için indirilmiş bağımlılıkları, dönüştürülmüş yapıtları ve derleme verilerini tutar; çoğunlukla birkaç gigabayta ulaşır. NuGet ve pip daha yavaş büyür, npm ise ikisinin arasındadır.",
            "Bunların hiçbiri kaynak kodunuz değildir. Bir önbellek yalnızca paket kayıt defterinden yeniden alınabilecek şeyleri içerir."
          ]
        },
        {
          "title": "npm ve pip",
          "content": [
            "npm önbelleğini %LOCALAPPDATA%\\npm-cache içinde tutar; bazı eski kurulumlar %APPDATA%\\npm-cache kullanır. Temizlemenin resmî yolu npm cache clean --force komutudur. Bayrak olmadan düz npm cache clean çalışmayı reddeder, çünkü npm önbelleği kendi kendini onaran bir yapı olarak görür. node_modules klasörleriniz ayrıdır ve etkilenmez.",
            "pip, indirmeleri ve derlenmiş wheel dosyalarını %LOCALAPPDATA%\\pip\\Cache içinde saklar. pip cache purge ile temizleyebilir ya da önce pip cache info ve pip cache list ile içinde neler olduğuna bakabilirsiniz. Sanal ortamlara dokunulmaz; yalnızca saklanan indirmeler silinir.",
            "Her iki komuttan sonra bir paketin bir sonraki kurulumu normal bir indirme olur."
          ]
        },
        {
          "title": "NuGet ve Windows Web Önbelleği",
          "content": [
            "NuGet indirilen paketleri %LOCALAPPDATA%\\NuGet\\v3-cache içinde, eklentileri ise plugins-cache içinde tutar. Her şeyi görmek için dotnet nuget locals all --list, temizlemek için dotnet nuget locals all --clear komutunu çalıştırın. Profilinizin altındaki genel paketler klasörü farklı bir şeydir: geri yüklenmiş projelerin kullandığı paketleri barındırır ve onu temizlemek her proje için tam bir geri yükleme anlamına gelir.",
            "Disk Mop, NuGet önbelleklerini Windows INetCache klasörüyle birlikte NuGet ve web önbelleği altında gruplar. INetCache, Windows bileşenlerinin önbelleğe aldığı web içeriğini barındırır ve otomatik olarak yeniden oluşturulur.",
            "Temizlemeden önce Visual Studio'yu kapatın; çünkü çalışırken bu klasörlerdeki dosyaları açık tutar."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Gradle'ın önbelleği %USERPROFILE%\\.gradle\\caches konumundadır. Tamamını temizleyen resmî tek satırlık bir komut yoktur; olağan yol Gradle'ı durdurup caches klasörünün içindekileri silmektir. Hiçbir daemon dosyaları açık tutmasın diye önce gradle --stop komutunu çalıştırın ve Android Studio ya da IntelliJ'i kapatın.",
            "Bir sonraki derleme her bağımlılığı yeniden indirir; büyük bir projede bu birkaç dakika sürebilir ve Gradle dönüştürülmüş yapıtlarını yeniden oluşturur. .gradle klasöründeki gradle.properties gibi ayarlar caches klasörünün dışındadır ve yalnızca o klasörü sildiğinizde kaldırılmaz.",
            "Birkaç Android projeniz varsa, bu rehberdeki en büyük kazancın Gradle'dan geleceğini bekleyin."
          ]
        },
        {
          "title": "Disk Mop ile Hepsini Tek Seferde Temizleyin",
          "content": [
            "Disk Mop'un Yer aç sayfası npm önbelleği, pip önbelleği, NuGet ve web önbelleği ile Gradle önbelleğini ayrı öğeler olarak listeler; her birinin boyutunu ve araçlarınızın paketleri gerektiğinde yeniden indireceği notunu gösterir. Bunlar varsayılan olarak seçili gelmez, çünkü temizlemenin bilerek seçmeniz gereken bir bedeli vardır: bir sonraki derleme internet gerektirir.",
            "Taramayı çalıştırın, istediğiniz önbellekleri işaretleyin ve onaylayın. Disk Mop bir şeyi silmeden önce bulduklarını gösterir ve tarama ücretsizdir. Kullanımdaki dosyalar atlanmasın diye önce IDE'nizi ve çalışan tüm derlemeleri kapatın.",
            "İndirmeleri beklemek istemiyorsanız, yalnızca nadiren kullandığınız önbelleği temizleyin ve üzerinde çalıştığınız projenin önbelleğini koruyun."
          ]
        }
      ],
      "verdict": [
        "npm, pip, NuGet ve Gradle önbellekleri her zaman yeniden indirilebilen paket kopyalarıdır; bu yüzden temizlemek güvenlidir ve çoğunlukla birkaç gigabayt yer açar. npm, pip ve NuGet için resmî komutları kullanın; Gradle için Gradle durdurulmuşken caches klasörünü silin.",
        "Disk Mop dört önbelleği de Yer aç sayfasında listeler, her birinin boyutunu gösterir ve siz seçene kadar işaretsiz bırakır. Tarama ücretsizdir; bu yüzden karar vermeden önce hangi önbelleğin temizlemeye değer olduğunu görebilirsiniz."
      ],
      "ctaText": "Disk Mop ile geliştirici önbelleklerinizin ne kadar yer kapladığını görün"
    },
    "en": {
      "title": "How to Clear npm, pip, NuGet and Gradle Caches on Windows",
      "metaDescription": "npm, pip, NuGet and Gradle caches can quietly take many gigabytes on Windows. Learn where they live and how to clear them without breaking your builds.",
      "subtitle": "Reclaim space from developer package caches and know exactly what you are giving up",
      "keyTakeaways": [
        "npm, pip, NuGet and Gradle keep every package they download in a cache so builds are fast; the cache can always be downloaded again, so clearing it is safe but needs an internet connection afterwards.",
        "Each tool has its own clear command (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), while Gradle's cache is cleared by deleting its caches folder with Gradle stopped.",
        "The first build after clearing is slower because every dependency is downloaded again, so avoid clearing right before a deadline or when you are offline."
      ],
      "dataTable": {
        "caption": "Package manager caches on Windows",
        "columns": [
          "Tool",
          "Cache location",
          "Official clear command",
          "What happens next"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (older setups: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Packages are downloaded again on the next install"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheels and downloads are fetched again when needed"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache and plugins-cache",
            "dotnet nuget locals all --clear",
            "Packages are restored again on the next build"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "No command; delete the caches folder with Gradle stopped",
            "Dependencies are downloaded again on the next build"
          ]
        ]
      },
      "howTo": {
        "name": "How to clear developer package caches on Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Measure each cache",
            "text": "Open File Explorer and paste each cache path into the address bar, for example %LOCALAPPDATA%\\npm-cache and %USERPROFILE%\\.gradle\\caches. Check the folder size in Properties to see which one is worth clearing."
          },
          {
            "name": "Stop builds and IDEs",
            "text": "Close your IDE and any running build. For Gradle, run gradle --stop so that no daemon holds the cache folder open."
          },
          {
            "name": "Use the official commands",
            "text": "In a terminal run npm cache clean --force, pip cache purge and dotnet nuget locals all --clear. Each command prints what it removed."
          },
          {
            "name": "Delete the Gradle caches folder",
            "text": "Delete the contents of %USERPROFILE%\\.gradle\\caches. Gradle recreates the folder and downloads dependencies again on the next build."
          },
          {
            "name": "Or clear them in one pass with Disk Mop",
            "text": "Open Disk Mop, go to Free up space and run the scan. The npm, pip, NuGet and Gradle caches are listed but not selected by default; tick the ones you want and confirm."
          }
        ]
      },
      "faq": [
        {
          "question": "Is it safe to delete the npm cache?",
          "answer": "Yes. The npm cache is a store of packages that npm has already downloaded. Clearing it does not change your projects or your node_modules folders; npm just downloads packages again when you next install them. npm itself recommends npm cache clean --force for this."
        },
        {
          "question": "Will clearing the Gradle cache break my projects?",
          "answer": "No. The files in the caches folder are downloaded dependencies and build data. Your source code is not stored there. The next build downloads what it needs again, which takes longer and needs an internet connection."
        },
        {
          "question": "Why does pip keep a cache?",
          "answer": "pip stores the packages and built wheels it downloads, so installing the same package in another virtual environment is fast and does not need a download. Clearing it with pip cache purge only removes that stored copy."
        },
        {
          "question": "Does the NuGet web cache include browser data?",
          "answer": "The NuGet and web cache covers NuGet's package caches and the Windows INetCache folder, which is a cache used by Windows components for web content. It is rebuilt on its own and does not contain your documents."
        }
      ],
      "intro": [
        "Package managers keep a copy of everything they download. npm, pip, NuGet and Gradle each have a cache folder in your profile, and on a developer machine these folders commonly grow to several gigabytes. They are safe to clear because the packages can be downloaded again; the price is that the next install or build needs an internet connection and takes longer.",
        "This guide lists where each cache lives, the official command to clear it, and what to expect afterwards, and it shows how to clear all four in one pass with Disk Mop. It also explains why these caches are not selected by default in a cleaner, and when it is better to leave them alone."
      ],
      "sections": [
        {
          "title": "Why Developer Caches Get So Big",
          "content": [
            "Every time you install a dependency, the tool saves the downloaded archive in a cache before it unpacks it into your project. The next project that needs the same version reuses the cached copy instead of downloading it. That is a good trade for speed, but the cache never forgets: old versions of packages from projects you finished years ago stay in it.",
            "Gradle is usually the largest. Its caches folder holds downloaded dependencies, transformed artifacts and build data for every project and every version it has seen, and it commonly reaches several gigabytes. NuGet and pip grow more slowly, and npm sits in between.",
            "None of this is your source code. A cache holds only things that can be fetched again from the package registry."
          ]
        },
        {
          "title": "npm and pip",
          "content": [
            "npm keeps its cache in %LOCALAPPDATA%\\npm-cache; some older installs use %APPDATA%\\npm-cache. The official way to clear it is npm cache clean --force. Plain npm cache clean without the flag refuses to run, because npm treats the cache as self-healing. Your node_modules folders are separate and are not affected.",
            "pip stores downloads and built wheels in %LOCALAPPDATA%\\pip\\Cache. Clear it with pip cache purge, or look at what it holds first with pip cache info and pip cache list. Virtual environments are not touched; only the stored downloads are removed.",
            "After either command, the next install of a package is a normal download."
          ]
        },
        {
          "title": "NuGet and the Windows Web Cache",
          "content": [
            "NuGet keeps downloaded packages in %LOCALAPPDATA%\\NuGet\\v3-cache and plugins in plugins-cache. To see everything, run dotnet nuget locals all --list; to clear it, run dotnet nuget locals all --clear. The global packages folder under your profile is a different thing: it holds packages that restored projects use, and clearing it means a full restore for each project.",
            "Disk Mop groups the NuGet caches together with the Windows INetCache folder under NuGet and web cache. INetCache holds web content cached by Windows components and is rebuilt automatically.",
            "Close Visual Studio before you clear, because it keeps files in these folders open while it is running."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Gradle's cache is %USERPROFILE%\\.gradle\\caches. There is no official one-line command that clears the whole thing; the usual way is to stop Gradle and delete the contents of the caches folder. Run gradle --stop first so that no daemon is holding files open, and close Android Studio or IntelliJ.",
            "The next build downloads every dependency again, which can take a few minutes on a large project, and Gradle rebuilds its transformed artifacts. Settings in the .gradle folder, such as gradle.properties, sit outside the caches folder and are not removed when you delete only that folder.",
            "If you keep several Android projects, expect Gradle to be the single biggest win in this guide."
          ]
        },
        {
          "title": "Clear Them in One Pass with Disk Mop",
          "content": [
            "Disk Mop's Free up space page lists npm cache, pip cache, NuGet and web cache and Gradle cache as separate items, each with its size and the note that your tools download the packages again when needed. They are not selected by default, because clearing them has a cost you should choose on purpose: the next build needs the internet.",
            "Run the scan, tick the caches you want and confirm. Disk Mop shows what it found before it deletes anything, and scanning is free. Close your IDE and any running build first so that files in use do not get skipped.",
            "If you do not want to wait for downloads, clear only the cache you rarely use and keep the one for the project you are working on."
          ]
        }
      ],
      "verdict": [
        "The npm, pip, NuGet and Gradle caches are copies of packages that can always be downloaded again, so clearing them is safe and often frees many gigabytes. Use the official commands for npm, pip and NuGet, and delete the caches folder for Gradle with Gradle stopped.",
        "Disk Mop lists all four caches on its Free up space page, shows the size of each and leaves them unselected until you choose. Scanning is free, so you can see which cache is worth clearing before you decide."
      ],
      "ctaText": "See how much space your developer caches take with Disk Mop"
    },
    "de": {
      "title": "npm-, pip-, NuGet- und Gradle-Cache unter Windows leeren",
      "metaDescription": "Die Caches von npm, pip, NuGet und Gradle belegen unter Windows oft unbemerkt viele Gigabyte. So finden Sie sie und leeren sie, ohne Ihre Builds zu gefährden.",
      "subtitle": "Speicherplatz aus den Paket-Caches zurückholen und genau wissen, worauf Sie verzichten",
      "keyTakeaways": [
        "npm, pip, NuGet und Gradle speichern jedes heruntergeladene Paket in einem Cache, damit Builds schnell laufen; der Cache lässt sich jederzeit neu herunterladen, das Leeren ist also sicher, danach brauchen Sie aber eine Internetverbindung.",
        "Jedes Tool hat seinen eigenen Befehl zum Leeren (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear); den Gradle-Cache leeren Sie, indem Sie bei beendetem Gradle den Ordner caches löschen.",
        "Der erste Build nach dem Leeren ist langsamer, weil alle Abhängigkeiten erneut heruntergeladen werden. Leeren Sie die Caches daher nicht kurz vor einer Deadline oder ohne Internetverbindung."
      ],
      "dataTable": {
        "caption": "Caches von Paketmanagern unter Windows",
        "columns": [
          "Tool",
          "Speicherort des Caches",
          "Offizieller Befehl zum Leeren",
          "Was danach passiert"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (ältere Installationen: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Pakete werden bei der nächsten Installation erneut heruntergeladen"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheels und Downloads werden bei Bedarf erneut geladen"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache und plugins-cache",
            "dotnet nuget locals all --clear",
            "Pakete werden beim nächsten Build erneut wiederhergestellt"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Kein Befehl; den Ordner caches bei beendetem Gradle löschen",
            "Abhängigkeiten werden beim nächsten Build erneut heruntergeladen"
          ]
        ]
      },
      "howTo": {
        "name": "Paket-Caches für Entwickler unter Windows leeren",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Größe jedes Caches ermitteln",
            "text": "Öffnen Sie den Datei-Explorer und fügen Sie jeden Cache-Pfad in die Adressleiste ein, zum Beispiel %LOCALAPPDATA%\\npm-cache und %USERPROFILE%\\.gradle\\caches. Prüfen Sie die Ordnergröße unter Eigenschaften, um zu sehen, bei welchem Cache sich das Leeren lohnt."
          },
          {
            "name": "Builds und IDEs beenden",
            "text": "Schließen Sie Ihre IDE und alle laufenden Builds. Führen Sie bei Gradle gradle --stop aus, damit kein Daemon den Cache-Ordner geöffnet hält."
          },
          {
            "name": "Die offiziellen Befehle verwenden",
            "text": "Führen Sie in einem Terminal npm cache clean --force, pip cache purge und dotnet nuget locals all --clear aus. Jeder Befehl gibt aus, was er entfernt hat."
          },
          {
            "name": "Den Gradle-Ordner caches löschen",
            "text": "Löschen Sie den Inhalt von %USERPROFILE%\\.gradle\\caches. Gradle legt den Ordner neu an und lädt die Abhängigkeiten beim nächsten Build erneut herunter."
          },
          {
            "name": "Oder alles in einem Durchgang mit Disk Mop leeren",
            "text": "Öffnen Sie Disk Mop, wechseln Sie zu Speicher freigeben und starten Sie den Scan. Die Caches von npm, pip, NuGet und Gradle werden aufgeführt, sind aber standardmäßig nicht ausgewählt; haken Sie die gewünschten an und bestätigen Sie."
          }
        ]
      },
      "faq": [
        {
          "question": "Ist es sicher, den npm-Cache zu löschen?",
          "answer": "Ja. Der npm-Cache ist ein Speicher für Pakete, die npm bereits heruntergeladen hat. Das Leeren ändert weder Ihre Projekte noch Ihre node_modules-Ordner; npm lädt die Pakete bei der nächsten Installation einfach erneut herunter. npm selbst empfiehlt dafür npm cache clean --force."
        },
        {
          "question": "Gehen meine Projekte kaputt, wenn ich den Gradle-Cache leere?",
          "answer": "Nein. Die Dateien im Ordner caches sind heruntergeladene Abhängigkeiten und Build-Daten. Ihr Quellcode wird dort nicht gespeichert. Der nächste Build lädt, was er braucht, erneut herunter, was länger dauert und eine Internetverbindung erfordert."
        },
        {
          "question": "Warum hat pip einen Cache?",
          "answer": "pip speichert die heruntergeladenen Pakete und gebauten Wheels, damit die Installation desselben Pakets in einer anderen virtuellen Umgebung schnell geht und keinen Download braucht. Das Leeren mit pip cache purge entfernt nur diese gespeicherte Kopie."
        },
        {
          "question": "Enthält der NuGet- und Web-Cache auch Browserdaten?",
          "answer": "Der NuGet- und Web-Cache umfasst die Paket-Caches von NuGet und den Windows-Ordner INetCache, einen Cache, den Windows-Komponenten für Webinhalte nutzen. Er wird von selbst neu aufgebaut und enthält keine Ihrer Dokumente."
        }
      ],
      "intro": [
        "Paketmanager behalten eine Kopie von allem, was sie herunterladen. npm, pip, NuGet und Gradle haben jeweils einen Cache-Ordner in Ihrem Profil, und auf Entwicklerrechnern wachsen diese Ordner häufig auf mehrere Gigabyte an. Das Leeren ist sicher, weil sich die Pakete erneut herunterladen lassen; der Preis ist, dass die nächste Installation oder der nächste Build eine Internetverbindung braucht und länger dauert.",
        "Dieser Leitfaden zeigt, wo jeder Cache liegt, mit welchem offiziellen Befehl Sie ihn leeren und was Sie danach erwartet. Außerdem erfahren Sie, wie Sie alle vier mit Disk Mop in einem Durchgang leeren, warum diese Caches in einem Cleaner nicht standardmäßig ausgewählt sind und wann Sie sie besser in Ruhe lassen."
      ],
      "sections": [
        {
          "title": "Warum Entwickler-Caches so groß werden",
          "content": [
            "Jedes Mal, wenn Sie eine Abhängigkeit installieren, speichert das Tool das heruntergeladene Archiv in einem Cache, bevor es in Ihr Projekt entpackt wird. Das nächste Projekt, das dieselbe Version braucht, nutzt die zwischengespeicherte Kopie, statt erneut herunterzuladen. Für die Geschwindigkeit ist das ein guter Tausch, aber der Cache vergisst nie etwas: Alte Paketversionen aus Projekten, die Sie vor Jahren abgeschlossen haben, bleiben darin erhalten.",
            "Gradle ist meist der größte. Sein Ordner caches enthält heruntergeladene Abhängigkeiten, transformierte Artefakte und Build-Daten für jedes Projekt und jede Version, die er je gesehen hat, und erreicht häufig mehrere Gigabyte. NuGet und pip wachsen langsamer, npm liegt dazwischen.",
            "Nichts davon ist Ihr Quellcode. Ein Cache enthält nur Dinge, die sich aus der Paketquelle erneut abrufen lassen."
          ]
        },
        {
          "title": "npm und pip",
          "content": [
            "npm legt seinen Cache in %LOCALAPPDATA%\\npm-cache ab; manche älteren Installationen verwenden %APPDATA%\\npm-cache. Offiziell leeren Sie ihn mit npm cache clean --force. Das einfache npm cache clean ohne die Option verweigert die Ausführung, weil npm den Cache als selbstheilend betrachtet. Ihre node_modules-Ordner sind davon getrennt und bleiben unberührt.",
            "pip speichert Downloads und gebaute Wheels in %LOCALAPPDATA%\\pip\\Cache. Leeren Sie ihn mit pip cache purge, oder sehen Sie sich vorher mit pip cache info und pip cache list an, was er enthält. Virtuelle Umgebungen werden nicht angetastet; nur die gespeicherten Downloads werden entfernt.",
            "Nach beiden Befehlen ist die nächste Installation eines Pakets ein normaler Download."
          ]
        },
        {
          "title": "NuGet und der Windows-Web-Cache",
          "content": [
            "NuGet legt heruntergeladene Pakete in %LOCALAPPDATA%\\NuGet\\v3-cache und Plug-ins in plugins-cache ab. Mit dotnet nuget locals all --list sehen Sie alles, mit dotnet nuget locals all --clear leeren Sie es. Der globale Paketordner in Ihrem Profil ist etwas anderes: Er enthält die Pakete, die wiederhergestellte Projekte verwenden, und sein Leeren bedeutet eine vollständige Wiederherstellung für jedes Projekt.",
            "Disk Mop fasst die NuGet-Caches zusammen mit dem Windows-Ordner INetCache unter NuGet- und Web-Cache zusammen. INetCache enthält Webinhalte, die Windows-Komponenten zwischenspeichern, und wird automatisch neu aufgebaut.",
            "Schließen Sie Visual Studio vor dem Leeren, denn es hält Dateien in diesen Ordnern geöffnet, solange es läuft."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Der Gradle-Cache liegt in %USERPROFILE%\\.gradle\\caches. Es gibt keinen offiziellen Einzeiler, der ihn komplett leert; üblich ist, Gradle zu beenden und den Inhalt des Ordners caches zu löschen. Führen Sie zuerst gradle --stop aus, damit kein Daemon Dateien geöffnet hält, und schließen Sie Android Studio oder IntelliJ.",
            "Der nächste Build lädt jede Abhängigkeit erneut herunter, was bei einem großen Projekt einige Minuten dauern kann, und Gradle baut seine transformierten Artefakte neu auf. Einstellungen im Ordner .gradle, etwa gradle.properties, liegen außerhalb des Ordners caches und werden nicht entfernt, wenn Sie nur diesen Ordner löschen.",
            "Wenn Sie mehrere Android-Projekte haben, ist Gradle voraussichtlich der größte Einzelgewinn in diesem Leitfaden."
          ]
        },
        {
          "title": "Alles in einem Durchgang mit Disk Mop leeren",
          "content": [
            "Auf der Seite Speicher freigeben listet Disk Mop den npm-Cache, den pip-Cache, den NuGet- und Web-Cache und den Gradle-Cache als getrennte Einträge auf, jeweils mit Größe und dem Hinweis, dass Ihre Tools die Pakete bei Bedarf erneut herunterladen. Sie sind standardmäßig nicht ausgewählt, weil das Leeren etwas kostet, das Sie bewusst entscheiden sollten: Der nächste Build braucht das Internet.",
            "Starten Sie den Scan, haken Sie die gewünschten Caches an und bestätigen Sie. Disk Mop zeigt, was es gefunden hat, bevor es etwas löscht, und das Scannen ist kostenlos. Schließen Sie vorher Ihre IDE und alle laufenden Builds, damit Dateien, die gerade verwendet werden, nicht übersprungen werden.",
            "Wenn Sie nicht auf Downloads warten möchten, leeren Sie nur den Cache, den Sie selten brauchen, und behalten Sie den für das Projekt, an dem Sie gerade arbeiten."
          ]
        }
      ],
      "verdict": [
        "Die Caches von npm, pip, NuGet und Gradle sind Kopien von Paketen, die sich jederzeit erneut herunterladen lassen. Das Leeren ist daher sicher und schafft oft viele Gigabyte Platz. Nutzen Sie für npm, pip und NuGet die offiziellen Befehle und löschen Sie bei Gradle den Ordner caches bei beendetem Gradle.",
        "Disk Mop listet alle vier Caches auf der Seite Speicher freigeben auf, zeigt die Größe jedes Caches und lässt sie unausgewählt, bis Sie sich entscheiden. Das Scannen ist kostenlos, sodass Sie vor Ihrer Entscheidung sehen, bei welchem Cache sich das Leeren lohnt."
      ],
      "ctaText": "Mit Disk Mop sehen, wie viel Platz Ihre Entwickler-Caches belegen"
    },
    "fr": {
      "title": "Comment vider les caches npm, pip, NuGet et Gradle sous Windows",
      "metaDescription": "Les caches npm, pip, NuGet et Gradle peuvent occuper des gigaoctets sous Windows. Découvrez où ils se trouvent et comment les vider sans casser vos builds.",
      "subtitle": "Récupérez de l'espace sur les caches de paquets des développeurs en sachant précisément ce à quoi vous renoncez",
      "keyTakeaways": [
        "npm, pip, NuGet et Gradle conservent chaque paquet téléchargé dans un cache pour accélérer les builds ; le cache peut toujours être retéléchargé, donc le vider est sans danger, mais cela nécessite ensuite une connexion Internet.",
        "Chaque outil a sa propre commande de nettoyage (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), tandis que le cache de Gradle se vide en supprimant son dossier caches une fois Gradle arrêté.",
        "Le premier build après le nettoyage est plus lent, car toutes les dépendances sont retéléchargées : évitez donc de vider les caches juste avant une échéance ou lorsque vous êtes hors connexion."
      ],
      "dataTable": {
        "caption": "Caches des gestionnaires de paquets sous Windows",
        "columns": [
          "Outil",
          "Emplacement du cache",
          "Commande officielle de nettoyage",
          "Ce qui se passe ensuite"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (anciennes installations : %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Les paquets sont retéléchargés à la prochaine installation"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Les wheels et les téléchargements sont récupérés à nouveau en cas de besoin"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache et plugins-cache",
            "dotnet nuget locals all --clear",
            "Les paquets sont restaurés à nouveau au prochain build"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Aucune commande ; supprimez le dossier caches une fois Gradle arrêté",
            "Les dépendances sont retéléchargées au prochain build"
          ]
        ]
      },
      "howTo": {
        "name": "Comment vider les caches de paquets des développeurs sous Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Mesurer chaque cache",
            "text": "Ouvrez l'Explorateur de fichiers et collez chaque chemin de cache dans la barre d'adresse, par exemple %LOCALAPPDATA%\\npm-cache et %USERPROFILE%\\.gradle\\caches. Consultez la taille du dossier dans Propriétés pour voir lequel vaut la peine d'être vidé."
          },
          {
            "name": "Arrêter les builds et les IDE",
            "text": "Fermez votre IDE et tout build en cours. Pour Gradle, exécutez gradle --stop afin qu'aucun démon ne garde le dossier de cache ouvert."
          },
          {
            "name": "Utiliser les commandes officielles",
            "text": "Dans un terminal, exécutez npm cache clean --force, pip cache purge et dotnet nuget locals all --clear. Chaque commande affiche ce qu'elle a supprimé."
          },
          {
            "name": "Supprimer le dossier caches de Gradle",
            "text": "Supprimez le contenu de %USERPROFILE%\\.gradle\\caches. Gradle recrée le dossier et retélécharge les dépendances au prochain build."
          },
          {
            "name": "Ou tout vider en une seule passe avec Disk Mop",
            "text": "Ouvrez Disk Mop, allez sur Libérer de l'espace et lancez l'analyse. Les caches npm, pip, NuGet et Gradle sont listés mais non sélectionnés par défaut ; cochez ceux que vous voulez et confirmez."
          }
        ]
      },
      "faq": [
        {
          "question": "Peut-on supprimer le cache npm sans risque ?",
          "answer": "Oui. Le cache npm est un stock de paquets que npm a déjà téléchargés. Le vider ne modifie ni vos projets ni vos dossiers node_modules ; npm retélécharge simplement les paquets à la prochaine installation. npm recommande lui-même npm cache clean --force pour cela."
        },
        {
          "question": "Vider le cache Gradle va-t-il casser mes projets ?",
          "answer": "Non. Les fichiers du dossier caches sont des dépendances téléchargées et des données de build. Votre code source n'y est pas stocké. Le build suivant retélécharge ce dont il a besoin, ce qui prend plus de temps et nécessite une connexion Internet."
        },
        {
          "question": "Pourquoi pip conserve-t-il un cache ?",
          "answer": "pip stocke les paquets et les wheels construits qu'il télécharge, de sorte qu'installer le même paquet dans un autre environnement virtuel soit rapide et ne nécessite aucun téléchargement. Le vider avec pip cache purge supprime uniquement cette copie stockée."
        },
        {
          "question": "Le cache NuGet et web inclut-il des données de navigateur ?",
          "answer": "Le cache NuGet et web couvre les caches de paquets de NuGet et le dossier Windows INetCache, un cache utilisé par les composants Windows pour le contenu web. Il se reconstruit tout seul et ne contient pas vos documents."
        }
      ],
      "intro": [
        "Les gestionnaires de paquets gardent une copie de tout ce qu'ils téléchargent. npm, pip, NuGet et Gradle ont chacun un dossier de cache dans votre profil, et sur une machine de développeur, ces dossiers atteignent couramment plusieurs gigaoctets. On peut les vider sans risque, car les paquets peuvent être retéléchargés ; en contrepartie, la prochaine installation ou le prochain build nécessite une connexion Internet et prend plus de temps.",
        "Ce guide indique où se trouve chaque cache, la commande officielle pour le vider et ce qui vous attend ensuite, et montre comment vider les quatre en une seule passe avec Disk Mop. Il explique aussi pourquoi ces caches ne sont pas sélectionnés par défaut dans un outil de nettoyage, et quand il vaut mieux les laisser tranquilles."
      ],
      "sections": [
        {
          "title": "Pourquoi les caches de développement deviennent si volumineux",
          "content": [
            "Chaque fois que vous installez une dépendance, l'outil enregistre l'archive téléchargée dans un cache avant de la décompresser dans votre projet. Le projet suivant qui a besoin de la même version réutilise la copie en cache au lieu de la télécharger. C'est un bon compromis pour la vitesse, mais le cache n'oublie jamais rien : les anciennes versions de paquets de projets terminés il y a des années y restent.",
            "Gradle est généralement le plus volumineux. Son dossier caches contient les dépendances téléchargées, les artefacts transformés et les données de build de chaque projet et de chaque version qu'il a rencontrés, et il atteint couramment plusieurs gigaoctets. NuGet et pip grossissent plus lentement, et npm se situe entre les deux.",
            "Rien de tout cela n'est votre code source. Un cache ne contient que des éléments qui peuvent être récupérés à nouveau depuis le registre de paquets."
          ]
        },
        {
          "title": "npm et pip",
          "content": [
            "npm conserve son cache dans %LOCALAPPDATA%\\npm-cache ; certaines installations plus anciennes utilisent %APPDATA%\\npm-cache. La méthode officielle pour le vider est npm cache clean --force. La commande npm cache clean seule, sans l'option, refuse de s'exécuter, car npm considère le cache comme auto-réparateur. Vos dossiers node_modules sont distincts et ne sont pas affectés.",
            "pip stocke les téléchargements et les wheels construits dans %LOCALAPPDATA%\\pip\\Cache. Videz-le avec pip cache purge, ou regardez d'abord ce qu'il contient avec pip cache info et pip cache list. Les environnements virtuels ne sont pas touchés ; seuls les téléchargements stockés sont supprimés.",
            "Après l'une ou l'autre commande, la prochaine installation d'un paquet est un téléchargement normal."
          ]
        },
        {
          "title": "NuGet et le cache web de Windows",
          "content": [
            "NuGet conserve les paquets téléchargés dans %LOCALAPPDATA%\\NuGet\\v3-cache et les plug-ins dans plugins-cache. Pour tout voir, exécutez dotnet nuget locals all --list ; pour tout vider, exécutez dotnet nuget locals all --clear. Le dossier des paquets globaux de votre profil est autre chose : il contient les paquets utilisés par les projets restaurés, et le vider impose une restauration complète pour chaque projet.",
            "Disk Mop regroupe les caches NuGet avec le dossier Windows INetCache sous Cache NuGet et web. INetCache contient du contenu web mis en cache par des composants Windows et se reconstruit automatiquement.",
            "Fermez Visual Studio avant de vider, car il garde des fichiers de ces dossiers ouverts tant qu'il est en cours d'exécution."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Le cache de Gradle se trouve dans %USERPROFILE%\\.gradle\\caches. Il n'existe pas de commande officielle en une ligne qui le vide entièrement ; la méthode habituelle consiste à arrêter Gradle et à supprimer le contenu du dossier caches. Exécutez d'abord gradle --stop pour qu'aucun démon ne garde des fichiers ouverts, et fermez Android Studio ou IntelliJ.",
            "Le build suivant retélécharge chaque dépendance, ce qui peut prendre quelques minutes sur un gros projet, et Gradle reconstruit ses artefacts transformés. Les paramètres du dossier .gradle, comme gradle.properties, se trouvent en dehors du dossier caches et ne sont pas supprimés quand vous ne supprimez que ce dossier.",
            "Si vous avez plusieurs projets Android, attendez-vous à ce que Gradle soit le plus gros gain de ce guide."
          ]
        },
        {
          "title": "Tout vider en une seule passe avec Disk Mop",
          "content": [
            "La page Libérer de l'espace de Disk Mop liste Cache npm, Cache pip, Cache NuGet et web et Cache Gradle comme des éléments distincts, chacun avec sa taille et la mention que vos outils retéléchargent les paquets au besoin. Ils ne sont pas sélectionnés par défaut, car les vider a un coût que vous devez choisir en connaissance de cause : le prochain build nécessite Internet.",
            "Lancez l'analyse, cochez les caches souhaités et confirmez. Disk Mop affiche ce qu'il a trouvé avant de supprimer quoi que ce soit, et l'analyse est gratuite. Fermez d'abord votre IDE et tout build en cours pour que les fichiers utilisés ne soient pas ignorés.",
            "Si vous ne voulez pas attendre les téléchargements, ne videz que le cache que vous utilisez rarement et conservez celui du projet sur lequel vous travaillez."
          ]
        }
      ],
      "verdict": [
        "Les caches npm, pip, NuGet et Gradle sont des copies de paquets qui peuvent toujours être retéléchargés ; les vider est donc sans danger et libère souvent plusieurs gigaoctets. Utilisez les commandes officielles pour npm, pip et NuGet, et supprimez le dossier caches pour Gradle une fois Gradle arrêté.",
        "Disk Mop liste les quatre caches sur sa page Libérer de l'espace, affiche la taille de chacun et les laisse non sélectionnés tant que vous n'avez pas choisi. L'analyse est gratuite : vous pouvez donc voir quel cache vaut la peine d'être vidé avant de décider."
      ],
      "ctaText": "Voyez avec Disk Mop la place que prennent vos caches de développement"
    },
    "es": {
      "title": "Cómo borrar las cachés de npm, pip, NuGet y Gradle en Windows",
      "metaDescription": "Las cachés de npm, pip, NuGet y Gradle pueden ocupar muchos gigabytes en Windows sin avisar. Descubre dónde están y cómo borrarlas sin romper tus compilaciones.",
      "subtitle": "Recupera espacio de las cachés de paquetes de desarrollo y sabe exactamente a qué renuncias",
      "keyTakeaways": [
        "npm, pip, NuGet y Gradle guardan cada paquete que descargan en una caché para que las compilaciones sean rápidas; la caché siempre se puede volver a descargar, así que borrarla es seguro, pero después necesitas conexión a internet.",
        "Cada herramienta tiene su propio comando para limpiar (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), mientras que la caché de Gradle se borra eliminando su carpeta caches con Gradle detenido.",
        "La primera compilación tras borrar es más lenta porque todas las dependencias se descargan de nuevo, así que evita borrar justo antes de una entrega o cuando no tengas conexión."
      ],
      "dataTable": {
        "caption": "Cachés de gestores de paquetes en Windows",
        "columns": [
          "Herramienta",
          "Ubicación de la caché",
          "Comando oficial para limpiar",
          "Qué ocurre después"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (instalaciones antiguas: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Los paquetes se descargan de nuevo en la siguiente instalación"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Los wheels y las descargas se obtienen de nuevo cuando hacen falta"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache y plugins-cache",
            "dotnet nuget locals all --clear",
            "Los paquetes se restauran de nuevo en la siguiente compilación"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "No hay comando; elimina la carpeta caches con Gradle detenido",
            "Las dependencias se descargan de nuevo en la siguiente compilación"
          ]
        ]
      },
      "howTo": {
        "name": "Cómo borrar las cachés de paquetes de desarrollo en Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Mide cada caché",
            "text": "Abre el Explorador de archivos y pega la ruta de cada caché en la barra de direcciones, por ejemplo %LOCALAPPDATA%\\npm-cache y %USERPROFILE%\\.gradle\\caches. Consulta el tamaño de la carpeta en Propiedades para ver cuál merece la pena borrar."
          },
          {
            "name": "Detén las compilaciones y los IDE",
            "text": "Cierra tu IDE y cualquier compilación en curso. En el caso de Gradle, ejecuta gradle --stop para que ningún daemon mantenga abierta la carpeta de la caché."
          },
          {
            "name": "Usa los comandos oficiales",
            "text": "En un terminal, ejecuta npm cache clean --force, pip cache purge y dotnet nuget locals all --clear. Cada comando muestra lo que ha eliminado."
          },
          {
            "name": "Elimina la carpeta caches de Gradle",
            "text": "Elimina el contenido de %USERPROFILE%\\.gradle\\caches. Gradle vuelve a crear la carpeta y descarga las dependencias de nuevo en la siguiente compilación."
          },
          {
            "name": "O bórralas todas de una vez con Disk Mop",
            "text": "Abre Disk Mop, ve a Liberar espacio y ejecuta el análisis. Las cachés de npm, pip, NuGet y Gradle aparecen en la lista pero no están seleccionadas de forma predeterminada; marca las que quieras y confirma."
          }
        ]
      },
      "faq": [
        {
          "question": "¿Es seguro borrar la caché de npm?",
          "answer": "Sí. La caché de npm es un almacén de paquetes que npm ya ha descargado. Borrarla no cambia tus proyectos ni tus carpetas node_modules; npm simplemente vuelve a descargar los paquetes la próxima vez que los instales. El propio npm recomienda npm cache clean --force para esto."
        },
        {
          "question": "¿Borrar la caché de Gradle romperá mis proyectos?",
          "answer": "No. Los archivos de la carpeta caches son dependencias descargadas y datos de compilación. Tu código fuente no se guarda ahí. La siguiente compilación descarga de nuevo lo que necesita, lo cual tarda más y requiere conexión a internet."
        },
        {
          "question": "¿Por qué pip guarda una caché?",
          "answer": "pip almacena los paquetes y los wheels compilados que descarga, de modo que instalar el mismo paquete en otro entorno virtual sea rápido y no requiera descarga. Borrarla con pip cache purge solo elimina esa copia almacenada."
        },
        {
          "question": "¿La caché de NuGet y web incluye datos del navegador?",
          "answer": "La caché de NuGet y web abarca las cachés de paquetes de NuGet y la carpeta INetCache de Windows, una caché que usan los componentes de Windows para contenido web. Se reconstruye sola y no contiene tus documentos."
        }
      ],
      "intro": [
        "Los gestores de paquetes guardan una copia de todo lo que descargan. npm, pip, NuGet y Gradle tienen cada uno una carpeta de caché en tu perfil, y en un equipo de desarrollo estas carpetas suelen crecer hasta varios gigabytes. Es seguro borrarlas porque los paquetes se pueden volver a descargar; el precio es que la siguiente instalación o compilación necesita conexión a internet y tarda más.",
        "Esta guía enumera dónde está cada caché, el comando oficial para borrarla y qué esperar después, y muestra cómo borrar las cuatro de una vez con Disk Mop. También explica por qué estas cachés no están seleccionadas de forma predeterminada en un limpiador y cuándo es mejor dejarlas en paz."
      ],
      "sections": [
        {
          "title": "Por qué las cachés de desarrollo se vuelven tan grandes",
          "content": [
            "Cada vez que instalas una dependencia, la herramienta guarda el archivo descargado en una caché antes de descomprimirlo en tu proyecto. El siguiente proyecto que necesite la misma versión reutiliza la copia en caché en lugar de descargarla. Es un buen intercambio por velocidad, pero la caché nunca olvida: las versiones antiguas de paquetes de proyectos que terminaste hace años siguen en ella.",
            "Gradle suele ser la más grande. Su carpeta caches contiene dependencias descargadas, artefactos transformados y datos de compilación de cada proyecto y cada versión que ha visto, y con frecuencia alcanza varios gigabytes. NuGet y pip crecen más despacio, y npm queda en un punto intermedio.",
            "Nada de esto es tu código fuente. Una caché solo contiene cosas que se pueden obtener de nuevo del registro de paquetes."
          ]
        },
        {
          "title": "npm y pip",
          "content": [
            "npm guarda su caché en %LOCALAPPDATA%\\npm-cache; algunas instalaciones antiguas usan %APPDATA%\\npm-cache. La forma oficial de borrarla es npm cache clean --force. El comando npm cache clean a secas, sin la opción, se niega a ejecutarse, porque npm considera que la caché se repara sola. Tus carpetas node_modules son independientes y no se ven afectadas.",
            "pip guarda las descargas y los wheels compilados en %LOCALAPPDATA%\\pip\\Cache. Bórrala con pip cache purge, o mira antes lo que contiene con pip cache info y pip cache list. Los entornos virtuales no se tocan; solo se eliminan las descargas almacenadas.",
            "Después de cualquiera de los dos comandos, la siguiente instalación de un paquete es una descarga normal."
          ]
        },
        {
          "title": "NuGet y la caché web de Windows",
          "content": [
            "NuGet guarda los paquetes descargados en %LOCALAPPDATA%\\NuGet\\v3-cache y los complementos en plugins-cache. Para verlo todo, ejecuta dotnet nuget locals all --list; para borrarlo, ejecuta dotnet nuget locals all --clear. La carpeta de paquetes globales de tu perfil es otra cosa: contiene los paquetes que usan los proyectos restaurados, y borrarla implica una restauración completa de cada proyecto.",
            "Disk Mop agrupa las cachés de NuGet junto con la carpeta INetCache de Windows bajo Caché de NuGet y web. INetCache contiene contenido web que almacenan en caché los componentes de Windows y se reconstruye automáticamente.",
            "Cierra Visual Studio antes de borrar, porque mantiene archivos de estas carpetas abiertos mientras se ejecuta."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "La caché de Gradle está en %USERPROFILE%\\.gradle\\caches. No existe un comando oficial de una sola línea que la borre por completo; lo habitual es detener Gradle y eliminar el contenido de la carpeta caches. Ejecuta primero gradle --stop para que ningún daemon mantenga archivos abiertos, y cierra Android Studio o IntelliJ.",
            "La siguiente compilación descarga de nuevo todas las dependencias, lo que puede tardar unos minutos en un proyecto grande, y Gradle reconstruye sus artefactos transformados. Los ajustes de la carpeta .gradle, como gradle.properties, están fuera de la carpeta caches y no se eliminan si solo borras esa carpeta.",
            "Si tienes varios proyectos de Android, es de esperar que Gradle sea la mayor ganancia de esta guía."
          ]
        },
        {
          "title": "Bórralas todas de una vez con Disk Mop",
          "content": [
            "La página Liberar espacio de Disk Mop muestra Caché de npm, Caché de pip, Caché de NuGet y web y Caché de Gradle como elementos separados, cada uno con su tamaño y la nota de que tus herramientas vuelven a descargar los paquetes cuando hace falta. No están seleccionadas de forma predeterminada porque borrarlas tiene un coste que debes elegir a propósito: la siguiente compilación necesita internet.",
            "Ejecuta el análisis, marca las cachés que quieras y confirma. Disk Mop muestra lo que ha encontrado antes de eliminar nada, y analizar es gratis. Cierra antes tu IDE y cualquier compilación en curso para que no se omitan los archivos en uso.",
            "Si no quieres esperar descargas, borra solo la caché que usas poco y conserva la del proyecto en el que estás trabajando."
          ]
        }
      ],
      "verdict": [
        "Las cachés de npm, pip, NuGet y Gradle son copias de paquetes que siempre se pueden volver a descargar, así que borrarlas es seguro y a menudo libera muchos gigabytes. Usa los comandos oficiales para npm, pip y NuGet, y elimina la carpeta caches en el caso de Gradle con Gradle detenido.",
        "Disk Mop muestra las cuatro cachés en su página Liberar espacio, indica el tamaño de cada una y las deja sin seleccionar hasta que tú elijas. Analizar es gratis, así que puedes ver qué caché merece la pena borrar antes de decidir."
      ],
      "ctaText": "Descubre con Disk Mop cuánto espacio ocupan tus cachés de desarrollo"
    },
    "it": {
      "title": "Come svuotare le cache di npm, pip, NuGet e Gradle su Windows",
      "metaDescription": "Le cache di npm, pip, NuGet e Gradle possono occupare molti gigabyte su Windows in silenzio. Scopri dove si trovano e come svuotarle senza rompere le build.",
      "subtitle": "Recupera spazio dalle cache dei pacchetti di sviluppo sapendo esattamente a cosa rinunci",
      "keyTakeaways": [
        "npm, pip, NuGet e Gradle conservano ogni pacchetto scaricato in una cache per rendere veloci le build; la cache può sempre essere riscaricata, quindi svuotarla è sicuro, ma dopo serve una connessione a internet.",
        "Ogni strumento ha il proprio comando di pulizia (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), mentre la cache di Gradle si svuota eliminando la cartella caches con Gradle arrestato.",
        "La prima build dopo la pulizia è più lenta perché tutte le dipendenze vengono scaricate di nuovo: evita quindi di svuotare le cache poco prima di una scadenza o quando sei offline."
      ],
      "dataTable": {
        "caption": "Cache dei gestori di pacchetti su Windows",
        "columns": [
          "Strumento",
          "Posizione della cache",
          "Comando ufficiale di pulizia",
          "Cosa succede dopo"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (installazioni meno recenti: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "I pacchetti vengono scaricati di nuovo alla successiva installazione"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheel e download vengono recuperati di nuovo quando servono"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache e plugins-cache",
            "dotnet nuget locals all --clear",
            "I pacchetti vengono ripristinati di nuovo alla successiva build"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Nessun comando; elimina la cartella caches con Gradle arrestato",
            "Le dipendenze vengono scaricate di nuovo alla successiva build"
          ]
        ]
      },
      "howTo": {
        "name": "Come svuotare le cache dei pacchetti di sviluppo su Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Misura ogni cache",
            "text": "Apri Esplora file e incolla il percorso di ogni cache nella barra degli indirizzi, ad esempio %LOCALAPPDATA%\\npm-cache e %USERPROFILE%\\.gradle\\caches. Controlla la dimensione della cartella in Proprietà per vedere quale vale la pena svuotare."
          },
          {
            "name": "Arresta build e IDE",
            "text": "Chiudi l'IDE e qualsiasi build in esecuzione. Per Gradle, esegui gradle --stop in modo che nessun daemon tenga aperta la cartella della cache."
          },
          {
            "name": "Usa i comandi ufficiali",
            "text": "In un terminale esegui npm cache clean --force, pip cache purge e dotnet nuget locals all --clear. Ogni comando mostra ciò che ha rimosso."
          },
          {
            "name": "Elimina la cartella caches di Gradle",
            "text": "Elimina il contenuto di %USERPROFILE%\\.gradle\\caches. Gradle ricrea la cartella e scarica di nuovo le dipendenze alla successiva build."
          },
          {
            "name": "Oppure svuotale tutte in un solo passaggio con Disk Mop",
            "text": "Apri Disk Mop, vai su Libera spazio ed esegui la scansione. Le cache di npm, pip, NuGet e Gradle vengono elencate ma non sono selezionate per impostazione predefinita; spunta quelle che vuoi e conferma."
          }
        ]
      },
      "faq": [
        {
          "question": "È sicuro eliminare la cache di npm?",
          "answer": "Sì. La cache di npm è un archivio di pacchetti che npm ha già scaricato. Svuotarla non modifica i tuoi progetti né le cartelle node_modules; npm riscarica semplicemente i pacchetti alla successiva installazione. Lo stesso npm consiglia npm cache clean --force a questo scopo."
        },
        {
          "question": "Svuotare la cache di Gradle danneggerà i miei progetti?",
          "answer": "No. I file nella cartella caches sono dipendenze scaricate e dati di build. Il tuo codice sorgente non è memorizzato lì. La build successiva scarica di nuovo ciò che serve, il che richiede più tempo e una connessione a internet."
        },
        {
          "question": "Perché pip conserva una cache?",
          "answer": "pip memorizza i pacchetti e le wheel compilate che scarica, così installare lo stesso pacchetto in un altro ambiente virtuale è veloce e non richiede un download. Svuotarla con pip cache purge rimuove solo quella copia memorizzata."
        },
        {
          "question": "La cache di NuGet e web include i dati del browser?",
          "answer": "La cache NuGet e web comprende le cache dei pacchetti di NuGet e la cartella INetCache di Windows, una cache usata dai componenti di Windows per i contenuti web. Si ricostruisce da sola e non contiene i tuoi documenti."
        }
      ],
      "intro": [
        "I gestori di pacchetti conservano una copia di tutto ciò che scaricano. npm, pip, NuGet e Gradle hanno ciascuno una cartella di cache nel tuo profilo, e su un computer da sviluppatore queste cartelle arrivano spesso a diversi gigabyte. Svuotarle è sicuro perché i pacchetti possono essere riscaricati; il prezzo è che la successiva installazione o build richiede una connessione a internet e impiega più tempo.",
        "Questa guida elenca dove si trova ciascuna cache, il comando ufficiale per svuotarla e cosa aspettarsi dopo, e mostra come svuotarle tutte e quattro in un solo passaggio con Disk Mop. Spiega anche perché queste cache non sono selezionate per impostazione predefinita in un programma di pulizia e quando è meglio lasciarle stare."
      ],
      "sections": [
        {
          "title": "Perché le cache di sviluppo diventano così grandi",
          "content": [
            "Ogni volta che installi una dipendenza, lo strumento salva l'archivio scaricato in una cache prima di decomprimerlo nel progetto. Il progetto successivo che richiede la stessa versione riutilizza la copia in cache invece di scaricarla. È un ottimo compromesso per la velocità, ma la cache non dimentica mai nulla: le vecchie versioni dei pacchetti di progetti conclusi anni fa restano al suo interno.",
            "Gradle è di solito la più grande. La sua cartella caches contiene dipendenze scaricate, artefatti trasformati e dati di build per ogni progetto e ogni versione incontrati, e arriva spesso a diversi gigabyte. NuGet e pip crescono più lentamente, mentre npm si colloca nel mezzo.",
            "Niente di tutto questo è il tuo codice sorgente. Una cache contiene solo elementi che possono essere recuperati di nuovo dal registro dei pacchetti."
          ]
        },
        {
          "title": "npm e pip",
          "content": [
            "npm conserva la sua cache in %LOCALAPPDATA%\\npm-cache; alcune installazioni meno recenti usano %APPDATA%\\npm-cache. Il modo ufficiale per svuotarla è npm cache clean --force. Il semplice npm cache clean senza l'opzione si rifiuta di funzionare, perché npm considera la cache capace di autoripararsi. Le tue cartelle node_modules sono separate e non vengono toccate.",
            "pip memorizza download e wheel compilate in %LOCALAPPDATA%\\pip\\Cache. Svuotala con pip cache purge, oppure guarda prima cosa contiene con pip cache info e pip cache list. Gli ambienti virtuali non vengono toccati; vengono rimossi solo i download memorizzati.",
            "Dopo uno dei due comandi, la successiva installazione di un pacchetto è un normale download."
          ]
        },
        {
          "title": "NuGet e la cache web di Windows",
          "content": [
            "NuGet conserva i pacchetti scaricati in %LOCALAPPDATA%\\NuGet\\v3-cache e i plugin in plugins-cache. Per vedere tutto, esegui dotnet nuget locals all --list; per svuotare, esegui dotnet nuget locals all --clear. La cartella dei pacchetti globali nel tuo profilo è una cosa diversa: contiene i pacchetti usati dai progetti ripristinati, e svuotarla comporta un ripristino completo per ogni progetto.",
            "Disk Mop raggruppa le cache di NuGet insieme alla cartella INetCache di Windows sotto Cache NuGet e web. INetCache contiene contenuti web memorizzati nella cache dai componenti di Windows e viene ricostruita automaticamente.",
            "Chiudi Visual Studio prima di svuotare, perché mantiene aperti i file in queste cartelle finché è in esecuzione."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "La cache di Gradle si trova in %USERPROFILE%\\.gradle\\caches. Non esiste un comando ufficiale di una riga che la svuoti per intero; il metodo abituale è arrestare Gradle ed eliminare il contenuto della cartella caches. Esegui prima gradle --stop in modo che nessun daemon tenga aperti i file e chiudi Android Studio o IntelliJ.",
            "La build successiva scarica di nuovo ogni dipendenza, e in un progetto grande può richiedere qualche minuto, e Gradle ricostruisce i suoi artefatti trasformati. Le impostazioni nella cartella .gradle, come gradle.properties, si trovano fuori dalla cartella caches e non vengono rimosse se elimini solo quella cartella.",
            "Se hai diversi progetti Android, aspettati che Gradle sia il singolo guadagno più grande di questa guida."
          ]
        },
        {
          "title": "Svuotale tutte in un solo passaggio con Disk Mop",
          "content": [
            "La pagina Libera spazio di Disk Mop elenca Cache npm, Cache pip, Cache NuGet e web e Cache Gradle come voci separate, ciascuna con la propria dimensione e la nota che i tuoi strumenti riscaricano i pacchetti quando serve. Non sono selezionate per impostazione predefinita, perché svuotarle ha un costo che devi scegliere consapevolmente: la build successiva richiede internet.",
            "Esegui la scansione, spunta le cache che vuoi e conferma. Disk Mop mostra ciò che ha trovato prima di eliminare qualsiasi cosa, e la scansione è gratuita. Chiudi prima l'IDE e qualsiasi build in esecuzione, così i file in uso non vengono saltati.",
            "Se non vuoi aspettare i download, svuota solo la cache che usi di rado e conserva quella del progetto su cui stai lavorando."
          ]
        }
      ],
      "verdict": [
        "Le cache di npm, pip, NuGet e Gradle sono copie di pacchetti che si possono sempre riscaricare, quindi svuotarle è sicuro e spesso libera molti gigabyte. Usa i comandi ufficiali per npm, pip e NuGet ed elimina la cartella caches per Gradle con Gradle arrestato.",
        "Disk Mop elenca tutte e quattro le cache nella pagina Libera spazio, mostra la dimensione di ciascuna e le lascia non selezionate finché non scegli tu. La scansione è gratuita, quindi puoi vedere quale cache vale la pena svuotare prima di decidere."
      ],
      "ctaText": "Scopri con Disk Mop quanto spazio occupano le tue cache di sviluppo"
    },
    "pt": {
      "title": "Como limpar os caches do npm, pip, NuGet e Gradle no Windows",
      "metaDescription": "Os caches do npm, pip, NuGet e Gradle podem ocupar muitos gigabytes no Windows sem você perceber. Veja onde ficam e como limpá-los sem quebrar suas compilações.",
      "subtitle": "Recupere espaço dos caches de pacotes de desenvolvimento e saiba exatamente o que você está abrindo mão",
      "keyTakeaways": [
        "npm, pip, NuGet e Gradle guardam cada pacote baixado em um cache para que as compilações sejam rápidas; o cache sempre pode ser baixado de novo, então limpá-lo é seguro, mas depois você precisa de conexão com a internet.",
        "Cada ferramenta tem o seu próprio comando de limpeza (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), enquanto o cache do Gradle é limpo excluindo a pasta caches com o Gradle parado.",
        "A primeira compilação depois da limpeza é mais lenta porque todas as dependências são baixadas de novo; por isso, evite limpar logo antes de um prazo de entrega ou quando estiver sem internet."
      ],
      "dataTable": {
        "caption": "Caches de gerenciadores de pacotes no Windows",
        "columns": [
          "Ferramenta",
          "Local do cache",
          "Comando oficial de limpeza",
          "O que acontece depois"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (instalações mais antigas: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Os pacotes são baixados de novo na próxima instalação"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheels e downloads são obtidos de novo quando necessário"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache e plugins-cache",
            "dotnet nuget locals all --clear",
            "Os pacotes são restaurados de novo na próxima compilação"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Não há comando; exclua a pasta caches com o Gradle parado",
            "As dependências são baixadas de novo na próxima compilação"
          ]
        ]
      },
      "howTo": {
        "name": "Como limpar os caches de pacotes de desenvolvimento no Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Meça cada cache",
            "text": "Abra o Explorador de Arquivos e cole o caminho de cada cache na barra de endereços, por exemplo %LOCALAPPDATA%\\npm-cache e %USERPROFILE%\\.gradle\\caches. Confira o tamanho da pasta em Propriedades para ver qual vale a pena limpar."
          },
          {
            "name": "Pare as compilações e as IDEs",
            "text": "Feche a IDE e qualquer compilação em andamento. No caso do Gradle, execute gradle --stop para que nenhum daemon mantenha a pasta do cache aberta."
          },
          {
            "name": "Use os comandos oficiais",
            "text": "Em um terminal, execute npm cache clean --force, pip cache purge e dotnet nuget locals all --clear. Cada comando mostra o que removeu."
          },
          {
            "name": "Exclua a pasta caches do Gradle",
            "text": "Exclua o conteúdo de %USERPROFILE%\\.gradle\\caches. O Gradle recria a pasta e baixa as dependências de novo na próxima compilação."
          },
          {
            "name": "Ou limpe tudo de uma vez com o Disk Mop",
            "text": "Abra o Disk Mop, vá para Liberar espaço e execute a verificação. Os caches do npm, pip, NuGet e Gradle aparecem na lista, mas não vêm selecionados por padrão; marque os que quiser e confirme."
          }
        ]
      },
      "faq": [
        {
          "question": "É seguro excluir o cache do npm?",
          "answer": "Sim. O cache do npm é um armazenamento de pacotes que o npm já baixou. Limpá-lo não altera seus projetos nem suas pastas node_modules; o npm simplesmente baixa os pacotes de novo na próxima vez que você os instalar. O próprio npm recomenda npm cache clean --force para isso."
        },
        {
          "question": "Limpar o cache do Gradle vai quebrar meus projetos?",
          "answer": "Não. Os arquivos da pasta caches são dependências baixadas e dados de compilação. Seu código-fonte não fica guardado ali. A próxima compilação baixa de novo o que precisa, o que demora mais e exige conexão com a internet."
        },
        {
          "question": "Por que o pip mantém um cache?",
          "answer": "O pip armazena os pacotes e as wheels compiladas que baixa, de modo que instalar o mesmo pacote em outro ambiente virtual seja rápido e não precise de download. Limpá-lo com pip cache purge remove apenas essa cópia armazenada."
        },
        {
          "question": "O cache do NuGet e web inclui dados do navegador?",
          "answer": "O cache do NuGet e web abrange os caches de pacotes do NuGet e a pasta INetCache do Windows, um cache usado por componentes do Windows para conteúdo da web. Ele é reconstruído sozinho e não contém seus documentos."
        }
      ],
      "intro": [
        "Os gerenciadores de pacotes guardam uma cópia de tudo o que baixam. npm, pip, NuGet e Gradle têm, cada um, uma pasta de cache no seu perfil, e em máquinas de desenvolvedor essas pastas costumam chegar a vários gigabytes. É seguro limpá-las porque os pacotes podem ser baixados de novo; o preço é que a próxima instalação ou compilação precisa de conexão com a internet e demora mais.",
        "Este guia lista onde fica cada cache, o comando oficial para limpá-lo e o que esperar depois, e mostra como limpar os quatro de uma vez com o Disk Mop. Ele também explica por que esses caches não vêm selecionados por padrão em um limpador e quando é melhor deixá-los em paz."
      ],
      "sections": [
        {
          "title": "Por que os caches de desenvolvimento ficam tão grandes",
          "content": [
            "Toda vez que você instala uma dependência, a ferramenta salva o arquivo baixado em um cache antes de descompactá-lo no seu projeto. O próximo projeto que precisar da mesma versão reutiliza a cópia em cache em vez de baixá-la. É uma boa troca por velocidade, mas o cache nunca esquece: versões antigas de pacotes de projetos que você terminou anos atrás continuam nele.",
            "O Gradle costuma ser o maior. Sua pasta caches guarda dependências baixadas, artefatos transformados e dados de compilação de cada projeto e de cada versão que ele já viu, e com frequência chega a vários gigabytes. O NuGet e o pip crescem mais devagar, e o npm fica no meio.",
            "Nada disso é o seu código-fonte. Um cache guarda apenas coisas que podem ser obtidas de novo no registro de pacotes."
          ]
        },
        {
          "title": "npm e pip",
          "content": [
            "O npm guarda seu cache em %LOCALAPPDATA%\\npm-cache; algumas instalações mais antigas usam %APPDATA%\\npm-cache. A forma oficial de limpá-lo é npm cache clean --force. O simples npm cache clean, sem a opção, se recusa a rodar, porque o npm trata o cache como autorreparável. Suas pastas node_modules são separadas e não são afetadas.",
            "O pip armazena downloads e wheels compiladas em %LOCALAPPDATA%\\pip\\Cache. Limpe com pip cache purge ou veja antes o que ele contém com pip cache info e pip cache list. Os ambientes virtuais não são tocados; somente os downloads armazenados são removidos.",
            "Depois de qualquer um dos comandos, a próxima instalação de um pacote é um download normal."
          ]
        },
        {
          "title": "NuGet e o cache da web do Windows",
          "content": [
            "O NuGet guarda os pacotes baixados em %LOCALAPPDATA%\\NuGet\\v3-cache e os plug-ins em plugins-cache. Para ver tudo, execute dotnet nuget locals all --list; para limpar, execute dotnet nuget locals all --clear. A pasta de pacotes globais no seu perfil é outra coisa: ela guarda os pacotes usados pelos projetos restaurados, e limpá-la significa uma restauração completa de cada projeto.",
            "O Disk Mop agrupa os caches do NuGet com a pasta INetCache do Windows em Cache do NuGet e web. O INetCache guarda conteúdo da web armazenado em cache por componentes do Windows e é reconstruído automaticamente.",
            "Feche o Visual Studio antes de limpar, porque ele mantém arquivos dessas pastas abertos enquanto está em execução."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "O cache do Gradle fica em %USERPROFILE%\\.gradle\\caches. Não existe um comando oficial de uma linha que limpe tudo; o jeito habitual é parar o Gradle e excluir o conteúdo da pasta caches. Execute gradle --stop primeiro para que nenhum daemon mantenha arquivos abertos e feche o Android Studio ou o IntelliJ.",
            "A próxima compilação baixa todas as dependências de novo, o que pode levar alguns minutos em um projeto grande, e o Gradle reconstrói seus artefatos transformados. As configurações da pasta .gradle, como gradle.properties, ficam fora da pasta caches e não são removidas quando você exclui apenas essa pasta.",
            "Se você mantém vários projetos Android, espere que o Gradle seja o maior ganho individual deste guia."
          ]
        },
        {
          "title": "Limpe tudo de uma vez com o Disk Mop",
          "content": [
            "A página Liberar espaço do Disk Mop lista Cache do npm, Cache do pip, Cache do NuGet e web e Cache do Gradle como itens separados, cada um com seu tamanho e a observação de que suas ferramentas baixam os pacotes de novo quando necessário. Eles não vêm selecionados por padrão, porque limpá-los tem um custo que você deve escolher de propósito: a próxima compilação precisa da internet.",
            "Execute a verificação, marque os caches que quiser e confirme. O Disk Mop mostra o que encontrou antes de excluir qualquer coisa, e a verificação é gratuita. Feche antes a IDE e qualquer compilação em andamento para que arquivos em uso não sejam ignorados.",
            "Se você não quer esperar por downloads, limpe apenas o cache que raramente usa e mantenha o do projeto em que está trabalhando."
          ]
        }
      ],
      "verdict": [
        "Os caches do npm, pip, NuGet e Gradle são cópias de pacotes que sempre podem ser baixados de novo, então limpá-los é seguro e muitas vezes libera vários gigabytes. Use os comandos oficiais para npm, pip e NuGet e exclua a pasta caches no caso do Gradle, com o Gradle parado.",
        "O Disk Mop lista os quatro caches na página Liberar espaço, mostra o tamanho de cada um e os deixa sem seleção até você escolher. A verificação é gratuita, então você pode ver qual cache vale a pena limpar antes de decidir."
      ],
      "ctaText": "Veja com o Disk Mop quanto espaço seus caches de desenvolvimento ocupam"
    },
    "ja": {
      "title": "Windowsでnpm・pip・NuGet・Gradleのキャッシュを削除する方法",
      "metaDescription": "npm、pip、NuGet、Gradleのキャッシュは、Windowsで気づかないうちに数GBを占めることがあります。保存場所と、ビルドを壊さずに削除する方法を解説します。",
      "subtitle": "開発用パッケージキャッシュの容量を取り戻し、何を手放すのかを正確に把握する",
      "keyTakeaways": [
        "npm、pip、NuGet、Gradleは、ビルドを高速にするためにダウンロードしたパッケージをすべてキャッシュに保存します。キャッシュはいつでも再ダウンロードできるため削除は安全ですが、削除後はインターネット接続が必要です。",
        "各ツールには専用の削除コマンドがあります（npm cache clean --force、pip cache purge、dotnet nuget locals all --clear）。Gradleのキャッシュは、Gradleを停止した状態でcachesフォルダーを削除して消去します。",
        "削除後の最初のビルドは、すべての依存関係を再ダウンロードするため遅くなります。締め切り直前やオフラインのときの削除は避けてください。"
      ],
      "dataTable": {
        "caption": "Windowsにおけるパッケージマネージャーのキャッシュ",
        "columns": [
          "ツール",
          "キャッシュの場所",
          "公式の削除コマンド",
          "削除後の動作"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache（古い環境: %APPDATA%\\npm-cache）",
            "npm cache clean --force",
            "次回のインストール時にパッケージが再ダウンロードされる"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "必要になったときにwheelやダウンロードが再取得される"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache と plugins-cache",
            "dotnet nuget locals all --clear",
            "次回のビルド時にパッケージが再び復元される"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "コマンドなし。Gradleを停止してcachesフォルダーを削除する",
            "次回のビルド時に依存関係が再ダウンロードされる"
          ]
        ]
      },
      "howTo": {
        "name": "Windowsで開発用パッケージキャッシュを削除する方法",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "各キャッシュのサイズを確認する",
            "text": "エクスプローラーを開き、各キャッシュのパス（例: %LOCALAPPDATA%\\npm-cache や %USERPROFILE%\\.gradle\\caches）をアドレスバーに貼り付けます。プロパティでフォルダーのサイズを確認し、削除する価値があるものを見極めます。"
          },
          {
            "name": "ビルドとIDEを停止する",
            "text": "IDEと実行中のビルドをすべて閉じます。Gradleの場合は gradle --stop を実行し、デーモンがキャッシュフォルダーを開いたままにならないようにします。"
          },
          {
            "name": "公式コマンドを使う",
            "text": "ターミナルで npm cache clean --force、pip cache purge、dotnet nuget locals all --clear を実行します。各コマンドは削除した内容を表示します。"
          },
          {
            "name": "Gradleのcachesフォルダーを削除する",
            "text": "%USERPROFILE%\\.gradle\\caches の中身を削除します。Gradleはフォルダーを作り直し、次回のビルドで依存関係を再ダウンロードします。"
          },
          {
            "name": "またはDisk Mopでまとめて削除する",
            "text": "Disk Mopを開き、「空き容量を増やす」に進んでスキャンを実行します。npm、pip、NuGet、Gradleのキャッシュは一覧に表示されますが、既定では選択されていません。削除したいものにチェックを入れて確定します。"
          }
        ]
      },
      "faq": [
        {
          "question": "npmのキャッシュを削除しても安全ですか？",
          "answer": "はい。npmのキャッシュは、npmがすでにダウンロードしたパッケージの保管場所です。削除してもプロジェクトやnode_modulesフォルダーは変わらず、次回インストールするときにnpmがパッケージを再ダウンロードするだけです。npm自身もこの目的で npm cache clean --force を推奨しています。"
        },
        {
          "question": "Gradleのキャッシュを削除するとプロジェクトが壊れますか？",
          "answer": "いいえ。cachesフォルダー内のファイルは、ダウンロード済みの依存関係とビルドデータです。ソースコードはここには保存されていません。次回のビルドで必要なものが再ダウンロードされるため、時間がかかり、インターネット接続が必要になります。"
        },
        {
          "question": "pipはなぜキャッシュを保持するのですか？",
          "answer": "pipはダウンロードしたパッケージとビルド済みのwheelを保存するため、別の仮想環境に同じパッケージをインストールするときに、ダウンロードなしで素早く済みます。pip cache purge で削除しても、保存されたコピーが消えるだけです。"
        },
        {
          "question": "NuGet／Webキャッシュにはブラウザーのデータも含まれますか？",
          "answer": "NuGet／Webキャッシュは、NuGetのパッケージキャッシュと、Windowsのコンポーネントがウェブコンテンツ用に使うキャッシュであるINetCacheフォルダーを対象としています。自動的に再構築され、ドキュメントは含まれません。"
        }
      ],
      "intro": [
        "パッケージマネージャーは、ダウンロードしたものすべてのコピーを保持します。npm、pip、NuGet、Gradleにはそれぞれプロファイル内にキャッシュフォルダーがあり、開発用のマシンでは数GBに達することも珍しくありません。パッケージは再ダウンロードできるので削除しても安全ですが、次回のインストールやビルドにはインターネット接続が必要で、時間もかかります。",
        "このガイドでは、各キャッシュの場所、削除する公式コマンド、削除後に起こることを紹介し、Disk Mopで4つをまとめて削除する方法を説明します。また、クリーナーでこれらのキャッシュが既定で選択されない理由と、手を付けないほうがよい場面についても解説します。"
      ],
      "sections": [
        {
          "title": "開発用キャッシュが大きくなる理由",
          "content": [
            "依存関係をインストールするたびに、ツールはダウンロードしたアーカイブをキャッシュに保存してから、プロジェクトに展開します。同じバージョンを必要とする次のプロジェクトは、再ダウンロードせずにキャッシュ済みのコピーを再利用します。速度の面では良い仕組みですが、キャッシュは何も忘れません。何年も前に終わったプロジェクトの古いパッケージのバージョンも残り続けます。",
            "通常、最も大きくなるのはGradleです。cachesフォルダーには、これまでに扱ったすべてのプロジェクトとバージョンの、ダウンロード済みの依存関係、変換済みの成果物、ビルドデータが保存され、数GBに達することもよくあります。NuGetとpipの増え方は緩やかで、npmはその中間です。",
            "これらはいずれもソースコードではありません。キャッシュに入っているのは、パッケージレジストリから再取得できるものだけです。"
          ]
        },
        {
          "title": "npmとpip",
          "content": [
            "npmはキャッシュを %LOCALAPPDATA%\\npm-cache に保存します。古い環境の一部では %APPDATA%\\npm-cache を使います。公式の削除方法は npm cache clean --force です。フラグなしの npm cache clean だけでは、npmがキャッシュを自己修復するものとして扱っているため、実行を拒否されます。node_modulesフォルダーは別物で、影響を受けません。",
            "pipはダウンロードしたものとビルド済みのwheelを %LOCALAPPDATA%\\pip\\Cache に保存します。pip cache purge で削除できます。その前に pip cache info と pip cache list で内容を確認することもできます。仮想環境には触れず、保存されたダウンロードだけが削除されます。",
            "どちらのコマンドを実行しても、次回のパッケージのインストールは通常のダウンロードになります。"
          ]
        },
        {
          "title": "NuGetとWindowsのWebキャッシュ",
          "content": [
            "NuGetはダウンロードしたパッケージを %LOCALAPPDATA%\\NuGet\\v3-cache に、プラグインを plugins-cache に保存します。すべてを確認するには dotnet nuget locals all --list を、削除するには dotnet nuget locals all --clear を実行します。プロファイル配下のグローバルパッケージフォルダーは別のもので、復元済みのプロジェクトが使うパッケージが入っています。これを削除すると、すべてのプロジェクトで完全な復元が必要になります。",
            "Disk Mopは、NuGetのキャッシュをWindowsのINetCacheフォルダーとあわせて「NuGet／Webキャッシュ」にまとめています。INetCacheには、Windowsのコンポーネントがキャッシュしたウェブコンテンツが入っており、自動的に再構築されます。",
            "削除する前にVisual Studioを閉じてください。実行中はこれらのフォルダー内のファイルを開いたままにするためです。"
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Gradleのキャッシュは %USERPROFILE%\\.gradle\\caches にあります。全体を削除する公式の1行コマンドはなく、通常はGradleを停止してcachesフォルダーの中身を削除します。まず gradle --stop を実行してデーモンがファイルを開いたままにならないようにし、Android StudioやIntelliJも閉じてください。",
            "次回のビルドではすべての依存関係が再ダウンロードされ、大規模なプロジェクトでは数分かかることがあります。Gradleは変換済みの成果物も再構築します。gradle.propertiesなど.gradleフォルダー内の設定はcachesフォルダーの外にあるため、そのフォルダーだけを削除しても消えません。",
            "複数のAndroidプロジェクトをお持ちなら、このガイドの中でGradleが最も大きな効果をもたらすと考えてよいでしょう。"
          ]
        },
        {
          "title": "Disk Mopでまとめて削除する",
          "content": [
            "Disk Mopの「空き容量を増やす」ページには、npmキャッシュ、pipキャッシュ、NuGet／Webキャッシュ、Gradleキャッシュが個別の項目として、それぞれのサイズと「必要になればツールがパッケージを再ダウンロードする」という注記とともに表示されます。削除には、次回のビルドでインターネットが必要になるという代償があり、意図して選ぶべきものなので、既定では選択されていません。",
            "スキャンを実行し、削除したいキャッシュにチェックを入れて確定します。Disk Mopは削除する前に見つかったものを表示し、スキャンは無料です。使用中のファイルがスキップされないよう、先にIDEと実行中のビルドを閉じてください。",
            "ダウンロードを待ちたくない場合は、あまり使わないキャッシュだけを削除し、作業中のプロジェクトのキャッシュは残してください。"
          ]
        }
      ],
      "verdict": [
        "npm、pip、NuGet、Gradleのキャッシュは、いつでも再ダウンロードできるパッケージのコピーなので、削除しても安全で、数GBの空き容量が増えることも少なくありません。npm、pip、NuGetは公式コマンドを使い、GradleはGradleを停止してcachesフォルダーを削除します。",
        "Disk Mopは「空き容量を増やす」ページで4つのキャッシュをすべて表示し、それぞれのサイズを示して、選ぶまで未選択のままにします。スキャンは無料なので、どのキャッシュを削除する価値があるかを確認してから判断できます。"
      ],
      "ctaText": "Disk Mopで開発用キャッシュの容量を確認する"
    },
    "ko": {
      "title": "Windows에서 npm, pip, NuGet, Gradle 캐시 삭제하는 방법",
      "metaDescription": "npm, pip, NuGet, Gradle 캐시는 Windows에서 모르는 사이 수 GB를 차지할 수 있습니다. 캐시 위치와 빌드를 망가뜨리지 않고 삭제하는 방법을 알려 드립니다.",
      "subtitle": "개발용 패키지 캐시에서 공간을 되찾고, 무엇을 포기하는지 정확히 알아 두세요",
      "keyTakeaways": [
        "npm, pip, NuGet, Gradle은 빌드를 빠르게 하려고 내려받은 모든 패키지를 캐시에 보관합니다. 캐시는 언제든 다시 내려받을 수 있으므로 삭제해도 안전하지만, 삭제 후에는 인터넷 연결이 필요합니다.",
        "도구마다 고유의 삭제 명령이 있으며(npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), Gradle 캐시는 Gradle을 중지한 상태에서 caches 폴더를 삭제하여 비웁니다.",
        "삭제 후 첫 빌드는 모든 종속성을 다시 내려받으므로 더 느립니다. 마감 직전이나 오프라인일 때는 삭제하지 마세요."
      ],
      "dataTable": {
        "caption": "Windows의 패키지 관리자 캐시",
        "columns": [
          "도구",
          "캐시 위치",
          "공식 삭제 명령",
          "삭제 후 동작"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (이전 환경: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "다음 설치 때 패키지를 다시 내려받습니다"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "필요할 때 wheel과 다운로드를 다시 가져옵니다"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache 및 plugins-cache",
            "dotnet nuget locals all --clear",
            "다음 빌드 때 패키지를 다시 복원합니다"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "명령 없음. Gradle을 중지한 상태에서 caches 폴더를 삭제",
            "다음 빌드 때 종속성을 다시 내려받습니다"
          ]
        ]
      },
      "howTo": {
        "name": "Windows에서 개발용 패키지 캐시를 삭제하는 방법",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "각 캐시의 크기 확인하기",
            "text": "파일 탐색기를 열고 각 캐시 경로(예: %LOCALAPPDATA%\\npm-cache, %USERPROFILE%\\.gradle\\caches)를 주소 표시줄에 붙여넣습니다. 속성에서 폴더 크기를 확인하여 어느 것을 삭제할 가치가 있는지 판단합니다."
          },
          {
            "name": "빌드와 IDE 중지하기",
            "text": "IDE와 실행 중인 모든 빌드를 닫습니다. Gradle은 gradle --stop을 실행하여 어떤 데몬도 캐시 폴더를 열어 두지 않도록 합니다."
          },
          {
            "name": "공식 명령 사용하기",
            "text": "터미널에서 npm cache clean --force, pip cache purge, dotnet nuget locals all --clear를 실행합니다. 각 명령은 삭제한 내용을 출력합니다."
          },
          {
            "name": "Gradle caches 폴더 삭제하기",
            "text": "%USERPROFILE%\\.gradle\\caches의 내용을 삭제합니다. Gradle은 폴더를 다시 만들고 다음 빌드 때 종속성을 다시 내려받습니다."
          },
          {
            "name": "또는 Disk Mop으로 한 번에 삭제하기",
            "text": "Disk Mop을 열고 공간 확보로 이동하여 검사를 실행합니다. npm, pip, NuGet, Gradle 캐시는 목록에 표시되지만 기본적으로 선택되어 있지 않습니다. 원하는 항목을 선택하고 확인하세요."
          }
        ]
      },
      "faq": [
        {
          "question": "npm 캐시를 삭제해도 안전한가요?",
          "answer": "네. npm 캐시는 npm이 이미 내려받은 패키지의 저장소입니다. 삭제해도 프로젝트나 node_modules 폴더는 바뀌지 않으며, 다음에 설치할 때 npm이 패키지를 다시 내려받을 뿐입니다. npm 자체도 이를 위해 npm cache clean --force를 권장합니다."
        },
        {
          "question": "Gradle 캐시를 삭제하면 프로젝트가 망가지나요?",
          "answer": "아니요. caches 폴더의 파일은 내려받은 종속성과 빌드 데이터입니다. 소스 코드는 그곳에 저장되지 않습니다. 다음 빌드에서 필요한 것을 다시 내려받으므로 시간이 더 걸리고 인터넷 연결이 필요합니다."
        },
        {
          "question": "pip는 왜 캐시를 유지하나요?",
          "answer": "pip는 내려받은 패키지와 빌드된 wheel을 저장하여, 다른 가상 환경에 같은 패키지를 설치할 때 다운로드 없이 빠르게 설치할 수 있게 합니다. pip cache purge로 삭제해도 저장된 사본만 제거됩니다."
        },
        {
          "question": "NuGet 및 웹 캐시에 브라우저 데이터도 포함되나요?",
          "answer": "NuGet 및 웹 캐시는 NuGet의 패키지 캐시와, Windows 구성 요소가 웹 콘텐츠용으로 사용하는 캐시인 Windows INetCache 폴더를 포함합니다. 저절로 다시 생성되며 문서는 들어 있지 않습니다."
        }
      ],
      "intro": [
        "패키지 관리자는 내려받은 모든 것의 사본을 보관합니다. npm, pip, NuGet, Gradle은 각각 사용자 프로필에 캐시 폴더가 있으며, 개발용 컴퓨터에서는 이 폴더들이 수 GB까지 커지는 일이 흔합니다. 패키지는 다시 내려받을 수 있으므로 삭제해도 안전하지만, 그 대가로 다음 설치나 빌드에 인터넷 연결이 필요하고 시간이 더 걸립니다.",
        "이 가이드는 각 캐시의 위치, 삭제하는 공식 명령, 삭제 후 예상되는 상황을 정리하고, Disk Mop으로 네 가지를 한 번에 삭제하는 방법을 보여 줍니다. 또한 정리 도구에서 이 캐시들이 기본으로 선택되지 않는 이유와, 건드리지 않는 편이 나은 경우도 설명합니다."
      ],
      "sections": [
        {
          "title": "개발용 캐시가 이렇게 커지는 이유",
          "content": [
            "종속성을 설치할 때마다 도구는 내려받은 아카이브를 프로젝트에 풀기 전에 캐시에 저장합니다. 같은 버전이 필요한 다음 프로젝트는 다시 내려받는 대신 캐시된 사본을 재사용합니다. 속도 면에서는 좋은 거래이지만, 캐시는 아무것도 잊지 않습니다. 몇 년 전에 끝낸 프로젝트의 오래된 패키지 버전도 그대로 남아 있습니다.",
            "대개 가장 큰 것은 Gradle입니다. caches 폴더에는 지금까지 본 모든 프로젝트와 모든 버전의 내려받은 종속성, 변환된 아티팩트, 빌드 데이터가 들어 있으며 흔히 수 GB에 이릅니다. NuGet과 pip는 더 천천히 커지고, npm은 그 중간입니다.",
            "이 중 어느 것도 소스 코드가 아닙니다. 캐시에는 패키지 레지스트리에서 다시 가져올 수 있는 것만 들어 있습니다."
          ]
        },
        {
          "title": "npm과 pip",
          "content": [
            "npm은 캐시를 %LOCALAPPDATA%\\npm-cache에 보관하며, 일부 이전 설치는 %APPDATA%\\npm-cache를 사용합니다. 공식적인 삭제 방법은 npm cache clean --force입니다. 플래그 없이 npm cache clean만 실행하면 npm이 캐시를 스스로 복구되는 것으로 취급하기 때문에 실행을 거부합니다. node_modules 폴더는 별개이며 영향을 받지 않습니다.",
            "pip는 다운로드와 빌드된 wheel을 %LOCALAPPDATA%\\pip\\Cache에 저장합니다. pip cache purge로 삭제하거나, 먼저 pip cache info와 pip cache list로 내용을 확인할 수 있습니다. 가상 환경은 건드리지 않으며, 저장된 다운로드만 제거됩니다.",
            "어느 명령을 실행하든, 다음에 패키지를 설치할 때는 일반적인 다운로드가 이루어집니다."
          ]
        },
        {
          "title": "NuGet과 Windows 웹 캐시",
          "content": [
            "NuGet은 내려받은 패키지를 %LOCALAPPDATA%\\NuGet\\v3-cache에, 플러그인을 plugins-cache에 보관합니다. 모두 확인하려면 dotnet nuget locals all --list를, 삭제하려면 dotnet nuget locals all --clear를 실행하세요. 프로필 아래의 전역 패키지 폴더는 다른 것입니다. 복원된 프로젝트가 사용하는 패키지가 들어 있으며, 이를 삭제하면 모든 프로젝트에서 전체 복원이 필요합니다.",
            "Disk Mop은 NuGet 캐시를 Windows INetCache 폴더와 함께 NuGet 및 웹 캐시로 묶어 보여 줍니다. INetCache에는 Windows 구성 요소가 캐시한 웹 콘텐츠가 있으며 자동으로 다시 생성됩니다.",
            "삭제하기 전에 Visual Studio를 닫으세요. 실행 중에는 이 폴더들의 파일을 열어 두기 때문입니다."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Gradle의 캐시는 %USERPROFILE%\\.gradle\\caches입니다. 전체를 삭제하는 공식 한 줄 명령은 없으며, 보통은 Gradle을 중지하고 caches 폴더의 내용을 삭제합니다. 먼저 gradle --stop을 실행하여 어떤 데몬도 파일을 열어 두지 않도록 하고, Android Studio나 IntelliJ를 닫으세요.",
            "다음 빌드에서는 모든 종속성을 다시 내려받으며, 규모가 큰 프로젝트에서는 몇 분이 걸릴 수 있고 Gradle은 변환된 아티팩트도 다시 생성합니다. gradle.properties 같은 .gradle 폴더의 설정은 caches 폴더 밖에 있으므로, 그 폴더만 삭제할 때는 함께 지워지지 않습니다.",
            "Android 프로젝트가 여러 개라면, 이 가이드에서 Gradle이 가장 큰 효과를 낼 것으로 예상하세요."
          ]
        },
        {
          "title": "Disk Mop으로 한 번에 삭제하기",
          "content": [
            "Disk Mop의 공간 확보 페이지에는 npm 캐시, pip 캐시, NuGet 및 웹 캐시, Gradle 캐시가 각각 별도 항목으로 나열되며, 크기와 함께 필요할 때 도구가 패키지를 다시 내려받는다는 안내가 표시됩니다. 삭제에는 다음 빌드에 인터넷이 필요하다는 대가가 있어 의도적으로 선택해야 하므로, 기본으로 선택되어 있지 않습니다.",
            "검사를 실행하고, 원하는 캐시를 선택한 뒤 확인하세요. Disk Mop은 삭제하기 전에 찾은 내용을 보여 주며, 검사는 무료입니다. 사용 중인 파일이 건너뛰어지지 않도록 먼저 IDE와 실행 중인 모든 빌드를 닫으세요.",
            "다운로드를 기다리고 싶지 않다면, 거의 쓰지 않는 캐시만 삭제하고 지금 작업 중인 프로젝트의 캐시는 남겨 두세요."
          ]
        }
      ],
      "verdict": [
        "npm, pip, NuGet, Gradle 캐시는 언제든 다시 내려받을 수 있는 패키지의 사본이므로 삭제해도 안전하며, 수 GB를 확보하는 경우가 많습니다. npm, pip, NuGet은 공식 명령을 사용하고, Gradle은 Gradle을 중지한 상태에서 caches 폴더를 삭제하세요.",
        "Disk Mop은 공간 확보 페이지에 네 가지 캐시를 모두 나열하고 각각의 크기를 보여 주며, 직접 선택할 때까지 선택하지 않은 상태로 둡니다. 검사는 무료이므로 결정하기 전에 어느 캐시를 삭제할 가치가 있는지 확인할 수 있습니다."
      ],
      "ctaText": "Disk Mop으로 개발용 캐시가 차지하는 공간 확인하기"
    },
    "zh-Hans": {
      "title": "如何在 Windows 上清理 npm、pip、NuGet 和 Gradle 缓存",
      "metaDescription": "npm、pip、NuGet 和 Gradle 缓存在 Windows 上可能悄悄占用数 GB 空间。了解它们的位置，以及如何在不破坏构建的前提下清理。",
      "subtitle": "从开发包缓存中找回空间，并清楚知道自己放弃了什么",
      "keyTakeaways": [
        "npm、pip、NuGet 和 Gradle 会把下载的每个包保存在缓存中，以加快构建；缓存随时可以重新下载，因此清理是安全的，但之后需要联网。",
        "每个工具都有自己的清理命令（npm cache clean --force、pip cache purge、dotnet nuget locals all --clear），而 Gradle 的缓存需要在停止 Gradle 后删除其 caches 文件夹来清理。",
        "清理后的第一次构建会更慢，因为所有依赖项都要重新下载；因此不要在临近截止日期或离线时清理。"
      ],
      "dataTable": {
        "caption": "Windows 上的包管理器缓存",
        "columns": [
          "工具",
          "缓存位置",
          "官方清理命令",
          "清理之后会发生什么"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache（较旧的安装：%APPDATA%\\npm-cache）",
            "npm cache clean --force",
            "下次安装时重新下载包"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "需要时重新获取 wheel 和下载内容"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache 和 plugins-cache",
            "dotnet nuget locals all --clear",
            "下次构建时重新还原包"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "没有命令；停止 Gradle 后删除 caches 文件夹",
            "下次构建时重新下载依赖项"
          ]
        ]
      },
      "howTo": {
        "name": "如何在 Windows 上清理开发包缓存",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "查看每个缓存的大小",
            "text": "打开文件资源管理器，把每个缓存路径粘贴到地址栏，例如 %LOCALAPPDATA%\\npm-cache 和 %USERPROFILE%\\.gradle\\caches。在属性中查看文件夹大小，判断哪一个值得清理。"
          },
          {
            "name": "停止构建和 IDE",
            "text": "关闭 IDE 和所有正在运行的构建。对于 Gradle，运行 gradle --stop，确保没有守护进程占用缓存文件夹。"
          },
          {
            "name": "使用官方命令",
            "text": "在终端中运行 npm cache clean --force、pip cache purge 和 dotnet nuget locals all --clear。每条命令都会输出它删除了什么。"
          },
          {
            "name": "删除 Gradle 的 caches 文件夹",
            "text": "删除 %USERPROFILE%\\.gradle\\caches 中的内容。Gradle 会重新创建该文件夹，并在下次构建时重新下载依赖项。"
          },
          {
            "name": "或者用 Disk Mop 一次性清理",
            "text": "打开 Disk Mop，进入“释放空间”并运行扫描。npm、pip、NuGet 和 Gradle 缓存会被列出，但默认不会勾选；勾选需要的项目并确认即可。"
          }
        ]
      },
      "faq": [
        {
          "question": "删除 npm 缓存安全吗？",
          "answer": "安全。npm 缓存是 npm 已下载包的存储区。清理它不会改变你的项目或 node_modules 文件夹；npm 只是在你下次安装时重新下载包。npm 自己也为此推荐使用 npm cache clean --force。"
        },
        {
          "question": "清理 Gradle 缓存会破坏我的项目吗？",
          "answer": "不会。caches 文件夹中的文件是已下载的依赖项和构建数据，你的源代码并不存放在那里。下次构建会重新下载所需内容，这会花更长时间，并且需要联网。"
        },
        {
          "question": "pip 为什么要保留缓存？",
          "answer": "pip 会保存它下载的包和构建好的 wheel，这样在另一个虚拟环境中安装同一个包时速度很快，也无需下载。用 pip cache purge 清理只会删除这份保存的副本。"
        },
        {
          "question": "NuGet 与网页缓存包含浏览器数据吗？",
          "answer": "NuGet 与网页缓存涵盖 NuGet 的包缓存以及 Windows 的 INetCache 文件夹，后者是 Windows 组件用于存放网页内容的缓存。它会自行重建，不包含你的文档。"
        }
      ],
      "intro": [
        "包管理器会保留它们下载的所有内容的副本。npm、pip、NuGet 和 Gradle 在你的用户配置文件中各有一个缓存文件夹，在开发机上这些文件夹常常增长到数 GB。由于包可以重新下载，清理它们是安全的；代价是下次安装或构建需要联网，并且耗时更长。",
        "本指南列出了每个缓存所在的位置、清理它的官方命令以及之后的预期情况，并演示如何用 Disk Mop 一次性清理这四个缓存。它还解释了为什么清理工具默认不勾选这些缓存，以及什么时候最好不要去动它们。"
      ],
      "sections": [
        {
          "title": "开发缓存为什么会变得这么大",
          "content": [
            "每次安装依赖项时，工具都会先把下载的压缩包保存到缓存中，再解压到你的项目里。下一个需要同一版本的项目会重用缓存中的副本，而不是重新下载。就速度而言这是一笔划算的交换，但缓存从不遗忘：多年前完成的项目所用的旧版本包仍然留在其中。",
            "Gradle 通常是最大的。它的 caches 文件夹保存着它见过的每个项目和每个版本的已下载依赖项、转换后的构件和构建数据，常常达到数 GB。NuGet 和 pip 增长得更慢，npm 介于两者之间。",
            "这些都不是你的源代码。缓存里只有可以从包注册表重新获取的内容。"
          ]
        },
        {
          "title": "npm 和 pip",
          "content": [
            "npm 把缓存放在 %LOCALAPPDATA%\\npm-cache；一些较旧的安装使用 %APPDATA%\\npm-cache。官方的清理方式是 npm cache clean --force。不带该选项的 npm cache clean 会拒绝运行，因为 npm 认为缓存具有自我修复能力。你的 node_modules 文件夹与此无关，不受影响。",
            "pip 把下载内容和构建好的 wheel 存放在 %LOCALAPPDATA%\\pip\\Cache。用 pip cache purge 清理，或者先用 pip cache info 和 pip cache list 查看其中有什么。虚拟环境不会被触及，只会删除保存的下载内容。",
            "运行任一命令后，下次安装包时就是一次正常的下载。"
          ]
        },
        {
          "title": "NuGet 与 Windows 网页缓存",
          "content": [
            "NuGet 把下载的包保存在 %LOCALAPPDATA%\\NuGet\\v3-cache，把插件保存在 plugins-cache。要查看全部内容，运行 dotnet nuget locals all --list；要清理，运行 dotnet nuget locals all --clear。用户配置文件下的全局包文件夹是另一回事：它存放已还原项目所使用的包，清理它意味着每个项目都要进行一次完整还原。",
            "Disk Mop 把 NuGet 缓存与 Windows 的 INetCache 文件夹一起归入“NuGet 与网页缓存”。INetCache 存放 Windows 组件缓存的网页内容，会自动重建。",
            "清理之前请关闭 Visual Studio，因为它在运行期间会占用这些文件夹中的文件。"
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Gradle 的缓存位于 %USERPROFILE%\\.gradle\\caches。没有官方的一行命令可以清空整个缓存；通常的做法是停止 Gradle，然后删除 caches 文件夹中的内容。请先运行 gradle --stop，确保没有守护进程占用文件，并关闭 Android Studio 或 IntelliJ。",
            "下次构建会重新下载每个依赖项，在大型项目中可能需要几分钟，而且 Gradle 会重建它转换后的构件。.gradle 文件夹中的设置（例如 gradle.properties）位于 caches 文件夹之外，只删除该文件夹时不会被移除。",
            "如果你有多个 Android 项目，预计 Gradle 会是本指南中收益最大的一项。"
          ]
        },
        {
          "title": "用 Disk Mop 一次性清理",
          "content": [
            "Disk Mop 的“释放空间”页面把 npm 缓存、pip 缓存、NuGet 与网页缓存以及 Gradle 缓存分别列为独立的项目，并显示各自的大小，同时注明你的工具会在需要时重新下载这些包。它们默认不勾选，因为清理它们是有代价的，你应当有意识地选择：下次构建需要联网。",
            "运行扫描，勾选想清理的缓存并确认。Disk Mop 会在删除任何内容之前显示它找到的东西，而且扫描是免费的。请先关闭 IDE 和所有正在运行的构建，以免正在使用的文件被跳过。",
            "如果你不想等待下载，可以只清理很少使用的缓存，保留当前正在做的项目所用的缓存。"
          ]
        }
      ],
      "verdict": [
        "npm、pip、NuGet 和 Gradle 缓存都是随时可以重新下载的包副本，因此清理是安全的，往往能释放数 GB 空间。npm、pip 和 NuGet 使用官方命令，Gradle 则在停止 Gradle 后删除 caches 文件夹。",
        "Disk Mop 在“释放空间”页面列出这四个缓存，显示每一个的大小，并在你做出选择之前保持不勾选。扫描是免费的，因此你可以在决定之前先看看哪个缓存值得清理。"
      ],
      "ctaText": "用 Disk Mop 查看开发缓存占用了多少空间"
    },
    "ar": {
      "title": "كيفية مسح ذاكرة npm وpip وNuGet وGradle المؤقتة على Windows",
      "metaDescription": "قد تستهلك ذاكرة npm وpip وNuGet وGradle المؤقتة عدة غيغابايت على Windows دون أن تلاحظ. تعرّف على أماكنها وكيفية مسحها دون إتلاف عمليات البناء لديك.",
      "subtitle": "استعد المساحة من ذاكرات حزم المطوّرين المؤقتة وافهم بدقة ما تتخلى عنه",
      "keyTakeaways": [
        "تحتفظ npm وpip وNuGet وGradle بكل حزمة تنزّلها في ذاكرة مؤقتة لتسريع عمليات البناء؛ ويمكن تنزيل هذه الذاكرة مجددًا في أي وقت، لذا فمسحها آمن لكنه يتطلب اتصالًا بالإنترنت بعد ذلك.",
        "لكل أداة أمر مسح خاص بها (npm cache clean --force وpip cache purge وdotnet nuget locals all --clear)، أما ذاكرة Gradle المؤقتة فتُمسح بحذف مجلد caches الخاص بها بعد إيقاف Gradle.",
        "يكون أول بناء بعد المسح أبطأ لأن كل التبعيات تُنزَّل من جديد، لذا تجنّب المسح قبل موعد تسليم قريب أو عندما لا يكون لديك اتصال بالإنترنت."
      ],
      "dataTable": {
        "caption": "ذاكرات مديري الحزم المؤقتة على Windows",
        "columns": [
          "الأداة",
          "موقع الذاكرة المؤقتة",
          "أمر المسح الرسمي",
          "ما يحدث بعد ذلك"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (في الإعدادات الأقدم: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "تُنزَّل الحزم مجددًا عند التثبيت التالي"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "تُجلب ملفات wheel والتنزيلات مجددًا عند الحاجة"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache وplugins-cache",
            "dotnet nuget locals all --clear",
            "تُستعاد الحزم مجددًا عند البناء التالي"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "لا يوجد أمر؛ احذف مجلد caches بعد إيقاف Gradle",
            "تُنزَّل التبعيات مجددًا عند البناء التالي"
          ]
        ]
      },
      "howTo": {
        "name": "كيفية مسح ذاكرات حزم المطوّرين المؤقتة على Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "قِس حجم كل ذاكرة مؤقتة",
            "text": "افتح مستكشف الملفات والصق مسار كل ذاكرة مؤقتة في شريط العنوان، مثل %LOCALAPPDATA%\\npm-cache و%USERPROFILE%\\.gradle\\caches. تحقق من حجم المجلد في «خصائص» لتعرف أيها يستحق المسح."
          },
          {
            "name": "أوقف عمليات البناء وبيئات التطوير",
            "text": "أغلق بيئة التطوير (IDE) وأي عملية بناء قيد التشغيل. بالنسبة إلى Gradle، نفّذ gradle --stop حتى لا تبقى أي عملية خلفية (daemon) تُبقي مجلد الذاكرة المؤقتة مفتوحًا."
          },
          {
            "name": "استخدم الأوامر الرسمية",
            "text": "في الطرفية نفّذ npm cache clean --force وpip cache purge وdotnet nuget locals all --clear. يعرض كل أمر ما قام بإزالته."
          },
          {
            "name": "احذف مجلد caches الخاص بـ Gradle",
            "text": "احذف محتويات %USERPROFILE%\\.gradle\\caches. يعيد Gradle إنشاء المجلد وينزّل التبعيات مجددًا عند البناء التالي."
          },
          {
            "name": "أو امسحها دفعة واحدة باستخدام Disk Mop",
            "text": "افتح Disk Mop وانتقل إلى «تحرير مساحة» ثم شغّل الفحص. تظهر ذاكرات npm وpip وNuGet وGradle المؤقتة في القائمة لكنها غير محددة افتراضيًا؛ حدّد ما تريد ثم أكّد."
          }
        ]
      },
      "faq": [
        {
          "question": "هل حذف ذاكرة npm المؤقتة آمن؟",
          "answer": "نعم. ذاكرة npm المؤقتة هي مخزن للحزم التي نزّلتها npm بالفعل. مسحها لا يغيّر مشاريعك ولا مجلدات node_modules لديك؛ كل ما في الأمر أن npm تنزّل الحزم مجددًا عند تثبيتها في المرة التالية. وتوصي npm نفسها بالأمر npm cache clean --force لهذا الغرض."
        },
        {
          "question": "هل سيؤدي مسح ذاكرة Gradle المؤقتة إلى تعطيل مشاريعي؟",
          "answer": "لا. الملفات الموجودة في مجلد caches هي تبعيات منزّلة وبيانات بناء. أما شيفرتك المصدرية فلا تُخزَّن هناك. سينزّل البناء التالي ما يحتاجه من جديد، وهذا يستغرق وقتًا أطول ويتطلب اتصالًا بالإنترنت."
        },
        {
          "question": "لماذا تحتفظ pip بذاكرة مؤقتة؟",
          "answer": "تخزّن pip الحزم وملفات wheel المبنية التي تنزّلها، فيكون تثبيت الحزمة نفسها في بيئة افتراضية أخرى سريعًا ولا يحتاج إلى تنزيل. ومسحها بالأمر pip cache purge يزيل تلك النسخة المخزّنة فقط."
        },
        {
          "question": "هل تتضمن ذاكرة NuGet والويب المؤقتة بيانات المتصفح؟",
          "answer": "تشمل ذاكرة NuGet والويب المؤقتة ذاكرات حزم NuGet المؤقتة ومجلد INetCache في Windows، وهو ذاكرة مؤقتة تستخدمها مكونات Windows لمحتوى الويب. تُعاد بناؤها تلقائيًا ولا تحتوي على مستنداتك."
        }
      ],
      "intro": [
        "تحتفظ مديرات الحزم بنسخة من كل ما تنزّله. لكل من npm وpip وNuGet وGradle مجلد ذاكرة مؤقتة في ملفك الشخصي، وعلى جهاز المطوّر تنمو هذه المجلدات عادةً إلى عدة غيغابايت. مسحها آمن لأن الحزم يمكن تنزيلها مجددًا؛ والثمن أن التثبيت أو البناء التالي يحتاج إلى اتصال بالإنترنت ويستغرق وقتًا أطول.",
        "يوضح هذا الدليل مكان كل ذاكرة مؤقتة والأمر الرسمي لمسحها وما يمكن توقعه بعد ذلك، كما يشرح كيفية مسح الأربع جميعها دفعة واحدة باستخدام Disk Mop. ويشرح أيضًا لماذا لا تكون هذه الذاكرات محددة افتراضيًا في أداة التنظيف، ومتى يكون من الأفضل تركها."
      ],
      "sections": [
        {
          "title": "لماذا تكبر ذاكرات المطوّرين المؤقتة إلى هذا الحد",
          "content": [
            "في كل مرة تثبّت فيها تبعية، تحفظ الأداة الأرشيف المنزّل في ذاكرة مؤقتة قبل فك ضغطه داخل مشروعك. وعندما يحتاج المشروع التالي إلى الإصدار نفسه يعيد استخدام النسخة المخزّنة بدلًا من تنزيلها. هذه صفقة جيدة من أجل السرعة، لكن الذاكرة المؤقتة لا تنسى شيئًا: فالإصدارات القديمة من حزم مشاريع أنهيتها منذ سنوات تبقى فيها.",
            "عادةً ما تكون ذاكرة Gradle الأكبر. فمجلد caches لديها يضم التبعيات المنزّلة والمخرجات المحوَّلة وبيانات البناء لكل مشروع وكل إصدار رأتهما، وغالبًا ما يصل حجمه إلى عدة غيغابايت. أما NuGet وpip فتنموان ببطء أكبر، وتقع npm في المنتصف.",
            "لا شيء من هذا هو شيفرتك المصدرية. فالذاكرة المؤقتة لا تحتوي إلا على أشياء يمكن جلبها مجددًا من سجل الحزم."
          ]
        },
        {
          "title": "npm وpip",
          "content": [
            "تحتفظ npm بذاكرتها المؤقتة في %LOCALAPPDATA%\\npm-cache؛ وبعض التثبيتات الأقدم تستخدم %APPDATA%\\npm-cache. الطريقة الرسمية لمسحها هي npm cache clean --force. أما npm cache clean بدون الخيار فترفض التنفيذ، لأن npm تعدّ الذاكرة المؤقتة ذاتية الإصلاح. مجلدات node_modules منفصلة ولا تتأثر.",
            "تخزّن pip التنزيلات وملفات wheel المبنية في %LOCALAPPDATA%\\pip\\Cache. امسحها بالأمر pip cache purge، أو اطّلع أولًا على محتواها بالأمرين pip cache info وpip cache list. البيئات الافتراضية لا تُمسّ؛ تُزال التنزيلات المخزّنة فقط.",
            "بعد أي من الأمرين، يكون التثبيت التالي لأي حزمة تنزيلًا عاديًا."
          ]
        },
        {
          "title": "NuGet وذاكرة الويب المؤقتة في Windows",
          "content": [
            "يحتفظ NuGet بالحزم المنزّلة في %LOCALAPPDATA%\\NuGet\\v3-cache وبالمكوّنات الإضافية في plugins-cache. لعرض كل شيء نفّذ dotnet nuget locals all --list؛ ولمسحها نفّذ dotnet nuget locals all --clear. أما مجلد الحزم العام (global packages) ضمن ملفك الشخصي فهو شيء مختلف: فهو يضم الحزم التي تستخدمها المشاريع المستعادة، ومسحه يعني استعادة كاملة لكل مشروع.",
            "يجمع Disk Mop ذاكرات NuGet المؤقتة مع مجلد INetCache في Windows ضمن «ذاكرة NuGet والويب المؤقتة». يحتوي INetCache على محتوى ويب تخزّنه مكونات Windows مؤقتًا، وتُعاد بناؤه تلقائيًا.",
            "أغلق Visual Studio قبل المسح، لأنه يُبقي ملفات في هذه المجلدات مفتوحة أثناء تشغيله."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "ذاكرة Gradle المؤقتة هي %USERPROFILE%\\.gradle\\caches. لا يوجد أمر رسمي من سطر واحد يمسحها بالكامل؛ والطريقة المعتادة هي إيقاف Gradle ثم حذف محتويات مجلد caches. نفّذ gradle --stop أولًا حتى لا تُبقي أي عملية خلفية ملفات مفتوحة، وأغلق Android Studio أو IntelliJ.",
            "سينزّل البناء التالي كل تبعية من جديد، وقد يستغرق ذلك بضع دقائق في مشروع كبير، وتعيد Gradle بناء مخرجاتها المحوَّلة. أما الإعدادات في مجلد .gradle، مثل gradle.properties، فتقع خارج مجلد caches ولا تُحذف عند حذف ذلك المجلد وحده.",
            "إذا كنت تحتفظ بعدة مشاريع Android، فتوقّع أن تكون Gradle أكبر مكسب منفرد في هذا الدليل."
          ]
        },
        {
          "title": "امسحها دفعة واحدة باستخدام Disk Mop",
          "content": [
            "تعرض صفحة «تحرير مساحة» في Disk Mop «ذاكرة npm المؤقتة» و«ذاكرة pip المؤقتة» و«ذاكرة NuGet والويب المؤقتة» و«ذاكرة Gradle المؤقتة» كعناصر منفصلة، لكل منها حجمه مع ملاحظة بأن أدواتك تنزّل الحزم مجددًا عند الحاجة. وهي غير محددة افتراضيًا، لأن مسحها له كلفة ينبغي أن تختارها عن قصد: فالبناء التالي يحتاج إلى الإنترنت.",
            "شغّل الفحص وحدّد الذاكرات التي تريدها ثم أكّد. يعرض Disk Mop ما وجده قبل أن يحذف أي شيء، والفحص مجاني. أغلق بيئة التطوير وأي عملية بناء قيد التشغيل أولًا حتى لا تُتخطى الملفات المستخدمة.",
            "إذا كنت لا تريد انتظار التنزيلات، فامسح فقط الذاكرة التي نادرًا ما تستخدمها واحتفظ بتلك الخاصة بالمشروع الذي تعمل عليه."
          ]
        }
      ],
      "verdict": [
        "ذاكرات npm وpip وNuGet وGradle المؤقتة هي نسخ من حزم يمكن تنزيلها مجددًا دائمًا، لذا فمسحها آمن وغالبًا ما يحرر عدة غيغابايت. استخدم الأوامر الرسمية مع npm وpip وNuGet، واحذف مجلد caches مع Gradle بعد إيقافها.",
        "يعرض Disk Mop الذاكرات الأربع كلها في صفحة «تحرير مساحة»، ويبيّن حجم كل منها ويتركها غير محددة إلى أن تختار. الفحص مجاني، فيمكنك معرفة أي ذاكرة تستحق المسح قبل أن تقرر."
      ],
      "ctaText": "اعرف كم تستهلك ذاكرات المطوّرين المؤقتة من مساحتك باستخدام Disk Mop"
    },
    "he": {
      "title": "איך לנקות את המטמון של npm, pip, NuGet ו-Gradle ב-Windows",
      "metaDescription": "המטמון של npm, pip, NuGet ו-Gradle יכול לתפוס בשקט כמה גיגה-בייט ב-Windows. כך תמצאו איפה הוא נמצא ותנקו אותו בלי לפגוע בבניות של הפרויקטים שלכם.",
      "subtitle": "פנו מקום ממטמוני החבילות של המפתחים, ודעו בדיוק על מה אתם מוותרים",
      "keyTakeaways": [
        "npm, pip, NuGet ו-Gradle שומרים כל חבילה שהורדה במטמון כדי שהבנייה תהיה מהירה; תמיד אפשר להוריד את המטמון מחדש, ולכן ניקויו בטוח, אבל לאחר מכן נדרש חיבור לאינטרנט.",
        "לכל כלי יש פקודת ניקוי משלו (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), ואילו המטמון של Gradle מנוקה על ידי מחיקת תיקיית caches שלו כשהכלי עצור.",
        "הבנייה הראשונה אחרי הניקוי איטית יותר כי כל התלויות יורדות מחדש, ולכן כדאי להימנע מניקוי ממש לפני מועד הגשה או כשאין חיבור לאינטרנט."
      ],
      "dataTable": {
        "caption": "מטמוני מנהלי חבילות ב-Windows",
        "columns": [
          "כלי",
          "מיקום המטמון",
          "פקודת הניקוי הרשמית",
          "מה קורה אחר כך"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (בהתקנות ישנות יותר: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "החבילות יורדות מחדש בהתקנה הבאה"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "קובצי wheel והורדות נשלפים מחדש לפי הצורך"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache ו-plugins-cache",
            "dotnet nuget locals all --clear",
            "החבילות משוחזרות מחדש בבנייה הבאה"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "אין פקודה; מוחקים את תיקיית caches כש-Gradle עצור",
            "התלויות יורדות מחדש בבנייה הבאה"
          ]
        ]
      },
      "howTo": {
        "name": "איך לנקות מטמוני חבילות של מפתחים ב-Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "מדדו כל מטמון",
            "text": "פתחו את סייר הקבצים והדביקו את נתיב כל מטמון בשורת הכתובת, לדוגמה %LOCALAPPDATA%\\npm-cache ו-%USERPROFILE%\\.gradle\\caches. בדקו את גודל התיקייה ב\"מאפיינים\" כדי לראות איזה מהם שווה לנקות."
          },
          {
            "name": "עצרו בניות וסביבות פיתוח",
            "text": "סגרו את סביבת הפיתוח (IDE) וכל בנייה שרצה. עבור Gradle, הריצו gradle --stop כדי שאף daemon לא יחזיק את תיקיית המטמון פתוחה."
          },
          {
            "name": "השתמשו בפקודות הרשמיות",
            "text": "במסוף הריצו npm cache clean --force, pip cache purge ו-dotnet nuget locals all --clear. כל פקודה מדפיסה מה הוסר."
          },
          {
            "name": "מחקו את תיקיית caches של Gradle",
            "text": "מחקו את התוכן של %USERPROFILE%\\.gradle\\caches. Gradle יוצר את התיקייה מחדש ומוריד את התלויות שוב בבנייה הבאה."
          },
          {
            "name": "או נקו את כולם בבת אחת עם Disk Mop",
            "text": "פתחו את Disk Mop, עברו אל \"פינוי מקום\" והריצו את הסריקה. המטמונים של npm, pip, NuGet ו-Gradle מופיעים ברשימה אך אינם מסומנים כברירת מחדל; סמנו את אלה שתרצו ואשרו."
          }
        ]
      },
      "faq": [
        {
          "question": "האם בטוח למחוק את המטמון של npm?",
          "answer": "כן. המטמון של npm הוא מאגר של חבילות ש-npm כבר הוריד. ניקויו אינו משנה את הפרויקטים שלכם או את תיקיות node_modules; npm פשוט מוריד חבילות מחדש בפעם הבאה שתתקינו אותן. npm עצמו ממליץ על npm cache clean --force למטרה זו."
        },
        {
          "question": "האם ניקוי המטמון של Gradle יפגע בפרויקטים שלי?",
          "answer": "לא. הקבצים בתיקיית caches הם תלויות שהורדו ונתוני בנייה. קוד המקור שלכם אינו נשמר שם. הבנייה הבאה מורידה מחדש את מה שהיא צריכה, וזה אורך יותר זמן ודורש חיבור לאינטרנט."
        },
        {
          "question": "למה pip שומר מטמון?",
          "answer": "pip שומר את החבילות ואת קובצי ה-wheel שנבנו, כך שהתקנת אותה חבילה בסביבה וירטואלית אחרת מהירה ואינה דורשת הורדה. ניקוי באמצעות pip cache purge מסיר רק את ההעתק השמור הזה."
        },
        {
          "question": "האם מטמון NuGet והאינטרנט כולל נתוני דפדפן?",
          "answer": "מטמון NuGet והאינטרנט כולל את מטמוני החבילות של NuGet ואת תיקיית INetCache של Windows, שהיא מטמון שרכיבי Windows משתמשים בו לתוכן אינטרנט. הוא נבנה מחדש מעצמו ואינו מכיל את המסמכים שלכם."
        }
      ],
      "intro": [
        "מנהלי חבילות שומרים עותק של כל מה שהם מורידים. לכל אחד מהכלים npm, pip, NuGet ו-Gradle יש תיקיית מטמון בפרופיל שלכם, ובמחשב של מפתח התיקיות האלה גדלות בדרך כלל לכמה גיגה-בייט. בטוח לנקות אותן כי אפשר להוריד את החבילות מחדש; המחיר הוא שההתקנה או הבנייה הבאה דורשות חיבור לאינטרנט ולוקחות יותר זמן.",
        "המדריך הזה מפרט איפה נמצא כל מטמון, מהי הפקודה הרשמית לניקויו ומה לצפות אחר כך, ומראה איך לנקות את כל ארבעתם בבת אחת עם Disk Mop. הוא גם מסביר למה המטמונים האלה אינם מסומנים כברירת מחדל בכלי ניקוי, ומתי עדיף להשאיר אותם."
      ],
      "sections": [
        {
          "title": "למה מטמוני מפתחים גדלים כל כך",
          "content": [
            "בכל פעם שמתקינים תלות, הכלי שומר את הארכיון שהורד במטמון לפני שהוא מחלץ אותו לפרויקט. הפרויקט הבא שזקוק לאותה גרסה משתמש בעותק השמור במקום להוריד אותו שוב. זו עסקה טובה מבחינת מהירות, אבל המטמון לעולם לא שוכח: גרסאות ישנות של חבילות מפרויקטים שסיימתם לפני שנים נשארות בו.",
            "Gradle הוא בדרך כלל הגדול ביותר. תיקיית caches שלו מכילה תלויות שהורדו, ארטיפקטים שעברו המרה ונתוני בנייה לכל פרויקט ולכל גרסה שראה, ולרוב היא מגיעה לכמה גיגה-בייט. NuGet ו-pip גדלים לאט יותר, ו-npm נמצא באמצע.",
            "שום דבר מזה אינו קוד המקור שלכם. מטמון מכיל רק דברים שאפשר להביא שוב ממאגר החבילות."
          ]
        },
        {
          "title": "npm ו-pip",
          "content": [
            "npm שומר את המטמון שלו ב-%LOCALAPPDATA%\\npm-cache; בחלק מההתקנות הישנות יותר נעשה שימוש ב-%APPDATA%\\npm-cache. הדרך הרשמית לנקות אותו היא npm cache clean --force. הפקודה npm cache clean בלי הדגל מסרבת לרוץ, כי npm רואה במטמון מנגנון שמתקן את עצמו. תיקיות node_modules נפרדות ואינן מושפעות.",
            "pip שומר הורדות וקובצי wheel שנבנו ב-%LOCALAPPDATA%\\pip\\Cache. נקו אותו באמצעות pip cache purge, או בדקו תחילה מה יש בו באמצעות pip cache info ו-pip cache list. סביבות וירטואליות אינן נפגעות; רק ההורדות השמורות מוסרות.",
            "אחרי כל אחת מהפקודות, ההתקנה הבאה של חבילה היא הורדה רגילה."
          ]
        },
        {
          "title": "NuGet ומטמון האינטרנט של Windows",
          "content": [
            "NuGet שומר חבילות שהורדו ב-%LOCALAPPDATA%\\NuGet\\v3-cache ותוספים ב-plugins-cache. כדי לראות הכול הריצו dotnet nuget locals all --list; כדי לנקות הריצו dotnet nuget locals all --clear. תיקיית החבילות הגלובלית (global packages) בפרופיל שלכם היא דבר אחר: היא מכילה חבילות שפרויקטים משוחזרים משתמשים בהן, וניקויה פירושו שחזור מלא לכל פרויקט.",
            "Disk Mop מקבץ את מטמוני NuGet יחד עם תיקיית INetCache של Windows תחת \"מטמון NuGet ואינטרנט\". INetCache מכילה תוכן אינטרנט שרכיבי Windows שומרים במטמון, והיא נבנית מחדש אוטומטית.",
            "סגרו את Visual Studio לפני הניקוי, כי הוא משאיר קבצים בתיקיות האלה פתוחים בזמן שהוא רץ."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "המטמון של Gradle הוא %USERPROFILE%\\.gradle\\caches. אין פקודה רשמית בשורה אחת שמנקה את הכול; הדרך הרגילה היא לעצור את Gradle ולמחוק את התוכן של תיקיית caches. הריצו קודם gradle --stop כדי שאף daemon לא יחזיק קבצים פתוחים, וסגרו את Android Studio או IntelliJ.",
            "הבנייה הבאה מורידה מחדש כל תלות, מה שיכול לקחת כמה דקות בפרויקט גדול, ו-Gradle בונה מחדש את הארטיפקטים שעברו המרה. הגדרות בתיקיית .gradle, כמו gradle.properties, נמצאות מחוץ לתיקיית caches ולא נמחקות כשמוחקים רק אותה.",
            "אם יש לכם כמה פרויקטי Android, צפו ש-Gradle יהיה הרווח הבודד הגדול ביותר במדריך הזה."
          ]
        },
        {
          "title": "נקו את כולם בבת אחת עם Disk Mop",
          "content": [
            "בדף \"פינוי מקום\" של Disk Mop מופיעים \"מטמון npm\", \"מטמון pip\", \"מטמון NuGet ואינטרנט\" ו\"מטמון Gradle\" כפריטים נפרדים, כל אחד עם הגודל שלו והערה שהכלים שלכם מורידים את החבילות מחדש לפי הצורך. הם אינם מסומנים כברירת מחדל, כי לניקוי שלהם יש מחיר שכדאי לבחור במודע: הבנייה הבאה דורשת אינטרנט.",
            "הריצו את הסריקה, סמנו את המטמונים שתרצו ואשרו. Disk Mop מציג מה מצא לפני שהוא מוחק משהו, והסריקה חינמית. סגרו קודם את סביבת הפיתוח וכל בנייה שרצה, כדי שקבצים שנמצאים בשימוש לא ידולגו.",
            "אם אינכם רוצים לחכות להורדות, נקו רק את המטמון שבו אתם משתמשים לעיתים רחוקות והשאירו את זה של הפרויקט שאתם עובדים עליו."
          ]
        }
      ],
      "verdict": [
        "המטמונים של npm, pip, NuGet ו-Gradle הם עותקים של חבילות שתמיד אפשר להוריד מחדש, ולכן ניקויים בטוח ולרוב משחרר כמה גיגה-בייט. השתמשו בפקודות הרשמיות עבור npm, pip ו-NuGet, ומחקו את תיקיית caches עבור Gradle כשהוא עצור.",
        "Disk Mop מציג את ארבעת המטמונים בדף \"פינוי מקום\", מראה את הגודל של כל אחד ומשאיר אותם לא מסומנים עד שתבחרו. הסריקה חינמית, כך שתוכלו לראות איזה מטמון שווה לנקות לפני שתחליטו."
      ],
      "ctaText": "בדקו כמה מקום תופסים מטמוני המפתחים שלכם עם Disk Mop"
    },
    "id": {
      "title": "Cara Menghapus Cache npm, pip, NuGet, dan Gradle di Windows",
      "metaDescription": "Cache npm, pip, NuGet, dan Gradle bisa diam-diam memakan banyak gigabyte di Windows. Pelajari lokasinya dan cara menghapusnya tanpa merusak build Anda.",
      "subtitle": "Dapatkan kembali ruang dari cache paket developer dan ketahui persis apa yang Anda korbankan",
      "keyTakeaways": [
        "npm, pip, NuGet, dan Gradle menyimpan setiap paket yang diunduh di cache agar build cepat; cache selalu bisa diunduh lagi, jadi menghapusnya aman, tetapi setelahnya Anda memerlukan koneksi internet.",
        "Setiap alat punya perintah hapus sendiri (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), sedangkan cache Gradle dihapus dengan menghapus folder caches-nya saat Gradle dihentikan.",
        "Build pertama setelah penghapusan lebih lambat karena semua dependensi diunduh ulang, jadi hindari menghapus tepat sebelum tenggat atau saat Anda sedang offline."
      ],
      "dataTable": {
        "caption": "Cache package manager di Windows",
        "columns": [
          "Alat",
          "Lokasi cache",
          "Perintah hapus resmi",
          "Apa yang terjadi berikutnya"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (instalasi lama: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Paket diunduh lagi pada instalasi berikutnya"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Wheel dan unduhan diambil lagi saat diperlukan"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache dan plugins-cache",
            "dotnet nuget locals all --clear",
            "Paket dipulihkan lagi pada build berikutnya"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Tidak ada perintah; hapus folder caches saat Gradle dihentikan",
            "Dependensi diunduh lagi pada build berikutnya"
          ]
        ]
      },
      "howTo": {
        "name": "Cara menghapus cache paket developer di Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Ukur setiap cache",
            "text": "Buka File Explorer dan tempel path setiap cache ke bilah alamat, misalnya %LOCALAPPDATA%\\npm-cache dan %USERPROFILE%\\.gradle\\caches. Periksa ukuran folder di Properti untuk melihat mana yang layak dihapus."
          },
          {
            "name": "Hentikan build dan IDE",
            "text": "Tutup IDE dan build apa pun yang sedang berjalan. Untuk Gradle, jalankan gradle --stop agar tidak ada daemon yang menahan folder cache tetap terbuka."
          },
          {
            "name": "Gunakan perintah resmi",
            "text": "Di terminal, jalankan npm cache clean --force, pip cache purge, dan dotnet nuget locals all --clear. Setiap perintah menampilkan apa yang dihapusnya."
          },
          {
            "name": "Hapus folder caches Gradle",
            "text": "Hapus isi %USERPROFILE%\\.gradle\\caches. Gradle membuat ulang folder tersebut dan mengunduh dependensi lagi pada build berikutnya."
          },
          {
            "name": "Atau hapus semuanya sekaligus dengan Disk Mop",
            "text": "Buka Disk Mop, masuk ke Kosongkan ruang, lalu jalankan pemindaian. Cache npm, pip, NuGet, dan Gradle ditampilkan tetapi tidak dipilih secara default; centang yang Anda inginkan lalu konfirmasi."
          }
        ]
      },
      "faq": [
        {
          "question": "Apakah aman menghapus cache npm?",
          "answer": "Ya. Cache npm adalah penyimpanan paket yang sudah pernah diunduh npm. Menghapusnya tidak mengubah proyek atau folder node_modules Anda; npm hanya mengunduh paket lagi saat Anda menginstalnya berikutnya. npm sendiri merekomendasikan npm cache clean --force untuk keperluan ini."
        },
        {
          "question": "Apakah menghapus cache Gradle akan merusak proyek saya?",
          "answer": "Tidak. File di folder caches adalah dependensi yang diunduh dan data build. Kode sumber Anda tidak disimpan di sana. Build berikutnya mengunduh lagi apa yang dibutuhkan, yang memakan waktu lebih lama dan memerlukan koneksi internet."
        },
        {
          "question": "Mengapa pip menyimpan cache?",
          "answer": "pip menyimpan paket dan wheel hasil build yang diunduhnya, sehingga menginstal paket yang sama di virtual environment lain berjalan cepat dan tidak perlu mengunduh. Menghapusnya dengan pip cache purge hanya membuang salinan tersimpan itu."
        },
        {
          "question": "Apakah cache NuGet dan web mencakup data browser?",
          "answer": "Cache NuGet dan web mencakup cache paket NuGet serta folder INetCache milik Windows, yaitu cache yang dipakai komponen Windows untuk konten web. Cache ini dibangun ulang secara otomatis dan tidak berisi dokumen Anda."
        }
      ],
      "intro": [
        "Package manager menyimpan salinan dari semua yang mereka unduh. npm, pip, NuGet, dan Gradle masing-masing punya folder cache di profil Anda, dan di mesin developer folder ini umumnya tumbuh hingga beberapa gigabyte. Menghapusnya aman karena paketnya bisa diunduh lagi; harganya, instalasi atau build berikutnya memerlukan koneksi internet dan berjalan lebih lama.",
        "Panduan ini mencantumkan lokasi setiap cache, perintah resmi untuk menghapusnya, dan apa yang perlu diharapkan setelahnya, serta menunjukkan cara menghapus keempatnya sekaligus dengan Disk Mop. Panduan ini juga menjelaskan mengapa cache ini tidak dipilih secara default di aplikasi pembersih, dan kapan sebaiknya dibiarkan saja."
      ],
      "sections": [
        {
          "title": "Mengapa Cache Developer Bisa Sangat Besar",
          "content": [
            "Setiap kali Anda menginstal dependensi, alat menyimpan arsip yang diunduh di cache sebelum mengekstraknya ke proyek Anda. Proyek berikutnya yang membutuhkan versi yang sama memakai salinan dari cache alih-alih mengunduhnya lagi. Itu pertukaran yang bagus demi kecepatan, tetapi cache tidak pernah melupakan apa pun: versi lama paket dari proyek yang selesai bertahun-tahun lalu tetap tersimpan di dalamnya.",
            "Gradle biasanya yang terbesar. Folder caches-nya berisi dependensi yang diunduh, artefak hasil transformasi, dan data build untuk setiap proyek dan setiap versi yang pernah dilihatnya, dan umumnya mencapai beberapa gigabyte. NuGet dan pip tumbuh lebih lambat, sedangkan npm berada di tengah.",
            "Tidak satu pun dari ini adalah kode sumber Anda. Cache hanya berisi hal-hal yang bisa diambil lagi dari registry paket."
          ]
        },
        {
          "title": "npm dan pip",
          "content": [
            "npm menyimpan cache-nya di %LOCALAPPDATA%\\npm-cache; sebagian instalasi lama memakai %APPDATA%\\npm-cache. Cara resmi untuk menghapusnya adalah npm cache clean --force. Perintah npm cache clean tanpa flag menolak berjalan, karena npm menganggap cache bersifat memperbaiki diri sendiri. Folder node_modules Anda terpisah dan tidak terpengaruh.",
            "pip menyimpan unduhan dan wheel hasil build di %LOCALAPPDATA%\\pip\\Cache. Hapus dengan pip cache purge, atau lihat dulu isinya dengan pip cache info dan pip cache list. Virtual environment tidak disentuh; hanya unduhan yang tersimpan yang dihapus.",
            "Setelah salah satu perintah tersebut, instalasi paket berikutnya adalah unduhan biasa."
          ]
        },
        {
          "title": "NuGet dan Cache Web Windows",
          "content": [
            "NuGet menyimpan paket yang diunduh di %LOCALAPPDATA%\\NuGet\\v3-cache dan plugin di plugins-cache. Untuk melihat semuanya, jalankan dotnet nuget locals all --list; untuk menghapus, jalankan dotnet nuget locals all --clear. Folder global packages di profil Anda adalah hal yang berbeda: folder itu berisi paket yang dipakai proyek yang sudah dipulihkan, dan menghapusnya berarti pemulihan penuh untuk setiap proyek.",
            "Disk Mop mengelompokkan cache NuGet bersama folder INetCache Windows di bawah Cache NuGet dan web. INetCache berisi konten web yang di-cache oleh komponen Windows dan dibangun ulang secara otomatis.",
            "Tutup Visual Studio sebelum menghapus, karena aplikasi itu membiarkan file di folder-folder ini terbuka selama berjalan."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Cache Gradle berada di %USERPROFILE%\\.gradle\\caches. Tidak ada perintah satu baris resmi yang menghapus seluruhnya; cara yang lazim adalah menghentikan Gradle lalu menghapus isi folder caches. Jalankan gradle --stop terlebih dulu agar tidak ada daemon yang menahan file tetap terbuka, dan tutup Android Studio atau IntelliJ.",
            "Build berikutnya mengunduh ulang setiap dependensi, yang bisa memakan beberapa menit pada proyek besar, dan Gradle membangun ulang artefak hasil transformasinya. Pengaturan di folder .gradle, seperti gradle.properties, berada di luar folder caches dan tidak ikut terhapus bila Anda hanya menghapus folder itu.",
            "Jika Anda menyimpan beberapa proyek Android, harapkan Gradle menjadi penghematan tunggal terbesar dalam panduan ini."
          ]
        },
        {
          "title": "Hapus Semuanya Sekaligus dengan Disk Mop",
          "content": [
            "Halaman Kosongkan ruang di Disk Mop mencantumkan Cache npm, Cache pip, Cache NuGet dan web, serta Cache Gradle sebagai item terpisah, masing-masing dengan ukurannya dan catatan bahwa alat Anda mengunduh paket lagi saat diperlukan. Item ini tidak dipilih secara default, karena penghapusannya punya konsekuensi yang sebaiknya Anda pilih dengan sengaja: build berikutnya membutuhkan internet.",
            "Jalankan pemindaian, centang cache yang Anda inginkan, lalu konfirmasi. Disk Mop menampilkan apa yang ditemukannya sebelum menghapus apa pun, dan pemindaian gratis. Tutup IDE dan build yang sedang berjalan terlebih dulu agar file yang sedang dipakai tidak terlewati.",
            "Jika tidak ingin menunggu unduhan, hapus saja cache yang jarang Anda pakai dan pertahankan cache untuk proyek yang sedang Anda kerjakan."
          ]
        }
      ],
      "verdict": [
        "Cache npm, pip, NuGet, dan Gradle adalah salinan paket yang selalu bisa diunduh lagi, jadi menghapusnya aman dan sering membebaskan banyak gigabyte. Gunakan perintah resmi untuk npm, pip, dan NuGet, lalu hapus folder caches untuk Gradle saat Gradle dihentikan.",
        "Disk Mop mencantumkan keempat cache di halaman Kosongkan ruang, menampilkan ukuran masing-masing, dan membiarkannya tidak dipilih sampai Anda memilih. Pemindaian gratis, jadi Anda bisa melihat cache mana yang layak dihapus sebelum memutuskan."
      ],
      "ctaText": "Lihat berapa banyak ruang yang dipakai cache developer Anda dengan Disk Mop"
    },
    "pl": {
      "title": "Jak wyczyścić pamięć podręczną npm, pip, NuGet i Gradle w systemie Windows",
      "metaDescription": "Pamięć podręczna npm, pip, NuGet i Gradle potrafi po cichu zająć wiele gigabajtów w Windows. Sprawdź, gdzie się znajduje i jak ją wyczyścić bez psucia kompilacji.",
      "subtitle": "Odzyskaj miejsce zajęte przez pamięci podręczne pakietów i dowiedz się dokładnie, z czego rezygnujesz",
      "keyTakeaways": [
        "npm, pip, NuGet i Gradle zapisują każdy pobrany pakiet w pamięci podręcznej, aby kompilacje były szybkie; można ją zawsze pobrać ponownie, więc czyszczenie jest bezpieczne, ale potem potrzebne jest połączenie z internetem.",
        "Każde narzędzie ma własne polecenie czyszczenia (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), a pamięć podręczną Gradle czyści się, usuwając jej folder caches przy zatrzymanym Gradle.",
        "Pierwsza kompilacja po wyczyszczeniu jest wolniejsza, bo wszystkie zależności pobierane są od nowa, więc nie czyść pamięci tuż przed terminem oddania pracy ani wtedy, gdy jesteś offline."
      ],
      "dataTable": {
        "caption": "Pamięci podręczne menedżerów pakietów w Windows",
        "columns": [
          "Narzędzie",
          "Lokalizacja pamięci podręcznej",
          "Oficjalne polecenie czyszczenia",
          "Co dzieje się potem"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (starsze instalacje: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Pakiety są pobierane ponownie przy następnej instalacji"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Pakiety wheel i pobrane pliki są pobierane ponownie w razie potrzeby"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache i plugins-cache",
            "dotnet nuget locals all --clear",
            "Pakiety są przywracane ponownie przy następnej kompilacji"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Brak polecenia; usuń folder caches przy zatrzymanym Gradle",
            "Zależności są pobierane ponownie przy następnej kompilacji"
          ]
        ]
      },
      "howTo": {
        "name": "Jak wyczyścić pamięci podręczne pakietów deweloperskich w Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Sprawdź rozmiar każdej pamięci podręcznej",
            "text": "Otwórz Eksplorator plików i wklej ścieżkę każdej pamięci podręcznej do paska adresu, na przykład %LOCALAPPDATA%\\npm-cache i %USERPROFILE%\\.gradle\\caches. Sprawdź rozmiar folderu we Właściwościach, aby zobaczyć, którą warto wyczyścić."
          },
          {
            "name": "Zatrzymaj kompilacje i środowiska IDE",
            "text": "Zamknij środowisko IDE i wszystkie trwające kompilacje. W przypadku Gradle uruchom gradle --stop, aby żaden demon nie przytrzymywał otwartego folderu pamięci podręcznej."
          },
          {
            "name": "Użyj oficjalnych poleceń",
            "text": "W terminalu uruchom npm cache clean --force, pip cache purge i dotnet nuget locals all --clear. Każde polecenie wyświetla, co usunęło."
          },
          {
            "name": "Usuń folder caches Gradle",
            "text": "Usuń zawartość %USERPROFILE%\\.gradle\\caches. Gradle utworzy folder ponownie i pobierze zależności od nowa przy następnej kompilacji."
          },
          {
            "name": "Albo wyczyść wszystko naraz w Disk Mop",
            "text": "Otwórz Disk Mop, przejdź do Zwolnij miejsce i uruchom skanowanie. Pamięci podręczne npm, pip, NuGet i Gradle są wyświetlane, ale domyślnie niezaznaczone; zaznacz te, które chcesz wyczyścić, i potwierdź."
          }
        ]
      },
      "faq": [
        {
          "question": "Czy bezpiecznie jest usunąć pamięć podręczną npm?",
          "answer": "Tak. Pamięć podręczna npm to magazyn pakietów, które npm już pobrał. Jej wyczyszczenie nie zmienia Twoich projektów ani folderów node_modules; npm po prostu pobiera pakiety ponownie, gdy następnym razem je zainstalujesz. Sam npm zaleca do tego polecenie npm cache clean --force."
        },
        {
          "question": "Czy wyczyszczenie pamięci podręcznej Gradle zepsuje moje projekty?",
          "answer": "Nie. Pliki w folderze caches to pobrane zależności i dane kompilacji. Nie jest tam przechowywany Twój kod źródłowy. Następna kompilacja pobierze ponownie to, czego potrzebuje, co trwa dłużej i wymaga połączenia z internetem."
        },
        {
          "question": "Dlaczego pip przechowuje pamięć podręczną?",
          "answer": "pip zapisuje pobrane pakiety i zbudowane pakiety wheel, dzięki czemu instalacja tego samego pakietu w innym środowisku wirtualnym jest szybka i nie wymaga pobierania. Wyczyszczenie jej poleceniem pip cache purge usuwa tylko tę zapisaną kopię."
        },
        {
          "question": "Czy pamięć podręczna NuGet i sieciowa obejmuje dane przeglądarki?",
          "answer": "Pamięć podręczna NuGet i sieciowa obejmuje pamięci podręczne pakietów NuGet oraz folder INetCache systemu Windows, czyli pamięć podręczną używaną przez składniki Windows do zawartości internetowej. Odbudowuje się sama i nie zawiera Twoich dokumentów."
        }
      ],
      "intro": [
        "Menedżery pakietów przechowują kopię wszystkiego, co pobierają. npm, pip, NuGet i Gradle mają w Twoim profilu własne foldery pamięci podręcznej, a na komputerze programisty rosną one zwykle do kilku gigabajtów. Można je bezpiecznie wyczyścić, bo pakiety da się pobrać ponownie; ceną jest to, że następna instalacja lub kompilacja wymaga internetu i trwa dłużej.",
        "Ten poradnik pokazuje, gdzie znajduje się każda pamięć podręczna, jakie jest oficjalne polecenie jej czyszczenia i czego można się potem spodziewać, a także jak wyczyścić wszystkie cztery naraz w Disk Mop. Wyjaśnia też, dlaczego programy czyszczące domyślnie ich nie zaznaczają i kiedy lepiej je zostawić."
      ],
      "sections": [
        {
          "title": "Dlaczego pamięci podręczne deweloperskie tak rosną",
          "content": [
            "Za każdym razem, gdy instalujesz zależność, narzędzie zapisuje pobrane archiwum w pamięci podręcznej, zanim rozpakuje je do projektu. Kolejny projekt, który potrzebuje tej samej wersji, korzysta z zapisanej kopii zamiast pobierać ją ponownie. To dobry kompromis na rzecz szybkości, ale pamięć podręczna niczego nie zapomina: stare wersje pakietów z projektów zakończonych lata temu nadal w niej leżą.",
            "Gradle jest zwykle największy. Jego folder caches zawiera pobrane zależności, przekształcone artefakty i dane kompilacji dla każdego projektu i każdej wersji, jakie widział, i często sięga kilku gigabajtów. NuGet i pip rosną wolniej, a npm plasuje się pośrodku.",
            "Nic z tego nie jest Twoim kodem źródłowym. Pamięć podręczna zawiera wyłącznie rzeczy, które można ponownie pobrać z rejestru pakietów."
          ]
        },
        {
          "title": "npm i pip",
          "content": [
            "npm trzyma pamięć podręczną w %LOCALAPPDATA%\\npm-cache; niektóre starsze instalacje używają %APPDATA%\\npm-cache. Oficjalny sposób jej wyczyszczenia to npm cache clean --force. Samo npm cache clean bez flagi odmawia uruchomienia, ponieważ npm uznaje pamięć podręczną za samonaprawiającą się. Foldery node_modules są oddzielne i nie są naruszane.",
            "pip przechowuje pobrane pliki i zbudowane pakiety wheel w %LOCALAPPDATA%\\pip\\Cache. Wyczyść ją poleceniem pip cache purge albo najpierw sprawdź jej zawartość poleceniami pip cache info i pip cache list. Środowiska wirtualne pozostają nietknięte; usuwane są tylko zapisane pobrania.",
            "Po każdym z tych poleceń kolejna instalacja pakietu to zwykłe pobieranie."
          ]
        },
        {
          "title": "NuGet i sieciowa pamięć podręczna Windows",
          "content": [
            "NuGet przechowuje pobrane pakiety w %LOCALAPPDATA%\\NuGet\\v3-cache, a wtyczki w plugins-cache. Aby zobaczyć wszystko, uruchom dotnet nuget locals all --list; aby wyczyścić, uruchom dotnet nuget locals all --clear. Globalny folder pakietów (global packages) w Twoim profilu to co innego: zawiera pakiety używane przez przywrócone projekty, a jego wyczyszczenie oznacza pełne przywracanie dla każdego projektu.",
            "Disk Mop grupuje pamięci podręczne NuGet razem z folderem INetCache systemu Windows jako Pamięć podręczna NuGet i sieciowa. INetCache zawiera zawartość internetową zapisywaną w pamięci podręcznej przez składniki Windows i jest odbudowywany automatycznie.",
            "Przed czyszczeniem zamknij Visual Studio, ponieważ w trakcie działania trzyma otwarte pliki w tych folderach."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Pamięć podręczna Gradle to %USERPROFILE%\\.gradle\\caches. Nie ma oficjalnego jednowierszowego polecenia, które czyści całość; zwykle zatrzymuje się Gradle i usuwa zawartość folderu caches. Najpierw uruchom gradle --stop, aby żaden demon nie przytrzymywał otwartych plików, i zamknij Android Studio lub IntelliJ.",
            "Następna kompilacja pobiera ponownie każdą zależność, co w dużym projekcie może potrwać kilka minut, a Gradle odbudowuje przekształcone artefakty. Ustawienia w folderze .gradle, takie jak gradle.properties, leżą poza folderem caches i nie są usuwane, gdy kasujesz tylko ten folder.",
            "Jeśli masz kilka projektów na Androida, spodziewaj się, że Gradle da największy pojedynczy zysk w tym poradniku."
          ]
        },
        {
          "title": "Wyczyść wszystko naraz w Disk Mop",
          "content": [
            "Strona Zwolnij miejsce w Disk Mop wyświetla Pamięć podręczna npm, Pamięć podręczna pip, Pamięć podręczna NuGet i sieciowa oraz Pamięć podręczna Gradle jako osobne pozycje, każdą z jej rozmiarem i adnotacją, że narzędzia pobiorą pakiety ponownie w razie potrzeby. Nie są domyślnie zaznaczone, ponieważ ich wyczyszczenie ma swoją cenę, którą warto wybrać świadomie: następna kompilacja wymaga internetu.",
            "Uruchom skanowanie, zaznacz pamięci podręczne, które chcesz wyczyścić, i potwierdź. Disk Mop pokazuje, co znalazł, zanim cokolwiek usunie, a skanowanie jest bezpłatne. Najpierw zamknij środowisko IDE i wszystkie trwające kompilacje, aby pliki w użyciu nie zostały pominięte.",
            "Jeśli nie chcesz czekać na pobieranie, wyczyść tylko tę pamięć podręczną, której rzadko używasz, i zostaw tę dla projektu, nad którym pracujesz."
          ]
        }
      ],
      "verdict": [
        "Pamięci podręczne npm, pip, NuGet i Gradle to kopie pakietów, które zawsze można pobrać ponownie, więc ich wyczyszczenie jest bezpieczne i często zwalnia wiele gigabajtów. Dla npm, pip i NuGet użyj oficjalnych poleceń, a dla Gradle usuń folder caches przy zatrzymanym Gradle.",
        "Disk Mop wyświetla wszystkie cztery pamięci podręczne na stronie Zwolnij miejsce, pokazuje rozmiar każdej z nich i zostawia je niezaznaczone, dopóki ich nie wybierzesz. Skanowanie jest bezpłatne, więc możesz sprawdzić, którą warto wyczyścić, zanim zdecydujesz."
      ],
      "ctaText": "Sprawdź w Disk Mop, ile miejsca zajmują Twoje pamięci podręczne deweloperskie"
    },
    "ro": {
      "title": "Cum să ștergi cache-ul npm, pip, NuGet și Gradle în Windows",
      "metaDescription": "Cache-urile npm, pip, NuGet și Gradle pot ocupa pe nesimțite mulți gigabyți în Windows. Află unde se află și cum le ștergi fără să strici build-urile tale.",
      "subtitle": "Recuperează spațiul ocupat de cache-urile pachetelor pentru dezvoltatori și află exact ce sacrifici",
      "keyTakeaways": [
        "npm, pip, NuGet și Gradle păstrează fiecare pachet descărcat într-un cache, ca build-urile să fie rapide; cache-ul poate fi oricând descărcat din nou, deci ștergerea lui este sigură, dar ulterior ai nevoie de conexiune la internet.",
        "Fiecare instrument are propria comandă de ștergere (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), iar cache-ul Gradle se șterge eliminând folderul caches, cu Gradle oprit.",
        "Primul build după ștergere este mai lent, pentru că toate dependențele se descarcă din nou, așa că evită să ștergi chiar înainte de un termen-limită sau când ești offline."
      ],
      "dataTable": {
        "caption": "Cache-urile managerilor de pachete în Windows",
        "columns": [
          "Instrument",
          "Locația cache-ului",
          "Comanda oficială de ștergere",
          "Ce se întâmplă după"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (instalări mai vechi: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Pachetele se descarcă din nou la următoarea instalare"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Pachetele wheel și descărcările sunt aduse din nou când e nevoie"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache și plugins-cache",
            "dotnet nuget locals all --clear",
            "Pachetele sunt restaurate din nou la următorul build"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Nu există comandă; șterge folderul caches cu Gradle oprit",
            "Dependențele se descarcă din nou la următorul build"
          ]
        ]
      },
      "howTo": {
        "name": "Cum ștergi cache-urile pachetelor pentru dezvoltatori în Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Măsoară fiecare cache",
            "text": "Deschide File Explorer și lipește calea fiecărui cache în bara de adrese, de exemplu %LOCALAPPDATA%\\npm-cache și %USERPROFILE%\\.gradle\\caches. Verifică dimensiunea folderului în Proprietăți ca să vezi care merită șters."
          },
          {
            "name": "Oprește build-urile și IDE-urile",
            "text": "Închide IDE-ul și orice build aflat în execuție. Pentru Gradle, rulează gradle --stop ca niciun daemon să nu țină deschis folderul cache."
          },
          {
            "name": "Folosește comenzile oficiale",
            "text": "Într-un terminal rulează npm cache clean --force, pip cache purge și dotnet nuget locals all --clear. Fiecare comandă afișează ce a eliminat."
          },
          {
            "name": "Șterge folderul caches al Gradle",
            "text": "Șterge conținutul din %USERPROFILE%\\.gradle\\caches. Gradle recreează folderul și descarcă din nou dependențele la următorul build."
          },
          {
            "name": "Sau șterge-le dintr-o singură trecere cu Disk Mop",
            "text": "Deschide Disk Mop, mergi la Eliberează spațiu și rulează scanarea. Cache-urile npm, pip, NuGet și Gradle sunt listate, dar nebifate implicit; bifează-le pe cele dorite și confirmă."
          }
        ]
      },
      "faq": [
        {
          "question": "Este sigur să șterg cache-ul npm?",
          "answer": "Da. Cache-ul npm este un depozit de pachete pe care npm le-a descărcat deja. Ștergerea lui nu schimbă proiectele tale și nici folderele node_modules; npm doar descarcă din nou pachetele la următoarea instalare. Chiar npm recomandă npm cache clean --force pentru asta."
        },
        {
          "question": "Ștergerea cache-ului Gradle îmi va strica proiectele?",
          "answer": "Nu. Fișierele din folderul caches sunt dependențe descărcate și date de build. Codul tău sursă nu este stocat acolo. Următorul build descarcă din nou ce are nevoie, ceea ce durează mai mult și cere conexiune la internet."
        },
        {
          "question": "De ce păstrează pip un cache?",
          "answer": "pip stochează pachetele și pachetele wheel construite pe care le descarcă, astfel încât instalarea aceluiași pachet într-un alt mediu virtual este rapidă și nu necesită descărcare. Ștergerea cu pip cache purge elimină doar acea copie stocată."
        },
        {
          "question": "Cache-ul NuGet și web include date din browser?",
          "answer": "Cache-ul NuGet și web cuprinde cache-urile de pachete NuGet și folderul Windows INetCache, un cache folosit de componentele Windows pentru conținut web. Se reconstruiește singur și nu conține documentele tale."
        }
      ],
      "intro": [
        "Managerii de pachete păstrează o copie a tot ce descarcă. npm, pip, NuGet și Gradle au fiecare un folder de cache în profilul tău, iar pe un calculator de dezvoltator aceste foldere ajung de obicei la câțiva gigabyți. Poți să le ștergi în siguranță, pentru că pachetele pot fi descărcate din nou; prețul este că următoarea instalare sau următorul build are nevoie de internet și durează mai mult.",
        "Acest ghid arată unde se află fiecare cache, care este comanda oficială pentru ștergerea lui și la ce să te aștepți după aceea, și explică cum le ștergi pe toate patru dintr-o singură trecere cu Disk Mop. Explică și de ce aceste cache-uri nu sunt bifate implicit într-un program de curățare și când e mai bine să le lași în pace."
      ],
      "sections": [
        {
          "title": "De ce ajung cache-urile pentru dezvoltatori atât de mari",
          "content": [
            "De fiecare dată când instalezi o dependență, instrumentul salvează arhiva descărcată într-un cache înainte să o despacheteze în proiect. Următorul proiect care are nevoie de aceeași versiune refolosește copia din cache în loc să o descarce. Este un schimb bun pentru viteză, dar cache-ul nu uită niciodată: versiunile vechi ale pachetelor din proiecte terminate cu ani în urmă rămân în el.",
            "Gradle este de obicei cel mai mare. Folderul său caches conține dependențe descărcate, artefacte transformate și date de build pentru fiecare proiect și fiecare versiune pe care le-a întâlnit, și ajunge frecvent la câțiva gigabyți. NuGet și pip cresc mai lent, iar npm se află undeva la mijloc.",
            "Nimic din toate acestea nu este codul tău sursă. Un cache conține doar lucruri care pot fi aduse din nou din registrul de pachete."
          ]
        },
        {
          "title": "npm și pip",
          "content": [
            "npm își păstrează cache-ul în %LOCALAPPDATA%\\npm-cache; unele instalări mai vechi folosesc %APPDATA%\\npm-cache. Modul oficial de a-l șterge este npm cache clean --force. Comanda npm cache clean fără opțiune refuză să ruleze, pentru că npm consideră cache-ul auto-reparabil. Folderele tale node_modules sunt separate și nu sunt afectate.",
            "pip stochează descărcările și pachetele wheel construite în %LOCALAPPDATA%\\pip\\Cache. Șterge-l cu pip cache purge sau vezi mai întâi ce conține cu pip cache info și pip cache list. Mediile virtuale nu sunt atinse; sunt eliminate doar descărcările stocate.",
            "După oricare dintre comenzi, următoarea instalare a unui pachet este o descărcare obișnuită."
          ]
        },
        {
          "title": "NuGet și cache-ul web din Windows",
          "content": [
            "NuGet păstrează pachetele descărcate în %LOCALAPPDATA%\\NuGet\\v3-cache, iar pluginurile în plugins-cache. Ca să vezi tot conținutul, rulează dotnet nuget locals all --list; ca să îl ștergi, rulează dotnet nuget locals all --clear. Folderul global de pachete (global packages) din profilul tău este altceva: conține pachetele folosite de proiectele restaurate, iar ștergerea lui înseamnă o restaurare completă pentru fiecare proiect.",
            "Disk Mop grupează cache-urile NuGet împreună cu folderul Windows INetCache sub Cache NuGet și web. INetCache conține conținut web păstrat în cache de componentele Windows și se reconstruiește automat.",
            "Închide Visual Studio înainte de ștergere, pentru că ține deschise fișiere din aceste foldere cât timp rulează."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Cache-ul Gradle este %USERPROFILE%\\.gradle\\caches. Nu există o comandă oficială dintr-o singură linie care să îl șteargă integral; metoda obișnuită este să oprești Gradle și să ștergi conținutul folderului caches. Rulează mai întâi gradle --stop ca niciun daemon să nu țină fișiere deschise și închide Android Studio sau IntelliJ.",
            "Următorul build descarcă din nou fiecare dependență, ceea ce poate dura câteva minute pe un proiect mare, iar Gradle reconstruiește artefactele transformate. Setările din folderul .gradle, precum gradle.properties, se află în afara folderului caches și nu sunt șterse dacă elimini doar acel folder.",
            "Dacă ai mai multe proiecte Android, te poți aștepta ca Gradle să fie cel mai mare câștig individual din acest ghid."
          ]
        },
        {
          "title": "Șterge-le dintr-o singură trecere cu Disk Mop",
          "content": [
            "Pagina Eliberează spațiu din Disk Mop afișează Cache npm, Cache pip, Cache NuGet și web și Cache Gradle ca elemente separate, fiecare cu dimensiunea ei și cu nota că instrumentele tale descarcă pachetele din nou când e nevoie. Nu sunt bifate implicit, pentru că ștergerea lor are un cost pe care e bine să îl alegi în mod conștient: următorul build are nevoie de internet.",
            "Rulează scanarea, bifează cache-urile dorite și confirmă. Disk Mop arată ce a găsit înainte să șteargă ceva, iar scanarea este gratuită. Închide mai întâi IDE-ul și orice build în execuție, ca fișierele în uz să nu fie omise.",
            "Dacă nu vrei să aștepți descărcările, șterge doar cache-ul pe care îl folosești rar și păstrează-l pe cel al proiectului la care lucrezi."
          ]
        }
      ],
      "verdict": [
        "Cache-urile npm, pip, NuGet și Gradle sunt copii ale unor pachete care pot fi oricând descărcate din nou, deci ștergerea lor este sigură și eliberează adesea mulți gigabyți. Folosește comenzile oficiale pentru npm, pip și NuGet, iar pentru Gradle șterge folderul caches cu Gradle oprit.",
        "Disk Mop afișează toate cele patru cache-uri pe pagina Eliberează spațiu, arată dimensiunea fiecăruia și le lasă nebifate până alegi tu. Scanarea este gratuită, așa că poți vedea ce cache merită șters înainte să te hotărăști."
      ],
      "ctaText": "Vezi cât spațiu ocupă cache-urile tale de dezvoltator cu Disk Mop"
    },
    "ru": {
      "title": "Как очистить кэш npm, pip, NuGet и Gradle в Windows",
      "metaDescription": "Кэш npm, pip, NuGet и Gradle может незаметно занимать много гигабайт в Windows. Узнайте, где он лежит и как его очистить, не сломав сборки ваших проектов.",
      "subtitle": "Верните место, занятое кэшем пакетов разработчика, и узнайте, чем именно вы жертвуете",
      "keyTakeaways": [
        "npm, pip, NuGet и Gradle сохраняют каждый скачанный пакет в кэше, чтобы сборки шли быстро; кэш всегда можно скачать заново, поэтому очистка безопасна, но после неё нужно подключение к интернету.",
        "У каждого инструмента своя команда очистки (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), а кэш Gradle очищается удалением его папки caches при остановленном Gradle.",
        "Первая сборка после очистки идёт медленнее, потому что все зависимости скачиваются заново, поэтому не очищайте кэш перед дедлайном или когда вы не в сети."
      ],
      "dataTable": {
        "caption": "Кэши менеджеров пакетов в Windows",
        "columns": [
          "Инструмент",
          "Расположение кэша",
          "Официальная команда очистки",
          "Что произойдёт дальше"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (в более старых установках: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Пакеты скачиваются заново при следующей установке"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Пакеты wheel и загрузки снова скачиваются при необходимости"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache и plugins-cache",
            "dotnet nuget locals all --clear",
            "Пакеты восстанавливаются заново при следующей сборке"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Команды нет; удалите папку caches при остановленном Gradle",
            "Зависимости скачиваются заново при следующей сборке"
          ]
        ]
      },
      "howTo": {
        "name": "Как очистить кэши пакетов разработчика в Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Измерьте каждый кэш",
            "text": "Откройте Проводник и вставьте путь к каждому кэшу в адресную строку, например %LOCALAPPDATA%\\npm-cache и %USERPROFILE%\\.gradle\\caches. Посмотрите размер папки в окне «Свойства», чтобы понять, какой кэш стоит очищать."
          },
          {
            "name": "Остановите сборки и среды разработки",
            "text": "Закройте IDE и все запущенные сборки. Для Gradle выполните gradle --stop, чтобы ни один демон не удерживал папку кэша открытой."
          },
          {
            "name": "Используйте официальные команды",
            "text": "В терминале выполните npm cache clean --force, pip cache purge и dotnet nuget locals all --clear. Каждая команда выводит, что именно было удалено."
          },
          {
            "name": "Удалите папку caches Gradle",
            "text": "Удалите содержимое папки %USERPROFILE%\\.gradle\\caches. Gradle создаст её заново и скачает зависимости снова при следующей сборке."
          },
          {
            "name": "Или очистите всё за один проход в Disk Mop",
            "text": "Откройте Disk Mop, перейдите в раздел «Освободить место» и запустите сканирование. Кэши npm, pip, NuGet и Gradle показаны в списке, но по умолчанию не выбраны; отметьте нужные и подтвердите."
          }
        ]
      },
      "faq": [
        {
          "question": "Безопасно ли удалять кэш npm?",
          "answer": "Да. Кэш npm — это хранилище пакетов, которые npm уже скачал. Его очистка не затрагивает ваши проекты и папки node_modules; npm просто скачает пакеты заново при следующей установке. Сам npm рекомендует для этого команду npm cache clean --force."
        },
        {
          "question": "Не сломает ли очистка кэша Gradle мои проекты?",
          "answer": "Нет. Файлы в папке caches — это скачанные зависимости и данные сборки. Ваш исходный код там не хранится. Следующая сборка заново скачает всё необходимое, что занимает больше времени и требует подключения к интернету."
        },
        {
          "question": "Зачем pip хранит кэш?",
          "answer": "pip сохраняет скачанные пакеты и собранные wheel-пакеты, поэтому установка того же пакета в другое виртуальное окружение проходит быстро и не требует загрузки. Очистка командой pip cache purge удаляет только эту сохранённую копию."
        },
        {
          "question": "Включает ли кэш NuGet и веб-кэш данные браузера?",
          "answer": "Кэш NuGet и веб-кэш охватывает кэши пакетов NuGet и папку Windows INetCache — кэш, который компоненты Windows используют для веб-содержимого. Он восстанавливается сам и не содержит ваших документов."
        }
      ],
      "intro": [
        "Менеджеры пакетов хранят копию всего, что скачивают. У npm, pip, NuGet и Gradle есть по папке кэша в вашем профиле, и на машине разработчика эти папки обычно разрастаются до нескольких гигабайт. Их можно безопасно очищать, потому что пакеты можно скачать заново; цена вопроса в том, что следующая установка или сборка потребует интернета и займёт больше времени.",
        "В этом руководстве указано, где находится каждый кэш, какая официальная команда его очищает и чего ждать потом, а также показано, как очистить все четыре за один проход в Disk Mop. Здесь же объясняется, почему программы очистки не выбирают эти кэши по умолчанию и когда лучше их не трогать."
      ],
      "sections": [
        {
          "title": "Почему кэши разработчика так разрастаются",
          "content": [
            "Каждый раз, когда вы устанавливаете зависимость, инструмент сохраняет скачанный архив в кэше, прежде чем распаковать его в проект. Следующий проект, которому нужна та же версия, берёт копию из кэша вместо повторной загрузки. Для скорости это хороший компромисс, но кэш ничего не забывает: старые версии пакетов из проектов, законченных много лет назад, остаются в нём.",
            "Обычно самый большой кэш у Gradle. В его папке caches хранятся скачанные зависимости, преобразованные артефакты и данные сборки для каждого проекта и каждой версии, с которыми он работал, и она часто достигает нескольких гигабайт. NuGet и pip растут медленнее, а npm занимает промежуточное положение.",
            "Ничто из этого не является вашим исходным кодом. В кэше лежит только то, что можно снова получить из реестра пакетов."
          ]
        },
        {
          "title": "npm и pip",
          "content": [
            "npm хранит кэш в %LOCALAPPDATA%\\npm-cache; в некоторых старых установках используется %APPDATA%\\npm-cache. Официальный способ очистки — npm cache clean --force. Команда npm cache clean без флага отказывается выполняться, потому что npm считает кэш самовосстанавливающимся. Папки node_modules лежат отдельно и не затрагиваются.",
            "pip хранит загрузки и собранные wheel-пакеты в %LOCALAPPDATA%\\pip\\Cache. Очистите кэш командой pip cache purge или сначала посмотрите, что в нём лежит, командами pip cache info и pip cache list. Виртуальные окружения не затрагиваются; удаляются только сохранённые загрузки.",
            "После любой из этих команд следующая установка пакета будет обычной загрузкой."
          ]
        },
        {
          "title": "NuGet и веб-кэш Windows",
          "content": [
            "NuGet хранит скачанные пакеты в %LOCALAPPDATA%\\NuGet\\v3-cache, а плагины — в plugins-cache. Чтобы увидеть всё содержимое, выполните dotnet nuget locals all --list; чтобы очистить — dotnet nuget locals all --clear. Глобальная папка пакетов (global packages) в вашем профиле — это другое: в ней лежат пакеты, которые используют восстановленные проекты, и её очистка означает полное восстановление для каждого проекта.",
            "Disk Mop объединяет кэши NuGet с папкой Windows INetCache в пункт «Кэш NuGet и веб-кэш». В INetCache лежит веб-содержимое, кэшируемое компонентами Windows, и она восстанавливается автоматически.",
            "Перед очисткой закройте Visual Studio: пока он запущен, он держит открытыми файлы в этих папках."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Кэш Gradle находится в %USERPROFILE%\\.gradle\\caches. Официальной однострочной команды, которая очищает его целиком, нет; обычно останавливают Gradle и удаляют содержимое папки caches. Сначала выполните gradle --stop, чтобы ни один демон не удерживал файлы открытыми, и закройте Android Studio или IntelliJ.",
            "Следующая сборка заново скачает каждую зависимость, что в большом проекте может занять несколько минут, а Gradle заново построит преобразованные артефакты. Настройки в папке .gradle, например gradle.properties, находятся вне папки caches и не удаляются, если стереть только её.",
            "Если у вас несколько Android-проектов, ожидайте, что Gradle даст самый большой выигрыш из всех кэшей в этом руководстве."
          ]
        },
        {
          "title": "Очистите всё за один проход в Disk Mop",
          "content": [
            "На странице «Освободить место» в Disk Mop «Кэш npm», «Кэш pip», «Кэш NuGet и веб-кэш» и «Кэш Gradle» показаны отдельными пунктами, у каждого указан размер и пометка, что ваши инструменты заново скачают пакеты при необходимости. По умолчанию они не выбраны, потому что у их очистки есть цена, которую стоит принимать осознанно: следующей сборке понадобится интернет.",
            "Запустите сканирование, отметьте нужные кэши и подтвердите. Disk Mop показывает найденное до того, как что-либо удалить, а сканирование бесплатно. Сначала закройте IDE и все запущенные сборки, чтобы используемые файлы не были пропущены.",
            "Если вы не хотите ждать загрузок, очистите только тот кэш, которым пользуетесь редко, а кэш проекта, над которым работаете, оставьте."
          ]
        }
      ],
      "verdict": [
        "Кэши npm, pip, NuGet и Gradle — это копии пакетов, которые всегда можно скачать заново, поэтому их очистка безопасна и часто освобождает много гигабайт. Для npm, pip и NuGet используйте официальные команды, а для Gradle удалите папку caches при остановленном Gradle.",
        "Disk Mop показывает все четыре кэша на странице «Освободить место», указывает размер каждого и оставляет их невыбранными, пока вы не решите сами. Сканирование бесплатно, так что вы увидите, какой кэш стоит очищать, прежде чем принимать решение."
      ],
      "ctaText": "Узнайте в Disk Mop, сколько места занимают ваши кэши разработчика"
    },
    "th": {
      "title": "วิธีล้างแคช npm, pip, NuGet และ Gradle บน Windows",
      "metaDescription": "แคชของ npm, pip, NuGet และ Gradle อาจกินพื้นที่หลายกิกะไบต์บน Windows โดยที่คุณไม่รู้ตัว ดูว่าแคชอยู่ที่ไหนและล้างอย่างไรโดยไม่ทำให้การ build เสียหาย",
      "subtitle": "เรียกพื้นที่คืนจากแคชแพ็กเกจของนักพัฒนา และรู้ว่าคุณต้องแลกกับอะไรบ้าง",
      "keyTakeaways": [
        "npm, pip, NuGet และ Gradle เก็บทุกแพ็กเกจที่ดาวน์โหลดไว้ในแคชเพื่อให้ build เร็ว แคชดาวน์โหลดใหม่ได้เสมอ การล้างจึงปลอดภัย แต่หลังจากนั้นต้องมีอินเทอร์เน็ต",
        "แต่ละเครื่องมือมีคำสั่งล้างของตัวเอง (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear) ส่วนแคชของ Gradle ล้างได้โดยลบโฟลเดอร์ caches ขณะที่ Gradle หยุดทำงานอยู่",
        "การ build ครั้งแรกหลังล้างแคชจะช้ากว่าปกติเพราะต้องดาวน์โหลด dependency ทั้งหมดใหม่ จึงไม่ควรล้างก่อนถึงกำหนดส่งงานหรือตอนที่ออฟไลน์อยู่"
      ],
      "dataTable": {
        "caption": "แคชของตัวจัดการแพ็กเกจบน Windows",
        "columns": [
          "เครื่องมือ",
          "ตำแหน่งแคช",
          "คำสั่งล้างอย่างเป็นทางการ",
          "สิ่งที่จะเกิดขึ้นต่อไป"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (การติดตั้งรุ่นเก่า: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "แพ็กเกจจะถูกดาวน์โหลดใหม่ในการติดตั้งครั้งถัดไป"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "ไฟล์ wheel และไฟล์ที่ดาวน์โหลดจะถูกดึงมาใหม่เมื่อจำเป็น"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache และ plugins-cache",
            "dotnet nuget locals all --clear",
            "แพ็กเกจจะถูกกู้คืนใหม่ในการ build ครั้งถัดไป"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "ไม่มีคำสั่ง ให้ลบโฟลเดอร์ caches ขณะที่ Gradle หยุดทำงาน",
            "dependency จะถูกดาวน์โหลดใหม่ในการ build ครั้งถัดไป"
          ]
        ]
      },
      "howTo": {
        "name": "วิธีล้างแคชแพ็กเกจของนักพัฒนาบน Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "ตรวจขนาดของแต่ละแคช",
            "text": "เปิด File Explorer แล้ววางพาธของแต่ละแคชลงในแถบที่อยู่ เช่น %LOCALAPPDATA%\\npm-cache และ %USERPROFILE%\\.gradle\\caches จากนั้นดูขนาดโฟลเดอร์ใน คุณสมบัติ เพื่อดูว่าแคชไหนคุ้มที่จะล้าง"
          },
          {
            "name": "หยุดการ build และ IDE",
            "text": "ปิด IDE และการ build ที่กำลังทำงานอยู่ สำหรับ Gradle ให้รัน gradle --stop เพื่อไม่ให้มี daemon ค้างเปิดโฟลเดอร์แคชไว้"
          },
          {
            "name": "ใช้คำสั่งอย่างเป็นทางการ",
            "text": "ในเทอร์มินัล ให้รัน npm cache clean --force, pip cache purge และ dotnet nuget locals all --clear แต่ละคำสั่งจะแสดงว่าลบอะไรไปบ้าง"
          },
          {
            "name": "ลบโฟลเดอร์ caches ของ Gradle",
            "text": "ลบเนื้อหาใน %USERPROFILE%\\.gradle\\caches Gradle จะสร้างโฟลเดอร์ขึ้นใหม่และดาวน์โหลด dependency อีกครั้งในการ build ครั้งถัดไป"
          },
          {
            "name": "หรือล้างทั้งหมดในครั้งเดียวด้วย Disk Mop",
            "text": "เปิด Disk Mop ไปที่ เพิ่มพื้นที่ว่าง แล้วเริ่มการสแกน แคชของ npm, pip, NuGet และ Gradle จะแสดงในรายการแต่ไม่ได้เลือกไว้ตั้งแต่แรก ให้ติ๊กเลือกรายการที่ต้องการแล้วยืนยัน"
          }
        ]
      },
      "faq": [
        {
          "question": "ลบแคชของ npm ปลอดภัยไหม",
          "answer": "ปลอดภัย แคชของ npm คือที่เก็บแพ็กเกจที่ npm ดาวน์โหลดไว้แล้ว การล้างแคชไม่กระทบโปรเจกต์หรือโฟลเดอร์ node_modules ของคุณ npm เพียงแค่ดาวน์โหลดแพ็กเกจใหม่เมื่อคุณติดตั้งในครั้งถัดไป npm เองก็แนะนำ npm cache clean --force สำหรับกรณีนี้"
        },
        {
          "question": "การล้างแคชของ Gradle จะทำให้โปรเจกต์ของฉันพังไหม",
          "answer": "ไม่ ไฟล์ในโฟลเดอร์ caches คือ dependency ที่ดาวน์โหลดมาและข้อมูลการ build ซอร์สโค้ดของคุณไม่ได้เก็บอยู่ที่นั่น การ build ครั้งถัดไปจะดาวน์โหลดสิ่งที่ต้องใช้ใหม่ ซึ่งใช้เวลานานขึ้นและต้องมีอินเทอร์เน็ต"
        },
        {
          "question": "ทำไม pip ถึงเก็บแคช",
          "answer": "pip เก็บแพ็กเกจและ wheel ที่สร้างไว้ซึ่งดาวน์โหลดมา ทำให้การติดตั้งแพ็กเกจเดิมใน virtual environment อื่นเร็วและไม่ต้องดาวน์โหลดซ้ำ การล้างด้วย pip cache purge จะลบเพียงสำเนาที่เก็บไว้นั้น"
        },
        {
          "question": "แคช NuGet และเว็บรวมข้อมูลของเบราว์เซอร์ด้วยหรือไม่",
          "answer": "แคช NuGet และเว็บครอบคลุมแคชแพ็กเกจของ NuGet และโฟลเดอร์ INetCache ของ Windows ซึ่งเป็นแคชที่คอมโพเนนต์ของ Windows ใช้เก็บเนื้อหาเว็บ แคชนี้จะถูกสร้างขึ้นใหม่เอง และไม่มีเอกสารของคุณอยู่ในนั้น"
        }
      ],
      "intro": [
        "ตัวจัดการแพ็กเกจจะเก็บสำเนาของทุกอย่างที่ดาวน์โหลดไว้ npm, pip, NuGet และ Gradle ต่างมีโฟลเดอร์แคชในโปรไฟล์ของคุณ และบนเครื่องของนักพัฒนา โฟลเดอร์เหล่านี้มักโตถึงหลายกิกะไบต์ การล้างปลอดภัยเพราะดาวน์โหลดแพ็กเกจใหม่ได้ แต่ต้องแลกกับการที่การติดตั้งหรือการ build ครั้งถัดไปต้องใช้อินเทอร์เน็ตและใช้เวลานานขึ้น",
        "คู่มือนี้แสดงตำแหน่งของแคชแต่ละตัว คำสั่งอย่างเป็นทางการที่ใช้ล้าง และสิ่งที่จะเกิดขึ้นหลังจากนั้น พร้อมวิธีล้างทั้งสี่ตัวในครั้งเดียวด้วย Disk Mop นอกจากนี้ยังอธิบายว่าทำไมโปรแกรมล้างข้อมูลจึงไม่เลือกแคชเหล่านี้ไว้ล่วงหน้า และเมื่อไรที่ควรปล่อยไว้เฉย ๆ"
      ],
      "sections": [
        {
          "title": "ทำไมแคชของนักพัฒนาจึงโตมาก",
          "content": [
            "ทุกครั้งที่คุณติดตั้ง dependency เครื่องมือจะบันทึกไฟล์เก็บถาวรที่ดาวน์โหลดไว้ในแคชก่อนแตกไฟล์ลงในโปรเจกต์ของคุณ โปรเจกต์ถัดไปที่ต้องการเวอร์ชันเดียวกันจะใช้สำเนาในแคชแทนการดาวน์โหลดใหม่ นี่เป็นการแลกเปลี่ยนที่ดีเพื่อความเร็ว แต่แคชไม่เคยลืมอะไรเลย เวอร์ชันเก่าของแพ็กเกจจากโปรเจกต์ที่จบไปหลายปีแล้วก็ยังคงอยู่ในนั้น",
            "โดยทั่วไป Gradle ใหญ่ที่สุด โฟลเดอร์ caches ของมันเก็บ dependency ที่ดาวน์โหลด อาร์ติแฟกต์ที่ผ่านการแปลง และข้อมูลการ build ของทุกโปรเจกต์และทุกเวอร์ชันที่เคยเจอ และมักมีขนาดถึงหลายกิกะไบต์ ส่วน NuGet และ pip โตช้ากว่า และ npm อยู่ระหว่างกลาง",
            "ทั้งหมดนี้ไม่ใช่ซอร์สโค้ดของคุณ แคชเก็บเฉพาะสิ่งที่ดึงกลับมาใหม่จากรีจิสทรีของแพ็กเกจได้"
          ]
        },
        {
          "title": "npm และ pip",
          "content": [
            "npm เก็บแคชไว้ที่ %LOCALAPPDATA%\\npm-cache การติดตั้งรุ่นเก่าบางแบบใช้ %APPDATA%\\npm-cache วิธีล้างอย่างเป็นทางการคือ npm cache clean --force ส่วน npm cache clean เฉย ๆ ที่ไม่มีแฟลกจะไม่ยอมทำงาน เพราะ npm ถือว่าแคชซ่อมแซมตัวเองได้ โฟลเดอร์ node_modules แยกต่างหากและไม่ได้รับผลกระทบ",
            "pip เก็บไฟล์ที่ดาวน์โหลดและ wheel ที่สร้างไว้ใน %LOCALAPPDATA%\\pip\\Cache ล้างด้วย pip cache purge หรือดูก่อนว่าในแคชมีอะไรบ้างด้วย pip cache info และ pip cache list virtual environment จะไม่ถูกแตะต้อง ระบบลบเฉพาะไฟล์ที่ดาวน์โหลดเก็บไว้",
            "หลังจากรันคำสั่งใดคำสั่งหนึ่ง การติดตั้งแพ็กเกจครั้งถัดไปก็จะเป็นการดาวน์โหลดตามปกติ"
          ]
        },
        {
          "title": "NuGet และแคชเว็บของ Windows",
          "content": [
            "NuGet เก็บแพ็กเกจที่ดาวน์โหลดไว้ใน %LOCALAPPDATA%\\NuGet\\v3-cache และปลั๊กอินไว้ใน plugins-cache หากต้องการดูทั้งหมดให้รัน dotnet nuget locals all --list และหากต้องการล้างให้รัน dotnet nuget locals all --clear โฟลเดอร์ global packages ในโปรไฟล์ของคุณเป็นคนละอย่างกัน โฟลเดอร์นั้นเก็บแพ็กเกจที่โปรเจกต์ซึ่งกู้คืนแล้วใช้งานอยู่ และการล้างหมายถึงต้องกู้คืนใหม่ทั้งหมดสำหรับทุกโปรเจกต์",
            "Disk Mop จัดกลุ่มแคชของ NuGet ร่วมกับโฟลเดอร์ INetCache ของ Windows ไว้ภายใต้ แคช NuGet และเว็บ โดย INetCache เก็บเนื้อหาเว็บที่คอมโพเนนต์ของ Windows แคชไว้ และถูกสร้างขึ้นใหม่โดยอัตโนมัติ",
            "ปิด Visual Studio ก่อนล้าง เพราะมันเปิดไฟล์ในโฟลเดอร์เหล่านี้ค้างไว้ขณะทำงาน"
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "แคชของ Gradle อยู่ที่ %USERPROFILE%\\.gradle\\caches ไม่มีคำสั่งบรรทัดเดียวอย่างเป็นทางการที่ล้างได้ทั้งหมด วิธีที่ใช้กันทั่วไปคือหยุด Gradle แล้วลบเนื้อหาในโฟลเดอร์ caches ให้รัน gradle --stop ก่อนเพื่อไม่ให้ daemon ค้างเปิดไฟล์อยู่ และปิด Android Studio หรือ IntelliJ",
            "การ build ครั้งถัดไปจะดาวน์โหลด dependency ทุกตัวใหม่ ซึ่งอาจใช้เวลาหลายนาทีในโปรเจกต์ขนาดใหญ่ และ Gradle จะสร้างอาร์ติแฟกต์ที่ผ่านการแปลงขึ้นใหม่ การตั้งค่าในโฟลเดอร์ .gradle เช่น gradle.properties อยู่นอกโฟลเดอร์ caches และจะไม่ถูกลบเมื่อคุณลบเฉพาะโฟลเดอร์นั้น",
            "หากคุณมีโปรเจกต์ Android หลายโปรเจกต์ ให้คาดไว้ได้เลยว่า Gradle จะให้พื้นที่คืนมากที่สุดในคู่มือนี้"
          ]
        },
        {
          "title": "ล้างทั้งหมดในครั้งเดียวด้วย Disk Mop",
          "content": [
            "หน้า เพิ่มพื้นที่ว่าง ของ Disk Mop แสดง แคช npm, แคช pip, แคช NuGet และเว็บ และ แคช Gradle เป็นรายการแยกกัน แต่ละรายการมีขนาดและหมายเหตุว่าเครื่องมือของคุณจะดาวน์โหลดแพ็กเกจใหม่เมื่อจำเป็น รายการเหล่านี้ไม่ได้เลือกไว้ล่วงหน้า เพราะการล้างมีต้นทุนที่คุณควรตัดสินใจเลือกเอง นั่นคือการ build ครั้งถัดไปต้องใช้อินเทอร์เน็ต",
            "เริ่มการสแกน ติ๊กเลือกแคชที่ต้องการ แล้วยืนยัน Disk Mop จะแสดงสิ่งที่พบก่อนลบอะไรก็ตาม และการสแกนไม่มีค่าใช้จ่าย ปิด IDE และการ build ที่กำลังทำงานอยู่ก่อน เพื่อไม่ให้ไฟล์ที่กำลังใช้งานถูกข้ามไป",
            "หากไม่อยากรอดาวน์โหลด ให้ล้างเฉพาะแคชที่คุณไม่ค่อยได้ใช้ และเก็บแคชของโปรเจกต์ที่กำลังทำอยู่ไว้"
          ]
        }
      ],
      "verdict": [
        "แคชของ npm, pip, NuGet และ Gradle คือสำเนาของแพ็กเกจที่ดาวน์โหลดใหม่ได้เสมอ การล้างจึงปลอดภัยและมักคืนพื้นที่ได้หลายกิกะไบต์ ใช้คำสั่งอย่างเป็นทางการสำหรับ npm, pip และ NuGet และลบโฟลเดอร์ caches สำหรับ Gradle ขณะที่ Gradle หยุดทำงาน",
        "Disk Mop แสดงแคชทั้งสี่ตัวในหน้า เพิ่มพื้นที่ว่าง แสดงขนาดของแต่ละตัว และปล่อยไว้โดยไม่เลือกจนกว่าคุณจะเลือกเอง การสแกนไม่มีค่าใช้จ่าย คุณจึงดูได้ว่าแคชไหนคุ้มที่จะล้างก่อนตัดสินใจ"
      ],
      "ctaText": "ดูว่าแคชของนักพัฒนากินพื้นที่เท่าไรด้วย Disk Mop"
    },
    "vi": {
      "title": "Cách xóa bộ nhớ đệm npm, pip, NuGet và Gradle trên Windows",
      "metaDescription": "Bộ nhớ đệm của npm, pip, NuGet và Gradle có thể âm thầm chiếm nhiều gigabyte trên Windows. Tìm hiểu vị trí của chúng và cách xóa mà không làm hỏng các bản build.",
      "subtitle": "Lấy lại dung lượng từ bộ nhớ đệm gói của lập trình viên và biết chính xác bạn đang đánh đổi điều gì",
      "keyTakeaways": [
        "npm, pip, NuGet và Gradle lưu mọi gói đã tải vào bộ nhớ đệm để build nhanh; bộ nhớ đệm luôn có thể tải lại, nên xóa là an toàn nhưng sau đó bạn cần có kết nối internet.",
        "Mỗi công cụ có lệnh xóa riêng (npm cache clean --force, pip cache purge, dotnet nuget locals all --clear), còn bộ nhớ đệm của Gradle được xóa bằng cách xóa thư mục caches của nó khi Gradle đã dừng.",
        "Lần build đầu tiên sau khi xóa sẽ chậm hơn vì mọi dependency được tải lại, vì vậy đừng xóa ngay trước hạn chót hoặc khi bạn đang ngoại tuyến."
      ],
      "dataTable": {
        "caption": "Bộ nhớ đệm của các trình quản lý gói trên Windows",
        "columns": [
          "Công cụ",
          "Vị trí bộ nhớ đệm",
          "Lệnh xóa chính thức",
          "Điều xảy ra tiếp theo"
        ],
        "rows": [
          [
            "npm",
            "%LOCALAPPDATA%\\npm-cache (bản cài cũ hơn: %APPDATA%\\npm-cache)",
            "npm cache clean --force",
            "Các gói được tải lại ở lần cài đặt kế tiếp"
          ],
          [
            "pip",
            "%LOCALAPPDATA%\\pip\\Cache",
            "pip cache purge",
            "Các gói wheel và tệp tải về được lấy lại khi cần"
          ],
          [
            "NuGet",
            "%LOCALAPPDATA%\\NuGet\\v3-cache và plugins-cache",
            "dotnet nuget locals all --clear",
            "Các gói được khôi phục lại ở lần build kế tiếp"
          ],
          [
            "Gradle",
            "%USERPROFILE%\\.gradle\\caches",
            "Không có lệnh; xóa thư mục caches khi Gradle đã dừng",
            "Các dependency được tải lại ở lần build kế tiếp"
          ]
        ]
      },
      "howTo": {
        "name": "Cách xóa bộ nhớ đệm gói của lập trình viên trên Windows",
        "totalTime": "PT10M",
        "steps": [
          {
            "name": "Đo dung lượng từng bộ nhớ đệm",
            "text": "Mở File Explorer và dán đường dẫn của từng bộ nhớ đệm vào thanh địa chỉ, ví dụ %LOCALAPPDATA%\\npm-cache và %USERPROFILE%\\.gradle\\caches. Xem dung lượng thư mục trong Thuộc tính để biết cái nào đáng xóa."
          },
          {
            "name": "Dừng các bản build và IDE",
            "text": "Đóng IDE và mọi bản build đang chạy. Với Gradle, hãy chạy gradle --stop để không có daemon nào giữ thư mục bộ nhớ đệm ở trạng thái mở."
          },
          {
            "name": "Dùng các lệnh chính thức",
            "text": "Trong terminal, chạy npm cache clean --force, pip cache purge và dotnet nuget locals all --clear. Mỗi lệnh sẽ in ra những gì đã xóa."
          },
          {
            "name": "Xóa thư mục caches của Gradle",
            "text": "Xóa nội dung của %USERPROFILE%\\.gradle\\caches. Gradle sẽ tạo lại thư mục và tải lại các dependency ở lần build kế tiếp."
          },
          {
            "name": "Hoặc xóa tất cả trong một lần với Disk Mop",
            "text": "Mở Disk Mop, vào Giải phóng dung lượng và chạy quét. Bộ nhớ đệm npm, pip, NuGet và Gradle được liệt kê nhưng không được chọn sẵn; hãy tích chọn những mục bạn muốn rồi xác nhận."
          }
        ]
      },
      "faq": [
        {
          "question": "Xóa bộ nhớ đệm npm có an toàn không?",
          "answer": "Có. Bộ nhớ đệm npm là kho chứa các gói mà npm đã tải. Xóa nó không làm thay đổi dự án hay thư mục node_modules của bạn; npm chỉ tải lại các gói khi bạn cài đặt lần sau. Chính npm cũng khuyên dùng npm cache clean --force cho việc này."
        },
        {
          "question": "Xóa bộ nhớ đệm Gradle có làm hỏng dự án của tôi không?",
          "answer": "Không. Các tệp trong thư mục caches là dependency đã tải và dữ liệu build. Mã nguồn của bạn không được lưu ở đó. Lần build kế tiếp sẽ tải lại những gì cần thiết, việc này mất nhiều thời gian hơn và cần kết nối internet."
        },
        {
          "question": "Tại sao pip lưu bộ nhớ đệm?",
          "answer": "pip lưu các gói và wheel đã build mà nó tải về, nhờ đó cài cùng một gói trong môi trường ảo khác diễn ra nhanh và không cần tải. Xóa bằng pip cache purge chỉ loại bỏ bản sao đã lưu đó."
        },
        {
          "question": "Bộ nhớ đệm NuGet và web có bao gồm dữ liệu trình duyệt không?",
          "answer": "Bộ nhớ đệm NuGet và web gồm các bộ nhớ đệm gói của NuGet và thư mục INetCache của Windows, là bộ nhớ đệm mà các thành phần Windows dùng cho nội dung web. Nó tự được dựng lại và không chứa tài liệu của bạn."
        }
      ],
      "intro": [
        "Các trình quản lý gói giữ một bản sao của mọi thứ chúng tải về. npm, pip, NuGet và Gradle đều có thư mục bộ nhớ đệm trong hồ sơ người dùng của bạn, và trên máy của lập trình viên các thư mục này thường phình lên đến vài gigabyte. Xóa chúng là an toàn vì các gói có thể tải lại; cái giá phải trả là lần cài đặt hoặc build kế tiếp cần internet và mất nhiều thời gian hơn.",
        "Hướng dẫn này liệt kê vị trí của từng bộ nhớ đệm, lệnh chính thức để xóa và những gì cần mong đợi sau đó, đồng thời chỉ cách xóa cả bốn trong một lần với Disk Mop. Bài cũng giải thích vì sao các bộ nhớ đệm này không được chọn sẵn trong một công cụ dọn dẹp và khi nào tốt hơn là cứ để yên."
      ],
      "sections": [
        {
          "title": "Vì sao bộ nhớ đệm của lập trình viên phình to đến vậy",
          "content": [
            "Mỗi lần bạn cài một dependency, công cụ lưu tệp nén đã tải vào bộ nhớ đệm trước khi giải nén vào dự án. Dự án kế tiếp cần cùng phiên bản sẽ dùng lại bản trong bộ nhớ đệm thay vì tải lại. Đó là một sự đánh đổi tốt để lấy tốc độ, nhưng bộ nhớ đệm không bao giờ quên: các phiên bản cũ của gói từ những dự án đã xong từ nhiều năm trước vẫn nằm lại trong đó.",
            "Gradle thường là lớn nhất. Thư mục caches của nó chứa các dependency đã tải, artifact đã chuyển đổi và dữ liệu build cho mọi dự án và mọi phiên bản nó từng gặp, và thường đạt vài gigabyte. NuGet và pip tăng chậm hơn, còn npm ở mức giữa.",
            "Không thứ nào trong số này là mã nguồn của bạn. Bộ nhớ đệm chỉ chứa những thứ có thể lấy lại từ kho gói."
          ]
        },
        {
          "title": "npm và pip",
          "content": [
            "npm giữ bộ nhớ đệm trong %LOCALAPPDATA%\\npm-cache; một số bản cài cũ hơn dùng %APPDATA%\\npm-cache. Cách chính thức để xóa là npm cache clean --force. Lệnh npm cache clean thông thường không kèm cờ sẽ từ chối chạy, vì npm coi bộ nhớ đệm là tự phục hồi. Các thư mục node_modules là riêng biệt và không bị ảnh hưởng.",
            "pip lưu các tệp tải về và wheel đã build trong %LOCALAPPDATA%\\pip\\Cache. Xóa bằng pip cache purge, hoặc xem trước nội dung bằng pip cache info và pip cache list. Môi trường ảo không bị đụng đến; chỉ các tệp tải về đã lưu bị xóa.",
            "Sau một trong hai lệnh này, lần cài đặt gói kế tiếp là một lần tải bình thường."
          ]
        },
        {
          "title": "NuGet và bộ nhớ đệm web của Windows",
          "content": [
            "NuGet giữ các gói đã tải trong %LOCALAPPDATA%\\NuGet\\v3-cache và plugin trong plugins-cache. Để xem toàn bộ, chạy dotnet nuget locals all --list; để xóa, chạy dotnet nuget locals all --clear. Thư mục global packages trong hồ sơ của bạn là một thứ khác: nó chứa các gói mà các dự án đã khôi phục sử dụng, và xóa nó nghĩa là phải khôi phục đầy đủ cho từng dự án.",
            "Disk Mop gom các bộ nhớ đệm NuGet cùng thư mục INetCache của Windows dưới mục Bộ nhớ đệm NuGet và web. INetCache chứa nội dung web mà các thành phần Windows lưu đệm và được dựng lại tự động.",
            "Hãy đóng Visual Studio trước khi xóa, vì nó giữ các tệp trong những thư mục này ở trạng thái mở khi đang chạy."
          ]
        },
        {
          "title": "Gradle",
          "content": [
            "Bộ nhớ đệm của Gradle là %USERPROFILE%\\.gradle\\caches. Không có lệnh một dòng chính thức nào xóa toàn bộ; cách thường dùng là dừng Gradle rồi xóa nội dung thư mục caches. Hãy chạy gradle --stop trước để không có daemon nào giữ tệp ở trạng thái mở, và đóng Android Studio hoặc IntelliJ.",
            "Lần build kế tiếp tải lại mọi dependency, việc này có thể mất vài phút với dự án lớn, và Gradle dựng lại các artifact đã chuyển đổi. Các thiết lập trong thư mục .gradle, như gradle.properties, nằm ngoài thư mục caches và không bị xóa khi bạn chỉ xóa thư mục đó.",
            "Nếu bạn giữ nhiều dự án Android, hãy kỳ vọng Gradle là khoản thu hồi dung lượng lớn nhất trong hướng dẫn này."
          ]
        },
        {
          "title": "Xóa tất cả trong một lần với Disk Mop",
          "content": [
            "Trang Giải phóng dung lượng của Disk Mop liệt kê Bộ nhớ đệm npm, Bộ nhớ đệm pip, Bộ nhớ đệm NuGet và web và Bộ nhớ đệm Gradle thành các mục riêng, mỗi mục kèm dung lượng và ghi chú rằng các công cụ của bạn sẽ tải lại gói khi cần. Chúng không được chọn sẵn, vì việc xóa có một cái giá mà bạn nên chủ động lựa chọn: lần build kế tiếp cần internet.",
            "Chạy quét, tích chọn các bộ nhớ đệm bạn muốn rồi xác nhận. Disk Mop hiển thị những gì nó tìm thấy trước khi xóa bất cứ thứ gì, và việc quét là miễn phí. Hãy đóng IDE và mọi bản build đang chạy trước để các tệp đang dùng không bị bỏ qua.",
            "Nếu không muốn chờ tải lại, hãy chỉ xóa bộ nhớ đệm bạn ít dùng và giữ lại cái của dự án đang làm."
          ]
        }
      ],
      "verdict": [
        "Bộ nhớ đệm npm, pip, NuGet và Gradle là bản sao của các gói luôn có thể tải lại, nên xóa chúng là an toàn và thường giải phóng nhiều gigabyte. Hãy dùng lệnh chính thức cho npm, pip và NuGet, còn với Gradle thì xóa thư mục caches khi Gradle đã dừng.",
        "Disk Mop liệt kê cả bốn bộ nhớ đệm trên trang Giải phóng dung lượng, cho biết dung lượng của từng cái và để chúng không được chọn cho đến khi bạn quyết định. Việc quét là miễn phí, nên bạn có thể xem bộ nhớ đệm nào đáng xóa trước khi quyết định."
      ],
      "ctaText": "Xem bộ nhớ đệm của lập trình viên chiếm bao nhiêu dung lượng với Disk Mop"
    }
  },
};
