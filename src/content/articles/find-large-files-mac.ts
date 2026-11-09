import type { Article } from "../types";

export const findLargeFilesMac: Article = {
  slug: "find-large-files-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-11-09",
  updated: "2026-11-09",
  readingTime: 6,
  content: {
    en: {
      title: "How to Find Large Files on Your Mac (and What to Do With Them)",
      metaDescription:
        "Find what fills your Mac with Finder, Storage settings and Terminal, then use DiskMop's Large files list and Disk map to spot the biggest files and folders and move them to the Trash.",
      subtitle:
        "Four ways to see the biggest files, from Finder to a size-ranked list and a disk map",
      intro: [
        "Short answer: in Finder press Command-F, choose This Mac, add the File Size rule and set it to is greater than 500 MB. For a ranked list across your whole drive, DiskMop for Mac has Large & duplicate files > Large files, which lists the largest files first, and a Disk map that shows which folders are heavy.",
        "This guide compares the built-in options, explains how to read a list of large files without deleting something you need, and shows how to use the minimum size and the disk map to find gigabytes fast.",
      ],
      keyTakeaways: [
        "Finder can search by size: Command-F, This Mac, then the File Size rule; macOS Storage settings also lists large files under Documents.",
        "In Terminal, find ~ -type f -size +500M lists files over 500 MB in your home folder, and du -sh * | sort -h ranks the items of the current folder by size.",
        "DiskMop's Large files tab lists the largest files first with a minimum size of 50 MB, 100 MB, 250 MB, 500 MB or 1 GB, and its Disk map tab shows folder sizes so you can drill down.",
        "Removed files go to the Trash and the space returns only after you empty it; items inside system folders and app packages are never offered.",
      ],
      dataTable: {
        caption: "Ways to find large files on a Mac",
        columns: ["Method", "Shows", "Scope", "Good for"],
        rows: [
          [
            "Finder search (Command-F)",
            "Files over a size you set",
            "This Mac or a folder",
            "A quick one-off look",
          ],
          [
            "Storage settings",
            "Large files under Documents",
            "Your user files",
            "A first overview by category",
          ],
          [
            "Terminal: find and du",
            "Paths and sizes as text",
            "Any folder",
            "People who like the command line",
          ],
          [
            "DiskMop Large files and Disk map",
            "Largest files first, folder sizes",
            "Your files or a whole drive",
            "Ranked list with review and Trash",
          ],
        ],
      },
      howTo: {
        name: "Find and remove large files on a Mac with DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Open Large & duplicate files",
            text: "Start DiskMop and choose Large & duplicate files in the sidebar. The Large files tab is the first one.",
          },
          {
            name: "Pick the place and the minimum size",
            text: "Choose My files, a drive or Choose folder, then set the minimum size to 50 MB, 100 MB, 250 MB, 500 MB or 1 GB.",
          },
          {
            name: "Scan and read the list",
            text: "Press Scan. The biggest files come first, each with its folder. Check the path before you decide.",
          },
          {
            name: "Use the Disk map for folders",
            text: "Open the Disk map tab to see the size of each folder in the current place, and open a folder to drill into it.",
          },
          {
            name: "Move to the Trash and empty it",
            text: "Tick what you no longer need, press Move to Trash and confirm, then empty the Trash to get the space back.",
          },
        ],
      },
      sections: [
        {
          title: "Start With Finder and Storage Settings",
          content: [
            "In Finder press Command-F, set the search to This Mac, then use the first rule to pick File Size and choose is greater than. Type 500 MB and you get every file above that size. Sort by Size to see the biggest at the top. You can save the search as a Smart Folder and come back to it later.",
            "Storage settings (System Settings > General > Storage) show how space divides into apps, documents and other categories, and the Documents entry lets you review large files and downloads. It is a good overview but it stays at category level and does not rank every large file on the disk.",
          ],
        },
        {
          title: "A Few Terminal Commands",
          content: [
            "find ~ -type f -size +500M prints every file in your home folder above 500 MB. In any folder, du -sh * | sort -h lists its items from smallest to largest, so the last lines are the heavy ones. These are reliable but you read plain text, and you still have to open each folder to decide what a file is.",
            "Be careful with commands that delete. Listing is harmless; removing from Terminal skips the Trash entirely.",
          ],
        },
        {
          title: "Big Files and the Disk Map in DiskMop",
          content: [
            "Large files scans the place you chose and lists the largest files first, up to a few hundred, with the folder each one lives in. Raise the minimum size from 50 MB to 1 GB to cut the noise when you only care about the giants. Typical finds are old disk images, video projects, virtual machine files, app caches and Docker data.",
            "The Disk map answers a different question: not which file, but which folder. It shows the size of every folder in the current place and lets you open one to look inside, which is the quickest way to learn that a single project folder or the Library takes half your drive.",
          ],
        },
        {
          title: "Deciding What Is Safe to Remove",
          content: [
            "A large file is not automatically junk. Delete what you recognise and can recreate or no longer need, such as an installer, an exported video, an old archive. Leave files that belong to apps unless you know what they do; app data usually shows up under Library, where [Library and leftovers cleanup](/blog/delete-app-leftovers-mac) explains what is rebuildable.",
            "DiskMop moves files to the Trash and refuses system folders and the inside of app packages, so a mistake is recoverable until you empty it. Scanning is free; cleaning many items at once is part of DiskMop Pro, a one-time purchase, and the free version lets you try a few single removals. For duplicates specifically, see [how to find duplicate files on Mac](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "How do I find files over a certain size on a Mac?",
          answer:
            "In Finder press Command-F, choose This Mac, add the File Size rule and set it to is greater than, for example 500 MB. In DiskMop, open Large & duplicate files, set the minimum size and scan.",
        },
        {
          question: "What is the minimum size option in DiskMop?",
          answer:
            "The Large files tab offers 50 MB, 100 MB, 250 MB, 500 MB and 1 GB. A higher value shows only the biggest files and gives a shorter list.",
        },
        {
          question: "What does the Disk map show?",
          answer:
            "The size of each folder in the place you are looking at. You can open a folder to see what is inside, which helps when many files add up to a lot rather than one file being huge.",
        },
        {
          question: "Is it safe to delete large files?",
          answer:
            "It is safe for files you recognise and no longer need. DiskMop moves them to the Trash, so you can restore a file until you empty it, and it will not offer system folders or the inside of apps.",
        },
      ],
      verdict: [
        "Finder and Terminal can find large files, and Storage settings gives a category overview. What they do not give you is one ranked list across the drive with a place to review and remove.",
        "DiskMop for Mac lists the biggest files first, adds a Disk map for folders and moves what you remove to the Trash. Scanning is free, so you can see where the space went before you decide.",
      ],
      ctaText: "Find the biggest files on your Mac with DiskMop",
    },
    tr: {
      title: "Mac'inizde Büyük Dosyalar Nasıl Bulunur (ve Ne Yapılır)",
      metaDescription:
        "Mac'inizi dolduranı Finder, Depolama ayarları ve Terminal ile bulun; sonra DiskMop'un Büyük dosyalar listesi ve Disk haritasıyla en büyük dosya ve klasörleri görüp Çöp Kutusu'na taşıyın.",
      subtitle:
        "En büyük dosyaları görmenin dört yolu: Finder'dan boyuta göre sıralı listeye ve disk haritasına",
      intro: [
        "Kısa cevap: Finder'da Command-F'ye basın, Bu Mac'i seçin, Dosya Boyutu kuralını ekleyip şundan büyük 500 MB yapın. Tüm diskte sıralı bir liste için Mac'te DiskMop'un Büyük ve kopya dosyalar > Büyük dosyalar sekmesi en büyükleri başa alır; Disk haritası da hangi klasörlerin ağır olduğunu gösterir.",
        "Bu rehber yerleşik seçenekleri karşılaştırır, ihtiyacınız olan bir şeyi silmeden büyük dosya listesinin nasıl okunacağını anlatır ve en az boyut ayarı ile disk haritasıyla gigabaytları hızla nasıl bulacağınızı gösterir.",
      ],
      keyTakeaways: [
        "Finder boyuta göre arayabilir: Command-F, Bu Mac, ardından Dosya Boyutu kuralı; macOS Depolama ayarları da Belgeler altında büyük dosyaları listeler.",
        "Terminal'de find ~ -type f -size +500M ana klasörünüzdeki 500 MB üzeri dosyaları listeler, du -sh * | sort -h ise geçerli klasörün öğelerini boyuta göre sıralar.",
        "DiskMop'un Büyük dosyalar sekmesi en büyükleri başa alır; en az boyut 50 MB, 100 MB, 250 MB, 500 MB veya 1 GB seçilebilir. Disk haritası sekmesi klasör boyutlarını gösterip içine girmenize izin verir.",
        "Kaldırılan dosyalar Çöp Kutusu'na gider, yer ancak onu boşaltınca geri gelir; sistem klasörlerindeki ve uygulama paketlerinin içindeki öğeler hiç önerilmez.",
      ],
      dataTable: {
        caption: "Mac'te büyük dosya bulma yolları",
        columns: ["Yöntem", "Ne gösterir", "Kapsam", "Ne işe yarar"],
        rows: [
          [
            "Finder araması (Command-F)",
            "Belirlediğiniz boyutun üstündeki dosyalar",
            "Bu Mac veya bir klasör",
            "Hızlı, tek seferlik bakış",
          ],
          [
            "Depolama ayarları",
            "Belgeler altında büyük dosyalar",
            "Kullanıcı dosyalarınız",
            "Kategoriye göre ilk genel bakış",
          ],
          [
            "Terminal: find ve du",
            "Yol ve boyutlar metin olarak",
            "Herhangi bir klasör",
            "Komut satırını sevenler",
          ],
          [
            "DiskMop Büyük dosyalar ve Disk haritası",
            "En büyükler başta, klasör boyutları",
            "Dosyalarınız veya tüm bir disk",
            "İnceleme ve Çöp Kutusu'yla sıralı liste",
          ],
        ],
      },
      howTo: {
        name: "DiskMop ile Mac'te büyük dosyaları bulup kaldırın",
        totalTime: "PT10M",
        steps: [
          {
            name: "Büyük ve kopya dosyalar'ı açın",
            text: "DiskMop'u başlatın ve kenar çubuğunda Büyük ve kopya dosyalar'ı seçin. İlk sekme Büyük dosyalar'dır.",
          },
          {
            name: "Yeri ve en az boyutu seçin",
            text: "Dosyalarım, bir disk veya Klasör seç'i seçin; sonra en az boyutu 50 MB, 100 MB, 250 MB, 500 MB veya 1 GB yapın.",
          },
          {
            name: "Tarayın ve listeyi okuyun",
            text: "Tara'ya basın. En büyük dosyalar başta gelir, her birinin klasörüyle birlikte. Karar vermeden önce yola bakın.",
          },
          {
            name: "Klasörler için Disk haritasını kullanın",
            text: "Bulunduğunuz yerdeki her klasörün boyutunu görmek için Disk haritası sekmesini açın; içine bakmak için bir klasörü açın.",
          },
          {
            name: "Çöp Kutusu'na taşıyıp boşaltın",
            text: "Artık gerekmeyenleri işaretleyin, Çöp Kutusu'na taşı'ya basıp onaylayın, sonra yeri geri almak için Çöp Kutusu'nu boşaltın.",
          },
        ],
      },
      sections: [
        {
          title: "Finder ve Depolama Ayarlarıyla Başlayın",
          content: [
            "Finder'da Command-F'ye basın, aramayı Bu Mac'e ayarlayın, ilk kuralda Dosya Boyutu'nu seçip şundan büyük'ü işaretleyin. 500 MB yazın; bu boyutun üstündeki her dosyayı alırsınız. En büyükleri üstte görmek için Boyuta göre sıralayın. Aramayı Akıllı Klasör olarak kaydedip sonra dönebilirsiniz.",
            "Depolama ayarları (Sistem Ayarları > Genel > Depolama) alanın uygulamalar, belgeler ve diğer kategoriler arasında nasıl bölündüğünü gösterir; Belgeler girişi büyük dosyaları ve indirilenleri incelemenizi sağlar. İyi bir genel bakıştır ama kategori düzeyinde kalır, diskteki her büyük dosyayı sıralamaz.",
          ],
        },
        {
          title: "Birkaç Terminal Komutu",
          content: [
            "find ~ -type f -size +500M ana klasörünüzdeki 500 MB üzeri her dosyayı yazdırır. Herhangi bir klasörde du -sh * | sort -h öğeleri küçükten büyüğe sıralar; son satırlar ağır olanlardır. Güvenilirdir ama düz metin okursunuz ve bir dosyanın ne olduğuna karar vermek için yine her klasörü açmanız gerekir.",
            "Silen komutlara dikkat edin. Listelemek zararsızdır; Terminal'den silmek Çöp Kutusu'nu tamamen atlar.",
          ],
        },
        {
          title: "DiskMop'ta Büyük Dosyalar ve Disk Haritası",
          content: [
            "Büyük dosyalar seçtiğiniz yeri tarar ve en büyük dosyaları, birkaç yüze kadar, bulundukları klasörle birlikte başa alarak listeler. Yalnızca devleri merak ediyorsanız en az boyutu 50 MB'tan 1 GB'a çıkarıp gürültüyü azaltın. Sık bulunanlar: eski disk imajları, video projeleri, sanal makine dosyaları, uygulama önbellekleri ve Docker verileri.",
            "Disk haritası farklı bir soruya cevap verir: hangi dosya değil, hangi klasör. Bulunduğunuz yerdeki her klasörün boyutunu gösterir ve içine bakmanıza izin verir; tek bir proje klasörünün ya da Library'nin diskin yarısını kapladığını öğrenmenin en hızlı yoludur.",
          ],
        },
        {
          title: "Neyin Silinebileceğine Karar Vermek",
          content: [
            "Büyük bir dosya kendiliğinden çöp değildir. Tanıdığınız ve yeniden oluşturabileceğiniz ya da artık gerekmeyen şeyleri silin: yükleyici, dışa aktarılmış video, eski arşiv gibi. Uygulamalara ait dosyalara ne işe yaradıklarını bilmiyorsanız dokunmayın; uygulama verileri genelde Library altında çıkar, hangilerinin yeniden oluşturulabildiğini [Library ve artıkların temizliği](/blog/delete-app-leftovers-mac) anlatır.",
            "DiskMop dosyaları Çöp Kutusu'na taşır, sistem klasörlerini ve uygulama paketlerinin içini reddeder; böylece hata, siz boşaltana kadar geri alınabilir. Tarama ücretsizdir; çok sayıda öğeyi aynı anda temizlemek tek seferlik satın alınan DiskMop Pro'nun parçasıdır, ücretsiz sürümde birkaç tekil kaldırmayı deneyebilirsiniz. Kopyalar için [Mac'te kopya dosyalar nasıl bulunur](/blog/find-duplicate-files-mac) yazısına bakın.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Mac'te belirli bir boyutun üstündeki dosyaları nasıl bulurum?",
          answer:
            "Finder'da Command-F'ye basın, Bu Mac'i seçin, Dosya Boyutu kuralını ekleyip şundan büyük yapın, örneğin 500 MB. DiskMop'ta Büyük ve kopya dosyalar'ı açın, en az boyutu ayarlayın ve tarayın.",
        },
        {
          question: "DiskMop'ta en az boyut seçeneği nedir?",
          answer:
            "Büyük dosyalar sekmesi 50 MB, 100 MB, 250 MB, 500 MB ve 1 GB sunar. Yüksek değer yalnızca en büyük dosyaları ve daha kısa bir liste gösterir.",
        },
        {
          question: "Disk haritası ne gösterir?",
          answer:
            "Baktığınız yerdeki her klasörün boyutunu. İçini görmek için bir klasörü açabilirsiniz; tek bir dev dosya yerine birçok dosya toplamda büyük yer tuttuğunda işe yarar.",
        },
        {
          question: "Büyük dosyaları silmek güvenli mi?",
          answer:
            "Tanıdığınız ve artık gerekmeyen dosyalar için güvenlidir. DiskMop bunları Çöp Kutusu'na taşır, boşaltana kadar geri yükleyebilirsiniz; sistem klasörlerini ve uygulamaların içini önermez.",
        },
      ],
      verdict: [
        "Finder ve Terminal büyük dosyaları bulabilir, Depolama ayarları kategori düzeyinde genel bakış verir. Vermedikleri şey, disk genelinde tek bir sıralı liste ve incelemek ile kaldırmak için bir yerdir.",
        "Mac için DiskMop en büyük dosyaları başa alır, klasörler için Disk haritası ekler ve kaldırdıklarınızı Çöp Kutusu'na taşır. Tarama ücretsiz; karar vermeden önce yerin nereye gittiğini görebilirsiniz.",
      ],
      ctaText: "DiskMop ile Mac'inizdeki en büyük dosyaları bulun",
    },
    de: {
      title: "Große Dateien auf dem Mac finden (und was man damit tut)",
      metaDescription:
        "Finden Sie mit Finder, Speichereinstellungen und Terminal, was Ihren Mac füllt, und sehen Sie mit DiskMops Liste Große Dateien und Datenträgerkarte die größten Dateien und Ordner.",
      subtitle:
        "Vier Wege, die größten Dateien zu sehen: vom Finder bis zur sortierten Liste und Datenträgerkarte",
      intro: [
        "Kurz gesagt: Drücken Sie im Finder Befehl-F, wählen Sie Dieser Mac, fügen Sie die Regel Dateigröße hinzu und stellen Sie sie auf ist größer als 500 MB. Für eine sortierte Liste über das ganze Laufwerk hat DiskMop für Mac unter Große & doppelte Dateien > Große Dateien die größten zuerst, und die Datenträgerkarte zeigt, welche Ordner schwer sind.",
        "Diese Anleitung vergleicht die eingebauten Möglichkeiten, erklärt, wie Sie eine Liste großer Dateien lesen, ohne etwas Nötiges zu löschen, und zeigt, wie Mindestgröße und Datenträgerkarte Gigabytes schnell aufspüren.",
      ],
      keyTakeaways: [
        "Der Finder kann nach Größe suchen: Befehl-F, Dieser Mac, dann die Regel Dateigröße; die macOS-Speichereinstellungen listen große Dateien außerdem unter Dokumente.",
        "Im Terminal listet find ~ -type f -size +500M Dateien über 500 MB im Home-Ordner, und du -sh * | sort -h sortiert die Objekte des aktuellen Ordners nach Größe.",
        "Der Reiter Große Dateien von DiskMop zeigt die größten zuerst, mit einer Mindestgröße von 50 MB, 100 MB, 250 MB, 500 MB oder 1 GB; der Reiter Datenträgerkarte zeigt Ordnergrößen zum Hineinzoomen.",
        "Entfernte Dateien gehen in den Papierkorb, der Platz kommt erst nach dem Leeren zurück; Objekte in Systemordnern und App-Paketen werden nie angeboten.",
      ],
      dataTable: {
        caption: "Wege, große Dateien auf dem Mac zu finden",
        columns: ["Methode", "Zeigt", "Umfang", "Geeignet für"],
        rows: [
          [
            "Finder-Suche (Befehl-F)",
            "Dateien über einer gewählten Größe",
            "Dieser Mac oder ein Ordner",
            "Ein schneller einmaliger Blick",
          ],
          [
            "Speichereinstellungen",
            "Große Dateien unter Dokumente",
            "Ihre Benutzerdateien",
            "Erster Überblick nach Kategorien",
          ],
          [
            "Terminal: find und du",
            "Pfade und Größen als Text",
            "Jeder Ordner",
            "Wer die Kommandozeile mag",
          ],
          [
            "DiskMop Große Dateien und Datenträgerkarte",
            "Größte zuerst, Ordnergrößen",
            "Ihre Dateien oder ein ganzes Laufwerk",
            "Sortierte Liste mit Prüfung und Papierkorb",
          ],
        ],
      },
      howTo: {
        name: "Große Dateien auf dem Mac mit DiskMop finden und entfernen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Große & doppelte Dateien öffnen",
            text: "Starten Sie DiskMop und wählen Sie in der Seitenleiste Große & doppelte Dateien. Der erste Reiter ist Große Dateien.",
          },
          {
            name: "Ort und Mindestgröße wählen",
            text: "Wählen Sie Meine Dateien, ein Laufwerk oder Ordner wählen und stellen Sie die Mindestgröße auf 50 MB, 100 MB, 250 MB, 500 MB oder 1 GB.",
          },
          {
            name: "Scannen und die Liste lesen",
            text: "Klicken Sie auf Scannen. Die größten Dateien stehen oben, jeweils mit ihrem Ordner. Prüfen Sie den Pfad, bevor Sie entscheiden.",
          },
          {
            name: "Die Datenträgerkarte für Ordner nutzen",
            text: "Öffnen Sie den Reiter Datenträgerkarte, um die Größe jedes Ordners am aktuellen Ort zu sehen, und öffnen Sie einen Ordner, um hineinzuschauen.",
          },
          {
            name: "In den Papierkorb legen und leeren",
            text: "Markieren Sie, was Sie nicht mehr brauchen, klicken Sie auf In den Papierkorb legen und bestätigen Sie, dann leeren Sie den Papierkorb, um den Platz zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Mit Finder und Speichereinstellungen beginnen",
          content: [
            "Drücken Sie im Finder Befehl-F, stellen Sie die Suche auf Dieser Mac, wählen Sie in der ersten Regel Dateigröße und ist größer als. Geben Sie 500 MB ein, und Sie erhalten jede Datei darüber. Nach Größe sortiert stehen die größten oben. Die Suche lässt sich als Intelligenter Ordner sichern.",
            "Die Speichereinstellungen (Systemeinstellungen > Allgemein > Speicher) zeigen, wie sich der Platz auf Apps, Dokumente und andere Kategorien verteilt; der Eintrag Dokumente erlaubt, große Dateien und Downloads zu prüfen. Das ist ein guter Überblick, bleibt aber auf Kategorieebene und ordnet nicht jede große Datei des Laufwerks.",
          ],
        },
        {
          title: "Ein paar Terminal-Befehle",
          content: [
            "find ~ -type f -size +500M gibt jede Datei im Home-Ordner über 500 MB aus. In jedem Ordner listet du -sh * | sort -h die Objekte von klein nach groß, die letzten Zeilen sind die schweren. Das ist zuverlässig, aber Sie lesen reinen Text und müssen jeden Ordner öffnen, um zu entscheiden, was eine Datei ist.",
            "Vorsicht bei Befehlen, die löschen. Auflisten ist harmlos; Entfernen im Terminal umgeht den Papierkorb vollständig.",
          ],
        },
        {
          title: "Große Dateien und Datenträgerkarte in DiskMop",
          content: [
            "Große Dateien scannt den gewählten Ort und listet die größten Dateien zuerst, bis zu einigen Hundert, mit dem Ordner, in dem sie liegen. Erhöhen Sie die Mindestgröße von 50 MB auf 1 GB, um Rauschen zu senken, wenn nur die Riesen zählen. Typische Funde sind alte Disk-Images, Videoprojekte, Dateien virtueller Maschinen, App-Caches und Docker-Daten.",
            "Die Datenträgerkarte beantwortet eine andere Frage: nicht welche Datei, sondern welcher Ordner. Sie zeigt die Größe jedes Ordners am aktuellen Ort und lässt Sie hineinschauen; so erfahren Sie am schnellsten, dass ein einzelner Projektordner oder die Library das halbe Laufwerk belegt.",
          ],
        },
        {
          title: "Entscheiden, was sich sicher entfernen lässt",
          content: [
            "Eine große Datei ist nicht automatisch Müll. Löschen Sie, was Sie erkennen und neu erzeugen können oder nicht mehr brauchen, etwa einen Installer, ein exportiertes Video, ein altes Archiv. Dateien, die zu Apps gehören, lassen Sie liegen, solange Sie nicht wissen, was sie tun; App-Daten stehen meist in der Library, wo [Bereinigung von Library und Überresten](/blog/delete-app-leftovers-mac) erklärt, was sich neu aufbauen lässt.",
            "DiskMop legt Dateien in den Papierkorb und lehnt Systemordner und das Innere von App-Paketen ab, sodass ein Fehler bis zum Leeren umkehrbar ist. Das Scannen ist kostenlos; viele Objekte auf einmal zu bereinigen gehört zu DiskMop Pro, einem einmaligen Kauf, und in der kostenlosen Version können Sie ein paar einzelne Entfernungen testen. Zu Duplikaten siehe [Doppelte Dateien auf dem Mac finden](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question:
            "Wie finde ich Dateien ab einer bestimmten Größe auf dem Mac?",
          answer:
            "Drücken Sie im Finder Befehl-F, wählen Sie Dieser Mac, fügen Sie die Regel Dateigröße hinzu und stellen Sie sie auf ist größer als, zum Beispiel 500 MB. In DiskMop öffnen Sie Große & doppelte Dateien, stellen die Mindestgröße ein und scannen.",
        },
        {
          question: "Was ist die Mindestgröße in DiskMop?",
          answer:
            "Der Reiter Große Dateien bietet 50 MB, 100 MB, 250 MB, 500 MB und 1 GB. Ein höherer Wert zeigt nur die größten Dateien und eine kürzere Liste.",
        },
        {
          question: "Was zeigt die Datenträgerkarte?",
          answer:
            "Die Größe jedes Ordners am aktuellen Ort. Sie können einen Ordner öffnen, um hineinzuschauen, was hilft, wenn viele Dateien zusammen viel Platz belegen und nicht eine riesig ist.",
        },
        {
          question: "Ist es sicher, große Dateien zu löschen?",
          answer:
            "Für Dateien, die Sie erkennen und nicht mehr brauchen, ja. DiskMop legt sie in den Papierkorb, sodass Sie sie bis zum Leeren wiederherstellen können, und bietet weder Systemordner noch das Innere von Apps an.",
        },
      ],
      verdict: [
        "Finder und Terminal können große Dateien finden, die Speichereinstellungen geben einen Überblick nach Kategorien. Was sie nicht bieten, ist eine einzige sortierte Liste über das Laufwerk mit einem Ort zum Prüfen und Entfernen.",
        "DiskMop für Mac listet die größten Dateien zuerst, ergänzt eine Datenträgerkarte für Ordner und legt Entferntes in den Papierkorb. Das Scannen ist kostenlos, sodass Sie sehen, wohin der Platz gegangen ist, bevor Sie entscheiden.",
      ],
      ctaText: "Die größten Dateien auf Ihrem Mac mit DiskMop finden",
    },
    fr: {
      title:
        "Comment trouver les gros fichiers sur votre Mac (et quoi en faire)",
      metaDescription:
        "Trouvez ce qui remplit votre Mac avec le Finder, Stockage et le Terminal, puis repérez les plus gros fichiers et dossiers avec la liste Gros fichiers et la Carte du disque de DiskMop.",
      subtitle:
        "Quatre façons de voir les plus gros fichiers, du Finder à une liste triée et une carte du disque",
      intro: [
        "En bref : dans le Finder, appuyez sur Commande-F, choisissez Ce Mac, ajoutez le critère Taille du fichier et réglez-le sur est supérieur à 500 Mo. Pour une liste triée sur tout le disque, DiskMop pour Mac propose Gros fichiers et doublons > Gros fichiers, qui place les plus grands en tête, et une Carte du disque qui montre les dossiers lourds.",
        "Ce guide compare les options intégrées, explique comment lire une liste de gros fichiers sans supprimer ce dont vous avez besoin et montre comment la taille minimale et la carte du disque font gagner des gigaoctets rapidement.",
      ],
      keyTakeaways: [
        "Le Finder peut chercher par taille : Commande-F, Ce Mac, puis le critère Taille du fichier ; les réglages Stockage de macOS listent aussi les gros fichiers sous Documents.",
        "Dans le Terminal, find ~ -type f -size +500M liste les fichiers de plus de 500 Mo de votre dossier personnel, et du -sh * | sort -h classe les éléments du dossier courant par taille.",
        "L'onglet Gros fichiers de DiskMop place les plus grands en tête, avec une taille minimale de 50 Mo, 100 Mo, 250 Mo, 500 Mo ou 1 Go ; l'onglet Carte du disque montre la taille des dossiers pour descendre dans l'arborescence.",
        "Les fichiers retirés vont à la Corbeille et l'espace ne revient qu'une fois celle-ci vidée ; les éléments des dossiers système et des paquets d'apps ne sont jamais proposés.",
      ],
      dataTable: {
        caption: "Façons de trouver les gros fichiers sur Mac",
        columns: ["Méthode", "Montre", "Portée", "Pratique pour"],
        rows: [
          [
            "Recherche du Finder (Commande-F)",
            "Fichiers au-dessus d'une taille choisie",
            "Ce Mac ou un dossier",
            "Un coup d'œil rapide et ponctuel",
          ],
          [
            "Réglages Stockage",
            "Gros fichiers sous Documents",
            "Vos fichiers d'utilisateur",
            "Un premier aperçu par catégorie",
          ],
          [
            "Terminal : find et du",
            "Chemins et tailles en texte",
            "N'importe quel dossier",
            "Ceux qui aiment la ligne de commande",
          ],
          [
            "DiskMop Gros fichiers et Carte du disque",
            "Plus grands en tête, tailles de dossiers",
            "Vos fichiers ou un disque entier",
            "Liste triée avec vérification et Corbeille",
          ],
        ],
      },
      howTo: {
        name: "Trouver et supprimer les gros fichiers sur Mac avec DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ouvrir Gros fichiers et doublons",
            text: "Lancez DiskMop et choisissez Gros fichiers et doublons dans la barre latérale. Le premier onglet est Gros fichiers.",
          },
          {
            name: "Choisir l'endroit et la taille minimale",
            text: "Choisissez Mes fichiers, un disque ou Choisir un dossier, puis réglez la taille minimale sur 50 Mo, 100 Mo, 250 Mo, 500 Mo ou 1 Go.",
          },
          {
            name: "Analyser et lire la liste",
            text: "Cliquez sur Analyser. Les plus gros fichiers arrivent en premier, chacun avec son dossier. Vérifiez le chemin avant de décider.",
          },
          {
            name: "Utiliser la Carte du disque pour les dossiers",
            text: "Ouvrez l'onglet Carte du disque pour voir la taille de chaque dossier à l'endroit choisi, et ouvrez un dossier pour regarder à l'intérieur.",
          },
          {
            name: "Mettre à la Corbeille et la vider",
            text: "Cochez ce dont vous n'avez plus besoin, cliquez sur Mettre à la Corbeille et confirmez, puis videz la Corbeille pour récupérer l'espace.",
          },
        ],
      },
      sections: [
        {
          title: "Commencer par le Finder et les réglages Stockage",
          content: [
            "Dans le Finder, appuyez sur Commande-F, réglez la recherche sur Ce Mac, puis choisissez Taille du fichier dans le premier critère et est supérieur à. Saisissez 500 Mo et vous obtenez tous les fichiers au-dessus. Triez par Taille pour voir les plus grands en haut. Vous pouvez enregistrer la recherche comme Dossier dynamique.",
            "Les réglages Stockage (Réglages Système > Général > Stockage) montrent comment l'espace se répartit entre apps, documents et autres catégories, et l'entrée Documents permet d'examiner les gros fichiers et les téléchargements. C'est un bon aperçu, mais il reste au niveau des catégories et ne classe pas chaque gros fichier du disque.",
          ],
        },
        {
          title: "Quelques commandes Terminal",
          content: [
            "find ~ -type f -size +500M affiche chaque fichier de votre dossier personnel de plus de 500 Mo. Dans n'importe quel dossier, du -sh * | sort -h liste ses éléments du plus petit au plus grand ; les dernières lignes sont les plus lourdes. C'est fiable, mais vous lisez du texte brut et devez encore ouvrir chaque dossier pour savoir ce qu'est un fichier.",
            "Méfiez-vous des commandes qui suppriment. Lister est sans danger ; supprimer depuis le Terminal contourne entièrement la Corbeille.",
          ],
        },
        {
          title: "Gros fichiers et Carte du disque dans DiskMop",
          content: [
            "Gros fichiers analyse l'endroit choisi et liste les plus grands fichiers en premier, jusqu'à quelques centaines, avec le dossier où chacun se trouve. Passez la taille minimale de 50 Mo à 1 Go pour réduire le bruit si seuls les géants vous intéressent. On y trouve souvent d'anciennes images disque, des projets vidéo, des fichiers de machines virtuelles, des caches d'apps et des données Docker.",
            "La Carte du disque répond à une autre question : pas quel fichier, mais quel dossier. Elle montre la taille de chaque dossier à l'endroit choisi et permet d'en ouvrir un ; c'est le moyen le plus rapide de découvrir qu'un seul dossier de projet ou la Bibliothèque occupe la moitié du disque.",
          ],
        },
        {
          title: "Décider ce qu'on peut supprimer sans risque",
          content: [
            "Un gros fichier n'est pas forcément un déchet. Supprimez ce que vous reconnaissez et pouvez recréer ou dont vous n'avez plus besoin : un installateur, une vidéo exportée, une vieille archive. Laissez les fichiers qui appartiennent à des apps si vous ne savez pas ce qu'ils font ; les données d'apps se trouvent surtout dans la Bibliothèque, où [le nettoyage de la Bibliothèque et des restes](/blog/delete-app-leftovers-mac) explique ce qui se reconstruit.",
            "DiskMop envoie les fichiers à la Corbeille et refuse les dossiers système et l'intérieur des paquets d'apps ; une erreur reste donc réversible jusqu'au vidage. L'analyse est gratuite ; nettoyer beaucoup d'éléments à la fois fait partie de DiskMop Pro, un achat unique, et la version gratuite permet d'essayer quelques suppressions une par une. Pour les doublons, voir [comment trouver les fichiers en double sur Mac](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question:
            "Comment trouver des fichiers de plus d'une certaine taille sur Mac ?",
          answer:
            "Dans le Finder, appuyez sur Commande-F, choisissez Ce Mac, ajoutez le critère Taille du fichier et réglez-le sur est supérieur à, par exemple 500 Mo. Dans DiskMop, ouvrez Gros fichiers et doublons, réglez la taille minimale et analysez.",
        },
        {
          question: "Qu'est-ce que la taille minimale dans DiskMop ?",
          answer:
            "L'onglet Gros fichiers propose 50 Mo, 100 Mo, 250 Mo, 500 Mo et 1 Go. Une valeur plus haute ne montre que les plus gros fichiers et donne une liste plus courte.",
        },
        {
          question: "Que montre la Carte du disque ?",
          answer:
            "La taille de chaque dossier à l'endroit où vous regardez. Vous pouvez ouvrir un dossier pour voir son contenu, ce qui aide quand beaucoup de fichiers s'additionnent plutôt qu'un seul énorme.",
        },
        {
          question: "Est-il sûr de supprimer de gros fichiers ?",
          answer:
            "Oui pour les fichiers que vous reconnaissez et dont vous n'avez plus besoin. DiskMop les envoie à la Corbeille, vous pouvez les restaurer jusqu'au vidage, et il ne propose ni les dossiers système ni l'intérieur des apps.",
        },
      ],
      verdict: [
        "Le Finder et le Terminal savent trouver les gros fichiers, et les réglages Stockage donnent un aperçu par catégorie. Ils n'offrent pas une liste unique triée sur tout le disque avec un endroit pour vérifier et supprimer.",
        "DiskMop pour Mac liste les plus gros fichiers en premier, ajoute une Carte du disque pour les dossiers et envoie ce que vous retirez à la Corbeille. L'analyse est gratuite : vous voyez où est passé l'espace avant de décider.",
      ],
      ctaText: "Trouvez les plus gros fichiers de votre Mac avec DiskMop",
    },
    es: {
      title:
        "Cómo encontrar archivos grandes en tu Mac (y qué hacer con ellos)",
      metaDescription:
        "Encuentra lo que llena tu Mac con el Finder, los ajustes de Almacenamiento y Terminal, y usa la lista Archivos grandes y el Mapa del disco de DiskMop para mandar los más pesados a la Papelera.",
      subtitle:
        "Cuatro formas de ver los archivos más grandes, del Finder a una lista ordenada y un mapa del disco",
      intro: [
        "En resumen: en el Finder pulsa Comando-F, elige Este Mac, añade la regla Tamaño del archivo y ponla en es mayor que 500 MB. Para una lista ordenada de todo el disco, DiskMop para Mac tiene Grandes y duplicados > Archivos grandes, que pone los mayores primero, y un Mapa del disco que muestra qué carpetas pesan.",
        "Esta guía compara las opciones integradas, explica cómo leer una lista de archivos grandes sin borrar algo que necesitas y muestra cómo el tamaño mínimo y el mapa del disco encuentran gigas rápido.",
      ],
      keyTakeaways: [
        "El Finder puede buscar por tamaño: Comando-F, Este Mac y la regla Tamaño del archivo; los ajustes de Almacenamiento de macOS también listan archivos grandes en Documentos.",
        "En Terminal, find ~ -type f -size +500M lista los archivos de más de 500 MB de tu carpeta personal, y du -sh * | sort -h ordena por tamaño los elementos de la carpeta actual.",
        "La pestaña Archivos grandes de DiskMop pone los mayores primero, con un tamaño mínimo de 50 MB, 100 MB, 250 MB, 500 MB o 1 GB; la pestaña Mapa del disco muestra el tamaño de las carpetas para profundizar.",
        "Los archivos eliminados van a la Papelera y el espacio solo vuelve al vaciarla; los elementos de carpetas del sistema y de paquetes de apps nunca se ofrecen.",
      ],
      dataTable: {
        caption: "Formas de encontrar archivos grandes en un Mac",
        columns: ["Método", "Muestra", "Alcance", "Útil para"],
        rows: [
          [
            "Búsqueda del Finder (Comando-F)",
            "Archivos por encima de un tamaño elegido",
            "Este Mac o una carpeta",
            "Un vistazo rápido y puntual",
          ],
          [
            "Ajustes de Almacenamiento",
            "Archivos grandes en Documentos",
            "Tus archivos de usuario",
            "Una primera visión por categorías",
          ],
          [
            "Terminal: find y du",
            "Rutas y tamaños en texto",
            "Cualquier carpeta",
            "Quien prefiere la línea de comandos",
          ],
          [
            "DiskMop Archivos grandes y Mapa del disco",
            "Los mayores primero, tamaños de carpetas",
            "Tus archivos o un disco entero",
            "Lista ordenada con revisión y Papelera",
          ],
        ],
      },
      howTo: {
        name: "Encontrar y eliminar archivos grandes en el Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abre Grandes y duplicados",
            text: "Inicia DiskMop y elige Grandes y duplicados en la barra lateral. La primera pestaña es Archivos grandes.",
          },
          {
            name: "Elige el lugar y el tamaño mínimo",
            text: "Elige Mis archivos, un disco o Elegir carpeta, y pon el tamaño mínimo en 50 MB, 100 MB, 250 MB, 500 MB o 1 GB.",
          },
          {
            name: "Analiza y lee la lista",
            text: "Pulsa Analizar. Los archivos más grandes van primero, cada uno con su carpeta. Revisa la ruta antes de decidir.",
          },
          {
            name: "Usa el Mapa del disco para las carpetas",
            text: "Abre la pestaña Mapa del disco para ver el tamaño de cada carpeta del lugar actual, y abre una carpeta para mirar dentro.",
          },
          {
            name: "Mueve a la Papelera y vacíala",
            text: "Marca lo que ya no necesitas, pulsa Mover a la Papelera y confirma; después vacía la Papelera para recuperar el espacio.",
          },
        ],
      },
      sections: [
        {
          title: "Empieza con el Finder y los ajustes de Almacenamiento",
          content: [
            "En el Finder pulsa Comando-F, pon la búsqueda en Este Mac y en la primera regla elige Tamaño del archivo y es mayor que. Escribe 500 MB y obtienes todos los archivos por encima. Ordena por Tamaño para ver los mayores arriba. Puedes guardar la búsqueda como Carpeta inteligente y volver a ella.",
            "Los ajustes de Almacenamiento (Ajustes del Sistema > General > Almacenamiento) muestran cómo se reparte el espacio entre apps, documentos y otras categorías, y la entrada Documentos permite revisar archivos grandes y descargas. Es una buena visión general, pero se queda a nivel de categoría y no ordena cada archivo grande del disco.",
          ],
        },
        {
          title: "Unos pocos comandos de Terminal",
          content: [
            "find ~ -type f -size +500M imprime cada archivo de tu carpeta personal de más de 500 MB. En cualquier carpeta, du -sh * | sort -h lista sus elementos de menor a mayor, y las últimas líneas son las pesadas. Es fiable, pero lees texto plano y aún tienes que abrir cada carpeta para saber qué es un archivo.",
            "Cuidado con los comandos que borran. Listar es inofensivo; eliminar desde Terminal se salta por completo la Papelera.",
          ],
        },
        {
          title: "Archivos grandes y Mapa del disco en DiskMop",
          content: [
            "Archivos grandes analiza el lugar elegido y lista primero los archivos más grandes, hasta unos cientos, con la carpeta donde está cada uno. Sube el tamaño mínimo de 50 MB a 1 GB para reducir el ruido si solo te importan los gigantes. Hallazgos típicos: imágenes de disco antiguas, proyectos de vídeo, archivos de máquinas virtuales, cachés de apps y datos de Docker.",
            "El Mapa del disco responde a otra pregunta: no qué archivo, sino qué carpeta. Muestra el tamaño de cada carpeta del lugar actual y deja abrir una para mirar dentro, la forma más rápida de descubrir que una sola carpeta de proyecto o la Biblioteca ocupa media unidad.",
          ],
        },
        {
          title: "Decidir qué es seguro eliminar",
          content: [
            "Un archivo grande no es basura sin más. Elimina lo que reconoces y puedes recrear o ya no necesitas: un instalador, un vídeo exportado, un archivo antiguo. Deja los archivos que pertenecen a apps si no sabes qué hacen; los datos de apps suelen estar en Biblioteca, donde [la limpieza de Biblioteca y restos](/blog/delete-app-leftovers-mac) explica qué se regenera.",
            "DiskMop mueve los archivos a la Papelera y rechaza las carpetas del sistema y el interior de los paquetes de apps, así que un error se puede deshacer hasta que la vacíes. El análisis es gratuito; limpiar muchos elementos a la vez forma parte de DiskMop Pro, una compra única, y la versión gratuita permite probar unas pocas eliminaciones sueltas. Para duplicados, consulta [cómo encontrar archivos duplicados en el Mac](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿Cómo encuentro archivos de más de cierto tamaño en el Mac?",
          answer:
            "En el Finder pulsa Comando-F, elige Este Mac, añade la regla Tamaño del archivo y ponla en es mayor que, por ejemplo 500 MB. En DiskMop, abre Grandes y duplicados, ajusta el tamaño mínimo y analiza.",
        },
        {
          question: "¿Qué es el tamaño mínimo en DiskMop?",
          answer:
            "La pestaña Archivos grandes ofrece 50 MB, 100 MB, 250 MB, 500 MB y 1 GB. Un valor más alto muestra solo los archivos más grandes y una lista más corta.",
        },
        {
          question: "¿Qué muestra el Mapa del disco?",
          answer:
            "El tamaño de cada carpeta del lugar que estás mirando. Puedes abrir una carpeta para ver su contenido, algo útil cuando muchos archivos suman mucho en lugar de uno solo enorme.",
        },
        {
          question: "¿Es seguro eliminar archivos grandes?",
          answer:
            "Lo es para archivos que reconoces y ya no necesitas. DiskMop los mueve a la Papelera, así que puedes restaurarlos hasta que la vacíes, y no ofrece carpetas del sistema ni el interior de apps.",
        },
      ],
      verdict: [
        "El Finder y Terminal pueden encontrar archivos grandes, y Almacenamiento da una visión por categorías. Lo que no dan es una lista única ordenada de todo el disco con un lugar para revisar y eliminar.",
        "DiskMop para Mac lista primero los archivos más grandes, añade un Mapa del disco para las carpetas y mueve lo que quitas a la Papelera. El análisis es gratuito, así que ves adónde fue el espacio antes de decidir.",
      ],
      ctaText: "Encuentra los archivos más grandes de tu Mac con DiskMop",
    },
    it: {
      title: "Come trovare i file grandi sul Mac (e cosa farne)",
      metaDescription:
        "Trova ciò che riempie il Mac con il Finder, le impostazioni Archiviazione e il Terminale, poi usa l'elenco File grandi e la Mappa del disco di DiskMop per spostare i più pesanti nel Cestino.",
      subtitle:
        "Quattro modi per vedere i file più grandi, dal Finder a un elenco ordinato e a una mappa del disco",
      intro: [
        "In breve: nel Finder premi Comando-F, scegli Questo Mac, aggiungi il criterio Dimensione file e impostalo su è maggiore di 500 MB. Per un elenco ordinato su tutto il disco, DiskMop per Mac ha File grandi e duplicati > File grandi, che mette i più grandi in cima, e una Mappa del disco che mostra quali cartelle pesano.",
        "Questa guida confronta le opzioni integrate, spiega come leggere un elenco di file grandi senza eliminare ciò che serve e mostra come dimensione minima e mappa del disco trovino gigabyte in fretta.",
      ],
      keyTakeaways: [
        "Il Finder può cercare per dimensione: Comando-F, Questo Mac, poi il criterio Dimensione file; le impostazioni Archiviazione di macOS elencano i file grandi anche in Documenti.",
        "Nel Terminale, find ~ -type f -size +500M elenca i file oltre 500 MB nella cartella Home, e du -sh * | sort -h ordina per dimensione gli elementi della cartella corrente.",
        "La scheda File grandi di DiskMop mette i più grandi in cima, con dimensione minima di 50 MB, 100 MB, 250 MB, 500 MB o 1 GB; la scheda Mappa del disco mostra le dimensioni delle cartelle per scendere nel dettaglio.",
        "I file rimossi vanno nel Cestino e lo spazio torna solo dopo averlo svuotato; gli elementi nelle cartelle di sistema e nei pacchetti delle app non vengono mai proposti.",
      ],
      dataTable: {
        caption: "Modi per trovare file grandi su Mac",
        columns: ["Metodo", "Mostra", "Ambito", "Utile per"],
        rows: [
          [
            "Ricerca del Finder (Comando-F)",
            "File sopra una dimensione scelta",
            "Questo Mac o una cartella",
            "Uno sguardo rapido e occasionale",
          ],
          [
            "Impostazioni Archiviazione",
            "File grandi in Documenti",
            "I tuoi file utente",
            "Una prima panoramica per categorie",
          ],
          [
            "Terminale: find e du",
            "Percorsi e dimensioni in testo",
            "Qualsiasi cartella",
            "Chi ama la riga di comando",
          ],
          [
            "DiskMop File grandi e Mappa del disco",
            "I più grandi in cima, dimensioni delle cartelle",
            "I tuoi file o un intero disco",
            "Elenco ordinato con revisione e Cestino",
          ],
        ],
      },
      howTo: {
        name: "Trovare e rimuovere i file grandi su Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Apri File grandi e duplicati",
            text: "Avvia DiskMop e scegli File grandi e duplicati nella barra laterale. La prima scheda è File grandi.",
          },
          {
            name: "Scegli il posto e la dimensione minima",
            text: "Scegli I miei file, un disco o Scegli cartella, poi imposta la dimensione minima su 50 MB, 100 MB, 250 MB, 500 MB o 1 GB.",
          },
          {
            name: "Analizza e leggi l'elenco",
            text: "Premi Analizza. I file più grandi vengono per primi, ciascuno con la sua cartella. Controlla il percorso prima di decidere.",
          },
          {
            name: "Usa la Mappa del disco per le cartelle",
            text: "Apri la scheda Mappa del disco per vedere la dimensione di ogni cartella nel posto corrente e apri una cartella per guardarci dentro.",
          },
          {
            name: "Sposta nel Cestino e svuotalo",
            text: "Seleziona ciò che non ti serve più, premi Sposta nel Cestino e conferma, poi svuota il Cestino per recuperare lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Parti dal Finder e dalle impostazioni Archiviazione",
          content: [
            "Nel Finder premi Comando-F, imposta la ricerca su Questo Mac, poi nel primo criterio scegli Dimensione file e è maggiore di. Scrivi 500 MB e ottieni ogni file oltre quella soglia. Ordina per Dimensione per vedere i più grandi in alto. Puoi salvare la ricerca come Cartella smart e tornarci.",
            "Le impostazioni Archiviazione (Impostazioni di Sistema > Generali > Archiviazione) mostrano come lo spazio si divide tra app, documenti e altre categorie e la voce Documenti permette di rivedere file grandi e download. È una buona panoramica ma resta a livello di categoria e non ordina ogni file grande del disco.",
          ],
        },
        {
          title: "Qualche comando del Terminale",
          content: [
            "find ~ -type f -size +500M stampa ogni file nella cartella Home oltre 500 MB. In qualsiasi cartella, du -sh * | sort -h elenca gli elementi dal più piccolo al più grande, e le ultime righe sono i pesanti. È affidabile, ma leggi testo semplice e devi comunque aprire ogni cartella per capire cosa sia un file.",
            "Attenzione ai comandi che cancellano. Elencare è innocuo; rimuovere dal Terminale salta del tutto il Cestino.",
          ],
        },
        {
          title: "File grandi e Mappa del disco in DiskMop",
          content: [
            "File grandi scansiona il posto scelto ed elenca per primi i file più grandi, fino a qualche centinaio, con la cartella in cui si trova ciascuno. Alza la dimensione minima da 50 MB a 1 GB per ridurre il rumore se ti interessano solo i giganti. Trovi spesso vecchie immagini disco, progetti video, file di macchine virtuali, cache di app e dati Docker.",
            "La Mappa del disco risponde a un'altra domanda: non quale file, ma quale cartella. Mostra la dimensione di ogni cartella nel posto corrente e permette di aprirne una per guardare dentro, il modo più rapido per scoprire che una sola cartella di progetto o la Libreria occupa metà disco.",
          ],
        },
        {
          title: "Decidere cosa si può rimuovere in sicurezza",
          content: [
            "Un file grande non è automaticamente spazzatura. Elimina ciò che riconosci e puoi ricreare o non ti serve più: un installer, un video esportato, un vecchio archivio. Lascia stare i file che appartengono alle app se non sai cosa fanno; i dati delle app stanno di solito nella Libreria, dove [la pulizia di Libreria e residui](/blog/delete-app-leftovers-mac) spiega cosa si rigenera.",
            "DiskMop sposta i file nel Cestino e rifiuta le cartelle di sistema e l'interno dei pacchetti delle app, quindi un errore è reversibile finché non lo svuoti. La scansione è gratuita; pulire molti elementi insieme fa parte di DiskMop Pro, un acquisto una tantum, e la versione gratuita permette di provare alcune rimozioni singole. Per i duplicati, vedi [come trovare i file duplicati su Mac](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Come trovo i file oltre una certa dimensione sul Mac?",
          answer:
            "Nel Finder premi Comando-F, scegli Questo Mac, aggiungi il criterio Dimensione file e impostalo su è maggiore di, per esempio 500 MB. In DiskMop apri File grandi e duplicati, imposta la dimensione minima e scansiona.",
        },
        {
          question: "Cos'è la dimensione minima in DiskMop?",
          answer:
            "La scheda File grandi offre 50 MB, 100 MB, 250 MB, 500 MB e 1 GB. Un valore più alto mostra solo i file più grandi e un elenco più corto.",
        },
        {
          question: "Cosa mostra la Mappa del disco?",
          answer:
            "La dimensione di ogni cartella nel posto che stai guardando. Puoi aprire una cartella per vedere cosa contiene, utile quando tanti file sommati pesano molto invece di uno solo enorme.",
        },
        {
          question: "È sicuro eliminare i file grandi?",
          answer:
            "Lo è per i file che riconosci e non ti servono più. DiskMop li sposta nel Cestino, quindi puoi ripristinarli finché non lo svuoti, e non propone cartelle di sistema né l'interno delle app.",
        },
      ],
      verdict: [
        "Finder e Terminale possono trovare file grandi e Archiviazione dà una panoramica per categorie. Non offrono un unico elenco ordinato su tutto il disco con un posto dove rivedere e rimuovere.",
        "DiskMop per Mac elenca per primi i file più grandi, aggiunge una Mappa del disco per le cartelle e sposta ciò che rimuovi nel Cestino. La scansione è gratuita, così vedi dove è finito lo spazio prima di decidere.",
      ],
      ctaText: "Trova i file più grandi del tuo Mac con DiskMop",
    },
    pt: {
      title: "Como encontrar arquivos grandes no Mac (e o que fazer com eles)",
      metaDescription:
        "Descubra o que enche o Mac com Finder, ajustes de Armazenamento e Terminal, e use a lista Arquivos grandes e o Mapa do disco do DiskMop para mandar os maiores para o Lixo.",
      subtitle:
        "Quatro formas de ver os maiores arquivos, do Finder a uma lista ordenada e a um mapa do disco",
      intro: [
        "Resumindo: no Finder, pressione Comando-F, escolha Este Mac, adicione a regra Tamanho do arquivo e defina como é maior que 500 MB. Para uma lista ordenada de todo o disco, o DiskMop para Mac tem Grandes e duplicados > Arquivos grandes, que mostra os maiores primeiro, e um Mapa do disco que indica quais pastas pesam.",
        "Este guia compara as opções integradas, explica como ler uma lista de arquivos grandes sem apagar algo de que você precisa e mostra como o tamanho mínimo e o mapa do disco encontram gigabytes rapidamente.",
      ],
      keyTakeaways: [
        "O Finder pode buscar por tamanho: Comando-F, Este Mac e a regra Tamanho do arquivo; os ajustes de Armazenamento do macOS também listam arquivos grandes em Documentos.",
        "No Terminal, find ~ -type f -size +500M lista arquivos acima de 500 MB na sua pasta pessoal, e du -sh * | sort -h ordena por tamanho os itens da pasta atual.",
        "A aba Arquivos grandes do DiskMop mostra os maiores primeiro, com tamanho mínimo de 50 MB, 100 MB, 250 MB, 500 MB ou 1 GB; a aba Mapa do disco mostra o tamanho das pastas para você aprofundar.",
        "Arquivos removidos vão para o Lixo e o espaço só volta depois de esvaziá-lo; itens em pastas do sistema e em pacotes de apps nunca são oferecidos.",
      ],
      dataTable: {
        caption: "Formas de encontrar arquivos grandes no Mac",
        columns: ["Método", "Mostra", "Alcance", "Bom para"],
        rows: [
          [
            "Busca do Finder (Comando-F)",
            "Arquivos acima de um tamanho escolhido",
            "Este Mac ou uma pasta",
            "Uma olhada rápida e pontual",
          ],
          [
            "Ajustes de Armazenamento",
            "Arquivos grandes em Documentos",
            "Seus arquivos de usuário",
            "Uma primeira visão por categoria",
          ],
          [
            "Terminal: find e du",
            "Caminhos e tamanhos em texto",
            "Qualquer pasta",
            "Quem gosta da linha de comando",
          ],
          [
            "DiskMop Arquivos grandes e Mapa do disco",
            "Maiores primeiro, tamanhos de pastas",
            "Seus arquivos ou um disco inteiro",
            "Lista ordenada com revisão e Lixo",
          ],
        ],
      },
      howTo: {
        name: "Encontrar e remover arquivos grandes no Mac com o DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Abra Grandes e duplicados",
            text: "Inicie o DiskMop e escolha Grandes e duplicados na barra lateral. A primeira aba é Arquivos grandes.",
          },
          {
            name: "Escolha o local e o tamanho mínimo",
            text: "Escolha Meus arquivos, um disco ou Escolher pasta e defina o tamanho mínimo como 50 MB, 100 MB, 250 MB, 500 MB ou 1 GB.",
          },
          {
            name: "Verifique e leia a lista",
            text: "Clique em Verificar. Os maiores arquivos vêm primeiro, cada um com sua pasta. Confira o caminho antes de decidir.",
          },
          {
            name: "Use o Mapa do disco para as pastas",
            text: "Abra a aba Mapa do disco para ver o tamanho de cada pasta no local atual e abra uma pasta para olhar dentro.",
          },
          {
            name: "Mova para o Lixo e esvazie",
            text: "Marque o que não precisa mais, clique em Mover para a Lixeira e confirme; depois esvazie o Lixo para recuperar o espaço.",
          },
        ],
      },
      sections: [
        {
          title: "Comece pelo Finder e pelos ajustes de Armazenamento",
          content: [
            "No Finder, pressione Comando-F, defina a busca como Este Mac e, na primeira regra, escolha Tamanho do arquivo e é maior que. Digite 500 MB e você obtém todos os arquivos acima disso. Ordene por Tamanho para ver os maiores no topo. Dá para salvar a busca como Pasta Inteligente e voltar a ela.",
            "Os ajustes de Armazenamento (Ajustes do Sistema > Geral > Armazenamento) mostram como o espaço se divide entre apps, documentos e outras categorias, e a entrada Documentos permite revisar arquivos grandes e downloads. É uma boa visão geral, mas fica no nível de categoria e não ordena cada arquivo grande do disco.",
          ],
        },
        {
          title: "Alguns comandos do Terminal",
          content: [
            "find ~ -type f -size +500M imprime cada arquivo da sua pasta pessoal acima de 500 MB. Em qualquer pasta, du -sh * | sort -h lista os itens do menor para o maior, e as últimas linhas são os pesados. É confiável, mas você lê texto simples e ainda precisa abrir cada pasta para saber o que é um arquivo.",
            "Cuidado com comandos que apagam. Listar é inofensivo; remover pelo Terminal pula o Lixo por completo.",
          ],
        },
        {
          title: "Arquivos grandes e Mapa do disco no DiskMop",
          content: [
            "Arquivos grandes verifica o local escolhido e lista primeiro os maiores arquivos, até algumas centenas, com a pasta onde cada um está. Aumente o tamanho mínimo de 50 MB para 1 GB para reduzir o ruído se só os gigantes interessam. Achados típicos: imagens de disco antigas, projetos de vídeo, arquivos de máquinas virtuais, caches de apps e dados do Docker.",
            "O Mapa do disco responde a outra pergunta: não qual arquivo, mas qual pasta. Mostra o tamanho de cada pasta no local atual e deixa abrir uma para olhar dentro, a forma mais rápida de descobrir que uma única pasta de projeto ou a Biblioteca ocupa metade do disco.",
          ],
        },
        {
          title: "Decidir o que é seguro remover",
          content: [
            "Um arquivo grande não é lixo automaticamente. Apague o que você reconhece e pode recriar ou não precisa mais: um instalador, um vídeo exportado, um arquivo compactado antigo. Deixe os arquivos que pertencem a apps se não souber o que fazem; dados de apps costumam ficar na Biblioteca, onde [a limpeza de Biblioteca e restos](/blog/delete-app-leftovers-mac) explica o que se regenera.",
            "O DiskMop move arquivos para o Lixo e recusa pastas do sistema e o interior de pacotes de apps, então um erro é reversível até você esvaziá-lo. A verificação é gratuita; limpar muitos itens de uma vez faz parte do DiskMop Pro, uma compra única, e a versão gratuita permite testar algumas remoções individuais. Para duplicados, veja [como encontrar arquivos duplicados no Mac](/blog/find-duplicate-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Como encontro arquivos acima de certo tamanho no Mac?",
          answer:
            "No Finder, pressione Comando-F, escolha Este Mac, adicione a regra Tamanho do arquivo e defina como é maior que, por exemplo 500 MB. No DiskMop, abra Grandes e duplicados, ajuste o tamanho mínimo e verifique.",
        },
        {
          question: "O que é o tamanho mínimo no DiskMop?",
          answer:
            "A aba Arquivos grandes oferece 50 MB, 100 MB, 250 MB, 500 MB e 1 GB. Um valor maior mostra só os maiores arquivos e uma lista mais curta.",
        },
        {
          question: "O que o Mapa do disco mostra?",
          answer:
            "O tamanho de cada pasta no local em que você está olhando. Você pode abrir uma pasta para ver o conteúdo, útil quando muitos arquivos somam muito em vez de um só enorme.",
        },
        {
          question: "É seguro excluir arquivos grandes?",
          answer:
            "É seguro para arquivos que você reconhece e não precisa mais. O DiskMop os move para o Lixo, então você pode restaurá-los até esvaziá-lo, e não oferece pastas do sistema nem o interior de apps.",
        },
      ],
      verdict: [
        "Finder e Terminal encontram arquivos grandes, e Armazenamento dá uma visão por categorias. O que não oferecem é uma lista única ordenada de todo o disco com um lugar para revisar e remover.",
        "O DiskMop para Mac lista os maiores arquivos primeiro, acrescenta um Mapa do disco para as pastas e move o que você remove para o Lixo. A verificação é gratuita, então você vê para onde o espaço foi antes de decidir.",
      ],
      ctaText: "Encontre os maiores arquivos do seu Mac com o DiskMop",
    },
    ja: {
      title: "Macで大きなファイルを見つける方法（見つけたらどうするか）",
      metaDescription:
        "Finder、ストレージ設定、ターミナルでMacを圧迫しているものを探し、DiskMopの「大きなファイル」リストとディスクマップで最大のファイルやフォルダを見つけてゴミ箱へ移します。",
      subtitle:
        "最大のファイルを見る4つの方法：Finderから、サイズ順リスト、ディスクマップまで",
      intro: [
        "結論から言うと、FinderでCommand-Fを押し、「このMac」を選び、「ファイルサイズ」の条件を追加して「500MBより大きい」に設定します。ドライブ全体をサイズ順に見たい場合、Mac版DiskMopの「大きなファイルと重複」>「大きなファイル」が大きい順に一覧し、ディスクマップでどのフォルダが重いかを確認できます。",
        "このガイドでは、標準の方法を比較し、必要なものを消さずに大きなファイルの一覧を読む方法と、最小サイズとディスクマップで数GBを素早く見つける方法を説明します。",
      ],
      keyTakeaways: [
        "Finderはサイズで検索できます。Command-F、「このMac」、「ファイルサイズ」の条件の順です。macOSのストレージ設定でも「書類」の下に大きなファイルが表示されます。",
        "ターミナルでは、find ~ -type f -size +500M でホームフォルダ内の500MB超のファイルを一覧でき、du -sh * | sort -h で現在のフォルダの項目をサイズ順に並べられます。",
        "DiskMopの「大きなファイル」タブは大きい順に表示し、最小サイズは50MB、100MB、250MB、500MB、1GBから選べます。「ディスクマップ」タブはフォルダのサイズを示し、中へ掘り下げられます。",
        "取り除いたファイルはゴミ箱へ移り、容量はゴミ箱を空にして初めて戻ります。システムフォルダやアプリパッケージ内の項目は表示されません。",
      ],
      dataTable: {
        caption: "Macで大きなファイルを見つける方法",
        columns: ["方法", "表示されるもの", "範囲", "向いている用途"],
        rows: [
          [
            "Finder検索（Command-F）",
            "指定サイズ以上のファイル",
            "このMacまたはフォルダ",
            "手早い一度きりの確認",
          ],
          [
            "ストレージ設定",
            "「書類」の下の大きなファイル",
            "ユーザのファイル",
            "カテゴリ別の最初の概観",
          ],
          [
            "ターミナル：findとdu",
            "パスとサイズをテキストで",
            "任意のフォルダ",
            "コマンドラインを好む人",
          ],
          [
            "DiskMopの「大きなファイル」とディスクマップ",
            "大きい順、フォルダごとのサイズ",
            "マイファイルまたはドライブ全体",
            "確認とゴミ箱付きの順位リスト",
          ],
        ],
      },
      howTo: {
        name: "DiskMopでMacの大きなファイルを見つけて削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "「大きなファイルと重複」を開く",
            text: "DiskMopを起動し、サイドバーで「大きなファイルと重複」を選びます。最初のタブが「大きなファイル」です。",
          },
          {
            name: "場所と最小サイズを選ぶ",
            text: "「マイファイル」、ドライブ、または「フォルダーを選択」を選び、最小サイズを50MB、100MB、250MB、500MB、1GBのいずれかに設定します。",
          },
          {
            name: "スキャンして一覧を読む",
            text: "「スキャン」を押します。最大のファイルから順に、それぞれのフォルダとともに表示されます。判断する前にパスを確認してください。",
          },
          {
            name: "フォルダにはディスクマップを使う",
            text: "「ディスクマップ」タブを開くと、現在の場所にある各フォルダのサイズが分かります。フォルダを開いて中身を見ることもできます。",
          },
          {
            name: "ゴミ箱へ移して空にする",
            text: "不要なものにチェックを入れ、「ゴミ箱に入れる」を押して確定し、容量を取り戻すためにゴミ箱を空にします。",
          },
        ],
      },
      sections: [
        {
          title: "まずFinderとストレージ設定から",
          content: [
            "FinderでCommand-Fを押し、検索範囲を「このMac」にして、最初の条件で「ファイルサイズ」と「より大きい」を選びます。500MBと入力すると、それを超えるすべてのファイルが出ます。「サイズ」で並べ替えれば大きなものが上に来ます。検索はスマートフォルダとして保存し、後で開き直せます。",
            "ストレージ設定（システム設定>一般>ストレージ）では、容量がアプリ、書類、その他のカテゴリにどう分かれているかが分かり、「書類」の項目で大きなファイルやダウンロードを確認できます。全体像をつかむには便利ですが、カテゴリ単位にとどまり、ディスク上の大きなファイルをすべて順位付けするわけではありません。",
          ],
        },
        {
          title: "いくつかのターミナルコマンド",
          content: [
            "find ~ -type f -size +500M は、ホームフォルダ内の500MBを超えるすべてのファイルを表示します。任意のフォルダで du -sh * | sort -h を実行すると、項目が小さい順に並び、最後の数行が重いものです。確実ですが、テキストを読む形で、ファイルが何なのかは各フォルダを開いて判断する必要があります。",
            "削除するコマンドには注意してください。一覧表示は無害ですが、ターミナルからの削除はゴミ箱を完全に飛ばします。",
          ],
        },
        {
          title: "DiskMopの「大きなファイル」とディスクマップ",
          content: [
            "「大きなファイル」は選んだ場所をスキャンし、数百件までを大きい順に、それぞれが置かれているフォルダとともに一覧します。巨大なものだけが気になるなら、最小サイズを50MBから1GBに上げてノイズを減らします。古いディスクイメージ、動画プロジェクト、仮想マシンのファイル、アプリのキャッシュ、Dockerのデータなどがよく見つかります。",
            "ディスクマップは別の問いに答えます。どのファイルかではなく、どのフォルダか。現在の場所にある各フォルダのサイズを示し、開いて中を見られるので、1つのプロジェクトフォルダやライブラリがドライブの半分を占めていると最も早く分かります。",
          ],
        },
        {
          title: "安全に削除できるものの見分け方",
          content: [
            "大きなファイルが自動的にごみというわけではありません。見覚えがあり、再作成できるか不要なもの（インストーラ、書き出した動画、古いアーカイブなど）を削除します。アプリに属するファイルは、何をするものか分からなければ触らないでください。アプリのデータは通常ライブラリにあり、再生成できるものは[ライブラリと残骸の整理](/blog/delete-app-leftovers-mac)で説明しています。",
            "DiskMopはファイルをゴミ箱へ移し、システムフォルダとアプリパッケージ内部は受け付けないため、空にするまでは間違いを取り消せます。スキャンは無料で、多数の項目をまとめて整理するのは買い切りのDiskMop Proの機能です。無料版では1件ずつの削除を数回試せます。重複については[Macで重複ファイルを見つける方法](/blog/find-duplicate-files-mac)を参照してください。",
          ],
        },
      ],
      faq: [
        {
          question: "Macで一定サイズ以上のファイルを見つけるには？",
          answer:
            "FinderでCommand-Fを押し、「このMac」を選び、「ファイルサイズ」の条件を追加して「より大きい」に設定します（例：500MB）。DiskMopでは「大きなファイルと重複」を開き、最小サイズを設定してスキャンします。",
        },
        {
          question: "DiskMopの最小サイズとは？",
          answer:
            "「大きなファイル」タブでは50MB、100MB、250MB、500MB、1GBから選べます。値を大きくするほど、最大級のファイルだけの短いリストになります。",
        },
        {
          question: "ディスクマップには何が表示されますか？",
          answer:
            "見ている場所にある各フォルダのサイズです。フォルダを開いて中身を確認でき、1つの巨大なファイルではなく多数のファイルが合計で大きいときに役立ちます。",
        },
        {
          question: "大きなファイルを削除しても安全ですか？",
          answer:
            "見覚えがあり不要なファイルなら安全です。DiskMopはそれらをゴミ箱へ移すので、空にするまで復元でき、システムフォルダやアプリ内部は候補に出しません。",
        },
      ],
      verdict: [
        "Finderとターミナルでも大きなファイルは見つかり、ストレージ設定でカテゴリ別の概観も得られます。ただし、ドライブ全体を1つの順位リストにして、確認と削除まで行える場所はありません。",
        "Mac版DiskMopは最大のファイルから順に並べ、フォルダ用のディスクマップを加え、取り除いたものをゴミ箱へ移します。スキャンは無料なので、何を決める前でも容量の行き先を確認できます。",
      ],
      ctaText: "DiskMopでMacの最大のファイルを見つける",
    },
  },
};
