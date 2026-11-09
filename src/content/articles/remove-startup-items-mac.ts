import type { Article } from "../types";

export const removeStartupItemsMac: Article = {
  slug: "remove-startup-items-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-11-09",
  updated: "2026-11-09",
  readingTime: 6,
  content: {
    en: {
      title: "How to Stop Apps From Opening at Startup on Mac",
      metaDescription:
        "Remove Login Items in System Settings and switch off background launch agents that slow your Mac's startup. Learn the difference, and how DiskMop lists and turns them off safely.",
      subtitle:
        "Two lists decide what starts with your Mac: Login Items and background launch agents",
      intro: [
        "Short answer: open System Settings > General > Login Items & Extensions, remove the apps you do not want under Open at Login, and switch off the ones you do not need under Allow in the Background. That covers what macOS shows you. Many helper programs start through launch agents instead, and DiskMop for Mac lists those in System health and turns off the ones you own.",
        "This guide explains both lists, why a Mac gets slower to start when they fill up, and how to turn items off without uninstalling anything.",
      ],
      keyTakeaways: [
        "Login Items (System Settings > General > Login Items & Extensions) are the apps that open when you sign in; Allow in the Background controls helpers that run without a window.",
        "Many programs also start through launch agents and daemons, small settings files in LaunchAgents and LaunchDaemons folders. DiskMop's System health page lists them with the program each one starts.",
        "DiskMop switches off agents in your own Library > LaunchAgents folder; the program stays installed and its settings file is kept, so it can be turned back on. Items in the system-wide /Library folders are shown but not changed.",
        "Turning an item off does not delete anything, so it is a safe way to see what a slow startup was waiting for.",
      ],
      dataTable: {
        caption: "What starts with your Mac and where to manage it",
        columns: [
          "Kind",
          "Where it lives",
          "Where to manage it",
          "What DiskMop does",
        ],
        rows: [
          [
            "Login Items",
            "Apps added to open at login",
            "System Settings > General > Login Items & Extensions",
            "Nothing: use System Settings",
          ],
          [
            "Background items",
            "Helpers allowed to run in the background",
            "Allow in the Background in the same pane",
            "Nothing: use System Settings",
          ],
          [
            "User launch agents",
            "~/Library/LaunchAgents",
            "Needs a tool or Terminal",
            "Lists and turns off; reversible",
          ],
          [
            "System agents and daemons",
            "/Library/LaunchAgents and /Library/LaunchDaemons",
            "Belong to the system or an installer",
            "Lists as read-only",
          ],
        ],
      },
      howTo: {
        name: "Stop apps from opening at startup on a Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open Login Items & Extensions",
            text: "Open System Settings, choose General and then Login Items & Extensions.",
          },
          {
            name: "Remove apps from Open at Login",
            text: "Select an app you do not want at startup and click the minus button. The app stays installed.",
          },
          {
            name: "Switch off background items",
            text: "Under Allow in the Background, turn off helpers you do not need. Leave anything you do not recognise on until you have looked it up.",
          },
          {
            name: "Review launch agents in DiskMop",
            text: "Open System health in DiskMop to see the programs that start by themselves, each with the program it runs.",
          },
          {
            name: "Turn off what you own and restart",
            text: "Turn off the user-level items you do not need, then restart your Mac and compare the startup time.",
          },
        ],
      },
      sections: [
        {
          title: "Why Startup Gets Slower",
          content: [
            "Every program that starts at login competes for the processor, the disk and memory while your Mac is still finishing the sign-in. Update helpers, chat clients, cloud sync tools, printer utilities and vendor agents add up, and each one keeps running afterwards, using memory that your active apps could have used.",
            "Most of them are useful to someone and harmless in small numbers. The goal is not zero, it is to stop what you never asked for. If the disk itself is nearly full, startup also suffers, which [what fills a Mac startup disk](/blog/mac-startup-disk-almost-full) covers.",
          ],
        },
        {
          title: "Login Items and Background Items in System Settings",
          content: [
            "In System Settings > General > Login Items & Extensions the top list, Open at Login, holds apps that open a window or icon when you sign in. Select one and click the minus button to remove it. Below it, Allow in the Background lists helpers that run without opening anything, each with a switch you can turn off.",
            "On older versions of macOS the same list is in System Preferences > Users & Groups > Login Items. Removing an entry does not uninstall the app; it only stops it from starting by itself.",
          ],
        },
        {
          title: "Launch Agents and Daemons",
          content: [
            "Apart from those lists, programs can register themselves with launchd, the part of macOS that starts background work. They leave small settings files in three places: your own Library > LaunchAgents folder, the system-wide /Library/LaunchAgents folder and /Library/LaunchDaemons. Software for printers, VPNs, updaters and cloud storage often does this.",
            "DiskMop's System health page lists these with the program each one starts. Agents in your own folder can be turned off from the list: DiskMop disables the agent and stops it, keeps the program installed and keeps its file, so you can turn it back on. Items in the /Library folders belong to the system or to an installer and are only shown. This feature is part of the version you download from diskmop.com.",
          ],
        },
        {
          title: "How to Decide What to Turn Off",
          content: [
            "Turn off what you recognise and do not need at login: a chat app you open yourself, a game launcher, an updater for software you rarely use. Look up names you do not recognise before you touch them, and leave security software, drivers and anything from Apple alone.",
            "Because turning off keeps the program installed, it is easy to test: switch an item off, restart, and switch it back on if something stops working. Scanning is free; changing several items at once is part of DiskMop Pro, a one-time purchase. If an app is gone for good, [delete its leftovers](/blog/delete-app-leftovers-mac) as well.",
          ],
        },
      ],
      faq: [
        {
          question: "How do I stop apps from opening when my Mac starts?",
          answer:
            "Open System Settings > General > Login Items & Extensions, select the app under Open at Login and click the minus button. Turn off helpers you do not need under Allow in the Background.",
        },
        {
          question: "Does removing a login item uninstall the app?",
          answer:
            "No. It only stops the app from starting by itself. You can still open it yourself and add it back later.",
        },
        {
          question: "What are launch agents and daemons?",
          answer:
            "Small settings files that tell macOS to start a program in the background. They live in your Library > LaunchAgents folder and in the system-wide /Library/LaunchAgents and /Library/LaunchDaemons folders.",
        },
        {
          question: "Is it safe to turn off startup items in DiskMop?",
          answer:
            "Yes for items in your own folder: the program stays installed and the settings file is kept, so you can turn it back on. DiskMop only shows the system-wide items and does not change them.",
        },
      ],
      verdict: [
        "Two lists decide what starts with your Mac. System Settings handles Login Items and background items, and background agents are the part most people never see.",
        "DiskMop for Mac lists those agents, shows what each one runs and turns off the ones you own without uninstalling anything. Scanning is free, so you can look before you change a thing.",
      ],
      ctaText: "See what starts with your Mac using DiskMop",
    },
    tr: {
      title: "Mac'te Uygulamaların Açılışta Başlamasını Durdurma",
      metaDescription:
        "Sistem Ayarları'nda Oturum Açma Öğelerini kaldırın, Mac'inizin açılışını yavaşlatan arka plan başlatıcılarını kapatın. Farkı ve DiskMop'un bunları nasıl güvenle listeleyip kapattığını öğrenin.",
      subtitle:
        "Mac'inizle neyin başladığına iki liste karar verir: Oturum Açma Öğeleri ve arka plan başlatıcıları",
      intro: [
        "Kısa cevap: Sistem Ayarları > Genel > Oturum Açma Öğeleri ve Uzantılar'ı açın, Oturum Açılırken Aç altında istemediğiniz uygulamaları kaldırın, Arka Planda Çalışmaya İzin Ver altında gerek duymadıklarınızı kapatın. Bu, macOS'un size gösterdiklerini kapsar. Birçok yardımcı program bunun yerine başlatıcılar (launch agent) ile başlar; Mac için DiskMop bunları Sistem sağlığı'nda listeler ve size ait olanları kapatır.",
        "Bu rehber iki listeyi, dolduklarında Mac'in açılışının neden yavaşladığını ve hiçbir şeyi kaldırmadan öğelerin nasıl kapatılacağını anlatır.",
      ],
      keyTakeaways: [
        "Oturum Açma Öğeleri (Sistem Ayarları > Genel > Oturum Açma Öğeleri ve Uzantılar) oturum açınca açılan uygulamalardır; Arka Planda Çalışmaya İzin Ver, pencere açmadan çalışan yardımcıları denetler.",
        "Birçok program ayrıca başlatıcılar ve daemon'lar ile başlar; bunlar LaunchAgents ve LaunchDaemons klasörlerindeki küçük ayar dosyalarıdır. DiskMop'un Sistem sağlığı sayfası bunları, her birinin başlattığı programla listeler.",
        "DiskMop kendi Library > LaunchAgents klasörünüzdeki başlatıcıları kapatır; program yüklü kalır ve ayar dosyası korunur, böylece yeniden açılabilir. Sistem genelindeki /Library klasörlerindeki öğeler gösterilir ama değiştirilmez.",
        "Bir öğeyi kapatmak hiçbir şeyi silmez; yavaş bir açılışın neyi beklediğini görmenin güvenli yoludur.",
      ],
      dataTable: {
        caption: "Mac'inizle ne başlar ve nereden yönetilir",
        columns: [
          "Tür",
          "Nerede durur",
          "Nereden yönetilir",
          "DiskMop ne yapar",
        ],
        rows: [
          [
            "Oturum Açma Öğeleri",
            "Oturum açılırken açılacak uygulamalar",
            "Sistem Ayarları > Genel > Oturum Açma Öğeleri ve Uzantılar",
            "Bir şey yapmaz: Sistem Ayarları'nı kullanın",
          ],
          [
            "Arka plan öğeleri",
            "Arka planda çalışmasına izin verilen yardımcılar",
            "Aynı bölmede Arka Planda Çalışmaya İzin Ver",
            "Bir şey yapmaz: Sistem Ayarları'nı kullanın",
          ],
          [
            "Kullanıcı başlatıcıları",
            "~/Library/LaunchAgents",
            "Araç ya da Terminal gerekir",
            "Listeler ve kapatır; geri alınabilir",
          ],
          [
            "Sistem başlatıcıları ve daemon'lar",
            "/Library/LaunchAgents ve /Library/LaunchDaemons",
            "Sisteme veya bir yükleyiciye aittir",
            "Salt okunur olarak listeler",
          ],
        ],
      },
      howTo: {
        name: "Mac'te uygulamaların açılışta başlamasını durdurun",
        totalTime: "PT10M",
        steps: [
          {
            name: "Oturum Açma Öğeleri ve Uzantılar'ı açın",
            text: "Sistem Ayarları'nı açın, Genel'i ve ardından Oturum Açma Öğeleri ve Uzantılar'ı seçin.",
          },
          {
            name: "Oturum Açılırken Aç'tan uygulama kaldırın",
            text: "Açılışta istemediğiniz bir uygulamayı seçip eksi düğmesine tıklayın. Uygulama yüklü kalır.",
          },
          {
            name: "Arka plan öğelerini kapatın",
            text: "Arka Planda Çalışmaya İzin Ver altında gerek duymadığınız yardımcıları kapatın. Tanımadığınız bir şeye bakıp öğrenene kadar açık bırakın.",
          },
          {
            name: "Başlatıcıları DiskMop'ta inceleyin",
            text: "Kendi kendine başlayan programları, her birinin çalıştırdığı programla görmek için DiskMop'ta Sistem sağlığı'nı açın.",
          },
          {
            name: "Size ait olanları kapatıp yeniden başlatın",
            text: "Gerek duymadığınız kullanıcı düzeyindeki öğeleri kapatın, Mac'i yeniden başlatın ve açılış süresini karşılaştırın.",
          },
        ],
      },
      sections: [
        {
          title: "Açılış Neden Yavaşlar",
          content: [
            "Oturum açılırken başlayan her program, Mac oturum açmayı bitirirken işlemci, disk ve bellek için yarışır. Güncelleme yardımcıları, sohbet istemcileri, bulut eşitleme araçları, yazıcı yardımcıları ve üretici başlatıcıları birikir ve her biri sonrasında da çalışmayı sürdürüp etkin uygulamalarınızın kullanabileceği belleği tutar.",
            "Çoğu birine yararlıdır ve az sayıda zararsızdır. Hedef sıfır değil, hiç istemediğiniz şeyleri durdurmaktır. Disk de neredeyse doluysa açılış zorlanır; bunu [Mac başlangıç diskini ne doldurur](/blog/mac-startup-disk-almost-full) yazısı ele alır.",
          ],
        },
        {
          title: "Sistem Ayarları'nda Oturum Açma ve Arka Plan Öğeleri",
          content: [
            "Sistem Ayarları > Genel > Oturum Açma Öğeleri ve Uzantılar'da üstteki Oturum Açılırken Aç listesi, oturum açınca pencere veya simge açan uygulamaları tutar. Birini seçip eksi düğmesine tıklayarak kaldırın. Altındaki Arka Planda Çalışmaya İzin Ver listesi, hiçbir şey açmadan çalışan yardımcıları, her biri kapatabileceğiniz bir anahtarla gösterir.",
            "macOS'un eski sürümlerinde aynı liste Sistem Tercihleri > Kullanıcılar ve Gruplar > Oturum Açma Öğeleri'ndedir. Bir girişi kaldırmak uygulamayı silmez; yalnızca kendi kendine başlamasını durdurur.",
          ],
        },
        {
          title: "Başlatıcılar (Launch Agent) ve Daemon'lar",
          content: [
            "Bu listelerin dışında programlar kendilerini, macOS'un arka plan işlerini başlatan parçası olan launchd'ye kaydedebilir. Üç yerde küçük ayar dosyaları bırakırlar: kendi Library > LaunchAgents klasörünüz, sistem genelindeki /Library/LaunchAgents ve /Library/LaunchDaemons. Yazıcı, VPN, güncelleyici ve bulut depolama yazılımları bunu sık yapar.",
            "DiskMop'un Sistem sağlığı sayfası bunları, her birinin başlattığı programla listeler. Kendi klasörünüzdeki başlatıcılar listeden kapatılabilir: DiskMop başlatıcıyı devre dışı bırakıp durdurur, programı yüklü ve dosyasını saklı tutar; böylece yeniden açabilirsiniz. /Library klasörlerindeki öğeler sisteme ya da bir yükleyiciye aittir ve yalnızca gösterilir. Bu özellik diskmop.com'dan indirdiğiniz sürümün parçasıdır.",
          ],
        },
        {
          title: "Neyi Kapatacağınıza Nasıl Karar Verirsiniz",
          content: [
            "Tanıdığınız ve oturum açarken gerek duymadığınız şeyleri kapatın: kendiniz açtığınız bir sohbet uygulaması, bir oyun başlatıcısı, nadiren kullandığınız yazılımın güncelleyicisi. Tanımadığınız adlara dokunmadan önce araştırın; güvenlik yazılımlarına, sürücülere ve Apple'a ait her şeye dokunmayın.",
            "Kapatmak programı yüklü bıraktığı için denemesi kolaydır: bir öğeyi kapatın, yeniden başlatın, bir şey bozulursa yeniden açın. Tarama ücretsizdir; birden çok öğeyi aynı anda değiştirmek tek seferlik satın alınan DiskMop Pro'nun parçasıdır. Bir uygulama kalıcı olarak gittiyse [artıklarını da silin](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Mac açılırken uygulamaların açılmasını nasıl durdururum?",
          answer:
            "Sistem Ayarları > Genel > Oturum Açma Öğeleri ve Uzantılar'ı açın, Oturum Açılırken Aç altında uygulamayı seçip eksi düğmesine tıklayın. Gerek duymadığınız yardımcıları Arka Planda Çalışmaya İzin Ver altında kapatın.",
        },
        {
          question: "Bir oturum açma öğesini kaldırmak uygulamayı siler mi?",
          answer:
            "Hayır. Yalnızca uygulamanın kendi kendine başlamasını durdurur. Yine kendiniz açabilir ve sonra geri ekleyebilirsiniz.",
        },
        {
          question: "Başlatıcılar (launch agent) ve daemon nedir?",
          answer:
            "macOS'a bir programı arka planda başlatmasını söyleyen küçük ayar dosyalarıdır. Library > LaunchAgents klasörünüzde ve sistem genelindeki /Library/LaunchAgents ile /Library/LaunchDaemons klasörlerinde bulunurlar.",
        },
        {
          question: "DiskMop'ta açılış öğelerini kapatmak güvenli mi?",
          answer:
            "Kendi klasörünüzdeki öğeler için evet: program yüklü kalır ve ayar dosyası saklanır, böylece yeniden açabilirsiniz. DiskMop sistem genelindeki öğeleri yalnızca gösterir, değiştirmez.",
        },
      ],
      verdict: [
        "Mac'inizle neyin başladığına iki liste karar verir. Sistem Ayarları Oturum Açma ve arka plan öğelerini yönetir; arka plan başlatıcıları ise çoğu kişinin hiç görmediği kısımdır.",
        "Mac için DiskMop bu başlatıcıları listeler, her birinin ne çalıştırdığını gösterir ve size ait olanları hiçbir şeyi kaldırmadan kapatır. Tarama ücretsiz; bir şeyi değiştirmeden önce bakabilirsiniz.",
      ],
      ctaText: "DiskMop ile Mac'inizle neyin başladığını görün",
    },
    de: {
      title: "Apps beim Start des Mac nicht mehr automatisch öffnen",
      metaDescription:
        "Entfernen Sie Anmeldeobjekte in den Systemeinstellungen und schalten Sie Hintergrund-Startagenten aus, die den Start Ihres Mac bremsen. So listet und deaktiviert DiskMop sie sicher.",
      subtitle:
        "Zwei Listen entscheiden, was mit Ihrem Mac startet: Anmeldeobjekte und Hintergrund-Startagenten",
      intro: [
        "Kurz gesagt: Öffnen Sie Systemeinstellungen > Allgemein > Anmeldeobjekte & Erweiterungen, entfernen Sie unter Beim Anmelden öffnen die unerwünschten Apps und schalten Sie unter Im Hintergrund erlauben aus, was Sie nicht brauchen. Das deckt ab, was macOS Ihnen zeigt. Viele Hilfsprogramme starten stattdessen über Startagenten; DiskMop für Mac listet diese unter Systemzustand und schaltet die eigenen aus.",
        "Diese Anleitung erklärt beide Listen, warum der Mac langsamer startet, wenn sie sich füllen, und wie Sie Einträge ausschalten, ohne etwas zu deinstallieren.",
      ],
      keyTakeaways: [
        "Anmeldeobjekte (Systemeinstellungen > Allgemein > Anmeldeobjekte & Erweiterungen) sind Apps, die sich beim Anmelden öffnen; Im Hintergrund erlauben steuert Helfer, die ohne Fenster laufen.",
        "Viele Programme starten außerdem über Startagenten und Daemons, kleine Einstellungsdateien in den Ordnern LaunchAgents und LaunchDaemons. Die Seite Systemzustand von DiskMop listet sie mit dem jeweils gestarteten Programm.",
        "DiskMop schaltet Agenten in Ihrem eigenen Ordner Library > LaunchAgents aus; das Programm bleibt installiert und seine Einstellungsdatei erhalten, sodass es sich wieder einschalten lässt. Einträge in den systemweiten /Library-Ordnern werden angezeigt, aber nicht verändert.",
        "Das Ausschalten löscht nichts; so sehen Sie gefahrlos, worauf ein langsamer Start gewartet hat.",
      ],
      dataTable: {
        caption: "Was mit Ihrem Mac startet und wo Sie es verwalten",
        columns: [
          "Art",
          "Wo es liegt",
          "Wo Sie es verwalten",
          "Was DiskMop tut",
        ],
        rows: [
          [
            "Anmeldeobjekte",
            "Apps, die beim Anmelden öffnen",
            "Systemeinstellungen > Allgemein > Anmeldeobjekte & Erweiterungen",
            "Nichts: nutzen Sie die Systemeinstellungen",
          ],
          [
            "Hintergrundobjekte",
            "Helfer, die im Hintergrund laufen dürfen",
            "Im Hintergrund erlauben im selben Bereich",
            "Nichts: nutzen Sie die Systemeinstellungen",
          ],
          [
            "Benutzer-Startagenten",
            "~/Library/LaunchAgents",
            "Braucht ein Werkzeug oder das Terminal",
            "Listet und schaltet aus; umkehrbar",
          ],
          [
            "System-Agenten und Daemons",
            "/Library/LaunchAgents und /Library/LaunchDaemons",
            "Gehören dem System oder einem Installer",
            "Listet schreibgeschützt",
          ],
        ],
      },
      howTo: {
        name: "Verhindern, dass Apps beim Start des Mac öffnen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Anmeldeobjekte & Erweiterungen öffnen",
            text: "Öffnen Sie die Systemeinstellungen, wählen Sie Allgemein und dann Anmeldeobjekte & Erweiterungen.",
          },
          {
            name: "Apps aus Beim Anmelden öffnen entfernen",
            text: "Wählen Sie eine App, die Sie beim Start nicht wollen, und klicken Sie auf die Minustaste. Die App bleibt installiert.",
          },
          {
            name: "Hintergrundobjekte ausschalten",
            text: "Schalten Sie unter Im Hintergrund erlauben Helfer aus, die Sie nicht brauchen. Lassen Sie Unbekanntes eingeschaltet, bis Sie es nachgeschlagen haben.",
          },
          {
            name: "Startagenten in DiskMop prüfen",
            text: "Öffnen Sie in DiskMop den Systemzustand, um die Programme zu sehen, die von selbst starten, jeweils mit dem ausgeführten Programm.",
          },
          {
            name: "Eigene ausschalten und neu starten",
            text: "Schalten Sie nicht benötigte Einträge auf Benutzerebene aus, starten Sie den Mac neu und vergleichen Sie die Startzeit.",
          },
        ],
      },
      sections: [
        {
          title: "Warum der Start langsamer wird",
          content: [
            "Jedes Programm, das bei der Anmeldung startet, konkurriert um Prozessor, Laufwerk und Arbeitsspeicher, während der Mac die Anmeldung noch abschließt. Update-Helfer, Chat-Clients, Cloud-Sync-Tools, Druckerprogramme und Hersteller-Agenten summieren sich, und jedes läuft danach weiter und belegt Speicher, den Ihre aktiven Apps nutzen könnten.",
            "Die meisten sind für jemanden nützlich und in kleiner Zahl harmlos. Ziel ist nicht null, sondern das zu stoppen, was Sie nie verlangt haben. Ist das Laufwerk fast voll, leidet der Start ebenfalls, wie [Was das Startvolume des Mac füllt](/blog/mac-startup-disk-almost-full) behandelt.",
          ],
        },
        {
          title: "Anmelde- und Hintergrundobjekte in den Systemeinstellungen",
          content: [
            "In Systemeinstellungen > Allgemein > Anmeldeobjekte & Erweiterungen enthält die obere Liste Beim Anmelden öffnen Apps, die beim Anmelden ein Fenster oder Symbol öffnen. Wählen Sie eine aus und klicken Sie auf die Minustaste, um sie zu entfernen. Darunter listet Im Hintergrund erlauben Helfer, die laufen, ohne etwas zu öffnen, jeweils mit einem Schalter zum Ausschalten.",
            "Bei älteren macOS-Versionen steht dieselbe Liste in Systemeinstellungen > Benutzer & Gruppen > Anmeldeobjekte. Das Entfernen eines Eintrags deinstalliert die App nicht; es verhindert nur den automatischen Start.",
          ],
        },
        {
          title: "Startagenten und Daemons",
          content: [
            "Neben diesen Listen können sich Programme bei launchd registrieren, dem Teil von macOS, der Hintergrundarbeit startet. Sie legen kleine Einstellungsdateien an drei Orten ab: Ihrem eigenen Ordner Library > LaunchAgents, dem systemweiten /Library/LaunchAgents und /Library/LaunchDaemons. Software für Drucker, VPNs, Updater und Cloud-Speicher tut das oft.",
            "Die Seite Systemzustand von DiskMop listet sie mit dem jeweils gestarteten Programm. Agenten in Ihrem eigenen Ordner lassen sich aus der Liste ausschalten: DiskMop deaktiviert den Agenten und stoppt ihn, lässt das Programm installiert und behält seine Datei, sodass Sie ihn wieder einschalten können. Einträge in den /Library-Ordnern gehören dem System oder einem Installer und werden nur angezeigt. Diese Funktion gehört zur Version, die Sie von diskmop.com laden.",
          ],
        },
        {
          title: "Entscheiden, was ausgeschaltet wird",
          content: [
            "Schalten Sie aus, was Sie erkennen und beim Anmelden nicht brauchen: eine Chat-App, die Sie selbst öffnen, einen Spiele-Launcher, einen Updater für selten genutzte Software. Schlagen Sie unbekannte Namen nach, bevor Sie sie anfassen, und lassen Sie Sicherheitssoftware, Treiber und alles von Apple in Ruhe.",
            "Da das Ausschalten das Programm installiert lässt, ist es leicht zu testen: Eintrag ausschalten, neu starten, bei Problemen wieder einschalten. Das Scannen ist kostenlos; mehrere Einträge auf einmal zu ändern gehört zu DiskMop Pro, einem einmaligen Kauf. Ist eine App endgültig weg, [löschen Sie auch ihre Überreste](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Wie verhindere ich, dass Apps beim Start des Mac öffnen?",
          answer:
            "Öffnen Sie Systemeinstellungen > Allgemein > Anmeldeobjekte & Erweiterungen, wählen Sie die App unter Beim Anmelden öffnen und klicken Sie auf die Minustaste. Schalten Sie unnötige Helfer unter Im Hintergrund erlauben aus.",
        },
        {
          question: "Deinstalliert das Entfernen eines Anmeldeobjekts die App?",
          answer:
            "Nein. Es verhindert nur den automatischen Start. Sie können die App weiterhin selbst öffnen und später wieder hinzufügen.",
        },
        {
          question: "Was sind Startagenten und Daemons?",
          answer:
            "Kleine Einstellungsdateien, die macOS anweisen, ein Programm im Hintergrund zu starten. Sie liegen in Ihrem Ordner Library > LaunchAgents sowie in den systemweiten Ordnern /Library/LaunchAgents und /Library/LaunchDaemons.",
        },
        {
          question: "Ist es sicher, Startobjekte in DiskMop auszuschalten?",
          answer:
            "Ja für Einträge in Ihrem eigenen Ordner: Das Programm bleibt installiert und die Einstellungsdatei erhalten, sodass Sie es wieder einschalten können. Systemweite Einträge zeigt DiskMop nur an und ändert sie nicht.",
        },
      ],
      verdict: [
        "Zwei Listen entscheiden, was mit Ihrem Mac startet. Die Systemeinstellungen verwalten Anmelde- und Hintergrundobjekte, und Hintergrund-Startagenten sind der Teil, den die meisten nie sehen.",
        "DiskMop für Mac listet diese Agenten, zeigt, was jeder ausführt, und schaltet die eigenen aus, ohne etwas zu deinstallieren. Das Scannen ist kostenlos, sodass Sie nachsehen können, bevor Sie etwas ändern.",
      ],
      ctaText: "Sehen Sie mit DiskMop, was mit Ihrem Mac startet",
    },
    fr: {
      title: "Empêcher les apps de s'ouvrir au démarrage du Mac",
      metaDescription:
        "Retirez les éléments d'ouverture dans Réglages Système et désactivez les agents de lancement qui ralentissent le démarrage du Mac. DiskMop les liste et les désactive sans risque.",
      subtitle:
        "Deux listes décident de ce qui démarre avec votre Mac : éléments d'ouverture et agents de lancement",
      intro: [
        "En bref : ouvrez Réglages Système > Général > Ouverture et extensions, retirez sous Ouvrir à la connexion les apps dont vous ne voulez pas, et désactivez sous Autoriser en arrière-plan celles dont vous n'avez pas besoin. Cela couvre ce que macOS vous montre. Beaucoup de programmes auxiliaires démarrent plutôt via des agents de lancement ; DiskMop pour Mac les liste dans État du système et désactive ceux qui vous appartiennent.",
        "Ce guide explique les deux listes, pourquoi le Mac démarre plus lentement quand elles se remplissent et comment désactiver des éléments sans rien désinstaller.",
      ],
      keyTakeaways: [
        "Les éléments d'ouverture (Réglages Système > Général > Ouverture et extensions) sont les apps qui s'ouvrent à la connexion ; Autoriser en arrière-plan contrôle les programmes auxiliaires qui tournent sans fenêtre.",
        "Beaucoup de programmes démarrent aussi via des agents et démons de lancement, de petits fichiers de réglages dans les dossiers LaunchAgents et LaunchDaemons. La page État du système de DiskMop les liste avec le programme que chacun lance.",
        "DiskMop désactive les agents de votre propre dossier Bibliothèque > LaunchAgents ; le programme reste installé et son fichier de réglages est conservé, on peut donc le réactiver. Les éléments des dossiers /Library du système sont affichés mais pas modifiés.",
        "Désactiver un élément ne supprime rien : c'est une façon sûre de voir ce qu'attendait un démarrage lent.",
      ],
      dataTable: {
        caption: "Ce qui démarre avec votre Mac et où le gérer",
        columns: [
          "Type",
          "Où il se trouve",
          "Où le gérer",
          "Ce que fait DiskMop",
        ],
        rows: [
          [
            "Éléments d'ouverture",
            "Apps ajoutées pour s'ouvrir à la connexion",
            "Réglages Système > Général > Ouverture et extensions",
            "Rien : utilisez Réglages Système",
          ],
          [
            "Éléments en arrière-plan",
            "Programmes autorisés à tourner en arrière-plan",
            "Autoriser en arrière-plan dans le même volet",
            "Rien : utilisez Réglages Système",
          ],
          [
            "Agents de lancement utilisateur",
            "~/Library/LaunchAgents",
            "Demande un outil ou le Terminal",
            "Liste et désactive ; réversible",
          ],
          [
            "Agents et démons système",
            "/Library/LaunchAgents et /Library/LaunchDaemons",
            "Appartiennent au système ou à un installateur",
            "Liste en lecture seule",
          ],
        ],
      },
      howTo: {
        name: "Empêcher les apps de s'ouvrir au démarrage d'un Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir Ouverture et extensions",
            text: "Ouvrez Réglages Système, choisissez Général puis Ouverture et extensions.",
          },
          {
            name: "Retirer des apps de Ouvrir à la connexion",
            text: "Sélectionnez une app dont vous ne voulez pas au démarrage et cliquez sur le bouton moins. L'app reste installée.",
          },
          {
            name: "Désactiver les éléments en arrière-plan",
            text: "Sous Autoriser en arrière-plan, désactivez les programmes dont vous n'avez pas besoin. Laissez activé ce que vous ne reconnaissez pas tant que vous ne vous êtes pas renseigné.",
          },
          {
            name: "Examiner les agents de lancement dans DiskMop",
            text: "Ouvrez État du système dans DiskMop pour voir les programmes qui démarrent seuls, chacun avec le programme qu'il lance.",
          },
          {
            name: "Désactiver les vôtres et redémarrer",
            text: "Désactivez les éléments de niveau utilisateur inutiles, redémarrez le Mac et comparez le temps de démarrage.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi le démarrage ralentit",
          content: [
            "Chaque programme qui démarre à la connexion se dispute le processeur, le disque et la mémoire alors que le Mac termine encore l'ouverture de session. Assistants de mise à jour, clients de messagerie, outils de synchronisation cloud, utilitaires d'imprimante et agents de fabricants s'accumulent, et chacun continue de tourner ensuite, occupant une mémoire que vos apps actives pourraient utiliser.",
            "La plupart sont utiles à quelqu'un et inoffensifs en petit nombre. Le but n'est pas zéro, c'est d'arrêter ce que vous n'avez jamais demandé. Si le disque est presque plein, le démarrage en pâtit aussi, ce que traite [ce qui remplit le disque de démarrage du Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
        {
          title: "Éléments d'ouverture et d'arrière-plan dans Réglages Système",
          content: [
            "Dans Réglages Système > Général > Ouverture et extensions, la liste du haut, Ouvrir à la connexion, contient les apps qui ouvrent une fenêtre ou une icône à la connexion. Sélectionnez-en une et cliquez sur le bouton moins pour la retirer. En dessous, Autoriser en arrière-plan liste les programmes auxiliaires qui tournent sans rien ouvrir, chacun avec un interrupteur à désactiver.",
            "Sur les anciennes versions de macOS, la même liste se trouve dans Préférences Système > Utilisateurs et groupes > Éléments d'ouverture. Retirer une entrée ne désinstalle pas l'app ; cela l'empêche seulement de démarrer seule.",
          ],
        },
        {
          title: "Agents et démons de lancement",
          content: [
            "En dehors de ces listes, les programmes peuvent s'enregistrer auprès de launchd, la partie de macOS qui démarre les tâches de fond. Ils laissent de petits fichiers de réglages à trois endroits : votre propre dossier Bibliothèque > LaunchAgents, le dossier système /Library/LaunchAgents et /Library/LaunchDaemons. Les logiciels d'imprimantes, de VPN, de mises à jour et de stockage cloud le font souvent.",
            "La page État du système de DiskMop les liste avec le programme que chacun lance. Les agents de votre propre dossier peuvent être désactivés depuis la liste : DiskMop désactive l'agent et l'arrête, garde le programme installé et conserve son fichier, de sorte que vous pouvez le réactiver. Les éléments des dossiers /Library appartiennent au système ou à un installateur et sont seulement affichés. Cette fonction fait partie de la version à télécharger sur diskmop.com.",
          ],
        },
        {
          title: "Comment décider quoi désactiver",
          content: [
            "Désactivez ce que vous reconnaissez et dont vous n'avez pas besoin à la connexion : une app de messagerie que vous ouvrez vous-même, un lanceur de jeux, un outil de mise à jour d'un logiciel rarement utilisé. Renseignez-vous sur les noms inconnus avant d'y toucher, et ne touchez pas aux logiciels de sécurité, aux pilotes ni à rien d'Apple.",
            "Comme désactiver laisse le programme installé, c'est facile à tester : désactivez un élément, redémarrez, réactivez-le si quelque chose cesse de fonctionner. L'analyse est gratuite ; modifier plusieurs éléments à la fois fait partie de DiskMop Pro, un achat unique. Si une app a définitivement disparu, [supprimez aussi ses restes](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question:
            "Comment empêcher des apps de s'ouvrir au démarrage du Mac ?",
          answer:
            "Ouvrez Réglages Système > Général > Ouverture et extensions, sélectionnez l'app sous Ouvrir à la connexion et cliquez sur le bouton moins. Désactivez les programmes auxiliaires inutiles sous Autoriser en arrière-plan.",
        },
        {
          question: "Retirer un élément d'ouverture désinstalle-t-il l'app ?",
          answer:
            "Non. Cela l'empêche seulement de démarrer seule. Vous pouvez toujours l'ouvrir vous-même et la rajouter plus tard.",
        },
        {
          question: "Que sont les agents et démons de lancement ?",
          answer:
            "De petits fichiers de réglages qui indiquent à macOS de démarrer un programme en arrière-plan. Ils se trouvent dans votre dossier Bibliothèque > LaunchAgents et dans les dossiers système /Library/LaunchAgents et /Library/LaunchDaemons.",
        },
        {
          question:
            "Est-il sûr de désactiver des éléments de démarrage dans DiskMop ?",
          answer:
            "Oui pour les éléments de votre propre dossier : le programme reste installé et le fichier de réglages est conservé, vous pouvez donc le réactiver. DiskMop affiche seulement les éléments du système et ne les modifie pas.",
        },
      ],
      verdict: [
        "Deux listes décident de ce qui démarre avec votre Mac. Réglages Système gère les éléments d'ouverture et d'arrière-plan, et les agents de lancement sont la partie que la plupart ne voient jamais.",
        "DiskMop pour Mac liste ces agents, montre ce que chacun exécute et désactive les vôtres sans rien désinstaller. L'analyse est gratuite : vous regardez avant de rien changer.",
      ],
      ctaText: "Voyez ce qui démarre avec votre Mac grâce à DiskMop",
    },
    es: {
      title: "Cómo evitar que las apps se abran al iniciar el Mac",
      metaDescription:
        "Quita los elementos de inicio en Ajustes del Sistema y desactiva los agentes de arranque en segundo plano que ralentizan el Mac. Así los lista y desactiva DiskMop con seguridad.",
      subtitle:
        "Dos listas deciden qué arranca con tu Mac: elementos de inicio y agentes de arranque en segundo plano",
      intro: [
        "En resumen: abre Ajustes del Sistema > General > Ítems de inicio y extensiones, quita las apps que no quieras en Abrir al iniciar sesión y desactiva las que no necesites en Permitir en segundo plano. Eso cubre lo que macOS te muestra. Muchos programas auxiliares arrancan en cambio mediante agentes de inicio; DiskMop para Mac los lista en Estado del sistema y desactiva los que son tuyos.",
        "Esta guía explica ambas listas, por qué el Mac arranca más lento cuando se llenan y cómo desactivar elementos sin desinstalar nada.",
      ],
      keyTakeaways: [
        "Los ítems de inicio (Ajustes del Sistema > General > Ítems de inicio y extensiones) son las apps que se abren al iniciar sesión; Permitir en segundo plano controla los auxiliares que corren sin ventana.",
        "Muchos programas también arrancan mediante agentes y demonios de inicio, pequeños archivos de ajustes en las carpetas LaunchAgents y LaunchDaemons. La página Estado del sistema de DiskMop los lista con el programa que inicia cada uno.",
        "DiskMop desactiva los agentes de tu propia carpeta Biblioteca > LaunchAgents; el programa sigue instalado y su archivo de ajustes se conserva, así que se puede volver a activar. Los elementos de las carpetas /Library del sistema se muestran pero no se modifican.",
        "Desactivar un elemento no borra nada, así que es una forma segura de ver qué esperaba un arranque lento.",
      ],
      dataTable: {
        caption: "Qué arranca con tu Mac y dónde gestionarlo",
        columns: [
          "Tipo",
          "Dónde está",
          "Dónde gestionarlo",
          "Qué hace DiskMop",
        ],
        rows: [
          [
            "Ítems de inicio",
            "Apps añadidas para abrirse al iniciar sesión",
            "Ajustes del Sistema > General > Ítems de inicio y extensiones",
            "Nada: usa Ajustes del Sistema",
          ],
          [
            "Ítems en segundo plano",
            "Auxiliares autorizados a correr en segundo plano",
            "Permitir en segundo plano, en el mismo panel",
            "Nada: usa Ajustes del Sistema",
          ],
          [
            "Agentes de inicio de usuario",
            "~/Library/LaunchAgents",
            "Requiere una herramienta o Terminal",
            "Lista y desactiva; reversible",
          ],
          [
            "Agentes y demonios del sistema",
            "/Library/LaunchAgents y /Library/LaunchDaemons",
            "Pertenecen al sistema o a un instalador",
            "Lista en solo lectura",
          ],
        ],
      },
      howTo: {
        name: "Evitar que las apps se abran al iniciar un Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abre Ítems de inicio y extensiones",
            text: "Abre Ajustes del Sistema, elige General y luego Ítems de inicio y extensiones.",
          },
          {
            name: "Quita apps de Abrir al iniciar sesión",
            text: "Selecciona una app que no quieras al arrancar y pulsa el botón menos. La app sigue instalada.",
          },
          {
            name: "Desactiva los ítems en segundo plano",
            text: "En Permitir en segundo plano, desactiva los auxiliares que no necesites. Deja activado lo que no reconozcas hasta investigarlo.",
          },
          {
            name: "Revisa los agentes de inicio en DiskMop",
            text: "Abre Estado del sistema en DiskMop para ver los programas que arrancan solos, cada uno con el programa que ejecuta.",
          },
          {
            name: "Desactiva los tuyos y reinicia",
            text: "Desactiva los elementos de nivel de usuario que no necesites, reinicia el Mac y compara el tiempo de arranque.",
          },
        ],
      },
      sections: [
        {
          title: "Por qué se ralentiza el arranque",
          content: [
            "Cada programa que arranca al iniciar sesión compite por el procesador, el disco y la memoria mientras el Mac aún termina de iniciar sesión. Asistentes de actualización, clientes de chat, herramientas de sincronización en la nube, utilidades de impresora y agentes de fabricantes se acumulan, y cada uno sigue funcionando después, ocupando memoria que tus apps activas podrían usar.",
            "La mayoría son útiles para alguien y inofensivos en poca cantidad. El objetivo no es cero, sino detener lo que nunca pediste. Si el disco está casi lleno, el arranque también sufre, algo que trata [qué llena el disco de arranque del Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
        {
          title: "Ítems de inicio y de segundo plano en Ajustes del Sistema",
          content: [
            "En Ajustes del Sistema > General > Ítems de inicio y extensiones, la lista superior, Abrir al iniciar sesión, contiene apps que abren una ventana o un icono al iniciar sesión. Selecciona una y pulsa el botón menos para quitarla. Debajo, Permitir en segundo plano lista auxiliares que corren sin abrir nada, cada uno con un interruptor que puedes apagar.",
            "En versiones antiguas de macOS la misma lista está en Preferencias del Sistema > Usuarios y grupos > Ítems de inicio. Quitar una entrada no desinstala la app; solo evita que arranque sola.",
          ],
        },
        {
          title: "Agentes y demonios de inicio",
          content: [
            "Aparte de esas listas, los programas pueden registrarse en launchd, la parte de macOS que inicia tareas en segundo plano. Dejan pequeños archivos de ajustes en tres sitios: tu propia carpeta Biblioteca > LaunchAgents, la carpeta del sistema /Library/LaunchAgents y /Library/LaunchDaemons. El software de impresoras, VPN, actualizadores y almacenamiento en la nube suele hacerlo.",
            "La página Estado del sistema de DiskMop los lista con el programa que inicia cada uno. Los agentes de tu propia carpeta se pueden desactivar desde la lista: DiskMop deshabilita el agente y lo detiene, mantiene el programa instalado y conserva su archivo, así puedes volver a activarlo. Los elementos de las carpetas /Library pertenecen al sistema o a un instalador y solo se muestran. Esta función forma parte de la versión que descargas desde diskmop.com.",
          ],
        },
        {
          title: "Cómo decidir qué desactivar",
          content: [
            "Desactiva lo que reconoces y no necesitas al iniciar sesión: una app de chat que abres tú, un lanzador de juegos, un actualizador de software que usas poco. Investiga los nombres que no reconozcas antes de tocarlos, y deja en paz el software de seguridad, los controladores y todo lo de Apple.",
            "Como desactivar deja el programa instalado, es fácil de probar: desactiva un elemento, reinicia y vuelve a activarlo si algo deja de funcionar. El análisis es gratuito; cambiar varios elementos a la vez forma parte de DiskMop Pro, una compra única. Si una app se fue para siempre, [elimina también sus restos](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "¿Cómo evito que las apps se abran al arrancar el Mac?",
          answer:
            "Abre Ajustes del Sistema > General > Ítems de inicio y extensiones, selecciona la app en Abrir al iniciar sesión y pulsa el botón menos. Desactiva los auxiliares innecesarios en Permitir en segundo plano.",
        },
        {
          question: "¿Quitar un ítem de inicio desinstala la app?",
          answer:
            "No. Solo evita que arranque sola. Puedes seguir abriéndola tú y volver a añadirla más tarde.",
        },
        {
          question: "¿Qué son los agentes y demonios de inicio?",
          answer:
            "Pequeños archivos de ajustes que indican a macOS que inicie un programa en segundo plano. Están en tu carpeta Biblioteca > LaunchAgents y en las carpetas del sistema /Library/LaunchAgents y /Library/LaunchDaemons.",
        },
        {
          question: "¿Es seguro desactivar elementos de inicio en DiskMop?",
          answer:
            "Sí para los de tu propia carpeta: el programa sigue instalado y el archivo de ajustes se conserva, así que puedes volver a activarlo. DiskMop solo muestra los elementos del sistema y no los modifica.",
        },
      ],
      verdict: [
        "Dos listas deciden qué arranca con tu Mac. Ajustes del Sistema gestiona los ítems de inicio y de segundo plano, y los agentes de inicio son la parte que la mayoría nunca ve.",
        "DiskMop para Mac lista esos agentes, muestra qué ejecuta cada uno y desactiva los tuyos sin desinstalar nada. El análisis es gratuito, así que puedes mirar antes de cambiar nada.",
      ],
      ctaText: "Mira qué arranca con tu Mac usando DiskMop",
    },
    it: {
      title: "Come impedire alle app di aprirsi all'avvio del Mac",
      metaDescription:
        "Rimuovi gli elementi login in Impostazioni di Sistema e disattiva gli agenti di avvio in background che rallentano il Mac. Scopri come DiskMop li elenca e li disattiva in sicurezza.",
      subtitle:
        "Due elenchi decidono cosa parte con il Mac: elementi login e agenti di avvio in background",
      intro: [
        "In breve: apri Impostazioni di Sistema > Generali > Elementi login ed estensioni, rimuovi le app che non vuoi sotto Apri al login e disattiva quelle che non ti servono sotto Consenti in background. Questo copre ciò che macOS ti mostra. Molti programmi ausiliari partono invece tramite agenti di avvio; DiskMop per Mac li elenca in Stato del sistema e disattiva quelli che ti appartengono.",
        "Questa guida spiega i due elenchi, perché il Mac parte più lentamente quando si riempiono e come disattivare gli elementi senza disinstallare nulla.",
      ],
      keyTakeaways: [
        "Gli elementi login (Impostazioni di Sistema > Generali > Elementi login ed estensioni) sono le app che si aprono quando accedi; Consenti in background controlla gli ausiliari che girano senza finestra.",
        "Molti programmi partono anche tramite agenti e daemon di avvio, piccoli file di impostazioni nelle cartelle LaunchAgents e LaunchDaemons. La pagina Stato del sistema di DiskMop li elenca con il programma che ciascuno avvia.",
        "DiskMop disattiva gli agenti nella tua cartella Libreria > LaunchAgents; il programma resta installato e il suo file di impostazioni viene conservato, quindi si può riattivare. Gli elementi nelle cartelle /Library di sistema vengono mostrati ma non modificati.",
        "Disattivare un elemento non cancella nulla, quindi è un modo sicuro per vedere cosa aspettava un avvio lento.",
      ],
      dataTable: {
        caption: "Cosa parte con il Mac e dove gestirlo",
        columns: ["Tipo", "Dove si trova", "Dove gestirlo", "Cosa fa DiskMop"],
        rows: [
          [
            "Elementi login",
            "App aggiunte per aprirsi al login",
            "Impostazioni di Sistema > Generali > Elementi login ed estensioni",
            "Niente: usa Impostazioni di Sistema",
          ],
          [
            "Elementi in background",
            "Ausiliari autorizzati a girare in background",
            "Consenti in background nello stesso pannello",
            "Niente: usa Impostazioni di Sistema",
          ],
          [
            "Agenti di avvio utente",
            "~/Library/LaunchAgents",
            "Serve uno strumento o il Terminale",
            "Elenca e disattiva; reversibile",
          ],
          [
            "Agenti e daemon di sistema",
            "/Library/LaunchAgents e /Library/LaunchDaemons",
            "Appartengono al sistema o a un installer",
            "Elenca in sola lettura",
          ],
        ],
      },
      howTo: {
        name: "Impedire alle app di aprirsi all'avvio di un Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Apri Elementi login ed estensioni",
            text: "Apri Impostazioni di Sistema, scegli Generali e poi Elementi login ed estensioni.",
          },
          {
            name: "Rimuovi app da Apri al login",
            text: "Seleziona un'app che non vuoi all'avvio e fai clic sul pulsante meno. L'app resta installata.",
          },
          {
            name: "Disattiva gli elementi in background",
            text: "Sotto Consenti in background, disattiva gli ausiliari che non ti servono. Lascia attivo ciò che non riconosci finché non l'hai cercato.",
          },
          {
            name: "Esamina gli agenti di avvio in DiskMop",
            text: "Apri Stato del sistema in DiskMop per vedere i programmi che partono da soli, ciascuno con il programma che esegue.",
          },
          {
            name: "Disattiva i tuoi e riavvia",
            text: "Disattiva gli elementi a livello utente che non ti servono, riavvia il Mac e confronta il tempo di avvio.",
          },
        ],
      },
      sections: [
        {
          title: "Perché l'avvio rallenta",
          content: [
            "Ogni programma che parte al login si contende processore, disco e memoria mentre il Mac sta ancora completando l'accesso. Assistenti di aggiornamento, client di chat, strumenti di sincronizzazione cloud, utility di stampa e agenti dei produttori si sommano e ciascuno continua a girare dopo, occupando memoria che le tue app attive potrebbero usare.",
            "La maggior parte è utile a qualcuno e innocua in piccole quantità. L'obiettivo non è zero, ma fermare ciò che non hai mai chiesto. Se anche il disco è quasi pieno, l'avvio ne risente, come tratta [cosa riempie il disco di avvio del Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
        {
          title: "Elementi login e in background in Impostazioni di Sistema",
          content: [
            "In Impostazioni di Sistema > Generali > Elementi login ed estensioni, l'elenco in alto, Apri al login, contiene le app che aprono una finestra o un'icona quando accedi. Selezionane una e fai clic sul pulsante meno per rimuoverla. Sotto, Consenti in background elenca gli ausiliari che girano senza aprire nulla, ciascuno con un interruttore da spegnere.",
            "Nelle versioni più vecchie di macOS lo stesso elenco è in Preferenze di Sistema > Utenti e gruppi > Elementi login. Rimuovere una voce non disinstalla l'app; impedisce solo che parta da sola.",
          ],
        },
        {
          title: "Agenti e daemon di avvio",
          content: [
            "Oltre a questi elenchi, i programmi possono registrarsi presso launchd, la parte di macOS che avvia le attività in background. Lasciano piccoli file di impostazioni in tre posti: la tua cartella Libreria > LaunchAgents, la cartella di sistema /Library/LaunchAgents e /Library/LaunchDaemons. Software per stampanti, VPN, aggiornamenti e archiviazione cloud lo fa spesso.",
            "La pagina Stato del sistema di DiskMop li elenca con il programma che ciascuno avvia. Gli agenti nella tua cartella si possono disattivare dall'elenco: DiskMop disabilita l'agente e lo ferma, mantiene il programma installato e conserva il suo file, così puoi riattivarlo. Gli elementi nelle cartelle /Library appartengono al sistema o a un installer e vengono solo mostrati. Questa funzione fa parte della versione che scarichi da diskmop.com.",
          ],
        },
        {
          title: "Come decidere cosa disattivare",
          content: [
            "Disattiva ciò che riconosci e non ti serve al login: un'app di chat che apri tu, un launcher di giochi, un aggiornatore di software che usi poco. Cerca i nomi che non riconosci prima di toccarli e lascia stare software di sicurezza, driver e tutto ciò che è di Apple.",
            "Poiché disattivare lascia il programma installato, è facile da provare: disattiva un elemento, riavvia e riattivalo se qualcosa smette di funzionare. La scansione è gratuita; modificare più elementi insieme fa parte di DiskMop Pro, un acquisto una tantum. Se un'app è sparita per sempre, [elimina anche i suoi residui](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Come impedisco alle app di aprirsi all'avvio del Mac?",
          answer:
            "Apri Impostazioni di Sistema > Generali > Elementi login ed estensioni, seleziona l'app sotto Apri al login e fai clic sul pulsante meno. Disattiva gli ausiliari inutili sotto Consenti in background.",
        },
        {
          question: "Rimuovere un elemento login disinstalla l'app?",
          answer:
            "No. Impedisce solo che parta da sola. Puoi comunque aprirla tu e aggiungerla di nuovo più tardi.",
        },
        {
          question: "Cosa sono gli agenti e i daemon di avvio?",
          answer:
            "Piccoli file di impostazioni che dicono a macOS di avviare un programma in background. Si trovano nella tua cartella Libreria > LaunchAgents e nelle cartelle di sistema /Library/LaunchAgents e /Library/LaunchDaemons.",
        },
        {
          question: "È sicuro disattivare gli elementi di avvio in DiskMop?",
          answer:
            "Sì per quelli nella tua cartella: il programma resta installato e il file di impostazioni viene conservato, quindi puoi riattivarlo. DiskMop mostra soltanto gli elementi di sistema e non li modifica.",
        },
      ],
      verdict: [
        "Due elenchi decidono cosa parte con il Mac. Impostazioni di Sistema gestisce gli elementi login e in background, e gli agenti di avvio sono la parte che la maggior parte delle persone non vede mai.",
        "DiskMop per Mac elenca quegli agenti, mostra cosa esegue ciascuno e disattiva i tuoi senza disinstallare nulla. La scansione è gratuita, così puoi guardare prima di cambiare qualcosa.",
      ],
      ctaText: "Scopri cosa parte con il tuo Mac usando DiskMop",
    },
    pt: {
      title: "Como impedir que apps abram na inicialização do Mac",
      metaDescription:
        "Remova itens de login em Ajustes do Sistema e desative agentes de inicialização em segundo plano que deixam o Mac lento. Veja como o DiskMop os lista e desativa com segurança.",
      subtitle:
        "Duas listas decidem o que inicia com o Mac: itens de login e agentes de inicialização em segundo plano",
      intro: [
        "Resumindo: abra Ajustes do Sistema > Geral > Itens de início de sessão e extensões, remova os apps indesejados em Abrir ao iniciar sessão e desative os de que não precisa em Permitir em segundo plano. Isso cobre o que o macOS mostra. Muitos programas auxiliares iniciam por agentes de inicialização; o DiskMop para Mac os lista em Saúde do sistema e desativa os que são seus.",
        "Este guia explica as duas listas, por que o Mac demora mais para iniciar quando elas enchem e como desativar itens sem desinstalar nada.",
      ],
      keyTakeaways: [
        "Itens de início de sessão (Ajustes do Sistema > Geral > Itens de início de sessão e extensões) são os apps que abrem quando você entra; Permitir em segundo plano controla auxiliares que rodam sem janela.",
        "Muitos programas também iniciam por agentes e daemons de inicialização, pequenos arquivos de ajustes nas pastas LaunchAgents e LaunchDaemons. A página Saúde do sistema do DiskMop os lista com o programa que cada um inicia.",
        "O DiskMop desativa agentes na sua própria pasta Biblioteca > LaunchAgents; o programa continua instalado e o arquivo de ajustes é mantido, então pode ser reativado. Itens nas pastas /Library do sistema são mostrados, mas não alterados.",
        "Desativar um item não apaga nada, então é uma forma segura de ver o que uma inicialização lenta estava esperando.",
      ],
      dataTable: {
        caption: "O que inicia com o Mac e onde gerenciar",
        columns: ["Tipo", "Onde fica", "Onde gerenciar", "O que o DiskMop faz"],
        rows: [
          [
            "Itens de início de sessão",
            "Apps adicionados para abrir no login",
            "Ajustes do Sistema > Geral > Itens de início de sessão e extensões",
            "Nada: use Ajustes do Sistema",
          ],
          [
            "Itens em segundo plano",
            "Auxiliares autorizados a rodar em segundo plano",
            "Permitir em segundo plano, no mesmo painel",
            "Nada: use Ajustes do Sistema",
          ],
          [
            "Agentes de inicialização do usuário",
            "~/Library/LaunchAgents",
            "Exige uma ferramenta ou o Terminal",
            "Lista e desativa; reversível",
          ],
          [
            "Agentes e daemons do sistema",
            "/Library/LaunchAgents e /Library/LaunchDaemons",
            "Pertencem ao sistema ou a um instalador",
            "Lista como somente leitura",
          ],
        ],
      },
      howTo: {
        name: "Impedir que apps abram na inicialização de um Mac",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abra Itens de início de sessão e extensões",
            text: "Abra Ajustes do Sistema, escolha Geral e depois Itens de início de sessão e extensões.",
          },
          {
            name: "Remova apps de Abrir ao iniciar sessão",
            text: "Selecione um app que não quer na inicialização e clique no botão de menos. O app continua instalado.",
          },
          {
            name: "Desative os itens em segundo plano",
            text: "Em Permitir em segundo plano, desative os auxiliares de que não precisa. Deixe ligado o que não reconhecer até pesquisar.",
          },
          {
            name: "Revise os agentes de inicialização no DiskMop",
            text: "Abra Saúde do sistema no DiskMop para ver os programas que iniciam sozinhos, cada um com o programa que executa.",
          },
          {
            name: "Desative os seus e reinicie",
            text: "Desative os itens de nível de usuário de que não precisa, reinicie o Mac e compare o tempo de inicialização.",
          },
        ],
      },
      sections: [
        {
          title: "Por que a inicialização fica mais lenta",
          content: [
            "Cada programa que inicia no login disputa processador, disco e memória enquanto o Mac ainda conclui a entrada. Assistentes de atualização, clientes de chat, ferramentas de sincronização na nuvem, utilitários de impressora e agentes de fabricantes se acumulam, e cada um continua rodando depois, ocupando memória que seus apps ativos poderiam usar.",
            "A maioria é útil para alguém e inofensiva em pequena quantidade. O objetivo não é zero, é parar o que você nunca pediu. Se o disco também estiver quase cheio, a inicialização sofre, o que [o que enche o disco de inicialização do Mac](/blog/mac-startup-disk-almost-full) aborda.",
          ],
        },
        {
          title: "Itens de login e de segundo plano nos Ajustes do Sistema",
          content: [
            "Em Ajustes do Sistema > Geral > Itens de início de sessão e extensões, a lista de cima, Abrir ao iniciar sessão, contém apps que abrem uma janela ou ícone quando você entra. Selecione um e clique no botão de menos para removê-lo. Abaixo, Permitir em segundo plano lista auxiliares que rodam sem abrir nada, cada um com um interruptor que você pode desligar.",
            "Em versões mais antigas do macOS a mesma lista fica em Preferências do Sistema > Usuários e Grupos > Itens de Login. Remover uma entrada não desinstala o app; só impede que ele inicie sozinho.",
          ],
        },
        {
          title: "Agentes e daemons de inicialização",
          content: [
            "Além dessas listas, programas podem se registrar no launchd, a parte do macOS que inicia tarefas em segundo plano. Eles deixam pequenos arquivos de ajustes em três lugares: sua própria pasta Biblioteca > LaunchAgents, a pasta do sistema /Library/LaunchAgents e /Library/LaunchDaemons. Software de impressoras, VPNs, atualizadores e armazenamento na nuvem costuma fazer isso.",
            "A página Saúde do sistema do DiskMop os lista com o programa que cada um inicia. Agentes na sua própria pasta podem ser desativados pela lista: o DiskMop desabilita o agente e o interrompe, mantém o programa instalado e conserva seu arquivo, para você poder reativá-lo. Itens nas pastas /Library pertencem ao sistema ou a um instalador e só são mostrados. Esse recurso faz parte da versão que você baixa em diskmop.com.",
          ],
        },
        {
          title: "Como decidir o que desativar",
          content: [
            "Desative o que você reconhece e não precisa no login: um app de chat que você mesmo abre, um launcher de jogos, um atualizador de software que usa pouco. Pesquise nomes desconhecidos antes de mexer e deixe em paz software de segurança, drivers e tudo da Apple.",
            "Como desativar mantém o programa instalado, é fácil testar: desative um item, reinicie e reative se algo parar de funcionar. A verificação é gratuita; alterar vários itens de uma vez faz parte do DiskMop Pro, uma compra única. Se um app sumiu para sempre, [apague também os restos dele](/blog/delete-app-leftovers-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Como impeço que apps abram quando o Mac inicia?",
          answer:
            "Abra Ajustes do Sistema > Geral > Itens de início de sessão e extensões, selecione o app em Abrir ao iniciar sessão e clique no botão de menos. Desative auxiliares desnecessários em Permitir em segundo plano.",
        },
        {
          question: "Remover um item de login desinstala o app?",
          answer:
            "Não. Só impede que ele inicie sozinho. Você ainda pode abri-lo e adicioná-lo de novo depois.",
        },
        {
          question: "O que são agentes e daemons de inicialização?",
          answer:
            "Pequenos arquivos de ajustes que dizem ao macOS para iniciar um programa em segundo plano. Ficam na sua pasta Biblioteca > LaunchAgents e nas pastas do sistema /Library/LaunchAgents e /Library/LaunchDaemons.",
        },
        {
          question: "É seguro desativar itens de inicialização no DiskMop?",
          answer:
            "Sim para os da sua própria pasta: o programa continua instalado e o arquivo de ajustes é mantido, então você pode reativá-lo. O DiskMop apenas mostra os itens do sistema e não os altera.",
        },
      ],
      verdict: [
        "Duas listas decidem o que inicia com o Mac. Os Ajustes do Sistema gerenciam itens de login e de segundo plano, e os agentes de inicialização são a parte que a maioria nunca vê.",
        "O DiskMop para Mac lista esses agentes, mostra o que cada um executa e desativa os seus sem desinstalar nada. A verificação é gratuita, então você pode olhar antes de mudar qualquer coisa.",
      ],
      ctaText: "Veja o que inicia com o seu Mac usando o DiskMop",
    },
    ja: {
      title: "Macの起動時にアプリが自動で開かないようにする方法",
      metaDescription:
        "システム設定でログイン項目を削除し、Macの起動を遅くするバックグラウンドの起動エージェントをオフにします。DiskMopがそれらを安全に一覧し、オフにする方法も解説します。",
      subtitle:
        "Macと一緒に何が起動するかは2つのリストで決まる：ログイン項目とバックグラウンドの起動エージェント",
      intro: [
        "結論から言うと、「システム設定」>「一般」>「ログイン項目と機能拡張」を開き、「ログイン時に開く」から不要なアプリを削除し、「バックグラウンドで許可」で不要なものをオフにします。これはmacOSが見せてくれる範囲です。多くの補助プログラムは代わりに起動エージェントで起動します。Mac版DiskMopは「システムの状態」でそれらを一覧し、自分のものをオフにできます。",
        "このガイドでは、2つのリスト、増えるとMacの起動が遅くなる理由、何もアンインストールせずに項目をオフにする方法を説明します。",
      ],
      keyTakeaways: [
        "ログイン項目（システム設定>一般>ログイン項目と機能拡張）はサインイン時に開くアプリです。「バックグラウンドで許可」は、ウィンドウなしで動く補助プログラムを制御します。",
        "多くのプログラムは、LaunchAgentsやLaunchDaemonsフォルダにある小さな設定ファイルである起動エージェントやデーモンでも起動します。DiskMopの「システムの状態」ページは、それぞれが起動するプログラムとともに一覧します。",
        "DiskMopは自分のライブラリ>LaunchAgentsフォルダにあるエージェントをオフにします。プログラムはインストールされたまま設定ファイルも残るので、再びオンにできます。システム共通の/Libraryフォルダの項目は表示のみで、変更しません。",
        "項目をオフにしても何も削除されないので、遅い起動が何を待っていたかを安全に確かめる方法になります。",
      ],
      dataTable: {
        caption: "Macと一緒に起動するものと管理場所",
        columns: ["種類", "場所", "管理する場所", "DiskMopの動作"],
        rows: [
          [
            "ログイン項目",
            "ログイン時に開くよう追加されたアプリ",
            "システム設定>一般>ログイン項目と機能拡張",
            "何もしません：システム設定を使います",
          ],
          [
            "バックグラウンド項目",
            "バックグラウンドでの実行を許可された補助プログラム",
            "同じ画面の「バックグラウンドで許可」",
            "何もしません：システム設定を使います",
          ],
          [
            "ユーザの起動エージェント",
            "~/Library/LaunchAgents",
            "ツールまたはターミナルが必要",
            "一覧してオフにします（元に戻せます）",
          ],
          [
            "システムのエージェントとデーモン",
            "/Library/LaunchAgentsと/Library/LaunchDaemons",
            "システムまたはインストーラに属する",
            "読み取り専用で一覧します",
          ],
        ],
      },
      howTo: {
        name: "Macの起動時にアプリが開かないようにする",
        totalTime: "PT10M",
        steps: [
          {
            name: "「ログイン項目と機能拡張」を開く",
            text: "システム設定を開き、「一般」を選んでから「ログイン項目と機能拡張」を選びます。",
          },
          {
            name: "「ログイン時に開く」からアプリを削除する",
            text: "起動時に不要なアプリを選び、マイナスボタンをクリックします。アプリ自体はインストールされたままです。",
          },
          {
            name: "バックグラウンド項目をオフにする",
            text: "「バックグラウンドで許可」で不要な補助プログラムをオフにします。分からないものは調べるまでオンのままにしてください。",
          },
          {
            name: "DiskMopで起動エージェントを確認する",
            text: "DiskMopで「システムの状態」を開くと、自動で起動するプログラムが、実行する内容とともに表示されます。",
          },
          {
            name: "自分のものをオフにして再起動する",
            text: "不要なユーザレベルの項目をオフにし、Macを再起動して起動時間を比べます。",
          },
        ],
      },
      sections: [
        {
          title: "起動が遅くなる理由",
          content: [
            "ログイン時に起動するプログラムは、Macがサインインを完了している間、プロセッサ、ディスク、メモリを奪い合います。アップデート用の補助プログラム、チャットクライアント、クラウド同期ツール、プリンタのユーティリティ、メーカーのエージェントが積み重なり、起動後も動き続けて、使用中のアプリが使えたはずのメモリを占めます。",
            "多くは誰かにとって有用で、少数なら無害です。目標はゼロではなく、頼んだ覚えのないものを止めることです。ディスクがほぼ満杯でも起動は遅くなり、これは[Macの起動ディスクを埋めているもの](/blog/mac-startup-disk-almost-full)で扱っています。",
          ],
        },
        {
          title: "システム設定のログイン項目とバックグラウンド項目",
          content: [
            "「システム設定」>「一般」>「ログイン項目と機能拡張」では、上のリスト「ログイン時に開く」に、サインイン時にウィンドウやアイコンを開くアプリが入っています。1つ選んでマイナスボタンをクリックすれば削除されます。その下の「バックグラウンドで許可」には、何も開かずに動く補助プログラムが並び、それぞれオフにできるスイッチがあります。",
            "古いmacOSでは、同じリストが「システム環境設定」>「ユーザとグループ」>「ログイン項目」にあります。項目を削除してもアプリはアンインストールされず、自動で起動しなくなるだけです。",
          ],
        },
        {
          title: "起動エージェントとデーモン",
          content: [
            "これらのリストとは別に、プログラムはバックグラウンド処理を起動するmacOSの仕組みであるlaunchdに自分を登録できます。小さな設定ファイルを3か所に置きます。自分のライブラリ>LaunchAgentsフォルダ、システム共通の/Library/LaunchAgents、/Library/LaunchDaemonsです。プリンタ、VPN、アップデータ、クラウドストレージのソフトがよく使います。",
            "DiskMopの「システムの状態」ページは、それぞれが起動するプログラムとともにこれらを一覧します。自分のフォルダにあるエージェントは一覧からオフにできます。DiskMopはエージェントを無効にして停止し、プログラムはインストールしたまま、そのファイルも残すので、再びオンにできます。/Libraryフォルダの項目はシステムまたはインストーラに属し、表示のみです。この機能は、diskmop.comからダウンロードするバージョンに含まれます。",
          ],
        },
        {
          title: "何をオフにするかの決め方",
          content: [
            "見覚えがあり、ログイン時に不要なものをオフにします。自分で開くチャットアプリ、ゲームランチャー、あまり使わないソフトのアップデータなどです。知らない名前は触る前に調べ、セキュリティソフト、ドライバ、Apple製のものはそのままにしてください。",
            "オフにしてもプログラムはインストールされたままなので試しやすく、項目をオフにして再起動し、何か動かなくなったら戻せます。スキャンは無料で、複数の項目をまとめて変更するのは買い切りのDiskMop Proの機能です。アプリが完全になくなったなら、[その残骸も削除](/blog/delete-app-leftovers-mac)しましょう。",
          ],
        },
      ],
      faq: [
        {
          question: "Macの起動時にアプリが開かないようにするには？",
          answer:
            "「システム設定」>「一般」>「ログイン項目と機能拡張」を開き、「ログイン時に開く」でアプリを選んでマイナスボタンをクリックします。不要な補助プログラムは「バックグラウンドで許可」でオフにします。",
        },
        {
          question:
            "ログイン項目を削除するとアプリはアンインストールされますか？",
          answer:
            "いいえ。自動で起動しなくなるだけです。自分で開くことも、後で追加し直すこともできます。",
        },
        {
          question: "起動エージェントとデーモンとは何ですか？",
          answer:
            "macOSにプログラムをバックグラウンドで起動させる小さな設定ファイルです。自分のライブラリ>LaunchAgentsフォルダと、システム共通の/Library/LaunchAgentsおよび/Library/LaunchDaemonsにあります。",
        },
        {
          question: "DiskMopで起動項目をオフにしても安全ですか？",
          answer:
            "自分のフォルダの項目なら安全です。プログラムはインストールされたまま設定ファイルも残るので、再びオンにできます。システム共通の項目はDiskMopは表示するだけで、変更しません。",
        },
      ],
      verdict: [
        "Macと一緒に何が起動するかは2つのリストで決まります。システム設定はログイン項目とバックグラウンド項目を管理し、起動エージェントはほとんどの人が目にしない部分です。",
        "Mac版DiskMopはそれらのエージェントを一覧し、それぞれが何を実行するかを示し、自分のものを何もアンインストールせずにオフにします。スキャンは無料なので、何かを変更する前に確認できます。",
      ],
      ctaText: "DiskMopでMacと一緒に起動するものを確認する",
    },
  },
};
