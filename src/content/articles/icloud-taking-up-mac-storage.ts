import type { Article } from '../types';

export const icloudTakingUpMacStorage: Article = {
  slug: 'icloud-taking-up-mac-storage',
  type: 'guide',
  category: 'macOS',
  date: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'iCloud Mac Diskimi Neden Dolduruyor? Optimize Etme Ayarı Nasıl Çalışır',
      metaDescription:
        'iCloud depolaması ile Mac disk alanı iki ayrı şeydir. "Mac Depolamasını Optimize Et" gerçekte ne yapar, neden bazen hiç yer açmaz ve diski dolduran klasik hata nedir?',
      subtitle: 'Bulutta Yer Var Ama Diskte Yok: Karışıklığın Sebebi',
      intro: [
        'Kısa cevap: iCloud depolama planınız (5 GB, 200 GB…) ile Mac\'inizin disk alanı birbirinden tamamen ayrıdır. iCloud Drive\'daki her dosyanın Mac\'inizde de bir kopyası olabilir; "Mac Depolamasını Optimize Et" ayarı bu yerel kopyaları yalnızca disk dolmaya başlayınca ve macOS uygun gördüğünde siler — istediğiniz anda değil.',
        'Bu yüzden "iCloud\'da 2 TB planım var ama Mac\'im dolu" durumu son derece yaygındır. Daha da kötüsü, sorunu çözmek için iCloud Drive\'ı kapatmak diski tamamen doldurur, çünkü macOS bulutta duran her şeyi geri indirir. Bu rehberde iki depolamanın nasıl ayrıldığını, optimize etme ayarının gerçekte ne yaptığını ve diski dolduran hatanın nasıl düzeltileceğini anlatıyoruz.',
      ],
      keyTakeaways: [
        'iCloud depolama planınız buluttaki alandır; Mac\'inizin SSD\'si ayrı bir alandır. Birinde yer açmak diğerini etkilemez.',
        '"Mac Depolamasını Optimize Et" yerel kopyaları hemen silmez; yalnızca disk dolmaya başladığında ve macOS\'un seçtiği sırayla siler.',
        'iCloud Drive\'ı KAPATMAK diski doldurur: macOS buluttaki her şeyi yerele indirir. Kapatmadan önce disk alanınızı kontrol edin.',
        'iCloud Drive\'ın yerel klasörü `~/Library/Mobile Documents` altındadır ve Finder\'da normalde gizlidir.',
        'iCloud Drive\'dan bir dosyayı silmek onu TÜM cihazlarınızdan siler; yerelden kaldırmak istiyorsanız "Yerel Kopyayı Kaldır" seçeneğini kullanın.',
        'Masaüstü ve Belgeler klasörlerini iCloud\'a senkronlama seçeneği açıksa, bu klasörlerdeki her şey hem bulutta hem yerelde sayılır.',
      ],
      howTo: {
        name: 'iCloud\'un kapladığı Mac disk alanını azaltma',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Gerçek durumu görün',
            text: 'Elma menüsü > Sistem Ayarları > Genel > Depolama yolunu açın. Buradaki çubuk Mac diskinizi gösterir. iCloud planınızın doluluğu ise Sistem Ayarları > Apple Hesabı > iCloud altındadır. İki rakamı karıştırmayın.',
          },
          {
            name: 'Fotoğraflar için optimize etmeyi açın',
            text: 'Fotoğraflar uygulamasını açın, Ayarlar > iCloud sekmesinde "Mac Depolamasını Optimize Et" seçeneğini işaretleyin. Tam çözünürlüklü orijinaller bulutta kalır, Mac\'te küçültülmüş sürümler tutulur.',
          },
          {
            name: 'iCloud Drive için optimize etmeyi açın',
            text: 'Sistem Ayarları > Apple Hesabı > iCloud > iCloud Drive bölümünde "Mac Depolamasını Optimize Et" seçeneğini açın. Bu, disk dolmaya başladığında yerel kopyaların kaldırılmasına izin verir.',
          },
          {
            name: 'Büyük dosyaların yerel kopyasını elle kaldırın',
            text: 'Finder\'da iCloud Drive içindeki büyük bir dosyaya veya klasöre sağ tıklayıp "Yerel Kopyayı Kaldır" (Remove Download) seçeneğini kullanın. Dosya bulutta kalır, yanında bulut simgesi görünür ve gerektiğinde tekrar iner.',
          },
          {
            name: 'Masaüstü ve Belgeler senkronunu gözden geçirin',
            text: 'Aynı iCloud Drive ekranında "Masaüstü ve Belgeler Klasörleri" seçeneğini kontrol edin. Açıksa bu klasörler buluta senkronlanır; kapatmadan önce dosyaların nereye taşınacağını okuyun, aksi hâlde beklenmedik yerlere gidebilirler.',
          },
        ],
      },
      sections: [
        {
          title: 'İki Ayrı Depolama: Karışıklığın Kaynağı',
          content: [
            'iCloud depolama planı, Apple\'ın sunucularında satın aldığınız alandır: ücretsiz 5 GB, ardından 50 GB, 200 GB veya 2 TB. Mac\'inizin diski ise cihazın içindeki SSD\'dir. Bunlar birbirinden bağımsızdır ve birinde yapılan temizlik diğerini doğrudan etkilemez.',
            'Karışıklık şuradan çıkar: iCloud Drive\'a koyduğunuz bir dosya varsayılan olarak hem bulutta hem de Mac\'inizde durur. Yani 100 GB\'lık bir arşivi iCloud\'a taşımak, o dosyaları Mac\'ten çıkarmaz — yalnızca ikinci bir kopya oluşturur. Bulut planınız dolmaz ama diskiniz de boşalmaz.',
            'Sistem Ayarları > Genel > Depolama ekranında gördüğünüz "Belgeler" veya "iCloud Drive" kalemi işte bu yerel kopyalardır. Buluttaki toplamınızı görmek için Sistem Ayarları > Apple Hesabı > iCloud bölümüne bakmanız gerekir; iki ekran iki farklı şeyi ölçer.',
          ],
        },
        {
          title: '"Mac Depolamasını Optimize Et" Gerçekte Ne Yapar?',
          content: [
            'Bu ayar açıkken macOS, iCloud Drive\'daki dosyaların yerel kopyalarını gerektiğinde kaldırabilir. Dosya Finder\'da görünmeye devam eder, yanında küçük bir bulut simgesi belirir ve çift tıkladığınızda yeniden inerek açılır. Bu yüzden dosyalarınızı kaybetmezsiniz.',
            'Ama önemli bir ayrıntı var: macOS bu temizliği hemen yapmaz. Ayar bir izindir, bir komut değil. Sistem yalnızca disk gerçekten dolmaya başladığında ve kendi seçtiği sırayla (en uzun süredir açılmayan dosyalardan başlayarak) yerel kopyaları kaldırır. Bu yüzden "optimize etmeyi açtım ama hiçbir şey olmadı" son derece yaygın bir gözlemdir.',
            'Hemen yer açmak istiyorsanız elle müdahale edin: Finder\'da büyük bir klasöre sağ tıklayıp "Yerel Kopyayı Kaldır" seçeneğini kullanın. Bu, o klasörün yerel kopyasını anında siler ve dosyalar bulutta güvende kalır. Video arşivleri, eski proje klasörleri ve tarama dosyaları için ideal bir yöntemdir.',
          ],
        },
        {
          title: 'iCloud Fotoğraflar: Orijinaller Nerede Duruyor?',
          content: [
            'iCloud Fotoğraflar açıkken kitaplığınızın tamamı buluta yüklenir. Fotoğraflar uygulamasının Ayarlar > iCloud sekmesinde iki seçenek arasında seçim yaparsınız: "Orijinalleri Bu Mac\'e İndir" veya "Mac Depolamasını Optimize Et".',
            'Birincisi tam çözünürlüklü her fotoğraf ve videoyu Mac\'te tutar. Ana makineniz buysa ve yedekleme yapıyorsanız mantıklıdır, ama 500 GB\'lık bir kitaplık 500 GB disk demektir. İkincisi ise orijinalleri bulutta bırakıp Mac\'te ekran için yeterli küçültülmüş sürümleri tutar; bir fotoğrafı düzenlemek veya dışa aktarmak istediğinizde orijinal o an iner.',
            'Dikkat edilecek nokta: optimize etme açıkken bile Fotoğraflar kitaplığı sıfır yer kaplamaz. Küçük resimler, önizlemeler ve son çekilen fotoğrafların yerel kopyaları birikir. 200 GB\'lık bir kitaplık optimize edilmiş hâlde bile 20-40 GB tutabilir. Bu normaldir ve bir hata değildir.',
          ],
        },
        {
          title: 'Diski Dolduran Klasik Hata',
          content: [
            'En sık yapılan hata şudur: disk dolunca "iCloud yüzünden olmalı" diye düşünüp iCloud Drive\'ı kapatmak. Bu tam tersini yapar. iCloud Drive kapatıldığında macOS, bulutta duran ve yerelde olmayan her dosyayı Mac\'e indirmeyi teklif eder; kabul ederseniz zaten dolu olan disk tamamen dolar, reddederseniz o dosyalara Mac\'ten erişemezsiniz.',
            'Doğru sıra şudur: önce optimize etmeyi açın, sonra büyük klasörlerin yerel kopyalarını elle kaldırın, en son gerçekten gereksiz olanları iCloud\'dan silin. Silme adımında dikkatli olun — iCloud Drive\'dan silinen dosya iPhone, iPad ve diğer Mac\'lerinizden de silinir. Yalnızca yerelden kaldırmak istiyorsanız silme değil, "Yerel Kopyayı Kaldır" seçeneğini kullanın.',
            'iCloud\'un yerel klasörü `~/Library/Mobile Documents` altındadır ve Finder\'da varsayılan olarak gizlidir; bu yüzden klasör boyutu ölçen araçlarda beklenmedik yerlerde görünür. Disk Mop\'un Disk Analizi modülü gizli klasörler dâhil olmak üzere alanı klasör klasör dökerek bu tür saklı birikintileri ortaya çıkarır; Büyük Dosyalar modülü de hangi tek dosyaların yerel kopyalarının en pahalı olduğunu gösterir.',
          ],
        },
      ],
      faq: [
        {
          question: 'iCloud\'dan dosya silersem Mac\'imden de silinir mi?',
          answer:
            'Evet. iCloud Drive senkronize bir klasördür: bir cihazdan sildiğiniz dosya tüm cihazlardan silinir ve 30 gün boyunca iCloud\'un "Son Silinenler" bölümünde kalır. Yalnızca yerel kopyayı kaldırmak istiyorsanız sağ tık > "Yerel Kopyayı Kaldır" kullanın.',
        },
        {
          question: 'Optimize etmeyi açtım ama disk hâlâ dolu, neden?',
          answer:
            'Çünkü bu ayar bir izin, anında çalışan bir komut değil. macOS yerel kopyaları yalnızca disk baskı altına girdiğinde kaldırır. Hemen sonuç almak için büyük klasörlerin yerel kopyasını Finder\'dan elle kaldırın.',
        },
        {
          question: 'Depolama ekranındaki "Sistem Verileri" iCloud ile ilgili mi?',
          answer:
            'Kısmen. Bu kalem birçok şeyi kapsar; iCloud önbellekleri ve senkronizasyon geçici dosyaları da içindedir. Ancak Time Machine yerel anlık görüntüleri ve sistem günlükleri de aynı kalemde sayılır, bu yüzden tek başına iCloud\'a bakarak açıklanamaz.',
        },
        {
          question: 'Masaüstü ve Belgeler senkronunu kapatmalı mıyım?',
          answer:
            'Zorunlu değil. Açık olması yedekleme açısından iyidir. Ancak kapatırken dikkatli olun: macOS bu klasörlerin içeriğini iCloud Drive altında bırakır ve yerel Masaüstünüz boş görünebilir. Kapatmadan önce ekrandaki açıklamayı mutlaka okuyun.',
        },
      ],
      verdict: [
        'iCloud ile Mac diski iki ayrı hesap: bulutta yer açmak diskinizi rahatlatmaz, diski temizlemek de bulut planınızı boşaltmaz. Disk için doğru sıra optimize etmeyi açmak, büyük klasörlerin yerel kopyasını elle kaldırmak ve iCloud Drive\'ı asla "çözüm olsun diye" kapatmamaktır.',
        'Geriye kalan yerel birikintiyi görmek için Disk Mop\'un Disk Analizi ve Büyük Dosyalar modülleri gizli klasörler dâhil tüm diski boyut sırasına dizer; Disk Haritası görünümü de hangi klasörün gerçekte ne kadar yer kapladığını tek bakışta gösterir.',
      ],
      ctaText: 'Mac\'inizde yeri gerçekte ne kaplıyor, görün',
    },
    en: {
      title: 'Why iCloud Fills Up Your Mac Disk: How Optimize Storage Really Works',
      metaDescription:
        'iCloud storage and Mac disk space are two different things. Here is what "Optimize Mac Storage" actually does, why it sometimes frees nothing, and the classic mistake that fills the disk.',
      subtitle: 'Room in the Cloud, None on the Disk: Where the Confusion Starts',
      intro: [
        'Short answer: your iCloud storage plan (5 GB, 200 GB…) and your Mac\'s disk space are entirely separate. Every file in iCloud Drive can also have a local copy on your Mac; the "Optimize Mac Storage" setting removes those local copies only when the disk starts filling up and only in the order macOS chooses — not when you ask.',
        'That is why "I have a 2 TB iCloud plan but my Mac is full" is so common. Worse, the instinctive fix — turning iCloud Drive off — fills the disk completely, because macOS downloads everything stored in the cloud. This guide explains how the two kinds of storage differ, what the optimize setting really does, and how to undo the mistake that fills the disk.',
      ],
      keyTakeaways: [
        'Your iCloud plan is space in the cloud; your Mac\'s SSD is separate space. Freeing one does not free the other.',
        '"Optimize Mac Storage" does not remove local copies immediately; it does so only under disk pressure, in an order macOS picks.',
        'Turning iCloud Drive OFF fills the disk: macOS downloads everything from the cloud. Check your free space before you do it.',
        'The local iCloud Drive folder lives at `~/Library/Mobile Documents` and is hidden in Finder by default.',
        'Deleting a file from iCloud Drive deletes it from ALL your devices; to free space locally, use "Remove Download" instead.',
        'If Desktop and Documents folder syncing is on, everything in those folders counts both in the cloud and locally.',
      ],
      howTo: {
        name: 'Reduce the Mac disk space taken by iCloud',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'See the real picture',
            text: 'Open Apple menu > System Settings > General > Storage. That bar shows your Mac disk. Your iCloud plan usage is under System Settings > Apple Account > iCloud. Do not mix the two numbers up.',
          },
          {
            name: 'Turn on optimization for Photos',
            text: 'Open the Photos app, go to Settings > iCloud and select "Optimize Mac Storage". Full-resolution originals stay in the cloud while your Mac keeps smaller versions.',
          },
          {
            name: 'Turn on optimization for iCloud Drive',
            text: 'In System Settings > Apple Account > iCloud > iCloud Drive, enable "Optimize Mac Storage". This lets macOS evict local copies once the disk starts filling.',
          },
          {
            name: 'Remove local copies of large items by hand',
            text: 'In Finder, right-click a large file or folder inside iCloud Drive and choose "Remove Download". The item stays in the cloud, shows a cloud icon, and downloads again when you need it.',
          },
          {
            name: 'Review Desktop and Documents syncing',
            text: 'On the same iCloud Drive screen, check "Desktop & Documents Folders". If it is on, those folders sync to the cloud; read the on-screen explanation before turning it off, or files can end up somewhere you did not expect.',
          },
        ],
      },
      sections: [
        {
          title: 'Two Separate Storages: Where the Confusion Begins',
          content: [
            'An iCloud storage plan is space you buy on Apple\'s servers: 5 GB free, then 50 GB, 200 GB or 2 TB. Your Mac\'s disk is the SSD inside the machine. They are independent, and cleaning one does not directly affect the other.',
            'The confusion comes from this: a file you put in iCloud Drive sits both in the cloud and on your Mac by default. Moving a 100 GB archive to iCloud does not take those files off the Mac — it just creates a second copy. Your cloud plan does not overflow, but your disk does not empty either.',
            'The "Documents" or "iCloud Drive" line you see in System Settings > General > Storage is exactly those local copies. To see your cloud total you have to look at System Settings > Apple Account > iCloud; the two screens measure two different things.',
          ],
        },
        {
          title: 'What "Optimize Mac Storage" Actually Does',
          content: [
            'With the setting on, macOS is allowed to remove local copies of iCloud Drive files when it needs to. The file still appears in Finder with a small cloud icon next to it, and double-clicking downloads it again and opens it. That is why you do not lose anything.',
            'But there is an important detail: macOS does not do this immediately. The setting is a permission, not a command. The system evicts local copies only once the disk genuinely starts filling, and in an order it chooses itself, starting with files you have not opened in the longest time. That is why "I turned on optimization and nothing happened" is such a common observation.',
            'If you want space now, act by hand: right-click a large folder in Finder and choose "Remove Download". That deletes its local copy immediately while the files stay safe in the cloud. It is ideal for video archives, old project folders and scan files.',
          ],
        },
        {
          title: 'iCloud Photos: Where Do the Originals Live?',
          content: [
            'With iCloud Photos on, your whole library uploads to the cloud. In the Photos app under Settings > iCloud you choose between two options: "Download Originals to this Mac" or "Optimize Mac Storage".',
            'The first keeps every full-resolution photo and video on the Mac. That makes sense if this is your main machine and you back it up, but a 500 GB library means 500 GB of disk. The second leaves originals in the cloud and keeps downsized versions locally that are good enough for the screen; when you edit or export a photo, the original downloads at that moment.',
            'One thing to note: even with optimization on, the Photos library does not shrink to zero. Thumbnails, previews and local copies of recent shots accumulate. A 200 GB library can still take 20-40 GB in its optimized state. That is normal, not a fault.',
          ],
        },
        {
          title: 'The Classic Mistake That Fills the Disk',
          content: [
            'The most common mistake is this: the disk fills, you assume "it must be iCloud", and you turn iCloud Drive off. That does the opposite. When iCloud Drive is disabled, macOS offers to download every file that lives in the cloud but not locally; accept and your already-full disk fills completely, decline and you lose access to those files from the Mac.',
            'The right order is: turn optimization on, then remove local copies of large folders by hand, and only then delete what is genuinely unnecessary from iCloud. Be careful with that last step — a file deleted from iCloud Drive is deleted from your iPhone, iPad and other Macs too. To free space locally only, use "Remove Download" rather than delete.',
            'The local iCloud folder sits under `~/Library/Mobile Documents` and is hidden in Finder by default, which is why it shows up in unexpected places in folder-size tools. Disk Mop\'s Disk Analysis module walks the disk folder by folder including hidden ones, surfacing exactly this kind of buried accumulation, while the Large Files module shows which individual local copies are the most expensive.',
          ],
        },
      ],
      faq: [
        {
          question: 'If I delete a file from iCloud, does it disappear from my Mac?',
          answer:
            'Yes. iCloud Drive is a synced folder: a file you delete on one device is deleted everywhere and stays in iCloud\'s Recently Deleted for 30 days. To remove only the local copy, right-click and choose "Remove Download".',
        },
        {
          question: 'I turned on optimization but the disk is still full. Why?',
          answer:
            'Because the setting is a permission, not an instant command. macOS evicts local copies only when the disk comes under pressure. For an immediate result, remove downloads of large folders manually in Finder.',
        },
        {
          question: 'Is "System Data" in the storage screen related to iCloud?',
          answer:
            'Partly. That line covers many things, including iCloud caches and sync temporary files. But Time Machine local snapshots and system logs count there too, so it cannot be explained by iCloud alone.',
        },
        {
          question: 'Should I turn off Desktop and Documents syncing?',
          answer:
            'Not necessarily. Having it on is good for backup. Be careful when turning it off though: macOS leaves the contents inside iCloud Drive and your local Desktop can look empty. Always read the on-screen explanation before you confirm.',
        },
      ],
      verdict: [
        'iCloud and your Mac disk are two separate accounts: freeing cloud space does not relieve the disk, and cleaning the disk does not empty your plan. For the disk, the right order is to enable optimization, remove downloads of large folders by hand, and never turn iCloud Drive off "to fix it".',
        'To see what local accumulation is left, Disk Mop\'s Disk Analysis and Large Files modules sort the whole disk by size including hidden folders, and the Disk Treemap view shows at a glance which folder is really taking the space.',
      ],
      ctaText: 'See what is actually using space on your Mac',
    },
    de: {
      title: 'Warum iCloud die Mac-Festplatte füllt: So funktioniert "Speicher optimieren"',
      metaDescription:
        'iCloud-Speicher und Mac-Festplattenplatz sind zwei verschiedene Dinge. Was "Mac-Speicher optimieren" wirklich tut, warum es manchmal nichts freigibt und welcher Fehler die Platte füllt.',
      subtitle: 'Platz in der Cloud, keiner auf der Platte: Woher die Verwirrung kommt',
      intro: [
        'Kurze Antwort: Ihr iCloud-Speicherplan (5 GB, 200 GB …) und der Festplattenplatz Ihres Macs sind völlig getrennt. Jede Datei in iCloud Drive kann zusätzlich eine lokale Kopie auf dem Mac haben; die Einstellung "Mac-Speicher optimieren" entfernt diese lokalen Kopien erst, wenn die Platte voll zu werden droht — und in der Reihenfolge, die macOS wählt, nicht auf Zuruf.',
        'Deshalb ist "Ich habe einen 2-TB-iCloud-Plan, aber mein Mac ist voll" so verbreitet. Schlimmer noch: Der intuitive Ausweg, iCloud Drive abzuschalten, füllt die Platte vollends, weil macOS alles aus der Cloud herunterlädt. Dieser Leitfaden erklärt den Unterschied der beiden Speicher, was die Optimierung tatsächlich bewirkt und wie sich der Fehler beheben lässt.',
      ],
      keyTakeaways: [
        'Ihr iCloud-Plan ist Platz in der Cloud; die SSD Ihres Macs ist ein davon getrennter Platz. Das eine freizugeben, gibt das andere nicht frei.',
        '"Mac-Speicher optimieren" entfernt lokale Kopien nicht sofort, sondern nur unter Speicherdruck und in der von macOS gewählten Reihenfolge.',
        'iCloud Drive ABZUSCHALTEN füllt die Platte: macOS lädt alles aus der Cloud herunter. Prüfen Sie vorher Ihren freien Speicher.',
        'Der lokale iCloud-Drive-Ordner liegt unter `~/Library/Mobile Documents` und ist im Finder standardmäßig ausgeblendet.',
        'Eine Datei aus iCloud Drive zu löschen entfernt sie von ALLEN Geräten; um nur lokal Platz zu schaffen, nutzen Sie "Download entfernen".',
        'Ist die Synchronisierung von Schreibtisch und Dokumenten aktiv, zählt deren Inhalt sowohl in der Cloud als auch lokal.',
      ],
      howTo: {
        name: 'Von iCloud belegten Mac-Speicher reduzieren',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Die tatsächliche Lage sehen',
            text: 'Öffnen Sie Apfelmenü > Systemeinstellungen > Allgemein > Speicher. Dieser Balken zeigt Ihre Mac-Festplatte. Die Belegung Ihres iCloud-Plans finden Sie unter Systemeinstellungen > Apple-Account > iCloud. Verwechseln Sie die beiden Zahlen nicht.',
          },
          {
            name: 'Optimierung für Fotos aktivieren',
            text: 'Öffnen Sie die App Fotos, gehen Sie zu Einstellungen > iCloud und wählen Sie "Mac-Speicher optimieren". Originale in voller Auflösung bleiben in der Cloud, der Mac behält kleinere Versionen.',
          },
          {
            name: 'Optimierung für iCloud Drive aktivieren',
            text: 'Aktivieren Sie unter Systemeinstellungen > Apple-Account > iCloud > iCloud Drive die Option "Mac-Speicher optimieren". Damit darf macOS lokale Kopien entfernen, sobald die Platte voll wird.',
          },
          {
            name: 'Lokale Kopien großer Objekte manuell entfernen',
            text: 'Klicken Sie im Finder mit der rechten Maustaste auf eine große Datei oder einen Ordner in iCloud Drive und wählen Sie "Download entfernen". Das Objekt bleibt in der Cloud, zeigt ein Wolkensymbol und wird bei Bedarf erneut geladen.',
          },
          {
            name: 'Synchronisierung von Schreibtisch und Dokumenten prüfen',
            text: 'Prüfen Sie im selben iCloud-Drive-Bereich die Option "Ordner „Schreibtisch" und „Dokumente"". Ist sie aktiv, werden diese Ordner synchronisiert; lesen Sie vor dem Abschalten den Hinweistext, sonst landen Dateien an unerwarteter Stelle.',
          },
        ],
      },
      sections: [
        {
          title: 'Zwei getrennte Speicher: Ursprung der Verwirrung',
          content: [
            'Ein iCloud-Speicherplan ist Platz, den Sie auf Apples Servern kaufen: 5 GB kostenlos, dann 50 GB, 200 GB oder 2 TB. Die Festplatte Ihres Macs ist die SSD im Gerät. Beide sind unabhängig, und das Aufräumen des einen wirkt sich nicht direkt auf das andere aus.',
            'Die Verwirrung entsteht so: Eine Datei, die Sie in iCloud Drive legen, liegt standardmäßig sowohl in der Cloud als auch auf dem Mac. Ein 100-GB-Archiv nach iCloud zu verschieben nimmt diese Dateien nicht vom Mac — es erzeugt lediglich eine zweite Kopie. Ihr Cloud-Plan läuft nicht über, aber Ihre Platte wird auch nicht leerer.',
            'Der Posten "Dokumente" oder "iCloud Drive" unter Systemeinstellungen > Allgemein > Speicher sind genau diese lokalen Kopien. Für die Cloud-Summe müssen Sie unter Systemeinstellungen > Apple-Account > iCloud nachsehen; die beiden Bildschirme messen zwei verschiedene Dinge.',
          ],
        },
        {
          title: 'Was "Mac-Speicher optimieren" wirklich tut',
          content: [
            'Ist die Einstellung aktiv, darf macOS lokale Kopien von iCloud-Drive-Dateien entfernen, wenn es nötig wird. Die Datei bleibt im Finder sichtbar, bekommt ein kleines Wolkensymbol, und ein Doppelklick lädt sie erneut und öffnet sie. Deshalb geht nichts verloren.',
            'Wichtig ist jedoch: macOS tut das nicht sofort. Die Einstellung ist eine Erlaubnis, kein Befehl. Das System entfernt lokale Kopien erst, wenn die Platte tatsächlich voll wird, und in einer selbst gewählten Reihenfolge, beginnend bei den am längsten nicht geöffneten Dateien. Daher ist "Ich habe die Optimierung eingeschaltet und es passiert nichts" eine sehr häufige Beobachtung.',
            'Wollen Sie sofort Platz, greifen Sie manuell ein: Rechtsklick auf einen großen Ordner im Finder, dann "Download entfernen". Das löscht dessen lokale Kopie sofort, während die Dateien sicher in der Cloud bleiben. Ideal für Videoarchive, alte Projektordner und Scans.',
          ],
        },
        {
          title: 'iCloud-Fotos: Wo liegen die Originale?',
          content: [
            'Ist iCloud-Fotos aktiv, wird Ihre gesamte Mediathek in die Cloud geladen. In der App Fotos wählen Sie unter Einstellungen > iCloud zwischen zwei Optionen: "Originale auf diesen Mac laden" oder "Mac-Speicher optimieren".',
            'Die erste behält jedes Foto und Video in voller Auflösung auf dem Mac. Das ist sinnvoll, wenn dies Ihr Hauptgerät ist und Sie es sichern — eine 500-GB-Mediathek bedeutet dann aber 500 GB Festplatte. Die zweite lässt die Originale in der Cloud und behält lokal verkleinerte Versionen, die für den Bildschirm genügen; beim Bearbeiten oder Exportieren wird das Original in dem Moment geladen.',
            'Zu beachten: Auch mit Optimierung schrumpft die Fotomediathek nicht auf null. Miniaturen, Vorschauen und lokale Kopien neuer Aufnahmen sammeln sich an. Eine 200-GB-Mediathek kann optimiert immer noch 20-40 GB belegen. Das ist normal und kein Fehler.',
          ],
        },
        {
          title: 'Der klassische Fehler, der die Platte füllt',
          content: [
            'Der häufigste Fehler: Die Platte ist voll, man vermutet "das muss iCloud sein" und schaltet iCloud Drive ab. Das bewirkt das Gegenteil. Beim Deaktivieren bietet macOS an, jede Datei herunterzuladen, die in der Cloud, aber nicht lokal liegt; nehmen Sie an, ist die ohnehin volle Platte endgültig voll, lehnen Sie ab, verlieren Sie den Zugriff vom Mac aus.',
            'Die richtige Reihenfolge lautet: Optimierung einschalten, dann lokale Kopien großer Ordner manuell entfernen, und erst zuletzt wirklich Überflüssiges aus iCloud löschen. Beim letzten Schritt Vorsicht — eine aus iCloud Drive gelöschte Datei verschwindet auch von iPhone, iPad und anderen Macs. Um nur lokal Platz zu schaffen, nutzen Sie "Download entfernen" statt Löschen.',
            'Der lokale iCloud-Ordner liegt unter `~/Library/Mobile Documents` und ist im Finder standardmäßig ausgeblendet; deshalb taucht er in Werkzeugen, die Ordnergrößen messen, an unerwarteter Stelle auf. Das Modul Festplattenanalyse von Disk Mop durchläuft die Platte Ordner für Ordner samt versteckter Verzeichnisse und legt genau solche Ansammlungen offen, während das Modul Große Dateien zeigt, welche einzelnen lokalen Kopien am teuersten sind.',
          ],
        },
      ],
      faq: [
        {
          question: 'Verschwindet eine aus iCloud gelöschte Datei auch vom Mac?',
          answer:
            'Ja. iCloud Drive ist ein synchronisierter Ordner: Was Sie auf einem Gerät löschen, ist überall gelöscht und bleibt 30 Tage in "Zuletzt gelöscht". Um nur die lokale Kopie zu entfernen, Rechtsklick und "Download entfernen" wählen.',
        },
        {
          question: 'Ich habe optimiert, die Platte ist trotzdem voll. Warum?',
          answer:
            'Weil die Einstellung eine Erlaubnis ist, kein sofort wirkender Befehl. macOS entfernt lokale Kopien erst unter Speicherdruck. Für ein sofortiges Ergebnis entfernen Sie die Downloads großer Ordner manuell im Finder.',
        },
        {
          question: 'Hängen die "Systemdaten" im Speicher-Bildschirm mit iCloud zusammen?',
          answer:
            'Teilweise. Dieser Posten umfasst vieles, darunter iCloud-Caches und temporäre Synchronisationsdateien. Aber auch lokale Time-Machine-Schnappschüsse und Systemprotokolle zählen dorthin, er lässt sich also nicht allein durch iCloud erklären.',
        },
        {
          question: 'Sollte ich die Synchronisierung von Schreibtisch und Dokumenten abschalten?',
          answer:
            'Nicht zwingend. Aktiviert ist sie gut für die Sicherung. Beim Abschalten aber aufpassen: macOS belässt die Inhalte in iCloud Drive, und Ihr lokaler Schreibtisch kann leer wirken. Lesen Sie vor dem Bestätigen unbedingt den Hinweistext.',
        },
      ],
      verdict: [
        'iCloud und Mac-Festplatte sind zwei getrennte Konten: Platz in der Cloud zu schaffen entlastet die Platte nicht, und die Platte zu leeren schafft keinen Cloud-Speicher. Für die Platte gilt: Optimierung einschalten, Downloads großer Ordner manuell entfernen und iCloud Drive niemals "zur Lösung" abschalten.',
        'Um zu sehen, was lokal übrig bleibt, sortieren die Module Festplattenanalyse und Große Dateien von Disk Mop die gesamte Platte nach Größe einschließlich versteckter Ordner, und die Ansicht Disk Treemap zeigt auf einen Blick, welcher Ordner den Platz wirklich belegt.',
      ],
      ctaText: 'Sehen Sie, was auf Ihrem Mac wirklich Platz belegt',
    },
    fr: {
      title: 'Pourquoi iCloud remplit le disque du Mac : comment fonctionne l\'optimisation',
      metaDescription:
        'Le stockage iCloud et l\'espace disque du Mac sont deux choses différentes. Ce que fait vraiment « Optimiser le stockage du Mac », pourquoi il ne libère parfois rien, et l\'erreur qui remplit le disque.',
      subtitle: 'De la place dans le nuage, aucune sur le disque',
      intro: [
        'Réponse courte : votre forfait iCloud (5 Go, 200 Go…) et l\'espace disque de votre Mac sont totalement distincts. Chaque fichier d\'iCloud Drive peut aussi avoir une copie locale sur le Mac ; le réglage « Optimiser le stockage du Mac » ne retire ces copies que lorsque le disque commence à se remplir, et dans l\'ordre choisi par macOS — pas à la demande.',
        'C\'est pourquoi « j\'ai un forfait iCloud de 2 To mais mon Mac est plein » revient si souvent. Pire, le réflexe consistant à désactiver iCloud Drive remplit le disque complètement, car macOS retélécharge tout ce qui est dans le nuage. Ce guide explique la différence entre les deux stockages, ce que fait réellement l\'optimisation et comment corriger l\'erreur.',
      ],
      keyTakeaways: [
        'Votre forfait iCloud est de l\'espace dans le nuage ; le SSD de votre Mac est un espace distinct. Libérer l\'un ne libère pas l\'autre.',
        '« Optimiser le stockage du Mac » ne supprime pas les copies locales immédiatement : seulement sous pression disque, dans l\'ordre choisi par macOS.',
        'DÉSACTIVER iCloud Drive remplit le disque : macOS télécharge tout depuis le nuage. Vérifiez votre espace libre avant.',
        'Le dossier local d\'iCloud Drive se trouve dans `~/Library/Mobile Documents` et reste masqué par défaut dans le Finder.',
        'Supprimer un fichier d\'iCloud Drive le supprime de TOUS vos appareils ; pour libérer localement, utilisez « Supprimer le téléchargement ».',
        'Si la synchronisation du Bureau et des Documents est active, leur contenu compte à la fois dans le nuage et en local.',
      ],
      howTo: {
        name: 'Réduire l\'espace disque Mac occupé par iCloud',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Voir la situation réelle',
            text: 'Ouvrez le menu Pomme > Réglages Système > Général > Stockage. Cette barre correspond au disque du Mac. L\'occupation de votre forfait iCloud se trouve dans Réglages Système > Compte Apple > iCloud. Ne confondez pas les deux chiffres.',
          },
          {
            name: 'Activer l\'optimisation pour Photos',
            text: 'Ouvrez l\'app Photos, allez dans Réglages > iCloud et choisissez « Optimiser le stockage du Mac ». Les originaux en pleine résolution restent dans le nuage, le Mac conserve des versions réduites.',
          },
          {
            name: 'Activer l\'optimisation pour iCloud Drive',
            text: 'Dans Réglages Système > Compte Apple > iCloud > iCloud Drive, activez « Optimiser le stockage du Mac ». macOS pourra alors retirer les copies locales quand le disque se remplit.',
          },
          {
            name: 'Retirer manuellement les copies locales volumineuses',
            text: 'Dans le Finder, faites un clic droit sur un gros fichier ou dossier d\'iCloud Drive et choisissez « Supprimer le téléchargement ». L\'élément reste dans le nuage, affiche une icône de nuage et se retélécharge au besoin.',
          },
          {
            name: 'Vérifier la synchronisation du Bureau et des Documents',
            text: 'Sur le même écran iCloud Drive, vérifiez « Dossiers Bureau et Documents ». Si l\'option est active, ces dossiers sont synchronisés ; lisez l\'explication à l\'écran avant de la désactiver, sinon des fichiers peuvent se retrouver ailleurs.',
          },
        ],
      },
      sections: [
        {
          title: 'Deux stockages distincts : l\'origine de la confusion',
          content: [
            'Un forfait iCloud, c\'est de l\'espace acheté sur les serveurs d\'Apple : 5 Go gratuits, puis 50 Go, 200 Go ou 2 To. Le disque de votre Mac, c\'est le SSD interne. Les deux sont indépendants et nettoyer l\'un n\'agit pas directement sur l\'autre.',
            'La confusion vient de là : un fichier placé dans iCloud Drive se trouve par défaut à la fois dans le nuage et sur le Mac. Déplacer une archive de 100 Go vers iCloud ne la retire pas du Mac — cela crée simplement une seconde copie. Votre forfait ne déborde pas, mais votre disque ne se vide pas non plus.',
            'La ligne « Documents » ou « iCloud Drive » visible dans Réglages Système > Général > Stockage correspond exactement à ces copies locales. Pour connaître le total dans le nuage, il faut regarder Réglages Système > Compte Apple > iCloud ; les deux écrans mesurent deux choses différentes.',
          ],
        },
        {
          title: 'Ce que fait réellement « Optimiser le stockage du Mac »',
          content: [
            'Quand le réglage est actif, macOS est autorisé à retirer les copies locales des fichiers iCloud Drive lorsqu\'il en a besoin. Le fichier reste visible dans le Finder avec une petite icône de nuage, et un double-clic le retélécharge puis l\'ouvre. C\'est pourquoi vous ne perdez rien.',
            'Un détail compte toutefois : macOS ne le fait pas immédiatement. Le réglage est une autorisation, pas une commande. Le système ne retire les copies locales que lorsque le disque se remplit réellement, et dans un ordre qu\'il choisit lui-même, en commençant par les fichiers ouverts le plus anciennement. D\'où l\'observation très fréquente : « j\'ai activé l\'optimisation et rien ne s\'est passé ».',
            'Si vous voulez de la place tout de suite, agissez à la main : clic droit sur un gros dossier dans le Finder, puis « Supprimer le téléchargement ». Cela efface immédiatement sa copie locale tandis que les fichiers restent en sécurité dans le nuage. Idéal pour les archives vidéo, les anciens dossiers de projet et les numérisations.',
          ],
        },
        {
          title: 'Photos iCloud : où sont les originaux ?',
          content: [
            'Avec Photos iCloud actif, toute votre photothèque est envoyée dans le nuage. Dans l\'app Photos, sous Réglages > iCloud, vous choisissez entre deux options : « Télécharger les originaux sur ce Mac » ou « Optimiser le stockage du Mac ».',
            'La première conserve chaque photo et vidéo en pleine résolution sur le Mac. C\'est logique s\'il s\'agit de votre machine principale et que vous la sauvegardez, mais une photothèque de 500 Go signifie 500 Go de disque. La seconde laisse les originaux dans le nuage et garde localement des versions réduites suffisantes pour l\'écran ; à l\'édition ou à l\'export, l\'original se télécharge à ce moment-là.',
            'À noter : même avec l\'optimisation, la photothèque ne tombe pas à zéro. Vignettes, aperçus et copies locales des prises récentes s\'accumulent. Une photothèque de 200 Go peut encore occuper 20 à 40 Go une fois optimisée. C\'est normal, ce n\'est pas un défaut.',
          ],
        },
        {
          title: 'L\'erreur classique qui remplit le disque',
          content: [
            'L\'erreur la plus fréquente est celle-ci : le disque se remplit, on suppose « ça doit être iCloud » et on désactive iCloud Drive. Cela produit l\'inverse. À la désactivation, macOS propose de télécharger tous les fichiers présents dans le nuage mais absents en local ; si vous acceptez, le disque déjà plein sature complètement, si vous refusez, vous perdez l\'accès depuis le Mac.',
            'Le bon ordre est : activer l\'optimisation, puis retirer manuellement les copies locales des gros dossiers, et seulement ensuite supprimer d\'iCloud ce qui est vraiment inutile. Attention à cette dernière étape — un fichier supprimé d\'iCloud Drive disparaît aussi de l\'iPhone, de l\'iPad et des autres Mac. Pour libérer uniquement en local, utilisez « Supprimer le téléchargement » plutôt que supprimer.',
            'Le dossier iCloud local se trouve dans `~/Library/Mobile Documents`, masqué par défaut dans le Finder, ce qui explique qu\'il apparaisse à des endroits inattendus dans les outils fondés sur la taille des dossiers. Le module Analyse de disque de Disk Mop parcourt le disque dossier par dossier, dossiers masqués compris, et met au jour exactement ce type d\'accumulation ; le module Gros fichiers montre quelles copies locales coûtent le plus cher.',
          ],
        },
      ],
      faq: [
        {
          question: 'Si je supprime un fichier d\'iCloud, disparaît-il de mon Mac ?',
          answer:
            'Oui. iCloud Drive est un dossier synchronisé : un fichier supprimé sur un appareil l\'est partout et reste 30 jours dans « Récemment supprimés ». Pour ne retirer que la copie locale, faites un clic droit et choisissez « Supprimer le téléchargement ».',
        },
        {
          question: 'J\'ai activé l\'optimisation mais le disque reste plein. Pourquoi ?',
          answer:
            'Parce que le réglage est une autorisation, pas une commande instantanée. macOS ne retire les copies locales que sous pression disque. Pour un résultat immédiat, supprimez manuellement les téléchargements des gros dossiers dans le Finder.',
        },
        {
          question: 'Les « Données système » de l\'écran Stockage viennent-elles d\'iCloud ?',
          answer:
            'En partie. Cette ligne recouvre beaucoup de choses, dont les caches iCloud et les fichiers temporaires de synchronisation. Mais les instantanés locaux de Time Machine et les journaux système y sont aussi comptés : iCloud n\'explique pas tout.',
        },
        {
          question: 'Faut-il désactiver la synchronisation du Bureau et des Documents ?',
          answer:
            'Pas nécessairement. L\'activer est bon pour la sauvegarde. Mais soyez prudent en la désactivant : macOS laisse le contenu dans iCloud Drive et votre Bureau local peut sembler vide. Lisez toujours l\'explication affichée avant de confirmer.',
        },
      ],
      verdict: [
        'iCloud et le disque du Mac sont deux comptes distincts : libérer le nuage ne soulage pas le disque, et nettoyer le disque ne vide pas le forfait. Pour le disque, le bon ordre est : activer l\'optimisation, retirer à la main les téléchargements des gros dossiers, et ne jamais désactiver iCloud Drive « pour régler le problème ».',
        'Pour voir ce qui reste accumulé en local, les modules Analyse de disque et Gros fichiers de Disk Mop classent tout le disque par taille, dossiers masqués compris, et la vue Disk Treemap montre d\'un coup d\'œil quel dossier occupe réellement la place.',
      ],
      ctaText: 'Voyez ce qui occupe vraiment la place sur votre Mac',
    },
    es: {
      title: 'Por qué iCloud llena el disco del Mac: cómo funciona «Optimizar almacenamiento»',
      metaDescription:
        'El almacenamiento de iCloud y el espacio del disco del Mac son cosas distintas. Qué hace realmente «Optimizar almacenamiento del Mac», por qué a veces no libera nada y el error que llena el disco.',
      subtitle: 'Espacio en la nube, ninguno en el disco',
      intro: [
        'Respuesta corta: tu plan de iCloud (5 GB, 200 GB…) y el espacio del disco de tu Mac son cosas completamente separadas. Cada archivo de iCloud Drive puede tener además una copia local en el Mac; el ajuste «Optimizar almacenamiento del Mac» elimina esas copias locales solo cuando el disco empieza a llenarse y en el orden que elige macOS, no cuando tú lo pides.',
        'Por eso es tan común el «tengo un plan de 2 TB en iCloud pero mi Mac está lleno». Y peor: el remedio instintivo, desactivar iCloud Drive, llena el disco del todo, porque macOS descarga todo lo que está en la nube. Esta guía explica en qué se diferencian ambos almacenamientos, qué hace de verdad la optimización y cómo deshacer ese error.',
      ],
      keyTakeaways: [
        'Tu plan de iCloud es espacio en la nube; el SSD del Mac es un espacio aparte. Liberar uno no libera el otro.',
        '«Optimizar almacenamiento del Mac» no borra las copias locales de inmediato: solo bajo presión de disco y en el orden que decide macOS.',
        'DESACTIVAR iCloud Drive llena el disco: macOS descarga todo desde la nube. Comprueba tu espacio libre antes de hacerlo.',
        'La carpeta local de iCloud Drive está en `~/Library/Mobile Documents` y el Finder la oculta por omisión.',
        'Borrar un archivo de iCloud Drive lo borra de TODOS tus dispositivos; para liberar espacio en local usa «Eliminar descarga».',
        'Si la sincronización de Escritorio y Documentos está activa, su contenido cuenta a la vez en la nube y en local.',
      ],
      howTo: {
        name: 'Reducir el espacio del Mac que ocupa iCloud',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ver la situación real',
            text: 'Abre menú Apple > Ajustes del Sistema > General > Almacenamiento. Esa barra corresponde al disco del Mac. El uso de tu plan de iCloud está en Ajustes del Sistema > Cuenta de Apple > iCloud. No mezcles ambas cifras.',
          },
          {
            name: 'Activar la optimización en Fotos',
            text: 'Abre la app Fotos, ve a Ajustes > iCloud y elige «Optimizar almacenamiento del Mac». Los originales a plena resolución se quedan en la nube y el Mac guarda versiones más pequeñas.',
          },
          {
            name: 'Activar la optimización en iCloud Drive',
            text: 'En Ajustes del Sistema > Cuenta de Apple > iCloud > iCloud Drive activa «Optimizar almacenamiento del Mac». Así macOS podrá retirar copias locales cuando el disco se llene.',
          },
          {
            name: 'Quitar a mano las copias locales grandes',
            text: 'En el Finder, haz clic derecho en un archivo o carpeta grande dentro de iCloud Drive y elige «Eliminar descarga». El elemento sigue en la nube, muestra un icono de nube y se descarga de nuevo cuando lo necesites.',
          },
          {
            name: 'Revisar la sincronización de Escritorio y Documentos',
            text: 'En la misma pantalla de iCloud Drive comprueba «Carpetas Escritorio y Documentos». Si está activa, esas carpetas se sincronizan; lee la explicación en pantalla antes de desactivarla o los archivos pueden acabar donde no esperabas.',
          },
        ],
      },
      sections: [
        {
          title: 'Dos almacenamientos separados: de dónde viene la confusión',
          content: [
            'Un plan de iCloud es espacio que compras en los servidores de Apple: 5 GB gratis y luego 50 GB, 200 GB o 2 TB. El disco de tu Mac es el SSD interno. Son independientes, y limpiar uno no afecta directamente al otro.',
            'La confusión nace de aquí: un archivo que pones en iCloud Drive está por omisión tanto en la nube como en tu Mac. Mover un archivo de 100 GB a iCloud no lo saca del Mac — solo crea una segunda copia. Tu plan no se desborda, pero tu disco tampoco se vacía.',
            'La línea «Documentos» o «iCloud Drive» que ves en Ajustes del Sistema > General > Almacenamiento son exactamente esas copias locales. Para ver tu total en la nube tienes que mirar Ajustes del Sistema > Cuenta de Apple > iCloud; las dos pantallas miden cosas distintas.',
          ],
        },
        {
          title: 'Qué hace realmente «Optimizar almacenamiento del Mac»',
          content: [
            'Con el ajuste activo, macOS tiene permiso para retirar copias locales de archivos de iCloud Drive cuando lo necesite. El archivo sigue apareciendo en el Finder con un pequeño icono de nube, y al hacer doble clic se descarga otra vez y se abre. Por eso no pierdes nada.',
            'Pero hay un detalle importante: macOS no lo hace de inmediato. El ajuste es un permiso, no una orden. El sistema retira copias locales solo cuando el disco empieza a llenarse de verdad, y en el orden que elige él mismo, empezando por los archivos que llevas más tiempo sin abrir. De ahí que «activé la optimización y no pasó nada» sea una observación tan frecuente.',
            'Si quieres espacio ya, actúa a mano: clic derecho en una carpeta grande del Finder y «Eliminar descarga». Eso borra su copia local al instante mientras los archivos siguen a salvo en la nube. Es ideal para archivos de vídeo, carpetas de proyectos antiguos y escaneos.',
          ],
        },
        {
          title: 'Fotos en iCloud: ¿dónde están los originales?',
          content: [
            'Con Fotos en iCloud activo, toda tu fototeca se sube a la nube. En la app Fotos, en Ajustes > iCloud, eliges entre dos opciones: «Descargar originales en este Mac» u «Optimizar almacenamiento del Mac».',
            'La primera mantiene cada foto y vídeo a plena resolución en el Mac. Tiene sentido si es tu equipo principal y haces copia de seguridad, pero una fototeca de 500 GB significa 500 GB de disco. La segunda deja los originales en la nube y guarda versiones reducidas suficientes para la pantalla; al editar o exportar una foto, el original se descarga en ese momento.',
            'Un matiz: incluso con la optimización activa, la fototeca no se queda en cero. Miniaturas, previsualizaciones y copias locales de las fotos recientes se acumulan. Una fototeca de 200 GB puede seguir ocupando 20-40 GB ya optimizada. Es normal, no es un fallo.',
          ],
        },
        {
          title: 'El error clásico que llena el disco',
          content: [
            'El error más habitual es este: el disco se llena, supones «tiene que ser iCloud» y desactivas iCloud Drive. Eso hace justo lo contrario. Al desactivarlo, macOS ofrece descargar cada archivo que está en la nube pero no en local; si aceptas, el disco ya lleno se satura del todo, y si rechazas, pierdes el acceso desde el Mac.',
            'El orden correcto es: activar la optimización, luego quitar a mano las copias locales de las carpetas grandes, y solo al final borrar de iCloud lo que de verdad sobra. Cuidado con ese último paso — un archivo borrado de iCloud Drive desaparece también de tu iPhone, iPad y otros Mac. Para liberar solo en local, usa «Eliminar descarga» en lugar de borrar.',
            'La carpeta local de iCloud está en `~/Library/Mobile Documents` y el Finder la oculta por omisión, por eso aparece en sitios inesperados en herramientas que miden tamaños de carpeta. El módulo Análisis de disco de Disk Mop recorre el disco carpeta por carpeta, incluidas las ocultas, y saca a la luz justo este tipo de acumulación; el módulo Archivos grandes muestra qué copias locales concretas salen más caras.',
          ],
        },
      ],
      faq: [
        {
          question: 'Si borro un archivo de iCloud, ¿desaparece también de mi Mac?',
          answer:
            'Sí. iCloud Drive es una carpeta sincronizada: un archivo que borras en un dispositivo se borra en todos y queda 30 días en «Eliminados recientemente». Para quitar solo la copia local, haz clic derecho y elige «Eliminar descarga».',
        },
        {
          question: 'Activé la optimización pero el disco sigue lleno, ¿por qué?',
          answer:
            'Porque el ajuste es un permiso, no una orden inmediata. macOS retira copias locales solo cuando el disco está bajo presión. Para un resultado inmediato, elimina a mano las descargas de las carpetas grandes desde el Finder.',
        },
        {
          question: '¿Los «Datos del sistema» de la pantalla de almacenamiento son de iCloud?',
          answer:
            'En parte. Esa línea abarca muchas cosas, entre ellas cachés de iCloud y archivos temporales de sincronización. Pero también cuentan ahí las instantáneas locales de Time Machine y los registros del sistema, así que no se explica solo con iCloud.',
        },
        {
          question: '¿Debo desactivar la sincronización de Escritorio y Documentos?',
          answer:
            'No necesariamente. Tenerla activa es bueno para las copias de seguridad. Pero ten cuidado al desactivarla: macOS deja el contenido dentro de iCloud Drive y tu Escritorio local puede verse vacío. Lee siempre la explicación en pantalla antes de confirmar.',
        },
      ],
      verdict: [
        'iCloud y el disco del Mac son dos cuentas distintas: liberar la nube no alivia el disco, y limpiar el disco no vacía tu plan. Para el disco, el orden correcto es activar la optimización, quitar a mano las descargas de las carpetas grandes y no desactivar nunca iCloud Drive «para arreglarlo».',
        'Para ver qué acumulación local queda, los módulos Análisis de disco y Archivos grandes de Disk Mop ordenan todo el disco por tamaño incluidas las carpetas ocultas, y la vista Disk Treemap muestra de un vistazo qué carpeta ocupa realmente el espacio.',
      ],
      ctaText: 'Descubre qué ocupa realmente el espacio en tu Mac',
    },
    it: {
      title: 'Perché iCloud riempie il disco del Mac: come funziona l\'ottimizzazione',
      metaDescription:
        'Lo spazio iCloud e lo spazio su disco del Mac sono due cose diverse. Cosa fa davvero «Ottimizza spazio Mac», perché a volte non libera nulla e qual è l\'errore che riempie il disco.',
      subtitle: 'Spazio nel cloud, nessuno sul disco',
      intro: [
        'Risposta breve: il tuo piano iCloud (5 GB, 200 GB…) e lo spazio su disco del Mac sono del tutto separati. Ogni file in iCloud Drive può avere anche una copia locale sul Mac; l\'impostazione «Ottimizza spazio Mac» rimuove quelle copie locali soltanto quando il disco inizia a riempirsi e nell\'ordine scelto da macOS, non su richiesta.',
        'Ecco perché «ho un piano iCloud da 2 TB ma il Mac è pieno» è così frequente. Peggio ancora, il rimedio istintivo — disattivare iCloud Drive — riempie del tutto il disco, perché macOS scarica tutto ciò che è nel cloud. Questa guida spiega la differenza tra i due archivi, cosa fa davvero l\'ottimizzazione e come rimediare all\'errore.',
      ],
      keyTakeaways: [
        'Il piano iCloud è spazio nel cloud; l\'SSD del Mac è spazio separato. Liberare l\'uno non libera l\'altro.',
        '«Ottimizza spazio Mac» non elimina subito le copie locali: lo fa solo quando il disco è sotto pressione, nell\'ordine deciso da macOS.',
        'DISATTIVARE iCloud Drive riempie il disco: macOS scarica tutto dal cloud. Controlla lo spazio libero prima di farlo.',
        'La cartella locale di iCloud Drive si trova in `~/Library/Mobile Documents` ed è nascosta nel Finder per impostazione predefinita.',
        'Eliminare un file da iCloud Drive lo elimina da TUTTI i dispositivi; per liberare spazio in locale usa «Rimuovi download».',
        'Se la sincronizzazione di Scrivania e Documenti è attiva, il loro contenuto conta sia nel cloud sia in locale.',
      ],
      howTo: {
        name: 'Ridurre lo spazio del Mac occupato da iCloud',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Vedere la situazione reale',
            text: 'Apri menu Apple > Impostazioni di Sistema > Generali > Spazio. Quella barra riguarda il disco del Mac. L\'occupazione del piano iCloud è in Impostazioni di Sistema > Account Apple > iCloud. Non confondere i due numeri.',
          },
          {
            name: 'Attivare l\'ottimizzazione per Foto',
            text: 'Apri l\'app Foto, vai in Impostazioni > iCloud e scegli «Ottimizza spazio Mac». Gli originali a piena risoluzione restano nel cloud, il Mac conserva versioni più piccole.',
          },
          {
            name: 'Attivare l\'ottimizzazione per iCloud Drive',
            text: 'In Impostazioni di Sistema > Account Apple > iCloud > iCloud Drive attiva «Ottimizza spazio Mac». Così macOS potrà rimuovere le copie locali quando il disco si riempie.',
          },
          {
            name: 'Rimuovere a mano le copie locali grandi',
            text: 'Nel Finder fai clic destro su un file o una cartella di grandi dimensioni dentro iCloud Drive e scegli «Rimuovi download». L\'elemento resta nel cloud, mostra l\'icona della nuvola e viene riscaricato all\'occorrenza.',
          },
          {
            name: 'Controllare la sincronizzazione di Scrivania e Documenti',
            text: 'Nella stessa schermata di iCloud Drive controlla «Cartelle Scrivania e Documenti». Se è attiva, quelle cartelle vengono sincronizzate; leggi la spiegazione a schermo prima di disattivarla, o i file potrebbero finire dove non ti aspetti.',
          },
        ],
      },
      sections: [
        {
          title: 'Due archivi separati: da dove nasce la confusione',
          content: [
            'Un piano iCloud è spazio che acquisti sui server di Apple: 5 GB gratuiti, poi 50 GB, 200 GB o 2 TB. Il disco del Mac è l\'SSD interno. Sono indipendenti e pulire l\'uno non incide direttamente sull\'altro.',
            'La confusione nasce da qui: un file che metti in iCloud Drive si trova per impostazione predefinita sia nel cloud sia sul Mac. Spostare un archivio da 100 GB su iCloud non lo toglie dal Mac — crea semplicemente una seconda copia. Il piano cloud non trabocca, ma il disco nemmeno si svuota.',
            'La voce «Documenti» o «iCloud Drive» che vedi in Impostazioni di Sistema > Generali > Spazio è esattamente quell\'insieme di copie locali. Per il totale nel cloud devi guardare Impostazioni di Sistema > Account Apple > iCloud; le due schermate misurano cose diverse.',
          ],
        },
        {
          title: 'Cosa fa davvero «Ottimizza spazio Mac»',
          content: [
            'Con l\'impostazione attiva, macOS è autorizzato a rimuovere le copie locali dei file di iCloud Drive quando serve. Il file resta visibile nel Finder con una piccola icona a forma di nuvola e un doppio clic lo riscarica e lo apre. Per questo non perdi nulla.',
            'C\'è però un dettaglio importante: macOS non lo fa subito. L\'impostazione è un permesso, non un comando. Il sistema rimuove le copie locali solo quando il disco inizia davvero a riempirsi, e nell\'ordine che sceglie da sé, partendo dai file non aperti da più tempo. Ecco perché «ho attivato l\'ottimizzazione e non è successo niente» è un\'osservazione comunissima.',
            'Se vuoi spazio subito, intervieni a mano: clic destro su una cartella grande nel Finder, poi «Rimuovi download». Questo elimina immediatamente la copia locale mentre i file restano al sicuro nel cloud. È ideale per archivi video, vecchie cartelle di progetto e scansioni.',
          ],
        },
        {
          title: 'Foto di iCloud: dove sono gli originali?',
          content: [
            'Con Foto di iCloud attivo, l\'intera libreria viene caricata nel cloud. Nell\'app Foto, in Impostazioni > iCloud, scegli tra due opzioni: «Scarica originali su questo Mac» oppure «Ottimizza spazio Mac».',
            'La prima mantiene ogni foto e video a piena risoluzione sul Mac. Ha senso se questa è la macchina principale e ne fai il backup, ma una libreria da 500 GB significa 500 GB di disco. La seconda lascia gli originali nel cloud e tiene in locale versioni ridotte sufficienti per lo schermo; quando modifichi o esporti una foto, l\'originale viene scaricato in quel momento.',
            'Da notare: anche con l\'ottimizzazione attiva la libreria Foto non scende a zero. Miniature, anteprime e copie locali degli scatti recenti si accumulano. Una libreria da 200 GB può occupare ancora 20-40 GB da ottimizzata. È normale, non è un difetto.',
          ],
        },
        {
          title: 'L\'errore classico che riempie il disco',
          content: [
            'L\'errore più comune è questo: il disco si riempie, si presume «sarà iCloud» e si disattiva iCloud Drive. L\'effetto è opposto. Alla disattivazione macOS propone di scaricare ogni file presente nel cloud ma non in locale; se accetti, il disco già pieno si satura del tutto, se rifiuti perdi l\'accesso da Mac.',
            'L\'ordine corretto è: attivare l\'ottimizzazione, poi rimuovere a mano le copie locali delle cartelle grandi e solo alla fine eliminare da iCloud ciò che è davvero superfluo. Attenzione a quest\'ultimo passaggio — un file eliminato da iCloud Drive sparisce anche da iPhone, iPad e altri Mac. Per liberare solo in locale usa «Rimuovi download» invece di eliminare.',
            'La cartella locale di iCloud si trova in `~/Library/Mobile Documents` ed è nascosta nel Finder per impostazione predefinita, per questo compare in punti inattesi negli strumenti basati sulla dimensione delle cartelle. Il modulo Analisi disco di Disk Mop percorre il disco cartella per cartella, incluse quelle nascoste, e porta alla luce proprio questo tipo di accumulo; il modulo File di grandi dimensioni mostra quali singole copie locali costano di più.',
          ],
        },
      ],
      faq: [
        {
          question: 'Se elimino un file da iCloud, sparisce anche dal Mac?',
          answer:
            'Sì. iCloud Drive è una cartella sincronizzata: un file eliminato su un dispositivo è eliminato ovunque e resta 30 giorni in «Eliminati di recente». Per rimuovere solo la copia locale, fai clic destro e scegli «Rimuovi download».',
        },
        {
          question: 'Ho attivato l\'ottimizzazione ma il disco è ancora pieno, perché?',
          answer:
            'Perché l\'impostazione è un permesso, non un comando immediato. macOS rimuove le copie locali solo quando il disco è sotto pressione. Per un risultato immediato, rimuovi manualmente i download delle cartelle grandi dal Finder.',
        },
        {
          question: 'I «Dati di sistema» nella schermata Spazio dipendono da iCloud?',
          answer:
            'In parte. Quella voce comprende molte cose, tra cui le cache di iCloud e i file temporanei di sincronizzazione. Ma vi rientrano anche le istantanee locali di Time Machine e i log di sistema, quindi non si spiega solo con iCloud.',
        },
        {
          question: 'Devo disattivare la sincronizzazione di Scrivania e Documenti?',
          answer:
            'Non necessariamente. Tenerla attiva è utile per il backup. Attenzione però a disattivarla: macOS lascia i contenuti dentro iCloud Drive e la Scrivania locale può apparire vuota. Leggi sempre la spiegazione a schermo prima di confermare.',
        },
      ],
      verdict: [
        'iCloud e il disco del Mac sono due conti separati: liberare il cloud non alleggerisce il disco e pulire il disco non svuota il piano. Per il disco l\'ordine giusto è attivare l\'ottimizzazione, rimuovere a mano i download delle cartelle grandi e non disattivare mai iCloud Drive «per risolvere».',
        'Per vedere quale accumulo locale resta, i moduli Analisi disco e File di grandi dimensioni di Disk Mop ordinano l\'intero disco per dimensione, cartelle nascoste comprese, e la vista Disk Treemap mostra a colpo d\'occhio quale cartella occupa davvero lo spazio.',
      ],
      ctaText: 'Scopri cosa occupa davvero spazio sul tuo Mac',
    },
    pt: {
      title: 'Por que o iCloud enche o disco do Mac: como funciona a otimização',
      metaDescription:
        'O armazenamento do iCloud e o espaço em disco do Mac são coisas diferentes. O que «Otimizar armazenamento do Mac» realmente faz, por que às vezes não libera nada e o erro que enche o disco.',
      subtitle: 'Espaço na nuvem, nenhum no disco',
      intro: [
        'Resposta curta: o seu plano do iCloud (5 GB, 200 GB…) e o espaço em disco do Mac são totalmente separados. Cada arquivo no iCloud Drive pode ter também uma cópia local no Mac; o ajuste «Otimizar armazenamento do Mac» remove essas cópias locais apenas quando o disco começa a encher e na ordem que o macOS escolhe, não quando você pede.',
        'Por isso «tenho um plano de 2 TB no iCloud mas o Mac está cheio» é tão comum. Pior ainda, o remédio instintivo — desativar o iCloud Drive — enche o disco por completo, porque o macOS baixa tudo o que está na nuvem. Este guia explica a diferença entre os dois armazenamentos, o que a otimização realmente faz e como corrigir esse erro.',
      ],
      keyTakeaways: [
        'Seu plano do iCloud é espaço na nuvem; o SSD do Mac é um espaço separado. Liberar um não libera o outro.',
        '«Otimizar armazenamento do Mac» não apaga as cópias locais na hora: só sob pressão de disco e na ordem que o macOS decide.',
        'DESATIVAR o iCloud Drive enche o disco: o macOS baixa tudo da nuvem. Confira seu espaço livre antes.',
        'A pasta local do iCloud Drive fica em `~/Library/Mobile Documents` e o Finder a esconde por padrão.',
        'Apagar um arquivo do iCloud Drive apaga de TODOS os seus dispositivos; para liberar espaço local use «Remover download».',
        'Se a sincronização de Mesa e Documentos estiver ligada, o conteúdo dessas pastas conta tanto na nuvem quanto localmente.',
      ],
      howTo: {
        name: 'Reduzir o espaço do Mac ocupado pelo iCloud',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ver a situação real',
            text: 'Abra menu Apple > Ajustes do Sistema > Geral > Armazenamento. Essa barra é o disco do Mac. O uso do seu plano do iCloud está em Ajustes do Sistema > Conta Apple > iCloud. Não misture os dois números.',
          },
          {
            name: 'Ativar a otimização em Fotos',
            text: 'Abra o app Fotos, vá em Ajustes > iCloud e escolha «Otimizar armazenamento do Mac». Os originais em resolução total ficam na nuvem e o Mac guarda versões menores.',
          },
          {
            name: 'Ativar a otimização no iCloud Drive',
            text: 'Em Ajustes do Sistema > Conta Apple > iCloud > iCloud Drive ative «Otimizar armazenamento do Mac». Assim o macOS pode remover cópias locais quando o disco encher.',
          },
          {
            name: 'Remover à mão as cópias locais grandes',
            text: 'No Finder, clique com o botão direito em um arquivo ou pasta grande dentro do iCloud Drive e escolha «Remover download». O item continua na nuvem, mostra o ícone de nuvem e é baixado de novo quando precisar.',
          },
          {
            name: 'Revisar a sincronização de Mesa e Documentos',
            text: 'Na mesma tela do iCloud Drive verifique «Pastas Mesa e Documentos». Se estiver ligada, essas pastas são sincronizadas; leia a explicação na tela antes de desligar, ou os arquivos podem ir parar onde você não espera.',
          },
        ],
      },
      sections: [
        {
          title: 'Dois armazenamentos separados: a origem da confusão',
          content: [
            'Um plano do iCloud é espaço que você compra nos servidores da Apple: 5 GB grátis e depois 50 GB, 200 GB ou 2 TB. O disco do Mac é o SSD interno. São independentes, e limpar um não afeta diretamente o outro.',
            'A confusão nasce daqui: um arquivo colocado no iCloud Drive fica, por padrão, tanto na nuvem quanto no Mac. Mover um arquivo de 100 GB para o iCloud não o tira do Mac — apenas cria uma segunda cópia. Seu plano na nuvem não transborda, mas o disco também não esvazia.',
            'A linha «Documentos» ou «iCloud Drive» que aparece em Ajustes do Sistema > Geral > Armazenamento é exatamente esse conjunto de cópias locais. Para ver o total na nuvem é preciso olhar Ajustes do Sistema > Conta Apple > iCloud; as duas telas medem coisas diferentes.',
          ],
        },
        {
          title: 'O que «Otimizar armazenamento do Mac» realmente faz',
          content: [
            'Com o ajuste ligado, o macOS tem permissão para remover cópias locais de arquivos do iCloud Drive quando precisar. O arquivo continua aparecendo no Finder com um pequeno ícone de nuvem, e um duplo clique o baixa de novo e o abre. Por isso você não perde nada.',
            'Mas há um detalhe importante: o macOS não faz isso de imediato. O ajuste é uma permissão, não um comando. O sistema remove cópias locais só quando o disco começa realmente a encher, e na ordem que ele mesmo escolhe, começando pelos arquivos há mais tempo sem abrir. Daí a observação tão comum: «liguei a otimização e nada aconteceu».',
            'Se quiser espaço agora, aja manualmente: clique com o botão direito em uma pasta grande no Finder e escolha «Remover download». Isso apaga a cópia local na hora enquanto os arquivos ficam seguros na nuvem. É ideal para arquivos de vídeo, pastas de projetos antigos e digitalizações.',
          ],
        },
        {
          title: 'Fotos do iCloud: onde ficam os originais?',
          content: [
            'Com Fotos do iCloud ligado, toda a sua fototeca é enviada para a nuvem. No app Fotos, em Ajustes > iCloud, você escolhe entre duas opções: «Transferir originais para este Mac» ou «Otimizar armazenamento do Mac».',
            'A primeira mantém cada foto e vídeo em resolução total no Mac. Faz sentido se esta for sua máquina principal e você fizer backup, mas uma fototeca de 500 GB significa 500 GB de disco. A segunda deixa os originais na nuvem e guarda localmente versões reduzidas, boas para a tela; ao editar ou exportar uma foto, o original é baixado naquele momento.',
            'Vale notar: mesmo com a otimização ligada a fototeca não chega a zero. Miniaturas, pré-visualizações e cópias locais das fotos recentes se acumulam. Uma fototeca de 200 GB ainda pode ocupar 20-40 GB otimizada. Isso é normal, não é um defeito.',
          ],
        },
        {
          title: 'O erro clássico que enche o disco',
          content: [
            'O erro mais comum é este: o disco enche, você supõe «deve ser o iCloud» e desativa o iCloud Drive. O efeito é o oposto. Ao desativar, o macOS oferece baixar todo arquivo que está na nuvem mas não localmente; se aceitar, o disco já cheio satura de vez, se recusar, perde o acesso pelo Mac.',
            'A ordem certa é: ligar a otimização, depois remover à mão as cópias locais das pastas grandes e só então apagar do iCloud o que realmente sobra. Cuidado nesse último passo — um arquivo apagado do iCloud Drive some também do iPhone, do iPad e dos outros Macs. Para liberar apenas localmente use «Remover download» em vez de apagar.',
            'A pasta local do iCloud fica em `~/Library/Mobile Documents` e o Finder a esconde por padrão, por isso ela aparece em lugares inesperados em ferramentas que medem tamanho de pasta. O módulo Análise de disco do Disk Mop percorre o disco pasta a pasta, incluindo as ocultas, e revela exatamente esse tipo de acúmulo; o módulo Arquivos grandes mostra quais cópias locais individuais custam mais caro.',
          ],
        },
      ],
      faq: [
        {
          question: 'Se eu apagar um arquivo do iCloud, ele some do meu Mac?',
          answer:
            'Sim. O iCloud Drive é uma pasta sincronizada: um arquivo apagado em um dispositivo é apagado em todos e fica 30 dias em «Apagados recentemente». Para remover só a cópia local, clique com o botão direito e escolha «Remover download».',
        },
        {
          question: 'Liguei a otimização mas o disco continua cheio, por quê?',
          answer:
            'Porque o ajuste é uma permissão, não um comando imediato. O macOS remove cópias locais só quando o disco fica sob pressão. Para resultado imediato, remova manualmente os downloads das pastas grandes pelo Finder.',
        },
        {
          question: 'Os «Dados do sistema» na tela de armazenamento vêm do iCloud?',
          answer:
            'Em parte. Essa linha cobre muitas coisas, incluindo caches do iCloud e arquivos temporários de sincronização. Mas os instantâneos locais do Time Machine e os registros do sistema também contam ali, então não se explica só pelo iCloud.',
        },
        {
          question: 'Devo desligar a sincronização de Mesa e Documentos?',
          answer:
            'Não necessariamente. Mantê-la ligada é bom para backup. Mas tenha cuidado ao desligar: o macOS deixa o conteúdo dentro do iCloud Drive e sua Mesa local pode parecer vazia. Leia sempre a explicação na tela antes de confirmar.',
        },
      ],
      verdict: [
        'iCloud e disco do Mac são duas contas separadas: liberar a nuvem não alivia o disco, e limpar o disco não esvazia o plano. Para o disco, a ordem certa é ligar a otimização, remover à mão os downloads das pastas grandes e nunca desativar o iCloud Drive «para resolver».',
        'Para ver o que sobrou acumulado localmente, os módulos Análise de disco e Arquivos grandes do Disk Mop ordenam o disco inteiro por tamanho, incluindo pastas ocultas, e a visão Disk Treemap mostra num relance qual pasta realmente ocupa o espaço.',
      ],
      ctaText: 'Veja o que realmente ocupa espaço no seu Mac',
    },
    ja: {
      title: 'iCloud が Mac の容量を圧迫する理由と「ストレージを最適化」の仕組み',
      metaDescription:
        'iCloud のストレージと Mac のディスク容量は別物です。「Mac のストレージを最適化」が実際に何をするのか、なぜ空き容量が増えないことがあるのか、そしてディスクを満杯にしてしまう典型的な失敗を解説します。',
      subtitle: 'クラウドには空きがあるのに、ディスクにはない',
      intro: [
        '短い答え: iCloud のストレージプラン（5 GB、200 GB など）と Mac のディスク容量はまったく別物です。iCloud Drive のファイルは Mac 側にもコピーを持つことができ、「Mac のストレージを最適化」はそのローカルコピーを、ディスクが埋まり始めたときに macOS が選んだ順序でのみ削除します。こちらの指示で即座に消えるわけではありません。',
        'そのため「iCloud は 2 TB プランなのに Mac がいっぱい」という状況が非常によくあります。さらに厄介なのは、直感的な対処である iCloud Drive のオフが、ディスクを完全に埋めてしまうことです。macOS がクラウド上のすべてをダウンロードするからです。この記事では 2 つのストレージの違い、最適化設定の実際の動作、そしてこの失敗の直し方を説明します。',
      ],
      keyTakeaways: [
        'iCloud プランはクラウド上の容量、Mac の SSD は別の容量です。一方を空けても他方は空きません。',
        '「Mac のストレージを最適化」はローカルコピーをすぐには削除しません。ディスクが逼迫したときに、macOS が選ぶ順序で削除します。',
        'iCloud Drive を「オフ」にするとディスクは満杯になります。macOS がクラウドからすべてをダウンロードするためです。実行前に空き容量を確認してください。',
        'iCloud Drive のローカルフォルダーは `~/Library/Mobile Documents` にあり、Finder では既定で非表示です。',
        'iCloud Drive からファイルを削除すると「すべての」デバイスから消えます。ローカルの容量だけ空けたい場合は「ダウンロードを削除」を使います。',
        'デスクトップと書類フォルダの同期が有効なら、その中身はクラウドとローカルの両方で容量を占めます。',
      ],
      howTo: {
        name: 'iCloud が使う Mac の容量を減らす',
        totalTime: 'PT10M',
        steps: [
          {
            name: '実際の状況を確認する',
            text: 'アップルメニュー > システム設定 > 一般 > ストレージ を開きます。ここのバーは Mac のディスクです。iCloud プランの使用量は システム設定 > Apple アカウント > iCloud にあります。2 つの数字を混同しないでください。',
          },
          {
            name: '写真の最適化を有効にする',
            text: '写真アプリを開き、設定 > iCloud で「Mac のストレージを最適化」を選びます。フル解像度のオリジナルはクラウドに残り、Mac には小さいバージョンが保持されます。',
          },
          {
            name: 'iCloud Drive の最適化を有効にする',
            text: 'システム設定 > Apple アカウント > iCloud > iCloud Drive で「Mac のストレージを最適化」をオンにします。これでディスクが埋まり始めたときに macOS がローカルコピーを削除できます。',
          },
          {
            name: '大きな項目のローカルコピーを手動で削除する',
            text: 'Finder で iCloud Drive 内の大きなファイルやフォルダーを右クリックし、「ダウンロードを削除」を選びます。項目はクラウドに残り、雲のアイコンが付き、必要になれば再びダウンロードされます。',
          },
          {
            name: 'デスクトップと書類の同期を見直す',
            text: '同じ iCloud Drive の画面で「デスクトップフォルダと書類フォルダ」を確認します。有効ならこれらは同期されます。オフにする前に画面の説明を必ず読んでください。読まないとファイルが予期しない場所に移ります。',
          },
        ],
      },
      sections: [
        {
          title: '2 つの別々のストレージ: 混乱の出発点',
          content: [
            'iCloud のストレージプランは Apple のサーバー上で購入する容量です。無料の 5 GB から、50 GB、200 GB、2 TB。一方 Mac のディスクは本体内の SSD です。両者は独立しており、片方を整理してももう片方には直接影響しません。',
            '混乱はここから生じます。iCloud Drive に置いたファイルは、既定でクラウドと Mac の両方に存在します。100 GB のアーカイブを iCloud に移しても、そのファイルが Mac から消えるわけではなく、2 つ目のコピーができるだけです。クラウドのプランは溢れませんが、ディスクも空きません。',
            'システム設定 > 一般 > ストレージ に表示される「書類」や「iCloud Drive」の項目は、まさにこのローカルコピーです。クラウド側の合計を見るには システム設定 > Apple アカウント > iCloud を開く必要があります。2 つの画面は別のものを測っています。',
          ],
        },
        {
          title: '「Mac のストレージを最適化」が実際に行うこと',
          content: [
            'この設定が有効だと、macOS は必要に応じて iCloud Drive のファイルのローカルコピーを削除できます。ファイルは Finder に表示されたまま、小さな雲のアイコンが付き、ダブルクリックすると再ダウンロードされて開きます。だから何も失われません。',
            'ただし重要な点があります。macOS はこれをすぐには行いません。この設定は「許可」であって「命令」ではありません。システムはディスクが実際に埋まり始めたときに、最も長く開いていないファイルから順に、自分の選んだ順序でローカルコピーを削除します。だからこそ「最適化をオンにしたのに何も起きない」という声がとても多いのです。',
            '今すぐ空き容量が必要なら手動で対応します。Finder で大きなフォルダーを右クリックし「ダウンロードを削除」を選んでください。ローカルコピーが即座に削除され、ファイルはクラウドに安全に残ります。動画アーカイブ、古いプロジェクトフォルダー、スキャンデータに最適です。',
          ],
        },
        {
          title: 'iCloud 写真: オリジナルはどこにあるか',
          content: [
            'iCloud 写真が有効だと、ライブラリ全体がクラウドにアップロードされます。写真アプリの 設定 > iCloud では 2 つの選択肢があります。「オリジナルをこの Mac にダウンロード」または「Mac のストレージを最適化」です。',
            '前者はすべての写真と動画をフル解像度で Mac に保持します。これがメインマシンでバックアップも取っているなら理にかなっていますが、500 GB のライブラリは 500 GB のディスクを意味します。後者はオリジナルをクラウドに残し、画面表示に十分な縮小版をローカルに保持します。写真を編集または書き出すとき、その時点でオリジナルがダウンロードされます。',
            '注意点として、最適化を有効にしても写真ライブラリがゼロになるわけではありません。サムネイル、プレビュー、最近撮影した写真のローカルコピーは蓄積します。200 GB のライブラリが最適化後でも 20〜40 GB を占めることはあります。これは正常で、不具合ではありません。',
          ],
        },
        {
          title: 'ディスクを満杯にする典型的な失敗',
          content: [
            '最もよくある失敗はこれです。ディスクがいっぱいになり「iCloud のせいだろう」と考えて iCloud Drive をオフにする。結果は逆になります。無効化すると macOS は、クラウドにあってローカルにないすべてのファイルをダウンロードしようと提案します。受け入れれば、すでに満杯のディスクは完全に埋まり、拒否すれば Mac からそれらのファイルにアクセスできなくなります。',
            '正しい順序はこうです。まず最適化を有効にし、次に大きなフォルダーのローカルコピーを手動で削除し、最後に本当に不要なものだけを iCloud から削除します。最後の手順は慎重に。iCloud Drive から削除したファイルは iPhone、iPad、他の Mac からも消えます。ローカルの容量だけ空けたいなら、削除ではなく「ダウンロードを削除」を使ってください。',
            'iCloud のローカルフォルダーは `~/Library/Mobile Documents` にあり Finder では既定で非表示です。そのためフォルダーサイズを測るツールでは予想外の場所に現れます。Disk Mop の「ディスク解析」モジュールは隠しフォルダーを含めてディスクをフォルダー単位でたどり、こうした埋もれた蓄積を明らかにします。「大きいファイル」モジュールは、どの個別のローカルコピーが最も容量を使っているかを示します。',
          ],
        },
      ],
      faq: [
        {
          question: 'iCloud からファイルを削除すると Mac からも消えますか。',
          answer:
            'はい。iCloud Drive は同期フォルダーです。1 台で削除したファイルはすべてのデバイスから削除され、iCloud の「最近削除した項目」に 30 日間残ります。ローカルコピーだけを削除したい場合は、右クリックして「ダウンロードを削除」を選んでください。',
        },
        {
          question: '最適化を有効にしたのにディスクがまだいっぱいです。なぜですか。',
          answer:
            'この設定は許可であって、即座に実行される命令ではないからです。macOS はディスクが逼迫したときにのみローカルコピーを削除します。すぐに結果が欲しい場合は、Finder で大きなフォルダーのダウンロードを手動で削除してください。',
        },
        {
          question: 'ストレージ画面の「システムデータ」は iCloud と関係がありますか。',
          answer:
            '一部は関係します。この項目には iCloud のキャッシュや同期の一時ファイルも含まれます。ただし Time Machine のローカルスナップショットやシステムログも同じ項目に数えられるため、iCloud だけでは説明できません。',
        },
        {
          question: 'デスクトップと書類の同期はオフにすべきですか。',
          answer:
            '必ずしもそうではありません。有効にしておくことはバックアップの観点で有益です。ただしオフにするときは注意が必要です。macOS は中身を iCloud Drive 側に残すため、ローカルのデスクトップが空に見えることがあります。確定する前に必ず画面の説明を読んでください。',
        },
      ],
      verdict: [
        'iCloud と Mac のディスクは別々の勘定です。クラウドを空けてもディスクは楽になりませんし、ディスクを掃除してもプランは空きません。ディスクについての正しい順序は、最適化を有効にし、大きなフォルダーのダウンロードを手動で削除し、「解決のために」iCloud Drive をオフにしないことです。',
        'ローカルに残った蓄積を確認するには、Disk Mop の「ディスク解析」と「大きいファイル」が隠しフォルダーを含めてディスク全体をサイズ順に並べ、Disk Treemap 表示ではどのフォルダーが実際に容量を占めているかが一目で分かります。',
      ],
      ctaText: 'Mac の容量を実際に使っているものを確認する',
    },
  },
};
