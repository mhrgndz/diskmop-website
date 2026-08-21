import type { Article } from '../types';

export const autoEmptyRecycleBin: Article = {
  slug: 'automatically-empty-recycle-bin',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-07-19',
  readingTime: 6,
  content: {
    tr: {
      title: 'Geri Dönüşüm Kutusunu Otomatik Boşaltma (Windows 11)',
      metaDescription:
        'Geri dönüşüm kutusunu otomatik boşaltma için üç yöntem: Depolama Alanı Algılayıcısı, Görev Zamanlayıcısı ve haftalık temizlik zamanlaması. Adım adım öğrenin.',
      subtitle: 'Kutuyu Bir Daha Elle Boşaltmamanız İçin Üç Yöntem',
      intro: [
        'Windows 11\'de geri dönüşüm kutusunu otomatik boşaltmanın en hızlı yolu Depolama Alanı Algılayıcısı\'dır: Ayarlar\'ı açın, Sistem ve ardından Depolama bölümüne gidin, Depolama Alanı Algılayıcısı\'nı etkinleştirin ve kutuda 30 günden uzun süredir bekleyen dosyaların silinmesini seçin. Sabit bir takvim isterseniz, Görev Zamanlayıcısı\'nda Clear-RecycleBin -Force PowerShell komutunu çalıştıran haftalık bir görev aynı işi belirlediğiniz gün ve saatte yapar. İki yöntem de ücretsizdir, Windows\'a yerleşiktir ve kurulumu beş dakikadan kısa sürer.',
        'Geri dönüşüm kutusu sessizce büyür: sildiğiniz her dosya aslında diskten gitmez, kutuya taşınır ve yer kaplamaya devam eder. Aylar sonra kutunun gigabaytlarca alan tuttuğunu fark eden kullanıcı sayısı hiç az değildir. Bu rehberde üç otomasyon yolunu yan yana koyacağız: Depolama Alanı Algılayıcısı, Görev Zamanlayıcısı ve kutunun yanı sıra önbellekleri ile eski indirmeleri de temizleyen Disk Mop\'un zamanlanmış temizliği. Önce yerleşik yöntemlerin adımlarını eksiksiz göreceksiniz, ardından hangisinin size uyduğuna karar verebileceksiniz.',
      ],
      sections: [
        {
          title: 'Geri Dönüşüm Kutunuz Gerçekte Ne Kadar Yer Kaplıyor?',
          content: [
            'Bir dosyayı silmek disk alanı boşaltmaz. Dosya yalnızca geri dönüşüm kutusuna taşınır ve siz kutuyu boşaltana kadar sürücünüzde yer kaplamaya devam eder. Windows her sürücüde kutu için bir alan payı ayırır; bu yüzden aylarca biriken silinmiş videolar, kurulum dosyaları ve eski projeler fark edilmeden gigabaytlarca alanı rehin tutabilir.',
            'Kutunun güncel boyutunu görmek için Ayarlar\'ı açın, Sistem ve ardından Depolama bölümüne girin, Geçici dosyalar satırına tıklayın; listede Geri Dönüşüm Kutusu öğesi tam boyutuyla görünür. Alternatif olarak masaüstünden Geri Dönüşüm Kutusu\'nu açın, Ctrl+A ile tüm öğeleri seçin ve sağ tıklayıp Özellikler\'e bakın.',
            'Kutu, dolan bir diskin genellikle yalnızca bir parçasıdır. Disk Mop\'un disk analizi (Disk Analysis), sürücünüzü görsel bir treemap ile tarayarak kutu dahil hangi klasörlerin en çok yer kapladığını tek bakışta gösterir; böylece temizliğe nereden başlayacağınızı tahmin etmek zorunda kalmazsınız.',
          ],
        },
        {
          title: 'Depolama Alanı Algılayıcısı ile Otomatik Boşaltma',
          content: [
            'Depolama Alanı Algılayıcısı (Storage Sense), Windows 10 ve 11\'e yerleşik ücretsiz otomasyon aracıdır. Geçici dosyaları temizler ve geri dönüşüm kutusunda belirli bir süreden uzun bekleyen öğeleri kendiliğinden siler. Ek program kurmadan otomatik boşaltma isteyenler için ilk durak burasıdır.',
            'Kurulum adımları: Win+I ile Ayarlar\'ı açın, Sistem ve ardından Depolama bölümüne gidin. Depolama Alanı Algılayıcısı anahtarını açık konuma getirin, sonra ayrıntıları görmek için satırın üzerine tıklayın. Geri dönüşüm kutusundaki dosyaların silinme süresini 1, 14, 30 veya 60 gün olarak seçin. Çalışma sıklığını da her gün, her hafta, her ay veya yalnızca boş disk alanı azaldığında olarak belirleyin.',
            'İki sınırlamaya dikkat edin. Birincisi, bu araç yaşa göre çalışır: yalnızca seçtiğiniz süreden eski dosyaları siler, kutuyu belirli bir günde komple boşaltmaz. İkincisi, varsayılan tetikleyici yalnızca disk alanı azaldığında devreye girer; düzenli çalışma istiyorsanız sıklığı elle seçmelisiniz. Ayrıca İndirilenler klasörünü de temizleyebilen bir seçeneği vardır; saklamak istediğiniz dosyaları yanlışlıkla silmemesi için bu ayarı kontrol edin.',
          ],
        },
        {
          title: 'Görev Zamanlayıcısı ile Zamanlanmış Temizlik',
          content: [
            'Kutunun her hafta belirli bir gün ve saatte, içindeki her şeyle birlikte boşalmasını istiyorsanız Görev Zamanlayıcısı (Task Scheduler) daha kesin bir yoldur. Yaş filtresi yoktur; görev çalıştığında kutu tamamen boşalır.',
            'Adımlar: Başlat menüsünde Görev Zamanlayıcısı\'nı aratın veya Çalıştır penceresine taskschd.msc yazın. Eylem menüsünden Temel Görev Oluştur\'u seçin ve göreve bir ad verin. Tetikleyici olarak Haftalık\'ı seçip gün ve saati belirleyin. Eylem olarak Program başlat\'ı seçin; program alanına powershell.exe yazın, bağımsız değişkenler alanına -NoProfile -Command Clear-RecycleBin -Force ekleyin ve sihirbazı tamamlayın.',
            'Uyarılar: Bu komut çalıştığı anda kutudaki her şeyi kalıcı olarak siler; birkaç saniye önce sildiğiniz bir dosya bile kurtarılamaz hale gelir. Kutu zaten boşken oluşan hata mesajını bastırmak için komutun sonuna -ErrorAction SilentlyContinue ekleyebilirsiniz. Görevi kaydettikten sonra üzerine sağ tıklayıp Çalıştır\'ı seçerek bir kez test edin.',
          ],
        },
        {
          title: 'Geri Dönüşüm Kutusunun Maksimum Boyutunu Sınırlayın',
          content: [
            'Üçüncü bir yaklaşım, kutunun büyüyebileceği alanı baştan sınırlamaktır. Kutu belirlediğiniz sınıra ulaştığında Windows en eski öğeleri kendiliğinden kalıcı olarak siler; böylece kutu hiçbir zaman kontrolden çıkmaz.',
            'Adımlar: Masaüstündeki Geri Dönüşüm Kutusu simgesine sağ tıklayın ve Özellikler\'i seçin. Listeden bir sürücü seçin, Özel boyut seçeneğini işaretleyin ve MB cinsinden bir üst sınır girin; örneğin 5 GB için 5120 yazın. Her sürücünün kendi kutusu olduğundan bu ayarı sürücü başına tekrarlayın ve Tamam ile onaylayın.',
            'Windows varsayılan olarak sürücü boyutunun bir yüzdesini ayırır; büyük disklerde bu pay onlarca gigabayta ulaşabilir. Çoğu kullanıcı için 2 ila 10 GB arası sabit bir sınır fazlasıyla yeterlidir. Bu yöntem, Depolama Alanı Algılayıcısı ile birlikte kullanıldığında hem yaş hem boyut sınırı sağlar.',
          ],
        },
        {
          title: 'Kutuyu Tamamen Atlamak — ve Bunun Riskleri',
          content: [
            'Windows, geri dönüşüm kutusunu tamamen devre dışı bırakmanıza da izin verir. Bir dosyayı Shift+Delete ile silerseniz kutuya uğramadan doğrudan silinir. Kalıcı olarak da Geri Dönüşüm Kutusu Özellikler penceresinde, dosyaların kutuya taşınmadan hemen silinmesini sağlayan bir seçenek vardır.',
            'Bunu önermiyoruz. Kutu, yanlışlıkla silmelere karşı tek yerleşik güvenlik ağınızdır. Kutuyu atlayan bir dosyanın geri getirilmesi özel kurtarma yazılımı gerektirir, sonuç garantili değildir ve TRIM özellikli SSD\'lerde veriler çok kısa sürede gerçekten yok olur. Yanlış bir seçim, tek tuşla dönüşü olmayan bir kayba dönüşebilir.',
            'Daha akıllı yol, kutuyu güvenlik ağı olarak tutup boşaltmayı otomatiğe bağlamaktır. 14 günlük bir Depolama Alanı Algılayıcısı süresi veya Disk Mop\'un haftalık zamanlanmış temizliği, alan kazancının neredeyse tamamını riskin hiçbiri olmadan sağlar.',
          ],
        },
        {
          title: 'Geri Dönüşüm Kutusunun Ötesinde Kur ve Unut Temizlik',
          content: [
            'Geri dönüşüm kutusu, dolan bir diskin yalnızca bir kalemidir. Sistem önbelleği, tarayıcı önbellekleri, aylardır açılmayan indirmeler ve geçici dosyalar çoğu zaman kutudan daha fazla yer kaplar. Yerleşik araçlar bu alanların her biri için ayrı ayrı uğraşmanızı gerektirir.',
            'Disk Mop\'un zamanlanmış temizliği (Scheduled Cleanup) bu yüzden gerçek kur ve unut çözümüdür: haftalık veya aylık görev oluşturursunuz ve uygulama tek seferde geri dönüşüm kutusunu boşaltır, sistem önbelleğini, Chrome, Firefox ve Edge tarayıcı önbelleklerini temizler ve İndirilenler klasöründeki eski dosyaları kategorilere ayırarak toplar. Hızlandır (Speed Up) özelliği aynı temizliği istediğiniz an tek tıkla yapar, sistem sağlık puanı da genel durumu tek bakışta gösterir.',
            'Disk Mop\'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.',
          ],
        },
      ],
      verdict: [
        'Windows 11\'de geri dönüşüm kutusunu otomatik boşaltmanın üç sağlam yolu var. Depolama Alanı Algılayıcısı en kolayıdır ve yaş temelli çalışır; Görev Zamanlayıcısı tam takvim kontrolü verir ama kutuyu her seferinde komple boşaltır; boyut sınırı ise kutunun hiçbir zaman taşmamasını sağlar. Kutuyu tamamen atlamak ise kazandırdığı alana değmeyecek kadar risklidir.',
        'Sorununuz yalnızca kutu değil de genel olarak dolan bir diskse, Disk Mop üç yöntemin ötesine geçer: zamanlanmış temizlik, kutuyla birlikte önbellekleri ve eski indirmeleri de her hafta otomatik temizler. Tek seferlik 19,90 dolara, diskinizi kendi kendine bakım yapan bir sisteme dönüştürürsünüz.',
      ],
      ctaText: 'Disk Mop ile temizliği otomatiğe bağlayın',
    },
    en: {
      title: 'Automatically Empty Recycle Bin in Windows 11 (Easy)',
      metaDescription:
        'Learn how to automatically empty the Recycle Bin in Windows 11 using Storage Sense, Task Scheduler or a scheduled cleanup app — and reclaim gigabytes of space.',
      subtitle: 'Three Ways to Never Empty the Bin by Hand Again',
      intro: [
        'The quickest way to automatically empty the Recycle Bin in Windows 11 is Storage Sense: open Settings, go to System and then Storage, turn on Storage Sense, and set it to delete files that have been in the bin for more than 30 days. If you prefer a fixed schedule, a weekly Task Scheduler job running the PowerShell command Clear-RecycleBin -Force does the same at an exact day and time. Both methods are free, built into Windows, and take under five minutes to set up.',
        'The Recycle Bin grows silently: deleting a file does not remove it from your drive, it just moves it into the bin, where it keeps taking up space. Plenty of users discover months later that the bin is holding onto gigabytes. In this guide we put the three automation routes side by side — Storage Sense, Task Scheduler, and Disk Mop\'s Scheduled Cleanup, which also covers caches and old downloads. You will see the complete steps for the built-in methods first, then decide which route fits you best.',
      ],
      sections: [
        {
          title: 'How Much Space Is Your Recycle Bin Really Using?',
          content: [
            'Deleting a file does not free disk space. The file simply moves to the Recycle Bin and keeps occupying your drive until you empty it. Windows reserves a slice of every drive for the bin, so months of deleted videos, installers, and abandoned projects can quietly hold gigabytes hostage without you noticing.',
            'To check the bin\'s current size, open Settings, go to System and then Storage, and click the Temporary files entry; the list shows a Recycle Bin item with its exact size. Alternatively, open the Recycle Bin from the desktop, select everything with Ctrl+A, then right-click and choose Properties to see the total.',
            'The bin is usually only one part of a filling disk. Disk Mop\'s Disk Analysis scans your drive with a visual treemap and shows at a glance which folders — the bin included — take the most space, so you never have to guess where to start cleaning.',
          ],
        },
        {
          title: 'Empty the Recycle Bin Automatically with Storage Sense',
          content: [
            'Storage Sense is the free automation tool built into Windows 10 and 11. It cleans temporary files and automatically deletes Recycle Bin items that have been sitting there longer than a threshold you choose. If you want automatic emptying without installing anything, this is the first stop.',
            'Here is the setup: press Win+I to open Settings, go to System and then Storage. Switch the Storage Sense toggle on, then click the row itself to open its details. Under the Recycle Bin option, choose how old files must be before deletion — 1, 14, 30, or 60 days. Then set how often Storage Sense runs: every day, every week, every month, or only during low free disk space.',
            'Watch out for two limitations. First, Storage Sense is age-based: it only removes files older than your threshold, it never wipes the bin completely on a fixed day. Second, the default trigger only fires when free disk space runs low, so pick a frequency manually if you want regular runs. It can also clean your Downloads folder if that option is enabled — review the setting so it does not remove files you meant to keep.',
          ],
        },
        {
          title: 'Schedule Recycle Bin Cleanup with Task Scheduler',
          content: [
            'If you want the bin emptied completely on a specific day and time every week, Task Scheduler is the more precise route. There is no age filter — when the task runs, everything in the bin goes.',
            'The steps: search for Task Scheduler in the Start menu, or type taskschd.msc into the Run dialog. From the Action menu choose Create Basic Task and give it a name. Pick Weekly as the trigger and select your day and time. For the action, choose Start a program; enter powershell.exe as the program, add -NoProfile -Command Clear-RecycleBin -Force in the arguments field, and finish the wizard.',
            'Two caveats: the command permanently deletes everything in the bin the moment it runs, including a file you deleted seconds earlier. You can append -ErrorAction SilentlyContinue to suppress the error PowerShell raises when the bin is already empty. After saving, right-click the task and choose Run to test it once and confirm it works.',
          ],
        },
        {
          title: 'Limit the Recycle Bin\'s Maximum Size per Drive',
          content: [
            'A third approach is capping how large the bin can grow in the first place. Once the bin hits your limit, Windows permanently deletes the oldest items on its own, so the bin can never spiral out of control.',
            'The steps: right-click the Recycle Bin icon on the desktop and choose Properties. Select a drive from the list, pick the Custom size option, and enter a maximum in MB — for example 5120 for 5 GB. Each drive has its own bin, so repeat the setting per drive and confirm with OK.',
            'By default, Windows reserves a percentage of each drive, which on large disks can amount to tens of gigabytes. A fixed cap of 2 to 10 GB is plenty for most people. This method pairs well with Storage Sense: one controls age, the other controls size.',
          ],
        },
        {
          title: 'Bypass the Bin Entirely — and Why That Is Risky',
          content: [
            'Windows also lets you skip the Recycle Bin altogether. Pressing Shift+Delete removes a file immediately without it ever entering the bin, and the Recycle Bin Properties window has an option that makes every deletion permanent by removing files instead of moving them to the bin.',
            'We do not recommend it. The bin is your only built-in safety net against accidental deletion. Recovering a file that bypassed the bin requires specialized recovery software, the result is never guaranteed, and on SSDs with TRIM the data is often genuinely gone within minutes. One wrong selection turns into an irreversible loss.',
            'The smarter play is keeping the bin as a safety net and automating the emptying instead. A 14-day Storage Sense window, or Disk Mop\'s weekly Scheduled Cleanup, delivers nearly all of the space savings with none of the risk.',
          ],
        },
        {
          title: 'Set-and-Forget Cleanup Beyond the Recycle Bin',
          content: [
            'The Recycle Bin is only one line item on a filling disk. System cache, browser caches, downloads you have not opened in months, and temporary files often take up more space than the bin itself. The built-in tools make you handle each of these areas separately.',
            'That is why Disk Mop\'s Scheduled Cleanup is the true set-and-forget answer: you create a weekly or monthly task, and the app empties the Recycle Bin, clears the system cache, cleans the browser caches of Chrome, Firefox, and Edge, and sorts out old files in your Downloads folder — all in one pass. The Speed Up feature runs the same cleanup on demand with a single click, and the System Health Score shows your overall condition at a glance.',
            'You can download Disk Mop for free and try it with limited features; the Pro version is a one-time payment of $19.90 for a lifetime license. It runs on Windows 10 and 11 (64-bit) as well as macOS 12 and later.',
          ],
        },
      ],
      verdict: [
        'There are three solid ways to automatically empty the Recycle Bin in Windows 11. Storage Sense is the easiest and works by age; Task Scheduler gives you exact calendar control but wipes the bin completely each run; a size cap guarantees the bin never overflows. Bypassing the bin entirely saves too little to justify the risk.',
        'If your real problem is a filling disk rather than just the bin, Disk Mop goes beyond all three: its Scheduled Cleanup automatically empties the bin and clears caches and old downloads every week. For a one-time $19.90, your disk becomes a system that maintains itself.',
      ],
      ctaText: 'Automate your cleanup with Disk Mop',
    },
    de: {
      title: 'Papierkorb automatisch leeren unter Windows 11 (Anleitung)',
      metaDescription:
        'Papierkorb automatisch leeren in Windows 11 – mit Speicheroptimierung, Aufgabenplanung oder wöchentlichem Bereinigungsplan. Schritt für Schritt erklärt.',
      subtitle: 'Drei Wege, den Papierkorb nie wieder von Hand zu leeren',
      intro: [
        'Der schnellste Weg, den Papierkorb in Windows 11 automatisch zu leeren, ist die Speicheroptimierung: Öffnen Sie die Einstellungen, gehen Sie zu System und dann Speicher, aktivieren Sie die Speicheroptimierung und lassen Sie Dateien löschen, die länger als 30 Tage im Papierkorb liegen. Wer einen festen Zeitplan bevorzugt, richtet in der Aufgabenplanung eine wöchentliche Aufgabe mit dem PowerShell-Befehl Clear-RecycleBin -Force ein. Beide Methoden sind kostenlos, in Windows integriert und in unter fünf Minuten eingerichtet.',
        'Der Papierkorb wächst still: Eine gelöschte Datei verschwindet nicht von der Festplatte, sie wandert nur in den Papierkorb und belegt dort weiter Platz — oft gigabyteweise. In diesem Leitfaden vergleichen wir die drei Automatisierungswege direkt: Speicheroptimierung, Aufgabenplanung und Disk Mops geplante Bereinigung, die zusätzlich Caches und alte Downloads abdeckt. Zuerst kommen die vollständigen Schritte der Bordmittel, dann die Entscheidung, welcher Weg zu Ihnen passt.',
      ],
      sections: [
        {
          title: 'Wie viel Platz belegt Ihr Papierkorb wirklich?',
          content: [
            'Löschen gibt keinen Speicherplatz frei. Die Datei wandert nur in den Papierkorb und belegt das Laufwerk weiter, bis Sie ihn leeren. Windows reserviert auf jedem Laufwerk einen Anteil für den Papierkorb, sodass sich dort über Monate unbemerkt Gigabytes an gelöschten Videos, Installationsdateien und alten Projekten ansammeln können.',
            'Die aktuelle Größe prüfen Sie unter Einstellungen, System, Speicher: Klicken Sie auf Temporäre Dateien, dort erscheint der Papierkorb mit exakter Größe. Alternativ öffnen Sie den Papierkorb auf dem Desktop, markieren mit Strg+A alles und lesen die Gesamtgröße über Rechtsklick und Eigenschaften ab.',
            'Meist ist der Papierkorb nur ein Teil des Problems. Disk Mops Festplattenanalyse (Disk Analysis) scannt das Laufwerk als visuelle Treemap und zeigt auf einen Blick, welche Ordner — Papierkorb inklusive — den meisten Platz belegen.',
          ],
        },
        {
          title: 'Papierkorb automatisch leeren mit der Speicheroptimierung',
          content: [
            'Die Speicheroptimierung (Storage Sense) ist das kostenlose Automatisierungswerkzeug in Windows 10 und 11. Sie bereinigt temporäre Dateien und löscht Papierkorb-Elemente, die älter als eine von Ihnen gewählte Frist sind — ganz ohne Zusatzsoftware.',
            'So geht es: Öffnen Sie mit Win+I die Einstellungen, gehen Sie zu System und dann Speicher. Aktivieren Sie den Schalter der Speicheroptimierung und klicken Sie auf die Zeile, um die Details zu öffnen. Wählen Sie beim Papierkorb, ab welchem Alter Dateien gelöscht werden: 1, 14, 30 oder 60 Tage. Legen Sie danach fest, wie oft die Speicheroptimierung läuft: täglich, wöchentlich, monatlich oder nur bei wenig freiem Speicherplatz.',
            'Zwei Einschränkungen: Die Funktion arbeitet altersbasiert und leert den Papierkorb nie komplett an einem festen Tag. Und der Standard-Auslöser greift nur bei knappem Speicherplatz — wählen Sie also selbst eine Frequenz. Optional bereinigt sie auch den Downloads-Ordner; prüfen Sie diese Einstellung, damit nichts Wichtiges verschwindet.',
          ],
        },
        {
          title: 'Papierkorb-Bereinigung mit der Aufgabenplanung planen',
          content: [
            'Soll der Papierkorb jede Woche an einem festen Tag komplett geleert werden, ist die Aufgabenplanung (Task Scheduler) der präzisere Weg. Es gibt keinen Altersfilter — läuft die Aufgabe, wird alles gelöscht.',
            'Die Schritte: Suchen Sie im Startmenü nach Aufgabenplanung oder starten Sie taskschd.msc über das Ausführen-Fenster. Wählen Sie im Menü Aktion den Punkt Einfache Aufgabe erstellen und vergeben Sie einen Namen. Als Trigger wählen Sie Wöchentlich mit Tag und Uhrzeit. Als Aktion wählen Sie Programm starten, tragen powershell.exe als Programm ein, ergänzen im Argumentfeld -NoProfile -Command Clear-RecycleBin -Force und schließen den Assistenten ab.',
            'Wichtig: Der Befehl löscht beim Ausführen alles im Papierkorb endgültig — auch eine Datei, die Sie Sekunden zuvor gelöscht haben. Mit -ErrorAction SilentlyContinue unterdrücken Sie die Fehlermeldung bei leerem Papierkorb. Testen Sie die Aufgabe einmal per Rechtsklick und Ausführen.',
          ],
        },
        {
          title: 'Maximale Größe des Papierkorbs pro Laufwerk begrenzen',
          content: [
            'Ein dritter Ansatz begrenzt von vornherein, wie groß der Papierkorb werden darf. Erreicht er das Limit, löscht Windows die ältesten Elemente automatisch und endgültig — der Papierkorb kann nie ausufern.',
            'So geht es: Rechtsklick auf das Papierkorb-Symbol auf dem Desktop, dann Eigenschaften. Wählen Sie ein Laufwerk, aktivieren Sie Benutzerdefinierte Größe und tragen Sie ein Maximum in MB ein, etwa 5120 für 5 GB. Jedes Laufwerk hat einen eigenen Papierkorb — wiederholen Sie die Einstellung pro Laufwerk und bestätigen Sie mit OK.',
            'Standardmäßig reserviert Windows einen Prozentsatz des Laufwerks, was bei großen Festplatten Dutzende Gigabytes bedeuten kann. Ein festes Limit von 2 bis 10 GB reicht den meisten völlig und ergänzt die Speicheroptimierung ideal: eine regelt das Alter, die andere die Größe.',
          ],
        },
        {
          title: 'Den Papierkorb komplett umgehen — und warum das riskant ist',
          content: [
            'Windows erlaubt es auch, den Papierkorb ganz zu überspringen. Mit Umschalt+Entf wird eine Datei sofort gelöscht, ohne im Papierkorb zu landen, und in den Papierkorb-Eigenschaften gibt es eine Option, die jede Löschung dauerhaft macht.',
            'Davon raten wir ab. Der Papierkorb ist Ihr einziges eingebautes Sicherheitsnetz gegen versehentliches Löschen. Eine Datei, die daran vorbeigeht, lässt sich nur mit spezieller Wiederherstellungssoftware und ohne Garantie retten — auf SSDs mit TRIM sind die Daten oft binnen Minuten endgültig verloren.',
            'Klüger ist es, den Papierkorb als Sicherheitsnetz zu behalten und das Leeren zu automatisieren. Eine 14-Tage-Frist in der Speicheroptimierung oder Disk Mops wöchentliche geplante Bereinigung bringt fast den gesamten Platzgewinn — ohne das Risiko.',
          ],
        },
        {
          title: 'Automatische Bereinigung über den Papierkorb hinaus',
          content: [
            'Der Papierkorb ist nur ein Posten auf einer vollen Festplatte. System-Cache, Browser-Caches, monatealte Downloads und temporäre Dateien belegen oft mehr Platz als der Papierkorb selbst — und die Bordmittel zwingen Sie, jeden Bereich einzeln zu pflegen.',
            'Genau deshalb ist Disk Mops geplante Bereinigung (Scheduled Cleanup) die echte Rundum-Lösung: Sie legen eine wöchentliche oder monatliche Aufgabe an, und die App leert den Papierkorb, bereinigt den System-Cache und die Browser-Caches von Chrome, Firefox und Edge und räumt alte Dateien im Downloads-Ordner auf — alles in einem Durchgang. Die Speed-Up-Funktion erledigt dieselbe Bereinigung jederzeit mit einem Klick, der System Health Score zeigt den Gesamtzustand auf einen Blick.',
            'Disk Mop lässt sich kostenlos mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar als Lifetime-Lizenz und läuft auf Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.',
          ],
        },
      ],
      verdict: [
        'Es gibt drei solide Wege, den Papierkorb in Windows 11 automatisch zu leeren. Die Speicheroptimierung ist am einfachsten und arbeitet altersbasiert; die Aufgabenplanung bietet exakte Terminkontrolle, leert aber jedes Mal alles; ein Größenlimit garantiert, dass der Papierkorb nie überläuft. Ihn ganz zu umgehen spart zu wenig, um das Risiko zu rechtfertigen.',
        'Wenn das eigentliche Problem eine volle Festplatte ist, geht Disk Mop über alle drei Wege hinaus: Die geplante Bereinigung leert den Papierkorb und räumt Caches sowie alte Downloads jede Woche automatisch auf. Für einmalig 19,90 US-Dollar wird Ihre Festplatte zu einem System, das sich selbst wartet.',
      ],
      ctaText: 'Automatisieren Sie Ihre Bereinigung mit Disk Mop',
    },
    fr: {
      title: "Vider automatiquement la Corbeille dans Windows 11 (guide)",
      metaDescription:
        "Vider automatiquement la Corbeille dans Windows 11 avec l'Assistant Stockage, le Planificateur de tâches ou un nettoyage programmé : toutes les étapes.",
      subtitle: "Trois méthodes pour ne plus jamais vider la Corbeille à la main",
      intro: [
        "Le moyen le plus rapide de vider automatiquement la Corbeille dans Windows 11 est l'Assistant Stockage : ouvrez les Paramètres, allez dans Système puis Stockage, activez l'Assistant Stockage et demandez-lui de supprimer les fichiers présents dans la Corbeille depuis plus de 30 jours. Si vous préférez un calendrier fixe, une tâche hebdomadaire du Planificateur de tâches qui exécute la commande PowerShell Clear-RecycleBin -Force fait la même chose, au jour et à l'heure exacts que vous choisissez. Les deux méthodes sont gratuites, intégrées à Windows et se configurent en moins de cinq minutes.",
        "La Corbeille grossit en silence : supprimer un fichier ne le retire pas du disque, cela le déplace simplement dans la Corbeille, où il continue d'occuper de l'espace. Beaucoup d'utilisateurs découvrent des mois plus tard que la Corbeille retient plusieurs gigaoctets. Dans ce guide, nous comparons les trois voies d'automatisation : l'Assistant Stockage, le Planificateur de tâches et le nettoyage programmé (Scheduled Cleanup) de Disk Mop, qui couvre aussi les caches et les anciens téléchargements. Vous verrez d'abord les étapes complètes des outils intégrés, puis vous déciderez de la solution qui vous convient.",
      ],
      sections: [
        {
          title: "Combien d'espace votre Corbeille occupe-t-elle vraiment ?",
          content: [
            "Supprimer un fichier ne libère pas d'espace disque. Le fichier est simplement déplacé dans la Corbeille et continue d'occuper votre disque jusqu'à ce que vous la vidiez. Windows réserve une part de chaque lecteur pour la Corbeille : des mois de vidéos effacées, de programmes d'installation et de projets abandonnés peuvent ainsi retenir discrètement plusieurs gigaoctets sans que vous le remarquiez.",
            "Pour vérifier la taille actuelle de la Corbeille, ouvrez les Paramètres, allez dans Système puis Stockage et cliquez sur la ligne Fichiers temporaires : la liste affiche une entrée Corbeille avec sa taille exacte. Vous pouvez aussi ouvrir la Corbeille depuis le bureau, tout sélectionner avec Ctrl+A, puis faire un clic droit et choisir Propriétés pour voir le total.",
            "La Corbeille n'est en général qu'une partie d'un disque qui se remplit. L'analyse de disque (Disk Analysis) de Disk Mop parcourt votre lecteur et l'affiche sous forme de treemap visuelle : vous voyez d'un coup d'œil quels dossiers — Corbeille comprise — occupent le plus de place, sans avoir à deviner par où commencer le nettoyage.",
          ],
        },
        {
          title: "Vider la Corbeille automatiquement avec l'Assistant Stockage",
          content: [
            "L'Assistant Stockage (Storage Sense) est l'outil d'automatisation gratuit intégré à Windows 10 et 11. Il nettoie les fichiers temporaires et supprime automatiquement les éléments de la Corbeille qui y séjournent depuis plus longtemps que le seuil que vous définissez. Si vous voulez un vidage automatique sans rien installer, c'est la première étape.",
            "La configuration : appuyez sur Win+I pour ouvrir les Paramètres, puis allez dans Système et Stockage. Activez l'interrupteur de l'Assistant Stockage, puis cliquez sur la ligne elle-même pour afficher ses options. Dans la section consacrée à la Corbeille, choisissez l'ancienneté à partir de laquelle les fichiers sont supprimés : 1, 14, 30 ou 60 jours. Définissez ensuite la fréquence d'exécution : chaque jour, chaque semaine, chaque mois, ou uniquement lorsque l'espace disque disponible est faible.",
            "Attention à deux limites. D'abord, l'Assistant Stockage raisonne en ancienneté : il ne supprime que les fichiers plus vieux que votre seuil et ne vide jamais complètement la Corbeille à une date fixe. Ensuite, le déclencheur par défaut n'intervient que lorsque l'espace libre devient insuffisant ; choisissez donc une fréquence manuellement si vous voulez des passages réguliers. L'outil peut aussi nettoyer votre dossier Téléchargements si cette option est activée : vérifiez ce réglage pour qu'il n'efface pas des fichiers que vous vouliez garder.",
          ],
        },
        {
          title: "Programmer le vidage de la Corbeille avec le Planificateur de tâches",
          content: [
            "Si vous voulez que la Corbeille soit entièrement vidée un jour et à une heure précis chaque semaine, le Planificateur de tâches est la voie la plus rigoureuse. Il n'y a aucun filtre d'ancienneté : quand la tâche s'exécute, tout ce qui se trouve dans la Corbeille disparaît.",
            "Les étapes : cherchez Planificateur de tâches dans le menu Démarrer, ou tapez taskschd.msc dans la fenêtre Exécuter. Dans le menu Action, choisissez Créer une tâche de base et donnez-lui un nom. Sélectionnez Hebdomadaire comme déclencheur, puis votre jour et votre heure. Pour l'action, choisissez Démarrer un programme ; saisissez powershell.exe comme programme, ajoutez -NoProfile -Command Clear-RecycleBin -Force dans le champ des arguments et terminez l'assistant.",
            "Deux précautions : la commande supprime définitivement tout le contenu de la Corbeille dès qu'elle s'exécute, y compris un fichier effacé quelques secondes plus tôt. Vous pouvez ajouter -ErrorAction SilentlyContinue à la fin pour supprimer le message d'erreur que PowerShell renvoie quand la Corbeille est déjà vide. Après l'enregistrement, faites un clic droit sur la tâche et choisissez Exécuter pour la tester une fois et confirmer qu'elle fonctionne.",
          ],
        },
        {
          title: "Limiter la taille maximale de la Corbeille sur chaque lecteur",
          content: [
            "Une troisième approche consiste à plafonner d'emblée la taille que la Corbeille peut atteindre. Dès qu'elle touche la limite fixée, Windows supprime définitivement les éléments les plus anciens de lui-même : la Corbeille ne peut donc jamais devenir incontrôlable.",
            "Les étapes : faites un clic droit sur l'icône de la Corbeille sur le bureau et choisissez Propriétés. Sélectionnez un lecteur dans la liste, cochez l'option Taille personnalisée et saisissez un maximum en Mo — par exemple 5120 pour 5 Go. Chaque lecteur possède sa propre Corbeille : répétez donc le réglage pour chacun d'eux et validez avec OK.",
            "Par défaut, Windows réserve un pourcentage de chaque lecteur, ce qui peut représenter des dizaines de gigaoctets sur les gros disques. Un plafond fixe de 2 à 10 Go suffit largement à la plupart des utilisateurs. Cette méthode se marie bien avec l'Assistant Stockage : l'une contrôle l'ancienneté, l'autre la taille.",
          ],
        },
        {
          title: "Contourner complètement la Corbeille — et pourquoi c'est risqué",
          content: [
            "Windows vous permet aussi d'ignorer totalement la Corbeille. La combinaison Maj+Suppr efface un fichier immédiatement, sans qu'il passe par la Corbeille, et la fenêtre Propriétés de la Corbeille propose une option qui rend chaque suppression définitive en effaçant les fichiers au lieu de les déplacer.",
            "Nous le déconseillons. La Corbeille est votre seul filet de sécurité intégré contre les suppressions accidentelles. Récupérer un fichier qui l'a contournée exige un logiciel de récupération spécialisé, le résultat n'est jamais garanti, et sur les SSD équipés de TRIM les données ont souvent réellement disparu en quelques minutes. Une mauvaise sélection se transforme alors en perte irréversible.",
            "La stratégie la plus fine consiste à garder la Corbeille comme filet de sécurité et à automatiser son vidage. Un délai de 14 jours dans l'Assistant Stockage, ou le nettoyage programmé hebdomadaire de Disk Mop, apporte la quasi-totalité de l'espace gagné sans aucun des risques.",
          ],
        },
        {
          title: "Un nettoyage automatique qui va au-delà de la Corbeille",
          content: [
            "La Corbeille n'est qu'une ligne parmi d'autres sur un disque qui se remplit. Le cache système, les caches des navigateurs, les téléchargements que vous n'avez pas ouverts depuis des mois et les fichiers temporaires occupent souvent plus de place que la Corbeille elle-même. Les outils intégrés vous obligent à traiter chacun de ces domaines séparément.",
            "C'est pourquoi le nettoyage programmé (Scheduled Cleanup) de Disk Mop est la véritable solution à configurer une fois pour toutes : vous créez une tâche hebdomadaire ou mensuelle, et l'application vide la Corbeille, efface le cache système, nettoie les caches de Chrome, Firefox et Edge et fait le tri parmi les vieux fichiers de votre dossier Téléchargements — le tout en une seule passe. La fonction Accélérer (Speed Up) lance le même nettoyage à la demande en un clic, et le score de santé du système (System Health Score) résume l'état général d'un coup d'œil.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro est un paiement unique de 19,90 $ pour une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) ainsi que sur macOS 12 et versions ultérieures.",
          ],
        },
      ],
      verdict: [
        "Il existe trois méthodes solides pour vider automatiquement la Corbeille dans Windows 11. L'Assistant Stockage est la plus simple et raisonne en ancienneté ; le Planificateur de tâches offre un contrôle précis du calendrier mais vide entièrement la Corbeille à chaque passage ; un plafond de taille garantit qu'elle ne déborde jamais. Contourner totalement la Corbeille fait gagner trop peu pour justifier le risque.",
        "Si votre vrai problème est un disque qui se remplit et pas seulement la Corbeille, Disk Mop va plus loin que ces trois méthodes : son nettoyage programmé vide la Corbeille et efface les caches et les anciens téléchargements chaque semaine, automatiquement. Pour 19,90 $ en une seule fois, votre disque devient un système qui s'entretient tout seul.",
      ],
      ctaText: "Automatisez votre nettoyage avec Disk Mop",
    },
    es: {
      title: "Vaciar la Papelera de reciclaje automáticamente en Windows 11",
      metaDescription:
        "Cómo vaciar la Papelera de reciclaje automáticamente en Windows 11 con el Sensor de almacenamiento, el Programador de tareas o una limpieza programada.",
      subtitle: "Tres formas de no volver a vaciar la Papelera a mano",
      intro: [
        "La forma más rápida de vaciar la Papelera de reciclaje automáticamente en Windows 11 es el Sensor de almacenamiento: abre Configuración, ve a Sistema y luego a Almacenamiento, activa el Sensor de almacenamiento y configúralo para que borre los archivos que llevan más de 30 días en la Papelera. Si prefieres un calendario fijo, una tarea semanal del Programador de tareas que ejecute el comando de PowerShell Clear-RecycleBin -Force hace lo mismo el día y a la hora exactos que elijas. Ambos métodos son gratuitos, vienen incluidos en Windows y se configuran en menos de cinco minutos.",
        "La Papelera crece en silencio: borrar un archivo no lo elimina del disco, solo lo mueve a la Papelera, donde sigue ocupando espacio. Muchos usuarios descubren meses después que la Papelera retiene varios gigabytes. En esta guía comparamos las tres vías de automatización: el Sensor de almacenamiento, el Programador de tareas y la limpieza programada (Scheduled Cleanup) de Disk Mop, que además se ocupa de las cachés y de las descargas antiguas. Primero verás los pasos completos de las herramientas integradas y después podrás decidir cuál te encaja mejor.",
      ],
      sections: [
        {
          title: "¿Cuánto espacio ocupa realmente tu Papelera de reciclaje?",
          content: [
            "Borrar un archivo no libera espacio en disco. El archivo simplemente se mueve a la Papelera de reciclaje y sigue ocupando tu unidad hasta que la vacías. Windows reserva una porción de cada unidad para la Papelera, así que meses de vídeos borrados, instaladores y proyectos abandonados pueden retener gigabytes en silencio sin que te des cuenta.",
            "Para comprobar el tamaño actual de la Papelera, abre Configuración, entra en Sistema y luego en Almacenamiento y haz clic en la entrada Archivos temporales: la lista muestra un elemento Papelera de reciclaje con su tamaño exacto. También puedes abrir la Papelera desde el escritorio, seleccionarlo todo con Ctrl+A y, con el botón derecho, elegir Propiedades para ver el total.",
            "La Papelera suele ser solo una parte de un disco que se llena. El análisis de disco (Disk Analysis) de Disk Mop escanea tu unidad con un treemap visual y muestra de un vistazo qué carpetas —la Papelera incluida— ocupan más espacio, así que nunca tienes que adivinar por dónde empezar a limpiar.",
          ],
        },
        {
          title: "Vaciar la Papelera automáticamente con el Sensor de almacenamiento",
          content: [
            "El Sensor de almacenamiento (Storage Sense) es la herramienta de automatización gratuita integrada en Windows 10 y 11. Limpia archivos temporales y borra automáticamente los elementos de la Papelera que llevan allí más tiempo del umbral que elijas. Si quieres un vaciado automático sin instalar nada, esta es la primera parada.",
            "La configuración: pulsa Win+I para abrir Configuración y ve a Sistema y luego a Almacenamiento. Activa el interruptor del Sensor de almacenamiento y después haz clic en la propia fila para abrir sus detalles. En la opción de la Papelera de reciclaje, elige la antigüedad que deben tener los archivos antes de borrarse: 1, 14, 30 o 60 días. Luego indica con qué frecuencia se ejecuta el Sensor de almacenamiento: cada día, cada semana, cada mes o solo cuando quede poco espacio libre en disco.",
            "Ojo con dos limitaciones. La primera: el Sensor de almacenamiento funciona por antigüedad, solo elimina archivos más viejos que tu umbral y nunca vacía la Papelera por completo en un día fijo. La segunda: el disparador predeterminado solo se activa cuando el espacio libre escasea, así que elige una frecuencia a mano si quieres pasadas regulares. También puede limpiar la carpeta Descargas si esa opción está activada: revisa el ajuste para que no borre archivos que querías conservar.",
          ],
        },
        {
          title: "Programar la limpieza de la Papelera con el Programador de tareas",
          content: [
            "Si quieres que la Papelera se vacíe entera un día y a una hora concretos cada semana, el Programador de tareas es la vía más precisa. No hay filtro de antigüedad: cuando la tarea se ejecuta, desaparece todo lo que haya dentro.",
            "Los pasos: busca Programador de tareas en el menú Inicio o escribe taskschd.msc en el cuadro Ejecutar. En el menú Acción elige Crear tarea básica y ponle un nombre. Selecciona Semanalmente como desencadenador y marca el día y la hora. Como acción, elige Iniciar un programa; escribe powershell.exe como programa, añade -NoProfile -Command Clear-RecycleBin -Force en el campo de argumentos y termina el asistente.",
            "Dos advertencias: el comando borra de forma permanente todo lo que haya en la Papelera en el momento en que se ejecuta, incluido un archivo que eliminaste segundos antes. Puedes añadir -ErrorAction SilentlyContinue para silenciar el error que PowerShell muestra cuando la Papelera ya está vacía. Después de guardar, haz clic derecho en la tarea y elige Ejecutar para probarla una vez y confirmar que funciona.",
          ],
        },
        {
          title: "Limitar el tamaño máximo de la Papelera en cada unidad",
          content: [
            "Un tercer enfoque es poner un tope al tamaño que la Papelera puede alcanzar desde el principio. En cuanto llega a tu límite, Windows borra permanentemente los elementos más antiguos por su cuenta, de modo que la Papelera nunca se descontrola.",
            "Los pasos: haz clic derecho en el icono de la Papelera de reciclaje del escritorio y elige Propiedades. Selecciona una unidad de la lista, marca la opción Tamaño personalizado e introduce un máximo en MB; por ejemplo, 5120 para 5 GB. Cada unidad tiene su propia Papelera, así que repite el ajuste en todas y confirma con Aceptar.",
            "De forma predeterminada, Windows reserva un porcentaje de cada unidad, lo que en discos grandes puede suponer decenas de gigabytes. Un tope fijo de 2 a 10 GB sobra para la mayoría de la gente. Este método combina muy bien con el Sensor de almacenamiento: uno controla la antigüedad y el otro el tamaño.",
          ],
        },
        {
          title: "Saltarse la Papelera por completo, y por qué es arriesgado",
          content: [
            "Windows también te deja saltarte la Papelera de reciclaje del todo. Al pulsar Mayús+Supr, el archivo se elimina de inmediato sin pasar por la Papelera, y la ventana Propiedades de la Papelera incluye una opción que hace permanente cada borrado: los archivos se eliminan en lugar de moverse a la Papelera.",
            "No lo recomendamos. La Papelera es tu única red de seguridad integrada frente a los borrados accidentales. Recuperar un archivo que se la ha saltado exige software de recuperación especializado, el resultado nunca está garantizado y, en los SSD con TRIM, los datos suelen desaparecer de verdad en cuestión de minutos. Una selección equivocada se convierte en una pérdida irreversible.",
            "Lo más inteligente es mantener la Papelera como red de seguridad y automatizar el vaciado. Un plazo de 14 días en el Sensor de almacenamiento, o la limpieza programada semanal de Disk Mop, te da prácticamente todo el espacio ganado sin ninguno de los riesgos.",
          ],
        },
        {
          title: "Limpieza automática más allá de la Papelera de reciclaje",
          content: [
            "La Papelera de reciclaje es solo una línea más en un disco que se llena. La caché del sistema, las cachés de los navegadores, las descargas que no abres desde hace meses y los archivos temporales suelen ocupar más espacio que la propia Papelera. Las herramientas integradas te obligan a atender cada una de esas áreas por separado.",
            "Por eso la limpieza programada (Scheduled Cleanup) de Disk Mop es la verdadera solución de configurar y olvidar: creas una tarea semanal o mensual y la aplicación vacía la Papelera de reciclaje, borra la caché del sistema, limpia las cachés de Chrome, Firefox y Edge y ordena los archivos antiguos de tu carpeta Descargas, todo en una sola pasada. La función Acelerar (Speed Up) ejecuta la misma limpieza cuando quieras con un solo clic, y la puntuación de salud del sistema (System Health Score) te muestra el estado general de un vistazo.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro es un pago único de 19,90 $ con licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y también en macOS 12 y posteriores.",
          ],
        },
      ],
      verdict: [
        "Hay tres formas sólidas de vaciar la Papelera de reciclaje automáticamente en Windows 11. El Sensor de almacenamiento es la más fácil y trabaja por antigüedad; el Programador de tareas te da control exacto del calendario, pero vacía la Papelera entera en cada pasada; y un tope de tamaño garantiza que nunca se desborde. Saltarse la Papelera del todo ahorra demasiado poco para justificar el riesgo.",
        "Si tu problema real es un disco que se llena y no solo la Papelera, Disk Mop va más allá de las tres opciones: su limpieza programada vacía la Papelera y borra cachés y descargas antiguas cada semana de forma automática. Por un pago único de 19,90 $, tu disco se convierte en un sistema que se mantiene solo.",
      ],
      ctaText: "Automatiza tu limpieza con Disk Mop",
    },
    it: {
      title: "Svuotare il Cestino automaticamente in Windows 11 (guida)",
      metaDescription:
        "Come svuotare il Cestino automaticamente in Windows 11 con Sensore memoria, Utilità di pianificazione o una pulizia programmata: tutti i passaggi spiegati.",
      subtitle: "Tre modi per non svuotare mai più il Cestino a mano",
      intro: [
        "Il modo più rapido per svuotare il Cestino automaticamente in Windows 11 è Sensore memoria: apri Impostazioni, vai su Sistema e poi su Archiviazione, attiva Sensore memoria e impostalo in modo che elimini i file rimasti nel Cestino da più di 30 giorni. Se preferisci una pianificazione fissa, un'attività settimanale in Utilità di pianificazione che esegue il comando PowerShell Clear-RecycleBin -Force fa la stessa cosa nel giorno e nell'ora esatti che scegli. Entrambi i metodi sono gratuiti, integrati in Windows e si configurano in meno di cinque minuti.",
        "Il Cestino cresce in silenzio: eliminare un file non lo rimuove dal disco, lo sposta soltanto nel Cestino, dove continua a occupare spazio. Moltissimi utenti scoprono mesi dopo che il Cestino trattiene diversi gigabyte. In questa guida mettiamo a confronto le tre strade dell'automazione: Sensore memoria, Utilità di pianificazione e la pulizia programmata (Scheduled Cleanup) di Disk Mop, che copre anche le cache e i vecchi download. Prima vedrai i passaggi completi degli strumenti integrati, poi deciderai quale soluzione fa al caso tuo.",
      ],
      sections: [
        {
          title: "Quanto spazio occupa davvero il tuo Cestino?",
          content: [
            "Eliminare un file non libera spazio su disco. Il file si sposta semplicemente nel Cestino e continua a occupare l'unità finché non lo svuoti. Windows riserva al Cestino una fetta di ogni unità, così mesi di video cancellati, file di installazione e progetti abbandonati possono tenere in ostaggio gigabyte interi senza che tu te ne accorga.",
            "Per controllare le dimensioni attuali del Cestino apri Impostazioni, vai su Sistema e poi su Archiviazione e fai clic sulla voce File temporanei: nell'elenco compare la riga Cestino con la dimensione esatta. In alternativa apri il Cestino dal desktop, seleziona tutto con Ctrl+A, quindi fai clic con il tasto destro e scegli Proprietà per leggere il totale.",
            "Il Cestino di solito è solo una parte di un disco che si riempie. L'analisi del disco (Disk Analysis) di Disk Mop esamina l'unità con una treemap visiva e mostra a colpo d'occhio quali cartelle — Cestino compreso — occupano più spazio, così non devi tirare a indovinare da dove iniziare la pulizia.",
          ],
        },
        {
          title: "Svuotare il Cestino automaticamente con Sensore memoria",
          content: [
            "Sensore memoria (Storage Sense) è lo strumento di automazione gratuito integrato in Windows 10 e 11. Ripulisce i file temporanei ed elimina automaticamente gli elementi del Cestino che si trovano lì da più tempo della soglia che scegli. Se vuoi lo svuotamento automatico senza installare nulla, è la prima tappa.",
            "La configurazione: premi Win+I per aprire Impostazioni, poi vai su Sistema e Archiviazione. Attiva l'interruttore di Sensore memoria e fai clic sulla riga stessa per aprirne i dettagli. Alla voce dedicata al Cestino scegli dopo quanto tempo i file vanno eliminati: 1, 14, 30 o 60 giorni. Imposta poi la frequenza di esecuzione: ogni giorno, ogni settimana, ogni mese oppure solo quando lo spazio libero su disco scarseggia.",
            "Attenzione a due limiti. Il primo: Sensore memoria ragiona per anzianità, rimuove solo i file più vecchi della soglia impostata e non svuota mai il Cestino per intero in un giorno preciso. Il secondo: l'attivazione predefinita scatta solo quando lo spazio libero si riduce, quindi scegli tu una frequenza se vuoi passaggi regolari. Se l'opzione è attiva, lo strumento può ripulire anche la cartella Download: controlla l'impostazione perché non cancelli file che volevi tenere.",
          ],
        },
        {
          title: "Pianificare la pulizia del Cestino con Utilità di pianificazione",
          content: [
            "Se vuoi che il Cestino venga svuotato completamente in un giorno e a un'ora precisi ogni settimana, Utilità di pianificazione è la strada più precisa. Non esiste alcun filtro di anzianità: quando l'attività parte, sparisce tutto ciò che si trova nel Cestino.",
            "I passaggi: cerca Utilità di pianificazione nel menu Start oppure digita taskschd.msc nella finestra Esegui. Dal menu Azione scegli Crea attività di base e assegnale un nome. Come trigger seleziona Settimanale e indica giorno e ora. Come azione scegli Avvia programma; inserisci powershell.exe come programma, aggiungi -NoProfile -Command Clear-RecycleBin -Force nel campo degli argomenti e completa la procedura guidata.",
            "Due avvertenze: il comando elimina definitivamente tutto il contenuto del Cestino nel momento in cui viene eseguito, compreso un file che avevi cancellato pochi secondi prima. Puoi aggiungere -ErrorAction SilentlyContinue per silenziare l'errore che PowerShell restituisce quando il Cestino è già vuoto. Dopo il salvataggio, fai clic con il tasto destro sull'attività e scegli Esegui per provarla una volta e verificare che funzioni.",
          ],
        },
        {
          title: "Limitare la dimensione massima del Cestino su ogni unità",
          content: [
            "Un terzo approccio consiste nel mettere fin da subito un tetto alla crescita del Cestino. Quando raggiunge il limite che hai fissato, Windows elimina in modo definitivo gli elementi più vecchi da solo, così il Cestino non può mai sfuggire di mano.",
            "I passaggi: fai clic con il tasto destro sull'icona del Cestino sul desktop e scegli Proprietà. Seleziona un'unità dall'elenco, attiva l'opzione Dimensione personalizzata e inserisci un massimo in MB, per esempio 5120 per 5 GB. Ogni unità ha il proprio Cestino, quindi ripeti l'impostazione unità per unità e conferma con OK.",
            "Per impostazione predefinita Windows riserva una percentuale di ogni unità, che sui dischi grandi può tradursi in decine di gigabyte. Un tetto fisso da 2 a 10 GB è più che sufficiente per la maggior parte delle persone. Questo metodo si sposa bene con Sensore memoria: uno controlla l'età dei file, l'altro la dimensione.",
          ],
        },
        {
          title: "Saltare del tutto il Cestino, e perché è rischioso",
          content: [
            "Windows ti permette anche di aggirare completamente il Cestino. Premendo Maiusc+Canc il file viene rimosso subito senza passare dal Cestino, e nella finestra Proprietà del Cestino esiste un'opzione che rende definitiva ogni eliminazione: i file vengono cancellati invece di essere spostati.",
            "Non lo consigliamo. Il Cestino è la tua unica rete di sicurezza integrata contro le cancellazioni accidentali. Recuperare un file che l'ha aggirata richiede software di recupero specializzato, il risultato non è mai garantito e sugli SSD con TRIM i dati spesso spariscono davvero nel giro di pochi minuti. Una selezione sbagliata si trasforma in una perdita irreversibile.",
            "La mossa più intelligente è tenere il Cestino come rete di sicurezza e automatizzarne lo svuotamento. Una soglia di 14 giorni in Sensore memoria, oppure la pulizia programmata settimanale di Disk Mop, porta quasi tutto lo spazio recuperato senza nessuno dei rischi.",
          ],
        },
        {
          title: "Pulizia automatica oltre il Cestino",
          content: [
            "Il Cestino è solo una voce fra tante su un disco che si riempie. La cache di sistema, le cache dei browser, i download che non apri da mesi e i file temporanei occupano spesso più spazio del Cestino stesso. Gli strumenti integrati ti costringono a gestire ognuna di queste aree separatamente.",
            "Ecco perché la pulizia programmata (Scheduled Cleanup) di Disk Mop è la vera soluzione da impostare e dimenticare: crei un'attività settimanale o mensile e l'app svuota il Cestino, cancella la cache di sistema, ripulisce le cache di Chrome, Firefox ed Edge e mette ordine tra i vecchi file della cartella Download, tutto in un unico passaggio. La funzione Accelera (Speed Up) esegue la stessa pulizia su richiesta con un solo clic, e il punteggio di salute del sistema (System Health Score) mostra la condizione generale a colpo d'occhio.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro è un pagamento una tantum di 19,90 $ per una licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 e versioni successive.",
          ],
        },
      ],
      verdict: [
        "Ci sono tre modi solidi per svuotare il Cestino automaticamente in Windows 11. Sensore memoria è il più semplice e lavora per anzianità; Utilità di pianificazione offre il controllo esatto del calendario ma svuota il Cestino per intero a ogni esecuzione; un tetto di dimensione garantisce che il Cestino non trabocchi mai. Aggirarlo del tutto fa risparmiare troppo poco per giustificare il rischio.",
        "Se il problema vero è un disco che si riempie e non solo il Cestino, Disk Mop va oltre tutte e tre le strade: la sua pulizia programmata svuota il Cestino e cancella cache e vecchi download ogni settimana, in automatico. Con un pagamento una tantum di 19,90 $, il tuo disco diventa un sistema che si mantiene da solo.",
      ],
      ctaText: "Automatizza la pulizia con Disk Mop",
    },
    pt: {
      title: "Esvaziar a Lixeira automaticamente no Windows 11 (guia)",
      metaDescription:
        "Como esvaziar a Lixeira automaticamente no Windows 11 usando o Sensor de Armazenamento, o Agendador de Tarefas ou uma limpeza agendada. Passo a passo.",
      subtitle: "Três formas de nunca mais esvaziar a Lixeira na mão",
      intro: [
        "A maneira mais rápida de esvaziar a Lixeira automaticamente no Windows 11 é o Sensor de Armazenamento: abra Configurações, vá em Sistema e depois Armazenamento, ligue o Sensor de Armazenamento e configure-o para apagar os arquivos que estão na Lixeira há mais de 30 dias. Se você prefere um horário fixo, uma tarefa semanal no Agendador de Tarefas executando o comando do PowerShell Clear-RecycleBin -Force faz o mesmo no dia e na hora exatos que você escolher. Os dois métodos são gratuitos, já vêm no Windows e levam menos de cinco minutos para configurar.",
        "A Lixeira cresce em silêncio: apagar um arquivo não o remove do disco, apenas o move para a Lixeira, onde ele continua ocupando espaço. Muita gente descobre meses depois que a Lixeira está segurando vários gigabytes. Neste guia colocamos lado a lado os três caminhos de automação: o Sensor de Armazenamento, o Agendador de Tarefas e a limpeza agendada (Scheduled Cleanup) do Disk Mop, que também cuida dos caches e dos downloads antigos. Primeiro você vê o passo a passo completo das ferramentas nativas e depois decide qual caminho combina mais com você.",
      ],
      sections: [
        {
          title: "Quanto espaço a sua Lixeira está realmente ocupando?",
          content: [
            "Apagar um arquivo não libera espaço em disco. O arquivo simplesmente vai para a Lixeira e continua ocupando a unidade até você esvaziá-la. O Windows reserva uma fatia de cada unidade para a Lixeira, então meses de vídeos apagados, instaladores e projetos abandonados podem manter gigabytes reféns sem que você perceba.",
            "Para conferir o tamanho atual da Lixeira, abra Configurações, vá em Sistema e depois Armazenamento e clique no item Arquivos temporários: a lista mostra uma linha Lixeira com o tamanho exato. Outra opção é abrir a Lixeira pela área de trabalho, selecionar tudo com Ctrl+A e clicar com o botão direito em Propriedades para ver o total.",
            "Normalmente a Lixeira é apenas uma parte de um disco que está enchendo. A análise de disco (Disk Analysis) do Disk Mop varre a unidade com um treemap visual e mostra de relance quais pastas — incluindo a Lixeira — ocupam mais espaço, então você nunca precisa adivinhar por onde começar a limpeza.",
          ],
        },
        {
          title: "Esvaziar a Lixeira automaticamente com o Sensor de Armazenamento",
          content: [
            "O Sensor de Armazenamento (Storage Sense) é a ferramenta de automação gratuita que já vem no Windows 10 e 11. Ele limpa arquivos temporários e apaga automaticamente os itens da Lixeira que estão lá há mais tempo do que o limite escolhido por você. Se a ideia é ter esvaziamento automático sem instalar nada, comece por aqui.",
            "A configuração: pressione Win+I para abrir Configurações e vá em Sistema e depois Armazenamento. Ligue a chave do Sensor de Armazenamento e clique na própria linha para abrir os detalhes. Na opção da Lixeira, escolha a idade que os arquivos precisam ter para serem apagados: 1, 14, 30 ou 60 dias. Depois defina a frequência de execução: todo dia, toda semana, todo mês ou apenas quando o espaço livre em disco estiver acabando.",
            "Fique atento a duas limitações. A primeira: o Sensor de Armazenamento trabalha por idade, remove apenas arquivos mais antigos que o seu limite e nunca esvazia a Lixeira por completo em um dia fixo. A segunda: o gatilho padrão só dispara quando o espaço livre fica baixo, então escolha uma frequência manualmente se quiser execuções regulares. Ele também pode limpar a pasta Downloads quando essa opção está ativada: revise o ajuste para não perder arquivos que você queria guardar.",
          ],
        },
        {
          title: "Agendar a limpeza da Lixeira com o Agendador de Tarefas",
          content: [
            "Se você quer a Lixeira totalmente esvaziada em um dia e horário específicos toda semana, o Agendador de Tarefas é o caminho mais preciso. Não existe filtro de idade: quando a tarefa roda, tudo o que estiver na Lixeira vai embora.",
            "O passo a passo: procure por Agendador de Tarefas no menu Iniciar ou digite taskschd.msc na janela Executar. No menu Ação escolha Criar Tarefa Básica e dê um nome a ela. Selecione Semanalmente como disparador e defina o dia e a hora. Na ação, escolha Iniciar um programa; informe powershell.exe como programa, adicione -NoProfile -Command Clear-RecycleBin -Force no campo de argumentos e conclua o assistente.",
            "Duas ressalvas: o comando apaga permanentemente tudo o que estiver na Lixeira no momento em que roda, inclusive um arquivo que você excluiu segundos antes. Você pode acrescentar -ErrorAction SilentlyContinue para silenciar o erro que o PowerShell exibe quando a Lixeira já está vazia. Depois de salvar, clique com o botão direito na tarefa e escolha Executar para testá-la uma vez e confirmar que está funcionando.",
          ],
        },
        {
          title: "Limitar o tamanho máximo da Lixeira em cada unidade",
          content: [
            "Uma terceira abordagem é limitar de saída o quanto a Lixeira pode crescer. Assim que ela atinge o limite definido, o Windows apaga permanentemente os itens mais antigos por conta própria, e a Lixeira nunca sai do controle.",
            "O passo a passo: clique com o botão direito no ícone da Lixeira na área de trabalho e escolha Propriedades. Selecione uma unidade na lista, marque a opção Tamanho personalizado e informe um máximo em MB — por exemplo, 5120 para 5 GB. Cada unidade tem a própria Lixeira, então repita o ajuste unidade por unidade e confirme em OK.",
            "Por padrão, o Windows reserva uma porcentagem de cada unidade, o que em discos grandes pode significar dezenas de gigabytes. Um limite fixo de 2 a 10 GB é mais que suficiente para a maioria das pessoas. Esse método combina bem com o Sensor de Armazenamento: um controla a idade, o outro controla o tamanho.",
          ],
        },
        {
          title: "Ignorar a Lixeira por completo — e por que isso é arriscado",
          content: [
            "O Windows também deixa você pular a Lixeira totalmente. Ao pressionar Shift+Delete, o arquivo é removido na hora sem passar pela Lixeira, e a janela Propriedades da Lixeira tem uma opção que torna toda exclusão permanente, apagando os arquivos em vez de movê-los.",
            "Não recomendamos. A Lixeira é a sua única rede de segurança nativa contra exclusões acidentais. Recuperar um arquivo que passou por fora dela exige software de recuperação especializado, o resultado nunca é garantido e, em SSDs com TRIM, os dados costumam sumir de verdade em poucos minutos. Uma seleção errada vira uma perda irreversível.",
            "A jogada mais inteligente é manter a Lixeira como rede de segurança e automatizar o esvaziamento. Um prazo de 14 dias no Sensor de Armazenamento, ou a limpeza agendada semanal do Disk Mop, entrega quase todo o ganho de espaço sem nenhum dos riscos.",
          ],
        },
        {
          title: "Limpeza automática além da Lixeira",
          content: [
            "A Lixeira é apenas um item em um disco que está enchendo. O cache do sistema, os caches dos navegadores, downloads que você não abre há meses e arquivos temporários costumam ocupar mais espaço que a própria Lixeira. As ferramentas nativas obrigam você a cuidar de cada uma dessas áreas separadamente.",
            "É por isso que a limpeza agendada (Scheduled Cleanup) do Disk Mop é a verdadeira solução de configurar e esquecer: você cria uma tarefa semanal ou mensal e o aplicativo esvazia a Lixeira, limpa o cache do sistema, apaga os caches de Chrome, Firefox e Edge e organiza os arquivos antigos da pasta Downloads, tudo em uma única passada. O recurso Acelerar (Speed Up) faz a mesma limpeza na hora com um clique, e a pontuação de saúde do sistema (System Health Score) mostra o estado geral de relance.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro é um pagamento único de 19,90 $ com licença vitalícia. Ele roda no Windows 10 e 11 (64 bits) e também no macOS 12 ou mais recente.",
          ],
        },
      ],
      verdict: [
        "Existem três formas sólidas de esvaziar a Lixeira automaticamente no Windows 11. O Sensor de Armazenamento é a mais fácil e trabalha por idade; o Agendador de Tarefas dá controle exato do calendário, mas esvazia a Lixeira inteira a cada execução; e um limite de tamanho garante que ela nunca transborde. Ignorar a Lixeira por completo economiza pouco demais para justificar o risco.",
        "Se o seu problema real é um disco enchendo, e não só a Lixeira, o Disk Mop vai além dos três caminhos: a limpeza agendada esvazia a Lixeira e apaga caches e downloads antigos toda semana, automaticamente. Por um pagamento único de 19,90 $, o seu disco vira um sistema que se mantém sozinho.",
      ],
      ctaText: "Automatize sua limpeza com o Disk Mop",
    },
    ja: {
      title: "Windows 11でごみ箱を自動で空にする方法（3つの手順）",
      metaDescription:
        "Windows 11でごみ箱を自動的に空にする方法を解説します。ストレージ センサー、タスク スケジューラ、定期クリーンアップの3つの手順を画面の項目名まで具体的に紹介し、ディスクの空き容量を取り戻します。",
      subtitle: "もう手作業でごみ箱を空にしないための3つの方法",
      intro: [
        "Windows 11でごみ箱を自動的に空にする最も手軽な方法は、ストレージ センサーです。設定を開き、システム、ストレージの順に進んでストレージ センサーをオンにし、ごみ箱に30日より長く入っているファイルを削除するよう設定します。決まった曜日と時刻に実行したい場合は、タスク スケジューラでPowerShellの Clear-RecycleBin -Force を実行する週次タスクを作れば同じことができます。どちらの方法も無料で、Windowsに最初から備わっており、設定は5分もかかりません。",
        "ごみ箱は静かに膨らんでいきます。ファイルを削除してもディスクから消えるわけではなく、ごみ箱へ移動して容量を占め続けるからです。数か月後になって、ごみ箱が数ギガバイトも抱え込んでいたと気づく方は少なくありません。この記事では3つの自動化の選択肢、つまりストレージ センサー、タスク スケジューラ、そしてキャッシュや古いダウンロードまでまとめて片付けるDisk Mopの定期クリーンアップ（Scheduled Cleanup）を並べて比較します。まず標準機能の手順を最後まで確認し、そのうえでご自身に合う方法を選んでください。",
      ],
      sections: [
        {
          title: "ごみ箱は実際にどれだけ容量を使っているのか",
          content: [
            "ファイルを削除しても、ディスクの空き容量は増えません。ファイルはごみ箱へ移動するだけで、空にするまではドライブの容量を占め続けます。Windowsは各ドライブにごみ箱用の領域を確保しているため、数か月分の削除した動画やインストーラー、放置したプロジェクトが、気づかないうちに数ギガバイトを抱え込んでいることがあります。",
            "現在のサイズを確認するには、設定を開き、システム、ストレージの順に進んで「一時ファイル」をクリックします。一覧に「ごみ箱」の項目が正確なサイズとともに表示されます。デスクトップからごみ箱を開き、Ctrl+Aですべて選択して右クリックし、プロパティで合計を確認する方法もあります。",
            "とはいえ、いっぱいになりつつあるディスクの中で、ごみ箱は原因の一部にすぎないのが普通です。Disk Mopのディスク分析（Disk Analysis）はドライブをスキャンしてツリーマップで可視化し、ごみ箱を含めてどのフォルダーが容量を使っているかを一目で示します。どこから手をつけるべきか迷う必要はありません。",
          ],
        },
        {
          title: "ストレージ センサーでごみ箱を自動的に空にする",
          content: [
            "ストレージ センサー（Storage Sense）は、Windows 10と11に標準搭載されている無料の自動化機能です。一時ファイルを整理し、指定した期間よりも長くごみ箱に残っている項目を自動で削除します。何もインストールせずに自動化したいなら、まずここから始めてください。",
            "設定手順は次のとおりです。Win+Iで設定を開き、システム、ストレージの順に進みます。ストレージ センサーのスイッチをオンにしたら、その行自体をクリックして詳細を開きます。ごみ箱の項目で、削除するまでの経過日数を1日、14日、30日、60日から選びます。続いて実行頻度を、毎日、毎週、毎月、または空き容量が少ないときのみ、から指定します。",
            "注意点が2つあります。1つ目は、ストレージ センサーが経過日数を基準に動くことです。指定した日数より古いファイルだけを削除するため、決まった日にごみ箱を丸ごと空にするわけではありません。2つ目は、既定の実行タイミングが空き容量の不足時だけであることです。定期的に動かしたい場合は、頻度を手動で選んでください。ダウンロード フォルダーを整理するオプションもあるため、残しておきたいファイルが消えないよう設定を確認しておきましょう。",
          ],
        },
        {
          title: "タスク スケジューラでごみ箱の削除を定期実行する",
          content: [
            "毎週決まった曜日と時刻に、ごみ箱の中身をすべて空にしたい場合は、タスク スケジューラのほうが確実です。経過日数による絞り込みはなく、タスクが実行された時点でごみ箱の中身はすべて削除されます。",
            "手順は次のとおりです。スタート メニューでタスク スケジューラを検索するか、ファイル名を指定して実行のウィンドウに taskschd.msc と入力します。操作メニューから「基本タスクの作成」を選び、名前を付けます。トリガーには「毎週」を選び、曜日と時刻を指定します。操作では「プログラムの開始」を選び、プログラムに powershell.exe、引数に -NoProfile -Command Clear-RecycleBin -Force を入力してウィザードを完了します。",
            "気をつけたい点が2つあります。このコマンドは実行された瞬間にごみ箱の中身を完全に削除するため、数秒前に削除したファイルも元に戻せなくなります。ごみ箱がすでに空のときにPowerShellが出すエラーを抑えたい場合は、末尾に -ErrorAction SilentlyContinue を追加してください。保存したらタスクを右クリックして「実行する」を選び、一度テストして動作を確認しておきましょう。",
          ],
        },
        {
          title: "ドライブごとにごみ箱の最大サイズを制限する",
          content: [
            "3つ目の方法は、そもそもごみ箱が大きくならないよう上限を決めてしまうことです。設定した上限に達すると、Windowsが自動的に古い項目から完全に削除するため、ごみ箱が際限なく膨らむことはなくなります。",
            "手順は次のとおりです。デスクトップのごみ箱アイコンを右クリックし、プロパティを選びます。一覧からドライブを選択して「カスタム サイズ」を選び、上限をMB単位で入力します。たとえば5 GBなら5120です。ごみ箱はドライブごとに用意されているため、ドライブの数だけ同じ設定を繰り返し、OKで確定してください。",
            "既定では、Windowsは各ドライブの容量の一定割合を確保します。大容量のディスクでは、これが数十ギガバイトに達することもあります。多くの方にとっては2〜10 GB程度の固定上限で十分です。この方法はストレージ センサーとの相性がよく、一方が経過日数を、もう一方がサイズを受け持つ形になります。",
          ],
        },
        {
          title: "ごみ箱を使わない設定と、そのリスク",
          content: [
            "Windowsでは、ごみ箱を完全に経由しない設定も選べます。Shift+Deleteで削除すればごみ箱に入らずその場で消えますし、ごみ箱のプロパティには、ファイルをごみ箱へ移動せずにすぐ削除する、つまりすべての削除を恒久的なものにするオプションもあります。",
            "ただし、おすすめはしません。ごみ箱は、うっかり削除してしまったときに頼れる唯一の標準的な安全網だからです。ごみ箱を経由せずに消えたファイルを取り戻すには専用の復元ソフトが必要で、成功する保証はありません。TRIMが有効なSSDでは、数分のうちにデータが本当に失われてしまうことも珍しくないのです。選択を一度間違えるだけで、取り返しのつかない損失になります。",
            "賢いのは、ごみ箱は安全網として残したまま、空にする作業のほうを自動化することです。ストレージ センサーで14日を指定するか、Disk Mopの週次の定期クリーンアップを使えば、リスクを負わずに空き容量のほとんどを取り戻せます。",
          ],
        },
        {
          title: "ごみ箱にとどまらない自動クリーンアップ",
          content: [
            "いっぱいになりつつあるディスクにとって、ごみ箱は数ある項目の1つにすぎません。システム キャッシュ、ブラウザーのキャッシュ、何か月も開いていないダウンロード、一時ファイルのほうが、ごみ箱より容量を食っていることもよくあります。標準機能では、こうした領域をそれぞれ別々に手入れしなければなりません。",
            "だからこそ、Disk Mopの定期クリーンアップ（Scheduled Cleanup）は本当の意味で設定したら任せきりにできる答えになります。週次または月次のタスクを作っておけば、アプリがごみ箱を空にし、システム キャッシュを削除し、Chrome、Firefox、Edgeのブラウザー キャッシュを整理し、ダウンロード フォルダーの古いファイルまで一度にまとめて片付けます。高速化（Speed Up）機能を使えば同じクリーンアップをその場でワンクリック実行でき、システム ヘルス スコア（System Health Score）は全体の状態を一目で示してくれます。",
            "Disk Mopは無料でダウンロードでき、機能を絞った状態で試せます。Pro版は買い切り19.90ドルの永続ライセンスです。Windows 10・11（64ビット）に加えて、macOS 12以降でも動作します。",
          ],
        },
      ],
      verdict: [
        "Windows 11でごみ箱を自動的に空にする方法は、大きく3つあります。ストレージ センサーは最も手軽で、経過日数を基準に動きます。タスク スケジューラは日時を細かく指定できますが、実行のたびにごみ箱を丸ごと空にします。サイズの上限を決める方法なら、ごみ箱があふれることはありません。ごみ箱そのものを使わない設定は、得られる容量に対してリスクが大きすぎます。",
        "本当の悩みがごみ箱だけでなくディスク全体の空き容量なら、Disk Mopは3つの方法の先まで面倒を見てくれます。定期クリーンアップが毎週、ごみ箱を空にし、キャッシュと古いダウンロードもまとめて自動で整理します。買い切り19.90ドルで、ディスクは自分自身を手入れする仕組みに変わります。",
      ],
      ctaText: "Disk Mopでクリーンアップを自動化",
    },
  },
};
