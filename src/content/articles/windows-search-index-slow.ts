import type { Article } from '../types';

export const windowsSearchIndexSlow: Article = {
  slug: 'windows-search-index-slow',
  type: 'guide',
  category: 'Performance',
  date: '2026-09-04',
  updated: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'SearchIndexer.exe Diski ve İşlemciyi Yiyor: Windows.edb Rehberi',
      metaDescription:
        'Microsoft Windows Search Indexer sürekli çalışıyorsa ve Windows.edb dosyası gigabaytlarca yer kapladıysa sebebi genelde "Gelişmiş" indeksleme modudur. Kapsamı daraltma ve yeniden oluşturma adımları.',
      subtitle: 'Arka Planda Çalışan En Sinsi Yavaşlatıcı',
      intro: [
        'Kısa cevap: `SearchIndexer.exe`, Windows\'un dosya adlarını ve içeriklerini önceden tarayıp `Windows.edb` adlı bir veritabanına yazan hizmetidir. Sürekli yüksek işlemci veya disk kullanıyorsa genellikle iki sebepten biridir: Windows 11\'deki "Gelişmiş" indeksleme modu açıktır ve tüm diski tarıyordur, ya da indeks bozulmuş ve baştan kuruluyordur. `Windows.edb` dosyası `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` altındadır ve büyük posta kutuları veya yüz binlerce dosya indekslendiğinde 5-10 GB\'ı geçebilir. Doğru çözüm hizmeti körü körüne kapatmak değil, İndeksleme Seçenekleri\'nden kapsamı daraltmaktır; bu hem işlemci yükünü düşürür hem de veritabanını küçültür. Kapsamı daralttıktan sonra dosya kendiliğinden küçülmez, indeksin yeniden oluşturulması gerekir.',
        'Bu, "bilgisayarım boştayken bile fan dönüyor" ve "C sürücümde 8 GB\'lık bir dosya var ama ne olduğunu bilmiyorum" şikâyetlerinin aynı anda cevabı olan nadir konulardan biridir.',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` Windows Search hizmetidir; dosya adlarını ve içerikleri `Windows.edb` veritabanına yazar.',
        'Windows 11\'de Ayarlar > Gizlilik ve güvenlik > Windows\'ta arama altındaki "Gelişmiş" mod TÜM diski indeksler ve yüksek yükün en yaygın sebebidir.',
        '`Windows.edb` dosyası `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` altındadır ve 5-10 GB\'ı geçebilir.',
        'Kapsamı daraltmak dosyayı hemen küçültmez; küçülme ancak indeks yeniden oluşturulduğunda gerçekleşir.',
        '"Yalnızca özellikleri indeksle" seçeneği dosya adlarını aramaya devam eder ama içerik taramasını bırakır — en iyi denge genelde budur.',
        'Hizmeti tamamen kapatmak en büyük kazancı verir ama Başlat menüsünde dosya araması ve Outlook\'un anında araması bozulur.',
      ],
      dataTable: {
        caption: 'Windows Search seçenekleri: kazanç ve bedel',
        columns: ['Ayar', 'Sistem yükü', 'Arama üzerindeki etkisi', 'Kime uygun'],
        rows: [
          ['Gelişmiş mod (tüm PC)', 'Yüksek — indeks 5-10 GB olabilir', 'En kapsamlı, her yerde içerik araması', 'Güçlü makine, çok arama yapan'],
          ['Klasik mod (kitaplıklar + masaüstü)', 'Düşük', 'Belgeler bulunur, tüm disk taranmaz', 'Varsayılan, çoğu kullanıcı'],
          ['Yalnızca özellikleri indeksle', 'Orta düşüş, veritabanı küçülür', 'Dosya adı bulunur, içerik aranmaz', 'Diski dolu olanlar'],
          ['İndeksi yeniden oluştur', 'Geçici olarak çok yüksek', 'Bozuk indeksi onarır', 'Arama sonuç vermiyorsa'],
          ['Hizmeti tamamen devre dışı bırak', 'En büyük kazanç', 'Başlat menüsü dosya araması bozulur', 'Ayrı bir arama aracı kullananlar'],
        ],
      },
      howTo: {
        name: 'Windows Search indeksini kontrol altına alma',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Veritabanının boyutunu ölçün',
            text: 'Yönetici PowerShell\'de `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length` komutunu çalıştırın. Değer bayt cinsindendir; 1GB\'a bölerek gigabayt karşılığını görün.',
          },
          {
            name: 'Gelişmiş modu kapatın',
            text: 'Ayarlar > Gizlilik ve güvenlik > Windows\'ta arama yolunu açın. "Dosyalarımı bul" bölümünde Gelişmiş seçiliyse Klasik\'e çevirin. Bu tek değişiklik çoğu makinede yükü belirgin biçimde düşürür.',
          },
          {
            name: 'İndeks kapsamını daraltın',
            text: 'Windows + R ile `control srchadmin.dll` çalıştırın. Değiştir düğmesine tıklayıp indekslenen konumları gözden geçirin. Yedek klasörleri, proje dizinleri ve sanal makine klasörleri gibi büyük ama arama gerektirmeyen yerlerin işaretini kaldırın.',
          },
          {
            name: 'İçerik indekslemeyi kısın',
            text: 'Aynı pencerede Gelişmiş > Dosya Türleri sekmesine geçin. Büyük metin içeren dosya türlerinde "Yalnızca dizin özellikleri" seçeneğini işaretleyin. Dosya adları aranmaya devam eder ama içerik taranmaz.',
          },
          {
            name: 'İndeksi yeniden oluşturun',
            text: 'Gelişmiş > Sorun giderme bölümündeki Yeniden Oluştur düğmesine tıklayın. İşlem birkaç saat sürebilir ve bu sırada yük yüksek olur, ama bittiğinde `Windows.edb` yeni kapsamına göre küçülür.',
          },
        ],
      },
      sections: [
        {
          title: 'Windows Search İndeksi Nedir ve Neden Büyür?',
          content: [
            'Başlat menüsüne bir kelime yazdığınızda Windows diski o anda taramaz; önceden hazırlanmış bir veritabanına bakar. O veritabanı `Windows.edb` dosyasıdır ve `SearchIndexer.exe` hizmeti tarafından arka planda sürekli güncellenir. Yaklaşımın avantajı aramanın anında sonuç vermesidir; bedeli ise bu hazırlığın işlemci, disk ve depolama alanı tüketmesidir.',
            'Veritabanının boyutu iki şeye bağlıdır: kaç dosyanın indekslendiği ve içeriklerinin de taranıp taranmadığı. Yalnızca dosya adları indeksleniyorsa dosya birkaç yüz megabayt kalır. İçerik indekslemesi açıkken ve indeks kapsamı geniş olduğunda ise her belgenin, e-postanın ve PDF\'in metni veritabanına girer; 5-10 GB\'lık `Windows.edb` dosyaları buradan çıkar.',
            'Windows 11\'de durum bir sebeple daha kötüleşti: Ayarlar altındaki "Gelişmiş" indeksleme modu, klasik modun aksine yalnızca Belgeler ve Masaüstü\'nü değil tüm diski indeksler. Bu seçenek açıkken projeler, sanal makine diskleri, oyun klasörleri ve yedekler de taranır — hem yük hem veritabanı katlanır.',
          ],
        },
        {
          title: 'SearchIndexer Sürekli Çalışıyorsa Ne Olmuş Demektir?',
          content: [
            'Görev Yöneticisi\'nde `Microsoft Windows Search Indexer` uzun süre yüksek disk veya işlemci kullanıyorsa üç olasılık vardır. Birincisi normal bir durumdur: yeni bir kurulumdan sonra veya çok sayıda dosya kopyalandığında indeks ilk kez oluşturuluyordur. Bu birkaç saat sürer, sonra kendiliğinden durur.',
            'İkincisi kapsam sorunudur. İndeks, gerçekte aramayacağınız devasa klasörleri kapsıyordur: bir sanal makine klasörü, birkaç yüz gigabaytlık bir proje dizini veya bir yedek diski. İndeksleyici bunları sürekli izler ve her değişiklikte yeniden tarar. Bu, boştaki bir makinede bile fanın dönmesinin yaygın sebeplerinden biridir.',
            'Üçüncüsü bozulmadır. `Windows.edb` bozulduğunda indeksleyici sürekli yeniden oluşturmayı dener, hiç bitiremez ve sonsuz döngüye girer. Belirtisi şudur: arama sonuç vermez ya da eksik sonuç verir, buna rağmen indeksleyici hep meşguldür. Bu durumda çözüm kapsamı daraltmak değil, indeksi elle yeniden oluşturmaktır.',
          ],
        },
        {
          title: 'Kapsamı Daraltmak mı, Kapatmak mı?',
          content: [
            'İlk hamle her zaman kapsamı daraltmak olmalıdır, çünkü aramanın faydasını kaybetmeden yükün büyük kısmından kurtulursunuz. Windows + R ile `control srchadmin.dll` çalıştırıp Değiştir düğmesine tıklayın. Listede indekslenen tüm konumları görürsünüz; buradan yedek klasörlerini, sanal makine dizinlerini ve büyük medya arşivlerini çıkarın.',
            'İkinci ve çoğu kullanıcı için en verimli ayar, aynı pencerede Gelişmiş > Dosya Türleri sekmesindedir. Burada her uzantı için "Yalnızca dizin özellikleri" veya "Dizin özellikleri ve dosya içerikleri" seçilebilir. İçerik indekslemesini kapattığınızda dosya adlarına göre arama çalışmaya devam eder, ama veritabanı dramatik biçimde küçülür ve indeksleyici çok daha az çalışır.',
            'Hizmeti tamamen kapatmak (`services.msc` > Windows Search > Devre Dışı) en büyük kazancı verir ama bedeli yüksektir: Başlat menüsünde dosya araması çalışmaz hâle gelir, Outlook\'un anında araması bozulur ve Gezgin\'deki aramalar her seferinde diski baştan tarar, yani yavaşlar. Bunu yalnızca yerini alacak ayrı bir arama aracınız varsa yapın.',
          ],
        },
        {
          title: 'İndeksi Yeniden Oluşturmak Ne Zaman Doğru?',
          content: [
            'Yeniden oluşturma iki durumda doğru hamledir. Birincisi arama bozulduğunda: sonuç gelmiyorsa, eksik geliyorsa veya sildiğiniz dosyalar hâlâ sonuçlarda çıkıyorsa indeks tutarsızdır. İkincisi kapsamı daralttıktan sonra: `Windows.edb` dosyası kendiliğinden küçülmez, eski verinin atılması için yeniden oluşturma gerekir.',
            'İşlem İndeksleme Seçenekleri > Gelişmiş > Sorun giderme altındaki Yeniden Oluştur düğmesiyle başlatılır. Süre dosya sayısına göre yarım saatten birkaç saate kadar değişir ve bu sırada işlemci ile disk yoğun kullanılır. Dizüstü bilgisayarlarda fişe takılıyken başlatmak mantıklıdır.',
            'Yeniden oluşturma sırasında arama sonuçları eksik gelir; bu normaldir, işlem bitince düzelir. Bitip bitmediğini İndeksleme Seçenekleri penceresinin üstündeki "İndeksleme tamamlandı" yazısından anlarsınız.',
          ],
        },
      ],
      faq: [
        {
          question: 'Windows.edb dosyasını silebilir miyim?',
          answer:
            'Hizmet durdurulduğunda teknik olarak silinebilir ve Windows onu yeniden oluşturur, ama bu yeniden oluşturma düğmesini kullanmakla aynı sonucu daha riskli bir yoldan elde etmektir. Doğrusu İndeksleme Seçenekleri > Gelişmiş > Yeniden Oluştur düğmesini kullanmaktır.',
        },
        {
          question: 'Windows Search\'ü kapatırsam ne kaybederim?',
          answer:
            'Başlat menüsünde yazarak dosya bulma özelliği çalışmaz hâle gelir, Outlook\'un anlık araması bozulur ve Gezgin aramaları her seferinde diski baştan taradığı için belirgin biçimde yavaşlar. Ayarlar ve uygulama araması etkilenmez.',
        },
        {
          question: 'SSD kullanıyorum, indeksleme yine de zarar verir mi?',
          answer:
            'Performans açısından SSD\'de fark çok daha azdır. Ancak indeksleyici sürekli yazma yapar ve `Windows.edb` gigabaytlarca yer kaplar; diski dolmaya yakın bir SSD\'de bu iki etki birleşince yavaşlama hissedilir hâle gelir.',
        },
        {
          question: 'İndeksleme neden bitmiyor gibi görünüyor?',
          answer:
            'Windows indekslemeyi makine boştayken yapar; siz kullanırken duraklatır. Ayrıca dizüstü bilgisayarlarda pil modunda yavaşlar. Günlerce sürüyor gibi görünmesi çoğu zaman bu yüzdendir, arıza değildir — ama haftalarca sürüyorsa indeks bozuk olabilir.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` boşta duran bir bilgisayarı meşgul eden ve aynı anda diskte gigabaytlarca yer kaplayan nadir kalemlerden biridir. Doğru sıra şudur: önce Windows 11\'deki Gelişmiş modu kapatın, sonra indeks kapsamından büyük ve aranmayan klasörleri çıkarın, gerekiyorsa içerik indekslemesini kısın ve en son indeksi yeniden oluşturun.',
        'Aynı makinede yer kaplayan diğer gizli kalemleri de görmek için Disk Mop\'un Disk Analizi modülü `ProgramData` gibi gizli klasörler dâhil sürücüyü boyut sırasına dizer; Başlangıç Yöneticisi ve Servis Yöneticisi modülleri de arka planda çalışan başka nelerin makineyi yorduğunu tek ekranda gösterir.',
      ],
      ctaText: 'Arka planda ne çalışıyor, diskte ne birikiyor görün',
    },
    en: {
      title: 'SearchIndexer.exe Is Eating Disk and CPU: The Windows.edb Guide',
      metaDescription:
        'If Microsoft Windows Search Indexer runs constantly and Windows.edb has grown to gigabytes, the usual cause is "Enhanced" indexing mode. How to narrow the scope and rebuild.',
      subtitle: 'The Sneakiest Background Slowdown',
      intro: [
        'Short answer: `SearchIndexer.exe` is the Windows service that scans file names and contents ahead of time and writes them into a database called `Windows.edb`. If it constantly uses high CPU or disk, it is usually one of two things: the "Enhanced" indexing mode in Windows 11 is on and indexing your entire drive, or the index is corrupted and rebuilding endlessly. `Windows.edb` lives under `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` and can pass 5-10 GB when large mailboxes or hundreds of thousands of files are indexed. The right fix is not to disable the service blindly but to narrow the scope in Indexing Options; that lowers CPU load and shrinks the database. Note that the file does not shrink on its own after narrowing the scope — the index has to be rebuilt.',
        'This is one of the rare topics that answers both "my fan spins even when the computer is idle" and "there is an 8 GB file on my C drive and I have no idea what it is" at the same time.',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` is the Windows Search service; it writes file names and contents into the `Windows.edb` database.',
        'In Windows 11, the "Enhanced" mode under Settings > Privacy & security > Searching Windows indexes the ENTIRE drive and is the most common cause of high load.',
        '`Windows.edb` sits under `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` and can exceed 5-10 GB.',
        'Narrowing the scope does not shrink the file immediately; it only shrinks once the index is rebuilt.',
        'The "Index Properties Only" option keeps file-name search working while dropping content scanning — usually the best balance.',
        'Disabling the service entirely gives the biggest win but breaks file search in the Start menu and Outlook\'s instant search.',
      ],
      dataTable: {
        caption: 'Windows Search options: gain and cost',
        columns: ['Setting', 'System load', 'Effect on search', 'Suited to'],
        rows: [
          ['Enhanced mode (entire PC)', 'High — index can reach 5-10 GB', 'Most complete, content search everywhere', 'Powerful machines, heavy searchers'],
          ['Classic mode (libraries + desktop)', 'Low', 'Documents found, whole disk not scanned', 'The default, most users'],
          ['Index properties only', 'Moderate drop, database shrinks', 'File names found, contents not searched', 'People with a full disk'],
          ['Rebuild the index', 'Very high temporarily', 'Repairs a corrupted index', 'When search returns nothing'],
          ['Disable the service entirely', 'Biggest win', 'Start menu file search stops working', 'People using a separate search tool'],
        ],
      },
      howTo: {
        name: 'Bring the Windows Search index under control',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Measure the database size',
            text: 'In an elevated PowerShell run `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length`. The value is in bytes; divide by 1GB for gigabytes.',
          },
          {
            name: 'Turn off Enhanced mode',
            text: 'Open Settings > Privacy & security > Searching Windows. If "Find my files" is set to Enhanced, switch it to Classic. This single change noticeably lowers load on most machines.',
          },
          {
            name: 'Narrow the index scope',
            text: 'Press Windows + R and run `control srchadmin.dll`. Click Modify and review the indexed locations. Uncheck large places that never need searching, such as backup folders, project directories and virtual machine folders.',
          },
          {
            name: 'Reduce content indexing',
            text: 'In the same window go to Advanced > File Types. For file types with heavy text, select "Index Properties Only". File names remain searchable while contents are no longer scanned.',
          },
          {
            name: 'Rebuild the index',
            text: 'Click Rebuild under Advanced > Troubleshooting. It can take a few hours and load is high while it runs, but afterwards `Windows.edb` shrinks to match the new scope.',
          },
        ],
      },
      sections: [
        {
          title: 'What Is the Windows Search Index and Why Does It Grow?',
          content: [
            'When you type a word in the Start menu, Windows does not scan the disk at that moment; it looks at a database prepared in advance. That database is the `Windows.edb` file, kept continuously up to date in the background by the `SearchIndexer.exe` service. The upside is that search returns instantly; the cost is that the preparation consumes CPU, disk and storage.',
            'The size of the database depends on two things: how many files are indexed, and whether their contents are scanned as well. If only file names are indexed, the file stays at a few hundred megabytes. With content indexing on and a broad scope, the text of every document, email and PDF goes into the database — that is where 5-10 GB `Windows.edb` files come from.',
            'In Windows 11 one more factor made this worse: the "Enhanced" indexing mode in Settings indexes the entire drive rather than just Documents and Desktop as classic mode does. With that option on, projects, virtual machine disks, game folders and backups are all scanned — both the load and the database multiply.',
          ],
        },
        {
          title: 'What Does It Mean When SearchIndexer Runs Constantly?',
          content: [
            'If `Microsoft Windows Search Indexer` shows sustained high disk or CPU in Task Manager, there are three possibilities. The first is normal: after a fresh install, or after copying a lot of files, the index is being built for the first time. That takes a few hours and then stops on its own.',
            'The second is a scope problem. The index covers enormous folders you will never actually search: a virtual machine directory, a few hundred gigabytes of project files, or a backup drive. The indexer watches those continuously and rescans on every change. This is one of the common reasons a fan keeps spinning on an idle machine.',
            'The third is corruption. When `Windows.edb` is damaged, the indexer keeps trying to rebuild, never finishes and loops forever. The symptom is telling: search returns nothing or incomplete results while the indexer is permanently busy. In that case the fix is not narrowing the scope but rebuilding the index by hand.',
          ],
        },
        {
          title: 'Narrow the Scope, or Turn It Off?',
          content: [
            'The first move should always be narrowing the scope, because it removes most of the load without losing the benefit of search. Press Windows + R, run `control srchadmin.dll` and click Modify. You see every indexed location; remove backup folders, virtual machine directories and large media archives from the list.',
            'The second setting, and the most effective one for most people, is in the same window under Advanced > File Types. For each extension you can pick "Index Properties Only" or "Index Properties and File Contents". Turning content indexing off keeps name-based search working while the database shrinks dramatically and the indexer works far less.',
            'Disabling the service outright (`services.msc` > Windows Search > Disabled) gives the biggest win but the cost is real: file search in the Start menu stops working, Outlook\'s instant search breaks, and searches in Explorer scan the disk from scratch every time, which is slow. Only do this if you have a separate search tool taking its place.',
          ],
        },
        {
          title: 'When Is Rebuilding the Index the Right Move?',
          content: [
            'Rebuilding is the right move in two situations. First, when search itself is broken: no results, incomplete results, or deleted files still showing up. That means the index is inconsistent. Second, after narrowing the scope: `Windows.edb` does not shrink on its own, and a rebuild is what discards the old data.',
            'Start it with the Rebuild button under Indexing Options > Advanced > Troubleshooting. Depending on file count it takes anywhere from half an hour to several hours, and CPU and disk are heavily used throughout. On a laptop it makes sense to start it while plugged in.',
            'Search results will be incomplete during the rebuild; that is normal and resolves when it finishes. You can tell it is done from the "Indexing complete" line at the top of the Indexing Options window.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can I just delete Windows.edb?',
          answer:
            'Technically yes once the service is stopped, and Windows will recreate it — but that is the same outcome as the Rebuild button by a riskier route. Use Indexing Options > Advanced > Rebuild instead.',
        },
        {
          question: 'What do I lose if I turn Windows Search off?',
          answer:
            'Finding files by typing in the Start menu stops working, Outlook\'s instant search breaks, and Explorer searches become noticeably slower because they scan the disk from scratch each time. Settings and app search are unaffected.',
        },
        {
          question: 'I use an SSD — does indexing still hurt?',
          answer:
            'In performance terms the difference is much smaller on an SSD. But the indexer writes constantly and `Windows.edb` occupies gigabytes; on an SSD that is close to full, those two effects combine into a slowdown you can feel.',
        },
        {
          question: 'Why does indexing seem never to finish?',
          answer:
            'Windows indexes while the machine is idle and pauses while you use it, and it slows down on battery power on laptops. That is usually why it appears to take days, and it is not a fault — but taking weeks does suggest a corrupted index.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` is one of the rare items that keeps an idle computer busy and occupies gigabytes of disk at the same time. The correct order is: turn off Enhanced mode in Windows 11, remove large never-searched folders from the index scope, reduce content indexing if needed, and rebuild the index last.',
        'To see the other hidden items using space on the same machine, Disk Mop\'s Disk Analysis module sorts the drive by size including hidden folders like `ProgramData`, while the Startup Manager and Service Manager modules show on one screen what else is running in the background and taxing the machine.',
      ],
      ctaText: 'See what runs in the background and what piles up on disk',
    },
    de: {
      title: 'SearchIndexer.exe belastet Platte und CPU: der Windows.edb-Leitfaden',
      metaDescription:
        'Läuft der Microsoft Windows Search Indexer ständig und ist Windows.edb auf Gigabyte angewachsen, liegt es meist am Modus "Erweitert". So schränken Sie den Umfang ein und erstellen den Index neu.',
      subtitle: 'Der heimtückischste Bremser im Hintergrund',
      intro: [
        'Kurze Antwort: `SearchIndexer.exe` ist der Windows-Dienst, der Dateinamen und Inhalte vorab durchsucht und in eine Datenbank namens `Windows.edb` schreibt. Belegt er dauerhaft viel CPU oder Platte, liegt das meist an einer von zwei Ursachen: Der Modus "Erweitert" in Windows 11 ist aktiv und indiziert das gesamte Laufwerk, oder der Index ist beschädigt und wird endlos neu aufgebaut. `Windows.edb` liegt unter `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` und kann 5-10 GB überschreiten, wenn große Postfächer oder Hunderttausende Dateien indiziert werden. Die richtige Lösung ist nicht, den Dienst blind abzuschalten, sondern den Umfang in den Indizierungsoptionen einzuschränken; das senkt die CPU-Last und verkleinert die Datenbank. Beachten Sie: Die Datei schrumpft nach dem Einschränken nicht von selbst — der Index muss neu erstellt werden.',
        'Das ist eines der seltenen Themen, das gleichzeitig "der Lüfter dreht sogar im Leerlauf" und "auf Laufwerk C liegt eine 8-GB-Datei und ich weiß nicht, was das ist" beantwortet.',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` ist der Dienst Windows Search; er schreibt Dateinamen und Inhalte in die Datenbank `Windows.edb`.',
        'In Windows 11 indiziert der Modus "Erweitert" unter Einstellungen > Datenschutz und Sicherheit > Windows durchsuchen das GESAMTE Laufwerk und ist die häufigste Ursache hoher Last.',
        '`Windows.edb` liegt unter `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` und kann 5-10 GB überschreiten.',
        'Den Umfang einzuschränken verkleinert die Datei nicht sofort; sie schrumpft erst beim Neuaufbau des Index.',
        'Die Option "Nur Eigenschaften indizieren" erhält die Suche nach Dateinamen und verzichtet auf die Inhaltssuche — meist die beste Balance.',
        'Den Dienst ganz zu deaktivieren bringt den größten Gewinn, zerstört aber die Dateisuche im Startmenü und die Sofortsuche von Outlook.',
      ],
      dataTable: {
        caption: 'Windows-Search-Optionen: Nutzen und Preis',
        columns: ['Einstellung', 'Systemlast', 'Auswirkung auf die Suche', 'Geeignet für'],
        rows: [
          ['Modus Erweitert (ganzer PC)', 'Hoch — Index bis 5-10 GB', 'Am umfassendsten, Inhaltssuche überall', 'Leistungsstarke Rechner, Vielsucher'],
          ['Modus Klassisch (Bibliotheken + Desktop)', 'Niedrig', 'Dokumente werden gefunden, nicht die ganze Platte', 'Standard, die meisten Nutzer'],
          ['Nur Eigenschaften indizieren', 'Deutlich weniger, Datenbank schrumpft', 'Dateinamen ja, Inhalte nein', 'Wer eine volle Platte hat'],
          ['Index neu erstellen', 'Vorübergehend sehr hoch', 'Repariert einen beschädigten Index', 'Wenn die Suche nichts liefert'],
          ['Dienst vollständig deaktivieren', 'Größter Gewinn', 'Dateisuche im Startmenü fällt aus', 'Wer ein separates Suchwerkzeug nutzt'],
        ],
      },
      howTo: {
        name: 'Den Windows-Search-Index unter Kontrolle bringen',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Die Größe der Datenbank messen',
            text: 'Führen Sie in einer PowerShell als Administrator `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length` aus. Der Wert ist in Byte; teilen Sie durch 1GB für Gigabyte.',
          },
          {
            name: 'Den Modus Erweitert abschalten',
            text: 'Öffnen Sie Einstellungen > Datenschutz und Sicherheit > Windows durchsuchen. Steht "Meine Dateien suchen" auf Erweitert, stellen Sie auf Klassisch um. Diese eine Änderung senkt auf den meisten Rechnern spürbar die Last.',
          },
          {
            name: 'Den Indexumfang einschränken',
            text: 'Drücken Sie Windows + R und führen Sie `control srchadmin.dll` aus. Klicken Sie auf Ändern und prüfen Sie die indizierten Orte. Entfernen Sie große Bereiche, in denen Sie nie suchen: Sicherungsordner, Projektverzeichnisse, Ordner virtueller Maschinen.',
          },
          {
            name: 'Die Inhaltsindizierung reduzieren',
            text: 'Wechseln Sie im selben Fenster zu Erweitert > Dateitypen. Wählen Sie für textlastige Dateitypen "Nur Eigenschaften indizieren". Dateinamen bleiben durchsuchbar, Inhalte werden nicht mehr gescannt.',
          },
          {
            name: 'Den Index neu erstellen',
            text: 'Klicken Sie unter Erweitert > Problembehandlung auf Neu erstellen. Das kann einige Stunden dauern und die Last ist dabei hoch, doch danach schrumpft `Windows.edb` auf den neuen Umfang.',
          },
        ],
      },
      sections: [
        {
          title: 'Was ist der Windows-Search-Index und warum wächst er?',
          content: [
            'Tippen Sie ein Wort ins Startmenü, durchsucht Windows nicht in diesem Moment die Platte, sondern eine vorab erstellte Datenbank. Diese Datenbank ist die Datei `Windows.edb`, die der Dienst `SearchIndexer.exe` im Hintergrund laufend aktualisiert. Der Vorteil: Die Suche liefert sofort Ergebnisse. Der Preis: Diese Vorarbeit kostet CPU, Platte und Speicherplatz.',
            'Die Größe der Datenbank hängt von zwei Dingen ab: wie viele Dateien indiziert werden und ob auch deren Inhalte durchsucht werden. Werden nur Dateinamen indiziert, bleibt die Datei bei einigen hundert Megabyte. Ist die Inhaltsindizierung aktiv und der Umfang groß, wandert der Text jedes Dokuments, jeder E-Mail und jedes PDFs in die Datenbank — daher stammen `Windows.edb`-Dateien von 5-10 GB.',
            'In Windows 11 kam ein weiterer Faktor hinzu: Der Modus "Erweitert" indiziert das gesamte Laufwerk statt nur Dokumente und Desktop wie der klassische Modus. Ist diese Option aktiv, werden auch Projekte, virtuelle Maschinen, Spieleordner und Sicherungen durchsucht — Last und Datenbank vervielfachen sich.',
          ],
        },
        {
          title: 'Was bedeutet es, wenn SearchIndexer dauernd läuft?',
          content: [
            'Zeigt der `Microsoft Windows Search Indexer` im Task-Manager anhaltend hohe Platten- oder CPU-Last, gibt es drei Möglichkeiten. Die erste ist normal: Nach einer Neuinstallation oder nach dem Kopieren vieler Dateien wird der Index erstmals aufgebaut. Das dauert einige Stunden und endet von selbst.',
            'Die zweite ist ein Umfangsproblem. Der Index erfasst riesige Ordner, in denen Sie nie suchen werden: ein Verzeichnis mit virtuellen Maschinen, ein paar hundert Gigabyte Projektdateien oder ein Sicherungslaufwerk. Der Indexer überwacht sie ständig und scannt bei jeder Änderung neu. Das ist einer der häufigen Gründe, warum der Lüfter auf einem im Leerlauf stehenden Rechner weiterdreht.',
            'Die dritte ist Beschädigung. Ist `Windows.edb` defekt, versucht der Indexer immer wieder den Neuaufbau, wird nie fertig und dreht sich endlos im Kreis. Das Symptom ist eindeutig: Die Suche liefert nichts oder unvollständige Ergebnisse, während der Indexer permanent beschäftigt ist. Dann hilft kein Einschränken, sondern nur der manuelle Neuaufbau.',
          ],
        },
        {
          title: 'Umfang einschränken oder abschalten?',
          content: [
            'Der erste Schritt sollte immer das Einschränken des Umfangs sein, denn so entfällt der Großteil der Last, ohne den Nutzen der Suche zu verlieren. Drücken Sie Windows + R, führen Sie `control srchadmin.dll` aus und klicken Sie auf Ändern. Sie sehen alle indizierten Orte; entfernen Sie Sicherungsordner, Verzeichnisse virtueller Maschinen und große Medienarchive aus der Liste.',
            'Die zweite und für die meisten wirksamste Einstellung findet sich im selben Fenster unter Erweitert > Dateitypen. Dort lässt sich je Endung "Nur Eigenschaften indizieren" oder "Eigenschaften und Dateiinhalte indizieren" wählen. Schalten Sie die Inhaltsindizierung ab, funktioniert die Suche nach Namen weiter, während die Datenbank drastisch schrumpft und der Indexer weit weniger arbeitet.',
            'Den Dienst ganz zu deaktivieren (`services.msc` > Windows Search > Deaktiviert) bringt den größten Gewinn, kostet aber real: Die Dateisuche im Startmenü fällt aus, Outlooks Sofortsuche bricht, und Suchen im Explorer durchforsten jedes Mal die ganze Platte, also langsam. Tun Sie das nur, wenn ein eigenes Suchwerkzeug den Platz einnimmt.',
          ],
        },
        {
          title: 'Wann ist der Neuaufbau des Index richtig?',
          content: [
            'Der Neuaufbau ist in zwei Fällen der richtige Schritt. Erstens, wenn die Suche selbst defekt ist: keine Treffer, unvollständige Treffer oder gelöschte Dateien, die weiterhin erscheinen. Dann ist der Index inkonsistent. Zweitens nach dem Einschränken des Umfangs: `Windows.edb` schrumpft nicht von selbst, erst der Neuaufbau verwirft die alten Daten.',
            'Gestartet wird er über die Schaltfläche Neu erstellen unter Indizierungsoptionen > Erweitert > Problembehandlung. Je nach Dateizahl dauert das eine halbe bis mehrere Stunden, wobei CPU und Platte stark beansprucht werden. Auf einem Notebook empfiehlt sich der Start im Netzbetrieb.',
            'Während des Neuaufbaus sind die Suchergebnisse unvollständig; das ist normal und legt sich mit dem Abschluss. Ob er fertig ist, erkennen Sie an der Zeile "Indizierung abgeschlossen" oben im Fenster der Indizierungsoptionen.',
          ],
        },
      ],
      faq: [
        {
          question: 'Kann ich Windows.edb einfach löschen?',
          answer:
            'Technisch ja, sobald der Dienst gestoppt ist, und Windows legt sie neu an — das ist aber dasselbe Ergebnis wie die Schaltfläche Neu erstellen, nur auf riskanterem Weg. Nutzen Sie stattdessen Indizierungsoptionen > Erweitert > Neu erstellen.',
        },
        {
          question: 'Was verliere ich, wenn ich Windows Search abschalte?',
          answer:
            'Das Finden von Dateien durch Tippen im Startmenü entfällt, Outlooks Sofortsuche bricht, und Suchen im Explorer werden spürbar langsamer, weil sie jedes Mal die Platte neu durchsuchen. Einstellungen und App-Suche bleiben unberührt.',
        },
        {
          question: 'Ich nutze eine SSD — schadet die Indizierung trotzdem?',
          answer:
            'Leistungsmäßig fällt der Unterschied auf einer SSD viel geringer aus. Der Indexer schreibt jedoch fortwährend, und `Windows.edb` belegt Gigabyte; auf einer nahezu vollen SSD summieren sich beide Effekte zu einer spürbaren Verlangsamung.',
        },
        {
          question: 'Warum scheint die Indizierung nie fertig zu werden?',
          answer:
            'Windows indiziert im Leerlauf und pausiert, während Sie arbeiten; auf Notebooks bremst der Akkubetrieb zusätzlich. Deshalb wirkt es oft, als dauere es Tage — das ist kein Fehler. Zieht es sich über Wochen, spricht das allerdings für einen beschädigten Index.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` gehört zu den seltenen Posten, die einen im Leerlauf stehenden Rechner beschäftigen und gleichzeitig Gigabyte auf der Platte belegen. Die richtige Reihenfolge: erst den Modus Erweitert in Windows 11 abschalten, dann große, nie durchsuchte Ordner aus dem Indexumfang nehmen, bei Bedarf die Inhaltsindizierung reduzieren und zuletzt den Index neu erstellen.',
        'Um die übrigen versteckten Platzfresser derselben Maschine zu sehen, sortiert das Modul Festplattenanalyse von Disk Mop das Laufwerk samt versteckter Ordner wie `ProgramData` nach Größe; die Module Autostart-Verwaltung und Dienste-Verwaltung zeigen auf einem Bildschirm, was sonst noch im Hintergrund läuft und den Rechner belastet.',
      ],
      ctaText: 'Sehen, was im Hintergrund läuft und was sich auf der Platte ansammelt',
    },
    fr: {
      title: 'SearchIndexer.exe sature le disque et le processeur : le guide Windows.edb',
      metaDescription:
        'Si Microsoft Windows Search Indexer tourne en permanence et que Windows.edb pèse plusieurs gigaoctets, la cause habituelle est le mode « Avancé ». Comment réduire la portée et reconstruire.',
      subtitle: 'Le ralentisseur d\'arrière-plan le plus sournois',
      intro: [
        'Réponse courte : `SearchIndexer.exe` est le service Windows qui analyse à l\'avance les noms et le contenu des fichiers et les écrit dans une base appelée `Windows.edb`. S\'il consomme en permanence beaucoup de processeur ou de disque, c\'est généralement pour l\'une de deux raisons : le mode d\'indexation « Avancé » de Windows 11 est activé et indexe tout le disque, ou l\'index est corrompu et se reconstruit sans fin. `Windows.edb` se trouve sous `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` et peut dépasser 5 à 10 Go lorsque de grandes boîtes mail ou des centaines de milliers de fichiers sont indexés. La bonne solution n\'est pas de désactiver le service aveuglément mais de réduire la portée dans les Options d\'indexation ; cela abaisse la charge processeur et réduit la base. À noter : le fichier ne rétrécit pas tout seul après la réduction de portée — il faut reconstruire l\'index.',
        'C\'est l\'un des rares sujets qui répond à la fois à « le ventilateur tourne même quand l\'ordinateur ne fait rien » et à « il y a un fichier de 8 Go sur mon disque C et j\'ignore ce que c\'est ».',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` est le service Windows Search ; il écrit noms et contenus de fichiers dans la base `Windows.edb`.',
        'Sous Windows 11, le mode « Avancé » dans Paramètres > Confidentialité et sécurité > Recherche Windows indexe TOUT le disque et constitue la cause la plus fréquente de charge élevée.',
        '`Windows.edb` se trouve sous `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` et peut dépasser 5 à 10 Go.',
        'Réduire la portée ne réduit pas le fichier immédiatement ; il ne diminue qu\'après reconstruction de l\'index.',
        'L\'option « Indexer les propriétés uniquement » conserve la recherche par nom tout en abandonnant l\'analyse du contenu — souvent le meilleur équilibre.',
        'Désactiver complètement le service donne le plus grand gain mais casse la recherche de fichiers du menu Démarrer et la recherche instantanée d\'Outlook.',
      ],
      dataTable: {
        caption: 'Options de Windows Search : gain et coût',
        columns: ['Réglage', 'Charge système', 'Effet sur la recherche', 'Adapté à'],
        rows: [
          ['Mode Avancé (tout le PC)', 'Élevée — index jusqu\'à 5-10 Go', 'Le plus complet, recherche de contenu partout', 'Machines puissantes, gros utilisateurs de recherche'],
          ['Mode Classique (bibliothèques + bureau)', 'Faible', 'Documents trouvés, disque entier non analysé', 'Par défaut, la plupart des utilisateurs'],
          ['Indexer les propriétés uniquement', 'Baisse notable, la base rétrécit', 'Noms trouvés, contenus non recherchés', 'Disque presque plein'],
          ['Reconstruire l\'index', 'Très élevée temporairement', 'Répare un index corrompu', 'Quand la recherche ne renvoie rien'],
          ['Désactiver complètement le service', 'Gain maximal', 'La recherche de fichiers du menu Démarrer cesse', 'Utilisateurs d\'un outil de recherche séparé'],
        ],
      },
      howTo: {
        name: 'Reprendre le contrôle de l\'index Windows Search',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Mesurer la taille de la base',
            text: 'Dans une PowerShell administrateur, exécutez `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length`. La valeur est en octets ; divisez par 1GB pour des gigaoctets.',
          },
          {
            name: 'Désactiver le mode Avancé',
            text: 'Ouvrez Paramètres > Confidentialité et sécurité > Recherche Windows. Si « Rechercher mes fichiers » est sur Avancé, basculez sur Classique. Ce seul changement abaisse nettement la charge sur la plupart des machines.',
          },
          {
            name: 'Réduire la portée de l\'index',
            text: 'Appuyez sur Windows + R et exécutez `control srchadmin.dll`. Cliquez Modifier et passez en revue les emplacements indexés. Décochez les grands dossiers où vous ne cherchez jamais : sauvegardes, répertoires de projets, dossiers de machines virtuelles.',
          },
          {
            name: 'Limiter l\'indexation du contenu',
            text: 'Dans la même fenêtre, allez dans Avancé > Types de fichiers. Pour les types riches en texte, sélectionnez « Indexer les propriétés uniquement ». Les noms restent cherchables, le contenu n\'est plus analysé.',
          },
          {
            name: 'Reconstruire l\'index',
            text: 'Cliquez sur Reconstruire sous Avancé > Résolution des problèmes. Cela peut prendre plusieurs heures avec une charge élevée, mais ensuite `Windows.edb` se réduit à la nouvelle portée.',
          },
        ],
      },
      sections: [
        {
          title: 'Qu\'est-ce que l\'index Windows Search et pourquoi grossit-il ?',
          content: [
            'Quand vous tapez un mot dans le menu Démarrer, Windows n\'analyse pas le disque à cet instant ; il consulte une base préparée à l\'avance. Cette base, c\'est le fichier `Windows.edb`, mis à jour en continu en arrière-plan par le service `SearchIndexer.exe`. L\'avantage est une recherche instantanée ; le coût, une préparation qui consomme processeur, disque et espace de stockage.',
            'La taille de la base dépend de deux choses : combien de fichiers sont indexés, et si leur contenu est analysé aussi. Si seuls les noms sont indexés, le fichier reste à quelques centaines de mégaoctets. Avec l\'indexation du contenu activée et une portée large, le texte de chaque document, courriel et PDF entre dans la base — d\'où les `Windows.edb` de 5 à 10 Go.',
            'Sous Windows 11, un facteur supplémentaire a aggravé la situation : le mode « Avancé » indexe tout le disque au lieu des seuls Documents et Bureau du mode classique. Avec cette option, projets, disques de machines virtuelles, dossiers de jeux et sauvegardes sont analysés — charge et base sont multipliées.',
          ],
        },
        {
          title: 'Que signifie un SearchIndexer qui tourne en permanence ?',
          content: [
            'Si `Microsoft Windows Search Indexer` affiche durablement une charge disque ou processeur élevée dans le Gestionnaire des tâches, trois possibilités. La première est normale : après une installation neuve, ou après avoir copié beaucoup de fichiers, l\'index se construit pour la première fois. Cela dure quelques heures puis s\'arrête tout seul.',
            'La deuxième est un problème de portée. L\'index couvre d\'énormes dossiers où vous ne chercherez jamais : un répertoire de machines virtuelles, quelques centaines de gigaoctets de fichiers de projet, ou un disque de sauvegarde. L\'indexeur les surveille en continu et les réanalyse à chaque changement. C\'est une des raisons courantes pour lesquelles un ventilateur tourne sur une machine inactive.',
            'La troisième est la corruption. Quand `Windows.edb` est endommagé, l\'indexeur tente sans cesse de reconstruire, n\'aboutit jamais et tourne en boucle. Le symptôme est parlant : la recherche ne renvoie rien ou des résultats incomplets alors que l\'indexeur est en permanence occupé. Dans ce cas, la solution n\'est pas de réduire la portée mais de reconstruire l\'index à la main.',
          ],
        },
        {
          title: 'Réduire la portée ou désactiver ?',
          content: [
            'Le premier geste doit toujours être de réduire la portée, car cela supprime l\'essentiel de la charge sans perdre l\'intérêt de la recherche. Appuyez sur Windows + R, exécutez `control srchadmin.dll` et cliquez Modifier. Vous voyez tous les emplacements indexés ; retirez de la liste les dossiers de sauvegarde, les répertoires de machines virtuelles et les grandes archives multimédias.',
            'Le second réglage, le plus efficace pour la plupart des gens, se trouve dans la même fenêtre sous Avancé > Types de fichiers. Pour chaque extension vous pouvez choisir « Indexer les propriétés uniquement » ou « Indexer les propriétés et le contenu ». En coupant l\'indexation du contenu, la recherche par nom continue de fonctionner tandis que la base rétrécit fortement et que l\'indexeur travaille beaucoup moins.',
            'Désactiver le service purement et simplement (`services.msc` > Windows Search > Désactivé) donne le plus grand gain, mais le coût est réel : la recherche de fichiers dans le menu Démarrer cesse, la recherche instantanée d\'Outlook casse, et les recherches dans l\'Explorateur repartent de zéro à chaque fois, donc lentement. Ne le faites que si un outil de recherche distinct prend le relais.',
          ],
        },
        {
          title: 'Quand la reconstruction de l\'index est-elle la bonne réponse ?',
          content: [
            'La reconstruction s\'impose dans deux cas. D\'abord quand la recherche elle-même est cassée : aucun résultat, résultats incomplets, ou fichiers supprimés qui apparaissent encore. L\'index est alors incohérent. Ensuite après avoir réduit la portée : `Windows.edb` ne rétrécit pas seul, seule la reconstruction élimine les anciennes données.',
            'Lancez-la avec le bouton Reconstruire sous Options d\'indexation > Avancé > Résolution des problèmes. Selon le nombre de fichiers, comptez d\'une demi-heure à plusieurs heures, avec processeur et disque fortement sollicités. Sur un portable, il est judicieux de la lancer branché sur secteur.',
            'Pendant la reconstruction, les résultats de recherche sont incomplets ; c\'est normal et cela se résout à la fin. Vous saurez que c\'est terminé grâce à la ligne « Indexation terminée » en haut de la fenêtre des Options d\'indexation.',
          ],
        },
      ],
      faq: [
        {
          question: 'Puis-je simplement supprimer Windows.edb ?',
          answer:
            'Techniquement oui une fois le service arrêté, et Windows le recréera — mais c\'est le même résultat que le bouton Reconstruire, par une voie plus risquée. Utilisez plutôt Options d\'indexation > Avancé > Reconstruire.',
        },
        {
          question: 'Que perds-je si je désactive Windows Search ?',
          answer:
            'Trouver des fichiers en tapant dans le menu Démarrer cesse de fonctionner, la recherche instantanée d\'Outlook casse, et les recherches de l\'Explorateur deviennent nettement plus lentes car elles balaient le disque à chaque fois. La recherche de paramètres et d\'applications n\'est pas touchée.',
        },
        {
          question: 'J\'utilise un SSD — l\'indexation nuit-elle quand même ?',
          answer:
            'En termes de performances, l\'écart est bien plus faible sur un SSD. Mais l\'indexeur écrit en continu et `Windows.edb` occupe plusieurs gigaoctets ; sur un SSD presque plein, ces deux effets se combinent en un ralentissement perceptible.',
        },
        {
          question: 'Pourquoi l\'indexation semble-t-elle ne jamais finir ?',
          answer:
            'Windows indexe pendant que la machine est inactive et se met en pause quand vous l\'utilisez ; sur portable, le mode batterie la ralentit encore. C\'est souvent pour cela qu\'elle paraît durer des jours, et ce n\'est pas un défaut — mais si cela dure des semaines, l\'index est probablement corrompu.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` fait partie des rares postes qui occupent un ordinateur au repos tout en consommant des gigaoctets de disque. Le bon ordre est : désactiver le mode Avancé de Windows 11, retirer de la portée les gros dossiers jamais cherchés, limiter au besoin l\'indexation du contenu, et reconstruire l\'index en dernier.',
        'Pour repérer les autres éléments cachés qui occupent la même machine, le module Analyse de disque de Disk Mop trie le lecteur par taille, dossiers masqués comme `ProgramData` compris ; les modules Gestionnaire de démarrage et Gestionnaire de services montrent sur un écran ce qui tourne encore en arrière-plan.',
      ],
      ctaText: 'Voyez ce qui tourne en arrière-plan et ce qui s\'accumule sur le disque',
    },
    es: {
      title: 'SearchIndexer.exe consume disco y CPU: la guía de Windows.edb',
      metaDescription:
        'Si Microsoft Windows Search Indexer funciona sin parar y Windows.edb ha crecido a varios gigabytes, la causa suele ser el modo de indexación «Mejorado». Cómo acotar el alcance y reconstruir.',
      subtitle: 'El freno de segundo plano más sigiloso',
      intro: [
        'Respuesta corta: `SearchIndexer.exe` es el servicio de Windows que analiza por adelantado nombres y contenidos de archivos y los escribe en una base de datos llamada `Windows.edb`. Si consume CPU o disco de forma constante, casi siempre es por una de dos causas: el modo de indexación «Mejorado» de Windows 11 está activo e indexa todo el disco, o el índice está dañado y se reconstruye sin fin. `Windows.edb` está en `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` y puede superar los 5-10 GB cuando se indexan buzones grandes o cientos de miles de archivos. La solución correcta no es desactivar el servicio a ciegas, sino acotar el alcance en Opciones de indización; eso baja la carga de CPU y encoge la base. Ojo: el archivo no se reduce solo tras acotar el alcance — hay que reconstruir el índice.',
        'Es uno de los pocos temas que responde a la vez a «el ventilador gira aunque el equipo esté parado» y a «hay un archivo de 8 GB en mi disco C y no sé qué es».',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` es el servicio Windows Search; escribe nombres y contenidos de archivos en la base `Windows.edb`.',
        'En Windows 11, el modo «Mejorado» en Configuración > Privacidad y seguridad > Buscar en Windows indexa TODO el disco y es la causa más común de carga alta.',
        '`Windows.edb` está en `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` y puede pasar de 5-10 GB.',
        'Acotar el alcance no encoge el archivo de inmediato; solo se reduce al reconstruir el índice.',
        'La opción «Indizar solo propiedades» mantiene la búsqueda por nombre y renuncia al análisis de contenido: suele ser el mejor equilibrio.',
        'Desactivar el servicio por completo da la mayor ganancia pero rompe la búsqueda de archivos del menú Inicio y la búsqueda instantánea de Outlook.',
      ],
      dataTable: {
        caption: 'Opciones de Windows Search: ganancia y coste',
        columns: ['Ajuste', 'Carga del sistema', 'Efecto en la búsqueda', 'Adecuado para'],
        rows: [
          ['Modo Mejorado (todo el PC)', 'Alta — índice de 5-10 GB', 'El más completo, búsqueda de contenido en todo', 'Equipos potentes, quien busca mucho'],
          ['Modo Clásico (bibliotecas + escritorio)', 'Baja', 'Documentos encontrados, no se analiza todo el disco', 'El valor por defecto, la mayoría'],
          ['Indizar solo propiedades', 'Baja notablemente, la base encoge', 'Nombres sí, contenidos no', 'Quien tiene el disco lleno'],
          ['Reconstruir el índice', 'Muy alta temporalmente', 'Repara un índice dañado', 'Cuando la búsqueda no devuelve nada'],
          ['Desactivar el servicio por completo', 'Ganancia máxima', 'La búsqueda de archivos del menú Inicio deja de funcionar', 'Quien usa otra herramienta de búsqueda'],
        ],
      },
      howTo: {
        name: 'Poner bajo control el índice de Windows Search',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Medir el tamaño de la base',
            text: 'En una PowerShell como administrador ejecuta `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length`. El valor está en bytes; divide entre 1GB para gigabytes.',
          },
          {
            name: 'Desactivar el modo Mejorado',
            text: 'Abre Configuración > Privacidad y seguridad > Buscar en Windows. Si «Buscar mis archivos» está en Mejorado, cámbialo a Clásico. Ese único cambio baja notablemente la carga en la mayoría de equipos.',
          },
          {
            name: 'Acotar el alcance del índice',
            text: 'Pulsa Windows + R y ejecuta `control srchadmin.dll`. Pulsa Modificar y revisa las ubicaciones indizadas. Desmarca sitios grandes donde nunca buscas: carpetas de copias, directorios de proyectos, carpetas de máquinas virtuales.',
          },
          {
            name: 'Reducir la indexación de contenido',
            text: 'En la misma ventana ve a Opciones avanzadas > Tipos de archivo. Para los tipos con mucho texto selecciona «Indizar solo propiedades». Los nombres siguen siendo buscables y el contenido deja de analizarse.',
          },
          {
            name: 'Reconstruir el índice',
            text: 'Pulsa Reconstruir en Opciones avanzadas > Solución de problemas. Puede tardar varias horas con carga alta, pero al terminar `Windows.edb` se reduce al nuevo alcance.',
          },
        ],
      },
      sections: [
        {
          title: '¿Qué es el índice de Windows Search y por qué crece?',
          content: [
            'Cuando escribes una palabra en el menú Inicio, Windows no analiza el disco en ese momento; consulta una base preparada de antemano. Esa base es el archivo `Windows.edb`, que el servicio `SearchIndexer.exe` mantiene actualizado en segundo plano. La ventaja es que la búsqueda responde al instante; el coste, que esa preparación consume CPU, disco y espacio.',
            'El tamaño de la base depende de dos cosas: cuántos archivos se indizan y si además se analiza su contenido. Si solo se indizan nombres, el archivo se queda en unos cientos de megabytes. Con la indexación de contenido activa y un alcance amplio, el texto de cada documento, correo y PDF entra en la base: de ahí salen los `Windows.edb` de 5-10 GB.',
            'En Windows 11 se sumó otro factor: el modo «Mejorado» indiza todo el disco en lugar de solo Documentos y Escritorio como hace el clásico. Con esa opción activa también se analizan proyectos, discos de máquinas virtuales, carpetas de juegos y copias de seguridad: la carga y la base se multiplican.',
          ],
        },
        {
          title: '¿Qué significa que SearchIndexer funcione sin parar?',
          content: [
            'Si `Microsoft Windows Search Indexer` mantiene un uso alto de disco o CPU en el Administrador de tareas, hay tres posibilidades. La primera es normal: tras una instalación nueva, o después de copiar muchos archivos, el índice se está creando por primera vez. Eso dura unas horas y luego se detiene solo.',
            'La segunda es un problema de alcance. El índice cubre carpetas enormes en las que nunca vas a buscar: un directorio de máquinas virtuales, unos cientos de gigabytes de archivos de proyecto o un disco de copias. El indizador los vigila continuamente y los reanaliza en cada cambio. Es una de las razones habituales de que el ventilador siga girando en un equipo parado.',
            'La tercera es la corrupción. Cuando `Windows.edb` está dañado, el indizador intenta reconstruir una y otra vez, nunca termina y entra en bucle. El síntoma es claro: la búsqueda no devuelve nada o devuelve resultados incompletos mientras el indizador está permanentemente ocupado. En ese caso la solución no es acotar el alcance sino reconstruir el índice a mano.',
          ],
        },
        {
          title: '¿Acotar el alcance o desactivarlo?',
          content: [
            'El primer paso siempre debe ser acotar el alcance, porque quita la mayor parte de la carga sin perder la utilidad de la búsqueda. Pulsa Windows + R, ejecuta `control srchadmin.dll` y pulsa Modificar. Verás todas las ubicaciones indizadas; quita de la lista carpetas de copias, directorios de máquinas virtuales y archivos multimedia grandes.',
            'El segundo ajuste, el más eficaz para la mayoría, está en la misma ventana en Opciones avanzadas > Tipos de archivo. Para cada extensión puedes elegir «Indizar solo propiedades» o «Indizar propiedades y contenido». Al desactivar la indexación de contenido, la búsqueda por nombre sigue funcionando mientras la base encoge muchísimo y el indizador trabaja mucho menos.',
            'Desactivar el servicio del todo (`services.msc` > Windows Search > Deshabilitado) da la mayor ganancia, pero el coste es real: la búsqueda de archivos del menú Inicio deja de funcionar, la búsqueda instantánea de Outlook se rompe y las búsquedas del Explorador recorren el disco desde cero cada vez, es decir, lentas. Hazlo solo si tienes otra herramienta de búsqueda que ocupe su lugar.',
          ],
        },
        {
          title: '¿Cuándo es correcto reconstruir el índice?',
          content: [
            'Reconstruir es lo correcto en dos situaciones. Primera, cuando la búsqueda está rota: sin resultados, resultados incompletos o archivos borrados que siguen apareciendo. El índice es inconsistente. Segunda, tras acotar el alcance: `Windows.edb` no encoge solo, y es la reconstrucción la que descarta los datos antiguos.',
            'Se inicia con el botón Reconstruir en Opciones de indización > Opciones avanzadas > Solución de problemas. Según el número de archivos tarda de media hora a varias horas, con CPU y disco muy solicitados. En un portátil conviene lanzarlo enchufado a la corriente.',
            'Durante la reconstrucción los resultados salen incompletos; es normal y se resuelve al terminar. Sabrás que ha acabado por la línea «Indización completada» en la parte superior de la ventana de Opciones de indización.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Puedo borrar sin más el archivo Windows.edb?',
          answer:
            'Técnicamente sí una vez detenido el servicio, y Windows lo recreará, pero eso es el mismo resultado que el botón Reconstruir por una vía más arriesgada. Usa mejor Opciones de indización > Opciones avanzadas > Reconstruir.',
        },
        {
          question: '¿Qué pierdo si desactivo Windows Search?',
          answer:
            'Encontrar archivos escribiendo en el menú Inicio deja de funcionar, la búsqueda instantánea de Outlook se rompe y las búsquedas del Explorador se vuelven notablemente más lentas porque recorren el disco cada vez. La búsqueda de ajustes y aplicaciones no se ve afectada.',
        },
        {
          question: 'Uso un SSD, ¿la indexación sigue siendo perjudicial?',
          answer:
            'En rendimiento la diferencia es mucho menor en un SSD. Pero el indizador escribe constantemente y `Windows.edb` ocupa gigabytes; en un SSD casi lleno esos dos efectos se suman en una lentitud perceptible.',
        },
        {
          question: '¿Por qué parece que la indexación nunca termina?',
          answer:
            'Windows indiza mientras el equipo está inactivo y se pausa cuando lo usas; en portátiles además se ralentiza con batería. Por eso suele parecer que tarda días, y no es un fallo. Ahora bien, si tarda semanas, el índice probablemente esté dañado.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` es uno de esos pocos elementos que mantienen ocupado un equipo en reposo y a la vez ocupan gigabytes de disco. El orden correcto es: desactivar el modo Mejorado en Windows 11, quitar del alcance las carpetas grandes que nunca buscas, reducir la indexación de contenido si hace falta y reconstruir el índice al final.',
        'Para ver los demás elementos ocultos que ocupan espacio en el mismo equipo, el módulo Análisis de disco de Disk Mop ordena la unidad por tamaño incluidas carpetas ocultas como `ProgramData`; los módulos Gestor de inicio y Gestor de servicios muestran en una pantalla qué más corre en segundo plano cargando la máquina.',
      ],
      ctaText: 'Descubre qué corre en segundo plano y qué se acumula en el disco',
    },
    it: {
      title: 'SearchIndexer.exe consuma disco e CPU: la guida a Windows.edb',
      metaDescription:
        'Se Microsoft Windows Search Indexer lavora di continuo e Windows.edb è cresciuto fino a diversi gigabyte, la causa di solito è la modalità di indicizzazione «Avanzata». Come restringere l\'ambito e ricostruire.',
      subtitle: 'Il rallentamento in background più insidioso',
      intro: [
        'Risposta breve: `SearchIndexer.exe` è il servizio di Windows che analizza in anticipo nomi e contenuti dei file e li scrive in un database chiamato `Windows.edb`. Se usa costantemente molta CPU o molto disco, di solito la causa è una di due: la modalità di indicizzazione «Avanzata» di Windows 11 è attiva e indicizza l\'intero disco, oppure l\'indice è danneggiato e si ricostruisce all\'infinito. `Windows.edb` si trova in `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` e può superare i 5-10 GB quando vengono indicizzate caselle di posta grandi o centinaia di migliaia di file. La soluzione corretta non è disattivare il servizio alla cieca ma restringere l\'ambito nelle Opzioni di indicizzazione; questo abbassa il carico della CPU e riduce il database. Attenzione: dopo aver ristretto l\'ambito il file non si riduce da solo — l\'indice va ricostruito.',
        'È uno dei pochi argomenti che risponde contemporaneamente a «la ventola gira anche a computer fermo» e a «sul disco C c\'è un file da 8 GB e non so cosa sia».',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` è il servizio Windows Search; scrive nomi e contenuti dei file nel database `Windows.edb`.',
        'In Windows 11 la modalità «Avanzata» in Impostazioni > Privacy e sicurezza > Ricerca in Windows indicizza TUTTO il disco ed è la causa più comune di carico elevato.',
        '`Windows.edb` si trova in `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` e può superare i 5-10 GB.',
        'Restringere l\'ambito non riduce subito il file; si riduce solo quando l\'indice viene ricostruito.',
        'L\'opzione «Indicizza solo proprietà» mantiene la ricerca per nome ed elimina l\'analisi del contenuto: di solito è il miglior compromesso.',
        'Disattivare del tutto il servizio dà il guadagno maggiore ma rompe la ricerca file nel menu Start e la ricerca istantanea di Outlook.',
      ],
      dataTable: {
        caption: 'Opzioni di Windows Search: vantaggio e costo',
        columns: ['Impostazione', 'Carico di sistema', 'Effetto sulla ricerca', 'Adatta a'],
        rows: [
          ['Modalità Avanzata (tutto il PC)', 'Alto — indice fino a 5-10 GB', 'La più completa, ricerca nel contenuto ovunque', 'Macchine potenti, chi cerca molto'],
          ['Modalità Classica (raccolte + desktop)', 'Basso', 'Documenti trovati, non viene scansionato tutto il disco', 'Il valore predefinito, la maggior parte'],
          ['Indicizza solo proprietà', 'Calo netto, il database si riduce', 'Nomi sì, contenuti no', 'Chi ha il disco pieno'],
          ['Ricostruire l\'indice', 'Molto alto temporaneamente', 'Ripara un indice danneggiato', 'Quando la ricerca non restituisce nulla'],
          ['Disattivare del tutto il servizio', 'Guadagno massimo', 'La ricerca file dal menu Start smette di funzionare', 'Chi usa uno strumento di ricerca separato'],
        ],
      },
      howTo: {
        name: 'Riportare sotto controllo l\'indice di Windows Search',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Misurare la dimensione del database',
            text: 'In una PowerShell come amministratore esegui `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length`. Il valore è in byte; dividi per 1GB per i gigabyte.',
          },
          {
            name: 'Disattivare la modalità Avanzata',
            text: 'Apri Impostazioni > Privacy e sicurezza > Ricerca in Windows. Se «Trova i miei file» è su Avanzata, passa a Classica. Questa sola modifica riduce sensibilmente il carico sulla maggior parte delle macchine.',
          },
          {
            name: 'Restringere l\'ambito dell\'indice',
            text: 'Premi Windows + R ed esegui `control srchadmin.dll`. Fai clic su Modifica e rivedi i percorsi indicizzati. Deseleziona le aree grandi in cui non cerchi mai: cartelle di backup, directory di progetto, cartelle di macchine virtuali.',
          },
          {
            name: 'Ridurre l\'indicizzazione del contenuto',
            text: 'Nella stessa finestra vai in Avanzate > Tipi di file. Per i tipi ricchi di testo seleziona «Indicizza solo proprietà». I nomi restano ricercabili mentre i contenuti non vengono più analizzati.',
          },
          {
            name: 'Ricostruire l\'indice',
            text: 'Fai clic su Ricostruisci in Avanzate > Risoluzione dei problemi. Può richiedere alcune ore con carico elevato, ma al termine `Windows.edb` si riduce al nuovo ambito.',
          },
        ],
      },
      sections: [
        {
          title: 'Cos\'è l\'indice di Windows Search e perché cresce?',
          content: [
            'Quando digiti una parola nel menu Start, Windows non scansiona il disco in quel momento: consulta un database preparato in anticipo. Quel database è il file `Windows.edb`, tenuto costantemente aggiornato in background dal servizio `SearchIndexer.exe`. Il vantaggio è che la ricerca risponde all\'istante; il costo è che questa preparazione consuma CPU, disco e spazio.',
            'La dimensione del database dipende da due cose: quanti file vengono indicizzati e se ne viene analizzato anche il contenuto. Se si indicizzano solo i nomi, il file resta su qualche centinaio di megabyte. Con l\'indicizzazione del contenuto attiva e un ambito ampio, il testo di ogni documento, e-mail e PDF finisce nel database: da qui i file `Windows.edb` da 5-10 GB.',
            'In Windows 11 si è aggiunto un altro fattore: la modalità «Avanzata» indicizza l\'intero disco invece dei soli Documenti e Desktop come fa quella classica. Con questa opzione attiva vengono analizzati anche progetti, dischi di macchine virtuali, cartelle di giochi e backup: carico e database si moltiplicano.',
          ],
        },
        {
          title: 'Cosa significa se SearchIndexer lavora di continuo?',
          content: [
            'Se `Microsoft Windows Search Indexer` mostra a lungo un uso elevato di disco o CPU in Gestione attività, le possibilità sono tre. La prima è normale: dopo un\'installazione nuova o dopo aver copiato molti file, l\'indice viene creato per la prima volta. Dura qualche ora e poi si ferma da solo.',
            'La seconda è un problema di ambito. L\'indice copre cartelle enormi in cui non cercherai mai: una directory di macchine virtuali, qualche centinaio di gigabyte di file di progetto o un disco di backup. L\'indicizzatore le sorveglia di continuo e le riscansiona a ogni modifica. È uno dei motivi comuni per cui la ventola gira su una macchina inattiva.',
            'La terza è il danneggiamento. Quando `Windows.edb` è corrotto, l\'indicizzatore tenta di continuo la ricostruzione, non finisce mai e resta in loop. Il sintomo è chiaro: la ricerca non restituisce nulla o restituisce risultati incompleti mentre l\'indicizzatore è sempre occupato. In questo caso la soluzione non è restringere l\'ambito ma ricostruire l\'indice a mano.',
          ],
        },
        {
          title: 'Restringere l\'ambito o disattivare?',
          content: [
            'La prima mossa dovrebbe sempre essere restringere l\'ambito, perché toglie gran parte del carico senza perdere l\'utilità della ricerca. Premi Windows + R, esegui `control srchadmin.dll` e fai clic su Modifica. Vedrai tutti i percorsi indicizzati; togli dall\'elenco cartelle di backup, directory di macchine virtuali e grandi archivi multimediali.',
            'La seconda impostazione, la più efficace per la maggior parte delle persone, si trova nella stessa finestra sotto Avanzate > Tipi di file. Per ogni estensione puoi scegliere «Indicizza solo proprietà» oppure «Indicizza proprietà e contenuto». Disattivando l\'indicizzazione del contenuto la ricerca per nome continua a funzionare mentre il database si riduce drasticamente e l\'indicizzatore lavora molto meno.',
            'Disattivare del tutto il servizio (`services.msc` > Windows Search > Disabilitato) dà il guadagno maggiore, ma il costo è reale: la ricerca file dal menu Start smette di funzionare, la ricerca istantanea di Outlook si rompe e le ricerche in Esplora file ripartono da zero ogni volta, quindi lente. Fallo solo se hai uno strumento di ricerca separato che ne prende il posto.',
          ],
        },
        {
          title: 'Quando è giusto ricostruire l\'indice?',
          content: [
            'La ricostruzione è la mossa giusta in due casi. Primo, quando la ricerca stessa è rotta: nessun risultato, risultati incompleti o file eliminati che continuano a comparire. L\'indice è incoerente. Secondo, dopo aver ristretto l\'ambito: `Windows.edb` non si riduce da solo, è la ricostruzione a scartare i dati vecchi.',
            'Si avvia con il pulsante Ricostruisci in Opzioni di indicizzazione > Avanzate > Risoluzione dei problemi. A seconda del numero di file richiede da mezz\'ora a diverse ore, con CPU e disco molto impegnati. Su un portatile conviene avviarla collegati alla rete elettrica.',
            'Durante la ricostruzione i risultati della ricerca sono incompleti; è normale e si risolve al termine. Capisci che è finita dalla riga «Indicizzazione completata» in alto nella finestra delle Opzioni di indicizzazione.',
          ],
        },
      ],
      faq: [
        {
          question: 'Posso semplicemente eliminare Windows.edb?',
          answer:
            'Tecnicamente sì una volta fermato il servizio, e Windows lo ricrea, ma è lo stesso risultato del pulsante Ricostruisci per una via più rischiosa. Usa piuttosto Opzioni di indicizzazione > Avanzate > Ricostruisci.',
        },
        {
          question: 'Cosa perdo se disattivo Windows Search?',
          answer:
            'Trovare file digitando nel menu Start smette di funzionare, la ricerca istantanea di Outlook si rompe e le ricerche in Esplora file diventano molto più lente perché scansionano il disco ogni volta. La ricerca di impostazioni e app non è toccata.',
        },
        {
          question: 'Uso un SSD: l\'indicizzazione fa comunque male?',
          answer:
            'In termini di prestazioni la differenza su SSD è molto minore. Ma l\'indicizzatore scrive di continuo e `Windows.edb` occupa gigabyte; su un SSD quasi pieno i due effetti si sommano in un rallentamento percepibile.',
        },
        {
          question: 'Perché l\'indicizzazione sembra non finire mai?',
          answer:
            'Windows indicizza quando la macchina è inattiva e si mette in pausa mentre la usi; sui portatili rallenta ulteriormente a batteria. Per questo spesso sembra durare giorni, e non è un guasto — ma se dura settimane l\'indice è probabilmente danneggiato.',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` è una delle poche voci che tengono occupato un computer a riposo e allo stesso tempo occupano gigabyte di disco. L\'ordine corretto è: disattivare la modalità Avanzata in Windows 11, togliere dall\'ambito le cartelle grandi mai cercate, ridurre se serve l\'indicizzazione del contenuto e ricostruire l\'indice per ultimo.',
        'Per vedere le altre voci nascoste che occupano spazio sulla stessa macchina, il modulo Analisi disco di Disk Mop ordina l\'unità per dimensione incluse cartelle nascoste come `ProgramData`; i moduli Gestione avvio e Gestione servizi mostrano in una schermata cos\'altro gira in background affaticando la macchina.',
      ],
      ctaText: 'Scopri cosa gira in background e cosa si accumula sul disco',
    },
    pt: {
      title: 'SearchIndexer.exe consumindo disco e CPU: o guia do Windows.edb',
      metaDescription:
        'Se o Microsoft Windows Search Indexer roda o tempo todo e o Windows.edb cresceu para vários gigabytes, a causa costuma ser o modo de indexação «Avançado». Como reduzir o escopo e reconstruir.',
      subtitle: 'O freio de segundo plano mais sorrateiro',
      intro: [
        'Resposta curta: `SearchIndexer.exe` é o serviço do Windows que varre antecipadamente nomes e conteúdos de arquivos e os grava num banco chamado `Windows.edb`. Se ele usa CPU ou disco constantemente, normalmente é por um de dois motivos: o modo de indexação «Avançado» do Windows 11 está ligado e indexa o disco inteiro, ou o índice está corrompido e se reconstrói sem fim. O `Windows.edb` fica em `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` e pode passar de 5-10 GB quando caixas de correio grandes ou centenas de milhares de arquivos são indexados. A solução certa não é desativar o serviço às cegas, mas reduzir o escopo nas Opções de Indexação; isso baixa a carga de CPU e encolhe o banco. Atenção: o arquivo não encolhe sozinho depois de reduzir o escopo — o índice precisa ser reconstruído.',
        'É um dos raros assuntos que responde ao mesmo tempo «a ventoinha gira mesmo com o computador parado» e «tem um arquivo de 8 GB no meu disco C e não sei o que é».',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` é o serviço Windows Search; grava nomes e conteúdos de arquivos no banco `Windows.edb`.',
        'No Windows 11, o modo «Avançado» em Configurações > Privacidade e segurança > Pesquisando no Windows indexa o disco INTEIRO e é a causa mais comum de carga alta.',
        'O `Windows.edb` fica em `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` e pode passar de 5-10 GB.',
        'Reduzir o escopo não encolhe o arquivo na hora; ele só diminui quando o índice é reconstruído.',
        'A opção «Indexar apenas propriedades» mantém a busca por nome e abandona a varredura de conteúdo — costuma ser o melhor equilíbrio.',
        'Desativar o serviço por completo dá o maior ganho, mas quebra a busca de arquivos no menu Iniciar e a busca instantânea do Outlook.',
      ],
      dataTable: {
        caption: 'Opções do Windows Search: ganho e custo',
        columns: ['Configuração', 'Carga no sistema', 'Efeito na busca', 'Indicado para'],
        rows: [
          ['Modo Avançado (PC inteiro)', 'Alta — índice de 5-10 GB', 'Mais completo, busca de conteúdo em tudo', 'Máquinas potentes, quem busca muito'],
          ['Modo Clássico (bibliotecas + área de trabalho)', 'Baixa', 'Documentos encontrados, disco inteiro não varrido', 'O padrão, a maioria'],
          ['Indexar apenas propriedades', 'Queda notável, banco encolhe', 'Nomes sim, conteúdos não', 'Quem está com o disco cheio'],
          ['Reconstruir o índice', 'Muito alta temporariamente', 'Repara um índice corrompido', 'Quando a busca não retorna nada'],
          ['Desativar o serviço por completo', 'Ganho máximo', 'A busca de arquivos do menu Iniciar para de funcionar', 'Quem usa outra ferramenta de busca'],
        ],
      },
      howTo: {
        name: 'Colocar o índice do Windows Search sob controle',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Medir o tamanho do banco',
            text: 'Em um PowerShell como administrador execute `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length`. O valor está em bytes; divida por 1GB para gigabytes.',
          },
          {
            name: 'Desligar o modo Avançado',
            text: 'Abra Configurações > Privacidade e segurança > Pesquisando no Windows. Se «Localizar meus arquivos» estiver em Avançado, mude para Clássico. Essa única mudança reduz bastante a carga na maioria das máquinas.',
          },
          {
            name: 'Reduzir o escopo do índice',
            text: 'Pressione Windows + R e execute `control srchadmin.dll`. Clique em Modificar e revise os locais indexados. Desmarque áreas grandes onde você nunca busca: pastas de backup, diretórios de projetos, pastas de máquinas virtuais.',
          },
          {
            name: 'Diminuir a indexação de conteúdo',
            text: 'Na mesma janela vá em Avançado > Tipos de Arquivo. Para tipos com muito texto selecione «Indexar apenas propriedades». Os nomes continuam pesquisáveis e o conteúdo deixa de ser varrido.',
          },
          {
            name: 'Reconstruir o índice',
            text: 'Clique em Recriar em Avançado > Solução de problemas. Pode levar algumas horas com carga alta, mas ao terminar o `Windows.edb` encolhe para o novo escopo.',
          },
        ],
      },
      sections: [
        {
          title: 'O que é o índice do Windows Search e por que ele cresce?',
          content: [
            'Quando você digita uma palavra no menu Iniciar, o Windows não varre o disco naquele momento; consulta um banco preparado antes. Esse banco é o arquivo `Windows.edb`, mantido atualizado em segundo plano pelo serviço `SearchIndexer.exe`. A vantagem é que a busca responde na hora; o custo é que essa preparação consome CPU, disco e espaço.',
            'O tamanho do banco depende de duas coisas: quantos arquivos são indexados e se o conteúdo também é varrido. Se só os nomes são indexados, o arquivo fica em algumas centenas de megabytes. Com a indexação de conteúdo ligada e escopo amplo, o texto de cada documento, e-mail e PDF entra no banco — daí saem os `Windows.edb` de 5-10 GB.',
            'No Windows 11 entrou mais um fator: o modo «Avançado» indexa o disco inteiro em vez de apenas Documentos e Área de Trabalho como o clássico. Com essa opção ligada também são varridos projetos, discos de máquinas virtuais, pastas de jogos e backups — carga e banco se multiplicam.',
          ],
        },
        {
          title: 'O que significa o SearchIndexer rodar sem parar?',
          content: [
            'Se o `Microsoft Windows Search Indexer` mantém uso alto de disco ou CPU no Gerenciador de Tarefas, há três possibilidades. A primeira é normal: depois de uma instalação nova, ou depois de copiar muitos arquivos, o índice está sendo criado pela primeira vez. Isso leva algumas horas e depois para sozinho.',
            'A segunda é problema de escopo. O índice cobre pastas enormes onde você nunca vai buscar: um diretório de máquinas virtuais, algumas centenas de gigabytes de arquivos de projeto ou um disco de backup. O indexador vigia tudo isso continuamente e revarre a cada mudança. É um dos motivos comuns para a ventoinha continuar girando numa máquina parada.',
            'A terceira é corrupção. Quando o `Windows.edb` está danificado, o indexador tenta reconstruir sem parar, nunca termina e entra em laço. O sintoma é claro: a busca não retorna nada ou retorna resultados incompletos enquanto o indexador está sempre ocupado. Nesse caso a solução não é reduzir o escopo, e sim reconstruir o índice manualmente.',
          ],
        },
        {
          title: 'Reduzir o escopo ou desativar?',
          content: [
            'O primeiro passo deve sempre ser reduzir o escopo, porque tira a maior parte da carga sem perder a utilidade da busca. Pressione Windows + R, execute `control srchadmin.dll` e clique em Modificar. Você vê todos os locais indexados; remova da lista pastas de backup, diretórios de máquinas virtuais e grandes arquivos de mídia.',
            'A segunda configuração, a mais eficaz para a maioria, está na mesma janela em Avançado > Tipos de Arquivo. Para cada extensão dá para escolher «Indexar apenas propriedades» ou «Indexar propriedades e conteúdo». Desligando a indexação de conteúdo, a busca por nome continua funcionando enquanto o banco encolhe muito e o indexador trabalha bem menos.',
            'Desativar o serviço de vez (`services.msc` > Windows Search > Desabilitado) dá o maior ganho, mas o custo é real: a busca de arquivos no menu Iniciar para de funcionar, a busca instantânea do Outlook quebra e as buscas no Explorador varrem o disco do zero toda vez, ou seja, ficam lentas. Faça isso só se tiver outra ferramenta de busca ocupando o lugar.',
          ],
        },
        {
          title: 'Quando reconstruir o índice é a jogada certa?',
          content: [
            'Reconstruir é o certo em duas situações. Primeira, quando a própria busca está quebrada: sem resultados, resultados incompletos ou arquivos apagados que ainda aparecem. O índice está inconsistente. Segunda, depois de reduzir o escopo: o `Windows.edb` não encolhe sozinho, e é a reconstrução que descarta os dados antigos.',
            'Inicie pelo botão Recriar em Opções de Indexação > Avançado > Solução de problemas. Dependendo do número de arquivos leva de meia hora a várias horas, com CPU e disco bastante exigidos. Em um notebook faz sentido iniciar com o carregador ligado.',
            'Durante a reconstrução os resultados vêm incompletos; isso é normal e se resolve ao terminar. Você sabe que acabou pela linha «Indexação concluída» no topo da janela de Opções de Indexação.',
          ],
        },
      ],
      faq: [
        {
          question: 'Posso simplesmente apagar o Windows.edb?',
          answer:
            'Tecnicamente sim, com o serviço parado, e o Windows o recria — mas é o mesmo resultado do botão Recriar por um caminho mais arriscado. Use Opções de Indexação > Avançado > Recriar.',
        },
        {
          question: 'O que eu perco se desativar o Windows Search?',
          answer:
            'Achar arquivos digitando no menu Iniciar para de funcionar, a busca instantânea do Outlook quebra e as buscas no Explorador ficam bem mais lentas porque varrem o disco toda vez. A busca de configurações e aplicativos não é afetada.',
        },
        {
          question: 'Uso SSD — a indexação ainda atrapalha?',
          answer:
            'Em desempenho a diferença é bem menor num SSD. Mas o indexador grava o tempo todo e o `Windows.edb` ocupa gigabytes; num SSD quase cheio esses dois efeitos se somam numa lentidão perceptível.',
        },
        {
          question: 'Por que a indexação parece nunca terminar?',
          answer:
            'O Windows indexa enquanto a máquina está ociosa e pausa quando você a usa; em notebooks ainda desacelera na bateria. Por isso costuma parecer que leva dias, e não é defeito — mas levar semanas sugere índice corrompido.',
        },
      ],
      verdict: [
        'O `SearchIndexer.exe` é um dos poucos itens que mantêm um computador ocioso ocupado e ao mesmo tempo consomem gigabytes de disco. A ordem correta é: desligar o modo Avançado no Windows 11, tirar do escopo as pastas grandes que você nunca busca, reduzir a indexação de conteúdo se preciso e reconstruir o índice por último.',
        'Para ver os outros itens ocultos ocupando espaço na mesma máquina, o módulo Análise de disco do Disk Mop ordena a unidade por tamanho incluindo pastas ocultas como `ProgramData`; os módulos Gerenciador de inicialização e Gerenciador de serviços mostram numa tela o que mais roda em segundo plano sobrecarregando a máquina.',
      ],
      ctaText: 'Veja o que roda em segundo plano e o que se acumula no disco',
    },
    ja: {
      title: 'SearchIndexer.exe がディスクと CPU を圧迫する: Windows.edb 完全ガイド',
      metaDescription:
        'Microsoft Windows Search Indexer が常時動き、Windows.edb が数ギガバイトに膨らんでいる場合、原因はたいてい「拡張」インデックスモードです。範囲の絞り方と再構築の手順。',
      subtitle: 'バックグラウンドで最もやっかいな速度低下',
      intro: [
        '短い答え: `SearchIndexer.exe` は、ファイル名と内容をあらかじめ走査して `Windows.edb` というデータベースに書き込む Windows のサービスです。CPU やディスクを常時大きく使っている場合、原因はたいてい 2 つのどちらかです。Windows 11 の「拡張」インデックスモードが有効でドライブ全体を対象にしているか、インデックスが破損して延々と再構築を繰り返しているかです。`Windows.edb` は `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` にあり、大きなメールボックスや数十万のファイルを対象にすると 5〜10 GB を超えることがあります。正しい対処はサービスを闇雲に無効化することではなく、インデックスのオプションで範囲を絞ることです。これで CPU 負荷が下がり、データベースも小さくなります。ただし範囲を絞ってもファイルは自動では縮まず、インデックスの再構築が必要です。',
        'これは「何もしていないのにファンが回る」と「C ドライブに 8 GB のファイルがあるが正体が分からない」の両方に同時に答える、数少ないテーマの 1 つです。',
      ],
      keyTakeaways: [
        '`SearchIndexer.exe` は Windows Search サービスで、ファイル名と内容を `Windows.edb` データベースに書き込みます。',
        'Windows 11 の 設定 > プライバシーとセキュリティ > Windows の検索 にある「拡張」モードは「ドライブ全体」を対象にし、高負荷の最も一般的な原因です。',
        '`Windows.edb` は `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\` にあり、5〜10 GB を超えることがあります。',
        '範囲を絞ってもファイルはすぐには縮みません。インデックスを再構築して初めて小さくなります。',
        '「プロパティのみインデックス」を選ぶとファイル名検索は残したまま内容の走査をやめられます。多くの場合これが最適な折衷案です。',
        'サービスを完全に無効化すると効果は最大ですが、スタートメニューのファイル検索と Outlook の即時検索が使えなくなります。',
      ],
      dataTable: {
        caption: 'Windows Search の選択肢: 効果と代償',
        columns: ['設定', 'システム負荷', '検索への影響', '向いている人'],
        rows: [
          ['拡張モード（PC 全体）', '高 — インデックスが 5〜10 GB に', '最も網羅的、どこでも内容検索', '高性能機、検索を多用する人'],
          ['クラシックモード（ライブラリ＋デスクトップ）', '低', '書類は見つかる、ディスク全体は走査しない', '既定値、大半の利用者'],
          ['プロパティのみインデックス', '大きく低下、DB が縮小', 'ファイル名は可、内容検索は不可', 'ディスクが逼迫している人'],
          ['インデックスの再構築', '一時的に非常に高い', '破損したインデックスを修復', '検索が何も返さないとき'],
          ['サービスを完全に無効化', '効果は最大', 'スタートメニューのファイル検索が停止', '別の検索ツールを使う人'],
        ],
      },
      howTo: {
        name: 'Windows Search インデックスを制御下に置く',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'データベースのサイズを測る',
            text: '管理者権限の PowerShell で `Get-Item "C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb" | Select-Object Length` を実行します。値はバイト単位なので 1GB で割ってギガバイトにします。',
          },
          {
            name: '拡張モードをオフにする',
            text: '設定 > プライバシーとセキュリティ > Windows の検索 を開きます。「ファイルの検索」が「拡張」なら「クラシック」に切り替えます。この 1 つの変更だけで多くのマシンの負荷が目に見えて下がります。',
          },
          {
            name: 'インデックスの範囲を絞る',
            text: 'Windows + R で `control srchadmin.dll` を実行します。「変更」をクリックしてインデックス対象の場所を見直します。バックアップ用フォルダー、プロジェクトのディレクトリ、仮想マシンのフォルダーなど、検索する必要のない大きな場所のチェックを外します。',
          },
          {
            name: '内容のインデックスを減らす',
            text: '同じウィンドウで 詳細設定 > ファイルの種類 に移動します。テキスト量の多い拡張子では「プロパティのみインデックスを作成する」を選びます。ファイル名は検索できたまま、内容は走査されなくなります。',
          },
          {
            name: 'インデックスを再構築する',
            text: '詳細設定 > トラブルシューティング の「再構築」をクリックします。数時間かかり、その間は負荷が高くなりますが、完了後に `Windows.edb` は新しい範囲に合わせて縮小します。',
          },
        ],
      },
      sections: [
        {
          title: 'Windows Search インデックスとは何か、なぜ大きくなるのか',
          content: [
            'スタートメニューに単語を入力したとき、Windows はその場でディスクを走査しているわけではありません。あらかじめ用意されたデータベースを参照しています。それが `Windows.edb` ファイルで、`SearchIndexer.exe` サービスがバックグラウンドで常に更新しています。利点は検索が即座に返ること、代償はその準備が CPU、ディスク、保存領域を消費することです。',
            'データベースの大きさは 2 つの要素で決まります。何件のファイルを対象にするか、そして内容まで走査するかどうかです。ファイル名だけなら数百メガバイトにとどまります。内容のインデックスが有効で対象範囲が広い場合、あらゆる文書、メール、PDF の本文がデータベースに入ります。5〜10 GB の `Windows.edb` はここから生まれます。',
            'Windows 11 ではさらに悪化する要因が加わりました。設定にある「拡張」モードは、クラシックモードのようにドキュメントとデスクトップだけでなくドライブ全体を対象にします。この設定が有効だと、プロジェクト、仮想マシンのディスク、ゲームフォルダー、バックアップまで走査され、負荷もデータベースも何倍にもなります。',
          ],
        },
        {
          title: 'SearchIndexer が動き続けているとき、何が起きているのか',
          content: [
            'タスク マネージャーで `Microsoft Windows Search Indexer` が長時間ディスクや CPU を高く使っている場合、可能性は 3 つです。1 つ目は正常な状態で、新規インストール直後や大量のファイルをコピーした後に、インデックスが初めて作られているところです。数時間で終わり、自然に止まります。',
            '2 つ目は範囲の問題です。実際には検索しない巨大なフォルダーが対象に含まれています。仮想マシンのディレクトリ、数百ギガバイトのプロジェクトファイル、バックアップ用ドライブなどです。インデクサーはこれらを常時監視し、変更のたびに再走査します。何もしていないマシンでファンが回り続ける原因としてよくあるものです。',
            '3 つ目は破損です。`Windows.edb` が壊れると、インデクサーは再構築を試み続け、決して完了せず、無限に回り続けます。症状は分かりやすく、検索が何も返さないか不完全な結果しか返さないのに、インデクサーだけは常に忙しい状態です。この場合、範囲を絞るのではなく手動で再構築するのが正しい対処です。',
          ],
        },
        {
          title: '範囲を絞るか、無効にするか',
          content: [
            '最初の一手は常に範囲を絞ることであるべきです。検索の利便性を失わずに負荷の大半を取り除けるからです。Windows + R で `control srchadmin.dll` を実行し「変更」をクリックします。インデックス対象の場所がすべて表示されるので、バックアップ用フォルダー、仮想マシンのディレクトリ、大きなメディアアーカイブを一覧から外します。',
            '2 つ目の設定は、多くの人にとって最も効果的です。同じウィンドウの 詳細設定 > ファイルの種類 にあります。拡張子ごとに「プロパティのみインデックスを作成する」か「プロパティとファイルの内容をインデックスする」を選べます。内容のインデックスをオフにすると、名前での検索は動いたままデータベースは劇的に縮み、インデクサーの稼働も大幅に減ります。',
            'サービスを完全に無効化する方法（`services.msc` > Windows Search > 無効）は効果が最大ですが、代償は現実的です。スタートメニューでのファイル検索が使えなくなり、Outlook の即時検索が壊れ、エクスプローラーの検索は毎回ディスクを一から走査するため遅くなります。代わりとなる検索ツールがある場合にだけ行ってください。',
          ],
        },
        {
          title: 'インデックスの再構築が正しいのはどんなときか',
          content: [
            '再構築が正しい対処になるのは 2 つの場合です。1 つは検索自体が壊れているとき。結果が出ない、結果が不完全、削除したファイルがまだ出てくる、といった場合はインデックスが不整合です。もう 1 つは範囲を絞った後です。`Windows.edb` は自然には縮まず、古いデータを捨てるのは再構築だからです。',
            '実行は インデックスのオプション > 詳細設定 > トラブルシューティング の「再構築」ボタンから行います。ファイル数によって 30 分から数時間かかり、その間 CPU とディスクが強く使われます。ノートパソコンでは電源に接続した状態で始めるのが賢明です。',
            '再構築中は検索結果が不完全になりますが、これは正常で、完了すれば解消します。終わったかどうかは、インデックスのオプション画面の上部に表示される「インデックスの作成が完了しました」で判断できます。',
          ],
        },
      ],
      faq: [
        {
          question: 'Windows.edb をそのまま削除してもよいですか。',
          answer:
            'サービスを停止すれば技術的には削除でき、Windows が再作成します。ただしそれは「再構築」ボタンと同じ結果を、より危険な方法で得ているだけです。インデックスのオプション > 詳細設定 > 再構築 を使ってください。',
        },
        {
          question: 'Windows Search を無効にすると何を失いますか。',
          answer:
            'スタートメニューで入力してファイルを見つける機能が使えなくなり、Outlook の即時検索が壊れ、エクスプローラーの検索は毎回ディスクを走査するため目に見えて遅くなります。設定やアプリの検索には影響しません。',
        },
        {
          question: 'SSD を使っていますが、それでもインデックスは害になりますか。',
          answer:
            '性能面では SSD のほうが差ははるかに小さくなります。ただしインデクサーは書き込みを続け、`Windows.edb` は数ギガバイトを占めます。空き容量が少ない SSD では、この 2 つの影響が重なって体感できる遅さになります。',
        },
        {
          question: 'インデックス作成が終わらないように見えるのはなぜですか。',
          answer:
            'Windows はマシンがアイドルのときにインデックスを作り、使用中は一時停止します。ノートパソコンではバッテリー駆動時にさらに遅くなります。何日もかかるように見えるのはたいていこのためで、不具合ではありません。ただし何週間も続くならインデックスが破損している可能性があります。',
        },
      ],
      verdict: [
        '`SearchIndexer.exe` は、何もしていないパソコンを忙しくさせながら同時にディスクを数ギガバイト占める、数少ない項目の 1 つです。正しい順序は、まず Windows 11 の拡張モードをオフにし、次に検索しない大きなフォルダーを対象から外し、必要なら内容のインデックスを減らし、最後にインデックスを再構築することです。',
        '同じマシンで容量を使っている他の隠れた項目を見るには、Disk Mop の「ディスク解析」モジュールが `ProgramData` のような隠しフォルダーを含めてドライブをサイズ順に並べます。「スタートアップ管理」と「サービス管理」モジュールは、他に何がバックグラウンドで動いてマシンに負担をかけているかを 1 画面で示します。',
      ],
      ctaText: 'バックグラウンドの動作とディスクの蓄積を確認する',
    },
  },
};
