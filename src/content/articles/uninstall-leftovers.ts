import type { Article } from "../types";

export const uninstallLeftovers: Article = {
  slug: "uninstall-leftovers-cleaner",
  type: "guide",
  category: "Disk Cleanup",
  date: "2026-06-18",
  updated: "2026-11-06",
  readingTime: 6,
  content: {
    tr: {
      title: "Program Kaldırma Artıkları ve Kayıt Kütüğü Temizleme",
      metaDescription:
        "Program kaldırdıktan sonra geride kalan dosya ve kayıt kütüğü artıklarını temizleyin. Disk Mop ile güvenli artık temizliği rehberi.",
      subtitle:
        "Kaldırdığınız Programlardan Geriye Kalanları Bulun ve Temizleyin",
      intro: [
        'Windows\'ta bir programı kaldırdığınızda, gerçekten tamamen silindiğini düşünürsünüz. Ancak çoğu durumda geride dosyalar, klasörler ve registry kayıtları kalır. Bu "kaldırma artıkları" zamanla birikir, disk alanı kaplar ve sisteminizi yavaşlatır.',
        "Revo Uninstaller gibi araçlar bu sorunu çözmek için var, ancak Disk Mop v1.0.15 ile artık ayrı bir program kurmanıza gerek yok. Yeni Kaldırma Artıkları Temizleyici özelliği, yetim klasörleri ve registry kayıtlarını otomatik olarak tespit eder.",
      ],
      keyTakeaways: [
        "Windows'ta Denetim Masası üzerinden program kaldırmak, AppData ve ProgramData altındaki tüm yapılandırma dosyalarını ve kayıt kütüğü (registry) anahtarlarını silmez.",
        "Kaldırma artıkları zamanla 5 GB ile 50 GB arasında gereksiz disk alanı işgal eder.",
        "Program artıkları başlıca AppData\\Local, AppData\\Roaming, ProgramData ve Registry (HKCU\\Software, HKLM\\SOFTWARE) dizinlerinde saklanır.",
        "DiskMop Uninstall Leftovers Cleaner, yüklü uygulamalar listesini referans alarak yetim (orphan) klasörleri ve sahipsiz kayıtları tespit eder.",
        "Akıllı beyaz liste koruması Microsoft, Intel, NVIDIA ve donanım sürücüsü anahtarlarının yanlışlıkla silinmesini engeller.",
      ],
      dataTable: {
        caption:
          "Program kaldırma artıklarının yaygın saklandığı dizinler ve disk etkileri",
        columns: [
          "Konum / Dizin",
          "Artık Türü",
          "Tipik Boyut",
          "Elle Silme Zorluğu",
          "DiskMop Koruması",
        ],
        rows: [
          [
            "%localappdata%",
            "Önbellek, geçici indirmeler, oturum verileri",
            "2 GB – 20 GB",
            "Orta (Gizli klasör)",
            "Yetim klasör otomatik tespiti",
          ],
          [
            "%appdata% (Roaming)",
            "Kullanıcı ayarları, eklentiler, profiller",
            "1 GB – 10 GB",
            "Orta",
            "Kaldırılan uygulama eşleşmesi",
          ],
          [
            "C:\\ProgramData",
            "Tüm kullanıcılar için paylaşılan uygulama dosyaları",
            "2 GB – 15 GB",
            "Yüksek (Yönetici izni gerektirir)",
            "Sistem beyaz listesi ile filtrelenir",
          ],
          [
            "Windows Registry (Kayıt Defteri)",
            "HKCU\\Software ve HKLM\\SOFTWARE anahtarları",
            "< 100 MB",
            "Çok Yüksek (Sistem riski taşır)",
            "Geçersiz kayıtları güvenle ayıklar",
          ],
        ],
      },
      howTo: {
        name: "Windows'ta Kaldırma Artıklarını Temizleme",
        totalTime: "PT5M",
        steps: [
          {
            name: "DiskMop'u açın ve Artık Temizleyiciye gidin",
            text: "DiskMop uygulamasını başlatın ve yan menüden 'Kaldırma Artıkları Temizleyici' (Uninstall Leftovers) sekmesini seçin.",
          },
          {
            name: "Yetim klasör ve kayıt taraması yapın",
            text: "'Taramayı Başlat' düğmesine basarak AppData, ProgramData ve Registry dizinlerindeki yetim kalıntıların listelenmesini sağlayın.",
          },
          {
            name: "Bulunan artıkları inceleyin",
            text: "Listelenen program adlarını kontrol edin, silinmesini istediğiniz yetim klasörleri işaretleyin.",
          },
          {
            name: "Güvenli temizliği onaylayın",
            text: "'Seçilenleri Temizle' düğmesine basıp onay kutusunu kabul ederek tüm kaldırma artıklarını kalıcı olarak silin.",
          },
        ],
      },
      sections: [
        {
          title: "Kaldırma Artıkları Neden Oluşur?",
          content: [
            "Windows'un program kaldırma mekanizması mükemmel değildir. Birçok program, Denetim Masası üzerinden kaldırıldığında kendi oluşturduğu tüm dosyaları silmez. Ayar dosyaları, önbellek verileri, log kayıtları ve kullanıcı verileri geride kalır.",
            "Özellikle Program Files, AppData, LocalAppData ve ProgramData gibi klasörlerde artık klasörler birikir. Registry'de ise HKCU\\Software ve HKLM\\SOFTWARE altında artık anahtarlar kalır. Bu kayıtlar sistemin performansını doğrudan etkilemese de disk alanını gereksiz yere kaplar.",
            "Bazı büyük uygulamalar (oyunlar, geliştirme araçları, grafik yazılımları) kaldırıldığında gigabaytlarca artık dosya bırakabilir. Düzenli olarak program kurup kaldıran kullanıcılarda bu sorun daha belirgin hale gelir.",
          ],
        },
        {
          title: "Disk Mop ile Artık Dosyaları Taramak",
          content: [
            "Disk Mop'un yeni Kaldırma Artıkları Temizleyici özelliği, sisteminizde yüklü olan programları Windows Registry'den okur ve bunu referans alarak yetim klasörleri tespit eder. Yüklü programa ait olmayan ancak program adı taşıyan klasörler \"artık\" olarak işaretlenir.",
            "Tarama işlemi 4 ana dizini kontrol eder: Program Files, Program Files (x86), AppData\\Local, AppData\\Roaming ve ProgramData. Ayrıca Registry'de HKCU\\Software ve HKLM\\SOFTWARE anahtarlarını tarar.",
            "Akıllı beyaz liste sistemi, Microsoft, Windows, Intel, NVIDIA, AMD, Dell, HP gibi kritik sistem klasörlerini korur. Bu sayede yanlışlıkla sistem dosyalarının silinmesi önlenir. Tarama birkaç saniye içinde tamamlanır ve sonuçlar detaylı bir liste halinde sunulur.",
          ],
        },
        {
          title: "Sonuçları Filtreleme ve Silme",
          content: [
            "Tarama tamamlandığında sonuçlar iki kategoride listelenir: Dosyalar (artık klasörler) ve Registry (artık kayıt anahtarları). Üstteki filtre butonlarıyla sadece dosyaları, sadece registry kayıtlarını veya tümünü görebilirsiniz.",
            'Arama çubuğunu kullanarak belirli bir program adına göre filtreleme yapabilirsiniz. Örneğin "Steam" yazarak yalnızca Steam ile ilgili artıkları görebilirsiniz. Her öğenin yanında dosya boyutu ve tam yolu görüntülenir.',
            'Silmek istediğiniz öğeleri checkbox ile seçin veya "Tümünü Seç" ile hepsini işaretleyin. Silme işlemi öncesinde bir onay dialogu gösterilir, böylece yanlışlıkla silme önlenir. Silme tamamlandığında kaç dosya ve registry kaydının temizlendiği bildirilir.',
          ],
        },
        {
          title: "Ne Kadar Alan Kazanabilirsiniz?",
          content: [
            "Kaldırma artıklarından kazanılacak alan, bilgisayar kullanım alışkanlıklarınıza bağlıdır. Düzenli olarak program kurup kaldıran bir kullanıcı, kolayca 5-50 GB arasında artık dosya biriktirebilir. Oyun yükleyip kaldıranlar için bu rakam çok daha yüksek olabilir.",
            "Registry artıkları disk alanı açısından küçük olsa da, temiz bir registry sisteminizin genel sağlığı için önemlidir. Artık registry anahtarları bazı durumlarda yazılım çakışmalarına neden olabilir.",
            "Disk Mop'un özet kartı, toplam artık klasör sayısını, registry kayıt sayısını ve toplam boyutu bir bakışta gösterir. Bu sayede temizlik öncesi ve sonrası ne kadar alan kazandığınızı kolayca takip edebilirsiniz.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Kaldırılan programların dosyaları neden bilgisayarda kalır?",
          answer:
            "Standart kaldırıcılar (uninstallers) kullanıcı ayarlarını ve verilerini korumak amacıyla veya yetersiz yazıldıkları için AppData ve Kayıt Defteri girişlerini arkalarında bırakırlar.",
        },
        {
          question:
            "AppData klasöründeki artık klasörleri elle silmek güvenli mi?",
          answer:
            "Yalnızca artık kullanmadığınız ve bilgisayardan kaldırdığınız programlara ait klasörleri silmek güvenlidir. Sistem klasörlerine dokunulmamalıdır.",
        },
        {
          question: "Kaldırma artıkları bilgisayarı yavaşlatır mı?",
          answer:
            "Dosyalar doğrudan işlemciyi yormasa da SSD'nizi doldurarak sistemin yavaşlamasına, güncelleme hatalarına ve kayıt defteri şişmesine neden olur.",
        },
        {
          question: "DiskMop sistem dosyalarını yanlışlıkla siler mi?",
          answer:
            "Hayır. DiskMop'ta Microsoft, Windows, NVIDIA, Intel ve OEM üreticilerini koruyan katı bir 'Smart Whitelist' (akıllı beyaz liste) koruması bulunur.",
        },
      ],
      verdict: [
        "Kaldırma artıkları, Windows kullanıcılarının en sık görmezden geldiği disk alanı sorunlarından biridir. Program kaldırmak, o programın tüm izlerini silmek anlamına gelmez.",
        "Disk Mop v1.0.15 ile gelen Kaldırma Artıkları Temizleyici, bu sorunu tek tıkla çözer. Akıllı beyaz liste ile sistem dosyalarını korurken, yetim klasörleri ve registry kayıtlarını güvenle temizler. 8 dilde kullanılabilir ve PRO lisans ile aktif edilir.",
        "Bilgisayarınızdaki görünmeyen çöpleri temizleyin. Disk Mop ile kaldırma artıklarını tarayın ve disk alanınızı geri kazanın.",
      ],
      ctaText: "Disk Mop ile Artıkları Temizleyin",
    },
    en: {
      title: "How to Clean Uninstall Leftovers & Residual Files on Windows",
      metaDescription:
        "Clean up residual files and orphaned registry keys after uninstalling apps. Learn where software leftovers hide and how to delete them safely.",
      subtitle: "Find and Remove Traces Left Behind by Uninstalled Programs",
      intro: [
        'When you uninstall a program on Windows, you assume it\'s completely gone. But in most cases, files, folders, and registry entries are left behind. These "uninstall leftovers" accumulate over time, consume disk space, and slow down your system.',
        "Tools like Revo Uninstaller exist to solve this problem, but with Disk Mop v1.0.15, you no longer need a separate program. The new Uninstall Leftovers Cleaner automatically detects orphan folders and registry entries.",
      ],
      keyTakeaways: [
        "Uninstalling apps via Windows Control Panel frequently leaves behind gigabytes of orphan files in AppData, ProgramData, and Registry keys.",
        "Leftover residual data can consume anywhere between 5 GB and 50+ GB of storage across typical PC installations.",
        "Primary residual hotspots include %localappdata%, %appdata%, C:\\ProgramData, and the HKCU\\Software registry hive.",
        "DiskMop Uninstall Leftovers Cleaner cross-references the Windows Registry to automatically locate orphaned directories belonging to removed software.",
        "A smart whitelist safeguards critical system files and drivers from Microsoft, Intel, NVIDIA, AMD, and OEM manufacturers.",
      ],
      dataTable: {
        caption:
          "Common uninstall leftover file locations and storage footprint",
        columns: [
          "Directory Location",
          "Residual Data Type",
          "Typical Size",
          "Manual Removal Difficulty",
          "DiskMop Safeguard",
        ],
        rows: [
          [
            "%localappdata%",
            "Caches, temp downloads, local runtime states",
            "2 GB – 20 GB",
            "Moderate (Hidden folder)",
            "Automatic orphan folder mapping",
          ],
          [
            "%appdata% (Roaming)",
            "User profiles, custom templates, plugin data",
            "1 GB – 10 GB",
            "Moderate",
            "Uninstalled vendor cross-matching",
          ],
          [
            "C:\\ProgramData",
            "Shared machine-wide program settings",
            "2 GB – 15 GB",
            "High (Requires Administrator permissions)",
            "Filtered against system whitelist",
          ],
          [
            "Windows Registry",
            "Stale keys in HKCU\\Software & HKLM\\SOFTWARE",
            "< 100 MB",
            "Very High (Registry corruption risk)",
            "Safe orphaned key pruning",
          ],
        ],
      },
      howTo: {
        name: "How to Clean Uninstall Leftovers in Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "Open DiskMop Leftovers Cleaner",
            text: "Launch DiskMop and navigate to the 'Uninstall Leftovers Cleaner' tool from the sidebar.",
          },
          {
            name: "Scan for orphaned files and keys",
            text: "Click 'Scan' to inspect AppData, ProgramData, and the Windows Registry for uninstalled software remnants.",
          },
          {
            name: "Review flagged folders",
            text: "Examine the scan results grouped by Files and Registry, using search filters to narrow down specific apps.",
          },
          {
            name: "Execute safe deletion",
            text: "Select unneeded remnants and confirm the removal dialog to reclaim disk space instantly.",
          },
        ],
      },
      sections: [
        {
          title: "Why Do Uninstall Leftovers Exist?",
          content: [
            "Windows' program uninstallation mechanism isn't perfect. Many programs don't delete all their files when removed through the Control Panel. Configuration files, cached data, log files, and user data remain behind.",
            "Orphan folders accumulate particularly in Program Files, AppData, LocalAppData, and ProgramData directories. In the Registry, leftover keys remain under HKCU\\Software and HKLM\\SOFTWARE. While these entries may not directly impact system performance, they unnecessarily consume disk space.",
            "Some large applications (games, development tools, graphics software) can leave gigabytes of residual files when uninstalled. This problem becomes more pronounced for users who regularly install and remove programs.",
          ],
        },
        {
          title: "Scanning for Leftover Files with Disk Mop",
          content: [
            "Disk Mop's new Uninstall Leftovers Cleaner reads installed programs from the Windows Registry and uses this as a reference to detect orphan folders. Folders that carry a program name but don't belong to any installed program are flagged as \"leftovers.\"",
            "The scan checks 4 main directories: Program Files, Program Files (x86), AppData\\Local, AppData\\Roaming, and ProgramData. It also scans Registry keys under HKCU\\Software and HKLM\\SOFTWARE.",
            "The smart whitelist system protects critical system folders from Microsoft, Windows, Intel, NVIDIA, AMD, Dell, HP, and other OEM vendors. This prevents accidental deletion of system files. The scan completes within seconds and presents results in a detailed list.",
          ],
        },
        {
          title: "Filtering and Deleting Results",
          content: [
            "Once the scan completes, results are listed in two categories: Files (orphan folders) and Registry (leftover registry keys). Use the filter buttons at the top to view only files, only registry entries, or all results.",
            'Use the search bar to filter by a specific program name. For example, typing "Steam" shows only Steam-related leftovers. Each item displays its file size and full path.',
            'Select items you want to delete using checkboxes, or use "Select All" to mark everything. A confirmation dialog appears before deletion to prevent accidental removal. After deletion, you\'re notified how many files and registry entries were cleaned.',
          ],
        },
        {
          title: "How Much Space Can You Recover?",
          content: [
            "The space recovered from uninstall leftovers depends on your computer usage habits. A user who regularly installs and removes programs can easily accumulate 5-50 GB of leftover files. For gamers, this number can be much higher.",
            "While registry leftovers are small in terms of disk space, a clean registry is important for your system's overall health. Leftover registry keys can sometimes cause software conflicts.",
            "Disk Mop's summary card shows the total number of orphan folders, registry entries, and total size at a glance. This makes it easy to track how much space you've recovered before and after cleanup.",
          ],
        },
      ],
      faq: [
        {
          question: "Why do programs leave files behind after uninstalling?",
          answer:
            "Standard program uninstallers often preserve user preferences, license keys, and caches in AppData intentionally or due to sloppy uninstaller scripts.",
        },
        {
          question: "Is it safe to delete folders in AppData?",
          answer:
            "Yes, provided those folders belong to software you have already uninstalled and no longer use. Never delete folders belonging to active applications.",
        },
        {
          question: "Can leftover files slow down Windows?",
          answer:
            "While dormant files don't consume CPU cycles, filling up drive C: degrades SSD write performance, increases fragmentation, and clutters startup routines.",
        },
        {
          question: "How does DiskMop prevent deleting important system files?",
          answer:
            "DiskMop utilizes a smart whitelist system protecting vital directories and registry entries from Microsoft, Windows, NVIDIA, Intel, and hardware OEMs.",
        },
      ],
      verdict: [
        "Uninstall leftovers are one of the most overlooked disk space issues for Windows users. Uninstalling a program doesn't mean all its traces are removed.",
        "The Uninstall Leftovers Cleaner in Disk Mop v1.0.15 solves this with one click. It safely cleans orphan folders and registry entries while protecting system files with a smart whitelist. Available in 8 languages and activated with a PRO license.",
        "Clean the invisible junk on your computer. Scan for uninstall leftovers with Disk Mop and reclaim your disk space.",
      ],
      ctaText: "Clean Leftovers with Disk Mop",
    },
    de: {
      title:
        "Was sind Deinstallationsreste? Übriggebliebene Dateien unter Windows bereinigen",
      metaDescription:
        "Bereinigen Sie übrig gebliebene Dateien und Registry-Einträge nach der Deinstallation. Erfahren Sie, was Deinstallationsreste sind und wie Sie sie mit Disk Mop sicher entfernen.",
      subtitle: "Finden und entfernen Sie Spuren deinstallierter Programme",
      intro: [
        'Wenn Sie ein Programm unter Windows deinstallieren, denken Sie, es sei vollständig entfernt. In den meisten Fällen bleiben jedoch Dateien, Ordner und Registry-Einträge zurück. Diese „Deinstallationsreste" sammeln sich mit der Zeit an, belegen Speicherplatz und verlangsamen Ihr System.',
        "Mit Disk Mop v1.0.15 benötigen Sie kein separates Tool mehr. Der neue Deinstallationsreste-Reiniger erkennt automatisch verwaiste Ordner und Registry-Einträge.",
      ],
      keyTakeaways: [
        "Die Deinstallation von Apps über die Windows-Systemsteuerung hinterlässt häufig Gigabytes an verwaisten Dateien in AppData, ProgramData und der Windows-Registrierung.",
        "Verbleibende Datenreste können auf typischen PCs zwischen 5 GB und über 50 GB wertvollen Speicherplatz belegen.",
        "Zu den Haupt-Hotspots für Datenreste gehören %localappdata%, %appdata%, C:\\ProgramData und der Registrierungszweig HKCU\\Software.",
        "Der DiskMop-Bereiniger für Deinstallationsreste gleicht die Windows-Registrierung ab, um verwaiste Ordner entfernter Software automatisch aufzuspüren.",
        "Eine intelligente Whitelist schützt kritische Systemdateien und Gerätetreiber von Microsoft, Intel, NVIDIA, AMD und OEM-Herstellern zuverlässig.",
      ],
      sections: [
        {
          title: "Warum entstehen Deinstallationsreste?",
          content: [
            "Der Deinstallationsmechanismus von Windows ist nicht perfekt. Viele Programme löschen nicht alle ihre Dateien, wenn sie über die Systemsteuerung entfernt werden. Konfigurationsdateien, Cache-Daten, Protokolldateien und Benutzerdaten bleiben zurück.",
            "Verwaiste Ordner sammeln sich besonders in Program Files, AppData, LocalAppData und ProgramData. In der Registry bleiben Einträge unter HKCU\\Software und HKLM\\SOFTWARE zurück.",
            "Einige große Anwendungen (Spiele, Entwicklungstools, Grafiksoftware) können Gigabytes an Restdateien hinterlassen. Dieses Problem wird bei Benutzern, die regelmäßig Programme installieren und entfernen, deutlicher.",
          ],
        },
        {
          title: "Restdateien mit Disk Mop scannen",
          content: [
            "Der neue Deinstallationsreste-Reiniger von Disk Mop liest installierte Programme aus der Windows-Registry und erkennt verwaiste Ordner.",
            "Der Scan überprüft 4 Hauptverzeichnisse: Program Files, AppData\\Local, AppData\\Roaming und ProgramData. Außerdem werden Registry-Schlüssel unter HKCU\\Software und HKLM\\SOFTWARE gescannt.",
            "Das intelligente Whitelist-System schützt kritische Systemordner von Microsoft, Windows, Intel, NVIDIA, AMD, Dell und HP. Der Scan wird innerhalb von Sekunden abgeschlossen.",
          ],
        },
        {
          title: "Ergebnisse filtern und löschen",
          content: [
            "Nach dem Scan werden die Ergebnisse in zwei Kategorien aufgelistet: Dateien (verwaiste Ordner) und Registry (übrige Registry-Schlüssel). Verwenden Sie die Filterbuttons, um nur Dateien, nur Registry-Einträge oder alle anzuzeigen.",
            "Verwenden Sie die Suchleiste, um nach einem bestimmten Programmnamen zu filtern. Jedes Element zeigt seine Dateigröße und den vollständigen Pfad an.",
            'Wählen Sie Elemente mit Kontrollkästchen aus oder verwenden Sie "Alle auswählen". Ein Bestätigungsdialog erscheint vor dem Löschen. Nach dem Löschen werden Sie benachrichtigt, wie viele Dateien und Registry-Einträge bereinigt wurden.',
          ],
        },
        {
          title: "Wie viel Speicherplatz können Sie zurückgewinnen?",
          content: [
            "Der wiedergewonnene Speicherplatz hängt von Ihren Nutzungsgewohnheiten ab. Ein Benutzer, der regelmäßig Programme installiert und entfernt, kann leicht 5-50 GB an Restdateien ansammeln.",
            "Obwohl Registry-Reste platzmäßig klein sind, ist eine saubere Registry wichtig für die Gesamtgesundheit Ihres Systems.",
            "Die Übersichtskarte von Disk Mop zeigt die Gesamtzahl der verwaisten Ordner, Registry-Einträge und die Gesamtgröße auf einen Blick.",
          ],
        },
      ],
      howTo: {
        name: "So bereinigen Sie Deinstallationsreste in Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "DiskMop-Reste-Bereiniger öffnen",
            text: "Starten Sie DiskMop und navigieren Sie in der Seitenleiste zum Werkzeug 'Uninstall Leftovers Cleaner'.",
          },
          {
            name: "Nach verwaisten Dateien und Schlüsseln scannen",
            text: "Klicken Sie auf 'Scannen', um AppData, ProgramData und die Windows-Registrierung auf Rückstände deinstallierter Software zu untersuchen.",
          },
          {
            name: "Gefundene Ordner überprüfen",
            text: "Prüfen Sie die nach Dateien und Registrierung gruppierten Scanergebnisse und nutzen Sie Suchfilter, um bestimmte Anwendungen einzugrenzen.",
          },
          {
            name: "Sichere Löschung ausführen",
            text: "Wählen Sie nicht mehr benötigte Reste aus und bestätigen Sie das Entfernen, um sofort wertvollen Festplattenspeicher freizugeben.",
          },
        ],
      },
      dataTable: {
        caption:
          "Typische Speicherorte und Datenmengen von Deinstallationsrückständen",
        columns: [
          "Verzeichnis",
          "Restdatentyp",
          "Typische Größe",
          "Schwierigkeit der manuellen Entfernung",
          "DiskMop-Schutzfunktion",
        ],
        rows: [
          [
            "%localappdata%",
            "Caches, temporäre Downloads, lokale Laufzeitdateien",
            "2 GB – 20 GB",
            "Mittel (Versteckter Ordner)",
            "Automatische Zuordnung verwaister Ordner",
          ],
          [
            "%appdata% (Roaming)",
            "Benutzerprofile, benutzerdefinierte Vorlagen, Plugin-Daten",
            "1 GB – 10 GB",
            "Mittel",
            "Abgleich mit deinstallierten Herstellern",
          ],
          [
            "C:\\ProgramData",
            "Gemeinsame systemweite Programmeinstellungen",
            "2 GB – 15 GB",
            "Hoch (Erfordert Administratorrechte)",
            "Gefiltert gegen System-Whitelist",
          ],
          [
            "Windows-Registrierung",
            "Veraltete Schlüssel in HKCU\\Software & HKLM\\SOFTWARE",
            "< 100 MB",
            "Sehr hoch (Gefahr von Registrierungsfehlern)",
            "Sicheres Entfernen verwaister Schlüssel",
          ],
        ],
      },
      faq: [
        {
          question:
            "Warum hinterlassen Programme nach der Deinstallation Dateien?",
          answer:
            "Standardmäßige Deinstallationsprogramme behalten Benutzereinstellungen, Lizenzschlüssel und Caches in AppData oft absichtlich oder aufgrund unvollständiger Deinstallationsskripte bei.",
        },
        {
          question: "Ist es sicher, Ordner in AppData zu löschen?",
          answer:
            "Ja, vorausgesetzt, diese Ordner gehören zu Software, die Sie bereits deinstalliert haben und nicht mehr verwenden. Löschen Sie niemals Ordner aktiver Anwendungen.",
        },
        {
          question: "Können verbleibende Dateien Windows verlangsamen?",
          answer:
            "Obwohl inaktive Dateien keine CPU-Last erzeugen, führt ein volles Laufwerk C: zu verringerter SSD-Schreibleistung, höherer Fragmentierung und verlangsamten Startroutinen.",
        },
        {
          question:
            "Wie verhindert DiskMop das Löschen wichtiger Systemdateien?",
          answer:
            "DiskMop nutzt ein intelligentes Whitelist-System, das lebenswichtige Verzeichnisse und Registrierungseinträge von Microsoft, Windows, NVIDIA, Intel und Hardware-OEMs strikt schützt.",
        },
      ],
      verdict: [
        "Deinstallationsreste sind eines der am meisten übersehenen Speicherplatzprobleme für Windows-Benutzer.",
        "Der Deinstallationsreste-Reiniger in Disk Mop v1.0.15 löst dieses Problem mit einem Klick. Er bereinigt sicher verwaiste Ordner und Registry-Einträge und schützt Systemdateien mit einer intelligenten Whitelist. Verfügbar in 8 Sprachen.",
        "Bereinigen Sie den unsichtbaren Müll auf Ihrem Computer. Scannen Sie nach Deinstallationsresten mit Disk Mop.",
      ],
      ctaText: "Reste bereinigen mit Disk Mop",
    },
    fr: {
      title:
        "Que sont les résidus de désinstallation ? Nettoyer les fichiers résiduels sous Windows",
      metaDescription:
        "Nettoyez les fichiers et entrées de registre résiduels après la désinstallation. Découvrez comment les trouver et les supprimer en toute sécurité avec Disk Mop.",
      subtitle:
        "Trouvez et supprimez les traces laissées par les programmes désinstallés",
      intro: [
        "Lorsque vous désinstallez un programme sous Windows, vous pensez qu'il a complètement disparu. Mais dans la plupart des cas, des fichiers, des dossiers et des entrées de registre restent. Ces « résidus de désinstallation » s'accumulent, occupent de l'espace disque et ralentissent votre système.",
        "Avec Disk Mop v1.0.15, vous n'avez plus besoin d'un programme séparé. Le nouveau Nettoyeur de résidus détecte automatiquement les dossiers orphelins et les entrées de registre.",
      ],
      keyTakeaways: [
        "La désinstallation d'applications via le Panneau de configuration Windows laisse fréquemment des gigaoctets de fichiers orphelins dans AppData, ProgramData et le Registre.",
        "Ces résidus de programmes peuvent monopoliser entre 5 Go et plus de 50 Go d'espace de stockage sur un ordinateur classique.",
        "Les zones d'accumulation principales incluent %localappdata%, %appdata%, C:\\ProgramData et la ruche de registre HKCU\\Software.",
        "Le nettoyeur de résidus DiskMop croise les données du Registre Windows pour localiser automatiquement les répertoires orphelins liés aux logiciels supprimés.",
        "Une liste blanche intelligente protège les fichiers système essentiels et les pilotes Microsoft, Intel, NVIDIA, AMD et des fabricants d'ordinateurs.",
      ],
      sections: [
        {
          title: "Pourquoi des résidus de désinstallation existent-ils ?",
          content: [
            "Le mécanisme de désinstallation de Windows n'est pas parfait. De nombreux programmes ne suppriment pas tous leurs fichiers lorsqu'ils sont supprimés via le Panneau de configuration.",
            "Les dossiers orphelins s'accumulent dans Program Files, AppData, LocalAppData et ProgramData. Dans le Registre, des clés restent sous HKCU\\Software et HKLM\\SOFTWARE.",
            "Certaines grandes applications peuvent laisser des gigaoctets de fichiers résiduels lors de la désinstallation.",
          ],
        },
        {
          title: "Scanner les fichiers résiduels avec Disk Mop",
          content: [
            "Le nouveau Nettoyeur de résidus de Disk Mop lit les programmes installés depuis le Registre Windows et détecte les dossiers orphelins.",
            "L'analyse vérifie 4 répertoires principaux : Program Files, AppData\\Local, AppData\\Roaming et ProgramData. Elle analyse également les clés de registre.",
            "Le système de liste blanche intelligent protège les dossiers système critiques de Microsoft, Windows, Intel, NVIDIA, AMD, Dell et HP.",
          ],
        },
        {
          title: "Filtrer et supprimer les résultats",
          content: [
            "Après l'analyse, les résultats sont listés en deux catégories : Fichiers et Registre. Utilisez les boutons de filtre pour afficher uniquement les fichiers, les entrées de registre ou tout.",
            "Utilisez la barre de recherche pour filtrer par nom de programme. Chaque élément affiche sa taille et son chemin complet.",
            "Sélectionnez les éléments avec les cases à cocher ou utilisez « Tout sélectionner ». Une boîte de dialogue de confirmation apparaît avant la suppression.",
          ],
        },
        {
          title: "Combien d'espace pouvez-vous récupérer ?",
          content: [
            "L'espace récupéré dépend de vos habitudes d'utilisation. Un utilisateur qui installe et supprime régulièrement des programmes peut facilement accumuler 5 à 50 Go de fichiers résiduels.",
            "Bien que les résidus de registre soient petits en taille, un registre propre est important pour la santé globale de votre système.",
            "La carte de résumé de Disk Mop affiche le nombre total de dossiers orphelins, d'entrées de registre et la taille totale en un coup d'œil.",
          ],
        },
      ],
      howTo: {
        name: "Comment nettoyer les résidus de désinstallation sous Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "Ouvrir l'outil de nettoyage de résidus DiskMop",
            text: "Lancez DiskMop et accédez au module 'Uninstall Leftovers Cleaner' dans le menu latéral.",
          },
          {
            name: "Analyser les fichiers et clés orphelines",
            text: "Cliquez sur 'Analyser' pour inspecter AppData, ProgramData et le Registre Windows afin de déceler les résidus de logiciels désinstallés.",
          },
          {
            name: "Passer en revue les éléments détectés",
            text: "Examinez les résultats regroupés par fichiers et registre, en utilisant les filtres de recherche pour cibler des programmes spécifiques.",
          },
          {
            name: "Exécuter la suppression sécurisée",
            text: "Sélectionnez les restes inutiles et confirmez la suppression pour libérer instantanément de l'espace disque.",
          },
        ],
      },
      dataTable: {
        caption:
          "Emplacements fréquents des résidus de désinstallation et volume de stockage occupé",
        columns: [
          "Emplacement du répertoire",
          "Type de données résiduelles",
          "Taille typique",
          "Difficulté de suppression manuelle",
          "Protection DiskMop",
        ],
        rows: [
          [
            "%localappdata%",
            "Caches, téléchargements temporaires, états d'exécution locaux",
            "2 Go – 20 Go",
            "Moyenne (Dossier masqué)",
            "Détection automatique des dossiers orphelins",
          ],
          [
            "%appdata% (Roaming)",
            "Profils utilisateur, modèles personnalisés, données de plugins",
            "1 Go – 10 Go",
            "Moyenne",
            "Recoupement avec les éditeurs désinstallés",
          ],
          [
            "C:\\ProgramData",
            "Paramètres partagés à l'échelle de la machine",
            "2 Go – 15 Go",
            "Élevée (Nécessite des droits d'administrateur)",
            "Filtrage automatique par liste blanche système",
          ],
          [
            "Registre Windows",
            "Clés obsolètes dans HKCU\\Software et HKLM\\SOFTWARE",
            "< 100 Mo",
            "Très élevée (Risque de corruption du registre)",
            "Purge sécurisée des clés orphelines",
          ],
        ],
      },
      faq: [
        {
          question:
            "Pourquoi les programmes laissent-ils des fichiers après leur désinstallation ?",
          answer:
            "Les désinstalleurs standards conservent souvent les préférences utilisateur, clés de licence et caches dans AppData, délibérément ou en raison de scripts de désinstallation négligents.",
        },
        {
          question:
            "Peut-on supprimer des dossiers dans AppData en toute sécurité ?",
          answer:
            "Oui, à condition que ces dossiers appartiennent à des logiciels déjà désinstallés que vous n'utilisez plus. Ne supprimez jamais les dossiers d'applications encore installées.",
        },
        {
          question: "Les fichiers résiduels peuvent-ils ralentir Windows ?",
          answer:
            "Bien que ces fichiers inactifs ne sollicitent pas le processeur, saturer le lecteur C: dégrade les performances d'écriture des SSD, accentue la fragmentation et ralentit le démarrage.",
        },
        {
          question:
            "Comment DiskMop empêche-t-il la suppression de fichiers système vitaux ?",
          answer:
            "DiskMop intègre une liste blanche stricte qui protège les répertoires et entrées de registre fondamentaux de Microsoft, Windows, NVIDIA, Intel et des constructeurs OEM.",
        },
      ],
      verdict: [
        "Les résidus de désinstallation sont l'un des problèmes d'espace disque les plus négligés pour les utilisateurs Windows.",
        "Le Nettoyeur de résidus dans Disk Mop v1.0.15 résout ce problème en un clic. Disponible en 8 langues et activé avec une licence PRO.",
        "Nettoyez les déchets invisibles sur votre ordinateur avec Disk Mop.",
      ],
      ctaText: "Nettoyer les résidus avec Disk Mop",
    },
    es: {
      title:
        "¿Qué son los residuos de desinstalación? Cómo limpiar archivos residuales en Windows",
      metaDescription:
        "Limpie archivos y entradas de registro residuales después de desinstalar programas. Aprenda a encontrarlos y eliminarlos de forma segura con Disk Mop.",
      subtitle:
        "Encuentre y elimine rastros dejados por programas desinstalados",
      intro: [
        'Cuando desinstalas un programa en Windows, asumes que ha desaparecido por completo. Pero en la mayoría de los casos, quedan archivos, carpetas y entradas de registro. Estos "residuos de desinstalación" se acumulan, ocupan espacio en disco y ralentizan tu sistema.',
        "Con Disk Mop v1.0.15, ya no necesitas un programa separado. El nuevo Limpiador de residuos detecta automáticamente carpetas huérfanas y entradas de registro.",
      ],
      keyTakeaways: [
        "Desinstalar aplicaciones mediante el Panel de control de Windows suele dejar gigabytes de archivos huérfanos en AppData, ProgramData y claves del Registro.",
        "Los datos residuales de programas desinstalados pueden consumir entre 5 GB y más de 50 GB de almacenamiento en equipos convencionales.",
        "Los puntos clave de acumulación residual son %localappdata%, %appdata%, C:\\ProgramData y la rama HKCU\\Software del Registro.",
        "El limpiador de residuos de DiskMop coteja el Registro de Windows para localizar automáticamente carpetas huérfanas de programas eliminados.",
        "Una lista blanca inteligente protege rigurosamente archivos esenciales del sistema y controladores de Microsoft, Intel, NVIDIA, AMD y fabricantes OEM.",
      ],
      sections: [
        {
          title: "¿Por qué existen los residuos de desinstalación?",
          content: [
            "El mecanismo de desinstalación de Windows no es perfecto. Muchos programas no eliminan todos sus archivos cuando se eliminan a través del Panel de control.",
            "Las carpetas huérfanas se acumulan en Program Files, AppData, LocalAppData y ProgramData. En el Registro, quedan claves bajo HKCU\\Software y HKLM\\SOFTWARE.",
            "Algunas aplicaciones grandes pueden dejar gigabytes de archivos residuales al desinstalarse.",
          ],
        },
        {
          title: "Escanear archivos residuales con Disk Mop",
          content: [
            "El nuevo Limpiador de residuos de Disk Mop lee los programas instalados del Registro de Windows y detecta carpetas huérfanas.",
            "El escaneo verifica 4 directorios principales: Program Files, AppData\\Local, AppData\\Roaming y ProgramData. También escanea claves de registro.",
            "El sistema de lista blanca inteligente protege las carpetas críticas del sistema de Microsoft, Windows, Intel, NVIDIA, AMD, Dell y HP.",
          ],
        },
        {
          title: "Filtrar y eliminar resultados",
          content: [
            "Después del escaneo, los resultados se listan en dos categorías: Archivos y Registro. Usa los botones de filtro para ver solo archivos, solo entradas de registro o todo.",
            "Usa la barra de búsqueda para filtrar por nombre de programa. Cada elemento muestra su tamaño y ruta completa.",
            'Selecciona elementos con casillas de verificación o usa "Seleccionar todo". Un diálogo de confirmación aparece antes de la eliminación.',
          ],
        },
        {
          title: "¿Cuánto espacio puedes recuperar?",
          content: [
            "El espacio recuperado depende de tus hábitos de uso. Un usuario que instala y elimina programas regularmente puede acumular fácilmente de 5 a 50 GB de archivos residuales.",
            "Aunque los residuos de registro son pequeños en tamaño, un registro limpio es importante para la salud general de tu sistema.",
            "La tarjeta de resumen de Disk Mop muestra el número total de carpetas huérfanas, entradas de registro y tamaño total de un vistazo.",
          ],
        },
      ],
      howTo: {
        name: "Cómo limpiar restos de desinstalación en Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "Abrir el limpiador de residuos de DiskMop",
            text: "Inicie DiskMop y seleccione la herramienta 'Uninstall Leftovers Cleaner' en la barra lateral.",
          },
          {
            name: "Escanear en busca de archivos y claves huérfanas",
            text: "Haga clic en 'Escanear' para inspeccionar AppData, ProgramData y el Registro de Windows en busca de restos de software.",
          },
          {
            name: "Revisar las carpetas detectadas",
            text: "Examine los resultados agrupados por Archivos y Registro, utilizando filtros de búsqueda para localizar aplicaciones específicas.",
          },
          {
            name: "Ejecutar la eliminación segura",
            text: "Seleccione los restos innecesarios y confirme la eliminación para recuperar espacio de almacenamiento de inmediato.",
          },
        ],
      },
      dataTable: {
        caption:
          "Ubicaciones habituales de restos de desinstalación y espacio ocupado",
        columns: [
          "Ubicación del directorio",
          "Tipo de datos residuales",
          "Tamaño habitual",
          "Dificultad de eliminación manual",
          "Protección de DiskMop",
        ],
        rows: [
          [
            "%localappdata%",
            "Cachés, descargas temporales, estados de ejecución locales",
            "2 GB – 20 GB",
            "Moderada (Carpeta oculta)",
            "Mapeo automático de carpetas huérfanas",
          ],
          [
            "%appdata% (Roaming)",
            "Perfiles de usuario, plantillas personalizadas, datos de complementos",
            "1 GB – 10 GB",
            "Moderada",
            "Cotejo cruzado con desarrolladores desinstalados",
          ],
          [
            "C:\\ProgramData",
            "Configuraciones compartidas a nivel de sistema",
            "2 GB – 15 GB",
            "Alta (Requiere permisos de administrador)",
            "Filtrado mediante lista blanca del sistema",
          ],
          [
            "Registro de Windows",
            "Claves obsoletas en HKCU\\Software y HKLM\\SOFTWARE",
            "< 100 MB",
            "Muy alta (Riesgo de dañar el registro)",
            "Limpieza segura de claves huérfanas",
          ],
        ],
      },
      faq: [
        {
          question: "¿Por qué los programas dejan archivos tras desinstalarse?",
          answer:
            "Los desinstaladores habituales suelen conservar preferencias de usuario, claves de licencia y cachés en AppData, ya sea de forma deliberada o por scripts mal diseñados.",
        },
        {
          question: "¿Es seguro eliminar carpetas en AppData?",
          answer:
            "Sí, siempre que esas carpetas correspondan a software que ya ha desinstalado y ya no utiliza. Nunca elimine carpetas de programas en uso.",
        },
        {
          question: "¿Pueden los archivos residuales ralentizar Windows?",
          answer:
            "Aunque los archivos inactivos no consumen ciclos de CPU, llenar la unidad C: degrada la velocidad de escritura del SSD, incrementa la fragmentación y ralentiza el arranque.",
        },
        {
          question:
            "¿Cómo previene DiskMop la eliminación de archivos esenciales del sistema?",
          answer:
            "DiskMop utiliza un sistema de lista blanca inteligente que preserva directorios y entradas de registro críticos de Microsoft, Windows, NVIDIA, Intel y fabricantes de hardware.",
        },
      ],
      verdict: [
        "Los residuos de desinstalación son uno de los problemas de espacio en disco más ignorados por los usuarios de Windows.",
        "El Limpiador de residuos en Disk Mop v1.0.15 resuelve esto con un clic. Disponible en 8 idiomas y activado con licencia PRO.",
        "Limpia la basura invisible en tu computadora con Disk Mop.",
      ],
      ctaText: "Limpiar residuos con Disk Mop",
    },
    it: {
      title:
        "Cosa sono i residui di disinstallazione? Come pulire i file residui su Windows",
      metaDescription:
        "Pulisci file e voci di registro residue dopo la disinstallazione. Scopri cosa sono i residui di disinstallazione e come rimuoverli in sicurezza con Disk Mop.",
      subtitle:
        "Trova e rimuovi le tracce lasciate dai programmi disinstallati",
      intro: [
        'Quando disinstalli un programma su Windows, pensi che sia completamente sparito. Ma nella maggior parte dei casi, restano file, cartelle e voci di registro. Questi "residui di disinstallazione" si accumulano, occupano spazio su disco e rallentano il sistema.',
        "Con Disk Mop v1.0.15, non hai più bisogno di un programma separato. Il nuovo Pulitore di residui rileva automaticamente cartelle orfane e voci di registro.",
      ],
      keyTakeaways: [
        "La disinstallazione delle app tramite il Pannello di controllo di Windows lascia spesso gigabyte di file orfani in AppData, ProgramData e nel Registro.",
        "I dati residui possono occupare tra 5 GB e oltre 50 GB di spazio di archiviazione nelle normali installazioni PC.",
        "Le posizioni principali dei residui includono %localappdata%, %appdata%, C:\\ProgramData e il ramo HKCU\\Software del Registro.",
        "Il modulo di rimozione residui di DiskMop incrocia il Registro di Windows per individuare automaticamente le cartelle orfane dei programmi rimossi.",
        "Una whitelist intelligente protegge con cura i file di sistema e i driver critici di Microsoft, Intel, NVIDIA, AMD e produttori OEM.",
      ],
      sections: [
        {
          title: "Perché esistono i residui di disinstallazione?",
          content: [
            "Il meccanismo di disinstallazione di Windows non è perfetto. Molti programmi non eliminano tutti i loro file quando vengono rimossi tramite il Pannello di controllo.",
            "Le cartelle orfane si accumulano in Program Files, AppData, LocalAppData e ProgramData. Nel Registro, restano chiavi sotto HKCU\\Software e HKLM\\SOFTWARE.",
            "Alcune grandi applicazioni possono lasciare gigabyte di file residui quando disinstallate.",
          ],
        },
        {
          title: "Scansione dei file residui con Disk Mop",
          content: [
            "Il nuovo Pulitore di residui di Disk Mop legge i programmi installati dal Registro di Windows e rileva le cartelle orfane.",
            "La scansione controlla 4 directory principali: Program Files, AppData\\Local, AppData\\Roaming e ProgramData. Scansiona anche le chiavi di registro.",
            "Il sistema di whitelist intelligente protegge le cartelle di sistema critiche di Microsoft, Windows, Intel, NVIDIA, AMD, Dell e HP.",
          ],
        },
        {
          title: "Filtrare ed eliminare i risultati",
          content: [
            "Dopo la scansione, i risultati sono elencati in due categorie: File e Registro. Usa i pulsanti filtro per visualizzare solo file, solo voci di registro o tutto.",
            "Usa la barra di ricerca per filtrare per nome del programma. Ogni elemento mostra la sua dimensione e il percorso completo.",
            'Seleziona gli elementi con le caselle di controllo o usa "Seleziona tutto". Una finestra di conferma appare prima dell\'eliminazione.',
          ],
        },
        {
          title: "Quanto spazio puoi recuperare?",
          content: [
            "Lo spazio recuperato dipende dalle tue abitudini di utilizzo. Un utente che installa e rimuove regolarmente programmi può facilmente accumulare da 5 a 50 GB di file residui.",
            "Anche se i residui di registro sono piccoli in termini di dimensioni, un registro pulito è importante per la salute generale del sistema.",
            "La scheda riepilogativa di Disk Mop mostra il numero totale di cartelle orfane, voci di registro e dimensione totale a colpo d'occhio.",
          ],
        },
      ],
      howTo: {
        name: "Come rimuovere i residui di disinstallazione in Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "Aprire il modulo pulizia residui di DiskMop",
            text: "Avvia DiskMop e seleziona lo strumento 'Uninstall Leftovers Cleaner' dalla barra laterale.",
          },
          {
            name: "Scansionare file e chiavi orfane",
            text: "Fai clic su 'Scansiona' per ispezionare AppData, ProgramData e il Registro di Windows alla ricerca di residui di software disinstallato.",
          },
          {
            name: "Esaminare le cartelle rilevate",
            text: "Controlla i risultati raggruppati per File e Registro, utilizzando i filtri di ricerca per individuare applicazioni specifiche.",
          },
          {
            name: "Eseguire l'eliminazione sicura",
            text: "Seleziona i residui non necessari e conferma la rimozione per recuperare spazio su disco all'istante.",
          },
        ],
      },
      dataTable: {
        caption:
          "Percorsi più comuni dei residui di disinstallazione e relativo ingombro",
        columns: [
          "Percorso della cartella",
          "Tipo di dati residui",
          "Dimensioni tipiche",
          "Difficoltà rimozione manuale",
          "Protezione DiskMop",
        ],
        rows: [
          [
            "%localappdata%",
            "Cache, download temporanei, stati di runtime locali",
            "2 GB – 20 GB",
            "Media (Cartella nascosta)",
            "Mappatura automatica delle cartelle orfane",
          ],
          [
            "%appdata% (Roaming)",
            "Profili utente, modelli personalizzati, dati dei plugin",
            "1 GB – 10 GB",
            "Media",
            "Controllo incrociato con i produttori disinstallati",
          ],
          [
            "C:\\ProgramData",
            "Impostazioni di programma condivise a livello di sistema",
            "2 GB – 15 GB",
            "Alta (Richiede autorizzazioni di amministratore)",
            "Filtraggio tramite whitelist di sistema",
          ],
          [
            "Registro di Windows",
            "Chiavi obsolete in HKCU\\Software e HKLM\\SOFTWARE",
            "< 100 MB",
            "Molto alta (Rischio di corruzione del registro)",
            "Rimozione sicura delle chiavi orfane",
          ],
        ],
      },
      faq: [
        {
          question:
            "Perché i programmi lasciano file dopo la disinstallazione?",
          answer:
            "I programmi di disinstallazione standard spesso conservano preferenze utente, licenze e file di cache in AppData, intenzionalmente o per via di script imprecisi.",
        },
        {
          question: "È sicuro eliminare le cartelle in AppData?",
          answer:
            "Sì, a patto che appartengano a software già disinstallato e non più in uso. Non eliminare mai cartelle riconducibili ad applicazioni attive.",
        },
        {
          question: "I file residui possono rallentare Windows?",
          answer:
            "Anche se i file inattivi non consumano CPU, riempire l'unità C: riduce le prestazioni di scrittura degli SSD, aumenta la frammentazione e appesantisce l'avvio.",
        },
        {
          question:
            "In che modo DiskMop impedisce l'eliminazione di file di sistema importanti?",
          answer:
            "DiskMop adotta un sistema di whitelist intelligente che salvaguarda directory e voci di registro vitali di Microsoft, Windows, NVIDIA, Intel e produttori hardware.",
        },
      ],
      verdict: [
        "I residui di disinstallazione sono uno dei problemi di spazio su disco più trascurati dagli utenti Windows.",
        "Il Pulitore di residui in Disk Mop v1.0.15 risolve questo con un clic. Disponibile in 8 lingue e attivato con licenza PRO.",
        "Pulisci la spazzatura invisibile sul tuo computer con Disk Mop.",
      ],
      ctaText: "Pulisci i residui con Disk Mop",
    },
    pt: {
      title:
        "O que são resíduos de desinstalação? Como limpar arquivos residuais no Windows",
      metaDescription:
        "Limpe arquivos e entradas de registro residuais após desinstalar programas. Aprenda a encontrá-los e removê-los com segurança usando o Disk Mop.",
      subtitle:
        "Encontre e remova rastros deixados por programas desinstalados",
      intro: [
        'Quando você desinstala um programa no Windows, assume que ele foi completamente removido. Mas na maioria dos casos, arquivos, pastas e entradas de registro ficam para trás. Esses "resíduos de desinstalação" se acumulam, ocupam espaço em disco e deixam seu sistema mais lento.',
        "Com o Disk Mop v1.0.15, você não precisa mais de um programa separado. O novo Limpador de resíduos detecta automaticamente pastas órfãs e entradas de registro.",
      ],
      keyTakeaways: [
        "Desinstalar aplicativos pelo Painel de Controle do Windows costuma deixar gigabytes de arquivos órfãos em AppData, ProgramData e chaves do Registro.",
        "Os dados residuais de programas removidos podem consumir entre 5 GB e mais de 50 GB de espaço em instalações normais de PC.",
        "Os principais locais de acúmulo residual incluem %localappdata%, %appdata%, C:\\ProgramData e o hive de registro HKCU\\Software.",
        "O limpador de sobras de desinstalação do DiskMop cruza referências com o Registro do Windows para encontrar diretórios órfãos automaticamente.",
        "Uma lista de permissões (whitelist) inteligente protege arquivos vitais do sistema e drivers da Microsoft, Intel, NVIDIA, AMD e fabricantes OEM.",
      ],
      sections: [
        {
          title: "Por que existem resíduos de desinstalação?",
          content: [
            "O mecanismo de desinstalação do Windows não é perfeito. Muitos programas não excluem todos os seus arquivos quando removidos pelo Painel de Controle.",
            "Pastas órfãs se acumulam em Program Files, AppData, LocalAppData e ProgramData. No Registro, chaves permanecem em HKCU\\Software e HKLM\\SOFTWARE.",
            "Alguns aplicativos grandes podem deixar gigabytes de arquivos residuais ao serem desinstalados.",
          ],
        },
        {
          title: "Escanear arquivos residuais com o Disk Mop",
          content: [
            "O novo Limpador de resíduos do Disk Mop lê os programas instalados do Registro do Windows e detecta pastas órfãs.",
            "A verificação checa 4 diretórios principais: Program Files, AppData\\Local, AppData\\Roaming e ProgramData. Também escaneia chaves de registro.",
            "O sistema de lista branca inteligente protege pastas críticas do sistema da Microsoft, Windows, Intel, NVIDIA, AMD, Dell e HP.",
          ],
        },
        {
          title: "Filtrar e excluir resultados",
          content: [
            "Após a verificação, os resultados são listados em duas categorias: Arquivos e Registro. Use os botões de filtro para ver apenas arquivos, apenas entradas de registro ou tudo.",
            "Use a barra de pesquisa para filtrar por nome do programa. Cada item exibe seu tamanho e caminho completo.",
            'Selecione itens com caixas de seleção ou use "Selecionar tudo". Um diálogo de confirmação aparece antes da exclusão.',
          ],
        },
        {
          title: "Quanto espaço você pode recuperar?",
          content: [
            "O espaço recuperado depende dos seus hábitos de uso. Um usuário que instala e remove programas regularmente pode facilmente acumular de 5 a 50 GB de arquivos residuais.",
            "Embora os resíduos de registro sejam pequenos em tamanho, um registro limpo é importante para a saúde geral do sistema.",
            "O cartão de resumo do Disk Mop mostra o número total de pastas órfãs, entradas de registro e tamanho total em uma olhada.",
          ],
        },
      ],
      howTo: {
        name: "Como limpar sobras de desinstalação no Windows",
        totalTime: "PT5M",
        steps: [
          {
            name: "Abrir o limpador de sobras do DiskMop",
            text: "Abra o DiskMop e navegue até a ferramenta 'Uninstall Leftovers Cleaner' na barra lateral.",
          },
          {
            name: "Verificar arquivos e chaves órfãs",
            text: "Clique em 'Escanear' para analisar AppData, ProgramData e o Registro do Windows em busca de sobras de softwares.",
          },
          {
            name: "Examinar as pastas detectadas",
            text: "Analise os resultados agrupados por Arquivos e Registro, utilizando filtros de busca para localizar programas específicos.",
          },
          {
            name: "Executar a remoção segura",
            text: "Selecione as sobras desnecessárias e confirme a exclusão para recuperar espaço em disco imediatamente.",
          },
        ],
      },
      dataTable: {
        caption:
          "Locais comuns de sobras de desinstalação e espaço de armazenamento ocupado",
        columns: [
          "Local do diretório",
          "Tipo de dados residuais",
          "Tamanho típico",
          "Dificuldade de remoção manual",
          "Proteção do DiskMop",
        ],
        rows: [
          [
            "%localappdata%",
            "Caches, downloads temporários, arquivos de tempo de execução locais",
            "2 GB – 20 GB",
            "Média (Pasta oculta)",
            "Mapeamento automático de pastas órfãs",
          ],
          [
            "%appdata% (Roaming)",
            "Perfis de usuário, modelos personalizados, dados de plugins",
            "1 GB – 10 GB",
            "Média",
            "Cruzamento com registros de fornecedores desinstalados",
          ],
          [
            "C:\\ProgramData",
            "Configurações de programas compartilhadas por toda a máquina",
            "2 GB – 15 GB",
            "Alta (Exige privilégios de administrador)",
            "Filtrado contra whitelist de segurança do sistema",
          ],
          [
            "Registro do Windows",
            "Chaves obsoletas em HKCU\\Software e HKLM\\SOFTWARE",
            "< 100 MB",
            "Muito alta (Risco de corrupção do registro)",
            "Limpeza segura de chaves órfãs",
          ],
        ],
      },
      faq: [
        {
          question:
            "Por que os programas deixam arquivos para trás após serem desinstalados?",
          answer:
            "Desinstaladores convencionais costumam preservar preferências de usuário, chaves de licença e caches em AppData de propósito ou por scripts de remoção deficientes.",
        },
        {
          question: "É seguro excluir pastas dentro de AppData?",
          answer:
            "Sim, desde que essas pastas pertençam a softwares já desinstalados que você não utiliza mais. Nunca exclua pastas de aplicativos ativos.",
        },
        {
          question: "Arquivos residuais podem deixar o Windows lento?",
          answer:
            "Embora arquivos inativos não usem processador, encher a unidade C: prejudica a velocidade de gravação do SSD, aumenta a fragmentação e retarda o boot.",
        },
        {
          question:
            "Como o DiskMop evita excluir arquivos essenciais do sistema?",
          answer:
            "O DiskMop utiliza um sistema de whitelist inteligente que protege pastas e entradas do Registro vitais da Microsoft, Windows, NVIDIA, Intel e fabricantes de hardware.",
        },
      ],
      verdict: [
        "Resíduos de desinstalação são um dos problemas de espaço em disco mais ignorados pelos usuários do Windows.",
        "O Limpador de resíduos no Disk Mop v1.0.15 resolve isso com um clique. Disponível em 8 idiomas e ativado com licença PRO.",
        "Limpe o lixo invisível no seu computador com o Disk Mop.",
      ],
      ctaText: "Limpar resíduos com o Disk Mop",
    },
    ja: {
      title:
        "アンインストール残留物とは？Windowsの残留ファイルをクリーンアップする方法",
      metaDescription:
        "プログラムのアンインストール後に残ったファイルとレジストリエントリをクリーンアップ。Disk Mopで安全に検出・削除する方法を解説。",
      subtitle: "アンインストールしたプログラムの痕跡を見つけて削除",
      intro: [
        "Windowsでプログラムをアンインストールすると、完全に削除されたと思いがちです。しかし、ほとんどの場合、ファイル、フォルダ、レジストリエントリが残ります。これらの「アンインストール残留物」は時間とともに蓄積し、ディスク容量を消費し、システムを遅くします。",
        "Disk Mop v1.0.15では、別のプログラムは不要です。新しいアンインストール残留物クリーナーが、孤立したフォルダとレジストリエントリを自動的に検出します。",
      ],
      keyTakeaways: [
        "Windowsのコントロールパネルからアプリを削除しても、AppData、ProgramData、レジストリ内に数ギガバイトもの残留ファイルが残されることがよくあります。",
        "一般的なPC環境では、アンインストール後の残留データだけで5GB〜50GB以上のストレージ容量が無駄に占有されています。",
        "主な残留データの蓄積場所は、%localappdata%、%appdata%、C:\\ProgramData、およびHKCU\\Softwareレジストリハイブです。",
        "DiskMopの残留ファイルクリーナーは、Windowsレジストリと照合して、削除済みソフトウェアの不要な孤立フォルダーを自動検出します。",
        "スマートホワイトリスト機能により、Microsoft、Intel、NVIDIA、AMD、および各PCメーカーの重要なシステムファイルやドライバーを確実に保護します。",
      ],
      sections: [
        {
          title: "なぜアンインストール残留物が発生するのか？",
          content: [
            "Windowsのプログラムアンインストール機能は完璧ではありません。多くのプログラムは、コントロールパネルから削除してもすべてのファイルを削除しません。",
            "孤立したフォルダはProgram Files、AppData、LocalAppData、ProgramDataに蓄積します。レジストリではHKCU\\SoftwareとHKLM\\SOFTWAREの下に残留キーが残ります。",
            "大規模なアプリケーション（ゲーム、開発ツール、グラフィックソフト）は、アンインストール時にギガバイト単位の残留ファイルを残すことがあります。",
          ],
        },
        {
          title: "Disk Mopで残留ファイルをスキャン",
          content: [
            "Disk Mopの新しいアンインストール残留物クリーナーは、Windowsレジストリからインストール済みプログラムを読み取り、孤立したフォルダを検出します。",
            "スキャンは4つの主要ディレクトリを確認します：Program Files、AppData\\Local、AppData\\Roaming、ProgramData。レジストリキーもスキャンします。",
            "スマートホワイトリストシステムがMicrosoft、Windows、Intel、NVIDIA、AMD、Dell、HPの重要なシステムフォルダを保護します。",
          ],
        },
        {
          title: "結果のフィルタリングと削除",
          content: [
            "スキャン完了後、結果は2つのカテゴリで表示されます：ファイル（孤立フォルダ）とレジストリ（残留レジストリキー）。フィルターボタンで表示を切り替えできます。",
            "検索バーでプログラム名によるフィルタリングが可能です。各項目にはファイルサイズとフルパスが表示されます。",
            "チェックボックスで項目を選択するか、「すべて選択」を使用します。削除前に確認ダイアログが表示されます。",
          ],
        },
        {
          title: "どのくらいの容量を回復できますか？",
          content: [
            "回復できる容量は使用習慣によります。定期的にプログラムをインストール・削除するユーザーは、簡単に5～50GBの残留ファイルを蓄積します。",
            "レジストリの残留物はサイズは小さいですが、クリーンなレジストリはシステムの全体的な健全性にとって重要です。",
            "Disk Mopのサマリーカードは、孤立フォルダの総数、レジストリエントリ数、合計サイズを一目で表示します。",
          ],
        },
      ],
      howTo: {
        name: "Windowsでアンインストールの残留ファイルを完全に削除する方法",
        totalTime: "PT5M",
        steps: [
          {
            name: "DiskMopの残留クリーナーを開く",
            text: "DiskMopを起動し、サイドバーから「Uninstall Leftovers Cleaner」ツールを選択します。",
          },
          {
            name: "孤立ファイルとレジストリキーをスキャンする",
            text: "「スキャン」をクリックして、AppData、ProgramData、Windowsレジストリ内のアンインストール済みソフトウェアの痕跡を調査します。",
          },
          {
            name: "検出されたフォルダーを確認する",
            text: "ファイル別およびレジストリ別に分類されたスキャン結果を確認し、検索フィルターを使って特定のアプリを絞り込みます。",
          },
          {
            name: "安全な削除を実行する",
            text: "不要な残留項目を選択し、確認ダイアログから削除を実行して、ディスク容量を即座に解放します。",
          },
        ],
      },
      dataTable: {
        caption:
          "アンインストール残留ファイルの主な保存場所と専有ストレージ容量",
        columns: [
          "フォルダーの場所",
          "残留データの種類",
          "一般的なサイズ",
          "手動削除の難易度",
          "DiskMopの保護機構",
        ],
        rows: [
          [
            "%localappdata%",
            "キャッシュ、一時ダウンロードファイル、ローカル実行ステート",
            "2 GB – 20 GB",
            "中（隠しフォルダー）",
            "孤立フォルダーの自動検出・マッピング",
          ],
          [
            "%appdata% (Roaming)",
            "ユーザープロファイル、カスタムテンプレート、プラグインデータ",
            "1 GB – 10 GB",
            "中",
            "削除済みベンダー情報のクロス照合",
          ],
          [
            "C:\\ProgramData",
            "マシン全体で共有されるプログラム設定ファイル",
            "2 GB – 15 GB",
            "高（管理者権限が必要）",
            "システムホワイトリストによる除外フィルタリング",
          ],
          [
            "Windowsレジストリ",
            "HKCU\\SoftwareおよびHKLM\\SOFTWARE内の無効なキー",
            "< 100 MB",
            "極めて高（レジストリ破損のリスク）",
            "孤立した不要キーの安全な整理・削除",
          ],
        ],
      },
      faq: [
        {
          question:
            "なぜプログラムはアンインストール後もファイルを残すのですか？",
          answer:
            "標準的なアンインストーラーは、再インストール時の利便性のためにユーザー設定、ライセンス情報、キャッシュを意図的に残す設計になっているか、スクリプトの作りが不十分なことが多いためです。",
        },
        {
          question: "AppData内のフォルダーを削除しても安全ですか？",
          answer:
            "すでにアンインストール済みで、今後使用しないアプリのフォルダーであれば安全に削除できます。現在使用中のアプリのフォルダーは絶対に削除しないでください。",
        },
        {
          question: "残留ファイルによってWindowsの動作が重くなりますか？",
          answer:
            "放置されたファイル自体がCPUを消費することはありませんが、Cドライブの空き容量が逼迫するとSSDの書き込み速度が低下し、ファイルの断片化や起動時の遅延を引き起こします。",
        },
        {
          question:
            "DiskMopは重要なシステムファイルの誤削除をどのように防止しますか？",
          answer:
            "DiskMopは包括的なスマートホワイトリストを搭載しており、Microsoft、Windows、NVIDIA、Intel、主要OEMベンダーの重要フォルダーやレジストリエントリを自動的に除外・保護します。",
        },
      ],
      verdict: [
        "アンインストール残留物は、Windowsユーザーが最も見落としがちなディスク容量の問題の一つです。",
        "Disk Mop v1.0.15のアンインストール残留物クリーナーはワンクリックでこれを解決します。8言語対応、PROライセンスで有効化。",
        "コンピュータの見えないゴミをクリーンアップしましょう。Disk Mopでアンインストール残留物をスキャンしてディスク容量を取り戻しましょう。",
      ],
      ctaText: "Disk Mopで残留物をクリーンアップ",
    },
  },
};
