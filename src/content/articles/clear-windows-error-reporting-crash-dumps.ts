import type { Article } from "../types";

export const clearWindowsErrorReportingCrashDumps: Article = {
  slug: "clear-windows-error-reporting-crash-dumps",
  type: "guide",
  category: "Windows Tips",
  date: "2026-11-18",
  updated: "2026-11-18",
  readingTime: 7,
  content: {
    "tr": {
      "title": "Windows Hata Bildirimi ve Çökme Dökümleri: Nedir, Nasıl Silinir?",
      "metaDescription": "Windows Hata Bildirimi dosyaları ve çökme dökümleri gigabaytlarca yer kaplayabilir. Nerede olduklarını ve hangilerinin silinebileceğini adım adım öğrenin.",
      "subtitle": "Windows'un ihtiyaç duyduğu hiçbir şeye dokunmadan eski çökme raporlarının kapladığı alanı geri kazanın",
      "keyTakeaways": [
        "Windows Hata Bildirimi (WER), Microsoft'a gönderdiği her çökme için bir rapor klasörü saklar; ReportArchive ve ReportQueue içindeki eski raporlar gönderildikten sonra işe yaramaz.",
        "%LOCALAPPDATA%\\CrashDumps ve C:\\Windows\\Minidump içindeki çökme dökümleri hata ayıklama için alınmış bellek anlık görüntüleridir; tek tek dosyalar yüzlerce megabayta ulaşabilir ve bunları silmek Windows'un çalışmasını etkilemez.",
        "En yeni dökümü yalnızca mavi ekran ya da çöken bir programı aktif olarak inceliyorsanız saklayın; aksi halde hepsini temizleyin."
      ],
      "dataTable": {
        "caption": "Windows hata raporlarını ve çökme dökümlerini nerede tutar?",
        "columns": [
          "Öğe",
          "Tipik konum",
          "Nedir?",
          "Silmek güvenli mi?"
        ],
        "rows": [
          [
            "WER rapor arşivi ve kuyruğu (kullanıcıya özel)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER altındaki ReportArchive ve ReportQueue",
            "Kendi programlarınızın çökme ve donma ayrıntılarını içeren klasörler",
            "Evet"
          ],
          [
            "WER rapor arşivi ve kuyruğu (tüm kullanıcılar)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER altındaki ReportArchive ve ReportQueue",
            "Sistem genelindeki bileşenler için aynı raporlar",
            "Evet (yönetici hakları gerekebilir)"
          ],
          [
            "Program çökme dökümleri",
            "%LOCALAPPDATA%\\CrashDumps",
            "Bir program çöktüğünde yazılan .dmp dosyaları",
            "Evet"
          ],
          [
            "Küçük bellek dökümleri",
            "C:\\Windows\\Minidump",
            "Mavi ekrandan sonra yazılan küçük .dmp dosyaları",
            "Evet; mavi ekranı analiz etmiyorsanız"
          ],
          [
            "Tam bellek dökümü",
            "C:\\Windows\\MEMORY.DMP",
            "Mavi ekrandan sonra çekirdek belleğinin büyük bir dökümü",
            "Evet, Disk Temizleme ile ya da elle"
          ]
        ]
      },
      "howTo": {
        "name": "Windows hata raporları ve çökme dökümleri nasıl silinir?",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Kapladıkları alanı kontrol edin",
            "text": "Dosya Gezgini'ni açın ve adres çubuğuna %LOCALAPPDATA%\\CrashDumps yazıp yapıştırın. Klasöre sağ tıklayın, Özellikler'i seçin ve boyutu not edin. Aynısını %LOCALAPPDATA%\\Microsoft\\Windows\\WER için de yapın."
          },
          {
            "name": "En yeni dökümün gerekip gerekmediğine karar verin",
            "text": "Bugün bir program ya da Windows çöktüyse ve nedenini araştıracaksanız, önce en yeni .dmp dosyasını başka bir klasöre kopyalayın. Aksi halde bu klasörlerdeki hiçbir şeye ihtiyacınız yoktur."
          },
          {
            "name": "Klasörleri değil, içeriklerini silin",
            "text": "CrashDumps, ReportArchive ve ReportQueue içindeki her şeyi seçip silin. Windows gerektiğinde klasörleri yeniden oluşturur. Windows'un kullanımda olduğunu bildirdiği dosyaları atlayın."
          },
          {
            "name": "Mavi ekran dökümlerini kaldırın",
            "text": "Disk Temizleme'yi çalıştırın, Sistem dosyalarını temizle'yi seçin ve Sistem hatası bellek döküm dosyaları ile Windows Hata Bildirimi dosyaları kutularını işaretleyin. Bu işlem C:\\Windows\\MEMORY.DMP dosyasını ve Minidump klasörünü de siler."
          },
          {
            "name": "Disk Mop ile tek seferde halledin",
            "text": "Disk Mop'u açın, Yer aç sayfasına gidin, taramayı çalıştırın ve Hata raporları ile Çökme dökümleri öğelerini işaretleyin. Boyutları gözden geçirip onaylayın; siz onaylamadan hiçbir şey silinmez."
          }
        ]
      },
      "faq": [
        {
          "question": "Windows Hata Bildirimi dosyalarını silmek güvenli mi?",
          "answer": "Evet. WER ReportArchive ve ReportQueue klasörlerindeki dosyalar, daha önce yaşanmış çökmelerin kayıtlarıdır. Windows'un çalışması için bunlara ihtiyacı yoktur; silmek yalnızca Microsoft'a ya da bir geliştiriciye gönderebileceğiniz geçmişi kaldırır."
        },
        {
          "question": "CrashDumps klasörüm neden bu kadar büyük?",
          "answer": "Çökme dökümü, programın başarısız olduğu andaki belleğinin anlık görüntüsünü içerir; bu yüzden çok bellek kullanan bir program büyük bir dosya yazar. Sürekli çöken bir program her seferinde yeni bir döküm yazar ve Windows bunları kendiliğinden temizlemez."
        },
        {
          "question": "Çökme dökümlerini silmek çökmeleri ya da mavi ekranları durdurur mu?",
          "answer": "Hayır. Dökümler çökmenin nedeni değil, yan ürünüdür. Silmek yer açar ama bir programın ya da Windows'un neden başarısız olduğunu değiştirmez. Çökmeler sürüyorsa nedeni giderin: sürücüleri güncelleyin, disk sağlığını ve belleği kontrol edin."
        },
        {
          "question": "Windows'un bu kadar çok döküm oluşturmasını engelleyebilir miyim?",
          "answer": "Sayısını azaltabilirsiniz. Sistem Özellikleri'nde Gelişmiş, Başlangıç ve Kurtarma bölümünde tam döküm yerine küçük bellek dökümünü seçin; böylece mavi ekran küçük bir dosya yazar. CrashDumps içindeki program dökümleri yalnızca o program için döküm toplama etkinleştirilmişse oluşur."
        }
      ],
      "intro": [
        "Windows Hata Bildirimi (WER), bir program her çöktüğünde ya da yanıt vermediğinde bir dosya klasörü yazar; program veya sistem başarısız olduğunda ise Windows bir çökme dökümü oluşturur. Eski raporlar ve dökümler yalnızca geçmişte olmuş bir olayın kaydı olduğu için silinmeleri güvenlidir ve temizlik birkaç dakika sürer: WER ve CrashDumps klasörlerinin içeriğini silin, mavi ekran dökümleri için Disk Temizleme'yi çalıştırın veya hepsini tek seferde yapan bir temizleyici kullanın.",
        "Birkaç kez çökmüş bir bilgisayarda bu dosyalar kolayca unutulur. Bir tarayıcıdan ya da oyundan gelen tek bir döküm birkaç yüz megabayt olabilir; mavi ekran sonrası alınan tam bellek dökümü ise kullanılan RAM kadar büyüyebilir. Bu rehber, her dosya türünün nerede durduğunu, neyi içerdiğini, ne zaman saklamanız gerektiğini ve bunları güvenle nasıl kaldıracağınızı gösterir."
      ],
      "sections": [
        {
          "title": "Windows Hata Bildirimi Neleri Saklar?",
          "content": [
            "Bir program çöktüğünde Windows küçük bir rapor toplar: programın adı ve sürümü, başarısız olan modül ve çoğu zaman mini döküm gibi birkaç ek dosya. İzin verirseniz rapor Microsoft'a gönderilir. Bir kopyası bilgisayarınızda, olayın adını taşıyan bir klasörde kalır: gönderilen raporlar ReportArchive içinde, hâlâ bekleyenler ise ReportQueue içinde yer alır.",
            "İki konum vardır. Kendi programlarınızın raporları %LOCALAPPDATA%\\Microsoft\\Windows\\WER altında, sistem genelindeki bileşenlerin raporları ise C:\\ProgramData\\Microsoft\\Windows\\WER altında bulunur. Her rapor birkaç kilobayttan birkaç megabayta kadar yer kaplar, ancak yıllardır çalışan bir bilgisayarda bunlar birikir.",
            "Windows bu klasörlerdeki hiçbir şeyi başlarken ya da çalışırken okumaz. Bir raporu silerek kaybettiğiniz tek şey, o çökmenin ayrıntılarına sonradan bakabilme imkânıdır."
          ]
        },
        {
          "title": "Çökme Dökümleri: Nereden Gelir, Ne Kadar Büyür?",
          "content": [
            "Çökme dökümü, bir şey başarısız olduğunda belleğin anlık görüntüsünü tutan .dmp uzantılı bir dosyadır. Karşılaşacağınız üç tür vardır. Program dökümleri, bir program çöktüğünde ve döküm toplama açıkken %LOCALAPPDATA%\\CrashDumps içine yazılır. Küçük bellek dökümleri mavi ekrandan sonra C:\\Windows\\Minidump içine gider. Tam ya da çekirdek bellek dökümü ise C:\\Windows\\MEMORY.DMP olarak yazılır.",
            "Boyut programa bağlıdır. Bir metin düzenleyici küçük bir dosya yazar, ancak bir tarayıcı, oyun ya da video düzenleyici programın kullandığı belleği de içerdiği için birkaç yüz megabaytlık döküm yazabilir. Kötü bir güncellemeden sonra olduğu gibi sürekli çöken bir program onlarca döküm bırakabilir.",
            "Dökümler, onları bir hata ayıklayıcıya yükleyen geliştiriciler ya da destek mühendisleri içindir. Siz bunu yapmayacaksanız, yalnızca gereksiz yüktür."
          ]
        },
        {
          "title": "Bir Dökümü Ne Zaman Saklamalısınız?",
          "content": [
            "Sorun gideriyorsanız en yeni dökümü saklayın. Tekrarlayan bir mavi ekran ya da her gün çöken bir program, elinizde bir döküm olduğunda daha kolay teşhis edilir ve destek ekibi bunu isteyebilir. Temizlemeden önce o tek dosyayı Belgeler klasörü gibi başka bir yere kopyalayın.",
            "Geri kalan her şey silinebilir. Çökme tek seferlikse ve program yeniden çalışıyorsa, geçen aydan kalan dökümün hiçbir değeri yoktur. ReportArchive içindeki raporlar için de aynısı geçerlidir: bunlar zaten gönderilmiş ya da çözülmüş olayları anlatır.",
            "Basit bir kural: aktif olarak incelediğiniz her sorun için en fazla bir döküm saklayın, gerisini temizleyin."
          ]
        },
        {
          "title": "Rapor ve Dökümleri Elle Silme",
          "content": [
            "Dosya Gezgini'ni açın ve her yolu adres çubuğuna yapıştırın. %LOCALAPPDATA%\\CrashDumps için tüm dosyaları seçip silin. %LOCALAPPDATA%\\Microsoft\\Windows\\WER için ReportArchive ve ReportQueue klasörlerini açıp içeriklerini silin. Aynısını, Windows'un yönetici izni isteyebileceği C:\\ProgramData\\Microsoft\\Windows\\WER altında da yapın. Klasörlerin kendisini değil, içeriklerini silin.",
            "Mavi ekran dökümleri için en basit yol Disk Temizleme'dir. Başlat menüsünde arayın, sistem sürücünüzü seçin, Sistem dosyalarını temizle'yi seçin ve Sistem hatası bellek döküm dosyaları ile Windows Hata Bildirimi dosyaları kutularını işaretleyin. Bu işlem C:\\Windows\\MEMORY.DMP dosyasını ve Minidump klasörünü birlikte temizler.",
            "Windows bir dosyanın kullanımda olduğunu söylerse atlayın. O anda yazılmakta olan bir rapor bir sonraki seferde silinmiş olur."
          ]
        },
        {
          "title": "Disk Mop ile Tek Seferde Temizleme",
          "content": [
            "Disk Mop'un Yer aç sayfası, Hata raporları ve Çökme dökümleri öğelerini boyutlarıyla ve temizlemenin ne yaptığını anlatan kısa bir açıklamayla ayrı ayrı listeler. Hata raporları, profilinizdeki ve ProgramData içindeki WER rapor arşivini ve kuyruğunu kapsar. Çökme dökümleri ise %LOCALAPPDATA%\\CrashDumps ve C:\\Windows\\Minidump konumlarını kapsar.",
            "Taramayı çalıştırın, istediğiniz öğeleri işaretleyin ve onaylayın. Disk Mop, hiçbir şeyi silmeden önce bulduklarını gösterir; Windows düzeyindeki öğeler gibi bazıları yönetici hakları isteyebilir. Tarama ücretsizdir, bu yüzden karar vermeden önce bu dosyaların ne kadar yer kapladığını görebilirsiniz. Disk Mop, C:\\Windows\\MEMORY.DMP dosyasını silmez; bu dosya için Disk Temizleme'yi kullanın.",
            "Temiz kalmasını istiyorsanız, zamanlanmış temizlik aracı Yer aç sayfasındaki güvenli öğeleri belirlediğiniz takvimle arka planda çalıştırabilir."
          ]
        },
        {
          "title": "Çökmeler Geri Gelmeye Devam Ederse",
          "content": [
            "Temizlik yalnızca kanıtı kaldırır. Aynı program her hafta çöküyorsa nedenine bakın. Programı, grafik ve depolama sürücülerinizi güncelleyin, Windows'un tamamen güncel olduğunu kontrol edin ve disk sağlığına bakın; çünkü arızalı bir sürücü çökmelere ve mavi ekranlara yol açabilir. Çökmeler rastgeleyse bellek testi çalıştırmaya değer.",
            "Sistem sürücüsünde boş alan bırakmak da yardımcı olur. Windows'un döküm yazmak ve güncellemeleri çalıştırmak için yere ihtiyacı vardır; neredeyse dolu bir sürücü ikisini de kafa karıştırıcı biçimlerde başarısız kılar."
          ]
        }
      ],
      "verdict": [
        "Windows Hata Bildirimi dosyaları ve çökme dökümleri, daha önce yaşanmış çökmelerin kayıtlarıdır; bu yüzden incelemek istediğiniz bir dökümü kenara kopyaladıktan sonra gerisini silmek güvenlidir. Mavi ekran dökümlerini Disk Temizleme halleder, profilinizdeki klasörler ise elle boşaltılabilir.",
        "Disk Mop, Hata raporları ve Çökme dökümleri öğelerini önbellekler ve geçici dosyalarla birlikte tek taramada sunar, her birinin boyutunu gösterir ve silmeden önce sorar. Tarama ücretsizdir; temizlemeye karar vermeden önce eski çökmelerin ne kadar yer kapladığını görebilirsiniz."
      ],
      "ctaText": "Disk Mop ile hata raporlarını ve çökme dökümlerini bulup temizleyin"
    },
    "en": {
      "title": "Windows Error Reporting and Crash Dumps: What They Are and How to Delete Them",
      "metaDescription": "Windows Error Reporting files and crash dumps can fill gigabytes. See where they live, which are safe to delete, and how to clear them step by step.",
      "subtitle": "Reclaim space from old crash reports without touching anything Windows needs",
      "keyTakeaways": [
        "Windows Error Reporting (WER) stores a report folder for every crash it sends to Microsoft; old reports in ReportArchive and ReportQueue have no use once they have been sent.",
        "Crash dumps in %LOCALAPPDATA%\\CrashDumps and C:\\Windows\\Minidump are memory snapshots for debugging; single files can reach hundreds of megabytes, and deleting them does not affect how Windows runs.",
        "Keep the newest dump only if you are actively troubleshooting a blue screen or a crashing program; otherwise clear them all."
      ],
      "dataTable": {
        "caption": "Where Windows keeps error reports and crash dumps",
        "columns": [
          "Item",
          "Typical location",
          "What it is",
          "Safe to delete?"
        ],
        "rows": [
          [
            "WER report archive and queue (per user)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive and ReportQueue",
            "Folders with the details of crashes and hangs of your own programs",
            "Yes"
          ],
          [
            "WER report archive and queue (all users)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive and ReportQueue",
            "The same reports for system-wide components",
            "Yes (administrator rights may be needed)"
          ],
          [
            "Program crash dumps",
            "%LOCALAPPDATA%\\CrashDumps",
            ".dmp files written when a program crashes",
            "Yes"
          ],
          [
            "Small memory dumps",
            "C:\\Windows\\Minidump",
            "Small .dmp files written after a blue screen",
            "Yes, unless you are analysing a blue screen"
          ],
          [
            "Full memory dump",
            "C:\\Windows\\MEMORY.DMP",
            "A large dump of kernel memory after a blue screen",
            "Yes, through Disk Cleanup or by hand"
          ]
        ]
      },
      "howTo": {
        "name": "How to delete Windows error reports and crash dumps",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Check how much space they use",
            "text": "Open File Explorer and paste %LOCALAPPDATA%\\CrashDumps into the address bar. Right-click the folder, choose Properties and note the size. Repeat for %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Decide whether you need the newest dump",
            "text": "If a program or Windows crashed today and you plan to look into it, copy the newest .dmp file to another folder first. Otherwise nothing in these folders is needed."
          },
          {
            "name": "Delete the contents, not the folders",
            "text": "Select everything inside CrashDumps, ReportArchive and ReportQueue and delete it. Windows recreates the folders when they are needed. Skip any file that Windows reports as in use."
          },
          {
            "name": "Remove the blue-screen dumps",
            "text": "Run Disk Cleanup, choose Clean up system files and tick System error memory dump files and Windows Error Reporting files. This also removes C:\\Windows\\MEMORY.DMP and the Minidump folder."
          },
          {
            "name": "Do it in one pass with Disk Mop",
            "text": "Open Disk Mop, go to Free up space, run the scan and tick Error reports and Crash dumps. Review the sizes and confirm; nothing is deleted before you confirm."
          }
        ]
      },
      "faq": [
        {
          "question": "Is it safe to delete Windows Error Reporting files?",
          "answer": "Yes. The files in the WER ReportArchive and ReportQueue folders are records of crashes that already happened. Windows does not need them to run, and deleting them only removes the history you could send to Microsoft or a developer."
        },
        {
          "question": "Why is my CrashDumps folder so large?",
          "answer": "A crash dump contains a snapshot of the program's memory at the moment it failed, so a program that used a lot of memory writes a large file. A program that crashes repeatedly writes a new dump every time, and Windows does not clean them up on its own."
        },
        {
          "question": "Will deleting crash dumps stop crashes or blue screens?",
          "answer": "No. Dumps are a by-product of a crash, not its cause. Deleting them frees space but changes nothing about why a program or Windows failed. If crashes keep happening, fix the cause: update drivers, check disk health and memory."
        },
        {
          "question": "Can I stop Windows from creating so many dumps?",
          "answer": "You can reduce them. In System Properties, Advanced, Startup and Recovery, choose a small memory dump instead of a complete one, so a blue screen writes a small file. Program dumps in CrashDumps appear only when dump collection is enabled for that program."
        }
      ],
      "intro": [
        "Windows Error Reporting (WER) writes a folder of files every time a program crashes or stops responding, and Windows writes a crash dump when a program or the system fails. Old reports and dumps are safe to delete because they are only a record of something that already happened, and clearing them takes a few minutes: delete the contents of the WER and CrashDumps folders, run Disk Cleanup for the blue-screen dumps, or use a cleaner that does all of it in one pass.",
        "On a PC that has crashed a few times, these files are easy to forget. A single dump from a browser or a game can weigh several hundred megabytes, and a full memory dump after a blue screen can be as large as the RAM that was in use. This guide shows where each kind of file lives, what it contains, when you should keep one, and how to remove them safely."
      ],
      "sections": [
        {
          "title": "What Windows Error Reporting Stores",
          "content": [
            "When a program crashes, Windows collects a small report: the name and version of the program, the module that failed, and often a few extra files such as a mini dump. If you allow it, the report is sent to Microsoft. A copy stays on your PC in a folder named after the event, inside ReportArchive for reports that were sent and ReportQueue for those still waiting.",
            "There are two places. Reports for your own programs live under %LOCALAPPDATA%\\Microsoft\\Windows\\WER, and reports for system-wide components live under C:\\ProgramData\\Microsoft\\Windows\\WER. Each report is only a few kilobytes to a few megabytes, but they add up on a PC that has been running for years.",
            "Nothing in these folders is read by Windows when it starts or runs. The only thing you lose by deleting a report is the ability to look at the details of that crash later."
          ]
        },
        {
          "title": "Crash Dumps: Where They Come From and How Big They Get",
          "content": [
            "A crash dump is a file with the .dmp extension that holds a snapshot of memory when something failed. There are three kinds you will meet. Program dumps are written to %LOCALAPPDATA%\\CrashDumps when a program crashes and dump collection is on. Small memory dumps go to C:\\Windows\\Minidump after a blue screen. A full or kernel memory dump is written to C:\\Windows\\MEMORY.DMP.",
            "Size depends on the program. A text editor writes a small file, but a browser, a game or a video editor can write a dump of several hundred megabytes, because the dump includes the memory the program was using. A program that keeps crashing, for example after a bad update, can leave dozens of them.",
            "Dumps are meant for a developer or a support engineer who loads them into a debugger. If you are not going to do that, they are dead weight."
          ]
        },
        {
          "title": "When You Should Keep a Dump",
          "content": [
            "Keep the newest dump if you are in the middle of troubleshooting. A blue screen that repeats, or a program that crashes every day, is easier to diagnose with a dump in hand, and a support person may ask for it. Copy that one file somewhere else, such as your Documents folder, before you clean.",
            "Everything else can go. If a crash was a one-off and the program works again, the dump from last month has no value. The same is true for reports in ReportArchive: they describe events that were already sent or are already resolved.",
            "A simple rule: keep at most one dump per problem you are actively investigating, and clear the rest."
          ]
        },
        {
          "title": "Delete Reports and Dumps by Hand",
          "content": [
            "Open File Explorer and paste each path into the address bar. For %LOCALAPPDATA%\\CrashDumps, select all files and delete them. For %LOCALAPPDATA%\\Microsoft\\Windows\\WER, open ReportArchive and ReportQueue and delete their contents. Do the same under C:\\ProgramData\\Microsoft\\Windows\\WER, where Windows may ask for administrator permission. Delete the contents, not the folders themselves.",
            "For blue-screen dumps, the simplest route is Disk Cleanup. Search for it in the Start menu, choose your system drive, select Clean up system files and tick System error memory dump files and Windows Error Reporting files. This clears C:\\Windows\\MEMORY.DMP and the Minidump folder together.",
            "If Windows says a file is in use, skip it. A report that is being written right now will be gone on the next pass."
          ]
        },
        {
          "title": "Clear Them in One Pass with Disk Mop",
          "content": [
            "Disk Mop's Free up space page lists Error reports and Crash dumps as separate items with their size and a short explanation of what cleaning does. Error reports cover the WER report archive and queue in your profile and in ProgramData. Crash dumps cover %LOCALAPPDATA%\\CrashDumps and C:\\Windows\\Minidump.",
            "Run the scan, tick the items you want and confirm. Disk Mop shows what it found before it deletes anything, and some items such as the Windows-level ones may ask for administrator rights. Scanning is free, so you can see how much these files take up before deciding. Disk Mop does not remove C:\\Windows\\MEMORY.DMP; use Disk Cleanup for that file.",
            "If you want it to stay clean, the scheduled cleanup tool can run the safe items of Free up space in the background on a schedule."
          ]
        },
        {
          "title": "If the Crashes Keep Coming Back",
          "content": [
            "Cleaning only removes the evidence. If the same program crashes every week, look at the cause. Update the program and your graphics and storage drivers, check that Windows is fully updated, and look at disk health, because a failing drive can trigger crashes and blue screens. A memory test is worth running if the crashes are random.",
            "It also helps to keep free space on the system drive. Windows needs room to write a dump and to run updates, and a nearly full drive makes both fail in confusing ways."
          ]
        }
      ],
      "verdict": [
        "Windows Error Reporting files and crash dumps are records of crashes that already happened, so after you have copied aside any dump you want to investigate, the rest is safe to delete. Disk Cleanup handles the blue-screen dumps, and the folders in your profile can be emptied by hand.",
        "Disk Mop puts Error reports and Crash dumps in one scan next to caches and temporary files, shows the size of each and asks before it deletes. Scanning is free, so you can see how much space old crashes are taking before you decide to clean."
      ],
      "ctaText": "Find and clear error reports and crash dumps with Disk Mop"
    },
    "de": {
      "title": "Windows-Fehlerberichterstattung und Absturzabbilder: Was sie sind und wie Sie sie löschen",
      "metaDescription": "Dateien der Windows-Fehlerberichterstattung und Absturzabbilder belegen oft Gigabyte. So finden Sie sie, erkennen löschbare Dateien und räumen schrittweise auf.",
      "subtitle": "Speicherplatz durch alte Absturzberichte zurückgewinnen, ohne etwas anzufassen, das Windows braucht",
      "keyTakeaways": [
        "Die Windows-Fehlerberichterstattung (Windows Error Reporting, WER) legt für jeden Absturz, den sie an Microsoft sendet, einen Berichtsordner an; alte Berichte in ReportArchive und ReportQueue sind nach dem Senden nutzlos.",
        "Absturzabbilder in %LOCALAPPDATA%\\CrashDumps und C:\\Windows\\Minidump sind Speicherabzüge für die Fehlersuche; einzelne Dateien können mehrere hundert Megabyte groß werden, und ihr Löschen hat keinen Einfluss auf den Betrieb von Windows.",
        "Behalten Sie das neueste Abbild nur, wenn Sie gerade einen Bluescreen oder ein abstürzendes Programm untersuchen; andernfalls können Sie alle löschen."
      ],
      "dataTable": {
        "caption": "Wo Windows Fehlerberichte und Absturzabbilder ablegt",
        "columns": [
          "Element",
          "Typischer Speicherort",
          "Was es ist",
          "Löschen unbedenklich?"
        ],
        "rows": [
          [
            "WER-Berichtsarchiv und -Warteschlange (pro Benutzer)",
            "ReportArchive und ReportQueue unter %LOCALAPPDATA%\\Microsoft\\Windows\\WER",
            "Ordner mit den Details zu Abstürzen und Hängern Ihrer eigenen Programme",
            "Ja"
          ],
          [
            "WER-Berichtsarchiv und -Warteschlange (alle Benutzer)",
            "ReportArchive und ReportQueue unter C:\\ProgramData\\Microsoft\\Windows\\WER",
            "Dieselben Berichte für systemweite Komponenten",
            "Ja (Administratorrechte können nötig sein)"
          ],
          [
            "Absturzabbilder von Programmen",
            "%LOCALAPPDATA%\\CrashDumps",
            ".dmp-Dateien, die beim Absturz eines Programms geschrieben werden",
            "Ja"
          ],
          [
            "Kleine Speicherabbilder",
            "C:\\Windows\\Minidump",
            "Kleine .dmp-Dateien, die nach einem Bluescreen geschrieben werden",
            "Ja, außer Sie analysieren gerade einen Bluescreen"
          ],
          [
            "Vollständiges Speicherabbild",
            "C:\\Windows\\MEMORY.DMP",
            "Ein großes Abbild des Kernelspeichers nach einem Bluescreen",
            "Ja, über die Datenträgerbereinigung oder von Hand"
          ]
        ]
      },
      "howTo": {
        "name": "So löschen Sie Windows-Fehlerberichte und Absturzabbilder",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Belegten Speicherplatz prüfen",
            "text": "Öffnen Sie den Datei-Explorer und fügen Sie %LOCALAPPDATA%\\CrashDumps in die Adressleiste ein. Klicken Sie mit der rechten Maustaste auf den Ordner, wählen Sie Eigenschaften und notieren Sie die Größe. Wiederholen Sie das für %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Entscheiden, ob Sie das neueste Abbild brauchen",
            "text": "Ist heute ein Programm oder Windows abgestürzt und wollen Sie der Ursache nachgehen, kopieren Sie zuerst die neueste .dmp-Datei in einen anderen Ordner. Ansonsten wird in diesen Ordnern nichts benötigt."
          },
          {
            "name": "Inhalte löschen, nicht die Ordner",
            "text": "Markieren Sie alles in CrashDumps, ReportArchive und ReportQueue und löschen Sie es. Windows legt die Ordner bei Bedarf neu an. Überspringen Sie Dateien, die laut Windows in Verwendung sind."
          },
          {
            "name": "Bluescreen-Abbilder entfernen",
            "text": "Starten Sie die Datenträgerbereinigung, wählen Sie Systemdateien bereinigen und aktivieren Sie Speicherabbilddateien für Systemfehler sowie Windows-Fehlerberichterstattung-Dateien. Dadurch werden auch C:\\Windows\\MEMORY.DMP und der Ordner Minidump entfernt."
          },
          {
            "name": "Alles in einem Durchgang mit Disk Mop",
            "text": "Öffnen Sie Disk Mop, wechseln Sie zu Speicher freigeben, starten Sie den Scan und aktivieren Sie Fehlerberichte und Absturzabbilder. Prüfen Sie die Größen und bestätigen Sie; vor Ihrer Bestätigung wird nichts gelöscht."
          }
        ]
      },
      "faq": [
        {
          "question": "Ist es sicher, Dateien der Windows-Fehlerberichterstattung zu löschen?",
          "answer": "Ja. Die Dateien in den WER-Ordnern ReportArchive und ReportQueue sind Aufzeichnungen von Abstürzen, die bereits passiert sind. Windows braucht sie nicht zum Betrieb; durch das Löschen verlieren Sie nur den Verlauf, den Sie an Microsoft oder einen Entwickler senden könnten."
        },
        {
          "question": "Warum ist mein Ordner CrashDumps so groß?",
          "answer": "Ein Absturzabbild enthält eine Momentaufnahme des Programmspeichers im Moment des Fehlers; ein Programm mit hohem Speicherbedarf schreibt daher eine große Datei. Ein Programm, das wiederholt abstürzt, schreibt jedes Mal ein neues Abbild, und Windows räumt diese nicht von selbst auf."
        },
        {
          "question": "Verhindert das Löschen von Absturzabbildern Abstürze oder Bluescreens?",
          "answer": "Nein. Abbilder sind ein Nebenprodukt eines Absturzes, nicht seine Ursache. Das Löschen gibt Speicherplatz frei, ändert aber nichts daran, warum ein Programm oder Windows ausgefallen ist. Treten weiter Abstürze auf, beheben Sie die Ursache: Treiber aktualisieren, Zustand von Datenträger und Arbeitsspeicher prüfen."
        },
        {
          "question": "Kann ich verhindern, dass Windows so viele Abbilder erstellt?",
          "answer": "Sie können ihre Zahl reduzieren. Wählen Sie unter Systemeigenschaften, Erweitert, Starten und Wiederherstellen statt eines vollständigen ein kleines Speicherabbild, sodass ein Bluescreen nur eine kleine Datei schreibt. Programmabbilder in CrashDumps entstehen nur, wenn die Abbilderfassung für das jeweilige Programm aktiviert ist."
        }
      ],
      "intro": [
        "Die Windows-Fehlerberichterstattung (WER) schreibt jedes Mal einen Ordner mit Dateien, wenn ein Programm abstürzt oder nicht mehr reagiert, und Windows erstellt ein Absturzabbild, wenn ein Programm oder das System ausfällt. Alte Berichte und Abbilder lassen sich gefahrlos löschen, da sie nur die Aufzeichnung eines vergangenen Ereignisses sind, und das Aufräumen dauert wenige Minuten: Löschen Sie den Inhalt der Ordner WER und CrashDumps, starten Sie für die Bluescreen-Abbilder die Datenträgerbereinigung oder nutzen Sie ein Bereinigungstool, das alles in einem Durchgang erledigt.",
        "Auf einem PC, der ein paar Mal abgestürzt ist, gerät man diese Dateien leicht aus dem Blick. Ein einzelnes Abbild eines Browsers oder Spiels kann mehrere hundert Megabyte groß sein, und ein vollständiges Speicherabbild nach einem Bluescreen kann so groß werden wie der genutzte Arbeitsspeicher. Diese Anleitung zeigt, wo die einzelnen Dateiarten liegen, was sie enthalten, wann Sie eine behalten sollten und wie Sie sie sicher entfernen."
      ],
      "sections": [
        {
          "title": "Was die Windows-Fehlerberichterstattung speichert",
          "content": [
            "Wenn ein Programm abstürzt, sammelt Windows einen kleinen Bericht: Name und Version des Programms, das fehlgeschlagene Modul und oft einige zusätzliche Dateien wie ein Minidump. Wenn Sie es erlauben, wird der Bericht an Microsoft gesendet. Eine Kopie bleibt auf Ihrem PC in einem nach dem Ereignis benannten Ordner: in ReportArchive für bereits gesendete Berichte und in ReportQueue für noch wartende.",
            "Es gibt zwei Orte. Berichte für Ihre eigenen Programme liegen unter %LOCALAPPDATA%\\Microsoft\\Windows\\WER, Berichte für systemweite Komponenten unter C:\\ProgramData\\Microsoft\\Windows\\WER. Jeder Bericht ist nur wenige Kilobyte bis wenige Megabyte groß, doch auf einem PC, der seit Jahren läuft, summiert sich das.",
            "Nichts in diesen Ordnern wird von Windows beim Start oder im Betrieb gelesen. Das Einzige, was Sie durch das Löschen eines Berichts verlieren, ist die Möglichkeit, die Details dieses Absturzes später anzusehen."
          ]
        },
        {
          "title": "Absturzabbilder: Woher sie kommen und wie groß sie werden",
          "content": [
            "Ein Absturzabbild ist eine Datei mit der Endung .dmp, die eine Momentaufnahme des Speichers zum Zeitpunkt eines Fehlers enthält. Sie begegnen drei Arten. Programmabbilder werden bei einem Programmabsturz nach %LOCALAPPDATA%\\CrashDumps geschrieben, sofern die Abbilderfassung aktiv ist. Kleine Speicherabbilder landen nach einem Bluescreen in C:\\Windows\\Minidump. Ein vollständiges oder Kernel-Speicherabbild wird nach C:\\Windows\\MEMORY.DMP geschrieben.",
            "Die Größe hängt vom Programm ab. Ein Texteditor schreibt eine kleine Datei, aber ein Browser, ein Spiel oder ein Videoeditor kann ein Abbild von mehreren hundert Megabyte erzeugen, weil das Abbild den vom Programm genutzten Speicher enthält. Ein Programm, das immer wieder abstürzt, etwa nach einem fehlerhaften Update, kann Dutzende davon hinterlassen.",
            "Abbilder sind für Entwickler oder Support-Techniker gedacht, die sie in einen Debugger laden. Wenn Sie das nicht vorhaben, sind sie toter Ballast."
          ]
        },
        {
          "title": "Wann Sie ein Abbild behalten sollten",
          "content": [
            "Behalten Sie das neueste Abbild, wenn Sie mitten in der Fehlersuche stecken. Ein wiederkehrender Bluescreen oder ein Programm, das täglich abstürzt, lässt sich mit einem Abbild leichter diagnostizieren, und der Support fragt unter Umständen danach. Kopieren Sie diese eine Datei vor dem Aufräumen an einen anderen Ort, etwa in Ihren Ordner Dokumente.",
            "Alles andere kann weg. War ein Absturz ein Einzelfall und das Programm läuft wieder, ist das Abbild vom letzten Monat wertlos. Dasselbe gilt für Berichte in ReportArchive: Sie beschreiben Ereignisse, die bereits gesendet oder gelöst wurden.",
            "Eine einfache Regel: Behalten Sie höchstens ein Abbild pro Problem, das Sie aktiv untersuchen, und löschen Sie den Rest."
          ]
        },
        {
          "title": "Berichte und Abbilder von Hand löschen",
          "content": [
            "Öffnen Sie den Datei-Explorer und fügen Sie jeden Pfad in die Adressleiste ein. Markieren Sie in %LOCALAPPDATA%\\CrashDumps alle Dateien und löschen Sie sie. Öffnen Sie in %LOCALAPPDATA%\\Microsoft\\Windows\\WER die Ordner ReportArchive und ReportQueue und löschen Sie deren Inhalt. Verfahren Sie ebenso unter C:\\ProgramData\\Microsoft\\Windows\\WER, wo Windows eventuell die Administratorberechtigung abfragt. Löschen Sie die Inhalte, nicht die Ordner selbst.",
            "Für Bluescreen-Abbilder ist die Datenträgerbereinigung der einfachste Weg. Suchen Sie im Startmenü danach, wählen Sie Ihr Systemlaufwerk, klicken Sie auf Systemdateien bereinigen und aktivieren Sie Speicherabbilddateien für Systemfehler sowie Windows-Fehlerberichterstattung-Dateien. Damit werden C:\\Windows\\MEMORY.DMP und der Ordner Minidump gemeinsam bereinigt.",
            "Meldet Windows, dass eine Datei in Verwendung ist, überspringen Sie sie. Ein Bericht, der gerade geschrieben wird, ist beim nächsten Durchgang verschwunden."
          ]
        },
        {
          "title": "Alles in einem Durchgang mit Disk Mop",
          "content": [
            "Die Seite Speicher freigeben von Disk Mop listet Fehlerberichte und Absturzabbilder als getrennte Einträge mit Größe und einer kurzen Erklärung, was das Bereinigen bewirkt. Fehlerberichte umfassen das WER-Berichtsarchiv und die Warteschlange in Ihrem Profil und in ProgramData. Absturzabbilder umfassen %LOCALAPPDATA%\\CrashDumps und C:\\Windows\\Minidump.",
            "Starten Sie den Scan, aktivieren Sie die gewünschten Einträge und bestätigen Sie. Disk Mop zeigt, was es gefunden hat, bevor etwas gelöscht wird, und einige Einträge, etwa auf Windows-Ebene, können Administratorrechte verlangen. Der Scan ist kostenlos, Sie sehen also vor der Entscheidung, wie viel Platz diese Dateien belegen. Disk Mop entfernt C:\\Windows\\MEMORY.DMP nicht; nutzen Sie dafür die Datenträgerbereinigung.",
            "Wenn Sie es dauerhaft sauber halten möchten, kann das Tool für die geplante Bereinigung die sicheren Einträge von Speicher freigeben im Hintergrund nach Zeitplan ausführen."
          ]
        },
        {
          "title": "Wenn die Abstürze immer wiederkommen",
          "content": [
            "Das Aufräumen entfernt nur die Beweise. Stürzt dasselbe Programm jede Woche ab, suchen Sie die Ursache. Aktualisieren Sie das Programm sowie Ihre Grafik- und Speichertreiber, prüfen Sie, ob Windows vollständig aktualisiert ist, und kontrollieren Sie den Zustand des Datenträgers, denn ein defektes Laufwerk kann Abstürze und Bluescreens auslösen. Ein Speichertest lohnt sich, wenn die Abstürze zufällig auftreten.",
            "Hilfreich ist auch, auf dem Systemlaufwerk freien Platz zu lassen. Windows braucht Platz, um ein Abbild zu schreiben und Updates auszuführen, und ein fast volles Laufwerk lässt beides auf verwirrende Weise scheitern."
          ]
        }
      ],
      "verdict": [
        "Dateien der Windows-Fehlerberichterstattung und Absturzabbilder sind Aufzeichnungen von Abstürzen, die bereits passiert sind. Haben Sie ein Abbild, das Sie untersuchen wollen, beiseite kopiert, ist der Rest unbedenklich löschbar. Die Datenträgerbereinigung erledigt die Bluescreen-Abbilder, und die Ordner in Ihrem Profil lassen sich von Hand leeren.",
        "Disk Mop führt Fehlerberichte und Absturzabbilder in einem Scan zusammen mit Caches und temporären Dateien auf, zeigt die Größe jedes Eintrags und fragt vor dem Löschen nach. Der Scan ist kostenlos, sodass Sie sehen, wie viel Platz alte Abstürze belegen, bevor Sie sich fürs Aufräumen entscheiden."
      ],
      "ctaText": "Fehlerberichte und Absturzabbilder mit Disk Mop finden und löschen"
    },
    "fr": {
      "title": "Rapport d'erreurs Windows et vidages de plantage : à quoi ils servent et comment les supprimer",
      "metaDescription": "Les fichiers du Rapport d'erreurs Windows et les vidages de plantage occupent parfois des gigaoctets. Où les trouver, lesquels supprimer et comment les effacer.",
      "subtitle": "Récupérez de l'espace pris par d'anciens rapports de plantage sans toucher à ce dont Windows a besoin",
      "keyTakeaways": [
        "Le Rapport d'erreurs Windows (WER) conserve un dossier de rapport pour chaque plantage envoyé à Microsoft ; les anciens rapports de ReportArchive et ReportQueue ne servent plus à rien une fois envoyés.",
        "Les vidages de plantage de %LOCALAPPDATA%\\CrashDumps et de C:\\Windows\\Minidump sont des instantanés de la mémoire destinés au débogage ; un seul fichier peut atteindre plusieurs centaines de mégaoctets, et les supprimer n'affecte pas le fonctionnement de Windows.",
        "Ne gardez le vidage le plus récent que si vous diagnostiquez activement un écran bleu ou un programme qui plante ; sinon, supprimez-les tous."
      ],
      "dataTable": {
        "caption": "Où Windows conserve les rapports d'erreurs et les vidages de plantage",
        "columns": [
          "Élément",
          "Emplacement habituel",
          "De quoi il s'agit",
          "Suppression sans risque ?"
        ],
        "rows": [
          [
            "Archive et file d'attente des rapports WER (par utilisateur)",
            "ReportArchive et ReportQueue dans %LOCALAPPDATA%\\Microsoft\\Windows\\WER",
            "Dossiers contenant les détails des plantages et blocages de vos propres programmes",
            "Oui"
          ],
          [
            "Archive et file d'attente des rapports WER (tous les utilisateurs)",
            "ReportArchive et ReportQueue dans C:\\ProgramData\\Microsoft\\Windows\\WER",
            "Les mêmes rapports pour les composants du système",
            "Oui (des droits d'administrateur peuvent être nécessaires)"
          ],
          [
            "Vidages de plantage des programmes",
            "%LOCALAPPDATA%\\CrashDumps",
            "Fichiers .dmp écrits quand un programme plante",
            "Oui"
          ],
          [
            "Petits vidages mémoire",
            "C:\\Windows\\Minidump",
            "Petits fichiers .dmp écrits après un écran bleu",
            "Oui, sauf si vous analysez un écran bleu"
          ],
          [
            "Vidage mémoire complet",
            "C:\\Windows\\MEMORY.DMP",
            "Un gros vidage de la mémoire du noyau après un écran bleu",
            "Oui, via le Nettoyage de disque ou à la main"
          ]
        ]
      },
      "howTo": {
        "name": "Comment supprimer les rapports d'erreurs Windows et les vidages de plantage",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Vérifier l'espace qu'ils occupent",
            "text": "Ouvrez l'Explorateur de fichiers et collez %LOCALAPPDATA%\\CrashDumps dans la barre d'adresse. Faites un clic droit sur le dossier, choisissez Propriétés et notez la taille. Recommencez avec %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Décider si vous avez besoin du vidage le plus récent",
            "text": "Si un programme ou Windows a planté aujourd'hui et que vous comptez enquêter, copiez d'abord le fichier .dmp le plus récent dans un autre dossier. Sinon, rien dans ces dossiers n'est nécessaire."
          },
          {
            "name": "Supprimer le contenu, pas les dossiers",
            "text": "Sélectionnez tout le contenu de CrashDumps, ReportArchive et ReportQueue, puis supprimez-le. Windows recrée les dossiers quand il en a besoin. Ignorez tout fichier que Windows signale comme utilisé."
          },
          {
            "name": "Supprimer les vidages d'écran bleu",
            "text": "Lancez le Nettoyage de disque, choisissez Nettoyer les fichiers système, puis cochez Fichiers de vidage de mémoire pour les erreurs système et Fichiers du Rapport d'erreurs Windows. Cela supprime aussi C:\\Windows\\MEMORY.DMP et le dossier Minidump."
          },
          {
            "name": "Tout faire d'un seul coup avec Disk Mop",
            "text": "Ouvrez Disk Mop, allez dans Libérer de l'espace, lancez l'analyse et cochez Rapports d'erreurs et Vidages de plantage. Vérifiez les tailles et confirmez ; rien n'est supprimé avant votre confirmation."
          }
        ]
      },
      "faq": [
        {
          "question": "Peut-on supprimer sans risque les fichiers du Rapport d'erreurs Windows ?",
          "answer": "Oui. Les fichiers des dossiers WER ReportArchive et ReportQueue sont des traces de plantages déjà survenus. Windows n'en a pas besoin pour fonctionner, et les supprimer ne retire que l'historique que vous pourriez envoyer à Microsoft ou à un développeur."
        },
        {
          "question": "Pourquoi mon dossier CrashDumps est-il si volumineux ?",
          "answer": "Un vidage de plantage contient un instantané de la mémoire du programme au moment de la défaillance : un programme qui consommait beaucoup de mémoire écrit donc un gros fichier. Un programme qui plante en boucle écrit un nouveau vidage à chaque fois, et Windows ne les nettoie pas tout seul."
        },
        {
          "question": "Supprimer les vidages de plantage empêche-t-il les plantages ou les écrans bleus ?",
          "answer": "Non. Les vidages sont un produit dérivé d'un plantage, pas sa cause. Les supprimer libère de la place mais ne change rien à la raison pour laquelle un programme ou Windows a échoué. Si les plantages continuent, traitez la cause : mettez à jour les pilotes, vérifiez l'état du disque et de la mémoire."
        },
        {
          "question": "Puis-je empêcher Windows de créer autant de vidages ?",
          "answer": "Vous pouvez en réduire le nombre. Dans Propriétés système, Avancé, Démarrage et récupération, choisissez un petit vidage de mémoire plutôt qu'un vidage complet : un écran bleu écrira alors un petit fichier. Les vidages de programmes dans CrashDumps n'apparaissent que si la collecte de vidages est activée pour ce programme."
        }
      ],
      "intro": [
        "Le Rapport d'erreurs Windows (WER) écrit un dossier de fichiers chaque fois qu'un programme plante ou cesse de répondre, et Windows écrit un vidage de plantage quand un programme ou le système échoue. Les anciens rapports et vidages peuvent être supprimés sans risque, car ils ne sont que la trace d'un événement passé, et les effacer prend quelques minutes : supprimez le contenu des dossiers WER et CrashDumps, lancez le Nettoyage de disque pour les vidages d'écran bleu, ou utilisez un outil de nettoyage qui fait tout en une seule passe.",
        "Sur un PC qui a planté quelques fois, ces fichiers passent facilement inaperçus. Un seul vidage d'un navigateur ou d'un jeu peut peser plusieurs centaines de mégaoctets, et un vidage mémoire complet après un écran bleu peut atteindre la taille de la RAM utilisée. Ce guide montre où se trouve chaque type de fichier, ce qu'il contient, quand en garder un et comment les supprimer en toute sécurité."
      ],
      "sections": [
        {
          "title": "Ce que stocke le Rapport d'erreurs Windows",
          "content": [
            "Quand un programme plante, Windows collecte un petit rapport : le nom et la version du programme, le module en cause et souvent quelques fichiers supplémentaires comme un mini-vidage. Si vous l'autorisez, le rapport est envoyé à Microsoft. Une copie reste sur votre PC, dans un dossier portant le nom de l'événement : dans ReportArchive pour les rapports envoyés, dans ReportQueue pour ceux qui attendent encore.",
            "Il y a deux emplacements. Les rapports de vos propres programmes se trouvent sous %LOCALAPPDATA%\\Microsoft\\Windows\\WER, et ceux des composants du système sous C:\\ProgramData\\Microsoft\\Windows\\WER. Chaque rapport ne pèse que quelques kilo-octets à quelques mégaoctets, mais ils s'accumulent sur un PC qui tourne depuis des années.",
            "Windows ne lit rien de ces dossiers au démarrage ni en fonctionnement. La seule chose que vous perdez en supprimant un rapport, c'est la possibilité de consulter plus tard les détails de ce plantage."
          ]
        },
        {
          "title": "Vidages de plantage : d'où ils viennent et leur taille",
          "content": [
            "Un vidage de plantage est un fichier d'extension .dmp qui contient un instantané de la mémoire au moment d'une défaillance. Vous en rencontrerez trois types. Les vidages de programmes sont écrits dans %LOCALAPPDATA%\\CrashDumps quand un programme plante et que la collecte est activée. Les petits vidages mémoire vont dans C:\\Windows\\Minidump après un écran bleu. Un vidage mémoire complet ou du noyau est écrit dans C:\\Windows\\MEMORY.DMP.",
            "La taille dépend du programme. Un éditeur de texte écrit un petit fichier, mais un navigateur, un jeu ou un logiciel de montage vidéo peut écrire un vidage de plusieurs centaines de mégaoctets, car il inclut la mémoire utilisée par le programme. Un programme qui plante sans cesse, par exemple après une mauvaise mise à jour, peut en laisser des dizaines.",
            "Les vidages sont destinés aux développeurs ou aux ingénieurs du support qui les chargent dans un débogueur. Si vous n'allez pas le faire, ils ne sont que du poids mort."
          ]
        },
        {
          "title": "Quand garder un vidage",
          "content": [
            "Gardez le vidage le plus récent si vous êtes en plein diagnostic. Un écran bleu qui se répète ou un programme qui plante tous les jours se diagnostique plus facilement avec un vidage, et le support peut vous le demander. Copiez ce fichier ailleurs, par exemple dans votre dossier Documents, avant de nettoyer.",
            "Tout le reste peut partir. Si le plantage était isolé et que le programme refonctionne, le vidage du mois dernier n'a aucune valeur. Il en va de même pour les rapports de ReportArchive : ils décrivent des événements déjà envoyés ou déjà résolus.",
            "Une règle simple : gardez au plus un vidage par problème que vous étudiez activement, et supprimez le reste."
          ]
        },
        {
          "title": "Supprimer rapports et vidages à la main",
          "content": [
            "Ouvrez l'Explorateur de fichiers et collez chaque chemin dans la barre d'adresse. Pour %LOCALAPPDATA%\\CrashDumps, sélectionnez tous les fichiers et supprimez-les. Pour %LOCALAPPDATA%\\Microsoft\\Windows\\WER, ouvrez ReportArchive et ReportQueue et supprimez leur contenu. Faites de même sous C:\\ProgramData\\Microsoft\\Windows\\WER, où Windows peut demander l'autorisation d'un administrateur. Supprimez le contenu, pas les dossiers eux-mêmes.",
            "Pour les vidages d'écran bleu, le plus simple est le Nettoyage de disque. Recherchez-le dans le menu Démarrer, choisissez votre lecteur système, sélectionnez Nettoyer les fichiers système, puis cochez Fichiers de vidage de mémoire pour les erreurs système et Fichiers du Rapport d'erreurs Windows. Cela supprime ensemble C:\\Windows\\MEMORY.DMP et le dossier Minidump.",
            "Si Windows indique qu'un fichier est utilisé, ignorez-le. Un rapport en cours d'écriture aura disparu à la passe suivante."
          ]
        },
        {
          "title": "Tout effacer d'un seul coup avec Disk Mop",
          "content": [
            "La page Libérer de l'espace de Disk Mop liste Rapports d'erreurs et Vidages de plantage comme éléments distincts, avec leur taille et une courte explication de l'effet du nettoyage. Rapports d'erreurs couvre l'archive et la file d'attente des rapports WER de votre profil et de ProgramData. Vidages de plantage couvre %LOCALAPPDATA%\\CrashDumps et C:\\Windows\\Minidump.",
            "Lancez l'analyse, cochez les éléments voulus et confirmez. Disk Mop montre ce qu'il a trouvé avant de supprimer quoi que ce soit, et certains éléments, comme ceux de niveau Windows, peuvent demander des droits d'administrateur. L'analyse est gratuite : vous pouvez donc voir la place que prennent ces fichiers avant de décider. Disk Mop ne supprime pas C:\\Windows\\MEMORY.DMP ; utilisez le Nettoyage de disque pour ce fichier.",
            "Si vous voulez que le PC reste propre, l'outil de nettoyage planifié peut exécuter en arrière-plan, selon un calendrier, les éléments sûrs de Libérer de l'espace."
          ]
        },
        {
          "title": "Si les plantages reviennent",
          "content": [
            "Le nettoyage ne supprime que les preuves. Si le même programme plante chaque semaine, cherchez la cause. Mettez à jour le programme ainsi que vos pilotes graphiques et de stockage, vérifiez que Windows est entièrement à jour et contrôlez l'état du disque, car un lecteur défaillant peut provoquer des plantages et des écrans bleus. Un test de la mémoire vaut la peine si les plantages sont aléatoires.",
            "Il est aussi utile de garder de l'espace libre sur le lecteur système. Windows a besoin de place pour écrire un vidage et exécuter les mises à jour, et un lecteur presque plein fait échouer les deux de manière déroutante."
          ]
        }
      ],
      "verdict": [
        "Les fichiers du Rapport d'erreurs Windows et les vidages de plantage sont des traces de plantages déjà survenus : une fois copié à part le vidage que vous voulez étudier, le reste peut être supprimé sans risque. Le Nettoyage de disque s'occupe des vidages d'écran bleu, et les dossiers de votre profil se vident à la main.",
        "Disk Mop réunit Rapports d'erreurs et Vidages de plantage dans une seule analyse, à côté des caches et des fichiers temporaires, affiche la taille de chacun et demande avant de supprimer. L'analyse est gratuite : vous voyez la place qu'occupent d'anciens plantages avant de décider de nettoyer."
      ],
      "ctaText": "Trouvez et supprimez rapports d'erreurs et vidages de plantage avec Disk Mop"
    },
    "es": {
      "title": "Informe de errores de Windows y volcados de errores: qué son y cómo eliminarlos",
      "metaDescription": "Los archivos del Informe de errores de Windows y los volcados de errores pueden ocupar gigas. Descubre dónde están, cuáles puedes borrar y cómo eliminarlos.",
      "subtitle": "Recupera espacio de informes de fallos antiguos sin tocar nada que Windows necesite",
      "keyTakeaways": [
        "El Informe de errores de Windows (WER) guarda una carpeta de informe por cada fallo que envía a Microsoft; los informes antiguos de ReportArchive y ReportQueue no sirven de nada una vez enviados.",
        "Los volcados de errores de %LOCALAPPDATA%\\CrashDumps y C:\\Windows\\Minidump son instantáneas de memoria para depuración; un solo archivo puede alcanzar cientos de megabytes, y borrarlos no afecta al funcionamiento de Windows.",
        "Conserva el volcado más reciente solo si estás investigando activamente una pantalla azul o un programa que se bloquea; si no, elimínalos todos."
      ],
      "dataTable": {
        "caption": "Dónde guarda Windows los informes de errores y los volcados de errores",
        "columns": [
          "Elemento",
          "Ubicación habitual",
          "Qué es",
          "¿Se puede borrar sin riesgo?"
        ],
        "rows": [
          [
            "Archivo y cola de informes WER (por usuario)",
            "ReportArchive y ReportQueue en %LOCALAPPDATA%\\Microsoft\\Windows\\WER",
            "Carpetas con los detalles de los fallos y bloqueos de tus propios programas",
            "Sí"
          ],
          [
            "Archivo y cola de informes WER (todos los usuarios)",
            "ReportArchive y ReportQueue en C:\\ProgramData\\Microsoft\\Windows\\WER",
            "Los mismos informes de los componentes de todo el sistema",
            "Sí (pueden hacer falta permisos de administrador)"
          ],
          [
            "Volcados de errores de programas",
            "%LOCALAPPDATA%\\CrashDumps",
            "Archivos .dmp que se escriben cuando un programa falla",
            "Sí"
          ],
          [
            "Volcados de memoria pequeños",
            "C:\\Windows\\Minidump",
            "Archivos .dmp pequeños que se escriben tras una pantalla azul",
            "Sí, salvo que estés analizando una pantalla azul"
          ],
          [
            "Volcado de memoria completo",
            "C:\\Windows\\MEMORY.DMP",
            "Un volcado grande de la memoria del kernel tras una pantalla azul",
            "Sí, con el Liberador de espacio en disco o a mano"
          ]
        ]
      },
      "howTo": {
        "name": "Cómo eliminar los informes de errores de Windows y los volcados de errores",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Comprueba cuánto espacio ocupan",
            "text": "Abre el Explorador de archivos y pega %LOCALAPPDATA%\\CrashDumps en la barra de direcciones. Haz clic derecho en la carpeta, elige Propiedades y anota el tamaño. Repite con %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Decide si necesitas el volcado más reciente",
            "text": "Si hoy ha fallado un programa o Windows y piensas investigarlo, copia primero el archivo .dmp más reciente a otra carpeta. Si no, nada de lo que hay en estas carpetas es necesario."
          },
          {
            "name": "Borra el contenido, no las carpetas",
            "text": "Selecciona todo lo que hay dentro de CrashDumps, ReportArchive y ReportQueue y elimínalo. Windows vuelve a crear las carpetas cuando las necesita. Omite cualquier archivo que Windows indique que está en uso."
          },
          {
            "name": "Elimina los volcados de pantalla azul",
            "text": "Ejecuta el Liberador de espacio en disco, elige Limpiar archivos del sistema y marca Archivos de volcado de memoria de errores del sistema y Archivos de Informe de errores de Windows. Esto también elimina C:\\Windows\\MEMORY.DMP y la carpeta Minidump."
          },
          {
            "name": "Hazlo todo de una vez con Disk Mop",
            "text": "Abre Disk Mop, ve a Liberar espacio, ejecuta el análisis y marca Informes de errores y Volcados de errores. Revisa los tamaños y confirma; no se borra nada antes de que confirmes."
          }
        ]
      },
      "faq": [
        {
          "question": "¿Es seguro borrar los archivos del Informe de errores de Windows?",
          "answer": "Sí. Los archivos de las carpetas WER ReportArchive y ReportQueue son registros de fallos que ya ocurrieron. Windows no los necesita para funcionar, y borrarlos solo elimina el historial que podrías enviar a Microsoft o a un desarrollador."
        },
        {
          "question": "¿Por qué mi carpeta CrashDumps es tan grande?",
          "answer": "Un volcado de errores contiene una instantánea de la memoria del programa en el momento del fallo, así que un programa que usaba mucha memoria escribe un archivo grande. Un programa que falla repetidamente escribe un volcado nuevo cada vez, y Windows no los limpia por sí solo."
        },
        {
          "question": "¿Borrar los volcados de errores detiene los fallos o las pantallas azules?",
          "answer": "No. Los volcados son un subproducto de un fallo, no su causa. Borrarlos libera espacio, pero no cambia nada de por qué falló un programa o Windows. Si los fallos continúan, corrige la causa: actualiza los controladores y revisa el estado del disco y de la memoria."
        },
        {
          "question": "¿Puedo evitar que Windows cree tantos volcados?",
          "answer": "Puedes reducirlos. En Propiedades del sistema, Opciones avanzadas, Inicio y recuperación, elige un volcado de memoria pequeño en lugar de uno completo, de modo que una pantalla azul escriba un archivo pequeño. Los volcados de programas en CrashDumps solo aparecen cuando la recopilación de volcados está habilitada para ese programa."
        }
      ],
      "intro": [
        "El Informe de errores de Windows (WER) escribe una carpeta de archivos cada vez que un programa falla o deja de responder, y Windows escribe un volcado de errores cuando falla un programa o el sistema. Los informes y volcados antiguos se pueden borrar sin riesgo porque solo son el registro de algo que ya ocurrió, y limpiarlos lleva unos minutos: borra el contenido de las carpetas WER y CrashDumps, ejecuta el Liberador de espacio en disco para los volcados de pantalla azul o usa un limpiador que lo haga todo de una vez.",
        "En un PC que ha fallado varias veces, estos archivos se olvidan con facilidad. Un solo volcado de un navegador o de un juego puede pesar varios cientos de megabytes, y un volcado de memoria completo tras una pantalla azul puede ser tan grande como la RAM en uso. Esta guía explica dónde está cada tipo de archivo, qué contiene, cuándo conviene conservar uno y cómo eliminarlos de forma segura."
      ],
      "sections": [
        {
          "title": "Qué guarda el Informe de errores de Windows",
          "content": [
            "Cuando un programa falla, Windows recopila un informe pequeño: el nombre y la versión del programa, el módulo que falló y, a menudo, algunos archivos adicionales como un minivolcado. Si lo permites, el informe se envía a Microsoft. Una copia permanece en tu PC, en una carpeta con el nombre del evento: en ReportArchive para los informes enviados y en ReportQueue para los que siguen esperando.",
            "Hay dos ubicaciones. Los informes de tus propios programas están en %LOCALAPPDATA%\\Microsoft\\Windows\\WER, y los de los componentes de todo el sistema en C:\\ProgramData\\Microsoft\\Windows\\WER. Cada informe ocupa desde unos kilobytes hasta unos pocos megabytes, pero se acumulan en un PC que lleva años funcionando.",
            "Windows no lee nada de estas carpetas al arrancar ni mientras funciona. Lo único que pierdes al borrar un informe es la posibilidad de consultar más adelante los detalles de ese fallo."
          ]
        },
        {
          "title": "Volcados de errores: de dónde vienen y cuánto pesan",
          "content": [
            "Un volcado de errores es un archivo con extensión .dmp que contiene una instantánea de la memoria cuando algo falló. Te encontrarás con tres tipos. Los volcados de programas se escriben en %LOCALAPPDATA%\\CrashDumps cuando un programa falla y la recopilación está activada. Los volcados de memoria pequeños van a C:\\Windows\\Minidump tras una pantalla azul. Un volcado de memoria completo o del kernel se escribe en C:\\Windows\\MEMORY.DMP.",
            "El tamaño depende del programa. Un editor de texto escribe un archivo pequeño, pero un navegador, un juego o un editor de vídeo pueden escribir un volcado de varios cientos de megabytes, porque incluye la memoria que el programa estaba usando. Un programa que falla una y otra vez, por ejemplo tras una mala actualización, puede dejar decenas.",
            "Los volcados están pensados para desarrolladores o ingenieros de soporte que los cargan en un depurador. Si no vas a hacer eso, son peso muerto."
          ]
        },
        {
          "title": "Cuándo conviene conservar un volcado",
          "content": [
            "Conserva el volcado más reciente si estás en pleno proceso de diagnóstico. Una pantalla azul que se repite o un programa que falla a diario es más fácil de diagnosticar con un volcado a mano, y el soporte técnico puede pedírtelo. Copia ese archivo a otro lugar, como tu carpeta Documentos, antes de limpiar.",
            "Todo lo demás puede irse. Si el fallo fue puntual y el programa vuelve a funcionar, el volcado del mes pasado no tiene ningún valor. Lo mismo ocurre con los informes de ReportArchive: describen eventos que ya se enviaron o ya se resolvieron.",
            "Una regla sencilla: conserva como máximo un volcado por cada problema que estés investigando activamente y elimina el resto."
          ]
        },
        {
          "title": "Eliminar informes y volcados a mano",
          "content": [
            "Abre el Explorador de archivos y pega cada ruta en la barra de direcciones. En %LOCALAPPDATA%\\CrashDumps, selecciona todos los archivos y elimínalos. En %LOCALAPPDATA%\\Microsoft\\Windows\\WER, abre ReportArchive y ReportQueue y borra su contenido. Haz lo mismo en C:\\ProgramData\\Microsoft\\Windows\\WER, donde Windows puede pedirte permiso de administrador. Borra el contenido, no las carpetas en sí.",
            "Para los volcados de pantalla azul, lo más sencillo es el Liberador de espacio en disco. Búscalo en el menú Inicio, elige la unidad del sistema, selecciona Limpiar archivos del sistema y marca Archivos de volcado de memoria de errores del sistema y Archivos de Informe de errores de Windows. Así se eliminan juntos C:\\Windows\\MEMORY.DMP y la carpeta Minidump.",
            "Si Windows dice que un archivo está en uso, omítelo. Un informe que se está escribiendo en ese momento habrá desaparecido en la siguiente pasada."
          ]
        },
        {
          "title": "Límpialos de una vez con Disk Mop",
          "content": [
            "La página Liberar espacio de Disk Mop muestra Informes de errores y Volcados de errores como elementos separados, con su tamaño y una breve explicación de lo que hace la limpieza. Informes de errores abarca el archivo y la cola de informes WER de tu perfil y de ProgramData. Volcados de errores abarca %LOCALAPPDATA%\\CrashDumps y C:\\Windows\\Minidump.",
            "Ejecuta el análisis, marca los elementos que quieras y confirma. Disk Mop muestra lo que ha encontrado antes de borrar nada, y algunos elementos, como los de nivel de Windows, pueden pedir derechos de administrador. El análisis es gratuito, así que puedes ver cuánto ocupan estos archivos antes de decidir. Disk Mop no elimina C:\\Windows\\MEMORY.DMP; usa el Liberador de espacio en disco para ese archivo.",
            "Si quieres mantenerlo limpio, la herramienta de limpieza programada puede ejecutar en segundo plano, según un horario, los elementos seguros de Liberar espacio."
          ]
        },
        {
          "title": "Si los fallos siguen apareciendo",
          "content": [
            "Limpiar solo elimina la evidencia. Si el mismo programa falla cada semana, busca la causa. Actualiza el programa y los controladores de gráficos y almacenamiento, comprueba que Windows esté totalmente actualizado y revisa el estado del disco, porque una unidad defectuosa puede provocar fallos y pantallas azules. Vale la pena ejecutar una prueba de memoria si los fallos son aleatorios.",
            "También ayuda mantener espacio libre en la unidad del sistema. Windows necesita sitio para escribir un volcado y para ejecutar las actualizaciones, y una unidad casi llena hace que ambas cosas fallen de formas confusas."
          ]
        }
      ],
      "verdict": [
        "Los archivos del Informe de errores de Windows y los volcados de errores son registros de fallos que ya ocurrieron, así que, después de copiar aparte el volcado que quieras investigar, el resto se puede borrar sin riesgo. El Liberador de espacio en disco se encarga de los volcados de pantalla azul, y las carpetas de tu perfil se pueden vaciar a mano.",
        "Disk Mop reúne Informes de errores y Volcados de errores en un único análisis junto a las cachés y los archivos temporales, muestra el tamaño de cada uno y pregunta antes de borrar. El análisis es gratuito, así que puedes ver cuánto espacio ocupan los fallos antiguos antes de decidir limpiar."
      ],
      "ctaText": "Encuentra y elimina informes de errores y volcados de errores con Disk Mop"
    },
    "it": {
      "title": "Segnalazione errori di Windows e dump di crash: cosa sono e come eliminarli",
      "metaDescription": "I file della Segnalazione errori di Windows e i dump di crash possono occupare gigabyte. Scopri dove si trovano, quali puoi eliminare e come farlo passo dopo passo.",
      "subtitle": "Recupera spazio dai vecchi report di crash senza toccare nulla di ciò che serve a Windows",
      "keyTakeaways": [
        "La Segnalazione errori di Windows (WER) conserva una cartella di report per ogni crash inviato a Microsoft; i vecchi report in ReportArchive e ReportQueue non servono più una volta inviati.",
        "I dump di crash in %LOCALAPPDATA%\\CrashDumps e C:\\Windows\\Minidump sono istantanee della memoria usate per il debug; un singolo file può raggiungere centinaia di megabyte e la loro eliminazione non influisce sul funzionamento di Windows.",
        "Conserva il dump più recente solo se stai indagando attivamente su una schermata blu o su un programma che va in crash; altrimenti eliminali tutti."
      ],
      "dataTable": {
        "caption": "Dove Windows conserva i report di errore e i dump di crash",
        "columns": [
          "Elemento",
          "Percorso tipico",
          "Cos'è",
          "Si può eliminare senza rischi?"
        ],
        "rows": [
          [
            "Archivio e coda dei report WER (per utente)",
            "ReportArchive e ReportQueue in %LOCALAPPDATA%\\Microsoft\\Windows\\WER",
            "Cartelle con i dettagli di crash e blocchi dei tuoi programmi",
            "Sì"
          ],
          [
            "Archivio e coda dei report WER (tutti gli utenti)",
            "ReportArchive e ReportQueue in C:\\ProgramData\\Microsoft\\Windows\\WER",
            "Gli stessi report per i componenti di sistema",
            "Sì (possono servire i diritti di amministratore)"
          ],
          [
            "Dump di crash dei programmi",
            "%LOCALAPPDATA%\\CrashDumps",
            "File .dmp scritti quando un programma va in crash",
            "Sì"
          ],
          [
            "Dump di memoria ridotti",
            "C:\\Windows\\Minidump",
            "Piccoli file .dmp scritti dopo una schermata blu",
            "Sì, a meno che tu non stia analizzando una schermata blu"
          ],
          [
            "Dump completo della memoria",
            "C:\\Windows\\MEMORY.DMP",
            "Un grande dump della memoria del kernel dopo una schermata blu",
            "Sì, con Pulizia disco o a mano"
          ]
        ]
      },
      "howTo": {
        "name": "Come eliminare i report di errore di Windows e i dump di crash",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Controlla quanto spazio occupano",
            "text": "Apri Esplora file e incolla %LOCALAPPDATA%\\CrashDumps nella barra degli indirizzi. Fai clic con il pulsante destro sulla cartella, scegli Proprietà e annota la dimensione. Ripeti l'operazione per %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Decidi se ti serve il dump più recente",
            "text": "Se oggi un programma o Windows è andato in crash e vuoi approfondire, copia prima il file .dmp più recente in un'altra cartella. Altrimenti nulla in queste cartelle è necessario."
          },
          {
            "name": "Elimina il contenuto, non le cartelle",
            "text": "Seleziona tutto ciò che si trova in CrashDumps, ReportArchive e ReportQueue ed eliminalo. Windows ricrea le cartelle quando servono. Salta i file che Windows segnala come in uso."
          },
          {
            "name": "Rimuovi i dump delle schermate blu",
            "text": "Avvia Pulizia disco, scegli Pulisci file di sistema e seleziona File dump memoria per errori di sistema e File di segnalazione errori di Windows. Vengono rimossi anche C:\\Windows\\MEMORY.DMP e la cartella Minidump."
          },
          {
            "name": "Fai tutto in un solo passaggio con Disk Mop",
            "text": "Apri Disk Mop, vai su Libera spazio, avvia la scansione e seleziona Segnalazioni errori e Dump di crash. Controlla le dimensioni e conferma; nulla viene eliminato prima della tua conferma."
          }
        ]
      },
      "faq": [
        {
          "question": "È sicuro eliminare i file della Segnalazione errori di Windows?",
          "answer": "Sì. I file nelle cartelle WER ReportArchive e ReportQueue sono registrazioni di crash già avvenuti. Windows non ne ha bisogno per funzionare e la loro eliminazione rimuove soltanto la cronologia che potresti inviare a Microsoft o a uno sviluppatore."
        },
        {
          "question": "Perché la mia cartella CrashDumps è così grande?",
          "answer": "Un dump di crash contiene un'istantanea della memoria del programma nel momento del guasto, quindi un programma che usava molta memoria scrive un file grande. Un programma che va in crash ripetutamente scrive un nuovo dump ogni volta e Windows non li elimina da solo."
        },
        {
          "question": "Eliminare i dump di crash blocca i crash o le schermate blu?",
          "answer": "No. I dump sono un sottoprodotto di un crash, non la sua causa. Eliminarli libera spazio ma non cambia il motivo per cui un programma o Windows ha avuto un guasto. Se i crash continuano, correggi la causa: aggiorna i driver e controlla lo stato del disco e della memoria."
        },
        {
          "question": "Posso evitare che Windows crei così tanti dump?",
          "answer": "Puoi ridurli. In Proprietà del sistema, Avanzate, Avvio e ripristino, scegli un dump di memoria ridotto invece di uno completo, così una schermata blu scrive un file piccolo. I dump dei programmi in CrashDumps compaiono solo se la raccolta dei dump è abilitata per quel programma."
        }
      ],
      "intro": [
        "La Segnalazione errori di Windows (WER) scrive una cartella di file ogni volta che un programma va in crash o smette di rispondere, e Windows scrive un dump di crash quando un programma o il sistema ha un guasto. I vecchi report e dump si possono eliminare senza rischi perché sono solo la registrazione di qualcosa che è già successo, e la pulizia richiede pochi minuti: elimina il contenuto delle cartelle WER e CrashDumps, esegui Pulizia disco per i dump delle schermate blu oppure usa uno strumento di pulizia che fa tutto in un solo passaggio.",
        "Su un PC che è andato in crash qualche volta, questi file si dimenticano facilmente. Un singolo dump di un browser o di un gioco può pesare diverse centinaia di megabyte e un dump completo della memoria dopo una schermata blu può essere grande quanto la RAM in uso. Questa guida mostra dove si trova ogni tipo di file, cosa contiene, quando conviene conservarne uno e come rimuoverli in sicurezza."
      ],
      "sections": [
        {
          "title": "Cosa memorizza la Segnalazione errori di Windows",
          "content": [
            "Quando un programma va in crash, Windows raccoglie un piccolo report: nome e versione del programma, modulo che ha causato il guasto e spesso alcuni file aggiuntivi come un mini dump. Se lo consenti, il report viene inviato a Microsoft. Una copia resta sul tuo PC in una cartella che porta il nome dell'evento: in ReportArchive per i report inviati e in ReportQueue per quelli ancora in attesa.",
            "Ci sono due posizioni. I report dei tuoi programmi si trovano in %LOCALAPPDATA%\\Microsoft\\Windows\\WER, mentre quelli dei componenti di sistema in C:\\ProgramData\\Microsoft\\Windows\\WER. Ogni report pesa da pochi kilobyte a pochi megabyte, ma su un PC acceso da anni si accumulano.",
            "Windows non legge nulla di queste cartelle all'avvio né durante il funzionamento. L'unica cosa che perdi eliminando un report è la possibilità di consultare in seguito i dettagli di quel crash."
          ]
        },
        {
          "title": "Dump di crash: da dove arrivano e quanto diventano grandi",
          "content": [
            "Un dump di crash è un file con estensione .dmp che contiene un'istantanea della memoria al momento di un guasto. Ne incontrerai tre tipi. I dump dei programmi vengono scritti in %LOCALAPPDATA%\\CrashDumps quando un programma va in crash e la raccolta è attiva. I dump di memoria ridotti finiscono in C:\\Windows\\Minidump dopo una schermata blu. Un dump completo o del kernel viene scritto in C:\\Windows\\MEMORY.DMP.",
            "La dimensione dipende dal programma. Un editor di testo scrive un file piccolo, ma un browser, un gioco o un editor video possono scrivere un dump di diverse centinaia di megabyte, perché include la memoria che il programma stava usando. Un programma che va in crash di continuo, per esempio dopo un aggiornamento difettoso, può lasciarne decine.",
            "I dump sono pensati per sviluppatori o tecnici dell'assistenza che li caricano in un debugger. Se non hai intenzione di farlo, sono solo zavorra."
          ]
        },
        {
          "title": "Quando conviene conservare un dump",
          "content": [
            "Conserva il dump più recente se sei nel mezzo di un'indagine. Una schermata blu che si ripete o un programma che va in crash ogni giorno si diagnostica più facilmente avendo un dump a portata di mano, e l'assistenza potrebbe chiedertelo. Copia quel singolo file altrove, per esempio nella cartella Documenti, prima di pulire.",
            "Tutto il resto si può eliminare. Se un crash è stato un caso isolato e il programma funziona di nuovo, il dump del mese scorso non ha alcun valore. Lo stesso vale per i report in ReportArchive: descrivono eventi già inviati o già risolti.",
            "Una regola semplice: conserva al massimo un dump per ogni problema che stai indagando attivamente ed elimina il resto."
          ]
        },
        {
          "title": "Eliminare report e dump a mano",
          "content": [
            "Apri Esplora file e incolla ogni percorso nella barra degli indirizzi. In %LOCALAPPDATA%\\CrashDumps seleziona tutti i file ed eliminali. In %LOCALAPPDATA%\\Microsoft\\Windows\\WER apri ReportArchive e ReportQueue ed elimina il loro contenuto. Fai lo stesso in C:\\ProgramData\\Microsoft\\Windows\\WER, dove Windows potrebbe chiedere l'autorizzazione di amministratore. Elimina il contenuto, non le cartelle stesse.",
            "Per i dump delle schermate blu la via più semplice è Pulizia disco. Cercalo nel menu Start, scegli l'unità di sistema, seleziona Pulisci file di sistema e spunta File dump memoria per errori di sistema e File di segnalazione errori di Windows. In questo modo vengono eliminati insieme C:\\Windows\\MEMORY.DMP e la cartella Minidump.",
            "Se Windows dice che un file è in uso, saltalo. Un report che viene scritto proprio in quel momento sarà sparito al passaggio successivo."
          ]
        },
        {
          "title": "Pulisci tutto in un solo passaggio con Disk Mop",
          "content": [
            "La pagina Libera spazio di Disk Mop elenca Segnalazioni errori e Dump di crash come voci separate, con la loro dimensione e una breve spiegazione di cosa fa la pulizia. Segnalazioni errori comprende l'archivio e la coda dei report WER nel tuo profilo e in ProgramData. Dump di crash comprende %LOCALAPPDATA%\\CrashDumps e C:\\Windows\\Minidump.",
            "Avvia la scansione, seleziona le voci che vuoi e conferma. Disk Mop mostra ciò che ha trovato prima di eliminare qualsiasi cosa, e alcune voci, come quelle a livello di Windows, possono richiedere i diritti di amministratore. La scansione è gratuita, quindi puoi vedere quanto spazio occupano questi file prima di decidere. Disk Mop non rimuove C:\\Windows\\MEMORY.DMP; per quel file usa Pulizia disco.",
            "Se vuoi mantenere il PC pulito, lo strumento di pulizia pianificata può eseguire in background, a intervalli stabiliti, le voci sicure di Libera spazio."
          ]
        },
        {
          "title": "Se i crash continuano a ripresentarsi",
          "content": [
            "La pulizia rimuove soltanto le prove. Se lo stesso programma va in crash ogni settimana, cerca la causa. Aggiorna il programma e i driver della scheda grafica e dell'archiviazione, verifica che Windows sia completamente aggiornato e controlla lo stato del disco, perché un'unità difettosa può causare crash e schermate blu. Se i crash sono casuali, vale la pena eseguire un test della memoria.",
            "Aiuta anche mantenere spazio libero sull'unità di sistema. Windows ha bisogno di spazio per scrivere un dump e per eseguire gli aggiornamenti, e un'unità quasi piena fa fallire entrambe le operazioni in modi poco chiari."
          ]
        }
      ],
      "verdict": [
        "I file della Segnalazione errori di Windows e i dump di crash sono registrazioni di crash già avvenuti: dopo aver copiato a parte l'eventuale dump che vuoi analizzare, il resto si può eliminare senza rischi. Pulizia disco gestisce i dump delle schermate blu e le cartelle del tuo profilo si possono svuotare a mano.",
        "Disk Mop riunisce Segnalazioni errori e Dump di crash in un'unica scansione accanto a cache e file temporanei, mostra la dimensione di ciascuno e chiede conferma prima di eliminare. La scansione è gratuita, quindi puoi vedere quanto spazio occupano i vecchi crash prima di decidere di pulire."
      ],
      "ctaText": "Trova ed elimina segnalazioni errori e dump di crash con Disk Mop"
    },
    "pt": {
      "title": "Relatório de Erros do Windows e dumps de falhas: o que são e como excluí-los",
      "metaDescription": "Arquivos do Relatório de Erros do Windows e dumps de falhas podem ocupar gigabytes. Veja onde ficam, quais podem ser excluídos e como limpá-los passo a passo.",
      "subtitle": "Recupere espaço de relatórios de falhas antigos sem mexer em nada de que o Windows precisa",
      "keyTakeaways": [
        "O Relatório de Erros do Windows (WER) guarda uma pasta de relatório para cada falha enviada à Microsoft; relatórios antigos em ReportArchive e ReportQueue não servem mais para nada depois de enviados.",
        "Os dumps de falhas em %LOCALAPPDATA%\\CrashDumps e C:\\Windows\\Minidump são instantâneos da memória usados para depuração; um único arquivo pode chegar a centenas de megabytes, e excluí-los não afeta o funcionamento do Windows.",
        "Mantenha o dump mais recente apenas se você estiver investigando ativamente uma tela azul ou um programa que trava; caso contrário, apague todos."
      ],
      "dataTable": {
        "caption": "Onde o Windows guarda relatórios de erros e dumps de falhas",
        "columns": [
          "Item",
          "Local típico",
          "O que é",
          "É seguro excluir?"
        ],
        "rows": [
          [
            "Arquivo e fila de relatórios do WER (por usuário)",
            "ReportArchive e ReportQueue em %LOCALAPPDATA%\\Microsoft\\Windows\\WER",
            "Pastas com os detalhes de falhas e travamentos dos seus próprios programas",
            "Sim"
          ],
          [
            "Arquivo e fila de relatórios do WER (todos os usuários)",
            "ReportArchive e ReportQueue em C:\\ProgramData\\Microsoft\\Windows\\WER",
            "Os mesmos relatórios para componentes de todo o sistema",
            "Sim (podem ser necessários direitos de administrador)"
          ],
          [
            "Dumps de falhas de programas",
            "%LOCALAPPDATA%\\CrashDumps",
            "Arquivos .dmp gravados quando um programa falha",
            "Sim"
          ],
          [
            "Dumps de memória pequenos",
            "C:\\Windows\\Minidump",
            "Pequenos arquivos .dmp gravados após uma tela azul",
            "Sim, a menos que você esteja analisando uma tela azul"
          ],
          [
            "Dump de memória completo",
            "C:\\Windows\\MEMORY.DMP",
            "Um dump grande da memória do kernel após uma tela azul",
            "Sim, pela Limpeza de Disco ou manualmente"
          ]
        ]
      },
      "howTo": {
        "name": "Como excluir relatórios de erros do Windows e dumps de falhas",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Veja quanto espaço eles ocupam",
            "text": "Abra o Explorador de Arquivos e cole %LOCALAPPDATA%\\CrashDumps na barra de endereços. Clique com o botão direito na pasta, escolha Propriedades e anote o tamanho. Repita para %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Decida se você precisa do dump mais recente",
            "text": "Se um programa ou o Windows falhou hoje e você pretende investigar, copie primeiro o arquivo .dmp mais recente para outra pasta. Caso contrário, nada nessas pastas é necessário."
          },
          {
            "name": "Exclua o conteúdo, não as pastas",
            "text": "Selecione tudo dentro de CrashDumps, ReportArchive e ReportQueue e exclua. O Windows recria as pastas quando precisa delas. Ignore qualquer arquivo que o Windows informar que está em uso."
          },
          {
            "name": "Remova os dumps de tela azul",
            "text": "Execute a Limpeza de Disco, escolha Limpar arquivos do sistema e marque Arquivos de despejo de memória de erro do sistema e Arquivos do Relatório de Erros do Windows. Isso também remove C:\\Windows\\MEMORY.DMP e a pasta Minidump."
          },
          {
            "name": "Faça tudo de uma vez com o Disk Mop",
            "text": "Abra o Disk Mop, vá para Liberar espaço, execute a verificação e marque Relatórios de erros e Dumps de falhas. Revise os tamanhos e confirme; nada é excluído antes da sua confirmação."
          }
        ]
      },
      "faq": [
        {
          "question": "É seguro excluir os arquivos do Relatório de Erros do Windows?",
          "answer": "Sim. Os arquivos nas pastas ReportArchive e ReportQueue do WER são registros de falhas que já aconteceram. O Windows não precisa deles para funcionar, e excluí-los apenas remove o histórico que você poderia enviar à Microsoft ou a um desenvolvedor."
        },
        {
          "question": "Por que minha pasta CrashDumps está tão grande?",
          "answer": "Um dump de falha contém um instantâneo da memória do programa no momento em que ele falhou, então um programa que usava muita memória grava um arquivo grande. Um programa que falha repetidamente grava um novo dump a cada vez, e o Windows não os limpa sozinho."
        },
        {
          "question": "Excluir dumps de falhas impede falhas ou telas azuis?",
          "answer": "Não. Dumps são um subproduto da falha, não a causa. Excluí-los libera espaço, mas não muda nada sobre o motivo pelo qual um programa ou o Windows falhou. Se as falhas continuarem, corrija a causa: atualize os drivers e verifique a integridade do disco e da memória."
        },
        {
          "question": "Posso impedir que o Windows crie tantos dumps?",
          "answer": "Você pode reduzi-los. Em Propriedades do Sistema, Avançado, Inicialização e Recuperação, escolha um despejo de memória pequeno em vez de um completo, de modo que uma tela azul grave um arquivo pequeno. Os dumps de programas em CrashDumps só aparecem quando a coleta de dumps está habilitada para aquele programa."
        }
      ],
      "intro": [
        "O Relatório de Erros do Windows (WER) grava uma pasta de arquivos toda vez que um programa falha ou para de responder, e o Windows grava um dump de falha quando um programa ou o sistema falha. Relatórios e dumps antigos podem ser excluídos com segurança, pois são apenas o registro de algo que já aconteceu, e limpá-los leva poucos minutos: exclua o conteúdo das pastas WER e CrashDumps, execute a Limpeza de Disco para os dumps de tela azul ou use um limpador que faça tudo de uma vez.",
        "Em um PC que já falhou algumas vezes, esses arquivos são fáceis de esquecer. Um único dump de um navegador ou de um jogo pode pesar várias centenas de megabytes, e um dump de memória completo após uma tela azul pode ser tão grande quanto a RAM em uso. Este guia mostra onde cada tipo de arquivo fica, o que ele contém, quando você deve guardar um e como removê-los com segurança."
      ],
      "sections": [
        {
          "title": "O que o Relatório de Erros do Windows armazena",
          "content": [
            "Quando um programa falha, o Windows coleta um pequeno relatório: o nome e a versão do programa, o módulo que falhou e, muitas vezes, alguns arquivos extras, como um minidump. Se você permitir, o relatório é enviado à Microsoft. Uma cópia permanece no seu PC, em uma pasta com o nome do evento: em ReportArchive para relatórios enviados e em ReportQueue para os que ainda aguardam.",
            "Há dois locais. Os relatórios dos seus próprios programas ficam em %LOCALAPPDATA%\\Microsoft\\Windows\\WER, e os de componentes de todo o sistema ficam em C:\\ProgramData\\Microsoft\\Windows\\WER. Cada relatório ocupa de poucos kilobytes a alguns megabytes, mas eles se acumulam em um PC que funciona há anos.",
            "O Windows não lê nada dessas pastas ao iniciar nem durante o uso. A única coisa que você perde ao excluir um relatório é a possibilidade de consultar depois os detalhes daquela falha."
          ]
        },
        {
          "title": "Dumps de falhas: de onde vêm e quanto crescem",
          "content": [
            "Um dump de falha é um arquivo com a extensão .dmp que guarda um instantâneo da memória no momento em que algo falhou. Você encontrará três tipos. Dumps de programas são gravados em %LOCALAPPDATA%\\CrashDumps quando um programa falha e a coleta está ativada. Dumps de memória pequenos vão para C:\\Windows\\Minidump após uma tela azul. Um dump de memória completo ou do kernel é gravado em C:\\Windows\\MEMORY.DMP.",
            "O tamanho depende do programa. Um editor de texto grava um arquivo pequeno, mas um navegador, um jogo ou um editor de vídeo pode gravar um dump de várias centenas de megabytes, porque ele inclui a memória que o programa estava usando. Um programa que falha o tempo todo, por exemplo depois de uma atualização ruim, pode deixar dezenas deles.",
            "Os dumps são feitos para desenvolvedores ou engenheiros de suporte que os carregam em um depurador. Se você não vai fazer isso, eles são peso morto."
          ]
        },
        {
          "title": "Quando você deve guardar um dump",
          "content": [
            "Guarde o dump mais recente se estiver no meio de uma investigação. Uma tela azul que se repete ou um programa que falha todos os dias é mais fácil de diagnosticar com um dump em mãos, e o suporte pode pedi-lo. Copie esse arquivo para outro lugar, como a pasta Documentos, antes de limpar.",
            "Todo o resto pode ir embora. Se a falha foi um caso isolado e o programa voltou a funcionar, o dump do mês passado não tem valor algum. O mesmo vale para os relatórios em ReportArchive: eles descrevem eventos que já foram enviados ou já foram resolvidos.",
            "Uma regra simples: guarde no máximo um dump por problema que você esteja investigando ativamente e apague o restante."
          ]
        },
        {
          "title": "Excluir relatórios e dumps manualmente",
          "content": [
            "Abra o Explorador de Arquivos e cole cada caminho na barra de endereços. Em %LOCALAPPDATA%\\CrashDumps, selecione todos os arquivos e exclua. Em %LOCALAPPDATA%\\Microsoft\\Windows\\WER, abra ReportArchive e ReportQueue e exclua o conteúdo. Faça o mesmo em C:\\ProgramData\\Microsoft\\Windows\\WER, onde o Windows pode pedir permissão de administrador. Exclua o conteúdo, não as pastas em si.",
            "Para os dumps de tela azul, o caminho mais simples é a Limpeza de Disco. Procure por ela no menu Iniciar, escolha a unidade do sistema, selecione Limpar arquivos do sistema e marque Arquivos de despejo de memória de erro do sistema e Arquivos do Relatório de Erros do Windows. Isso limpa C:\\Windows\\MEMORY.DMP e a pasta Minidump juntos.",
            "Se o Windows disser que um arquivo está em uso, ignore-o. Um relatório que está sendo gravado agora terá sumido na próxima passada."
          ]
        },
        {
          "title": "Limpe tudo de uma vez com o Disk Mop",
          "content": [
            "A página Liberar espaço do Disk Mop lista Relatórios de erros e Dumps de falhas como itens separados, com o tamanho e uma breve explicação do que a limpeza faz. Relatórios de erros abrange o arquivo e a fila de relatórios do WER no seu perfil e em ProgramData. Dumps de falhas abrange %LOCALAPPDATA%\\CrashDumps e C:\\Windows\\Minidump.",
            "Execute a verificação, marque os itens que quiser e confirme. O Disk Mop mostra o que encontrou antes de excluir qualquer coisa, e alguns itens, como os de nível do Windows, podem pedir direitos de administrador. A verificação é gratuita, então você pode ver quanto espaço esses arquivos ocupam antes de decidir. O Disk Mop não remove C:\\Windows\\MEMORY.DMP; use a Limpeza de Disco para esse arquivo.",
            "Se quiser manter tudo limpo, a ferramenta de limpeza agendada pode executar em segundo plano, em um horário definido, os itens seguros de Liberar espaço."
          ]
        },
        {
          "title": "Se as falhas continuarem voltando",
          "content": [
            "A limpeza remove apenas as evidências. Se o mesmo programa falha toda semana, procure a causa. Atualize o programa e os drivers de vídeo e de armazenamento, confirme que o Windows está totalmente atualizado e verifique a integridade do disco, pois uma unidade com defeito pode causar falhas e telas azuis. Vale a pena executar um teste de memória se as falhas forem aleatórias.",
            "Também ajuda manter espaço livre na unidade do sistema. O Windows precisa de espaço para gravar um dump e para executar atualizações, e uma unidade quase cheia faz as duas coisas falharem de maneiras confusas."
          ]
        }
      ],
      "verdict": [
        "Os arquivos do Relatório de Erros do Windows e os dumps de falhas são registros de falhas que já aconteceram; por isso, depois de copiar à parte qualquer dump que queira investigar, o restante pode ser excluído com segurança. A Limpeza de Disco cuida dos dumps de tela azul, e as pastas do seu perfil podem ser esvaziadas manualmente.",
        "O Disk Mop reúne Relatórios de erros e Dumps de falhas em uma única verificação, ao lado de caches e arquivos temporários, mostra o tamanho de cada um e pergunta antes de excluir. A verificação é gratuita, então você pode ver quanto espaço as falhas antigas ocupam antes de decidir limpar."
      ],
      "ctaText": "Encontre e limpe relatórios de erros e dumps de falhas com o Disk Mop"
    },
    "ja": {
      "title": "Windows エラー報告とクラッシュダンプとは？削除方法を解説",
      "metaDescription": "Windows エラー報告のファイルやクラッシュダンプは数GBに達することも。保存場所、削除してよいもの、安全にクリーンアップする手順を解説します。",
      "subtitle": "Windows に必要なものには触れずに、古いクラッシュ レポートの容量を取り戻す",
      "keyTakeaways": [
        "Windows エラー報告 (WER) は、Microsoft に送信したクラッシュごとにレポート フォルダーを保存します。ReportArchive と ReportQueue にある古いレポートは、送信済みであれば不要です。",
        "%LOCALAPPDATA%\\CrashDumps と C:\\Windows\\Minidump にあるクラッシュダンプは、デバッグ用のメモリのスナップショットです。1 ファイルで数百 MB になることもありますが、削除しても Windows の動作には影響しません。",
        "最新のダンプを残すのは、ブルー スクリーンやクラッシュするプログラムを実際に調査している場合だけです。それ以外はすべて削除して問題ありません。"
      ],
      "dataTable": {
        "caption": "Windows がエラー報告とクラッシュダンプを保存する場所",
        "columns": [
          "項目",
          "主な保存場所",
          "内容",
          "削除しても安全か"
        ],
        "rows": [
          [
            "WER のレポート アーカイブとキュー (ユーザーごと)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER の ReportArchive と ReportQueue",
            "ご自身のプログラムのクラッシュやハングの詳細を含むフォルダー",
            "はい"
          ],
          [
            "WER のレポート アーカイブとキュー (全ユーザー)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER の ReportArchive と ReportQueue",
            "システム全体のコンポーネントに関する同様のレポート",
            "はい (管理者権限が必要な場合があります)"
          ],
          [
            "プログラムのクラッシュ ダンプ",
            "%LOCALAPPDATA%\\CrashDumps",
            "プログラムがクラッシュしたときに書き込まれる .dmp ファイル",
            "はい"
          ],
          [
            "小さなメモリ ダンプ",
            "C:\\Windows\\Minidump",
            "ブルー スクリーンの後に書き込まれる小さな .dmp ファイル",
            "はい (ブルー スクリーンを分析中の場合を除く)"
          ],
          [
            "完全メモリ ダンプ",
            "C:\\Windows\\MEMORY.DMP",
            "ブルー スクリーン後に作成されるカーネル メモリの大きなダンプ",
            "はい (ディスク クリーンアップまたは手動で)"
          ]
        ]
      },
      "howTo": {
        "name": "Windows エラー報告とクラッシュダンプを削除する方法",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "使用容量を確認する",
            "text": "エクスプローラーを開き、アドレス バーに %LOCALAPPDATA%\\CrashDumps を貼り付けます。フォルダーを右クリックして [プロパティ] を選び、サイズを確認します。%LOCALAPPDATA%\\Microsoft\\Windows\\WER でも同じ操作をします。"
          },
          {
            "name": "最新のダンプが必要か判断する",
            "text": "今日プログラムや Windows がクラッシュして原因を調べるつもりなら、先に最新の .dmp ファイルを別のフォルダーにコピーしておきます。そうでなければ、これらのフォルダーの中身はどれも不要です。"
          },
          {
            "name": "フォルダーではなく中身を削除する",
            "text": "CrashDumps、ReportArchive、ReportQueue の中身をすべて選択して削除します。フォルダーは必要になると Windows が再作成します。使用中と表示されたファイルはスキップしてください。"
          },
          {
            "name": "ブルー スクリーンのダンプを削除する",
            "text": "ディスク クリーンアップを起動し、[システム ファイルのクリーンアップ] を選んで、[システム エラー メモリ ダンプ ファイル] と [Windows エラー報告ファイル] にチェックを入れます。C:\\Windows\\MEMORY.DMP と Minidump フォルダーも一緒に削除されます。"
          },
          {
            "name": "Disk Mop で一度にまとめて削除する",
            "text": "Disk Mop を開いて [空き容量を増やす] に移動し、スキャンを実行して [エラー報告] と [クラッシュダンプ] にチェックを入れます。サイズを確認してから実行を確定してください。確定するまで何も削除されません。"
          }
        ]
      },
      "faq": [
        {
          "question": "Windows エラー報告のファイルを削除しても安全ですか？",
          "answer": "はい。WER の ReportArchive と ReportQueue フォルダーにあるファイルは、すでに起きたクラッシュの記録です。Windows の動作には必要なく、削除して失われるのは、Microsoft や開発者に送れる履歴だけです。"
        },
        {
          "question": "CrashDumps フォルダーがこんなに大きいのはなぜですか？",
          "answer": "クラッシュ ダンプには、プログラムが失敗した瞬間のメモリのスナップショットが含まれます。そのため、多くのメモリを使っていたプログラムは大きなファイルを書き込みます。繰り返しクラッシュするプログラムは毎回新しいダンプを書き込み、Windows はそれを自動では削除しません。"
        },
        {
          "question": "クラッシュ ダンプを削除すると、クラッシュやブルー スクリーンは止まりますか？",
          "answer": "いいえ。ダンプはクラッシュの副産物であり、原因ではありません。削除すると容量は空きますが、プログラムや Windows が失敗した理由は変わりません。クラッシュが続く場合は原因を解決してください。ドライバーの更新、ディスクとメモリの状態確認が有効です。"
        },
        {
          "question": "Windows がダンプを大量に作らないようにできますか？",
          "answer": "減らすことはできます。[システムのプロパティ] の [詳細設定]、[起動と回復] で、完全メモリ ダンプではなく最小メモリ ダンプを選ぶと、ブルー スクリーン時に書き込まれるファイルが小さくなります。CrashDumps のプログラム ダンプは、そのプログラムでダンプの収集が有効な場合にのみ作成されます。"
        }
      ],
      "intro": [
        "Windows エラー報告 (WER) は、プログラムがクラッシュしたり応答しなくなったりするたびにファイルのフォルダーを書き込み、プログラムやシステムが失敗すると Windows はクラッシュ ダンプを書き込みます。古いレポートやダンプは、すでに起きた出来事の記録にすぎないので、削除しても安全です。数分で片付きます。WER と CrashDumps フォルダーの中身を削除し、ブルー スクリーンのダンプにはディスク クリーンアップを使うか、すべてを一度に処理できるクリーナーを使いましょう。",
        "何度かクラッシュしたことのある PC では、これらのファイルは忘れられがちです。ブラウザーやゲームのダンプ 1 つで数百 MB になることがあり、ブルー スクリーン後の完全メモリ ダンプは、使用中の RAM と同じ大きさになる場合もあります。このガイドでは、各ファイルの保存場所、内容、残すべき場合、安全に削除する方法を説明します。"
      ],
      "sections": [
        {
          "title": "Windows エラー報告が保存するもの",
          "content": [
            "プログラムがクラッシュすると、Windows は小さなレポートを収集します。プログラム名とバージョン、失敗したモジュール、そしてミニ ダンプなどの追加ファイルが含まれることがよくあります。許可していれば、レポートは Microsoft に送信されます。コピーはイベント名のフォルダーとして PC に残り、送信済みのレポートは ReportArchive に、送信待ちのものは ReportQueue に入ります。",
            "保存場所は 2 か所あります。ご自身のプログラムのレポートは %LOCALAPPDATA%\\Microsoft\\Windows\\WER の下に、システム全体のコンポーネントのレポートは C:\\ProgramData\\Microsoft\\Windows\\WER の下にあります。1 件のレポートは数 KB から数 MB ほどですが、何年も使っている PC では積み重なります。",
            "Windows は起動時にも動作中にも、これらのフォルダーの内容を読み込みません。レポートを削除して失うのは、そのクラッシュの詳細を後から確認できなくなることだけです。"
          ]
        },
        {
          "title": "クラッシュ ダンプの出どころとサイズ",
          "content": [
            "クラッシュ ダンプは、何かが失敗した時点のメモリのスナップショットを保持する、拡張子 .dmp のファイルです。種類は 3 つあります。プログラム ダンプは、プログラムがクラッシュし、ダンプ収集が有効なときに %LOCALAPPDATA%\\CrashDumps に書き込まれます。小さなメモリ ダンプは、ブルー スクリーンの後に C:\\Windows\\Minidump に保存されます。完全メモリ ダンプまたはカーネル メモリ ダンプは C:\\Windows\\MEMORY.DMP に書き込まれます。",
            "サイズはプログラムによって異なります。テキスト エディターなら小さなファイルですが、ブラウザー、ゲーム、動画編集ソフトは、プログラムが使っていたメモリも含まれるため、数百 MB のダンプになることがあります。不具合のある更新の後などにクラッシュを繰り返すプログラムは、数十個ものダンプを残すことがあります。",
            "ダンプは、デバッガーに読み込んで調べる開発者やサポート担当者のためのものです。自分で調べる予定がなければ、ただの余分なファイルです。"
          ]
        },
        {
          "title": "ダンプを残すべきとき",
          "content": [
            "原因を調査している最中なら、最新のダンプを残してください。繰り返すブルー スクリーンや、毎日クラッシュするプログラムは、ダンプがあると診断しやすく、サポート担当者から提出を求められることもあります。クリーンアップの前に、そのファイル 1 つを [ドキュメント] フォルダーなど別の場所にコピーしておきましょう。",
            "それ以外はすべて削除して構いません。クラッシュが 1 回限りでプログラムが再び動くなら、先月のダンプには価値がありません。ReportArchive のレポートも同様で、すでに送信済みか解決済みの出来事を記録したものです。",
            "簡単なルールは、実際に調査している問題 1 件につき、残すダンプは多くても 1 つにして、残りは削除することです。"
          ]
        },
        {
          "title": "レポートとダンプを手動で削除する",
          "content": [
            "エクスプローラーを開き、各パスをアドレス バーに貼り付けます。%LOCALAPPDATA%\\CrashDumps ではすべてのファイルを選択して削除します。%LOCALAPPDATA%\\Microsoft\\Windows\\WER では ReportArchive と ReportQueue を開き、その中身を削除します。C:\\ProgramData\\Microsoft\\Windows\\WER でも同様に行います。ここでは Windows が管理者の許可を求めることがあります。削除するのは中身であり、フォルダー自体ではありません。",
            "ブルー スクリーンのダンプには、ディスク クリーンアップがもっとも簡単です。スタート メニューで検索し、システム ドライブを選んで [システム ファイルのクリーンアップ] を選び、[システム エラー メモリ ダンプ ファイル] と [Windows エラー報告ファイル] にチェックを入れます。C:\\Windows\\MEMORY.DMP と Minidump フォルダーがまとめて削除されます。",
            "Windows が使用中だと表示したファイルはスキップしてください。いままさに書き込まれているレポートは、次回の削除でなくなります。"
          ]
        },
        {
          "title": "Disk Mop で一度にクリーンアップする",
          "content": [
            "Disk Mop の [空き容量を増やす] ページでは、[エラー報告] と [クラッシュダンプ] が別々の項目として、サイズと、クリーンアップで何が行われるかの短い説明つきで表示されます。[エラー報告] は、プロファイル内と ProgramData にある WER のレポート アーカイブとキューが対象です。[クラッシュダンプ] は %LOCALAPPDATA%\\CrashDumps と C:\\Windows\\Minidump が対象です。",
            "スキャンを実行し、削除したい項目にチェックを入れて確定します。Disk Mop は削除する前に検出内容を表示し、Windows レベルの項目など一部は管理者権限を求めることがあります。スキャンは無料なので、削除を決める前にこれらのファイルがどれだけ容量を使っているか確認できます。Disk Mop は C:\\Windows\\MEMORY.DMP を削除しません。このファイルにはディスク クリーンアップを使ってください。",
            "きれいな状態を保ちたい場合は、スケジュール クリーンアップ ツールで、[空き容量を増やす] の安全な項目をスケジュールに沿ってバックグラウンドで実行できます。"
          ]
        },
        {
          "title": "クラッシュが繰り返し起きる場合",
          "content": [
            "クリーンアップで消えるのは証拠だけです。同じプログラムが毎週クラッシュするなら、原因を調べましょう。プログラム、グラフィックスとストレージのドライバーを更新し、Windows が最新であることを確認して、ディスクの状態を調べます。故障しかけたドライブはクラッシュやブルー スクリーンの原因になるためです。クラッシュが不規則に起きる場合は、メモリ テストの実行も有効です。",
            "システム ドライブに空き容量を確保しておくことも役立ちます。Windows はダンプの書き込みや更新の実行に空き容量を必要とし、ほぼ満杯のドライブではどちらも原因のわかりにくい形で失敗します。"
          ]
        }
      ],
      "verdict": [
        "Windows エラー報告のファイルとクラッシュ ダンプは、すでに起きたクラッシュの記録です。調査したいダンプを別の場所にコピーしたら、残りは安全に削除できます。ブルー スクリーンのダンプはディスク クリーンアップで処理でき、プロファイル内のフォルダーは手動で空にできます。",
        "Disk Mop は、[エラー報告] と [クラッシュダンプ] を、キャッシュや一時ファイルと並べて 1 回のスキャンで表示し、それぞれのサイズを示して、削除前に確認します。スキャンは無料なので、古いクラッシュがどれだけ容量を使っているかを見てから、クリーンアップするか決められます。"
      ],
      "ctaText": "Disk Mop でエラー報告とクラッシュダンプを見つけて削除"
    },
    "ko": {
      "title": "Windows 오류 보고와 크래시 덤프: 무엇이며 어떻게 삭제할까",
      "metaDescription": "Windows 오류 보고 파일과 크래시 덤프는 수 GB를 차지할 수 있습니다. 저장 위치, 삭제해도 되는 파일, 단계별 정리 방법을 알아보세요.",
      "subtitle": "Windows에 필요한 것은 건드리지 않고 오래된 크래시 보고서가 차지한 공간을 되찾으세요",
      "keyTakeaways": [
        "Windows 오류 보고(WER)는 Microsoft에 전송한 크래시마다 보고서 폴더를 저장합니다. ReportArchive와 ReportQueue에 있는 오래된 보고서는 전송이 끝난 뒤에는 쓸모가 없습니다.",
        "%LOCALAPPDATA%\\CrashDumps와 C:\\Windows\\Minidump의 크래시 덤프는 디버깅용 메모리 스냅샷입니다. 파일 하나가 수백 MB에 이르기도 하지만, 삭제해도 Windows 동작에는 영향이 없습니다.",
        "최신 덤프는 블루 스크린이나 충돌하는 프로그램을 직접 조사하는 중일 때만 보관하고, 그렇지 않다면 모두 삭제하세요."
      ],
      "dataTable": {
        "caption": "Windows가 오류 보고서와 크래시 덤프를 보관하는 위치",
        "columns": [
          "항목",
          "일반적인 위치",
          "설명",
          "삭제해도 안전한가요?"
        ],
        "rows": [
          [
            "WER 보고서 보관함 및 대기열(사용자별)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER의 ReportArchive 및 ReportQueue",
            "내 프로그램의 크래시와 응답 없음 상세 정보가 담긴 폴더",
            "예"
          ],
          [
            "WER 보고서 보관함 및 대기열(모든 사용자)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER의 ReportArchive 및 ReportQueue",
            "시스템 전반 구성 요소에 대한 동일한 보고서",
            "예(관리자 권한이 필요할 수 있음)"
          ],
          [
            "프로그램 크래시 덤프",
            "%LOCALAPPDATA%\\CrashDumps",
            "프로그램이 충돌할 때 기록되는 .dmp 파일",
            "예"
          ],
          [
            "작은 메모리 덤프",
            "C:\\Windows\\Minidump",
            "블루 스크린 후 기록되는 작은 .dmp 파일",
            "예, 블루 스크린을 분석 중이 아니라면"
          ],
          [
            "전체 메모리 덤프",
            "C:\\Windows\\MEMORY.DMP",
            "블루 스크린 후 생성되는 커널 메모리의 큰 덤프",
            "예, 디스크 정리 또는 수동으로"
          ]
        ]
      },
      "howTo": {
        "name": "Windows 오류 보고서와 크래시 덤프를 삭제하는 방법",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "차지하는 공간 확인하기",
            "text": "파일 탐색기를 열고 주소 표시줄에 %LOCALAPPDATA%\\CrashDumps를 붙여 넣습니다. 폴더를 마우스 오른쪽 단추로 클릭해 속성을 선택하고 크기를 확인하세요. %LOCALAPPDATA%\\Microsoft\\Windows\\WER도 같은 방법으로 확인합니다."
          },
          {
            "name": "최신 덤프가 필요한지 판단하기",
            "text": "오늘 프로그램이나 Windows가 충돌했고 원인을 조사할 계획이라면, 먼저 최신 .dmp 파일을 다른 폴더로 복사해 두세요. 그렇지 않다면 이 폴더들 안의 파일은 필요하지 않습니다."
          },
          {
            "name": "폴더가 아니라 내용을 삭제하기",
            "text": "CrashDumps, ReportArchive, ReportQueue 안의 모든 항목을 선택해 삭제합니다. 폴더는 필요할 때 Windows가 다시 만듭니다. 사용 중이라고 표시되는 파일은 건너뛰세요."
          },
          {
            "name": "블루 스크린 덤프 제거하기",
            "text": "디스크 정리를 실행하고 시스템 파일 정리를 선택한 다음 시스템 오류 메모리 덤프 파일과 Windows 오류 보고 파일을 선택합니다. C:\\Windows\\MEMORY.DMP와 Minidump 폴더도 함께 삭제됩니다."
          },
          {
            "name": "Disk Mop으로 한 번에 정리하기",
            "text": "Disk Mop을 열고 공간 확보로 이동해 검사를 실행한 뒤 오류 보고서와 크래시 덤프를 선택합니다. 크기를 확인하고 확정하세요. 확정하기 전에는 아무것도 삭제되지 않습니다."
          }
        ]
      },
      "faq": [
        {
          "question": "Windows 오류 보고 파일을 삭제해도 안전한가요?",
          "answer": "네. WER의 ReportArchive와 ReportQueue 폴더에 있는 파일은 이미 발생한 크래시의 기록입니다. Windows는 동작하는 데 이 파일이 필요하지 않으며, 삭제하면 Microsoft나 개발자에게 보낼 수 있는 이력만 사라집니다."
        },
        {
          "question": "CrashDumps 폴더가 왜 이렇게 큰가요?",
          "answer": "크래시 덤프에는 프로그램이 실패한 순간의 메모리 스냅샷이 들어 있어서, 메모리를 많이 쓰던 프로그램일수록 큰 파일이 만들어집니다. 반복해서 충돌하는 프로그램은 매번 새 덤프를 기록하며, Windows는 이를 스스로 정리하지 않습니다."
        },
        {
          "question": "크래시 덤프를 삭제하면 충돌이나 블루 스크린이 멈추나요?",
          "answer": "아니요. 덤프는 크래시의 원인이 아니라 부산물입니다. 삭제하면 공간은 확보되지만 프로그램이나 Windows가 실패한 이유는 달라지지 않습니다. 충돌이 계속된다면 원인을 해결하세요. 드라이버를 업데이트하고 디스크와 메모리 상태를 점검하는 것이 좋습니다."
        },
        {
          "question": "Windows가 덤프를 이렇게 많이 만들지 않게 할 수 있나요?",
          "answer": "줄일 수는 있습니다. 시스템 속성의 고급, 시작 및 복구에서 전체 메모리 덤프 대신 작은 메모리 덤프를 선택하면 블루 스크린 때 작은 파일이 기록됩니다. CrashDumps의 프로그램 덤프는 해당 프로그램에 덤프 수집이 사용하도록 설정된 경우에만 생성됩니다."
        }
      ],
      "intro": [
        "Windows 오류 보고(WER)는 프로그램이 충돌하거나 응답하지 않을 때마다 파일 폴더를 기록하고, 프로그램이나 시스템이 실패하면 Windows가 크래시 덤프를 기록합니다. 오래된 보고서와 덤프는 이미 일어난 일의 기록일 뿐이므로 삭제해도 안전하며, 정리하는 데는 몇 분이면 충분합니다. WER과 CrashDumps 폴더의 내용을 삭제하고, 블루 스크린 덤프는 디스크 정리로 처리하거나, 이 모든 것을 한 번에 처리하는 정리 도구를 사용하세요.",
        "몇 번 충돌한 적이 있는 PC에서는 이런 파일을 잊기 쉽습니다. 브라우저나 게임의 덤프 하나가 수백 MB가 될 수 있고, 블루 스크린 후의 전체 메모리 덤프는 사용 중이던 RAM만큼 커질 수 있습니다. 이 가이드에서는 각 파일의 위치와 내용, 보관해야 하는 경우, 안전하게 제거하는 방법을 설명합니다."
      ],
      "sections": [
        {
          "title": "Windows 오류 보고가 저장하는 것",
          "content": [
            "프로그램이 충돌하면 Windows는 작은 보고서를 수집합니다. 프로그램의 이름과 버전, 실패한 모듈, 그리고 미니 덤프 같은 추가 파일이 포함되는 경우가 많습니다. 허용하면 보고서가 Microsoft로 전송됩니다. 사본은 이벤트 이름이 붙은 폴더로 PC에 남으며, 전송된 보고서는 ReportArchive에, 아직 대기 중인 보고서는 ReportQueue에 들어갑니다.",
            "위치는 두 곳입니다. 내 프로그램의 보고서는 %LOCALAPPDATA%\\Microsoft\\Windows\\WER 아래에, 시스템 전반 구성 요소의 보고서는 C:\\ProgramData\\Microsoft\\Windows\\WER 아래에 있습니다. 보고서 하나는 몇 KB에서 몇 MB 정도지만, 수년간 사용한 PC에서는 계속 쌓입니다.",
            "Windows는 시작할 때나 실행 중에 이 폴더의 내용을 읽지 않습니다. 보고서를 삭제해서 잃는 것은 나중에 그 크래시의 상세 내용을 볼 수 없게 된다는 점뿐입니다."
          ]
        },
        {
          "title": "크래시 덤프: 만들어지는 이유와 크기",
          "content": [
            "크래시 덤프는 무언가 실패한 시점의 메모리 스냅샷을 담은 .dmp 확장명의 파일입니다. 세 가지 종류가 있습니다. 프로그램 덤프는 프로그램이 충돌하고 덤프 수집이 켜져 있을 때 %LOCALAPPDATA%\\CrashDumps에 기록됩니다. 작은 메모리 덤프는 블루 스크린 후 C:\\Windows\\Minidump에 저장됩니다. 전체 또는 커널 메모리 덤프는 C:\\Windows\\MEMORY.DMP에 기록됩니다.",
            "크기는 프로그램에 따라 다릅니다. 텍스트 편집기는 작은 파일을 만들지만, 브라우저나 게임, 동영상 편집기는 프로그램이 사용하던 메모리가 덤프에 포함되기 때문에 수백 MB의 덤프를 만들 수 있습니다. 잘못된 업데이트 이후처럼 계속 충돌하는 프로그램은 수십 개의 덤프를 남길 수 있습니다.",
            "덤프는 디버거에 불러와 분석하는 개발자나 지원 엔지니어를 위한 것입니다. 직접 분석할 계획이 없다면 불필요한 짐일 뿐입니다."
          ]
        },
        {
          "title": "덤프를 보관해야 하는 경우",
          "content": [
            "문제를 해결하는 중이라면 최신 덤프를 보관하세요. 반복되는 블루 스크린이나 매일 충돌하는 프로그램은 덤프가 있으면 진단하기 쉬우며, 지원 담당자가 요청할 수도 있습니다. 정리하기 전에 그 파일 하나를 문서 폴더 같은 다른 곳에 복사해 두세요.",
            "나머지는 모두 삭제해도 됩니다. 충돌이 일회성이었고 프로그램이 다시 잘 동작한다면, 지난달의 덤프는 아무 가치가 없습니다. ReportArchive의 보고서도 마찬가지로, 이미 전송되었거나 해결된 이벤트를 기록한 것입니다.",
            "간단한 기준은 이렇습니다. 직접 조사 중인 문제 하나당 덤프는 최대 한 개만 보관하고 나머지는 삭제하세요."
          ]
        },
        {
          "title": "보고서와 덤프를 수동으로 삭제하기",
          "content": [
            "파일 탐색기를 열고 각 경로를 주소 표시줄에 붙여 넣습니다. %LOCALAPPDATA%\\CrashDumps에서는 모든 파일을 선택해 삭제합니다. %LOCALAPPDATA%\\Microsoft\\Windows\\WER에서는 ReportArchive와 ReportQueue를 열고 그 안의 내용을 삭제합니다. C:\\ProgramData\\Microsoft\\Windows\\WER에서도 같은 작업을 하며, 이때 Windows가 관리자 권한을 요청할 수 있습니다. 폴더 자체가 아니라 내용을 삭제하세요.",
            "블루 스크린 덤프는 디스크 정리가 가장 간단한 방법입니다. 시작 메뉴에서 검색해 시스템 드라이브를 선택하고, 시스템 파일 정리를 선택한 다음 시스템 오류 메모리 덤프 파일과 Windows 오류 보고 파일을 선택하세요. C:\\Windows\\MEMORY.DMP와 Minidump 폴더가 함께 정리됩니다.",
            "Windows에서 파일이 사용 중이라고 하면 건너뛰세요. 지금 기록되고 있는 보고서는 다음 정리 때 사라집니다."
          ]
        },
        {
          "title": "Disk Mop으로 한 번에 정리하기",
          "content": [
            "Disk Mop의 공간 확보 페이지에는 오류 보고서와 크래시 덤프가 각각 별도 항목으로 표시되며, 크기와 정리 시 어떤 일이 일어나는지에 대한 짧은 설명이 함께 나옵니다. 오류 보고서는 내 프로필과 ProgramData에 있는 WER 보고서 보관함 및 대기열을 대상으로 합니다. 크래시 덤프는 %LOCALAPPDATA%\\CrashDumps와 C:\\Windows\\Minidump를 대상으로 합니다.",
            "검사를 실행하고 원하는 항목을 선택한 뒤 확정하세요. Disk Mop은 삭제하기 전에 찾은 내용을 보여 주며, Windows 수준 항목처럼 일부는 관리자 권한을 요청할 수 있습니다. 검사는 무료이므로 삭제를 결정하기 전에 이 파일들이 얼마나 공간을 차지하는지 확인할 수 있습니다. Disk Mop은 C:\\Windows\\MEMORY.DMP를 삭제하지 않으므로, 이 파일은 디스크 정리를 사용하세요.",
            "깨끗한 상태를 유지하고 싶다면, 예약 정리 도구가 공간 확보의 안전한 항목을 일정에 따라 백그라운드에서 실행할 수 있습니다."
          ]
        },
        {
          "title": "충돌이 계속 다시 발생한다면",
          "content": [
            "정리는 증거만 지울 뿐입니다. 같은 프로그램이 매주 충돌한다면 원인을 살펴보세요. 프로그램과 그래픽 및 저장소 드라이버를 업데이트하고, Windows가 완전히 최신 상태인지 확인하며, 디스크 상태를 점검하세요. 고장 나는 드라이브는 충돌과 블루 스크린을 일으킬 수 있기 때문입니다. 충돌이 불규칙하게 일어난다면 메모리 검사를 해 볼 만합니다.",
            "시스템 드라이브에 여유 공간을 남겨 두는 것도 도움이 됩니다. Windows는 덤프를 기록하고 업데이트를 실행하기 위해 공간이 필요하며, 거의 가득 찬 드라이브에서는 둘 다 원인을 알기 어려운 방식으로 실패합니다."
          ]
        }
      ],
      "verdict": [
        "Windows 오류 보고 파일과 크래시 덤프는 이미 일어난 크래시의 기록이므로, 조사하려는 덤프를 따로 복사해 둔 뒤에는 나머지를 안전하게 삭제할 수 있습니다. 블루 스크린 덤프는 디스크 정리로 처리하고, 프로필 안의 폴더는 직접 비울 수 있습니다.",
        "Disk Mop은 오류 보고서와 크래시 덤프를 캐시 및 임시 파일과 함께 한 번의 검사로 보여 주고, 각각의 크기를 표시하며, 삭제하기 전에 확인을 요청합니다. 검사는 무료이므로 정리를 결정하기 전에 오래된 크래시가 얼마나 공간을 차지하는지 확인할 수 있습니다."
      ],
      "ctaText": "Disk Mop으로 오류 보고서와 크래시 덤프 찾아서 정리하기"
    },
    "zh-Hans": {
      "title": "Windows 错误报告与崩溃转储：它们是什么，如何删除",
      "metaDescription": "Windows 错误报告文件和崩溃转储可能占用数 GB 空间。了解它们的位置、哪些可以安全删除，以及如何一步步清理并释放磁盘空间。",
      "subtitle": "在不影响 Windows 运行的前提下，回收旧崩溃报告占用的空间",
      "keyTakeaways": [
        "Windows 错误报告 (WER) 会为每次发送给 Microsoft 的崩溃保存一个报告文件夹；ReportArchive 和 ReportQueue 中的旧报告在发送完成后就没有用处了。",
        "%LOCALAPPDATA%\\CrashDumps 和 C:\\Windows\\Minidump 中的崩溃转储是用于调试的内存快照；单个文件可达数百 MB，删除它们不会影响 Windows 的运行。",
        "只有在正在排查蓝屏或反复崩溃的程序时，才需要保留最新的转储；否则可以全部清理。"
      ],
      "dataTable": {
        "caption": "Windows 保存错误报告和崩溃转储的位置",
        "columns": [
          "项目",
          "常见位置",
          "说明",
          "可以安全删除吗？"
        ],
        "rows": [
          [
            "WER 报告存档和队列（当前用户）",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER 下的 ReportArchive 和 ReportQueue",
            "包含你自己程序的崩溃和无响应详细信息的文件夹",
            "可以"
          ],
          [
            "WER 报告存档和队列（所有用户）",
            "C:\\ProgramData\\Microsoft\\Windows\\WER 下的 ReportArchive 和 ReportQueue",
            "系统级组件的同类报告",
            "可以（可能需要管理员权限）"
          ],
          [
            "程序崩溃转储",
            "%LOCALAPPDATA%\\CrashDumps",
            "程序崩溃时写入的 .dmp 文件",
            "可以"
          ],
          [
            "小内存转储",
            "C:\\Windows\\Minidump",
            "蓝屏后写入的小型 .dmp 文件",
            "可以，除非你正在分析蓝屏"
          ],
          [
            "完整内存转储",
            "C:\\Windows\\MEMORY.DMP",
            "蓝屏后生成的内核内存大型转储",
            "可以，通过磁盘清理或手动删除"
          ]
        ]
      },
      "howTo": {
        "name": "如何删除 Windows 错误报告和崩溃转储",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "查看它们占用的空间",
            "text": "打开文件资源管理器，将 %LOCALAPPDATA%\\CrashDumps 粘贴到地址栏。右键单击该文件夹，选择“属性”并记下大小。再对 %LOCALAPPDATA%\\Microsoft\\Windows\\WER 重复同样的操作。"
          },
          {
            "name": "决定是否需要保留最新的转储",
            "text": "如果今天有程序或 Windows 崩溃，而你打算排查原因，请先把最新的 .dmp 文件复制到其他文件夹。否则，这些文件夹中的内容都不需要。"
          },
          {
            "name": "删除内容，而不是文件夹",
            "text": "选中 CrashDumps、ReportArchive 和 ReportQueue 中的所有内容并删除。Windows 会在需要时重新创建这些文件夹。如果 Windows 提示某个文件正在使用，请跳过它。"
          },
          {
            "name": "删除蓝屏转储",
            "text": "运行磁盘清理，选择“清理系统文件”，然后勾选“系统错误内存转储文件”和“Windows 错误报告文件”。这样也会删除 C:\\Windows\\MEMORY.DMP 和 Minidump 文件夹。"
          },
          {
            "name": "用 Disk Mop 一次性完成",
            "text": "打开 Disk Mop，进入“释放空间”，运行扫描并勾选“错误报告”和“崩溃转储”。检查各项大小后确认；在你确认之前不会删除任何内容。"
          }
        ]
      },
      "faq": [
        {
          "question": "删除 Windows 错误报告文件安全吗？",
          "answer": "安全。WER 的 ReportArchive 和 ReportQueue 文件夹中的文件是已经发生的崩溃的记录。Windows 运行并不需要它们，删除后只是失去了可以发送给 Microsoft 或开发者的历史记录。"
        },
        {
          "question": "为什么我的 CrashDumps 文件夹这么大？",
          "answer": "崩溃转储包含程序失败那一刻的内存快照，因此占用大量内存的程序会写入很大的文件。反复崩溃的程序每次都会写入新的转储，而 Windows 不会自动清理它们。"
        },
        {
          "question": "删除崩溃转储能阻止崩溃或蓝屏吗？",
          "answer": "不能。转储是崩溃的副产品，而不是原因。删除它们可以释放空间，但不会改变程序或 Windows 失败的原因。如果崩溃持续发生，请解决根本原因：更新驱动程序，检查磁盘和内存的健康状况。"
        },
        {
          "question": "能让 Windows 少生成一些转储吗？",
          "answer": "可以减少。在“系统属性”的“高级”、“启动和恢复”中，选择小内存转储而不是完整转储，这样蓝屏时只会写入一个小文件。CrashDumps 中的程序转储只有在为该程序启用了转储收集时才会出现。"
        }
      ],
      "intro": [
        "每当程序崩溃或停止响应时，Windows 错误报告 (WER) 都会写入一个文件夹，而当程序或系统失败时，Windows 会写入崩溃转储。旧的报告和转储只是已发生事件的记录，因此可以放心删除，清理只需几分钟：删除 WER 和 CrashDumps 文件夹中的内容，用磁盘清理处理蓝屏转储，或使用一款能一次性完成所有操作的清理工具。",
        "在崩溃过几次的电脑上，这些文件很容易被忘记。浏览器或游戏的单个转储就可能有几百 MB，而蓝屏后的完整内存转储可能与正在使用的内存一样大。本指南介绍各类文件的位置、内容、何时应该保留，以及如何安全地删除它们。"
      ],
      "sections": [
        {
          "title": "Windows 错误报告会保存什么",
          "content": [
            "程序崩溃时，Windows 会收集一份小型报告：程序的名称和版本、失败的模块，通常还有一些额外文件，例如迷你转储。如果你允许，报告会发送给 Microsoft。副本会保留在你的电脑上，位于以事件命名的文件夹中：已发送的报告在 ReportArchive 中，仍在等待发送的在 ReportQueue 中。",
            "有两个位置。你自己程序的报告位于 %LOCALAPPDATA%\\Microsoft\\Windows\\WER，系统级组件的报告位于 C:\\ProgramData\\Microsoft\\Windows\\WER。每份报告只有几 KB 到几 MB，但在运行多年的电脑上会不断累积。",
            "Windows 在启动或运行时不会读取这些文件夹中的任何内容。删除报告唯一的损失，是以后无法再查看那次崩溃的详细信息。"
          ]
        },
        {
          "title": "崩溃转储：来源与大小",
          "content": [
            "崩溃转储是扩展名为 .dmp 的文件，保存了出现故障时的内存快照。你会遇到三种类型。程序转储在程序崩溃且转储收集已启用时写入 %LOCALAPPDATA%\\CrashDumps。小内存转储在蓝屏后保存到 C:\\Windows\\Minidump。完整或内核内存转储写入 C:\\Windows\\MEMORY.DMP。",
            "大小取决于程序。文本编辑器写入的文件很小，但浏览器、游戏或视频编辑器可能写入数百 MB 的转储，因为转储包含程序当时使用的内存。反复崩溃的程序，例如在一次有问题的更新之后，可能留下几十个转储。",
            "转储是给开发者或技术支持工程师用的，他们会把转储载入调试器分析。如果你不打算这样做，它们只是多余的负担。"
          ]
        },
        {
          "title": "什么时候应该保留转储",
          "content": [
            "如果正在排查问题，请保留最新的转储。反复出现的蓝屏，或每天都崩溃的程序，有转储在手会更容易诊断，技术支持人员也可能向你索要。清理之前，先把这一个文件复制到其他位置，例如“文档”文件夹。",
            "其余的都可以删除。如果崩溃只是偶发，程序已恢复正常，上个月的转储就没有任何价值。ReportArchive 中的报告也是如此：它们描述的是已经发送或已经解决的事件。",
            "一条简单的规则：对每个你正在积极调查的问题，最多保留一个转储，其余全部清理。"
          ]
        },
        {
          "title": "手动删除报告和转储",
          "content": [
            "打开文件资源管理器，把每个路径粘贴到地址栏。在 %LOCALAPPDATA%\\CrashDumps 中，选中所有文件并删除。在 %LOCALAPPDATA%\\Microsoft\\Windows\\WER 中，打开 ReportArchive 和 ReportQueue 并删除其中的内容。对 C:\\ProgramData\\Microsoft\\Windows\\WER 也做同样的操作，Windows 可能会要求管理员权限。请删除内容，而不是文件夹本身。",
            "对于蓝屏转储，最简单的方法是使用磁盘清理。在“开始”菜单中搜索它，选择系统盘，选择“清理系统文件”，然后勾选“系统错误内存转储文件”和“Windows 错误报告文件”。这会一并清除 C:\\Windows\\MEMORY.DMP 和 Minidump 文件夹。",
            "如果 Windows 提示某个文件正在使用，请跳过它。正在写入的报告会在下一次清理时消失。"
          ]
        },
        {
          "title": "用 Disk Mop 一次性清理",
          "content": [
            "Disk Mop 的“释放空间”页面将“错误报告”和“崩溃转储”分别列为独立项目，并显示各自的大小，以及清理会做什么的简短说明。“错误报告”涵盖你的用户配置文件和 ProgramData 中的 WER 报告存档与队列。“崩溃转储”涵盖 %LOCALAPPDATA%\\CrashDumps 和 C:\\Windows\\Minidump。",
            "运行扫描，勾选你想清理的项目并确认。Disk Mop 会在删除任何内容之前显示它找到的内容，而 Windows 级别等部分项目可能会要求管理员权限。扫描是免费的，因此你可以在决定之前先看看这些文件占用了多少空间。Disk Mop 不会删除 C:\\Windows\\MEMORY.DMP；该文件请使用磁盘清理。",
            "如果想让电脑保持整洁，计划清理工具可以按计划在后台运行“释放空间”中的安全项目。"
          ]
        },
        {
          "title": "如果崩溃一再出现",
          "content": [
            "清理只会删除证据。如果同一个程序每周都崩溃，就要查找原因。更新该程序以及显卡和存储驱动程序，确认 Windows 已完全更新，并检查磁盘健康状况，因为即将损坏的驱动器可能引发崩溃和蓝屏。如果崩溃是随机出现的，值得运行一次内存检测。",
            "在系统盘上保留可用空间也有帮助。Windows 需要空间来写入转储和运行更新，而接近写满的磁盘会让这两件事以令人困惑的方式失败。"
          ]
        }
      ],
      "verdict": [
        "Windows 错误报告文件和崩溃转储是已经发生的崩溃的记录，因此在你把想研究的转储复制出来之后，其余部分都可以安全删除。蓝屏转储可以用磁盘清理处理，用户配置文件中的文件夹可以手动清空。",
        "Disk Mop 会把“错误报告”和“崩溃转储”与缓存、临时文件放在同一次扫描中，显示每一项的大小，并在删除前征求你的确认。扫描是免费的，因此你可以先看看旧崩溃占用了多少空间，再决定是否清理。"
      ],
      "ctaText": "用 Disk Mop 查找并清理错误报告和崩溃转储"
    },
    "ar": {
      "title": "الإبلاغ عن الأخطاء في Windows وملفات تفريغ الأعطال: ما هي وكيف تحذفها",
      "metaDescription": "قد تشغل ملفات الإبلاغ عن الأخطاء في Windows وملفات تفريغ الأعطال غيغابايتات. اعرف أين تُحفظ وأيها يمكن حذفه بأمان، وكيف تمسحها خطوة بخطوة وبسهولة.",
      "subtitle": "استعد المساحة من تقارير الأعطال القديمة دون المساس بأي شيء يحتاجه Windows",
      "keyTakeaways": [
        "يخزّن الإبلاغ عن الأخطاء في Windows (WER) مجلد تقرير لكل عطل يُرسله إلى Microsoft؛ ولا فائدة من التقارير القديمة في ReportArchive وReportQueue بعد إرسالها.",
        "ملفات تفريغ الأعطال في %LOCALAPPDATA%\\CrashDumps وC:\\Windows\\Minidump هي لقطات من الذاكرة تُستخدم في تصحيح الأخطاء؛ وقد يصل حجم الملف الواحد إلى مئات الميغابايتات، ولا يؤثر حذفها في طريقة عمل Windows.",
        "احتفظ بأحدث ملف تفريغ فقط إذا كنت تعالج مشكلة شاشة زرقاء أو برنامجًا يتعطل بشكل فعلي؛ وإلا فامسحها كلها."
      ],
      "dataTable": {
        "caption": "أين يحتفظ Windows بتقارير الأخطاء وملفات تفريغ الأعطال",
        "columns": [
          "العنصر",
          "الموقع المعتاد",
          "ما هو",
          "هل يمكن حذفه بأمان؟"
        ],
        "rows": [
          [
            "أرشيف تقارير WER وقائمة الانتظار (لكل مستخدم)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive وReportQueue",
            "مجلدات فيها تفاصيل أعطال برامجك الخاصة وحالات توقفها عن الاستجابة",
            "نعم"
          ],
          [
            "أرشيف تقارير WER وقائمة الانتظار (لكل المستخدمين)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive وReportQueue",
            "التقارير نفسها لمكونات النظام المشتركة",
            "نعم (قد تحتاج إلى صلاحيات المسؤول)"
          ],
          [
            "ملفات تفريغ أعطال البرامج",
            "%LOCALAPPDATA%\\CrashDumps",
            "ملفات .dmp تُكتب عند تعطل أحد البرامج",
            "نعم"
          ],
          [
            "ملفات تفريغ الذاكرة الصغيرة",
            "C:\\Windows\\Minidump",
            "ملفات .dmp صغيرة تُكتب بعد ظهور شاشة زرقاء",
            "نعم، ما لم تكن تحلل شاشة زرقاء"
          ],
          [
            "ملف تفريغ الذاكرة الكامل",
            "C:\\Windows\\MEMORY.DMP",
            "ملف كبير لذاكرة النواة يُكتب بعد شاشة زرقاء",
            "نعم، عبر تنظيف القرص أو يدويًا"
          ]
        ]
      },
      "howTo": {
        "name": "كيفية حذف تقارير الأخطاء وملفات تفريغ الأعطال في Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "تحقق من المساحة التي تشغلها",
            "text": "افتح مستكشف الملفات والصق %LOCALAPPDATA%\\CrashDumps في شريط العنوان. انقر بزر الماوس الأيمن على المجلد واختر خصائص ودوّن الحجم. كرر الأمر مع %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "قرر هل تحتاج إلى أحدث ملف تفريغ",
            "text": "إذا تعطل برنامج أو Windows اليوم وتنوي فحص السبب، فانسخ أحدث ملف .dmp إلى مجلد آخر أولًا. وغير ذلك لا حاجة إلى أي شيء في هذه المجلدات."
          },
          {
            "name": "احذف المحتويات لا المجلدات",
            "text": "حدد كل ما بداخل CrashDumps وReportArchive وReportQueue واحذفه. يعيد Windows إنشاء المجلدات عند الحاجة إليها. تخطَّ أي ملف يبلغك Windows بأنه قيد الاستخدام."
          },
          {
            "name": "أزل ملفات تفريغ الشاشة الزرقاء",
            "text": "شغّل تنظيف القرص، واختر تنظيف ملفات النظام، ثم حدد ملفات تفريغ ذاكرة أخطاء النظام وملفات الإبلاغ عن الأخطاء في Windows. يؤدي هذا أيضًا إلى حذف C:\\Windows\\MEMORY.DMP ومجلد Minidump."
          },
          {
            "name": "أنجز كل شيء دفعة واحدة باستخدام Disk Mop",
            "text": "افتح Disk Mop، وانتقل إلى تحرير مساحة، وشغّل الفحص، ثم حدد تقارير الأخطاء وملفات تفريغ الأعطال. راجع الأحجام وأكّد؛ ولا يُحذف شيء قبل أن تؤكد."
          }
        ]
      },
      "faq": [
        {
          "question": "هل حذف ملفات الإبلاغ عن الأخطاء في Windows آمن؟",
          "answer": "نعم. الملفات الموجودة في مجلدي ReportArchive وReportQueue الخاصين بـ WER هي سجلات لأعطال حدثت بالفعل. لا يحتاج Windows إليها ليعمل، ولا يؤدي حذفها إلا إلى إزالة السجل الذي كان بإمكانك إرساله إلى Microsoft أو إلى مطوّر."
        },
        {
          "question": "لماذا مجلد CrashDumps كبير جدًا؟",
          "answer": "يحتوي ملف تفريغ العطل على لقطة من ذاكرة البرنامج لحظة فشله، لذا فإن البرنامج الذي يستهلك ذاكرة كبيرة يكتب ملفًا كبيرًا. والبرنامج الذي يتعطل مرارًا يكتب ملف تفريغ جديدًا في كل مرة، ولا ينظفها Windows من تلقاء نفسه."
        },
        {
          "question": "هل يوقف حذف ملفات تفريغ الأعطال الأعطال أو الشاشات الزرقاء؟",
          "answer": "لا. ملفات التفريغ ناتج جانبي للعطل وليست سببه. يؤدي حذفها إلى توفير مساحة لكنه لا يغيّر شيئًا في سبب فشل البرنامج أو Windows. وإذا استمرت الأعطال، فعالج السبب: حدّث برامج التشغيل، وافحص سلامة القرص والذاكرة."
        },
        {
          "question": "هل يمكنني منع Windows من إنشاء هذا العدد الكبير من ملفات التفريغ؟",
          "answer": "يمكنك تقليلها. من خصائص النظام، ثم متقدم، ثم بدء التشغيل والاسترداد، اختر تفريغ ذاكرة صغيرًا بدلًا من تفريغ كامل، فتكتب الشاشة الزرقاء ملفًا صغيرًا. أما ملفات تفريغ البرامج في CrashDumps فلا تظهر إلا إذا كان جمع ملفات التفريغ مفعّلًا لذلك البرنامج."
        }
      ],
      "intro": [
        "يكتب الإبلاغ عن الأخطاء في Windows (WER) مجلدًا من الملفات في كل مرة يتعطل فيها برنامج أو يتوقف عن الاستجابة، ويكتب Windows ملف تفريغ عطل عند فشل برنامج أو النظام. التقارير وملفات التفريغ القديمة آمنة للحذف لأنها مجرد سجل لشيء حدث بالفعل، ويستغرق مسحها دقائق قليلة: احذف محتويات مجلدي WER وCrashDumps، وشغّل تنظيف القرص لملفات تفريغ الشاشة الزرقاء، أو استخدم أداة تنظيف تفعل كل ذلك دفعة واحدة.",
        "على جهاز تعطل بضع مرات، يسهل نسيان هذه الملفات. فملف تفريغ واحد من متصفح أو لعبة قد يزن عدة مئات من الميغابايتات، وقد يبلغ حجم ملف تفريغ الذاكرة الكامل بعد شاشة زرقاء حجم ذاكرة RAM التي كانت قيد الاستخدام. يوضح هذا الدليل أين يوجد كل نوع من الملفات، وما يحتويه، ومتى ينبغي أن تحتفظ بأحدها، وكيف تزيلها بأمان."
      ],
      "sections": [
        {
          "title": "ما الذي يخزّنه الإبلاغ عن الأخطاء في Windows",
          "content": [
            "عندما يتعطل برنامج، يجمع Windows تقريرًا صغيرًا: اسم البرنامج وإصداره، والوحدة التي فشلت، وغالبًا بعض الملفات الإضافية مثل ملف تفريغ صغير. وإذا سمحت بذلك، يُرسل التقرير إلى Microsoft. وتبقى نسخة منه على جهازك في مجلد يحمل اسم الحدث، داخل ReportArchive للتقارير التي أُرسلت وReportQueue للتقارير التي لا تزال في الانتظار.",
            "هناك موقعان. تقع تقارير برامجك الخاصة تحت %LOCALAPPDATA%\\Microsoft\\Windows\\WER، وتقع تقارير مكونات النظام المشتركة تحت C:\\ProgramData\\Microsoft\\Windows\\WER. حجم كل تقرير بضعة كيلوبايتات إلى بضعة ميغابايتات، لكنها تتراكم على جهاز يعمل منذ سنوات.",
            "لا يقرأ Windows شيئًا من هذه المجلدات عند بدء التشغيل أو أثناء العمل. وكل ما تخسره بحذف تقرير هو إمكانية الاطلاع لاحقًا على تفاصيل ذلك العطل."
          ]
        },
        {
          "title": "ملفات تفريغ الأعطال: مصدرها وحجمها",
          "content": [
            "ملف تفريغ العطل هو ملف بامتداد .dmp يحتوي على لقطة من الذاكرة لحظة حدوث الفشل. وهناك ثلاثة أنواع ستصادفها. تُكتب ملفات تفريغ البرامج في %LOCALAPPDATA%\\CrashDumps عندما يتعطل برنامج ويكون جمع ملفات التفريغ مفعّلًا. وتُحفظ ملفات تفريغ الذاكرة الصغيرة في C:\\Windows\\Minidump بعد شاشة زرقاء. ويُكتب ملف تفريغ الذاكرة الكامل أو ذاكرة النواة في C:\\Windows\\MEMORY.DMP.",
            "يعتمد الحجم على البرنامج. يكتب محرر النصوص ملفًا صغيرًا، لكن المتصفح أو اللعبة أو محرر الفيديو قد يكتب ملف تفريغ بعدة مئات من الميغابايتات، لأن الملف يتضمن الذاكرة التي كان البرنامج يستخدمها. والبرنامج الذي يستمر في التعطل، مثلًا بعد تحديث معيب، قد يترك عشرات منها.",
            "ملفات التفريغ مخصصة للمطوّر أو مهندس الدعم الذي يحمّلها في أداة تصحيح الأخطاء. فإذا لم تكن ستفعل ذلك، فهي عبء لا فائدة منه."
          ]
        },
        {
          "title": "متى ينبغي أن تحتفظ بملف تفريغ",
          "content": [
            "احتفظ بأحدث ملف تفريغ إذا كنت في منتصف عملية استكشاف الأخطاء وإصلاحها. فالشاشة الزرقاء المتكررة أو البرنامج الذي يتعطل كل يوم أسهل تشخيصًا بوجود ملف تفريغ، وقد يطلبه منك موظف الدعم. انسخ هذا الملف إلى مكان آخر، مثل مجلد المستندات، قبل التنظيف.",
            "وكل ما عداه يمكن حذفه. إذا كان العطل حدثًا لمرة واحدة وعاد البرنامج إلى العمل، فلا قيمة لملف التفريغ من الشهر الماضي. وينطبق الأمر نفسه على التقارير في ReportArchive: فهي تصف أحداثًا أُرسلت بالفعل أو حُلّت بالفعل.",
            "قاعدة بسيطة: احتفظ بملف تفريغ واحد على الأكثر لكل مشكلة تحقق فيها فعليًا، وامسح الباقي."
          ]
        },
        {
          "title": "حذف التقارير وملفات التفريغ يدويًا",
          "content": [
            "افتح مستكشف الملفات والصق كل مسار في شريط العنوان. بالنسبة إلى %LOCALAPPDATA%\\CrashDumps، حدد كل الملفات واحذفها. وبالنسبة إلى %LOCALAPPDATA%\\Microsoft\\Windows\\WER، افتح ReportArchive وReportQueue واحذف محتوياتهما. افعل الشيء نفسه تحت C:\\ProgramData\\Microsoft\\Windows\\WER، حيث قد يطلب Windows إذن المسؤول. احذف المحتويات لا المجلدات نفسها.",
            "أبسط طريقة لملفات تفريغ الشاشة الزرقاء هي تنظيف القرص. ابحث عنه في قائمة ابدأ، واختر قرص النظام، ثم اختر تنظيف ملفات النظام وحدد ملفات تفريغ ذاكرة أخطاء النظام وملفات الإبلاغ عن الأخطاء في Windows. يمسح هذا C:\\Windows\\MEMORY.DMP ومجلد Minidump معًا.",
            "إذا أخبرك Windows بأن ملفًا قيد الاستخدام، فتخطَّه. فالتقرير الذي يُكتب الآن سيزول في المرة التالية."
          ]
        },
        {
          "title": "امسحها دفعة واحدة باستخدام Disk Mop",
          "content": [
            "تعرض صفحة تحرير مساحة في Disk Mop عنصري تقارير الأخطاء وملفات تفريغ الأعطال بشكل منفصل مع حجم كل منهما وشرح موجز لما يفعله التنظيف. تغطي تقارير الأخطاء أرشيف تقارير WER وقائمة الانتظار في ملفك الشخصي وفي ProgramData. وتغطي ملفات تفريغ الأعطال المسارين %LOCALAPPDATA%\\CrashDumps وC:\\Windows\\Minidump.",
            "شغّل الفحص، وحدد العناصر التي تريدها، ثم أكّد. يعرض Disk Mop ما وجده قبل أن يحذف أي شيء، وقد تطلب بعض العناصر، مثل تلك الخاصة بمستوى Windows، صلاحيات المسؤول. الفحص مجاني، لذا يمكنك معرفة المساحة التي تشغلها هذه الملفات قبل أن تقرر. لا يحذف Disk Mop الملف C:\\Windows\\MEMORY.DMP؛ استخدم تنظيف القرص لهذا الملف.",
            "إذا أردت أن يبقى الجهاز نظيفًا، فيمكن لأداة التنظيف المجدولة تشغيل العناصر الآمنة من تحرير مساحة في الخلفية وفق جدول زمني."
          ]
        },
        {
          "title": "إذا استمرت الأعطال في العودة",
          "content": [
            "التنظيف يزيل الأدلة فقط. فإذا كان البرنامج نفسه يتعطل كل أسبوع، فابحث عن السبب. حدّث البرنامج وبرامج تشغيل الرسومات والتخزين، وتأكد من أن Windows محدّث بالكامل، وافحص سلامة القرص، لأن القرص المعطوب قد يسبب أعطالًا وشاشات زرقاء. ويستحق اختبار الذاكرة أن يُجرى إذا كانت الأعطال عشوائية.",
            "ومن المفيد أيضًا ترك مساحة فارغة على قرص النظام. يحتاج Windows إلى مساحة لكتابة ملف التفريغ ولتشغيل التحديثات، والقرص الممتلئ تقريبًا يجعل كليهما يفشل بطرق محيّرة."
          ]
        }
      ],
      "verdict": [
        "ملفات الإبلاغ عن الأخطاء في Windows وملفات تفريغ الأعطال هي سجلات لأعطال حدثت بالفعل، لذا فبعد أن تنسخ جانبًا أي ملف تفريغ تريد فحصه، يمكن حذف الباقي بأمان. يتولى تنظيف القرص ملفات تفريغ الشاشة الزرقاء، ويمكن تفريغ المجلدات الموجودة في ملفك الشخصي يدويًا.",
        "يضع Disk Mop تقارير الأخطاء وملفات تفريغ الأعطال في فحص واحد بجانب ذاكرات التخزين المؤقت والملفات المؤقتة، ويعرض حجم كل منها ويسأل قبل أن يحذف. الفحص مجاني، لذا يمكنك معرفة المساحة التي تشغلها الأعطال القديمة قبل أن تقرر التنظيف."
      ],
      "ctaText": "اعثر على تقارير الأخطاء وملفات تفريغ الأعطال وامسحها باستخدام Disk Mop"
    },
    "he": {
      "title": "דיווח שגיאות של Windows וקובצי Dump של קריסות: מה הם ואיך מוחקים אותם",
      "metaDescription": "קובצי דיווח שגיאות של Windows וקובצי Dump של קריסות יכולים לתפוס גיגה-בייטים. כך תדעו איפה הם נמצאים, אילו בטוח למחוק, ואיך לנקות אותם שלב אחר שלב.",
      "subtitle": "קבלו בחזרה מקום מדוחות קריסה ישנים בלי לגעת בשום דבר ש-Windows צריך",
      "keyTakeaways": [
        "דיווח שגיאות של Windows (WER) שומר תיקיית דוח לכל קריסה שנשלחת ל-Microsoft; דוחות ישנים ב-ReportArchive וב-ReportQueue כבר אינם שימושיים אחרי שנשלחו.",
        "קובצי Dump של קריסות ב-%LOCALAPPDATA%\\CrashDumps וב-C:\\Windows\\Minidump הם תצלומי זיכרון לצורך ניפוי באגים; קובץ בודד יכול להגיע למאות מגה-בייטים, ומחיקתם אינה משפיעה על אופן הפעולה של Windows.",
        "שמרו את קובץ ה-Dump החדש ביותר רק אם אתם מטפלים כרגע במסך כחול או בתוכנה שקורסת; אחרת נקו את כולם."
      ],
      "dataTable": {
        "caption": "היכן Windows שומר דוחות שגיאה וקובצי Dump של קריסות",
        "columns": [
          "פריט",
          "מיקום אופייני",
          "מה זה",
          "בטוח למחוק?"
        ],
        "rows": [
          [
            "ארכיון ותור הדוחות של WER (לכל משתמש)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive ו-ReportQueue",
            "תיקיות עם פרטי קריסות ותקיעות של התוכנות שלכם",
            "כן"
          ],
          [
            "ארכיון ותור הדוחות של WER (כל המשתמשים)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive ו-ReportQueue",
            "אותם דוחות עבור רכיבי מערכת משותפים",
            "כן (ייתכן שיידרשו הרשאות מנהל)"
          ],
          [
            "קובצי Dump של קריסות תוכנה",
            "%LOCALAPPDATA%\\CrashDumps",
            "קובצי .dmp שנכתבים כשתוכנה קורסת",
            "כן"
          ],
          [
            "קובצי Dump קטנים של הזיכרון",
            "C:\\Windows\\Minidump",
            "קובצי .dmp קטנים שנכתבים אחרי מסך כחול",
            "כן, אלא אם אתם מנתחים מסך כחול"
          ],
          [
            "קובץ Dump מלא של הזיכרון",
            "C:\\Windows\\MEMORY.DMP",
            "קובץ Dump גדול של זיכרון הליבה אחרי מסך כחול",
            "כן, דרך ניקוי הדיסק או ידנית"
          ]
        ]
      },
      "howTo": {
        "name": "איך למחוק דוחות שגיאה וקובצי Dump של קריסות ב-Windows",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "בדקו כמה מקום הם תופסים",
            "text": "פתחו את סייר הקבצים והדביקו את %LOCALAPPDATA%\\CrashDumps בשורת הכתובת. לחצו לחיצה ימנית על התיקייה, בחרו מאפיינים ורשמו את הגודל. חזרו על הפעולה עבור %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "החליטו אם אתם צריכים את קובץ ה-Dump החדש ביותר",
            "text": "אם תוכנה או Windows קרסו היום ואתם מתכוונים לחקור את הנושא, העתיקו קודם את קובץ ה-.dmp החדש ביותר לתיקייה אחרת. אחרת, אין צורך בשום דבר שבתיקיות האלה."
          },
          {
            "name": "מחקו את התוכן ולא את התיקיות",
            "text": "בחרו את כל מה שבתוך CrashDumps, ReportArchive ו-ReportQueue ומחקו. Windows יוצר את התיקיות מחדש כשיש בהן צורך. דלגו על כל קובץ ש-Windows מדווח שהוא בשימוש."
          },
          {
            "name": "הסירו את קובצי ה-Dump של המסך הכחול",
            "text": "הפעילו את ניקוי הדיסק, בחרו ניקוי קובצי מערכת וסמנו קובצי Dump של זיכרון עבור שגיאות מערכת וקובצי דיווח על שגיאות של Windows. פעולה זו מסירה גם את C:\\Windows\\MEMORY.DMP ואת התיקייה Minidump."
          },
          {
            "name": "עשו הכול במעבר אחד עם Disk Mop",
            "text": "פתחו את Disk Mop, עברו אל פינוי מקום, הפעילו את הסריקה וסמנו דוחות שגיאה וקובצי זיכרון מקריסות. עברו על הגדלים ואשרו; שום דבר לא נמחק לפני שתאשרו."
          }
        ]
      },
      "faq": [
        {
          "question": "האם בטוח למחוק קובצי דיווח שגיאות של Windows?",
          "answer": "כן. הקבצים בתיקיות ReportArchive ו-ReportQueue של WER הם תיעוד של קריסות שכבר קרו. Windows לא צריך אותם כדי לפעול, והמחיקה מסירה רק את ההיסטוריה שאפשר היה לשלוח ל-Microsoft או למפתח."
        },
        {
          "question": "למה התיקייה CrashDumps כל כך גדולה?",
          "answer": "קובץ Dump של קריסה מכיל תצלום של זיכרון התוכנה ברגע שנכשלה, ולכן תוכנה שהשתמשה הרבה בזיכרון כותבת קובץ גדול. תוכנה שקורסת שוב ושוב כותבת קובץ Dump חדש בכל פעם, ו-Windows אינו מנקה אותם בעצמו."
        },
        {
          "question": "האם מחיקת קובצי Dump תפסיק קריסות או מסכים כחולים?",
          "answer": "לא. קובצי Dump הם תוצר לוואי של קריסה ולא הגורם לה. מחיקתם מפנה מקום אבל אינה משנה דבר בסיבה לכך שתוכנה או Windows נכשלו. אם הקריסות נמשכות, טפלו בגורם: עדכנו דרייברים ובדקו את תקינות הדיסק והזיכרון."
        },
        {
          "question": "אפשר למנוע מ-Windows ליצור כל כך הרבה קובצי Dump?",
          "answer": "אפשר להקטין את הכמות. תחת מאפייני מערכת, מתקדם, אתחול ושחזור, בחרו Dump זיכרון קטן במקום מלא, כך שמסך כחול יכתוב קובץ קטן. קובצי Dump של תוכנות ב-CrashDumps מופיעים רק כשאיסוף קובצי ה-Dump מופעל עבור אותה תוכנה."
        }
      ],
      "intro": [
        "דיווח שגיאות של Windows (WER) כותב תיקייה של קבצים בכל פעם שתוכנה קורסת או מפסיקה להגיב, ו-Windows כותב קובץ Dump של קריסה כשתוכנה או המערכת נכשלות. דוחות וקובצי Dump ישנים בטוחים למחיקה כי הם רק תיעוד של משהו שכבר קרה, והניקוי אורך כמה דקות: מוחקים את התוכן של התיקיות WER ו-CrashDumps, מפעילים את ניקוי הדיסק עבור קובצי ה-Dump של המסך הכחול, או משתמשים בכלי ניקוי שעושה הכול במעבר אחד.",
        "במחשב שקרס כמה פעמים קל לשכוח את הקבצים האלה. קובץ Dump בודד של דפדפן או משחק יכול לשקול כמה מאות מגה-בייטים, וקובץ Dump מלא של הזיכרון אחרי מסך כחול יכול להיות גדול כמו ה-RAM שהיה בשימוש. המדריך הזה מראה איפה נמצא כל סוג קובץ, מה הוא מכיל, מתי כדאי לשמור אחד, ואיך מסירים אותם בבטחה."
      ],
      "sections": [
        {
          "title": "מה דיווח שגיאות של Windows שומר",
          "content": [
            "כשתוכנה קורסת, Windows אוסף דוח קטן: שם התוכנה וגרסתה, המודול שנכשל, ולעיתים קרובות כמה קבצים נוספים כמו קובץ Dump קטן. אם אישרתם זאת, הדוח נשלח ל-Microsoft. עותק נשאר במחשב שלכם בתיקייה הנקראת על שם האירוע, בתוך ReportArchive עבור דוחות שנשלחו ובתוך ReportQueue עבור אלה שעדיין ממתינים.",
            "יש שני מקומות. דוחות של התוכנות שלכם נמצאים תחת %LOCALAPPDATA%\\Microsoft\\Windows\\WER, ודוחות של רכיבי מערכת משותפים נמצאים תחת C:\\ProgramData\\Microsoft\\Windows\\WER. כל דוח הוא רק כמה קילו-בייטים עד כמה מגה-בייטים, אבל הם מצטברים במחשב שפועל שנים.",
            "Windows לא קורא דבר מהתיקיות האלה בעת האתחול או בזמן הפעולה. כל מה שאתם מאבדים במחיקת דוח הוא היכולת לעיין בפרטי אותה קריסה בהמשך."
          ]
        },
        {
          "title": "קובצי Dump של קריסות: מניין הם באים וכמה הם גדלים",
          "content": [
            "קובץ Dump של קריסה הוא קובץ עם הסיומת .dmp שמכיל תצלום של הזיכרון ברגע שמשהו נכשל. יש שלושה סוגים שתפגשו. קובצי Dump של תוכנות נכתבים אל %LOCALAPPDATA%\\CrashDumps כשתוכנה קורסת ואיסוף קובצי ה-Dump מופעל. קובצי Dump קטנים של הזיכרון נכתבים אל C:\\Windows\\Minidump אחרי מסך כחול. קובץ Dump מלא או של זיכרון הליבה נכתב אל C:\\Windows\\MEMORY.DMP.",
            "הגודל תלוי בתוכנה. עורך טקסט כותב קובץ קטן, אבל דפדפן, משחק או עורך וידאו יכולים לכתוב קובץ Dump של כמה מאות מגה-בייטים, כי הוא כולל את הזיכרון שהתוכנה השתמשה בו. תוכנה שממשיכה לקרוס, למשל אחרי עדכון פגום, יכולה להשאיר עשרות כאלה.",
            "קובצי Dump מיועדים למפתח או למהנדס תמיכה שטוענים אותם לכלי ניפוי באגים. אם אינכם עומדים לעשות זאת, הם רק משקל מת."
          ]
        },
        {
          "title": "מתי כדאי לשמור קובץ Dump",
          "content": [
            "שמרו את קובץ ה-Dump החדש ביותר אם אתם באמצע תהליך איתור תקלות. מסך כחול שחוזר או תוכנה שקורסת כל יום קל יותר לאבחון כשיש קובץ Dump ביד, ואיש תמיכה עשוי לבקש אותו. העתיקו את הקובץ הזה למקום אחר, כמו תיקיית המסמכים, לפני הניקוי.",
            "כל השאר אפשר למחוק. אם הקריסה הייתה חד-פעמית והתוכנה פועלת שוב, קובץ ה-Dump מהחודש שעבר חסר ערך. כך גם לגבי דוחות ב-ReportArchive: הם מתארים אירועים שכבר נשלחו או שכבר נפתרו.",
            "כלל פשוט: שמרו לכל היותר קובץ Dump אחד לכל בעיה שאתם חוקרים כרגע, ונקו את השאר."
          ]
        },
        {
          "title": "מחיקת דוחות וקובצי Dump ידנית",
          "content": [
            "פתחו את סייר הקבצים והדביקו כל נתיב בשורת הכתובת. עבור %LOCALAPPDATA%\\CrashDumps, בחרו את כל הקבצים ומחקו. עבור %LOCALAPPDATA%\\Microsoft\\Windows\\WER, פתחו את ReportArchive ואת ReportQueue ומחקו את התוכן שלהם. עשו אותו דבר תחת C:\\ProgramData\\Microsoft\\Windows\\WER, שם Windows עשוי לבקש הרשאת מנהל. מחקו את התוכן ולא את התיקיות עצמן.",
            "לקובצי ה-Dump של המסך הכחול הדרך הפשוטה ביותר היא ניקוי הדיסק. חפשו אותו בתפריט התחלה, בחרו את כונן המערכת, בחרו ניקוי קובצי מערכת וסמנו קובצי Dump של זיכרון עבור שגיאות מערכת וקובצי דיווח על שגיאות של Windows. כך מנוקים יחד C:\\Windows\\MEMORY.DMP והתיקייה Minidump.",
            "אם Windows אומר שקובץ בשימוש, דלגו עליו. דוח שנכתב ברגע זה ייעלם במעבר הבא."
          ]
        },
        {
          "title": "נקו הכול במעבר אחד עם Disk Mop",
          "content": [
            "בעמוד פינוי מקום של Disk Mop מופיעים דוחות שגיאה וקובצי זיכרון מקריסות כפריטים נפרדים, עם הגודל שלהם והסבר קצר על מה שהניקוי עושה. דוחות שגיאה מכסים את ארכיון ותור הדוחות של WER בפרופיל שלכם וב-ProgramData. קובצי זיכרון מקריסות מכסים את %LOCALAPPDATA%\\CrashDumps ואת C:\\Windows\\Minidump.",
            "הפעילו את הסריקה, סמנו את הפריטים הרצויים ואשרו. Disk Mop מציג את מה שמצא לפני שהוא מוחק משהו, ופריטים מסוימים, כמו אלה ברמת Windows, עשויים לבקש הרשאות מנהל. הסריקה חינמית, כך שאפשר לראות כמה מקום הקבצים האלה תופסים לפני שמחליטים. Disk Mop אינו מסיר את C:\\Windows\\MEMORY.DMP; השתמשו בניקוי הדיסק עבור הקובץ הזה.",
            "אם רוצים שהמחשב יישאר נקי, כלי הניקוי המתוזמן יכול להריץ ברקע, לפי לוח זמנים, את הפריטים הבטוחים של פינוי מקום."
          ]
        },
        {
          "title": "אם הקריסות ממשיכות לחזור",
          "content": [
            "ניקוי מסיר רק את הראיות. אם אותה תוכנה קורסת כל שבוע, חפשו את הסיבה. עדכנו את התוכנה ואת דרייברי הגרפיקה והאחסון, ודאו ש-Windows מעודכן במלואו, ובדקו את תקינות הדיסק, כי כונן כושל יכול לגרום לקריסות ולמסכים כחולים. כדאי להריץ בדיקת זיכרון אם הקריסות אקראיות.",
            "כדאי גם להשאיר מקום פנוי בכונן המערכת. Windows צריך מקום כדי לכתוב קובץ Dump וכדי להריץ עדכונים, וכונן כמעט מלא גורם לשניהם להיכשל בדרכים מבלבלות."
          ]
        }
      ],
      "verdict": [
        "קובצי דיווח שגיאות של Windows וקובצי Dump של קריסות הם תיעוד של קריסות שכבר קרו, ולכן אחרי שהעתקתם הצידה כל קובץ Dump שברצונכם לחקור, בטוח למחוק את השאר. ניקוי הדיסק מטפל בקובצי ה-Dump של המסך הכחול, ואת התיקיות בפרופיל שלכם אפשר לרוקן ידנית.",
        "Disk Mop מכניס דוחות שגיאה וקובצי זיכרון מקריסות לסריקה אחת לצד מטמונים וקבצים זמניים, מציג את הגודל של כל אחד ושואל לפני שהוא מוחק. הסריקה חינמית, כך שאפשר לראות כמה מקום תופסות קריסות ישנות לפני שמחליטים לנקות."
      ],
      "ctaText": "מצאו ונקו דוחות שגיאה וקובצי זיכרון מקריסות עם Disk Mop"
    },
    "id": {
      "title": "Windows Error Reporting dan Dump Crash: Apa Itu dan Cara Menghapusnya",
      "metaDescription": "File Windows Error Reporting dan dump crash bisa memakan banyak GB. Cari tahu lokasinya, mana yang aman dihapus, dan cara membersihkannya langkah demi langkah.",
      "subtitle": "Dapatkan kembali ruang dari laporan crash lama tanpa menyentuh apa pun yang dibutuhkan Windows",
      "keyTakeaways": [
        "Windows Error Reporting (WER) menyimpan satu folder laporan untuk setiap crash yang dikirim ke Microsoft; laporan lama di ReportArchive dan ReportQueue tidak berguna lagi setelah terkirim.",
        "Dump crash di %LOCALAPPDATA%\\CrashDumps dan C:\\Windows\\Minidump adalah rekaman memori untuk debugging; satu file bisa mencapai ratusan megabyte, dan menghapusnya tidak memengaruhi cara kerja Windows.",
        "Simpan dump terbaru hanya jika Anda sedang memecahkan masalah blue screen atau program yang terus crash; selain itu, bersihkan semuanya."
      ],
      "dataTable": {
        "caption": "Tempat Windows menyimpan laporan kesalahan dan dump crash",
        "columns": [
          "Item",
          "Lokasi umum",
          "Apa itu",
          "Aman dihapus?"
        ],
        "rows": [
          [
            "Arsip dan antrean laporan WER (per pengguna)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive dan ReportQueue",
            "Folder berisi detail crash dan hang dari program Anda sendiri",
            "Ya"
          ],
          [
            "Arsip dan antrean laporan WER (semua pengguna)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive dan ReportQueue",
            "Laporan yang sama untuk komponen sistem",
            "Ya (mungkin perlu hak administrator)"
          ],
          [
            "Dump crash program",
            "%LOCALAPPDATA%\\CrashDumps",
            "File .dmp yang ditulis saat sebuah program crash",
            "Ya"
          ],
          [
            "Dump memori kecil",
            "C:\\Windows\\Minidump",
            "File .dmp kecil yang ditulis setelah blue screen",
            "Ya, kecuali Anda sedang menganalisis blue screen"
          ],
          [
            "Dump memori penuh",
            "C:\\Windows\\MEMORY.DMP",
            "Dump besar dari memori kernel setelah blue screen",
            "Ya, lewat Pembersihan Disk atau secara manual"
          ]
        ]
      },
      "howTo": {
        "name": "Cara menghapus laporan kesalahan Windows dan dump crash",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Periksa berapa banyak ruang yang dipakai",
            "text": "Buka File Explorer dan tempel %LOCALAPPDATA%\\CrashDumps ke bilah alamat. Klik kanan folder tersebut, pilih Properti, lalu catat ukurannya. Ulangi untuk %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Putuskan apakah Anda masih butuh dump terbaru",
            "text": "Jika sebuah program atau Windows crash hari ini dan Anda berencana menelusurinya, salin dulu file .dmp terbaru ke folder lain. Jika tidak, tidak ada isi folder-folder ini yang diperlukan."
          },
          {
            "name": "Hapus isinya, bukan foldernya",
            "text": "Pilih semua isi CrashDumps, ReportArchive, dan ReportQueue lalu hapus. Windows membuat ulang folder tersebut saat dibutuhkan. Lewati file yang dilaporkan Windows sedang digunakan."
          },
          {
            "name": "Hapus dump blue screen",
            "text": "Jalankan Pembersihan Disk, pilih Bersihkan file sistem, lalu centang File dump memori kesalahan sistem dan File Pelaporan Kesalahan Windows. Ini juga menghapus C:\\Windows\\MEMORY.DMP dan folder Minidump."
          },
          {
            "name": "Selesaikan sekaligus dengan Disk Mop",
            "text": "Buka Disk Mop, masuk ke Kosongkan ruang, jalankan pemindaian, lalu centang Laporan kesalahan dan Dump crash. Tinjau ukurannya dan konfirmasi; tidak ada yang dihapus sebelum Anda mengonfirmasi."
          }
        ]
      },
      "faq": [
        {
          "question": "Apakah aman menghapus file Windows Error Reporting?",
          "answer": "Ya. File di folder ReportArchive dan ReportQueue milik WER adalah catatan crash yang sudah terjadi. Windows tidak membutuhkannya untuk berjalan, dan menghapusnya hanya menghilangkan riwayat yang bisa Anda kirim ke Microsoft atau pengembang."
        },
        {
          "question": "Mengapa folder CrashDumps saya sangat besar?",
          "answer": "Dump crash berisi rekaman memori program pada saat program itu gagal, jadi program yang memakai banyak memori menulis file besar. Program yang crash berulang kali menulis dump baru setiap kali, dan Windows tidak membersihkannya sendiri."
        },
        {
          "question": "Apakah menghapus dump crash akan menghentikan crash atau blue screen?",
          "answer": "Tidak. Dump adalah produk sampingan dari crash, bukan penyebabnya. Menghapusnya membebaskan ruang tetapi tidak mengubah alasan program atau Windows gagal. Jika crash terus terjadi, atasi penyebabnya: perbarui driver, periksa kesehatan disk dan memori."
        },
        {
          "question": "Bisakah saya mencegah Windows membuat begitu banyak dump?",
          "answer": "Anda bisa menguranginya. Di Properti Sistem, Tingkat Lanjut, Startup dan Pemulihan, pilih dump memori kecil, bukan dump lengkap, sehingga blue screen hanya menulis file kecil. Dump program di CrashDumps hanya muncul jika pengumpulan dump diaktifkan untuk program tersebut."
        }
      ],
      "intro": [
        "Windows Error Reporting (WER) menulis satu folder berisi file setiap kali sebuah program crash atau berhenti merespons, dan Windows menulis dump crash saat program atau sistem gagal. Laporan dan dump lama aman dihapus karena hanya berupa catatan dari sesuatu yang sudah terjadi, dan membersihkannya hanya butuh beberapa menit: hapus isi folder WER dan CrashDumps, jalankan Pembersihan Disk untuk dump blue screen, atau gunakan pembersih yang mengerjakan semuanya sekaligus.",
        "Di PC yang sudah beberapa kali crash, file-file ini mudah terlupakan. Satu dump dari browser atau game bisa berukuran beberapa ratus megabyte, dan dump memori penuh setelah blue screen bisa sebesar RAM yang sedang digunakan. Panduan ini menunjukkan di mana setiap jenis file berada, apa isinya, kapan Anda sebaiknya menyimpannya, dan cara menghapusnya dengan aman."
      ],
      "sections": [
        {
          "title": "Apa yang Disimpan Windows Error Reporting",
          "content": [
            "Saat sebuah program crash, Windows mengumpulkan laporan kecil: nama dan versi program, modul yang gagal, dan sering kali beberapa file tambahan seperti mini dump. Jika Anda mengizinkan, laporan dikirim ke Microsoft. Salinannya tetap ada di PC Anda dalam folder yang dinamai sesuai kejadian, di dalam ReportArchive untuk laporan yang sudah terkirim dan ReportQueue untuk yang masih menunggu.",
            "Ada dua lokasi. Laporan untuk program Anda sendiri berada di %LOCALAPPDATA%\\Microsoft\\Windows\\WER, dan laporan untuk komponen sistem berada di C:\\ProgramData\\Microsoft\\Windows\\WER. Setiap laporan hanya berukuran beberapa kilobyte hingga beberapa megabyte, tetapi jumlahnya menumpuk di PC yang sudah bertahun-tahun digunakan.",
            "Tidak ada isi folder ini yang dibaca Windows saat mulai atau berjalan. Satu-satunya yang hilang jika Anda menghapus laporan adalah kemampuan melihat detail crash tersebut di kemudian hari."
          ]
        },
        {
          "title": "Dump Crash: Dari Mana Asalnya dan Seberapa Besar",
          "content": [
            "Dump crash adalah file berekstensi .dmp yang menyimpan rekaman memori saat sesuatu gagal. Ada tiga jenis yang akan Anda temui. Dump program ditulis ke %LOCALAPPDATA%\\CrashDumps saat program crash dan pengumpulan dump aktif. Dump memori kecil masuk ke C:\\Windows\\Minidump setelah blue screen. Dump memori penuh atau kernel ditulis ke C:\\Windows\\MEMORY.DMP.",
            "Ukurannya bergantung pada program. Editor teks menulis file kecil, tetapi browser, game, atau editor video bisa menulis dump beberapa ratus megabyte, karena dump menyertakan memori yang sedang dipakai program. Program yang terus crash, misalnya setelah pembaruan yang bermasalah, bisa meninggalkan puluhan file.",
            "Dump ditujukan bagi pengembang atau teknisi dukungan yang memuatnya ke debugger. Jika Anda tidak akan melakukan itu, file-file ini hanya beban."
          ]
        },
        {
          "title": "Kapan Anda Sebaiknya Menyimpan Dump",
          "content": [
            "Simpan dump terbaru jika Anda sedang di tengah proses pemecahan masalah. Blue screen yang berulang, atau program yang crash setiap hari, lebih mudah didiagnosis dengan adanya dump, dan petugas dukungan mungkin memintanya. Salin satu file itu ke tempat lain, misalnya folder Dokumen, sebelum Anda membersihkan.",
            "Sisanya boleh dihapus. Jika crash hanya terjadi sekali dan program sudah bekerja lagi, dump bulan lalu tidak ada nilainya. Hal yang sama berlaku untuk laporan di ReportArchive: laporan itu menggambarkan kejadian yang sudah terkirim atau sudah teratasi.",
            "Aturan sederhana: simpan paling banyak satu dump untuk setiap masalah yang sedang Anda selidiki, dan bersihkan sisanya."
          ]
        },
        {
          "title": "Hapus Laporan dan Dump Secara Manual",
          "content": [
            "Buka File Explorer dan tempel setiap jalur ke bilah alamat. Untuk %LOCALAPPDATA%\\CrashDumps, pilih semua file lalu hapus. Untuk %LOCALAPPDATA%\\Microsoft\\Windows\\WER, buka ReportArchive dan ReportQueue lalu hapus isinya. Lakukan hal yang sama di C:\\ProgramData\\Microsoft\\Windows\\WER, tempat Windows mungkin meminta izin administrator. Hapus isinya, bukan foldernya.",
            "Untuk dump blue screen, cara termudah adalah Pembersihan Disk. Cari di menu Start, pilih drive sistem Anda, pilih Bersihkan file sistem, lalu centang File dump memori kesalahan sistem dan File Pelaporan Kesalahan Windows. Ini membersihkan C:\\Windows\\MEMORY.DMP dan folder Minidump sekaligus.",
            "Jika Windows menyatakan sebuah file sedang digunakan, lewati saja. Laporan yang sedang ditulis saat ini akan hilang pada pembersihan berikutnya."
          ]
        },
        {
          "title": "Bersihkan Sekaligus dengan Disk Mop",
          "content": [
            "Halaman Kosongkan ruang di Disk Mop menampilkan Laporan kesalahan dan Dump crash sebagai item terpisah lengkap dengan ukuran dan penjelasan singkat tentang apa yang dilakukan pembersihan. Laporan kesalahan mencakup arsip dan antrean laporan WER di profil Anda dan di ProgramData. Dump crash mencakup %LOCALAPPDATA%\\CrashDumps dan C:\\Windows\\Minidump.",
            "Jalankan pemindaian, centang item yang Anda inginkan, lalu konfirmasi. Disk Mop menampilkan apa yang ditemukannya sebelum menghapus apa pun, dan sebagian item, seperti yang berada di tingkat Windows, mungkin meminta hak administrator. Pemindaian gratis, jadi Anda bisa melihat berapa banyak ruang yang dipakai file-file ini sebelum memutuskan. Disk Mop tidak menghapus C:\\Windows\\MEMORY.DMP; gunakan Pembersihan Disk untuk file itu.",
            "Jika ingin PC tetap bersih, alat pembersihan terjadwal dapat menjalankan item aman dari Kosongkan ruang di latar belakang sesuai jadwal."
          ]
        },
        {
          "title": "Jika Crash Terus Berulang",
          "content": [
            "Pembersihan hanya menghapus buktinya. Jika program yang sama crash setiap minggu, periksa penyebabnya. Perbarui program serta driver grafis dan penyimpanan Anda, pastikan Windows sudah diperbarui sepenuhnya, dan periksa kesehatan disk, karena drive yang rusak bisa memicu crash dan blue screen. Uji memori layak dijalankan jika crash terjadi secara acak.",
            "Menyisakan ruang kosong di drive sistem juga membantu. Windows butuh ruang untuk menulis dump dan menjalankan pembaruan, dan drive yang hampir penuh membuat keduanya gagal dengan cara yang membingungkan."
          ]
        }
      ],
      "verdict": [
        "File Windows Error Reporting dan dump crash adalah catatan dari crash yang sudah terjadi, jadi setelah Anda menyalin dump yang ingin diselidiki, sisanya aman dihapus. Pembersihan Disk menangani dump blue screen, dan folder di profil Anda bisa dikosongkan secara manual.",
        "Disk Mop menempatkan Laporan kesalahan dan Dump crash dalam satu pemindaian bersama cache dan file sementara, menampilkan ukuran masing-masing, dan meminta konfirmasi sebelum menghapus. Pemindaian gratis, jadi Anda bisa melihat berapa ruang yang dipakai crash lama sebelum memutuskan untuk membersihkannya."
      ],
      "ctaText": "Temukan dan bersihkan laporan kesalahan dan dump crash dengan Disk Mop"
    },
    "pl": {
      "title": "Raportowanie błędów systemu Windows i zrzuty awaryjne: co to jest i jak je usunąć",
      "metaDescription": "Pliki raportowania błędów Windows i zrzuty awaryjne mogą zajmować gigabajty. Sprawdź, gdzie leżą, które można bezpiecznie usunąć i jak je wyczyścić krok po kroku.",
      "subtitle": "Odzyskaj miejsce zajmowane przez stare raporty awarii, nie dotykając niczego, czego potrzebuje Windows",
      "keyTakeaways": [
        "Raportowanie błędów systemu Windows (WER) zapisuje folder raportu dla każdej awarii wysłanej do firmy Microsoft; stare raporty w ReportArchive i ReportQueue nie mają już zastosowania po wysłaniu.",
        "Zrzuty awaryjne w %LOCALAPPDATA%\\CrashDumps i C:\\Windows\\Minidump to migawki pamięci służące do debugowania; pojedyncze pliki mogą mieć setki megabajtów, a ich usunięcie nie wpływa na działanie systemu Windows.",
        "Najnowszy zrzut zachowaj tylko wtedy, gdy aktualnie diagnozujesz niebieski ekran lub program, który się zawiesza; w przeciwnym razie wyczyść wszystkie."
      ],
      "dataTable": {
        "caption": "Gdzie Windows przechowuje raporty o błędach i zrzuty awaryjne",
        "columns": [
          "Element",
          "Typowa lokalizacja",
          "Co to jest",
          "Czy można bezpiecznie usunąć?"
        ],
        "rows": [
          [
            "Archiwum i kolejka raportów WER (dla użytkownika)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive i ReportQueue",
            "Foldery ze szczegółami awarii i zawieszeń Twoich programów",
            "Tak"
          ],
          [
            "Archiwum i kolejka raportów WER (wszyscy użytkownicy)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive i ReportQueue",
            "Te same raporty dla składników systemowych",
            "Tak (mogą być potrzebne uprawnienia administratora)"
          ],
          [
            "Zrzuty awaryjne programów",
            "%LOCALAPPDATA%\\CrashDumps",
            "Pliki .dmp zapisywane, gdy program ulegnie awarii",
            "Tak"
          ],
          [
            "Małe zrzuty pamięci",
            "C:\\Windows\\Minidump",
            "Małe pliki .dmp zapisywane po niebieskim ekranie",
            "Tak, chyba że analizujesz niebieski ekran"
          ],
          [
            "Pełny zrzut pamięci",
            "C:\\Windows\\MEMORY.DMP",
            "Duży zrzut pamięci jądra po niebieskim ekranie",
            "Tak, za pomocą Oczyszczania dysku lub ręcznie"
          ]
        ]
      },
      "howTo": {
        "name": "Jak usunąć raporty o błędach systemu Windows i zrzuty awaryjne",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Sprawdź, ile miejsca zajmują",
            "text": "Otwórz Eksplorator plików i wklej %LOCALAPPDATA%\\CrashDumps w pasku adresu. Kliknij folder prawym przyciskiem myszy, wybierz Właściwości i zanotuj rozmiar. Powtórz to dla %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Zdecyduj, czy potrzebujesz najnowszego zrzutu",
            "text": "Jeśli program lub Windows uległ dziś awarii i zamierzasz zbadać jej przyczynę, najpierw skopiuj najnowszy plik .dmp do innego folderu. W przeciwnym razie nic z tych folderów nie jest potrzebne."
          },
          {
            "name": "Usuń zawartość, a nie same foldery",
            "text": "Zaznacz wszystko wewnątrz CrashDumps, ReportArchive i ReportQueue i usuń. Windows odtworzy foldery, gdy będą potrzebne. Pomiń każdy plik, który system zgłasza jako używany."
          },
          {
            "name": "Usuń zrzuty po niebieskim ekranie",
            "text": "Uruchom Oczyszczanie dysku, wybierz Wyczyść pliki systemowe i zaznacz Pliki zrzutów pamięci dla błędów systemu oraz Pliki raportowania błędów systemu Windows. Spowoduje to usunięcie także C:\\Windows\\MEMORY.DMP i folderu Minidump."
          },
          {
            "name": "Zrób to jednym przebiegiem w Disk Mop",
            "text": "Otwórz Disk Mop, przejdź do Zwolnij miejsce, uruchom skanowanie i zaznacz Raporty o błędach oraz Zrzuty awaryjne. Sprawdź rozmiary i potwierdź; nic nie zostanie usunięte przed Twoim potwierdzeniem."
          }
        ]
      },
      "faq": [
        {
          "question": "Czy można bezpiecznie usuwać pliki raportowania błędów systemu Windows?",
          "answer": "Tak. Pliki w folderach ReportArchive i ReportQueue to zapisy awarii, które już się wydarzyły. Windows nie potrzebuje ich do działania, a usunięcie ich pozbawia Cię jedynie historii, którą można było wysłać do firmy Microsoft lub programisty."
        },
        {
          "question": "Dlaczego mój folder CrashDumps jest taki duży?",
          "answer": "Zrzut awaryjny zawiera migawkę pamięci programu z chwili awarii, więc program zużywający dużo pamięci zapisuje duży plik. Program, który ulega awarii wielokrotnie, zapisuje nowy zrzut za każdym razem, a Windows nie czyści ich samodzielnie."
        },
        {
          "question": "Czy usunięcie zrzutów awaryjnych zatrzyma awarie lub niebieskie ekrany?",
          "answer": "Nie. Zrzuty są produktem ubocznym awarii, a nie jej przyczyną. Ich usunięcie zwalnia miejsce, ale niczego nie zmienia w tym, dlaczego program lub Windows zawiódł. Jeśli awarie się powtarzają, zajmij się przyczyną: zaktualizuj sterowniki, sprawdź stan dysku i pamięci."
        },
        {
          "question": "Czy mogę sprawić, by Windows tworzył mniej zrzutów?",
          "answer": "Można ich mieć mniej. W oknie Właściwości systemu, na karcie Zaawansowane, w sekcji Uruchamianie i odzyskiwanie wybierz mały zrzut pamięci zamiast pełnego, dzięki czemu niebieski ekran zapisze niewielki plik. Zrzuty programów w CrashDumps pojawiają się tylko wtedy, gdy dla danego programu włączono zbieranie zrzutów."
        }
      ],
      "intro": [
        "Raportowanie błędów systemu Windows (WER) zapisuje folder plików za każdym razem, gdy program ulega awarii lub przestaje odpowiadać, a Windows zapisuje zrzut awaryjny, gdy zawiedzie program lub system. Stare raporty i zrzuty można bezpiecznie usunąć, ponieważ są tylko zapisem czegoś, co już się wydarzyło, a ich wyczyszczenie zajmuje kilka minut: usuń zawartość folderów WER i CrashDumps, uruchom Oczyszczanie dysku dla zrzutów po niebieskim ekranie albo skorzystaj z narzędzia, które robi to wszystko jednym przebiegiem.",
        "Na komputerze, który kilka razy uległ awarii, łatwo zapomnieć o tych plikach. Pojedynczy zrzut z przeglądarki lub gry może ważyć kilkaset megabajtów, a pełny zrzut pamięci po niebieskim ekranie może być tak duży jak używana wówczas pamięć RAM. Ten poradnik pokazuje, gdzie znajduje się każdy rodzaj plików, co zawiera, kiedy warto zachować jeden z nich i jak bezpiecznie je usunąć."
      ],
      "sections": [
        {
          "title": "Co przechowuje raportowanie błędów systemu Windows",
          "content": [
            "Gdy program ulega awarii, Windows zbiera niewielki raport: nazwę i wersję programu, moduł, który zawiódł, a często także kilka dodatkowych plików, takich jak minizrzut. Jeśli na to zezwolisz, raport jest wysyłany do firmy Microsoft. Kopia zostaje na komputerze w folderze nazwanym od zdarzenia, w ReportArchive dla raportów wysłanych i w ReportQueue dla tych, które wciąż czekają.",
            "Są dwa miejsca. Raporty dla Twoich programów znajdują się w %LOCALAPPDATA%\\Microsoft\\Windows\\WER, a raporty dla składników systemowych w C:\\ProgramData\\Microsoft\\Windows\\WER. Każdy raport ma od kilku kilobajtów do kilku megabajtów, ale na komputerze używanym od lat się sumują.",
            "Windows nie odczytuje niczego z tych folderów przy uruchamianiu ani podczas pracy. Usuwając raport, tracisz jedynie możliwość późniejszego przejrzenia szczegółów tej awarii."
          ]
        },
        {
          "title": "Zrzuty awaryjne: skąd się biorą i jak duże bywają",
          "content": [
            "Zrzut awaryjny to plik z rozszerzeniem .dmp, który zawiera migawkę pamięci z chwili awarii. Spotkasz trzy rodzaje. Zrzuty programów są zapisywane w %LOCALAPPDATA%\\CrashDumps, gdy program ulega awarii i zbieranie zrzutów jest włączone. Małe zrzuty pamięci trafiają do C:\\Windows\\Minidump po niebieskim ekranie. Pełny zrzut pamięci lub pamięci jądra jest zapisywany w C:\\Windows\\MEMORY.DMP.",
            "Rozmiar zależy od programu. Edytor tekstu zapisuje mały plik, ale przeglądarka, gra lub edytor wideo mogą zapisać zrzut o rozmiarze kilkuset megabajtów, ponieważ zawiera on pamięć używaną przez program. Program, który ciągle się zawiesza, na przykład po wadliwej aktualizacji, może zostawić ich dziesiątki.",
            "Zrzuty są przeznaczone dla programisty lub inżyniera pomocy technicznej, który wczytuje je do debugera. Jeśli nie zamierzasz tego robić, są zbędnym balastem."
          ]
        },
        {
          "title": "Kiedy warto zachować zrzut",
          "content": [
            "Zachowaj najnowszy zrzut, jeśli jesteś w trakcie diagnozowania problemu. Powtarzający się niebieski ekran lub program zawieszający się codziennie łatwiej zdiagnozować, mając zrzut pod ręką, a pracownik pomocy technicznej może go zażądać. Skopiuj ten jeden plik w inne miejsce, na przykład do folderu Dokumenty, zanim zaczniesz czyścić.",
            "Cała reszta może zniknąć. Jeśli awaria była jednorazowa i program znów działa, zrzut z zeszłego miesiąca nie ma żadnej wartości. To samo dotyczy raportów w ReportArchive: opisują zdarzenia, które zostały już wysłane lub rozwiązane.",
            "Prosta zasada: zachowuj najwyżej jeden zrzut na każdy problem, który aktualnie badasz, a resztę wyczyść."
          ]
        },
        {
          "title": "Ręczne usuwanie raportów i zrzutów",
          "content": [
            "Otwórz Eksplorator plików i wklej każdą ścieżkę w pasku adresu. W przypadku %LOCALAPPDATA%\\CrashDumps zaznacz wszystkie pliki i usuń je. W przypadku %LOCALAPPDATA%\\Microsoft\\Windows\\WER otwórz ReportArchive i ReportQueue i usuń ich zawartość. To samo zrób w C:\\ProgramData\\Microsoft\\Windows\\WER, gdzie Windows może poprosić o zgodę administratora. Usuwaj zawartość, a nie same foldery.",
            "Zrzuty po niebieskim ekranie najprościej usunąć za pomocą Oczyszczania dysku. Wyszukaj je w menu Start, wybierz dysk systemowy, kliknij Wyczyść pliki systemowe i zaznacz Pliki zrzutów pamięci dla błędów systemu oraz Pliki raportowania błędów systemu Windows. Usunie to jednocześnie C:\\Windows\\MEMORY.DMP i folder Minidump.",
            "Jeśli Windows informuje, że plik jest używany, pomiń go. Raport zapisywany w tej chwili zniknie przy następnym przebiegu."
          ]
        },
        {
          "title": "Wyczyść wszystko jednym przebiegiem w Disk Mop",
          "content": [
            "Strona Zwolnij miejsce w Disk Mop wyświetla Raporty o błędach i Zrzuty awaryjne jako osobne pozycje z ich rozmiarem i krótkim wyjaśnieniem, co robi czyszczenie. Raporty o błędach obejmują archiwum i kolejkę raportów WER w Twoim profilu oraz w ProgramData. Zrzuty awaryjne obejmują %LOCALAPPDATA%\\CrashDumps i C:\\Windows\\Minidump.",
            "Uruchom skanowanie, zaznacz wybrane pozycje i potwierdź. Disk Mop pokazuje, co znalazł, zanim cokolwiek usunie, a niektóre pozycje, na przykład na poziomie systemu Windows, mogą wymagać uprawnień administratora. Skanowanie jest bezpłatne, więc możesz sprawdzić, ile miejsca zajmują te pliki, zanim zdecydujesz. Disk Mop nie usuwa pliku C:\\Windows\\MEMORY.DMP; użyj do tego Oczyszczania dysku.",
            "Jeśli chcesz, by komputer pozostał czysty, narzędzie do czyszczenia według harmonogramu może uruchamiać bezpieczne pozycje ze strony Zwolnij miejsce w tle."
          ]
        },
        {
          "title": "Jeśli awarie wciąż wracają",
          "content": [
            "Czyszczenie usuwa tylko dowody. Jeśli ten sam program ulega awarii co tydzień, poszukaj przyczyny. Zaktualizuj program oraz sterowniki grafiki i pamięci masowej, upewnij się, że Windows jest w pełni zaktualizowany, i sprawdź stan dysku, ponieważ uszkodzony dysk może powodować awarie i niebieskie ekrany. Warto przeprowadzić test pamięci, jeśli awarie są losowe.",
            "Pomaga też zachowanie wolnego miejsca na dysku systemowym. Windows potrzebuje miejsca na zapis zrzutu i na uruchamianie aktualizacji, a prawie pełny dysk sprawia, że jedno i drugie kończy się niepowodzeniem w mylący sposób."
          ]
        }
      ],
      "verdict": [
        "Pliki raportowania błędów systemu Windows i zrzuty awaryjne to zapisy awarii, które już się wydarzyły, więc po skopiowaniu na bok zrzutu, który chcesz zbadać, resztę można bezpiecznie usunąć. Oczyszczanie dysku obsługuje zrzuty po niebieskim ekranie, a foldery w Twoim profilu można opróżnić ręcznie.",
        "Disk Mop umieszcza Raporty o błędach i Zrzuty awaryjne w jednym skanowaniu obok pamięci podręcznych i plików tymczasowych, pokazuje rozmiar każdej pozycji i pyta, zanim cokolwiek usunie. Skanowanie jest bezpłatne, więc możesz zobaczyć, ile miejsca zajmują stare awarie, zanim zdecydujesz się na czyszczenie."
      ],
      "ctaText": "Znajdź i wyczyść raporty o błędach i zrzuty awaryjne w Disk Mop"
    },
    "ro": {
      "title": "Raportarea erorilor Windows și fișierele dump după blocări: ce sunt și cum le ștergi",
      "metaDescription": "Fișierele Windows Error Reporting și dump-urile după blocări pot ocupa gigaocteți. Află unde se află, care pot fi șterse în siguranță și cum le cureți pas cu pas.",
      "subtitle": "Recuperează spațiul ocupat de rapoartele vechi de blocare, fără să atingi nimic din ce îi trebuie lui Windows",
      "keyTakeaways": [
        "Raportarea erorilor Windows (WER) stochează un folder de raport pentru fiecare blocare trimisă către Microsoft; rapoartele vechi din ReportArchive și ReportQueue nu mai au nicio utilitate după ce au fost trimise.",
        "Fișierele dump din %LOCALAPPDATA%\\CrashDumps și C:\\Windows\\Minidump sunt instantanee ale memoriei, folosite pentru depanare; un singur fișier poate ajunge la sute de megaocteți, iar ștergerea lor nu afectează funcționarea Windows.",
        "Păstrează cel mai recent dump doar dacă depanezi activ un ecran albastru sau un program care se blochează; în rest, șterge-le pe toate."
      ],
      "dataTable": {
        "caption": "Unde păstrează Windows rapoartele de eroare și fișierele dump după blocări",
        "columns": [
          "Element",
          "Locație obișnuită",
          "Ce este",
          "Se poate șterge în siguranță?"
        ],
        "rows": [
          [
            "Arhiva și coada de rapoarte WER (per utilizator)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive și ReportQueue",
            "Foldere cu detalii despre blocările și înghețările programelor tale",
            "Da"
          ],
          [
            "Arhiva și coada de rapoarte WER (toți utilizatorii)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive și ReportQueue",
            "Aceleași rapoarte pentru componentele de sistem",
            "Da (pot fi necesare drepturi de administrator)"
          ],
          [
            "Dump-uri după blocarea programelor",
            "%LOCALAPPDATA%\\CrashDumps",
            "Fișiere .dmp scrise când un program se blochează",
            "Da"
          ],
          [
            "Dump-uri mici de memorie",
            "C:\\Windows\\Minidump",
            "Fișiere .dmp mici scrise după un ecran albastru",
            "Da, cu excepția cazului în care analizezi un ecran albastru"
          ],
          [
            "Dump complet de memorie",
            "C:\\Windows\\MEMORY.DMP",
            "Un dump mare al memoriei nucleului după un ecran albastru",
            "Da, prin Curățare disc sau manual"
          ]
        ]
      },
      "howTo": {
        "name": "Cum ștergi rapoartele de eroare Windows și fișierele dump după blocări",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Verifică cât spațiu ocupă",
            "text": "Deschide File Explorer și lipește %LOCALAPPDATA%\\CrashDumps în bara de adrese. Fă clic dreapta pe folder, alege Proprietăți și notează dimensiunea. Repetă pentru %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Decide dacă ai nevoie de cel mai recent dump",
            "text": "Dacă un program sau Windows s-a blocat astăzi și intenționezi să investighezi, copiază mai întâi cel mai recent fișier .dmp într-un alt folder. Altfel, nimic din aceste foldere nu este necesar."
          },
          {
            "name": "Șterge conținutul, nu folderele",
            "text": "Selectează tot ce se află în CrashDumps, ReportArchive și ReportQueue și șterge. Windows recreează folderele când are nevoie de ele. Sari peste orice fișier pe care Windows îl raportează ca fiind în uz."
          },
          {
            "name": "Elimină dump-urile de la ecranul albastru",
            "text": "Rulează Curățare disc, alege Curățați fișierele de sistem și bifează Fișiere de memorie dump pentru erori de sistem și Fișiere de raportare a erorilor Windows. Astfel se elimină și C:\\Windows\\MEMORY.DMP și folderul Minidump."
          },
          {
            "name": "Fă totul într-o singură trecere cu Disk Mop",
            "text": "Deschide Disk Mop, mergi la Eliberează spațiu, rulează scanarea și bifează Rapoarte de erori și Fișiere dump după blocări. Verifică dimensiunile și confirmă; nu se șterge nimic înainte să confirmi."
          }
        ]
      },
      "faq": [
        {
          "question": "Este sigur să șterg fișierele Windows Error Reporting?",
          "answer": "Da. Fișierele din folderele ReportArchive și ReportQueue ale WER sunt înregistrări ale unor blocări care au avut deja loc. Windows nu are nevoie de ele ca să funcționeze, iar ștergerea lor elimină doar istoricul pe care l-ai fi putut trimite către Microsoft sau către un dezvoltator."
        },
        {
          "question": "De ce este folderul CrashDumps atât de mare?",
          "answer": "Un dump conține un instantaneu al memoriei programului din momentul în care a eșuat, așa că un program care a folosit multă memorie scrie un fișier mare. Un program care se blochează în mod repetat scrie un dump nou de fiecare dată, iar Windows nu le curăță singur."
        },
        {
          "question": "Ștergerea dump-urilor va opri blocările sau ecranele albastre?",
          "answer": "Nu. Dump-urile sunt un produs secundar al unei blocări, nu cauza ei. Ștergerea lor eliberează spațiu, dar nu schimbă nimic din motivul pentru care un program sau Windows a eșuat. Dacă blocările continuă, remediază cauza: actualizează driverele, verifică starea discului și a memoriei."
        },
        {
          "question": "Pot opri Windows să creeze atât de multe dump-uri?",
          "answer": "Le poți reduce. În Proprietăți sistem, Complex, Pornire și recuperare, alege o memorie dump mică în loc de una completă, astfel încât un ecran albastru să scrie un fișier mic. Dump-urile programelor din CrashDumps apar doar când colectarea dump-urilor este activată pentru programul respectiv."
        }
      ],
      "intro": [
        "Raportarea erorilor Windows (WER) scrie un folder cu fișiere de fiecare dată când un program se blochează sau nu mai răspunde, iar Windows scrie un dump atunci când un program sau sistemul eșuează. Rapoartele și dump-urile vechi pot fi șterse în siguranță, pentru că sunt doar o înregistrare a ceva ce s-a întâmplat deja, iar curățarea durează câteva minute: șterge conținutul folderelor WER și CrashDumps, rulează Curățare disc pentru dump-urile de la ecranul albastru sau folosește un instrument de curățare care face totul într-o singură trecere.",
        "Pe un PC care s-a blocat de câteva ori, aceste fișiere se uită ușor. Un singur dump de la un browser sau de la un joc poate avea câteva sute de megaocteți, iar un dump complet de memorie după un ecran albastru poate fi la fel de mare ca memoria RAM folosită atunci. Acest ghid arată unde se află fiecare tip de fișier, ce conține, când ar trebui să păstrezi unul și cum le elimini în siguranță."
      ],
      "sections": [
        {
          "title": "Ce stochează Raportarea erorilor Windows",
          "content": [
            "Când un program se blochează, Windows colectează un raport mic: numele și versiunea programului, modulul care a eșuat și, adesea, câteva fișiere suplimentare, cum ar fi un minidump. Dacă permiți, raportul este trimis către Microsoft. O copie rămâne pe PC-ul tău într-un folder numit după eveniment, în ReportArchive pentru rapoartele trimise și în ReportQueue pentru cele care încă așteaptă.",
            "Există două locuri. Rapoartele pentru programele tale se află în %LOCALAPPDATA%\\Microsoft\\Windows\\WER, iar rapoartele pentru componentele de sistem se află în C:\\ProgramData\\Microsoft\\Windows\\WER. Fiecare raport are doar câțiva kiloocteți până la câțiva megaocteți, dar se adună pe un PC folosit de ani de zile.",
            "Windows nu citește nimic din aceste foldere la pornire sau în timpul funcționării. Singurul lucru pe care îl pierzi ștergând un raport este posibilitatea de a consulta ulterior detaliile acelei blocări."
          ]
        },
        {
          "title": "Dump-urile după blocări: de unde provin și cât de mari devin",
          "content": [
            "Un dump este un fișier cu extensia .dmp care conține un instantaneu al memoriei din momentul în care ceva a eșuat. Vei întâlni trei tipuri. Dump-urile programelor sunt scrise în %LOCALAPPDATA%\\CrashDumps când un program se blochează și colectarea dump-urilor este activă. Dump-urile mici de memorie ajung în C:\\Windows\\Minidump după un ecran albastru. Un dump complet sau al memoriei nucleului este scris în C:\\Windows\\MEMORY.DMP.",
            "Dimensiunea depinde de program. Un editor de text scrie un fișier mic, dar un browser, un joc sau un editor video pot scrie un dump de câteva sute de megaocteți, deoarece dump-ul include memoria pe care o folosea programul. Un program care continuă să se blocheze, de exemplu după o actualizare defectă, poate lăsa zeci de astfel de fișiere.",
            "Dump-urile sunt destinate unui dezvoltator sau unui inginer de suport care le încarcă într-un depanator. Dacă nu ai de gând să faci asta, sunt doar balast."
          ]
        },
        {
          "title": "Când ar trebui să păstrezi un dump",
          "content": [
            "Păstrează cel mai recent dump dacă ești în mijlocul depanării. Un ecran albastru care se repetă sau un program care se blochează în fiecare zi este mai ușor de diagnosticat cu un dump la îndemână, iar un specialist de suport ți-l poate cere. Copiază acel fișier în altă parte, de exemplu în folderul Documente, înainte de curățare.",
            "Restul poate dispărea. Dacă blocarea a fost un incident izolat și programul funcționează din nou, dump-ul de luna trecută nu mai are nicio valoare. Același lucru este valabil pentru rapoartele din ReportArchive: ele descriu evenimente care au fost deja trimise sau deja rezolvate.",
            "O regulă simplă: păstrează cel mult un dump pentru fiecare problemă pe care o investighezi activ și șterge-le pe celelalte."
          ]
        },
        {
          "title": "Șterge manual rapoartele și dump-urile",
          "content": [
            "Deschide File Explorer și lipește fiecare cale în bara de adrese. Pentru %LOCALAPPDATA%\\CrashDumps, selectează toate fișierele și șterge-le. Pentru %LOCALAPPDATA%\\Microsoft\\Windows\\WER, deschide ReportArchive și ReportQueue și șterge conținutul lor. Procedează la fel în C:\\ProgramData\\Microsoft\\Windows\\WER, unde Windows poate cere permisiunea administratorului. Șterge conținutul, nu folderele în sine.",
            "Pentru dump-urile de la ecranul albastru, cea mai simplă cale este Curățare disc. Caută-l în meniul Start, alege unitatea de sistem, selectează Curățați fișierele de sistem și bifează Fișiere de memorie dump pentru erori de sistem și Fișiere de raportare a erorilor Windows. Astfel se curăță împreună C:\\Windows\\MEMORY.DMP și folderul Minidump.",
            "Dacă Windows spune că un fișier este în uz, sari peste el. Un raport care se scrie chiar acum va dispărea la următoarea trecere."
          ]
        },
        {
          "title": "Curăță totul într-o singură trecere cu Disk Mop",
          "content": [
            "Pagina Eliberează spațiu din Disk Mop listează Rapoarte de erori și Fișiere dump după blocări ca elemente separate, cu dimensiunea lor și o scurtă explicație a ceea ce face curățarea. Rapoartele de erori acoperă arhiva și coada de rapoarte WER din profilul tău și din ProgramData. Fișierele dump după blocări acoperă %LOCALAPPDATA%\\CrashDumps și C:\\Windows\\Minidump.",
            "Rulează scanarea, bifează elementele dorite și confirmă. Disk Mop arată ce a găsit înainte de a șterge ceva, iar unele elemente, cum sunt cele de la nivelul Windows, pot cere drepturi de administrator. Scanarea este gratuită, așa că poți vedea cât spațiu ocupă aceste fișiere înainte să te hotărăști. Disk Mop nu elimină C:\\Windows\\MEMORY.DMP; folosește Curățare disc pentru acel fișier.",
            "Dacă vrei să rămână curat, instrumentul de curățare programată poate rula în fundal, după un program, elementele sigure din Eliberează spațiu."
          ]
        },
        {
          "title": "Dacă blocările continuă să apară",
          "content": [
            "Curățarea elimină doar dovezile. Dacă același program se blochează în fiecare săptămână, caută cauza. Actualizează programul și driverele de grafică și de stocare, verifică dacă Windows este complet actualizat și analizează starea discului, deoarece o unitate defectă poate provoca blocări și ecrane albastre. Merită rulat un test de memorie dacă blocările sunt aleatorii.",
            "Ajută și să păstrezi spațiu liber pe unitatea de sistem. Windows are nevoie de loc pentru a scrie un dump și pentru a rula actualizările, iar o unitate aproape plină face ca ambele să eșueze în moduri derutante."
          ]
        }
      ],
      "verdict": [
        "Fișierele Windows Error Reporting și dump-urile după blocări sunt înregistrări ale unor blocări care au avut deja loc, așa că, după ce ai copiat separat orice dump pe care vrei să-l investighezi, restul pot fi șterse în siguranță. Curățare disc se ocupă de dump-urile de la ecranul albastru, iar folderele din profilul tău pot fi golite manual.",
        "Disk Mop pune Rapoarte de erori și Fișiere dump după blocări într-o singură scanare, alături de cache-uri și fișiere temporare, arată dimensiunea fiecăruia și cere confirmarea înainte de a șterge. Scanarea este gratuită, așa că poți vedea cât spațiu ocupă blocările vechi înainte să decizi să cureți."
      ],
      "ctaText": "Găsește și șterge rapoartele de erori și dump-urile după blocări cu Disk Mop"
    },
    "ru": {
      "title": "Отчеты об ошибках Windows и дампы сбоев: что это и как их удалить",
      "metaDescription": "Файлы отчетов об ошибках Windows и дампы сбоев могут занимать гигабайты. Где они лежат, какие из них можно безопасно удалить и как очистить их по шагам.",
      "subtitle": "Верните место, занятое старыми отчетами о сбоях, не трогая ничего нужного Windows",
      "keyTakeaways": [
        "Служба отчетов об ошибках Windows (WER) хранит папку отчета для каждого сбоя, отправленного в Microsoft; старые отчеты в ReportArchive и ReportQueue после отправки больше не нужны.",
        "Дампы сбоев в %LOCALAPPDATA%\\CrashDumps и C:\\Windows\\Minidump — это снимки памяти для отладки; один файл может занимать сотни мегабайт, а их удаление не влияет на работу Windows.",
        "Оставляйте самый свежий дамп, только если вы прямо сейчас разбираетесь с синим экраном или падающей программой; в остальных случаях удаляйте все."
      ],
      "dataTable": {
        "caption": "Где Windows хранит отчеты об ошибках и дампы сбоев",
        "columns": [
          "Элемент",
          "Обычное расположение",
          "Что это",
          "Можно ли безопасно удалить?"
        ],
        "rows": [
          [
            "Архив и очередь отчетов WER (для пользователя)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive и ReportQueue",
            "Папки с подробностями сбоев и зависаний ваших программ",
            "Да"
          ],
          [
            "Архив и очередь отчетов WER (для всех пользователей)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive и ReportQueue",
            "Те же отчеты для общесистемных компонентов",
            "Да (могут понадобиться права администратора)"
          ],
          [
            "Дампы сбоев программ",
            "%LOCALAPPDATA%\\CrashDumps",
            "Файлы .dmp, которые записываются при сбое программы",
            "Да"
          ],
          [
            "Малые дампы памяти",
            "C:\\Windows\\Minidump",
            "Небольшие файлы .dmp, записываемые после синего экрана",
            "Да, если вы не анализируете синий экран"
          ],
          [
            "Полный дамп памяти",
            "C:\\Windows\\MEMORY.DMP",
            "Большой дамп памяти ядра после синего экрана",
            "Да, через Очистку диска или вручную"
          ]
        ]
      },
      "howTo": {
        "name": "Как удалить отчеты об ошибках Windows и дампы сбоев",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Проверьте, сколько места они занимают",
            "text": "Откройте Проводник и вставьте %LOCALAPPDATA%\\CrashDumps в адресную строку. Щелкните папку правой кнопкой мыши, выберите Свойства и запомните размер. Повторите то же для %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Решите, нужен ли вам самый свежий дамп",
            "text": "Если сегодня произошел сбой программы или Windows и вы собираетесь в нем разобраться, сначала скопируйте самый новый файл .dmp в другую папку. В остальных случаях ничто в этих папках не нужно."
          },
          {
            "name": "Удаляйте содержимое, а не сами папки",
            "text": "Выделите все внутри CrashDumps, ReportArchive и ReportQueue и удалите. Windows создаст папки заново, когда они понадобятся. Пропустите любой файл, который Windows сообщает как используемый."
          },
          {
            "name": "Удалите дампы синего экрана",
            "text": "Запустите Очистку диска, выберите Очистить системные файлы и отметьте Файлы дампа памяти для системных ошибок и Файлы отчетов об ошибках Windows. Это также удалит C:\\Windows\\MEMORY.DMP и папку Minidump."
          },
          {
            "name": "Сделайте все за один проход в Disk Mop",
            "text": "Откройте Disk Mop, перейдите в раздел Освободить место, запустите сканирование и отметьте Отчеты об ошибках и Дампы сбоев. Проверьте размеры и подтвердите; ничто не удаляется до вашего подтверждения."
          }
        ]
      },
      "faq": [
        {
          "question": "Безопасно ли удалять файлы отчетов об ошибках Windows?",
          "answer": "Да. Файлы в папках ReportArchive и ReportQueue службы WER — это записи о сбоях, которые уже произошли. Windows они не нужны для работы, а их удаление лишь стирает историю, которую можно было отправить в Microsoft или разработчику."
        },
        {
          "question": "Почему папка CrashDumps такая большая?",
          "answer": "Дамп сбоя содержит снимок памяти программы в момент отказа, поэтому программа, использовавшая много памяти, записывает большой файл. Программа, которая падает снова и снова, каждый раз записывает новый дамп, а Windows сама их не очищает."
        },
        {
          "question": "Прекратятся ли сбои или синие экраны, если удалить дампы?",
          "answer": "Нет. Дампы — побочный продукт сбоя, а не его причина. Их удаление освобождает место, но ничего не меняет в том, почему отказала программа или Windows. Если сбои повторяются, устраняйте причину: обновите драйверы, проверьте состояние диска и памяти."
        },
        {
          "question": "Можно ли сделать так, чтобы Windows создавала меньше дампов?",
          "answer": "Их количество можно уменьшить. В окне Свойства системы на вкладке Дополнительно в разделе Загрузка и восстановление выберите малый дамп памяти вместо полного, и при синем экране будет записываться небольшой файл. Дампы программ в CrashDumps появляются, только если для этой программы включен сбор дампов."
        }
      ],
      "intro": [
        "Служба отчетов об ошибках Windows (WER) записывает папку с файлами каждый раз, когда программа падает или перестает отвечать, а Windows записывает дамп сбоя, когда отказывает программа или система. Старые отчеты и дампы можно безопасно удалить, потому что это лишь запись о том, что уже произошло, а очистка занимает несколько минут: удалите содержимое папок WER и CrashDumps, запустите Очистку диска для дампов синего экрана или воспользуйтесь программой очистки, которая сделает все за один проход.",
        "На компьютере, который несколько раз падал, об этих файлах легко забыть. Один дамп браузера или игры может весить несколько сотен мегабайт, а полный дамп памяти после синего экрана может быть размером с использовавшуюся оперативную память. В этом руководстве показано, где находится каждый вид файлов, что в нем содержится, когда стоит оставить один из них и как безопасно их удалить."
      ],
      "sections": [
        {
          "title": "Что хранит служба отчетов об ошибках Windows",
          "content": [
            "Когда программа падает, Windows собирает небольшой отчет: название и версию программы, модуль, в котором произошел отказ, и часто несколько дополнительных файлов, например мини-дамп. Если вы разрешите, отчет отправляется в Microsoft. Копия остается на вашем компьютере в папке, названной по событию: в ReportArchive лежат отправленные отчеты, а в ReportQueue — те, что еще ждут отправки.",
            "Есть два места. Отчеты для ваших собственных программ находятся в %LOCALAPPDATA%\\Microsoft\\Windows\\WER, а отчеты для общесистемных компонентов — в C:\\ProgramData\\Microsoft\\Windows\\WER. Каждый отчет занимает от нескольких килобайт до нескольких мегабайт, но на компьютере, который работает годами, они накапливаются.",
            "Windows не читает ничего из этих папок ни при запуске, ни во время работы. Удалив отчет, вы теряете лишь возможность позже посмотреть подробности этого сбоя."
          ]
        },
        {
          "title": "Дампы сбоев: откуда они берутся и насколько велики",
          "content": [
            "Дамп сбоя — это файл с расширением .dmp, в котором хранится снимок памяти на момент отказа. Вам встретятся три вида. Дампы программ записываются в %LOCALAPPDATA%\\CrashDumps, когда программа падает и включен сбор дампов. Малые дампы памяти попадают в C:\\Windows\\Minidump после синего экрана. Полный дамп или дамп памяти ядра записывается в C:\\Windows\\MEMORY.DMP.",
            "Размер зависит от программы. Текстовый редактор записывает небольшой файл, а браузер, игра или видеоредактор могут записать дамп в несколько сотен мегабайт, потому что дамп включает память, которую использовала программа. Программа, которая продолжает падать, например после неудачного обновления, может оставить десятки таких файлов.",
            "Дампы предназначены для разработчика или инженера поддержки, который загружает их в отладчик. Если вы не собираетесь этого делать, они лишь мертвый груз."
          ]
        },
        {
          "title": "Когда стоит оставить дамп",
          "content": [
            "Оставьте самый свежий дамп, если вы в разгаре поиска неисправности. Повторяющийся синий экран или программа, которая падает каждый день, легче диагностируются, когда дамп под рукой, и сотрудник поддержки может его запросить. Скопируйте этот файл в другое место, например в папку Документы, прежде чем очищать.",
            "Все остальное можно удалить. Если сбой был единичным и программа снова работает, дамп прошлого месяца не имеет ценности. То же относится к отчетам в ReportArchive: они описывают события, которые уже отправлены или уже решены.",
            "Простое правило: оставляйте не больше одного дампа на каждую проблему, которую вы реально расследуете, а остальное удаляйте."
          ]
        },
        {
          "title": "Удаление отчетов и дампов вручную",
          "content": [
            "Откройте Проводник и вставляйте каждый путь в адресную строку. Для %LOCALAPPDATA%\\CrashDumps выделите все файлы и удалите их. Для %LOCALAPPDATA%\\Microsoft\\Windows\\WER откройте ReportArchive и ReportQueue и удалите их содержимое. То же сделайте в C:\\ProgramData\\Microsoft\\Windows\\WER, где Windows может запросить разрешение администратора. Удаляйте содержимое, а не сами папки.",
            "Для дампов синего экрана проще всего воспользоваться Очисткой диска. Найдите ее в меню «Пуск», выберите системный диск, нажмите Очистить системные файлы и отметьте Файлы дампа памяти для системных ошибок и Файлы отчетов об ошибках Windows. Так будут удалены C:\\Windows\\MEMORY.DMP и папка Minidump.",
            "Если Windows сообщает, что файл используется, пропустите его. Отчет, который записывается прямо сейчас, исчезнет при следующем проходе."
          ]
        },
        {
          "title": "Очистка за один проход в Disk Mop",
          "content": [
            "На странице Освободить место в Disk Mop Отчеты об ошибках и Дампы сбоев показаны отдельными пунктами с размером и кратким пояснением, что делает очистка. Отчеты об ошибках охватывают архив и очередь отчетов WER в вашем профиле и в ProgramData. Дампы сбоев охватывают %LOCALAPPDATA%\\CrashDumps и C:\\Windows\\Minidump.",
            "Запустите сканирование, отметьте нужные пункты и подтвердите. Disk Mop показывает найденное, прежде чем что-либо удалить, а для некоторых пунктов, например на уровне Windows, могут потребоваться права администратора. Сканирование бесплатно, поэтому вы можете увидеть, сколько места занимают эти файлы, прежде чем принять решение. Disk Mop не удаляет C:\\Windows\\MEMORY.DMP; для этого файла используйте Очистку диска.",
            "Если хотите поддерживать чистоту, инструмент очистки по расписанию может в фоновом режиме запускать безопасные пункты раздела Освободить место."
          ]
        },
        {
          "title": "Если сбои повторяются",
          "content": [
            "Очистка убирает лишь улики. Если одна и та же программа падает каждую неделю, ищите причину. Обновите программу, а также драйверы видеокарты и накопителей, убедитесь, что Windows полностью обновлена, и проверьте состояние диска, поскольку неисправный накопитель может вызывать сбои и синие экраны. Если сбои случайны, стоит запустить проверку памяти.",
            "Также полезно оставлять свободное место на системном диске. Windows нужно место, чтобы записать дамп и выполнить обновления, а почти полный диск приводит к тому, что и то и другое завершается неудачей непонятным образом."
          ]
        }
      ],
      "verdict": [
        "Файлы отчетов об ошибках Windows и дампы сбоев — это записи о сбоях, которые уже произошли, поэтому после того, как вы скопировали в сторону дамп, который хотите изучить, остальное можно безопасно удалить. Очистка диска справляется с дампами синего экрана, а папки в вашем профиле можно очистить вручную.",
        "Disk Mop объединяет Отчеты об ошибках и Дампы сбоев в одном сканировании вместе с кэшами и временными файлами, показывает размер каждого пункта и спрашивает, прежде чем удалять. Сканирование бесплатно, поэтому вы можете увидеть, сколько места занимают старые сбои, прежде чем решить, чистить ли их."
      ],
      "ctaText": "Найдите и удалите отчеты об ошибках и дампы сбоев с помощью Disk Mop"
    },
    "th": {
      "title": "การรายงานข้อผิดพลาดของ Windows และไฟล์ดัมพ์จากการขัดข้อง: คืออะไรและลบอย่างไร",
      "metaDescription": "ไฟล์การรายงานข้อผิดพลาดของ Windows และไฟล์ดัมพ์จากการขัดข้องอาจกินพื้นที่หลายกิกะไบต์ ดูว่าอยู่ที่ไหน ลบอันไหนได้อย่างปลอดภัย และวิธีล้างทีละขั้นตอน",
      "subtitle": "เอาพื้นที่คืนจากรายงานการขัดข้องเก่า โดยไม่แตะสิ่งที่ Windows ต้องใช้",
      "keyTakeaways": [
        "การรายงานข้อผิดพลาดของ Windows (WER) เก็บโฟลเดอร์รายงานสำหรับทุกการขัดข้องที่ส่งไปยัง Microsoft; รายงานเก่าใน ReportArchive และ ReportQueue ไม่มีประโยชน์อีกแล้วเมื่อส่งไปแล้ว",
        "ไฟล์ดัมพ์ใน %LOCALAPPDATA%\\CrashDumps และ C:\\Windows\\Minidump คือภาพสแนปชอตของหน่วยความจำสำหรับดีบัก; แต่ละไฟล์อาจใหญ่ถึงหลายร้อยเมกะไบต์ และการลบไม่กระทบการทำงานของ Windows",
        "เก็บไฟล์ดัมพ์ล่าสุดไว้เฉพาะเมื่อคุณกำลังแก้ปัญหาหน้าจอสีฟ้าหรือโปรแกรมที่ขัดข้องอยู่จริง ๆ มิฉะนั้นให้ล้างทั้งหมด"
      ],
      "dataTable": {
        "caption": "ที่ที่ Windows เก็บรายงานข้อผิดพลาดและไฟล์ดัมพ์จากการขัดข้อง",
        "columns": [
          "รายการ",
          "ตำแหน่งโดยทั่วไป",
          "คืออะไร",
          "ลบได้อย่างปลอดภัยหรือไม่"
        ],
        "rows": [
          [
            "คลังและคิวรายงาน WER (ต่อผู้ใช้)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive และ ReportQueue",
            "โฟลเดอร์ที่มีรายละเอียดการขัดข้องและการค้างของโปรแกรมของคุณเอง",
            "ได้"
          ],
          [
            "คลังและคิวรายงาน WER (ผู้ใช้ทั้งหมด)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive และ ReportQueue",
            "รายงานแบบเดียวกันสำหรับส่วนประกอบของระบบ",
            "ได้ (อาจต้องใช้สิทธิ์ผู้ดูแลระบบ)"
          ],
          [
            "ไฟล์ดัมพ์จากการขัดข้องของโปรแกรม",
            "%LOCALAPPDATA%\\CrashDumps",
            "ไฟล์ .dmp ที่เขียนขึ้นเมื่อโปรแกรมขัดข้อง",
            "ได้"
          ],
          [
            "ไฟล์ดัมพ์หน่วยความจำขนาดเล็ก",
            "C:\\Windows\\Minidump",
            "ไฟล์ .dmp ขนาดเล็กที่เขียนขึ้นหลังหน้าจอสีฟ้า",
            "ได้ เว้นแต่คุณกำลังวิเคราะห์หน้าจอสีฟ้า"
          ],
          [
            "ไฟล์ดัมพ์หน่วยความจำแบบเต็ม",
            "C:\\Windows\\MEMORY.DMP",
            "ไฟล์ดัมพ์ขนาดใหญ่ของหน่วยความจำเคอร์เนลหลังหน้าจอสีฟ้า",
            "ได้ ผ่านการล้างข้อมูลบนดิสก์หรือลบด้วยตนเอง"
          ]
        ]
      },
      "howTo": {
        "name": "วิธีลบรายงานข้อผิดพลาดของ Windows และไฟล์ดัมพ์จากการขัดข้อง",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "ตรวจสอบว่าใช้พื้นที่เท่าไร",
            "text": "เปิด File Explorer แล้ววาง %LOCALAPPDATA%\\CrashDumps ลงในแถบที่อยู่ คลิกขวาที่โฟลเดอร์ เลือกคุณสมบัติ แล้วจดขนาดไว้ ทำซ้ำกับ %LOCALAPPDATA%\\Microsoft\\Windows\\WER"
          },
          {
            "name": "ตัดสินใจว่าต้องการไฟล์ดัมพ์ล่าสุดหรือไม่",
            "text": "หากโปรแกรมหรือ Windows ขัดข้องในวันนี้และคุณตั้งใจจะตรวจสอบสาเหตุ ให้คัดลอกไฟล์ .dmp ล่าสุดไปไว้ในโฟลเดอร์อื่นก่อน นอกเหนือจากนั้นไม่มีสิ่งใดในโฟลเดอร์เหล่านี้ที่จำเป็น"
          },
          {
            "name": "ลบเนื้อหาข้างใน ไม่ใช่ตัวโฟลเดอร์",
            "text": "เลือกทุกอย่างภายใน CrashDumps, ReportArchive และ ReportQueue แล้วลบ Windows จะสร้างโฟลเดอร์ขึ้นใหม่เมื่อจำเป็น ข้ามไฟล์ใดก็ตามที่ Windows แจ้งว่ากำลังถูกใช้งานอยู่"
          },
          {
            "name": "ลบไฟล์ดัมพ์จากหน้าจอสีฟ้า",
            "text": "เรียกใช้การล้างข้อมูลบนดิสก์ เลือกล้างข้อมูลไฟล์ระบบ แล้วติ๊กไฟล์การถ่ายโอนข้อมูลหน่วยความจำข้อผิดพลาดของระบบ และไฟล์การรายงานข้อผิดพลาดของ Windows วิธีนี้จะลบ C:\\Windows\\MEMORY.DMP และโฟลเดอร์ Minidump ด้วย"
          },
          {
            "name": "ทำทุกอย่างในรอบเดียวด้วย Disk Mop",
            "text": "เปิด Disk Mop ไปที่เพิ่มพื้นที่ว่าง เริ่มการสแกน แล้วติ๊กรายงานข้อผิดพลาดและไฟล์ดัมพ์จากการขัดข้อง ตรวจสอบขนาดแล้วยืนยัน จะไม่มีอะไรถูกลบก่อนที่คุณจะยืนยัน"
          }
        ]
      },
      "faq": [
        {
          "question": "การลบไฟล์การรายงานข้อผิดพลาดของ Windows ปลอดภัยหรือไม่",
          "answer": "ปลอดภัย ไฟล์ในโฟลเดอร์ ReportArchive และ ReportQueue ของ WER เป็นบันทึกของการขัดข้องที่เกิดขึ้นไปแล้ว Windows ไม่ต้องใช้ไฟล์เหล่านี้ในการทำงาน และการลบเพียงทำให้ประวัติที่คุณอาจส่งให้ Microsoft หรือนักพัฒนาหายไป"
        },
        {
          "question": "ทำไมโฟลเดอร์ CrashDumps ถึงใหญ่มาก",
          "answer": "ไฟล์ดัมพ์จากการขัดข้องมีสแนปชอตของหน่วยความจำของโปรแกรม ณ ขณะที่ล้มเหลว โปรแกรมที่ใช้หน่วยความจำมากจึงเขียนไฟล์ขนาดใหญ่ โปรแกรมที่ขัดข้องซ้ำ ๆ จะเขียนไฟล์ดัมพ์ใหม่ทุกครั้ง และ Windows ไม่ล้างให้เอง"
        },
        {
          "question": "การลบไฟล์ดัมพ์จะหยุดการขัดข้องหรือหน้าจอสีฟ้าได้ไหม",
          "answer": "ไม่ได้ ไฟล์ดัมพ์เป็นผลพลอยได้จากการขัดข้อง ไม่ใช่สาเหตุ การลบช่วยคืนพื้นที่แต่ไม่ได้เปลี่ยนสาเหตุที่โปรแกรมหรือ Windows ล้มเหลว หากยังขัดข้องอยู่ ให้แก้ที่สาเหตุ: อัปเดตไดรเวอร์ ตรวจสุขภาพดิสก์และหน่วยความจำ"
        },
        {
          "question": "ป้องกันไม่ให้ Windows สร้างไฟล์ดัมพ์มากเกินไปได้หรือไม่",
          "answer": "ลดจำนวนลงได้ ที่คุณสมบัติระบบ แท็บขั้นสูง ส่วนการเริ่มต้นระบบและการกู้คืน ให้เลือกการถ่ายโอนข้อมูลหน่วยความจำขนาดเล็กแทนแบบสมบูรณ์ เมื่อเกิดหน้าจอสีฟ้าก็จะเขียนไฟล์ขนาดเล็ก ไฟล์ดัมพ์ของโปรแกรมใน CrashDumps จะปรากฏเฉพาะเมื่อเปิดการเก็บไฟล์ดัมพ์สำหรับโปรแกรมนั้น"
        }
      ],
      "intro": [
        "การรายงานข้อผิดพลาดของ Windows (WER) จะเขียนโฟลเดอร์ที่มีไฟล์ทุกครั้งที่โปรแกรมขัดข้องหรือหยุดตอบสนอง และ Windows จะเขียนไฟล์ดัมพ์เมื่อโปรแกรมหรือระบบล้มเหลว รายงานและไฟล์ดัมพ์เก่าลบได้อย่างปลอดภัยเพราะเป็นเพียงบันทึกของสิ่งที่เกิดขึ้นไปแล้ว และใช้เวลาล้างเพียงไม่กี่นาที: ลบเนื้อหาในโฟลเดอร์ WER และ CrashDumps เรียกใช้การล้างข้อมูลบนดิสก์สำหรับไฟล์ดัมพ์จากหน้าจอสีฟ้า หรือใช้เครื่องมือล้างข้อมูลที่ทำทั้งหมดในรอบเดียว",
        "ในพีซีที่เคยขัดข้องมาสองสามครั้ง ไฟล์เหล่านี้มักถูกลืม ไฟล์ดัมพ์เดียวจากเบราว์เซอร์หรือเกมอาจมีขนาดหลายร้อยเมกะไบต์ และไฟล์ดัมพ์หน่วยความจำแบบเต็มหลังหน้าจอสีฟ้าอาจใหญ่เท่ากับ RAM ที่ใช้อยู่ในขณะนั้น คู่มือนี้แสดงว่าไฟล์แต่ละประเภทอยู่ที่ไหน มีอะไรอยู่ข้างใน เมื่อใดควรเก็บไว้สักไฟล์ และวิธีลบอย่างปลอดภัย"
      ],
      "sections": [
        {
          "title": "การรายงานข้อผิดพลาดของ Windows เก็บอะไรไว้บ้าง",
          "content": [
            "เมื่อโปรแกรมขัดข้อง Windows จะรวบรวมรายงานขนาดเล็ก ได้แก่ชื่อและเวอร์ชันของโปรแกรม โมดูลที่ล้มเหลว และมักมีไฟล์เพิ่มเติมอีกสองสามไฟล์ เช่น ไฟล์มินิดัมพ์ หากคุณอนุญาต รายงานจะถูกส่งไปยัง Microsoft สำเนาจะอยู่ในพีซีของคุณในโฟลเดอร์ที่ตั้งชื่อตามเหตุการณ์ ภายใน ReportArchive สำหรับรายงานที่ส่งแล้ว และ ReportQueue สำหรับรายงานที่ยังรออยู่",
            "มีสองตำแหน่ง รายงานของโปรแกรมของคุณเองอยู่ใต้ %LOCALAPPDATA%\\Microsoft\\Windows\\WER ส่วนรายงานของส่วนประกอบระบบอยู่ใต้ C:\\ProgramData\\Microsoft\\Windows\\WER แต่ละรายงานมีขนาดเพียงไม่กี่กิโลไบต์ถึงไม่กี่เมกะไบต์ แต่จะสะสมในพีซีที่ใช้งานมาหลายปี",
            "Windows ไม่อ่านสิ่งใดในโฟลเดอร์เหล่านี้ตอนเริ่มระบบหรือระหว่างทำงาน สิ่งเดียวที่คุณสูญเสียเมื่อลบรายงานคือความสามารถในการดูรายละเอียดของการขัดข้องนั้นในภายหลัง"
          ]
        },
        {
          "title": "ไฟล์ดัมพ์จากการขัดข้อง: มาจากไหนและใหญ่แค่ไหน",
          "content": [
            "ไฟล์ดัมพ์จากการขัดข้องคือไฟล์นามสกุล .dmp ที่เก็บสแนปชอตของหน่วยความจำ ณ ตอนที่มีบางอย่างล้มเหลว มีสามประเภทที่คุณจะพบ ไฟล์ดัมพ์ของโปรแกรมจะถูกเขียนไปที่ %LOCALAPPDATA%\\CrashDumps เมื่อโปรแกรมขัดข้องและเปิดการเก็บไฟล์ดัมพ์ไว้ ไฟล์ดัมพ์หน่วยความจำขนาดเล็กจะไปที่ C:\\Windows\\Minidump หลังเกิดหน้าจอสีฟ้า ส่วนไฟล์ดัมพ์หน่วยความจำแบบเต็มหรือของเคอร์เนลจะถูกเขียนไปที่ C:\\Windows\\MEMORY.DMP",
            "ขนาดขึ้นอยู่กับโปรแกรม โปรแกรมแก้ไขข้อความเขียนไฟล์ขนาดเล็ก แต่เบราว์เซอร์ เกม หรือโปรแกรมตัดต่อวิดีโออาจเขียนไฟล์ดัมพ์หลายร้อยเมกะไบต์ เพราะไฟล์ดัมพ์รวมหน่วยความจำที่โปรแกรมใช้อยู่ โปรแกรมที่ขัดข้องไม่หยุด เช่น หลังการอัปเดตที่มีปัญหา อาจทิ้งไฟล์ไว้เป็นสิบ ๆ ไฟล์",
            "ไฟล์ดัมพ์มีไว้สำหรับนักพัฒนาหรือวิศวกรฝ่ายสนับสนุนที่โหลดเข้าดีบักเกอร์ หากคุณไม่ได้จะทำเช่นนั้น ไฟล์เหล่านี้ก็เป็นแค่ภาระ"
          ]
        },
        {
          "title": "เมื่อใดที่ควรเก็บไฟล์ดัมพ์ไว้",
          "content": [
            "เก็บไฟล์ดัมพ์ล่าสุดไว้หากคุณกำลังแก้ปัญหาอยู่ หน้าจอสีฟ้าที่เกิดซ้ำหรือโปรแกรมที่ขัดข้องทุกวันวินิจฉัยได้ง่ายกว่าเมื่อมีไฟล์ดัมพ์อยู่ในมือ และเจ้าหน้าที่สนับสนุนอาจขอไฟล์นั้น คัดลอกไฟล์นั้นไฟล์เดียวไปไว้ที่อื่น เช่น โฟลเดอร์เอกสาร ก่อนล้างข้อมูล",
            "อย่างอื่นลบได้หมด หากการขัดข้องเกิดขึ้นครั้งเดียวและโปรแกรมกลับมาทำงานได้แล้ว ไฟล์ดัมพ์จากเดือนที่แล้วก็ไม่มีค่าอะไร รายงานใน ReportArchive ก็เช่นเดียวกัน เพราะเป็นการอธิบายเหตุการณ์ที่ส่งไปแล้วหรือแก้ไขไปแล้ว",
            "กฎง่าย ๆ คือ เก็บไฟล์ดัมพ์ไว้อย่างมากหนึ่งไฟล์ต่อปัญหาที่คุณกำลังตรวจสอบอยู่จริง ๆ แล้วล้างที่เหลือ"
          ]
        },
        {
          "title": "ลบรายงานและไฟล์ดัมพ์ด้วยตนเอง",
          "content": [
            "เปิด File Explorer แล้ววางแต่ละเส้นทางลงในแถบที่อยู่ สำหรับ %LOCALAPPDATA%\\CrashDumps ให้เลือกไฟล์ทั้งหมดแล้วลบ สำหรับ %LOCALAPPDATA%\\Microsoft\\Windows\\WER ให้เปิด ReportArchive และ ReportQueue แล้วลบเนื้อหาข้างใน ทำเช่นเดียวกันใต้ C:\\ProgramData\\Microsoft\\Windows\\WER ซึ่ง Windows อาจขอสิทธิ์ผู้ดูแลระบบ ให้ลบเนื้อหา ไม่ใช่ตัวโฟลเดอร์เอง",
            "สำหรับไฟล์ดัมพ์จากหน้าจอสีฟ้า วิธีที่ง่ายที่สุดคือการล้างข้อมูลบนดิสก์ ค้นหาในเมนูเริ่ม เลือกไดรฟ์ระบบ เลือกล้างข้อมูลไฟล์ระบบ แล้วติ๊กไฟล์การถ่ายโอนข้อมูลหน่วยความจำข้อผิดพลาดของระบบ และไฟล์การรายงานข้อผิดพลาดของ Windows วิธีนี้จะล้าง C:\\Windows\\MEMORY.DMP และโฟลเดอร์ Minidump พร้อมกัน",
            "หาก Windows แจ้งว่าไฟล์กำลังถูกใช้งาน ให้ข้ามไป รายงานที่กำลังถูกเขียนอยู่ตอนนี้จะหายไปในรอบถัดไป"
          ]
        },
        {
          "title": "ล้างทั้งหมดในรอบเดียวด้วย Disk Mop",
          "content": [
            "หน้าเพิ่มพื้นที่ว่างของ Disk Mop แสดงรายงานข้อผิดพลาดและไฟล์ดัมพ์จากการขัดข้องเป็นรายการแยกกัน พร้อมขนาดและคำอธิบายสั้น ๆ ว่าการล้างทำอะไร รายงานข้อผิดพลาดครอบคลุมคลังและคิวรายงาน WER ในโปรไฟล์ของคุณและใน ProgramData ไฟล์ดัมพ์จากการขัดข้องครอบคลุม %LOCALAPPDATA%\\CrashDumps และ C:\\Windows\\Minidump",
            "เริ่มการสแกน ติ๊กรายการที่ต้องการ แล้วยืนยัน Disk Mop แสดงสิ่งที่พบก่อนจะลบอะไร และบางรายการ เช่น รายการระดับ Windows อาจขอสิทธิ์ผู้ดูแลระบบ การสแกนไม่มีค่าใช้จ่าย คุณจึงดูได้ว่าไฟล์เหล่านี้ใช้พื้นที่เท่าไรก่อนตัดสินใจ Disk Mop ไม่ลบ C:\\Windows\\MEMORY.DMP ให้ใช้การล้างข้อมูลบนดิสก์สำหรับไฟล์นั้น",
            "หากต้องการให้เครื่องสะอาดอยู่เสมอ เครื่องมือล้างข้อมูลตามกำหนดเวลาสามารถเรียกใช้รายการที่ปลอดภัยของเพิ่มพื้นที่ว่างในเบื้องหลังตามตารางที่ตั้งไว้"
          ]
        },
        {
          "title": "หากการขัดข้องยังเกิดซ้ำอีก",
          "content": [
            "การล้างข้อมูลเพียงลบหลักฐาน หากโปรแกรมเดิมขัดข้องทุกสัปดาห์ ให้หาสาเหตุ อัปเดตโปรแกรมและไดรเวอร์กราฟิกและที่เก็บข้อมูล ตรวจสอบว่า Windows อัปเดตครบแล้ว และดูสุขภาพของดิสก์ เพราะไดรฟ์ที่กำลังเสียอาจทำให้เกิดการขัดข้องและหน้าจอสีฟ้าได้ การทดสอบหน่วยความจำก็คุ้มค่าหากการขัดข้องเกิดแบบสุ่ม",
            "การเหลือพื้นที่ว่างในไดรฟ์ระบบก็ช่วยได้เช่นกัน Windows ต้องการที่ว่างเพื่อเขียนไฟล์ดัมพ์และรันการอัปเดต และไดรฟ์ที่เกือบเต็มจะทำให้ทั้งสองอย่างล้มเหลวในแบบที่สร้างความสับสน"
          ]
        }
      ],
      "verdict": [
        "ไฟล์การรายงานข้อผิดพลาดของ Windows และไฟล์ดัมพ์จากการขัดข้องเป็นบันทึกของการขัดข้องที่เกิดขึ้นไปแล้ว ดังนั้นหลังจากคัดลอกไฟล์ดัมพ์ที่ต้องการตรวจสอบแยกไว้ ที่เหลือลบได้อย่างปลอดภัย การล้างข้อมูลบนดิสก์จัดการไฟล์ดัมพ์จากหน้าจอสีฟ้า และโฟลเดอร์ในโปรไฟล์ของคุณก็ล้างด้วยตนเองได้",
        "Disk Mop รวมรายงานข้อผิดพลาดและไฟล์ดัมพ์จากการขัดข้องไว้ในการสแกนครั้งเดียวพร้อมกับแคชและไฟล์ชั่วคราว แสดงขนาดของแต่ละรายการ และถามก่อนลบ การสแกนไม่มีค่าใช้จ่าย คุณจึงดูได้ว่าการขัดข้องเก่า ๆ ใช้พื้นที่เท่าไรก่อนตัดสินใจล้าง"
      ],
      "ctaText": "ค้นหาและล้างรายงานข้อผิดพลาดและไฟล์ดัมพ์จากการขัดข้องด้วย Disk Mop"
    },
    "vi": {
      "title": "Báo cáo lỗi Windows và tệp kết xuất sự cố: là gì và cách xóa",
      "metaDescription": "Tệp Báo cáo lỗi Windows và tệp kết xuất sự cố có thể chiếm hàng GB. Xem chúng nằm ở đâu, tệp nào xóa an toàn và cách dọn dẹp từng bước một cách dễ dàng.",
      "subtitle": "Lấy lại dung lượng từ các báo cáo sự cố cũ mà không đụng đến thứ Windows cần",
      "keyTakeaways": [
        "Báo cáo lỗi Windows (WER) lưu một thư mục báo cáo cho mỗi sự cố được gửi đến Microsoft; các báo cáo cũ trong ReportArchive và ReportQueue không còn tác dụng sau khi đã được gửi.",
        "Tệp kết xuất sự cố trong %LOCALAPPDATA%\\CrashDumps và C:\\Windows\\Minidump là ảnh chụp bộ nhớ dùng để gỡ lỗi; mỗi tệp có thể lên tới hàng trăm megabyte, và việc xóa chúng không ảnh hưởng đến cách Windows hoạt động.",
        "Chỉ giữ lại tệp kết xuất mới nhất nếu bạn đang chủ động khắc phục màn hình xanh hoặc chương trình hay bị sập; nếu không, hãy xóa tất cả."
      ],
      "dataTable": {
        "caption": "Nơi Windows lưu báo cáo lỗi và tệp kết xuất sự cố",
        "columns": [
          "Mục",
          "Vị trí thường gặp",
          "Đó là gì",
          "Xóa có an toàn không?"
        ],
        "rows": [
          [
            "Kho lưu trữ và hàng đợi báo cáo WER (theo từng người dùng)",
            "%LOCALAPPDATA%\\Microsoft\\Windows\\WER\\ReportArchive và ReportQueue",
            "Các thư mục chứa chi tiết về sự cố và treo của chương trình của chính bạn",
            "Có"
          ],
          [
            "Kho lưu trữ và hàng đợi báo cáo WER (mọi người dùng)",
            "C:\\ProgramData\\Microsoft\\Windows\\WER\\ReportArchive và ReportQueue",
            "Các báo cáo tương tự cho thành phần hệ thống dùng chung",
            "Có (có thể cần quyền quản trị viên)"
          ],
          [
            "Tệp kết xuất sự cố của chương trình",
            "%LOCALAPPDATA%\\CrashDumps",
            "Tệp .dmp được ghi khi một chương trình bị sập",
            "Có"
          ],
          [
            "Kết xuất bộ nhớ nhỏ",
            "C:\\Windows\\Minidump",
            "Các tệp .dmp nhỏ được ghi sau màn hình xanh",
            "Có, trừ khi bạn đang phân tích một màn hình xanh"
          ],
          [
            "Kết xuất bộ nhớ đầy đủ",
            "C:\\Windows\\MEMORY.DMP",
            "Tệp kết xuất lớn của bộ nhớ nhân sau màn hình xanh",
            "Có, qua Dọn dẹp ổ đĩa hoặc xóa thủ công"
          ]
        ]
      },
      "howTo": {
        "name": "Cách xóa báo cáo lỗi Windows và tệp kết xuất sự cố",
        "totalTime": "PT5M",
        "steps": [
          {
            "name": "Kiểm tra chúng chiếm bao nhiêu dung lượng",
            "text": "Mở File Explorer và dán %LOCALAPPDATA%\\CrashDumps vào thanh địa chỉ. Nhấp chuột phải vào thư mục, chọn Thuộc tính và ghi lại kích thước. Lặp lại với %LOCALAPPDATA%\\Microsoft\\Windows\\WER."
          },
          {
            "name": "Quyết định có cần tệp kết xuất mới nhất hay không",
            "text": "Nếu hôm nay một chương trình hoặc Windows bị sập và bạn định tìm hiểu nguyên nhân, hãy sao chép tệp .dmp mới nhất sang thư mục khác trước. Nếu không, không có gì trong các thư mục này là cần thiết."
          },
          {
            "name": "Xóa nội dung bên trong, không xóa thư mục",
            "text": "Chọn mọi thứ bên trong CrashDumps, ReportArchive và ReportQueue rồi xóa. Windows sẽ tạo lại các thư mục khi cần. Bỏ qua mọi tệp mà Windows báo là đang được sử dụng."
          },
          {
            "name": "Xóa các tệp kết xuất của màn hình xanh",
            "text": "Chạy Dọn dẹp ổ đĩa, chọn Dọn dẹp tệp hệ thống rồi đánh dấu Tệp kết xuất bộ nhớ lỗi hệ thống và Tệp Báo cáo lỗi Windows. Cách này cũng xóa C:\\Windows\\MEMORY.DMP và thư mục Minidump."
          },
          {
            "name": "Làm tất cả trong một lượt với Disk Mop",
            "text": "Mở Disk Mop, vào Giải phóng dung lượng, chạy quá trình quét rồi đánh dấu Báo cáo lỗi và Tệp kết xuất sự cố. Xem lại kích thước rồi xác nhận; không có gì bị xóa trước khi bạn xác nhận."
          }
        ]
      },
      "faq": [
        {
          "question": "Xóa các tệp Báo cáo lỗi Windows có an toàn không?",
          "answer": "Có. Các tệp trong thư mục ReportArchive và ReportQueue của WER là bản ghi về những sự cố đã xảy ra. Windows không cần chúng để chạy, và việc xóa chỉ làm mất lịch sử mà bạn có thể gửi cho Microsoft hoặc nhà phát triển."
        },
        {
          "question": "Vì sao thư mục CrashDumps của tôi quá lớn?",
          "answer": "Tệp kết xuất sự cố chứa ảnh chụp bộ nhớ của chương trình tại thời điểm nó thất bại, vì vậy chương trình dùng nhiều bộ nhớ sẽ ghi ra tệp lớn. Chương trình sập liên tục sẽ ghi một tệp kết xuất mới mỗi lần, và Windows không tự dọn chúng."
        },
        {
          "question": "Xóa tệp kết xuất sự cố có ngăn được sự cố hoặc màn hình xanh không?",
          "answer": "Không. Tệp kết xuất là sản phẩm phụ của sự cố chứ không phải nguyên nhân. Xóa chúng giải phóng dung lượng nhưng không thay đổi lý do chương trình hay Windows bị lỗi. Nếu sự cố cứ lặp lại, hãy xử lý nguyên nhân: cập nhật trình điều khiển, kiểm tra tình trạng ổ đĩa và bộ nhớ."
        },
        {
          "question": "Tôi có thể ngăn Windows tạo quá nhiều tệp kết xuất không?",
          "answer": "Bạn có thể giảm bớt. Trong Thuộc tính hệ thống, thẻ Nâng cao, mục Khởi động và Phục hồi, hãy chọn kết xuất bộ nhớ nhỏ thay vì đầy đủ, để màn hình xanh chỉ ghi một tệp nhỏ. Tệp kết xuất của chương trình trong CrashDumps chỉ xuất hiện khi việc thu thập kết xuất được bật cho chương trình đó."
        }
      ],
      "intro": [
        "Báo cáo lỗi Windows (WER) ghi một thư mục tệp mỗi khi chương trình bị sập hoặc ngừng phản hồi, và Windows ghi một tệp kết xuất sự cố khi chương trình hoặc hệ thống thất bại. Báo cáo và tệp kết xuất cũ có thể xóa an toàn vì chúng chỉ là bản ghi về điều đã xảy ra, và việc dọn dẹp chỉ mất vài phút: xóa nội dung của các thư mục WER và CrashDumps, chạy Dọn dẹp ổ đĩa cho các tệp kết xuất của màn hình xanh, hoặc dùng công cụ dọn dẹp làm tất cả trong một lượt.",
        "Trên một chiếc PC đã sập vài lần, những tệp này rất dễ bị quên. Một tệp kết xuất từ trình duyệt hoặc trò chơi có thể nặng vài trăm megabyte, còn tệp kết xuất bộ nhớ đầy đủ sau màn hình xanh có thể lớn bằng lượng RAM đang dùng. Hướng dẫn này chỉ ra từng loại tệp nằm ở đâu, chứa gì, khi nào nên giữ lại một tệp và cách xóa chúng an toàn."
      ],
      "sections": [
        {
          "title": "Báo cáo lỗi Windows lưu những gì",
          "content": [
            "Khi một chương trình bị sập, Windows thu thập một báo cáo nhỏ: tên và phiên bản chương trình, mô-đun bị lỗi, và thường có thêm vài tệp phụ như tệp kết xuất nhỏ. Nếu bạn cho phép, báo cáo được gửi đến Microsoft. Một bản sao vẫn nằm trên PC của bạn trong thư mục đặt tên theo sự kiện, bên trong ReportArchive cho các báo cáo đã gửi và ReportQueue cho các báo cáo còn đang chờ.",
            "Có hai nơi. Báo cáo cho chương trình của chính bạn nằm dưới %LOCALAPPDATA%\\Microsoft\\Windows\\WER, và báo cáo cho các thành phần hệ thống dùng chung nằm dưới C:\\ProgramData\\Microsoft\\Windows\\WER. Mỗi báo cáo chỉ vài kilobyte đến vài megabyte, nhưng chúng cộng dồn trên một PC đã chạy nhiều năm.",
            "Windows không đọc bất kỳ thứ gì trong các thư mục này khi khởi động hay khi chạy. Điều duy nhất bạn mất khi xóa một báo cáo là khả năng xem lại chi tiết về sự cố đó sau này."
          ]
        },
        {
          "title": "Tệp kết xuất sự cố: từ đâu ra và lớn đến mức nào",
          "content": [
            "Tệp kết xuất sự cố là tệp có phần mở rộng .dmp, chứa ảnh chụp bộ nhớ vào lúc có sự cố. Bạn sẽ gặp ba loại. Tệp kết xuất của chương trình được ghi vào %LOCALAPPDATA%\\CrashDumps khi chương trình bị sập và việc thu thập kết xuất đang bật. Kết xuất bộ nhớ nhỏ được ghi vào C:\\Windows\\Minidump sau màn hình xanh. Kết xuất bộ nhớ đầy đủ hoặc bộ nhớ nhân được ghi vào C:\\Windows\\MEMORY.DMP.",
            "Kích thước phụ thuộc vào chương trình. Trình soạn thảo văn bản ghi tệp nhỏ, nhưng trình duyệt, trò chơi hoặc phần mềm dựng video có thể ghi tệp kết xuất vài trăm megabyte, vì tệp kết xuất bao gồm bộ nhớ chương trình đang dùng. Một chương trình cứ sập liên tục, chẳng hạn sau một bản cập nhật lỗi, có thể để lại hàng chục tệp.",
            "Tệp kết xuất dành cho nhà phát triển hoặc kỹ sư hỗ trợ nạp chúng vào trình gỡ lỗi. Nếu bạn không định làm vậy, chúng chỉ là gánh nặng."
          ]
        },
        {
          "title": "Khi nào nên giữ lại một tệp kết xuất",
          "content": [
            "Hãy giữ lại tệp kết xuất mới nhất nếu bạn đang giữa quá trình khắc phục sự cố. Màn hình xanh lặp lại hoặc chương trình sập mỗi ngày sẽ dễ chẩn đoán hơn khi có sẵn tệp kết xuất, và nhân viên hỗ trợ có thể yêu cầu nó. Hãy sao chép riêng tệp đó sang nơi khác, chẳng hạn thư mục Documents, trước khi dọn dẹp.",
            "Mọi thứ còn lại đều có thể xóa. Nếu sự cố chỉ xảy ra một lần và chương trình đã hoạt động lại, tệp kết xuất từ tháng trước không còn giá trị. Điều tương tự áp dụng cho báo cáo trong ReportArchive: chúng mô tả các sự kiện đã được gửi hoặc đã được giải quyết.",
            "Một quy tắc đơn giản: giữ tối đa một tệp kết xuất cho mỗi vấn đề bạn đang chủ động điều tra, và xóa phần còn lại."
          ]
        },
        {
          "title": "Xóa báo cáo và tệp kết xuất thủ công",
          "content": [
            "Mở File Explorer và dán từng đường dẫn vào thanh địa chỉ. Với %LOCALAPPDATA%\\CrashDumps, chọn tất cả tệp rồi xóa. Với %LOCALAPPDATA%\\Microsoft\\Windows\\WER, mở ReportArchive và ReportQueue rồi xóa nội dung của chúng. Làm tương tự dưới C:\\ProgramData\\Microsoft\\Windows\\WER, nơi Windows có thể yêu cầu quyền quản trị viên. Hãy xóa nội dung chứ không xóa chính các thư mục.",
            "Với tệp kết xuất của màn hình xanh, cách đơn giản nhất là Dọn dẹp ổ đĩa. Tìm nó trong menu Start, chọn ổ đĩa hệ thống, chọn Dọn dẹp tệp hệ thống rồi đánh dấu Tệp kết xuất bộ nhớ lỗi hệ thống và Tệp Báo cáo lỗi Windows. Cách này dọn cả C:\\Windows\\MEMORY.DMP và thư mục Minidump cùng lúc.",
            "Nếu Windows báo một tệp đang được sử dụng, hãy bỏ qua. Báo cáo đang được ghi ngay lúc này sẽ biến mất ở lượt dọn tiếp theo."
          ]
        },
        {
          "title": "Dọn sạch trong một lượt với Disk Mop",
          "content": [
            "Trang Giải phóng dung lượng của Disk Mop liệt kê Báo cáo lỗi và Tệp kết xuất sự cố thành các mục riêng, kèm kích thước và lời giải thích ngắn về việc dọn dẹp sẽ làm gì. Báo cáo lỗi bao gồm kho lưu trữ và hàng đợi báo cáo WER trong hồ sơ của bạn và trong ProgramData. Tệp kết xuất sự cố bao gồm %LOCALAPPDATA%\\CrashDumps và C:\\Windows\\Minidump.",
            "Chạy quá trình quét, đánh dấu các mục bạn muốn rồi xác nhận. Disk Mop hiển thị những gì tìm thấy trước khi xóa bất cứ thứ gì, và một số mục, như các mục cấp Windows, có thể yêu cầu quyền quản trị viên. Việc quét là miễn phí, nên bạn có thể xem các tệp này chiếm bao nhiêu dung lượng trước khi quyết định. Disk Mop không xóa C:\\Windows\\MEMORY.DMP; hãy dùng Dọn dẹp ổ đĩa cho tệp đó.",
            "Nếu muốn máy luôn sạch, công cụ dọn dẹp theo lịch có thể chạy các mục an toàn của Giải phóng dung lượng ở chế độ nền theo lịch đã đặt."
          ]
        },
        {
          "title": "Nếu sự cố cứ quay lại",
          "content": [
            "Dọn dẹp chỉ xóa bằng chứng. Nếu cùng một chương trình sập mỗi tuần, hãy tìm nguyên nhân. Cập nhật chương trình cùng trình điều khiển đồ họa và lưu trữ, kiểm tra Windows đã được cập nhật đầy đủ chưa, và xem tình trạng ổ đĩa, vì ổ đĩa hỏng có thể gây sự cố và màn hình xanh. Nên chạy kiểm tra bộ nhớ nếu sự cố xảy ra ngẫu nhiên.",
            "Việc chừa dung lượng trống trên ổ đĩa hệ thống cũng có ích. Windows cần chỗ để ghi tệp kết xuất và chạy các bản cập nhật, và ổ đĩa gần đầy khiến cả hai thất bại theo những cách khó hiểu."
          ]
        }
      ],
      "verdict": [
        "Tệp Báo cáo lỗi Windows và tệp kết xuất sự cố là bản ghi về những sự cố đã xảy ra, nên sau khi bạn sao chép riêng bất kỳ tệp kết xuất nào muốn điều tra, phần còn lại có thể xóa an toàn. Dọn dẹp ổ đĩa xử lý các tệp kết xuất của màn hình xanh, còn các thư mục trong hồ sơ của bạn có thể làm trống thủ công.",
        "Disk Mop đặt Báo cáo lỗi và Tệp kết xuất sự cố vào cùng một lượt quét bên cạnh bộ nhớ đệm và tệp tạm, hiển thị kích thước của từng mục và hỏi trước khi xóa. Việc quét là miễn phí, nên bạn có thể xem các sự cố cũ đang chiếm bao nhiêu dung lượng trước khi quyết định dọn dẹp."
      ],
      "ctaText": "Tìm và xóa báo cáo lỗi và tệp kết xuất sự cố bằng Disk Mop"
    }
  },
};
