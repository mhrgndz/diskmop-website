import type { Article } from "../types";

export const findDuplicateFilesMac: Article = {
  slug: "find-duplicate-files-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-11-09",
  updated: "2026-11-09",
  readingTime: 6,
  content: {
    en: {
      title: "How to Find and Delete Duplicate Files on Mac",
      metaDescription:
        "Finder has no duplicate finder. Learn how to find identical files on a Mac by content, what is safe to remove, and how DiskMop compares files and sends copies to the Trash.",
      subtitle:
        "Same file, many copies: find exact duplicates by content and keep one",
      intro: [
        "Short answer: macOS has no built-in tool that lists duplicate files in Finder. You can spot some by sorting a folder by name or size, and the Photos and Music apps flag their own duplicates, but for documents, downloads, archives and videos you need something that compares what is inside the files. DiskMop for Mac does that in Large & duplicate files > Duplicates.",
        "This guide explains where duplicates come from, what you can do with the tools Apple provides, how DiskMop decides two files are identical, and how to remove the extra copies without losing the original.",
      ],
      keyTakeaways: [
        "Finder cannot show duplicates for you; the Photos app (Duplicates album) and the Music app (Show Duplicate Items) only cover their own libraries.",
        "DiskMop treats two files as duplicates only when their content is identical: same size, same first 64 KB, then the same full SHA-256 fingerprint. Names and dates are ignored.",
        "Files under 1 MB are skipped, and two names pointing to the same data (hard links) are not counted as duplicates, because deleting one would free nothing.",
        "Removed copies go to the Trash, so you can still restore one before you empty it.",
      ],
      dataTable: {
        caption: "Ways to find duplicate files on a Mac",
        columns: ["Method", "Compares", "Covers", "Good for"],
        rows: [
          [
            "Finder: sort by name or size",
            "Names and sizes only",
            "One folder at a time",
            "Spotting obvious copies such as report (1).pdf",
          ],
          [
            "Photos and Music duplicate tools",
            "Their own libraries",
            "Photos or songs only",
            "Duplicates inside those apps",
          ],
          [
            "Terminal tools such as fdupes",
            "File content",
            "Any folder you point at",
            "Comfortable with the command line",
          ],
          [
            "DiskMop Duplicates tab",
            "Size, first 64 KB, then full SHA-256",
            "Your files or a drive you choose",
            "Documents, downloads, archives, videos",
          ],
        ],
      },
      howTo: {
        name: "Find and remove duplicate files on a Mac with DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open Large & duplicate files",
            text: "Start DiskMop and choose Large & duplicate files in the sidebar, then open the Duplicates tab.",
          },
          {
            name: "Pick where to look",
            text: "Choose My files for your home folder, a whole drive, or Choose folder to search one place only.",
          },
          {
            name: "Scan and review the groups",
            text: "Press Scan. Each group lists files with identical content and the space the extra copies take. Open a few and check the paths.",
          },
          {
            name: "Tick the copies to remove",
            text: "In every group one copy stays unticked. Tick the others, or untick the ones you want to keep.",
          },
          {
            name: "Move to the Trash",
            text: "Press Move to Trash and confirm. Empty the Trash afterwards to get the space back.",
          },
        ],
      },
      sections: [
        {
          title: "Where Duplicate Files Come From",
          content: [
            "Most duplicates are accidents: the same installer downloaded twice, an attachment saved from mail and again from a chat, a project folder copied before a risky change, a backup copied into another backup. Cloud folders add more when a sync conflict creates a second file with a different name.",
            "They are rarely small. A few duplicated videos or disk images can take more space than thousands of tiny files, which is why looking for duplicates larger than a megabyte is the efficient way to start.",
          ],
        },
        {
          title: "What Finder, Photos and Music Can Do",
          content: [
            "Finder can sort a folder by name, kind or size, and a Smart Folder can list files over a given size, but nothing compares contents. Two files with different names look unrelated. The Photos app has a Duplicates album for photos it considers identical, and the Music app can show duplicate songs from the File > Library menu. Neither looks at the rest of your Mac.",
            "Terminal tools such as fdupes, installed with Homebrew, compare contents and work well if you are comfortable with the command line. If you prefer a window with a preview of what will be removed, use a duplicate finder with a review step.",
          ],
        },
        {
          title: "How DiskMop Decides Two Files Are the Same",
          content: [
            "DiskMop groups files that have exactly the same size, then compares the first 64 KB, and only for files that still match computes a full SHA-256 fingerprint. Identical fingerprints mean identical content, whatever the names or dates say. This keeps the scan fast and avoids reading every large file in full.",
            "It ignores files under 1 MB and treats two names for the same data (hard links) as one file. It also refuses to touch system folders and the inside of app packages, so a duplicate inside an application is never offered for removal.",
          ],
        },
        {
          title: "Removing Copies Safely",
          content: [
            "In every group DiskMop leaves one copy unticked and ticks the rest, but the choice is yours: open the paths and keep the copy that sits where you expect it, such as the file in Documents rather than the one in Downloads. Removed files go to the Trash, not straight into oblivion, so a wrong tick is recoverable until you empty it.",
            "Scanning is free. Cleaning many items at once is part of DiskMop Pro, a one-time purchase; the free version lets you try a few single removals first. For other space hogs, see [how to find large files on Mac](/blog/find-large-files-mac) and [what fills a Mac startup disk](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Does macOS have a built-in duplicate file finder?",
          answer:
            "Not for general files. The Photos app has a Duplicates album and the Music app can show duplicate items, but Finder has no tool that compares file contents.",
        },
        {
          question: "Is it safe to delete duplicate files?",
          answer:
            "Yes if you keep one copy. DiskMop only groups files with identical content, leaves one copy unticked in each group and moves removed files to the Trash, so you can restore a file before emptying it.",
        },
        {
          question:
            "Will DiskMop find files with different names but the same content?",
          answer:
            "Yes. It compares content, not names or dates: same size, same first 64 KB and the same full SHA-256 fingerprint.",
        },
        {
          question: "Why are small files not listed?",
          answer:
            "Files under 1 MB are skipped because they free little space and would flood the list. Duplicate videos, disk images and archives are where the space is.",
        },
      ],
      verdict: [
        "Finder cannot find duplicates for you, so the reliable way is a tool that compares what is inside the files. Duplicates are usually accidents, and a handful of large ones can free gigabytes.",
        "DiskMop for Mac compares content with a full SHA-256 check, keeps one copy in every group and moves the rest to the Trash. Scanning is free, so you can see how much space duplicates take before you decide anything.",
      ],
      ctaText: "Find duplicate files on your Mac with DiskMop",
    },
    tr: {
      title: "Mac'te Kopya Dosyalar Nasıl Bulunur ve Silinir",
      metaDescription:
        "Finder'da kopya dosya bulucu yok. Mac'te aynı dosyaları içeriğe göre bulmayı, nelerin güvenle silinebileceğini ve DiskMop'un kopyaları Çöp Kutusu'na nasıl gönderdiğini öğrenin.",
      subtitle:
        "Aynı dosya, çok kopya: birebir kopyaları içeriğe göre bulun, birini tutun",
      intro: [
        "Kısa cevap: macOS'ta Finder'da kopya dosyaları listeleyen yerleşik bir araç yok. Bir klasörü ada veya boyuta göre sıralayarak bazılarını fark edebilirsiniz, Fotoğraflar ve Müzik uygulamaları da kendi kopyalarını işaretler; ama belgeler, indirilenler, arşivler ve videolar için dosyaların içini karşılaştıran bir araç gerekir. Mac için DiskMop bunu Büyük ve kopya dosyalar > Kopyalar sekmesinde yapar.",
        "Bu rehber kopyaların nereden geldiğini, Apple'ın araçlarıyla neler yapabileceğinizi, DiskMop'un iki dosyanın aynı olduğuna nasıl karar verdiğini ve fazla kopyaları aslını kaybetmeden nasıl kaldıracağınızı anlatır.",
      ],
      keyTakeaways: [
        "Finder kopyaları sizin için gösteremez; Fotoğraflar (Kopyalar albümü) ve Müzik (Kopya Öğeleri Göster) yalnızca kendi kitaplıklarını kapsar.",
        "DiskMop iki dosyayı yalnızca içerikleri aynıysa kopya sayar: aynı boyut, aynı ilk 64 KB ve ardından aynı tam SHA-256 parmak izi. Ad ve tarih dikkate alınmaz.",
        "1 MB altındaki dosyalar atlanır; aynı veriye işaret eden iki ad (sabit bağlantı) kopya sayılmaz, çünkü birini silmek yer açmaz.",
        "Kaldırılan kopyalar Çöp Kutusu'na gider; boşaltmadan önce geri alabilirsiniz.",
      ],
      dataTable: {
        caption: "Mac'te kopya dosya bulma yolları",
        columns: ["Yöntem", "Neyi karşılaştırır", "Kapsam", "Ne işe yarar"],
        rows: [
          [
            "Finder: ada veya boyuta göre sırala",
            "Yalnızca ad ve boyut",
            "Tek klasör",
            "rapor (1).pdf gibi bariz kopyalar",
          ],
          [
            "Fotoğraflar ve Müzik kopya araçları",
            "Kendi kitaplıkları",
            "Yalnızca fotoğraf veya şarkı",
            "O uygulamalardaki kopyalar",
          ],
          [
            "fdupes gibi Terminal araçları",
            "Dosya içeriği",
            "Gösterdiğiniz klasör",
            "Komut satırına aşina olanlar",
          ],
          [
            "DiskMop Kopyalar sekmesi",
            "Boyut, ilk 64 KB, sonra tam SHA-256",
            "Dosyalarınız veya seçtiğiniz disk",
            "Belgeler, indirilenler, arşivler, videolar",
          ],
        ],
      },
      howTo: {
        name: "DiskMop ile Mac'te kopya dosyaları bulup kaldırın",
        totalTime: "PT10M",
        steps: [
          {
            name: "Büyük ve kopya dosyalar'ı açın",
            text: "DiskMop'u başlatın, kenar çubuğunda Büyük ve kopya dosyalar'ı seçin ve Kopyalar sekmesini açın.",
          },
          {
            name: "Nerede arayacağınızı seçin",
            text: "Dosyalarım (ana klasörünüz), tüm bir disk veya yalnızca tek bir yeri aramak için Klasör seç'i kullanın.",
          },
          {
            name: "Tarayın ve grupları inceleyin",
            text: "Tara'ya basın. Her grup, içeriği aynı olan dosyaları ve fazla kopyaların kapladığı alanı listeler. Birkaçını açıp yollara bakın.",
          },
          {
            name: "Kaldırılacak kopyaları işaretleyin",
            text: "Her grupta bir kopya işaretsiz kalır. Diğerlerini işaretleyin ya da tutmak istediklerinizin işaretini kaldırın.",
          },
          {
            name: "Çöp Kutusu'na taşıyın",
            text: "Çöp Kutusu'na taşı'ya basıp onaylayın. Yeri geri almak için sonra Çöp Kutusu'nu boşaltın.",
          },
        ],
      },
      sections: [
        {
          title: "Kopya Dosyalar Nereden Gelir",
          content: [
            "Kopyaların çoğu kazadır: iki kez indirilen aynı yükleyici, e-postadan ve sohbetten ayrı ayrı kaydedilen ek, riskli bir değişiklikten önce kopyalanan proje klasörü, başka bir yedeğin içine kopyalanan yedek. Bulut klasörleri, eşitleme çakışması farklı adla ikinci bir dosya oluşturduğunda daha da artırır.",
            "Nadiren küçüktürler. Birkaç kopya video veya disk imajı, binlerce küçük dosyadan fazla yer tutabilir; bu yüzden bir megabaytın üzerindeki kopyalarla başlamak en verimli yoldur.",
          ],
        },
        {
          title: "Finder, Fotoğraflar ve Müzik Neler Yapabilir",
          content: [
            "Finder bir klasörü ada, türe veya boyuta göre sıralayabilir, Akıllı Klasör belirli bir boyutun üstündeki dosyaları listeleyebilir; ama hiçbiri içerikleri karşılaştırmaz. Farklı adlı iki dosya ilişkisiz görünür. Fotoğraflar uygulamasında aynı sayılan fotoğraflar için Kopyalar albümü, Müzik uygulamasında Dosya > Kitaplık menüsünde kopya şarkılar var. İkisi de Mac'inizin geri kalanına bakmaz.",
            "Homebrew ile kurulan fdupes gibi Terminal araçları içerikleri karşılaştırır ve komut satırında rahatsanız iyi çalışır. Neyin kaldırılacağını gösteren bir pencere tercih ederseniz, inceleme adımı olan bir kopya bulucu kullanın.",
          ],
        },
        {
          title: "DiskMop İki Dosyanın Aynı Olduğuna Nasıl Karar Verir",
          content: [
            "DiskMop önce tam aynı boyutta olan dosyaları gruplar, sonra ilk 64 KB'ı karşılaştırır ve hâlâ eşleşenler için tam SHA-256 parmak izini hesaplar. Parmak izleri aynıysa, ad ve tarih ne derse desin içerik aynıdır. Bu, taramayı hızlı tutar ve her büyük dosyayı baştan sona okumayı önler.",
            "1 MB altındaki dosyaları yok sayar, aynı verinin iki adını (sabit bağlantı) tek dosya sayar. Sistem klasörlerine ve uygulama paketlerinin içine de dokunmaz; bir uygulamanın içindeki kopya asla kaldırma önerisi olarak çıkmaz.",
          ],
        },
        {
          title: "Kopyaları Güvenle Kaldırmak",
          content: [
            "DiskMop her grupta bir kopyayı işaretsiz bırakır, gerisini işaretler; ama karar sizin: yolları açın ve beklediğiniz yerdeki kopyayı tutun, örneğin İndirilenler yerine Belgeler'deki dosyayı. Kaldırılan dosyalar doğrudan yok olmaz, Çöp Kutusu'na gider; yanlış bir işaret, siz boşaltana kadar geri alınabilir.",
            "Tarama ücretsizdir. Çok sayıda öğeyi aynı anda temizlemek tek seferlik satın alınan DiskMop Pro'nun parçasıdır; ücretsiz sürümde önce birkaç tekil kaldırmayı deneyebilirsiniz. Diğer yer kaplayanlar için [Mac'te büyük dosyalar nasıl bulunur](/blog/find-large-files-mac) ve [Mac başlangıç diskini ne doldurur](/blog/mac-startup-disk-almost-full) yazılarına bakın.",
          ],
        },
      ],
      faq: [
        {
          question: "macOS'ta yerleşik bir kopya dosya bulucu var mı?",
          answer:
            "Genel dosyalar için yok. Fotoğraflar uygulamasında Kopyalar albümü, Müzik uygulamasında kopya öğeleri gösterme var; ama Finder'da dosya içeriklerini karşılaştıran bir araç yok.",
        },
        {
          question: "Kopya dosyaları silmek güvenli mi?",
          answer:
            "Bir kopyayı tutarsanız evet. DiskMop yalnızca içeriği aynı olan dosyaları gruplar, her grupta bir kopyayı işaretsiz bırakır ve kaldırılanları Çöp Kutusu'na taşır; boşaltmadan önce geri yükleyebilirsiniz.",
        },
        {
          question: "DiskMop adı farklı ama içeriği aynı dosyaları bulur mu?",
          answer:
            "Evet. Ada veya tarihe değil içeriğe bakar: aynı boyut, aynı ilk 64 KB ve aynı tam SHA-256 parmak izi.",
        },
        {
          question: "Küçük dosyalar neden listelenmiyor?",
          answer:
            "1 MB altındaki dosyalar az yer açtığı ve listeyi doldurduğu için atlanır. Alan asıl kopya videolarda, disk imajlarında ve arşivlerde.",
        },
      ],
      verdict: [
        "Finder sizin için kopya bulamaz; güvenilir yol, dosyaların içini karşılaştıran bir araçtır. Kopyalar çoğunlukla kazadır ve birkaç büyük kopya gigabaytlarca yer açabilir.",
        "Mac için DiskMop içeriği tam SHA-256 kontrolüyle karşılaştırır, her grupta bir kopyayı tutar ve gerisini Çöp Kutusu'na taşır. Tarama ücretsiz; bir şeye karar vermeden önce kopyaların ne kadar yer kapladığını görebilirsiniz.",
      ],
      ctaText: "DiskMop ile Mac'inizdeki kopya dosyaları bulun",
    },
    de: {
      title: "Doppelte Dateien auf dem Mac finden und löschen",
      metaDescription:
        "Der Finder hat keine Duplikatsuche. So finden Sie identische Dateien auf dem Mac anhand ihres Inhalts, was sich sicher entfernen lässt und wie DiskMop Kopien in den Papierkorb legt.",
      subtitle:
        "Dieselbe Datei, viele Kopien: Duplikate nach Inhalt finden und eine behalten",
      intro: [
        "Kurz gesagt: macOS hat im Finder kein eingebautes Werkzeug, das doppelte Dateien auflistet. Sie können einen Ordner nach Name oder Größe sortieren, und die Apps Fotos und Musik markieren ihre eigenen Duplikate. Für Dokumente, Downloads, Archive und Videos brauchen Sie aber etwas, das den Inhalt der Dateien vergleicht. DiskMop für Mac tut das unter Große & doppelte Dateien > Duplikate.",
        "Diese Anleitung erklärt, woher Duplikate kommen, was die Werkzeuge von Apple leisten, wie DiskMop entscheidet, dass zwei Dateien identisch sind, und wie Sie überzählige Kopien entfernen, ohne das Original zu verlieren.",
      ],
      keyTakeaways: [
        "Der Finder kann Duplikate nicht anzeigen; die Fotos-App (Album Duplikate) und die Musik-App (Doppelte Objekte anzeigen) decken nur ihre eigenen Mediatheken ab.",
        "DiskMop hält zwei Dateien nur für Duplikate, wenn der Inhalt identisch ist: gleiche Größe, gleiche ersten 64 KB, dann derselbe vollständige SHA-256-Fingerabdruck. Namen und Datum zählen nicht.",
        "Dateien unter 1 MB werden übersprungen, und zwei Namen für dieselben Daten (Hardlinks) zählen nicht als Duplikat, weil das Löschen einer davon nichts freigibt.",
        "Entfernte Kopien landen im Papierkorb, sodass Sie sie vor dem Leeren wiederherstellen können.",
      ],
      dataTable: {
        caption: "Wege, doppelte Dateien auf dem Mac zu finden",
        columns: ["Methode", "Vergleicht", "Umfang", "Geeignet für"],
        rows: [
          [
            "Finder: nach Name oder Größe sortieren",
            "Nur Namen und Größen",
            "Ein Ordner",
            "Offensichtliche Kopien wie Bericht (1).pdf",
          ],
          [
            "Duplikat-Werkzeuge von Fotos und Musik",
            "Eigene Mediatheken",
            "Nur Fotos oder Titel",
            "Duplikate in diesen Apps",
          ],
          [
            "Terminal-Tools wie fdupes",
            "Dateiinhalt",
            "Jeder angegebene Ordner",
            "Wer die Kommandozeile mag",
          ],
          [
            "DiskMop-Reiter Duplikate",
            "Größe, erste 64 KB, dann vollständiges SHA-256",
            "Ihre Dateien oder ein gewähltes Laufwerk",
            "Dokumente, Downloads, Archive, Videos",
          ],
        ],
      },
      howTo: {
        name: "Doppelte Dateien auf dem Mac mit DiskMop finden und entfernen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Große & doppelte Dateien öffnen",
            text: "Starten Sie DiskMop, wählen Sie in der Seitenleiste Große & doppelte Dateien und öffnen Sie den Reiter Duplikate.",
          },
          {
            name: "Suchort wählen",
            text: "Wählen Sie Meine Dateien für Ihren Home-Ordner, ein ganzes Laufwerk oder Ordner wählen, um nur einen Ort zu durchsuchen.",
          },
          {
            name: "Scannen und Gruppen prüfen",
            text: "Klicken Sie auf Scannen. Jede Gruppe listet Dateien mit identischem Inhalt und den Platz, den die überzähligen Kopien belegen. Öffnen Sie einige und prüfen Sie die Pfade.",
          },
          {
            name: "Zu entfernende Kopien markieren",
            text: "In jeder Gruppe bleibt eine Kopie unmarkiert. Markieren Sie die übrigen oder heben Sie die Markierung bei denen auf, die Sie behalten wollen.",
          },
          {
            name: "In den Papierkorb legen",
            text: "Klicken Sie auf In den Papierkorb legen und bestätigen Sie. Leeren Sie danach den Papierkorb, um den Platz zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Woher doppelte Dateien kommen",
          content: [
            "Die meisten Duplikate sind Versehen: derselbe Installer zweimal geladen, ein Anhang aus der Mail und noch einmal aus einem Chat gesichert, ein Projektordner vor einer riskanten Änderung kopiert, ein Backup in ein anderes Backup kopiert. Cloud-Ordner erzeugen weitere, wenn ein Synchronisierungskonflikt eine zweite Datei mit anderem Namen anlegt.",
            "Klein sind sie selten. Ein paar doppelte Videos oder Disk-Images können mehr Platz belegen als Tausende kleiner Dateien; deshalb ist die Suche nach Duplikaten über einem Megabyte der effiziente Einstieg.",
          ],
        },
        {
          title: "Was Finder, Fotos und Musik leisten",
          content: [
            "Der Finder kann einen Ordner nach Name, Art oder Größe sortieren, und ein Intelligenter Ordner kann Dateien ab einer Größe auflisten, aber nichts vergleicht Inhalte. Zwei Dateien mit verschiedenen Namen wirken unverwandt. Die Fotos-App hat ein Album Duplikate für Fotos, die sie als identisch ansieht, und die Musik-App zeigt doppelte Titel über Ablage > Mediathek. Beide betrachten den Rest Ihres Mac nicht.",
            "Terminal-Werkzeuge wie fdupes, per Homebrew installiert, vergleichen Inhalte und funktionieren gut, wenn Sie die Kommandozeile mögen. Bevorzugen Sie ein Fenster mit Vorschau auf das, was entfernt wird, nehmen Sie eine Duplikatsuche mit Prüfschritt.",
          ],
        },
        {
          title: "Wie DiskMop entscheidet, dass zwei Dateien gleich sind",
          content: [
            "DiskMop gruppiert Dateien mit exakt gleicher Größe, vergleicht dann die ersten 64 KB und berechnet nur für die weiterhin passenden den vollständigen SHA-256-Fingerabdruck. Gleiche Fingerabdrücke bedeuten gleichen Inhalt, egal was Namen oder Datum sagen. So bleibt der Scan schnell, und nicht jede große Datei wird komplett gelesen.",
            "Dateien unter 1 MB werden ignoriert, zwei Namen für dieselben Daten (Hardlinks) gelten als eine Datei. Systemordner und das Innere von App-Paketen fasst DiskMop nicht an; ein Duplikat innerhalb einer Anwendung wird nie zum Entfernen angeboten.",
          ],
        },
        {
          title: "Kopien sicher entfernen",
          content: [
            "In jeder Gruppe lässt DiskMop eine Kopie unmarkiert und markiert den Rest, die Entscheidung bleibt aber bei Ihnen: Öffnen Sie die Pfade und behalten Sie die Kopie am erwarteten Ort, etwa die Datei in Dokumente statt der in Downloads. Entfernte Dateien gehen in den Papierkorb, nicht ins Nichts; ein falscher Haken lässt sich bis zum Leeren rückgängig machen.",
            "Das Scannen ist kostenlos. Viele Objekte auf einmal zu bereinigen gehört zu DiskMop Pro, einem einmaligen Kauf; in der kostenlosen Version können Sie zuerst ein paar einzelne Entfernungen ausprobieren. Weitere Platzfresser: [Große Dateien auf dem Mac finden](/blog/find-large-files-mac) und [Was das Startvolume des Mac füllt](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question: "Hat macOS eine eingebaute Duplikatsuche für Dateien?",
          answer:
            "Nicht für allgemeine Dateien. Die Fotos-App hat ein Album Duplikate und die Musik-App kann doppelte Objekte anzeigen, aber der Finder besitzt kein Werkzeug, das Dateiinhalte vergleicht.",
        },
        {
          question: "Ist es sicher, doppelte Dateien zu löschen?",
          answer:
            "Ja, wenn Sie eine Kopie behalten. DiskMop gruppiert nur Dateien mit identischem Inhalt, lässt in jeder Gruppe eine Kopie unmarkiert und legt Entferntes in den Papierkorb, sodass Sie es vor dem Leeren wiederherstellen können.",
        },
        {
          question:
            "Findet DiskMop Dateien mit anderem Namen, aber gleichem Inhalt?",
          answer:
            "Ja. Es vergleicht Inhalt, nicht Namen oder Datum: gleiche Größe, gleiche ersten 64 KB und derselbe vollständige SHA-256-Fingerabdruck.",
        },
        {
          question: "Warum werden kleine Dateien nicht aufgelistet?",
          answer:
            "Dateien unter 1 MB werden übersprungen, weil sie wenig Platz bringen und die Liste überfluten würden. Der Platz steckt in doppelten Videos, Disk-Images und Archiven.",
        },
      ],
      verdict: [
        "Der Finder findet Duplikate nicht für Sie; zuverlässig ist ein Werkzeug, das den Inhalt der Dateien vergleicht. Duplikate sind meist Versehen, und ein paar große können Gigabytes freigeben.",
        "DiskMop für Mac vergleicht den Inhalt mit einer vollständigen SHA-256-Prüfung, behält in jeder Gruppe eine Kopie und legt den Rest in den Papierkorb. Der Scan ist kostenlos, sodass Sie sehen, wie viel Platz Duplikate belegen, bevor Sie etwas entscheiden.",
      ],
      ctaText: "Doppelte Dateien auf Ihrem Mac mit DiskMop finden",
    },
    fr: {
      title: "Comment trouver et supprimer les fichiers en double sur Mac",
      metaDescription:
        "Le Finder n'a pas de détecteur de doublons. Trouvez les fichiers identiques sur Mac selon leur contenu, ce qu'il est sûr de supprimer et comment DiskMop envoie les copies à la Corbeille.",
      subtitle:
        "Le même fichier en plusieurs exemplaires : repérez les doublons exacts et gardez-en un",
      intro: [
        "En bref : macOS n'offre aucun outil intégré qui liste les fichiers en double dans le Finder. Vous pouvez trier un dossier par nom ou par taille, et les apps Photos et Musique signalent leurs propres doublons, mais pour les documents, téléchargements, archives et vidéos il faut un outil qui compare le contenu des fichiers. DiskMop pour Mac le fait dans Gros fichiers et doublons > Doublons.",
        "Ce guide explique d'où viennent les doublons, ce que permettent les outils d'Apple, comment DiskMop décide que deux fichiers sont identiques et comment retirer les copies en trop sans perdre l'original.",
      ],
      keyTakeaways: [
        "Le Finder ne peut pas afficher les doublons ; l'app Photos (album Doublons) et l'app Musique (Afficher les éléments en double) ne couvrent que leur propre photothèque ou bibliothèque.",
        "DiskMop ne considère deux fichiers comme doublons que si leur contenu est identique : même taille, mêmes 64 premiers Ko, puis la même empreinte SHA-256 complète. Noms et dates sont ignorés.",
        "Les fichiers de moins de 1 Mo sont ignorés, et deux noms qui pointent vers les mêmes données (liens physiques) ne comptent pas comme doublons, car en supprimer un ne libérerait rien.",
        "Les copies retirées vont à la Corbeille : vous pouvez les restaurer avant de la vider.",
      ],
      dataTable: {
        caption: "Façons de trouver des fichiers en double sur Mac",
        columns: ["Méthode", "Compare", "Portée", "Pratique pour"],
        rows: [
          [
            "Finder : trier par nom ou taille",
            "Noms et tailles seulement",
            "Un dossier à la fois",
            "Repérer les copies évidentes comme rapport (1).pdf",
          ],
          [
            "Outils de Photos et Musique",
            "Leurs propres bibliothèques",
            "Photos ou morceaux seulement",
            "Les doublons dans ces apps",
          ],
          [
            "Outils Terminal comme fdupes",
            "Contenu des fichiers",
            "Tout dossier indiqué",
            "Les habitués de la ligne de commande",
          ],
          [
            "Onglet Doublons de DiskMop",
            "Taille, 64 premiers Ko, puis SHA-256 complet",
            "Vos fichiers ou un disque au choix",
            "Documents, téléchargements, archives, vidéos",
          ],
        ],
      },
      howTo: {
        name: "Trouver et supprimer les doublons sur Mac avec DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir Gros fichiers et doublons",
            text: "Lancez DiskMop, choisissez Gros fichiers et doublons dans la barre latérale, puis ouvrez l'onglet Doublons.",
          },
          {
            name: "Choisir où chercher",
            text: "Choisissez Mes fichiers pour votre dossier personnel, un disque entier, ou Choisir un dossier pour chercher à un seul endroit.",
          },
          {
            name: "Analyser et examiner les groupes",
            text: "Cliquez sur Analyser. Chaque groupe liste les fichiers au contenu identique et l'espace pris par les copies en trop. Ouvrez-en quelques-uns et vérifiez les chemins.",
          },
          {
            name: "Cocher les copies à retirer",
            text: "Dans chaque groupe, une copie reste décochée. Cochez les autres, ou décochez celles que vous voulez garder.",
          },
          {
            name: "Mettre à la Corbeille",
            text: "Cliquez sur Mettre à la Corbeille et confirmez. Videz ensuite la Corbeille pour récupérer l'espace.",
          },
        ],
      },
      sections: [
        {
          title: "D'où viennent les fichiers en double",
          content: [
            "La plupart des doublons sont des accidents : le même installateur téléchargé deux fois, une pièce jointe enregistrée depuis le courrier puis depuis une discussion, un dossier de projet copié avant une modification risquée, une sauvegarde copiée dans une autre. Les dossiers cloud en ajoutent quand un conflit de synchronisation crée un second fichier sous un autre nom.",
            "Ils sont rarement petits. Quelques vidéos ou images disque en double peuvent occuper plus de place que des milliers de petits fichiers ; chercher les doublons de plus d'un mégaoctet est donc la façon efficace de commencer.",
          ],
        },
        {
          title: "Ce que peuvent faire le Finder, Photos et Musique",
          content: [
            "Le Finder peut trier un dossier par nom, type ou taille, et un Dossier dynamique peut lister les fichiers au-delà d'une taille donnée, mais rien ne compare le contenu. Deux fichiers aux noms différents semblent sans rapport. L'app Photos a un album Doublons pour les photos qu'elle juge identiques, et l'app Musique affiche les morceaux en double via Fichier > Bibliothèque. Aucune ne regarde le reste de votre Mac.",
            "Les outils Terminal comme fdupes, installés avec Homebrew, comparent le contenu et conviennent si vous aimez la ligne de commande. Si vous préférez une fenêtre qui montre ce qui sera retiré, utilisez un détecteur de doublons avec étape de vérification.",
          ],
        },
        {
          title: "Comment DiskMop décide que deux fichiers sont identiques",
          content: [
            "DiskMop regroupe les fichiers de taille exactement identique, compare leurs 64 premiers Ko, puis ne calcule l'empreinte SHA-256 complète que pour ceux qui correspondent encore. Des empreintes identiques signifient un contenu identique, quels que soient les noms ou les dates. L'analyse reste rapide et ne lit pas chaque gros fichier en entier.",
            "Il ignore les fichiers de moins de 1 Mo et traite deux noms des mêmes données (liens physiques) comme un seul fichier. Il refuse aussi de toucher aux dossiers système et à l'intérieur des paquets d'apps : un doublon à l'intérieur d'une application n'est jamais proposé à la suppression.",
          ],
        },
        {
          title: "Retirer les copies en toute sécurité",
          content: [
            "Dans chaque groupe, DiskMop laisse une copie décochée et coche les autres, mais le choix vous appartient : ouvrez les chemins et gardez la copie située là où vous l'attendez, par exemple celle de Documents plutôt que celle de Téléchargements. Les fichiers retirés vont à la Corbeille, pas dans le néant ; une case cochée par erreur se rattrape jusqu'au moment où vous la videz.",
            "L'analyse est gratuite. Nettoyer beaucoup d'éléments à la fois fait partie de DiskMop Pro, un achat unique ; la version gratuite permet d'essayer quelques suppressions une par une. Pour d'autres gros consommateurs d'espace, voir [comment trouver les gros fichiers sur Mac](/blog/find-large-files-mac) et [ce qui remplit le disque de démarrage du Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question: "macOS intègre-t-il un détecteur de fichiers en double ?",
          answer:
            "Pas pour les fichiers en général. L'app Photos a un album Doublons et l'app Musique peut afficher les éléments en double, mais le Finder n'a aucun outil qui compare le contenu des fichiers.",
        },
        {
          question: "Est-il sûr de supprimer des fichiers en double ?",
          answer:
            "Oui, si vous en gardez une copie. DiskMop ne regroupe que des fichiers au contenu identique, laisse une copie décochée dans chaque groupe et place les fichiers retirés dans la Corbeille ; vous pouvez les restaurer avant de la vider.",
        },
        {
          question:
            "DiskMop trouve-t-il des fichiers de noms différents mais de même contenu ?",
          answer:
            "Oui. Il compare le contenu, pas les noms ni les dates : même taille, mêmes 64 premiers Ko et même empreinte SHA-256 complète.",
        },
        {
          question: "Pourquoi les petits fichiers ne sont-ils pas listés ?",
          answer:
            "Les fichiers de moins de 1 Mo sont ignorés car ils libèrent peu d'espace et noieraient la liste. L'espace se trouve dans les vidéos, images disque et archives en double.",
        },
      ],
      verdict: [
        "Le Finder ne trouvera pas les doublons à votre place ; la méthode fiable est un outil qui compare l'intérieur des fichiers. Les doublons sont le plus souvent des accidents, et quelques gros peuvent libérer des gigaoctets.",
        "DiskMop pour Mac compare le contenu par un contrôle SHA-256 complet, garde une copie dans chaque groupe et envoie le reste à la Corbeille. L'analyse est gratuite : vous voyez l'espace pris par les doublons avant de décider quoi que ce soit.",
      ],
      ctaText: "Trouvez les fichiers en double de votre Mac avec DiskMop",
    },
    es: {
      title: "Cómo encontrar y eliminar archivos duplicados en el Mac",
      metaDescription:
        "El Finder no tiene buscador de duplicados. Descubre cómo encontrar archivos idénticos en el Mac por su contenido, qué es seguro borrar y cómo DiskMop envía las copias a la Papelera.",
      subtitle:
        "El mismo archivo, muchas copias: encuentra duplicados exactos por contenido y conserva uno",
      intro: [
        "En resumen: macOS no incluye ninguna herramienta en el Finder que liste archivos duplicados. Puedes ordenar una carpeta por nombre o tamaño, y las apps Fotos y Música marcan sus propios duplicados, pero para documentos, descargas, archivos comprimidos y vídeos necesitas algo que compare el contenido de los archivos. DiskMop para Mac lo hace en Grandes y duplicados > Duplicados.",
        "Esta guía explica de dónde vienen los duplicados, qué puedes hacer con las herramientas de Apple, cómo decide DiskMop que dos archivos son idénticos y cómo quitar las copias sobrantes sin perder el original.",
      ],
      keyTakeaways: [
        "El Finder no puede mostrarte los duplicados; la app Fotos (álbum Duplicados) y la app Música (Mostrar elementos duplicados) solo cubren su propia fototeca o biblioteca.",
        "DiskMop considera duplicados dos archivos solo si su contenido es idéntico: mismo tamaño, mismos primeros 64 KB y la misma huella SHA-256 completa. Los nombres y las fechas se ignoran.",
        "Los archivos de menos de 1 MB se omiten, y dos nombres que apuntan a los mismos datos (enlaces físicos) no cuentan como duplicados, porque borrar uno no liberaría nada.",
        "Las copias eliminadas van a la Papelera, así que puedes restaurarlas antes de vaciarla.",
      ],
      dataTable: {
        caption: "Formas de encontrar archivos duplicados en el Mac",
        columns: ["Método", "Compara", "Alcance", "Útil para"],
        rows: [
          [
            "Finder: ordenar por nombre o tamaño",
            "Solo nombres y tamaños",
            "Una carpeta cada vez",
            "Detectar copias evidentes como informe (1).pdf",
          ],
          [
            "Herramientas de Fotos y Música",
            "Sus propias bibliotecas",
            "Solo fotos o canciones",
            "Duplicados dentro de esas apps",
          ],
          [
            "Herramientas de Terminal como fdupes",
            "Contenido de los archivos",
            "Cualquier carpeta indicada",
            "Quien se maneja con la línea de comandos",
          ],
          [
            "Pestaña Duplicados de DiskMop",
            "Tamaño, primeros 64 KB y SHA-256 completo",
            "Tus archivos o un disco a elegir",
            "Documentos, descargas, archivos y vídeos",
          ],
        ],
      },
      howTo: {
        name: "Encontrar y eliminar archivos duplicados en el Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abre Grandes y duplicados",
            text: "Inicia DiskMop, elige Grandes y duplicados en la barra lateral y abre la pestaña Duplicados.",
          },
          {
            name: "Elige dónde buscar",
            text: "Elige Mis archivos para tu carpeta personal, un disco completo o Elegir carpeta para buscar en un solo lugar.",
          },
          {
            name: "Analiza y revisa los grupos",
            text: "Pulsa Analizar. Cada grupo lista archivos con contenido idéntico y el espacio que ocupan las copias sobrantes. Abre unos cuantos y revisa las rutas.",
          },
          {
            name: "Marca las copias que quieres quitar",
            text: "En cada grupo una copia queda sin marcar. Marca las demás o desmarca las que quieras conservar.",
          },
          {
            name: "Mueve a la Papelera",
            text: "Pulsa Mover a la Papelera y confirma. Después vacía la Papelera para recuperar el espacio.",
          },
        ],
      },
      sections: [
        {
          title: "De dónde salen los archivos duplicados",
          content: [
            "La mayoría de los duplicados son accidentes: el mismo instalador descargado dos veces, un adjunto guardado desde el correo y otra vez desde un chat, una carpeta de proyecto copiada antes de un cambio arriesgado, una copia de seguridad copiada dentro de otra. Las carpetas en la nube suman más cuando un conflicto de sincronización crea un segundo archivo con otro nombre.",
            "Rara vez son pequeños. Unos pocos vídeos o imágenes de disco duplicados pueden ocupar más que miles de archivos diminutos; por eso buscar duplicados de más de un megabyte es la forma eficaz de empezar.",
          ],
        },
        {
          title: "Qué pueden hacer el Finder, Fotos y Música",
          content: [
            "El Finder puede ordenar una carpeta por nombre, tipo o tamaño, y una Carpeta inteligente puede listar archivos por encima de cierto tamaño, pero nada compara contenidos. Dos archivos con nombres distintos parecen no tener relación. La app Fotos tiene un álbum Duplicados para fotos que considera idénticas, y la app Música muestra canciones duplicadas desde Archivo > Biblioteca. Ninguna mira el resto de tu Mac.",
            "Herramientas de Terminal como fdupes, instaladas con Homebrew, comparan contenidos y funcionan bien si te gusta la línea de comandos. Si prefieres una ventana que muestre lo que se quitará, usa un buscador de duplicados con paso de revisión.",
          ],
        },
        {
          title: "Cómo decide DiskMop que dos archivos son iguales",
          content: [
            "DiskMop agrupa archivos con exactamente el mismo tamaño, compara los primeros 64 KB y solo para los que siguen coincidiendo calcula la huella SHA-256 completa. Huellas idénticas significan contenido idéntico, digan lo que digan los nombres o las fechas. Así el análisis es rápido y no lee entero cada archivo grande.",
            "Ignora los archivos de menos de 1 MB y trata dos nombres de los mismos datos (enlaces físicos) como un solo archivo. Tampoco toca las carpetas del sistema ni el interior de los paquetes de apps, así que un duplicado dentro de una aplicación nunca se ofrece para eliminar.",
          ],
        },
        {
          title: "Quitar copias con seguridad",
          content: [
            "En cada grupo DiskMop deja una copia sin marcar y marca el resto, pero la decisión es tuya: abre las rutas y conserva la copia que esté donde la esperas, por ejemplo la de Documentos en lugar de la de Descargas. Los archivos eliminados van a la Papelera, no desaparecen sin más; una marca equivocada se puede deshacer hasta que la vacíes.",
            "El análisis es gratuito. Limpiar muchos elementos a la vez forma parte de DiskMop Pro, una compra única; la versión gratuita te deja probar unas pocas eliminaciones sueltas. Para otros acaparadores de espacio, consulta [cómo encontrar archivos grandes en el Mac](/blog/find-large-files-mac) y [qué llena el disco de arranque del Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿Tiene macOS un buscador de archivos duplicados integrado?",
          answer:
            "No para archivos en general. La app Fotos tiene un álbum Duplicados y la app Música puede mostrar elementos duplicados, pero el Finder no tiene ninguna herramienta que compare el contenido de los archivos.",
        },
        {
          question: "¿Es seguro eliminar archivos duplicados?",
          answer:
            "Sí, si conservas una copia. DiskMop solo agrupa archivos con contenido idéntico, deja una copia sin marcar en cada grupo y mueve lo eliminado a la Papelera, para que puedas restaurarlo antes de vaciarla.",
        },
        {
          question:
            "¿Encuentra DiskMop archivos con nombre distinto pero el mismo contenido?",
          answer:
            "Sí. Compara el contenido, no los nombres ni las fechas: mismo tamaño, mismos primeros 64 KB y la misma huella SHA-256 completa.",
        },
        {
          question: "¿Por qué no aparecen los archivos pequeños?",
          answer:
            "Los archivos de menos de 1 MB se omiten porque liberan poco espacio e inundarían la lista. El espacio está en vídeos, imágenes de disco y archivos comprimidos duplicados.",
        },
      ],
      verdict: [
        "El Finder no encuentra duplicados por ti; lo fiable es una herramienta que compare lo que hay dentro de los archivos. Los duplicados suelen ser accidentes, y unos pocos grandes pueden liberar gigabytes.",
        "DiskMop para Mac compara el contenido con una comprobación SHA-256 completa, conserva una copia en cada grupo y envía el resto a la Papelera. El análisis es gratuito, así que ves cuánto espacio ocupan los duplicados antes de decidir nada.",
      ],
      ctaText: "Encuentra archivos duplicados en tu Mac con DiskMop",
    },
    it: {
      title: "Come trovare ed eliminare i file duplicati su Mac",
      metaDescription:
        "Il Finder non ha un cercatore di duplicati. Scopri come trovare file identici su Mac in base al contenuto, cosa si può eliminare in sicurezza e come DiskMop sposta le copie nel Cestino.",
      subtitle:
        "Lo stesso file, tante copie: trova i duplicati esatti per contenuto e tienine uno",
      intro: [
        "In breve: macOS non ha uno strumento integrato nel Finder che elenchi i file duplicati. Puoi ordinare una cartella per nome o dimensione e le app Foto e Musica segnalano i propri duplicati, ma per documenti, download, archivi e video serve qualcosa che confronti il contenuto dei file. DiskMop per Mac lo fa in File grandi e duplicati > Duplicati.",
        "Questa guida spiega da dove nascono i duplicati, cosa puoi fare con gli strumenti di Apple, come DiskMop decide che due file sono identici e come rimuovere le copie in eccesso senza perdere l'originale.",
      ],
      keyTakeaways: [
        "Il Finder non può mostrarti i duplicati; l'app Foto (album Duplicati) e l'app Musica (Mostra elementi duplicati) coprono solo la propria libreria.",
        "DiskMop considera duplicati due file solo se il contenuto è identico: stessa dimensione, stessi primi 64 KB e poi la stessa impronta SHA-256 completa. Nomi e date sono ignorati.",
        "I file sotto 1 MB vengono saltati e due nomi che puntano agli stessi dati (hard link) non contano come duplicati, perché eliminarne uno non libererebbe nulla.",
        "Le copie rimosse vanno nel Cestino, quindi puoi ripristinarle prima di svuotarlo.",
      ],
      dataTable: {
        caption: "Modi per trovare file duplicati su Mac",
        columns: ["Metodo", "Confronta", "Ambito", "Utile per"],
        rows: [
          [
            "Finder: ordina per nome o dimensione",
            "Solo nomi e dimensioni",
            "Una cartella alla volta",
            "Individuare copie evidenti come rapporto (1).pdf",
          ],
          [
            "Strumenti di Foto e Musica",
            "Le proprie librerie",
            "Solo foto o brani",
            "Duplicati dentro quelle app",
          ],
          [
            "Strumenti Terminale come fdupes",
            "Contenuto dei file",
            "Qualsiasi cartella indicata",
            "Chi è a suo agio con la riga di comando",
          ],
          [
            "Scheda Duplicati di DiskMop",
            "Dimensione, primi 64 KB, poi SHA-256 completo",
            "I tuoi file o un disco a scelta",
            "Documenti, download, archivi, video",
          ],
        ],
      },
      howTo: {
        name: "Trovare e rimuovere i file duplicati su Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Apri File grandi e duplicati",
            text: "Avvia DiskMop, scegli File grandi e duplicati nella barra laterale e apri la scheda Duplicati.",
          },
          {
            name: "Scegli dove cercare",
            text: "Scegli I miei file per la cartella Home, un intero disco oppure Scegli cartella per cercare in un solo punto.",
          },
          {
            name: "Analizza ed esamina i gruppi",
            text: "Premi Analizza. Ogni gruppo elenca i file con contenuto identico e lo spazio occupato dalle copie in eccesso. Aprine alcuni e controlla i percorsi.",
          },
          {
            name: "Seleziona le copie da rimuovere",
            text: "In ogni gruppo una copia resta deselezionata. Seleziona le altre oppure deseleziona quelle che vuoi tenere.",
          },
          {
            name: "Sposta nel Cestino",
            text: "Premi Sposta nel Cestino e conferma. Poi svuota il Cestino per recuperare lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Da dove arrivano i file duplicati",
          content: [
            "La maggior parte dei duplicati sono incidenti: lo stesso installer scaricato due volte, un allegato salvato dalla posta e poi da una chat, una cartella di progetto copiata prima di una modifica rischiosa, un backup copiato dentro un altro. Le cartelle cloud ne aggiungono quando un conflitto di sincronizzazione crea un secondo file con un altro nome.",
            "Raramente sono piccoli. Pochi video o immagini disco duplicati possono occupare più di migliaia di file minuscoli; per questo cercare duplicati sopra il megabyte è il modo efficiente per iniziare.",
          ],
        },
        {
          title: "Cosa possono fare Finder, Foto e Musica",
          content: [
            "Il Finder può ordinare una cartella per nome, tipo o dimensione e una Cartella smart può elencare i file oltre una certa dimensione, ma nulla confronta i contenuti. Due file con nomi diversi sembrano non avere legami. L'app Foto ha un album Duplicati per le foto che ritiene identiche e l'app Musica mostra i brani duplicati da File > Libreria. Nessuna guarda il resto del Mac.",
            "Strumenti da Terminale come fdupes, installati con Homebrew, confrontano i contenuti e vanno bene se ti trovi bene con la riga di comando. Se preferisci una finestra che mostri cosa verrà rimosso, usa un cercatore di duplicati con fase di revisione.",
          ],
        },
        {
          title: "Come DiskMop decide che due file sono uguali",
          content: [
            "DiskMop raggruppa i file con dimensione esattamente uguale, confronta i primi 64 KB e solo per quelli che ancora coincidono calcola l'impronta SHA-256 completa. Impronte identiche significano contenuto identico, qualunque cosa dicano nomi o date. La scansione resta veloce e non legge per intero ogni file grande.",
            "Ignora i file sotto 1 MB e tratta due nomi degli stessi dati (hard link) come un solo file. Non tocca nemmeno le cartelle di sistema né l'interno dei pacchetti delle app, quindi un duplicato dentro un'applicazione non viene mai proposto per la rimozione.",
          ],
        },
        {
          title: "Rimuovere le copie in sicurezza",
          content: [
            "In ogni gruppo DiskMop lascia una copia deselezionata e seleziona il resto, ma la scelta è tua: apri i percorsi e tieni la copia che si trova dove te l'aspetti, per esempio quella in Documenti anziché in Download. I file rimossi vanno nel Cestino, non svaniscono nel nulla; una spunta sbagliata si può annullare finché non lo svuoti.",
            "La scansione è gratuita. Pulire molti elementi insieme fa parte di DiskMop Pro, un acquisto una tantum; la versione gratuita permette di provare alcune rimozioni singole. Per altri divoratori di spazio, vedi [come trovare i file grandi su Mac](/blog/find-large-files-mac) e [cosa riempie il disco di avvio del Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question: "macOS ha un cercatore di file duplicati integrato?",
          answer:
            "Non per i file in generale. L'app Foto ha un album Duplicati e l'app Musica può mostrare elementi duplicati, ma il Finder non ha alcuno strumento che confronti il contenuto dei file.",
        },
        {
          question: "È sicuro eliminare i file duplicati?",
          answer:
            "Sì, se tieni una copia. DiskMop raggruppa solo file con contenuto identico, lascia una copia deselezionata in ogni gruppo e sposta ciò che rimuovi nel Cestino, così puoi ripristinarlo prima di svuotarlo.",
        },
        {
          question: "DiskMop trova file con nome diverso ma stesso contenuto?",
          answer:
            "Sì. Confronta il contenuto, non nomi o date: stessa dimensione, stessi primi 64 KB e stessa impronta SHA-256 completa.",
        },
        {
          question: "Perché i file piccoli non sono elencati?",
          answer:
            "I file sotto 1 MB vengono saltati perché liberano poco spazio e inonderebbero l'elenco. Lo spazio sta in video, immagini disco e archivi duplicati.",
        },
      ],
      verdict: [
        "Il Finder non trova i duplicati per te; il modo affidabile è uno strumento che confronti l'interno dei file. I duplicati sono di solito incidenti e pochi file grandi possono liberare gigabyte.",
        "DiskMop per Mac confronta il contenuto con un controllo SHA-256 completo, tiene una copia in ogni gruppo e sposta il resto nel Cestino. La scansione è gratuita, così vedi quanto spazio occupano i duplicati prima di decidere.",
      ],
      ctaText: "Trova i file duplicati sul tuo Mac con DiskMop",
    },
    pt: {
      title: "Como encontrar e excluir arquivos duplicados no Mac",
      metaDescription:
        "O Finder não tem localizador de duplicados. Veja como encontrar arquivos idênticos no Mac pelo conteúdo, o que é seguro remover e como o DiskMop envia as cópias para o Lixo.",
      subtitle:
        "O mesmo arquivo, várias cópias: encontre duplicados exatos pelo conteúdo e mantenha um",
      intro: [
        "Resumindo: o macOS não tem uma ferramenta embutida no Finder que liste arquivos duplicados. Você pode ordenar uma pasta por nome ou tamanho, e os apps Fotos e Música marcam os próprios duplicados, mas para documentos, downloads, arquivos compactados e vídeos é preciso algo que compare o conteúdo dos arquivos. O DiskMop para Mac faz isso em Grandes e duplicados > Duplicados.",
        "Este guia explica de onde vêm os duplicados, o que dá para fazer com as ferramentas da Apple, como o DiskMop decide que dois arquivos são idênticos e como remover as cópias extras sem perder o original.",
      ],
      keyTakeaways: [
        "O Finder não consegue mostrar duplicados; o app Fotos (álbum Duplicados) e o app Música (Mostrar itens duplicados) cobrem apenas a própria biblioteca.",
        "O DiskMop só considera dois arquivos duplicados se o conteúdo for idêntico: mesmo tamanho, mesmos primeiros 64 KB e a mesma impressão SHA-256 completa. Nomes e datas são ignorados.",
        "Arquivos abaixo de 1 MB são ignorados, e dois nomes que apontam para os mesmos dados (links físicos) não contam como duplicados, pois apagar um não liberaria nada.",
        "As cópias removidas vão para o Lixo, então você pode restaurá-las antes de esvaziá-lo.",
      ],
      dataTable: {
        caption: "Formas de encontrar arquivos duplicados no Mac",
        columns: ["Método", "Compara", "Alcance", "Bom para"],
        rows: [
          [
            "Finder: ordenar por nome ou tamanho",
            "Só nomes e tamanhos",
            "Uma pasta por vez",
            "Notar cópias óbvias como relatório (1).pdf",
          ],
          [
            "Ferramentas de Fotos e Música",
            "As próprias bibliotecas",
            "Só fotos ou músicas",
            "Duplicados dentro desses apps",
          ],
          [
            "Ferramentas de Terminal como fdupes",
            "Conteúdo dos arquivos",
            "Qualquer pasta indicada",
            "Quem se dá bem com a linha de comando",
          ],
          [
            "Aba Duplicados do DiskMop",
            "Tamanho, primeiros 64 KB e SHA-256 completo",
            "Seus arquivos ou um disco à escolha",
            "Documentos, downloads, arquivos e vídeos",
          ],
        ],
      },
      howTo: {
        name: "Encontrar e remover arquivos duplicados no Mac com o DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abra Grandes e duplicados",
            text: "Inicie o DiskMop, escolha Grandes e duplicados na barra lateral e abra a aba Duplicados.",
          },
          {
            name: "Escolha onde procurar",
            text: "Escolha Meus arquivos para a sua pasta pessoal, um disco inteiro ou Escolher pasta para procurar em um único lugar.",
          },
          {
            name: "Verifique e revise os grupos",
            text: "Clique em Verificar. Cada grupo lista arquivos com conteúdo idêntico e o espaço ocupado pelas cópias extras. Abra alguns e confira os caminhos.",
          },
          {
            name: "Marque as cópias a remover",
            text: "Em cada grupo uma cópia fica desmarcada. Marque as outras ou desmarque as que quer manter.",
          },
          {
            name: "Mova para o Lixo",
            text: "Clique em Mover para a Lixeira e confirme. Depois esvazie o Lixo para recuperar o espaço.",
          },
        ],
      },
      sections: [
        {
          title: "De onde vêm os arquivos duplicados",
          content: [
            "A maioria dos duplicados é acidente: o mesmo instalador baixado duas vezes, um anexo salvo do e-mail e de novo de um chat, uma pasta de projeto copiada antes de uma mudança arriscada, um backup copiado para dentro de outro. Pastas na nuvem acrescentam mais quando um conflito de sincronização cria um segundo arquivo com outro nome.",
            "Raramente são pequenos. Alguns vídeos ou imagens de disco duplicados podem ocupar mais espaço que milhares de arquivos minúsculos; por isso procurar duplicados acima de um megabyte é a forma eficiente de começar.",
          ],
        },
        {
          title: "O que Finder, Fotos e Música conseguem fazer",
          content: [
            "O Finder pode ordenar uma pasta por nome, tipo ou tamanho, e uma Pasta Inteligente pode listar arquivos acima de certo tamanho, mas nada compara conteúdos. Dois arquivos com nomes diferentes parecem não ter relação. O app Fotos tem um álbum Duplicados para fotos que considera idênticas, e o app Música mostra músicas duplicadas em Arquivo > Biblioteca. Nenhum olha o resto do seu Mac.",
            "Ferramentas de Terminal como fdupes, instaladas com o Homebrew, comparam conteúdos e funcionam bem se você gosta da linha de comando. Se prefere uma janela que mostre o que será removido, use um localizador de duplicados com etapa de revisão.",
          ],
        },
        {
          title: "Como o DiskMop decide que dois arquivos são iguais",
          content: [
            "O DiskMop agrupa arquivos com exatamente o mesmo tamanho, compara os primeiros 64 KB e só para os que ainda coincidem calcula a impressão SHA-256 completa. Impressões idênticas significam conteúdo idêntico, digam o que disserem nomes ou datas. Assim a verificação é rápida e não lê por inteiro cada arquivo grande.",
            "Ele ignora arquivos abaixo de 1 MB e trata dois nomes dos mesmos dados (links físicos) como um só arquivo. Também se recusa a mexer em pastas do sistema e no interior de pacotes de apps, de modo que um duplicado dentro de um aplicativo nunca é oferecido para remoção.",
          ],
        },
        {
          title: "Remover cópias com segurança",
          content: [
            "Em cada grupo o DiskMop deixa uma cópia desmarcada e marca o resto, mas a decisão é sua: abra os caminhos e mantenha a cópia que está onde você espera, por exemplo a de Documentos em vez da de Downloads. Os arquivos removidos vão para o Lixo, não somem de vez; uma marcação errada pode ser desfeita até você esvaziá-lo.",
            "A verificação é gratuita. Limpar muitos itens de uma vez faz parte do DiskMop Pro, uma compra única; a versão gratuita deixa você testar algumas remoções individuais. Para outros consumidores de espaço, veja [como encontrar arquivos grandes no Mac](/blog/find-large-files-mac) e [o que enche o disco de inicialização do Mac](/blog/mac-startup-disk-almost-full).",
          ],
        },
      ],
      faq: [
        {
          question:
            "O macOS tem um localizador de arquivos duplicados embutido?",
          answer:
            "Não para arquivos em geral. O app Fotos tem um álbum Duplicados e o app Música pode mostrar itens duplicados, mas o Finder não tem nenhuma ferramenta que compare o conteúdo dos arquivos.",
        },
        {
          question: "É seguro excluir arquivos duplicados?",
          answer:
            "Sim, se você mantiver uma cópia. O DiskMop só agrupa arquivos com conteúdo idêntico, deixa uma cópia desmarcada em cada grupo e move o removido para o Lixo, para você restaurar antes de esvaziá-lo.",
        },
        {
          question:
            "O DiskMop encontra arquivos com nomes diferentes e o mesmo conteúdo?",
          answer:
            "Sim. Ele compara o conteúdo, não nomes nem datas: mesmo tamanho, mesmos primeiros 64 KB e a mesma impressão SHA-256 completa.",
        },
        {
          question: "Por que arquivos pequenos não aparecem na lista?",
          answer:
            "Arquivos abaixo de 1 MB são ignorados porque liberam pouco espaço e inundariam a lista. O espaço está em vídeos, imagens de disco e arquivos compactados duplicados.",
        },
      ],
      verdict: [
        "O Finder não encontra duplicados por você; o jeito confiável é uma ferramenta que compare o que há dentro dos arquivos. Duplicados costumam ser acidentes, e alguns grandes podem liberar gigabytes.",
        "O DiskMop para Mac compara o conteúdo com uma verificação SHA-256 completa, mantém uma cópia em cada grupo e envia o resto para o Lixo. A verificação é gratuita, então você vê quanto espaço os duplicados ocupam antes de decidir qualquer coisa.",
      ],
      ctaText: "Encontre arquivos duplicados no seu Mac com o DiskMop",
    },
    ja: {
      title: "Macで重複ファイルを見つけて削除する方法",
      metaDescription:
        "Finderには重複ファイルの検出機能がありません。Macで内容が同じファイルを見つける方法、安全に削除できるもの、DiskMopがコピーをゴミ箱へ移す仕組みを解説します。",
      subtitle:
        "同じファイルが複数ある場合：内容が完全に同じものを見つけて1つだけ残す",
      intro: [
        "結論から言うと、macOSのFinderには重複ファイルを一覧にする標準ツールがありません。フォルダを名前やサイズで並べ替えて気づくことはでき、「写真」や「ミュージック」アプリは自分のライブラリ内の重複を示しますが、書類、ダウンロード、アーカイブ、動画のためにはファイルの中身を比べるツールが必要です。Mac版DiskMopは「大きなファイルと重複」>「重複」タブでそれを行います。",
        "このガイドでは、重複が生まれる理由、Appleの標準ツールでできること、DiskMopが2つのファイルを同一と判断する方法、元のファイルを失わずに余分なコピーを取り除く手順を説明します。",
      ],
      keyTakeaways: [
        "Finderは重複を表示できません。「写真」（重複項目アルバム）と「ミュージック」（重複項目を表示）は、それぞれのライブラリだけが対象です。",
        "DiskMopは内容が完全に同じ場合だけ重複と見なします。サイズが同じ、先頭64KBが同じ、さらにSHA-256の指紋全体が同じ、という条件です。名前や日付は無視します。",
        "1MB未満のファイルは対象外です。同じデータを指す2つの名前（ハードリンク）も重複として数えません。片方を消しても空き容量が増えないためです。",
        "取り除いたコピーはゴミ箱へ移るので、空にする前なら元に戻せます。",
      ],
      dataTable: {
        caption: "Macで重複ファイルを見つける方法",
        columns: ["方法", "比べるもの", "範囲", "向いている用途"],
        rows: [
          [
            "Finder：名前やサイズで並べ替え",
            "名前とサイズのみ",
            "1つのフォルダずつ",
            "「報告書 (1).pdf」のような分かりやすいコピー",
          ],
          [
            "写真・ミュージックの重複ツール",
            "それぞれのライブラリ",
            "写真または曲のみ",
            "それらのアプリ内の重複",
          ],
          [
            "fdupesなどのターミナルツール",
            "ファイルの内容",
            "指定した任意のフォルダ",
            "コマンドラインに慣れた人",
          ],
          [
            "DiskMopの「重複」タブ",
            "サイズ、先頭64KB、SHA-256全体",
            "マイファイルまたは選んだドライブ",
            "書類、ダウンロード、アーカイブ、動画",
          ],
        ],
      },
      howTo: {
        name: "DiskMopでMacの重複ファイルを見つけて削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "「大きなファイルと重複」を開く",
            text: "DiskMopを起動し、サイドバーで「大きなファイルと重複」を選んで「重複」タブを開きます。",
          },
          {
            name: "探す場所を選ぶ",
            text: "ホームフォルダなら「マイファイル」、ドライブ全体、または1か所だけなら「フォルダーを選択」を選びます。",
          },
          {
            name: "スキャンしてグループを確認する",
            text: "「スキャン」を押します。各グループに内容が同じファイルと、余分なコピーが占める容量が並びます。いくつか開いてパスを確認してください。",
          },
          {
            name: "削除するコピーにチェックを入れる",
            text: "各グループで1つのコピーはチェックなしのままです。残りにチェックを入れるか、残したいもののチェックを外します。",
          },
          {
            name: "ゴミ箱へ移す",
            text: "「ゴミ箱に入れる」を押して確定します。容量を取り戻すには、その後ゴミ箱を空にします。",
          },
        ],
      },
      sections: [
        {
          title: "重複ファイルはどこから来るのか",
          content: [
            "重複の多くは偶然の産物です。同じインストーラを2回ダウンロードした、メールの添付とチャットの添付を別々に保存した、危険な変更の前にプロジェクトフォルダをコピーした、バックアップを別のバックアップにコピーした、などです。クラウドフォルダは、同期の競合で別名の2つ目のファイルができると、さらに増やします。",
            "小さいことはあまりありません。重複した動画やディスクイメージが数本あるだけで、小さなファイル数千個より容量を食うことがあります。そのため、1MBを超える重複から探すのが効率的です。",
          ],
        },
        {
          title: "Finder・写真・ミュージックでできること",
          content: [
            "Finderはフォルダを名前、種類、サイズで並べ替えられ、スマートフォルダで一定サイズ以上のファイルを一覧にできますが、内容を比べるものはありません。名前が違う2つのファイルは無関係に見えます。「写真」アプリには同一と判断した写真の「重複項目」アルバムがあり、「ミュージック」アプリは「ファイル」>「ライブラリ」から重複する曲を表示できます。どちらもMacのほかの部分は見ません。",
            "Homebrewで入れるfdupesなどのターミナルツールは内容を比べるので、コマンドラインに慣れていれば便利です。何が削除されるかをウィンドウで確認したい場合は、確認ステップのある重複検出ツールを使いましょう。",
          ],
        },
        {
          title: "DiskMopが同じファイルと判断する方法",
          content: [
            "DiskMopはまずサイズがまったく同じファイルをまとめ、先頭64KBを比べ、それでも一致するものだけについてSHA-256の指紋全体を計算します。指紋が同じなら、名前や日付が何であれ内容は同一です。これでスキャンは速く、大きなファイルを毎回最後まで読まずに済みます。",
            "1MB未満のファイルは無視し、同じデータの2つの名前（ハードリンク）は1つのファイルとして扱います。システムフォルダやアプリパッケージの内部にも触れないため、アプリ内部の重複が削除候補に出ることはありません。",
          ],
        },
        {
          title: "コピーを安全に取り除く",
          content: [
            "各グループでDiskMopは1つのコピーをチェックなしにし、残りにチェックを入れますが、最終判断はあなたです。パスを開き、想定した場所にあるコピー（たとえば「ダウンロード」ではなく「書類」のファイル）を残してください。取り除いたファイルは消えてなくなるのではなくゴミ箱へ移るので、チェックを間違えても空にするまでは取り消せます。",
            "スキャンは無料です。多数の項目をまとめて整理するのは買い切りのDiskMop Proの機能で、無料版では1件ずつの削除を数回試せます。ほかの容量食いについては、[Macで大きなファイルを見つける方法](/blog/find-large-files-mac)と[Macの起動ディスクを埋めているもの](/blog/mac-startup-disk-almost-full)も参照してください。",
          ],
        },
      ],
      faq: [
        {
          question: "macOSに重複ファイルの検出機能は標準で付いていますか？",
          answer:
            "一般のファイル向けにはありません。「写真」には重複項目アルバム、「ミュージック」には重複項目の表示がありますが、Finderにはファイルの内容を比べるツールがありません。",
        },
        {
          question: "重複ファイルを削除しても安全ですか？",
          answer:
            "1つのコピーを残せば安全です。DiskMopは内容が同一のファイルだけをグループ化し、各グループで1つのコピーをチェックなしにし、削除したものはゴミ箱へ移すので、空にする前に元に戻せます。",
        },
        {
          question: "名前が違っても内容が同じファイルは見つかりますか？",
          answer:
            "はい。名前や日付ではなく内容を比べます。サイズが同じ、先頭64KBが同じ、SHA-256の指紋全体が同じ、が条件です。",
        },
        {
          question: "小さいファイルが一覧に出ないのはなぜですか？",
          answer:
            "1MB未満のファイルは、空く容量が少なく一覧を埋め尽くすため対象外です。容量を食うのは、重複した動画、ディスクイメージ、アーカイブです。",
        },
      ],
      verdict: [
        "Finderは重複を代わりに探してくれないので、確実なのはファイルの中身を比べるツールです。重複はたいてい偶然の産物で、大きなものが数個あるだけで数GBが空くことがあります。",
        "Mac版DiskMopはSHA-256全体の照合で内容を比べ、各グループで1つのコピーを残し、残りをゴミ箱へ移します。スキャンは無料なので、何かを決める前に重複が占める容量を確認できます。",
      ],
      ctaText: "DiskMopでMacの重複ファイルを見つける",
    },
  },
};
