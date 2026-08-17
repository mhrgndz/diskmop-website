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
  },
};
