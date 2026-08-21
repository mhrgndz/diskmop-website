import type { Article } from '../types';

export const cleanUpDownloadsFolder: Article = {
  slug: 'clean-up-downloads-folder',
  type: 'guide',
  category: 'Disk Cleanup',
  date: '2026-07-16',
  readingTime: 6,
  content: {
    tr: {
      title: 'İndirilenler Klasörünü Temizleme: Windows ve Mac Rehberi',
      metaDescription:
        'İndirilenler klasörünü temizleme rehberi: eski indirmeleri tarihe ve boyuta göre silin, yinelenen dosyaları bulun ve Windows ile Mac\'te diskinizde yer açın.',
      subtitle: 'Kategorilere ayırın, silin ve bir daha birikmesin: adım adım İndirilenler temizliği',
      intro: [
        'İndirilenler klasörünü temizlemek için klasörü Dosya Gezgini veya Finder\'da açın, dosyaları tarihe ve boyuta göre sıralayın, artık ihtiyaç duymadığınız kurulum dosyalarını ve eski indirmeleri silin, ardından alanı gerçekten boşaltmak için Geri Dönüşüm Kutusu\'nu boşaltın. İndirilenler\'deki hemen her dosya başka bir yerden gelen bir kopya olduğu için burası bilgisayarınızda en güvenle temizlenebilecek klasörlerden biridir.',
        'Çoğu bilgisayarda İndirilenler, farkında olunmadan en çok yer kaplayan tek klasör haline gelir: yıllar içinde biriken kurulum dosyaları, ZIP arşivleri, PDF\'ler ve e-posta ekleri sessizce gigabaytlarca alan kaplar. Bu rehberde, dosyaları tek tek gözden geçirmek yerine önce kategorilere ayırıp sonra silen bir iş akışını hem Windows hem de Mac için adım adım anlatacağız.',
      ],
      sections: [
        {
          title: 'İndirilenler Klasörü Neden Dijital Bir Çöplüğe Dönüşür',
          content: [
            'Tarayıcınız varsayılan olarak her şeyi İndirilenler\'e kaydeder: program kurulum dosyaları, PDF faturalar, ZIP arşivleri, e-posta ekleri, fotoğraflar ve videolar. Hiçbir dosya kendiliğinden silinmediği ve çoğu kullanıcı klasörü hiç açmadığı için liste aylar içinde yüzlerce öğeye ulaşır. Sonuç, çoğu bilgisayarda en çok yer kaplayan klasörlerden biridir ve disk dolduğunda ilk bakılması gereken yer burasıdır.',
            'Peki İndirilenler\'i silmek güvenli mi? Klasörün içeriği için cevap büyük ölçüde evet: kurulum dosyaları gerektiğinde yeniden indirilebilir, e-posta ekleri hâlâ posta kutunuzda durur ve projelerinize taşıdığınız dosyalar zaten birer kopyadır. Klasörün kendisini silmeyin; işletim sistemi ve tarayıcılar bu klasörün var olmasını bekler. Tek dikkat edilmesi gereken, yalnızca burada tuttuğunuz ve üzerinde çalıştığınız dosyalardır — silmeden önce bunları başka bir klasöre taşıyın.',
            'İçerik bu kadar karışık olduğu için en verimli yöntem, dosyaları tek tek gözden geçirmek değil, önce türe ve yaşa göre gruplandırıp sonra toplu silmektir. Bu rehberin geri kalanı tam olarak bu akışı izler: sırala, kategorize et, kopyaları yakala, sil ve bir daha birikmemesi için düzen kur.',
          ],
        },
        {
          title: 'Eski İndirmeleri Tarihe ve Boyuta Göre Elle Silin',
          content: [
            'Windows\'ta Win+E kısayoluyla Dosya Gezgini\'ni açın ve kenar çubuğundan İndirilenler\'e tıklayın. Görünüm menüsünden Ayrıntılar düzenine geçin, ardından Değiştirme tarihi sütun başlığına tıklayarak dosyaları en eskiden yeniye sıralayın. Aylardır açmadığınız dosyalar genellikle güvenle silinebilir. Boyut sütununa tıklayarak da en büyük dosyaları üstte toplayabilir ve en çok alanı kazandıracak silme işlemlerine öncelik verebilirsiniz.',
            'Mac\'te Finder\'ı açın ve Option+Cmd+L kısayoluyla İndirilenler klasörüne gidin. Cmd+2 ile liste görünümüne geçip Eklenme Tarihi sütununa göre sıralayın; Cmd+J ile görünüm seçeneklerini açarak Boyut sütununu etkinleştirebilirsiniz. Silmek istediğiniz dosyaları seçip Cmd+Delete ile Çöp Sepeti\'ne taşıyın.',
            'Pratik birkaç kural işi hızlandırır: .exe, .msi, .dmg ve .pkg uzantılı kurulum dosyalarını programı kurduktan sonra saklamanın bir anlamı yoktur, içeriğini çıkardığınız ZIP arşivleri de aynı şekilde silinebilir. Yine de yüzlerce karışık dosya arasında elle sıralama yapmak yorucudur; bir sonraki adımda bu işi kategorilerle nasıl otomatikleştireceğinizi göreceğiz.',
          ],
        },
        {
          title: 'Eski İndirmeleri Kategoriye Göre Otomatik Temizleyin',
          content: [
            'Windows\'un yerleşik Depolama Duyarlılığı özelliği, Ayarlar > Sistem > Depolama yolundan etkinleştirildiğinde, İndirilenler\'de belirli bir süredir açılmamış dosyaları otomatik olarak silebilir. Bu kullanışlı bir başlangıçtır, ancak kör bir araçtır: yalnızca dosyanın yaşına bakar, türünü dikkate almaz ve silmeden önce size tür bazında bir önizleme sunmaz. macOS\'te ise İndirilenler klasörü için benzer bir yerleşik otomatik temizlik özelliği bulunmaz.',
            'Disk Mop\'un İndirilenler Temizleyicisi (Downloads Cleaner) tam bu boşluğu doldurur: klasördeki dosyaları kurulum dosyaları, arşivler, belgeler, görseller ve videolar gibi kategorilere ayırır ve eski dosyaları kategori bazında temizlemenizi sağlar. Tüm eski kurulum dosyalarını tek geçişte silerken belgelerinize hiç dokunmayabilirsiniz. İndirilenler\'e özel bu araç, neredeyse hiçbir rakip temizlik uygulamasında bulunmayan bir özelliktir.',
            'Kategori bazlı temizlik, yaşa göre kör silmeden çok daha güvenlidir: hangi türde dosyaları sildiğinizi her an görürsünüz ve ihtiyacınız olan bir belgeyi yanlışlıkla kaybetme riskiniz ciddi ölçüde azalır.',
          ],
        },
        {
          title: 'Silmeden Önce Yinelenen İndirmeleri Yakalayın',
          content: [
            'Aynı dosyayı iki kez indirdiğinizde tarayıcınız üzerine yazmak yerine rapor (1).pdf gibi numaralı bir kopya oluşturur. E-postadan tekrar tekrar indirilen fotoğraflar, her sürüm için yeniden indirilen kurulum dosyaları derken yinelenen dosyalar hem İndirilenler içinde hem de diğer klasörlerinizde sessizce birikir.',
            'Elle bulmanın yolu, dosyaları ada göre sıralayıp (1) ve (2) gibi son ekleri aramaktır; ancak bu yöntem yeniden adlandırılmış kopyaları kaçırır. Disk Mop\'un Yinelenen Dosya Dedektörü (Duplicate Detector) dosyaları adlarına göre değil, SHA-256 karma değerlerine göre karşılaştırır. Böylece fotoğraf, video ve belgeler dahil birebir aynı olan dosyaları, adları ne olursa olsun güvenilir şekilde bulur.',
            'Büyük silme işleminden önce bir kopya taraması yapmak akıllıcadır: hangi dosyaların başka klasörlerde de bulunduğunu bildiğinizde, İndirilenler\'deki kopyaları gönül rahatlığıyla silebilir ve her dosyanın tek bir düzenli kopyasını korursunuz.',
          ],
        },
        {
          title: 'Alanı Gerçekten Boşaltmak İçin Geri Dönüşüm Kutusunu Boşaltın',
          content: [
            'Sildiğiniz dosyalar diskten hemen kaybolmaz; önce Windows\'ta Geri Dönüşüm Kutusu\'na, Mac\'te Çöp Sepeti\'ne taşınır. Kutu boşaltılana kadar disk alanı geri kazanılmaz. Gigabaytlarca dosya silip boş alanın hiç değişmediğini görmek, temizlik yapan kullanıcıların en sık yaşadığı şaşkınlıktır.',
            'Windows\'ta masaüstündeki Geri Dönüşüm Kutusu simgesine sağ tıklayıp Geri Dönüşüm Kutusu\'nu Boşalt seçeneğini kullanın. Mac\'te Finder menüsünden Çöp Sepeti\'ni Boşalt\'ı seçin veya Shift+Cmd+Delete kısayoluna basın; Finder ayarlarının Gelişmiş sekmesinden öğelerin 30 gün sonra otomatik silinmesini de açabilirsiniz.',
            'Boşaltmadan önce kutuya hızlıca göz atmayı alışkanlık edinin: yanlışlıkla silinen bir dosyayı geri almak için son şansınız burasıdır. Emin olduktan sonra boşaltın ve kazandığınız alanın disk göstergesine yansıdığını görün.',
          ],
        },
        {
          title: 'Bir Daha Birikmemesi İçin Temizlik Zamanlaması Kurun',
          content: [
            'Tek seferlik bir temizlik genellikle yalnızca birkaç hafta dayanır; indirmeye devam ettiğiniz sürece klasör yeniden dolar. İki küçük alışkanlık büyük fark yaratır: dosyaları indirirken kalıcı olarak kalacaksa doğru klasöre taşıyın ve kurulum dosyalarını işi bittiği anda silin. Windows kullanıcıları Depolama Duyarlılığı\'nı düzenli çalışacak şekilde ayarlayabilir; Mac\'te ise düzenli elle temizlik gerekir.',
            'Disk Mop\'un Zamanlanmış Temizlik özelliği bu işi tamamen otomatiğe bağlar: haftalık veya aylık görevler kurarak eski indirmelerin, sistem ve tarayıcı önbelleğinin ve geri dönüşüm kutusunun düzenli olarak temizlenmesini sağlarsınız. Aralarda hızlı bir bakım gerektiğinde Hızlandır (Speed Up) özelliği eski indirmeleri, önbellekleri ve geri dönüşüm kutusunu tek tıkla temizler.',
            'Zamanlama kurulduğunda İndirilenler klasörü bir arşiv olmaktan çıkıp geçici bir gelen kutusuna dönüşür — dosyalar gelir, işlenir ve gider. Bu, klasörün olması gerektiği gibi çalışması demektir.',
          ],
        },
      ],
      verdict: [
        'İndirilenler klasörünü temizlemenin en etkili yolu düzenli bir akış izlemektir: dosyaları tarihe ve boyuta göre sıralayın, türlerine göre kategorilere ayırıp eski olanları toplu silin, yinelenen kopyaları yakalayın, ardından alanı gerçekten kazanmak için Geri Dönüşüm Kutusu\'nu boşaltın. Son olarak bir zamanlama kurarak aynı yığının bir daha oluşmasını engelleyin.',
        'Disk Mop bu akışın her adımını tek uygulamada toplar: neredeyse hiçbir rakipte bulunmayan İndirilenler Temizleyicisi dosyaları kategorilere ayırır, SHA-256 tabanlı Yinelenen Dosya Dedektörü kopyaları bulur, Zamanlanmış Temizlik ise düzeni kalıcı hale getirir. Uygulamayı ücretsiz indirip deneyebilir, tüm özellikleri tek seferlik $19.90 ödemeyle ömür boyu açabilirsiniz.',
      ],
      ctaText: 'Disk Mop ile İndirilenler klasörünüzü temizleyin',
    },
    en: {
      title: 'How to Clean Up Downloads Folder on Windows and Mac',
      metaDescription:
        'Learn how to clean up your Downloads folder on Windows and Mac: sort by age and size, auto-delete old files by category, remove duplicates, and keep it tidy.',
      subtitle: 'A categorize-then-delete workflow for the messiest folder on your computer',
      intro: [
        'To clean up your Downloads folder, open it in File Explorer or Finder, sort the files by date and size, delete old installers and files you no longer need, then empty the Recycle Bin or Trash to actually reclaim the space. Because almost everything in Downloads is a copy of a file that exists somewhere else, it is one of the safest folders on your computer to clean.',
        'On most computers, Downloads quietly becomes the single biggest junk drawer on the disk: years of installers, ZIP archives, PDFs, and email attachments pile up into gigabytes of wasted space. In this guide, we\'ll walk through a categorize-then-delete workflow for both Windows and Mac — a far faster approach than scrolling through hundreds of mixed files one by one.',
      ],
      sections: [
        {
          title: 'Why the Downloads Folder Becomes a Junk Drawer',
          content: [
            'Your browser saves everything to Downloads by default: program installers, PDF invoices, ZIP archives, email attachments, photos, and videos. Nothing is ever removed automatically, and most people rarely open the folder at all, so within months it grows to hundreds of items. That is why a Downloads folder taking up space is one of the first things to check when your disk fills up — it is routinely among the largest folders on the drive.',
            'So, is it safe to delete Downloads? For the contents, the answer is mostly yes: installers can be downloaded again whenever you need them, email attachments still live in your inbox, and files you moved into project folders are already copies. Don\'t delete the folder itself — the operating system and your browsers expect it to exist. The one thing to watch for is files you only keep here and actively work on; move those to a proper folder before you start deleting.',
            'Because the contents are such a mixed bag, the most efficient approach is not to review files one by one but to group them by type and age first, then delete in bulk. The rest of this guide follows exactly that flow: sort, categorize, catch duplicates, delete, and set up a routine so the pile never comes back.',
          ],
        },
        {
          title: 'Sort and Delete Downloads Manually by Age and Size',
          content: [
            'On Windows, press Win+E to open File Explorer and click Downloads in the sidebar. Switch to the Details layout from the View menu, then click the Date modified column header to sort oldest first — it\'s usually safe to delete old downloads you haven\'t opened in months. Click the Size column to bring the largest files to the top, or type size:>100MB into the search box to surface only the big ones and prioritize the deletions that free the most space.',
            'On a Mac, open Finder and press Option+Cmd+L to jump straight to Downloads. Press Cmd+2 for list view and sort by the Date Added column; press Cmd+J to open the view options and enable the Size column if it isn\'t visible. Select the files you no longer need and press Cmd+Delete to move them to the Trash.',
            'A few rules of thumb speed things up: installer files ending in .exe, .msi, .dmg, or .pkg serve no purpose once the program is installed, and ZIP archives you have already extracted can go too. Still, manually sorting through hundreds of mixed files is tedious — the next step shows how to automate it with categories.',
          ],
        },
        {
          title: 'Auto-Clean Old Downloads by Category',
          content: [
            'Windows has a built-in way to auto delete old files in Downloads: open Settings > System > Storage, enable Storage Sense, and set it to delete files in the Downloads folder that haven\'t been opened for a chosen number of days. It is a useful start, but it is a blunt instrument — it looks only at file age, ignores file type, and gives you no preview of what kind of files are about to disappear. macOS has no comparable built-in auto-clean for the Downloads folder at all.',
            'Disk Mop\'s Downloads Cleaner fills exactly this gap: it categorizes the files in your Downloads folder — think installers, archives, documents, images, and videos — and lets you clean old files category by category. You can wipe every old installer in a single pass while leaving your documents completely untouched. A dedicated Downloads tool like this is a feature almost no competing cleanup app offers.',
            'Cleaning by category is much safer than blind age-based deletion: you always see what type of files you are removing, which sharply reduces the risk of accidentally losing a document you still need.',
          ],
        },
        {
          title: 'Catch Duplicate Downloads Before You Delete',
          content: [
            'When you download the same file twice, your browser doesn\'t overwrite the first copy — it creates a numbered duplicate like report (1).pdf. Photos re-downloaded from email, installers fetched again for every new version: duplicates quietly accumulate both inside Downloads and across your other folders.',
            'The manual approach is to sort by name and look for (1) and (2) suffixes, but that misses any copy that was renamed. Disk Mop\'s Duplicate Detector compares files by their SHA-256 hash rather than their names, so it reliably finds byte-for-byte identical photos, videos, and documents no matter what they are called.',
            'Running a duplicate scan before the big delete is the smart order of operations: once you know which files also exist elsewhere, you can remove the Downloads copies with confidence and keep exactly one well-organized copy of everything.',
          ],
        },
        {
          title: 'Empty the Recycle Bin to Actually Free the Space',
          content: [
            'Deleted files don\'t leave your disk immediately — they move to the Recycle Bin on Windows or the Trash on macOS, and the space is not reclaimed until you empty it. Deleting gigabytes of downloads and then seeing no change in free space is the single most common surprise during a cleanup.',
            'On Windows, right-click the Recycle Bin icon on the desktop and choose Empty Recycle Bin. On a Mac, choose Empty Trash from the Finder menu or press Shift+Cmd+Delete; you can also enable the option in Finder settings, under the Advanced tab, to remove items from the Trash automatically after 30 days.',
            'Make it a habit to glance through the bin before emptying it — this is your last chance to recover anything deleted by mistake. Once you are sure, empty it and watch the reclaimed gigabytes finally show up in your free-space indicator.',
          ],
        },
        {
          title: 'Set a Schedule So It Never Piles Up Again',
          content: [
            'A one-time cleanup typically lasts only a few weeks; as long as you keep downloading, the folder fills right back up. Two small habits make a big difference to keep an organized Downloads folder: move files you intend to keep into their proper location as soon as they arrive, and delete installers the moment the installation finishes. Windows users can additionally let Storage Sense run on a schedule; on a Mac, regular manual sweeps are required.',
            'Disk Mop\'s Scheduled Cleanup automates the routine entirely: set up weekly or monthly tasks and it will regularly clear old downloads, system and browser caches, and the recycle bin without you thinking about it. And when you want a quick refresh between schedules, the Speed Up feature cleans old downloads, caches, and the recycle bin in a single click.',
            'With a schedule in place, Downloads stops being an archive and becomes what it should have been all along: a temporary inbox where files arrive, get handled, and move on.',
          ],
        },
      ],
      verdict: [
        'The most effective way to clean up your Downloads folder is to follow a repeatable flow: sort by age and size, group files into categories and bulk-delete the old ones, catch duplicate copies, then empty the Recycle Bin or Trash so the space is actually reclaimed. Finish by setting up a schedule so the same pile never builds up again.',
        'Disk Mop covers every step of that flow in one app: its Downloads Cleaner — a dedicated tool almost no competitor has — categorizes your downloads for you, the SHA-256 based Duplicate Detector finds redundant copies, and Scheduled Cleanup keeps the folder tidy permanently. You can download it for free and unlock every feature with a one-time $19.90 lifetime license.',
      ],
      ctaText: 'Clean up your Downloads folder with Disk Mop',
    },
    de: {
      title: 'Downloads-Ordner aufräumen: Anleitung für Windows und Mac',
      metaDescription:
        'Downloads-Ordner aufräumen leicht gemacht: alte Downloads nach Datum und Größe löschen, Duplikate finden und Speicherplatz auf Windows und Mac freigeben.',
      subtitle: 'Kategorisieren, löschen, sauber halten: der unordentlichste Ordner Ihres Computers im Griff',
      intro: [
        'Um den Downloads-Ordner aufzuräumen, öffnen Sie ihn im Datei-Explorer oder Finder, sortieren die Dateien nach Datum und Größe, löschen alte Installationsdateien und nicht mehr benötigte Downloads und leeren anschließend den Papierkorb, um den Speicherplatz tatsächlich freizugeben. Da fast alles in diesem Ordner eine Kopie ist, die auch anderswo existiert, gehört er zu den Ordnern, die sich am sichersten bereinigen lassen.',
        'Auf den meisten Computern wird der Downloads-Ordner unbemerkt zur größten Rumpelkammer der Festplatte: Installationsdateien, ZIP-Archive, PDFs und E-Mail-Anhänge sammeln sich über Jahre zu Gigabytes an. Diese Anleitung zeigt einen Arbeitsablauf nach dem Prinzip erst kategorisieren, dann löschen — für Windows und Mac deutlich schneller als das Durchsehen hunderter gemischter Dateien.',
      ],
      sections: [
        {
          title: 'Warum der Downloads-Ordner zur Rumpelkammer wird',
          content: [
            'Ihr Browser speichert standardmäßig alles im Downloads-Ordner: Installationsdateien, PDF-Rechnungen, ZIP-Archive, E-Mail-Anhänge, Fotos und Videos. Nichts wird automatisch entfernt, und die meisten Nutzer öffnen den Ordner kaum — nach wenigen Monaten sind es hunderte Einträge. Deshalb gehört Downloads regelmäßig zu den größten Ordnern auf dem Laufwerk und ist die erste Anlaufstelle, wenn der Speicherplatz knapp wird.',
            'Ist es sicher, den Inhalt von Downloads zu löschen? Größtenteils ja: Installationsdateien lassen sich jederzeit erneut herunterladen, E-Mail-Anhänge liegen weiterhin im Postfach, und in Projektordner verschobene Dateien sind bereits Kopien. Den Ordner selbst sollten Sie nicht löschen — Betriebssystem und Browser erwarten seine Existenz. Vorsicht nur bei Dateien, die ausschließlich hier liegen und aktiv bearbeitet werden: verschieben Sie diese vorher an einen richtigen Ort.',
            'Weil der Inhalt so gemischt ist, lohnt es sich nicht, Datei für Datei durchzugehen. Effizienter ist es, zuerst nach Typ und Alter zu gruppieren und dann gebündelt zu löschen — genau diesem Ablauf folgt der Rest dieser Anleitung.',
          ],
        },
        {
          title: 'Alte Downloads manuell nach Datum und Größe löschen',
          content: [
            'Unter Windows öffnen Sie den Datei-Explorer mit Win+E und klicken in der Seitenleiste auf Downloads. Wechseln Sie über das Ansicht-Menü zur Detailansicht und klicken Sie auf die Spalte Änderungsdatum, um die ältesten Dateien zuerst anzuzeigen — was seit Monaten unberührt ist, kann meist weg. Ein Klick auf die Spalte Größe bringt die größten Dateien nach oben, damit Sie dort löschen, wo es am meisten bringt.',
            'Auf dem Mac öffnen Sie den Finder und springen mit Option+Cmd+L direkt zu Downloads. Mit Cmd+2 wechseln Sie zur Listenansicht und sortieren nach Hinzufügedatum; über Cmd+J lässt sich die Spalte Größe einblenden. Markieren Sie die überflüssigen Dateien und verschieben Sie sie mit Cmd+Rückschritttaste in den Papierkorb.',
            'Ein paar Faustregeln beschleunigen die Arbeit: Installationsdateien mit den Endungen .exe, .msi, .dmg oder .pkg sind nach der Installation nutzlos, und bereits entpackte ZIP-Archive können ebenfalls weg. Bei hunderten gemischten Dateien bleibt manuelles Sortieren dennoch mühsam — im nächsten Schritt automatisieren wir es mit Kategorien.',
          ],
        },
        {
          title: 'Alte Downloads automatisch nach Kategorie bereinigen',
          content: [
            'Windows bietet eine eingebaute Automatik: Unter Einstellungen > System > Speicher aktivieren Sie die Speicheroptimierung und lassen Dateien im Downloads-Ordner löschen, die eine bestimmte Zahl von Tagen nicht geöffnet wurden. Das ist ein nützlicher Anfang, aber ein stumpfes Werkzeug — es berücksichtigt nur das Alter, ignoriert den Dateityp und zeigt keine Vorschau. macOS hat für den Downloads-Ordner gar keine vergleichbare automatische Bereinigung.',
            'Genau diese Lücke füllt Disk Mops Downloads-Bereiniger (Downloads Cleaner): Er teilt die Dateien im Downloads-Ordner in Kategorien wie Installationsdateien, Archive, Dokumente, Bilder und Videos ein und bereinigt alte Dateien kategorieweise. So löschen Sie alle alten Installationsdateien in einem Durchgang, ohne Ihre Dokumente anzurühren. Ein dediziertes Downloads-Werkzeug dieser Art bietet kaum eine andere Cleanup-App.',
            'Die Bereinigung nach Kategorie ist deutlich sicherer als blindes Löschen nach Alter: Sie sehen jederzeit, welche Art von Dateien entfernt wird, und das Risiko, ein noch benötigtes Dokument zu verlieren, sinkt erheblich.',
          ],
        },
        {
          title: 'Doppelte Downloads vor dem Löschen erkennen',
          content: [
            'Laden Sie dieselbe Datei zweimal herunter, überschreibt der Browser die erste Kopie nicht, sondern legt ein nummeriertes Duplikat wie bericht (1).pdf an. Erneut aus E-Mails geladene Fotos und für jede neue Version heruntergeladene Installer sorgen dafür, dass sich Duplikate im Downloads-Ordner und in anderen Ordnern still ansammeln.',
            'Manuell hilft das Sortieren nach Namen und die Suche nach Endungen wie (1) und (2) — umbenannte Kopien entgehen dieser Methode jedoch. Disk Mops Duplikatfinder (Duplicate Detector) vergleicht Dateien anhand ihres SHA-256-Hashwerts statt ihres Namens und findet so byte-identische Fotos, Videos und Dokumente zuverlässig, egal wie sie heißen.',
            'Ein Duplikat-Scan vor der großen Löschaktion ist die richtige Reihenfolge: Wenn Sie wissen, welche Dateien auch anderswo existieren, können Sie die Kopien in Downloads bedenkenlos entfernen und von allem genau eine geordnete Kopie behalten.',
          ],
        },
        {
          title: 'Papierkorb leeren, um den Speicherplatz wirklich freizugeben',
          content: [
            'Gelöschte Dateien verschwinden nicht sofort von der Festplatte — sie wandern zunächst in den Papierkorb, und der Speicherplatz wird erst beim Leeren freigegeben. Gigabytes zu löschen und dann keine Veränderung beim freien Speicher zu sehen, ist die häufigste Überraschung bei einer Bereinigung.',
            'Unter Windows klicken Sie mit der rechten Maustaste auf das Papierkorb-Symbol auf dem Desktop und wählen Papierkorb leeren. Auf dem Mac wählen Sie im Finder-Menü Papierkorb entleeren oder drücken Shift+Cmd+Rückschritttaste; in den Finder-Einstellungen unter Erweitert lässt sich zudem das automatische Entfernen nach 30 Tagen aktivieren.',
            'Werfen Sie vor dem Leeren einen kurzen Blick hinein — es ist die letzte Chance, versehentlich Gelöschtes zurückzuholen. Danach leeren Sie den Papierkorb und sehen die gewonnenen Gigabytes endlich in der Speicheranzeige.',
          ],
        },
        {
          title: 'Einen Zeitplan einrichten, damit sich nichts mehr ansammelt',
          content: [
            'Eine einmalige Bereinigung hält meist nur wenige Wochen; solange Sie weiter herunterladen, füllt sich der Ordner erneut. Zwei kleine Gewohnheiten helfen: Verschieben Sie Dateien, die Sie behalten wollen, sofort an ihren richtigen Ort und löschen Sie Installer direkt nach der Installation. Windows-Nutzer können zusätzlich die Speicheroptimierung regelmäßig laufen lassen; auf dem Mac bleibt nur die manuelle Routine.',
            'Disk Mops geplante Bereinigung (Scheduled Cleanup) automatisiert das vollständig: Mit wöchentlichen oder monatlichen Aufgaben werden alte Downloads, System- und Browser-Cache sowie der Papierkorb regelmäßig bereinigt. Für eine schnelle Auffrischung zwischendurch erledigt die Speed-Up-Funktion alte Downloads, Caches und Papierkorb mit einem einzigen Klick.',
            'Mit einem festen Zeitplan ist der Downloads-Ordner kein Archiv mehr, sondern das, was er sein sollte: ein temporärer Eingangskorb, in dem Dateien ankommen, verarbeitet werden und weiterziehen.',
          ],
        },
      ],
      verdict: [
        'Der effektivste Weg, den Downloads-Ordner aufzuräumen, ist ein wiederholbarer Ablauf: nach Alter und Größe sortieren, Dateien in Kategorien gruppieren und alte gebündelt löschen, Duplikate aufspüren und anschließend den Papierkorb leeren, damit der Platz wirklich frei wird. Zum Schluss sorgt ein Zeitplan dafür, dass sich derselbe Berg nie wieder auftürmt.',
        'Disk Mop deckt jeden Schritt dieses Ablaufs in einer App ab: Der Downloads-Bereiniger — ein Werkzeug, das kaum ein Konkurrent bietet — kategorisiert Ihre Downloads, der SHA-256-basierte Duplikatfinder entdeckt überflüssige Kopien, und die geplante Bereinigung hält den Ordner dauerhaft sauber. Der Download ist kostenlos; alle Funktionen schalten Sie mit einer einmaligen Lifetime-Lizenz für 19,90 $ frei.',
      ],
      ctaText: 'Räumen Sie Ihren Downloads-Ordner mit Disk Mop auf',
    },
    fr: {
      title: "Nettoyer le dossier Téléchargements sur Windows et Mac",
      metaDescription:
        "Nettoyez votre dossier Téléchargements sur Windows et Mac : triez par date et taille, supprimez les anciens fichiers par catégorie et éliminez les doublons.",
      subtitle: "Trier, catégoriser, supprimer : la méthode pour le dossier le plus encombré de votre ordinateur",
      intro: [
        "Pour nettoyer votre dossier Téléchargements, ouvrez-le dans l'Explorateur de fichiers ou le Finder, triez les fichiers par date et par taille, supprimez les anciens programmes d'installation et tout ce dont vous n'avez plus besoin, puis videz la Corbeille pour récupérer réellement l'espace. Comme presque tout ce qui s'y trouve est la copie d'un fichier existant ailleurs, c'est l'un des dossiers les plus sûrs à nettoyer sur votre ordinateur.",
        "Sur la plupart des ordinateurs, le dossier Téléchargements devient discrètement le plus grand fourre-tout du disque : des années d'installeurs, d'archives ZIP, de PDF et de pièces jointes s'y accumulent jusqu'à représenter plusieurs gigaoctets. Dans ce guide, nous suivons une méthode « catégoriser puis supprimer », valable sous Windows comme sur Mac — bien plus rapide que de faire défiler un par un des centaines de fichiers mélangés.",
      ],
      sections: [
        {
          title: "Pourquoi le dossier Téléchargements devient un fourre-tout",
          content: [
            "Votre navigateur enregistre tout dans Téléchargements par défaut : programmes d'installation, factures PDF, archives ZIP, pièces jointes, photos et vidéos. Rien n'est jamais supprimé automatiquement, et la plupart des gens n'ouvrent presque jamais ce dossier : en quelques mois, il atteint des centaines d'éléments. C'est pourquoi un dossier Téléchargements qui prend de la place fait partie des premiers endroits à vérifier quand le disque sature — il figure régulièrement parmi les plus volumineux du système.",
            "Alors, peut-on supprimer le contenu du dossier Téléchargements sans risque ? Dans l'ensemble, oui : les programmes d'installation se retéléchargent à volonté, les pièces jointes restent dans votre messagerie, et les fichiers déplacés vers vos dossiers de projet en sont déjà des copies. Ne supprimez pas le dossier lui-même — le système d'exploitation et les navigateurs s'attendent à le trouver. La seule précaution concerne les fichiers que vous ne conservez qu'ici et sur lesquels vous travaillez : déplacez-les dans un dossier approprié avant de commencer le ménage.",
            "Le contenu étant très hétérogène, la méthode la plus efficace n'est pas d'examiner les fichiers un par un, mais de les regrouper d'abord par type et par ancienneté, puis de supprimer par lots. La suite de ce guide suit exactement cet enchaînement : trier, catégoriser, repérer les doublons, supprimer, puis mettre en place une routine pour que la pile ne revienne jamais.",
          ],
        },
        {
          title: "Trier et supprimer manuellement les téléchargements par date et par taille",
          content: [
            "Sous Windows, appuyez sur Win+E pour ouvrir l'Explorateur de fichiers et cliquez sur Téléchargements dans le volet de gauche. Passez en affichage Détails depuis le menu Affichage, puis cliquez sur l'en-tête de colonne Modifié le pour classer du plus ancien au plus récent — les téléchargements que vous n'avez pas ouverts depuis des mois peuvent généralement disparaître sans risque. Cliquez sur la colonne Taille pour faire remonter les plus gros fichiers, ou tapez size:>100MB dans la zone de recherche pour n'afficher que les poids lourds et commencer par les suppressions qui libèrent le plus d'espace.",
            "Sur Mac, ouvrez le Finder et appuyez sur Option+Cmd+L pour aller directement dans Téléchargements. Passez en vue Liste avec Cmd+2 et triez sur la colonne Date d'ajout ; Cmd+J ouvre les options d'affichage pour activer la colonne Taille si elle est masquée. Sélectionnez les fichiers devenus inutiles et appuyez sur Cmd+Suppr pour les placer dans la Corbeille.",
            "Quelques règles simples accélèrent le tri : les fichiers d'installation en .exe, .msi, .dmg ou .pkg ne servent plus à rien une fois le programme installé, et les archives ZIP que vous avez déjà décompressées peuvent partir elles aussi. Trier à la main des centaines de fichiers mélangés reste néanmoins fastidieux — l'étape suivante montre comment automatiser tout cela grâce aux catégories.",
          ],
        },
        {
          title: "Nettoyer automatiquement les anciens téléchargements par catégorie",
          content: [
            "Windows intègre un mécanisme pour supprimer automatiquement les vieux fichiers du dossier Téléchargements : ouvrez Paramètres > Système > Stockage, activez l'Assistant Stockage (Storage Sense) et demandez-lui d'effacer les fichiers du dossier Téléchargements qui n'ont pas été ouverts depuis un nombre de jours défini. C'est un bon début, mais l'outil reste rudimentaire : il ne regarde que l'âge des fichiers, ignore leur type et n'offre aucun aperçu de ce qui va disparaître. macOS, lui, ne propose aucun nettoyage automatique comparable pour le dossier Téléchargements.",
            "Le Nettoyeur de téléchargements (Downloads Cleaner) de Disk Mop comble précisément ce manque : il classe les fichiers de votre dossier Téléchargements par catégories — programmes d'installation, archives, documents, images, vidéos — et vous laisse nettoyer les anciens fichiers catégorie par catégorie. Vous pouvez effacer tous les vieux installeurs en une seule passe sans toucher à un seul de vos documents. Un outil dédié aux téléchargements de ce type, presque aucune application de nettoyage concurrente ne le propose.",
            "Nettoyer par catégorie est nettement plus sûr qu'une suppression aveugle fondée sur l'ancienneté : vous voyez en permanence quel type de fichiers part à la corbeille, ce qui réduit fortement le risque de perdre par mégarde un document encore utile.",
          ],
        },
        {
          title: "Repérer les téléchargements en double avant de supprimer",
          content: [
            "Quand vous téléchargez deux fois le même fichier, votre navigateur n'écrase pas la première copie : il crée un doublon numéroté, du type rapport (1).pdf. Photos retéléchargées depuis un e-mail, installeurs récupérés à chaque nouvelle version… les doublons s'accumulent discrètement dans Téléchargements comme dans le reste de vos dossiers.",
            "À la main, on trie par nom et on cherche les suffixes (1) et (2), mais cette méthode laisse passer toutes les copies renommées. Le Détecteur de doublons (Duplicate Detector) de Disk Mop compare les fichiers par leur empreinte SHA-256 plutôt que par leur nom : il retrouve donc de façon fiable les photos, vidéos et documents strictement identiques, quel que soit leur intitulé.",
            "Lancer une analyse des doublons avant le grand ménage est le bon ordre des opérations : une fois que vous savez quels fichiers existent aussi ailleurs, vous supprimez les copies du dossier Téléchargements en toute confiance et ne conservez qu'un exemplaire bien rangé de chaque document.",
          ],
        },
        {
          title: "Vider la Corbeille pour libérer réellement l'espace",
          content: [
            "Les fichiers supprimés ne quittent pas immédiatement le disque : ils rejoignent la Corbeille, sous Windows comme sur macOS, et l'espace n'est récupéré qu'au moment où vous la videz. Supprimer plusieurs gigaoctets de téléchargements puis constater que l'espace libre n'a pas bougé est la surprise la plus fréquente lors d'un nettoyage.",
            "Sous Windows, faites un clic droit sur l'icône Corbeille du bureau et choisissez Vider la Corbeille. Sur Mac, sélectionnez Vider la corbeille dans le menu Finder ou appuyez sur Maj+Cmd+Suppr ; vous pouvez également activer, dans les réglages du Finder sous l'onglet Avancé, la suppression automatique des éléments après 30 jours.",
            "Prenez l'habitude de jeter un œil au contenu de la corbeille avant de la vider : c'est votre dernière chance de récupérer un fichier effacé par erreur. Une fois certain de vous, videz-la et regardez enfin les gigaoctets récupérés apparaître dans l'indicateur d'espace libre.",
          ],
        },
        {
          title: "Programmer un nettoyage pour que rien ne s'accumule à nouveau",
          content: [
            "Un nettoyage ponctuel ne tient en général que quelques semaines : tant que vous continuez à télécharger, le dossier se remplit de nouveau. Deux petites habitudes changent tout pour garder un dossier Téléchargements organisé : déplacez immédiatement vers leur emplacement définitif les fichiers que vous comptez conserver, et supprimez les programmes d'installation dès la fin de l'installation. Sous Windows, vous pouvez en plus laisser l'Assistant Stockage tourner selon une planification ; sur Mac, il faut passer régulièrement à la main.",
            "Le Nettoyage planifié (Scheduled Cleanup) de Disk Mop automatise complètement la routine : configurez des tâches hebdomadaires ou mensuelles et l'application efface régulièrement les anciens téléchargements, les caches système et navigateur ainsi que la corbeille, sans que vous ayez à y penser. Et pour un coup de propre rapide entre deux planifications, la fonction Accélérer (Speed Up) nettoie anciens téléchargements, caches et corbeille en un seul clic.",
            "Avec une planification en place, le dossier Téléchargements cesse d'être une archive pour devenir ce qu'il aurait toujours dû être : une boîte de réception temporaire où les fichiers arrivent, sont traités, puis s'en vont.",
          ],
        },
      ],
      verdict: [
        "La méthode la plus efficace pour nettoyer votre dossier Téléchargements consiste à suivre un enchaînement reproductible : trier par ancienneté et par taille, regrouper les fichiers en catégories et supprimer les anciens par lots, repérer les doublons, puis vider la Corbeille pour que l'espace soit vraiment récupéré. Terminez en programmant un nettoyage régulier afin que la même pile ne se reconstitue jamais.",
        "Disk Mop couvre chacune de ces étapes dans une seule application : son Nettoyeur de téléchargements — un outil dédié que presque aucun concurrent ne propose — classe vos fichiers pour vous, le Détecteur de doublons fondé sur SHA-256 repère les copies inutiles, et le Nettoyage planifié garde le dossier propre durablement. L'application se télécharge gratuitement, et une licence à vie en paiement unique de 19,90 $ débloque toutes les fonctionnalités.",
      ],
      ctaText: "Nettoyez votre dossier Téléchargements avec Disk Mop",
    },
    es: {
      title: "Cómo limpiar la carpeta Descargas en Windows y Mac",
      metaDescription:
        "Aprende a limpiar la carpeta Descargas en Windows y Mac: ordena por fecha y tamaño, borra archivos antiguos por categoría, elimina duplicados y libera espacio.",
      subtitle: "Un método de categorizar y luego borrar para la carpeta más desordenada del equipo",
      intro: [
        "Para limpiar la carpeta Descargas, ábrela en el Explorador de archivos o en el Finder, ordena los archivos por fecha y tamaño, borra los instaladores antiguos y todo lo que ya no necesites, y vacía después la Papelera de reciclaje para recuperar el espacio de verdad. Como casi todo lo que hay en Descargas es una copia de un archivo que existe en otro sitio, es una de las carpetas más seguras de limpiar de todo el equipo.",
        "En la mayoría de los equipos, Descargas se convierte sin que nadie lo note en el mayor cajón de sastre del disco: años de instaladores, archivos ZIP, PDF y adjuntos de correo acaban ocupando gigabytes. En esta guía seguimos un método de categorizar y después borrar, válido tanto en Windows como en Mac y mucho más rápido que revisar uno por uno cientos de archivos mezclados.",
      ],
      sections: [
        {
          title: "Por qué la carpeta Descargas acaba siendo un cajón de sastre",
          content: [
            "El navegador guarda todo en Descargas de forma predeterminada: instaladores de programas, facturas en PDF, archivos ZIP, adjuntos de correo, fotos y vídeos. Nada se elimina automáticamente y casi nadie abre esa carpeta, así que en unos meses llega a acumular cientos de elementos. Por eso, cuando el disco se llena, una carpeta Descargas que ocupa demasiado es de los primeros sitios que conviene mirar: suele estar entre las carpetas más grandes de la unidad.",
            "¿Es seguro borrar el contenido de Descargas? En general, sí: los instaladores se pueden volver a descargar cuando haga falta, los adjuntos siguen en tu bandeja de entrada y los archivos que moviste a carpetas de proyecto ya son copias. Lo que no debes borrar es la carpeta en sí: el sistema operativo y los navegadores cuentan con que exista. La única precaución son los archivos que solo guardas aquí y en los que estás trabajando; muévelos a una carpeta adecuada antes de empezar a borrar.",
            "Como el contenido está tan mezclado, lo más eficiente no es revisar archivo por archivo, sino agruparlos primero por tipo y antigüedad y borrarlos después en bloque. El resto de la guía sigue exactamente ese orden: ordenar, categorizar, cazar duplicados, borrar y establecer una rutina para que el montón no vuelva a formarse.",
          ],
        },
        {
          title: "Ordena y borra a mano las descargas por antigüedad y tamaño",
          content: [
            "En Windows, pulsa Win+E para abrir el Explorador de archivos y haz clic en Descargas en la barra lateral. Cambia al diseño Detalles desde el menú Vista y haz clic en el encabezado de la columna Fecha de modificación para ordenar de más antiguo a más reciente: lo que llevas meses sin abrir suele poder borrarse sin problema. Haz clic en la columna Tamaño para subir los archivos más grandes, o escribe size:>100MB en el cuadro de búsqueda para ver solo los pesos pesados y empezar por las eliminaciones que más espacio liberan.",
            "En un Mac, abre el Finder y pulsa Opción+Cmd+L para ir directo a Descargas. Pulsa Cmd+2 para la vista de lista y ordena por la columna Fecha de incorporación; con Cmd+J abres las opciones de visualización y activas la columna Tamaño si no aparece. Selecciona los archivos que ya no necesitas y pulsa Cmd+Suprimir para enviarlos a la Papelera.",
            "Unas cuantas reglas prácticas aceleran el trabajo: los instaladores con extensión .exe, .msi, .dmg o .pkg no sirven de nada una vez instalado el programa, y los archivos ZIP que ya has extraído también pueden irse. Aun así, ordenar a mano cientos de archivos mezclados es tedioso; en el siguiente paso verás cómo automatizarlo con categorías.",
          ],
        },
        {
          title: "Limpia automáticamente las descargas antiguas por categoría",
          content: [
            "Windows incluye una forma de borrar automáticamente los archivos antiguos de Descargas: abre Configuración > Sistema > Almacenamiento, activa el Sensor de almacenamiento (Storage Sense) y configúralo para que elimine los archivos de la carpeta Descargas que lleven sin abrirse un número determinado de días. Es un buen punto de partida, pero es una herramienta tosca: solo mira la antigüedad del archivo, ignora su tipo y no te muestra ninguna vista previa de lo que va a desaparecer. macOS, directamente, no tiene ninguna limpieza automática equivalente para la carpeta Descargas.",
            "El Limpiador de descargas (Downloads Cleaner) de Disk Mop cubre justo ese hueco: clasifica los archivos de tu carpeta Descargas en categorías —instaladores, archivos comprimidos, documentos, imágenes y vídeos— y te permite limpiar los antiguos categoría por categoría. Puedes eliminar todos los instaladores viejos de una sola pasada sin tocar ni uno de tus documentos. Una herramienta dedicada a Descargas como esta casi no existe en las aplicaciones de limpieza de la competencia.",
            "Limpiar por categorías es mucho más seguro que borrar a ciegas por antigüedad: en todo momento ves qué tipo de archivos estás eliminando, lo que reduce muchísimo el riesgo de perder sin querer un documento que aún necesitas.",
          ],
        },
        {
          title: "Detecta las descargas duplicadas antes de borrar",
          content: [
            "Cuando descargas dos veces el mismo archivo, el navegador no sobrescribe la primera copia: crea un duplicado numerado del tipo informe (1).pdf. Fotos que vuelves a descargar del correo, instaladores que bajas otra vez con cada versión nueva… los duplicados se acumulan en silencio tanto dentro de Descargas como en el resto de tus carpetas.",
            "El método manual consiste en ordenar por nombre y buscar los sufijos (1) y (2), pero así se te escapa cualquier copia renombrada. El Detector de duplicados (Duplicate Detector) de Disk Mop compara los archivos por su hash SHA-256 en lugar de por el nombre, así que encuentra de forma fiable fotos, vídeos y documentos idénticos byte a byte, se llamen como se llamen.",
            "Pasar un análisis de duplicados antes del gran borrado es el orden inteligente: cuando ya sabes qué archivos existen también en otro sitio, puedes eliminar las copias de Descargas con total tranquilidad y quedarte con una única copia bien ordenada de cada cosa.",
          ],
        },
        {
          title: "Vacía la Papelera de reciclaje para liberar el espacio de verdad",
          content: [
            "Los archivos borrados no salen del disco al instante: van a la Papelera de reciclaje en Windows o a la Papelera en macOS, y el espacio no se recupera hasta que la vacías. Borrar gigabytes de descargas y ver después que el espacio libre no ha cambiado es la sorpresa más habitual durante una limpieza.",
            "En Windows, haz clic derecho en el icono de la Papelera de reciclaje del escritorio y elige Vaciar Papelera de reciclaje. En un Mac, elige Vaciar papelera en el menú Finder o pulsa Mayús+Cmd+Suprimir; también puedes activar, en los ajustes del Finder y dentro de la pestaña Avanzado, la eliminación automática de los elementos pasados 30 días.",
            "Acostúmbrate a echar un vistazo a la papelera antes de vaciarla: es tu última oportunidad de recuperar algo borrado por error. Cuando lo tengas claro, vacíala y verás por fin cómo los gigabytes recuperados aparecen en el indicador de espacio libre.",
          ],
        },
        {
          title: "Programa una limpieza para que no se vuelva a acumular",
          content: [
            "Una limpieza puntual suele durar solo unas semanas; mientras sigas descargando, la carpeta se vuelve a llenar. Dos pequeños hábitos marcan la diferencia para mantener la carpeta Descargas ordenada: mueve a su sitio definitivo los archivos que quieras conservar en cuanto lleguen, y borra los instaladores en el momento en que termine la instalación. En Windows puedes además dejar el Sensor de almacenamiento programado; en Mac toca hacer repasos manuales con regularidad.",
            "La Limpieza programada (Scheduled Cleanup) de Disk Mop automatiza la rutina por completo: configuras tareas semanales o mensuales y la aplicación borra periódicamente las descargas antiguas, las cachés del sistema y del navegador y la papelera de reciclaje sin que tengas que pensar en ello. Y cuando quieras un repaso rápido entre una tarea y otra, la función Acelerar (Speed Up) limpia descargas antiguas, cachés y papelera con un solo clic.",
            "Con una programación en marcha, Descargas deja de ser un archivo histórico y se convierte en lo que siempre debió ser: una bandeja de entrada temporal donde los archivos llegan, se gestionan y siguen su camino.",
          ],
        },
      ],
      verdict: [
        "La forma más eficaz de limpiar la carpeta Descargas es seguir un proceso repetible: ordenar por antigüedad y tamaño, agrupar los archivos en categorías y borrar los antiguos en bloque, cazar las copias duplicadas y vaciar después la Papelera de reciclaje para recuperar el espacio de verdad. Termina programando una limpieza periódica para que el mismo montón no vuelva a formarse.",
        "Disk Mop cubre cada paso de ese proceso en una sola aplicación: su Limpiador de descargas —una herramienta dedicada que casi ningún competidor ofrece— clasifica tus descargas por ti, el Detector de duplicados basado en SHA-256 encuentra las copias sobrantes y la Limpieza programada mantiene la carpeta ordenada de forma permanente. Puedes descargarlo gratis y desbloquear todas las funciones con una licencia de por vida de pago único de 19,90 $.",
      ],
      ctaText: "Limpia tu carpeta Descargas con Disk Mop",
    },
    it: {
      title: "Come pulire la cartella Download su Windows e Mac",
      metaDescription:
        "Come pulire la cartella Download su Windows e Mac: ordina per data e dimensione, elimina i vecchi file per categoria, trova i duplicati e libera spazio su disco.",
      subtitle: "Prima categorizzare, poi eliminare: il metodo per la cartella più caotica del computer",
      intro: [
        "Per pulire la cartella Download, aprila in Esplora file o nel Finder, ordina i file per data e dimensione, elimina i vecchi programmi di installazione e tutto ciò che non ti serve più, poi svuota il Cestino per recuperare davvero lo spazio. Dato che quasi tutto ciò che finisce in Download è la copia di un file che esiste già altrove, è una delle cartelle più sicure da ripulire di tutto il computer.",
        "Sulla maggior parte dei computer la cartella Download diventa in silenzio il più grande ripostiglio del disco: anni di programmi di installazione, archivi ZIP, PDF e allegati e-mail si accumulano fino a occupare gigabyte. In questa guida seguiamo un metodo che prima categorizza e poi elimina, valido sia su Windows sia su Mac: molto più rapido che scorrere uno per uno centinaia di file mescolati.",
      ],
      sections: [
        {
          title: "Perché la cartella Download diventa un ripostiglio",
          content: [
            "Il browser salva tutto in Download per impostazione predefinita: programmi di installazione, fatture in PDF, archivi ZIP, allegati e-mail, foto e video. Niente viene rimosso automaticamente e quasi nessuno apre quella cartella, così nel giro di pochi mesi arriva a contenere centinaia di elementi. Ecco perché, quando il disco si riempie, una cartella Download che occupa troppo spazio è tra le prime cose da controllare: è regolarmente una delle cartelle più grandi dell'unità.",
            "È sicuro eliminare il contenuto di Download? In larga parte sì: i programmi di installazione si possono riscaricare quando servono, gli allegati restano nella casella di posta e i file spostati nelle cartelle di progetto sono già copie. Quello che non devi eliminare è la cartella stessa: il sistema operativo e i browser danno per scontata la sua esistenza. L'unica accortezza riguarda i file che tieni solo qui e su cui stai lavorando: spostali in una cartella adeguata prima di iniziare a cancellare.",
            "Proprio perché il contenuto è così eterogeneo, l'approccio più efficiente non è passare in rassegna i file uno alla volta, ma raggrupparli prima per tipo ed età e poi eliminarli in blocco. Il resto della guida segue esattamente questo percorso: ordinare, categorizzare, individuare i duplicati, eliminare e creare una routine perché il mucchio non si riformi.",
          ],
        },
        {
          title: "Ordina ed elimina manualmente i download per età e dimensione",
          content: [
            "Su Windows premi Win+E per aprire Esplora file e fai clic su Download nella barra laterale. Passa alla visualizzazione Dettagli dal menu Visualizza, quindi fai clic sull'intestazione della colonna Ultima modifica per ordinare dal più vecchio al più recente: ciò che non apri da mesi di solito si può eliminare senza pensieri. Fai clic sulla colonna Dimensione per portare in alto i file più pesanti, oppure digita size:>100MB nella casella di ricerca per vedere solo i file voluminosi e partire dalle eliminazioni che liberano più spazio.",
            "Su Mac apri il Finder e premi Opzione+Cmd+L per andare direttamente in Download. Premi Cmd+2 per la vista a elenco e ordina in base alla colonna Data aggiunta; con Cmd+J apri le opzioni di visualizzazione e attivi la colonna Dimensione se non è presente. Seleziona i file che non ti servono più e premi Cmd+Backspace per spostarli nel Cestino.",
            "Qualche regola pratica velocizza tutto: i file di installazione con estensione .exe, .msi, .dmg o .pkg non servono a niente una volta installato il programma, e anche gli archivi ZIP già estratti possono andarsene. Resta però faticoso ordinare a mano centinaia di file mescolati: il passaggio successivo mostra come automatizzare il lavoro con le categorie.",
          ],
        },
        {
          title: "Pulisci automaticamente i vecchi download per categoria",
          content: [
            "Windows offre un modo integrato per eliminare automaticamente i vecchi file di Download: apri Impostazioni > Sistema > Archiviazione, attiva il Sensore memoria (Storage Sense) e impostalo per cancellare i file della cartella Download che non vengono aperti da un certo numero di giorni. È un buon inizio, ma resta uno strumento grossolano: guarda soltanto l'età del file, ignora il tipo e non mostra alcuna anteprima di ciò che sta per sparire. macOS, dal canto suo, non ha nessuna pulizia automatica paragonabile per la cartella Download.",
            "Il Pulitore dei download (Downloads Cleaner) di Disk Mop colma esattamente questa lacuna: suddivide i file della cartella Download in categorie — programmi di installazione, archivi, documenti, immagini e video — e ti permette di ripulire i file vecchi categoria per categoria. Puoi cancellare tutti i vecchi installer in un colpo solo senza sfiorare i tuoi documenti. Uno strumento dedicato ai download come questo non lo offre quasi nessuna app di pulizia concorrente.",
            "Pulire per categoria è molto più sicuro dell'eliminazione cieca basata sull'età: vedi sempre che tipo di file stai rimuovendo, e questo riduce nettamente il rischio di perdere per sbaglio un documento che ti serve ancora.",
          ],
        },
        {
          title: "Individua i download duplicati prima di eliminare",
          content: [
            "Quando scarichi due volte lo stesso file, il browser non sovrascrive la prima copia: crea un duplicato numerato, del tipo report (1).pdf. Foto riscaricate dall'e-mail, installer ripresi a ogni nuova versione… i duplicati si accumulano in silenzio sia dentro Download sia nelle altre cartelle.",
            "Il metodo manuale consiste nell'ordinare per nome e cercare i suffissi (1) e (2), ma così sfugge qualsiasi copia rinominata. Il Rilevatore di duplicati (Duplicate Detector) di Disk Mop confronta i file in base al loro hash SHA-256 anziché al nome, quindi trova in modo affidabile foto, video e documenti identici byte per byte, comunque siano chiamati.",
            "Eseguire una scansione dei duplicati prima della grande eliminazione è l'ordine giusto delle operazioni: una volta che sai quali file esistono anche altrove, puoi rimuovere le copie in Download con tranquillità e conservare una sola copia ben organizzata di ogni cosa.",
          ],
        },
        {
          title: "Svuota il Cestino per liberare davvero lo spazio",
          content: [
            "I file eliminati non lasciano subito il disco: finiscono nel Cestino, sia su Windows sia su macOS, e lo spazio non viene recuperato finché non lo svuoti. Cancellare gigabyte di download e poi non vedere alcun cambiamento nello spazio libero è la sorpresa più comune durante una pulizia.",
            "Su Windows fai clic con il tasto destro sull'icona del Cestino sulla scrivania e scegli Svuota cestino. Su Mac scegli Vuota Cestino dal menu Finder oppure premi Maiusc+Cmd+Backspace; nelle impostazioni del Finder, nella scheda Avanzate, puoi anche attivare la rimozione automatica degli elementi dopo 30 giorni.",
            "Prendi l'abitudine di dare un'occhiata al cestino prima di svuotarlo: è l'ultima occasione per recuperare qualcosa cancellato per errore. Quando sei sicuro, svuotalo e guarda i gigabyte recuperati comparire finalmente nell'indicatore dello spazio libero.",
          ],
        },
        {
          title: "Imposta una pianificazione perché non si riaccumuli nulla",
          content: [
            "Una pulizia una tantum dura in genere poche settimane: finché continui a scaricare, la cartella si riempie di nuovo. Due piccole abitudini fanno una grande differenza per mantenere la cartella Download in ordine: sposta subito nella loro posizione definitiva i file che vuoi conservare, ed elimina i programmi di installazione appena l'installazione è finita. Su Windows puoi in più lasciare che il Sensore memoria giri a intervalli regolari; su Mac servono passaggi manuali periodici.",
            "La Pulizia pianificata (Scheduled Cleanup) di Disk Mop automatizza completamente la routine: imposti attività settimanali o mensili e l'app cancella con regolarità i vecchi download, le cache di sistema e del browser e il cestino, senza che tu debba pensarci. E quando vuoi una rinfrescata veloce tra un'esecuzione e l'altra, la funzione Accelera (Speed Up) pulisce vecchi download, cache e cestino con un solo clic.",
            "Con una pianificazione attiva, Download smette di essere un archivio e diventa ciò che avrebbe sempre dovuto essere: una casella di posta temporanea in cui i file arrivano, vengono gestiti e proseguono.",
          ],
        },
      ],
      verdict: [
        "Il modo più efficace per pulire la cartella Download è seguire un percorso ripetibile: ordinare per età e dimensione, raggruppare i file in categorie ed eliminare in blocco quelli vecchi, individuare le copie duplicate e poi svuotare il Cestino perché lo spazio venga davvero recuperato. Concludi impostando una pianificazione, così lo stesso mucchio non si riforma più.",
        "Disk Mop copre ogni passaggio di questo percorso in un'unica app: il Pulitore dei download — uno strumento dedicato che quasi nessun concorrente offre — categorizza i download al posto tuo, il Rilevatore di duplicati basato su SHA-256 trova le copie superflue e la Pulizia pianificata mantiene la cartella in ordine in modo permanente. Puoi scaricarlo gratuitamente e sbloccare tutte le funzioni con una licenza a vita, pagamento unico di 19,90 $.",
      ],
      ctaText: "Pulisci la cartella Download con Disk Mop",
    },
    pt: {
      title: "Como limpar a pasta Downloads no Windows e no Mac",
      metaDescription:
        "Veja como limpar a pasta Downloads no Windows e no Mac: ordene por data e tamanho, apague arquivos antigos por categoria, remova duplicados e libere espaço.",
      subtitle: "Um fluxo de categorizar e depois apagar para a pasta mais bagunçada do computador",
      intro: [
        "Para limpar a pasta Downloads, abra-a no Explorador de Arquivos ou no Finder, ordene os arquivos por data e tamanho, apague os instaladores antigos e tudo de que você não precisa mais e esvazie a Lixeira para recuperar o espaço de verdade. Como quase tudo o que está em Downloads é a cópia de um arquivo que existe em outro lugar, essa é uma das pastas mais seguras de limpar no computador.",
        "Na maioria dos computadores, a pasta Downloads se transforma silenciosamente no maior depósito de tralha do disco: anos de instaladores, arquivos ZIP, PDFs e anexos de e-mail se acumulam até ocupar gigabytes. Neste guia seguimos um fluxo de categorizar e depois apagar, válido tanto no Windows quanto no Mac — bem mais rápido do que percorrer um a um centenas de arquivos misturados.",
      ],
      sections: [
        {
          title: "Por que a pasta Downloads vira um depósito de tralha",
          content: [
            "O navegador salva tudo em Downloads por padrão: instaladores de programas, faturas em PDF, arquivos ZIP, anexos de e-mail, fotos e vídeos. Nada é removido automaticamente e quase ninguém abre a pasta, então em poucos meses ela chega a centenas de itens. Por isso, quando o disco enche, uma pasta Downloads ocupando espaço é um dos primeiros lugares a verificar: ela costuma estar entre as maiores pastas da unidade.",
            "Então, é seguro apagar o conteúdo de Downloads? Na maior parte, sim: instaladores podem ser baixados de novo quando você precisar, anexos continuam na sua caixa de entrada e os arquivos que você moveu para pastas de projeto já são cópias. O que não se deve apagar é a pasta em si — o sistema operacional e os navegadores esperam que ela exista. A única atenção vai para os arquivos que você guarda só aqui e nos quais está trabalhando: mova-os para uma pasta apropriada antes de começar a apagar.",
            "Como o conteúdo é bastante misturado, o caminho mais eficiente não é revisar arquivo por arquivo, e sim agrupá-los primeiro por tipo e idade para depois apagar em lote. O restante deste guia segue exatamente esse fluxo: ordenar, categorizar, pegar os duplicados, apagar e criar uma rotina para que a pilha não volte.",
          ],
        },
        {
          title: "Ordene e apague downloads antigos por data e tamanho",
          content: [
            "No Windows, pressione Win+E para abrir o Explorador de Arquivos e clique em Downloads na barra lateral. Mude para o modo de exibição Detalhes pelo menu Exibir e clique no cabeçalho da coluna Data de modificação para ordenar do mais antigo ao mais recente — o que você não abre há meses geralmente pode ser apagado sem medo. Clique na coluna Tamanho para trazer os arquivos maiores para o topo, ou digite size:>100MB na caixa de pesquisa para ver apenas os pesados e priorizar as exclusões que liberam mais espaço.",
            "No Mac, abra o Finder e pressione Option+Cmd+L para ir direto a Downloads. Pressione Cmd+2 para a visualização em lista e ordene pela coluna Data de adição; com Cmd+J você abre as opções de visualização e ativa a coluna Tamanho, caso ela não apareça. Selecione os arquivos que não usa mais e pressione Cmd+Delete para mandá-los para a Lixeira.",
            "Algumas regras práticas aceleram o trabalho: arquivos de instalação com extensão .exe, .msi, .dmg ou .pkg não servem para nada depois que o programa está instalado, e os arquivos ZIP que você já extraiu também podem ir embora. Ainda assim, separar centenas de arquivos misturados na mão é cansativo — o próximo passo mostra como automatizar isso com categorias.",
          ],
        },
        {
          title: "Limpe downloads antigos automaticamente por categoria",
          content: [
            "O Windows tem um recurso nativo para apagar arquivos antigos de Downloads automaticamente: abra Configurações > Sistema > Armazenamento, ative o Sensor de Armazenamento (Storage Sense) e configure-o para excluir os arquivos da pasta Downloads que não são abertos há um número escolhido de dias. É um bom começo, mas é uma ferramenta bruta: olha apenas a idade do arquivo, ignora o tipo e não mostra nenhuma prévia do que vai sumir. Já o macOS não tem nada parecido de limpeza automática para a pasta Downloads.",
            "O Limpador de Downloads (Downloads Cleaner) do Disk Mop preenche exatamente essa lacuna: ele separa os arquivos da sua pasta Downloads em categorias — instaladores, arquivos compactados, documentos, imagens e vídeos — e deixa você limpar os antigos categoria por categoria. Dá para eliminar todos os instaladores velhos de uma vez sem encostar nos seus documentos. Uma ferramenta dedicada a Downloads como essa quase nenhum aplicativo de limpeza concorrente oferece.",
            "Limpar por categoria é bem mais seguro do que apagar às cegas pela idade: você sempre vê que tipo de arquivo está removendo, o que reduz muito o risco de perder sem querer um documento de que ainda precisa.",
          ],
        },
        {
          title: "Encontre downloads duplicados antes de apagar",
          content: [
            "Quando você baixa o mesmo arquivo duas vezes, o navegador não sobrescreve a primeira cópia — ele cria uma duplicata numerada, do tipo relatorio (1).pdf. Fotos baixadas de novo do e-mail, instaladores buscados a cada versão nova: os duplicados se acumulam em silêncio tanto dentro de Downloads quanto nas outras pastas.",
            "O jeito manual é ordenar por nome e procurar os sufixos (1) e (2), mas isso deixa passar qualquer cópia renomeada. O Detector de Duplicados (Duplicate Detector) do Disk Mop compara os arquivos pelo hash SHA-256 em vez do nome, então encontra com segurança fotos, vídeos e documentos idênticos byte a byte, não importa como se chamem.",
            "Rodar uma varredura de duplicados antes da grande faxina é a ordem certa das coisas: sabendo quais arquivos também existem em outro lugar, você remove as cópias de Downloads com tranquilidade e mantém exatamente uma cópia bem organizada de cada arquivo.",
          ],
        },
        {
          title: "Esvazie a Lixeira para liberar o espaço de verdade",
          content: [
            "Arquivos apagados não saem do disco na hora — eles vão para a Lixeira, tanto no Windows quanto no macOS, e o espaço só é recuperado quando você a esvazia. Apagar gigabytes de downloads e não ver o espaço livre mudar é a surpresa mais comum em qualquer limpeza.",
            "No Windows, clique com o botão direito no ícone da Lixeira na área de trabalho e escolha Esvaziar Lixeira. No Mac, escolha Esvaziar Lixeira no menu Finder ou pressione Shift+Cmd+Delete; nas configurações do Finder, na aba Avançado, você também pode ativar a remoção automática dos itens depois de 30 dias.",
            "Crie o hábito de dar uma olhada na lixeira antes de esvaziar — é a sua última chance de recuperar algo apagado por engano. Quando tiver certeza, esvazie e veja os gigabytes recuperados aparecerem enfim no indicador de espaço livre.",
          ],
        },
        {
          title: "Programe uma limpeza para nunca mais acumular",
          content: [
            "Uma limpeza única costuma durar poucas semanas; enquanto você continuar baixando, a pasta enche outra vez. Dois hábitos pequenos fazem muita diferença para manter a pasta Downloads organizada: mova para o lugar definitivo os arquivos que pretende guardar assim que eles chegarem e apague os instaladores no instante em que a instalação terminar. No Windows, dá ainda para deixar o Sensor de Armazenamento rodando em uma programação; no Mac, é preciso fazer faxinas manuais com regularidade.",
            "A Limpeza Agendada (Scheduled Cleanup) do Disk Mop automatiza a rotina inteira: você cria tarefas semanais ou mensais e o aplicativo limpa periodicamente downloads antigos, caches do sistema e do navegador e a lixeira, sem que você precise pensar nisso. E quando quiser uma renovada rápida entre uma tarefa e outra, o recurso Acelerar (Speed Up) limpa downloads antigos, caches e lixeira em um único clique.",
            "Com um agendamento em pé, a pasta Downloads deixa de ser um arquivo morto e vira o que sempre deveria ter sido: uma caixa de entrada temporária, em que os arquivos chegam, são tratados e seguem adiante.",
          ],
        },
      ],
      verdict: [
        "A forma mais eficaz de limpar a pasta Downloads é seguir um fluxo repetível: ordenar por idade e tamanho, agrupar os arquivos em categorias e apagar os antigos em lote, localizar as cópias duplicadas e então esvaziar a Lixeira para que o espaço seja realmente recuperado. Termine criando um agendamento para que a mesma pilha nunca se forme de novo.",
        "O Disk Mop cobre cada etapa desse fluxo em um único aplicativo: o Limpador de Downloads — uma ferramenta dedicada que quase nenhum concorrente tem — categoriza seus downloads para você, o Detector de Duplicados baseado em SHA-256 encontra as cópias redundantes e a Limpeza Agendada mantém a pasta em ordem de forma permanente. Você pode baixar de graça e liberar todos os recursos com uma licença vitalícia de pagamento único de 19,90 $.",
      ],
      ctaText: "Limpe sua pasta Downloads com o Disk Mop",
    },
    ja: {
      title: "ダウンロードフォルダーを整理する方法（WindowsとMac）",
      metaDescription:
        "ダウンロードフォルダーの整理方法を解説します。日付とサイズで並べ替え、古いファイルを種類ごとに一括削除し、重複ファイルも見つけて、WindowsとMacのディスク容量を取り戻す手順をまとめました。",
      subtitle: "パソコンで最も散らかりやすいフォルダーを、分類してから削除する手順",
      intro: [
        "ダウンロードフォルダーを整理するには、エクスプローラーまたはFinderでフォルダーを開き、ファイルを日付とサイズで並べ替え、不要になったインストーラーや古いファイルを削除し、最後にごみ箱を空にして容量を実際に取り戻します。「ダウンロード」フォルダーの中身は、そのほとんどが別の場所にも存在するファイルのコピーです。そのため、パソコンの中でもとりわけ安全に整理できるフォルダーだといえます。",
        "多くのパソコンでは、ダウンロードフォルダーがいつの間にかディスク上で最大の物置になっています。何年分ものインストーラー、ZIPアーカイブ、PDF、メールの添付ファイルが積み重なり、数ギガバイトを占めていることも珍しくありません。この記事では、混在した何百ものファイルを1つずつ見ていくよりもはるかに速い、まず分類してから削除するという手順を、WindowsとMacの両方について紹介します。",
      ],
      sections: [
        {
          title: "ダウンロードフォルダーが物置になってしまう理由",
          content: [
            "ブラウザーは初期設定で、あらゆるファイルを「ダウンロード」フォルダーに保存します。プログラムのインストーラー、PDFの請求書、ZIPアーカイブ、メールの添付ファイル、写真、動画。どれも自動的に消えることはなく、そもそもこのフォルダーをほとんど開かない方が大半です。その結果、数か月で数百件にふくらみます。ディスクの空き容量が足りなくなったときに真っ先に確認すべき場所がダウンロードフォルダーなのは、ここが常にドライブ上で最も大きいフォルダーの1つだからです。",
            "では、ダウンロードフォルダーの中身は削除しても安全なのでしょうか。基本的には問題ありません。インストーラーは必要になれば再びダウンロードできますし、添付ファイルはメールボックスに残っていて、プロジェクト用フォルダーへ移したファイルはすでにコピーです。ただし、フォルダーそのものは削除しないでください。OSもブラウザーも、このフォルダーが存在する前提で動いています。注意が必要なのは、ここにしか置いていない作業中のファイルだけです。削除を始める前に、適切なフォルダーへ移しておきましょう。",
            "中身がこれだけ雑多である以上、1件ずつ確認していくのは得策ではありません。まず種類と古さでまとめてから、一括で削除するほうがはるかに効率的です。この記事の以降の内容も、まさにその流れに沿っています。並べ替え、分類、重複の洗い出し、削除、そして二度と溜め込まないための仕組みづくりです。",
          ],
        },
        {
          title: "日付とサイズで並べ替えて手動で削除する",
          content: [
            "Windowsでは、Win+Eでエクスプローラーを開き、サイドバーの「ダウンロード」をクリックします。「表示」メニューから詳細表示に切り替え、「更新日時」の列見出しをクリックして古い順に並べ替えてください。何か月も開いていないファイルは、たいてい削除してしまって問題ありません。「サイズ」列をクリックすれば大きいファイルが上に来ますし、検索ボックスに size:>100MB と入力すれば容量の大きいファイルだけを表示でき、効果の大きい削除から手を付けられます。",
            "Macでは、Finderを開いてOption+Cmd+Lを押すと「ダウンロード」へ直接移動できます。Cmd+2でリスト表示に切り替え、「追加日」の列で並べ替えます。「サイズ」列が表示されていない場合は、Cmd+Jで表示オプションを開いて有効にしてください。不要なファイルを選択し、Cmd+Deleteでごみ箱へ移動します。",
            "作業を速く進めるコツもあります。.exe、.msi、.dmg、.pkg といったインストーラーは、プログラムをインストールした時点で役目を終えています。すでに展開済みのZIPアーカイブも同様です。とはいえ、混在した何百ものファイルを手作業で仕分けるのは骨が折れます。次のステップでは、カテゴリーを使ってこの作業を自動化する方法を紹介します。",
          ],
        },
        {
          title: "古いダウンロードをカテゴリー別に自動で整理する",
          content: [
            "Windowsには、ダウンロードフォルダーの古いファイルを自動削除する機能が標準で備わっています。「設定」>「システム」>「ストレージ」を開いてストレージ センサー（Storage Sense）を有効にし、指定した日数のあいだ開かれていない「ダウンロード」フォルダー内のファイルを削除するよう設定します。手始めとしては有用ですが、大ざっぱな仕組みでもあります。見ているのはファイルの古さだけで、種類は考慮されず、何が消えるのかを事前に確認することもできません。macOSに至っては、ダウンロードフォルダー向けの同等の自動整理機能そのものがありません。",
            "Disk Mopのダウンロードクリーナー（Downloads Cleaner）は、まさにこの隙間を埋めます。「ダウンロード」フォルダー内のファイルを、インストーラー、アーカイブ、書類、画像、動画といったカテゴリーに分類し、古いファイルをカテゴリーごとに整理できます。書類にはいっさい触れずに、古いインストーラーだけを一度にまとめて削除するといった使い方も可能です。このようなダウンロード専用のツールは、競合するクリーンアップアプリにはほとんど見当たりません。",
            "カテゴリー単位の整理は、古さだけを見て一律に削除するよりずっと安全です。どの種類のファイルを削除しているのかが常に見えるため、まだ必要な書類をうっかり失うリスクを大きく減らせます。",
          ],
        },
        {
          title: "削除する前に重複したダウンロードを見つける",
          content: [
            "同じファイルを2回ダウンロードすると、ブラウザーは最初のファイルを上書きせず、report (1).pdf のように番号付きの重複ファイルを作ります。メールから繰り返し保存した写真、バージョンが上がるたびに取得したインストーラー。こうして重複ファイルは、「ダウンロード」フォルダーの中にも、ほかのフォルダーにも静かに積み上がっていきます。",
            "手作業なら、名前順に並べ替えて (1) や (2) という末尾を探すことになりますが、その方法では名前を変えたコピーを取りこぼします。Disk Mopの重複ファイル検出（Duplicate Detector）は、ファイル名ではなくSHA-256ハッシュで中身を比較します。そのため、ファイル名がどうであれ、バイト単位で同一の写真・動画・書類を確実に見つけ出せます。",
            "大量削除の前に重複スキャンをかけておくのが賢い順序です。どのファイルが別の場所にも存在するのかが分かっていれば、「ダウンロード」フォルダー側のコピーを安心して削除でき、すべてのファイルについて整理された1つのコピーだけを残せます。",
          ],
        },
        {
          title: "ごみ箱を空にして容量を実際に取り戻す",
          content: [
            "削除したファイルは、すぐにディスクから消えるわけではありません。WindowsでもmacOSでも、いったんごみ箱へ移動するだけで、空にするまで容量は解放されません。数ギガバイト分のダウンロードを削除したのに空き容量がまったく増えない、というのは整理作業で最もよくある戸惑いです。",
            "Windowsでは、デスクトップのごみ箱アイコンを右クリックして「ごみ箱を空にする」を選びます。Macでは、Finderメニューから「ごみ箱を空にする」を選ぶか、Shift+Cmd+Deleteを押してください。Finderの設定の「詳細」タブでは、30日を過ぎた項目をごみ箱から自動的に削除するオプションも有効にできます。",
            "空にする前に中身をざっと確認する習慣をつけておきましょう。誤って削除したファイルを取り戻せる最後の機会です。問題がなければごみ箱を空にし、取り戻した容量が空き容量の表示に反映されるのを確かめてください。",
          ],
        },
        {
          title: "二度と溜め込まないように定期整理を設定する",
          content: [
            "一度きりの整理は、たいてい数週間しか持ちません。ダウンロードを続けるかぎり、フォルダーはまた埋まっていきます。「ダウンロード」フォルダーを整理された状態に保つには、2つの小さな習慣が効きます。残しておきたいファイルは届いたらすぐ本来の保存先へ移すこと、そしてインストールが終わったらインストーラーをその場で削除することです。Windowsではストレージ センサーを定期実行させることもできますが、Macでは手作業での定期的な整理が欠かせません。",
            "Disk Mopのスケジュール クリーンアップ（Scheduled Cleanup）を使えば、この作業をまるごと自動化できます。毎週または毎月のタスクを設定しておくだけで、古いダウンロード、システムとブラウザーのキャッシュ、ごみ箱が定期的に整理されます。スケジュールの合間にさっと片付けたいときは、スピードアップ（Speed Up）機能が古いダウンロード、キャッシュ、ごみ箱をワンクリックで整理します。",
            "定期整理を設定すると、「ダウンロード」フォルダーは保管庫ではなくなり、本来あるべき姿に戻ります。ファイルが届き、処理され、次の場所へ移っていく一時的な受信箱です。",
          ],
        },
      ],
      verdict: [
        "ダウンロードフォルダーを整理する最も効果的な方法は、決まった流れを繰り返すことです。日付とサイズで並べ替え、ファイルをカテゴリーにまとめて古いものを一括削除し、重複したコピーを見つけ出し、最後にごみ箱を空にして容量を実際に取り戻します。仕上げに定期整理を設定しておけば、同じ山が再びできあがることはありません。",
        "Disk Mopは、この流れのすべてのステップを1つのアプリでカバーします。競合製品にはほとんど見られない専用ツールであるダウンロードクリーナーがファイルを自動で分類し、SHA-256ベースの重複ファイル検出が余分なコピーを洗い出し、スケジュール クリーンアップがフォルダーをきれいなまま保ちます。アプリは無料でダウンロードでき、買い切り19.90ドルの永続ライセンスですべての機能を利用できます。",
      ],
      ctaText: "Disk Mopでダウンロードフォルダーを整理する",
    },
  },
};
