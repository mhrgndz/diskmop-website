import type { Article } from "../types";

export const xcodeDockerStorageMac: Article = {
  slug: "xcode-docker-storage-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-11-09",
  updated: "2026-11-09",
  readingTime: 7,
  content: {
    en: {
      title: "How to Free Space Used by Xcode, Simulators and Docker on Mac",
      metaDescription:
        "Xcode DerivedData, old simulators, device support files, archives and Docker images can take tens of gigabytes. Learn what each one is, what is safe to delete and how DiskMop cleans them.",
      subtitle:
        "Developer tools quietly fill a Mac: what to clear, what to keep, and what comes back",
      intro: [
        "Short answer: the biggest developer space hogs on a Mac are Xcode's DerivedData, simulator runtimes and old simulators, Device Support files from connected iPhones, build archives, and Docker's unused images and build cache. Most of them are rebuilt or downloaded again when needed, so clearing them is safe. DiskMop for Mac cleans them from Free up space and macOS space and says what happens for each item.",
        "This guide explains where each one lives, which can be cleared without a second thought, which cannot be recreated, and how to do it by hand or with DiskMop.",
      ],
      keyTakeaways: [
        "Xcode DerivedData and simulator caches are rebuilt by Xcode; the next build is slower once. Device Support files are copied again from the device when you connect it.",
        "Xcode archives are different: they hold the builds you released and are needed to symbolicate crash reports. DiskMop leaves them unticked and marks removal as impossible to undo.",
        "Simulator system images can be downloaded again in Xcode > Settings > Components, and old simulators whose image is gone cannot start anyway; DiskMop removes those with the system's own simctl tool.",
        "DiskMop's Docker item runs docker system prune: unused images, stopped containers, networks and build cache are removed, and volumes, where your data lives, are never touched.",
      ],
      dataTable: {
        caption:
          "Developer storage on a Mac: what it is and what happens if you clear it",
        columns: ["Item", "Where it lives", "If you clear it", "In DiskMop"],
        rows: [
          [
            "Xcode DerivedData",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode rebuilds it; one slower build",
            "Free up space, ticked by default",
          ],
          [
            "Simulator caches, runtimes and old simulators",
            "~/Library/Developer/CoreSimulator and system images",
            "Rebuilt or downloaded again; old simulators cannot start anyway",
            "Free up space and macOS space",
          ],
          [
            "Device Support files",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Copied again from the device on the next connection",
            "Free up space",
          ],
          [
            "Xcode archives",
            "~/Library/Developer/Xcode/Archives",
            "Cannot be recreated; needed for crash symbols",
            "Free up space, unticked, cannot be undone",
          ],
          [
            "Docker images and build cache",
            "Docker Desktop data",
            "Pulled or rebuilt when needed; volumes stay",
            "macOS space",
          ],
        ],
      },
      howTo: {
        name: "Free developer storage on a Mac with DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open Free up space",
            text: "Start DiskMop and choose Free up space. Xcode DerivedData and simulator caches appear when you have them.",
          },
          {
            name: "Read what each item says",
            text: "Every row explains what happens if you clean it. DerivedData is ticked; Xcode archives are not and are marked as impossible to undo.",
          },
          {
            name: "Open macOS space",
            text: "Choose macOS space for simulator system images, old simulators and Docker's unused images and build cache.",
          },
          {
            name: "Tick and clean",
            text: "Tick what you want gone and press the clean button. Make sure Docker is not in the middle of a build.",
          },
          {
            name: "Rebuild once",
            text: "Open your project in Xcode. The first build is slower while DerivedData is rebuilt; after that it is back to normal.",
          },
        ],
      },
      sections: [
        {
          title: "Why Developer Tools Take So Much Space",
          content: [
            "Xcode keeps intermediate build files so the next build is quick, copies debugging symbols from every device you connect, and installs a full system image for each simulator version. Docker keeps every image it ever pulled and a build cache that grows with each build. None of it is wrong; it is optimised for speed and never cleans up by itself.",
            "On a Mac with a 256 GB or 512 GB drive this is often the difference between a comfortable disk and a full one. If that sounds familiar, [what fills a Mac startup disk](/blog/mac-startup-disk-almost-full) covers the non-developer side.",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support and Archives",
          content: [
            "DerivedData holds intermediate files of your builds in ~/Library/Developer/Xcode/DerivedData. Deleting it is a standard fix for odd build errors and costs one slower build. Device Support, in ~/Library/Developer/Xcode/iOS DeviceSupport and the watchOS folder, holds symbols copied from iPhones and iPads you connected; Xcode copies them again the next time, which takes a few minutes.",
            "Archives, in ~/Library/Developer/Xcode/Archives, are the builds you made for release. You need them to symbolicate crash reports of released versions, and you cannot recreate the exact build, so DiskMop leaves them unticked and warns that removal cannot be undone. Clear only archives of versions you will never need to debug.",
          ],
        },
        {
          title: "Simulators and Runtimes",
          content: [
            "Each simulator version has a system image, often several gigabytes, which Xcode downloads and manages under Xcode > Settings > Components. You can download it again whenever you need it, so removing images for versions you no longer test is safe. Simulators whose system image is already gone cannot start, and the system's own tool, xcrun simctl delete unavailable, removes them.",
            "DiskMop does these through the same simctl tool, not by deleting system folders, and lists them under macOS space with a description of what happens. Simulator caches, which are temporary data the simulators rebuild on their next start, are on the Free up space page.",
          ],
        },
        {
          title: "Docker: Images, Build Cache and Volumes",
          content: [
            "docker system df shows what Docker uses; docker system prune removes stopped containers, unused networks and dangling images, and with the -a option all unused images. DiskMop's Docker item removes unused images, stopped containers, networks and build cache and never touches volumes, which is where databases and other data live. Docker downloads or rebuilds what it needs next time, so expect slower pulls once.",
            "This runs through Docker's own command, so Docker must be installed and not busy. Scanning is free; cleaning many items at once is part of DiskMop Pro, a one-time purchase, and the free version lets you try a few single removals. The developer items work in the version you download from diskmop.com. Package caches such as npm, Yarn, pip, Homebrew, CocoaPods, Gradle and Cargo are listed on Free up space and are unticked by default; your tools download them again. For other big files, see [how to find large files on Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Is it safe to delete Xcode DerivedData?",
          answer:
            "Yes. Xcode rebuilds it. The next build is slower once, and deleting DerivedData is a common fix for odd build errors.",
        },
        {
          question: "Can I delete Xcode archives?",
          answer:
            "Only if you will never need to debug those releases. Archives are needed to symbolicate crash reports and cannot be recreated, so DiskMop leaves them unticked and marks the removal as impossible to undo.",
        },
        {
          question: "Does DiskMop delete my Docker volumes?",
          answer:
            "No. It removes unused images, stopped containers, networks and build cache with docker system prune and never touches volumes, where your data is stored.",
        },
        {
          question: "How do I remove old iOS simulators?",
          answer:
            "Delete simulator system images you no longer test in Xcode > Settings > Components, and run xcrun simctl delete unavailable for simulators whose image is gone. DiskMop lists both under macOS space.",
        },
      ],
      verdict: [
        "Developer tools quietly turn a 256 GB or 512 GB Mac into a full one. Most of what they keep is rebuilt or downloaded again, and the one thing that is not, Xcode archives, deserves a deliberate decision.",
        "DiskMop for Mac cleans DerivedData, simulators, Device Support and Docker's unused data, explains each item first and leaves your volumes and archives alone unless you tick them. Scanning is free, so you can see the size before you decide.",
      ],
      ctaText: "Reclaim Xcode and Docker space on your Mac with DiskMop",
    },
    tr: {
      title:
        "Mac'te Xcode, Simülatörler ve Docker'ın Kapladığı Yer Nasıl Boşaltılır",
      metaDescription:
        "Xcode DerivedData, eski simülatörler, Device Support, arşivler ve Docker imajları onlarca GB tutabilir. Neyin güvenle silinebileceğini ve DiskMop'un nasıl temizlediğini öğrenin.",
      subtitle:
        "Geliştirici araçları Mac'i sessizce doldurur: neyi silmeli, neyi tutmalı ve ne geri gelir",
      intro: [
        "Kısa cevap: Mac'te en büyük geliştirici yer tüketicileri Xcode'un DerivedData'sı, simülatör çalışma zamanları ve eski simülatörler, bağladığınız iPhone'ların Device Support dosyaları, derleme arşivleri ve Docker'ın kullanılmayan imajları ile derleme önbelleğidir. Çoğu gerektiğinde yeniden oluşturulur veya indirilir, bu yüzden temizlemek güvenlidir. Mac için DiskMop bunları Yer aç ve macOS alanı sayfalarından temizler ve her öğe için ne olacağını söyler.",
        "Bu rehber her birinin nerede durduğunu, hangilerinin düşünmeden temizlenebileceğini, hangilerinin yeniden oluşturulamayacağını ve bunu elle ya da DiskMop ile nasıl yapacağınızı anlatır.",
      ],
      keyTakeaways: [
        "Xcode DerivedData ve simülatör önbellekleri Xcode tarafından yeniden oluşturulur; sonraki derleme bir kez daha yavaş olur. Device Support dosyaları, cihazı bağladığınızda yeniden kopyalanır.",
        "Xcode arşivleri farklıdır: yayımladığınız derlemeleri tutarlar ve çökme raporlarını sembolleştirmek için gerekir. DiskMop bunları işaretsiz bırakır ve kaldırmanın geri alınamayacağını belirtir.",
        "Simülatör sistem imajları Xcode > Ayarlar > Components'tan yeniden indirilebilir; imajı gitmiş eski simülatörler zaten açılamaz ve DiskMop bunları sistemin kendi simctl aracıyla kaldırır.",
        "DiskMop'un Docker öğesi docker system prune çalıştırır: kullanılmayan imajlar, durmuş konteynerler, ağlar ve derleme önbelleği kaldırılır; verinizin durduğu volume'lara asla dokunulmaz.",
      ],
      dataTable: {
        caption:
          "Mac'te geliştirici depolaması: ne olduğu ve silerseniz ne olacağı",
        columns: ["Öğe", "Nerede durur", "Silerseniz", "DiskMop'ta"],
        rows: [
          [
            "Xcode DerivedData",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode yeniden oluşturur; bir yavaş derleme",
            "Yer aç, varsayılan olarak işaretli",
          ],
          [
            "Simülatör önbellekleri, çalışma zamanları ve eski simülatörler",
            "~/Library/Developer/CoreSimulator ve sistem imajları",
            "Yeniden oluşturulur veya indirilir; eski simülatörler zaten açılamaz",
            "Yer aç ve macOS alanı",
          ],
          [
            "Device Support dosyaları",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Sonraki bağlantıda cihazdan yeniden kopyalanır",
            "Yer aç",
          ],
          [
            "Xcode arşivleri",
            "~/Library/Developer/Xcode/Archives",
            "Yeniden oluşturulamaz; çökme sembolleri için gerekir",
            "Yer aç, işaretsiz, geri alınamaz",
          ],
          [
            "Docker imajları ve derleme önbelleği",
            "Docker Desktop verileri",
            "Gerektiğinde çekilir veya yeniden oluşturulur; volume'lar kalır",
            "macOS alanı",
          ],
        ],
      },
      howTo: {
        name: "DiskMop ile Mac'te geliştirici depolamasını boşaltın",
        totalTime: "PT10M",
        steps: [
          {
            name: "Yer aç'ı açın",
            text: "DiskMop'u başlatın ve Yer aç'ı seçin. Xcode DerivedData ve simülatör önbellekleri varsa görünür.",
          },
          {
            name: "Her öğenin söylediğini okuyun",
            text: "Her satır temizlerseniz ne olacağını açıklar. DerivedData işaretlidir; Xcode arşivleri işaretsizdir ve geri alınamaz olarak belirtilir.",
          },
          {
            name: "macOS alanı'nı açın",
            text: "Simülatör sistem imajları, eski simülatörler ve Docker'ın kullanılmayan imajları ile derleme önbelleği için macOS alanı'nı seçin.",
          },
          {
            name: "İşaretleyin ve temizleyin",
            text: "Gitmesini istediklerinizi işaretleyin ve temizle düğmesine basın. Docker'ın bir derlemenin ortasında olmadığından emin olun.",
          },
          {
            name: "Bir kez yeniden derleyin",
            text: "Projenizi Xcode'da açın. DerivedData yeniden oluşturulurken ilk derleme yavaştır; sonrasında normale döner.",
          },
        ],
      },
      sections: [
        {
          title: "Geliştirici Araçları Neden Bu Kadar Yer Kaplar",
          content: [
            "Xcode, sonraki derleme hızlı olsun diye ara derleme dosyalarını saklar, bağladığınız her cihazdan hata ayıklama sembollerini kopyalar ve her simülatör sürümü için tam bir sistem imajı kurar. Docker çektiği her imajı ve her derlemeyle büyüyen bir derleme önbelleğini tutar. Hiçbiri yanlış değildir; hız için ayarlanmıştır ve kendi kendine asla temizlenmez.",
            "256 GB veya 512 GB diskli bir Mac'te bu çoğunlukla rahat bir disk ile dolu bir disk arasındaki farktır. Tanıdık geliyorsa, geliştirici olmayan tarafı [Mac başlangıç diskini ne doldurur](/blog/mac-startup-disk-almost-full) yazısında.",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support ve Arşivler",
          content: [
            "DerivedData, derlemelerinizin ara dosyalarını ~/Library/Developer/Xcode/DerivedData içinde tutar. Silmek, tuhaf derleme hataları için standart bir çözümdür ve bir yavaş derlemeye mal olur. ~/Library/Developer/Xcode/iOS DeviceSupport ve watchOS klasöründeki Device Support, bağladığınız iPhone ve iPad'lerden kopyalanan sembolleri tutar; Xcode bunları bir dahaki sefere yeniden kopyalar, bu birkaç dakika sürer.",
            "~/Library/Developer/Xcode/Archives içindeki arşivler, yayın için yaptığınız derlemelerdir. Yayımlanmış sürümlerin çökme raporlarını sembolleştirmek için gerekir ve tam olarak aynı derlemeyi yeniden oluşturamazsınız; bu yüzden DiskMop bunları işaretsiz bırakır ve kaldırmanın geri alınamayacağı konusunda uyarır. Yalnızca hata ayıklamanız asla gerekmeyecek sürümlerin arşivlerini temizleyin.",
          ],
        },
        {
          title: "Simülatörler ve Çalışma Zamanları",
          content: [
            "Her simülatör sürümünün, çoğunlukla birkaç gigabaytlık bir sistem imajı vardır; Xcode bunu Xcode > Ayarlar > Components altında indirir ve yönetir. Gerektiğinde yeniden indirebilirsiniz, bu yüzden artık test etmediğiniz sürümlerin imajlarını kaldırmak güvenlidir. Sistem imajı zaten gitmiş simülatörler başlatılamaz ve sistemin kendi aracı olan xcrun simctl delete unavailable bunları kaldırır.",
            "DiskMop bunları sistem klasörlerini silerek değil, aynı simctl aracıyla yapar ve macOS alanı altında, ne olacağının açıklamasıyla listeler. Simülatörlerin bir sonraki açılışta yeniden oluşturduğu geçici veri olan simülatör önbellekleri Yer aç sayfasındadır.",
          ],
        },
        {
          title: "Docker: İmajlar, Derleme Önbelleği ve Volume'lar",
          content: [
            "docker system df Docker'ın ne kullandığını gösterir; docker system prune durmuş konteynerleri, kullanılmayan ağları ve askıdaki imajları, -a seçeneğiyle de kullanılmayan tüm imajları kaldırır. DiskMop'un Docker öğesi kullanılmayan imajları, durmuş konteynerleri, ağları ve derleme önbelleğini kaldırır ve veritabanlarının ve diğer verilerin durduğu volume'lara asla dokunmaz. Docker bir dahaki sefere gerekeni indirir veya yeniden oluşturur; bir kez daha yavaş çekimler bekleyin.",
            "Bu, Docker'ın kendi komutuyla çalışır; yani Docker'ın kurulu ve meşgul olmaması gerekir. Tarama ücretsizdir; çok sayıda öğeyi aynı anda temizlemek tek seferlik satın alınan DiskMop Pro'nun parçasıdır, ücretsiz sürümde birkaç tekil kaldırmayı deneyebilirsiniz. Geliştirici öğeleri diskmop.com'dan indirdiğiniz sürümde çalışır. npm, Yarn, pip, Homebrew, CocoaPods, Gradle ve Cargo gibi paket önbellekleri Yer aç'ta listelenir ve varsayılan olarak işaretsizdir; araçlarınız bunları yeniden indirir. Diğer büyük dosyalar için [Mac'te büyük dosyalar nasıl bulunur](/blog/find-large-files-mac) yazısına bakın.",
          ],
        },
      ],
      faq: [
        {
          question: "Xcode DerivedData'yı silmek güvenli mi?",
          answer:
            "Evet. Xcode yeniden oluşturur. Sonraki derleme bir kez yavaş olur; DerivedData'yı silmek tuhaf derleme hataları için yaygın bir çözümdür.",
        },
        {
          question: "Xcode arşivlerini silebilir miyim?",
          answer:
            "Yalnızca o sürümlerde hata ayıklamanız asla gerekmeyecekse. Arşivler çökme raporlarını sembolleştirmek için gerekir ve yeniden oluşturulamaz; bu yüzden DiskMop bunları işaretsiz bırakır ve kaldırmayı geri alınamaz olarak belirtir.",
        },
        {
          question: "DiskMop Docker volume'larımı siler mi?",
          answer:
            "Hayır. docker system prune ile kullanılmayan imajları, durmuş konteynerleri, ağları ve derleme önbelleğini kaldırır; verinizin saklandığı volume'lara asla dokunmaz.",
        },
        {
          question: "Eski iOS simülatörlerini nasıl kaldırırım?",
          answer:
            "Artık test etmediğiniz simülatör sistem imajlarını Xcode > Ayarlar > Components'ta silin ve imajı gitmiş simülatörler için xcrun simctl delete unavailable çalıştırın. DiskMop ikisini de macOS alanı altında listeler.",
        },
      ],
      verdict: [
        "Geliştirici araçları 256 GB veya 512 GB'lık bir Mac'i sessizce doldurur. Tuttuklarının çoğu yeniden oluşturulur veya indirilir; olmayan tek şey, Xcode arşivleri, bilinçli bir karar ister.",
        "Mac için DiskMop DerivedData, simülatörleri, Device Support'u ve Docker'ın kullanılmayan verisini temizler, önce her öğeyi açıklar ve siz işaretlemedikçe volume'lara ve arşivlere dokunmaz. Tarama ücretsiz; karar vermeden önce boyutu görebilirsiniz.",
      ],
      ctaText: "DiskMop ile Mac'inizde Xcode ve Docker alanını geri kazanın",
    },
    de: {
      title: "Speicher von Xcode, Simulatoren und Docker auf dem Mac freigeben",
      metaDescription:
        "Xcode-DerivedData, alte Simulatoren, Device-Support-Dateien, Archive und Docker-Images können zig Gigabyte belegen. Was jedes ist, was sich sicher löschen lässt und wie DiskMop aufräumt.",
      subtitle:
        "Entwicklerwerkzeuge füllen den Mac unbemerkt: was löschen, was behalten und was zurückkommt",
      intro: [
        "Kurz gesagt: Die größten Platzfresser von Entwicklern auf dem Mac sind Xcodes DerivedData, Simulator-Runtimes und alte Simulatoren, Device-Support-Dateien angeschlossener iPhones, Build-Archive sowie Dockers ungenutzte Images und Build-Cache. Das meiste wird bei Bedarf neu gebaut oder geladen, das Löschen ist also sicher. DiskMop für Mac räumt sie unter Speicher freigeben und macOS-Speicher auf und sagt zu jedem Eintrag, was passiert.",
        "Diese Anleitung erklärt, wo jedes liegt, was sich ohne Bedenken löschen lässt, was sich nicht neu erzeugen lässt und wie Sie es von Hand oder mit DiskMop tun.",
      ],
      keyTakeaways: [
        "Xcode-DerivedData und Simulator-Caches baut Xcode neu; der nächste Build ist einmal langsamer. Device-Support-Dateien werden beim Anschließen erneut vom Gerät kopiert.",
        "Xcode-Archive sind anders: Sie enthalten die veröffentlichten Builds und werden zum Symbolisieren von Absturzberichten gebraucht. DiskMop lässt sie unmarkiert und kennzeichnet das Entfernen als nicht umkehrbar.",
        "Simulator-Systemabbilder lassen sich in Xcode > Einstellungen > Components erneut laden, und alte Simulatoren ohne Abbild starten ohnehin nicht; DiskMop entfernt sie mit dem systemeigenen Werkzeug simctl.",
        "DiskMops Docker-Eintrag führt docker system prune aus: ungenutzte Images, gestoppte Container, Netzwerke und Build-Cache werden entfernt, Volumes mit Ihren Daten bleiben unberührt.",
      ],
      dataTable: {
        caption:
          "Entwicklerspeicher auf dem Mac: was es ist und was beim Löschen passiert",
        columns: [
          "Eintrag",
          "Wo er liegt",
          "Wenn Sie ihn löschen",
          "In DiskMop",
        ],
        rows: [
          [
            "Xcode-DerivedData",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode baut neu; ein langsamerer Build",
            "Speicher freigeben, standardmäßig markiert",
          ],
          [
            "Simulator-Caches, Runtimes und alte Simulatoren",
            "~/Library/Developer/CoreSimulator und Systemabbilder",
            "Neu aufgebaut oder erneut geladen; alte Simulatoren starten ohnehin nicht",
            "Speicher freigeben und macOS-Speicher",
          ],
          [
            "Device-Support-Dateien",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Beim nächsten Anschließen erneut vom Gerät kopiert",
            "Speicher freigeben",
          ],
          [
            "Xcode-Archive",
            "~/Library/Developer/Xcode/Archives",
            "Nicht neu erzeugbar; für Absturzsymbole nötig",
            "Speicher freigeben, unmarkiert, nicht umkehrbar",
          ],
          [
            "Docker-Images und Build-Cache",
            "Daten von Docker Desktop",
            "Bei Bedarf geladen oder neu gebaut; Volumes bleiben",
            "macOS-Speicher",
          ],
        ],
      },
      howTo: {
        name: "Entwicklerspeicher auf dem Mac mit DiskMop freigeben",
        totalTime: "PT10M",
        steps: [
          {
            name: "Speicher freigeben öffnen",
            text: "Starten Sie DiskMop und wählen Sie Speicher freigeben. Xcode-DerivedData und Simulator-Caches erscheinen, wenn vorhanden.",
          },
          {
            name: "Lesen, was jeder Eintrag sagt",
            text: "Jede Zeile erklärt, was beim Bereinigen passiert. DerivedData ist markiert; Xcode-Archive nicht, sie sind als nicht umkehrbar gekennzeichnet.",
          },
          {
            name: "macOS-Speicher öffnen",
            text: "Wählen Sie macOS-Speicher für Simulator-Systemabbilder, alte Simulatoren und Dockers ungenutzte Images und Build-Cache.",
          },
          {
            name: "Markieren und bereinigen",
            text: "Markieren Sie, was weg soll, und klicken Sie auf Bereinigen. Stellen Sie sicher, dass Docker nicht mitten in einem Build steckt.",
          },
          {
            name: "Einmal neu bauen",
            text: "Öffnen Sie Ihr Projekt in Xcode. Der erste Build ist langsamer, während DerivedData neu entsteht; danach läuft alles normal.",
          },
        ],
      },
      sections: [
        {
          title: "Warum Entwicklerwerkzeuge so viel Platz brauchen",
          content: [
            "Xcode behält Zwischendateien der Builds, damit der nächste schnell ist, kopiert Debug-Symbole von jedem angeschlossenen Gerät und installiert für jede Simulatorversion ein vollständiges Systemabbild. Docker behält jedes je geladene Image und einen Build-Cache, der mit jedem Build wächst. Nichts davon ist falsch; es ist auf Tempo getrimmt und räumt nie von selbst auf.",
            "Auf einem Mac mit 256-GB- oder 512-GB-Laufwerk ist das oft der Unterschied zwischen einem bequemen und einem vollen Laufwerk. Kommt Ihnen das bekannt vor: Die Nicht-Entwickler-Seite behandelt [Was das Startvolume des Mac füllt](/blog/mac-startup-disk-almost-full).",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support und Archive",
          content: [
            "DerivedData enthält Zwischendateien Ihrer Builds in ~/Library/Developer/Xcode/DerivedData. Das Löschen ist eine Standardlösung bei seltsamen Build-Fehlern und kostet einen langsameren Build. Device Support, in ~/Library/Developer/Xcode/iOS DeviceSupport und im watchOS-Ordner, enthält Symbole, die von angeschlossenen iPhones und iPads kopiert wurden; Xcode kopiert sie beim nächsten Mal erneut, das dauert einige Minuten.",
            "Archive in ~/Library/Developer/Xcode/Archives sind die Builds, die Sie für die Veröffentlichung erstellt haben. Sie brauchen sie, um Absturzberichte veröffentlichter Versionen zu symbolisieren, und der exakt gleiche Build lässt sich nicht neu erzeugen; deshalb lässt DiskMop sie unmarkiert und warnt, dass das Entfernen nicht umkehrbar ist. Löschen Sie nur Archive von Versionen, die Sie nie debuggen müssen.",
          ],
        },
        {
          title: "Simulatoren und Runtimes",
          content: [
            "Jede Simulatorversion hat ein Systemabbild, oft mehrere Gigabyte, das Xcode unter Xcode > Einstellungen > Components lädt und verwaltet. Sie können es jederzeit erneut laden, das Entfernen von Abbildern für Versionen, die Sie nicht mehr testen, ist also sicher. Simulatoren, deren Systemabbild schon fehlt, starten nicht, und das systemeigene Werkzeug xcrun simctl delete unavailable entfernt sie.",
            "DiskMop erledigt das über dasselbe simctl-Werkzeug, nicht durch Löschen von Systemordnern, und listet es unter macOS-Speicher mit einer Beschreibung, was passiert. Simulator-Caches, temporäre Daten, die die Simulatoren beim nächsten Start neu aufbauen, stehen auf der Seite Speicher freigeben.",
          ],
        },
        {
          title: "Docker: Images, Build-Cache und Volumes",
          content: [
            "docker system df zeigt, was Docker belegt; docker system prune entfernt gestoppte Container, ungenutzte Netzwerke und hängende Images, mit der Option -a alle ungenutzten Images. DiskMops Docker-Eintrag entfernt ungenutzte Images, gestoppte Container, Netzwerke und Build-Cache und fasst Volumes nie an, wo Datenbanken und andere Daten liegen. Docker lädt oder baut beim nächsten Mal, was es braucht; rechnen Sie einmal mit langsameren Pulls.",
            "Das läuft über Dockers eigenen Befehl, Docker muss also installiert und nicht beschäftigt sein. Das Scannen ist kostenlos; viele Objekte auf einmal zu bereinigen gehört zu DiskMop Pro, einem einmaligen Kauf, und in der kostenlosen Version können Sie ein paar einzelne Entfernungen testen. Die Entwicklereinträge funktionieren in der Version, die Sie von diskmop.com laden. Paket-Caches wie npm, Yarn, pip, Homebrew, CocoaPods, Gradle und Cargo stehen unter Speicher freigeben und sind standardmäßig unmarkiert; Ihre Werkzeuge laden sie erneut. Weitere große Dateien: [Große Dateien auf dem Mac finden](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Ist es sicher, Xcode-DerivedData zu löschen?",
          answer:
            "Ja. Xcode baut sie neu. Der nächste Build ist einmal langsamer, und das Löschen von DerivedData ist eine gängige Lösung bei seltsamen Build-Fehlern.",
        },
        {
          question: "Kann ich Xcode-Archive löschen?",
          answer:
            "Nur, wenn Sie diese Releases nie debuggen müssen. Archive werden zum Symbolisieren von Absturzberichten gebraucht und lassen sich nicht neu erzeugen; deshalb lässt DiskMop sie unmarkiert und kennzeichnet das Entfernen als nicht umkehrbar.",
        },
        {
          question: "Löscht DiskMop meine Docker-Volumes?",
          answer:
            "Nein. Es entfernt mit docker system prune ungenutzte Images, gestoppte Container, Netzwerke und Build-Cache und fasst Volumes, in denen Ihre Daten liegen, nie an.",
        },
        {
          question: "Wie entferne ich alte iOS-Simulatoren?",
          answer:
            "Löschen Sie nicht mehr getestete Simulator-Systemabbilder unter Xcode > Einstellungen > Components und führen Sie xcrun simctl delete unavailable für Simulatoren ohne Abbild aus. DiskMop listet beides unter macOS-Speicher.",
        },
      ],
      verdict: [
        "Entwicklerwerkzeuge machen aus einem Mac mit 256 oder 512 GB unbemerkt einen vollen. Das meiste, was sie behalten, wird neu gebaut oder geladen, und das Einzige, was nicht, die Xcode-Archive, verdient eine bewusste Entscheidung.",
        "DiskMop für Mac räumt DerivedData, Simulatoren, Device Support und Dockers ungenutzte Daten auf, erklärt zuerst jeden Eintrag und lässt Volumes und Archive in Ruhe, solange Sie sie nicht markieren. Das Scannen ist kostenlos, sodass Sie die Größe sehen, bevor Sie entscheiden.",
      ],
      ctaText:
        "Xcode- und Docker-Speicher auf Ihrem Mac mit DiskMop zurückholen",
    },
    fr: {
      title:
        "Libérer l'espace pris par Xcode, les simulateurs et Docker sur Mac",
      metaDescription:
        "DerivedData de Xcode, anciens simulateurs, Device Support, archives et images Docker peuvent peser des dizaines de Go. Ce qu'on peut supprimer et comment DiskMop nettoie.",
      subtitle:
        "Les outils de développement remplissent un Mac en silence : quoi supprimer, quoi garder et ce qui revient",
      intro: [
        "En bref : les plus gros consommateurs d'espace des développeurs sur Mac sont le DerivedData de Xcode, les environnements et anciens simulateurs, les fichiers Device Support des iPhone connectés, les archives de build et les images inutilisées et le cache de build de Docker. La plupart sont reconstruits ou retéléchargés au besoin, les supprimer est donc sûr. DiskMop pour Mac les nettoie depuis Libérer de l'espace et Espace macOS et indique ce qui se passe pour chaque élément.",
        "Ce guide explique où se trouve chacun, lesquels se suppriment sans hésiter, lesquels ne se recréent pas et comment procéder à la main ou avec DiskMop.",
      ],
      keyTakeaways: [
        "Le DerivedData de Xcode et les caches des simulateurs sont reconstruits par Xcode ; le build suivant est plus lent une fois. Les fichiers Device Support sont recopiés depuis l'appareil à sa prochaine connexion.",
        "Les archives Xcode sont différentes : elles contiennent les builds publiés et servent à symboliser les rapports de plantage. DiskMop les laisse décochées et signale que la suppression est irréversible.",
        "Les images système des simulateurs se retéléchargent dans Xcode > Réglages > Components, et les anciens simulateurs dont l'image a disparu ne démarrent de toute façon pas ; DiskMop les supprime avec l'outil simctl du système.",
        "L'élément Docker de DiskMop exécute docker system prune : images inutilisées, conteneurs arrêtés, réseaux et cache de build sont supprimés, et les volumes, où se trouvent vos données, ne sont jamais touchés.",
      ],
      dataTable: {
        caption:
          "Stockage de développement sur Mac : ce que c'est et ce qui arrive si vous le supprimez",
        columns: [
          "Élément",
          "Où il se trouve",
          "Si vous le supprimez",
          "Dans DiskMop",
        ],
        rows: [
          [
            "DerivedData de Xcode",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode le reconstruit ; un build plus lent",
            "Libérer de l'espace, coché par défaut",
          ],
          [
            "Caches, environnements et anciens simulateurs",
            "~/Library/Developer/CoreSimulator et images système",
            "Reconstruits ou retéléchargés ; les anciens simulateurs ne démarrent pas de toute façon",
            "Libérer de l'espace et Espace macOS",
          ],
          [
            "Fichiers Device Support",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Recopiés depuis l'appareil à la prochaine connexion",
            "Libérer de l'espace",
          ],
          [
            "Archives Xcode",
            "~/Library/Developer/Xcode/Archives",
            "Impossibles à recréer ; nécessaires pour les symboles de plantage",
            "Libérer de l'espace, décoché, irréversible",
          ],
          [
            "Images Docker et cache de build",
            "Données de Docker Desktop",
            "Retéléchargés ou reconstruits au besoin ; les volumes restent",
            "Espace macOS",
          ],
        ],
      },
      howTo: {
        name: "Libérer le stockage de développement sur Mac avec DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir Libérer de l'espace",
            text: "Lancez DiskMop et choisissez Libérer de l'espace. Le DerivedData de Xcode et les caches des simulateurs apparaissent si vous en avez.",
          },
          {
            name: "Lire ce que dit chaque élément",
            text: "Chaque ligne explique ce qui se passe si vous nettoyez. DerivedData est coché ; les archives Xcode ne le sont pas et sont signalées comme irréversibles.",
          },
          {
            name: "Ouvrir Espace macOS",
            text: "Choisissez Espace macOS pour les images système des simulateurs, les anciens simulateurs et les images inutilisées et le cache de build de Docker.",
          },
          {
            name: "Cocher et nettoyer",
            text: "Cochez ce que vous voulez supprimer et cliquez sur le bouton de nettoyage. Vérifiez que Docker n'est pas en plein build.",
          },
          {
            name: "Reconstruire une fois",
            text: "Ouvrez votre projet dans Xcode. Le premier build est plus lent pendant la reconstruction de DerivedData ; ensuite tout redevient normal.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi les outils de développement prennent tant de place",
          content: [
            "Xcode garde les fichiers intermédiaires des builds pour que le suivant soit rapide, copie les symboles de débogage de chaque appareil connecté et installe une image système complète pour chaque version de simulateur. Docker garde chaque image téléchargée et un cache de build qui grossit à chaque build. Rien de tout cela n'est anormal ; c'est optimisé pour la vitesse et ne se nettoie jamais seul.",
            "Sur un Mac avec un disque de 256 Go ou 512 Go, c'est souvent la différence entre un disque confortable et un disque plein. Si cela vous parle, [ce qui remplit le disque de démarrage du Mac](/blog/mac-startup-disk-almost-full) couvre le côté hors développement.",
          ],
        },
        {
          title: "Xcode : DerivedData, Device Support et archives",
          content: [
            "DerivedData contient les fichiers intermédiaires de vos builds dans ~/Library/Developer/Xcode/DerivedData. Le supprimer est une solution classique aux erreurs de build étranges et coûte un build plus lent. Device Support, dans ~/Library/Developer/Xcode/iOS DeviceSupport et le dossier watchOS, contient des symboles copiés depuis les iPhone et iPad connectés ; Xcode les recopie la fois suivante, ce qui prend quelques minutes.",
            "Les archives, dans ~/Library/Developer/Xcode/Archives, sont les builds faits pour la publication. Elles servent à symboliser les rapports de plantage des versions publiées et on ne peut pas recréer exactement le même build ; DiskMop les laisse donc décochées et prévient que la suppression est irréversible. Ne supprimez que les archives de versions que vous n'aurez jamais à déboguer.",
          ],
        },
        {
          title: "Simulateurs et environnements d'exécution",
          content: [
            "Chaque version de simulateur a une image système, souvent de plusieurs gigaoctets, que Xcode télécharge et gère sous Xcode > Réglages > Components. Vous pouvez la retélécharger quand vous voulez ; supprimer les images des versions que vous ne testez plus est donc sûr. Les simulateurs dont l'image système a déjà disparu ne démarrent pas, et l'outil du système, xcrun simctl delete unavailable, les supprime.",
            "DiskMop fait cela via ce même outil simctl, et non en supprimant des dossiers système, et le liste sous Espace macOS avec une description de ce qui se passe. Les caches des simulateurs, données temporaires qu'ils reconstruisent au prochain démarrage, se trouvent sur la page Libérer de l'espace.",
          ],
        },
        {
          title: "Docker : images, cache de build et volumes",
          content: [
            "docker system df montre ce que Docker utilise ; docker system prune supprime les conteneurs arrêtés, les réseaux inutilisés et les images orphelines, et avec l'option -a toutes les images inutilisées. L'élément Docker de DiskMop supprime les images inutilisées, conteneurs arrêtés, réseaux et cache de build et ne touche jamais aux volumes, où vivent bases de données et autres données. Docker télécharge ou reconstruit ce dont il a besoin la fois suivante ; attendez-vous à des téléchargements plus lents une fois.",
            "Cela passe par la commande propre à Docker : Docker doit donc être installé et non occupé. L'analyse est gratuite ; nettoyer beaucoup d'éléments à la fois fait partie de DiskMop Pro, un achat unique, et la version gratuite permet d'essayer quelques suppressions une par une. Les éléments de développement fonctionnent dans la version à télécharger sur diskmop.com. Les caches de paquets comme npm, Yarn, pip, Homebrew, CocoaPods, Gradle et Cargo sont listés dans Libérer de l'espace et décochés par défaut ; vos outils les retéléchargent. Pour d'autres gros fichiers, voir [comment trouver les gros fichiers sur Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Est-il sûr de supprimer le DerivedData de Xcode ?",
          answer:
            "Oui. Xcode le reconstruit. Le build suivant est plus lent une fois, et supprimer DerivedData est une solution courante aux erreurs de build étranges.",
        },
        {
          question: "Puis-je supprimer les archives Xcode ?",
          answer:
            "Seulement si vous n'aurez jamais à déboguer ces versions. Les archives servent à symboliser les rapports de plantage et ne se recréent pas ; DiskMop les laisse donc décochées et signale la suppression comme irréversible.",
        },
        {
          question: "DiskMop supprime-t-il mes volumes Docker ?",
          answer:
            "Non. Il supprime avec docker system prune les images inutilisées, conteneurs arrêtés, réseaux et cache de build, et ne touche jamais aux volumes, où sont stockées vos données.",
        },
        {
          question: "Comment supprimer les anciens simulateurs iOS ?",
          answer:
            "Supprimez les images système de simulateurs que vous ne testez plus dans Xcode > Réglages > Components et lancez xcrun simctl delete unavailable pour les simulateurs dont l'image a disparu. DiskMop liste les deux sous Espace macOS.",
        },
      ],
      verdict: [
        "Les outils de développement transforment en silence un Mac de 256 ou 512 Go en Mac plein. La plupart de ce qu'ils gardent est reconstruit ou retéléchargé, et la seule chose qui ne l'est pas, les archives Xcode, mérite une décision réfléchie.",
        "DiskMop pour Mac nettoie DerivedData, les simulateurs, Device Support et les données inutilisées de Docker, explique d'abord chaque élément et laisse vos volumes et archives tranquilles tant que vous ne les cochez pas. L'analyse est gratuite : vous voyez la taille avant de décider.",
      ],
      ctaText:
        "Récupérez l'espace de Xcode et Docker sur votre Mac avec DiskMop",
    },
    es: {
      title:
        "Cómo liberar el espacio que ocupan Xcode, los simuladores y Docker en el Mac",
      metaDescription:
        "DerivedData de Xcode, simuladores antiguos, archivos Device Support, archivados e imágenes de Docker pueden ocupar decenas de gigas. Qué es cada uno, qué se puede borrar y cómo lo limpia DiskMop.",
      subtitle:
        "Las herramientas de desarrollo llenan el Mac en silencio: qué borrar, qué conservar y qué vuelve",
      intro: [
        "En resumen: los mayores acaparadores de espacio de desarrollo en un Mac son el DerivedData de Xcode, los runtimes y simuladores antiguos, los archivos Device Support de iPhones conectados, los archivados de compilación y las imágenes sin uso y la caché de compilación de Docker. La mayoría se reconstruye o se vuelve a descargar cuando hace falta, así que borrarlos es seguro. DiskMop para Mac los limpia desde Liberar espacio y Espacio de macOS y dice qué ocurre con cada elemento.",
        "Esta guía explica dónde está cada uno, cuáles se pueden borrar sin pensarlo, cuáles no se pueden recrear y cómo hacerlo a mano o con DiskMop.",
      ],
      keyTakeaways: [
        "El DerivedData de Xcode y las cachés de simuladores las reconstruye Xcode; la siguiente compilación es más lenta una vez. Los archivos Device Support se copian de nuevo desde el dispositivo al conectarlo.",
        "Los archivados de Xcode son distintos: contienen las compilaciones publicadas y hacen falta para simbolizar informes de fallos. DiskMop los deja sin marcar e indica que eliminarlos no se puede deshacer.",
        "Las imágenes del sistema de los simuladores se pueden volver a descargar en Xcode > Ajustes > Components, y los simuladores antiguos sin imagen no arrancan de todos modos; DiskMop los elimina con la herramienta simctl del propio sistema.",
        "El elemento Docker de DiskMop ejecuta docker system prune: se eliminan imágenes sin uso, contenedores detenidos, redes y caché de compilación, y los volúmenes, donde están tus datos, nunca se tocan.",
      ],
      dataTable: {
        caption:
          "Almacenamiento de desarrollo en un Mac: qué es y qué pasa si lo borras",
        columns: ["Elemento", "Dónde está", "Si lo borras", "En DiskMop"],
        rows: [
          [
            "DerivedData de Xcode",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode lo reconstruye; una compilación más lenta",
            "Liberar espacio, marcado por defecto",
          ],
          [
            "Cachés, runtimes y simuladores antiguos",
            "~/Library/Developer/CoreSimulator e imágenes del sistema",
            "Se reconstruyen o se descargan de nuevo; los simuladores antiguos no arrancan de todos modos",
            "Liberar espacio y Espacio de macOS",
          ],
          [
            "Archivos Device Support",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Se copian de nuevo desde el dispositivo en la siguiente conexión",
            "Liberar espacio",
          ],
          [
            "Archivados de Xcode",
            "~/Library/Developer/Xcode/Archives",
            "No se pueden recrear; hacen falta para los símbolos de fallos",
            "Liberar espacio, sin marcar, irreversible",
          ],
          [
            "Imágenes de Docker y caché de compilación",
            "Datos de Docker Desktop",
            "Se descargan o reconstruyen cuando hace falta; los volúmenes quedan",
            "Espacio de macOS",
          ],
        ],
      },
      howTo: {
        name: "Liberar almacenamiento de desarrollo en el Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abre Liberar espacio",
            text: "Inicia DiskMop y elige Liberar espacio. El DerivedData de Xcode y las cachés de simuladores aparecen si los tienes.",
          },
          {
            name: "Lee lo que dice cada elemento",
            text: "Cada fila explica qué ocurre si limpias. DerivedData está marcado; los archivados de Xcode no, y se indican como irreversibles.",
          },
          {
            name: "Abre Espacio de macOS",
            text: "Elige Espacio de macOS para las imágenes del sistema de simuladores, los simuladores antiguos y las imágenes sin uso y la caché de compilación de Docker.",
          },
          {
            name: "Marca y limpia",
            text: "Marca lo que quieras quitar y pulsa el botón de limpiar. Asegúrate de que Docker no esté en mitad de una compilación.",
          },
          {
            name: "Reconstruye una vez",
            text: "Abre tu proyecto en Xcode. La primera compilación es más lenta mientras se reconstruye DerivedData; después todo vuelve a la normalidad.",
          },
        ],
      },
      sections: [
        {
          title: "Por qué las herramientas de desarrollo ocupan tanto",
          content: [
            "Xcode conserva archivos intermedios de las compilaciones para que la siguiente sea rápida, copia símbolos de depuración de cada dispositivo que conectas e instala una imagen completa del sistema por cada versión de simulador. Docker conserva cada imagen que descargó y una caché de compilación que crece con cada compilación. Nada de eso es un error; está optimizado para la velocidad y nunca se limpia solo.",
            "En un Mac con disco de 256 GB o 512 GB esto suele ser la diferencia entre un disco cómodo y uno lleno. Si te suena, [qué llena el disco de arranque del Mac](/blog/mac-startup-disk-almost-full) cubre el lado no desarrollador.",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support y archivados",
          content: [
            "DerivedData guarda archivos intermedios de tus compilaciones en ~/Library/Developer/Xcode/DerivedData. Borrarlo es una solución habitual para errores de compilación raros y cuesta una compilación más lenta. Device Support, en ~/Library/Developer/Xcode/iOS DeviceSupport y en la carpeta de watchOS, guarda símbolos copiados de iPhones y iPads que conectaste; Xcode los copia de nuevo la próxima vez, lo que tarda unos minutos.",
            "Los archivados, en ~/Library/Developer/Xcode/Archives, son las compilaciones que hiciste para publicar. Hacen falta para simbolizar los informes de fallos de versiones publicadas y no puedes recrear la compilación exacta, así que DiskMop los deja sin marcar y avisa de que eliminarlos no se puede deshacer. Borra solo archivados de versiones que nunca tendrás que depurar.",
          ],
        },
        {
          title: "Simuladores y runtimes",
          content: [
            "Cada versión de simulador tiene una imagen del sistema, a menudo de varios gigas, que Xcode descarga y gestiona en Xcode > Ajustes > Components. Puedes descargarla de nuevo cuando la necesites, así que quitar imágenes de versiones que ya no pruebas es seguro. Los simuladores cuya imagen ya no está no arrancan, y la herramienta del propio sistema, xcrun simctl delete unavailable, los elimina.",
            "DiskMop lo hace con esa misma herramienta simctl, no borrando carpetas del sistema, y lo lista en Espacio de macOS con una descripción de lo que ocurre. Las cachés de simuladores, datos temporales que reconstruyen en el siguiente arranque, están en la página Liberar espacio.",
          ],
        },
        {
          title: "Docker: imágenes, caché de compilación y volúmenes",
          content: [
            "docker system df muestra lo que usa Docker; docker system prune elimina contenedores detenidos, redes sin uso e imágenes huérfanas, y con la opción -a todas las imágenes sin uso. El elemento Docker de DiskMop elimina imágenes sin uso, contenedores detenidos, redes y caché de compilación y nunca toca los volúmenes, donde viven bases de datos y otros datos. Docker descarga o reconstruye lo que necesite la próxima vez; espera descargas más lentas una vez.",
            "Esto funciona con el comando propio de Docker, así que Docker debe estar instalado y no ocupado. El análisis es gratuito; limpiar muchos elementos a la vez forma parte de DiskMop Pro, una compra única, y la versión gratuita permite probar unas pocas eliminaciones sueltas. Los elementos de desarrollo funcionan en la versión que descargas desde diskmop.com. Las cachés de paquetes como npm, Yarn, pip, Homebrew, CocoaPods, Gradle y Cargo aparecen en Liberar espacio y están sin marcar por defecto; tus herramientas las descargan de nuevo. Para otros archivos grandes, consulta [cómo encontrar archivos grandes en el Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "¿Es seguro borrar el DerivedData de Xcode?",
          answer:
            "Sí. Xcode lo reconstruye. La siguiente compilación es más lenta una vez, y borrar DerivedData es una solución común para errores de compilación raros.",
        },
        {
          question: "¿Puedo borrar los archivados de Xcode?",
          answer:
            "Solo si nunca tendrás que depurar esas versiones. Los archivados hacen falta para simbolizar informes de fallos y no se pueden recrear, así que DiskMop los deja sin marcar e indica que eliminarlos no se puede deshacer.",
        },
        {
          question: "¿Borra DiskMop mis volúmenes de Docker?",
          answer:
            "No. Con docker system prune elimina imágenes sin uso, contenedores detenidos, redes y caché de compilación, y nunca toca los volúmenes, donde se guardan tus datos.",
        },
        {
          question: "¿Cómo elimino simuladores antiguos de iOS?",
          answer:
            "Borra las imágenes del sistema de simuladores que ya no pruebas en Xcode > Ajustes > Components y ejecuta xcrun simctl delete unavailable para los simuladores sin imagen. DiskMop lista ambos en Espacio de macOS.",
        },
      ],
      verdict: [
        "Las herramientas de desarrollo convierten en silencio un Mac de 256 o 512 GB en uno lleno. Casi todo lo que guardan se reconstruye o se vuelve a descargar, y lo único que no, los archivados de Xcode, merece una decisión deliberada.",
        "DiskMop para Mac limpia DerivedData, simuladores, Device Support y los datos sin uso de Docker, explica cada elemento antes y deja en paz tus volúmenes y archivados salvo que los marques. El análisis es gratuito, así que ves el tamaño antes de decidir.",
      ],
      ctaText: "Recupera el espacio de Xcode y Docker en tu Mac con DiskMop",
    },
    it: {
      title:
        "Come liberare lo spazio occupato da Xcode, simulatori e Docker sul Mac",
      metaDescription:
        "DerivedData di Xcode, vecchi simulatori, file Device Support, archivi e immagini Docker possono occupare decine di gigabyte. Cos'è ciascuno, cosa si può eliminare e come DiskMop li pulisce.",
      subtitle:
        "Gli strumenti di sviluppo riempiono il Mac in silenzio: cosa eliminare, cosa tenere e cosa ritorna",
      intro: [
        "In breve: i maggiori divoratori di spazio degli sviluppatori su Mac sono il DerivedData di Xcode, i runtime e i vecchi simulatori, i file Device Support degli iPhone collegati, gli archivi di build e le immagini inutilizzate e la cache di build di Docker. La maggior parte viene ricostruita o riscaricata quando serve, quindi eliminarla è sicuro. DiskMop per Mac li pulisce da Libera spazio e Spazio di macOS e dice cosa succede per ogni elemento.",
        "Questa guida spiega dove si trova ciascuno, quali si eliminano senza pensarci, quali non si possono ricreare e come farlo a mano o con DiskMop.",
      ],
      keyTakeaways: [
        "Il DerivedData di Xcode e le cache dei simulatori vengono ricostruiti da Xcode; la build successiva è più lenta una volta. I file Device Support vengono ricopiati dal dispositivo quando lo colleghi.",
        "Gli archivi Xcode sono diversi: contengono le build rilasciate e servono per simbolizzare i rapporti di arresto anomalo. DiskMop li lascia deselezionati e indica che la rimozione non si può annullare.",
        "Le immagini di sistema dei simulatori si possono riscaricare in Xcode > Impostazioni > Components e i vecchi simulatori senza immagine non si avviano comunque; DiskMop li rimuove con lo strumento simctl del sistema.",
        "L'elemento Docker di DiskMop esegue docker system prune: vengono rimossi immagini inutilizzate, container fermi, reti e cache di build, mentre i volumi, dove stanno i tuoi dati, non vengono mai toccati.",
      ],
      dataTable: {
        caption:
          "Archiviazione di sviluppo su Mac: cos'è e cosa succede se la elimini",
        columns: ["Elemento", "Dove si trova", "Se lo elimini", "In DiskMop"],
        rows: [
          [
            "DerivedData di Xcode",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcode lo ricostruisce; una build più lenta",
            "Libera spazio, selezionato per impostazione predefinita",
          ],
          [
            "Cache, runtime e vecchi simulatori",
            "~/Library/Developer/CoreSimulator e immagini di sistema",
            "Ricostruiti o riscaricati; i vecchi simulatori non si avviano comunque",
            "Libera spazio e Spazio di macOS",
          ],
          [
            "File Device Support",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Ricopiati dal dispositivo alla connessione successiva",
            "Libera spazio",
          ],
          [
            "Archivi Xcode",
            "~/Library/Developer/Xcode/Archives",
            "Non si possono ricreare; servono per i simboli dei crash",
            "Libera spazio, deselezionato, non annullabile",
          ],
          [
            "Immagini Docker e cache di build",
            "Dati di Docker Desktop",
            "Scaricate o ricostruite quando serve; i volumi restano",
            "Spazio di macOS",
          ],
        ],
      },
      howTo: {
        name: "Liberare l'archiviazione di sviluppo su Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Apri Libera spazio",
            text: "Avvia DiskMop e scegli Libera spazio. Il DerivedData di Xcode e le cache dei simulatori compaiono se li hai.",
          },
          {
            name: "Leggi cosa dice ogni elemento",
            text: "Ogni riga spiega cosa succede se pulisci. DerivedData è selezionato; gli archivi Xcode no e sono indicati come non annullabili.",
          },
          {
            name: "Apri Spazio di macOS",
            text: "Scegli Spazio di macOS per le immagini di sistema dei simulatori, i vecchi simulatori e le immagini inutilizzate e la cache di build di Docker.",
          },
          {
            name: "Seleziona e pulisci",
            text: "Seleziona ciò che vuoi eliminare e premi il pulsante di pulizia. Assicurati che Docker non sia nel mezzo di una build.",
          },
          {
            name: "Ricostruisci una volta",
            text: "Apri il progetto in Xcode. La prima build è più lenta mentre DerivedData viene ricostruito; poi torna tutto normale.",
          },
        ],
      },
      sections: [
        {
          title: "Perché gli strumenti di sviluppo occupano tanto",
          content: [
            "Xcode conserva i file intermedi delle build perché la successiva sia rapida, copia i simboli di debug da ogni dispositivo che colleghi e installa un'immagine di sistema completa per ogni versione di simulatore. Docker conserva ogni immagine scaricata e una cache di build che cresce a ogni build. Niente di tutto ciò è sbagliato; è ottimizzato per la velocità e non si pulisce mai da solo.",
            "Su un Mac con disco da 256 GB o 512 GB spesso è la differenza tra un disco comodo e uno pieno. Se ti suona familiare, [cosa riempie il disco di avvio del Mac](/blog/mac-startup-disk-almost-full) copre il lato non sviluppatore.",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support e archivi",
          content: [
            "DerivedData contiene i file intermedi delle tue build in ~/Library/Developer/Xcode/DerivedData. Eliminarlo è una soluzione standard per strani errori di build e costa una build più lenta. Device Support, in ~/Library/Developer/Xcode/iOS DeviceSupport e nella cartella watchOS, contiene simboli copiati da iPhone e iPad collegati; Xcode li ricopia la volta successiva, e ci vogliono alcuni minuti.",
            "Gli archivi, in ~/Library/Developer/Xcode/Archives, sono le build fatte per il rilascio. Servono per simbolizzare i rapporti di arresto anomalo delle versioni rilasciate e non puoi ricreare la build identica, quindi DiskMop li lascia deselezionati e avverte che la rimozione non si può annullare. Elimina solo archivi di versioni che non dovrai mai debuggare.",
          ],
        },
        {
          title: "Simulatori e runtime",
          content: [
            "Ogni versione di simulatore ha un'immagine di sistema, spesso di vari gigabyte, che Xcode scarica e gestisce in Xcode > Impostazioni > Components. Puoi riscaricarla quando serve, quindi rimuovere le immagini di versioni che non testi più è sicuro. I simulatori la cui immagine di sistema è già sparita non si avviano e lo strumento del sistema, xcrun simctl delete unavailable, li rimuove.",
            "DiskMop lo fa con lo stesso strumento simctl, non eliminando cartelle di sistema, e lo elenca in Spazio di macOS con una descrizione di cosa succede. Le cache dei simulatori, dati temporanei che ricostruiscono al prossimo avvio, sono nella pagina Libera spazio.",
          ],
        },
        {
          title: "Docker: immagini, cache di build e volumi",
          content: [
            "docker system df mostra cosa usa Docker; docker system prune rimuove container fermi, reti inutilizzate e immagini pendenti, e con l'opzione -a tutte le immagini inutilizzate. L'elemento Docker di DiskMop rimuove immagini inutilizzate, container fermi, reti e cache di build e non tocca mai i volumi, dove vivono database e altri dati. Docker scarica o ricostruisce ciò che gli serve la volta successiva; aspettati pull più lenti una volta.",
            "Questo avviene con il comando di Docker stesso, quindi Docker deve essere installato e non occupato. La scansione è gratuita; pulire molti elementi insieme fa parte di DiskMop Pro, un acquisto una tantum, e la versione gratuita permette di provare alcune rimozioni singole. Gli elementi di sviluppo funzionano nella versione che scarichi da diskmop.com. Le cache dei pacchetti come npm, Yarn, pip, Homebrew, CocoaPods, Gradle e Cargo sono elencate in Libera spazio e deselezionate per impostazione predefinita; i tuoi strumenti le riscaricano. Per altri file grandi, vedi [come trovare i file grandi su Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "È sicuro eliminare il DerivedData di Xcode?",
          answer:
            "Sì. Xcode lo ricostruisce. La build successiva è più lenta una volta, ed eliminare DerivedData è una soluzione comune per strani errori di build.",
        },
        {
          question: "Posso eliminare gli archivi Xcode?",
          answer:
            "Solo se non dovrai mai debuggare quelle versioni. Gli archivi servono per simbolizzare i rapporti di arresto anomalo e non si possono ricreare, quindi DiskMop li lascia deselezionati e indica la rimozione come non annullabile.",
        },
        {
          question: "DiskMop elimina i miei volumi Docker?",
          answer:
            "No. Con docker system prune rimuove immagini inutilizzate, container fermi, reti e cache di build e non tocca mai i volumi, dove sono archiviati i tuoi dati.",
        },
        {
          question: "Come rimuovo i vecchi simulatori iOS?",
          answer:
            "Elimina le immagini di sistema dei simulatori che non testi più in Xcode > Impostazioni > Components ed esegui xcrun simctl delete unavailable per i simulatori senza immagine. DiskMop elenca entrambi in Spazio di macOS.",
        },
      ],
      verdict: [
        "Gli strumenti di sviluppo trasformano in silenzio un Mac da 256 o 512 GB in uno pieno. Quasi tutto ciò che conservano viene ricostruito o riscaricato, e l'unica cosa che non lo è, gli archivi Xcode, merita una decisione ponderata.",
        "DiskMop per Mac pulisce DerivedData, simulatori, Device Support e i dati inutilizzati di Docker, spiega prima ogni elemento e lascia in pace volumi e archivi a meno che tu non li selezioni. La scansione è gratuita, così vedi la dimensione prima di decidere.",
      ],
      ctaText: "Recupera lo spazio di Xcode e Docker sul tuo Mac con DiskMop",
    },
    pt: {
      title:
        "Como liberar o espaço usado por Xcode, simuladores e Docker no Mac",
      metaDescription:
        "DerivedData do Xcode, simuladores antigos, Device Support, arquivos de build e imagens do Docker podem ocupar dezenas de GB. O que dá para apagar e como o DiskMop limpa.",
      subtitle:
        "Ferramentas de desenvolvimento enchem o Mac em silêncio: o que apagar, o que manter e o que volta",
      intro: [
        "Resumindo: os maiores consumidores de espaço de desenvolvimento num Mac são o DerivedData do Xcode, runtimes e simuladores antigos, arquivos Device Support de iPhones conectados, arquivos de build e imagens sem uso e o cache de build do Docker. A maioria é reconstruída ou baixada de novo quando necessário, então apagar é seguro. O DiskMop para Mac limpa tudo em Liberar espaço e Espaço do macOS e diz o que acontece com cada item.",
        "Este guia explica onde cada um fica, quais dá para apagar sem pensar, quais não podem ser recriados e como fazer isso à mão ou com o DiskMop.",
      ],
      keyTakeaways: [
        "O DerivedData do Xcode e os caches de simuladores são reconstruídos pelo Xcode; o próximo build é mais lento uma vez. Os arquivos Device Support são copiados de novo do dispositivo quando você o conecta.",
        "Os arquivos de build do Xcode são diferentes: guardam as compilações publicadas e servem para simbolizar relatórios de falhas. O DiskMop os deixa desmarcados e indica que a remoção não pode ser desfeita.",
        "As imagens de sistema dos simuladores podem ser baixadas de novo em Xcode > Ajustes > Components, e simuladores antigos sem imagem não iniciam de qualquer forma; o DiskMop os remove com a ferramenta simctl do próprio sistema.",
        "O item Docker do DiskMop executa docker system prune: imagens sem uso, contêineres parados, redes e cache de build são removidos, e os volumes, onde ficam seus dados, nunca são tocados.",
      ],
      dataTable: {
        caption:
          "Armazenamento de desenvolvimento no Mac: o que é e o que acontece se você apagar",
        columns: ["Item", "Onde fica", "Se você apagar", "No DiskMop"],
        rows: [
          [
            "DerivedData do Xcode",
            "~/Library/Developer/Xcode/DerivedData",
            "O Xcode reconstrói; um build mais lento",
            "Liberar espaço, marcado por padrão",
          ],
          [
            "Caches, runtimes e simuladores antigos",
            "~/Library/Developer/CoreSimulator e imagens do sistema",
            "Reconstruídos ou baixados de novo; simuladores antigos não iniciam de qualquer forma",
            "Liberar espaço e Espaço do macOS",
          ],
          [
            "Arquivos Device Support",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "Copiados de novo do dispositivo na próxima conexão",
            "Liberar espaço",
          ],
          [
            "Arquivos de build do Xcode",
            "~/Library/Developer/Xcode/Archives",
            "Não podem ser recriados; necessários para símbolos de falhas",
            "Liberar espaço, desmarcado, irreversível",
          ],
          [
            "Imagens do Docker e cache de build",
            "Dados do Docker Desktop",
            "Baixados ou reconstruídos quando necessário; volumes ficam",
            "Espaço do macOS",
          ],
        ],
      },
      howTo: {
        name: "Liberar armazenamento de desenvolvimento no Mac com o DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abra Liberar espaço",
            text: "Inicie o DiskMop e escolha Liberar espaço. O DerivedData do Xcode e os caches de simuladores aparecem se você os tiver.",
          },
          {
            name: "Leia o que cada item diz",
            text: "Cada linha explica o que acontece se você limpar. O DerivedData vem marcado; os arquivos de build do Xcode não, e são indicados como irreversíveis.",
          },
          {
            name: "Abra Espaço do macOS",
            text: "Escolha Espaço do macOS para imagens de sistema de simuladores, simuladores antigos e imagens sem uso e cache de build do Docker.",
          },
          {
            name: "Marque e limpe",
            text: "Marque o que quer remover e clique no botão de limpar. Confirme que o Docker não está no meio de um build.",
          },
          {
            name: "Reconstrua uma vez",
            text: "Abra o projeto no Xcode. O primeiro build é mais lento enquanto o DerivedData é reconstruído; depois volta ao normal.",
          },
        ],
      },
      sections: [
        {
          title: "Por que ferramentas de desenvolvimento ocupam tanto",
          content: [
            "O Xcode guarda arquivos intermediários dos builds para o próximo ser rápido, copia símbolos de depuração de cada dispositivo conectado e instala uma imagem completa do sistema para cada versão de simulador. O Docker guarda cada imagem baixada e um cache de build que cresce a cada build. Nada disso está errado; é otimizado para velocidade e nunca se limpa sozinho.",
            "Em um Mac com disco de 256 GB ou 512 GB, isso costuma ser a diferença entre um disco confortável e um cheio. Se soa familiar, [o que enche o disco de inicialização do Mac](/blog/mac-startup-disk-almost-full) cobre o lado não desenvolvedor.",
          ],
        },
        {
          title: "Xcode: DerivedData, Device Support e arquivos de build",
          content: [
            "O DerivedData guarda arquivos intermediários dos seus builds em ~/Library/Developer/Xcode/DerivedData. Apagá-lo é uma correção padrão para erros de build estranhos e custa um build mais lento. O Device Support, em ~/Library/Developer/Xcode/iOS DeviceSupport e na pasta do watchOS, guarda símbolos copiados de iPhones e iPads conectados; o Xcode os copia de novo na próxima vez, o que leva alguns minutos.",
            "Os arquivos de build, em ~/Library/Developer/Xcode/Archives, são as compilações feitas para publicação. Servem para simbolizar relatórios de falhas de versões publicadas e você não consegue recriar o build exato, então o DiskMop os deixa desmarcados e avisa que a remoção não pode ser desfeita. Apague apenas arquivos de versões que você nunca precisará depurar.",
          ],
        },
        {
          title: "Simuladores e runtimes",
          content: [
            "Cada versão de simulador tem uma imagem do sistema, muitas vezes de vários gigabytes, que o Xcode baixa e gerencia em Xcode > Ajustes > Components. Você pode baixá-la de novo quando precisar, então remover imagens de versões que não testa mais é seguro. Simuladores cuja imagem do sistema já sumiu não iniciam, e a ferramenta do próprio sistema, xcrun simctl delete unavailable, os remove.",
            "O DiskMop faz isso pela mesma ferramenta simctl, não apagando pastas do sistema, e lista em Espaço do macOS com uma descrição do que acontece. Os caches de simuladores, dados temporários que eles reconstroem na próxima inicialização, ficam na página Liberar espaço.",
          ],
        },
        {
          title: "Docker: imagens, cache de build e volumes",
          content: [
            "docker system df mostra o que o Docker usa; docker system prune remove contêineres parados, redes sem uso e imagens soltas, e com a opção -a todas as imagens sem uso. O item Docker do DiskMop remove imagens sem uso, contêineres parados, redes e cache de build e nunca toca nos volumes, onde ficam bancos de dados e outros dados. O Docker baixa ou reconstrói o que precisar da próxima vez; espere downloads mais lentos uma vez.",
            "Isso roda pelo comando do próprio Docker, então o Docker precisa estar instalado e não ocupado. A verificação é gratuita; limpar muitos itens de uma vez faz parte do DiskMop Pro, uma compra única, e a versão gratuita permite testar algumas remoções individuais. Os itens de desenvolvimento funcionam na versão que você baixa em diskmop.com. Caches de pacotes como npm, Yarn, pip, Homebrew, CocoaPods, Gradle e Cargo aparecem em Liberar espaço e vêm desmarcados por padrão; suas ferramentas os baixam de novo. Para outros arquivos grandes, veja [como encontrar arquivos grandes no Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "É seguro apagar o DerivedData do Xcode?",
          answer:
            "Sim. O Xcode o reconstrói. O próximo build é mais lento uma vez, e apagar o DerivedData é uma correção comum para erros de build estranhos.",
        },
        {
          question: "Posso apagar os arquivos de build do Xcode?",
          answer:
            "Só se você nunca precisar depurar essas versões. Eles servem para simbolizar relatórios de falhas e não podem ser recriados, então o DiskMop os deixa desmarcados e indica a remoção como irreversível.",
        },
        {
          question: "O DiskMop apaga meus volumes do Docker?",
          answer:
            "Não. Com docker system prune ele remove imagens sem uso, contêineres parados, redes e cache de build e nunca toca nos volumes, onde seus dados ficam guardados.",
        },
        {
          question: "Como removo simuladores antigos do iOS?",
          answer:
            "Apague as imagens de sistema de simuladores que você não testa mais em Xcode > Ajustes > Components e execute xcrun simctl delete unavailable para simuladores sem imagem. O DiskMop lista ambos em Espaço do macOS.",
        },
      ],
      verdict: [
        "Ferramentas de desenvolvimento transformam em silêncio um Mac de 256 ou 512 GB em um cheio. Quase tudo que guardam é reconstruído ou baixado de novo, e a única coisa que não é, os arquivos de build do Xcode, merece uma decisão deliberada.",
        "O DiskMop para Mac limpa DerivedData, simuladores, Device Support e os dados sem uso do Docker, explica cada item antes e deixa seus volumes e arquivos de build em paz a menos que você os marque. A verificação é gratuita, então você vê o tamanho antes de decidir.",
      ],
      ctaText:
        "Recupere o espaço do Xcode e do Docker no seu Mac com o DiskMop",
    },
    ja: {
      title: "MacでXcode、シミュレータ、Dockerが使っている容量を空ける方法",
      metaDescription:
        "XcodeのDerivedData、古いシミュレータ、Device Supportファイル、アーカイブ、Dockerイメージは数十GBになることがあります。それぞれの正体、削除して安全なもの、DiskMopでの整理方法を解説します。",
      subtitle:
        "開発ツールはMacを静かに埋めていく：何を消し、何を残し、何が戻ってくるのか",
      intro: [
        "結論から言うと、Macで開発者の容量を最も食うのは、XcodeのDerivedData、シミュレータのランタイムと古いシミュレータ、接続したiPhoneのDevice Supportファイル、ビルドのアーカイブ、Dockerの未使用イメージとビルドキャッシュです。多くは必要なときに再生成または再ダウンロードされるため、削除して安全です。Mac版DiskMopは「空き容量を増やす」と「macOSの使用領域」から整理し、各項目で何が起きるかを説明します。",
        "このガイドでは、それぞれがどこにあるか、気軽に消せるもの、再作成できないもの、手動またはDiskMopで行う方法を説明します。",
      ],
      keyTakeaways: [
        "XcodeのDerivedDataとシミュレータのキャッシュはXcodeが再生成します。次のビルドが1回だけ遅くなります。Device Supportファイルは、デバイスを接続したときに再びコピーされます。",
        "Xcodeのアーカイブは別物です。リリースしたビルドを保持し、クラッシュレポートのシンボル化に必要です。DiskMopはチェックなしのままにし、削除は取り消せないと示します。",
        "シミュレータのシステムイメージはXcode>設定>Componentsから再ダウンロードでき、イメージがない古いシミュレータはそもそも起動できません。DiskMopはそれらをシステム標準のsimctlツールで削除します。",
        "DiskMopのDocker項目はdocker system pruneを実行します。未使用のイメージ、停止中のコンテナ、ネットワーク、ビルドキャッシュが削除され、データがあるボリュームには一切触れません。",
      ],
      dataTable: {
        caption: "Macの開発者向けストレージ：何であり、消すとどうなるか",
        columns: ["項目", "場所", "消した場合", "DiskMopでは"],
        rows: [
          [
            "XcodeのDerivedData",
            "~/Library/Developer/Xcode/DerivedData",
            "Xcodeが再生成。ビルドが1回遅くなる",
            "「空き容量を増やす」、初期状態でチェック済み",
          ],
          [
            "シミュレータのキャッシュ、ランタイム、古いシミュレータ",
            "~/Library/Developer/CoreSimulatorとシステムイメージ",
            "再生成または再ダウンロード。古いシミュレータはそもそも起動不可",
            "「空き容量を増やす」と「macOSの使用領域」",
          ],
          [
            "Device Supportファイル",
            "~/Library/Developer/Xcode/iOS DeviceSupport",
            "次の接続時にデバイスから再コピー",
            "「空き容量を増やす」",
          ],
          [
            "Xcodeのアーカイブ",
            "~/Library/Developer/Xcode/Archives",
            "再作成不可。クラッシュのシンボルに必要",
            "「空き容量を増やす」、チェックなし、取り消し不可",
          ],
          [
            "Dockerのイメージとビルドキャッシュ",
            "Docker Desktopのデータ",
            "必要時に再取得または再ビルド。ボリュームは残る",
            "「macOSの使用領域」",
          ],
        ],
      },
      howTo: {
        name: "DiskMopでMacの開発者向けストレージを空ける",
        totalTime: "PT10M",
        steps: [
          {
            name: "「空き容量を増やす」を開く",
            text: "DiskMopを起動して「空き容量を増やす」を選びます。XcodeのDerivedDataとシミュレータのキャッシュがあれば表示されます。",
          },
          {
            name: "各項目の説明を読む",
            text: "各行に、整理した場合に何が起きるかが書かれています。DerivedDataはチェック済み、Xcodeのアーカイブはチェックなしで、取り消し不可と表示されます。",
          },
          {
            name: "「macOSの使用領域」を開く",
            text: "シミュレータのシステムイメージ、古いシミュレータ、Dockerの未使用イメージとビルドキャッシュは「macOSの使用領域」で確認します。",
          },
          {
            name: "チェックして整理する",
            text: "不要なものにチェックを入れ、整理ボタンを押します。Dockerがビルド中でないことを確認してください。",
          },
          {
            name: "一度だけ再ビルドする",
            text: "Xcodeでプロジェクトを開きます。DerivedDataの再生成中は最初のビルドが遅くなりますが、その後は元に戻ります。",
          },
        ],
      },
      sections: [
        {
          title: "開発ツールが大きな容量を使う理由",
          content: [
            "Xcodeは次のビルドを速くするためにビルドの中間ファイルを保持し、接続した各デバイスからデバッグ用シンボルをコピーし、シミュレータのバージョンごとに完全なシステムイメージをインストールします。Dockerは取得したすべてのイメージと、ビルドのたびに増えるビルドキャッシュを保持します。どれも間違いではなく、速度のために最適化されていて、自動では整理されません。",
            "256GBや512GBのドライブのMacでは、これがゆとりのあるディスクと満杯のディスクの差になることがよくあります。心当たりがあるなら、開発者以外の面は[Macの起動ディスクを埋めているもの](/blog/mac-startup-disk-almost-full)で扱っています。",
          ],
        },
        {
          title: "Xcode：DerivedData、Device Support、アーカイブ",
          content: [
            "DerivedDataは~/Library/Developer/Xcode/DerivedDataにビルドの中間ファイルを保持します。削除は妙なビルドエラーへの定番の対処で、コストはビルド1回分の遅れだけです。~/Library/Developer/Xcode/iOS DeviceSupportとwatchOSフォルダにあるDevice Supportは、接続したiPhoneやiPadからコピーしたシンボルを保持します。Xcodeは次回に再びコピーし、数分かかります。",
            "~/Library/Developer/Xcode/Archivesのアーカイブは、リリース用に作ったビルドです。リリース済みバージョンのクラッシュレポートをシンボル化するために必要で、同一のビルドは再作成できません。そのためDiskMopはチェックなしのままにし、削除は取り消せないと警告します。デバッグする可能性のないバージョンのアーカイブだけを削除してください。",
          ],
        },
        {
          title: "シミュレータとランタイム",
          content: [
            "シミュレータの各バージョンには、しばしば数GBのシステムイメージがあり、Xcodeが「Xcode>設定>Components」でダウンロードと管理を行います。必要なときに再ダウンロードできるので、もうテストしないバージョンのイメージを削除しても安全です。システムイメージがすでにないシミュレータは起動できず、システム標準のツールであるxcrun simctl delete unavailableで削除できます。",
            "DiskMopはシステムフォルダを消すのではなく、同じsimctlツールでこれを行い、何が起きるかの説明とともに「macOSの使用領域」に一覧します。次回の起動時にシミュレータが再生成する一時データであるシミュレータのキャッシュは、「空き容量を増やす」ページにあります。",
          ],
        },
        {
          title: "Docker：イメージ、ビルドキャッシュ、ボリューム",
          content: [
            "docker system dfはDockerの使用量を表示し、docker system pruneは停止中のコンテナ、未使用のネットワーク、宙に浮いたイメージを削除し、-aオプションを付けると未使用のイメージをすべて削除します。DiskMopのDocker項目は、未使用のイメージ、停止中のコンテナ、ネットワーク、ビルドキャッシュを削除し、データベースなどのデータがあるボリュームには決して触れません。Dockerは次回必要なものを再取得または再ビルドするので、1回だけ取得が遅くなると考えてください。",
            "これはDocker自身のコマンドで実行されるため、Dockerがインストールされていて、処理中でないことが必要です。スキャンは無料で、多数の項目をまとめて整理するのは買い切りのDiskMop Proの機能です。無料版では1件ずつの削除を数回試せます。開発者向けの項目は、diskmop.comからダウンロードするバージョンで動作します。npm、Yarn、pip、Homebrew、CocoaPods、Gradle、Cargoなどのパッケージキャッシュは「空き容量を増やす」に表示され、初期状態ではチェックなしです。ツールが再ダウンロードします。ほかの大きなファイルについては[Macで大きなファイルを見つける方法](/blog/find-large-files-mac)を参照してください。",
          ],
        },
      ],
      faq: [
        {
          question: "XcodeのDerivedDataを削除しても安全ですか？",
          answer:
            "はい。Xcodeが再生成します。次のビルドが1回だけ遅くなり、DerivedDataの削除は妙なビルドエラーへの一般的な対処です。",
        },
        {
          question: "Xcodeのアーカイブを削除してもいいですか？",
          answer:
            "それらのリリースをデバッグする可能性がない場合に限ります。アーカイブはクラッシュレポートのシンボル化に必要で、再作成できません。そのためDiskMopはチェックなしのままにし、削除は取り消せないと示します。",
        },
        {
          question: "DiskMopはDockerのボリュームを削除しますか？",
          answer:
            "いいえ。docker system pruneで未使用のイメージ、停止中のコンテナ、ネットワーク、ビルドキャッシュを削除し、データが保存されているボリュームには決して触れません。",
        },
        {
          question: "古いiOSシミュレータを削除するには？",
          answer:
            "もうテストしないシミュレータのシステムイメージを「Xcode>設定>Components」で削除し、イメージがないシミュレータにはxcrun simctl delete unavailableを実行します。DiskMopは両方を「macOSの使用領域」に一覧します。",
        },
      ],
      verdict: [
        "開発ツールは、256GBや512GBのMacを静かに満杯にします。保持しているものの大半は再生成または再ダウンロードされ、そうならない唯一のもの、Xcodeのアーカイブは、意図的な判断に値します。",
        "Mac版DiskMopはDerivedData、シミュレータ、Device Support、Dockerの未使用データを整理し、まず各項目を説明し、チェックしない限りボリュームとアーカイブには触れません。スキャンは無料なので、決める前にサイズを確認できます。",
      ],
      ctaText: "DiskMopでMacのXcodeとDockerの容量を取り戻す",
    },
  },
};
