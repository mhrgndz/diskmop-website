import type { Article } from "../types";

export const deliveryOptimizationCacheWindows: Article = {
  slug: "delivery-optimization-cache-windows",
  type: "guide",
  category: "Windows Tips",
  date: "2026-11-18",
  updated: "2026-11-18",
  readingTime: 6,
  content: {
    "tr": {
      "title": "Windows'ta Teslim Optimizasyonu Dosyaları: Nedir ve Nasıl Silinir?",
      "metaDescription": "Windows, güncellemeleri diğer bilgisayarlarla paylaşmak için Teslim Optimizasyonu dosyalarını saklar ve bunlar gigabaytlarca yer kaplayabilir. Silme yolları burada.",
      "subtitle": "Windows neden güncelleme dosyalarını başka bilgisayarlar için saklar ve yer nasıl geri kazanılır",
      "keyTakeaways": [
        "Teslim Optimizasyonu, güncellemeleri Microsoft'tan ve izin verilirse diğer bilgisayarlardan parçalar hâlinde indiren Windows özelliğidir; önbelleği ise bu amaçla saklanan güncelleme dosyalarının kopyasıdır.",
        "Önbelleği silmek güvenlidir: Windows bir dosyaya yeniden ihtiyaç duyarsa tekrar indirir; yüklediğiniz veya kaydettiğiniz hiçbir şey etkilenmez.",
        "Önbelleği Ayarlar, Disk Temizleme, Delete-DeliveryOptimizationCache PowerShell komutu veya bir temizleme aracıyla boşaltabilirsiniz; Pro sürümlerde ne kadar yer kullanabileceğini de sınırlayabilirsiniz."
      ],
      "dataTable": {
        "caption": "Teslim Optimizasyonu önbelleğini temizleme yolları",
        "columns": [
          "Yöntem",
          "Konum",
          "Yönetici gerekir mi?",
          "Notlar"
        ],
        "rows": [
          [
            "Ayarlar, Geçici dosyalar",
            "Ayarlar, Sistem, Depolama, Geçici dosyalar",
            "Hayır (onay ister)",
            "Teslim Optimizasyonu Dosyaları kutusunu işaretleyin; güncel boyutu gösterir"
          ],
          [
            "Disk Temizleme",
            "Disk Temizleme, Sistem dosyalarını temizle",
            "Evet",
            "Teslim Optimizasyonu Dosyaları kutusunu işaretleyin"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Evet",
            "PowerShell'i yönetici olarak çalıştırın"
          ],
          [
            "Disk Mop",
            "Windows alanı sayfası, Teslim Optimizasyonu önbelleği",
            "Evet",
            "Önce boyutu gösterir, temizlemeden önce sorar"
          ]
        ]
      },
      "howTo": {
        "name": "Teslim Optimizasyonu dosyaları nasıl silinir",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Önbelleğin ne kadar büyük olduğuna bakın",
            "text": "Ayarlar'ı açın, ardından Sistem, Depolama ve Geçici dosyalar'a gidin. Listenin yüklenmesini bekleyin ve Teslim Optimizasyonu Dosyaları yanındaki boyutu okuyun."
          },
          {
            "name": "Teslim Optimizasyonu Dosyaları kutusunu işaretleyin",
            "text": "Onay kutusunu seçin, diğer öğeleri de temizlemek istemiyorsanız olduğu gibi bırakın ve Dosyaları kaldır'ı seçin."
          },
          {
            "name": "Ya da Disk Temizleme'yi kullanın",
            "text": "Disk Temizleme'yi aratın, sistem sürücünüzü seçin, Sistem dosyalarını temizle'yi seçin, Teslim Optimizasyonu Dosyaları kutusunu işaretleyin ve onaylayın."
          },
          {
            "name": "Ya da tek bir PowerShell komutu çalıştırın",
            "text": "PowerShell'i yönetici olarak açın ve Delete-DeliveryOptimizationCache -Force komutunu çalıştırın. Önbellek klasörü herhangi bir uyarı çıkmadan boşaltılır."
          },
          {
            "name": "Sonucu kontrol edin",
            "text": "Geçici dosyalar'ı yeniden açıp Teslim Optimizasyonu Dosyaları değerinin artık sıfıra yakın olduğunu doğrulayın; önbelleğin yeniden büyümesini istemiyorsanız sınırlandırın."
          }
        ]
      },
      "faq": [
        {
          "question": "Windows 11 ve 10'da Teslim Optimizasyonu dosyaları nedir?",
          "answer": "Windows'un indirip sakladığı güncelleme ve uygulama dosyalarıdır; böylece bunları daha hızlı iletebilir ve izin verirseniz ağınızdaki ya da internetteki diğer bilgisayarlarla paylaşabilir. Önbellek şu klasörde bulunur: C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Teslim Optimizasyonu dosyalarını silmek güvenli mi?",
          "answer": "Evet. Bunlar kopyalardır. Windows bir dosyaya yeniden ihtiyaç duyarsa onu indirir; dolayısıyla önbelleği silmek yüklü bir güncellemeyi, bir uygulamayı veya kendi dosyalarınızı kaldırmaz."
        },
        {
          "question": "Silmek Windows Update'i bozar mı?",
          "answer": "Hayır. Windows Update çalışmaya devam eder. Önbellekteki parçalar silindiği için sonraki güncelleme biraz daha fazla veri indirebilir, ancak hiçbir şey başarısız olmaz."
        },
        {
          "question": "Windows'un güncellemeleri diğer bilgisayarlarla paylaşmasını durdurabilir miyim?",
          "answer": "Evet. Ayarlar, Windows Update, Gelişmiş seçenekler, Teslim Optimizasyonu bölümünde Diğer bilgisayarlardan indirmelere izin ver seçeneğini kapatın. Windows bu durumda yalnızca Microsoft'tan indirir ve büyük bir önbellek tutması için daha az neden kalır."
        }
      ],
      "intro": [
        "Teslim Optimizasyonu dosyaları, Windows'un güncelleme ve uygulama dosyalarını parçalar hâlinde indirebilmek ve izin verirseniz diğer bilgisayarlarla paylaşabilmek için sakladığı kopyalardır. Silmek güvenlidir: Windows bir dosyayı yalnızca ihtiyaç duyduğunda yeniden indirir ve yüklediğiniz ya da kaydettiğiniz hiçbir şeye dokunulmaz. Önbelleği Ayarlar, Disk Temizleme, PowerShell veya bir temizleme aracıyla boşaltabilirsiniz; temizlik çoğu zaman birkaç gigabayt yer kazandırır.",
        "Önbellek bir hizmet hesabının klasöründe gizlidir; bu yüzden Dosya Gezgini onu genelde baktığınız yerlerde göstermez ve insanlar onu ancak sürücü neredeyse dolduğunda fark eder. Bu rehber Teslim Optimizasyonu'nun nasıl çalıştığını, gerçek boyutun nasıl görüleceğini, onu temizlemenin dört yolunu ve yeniden büyümesinin nasıl önleneceğini anlatıyor."
      ],
      "sections": [
        {
          "title": "Teslim Optimizasyonu Ne Yapar?",
          "content": [
            "Windows büyük bir güncellemeyi veya bir Microsoft Store uygulamasını indirirken onu tek bir sunucudan tek dosya olarak almaz. Teslim Optimizasyonu indirmeyi parçalara böler ve bunları Microsoft'un sunucularından, ayar izin veriyorsa da bu parçalara zaten sahip olan diğer bilgisayarlardan getirir. Parçalar bir önbellekte saklanır; böylece bilgisayarınız onları sırası geldiğinde başkalarına verebilir ve tekrarlanan bir indirme hızlı olur.",
            "Önbellek klasörü C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache yoludur. Bir sistem hizmeti hesabına aittir; içeriğini görmek için yönetici hakları gerekir ve sıradan klasör boyutu araçları onu çoğu zaman gözden kaçırır.",
            "Büyük bir özellik güncellemesinden sonra önbellek birkaç gigabayta ulaşabilir ve Windows onu kaldırmaya karar verene kadar orada kalır."
          ]
        },
        {
          "title": "Silmek Güvenli mi?",
          "content": [
            "Evet. Bu önbellekteki dosyalar, Windows'un yeniden getirebileceği verilerin kopyalarıdır. Silmek bir güncellemeyi kaldırmaz, bir uygulamayı silmez ve ayarlarınızı değiştirmez. En kötü durumda sonraki güncelleme verinin bir kısmını yeniden indirir.",
            "Vazgeçtiğiniz tek şey bu parçaları diğer bilgisayarlarla paylaşabilme yeteneğidir; bu da yalnızca aynı ağda birden fazla bilgisayarınız varsa ve özelliği bilerek kullanıyorsanız önemlidir.",
            "DeliveryOptimization klasörünü elle silmeyin. Windows'tan onu düzgün biçimde temizlemesini isteyen aşağıdaki yöntemlerden birini kullanın."
          ]
        },
        {
          "title": "Ayarlar veya Disk Temizleme ile Temizleme",
          "content": [
            "Windows 11 ve 10'da Ayarlar'ı açın, ardından Sistem, Depolama ve Geçici dosyalar'a gidin. Liste yüklendikten sonra Teslim Optimizasyonu Dosyaları kutusunu işaretleyin ve Dosyaları kaldır'ı seçin. Öğenin yanında görünen boyut, geri kazanacağınız yerdir.",
            "Disk Temizleme de aynı işi yapar. Aratın, sistem sürücünüzü seçin, Sistem dosyalarını temizle'yi seçin, Teslim Optimizasyonu Dosyaları kutusunu işaretleyin ve onaylayın. Yönetici izni ister.",
            "Her iki yol da önbelleği hizmeti bozmadan boşaltan Windows'un kendi temizleyicisini kullanır. Önbelleği küçük tutmak istiyorsanız büyük güncellemelerden sonra yeniden çalıştırın."
          ]
        },
        {
          "title": "PowerShell veya Disk Mop ile Temizleme",
          "content": [
            "Komutu tercih ediyorsanız PowerShell'i yönetici olarak açın ve Delete-DeliveryOptimizationCache -Force komutunu çalıştırın. Komut önbelleği tek adımda boşaltır ve başarılı olduğunda hiçbir şey yazdırmaz.",
            "Disk Mop aynı Windows komutunu kullanır. Windows alanı sayfasında Teslim Optimizasyonu önbelleği öğesi güncel boyutu gösterir; Windows'un diğer bilgisayarlarla paylaşmak için sakladığı güncelleme dosyalarını içerdiğini, güvenli olduğunu ve gerekirse Windows'un yeniden indireceğini açıklar. Temizlemek yönetici hakları gerektirir ve Disk Mop herhangi bir şey yapmadan önce sorar.",
            "Windows alanı ayrıca Windows.old ve geri yükleme noktaları gibi Windows'un kendisi için tuttuğu diğer alanları da her biri bir açıklamayla listeler; böylece neyin temizlenmeye değer olduğunu tek yerden görebilirsiniz."
          ]
        },
        {
          "title": "Yeniden Büyümesini Önleme",
          "content": [
            "Windows Pro ve üzerinde önbelleği Grup İlkesi ile sınırlandırabilirsiniz: Yerel Grup İlkesi Düzenleyicisi'nde Bilgisayar Yapılandırması, Yönetim Şablonları, Windows Bileşenleri, Teslim Optimizasyonu'na gidin ve Mutlak Maksimum Önbellek Boyutu (GB cinsinden) veya Maksimum Önbellek Boyutu (yüzde) değerini ayarlayın. Düşük bir sınır, önbelleğin yeniden birkaç gigabayta ulaşmasını engeller.",
            "Eşler arası paylaşıma ihtiyacınız yoksa aynı yerdeki Diğer bilgisayarlardan indirmelere izin ver seçeneğini kapatın. Windows bu durumda yalnızca Microsoft'tan indirir ve büyük bir önbellek tutması için daha az neden kalır.",
            "Ayarlar'daki Geçici dosyalar'a ayda bir göz atın veya zamanlanmış bir temizlik çalıştırın; önbellek hiçbir zaman sürpriz olmaz."
          ]
        }
      ],
      "verdict": [
        "Teslim Optimizasyonu dosyaları, Windows'un indirmeleri hızlandırmak ve paylaşmak için sakladığı güncelleme verisi kopyalarıdır. Ayarlar, Disk Temizleme veya Delete-DeliveryOptimizationCache ile silmek güvenlidir ve boyutlarını sınırlayarak küçük kalmalarını sağlayabilirsiniz.",
        "Disk Mop, Teslim Optimizasyonu önbelleğini Windows alanı sayfasında boyutu ve açık bir açıklamayla gösterir; onayınızdan sonra Windows'un kendi komutuyla temizler. Tarama ücretsizdir; karar vermeden önce ne kadar yer kapladığını görebilirsiniz."
      ],
      "ctaText": "Teslim Optimizasyonu'nun ne kadar yer kapladığını Disk Mop ile kontrol edin"
    },
    "en": {
      "title": "Delivery Optimization Files in Windows: What They Are and How to Delete Them",
      "metaDescription": "Windows keeps Delivery Optimization files to share updates with other PCs, and they can use gigabytes. Learn what they are, if you can delete them, and how.",
      "subtitle": "Why Windows stores update files for other computers, and how to reclaim the space",
      "keyTakeaways": [
        "Delivery Optimization is the Windows feature that downloads updates in pieces from Microsoft and, if allowed, from other PCs; its cache is a copy of update files kept for that purpose.",
        "The cache is safe to delete: Windows downloads a file again only if it needs it, and nothing you installed or saved is affected.",
        "You can empty it through Settings, Disk Cleanup, the Delete-DeliveryOptimizationCache PowerShell command or a cleaner, and on Pro editions you can cap how much it may use."
      ],
      "dataTable": {
        "caption": "Ways to clear the Delivery Optimization cache",
        "columns": [
          "Method",
          "Where",
          "Needs administrator?",
          "Notes"
        ],
        "rows": [
          [
            "Settings, Temporary files",
            "Settings, System, Storage, Temporary files",
            "No (asks for approval)",
            "Tick Delivery Optimization Files; shows the current size"
          ],
          [
            "Disk Cleanup",
            "Disk Cleanup, Clean up system files",
            "Yes",
            "Tick Delivery Optimization Files"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Yes",
            "Run PowerShell as administrator"
          ],
          [
            "Disk Mop",
            "Windows space page, Delivery Optimization cache",
            "Yes",
            "Shows the size first and asks before cleaning"
          ]
        ]
      },
      "howTo": {
        "name": "How to delete Delivery Optimization files",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "See how large the cache is",
            "text": "Open Settings, then System, Storage and Temporary files. Wait for the list to load and read the size next to Delivery Optimization Files."
          },
          {
            "name": "Tick Delivery Optimization Files",
            "text": "Select the check box, leave the other items as they are unless you want to clear them too, and choose Remove files."
          },
          {
            "name": "Or use Disk Cleanup",
            "text": "Search for Disk Cleanup, choose your system drive, select Clean up system files, tick Delivery Optimization Files and confirm."
          },
          {
            "name": "Or run one PowerShell command",
            "text": "Open PowerShell as administrator and run Delete-DeliveryOptimizationCache -Force. The cache folder is emptied without a prompt."
          },
          {
            "name": "Check the result",
            "text": "Open Temporary files again to confirm that Delivery Optimization Files is now close to zero, then limit the cache if you do not want it to grow back."
          }
        ]
      },
      "faq": [
        {
          "question": "What are Delivery Optimization files in Windows 11 and 10?",
          "answer": "They are update and app files that Windows downloaded and kept so it can deliver them faster and, if you allow it, share them with other PCs on your network or the internet. The cache lives in C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Is it safe to delete Delivery Optimization files?",
          "answer": "Yes. They are copies. If Windows needs a file again it downloads it, so deleting the cache does not remove an installed update, an app or any of your own files."
        },
        {
          "question": "Will deleting them break Windows Update?",
          "answer": "No. Windows Update keeps working. The next update may download a little more data because the cached pieces are gone, but nothing fails."
        },
        {
          "question": "Can I stop Windows from sharing updates with other PCs?",
          "answer": "Yes. In Settings, Windows Update, Advanced options, Delivery Optimization, turn off Allow downloads from other PCs. Windows then downloads only from Microsoft and has less reason to keep a large cache."
        }
      ],
      "intro": [
        "Delivery Optimization files are copies of update and app files that Windows keeps so it can download them in pieces and, if you allow it, share them with other PCs. They are safe to delete: Windows downloads a file again only when it needs it, and nothing you installed or saved is touched. You can empty the cache from Settings, Disk Cleanup, PowerShell or a cleaner, and a cleanup often returns several gigabytes.",
        "The cache is hidden in a service account's folder, so File Explorer does not show it in the places you usually look, which is why people find it only when the drive is almost full. This guide explains how Delivery Optimization works, how to see the real size, four ways to clear it and how to stop it from growing again."
      ],
      "sections": [
        {
          "title": "What Delivery Optimization Does",
          "content": [
            "When Windows downloads a large update or a Microsoft Store app, it does not fetch it as one file from a single server. Delivery Optimization splits the download into pieces and fetches them from Microsoft's servers and, when the setting allows it, from other PCs that already have them. The pieces are stored in a cache so that your PC can in turn hand them to others and so a repeated download is fast.",
            "The cache folder is C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. It belongs to a system service account, so you need administrator rights to see its contents, and normal folder size tools often miss it.",
            "After a large feature update the cache can be several gigabytes, and it stays there until Windows decides to remove it."
          ]
        },
        {
          "title": "Is It Safe to Delete?",
          "content": [
            "Yes. The files in this cache are copies of data that Windows can fetch again. Deleting them does not uninstall an update, remove an app or change your settings. The worst case is that the next update downloads a part of the data again.",
            "The only thing you give up is the ability to share those pieces with other PCs, which matters only if you have several PCs on one network and use the feature on purpose.",
            "Do not delete the DeliveryOptimization folder by hand. Use one of the methods below, which ask Windows to clear it properly."
          ]
        },
        {
          "title": "Clear It from Settings or Disk Cleanup",
          "content": [
            "In Windows 11 and 10, open Settings, System, Storage and Temporary files. After the list loads, tick Delivery Optimization Files and choose Remove files. The size shown next to the item is what you will get back.",
            "Disk Cleanup does the same job. Search for it, choose your system drive, select Clean up system files, tick Delivery Optimization Files and confirm. It asks for administrator permission.",
            "Both routes use Windows' own cleaner, which empties the cache without breaking the service. Run it again after big updates if you want to keep the cache small."
          ]
        },
        {
          "title": "Clear It with PowerShell or Disk Mop",
          "content": [
            "If you prefer a command, open PowerShell as administrator and run Delete-DeliveryOptimizationCache -Force. The command empties the cache in one step and prints nothing when it succeeds.",
            "Disk Mop uses the same Windows command. On its Windows space page, the Delivery Optimization cache item shows the current size and explains that it holds update files Windows keeps to share with other PCs, that it is safe, and that Windows downloads again if needed. Cleaning it needs administrator rights, and Disk Mop asks before it does anything.",
            "Windows space also lists other space that Windows keeps for itself, such as Windows.old and restore points, each with an explanation, so you can see what is worth cleaning in one place."
          ]
        },
        {
          "title": "Keep It from Growing Back",
          "content": [
            "On Windows Pro and higher you can cap the cache with Group Policy: in the Local Group Policy Editor, go to Computer Configuration, Administrative Templates, Windows Components, Delivery Optimization and set Absolute Max Cache Size (in GB) or Max Cache Size (percentage). A small limit keeps the cache from reaching several gigabytes again.",
            "If you do not need peer-to-peer sharing, turn off Allow downloads from other PCs in the same place. Windows then downloads only from Microsoft and has less reason to keep a large cache.",
            "Check Temporary files in Settings once a month, or run a scheduled cleanup, and the cache never becomes a surprise."
          ]
        }
      ],
      "verdict": [
        "Delivery Optimization files are copies of update data that Windows keeps to speed up and share downloads. They are safe to delete through Settings, Disk Cleanup or Delete-DeliveryOptimizationCache, and you can limit their size so they stay small.",
        "Disk Mop shows the Delivery Optimization cache on its Windows space page, with its size and a clear explanation, and cleans it with Windows' own command after you confirm. Scanning is free, so you can see how much space it takes before you decide."
      ],
      "ctaText": "Check how much space Delivery Optimization takes with Disk Mop"
    },
    "de": {
      "title": "Übermittlungsoptimierungsdateien in Windows: Was sie sind und wie Sie sie löschen",
      "metaDescription": "Windows speichert Übermittlungsoptimierungsdateien, um Updates mit anderen PCs zu teilen – oft mehrere GB. Was sie sind, ob Sie sie löschen dürfen und wie das geht.",
      "subtitle": "Warum Windows Update-Dateien für andere Computer aufbewahrt und wie Sie den Speicherplatz zurückholen",
      "keyTakeaways": [
        "Die Übermittlungsoptimierung ist die Windows-Funktion, die Updates in Teilen von Microsoft und, falls erlaubt, von anderen PCs herunterlädt; ihr Cache ist eine zu diesem Zweck aufbewahrte Kopie der Update-Dateien.",
        "Der Cache lässt sich gefahrlos löschen: Windows lädt eine Datei nur dann erneut herunter, wenn es sie braucht, und nichts, was Sie installiert oder gespeichert haben, ist betroffen.",
        "Sie können ihn über die Einstellungen, die Datenträgerbereinigung, den PowerShell-Befehl Delete-DeliveryOptimizationCache oder ein Reinigungsprogramm leeren; in Pro-Editionen lässt sich außerdem begrenzen, wie viel Platz er belegen darf."
      ],
      "dataTable": {
        "caption": "Möglichkeiten, den Übermittlungsoptimierungs-Cache zu leeren",
        "columns": [
          "Methode",
          "Wo",
          "Administrator nötig?",
          "Hinweise"
        ],
        "rows": [
          [
            "Einstellungen, Temporäre Dateien",
            "Einstellungen, System, Speicher, Temporäre Dateien",
            "Nein (fragt nach Bestätigung)",
            "Übermittlungsoptimierungsdateien aktivieren; zeigt die aktuelle Größe an"
          ],
          [
            "Datenträgerbereinigung",
            "Datenträgerbereinigung, Systemdateien bereinigen",
            "Ja",
            "Übermittlungsoptimierungsdateien aktivieren"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Ja",
            "PowerShell als Administrator ausführen"
          ],
          [
            "Disk Mop",
            "Seite Windows-Speicher, Übermittlungsoptimierungs-Cache",
            "Ja",
            "Zeigt zuerst die Größe und fragt vor dem Bereinigen nach"
          ]
        ]
      },
      "howTo": {
        "name": "So löschen Sie Übermittlungsoptimierungsdateien",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Größe des Caches prüfen",
            "text": "Öffnen Sie Einstellungen, dann System, Speicher und Temporäre Dateien. Warten Sie, bis die Liste geladen ist, und lesen Sie die Größe neben Übermittlungsoptimierungsdateien ab."
          },
          {
            "name": "Übermittlungsoptimierungsdateien aktivieren",
            "text": "Aktivieren Sie das Kontrollkästchen, lassen Sie die übrigen Einträge unverändert, sofern Sie sie nicht ebenfalls löschen möchten, und wählen Sie Dateien entfernen."
          },
          {
            "name": "Oder die Datenträgerbereinigung verwenden",
            "text": "Suchen Sie nach Datenträgerbereinigung, wählen Sie Ihr Systemlaufwerk, klicken Sie auf Systemdateien bereinigen, aktivieren Sie Übermittlungsoptimierungsdateien und bestätigen Sie."
          },
          {
            "name": "Oder einen PowerShell-Befehl ausführen",
            "text": "Öffnen Sie PowerShell als Administrator und führen Sie Delete-DeliveryOptimizationCache -Force aus. Der Cache-Ordner wird ohne Rückfrage geleert."
          },
          {
            "name": "Ergebnis prüfen",
            "text": "Öffnen Sie Temporäre Dateien erneut und prüfen Sie, ob Übermittlungsoptimierungsdateien nun fast bei null liegt. Begrenzen Sie den Cache anschließend, wenn er nicht wieder anwachsen soll."
          }
        ]
      },
      "faq": [
        {
          "question": "Was sind Übermittlungsoptimierungsdateien in Windows 11 und 10?",
          "answer": "Es sind Update- und App-Dateien, die Windows heruntergeladen und aufbewahrt hat, um sie schneller bereitzustellen und, wenn Sie es erlauben, mit anderen PCs in Ihrem Netzwerk oder im Internet zu teilen. Der Cache befindet sich unter C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Ist es sicher, Übermittlungsoptimierungsdateien zu löschen?",
          "answer": "Ja. Es handelt sich um Kopien. Braucht Windows eine Datei erneut, lädt es sie herunter; das Löschen des Caches entfernt also weder ein installiertes Update noch eine App oder eigene Dateien."
        },
        {
          "question": "Wird Windows Update durch das Löschen beeinträchtigt?",
          "answer": "Nein. Windows Update funktioniert weiter. Das nächste Update lädt eventuell etwas mehr Daten herunter, weil die zwischengespeicherten Teile fehlen, aber nichts schlägt fehl."
        },
        {
          "question": "Kann ich verhindern, dass Windows Updates mit anderen PCs teilt?",
          "answer": "Ja. Deaktivieren Sie unter Einstellungen, Windows Update, Erweiterte Optionen, Übermittlungsoptimierung die Option Downloads von anderen PCs zulassen. Windows lädt dann nur noch von Microsoft herunter und hat weniger Grund, einen großen Cache zu behalten."
        }
      ],
      "intro": [
        "Übermittlungsoptimierungsdateien sind Kopien von Update- und App-Dateien, die Windows aufbewahrt, um sie in Teilen herunterzuladen und, wenn Sie es erlauben, mit anderen PCs zu teilen. Sie lassen sich gefahrlos löschen: Windows lädt eine Datei nur dann erneut herunter, wenn es sie braucht, und nichts, was Sie installiert oder gespeichert haben, wird angetastet. Sie können den Cache über die Einstellungen, die Datenträgerbereinigung, PowerShell oder ein Reinigungsprogramm leeren; oft werden dabei mehrere Gigabyte frei.",
        "Der Cache liegt versteckt im Ordner eines Dienstkontos, sodass der Datei-Explorer ihn an den üblichen Stellen nicht anzeigt. Deshalb entdecken viele ihn erst, wenn das Laufwerk fast voll ist. Diese Anleitung erklärt, wie die Übermittlungsoptimierung funktioniert, wie Sie die tatsächliche Größe sehen, vier Wege zum Leeren und wie Sie verhindern, dass der Cache wieder wächst."
      ],
      "sections": [
        {
          "title": "Was die Übermittlungsoptimierung macht",
          "content": [
            "Wenn Windows ein großes Update oder eine App aus dem Microsoft Store herunterlädt, holt es sie nicht als eine Datei von einem einzigen Server. Die Übermittlungsoptimierung teilt den Download in Teile auf und lädt sie von den Servern von Microsoft und, sofern die Einstellung es erlaubt, von anderen PCs, die sie bereits haben. Die Teile werden in einem Cache gespeichert, damit Ihr PC sie seinerseits an andere weitergeben kann und ein wiederholter Download schnell geht.",
            "Der Cache-Ordner ist C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Er gehört einem System-Dienstkonto, sodass Sie Administratorrechte brauchen, um seinen Inhalt zu sehen, und gewöhnliche Programme zur Ordnergrößenanzeige ihn oft übersehen.",
            "Nach einem großen Funktionsupdate kann der Cache mehrere Gigabyte groß sein und bleibt dort, bis Windows ihn entfernt."
          ]
        },
        {
          "title": "Ist das Löschen unbedenklich?",
          "content": [
            "Ja. Die Dateien in diesem Cache sind Kopien von Daten, die Windows erneut abrufen kann. Das Löschen deinstalliert kein Update, entfernt keine App und ändert keine Einstellungen. Im schlimmsten Fall lädt das nächste Update einen Teil der Daten erneut herunter.",
            "Verzichten müssen Sie nur darauf, diese Teile mit anderen PCs zu teilen. Das spielt nur eine Rolle, wenn Sie mehrere PCs in einem Netzwerk haben und die Funktion bewusst nutzen.",
            "Löschen Sie den Ordner DeliveryOptimization nicht von Hand. Verwenden Sie eine der folgenden Methoden, die Windows bitten, ihn ordnungsgemäß zu leeren."
          ]
        },
        {
          "title": "Über die Einstellungen oder die Datenträgerbereinigung leeren",
          "content": [
            "Öffnen Sie in Windows 11 und 10 Einstellungen, System, Speicher und Temporäre Dateien. Aktivieren Sie nach dem Laden der Liste Übermittlungsoptimierungsdateien und wählen Sie Dateien entfernen. Die neben dem Eintrag angezeigte Größe ist der Platz, den Sie zurückgewinnen.",
            "Die Datenträgerbereinigung erledigt dasselbe. Suchen Sie danach, wählen Sie Ihr Systemlaufwerk, klicken Sie auf Systemdateien bereinigen, aktivieren Sie Übermittlungsoptimierungsdateien und bestätigen Sie. Sie verlangt Administratorberechtigung.",
            "Beide Wege nutzen das Reinigungsprogramm von Windows selbst, das den Cache leert, ohne den Dienst zu beeinträchtigen. Führen Sie es nach größeren Updates erneut aus, wenn Sie den Cache klein halten möchten."
          ]
        },
        {
          "title": "Mit PowerShell oder Disk Mop leeren",
          "content": [
            "Wenn Sie einen Befehl bevorzugen, öffnen Sie PowerShell als Administrator und führen Sie Delete-DeliveryOptimizationCache -Force aus. Der Befehl leert den Cache in einem Schritt und gibt bei Erfolg nichts aus.",
            "Disk Mop verwendet denselben Windows-Befehl. Auf der Seite Windows-Speicher zeigt der Eintrag Übermittlungsoptimierungs-Cache die aktuelle Größe an und erklärt, dass er Update-Dateien enthält, die Windows zum Teilen mit anderen PCs aufbewahrt, dass das Leeren sicher ist und dass Windows sie bei Bedarf erneut herunterlädt. Das Bereinigen erfordert Administratorrechte, und Disk Mop fragt nach, bevor es etwas tut.",
            "Windows-Speicher listet außerdem weiteren Platz auf, den Windows für sich behält, etwa Windows.old und Wiederherstellungspunkte, jeweils mit einer Erklärung, sodass Sie an einer Stelle sehen, was sich zu bereinigen lohnt."
          ]
        },
        {
          "title": "Verhindern, dass der Cache wieder wächst",
          "content": [
            "Ab Windows Pro können Sie den Cache per Gruppenrichtlinie begrenzen: Gehen Sie im Editor für lokale Gruppenrichtlinien zu Computerkonfiguration, Administrative Vorlagen, Windows-Komponenten, Übermittlungsoptimierung und legen Sie Absolute maximale Cachegröße (in GB) oder Maximale Cachegröße (Prozent) fest. Ein kleines Limit verhindert, dass der Cache erneut mehrere Gigabyte erreicht.",
            "Wenn Sie keine Peer-to-Peer-Freigabe brauchen, deaktivieren Sie an derselben Stelle Downloads von anderen PCs zulassen. Windows lädt dann nur von Microsoft herunter und hat weniger Grund, einen großen Cache zu behalten.",
            "Werfen Sie einmal im Monat einen Blick auf Temporäre Dateien in den Einstellungen oder führen Sie eine geplante Bereinigung aus, dann wird der Cache nie zur Überraschung."
          ]
        }
      ],
      "verdict": [
        "Übermittlungsoptimierungsdateien sind Kopien von Update-Daten, die Windows aufbewahrt, um Downloads zu beschleunigen und zu teilen. Über die Einstellungen, die Datenträgerbereinigung oder Delete-DeliveryOptimizationCache lassen sie sich gefahrlos löschen, und Sie können ihre Größe begrenzen, damit sie klein bleiben.",
        "Disk Mop zeigt den Übermittlungsoptimierungs-Cache auf der Seite Windows-Speicher mit Größe und klarer Erklärung an und bereinigt ihn nach Ihrer Bestätigung mit dem eigenen Befehl von Windows. Das Scannen ist kostenlos, sodass Sie sehen können, wie viel Platz er belegt, bevor Sie sich entscheiden."
      ],
      "ctaText": "Mit Disk Mop prüfen, wie viel Platz die Übermittlungsoptimierung belegt"
    },
    "fr": {
      "title": "Fichiers d'optimisation de la distribution dans Windows : définition et suppression",
      "metaDescription": "Windows garde des fichiers d'optimisation de la distribution pour partager les mises à jour avec d'autres PC, parfois plusieurs Go. Définition et suppression.",
      "subtitle": "Pourquoi Windows garde des fichiers de mise à jour pour d'autres ordinateurs, et comment récupérer l'espace",
      "keyTakeaways": [
        "L'optimisation de la distribution est la fonctionnalité de Windows qui télécharge les mises à jour par morceaux depuis Microsoft et, si vous l'autorisez, depuis d'autres PC ; son cache est une copie des fichiers de mise à jour conservée dans ce but.",
        "Le cache peut être supprimé sans risque : Windows ne retélécharge un fichier que s'il en a besoin, et rien de ce que vous avez installé ou enregistré n'est touché.",
        "Vous pouvez le vider via les Paramètres, le Nettoyage de disque, la commande PowerShell Delete-DeliveryOptimizationCache ou un utilitaire de nettoyage, et, sur les éditions Pro, plafonner l'espace qu'il peut occuper."
      ],
      "dataTable": {
        "caption": "Façons de vider le cache d'optimisation de la distribution",
        "columns": [
          "Méthode",
          "Emplacement",
          "Administrateur requis ?",
          "Remarques"
        ],
        "rows": [
          [
            "Paramètres, Fichiers temporaires",
            "Paramètres, Système, Stockage, Fichiers temporaires",
            "Non (demande une confirmation)",
            "Cochez Fichiers d'optimisation de la distribution ; affiche la taille actuelle"
          ],
          [
            "Nettoyage de disque",
            "Nettoyage de disque, Nettoyer les fichiers système",
            "Oui",
            "Cochez Fichiers d'optimisation de la distribution"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Oui",
            "Exécutez PowerShell en tant qu'administrateur"
          ],
          [
            "Disk Mop",
            "Page Espace Windows, Cache d'optimisation de la distribution",
            "Oui",
            "Affiche d'abord la taille et demande avant de nettoyer"
          ]
        ]
      },
      "howTo": {
        "name": "Comment supprimer les fichiers d'optimisation de la distribution",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Voir la taille du cache",
            "text": "Ouvrez Paramètres, puis Système, Stockage et Fichiers temporaires. Attendez le chargement de la liste et lisez la taille indiquée à côté de Fichiers d'optimisation de la distribution."
          },
          {
            "name": "Cocher Fichiers d'optimisation de la distribution",
            "text": "Cochez la case, laissez les autres éléments tels quels sauf si vous voulez aussi les supprimer, puis choisissez Supprimer les fichiers."
          },
          {
            "name": "Ou utiliser le Nettoyage de disque",
            "text": "Recherchez Nettoyage de disque, choisissez votre lecteur système, sélectionnez Nettoyer les fichiers système, cochez Fichiers d'optimisation de la distribution et confirmez."
          },
          {
            "name": "Ou exécuter une seule commande PowerShell",
            "text": "Ouvrez PowerShell en tant qu'administrateur et exécutez Delete-DeliveryOptimizationCache -Force. Le dossier du cache est vidé sans demande de confirmation."
          },
          {
            "name": "Vérifier le résultat",
            "text": "Rouvrez Fichiers temporaires pour confirmer que Fichiers d'optimisation de la distribution est désormais proche de zéro, puis limitez le cache si vous ne voulez pas qu'il regrossisse."
          }
        ]
      },
      "faq": [
        {
          "question": "Que sont les fichiers d'optimisation de la distribution dans Windows 11 et 10 ?",
          "answer": "Ce sont des fichiers de mises à jour et d'applications que Windows a téléchargés et conservés pour pouvoir les fournir plus vite et, si vous l'autorisez, les partager avec d'autres PC de votre réseau ou d'Internet. Le cache se trouve dans C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Est-il sûr de supprimer les fichiers d'optimisation de la distribution ?",
          "answer": "Oui. Ce sont des copies. Si Windows a de nouveau besoin d'un fichier, il le télécharge ; supprimer le cache ne retire donc ni une mise à jour installée, ni une application, ni vos propres fichiers."
        },
        {
          "question": "Leur suppression perturbe-t-elle Windows Update ?",
          "answer": "Non. Windows Update continue de fonctionner. La prochaine mise à jour peut télécharger un peu plus de données puisque les morceaux en cache ont disparu, mais rien n'échoue."
        },
        {
          "question": "Puis-je empêcher Windows de partager les mises à jour avec d'autres PC ?",
          "answer": "Oui. Dans Paramètres, Windows Update, Options avancées, Optimisation de la distribution, désactivez Autoriser les téléchargements à partir d'autres PC. Windows télécharge alors uniquement depuis Microsoft et a moins de raisons de conserver un cache volumineux."
        }
      ],
      "intro": [
        "Les fichiers d'optimisation de la distribution sont des copies de fichiers de mises à jour et d'applications que Windows conserve pour les télécharger par morceaux et, si vous l'autorisez, les partager avec d'autres PC. Vous pouvez les supprimer sans risque : Windows ne retélécharge un fichier que lorsqu'il en a besoin, et rien de ce que vous avez installé ou enregistré n'est touché. Vous pouvez vider le cache depuis les Paramètres, le Nettoyage de disque, PowerShell ou un utilitaire de nettoyage, et l'opération libère souvent plusieurs gigaoctets.",
        "Le cache est caché dans le dossier d'un compte de service, de sorte que l'Explorateur de fichiers ne l'affiche pas aux endroits habituels ; c'est pourquoi on ne le découvre souvent que lorsque le disque est presque plein. Ce guide explique comment fonctionne l'optimisation de la distribution, comment voir sa taille réelle, quatre façons de le vider et comment l'empêcher de regrossir."
      ],
      "sections": [
        {
          "title": "À quoi sert l'optimisation de la distribution",
          "content": [
            "Lorsque Windows télécharge une grosse mise à jour ou une application du Microsoft Store, il ne la récupère pas en un seul fichier depuis un seul serveur. L'optimisation de la distribution découpe le téléchargement en morceaux et les récupère depuis les serveurs de Microsoft et, quand le paramètre l'autorise, depuis d'autres PC qui les possèdent déjà. Les morceaux sont stockés dans un cache afin que votre PC puisse à son tour les transmettre à d'autres et qu'un nouveau téléchargement soit rapide.",
            "Le dossier du cache est C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Il appartient à un compte de service système : il faut des droits d'administrateur pour voir son contenu, et les outils habituels d'analyse de la taille des dossiers le manquent souvent.",
            "Après une grosse mise à jour de fonctionnalités, le cache peut atteindre plusieurs gigaoctets et y reste jusqu'à ce que Windows décide de le supprimer."
          ]
        },
        {
          "title": "Peut-on le supprimer sans risque ?",
          "content": [
            "Oui. Les fichiers de ce cache sont des copies de données que Windows peut récupérer à nouveau. Les supprimer ne désinstalle pas une mise à jour, ne retire aucune application et ne modifie pas vos paramètres. Au pire, la prochaine mise à jour retélécharge une partie des données.",
            "La seule chose à laquelle vous renoncez est la possibilité de partager ces morceaux avec d'autres PC, ce qui n'a d'importance que si vous avez plusieurs PC sur un même réseau et utilisez cette fonction volontairement.",
            "Ne supprimez pas le dossier DeliveryOptimization à la main. Utilisez l'une des méthodes ci-dessous, qui demandent à Windows de le vider correctement."
          ]
        },
        {
          "title": "Le vider depuis les Paramètres ou le Nettoyage de disque",
          "content": [
            "Dans Windows 11 et 10, ouvrez Paramètres, Système, Stockage et Fichiers temporaires. Une fois la liste chargée, cochez Fichiers d'optimisation de la distribution et choisissez Supprimer les fichiers. La taille affichée à côté de l'élément correspond à l'espace que vous récupérerez.",
            "Le Nettoyage de disque fait le même travail. Recherchez-le, choisissez votre lecteur système, sélectionnez Nettoyer les fichiers système, cochez Fichiers d'optimisation de la distribution et confirmez. Il demande l'autorisation de l'administrateur.",
            "Les deux voies utilisent le nettoyeur propre à Windows, qui vide le cache sans endommager le service. Relancez-le après les grosses mises à jour si vous voulez garder un cache de petite taille."
          ]
        },
        {
          "title": "Le vider avec PowerShell ou Disk Mop",
          "content": [
            "Si vous préférez une commande, ouvrez PowerShell en tant qu'administrateur et exécutez Delete-DeliveryOptimizationCache -Force. La commande vide le cache en une seule étape et n'affiche rien lorsqu'elle réussit.",
            "Disk Mop utilise la même commande Windows. Sur sa page Espace Windows, l'élément Cache d'optimisation de la distribution indique la taille actuelle et explique qu'il contient des fichiers de mise à jour que Windows conserve pour les partager avec d'autres PC, que c'est sans risque et que Windows les retélécharge si nécessaire. Le nettoyage exige des droits d'administrateur, et Disk Mop demande confirmation avant d'agir.",
            "Espace Windows répertorie aussi d'autres espaces que Windows garde pour lui, comme Windows.old et les points de restauration, chacun avec une explication, ce qui permet de voir en un seul endroit ce qui vaut la peine d'être nettoyé."
          ]
        },
        {
          "title": "L'empêcher de regrossir",
          "content": [
            "Sur Windows Pro et les éditions supérieures, vous pouvez plafonner le cache avec la stratégie de groupe : dans l'Éditeur de stratégie de groupe locale, allez à Configuration ordinateur, Modèles d'administration, Composants Windows, Optimisation de la distribution et définissez Taille maximale absolue du cache (en Go) ou Taille maximale du cache (pourcentage). Une limite basse évite que le cache n'atteigne à nouveau plusieurs gigaoctets.",
            "Si vous n'avez pas besoin du partage de poste à poste, désactivez au même endroit Autoriser les téléchargements à partir d'autres PC. Windows télécharge alors uniquement depuis Microsoft et a moins de raisons de conserver un cache volumineux.",
            "Consultez Fichiers temporaires dans les Paramètres une fois par mois, ou lancez un nettoyage planifié, et le cache ne sera jamais une surprise."
          ]
        }
      ],
      "verdict": [
        "Les fichiers d'optimisation de la distribution sont des copies de données de mise à jour que Windows conserve pour accélérer et partager les téléchargements. Ils peuvent être supprimés sans risque via les Paramètres, le Nettoyage de disque ou Delete-DeliveryOptimizationCache, et vous pouvez limiter leur taille pour qu'ils restent petits.",
        "Disk Mop affiche le Cache d'optimisation de la distribution sur sa page Espace Windows, avec sa taille et une explication claire, et le nettoie avec la commande propre à Windows après votre confirmation. L'analyse est gratuite : vous pouvez voir l'espace qu'il occupe avant de décider."
      ],
      "ctaText": "Vérifiez l'espace occupé par l'optimisation de la distribution avec Disk Mop"
    },
    "es": {
      "title": "Archivos de optimización de entrega en Windows: qué son y cómo eliminarlos",
      "metaDescription": "Windows guarda archivos de optimización de entrega para compartir actualizaciones con otros equipos y pueden ocupar gigabytes. Qué son, si puedes borrarlos y cómo.",
      "subtitle": "Por qué Windows guarda archivos de actualización para otros equipos y cómo recuperar ese espacio",
      "keyTakeaways": [
        "La optimización de entrega es la función de Windows que descarga las actualizaciones por partes desde Microsoft y, si lo permites, desde otros equipos; su caché es una copia de los archivos de actualización guardada con ese fin.",
        "Es seguro borrar la caché: Windows vuelve a descargar un archivo solo si lo necesita, y nada de lo que instalaste o guardaste se ve afectado.",
        "Puedes vaciarla desde Configuración, el Liberador de espacio en disco, el comando de PowerShell Delete-DeliveryOptimizationCache o un limpiador, y en las ediciones Pro puedes limitar cuánto espacio puede usar."
      ],
      "dataTable": {
        "caption": "Formas de vaciar la caché de optimización de entrega",
        "columns": [
          "Método",
          "Dónde",
          "¿Requiere administrador?",
          "Notas"
        ],
        "rows": [
          [
            "Configuración, Archivos temporales",
            "Configuración, Sistema, Almacenamiento, Archivos temporales",
            "No (pide confirmación)",
            "Marca Archivos de optimización de entrega; muestra el tamaño actual"
          ],
          [
            "Liberador de espacio en disco",
            "Liberador de espacio en disco, Limpiar archivos del sistema",
            "Sí",
            "Marca Archivos de optimización de entrega"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Sí",
            "Ejecuta PowerShell como administrador"
          ],
          [
            "Disk Mop",
            "Página Espacio de Windows, Caché de optimización de entrega",
            "Sí",
            "Muestra primero el tamaño y pregunta antes de limpiar"
          ]
        ]
      },
      "howTo": {
        "name": "Cómo eliminar los archivos de optimización de entrega",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Mira cuánto ocupa la caché",
            "text": "Abre Configuración, luego Sistema, Almacenamiento y Archivos temporales. Espera a que cargue la lista y lee el tamaño que aparece junto a Archivos de optimización de entrega."
          },
          {
            "name": "Marca Archivos de optimización de entrega",
            "text": "Activa la casilla, deja los demás elementos como están salvo que quieras borrarlos también, y elige Quitar archivos."
          },
          {
            "name": "O usa el Liberador de espacio en disco",
            "text": "Busca Liberador de espacio en disco, elige la unidad del sistema, selecciona Limpiar archivos del sistema, marca Archivos de optimización de entrega y confirma."
          },
          {
            "name": "O ejecuta un único comando de PowerShell",
            "text": "Abre PowerShell como administrador y ejecuta Delete-DeliveryOptimizationCache -Force. La carpeta de la caché se vacía sin ningún aviso."
          },
          {
            "name": "Comprueba el resultado",
            "text": "Vuelve a abrir Archivos temporales para confirmar que Archivos de optimización de entrega está ahora casi a cero y, después, limita la caché si no quieres que vuelva a crecer."
          }
        ]
      },
      "faq": [
        {
          "question": "¿Qué son los archivos de optimización de entrega en Windows 11 y 10?",
          "answer": "Son archivos de actualizaciones y aplicaciones que Windows descargó y conservó para poder entregarlos más rápido y, si lo permites, compartirlos con otros equipos de tu red o de internet. La caché se encuentra en C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "¿Es seguro eliminar los archivos de optimización de entrega?",
          "answer": "Sí. Son copias. Si Windows vuelve a necesitar un archivo, lo descarga, así que borrar la caché no elimina una actualización instalada, una aplicación ni ninguno de tus archivos."
        },
        {
          "question": "¿Borrarlos estropeará Windows Update?",
          "answer": "No. Windows Update sigue funcionando. La siguiente actualización puede descargar algo más de datos porque las partes en caché ya no están, pero nada falla."
        },
        {
          "question": "¿Puedo impedir que Windows comparta actualizaciones con otros equipos?",
          "answer": "Sí. En Configuración, Windows Update, Opciones avanzadas, Optimización de entrega, desactiva Permitir descargas desde otros equipos. Windows descargará entonces solo desde Microsoft y tendrá menos motivos para conservar una caché grande."
        }
      ],
      "intro": [
        "Los archivos de optimización de entrega son copias de archivos de actualizaciones y aplicaciones que Windows conserva para poder descargarlos por partes y, si lo permites, compartirlos con otros equipos. Se pueden borrar sin riesgo: Windows vuelve a descargar un archivo solo cuando lo necesita, y no se toca nada de lo que instalaste o guardaste. Puedes vaciar la caché desde Configuración, el Liberador de espacio en disco, PowerShell o un limpiador, y una limpieza suele devolver varios gigabytes.",
        "La caché está oculta en la carpeta de una cuenta de servicio, por lo que el Explorador de archivos no la muestra en los lugares habituales; por eso mucha gente solo la descubre cuando la unidad está casi llena. Esta guía explica cómo funciona la optimización de entrega, cómo ver su tamaño real, cuatro formas de vaciarla y cómo evitar que vuelva a crecer."
      ],
      "sections": [
        {
          "title": "Qué hace la optimización de entrega",
          "content": [
            "Cuando Windows descarga una actualización grande o una aplicación de Microsoft Store, no la obtiene como un único archivo desde un solo servidor. La optimización de entrega divide la descarga en partes y las obtiene de los servidores de Microsoft y, cuando la configuración lo permite, de otros equipos que ya las tienen. Las partes se guardan en una caché para que tu equipo, a su vez, pueda ofrecérselas a otros y una descarga repetida sea rápida.",
            "La carpeta de la caché es C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Pertenece a una cuenta de servicio del sistema, por lo que necesitas permisos de administrador para ver su contenido, y las herramientas habituales de tamaño de carpetas suelen pasarla por alto.",
            "Tras una actualización de características grande, la caché puede alcanzar varios gigabytes y permanece ahí hasta que Windows decide eliminarla."
          ]
        },
        {
          "title": "¿Es seguro borrarla?",
          "content": [
            "Sí. Los archivos de esta caché son copias de datos que Windows puede volver a obtener. Borrarlos no desinstala una actualización, no elimina una aplicación ni cambia tu configuración. En el peor de los casos, la siguiente actualización descargará de nuevo una parte de los datos.",
            "Lo único a lo que renuncias es a la posibilidad de compartir esas partes con otros equipos, algo que solo importa si tienes varios equipos en una misma red y usas la función a propósito.",
            "No borres la carpeta DeliveryOptimization a mano. Usa uno de los métodos siguientes, que piden a Windows que la vacíe correctamente."
          ]
        },
        {
          "title": "Vaciarla desde Configuración o el Liberador de espacio en disco",
          "content": [
            "En Windows 11 y 10, abre Configuración, Sistema, Almacenamiento y Archivos temporales. Cuando cargue la lista, marca Archivos de optimización de entrega y elige Quitar archivos. El tamaño que aparece junto al elemento es el espacio que recuperarás.",
            "El Liberador de espacio en disco hace el mismo trabajo. Búscalo, elige la unidad del sistema, selecciona Limpiar archivos del sistema, marca Archivos de optimización de entrega y confirma. Pide permiso de administrador.",
            "Ambas vías usan el limpiador del propio Windows, que vacía la caché sin dañar el servicio. Vuelve a ejecutarlo después de actualizaciones grandes si quieres mantener la caché pequeña."
          ]
        },
        {
          "title": "Vaciarla con PowerShell o Disk Mop",
          "content": [
            "Si prefieres un comando, abre PowerShell como administrador y ejecuta Delete-DeliveryOptimizationCache -Force. El comando vacía la caché en un solo paso y no muestra nada cuando termina bien.",
            "Disk Mop usa el mismo comando de Windows. En su página Espacio de Windows, el elemento Caché de optimización de entrega muestra el tamaño actual y explica que contiene archivos de actualización que Windows guarda para compartirlos con otros equipos, que es seguro y que Windows los vuelve a descargar si hace falta. Limpiarla requiere permisos de administrador, y Disk Mop pregunta antes de hacer nada.",
            "Espacio de Windows también lista otro espacio que Windows se reserva, como Windows.old y los puntos de restauración, cada uno con su explicación, de modo que puedes ver en un solo lugar qué merece la pena limpiar."
          ]
        },
        {
          "title": "Evitar que vuelva a crecer",
          "content": [
            "En Windows Pro y superiores puedes limitar la caché con la directiva de grupo: en el Editor de directivas de grupo local, ve a Configuración del equipo, Plantillas administrativas, Componentes de Windows, Optimización de entrega y establece Tamaño máximo absoluto de caché (en GB) o Tamaño máximo de caché (porcentaje). Un límite pequeño evita que la caché vuelva a alcanzar varios gigabytes.",
            "Si no necesitas el uso compartido entre equipos, desactiva en el mismo lugar Permitir descargas desde otros equipos. Windows descargará entonces solo desde Microsoft y tendrá menos motivos para conservar una caché grande.",
            "Revisa Archivos temporales en Configuración una vez al mes, o ejecuta una limpieza programada, y la caché nunca será una sorpresa."
          ]
        }
      ],
      "verdict": [
        "Los archivos de optimización de entrega son copias de datos de actualización que Windows conserva para acelerar y compartir las descargas. Se pueden borrar sin riesgo desde Configuración, el Liberador de espacio en disco o con Delete-DeliveryOptimizationCache, y puedes limitar su tamaño para que se mantengan pequeños.",
        "Disk Mop muestra la Caché de optimización de entrega en su página Espacio de Windows, con su tamaño y una explicación clara, y la limpia con el propio comando de Windows después de que confirmes. El análisis es gratuito, así que puedes ver cuánto espacio ocupa antes de decidir."
      ],
      "ctaText": "Comprueba cuánto espacio ocupa la optimización de entrega con Disk Mop"
    },
    "it": {
      "title": "File di Ottimizzazione recapito in Windows: cosa sono e come eliminarli",
      "metaDescription": "Windows conserva i file di Ottimizzazione recapito per condividere gli aggiornamenti con altri PC e possono occupare gigabyte. Cosa sono, se puoi eliminarli e come.",
      "subtitle": "Perché Windows conserva file di aggiornamento per altri computer e come recuperare lo spazio",
      "keyTakeaways": [
        "Ottimizzazione recapito è la funzione di Windows che scarica gli aggiornamenti a pezzi da Microsoft e, se consentito, da altri PC; la sua cache è una copia dei file di aggiornamento conservata a questo scopo.",
        "La cache si può eliminare senza rischi: Windows scarica di nuovo un file solo se gli serve, e nulla di ciò che hai installato o salvato viene toccato.",
        "Puoi svuotarla da Impostazioni, da Pulizia disco, con il comando PowerShell Delete-DeliveryOptimizationCache o con un programma di pulizia e, nelle edizioni Pro, puoi limitare lo spazio che può occupare."
      ],
      "dataTable": {
        "caption": "Modi per svuotare la cache di Ottimizzazione recapito",
        "columns": [
          "Metodo",
          "Dove",
          "Servono i privilegi di amministratore?",
          "Note"
        ],
        "rows": [
          [
            "Impostazioni, File temporanei",
            "Impostazioni, Sistema, Archiviazione, File temporanei",
            "No (chiede conferma)",
            "Seleziona File di Ottimizzazione recapito; mostra la dimensione attuale"
          ],
          [
            "Pulizia disco",
            "Pulizia disco, Pulisci file di sistema",
            "Sì",
            "Seleziona File di Ottimizzazione recapito"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Sì",
            "Esegui PowerShell come amministratore"
          ],
          [
            "Disk Mop",
            "Pagina Spazio di Windows, Cache di Ottimizzazione recapito",
            "Sì",
            "Mostra prima la dimensione e chiede conferma prima di pulire"
          ]
        ]
      },
      "howTo": {
        "name": "Come eliminare i file di Ottimizzazione recapito",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Controlla le dimensioni della cache",
            "text": "Apri Impostazioni, poi Sistema, Archiviazione e File temporanei. Attendi il caricamento dell'elenco e leggi la dimensione accanto a File di Ottimizzazione recapito."
          },
          {
            "name": "Seleziona File di Ottimizzazione recapito",
            "text": "Seleziona la casella, lascia invariati gli altri elementi a meno che tu non voglia eliminarli, e scegli Rimuovi file."
          },
          {
            "name": "Oppure usa Pulizia disco",
            "text": "Cerca Pulizia disco, scegli l'unità di sistema, seleziona Pulisci file di sistema, spunta File di Ottimizzazione recapito e conferma."
          },
          {
            "name": "Oppure esegui un solo comando PowerShell",
            "text": "Apri PowerShell come amministratore ed esegui Delete-DeliveryOptimizationCache -Force. La cartella della cache viene svuotata senza alcuna richiesta."
          },
          {
            "name": "Verifica il risultato",
            "text": "Riapri File temporanei per confermare che File di Ottimizzazione recapito sia ora vicino a zero, poi limita la cache se non vuoi che torni a crescere."
          }
        ]
      },
      "faq": [
        {
          "question": "Che cosa sono i file di Ottimizzazione recapito in Windows 11 e 10?",
          "answer": "Sono file di aggiornamenti e app che Windows ha scaricato e conservato per poterli fornire più rapidamente e, se lo consenti, condividerli con altri PC della tua rete o di internet. La cache si trova in C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "È sicuro eliminare i file di Ottimizzazione recapito?",
          "answer": "Sì. Sono copie. Se Windows ha di nuovo bisogno di un file, lo scarica; eliminare la cache non rimuove quindi un aggiornamento installato, un'app né alcun tuo file."
        },
        {
          "question": "Eliminarli danneggerà Windows Update?",
          "answer": "No. Windows Update continua a funzionare. Il prossimo aggiornamento potrebbe scaricare qualche dato in più perché i frammenti in cache non ci sono più, ma nulla va in errore."
        },
        {
          "question": "Posso impedire a Windows di condividere gli aggiornamenti con altri PC?",
          "answer": "Sì. In Impostazioni, Windows Update, Opzioni avanzate, Ottimizzazione recapito, disattiva Consenti download da altri PC. Windows scaricherà così solo da Microsoft e avrà meno motivi per conservare una cache grande."
        }
      ],
      "intro": [
        "I file di Ottimizzazione recapito sono copie di file di aggiornamento e di app che Windows conserva per scaricarli a pezzi e, se lo consenti, condividerli con altri PC. Si possono eliminare senza rischi: Windows scarica di nuovo un file solo quando gli serve, e nulla di ciò che hai installato o salvato viene toccato. Puoi svuotare la cache da Impostazioni, Pulizia disco, PowerShell o un programma di pulizia, e una pulizia restituisce spesso diversi gigabyte.",
        "La cache è nascosta nella cartella di un account di servizio, quindi Esplora file non la mostra nei posti in cui di solito si guarda; per questo molti la scoprono solo quando l'unità è quasi piena. Questa guida spiega come funziona Ottimizzazione recapito, come vedere la dimensione reale, quattro modi per svuotarla e come evitare che torni a crescere."
      ],
      "sections": [
        {
          "title": "Che cosa fa Ottimizzazione recapito",
          "content": [
            "Quando Windows scarica un aggiornamento importante o un'app del Microsoft Store, non lo preleva come un unico file da un solo server. Ottimizzazione recapito divide il download in parti e le preleva dai server Microsoft e, quando l'impostazione lo consente, da altri PC che le hanno già. Le parti vengono memorizzate in una cache, così il tuo PC può a sua volta fornirle ad altri e un download ripetuto è veloce.",
            "La cartella della cache è C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Appartiene a un account di servizio di sistema, quindi servono i privilegi di amministratore per vederne il contenuto e i normali strumenti per le dimensioni delle cartelle spesso la ignorano.",
            "Dopo un grande aggiornamento delle funzionalità la cache può raggiungere diversi gigabyte e rimane lì finché Windows non decide di rimuoverla."
          ]
        },
        {
          "title": "È sicuro eliminarla?",
          "content": [
            "Sì. I file di questa cache sono copie di dati che Windows può recuperare di nuovo. Eliminarli non disinstalla un aggiornamento, non rimuove un'app e non modifica le tue impostazioni. Nel peggiore dei casi, il prossimo aggiornamento scarica di nuovo una parte dei dati.",
            "L'unica cosa a cui rinunci è la possibilità di condividere quelle parti con altri PC, cosa che conta solo se hai più PC nella stessa rete e usi la funzione di proposito.",
            "Non eliminare a mano la cartella DeliveryOptimization. Usa uno dei metodi qui sotto, che chiedono a Windows di svuotarla correttamente."
          ]
        },
        {
          "title": "Svuotarla da Impostazioni o da Pulizia disco",
          "content": [
            "In Windows 11 e 10 apri Impostazioni, Sistema, Archiviazione e File temporanei. Dopo il caricamento dell'elenco, seleziona File di Ottimizzazione recapito e scegli Rimuovi file. La dimensione mostrata accanto all'elemento è lo spazio che recupererai.",
            "Pulizia disco fa lo stesso lavoro. Cercalo, scegli l'unità di sistema, seleziona Pulisci file di sistema, spunta File di Ottimizzazione recapito e conferma. Richiede l'autorizzazione di amministratore.",
            "Entrambi i percorsi usano lo strumento di pulizia di Windows stesso, che svuota la cache senza danneggiare il servizio. Eseguilo di nuovo dopo i grandi aggiornamenti se vuoi mantenere la cache piccola."
          ]
        },
        {
          "title": "Svuotarla con PowerShell o Disk Mop",
          "content": [
            "Se preferisci un comando, apri PowerShell come amministratore ed esegui Delete-DeliveryOptimizationCache -Force. Il comando svuota la cache in un solo passaggio e non stampa nulla quando va a buon fine.",
            "Disk Mop usa lo stesso comando di Windows. Nella sua pagina Spazio di Windows, la voce Cache di Ottimizzazione recapito mostra la dimensione attuale e spiega che contiene file di aggiornamento che Windows conserva per condividerli con altri PC, che è sicura e che Windows li scarica di nuovo se necessario. La pulizia richiede i privilegi di amministratore e Disk Mop chiede conferma prima di fare qualsiasi cosa.",
            "Spazio di Windows elenca anche altro spazio che Windows tiene per sé, come Windows.old e i punti di ripristino, ciascuno con una spiegazione, così puoi vedere in un unico posto che cosa vale la pena pulire."
          ]
        },
        {
          "title": "Evitare che torni a crescere",
          "content": [
            "In Windows Pro e versioni superiori puoi limitare la cache con i Criteri di gruppo: nell'Editor Criteri di gruppo locali vai a Configurazione computer, Modelli amministrativi, Componenti di Windows, Ottimizzazione recapito e imposta Dimensione massima assoluta della cache (in GB) o Dimensione massima della cache (percentuale). Un limite ridotto impedisce alla cache di raggiungere di nuovo diversi gigabyte.",
            "Se non ti serve la condivisione peer-to-peer, disattiva nello stesso punto Consenti download da altri PC. Windows scaricherà così solo da Microsoft e avrà meno motivi per conservare una cache grande.",
            "Controlla File temporanei in Impostazioni una volta al mese, oppure esegui una pulizia pianificata, e la cache non sarà mai una sorpresa."
          ]
        }
      ],
      "verdict": [
        "I file di Ottimizzazione recapito sono copie di dati di aggiornamento che Windows conserva per velocizzare e condividere i download. Si possono eliminare senza rischi da Impostazioni, da Pulizia disco o con Delete-DeliveryOptimizationCache, e puoi limitarne le dimensioni perché restino contenute.",
        "Disk Mop mostra la Cache di Ottimizzazione recapito nella pagina Spazio di Windows, con la sua dimensione e una spiegazione chiara, e la pulisce con il comando di Windows stesso dopo la tua conferma. La scansione è gratuita, quindi puoi vedere quanto spazio occupa prima di decidere."
      ],
      "ctaText": "Controlla con Disk Mop quanto spazio occupa Ottimizzazione recapito"
    },
    "pt": {
      "title": "Arquivos de Otimização de Entrega no Windows: o que são e como excluí-los",
      "metaDescription": "O Windows guarda arquivos de Otimização de Entrega para compartilhar atualizações com outros PCs e eles podem ocupar GB. Veja o que são, se pode excluir e como.",
      "subtitle": "Por que o Windows guarda arquivos de atualização para outros computadores e como recuperar o espaço",
      "keyTakeaways": [
        "A Otimização de Entrega é o recurso do Windows que baixa as atualizações em partes da Microsoft e, se permitido, de outros PCs; o cache dela é uma cópia dos arquivos de atualização mantida para essa finalidade.",
        "É seguro excluir o cache: o Windows baixa um arquivo de novo somente se precisar dele, e nada do que você instalou ou salvou é afetado.",
        "Você pode esvaziá-lo pelas Configurações, pela Limpeza de Disco, pelo comando Delete-DeliveryOptimizationCache do PowerShell ou por um limpador e, nas edições Pro, limitar o espaço que ele pode usar."
      ],
      "dataTable": {
        "caption": "Formas de limpar o cache da Otimização de Entrega",
        "columns": [
          "Método",
          "Onde",
          "Exige administrador?",
          "Observações"
        ],
        "rows": [
          [
            "Configurações, Arquivos temporários",
            "Configurações, Sistema, Armazenamento, Arquivos temporários",
            "Não (pede aprovação)",
            "Marque Arquivos de Otimização de Entrega; mostra o tamanho atual"
          ],
          [
            "Limpeza de Disco",
            "Limpeza de Disco, Limpar arquivos do sistema",
            "Sim",
            "Marque Arquivos de Otimização de Entrega"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Sim",
            "Execute o PowerShell como administrador"
          ],
          [
            "Disk Mop",
            "Página Espaço do Windows, Cache da Otimização de Entrega",
            "Sim",
            "Mostra o tamanho primeiro e pergunta antes de limpar"
          ]
        ]
      },
      "howTo": {
        "name": "Como excluir os arquivos de Otimização de Entrega",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Veja o tamanho do cache",
            "text": "Abra Configurações, depois Sistema, Armazenamento e Arquivos temporários. Aguarde a lista carregar e leia o tamanho ao lado de Arquivos de Otimização de Entrega."
          },
          {
            "name": "Marque Arquivos de Otimização de Entrega",
            "text": "Marque a caixa de seleção, deixe os outros itens como estão, a menos que queira limpá-los também, e escolha Remover arquivos."
          },
          {
            "name": "Ou use a Limpeza de Disco",
            "text": "Pesquise por Limpeza de Disco, escolha a unidade do sistema, selecione Limpar arquivos do sistema, marque Arquivos de Otimização de Entrega e confirme."
          },
          {
            "name": "Ou execute um único comando do PowerShell",
            "text": "Abra o PowerShell como administrador e execute Delete-DeliveryOptimizationCache -Force. A pasta do cache é esvaziada sem nenhum aviso."
          },
          {
            "name": "Confira o resultado",
            "text": "Abra Arquivos temporários novamente para confirmar que Arquivos de Otimização de Entrega está agora próximo de zero e, em seguida, limite o cache se não quiser que ele volte a crescer."
          }
        ]
      },
      "faq": [
        {
          "question": "O que são os arquivos de Otimização de Entrega no Windows 11 e 10?",
          "answer": "São arquivos de atualizações e de aplicativos que o Windows baixou e guardou para poder entregá-los mais rápido e, se você permitir, compartilhá-los com outros PCs da sua rede ou da internet. O cache fica em C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "É seguro excluir os arquivos de Otimização de Entrega?",
          "answer": "Sim. São cópias. Se o Windows precisar de um arquivo de novo, ele o baixa; portanto, excluir o cache não remove uma atualização instalada, um aplicativo nem nenhum arquivo seu."
        },
        {
          "question": "Excluí-los vai quebrar o Windows Update?",
          "answer": "Não. O Windows Update continua funcionando. A próxima atualização pode baixar um pouco mais de dados porque as partes em cache sumiram, mas nada falha."
        },
        {
          "question": "Posso impedir que o Windows compartilhe atualizações com outros PCs?",
          "answer": "Sim. Em Configurações, Windows Update, Opções avançadas, Otimização de Entrega, desative Permitir downloads de outros PCs. O Windows passa a baixar somente da Microsoft e tem menos motivo para manter um cache grande."
        }
      ],
      "intro": [
        "Os arquivos de Otimização de Entrega são cópias de arquivos de atualização e de aplicativos que o Windows mantém para baixá-los em partes e, se você permitir, compartilhá-los com outros PCs. É seguro excluí-los: o Windows baixa um arquivo de novo somente quando precisa dele, e nada do que você instalou ou salvou é tocado. Você pode esvaziar o cache pelas Configurações, pela Limpeza de Disco, pelo PowerShell ou por um limpador, e uma limpeza costuma devolver vários gigabytes.",
        "O cache fica escondido na pasta de uma conta de serviço, por isso o Explorador de Arquivos não o mostra nos lugares onde você costuma olhar, e é por isso que muita gente só o descobre quando a unidade está quase cheia. Este guia explica como funciona a Otimização de Entrega, como ver o tamanho real, quatro formas de limpá-lo e como impedir que ele volte a crescer."
      ],
      "sections": [
        {
          "title": "O que a Otimização de Entrega faz",
          "content": [
            "Quando o Windows baixa uma atualização grande ou um aplicativo da Microsoft Store, ele não busca tudo como um único arquivo de um só servidor. A Otimização de Entrega divide o download em partes e as busca nos servidores da Microsoft e, quando a configuração permite, em outros PCs que já as têm. As partes ficam guardadas em um cache para que o seu PC, por sua vez, possa entregá-las a outros e um download repetido seja rápido.",
            "A pasta do cache é C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Ela pertence a uma conta de serviço do sistema, por isso você precisa de direitos de administrador para ver o conteúdo, e as ferramentas comuns de tamanho de pasta muitas vezes não a detectam.",
            "Depois de uma grande atualização de recursos, o cache pode ter vários gigabytes e permanece ali até o Windows decidir removê-lo."
          ]
        },
        {
          "title": "É seguro excluir?",
          "content": [
            "Sim. Os arquivos desse cache são cópias de dados que o Windows pode buscar de novo. Excluí-los não desinstala uma atualização, não remove um aplicativo e não altera suas configurações. No pior caso, a próxima atualização baixa novamente parte dos dados.",
            "A única coisa que você perde é a capacidade de compartilhar essas partes com outros PCs, o que só importa se você tem vários PCs em uma mesma rede e usa o recurso de propósito.",
            "Não exclua a pasta DeliveryOptimization manualmente. Use um dos métodos abaixo, que pedem ao Windows para esvaziá-la corretamente."
          ]
        },
        {
          "title": "Limpe pelas Configurações ou pela Limpeza de Disco",
          "content": [
            "No Windows 11 e no 10, abra Configurações, Sistema, Armazenamento e Arquivos temporários. Depois que a lista carregar, marque Arquivos de Otimização de Entrega e escolha Remover arquivos. O tamanho exibido ao lado do item é o espaço que você vai recuperar.",
            "A Limpeza de Disco faz o mesmo trabalho. Pesquise por ela, escolha a unidade do sistema, selecione Limpar arquivos do sistema, marque Arquivos de Otimização de Entrega e confirme. Ela pede permissão de administrador.",
            "Os dois caminhos usam o limpador do próprio Windows, que esvazia o cache sem prejudicar o serviço. Execute-o de novo depois de grandes atualizações se quiser manter o cache pequeno."
          ]
        },
        {
          "title": "Limpe com o PowerShell ou o Disk Mop",
          "content": [
            "Se preferir um comando, abra o PowerShell como administrador e execute Delete-DeliveryOptimizationCache -Force. O comando esvazia o cache em uma única etapa e não imprime nada quando dá certo.",
            "O Disk Mop usa o mesmo comando do Windows. Na página Espaço do Windows, o item Cache da Otimização de Entrega mostra o tamanho atual e explica que ele guarda arquivos de atualização que o Windows mantém para compartilhar com outros PCs, que é seguro e que o Windows baixa de novo se precisar. Limpá-lo exige direitos de administrador, e o Disk Mop pergunta antes de fazer qualquer coisa.",
            "O Espaço do Windows também lista outros espaços que o Windows reserva para si, como o Windows.old e os pontos de restauração, cada um com uma explicação, para que você veja em um só lugar o que vale a pena limpar."
          ]
        },
        {
          "title": "Impeça que ele volte a crescer",
          "content": [
            "No Windows Pro e superiores, você pode limitar o cache com a Política de Grupo: no Editor de Política de Grupo Local, vá para Configuração do Computador, Modelos Administrativos, Componentes do Windows, Otimização de Entrega e defina Tamanho Máximo Absoluto do Cache (em GB) ou Tamanho Máximo do Cache (porcentagem). Um limite pequeno impede que o cache volte a chegar a vários gigabytes.",
            "Se você não precisa do compartilhamento ponto a ponto, desative Permitir downloads de outros PCs no mesmo lugar. O Windows passa a baixar somente da Microsoft e tem menos motivo para manter um cache grande.",
            "Confira Arquivos temporários nas Configurações uma vez por mês, ou execute uma limpeza agendada, e o cache nunca será uma surpresa."
          ]
        }
      ],
      "verdict": [
        "Os arquivos de Otimização de Entrega são cópias de dados de atualização que o Windows mantém para acelerar e compartilhar downloads. É seguro excluí-los pelas Configurações, pela Limpeza de Disco ou com Delete-DeliveryOptimizationCache, e você pode limitar o tamanho deles para que continuem pequenos.",
        "O Disk Mop mostra o Cache da Otimização de Entrega na página Espaço do Windows, com o tamanho e uma explicação clara, e o limpa com o comando do próprio Windows depois que você confirma. A verificação é gratuita, então você pode ver quanto espaço ele ocupa antes de decidir."
      ],
      "ctaText": "Veja com o Disk Mop quanto espaço a Otimização de Entrega ocupa"
    },
    "ja": {
      "title": "Windowsの「配信の最適化ファイル」とは？ 削除してよい？ 消し方を解説",
      "metaDescription": "Windowsは更新プログラムを他のPCと共有するため配信の最適化ファイルを保存し、数GBに達することもあります。内容、削除してよいか、消し方を紹介します。",
      "subtitle": "Windowsが他のPCのために更新ファイルを保持する理由と、空き容量を取り戻す方法",
      "keyTakeaways": [
        "配信の最適化は、更新プログラムをMicrosoftと、許可している場合は他のPCから分割してダウンロードするWindowsの機能で、そのキャッシュはこの目的のために保持された更新ファイルのコピーです。",
        "このキャッシュは安全に削除できます。Windowsは必要になったときだけファイルを再ダウンロードし、インストール済みのものや保存したデータには影響しません。",
        "設定、ディスク クリーンアップ、PowerShellのDelete-DeliveryOptimizationCacheコマンド、クリーナーのいずれかで空にできます。Pro以上のエディションでは使用量の上限も設定できます。"
      ],
      "dataTable": {
        "caption": "配信の最適化キャッシュを消去する方法",
        "columns": [
          "方法",
          "場所",
          "管理者権限が必要か",
          "メモ"
        ],
        "rows": [
          [
            "設定、一時ファイル",
            "設定、システム、記憶域、一時ファイル",
            "不要（承認を求められます）",
            "配信の最適化ファイルにチェックを入れます。現在のサイズが表示されます"
          ],
          [
            "ディスク クリーンアップ",
            "ディスク クリーンアップ、システム ファイルのクリーンアップ",
            "必要",
            "配信の最適化ファイルにチェックを入れます"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "必要",
            "PowerShellを管理者として実行します"
          ],
          [
            "Disk Mop",
            "Windowsの使用領域ページ、配信の最適化キャッシュ",
            "必要",
            "先にサイズを表示し、消去前に確認します"
          ]
        ]
      },
      "howTo": {
        "name": "配信の最適化ファイルを削除する方法",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "キャッシュのサイズを確認する",
            "text": "設定を開き、システム、記憶域、一時ファイルの順に進みます。一覧が読み込まれるのを待ち、配信の最適化ファイルの横のサイズを確認します。"
          },
          {
            "name": "配信の最適化ファイルにチェックを入れる",
            "text": "チェック ボックスをオンにします。他の項目も消したい場合を除き、そのままにして、ファイルの削除を選びます。"
          },
          {
            "name": "またはディスク クリーンアップを使う",
            "text": "ディスク クリーンアップを検索し、システム ドライブを選んで、システム ファイルのクリーンアップを選択し、配信の最適化ファイルにチェックを入れて確定します。"
          },
          {
            "name": "またはPowerShellコマンドを1つ実行する",
            "text": "PowerShellを管理者として開き、Delete-DeliveryOptimizationCache -Forceを実行します。確認メッセージなしでキャッシュ フォルダーが空になります。"
          },
          {
            "name": "結果を確認する",
            "text": "もう一度一時ファイルを開き、配信の最適化ファイルがほぼゼロになっていることを確認します。再び増やしたくない場合は、キャッシュの上限を設定してください。"
          }
        ]
      },
      "faq": [
        {
          "question": "Windows 11と10の配信の最適化ファイルとは何ですか？",
          "answer": "Windowsがダウンロードして保持している更新プログラムやアプリのファイルです。より速く配信でき、許可した場合はネットワーク上やインターネット上の他のPCと共有できます。キャッシュはC:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cacheにあります。"
        },
        {
          "question": "配信の最適化ファイルを削除しても安全ですか？",
          "answer": "はい。これらはコピーです。Windowsが再び必要としたときはダウンロードし直すため、キャッシュを削除してもインストール済みの更新プログラム、アプリ、ご自身のファイルは削除されません。"
        },
        {
          "question": "削除するとWindows Updateが壊れますか？",
          "answer": "いいえ。Windows Updateは引き続き動作します。キャッシュされていた部分がなくなるため、次の更新で少し多めにデータをダウンロードする場合がありますが、失敗することはありません。"
        },
        {
          "question": "Windowsが他のPCと更新プログラムを共有しないようにできますか？",
          "answer": "はい。設定、Windows Update、詳細オプション、配信の最適化で、他のPCからのダウンロードを許可するをオフにします。WindowsはMicrosoftからのみダウンロードするようになり、大きなキャッシュを保持する理由が減ります。"
        }
      ],
      "intro": [
        "配信の最適化ファイルは、Windowsが更新プログラムやアプリのファイルを分割してダウンロードし、許可した場合は他のPCと共有するために保持しているコピーです。削除しても安全です。Windowsは必要になったときだけファイルを再ダウンロードし、インストール済みのものや保存したものには手を付けません。キャッシュは設定、ディスク クリーンアップ、PowerShell、クリーナーのいずれかで空にでき、数GBが戻ってくることも珍しくありません。",
        "キャッシュはサービス アカウントのフォルダーに隠れているため、エクスプローラーでは普段見る場所に表示されません。ドライブがほぼ満杯になって初めて気づく人が多いのはそのためです。このガイドでは、配信の最適化の仕組み、実際のサイズの確認方法、消去する4つの方法、再び増えないようにする方法を説明します。"
      ],
      "sections": [
        {
          "title": "配信の最適化の役割",
          "content": [
            "Windowsは大きな更新プログラムやMicrosoft Storeのアプリをダウンロードするとき、1台のサーバーから1つのファイルとして取得するわけではありません。配信の最適化はダウンロードを分割し、Microsoftのサーバーと、設定で許可されている場合はすでにその部分を持っている他のPCから取得します。分割した部分はキャッシュに保存され、自分のPCが今度は他のPCへ提供でき、再ダウンロードも高速になります。",
            "キャッシュ フォルダーはC:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cacheです。システムのサービス アカウントに属しているため、内容を見るには管理者権限が必要で、通常のフォルダー サイズ確認ツールでは見落とされがちです。",
            "大型の機能更新の後は、キャッシュが数GBになることがあり、Windowsが削除すると判断するまで残り続けます。"
          ]
        },
        {
          "title": "削除しても安全か",
          "content": [
            "はい。このキャッシュのファイルは、Windowsが再取得できるデータのコピーです。削除しても更新プログラムはアンインストールされず、アプリも削除されず、設定も変わりません。最悪の場合でも、次の更新でデータの一部が再ダウンロードされるだけです。",
            "失うのは、それらの部分を他のPCと共有する機能だけです。同じネットワークに複数のPCがあり、意図してこの機能を使っている場合にのみ影響します。",
            "DeliveryOptimizationフォルダーを手動で削除しないでください。以下の方法を使えば、Windowsに正しく消去させることができます。"
          ]
        },
        {
          "title": "設定またはディスク クリーンアップで消去する",
          "content": [
            "Windows 11と10では、設定、システム、記憶域、一時ファイルの順に開きます。一覧が読み込まれたら、配信の最適化ファイルにチェックを入れ、ファイルの削除を選びます。項目の横に表示されるサイズが、取り戻せる容量です。",
            "ディスク クリーンアップでも同じことができます。検索して開き、システム ドライブを選び、システム ファイルのクリーンアップを選択して、配信の最適化ファイルにチェックを入れ、確定します。管理者の許可が求められます。",
            "どちらの方法もWindows標準のクリーナーを使うため、サービスを壊さずにキャッシュを空にできます。キャッシュを小さく保ちたい場合は、大きな更新の後にもう一度実行してください。"
          ]
        },
        {
          "title": "PowerShellまたはDisk Mopで消去する",
          "content": [
            "コマンドを使いたい場合は、PowerShellを管理者として開き、Delete-DeliveryOptimizationCache -Forceを実行します。このコマンドは1回でキャッシュを空にし、成功しても何も表示しません。",
            "Disk Mopも同じWindowsコマンドを使います。Windowsの使用領域ページの配信の最適化キャッシュ項目には、現在のサイズが表示され、他のPCと共有するためにWindowsが保持している更新ファイルであること、安全であること、必要ならWindowsが再ダウンロードすることが説明されています。消去には管理者権限が必要で、Disk Mopは実行前に確認します。",
            "Windowsの使用領域には、Windows.oldや復元ポイントなど、Windowsが自分用に確保している他の領域も、それぞれの説明付きで一覧表示されるため、整理する価値のあるものを1か所で確認できます。"
          ]
        },
        {
          "title": "再び増えないようにする",
          "content": [
            "Windows Pro以上では、グループ ポリシーでキャッシュの上限を設定できます。ローカル グループ ポリシー エディターで、コンピューターの構成、管理用テンプレート、Windows コンポーネント、配信の最適化を開き、絶対最大キャッシュ サイズ (GB 単位) または最大キャッシュ サイズ (パーセンテージ) を設定します。小さめの上限にしておけば、キャッシュが再び数GBに達するのを防げます。",
            "ピアツーピア共有が不要なら、同じ場所で他のPCからのダウンロードを許可するをオフにします。WindowsはMicrosoftからのみダウンロードするようになり、大きなキャッシュを保持する理由が減ります。",
            "設定の一時ファイルを月に1回確認するか、スケジュールされたクリーンアップを実行すれば、キャッシュに驚かされることはありません。"
          ]
        }
      ],
      "verdict": [
        "配信の最適化ファイルは、ダウンロードを高速化・共有するためにWindowsが保持している更新データのコピーです。設定、ディスク クリーンアップ、Delete-DeliveryOptimizationCacheのいずれでも安全に削除でき、サイズに上限を設けて小さく保つこともできます。",
        "Disk MopはWindowsの使用領域ページに配信の最適化キャッシュをサイズとわかりやすい説明付きで表示し、確認後にWindows標準のコマンドで消去します。スキャンは無料なので、判断する前にどれだけの容量を使っているか確認できます。"
      ],
      "ctaText": "Disk Mopで配信の最適化の使用容量を確認する"
    },
    "ko": {
      "title": "Windows 배달 최적화 파일이란? 삭제해도 되는지와 지우는 방법",
      "metaDescription": "Windows는 다른 PC와 업데이트를 공유하려고 배달 최적화 파일을 보관하며 수 GB까지 차지할 수 있습니다. 무엇인지, 삭제해도 되는지, 방법을 알아보세요.",
      "subtitle": "Windows가 다른 컴퓨터를 위해 업데이트 파일을 보관하는 이유와 공간을 되찾는 방법",
      "keyTakeaways": [
        "배달 최적화는 업데이트를 Microsoft와, 허용한 경우 다른 PC에서 조각으로 나누어 내려받는 Windows 기능이며, 그 캐시는 이 목적을 위해 보관하는 업데이트 파일의 사본입니다.",
        "캐시는 안전하게 삭제할 수 있습니다. Windows는 필요할 때만 파일을 다시 내려받으며, 설치했거나 저장한 항목에는 영향이 없습니다.",
        "설정, 디스크 정리, PowerShell의 Delete-DeliveryOptimizationCache 명령 또는 정리 프로그램으로 비울 수 있으며, Pro 에디션에서는 사용할 수 있는 용량의 상한도 지정할 수 있습니다."
      ],
      "dataTable": {
        "caption": "배달 최적화 캐시를 지우는 방법",
        "columns": [
          "방법",
          "위치",
          "관리자 권한 필요",
          "참고"
        ],
        "rows": [
          [
            "설정, 임시 파일",
            "설정, 시스템, 저장소, 임시 파일",
            "아니요(승인을 요청함)",
            "배달 최적화 파일을 선택합니다. 현재 크기가 표시됩니다"
          ],
          [
            "디스크 정리",
            "디스크 정리, 시스템 파일 정리",
            "예",
            "배달 최적화 파일을 선택합니다"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "예",
            "PowerShell을 관리자 권한으로 실행합니다"
          ],
          [
            "Disk Mop",
            "Windows 공간 페이지, 전송 최적화 캐시",
            "예",
            "먼저 크기를 보여 주고 정리하기 전에 확인합니다"
          ]
        ]
      },
      "howTo": {
        "name": "배달 최적화 파일을 삭제하는 방법",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "캐시 크기 확인하기",
            "text": "설정을 열고 시스템, 저장소, 임시 파일로 이동합니다. 목록이 로드될 때까지 기다린 다음 배달 최적화 파일 옆의 크기를 확인합니다."
          },
          {
            "name": "배달 최적화 파일 선택하기",
            "text": "확인란을 선택합니다. 다른 항목도 지우려는 경우가 아니라면 그대로 두고 파일 제거를 선택합니다."
          },
          {
            "name": "또는 디스크 정리 사용하기",
            "text": "디스크 정리를 검색하고 시스템 드라이브를 선택한 다음 시스템 파일 정리를 선택하고 배달 최적화 파일을 선택한 후 확인합니다."
          },
          {
            "name": "또는 PowerShell 명령 하나 실행하기",
            "text": "PowerShell을 관리자 권한으로 열고 Delete-DeliveryOptimizationCache -Force를 실행합니다. 확인 메시지 없이 캐시 폴더가 비워집니다."
          },
          {
            "name": "결과 확인하기",
            "text": "임시 파일을 다시 열어 배달 최적화 파일이 0에 가까워졌는지 확인한 다음, 캐시가 다시 커지지 않도록 하려면 용량을 제한합니다."
          }
        ]
      },
      "faq": [
        {
          "question": "Windows 11과 10의 배달 최적화 파일이란 무엇인가요?",
          "answer": "Windows가 내려받아 보관해 둔 업데이트 및 앱 파일로, 더 빠르게 전달하고 허용하면 네트워크나 인터넷의 다른 PC와 공유하기 위한 것입니다. 캐시는 C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache에 있습니다."
        },
        {
          "question": "배달 최적화 파일을 삭제해도 안전한가요?",
          "answer": "네. 이 파일들은 사본입니다. Windows가 파일이 다시 필요하면 내려받으므로, 캐시를 삭제해도 설치된 업데이트, 앱, 내 파일은 지워지지 않습니다."
        },
        {
          "question": "삭제하면 Windows 업데이트가 고장 나나요?",
          "answer": "아니요. Windows 업데이트는 계속 작동합니다. 캐시된 조각이 사라졌기 때문에 다음 업데이트에서 데이터를 조금 더 내려받을 수 있지만, 실패하는 일은 없습니다."
        },
        {
          "question": "Windows가 다른 PC와 업데이트를 공유하지 않게 할 수 있나요?",
          "answer": "네. 설정, Windows 업데이트, 고급 옵션, 배달 최적화에서 다른 PC에서 다운로드 허용을 끄세요. 그러면 Windows는 Microsoft에서만 내려받으며 큰 캐시를 유지할 이유가 줄어듭니다."
        }
      ],
      "intro": [
        "배달 최적화 파일은 Windows가 업데이트와 앱 파일을 조각으로 나누어 내려받고, 허용한 경우 다른 PC와 공유하려고 보관하는 사본입니다. 삭제해도 안전합니다. Windows는 필요할 때만 파일을 다시 내려받으며, 설치했거나 저장한 항목은 건드리지 않습니다. 설정, 디스크 정리, PowerShell 또는 정리 프로그램으로 캐시를 비울 수 있고, 정리하면 수 GB가 돌아오는 경우가 많습니다.",
        "캐시는 서비스 계정의 폴더에 숨겨져 있어서 파일 탐색기가 평소 확인하는 위치에는 표시되지 않습니다. 그래서 드라이브가 거의 가득 찼을 때에야 발견하는 경우가 많습니다. 이 가이드에서는 배달 최적화의 작동 방식, 실제 크기를 확인하는 방법, 캐시를 비우는 네 가지 방법, 다시 커지지 않게 하는 방법을 설명합니다."
      ],
      "sections": [
        {
          "title": "배달 최적화가 하는 일",
          "content": [
            "Windows가 큰 업데이트나 Microsoft Store 앱을 내려받을 때는 서버 한 곳에서 파일 하나로 가져오지 않습니다. 배달 최적화는 다운로드를 조각으로 나누어 Microsoft 서버에서, 설정이 허용하면 이미 해당 조각을 가진 다른 PC에서도 가져옵니다. 조각은 캐시에 저장되므로 내 PC도 다른 PC에 조각을 전달할 수 있고, 같은 항목을 다시 내려받을 때도 빠릅니다.",
            "캐시 폴더는 C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache입니다. 시스템 서비스 계정에 속해 있어 내용을 보려면 관리자 권한이 필요하며, 일반적인 폴더 크기 확인 도구는 이를 놓치는 경우가 많습니다.",
            "큰 기능 업데이트 후에는 캐시가 수 GB가 될 수 있으며, Windows가 제거하기로 결정할 때까지 그대로 남아 있습니다."
          ]
        },
        {
          "title": "삭제해도 안전한가요?",
          "content": [
            "네. 이 캐시의 파일은 Windows가 다시 가져올 수 있는 데이터의 사본입니다. 삭제해도 업데이트가 제거되거나, 앱이 삭제되거나, 설정이 바뀌지 않습니다. 최악의 경우 다음 업데이트에서 데이터 일부를 다시 내려받는 정도입니다.",
            "포기하게 되는 것은 해당 조각을 다른 PC와 공유하는 기능뿐이며, 같은 네트워크에 PC가 여러 대 있고 이 기능을 일부러 사용하는 경우에만 의미가 있습니다.",
            "DeliveryOptimization 폴더를 직접 삭제하지 마세요. Windows가 올바르게 비우도록 요청하는 아래 방법 중 하나를 사용하세요."
          ]
        },
        {
          "title": "설정 또는 디스크 정리로 비우기",
          "content": [
            "Windows 11과 10에서 설정, 시스템, 저장소, 임시 파일을 엽니다. 목록이 로드되면 배달 최적화 파일을 선택하고 파일 제거를 선택합니다. 항목 옆에 표시된 크기가 되찾게 될 공간입니다.",
            "디스크 정리도 같은 작업을 합니다. 검색해서 열고 시스템 드라이브를 선택한 다음 시스템 파일 정리를 선택하고 배달 최적화 파일을 선택한 후 확인합니다. 관리자 권한 승인을 요청합니다.",
            "두 방법 모두 Windows 자체 정리 기능을 사용하므로 서비스를 손상하지 않고 캐시를 비웁니다. 캐시를 작게 유지하려면 큰 업데이트 후에 다시 실행하세요."
          ]
        },
        {
          "title": "PowerShell 또는 Disk Mop으로 비우기",
          "content": [
            "명령을 선호한다면 PowerShell을 관리자 권한으로 열고 Delete-DeliveryOptimizationCache -Force를 실행하세요. 이 명령은 한 번에 캐시를 비우며 성공해도 아무것도 출력하지 않습니다.",
            "Disk Mop은 같은 Windows 명령을 사용합니다. Windows 공간 페이지의 전송 최적화 캐시 항목에는 현재 크기가 표시되고, 다른 PC와 공유하기 위해 Windows가 보관하는 업데이트 파일이며 안전하고 필요하면 Windows가 다시 내려받는다는 설명이 나옵니다. 정리하려면 관리자 권한이 필요하고, Disk Mop은 작업하기 전에 확인합니다.",
            "Windows 공간에는 Windows.old와 복원 지점처럼 Windows가 자체적으로 차지하는 다른 공간도 각각 설명과 함께 나열되므로, 정리할 만한 항목을 한곳에서 확인할 수 있습니다."
          ]
        },
        {
          "title": "다시 커지지 않게 하기",
          "content": [
            "Windows Pro 이상에서는 그룹 정책으로 캐시를 제한할 수 있습니다. 로컬 그룹 정책 편집기에서 컴퓨터 구성, 관리 템플릿, Windows 구성 요소, 배달 최적화로 이동하여 절대 최대 캐시 크기(GB) 또는 최대 캐시 크기(백분율)를 설정하세요. 작은 제한을 두면 캐시가 다시 수 GB에 이르지 않습니다.",
            "피어 투 피어 공유가 필요 없다면 같은 위치에서 다른 PC에서 다운로드 허용을 끄세요. 그러면 Windows는 Microsoft에서만 내려받으며 큰 캐시를 유지할 이유가 줄어듭니다.",
            "설정의 임시 파일을 한 달에 한 번 확인하거나 예약 정리를 실행하면 캐시 때문에 놀랄 일이 없습니다."
          ]
        }
      ],
      "verdict": [
        "배달 최적화 파일은 다운로드를 빠르게 하고 공유하기 위해 Windows가 보관하는 업데이트 데이터의 사본입니다. 설정, 디스크 정리 또는 Delete-DeliveryOptimizationCache로 안전하게 삭제할 수 있으며, 크기를 제한해 작게 유지할 수도 있습니다.",
        "Disk Mop은 Windows 공간 페이지에 전송 최적화 캐시를 크기와 명확한 설명과 함께 보여 주고, 확인 후 Windows 자체 명령으로 정리합니다. 검사는 무료이므로 결정하기 전에 얼마나 차지하는지 확인할 수 있습니다."
      ],
      "ctaText": "Disk Mop으로 배달 최적화가 차지하는 공간 확인하기"
    },
    "zh-Hans": {
      "title": "Windows 传递优化文件是什么？能删除吗？清理方法详解",
      "metaDescription": "Windows 会保留传递优化文件以便与其他电脑共享更新，可能占用数 GB 空间。了解它是什么、能否安全删除，以及如何一步步清理。",
      "subtitle": "Windows 为什么为其他电脑保存更新文件，以及如何找回这些空间",
      "keyTakeaways": [
        "传递优化是 Windows 的一项功能，它从 Microsoft 以及（若允许）其他电脑分块下载更新；其缓存就是为此保留的更新文件副本。",
        "可以放心删除该缓存：Windows 只会在需要时重新下载文件，你已安装或保存的内容不会受到影响。",
        "可以通过设置、磁盘清理、PowerShell 命令 Delete-DeliveryOptimizationCache 或清理工具清空它；在专业版中还可以限制它可使用的空间。"
      ],
      "dataTable": {
        "caption": "清理传递优化缓存的方法",
        "columns": [
          "方法",
          "位置",
          "是否需要管理员权限",
          "说明"
        ],
        "rows": [
          [
            "设置，临时文件",
            "设置，系统，存储，临时文件",
            "否（会请求批准）",
            "勾选“传递优化文件”；会显示当前大小"
          ],
          [
            "磁盘清理",
            "磁盘清理，清理系统文件",
            "是",
            "勾选“传递优化文件”"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "是",
            "以管理员身份运行 PowerShell"
          ],
          [
            "Disk Mop",
            "Windows 空间页面，传递优化缓存",
            "是",
            "先显示大小，清理前会先询问"
          ]
        ]
      },
      "howTo": {
        "name": "如何删除传递优化文件",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "查看缓存有多大",
            "text": "打开设置，依次进入系统、存储和临时文件。等待列表加载完成，然后查看“传递优化文件”旁边的大小。"
          },
          {
            "name": "勾选“传递优化文件”",
            "text": "选中该复选框；除非也想清理其他项目，否则保持其余项目不变，然后选择“删除文件”。"
          },
          {
            "name": "或者使用磁盘清理",
            "text": "搜索“磁盘清理”，选择系统驱动器，点击“清理系统文件”，勾选“传递优化文件”并确认。"
          },
          {
            "name": "或者运行一条 PowerShell 命令",
            "text": "以管理员身份打开 PowerShell，运行 Delete-DeliveryOptimizationCache -Force。缓存文件夹会被直接清空，不会有任何提示。"
          },
          {
            "name": "检查结果",
            "text": "再次打开“临时文件”，确认“传递优化文件”已接近零；如果不希望它再次增长，请限制缓存大小。"
          }
        ]
      },
      "faq": [
        {
          "question": "Windows 11 和 10 中的传递优化文件是什么？",
          "answer": "它们是 Windows 下载并保留的更新和应用文件，以便更快地分发，并在你允许时与网络或互联网上的其他电脑共享。缓存位于 C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache。"
        },
        {
          "question": "删除传递优化文件安全吗？",
          "answer": "安全。它们只是副本。如果 Windows 再次需要某个文件，会重新下载，因此删除缓存不会移除已安装的更新、应用或你自己的任何文件。"
        },
        {
          "question": "删除后会破坏 Windows 更新吗？",
          "answer": "不会。Windows 更新仍然正常工作。由于缓存的分块已被删除，下一次更新可能会多下载一些数据，但不会出现失败。"
        },
        {
          "question": "能阻止 Windows 与其他电脑共享更新吗？",
          "answer": "可以。在“设置”、“Windows 更新”、“高级选项”、“传递优化”中，关闭“允许从其他电脑下载”。这样 Windows 只会从 Microsoft 下载，也就没有太多理由保留很大的缓存。"
        }
      ],
      "intro": [
        "传递优化文件是 Windows 保留的更新和应用文件副本，用于分块下载，并在你允许时与其他电脑共享。可以放心删除：Windows 只会在需要时重新下载文件，你已安装或保存的内容都不会被动到。你可以通过设置、磁盘清理、PowerShell 或清理工具清空缓存，一次清理往往能找回数 GB 空间。",
        "该缓存藏在某个服务账户的文件夹里，所以文件资源管理器不会在你常看的位置显示它，很多人直到磁盘快满了才发现它。本指南会说明传递优化的工作方式、如何查看真实大小、四种清理方法，以及如何防止它再次变大。"
      ],
      "sections": [
        {
          "title": "传递优化的作用",
          "content": [
            "Windows 下载大型更新或 Microsoft Store 应用时，并不是从单个服务器获取一个完整文件。传递优化会把下载拆分成多个分块，从 Microsoft 的服务器获取，并在设置允许时，从已经拥有这些分块的其他电脑获取。分块会存入缓存，这样你的电脑也可以转而把它们提供给其他电脑，重复下载也会很快。",
            "缓存文件夹是 C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache。它属于系统服务账户，因此需要管理员权限才能查看其内容，普通的文件夹大小工具常常会漏掉它。",
            "在一次大型功能更新之后，缓存可能达到数 GB，并且会一直留在那里，直到 Windows 决定将其删除。"
          ]
        },
        {
          "title": "可以放心删除吗？",
          "content": [
            "可以。该缓存中的文件是 Windows 可以重新获取的数据副本。删除它们不会卸载更新、移除应用，也不会更改你的设置。最坏的情况只是下一次更新会重新下载一部分数据。",
            "你唯一失去的是与其他电脑共享这些分块的能力，只有当同一网络中有多台电脑并且你有意使用该功能时，这才有意义。",
            "不要手动删除 DeliveryOptimization 文件夹。请使用下面的方法之一，它们会让 Windows 正确地清空缓存。"
          ]
        },
        {
          "title": "通过设置或磁盘清理清空",
          "content": [
            "在 Windows 11 和 10 中，打开设置，依次进入系统、存储和临时文件。列表加载完成后，勾选“传递优化文件”，然后选择“删除文件”。该项目旁边显示的大小就是你将找回的空间。",
            "磁盘清理的作用相同。搜索并打开它，选择系统驱动器，点击“清理系统文件”，勾选“传递优化文件”并确认。它会请求管理员权限。",
            "这两种方式都使用 Windows 自带的清理程序，可以在不破坏服务的情况下清空缓存。如果想让缓存保持较小，可在大型更新之后再运行一次。"
          ]
        },
        {
          "title": "使用 PowerShell 或 Disk Mop 清空",
          "content": [
            "如果你更喜欢命令，请以管理员身份打开 PowerShell，运行 Delete-DeliveryOptimizationCache -Force。该命令一步即可清空缓存，成功时不会输出任何内容。",
            "Disk Mop 使用的是同一条 Windows 命令。在其 Windows 空间页面中，传递优化缓存项目会显示当前大小，并说明它保存的是 Windows 为与其他电脑共享而保留的更新文件、清理是安全的，需要时 Windows 会重新下载。清理需要管理员权限，Disk Mop 在执行任何操作之前都会先询问。",
            "Windows 空间还会列出 Windows 为自身保留的其他空间，例如 Windows.old 和还原点，并附有各自的说明，让你在一处就能看到哪些值得清理。"
          ]
        },
        {
          "title": "防止它再次变大",
          "content": [
            "在 Windows 专业版及更高版本中，可以用组策略限制缓存：在本地组策略编辑器中，依次进入计算机配置、管理模板、Windows 组件、传递优化，设置“绝对最大缓存大小(以 GB 为单位)”或“最大缓存大小(百分比)”。较小的上限可以避免缓存再次达到数 GB。",
            "如果不需要对等共享，请在同一位置关闭“允许从其他电脑下载”。这样 Windows 只会从 Microsoft 下载，也就没有太多理由保留很大的缓存。",
            "每月在设置中查看一次“临时文件”，或者运行定期清理，这样缓存就不会成为意外。"
          ]
        }
      ],
      "verdict": [
        "传递优化文件是 Windows 为加快和共享下载而保留的更新数据副本。通过设置、磁盘清理或 Delete-DeliveryOptimizationCache 删除它们是安全的，你还可以限制其大小，让它们保持在较小的规模。",
        "Disk Mop 会在 Windows 空间页面显示传递优化缓存及其大小和清晰的说明，并在你确认后用 Windows 自带的命令进行清理。扫描是免费的，因此你可以先看看它占了多少空间再做决定。"
      ],
      "ctaText": "用 Disk Mop 查看传递优化占用了多少空间"
    },
    "ar": {
      "title": "ملفات تحسين التسليم في Windows: ما هي وكيف تحذفها",
      "metaDescription": "يحتفظ Windows بملفات تحسين التسليم لمشاركة التحديثات مع أجهزة أخرى، وقد تشغل عدة غيغابايت. تعرّف على ماهيتها وهل يمكن حذفها وكيف تفعل ذلك بأمان.",
      "subtitle": "لماذا يخزّن Windows ملفات التحديث لأجهزة أخرى، وكيف تستعيد المساحة",
      "keyTakeaways": [
        "تحسين التسليم ميزة في Windows تنزّل التحديثات على شكل أجزاء من Microsoft ومن أجهزة كمبيوتر أخرى إن سمحت بذلك؛ وذاكرته المؤقتة نسخة من ملفات التحديث يحتفظ بها لهذا الغرض.",
        "حذف هذه الذاكرة المؤقتة آمن: ينزّل Windows الملف مرة أخرى فقط إذا احتاج إليه، ولا يتأثر أي شيء قمت بتثبيته أو حفظه.",
        "يمكنك تفريغها من الإعدادات أو تنظيف القرص أو أمر PowerShell المسمّى Delete-DeliveryOptimizationCache أو عبر أداة تنظيف، وفي إصدارات Pro يمكنك تحديد الحد الأقصى لما يمكن أن تستخدمه."
      ],
      "dataTable": {
        "caption": "طرق مسح ذاكرة تحسين التسليم المؤقتة",
        "columns": [
          "الطريقة",
          "المكان",
          "تتطلب مسؤولاً؟",
          "ملاحظات"
        ],
        "rows": [
          [
            "الإعدادات، الملفات المؤقتة",
            "الإعدادات، النظام، التخزين، الملفات المؤقتة",
            "لا (تطلب موافقة)",
            "حدّد ملفات تحسين التسليم؛ ويظهر الحجم الحالي"
          ],
          [
            "تنظيف القرص",
            "تنظيف القرص، تنظيف ملفات النظام",
            "نعم",
            "حدّد ملفات تحسين التسليم"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "نعم",
            "شغّل PowerShell كمسؤول"
          ],
          [
            "Disk Mop",
            "صفحة مساحة Windows، ذاكرة تحسين التسليم المؤقتة",
            "نعم",
            "يعرض الحجم أولاً ويسأل قبل التنظيف"
          ]
        ]
      },
      "howTo": {
        "name": "كيفية حذف ملفات تحسين التسليم",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "اعرف حجم الذاكرة المؤقتة",
            "text": "افتح الإعدادات، ثم النظام، ثم التخزين، ثم الملفات المؤقتة. انتظر حتى تُحمَّل القائمة واقرأ الحجم الظاهر بجانب ملفات تحسين التسليم."
          },
          {
            "name": "حدّد ملفات تحسين التسليم",
            "text": "حدّد خانة الاختيار، واترك العناصر الأخرى كما هي ما لم ترغب في مسحها أيضاً، ثم اختر إزالة الملفات."
          },
          {
            "name": "أو استخدم تنظيف القرص",
            "text": "ابحث عن تنظيف القرص، واختر محرك أقراص النظام، ثم حدّد تنظيف ملفات النظام، وضع علامة على ملفات تحسين التسليم وأكّد."
          },
          {
            "name": "أو شغّل أمر PowerShell واحداً",
            "text": "افتح PowerShell كمسؤول ونفّذ الأمر Delete-DeliveryOptimizationCache -Force. يُفرَّغ مجلد الذاكرة المؤقتة دون أي رسالة تأكيد."
          },
          {
            "name": "تحقق من النتيجة",
            "text": "افتح الملفات المؤقتة مرة أخرى للتأكد من أن حجم ملفات تحسين التسليم أصبح قريباً من الصفر، ثم حدّد حجم الذاكرة المؤقتة إن لم تكن تريد أن تعود للنمو."
          }
        ]
      },
      "faq": [
        {
          "question": "ما هي ملفات تحسين التسليم في Windows 11 و10؟",
          "answer": "هي ملفات تحديثات وتطبيقات نزّلها Windows واحتفظ بها ليسلّمها بشكل أسرع، ولمشاركتها مع أجهزة أخرى على شبكتك أو على الإنترنت إذا سمحت بذلك. توجد الذاكرة المؤقتة في المسار C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "هل حذف ملفات تحسين التسليم آمن؟",
          "answer": "نعم. إنها نسخ فقط. إذا احتاج Windows إلى ملف مرة أخرى فإنه ينزّله، لذلك لا يؤدي حذف الذاكرة المؤقتة إلى إزالة تحديث مثبّت ولا تطبيق ولا أي من ملفاتك الخاصة."
        },
        {
          "question": "هل سيؤدي حذفها إلى تعطيل Windows Update؟",
          "answer": "لا. يستمر Windows Update في العمل. قد ينزّل التحديث التالي قدراً أكبر قليلاً من البيانات لأن الأجزاء المخزّنة مؤقتاً لم تعد موجودة، لكن لن يفشل شيء."
        },
        {
          "question": "هل يمكنني منع Windows من مشاركة التحديثات مع أجهزة أخرى؟",
          "answer": "نعم. في الإعدادات، Windows Update، خيارات متقدمة، تحسين التسليم، أوقف تشغيل السماح بالتنزيلات من أجهزة الكمبيوتر الأخرى. عندها ينزّل Windows من Microsoft فقط ويقلّ سبب احتفاظه بذاكرة مؤقتة كبيرة."
        }
      ],
      "intro": [
        "ملفات تحسين التسليم هي نسخ من ملفات التحديثات والتطبيقات يحتفظ بها Windows ليتمكن من تنزيلها على شكل أجزاء ومشاركتها مع أجهزة أخرى إذا سمحت بذلك. حذفها آمن: ينزّل Windows الملف مرة أخرى فقط عندما يحتاج إليه، ولا يمسّ أي شيء قمت بتثبيته أو حفظه. يمكنك تفريغ الذاكرة المؤقتة من الإعدادات أو تنظيف القرص أو PowerShell أو أداة تنظيف، وغالباً ما يعيد التنظيف عدة غيغابايت.",
        "الذاكرة المؤقتة مخبّأة في مجلد حساب خدمة، لذلك لا يعرضها مستكشف الملفات في الأماكن التي تنظر فيها عادة، ولهذا لا يكتشفها الناس إلا عندما يكاد القرص يمتلئ. يشرح هذا الدليل كيف يعمل تحسين التسليم، وكيف ترى الحجم الحقيقي، وأربع طرق لمسحها، وكيف تمنعها من النمو مجدداً."
      ],
      "sections": [
        {
          "title": "ماذا يفعل تحسين التسليم",
          "content": [
            "عندما ينزّل Windows تحديثاً كبيراً أو تطبيقاً من Microsoft Store، فإنه لا يجلبه كملف واحد من خادم واحد. يقسّم تحسين التسليم التنزيل إلى أجزاء ويجلبها من خوادم Microsoft، ومن أجهزة كمبيوتر أخرى لديها هذه الأجزاء بالفعل عندما يسمح الإعداد بذلك. تُخزَّن الأجزاء في ذاكرة مؤقتة ليتمكن جهازك بدوره من تسليمها للآخرين، ولكي يكون أي تنزيل مكرر سريعاً.",
            "مجلد الذاكرة المؤقتة هو C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. وهو يتبع حساب خدمة تابعاً للنظام، لذلك تحتاج إلى صلاحيات المسؤول لرؤية محتوياته، وكثيراً ما تغفله أدوات قياس حجم المجلدات العادية.",
            "بعد تحديث ميزات كبير قد يبلغ حجم الذاكرة المؤقتة عدة غيغابايت، وتبقى هناك إلى أن يقرر Windows إزالتها."
          ]
        },
        {
          "title": "هل حذفها آمن؟",
          "content": [
            "نعم. الملفات في هذه الذاكرة المؤقتة نسخ من بيانات يستطيع Windows جلبها مرة أخرى. لا يؤدي حذفها إلى إلغاء تثبيت تحديث ولا إزالة تطبيق ولا تغيير إعداداتك. أسوأ ما قد يحدث أن التحديث التالي ينزّل جزءاً من البيانات مرة أخرى.",
            "الشيء الوحيد الذي تفقده هو القدرة على مشاركة تلك الأجزاء مع أجهزة أخرى، وهذا لا يهم إلا إذا كانت لديك عدة أجهزة على شبكة واحدة وتستخدم الميزة عن قصد.",
            "لا تحذف مجلد DeliveryOptimization يدوياً. استخدم إحدى الطرق أدناه، فهي تطلب من Windows مسحه بالشكل الصحيح."
          ]
        },
        {
          "title": "امسحها من الإعدادات أو تنظيف القرص",
          "content": [
            "في Windows 11 و10، افتح الإعدادات، ثم النظام، ثم التخزين، ثم الملفات المؤقتة. بعد تحميل القائمة، حدّد ملفات تحسين التسليم واختر إزالة الملفات. الحجم الظاهر بجانب العنصر هو ما ستستعيده.",
            "يؤدي تنظيف القرص المهمة نفسها. ابحث عنه، واختر محرك أقراص النظام، ثم حدّد تنظيف ملفات النظام، وضع علامة على ملفات تحسين التسليم وأكّد. وهو يطلب إذن المسؤول.",
            "تستخدم الطريقتان أداة التنظيف الخاصة بـ Windows، التي تفرّغ الذاكرة المؤقتة دون تعطيل الخدمة. شغّلها مرة أخرى بعد التحديثات الكبيرة إذا أردت إبقاء الذاكرة المؤقتة صغيرة."
          ]
        },
        {
          "title": "امسحها بـ PowerShell أو Disk Mop",
          "content": [
            "إذا كنت تفضّل الأوامر، فافتح PowerShell كمسؤول ونفّذ Delete-DeliveryOptimizationCache -Force. يفرّغ الأمر الذاكرة المؤقتة في خطوة واحدة ولا يعرض شيئاً عند نجاحه.",
            "يستخدم Disk Mop أمر Windows نفسه. في صفحة مساحة Windows، يعرض عنصر ذاكرة تحسين التسليم المؤقتة الحجم الحالي ويوضح أنه يحتوي على ملفات تحديث يحتفظ بها Windows لمشاركتها مع أجهزة أخرى، وأن حذفه آمن، وأن Windows ينزّل الملفات مجدداً عند الحاجة. يتطلب تنظيفه صلاحيات المسؤول، ويسألك Disk Mop قبل أن يفعل أي شيء.",
            "تعرض مساحة Windows أيضاً مساحات أخرى يحتفظ بها Windows لنفسه، مثل Windows.old ونقاط الاستعادة، مع شرح لكل منها، فترى ما يستحق التنظيف في مكان واحد."
          ]
        },
        {
          "title": "امنعها من النمو مجدداً",
          "content": [
            "في Windows Pro وما فوقه يمكنك تحديد حجم الذاكرة المؤقتة عبر نهج المجموعة: في محرر نهج المجموعة المحلي، انتقل إلى تكوين الكمبيوتر، قوالب الإدارة، مكونات Windows، تحسين التسليم، واضبط الحجم الأقصى المطلق لذاكرة التخزين المؤقت (بوحدة GB) أو الحد الأقصى لحجم ذاكرة التخزين المؤقت (النسبة المئوية). يمنع الحد الصغير الذاكرة المؤقتة من بلوغ عدة غيغابايت مرة أخرى.",
            "إذا لم تكن بحاجة إلى المشاركة بين الأجهزة، فأوقف تشغيل السماح بالتنزيلات من أجهزة الكمبيوتر الأخرى في المكان نفسه. عندها ينزّل Windows من Microsoft فقط ويقلّ سبب احتفاظه بذاكرة مؤقتة كبيرة.",
            "تحقق من الملفات المؤقتة في الإعدادات مرة في الشهر، أو شغّل تنظيفاً مجدولاً، ولن تفاجئك الذاكرة المؤقتة أبداً."
          ]
        }
      ],
      "verdict": [
        "ملفات تحسين التسليم نسخ من بيانات التحديثات يحتفظ بها Windows لتسريع التنزيلات ومشاركتها. حذفها آمن عبر الإعدادات أو تنظيف القرص أو Delete-DeliveryOptimizationCache، ويمكنك تحديد حجمها لتبقى صغيرة.",
        "يعرض Disk Mop ذاكرة تحسين التسليم المؤقتة في صفحة مساحة Windows مع حجمها وشرح واضح، ويمسحها بأمر Windows نفسه بعد أن تؤكد. الفحص مجاني، فيمكنك معرفة المساحة التي تشغلها قبل أن تقرر."
      ],
      "ctaText": "اعرف المساحة التي يشغلها تحسين التسليم باستخدام Disk Mop"
    },
    "he": {
      "title": "קבצי אופטימיזציית מסירה ב-Windows: מה הם ואיך מוחקים אותם",
      "metaDescription": "Windows שומר קבצי אופטימיזציית מסירה כדי לשתף עדכונים עם מחשבים אחרים, והם עלולים לתפוס גיגה-בייטים. כך תבינו מה הם, האם אפשר למחוק אותם ואיך.",
      "subtitle": "למה Windows שומר קובצי עדכון עבור מחשבים אחרים, ואיך מחזירים את המקום",
      "keyTakeaways": [
        "אופטימיזציית מסירה היא תכונת Windows שמורידה עדכונים בחלקים מ-Microsoft ומחשבים אחרים, אם אתם מאפשרים זאת; המטמון שלה הוא עותק של קובצי עדכון ששמור למטרה זו.",
        "מחיקת המטמון בטוחה: Windows מוריד קובץ שוב רק אם הוא צריך אותו, ושום דבר שהתקנתם או שמרתם לא נפגע.",
        "אפשר לרוקן אותו דרך ההגדרות, ניקוי הדיסק, פקודת PowerShell בשם Delete-DeliveryOptimizationCache או כלי ניקוי, ובמהדורות Pro אפשר להגביל את הנפח שהוא רשאי לתפוס."
      ],
      "dataTable": {
        "caption": "דרכים לנקות את מטמון אופטימיזציית המסירה",
        "columns": [
          "שיטה",
          "מיקום",
          "דורש מנהל מערכת?",
          "הערות"
        ],
        "rows": [
          [
            "הגדרות, קבצים זמניים",
            "הגדרות, מערכת, אחסון, קבצים זמניים",
            "לא (מבקש אישור)",
            "סמנו קבצי אופטימיזציית מסירה; הגודל הנוכחי מוצג"
          ],
          [
            "ניקוי הדיסק",
            "ניקוי הדיסק, נקה קבצי מערכת",
            "כן",
            "סמנו קבצי אופטימיזציית מסירה"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "כן",
            "הפעילו את PowerShell כמנהל מערכת"
          ],
          [
            "Disk Mop",
            "הדף מקום ב-Windows, מטמון אופטימיזציית מסירה",
            "כן",
            "מציג קודם את הגודל ושואל לפני הניקוי"
          ]
        ]
      },
      "howTo": {
        "name": "איך למחוק קבצי אופטימיזציית מסירה",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "בדקו מה גודל המטמון",
            "text": "פתחו הגדרות, ואז מערכת, אחסון וקבצים זמניים. המתינו לטעינת הרשימה וקראו את הגודל שליד קבצי אופטימיזציית מסירה."
          },
          {
            "name": "סמנו קבצי אופטימיזציית מסירה",
            "text": "סמנו את תיבת הסימון, השאירו את שאר הפריטים כפי שהם אלא אם כן אתם רוצים לנקות גם אותם, ובחרו הסר קבצים."
          },
          {
            "name": "או השתמשו בניקוי הדיסק",
            "text": "חפשו את ניקוי הדיסק, בחרו את כונן המערכת, בחרו נקה קבצי מערכת, סמנו קבצי אופטימיזציית מסירה ואשרו."
          },
          {
            "name": "או הריצו פקודת PowerShell אחת",
            "text": "פתחו את PowerShell כמנהל מערכת והריצו Delete-DeliveryOptimizationCache -Force. תיקיית המטמון מתרוקנת ללא בקשת אישור."
          },
          {
            "name": "ודאו את התוצאה",
            "text": "פתחו שוב את קבצים זמניים כדי לוודא שקבצי אופטימיזציית מסירה קרובים כעת לאפס, ואז הגבילו את המטמון אם אינכם רוצים שיגדל שוב."
          }
        ]
      },
      "faq": [
        {
          "question": "מה הם קבצי אופטימיזציית מסירה ב-Windows 11 וב-10?",
          "answer": "אלה קובצי עדכונים ואפליקציות ש-Windows הוריד ושמר כדי לספק אותם מהר יותר, ואם תאפשרו זאת, גם לשתף אותם עם מחשבים אחרים ברשת שלכם או באינטרנט. המטמון נמצא בנתיב C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "האם בטוח למחוק קבצי אופטימיזציית מסירה?",
          "answer": "כן. אלה עותקים. אם Windows צריך קובץ שוב, הוא מוריד אותו, ולכן מחיקת המטמון לא מסירה עדכון מותקן, אפליקציה או קבצים אישיים שלכם."
        },
        {
          "question": "האם מחיקתם תפגע ב-Windows Update?",
          "answer": "לא. Windows Update ממשיך לעבוד. ייתכן שהעדכון הבא יוריד קצת יותר נתונים כי החלקים השמורים נמחקו, אבל שום דבר לא ייכשל."
        },
        {
          "question": "האם אפשר למנוע מ-Windows לשתף עדכונים עם מחשבים אחרים?",
          "answer": "כן. בהגדרות, Windows Update, אפשרויות מתקדמות, אופטימיזציית מסירה, כבו את האפשרות אפשר הורדות ממחשבים אחרים. אז Windows מוריד רק מ-Microsoft ויש לו פחות סיבה לשמור מטמון גדול."
        }
      ],
      "intro": [
        "קבצי אופטימיזציית מסירה הם עותקים של קובצי עדכונים ואפליקציות ש-Windows שומר כדי להוריד אותם בחלקים ואם תאפשרו זאת, לשתף אותם עם מחשבים אחרים. בטוח למחוק אותם: Windows מוריד קובץ שוב רק כשהוא צריך אותו, ושום דבר שהתקנתם או שמרתם לא נפגע. אפשר לרוקן את המטמון דרך ההגדרות, ניקוי הדיסק, PowerShell או כלי ניקוי, ולעיתים קרובות ניקוי מחזיר כמה גיגה-בייטים.",
        "המטמון מוסתר בתיקייה של חשבון שירות, ולכן סייר הקבצים לא מציג אותו במקומות שבהם אתם בדרך כלל מחפשים, ובגלל זה אנשים מגלים אותו רק כשהכונן כמעט מלא. מדריך זה מסביר איך אופטימיזציית מסירה פועלת, איך רואים את הגודל האמיתי, ארבע דרכים לנקות אותו ואיך מונעים ממנו לגדול שוב."
      ],
      "sections": [
        {
          "title": "מה אופטימיזציית מסירה עושה",
          "content": [
            "כש-Windows מוריד עדכון גדול או אפליקציה מ-Microsoft Store, הוא לא מביא אותם כקובץ אחד משרת יחיד. אופטימיזציית מסירה מפצלת את ההורדה לחלקים ומביאה אותם משרתי Microsoft, וכשההגדרה מאפשרת זאת, גם ממחשבים אחרים שכבר מחזיקים בהם. החלקים נשמרים במטמון כדי שהמחשב שלכם יוכל בתורו להעביר אותם לאחרים וכדי שהורדה חוזרת תהיה מהירה.",
            "תיקיית המטמון היא C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. היא שייכת לחשבון שירות של המערכת, ולכן נדרשות הרשאות מנהל מערכת כדי לראות את תוכנה, וכלים רגילים למדידת גודל תיקיות מפספסים אותה לא פעם.",
            "אחרי עדכון תכונות גדול המטמון יכול להגיע לכמה גיגה-בייטים, והוא נשאר שם עד ש-Windows מחליט להסיר אותו."
          ]
        },
        {
          "title": "האם בטוח למחוק?",
          "content": [
            "כן. הקבצים במטמון זה הם עותקים של נתונים ש-Windows יכול להביא שוב. מחיקתם לא מסירה עדכון, לא מסירה אפליקציה ולא משנה את ההגדרות שלכם. במקרה הגרוע, העדכון הבא יוריד שוב חלק מהנתונים.",
            "הדבר היחיד שאתם מוותרים עליו הוא היכולת לשתף את החלקים האלה עם מחשבים אחרים, וזה משנה רק אם יש לכם כמה מחשבים באותה רשת ואתם משתמשים בתכונה במכוון.",
            "אל תמחקו את התיקייה DeliveryOptimization ידנית. השתמשו באחת מהשיטות שלהלן, שמבקשות מ-Windows לנקות אותה כראוי."
          ]
        },
        {
          "title": "ניקוי דרך ההגדרות או ניקוי הדיסק",
          "content": [
            "ב-Windows 11 וב-10 פתחו הגדרות, מערכת, אחסון וקבצים זמניים. אחרי שהרשימה נטענת, סמנו קבצי אופטימיזציית מסירה ובחרו הסר קבצים. הגודל שמוצג ליד הפריט הוא המקום שתקבלו בחזרה.",
            "ניקוי הדיסק עושה את אותה עבודה. חפשו אותו, בחרו את כונן המערכת, בחרו נקה קבצי מערכת, סמנו קבצי אופטימיזציית מסירה ואשרו. הוא מבקש הרשאת מנהל מערכת.",
            "שני המסלולים משתמשים במנקה של Windows עצמו, שמרוקן את המטמון בלי לפגוע בשירות. הריצו אותו שוב אחרי עדכונים גדולים אם אתם רוצים לשמור על מטמון קטן."
          ]
        },
        {
          "title": "ניקוי באמצעות PowerShell או Disk Mop",
          "content": [
            "אם אתם מעדיפים פקודה, פתחו את PowerShell כמנהל מערכת והריצו Delete-DeliveryOptimizationCache -Force. הפקודה מרוקנת את המטמון בשלב אחד ואינה מדפיסה דבר כשהיא מצליחה.",
            "Disk Mop משתמש באותה פקודה של Windows. בדף מקום ב-Windows, הפריט מטמון אופטימיזציית מסירה מציג את הגודל הנוכחי ומסביר שהוא מכיל קובצי עדכון ש-Windows שומר כדי לשתף עם מחשבים אחרים, שבטוח לנקות אותו, ושאם יידרש, Windows יוריד אותם שוב. הניקוי דורש הרשאות מנהל מערכת, ו-Disk Mop שואל לפני שהוא עושה משהו.",
            "מקום ב-Windows מציג גם מקום נוסף ש-Windows שומר לעצמו, כמו Windows.old ונקודות שחזור, כל אחד עם הסבר, כך שאפשר לראות במקום אחד מה כדאי לנקות."
          ]
        },
        {
          "title": "איך מונעים ממנו לגדול שוב",
          "content": [
            "ב-Windows Pro ומעלה אפשר להגביל את המטמון באמצעות מדיניות קבוצתית: בעורך המדיניות הקבוצתית המקומית עברו אל תצורת מחשב, תבניות הנהלה, רכיבי Windows, אופטימיזציית מסירה, והגדירו את גודל המטמון המרבי המוחלט (ב-GB) או את גודל המטמון המרבי (באחוזים). מגבלה קטנה מונעת מהמטמון להגיע שוב לכמה גיגה-בייטים.",
            "אם אינכם צריכים שיתוף בין מחשבים, כבו באותו מקום את האפשרות אפשר הורדות ממחשבים אחרים. אז Windows מוריד רק מ-Microsoft ויש לו פחות סיבה לשמור מטמון גדול.",
            "בדקו את קבצים זמניים בהגדרות פעם בחודש, או הריצו ניקוי מתוזמן, והמטמון לא יהפוך להפתעה."
          ]
        }
      ],
      "verdict": [
        "קבצי אופטימיזציית מסירה הם עותקים של נתוני עדכונים ש-Windows שומר כדי להאיץ ולשתף הורדות. בטוח למחוק אותם דרך ההגדרות, ניקוי הדיסק או Delete-DeliveryOptimizationCache, ואפשר להגביל את גודלם כדי שיישארו קטנים.",
        "Disk Mop מציג את מטמון אופטימיזציית המסירה בדף מקום ב-Windows, עם הגודל והסבר ברור, ומנקה אותו בפקודה של Windows עצמו לאחר שתאשרו. הסריקה חינמית, כך שאפשר לראות כמה מקום הוא תופס לפני שמחליטים."
      ],
      "ctaText": "בדקו כמה מקום אופטימיזציית מסירה תופסת עם Disk Mop"
    },
    "id": {
      "title": "File Pengoptimalan Pengiriman di Windows: Pengertian dan Cara Menghapusnya",
      "metaDescription": "Windows menyimpan file Pengoptimalan Pengiriman untuk berbagi pembaruan dengan PC lain, dan ukurannya bisa mencapai beberapa GB. Pelajari fungsi dan cara hapusnya.",
      "subtitle": "Mengapa Windows menyimpan file pembaruan untuk komputer lain, dan cara mengambil kembali ruangnya",
      "keyTakeaways": [
        "Pengoptimalan Pengiriman adalah fitur Windows yang mengunduh pembaruan secara bertahap dari Microsoft dan, jika diizinkan, dari PC lain; cache-nya adalah salinan file pembaruan yang disimpan untuk keperluan itu.",
        "Cache ini aman dihapus: Windows hanya mengunduh ulang file jika memang membutuhkannya, dan apa pun yang Anda instal atau simpan tidak terpengaruh.",
        "Anda bisa mengosongkannya lewat Pengaturan, Pembersihan Disk, perintah PowerShell Delete-DeliveryOptimizationCache, atau aplikasi pembersih, dan pada edisi Pro Anda bisa membatasi ukuran yang boleh dipakainya."
      ],
      "dataTable": {
        "caption": "Cara membersihkan cache Pengoptimalan Pengiriman",
        "columns": [
          "Metode",
          "Lokasi",
          "Perlu administrator?",
          "Catatan"
        ],
        "rows": [
          [
            "Pengaturan, File sementara",
            "Pengaturan, Sistem, Penyimpanan, File sementara",
            "Tidak (meminta persetujuan)",
            "Centang File Pengoptimalan Pengiriman; ukuran saat ini ditampilkan"
          ],
          [
            "Pembersihan Disk",
            "Pembersihan Disk, Bersihkan file sistem",
            "Ya",
            "Centang File Pengoptimalan Pengiriman"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Ya",
            "Jalankan PowerShell sebagai administrator"
          ],
          [
            "Disk Mop",
            "Halaman Ruang Windows, Cache Pengoptimalan Pengiriman",
            "Ya",
            "Menampilkan ukuran terlebih dahulu dan meminta konfirmasi sebelum membersihkan"
          ]
        ]
      },
      "howTo": {
        "name": "Cara menghapus file Pengoptimalan Pengiriman",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Lihat seberapa besar cache-nya",
            "text": "Buka Pengaturan, lalu Sistem, Penyimpanan, dan File sementara. Tunggu daftar selesai dimuat, lalu baca ukuran di samping File Pengoptimalan Pengiriman."
          },
          {
            "name": "Centang File Pengoptimalan Pengiriman",
            "text": "Pilih kotak centangnya, biarkan item lain apa adanya kecuali Anda juga ingin membersihkannya, lalu pilih Hapus file."
          },
          {
            "name": "Atau gunakan Pembersihan Disk",
            "text": "Cari Pembersihan Disk, pilih drive sistem Anda, pilih Bersihkan file sistem, centang File Pengoptimalan Pengiriman, lalu konfirmasi."
          },
          {
            "name": "Atau jalankan satu perintah PowerShell",
            "text": "Buka PowerShell sebagai administrator dan jalankan Delete-DeliveryOptimizationCache -Force. Folder cache dikosongkan tanpa konfirmasi."
          },
          {
            "name": "Periksa hasilnya",
            "text": "Buka File sementara lagi untuk memastikan File Pengoptimalan Pengiriman kini mendekati nol, lalu batasi cache jika Anda tidak ingin ukurannya membesar lagi."
          }
        ]
      },
      "faq": [
        {
          "question": "Apa itu file Pengoptimalan Pengiriman di Windows 11 dan 10?",
          "answer": "Itu adalah file pembaruan dan aplikasi yang diunduh dan disimpan Windows agar dapat mengirimkannya lebih cepat dan, jika Anda mengizinkan, membagikannya ke PC lain di jaringan Anda atau di internet. Cache tersebut berada di C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Apakah aman menghapus file Pengoptimalan Pengiriman?",
          "answer": "Ya. File tersebut hanyalah salinan. Jika Windows membutuhkan sebuah file lagi, Windows akan mengunduhnya, sehingga menghapus cache tidak menghilangkan pembaruan yang sudah terpasang, aplikasi, maupun file pribadi Anda."
        },
        {
          "question": "Apakah menghapusnya akan merusak Windows Update?",
          "answer": "Tidak. Windows Update tetap berfungsi. Pembaruan berikutnya mungkin mengunduh data sedikit lebih banyak karena potongan yang di-cache sudah hilang, tetapi tidak ada yang gagal."
        },
        {
          "question": "Bisakah saya menghentikan Windows berbagi pembaruan dengan PC lain?",
          "answer": "Bisa. Di Pengaturan, Windows Update, Opsi lanjutan, Pengoptimalan Pengiriman, matikan Izinkan unduhan dari PC lain. Windows kemudian hanya mengunduh dari Microsoft dan tidak lagi punya banyak alasan menyimpan cache yang besar."
        }
      ],
      "intro": [
        "File Pengoptimalan Pengiriman adalah salinan file pembaruan dan aplikasi yang disimpan Windows agar bisa mengunduhnya secara bertahap dan, jika Anda mengizinkan, membagikannya ke PC lain. File ini aman dihapus: Windows hanya mengunduh ulang file saat memang membutuhkannya, dan apa pun yang Anda instal atau simpan tidak tersentuh. Anda dapat mengosongkan cache dari Pengaturan, Pembersihan Disk, PowerShell, atau aplikasi pembersih, dan pembersihan sering kali mengembalikan beberapa gigabyte.",
        "Cache ini tersembunyi di folder akun layanan, sehingga File Explorer tidak menampilkannya di tempat yang biasanya Anda lihat, dan itulah sebabnya orang baru menemukannya saat drive hampir penuh. Panduan ini menjelaskan cara kerja Pengoptimalan Pengiriman, cara melihat ukuran sebenarnya, empat cara membersihkannya, dan cara mencegahnya membesar lagi."
      ],
      "sections": [
        {
          "title": "Fungsi Pengoptimalan Pengiriman",
          "content": [
            "Saat Windows mengunduh pembaruan besar atau aplikasi Microsoft Store, file itu tidak diambil sebagai satu file dari satu server. Pengoptimalan Pengiriman membagi unduhan menjadi potongan-potongan dan mengambilnya dari server Microsoft dan, jika pengaturan mengizinkan, dari PC lain yang sudah memilikinya. Potongan tersebut disimpan dalam cache agar PC Anda dapat menyerahkannya ke PC lain dan agar unduhan berulang berjalan cepat.",
            "Folder cache-nya adalah C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Folder ini milik akun layanan sistem, jadi Anda memerlukan hak administrator untuk melihat isinya, dan alat pengukur ukuran folder biasa sering melewatkannya.",
            "Setelah pembaruan fitur besar, ukuran cache bisa mencapai beberapa gigabyte, dan akan tetap di sana sampai Windows memutuskan untuk menghapusnya."
          ]
        },
        {
          "title": "Apakah Aman Dihapus?",
          "content": [
            "Ya. File dalam cache ini adalah salinan data yang bisa diambil lagi oleh Windows. Menghapusnya tidak menghapus pembaruan yang terpasang, tidak mencopot aplikasi, dan tidak mengubah pengaturan Anda. Kemungkinan terburuknya, pembaruan berikutnya mengunduh sebagian data lagi.",
            "Satu-satunya yang hilang adalah kemampuan membagikan potongan tersebut ke PC lain, yang hanya penting jika Anda memiliki beberapa PC dalam satu jaringan dan sengaja memakai fitur ini.",
            "Jangan hapus folder DeliveryOptimization secara manual. Gunakan salah satu metode di bawah ini, yang meminta Windows membersihkannya dengan benar."
          ]
        },
        {
          "title": "Bersihkan dari Pengaturan atau Pembersihan Disk",
          "content": [
            "Di Windows 11 dan 10, buka Pengaturan, Sistem, Penyimpanan, dan File sementara. Setelah daftar dimuat, centang File Pengoptimalan Pengiriman dan pilih Hapus file. Ukuran yang ditampilkan di samping item adalah ruang yang akan Anda dapatkan kembali.",
            "Pembersihan Disk melakukan hal yang sama. Cari alatnya, pilih drive sistem Anda, pilih Bersihkan file sistem, centang File Pengoptimalan Pengiriman, lalu konfirmasi. Alat ini meminta izin administrator.",
            "Kedua cara tersebut memakai pembersih bawaan Windows, yang mengosongkan cache tanpa merusak layanan. Jalankan lagi setelah pembaruan besar jika Anda ingin cache tetap kecil."
          ]
        },
        {
          "title": "Bersihkan dengan PowerShell atau Disk Mop",
          "content": [
            "Jika Anda lebih suka perintah, buka PowerShell sebagai administrator dan jalankan Delete-DeliveryOptimizationCache -Force. Perintah ini mengosongkan cache dalam satu langkah dan tidak menampilkan apa pun jika berhasil.",
            "Disk Mop memakai perintah Windows yang sama. Di halaman Ruang Windows, item Cache Pengoptimalan Pengiriman menampilkan ukuran saat ini dan menjelaskan bahwa isinya adalah file pembaruan yang disimpan Windows untuk dibagikan ke PC lain, bahwa aman dibersihkan, dan bahwa Windows akan mengunduh ulang jika perlu. Membersihkannya memerlukan hak administrator, dan Disk Mop meminta konfirmasi sebelum melakukan apa pun.",
            "Ruang Windows juga mencantumkan ruang lain yang disimpan Windows untuk dirinya sendiri, seperti Windows.old dan titik pemulihan, masing-masing dengan penjelasan, sehingga Anda bisa melihat apa saja yang layak dibersihkan di satu tempat."
          ]
        },
        {
          "title": "Cegah Agar Tidak Membesar Lagi",
          "content": [
            "Di Windows Pro ke atas, Anda dapat membatasi cache dengan Kebijakan Grup: di Editor Kebijakan Grup Lokal, buka Konfigurasi Komputer, Templat Administratif, Komponen Windows, Pengoptimalan Pengiriman, lalu atur Ukuran Cache Maksimum Absolut (dalam GB) atau Ukuran Cache Maksimum (persentase). Batas yang kecil mencegah cache kembali mencapai beberapa gigabyte.",
            "Jika Anda tidak memerlukan berbagi peer-to-peer, matikan Izinkan unduhan dari PC lain di tempat yang sama. Windows kemudian hanya mengunduh dari Microsoft dan tidak lagi punya banyak alasan menyimpan cache yang besar.",
            "Periksa File sementara di Pengaturan sebulan sekali, atau jalankan pembersihan terjadwal, dan cache tidak akan menjadi kejutan."
          ]
        }
      ],
      "verdict": [
        "File Pengoptimalan Pengiriman adalah salinan data pembaruan yang disimpan Windows untuk mempercepat dan membagikan unduhan. File ini aman dihapus lewat Pengaturan, Pembersihan Disk, atau Delete-DeliveryOptimizationCache, dan ukurannya bisa dibatasi agar tetap kecil.",
        "Disk Mop menampilkan Cache Pengoptimalan Pengiriman di halaman Ruang Windows, lengkap dengan ukuran dan penjelasan yang jelas, lalu membersihkannya dengan perintah bawaan Windows setelah Anda konfirmasi. Pemindaian gratis, jadi Anda bisa melihat berapa ruang yang dipakainya sebelum memutuskan."
      ],
      "ctaText": "Cek ruang yang dipakai Pengoptimalan Pengiriman dengan Disk Mop"
    },
    "pl": {
      "title": "Pliki optymalizacji dostarczania w systemie Windows: co to jest i jak je usunąć",
      "metaDescription": "Windows przechowuje pliki optymalizacji dostarczania, by udostępniać aktualizacje innym komputerom, i mogą zajmować gigabajty. Co to jest, czy można je usunąć i jak.",
      "subtitle": "Dlaczego Windows przechowuje pliki aktualizacji dla innych komputerów i jak odzyskać to miejsce",
      "keyTakeaways": [
        "Optymalizacja dostarczania to funkcja systemu Windows, która pobiera aktualizacje we fragmentach z serwerów firmy Microsoft oraz, jeśli na to pozwolisz, z innych komputerów; jej pamięć podręczna to kopie plików aktualizacji przechowywane w tym celu.",
        "Pamięć podręczną można bezpiecznie usunąć: Windows pobiera plik ponownie tylko wtedy, gdy go potrzebuje, a nic z tego, co zainstalowano lub zapisano, nie zostaje naruszone.",
        "Możesz ją opróżnić w Ustawieniach, za pomocą Oczyszczania dysku, polecenia PowerShell Delete-DeliveryOptimizationCache lub programu czyszczącego, a w wersjach Pro możesz ograniczyć, ile miejsca może zajmować."
      ],
      "dataTable": {
        "caption": "Sposoby czyszczenia pamięci podręcznej optymalizacji dostarczania",
        "columns": [
          "Metoda",
          "Gdzie",
          "Wymaga administratora?",
          "Uwagi"
        ],
        "rows": [
          [
            "Ustawienia, Pliki tymczasowe",
            "Ustawienia, System, Magazyn, Pliki tymczasowe",
            "Nie (prosi o zatwierdzenie)",
            "Zaznacz Pliki optymalizacji dostarczania; widać bieżący rozmiar"
          ],
          [
            "Oczyszczanie dysku",
            "Oczyszczanie dysku, Oczyść pliki systemowe",
            "Tak",
            "Zaznacz Pliki optymalizacji dostarczania"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Tak",
            "Uruchom program PowerShell jako administrator"
          ],
          [
            "Disk Mop",
            "Strona Miejsce Windows, Pamięć podręczna Optymalizacji dostarczania",
            "Tak",
            "Najpierw pokazuje rozmiar i pyta przed czyszczeniem"
          ]
        ]
      },
      "howTo": {
        "name": "Jak usunąć pliki optymalizacji dostarczania",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Sprawdź, jak duża jest pamięć podręczna",
            "text": "Otwórz Ustawienia, następnie System, Magazyn i Pliki tymczasowe. Poczekaj, aż lista się załaduje, i odczytaj rozmiar obok pozycji Pliki optymalizacji dostarczania."
          },
          {
            "name": "Zaznacz Pliki optymalizacji dostarczania",
            "text": "Zaznacz pole wyboru, pozostałe pozycje zostaw bez zmian, chyba że chcesz je również wyczyścić, i wybierz Usuń pliki."
          },
          {
            "name": "Albo użyj Oczyszczania dysku",
            "text": "Wyszukaj Oczyszczanie dysku, wybierz dysk systemowy, kliknij Oczyść pliki systemowe, zaznacz Pliki optymalizacji dostarczania i potwierdź."
          },
          {
            "name": "Albo uruchom jedno polecenie PowerShell",
            "text": "Otwórz program PowerShell jako administrator i uruchom Delete-DeliveryOptimizationCache -Force. Folder pamięci podręcznej zostanie opróżniony bez pytania o potwierdzenie."
          },
          {
            "name": "Sprawdź wynik",
            "text": "Otwórz ponownie Pliki tymczasowe, aby upewnić się, że Pliki optymalizacji dostarczania zajmują teraz prawie zero, a następnie ogranicz pamięć podręczną, jeśli nie chcesz, aby znów urosła."
          }
        ]
      },
      "faq": [
        {
          "question": "Czym są pliki optymalizacji dostarczania w systemach Windows 11 i 10?",
          "answer": "To pliki aktualizacji i aplikacji, które Windows pobrał i zachował, aby dostarczać je szybciej oraz, jeśli na to pozwolisz, udostępniać innym komputerom w Twojej sieci lub w internecie. Pamięć podręczna znajduje się w C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Czy można bezpiecznie usunąć pliki optymalizacji dostarczania?",
          "answer": "Tak. To tylko kopie. Jeśli Windows znów potrzebuje pliku, pobiera go, więc usunięcie pamięci podręcznej nie usuwa zainstalowanej aktualizacji, aplikacji ani żadnych Twoich własnych plików."
        },
        {
          "question": "Czy usunięcie ich zepsuje Windows Update?",
          "answer": "Nie. Windows Update nadal działa. Następna aktualizacja może pobrać nieco więcej danych, bo zapisanych fragmentów już nie ma, ale nic się nie zepsuje."
        },
        {
          "question": "Czy mogę zablokować udostępnianie aktualizacji innym komputerom przez Windows?",
          "answer": "Tak. W Ustawieniach, Windows Update, Opcje zaawansowane, Optymalizacja dostarczania wyłącz opcję Zezwalaj na pobieranie z innych komputerów. Windows pobiera wtedy dane wyłącznie od firmy Microsoft i ma mniej powodów, by przechowywać dużą pamięć podręczną."
        }
      ],
      "intro": [
        "Pliki optymalizacji dostarczania to kopie plików aktualizacji i aplikacji, które Windows przechowuje, aby pobierać je we fragmentach i, jeśli na to pozwolisz, udostępniać innym komputerom. Można je bezpiecznie usunąć: Windows pobiera plik ponownie tylko wtedy, gdy go potrzebuje, a nic, co zainstalowano lub zapisano, nie zostaje naruszone. Pamięć podręczną można opróżnić w Ustawieniach, za pomocą Oczyszczania dysku, programu PowerShell lub narzędzia czyszczącego, a takie czyszczenie często zwraca kilka gigabajtów.",
        "Pamięć podręczna jest ukryta w folderze konta usługi, więc Eksplorator plików nie pokazuje jej tam, gdzie zwykle się zagląda, dlatego ludzie odkrywają ją dopiero wtedy, gdy dysk jest prawie pełny. Ten poradnik wyjaśnia, jak działa optymalizacja dostarczania, jak sprawdzić rzeczywisty rozmiar, cztery sposoby jej wyczyszczenia i jak zapobiec ponownemu rozrostowi."
      ],
      "sections": [
        {
          "title": "Do czego służy optymalizacja dostarczania",
          "content": [
            "Gdy Windows pobiera dużą aktualizację lub aplikację ze sklepu Microsoft Store, nie ściąga jej jako jednego pliku z jednego serwera. Optymalizacja dostarczania dzieli pobieranie na fragmenty i pobiera je z serwerów firmy Microsoft oraz, jeśli ustawienie na to pozwala, z innych komputerów, które już je mają. Fragmenty trafiają do pamięci podręcznej, aby Twój komputer mógł z kolei przekazywać je innym, a ponowne pobieranie było szybkie.",
            "Folder pamięci podręcznej to C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Należy do systemowego konta usługi, więc do wyświetlenia jego zawartości potrzebne są uprawnienia administratora, a zwykłe narzędzia do sprawdzania rozmiaru folderów często go pomijają.",
            "Po dużej aktualizacji funkcji pamięć podręczna może zająć kilka gigabajtów i pozostaje na dysku, dopóki Windows nie zdecyduje się jej usunąć."
          ]
        },
        {
          "title": "Czy można ją bezpiecznie usunąć?",
          "content": [
            "Tak. Pliki w tej pamięci podręcznej to kopie danych, które Windows może pobrać ponownie. Ich usunięcie nie odinstalowuje aktualizacji, nie usuwa aplikacji ani nie zmienia ustawień. W najgorszym razie następna aktualizacja pobierze część danych jeszcze raz.",
            "Tracisz jedynie możliwość udostępniania tych fragmentów innym komputerom, co ma znaczenie tylko wtedy, gdy masz kilka komputerów w jednej sieci i celowo korzystasz z tej funkcji.",
            "Nie usuwaj folderu DeliveryOptimization ręcznie. Skorzystaj z jednej z poniższych metod, które proszą Windows o prawidłowe wyczyszczenie pamięci podręcznej."
          ]
        },
        {
          "title": "Wyczyść ją w Ustawieniach lub Oczyszczaniu dysku",
          "content": [
            "W systemach Windows 11 i 10 otwórz Ustawienia, System, Magazyn i Pliki tymczasowe. Gdy lista się załaduje, zaznacz Pliki optymalizacji dostarczania i wybierz Usuń pliki. Rozmiar widoczny obok pozycji to miejsce, które odzyskasz.",
            "Oczyszczanie dysku robi to samo. Wyszukaj je, wybierz dysk systemowy, kliknij Oczyść pliki systemowe, zaznacz Pliki optymalizacji dostarczania i potwierdź. Narzędzie prosi o uprawnienia administratora.",
            "Obie drogi korzystają z wbudowanego narzędzia czyszczącego Windows, które opróżnia pamięć podręczną bez uszkadzania usługi. Uruchom je ponownie po dużych aktualizacjach, jeśli chcesz utrzymać niewielki rozmiar pamięci podręcznej."
          ]
        },
        {
          "title": "Wyczyść ją w PowerShell lub w Disk Mop",
          "content": [
            "Jeśli wolisz polecenie, otwórz program PowerShell jako administrator i uruchom Delete-DeliveryOptimizationCache -Force. Polecenie opróżnia pamięć podręczną jednym krokiem i nic nie wyświetla, gdy się powiedzie.",
            "Disk Mop używa tego samego polecenia Windows. Na stronie Miejsce Windows pozycja Pamięć podręczna Optymalizacji dostarczania pokazuje bieżący rozmiar i wyjaśnia, że zawiera pliki aktualizacji przechowywane przez Windows w celu udostępniania innym komputerom, że jest bezpieczna do wyczyszczenia i że w razie potrzeby Windows pobierze je ponownie. Czyszczenie wymaga uprawnień administratora, a Disk Mop pyta, zanim cokolwiek zrobi.",
            "Miejsce Windows wyświetla też inne miejsce, które Windows zachowuje dla siebie, takie jak Windows.old i punkty przywracania, każde z objaśnieniem, więc w jednym miejscu widać, co warto wyczyścić."
          ]
        },
        {
          "title": "Jak zapobiec ponownemu rozrostowi",
          "content": [
            "W Windows Pro i wyższych można ograniczyć pamięć podręczną za pomocą zasad grupy: w Edytorze lokalnych zasad grupy przejdź do Konfiguracja komputera, Szablony administracyjne, Składniki systemu Windows, Optymalizacja dostarczania i ustaw Bezwzględny maksymalny rozmiar pamięci podręcznej (w GB) lub Maksymalny rozmiar pamięci podręcznej (procent). Niewielki limit zapobiega ponownemu osiągnięciu przez pamięć podręczną kilku gigabajtów.",
            "Jeśli nie potrzebujesz udostępniania między komputerami, wyłącz w tym samym miejscu opcję Zezwalaj na pobieranie z innych komputerów. Windows pobiera wtedy dane wyłącznie od firmy Microsoft i ma mniej powodów, by przechowywać dużą pamięć podręczną.",
            "Sprawdzaj Pliki tymczasowe w Ustawieniach raz w miesiącu lub uruchamiaj zaplanowane czyszczenie, a pamięć podręczna nigdy nie zaskoczy Cię swoim rozmiarem."
          ]
        }
      ],
      "verdict": [
        "Pliki optymalizacji dostarczania to kopie danych aktualizacji, które Windows przechowuje, aby przyspieszać i udostępniać pobieranie. Można je bezpiecznie usunąć w Ustawieniach, w Oczyszczaniu dysku lub poleceniem Delete-DeliveryOptimizationCache, a ich rozmiar można ograniczyć, aby pozostawały małe.",
        "Disk Mop pokazuje Pamięć podręczną Optymalizacji dostarczania na stronie Miejsce Windows, z rozmiarem i czytelnym objaśnieniem, a po Twoim potwierdzeniu czyści ją własnym poleceniem Windows. Skanowanie jest bezpłatne, więc możesz sprawdzić, ile miejsca zajmuje, zanim zdecydujesz."
      ],
      "ctaText": "Sprawdź w Disk Mop, ile miejsca zajmuje optymalizacja dostarczania"
    },
    "ro": {
      "title": "Fișierele Optimizare livrare din Windows: ce sunt și cum se șterg",
      "metaDescription": "Windows păstrează fișiere Optimizare livrare pentru a partaja actualizări cu alte PC-uri și pot ocupa gigabytes. Află ce sunt, dacă le poți șterge și cum.",
      "subtitle": "De ce stochează Windows fișiere de actualizare pentru alte computere și cum recuperezi spațiul",
      "keyTakeaways": [
        "Optimizare livrare este funcția Windows care descarcă actualizările în bucăți de la Microsoft și, dacă permiteți, de la alte PC-uri; cache-ul ei este o copie a fișierelor de actualizare păstrată în acest scop.",
        "Cache-ul poate fi șters în siguranță: Windows descarcă din nou un fișier doar dacă are nevoie de el, iar nimic din ce ați instalat sau salvat nu este afectat.",
        "Îl puteți goli din Setări, din Curățare disc, cu comanda PowerShell Delete-DeliveryOptimizationCache sau cu un program de curățare, iar la edițiile Pro puteți limita cât spațiu are voie să ocupe."
      ],
      "dataTable": {
        "caption": "Moduri de a goli cache-ul Optimizare livrare",
        "columns": [
          "Metodă",
          "Unde",
          "Necesită administrator?",
          "Observații"
        ],
        "rows": [
          [
            "Setări, Fișiere temporare",
            "Setări, Sistem, Stocare, Fișiere temporare",
            "Nu (cere aprobare)",
            "Bifați Fișiere Optimizare livrare; se afișează dimensiunea curentă"
          ],
          [
            "Curățare disc",
            "Curățare disc, Curățați fișierele de sistem",
            "Da",
            "Bifați Fișiere Optimizare livrare"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Da",
            "Rulați PowerShell ca administrator"
          ],
          [
            "Disk Mop",
            "Pagina Spațiu Windows, Cache Optimizare livrare",
            "Da",
            "Afișează mai întâi dimensiunea și cere confirmarea înainte de curățare"
          ]
        ]
      },
      "howTo": {
        "name": "Cum ștergi fișierele Optimizare livrare",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Vezi cât de mare este cache-ul",
            "text": "Deschideți Setări, apoi Sistem, Stocare și Fișiere temporare. Așteptați să se încarce lista și citiți dimensiunea de lângă Fișiere Optimizare livrare."
          },
          {
            "name": "Bifează Fișiere Optimizare livrare",
            "text": "Bifați caseta, lăsați celelalte elemente așa cum sunt, dacă nu doriți să le curățați și pe ele, și alegeți Eliminați fișierele."
          },
          {
            "name": "Sau folosește Curățare disc",
            "text": "Căutați Curățare disc, alegeți unitatea de sistem, selectați Curățați fișierele de sistem, bifați Fișiere Optimizare livrare și confirmați."
          },
          {
            "name": "Sau rulează o singură comandă PowerShell",
            "text": "Deschideți PowerShell ca administrator și rulați Delete-DeliveryOptimizationCache -Force. Folderul cache este golit fără nicio confirmare."
          },
          {
            "name": "Verifică rezultatul",
            "text": "Deschideți din nou Fișiere temporare pentru a confirma că Fișiere Optimizare livrare este acum aproape de zero, apoi limitați cache-ul dacă nu doriți să crească la loc."
          }
        ]
      },
      "faq": [
        {
          "question": "Ce sunt fișierele Optimizare livrare în Windows 11 și 10?",
          "answer": "Sunt fișiere de actualizări și aplicații pe care Windows le-a descărcat și le-a păstrat pentru a le livra mai rapid și, dacă permiteți, pentru a le partaja cu alte PC-uri din rețeaua dvs. sau de pe internet. Cache-ul se află în C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Este sigur să șterg fișierele Optimizare livrare?",
          "answer": "Da. Sunt doar copii. Dacă Windows are nevoie din nou de un fișier, îl descarcă, așa că ștergerea cache-ului nu elimină o actualizare instalată, o aplicație sau vreunul dintre fișierele dvs."
        },
        {
          "question": "Ștergerea lor va strica Windows Update?",
          "answer": "Nu. Windows Update continuă să funcționeze. Următoarea actualizare poate descărca ceva mai multe date, deoarece bucățile din cache nu mai există, dar nimic nu eșuează."
        },
        {
          "question": "Pot opri Windows să partajeze actualizări cu alte PC-uri?",
          "answer": "Da. În Setări, Windows Update, Opțiuni avansate, Optimizare livrare, dezactivați Permite descărcări de pe alte computere. Windows descarcă apoi doar de la Microsoft și are mai puține motive să păstreze un cache mare."
        }
      ],
      "intro": [
        "Fișierele Optimizare livrare sunt copii ale fișierelor de actualizări și aplicații pe care Windows le păstrează pentru a le descărca în bucăți și, dacă permiteți, pentru a le partaja cu alte PC-uri. Pot fi șterse în siguranță: Windows descarcă din nou un fișier doar când are nevoie de el, iar nimic din ce ați instalat sau salvat nu este atins. Puteți goli cache-ul din Setări, Curățare disc, PowerShell sau cu un program de curățare, iar o curățare returnează adesea câțiva gigabytes.",
        "Cache-ul este ascuns în folderul unui cont de serviciu, așa că Explorer nu îl arată în locurile în care priviți de obicei, motiv pentru care oamenii îl descoperă abia când unitatea este aproape plină. Acest ghid explică cum funcționează Optimizare livrare, cum vedeți dimensiunea reală, patru moduri de a-l goli și cum să îl împiedicați să crească din nou."
      ],
      "sections": [
        {
          "title": "Ce face Optimizare livrare",
          "content": [
            "Când Windows descarcă o actualizare mare sau o aplicație din Microsoft Store, nu o aduce ca un singur fișier de pe un singur server. Optimizare livrare împarte descărcarea în bucăți și le aduce de pe serverele Microsoft și, când setarea permite, de pe alte PC-uri care le au deja. Bucățile sunt stocate într-un cache, astfel încât PC-ul dvs. să le poată oferi la rândul lui altora, iar o descărcare repetată să fie rapidă.",
            "Folderul cache este C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Aparține unui cont de serviciu al sistemului, deci aveți nevoie de drepturi de administrator pentru a-i vedea conținutul, iar instrumentele obișnuite de măsurare a dimensiunii folderelor îl omit adesea.",
            "După o actualizare majoră de funcții, cache-ul poate ajunge la câțiva gigabytes și rămâne acolo până când Windows decide să îl elimine."
          ]
        },
        {
          "title": "Este sigur să îl șterg?",
          "content": [
            "Da. Fișierele din acest cache sunt copii ale unor date pe care Windows le poate aduce din nou. Ștergerea lor nu dezinstalează o actualizare, nu elimină o aplicație și nu modifică setările dvs. În cel mai rău caz, următoarea actualizare descarcă din nou o parte din date.",
            "Singurul lucru la care renunțați este posibilitatea de a partaja acele bucăți cu alte PC-uri, ceea ce contează doar dacă aveți mai multe PC-uri în aceeași rețea și folosiți funcția în mod intenționat.",
            "Nu ștergeți manual folderul DeliveryOptimization. Folosiți una dintre metodele de mai jos, care cer Windows să îl golească corect."
          ]
        },
        {
          "title": "Golește-l din Setări sau din Curățare disc",
          "content": [
            "În Windows 11 și 10, deschideți Setări, Sistem, Stocare și Fișiere temporare. După ce lista se încarcă, bifați Fișiere Optimizare livrare și alegeți Eliminați fișierele. Dimensiunea afișată lângă element este spațiul pe care îl veți recupera.",
            "Curățare disc face aceeași treabă. Căutați-l, alegeți unitatea de sistem, selectați Curățați fișierele de sistem, bifați Fișiere Optimizare livrare și confirmați. Cere permisiunea de administrator.",
            "Ambele variante folosesc instrumentul de curățare propriu al Windows, care golește cache-ul fără a strica serviciul. Rulați-l din nou după actualizări mari dacă doriți să păstrați cache-ul mic."
          ]
        },
        {
          "title": "Golește-l cu PowerShell sau Disk Mop",
          "content": [
            "Dacă preferați o comandă, deschideți PowerShell ca administrator și rulați Delete-DeliveryOptimizationCache -Force. Comanda golește cache-ul dintr-un singur pas și nu afișează nimic atunci când reușește.",
            "Disk Mop folosește aceeași comandă Windows. Pe pagina Spațiu Windows, elementul Cache Optimizare livrare arată dimensiunea curentă și explică faptul că păstrează fișiere de actualizare pe care Windows le ține pentru a le partaja cu alte PC-uri, că este sigur de curățat și că Windows descarcă din nou dacă este nevoie. Curățarea necesită drepturi de administrator, iar Disk Mop cere confirmarea înainte de a face orice.",
            "Spațiu Windows listează și alt spațiu pe care Windows îl păstrează pentru sine, precum Windows.old și punctele de restaurare, fiecare cu o explicație, astfel încât să vedeți într-un singur loc ce merită curățat."
          ]
        },
        {
          "title": "Împiedică-l să crească la loc",
          "content": [
            "În Windows Pro și versiunile superioare puteți limita cache-ul cu Group Policy: în Editor politică de grup locală, mergeți la Configurare computer, Șabloane administrative, Componente Windows, Optimizare livrare și setați Dimensiunea maximă absolută a cache-ului (în GB) sau Dimensiunea maximă a cache-ului (procent). O limită mică împiedică cache-ul să ajungă din nou la câțiva gigabytes.",
            "Dacă nu aveți nevoie de partajare peer-to-peer, dezactivați în același loc Permite descărcări de pe alte computere. Windows descarcă apoi doar de la Microsoft și are mai puține motive să păstreze un cache mare.",
            "Verificați Fișiere temporare din Setări o dată pe lună sau rulați o curățare programată, iar cache-ul nu va deveni niciodată o surpriză."
          ]
        }
      ],
      "verdict": [
        "Fișierele Optimizare livrare sunt copii ale datelor de actualizare pe care Windows le păstrează pentru a accelera și a partaja descărcările. Pot fi șterse în siguranță din Setări, Curățare disc sau cu Delete-DeliveryOptimizationCache, iar dimensiunea lor poate fi limitată pentru a rămâne mică.",
        "Disk Mop afișează Cache Optimizare livrare pe pagina Spațiu Windows, cu dimensiunea și o explicație clară, și îl curăță cu comanda proprie a Windows după ce confirmați. Scanarea este gratuită, deci puteți vedea cât spațiu ocupă înainte de a decide."
      ],
      "ctaText": "Verifică cât spațiu ocupă Optimizare livrare cu Disk Mop"
    },
    "ru": {
      "title": "Файлы оптимизации доставки в Windows: что это и как их удалить",
      "metaDescription": "Windows хранит файлы оптимизации доставки, чтобы делиться обновлениями с другими ПК, и они могут занимать гигабайты. Что это, можно ли их удалять и как это сделать.",
      "subtitle": "Зачем Windows хранит файлы обновлений для других компьютеров и как вернуть место",
      "keyTakeaways": [
        "Оптимизация доставки — это функция Windows, которая загружает обновления по частям с серверов Microsoft и, если вы разрешите, с других ПК; её кэш — это копии файлов обновлений, хранящиеся для этой цели.",
        "Кэш можно безопасно удалить: Windows загрузит файл заново, только если он понадобится, а всё, что вы установили или сохранили, останется нетронутым.",
        "Очистить его можно через Параметры, Очистку диска, команду PowerShell Delete-DeliveryOptimizationCache или программу для очистки, а в выпусках Pro можно ограничить, сколько места он вправе занимать."
      ],
      "dataTable": {
        "caption": "Способы очистки кэша оптимизации доставки",
        "columns": [
          "Способ",
          "Где",
          "Нужны права администратора?",
          "Примечания"
        ],
        "rows": [
          [
            "Параметры, Временные файлы",
            "Параметры, Система, Память, Временные файлы",
            "Нет (запрашивает подтверждение)",
            "Установите флажок Файлы оптимизации доставки; показан текущий размер"
          ],
          [
            "Очистка диска",
            "Очистка диска, Очистить системные файлы",
            "Да",
            "Установите флажок Файлы оптимизации доставки"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Да",
            "Запустите PowerShell от имени администратора"
          ],
          [
            "Disk Mop",
            "Страница Место Windows, Кэш оптимизации доставки",
            "Да",
            "Сначала показывает размер и спрашивает подтверждение перед очисткой"
          ]
        ]
      },
      "howTo": {
        "name": "Как удалить файлы оптимизации доставки",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Узнайте размер кэша",
            "text": "Откройте Параметры, затем Система, Память и Временные файлы. Дождитесь загрузки списка и посмотрите размер рядом с пунктом Файлы оптимизации доставки."
          },
          {
            "name": "Отметьте Файлы оптимизации доставки",
            "text": "Установите флажок, остальные пункты оставьте как есть, если не хотите очистить и их, и нажмите Удалить файлы."
          },
          {
            "name": "Или используйте Очистку диска",
            "text": "Найдите Очистку диска, выберите системный диск, нажмите Очистить системные файлы, отметьте Файлы оптимизации доставки и подтвердите."
          },
          {
            "name": "Или выполните одну команду PowerShell",
            "text": "Откройте PowerShell от имени администратора и выполните Delete-DeliveryOptimizationCache -Force. Папка кэша очищается без запроса подтверждения."
          },
          {
            "name": "Проверьте результат",
            "text": "Снова откройте Временные файлы и убедитесь, что размер пункта Файлы оптимизации доставки близок к нулю, а затем ограничьте кэш, если не хотите, чтобы он снова вырос."
          }
        ]
      },
      "faq": [
        {
          "question": "Что такое файлы оптимизации доставки в Windows 11 и 10?",
          "answer": "Это файлы обновлений и приложений, которые Windows загрузила и сохранила, чтобы доставлять их быстрее и, если вы разрешите, делиться ими с другими ПК в вашей сети или в интернете. Кэш находится в C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Безопасно ли удалять файлы оптимизации доставки?",
          "answer": "Да. Это всего лишь копии. Если Windows снова понадобится файл, она его загрузит, поэтому удаление кэша не удаляет установленное обновление, приложение или ваши личные файлы."
        },
        {
          "question": "Не сломает ли это Центр обновления Windows?",
          "answer": "Нет. Центр обновления Windows продолжит работать. Следующее обновление может загрузить чуть больше данных, потому что кэшированных частей больше нет, но ничего не сломается."
        },
        {
          "question": "Можно ли запретить Windows делиться обновлениями с другими ПК?",
          "answer": "Да. В Параметры, Центр обновления Windows, Дополнительные параметры, Оптимизация доставки отключите Разрешить загрузки с других компьютеров. Тогда Windows будет загружать данные только с серверов Microsoft, и у неё останется меньше причин хранить большой кэш."
        }
      ],
      "intro": [
        "Файлы оптимизации доставки — это копии файлов обновлений и приложений, которые Windows хранит, чтобы загружать их по частям и, если вы разрешите, делиться ими с другими ПК. Их можно безопасно удалить: Windows загрузит файл заново, только когда он понадобится, а всё, что вы установили или сохранили, останется нетронутым. Очистить кэш можно через Параметры, Очистку диска, PowerShell или программу для очистки, и обычно это освобождает несколько гигабайт.",
        "Кэш спрятан в папке служебной учётной записи, поэтому Проводник не показывает его там, где вы обычно смотрите, и именно поэтому о нём узнают, лишь когда диск почти заполнен. В этом руководстве объясняется, как работает оптимизация доставки, как узнать реальный размер кэша, четыре способа его очистить и как не дать ему снова разрастись."
      ],
      "sections": [
        {
          "title": "Что делает оптимизация доставки",
          "content": [
            "Когда Windows загружает крупное обновление или приложение из Microsoft Store, она не берёт его одним файлом с одного сервера. Оптимизация доставки делит загрузку на части и получает их с серверов Microsoft и, если параметр это допускает, с других ПК, у которых они уже есть. Части сохраняются в кэше, чтобы ваш ПК мог в свою очередь передавать их другим, а повторная загрузка проходила быстро.",
            "Папка кэша — C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Она принадлежит системной служебной учётной записи, поэтому для просмотра содержимого нужны права администратора, а обычные программы для подсчёта размера папок часто её пропускают.",
            "После крупного обновления компонентов кэш может занимать несколько гигабайт и остаётся на диске, пока Windows не решит его удалить."
          ]
        },
        {
          "title": "Безопасно ли его удалять?",
          "content": [
            "Да. Файлы в этом кэше — копии данных, которые Windows может получить снова. Их удаление не удаляет обновление, не деинсталлирует приложение и не меняет ваши параметры. В худшем случае следующее обновление заново загрузит часть данных.",
            "Единственное, чего вы лишаетесь, — возможности делиться этими частями с другими ПК, а это важно, только если в одной сети у вас несколько компьютеров и вы сознательно используете эту функцию.",
            "Не удаляйте папку DeliveryOptimization вручную. Воспользуйтесь одним из способов ниже: они просят Windows очистить её правильно."
          ]
        },
        {
          "title": "Очистка через Параметры или Очистку диска",
          "content": [
            "В Windows 11 и 10 откройте Параметры, Система, Память и Временные файлы. Когда список загрузится, отметьте Файлы оптимизации доставки и нажмите Удалить файлы. Размер рядом с пунктом — это место, которое вы вернёте.",
            "Очистка диска делает то же самое. Найдите её, выберите системный диск, нажмите Очистить системные файлы, отметьте Файлы оптимизации доставки и подтвердите. Потребуется разрешение администратора.",
            "Оба способа используют штатное средство очистки Windows, которое освобождает кэш, не повреждая службу. Запускайте его снова после крупных обновлений, если хотите, чтобы кэш оставался небольшим."
          ]
        },
        {
          "title": "Очистка через PowerShell или Disk Mop",
          "content": [
            "Если вам удобнее команда, откройте PowerShell от имени администратора и выполните Delete-DeliveryOptimizationCache -Force. Команда очищает кэш за один шаг и ничего не выводит при успехе.",
            "Disk Mop использует ту же команду Windows. На странице Место Windows пункт Кэш оптимизации доставки показывает текущий размер и поясняет, что в нём хранятся файлы обновлений, которые Windows держит, чтобы делиться ими с другими ПК, что его можно безопасно очистить и что при необходимости Windows загрузит их заново. Для очистки нужны права администратора, а Disk Mop спрашивает подтверждение, прежде чем что-либо сделать.",
            "Страница Место Windows показывает и другое место, которое Windows оставляет за собой, например Windows.old и точки восстановления, с пояснением к каждому, так что всё, что стоит очистить, видно в одном месте."
          ]
        },
        {
          "title": "Как не дать кэшу снова разрастись",
          "content": [
            "В Windows Pro и выше кэш можно ограничить групповой политикой: в Редакторе локальной групповой политики перейдите в Конфигурация компьютера, Административные шаблоны, Компоненты Windows, Оптимизация доставки и задайте Абсолютный максимальный размер кэша (в ГБ) или Максимальный размер кэша (в процентах). Небольшой лимит не даст кэшу снова вырасти до нескольких гигабайт.",
            "Если одноранговая передача вам не нужна, там же отключите Разрешить загрузки с других компьютеров. Тогда Windows будет загружать данные только с серверов Microsoft, и у неё останется меньше причин хранить большой кэш.",
            "Раз в месяц проверяйте Временные файлы в Параметрах или запускайте очистку по расписанию, и размер кэша никогда вас не удивит."
          ]
        }
      ],
      "verdict": [
        "Файлы оптимизации доставки — это копии данных обновлений, которые Windows хранит, чтобы ускорять загрузки и делиться ими. Их безопасно удалять через Параметры, Очистку диска или Delete-DeliveryOptimizationCache, а размер кэша можно ограничить, чтобы он оставался небольшим.",
        "Disk Mop показывает Кэш оптимизации доставки на странице Место Windows вместе с размером и понятным пояснением и после вашего подтверждения очищает его штатной командой Windows. Сканирование бесплатное, так что вы можете узнать, сколько места занимает кэш, до принятия решения."
      ],
      "ctaText": "Узнайте в Disk Mop, сколько места занимает оптимизация доставки"
    },
    "th": {
      "title": "ไฟล์การเพิ่มประสิทธิภาพการนำส่งใน Windows คืออะไร และวิธีลบ",
      "metaDescription": "Windows เก็บไฟล์การเพิ่มประสิทธิภาพการนำส่งไว้แชร์การอัปเดตให้พีซีเครื่องอื่น และอาจกินพื้นที่หลาย GB ดูว่าคืออะไร ลบได้หรือไม่ และทำอย่างไร",
      "subtitle": "ทำไม Windows จึงเก็บไฟล์อัปเดตไว้ให้คอมพิวเตอร์เครื่องอื่น และวิธีเรียกคืนพื้นที่",
      "keyTakeaways": [
        "การเพิ่มประสิทธิภาพการนำส่งคือฟีเจอร์ของ Windows ที่ดาวน์โหลดการอัปเดตเป็นชิ้น ๆ จาก Microsoft และจากพีซีเครื่องอื่นหากคุณอนุญาต แคชของฟีเจอร์นี้คือสำเนาของไฟล์อัปเดตที่เก็บไว้เพื่อจุดประสงค์ดังกล่าว",
        "ลบแคชนี้ได้อย่างปลอดภัย: Windows จะดาวน์โหลดไฟล์ใหม่เฉพาะเมื่อจำเป็นต้องใช้ และสิ่งที่คุณติดตั้งหรือบันทึกไว้จะไม่ได้รับผลกระทบ",
        "คุณสามารถล้างแคชได้ผ่านการตั้งค่า ล้างข้อมูลบนดิสก์ คำสั่ง PowerShell ชื่อ Delete-DeliveryOptimizationCache หรือโปรแกรมทำความสะอาด และใน Windows รุ่น Pro คุณยังจำกัดขนาดสูงสุดที่ใช้ได้"
      ],
      "dataTable": {
        "caption": "วิธีล้างแคชการเพิ่มประสิทธิภาพการนำส่ง",
        "columns": [
          "วิธี",
          "ตำแหน่ง",
          "ต้องใช้สิทธิ์ผู้ดูแลระบบหรือไม่",
          "หมายเหตุ"
        ],
        "rows": [
          [
            "การตั้งค่า ไฟล์ชั่วคราว",
            "การตั้งค่า, ระบบ, ที่เก็บข้อมูล, ไฟล์ชั่วคราว",
            "ไม่ (ขอการอนุมัติ)",
            "ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง และจะแสดงขนาดปัจจุบัน"
          ],
          [
            "ล้างข้อมูลบนดิสก์",
            "ล้างข้อมูลบนดิสก์, ล้างข้อมูลไฟล์ระบบ",
            "ใช่",
            "ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "ใช่",
            "เรียกใช้ PowerShell ในฐานะผู้ดูแลระบบ"
          ],
          [
            "Disk Mop",
            "หน้าพื้นที่ Windows, แคชการเพิ่มประสิทธิภาพการนำส่ง",
            "ใช่",
            "แสดงขนาดก่อน และถามยืนยันก่อนล้างข้อมูล"
          ]
        ]
      },
      "howTo": {
        "name": "วิธีลบไฟล์การเพิ่มประสิทธิภาพการนำส่ง",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "ดูว่าแคชมีขนาดเท่าใด",
            "text": "เปิดการตั้งค่า จากนั้นไปที่ระบบ ที่เก็บข้อมูล และไฟล์ชั่วคราว รอให้รายการโหลดเสร็จ แล้วดูขนาดที่อยู่ข้างไฟล์การเพิ่มประสิทธิภาพการนำส่ง"
          },
          {
            "name": "ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง",
            "text": "เลือกช่องทำเครื่องหมาย ปล่อยรายการอื่นไว้ตามเดิมหากไม่ต้องการล้างด้วย แล้วเลือกเอาไฟล์ออก"
          },
          {
            "name": "หรือใช้ล้างข้อมูลบนดิสก์",
            "text": "ค้นหาล้างข้อมูลบนดิสก์ เลือกไดรฟ์ระบบ เลือกล้างข้อมูลไฟล์ระบบ ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง แล้วยืนยัน"
          },
          {
            "name": "หรือรันคำสั่ง PowerShell เพียงคำสั่งเดียว",
            "text": "เปิด PowerShell ในฐานะผู้ดูแลระบบ แล้วรัน Delete-DeliveryOptimizationCache -Force โฟลเดอร์แคชจะถูกล้างโดยไม่มีข้อความถามยืนยัน"
          },
          {
            "name": "ตรวจสอบผลลัพธ์",
            "text": "เปิดไฟล์ชั่วคราวอีกครั้งเพื่อยืนยันว่าไฟล์การเพิ่มประสิทธิภาพการนำส่งเหลือใกล้ศูนย์แล้ว จากนั้นจำกัดขนาดแคชหากไม่ต้องการให้โตขึ้นอีก"
          }
        ]
      },
      "faq": [
        {
          "question": "ไฟล์การเพิ่มประสิทธิภาพการนำส่งใน Windows 11 และ 10 คืออะไร",
          "answer": "คือไฟล์อัปเดตและแอปที่ Windows ดาวน์โหลดและเก็บไว้ เพื่อให้นำส่งได้เร็วขึ้น และแชร์ให้พีซีเครื่องอื่นในเครือข่ายของคุณหรือบนอินเทอร์เน็ตหากคุณอนุญาต แคชอยู่ที่ C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache"
        },
        {
          "question": "ลบไฟล์การเพิ่มประสิทธิภาพการนำส่งปลอดภัยหรือไม่",
          "answer": "ปลอดภัย ไฟล์เหล่านี้เป็นเพียงสำเนา หาก Windows ต้องใช้ไฟล์อีกครั้งก็จะดาวน์โหลดใหม่ ดังนั้นการลบแคชจะไม่ทำให้การอัปเดตที่ติดตั้งแล้ว แอป หรือไฟล์ส่วนตัวของคุณหายไป"
        },
        {
          "question": "การลบจะทำให้ Windows Update เสียหายหรือไม่",
          "answer": "ไม่ Windows Update ยังทำงานตามปกติ การอัปเดตครั้งถัดไปอาจดาวน์โหลดข้อมูลมากขึ้นเล็กน้อยเพราะชิ้นส่วนที่แคชไว้หายไปแล้ว แต่จะไม่มีอะไรล้มเหลว"
        },
        {
          "question": "ฉันหยุดไม่ให้ Windows แชร์การอัปเดตกับพีซีเครื่องอื่นได้หรือไม่",
          "answer": "ได้ ไปที่การตั้งค่า, Windows Update, ตัวเลือกขั้นสูง, การเพิ่มประสิทธิภาพการนำส่ง แล้วปิดอนุญาตการดาวน์โหลดจากพีซีเครื่องอื่น จากนั้น Windows จะดาวน์โหลดจาก Microsoft เท่านั้น และมีเหตุผลน้อยลงที่จะเก็บแคชขนาดใหญ่"
        }
      ],
      "intro": [
        "ไฟล์การเพิ่มประสิทธิภาพการนำส่งคือสำเนาของไฟล์อัปเดตและแอปที่ Windows เก็บไว้เพื่อดาวน์โหลดเป็นชิ้น ๆ และแชร์ให้พีซีเครื่องอื่นหากคุณอนุญาต ลบได้อย่างปลอดภัย: Windows จะดาวน์โหลดไฟล์ใหม่เฉพาะเมื่อจำเป็นต้องใช้ และสิ่งที่คุณติดตั้งหรือบันทึกไว้จะไม่ถูกแตะต้อง คุณสามารถล้างแคชได้จากการตั้งค่า ล้างข้อมูลบนดิสก์ PowerShell หรือโปรแกรมทำความสะอาด และการล้างมักคืนพื้นที่ได้หลาย GB",
        "แคชนี้ซ่อนอยู่ในโฟลเดอร์ของบัญชีบริการ ตัวสำรวจไฟล์จึงไม่แสดงในที่ที่คุณมักดู จึงมักถูกพบเมื่อไดรฟ์เกือบเต็มแล้ว คู่มือนี้อธิบายว่าการเพิ่มประสิทธิภาพการนำส่งทำงานอย่างไร วิธีดูขนาดจริง สี่วิธีในการล้างแคช และวิธีไม่ให้แคชโตขึ้นอีก"
      ],
      "sections": [
        {
          "title": "การเพิ่มประสิทธิภาพการนำส่งทำอะไร",
          "content": [
            "เมื่อ Windows ดาวน์โหลดการอัปเดตขนาดใหญ่หรือแอปจาก Microsoft Store จะไม่ดึงมาเป็นไฟล์เดียวจากเซิร์ฟเวอร์เดียว การเพิ่มประสิทธิภาพการนำส่งจะแบ่งการดาวน์โหลดเป็นชิ้น ๆ และดึงจากเซิร์ฟเวอร์ของ Microsoft และจากพีซีเครื่องอื่นที่มีชิ้นส่วนนั้นอยู่แล้วเมื่อการตั้งค่าอนุญาต ชิ้นส่วนจะถูกเก็บไว้ในแคช เพื่อให้พีซีของคุณส่งต่อให้เครื่องอื่นได้ และทำให้การดาวน์โหลดซ้ำเร็วขึ้น",
            "โฟลเดอร์แคชคือ C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache โฟลเดอร์นี้เป็นของบัญชีบริการของระบบ คุณจึงต้องมีสิทธิ์ผู้ดูแลระบบจึงจะดูเนื้อหาได้ และเครื่องมือวัดขนาดโฟลเดอร์ทั่วไปมักมองไม่เห็น",
            "หลังการอัปเดตฟีเจอร์ขนาดใหญ่ แคชอาจมีขนาดหลาย GB และจะอยู่ตรงนั้นจนกว่า Windows จะตัดสินใจลบออก"
          ]
        },
        {
          "title": "ลบได้อย่างปลอดภัยหรือไม่",
          "content": [
            "ปลอดภัย ไฟล์ในแคชนี้เป็นสำเนาของข้อมูลที่ Windows ดึงมาใหม่ได้ การลบไม่ได้ถอนการติดตั้งการอัปเดต ไม่ได้ลบแอป และไม่เปลี่ยนการตั้งค่าของคุณ กรณีที่แย่ที่สุดคือการอัปเดตครั้งถัดไปต้องดาวน์โหลดข้อมูลบางส่วนซ้ำ",
            "สิ่งเดียวที่คุณเสียไปคือความสามารถในการแชร์ชิ้นส่วนเหล่านั้นให้พีซีเครื่องอื่น ซึ่งสำคัญเฉพาะเมื่อคุณมีพีซีหลายเครื่องในเครือข่ายเดียวกันและใช้ฟีเจอร์นี้โดยตั้งใจ",
            "อย่าลบโฟลเดอร์ DeliveryOptimization ด้วยตนเอง ให้ใช้วิธีใดวิธีหนึ่งด้านล่าง ซึ่งจะให้ Windows ล้างข้อมูลอย่างถูกต้อง"
          ]
        },
        {
          "title": "ล้างจากการตั้งค่าหรือล้างข้อมูลบนดิสก์",
          "content": [
            "ใน Windows 11 และ 10 ให้เปิดการตั้งค่า ระบบ ที่เก็บข้อมูล และไฟล์ชั่วคราว เมื่อรายการโหลดเสร็จ ให้ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง แล้วเลือกเอาไฟล์ออก ขนาดที่แสดงข้างรายการคือพื้นที่ที่คุณจะได้คืน",
            "ล้างข้อมูลบนดิสก์ทำหน้าที่เดียวกัน ค้นหาเครื่องมือนี้ เลือกไดรฟ์ระบบ เลือกล้างข้อมูลไฟล์ระบบ ทำเครื่องหมายที่ไฟล์การเพิ่มประสิทธิภาพการนำส่ง แล้วยืนยัน เครื่องมือจะขอสิทธิ์ผู้ดูแลระบบ",
            "ทั้งสองวิธีใช้เครื่องมือทำความสะอาดของ Windows เอง ซึ่งล้างแคชโดยไม่ทำให้บริการเสียหาย รันซ้ำหลังการอัปเดตใหญ่หากต้องการให้แคชมีขนาดเล็กอยู่เสมอ"
          ]
        },
        {
          "title": "ล้างด้วย PowerShell หรือ Disk Mop",
          "content": [
            "หากคุณชอบใช้คำสั่ง ให้เปิด PowerShell ในฐานะผู้ดูแลระบบ แล้วรัน Delete-DeliveryOptimizationCache -Force คำสั่งนี้ล้างแคชในขั้นตอนเดียวและไม่แสดงข้อความใด ๆ เมื่อสำเร็จ",
            "Disk Mop ใช้คำสั่งเดียวกันของ Windows ในหน้าพื้นที่ Windows รายการแคชการเพิ่มประสิทธิภาพการนำส่งจะแสดงขนาดปัจจุบัน และอธิบายว่าเป็นไฟล์อัปเดตที่ Windows เก็บไว้เพื่อแชร์ให้พีซีเครื่องอื่น ล้างได้อย่างปลอดภัย และ Windows จะดาวน์โหลดใหม่หากจำเป็น การล้างต้องใช้สิทธิ์ผู้ดูแลระบบ และ Disk Mop จะถามก่อนทำสิ่งใด",
            "พื้นที่ Windows ยังแสดงพื้นที่อื่นที่ Windows เก็บไว้ใช้เอง เช่น Windows.old และจุดคืนค่า พร้อมคำอธิบายของแต่ละรายการ คุณจึงเห็นว่าอะไรควรล้างได้ในที่เดียว"
          ]
        },
        {
          "title": "ป้องกันไม่ให้โตขึ้นอีก",
          "content": [
            "ใน Windows Pro ขึ้นไป คุณจำกัดแคชได้ด้วยนโยบายกลุ่ม: ในตัวแก้ไขนโยบายกลุ่มภายในเครื่อง ไปที่การกำหนดค่าคอมพิวเตอร์, เทมเพลตการดูแลระบบ, คอมโพเนนต์ของ Windows, การเพิ่มประสิทธิภาพการนำส่ง แล้วตั้งค่าขนาดแคชสูงสุดสัมบูรณ์ (เป็น GB) หรือขนาดแคชสูงสุด (เปอร์เซ็นต์) ขีดจำกัดขนาดเล็กจะช่วยไม่ให้แคชกลับไปมีขนาดหลาย GB อีก",
            "หากไม่ต้องการแชร์แบบเพียร์ทูเพียร์ ให้ปิดอนุญาตการดาวน์โหลดจากพีซีเครื่องอื่นในที่เดียวกัน จากนั้น Windows จะดาวน์โหลดจาก Microsoft เท่านั้น และมีเหตุผลน้อยลงที่จะเก็บแคชขนาดใหญ่",
            "ตรวจสอบไฟล์ชั่วคราวในการตั้งค่าเดือนละครั้ง หรือตั้งเวลาล้างข้อมูลอัตโนมัติ แคชก็จะไม่เป็นเรื่องน่าตกใจอีก"
          ]
        }
      ],
      "verdict": [
        "ไฟล์การเพิ่มประสิทธิภาพการนำส่งคือสำเนาข้อมูลอัปเดตที่ Windows เก็บไว้เพื่อเร่งและแชร์การดาวน์โหลด ลบได้อย่างปลอดภัยผ่านการตั้งค่า ล้างข้อมูลบนดิสก์ หรือ Delete-DeliveryOptimizationCache และคุณสามารถจำกัดขนาดเพื่อให้เล็กอยู่เสมอ",
        "Disk Mop แสดงแคชการเพิ่มประสิทธิภาพการนำส่งในหน้าพื้นที่ Windows พร้อมขนาดและคำอธิบายที่ชัดเจน และล้างด้วยคำสั่งของ Windows เองหลังจากคุณยืนยัน การสแกนไม่มีค่าใช้จ่าย คุณจึงดูได้ว่าใช้พื้นที่เท่าใดก่อนตัดสินใจ"
      ],
      "ctaText": "ตรวจสอบพื้นที่ที่การเพิ่มประสิทธิภาพการนำส่งใช้ด้วย Disk Mop"
    },
    "vi": {
      "title": "Tệp Tối ưu hóa phân phối trong Windows: là gì và cách xóa",
      "metaDescription": "Windows lưu tệp Tối ưu hóa phân phối để chia sẻ bản cập nhật với các PC khác và chúng có thể chiếm hàng GB. Tìm hiểu tệp này là gì, có xóa được không và cách xóa.",
      "subtitle": "Vì sao Windows lưu tệp cập nhật cho máy tính khác và cách lấy lại dung lượng",
      "keyTakeaways": [
        "Tối ưu hóa phân phối là tính năng của Windows tải bản cập nhật theo từng phần từ Microsoft và, nếu bạn cho phép, từ các PC khác; bộ nhớ đệm của nó là bản sao các tệp cập nhật được giữ lại cho mục đích đó.",
        "Xóa bộ nhớ đệm này là an toàn: Windows chỉ tải lại tệp khi cần, và những gì bạn đã cài đặt hay lưu đều không bị ảnh hưởng.",
        "Bạn có thể làm trống nó qua Cài đặt, Disk Cleanup, lệnh PowerShell Delete-DeliveryOptimizationCache hoặc một công cụ dọn dẹp, và trên các phiên bản Pro bạn có thể giới hạn dung lượng tối đa nó được dùng."
      ],
      "dataTable": {
        "caption": "Các cách xóa bộ nhớ đệm Tối ưu hóa phân phối",
        "columns": [
          "Cách",
          "Vị trí",
          "Cần quyền quản trị?",
          "Ghi chú"
        ],
        "rows": [
          [
            "Cài đặt, Tệp tạm",
            "Cài đặt, Hệ thống, Lưu trữ, Tệp tạm",
            "Không (yêu cầu phê duyệt)",
            "Chọn Tệp Tối ưu hóa phân phối; hiển thị dung lượng hiện tại"
          ],
          [
            "Disk Cleanup",
            "Disk Cleanup, Dọn dẹp tệp hệ thống",
            "Có",
            "Chọn Tệp Tối ưu hóa phân phối"
          ],
          [
            "PowerShell",
            "Delete-DeliveryOptimizationCache -Force",
            "Có",
            "Chạy PowerShell với quyền quản trị"
          ],
          [
            "Disk Mop",
            "Trang Dung lượng Windows, Bộ nhớ đệm Tối ưu hóa phân phối",
            "Có",
            "Hiển thị dung lượng trước và hỏi xác nhận trước khi dọn"
          ]
        ]
      },
      "howTo": {
        "name": "Cách xóa tệp Tối ưu hóa phân phối",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Xem bộ nhớ đệm lớn đến mức nào",
            "text": "Mở Cài đặt, rồi chọn Hệ thống, Lưu trữ và Tệp tạm. Chờ danh sách tải xong và xem dung lượng bên cạnh Tệp Tối ưu hóa phân phối."
          },
          {
            "name": "Chọn Tệp Tối ưu hóa phân phối",
            "text": "Chọn hộp kiểm, giữ nguyên các mục khác trừ khi bạn cũng muốn dọn chúng, rồi chọn Xóa tệp."
          },
          {
            "name": "Hoặc dùng Disk Cleanup",
            "text": "Tìm Dọn dẹp ổ đĩa (Disk Cleanup), chọn ổ đĩa hệ thống, chọn Dọn dẹp tệp hệ thống, chọn Tệp Tối ưu hóa phân phối rồi xác nhận."
          },
          {
            "name": "Hoặc chạy một lệnh PowerShell",
            "text": "Mở PowerShell với quyền quản trị và chạy Delete-DeliveryOptimizationCache -Force. Thư mục bộ nhớ đệm được làm trống mà không hỏi lại."
          },
          {
            "name": "Kiểm tra kết quả",
            "text": "Mở lại Tệp tạm để xác nhận Tệp Tối ưu hóa phân phối giờ gần như bằng không, rồi giới hạn bộ nhớ đệm nếu bạn không muốn nó phình to trở lại."
          }
        ]
      },
      "faq": [
        {
          "question": "Tệp Tối ưu hóa phân phối trong Windows 11 và 10 là gì?",
          "answer": "Đó là các tệp cập nhật và ứng dụng mà Windows đã tải về và giữ lại để phân phối nhanh hơn và, nếu bạn cho phép, chia sẻ với các PC khác trong mạng của bạn hoặc trên internet. Bộ nhớ đệm nằm tại C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache."
        },
        {
          "question": "Xóa tệp Tối ưu hóa phân phối có an toàn không?",
          "answer": "Có. Đó chỉ là các bản sao. Nếu Windows cần lại một tệp, nó sẽ tải xuống, nên việc xóa bộ nhớ đệm không gỡ bản cập nhật đã cài, ứng dụng hay bất kỳ tệp riêng nào của bạn."
        },
        {
          "question": "Xóa chúng có làm hỏng Windows Update không?",
          "answer": "Không. Windows Update vẫn hoạt động bình thường. Bản cập nhật tiếp theo có thể tải thêm một ít dữ liệu vì các phần đã lưu đệm không còn, nhưng sẽ không có gì bị lỗi."
        },
        {
          "question": "Tôi có thể ngăn Windows chia sẻ bản cập nhật với các PC khác không?",
          "answer": "Có. Trong Cài đặt, Windows Update, Tùy chọn nâng cao, Tối ưu hóa phân phối, hãy tắt Cho phép tải xuống từ các PC khác. Khi đó Windows chỉ tải từ Microsoft và ít có lý do để giữ bộ nhớ đệm lớn hơn."
        }
      ],
      "intro": [
        "Tệp Tối ưu hóa phân phối là bản sao của các tệp cập nhật và ứng dụng mà Windows giữ lại để tải theo từng phần và, nếu bạn cho phép, chia sẻ với các PC khác. Xóa chúng là an toàn: Windows chỉ tải lại tệp khi cần, và những gì bạn đã cài đặt hay lưu đều không bị đụng đến. Bạn có thể làm trống bộ nhớ đệm từ Cài đặt, Disk Cleanup, PowerShell hoặc một công cụ dọn dẹp, và một lần dọn thường lấy lại được vài GB.",
        "Bộ nhớ đệm này nằm ẩn trong thư mục của một tài khoản dịch vụ, nên File Explorer không hiển thị nó ở những nơi bạn thường xem, và đó là lý do người dùng chỉ phát hiện ra khi ổ đĩa gần đầy. Hướng dẫn này giải thích cách Tối ưu hóa phân phối hoạt động, cách xem dung lượng thực, bốn cách để xóa và cách ngăn nó phình to trở lại."
      ],
      "sections": [
        {
          "title": "Tối ưu hóa phân phối làm gì",
          "content": [
            "Khi Windows tải một bản cập nhật lớn hoặc ứng dụng từ Microsoft Store, nó không lấy về dưới dạng một tệp duy nhất từ một máy chủ. Tối ưu hóa phân phối chia bản tải thành nhiều phần và lấy chúng từ máy chủ của Microsoft và, khi cài đặt cho phép, từ các PC khác đã có sẵn các phần đó. Các phần được lưu trong bộ nhớ đệm để PC của bạn có thể chuyển lại cho máy khác và để lần tải lặp lại diễn ra nhanh.",
            "Thư mục bộ nhớ đệm là C:\\Windows\\ServiceProfiles\\NetworkService\\AppData\\Local\\Microsoft\\Windows\\DeliveryOptimization\\Cache. Nó thuộc về một tài khoản dịch vụ hệ thống, nên bạn cần quyền quản trị để xem nội dung, và các công cụ đo dung lượng thư mục thông thường thường bỏ sót nó.",
            "Sau một bản cập nhật tính năng lớn, bộ nhớ đệm có thể lên tới vài GB và nằm đó cho đến khi Windows quyết định gỡ bỏ."
          ]
        },
        {
          "title": "Xóa có an toàn không?",
          "content": [
            "Có. Các tệp trong bộ nhớ đệm này là bản sao của dữ liệu mà Windows có thể lấy lại. Xóa chúng không gỡ cài đặt bản cập nhật, không xóa ứng dụng và không thay đổi cài đặt của bạn. Trường hợp xấu nhất là bản cập nhật tiếp theo phải tải lại một phần dữ liệu.",
            "Điều duy nhất bạn mất là khả năng chia sẻ các phần đó với PC khác, và điều này chỉ quan trọng nếu bạn có nhiều PC trong cùng một mạng và cố ý dùng tính năng này.",
            "Đừng xóa thư mục DeliveryOptimization bằng tay. Hãy dùng một trong các cách bên dưới, những cách này nhờ Windows dọn đúng cách."
          ]
        },
        {
          "title": "Dọn từ Cài đặt hoặc Disk Cleanup",
          "content": [
            "Trong Windows 11 và 10, mở Cài đặt, Hệ thống, Lưu trữ và Tệp tạm. Sau khi danh sách tải xong, chọn Tệp Tối ưu hóa phân phối và chọn Xóa tệp. Dung lượng hiển thị bên cạnh mục này là phần bạn sẽ lấy lại.",
            "Disk Cleanup làm cùng việc đó. Hãy tìm nó, chọn ổ đĩa hệ thống, chọn Dọn dẹp tệp hệ thống, chọn Tệp Tối ưu hóa phân phối rồi xác nhận. Công cụ sẽ yêu cầu quyền quản trị.",
            "Cả hai cách đều dùng công cụ dọn dẹp riêng của Windows, vốn làm trống bộ nhớ đệm mà không làm hỏng dịch vụ. Hãy chạy lại sau các bản cập nhật lớn nếu bạn muốn giữ bộ nhớ đệm nhỏ."
          ]
        },
        {
          "title": "Dọn bằng PowerShell hoặc Disk Mop",
          "content": [
            "Nếu bạn thích dùng lệnh, hãy mở PowerShell với quyền quản trị và chạy Delete-DeliveryOptimizationCache -Force. Lệnh làm trống bộ nhớ đệm trong một bước và không in gì khi thành công.",
            "Disk Mop dùng chính lệnh Windows đó. Trên trang Dung lượng Windows, mục Bộ nhớ đệm Tối ưu hóa phân phối hiển thị dung lượng hiện tại và giải thích rằng nó chứa các tệp cập nhật mà Windows giữ để chia sẻ với các PC khác, rằng dọn nó là an toàn và Windows sẽ tải lại nếu cần. Việc dọn cần quyền quản trị, và Disk Mop hỏi xác nhận trước khi làm bất cứ điều gì.",
            "Dung lượng Windows cũng liệt kê các phần dung lượng khác mà Windows giữ cho riêng mình, như Windows.old và các điểm khôi phục, mỗi mục đều có giải thích, để bạn thấy trong một nơi những gì đáng dọn."
          ]
        },
        {
          "title": "Ngăn nó phình to trở lại",
          "content": [
            "Trên Windows Pro trở lên, bạn có thể giới hạn bộ nhớ đệm bằng Group Policy: trong Trình chỉnh sửa Chính sách Nhóm Cục bộ, đi tới Cấu hình Máy tính, Mẫu Quản trị, Thành phần Windows, Tối ưu hóa phân phối và đặt Kích thước bộ nhớ đệm tối đa tuyệt đối (tính bằng GB) hoặc Kích thước bộ nhớ đệm tối đa (theo phần trăm). Một giới hạn nhỏ giúp bộ nhớ đệm không lại lên tới vài GB.",
            "Nếu bạn không cần chia sẻ ngang hàng, hãy tắt Cho phép tải xuống từ các PC khác ngay tại đó. Khi đó Windows chỉ tải từ Microsoft và ít có lý do để giữ bộ nhớ đệm lớn.",
            "Hãy kiểm tra Tệp tạm trong Cài đặt mỗi tháng một lần, hoặc chạy lịch dọn dẹp định kỳ, và bộ nhớ đệm sẽ không còn là điều bất ngờ."
          ]
        }
      ],
      "verdict": [
        "Tệp Tối ưu hóa phân phối là bản sao dữ liệu cập nhật mà Windows giữ lại để tăng tốc và chia sẻ các lượt tải. Bạn có thể xóa chúng an toàn qua Cài đặt, Disk Cleanup hoặc Delete-DeliveryOptimizationCache, và có thể giới hạn kích thước để chúng luôn nhỏ.",
        "Disk Mop hiển thị Bộ nhớ đệm Tối ưu hóa phân phối trên trang Dung lượng Windows, kèm dung lượng và lời giải thích rõ ràng, rồi dọn bằng chính lệnh của Windows sau khi bạn xác nhận. Quét là miễn phí, nên bạn có thể xem nó chiếm bao nhiêu dung lượng trước khi quyết định."
      ],
      "ctaText": "Kiểm tra dung lượng Tối ưu hóa phân phối chiếm bằng Disk Mop"
    }
  },
};
