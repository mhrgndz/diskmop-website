import type { Article } from '../types';

export const onedriveTakingUpSpace: Article = {
  slug: 'onedrive-taking-up-space',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-08-17',
  readingTime: 7,
  content: {
    tr: {
      title: "OneDrive Neden Disk Alanı Kaplıyor ve Nasıl Geri Alınır?",
      metaDescription:
        "OneDrive klasörünüz bulutta olmasına rağmen diskte yer kaplıyorsa sebebi İsteğe Bağlı Dosyalar ayarıdır. Yer açma adımları, otomatikleştirme ve sık yapılan hata.",
      subtitle: "İsteğe Bağlı Dosyalar, Yer Açma ve Otomatik Çevrimiçi Yapma",
      intro: [
        "Kısa cevap: OneDrive dosyalarınız buluta yüklenmiş olsa bile, bilgisayarınıza indirilmiş bir kopyası varsa disk alanı kaplar. Çözüm, OneDrive klasöründe istediğiniz klasöre sağ tıklayıp \"Alan boşalt\" seçeneğini kullanmaktır; dosya Dosya Gezgini'nde görünmeye devam eder ama yalnızca bulutta durur. Bunu kalıcı hale getirmek için Depolama Alanı Algılayıcısı'ndan belirli gün sayısı boyunca açılmayan dosyaların otomatik olarak çevrimiçi yapılmasını açın.",
        "OneDrive kullanıcılarının en sık şaşırdığı nokta budur: dosyalar \"bulutta\" olduğu halde C sürücüsü dolmaya devam eder. Sebep, OneDrive'ın varsayılan davranışının senkronize ettiği dosyaları yerel olarak da tutması ve açtığınız her dosyanın sessizce indirilmesidir. Bu rehberde alanı nasıl geri alacağınızı, işlemi nasıl otomatikleştireceğinizi ve durumu daha kötü hale getiren yaygın hatayı anlatıyoruz.",
      ],
      keyTakeaways: [
        "OneDrive dosyaları buluta yüklenmiş olsa bile yerel bir kopyası varsa diskte yer kaplar.",
        "\"Alan boşalt\" (Free up space) seçeneği dosyayı silmez; yalnızca yerel kopyayı kaldırır, dosya Dosya Gezgini'nde görünmeye devam eder.",
        "Bulut simgesi çevrimiçi, içi boş yeşil onay yerel kopya, dolu yeşil onay ise \"her zaman bu cihazda tut\" anlamına gelir.",
        "Depolama Alanı Algılayıcısı, belirlediğiniz gün sayısı boyunca açılmayan OneDrive dosyalarını otomatik olarak çevrimiçi yapabilir.",
        "İsteğe Bağlı Dosyalar özelliğini KAPATMAK tüm bulut içeriğinizi diske indirir — durumu düzeltmez, kötüleştirir.",
        "OneDrive'ın bağlantısını kesmek yerel dosyaları silmez; bilgisayarda kalırlar ve yer kaplamaya devam ederler.",
      ],
      howTo: {
        name: "OneDrive ile disk alanı boşaltma",
        totalTime: "PT5M",
        steps: [
          {
            name: "İsteğe Bağlı Dosyalar özelliğinin açık olduğunu doğrulayın",
            text: "Bildirim alanındaki OneDrive bulut simgesine tıklayın, dişli simgesinden Ayarlar'ı açın ve Eşitleme ve yedekleme bölümünden Gelişmiş ayarlar'a girin. İsteğe Bağlı Dosyalar (Files On-Demand) seçeneğinin etkin olduğundan emin olun.",
          },
          {
            name: "OneDrive klasörünü Dosya Gezgini'nde açın",
            text: "Dosya Gezgini'ni açın ve sol taraftaki gezinti bölmesinden OneDrive girdisine tıklayın. Klasör ve dosyaların yanındaki durum simgelerine bakın: bulut simgesi yalnızca çevrimiçi, yeşil onay ise yerel kopya olduğunu gösterir.",
          },
          {
            name: "Alan boşaltmak istediğiniz klasörleri seçin",
            text: "Uzun süredir açmadığınız büyük klasörleri seçin. Eski proje arşivleri, fotoğraf klasörleri ve video arşivleri en çok kazandıran adaylardır. Birden fazla klasörü Ctrl tuşuyla birlikte seçebilirsiniz.",
          },
          {
            name: "Alan boşalt komutunu verin",
            text: "Seçime sağ tıklayın ve Alan boşalt (Free up space) seçeneğini tıklayın. Dosyalar diskten kaldırılır ama Dosya Gezgini'nde görünmeye devam eder; çift tıkladığınızda otomatik olarak yeniden indirilirler.",
          },
          {
            name: "İşlemi otomatikleştirin",
            text: "Ayarlar > Sistem > Depolama > Depolama Alanı Algılayıcısı yolunu izleyin. Bulut içeriği için, belirlediğiniz gün sayısı boyunca (14, 30 veya 60 gün) açılmayan dosyaların otomatik olarak yalnızca çevrimiçi yapılmasını seçin.",
          },
        ],
      },
      sections: [
        {
          title: "OneDrive Neden Yer Kaplıyor?",
          content: [
            "OneDrive bir bulut depolama hizmetidir ama Windows'ta bir eşitleme istemcisi olarak çalışır. Bu, klasördeki dosyaların hem bulutta hem de tercihe bağlı olarak bilgisayarınızda bulunabileceği anlamına gelir. İnternet bağlantısı olmadan çalışabilmeniz için tasarlanan bu davranış, disk dolduğunda soruna dönüşür.",
            "Asıl karışıklık, bir dosyayı bir kez açmanızın onu kalıcı olarak indirmesinden kaynaklanır. Üç yıl önce bir kez açtığınız 2 GB'lık sunum, o günden beri diskinizde duruyor olabilir. Aylar içinde bu birikim on gigabaytları bulur ve OneDrive klasörü sessizce C sürücüsünün en büyük klasörlerinden biri haline gelir.",
            "Windows 11'de İsteğe Bağlı Dosyalar varsayılan olarak açıktır, dolayısıyla yeni eşitlenen dosyalar başlangıçta yalnızca çevrimiçi olur. Ancak açtığınız her dosya yerel kopyaya dönüşür ve kimse geri çevirmediği sürece öyle kalır.",
          ],
        },
        {
          title: "Durum Simgelerini Okumak",
          content: [
            "Dosya Gezgini'nde OneDrive klasöründeki her öğenin yanında küçük bir durum simgesi vardır ve bu simgeler size dosyanın diskte yer kaplayıp kaplamadığını doğrudan söyler.",
            "İçi boş mavi bulut simgesi dosyanın yalnızca çevrimiçi olduğunu, yani diskte yer kaplamadığını gösterir. İçi beyaz, kenarı yeşil onay işareti dosyanın yerel bir kopyasının bulunduğunu ama gerekirse otomatik kaldırılabileceğini belirtir. İçi dolu yeşil onay işareti ise \"Bu cihazda her zaman tut\" olarak işaretlenmiş dosyaları gösterir; bunlar Depolama Alanı Algılayıcısı tarafından bile kaldırılmaz.",
            "Yer açmak istediğinizde önce dolu yeşil onaylı klasörlere bakın. Bir klasörü bu işaretten çıkarmak için sağ tıklayıp \"Bu cihazda her zaman tut\" seçeneğinin işaretini kaldırmanız yeterlidir.",
          ],
        },
        {
          title: "En Yaygın Hata: İsteğe Bağlı Dosyaları Kapatmak",
          content: [
            "Disk dolduğunda birçok kullanıcı OneDrive ayarlarında \"İsteğe Bağlı Dosyalar\" seçeneğini görür ve mantıklı görünen şeyi yapar: onu kapatır. Bu, yapabileceğiniz en ters hamledir.",
            "Bu seçeneği kapatmak, buluttaki tüm OneDrive içeriğinizin diskinize indirilmesini tetikler. 500 GB'lık bir OneDrive hesabınız varsa Windows onu indirmeye çalışır ve zaten dolu olan diski tamamen doldurur. Özellik adı yanıltıcıdır: \"kapatmak\" bulut bağlantısını kesmek değil, her şeyi yerelleştirmek anlamına gelir.",
            "Doğru yön tam tersidir: İsteğe Bağlı Dosyalar açık kalmalı ve yerel kopyalar \"Alan boşalt\" ile temizlenmelidir. Aynı şekilde OneDrive'ın bağlantısını kesmek de alan kazandırmaz; bağlantı kesildiğinde indirilmiş dosyalar bilgisayarda kalır, yalnızca eşitleme durur.",
          ],
        },
        {
          title: "OneDrive Dışında Yer Kaplayan Bulut Artıkları",
          content: [
            "OneDrive'ın kendi önbelleği ve günlük dosyaları %LOCALAPPDATA%\\Microsoft\\OneDrive klasöründe birikir. Burada eski istemci sürümleri, kurulum dosyaları ve eşitleme günlükleri bulunur; genellikle birkaç yüz megabayt ile birkaç gigabayt arasındadır ve güvenle temizlenebilir.",
            "Kişisel Kasa (Personal Vault) ayrı bir alan kullanır ve kilitliyken içeriği çevrimiçi tutulur. Diğer bulut istemcileri de aynı deseni izler: Google Drive, Dropbox ve iCloud Drive'ın hepsinin yerel önbellek klasörleri vardır ve bunlar zamanla şişer.",
            "Disk Mop'un Disk Analizi (Disk Analysis) modülü, bu klasörlerin gerçekte ne kadar yer kapladığını treemap üzerinde gösterir; OneDrive klasörünüzün C sürücüsünün ne kadarını tuttuğunu tahmin etmek yerine görürsünüz. Büyük Dosyalar modülü ise eşik üstündeki dosyaları listeleyerek hangi tek dosyaların indirilmiş halde beklediğini ortaya çıkarır.",
          ],
        },
        {
          title: "Kalıcı Bir Düzen Kurmak",
          content: [
            "Tek seferlik temizlik birkaç ay dayanır, sonra aynı noktaya dönersiniz. Kalıcı çözüm iki ayarı birlikte kullanmaktır: Depolama Alanı Algılayıcısı'nda bulut içeriği için 30 günlük bir eşik belirleyin ve gerçekten çevrimdışı erişmeniz gereken klasörleri \"Bu cihazda her zaman tut\" olarak işaretleyin.",
            "Bu düzende sık kullandığınız belgeler her zaman yerelde kalır, bir yıl önce açtığınız arşivler ise sessizce buluta geri döner. Elle müdahale gerekmez ve OneDrive klasörünün disk üzerindeki ayak izi dengede kalır.",
            "Aynı düzeni disk temizliğinin geneline yaymak için Disk Mop'un zamanlanmış temizliğini kullanabilirsiniz: haftalık bir görev geçici dosyaları, tarayıcı önbelleklerini ve eski indirmeleri toplar. Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "OneDrive dosyaları bulutta olduğu halde neden disk alanı kaplıyor?",
          answer:
            "Çünkü OneDrive bir eşitleme istemcisidir ve açtığınız dosyaların yerel bir kopyasını bilgisayarınızda tutar. Bu, çevrimdışı çalışabilmeniz için tasarlanmıştır. Bir dosyayı bir kez açmanız onu kalıcı olarak indirir ve siz \"Alan boşalt\" komutunu vermedikçe yerel kopya diskte kalır.",
        },
        {
          question: "\"Alan boşalt\" seçeneği dosyalarımı siler mi?",
          answer:
            "Hayır. Bu komut yalnızca dosyanın bilgisayarınızdaki yerel kopyasını kaldırır; dosya bulutta olduğu gibi kalır ve Dosya Gezgini'nde görünmeye devam eder. Üzerine çift tıkladığınızda otomatik olarak yeniden indirilir. Tek koşul, o anda internet bağlantınızın olmasıdır.",
        },
        {
          question: "İsteğe Bağlı Dosyalar özelliğini kapatmalı mıyım?",
          answer:
            "Hayır, bu en yaygın hatadır. Özelliği kapatmak buluttaki tüm OneDrive içeriğinizin diske indirilmesini başlatır ve alan sorununu ciddi biçimde kötüleştirir. Alan kazanmak için özellik açık kalmalı, yerel kopyalar ise \"Alan boşalt\" ile temizlenmelidir.",
        },
        {
          question: "OneDrive bağlantısını kesersem yer açılır mı?",
          answer:
            "Hayır. Bağlantı kesildiğinde eşitleme durur ama bilgisayara daha önce indirilmiş dosyalar yerinde kalır ve yer kaplamaya devam eder. Alan kazanmak istiyorsanız bağlantıyı kesmeden önce klasörlere \"Alan boşalt\" uygulamanız gerekir.",
        },
        {
          question: "OneDrive dosyalarını otomatik olarak çevrimiçi yapabilir miyim?",
          answer:
            "Evet. Ayarlar > Sistem > Depolama > Depolama Alanı Algılayıcısı ekranında, bulut içeriği için belirlediğiniz süre boyunca (14, 30 veya 60 gün) açılmayan dosyaların otomatik olarak yalnızca çevrimiçi hale getirilmesini seçebilirsiniz. \"Bu cihazda her zaman tut\" olarak işaretlediğiniz klasörler bu işlemden etkilenmez.",
        },
        {
          question: "OneDrive klasörümün ne kadar yer kapladığını nasıl görürüm?",
          answer:
            "Dosya Gezgini'nde OneDrive klasörüne sağ tıklayıp Özellikler'e bakabilirsiniz, ancak bu yalnızca toplam boyutu verir. Hangi alt klasörün şiştiğini görmek için Disk Mop'un Disk Analizi modülü gibi bir treemap görselleştirmesi kullanmak daha hızlıdır; klasörler gerçek boyutlarıyla orantılı alanlar olarak çizilir.",
        },
      ],
      verdict: [
        "OneDrive'ın disk alanı kaplaması bir hata değil, tasarım gereğidir: açtığınız her dosya çevrimdışı erişim için yerelde tutulur. Alanı geri almanın doğru yolu, klasörlere sağ tıklayıp \"Alan boşalt\" demek ve İsteğe Bağlı Dosyalar özelliğini açık bırakmaktır.",
        "Kaçınılması gereken iki hamle var: İsteğe Bağlı Dosyalar'ı kapatmak (her şeyi indirir) ve OneDrive bağlantısını kesmek (hiçbir şey silmez). İkisi de sezgisel görünür, ikisi de işe yaramaz.",
        "Kalıcı çözüm için Depolama Alanı Algılayıcısı'nda 30 günlük bir eşik belirleyin ve gerçekten çevrimdışı ihtiyaç duyduğunuz klasörleri \"her zaman bu cihazda tut\" olarak işaretleyin. Böylece düzen kendi kendini korur.",
      ],
      ctaText: "OneDrive Klasörünüzün Gerçek Boyutunu Görün",
    },
    en: {
      title: "Why Is OneDrive Taking Up Disk Space and How Do I Get It Back?",
      metaDescription:
        "If your OneDrive folder eats disk space even though the files live in the cloud, Files On-Demand is the reason. How to free up space, automate it, and the mistake to avoid.",
      subtitle: "Files On-Demand, Free Up Space and Automatic Cloud-Only Files",
      intro: [
        "Short answer: OneDrive files take up disk space whenever a local copy exists on your PC, even though they are also stored in the cloud. The fix is to right-click a folder inside your OneDrive folder and choose \"Free up space\" — the file keeps appearing in File Explorer but lives only in the cloud. To make it permanent, turn on the Storage Sense option that automatically makes cloud files online-only after a number of days you choose.",
        "This is the point that surprises OneDrive users most: the files are \"in the cloud\", yet the C: drive keeps filling up. The reason is that OneDrive's default behaviour keeps a local copy of anything it syncs, and every file you open is quietly downloaded. This guide covers how to reclaim the space, how to automate it, and the common mistake that makes the problem considerably worse.",
      ],
      keyTakeaways: [
        "OneDrive files occupy disk space whenever a local copy exists, regardless of them also being in the cloud.",
        "\"Free up space\" does not delete anything; it removes only the local copy, and the file still appears in File Explorer.",
        "A cloud outline icon means online-only, a hollow green check means a local copy exists, and a solid green check means \"always keep on this device\".",
        "Storage Sense can automatically make OneDrive files online-only after they have gone unopened for a number of days you set.",
        "Turning Files On-Demand OFF downloads your entire cloud library to the disk — it makes the problem worse, not better.",
        "Unlinking OneDrive does not delete local files; they stay on the PC and keep occupying space.",
      ],
      howTo: {
        name: "Free up disk space with OneDrive",
        totalTime: "PT5M",
        steps: [
          {
            name: "Confirm Files On-Demand is enabled",
            text: "Click the OneDrive cloud icon in the notification area, open Settings from the gear icon, then go to Sync and back up and open Advanced settings. Make sure Files On-Demand is turned on.",
          },
          {
            name: "Open the OneDrive folder in File Explorer",
            text: "Open File Explorer and click the OneDrive entry in the navigation pane on the left. Look at the status icons next to folders and files: a cloud outline means online-only, a green check means a local copy exists.",
          },
          {
            name: "Select the folders you want to clear",
            text: "Pick large folders you have not opened in a long time. Old project archives, photo folders and video libraries usually give the biggest return. Hold Ctrl to select several folders at once.",
          },
          {
            name: "Run Free up space",
            text: "Right-click the selection and choose Free up space. The files are removed from the disk but still appear in File Explorer, and double-clicking one downloads it again automatically.",
          },
          {
            name: "Automate it",
            text: "Go to Settings > System > Storage > Storage Sense. Under cloud content, choose to make files online-only automatically if they have not been opened for a chosen period — 14, 30 or 60 days.",
          },
        ],
      },
      sections: [
        {
          title: "Why Does OneDrive Use Local Space at All?",
          content: [
            "OneDrive is a cloud storage service, but on Windows it operates as a sync client. That means files in the folder can exist both in the cloud and, optionally, on your PC. This behaviour exists so you can work without an internet connection — and it becomes a problem only when the disk fills up.",
            "The real source of confusion is that opening a file once downloads it permanently. A 2 GB presentation you opened three years ago may still be sitting on your disk today. Over months this accumulation reaches tens of gigabytes, and the OneDrive folder quietly becomes one of the largest folders on your C: drive.",
            "On Windows 11, Files On-Demand is enabled by default, so newly synced files start out as online-only. But every file you open converts into a local copy and stays that way until someone reverses it.",
          ],
        },
        {
          title: "Reading the Status Icons",
          content: [
            "Every item in your OneDrive folder carries a small status icon in File Explorer, and those icons tell you directly whether the file is using disk space.",
            "A hollow blue cloud means the file is online-only and occupies no local space. A green check outline on a white background means a local copy exists but can be removed automatically if needed. A solid green check marks files flagged as \"Always keep on this device\" — these are never removed, not even by Storage Sense.",
            "When you need space, look at the solid-green folders first. To unpin one, right-click it and untick \"Always keep on this device\".",
          ],
        },
        {
          title: "The Most Common Mistake: Turning Files On-Demand Off",
          content: [
            "When the disk fills up, many users find the \"Files On-Demand\" setting in OneDrive and do the thing that looks logical: they turn it off. This is the single worst move available.",
            "Disabling that option triggers a download of your entire OneDrive library onto the disk. If you have a 500 GB OneDrive account, Windows will attempt to pull all of it down and fill an already-full drive completely. The feature name is misleading: \"off\" does not mean disconnect from the cloud, it means localise everything.",
            "The correct direction is the opposite: leave Files On-Demand enabled and clear local copies with Free up space. Unlinking OneDrive does not help either — when you unlink, downloaded files remain on the PC and only syncing stops.",
          ],
        },
        {
          title: "Other Cloud Leftovers That Use Space",
          content: [
            "OneDrive's own cache and log files accumulate in %LOCALAPPDATA%\\Microsoft\\OneDrive. This holds old client versions, setup files and sync logs, typically ranging from a few hundred megabytes to a few gigabytes, and it can be cleared safely.",
            "Personal Vault uses a separate area and keeps its contents online while locked. Other cloud clients follow the same pattern: Google Drive, Dropbox and iCloud Drive all maintain local cache folders that swell over time.",
            "Disk Mop's Disk Analysis shows what these folders actually hold on a treemap, so you see how much of your C: drive OneDrive occupies rather than guessing. Large Files lists everything above a size threshold, revealing which individual files are sitting downloaded and unused.",
          ],
        },
        {
          title: "Setting Up an Arrangement That Lasts",
          content: [
            "A one-off cleanup buys you a few months before you end up in the same place. The durable fix combines two settings: set a 30-day threshold for cloud content in Storage Sense, and mark the folders you genuinely need offline as \"Always keep on this device\".",
            "In that arrangement, the documents you use regularly stay local while archives you last opened a year ago quietly return to the cloud. No manual intervention is required and the OneDrive folder's footprint stays balanced.",
            "To extend the same discipline to disk cleanup generally, use Disk Mop's scheduled cleanup: a weekly task collects temporary files, browser caches and old downloads. You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "Why does OneDrive take up disk space if the files are in the cloud?",
          answer:
            "Because OneDrive is a sync client and keeps a local copy of the files you open so you can work offline. Opening a file once downloads it permanently, and that local copy stays on the disk until you run the \"Free up space\" command on it.",
        },
        {
          question: "Does \"Free up space\" delete my files?",
          answer:
            "No. The command removes only the local copy on your PC; the file remains in the cloud and still appears in File Explorer. Double-clicking it downloads the file again automatically. The only requirement is an internet connection at that moment.",
        },
        {
          question: "Should I turn Files On-Demand off?",
          answer:
            "No — this is the most common mistake. Disabling the feature starts downloading your entire OneDrive library to the disk and makes the space problem considerably worse. To reclaim space, leave the feature enabled and clear local copies using Free up space instead.",
        },
        {
          question: "Will unlinking OneDrive free up space?",
          answer:
            "No. Unlinking stops syncing, but files already downloaded to the PC stay exactly where they are and continue to occupy space. If you want the space back, run Free up space on the folders before you unlink.",
        },
        {
          question: "Can OneDrive files be made online-only automatically?",
          answer:
            "Yes. Under Settings > System > Storage > Storage Sense, you can have cloud files become online-only automatically if they have not been opened for a period you choose — 14, 30 or 60 days. Folders you have marked as \"Always keep on this device\" are excluded from this.",
        },
        {
          question: "How do I see how much space my OneDrive folder uses?",
          answer:
            "You can right-click the OneDrive folder in File Explorer and check Properties, but that only gives a total. To find which subfolder is actually bloated, a treemap visualisation such as Disk Mop's Disk Analysis is far quicker, since folders are drawn as areas proportional to their real size.",
        },
      ],
      verdict: [
        "OneDrive using disk space is by design rather than a fault: every file you open is kept locally for offline access. The correct way to reclaim that space is to right-click folders and choose Free up space while leaving Files On-Demand enabled.",
        "There are two moves to avoid: turning Files On-Demand off (which downloads everything) and unlinking OneDrive (which deletes nothing). Both look intuitive and neither works.",
        "For a durable fix, set a 30-day threshold in Storage Sense and pin only the folders you truly need offline as \"always keep on this device\". After that, the arrangement maintains itself.",
      ],
      ctaText: "See What Your OneDrive Folder Really Holds",
    },
    de: {
      title: "Warum belegt OneDrive Speicherplatz und wie hole ich ihn zurück?",
      metaDescription:
        "Wenn Ihr OneDrive-Ordner Speicher belegt, obwohl die Dateien in der Cloud liegen, ist \"Dateien bei Bedarf\" der Grund. So geben Sie Platz frei, automatisieren es und vermeiden den häufigsten Fehler.",
      subtitle: "Dateien bei Bedarf, Speicherplatz freigeben und automatische Cloud-Dateien",
      intro: [
        "Kurze Antwort: OneDrive-Dateien belegen immer dann Speicherplatz, wenn eine lokale Kopie auf dem PC existiert — auch wenn sie zusätzlich in der Cloud liegen. Die Lösung: Klicken Sie im OneDrive-Ordner mit der rechten Maustaste auf einen Ordner und wählen Sie \"Speicherplatz freigeben\". Die Datei bleibt im Explorer sichtbar, liegt aber nur noch in der Cloud. Dauerhaft wird es über die Speicheroptimierung, die Cloud-Dateien nach einer von Ihnen gewählten Anzahl von Tagen automatisch auf reine Online-Dateien umstellt.",
        "Das ist der Punkt, der OneDrive-Nutzer am meisten überrascht: Die Dateien liegen \"in der Cloud\", und trotzdem füllt sich Laufwerk C. Der Grund: OneDrive behält standardmäßig eine lokale Kopie aller synchronisierten Dateien, und jede Datei, die Sie öffnen, wird still heruntergeladen. Dieser Ratgeber zeigt, wie Sie den Platz zurückholen, wie Sie das automatisieren und welchen verbreiteten Fehler Sie vermeiden sollten.",
      ],
      keyTakeaways: [
        "OneDrive-Dateien belegen Speicherplatz, sobald eine lokale Kopie existiert — unabhängig davon, dass sie auch in der Cloud liegen.",
        "\"Speicherplatz freigeben\" löscht nichts; es entfernt nur die lokale Kopie, und die Datei bleibt im Explorer sichtbar.",
        "Ein Wolkensymbol bedeutet nur online, ein grünes Häkchen mit weißer Füllung eine lokale Kopie, ein ausgefülltes grünes Häkchen \"immer auf diesem Gerät behalten\".",
        "Die Speicheroptimierung kann OneDrive-Dateien automatisch auf reine Online-Dateien umstellen, wenn sie eine festgelegte Zeit lang nicht geöffnet wurden.",
        "\"Dateien bei Bedarf\" AUSZUSCHALTEN lädt Ihre gesamte Cloud-Bibliothek auf die Festplatte — das verschlimmert das Problem, statt es zu lösen.",
        "Die Verknüpfung von OneDrive aufzuheben löscht keine lokalen Dateien; sie bleiben auf dem PC und belegen weiterhin Platz.",
      ],
      howTo: {
        name: "Mit OneDrive Speicherplatz freigeben",
        totalTime: "PT5M",
        steps: [
          {
            name: "Prüfen, ob Dateien bei Bedarf aktiviert ist",
            text: "Klicken Sie im Infobereich auf das OneDrive-Wolkensymbol, öffnen Sie über das Zahnrad die Einstellungen, wechseln Sie zu Synchronisierung und Sicherung und öffnen Sie die Erweiterten Einstellungen. Stellen Sie sicher, dass Dateien bei Bedarf aktiviert ist.",
          },
          {
            name: "Den OneDrive-Ordner im Explorer öffnen",
            text: "Öffnen Sie den Explorer und klicken Sie links im Navigationsbereich auf den Eintrag OneDrive. Achten Sie auf die Statussymbole neben Ordnern und Dateien: Ein Wolkensymbol steht für reine Online-Dateien, ein grünes Häkchen für eine vorhandene lokale Kopie.",
          },
          {
            name: "Die zu leerenden Ordner auswählen",
            text: "Wählen Sie große Ordner, die Sie lange nicht geöffnet haben. Alte Projektarchive, Fotoordner und Videosammlungen bringen erfahrungsgemäß am meisten. Mit gedrückter Strg-Taste wählen Sie mehrere Ordner gleichzeitig aus.",
          },
          {
            name: "Speicherplatz freigeben ausführen",
            text: "Klicken Sie mit der rechten Maustaste auf die Auswahl und wählen Sie Speicherplatz freigeben. Die Dateien verschwinden von der Festplatte, bleiben im Explorer aber sichtbar; per Doppelklick werden sie automatisch erneut heruntergeladen.",
          },
          {
            name: "Den Vorgang automatisieren",
            text: "Öffnen Sie Einstellungen > System > Speicher > Speicheroptimierung. Legen Sie für Cloud-Inhalte fest, dass Dateien automatisch zu reinen Online-Dateien werden, wenn sie einen gewählten Zeitraum lang nicht geöffnet wurden — 14, 30 oder 60 Tage.",
          },
        ],
      },
      sections: [
        {
          title: "Warum belegt OneDrive überhaupt lokalen Speicher?",
          content: [
            "OneDrive ist ein Cloud-Speicherdienst, arbeitet unter Windows aber als Synchronisierungsclient. Das heißt, Dateien im Ordner können sowohl in der Cloud als auch — optional — auf Ihrem PC liegen. Dieses Verhalten existiert, damit Sie ohne Internetverbindung arbeiten können, und wird erst dann zum Problem, wenn die Festplatte volläuft.",
            "Die eigentliche Verwirrung entsteht dadurch, dass einmaliges Öffnen eine Datei dauerhaft herunterlädt. Eine 2 GB große Präsentation, die Sie vor drei Jahren einmal geöffnet haben, liegt womöglich noch heute auf Ihrer Festplatte. Über Monate summiert sich das auf zweistellige Gigabyte-Beträge, und der OneDrive-Ordner wird still zu einem der größten Ordner auf Laufwerk C.",
            "Unter Windows 11 ist Dateien bei Bedarf standardmäßig aktiviert, neu synchronisierte Dateien sind also zunächst reine Online-Dateien. Doch jede geöffnete Datei wird zur lokalen Kopie und bleibt es, bis jemand das rückgängig macht.",
          ],
        },
        {
          title: "Die Statussymbole richtig lesen",
          content: [
            "Jedes Element im OneDrive-Ordner trägt im Explorer ein kleines Statussymbol, und diese Symbole sagen Ihnen direkt, ob die Datei Speicherplatz belegt.",
            "Eine blaue Wolkenkontur bedeutet: nur online, kein lokaler Speicherverbrauch. Ein grünes Häkchen mit weißer Füllung bedeutet: Eine lokale Kopie existiert, kann bei Bedarf aber automatisch entfernt werden. Ein ausgefülltes grünes Häkchen kennzeichnet Dateien mit \"Immer auf diesem Gerät behalten\" — diese werden nie entfernt, auch nicht von der Speicheroptimierung.",
            "Wenn Sie Platz brauchen, sehen Sie sich zuerst die Ordner mit ausgefülltem grünem Häkchen an. Um die Markierung aufzuheben, klicken Sie mit der rechten Maustaste darauf und entfernen den Haken bei \"Immer auf diesem Gerät behalten\".",
          ],
        },
        {
          title: "Der häufigste Fehler: Dateien bei Bedarf abschalten",
          content: [
            "Wenn die Festplatte volläuft, entdecken viele Nutzer die Einstellung \"Dateien bei Bedarf\" und tun das scheinbar Naheliegende: Sie schalten sie ab. Das ist die schlechteste verfügbare Entscheidung.",
            "Diese Option zu deaktivieren löst den Download Ihrer gesamten OneDrive-Bibliothek auf die Festplatte aus. Bei einem 500-GB-Konto versucht Windows, alles herunterzuladen, und füllt ein ohnehin volles Laufwerk vollständig. Der Name der Funktion führt in die Irre: \"aus\" bedeutet nicht, die Cloud-Verbindung zu trennen, sondern alles lokal vorzuhalten.",
            "Richtig ist genau das Gegenteil: Dateien bei Bedarf aktiviert lassen und lokale Kopien über Speicherplatz freigeben entfernen. Auch das Aufheben der OneDrive-Verknüpfung hilft nicht — dabei stoppt nur die Synchronisierung, heruntergeladene Dateien bleiben auf dem PC.",
          ],
        },
        {
          title: "Weitere Cloud-Reste, die Platz belegen",
          content: [
            "Der eigene Cache und die Protokolldateien von OneDrive sammeln sich unter %LOCALAPPDATA%\\Microsoft\\OneDrive. Dort liegen alte Clientversionen, Setup-Dateien und Synchronisierungsprotokolle, typischerweise einige hundert Megabyte bis wenige Gigabyte, die sich gefahrlos entfernen lassen.",
            "Der Persönliche Tresor nutzt einen eigenen Bereich und hält seine Inhalte im gesperrten Zustand online. Andere Cloud-Clients folgen demselben Muster: Google Drive, Dropbox und iCloud Drive unterhalten allesamt lokale Cache-Ordner, die mit der Zeit anwachsen.",
            "Die Datenträgeranalyse von Disk Mop zeigt auf einer Treemap, was diese Ordner tatsächlich belegen — Sie sehen also, wie viel von Laufwerk C auf OneDrive entfällt, statt es zu schätzen. Das Modul Große Dateien listet alles oberhalb einer Größenschwelle und deckt auf, welche einzelnen Dateien ungenutzt heruntergeladen herumliegen.",
          ],
        },
        {
          title: "Eine dauerhafte Regelung einrichten",
          content: [
            "Eine einmalige Bereinigung reicht für einige Monate, danach stehen Sie wieder am selben Punkt. Die dauerhafte Lösung kombiniert zwei Einstellungen: Setzen Sie in der Speicheroptimierung eine 30-Tage-Schwelle für Cloud-Inhalte und markieren Sie die Ordner, die Sie wirklich offline brauchen, mit \"Immer auf diesem Gerät behalten\".",
            "So bleiben regelmäßig genutzte Dokumente lokal verfügbar, während Archive, die Sie zuletzt vor einem Jahr geöffnet haben, still in die Cloud zurückwandern. Manuelles Eingreifen entfällt, und der Platzbedarf des OneDrive-Ordners bleibt im Gleichgewicht.",
            "Um dieselbe Disziplin auf die gesamte Datenträgerbereinigung auszudehnen, nutzen Sie die geplante Bereinigung von Disk Mop: Eine wöchentliche Aufgabe erfasst temporäre Dateien, Browser-Caches und alte Downloads. Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Warum belegt OneDrive Speicherplatz, wenn die Dateien in der Cloud liegen?",
          answer:
            "Weil OneDrive ein Synchronisierungsclient ist und von geöffneten Dateien eine lokale Kopie behält, damit Sie offline arbeiten können. Einmaliges Öffnen lädt eine Datei dauerhaft herunter, und diese lokale Kopie bleibt auf der Festplatte, bis Sie darauf \"Speicherplatz freigeben\" ausführen.",
        },
        {
          question: "Löscht \"Speicherplatz freigeben\" meine Dateien?",
          answer:
            "Nein. Der Befehl entfernt nur die lokale Kopie auf Ihrem PC; die Datei bleibt in der Cloud und weiterhin im Explorer sichtbar. Ein Doppelklick lädt sie automatisch erneut herunter. Voraussetzung ist lediglich eine Internetverbindung in diesem Moment.",
        },
        {
          question: "Sollte ich Dateien bei Bedarf abschalten?",
          answer:
            "Nein — das ist der häufigste Fehler. Die Funktion zu deaktivieren startet den Download Ihrer gesamten OneDrive-Bibliothek auf die Festplatte und verschärft das Platzproblem erheblich. Lassen Sie die Funktion aktiviert und entfernen Sie lokale Kopien stattdessen über Speicherplatz freigeben.",
        },
        {
          question: "Gibt das Aufheben der OneDrive-Verknüpfung Speicher frei?",
          answer:
            "Nein. Dabei stoppt lediglich die Synchronisierung; bereits heruntergeladene Dateien bleiben unverändert auf dem PC und belegen weiter Platz. Wenn Sie den Speicher zurückwollen, führen Sie vor dem Aufheben der Verknüpfung auf den Ordnern Speicherplatz freigeben aus.",
        },
        {
          question: "Können OneDrive-Dateien automatisch zu Online-Dateien werden?",
          answer:
            "Ja. Unter Einstellungen > System > Speicher > Speicheroptimierung können Sie festlegen, dass Cloud-Dateien automatisch zu reinen Online-Dateien werden, wenn sie einen gewählten Zeitraum lang nicht geöffnet wurden — 14, 30 oder 60 Tage. Ordner mit \"Immer auf diesem Gerät behalten\" sind davon ausgenommen.",
        },
        {
          question: "Wie sehe ich, wie viel Platz mein OneDrive-Ordner belegt?",
          answer:
            "Sie können im Explorer mit der rechten Maustaste auf den OneDrive-Ordner klicken und die Eigenschaften öffnen, das liefert aber nur eine Gesamtsumme. Um den tatsächlich aufgeblähten Unterordner zu finden, ist eine Treemap-Darstellung wie die Datenträgeranalyse von Disk Mop deutlich schneller, da Ordner als flächenproportionale Rechtecke gezeichnet werden.",
        },
      ],
      verdict: [
        "Dass OneDrive Speicherplatz belegt, ist kein Fehler, sondern Absicht: Jede geöffnete Datei wird für den Offlinezugriff lokal vorgehalten. Der richtige Weg, diesen Platz zurückzugewinnen, ist der Rechtsklick auf Ordner und Speicherplatz freigeben — bei aktivierter Funktion Dateien bei Bedarf.",
        "Zwei Schritte sollten Sie vermeiden: Dateien bei Bedarf abzuschalten (lädt alles herunter) und die OneDrive-Verknüpfung aufzuheben (löscht nichts). Beides wirkt naheliegend, beides hilft nicht.",
        "Für eine dauerhafte Lösung setzen Sie in der Speicheroptimierung eine 30-Tage-Schwelle und markieren nur die wirklich offline benötigten Ordner mit \"immer auf diesem Gerät behalten\". Danach trägt sich die Regelung von selbst.",
      ],
      ctaText: "Sehen Sie, was Ihr OneDrive-Ordner wirklich belegt",
    },
    fr: {
      title: "Pourquoi OneDrive occupe-t-il de l'espace disque et comment le récupérer ?",
      metaDescription:
        "Votre dossier OneDrive prend de la place alors que les fichiers sont dans le cloud ? La cause : Fichiers à la demande. Comment libérer de l'espace et automatiser.",
      subtitle: "Fichiers à la demande, Libérer de l'espace et fichiers en ligne uniquement",
      intro: [
        "Réponse courte : les fichiers OneDrive occupent de l'espace disque dès qu'une copie locale existe sur votre PC, même s'ils sont également stockés dans le cloud. La solution consiste à faire un clic droit sur un dossier situé dans votre dossier OneDrive et à choisir « Libérer de l'espace » (Free up space) : le fichier continue d'apparaître dans l'Explorateur de fichiers, mais il ne réside plus que dans le cloud. Pour rendre l'opération permanente, activez l'option de l'Assistant Stockage qui rend automatiquement les fichiers cloud disponibles en ligne uniquement au bout d'un nombre de jours que vous choisissez.",
        "C'est le point qui surprend le plus les utilisateurs de OneDrive : les fichiers sont « dans le cloud » et pourtant le disque C: continue de se remplir. La raison tient au comportement par défaut de OneDrive, qui conserve une copie locale de tout ce qu'il synchronise, et au fait que chaque fichier ouvert est discrètement téléchargé. Ce guide explique comment récupérer cet espace, comment automatiser l'opération et quelle erreur courante aggrave nettement le problème.",
      ],
      keyTakeaways: [
        "Les fichiers OneDrive occupent de l'espace disque dès qu'une copie locale existe, qu'ils soient ou non également présents dans le cloud.",
        "« Libérer de l'espace » ne supprime rien : cette commande retire uniquement la copie locale et le fichier reste visible dans l'Explorateur de fichiers.",
        "Un nuage en contour signifie en ligne uniquement, une coche verte creuse indique une copie locale, et une coche verte pleine correspond à « Toujours conserver sur cet appareil » (Always keep on this device).",
        "L'Assistant Stockage peut rendre automatiquement les fichiers OneDrive disponibles en ligne uniquement s'ils n'ont pas été ouverts depuis un nombre de jours que vous définissez.",
        "DÉSACTIVER Fichiers à la demande (Files On-Demand) télécharge toute votre bibliothèque cloud sur le disque : cela aggrave le problème au lieu de le résoudre.",
        "Dissocier OneDrive ne supprime pas les fichiers locaux : ils restent sur le PC et continuent d'occuper de l'espace.",
      ],
      howTo: {
        name: "Libérer de l'espace disque avec OneDrive",
        totalTime: "PT5M",
        steps: [
          {
            name: "Vérifier que Fichiers à la demande est activé",
            text: "Cliquez sur l'icône nuage de OneDrive dans la zone de notification, ouvrez les Paramètres via l'icône d'engrenage, puis allez dans Synchronisation et sauvegarde et ouvrez les Paramètres avancés. Assurez-vous que Fichiers à la demande est activé.",
          },
          {
            name: "Ouvrir le dossier OneDrive dans l'Explorateur de fichiers",
            text: "Ouvrez l'Explorateur de fichiers et cliquez sur l'entrée OneDrive dans le volet de navigation, à gauche. Observez les icônes d'état à côté des dossiers et des fichiers : un nuage en contour signale un élément en ligne uniquement, une coche verte une copie locale.",
          },
          {
            name: "Sélectionner les dossiers à vider",
            text: "Choisissez les gros dossiers que vous n'avez pas ouverts depuis longtemps. Les anciennes archives de projets, les dossiers de photos et les vidéothèques rapportent généralement le plus. Maintenez la touche Ctrl enfoncée pour sélectionner plusieurs dossiers d'un coup.",
          },
          {
            name: "Lancer Libérer de l'espace",
            text: "Faites un clic droit sur la sélection et choisissez Libérer de l'espace. Les fichiers disparaissent du disque mais restent visibles dans l'Explorateur de fichiers, et un double-clic suffit à les retélécharger automatiquement.",
          },
          {
            name: "Automatiser l'opération",
            text: "Ouvrez Paramètres > Système > Stockage > Assistant Stockage. Dans la section consacrée au contenu cloud, demandez que les fichiers deviennent disponibles en ligne uniquement s'ils n'ont pas été ouverts pendant une durée au choix : 14, 30 ou 60 jours.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi OneDrive utilise-t-il de l'espace local ?",
          content: [
            "OneDrive est un service de stockage cloud, mais sous Windows il fonctionne comme un client de synchronisation. Autrement dit, les fichiers du dossier peuvent exister à la fois dans le cloud et, éventuellement, sur votre PC. Ce comportement existe pour vous permettre de travailler sans connexion Internet, et il ne devient gênant que le jour où le disque se remplit.",
            "La véritable source de confusion, c'est qu'ouvrir un fichier une seule fois le télécharge définitivement. Une présentation de 2 GB ouverte il y a trois ans occupe peut-être encore votre disque aujourd'hui. Au fil des mois, cette accumulation atteint des dizaines de gigaoctets et le dossier OneDrive devient discrètement l'un des plus volumineux du disque C:.",
            "Sous Windows 11, Fichiers à la demande est activé par défaut : les fichiers nouvellement synchronisés sont donc d'abord disponibles en ligne uniquement. Mais chaque fichier que vous ouvrez se transforme en copie locale et le reste tant que personne ne fait marche arrière.",
          ],
        },
        {
          title: "Lire correctement les icônes d'état",
          content: [
            "Dans l'Explorateur de fichiers, chaque élément de votre dossier OneDrive porte une petite icône d'état, et ces icônes vous disent directement si le fichier consomme de l'espace disque.",
            "Un nuage bleu en contour indique un fichier en ligne uniquement, qui n'occupe aucune place locale. Une coche au contour vert sur fond blanc signale qu'une copie locale existe, mais qu'elle peut être retirée automatiquement en cas de besoin. Une coche verte pleine marque les fichiers définis sur « Toujours conserver sur cet appareil » : ceux-là ne sont jamais retirés, pas même par l'Assistant Stockage.",
            "Quand vous cherchez de la place, commencez par examiner les dossiers à coche verte pleine. Pour retirer ce marquage, faites un clic droit sur le dossier et décochez « Toujours conserver sur cet appareil ».",
          ],
        },
        {
          title: "L'erreur la plus courante : désactiver Fichiers à la demande",
          content: [
            "Lorsque le disque se remplit, beaucoup d'utilisateurs repèrent le réglage « Fichiers à la demande » dans OneDrive et font ce qui semble logique : ils le désactivent. C'est la pire décision possible.",
            "Désactiver cette option déclenche le téléchargement de toute votre bibliothèque OneDrive sur le disque. Avec un compte OneDrive de 500 GB, Windows va tenter de tout rapatrier et remplir complètement un disque déjà saturé. Le nom de la fonction induit en erreur : « désactivé » ne veut pas dire se déconnecter du cloud, mais tout localiser.",
            "La bonne direction est exactement inverse : laisser Fichiers à la demande activé et supprimer les copies locales avec Libérer de l'espace. Dissocier OneDrive n'aide pas davantage — la dissociation arrête seulement la synchronisation, les fichiers déjà téléchargés restent sur le PC.",
          ],
        },
        {
          title: "Les autres résidus cloud qui prennent de la place",
          content: [
            "Le cache et les journaux de OneDrive lui-même s'accumulent dans %LOCALAPPDATA%\\Microsoft\\OneDrive. On y trouve d'anciennes versions du client, des fichiers d'installation et des journaux de synchronisation, généralement de quelques centaines de mégaoctets à quelques gigaoctets, et tout cela peut être supprimé sans risque.",
            "Le Coffre-fort personnel (Personal Vault) utilise une zone distincte et conserve son contenu en ligne tant qu'il est verrouillé. Les autres clients cloud suivent le même schéma : Google Drive, Dropbox et iCloud Drive entretiennent tous des dossiers de cache locaux qui enflent avec le temps.",
            "L'Analyse du disque (Disk Analysis) de Disk Mop montre sur une treemap ce que ces dossiers contiennent réellement : vous voyez la part du disque C: occupée par OneDrive au lieu de la deviner. Le module Gros fichiers (Large Files) liste tout ce qui dépasse un seuil de taille et révèle quels fichiers isolés dorment sur le disque, téléchargés et inutilisés.",
          ],
        },
        {
          title: "Mettre en place une organisation durable",
          content: [
            "Un nettoyage ponctuel vous fait gagner quelques mois avant de revenir au point de départ. La solution durable combine deux réglages : fixez un seuil de 30 jours pour le contenu cloud dans l'Assistant Stockage, et ne marquez « Toujours conserver sur cet appareil » que les dossiers dont vous avez réellement besoin hors connexion.",
            "Avec cette organisation, les documents que vous utilisez régulièrement restent locaux tandis que les archives ouvertes pour la dernière fois il y a un an repartent discrètement dans le cloud. Aucune intervention manuelle n'est nécessaire et l'empreinte du dossier OneDrive reste stable.",
            "Pour étendre la même discipline au nettoyage du disque en général, utilisez le nettoyage planifié de Disk Mop : une tâche hebdomadaire rassemble les fichiers temporaires, les caches des navigateurs et les anciens téléchargements. Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Pourquoi OneDrive occupe-t-il de l'espace disque si les fichiers sont dans le cloud ?",
          answer:
            "Parce que OneDrive est un client de synchronisation : il conserve une copie locale des fichiers que vous ouvrez afin que vous puissiez travailler hors connexion. Ouvrir un fichier une seule fois le télécharge définitivement, et cette copie locale reste sur le disque tant que vous n'exécutez pas la commande « Libérer de l'espace » dessus.",
        },
        {
          question: "Est-ce que « Libérer de l'espace » supprime mes fichiers ?",
          answer:
            "Non. La commande retire uniquement la copie locale présente sur votre PC ; le fichier reste dans le cloud et continue d'apparaître dans l'Explorateur de fichiers. Un double-clic le retélécharge automatiquement. La seule condition est de disposer d'une connexion Internet à ce moment-là.",
        },
        {
          question: "Faut-il désactiver Fichiers à la demande ?",
          answer:
            "Non, c'est l'erreur la plus fréquente. Désactiver la fonction lance le téléchargement de toute votre bibliothèque OneDrive sur le disque et aggrave nettement le manque de place. Pour récupérer de l'espace, laissez la fonction activée et supprimez plutôt les copies locales avec Libérer de l'espace.",
        },
        {
          question: "Dissocier OneDrive libère-t-il de l'espace ?",
          answer:
            "Non. La dissociation arrête la synchronisation, mais les fichiers déjà téléchargés sur le PC restent exactement là où ils sont et continuent d'occuper de la place. Si vous voulez récupérer l'espace, exécutez Libérer de l'espace sur les dossiers avant de dissocier le compte.",
        },
        {
          question: "Peut-on rendre les fichiers OneDrive disponibles en ligne uniquement de façon automatique ?",
          answer:
            "Oui. Dans Paramètres > Système > Stockage > Assistant Stockage, vous pouvez demander que les fichiers cloud deviennent disponibles en ligne uniquement s'ils n'ont pas été ouverts pendant une durée au choix : 14, 30 ou 60 jours. Les dossiers marqués « Toujours conserver sur cet appareil » sont exclus de ce traitement.",
        },
        {
          question: "Comment savoir quelle place occupe mon dossier OneDrive ?",
          answer:
            "Vous pouvez faire un clic droit sur le dossier OneDrive dans l'Explorateur de fichiers et consulter les Propriétés, mais cela ne donne qu'un total. Pour repérer le sous-dossier réellement gonflé, une visualisation en treemap comme l'Analyse du disque de Disk Mop est bien plus rapide, puisque les dossiers y sont dessinés sous forme de surfaces proportionnelles à leur taille réelle.",
        },
      ],
      verdict: [
        "Que OneDrive occupe de l'espace disque n'est pas un défaut mais une intention : chaque fichier ouvert est conservé localement pour l'accès hors connexion. La bonne façon de récupérer cet espace consiste à faire un clic droit sur les dossiers et à choisir Libérer de l'espace, tout en laissant Fichiers à la demande activé.",
        "Deux gestes sont à éviter : désactiver Fichiers à la demande (ce qui télécharge tout) et dissocier OneDrive (ce qui ne supprime rien). Les deux paraissent intuitifs, aucun ne fonctionne.",
        "Pour une solution durable, fixez un seuil de 30 jours dans l'Assistant Stockage et ne marquez « toujours conserver sur cet appareil » que les dossiers dont vous avez vraiment besoin hors connexion. Ensuite, l'organisation se maintient toute seule.",
      ],
      ctaText: "Découvrez ce que contient vraiment votre dossier OneDrive",
    },
    es: {
      title: "¿Por qué OneDrive ocupa espacio en disco y cómo lo recupero?",
      metaDescription:
        "¿Tu carpeta de OneDrive ocupa espacio aunque los archivos estén en la nube? La causa es Archivos a petición. Cómo liberar espacio, automatizarlo y el error que evitar.",
      subtitle: "Archivos a petición, Liberar espacio y archivos solo en línea",
      intro: [
        "Respuesta corta: los archivos de OneDrive ocupan espacio en disco siempre que exista una copia local en tu PC, aunque también estén guardados en la nube. La solución es hacer clic derecho en una carpeta dentro de tu carpeta de OneDrive y elegir « Liberar espacio » (Free up space): el archivo sigue apareciendo en el Explorador de archivos, pero pasa a residir solo en la nube. Para que sea permanente, activa la opción del Sensor de almacenamiento que convierte los archivos de la nube en archivos solo en línea después del número de días que elijas.",
        "Este es el punto que más sorprende a los usuarios de OneDrive: los archivos están « en la nube » y aun así la unidad C: se sigue llenando. El motivo es que el comportamiento predeterminado de OneDrive conserva una copia local de todo lo que sincroniza, y cada archivo que abres se descarga en silencio. Esta guía explica cómo recuperar el espacio, cómo automatizar el proceso y cuál es el error habitual que empeora bastante la situación.",
      ],
      keyTakeaways: [
        "Los archivos de OneDrive ocupan espacio en disco siempre que exista una copia local, con independencia de que también estén en la nube.",
        "« Liberar espacio » no borra nada: solo elimina la copia local y el archivo sigue apareciendo en el Explorador de archivos.",
        "Un icono de nube sin relleno significa solo en línea, una marca verde hueca indica que hay copia local y una marca verde sólida corresponde a « Conservar siempre en este dispositivo » (Always keep on this device).",
        "El Sensor de almacenamiento puede convertir los archivos de OneDrive en archivos solo en línea de forma automática cuando llevan sin abrirse los días que tú indiques.",
        "DESACTIVAR Archivos a petición (Files On-Demand) descarga toda tu biblioteca de la nube al disco: empeora el problema en lugar de resolverlo.",
        "Desvincular OneDrive no borra los archivos locales; siguen en el PC y continúan ocupando espacio.",
      ],
      howTo: {
        name: "Liberar espacio en disco con OneDrive",
        totalTime: "PT5M",
        steps: [
          {
            name: "Comprobar que Archivos a petición está activado",
            text: "Haz clic en el icono de nube de OneDrive del área de notificación, abre Configuración desde el icono del engranaje, entra en Sincronización y copia de seguridad y abre la Configuración avanzada. Asegúrate de que Archivos a petición esté activado.",
          },
          {
            name: "Abrir la carpeta de OneDrive en el Explorador de archivos",
            text: "Abre el Explorador de archivos y haz clic en la entrada OneDrive del panel de navegación de la izquierda. Fíjate en los iconos de estado junto a carpetas y archivos: una nube sin relleno indica solo en línea y una marca verde, que existe una copia local.",
          },
          {
            name: "Seleccionar las carpetas que quieres vaciar",
            text: "Elige carpetas grandes que lleves mucho tiempo sin abrir. Los archivos de proyectos antiguos, las carpetas de fotos y las bibliotecas de vídeo suelen dar el mayor rendimiento. Mantén pulsada la tecla Ctrl para seleccionar varias carpetas a la vez.",
          },
          {
            name: "Ejecutar Liberar espacio",
            text: "Haz clic derecho sobre la selección y elige Liberar espacio. Los archivos desaparecen del disco pero siguen visibles en el Explorador de archivos, y al hacer doble clic se descargan de nuevo automáticamente.",
          },
          {
            name: "Automatizar el proceso",
            text: "Ve a Configuración > Sistema > Almacenamiento > Sensor de almacenamiento. En el apartado de contenido en la nube, indica que los archivos pasen a estar solo en línea de forma automática cuando lleven sin abrirse un periodo a tu elección: 14, 30 o 60 días.",
          },
        ],
      },
      sections: [
        {
          title: "¿Por qué OneDrive usa espacio local?",
          content: [
            "OneDrive es un servicio de almacenamiento en la nube, pero en Windows funciona como un cliente de sincronización. Eso significa que los archivos de la carpeta pueden existir a la vez en la nube y, opcionalmente, en tu PC. Este comportamiento está pensado para que puedas trabajar sin conexión a Internet y solo se convierte en un problema cuando el disco se llena.",
            "La verdadera fuente de confusión es que abrir un archivo una sola vez lo descarga de forma permanente. Una presentación de 2 GB que abriste hace tres años puede seguir hoy en tu disco. Con los meses, esa acumulación llega a decenas de gigabytes y la carpeta de OneDrive se convierte sin hacer ruido en una de las más grandes de la unidad C:.",
            "En Windows 11, Archivos a petición viene activado de fábrica, así que los archivos recién sincronizados empiezan estando solo en línea. Pero cada archivo que abres se convierte en copia local y sigue así hasta que alguien lo revierte.",
          ],
        },
        {
          title: "Cómo leer los iconos de estado",
          content: [
            "Cada elemento de tu carpeta de OneDrive lleva un pequeño icono de estado en el Explorador de archivos, y esos iconos te dicen directamente si el archivo está consumiendo espacio en disco.",
            "Una nube azul sin relleno indica que el archivo está solo en línea y no ocupa espacio local. Una marca de verificación con borde verde sobre fondo blanco significa que existe una copia local, pero que puede retirarse automáticamente si hace falta. Una marca verde sólida señala los archivos definidos como « Conservar siempre en este dispositivo »: esos no se retiran nunca, ni siquiera con el Sensor de almacenamiento.",
            "Cuando necesites espacio, mira primero las carpetas con la marca verde sólida. Para quitarles esa marca, haz clic derecho y desactiva « Conservar siempre en este dispositivo ».",
          ],
        },
        {
          title: "El error más común: desactivar Archivos a petición",
          content: [
            "Cuando el disco se llena, muchos usuarios encuentran el ajuste « Archivos a petición » en OneDrive y hacen lo que parece lógico: desactivarlo. Es la peor decisión posible.",
            "Desactivar esa opción provoca la descarga de toda tu biblioteca de OneDrive al disco. Si tienes una cuenta de OneDrive de 500 GB, Windows intentará traerlo todo y llenará por completo una unidad que ya estaba al límite. El nombre de la función engaña: « desactivado » no significa desconectarse de la nube, sino guardarlo todo en local.",
            "La dirección correcta es justo la contraria: dejar Archivos a petición activado y limpiar las copias locales con Liberar espacio. Desvincular OneDrive tampoco ayuda — al desvincular solo se detiene la sincronización y los archivos ya descargados permanecen en el PC.",
          ],
        },
        {
          title: "Otros restos de la nube que ocupan espacio",
          content: [
            "La propia caché y los registros de OneDrive se acumulan en %LOCALAPPDATA%\\Microsoft\\OneDrive. Ahí se guardan versiones antiguas del cliente, archivos de instalación y registros de sincronización, normalmente entre unos cientos de megabytes y unos pocos gigabytes, y se pueden borrar sin riesgo.",
            "El Almacén personal (Personal Vault) usa un área aparte y mantiene su contenido en línea mientras está bloqueado. El resto de clientes de nube siguen el mismo patrón: Google Drive, Dropbox e iCloud Drive mantienen carpetas de caché locales que se hinchan con el tiempo.",
            "El Análisis de disco (Disk Analysis) de Disk Mop muestra en un treemap lo que contienen realmente esas carpetas, de modo que ves qué parte de la unidad C: ocupa OneDrive en lugar de adivinarlo. Archivos grandes (Large Files) lista todo lo que supera un umbral de tamaño y revela qué archivos sueltos están descargados sin usarse.",
          ],
        },
        {
          title: "Montar un sistema que dure",
          content: [
            "Una limpieza puntual te da unos meses de margen antes de volver al mismo punto. La solución duradera combina dos ajustes: fija un umbral de 30 días para el contenido en la nube en el Sensor de almacenamiento y marca como « Conservar siempre en este dispositivo » solo las carpetas que de verdad necesitas sin conexión.",
            "Con ese sistema, los documentos que usas a diario se quedan en local mientras los archivos que abriste por última vez hace un año vuelven en silencio a la nube. No hace falta intervenir a mano y la huella de la carpeta de OneDrive se mantiene estable.",
            "Para extender la misma disciplina a la limpieza del disco en general, usa la limpieza programada de Disk Mop: una tarea semanal recoge archivos temporales, cachés de navegador y descargas antiguas. Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Por qué OneDrive ocupa espacio en disco si los archivos están en la nube?",
          answer:
            "Porque OneDrive es un cliente de sincronización y guarda una copia local de los archivos que abres para que puedas trabajar sin conexión. Abrir un archivo una sola vez lo descarga de forma permanente, y esa copia local se queda en el disco hasta que ejecutas sobre ella el comando « Liberar espacio ».",
        },
        {
          question: "¿« Liberar espacio » borra mis archivos?",
          answer:
            "No. El comando elimina únicamente la copia local de tu PC; el archivo sigue en la nube y continúa apareciendo en el Explorador de archivos. Al hacer doble clic se vuelve a descargar automáticamente. El único requisito es tener conexión a Internet en ese momento.",
        },
        {
          question: "¿Debo desactivar Archivos a petición?",
          answer:
            "No, este es el error más común. Desactivar la función inicia la descarga de toda tu biblioteca de OneDrive al disco y agrava bastante el problema de espacio. Para recuperar espacio, deja la función activada y limpia las copias locales con Liberar espacio.",
        },
        {
          question: "¿Desvincular OneDrive libera espacio?",
          answer:
            "No. Al desvincular se detiene la sincronización, pero los archivos ya descargados en el PC se quedan exactamente donde están y siguen ocupando espacio. Si quieres recuperar ese espacio, ejecuta Liberar espacio sobre las carpetas antes de desvincular la cuenta.",
        },
        {
          question: "¿Se pueden poner los archivos de OneDrive solo en línea automáticamente?",
          answer:
            "Sí. En Configuración > Sistema > Almacenamiento > Sensor de almacenamiento puedes hacer que los archivos de la nube pasen a estar solo en línea de forma automática cuando lleven sin abrirse un periodo a tu elección: 14, 30 o 60 días. Las carpetas marcadas como « Conservar siempre en este dispositivo » quedan excluidas.",
        },
        {
          question: "¿Cómo veo cuánto espacio ocupa mi carpeta de OneDrive?",
          answer:
            "Puedes hacer clic derecho en la carpeta de OneDrive en el Explorador de archivos y mirar Propiedades, pero eso solo da un total. Para localizar qué subcarpeta se ha hinchado de verdad, una visualización de treemap como el Análisis de disco de Disk Mop es mucho más rápida, porque dibuja las carpetas como áreas proporcionales a su tamaño real.",
        },
      ],
      verdict: [
        "Que OneDrive ocupe espacio en disco no es un fallo, sino el diseño previsto: cada archivo que abres se conserva en local para poder acceder a él sin conexión. La forma correcta de recuperar ese espacio es hacer clic derecho en las carpetas y elegir Liberar espacio, dejando Archivos a petición activado.",
        "Hay dos movimientos que conviene evitar: desactivar Archivos a petición (que lo descarga todo) y desvincular OneDrive (que no borra nada). Los dos parecen intuitivos y ninguno funciona.",
        "Para una solución duradera, fija un umbral de 30 días en el Sensor de almacenamiento y marca como « conservar siempre en este dispositivo » solo las carpetas que necesitas de verdad sin conexión. A partir de ahí, el sistema se mantiene solo.",
      ],
      ctaText: "Descubre lo que guarda de verdad tu carpeta de OneDrive",
    },
    it: {
      title: "Perché OneDrive occupa spazio su disco e come recuperarlo",
      metaDescription:
        "La cartella OneDrive occupa spazio anche se i file sono nel cloud? La causa è File su richiesta. Come liberare spazio, automatizzarlo ed evitare l'errore più comune.",
      subtitle: "File su richiesta, Libera spazio e file solo online",
      intro: [
        "Risposta breve: i file di OneDrive occupano spazio su disco ogni volta che esiste una copia locale sul PC, anche se sono archiviati pure nel cloud. La soluzione è fare clic con il tasto destro su una cartella all'interno della cartella OneDrive e scegliere « Libera spazio » (Free up space): il file continua a comparire in Esplora file, ma resta soltanto nel cloud. Per rendere l'operazione permanente, attiva l'opzione del Sensore memoria che rende i file cloud automaticamente solo online dopo un numero di giorni scelto da te.",
        "È questo il punto che sorprende di più chi usa OneDrive: i file sono « nel cloud », eppure l'unità C: continua a riempirsi. Il motivo è che il comportamento predefinito di OneDrive conserva una copia locale di tutto ciò che sincronizza e ogni file aperto viene scaricato in silenzio. Questa guida spiega come recuperare lo spazio, come automatizzare la procedura e qual è l'errore comune che peggiora nettamente la situazione.",
      ],
      keyTakeaways: [
        "I file di OneDrive occupano spazio su disco ogni volta che esiste una copia locale, indipendentemente dal fatto che si trovino anche nel cloud.",
        "« Libera spazio » non elimina nulla: rimuove soltanto la copia locale e il file continua a comparire in Esplora file.",
        "L'icona a nuvola vuota indica solo online, il segno di spunta verde con interno bianco indica una copia locale e il segno di spunta verde pieno corrisponde a « Mantieni sempre su questo dispositivo » (Always keep on this device).",
        "Il Sensore memoria può rendere i file di OneDrive solo online in automatico quando non vengono aperti per il numero di giorni che imposti.",
        "DISATTIVARE File su richiesta (Files On-Demand) scarica sul disco l'intera libreria cloud: peggiora il problema invece di risolverlo.",
        "Scollegare OneDrive non elimina i file locali: restano sul PC e continuano a occupare spazio.",
      ],
      howTo: {
        name: "Liberare spazio su disco con OneDrive",
        totalTime: "PT5M",
        steps: [
          {
            name: "Verificare che File su richiesta sia attivo",
            text: "Fai clic sull'icona della nuvola di OneDrive nell'area di notifica, apri le Impostazioni dall'icona dell'ingranaggio, poi vai in Sincronizzazione e backup e apri le Impostazioni avanzate. Assicurati che File su richiesta sia attivo.",
          },
          {
            name: "Aprire la cartella OneDrive in Esplora file",
            text: "Apri Esplora file e fai clic sulla voce OneDrive nel riquadro di spostamento a sinistra. Osserva le icone di stato accanto a cartelle e file: la nuvola vuota indica un elemento solo online, il segno di spunta verde una copia locale.",
          },
          {
            name: "Selezionare le cartelle da svuotare",
            text: "Scegli le cartelle grandi che non apri da molto tempo. Vecchi archivi di progetto, cartelle di foto e raccolte di video sono di solito quelle che rendono di più. Tieni premuto Ctrl per selezionare più cartelle contemporaneamente.",
          },
          {
            name: "Eseguire Libera spazio",
            text: "Fai clic con il tasto destro sulla selezione e scegli Libera spazio. I file spariscono dal disco ma restano visibili in Esplora file e un doppio clic li riscarica automaticamente.",
          },
          {
            name: "Automatizzare la procedura",
            text: "Apri Impostazioni > Sistema > Archiviazione > Sensore memoria. Nella sezione dedicata ai contenuti cloud, imposta che i file diventino solo online in automatico se non vengono aperti per un periodo a tua scelta: 14, 30 o 60 giorni.",
          },
        ],
      },
      sections: [
        {
          title: "Perché OneDrive usa spazio locale?",
          content: [
            "OneDrive è un servizio di archiviazione cloud, ma su Windows funziona come client di sincronizzazione. Significa che i file nella cartella possono esistere sia nel cloud sia, facoltativamente, sul PC. Questo comportamento serve a farti lavorare anche senza connessione a Internet e diventa un problema solo quando il disco si riempie.",
            "La vera fonte di confusione è che aprire un file una sola volta lo scarica in modo permanente. Una presentazione da 2 GB aperta tre anni fa potrebbe essere ancora oggi sul tuo disco. Nel giro di qualche mese l'accumulo arriva a decine di gigabyte e la cartella OneDrive diventa silenziosamente una delle più grandi dell'unità C:.",
            "Su Windows 11 File su richiesta è attivo per impostazione predefinita, quindi i file appena sincronizzati partono come solo online. Ma ogni file che apri si trasforma in copia locale e tale resta finché qualcuno non fa il passo inverso.",
          ],
        },
        {
          title: "Leggere le icone di stato",
          content: [
            "In Esplora file ogni elemento della cartella OneDrive ha una piccola icona di stato, e quelle icone ti dicono subito se il file sta usando spazio su disco.",
            "Una nuvola azzurra vuota indica che il file è solo online e non occupa spazio locale. Un segno di spunta con bordo verde su sfondo bianco indica che esiste una copia locale, che però può essere rimossa automaticamente se serve. Un segno di spunta verde pieno contrassegna i file impostati su « Mantieni sempre su questo dispositivo »: quelli non vengono mai rimossi, nemmeno dal Sensore memoria.",
            "Quando ti serve spazio, guarda prima le cartelle con il segno di spunta verde pieno. Per togliere quel contrassegno basta fare clic con il tasto destro e deselezionare « Mantieni sempre su questo dispositivo ».",
          ],
        },
        {
          title: "L'errore più comune: disattivare File su richiesta",
          content: [
            "Quando il disco si riempie, molti utenti trovano l'impostazione « File su richiesta » in OneDrive e fanno la cosa che sembra logica: la disattivano. È la mossa peggiore possibile.",
            "Disattivare quell'opzione avvia il download sull'unità dell'intera libreria OneDrive. Con un account da 500 GB, Windows proverà a scaricare tutto e riempirà completamente un disco già saturo. Il nome della funzione trae in inganno: « disattivata » non vuol dire scollegarsi dal cloud, ma tenere tutto in locale.",
            "La direzione giusta è esattamente opposta: lasciare File su richiesta attivo e ripulire le copie locali con Libera spazio. Nemmeno scollegare OneDrive aiuta — quando scolleghi l'account si ferma solo la sincronizzazione e i file già scaricati restano sul PC.",
          ],
        },
        {
          title: "Altri residui cloud che occupano spazio",
          content: [
            "La cache e i file di log di OneDrive stesso si accumulano in %LOCALAPPDATA%\\Microsoft\\OneDrive. Lì si trovano vecchie versioni del client, file di installazione e log di sincronizzazione, di solito da qualche centinaio di megabyte a pochi gigabyte, ed è materiale che si può eliminare senza rischi.",
            "La Cassaforte personale (Personal Vault) usa un'area separata e tiene i contenuti online finché resta bloccata. Gli altri client cloud seguono lo stesso schema: Google Drive, Dropbox e iCloud Drive mantengono tutti cartelle di cache locali che si gonfiano col tempo.",
            "L'Analisi disco (Disk Analysis) di Disk Mop mostra su una treemap che cosa contengono davvero queste cartelle: vedi quanta parte dell'unità C: occupa OneDrive invece di tirare a indovinare. File di grandi dimensioni (Large Files) elenca tutto ciò che supera una soglia di dimensione e rivela quali singoli file restano scaricati e inutilizzati.",
          ],
        },
        {
          title: "Impostare una soluzione che duri",
          content: [
            "Una pulizia una tantum ti regala qualche mese prima di ritrovarti al punto di partenza. La soluzione duratura combina due impostazioni: fissa nel Sensore memoria una soglia di 30 giorni per i contenuti cloud e contrassegna come « Mantieni sempre su questo dispositivo » solo le cartelle che ti servono davvero offline.",
            "Con questa impostazione i documenti che usi di frequente restano in locale, mentre gli archivi aperti l'ultima volta un anno fa tornano silenziosamente nel cloud. Non serve alcun intervento manuale e l'ingombro della cartella OneDrive resta in equilibrio.",
            "Per estendere la stessa disciplina alla pulizia del disco in generale, usa la pulizia pianificata di Disk Mop: un'attività settimanale raccoglie file temporanei, cache dei browser e vecchi download. Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "Perché OneDrive occupa spazio su disco se i file sono nel cloud?",
          answer:
            "Perché OneDrive è un client di sincronizzazione e conserva una copia locale dei file che apri, così puoi lavorare offline. Aprire un file una sola volta lo scarica in modo permanente, e quella copia locale resta sul disco finché non esegui su di essa il comando « Libera spazio ».",
        },
        {
          question: "« Libera spazio » elimina i miei file?",
          answer:
            "No. Il comando rimuove solo la copia locale presente sul PC; il file resta nel cloud e continua a comparire in Esplora file. Un doppio clic lo riscarica automaticamente. L'unico requisito è avere una connessione a Internet in quel momento.",
        },
        {
          question: "Conviene disattivare File su richiesta?",
          answer:
            "No, è l'errore più comune. Disattivare la funzione avvia il download dell'intera libreria OneDrive sul disco e peggiora nettamente il problema di spazio. Per recuperare spazio lascia la funzione attiva e ripulisci le copie locali con Libera spazio.",
        },
        {
          question: "Scollegare OneDrive libera spazio?",
          answer:
            "No. Lo scollegamento interrompe la sincronizzazione, ma i file già scaricati sul PC restano esattamente dove sono e continuano a occupare spazio. Se vuoi recuperare lo spazio, esegui Libera spazio sulle cartelle prima di scollegare l'account.",
        },
        {
          question: "I file di OneDrive possono diventare solo online in automatico?",
          answer:
            "Sì. In Impostazioni > Sistema > Archiviazione > Sensore memoria puoi far sì che i file cloud diventino solo online automaticamente quando non vengono aperti per un periodo a tua scelta: 14, 30 o 60 giorni. Le cartelle contrassegnate come « Mantieni sempre su questo dispositivo » sono escluse.",
        },
        {
          question: "Come faccio a vedere quanto spazio occupa la cartella OneDrive?",
          answer:
            "Puoi fare clic con il tasto destro sulla cartella OneDrive in Esplora file e aprire le Proprietà, ma così ottieni solo un totale. Per capire quale sottocartella si è davvero gonfiata è molto più rapida una visualizzazione a treemap come l'Analisi disco di Disk Mop, che disegna le cartelle come aree proporzionali alla dimensione reale.",
        },
      ],
      verdict: [
        "Che OneDrive occupi spazio su disco non è un difetto ma una scelta progettuale: ogni file che apri viene tenuto in locale per l'accesso offline. Il modo corretto di recuperare quello spazio è fare clic con il tasto destro sulle cartelle e scegliere Libera spazio, lasciando File su richiesta attivo.",
        "Ci sono due mosse da evitare: disattivare File su richiesta (scarica tutto) e scollegare OneDrive (non elimina nulla). Entrambe sembrano intuitive e nessuna delle due funziona.",
        "Per una soluzione duratura, imposta una soglia di 30 giorni nel Sensore memoria e contrassegna come « mantieni sempre su questo dispositivo » solo le cartelle che ti servono davvero offline. Da quel momento l'impostazione si mantiene da sola.",
      ],
      ctaText: "Scopri che cosa contiene davvero la tua cartella OneDrive",
    },
    pt: {
      title: "Por que o OneDrive ocupa espaço em disco e como recuperar esse espaço",
      metaDescription:
        "Sua pasta do OneDrive ocupa espaço mesmo com os arquivos na nuvem? A causa é Arquivos Sob Demanda. Como liberar espaço, automatizar tudo e evitar o erro mais comum.",
      subtitle: "Arquivos Sob Demanda, Liberar espaço e arquivos somente online",
      intro: [
        "Resposta curta: os arquivos do OneDrive ocupam espaço em disco sempre que existe uma cópia local no PC, mesmo estando também guardados na nuvem. A solução é clicar com o botão direito em uma pasta dentro da sua pasta do OneDrive e escolher “Liberar espaço” (Free up space): o arquivo continua aparecendo no Explorador de Arquivos, mas passa a existir apenas na nuvem. Para tornar isso permanente, ative a opção do Sensor de Armazenamento que transforma os arquivos da nuvem em arquivos somente online depois de um número de dias definido por você.",
        "Esse é o ponto que mais surpreende quem usa o OneDrive: os arquivos estão “na nuvem” e mesmo assim a unidade C: continua enchendo. O motivo é que o comportamento padrão do OneDrive mantém uma cópia local de tudo o que sincroniza, e cada arquivo que você abre é baixado silenciosamente. Este guia mostra como recuperar o espaço, como automatizar o processo e qual é o erro comum que piora bastante a situação.",
      ],
      keyTakeaways: [
        "Os arquivos do OneDrive ocupam espaço em disco sempre que existe uma cópia local, independentemente de também estarem na nuvem.",
        "“Liberar espaço” não apaga nada: remove apenas a cópia local, e o arquivo continua aparecendo no Explorador de Arquivos.",
        "O ícone de nuvem vazada significa somente online, o visto verde vazado indica que existe cópia local e o visto verde preenchido corresponde a “Sempre manter neste dispositivo” (Always keep on this device).",
        "O Sensor de Armazenamento pode tornar os arquivos do OneDrive somente online automaticamente quando eles ficam sem ser abertos pelo número de dias que você definir.",
        "DESLIGAR o Arquivos Sob Demanda (Files On-Demand) baixa toda a sua biblioteca da nuvem para o disco: isso piora o problema em vez de resolvê-lo.",
        "Desvincular o OneDrive não apaga os arquivos locais; eles permanecem no PC e continuam ocupando espaço.",
      ],
      howTo: {
        name: "Liberar espaço em disco com o OneDrive",
        totalTime: "PT5M",
        steps: [
          {
            name: "Confirmar que o Arquivos Sob Demanda está ativado",
            text: "Clique no ícone de nuvem do OneDrive na área de notificação, abra as Configurações pelo ícone de engrenagem, vá em Sincronização e backup e abra as Configurações avançadas. Verifique se o Arquivos Sob Demanda está ativado.",
          },
          {
            name: "Abrir a pasta do OneDrive no Explorador de Arquivos",
            text: "Abra o Explorador de Arquivos e clique na entrada OneDrive no painel de navegação à esquerda. Observe os ícones de status ao lado de pastas e arquivos: a nuvem vazada indica somente online e o visto verde indica que existe uma cópia local.",
          },
          {
            name: "Selecionar as pastas que quer esvaziar",
            text: "Escolha pastas grandes que você não abre há muito tempo. Arquivos de projetos antigos, pastas de fotos e bibliotecas de vídeo costumam render mais. Segure a tecla Ctrl para selecionar várias pastas de uma vez.",
          },
          {
            name: "Executar o Liberar espaço",
            text: "Clique com o botão direito na seleção e escolha Liberar espaço. Os arquivos saem do disco, mas continuam visíveis no Explorador de Arquivos, e um duplo clique baixa cada um de volta automaticamente.",
          },
          {
            name: "Automatizar o processo",
            text: "Vá em Configurações > Sistema > Armazenamento > Sensor de Armazenamento. Na parte de conteúdo da nuvem, escolha que os arquivos fiquem somente online de forma automática quando não forem abertos por um período à sua escolha: 14, 30 ou 60 dias.",
          },
        ],
      },
      sections: [
        {
          title: "Por que o OneDrive usa espaço local?",
          content: [
            "O OneDrive é um serviço de armazenamento em nuvem, mas no Windows ele funciona como um cliente de sincronização. Isso significa que os arquivos da pasta podem existir tanto na nuvem quanto, opcionalmente, no seu PC. Esse comportamento existe para você conseguir trabalhar sem conexão com a Internet e só vira problema quando o disco enche.",
            "A verdadeira fonte de confusão é que abrir um arquivo uma única vez o baixa de forma permanente. Uma apresentação de 2 GB que você abriu há três anos pode continuar hoje no seu disco. Ao longo dos meses esse acúmulo chega a dezenas de gigabytes, e a pasta do OneDrive se torna discretamente uma das maiores da unidade C:.",
            "No Windows 11 o Arquivos Sob Demanda vem ativado por padrão, então os arquivos recém-sincronizados começam somente online. Mas todo arquivo que você abre vira cópia local e continua assim até alguém reverter.",
          ],
        },
        {
          title: "Como ler os ícones de status",
          content: [
            "Cada item da sua pasta do OneDrive traz um pequeno ícone de status no Explorador de Arquivos, e esses ícones dizem diretamente se o arquivo está consumindo espaço em disco.",
            "Uma nuvem azul vazada indica que o arquivo está somente online e não ocupa espaço local. Um visto de contorno verde sobre fundo branco significa que existe uma cópia local, mas que ela pode ser removida automaticamente se for preciso. Um visto verde preenchido marca os arquivos definidos como “Sempre manter neste dispositivo”: esses nunca são removidos, nem mesmo pelo Sensor de Armazenamento.",
            "Quando precisar de espaço, olhe primeiro as pastas com visto verde preenchido. Para tirar essa marcação, clique com o botão direito na pasta e desmarque “Sempre manter neste dispositivo”.",
          ],
        },
        {
          title: "O erro mais comum: desligar o Arquivos Sob Demanda",
          content: [
            "Quando o disco enche, muita gente encontra a configuração “Arquivos Sob Demanda” no OneDrive e faz o que parece lógico: desliga. Essa é a pior decisão disponível.",
            "Desativar essa opção dispara o download de toda a sua biblioteca do OneDrive para o disco. Com uma conta de 500 GB, o Windows vai tentar trazer tudo e encher por completo uma unidade que já estava no limite. O nome do recurso engana: “desligado” não quer dizer desconectar da nuvem, e sim manter tudo localmente.",
            "A direção correta é exatamente a oposta: deixar o Arquivos Sob Demanda ativado e limpar as cópias locais com o Liberar espaço. Desvincular o OneDrive também não ajuda — ao desvincular, apenas a sincronização para e os arquivos já baixados continuam no PC.",
          ],
        },
        {
          title: "Outras sobras da nuvem que ocupam espaço",
          content: [
            "O cache e os arquivos de log do próprio OneDrive se acumulam em %LOCALAPPDATA%\\Microsoft\\OneDrive. Ali ficam versões antigas do cliente, arquivos de instalação e logs de sincronização, normalmente de algumas centenas de megabytes a poucos gigabytes, e tudo isso pode ser apagado com segurança.",
            "O Cofre Pessoal (Personal Vault) usa uma área separada e mantém o conteúdo online enquanto está bloqueado. Os outros clientes de nuvem seguem o mesmo padrão: Google Drive, Dropbox e iCloud Drive mantêm pastas de cache locais que incham com o tempo.",
            "A Análise de Disco (Disk Analysis) do Disk Mop mostra em um treemap o que essas pastas realmente guardam, então você vê quanto da unidade C: o OneDrive ocupa em vez de adivinhar. Arquivos Grandes (Large Files) lista tudo acima de um limite de tamanho e revela quais arquivos individuais estão baixados e parados.",
          ],
        },
        {
          title: "Montar um arranjo que dure",
          content: [
            "Uma limpeza pontual garante alguns meses até você voltar ao mesmo ponto. A solução duradoura combina dois ajustes: defina um limite de 30 dias para conteúdo da nuvem no Sensor de Armazenamento e marque como “Sempre manter neste dispositivo” apenas as pastas de que você realmente precisa offline.",
            "Nesse arranjo, os documentos que você usa com frequência ficam locais, enquanto os arquivos abertos pela última vez há um ano voltam silenciosamente para a nuvem. Não é preciso intervir manualmente e o espaço ocupado pela pasta do OneDrive se mantém equilibrado.",
            "Para estender a mesma disciplina à limpeza de disco em geral, use a limpeza agendada do Disk Mop: uma tarefa semanal reúne arquivos temporários, caches de navegador e downloads antigos. Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "Por que o OneDrive ocupa espaço em disco se os arquivos estão na nuvem?",
          answer:
            "Porque o OneDrive é um cliente de sincronização e mantém uma cópia local dos arquivos que você abre, para que você consiga trabalhar offline. Abrir um arquivo uma única vez o baixa de forma permanente, e essa cópia local fica no disco até você executar o comando “Liberar espaço” sobre ela.",
        },
        {
          question: "O “Liberar espaço” apaga meus arquivos?",
          answer:
            "Não. O comando remove apenas a cópia local do seu PC; o arquivo continua na nuvem e continua aparecendo no Explorador de Arquivos. Um duplo clique baixa o arquivo novamente de forma automática. A única exigência é ter conexão com a Internet naquele momento.",
        },
        {
          question: "Devo desligar o Arquivos Sob Demanda?",
          answer:
            "Não, esse é o erro mais comum. Desativar o recurso inicia o download de toda a sua biblioteca do OneDrive para o disco e agrava bastante o problema de espaço. Para recuperar espaço, deixe o recurso ativado e limpe as cópias locais com o Liberar espaço.",
        },
        {
          question: "Desvincular o OneDrive libera espaço?",
          answer:
            "Não. Desvincular para a sincronização, mas os arquivos já baixados no PC continuam exatamente onde estão e seguem ocupando espaço. Se você quer o espaço de volta, execute o Liberar espaço nas pastas antes de desvincular a conta.",
        },
        {
          question: "Dá para deixar os arquivos do OneDrive somente online automaticamente?",
          answer:
            "Sim. Em Configurações > Sistema > Armazenamento > Sensor de Armazenamento, você pode fazer com que os arquivos da nuvem fiquem somente online automaticamente quando não forem abertos por um período à sua escolha: 14, 30 ou 60 dias. As pastas marcadas como “Sempre manter neste dispositivo” ficam de fora.",
        },
        {
          question: "Como vejo quanto espaço a minha pasta do OneDrive ocupa?",
          answer:
            "Você pode clicar com o botão direito na pasta do OneDrive no Explorador de Arquivos e abrir Propriedades, mas isso dá apenas um total. Para descobrir qual subpasta realmente inchou, uma visualização em treemap como a Análise de Disco do Disk Mop é bem mais rápida, já que as pastas são desenhadas como áreas proporcionais ao tamanho real.",
        },
      ],
      verdict: [
        "O OneDrive ocupar espaço em disco é projeto, não defeito: todo arquivo que você abre fica guardado localmente para acesso offline. A forma correta de recuperar esse espaço é clicar com o botão direito nas pastas e escolher Liberar espaço, mantendo o Arquivos Sob Demanda ativado.",
        "Há dois movimentos a evitar: desligar o Arquivos Sob Demanda (que baixa tudo) e desvincular o OneDrive (que não apaga nada). Os dois parecem intuitivos e nenhum funciona.",
        "Para uma solução duradoura, defina um limite de 30 dias no Sensor de Armazenamento e marque como “sempre manter neste dispositivo” apenas as pastas de que você realmente precisa offline. Depois disso, o arranjo se mantém sozinho.",
      ],
      ctaText: "Veja o que a sua pasta do OneDrive realmente guarda",
    },
    ja: {
      title: "OneDriveがディスク容量を圧迫する理由と、空き容量を取り戻す方法",
      metaDescription:
        "ファイルはクラウドにあるはずなのに、なぜOneDriveでCドライブが埋まるのか。原因は「ファイル オンデマンド」です。空き容量を増やす手順、ストレージ センサーによる自動化の設定、そして多くの人がやってしまう逆効果な操作まで解説します。",
      subtitle: "「ファイル オンデマンド」と「空き容量を増やす」、そしてオンラインのみのファイル",
      intro: [
        "先に結論です。OneDriveのファイルは、クラウドにも保存されているかどうかに関係なく、PCにローカルコピーが存在するかぎりディスク容量を消費します。解決策は、OneDriveフォルダーの中にあるフォルダーを右クリックして「空き容量を増やす」（Free up space）を選ぶことです。ファイルはエクスプローラーに表示されたまま、実体はクラウドだけに残ります。これを恒久的にするには、指定した日数だけ開かれなかったクラウド ファイルを自動的にオンラインのみにする「ストレージ センサー」の設定をオンにします。",
        "OneDriveの利用者が最も戸惑うのはこの点です。ファイルは「クラウドにある」はずなのに、Cドライブは埋まり続けます。理由は、OneDriveが既定では同期したものすべてのローカルコピーを保持し、開いたファイルが静かにダウンロードされていくからです。この記事では、容量を取り戻す方法、その作業を自動化する方法、そして状況をかなり悪化させてしまう典型的な失敗を説明します。",
      ],
      keyTakeaways: [
        "OneDriveのファイルは、クラウドにも保存されているかどうかに関係なく、ローカルコピーがある時点でディスク容量を消費します。",
        "「空き容量を増やす」はファイルを削除しません。ローカルコピーを取り除くだけで、ファイルはエクスプローラーに表示されたままです。",
        "輪郭だけの雲アイコンはオンラインのみ、白抜きの緑チェックはローカルコピーあり、塗りつぶされた緑チェックは「このデバイス上に常に保持する」（Always keep on this device）を意味します。",
        "「ストレージ センサー」を使えば、指定した日数だけ開かれなかったOneDriveのファイルを自動的にオンラインのみにできます。",
        "「ファイル オンデマンド」（Files On-Demand）をオフにすると、クラウド上のライブラリ全体がディスクにダウンロードされます。問題は解決するどころか悪化します。",
        "OneDriveのリンクを解除してもローカルのファイルは削除されず、PCに残って容量を占有し続けます。",
      ],
      howTo: {
        name: "OneDriveでディスクの空き容量を増やす",
        totalTime: "PT5M",
        steps: [
          {
            name: "「ファイル オンデマンド」が有効か確認する",
            text: "通知領域のOneDriveの雲アイコンをクリックし、歯車アイコンから「設定」を開きます。「同期とバックアップ」に進み、「詳細設定」を開いて「ファイル オンデマンド」が有効になっていることを確認します。",
          },
          {
            name: "エクスプローラーでOneDriveフォルダーを開く",
            text: "エクスプローラーを開き、左側のナビゲーション ウィンドウでOneDriveの項目をクリックします。フォルダーやファイルの横にある状態アイコンを確認してください。輪郭だけの雲はオンラインのみ、緑のチェックはローカルコピーがあることを示します。",
          },
          {
            name: "容量を空けたいフォルダーを選ぶ",
            text: "長く開いていない大きなフォルダーを選びます。古いプロジェクトの保管フォルダー、写真フォルダー、動画のライブラリが最も効果的です。Ctrlキーを押しながらクリックすれば、複数のフォルダーをまとめて選択できます。",
          },
          {
            name: "「空き容量を増やす」を実行する",
            text: "選択した項目を右クリックして「空き容量を増やす」を選びます。ファイルはディスクから取り除かれますが、エクスプローラーには表示され続け、ダブルクリックすると自動的に再ダウンロードされます。",
          },
          {
            name: "作業を自動化する",
            text: "「設定」>「システム」>「ストレージ」>「ストレージ センサー」を開きます。クラウド コンテンツの項目で、14日・30日・60日など任意の期間だけ開かれなかったファイルを自動的にオンラインのみにするよう設定します。",
          },
        ],
      },
      sections: [
        {
          title: "そもそもOneDriveがローカル容量を使う理由",
          content: [
            "OneDriveはクラウド ストレージ サービスですが、Windows上では同期クライアントとして動作します。つまり、フォルダー内のファイルはクラウドと、必要に応じてPCの両方に存在できるということです。この仕組みはインターネットに接続していなくても作業できるようにするためのもので、ディスクが埋まったときに初めて問題になります。",
            "本当の混乱のもとは、一度開いただけでそのファイルが恒久的にダウンロードされる点にあります。3年前に一度開いた2 GBのプレゼンテーションが、今日もディスクに残っているかもしれません。数か月のあいだにこうした蓄積は数十ギガバイトに達し、OneDriveフォルダーは気づかないうちにCドライブで最も大きなフォルダーのひとつになります。",
            "Windows 11では「ファイル オンデマンド」が既定で有効なので、新しく同期されたファイルは最初オンラインのみの状態です。しかし開いたファイルはローカルコピーに変わり、誰かが元に戻さないかぎりその状態が続きます。",
          ],
        },
        {
          title: "状態アイコンの読み方",
          content: [
            "OneDriveフォルダー内の各項目には、エクスプローラー上で小さな状態アイコンが付いています。このアイコンを見れば、そのファイルがディスク容量を使っているかどうかがそのまま分かります。",
            "輪郭だけの青い雲は、ファイルがオンラインのみでローカル容量を使っていないことを示します。白地に緑の輪郭のチェックマークは、ローカルコピーはあるものの必要に応じて自動的に取り除ける状態です。塗りつぶされた緑のチェックマークは「このデバイス上に常に保持する」が設定されたファイルで、これらは「ストレージ センサー」でも取り除かれません。",
            "容量が必要なときは、まず塗りつぶされた緑チェックの付いたフォルダーを確認してください。この設定を外すには、フォルダーを右クリックして「このデバイス上に常に保持する」のチェックを外すだけです。",
          ],
        },
        {
          title: "最も多い失敗：「ファイル オンデマンド」をオフにする",
          content: [
            "ディスクが埋まると、多くの人はOneDriveの設定にある「ファイル オンデマンド」を見つけて、いかにも理にかなって見えることをします。オフにするのです。これは選べる選択肢のなかで最悪の一手です。",
            "この項目をオフにすると、OneDriveのライブラリ全体をディスクにダウンロードする動作が始まります。500 GBのOneDriveアカウントであればWindowsはそのすべてを取得しようとし、もともと余裕のないドライブを完全に埋め尽くします。機能名が誤解を招くのですが、「オフ」はクラウドとの接続を切ることではなく、すべてをローカルに持つことを意味します。",
            "正しい方向はその逆です。「ファイル オンデマンド」は有効なままにして、ローカルコピーは「空き容量を増やす」で片づけます。OneDriveのリンクを解除しても状況は変わりません。リンクを解除すると同期が止まるだけで、ダウンロード済みのファイルはPCに残ります。",
          ],
        },
        {
          title: "容量を使っているそのほかのクラウドの残骸",
          content: [
            "OneDrive自身のキャッシュとログ ファイルは%LOCALAPPDATA%\\Microsoft\\OneDriveにたまります。ここには古いクライアントのバージョン、セットアップ ファイル、同期ログが置かれ、通常は数百メガバイトから数ギガバイト程度になりますが、安全に削除できます。",
            "個人用 Vault（Personal Vault）は別の領域を使い、ロックされているあいだは中身をオンラインに保ちます。ほかのクラウド クライアントも同じ構造です。Google Drive、Dropbox、iCloud Driveはいずれもローカルのキャッシュ フォルダーを持ち、時間とともに膨らんでいきます。",
            "Disk Mopのディスク分析（Disk Analysis）を使うと、これらのフォルダーが実際に何を抱えているかをツリーマップで確認できます。OneDriveがCドライブのどれだけを占めているかを、推測せずに把握できるということです。大きなファイル（Large Files）はしきい値を超えるものをすべて一覧表示し、どの個別ファイルがダウンロードされたまま使われずに残っているかを明らかにします。",
          ],
        },
        {
          title: "長続きする運用を組み立てる",
          content: [
            "一度きりの掃除では数か月しかもたず、また同じ場所に戻ってきます。長続きする対策は2つの設定の組み合わせです。「ストレージ センサー」でクラウド コンテンツのしきい値を30日に設定し、本当にオフラインで必要なフォルダーだけを「このデバイス上に常に保持する」にします。",
            "この運用なら、日常的に使う書類は手元に残り、1年前に開いたきりの保管データは静かにクラウドへ戻っていきます。手作業は必要なく、OneDriveフォルダーが占める容量は一定の範囲に収まります。",
            "同じ考え方をディスク全体の整理にも広げるなら、Disk Mopのスケジュール クリーンアップが使えます。週1回のタスクで一時ファイル、ブラウザーのキャッシュ、古いダウンロードをまとめて回収します。Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "ファイルがクラウドにあるのに、OneDriveがディスク容量を使うのはなぜですか？",
          answer:
            "OneDriveが同期クライアントであり、オフラインでも作業できるように、開いたファイルのローカルコピーを保持するためです。一度開いたファイルは恒久的にダウンロードされ、そのローカルコピーは「空き容量を増やす」を実行するまでディスクに残り続けます。",
        },
        {
          question: "「空き容量を増やす」を実行するとファイルは削除されますか？",
          answer:
            "削除されません。このコマンドが取り除くのはPC上のローカルコピーだけで、ファイル自体はクラウドに残り、エクスプローラーにも表示され続けます。ダブルクリックすれば自動的に再ダウンロードされます。条件は、そのときにインターネットへ接続していることだけです。",
        },
        {
          question: "「ファイル オンデマンド」はオフにしたほうがよいですか？",
          answer:
            "いいえ。これが最も多い失敗です。この機能をオフにすると、OneDriveのライブラリ全体をディスクにダウンロードし始め、容量不足をかえって深刻にします。容量を取り戻したいなら機能は有効なままにして、ローカルコピーを「空き容量を増やす」で整理してください。",
        },
        {
          question: "OneDriveのリンクを解除すれば空き容量は増えますか？",
          answer:
            "増えません。リンクを解除すると同期は止まりますが、すでにPCにダウンロードされたファイルはそのままの場所に残り、容量を占有し続けます。容量を取り戻したい場合は、リンクを解除する前にフォルダーへ「空き容量を増やす」を実行してください。",
        },
        {
          question: "OneDriveのファイルを自動的にオンラインのみにできますか？",
          answer:
            "できます。「設定」>「システム」>「ストレージ」>「ストレージ センサー」で、14日・30日・60日など任意の期間だけ開かれなかったクラウド ファイルを自動的にオンラインのみにする設定ができます。「このデバイス上に常に保持する」を設定したフォルダーは対象外です。",
        },
        {
          question: "OneDriveフォルダーがどれだけ容量を使っているか確認するには？",
          answer:
            "エクスプローラーでOneDriveフォルダーを右クリックして「プロパティ」を開く方法もありますが、これでは合計しか分かりません。どのサブフォルダーが実際に膨らんでいるかを知るには、Disk Mopのディスク分析のようなツリーマップ表示のほうがはるかに速く、フォルダーが実際のサイズに比例した面積で描かれます。",
        },
      ],
      verdict: [
        "OneDriveがディスク容量を使うのは不具合ではなく、設計どおりの動作です。開いたファイルはオフラインでも使えるようにローカルへ保持されます。その容量を取り戻す正しい方法は、「ファイル オンデマンド」を有効にしたまま、フォルダーを右クリックして「空き容量を増やす」を選ぶことです。",
        "避けたい操作は2つあります。「ファイル オンデマンド」をオフにすること（すべてがダウンロードされます）と、OneDriveのリンクを解除すること（何も削除されません）です。どちらも直感的に見えますが、どちらも解決にはなりません。",
        "恒久的に解決するには、「ストレージ センサー」でしきい値を30日に設定し、本当にオフラインで必要なフォルダーだけを「このデバイス上に常に保持する」にします。あとはその運用が自分で維持されます。",
      ],
      ctaText: "OneDriveフォルダーの本当の中身を確認する",
    },
  },
};
