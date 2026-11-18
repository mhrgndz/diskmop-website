import type { Article } from "../types";

export const clearThumbnailCacheWindows: Article = {
  slug: "clear-thumbnail-cache-windows",
  type: "guide",
  category: "Windows Tips",
  date: "2026-11-18",
  updated: "2026-11-18",
  readingTime: 5,
  content: {
    "tr": {
      "title": "Windows 11 ve 10'da Küçük Resim Önbelleği Nasıl Temizlenir (Yanlış veya Eksik Küçük Resimleri Düzeltin)",
      "metaDescription": "Dosya Gezgini'nde küçük resimler boş, yanlış veya yavaş mı? thumbcache dosyalarının ne olduğunu, Windows küçük resim önbelleğini güvenle silmeyi öğrenin.",
      "subtitle": "Dosya Gezgini önizlemelerinin ve simgelerinin arkasındaki gizli veritabanını sıfırlayın",
      "keyTakeaways": [
        "Windows; resimlerinizin, videolarınızın ve belgelerinizin önizlemelerini thumbcache_*.db dosyalarında, simgeleri ise %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer klasöründeki iconcache_*.db dosyalarında saklar.",
        "Bu dosyaları silmek güvenlidir: Windows, klasörlere göz attıkça bunları yeniden oluşturur ve yalnızca her klasörün ilk açılışı biraz daha yavaş olur.",
        "Önbelleği temizlemek boş, siyah, eski veya yanlış küçük resimleri ve simgeleri düzeltir, ayrıca önbelleğin kapladığı alanı geri kazandırır."
      ],
      "dataTable": {
        "caption": "Explorer klasöründeki küçük resim ve simge önbelleği dosyaları",
        "columns": [
          "Dosya deseni",
          "İçeriği",
          "Otomatik olarak yeniden oluşturulur mu?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Liste ve ayrıntı görünümünde kullanılan küçük önizlemeler",
            "Evet"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Simge görünümünde kullanılan orta ve büyük önizlemeler",
            "Evet"
          ],
          [
            "thumbcache_idx.db ve diğer thumbcache_*.db dosyaları",
            "Önizleme veritabanının dizini ve ek boyutları",
            "Evet"
          ],
          [
            "iconcache_*.db",
            "Önbelleğe alınmış program ve dosya türü simgeleri",
            "Evet"
          ]
        ]
      },
      "howTo": {
        "name": "Windows'ta küçük resim önbelleği nasıl temizlenir",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Disk Temizleme'yi açın",
            "text": "Başlat menüsünde Disk Temizleme'yi aratın ve sistem sürücünüzü seçin. Silinebilecek öğeler hesaplanırken bekleyin."
          },
          {
            "name": "Küçük resimler seçeneğini işaretleyin",
            "text": "Silinecek dosyalar listesinde Küçük resimler seçeneğini işaretleyin. Yalnızca önizleme önbelleğini temizlemek istiyorsanız diğer öğelerin işaretini kaldırabilirsiniz."
          },
          {
            "name": "Temizlemeyi onaylayın",
            "text": "Tamam'ı ve ardından Dosyaları Sil'i seçin. Windows küçük resim veritabanını kaldırır ve klasörleri açtıkça yeniden oluşturur."
          },
          {
            "name": "Küçük resimler hâlâ yanlışsa elle sıfırlayın",
            "text": "Tüm Dosya Gezgini pencerelerini kapatın, Görev Yöneticisi'ni açın, Windows Gezgini'ni yeniden başlatın, ardından %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer klasöründeki thumbcache_*.db ve iconcache_*.db dosyalarını silip klasörlerinizi yeniden açın."
          },
          {
            "name": "Ya da Disk Mop ile temizleyin",
            "text": "Disk Mop'u açın, Yer aç sayfasına gidin, taramayı çalıştırın ve Küçük resim önbelleği öğesini işaretleyin. Boyutu kontrol edip onaylayın."
          }
        ]
      },
      "faq": [
        {
          "question": "thumbcache dosyalarını silmek güvenli mi?",
          "answer": "Evet. thumbcache dosyası, Windows'un özgün resimlerinizden, videolarınızdan ve belgelerinizden yeniden üretebildiği önizlemelerin bir kopyasıdır. Silmek hiçbir dosyanızı kaldırmaz veya değiştirmez."
        },
        {
          "question": "Dosya Gezgini'nde küçük resimlerim neden siyah, boş veya yanlış?",
          "answer": "Önbellek bir veritabanıdır ve örneğin bir çökmeden, disk hatasından ya da dosyaları Windows'un fark etmeden değiştiren bir programdan sonra bozulabilir veya eskiyebilir. Windows da önbellek temizlenene kadar bozuk önizlemeyi göstermeye devam eder."
        },
        {
          "question": "Küçük resim önbelleği dosyalarını neden doğrudan silemiyorum?",
          "answer": "Dosya Gezgini çalışırken thumbcache dosyalarını açık tutar, bu yüzden Windows bazılarının silinmesini reddeder. Disk Temizleme'yi kullanın ya da dosyaları silmeden önce Dosya Gezgini pencerelerini kapatıp Windows Gezgini'ni yeniden başlatın."
        },
        {
          "question": "Küçük resim önbelleği ne kadar yer kaplar?",
          "answer": "Ne kadar resim ve video gezdiğinize bağlıdır. Tipik bir bilgisayarda küçük resim ve simge önbelleği dosyaları yaklaşık 100 MB ile birkaç yüz megabayt arasındadır; geniş bir fotoğraf arşivi bu değeri daha da artırabilir."
        }
      ],
      "intro": [
        "Windows küçük resim önbelleği, %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer klasöründeki thumbcache_*.db ve iconcache_*.db adlı gizli veritabanı dosyalarından oluşur. Dosya Gezgini, resim dolu klasörlerin hızlı açılması için önizlemeleri bu dosyalardan okur. Bunları silmek güvenlidir: Windows gezindikçe yeniden oluşturur; temizlemek boş, siyah veya eski küçük resimleri düzeltir ve kapladıkları alanı geri verir.",
        "Bu rehber önbelleğin neleri tuttuğunu, neden bozulduğunu, Disk Temizleme ile, elle veya Disk Mop ile nasıl temizleneceğini ve sonrasında neyle karşılaşacağınızı anlatır. Tek görünür etki, bir sonraki açışınızda klasörlerin önizlemelerinin bir kereliğine biraz daha yavaş yüklenmesidir."
      ],
      "sections": [
        {
          "title": "Küçük Resim Önbelleği Nedir",
          "content": [
            "Dosya Gezgini'nde fotoğraf veya video klasörü açtığınızda Windows her seferinde her görüntünün kodunu çözmez. Küçük bir önizlemeyi bir kez oluşturur ve bir önbellek veritabanında saklar. Klasörü bir dahaki açışınızda önizlemeleri bu veritabanından okur; büyük bir klasörün hızlı açılmasının nedeni budur.",
            "Önizleme veritabanları, tuttukları önizleme boyutuna göre adlandırılan thumbcache_*.db dosyalarıdır; örneğin thumbcache_96.db, thumbcache_256.db ve thumbcache_1024.db, dizin ise thumbcache_idx.db dosyasıdır. Programların ve dosya türlerinin simgeleri iconcache_*.db dosyalarında tutulur. Hepsi yerel AppData altındaki Explorer klasöründe bulunur.",
            "Veritabanları yalnızca önizleme kopyaları olduğundan, özgün dosyalarınızdan istediğiniz an yeniden oluşturulabilir."
          ]
        },
        {
          "title": "Küçük Resimler Neden Bozulur",
          "content": [
            "Önbellek, yazıldığı andaki kadar iyidir. Veritabanı güncellenirken Windows çökerse, bir disk hatası onu bozarsa ya da bir program Explorer'a haber vermeden dosyaları değiştirirse, veritabanında yanlış veya boş bir önizleme kalabilir. Dosyanın kendisi sağlam olsa da Explorer bozuk küçük resmi göstermeye devam eder.",
            "Olağan belirtiler siyah veya boş küçük resimler, resim olması gereken yerde genel bir simge, dosyayla uyuşmayan eski bir önizleme ya da önizlemeleri geç gösteren bir klasördür. Varsayılan uygulamayı değiştirdikten sonra yanlış görünen simgeler simge önbelleğine işaret eder.",
            "Önbelleği temizlemek Windows'u önizlemeleri dosyalardan yeniden oluşturmaya zorlar ve bunların hepsini düzeltir."
          ]
        },
        {
          "title": "Önbelleği Disk Temizleme ile Silin",
          "content": [
            "En kolay yol Disk Temizleme'dir; çünkü Dosya Gezgini'nin açık tuttuğu dosyaları da kaldırabilir. Disk Temizleme'yi aratın, sistem sürücünüzü seçin, Küçük resimler seçeneğini işaretleyin ve Dosyaları Sil'i seçin. Yalnızca önizlemelerin temizlenmesini istiyorsanız diğer öğelerin işaretini kaldırabilirsiniz.",
            "Windows 11 bunu ayrıca Ayarlar > Sistem > Depolama > Geçici dosyalar bölümünde sunar; Küçük resimler, kaldırabileceğiniz öğeler listesinde görünür.",
            "Temizlikten sonra resim dolu bir klasör açın. Windows önizlemeleri yeniden oluştururken ilk açılış biraz yavaştır, sonraki açılışlar yine hızlıdır."
          ]
        },
        {
          "title": "Önbelleği Elle Sıfırlayın",
          "content": [
            "Disk Temizleme'den sonra bir küçük resim yanlış kalıyorsa dosyaları kendiniz silin. Tüm Dosya Gezgini pencerelerini kapatın, Görev Yöneticisi'ni açın, Windows Gezgini'ni bulun ve Yeniden başlat'ı seçin. Ardından adres çubuğunda %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer klasörünü açın, gizli öğeleri gösterin ve thumbcache_ ile iconcache_ ile başlayan dosyaları silin.",
            "Windows'un hâlâ açık tuttuğu dosyalar atlanır; oturumu kapatıp yeniden açtıktan sonra bunları tekrar silin. Explorer klasörünün kendisini veya içindeki diğer dosyaları silmeyin.",
            "Sonra klasörlerinizi yeniden açın ve önizlemelerin yeniden oluşmasını bekleyin."
          ]
        },
        {
          "title": "Disk Mop ile Temizleyin",
          "content": [
            "Disk Mop'un Yer aç sayfası, Küçük resim önbelleği öğesini boyutuyla ve temizlemenin ne yaptığını anlatan kısa bir açıklamayla listeler. Explorer klasöründeki thumbcache_ ve iconcache_ veritabanı dosyalarını kapsar, o klasördeki başka hiçbir şeyi kapsamaz.",
            "Taramayı çalıştırın, öğeyi işaretleyin ve onaylayın. Disk Mop bir şeyi silmeden önce bulduklarını gösterir ve tarama ücretsizdir; böylece önce boyutu görebilirsiniz. Explorer'ın açık tuttuğu dosyalar atlanır, bu yüzden başlamadan önce fazla Explorer pencerelerini kapatın.",
            "Küçük resim önbelleği, aynı sayfadaki güvenle temizlenebilen birkaç önbellekten yalnızca biridir; böylece geçici dosyaları ve tarayıcı önbelleklerini de aynı seferde temizleyebilirsiniz."
          ]
        }
      ],
      "verdict": [
        "Windows küçük resim önbelleği, yeniden oluşturulabilen bir önizleme ve simge veritabanları kümesidir. Disk Temizleme ile veya elle temizlemek boş, siyah ya da yanlış küçük resimleri düzeltir ve biraz alan kazandırır; tek bedel her klasörün ilk açılışının daha yavaş olmasıdır.",
        "Disk Mop, Küçük resim önbelleğini diğer güvenli önbelleklerin yanında listeler, boyutunu gösterir ve silmeden önce sorar. Tarama ücretsizdir; böylece karar vermeden önce boyutu görebilirsiniz."
      ],
      "ctaText": "Küçük resim önbelleğini ve diğer güvenli önbellekleri Disk Mop ile temizleyin"
    },
    "en": {
      "title": "How to Clear the Thumbnail Cache in Windows 11 and 10 (Fix Wrong or Missing Thumbnails)",
      "metaDescription": "Thumbnails blank, wrong or slow in File Explorer? Learn what thumbcache files are, how to delete the Windows thumbnail cache safely and rebuild it in minutes.",
      "subtitle": "Reset the hidden database behind File Explorer previews and icons",
      "keyTakeaways": [
        "Windows stores previews of your pictures, videos and documents in thumbcache_*.db files and icons in iconcache_*.db files inside %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Deleting these files is safe: Windows rebuilds them as you browse folders, and only the first view of each folder is slower.",
        "Clearing the cache fixes blank, black, outdated or wrong thumbnails and icons, and also returns the space the cache had taken."
      ],
      "dataTable": {
        "caption": "Thumbnail and icon cache files in the Explorer folder",
        "columns": [
          "File pattern",
          "What it holds",
          "Rebuilt automatically?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Small previews used in lists and details view",
            "Yes"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Medium and large previews used in icon view",
            "Yes"
          ],
          [
            "thumbcache_idx.db and other thumbcache_*.db files",
            "Index and extra sizes for the preview database",
            "Yes"
          ],
          [
            "iconcache_*.db",
            "Cached program and file-type icons",
            "Yes"
          ]
        ]
      },
      "howTo": {
        "name": "How to clear the thumbnail cache in Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Open Disk Cleanup",
            "text": "Search for Disk Cleanup in the Start menu and choose your system drive. Wait while it calculates what can be removed."
          },
          {
            "name": "Tick Thumbnails",
            "text": "In the list of files to delete, tick Thumbnails. You can untick the other items if you only want the preview cache cleared."
          },
          {
            "name": "Confirm the cleanup",
            "text": "Choose OK and then Delete Files. Windows removes the thumbnail database and rebuilds it as you open folders."
          },
          {
            "name": "Reset it by hand if thumbnails are still wrong",
            "text": "Close all File Explorer windows, open Task Manager, restart Windows Explorer, then delete the thumbcache_*.db and iconcache_*.db files in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer and open your folders again."
          },
          {
            "name": "Or clear it with Disk Mop",
            "text": "Open Disk Mop, go to Free up space, run the scan and tick Thumbnail cache. Check the size and confirm."
          }
        ]
      },
      "faq": [
        {
          "question": "Is it safe to delete thumbcache files?",
          "answer": "Yes. A thumbcache file is a copy of previews that Windows can generate again from your original pictures, videos and documents. Deleting it does not remove or change any of your files."
        },
        {
          "question": "Why are my thumbnails black, blank or wrong in File Explorer?",
          "answer": "The cache is a database, and it can become corrupted or out of date, for example after a crash, a disk error or a program that changed files without Windows noticing. Windows then keeps showing the broken preview until the cache is cleared."
        },
        {
          "question": "Why can't I delete the thumbnail cache files directly?",
          "answer": "File Explorer keeps the thumbcache files open while it runs, so Windows refuses to delete some of them. Use Disk Cleanup, or close File Explorer windows and restart Windows Explorer before you delete the files."
        },
        {
          "question": "How big is the thumbnail cache?",
          "answer": "It depends on how many pictures and videos you have browsed. A typical PC has between about 100 MB and a few hundred megabytes of thumbnail and icon cache files, and a large photo library can push it higher."
        }
      ],
      "intro": [
        "The Windows thumbnail cache is a set of hidden database files, thumbcache_*.db and iconcache_*.db, in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. File Explorer reads previews from them so folders full of pictures open quickly. They are safe to delete: Windows rebuilds them as you browse, and clearing them fixes blank, black or outdated thumbnails and returns the space they used.",
        "This guide explains what the cache holds, why it goes wrong, how to clear it with Disk Cleanup, by hand or with Disk Mop, and what to expect afterwards. The only visible effect is that folders you open next time load their previews a little more slowly once."
      ],
      "sections": [
        {
          "title": "What the Thumbnail Cache Is",
          "content": [
            "When you open a folder of photos or videos in File Explorer, Windows does not decode every image each time. It builds a small preview once and stores it in a cache database. The next time you open the folder, it reads the previews from the database, which is why a large folder opens quickly.",
            "The preview databases are the thumbcache_*.db files, named by the preview size they hold, such as thumbcache_96.db, thumbcache_256.db and thumbcache_1024.db, with thumbcache_idx.db as the index. Icons for programs and file types are stored in iconcache_*.db files. All of them sit in the Explorer folder under your local AppData.",
            "Because the databases are only copies of previews, they can be rebuilt from your originals at any time."
          ]
        },
        {
          "title": "Why Thumbnails Go Wrong",
          "content": [
            "A cache is only as good as the moment it was written. If Windows crashes while the database is being updated, if a disk error damages it, or if a program replaces files without telling Explorer, the database can hold a wrong or empty preview. Explorer then keeps showing the broken thumbnail even though the file itself is fine.",
            "The usual signs are black or blank thumbnails, a generic icon where a picture should be, an old preview that does not match the file, or a folder that is slow to show previews. Icons that look wrong after changing a default app point to the icon cache.",
            "Clearing the cache forces Windows to build fresh previews from the files, which fixes all of these."
          ]
        },
        {
          "title": "Delete the Cache with Disk Cleanup",
          "content": [
            "The easiest way is Disk Cleanup, because it can remove files that File Explorer is holding open. Search for Disk Cleanup, pick your system drive, tick Thumbnails and choose Delete Files. You can untick the other items if you only want the previews cleared.",
            "Windows 11 also offers it in Settings, System, Storage, Temporary files, where Thumbnails appears in the list of items you can remove.",
            "After cleaning, open a folder of pictures. The first view is a little slower while Windows rebuilds the previews, and later views are fast again."
          ]
        },
        {
          "title": "Reset the Cache by Hand",
          "content": [
            "If a thumbnail stays wrong after Disk Cleanup, delete the files yourself. Close every File Explorer window, open Task Manager, find Windows Explorer and choose Restart. Then open %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer in the address bar, turn on hidden items, and delete the files that start with thumbcache_ and iconcache_.",
            "Files that Windows still has open are skipped; delete them again after signing out and back in. Do not delete the Explorer folder itself or other files in it.",
            "Then reopen your folders and let the previews rebuild."
          ]
        },
        {
          "title": "Clear It with Disk Mop",
          "content": [
            "Disk Mop's Free up space page lists the Thumbnail cache as one item with its size and a short explanation of what cleaning it does. It covers the thumbcache_ and iconcache_ database files in the Explorer folder and nothing else in that folder.",
            "Run the scan, tick the item and confirm. Disk Mop shows what it found before it deletes anything, and scanning is free, so you can see the size first. Files that Explorer holds open are skipped, so close extra Explorer windows before you start.",
            "The thumbnail cache is only one of several safe caches on the same page, so you can clear temporary files and browser caches in the same pass."
          ]
        }
      ],
      "verdict": [
        "The Windows thumbnail cache is a rebuildable set of preview and icon databases. Clearing it with Disk Cleanup or by hand fixes blank, black or wrong thumbnails and returns some space, and the only cost is a slower first view of each folder.",
        "Disk Mop lists the Thumbnail cache next to other safe caches, shows its size and asks before it deletes. Scanning is free, so you can see the size before you decide."
      ],
      "ctaText": "Clear the thumbnail cache and other safe caches with Disk Mop"
    },
    "de": {
      "title": "Miniaturansichten-Cache in Windows 11 und 10 leeren (falsche oder fehlende Vorschaubilder beheben)",
      "metaDescription": "Vorschaubilder leer, falsch oder langsam im Datei-Explorer? Erfahren Sie, was thumbcache-Dateien sind und wie Sie den Windows-Miniaturansichten-Cache sicher löschen.",
      "subtitle": "Setzen Sie die versteckte Datenbank hinter den Vorschauen und Symbolen im Datei-Explorer zurück",
      "keyTakeaways": [
        "Windows speichert Vorschauen Ihrer Bilder, Videos und Dokumente in thumbcache_*.db-Dateien und Symbole in iconcache_*.db-Dateien im Ordner %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Das Löschen dieser Dateien ist unbedenklich: Windows erstellt sie beim Durchsuchen von Ordnern neu, und nur die erste Ansicht jedes Ordners dauert etwas länger.",
        "Das Leeren des Caches behebt leere, schwarze, veraltete oder falsche Miniaturansichten und Symbole und gibt zudem den vom Cache belegten Speicherplatz frei."
      ],
      "dataTable": {
        "caption": "Dateien des Miniaturansichten- und Symbol-Caches im Explorer-Ordner",
        "columns": [
          "Dateimuster",
          "Inhalt",
          "Wird automatisch neu erstellt?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Kleine Vorschauen für Listen- und Detailansicht",
            "Ja"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Mittlere und große Vorschauen für die Symbolansicht",
            "Ja"
          ],
          [
            "thumbcache_idx.db und weitere thumbcache_*.db-Dateien",
            "Index und zusätzliche Größen der Vorschaudatenbank",
            "Ja"
          ],
          [
            "iconcache_*.db",
            "Zwischengespeicherte Programm- und Dateityp-Symbole",
            "Ja"
          ]
        ]
      },
      "howTo": {
        "name": "So leeren Sie den Miniaturansichten-Cache in Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Datenträgerbereinigung öffnen",
            "text": "Suchen Sie im Startmenü nach Datenträgerbereinigung und wählen Sie Ihr Systemlaufwerk. Warten Sie, bis berechnet ist, was entfernt werden kann."
          },
          {
            "name": "Miniaturansichten aktivieren",
            "text": "Aktivieren Sie in der Liste der zu löschenden Dateien das Kontrollkästchen Miniaturansichten. Die übrigen Einträge können Sie deaktivieren, wenn nur der Vorschau-Cache geleert werden soll."
          },
          {
            "name": "Bereinigung bestätigen",
            "text": "Klicken Sie auf OK und dann auf Dateien löschen. Windows entfernt die Miniaturansichten-Datenbank und erstellt sie neu, während Sie Ordner öffnen."
          },
          {
            "name": "Bei weiterhin falschen Miniaturansichten manuell zurücksetzen",
            "text": "Schließen Sie alle Datei-Explorer-Fenster, öffnen Sie den Task-Manager, starten Sie den Windows-Explorer neu, löschen Sie dann die Dateien thumbcache_*.db und iconcache_*.db in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer und öffnen Sie Ihre Ordner erneut."
          },
          {
            "name": "Oder mit Disk Mop leeren",
            "text": "Öffnen Sie Disk Mop, wechseln Sie zu Speicher freigeben, starten Sie den Scan und aktivieren Sie Miniaturansichten-Cache. Prüfen Sie die Größe und bestätigen Sie."
          }
        ]
      },
      "faq": [
        {
          "question": "Ist es sicher, thumbcache-Dateien zu löschen?",
          "answer": "Ja. Eine thumbcache-Datei ist eine Kopie von Vorschauen, die Windows aus Ihren Originalbildern, -videos und -dokumenten jederzeit neu erzeugen kann. Das Löschen entfernt oder verändert keine Ihrer Dateien."
        },
        {
          "question": "Warum sind meine Miniaturansichten im Datei-Explorer schwarz, leer oder falsch?",
          "answer": "Der Cache ist eine Datenbank und kann beschädigt oder veraltet sein, zum Beispiel nach einem Absturz, einem Datenträgerfehler oder einem Programm, das Dateien ändert, ohne dass Windows es bemerkt. Windows zeigt dann die fehlerhafte Vorschau so lange an, bis der Cache geleert wird."
        },
        {
          "question": "Warum kann ich die Dateien des Miniaturansichten-Caches nicht direkt löschen?",
          "answer": "Der Datei-Explorer hält die thumbcache-Dateien während der Ausführung geöffnet, daher verweigert Windows das Löschen einiger davon. Verwenden Sie die Datenträgerbereinigung, oder schließen Sie die Datei-Explorer-Fenster und starten Sie den Windows-Explorer neu, bevor Sie die Dateien löschen."
        },
        {
          "question": "Wie groß ist der Miniaturansichten-Cache?",
          "answer": "Das hängt davon ab, wie viele Bilder und Videos Sie durchsucht haben. Ein typischer PC hat zwischen etwa 100 MB und einigen hundert Megabyte an Dateien für Miniaturansichten und Symbole, und eine große Fotosammlung kann den Wert weiter erhöhen."
        }
      ],
      "intro": [
        "Der Windows-Miniaturansichten-Cache besteht aus versteckten Datenbankdateien, thumbcache_*.db und iconcache_*.db, in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. Der Datei-Explorer liest die Vorschauen daraus, damit Ordner voller Bilder schnell öffnen. Sie lassen sich gefahrlos löschen: Windows erstellt sie beim Durchsuchen neu, und das Leeren behebt leere, schwarze oder veraltete Miniaturansichten und gibt den belegten Speicherplatz frei.",
        "Diese Anleitung erklärt, was der Cache enthält, warum er fehlerhaft wird, wie Sie ihn mit der Datenträgerbereinigung, manuell oder mit Disk Mop leeren und was Sie danach erwartet. Der einzige sichtbare Effekt: Ordner, die Sie als Nächstes öffnen, laden ihre Vorschauen einmalig etwas langsamer."
      ],
      "sections": [
        {
          "title": "Was der Miniaturansichten-Cache ist",
          "content": [
            "Wenn Sie im Datei-Explorer einen Ordner mit Fotos oder Videos öffnen, dekodiert Windows nicht jedes Mal jedes Bild. Es erstellt einmalig eine kleine Vorschau und legt sie in einer Cache-Datenbank ab. Beim nächsten Öffnen des Ordners liest es die Vorschauen aus der Datenbank, weshalb ein großer Ordner schnell öffnet.",
            "Die Vorschaudatenbanken sind die thumbcache_*.db-Dateien, benannt nach der Vorschaugröße, die sie enthalten, etwa thumbcache_96.db, thumbcache_256.db und thumbcache_1024.db, wobei thumbcache_idx.db der Index ist. Symbole für Programme und Dateitypen liegen in iconcache_*.db-Dateien. Alle befinden sich im Explorer-Ordner unter Ihrem lokalen AppData-Verzeichnis.",
            "Da die Datenbanken nur Kopien von Vorschauen sind, lassen sie sich jederzeit aus Ihren Originalen neu erstellen."
          ]
        },
        {
          "title": "Warum Miniaturansichten fehlerhaft werden",
          "content": [
            "Ein Cache ist nur so gut wie der Moment, in dem er geschrieben wurde. Stürzt Windows während der Aktualisierung der Datenbank ab, beschädigt ein Datenträgerfehler sie oder ersetzt ein Programm Dateien, ohne den Explorer zu informieren, kann die Datenbank eine falsche oder leere Vorschau enthalten. Der Explorer zeigt dann weiterhin die fehlerhafte Miniaturansicht an, obwohl die Datei selbst in Ordnung ist.",
            "Typische Anzeichen sind schwarze oder leere Miniaturansichten, ein allgemeines Symbol statt eines Bildes, eine alte Vorschau, die nicht zur Datei passt, oder ein Ordner, der Vorschauen nur langsam anzeigt. Symbole, die nach dem Ändern einer Standard-App falsch aussehen, deuten auf den Symbol-Cache hin.",
            "Das Leeren des Caches zwingt Windows, frische Vorschauen aus den Dateien zu erstellen, und behebt all diese Probleme."
          ]
        },
        {
          "title": "Cache mit der Datenträgerbereinigung löschen",
          "content": [
            "Am einfachsten geht es mit der Datenträgerbereinigung, denn sie kann Dateien entfernen, die der Datei-Explorer geöffnet hält. Suchen Sie nach Datenträgerbereinigung, wählen Sie Ihr Systemlaufwerk, aktivieren Sie Miniaturansichten und klicken Sie auf Dateien löschen. Die übrigen Einträge können Sie deaktivieren, wenn nur die Vorschauen geleert werden sollen.",
            "Windows 11 bietet dies auch unter Einstellungen > System > Speicher > Temporäre Dateien an, wo Miniaturansichten in der Liste der entfernbaren Elemente erscheint.",
            "Öffnen Sie nach der Bereinigung einen Ordner mit Bildern. Die erste Ansicht ist etwas langsamer, während Windows die Vorschauen neu erstellt, spätere Ansichten sind wieder schnell."
          ]
        },
        {
          "title": "Cache manuell zurücksetzen",
          "content": [
            "Bleibt eine Miniaturansicht nach der Datenträgerbereinigung falsch, löschen Sie die Dateien selbst. Schließen Sie alle Datei-Explorer-Fenster, öffnen Sie den Task-Manager, suchen Sie den Windows-Explorer und wählen Sie Neu starten. Öffnen Sie dann %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer in der Adressleiste, blenden Sie ausgeblendete Elemente ein und löschen Sie die Dateien, die mit thumbcache_ und iconcache_ beginnen.",
            "Dateien, die Windows noch geöffnet hat, werden übersprungen; löschen Sie sie nach dem Ab- und erneuten Anmelden noch einmal. Löschen Sie weder den Explorer-Ordner selbst noch andere darin enthaltene Dateien.",
            "Öffnen Sie anschließend Ihre Ordner erneut und lassen Sie die Vorschauen neu erstellen."
          ]
        },
        {
          "title": "Mit Disk Mop leeren",
          "content": [
            "Die Seite Speicher freigeben von Disk Mop führt den Miniaturansichten-Cache als einen Eintrag mit seiner Größe und einer kurzen Erklärung auf, was das Bereinigen bewirkt. Sie umfasst die Datenbankdateien thumbcache_ und iconcache_ im Explorer-Ordner und nichts anderes in diesem Ordner.",
            "Starten Sie den Scan, aktivieren Sie den Eintrag und bestätigen Sie. Disk Mop zeigt an, was es gefunden hat, bevor es etwas löscht, und der Scan ist kostenlos, sodass Sie die Größe vorab sehen können. Dateien, die der Explorer geöffnet hält, werden übersprungen. Schließen Sie daher vor dem Start zusätzliche Explorer-Fenster.",
            "Der Miniaturansichten-Cache ist nur einer von mehreren unbedenklichen Caches auf derselben Seite, sodass Sie temporäre Dateien und Browser-Caches im selben Durchgang leeren können."
          ]
        }
      ],
      "verdict": [
        "Der Windows-Miniaturansichten-Cache ist eine neu erstellbare Sammlung von Vorschau- und Symboldatenbanken. Das Leeren mit der Datenträgerbereinigung oder manuell behebt leere, schwarze oder falsche Miniaturansichten und gibt etwas Speicherplatz frei; der einzige Preis ist eine langsamere erste Ansicht jedes Ordners.",
        "Disk Mop führt den Miniaturansichten-Cache neben anderen unbedenklichen Caches auf, zeigt seine Größe an und fragt nach, bevor es etwas löscht. Der Scan ist kostenlos, sodass Sie die Größe sehen können, bevor Sie sich entscheiden."
      ],
      "ctaText": "Miniaturansichten-Cache und andere unbedenkliche Caches mit Disk Mop leeren"
    },
    "fr": {
      "title": "Comment vider le cache des miniatures dans Windows 11 et 10 (corriger les miniatures erronées ou absentes)",
      "metaDescription": "Miniatures vides, erronées ou lentes dans l'Explorateur de fichiers ? Découvrez les fichiers thumbcache et comment supprimer le cache des miniatures sans risque.",
      "subtitle": "Réinitialisez la base de données cachée derrière les aperçus et les icônes de l'Explorateur de fichiers",
      "keyTakeaways": [
        "Windows stocke les aperçus de vos images, vidéos et documents dans des fichiers thumbcache_*.db, et les icônes dans des fichiers iconcache_*.db, situés dans %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Supprimer ces fichiers est sans risque : Windows les recrée au fil de votre navigation, et seul le premier affichage de chaque dossier est plus lent.",
        "Vider le cache corrige les miniatures et icônes vides, noires, obsolètes ou erronées, et récupère aussi l'espace qu'il occupait."
      ],
      "dataTable": {
        "caption": "Fichiers du cache des miniatures et des icônes dans le dossier Explorer",
        "columns": [
          "Modèle de fichier",
          "Contenu",
          "Recréé automatiquement ?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Petits aperçus utilisés dans les affichages Liste et Détails",
            "Oui"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Aperçus moyens et grands utilisés dans l'affichage par icônes",
            "Oui"
          ],
          [
            "thumbcache_idx.db et autres fichiers thumbcache_*.db",
            "Index et tailles supplémentaires de la base d'aperçus",
            "Oui"
          ],
          [
            "iconcache_*.db",
            "Icônes de programmes et de types de fichiers mises en cache",
            "Oui"
          ]
        ]
      },
      "howTo": {
        "name": "Comment vider le cache des miniatures dans Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Ouvrir le Nettoyage de disque",
            "text": "Recherchez Nettoyage de disque dans le menu Démarrer et choisissez votre lecteur système. Patientez pendant le calcul de ce qui peut être supprimé."
          },
          {
            "name": "Cocher Miniatures",
            "text": "Dans la liste des fichiers à supprimer, cochez Miniatures. Vous pouvez décocher les autres éléments si vous souhaitez uniquement vider le cache des aperçus."
          },
          {
            "name": "Confirmer le nettoyage",
            "text": "Cliquez sur OK puis sur Supprimer les fichiers. Windows supprime la base de miniatures et la recrée au fur et à mesure que vous ouvrez des dossiers."
          },
          {
            "name": "Le réinitialiser manuellement si les miniatures sont toujours erronées",
            "text": "Fermez toutes les fenêtres de l'Explorateur de fichiers, ouvrez le Gestionnaire des tâches, redémarrez l'Explorateur Windows, puis supprimez les fichiers thumbcache_*.db et iconcache_*.db dans %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer et rouvrez vos dossiers."
          },
          {
            "name": "Ou le vider avec Disk Mop",
            "text": "Ouvrez Disk Mop, allez dans Libérer de l'espace, lancez l'analyse et cochez Cache des miniatures. Vérifiez la taille et confirmez."
          }
        ]
      },
      "faq": [
        {
          "question": "Est-il sûr de supprimer les fichiers thumbcache ?",
          "answer": "Oui. Un fichier thumbcache est une copie d'aperçus que Windows peut régénérer à partir de vos images, vidéos et documents d'origine. Le supprimer ne retire ni ne modifie aucun de vos fichiers."
        },
        {
          "question": "Pourquoi mes miniatures sont-elles noires, vides ou erronées dans l'Explorateur de fichiers ?",
          "answer": "Le cache est une base de données et peut être corrompu ou obsolète, par exemple après un plantage, une erreur de disque ou un programme qui modifie des fichiers sans que Windows s'en aperçoive. Windows continue alors d'afficher l'aperçu défectueux tant que le cache n'est pas vidé."
        },
        {
          "question": "Pourquoi ne puis-je pas supprimer directement les fichiers du cache des miniatures ?",
          "answer": "L'Explorateur de fichiers garde les fichiers thumbcache ouverts pendant son exécution, si bien que Windows refuse d'en supprimer certains. Utilisez le Nettoyage de disque, ou fermez les fenêtres de l'Explorateur de fichiers et redémarrez l'Explorateur Windows avant de supprimer les fichiers."
        },
        {
          "question": "Quelle est la taille du cache des miniatures ?",
          "answer": "Cela dépend du nombre d'images et de vidéos que vous avez parcourues. Un PC typique compte entre environ 100 Mo et quelques centaines de mégaoctets de fichiers de cache de miniatures et d'icônes, et une grande photothèque peut faire monter ce chiffre."
        }
      ],
      "intro": [
        "Le cache des miniatures de Windows est un ensemble de fichiers de base de données cachés, thumbcache_*.db et iconcache_*.db, situés dans %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. L'Explorateur de fichiers y lit les aperçus pour que les dossiers remplis d'images s'ouvrent rapidement. Ils peuvent être supprimés sans risque : Windows les recrée au fil de votre navigation, et les vider corrige les miniatures vides, noires ou obsolètes et libère l'espace qu'ils utilisaient.",
        "Ce guide explique ce que contient le cache, pourquoi il dysfonctionne, comment le vider avec le Nettoyage de disque, manuellement ou avec Disk Mop, et à quoi vous attendre ensuite. Le seul effet visible est que les dossiers que vous ouvrirez ensuite chargeront leurs aperçus un peu plus lentement, une seule fois."
      ],
      "sections": [
        {
          "title": "Qu'est-ce que le cache des miniatures",
          "content": [
            "Lorsque vous ouvrez un dossier de photos ou de vidéos dans l'Explorateur de fichiers, Windows ne décode pas chaque image à chaque fois. Il crée un petit aperçu une seule fois et le stocke dans une base de données de cache. À la prochaine ouverture du dossier, il lit les aperçus depuis cette base, ce qui explique pourquoi un gros dossier s'ouvre rapidement.",
            "Les bases d'aperçus sont les fichiers thumbcache_*.db, nommés d'après la taille d'aperçu qu'ils contiennent, comme thumbcache_96.db, thumbcache_256.db et thumbcache_1024.db, thumbcache_idx.db servant d'index. Les icônes des programmes et des types de fichiers sont stockées dans des fichiers iconcache_*.db. Tous se trouvent dans le dossier Explorer, sous votre AppData local.",
            "Comme ces bases ne sont que des copies d'aperçus, elles peuvent être reconstruites à tout moment à partir de vos originaux."
          ]
        },
        {
          "title": "Pourquoi les miniatures dysfonctionnent",
          "content": [
            "Un cache ne vaut que ce que valait le moment où il a été écrit. Si Windows plante pendant la mise à jour de la base, si une erreur de disque l'endommage ou si un programme remplace des fichiers sans prévenir l'Explorateur, la base peut contenir un aperçu erroné ou vide. L'Explorateur continue alors d'afficher la miniature défectueuse alors que le fichier lui-même est intact.",
            "Les signes habituels sont des miniatures noires ou vides, une icône générique à la place d'une image, un ancien aperçu qui ne correspond pas au fichier, ou un dossier lent à afficher ses aperçus. Des icônes qui paraissent erronées après le changement d'une application par défaut pointent vers le cache des icônes.",
            "Vider le cache oblige Windows à générer de nouveaux aperçus à partir des fichiers, ce qui corrige tous ces problèmes."
          ]
        },
        {
          "title": "Supprimer le cache avec le Nettoyage de disque",
          "content": [
            "Le plus simple est le Nettoyage de disque, car il peut supprimer des fichiers que l'Explorateur de fichiers garde ouverts. Recherchez Nettoyage de disque, choisissez votre lecteur système, cochez Miniatures et cliquez sur Supprimer les fichiers. Vous pouvez décocher les autres éléments si vous souhaitez uniquement vider les aperçus.",
            "Windows 11 le propose aussi dans Paramètres > Système > Stockage > Fichiers temporaires, où Miniatures apparaît dans la liste des éléments que vous pouvez supprimer.",
            "Après le nettoyage, ouvrez un dossier d'images. Le premier affichage est un peu plus lent pendant que Windows recrée les aperçus, puis les suivants sont de nouveau rapides."
          ]
        },
        {
          "title": "Réinitialiser le cache manuellement",
          "content": [
            "Si une miniature reste erronée après le Nettoyage de disque, supprimez vous-même les fichiers. Fermez toutes les fenêtres de l'Explorateur de fichiers, ouvrez le Gestionnaire des tâches, trouvez Explorateur Windows et choisissez Redémarrer. Ouvrez ensuite %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer dans la barre d'adresse, activez l'affichage des éléments masqués et supprimez les fichiers dont le nom commence par thumbcache_ et iconcache_.",
            "Les fichiers que Windows garde encore ouverts sont ignorés ; supprimez-les à nouveau après vous être déconnecté puis reconnecté. Ne supprimez pas le dossier Explorer lui-même ni les autres fichiers qu'il contient.",
            "Rouvrez ensuite vos dossiers et laissez les aperçus se reconstruire."
          ]
        },
        {
          "title": "Le vider avec Disk Mop",
          "content": [
            "La page Libérer de l'espace de Disk Mop répertorie le Cache des miniatures comme un élément unique, avec sa taille et une courte explication de ce que fait le nettoyage. Il couvre les fichiers de base de données thumbcache_ et iconcache_ du dossier Explorer, et rien d'autre dans ce dossier.",
            "Lancez l'analyse, cochez l'élément et confirmez. Disk Mop affiche ce qu'il a trouvé avant de supprimer quoi que ce soit, et l'analyse est gratuite : vous pouvez donc voir la taille d'abord. Les fichiers que l'Explorateur garde ouverts sont ignorés ; fermez donc les fenêtres Explorateur superflues avant de commencer.",
            "Le cache des miniatures n'est qu'un des nombreux caches sans risque de la même page : vous pouvez donc vider les fichiers temporaires et les caches des navigateurs en une seule passe."
          ]
        }
      ],
      "verdict": [
        "Le cache des miniatures de Windows est un ensemble reconstructible de bases d'aperçus et d'icônes. Le vider avec le Nettoyage de disque ou manuellement corrige les miniatures vides, noires ou erronées et récupère un peu d'espace ; le seul coût est un premier affichage plus lent de chaque dossier.",
        "Disk Mop répertorie le Cache des miniatures à côté d'autres caches sans risque, en affiche la taille et demande confirmation avant de supprimer. L'analyse est gratuite : vous pouvez donc voir la taille avant de décider."
      ],
      "ctaText": "Videz le cache des miniatures et d'autres caches sans risque avec Disk Mop"
    },
    "es": {
      "title": "Cómo borrar la caché de miniaturas en Windows 11 y 10 (corrige miniaturas erróneas o ausentes)",
      "metaDescription": "¿Miniaturas en blanco, erróneas o lentas en el Explorador de archivos? Descubre qué son los archivos thumbcache y cómo borrar la caché de miniaturas sin riesgo.",
      "subtitle": "Restablece la base de datos oculta que hay detrás de las vistas previas y los iconos del Explorador de archivos",
      "keyTakeaways": [
        "Windows guarda las vistas previas de tus imágenes, vídeos y documentos en archivos thumbcache_*.db, y los iconos en archivos iconcache_*.db, dentro de %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Eliminar estos archivos es seguro: Windows los reconstruye a medida que exploras carpetas, y solo la primera vez que abres cada carpeta tarda un poco más.",
        "Borrar la caché corrige las miniaturas e iconos en blanco, negros, desactualizados o erróneos, y además recupera el espacio que ocupaba."
      ],
      "dataTable": {
        "caption": "Archivos de caché de miniaturas e iconos en la carpeta Explorer",
        "columns": [
          "Patrón de archivo",
          "Qué contiene",
          "¿Se reconstruye automáticamente?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Vistas previas pequeñas usadas en la vista de lista y de detalles",
            "Sí"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Vistas previas medianas y grandes usadas en la vista de iconos",
            "Sí"
          ],
          [
            "thumbcache_idx.db y otros archivos thumbcache_*.db",
            "Índice y tamaños adicionales de la base de datos de vistas previas",
            "Sí"
          ],
          [
            "iconcache_*.db",
            "Iconos de programas y de tipos de archivo almacenados en caché",
            "Sí"
          ]
        ]
      },
      "howTo": {
        "name": "Cómo borrar la caché de miniaturas en Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Abre el Liberador de espacio en disco",
            "text": "Busca Liberador de espacio en disco en el menú Inicio y elige la unidad del sistema. Espera mientras calcula lo que se puede eliminar."
          },
          {
            "name": "Marca Miniaturas",
            "text": "En la lista de archivos que se van a eliminar, marca Miniaturas. Puedes desmarcar los demás elementos si solo quieres borrar la caché de vistas previas."
          },
          {
            "name": "Confirma la limpieza",
            "text": "Elige Aceptar y después Eliminar archivos. Windows elimina la base de datos de miniaturas y la reconstruye a medida que abres carpetas."
          },
          {
            "name": "Restablécela a mano si las miniaturas siguen mal",
            "text": "Cierra todas las ventanas del Explorador de archivos, abre el Administrador de tareas, reinicia el Explorador de Windows, elimina después los archivos thumbcache_*.db e iconcache_*.db de %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer y vuelve a abrir tus carpetas."
          },
          {
            "name": "O bórrala con Disk Mop",
            "text": "Abre Disk Mop, ve a Liberar espacio, ejecuta el análisis y marca Caché de miniaturas. Comprueba el tamaño y confirma."
          }
        ]
      },
      "faq": [
        {
          "question": "¿Es seguro eliminar los archivos thumbcache?",
          "answer": "Sí. Un archivo thumbcache es una copia de vistas previas que Windows puede volver a generar a partir de tus imágenes, vídeos y documentos originales. Eliminarlo no borra ni modifica ninguno de tus archivos."
        },
        {
          "question": "¿Por qué mis miniaturas aparecen negras, en blanco o erróneas en el Explorador de archivos?",
          "answer": "La caché es una base de datos y puede dañarse o quedar desactualizada, por ejemplo tras un bloqueo, un error de disco o un programa que modifica archivos sin que Windows lo advierta. Windows sigue entonces mostrando la vista previa defectuosa hasta que se borra la caché."
        },
        {
          "question": "¿Por qué no puedo eliminar directamente los archivos de la caché de miniaturas?",
          "answer": "El Explorador de archivos mantiene abiertos los archivos thumbcache mientras se ejecuta, por lo que Windows se niega a eliminar algunos. Usa el Liberador de espacio en disco, o cierra las ventanas del Explorador de archivos y reinicia el Explorador de Windows antes de eliminar los archivos."
        },
        {
          "question": "¿Cuánto ocupa la caché de miniaturas?",
          "answer": "Depende de cuántas imágenes y vídeos hayas explorado. Un PC típico tiene entre unos 100 MB y unos cientos de megabytes de archivos de caché de miniaturas e iconos, y una biblioteca de fotos grande puede elevar esa cifra."
        }
      ],
      "intro": [
        "La caché de miniaturas de Windows es un conjunto de archivos de base de datos ocultos, thumbcache_*.db e iconcache_*.db, en %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. El Explorador de archivos lee de ellos las vistas previas para que las carpetas llenas de imágenes se abran rápido. Se pueden eliminar sin riesgo: Windows los reconstruye mientras exploras, y borrarlos corrige las miniaturas en blanco, negras o desactualizadas y recupera el espacio que usaban.",
        "Esta guía explica qué contiene la caché, por qué falla, cómo borrarla con el Liberador de espacio en disco, a mano o con Disk Mop, y qué esperar después. El único efecto visible es que las carpetas que abras a continuación cargarán sus vistas previas un poco más despacio una sola vez."
      ],
      "sections": [
        {
          "title": "Qué es la caché de miniaturas",
          "content": [
            "Cuando abres una carpeta de fotos o vídeos en el Explorador de archivos, Windows no decodifica cada imagen cada vez. Crea una pequeña vista previa una sola vez y la guarda en una base de datos de caché. La próxima vez que abras la carpeta, lee las vistas previas de la base de datos, y por eso una carpeta grande se abre rápido.",
            "Las bases de datos de vistas previas son los archivos thumbcache_*.db, con nombres que indican el tamaño de vista previa que contienen, como thumbcache_96.db, thumbcache_256.db y thumbcache_1024.db, y thumbcache_idx.db como índice. Los iconos de programas y tipos de archivo se guardan en archivos iconcache_*.db. Todos están en la carpeta Explorer, dentro de tu AppData local.",
            "Como las bases de datos son solo copias de vistas previas, pueden reconstruirse a partir de tus originales en cualquier momento."
          ]
        },
        {
          "title": "Por qué fallan las miniaturas",
          "content": [
            "Una caché solo es tan buena como el momento en que se escribió. Si Windows se bloquea mientras se actualiza la base de datos, si un error de disco la daña o si un programa reemplaza archivos sin avisar al Explorador, la base de datos puede contener una vista previa errónea o vacía. El Explorador sigue entonces mostrando la miniatura defectuosa aunque el archivo en sí esté bien.",
            "Los síntomas habituales son miniaturas negras o en blanco, un icono genérico donde debería haber una imagen, una vista previa antigua que no coincide con el archivo o una carpeta que tarda en mostrar las vistas previas. Los iconos que se ven mal tras cambiar una aplicación predeterminada apuntan a la caché de iconos.",
            "Borrar la caché obliga a Windows a crear vistas previas nuevas a partir de los archivos, lo que soluciona todos estos problemas."
          ]
        },
        {
          "title": "Elimina la caché con el Liberador de espacio en disco",
          "content": [
            "La forma más sencilla es el Liberador de espacio en disco, porque puede eliminar archivos que el Explorador de archivos mantiene abiertos. Busca Liberador de espacio en disco, elige la unidad del sistema, marca Miniaturas y elige Eliminar archivos. Puedes desmarcar los demás elementos si solo quieres borrar las vistas previas.",
            "Windows 11 también lo ofrece en Configuración > Sistema > Almacenamiento > Archivos temporales, donde Miniaturas aparece en la lista de elementos que puedes eliminar.",
            "Tras la limpieza, abre una carpeta de imágenes. La primera vista es un poco más lenta mientras Windows reconstruye las vistas previas, y las siguientes vuelven a ser rápidas."
          ]
        },
        {
          "title": "Restablece la caché a mano",
          "content": [
            "Si una miniatura sigue mal tras el Liberador de espacio en disco, elimina tú mismo los archivos. Cierra todas las ventanas del Explorador de archivos, abre el Administrador de tareas, busca Explorador de Windows y elige Reiniciar. Después abre %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer en la barra de direcciones, activa la visualización de elementos ocultos y elimina los archivos que empiezan por thumbcache_ e iconcache_.",
            "Los archivos que Windows aún tiene abiertos se omiten; vuelve a eliminarlos después de cerrar sesión y volver a iniciarla. No elimines la propia carpeta Explorer ni otros archivos que contenga.",
            "Luego vuelve a abrir tus carpetas y deja que las vistas previas se reconstruyan."
          ]
        },
        {
          "title": "Bórrala con Disk Mop",
          "content": [
            "La página Liberar espacio de Disk Mop muestra la Caché de miniaturas como un elemento con su tamaño y una breve explicación de lo que hace limpiarla. Abarca los archivos de base de datos thumbcache_ e iconcache_ de la carpeta Explorer y nada más de esa carpeta.",
            "Ejecuta el análisis, marca el elemento y confirma. Disk Mop muestra lo que ha encontrado antes de eliminar nada, y el análisis es gratuito, así que puedes ver primero el tamaño. Los archivos que el Explorador mantiene abiertos se omiten, por lo que conviene cerrar las ventanas adicionales del Explorador antes de empezar.",
            "La caché de miniaturas es solo una de las varias cachés seguras de la misma página, de modo que puedes borrar los archivos temporales y las cachés de los navegadores en la misma pasada."
          ]
        }
      ],
      "verdict": [
        "La caché de miniaturas de Windows es un conjunto reconstruible de bases de datos de vistas previas e iconos. Borrarla con el Liberador de espacio en disco o a mano corrige las miniaturas en blanco, negras o erróneas y recupera algo de espacio; el único coste es una primera vista más lenta de cada carpeta.",
        "Disk Mop muestra la Caché de miniaturas junto a otras cachés seguras, indica su tamaño y pide confirmación antes de eliminar. El análisis es gratuito, así que puedes ver el tamaño antes de decidir."
      ],
      "ctaText": "Borra la caché de miniaturas y otras cachés seguras con Disk Mop"
    },
    "it": {
      "title": "Come svuotare la cache delle miniature in Windows 11 e 10 (correggere anteprime errate o mancanti)",
      "metaDescription": "Anteprime vuote, errate o lente in Esplora file? Scopri cosa sono i file thumbcache e come eliminare in sicurezza la cache delle miniature di Windows e ricostruirla.",
      "subtitle": "Reimposta il database nascosto dietro le anteprime e le icone di Esplora file",
      "keyTakeaways": [
        "Windows memorizza le anteprime di immagini, video e documenti in file thumbcache_*.db e le icone in file iconcache_*.db all'interno di %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Eliminare questi file è sicuro: Windows li ricostruisce mentre sfogli le cartelle e solo la prima visualizzazione di ciascuna cartella risulta più lenta.",
        "Svuotare la cache risolve miniature e icone vuote, nere, obsolete o errate e recupera anche lo spazio occupato dalla cache."
      ],
      "dataTable": {
        "caption": "File della cache di miniature e icone nella cartella Explorer",
        "columns": [
          "Schema del file",
          "Contenuto",
          "Ricostruito automaticamente?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Piccole anteprime usate nella visualizzazione elenco e dettagli",
            "Sì"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Anteprime medie e grandi usate nella visualizzazione a icone",
            "Sì"
          ],
          [
            "thumbcache_idx.db e altri file thumbcache_*.db",
            "Indice e dimensioni aggiuntive del database delle anteprime",
            "Sì"
          ],
          [
            "iconcache_*.db",
            "Icone di programmi e tipi di file memorizzate nella cache",
            "Sì"
          ]
        ]
      },
      "howTo": {
        "name": "Come svuotare la cache delle miniature in Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Aprire Pulizia disco",
            "text": "Cerca Pulizia disco nel menu Start e scegli l'unità di sistema. Attendi mentre viene calcolato ciò che può essere rimosso."
          },
          {
            "name": "Selezionare Anteprime",
            "text": "Nell'elenco dei file da eliminare, seleziona Anteprime. Puoi deselezionare le altre voci se vuoi svuotare solo la cache delle anteprime."
          },
          {
            "name": "Confermare la pulizia",
            "text": "Scegli OK e poi Elimina file. Windows rimuove il database delle miniature e lo ricostruisce man mano che apri le cartelle."
          },
          {
            "name": "Reimpostarla manualmente se le miniature sono ancora errate",
            "text": "Chiudi tutte le finestre di Esplora file, apri Gestione attività, riavvia Esplora risorse, quindi elimina i file thumbcache_*.db e iconcache_*.db in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer e riapri le tue cartelle."
          },
          {
            "name": "Oppure svuotarla con Disk Mop",
            "text": "Apri Disk Mop, vai su Libera spazio, esegui la scansione e seleziona Cache delle miniature. Controlla la dimensione e conferma."
          }
        ]
      },
      "faq": [
        {
          "question": "È sicuro eliminare i file thumbcache?",
          "answer": "Sì. Un file thumbcache è una copia di anteprime che Windows può generare di nuovo a partire dalle immagini, dai video e dai documenti originali. Eliminarlo non rimuove né modifica nessuno dei tuoi file."
        },
        {
          "question": "Perché le miniature sono nere, vuote o errate in Esplora file?",
          "answer": "La cache è un database e può danneggiarsi o diventare obsoleta, ad esempio dopo un arresto anomalo, un errore del disco o un programma che modifica i file senza che Windows se ne accorga. Windows continua allora a mostrare l'anteprima difettosa finché la cache non viene svuotata."
        },
        {
          "question": "Perché non posso eliminare direttamente i file della cache delle miniature?",
          "answer": "Esplora file tiene aperti i file thumbcache mentre è in esecuzione, quindi Windows rifiuta di eliminarne alcuni. Usa Pulizia disco oppure chiudi le finestre di Esplora file e riavvia Esplora risorse prima di eliminare i file."
        },
        {
          "question": "Quanto è grande la cache delle miniature?",
          "answer": "Dipende da quante immagini e video hai sfogliato. Un PC tipico ha da circa 100 MB a qualche centinaio di megabyte di file della cache di miniature e icone, e una grande libreria di foto può farla crescere ancora."
        }
      ],
      "intro": [
        "La cache delle miniature di Windows è un insieme di file di database nascosti, thumbcache_*.db e iconcache_*.db, in %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. Esplora file legge da lì le anteprime, così le cartelle piene di immagini si aprono rapidamente. Si possono eliminare senza rischi: Windows li ricostruisce mentre sfogli e svuotarli risolve le miniature vuote, nere o obsolete e restituisce lo spazio che occupavano.",
        "Questa guida spiega cosa contiene la cache, perché si danneggia, come svuotarla con Pulizia disco, manualmente o con Disk Mop e cosa aspettarsi dopo. L'unico effetto visibile è che le cartelle che aprirai la volta successiva caricheranno le anteprime un po' più lentamente, una sola volta."
      ],
      "sections": [
        {
          "title": "Che cos'è la cache delle miniature",
          "content": [
            "Quando apri in Esplora file una cartella di foto o video, Windows non decodifica ogni immagine ogni volta. Crea una piccola anteprima una sola volta e la memorizza in un database di cache. La volta successiva che apri la cartella, legge le anteprime dal database, ed è per questo che una cartella grande si apre rapidamente.",
            "I database delle anteprime sono i file thumbcache_*.db, denominati in base alla dimensione di anteprima che contengono, come thumbcache_96.db, thumbcache_256.db e thumbcache_1024.db, con thumbcache_idx.db come indice. Le icone di programmi e tipi di file sono memorizzate nei file iconcache_*.db. Tutti si trovano nella cartella Explorer all'interno di AppData locale.",
            "Poiché i database sono solo copie di anteprime, possono essere ricostruiti dagli originali in qualsiasi momento."
          ]
        },
        {
          "title": "Perché le miniature non funzionano",
          "content": [
            "Una cache vale quanto il momento in cui è stata scritta. Se Windows si blocca mentre il database viene aggiornato, se un errore del disco lo danneggia o se un programma sostituisce file senza avvisare Esplora risorse, il database può contenere un'anteprima errata o vuota. Esplora file continua allora a mostrare la miniatura difettosa anche se il file in sé è a posto.",
            "I segni più comuni sono miniature nere o vuote, un'icona generica al posto di un'immagine, un'anteprima vecchia che non corrisponde al file o una cartella lenta a mostrare le anteprime. Icone che appaiono errate dopo aver cambiato un'app predefinita indicano la cache delle icone.",
            "Svuotare la cache costringe Windows a creare nuove anteprime dai file, risolvendo tutti questi problemi."
          ]
        },
        {
          "title": "Eliminare la cache con Pulizia disco",
          "content": [
            "Il modo più semplice è Pulizia disco, perché può rimuovere file che Esplora file tiene aperti. Cerca Pulizia disco, scegli l'unità di sistema, seleziona Anteprime e scegli Elimina file. Puoi deselezionare le altre voci se vuoi svuotare solo le anteprime.",
            "Windows 11 la offre anche in Impostazioni > Sistema > Archiviazione > File temporanei, dove Anteprime compare nell'elenco degli elementi che puoi rimuovere.",
            "Dopo la pulizia, apri una cartella di immagini. La prima visualizzazione è un po' più lenta mentre Windows ricostruisce le anteprime, poi le successive tornano veloci."
          ]
        },
        {
          "title": "Reimpostare la cache manualmente",
          "content": [
            "Se una miniatura rimane errata dopo Pulizia disco, elimina i file da solo. Chiudi tutte le finestre di Esplora file, apri Gestione attività, trova Esplora risorse e scegli Riavvia. Poi apri %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer nella barra degli indirizzi, attiva la visualizzazione degli elementi nascosti ed elimina i file il cui nome inizia con thumbcache_ e iconcache_.",
            "I file che Windows tiene ancora aperti vengono saltati; eliminali di nuovo dopo esserti disconnesso e riconnesso. Non eliminare la cartella Explorer stessa né gli altri file che contiene.",
            "Poi riapri le tue cartelle e lascia che le anteprime vengano ricostruite."
          ]
        },
        {
          "title": "Svuotarla con Disk Mop",
          "content": [
            "La pagina Libera spazio di Disk Mop elenca la Cache delle miniature come una voce singola, con la sua dimensione e una breve spiegazione di ciò che fa la pulizia. Riguarda i file di database thumbcache_ e iconcache_ nella cartella Explorer e nient'altro in quella cartella.",
            "Esegui la scansione, seleziona la voce e conferma. Disk Mop mostra ciò che ha trovato prima di eliminare qualsiasi cosa e la scansione è gratuita, così puoi vedere prima la dimensione. I file che Esplora file tiene aperti vengono saltati, quindi chiudi le finestre di Esplora file in più prima di iniziare.",
            "La cache delle miniature è solo una delle diverse cache sicure presenti nella stessa pagina, quindi puoi svuotare file temporanei e cache dei browser nello stesso passaggio."
          ]
        }
      ],
      "verdict": [
        "La cache delle miniature di Windows è un insieme ricostruibile di database di anteprime e icone. Svuotarla con Pulizia disco o manualmente risolve le miniature vuote, nere o errate e restituisce un po' di spazio; l'unico costo è una prima visualizzazione più lenta di ogni cartella.",
        "Disk Mop elenca la Cache delle miniature insieme ad altre cache sicure, ne mostra la dimensione e chiede conferma prima di eliminare. La scansione è gratuita, così puoi vedere la dimensione prima di decidere."
      ],
      "ctaText": "Svuota la cache delle miniature e altre cache sicure con Disk Mop"
    },
    "pt": {
      "title": "Como limpar o cache de miniaturas no Windows 11 e 10 (corrija miniaturas erradas ou ausentes)",
      "metaDescription": "Miniaturas em branco, erradas ou lentas no Explorador de Arquivos? Veja o que são os arquivos thumbcache e como apagar o cache de miniaturas com segurança.",
      "subtitle": "Redefina o banco de dados oculto por trás das visualizações e dos ícones do Explorador de Arquivos",
      "keyTakeaways": [
        "O Windows guarda as visualizações das suas imagens, vídeos e documentos em arquivos thumbcache_*.db, e os ícones em arquivos iconcache_*.db, dentro de %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Apagar esses arquivos é seguro: o Windows os recria conforme você navega pelas pastas, e apenas a primeira exibição de cada pasta fica mais lenta.",
        "Limpar o cache corrige miniaturas e ícones em branco, pretos, desatualizados ou errados, e ainda devolve o espaço que o cache ocupava."
      ],
      "dataTable": {
        "caption": "Arquivos de cache de miniaturas e ícones na pasta Explorer",
        "columns": [
          "Padrão do arquivo",
          "O que contém",
          "Recriado automaticamente?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Pequenas visualizações usadas na exibição em lista e em detalhes",
            "Sim"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Visualizações médias e grandes usadas na exibição em ícones",
            "Sim"
          ],
          [
            "thumbcache_idx.db e outros arquivos thumbcache_*.db",
            "Índice e tamanhos adicionais do banco de dados de visualizações",
            "Sim"
          ],
          [
            "iconcache_*.db",
            "Ícones de programas e de tipos de arquivo em cache",
            "Sim"
          ]
        ]
      },
      "howTo": {
        "name": "Como limpar o cache de miniaturas no Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Abra a Limpeza de Disco",
            "text": "Pesquise Limpeza de Disco no menu Iniciar e escolha a unidade do sistema. Aguarde enquanto ela calcula o que pode ser removido."
          },
          {
            "name": "Marque Miniaturas",
            "text": "Na lista de arquivos a excluir, marque Miniaturas. Você pode desmarcar os outros itens se quiser limpar apenas o cache de visualizações."
          },
          {
            "name": "Confirme a limpeza",
            "text": "Escolha OK e depois Excluir Arquivos. O Windows remove o banco de dados de miniaturas e o recria conforme você abre as pastas."
          },
          {
            "name": "Redefina manualmente se as miniaturas continuarem erradas",
            "text": "Feche todas as janelas do Explorador de Arquivos, abra o Gerenciador de Tarefas, reinicie o Windows Explorer, depois exclua os arquivos thumbcache_*.db e iconcache_*.db em %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer e abra suas pastas novamente."
          },
          {
            "name": "Ou limpe com o Disk Mop",
            "text": "Abra o Disk Mop, vá para Liberar espaço, execute a verificação e marque Cache de miniaturas. Confira o tamanho e confirme."
          }
        ]
      },
      "faq": [
        {
          "question": "É seguro apagar os arquivos thumbcache?",
          "answer": "Sim. Um arquivo thumbcache é uma cópia de visualizações que o Windows pode gerar novamente a partir das suas imagens, vídeos e documentos originais. Apagá-lo não remove nem altera nenhum dos seus arquivos."
        },
        {
          "question": "Por que minhas miniaturas aparecem pretas, em branco ou erradas no Explorador de Arquivos?",
          "answer": "O cache é um banco de dados e pode ser corrompido ou ficar desatualizado, por exemplo após uma falha, um erro de disco ou um programa que altera arquivos sem o Windows perceber. O Windows continua então exibindo a visualização defeituosa até que o cache seja limpo."
        },
        {
          "question": "Por que não consigo apagar diretamente os arquivos do cache de miniaturas?",
          "answer": "O Explorador de Arquivos mantém os arquivos thumbcache abertos enquanto está em execução, e por isso o Windows se recusa a excluir alguns deles. Use a Limpeza de Disco ou feche as janelas do Explorador de Arquivos e reinicie o Windows Explorer antes de excluir os arquivos."
        },
        {
          "question": "Qual é o tamanho do cache de miniaturas?",
          "answer": "Depende de quantas imagens e vídeos você já navegou. Um PC típico tem de cerca de 100 MB a algumas centenas de megabytes de arquivos de cache de miniaturas e ícones, e uma grande biblioteca de fotos pode aumentar esse valor."
        }
      ],
      "intro": [
        "O cache de miniaturas do Windows é um conjunto de arquivos de banco de dados ocultos, thumbcache_*.db e iconcache_*.db, em %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. O Explorador de Arquivos lê as visualizações a partir deles para que pastas cheias de imagens abram rápido. É seguro apagá-los: o Windows os recria conforme você navega, e limpá-los corrige miniaturas em branco, pretas ou desatualizadas e devolve o espaço que usavam.",
        "Este guia explica o que o cache contém, por que ele dá problema, como limpá-lo com a Limpeza de Disco, manualmente ou com o Disk Mop, e o que esperar depois. O único efeito visível é que as pastas que você abrir em seguida carregarão as visualizações um pouco mais devagar, uma única vez."
      ],
      "sections": [
        {
          "title": "O que é o cache de miniaturas",
          "content": [
            "Quando você abre uma pasta de fotos ou vídeos no Explorador de Arquivos, o Windows não decodifica cada imagem a cada vez. Ele cria uma pequena visualização uma só vez e a guarda em um banco de dados de cache. Na próxima vez que você abrir a pasta, ele lê as visualizações do banco de dados, e é por isso que uma pasta grande abre rápido.",
            "Os bancos de dados de visualização são os arquivos thumbcache_*.db, nomeados de acordo com o tamanho de visualização que contêm, como thumbcache_96.db, thumbcache_256.db e thumbcache_1024.db, com thumbcache_idx.db como índice. Os ícones de programas e tipos de arquivo ficam em arquivos iconcache_*.db. Todos estão na pasta Explorer, dentro do AppData local.",
            "Como os bancos de dados são apenas cópias de visualizações, eles podem ser recriados a partir dos seus originais a qualquer momento."
          ]
        },
        {
          "title": "Por que as miniaturas dão problema",
          "content": [
            "Um cache é tão bom quanto o momento em que foi gravado. Se o Windows travar enquanto o banco de dados é atualizado, se um erro de disco o danificar ou se um programa substituir arquivos sem avisar o Explorer, o banco de dados pode conter uma visualização errada ou vazia. O Explorer continua então exibindo a miniatura defeituosa, mesmo que o arquivo em si esteja intacto.",
            "Os sinais habituais são miniaturas pretas ou em branco, um ícone genérico no lugar de uma imagem, uma visualização antiga que não corresponde ao arquivo ou uma pasta lenta para mostrar visualizações. Ícones que parecem errados depois de trocar um aplicativo padrão apontam para o cache de ícones.",
            "Limpar o cache força o Windows a criar visualizações novas a partir dos arquivos, o que corrige todos esses problemas."
          ]
        },
        {
          "title": "Apague o cache com a Limpeza de Disco",
          "content": [
            "A forma mais fácil é a Limpeza de Disco, porque ela consegue remover arquivos que o Explorador de Arquivos mantém abertos. Pesquise Limpeza de Disco, escolha a unidade do sistema, marque Miniaturas e escolha Excluir Arquivos. Você pode desmarcar os outros itens se quiser limpar apenas as visualizações.",
            "O Windows 11 também oferece isso em Configurações > Sistema > Armazenamento > Arquivos temporários, onde Miniaturas aparece na lista de itens que você pode remover.",
            "Depois da limpeza, abra uma pasta de imagens. A primeira exibição fica um pouco mais lenta enquanto o Windows recria as visualizações, e as seguintes voltam a ser rápidas."
          ]
        },
        {
          "title": "Redefina o cache manualmente",
          "content": [
            "Se uma miniatura continuar errada depois da Limpeza de Disco, exclua os arquivos você mesmo. Feche todas as janelas do Explorador de Arquivos, abra o Gerenciador de Tarefas, localize o Windows Explorer e escolha Reiniciar. Em seguida, abra %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer na barra de endereços, ative a exibição de itens ocultos e exclua os arquivos que começam com thumbcache_ e iconcache_.",
            "Os arquivos que o Windows ainda mantém abertos são ignorados; exclua-os novamente depois de sair e entrar de novo na sua conta. Não exclua a própria pasta Explorer nem outros arquivos dentro dela.",
            "Depois, reabra suas pastas e deixe as visualizações serem recriadas."
          ]
        },
        {
          "title": "Limpe com o Disk Mop",
          "content": [
            "A página Liberar espaço do Disk Mop lista o Cache de miniaturas como um único item, com o tamanho e uma breve explicação do que a limpeza faz. Ela abrange os arquivos de banco de dados thumbcache_ e iconcache_ na pasta Explorer e nada mais dessa pasta.",
            "Execute a verificação, marque o item e confirme. O Disk Mop mostra o que encontrou antes de excluir qualquer coisa, e a verificação é gratuita, então você pode ver o tamanho primeiro. Os arquivos que o Explorer mantém abertos são ignorados, por isso feche as janelas extras do Explorer antes de começar.",
            "O cache de miniaturas é apenas um de vários caches seguros na mesma página, então você pode limpar arquivos temporários e caches de navegadores na mesma passada."
          ]
        }
      ],
      "verdict": [
        "O cache de miniaturas do Windows é um conjunto recriável de bancos de dados de visualizações e ícones. Limpá-lo com a Limpeza de Disco ou manualmente corrige miniaturas em branco, pretas ou erradas e devolve um pouco de espaço; o único custo é uma primeira exibição mais lenta de cada pasta.",
        "O Disk Mop lista o Cache de miniaturas ao lado de outros caches seguros, mostra o tamanho e pergunta antes de excluir. A verificação é gratuita, então você pode ver o tamanho antes de decidir."
      ],
      "ctaText": "Limpe o cache de miniaturas e outros caches seguros com o Disk Mop"
    },
    "ja": {
      "title": "Windows 11/10 でサムネイルキャッシュを削除する方法(サムネイルが違う・表示されない時の対処)",
      "metaDescription": "エクスプローラーのサムネイルが空白・違う画像・遅い場合に。thumbcache ファイルの正体と、Windows のサムネイルキャッシュを安全に削除して再作成する手順を解説します。",
      "subtitle": "エクスプローラーのプレビューとアイコンの裏にある隠しデータベースをリセットします",
      "keyTakeaways": [
        "Windows は、画像・動画・ドキュメントのプレビューを thumbcache_*.db に、アイコンを iconcache_*.db に保存します。保存先は %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer です。",
        "これらのファイルを削除しても安全です。フォルダーを開くたびに Windows が再作成し、遅くなるのは各フォルダーの最初の表示だけです。",
        "キャッシュを消去すると、空白・真っ黒・古い・間違ったサムネイルやアイコンが直り、キャッシュが使っていた容量も戻ります。"
      ],
      "dataTable": {
        "caption": "Explorer フォルダー内のサムネイルとアイコンのキャッシュファイル",
        "columns": [
          "ファイル名のパターン",
          "保存される内容",
          "自動で再作成されるか"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "一覧表示や詳細表示で使う小さなプレビュー",
            "はい"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "アイコン表示で使う中・大サイズのプレビュー",
            "はい"
          ],
          [
            "thumbcache_idx.db とその他の thumbcache_*.db ファイル",
            "プレビューデータベースのインデックスと追加サイズ",
            "はい"
          ],
          [
            "iconcache_*.db",
            "キャッシュされたプログラムとファイルの種類のアイコン",
            "はい"
          ]
        ]
      },
      "howTo": {
        "name": "Windows でサムネイルキャッシュを削除する方法",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "ディスク クリーンアップを開く",
            "text": "スタートメニューで「ディスク クリーンアップ」を検索し、システムドライブを選びます。削除できる項目が計算されるまで待ちます。"
          },
          {
            "name": "縮小版にチェックを入れる",
            "text": "削除するファイルの一覧で「縮小版」にチェックを入れます。プレビューのキャッシュだけを消したい場合は、他の項目のチェックを外してかまいません。"
          },
          {
            "name": "クリーンアップを確定する",
            "text": "「OK」を選び、続けて「ファイルの削除」を選びます。Windows がサムネイルのデータベースを削除し、フォルダーを開くたびに再作成します。"
          },
          {
            "name": "それでも直らない場合は手動でリセットする",
            "text": "すべてのエクスプローラーのウィンドウを閉じ、タスク マネージャーを開いて Windows エクスプローラーを再起動します。次に %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer にある thumbcache_*.db と iconcache_*.db を削除し、フォルダーを開き直します。"
          },
          {
            "name": "または Disk Mop で削除する",
            "text": "Disk Mop を開いて「空き容量を増やす」に移動し、スキャンを実行して「サムネイルキャッシュ」にチェックを入れます。サイズを確認して実行します。"
          }
        ]
      },
      "faq": [
        {
          "question": "thumbcache ファイルを削除しても安全ですか?",
          "answer": "はい。thumbcache ファイルは、元の画像・動画・ドキュメントから Windows がいつでも再生成できるプレビューのコピーです。削除しても、お客様のファイルが削除されたり変更されたりすることはありません。"
        },
        {
          "question": "エクスプローラーのサムネイルが真っ黒・空白・間違った画像になるのはなぜですか?",
          "answer": "キャッシュはデータベースなので、クラッシュ、ディスクエラー、Windows が気付かないままファイルを変更するプログラムなどの後に、破損したり古くなったりすることがあります。その場合、キャッシュを消去するまで Windows は壊れたプレビューを表示し続けます。"
        },
        {
          "question": "サムネイルキャッシュのファイルを直接削除できないのはなぜですか?",
          "answer": "エクスプローラーは動作中に thumbcache ファイルを開いたままにするため、Windows は一部のファイルの削除を拒否します。ディスク クリーンアップを使うか、エクスプローラーのウィンドウを閉じて Windows エクスプローラーを再起動してから削除してください。"
        },
        {
          "question": "サムネイルキャッシュはどれくらいの大きさですか?",
          "answer": "閲覧した画像や動画の数によって異なります。一般的な PC では、サムネイルとアイコンのキャッシュファイルは約 100 MB から数百 MB で、写真ライブラリが大きいとさらに増えることがあります。"
        }
      ],
      "intro": [
        "Windows のサムネイルキャッシュは、%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer にある thumbcache_*.db と iconcache_*.db という隠しデータベースファイルの集まりです。エクスプローラーはここからプレビューを読み込み、画像が多いフォルダーを素早く開きます。削除しても安全で、Windows はフォルダーを閲覧するたびに再作成します。消去すると、空白・真っ黒・古いサムネイルが直り、使っていた容量も戻ります。",
        "このガイドでは、キャッシュの内容、不具合が起きる理由、ディスク クリーンアップ・手動・Disk Mop での消去方法、消去後の挙動を説明します。目に見える影響は、次に開くフォルダーのプレビューの読み込みが一度だけ少し遅くなることだけです。"
      ],
      "sections": [
        {
          "title": "サムネイルキャッシュとは",
          "content": [
            "エクスプローラーで写真や動画のフォルダーを開くとき、Windows は毎回すべての画像をデコードするわけではありません。小さなプレビューを一度だけ作成し、キャッシュのデータベースに保存します。次回フォルダーを開くときはそのデータベースからプレビューを読み込むため、大きなフォルダーでも素早く開きます。",
            "プレビューのデータベースは thumbcache_*.db ファイルで、保存するプレビューのサイズにちなんで thumbcache_96.db、thumbcache_256.db、thumbcache_1024.db のように名前が付けられ、thumbcache_idx.db がインデックスです。プログラムやファイルの種類のアイコンは iconcache_*.db ファイルに保存されます。これらはすべて、ローカルの AppData 内にある Explorer フォルダーにあります。",
            "データベースはプレビューのコピーにすぎないため、元のファイルからいつでも再作成できます。"
          ]
        },
        {
          "title": "サムネイルに不具合が起きる理由",
          "content": [
            "キャッシュは、書き込まれた時点の内容以上には正確になりません。データベースの更新中に Windows がクラッシュしたり、ディスクエラーで破損したり、プログラムがエクスプローラーに知らせずにファイルを置き換えたりすると、データベースに間違ったプレビューや空のプレビューが残ることがあります。すると、ファイル自体は正常でも、エクスプローラーは壊れたサムネイルを表示し続けます。",
            "よく見られる症状は、黒や空白のサムネイル、画像のはずが汎用アイコンになる、ファイルと一致しない古いプレビューが表示される、フォルダーのプレビュー表示が遅い、などです。既定のアプリを変更した後にアイコンがおかしい場合は、アイコンキャッシュが原因です。",
            "キャッシュを消去すると、Windows がファイルから新しいプレビューを作り直すため、これらの症状はすべて解消されます。"
          ]
        },
        {
          "title": "ディスク クリーンアップでキャッシュを削除する",
          "content": [
            "最も簡単な方法はディスク クリーンアップです。エクスプローラーが開いたままにしているファイルも削除できるためです。「ディスク クリーンアップ」を検索し、システムドライブを選び、「縮小版」にチェックを入れて「ファイルの削除」を選びます。プレビューだけを消したい場合は、他の項目のチェックを外してかまいません。",
            "Windows 11 では、設定 > システム > 記憶域 > 一時ファイル でも実行できます。削除できる項目の一覧に「縮小版」が表示されます。",
            "クリーンアップ後、画像のフォルダーを開いてみてください。Windows がプレビューを再作成する間、最初の表示は少し遅くなりますが、2 回目以降は再び速くなります。"
          ]
        },
        {
          "title": "キャッシュを手動でリセットする",
          "content": [
            "ディスク クリーンアップ後もサムネイルが直らない場合は、ファイルを自分で削除します。すべてのエクスプローラーのウィンドウを閉じ、タスク マネージャーを開いて Windows エクスプローラーを見つけ、「再起動」を選びます。次にアドレスバーで %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer を開き、隠しファイルを表示して、thumbcache_ と iconcache_ で始まるファイルを削除します。",
            "Windows がまだ開いているファイルはスキップされます。サインアウトして再度サインインしてから、もう一度削除してください。Explorer フォルダー自体や、その中の他のファイルは削除しないでください。",
            "その後、フォルダーを開き直して、プレビューが再作成されるのを待ちます。"
          ]
        },
        {
          "title": "Disk Mop で消去する",
          "content": [
            "Disk Mop の「空き容量を増やす」ページには、「サムネイルキャッシュ」が 1 つの項目として、サイズと消去した場合の内容の簡単な説明とともに表示されます。対象は Explorer フォルダー内の thumbcache_ と iconcache_ のデータベースファイルのみで、そのフォルダー内の他のファイルには触れません。",
            "スキャンを実行し、項目にチェックを入れて実行します。Disk Mop は削除の前に検出内容を表示し、スキャンは無料なので、先にサイズを確認できます。エクスプローラーが開いたままにしているファイルはスキップされるため、開始前に余分なエクスプローラーのウィンドウを閉じてください。",
            "サムネイルキャッシュは、同じページにある安全なキャッシュのひとつにすぎません。一時ファイルやブラウザーのキャッシュも同時に消去できます。"
          ]
        }
      ],
      "verdict": [
        "Windows のサムネイルキャッシュは、再作成できるプレビューとアイコンのデータベースです。ディスク クリーンアップまたは手動で消去すれば、空白・真っ黒・間違ったサムネイルが直り、容量も少し戻ります。代償は、各フォルダーの最初の表示が少し遅くなることだけです。",
        "Disk Mop は「サムネイルキャッシュ」を他の安全なキャッシュと並べて表示し、サイズを示して、削除前に確認します。スキャンは無料なので、決める前にサイズを確認できます。"
      ],
      "ctaText": "Disk Mop でサムネイルキャッシュと他の安全なキャッシュを消去"
    },
    "ko": {
      "title": "Windows 11/10에서 축소판 그림 캐시 삭제하는 방법 (잘못되거나 보이지 않는 미리 보기 해결)",
      "metaDescription": "파일 탐색기의 미리 보기가 비어 있거나 잘못되거나 느린가요? thumbcache 파일이 무엇인지, Windows 축소판 그림 캐시를 안전하게 삭제하고 다시 만드는 방법을 알려 드립니다.",
      "subtitle": "파일 탐색기 미리 보기와 아이콘 뒤에 숨은 데이터베이스를 초기화하세요",
      "keyTakeaways": [
        "Windows는 사진, 동영상, 문서의 미리 보기를 thumbcache_*.db 파일에, 아이콘을 iconcache_*.db 파일에 저장하며, 위치는 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 입니다.",
        "이 파일들은 삭제해도 안전합니다. 폴더를 둘러볼 때 Windows가 다시 만들며, 각 폴더를 처음 열 때만 조금 느려집니다.",
        "캐시를 지우면 비어 있거나, 검게 나오거나, 오래되었거나, 잘못된 축소판 그림과 아이콘이 해결되고 캐시가 차지하던 공간도 돌려받습니다."
      ],
      "dataTable": {
        "caption": "Explorer 폴더의 축소판 그림 및 아이콘 캐시 파일",
        "columns": [
          "파일 패턴",
          "저장하는 내용",
          "자동으로 다시 만들어지나요?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "목록 및 자세히 보기에서 사용하는 작은 미리 보기",
            "예"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "아이콘 보기에서 사용하는 중간 및 큰 미리 보기",
            "예"
          ],
          [
            "thumbcache_idx.db 및 기타 thumbcache_*.db 파일",
            "미리 보기 데이터베이스의 인덱스와 추가 크기",
            "예"
          ],
          [
            "iconcache_*.db",
            "캐시된 프로그램 및 파일 형식 아이콘",
            "예"
          ]
        ]
      },
      "howTo": {
        "name": "Windows에서 축소판 그림 캐시를 삭제하는 방법",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "디스크 정리 열기",
            "text": "시작 메뉴에서 디스크 정리를 검색하고 시스템 드라이브를 선택합니다. 삭제할 수 있는 항목을 계산하는 동안 기다립니다."
          },
          {
            "name": "미리 보기 그림 선택",
            "text": "삭제할 파일 목록에서 미리 보기 그림을 선택합니다. 미리 보기 캐시만 지우려면 다른 항목의 선택을 해제해도 됩니다."
          },
          {
            "name": "정리 확인",
            "text": "확인을 선택한 다음 파일 삭제를 선택합니다. Windows가 축소판 그림 데이터베이스를 삭제하고, 폴더를 열 때마다 다시 만듭니다."
          },
          {
            "name": "여전히 잘못 표시되면 수동으로 초기화",
            "text": "모든 파일 탐색기 창을 닫고 작업 관리자를 연 다음 Windows 탐색기를 다시 시작합니다. 그다음 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 의 thumbcache_*.db 및 iconcache_*.db 파일을 삭제하고 폴더를 다시 엽니다."
          },
          {
            "name": "또는 Disk Mop으로 삭제",
            "text": "Disk Mop을 열고 공간 확보로 이동해 검사를 실행한 다음 축소판 그림 캐시를 선택합니다. 크기를 확인하고 진행합니다."
          }
        ]
      },
      "faq": [
        {
          "question": "thumbcache 파일을 삭제해도 안전한가요?",
          "answer": "네. thumbcache 파일은 Windows가 원본 사진, 동영상, 문서에서 언제든 다시 만들 수 있는 미리 보기의 사본입니다. 삭제해도 사용자의 파일은 삭제되거나 변경되지 않습니다."
        },
        {
          "question": "파일 탐색기에서 축소판 그림이 검게 나오거나 비어 있거나 잘못 표시되는 이유는 무엇인가요?",
          "answer": "캐시는 데이터베이스이므로 충돌, 디스크 오류, Windows가 알아차리지 못한 채 파일을 변경한 프로그램 등으로 손상되거나 오래될 수 있습니다. 그러면 캐시를 지울 때까지 Windows가 잘못된 미리 보기를 계속 표시합니다."
        },
        {
          "question": "축소판 그림 캐시 파일을 직접 삭제할 수 없는 이유는 무엇인가요?",
          "answer": "파일 탐색기는 실행되는 동안 thumbcache 파일을 열어 두기 때문에 Windows가 일부 파일의 삭제를 거부합니다. 디스크 정리를 사용하거나, 파일 탐색기 창을 닫고 Windows 탐색기를 다시 시작한 후 파일을 삭제하세요."
        },
        {
          "question": "축소판 그림 캐시는 얼마나 큰가요?",
          "answer": "둘러본 사진과 동영상의 수에 따라 다릅니다. 일반적인 PC의 축소판 그림 및 아이콘 캐시 파일은 약 100MB에서 수백 MB 정도이며, 사진 라이브러리가 크면 더 커질 수 있습니다."
        }
      ],
      "intro": [
        "Windows 축소판 그림 캐시는 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 에 있는 thumbcache_*.db 및 iconcache_*.db 라는 숨겨진 데이터베이스 파일 모음입니다. 파일 탐색기는 여기서 미리 보기를 읽어 사진이 가득한 폴더를 빠르게 엽니다. 삭제해도 안전하며, Windows가 폴더를 둘러볼 때 다시 만듭니다. 지우면 비어 있거나 검거나 오래된 축소판 그림이 해결되고 사용하던 공간도 돌려받습니다.",
        "이 가이드는 캐시에 담기는 내용, 문제가 생기는 이유, 디스크 정리·수동·Disk Mop으로 지우는 방법, 그리고 이후에 기대할 수 있는 점을 설명합니다. 눈에 보이는 영향은 다음에 여는 폴더의 미리 보기가 한 번 조금 느리게 불러와진다는 것뿐입니다."
      ],
      "sections": [
        {
          "title": "축소판 그림 캐시란",
          "content": [
            "파일 탐색기에서 사진이나 동영상 폴더를 열 때 Windows는 매번 모든 이미지를 디코딩하지 않습니다. 작은 미리 보기를 한 번 만들어 캐시 데이터베이스에 저장합니다. 다음에 폴더를 열면 데이터베이스에서 미리 보기를 읽기 때문에 큰 폴더도 빠르게 열립니다.",
            "미리 보기 데이터베이스는 thumbcache_*.db 파일이며, 담고 있는 미리 보기 크기에 따라 thumbcache_96.db, thumbcache_256.db, thumbcache_1024.db 처럼 이름이 붙고, thumbcache_idx.db 는 인덱스입니다. 프로그램과 파일 형식의 아이콘은 iconcache_*.db 파일에 저장됩니다. 모두 로컬 AppData 아래 Explorer 폴더에 있습니다.",
            "데이터베이스는 미리 보기의 사본일 뿐이므로 원본에서 언제든 다시 만들 수 있습니다."
          ]
        },
        {
          "title": "축소판 그림에 문제가 생기는 이유",
          "content": [
            "캐시는 기록된 시점의 상태만큼만 정확합니다. 데이터베이스를 갱신하는 도중 Windows가 충돌하거나, 디스크 오류로 손상되거나, 프로그램이 탐색기에 알리지 않고 파일을 교체하면 데이터베이스에 잘못되었거나 빈 미리 보기가 남을 수 있습니다. 그러면 파일 자체는 멀쩡해도 탐색기가 깨진 축소판 그림을 계속 표시합니다.",
            "흔한 증상은 검거나 빈 축소판 그림, 사진이어야 할 자리의 일반 아이콘, 파일과 맞지 않는 오래된 미리 보기, 미리 보기가 느리게 표시되는 폴더입니다. 기본 앱을 바꾼 뒤 아이콘이 이상하게 보이면 아이콘 캐시가 원인입니다.",
            "캐시를 지우면 Windows가 파일에서 새 미리 보기를 만들게 되어 이 모든 문제가 해결됩니다."
          ]
        },
        {
          "title": "디스크 정리로 캐시 삭제",
          "content": [
            "가장 쉬운 방법은 디스크 정리입니다. 파일 탐색기가 열어 둔 파일도 삭제할 수 있기 때문입니다. 디스크 정리를 검색하고 시스템 드라이브를 선택한 다음 미리 보기 그림을 선택하고 파일 삭제를 선택합니다. 미리 보기만 지우려면 다른 항목의 선택을 해제해도 됩니다.",
            "Windows 11에서는 설정 > 시스템 > 저장소 > 임시 파일 에서도 제공되며, 제거할 수 있는 항목 목록에 미리 보기 그림이 표시됩니다.",
            "정리한 후 사진 폴더를 열어 보세요. Windows가 미리 보기를 다시 만드는 동안 처음 볼 때는 조금 느리지만, 이후에는 다시 빨라집니다."
          ]
        },
        {
          "title": "캐시를 수동으로 초기화",
          "content": [
            "디스크 정리 후에도 축소판 그림이 잘못 표시되면 파일을 직접 삭제하세요. 모든 파일 탐색기 창을 닫고 작업 관리자를 연 다음 Windows 탐색기를 찾아 다시 시작을 선택합니다. 그다음 주소 표시줄에서 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 를 열고, 숨김 항목을 표시한 뒤 thumbcache_ 와 iconcache_ 로 시작하는 파일을 삭제합니다.",
            "Windows가 아직 열어 둔 파일은 건너뛰므로, 로그아웃했다가 다시 로그인한 후 다시 삭제하세요. Explorer 폴더 자체나 그 안의 다른 파일은 삭제하지 마세요.",
            "그런 다음 폴더를 다시 열고 미리 보기가 다시 만들어지도록 기다리세요."
          ]
        },
        {
          "title": "Disk Mop으로 지우기",
          "content": [
            "Disk Mop의 공간 확보 페이지에는 축소판 그림 캐시가 크기와 정리 시 어떤 일이 일어나는지에 대한 짧은 설명과 함께 하나의 항목으로 표시됩니다. Explorer 폴더의 thumbcache_ 및 iconcache_ 데이터베이스 파일만 대상이며, 그 폴더의 다른 파일은 건드리지 않습니다.",
            "검사를 실행하고 항목을 선택한 다음 확인하세요. Disk Mop은 삭제하기 전에 찾은 내용을 보여 주며, 검사는 무료이므로 먼저 크기를 확인할 수 있습니다. 탐색기가 열어 둔 파일은 건너뛰므로 시작하기 전에 불필요한 탐색기 창을 닫으세요.",
            "축소판 그림 캐시는 같은 페이지에 있는 여러 안전한 캐시 중 하나일 뿐이므로, 임시 파일과 브라우저 캐시도 한 번에 지울 수 있습니다."
          ]
        }
      ],
      "verdict": [
        "Windows 축소판 그림 캐시는 다시 만들 수 있는 미리 보기 및 아이콘 데이터베이스 모음입니다. 디스크 정리나 수동으로 지우면 비어 있거나 검거나 잘못된 축소판 그림이 해결되고 공간도 조금 돌려받습니다. 치르는 비용은 각 폴더를 처음 볼 때 조금 느려지는 것뿐입니다.",
        "Disk Mop은 축소판 그림 캐시를 다른 안전한 캐시와 함께 보여 주고, 크기를 표시하며, 삭제하기 전에 확인합니다. 검사는 무료이므로 결정하기 전에 크기를 확인할 수 있습니다."
      ],
      "ctaText": "Disk Mop으로 축소판 그림 캐시와 다른 안전한 캐시 지우기"
    },
    "zh-Hans": {
      "title": "如何在 Windows 11 和 10 中清除缩略图缓存(修复缩略图错误或缺失)",
      "metaDescription": "文件资源管理器缩略图空白、错误或加载慢?了解 thumbcache 文件是什么,以及如何安全删除 Windows 缩略图缓存并让系统重新生成。",
      "subtitle": "重置文件资源管理器预览和图标背后的隐藏数据库",
      "keyTakeaways": [
        "Windows 将图片、视频和文档的预览保存在 thumbcache_*.db 文件中,将图标保存在 iconcache_*.db 文件中,位置为 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer。",
        "删除这些文件是安全的:Windows 会在你浏览文件夹时重新生成它们,只有每个文件夹的首次查看会稍慢一些。",
        "清除缓存可以修复空白、黑色、过时或错误的缩略图和图标,同时还能收回缓存占用的空间。"
      ],
      "dataTable": {
        "caption": "Explorer 文件夹中的缩略图和图标缓存文件",
        "columns": [
          "文件名模式",
          "保存的内容",
          "是否自动重新生成?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "列表和详细信息视图中使用的小预览图",
            "是"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "图标视图中使用的中等和大尺寸预览图",
            "是"
          ],
          [
            "thumbcache_idx.db 及其他 thumbcache_*.db 文件",
            "预览数据库的索引和额外尺寸",
            "是"
          ],
          [
            "iconcache_*.db",
            "已缓存的程序和文件类型图标",
            "是"
          ]
        ]
      },
      "howTo": {
        "name": "如何在 Windows 中清除缩略图缓存",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "打开磁盘清理",
            "text": "在“开始”菜单中搜索“磁盘清理”,并选择系统驱动器。等待它计算可以删除的内容。"
          },
          {
            "name": "勾选缩略图",
            "text": "在要删除的文件列表中勾选“缩略图”。如果只想清除预览缓存,可以取消勾选其他项目。"
          },
          {
            "name": "确认清理",
            "text": "选择“确定”,然后选择“删除文件”。Windows 会删除缩略图数据库,并在你打开文件夹时重新生成。"
          },
          {
            "name": "如果缩略图仍然错误,请手动重置",
            "text": "关闭所有文件资源管理器窗口,打开任务管理器,重启 Windows 资源管理器,然后删除 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 中的 thumbcache_*.db 和 iconcache_*.db 文件,再重新打开你的文件夹。"
          },
          {
            "name": "或使用 Disk Mop 清除",
            "text": "打开 Disk Mop,进入“释放空间”,运行扫描并勾选“缩略图缓存”。确认大小后执行。"
          }
        ]
      },
      "faq": [
        {
          "question": "删除 thumbcache 文件安全吗?",
          "answer": "安全。thumbcache 文件是预览图的副本,Windows 可以根据你的原始图片、视频和文档重新生成。删除它不会移除或更改你的任何文件。"
        },
        {
          "question": "为什么文件资源管理器中的缩略图是黑色、空白或错误的?",
          "answer": "缓存是一个数据库,可能会损坏或过时,例如在系统崩溃、磁盘错误,或某个程序在 Windows 不知情的情况下修改了文件之后。这时 Windows 会一直显示损坏的预览,直到缓存被清除。"
        },
        {
          "question": "为什么我不能直接删除缩略图缓存文件?",
          "answer": "文件资源管理器在运行时会保持 thumbcache 文件处于打开状态,因此 Windows 会拒绝删除其中一些文件。请使用磁盘清理,或者先关闭文件资源管理器窗口并重启 Windows 资源管理器,再删除这些文件。"
        },
        {
          "question": "缩略图缓存有多大?",
          "answer": "这取决于你浏览过多少图片和视频。一台典型的电脑上,缩略图和图标缓存文件大约在 100 MB 到几百 MB 之间,照片库很大时可能更高。"
        }
      ],
      "intro": [
        "Windows 缩略图缓存是一组隐藏的数据库文件,即 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer 中的 thumbcache_*.db 和 iconcache_*.db。文件资源管理器从中读取预览,使图片很多的文件夹能够快速打开。删除它们是安全的:Windows 会在你浏览时重新生成,清除后可以修复空白、黑色或过时的缩略图,并收回它们占用的空间。",
        "本指南说明缓存里有什么、为什么会出问题、如何用磁盘清理、手动方式或 Disk Mop 清除,以及清除之后会发生什么。唯一能看到的影响是:接下来打开的文件夹会有一次预览加载稍慢。"
      ],
      "sections": [
        {
          "title": "什么是缩略图缓存",
          "content": [
            "在文件资源管理器中打开照片或视频文件夹时,Windows 不会每次都解码每一张图片。它只生成一次小预览图,并存放在缓存数据库中。下次打开该文件夹时,它会直接从数据库读取预览,所以大文件夹也能很快打开。",
            "预览数据库就是 thumbcache_*.db 文件,按所存预览的尺寸命名,例如 thumbcache_96.db、thumbcache_256.db 和 thumbcache_1024.db,其中 thumbcache_idx.db 是索引。程序和文件类型的图标保存在 iconcache_*.db 文件中。它们都位于本地 AppData 下的 Explorer 文件夹中。",
            "由于这些数据库只是预览的副本,随时都可以根据你的原始文件重新生成。"
          ]
        },
        {
          "title": "缩略图为什么会出错",
          "content": [
            "缓存的好坏取决于它写入的那一刻。如果 Windows 在更新数据库时崩溃,如果磁盘错误损坏了它,或者某个程序替换了文件却没有通知资源管理器,数据库里就可能留下错误或空白的预览。这样即使文件本身没有问题,资源管理器也会一直显示损坏的缩略图。",
            "常见的症状有:缩略图变黑或空白、本该显示图片的地方出现通用图标、旧预览与文件不符,或者文件夹显示预览很慢。更改默认应用后图标显示不对,则说明问题出在图标缓存。",
            "清除缓存会迫使 Windows 根据文件重新生成预览,从而修复上述所有问题。"
          ]
        },
        {
          "title": "使用磁盘清理删除缓存",
          "content": [
            "最简单的方法是磁盘清理,因为它可以删除文件资源管理器正在占用的文件。搜索“磁盘清理”,选择系统驱动器,勾选“缩略图”,然后选择“删除文件”。如果只想清除预览,可以取消勾选其他项目。",
            "Windows 11 还在 设置 > 系统 > 存储 > 临时文件 中提供此功能,“缩略图”会出现在可以删除的项目列表中。",
            "清理之后,打开一个图片文件夹。Windows 重新生成预览时,第一次查看会稍慢一些,之后又会恢复流畅。"
          ]
        },
        {
          "title": "手动重置缓存",
          "content": [
            "如果磁盘清理后缩略图仍然错误,请自己删除这些文件。关闭所有文件资源管理器窗口,打开任务管理器,找到 Windows 资源管理器并选择“重新启动”。然后在地址栏中打开 %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer,显示隐藏的项目,并删除以 thumbcache_ 和 iconcache_ 开头的文件。",
            "Windows 仍在占用的文件会被跳过;请在注销并重新登录后再次删除它们。不要删除 Explorer 文件夹本身或其中的其他文件。",
            "然后重新打开你的文件夹,让预览重新生成。"
          ]
        },
        {
          "title": "使用 Disk Mop 清除",
          "content": [
            "Disk Mop 的“释放空间”页面将“缩略图缓存”列为一个项目,并显示其大小以及清理该项目的简短说明。它只涵盖 Explorer 文件夹中的 thumbcache_ 和 iconcache_ 数据库文件,不涉及该文件夹中的其他内容。",
            "运行扫描,勾选该项目并确认。Disk Mop 会在删除任何内容之前显示它找到的内容,而且扫描是免费的,所以你可以先查看大小。资源管理器正在占用的文件会被跳过,因此开始前请关闭多余的资源管理器窗口。",
            "缩略图缓存只是同一页面上若干安全缓存之一,因此你可以一次性清除临时文件和浏览器缓存。"
          ]
        }
      ],
      "verdict": [
        "Windows 缩略图缓存是一组可重新生成的预览和图标数据库。用磁盘清理或手动方式清除,可以修复空白、黑色或错误的缩略图,并收回一些空间;唯一的代价是每个文件夹的首次查看会稍慢。",
        "Disk Mop 将“缩略图缓存”与其他安全缓存一并列出,显示其大小,并在删除前询问你。扫描是免费的,所以你可以先看大小再决定。"
      ],
      "ctaText": "用 Disk Mop 清除缩略图缓存和其他安全缓存"
    },
    "ar": {
      "title": "كيفية مسح ذاكرة الصور المصغرة المؤقتة في Windows 11 و10 (إصلاح الصور المصغرة الخاطئة أو المفقودة)",
      "metaDescription": "الصور المصغرة فارغة أو خاطئة أو بطيئة في مستكشف الملفات؟ تعرّف على ملفات thumbcache وكيف تحذف ذاكرة الصور المصغرة في Windows بأمان وتعيد بناءها خلال دقائق.",
      "subtitle": "أعد ضبط قاعدة البيانات المخفية التي تقف وراء معاينات مستكشف الملفات والأيقونات",
      "keyTakeaways": [
        "يخزّن Windows معاينات صورك ومقاطع الفيديو والمستندات في ملفات thumbcache_*.db والأيقونات في ملفات iconcache_*.db داخل %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "حذف هذه الملفات آمن: يعيد Windows بناءها أثناء تصفّحك للمجلدات، ويكون أول عرض لكل مجلد فقط أبطأ قليلاً.",
        "يصلح مسح الذاكرة المؤقتة الصور المصغرة والأيقونات الفارغة أو السوداء أو القديمة أو الخاطئة، ويعيد أيضاً المساحة التي شغلتها."
      ],
      "dataTable": {
        "caption": "ملفات ذاكرة الصور المصغرة والأيقونات المؤقتة في مجلد Explorer",
        "columns": [
          "نمط الملف",
          "ما الذي يحتويه",
          "هل يُعاد بناؤه تلقائياً؟"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "معاينات صغيرة تُستخدم في القوائم وعرض التفاصيل",
            "نعم"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "معاينات متوسطة وكبيرة تُستخدم في عرض الأيقونات",
            "نعم"
          ],
          [
            "thumbcache_idx.db وبقية ملفات thumbcache_*.db",
            "الفهرس والأحجام الإضافية لقاعدة بيانات المعاينات",
            "نعم"
          ],
          [
            "iconcache_*.db",
            "أيقونات البرامج وأنواع الملفات المخزّنة مؤقتاً",
            "نعم"
          ]
        ]
      },
      "howTo": {
        "name": "كيفية مسح ذاكرة الصور المصغرة المؤقتة في Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "افتح تنظيف القرص",
            "text": "ابحث عن تنظيف القرص في قائمة ابدأ واختر محرك أقراص النظام. انتظر حتى يحسب ما يمكن حذفه."
          },
          {
            "name": "حدّد الصور المصغرة",
            "text": "في قائمة الملفات المراد حذفها، حدّد الصور المصغرة. يمكنك إلغاء تحديد العناصر الأخرى إذا أردت مسح ذاكرة المعاينات فقط."
          },
          {
            "name": "أكّد عملية التنظيف",
            "text": "اختر موافق ثم حذف الملفات. يزيل Windows قاعدة بيانات الصور المصغرة ويعيد بناءها أثناء فتحك للمجلدات."
          },
          {
            "name": "أعد ضبطها يدوياً إذا بقيت الصور المصغرة خاطئة",
            "text": "أغلق جميع نوافذ مستكشف الملفات، وافتح إدارة المهام، وأعد تشغيل مستكشف Windows، ثم احذف ملفات thumbcache_*.db وiconcache_*.db في %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer وافتح مجلداتك مرة أخرى."
          },
          {
            "name": "أو امسحها باستخدام Disk Mop",
            "text": "افتح Disk Mop وانتقل إلى تحرير مساحة وشغّل الفحص وحدّد ذاكرة الصور المصغرة المؤقتة. تحقق من الحجم ثم أكّد."
          }
        ]
      },
      "faq": [
        {
          "question": "هل حذف ملفات thumbcache آمن؟",
          "answer": "نعم. ملف thumbcache هو نسخة من المعاينات يستطيع Windows إنشاءها من جديد انطلاقاً من صورك ومقاطع الفيديو والمستندات الأصلية. حذفه لا يزيل أياً من ملفاتك ولا يغيّرها."
        },
        {
          "question": "لماذا تظهر الصور المصغرة سوداء أو فارغة أو خاطئة في مستكشف الملفات؟",
          "answer": "الذاكرة المؤقتة هي قاعدة بيانات، ويمكن أن تتلف أو تصبح قديمة، مثلاً بعد انهيار النظام أو خطأ في القرص أو برنامج غيّر الملفات دون أن يلاحظ Windows. عندها يواصل Windows عرض المعاينة التالفة إلى أن تُمسح الذاكرة المؤقتة."
        },
        {
          "question": "لماذا لا أستطيع حذف ملفات ذاكرة الصور المصغرة مباشرة؟",
          "answer": "يُبقي مستكشف الملفات ملفات thumbcache مفتوحة أثناء تشغيله، لذلك يرفض Windows حذف بعضها. استخدم تنظيف القرص، أو أغلق نوافذ مستكشف الملفات وأعد تشغيل مستكشف Windows قبل حذف الملفات."
        },
        {
          "question": "ما حجم ذاكرة الصور المصغرة المؤقتة؟",
          "answer": "يعتمد ذلك على عدد الصور ومقاطع الفيديو التي تصفحتها. يملك الكمبيوتر المعتاد ما بين نحو 100 MB وبضع مئات من الميغابايت من ملفات ذاكرة الصور المصغرة والأيقونات المؤقتة، وقد ترتفع هذه القيمة مع مكتبة صور كبيرة."
        }
      ],
      "intro": [
        "ذاكرة الصور المصغرة المؤقتة في Windows هي مجموعة من ملفات قواعد البيانات المخفية، thumbcache_*.db وiconcache_*.db، في %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. يقرأ مستكشف الملفات المعاينات منها لتُفتح المجلدات المليئة بالصور بسرعة. حذفها آمن: يعيد Windows بناءها أثناء التصفح، ومسحها يصلح الصور المصغرة الفارغة أو السوداء أو القديمة ويعيد المساحة التي استخدمتها.",
        "يشرح هذا الدليل ما تحتويه الذاكرة المؤقتة، ولماذا تتعطل، وكيف تمسحها باستخدام تنظيف القرص أو يدوياً أو باستخدام Disk Mop، وما الذي تتوقعه بعد ذلك. الأثر الوحيد الظاهر هو أن المجلدات التي تفتحها بعد ذلك ستحمّل معاينتها بشكل أبطأ قليلاً مرة واحدة."
      ],
      "sections": [
        {
          "title": "ما هي ذاكرة الصور المصغرة المؤقتة",
          "content": [
            "عندما تفتح مجلداً من الصور أو مقاطع الفيديو في مستكشف الملفات، لا يفك Windows ترميز كل صورة في كل مرة. بل ينشئ معاينة صغيرة مرة واحدة ويخزّنها في قاعدة بيانات مؤقتة. وفي المرة التالية التي تفتح فيها المجلد، يقرأ المعاينات من قاعدة البيانات، ولهذا يُفتح المجلد الكبير بسرعة.",
            "قواعد بيانات المعاينات هي ملفات thumbcache_*.db، وتُسمّى بحسب حجم المعاينة التي تحتويها، مثل thumbcache_96.db وthumbcache_256.db وthumbcache_1024.db، مع thumbcache_idx.db بوصفه الفهرس. أما أيقونات البرامج وأنواع الملفات فتُخزَّن في ملفات iconcache_*.db. وتوجد جميعها في مجلد Explorer ضمن AppData المحلي الخاص بك.",
            "ولأن قواعد البيانات هذه ليست سوى نسخ من المعاينات، يمكن إعادة بنائها من ملفاتك الأصلية في أي وقت."
          ]
        },
        {
          "title": "لماذا تظهر الصور المصغرة بشكل خاطئ",
          "content": [
            "الذاكرة المؤقتة جيدة بقدر اللحظة التي كُتبت فيها. إذا انهار Windows أثناء تحديث قاعدة البيانات، أو تسبب خطأ في القرص بإتلافها، أو استبدل أحد البرامج ملفات دون إبلاغ Explorer، فقد تحتوي قاعدة البيانات على معاينة خاطئة أو فارغة. عندها يواصل Explorer عرض الصورة المصغرة التالفة رغم أن الملف نفسه سليم.",
            "العلامات المعتادة هي صور مصغرة سوداء أو فارغة، أو أيقونة عامة في مكان يُفترض أن تظهر فيه صورة، أو معاينة قديمة لا تطابق الملف، أو مجلد بطيء في عرض المعاينات. أما الأيقونات التي تبدو خاطئة بعد تغيير التطبيق الافتراضي فتشير إلى ذاكرة الأيقونات المؤقتة.",
            "يجبر مسح الذاكرة المؤقتة Windows على بناء معاينات جديدة من الملفات، وهذا يصلح كل ما سبق."
          ]
        },
        {
          "title": "احذف الذاكرة المؤقتة باستخدام تنظيف القرص",
          "content": [
            "أسهل طريقة هي تنظيف القرص، لأنه يستطيع حذف الملفات التي يُبقيها مستكشف الملفات مفتوحة. ابحث عن تنظيف القرص، واختر محرك أقراص النظام، وحدّد الصور المصغرة، ثم اختر حذف الملفات. يمكنك إلغاء تحديد العناصر الأخرى إذا أردت مسح المعاينات فقط.",
            "يوفّره Windows 11 أيضاً في الإعدادات > النظام > التخزين > الملفات المؤقتة، حيث تظهر الصور المصغرة في قائمة العناصر التي يمكنك إزالتها.",
            "بعد التنظيف، افتح مجلداً من الصور. يكون العرض الأول أبطأ قليلاً بينما يعيد Windows بناء المعاينات، ثم تعود العروض اللاحقة سريعة."
          ]
        },
        {
          "title": "أعد ضبط الذاكرة المؤقتة يدوياً",
          "content": [
            "إذا بقيت صورة مصغرة خاطئة بعد تنظيف القرص، فاحذف الملفات بنفسك. أغلق كل نوافذ مستكشف الملفات، وافتح إدارة المهام، وابحث عن مستكشف Windows واختر إعادة التشغيل. ثم افتح %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer في شريط العنوان، وفعّل إظهار العناصر المخفية، واحذف الملفات التي تبدأ بـ thumbcache_ وiconcache_.",
            "تُتخطّى الملفات التي لا يزال Windows يبقيها مفتوحة؛ احذفها مرة أخرى بعد تسجيل الخروج ثم الدخول. لا تحذف مجلد Explorer نفسه ولا الملفات الأخرى الموجودة فيه.",
            "ثم أعد فتح مجلداتك ودع المعاينات تُبنى من جديد."
          ]
        },
        {
          "title": "امسحها باستخدام Disk Mop",
          "content": [
            "تعرض صفحة تحرير مساحة في Disk Mop ذاكرة الصور المصغرة المؤقتة كعنصر واحد مع حجمه وشرح موجز لما يفعله تنظيفه. وهي تشمل ملفات قواعد البيانات thumbcache_ وiconcache_ في مجلد Explorer ولا شيء غيرها في ذلك المجلد.",
            "شغّل الفحص وحدّد العنصر ثم أكّد. يعرض Disk Mop ما وجده قبل أن يحذف أي شيء، والفحص مجاني، لذا يمكنك رؤية الحجم أولاً. تُتخطّى الملفات التي يُبقيها Explorer مفتوحة، لذلك أغلق نوافذ Explorer الإضافية قبل أن تبدأ.",
            "ذاكرة الصور المصغرة المؤقتة ليست سوى واحدة من عدة ذاكرات مؤقتة آمنة في الصفحة نفسها، لذا يمكنك مسح الملفات المؤقتة وذاكرات المتصفح المؤقتة في الجولة نفسها."
          ]
        }
      ],
      "verdict": [
        "ذاكرة الصور المصغرة المؤقتة في Windows هي مجموعة قابلة لإعادة البناء من قواعد بيانات المعاينات والأيقونات. مسحها باستخدام تنظيف القرص أو يدوياً يصلح الصور المصغرة الفارغة أو السوداء أو الخاطئة ويعيد بعض المساحة، والكلفة الوحيدة هي أن أول عرض لكل مجلد يكون أبطأ.",
        "يعرض Disk Mop ذاكرة الصور المصغرة المؤقتة إلى جانب ذاكرات مؤقتة آمنة أخرى، ويُظهر حجمها ويسأل قبل أن يحذف. الفحص مجاني، لذا يمكنك رؤية الحجم قبل أن تقرر."
      ],
      "ctaText": "امسح ذاكرة الصور المصغرة المؤقتة وغيرها من الذاكرات الآمنة باستخدام Disk Mop"
    },
    "he": {
      "title": "איך לנקות את מטמון התמונות הממוזערות ב-Windows 11 ו-10 (תיקון תמונות ממוזערות שגויות או חסרות)",
      "metaDescription": "תמונות ממוזערות ריקות, שגויות או איטיות ב-File Explorer? הסבר על קובצי thumbcache, איך למחוק את מטמון התמונות הממוזערות ב-Windows בבטחה ולבנות אותו מחדש.",
      "subtitle": "איפוס מסד הנתונים הנסתר שמאחורי התצוגות המקדימות והסמלים ב-File Explorer",
      "keyTakeaways": [
        "Windows שומר תצוגות מקדימות של התמונות, הסרטונים והמסמכים שלכם בקובצי thumbcache_*.db ואת הסמלים בקובצי iconcache_*.db בתוך %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "מחיקת הקבצים האלה בטוחה: Windows בונה אותם מחדש בזמן שאתם גולשים בתיקיות, ורק הצפייה הראשונה בכל תיקייה איטית יותר.",
        "ניקוי המטמון מתקן תמונות ממוזערות וסמלים ריקים, שחורים, מיושנים או שגויים, וגם מחזיר את המקום שהמטמון תפס."
      ],
      "dataTable": {
        "caption": "קובצי מטמון של תמונות ממוזערות וסמלים בתיקיית Explorer",
        "columns": [
          "תבנית הקובץ",
          "מה הוא מכיל",
          "נבנה מחדש אוטומטית?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "תצוגות מקדימות קטנות המשמשות ברשימות ובתצוגת פרטים",
            "כן"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "תצוגות מקדימות בינוניות וגדולות המשמשות בתצוגת סמלים",
            "כן"
          ],
          [
            "thumbcache_idx.db וקובצי thumbcache_*.db נוספים",
            "אינדקס וגדלים נוספים של מסד נתוני התצוגות המקדימות",
            "כן"
          ],
          [
            "iconcache_*.db",
            "סמלים של תוכנות וסוגי קבצים השמורים במטמון",
            "כן"
          ]
        ]
      },
      "howTo": {
        "name": "איך לנקות את מטמון התמונות הממוזערות ב-Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "פתחו את ניקוי הדיסק",
            "text": "חפשו ניקוי הדיסק בתפריט התחל ובחרו את כונן המערכת. המתינו בזמן שהוא מחשב מה אפשר להסיר."
          },
          {
            "name": "סמנו תמונות ממוזערות",
            "text": "ברשימת הקבצים למחיקה, סמנו תמונות ממוזערות. אפשר לבטל את הסימון של הפריטים האחרים אם רוצים לנקות רק את מטמון התצוגות המקדימות."
          },
          {
            "name": "אשרו את הניקוי",
            "text": "בחרו אישור ולאחר מכן מחק קבצים. Windows מסיר את מסד הנתונים של התמונות הממוזערות ובונה אותו מחדש בזמן שאתם פותחים תיקיות."
          },
          {
            "name": "אפסו ידנית אם התמונות הממוזערות עדיין שגויות",
            "text": "סגרו את כל חלונות File Explorer, פתחו את מנהל המשימות, הפעילו מחדש את סייר Windows, ואז מחקו את הקבצים thumbcache_*.db ו-iconcache_*.db בתיקייה %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer ופתחו שוב את התיקיות שלכם."
          },
          {
            "name": "או נקו אותו עם Disk Mop",
            "text": "פתחו את Disk Mop, עברו אל פינוי מקום, הריצו את הסריקה וסמנו מטמון תמונות ממוזערות. בדקו את הגודל ואשרו."
          }
        ]
      },
      "faq": [
        {
          "question": "האם בטוח למחוק קובצי thumbcache?",
          "answer": "כן. קובץ thumbcache הוא עותק של תצוגות מקדימות ש-Windows יכול ליצור מחדש מהתמונות, הסרטונים והמסמכים המקוריים שלכם. מחיקתו לא מסירה ולא משנה אף אחד מהקבצים שלכם."
        },
        {
          "question": "למה התמונות הממוזערות שחורות, ריקות או שגויות ב-File Explorer?",
          "answer": "המטמון הוא מסד נתונים, והוא עלול להיפגם או להתיישן, למשל אחרי קריסה, שגיאת דיסק או תוכנה ששינתה קבצים בלי ש-Windows שם לב. אז Windows ממשיך להציג את התצוגה המקדימה הפגומה עד שהמטמון מנוקה."
        },
        {
          "question": "למה אי אפשר למחוק ישירות את קובצי מטמון התמונות הממוזערות?",
          "answer": "File Explorer מחזיק את קובצי thumbcache פתוחים בזמן שהוא פועל, ולכן Windows מסרב למחוק חלק מהם. השתמשו בניקוי הדיסק, או סגרו את חלונות File Explorer והפעילו מחדש את סייר Windows לפני שאתם מוחקים את הקבצים."
        },
        {
          "question": "מה גודל מטמון התמונות הממוזערות?",
          "answer": "זה תלוי בכמה תמונות וסרטונים עיינתם. במחשב טיפוסי יש בין כ-100 MB לכמה מאות מגה-בייט של קובצי מטמון תמונות ממוזערות וסמלים, ובספריית תמונות גדולה הגודל עשוי להיות גבוה יותר."
        }
      ],
      "intro": [
        "מטמון התמונות הממוזערות של Windows הוא קבוצת קובצי מסדי נתונים נסתרים, thumbcache_*.db ו-iconcache_*.db, ב-%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. File Explorer קורא מהם תצוגות מקדימות כדי שתיקיות מלאות בתמונות ייפתחו במהירות. בטוח למחוק אותם: Windows בונה אותם מחדש בזמן הגלישה, והניקוי מתקן תמונות ממוזערות ריקות, שחורות או מיושנות ומחזיר את המקום שהם תפסו.",
        "המדריך הזה מסביר מה המטמון מכיל, למה הוא מתקלקל, איך לנקות אותו עם ניקוי הדיסק, ידנית או עם Disk Mop, ומה לצפות אחר כך. ההשפעה היחידה הנראית לעין היא שתיקיות שתפתחו בפעם הבאה יטענו את התצוגות המקדימות שלהן לאט יותר פעם אחת."
      ],
      "sections": [
        {
          "title": "מהו מטמון התמונות הממוזערות",
          "content": [
            "כשפותחים תיקייה של תמונות או סרטונים ב-File Explorer, Windows לא מפענח כל תמונה בכל פעם מחדש. הוא בונה תצוגה מקדימה קטנה פעם אחת ושומר אותה במסד נתוני מטמון. בפעם הבאה שתפתחו את התיקייה, הוא קורא את התצוגות המקדימות ממסד הנתונים, ולכן תיקייה גדולה נפתחת במהירות.",
            "מסדי הנתונים של התצוגות המקדימות הם קובצי thumbcache_*.db, ששמם נקבע לפי גודל התצוגה המקדימה שהם מכילים, כמו thumbcache_96.db, thumbcache_256.db ו-thumbcache_1024.db, כש-thumbcache_idx.db הוא האינדקס. סמלים של תוכנות וסוגי קבצים נשמרים בקובצי iconcache_*.db. כולם נמצאים בתיקיית Explorer בתוך AppData המקומית שלכם.",
            "מכיוון שמסדי הנתונים הם רק עותקים של תצוגות מקדימות, אפשר לבנות אותם מחדש מהמקורות שלכם בכל עת."
          ]
        },
        {
          "title": "למה תמונות ממוזערות מתקלקלות",
          "content": [
            "מטמון טוב רק כמו הרגע שבו נכתב. אם Windows קורס בזמן עדכון מסד הנתונים, אם שגיאת דיסק פוגעת בו, או אם תוכנה מחליפה קבצים בלי להודיע ל-Explorer, מסד הנתונים עלול להכיל תצוגה מקדימה שגויה או ריקה. אז Explorer ממשיך להציג את התמונה הממוזערת הפגומה אף שהקובץ עצמו תקין.",
            "הסימנים הרגילים הם תמונות ממוזערות שחורות או ריקות, סמל כללי במקום תמונה, תצוגה מקדימה ישנה שלא תואמת לקובץ, או תיקייה שמציגה תצוגות מקדימות לאט. סמלים שנראים שגויים אחרי החלפת אפליקציית ברירת מחדל מצביעים על מטמון הסמלים.",
            "ניקוי המטמון מאלץ את Windows לבנות תצוגות מקדימות חדשות מהקבצים, וזה מתקן את כל אלה."
          ]
        },
        {
          "title": "מחיקת המטמון באמצעות ניקוי הדיסק",
          "content": [
            "הדרך הקלה ביותר היא ניקוי הדיסק, כי הוא יכול להסיר קבצים ש-File Explorer מחזיק פתוחים. חפשו ניקוי הדיסק, בחרו את כונן המערכת, סמנו תמונות ממוזערות ובחרו מחק קבצים. אפשר לבטל את הסימון של הפריטים האחרים אם רוצים לנקות רק את התצוגות המקדימות.",
            "ב-Windows 11 זה זמין גם בהגדרות > מערכת > אחסון > קבצים זמניים, שבהם תמונות ממוזערות מופיעות ברשימת הפריטים שאפשר להסיר.",
            "אחרי הניקוי, פתחו תיקייה של תמונות. הצפייה הראשונה איטית יותר מעט בזמן ש-Windows בונה מחדש את התצוגות המקדימות, והצפיות הבאות מהירות שוב."
          ]
        },
        {
          "title": "איפוס המטמון ידנית",
          "content": [
            "אם תמונה ממוזערת נשארת שגויה אחרי ניקוי הדיסק, מחקו את הקבצים בעצמכם. סגרו כל חלון של File Explorer, פתחו את מנהל המשימות, מצאו את סייר Windows ובחרו הפעל מחדש. אחר כך פתחו את %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer בשורת הכתובת, הפעילו הצגת פריטים מוסתרים ומחקו את הקבצים שמתחילים ב-thumbcache_ וב-iconcache_.",
            "קבצים ש-Windows עדיין מחזיק פתוחים מדולגים; מחקו אותם שוב אחרי יציאה וכניסה מחדש לחשבון. אל תמחקו את תיקיית Explorer עצמה או קבצים אחרים שבה.",
            "לאחר מכן פתחו שוב את התיקיות ותנו לתצוגות המקדימות להיבנות מחדש."
          ]
        },
        {
          "title": "ניקוי עם Disk Mop",
          "content": [
            "בדף פינוי מקום של Disk Mop מופיע מטמון תמונות ממוזערות כפריט אחד עם הגודל שלו והסבר קצר על מה שהניקוי עושה. הוא מכסה את קובצי מסד הנתונים thumbcache_ ו-iconcache_ בתיקיית Explorer ולא שום דבר אחר בתיקייה הזאת.",
            "הריצו את הסריקה, סמנו את הפריט ואשרו. Disk Mop מציג מה מצא לפני שהוא מוחק משהו, והסריקה חינמית, כך שאפשר לראות את הגודל קודם. קבצים ש-Explorer מחזיק פתוחים מדולגים, ולכן סגרו חלונות Explorer נוספים לפני שמתחילים.",
            "מטמון התמונות הממוזערות הוא רק אחד ממספר מטמונים בטוחים באותו דף, כך שאפשר לנקות קבצים זמניים ומטמוני דפדפן באותו מעבר."
          ]
        }
      ],
      "verdict": [
        "מטמון התמונות הממוזערות של Windows הוא קבוצה של מסדי נתונים של תצוגות מקדימות וסמלים שאפשר לבנות מחדש. ניקויו בעזרת ניקוי הדיסק או ידנית מתקן תמונות ממוזערות ריקות, שחורות או שגויות ומחזיר קצת מקום, והמחיר היחיד הוא צפייה ראשונה איטית יותר בכל תיקייה.",
        "Disk Mop מציג את מטמון התמונות הממוזערות לצד מטמונים בטוחים אחרים, מראה את גודלו ושואל לפני שהוא מוחק. הסריקה חינמית, כך שאפשר לראות את הגודל לפני שמחליטים."
      ],
      "ctaText": "נקו את מטמון התמונות הממוזערות ומטמונים בטוחים אחרים עם Disk Mop"
    },
    "id": {
      "title": "Cara Menghapus Cache Thumbnail di Windows 11 dan 10 (Atasi Thumbnail Salah atau Hilang)",
      "metaDescription": "Thumbnail kosong, salah, atau lambat di File Explorer? Pelajari file thumbcache, cara menghapus cache thumbnail Windows dengan aman, dan membangunnya ulang.",
      "subtitle": "Reset database tersembunyi di balik pratinjau dan ikon File Explorer",
      "keyTakeaways": [
        "Windows menyimpan pratinjau gambar, video, dan dokumen Anda di file thumbcache_*.db serta ikon di file iconcache_*.db di dalam %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Menghapus file-file ini aman: Windows membangunnya ulang saat Anda membuka folder, dan hanya tampilan pertama setiap folder yang menjadi lebih lambat.",
        "Membersihkan cache memperbaiki thumbnail dan ikon yang kosong, hitam, usang, atau salah, serta mengembalikan ruang yang dipakai cache."
      ],
      "dataTable": {
        "caption": "File cache thumbnail dan ikon di folder Explorer",
        "columns": [
          "Pola file",
          "Isinya",
          "Dibangun ulang otomatis?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Pratinjau kecil yang dipakai di daftar dan tampilan detail",
            "Ya"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Pratinjau sedang dan besar yang dipakai di tampilan ikon",
            "Ya"
          ],
          [
            "thumbcache_idx.db dan file thumbcache_*.db lainnya",
            "Indeks dan ukuran tambahan untuk database pratinjau",
            "Ya"
          ],
          [
            "iconcache_*.db",
            "Ikon program dan jenis file yang disimpan dalam cache",
            "Ya"
          ]
        ]
      },
      "howTo": {
        "name": "Cara menghapus cache thumbnail di Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Buka Pembersihan Disk",
            "text": "Cari Pembersihan Disk di menu Start lalu pilih drive sistem Anda. Tunggu sementara Windows menghitung apa yang bisa dihapus."
          },
          {
            "name": "Centang Thumbnail",
            "text": "Di daftar file yang akan dihapus, centang Thumbnail. Anda bisa menghapus centang item lain jika hanya ingin membersihkan cache pratinjau."
          },
          {
            "name": "Konfirmasi pembersihan",
            "text": "Pilih OK lalu Hapus File. Windows menghapus database thumbnail dan membangunnya ulang saat Anda membuka folder."
          },
          {
            "name": "Reset secara manual jika thumbnail masih salah",
            "text": "Tutup semua jendela File Explorer, buka Task Manager, mulai ulang Windows Explorer, lalu hapus file thumbcache_*.db dan iconcache_*.db di %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer dan buka kembali folder Anda."
          },
          {
            "name": "Atau bersihkan dengan Disk Mop",
            "text": "Buka Disk Mop, masuk ke Kosongkan ruang, jalankan pemindaian, lalu centang Cache gambar mini. Periksa ukurannya dan konfirmasi."
          }
        ]
      },
      "faq": [
        {
          "question": "Apakah aman menghapus file thumbcache?",
          "answer": "Ya. File thumbcache adalah salinan pratinjau yang bisa dibuat ulang Windows dari gambar, video, dan dokumen asli Anda. Menghapusnya tidak menghapus atau mengubah file Anda."
        },
        {
          "question": "Mengapa thumbnail saya hitam, kosong, atau salah di File Explorer?",
          "answer": "Cache adalah sebuah database, dan database itu bisa rusak atau usang, misalnya setelah crash, error disk, atau program yang mengubah file tanpa diketahui Windows. Windows kemudian terus menampilkan pratinjau yang rusak sampai cache dibersihkan."
        },
        {
          "question": "Mengapa saya tidak bisa langsung menghapus file cache thumbnail?",
          "answer": "File Explorer menjaga file thumbcache tetap terbuka selama berjalan, sehingga Windows menolak menghapus sebagian di antaranya. Gunakan Pembersihan Disk, atau tutup jendela File Explorer dan mulai ulang Windows Explorer sebelum menghapus file."
        },
        {
          "question": "Berapa besar cache thumbnail?",
          "answer": "Tergantung berapa banyak gambar dan video yang Anda telusuri. PC pada umumnya memiliki file cache thumbnail dan ikon sekitar 100 MB hingga beberapa ratus megabyte, dan pustaka foto yang besar bisa membuatnya lebih besar."
        }
      ],
      "intro": [
        "Cache thumbnail Windows adalah sekumpulan file database tersembunyi, thumbcache_*.db dan iconcache_*.db, di %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. File Explorer membaca pratinjau dari file-file ini agar folder penuh gambar terbuka dengan cepat. File-file ini aman dihapus: Windows membangunnya ulang saat Anda menjelajah, dan membersihkannya memperbaiki thumbnail yang kosong, hitam, atau usang serta mengembalikan ruang yang dipakainya.",
        "Panduan ini menjelaskan isi cache, mengapa cache bisa bermasalah, cara membersihkannya dengan Pembersihan Disk, secara manual, atau dengan Disk Mop, dan apa yang akan terjadi sesudahnya. Satu-satunya efek yang terlihat adalah folder yang Anda buka berikutnya memuat pratinjaunya sedikit lebih lambat satu kali."
      ],
      "sections": [
        {
          "title": "Apa Itu Cache Thumbnail",
          "content": [
            "Saat Anda membuka folder berisi foto atau video di File Explorer, Windows tidak mendekode setiap gambar setiap kali. Windows membuat pratinjau kecil satu kali dan menyimpannya di database cache. Saat Anda membuka folder itu lagi, Windows membaca pratinjau dari database, itulah sebabnya folder besar terbuka dengan cepat.",
            "Database pratinjau adalah file thumbcache_*.db, yang namanya sesuai ukuran pratinjau yang disimpannya, seperti thumbcache_96.db, thumbcache_256.db, dan thumbcache_1024.db, dengan thumbcache_idx.db sebagai indeksnya. Ikon program dan jenis file disimpan di file iconcache_*.db. Semuanya berada di folder Explorer di bawah AppData lokal Anda.",
            "Karena database ini hanya salinan pratinjau, database ini bisa dibangun ulang dari file asli Anda kapan saja."
          ]
        },
        {
          "title": "Mengapa Thumbnail Bermasalah",
          "content": [
            "Cache hanya sebaik saat ia ditulis. Jika Windows crash saat database diperbarui, jika error disk merusaknya, atau jika sebuah program mengganti file tanpa memberi tahu Explorer, database bisa berisi pratinjau yang salah atau kosong. Explorer lalu terus menampilkan thumbnail yang rusak padahal file-nya sendiri baik-baik saja.",
            "Tanda yang umum adalah thumbnail hitam atau kosong, ikon generik di tempat gambar seharusnya muncul, pratinjau lama yang tidak cocok dengan file, atau folder yang lambat menampilkan pratinjau. Ikon yang tampak salah setelah mengganti aplikasi default menunjuk ke cache ikon.",
            "Membersihkan cache memaksa Windows membuat pratinjau baru dari file, dan itu memperbaiki semua masalah tersebut."
          ]
        },
        {
          "title": "Hapus Cache dengan Pembersihan Disk",
          "content": [
            "Cara termudah adalah Pembersihan Disk, karena alat ini bisa menghapus file yang sedang dibuka File Explorer. Cari Pembersihan Disk, pilih drive sistem, centang Thumbnail, lalu pilih Hapus File. Anda bisa menghapus centang item lain jika hanya ingin membersihkan pratinjau.",
            "Windows 11 juga menyediakannya di Pengaturan > Sistem > Penyimpanan > File sementara, tempat Thumbnail muncul dalam daftar item yang bisa dihapus.",
            "Setelah pembersihan, buka folder berisi gambar. Tampilan pertama sedikit lebih lambat saat Windows membangun ulang pratinjau, dan tampilan berikutnya cepat lagi."
          ]
        },
        {
          "title": "Reset Cache Secara Manual",
          "content": [
            "Jika thumbnail tetap salah setelah Pembersihan Disk, hapus file-nya sendiri. Tutup setiap jendela File Explorer, buka Task Manager, cari Windows Explorer, lalu pilih Mulai ulang. Kemudian buka %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer di bilah alamat, aktifkan item tersembunyi, dan hapus file yang diawali thumbcache_ dan iconcache_.",
            "File yang masih dibuka Windows akan dilewati; hapus lagi setelah keluar lalu masuk kembali. Jangan hapus folder Explorer itu sendiri atau file lain di dalamnya.",
            "Setelah itu buka kembali folder Anda dan biarkan pratinjau dibangun ulang."
          ]
        },
        {
          "title": "Bersihkan dengan Disk Mop",
          "content": [
            "Halaman Kosongkan ruang di Disk Mop menampilkan Cache gambar mini sebagai satu item lengkap dengan ukurannya dan penjelasan singkat tentang apa yang dilakukan saat membersihkannya. Cakupannya hanya file database thumbcache_ dan iconcache_ di folder Explorer dan tidak ada yang lain di folder itu.",
            "Jalankan pemindaian, centang item tersebut, lalu konfirmasi. Disk Mop menampilkan apa yang ditemukannya sebelum menghapus apa pun, dan pemindaian gratis, jadi Anda bisa melihat ukurannya lebih dulu. File yang dibuka Explorer akan dilewati, jadi tutup jendela Explorer tambahan sebelum memulai.",
            "Cache thumbnail hanyalah salah satu dari beberapa cache aman di halaman yang sama, sehingga Anda bisa membersihkan file sementara dan cache browser dalam satu kali proses."
          ]
        }
      ],
      "verdict": [
        "Cache thumbnail Windows adalah sekumpulan database pratinjau dan ikon yang bisa dibangun ulang. Membersihkannya dengan Pembersihan Disk atau secara manual memperbaiki thumbnail yang kosong, hitam, atau salah dan mengembalikan sedikit ruang, dengan satu-satunya konsekuensi tampilan pertama setiap folder yang lebih lambat.",
        "Disk Mop menampilkan Cache gambar mini di samping cache aman lainnya, memperlihatkan ukurannya, dan meminta konfirmasi sebelum menghapus. Pemindaian gratis, jadi Anda bisa melihat ukurannya sebelum memutuskan."
      ],
      "ctaText": "Bersihkan cache thumbnail dan cache aman lainnya dengan Disk Mop"
    },
    "pl": {
      "title": "Jak wyczyścić pamięć podręczną miniatur w Windows 11 i 10 (naprawa błędnych lub brakujących miniatur)",
      "metaDescription": "Miniatury puste, błędne lub wolne w Eksploratorze plików? Poznaj pliki thumbcache, bezpiecznie usuń pamięć podręczną miniatur Windows i odbuduj ją w kilka minut.",
      "subtitle": "Zresetuj ukrytą bazę danych stojącą za podglądami i ikonami w Eksploratorze plików",
      "keyTakeaways": [
        "Windows zapisuje podglądy zdjęć, filmów i dokumentów w plikach thumbcache_*.db, a ikony w plikach iconcache_*.db w folderze %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Usunięcie tych plików jest bezpieczne: Windows odbuduje je podczas przeglądania folderów, a wolniejsze jest tylko pierwsze otwarcie każdego folderu.",
        "Wyczyszczenie pamięci podręcznej naprawia puste, czarne, nieaktualne lub błędne miniatury i ikony, a także zwraca zajmowane przez nią miejsce."
      ],
      "dataTable": {
        "caption": "Pliki pamięci podręcznej miniatur i ikon w folderze Explorer",
        "columns": [
          "Wzorzec pliku",
          "Co zawiera",
          "Odbudowywany automatycznie?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Małe podglądy używane na listach i w widoku szczegółów",
            "Tak"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Średnie i duże podglądy używane w widoku ikon",
            "Tak"
          ],
          [
            "thumbcache_idx.db i inne pliki thumbcache_*.db",
            "Indeks i dodatkowe rozmiary bazy danych podglądów",
            "Tak"
          ],
          [
            "iconcache_*.db",
            "Zapisane w pamięci podręcznej ikony programów i typów plików",
            "Tak"
          ]
        ]
      },
      "howTo": {
        "name": "Jak wyczyścić pamięć podręczną miniatur w Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Otwórz Oczyszczanie dysku",
            "text": "Wyszukaj Oczyszczanie dysku w menu Start i wybierz dysk systemowy. Poczekaj, aż narzędzie obliczy, co można usunąć."
          },
          {
            "name": "Zaznacz Miniatury",
            "text": "Na liście plików do usunięcia zaznacz Miniatury. Możesz odznaczyć pozostałe pozycje, jeśli chcesz wyczyścić tylko pamięć podręczną podglądów."
          },
          {
            "name": "Potwierdź czyszczenie",
            "text": "Wybierz OK, a następnie Usuń pliki. Windows usuwa bazę danych miniatur i odbudowuje ją w miarę otwierania folderów."
          },
          {
            "name": "Zresetuj ją ręcznie, jeśli miniatury nadal są błędne",
            "text": "Zamknij wszystkie okna Eksploratora plików, otwórz Menedżera zadań, uruchom ponownie Eksploratora Windows, a następnie usuń pliki thumbcache_*.db i iconcache_*.db w folderze %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer i ponownie otwórz swoje foldery."
          },
          {
            "name": "Albo wyczyść ją za pomocą Disk Mop",
            "text": "Otwórz Disk Mop, przejdź do Zwolnij miejsce, uruchom skanowanie i zaznacz Pamięć podręczna miniatur. Sprawdź rozmiar i potwierdź."
          }
        ]
      },
      "faq": [
        {
          "question": "Czy usuwanie plików thumbcache jest bezpieczne?",
          "answer": "Tak. Plik thumbcache to kopia podglądów, które Windows może wygenerować ponownie na podstawie oryginalnych zdjęć, filmów i dokumentów. Usunięcie go nie kasuje ani nie zmienia żadnego z Twoich plików."
        },
        {
          "question": "Dlaczego miniatury są czarne, puste lub błędne w Eksploratorze plików?",
          "answer": "Pamięć podręczna jest bazą danych, która może zostać uszkodzona lub się zdezaktualizować, na przykład po awarii, błędzie dysku albo gdy program zmienił pliki, a Windows tego nie zauważył. Windows wyświetla wtedy uszkodzony podgląd, dopóki pamięć podręczna nie zostanie wyczyszczona."
        },
        {
          "question": "Dlaczego nie mogę bezpośrednio usunąć plików pamięci podręcznej miniatur?",
          "answer": "Eksplorator plików trzyma pliki thumbcache otwarte, gdy działa, więc Windows odmawia usunięcia niektórych z nich. Użyj Oczyszczania dysku albo zamknij okna Eksploratora plików i uruchom ponownie Eksploratora Windows, zanim usuniesz pliki."
        },
        {
          "question": "Jak duża jest pamięć podręczna miniatur?",
          "answer": "Zależy to od tego, ile zdjęć i filmów przeglądano. Typowy komputer ma od około 100 MB do kilkuset megabajtów plików pamięci podręcznej miniatur i ikon, a duża biblioteka zdjęć może ten rozmiar zwiększyć."
        }
      ],
      "intro": [
        "Pamięć podręczna miniatur Windows to zestaw ukrytych plików baz danych, thumbcache_*.db i iconcache_*.db, w folderze %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. Eksplorator plików odczytuje z nich podglądy, dzięki czemu foldery pełne zdjęć otwierają się szybko. Można je bezpiecznie usunąć: Windows odbuduje je podczas przeglądania, a ich wyczyszczenie naprawia puste, czarne lub nieaktualne miniatury i zwraca zajmowane miejsce.",
        "Ten poradnik wyjaśnia, co zawiera pamięć podręczna, dlaczego przestaje działać poprawnie, jak ją wyczyścić za pomocą Oczyszczania dysku, ręcznie lub w Disk Mop oraz czego się spodziewać potem. Jedynym widocznym skutkiem jest to, że foldery otwierane następnym razem załadują podglądy nieco wolniej, ale tylko raz."
      ],
      "sections": [
        {
          "title": "Czym jest pamięć podręczna miniatur",
          "content": [
            "Kiedy otwierasz w Eksploratorze plików folder ze zdjęciami lub filmami, Windows nie dekoduje za każdym razem każdego obrazu. Tworzy mały podgląd jeden raz i zapisuje go w bazie danych pamięci podręcznej. Przy następnym otwarciu folderu odczytuje podglądy z bazy, dlatego duży folder otwiera się szybko.",
            "Bazami danych podglądów są pliki thumbcache_*.db, nazwane według rozmiaru przechowywanych podglądów, takie jak thumbcache_96.db, thumbcache_256.db i thumbcache_1024.db, a thumbcache_idx.db jest indeksem. Ikony programów i typów plików są zapisane w plikach iconcache_*.db. Wszystkie znajdują się w folderze Explorer w lokalnym AppData.",
            "Ponieważ bazy danych są tylko kopiami podglądów, w każdej chwili można je odbudować z oryginałów."
          ]
        },
        {
          "title": "Dlaczego miniatury przestają działać",
          "content": [
            "Pamięć podręczna jest tak dobra, jak chwila, w której została zapisana. Jeśli Windows ulegnie awarii podczas aktualizacji bazy danych, błąd dysku ją uszkodzi albo program podmieni pliki bez powiadomienia Eksploratora, baza może zawierać błędny lub pusty podgląd. Eksplorator wciąż wyświetla wtedy uszkodzoną miniaturę, mimo że sam plik jest w porządku.",
            "Typowe objawy to czarne lub puste miniatury, ogólna ikona w miejscu zdjęcia, stary podgląd niepasujący do pliku albo folder, który wolno pokazuje podglądy. Ikony wyglądające błędnie po zmianie domyślnej aplikacji wskazują na pamięć podręczną ikon.",
            "Wyczyszczenie pamięci podręcznej zmusza Windows do utworzenia nowych podglądów z plików, co naprawia wszystkie te problemy."
          ]
        },
        {
          "title": "Usuń pamięć podręczną za pomocą Oczyszczania dysku",
          "content": [
            "Najłatwiejszy sposób to Oczyszczanie dysku, ponieważ może usunąć pliki, które Eksplorator plików trzyma otwarte. Wyszukaj Oczyszczanie dysku, wybierz dysk systemowy, zaznacz Miniatury i wybierz Usuń pliki. Możesz odznaczyć pozostałe pozycje, jeśli chcesz wyczyścić tylko podglądy.",
            "Windows 11 oferuje to także w Ustawienia > System > Pamięć > Pliki tymczasowe, gdzie Miniatury pojawiają się na liście elementów do usunięcia.",
            "Po wyczyszczeniu otwórz folder ze zdjęciami. Pierwsze wyświetlenie jest nieco wolniejsze, gdy Windows odbudowuje podglądy, a kolejne znów są szybkie."
          ]
        },
        {
          "title": "Zresetuj pamięć podręczną ręcznie",
          "content": [
            "Jeśli miniatura pozostaje błędna po Oczyszczaniu dysku, usuń pliki samodzielnie. Zamknij wszystkie okna Eksploratora plików, otwórz Menedżera zadań, znajdź Eksplorator Windows i wybierz Uruchom ponownie. Następnie wpisz %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer w pasku adresu, włącz wyświetlanie ukrytych elementów i usuń pliki zaczynające się od thumbcache_ i iconcache_.",
            "Pliki, które Windows nadal ma otwarte, zostaną pominięte; usuń je ponownie po wylogowaniu i zalogowaniu. Nie usuwaj samego folderu Explorer ani innych znajdujących się w nim plików.",
            "Potem ponownie otwórz foldery i poczekaj, aż podglądy zostaną odbudowane."
          ]
        },
        {
          "title": "Wyczyść ją za pomocą Disk Mop",
          "content": [
            "Strona Zwolnij miejsce w Disk Mop pokazuje Pamięć podręczna miniatur jako jedną pozycję z jej rozmiarem i krótkim wyjaśnieniem, co daje jej wyczyszczenie. Obejmuje ona pliki baz danych thumbcache_ i iconcache_ w folderze Explorer i nic więcej z tego folderu.",
            "Uruchom skanowanie, zaznacz pozycję i potwierdź. Disk Mop pokazuje, co znalazł, zanim cokolwiek usunie, a skanowanie jest bezpłatne, więc możesz najpierw zobaczyć rozmiar. Pliki, które Eksplorator trzyma otwarte, są pomijane, dlatego przed rozpoczęciem zamknij dodatkowe okna Eksploratora.",
            "Pamięć podręczna miniatur to tylko jedna z kilku bezpiecznych pamięci podręcznych na tej samej stronie, więc w jednym przebiegu możesz wyczyścić także pliki tymczasowe i pamięci podręczne przeglądarek."
          ]
        }
      ],
      "verdict": [
        "Pamięć podręczna miniatur Windows to odbudowywalny zestaw baz danych podglądów i ikon. Jej wyczyszczenie za pomocą Oczyszczania dysku lub ręcznie naprawia puste, czarne lub błędne miniatury i zwraca trochę miejsca, a jedynym kosztem jest wolniejsze pierwsze wyświetlenie każdego folderu.",
        "Disk Mop pokazuje Pamięć podręczna miniatur obok innych bezpiecznych pamięci podręcznych, wyświetla jej rozmiar i pyta przed usunięciem. Skanowanie jest bezpłatne, więc rozmiar zobaczysz, zanim podejmiesz decyzję."
      ],
      "ctaText": "Wyczyść pamięć podręczną miniatur i inne bezpieczne pamięci podręczne w Disk Mop"
    },
    "ro": {
      "title": "Cum ștergi memoria cache a miniaturilor în Windows 11 și 10 (remediază miniaturile greșite sau lipsă)",
      "metaDescription": "Miniaturi goale, greșite sau lente în File Explorer? Află ce sunt fișierele thumbcache și cum ștergi în siguranță cache-ul de miniaturi din Windows.",
      "subtitle": "Resetează baza de date ascunsă din spatele previzualizărilor și pictogramelor din File Explorer",
      "keyTakeaways": [
        "Windows stochează previzualizările imaginilor, videoclipurilor și documentelor tale în fișiere thumbcache_*.db, iar pictogramele în fișiere iconcache_*.db, în %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Ștergerea acestor fișiere este sigură: Windows le reconstruiește pe măsură ce răsfoiești dosarele, iar doar prima afișare a fiecărui dosar este mai lentă.",
        "Golirea cache-ului remediază miniaturile și pictogramele goale, negre, învechite sau greșite și recuperează totodată spațiul ocupat de cache."
      ],
      "dataTable": {
        "caption": "Fișiere cache de miniaturi și pictograme în dosarul Explorer",
        "columns": [
          "Model de fișier",
          "Ce conține",
          "Se reconstruiește automat?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Previzualizări mici folosite în liste și în vizualizarea detalii",
            "Da"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Previzualizări medii și mari folosite în vizualizarea cu pictograme",
            "Da"
          ],
          [
            "thumbcache_idx.db și alte fișiere thumbcache_*.db",
            "Indexul și dimensiunile suplimentare ale bazei de date de previzualizări",
            "Da"
          ],
          [
            "iconcache_*.db",
            "Pictograme de programe și tipuri de fișiere păstrate în cache",
            "Da"
          ]
        ]
      },
      "howTo": {
        "name": "Cum ștergi memoria cache a miniaturilor în Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Deschide Disk Cleanup",
            "text": "Caută Disk Cleanup în meniul Start și alege unitatea de sistem. Așteaptă până când calculează ce se poate elimina."
          },
          {
            "name": "Bifează Miniaturi",
            "text": "În lista de fișiere de șters, bifează Miniaturi. Poți debifa celelalte elemente dacă vrei să cureți doar cache-ul de previzualizări."
          },
          {
            "name": "Confirmă curățarea",
            "text": "Alege OK, apoi Ștergere fișiere. Windows elimină baza de date de miniaturi și o reconstruiește pe măsură ce deschizi dosarele."
          },
          {
            "name": "Resetează manual dacă miniaturile sunt în continuare greșite",
            "text": "Închide toate ferestrele File Explorer, deschide Manager de activități, repornește Windows Explorer, apoi șterge fișierele thumbcache_*.db și iconcache_*.db din %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer și deschide din nou dosarele."
          },
          {
            "name": "Sau curăță cu Disk Mop",
            "text": "Deschide Disk Mop, mergi la Eliberează spațiu, rulează scanarea și bifează Cache de miniaturi. Verifică dimensiunea și confirmă."
          }
        ]
      },
      "faq": [
        {
          "question": "Este sigur să șterg fișierele thumbcache?",
          "answer": "Da. Un fișier thumbcache este o copie a previzualizărilor pe care Windows le poate genera din nou din imaginile, videoclipurile și documentele tale originale. Ștergerea lui nu elimină și nu modifică niciunul dintre fișierele tale."
        },
        {
          "question": "De ce sunt miniaturile negre, goale sau greșite în File Explorer?",
          "answer": "Cache-ul este o bază de date și se poate deteriora sau poate deveni învechit, de exemplu după o blocare, o eroare de disc sau un program care a modificat fișiere fără ca Windows să observe. Windows continuă apoi să afișeze previzualizarea defectă până când cache-ul este golit."
        },
        {
          "question": "De ce nu pot șterge direct fișierele cache de miniaturi?",
          "answer": "File Explorer ține fișierele thumbcache deschise cât timp rulează, așa că Windows refuză să șteargă unele dintre ele. Folosește Disk Cleanup sau închide ferestrele File Explorer și repornește Windows Explorer înainte să ștergi fișierele."
        },
        {
          "question": "Cât de mare este cache-ul de miniaturi?",
          "answer": "Depinde de câte imagini și videoclipuri ai răsfoit. Un PC obișnuit are între aproximativ 100 MB și câteva sute de megabyți de fișiere cache de miniaturi și pictograme, iar o bibliotecă mare de fotografii poate ridica această valoare."
        }
      ],
      "intro": [
        "Cache-ul de miniaturi din Windows este un set de fișiere de baze de date ascunse, thumbcache_*.db și iconcache_*.db, în %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. File Explorer citește din ele previzualizările, astfel încât dosarele pline de imagini se deschid rapid. Pot fi șterse în siguranță: Windows le reconstruiește pe măsură ce răsfoiești, iar golirea lor remediază miniaturile goale, negre sau învechite și recuperează spațiul folosit.",
        "Acest ghid explică ce conține cache-ul, de ce se strică, cum îl cureți cu Disk Cleanup, manual sau cu Disk Mop și la ce să te aștepți după aceea. Singurul efect vizibil este că dosarele pe care le deschizi data viitoare își încarcă previzualizările ceva mai lent, o singură dată."
      ],
      "sections": [
        {
          "title": "Ce este cache-ul de miniaturi",
          "content": [
            "Când deschizi un dosar cu fotografii sau videoclipuri în File Explorer, Windows nu decodează fiecare imagine de fiecare dată. Construiește o dată o previzualizare mică și o stochează într-o bază de date cache. Data viitoare când deschizi dosarul, citește previzualizările din baza de date, de aceea un dosar mare se deschide rapid.",
            "Bazele de date de previzualizări sunt fișierele thumbcache_*.db, denumite după dimensiunea previzualizării pe care o conțin, precum thumbcache_96.db, thumbcache_256.db și thumbcache_1024.db, iar thumbcache_idx.db este indexul. Pictogramele programelor și ale tipurilor de fișiere sunt stocate în fișiere iconcache_*.db. Toate se află în dosarul Explorer din AppData local.",
            "Fiindcă bazele de date sunt doar copii ale previzualizărilor, pot fi reconstruite oricând din originalele tale."
          ]
        },
        {
          "title": "De ce se strică miniaturile",
          "content": [
            "Un cache este la fel de bun ca momentul în care a fost scris. Dacă Windows se blochează în timp ce baza de date este actualizată, dacă o eroare de disc o deteriorează sau dacă un program înlocuiește fișiere fără să informeze Explorer, baza de date poate conține o previzualizare greșită sau goală. Explorer continuă apoi să afișeze miniatura defectă, deși fișierul în sine este în regulă.",
            "Semnele obișnuite sunt miniaturile negre sau goale, o pictogramă generică acolo unde ar trebui să fie o imagine, o previzualizare veche care nu se potrivește cu fișierul sau un dosar care afișează lent previzualizările. Pictogramele care arată greșit după schimbarea unei aplicații implicite indică cache-ul de pictograme.",
            "Golirea cache-ului obligă Windows să construiască previzualizări noi din fișiere, ceea ce remediază toate aceste probleme."
          ]
        },
        {
          "title": "Șterge cache-ul cu Disk Cleanup",
          "content": [
            "Cea mai simplă metodă este Disk Cleanup, deoarece poate elimina fișiere pe care File Explorer le ține deschise. Caută Disk Cleanup, alege unitatea de sistem, bifează Miniaturi și alege Ștergere fișiere. Poți debifa celelalte elemente dacă vrei să cureți doar previzualizările.",
            "Windows 11 oferă această opțiune și în Setări > Sistem > Stocare > Fișiere temporare, unde Miniaturi apare în lista de elemente pe care le poți elimina.",
            "După curățare, deschide un dosar cu imagini. Prima afișare este puțin mai lentă cât timp Windows reconstruiește previzualizările, iar afișările următoare sunt din nou rapide."
          ]
        },
        {
          "title": "Resetează cache-ul manual",
          "content": [
            "Dacă o miniatură rămâne greșită după Disk Cleanup, șterge tu fișierele. Închide toate ferestrele File Explorer, deschide Manager de activități, găsește Windows Explorer și alege Repornire. Apoi deschide %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer în bara de adrese, activează afișarea elementelor ascunse și șterge fișierele care încep cu thumbcache_ și iconcache_.",
            "Fișierele pe care Windows le ține încă deschise sunt omise; șterge-le din nou după ce te deconectezi și te reconectezi. Nu șterge dosarul Explorer în sine și nici alte fișiere din el.",
            "Apoi redeschide dosarele și lasă previzualizările să se reconstruiască."
          ]
        },
        {
          "title": "Curăță cu Disk Mop",
          "content": [
            "Pagina Eliberează spațiu din Disk Mop listează Cache de miniaturi ca un singur element, cu dimensiunea lui și o scurtă explicație a ceea ce face curățarea. Acoperă fișierele de baze de date thumbcache_ și iconcache_ din dosarul Explorer și nimic altceva din acel dosar.",
            "Rulează scanarea, bifează elementul și confirmă. Disk Mop arată ce a găsit înainte să șteargă ceva, iar scanarea este gratuită, așa că poți vedea mai întâi dimensiunea. Fișierele pe care Explorer le ține deschise sunt omise, așa că închide ferestrele Explorer suplimentare înainte de a începe.",
            "Cache-ul de miniaturi este doar unul dintre mai multe cache-uri sigure de pe aceeași pagină, deci poți curăța fișierele temporare și cache-urile browserelor în aceeași trecere."
          ]
        }
      ],
      "verdict": [
        "Cache-ul de miniaturi din Windows este un set reconstruibil de baze de date de previzualizări și pictograme. Golirea lui cu Disk Cleanup sau manual remediază miniaturile goale, negre sau greșite și recuperează ceva spațiu, iar singurul cost este o primă afișare mai lentă a fiecărui dosar.",
        "Disk Mop listează Cache de miniaturi lângă alte cache-uri sigure, îi arată dimensiunea și cere confirmare înainte să șteargă. Scanarea este gratuită, așa că poți vedea dimensiunea înainte să decizi."
      ],
      "ctaText": "Șterge cache-ul de miniaturi și alte cache-uri sigure cu Disk Mop"
    },
    "ru": {
      "title": "Как очистить кэш эскизов в Windows 11 и 10 (исправляем неверные или пропавшие эскизы)",
      "metaDescription": "Эскизы пустые, неверные или медленные в Проводнике? Что такое файлы thumbcache, как безопасно удалить кэш эскизов Windows и пересоздать его.",
      "subtitle": "Сброс скрытой базы данных, из которой Проводник берёт значки и миниатюры",
      "keyTakeaways": [
        "Windows хранит миниатюры ваших изображений, видео и документов в файлах thumbcache_*.db, а значки в файлах iconcache_*.db в папке %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Удалять эти файлы безопасно: Windows пересоздаёт их по мере просмотра папок, и медленнее становится только первое открытие каждой папки.",
        "Очистка кэша исправляет пустые, чёрные, устаревшие или неверные эскизы и значки, а также возвращает место, которое занимал кэш."
      ],
      "dataTable": {
        "caption": "Файлы кэша эскизов и значков в папке Explorer",
        "columns": [
          "Шаблон файла",
          "Что хранится",
          "Создаётся заново автоматически?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Маленькие миниатюры для списков и режима таблицы",
            "Да"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Средние и крупные миниатюры для режима значков",
            "Да"
          ],
          [
            "thumbcache_idx.db и другие файлы thumbcache_*.db",
            "Индекс и дополнительные размеры базы данных миниатюр",
            "Да"
          ],
          [
            "iconcache_*.db",
            "Кэшированные значки программ и типов файлов",
            "Да"
          ]
        ]
      },
      "howTo": {
        "name": "Как очистить кэш эскизов в Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Откройте Очистку диска",
            "text": "Найдите Очистку диска в меню «Пуск» и выберите системный диск. Подождите, пока будет рассчитано, что можно удалить."
          },
          {
            "name": "Отметьте Эскизы",
            "text": "В списке файлов для удаления отметьте Эскизы. Остальные пункты можно снять, если нужно очистить только кэш миниатюр."
          },
          {
            "name": "Подтвердите очистку",
            "text": "Нажмите OK, затем Удалить файлы. Windows удалит базу данных эскизов и пересоздаст её по мере открытия папок."
          },
          {
            "name": "Сбросьте кэш вручную, если эскизы всё ещё неверные",
            "text": "Закройте все окна Проводника, откройте Диспетчер задач, перезапустите Проводник, затем удалите файлы thumbcache_*.db и iconcache_*.db в папке %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer и снова откройте свои папки."
          },
          {
            "name": "Или очистите кэш с помощью Disk Mop",
            "text": "Откройте Disk Mop, перейдите в раздел «Освободить место», запустите сканирование и отметьте «Кэш эскизов». Проверьте размер и подтвердите."
          }
        ]
      },
      "faq": [
        {
          "question": "Безопасно ли удалять файлы thumbcache?",
          "answer": "Да. Файл thumbcache — это копия миниатюр, которые Windows может создать заново из ваших исходных изображений, видео и документов. Его удаление не стирает и не изменяет ни один из ваших файлов."
        },
        {
          "question": "Почему эскизы в Проводнике чёрные, пустые или неверные?",
          "answer": "Кэш — это база данных, и она может быть повреждена или устареть, например после сбоя, ошибки диска или программы, изменившей файлы без ведома Windows. Тогда Windows продолжает показывать испорченную миниатюру, пока кэш не будет очищен."
        },
        {
          "question": "Почему нельзя просто удалить файлы кэша эскизов?",
          "answer": "Пока Проводник работает, он держит файлы thumbcache открытыми, поэтому Windows отказывается удалять часть из них. Воспользуйтесь Очисткой диска либо закройте окна Проводника и перезапустите Проводник перед удалением файлов."
        },
        {
          "question": "Насколько велик кэш эскизов?",
          "answer": "Это зависит от того, сколько изображений и видео вы просматривали. На обычном компьютере файлы кэша эскизов и значков занимают от примерно 100 MB до нескольких сотен мегабайт, а большая фотобиблиотека может увеличить этот размер."
        }
      ],
      "intro": [
        "Кэш эскизов Windows — это набор скрытых файлов баз данных thumbcache_*.db и iconcache_*.db в папке %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. Проводник читает из них миниатюры, поэтому папки с множеством изображений открываются быстро. Их можно безопасно удалять: Windows пересоздаёт их по мере просмотра, а очистка исправляет пустые, чёрные или устаревшие эскизы и возвращает занятое место.",
        "В этом руководстве объясняется, что хранится в кэше, почему он перестаёт работать правильно, как очистить его с помощью Очистки диска, вручную или с помощью Disk Mop и чего ожидать после этого. Единственное заметное последствие: папки, которые вы откроете в следующий раз, один раз загрузят миниатюры чуть медленнее."
      ],
      "sections": [
        {
          "title": "Что такое кэш эскизов",
          "content": [
            "Когда вы открываете в Проводнике папку с фотографиями или видео, Windows не декодирует каждое изображение заново. Он один раз создаёт маленькую миниатюру и сохраняет её в базе данных кэша. При следующем открытии папки он читает миниатюры из базы, поэтому большая папка открывается быстро.",
            "Базы данных миниатюр — это файлы thumbcache_*.db, названные по размеру хранящихся в них миниатюр, например thumbcache_96.db, thumbcache_256.db и thumbcache_1024.db, а thumbcache_idx.db служит индексом. Значки программ и типов файлов хранятся в файлах iconcache_*.db. Все они находятся в папке Explorer внутри локальной папки AppData.",
            "Поскольку базы данных — это лишь копии миниатюр, их в любой момент можно пересоздать из ваших оригиналов."
          ]
        },
        {
          "title": "Почему эскизы перестают работать правильно",
          "content": [
            "Кэш хорош лишь настолько, насколько корректно он был записан. Если Windows даёт сбой во время обновления базы данных, ошибка диска её повреждает или программа заменяет файлы, не сообщив Проводнику, в базе может оказаться неверная или пустая миниатюра. Проводник продолжает показывать испорченный эскиз, хотя сам файл в порядке.",
            "Обычные признаки — чёрные или пустые эскизы, обычный значок вместо изображения, старая миниатюра, не совпадающая с файлом, или папка, медленно показывающая миниатюры. Значки, выглядящие неверно после смены приложения по умолчанию, указывают на кэш значков.",
            "Очистка кэша заставляет Windows создать новые миниатюры из файлов, что устраняет все эти проблемы."
          ]
        },
        {
          "title": "Удаление кэша через Очистку диска",
          "content": [
            "Проще всего воспользоваться Очисткой диска, потому что она может удалять файлы, которые Проводник держит открытыми. Найдите Очистку диска, выберите системный диск, отметьте Эскизы и нажмите Удалить файлы. Остальные пункты можно снять, если нужно очистить только миниатюры.",
            "В Windows 11 это доступно и в разделе Параметры > Система > Память > Временные файлы, где Эскизы входят в список элементов, которые можно удалить.",
            "После очистки откройте папку с изображениями. Первое открытие немного медленнее, пока Windows пересоздаёт миниатюры, а затем всё снова работает быстро."
          ]
        },
        {
          "title": "Сброс кэша вручную",
          "content": [
            "Если эскиз остаётся неверным после Очистки диска, удалите файлы самостоятельно. Закройте все окна Проводника, откройте Диспетчер задач, найдите Проводник и выберите Перезапустить. Затем введите %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer в адресной строке, включите показ скрытых элементов и удалите файлы, имена которых начинаются с thumbcache_ и iconcache_.",
            "Файлы, которые Windows всё ещё держит открытыми, будут пропущены; удалите их снова после выхода из системы и повторного входа. Не удаляйте саму папку Explorer и другие файлы в ней.",
            "Затем снова откройте свои папки и дождитесь, пока миниатюры будут созданы заново."
          ]
        },
        {
          "title": "Очистка с помощью Disk Mop",
          "content": [
            "На странице «Освободить место» в Disk Mop «Кэш эскизов» отображается одним пунктом с размером и кратким пояснением, что даст его очистка. Он охватывает файлы баз данных thumbcache_ и iconcache_ в папке Explorer и ничего больше в этой папке.",
            "Запустите сканирование, отметьте пункт и подтвердите. Disk Mop показывает найденное, прежде чем что-либо удалить, а сканирование бесплатно, поэтому сначала можно увидеть размер. Файлы, которые Проводник держит открытыми, пропускаются, так что перед началом закройте лишние окна Проводника.",
            "Кэш эскизов — лишь один из нескольких безопасных кэшей на той же странице, поэтому за один проход можно очистить также временные файлы и кэши браузеров."
          ]
        }
      ],
      "verdict": [
        "Кэш эскизов Windows — это набор баз данных миниатюр и значков, который можно пересоздать. Очистка через Очистку диска или вручную исправляет пустые, чёрные или неверные эскизы и возвращает немного места, а единственная цена — более медленное первое открытие каждой папки.",
        "Disk Mop показывает «Кэш эскизов» рядом с другими безопасными кэшами, выводит его размер и спрашивает подтверждение перед удалением. Сканирование бесплатно, поэтому размер можно увидеть до принятия решения."
      ],
      "ctaText": "Очистите кэш эскизов и другие безопасные кэши с помощью Disk Mop"
    },
    "th": {
      "title": "วิธีล้างแคชภาพขนาดย่อใน Windows 11 และ 10 (แก้ภาพขนาดย่อผิดหรือหายไป)",
      "metaDescription": "ภาพขนาดย่อว่าง ผิด หรือช้าใน File Explorer? ทำความรู้จักไฟล์ thumbcache วิธีลบแคชภาพขนาดย่อของ Windows อย่างปลอดภัย และสร้างใหม่ได้ในไม่กี่นาที",
      "subtitle": "รีเซ็ตฐานข้อมูลที่ซ่อนอยู่เบื้องหลังภาพตัวอย่างและไอคอนของ File Explorer",
      "keyTakeaways": [
        "Windows เก็บภาพตัวอย่างของรูปภาพ วิดีโอ และเอกสารไว้ในไฟล์ thumbcache_*.db และเก็บไอคอนไว้ในไฟล์ iconcache_*.db ภายใน %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer",
        "การลบไฟล์เหล่านี้ปลอดภัย: Windows จะสร้างใหม่ขณะที่คุณเปิดดูโฟลเดอร์ และมีเพียงการเปิดดูโฟลเดอร์แต่ละแห่งครั้งแรกเท่านั้นที่ช้าลง",
        "การล้างแคชช่วยแก้ภาพขนาดย่อและไอคอนที่ว่าง ดำ เก่า หรือผิด และยังคืนพื้นที่ที่แคชใช้อยู่ด้วย"
      ],
      "dataTable": {
        "caption": "ไฟล์แคชภาพขนาดย่อและไอคอนในโฟลเดอร์ Explorer",
        "columns": [
          "รูปแบบไฟล์",
          "เก็บอะไรไว้",
          "สร้างใหม่อัตโนมัติหรือไม่"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "ภาพตัวอย่างขนาดเล็กที่ใช้ในมุมมองรายการและรายละเอียด",
            "ใช่"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "ภาพตัวอย่างขนาดกลางและใหญ่ที่ใช้ในมุมมองไอคอน",
            "ใช่"
          ],
          [
            "thumbcache_idx.db และไฟล์ thumbcache_*.db อื่น ๆ",
            "ดัชนีและขนาดเพิ่มเติมของฐานข้อมูลภาพตัวอย่าง",
            "ใช่"
          ],
          [
            "iconcache_*.db",
            "ไอคอนของโปรแกรมและประเภทไฟล์ที่แคชไว้",
            "ใช่"
          ]
        ]
      },
      "howTo": {
        "name": "วิธีล้างแคชภาพขนาดย่อใน Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "เปิดการล้างข้อมูลบนดิสก์",
            "text": "ค้นหาการล้างข้อมูลบนดิสก์ในเมนูเริ่มแล้วเลือกไดรฟ์ระบบของคุณ รอสักครู่ขณะที่ระบบคำนวณว่าลบอะไรได้บ้าง"
          },
          {
            "name": "เลือกภาพขนาดย่อ",
            "text": "ในรายการไฟล์ที่จะลบ ให้เลือกภาพขนาดย่อ คุณสามารถยกเลิกการเลือกรายการอื่นได้หากต้องการล้างเฉพาะแคชภาพตัวอย่าง"
          },
          {
            "name": "ยืนยันการล้างข้อมูล",
            "text": "เลือกตกลงแล้วเลือกลบไฟล์ Windows จะลบฐานข้อมูลภาพขนาดย่อและสร้างใหม่ขณะที่คุณเปิดโฟลเดอร์"
          },
          {
            "name": "รีเซ็ตด้วยตนเองหากภาพขนาดย่อยังผิดอยู่",
            "text": "ปิดหน้าต่าง File Explorer ทั้งหมด เปิดตัวจัดการงาน เริ่ม Windows Explorer ใหม่ จากนั้นลบไฟล์ thumbcache_*.db และ iconcache_*.db ใน %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer แล้วเปิดโฟลเดอร์ของคุณอีกครั้ง"
          },
          {
            "name": "หรือล้างด้วย Disk Mop",
            "text": "เปิด Disk Mop ไปที่ เพิ่มพื้นที่ว่าง เรียกใช้การสแกน แล้วเลือก แคชภาพขนาดย่อ ตรวจสอบขนาดแล้วยืนยัน"
          }
        ]
      },
      "faq": [
        {
          "question": "การลบไฟล์ thumbcache ปลอดภัยหรือไม่",
          "answer": "ปลอดภัย ไฟล์ thumbcache คือสำเนาของภาพตัวอย่างที่ Windows สร้างใหม่ได้จากรูปภาพ วิดีโอ และเอกสารต้นฉบับของคุณ การลบไฟล์นี้ไม่ได้ลบหรือเปลี่ยนแปลงไฟล์ใด ๆ ของคุณ"
        },
        {
          "question": "ทำไมภาพขนาดย่อใน File Explorer จึงดำ ว่าง หรือผิด",
          "answer": "แคชคือฐานข้อมูล ซึ่งอาจเสียหายหรือล้าสมัยได้ เช่น หลังจากระบบล่ม ดิสก์ผิดพลาด หรือโปรแกรมเปลี่ยนไฟล์โดยที่ Windows ไม่ทราบ จากนั้น Windows จะแสดงภาพตัวอย่างที่เสียต่อไปจนกว่าจะล้างแคช"
        },
        {
          "question": "ทำไมฉันจึงลบไฟล์แคชภาพขนาดย่อโดยตรงไม่ได้",
          "answer": "File Explorer เปิดไฟล์ thumbcache ค้างไว้ขณะทำงาน Windows จึงปฏิเสธการลบไฟล์บางส่วน ให้ใช้การล้างข้อมูลบนดิสก์ หรือปิดหน้าต่าง File Explorer แล้วเริ่ม Windows Explorer ใหม่ก่อนลบไฟล์"
        },
        {
          "question": "แคชภาพขนาดย่อมีขนาดใหญ่แค่ไหน",
          "answer": "ขึ้นอยู่กับจำนวนรูปภาพและวิดีโอที่คุณเปิดดู พีซีทั่วไปมีไฟล์แคชภาพขนาดย่อและไอคอนประมาณ 100 MB ไปจนถึงหลายร้อยเมกะไบต์ และคลังภาพถ่ายขนาดใหญ่อาจทำให้ขนาดเพิ่มขึ้นอีก"
        }
      ],
      "intro": [
        "แคชภาพขนาดย่อของ Windows คือชุดไฟล์ฐานข้อมูลที่ซ่อนอยู่ ได้แก่ thumbcache_*.db และ iconcache_*.db ใน %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer File Explorer อ่านภาพตัวอย่างจากไฟล์เหล่านี้ เพื่อให้โฟลเดอร์ที่เต็มไปด้วยรูปภาพเปิดได้เร็ว ลบได้อย่างปลอดภัย: Windows จะสร้างใหม่ขณะที่คุณเปิดดู และการล้างแคชช่วยแก้ภาพขนาดย่อที่ว่าง ดำ หรือเก่า พร้อมคืนพื้นที่ที่ใช้อยู่",
        "คู่มือนี้อธิบายว่าแคชเก็บอะไรไว้ ทำไมจึงมีปัญหา วิธีล้างด้วยการล้างข้อมูลบนดิสก์ ด้วยตนเอง หรือด้วย Disk Mop และสิ่งที่จะเกิดขึ้นหลังจากนั้น ผลที่เห็นได้เพียงอย่างเดียวคือโฟลเดอร์ที่คุณเปิดครั้งถัดไปจะโหลดภาพตัวอย่างช้าลงเล็กน้อยเพียงครั้งเดียว"
      ],
      "sections": [
        {
          "title": "แคชภาพขนาดย่อคืออะไร",
          "content": [
            "เมื่อคุณเปิดโฟลเดอร์ที่มีรูปถ่ายหรือวิดีโอใน File Explorer Windows จะไม่ถอดรหัสทุกภาพใหม่ทุกครั้ง แต่จะสร้างภาพตัวอย่างขนาดเล็กเพียงครั้งเดียวแล้วเก็บไว้ในฐานข้อมูลแคช เมื่อคุณเปิดโฟลเดอร์ครั้งถัดไป ระบบจะอ่านภาพตัวอย่างจากฐานข้อมูล จึงทำให้โฟลเดอร์ขนาดใหญ่เปิดได้เร็ว",
            "ฐานข้อมูลภาพตัวอย่างคือไฟล์ thumbcache_*.db ซึ่งตั้งชื่อตามขนาดภาพตัวอย่างที่เก็บไว้ เช่น thumbcache_96.db, thumbcache_256.db และ thumbcache_1024.db โดย thumbcache_idx.db เป็นดัชนี ส่วนไอคอนของโปรแกรมและประเภทไฟล์เก็บอยู่ในไฟล์ iconcache_*.db ทั้งหมดอยู่ในโฟลเดอร์ Explorer ภายใต้ AppData ภายในเครื่องของคุณ",
            "เนื่องจากฐานข้อมูลเหล่านี้เป็นเพียงสำเนาของภาพตัวอย่าง จึงสร้างใหม่จากไฟล์ต้นฉบับของคุณได้ทุกเมื่อ"
          ]
        },
        {
          "title": "ทำไมภาพขนาดย่อจึงมีปัญหา",
          "content": [
            "แคชจะดีเท่ากับช่วงเวลาที่เขียนข้อมูลลงไป หาก Windows ล่มขณะที่กำลังอัปเดตฐานข้อมูล หากข้อผิดพลาดของดิสก์ทำให้ฐานข้อมูลเสียหาย หรือหากโปรแกรมแทนที่ไฟล์โดยไม่แจ้ง Explorer ฐานข้อมูลอาจมีภาพตัวอย่างที่ผิดหรือว่าง Explorer จึงแสดงภาพขนาดย่อที่เสียต่อไป ทั้งที่ตัวไฟล์ยังปกติดี",
            "อาการที่พบบ่อยคือภาพขนาดย่อสีดำหรือว่าง ไอคอนทั่วไปในตำแหน่งที่ควรเป็นรูปภาพ ภาพตัวอย่างเก่าที่ไม่ตรงกับไฟล์ หรือโฟลเดอร์ที่แสดงภาพตัวอย่างช้า ไอคอนที่ดูผิดหลังเปลี่ยนแอปเริ่มต้นชี้ไปที่แคชไอคอน",
            "การล้างแคชบังคับให้ Windows สร้างภาพตัวอย่างใหม่จากไฟล์ ซึ่งแก้ปัญหาเหล่านี้ได้ทั้งหมด"
          ]
        },
        {
          "title": "ลบแคชด้วยการล้างข้อมูลบนดิสก์",
          "content": [
            "วิธีที่ง่ายที่สุดคือการล้างข้อมูลบนดิสก์ เพราะลบไฟล์ที่ File Explorer เปิดค้างไว้ได้ ค้นหาการล้างข้อมูลบนดิสก์ เลือกไดรฟ์ระบบ เลือกภาพขนาดย่อ แล้วเลือกลบไฟล์ คุณสามารถยกเลิกการเลือกรายการอื่นได้หากต้องการล้างเฉพาะภาพตัวอย่าง",
            "Windows 11 ยังมีตัวเลือกนี้ใน การตั้งค่า > ระบบ > พื้นที่เก็บข้อมูล > ไฟล์ชั่วคราว ซึ่งภาพขนาดย่อจะปรากฏในรายการสิ่งที่ลบได้",
            "หลังล้างข้อมูล ให้เปิดโฟลเดอร์รูปภาพ การเปิดดูครั้งแรกจะช้าลงเล็กน้อยขณะที่ Windows สร้างภาพตัวอย่างใหม่ และครั้งต่อ ๆ ไปจะกลับมาเร็วอีกครั้ง"
          ]
        },
        {
          "title": "รีเซ็ตแคชด้วยตนเอง",
          "content": [
            "หากภาพขนาดย่อยังผิดอยู่หลังการล้างข้อมูลบนดิสก์ ให้ลบไฟล์ด้วยตนเอง ปิดหน้าต่าง File Explorer ทั้งหมด เปิดตัวจัดการงาน ค้นหา Windows Explorer แล้วเลือกเริ่มใหม่ จากนั้นเปิด %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer ในแถบที่อยู่ เปิดการแสดงรายการที่ซ่อน แล้วลบไฟล์ที่ขึ้นต้นด้วย thumbcache_ และ iconcache_",
            "ไฟล์ที่ Windows ยังเปิดค้างอยู่จะถูกข้าม ให้ลบอีกครั้งหลังออกจากระบบแล้วลงชื่อเข้าใช้ใหม่ อย่าลบโฟลเดอร์ Explorer เองหรือไฟล์อื่นในโฟลเดอร์นั้น",
            "จากนั้นเปิดโฟลเดอร์ของคุณอีกครั้งและปล่อยให้ภาพตัวอย่างสร้างใหม่"
          ]
        },
        {
          "title": "ล้างด้วย Disk Mop",
          "content": [
            "หน้า เพิ่มพื้นที่ว่าง ของ Disk Mop แสดง แคชภาพขนาดย่อ เป็นหนึ่งรายการพร้อมขนาดและคำอธิบายสั้น ๆ ว่าการล้างจะทำอะไร ครอบคลุมเฉพาะไฟล์ฐานข้อมูล thumbcache_ และ iconcache_ ในโฟลเดอร์ Explorer และไม่แตะต้องสิ่งอื่นในโฟลเดอร์นั้น",
            "เรียกใช้การสแกน เลือกรายการ แล้วยืนยัน Disk Mop จะแสดงสิ่งที่พบก่อนลบอะไรก็ตาม และการสแกนไม่มีค่าใช้จ่าย คุณจึงดูขนาดได้ก่อน ไฟล์ที่ Explorer เปิดค้างไว้จะถูกข้าม ดังนั้นควรปิดหน้าต่าง Explorer ที่เปิดเพิ่มก่อนเริ่ม",
            "แคชภาพขนาดย่อเป็นเพียงหนึ่งในแคชที่ปลอดภัยหลายรายการในหน้าเดียวกัน คุณจึงล้างไฟล์ชั่วคราวและแคชของเบราว์เซอร์ได้ในรอบเดียวกัน"
          ]
        }
      ],
      "verdict": [
        "แคชภาพขนาดย่อของ Windows คือชุดฐานข้อมูลภาพตัวอย่างและไอคอนที่สร้างใหม่ได้ การล้างด้วยการล้างข้อมูลบนดิสก์หรือด้วยตนเองช่วยแก้ภาพขนาดย่อที่ว่าง ดำ หรือผิด และคืนพื้นที่บางส่วน โดยมีข้อเสียเพียงอย่างเดียวคือการเปิดดูแต่ละโฟลเดอร์ครั้งแรกช้าลง",
        "Disk Mop แสดง แคชภาพขนาดย่อ ควบคู่กับแคชที่ปลอดภัยอื่น ๆ แสดงขนาด และถามก่อนลบ การสแกนไม่มีค่าใช้จ่าย คุณจึงดูขนาดได้ก่อนตัดสินใจ"
      ],
      "ctaText": "ล้างแคชภาพขนาดย่อและแคชที่ปลอดภัยอื่น ๆ ด้วย Disk Mop"
    },
    "vi": {
      "title": "Cách xóa bộ nhớ đệm hình thu nhỏ trong Windows 11 và 10 (sửa hình thu nhỏ sai hoặc bị mất)",
      "metaDescription": "Hình thu nhỏ trống, sai hoặc chậm trong File Explorer? Tìm hiểu tệp thumbcache, cách xóa bộ nhớ đệm hình thu nhỏ của Windows an toàn và tạo lại.",
      "subtitle": "Đặt lại cơ sở dữ liệu ẩn đứng sau phần xem trước và biểu tượng của File Explorer",
      "keyTakeaways": [
        "Windows lưu bản xem trước của ảnh, video và tài liệu trong các tệp thumbcache_*.db và biểu tượng trong các tệp iconcache_*.db bên trong %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer.",
        "Xóa các tệp này là an toàn: Windows tạo lại chúng khi bạn duyệt thư mục, và chỉ lần xem đầu tiên của mỗi thư mục là chậm hơn.",
        "Xóa bộ nhớ đệm sẽ sửa các hình thu nhỏ và biểu tượng bị trống, đen, cũ hoặc sai, đồng thời trả lại dung lượng mà bộ nhớ đệm đã chiếm."
      ],
      "dataTable": {
        "caption": "Các tệp bộ nhớ đệm hình thu nhỏ và biểu tượng trong thư mục Explorer",
        "columns": [
          "Mẫu tệp",
          "Chứa gì",
          "Tự động tạo lại?"
        ],
        "rows": [
          [
            "thumbcache_32.db, thumbcache_96.db",
            "Bản xem trước nhỏ dùng trong danh sách và chế độ xem chi tiết",
            "Có"
          ],
          [
            "thumbcache_256.db, thumbcache_1024.db",
            "Bản xem trước cỡ vừa và lớn dùng trong chế độ xem biểu tượng",
            "Có"
          ],
          [
            "thumbcache_idx.db và các tệp thumbcache_*.db khác",
            "Chỉ mục và các kích thước bổ sung của cơ sở dữ liệu xem trước",
            "Có"
          ],
          [
            "iconcache_*.db",
            "Biểu tượng chương trình và loại tệp được lưu đệm",
            "Có"
          ]
        ]
      },
      "howTo": {
        "name": "Cách xóa bộ nhớ đệm hình thu nhỏ trong Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Mở Disk Cleanup",
            "text": "Tìm Disk Cleanup trong menu Start và chọn ổ đĩa hệ thống của bạn. Chờ trong lúc công cụ tính toán những gì có thể xóa."
          },
          {
            "name": "Chọn Hình thu nhỏ",
            "text": "Trong danh sách tệp cần xóa, chọn Hình thu nhỏ (Thumbnails). Bạn có thể bỏ chọn các mục khác nếu chỉ muốn xóa bộ nhớ đệm xem trước."
          },
          {
            "name": "Xác nhận dọn dẹp",
            "text": "Chọn OK rồi chọn Xóa tệp. Windows sẽ xóa cơ sở dữ liệu hình thu nhỏ và tạo lại khi bạn mở các thư mục."
          },
          {
            "name": "Tự đặt lại nếu hình thu nhỏ vẫn sai",
            "text": "Đóng tất cả cửa sổ File Explorer, mở Task Manager, khởi động lại Windows Explorer, sau đó xóa các tệp thumbcache_*.db và iconcache_*.db trong %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer rồi mở lại các thư mục của bạn."
          },
          {
            "name": "Hoặc xóa bằng Disk Mop",
            "text": "Mở Disk Mop, vào Giải phóng dung lượng, chạy quét và chọn Bộ nhớ đệm hình thu nhỏ. Kiểm tra dung lượng rồi xác nhận."
          }
        ]
      },
      "faq": [
        {
          "question": "Xóa tệp thumbcache có an toàn không?",
          "answer": "Có. Tệp thumbcache là bản sao của các bản xem trước mà Windows có thể tạo lại từ ảnh, video và tài liệu gốc của bạn. Việc xóa không làm mất hay thay đổi bất kỳ tệp nào của bạn."
        },
        {
          "question": "Tại sao hình thu nhỏ trong File Explorer bị đen, trống hoặc sai?",
          "answer": "Bộ nhớ đệm là một cơ sở dữ liệu, và nó có thể bị hỏng hoặc lỗi thời, chẳng hạn sau sự cố treo máy, lỗi đĩa hoặc một chương trình thay đổi tệp mà Windows không biết. Khi đó Windows tiếp tục hiển thị bản xem trước bị hỏng cho đến khi bộ nhớ đệm được xóa."
        },
        {
          "question": "Tại sao tôi không thể xóa trực tiếp các tệp bộ nhớ đệm hình thu nhỏ?",
          "answer": "File Explorer giữ các tệp thumbcache ở trạng thái mở khi đang chạy, nên Windows từ chối xóa một số tệp. Hãy dùng Disk Cleanup, hoặc đóng các cửa sổ File Explorer và khởi động lại Windows Explorer trước khi xóa tệp."
        },
        {
          "question": "Bộ nhớ đệm hình thu nhỏ lớn đến mức nào?",
          "answer": "Tùy thuộc vào số lượng ảnh và video bạn đã duyệt. Một máy tính thông thường có khoảng 100 MB đến vài trăm megabyte tệp bộ nhớ đệm hình thu nhỏ và biểu tượng, và thư viện ảnh lớn có thể đẩy con số này lên cao hơn."
        }
      ],
      "intro": [
        "Bộ nhớ đệm hình thu nhỏ của Windows là một tập hợp các tệp cơ sở dữ liệu ẩn, thumbcache_*.db và iconcache_*.db, trong %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer. File Explorer đọc bản xem trước từ các tệp này để những thư mục đầy ảnh mở ra nhanh chóng. Bạn có thể xóa chúng an toàn: Windows tạo lại khi bạn duyệt, và việc xóa sẽ sửa hình thu nhỏ trống, đen hoặc lỗi thời đồng thời trả lại dung lượng đã dùng.",
        "Hướng dẫn này giải thích bộ nhớ đệm chứa gì, vì sao nó gặp lỗi, cách xóa bằng Disk Cleanup, thủ công hoặc bằng Disk Mop, và những gì sẽ xảy ra sau đó. Tác động nhìn thấy được duy nhất là các thư mục bạn mở lần sau sẽ tải bản xem trước chậm hơn một chút, chỉ một lần."
      ],
      "sections": [
        {
          "title": "Bộ nhớ đệm hình thu nhỏ là gì",
          "content": [
            "Khi bạn mở một thư mục ảnh hoặc video trong File Explorer, Windows không giải mã mọi hình ảnh mỗi lần. Nó tạo một bản xem trước nhỏ một lần rồi lưu vào cơ sở dữ liệu bộ nhớ đệm. Lần sau khi bạn mở thư mục, nó đọc các bản xem trước từ cơ sở dữ liệu, đó là lý do thư mục lớn mở nhanh.",
            "Các cơ sở dữ liệu xem trước là những tệp thumbcache_*.db, được đặt tên theo kích thước bản xem trước mà chúng chứa, như thumbcache_96.db, thumbcache_256.db và thumbcache_1024.db, với thumbcache_idx.db là chỉ mục. Biểu tượng của chương trình và loại tệp được lưu trong các tệp iconcache_*.db. Tất cả nằm trong thư mục Explorer bên dưới AppData cục bộ của bạn.",
            "Vì các cơ sở dữ liệu này chỉ là bản sao của bản xem trước, chúng có thể được tạo lại từ tệp gốc của bạn bất cứ lúc nào."
          ]
        },
        {
          "title": "Vì sao hình thu nhỏ bị lỗi",
          "content": [
            "Bộ nhớ đệm chỉ tốt như thời điểm nó được ghi. Nếu Windows bị treo trong lúc cơ sở dữ liệu đang cập nhật, nếu lỗi đĩa làm hỏng nó, hoặc nếu một chương trình thay thế tệp mà không báo cho Explorer, cơ sở dữ liệu có thể chứa bản xem trước sai hoặc trống. Explorer sẽ tiếp tục hiển thị hình thu nhỏ hỏng dù bản thân tệp vẫn bình thường.",
            "Các dấu hiệu thường gặp là hình thu nhỏ đen hoặc trống, biểu tượng chung chung ở chỗ lẽ ra là một bức ảnh, bản xem trước cũ không khớp với tệp, hoặc thư mục hiển thị bản xem trước chậm. Biểu tượng trông sai sau khi đổi ứng dụng mặc định cho thấy lỗi nằm ở bộ nhớ đệm biểu tượng.",
            "Xóa bộ nhớ đệm buộc Windows tạo bản xem trước mới từ các tệp, và điều đó khắc phục tất cả những vấn đề trên."
          ]
        },
        {
          "title": "Xóa bộ nhớ đệm bằng Disk Cleanup",
          "content": [
            "Cách dễ nhất là Disk Cleanup, vì nó có thể xóa các tệp mà File Explorer đang giữ mở. Tìm Disk Cleanup, chọn ổ đĩa hệ thống, chọn Hình thu nhỏ rồi chọn Xóa tệp. Bạn có thể bỏ chọn các mục khác nếu chỉ muốn xóa bản xem trước.",
            "Windows 11 cũng cung cấp tính năng này trong Cài đặt > Hệ thống > Lưu trữ > Tệp tạm thời, nơi Hình thu nhỏ xuất hiện trong danh sách các mục có thể xóa.",
            "Sau khi dọn dẹp, hãy mở một thư mục ảnh. Lần xem đầu tiên chậm hơn một chút trong lúc Windows tạo lại bản xem trước, và các lần sau lại nhanh như cũ."
          ]
        },
        {
          "title": "Đặt lại bộ nhớ đệm thủ công",
          "content": [
            "Nếu hình thu nhỏ vẫn sai sau khi dùng Disk Cleanup, hãy tự xóa các tệp. Đóng mọi cửa sổ File Explorer, mở Task Manager, tìm Windows Explorer và chọn Khởi động lại. Sau đó mở %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer trên thanh địa chỉ, bật hiển thị mục ẩn và xóa các tệp bắt đầu bằng thumbcache_ và iconcache_.",
            "Các tệp mà Windows vẫn đang mở sẽ bị bỏ qua; hãy xóa lại sau khi đăng xuất rồi đăng nhập lại. Không xóa thư mục Explorer hoặc các tệp khác trong đó.",
            "Sau đó hãy mở lại các thư mục và để bản xem trước được tạo lại."
          ]
        },
        {
          "title": "Xóa bằng Disk Mop",
          "content": [
            "Trang Giải phóng dung lượng của Disk Mop liệt kê Bộ nhớ đệm hình thu nhỏ như một mục kèm dung lượng và lời giải thích ngắn về việc dọn dẹp sẽ làm gì. Mục này chỉ bao gồm các tệp cơ sở dữ liệu thumbcache_ và iconcache_ trong thư mục Explorer và không đụng đến gì khác trong thư mục đó.",
            "Chạy quét, chọn mục đó rồi xác nhận. Disk Mop hiển thị những gì tìm thấy trước khi xóa bất cứ thứ gì, và việc quét là miễn phí nên bạn có thể xem dung lượng trước. Các tệp mà Explorer đang giữ mở sẽ bị bỏ qua, vì vậy hãy đóng các cửa sổ Explorer thừa trước khi bắt đầu.",
            "Bộ nhớ đệm hình thu nhỏ chỉ là một trong nhiều bộ nhớ đệm an toàn trên cùng trang, nên bạn có thể xóa tệp tạm và bộ nhớ đệm trình duyệt trong cùng một lượt."
          ]
        }
      ],
      "verdict": [
        "Bộ nhớ đệm hình thu nhỏ của Windows là một tập hợp cơ sở dữ liệu xem trước và biểu tượng có thể tạo lại. Xóa nó bằng Disk Cleanup hoặc thủ công sẽ sửa hình thu nhỏ trống, đen hoặc sai và trả lại một ít dung lượng, với cái giá duy nhất là lần xem đầu tiên của mỗi thư mục chậm hơn.",
        "Disk Mop liệt kê Bộ nhớ đệm hình thu nhỏ cạnh các bộ nhớ đệm an toàn khác, hiển thị dung lượng và hỏi trước khi xóa. Việc quét là miễn phí, nên bạn có thể xem dung lượng trước khi quyết định."
      ],
      "ctaText": "Xóa bộ nhớ đệm hình thu nhỏ và các bộ nhớ đệm an toàn khác bằng Disk Mop"
    }
  },
};
