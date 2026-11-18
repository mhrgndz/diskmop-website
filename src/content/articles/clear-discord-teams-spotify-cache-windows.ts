import type { Article } from "../types";

export const clearDiscordTeamsSpotifyCacheWindows: Article = {
  slug: "clear-discord-teams-spotify-cache-windows",
  type: "guide",
  category: "Windows Tips",
  date: "2026-11-18",
  updated: "2026-11-18",
  readingTime: 6,
  content: {
    "tr": {
      "title": "Windows'ta Discord, Teams, Spotify ve VS Code Önbelleği Nasıl Temizlenir",
      "metaDescription": "Discord, Microsoft Teams, Spotify ve VS Code önbelleği gigabaytlarca yer kaplayabilir. Klasörlerin nerede olduğunu, temizlemenin etkisini ve güvenli yolunu görün.",
      "subtitle": "Hesabınızı ve ayarlarınızı kaybetmeden sohbet, müzik ve editör önbelleklerinden gigabaytlarca yer açın",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify ve VS Code, uygulamanın kendi kendine yeniden oluşturduğu önbellek dosyaları tutar; bunları temizlemek yer açar, oturumunuzu kapatmaz ve ayarlarınızı silmez.",
        "Önbelleği temizlemeden önce uygulamayı tamamen kapatın; çünkü kullanımdaki dosyalar silinemez ve uygulama onları hemen yeniden oluşturabilir.",
        "Spotify önbelleğini ve çevrimdışı indirmelerini birbiriyle ilişkili klasörlerde tutar; bu yüzden temizledikten sonra çevrimdışı şarkıları yeniden indirmeniz gerekebilir."
      ],
      "dataTable": {
        "caption": "Windows'ta her uygulamanın önbelleği nerede tutulur",
        "columns": [
          "Uygulama",
          "Önbellek klasörleri",
          "Temizledikten sonra ne olur"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache ve GPUCache",
            "Görseller ve dosyalar ilk kullanımda yeniden yüklenir; oturumunuz açık kalır"
          ],
          [
            "Microsoft Teams (klasik)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache ve GPUCache",
            "Teams önbelleği yeniden oluşturur ve bir kez daha yavaş açılabilir"
          ],
          [
            "Microsoft Teams (yeni)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Önbellek yeniden oluşturulur; sohbetleriniz ve dosyalarınız hesabınızda kalır"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data ve Browser\\Cache",
            "Akışla dinlenen şarkılar yeniden önbelleğe alınır; çevrimdışı indirmeleri yeniden indirmeniz gerekebilir"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache ve GPUCache",
            "Editör önbelleklerini yeniden oluşturur; uzantılarınıza ve ayarlarınıza dokunulmaz"
          ]
        ]
      },
      "howTo": {
        "name": "Windows'ta uygulama önbellekleri nasıl temizlenir",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Uygulamadan tamamen çıkın",
            "text": "Pencereyi kapatın, ardından sistem tepsisindeki uygulama simgesine sağ tıklayıp Çık'ı seçin ya da işlemi Görev Yöneticisi'nden sonlandırın. Kapatılmış bir pencere arka planda çalışmaya devam ediyor olabilir."
          },
          {
            "name": "Önbellek klasörünü açın",
            "text": "Windows tuşu + R'ye basın, klasör yolunu yapıştırın (örneğin %APPDATA%\\discord) ve Enter'a basın. İçindeki Cache, Code Cache ve GPUCache klasörlerini açın."
          },
          {
            "name": "İçeriği silin",
            "text": "Önbellek klasörlerinin içindeki her şeyi seçip silin. Diğer klasörlere dokunmayın; çünkü oturum bilgilerinizi ve ayarlarınızı barındırabilirler."
          },
          {
            "name": "Uygulamayı yeniden başlatın",
            "text": "Uygulamayı açıp normal şekilde kullanın. Önbellek yeniden oluşturulurken ilk açılış biraz yavaş olabilir; hesabınız ve ayarlarınız yerinde durur."
          },
          {
            "name": "Hepsini Disk Mop ile tek seferde temizleyin",
            "text": "Disk Mop'u açın, Yer aç sayfasına gidin ve taramayı çalıştırın. Discord önbelleği, Microsoft Teams önbelleği, Spotify önbelleği ve VS Code önbelleği öğelerini işaretleyin, boyutlarını kontrol edin ve onaylayın."
          }
        ]
      },
      "faq": [
        {
          "question": "Discord önbelleğini temizlemek oturumumu kapatır mı?",
          "answer": "Hayır. Cache, Code Cache ve GPUCache klasörleri yalnızca indirilmiş görselleri, betikleri ve derlenmiş kodu tutar. Oturum bilgileriniz ve ayarlarınız başka yerde saklanır, bu yüzden oturumunuz açık kalır. Eski sohbetlerdeki görseller ilk açışta biraz yavaş yüklenebilir."
        },
        {
          "question": "Microsoft Teams önbelleği neden bu kadar büyük?",
          "answer": "Teams, sohbetlerinizdeki ve toplantılarınızdaki görselleri, dosyaları, küçük resimleri ve web içeriğini hızlıca gösterebilmek için kopyalarını tutar. Yoğun kullanılan bir hesapta bu dosyalar gigabaytlara ulaşır ve siz temizleyene kadar kalır."
        },
        {
          "question": "Spotify önbelleğini temizlersem çevrimdışı şarkılarımı kaybeder miyim?",
          "answer": "Olabilir. Spotify, akışla dinlenen ve indirilen şarkıları birbiriyle ilişkili depolama klasörlerinde tutar; bu depolamayı temizlemek çevrimdışı indirmeleri de silebilir. Çalma listeleriniz ve kitaplığınız hesabınızdadır, etkilenmez; şarkıları yeniden indirebilirsiniz."
        },
        {
          "question": "VS Code önbelleğini silmek güvenli mi?",
          "answer": "Evet. Cache, CachedData, CachedExtensionVSIXs, Code Cache ve GPUCache klasörlerini editör yeniden oluşturur. Ayarlarınız, uzantılarınız ve çalışma alanlarınız başka klasörlerde durur ve bunlara dokunulmaz."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify ve VS Code'un hepsi web teknolojisi üzerine kuruludur ve her biri sürücünüzde görsellerden, betiklerden ve indirilmiş dosyalardan oluşan bir önbellek tutar. Bu önbellekleri güvenle temizleyebilirsiniz: uygulamadan çıkın, önbellek klasörlerinin içeriğini silin ve uygulamayı yeniden başlatın. Uygulama ihtiyacı olanı yeniden oluşturur, oturumunuz açık kalır ve alan geri gelir; her gün kullanılan bir bilgisayarda bu çoğu zaman uygulama başına birkaç gigabayttır.",
        "Bu rehber her uygulama için tam klasörleri listeler, her önbelleğin neyi tuttuğunu ve temizledikten sonra neyin değiştiğini açıklar, dördünü birden nasıl temizleyeceğinizi gösterir. Ayrıca uyarı gerektiren tek durumu da ele alır: Spotify'ın çevrimdışı şarkıları."
      ],
      "sections": [
        {
          "title": "Bu Uygulamalar Sürücünüzü Neden Doldurur",
          "content": [
            "Sohbet, görüntülü görüşme ve müzik uygulamaları size gösterdikleri her şeyin yerel bir kopyasını tutar. Discord, okuduğunuz sunuculardaki görselleri ve ekleri saklar. Teams, sohbetlerden ve toplantılardan küçük resimleri, dosyaları ve web içeriğini tutar. Spotify, daha hızlı başlasın diye akışla dinlediği şarkıları kaydeder; VS Code ise derlenmiş kodu, uzantı paketlerini ve grafik verilerini önbelleğe alır.",
            "Bu önbelleklerin hiçbiri agresif biçimde budanmaz. Uygulamalar bir sınıra ulaşılana kadar, bazı durumlarda ise net bir sınır olmadan önbelleği büyütmeye devam eder. Bir yıllık günlük kullanımdan sonra tek bir uygulamada birkaç gigabayt bulmak yaygındır; üstelik bunlar AppData içinde gözden kaçması kolay klasörlere dağılmıştır.",
            "Önbellek yalnızca bir kolaylık olduğundan uygulama onu her zaman yeniden indirebilir veya oluşturabilir. Bu yüzden, uygulama kapalıyken yaptığınız sürece temizlemek düşük risklidir."
          ]
        },
        {
          "title": "Discord ve Microsoft Teams",
          "content": [
            "Discord önbelleğini %APPDATA%\\discord içinde tutar. Önemli klasörler Cache, Code Cache ve GPUCache'tir. Bunları temizlemek indirilmiş görselleri, betikleri ve grafik verilerini kaldırır. Oturumunuz açık kalır; eski bir kanalı ilk açtığınızda görselleri yeniden yüklenir.",
            "Teams'in iki sürümü vardır. Klasik Teams önbelleğini %APPDATA%\\Microsoft\\Teams altında, Cache, Code Cache ve GPUCache klasörlerinde tutar. Yeni Teams ise verilerini %LOCALAPPDATA%\\Packages altında, adı MSTeams_ ile başlayan bir klasörün LocalCache adlı alt klasöründe saklar. Sohbetler, dosyalar ve toplantılar Microsoft 365 hesabınızda kalır; yani yalnızca yerel kopyalar silinir.",
            "Önce Teams'ten tepsi simgesi üzerinden çıkın; yalnızca pencereyi kapatırsanız uygulama çalışmaya devam eder ve siz silerken dosyaları yeniden oluşturur."
          ]
        },
        {
          "title": "Spotify: Önbellek ve Çevrimdışı İndirmeler",
          "content": [
            "Spotify verilerini %LOCALAPPDATA%\\Spotify içinde tutar. Storage klasörü önbelleğe alınmış şarkıları, Data ek önbellek verilerini, Browser\\Cache ise web görünümü önbelleğini barındırır. Akışla dinlediğiniz şarkılar gecikmesiz başlasın diye önbelleğe alınır.",
            "Çevrimdışı dinleme için indirilen çalma listeleri aynı depolama alanında durur; bu yüzden orayı temizlemek onları da kaldırabilir. Çalma listeleriniz, kitaplığınız ve hesabınız çevrimiçi saklandığı için etkilenmez, ancak çevrimdışı şarkıları yeniden indirmeniz gerekir. Çevrimdışı dinlemeye güveniyorsanız önce Spotify ayarlarındaki indirme konumuna bakın.",
            "Yalnızca önbelleği küçültmek istiyorsanız önce Spotify'ın kendi ayarlarındaki Depolama bölümüne bakın; önbelleği ve çevrimdışı depolama konumunu orada yönetir."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code, %APPDATA%\\Code içinde birkaç önbellek tutar: Cache, CachedData, CachedExtensionVSIXs, Code Cache ve GPUCache. CachedData derlenmiş kodu, CachedExtensionVSIXs kurulum için indirilmiş uzantı paketlerini, diğerleri ise web ve grafik verilerini barındırır.",
            "Bunları silmek uzantılarınızı, ayarlarınızı, tuş atamalarınızı veya çalışma alanlarınızı kaldırmaz; onlar User ve extensions gibi başka klasörlerde durur. Önbelleği temizledikten sonra editör bir kez biraz yavaş açılır, ardından eskisi gibi olur.",
            "Herhangi bir şeyi silmeden önce tüm VS Code pencerelerini kapatın; başka bir sanal masaüstünde gizlenmiş pencereler de dahil."
          ]
        },
        {
          "title": "Dördünü Birden Disk Mop ile Temizleyin",
          "content": [
            "Bunu elle yapmak bir düzine klasörü gezmek demektir. Disk Mop'un Yer aç sayfası Discord önbelleğini, Microsoft Teams önbelleğini, Spotify önbelleğini ve VS Code önbelleğini ayrı öğeler olarak listeler; her birinde boyutu ve uygulamanın veriyi yeniden oluşturduğunu, hesabınızın ve ayarlarınızın kaldığını belirten bir not bulunur.",
            "Taramayı çalıştırın, istediğiniz uygulamaları işaretleyin ve onaylayın. Disk Mop, hiçbir şeyi silmeden önce bulduklarını gösterir. Tarama ücretsizdir; böylece önce her uygulamanın ne kadar yer kapladığını görebilirsiniz. Başlamadan önce uygulamalardan çıkın; kullanımdaki dosyalar atlanır.",
            "Bu önbellekler zamanla yeniden büyür. Zamanlanmış temizlik aracı, Yer aç sayfasındaki güvenli öğeleri arka planda tekrarlayabilir; böylece birikmeleri engellenir."
          ]
        }
      ],
      "verdict": [
        "Discord, Microsoft Teams, Spotify ve VS Code önbellekleri, uygulamaların yeniden oluşturduğu geçici verilerdir; uygulama tamamen kapalıysa temizlemek güvenlidir. Hesabınız ve ayarlarınız kalır; beklemeniz gereken tek şey biraz yavaş bir ilk açılış ve Spotify'da çevrimdışı şarkıların yeniden indirilmesidir.",
        "Disk Mop dört önbelleği tek taramada bulur, her birinin boyutunu gösterir ve bir şey silmeden önce sorar. Tarama ücretsizdir; karar vermeden önce alanınızın nereye gittiğini görebilirsiniz."
      ],
      "ctaText": "Discord, Teams, Spotify ve VS Code önbelleklerini Disk Mop ile temizleyin"
    },
    "en": {
      "title": "How to Clear Discord, Teams, Spotify and VS Code Cache on Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify and VS Code each keep a cache that can reach several gigabytes. See where it is, what clearing does and how to do it safely.",
      "subtitle": "Free gigabytes from chat, music and editor caches without losing your account or settings",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify and VS Code store cache files that the app rebuilds on its own; clearing them frees space and does not sign you out or remove your settings.",
        "Close the app completely before you clear its cache, because files that are in use cannot be deleted and the app may recreate them at once.",
        "Spotify keeps its cache and offline downloads in related folders, so after clearing it expect to download offline songs again."
      ],
      "dataTable": {
        "caption": "Where each app keeps its cache on Windows",
        "columns": [
          "App",
          "Cache folders",
          "What happens after clearing"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache and GPUCache",
            "Images and files reload on first use; you stay signed in"
          ],
          [
            "Microsoft Teams (classic)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache and GPUCache",
            "Teams rebuilds the cache and may start more slowly once"
          ],
          [
            "Microsoft Teams (new)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "The cache is rebuilt; chats and files stay in your account"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data and Browser\\Cache",
            "Streamed songs are cached again; offline downloads may need to be downloaded again"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache and GPUCache",
            "The editor rebuilds its caches; extensions and settings are untouched"
          ]
        ]
      },
      "howTo": {
        "name": "How to clear app caches on Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Quit the app completely",
            "text": "Close the window, then right-click the app's icon in the system tray and choose Quit, or end the process in Task Manager. A closed window can still be running in the background."
          },
          {
            "name": "Open the cache folder",
            "text": "Press Windows key + R, paste the folder path, for example %APPDATA%\\discord, and press Enter. Open the Cache, Code Cache and GPUCache folders inside it."
          },
          {
            "name": "Delete the contents",
            "text": "Select everything inside the cache folders and delete it. Leave the other folders alone, because they can hold your sign-in and settings."
          },
          {
            "name": "Start the app again",
            "text": "Open the app and use it normally. The first start can be a little slower while it rebuilds its cache, and your account and settings are still there."
          },
          {
            "name": "Clear all of them at once with Disk Mop",
            "text": "Open Disk Mop, go to Free up space and run the scan. Tick Discord cache, Microsoft Teams cache, Spotify cache and VS Code cache, check the sizes and confirm."
          }
        ]
      },
      "faq": [
        {
          "question": "Will clearing the Discord cache log me out?",
          "answer": "No. The Cache, Code Cache and GPUCache folders only hold downloaded images, scripts and compiled code. Your login and settings are stored elsewhere, so you stay signed in. Images in old chats may load a little slower the first time you open them."
        },
        {
          "question": "Why is the Microsoft Teams cache so big?",
          "answer": "Teams keeps copies of images, files, thumbnails and web content from your chats and meetings so it can show them quickly. On a busy account these files add up to gigabytes, and they stay until you clear them."
        },
        {
          "question": "Do I lose my offline songs if I clear the Spotify cache?",
          "answer": "Possibly. Spotify keeps streamed songs and downloaded songs in related storage folders, so clearing that storage can remove offline downloads. Your playlists and library are in your account and are not affected, and you can download the songs again."
        },
        {
          "question": "Is it safe to delete the VS Code cache?",
          "answer": "Yes. Cache, CachedData, CachedExtensionVSIXs, Code Cache and GPUCache are rebuilt by the editor. Your settings, extensions and workspaces are kept in other folders and are not touched."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify and VS Code are all built on web technology, and each keeps a cache of images, scripts and downloaded files on your drive. You can clear these caches safely: quit the app, delete the contents of its cache folders, and start it again. The app rebuilds what it needs, you stay signed in, and the space comes back, often several gigabytes per app on a PC used every day.",
        "This guide lists the exact folders for each app, explains what each cache holds and what changes after you clear it, and shows how to do all four at once. It also covers the one case that needs a warning: Spotify's offline songs."
      ],
      "sections": [
        {
          "title": "Why These Apps Fill Your Drive",
          "content": [
            "Chat, video and music apps keep a local copy of whatever they have shown you. Discord stores images and attachments from servers you read. Teams keeps thumbnails, files and web content from chats and meetings. Spotify saves songs it has streamed so they start faster, and VS Code caches compiled code, extension packages and graphics data.",
            "None of these caches is ever trimmed aggressively. The apps keep growing them until a limit is reached, or in some cases without a clear limit. After a year of daily use it is common to find several gigabytes in a single app, spread over folders that are easy to overlook in AppData.",
            "Because the cache is only a convenience, the app can always download or build it again. That is why clearing it is low risk, as long as you do it with the app closed."
          ]
        },
        {
          "title": "Discord and Microsoft Teams",
          "content": [
            "Discord keeps its cache in %APPDATA%\\discord. The folders that matter are Cache, Code Cache and GPUCache. Clearing them removes downloaded images, scripts and graphics data. You stay signed in, and the first time you open an old channel its images load again.",
            "Teams has two versions. Classic Teams keeps its cache in %APPDATA%\\Microsoft\\Teams, in the Cache, Code Cache and GPUCache folders. The new Teams stores its data under %LOCALAPPDATA%\\Packages in a folder whose name starts with MSTeams_, in a subfolder called LocalCache. Chats, files and meetings stay in your Microsoft 365 account, so only local copies are removed.",
            "Quit Teams from the tray icon first; if you only close the window, it keeps running and recreates files while you delete them."
          ]
        },
        {
          "title": "Spotify: Cache and Offline Downloads",
          "content": [
            "Spotify keeps its data in %LOCALAPPDATA%\\Spotify. The Storage folder holds cached songs, Data holds additional cached data, and Browser\\Cache holds the web view cache. Songs you have streamed are cached so they start without delay.",
            "Downloaded playlists for offline listening live in the same storage area, so clearing it can remove them. Your playlists, library and account are not affected, because they are stored online, but you will have to download the offline songs again. If you rely on offline listening, check the download location in Spotify's settings first.",
            "If you only want to shrink the cache, look at the Storage section in Spotify's own settings first, which is where it manages its cache and offline storage location."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code keeps several caches in %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache and GPUCache. CachedData holds compiled code, CachedExtensionVSIXs holds extension packages that were downloaded for installation, and the others hold web and graphics data.",
            "Deleting them does not remove extensions, settings, keybindings or your workspaces; those live in other folders such as User and extensions. After you clear the cache the editor starts a little slower once, and then it is the same as before.",
            "Close every VS Code window before you delete anything, including windows hiding in another virtual desktop."
          ]
        },
        {
          "title": "Clear All Four at Once with Disk Mop",
          "content": [
            "Doing this by hand means visiting a dozen folders. Disk Mop's Free up space page lists Discord cache, Microsoft Teams cache, Spotify cache and VS Code cache as separate items, each with its size and a note that the app rebuilds the data and your account and settings stay.",
            "Run the scan, tick the apps you want and confirm. Disk Mop shows what it found before it deletes anything. Scanning is free, so you can see how much each app uses first. Quit the apps before you start; files that are in use are skipped.",
            "These caches grow back over time. The scheduled cleanup tool can repeat the safe items of Free up space in the background so they never build up again."
          ]
        }
      ],
      "verdict": [
        "The caches of Discord, Microsoft Teams, Spotify and VS Code are temporary data that the apps rebuild, so clearing them is safe as long as the app is fully closed. You keep your account and settings; the only thing to expect is a slightly slower first start, and re-downloading offline songs in Spotify.",
        "Disk Mop finds all four caches in one scan, shows the size of each and asks before it deletes anything. Scanning is free, so you can see where your space went before you decide."
      ],
      "ctaText": "Clear Discord, Teams, Spotify and VS Code caches with Disk Mop"
    },
    "de": {
      "title": "Discord-, Teams-, Spotify- und VS-Code-Cache unter Windows leeren",
      "metaDescription": "Der Cache von Discord, Microsoft Teams, Spotify und VS Code kann mehrere Gigabyte groß werden. So finden Sie die Ordner, wissen, was passiert, und leeren ihn sicher.",
      "subtitle": "Gigabytes aus Chat-, Musik- und Editor-Caches freigeben, ohne Konto oder Einstellungen zu verlieren",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify und VS Code legen Cache-Dateien an, die die App selbst neu aufbaut. Das Leeren schafft Platz, meldet Sie nicht ab und entfernt keine Einstellungen.",
        "Beenden Sie die App vollständig, bevor Sie ihren Cache leeren. Dateien, die in Gebrauch sind, lassen sich nicht löschen, und die App kann sie sofort neu anlegen.",
        "Spotify speichert Cache und Offline-Downloads in verwandten Ordnern. Nach dem Leeren müssen Sie Offline-Titel daher unter Umständen erneut herunterladen."
      ],
      "dataTable": {
        "caption": "Wo jede App ihren Cache unter Windows ablegt",
        "columns": [
          "App",
          "Cache-Ordner",
          "Was nach dem Leeren passiert"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache und GPUCache",
            "Bilder und Dateien werden bei der ersten Nutzung neu geladen; Sie bleiben angemeldet"
          ],
          [
            "Microsoft Teams (klassisch)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache und GPUCache",
            "Teams baut den Cache neu auf und startet einmalig womöglich langsamer"
          ],
          [
            "Microsoft Teams (neu)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Der Cache wird neu aufgebaut; Chats und Dateien bleiben in Ihrem Konto"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data und Browser\\Cache",
            "Gestreamte Titel werden erneut zwischengespeichert; Offline-Downloads müssen eventuell erneut heruntergeladen werden"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache und GPUCache",
            "Der Editor baut seine Caches neu auf; Erweiterungen und Einstellungen bleiben unberührt"
          ]
        ]
      },
      "howTo": {
        "name": "App-Caches unter Windows leeren",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Die App vollständig beenden",
            "text": "Schließen Sie das Fenster, klicken Sie dann im Infobereich der Taskleiste mit der rechten Maustaste auf das Symbol der App und wählen Sie Beenden, oder beenden Sie den Prozess im Task-Manager. Ein geschlossenes Fenster kann im Hintergrund weiterlaufen."
          },
          {
            "name": "Den Cache-Ordner öffnen",
            "text": "Drücken Sie Windows-Taste + R, fügen Sie den Ordnerpfad ein, zum Beispiel %APPDATA%\\discord, und drücken Sie die Eingabetaste. Öffnen Sie darin die Ordner Cache, Code Cache und GPUCache."
          },
          {
            "name": "Den Inhalt löschen",
            "text": "Markieren Sie alles in den Cache-Ordnern und löschen Sie es. Lassen Sie die übrigen Ordner unangetastet, denn sie können Ihre Anmeldung und Einstellungen enthalten."
          },
          {
            "name": "Die App erneut starten",
            "text": "Öffnen Sie die App und nutzen Sie sie wie gewohnt. Der erste Start kann etwas länger dauern, während der Cache neu aufgebaut wird. Konto und Einstellungen sind weiterhin vorhanden."
          },
          {
            "name": "Alle auf einmal mit Disk Mop leeren",
            "text": "Öffnen Sie Disk Mop, rufen Sie Speicher freigeben auf und starten Sie den Scan. Wählen Sie Discord-Cache, Microsoft-Teams-Cache, Spotify-Cache und VS-Code-Cache aus, prüfen Sie die Größen und bestätigen Sie."
          }
        ]
      },
      "faq": [
        {
          "question": "Werde ich abgemeldet, wenn ich den Discord-Cache leere?",
          "answer": "Nein. Die Ordner Cache, Code Cache und GPUCache enthalten nur heruntergeladene Bilder, Skripte und kompilierten Code. Ihre Anmeldung und Einstellungen liegen an anderer Stelle, Sie bleiben also angemeldet. Bilder in älteren Chats laden beim ersten Öffnen eventuell etwas langsamer."
        },
        {
          "question": "Warum ist der Microsoft-Teams-Cache so groß?",
          "answer": "Teams behält Kopien von Bildern, Dateien, Vorschaubildern und Webinhalten aus Ihren Chats und Besprechungen, um sie schnell anzeigen zu können. Bei einem stark genutzten Konto summieren sich diese Dateien auf Gigabytes und bleiben, bis Sie sie leeren."
        },
        {
          "question": "Verliere ich meine Offline-Titel, wenn ich den Spotify-Cache leere?",
          "answer": "Möglicherweise. Spotify legt gestreamte und heruntergeladene Titel in verwandten Speicherordnern ab, daher kann das Leeren dieses Speichers Offline-Downloads entfernen. Ihre Playlists und Ihre Bibliothek liegen in Ihrem Konto und bleiben unberührt; die Titel lassen sich erneut herunterladen."
        },
        {
          "question": "Ist es sicher, den VS-Code-Cache zu löschen?",
          "answer": "Ja. Cache, CachedData, CachedExtensionVSIXs, Code Cache und GPUCache werden vom Editor neu aufgebaut. Ihre Einstellungen, Erweiterungen und Arbeitsbereiche liegen in anderen Ordnern und bleiben unberührt."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify und VS Code basieren alle auf Webtechnologie, und jede dieser Apps legt auf Ihrem Laufwerk einen Cache aus Bildern, Skripten und heruntergeladenen Dateien an. Diese Caches lassen sich gefahrlos leeren: App beenden, den Inhalt der Cache-Ordner löschen und die App wieder starten. Die App baut auf, was sie braucht, Sie bleiben angemeldet, und der Speicherplatz kommt zurück, auf einem täglich genutzten PC oft mehrere Gigabyte pro App.",
        "Dieser Leitfaden nennt die genauen Ordner jeder App, erklärt, was jeder Cache enthält und was sich nach dem Leeren ändert, und zeigt, wie Sie alle vier auf einmal leeren. Er behandelt auch den einen Fall, der eine Warnung verdient: die Offline-Titel von Spotify."
      ],
      "sections": [
        {
          "title": "Warum diese Apps Ihr Laufwerk füllen",
          "content": [
            "Chat-, Video- und Musik-Apps behalten eine lokale Kopie von allem, was sie Ihnen angezeigt haben. Discord speichert Bilder und Anhänge aus den Servern, die Sie lesen. Teams behält Vorschaubilder, Dateien und Webinhalte aus Chats und Besprechungen. Spotify sichert gestreamte Titel, damit sie schneller starten, und VS Code legt kompilierten Code, Erweiterungspakete und Grafikdaten im Cache ab.",
            "Keiner dieser Caches wird konsequent gekürzt. Die Apps lassen ihn wachsen, bis eine Grenze erreicht ist, in manchen Fällen auch ohne klare Grenze. Nach einem Jahr täglicher Nutzung finden sich oft mehrere Gigabyte in einer einzelnen App, verteilt auf Ordner, die in AppData leicht übersehen werden.",
            "Da der Cache nur eine Bequemlichkeit ist, kann die App ihn jederzeit neu herunterladen oder aufbauen. Deshalb ist das Leeren risikoarm, solange die App dabei geschlossen ist."
          ]
        },
        {
          "title": "Discord und Microsoft Teams",
          "content": [
            "Discord legt seinen Cache in %APPDATA%\\discord ab. Wichtig sind die Ordner Cache, Code Cache und GPUCache. Wenn Sie sie leeren, werden heruntergeladene Bilder, Skripte und Grafikdaten entfernt. Sie bleiben angemeldet, und beim ersten Öffnen eines alten Kanals werden dessen Bilder neu geladen.",
            "Teams gibt es in zwei Versionen. Das klassische Teams legt seinen Cache in %APPDATA%\\Microsoft\\Teams ab, in den Ordnern Cache, Code Cache und GPUCache. Das neue Teams speichert seine Daten unter %LOCALAPPDATA%\\Packages in einem Ordner, dessen Name mit MSTeams_ beginnt, und zwar im Unterordner LocalCache. Chats, Dateien und Besprechungen bleiben in Ihrem Microsoft-365-Konto, es werden also nur lokale Kopien entfernt.",
            "Beenden Sie Teams zuerst über das Symbol im Infobereich. Wenn Sie nur das Fenster schließen, läuft die App weiter und legt Dateien neu an, während Sie löschen."
          ]
        },
        {
          "title": "Spotify: Cache und Offline-Downloads",
          "content": [
            "Spotify legt seine Daten in %LOCALAPPDATA%\\Spotify ab. Im Ordner Storage liegen zwischengespeicherte Titel, in Data weitere Cache-Daten und in Browser\\Cache der Cache der Webansicht. Gestreamte Titel werden zwischengespeichert, damit sie ohne Verzögerung starten.",
            "Für das Offline-Hören heruntergeladene Playlists liegen im selben Speicherbereich, daher kann das Leeren sie entfernen. Ihre Playlists, Ihre Bibliothek und Ihr Konto sind nicht betroffen, da sie online gespeichert sind, aber Sie müssen die Offline-Titel erneut herunterladen. Wenn Sie auf das Offline-Hören angewiesen sind, prüfen Sie zuerst den Speicherort der Downloads in den Spotify-Einstellungen.",
            "Wenn Sie den Cache nur verkleinern möchten, sehen Sie zuerst im Bereich Speicher der Spotify-Einstellungen nach. Dort verwaltet die App ihren Cache und den Speicherort für Offline-Inhalte."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code legt mehrere Caches in %APPDATA%\\Code ab: Cache, CachedData, CachedExtensionVSIXs, Code Cache und GPUCache. CachedData enthält kompilierten Code, CachedExtensionVSIXs enthält zur Installation heruntergeladene Erweiterungspakete, und die übrigen enthalten Web- und Grafikdaten.",
            "Das Löschen entfernt weder Erweiterungen noch Einstellungen, Tastenkombinationen oder Arbeitsbereiche; diese liegen in anderen Ordnern wie User und extensions. Nach dem Leeren startet der Editor einmalig etwas langsamer und verhält sich danach wie zuvor.",
            "Schließen Sie alle VS-Code-Fenster, bevor Sie etwas löschen, auch Fenster, die sich auf einem anderen virtuellen Desktop verstecken."
          ]
        },
        {
          "title": "Alle vier auf einmal mit Disk Mop leeren",
          "content": [
            "Von Hand müssen Sie dafür ein Dutzend Ordner besuchen. Die Seite Speicher freigeben von Disk Mop listet Discord-Cache, Microsoft-Teams-Cache, Spotify-Cache und VS-Code-Cache als einzelne Einträge auf, jeweils mit Größe und dem Hinweis, dass die App die Daten neu aufbaut und Ihr Konto und Ihre Einstellungen erhalten bleiben.",
            "Starten Sie den Scan, wählen Sie die gewünschten Apps aus und bestätigen Sie. Disk Mop zeigt an, was es gefunden hat, bevor es etwas löscht. Das Scannen ist kostenlos, Sie sehen also vorab, wie viel jede App belegt. Beenden Sie die Apps, bevor Sie beginnen; Dateien, die in Gebrauch sind, werden übersprungen.",
            "Diese Caches wachsen mit der Zeit wieder. Das Tool für die geplante Bereinigung kann die sicheren Einträge von Speicher freigeben im Hintergrund wiederholen, damit sie sich gar nicht erst ansammeln."
          ]
        }
      ],
      "verdict": [
        "Die Caches von Discord, Microsoft Teams, Spotify und VS Code sind temporäre Daten, die die Apps neu aufbauen. Das Leeren ist daher sicher, solange die App vollständig geschlossen ist. Konto und Einstellungen bleiben erhalten; zu erwarten sind nur ein etwas langsamerer erster Start und bei Spotify das erneute Herunterladen von Offline-Titeln.",
        "Disk Mop findet alle vier Caches in einem Scan, zeigt die Größe jedes einzelnen an und fragt nach, bevor es etwas löscht. Das Scannen ist kostenlos, sodass Sie sehen können, wo Ihr Speicher geblieben ist, bevor Sie entscheiden."
      ],
      "ctaText": "Discord-, Teams-, Spotify- und VS-Code-Cache mit Disk Mop leeren"
    },
    "fr": {
      "title": "Comment vider le cache de Discord, Teams, Spotify et VS Code sur Windows",
      "metaDescription": "Le cache de Discord, Teams, Spotify et VS Code peut peser plusieurs gigaoctets. Où il se trouve, ce que change son effacement et comment le vider sans risque.",
      "subtitle": "Libérez des gigaoctets de caches de messagerie, de musique et d'éditeur sans perdre votre compte ni vos paramètres",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify et VS Code stockent des fichiers de cache que l'application reconstruit seule ; les vider libère de l'espace, ne vous déconnecte pas et ne supprime pas vos paramètres.",
        "Fermez complètement l'application avant de vider son cache, car les fichiers en cours d'utilisation ne peuvent pas être supprimés et l'application peut les recréer aussitôt.",
        "Spotify conserve son cache et ses téléchargements hors connexion dans des dossiers liés ; après avoir vidé le cache, il faudra peut-être retélécharger les titres hors connexion."
      ],
      "dataTable": {
        "caption": "Où chaque application conserve son cache sous Windows",
        "columns": [
          "Application",
          "Dossiers de cache",
          "Ce qui se passe après l'effacement"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache et GPUCache",
            "Les images et fichiers se rechargent à la première utilisation ; vous restez connecté"
          ],
          [
            "Microsoft Teams (classique)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache et GPUCache",
            "Teams reconstruit le cache et peut démarrer plus lentement une fois"
          ],
          [
            "Microsoft Teams (nouveau)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Le cache est reconstruit ; les conversations et fichiers restent dans votre compte"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data et Browser\\Cache",
            "Les titres écoutés en streaming sont de nouveau mis en cache ; les téléchargements hors connexion devront peut-être être retéléchargés"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache et GPUCache",
            "L'éditeur reconstruit ses caches ; les extensions et les paramètres ne sont pas touchés"
          ]
        ]
      },
      "howTo": {
        "name": "Comment vider les caches des applications sous Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Quitter complètement l'application",
            "text": "Fermez la fenêtre, puis faites un clic droit sur l'icône de l'application dans la zone de notification et choisissez Quitter, ou terminez le processus dans le Gestionnaire des tâches. Une fenêtre fermée peut continuer à s'exécuter en arrière-plan."
          },
          {
            "name": "Ouvrir le dossier de cache",
            "text": "Appuyez sur la touche Windows + R, collez le chemin du dossier, par exemple %APPDATA%\\discord, puis appuyez sur Entrée. Ouvrez les dossiers Cache, Code Cache et GPUCache qui s'y trouvent."
          },
          {
            "name": "Supprimer le contenu",
            "text": "Sélectionnez tout ce que contiennent les dossiers de cache et supprimez-le. Ne touchez pas aux autres dossiers, car ils peuvent contenir votre connexion et vos paramètres."
          },
          {
            "name": "Relancer l'application",
            "text": "Ouvrez l'application et utilisez-la normalement. Le premier démarrage peut être un peu plus lent pendant la reconstruction du cache ; votre compte et vos paramètres sont toujours là."
          },
          {
            "name": "Tout vider d'un coup avec Disk Mop",
            "text": "Ouvrez Disk Mop, allez à Libérer de l'espace et lancez l'analyse. Cochez Cache Discord, Cache Microsoft Teams, Cache Spotify et Cache VS Code, vérifiez les tailles, puis confirmez."
          }
        ]
      },
      "faq": [
        {
          "question": "Vider le cache de Discord me déconnecte-t-il ?",
          "answer": "Non. Les dossiers Cache, Code Cache et GPUCache ne contiennent que des images, des scripts et du code compilé téléchargés. Votre connexion et vos paramètres sont stockés ailleurs, vous restez donc connecté. Les images des anciennes conversations peuvent se charger un peu plus lentement à la première ouverture."
        },
        {
          "question": "Pourquoi le cache de Microsoft Teams est-il si volumineux ?",
          "answer": "Teams conserve des copies des images, fichiers, miniatures et contenus web de vos conversations et réunions pour les afficher rapidement. Sur un compte très actif, ces fichiers atteignent plusieurs gigaoctets et restent jusqu'à ce que vous les supprimiez."
        },
        {
          "question": "Vais-je perdre mes titres hors connexion si je vide le cache de Spotify ?",
          "answer": "Peut-être. Spotify garde les titres écoutés en streaming et les titres téléchargés dans des dossiers de stockage liés ; vider ce stockage peut donc supprimer les téléchargements hors connexion. Vos playlists et votre bibliothèque sont dans votre compte et ne sont pas touchées, et vous pouvez retélécharger les titres."
        },
        {
          "question": "Est-il sûr de supprimer le cache de VS Code ?",
          "answer": "Oui. Cache, CachedData, CachedExtensionVSIXs, Code Cache et GPUCache sont reconstruits par l'éditeur. Vos paramètres, extensions et espaces de travail se trouvent dans d'autres dossiers et ne sont pas touchés."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify et VS Code reposent tous sur des technologies web, et chacun conserve sur votre disque un cache d'images, de scripts et de fichiers téléchargés. Vous pouvez vider ces caches sans risque : quittez l'application, supprimez le contenu de ses dossiers de cache, puis relancez-la. L'application reconstruit ce dont elle a besoin, vous restez connecté et l'espace est récupéré, souvent plusieurs gigaoctets par application sur un PC utilisé tous les jours.",
        "Ce guide indique les dossiers exacts de chaque application, explique ce que contient chaque cache et ce qui change après son effacement, et montre comment vider les quatre d'un coup. Il aborde aussi le seul cas qui demande une mise en garde : les titres hors connexion de Spotify."
      ],
      "sections": [
        {
          "title": "Pourquoi ces applications remplissent votre disque",
          "content": [
            "Les applications de messagerie, de visioconférence et de musique gardent une copie locale de tout ce qu'elles vous ont montré. Discord stocke les images et pièces jointes des serveurs que vous lisez. Teams conserve les miniatures, fichiers et contenus web des conversations et réunions. Spotify enregistre les titres écoutés en streaming pour qu'ils démarrent plus vite, et VS Code met en cache du code compilé, des paquets d'extensions et des données graphiques.",
            "Aucun de ces caches n'est réduit de façon agressive. Les applications le laissent grossir jusqu'à une limite, ou parfois sans limite claire. Après un an d'utilisation quotidienne, il est courant de trouver plusieurs gigaoctets dans une seule application, répartis dans des dossiers faciles à manquer dans AppData.",
            "Comme le cache n'est qu'un confort, l'application peut toujours le retélécharger ou le reconstruire. C'est pourquoi l'effacer présente peu de risques, à condition de le faire application fermée."
          ]
        },
        {
          "title": "Discord et Microsoft Teams",
          "content": [
            "Discord garde son cache dans %APPDATA%\\discord. Les dossiers qui comptent sont Cache, Code Cache et GPUCache. Les vider supprime les images, scripts et données graphiques téléchargés. Vous restez connecté, et la première fois que vous ouvrez un ancien salon, ses images se rechargent.",
            "Teams existe en deux versions. Teams classique garde son cache dans %APPDATA%\\Microsoft\\Teams, dans les dossiers Cache, Code Cache et GPUCache. Le nouveau Teams stocke ses données sous %LOCALAPPDATA%\\Packages, dans un dossier dont le nom commence par MSTeams_, dans un sous-dossier appelé LocalCache. Les conversations, fichiers et réunions restent dans votre compte Microsoft 365 : seules les copies locales sont supprimées.",
            "Quittez d'abord Teams depuis l'icône de la zone de notification ; si vous fermez seulement la fenêtre, l'application continue de tourner et recrée des fichiers pendant que vous supprimez."
          ]
        },
        {
          "title": "Spotify : cache et téléchargements hors connexion",
          "content": [
            "Spotify conserve ses données dans %LOCALAPPDATA%\\Spotify. Le dossier Storage contient les titres mis en cache, Data contient d'autres données en cache et Browser\\Cache contient le cache de la vue web. Les titres écoutés en streaming sont mis en cache pour démarrer sans délai.",
            "Les playlists téléchargées pour l'écoute hors connexion se trouvent dans la même zone de stockage ; la vider peut donc les supprimer. Vos playlists, votre bibliothèque et votre compte ne sont pas touchés, car ils sont stockés en ligne, mais vous devrez retélécharger les titres hors connexion. Si vous comptez sur l'écoute hors connexion, vérifiez d'abord l'emplacement de téléchargement dans les paramètres de Spotify.",
            "Si vous voulez seulement réduire le cache, regardez d'abord la section Stockage dans les paramètres de Spotify : c'est là que l'application gère son cache et l'emplacement du stockage hors connexion."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code garde plusieurs caches dans %APPDATA%\\Code : Cache, CachedData, CachedExtensionVSIXs, Code Cache et GPUCache. CachedData contient du code compilé, CachedExtensionVSIXs contient les paquets d'extensions téléchargés pour l'installation, et les autres contiennent des données web et graphiques.",
            "Les supprimer ne retire ni les extensions, ni les paramètres, ni les raccourcis clavier, ni vos espaces de travail ; ceux-ci se trouvent dans d'autres dossiers comme User et extensions. Après avoir vidé le cache, l'éditeur démarre un peu plus lentement une fois, puis redevient comme avant.",
            "Fermez toutes les fenêtres de VS Code avant de supprimer quoi que ce soit, y compris celles qui se cachent sur un autre bureau virtuel."
          ]
        },
        {
          "title": "Vider les quatre d'un coup avec Disk Mop",
          "content": [
            "Le faire à la main oblige à visiter une douzaine de dossiers. La page Libérer de l'espace de Disk Mop liste Cache Discord, Cache Microsoft Teams, Cache Spotify et Cache VS Code comme éléments distincts, chacun avec sa taille et une note indiquant que l'application reconstruit les données et que votre compte et vos paramètres restent intacts.",
            "Lancez l'analyse, cochez les applications voulues et confirmez. Disk Mop affiche ce qu'il a trouvé avant de supprimer quoi que ce soit. L'analyse est gratuite : vous pouvez donc voir d'abord ce que chaque application occupe. Quittez les applications avant de commencer ; les fichiers en cours d'utilisation sont ignorés.",
            "Ces caches regrossissent avec le temps. L'outil de nettoyage planifié peut répéter en arrière-plan les éléments sûrs de Libérer de l'espace pour qu'ils ne s'accumulent plus."
          ]
        }
      ],
      "verdict": [
        "Les caches de Discord, Microsoft Teams, Spotify et VS Code sont des données temporaires que les applications reconstruisent ; les vider est donc sans danger tant que l'application est complètement fermée. Vous gardez votre compte et vos paramètres ; il faut seulement s'attendre à un premier démarrage un peu plus lent et, pour Spotify, au retéléchargement des titres hors connexion.",
        "Disk Mop trouve les quatre caches en une seule analyse, affiche la taille de chacun et demande confirmation avant de supprimer quoi que ce soit. L'analyse est gratuite : vous pouvez voir où est passé votre espace avant de décider."
      ],
      "ctaText": "Vider les caches Discord, Teams, Spotify et VS Code avec Disk Mop"
    },
    "es": {
      "title": "Cómo borrar la caché de Discord, Teams, Spotify y VS Code en Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify y VS Code guardan cada uno una caché que puede ocupar varios gigabytes. Dónde está, qué pasa al borrarla y cómo hacerlo sin riesgo.",
      "subtitle": "Libera gigabytes de las cachés de chat, música y editor sin perder tu cuenta ni tus ajustes",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify y VS Code almacenan archivos de caché que la aplicación reconstruye por sí sola; borrarlos libera espacio, no cierra tu sesión ni elimina tus ajustes.",
        "Cierra la aplicación por completo antes de borrar su caché, porque los archivos en uso no se pueden eliminar y la aplicación puede volver a crearlos al instante.",
        "Spotify guarda su caché y las descargas sin conexión en carpetas relacionadas, así que tras borrarla es posible que tengas que volver a descargar las canciones sin conexión."
      ],
      "dataTable": {
        "caption": "Dónde guarda cada aplicación su caché en Windows",
        "columns": [
          "Aplicación",
          "Carpetas de caché",
          "Qué ocurre después de borrarla"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache y GPUCache",
            "Las imágenes y los archivos se vuelven a cargar en el primer uso; sigues con la sesión iniciada"
          ],
          [
            "Microsoft Teams (clásico)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache y GPUCache",
            "Teams reconstruye la caché y puede iniciarse más despacio una vez"
          ],
          [
            "Microsoft Teams (nuevo)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "La caché se reconstruye; los chats y archivos permanecen en tu cuenta"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data y Browser\\Cache",
            "Las canciones en streaming se vuelven a guardar en caché; puede que haya que volver a descargar las descargas sin conexión"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache y GPUCache",
            "El editor reconstruye sus cachés; las extensiones y los ajustes no se tocan"
          ]
        ]
      },
      "howTo": {
        "name": "Cómo borrar las cachés de las aplicaciones en Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Salir de la aplicación por completo",
            "text": "Cierra la ventana, haz clic con el botón derecho en el icono de la aplicación en el área de notificación y elige Salir, o finaliza el proceso en el Administrador de tareas. Una ventana cerrada puede seguir ejecutándose en segundo plano."
          },
          {
            "name": "Abrir la carpeta de caché",
            "text": "Pulsa la tecla Windows + R, pega la ruta de la carpeta, por ejemplo %APPDATA%\\discord, y pulsa Entrar. Abre las carpetas Cache, Code Cache y GPUCache que contiene."
          },
          {
            "name": "Eliminar el contenido",
            "text": "Selecciona todo lo que hay dentro de las carpetas de caché y elimínalo. No toques las demás carpetas, porque pueden contener tu inicio de sesión y tus ajustes."
          },
          {
            "name": "Volver a iniciar la aplicación",
            "text": "Abre la aplicación y úsala con normalidad. El primer inicio puede ser algo más lento mientras reconstruye su caché, y tu cuenta y tus ajustes siguen ahí."
          },
          {
            "name": "Borrarlas todas a la vez con Disk Mop",
            "text": "Abre Disk Mop, ve a Liberar espacio y ejecuta el análisis. Marca Caché de Discord, Caché de Microsoft Teams, Caché de Spotify y Caché de VS Code, comprueba los tamaños y confirma."
          }
        ]
      },
      "faq": [
        {
          "question": "¿Cerrará mi sesión si borro la caché de Discord?",
          "answer": "No. Las carpetas Cache, Code Cache y GPUCache solo contienen imágenes, scripts y código compilado descargados. Tu inicio de sesión y tus ajustes se guardan en otro lugar, así que sigues con la sesión iniciada. Las imágenes de chats antiguos pueden tardar un poco más en cargarse la primera vez que los abras."
        },
        {
          "question": "¿Por qué es tan grande la caché de Microsoft Teams?",
          "answer": "Teams guarda copias de imágenes, archivos, miniaturas y contenido web de tus chats y reuniones para mostrarlos rápidamente. En una cuenta con mucha actividad, estos archivos suman gigabytes y permanecen hasta que los borras."
        },
        {
          "question": "¿Perderé mis canciones sin conexión si borro la caché de Spotify?",
          "answer": "Es posible. Spotify guarda las canciones en streaming y las descargadas en carpetas de almacenamiento relacionadas, por lo que borrar ese almacenamiento puede eliminar las descargas sin conexión. Tus listas de reproducción y tu biblioteca están en tu cuenta y no se ven afectadas, y puedes volver a descargar las canciones."
        },
        {
          "question": "¿Es seguro borrar la caché de VS Code?",
          "answer": "Sí. Cache, CachedData, CachedExtensionVSIXs, Code Cache y GPUCache los reconstruye el editor. Tus ajustes, extensiones y áreas de trabajo se guardan en otras carpetas y no se tocan."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify y VS Code están construidos con tecnología web, y cada uno guarda en tu unidad una caché de imágenes, scripts y archivos descargados. Puedes borrar estas cachés sin riesgo: cierra la aplicación, elimina el contenido de sus carpetas de caché y vuelve a abrirla. La aplicación reconstruye lo que necesita, sigues con la sesión iniciada y recuperas el espacio, a menudo varios gigabytes por aplicación en un PC que se usa a diario.",
        "Esta guía enumera las carpetas exactas de cada aplicación, explica qué contiene cada caché y qué cambia después de borrarla, y muestra cómo borrar las cuatro a la vez. También trata el único caso que merece una advertencia: las canciones sin conexión de Spotify."
      ],
      "sections": [
        {
          "title": "Por qué estas aplicaciones llenan tu unidad",
          "content": [
            "Las aplicaciones de chat, vídeo y música guardan una copia local de todo lo que te han mostrado. Discord almacena las imágenes y los archivos adjuntos de los servidores que lees. Teams guarda miniaturas, archivos y contenido web de chats y reuniones. Spotify guarda las canciones que has reproducido en streaming para que empiecen más rápido, y VS Code almacena en caché código compilado, paquetes de extensiones y datos de gráficos.",
            "Ninguna de estas cachés se recorta de forma agresiva. Las aplicaciones las dejan crecer hasta alcanzar un límite o, en algunos casos, sin un límite claro. Tras un año de uso diario es habitual encontrar varios gigabytes en una sola aplicación, repartidos en carpetas fáciles de pasar por alto en AppData.",
            "Como la caché es solo una comodidad, la aplicación siempre puede descargarla o construirla de nuevo. Por eso borrarla supone poco riesgo, siempre que lo hagas con la aplicación cerrada."
          ]
        },
        {
          "title": "Discord y Microsoft Teams",
          "content": [
            "Discord guarda su caché en %APPDATA%\\discord. Las carpetas que importan son Cache, Code Cache y GPUCache. Al borrarlas se eliminan las imágenes, los scripts y los datos de gráficos descargados. Sigues con la sesión iniciada, y la primera vez que abras un canal antiguo sus imágenes se vuelven a cargar.",
            "Teams tiene dos versiones. Teams clásico guarda su caché en %APPDATA%\\Microsoft\\Teams, en las carpetas Cache, Code Cache y GPUCache. El nuevo Teams almacena sus datos en %LOCALAPPDATA%\\Packages, dentro de una carpeta cuyo nombre empieza por MSTeams_, en una subcarpeta llamada LocalCache. Los chats, archivos y reuniones permanecen en tu cuenta de Microsoft 365, así que solo se eliminan las copias locales.",
            "Sal primero de Teams desde el icono del área de notificación; si solo cierras la ventana, sigue ejecutándose y vuelve a crear archivos mientras los borras."
          ]
        },
        {
          "title": "Spotify: caché y descargas sin conexión",
          "content": [
            "Spotify guarda sus datos en %LOCALAPPDATA%\\Spotify. La carpeta Storage contiene las canciones en caché, Data contiene datos adicionales en caché y Browser\\Cache contiene la caché de la vista web. Las canciones que has reproducido en streaming se guardan en caché para que empiecen sin demora.",
            "Las listas de reproducción descargadas para escuchar sin conexión están en la misma zona de almacenamiento, por lo que borrarla puede eliminarlas. Tus listas de reproducción, tu biblioteca y tu cuenta no se ven afectadas, porque se guardan en línea, pero tendrás que volver a descargar las canciones sin conexión. Si dependes de la escucha sin conexión, revisa antes la ubicación de descarga en los ajustes de Spotify.",
            "Si solo quieres reducir la caché, mira primero la sección Almacenamiento de los propios ajustes de Spotify, donde la aplicación gestiona su caché y la ubicación del almacenamiento sin conexión."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code guarda varias cachés en %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache y GPUCache. CachedData contiene código compilado, CachedExtensionVSIXs contiene los paquetes de extensiones descargados para su instalación y las demás contienen datos web y de gráficos.",
            "Borrarlas no elimina las extensiones, los ajustes, los atajos de teclado ni tus áreas de trabajo; estos están en otras carpetas, como User y extensions. Tras borrar la caché, el editor arranca algo más lento una vez y después queda como antes.",
            "Cierra todas las ventanas de VS Code antes de borrar nada, incluidas las que se esconden en otro escritorio virtual."
          ]
        },
        {
          "title": "Borrar las cuatro a la vez con Disk Mop",
          "content": [
            "Hacerlo a mano implica visitar una docena de carpetas. La página Liberar espacio de Disk Mop muestra Caché de Discord, Caché de Microsoft Teams, Caché de Spotify y Caché de VS Code como elementos separados, cada uno con su tamaño y una nota que indica que la aplicación reconstruye los datos y que tu cuenta y tus ajustes se conservan.",
            "Ejecuta el análisis, marca las aplicaciones que quieras y confirma. Disk Mop muestra lo que ha encontrado antes de borrar nada. Analizar es gratis, así que puedes ver primero cuánto ocupa cada aplicación. Cierra las aplicaciones antes de empezar; los archivos en uso se omiten.",
            "Estas cachés vuelven a crecer con el tiempo. La herramienta de limpieza programada puede repetir en segundo plano los elementos seguros de Liberar espacio para que no se acumulen de nuevo."
          ]
        }
      ],
      "verdict": [
        "Las cachés de Discord, Microsoft Teams, Spotify y VS Code son datos temporales que las aplicaciones reconstruyen, así que borrarlas es seguro siempre que la aplicación esté totalmente cerrada. Conservas tu cuenta y tus ajustes; lo único que cabe esperar es un primer inicio algo más lento y, en Spotify, volver a descargar las canciones sin conexión.",
        "Disk Mop encuentra las cuatro cachés en un solo análisis, muestra el tamaño de cada una y pregunta antes de borrar nada. Analizar es gratis, así que puedes ver adónde se fue tu espacio antes de decidir."
      ],
      "ctaText": "Borra las cachés de Discord, Teams, Spotify y VS Code con Disk Mop"
    },
    "it": {
      "title": "Come svuotare la cache di Discord, Teams, Spotify e VS Code su Windows",
      "metaDescription": "La cache di Discord, Teams, Spotify e VS Code può arrivare a diversi gigabyte. Dove si trova, cosa cambia svuotandola e come farlo senza rischi.",
      "subtitle": "Recupera gigabyte dalle cache di chat, musica ed editor senza perdere account e impostazioni",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify e VS Code memorizzano file di cache che l'app ricostruisce da sola; svuotarli libera spazio, non ti disconnette e non elimina le impostazioni.",
        "Chiudi completamente l'app prima di svuotarne la cache, perché i file in uso non possono essere eliminati e l'app potrebbe ricrearli subito.",
        "Spotify conserva la cache e i download offline in cartelle collegate, quindi dopo averla svuotata potresti dover scaricare di nuovo i brani offline."
      ],
      "dataTable": {
        "caption": "Dove ogni app conserva la propria cache in Windows",
        "columns": [
          "App",
          "Cartelle della cache",
          "Cosa succede dopo lo svuotamento"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache e GPUCache",
            "Immagini e file vengono ricaricati al primo utilizzo; resti connesso"
          ],
          [
            "Microsoft Teams (classico)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache e GPUCache",
            "Teams ricostruisce la cache e può avviarsi più lentamente una volta"
          ],
          [
            "Microsoft Teams (nuovo)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "La cache viene ricostruita; chat e file restano nel tuo account"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data e Browser\\Cache",
            "I brani in streaming vengono memorizzati di nuovo nella cache; i download offline potrebbero dover essere scaricati di nuovo"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache",
            "L'editor ricostruisce le sue cache; estensioni e impostazioni non vengono toccate"
          ]
        ]
      },
      "howTo": {
        "name": "Come svuotare la cache delle app su Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Chiudere completamente l'app",
            "text": "Chiudi la finestra, poi fai clic con il pulsante destro sull'icona dell'app nell'area di notifica e scegli Esci, oppure termina il processo da Gestione attività. Una finestra chiusa può continuare a funzionare in background."
          },
          {
            "name": "Aprire la cartella della cache",
            "text": "Premi il tasto Windows + R, incolla il percorso della cartella, ad esempio %APPDATA%\\discord, e premi Invio. Apri al suo interno le cartelle Cache, Code Cache e GPUCache."
          },
          {
            "name": "Eliminare il contenuto",
            "text": "Seleziona tutto il contenuto delle cartelle della cache ed eliminalo. Non toccare le altre cartelle, perché possono contenere l'accesso e le impostazioni."
          },
          {
            "name": "Riavviare l'app",
            "text": "Apri l'app e usala normalmente. Il primo avvio può essere un po' più lento mentre ricostruisce la cache, e account e impostazioni sono ancora al loro posto."
          },
          {
            "name": "Svuotarle tutte insieme con Disk Mop",
            "text": "Apri Disk Mop, vai a Libera spazio ed esegui la scansione. Seleziona Cache Discord, Cache Microsoft Teams, Cache Spotify e Cache VS Code, controlla le dimensioni e conferma."
          }
        ]
      },
      "faq": [
        {
          "question": "Svuotare la cache di Discord mi disconnette?",
          "answer": "No. Le cartelle Cache, Code Cache e GPUCache contengono solo immagini, script e codice compilato scaricati. L'accesso e le impostazioni sono salvati altrove, quindi resti connesso. Le immagini delle chat vecchie possono caricarsi un po' più lentamente la prima volta che le apri."
        },
        {
          "question": "Perché la cache di Microsoft Teams è così grande?",
          "answer": "Teams conserva copie di immagini, file, miniature e contenuti web di chat e riunioni per mostrarli rapidamente. Su un account molto attivo questi file arrivano a occupare gigabyte e restano finché non li svuoti."
        },
        {
          "question": "Se svuoto la cache di Spotify perdo i brani offline?",
          "answer": "Possibilmente. Spotify conserva i brani in streaming e quelli scaricati in cartelle di archiviazione collegate, quindi svuotare quell'archivio può rimuovere i download offline. Playlist e libreria sono nel tuo account e non vengono toccate, e puoi scaricare di nuovo i brani."
        },
        {
          "question": "È sicuro eliminare la cache di VS Code?",
          "answer": "Sì. Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache vengono ricostruite dall'editor. Impostazioni, estensioni e aree di lavoro si trovano in altre cartelle e non vengono toccate."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify e VS Code sono tutti basati su tecnologia web, e ciascuno conserva sul disco una cache di immagini, script e file scaricati. Puoi svuotare queste cache senza rischi: chiudi l'app, elimina il contenuto delle sue cartelle della cache e riavviala. L'app ricostruisce ciò che le serve, resti connesso e lo spazio torna disponibile, spesso diversi gigabyte per app su un PC usato ogni giorno.",
        "Questa guida elenca le cartelle esatte di ogni app, spiega cosa contiene ciascuna cache e cosa cambia dopo averla svuotata, e mostra come svuotarle tutte e quattro in una volta. Tratta anche l'unico caso che richiede un avvertimento: i brani offline di Spotify."
      ],
      "sections": [
        {
          "title": "Perché queste app riempiono il disco",
          "content": [
            "Le app di chat, video e musica conservano una copia locale di tutto ciò che ti hanno mostrato. Discord memorizza immagini e allegati dei server che leggi. Teams conserva miniature, file e contenuti web di chat e riunioni. Spotify salva i brani ascoltati in streaming perché partano più in fretta, e VS Code mette in cache codice compilato, pacchetti delle estensioni e dati grafici.",
            "Nessuna di queste cache viene ridotta in modo aggressivo. Le app continuano a farla crescere fino al raggiungimento di un limite o, in alcuni casi, senza un limite chiaro. Dopo un anno di uso quotidiano è comune trovare diversi gigabyte in una sola app, distribuiti in cartelle facili da trascurare in AppData.",
            "Poiché la cache è solo una comodità, l'app può sempre scaricarla o ricostruirla. Per questo svuotarla comporta un rischio basso, a patto di farlo con l'app chiusa."
          ]
        },
        {
          "title": "Discord e Microsoft Teams",
          "content": [
            "Discord conserva la cache in %APPDATA%\\discord. Le cartelle che contano sono Cache, Code Cache e GPUCache. Svuotarle rimuove le immagini, gli script e i dati grafici scaricati. Resti connesso e la prima volta che apri un canale vecchio le sue immagini vengono ricaricate.",
            "Teams esiste in due versioni. Teams classico conserva la cache in %APPDATA%\\Microsoft\\Teams, nelle cartelle Cache, Code Cache e GPUCache. Il nuovo Teams salva i dati in %LOCALAPPDATA%\\Packages, in una cartella il cui nome inizia con MSTeams_, in una sottocartella chiamata LocalCache. Chat, file e riunioni restano nel tuo account Microsoft 365, quindi vengono rimosse solo le copie locali.",
            "Esci prima da Teams dall'icona nell'area di notifica; se chiudi solo la finestra, l'app continua a funzionare e ricrea i file mentre li elimini."
          ]
        },
        {
          "title": "Spotify: cache e download offline",
          "content": [
            "Spotify conserva i suoi dati in %LOCALAPPDATA%\\Spotify. La cartella Storage contiene i brani in cache, Data contiene altri dati in cache e Browser\\Cache contiene la cache della visualizzazione web. I brani ascoltati in streaming vengono messi in cache perché partano senza ritardo.",
            "Le playlist scaricate per l'ascolto offline si trovano nella stessa area di archiviazione, quindi svuotarla può rimuoverle. Playlist, libreria e account non vengono toccati, perché sono salvati online, ma dovrai scaricare di nuovo i brani offline. Se conti sull'ascolto offline, controlla prima il percorso di download nelle impostazioni di Spotify.",
            "Se vuoi solo ridurre la cache, guarda prima la sezione Archiviazione nelle impostazioni di Spotify, dove l'app gestisce la cache e la posizione dell'archiviazione offline."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code conserva diverse cache in %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache. CachedData contiene codice compilato, CachedExtensionVSIXs contiene i pacchetti delle estensioni scaricati per l'installazione e le altre contengono dati web e grafici.",
            "Eliminarle non rimuove estensioni, impostazioni, scorciatoie da tastiera né le tue aree di lavoro; si trovano in altre cartelle come User ed extensions. Dopo aver svuotato la cache l'editor si avvia un po' più lentamente una volta, poi torna come prima.",
            "Chiudi tutte le finestre di VS Code prima di eliminare qualsiasi cosa, comprese quelle nascoste in un altro desktop virtuale."
          ]
        },
        {
          "title": "Svuotare tutte e quattro insieme con Disk Mop",
          "content": [
            "Farlo a mano significa visitare una dozzina di cartelle. La pagina Libera spazio di Disk Mop elenca Cache Discord, Cache Microsoft Teams, Cache Spotify e Cache VS Code come voci separate, ciascuna con la sua dimensione e una nota che indica che l'app ricostruisce i dati e che account e impostazioni restano.",
            "Esegui la scansione, seleziona le app che vuoi e conferma. Disk Mop mostra ciò che ha trovato prima di eliminare qualsiasi cosa. La scansione è gratuita, quindi puoi prima vedere quanto occupa ogni app. Chiudi le app prima di iniziare; i file in uso vengono saltati.",
            "Queste cache ricrescono nel tempo. Lo strumento di pulizia pianificata può ripetere in background le voci sicure di Libera spazio, così da non farle accumulare di nuovo."
          ]
        }
      ],
      "verdict": [
        "Le cache di Discord, Microsoft Teams, Spotify e VS Code sono dati temporanei che le app ricostruiscono, quindi svuotarle è sicuro purché l'app sia completamente chiusa. Mantieni account e impostazioni; ci si può aspettare solo un primo avvio un po' più lento e, in Spotify, il nuovo download dei brani offline.",
        "Disk Mop trova tutte e quattro le cache in una sola scansione, mostra la dimensione di ciascuna e chiede conferma prima di eliminare qualsiasi cosa. La scansione è gratuita, quindi puoi vedere dove è finito il tuo spazio prima di decidere."
      ],
      "ctaText": "Svuota le cache di Discord, Teams, Spotify e VS Code con Disk Mop"
    },
    "pt": {
      "title": "Como limpar o cache do Discord, Teams, Spotify e VS Code no Windows",
      "metaDescription": "O cache do Discord, Teams, Spotify e VS Code pode chegar a vários gigabytes. Veja onde ele fica, o que muda ao limpá-lo e como fazer com segurança.",
      "subtitle": "Libere gigabytes dos caches de chat, música e editor sem perder sua conta nem suas configurações",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify e VS Code armazenam arquivos de cache que o próprio aplicativo recria; limpá-los libera espaço, não desconecta você e não remove suas configurações.",
        "Feche o aplicativo por completo antes de limpar o cache dele, porque arquivos em uso não podem ser excluídos e o aplicativo pode recriá-los na hora.",
        "O Spotify guarda o cache e os downloads offline em pastas relacionadas, então, depois de limpar, talvez você precise baixar as músicas offline novamente."
      ],
      "dataTable": {
        "caption": "Onde cada aplicativo guarda o cache no Windows",
        "columns": [
          "Aplicativo",
          "Pastas de cache",
          "O que acontece depois de limpar"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache e GPUCache",
            "Imagens e arquivos são recarregados no primeiro uso; você continua conectado"
          ],
          [
            "Microsoft Teams (clássico)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache e GPUCache",
            "O Teams recria o cache e pode iniciar mais devagar uma vez"
          ],
          [
            "Microsoft Teams (novo)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "O cache é recriado; conversas e arquivos continuam na sua conta"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data e Browser\\Cache",
            "As músicas em streaming voltam a ser armazenadas em cache; os downloads offline podem precisar ser baixados novamente"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache",
            "O editor recria seus caches; extensões e configurações não são afetadas"
          ]
        ]
      },
      "howTo": {
        "name": "Como limpar os caches dos aplicativos no Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Sair do aplicativo por completo",
            "text": "Feche a janela, clique com o botão direito no ícone do aplicativo na área de notificação e escolha Sair, ou encerre o processo no Gerenciador de Tarefas. Uma janela fechada ainda pode estar em execução em segundo plano."
          },
          {
            "name": "Abrir a pasta de cache",
            "text": "Pressione a tecla Windows + R, cole o caminho da pasta, por exemplo %APPDATA%\\discord, e pressione Enter. Abra as pastas Cache, Code Cache e GPUCache dentro dela."
          },
          {
            "name": "Excluir o conteúdo",
            "text": "Selecione tudo o que está dentro das pastas de cache e exclua. Não mexa nas outras pastas, porque elas podem guardar seu login e suas configurações."
          },
          {
            "name": "Iniciar o aplicativo novamente",
            "text": "Abra o aplicativo e use-o normalmente. A primeira inicialização pode ser um pouco mais lenta enquanto ele recria o cache, e sua conta e suas configurações continuam lá."
          },
          {
            "name": "Limpar todos de uma vez com o Disk Mop",
            "text": "Abra o Disk Mop, vá para Liberar espaço e execute a verificação. Marque Cache do Discord, Cache do Microsoft Teams, Cache do Spotify e Cache do VS Code, confira os tamanhos e confirme."
          }
        ]
      },
      "faq": [
        {
          "question": "Limpar o cache do Discord vai me desconectar?",
          "answer": "Não. As pastas Cache, Code Cache e GPUCache guardam apenas imagens, scripts e código compilado baixados. Seu login e suas configurações ficam em outro lugar, então você continua conectado. As imagens de conversas antigas podem carregar um pouco mais devagar na primeira vez que você as abrir."
        },
        {
          "question": "Por que o cache do Microsoft Teams é tão grande?",
          "answer": "O Teams guarda cópias de imagens, arquivos, miniaturas e conteúdo da web das suas conversas e reuniões para exibi-los rapidamente. Em uma conta muito usada, esses arquivos chegam a gigabytes e permanecem até que você os limpe."
        },
        {
          "question": "Vou perder minhas músicas offline se limpar o cache do Spotify?",
          "answer": "Possivelmente. O Spotify guarda as músicas em streaming e as baixadas em pastas de armazenamento relacionadas, então limpar esse armazenamento pode remover os downloads offline. Suas playlists e sua biblioteca ficam na sua conta e não são afetadas, e você pode baixar as músicas novamente."
        },
        {
          "question": "É seguro excluir o cache do VS Code?",
          "answer": "Sim. Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache são recriados pelo editor. Suas configurações, extensões e espaços de trabalho ficam em outras pastas e não são afetados."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify e VS Code são todos construídos com tecnologia web, e cada um guarda no seu disco um cache de imagens, scripts e arquivos baixados. Você pode limpar esses caches com segurança: saia do aplicativo, exclua o conteúdo das pastas de cache e inicie-o novamente. O aplicativo recria o que precisa, você continua conectado e o espaço volta, muitas vezes vários gigabytes por aplicativo em um PC usado todos os dias.",
        "Este guia lista as pastas exatas de cada aplicativo, explica o que cada cache guarda e o que muda depois de limpá-lo, e mostra como limpar os quatro de uma vez. Ele também cobre o único caso que exige um aviso: as músicas offline do Spotify."
      ],
      "sections": [
        {
          "title": "Por que esses aplicativos enchem o seu disco",
          "content": [
            "Aplicativos de chat, vídeo e música guardam uma cópia local de tudo o que mostraram a você. O Discord armazena imagens e anexos dos servidores que você lê. O Teams guarda miniaturas, arquivos e conteúdo da web de conversas e reuniões. O Spotify salva as músicas que você ouviu em streaming para que iniciem mais rápido, e o VS Code coloca em cache código compilado, pacotes de extensões e dados gráficos.",
            "Nenhum desses caches é reduzido de forma agressiva. Os aplicativos o deixam crescer até atingir um limite ou, em alguns casos, sem um limite claro. Depois de um ano de uso diário, é comum encontrar vários gigabytes em um único aplicativo, espalhados por pastas fáceis de passar despercebidas no AppData.",
            "Como o cache é apenas uma conveniência, o aplicativo sempre pode baixá-lo ou recriá-lo. Por isso limpá-lo é de baixo risco, desde que você faça isso com o aplicativo fechado."
          ]
        },
        {
          "title": "Discord e Microsoft Teams",
          "content": [
            "O Discord guarda o cache em %APPDATA%\\discord. As pastas que importam são Cache, Code Cache e GPUCache. Limpá-las remove imagens, scripts e dados gráficos baixados. Você continua conectado e, na primeira vez que abrir um canal antigo, as imagens dele são carregadas novamente.",
            "O Teams tem duas versões. O Teams clássico guarda o cache em %APPDATA%\\Microsoft\\Teams, nas pastas Cache, Code Cache e GPUCache. O novo Teams armazena seus dados em %LOCALAPPDATA%\\Packages, em uma pasta cujo nome começa com MSTeams_, em uma subpasta chamada LocalCache. Conversas, arquivos e reuniões permanecem na sua conta do Microsoft 365, então apenas as cópias locais são removidas.",
            "Saia primeiro do Teams pelo ícone na área de notificação; se você apenas fechar a janela, ele continua em execução e recria arquivos enquanto você os exclui."
          ]
        },
        {
          "title": "Spotify: cache e downloads offline",
          "content": [
            "O Spotify guarda seus dados em %LOCALAPPDATA%\\Spotify. A pasta Storage contém as músicas em cache, Data contém dados adicionais em cache e Browser\\Cache contém o cache da visualização da web. As músicas que você ouviu em streaming ficam em cache para iniciar sem atraso.",
            "As playlists baixadas para ouvir offline ficam na mesma área de armazenamento, então limpá-la pode removê-las. Suas playlists, sua biblioteca e sua conta não são afetadas, porque ficam armazenadas online, mas você precisará baixar as músicas offline novamente. Se você depende da audição offline, confira antes o local de download nas configurações do Spotify.",
            "Se você só quer reduzir o cache, veja primeiro a seção Armazenamento nas próprias configurações do Spotify, onde o aplicativo gerencia o cache e o local do armazenamento offline."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "O VS Code guarda vários caches em %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache e GPUCache. CachedData contém código compilado, CachedExtensionVSIXs contém pacotes de extensões baixados para instalação e os demais contêm dados da web e gráficos.",
            "Excluí-los não remove extensões, configurações, atalhos de teclado nem seus espaços de trabalho; eles ficam em outras pastas, como User e extensions. Depois de limpar o cache, o editor inicia um pouco mais devagar uma vez e então volta a ficar como antes.",
            "Feche todas as janelas do VS Code antes de excluir qualquer coisa, inclusive as que estiverem escondidas em outra área de trabalho virtual."
          ]
        },
        {
          "title": "Limpe os quatro de uma vez com o Disk Mop",
          "content": [
            "Fazer isso manualmente significa visitar uma dúzia de pastas. A página Liberar espaço do Disk Mop lista Cache do Discord, Cache do Microsoft Teams, Cache do Spotify e Cache do VS Code como itens separados, cada um com seu tamanho e uma nota informando que o aplicativo recria os dados e que sua conta e suas configurações permanecem.",
            "Execute a verificação, marque os aplicativos que quiser e confirme. O Disk Mop mostra o que encontrou antes de excluir qualquer coisa. A verificação é gratuita, então você pode ver primeiro quanto cada aplicativo usa. Feche os aplicativos antes de começar; arquivos em uso são ignorados.",
            "Esses caches voltam a crescer com o tempo. A ferramenta de limpeza agendada pode repetir em segundo plano os itens seguros de Liberar espaço para que não se acumulem de novo."
          ]
        }
      ],
      "verdict": [
        "Os caches do Discord, Microsoft Teams, Spotify e VS Code são dados temporários que os aplicativos recriam, então limpá-los é seguro desde que o aplicativo esteja totalmente fechado. Você mantém sua conta e suas configurações; o único efeito a esperar é uma primeira inicialização um pouco mais lenta e, no Spotify, baixar novamente as músicas offline.",
        "O Disk Mop encontra os quatro caches em uma única verificação, mostra o tamanho de cada um e pergunta antes de excluir qualquer coisa. A verificação é gratuita, então você pode ver para onde foi o seu espaço antes de decidir."
      ],
      "ctaText": "Limpe os caches do Discord, Teams, Spotify e VS Code com o Disk Mop"
    },
    "ja": {
      "title": "WindowsでDiscord・Teams・Spotify・VS Codeのキャッシュを削除する方法",
      "metaDescription": "Discord・Microsoft Teams・Spotify・VS Codeのキャッシュは数GBに達することもあります。保存場所、削除した場合の影響、安全にクリアする手順を解説します。",
      "subtitle": "アカウントや設定を失わずに、チャット・音楽・エディターのキャッシュから数GBの空き容量を確保",
      "keyTakeaways": [
        "Discord、Microsoft Teams、Spotify、VS Codeは、アプリ自身が再作成できるキャッシュファイルを保存しています。削除しても空き容量が増えるだけで、サインアウトされたり設定が消えたりすることはありません。",
        "キャッシュを削除する前に、アプリを完全に終了してください。使用中のファイルは削除できず、アプリがすぐに再作成してしまうことがあります。",
        "Spotifyはキャッシュとオフライン ダウンロードを関連するフォルダーに保存しているため、削除後はオフライン用の曲を再度ダウンロードする必要がある場合があります。"
      ],
      "dataTable": {
        "caption": "Windowsで各アプリがキャッシュを保存する場所",
        "columns": [
          "アプリ",
          "キャッシュ フォルダー",
          "削除後の動作"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache、Code Cache、GPUCache",
            "画像やファイルは初回の使用時に再読み込みされます。サインインしたままです"
          ],
          [
            "Microsoft Teams (クラシック)",
            "%APPDATA%\\Microsoft\\Teams\\Cache、Code Cache、GPUCache",
            "Teamsがキャッシュを再作成します。一度だけ起動が遅くなることがあります"
          ],
          [
            "Microsoft Teams (新)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "キャッシュは再作成されます。チャットやファイルはアカウントに残ります"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage、Data、Browser\\Cache",
            "ストリーミングした曲は再びキャッシュされます。オフライン ダウンロードは再ダウンロードが必要になる場合があります"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache、CachedData、CachedExtensionVSIXs、Code Cache、GPUCache",
            "エディターがキャッシュを再作成します。拡張機能と設定には影響しません"
          ]
        ]
      },
      "howTo": {
        "name": "Windowsでアプリのキャッシュを削除する方法",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "アプリを完全に終了する",
            "text": "ウィンドウを閉じたあと、タスクトレイ (通知領域) にあるアプリのアイコンを右クリックして [終了] を選ぶか、タスク マネージャーでプロセスを終了します。ウィンドウを閉じただけでは、バックグラウンドで動作し続けていることがあります。"
          },
          {
            "name": "キャッシュ フォルダーを開く",
            "text": "Windows キー + R を押し、%APPDATA%\\discord などのフォルダーのパスを貼り付けて Enter キーを押します。その中にある Cache、Code Cache、GPUCache の各フォルダーを開きます。"
          },
          {
            "name": "中身を削除する",
            "text": "キャッシュ フォルダー内のすべてを選択して削除します。サインイン情報や設定が入っていることがあるため、ほかのフォルダーには触れないでください。"
          },
          {
            "name": "アプリをもう一度起動する",
            "text": "アプリを開いて、いつもどおり使います。キャッシュを再作成する間、初回の起動は少し遅くなることがありますが、アカウントと設定はそのまま残っています。"
          },
          {
            "name": "Disk Mopですべてまとめて削除する",
            "text": "Disk Mopを開き、「空き容量を増やす」に移動してスキャンを実行します。「Discordのキャッシュ」「Microsoft Teamsのキャッシュ」「Spotifyのキャッシュ」「VS Codeのキャッシュ」にチェックを入れ、サイズを確認して実行を確定します。"
          }
        ]
      },
      "faq": [
        {
          "question": "Discordのキャッシュを削除するとログアウトされますか?",
          "answer": "いいえ。Cache、Code Cache、GPUCacheの各フォルダーには、ダウンロードされた画像、スクリプト、コンパイル済みコードしか入っていません。ログイン情報と設定は別の場所に保存されているため、サインインしたままです。古いチャットの画像は、初めて開くときに読み込みが少し遅くなることがあります。"
        },
        {
          "question": "Microsoft Teamsのキャッシュがこんなに大きいのはなぜですか?",
          "answer": "Teamsは、チャットや会議の画像、ファイル、サムネイル、Webコンテンツのコピーを保持し、すばやく表示できるようにしています。利用が多いアカウントではこれらのファイルが数GBに達し、削除するまで残り続けます。"
        },
        {
          "question": "Spotifyのキャッシュを削除すると、オフラインの曲は消えますか?",
          "answer": "消える可能性があります。Spotifyはストリーミングした曲とダウンロードした曲を関連するストレージ フォルダーに保存しているため、そのストレージを削除するとオフライン ダウンロードも削除されることがあります。プレイリストとライブラリはアカウントに保存されているため影響はなく、曲は再ダウンロードできます。"
        },
        {
          "question": "VS Codeのキャッシュを削除しても安全ですか?",
          "answer": "はい。Cache、CachedData、CachedExtensionVSIXs、Code Cache、GPUCacheは、エディターが再作成します。設定、拡張機能、ワークスペースは別のフォルダーに保存されており、影響を受けません。"
        }
      ],
      "intro": [
        "Discord、Microsoft Teams、Spotify、VS Codeはいずれも Web 技術で作られており、それぞれがドライブ上に画像、スクリプト、ダウンロードしたファイルのキャッシュを保存しています。これらのキャッシュは安全に削除できます。アプリを終了し、キャッシュ フォルダーの中身を削除して、アプリをもう一度起動するだけです。アプリは必要なものを再作成し、サインインしたまま、容量も戻ります。毎日使っているPCでは、アプリ1つあたり数GBになることも珍しくありません。",
        "このガイドでは、各アプリの正確なフォルダー、各キャッシュに入っているもの、削除後に何が変わるのかを説明し、4つをまとめて削除する方法を紹介します。また、唯一注意が必要なケースであるSpotifyのオフライン曲についても取り上げます。"
      ],
      "sections": [
        {
          "title": "これらのアプリがドライブを圧迫する理由",
          "content": [
            "チャット、ビデオ、音楽のアプリは、表示したものすべてのコピーをローカルに保持します。Discordは、読んだサーバーの画像や添付ファイルを保存します。Teamsは、チャットや会議のサムネイル、ファイル、Webコンテンツを保持します。Spotifyは、すばやく再生を始められるようにストリーミングした曲を保存し、VS Codeはコンパイル済みコード、拡張機能のパッケージ、グラフィックス データをキャッシュします。",
            "これらのキャッシュが積極的に整理されることはありません。アプリは上限に達するまで、場合によっては明確な上限なしにキャッシュを増やし続けます。毎日使って1年もたてば、1つのアプリで数GBになることも珍しくなく、AppData内の見落としやすいフォルダーに分散しています。",
            "キャッシュはあくまで利便性のためのものなので、アプリはいつでも再ダウンロードまたは再作成できます。そのため、アプリを閉じた状態で行うかぎり、削除のリスクは低いといえます。"
          ]
        },
        {
          "title": "DiscordとMicrosoft Teams",
          "content": [
            "Discordはキャッシュを %APPDATA%\\discord に保存します。対象となるのは Cache、Code Cache、GPUCache の各フォルダーです。これらを削除すると、ダウンロード済みの画像、スクリプト、グラフィックス データが消えます。サインインしたままで、古いチャンネルを初めて開くときに画像が再読み込みされます。",
            "Teamsには2つのバージョンがあります。クラシック版のTeamsは、キャッシュを %APPDATA%\\Microsoft\\Teams の Cache、Code Cache、GPUCache の各フォルダーに保存します。新しいTeamsは、%LOCALAPPDATA%\\Packages の下にある、名前が MSTeams_ で始まるフォルダー内の LocalCache というサブフォルダーにデータを保存します。チャット、ファイル、会議はMicrosoft 365アカウントに残るため、削除されるのはローカルのコピーだけです。",
            "まずタスクトレイのアイコンからTeamsを終了してください。ウィンドウを閉じただけだと、Teamsは動作し続け、削除している間にファイルを再作成してしまいます。"
          ]
        },
        {
          "title": "Spotify: キャッシュとオフライン ダウンロード",
          "content": [
            "Spotifyはデータを %LOCALAPPDATA%\\Spotify に保存します。Storage フォルダーにはキャッシュされた曲、Data には追加のキャッシュ データ、Browser\\Cache には Web ビューのキャッシュが入っています。ストリーミングした曲はキャッシュされ、遅れなく再生が始まります。",
            "オフライン再生用にダウンロードしたプレイリストは同じストレージ領域にあるため、そこを削除すると消えてしまうことがあります。プレイリスト、ライブラリ、アカウントはオンラインに保存されているため影響を受けませんが、オフライン用の曲は再ダウンロードが必要になります。オフライン再生を頼りにしている場合は、先にSpotifyの設定でダウンロード先を確認してください。",
            "キャッシュを小さくしたいだけなら、まずSpotify自身の設定にある「ストレージ」セクションを確認してください。キャッシュとオフライン ストレージの保存場所は、そこで管理されています。"
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Codeは、%APPDATA%\\Code に複数のキャッシュを保存します。Cache、CachedData、CachedExtensionVSIXs、Code Cache、GPUCache です。CachedData にはコンパイル済みコード、CachedExtensionVSIXs にはインストール用にダウンロードされた拡張機能のパッケージ、そのほかには Web とグラフィックスのデータが入っています。",
            "これらを削除しても、拡張機能、設定、キーボード ショートカット、ワークスペースは削除されません。それらは User や extensions など別のフォルダーに保存されています。キャッシュを削除すると、エディターの起動は一度だけ少し遅くなり、その後は元どおりになります。",
            "何かを削除する前に、別の仮想デスクトップに隠れているウィンドウも含め、すべてのVS Codeのウィンドウを閉じてください。"
          ]
        },
        {
          "title": "Disk Mopで4つをまとめて削除する",
          "content": [
            "手作業では、十数個のフォルダーを順に開くことになります。Disk Mopの「空き容量を増やす」ページでは、「Discordのキャッシュ」「Microsoft Teamsのキャッシュ」「Spotifyのキャッシュ」「VS Codeのキャッシュ」が個別の項目として表示され、それぞれにサイズと、アプリがデータを再作成するのでアカウントと設定は残るという説明が付いています。",
            "スキャンを実行し、対象のアプリにチェックを入れて確定します。Disk Mopは、何かを削除する前に見つかった内容を表示します。スキャンは無料なので、先に各アプリの使用量を確認できます。開始する前にアプリを終了してください。使用中のファイルはスキップされます。",
            "これらのキャッシュは時間とともに再び増えます。スケジュール クリーンアップ ツールを使うと、「空き容量を増やす」の安全な項目をバックグラウンドで繰り返し実行でき、キャッシュが溜まるのを防げます。"
          ]
        }
      ],
      "verdict": [
        "Discord、Microsoft Teams、Spotify、VS Codeのキャッシュはアプリが再作成する一時データなので、アプリを完全に閉じてさえいれば、削除しても安全です。アカウントと設定は残ります。想定される影響は、初回の起動が少し遅くなることと、Spotifyでオフライン曲を再ダウンロードする必要が出ることだけです。",
        "Disk Mopは1回のスキャンで4つのキャッシュをすべて見つけ、それぞれのサイズを表示し、削除する前に確認を求めます。スキャンは無料なので、判断する前に容量の行き先を確認できます。"
      ],
      "ctaText": "Disk MopでDiscord・Teams・Spotify・VS Codeのキャッシュを削除"
    },
    "ko": {
      "title": "Windows에서 Discord, Teams, Spotify, VS Code 캐시 삭제하는 방법",
      "metaDescription": "Discord, Microsoft Teams, Spotify, VS Code의 캐시는 수 GB까지 커질 수 있습니다. 캐시 위치와 삭제 시 영향, 안전하게 지우는 방법을 알려 드립니다.",
      "subtitle": "계정과 설정은 그대로 두고 채팅, 음악, 편집기 캐시에서 수 GB 확보하기",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify, VS Code는 앱이 스스로 다시 만드는 캐시 파일을 저장합니다. 캐시를 삭제하면 공간이 확보되며, 로그아웃되거나 설정이 지워지지 않습니다.",
        "캐시를 삭제하기 전에 앱을 완전히 종료하세요. 사용 중인 파일은 삭제할 수 없고, 앱이 곧바로 다시 만들 수도 있습니다.",
        "Spotify는 캐시와 오프라인 다운로드를 서로 관련된 폴더에 저장하므로, 캐시를 지운 뒤에는 오프라인 곡을 다시 다운로드해야 할 수 있습니다."
      ],
      "dataTable": {
        "caption": "Windows에서 각 앱이 캐시를 저장하는 위치",
        "columns": [
          "앱",
          "캐시 폴더",
          "삭제 후 동작"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache, GPUCache",
            "이미지와 파일은 처음 사용할 때 다시 불러오며, 로그인 상태는 유지됩니다"
          ],
          [
            "Microsoft Teams (클래식)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache, GPUCache",
            "Teams가 캐시를 다시 만들며, 한 번은 시작이 느려질 수 있습니다"
          ],
          [
            "Microsoft Teams (새 버전)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "캐시가 다시 만들어지며, 채팅과 파일은 계정에 그대로 남습니다"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data, Browser\\Cache",
            "스트리밍한 곡이 다시 캐시되며, 오프라인 다운로드는 다시 받아야 할 수 있습니다"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache, GPUCache",
            "편집기가 캐시를 다시 만들며, 확장 프로그램과 설정은 그대로입니다"
          ]
        ]
      },
      "howTo": {
        "name": "Windows에서 앱 캐시를 삭제하는 방법",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "앱을 완전히 종료하기",
            "text": "창을 닫은 다음, 알림 영역(시스템 트레이)의 앱 아이콘을 마우스 오른쪽 버튼으로 클릭하고 종료를 선택하거나, 작업 관리자에서 프로세스를 끝내세요. 창을 닫아도 백그라운드에서 계속 실행 중일 수 있습니다."
          },
          {
            "name": "캐시 폴더 열기",
            "text": "Windows 키 + R을 누르고 폴더 경로(예: %APPDATA%\\discord)를 붙여넣은 뒤 Enter 키를 누르세요. 그 안에 있는 Cache, Code Cache, GPUCache 폴더를 엽니다."
          },
          {
            "name": "내용 삭제하기",
            "text": "캐시 폴더 안의 모든 항목을 선택해 삭제하세요. 다른 폴더에는 로그인 정보와 설정이 들어 있을 수 있으니 건드리지 마세요."
          },
          {
            "name": "앱 다시 시작하기",
            "text": "앱을 열어 평소처럼 사용하세요. 캐시를 다시 만드는 동안 처음 시작할 때는 조금 느릴 수 있으며, 계정과 설정은 그대로 남아 있습니다."
          },
          {
            "name": "Disk Mop으로 한 번에 모두 삭제하기",
            "text": "Disk Mop을 열고 공간 확보로 이동해 검사를 실행하세요. Discord 캐시, Microsoft Teams 캐시, Spotify 캐시, VS Code 캐시를 선택하고 크기를 확인한 뒤 확정합니다."
          }
        ]
      },
      "faq": [
        {
          "question": "Discord 캐시를 지우면 로그아웃되나요?",
          "answer": "아니요. Cache, Code Cache, GPUCache 폴더에는 다운로드된 이미지, 스크립트, 컴파일된 코드만 들어 있습니다. 로그인 정보와 설정은 다른 곳에 저장되므로 로그인 상태가 유지됩니다. 오래된 채팅의 이미지는 처음 열 때 불러오는 데 조금 더 걸릴 수 있습니다."
        },
        {
          "question": "Microsoft Teams 캐시가 왜 이렇게 큰가요?",
          "answer": "Teams는 채팅과 회의의 이미지, 파일, 축소판, 웹 콘텐츠 사본을 보관해 빠르게 보여 줍니다. 사용량이 많은 계정에서는 이 파일들이 수 GB까지 쌓이며, 직접 지우기 전까지 남아 있습니다."
        },
        {
          "question": "Spotify 캐시를 지우면 오프라인 곡을 잃게 되나요?",
          "answer": "그럴 수 있습니다. Spotify는 스트리밍한 곡과 다운로드한 곡을 서로 관련된 저장소 폴더에 보관하므로, 해당 저장소를 지우면 오프라인 다운로드가 삭제될 수 있습니다. 재생 목록과 보관함은 계정에 저장되어 있어 영향을 받지 않으며, 곡은 다시 다운로드할 수 있습니다."
        },
        {
          "question": "VS Code 캐시를 삭제해도 안전한가요?",
          "answer": "네. Cache, CachedData, CachedExtensionVSIXs, Code Cache, GPUCache는 편집기가 다시 만듭니다. 설정, 확장 프로그램, 작업 영역은 다른 폴더에 저장되어 있어 영향을 받지 않습니다."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify, VS Code는 모두 웹 기술을 기반으로 만들어졌으며, 각각 드라이브에 이미지, 스크립트, 다운로드한 파일의 캐시를 보관합니다. 이 캐시는 안전하게 지울 수 있습니다. 앱을 종료하고 캐시 폴더의 내용을 삭제한 뒤 앱을 다시 시작하면 됩니다. 앱이 필요한 것을 다시 만들고, 로그인 상태는 유지되며, 공간이 돌아옵니다. 매일 쓰는 PC라면 앱 하나당 수 GB인 경우도 많습니다.",
        "이 가이드는 앱별 정확한 폴더를 안내하고, 각 캐시에 무엇이 들어 있으며 지운 뒤에 무엇이 달라지는지 설명하고, 네 가지를 한 번에 지우는 방법을 보여 드립니다. 경고가 필요한 단 하나의 경우인 Spotify 오프라인 곡도 다룹니다."
      ],
      "sections": [
        {
          "title": "이 앱들이 드라이브를 가득 채우는 이유",
          "content": [
            "채팅, 영상, 음악 앱은 사용자에게 보여 준 모든 것의 사본을 로컬에 보관합니다. Discord는 읽은 서버의 이미지와 첨부 파일을 저장합니다. Teams는 채팅과 회의의 축소판, 파일, 웹 콘텐츠를 보관합니다. Spotify는 스트리밍한 곡을 저장해 더 빠르게 재생을 시작하고, VS Code는 컴파일된 코드, 확장 프로그램 패키지, 그래픽 데이터를 캐시합니다.",
            "이런 캐시는 공격적으로 정리되지 않습니다. 앱은 한도에 이를 때까지, 경우에 따라서는 뚜렷한 한도 없이 캐시를 계속 키웁니다. 매일 사용하며 1년이 지나면 앱 하나에서 수 GB가 나오는 일도 흔하며, 그 용량은 AppData 안에서 놓치기 쉬운 폴더들에 흩어져 있습니다.",
            "캐시는 편의를 위한 것일 뿐이므로 앱은 언제든 다시 다운로드하거나 만들 수 있습니다. 그래서 앱을 닫은 상태에서 지우기만 한다면 위험이 낮습니다."
          ]
        },
        {
          "title": "Discord와 Microsoft Teams",
          "content": [
            "Discord는 캐시를 %APPDATA%\\discord에 보관합니다. 중요한 폴더는 Cache, Code Cache, GPUCache입니다. 이 폴더를 비우면 다운로드된 이미지, 스크립트, 그래픽 데이터가 삭제됩니다. 로그인 상태는 유지되며, 오래된 채널을 처음 열면 그 이미지가 다시 불러와집니다.",
            "Teams에는 두 가지 버전이 있습니다. 클래식 Teams는 캐시를 %APPDATA%\\Microsoft\\Teams의 Cache, Code Cache, GPUCache 폴더에 보관합니다. 새 Teams는 %LOCALAPPDATA%\\Packages 아래에서 이름이 MSTeams_로 시작하는 폴더의 LocalCache라는 하위 폴더에 데이터를 저장합니다. 채팅, 파일, 회의는 Microsoft 365 계정에 남으므로 로컬 사본만 삭제됩니다.",
            "먼저 트레이 아이콘에서 Teams를 종료하세요. 창만 닫으면 앱이 계속 실행되어 삭제하는 동안에도 파일을 다시 만듭니다."
          ]
        },
        {
          "title": "Spotify: 캐시와 오프라인 다운로드",
          "content": [
            "Spotify는 데이터를 %LOCALAPPDATA%\\Spotify에 보관합니다. Storage 폴더에는 캐시된 곡이, Data에는 추가 캐시 데이터가, Browser\\Cache에는 웹 보기 캐시가 들어 있습니다. 스트리밍한 곡은 지연 없이 시작되도록 캐시됩니다.",
            "오프라인 감상용으로 다운로드한 재생 목록은 같은 저장 영역에 있으므로, 이 영역을 지우면 함께 삭제될 수 있습니다. 재생 목록, 보관함, 계정은 온라인에 저장되어 있어 영향을 받지 않지만, 오프라인 곡은 다시 다운로드해야 합니다. 오프라인 감상에 의존한다면 먼저 Spotify 설정에서 다운로드 위치를 확인하세요.",
            "캐시 크기만 줄이고 싶다면 먼저 Spotify 자체 설정의 저장소 섹션을 살펴보세요. 그곳에서 캐시와 오프라인 저장 위치를 관리합니다."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code는 %APPDATA%\\Code에 여러 캐시를 보관합니다. Cache, CachedData, CachedExtensionVSIXs, Code Cache, GPUCache입니다. CachedData에는 컴파일된 코드가, CachedExtensionVSIXs에는 설치용으로 다운로드된 확장 프로그램 패키지가, 나머지에는 웹과 그래픽 데이터가 들어 있습니다.",
            "이 폴더들을 삭제해도 확장 프로그램, 설정, 키 바인딩, 작업 영역은 삭제되지 않습니다. 그것들은 User, extensions 같은 다른 폴더에 있습니다. 캐시를 지운 뒤 편집기는 한 번 조금 느리게 시작하고, 그 후에는 이전과 같아집니다.",
            "무엇이든 삭제하기 전에, 다른 가상 데스크톱에 숨어 있는 창까지 포함해 모든 VS Code 창을 닫으세요."
          ]
        },
        {
          "title": "Disk Mop으로 네 가지를 한 번에 지우기",
          "content": [
            "직접 하려면 십여 개의 폴더를 돌아다녀야 합니다. Disk Mop의 공간 확보 페이지에는 Discord 캐시, Microsoft Teams 캐시, Spotify 캐시, VS Code 캐시가 각각 별도 항목으로 표시되며, 항목마다 크기와 함께 앱이 데이터를 다시 만들고 계정과 설정은 그대로 남는다는 안내가 붙어 있습니다.",
            "검사를 실행하고 원하는 앱을 선택한 뒤 확정하세요. Disk Mop은 무언가를 삭제하기 전에 찾은 내용을 보여 줍니다. 검사는 무료이므로 각 앱이 얼마나 쓰는지 먼저 확인할 수 있습니다. 시작하기 전에 앱을 종료하세요. 사용 중인 파일은 건너뜁니다.",
            "이 캐시는 시간이 지나면 다시 커집니다. 예약 정리 도구를 쓰면 공간 확보의 안전한 항목을 백그라운드에서 반복 실행할 수 있어, 캐시가 다시 쌓이지 않습니다."
          ]
        }
      ],
      "verdict": [
        "Discord, Microsoft Teams, Spotify, VS Code의 캐시는 앱이 다시 만드는 임시 데이터이므로, 앱이 완전히 닫혀 있다면 안전하게 지울 수 있습니다. 계정과 설정은 그대로이며, 처음 시작이 조금 느려지는 것과 Spotify에서 오프라인 곡을 다시 다운로드해야 할 수 있다는 점만 감안하면 됩니다.",
        "Disk Mop은 한 번의 검사로 네 가지 캐시를 모두 찾아 각각의 크기를 보여 주고, 삭제하기 전에 확인을 요청합니다. 검사는 무료이므로 결정하기 전에 공간이 어디에 쓰였는지 확인할 수 있습니다."
      ],
      "ctaText": "Disk Mop으로 Discord, Teams, Spotify, VS Code 캐시 삭제"
    },
    "zh-Hans": {
      "title": "如何在 Windows 上清除 Discord、Teams、Spotify 和 VS Code 缓存",
      "metaDescription": "Discord、Microsoft Teams、Spotify 和 VS Code 的缓存可能占用数 GB 空间。了解缓存位置、清除后的影响，以及如何安全地清除。",
      "subtitle": "无需丢失账户和设置，即可从聊天、音乐和编辑器缓存中释放数 GB 空间",
      "keyTakeaways": [
        "Discord、Microsoft Teams、Spotify 和 VS Code 会存储应用自己可以重建的缓存文件；清除它们能释放空间，不会让你退出登录，也不会删除设置。",
        "清除缓存前请先完全退出应用，因为正在使用的文件无法删除，应用还可能立即重新创建它们。",
        "Spotify 将缓存和离线下载保存在相关联的文件夹中，因此清除后可能需要重新下载离线歌曲。"
      ],
      "dataTable": {
        "caption": "各应用在 Windows 上保存缓存的位置",
        "columns": [
          "应用",
          "缓存文件夹",
          "清除后会发生什么"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache、Code Cache 和 GPUCache",
            "图片和文件会在首次使用时重新加载；你仍保持登录状态"
          ],
          [
            "Microsoft Teams（经典版）",
            "%APPDATA%\\Microsoft\\Teams\\Cache、Code Cache 和 GPUCache",
            "Teams 会重建缓存，可能有一次启动较慢"
          ],
          [
            "Microsoft Teams（新版）",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "缓存会被重建；聊天和文件仍保留在你的账户中"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage、Data 和 Browser\\Cache",
            "流式播放的歌曲会重新缓存；离线下载可能需要重新下载"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache、CachedData、CachedExtensionVSIXs、Code Cache 和 GPUCache",
            "编辑器会重建其缓存；扩展和设置不受影响"
          ]
        ]
      },
      "howTo": {
        "name": "如何在 Windows 上清除应用缓存",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "完全退出应用",
            "text": "关闭窗口，然后右键单击系统托盘中的应用图标并选择“退出”，或在任务管理器中结束该进程。关闭窗口后，应用仍可能在后台运行。"
          },
          {
            "name": "打开缓存文件夹",
            "text": "按 Windows 键 + R，粘贴文件夹路径，例如 %APPDATA%\\discord，然后按 Enter。打开其中的 Cache、Code Cache 和 GPUCache 文件夹。"
          },
          {
            "name": "删除内容",
            "text": "选中缓存文件夹中的所有内容并删除。请不要动其他文件夹，因为它们可能保存着你的登录信息和设置。"
          },
          {
            "name": "重新启动应用",
            "text": "打开应用并正常使用。在重建缓存期间，首次启动可能会稍慢一些，你的账户和设置依然都在。"
          },
          {
            "name": "使用 Disk Mop 一次清除全部",
            "text": "打开 Disk Mop，进入“释放空间”并运行扫描。勾选“Discord 缓存”“Microsoft Teams 缓存”“Spotify 缓存”和“VS Code 缓存”，核对大小后确认。"
          }
        ]
      },
      "faq": [
        {
          "question": "清除 Discord 缓存会让我退出登录吗？",
          "answer": "不会。Cache、Code Cache 和 GPUCache 文件夹只保存下载的图片、脚本和已编译的代码。你的登录信息和设置存储在别处，因此仍保持登录状态。旧聊天中的图片在首次打开时可能加载得稍慢一些。"
        },
        {
          "question": "为什么 Microsoft Teams 缓存这么大？",
          "answer": "Teams 会保留聊天和会议中的图片、文件、缩略图和网页内容的副本，以便快速显示。在使用频繁的账户上，这些文件会累积到数 GB，并且在你清除之前一直存在。"
        },
        {
          "question": "清除 Spotify 缓存会丢失我的离线歌曲吗？",
          "answer": "有可能。Spotify 将流式播放的歌曲和已下载的歌曲保存在相关联的存储文件夹中，因此清除该存储可能会删除离线下载。你的播放列表和音乐库保存在账户中，不受影响，歌曲可以重新下载。"
        },
        {
          "question": "删除 VS Code 缓存安全吗？",
          "answer": "安全。Cache、CachedData、CachedExtensionVSIXs、Code Cache 和 GPUCache 都会由编辑器重建。你的设置、扩展和工作区保存在其他文件夹中，不会受到影响。"
        }
      ],
      "intro": [
        "Discord、Microsoft Teams、Spotify 和 VS Code 都基于 Web 技术构建，并且各自会在你的驱动器上保存由图片、脚本和下载文件组成的缓存。你可以放心地清除这些缓存：退出应用，删除其缓存文件夹中的内容，然后重新启动应用。应用会重建所需内容，你仍保持登录状态，空间也随之释放；在每天使用的电脑上，每个应用往往能释放数 GB。",
        "本指南列出了每个应用的确切文件夹，说明每种缓存包含什么、清除后会有什么变化，并演示如何一次清除这四种缓存。其中还会介绍唯一需要提醒的情况：Spotify 的离线歌曲。"
      ],
      "sections": [
        {
          "title": "这些应用为何会占满你的驱动器",
          "content": [
            "聊天、视频和音乐应用会在本地保留它们向你展示过的所有内容的副本。Discord 会存储你浏览过的服务器中的图片和附件。Teams 会保留聊天和会议中的缩略图、文件和网页内容。Spotify 会保存流式播放过的歌曲，以便更快开始播放；VS Code 则会缓存已编译的代码、扩展包和图形数据。",
            "这些缓存都不会被积极地精简。应用会让缓存不断增长，直到达到某个上限，有时甚至没有明确的上限。每天使用一年之后，单个应用就出现数 GB 的缓存是很常见的，而且它们分散在 AppData 中容易被忽略的文件夹里。",
            "由于缓存只是为了方便，应用随时都可以重新下载或重建它。因此只要在应用关闭的情况下清除，风险就很低。"
          ]
        },
        {
          "title": "Discord 和 Microsoft Teams",
          "content": [
            "Discord 将缓存保存在 %APPDATA%\\discord 中。需要关注的文件夹是 Cache、Code Cache 和 GPUCache。清除它们会删除已下载的图片、脚本和图形数据。你仍保持登录状态，首次打开旧频道时，其中的图片会重新加载。",
            "Teams 有两个版本。经典版 Teams 将缓存保存在 %APPDATA%\\Microsoft\\Teams 的 Cache、Code Cache 和 GPUCache 文件夹中。新版 Teams 将数据存储在 %LOCALAPPDATA%\\Packages 下名称以 MSTeams_ 开头的文件夹中，位于名为 LocalCache 的子文件夹里。聊天、文件和会议保留在你的 Microsoft 365 账户中，因此只会删除本地副本。",
            "请先从托盘图标退出 Teams；如果只是关闭窗口，它会继续运行，并在你删除文件的同时重新创建这些文件。"
          ]
        },
        {
          "title": "Spotify：缓存和离线下载",
          "content": [
            "Spotify 将数据保存在 %LOCALAPPDATA%\\Spotify 中。Storage 文件夹保存已缓存的歌曲，Data 保存其他缓存数据，Browser\\Cache 保存网页视图缓存。流式播放过的歌曲会被缓存，以便无延迟地开始播放。",
            "为离线收听而下载的播放列表位于同一存储区域，因此清除该区域可能会将其一并删除。你的播放列表、音乐库和账户不受影响，因为它们存储在线上，但你需要重新下载离线歌曲。如果你依赖离线收听，请先在 Spotify 设置中查看下载位置。",
            "如果你只想缩小缓存，请先查看 Spotify 自身设置中的“存储”部分，那里管理着缓存和离线存储位置。"
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code 在 %APPDATA%\\Code 中保存多个缓存：Cache、CachedData、CachedExtensionVSIXs、Code Cache 和 GPUCache。CachedData 保存已编译的代码，CachedExtensionVSIXs 保存为安装而下载的扩展包，其余的保存网页和图形数据。",
            "删除它们不会移除扩展、设置、键绑定或你的工作区；这些内容位于 User 和 extensions 等其他文件夹中。清除缓存后，编辑器会有一次启动稍慢，之后就和以前一样了。",
            "在删除任何内容之前，请关闭所有 VS Code 窗口，包括藏在其他虚拟桌面中的窗口。"
          ]
        },
        {
          "title": "使用 Disk Mop 一次清除全部四种缓存",
          "content": [
            "手动操作需要逐个访问十几个文件夹。Disk Mop 的“释放空间”页面将“Discord 缓存”“Microsoft Teams 缓存”“Spotify 缓存”和“VS Code 缓存”列为独立项目，每项都显示大小，并注明应用会重建数据、你的账户和设置会保留。",
            "运行扫描，勾选你想清除的应用并确认。Disk Mop 会在删除任何内容之前显示它找到的项目。扫描是免费的，因此你可以先看看每个应用占用了多少空间。开始前请先退出这些应用；正在使用的文件会被跳过。",
            "这些缓存会随时间重新增长。计划清理工具可以在后台重复执行“释放空间”中的安全项目，让缓存不再堆积。"
          ]
        }
      ],
      "verdict": [
        "Discord、Microsoft Teams、Spotify 和 VS Code 的缓存都是应用会重建的临时数据，因此只要应用已完全关闭，清除它们就是安全的。你会保留账户和设置；唯一需要预期的是首次启动稍慢，以及在 Spotify 中重新下载离线歌曲。",
        "Disk Mop 一次扫描就能找到这四种缓存，显示每一种的大小，并在删除任何内容之前先征求确认。扫描是免费的，因此你可以先看看空间去了哪里，再做决定。"
      ],
      "ctaText": "使用 Disk Mop 清除 Discord、Teams、Spotify 和 VS Code 缓存"
    },
    "ar": {
      "title": "كيفية مسح ذاكرة Discord وTeams وSpotify وVS Code المؤقتة على Windows",
      "metaDescription": "يحتفظ كل من Discord وMicrosoft Teams وSpotify وVS Code بذاكرة مؤقتة قد تبلغ عدة غيغابايت. تعرّف على مكانها وما يحدث عند مسحها وكيف تمسحها بأمان.",
      "subtitle": "استعد غيغابايت من مساحة التخزين من ذاكرة تطبيقات الدردشة والموسيقى والمحرر المؤقتة دون فقدان حسابك أو إعداداتك",
      "keyTakeaways": [
        "يخزّن Discord وMicrosoft Teams وSpotify وVS Code ملفات ذاكرة مؤقتة يعيد التطبيق إنشاءها بنفسه؛ مسحها يحرر مساحة ولا يسجّل خروجك ولا يحذف إعداداتك.",
        "أغلق التطبيق تمامًا قبل مسح ذاكرته المؤقتة، لأن الملفات المستخدمة لا يمكن حذفها وقد يعيد التطبيق إنشاءها فورًا.",
        "يحتفظ Spotify بالذاكرة المؤقتة وتنزيلات وضع عدم الاتصال في مجلدات مترابطة، لذا توقّع بعد المسح أن تحتاج إلى تنزيل الأغاني غير المتصلة مرة أخرى."
      ],
      "dataTable": {
        "caption": "أين يحتفظ كل تطبيق بذاكرته المؤقتة على Windows",
        "columns": [
          "التطبيق",
          "مجلدات الذاكرة المؤقتة",
          "ما يحدث بعد المسح"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache وCode Cache وGPUCache",
            "تُحمَّل الصور والملفات مجددًا عند أول استخدام؛ وتبقى مسجّلًا الدخول"
          ],
          [
            "Microsoft Teams (الكلاسيكي)",
            "%APPDATA%\\Microsoft\\Teams\\Cache وCode Cache وGPUCache",
            "يعيد Teams بناء الذاكرة المؤقتة وقد يبدأ ببطء أكبر مرة واحدة"
          ],
          [
            "Microsoft Teams (الجديد)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "يُعاد بناء الذاكرة المؤقتة؛ وتبقى المحادثات والملفات في حسابك"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage وData وBrowser\\Cache",
            "تُخزَّن الأغاني المبثوثة مؤقتًا من جديد؛ وقد تحتاج تنزيلات وضع عدم الاتصال إلى إعادة تنزيل"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache وCachedData وCachedExtensionVSIXs وCode Cache وGPUCache",
            "يعيد المحرر بناء ذاكراته المؤقتة؛ ولا تتأثر الإضافات والإعدادات"
          ]
        ]
      },
      "howTo": {
        "name": "كيفية مسح الذاكرة المؤقتة للتطبيقات على Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "أنهِ التطبيق تمامًا",
            "text": "أغلق النافذة، ثم انقر بزر الماوس الأيمن على أيقونة التطبيق في منطقة الإعلام واختر إنهاء (Quit)، أو أنهِ العملية من إدارة المهام. قد تبقى النافذة المغلقة قيد التشغيل في الخلفية."
          },
          {
            "name": "افتح مجلد الذاكرة المؤقتة",
            "text": "اضغط مفتاح Windows + R، والصق مسار المجلد، مثل %APPDATA%\\discord، ثم اضغط Enter. افتح المجلدات Cache وCode Cache وGPUCache بداخله."
          },
          {
            "name": "احذف المحتويات",
            "text": "حدّد كل ما بداخل مجلدات الذاكرة المؤقتة واحذفه. لا تعبث بالمجلدات الأخرى، فقد تحتوي على بيانات تسجيل الدخول والإعدادات."
          },
          {
            "name": "شغّل التطبيق مرة أخرى",
            "text": "افتح التطبيق واستخدمه كالمعتاد. قد يكون أول تشغيل أبطأ قليلًا أثناء إعادة بناء الذاكرة المؤقتة، وتبقى بيانات حسابك وإعداداتك كما هي."
          },
          {
            "name": "امسحها جميعًا دفعة واحدة باستخدام Disk Mop",
            "text": "افتح Disk Mop وانتقل إلى تحرير مساحة وشغّل الفحص. حدّد ذاكرة Discord المؤقتة وذاكرة Microsoft Teams المؤقتة وذاكرة Spotify المؤقتة وذاكرة VS Code المؤقتة، وراجع الأحجام ثم أكّد."
          }
        ]
      },
      "faq": [
        {
          "question": "هل يؤدي مسح الذاكرة المؤقتة لـ Discord إلى تسجيل خروجي؟",
          "answer": "لا. تحتوي المجلدات Cache وCode Cache وGPUCache على صور ونصوص برمجية وأكواد مجمّعة تم تنزيلها فقط. أما بيانات تسجيل الدخول والإعدادات فتُخزَّن في مكان آخر، لذا تبقى مسجّلًا الدخول. وقد تُحمَّل الصور في المحادثات القديمة أبطأ قليلًا عند فتحها أول مرة."
        },
        {
          "question": "لماذا الذاكرة المؤقتة لـ Microsoft Teams كبيرة إلى هذا الحد؟",
          "answer": "يحتفظ Teams بنسخ من الصور والملفات والصور المصغرة ومحتوى الويب من محادثاتك واجتماعاتك ليعرضها بسرعة. وفي الحسابات كثيرة النشاط تتراكم هذه الملفات لتبلغ غيغابايت وتبقى إلى أن تمسحها."
        },
        {
          "question": "هل أخسر الأغاني غير المتصلة إذا مسحت الذاكرة المؤقتة لـ Spotify؟",
          "answer": "ربما. يحتفظ Spotify بالأغاني المبثوثة والأغاني المنزَّلة في مجلدات تخزين مترابطة، لذا قد يؤدي مسح ذلك التخزين إلى إزالة التنزيلات المخصصة لوضع عدم الاتصال. قوائم التشغيل ومكتبتك موجودة في حسابك ولا تتأثر، ويمكنك تنزيل الأغاني مرة أخرى."
        },
        {
          "question": "هل حذف الذاكرة المؤقتة لـ VS Code آمن؟",
          "answer": "نعم. يعيد المحرر بناء Cache وCachedData وCachedExtensionVSIXs وCode Cache وGPUCache. أما إعداداتك وإضافاتك ومساحات العمل فتُحفظ في مجلدات أخرى ولا تتأثر."
        }
      ],
      "intro": [
        "تعتمد تطبيقات Discord وMicrosoft Teams وSpotify وVS Code جميعها على تقنيات الويب، ويحتفظ كل منها على محرك الأقراص بذاكرة مؤقتة من الصور والنصوص البرمجية والملفات المنزَّلة. يمكنك مسح هذه الذاكرة بأمان: أغلق التطبيق، واحذف محتويات مجلدات ذاكرته المؤقتة، ثم شغّله من جديد. يعيد التطبيق بناء ما يحتاجه، وتبقى مسجّلًا الدخول، وتعود المساحة إليك، وغالبًا ما تبلغ عدة غيغابايت لكل تطبيق على جهاز يُستخدم يوميًا.",
        "يسرد هذا الدليل المجلدات الدقيقة لكل تطبيق، ويشرح ما تحتويه كل ذاكرة مؤقتة وما الذي يتغير بعد مسحها، ويوضح كيفية مسح التطبيقات الأربعة دفعة واحدة. ويتناول أيضًا الحالة الوحيدة التي تستدعي التحذير: أغاني Spotify غير المتصلة."
      ],
      "sections": [
        {
          "title": "لماذا تملأ هذه التطبيقات محرك الأقراص لديك",
          "content": [
            "تحتفظ تطبيقات الدردشة والفيديو والموسيقى بنسخة محلية من كل ما عرضته عليك. يخزّن Discord الصور والمرفقات من الخوادم التي تقرؤها. ويحتفظ Teams بالصور المصغرة والملفات ومحتوى الويب من المحادثات والاجتماعات. ويحفظ Spotify الأغاني التي بثّها لتبدأ أسرع، بينما يخزّن VS Code مؤقتًا الأكواد المجمّعة وحزم الإضافات وبيانات الرسومات.",
            "لا تُقلَّص أي من هذه الذاكرات المؤقتة بصرامة. تواصل التطبيقات تنميتها حتى يُبلغ حدٌّ ما، أو في بعض الحالات دون حد واضح. وبعد عام من الاستخدام اليومي، من الشائع أن تجد عدة غيغابايت في تطبيق واحد، موزعة على مجلدات يسهل إغفالها داخل AppData.",
            "وبما أن الذاكرة المؤقتة مجرد وسيلة راحة، يمكن للتطبيق دائمًا تنزيلها أو بناءها من جديد. ولهذا فإن مسحها منخفض المخاطر، ما دمت تفعل ذلك والتطبيق مغلق."
          ]
        },
        {
          "title": "Discord وMicrosoft Teams",
          "content": [
            "يحتفظ Discord بذاكرته المؤقتة في %APPDATA%\\discord. والمجلدات المهمة هي Cache وCode Cache وGPUCache. يؤدي مسحها إلى إزالة الصور والنصوص البرمجية وبيانات الرسومات المنزَّلة. تبقى مسجّلًا الدخول، وعند فتح قناة قديمة لأول مرة تُحمَّل صورها من جديد.",
            "لدى Teams إصداران. يحتفظ Teams الكلاسيكي بذاكرته المؤقتة في %APPDATA%\\Microsoft\\Teams، في المجلدات Cache وCode Cache وGPUCache. أما Teams الجديد فيخزّن بياناته ضمن %LOCALAPPDATA%\\Packages في مجلد يبدأ اسمه بـ MSTeams_، وفي مجلد فرعي يسمى LocalCache. تبقى المحادثات والملفات والاجتماعات في حساب Microsoft 365 الخاص بك، لذا لا تُزال سوى النسخ المحلية.",
            "أنهِ Teams من أيقونة منطقة الإعلام أولًا؛ فإذا أغلقت النافذة فقط يستمر التطبيق في العمل ويعيد إنشاء الملفات أثناء حذفك لها."
          ]
        },
        {
          "title": "Spotify: الذاكرة المؤقتة وتنزيلات وضع عدم الاتصال",
          "content": [
            "يحتفظ Spotify ببياناته في %LOCALAPPDATA%\\Spotify. يحتوي المجلد Storage على الأغاني المخزّنة مؤقتًا، ويحتوي Data على بيانات مؤقتة إضافية، ويحتوي Browser\\Cache على الذاكرة المؤقتة لعرض الويب. تُخزَّن الأغاني التي بثثتها مؤقتًا لتبدأ دون تأخير.",
            "توجد قوائم التشغيل المنزَّلة للاستماع دون اتصال في منطقة التخزين نفسها، لذا قد يؤدي مسحها إلى إزالتها. لا تتأثر قوائم التشغيل ولا مكتبتك ولا حسابك لأنها مخزّنة عبر الإنترنت، لكن سيتعين عليك تنزيل الأغاني غير المتصلة مرة أخرى. وإن كنت تعتمد على الاستماع دون اتصال، فتحقق أولًا من موقع التنزيل في إعدادات Spotify.",
            "وإذا كنت تريد فقط تقليص الذاكرة المؤقتة، فاطّلع أولًا على قسم التخزين في إعدادات Spotify نفسها، حيث يدير التطبيق ذاكرته المؤقتة وموقع التخزين غير المتصل."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "يحتفظ VS Code بعدة ذاكرات مؤقتة في %APPDATA%\\Code: Cache وCachedData وCachedExtensionVSIXs وCode Cache وGPUCache. يحتوي CachedData على الأكواد المجمّعة، ويحتوي CachedExtensionVSIXs على حزم الإضافات التي نُزّلت من أجل التثبيت، وتحتوي البقية على بيانات الويب والرسومات.",
            "لا يؤدي حذفها إلى إزالة الإضافات أو الإعدادات أو اختصارات لوحة المفاتيح أو مساحات العمل؛ فهذه موجودة في مجلدات أخرى مثل User وextensions. وبعد مسح الذاكرة المؤقتة يبدأ المحرر ببطء أكبر قليلًا مرة واحدة، ثم يعود كما كان.",
            "أغلق جميع نوافذ VS Code قبل حذف أي شيء، بما في ذلك النوافذ المخفية في سطح مكتب افتراضي آخر."
          ]
        },
        {
          "title": "امسح الأربعة دفعة واحدة باستخدام Disk Mop",
          "content": [
            "تنفيذ ذلك يدويًا يعني زيارة عشرات المجلدات. تعرض صفحة تحرير مساحة في Disk Mop ذاكرة Discord المؤقتة وذاكرة Microsoft Teams المؤقتة وذاكرة Spotify المؤقتة وذاكرة VS Code المؤقتة كعناصر منفصلة، لكل منها حجمه وملاحظة بأن التطبيق يعيد بناء البيانات وأن حسابك وإعداداتك تبقى.",
            "شغّل الفحص، وحدّد التطبيقات التي تريدها، ثم أكّد. يعرض Disk Mop ما وجده قبل أن يحذف أي شيء. الفحص مجاني، لذا يمكنك أن ترى أولًا كم يستهلك كل تطبيق. أغلق التطبيقات قبل أن تبدأ؛ فالملفات المستخدمة يتم تخطيها.",
            "تنمو هذه الذاكرات المؤقتة من جديد مع الوقت. يمكن لأداة التنظيف المجدول أن تكرر العناصر الآمنة في تحرير مساحة في الخلفية حتى لا تتراكم مرة أخرى."
          ]
        }
      ],
      "verdict": [
        "الذاكرة المؤقتة لـ Discord وMicrosoft Teams وSpotify وVS Code بيانات مؤقتة تعيد التطبيقات بناءها، لذا فمسحها آمن ما دام التطبيق مغلقًا تمامًا. تحتفظ بحسابك وإعداداتك؛ وكل ما عليك توقعه هو أول تشغيل أبطأ قليلًا وإعادة تنزيل الأغاني غير المتصلة في Spotify.",
        "يعثر Disk Mop على الذاكرات المؤقتة الأربع في فحص واحد، ويعرض حجم كل منها، ويطلب التأكيد قبل أن يحذف أي شيء. الفحص مجاني، لذا يمكنك أن ترى أين ذهبت مساحتك قبل أن تقرر."
      ],
      "ctaText": "امسح ذاكرة Discord وTeams وSpotify وVS Code المؤقتة باستخدام Disk Mop"
    },
    "he": {
      "title": "איך לנקות את המטמון של Discord, Teams, Spotify ו-VS Code ב-Windows",
      "metaDescription": "ל-Discord, ל-Microsoft Teams, ל-Spotify ול-VS Code יש מטמון שיכול להגיע לכמה גיגה-בייט. כך מוצאים אותו, מה קורה אחרי הניקוי ואיך עושים זאת בבטחה.",
      "subtitle": "פנו גיגה-בייטים מהמטמון של אפליקציות הצ'אט, המוזיקה והעורך בלי לאבד את החשבון או ההגדרות",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify ו-VS Code שומרים קובצי מטמון שהאפליקציה בונה מחדש בעצמה; ניקוי שלהם פותח מקום, לא מנתק אתכם מהחשבון ולא מוחק את ההגדרות.",
        "סגרו את האפליקציה לחלוטין לפני שמנקים את המטמון שלה, כי קבצים שנמצאים בשימוש לא ניתנים למחיקה והאפליקציה עלולה ליצור אותם מחדש מיד.",
        "Spotify שומר את המטמון ואת ההורדות לשמיעה ללא חיבור בתיקיות קשורות, ולכן אחרי הניקוי צפו שתצטרכו להוריד שוב שירים לשמיעה ללא חיבור."
      ],
      "dataTable": {
        "caption": "היכן כל אפליקציה שומרת את המטמון שלה ב-Windows",
        "columns": [
          "אפליקציה",
          "תיקיות מטמון",
          "מה קורה אחרי הניקוי"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache,‏ Code Cache ו-GPUCache",
            "תמונות וקבצים נטענים מחדש בשימוש הראשון; אתם נשארים מחוברים"
          ],
          [
            "Microsoft Teams (קלאסי)",
            "%APPDATA%\\Microsoft\\Teams\\Cache,‏ Code Cache ו-GPUCache",
            "Teams בונה מחדש את המטמון ועשוי להיפתח לאט יותר פעם אחת"
          ],
          [
            "Microsoft Teams (חדש)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "המטמון נבנה מחדש; הצ'אטים והקבצים נשארים בחשבון שלכם"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage,‏ Data ו-Browser\\Cache",
            "שירים שהושמעו בסטרימינג נשמרים במטמון מחדש; ייתכן שיהיה צורך להוריד שוב הורדות לשמיעה ללא חיבור"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache,‏ CachedData,‏ CachedExtensionVSIXs,‏ Code Cache ו-GPUCache",
            "העורך בונה מחדש את המטמונים שלו; התוספות וההגדרות לא נפגעות"
          ]
        ]
      },
      "howTo": {
        "name": "איך לנקות את המטמון של אפליקציות ב-Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "צאו מהאפליקציה לחלוטין",
            "text": "סגרו את החלון, ואז לחצו לחיצה ימנית על סמל האפליקציה באזור ההודעות ובחרו Quit (יציאה), או סיימו את התהליך במנהל המשימות. חלון סגור עדיין עשוי לפעול ברקע."
          },
          {
            "name": "פתחו את תיקיית המטמון",
            "text": "לחצו על מקש Windows + R, הדביקו את נתיב התיקייה, למשל %APPDATA%\\discord, ולחצו Enter. פתחו את התיקיות Cache,‏ Code Cache ו-GPUCache שבתוכה."
          },
          {
            "name": "מחקו את התוכן",
            "text": "בחרו את כל מה שבתוך תיקיות המטמון ומחקו. אל תיגעו בתיקיות האחרות, כי הן עשויות להכיל את פרטי ההתחברות וההגדרות שלכם."
          },
          {
            "name": "הפעילו שוב את האפליקציה",
            "text": "פתחו את האפליקציה והשתמשו בה כרגיל. ההפעלה הראשונה עשויה להיות איטית מעט בזמן שהמטמון נבנה מחדש, והחשבון וההגדרות שלכם עדיין שם."
          },
          {
            "name": "נקו את כולם בבת אחת עם Disk Mop",
            "text": "פתחו את Disk Mop, עברו אל פינוי מקום והריצו סריקה. סמנו מטמון Discord, מטמון Microsoft Teams, מטמון Spotify ומטמון VS Code, בדקו את הגדלים ואשרו."
          }
        ]
      },
      "faq": [
        {
          "question": "האם ניקוי המטמון של Discord ינתק אותי מהחשבון?",
          "answer": "לא. התיקיות Cache,‏ Code Cache ו-GPUCache מכילות רק תמונות, סקריפטים וקוד מהודר שהורדו. פרטי ההתחברות וההגדרות שלכם נשמרים במקום אחר, ולכן אתם נשארים מחוברים. תמונות בצ'אטים ישנים עשויות להיטען לאט יותר מעט בפעם הראשונה שתפתחו אותם."
        },
        {
          "question": "למה המטמון של Microsoft Teams כל כך גדול?",
          "answer": "Teams שומר עותקים של תמונות, קבצים, תמונות ממוזערות ותוכן אינטרנט מהצ'אטים והפגישות שלכם כדי להציג אותם במהירות. בחשבון פעיל הקבצים האלה מצטברים לגיגה-בייטים ונשארים עד שתנקו אותם."
        },
        {
          "question": "האם אאבד את השירים לשמיעה ללא חיבור אם אנקה את המטמון של Spotify?",
          "answer": "ייתכן. Spotify שומר שירים שהושמעו בסטרימינג ושירים שהורדו בתיקיות אחסון קשורות, ולכן ניקוי האחסון הזה עלול להסיר הורדות לשמיעה ללא חיבור. רשימות ההשמעה והספרייה שלכם נמצאות בחשבון ולא ייפגעו, ואפשר להוריד את השירים שוב."
        },
        {
          "question": "האם בטוח למחוק את המטמון של VS Code?",
          "answer": "כן. Cache,‏ CachedData,‏ CachedExtensionVSIXs,‏ Code Cache ו-GPUCache נבנים מחדש על ידי העורך. ההגדרות, התוספות ומרחבי העבודה שלכם נשמרים בתיקיות אחרות ולא נפגעים."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify ו-VS Code בנויים כולם על טכנולוגיית אינטרנט, וכל אחד מהם שומר בכונן שלכם מטמון של תמונות, סקריפטים וקבצים שהורדו. אפשר לנקות את המטמונים האלה בבטחה: יוצאים מהאפליקציה, מוחקים את תוכן תיקיות המטמון שלה ומפעילים אותה שוב. האפליקציה בונה מחדש את מה שהיא צריכה, אתם נשארים מחוברים, והמקום חוזר, לעיתים כמה גיגה-בייטים לכל אפליקציה במחשב שבשימוש יומיומי.",
        "המדריך הזה מפרט את התיקיות המדויקות של כל אפליקציה, מסביר מה כל מטמון מכיל ומה משתנה אחרי הניקוי, ומראה איך לנקות את כל הארבע בבת אחת. הוא גם מתייחס למקרה היחיד שדורש אזהרה: שירים לשמיעה ללא חיבור ב-Spotify."
      ],
      "sections": [
        {
          "title": "למה האפליקציות האלה ממלאות את הכונן",
          "content": [
            "אפליקציות צ'אט, וידאו ומוזיקה שומרות עותק מקומי של כל מה שהציגו לכם. Discord שומר תמונות וקבצים מצורפים מהשרתים שאתם קוראים. Teams שומר תמונות ממוזערות, קבצים ותוכן אינטרנט מצ'אטים ופגישות. Spotify שומר שירים שהושמעו בסטרימינג כדי שיתחילו מהר יותר, ו-VS Code שומר במטמון קוד מהודר, חבילות תוספות ונתוני גרפיקה.",
            "אף אחד מהמטמונים האלה לא מצומצם בצורה אגרסיבית. האפליקציות ממשיכות להגדיל אותם עד שמגיעים למגבלה, ובמקרים מסוימים בלי מגבלה ברורה. אחרי שנה של שימוש יומיומי מקובל למצוא כמה גיגה-בייטים באפליקציה אחת, מפוזרים בתיקיות שקל לפספס ב-AppData.",
            "מכיוון שהמטמון הוא רק מנגנון נוחות, האפליקציה תמיד יכולה להוריד או לבנות אותו מחדש. לכן ניקויו כרוך בסיכון נמוך, כל עוד עושים זאת כשהאפליקציה סגורה."
          ]
        },
        {
          "title": "Discord ו-Microsoft Teams",
          "content": [
            "Discord שומר את המטמון שלו ב-%APPDATA%\\discord. התיקיות החשובות הן Cache,‏ Code Cache ו-GPUCache. ניקוי שלהן מסיר תמונות, סקריפטים ונתוני גרפיקה שהורדו. אתם נשארים מחוברים, ובפעם הראשונה שתפתחו ערוץ ישן התמונות שלו ייטענו מחדש.",
            "ל-Teams יש שתי גרסאות. Teams הקלאסי שומר את המטמון שלו ב-%APPDATA%\\Microsoft\\Teams, בתיקיות Cache,‏ Code Cache ו-GPUCache. Teams החדש שומר את הנתונים שלו תחת %LOCALAPPDATA%\\Packages בתיקייה ששמה מתחיל ב-MSTeams_, בתת-תיקייה בשם LocalCache. הצ'אטים, הקבצים והפגישות נשארים בחשבון Microsoft 365 שלכם, ולכן מוסרים רק העותקים המקומיים.",
            "צאו מ-Teams תחילה דרך הסמל באזור ההודעות; אם רק תסגרו את החלון, האפליקציה תמשיך לפעול ותיצור קבצים מחדש בזמן שאתם מוחקים."
          ]
        },
        {
          "title": "Spotify: מטמון והורדות לשמיעה ללא חיבור",
          "content": [
            "Spotify שומר את הנתונים שלו ב-%LOCALAPPDATA%\\Spotify. התיקייה Storage מכילה שירים שבמטמון, Data מכילה נתוני מטמון נוספים, ו-Browser\\Cache מכילה את מטמון תצוגת האינטרנט. שירים שהושמעו בסטרימינג נשמרים במטמון כדי שיתחילו בלי השהיה.",
            "רשימות השמעה שהורדו לשמיעה ללא חיבור נמצאות באותו אזור אחסון, ולכן ניקויו עלול להסיר אותן. רשימות ההשמעה, הספרייה והחשבון שלכם לא ייפגעו כי הם מאוחסנים אונליין, אבל תצטרכו להוריד שוב את השירים לשמיעה ללא חיבור. אם אתם נסמכים על שמיעה ללא חיבור, בדקו קודם את מיקום ההורדה בהגדרות של Spotify.",
            "אם אתם רוצים רק לצמצם את המטמון, התחילו בקטע האחסון בהגדרות של Spotify עצמו, שם האפליקציה מנהלת את המטמון ואת מיקום האחסון ללא חיבור."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code שומר כמה מטמונים ב-%APPDATA%\\Code: ‏Cache,‏ CachedData,‏ CachedExtensionVSIXs,‏ Code Cache ו-GPUCache. CachedData מכילה קוד מהודר, CachedExtensionVSIXs מכילה חבילות תוספות שהורדו להתקנה, והאחרות מכילות נתוני אינטרנט וגרפיקה.",
            "מחיקתן לא מסירה תוספות, הגדרות, קיצורי מקשים או מרחבי עבודה; אלה נמצאים בתיקיות אחרות כמו User ו-extensions. אחרי ניקוי המטמון העורך יופעל לאט מעט יותר פעם אחת, ואז הכול יחזור להיות כמו קודם.",
            "סגרו את כל חלונות VS Code לפני שאתם מוחקים משהו, כולל חלונות שמסתתרים בשולחן עבודה וירטואלי אחר."
          ]
        },
        {
          "title": "נקו את כל הארבע בבת אחת עם Disk Mop",
          "content": [
            "עשייה ידנית פירושה ביקור בתריסר תיקיות. הדף פינוי מקום של Disk Mop מציג את מטמון Discord, מטמון Microsoft Teams, מטמון Spotify ומטמון VS Code כפריטים נפרדים, לכל אחד הגודל שלו והערה שהאפליקציה בונה את הנתונים מחדש והחשבון וההגדרות שלכם נשארים.",
            "הריצו את הסריקה, סמנו את האפליקציות הרצויות ואשרו. Disk Mop מציג את מה שמצא לפני שהוא מוחק משהו. הסריקה בחינם, ולכן אפשר לראות קודם כמה כל אפליקציה תופסת. צאו מהאפליקציות לפני שמתחילים; קבצים שנמצאים בשימוש מדולגים.",
            "המטמונים האלה גדלים שוב עם הזמן. כלי הניקוי המתוזמן יכול לחזור על הפריטים הבטוחים של פינוי מקום ברקע כך שלא יצטברו שוב."
          ]
        }
      ],
      "verdict": [
        "המטמונים של Discord, Microsoft Teams, Spotify ו-VS Code הם נתונים זמניים שהאפליקציות בונות מחדש, ולכן ניקוי שלהם בטוח כל עוד האפליקציה סגורה לחלוטין. החשבון וההגדרות נשמרים; כל מה שצפוי הוא הפעלה ראשונה איטית מעט והורדה מחדש של שירים לשמיעה ללא חיבור ב-Spotify.",
        "Disk Mop מוצא את כל ארבעת המטמונים בסריקה אחת, מציג את הגודל של כל אחד ושואל לפני שהוא מוחק משהו. הסריקה בחינם, ולכן אפשר לראות לאן נעלם המקום לפני שמחליטים."
      ],
      "ctaText": "נקו את המטמון של Discord, Teams, Spotify ו-VS Code עם Disk Mop"
    },
    "id": {
      "title": "Cara Menghapus Cache Discord, Teams, Spotify, dan VS Code di Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify, dan VS Code menyimpan cache hingga beberapa GB. Lihat lokasinya, dampak menghapusnya, dan cara aman melakukannya.",
      "subtitle": "Dapatkan kembali beberapa gigabyte ruang dari cache chat, musik, dan editor tanpa kehilangan akun maupun pengaturan",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify, dan VS Code menyimpan file cache yang dibangun ulang sendiri oleh aplikasi; menghapusnya membebaskan ruang, tidak membuat Anda keluar dari akun, dan tidak menghapus pengaturan.",
        "Tutup aplikasi sepenuhnya sebelum menghapus cache-nya, karena file yang sedang digunakan tidak dapat dihapus dan aplikasi bisa langsung membuatnya kembali.",
        "Spotify menyimpan cache dan unduhan offline di folder yang saling terkait, jadi setelah menghapusnya, lagu offline kemungkinan perlu diunduh ulang."
      ],
      "dataTable": {
        "caption": "Lokasi cache setiap aplikasi di Windows",
        "columns": [
          "Aplikasi",
          "Folder cache",
          "Yang terjadi setelah dihapus"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache, dan GPUCache",
            "Gambar dan file dimuat ulang saat pertama digunakan; Anda tetap masuk"
          ],
          [
            "Microsoft Teams (klasik)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache, dan GPUCache",
            "Teams membangun ulang cache dan sekali mungkin mulai lebih lambat"
          ],
          [
            "Microsoft Teams (baru)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Cache dibangun ulang; chat dan file tetap ada di akun Anda"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data, dan Browser\\Cache",
            "Lagu yang di-streaming di-cache kembali; unduhan offline mungkin perlu diunduh ulang"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache, dan GPUCache",
            "Editor membangun ulang cache-nya; ekstensi dan pengaturan tidak tersentuh"
          ]
        ]
      },
      "howTo": {
        "name": "Cara menghapus cache aplikasi di Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Keluar dari aplikasi sepenuhnya",
            "text": "Tutup jendelanya, lalu klik kanan ikon aplikasi di baki sistem dan pilih Keluar, atau akhiri prosesnya di Task Manager. Jendela yang sudah ditutup bisa saja masih berjalan di latar belakang."
          },
          {
            "name": "Buka folder cache",
            "text": "Tekan tombol Windows + R, tempel path folder, misalnya %APPDATA%\\discord, lalu tekan Enter. Buka folder Cache, Code Cache, dan GPUCache di dalamnya."
          },
          {
            "name": "Hapus isinya",
            "text": "Pilih semua isi folder cache dan hapus. Jangan ubah folder lain, karena folder tersebut bisa menyimpan data masuk dan pengaturan Anda."
          },
          {
            "name": "Jalankan aplikasi kembali",
            "text": "Buka aplikasi dan gunakan seperti biasa. Awal dijalankan bisa sedikit lebih lambat selagi cache dibangun ulang, dan akun serta pengaturan Anda tetap ada."
          },
          {
            "name": "Hapus semuanya sekaligus dengan Disk Mop",
            "text": "Buka Disk Mop, masuk ke Kosongkan ruang, lalu jalankan pemindaian. Centang Cache Discord, Cache Microsoft Teams, Cache Spotify, dan Cache VS Code, periksa ukurannya, lalu konfirmasi."
          }
        ]
      },
      "faq": [
        {
          "question": "Apakah menghapus cache Discord akan membuat saya keluar dari akun?",
          "answer": "Tidak. Folder Cache, Code Cache, dan GPUCache hanya berisi gambar, skrip, dan kode terkompilasi yang diunduh. Data login dan pengaturan Anda disimpan di tempat lain, sehingga Anda tetap masuk. Gambar di chat lama mungkin dimuat sedikit lebih lambat saat pertama kali dibuka."
        },
        {
          "question": "Mengapa cache Microsoft Teams begitu besar?",
          "answer": "Teams menyimpan salinan gambar, file, gambar mini, dan konten web dari chat dan rapat Anda agar dapat menampilkannya dengan cepat. Pada akun yang aktif, file-file ini menumpuk hingga beberapa gigabyte dan tetap ada sampai Anda menghapusnya."
        },
        {
          "question": "Apakah lagu offline saya hilang jika saya menghapus cache Spotify?",
          "answer": "Mungkin. Spotify menyimpan lagu yang di-streaming dan lagu yang diunduh di folder penyimpanan yang saling terkait, sehingga menghapus penyimpanan itu bisa menghilangkan unduhan offline. Playlist dan pustaka Anda ada di akun dan tidak terpengaruh, dan lagu bisa diunduh lagi."
        },
        {
          "question": "Apakah aman menghapus cache VS Code?",
          "answer": "Ya. Cache, CachedData, CachedExtensionVSIXs, Code Cache, dan GPUCache dibangun ulang oleh editor. Pengaturan, ekstensi, dan workspace Anda disimpan di folder lain dan tidak tersentuh."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify, dan VS Code semuanya dibangun dengan teknologi web, dan masing-masing menyimpan cache gambar, skrip, dan file yang diunduh di drive Anda. Cache ini aman dihapus: keluar dari aplikasi, hapus isi folder cache-nya, lalu jalankan lagi. Aplikasi membangun ulang yang dibutuhkan, Anda tetap masuk, dan ruang kembali, sering kali beberapa gigabyte per aplikasi pada PC yang dipakai setiap hari.",
        "Panduan ini mencantumkan folder yang tepat untuk setiap aplikasi, menjelaskan isi tiap cache dan perubahan setelah dihapus, serta menunjukkan cara menghapus keempatnya sekaligus. Panduan ini juga membahas satu kasus yang perlu diwaspadai: lagu offline Spotify."
      ],
      "sections": [
        {
          "title": "Mengapa Aplikasi Ini Memenuhi Drive Anda",
          "content": [
            "Aplikasi chat, video, dan musik menyimpan salinan lokal dari semua yang pernah ditampilkan kepada Anda. Discord menyimpan gambar dan lampiran dari server yang Anda baca. Teams menyimpan gambar mini, file, dan konten web dari chat dan rapat. Spotify menyimpan lagu yang pernah di-streaming agar dimulai lebih cepat, sedangkan VS Code men-cache kode terkompilasi, paket ekstensi, dan data grafis.",
            "Tidak satu pun cache ini dipangkas secara agresif. Aplikasi terus membesarkannya sampai batas tercapai, atau dalam beberapa kasus tanpa batas yang jelas. Setelah setahun dipakai setiap hari, umum ditemukan beberapa gigabyte dalam satu aplikasi, tersebar di folder yang mudah terlewat di AppData.",
            "Karena cache hanya berfungsi sebagai kemudahan, aplikasi selalu dapat mengunduh atau membangunnya lagi. Itulah sebabnya menghapusnya berisiko rendah, selama dilakukan saat aplikasi tertutup."
          ]
        },
        {
          "title": "Discord dan Microsoft Teams",
          "content": [
            "Discord menyimpan cache-nya di %APPDATA%\\discord. Folder yang penting adalah Cache, Code Cache, dan GPUCache. Menghapusnya akan membuang gambar, skrip, dan data grafis yang diunduh. Anda tetap masuk, dan saat pertama kali membuka channel lama, gambarnya dimuat ulang.",
            "Teams memiliki dua versi. Teams klasik menyimpan cache-nya di %APPDATA%\\Microsoft\\Teams, pada folder Cache, Code Cache, dan GPUCache. Teams baru menyimpan datanya di %LOCALAPPDATA%\\Packages, dalam folder yang namanya diawali MSTeams_, pada subfolder bernama LocalCache. Chat, file, dan rapat tetap berada di akun Microsoft 365 Anda, jadi hanya salinan lokal yang dihapus.",
            "Keluar dari Teams lewat ikon baki terlebih dahulu; jika Anda hanya menutup jendela, aplikasi tetap berjalan dan membuat ulang file saat Anda menghapusnya."
          ]
        },
        {
          "title": "Spotify: Cache dan Unduhan Offline",
          "content": [
            "Spotify menyimpan datanya di %LOCALAPPDATA%\\Spotify. Folder Storage berisi lagu yang di-cache, Data berisi data cache tambahan, dan Browser\\Cache berisi cache tampilan web. Lagu yang pernah di-streaming di-cache agar langsung dimulai tanpa jeda.",
            "Playlist yang diunduh untuk didengarkan offline berada di area penyimpanan yang sama, sehingga menghapusnya bisa ikut menghilangkan playlist tersebut. Playlist, pustaka, dan akun Anda tidak terpengaruh karena disimpan secara online, tetapi Anda harus mengunduh ulang lagu offline. Jika Anda mengandalkan mode offline, periksa dulu lokasi unduhan di pengaturan Spotify.",
            "Jika Anda hanya ingin memperkecil cache, lihat dulu bagian Penyimpanan di pengaturan Spotify sendiri, tempat aplikasi mengelola cache dan lokasi penyimpanan offline."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code menyimpan beberapa cache di %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache, dan GPUCache. CachedData berisi kode terkompilasi, CachedExtensionVSIXs berisi paket ekstensi yang diunduh untuk instalasi, dan sisanya berisi data web dan grafis.",
            "Menghapusnya tidak menghilangkan ekstensi, pengaturan, pintasan keyboard, atau workspace Anda; semuanya berada di folder lain seperti User dan extensions. Setelah cache dihapus, editor akan mulai sedikit lebih lambat sekali saja, lalu kembali seperti semula.",
            "Tutup semua jendela VS Code sebelum menghapus apa pun, termasuk jendela yang bersembunyi di desktop virtual lain."
          ]
        },
        {
          "title": "Hapus Keempatnya Sekaligus dengan Disk Mop",
          "content": [
            "Melakukannya secara manual berarti mengunjungi belasan folder. Halaman Kosongkan ruang di Disk Mop menampilkan Cache Discord, Cache Microsoft Teams, Cache Spotify, dan Cache VS Code sebagai item terpisah, masing-masing dengan ukurannya dan catatan bahwa aplikasi akan membangun ulang datanya serta akun dan pengaturan Anda tetap aman.",
            "Jalankan pemindaian, centang aplikasi yang Anda inginkan, lalu konfirmasi. Disk Mop menampilkan apa yang ditemukan sebelum menghapus apa pun. Pemindaian gratis, jadi Anda bisa melihat dulu berapa banyak yang dipakai tiap aplikasi. Tutup aplikasi sebelum mulai; file yang sedang digunakan akan dilewati.",
            "Cache ini akan membesar lagi seiring waktu. Alat pembersihan terjadwal dapat mengulang item aman di Kosongkan ruang di latar belakang agar tidak menumpuk lagi."
          ]
        }
      ],
      "verdict": [
        "Cache Discord, Microsoft Teams, Spotify, dan VS Code adalah data sementara yang dibangun ulang oleh aplikasi, jadi menghapusnya aman selama aplikasi tertutup sepenuhnya. Akun dan pengaturan Anda tetap ada; yang perlu diantisipasi hanyalah awal dijalankan yang sedikit lebih lambat, serta mengunduh ulang lagu offline di Spotify.",
        "Disk Mop menemukan keempat cache dalam satu pemindaian, menampilkan ukuran masing-masing, dan meminta konfirmasi sebelum menghapus apa pun. Pemindaian gratis, jadi Anda bisa melihat ke mana ruang Anda terpakai sebelum memutuskan."
      ],
      "ctaText": "Hapus cache Discord, Teams, Spotify, dan VS Code dengan Disk Mop"
    },
    "pl": {
      "title": "Jak wyczyścić pamięć podręczną Discorda, Teams, Spotify i VS Code w systemie Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify i VS Code gromadzą pamięć podręczną o wielkości kilku GB. Sprawdź, gdzie jest, co daje jej czyszczenie i jak zrobić to bezpiecznie.",
      "subtitle": "Odzyskaj gigabajty zajęte przez komunikatory, muzykę i edytor bez utraty konta i ustawień",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify i VS Code przechowują pliki pamięci podręcznej, które aplikacja odtwarza sama; ich wyczyszczenie zwalnia miejsce, nie wylogowuje Cię i nie usuwa ustawień.",
        "Przed wyczyszczeniem pamięci podręcznej całkowicie zamknij aplikację, ponieważ plików w użyciu nie da się usunąć, a aplikacja może od razu utworzyć je ponownie.",
        "Spotify przechowuje pamięć podręczną i pobrane utwory offline w powiązanych folderach, więc po jej wyczyszczeniu utwory offline trzeba będzie pobrać ponownie."
      ],
      "dataTable": {
        "caption": "Gdzie poszczególne aplikacje przechowują pamięć podręczną w systemie Windows",
        "columns": [
          "Aplikacja",
          "Foldery pamięci podręcznej",
          "Co się dzieje po wyczyszczeniu"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache i GPUCache",
            "Obrazy i pliki wczytują się ponownie przy pierwszym użyciu; pozostajesz zalogowany"
          ],
          [
            "Microsoft Teams (klasyczny)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache i GPUCache",
            "Teams odbudowuje pamięć podręczną i raz może uruchomić się wolniej"
          ],
          [
            "Microsoft Teams (nowy)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Pamięć podręczna jest odbudowywana; czaty i pliki pozostają na Twoim koncie"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data i Browser\\Cache",
            "Odtwarzane utwory są ponownie buforowane; pobrane utwory offline mogą wymagać ponownego pobrania"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache i GPUCache",
            "Edytor odbudowuje pamięć podręczną; rozszerzenia i ustawienia pozostają nietknięte"
          ]
        ]
      },
      "howTo": {
        "name": "Jak wyczyścić pamięć podręczną aplikacji w systemie Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Całkowicie zamknij aplikację",
            "text": "Zamknij okno, następnie kliknij prawym przyciskiem myszy ikonę aplikacji w obszarze powiadomień i wybierz polecenie Zakończ albo zakończ proces w Menedżerze zadań. Zamknięte okno nie oznacza, że aplikacja nie działa w tle."
          },
          {
            "name": "Otwórz folder pamięci podręcznej",
            "text": "Naciśnij klawisz Windows + R, wklej ścieżkę folderu, na przykład %APPDATA%\\discord, i naciśnij Enter. Otwórz znajdujące się w nim foldery Cache, Code Cache i GPUCache."
          },
          {
            "name": "Usuń zawartość",
            "text": "Zaznacz wszystko, co znajduje się w folderach pamięci podręcznej, i usuń. Nie ruszaj pozostałych folderów, ponieważ mogą zawierać dane logowania i ustawienia."
          },
          {
            "name": "Uruchom aplikację ponownie",
            "text": "Otwórz aplikację i korzystaj z niej normalnie. Pierwsze uruchomienie może być nieco wolniejsze, gdy aplikacja odbudowuje pamięć podręczną; Twoje konto i ustawienia nadal są na miejscu."
          },
          {
            "name": "Wyczyść wszystko naraz za pomocą Disk Mop",
            "text": "Otwórz Disk Mop, przejdź do sekcji Zwolnij miejsce i uruchom skanowanie. Zaznacz Pamięć podręczna Discord, Pamięć podręczna Microsoft Teams, Pamięć podręczna Spotify i Pamięć podręczna VS Code, sprawdź rozmiary i zatwierdź."
          }
        ]
      },
      "faq": [
        {
          "question": "Czy wyczyszczenie pamięci podręcznej Discorda mnie wyloguje?",
          "answer": "Nie. Foldery Cache, Code Cache i GPUCache zawierają tylko pobrane obrazy, skrypty i skompilowany kod. Dane logowania i ustawienia są przechowywane gdzie indziej, więc pozostajesz zalogowany. Obrazy w starych czatach mogą przy pierwszym otwarciu wczytywać się nieco wolniej."
        },
        {
          "question": "Dlaczego pamięć podręczna Microsoft Teams jest tak duża?",
          "answer": "Teams przechowuje kopie obrazów, plików, miniatur i zawartości internetowej z czatów i spotkań, aby szybko je wyświetlać. Na intensywnie używanym koncie pliki te zajmują gigabajty i pozostają, dopóki ich nie wyczyścisz."
        },
        {
          "question": "Czy po wyczyszczeniu pamięci podręcznej Spotify stracę utwory offline?",
          "answer": "Możliwe, że tak. Spotify przechowuje odtwarzane i pobrane utwory w powiązanych folderach magazynu, więc jego wyczyszczenie może usunąć pobrane pliki offline. Playlisty i biblioteka są na koncie i nie ulegają zmianie, a utwory można pobrać ponownie."
        },
        {
          "question": "Czy usuwanie pamięci podręcznej VS Code jest bezpieczne?",
          "answer": "Tak. Cache, CachedData, CachedExtensionVSIXs, Code Cache i GPUCache są odbudowywane przez edytor. Ustawienia, rozszerzenia i obszary robocze znajdują się w innych folderach i nie są naruszane."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify i VS Code powstały w technologiach webowych i każdy z tych programów przechowuje na dysku pamięć podręczną obrazów, skryptów i pobranych plików. Możesz ją bezpiecznie wyczyścić: zamknij aplikację, usuń zawartość jej folderów pamięci podręcznej i uruchom ją ponownie. Aplikacja odbuduje to, czego potrzebuje, pozostaniesz zalogowany, a miejsce wróci — na codziennie używanym komputerze to często kilka gigabajtów na aplikację.",
        "Ten poradnik wymienia dokładne foldery każdej aplikacji, wyjaśnia, co zawiera każda pamięć podręczna i co zmienia się po jej wyczyszczeniu, oraz pokazuje, jak wyczyścić wszystkie cztery naraz. Omawia też jedyny przypadek wymagający ostrzeżenia: utwory offline w Spotify."
      ],
      "sections": [
        {
          "title": "Dlaczego te aplikacje zapełniają dysk",
          "content": [
            "Aplikacje do czatu, wideo i muzyki zachowują lokalną kopię wszystkiego, co Ci pokazały. Discord zapisuje obrazy i załączniki z serwerów, które czytasz. Teams przechowuje miniatury, pliki i zawartość internetową z czatów i spotkań. Spotify zapisuje odtworzone utwory, aby uruchamiały się szybciej, a VS Code buforuje skompilowany kod, pakiety rozszerzeń i dane graficzne.",
            "Żadna z tych pamięci podręcznych nie jest agresywnie przycinana. Aplikacje powiększają ją aż do osiągnięcia limitu, a w niektórych przypadkach bez wyraźnego limitu. Po roku codziennego używania często znajduje się kilka gigabajtów w jednej aplikacji, rozproszonych po folderach łatwych do przeoczenia w AppData.",
            "Ponieważ pamięć podręczna jest tylko udogodnieniem, aplikacja zawsze może pobrać lub zbudować ją ponownie. Dlatego jej wyczyszczenie niesie niewielkie ryzyko, o ile robisz to przy zamkniętej aplikacji."
          ]
        },
        {
          "title": "Discord i Microsoft Teams",
          "content": [
            "Discord przechowuje pamięć podręczną w %APPDATA%\\discord. Istotne są foldery Cache, Code Cache i GPUCache. Ich wyczyszczenie usuwa pobrane obrazy, skrypty i dane graficzne. Pozostajesz zalogowany, a przy pierwszym otwarciu starego kanału jego obrazy wczytają się ponownie.",
            "Teams występuje w dwóch wersjach. Klasyczny Teams przechowuje pamięć podręczną w %APPDATA%\\Microsoft\\Teams, w folderach Cache, Code Cache i GPUCache. Nowy Teams zapisuje dane w %LOCALAPPDATA%\\Packages, w folderze o nazwie zaczynającej się od MSTeams_, w podfolderze LocalCache. Czaty, pliki i spotkania pozostają na Twoim koncie Microsoft 365, więc usuwane są tylko kopie lokalne.",
            "Najpierw zakończ Teams z poziomu ikony w obszarze powiadomień; jeśli tylko zamkniesz okno, aplikacja nadal działa i odtwarza pliki w trakcie ich usuwania."
          ]
        },
        {
          "title": "Spotify: pamięć podręczna i pobrane utwory offline",
          "content": [
            "Spotify przechowuje dane w %LOCALAPPDATA%\\Spotify. Folder Storage zawiera utwory w pamięci podręcznej, Data — dodatkowe dane z pamięci podręcznej, a Browser\\Cache — pamięć podręczną widoku internetowego. Odtworzone utwory są buforowane, aby uruchamiały się bez opóźnienia.",
            "Playlisty pobrane do słuchania offline znajdują się w tym samym obszarze magazynu, więc jego wyczyszczenie może je usunąć. Playlisty, biblioteka i konto nie są naruszane, ponieważ są przechowywane online, ale utwory offline trzeba będzie pobrać ponownie. Jeśli korzystasz ze słuchania offline, najpierw sprawdź lokalizację pobierania w ustawieniach Spotify.",
            "Jeśli chcesz tylko zmniejszyć pamięć podręczną, zajrzyj najpierw do sekcji Magazyn w ustawieniach Spotify — tam aplikacja zarządza pamięcią podręczną i lokalizacją magazynu offline."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code przechowuje kilka pamięci podręcznych w %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache i GPUCache. CachedData zawiera skompilowany kod, CachedExtensionVSIXs — pakiety rozszerzeń pobrane do instalacji, a pozostałe — dane internetowe i graficzne.",
            "Ich usunięcie nie usuwa rozszerzeń, ustawień, skrótów klawiszowych ani obszarów roboczych; znajdują się one w innych folderach, takich jak User i extensions. Po wyczyszczeniu pamięci podręcznej edytor raz uruchomi się nieco wolniej, a potem wszystko będzie jak dawniej.",
            "Przed usunięciem czegokolwiek zamknij wszystkie okna VS Code, także te ukryte na innym pulpicie wirtualnym."
          ]
        },
        {
          "title": "Wyczyść wszystkie cztery naraz za pomocą Disk Mop",
          "content": [
            "Robienie tego ręcznie oznacza odwiedzenie kilkunastu folderów. Strona Zwolnij miejsce w Disk Mop wyświetla Pamięć podręczna Discord, Pamięć podręczna Microsoft Teams, Pamięć podręczna Spotify i Pamięć podręczna VS Code jako osobne pozycje, każdą z rozmiarem i informacją, że aplikacja odbuduje dane, a konto i ustawienia pozostaną.",
            "Uruchom skanowanie, zaznacz wybrane aplikacje i zatwierdź. Disk Mop pokazuje znalezione elementy, zanim cokolwiek usunie. Skanowanie jest bezpłatne, więc możesz najpierw zobaczyć, ile zajmuje każda aplikacja. Przed rozpoczęciem zamknij aplikacje; pliki w użyciu są pomijane.",
            "Te pamięci podręczne z czasem znów rosną. Narzędzie czyszczenia według harmonogramu może w tle powtarzać bezpieczne pozycje z sekcji Zwolnij miejsce, aby nigdy się nie nagromadziły."
          ]
        }
      ],
      "verdict": [
        "Pamięci podręczne Discorda, Microsoft Teams, Spotify i VS Code to dane tymczasowe, które aplikacje odtwarzają, więc ich wyczyszczenie jest bezpieczne, o ile aplikacja jest całkowicie zamknięta. Zachowujesz konto i ustawienia; trzeba się spodziewać jedynie nieco wolniejszego pierwszego uruchomienia i ponownego pobrania utworów offline w Spotify.",
        "Disk Mop znajduje wszystkie cztery pamięci podręczne jednym skanowaniem, pokazuje rozmiar każdej i pyta, zanim cokolwiek usunie. Skanowanie jest bezpłatne, więc możesz zobaczyć, gdzie zniknęło miejsce, zanim podejmiesz decyzję."
      ],
      "ctaText": "Wyczyść pamięć podręczną Discorda, Teams, Spotify i VS Code za pomocą Disk Mop"
    },
    "ro": {
      "title": "Cum ștergi cache-ul Discord, Teams, Spotify și VS Code în Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify și VS Code păstrează un cache de câțiva GB. Vezi unde se află, ce se întâmplă după ștergere și cum îl cureți în siguranță.",
      "subtitle": "Recuperează gigaocteți din cache-ul aplicațiilor de chat, muzică și editare, fără să pierzi contul sau setările",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify și VS Code stochează fișiere cache pe care aplicația le reconstruiește singură; ștergerea lor eliberează spațiu, nu te deconectează și nu elimină setările.",
        "Închide complet aplicația înainte de a-i șterge cache-ul, deoarece fișierele aflate în uz nu pot fi șterse, iar aplicația le poate recrea imediat.",
        "Spotify păstrează cache-ul și descărcările offline în foldere înrudite, așa că, după ștergere, te poți aștepta să descarci din nou melodiile offline."
      ],
      "dataTable": {
        "caption": "Unde păstrează fiecare aplicație cache-ul în Windows",
        "columns": [
          "Aplicație",
          "Foldere de cache",
          "Ce se întâmplă după ștergere"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache și GPUCache",
            "Imaginile și fișierele se reîncarcă la prima utilizare; rămâi conectat"
          ],
          [
            "Microsoft Teams (clasic)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache și GPUCache",
            "Teams reconstruiește cache-ul și poate porni mai lent o singură dată"
          ],
          [
            "Microsoft Teams (nou)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Cache-ul este reconstruit; conversațiile și fișierele rămân în contul tău"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data și Browser\\Cache",
            "Melodiile redate în streaming sunt puse din nou în cache; descărcările offline pot necesita o nouă descărcare"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache și GPUCache",
            "Editorul își reconstruiește cache-urile; extensiile și setările rămân neatinse"
          ]
        ]
      },
      "howTo": {
        "name": "Cum ștergi cache-ul aplicațiilor în Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Închide complet aplicația",
            "text": "Închide fereastra, apoi fă clic dreapta pe pictograma aplicației din zona de notificare și alege Quit (Ieșire) sau oprește procesul din Manager de activități. O fereastră închisă poate rula în continuare în fundal."
          },
          {
            "name": "Deschide folderul de cache",
            "text": "Apasă tasta Windows + R, lipește calea folderului, de exemplu %APPDATA%\\discord, și apasă Enter. Deschide folderele Cache, Code Cache și GPUCache din interior."
          },
          {
            "name": "Șterge conținutul",
            "text": "Selectează tot ce se află în folderele de cache și șterge. Nu atinge celelalte foldere, deoarece pot conține datele de autentificare și setările."
          },
          {
            "name": "Pornește din nou aplicația",
            "text": "Deschide aplicația și folosește-o normal. Prima pornire poate fi puțin mai lentă cât timp își reconstruiește cache-ul, iar contul și setările tale sunt în continuare acolo."
          },
          {
            "name": "Curăță-le pe toate odată cu Disk Mop",
            "text": "Deschide Disk Mop, mergi la Eliberează spațiu și rulează scanarea. Bifează Cache Discord, Cache Microsoft Teams, Cache Spotify și Cache VS Code, verifică dimensiunile și confirmă."
          }
        ]
      },
      "faq": [
        {
          "question": "Mă deconectează ștergerea cache-ului Discord?",
          "answer": "Nu. Folderele Cache, Code Cache și GPUCache conțin doar imagini, scripturi și cod compilat descărcate. Datele de autentificare și setările sunt stocate în altă parte, așa că rămâi conectat. Imaginile din conversațiile vechi se pot încărca ceva mai lent prima dată când le deschizi."
        },
        {
          "question": "De ce este atât de mare cache-ul Microsoft Teams?",
          "answer": "Teams păstrează copii ale imaginilor, fișierelor, miniaturilor și conținutului web din conversațiile și ședințele tale, ca să le poată afișa rapid. Pe un cont activ, aceste fișiere ajung la gigaocteți și rămân până le ștergi."
        },
        {
          "question": "Pierd melodiile offline dacă șterg cache-ul Spotify?",
          "answer": "Posibil. Spotify păstrează melodiile redate în streaming și pe cele descărcate în foldere de stocare înrudite, așa că ștergerea acelui spațiu poate elimina descărcările offline. Listele de redare și biblioteca ta sunt în cont și nu sunt afectate, iar melodiile pot fi descărcate din nou."
        },
        {
          "question": "Este sigur să șterg cache-ul VS Code?",
          "answer": "Da. Cache, CachedData, CachedExtensionVSIXs, Code Cache și GPUCache sunt reconstruite de editor. Setările, extensiile și spațiile de lucru se află în alte foldere și nu sunt atinse."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify și VS Code sunt construite pe tehnologii web, iar fiecare păstrează pe unitatea ta un cache de imagini, scripturi și fișiere descărcate. Poți șterge aceste cache-uri în siguranță: închide aplicația, șterge conținutul folderelor ei de cache și pornește-o din nou. Aplicația reconstruiește ce îi trebuie, rămâi conectat, iar spațiul se eliberează, adesea câțiva gigaocteți per aplicație pe un PC folosit zilnic.",
        "Acest ghid listează folderele exacte ale fiecărei aplicații, explică ce conține fiecare cache și ce se schimbă după ștergere și arată cum le cureți pe toate patru odată. Tratează și singurul caz care cere o avertizare: melodiile offline din Spotify."
      ],
      "sections": [
        {
          "title": "De ce îți umplu aceste aplicații unitatea",
          "content": [
            "Aplicațiile de chat, video și muzică păstrează o copie locală a tot ce ți-au afișat. Discord stochează imaginile și atașamentele de pe serverele pe care le citești. Teams păstrează miniaturi, fișiere și conținut web din conversații și ședințe. Spotify salvează melodiile redate în streaming ca să pornească mai repede, iar VS Code păstrează în cache cod compilat, pachete de extensii și date grafice.",
            "Niciunul dintre aceste cache-uri nu este redus agresiv. Aplicațiile le tot măresc până la atingerea unei limite sau, în unele cazuri, fără o limită clară. După un an de utilizare zilnică, este obișnuit să găsești câțiva gigaocteți într-o singură aplicație, împrăștiați în foldere ușor de trecut cu vederea în AppData.",
            "Deoarece cache-ul este doar o facilitate, aplicația îl poate descărca sau construi oricând din nou. De aceea ștergerea lui prezintă risc scăzut, atâta timp cât o faci cu aplicația închisă."
          ]
        },
        {
          "title": "Discord și Microsoft Teams",
          "content": [
            "Discord își păstrează cache-ul în %APPDATA%\\discord. Folderele care contează sunt Cache, Code Cache și GPUCache. Ștergerea lor elimină imaginile, scripturile și datele grafice descărcate. Rămâi conectat, iar prima dată când deschizi un canal vechi, imaginile lui se încarcă din nou.",
            "Teams are două versiuni. Teams clasic își păstrează cache-ul în %APPDATA%\\Microsoft\\Teams, în folderele Cache, Code Cache și GPUCache. Noul Teams stochează datele în %LOCALAPPDATA%\\Packages, într-un folder al cărui nume începe cu MSTeams_, în subfolderul numit LocalCache. Conversațiile, fișierele și ședințele rămân în contul tău Microsoft 365, deci se elimină doar copiile locale.",
            "Închide mai întâi Teams din pictograma din zona de notificare; dacă doar închizi fereastra, aplicația continuă să ruleze și recreează fișiere în timp ce le ștergi."
          ]
        },
        {
          "title": "Spotify: cache și descărcări offline",
          "content": [
            "Spotify își păstrează datele în %LOCALAPPDATA%\\Spotify. Folderul Storage conține melodiile din cache, Data conține date suplimentare din cache, iar Browser\\Cache conține cache-ul componentei web. Melodiile redate în streaming sunt păstrate în cache ca să pornească fără întârziere.",
            "Listele de redare descărcate pentru ascultare offline se află în aceeași zonă de stocare, așa că ștergerea ei le poate elimina. Listele de redare, biblioteca și contul tău nu sunt afectate, deoarece sunt stocate online, dar va trebui să descarci din nou melodiile offline. Dacă te bazezi pe ascultarea offline, verifică mai întâi locația descărcărilor în setările Spotify.",
            "Dacă vrei doar să reduci cache-ul, uită-te mai întâi la secțiunea Stocare din setările Spotify, unde aplicația își gestionează cache-ul și locația stocării offline."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code păstrează mai multe cache-uri în %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache și GPUCache. CachedData conține cod compilat, CachedExtensionVSIXs conține pachetele de extensii descărcate pentru instalare, iar celelalte conțin date web și grafice.",
            "Ștergerea lor nu elimină extensiile, setările, comenzile rapide de la tastatură sau spațiile de lucru; acestea se află în alte foldere, precum User și extensions. După ștergerea cache-ului, editorul pornește o singură dată ceva mai lent, apoi totul revine la normal.",
            "Închide toate ferestrele VS Code înainte de a șterge ceva, inclusiv pe cele ascunse pe un alt desktop virtual."
          ]
        },
        {
          "title": "Șterge-le pe toate patru odată cu Disk Mop",
          "content": [
            "Dacă o faci manual, trebuie să parcurgi o duzină de foldere. Pagina Eliberează spațiu din Disk Mop listează Cache Discord, Cache Microsoft Teams, Cache Spotify și Cache VS Code ca elemente separate, fiecare cu dimensiunea ei și o notă că aplicația reconstruiește datele, iar contul și setările rămân.",
            "Rulează scanarea, bifează aplicațiile dorite și confirmă. Disk Mop arată ce a găsit înainte să șteargă ceva. Scanarea este gratuită, așa că poți vedea mai întâi cât ocupă fiecare aplicație. Închide aplicațiile înainte de a începe; fișierele aflate în uz sunt omise.",
            "Aceste cache-uri cresc la loc în timp. Instrumentul de curățare programată poate repeta în fundal elementele sigure din Eliberează spațiu, ca să nu se mai acumuleze."
          ]
        }
      ],
      "verdict": [
        "Cache-urile Discord, Microsoft Teams, Spotify și VS Code sunt date temporare pe care aplicațiile le reconstruiesc, deci ștergerea lor este sigură atâta timp cât aplicația este complet închisă. Îți păstrezi contul și setările; te poți aștepta doar la o primă pornire ceva mai lentă și la redescărcarea melodiilor offline din Spotify.",
        "Disk Mop găsește toate cele patru cache-uri dintr-o singură scanare, arată dimensiunea fiecăruia și cere confirmare înainte să șteargă ceva. Scanarea este gratuită, așa că poți vedea unde a dispărut spațiul înainte să te decizi."
      ],
      "ctaText": "Șterge cache-ul Discord, Teams, Spotify și VS Code cu Disk Mop"
    },
    "ru": {
      "title": "Как очистить кэш Discord, Teams, Spotify и VS Code в Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify и VS Code хранят кэш размером в несколько гигабайт. Где он лежит, что происходит после очистки и как удалить его безопасно.",
      "subtitle": "Освободите гигабайты, занятые кэшем чатов, музыки и редактора, не потеряв аккаунт и настройки",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify и VS Code хранят кэш, который приложение пересоздаёт само: очистка освобождает место, не выводит вас из аккаунта и не сбрасывает настройки.",
        "Перед очисткой кэша полностью закройте приложение: используемые файлы удалить нельзя, а приложение может сразу создать их заново.",
        "Spotify хранит кэш и офлайн-загрузки в связанных папках, поэтому после очистки офлайн-треки, возможно, придётся скачать заново."
      ],
      "dataTable": {
        "caption": "Где каждое приложение хранит кэш в Windows",
        "columns": [
          "Приложение",
          "Папки кэша",
          "Что происходит после очистки"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache и GPUCache",
            "Изображения и файлы загружаются заново при первом обращении; вы остаётесь в аккаунте"
          ],
          [
            "Microsoft Teams (классический)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache и GPUCache",
            "Teams пересоздаёт кэш, и первый запуск может быть медленнее"
          ],
          [
            "Microsoft Teams (новый)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Кэш пересоздаётся; чаты и файлы остаются в вашей учётной записи"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data и Browser\\Cache",
            "Прослушанные треки кэшируются заново; офлайн-загрузки, возможно, придётся скачать снова"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache и GPUCache",
            "Редактор пересоздаёт кэши; расширения и настройки не затрагиваются"
          ]
        ]
      },
      "howTo": {
        "name": "Как очистить кэш приложений в Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Полностью закройте приложение",
            "text": "Закройте окно, затем щёлкните значок приложения в области уведомлений правой кнопкой мыши и выберите «Выход» или завершите процесс в Диспетчере задач. Закрытое окно не означает, что приложение остановлено: оно может работать в фоне."
          },
          {
            "name": "Откройте папку кэша",
            "text": "Нажмите клавишу Windows + R, вставьте путь к папке, например %APPDATA%\\discord, и нажмите Enter. Откройте внутри неё папки Cache, Code Cache и GPUCache."
          },
          {
            "name": "Удалите содержимое",
            "text": "Выделите всё, что находится внутри папок кэша, и удалите. Остальные папки не трогайте: в них могут храниться данные входа и настройки."
          },
          {
            "name": "Снова запустите приложение",
            "text": "Откройте приложение и пользуйтесь им как обычно. Первый запуск может быть немного медленнее, пока пересоздаётся кэш; ваш аккаунт и настройки на месте."
          },
          {
            "name": "Очистите всё сразу с помощью Disk Mop",
            "text": "Откройте Disk Mop, перейдите в раздел «Освободить место» и запустите сканирование. Отметьте Кэш Discord, Кэш Microsoft Teams, Кэш Spotify и Кэш VS Code, проверьте размеры и подтвердите."
          }
        ]
      },
      "faq": [
        {
          "question": "Выйду ли я из аккаунта, если очищу кэш Discord?",
          "answer": "Нет. Папки Cache, Code Cache и GPUCache содержат только загруженные изображения, скрипты и скомпилированный код. Данные входа и настройки хранятся в другом месте, поэтому вы остаётесь в аккаунте. Изображения в старых чатах при первом открытии могут загружаться чуть медленнее."
        },
        {
          "question": "Почему кэш Microsoft Teams такой большой?",
          "answer": "Teams хранит копии изображений, файлов, эскизов и веб-содержимого из ваших чатов и встреч, чтобы быстро их показывать. В активной учётной записи эти файлы набирают гигабайты и лежат, пока вы их не удалите."
        },
        {
          "question": "Пропадут ли офлайн-треки, если очистить кэш Spotify?",
          "answer": "Возможно. Spotify хранит прослушанные и скачанные треки в связанных папках хранилища, поэтому очистка может удалить офлайн-загрузки. Ваши плейлисты и медиатека находятся в аккаунте и не пострадают; треки можно скачать снова."
        },
        {
          "question": "Безопасно ли удалять кэш VS Code?",
          "answer": "Да. Cache, CachedData, CachedExtensionVSIXs, Code Cache и GPUCache редактор пересоздаёт сам. Настройки, расширения и рабочие области хранятся в других папках и не затрагиваются."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify и VS Code построены на веб-технологиях, и каждое из них хранит на диске кэш изображений, скриптов и загруженных файлов. Эти кэши можно безопасно очищать: закройте приложение, удалите содержимое его папок кэша и запустите снова. Приложение пересоздаст всё необходимое, вы останетесь в аккаунте, а место освободится — на ежедневно используемом ПК это часто несколько гигабайт на каждое приложение.",
        "В этом руководстве перечислены точные папки для каждого приложения, объясняется, что хранит каждый кэш и что меняется после его очистки, а также показано, как очистить все четыре сразу. Отдельно рассмотрен случай, требующий предупреждения: офлайн-треки Spotify."
      ],
      "sections": [
        {
          "title": "Почему эти приложения забивают диск",
          "content": [
            "Приложения для чатов, видеосвязи и музыки хранят локальную копию всего, что они вам показали. Discord сохраняет изображения и вложения с серверов, которые вы читаете. Teams хранит эскизы, файлы и веб-содержимое из чатов и встреч. Spotify сохраняет прослушанные треки, чтобы они запускались быстрее, а VS Code кэширует скомпилированный код, пакеты расширений и графические данные.",
            "Ни один из этих кэшей не обрезается агрессивно. Приложения продолжают его наращивать, пока не достигнут лимита, а иногда и вовсе без чёткого лимита. После года ежедневного использования в одном приложении нередко набирается несколько гигабайт, разбросанных по папкам, которые легко не заметить в AppData.",
            "Кэш нужен лишь для удобства, поэтому приложение всегда может скачать или создать его заново. Именно поэтому очистка малорискованна, если выполнять её при закрытом приложении."
          ]
        },
        {
          "title": "Discord и Microsoft Teams",
          "content": [
            "Discord хранит кэш в %APPDATA%\\discord. Важны папки Cache, Code Cache и GPUCache. Их очистка удаляет загруженные изображения, скрипты и графические данные. Вы остаётесь в аккаунте, а при первом открытии старого канала его изображения загрузятся заново.",
            "У Teams две версии. Классический Teams хранит кэш в %APPDATA%\\Microsoft\\Teams, в папках Cache, Code Cache и GPUCache. Новый Teams хранит данные в %LOCALAPPDATA%\\Packages, в папке, имя которой начинается с MSTeams_, в подпапке LocalCache. Чаты, файлы и встречи остаются в вашей учётной записи Microsoft 365, поэтому удаляются только локальные копии.",
            "Сначала выйдите из Teams через значок в области уведомлений: если просто закрыть окно, приложение продолжит работать и будет пересоздавать файлы прямо во время удаления."
          ]
        },
        {
          "title": "Spotify: кэш и офлайн-загрузки",
          "content": [
            "Spotify хранит данные в %LOCALAPPDATA%\\Spotify. В папке Storage лежат кэшированные треки, в Data — дополнительные кэшированные данные, а в Browser\\Cache — кэш веб-компонента. Прослушанные треки кэшируются, чтобы воспроизведение начиналось без задержки.",
            "Плейлисты, скачанные для прослушивания офлайн, находятся в той же области хранения, поэтому очистка может их удалить. Ваши плейлисты, медиатека и аккаунт не пострадают, так как хранятся онлайн, но офлайн-треки придётся скачать заново. Если вы часто слушаете музыку офлайн, сначала проверьте место загрузки в настройках Spotify.",
            "Если вы хотите лишь уменьшить кэш, сначала откройте раздел «Хранилище» в самих настройках Spotify: именно там приложение управляет кэшем и расположением офлайн-хранилища."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code хранит несколько кэшей в %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache и GPUCache. В CachedData лежит скомпилированный код, в CachedExtensionVSIXs — пакеты расширений, скачанные для установки, а в остальных — веб-данные и графические данные.",
            "Их удаление не затрагивает расширения, настройки, сочетания клавиш и рабочие области: они хранятся в других папках, таких как User и extensions. После очистки кэша редактор один раз запустится чуть медленнее, а затем всё будет как прежде.",
            "Перед удалением закройте все окна VS Code, включая те, что спрятались на другом виртуальном рабочем столе."
          ]
        },
        {
          "title": "Очистите все четыре кэша сразу с помощью Disk Mop",
          "content": [
            "Вручную придётся обойти около десятка папок. На странице «Освободить место» Disk Mop перечислены Кэш Discord, Кэш Microsoft Teams, Кэш Spotify и Кэш VS Code — отдельными пунктами, у каждого указан размер и пометка, что приложение пересоздаст данные, а аккаунт и настройки останутся.",
            "Запустите сканирование, отметьте нужные приложения и подтвердите. Disk Mop показывает найденное до того, как что-либо удалить. Сканирование бесплатно, поэтому можно заранее увидеть, сколько занимает каждое приложение. Перед началом закройте приложения: файлы, которые используются, пропускаются.",
            "Со временем эти кэши снова растут. Инструмент очистки по расписанию может в фоновом режиме повторять безопасные пункты раздела «Освободить место», чтобы кэш больше не накапливался."
          ]
        }
      ],
      "verdict": [
        "Кэши Discord, Microsoft Teams, Spotify и VS Code — это временные данные, которые приложения пересоздают, поэтому очистка безопасна, если приложение полностью закрыто. Аккаунт и настройки сохраняются; стоит ожидать лишь чуть более медленного первого запуска и повторной загрузки офлайн-треков в Spotify.",
        "Disk Mop находит все четыре кэша за одно сканирование, показывает размер каждого и спрашивает подтверждение перед удалением. Сканирование бесплатно, так что вы можете сначала увидеть, куда ушло место, и только потом решать."
      ],
      "ctaText": "Очистить кэш Discord, Teams, Spotify и VS Code в Disk Mop"
    },
    "th": {
      "title": "วิธีล้างแคช Discord, Teams, Spotify และ VS Code บน Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify และ VS Code ต่างเก็บแคชที่อาจใหญ่ถึงหลาย GB ดูว่าแคชอยู่ที่ไหน การล้างส่งผลอย่างไร และวิธีล้างอย่างปลอดภัย",
      "subtitle": "ได้พื้นที่หลาย GB คืนจากแคชของแอปแชท เพลง และเอดิเตอร์ โดยไม่เสียบัญชีหรือการตั้งค่า",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify และ VS Code เก็บไฟล์แคชที่แอปสร้างขึ้นใหม่ได้เอง การล้างแคชช่วยเพิ่มพื้นที่ว่าง ไม่ทำให้คุณออกจากระบบ และไม่ลบการตั้งค่า",
        "ปิดแอปให้สนิทก่อนล้างแคช เพราะไฟล์ที่กำลังใช้งานอยู่ลบไม่ได้ และแอปอาจสร้างไฟล์ขึ้นมาใหม่ทันที",
        "Spotify เก็บแคชและเพลงที่ดาวน์โหลดไว้ฟังออฟไลน์ไว้ในโฟลเดอร์ที่เกี่ยวข้องกัน ดังนั้นหลังล้างแคชอาจต้องดาวน์โหลดเพลงออฟไลน์ใหม่"
      ],
      "dataTable": {
        "caption": "ตำแหน่งที่แต่ละแอปเก็บแคชบน Windows",
        "columns": [
          "แอป",
          "โฟลเดอร์แคช",
          "สิ่งที่เกิดขึ้นหลังล้างแคช"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache และ GPUCache",
            "รูปภาพและไฟล์จะโหลดใหม่เมื่อใช้ครั้งแรก คุณยังคงลงชื่อเข้าใช้อยู่"
          ],
          [
            "Microsoft Teams (แบบคลาสสิก)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache และ GPUCache",
            "Teams สร้างแคชขึ้นใหม่ และอาจเริ่มทำงานช้าลงเพียงครั้งเดียว"
          ],
          [
            "Microsoft Teams (ใหม่)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "แคชถูกสร้างขึ้นใหม่ แชทและไฟล์ยังอยู่ในบัญชีของคุณ"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data และ Browser\\Cache",
            "เพลงที่สตรีมจะถูกแคชใหม่ เพลงที่ดาวน์โหลดไว้ฟังออฟไลน์อาจต้องดาวน์โหลดอีกครั้ง"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache และ GPUCache",
            "เอดิเตอร์สร้างแคชขึ้นใหม่ ส่วนขยายและการตั้งค่าไม่ได้รับผลกระทบ"
          ]
        ]
      },
      "howTo": {
        "name": "วิธีล้างแคชของแอปบน Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "ออกจากแอปให้สนิท",
            "text": "ปิดหน้าต่าง จากนั้นคลิกขวาที่ไอคอนของแอปในถาดระบบแล้วเลือกออก (Quit) หรือสิ้นสุดโพรเซสในตัวจัดการงาน หน้าต่างที่ปิดไปแล้วอาจยังทำงานอยู่เบื้องหลัง"
          },
          {
            "name": "เปิดโฟลเดอร์แคช",
            "text": "กดปุ่ม Windows + R วางพาธของโฟลเดอร์ เช่น %APPDATA%\\discord แล้วกด Enter จากนั้นเปิดโฟลเดอร์ Cache, Code Cache และ GPUCache ที่อยู่ข้างใน"
          },
          {
            "name": "ลบเนื้อหา",
            "text": "เลือกทุกอย่างในโฟลเดอร์แคชแล้วลบ อย่าแตะโฟลเดอร์อื่น เพราะอาจเก็บข้อมูลการลงชื่อเข้าใช้และการตั้งค่าของคุณไว้"
          },
          {
            "name": "เปิดแอปอีกครั้ง",
            "text": "เปิดแอปและใช้งานตามปกติ การเปิดครั้งแรกอาจช้าลงเล็กน้อยขณะที่แอปสร้างแคชขึ้นใหม่ ส่วนบัญชีและการตั้งค่าของคุณยังอยู่ครบ"
          },
          {
            "name": "ล้างทั้งหมดในครั้งเดียวด้วย Disk Mop",
            "text": "เปิด Disk Mop ไปที่เพิ่มพื้นที่ว่าง แล้วเริ่มการสแกน ทำเครื่องหมายแคช Discord, แคช Microsoft Teams, แคช Spotify และแคช VS Code ตรวจสอบขนาด แล้วยืนยัน"
          }
        ]
      },
      "faq": [
        {
          "question": "การล้างแคช Discord จะทำให้ฉันออกจากระบบไหม",
          "answer": "ไม่ โฟลเดอร์ Cache, Code Cache และ GPUCache เก็บเพียงรูปภาพ สคริปต์ และโค้ดที่คอมไพล์แล้วซึ่งดาวน์โหลดมา ข้อมูลล็อกอินและการตั้งค่าของคุณเก็บไว้ที่อื่น คุณจึงยังคงลงชื่อเข้าใช้อยู่ รูปภาพในแชทเก่าอาจโหลดช้าลงเล็กน้อยเมื่อเปิดครั้งแรก"
        },
        {
          "question": "ทำไมแคช Microsoft Teams จึงใหญ่มาก",
          "answer": "Teams เก็บสำเนารูปภาพ ไฟล์ ภาพขนาดย่อ และเนื้อหาเว็บจากแชทและการประชุมของคุณ เพื่อให้แสดงผลได้เร็ว ในบัญชีที่ใช้งานหนัก ไฟล์เหล่านี้สะสมจนเป็นหลาย GB และจะอยู่ต่อไปจนกว่าคุณจะล้าง"
        },
        {
          "question": "ถ้าล้างแคช Spotify เพลงออฟไลน์ของฉันจะหายไหม",
          "answer": "อาจหาย Spotify เก็บเพลงที่สตรีมและเพลงที่ดาวน์โหลดไว้ในโฟลเดอร์พื้นที่จัดเก็บที่เกี่ยวข้องกัน การล้างพื้นที่จัดเก็บนั้นจึงอาจลบเพลงที่ดาวน์โหลดไว้ฟังออฟไลน์ได้ เพลย์ลิสต์และคลังเพลงของคุณอยู่ในบัญชีและไม่ได้รับผลกระทบ และคุณดาวน์โหลดเพลงใหม่ได้"
        },
        {
          "question": "การลบแคช VS Code ปลอดภัยไหม",
          "answer": "ปลอดภัย Cache, CachedData, CachedExtensionVSIXs, Code Cache และ GPUCache จะถูกเอดิเตอร์สร้างขึ้นใหม่ การตั้งค่า ส่วนขยาย และเวิร์กสเปซของคุณเก็บอยู่ในโฟลเดอร์อื่นและไม่ได้รับผลกระทบ"
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify และ VS Code ล้วนสร้างขึ้นด้วยเทคโนโลยีเว็บ และต่างเก็บแคชของรูปภาพ สคริปต์ และไฟล์ที่ดาวน์โหลดไว้ในไดรฟ์ของคุณ คุณล้างแคชเหล่านี้ได้อย่างปลอดภัย โดยปิดแอป ลบเนื้อหาในโฟลเดอร์แคช แล้วเปิดแอปใหม่ แอปจะสร้างสิ่งที่ต้องใช้ขึ้นใหม่ คุณยังคงลงชื่อเข้าใช้อยู่ และได้พื้นที่คืน ซึ่งมักเป็นหลาย GB ต่อแอปบนพีซีที่ใช้งานทุกวัน",
        "คู่มือนี้ระบุโฟลเดอร์ที่แน่ชัดของแต่ละแอป อธิบายว่าแคชแต่ละอย่างเก็บอะไรและมีอะไรเปลี่ยนไปหลังล้าง และแสดงวิธีล้างทั้งสี่แอปในครั้งเดียว รวมถึงกรณีเดียวที่ต้องระวัง นั่นคือเพลงออฟไลน์ของ Spotify"
      ],
      "sections": [
        {
          "title": "ทำไมแอปเหล่านี้ถึงกินพื้นที่ไดรฟ์",
          "content": [
            "แอปแชท วิดีโอ และเพลงเก็บสำเนาในเครื่องของทุกสิ่งที่เคยแสดงให้คุณดู Discord เก็บรูปภาพและไฟล์แนบจากเซิร์ฟเวอร์ที่คุณอ่าน Teams เก็บภาพขนาดย่อ ไฟล์ และเนื้อหาเว็บจากแชทและการประชุม Spotify บันทึกเพลงที่เคยสตรีมไว้เพื่อให้เริ่มเล่นได้เร็วขึ้น ส่วน VS Code แคชโค้ดที่คอมไพล์แล้ว แพ็กเกจส่วนขยาย และข้อมูลกราฟิก",
            "แคชเหล่านี้ไม่มีตัวไหนถูกตัดทอนอย่างจริงจัง แอปปล่อยให้แคชโตขึ้นเรื่อย ๆ จนถึงขีดจำกัด หรือในบางกรณีก็ไม่มีขีดจำกัดที่ชัดเจน หลังใช้งานทุกวันมาหนึ่งปี การพบแคชหลาย GB ในแอปเดียวเป็นเรื่องปกติ กระจายอยู่ในโฟลเดอร์ที่มองข้ามได้ง่ายใน AppData",
            "เนื่องจากแคชเป็นเพียงส่วนเสริมเพื่อความสะดวก แอปจึงดาวน์โหลดหรือสร้างขึ้นใหม่ได้เสมอ นั่นคือเหตุผลที่การล้างแคชมีความเสี่ยงต่ำ ตราบใดที่คุณทำขณะที่แอปปิดอยู่"
          ]
        },
        {
          "title": "Discord และ Microsoft Teams",
          "content": [
            "Discord เก็บแคชไว้ใน %APPDATA%\\discord โฟลเดอร์ที่เกี่ยวข้องคือ Cache, Code Cache และ GPUCache การล้างจะลบรูปภาพ สคริปต์ และข้อมูลกราฟิกที่ดาวน์โหลดไว้ คุณยังคงลงชื่อเข้าใช้อยู่ และเมื่อเปิดช่องเก่าครั้งแรก รูปภาพในช่องนั้นจะโหลดใหม่",
            "Teams มีสองเวอร์ชัน Teams แบบคลาสสิกเก็บแคชไว้ใน %APPDATA%\\Microsoft\\Teams ในโฟลเดอร์ Cache, Code Cache และ GPUCache ส่วน Teams ใหม่เก็บข้อมูลไว้ใต้ %LOCALAPPDATA%\\Packages ในโฟลเดอร์ที่ชื่อขึ้นต้นด้วย MSTeams_ ภายในโฟลเดอร์ย่อยชื่อ LocalCache แชท ไฟล์ และการประชุมยังอยู่ในบัญชี Microsoft 365 ของคุณ จึงลบเฉพาะสำเนาในเครื่อง",
            "ให้ออกจาก Teams จากไอคอนในถาดระบบก่อน หากเพียงปิดหน้าต่าง แอปจะยังทำงานต่อและสร้างไฟล์ขึ้นใหม่ขณะที่คุณกำลังลบ"
          ]
        },
        {
          "title": "Spotify: แคชและเพลงที่ดาวน์โหลดไว้ฟังออฟไลน์",
          "content": [
            "Spotify เก็บข้อมูลไว้ใน %LOCALAPPDATA%\\Spotify โฟลเดอร์ Storage เก็บเพลงที่แคชไว้ Data เก็บข้อมูลแคชเพิ่มเติม และ Browser\\Cache เก็บแคชของมุมมองเว็บ เพลงที่เคยสตรีมจะถูกแคชไว้เพื่อให้เริ่มเล่นได้โดยไม่ล่าช้า",
            "เพลย์ลิสต์ที่ดาวน์โหลดไว้ฟังออฟไลน์อยู่ในพื้นที่จัดเก็บเดียวกัน การล้างจึงอาจลบเพลย์ลิสต์เหล่านั้นด้วย เพลย์ลิสต์ คลังเพลง และบัญชีของคุณไม่ได้รับผลกระทบ เพราะเก็บไว้ออนไลน์ แต่คุณจะต้องดาวน์โหลดเพลงออฟไลน์ใหม่ หากคุณพึ่งพาการฟังแบบออฟไลน์ ให้ตรวจสอบตำแหน่งดาวน์โหลดในการตั้งค่าของ Spotify ก่อน",
            "หากต้องการเพียงลดขนาดแคช ให้ดูส่วนพื้นที่จัดเก็บในการตั้งค่าของ Spotify เองก่อน ซึ่งเป็นที่ที่แอปจัดการแคชและตำแหน่งพื้นที่จัดเก็บออฟไลน์"
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code เก็บแคชหลายอย่างไว้ใน %APPDATA%\\Code ได้แก่ Cache, CachedData, CachedExtensionVSIXs, Code Cache และ GPUCache โดย CachedData เก็บโค้ดที่คอมไพล์แล้ว CachedExtensionVSIXs เก็บแพ็กเกจส่วนขยายที่ดาวน์โหลดไว้สำหรับติดตั้ง ส่วนที่เหลือเก็บข้อมูลเว็บและกราฟิก",
            "การลบแคชเหล่านี้ไม่ลบส่วนขยาย การตั้งค่า คีย์ลัด หรือเวิร์กสเปซของคุณ เพราะสิ่งเหล่านั้นอยู่ในโฟลเดอร์อื่น เช่น User และ extensions หลังล้างแคช เอดิเตอร์จะเริ่มทำงานช้าลงเล็กน้อยเพียงครั้งเดียว แล้วก็กลับมาเหมือนเดิม",
            "ปิดหน้าต่าง VS Code ทุกหน้าต่างก่อนลบอะไรก็ตาม รวมถึงหน้าต่างที่ซ่อนอยู่ในเดสก์ท็อปเสมือนอื่น"
          ]
        },
        {
          "title": "ล้างทั้งสี่ในครั้งเดียวด้วย Disk Mop",
          "content": [
            "การทำด้วยตนเองหมายถึงต้องเปิดโฟลเดอร์เป็นสิบ ๆ แห่ง หน้าเพิ่มพื้นที่ว่างของ Disk Mop แสดงแคช Discord, แคช Microsoft Teams, แคช Spotify และแคช VS Code เป็นรายการแยกกัน แต่ละรายการมีขนาดและหมายเหตุว่าแอปจะสร้างข้อมูลขึ้นใหม่ และบัญชีกับการตั้งค่าของคุณยังอยู่ครบ",
            "เริ่มสแกน ทำเครื่องหมายแอปที่ต้องการ แล้วยืนยัน Disk Mop จะแสดงสิ่งที่พบก่อนลบอะไรก็ตาม การสแกนไม่มีค่าใช้จ่าย คุณจึงดูก่อนได้ว่าแต่ละแอปใช้พื้นที่เท่าไร ปิดแอปก่อนเริ่ม ไฟล์ที่กำลังใช้งานอยู่จะถูกข้าม",
            "แคชเหล่านี้จะโตขึ้นอีกเมื่อเวลาผ่านไป เครื่องมือล้างตามกำหนดเวลาสามารถทำซ้ำรายการที่ปลอดภัยของเพิ่มพื้นที่ว่างเบื้องหลัง เพื่อไม่ให้แคชสะสมอีก"
          ]
        }
      ],
      "verdict": [
        "แคชของ Discord, Microsoft Teams, Spotify และ VS Code เป็นข้อมูลชั่วคราวที่แอปสร้างขึ้นใหม่ได้ จึงล้างได้อย่างปลอดภัยตราบใดที่ปิดแอปสนิท คุณยังคงบัญชีและการตั้งค่าไว้ สิ่งที่ต้องคาดไว้มีเพียงการเปิดครั้งแรกที่ช้าลงเล็กน้อย และการดาวน์โหลดเพลงออฟไลน์ใน Spotify ใหม่",
        "Disk Mop พบแคชทั้งสี่ในการสแกนครั้งเดียว แสดงขนาดของแต่ละอัน และถามก่อนลบอะไรก็ตาม การสแกนไม่มีค่าใช้จ่าย คุณจึงดูได้ก่อนว่าพื้นที่หายไปไหนแล้วค่อยตัดสินใจ"
      ],
      "ctaText": "ล้างแคช Discord, Teams, Spotify และ VS Code ด้วย Disk Mop"
    },
    "vi": {
      "title": "Cách xóa bộ nhớ đệm Discord, Teams, Spotify và VS Code trên Windows",
      "metaDescription": "Discord, Microsoft Teams, Spotify và VS Code đều lưu bộ nhớ đệm có thể lên tới vài GB. Xem vị trí, tác dụng của việc xóa và cách thực hiện an toàn trên Windows.",
      "subtitle": "Giải phóng hàng GB từ bộ nhớ đệm của ứng dụng chat, nhạc và trình soạn thảo mà không mất tài khoản hay cài đặt",
      "keyTakeaways": [
        "Discord, Microsoft Teams, Spotify và VS Code lưu các tệp bộ nhớ đệm mà ứng dụng tự tạo lại; xóa chúng giúp giải phóng dung lượng, không đăng xuất bạn và không xóa cài đặt.",
        "Hãy thoát hẳn ứng dụng trước khi xóa bộ nhớ đệm, vì tệp đang được sử dụng không thể xóa và ứng dụng có thể tạo lại ngay lập tức.",
        "Spotify lưu bộ nhớ đệm và các bản tải xuống ngoại tuyến trong những thư mục liên quan, nên sau khi xóa, bạn có thể phải tải lại các bài hát ngoại tuyến."
      ],
      "dataTable": {
        "caption": "Vị trí bộ nhớ đệm của từng ứng dụng trên Windows",
        "columns": [
          "Ứng dụng",
          "Thư mục bộ nhớ đệm",
          "Điều xảy ra sau khi xóa"
        ],
        "rows": [
          [
            "Discord",
            "%APPDATA%\\discord\\Cache, Code Cache và GPUCache",
            "Hình ảnh và tệp được tải lại ở lần dùng đầu tiên; bạn vẫn đăng nhập"
          ],
          [
            "Microsoft Teams (cổ điển)",
            "%APPDATA%\\Microsoft\\Teams\\Cache, Code Cache và GPUCache",
            "Teams tạo lại bộ nhớ đệm và có thể khởi động chậm hơn một lần"
          ],
          [
            "Microsoft Teams (mới)",
            "%LOCALAPPDATA%\\Packages\\MSTeams_...\\LocalCache",
            "Bộ nhớ đệm được tạo lại; cuộc trò chuyện và tệp vẫn nằm trong tài khoản của bạn"
          ],
          [
            "Spotify",
            "%LOCALAPPDATA%\\Spotify\\Storage, Data và Browser\\Cache",
            "Các bài hát phát trực tuyến được lưu đệm lại; bản tải xuống ngoại tuyến có thể phải tải lại"
          ],
          [
            "Visual Studio Code",
            "%APPDATA%\\Code\\Cache, CachedData, CachedExtensionVSIXs, Code Cache và GPUCache",
            "Trình soạn thảo tạo lại bộ nhớ đệm; tiện ích mở rộng và cài đặt không bị ảnh hưởng"
          ]
        ]
      },
      "howTo": {
        "name": "Cách xóa bộ nhớ đệm của ứng dụng trên Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Thoát hẳn ứng dụng",
            "text": "Đóng cửa sổ, sau đó nhấp chuột phải vào biểu tượng ứng dụng ở khay hệ thống và chọn Quit (Thoát), hoặc kết thúc tiến trình trong Task Manager. Cửa sổ đã đóng vẫn có thể đang chạy ngầm."
          },
          {
            "name": "Mở thư mục bộ nhớ đệm",
            "text": "Nhấn phím Windows + R, dán đường dẫn thư mục, ví dụ %APPDATA%\\discord, rồi nhấn Enter. Mở các thư mục Cache, Code Cache và GPUCache bên trong."
          },
          {
            "name": "Xóa nội dung",
            "text": "Chọn mọi thứ bên trong các thư mục bộ nhớ đệm rồi xóa. Đừng động đến các thư mục khác, vì chúng có thể chứa thông tin đăng nhập và cài đặt của bạn."
          },
          {
            "name": "Mở lại ứng dụng",
            "text": "Mở ứng dụng và dùng bình thường. Lần khởi động đầu có thể chậm hơn một chút trong lúc tạo lại bộ nhớ đệm, còn tài khoản và cài đặt của bạn vẫn còn nguyên."
          },
          {
            "name": "Xóa tất cả cùng lúc bằng Disk Mop",
            "text": "Mở Disk Mop, vào Giải phóng dung lượng rồi chạy quét. Đánh dấu Bộ nhớ đệm Discord, Bộ nhớ đệm Microsoft Teams, Bộ nhớ đệm Spotify và Bộ nhớ đệm VS Code, kiểm tra dung lượng rồi xác nhận."
          }
        ]
      },
      "faq": [
        {
          "question": "Xóa bộ nhớ đệm Discord có làm tôi bị đăng xuất không?",
          "answer": "Không. Các thư mục Cache, Code Cache và GPUCache chỉ chứa hình ảnh, tập lệnh và mã đã biên dịch được tải về. Thông tin đăng nhập và cài đặt của bạn được lưu ở nơi khác, nên bạn vẫn đăng nhập. Hình ảnh trong các cuộc trò chuyện cũ có thể tải chậm hơn một chút ở lần mở đầu tiên."
        },
        {
          "question": "Tại sao bộ nhớ đệm Microsoft Teams lại lớn như vậy?",
          "answer": "Teams lưu bản sao hình ảnh, tệp, hình thu nhỏ và nội dung web từ các cuộc trò chuyện và cuộc họp của bạn để hiển thị nhanh. Với tài khoản hoạt động nhiều, các tệp này cộng lại thành hàng GB và tồn tại cho đến khi bạn xóa."
        },
        {
          "question": "Tôi có mất bài hát ngoại tuyến nếu xóa bộ nhớ đệm Spotify không?",
          "answer": "Có thể. Spotify lưu bài hát phát trực tuyến và bài hát đã tải xuống trong các thư mục lưu trữ liên quan, nên xóa vùng lưu trữ đó có thể làm mất các bản tải xuống ngoại tuyến. Danh sách phát và thư viện của bạn nằm trong tài khoản nên không bị ảnh hưởng, và bạn có thể tải lại các bài hát."
        },
        {
          "question": "Xóa bộ nhớ đệm VS Code có an toàn không?",
          "answer": "Có. Cache, CachedData, CachedExtensionVSIXs, Code Cache và GPUCache sẽ được trình soạn thảo tạo lại. Cài đặt, tiện ích mở rộng và không gian làm việc của bạn nằm trong các thư mục khác và không bị đụng đến."
        }
      ],
      "intro": [
        "Discord, Microsoft Teams, Spotify và VS Code đều xây dựng trên công nghệ web, và mỗi ứng dụng lưu một bộ nhớ đệm gồm hình ảnh, tập lệnh và tệp đã tải về trên ổ đĩa của bạn. Bạn có thể xóa các bộ nhớ đệm này một cách an toàn: thoát ứng dụng, xóa nội dung các thư mục bộ nhớ đệm rồi mở lại. Ứng dụng sẽ tạo lại những gì cần thiết, bạn vẫn đăng nhập và dung lượng được trả lại, thường là vài GB mỗi ứng dụng trên một máy tính dùng hằng ngày.",
        "Hướng dẫn này liệt kê chính xác các thư mục của từng ứng dụng, giải thích mỗi bộ nhớ đệm chứa gì và điều gì thay đổi sau khi xóa, đồng thời chỉ cách xóa cả bốn cùng lúc. Bài cũng đề cập một trường hợp cần cảnh báo: các bài hát ngoại tuyến của Spotify."
      ],
      "sections": [
        {
          "title": "Vì sao các ứng dụng này làm đầy ổ đĩa của bạn",
          "content": [
            "Các ứng dụng chat, video và nhạc giữ một bản sao cục bộ của mọi thứ chúng đã hiển thị cho bạn. Discord lưu hình ảnh và tệp đính kèm từ các máy chủ bạn đọc. Teams lưu hình thu nhỏ, tệp và nội dung web từ cuộc trò chuyện và cuộc họp. Spotify lưu các bài hát đã phát trực tuyến để lần sau bắt đầu nhanh hơn, còn VS Code lưu đệm mã đã biên dịch, gói tiện ích mở rộng và dữ liệu đồ họa.",
            "Không bộ nhớ đệm nào trong số này bị cắt giảm mạnh tay. Các ứng dụng cứ để chúng lớn dần cho đến khi chạm giới hạn, hoặc trong một số trường hợp là không có giới hạn rõ ràng. Sau một năm dùng hằng ngày, việc tìm thấy vài GB trong một ứng dụng là điều thường gặp, nằm rải rác trong những thư mục dễ bị bỏ sót ở AppData.",
            "Vì bộ nhớ đệm chỉ là tiện ích bổ trợ, ứng dụng luôn có thể tải hoặc tạo lại nó. Đó là lý do xóa nó rất ít rủi ro, miễn là bạn làm khi ứng dụng đã đóng."
          ]
        },
        {
          "title": "Discord và Microsoft Teams",
          "content": [
            "Discord lưu bộ nhớ đệm trong %APPDATA%\\discord. Các thư mục cần quan tâm là Cache, Code Cache và GPUCache. Xóa chúng sẽ loại bỏ hình ảnh, tập lệnh và dữ liệu đồ họa đã tải về. Bạn vẫn đăng nhập, và lần đầu mở một kênh cũ, hình ảnh của nó sẽ được tải lại.",
            "Teams có hai phiên bản. Teams cổ điển lưu bộ nhớ đệm trong %APPDATA%\\Microsoft\\Teams, ở các thư mục Cache, Code Cache và GPUCache. Teams mới lưu dữ liệu trong %LOCALAPPDATA%\\Packages, ở thư mục có tên bắt đầu bằng MSTeams_, trong thư mục con LocalCache. Cuộc trò chuyện, tệp và cuộc họp vẫn nằm trong tài khoản Microsoft 365 của bạn, nên chỉ các bản sao cục bộ bị xóa.",
            "Hãy thoát Teams từ biểu tượng ở khay hệ thống trước; nếu chỉ đóng cửa sổ, ứng dụng vẫn chạy và tạo lại tệp trong khi bạn đang xóa."
          ]
        },
        {
          "title": "Spotify: bộ nhớ đệm và bản tải xuống ngoại tuyến",
          "content": [
            "Spotify lưu dữ liệu trong %LOCALAPPDATA%\\Spotify. Thư mục Storage chứa các bài hát đã lưu đệm, Data chứa dữ liệu đệm bổ sung, và Browser\\Cache chứa bộ nhớ đệm của khung web. Các bài hát đã phát trực tuyến được lưu đệm để bắt đầu mà không bị trễ.",
            "Danh sách phát tải xuống để nghe ngoại tuyến nằm trong cùng khu vực lưu trữ, nên xóa nó có thể làm mất chúng. Danh sách phát, thư viện và tài khoản của bạn không bị ảnh hưởng vì được lưu trực tuyến, nhưng bạn sẽ phải tải lại các bài hát ngoại tuyến. Nếu bạn thường nghe ngoại tuyến, hãy kiểm tra vị trí tải xuống trong phần cài đặt của Spotify trước.",
            "Nếu chỉ muốn thu nhỏ bộ nhớ đệm, hãy xem trước mục Lưu trữ trong chính phần cài đặt của Spotify, nơi ứng dụng quản lý bộ nhớ đệm và vị trí lưu trữ ngoại tuyến."
          ]
        },
        {
          "title": "Visual Studio Code",
          "content": [
            "VS Code lưu nhiều bộ nhớ đệm trong %APPDATA%\\Code: Cache, CachedData, CachedExtensionVSIXs, Code Cache và GPUCache. CachedData chứa mã đã biên dịch, CachedExtensionVSIXs chứa các gói tiện ích mở rộng được tải về để cài đặt, còn các thư mục còn lại chứa dữ liệu web và đồ họa.",
            "Xóa chúng không làm mất tiện ích mở rộng, cài đặt, phím tắt hay không gian làm việc của bạn; những thứ đó nằm ở các thư mục khác như User và extensions. Sau khi xóa bộ nhớ đệm, trình soạn thảo khởi động chậm hơn một chút một lần, rồi mọi thứ trở lại như cũ.",
            "Hãy đóng mọi cửa sổ VS Code trước khi xóa bất cứ thứ gì, kể cả các cửa sổ đang ẩn ở một màn hình nền ảo khác."
          ]
        },
        {
          "title": "Xóa cả bốn cùng lúc bằng Disk Mop",
          "content": [
            "Làm thủ công nghĩa là phải ghé thăm cả chục thư mục. Trang Giải phóng dung lượng của Disk Mop liệt kê Bộ nhớ đệm Discord, Bộ nhớ đệm Microsoft Teams, Bộ nhớ đệm Spotify và Bộ nhớ đệm VS Code thành các mục riêng, mỗi mục kèm dung lượng và ghi chú rằng ứng dụng sẽ tạo lại dữ liệu còn tài khoản và cài đặt của bạn được giữ nguyên.",
            "Chạy quét, đánh dấu các ứng dụng bạn muốn rồi xác nhận. Disk Mop hiển thị những gì tìm thấy trước khi xóa bất cứ thứ gì. Quét miễn phí, nên bạn có thể xem trước mỗi ứng dụng dùng bao nhiêu. Hãy thoát các ứng dụng trước khi bắt đầu; các tệp đang được sử dụng sẽ bị bỏ qua.",
            "Các bộ nhớ đệm này sẽ lớn dần trở lại theo thời gian. Công cụ dọn dẹp theo lịch có thể lặp lại các mục an toàn trong Giải phóng dung lượng ở chế độ nền để chúng không tích tụ nữa."
          ]
        }
      ],
      "verdict": [
        "Bộ nhớ đệm của Discord, Microsoft Teams, Spotify và VS Code là dữ liệu tạm mà các ứng dụng tự tạo lại, nên xóa chúng là an toàn miễn là ứng dụng đã thoát hoàn toàn. Bạn vẫn giữ tài khoản và cài đặt; điều duy nhất cần lường trước là lần khởi động đầu chậm hơn một chút và việc tải lại các bài hát ngoại tuyến trong Spotify.",
        "Disk Mop tìm cả bốn bộ nhớ đệm chỉ trong một lần quét, hiển thị dung lượng của từng cái và hỏi xác nhận trước khi xóa bất cứ thứ gì. Quét miễn phí, nên bạn có thể xem dung lượng đã đi đâu trước khi quyết định."
      ],
      "ctaText": "Xóa bộ nhớ đệm Discord, Teams, Spotify và VS Code bằng Disk Mop"
    }
  },
};
