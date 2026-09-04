import type { Article } from '../types';

export const deleteOldUserProfilesWindows: Article = {
  slug: 'delete-old-user-profiles-windows',
  type: 'guide',
  category: 'Windows',
  date: '2026-09-04',
  updated: '2026-09-04',
  readingTime: 7,
  content: {
    tr: {
      title: 'Windows\'ta Eski Kullanıcı Profillerini Silme: Doğru Yöntem',
      metaDescription:
        'C:\\Users altındaki eski hesaplar 50 GB\'ı geçebilir. Klasörü Gezgin\'den silmek kayıt defterinde artık bırakır. Sistem Özellikleri üzerinden doğru kaldırma adımları.',
      subtitle: 'Klasörü Silmek Yetmez, Hatta Zarar Verir',
      intro: [
        'Kısa cevap: Eski bir kullanıcı profilini silmek için `C:\\Users\\ad` klasörünü Gezgin\'den silmeyin. Doğru yol, Windows tuşu + R ile `sysdm.cpl` çalıştırıp Gelişmiş sekmesindeki Kullanıcı Profilleri > Ayarlar penceresinden profili seçip Sil demektir. Bu yöntem hem klasörü hem de kayıt defterindeki `ProfileList` girdisini birlikte kaldırır. Klasörü elle sildiğinizde kayıt defteri girdisi geride kalır; kullanıcı bir daha oturum açarsa Windows ona geçici profil verir veya bozuk profil hatası üretir, üstelik kilitli dosyalar yüzünden klasörün bir kısmı zaten silinemez. Eski profiller genellikle diskteki en büyük tek kalemdir: uzun süre kullanılmış bir hesap indirilenler, tarayıcı önbelleği, OneDrive kopyaları ve uygulama verileriyle 20-100 GB tutabilir.',
        'Bu, özellikle iş bilgisayarı devralınan, evde ikinci bir hesap açılmış olan veya alan adına katılmış makinelerde çok yer kazandıran ama en çok yanlış yapılan işlemlerden biridir.',
      ],
      keyTakeaways: [
        'Doğru araç `sysdm.cpl` > Gelişmiş > Kullanıcı Profilleri > Ayarlar penceresidir; klasör ve kayıt defteri girdisini birlikte siler.',
        '`C:\\Users\\ad` klasörünü Gezgin\'den silmek kayıt defterinde `ProfileList` girdisi bırakır ve bozuk/geçici profil hatalarına yol açar.',
        'Hesabın kendisini de kaldırmak istiyorsanız Ayarlar > Hesaplar > Diğer kullanıcılar üzerinden silin; bu seçenek verileri de kaldırmayı teklif eder.',
        '`Default`, `Public` ve `All Users` profilleri sistemindir; asla silinmemelidir.',
        'Bir profili silmeden önce Belgeler, Masaüstü ve İndirilenler klasörlerini kontrol edin; silme geri alınamaz.',
        'Kullanıcı hâlâ oturum açmışsa profil kilitlidir; silmeden önce o hesaptan çıkış yapılması veya yeniden başlatma gerekir.',
      ],
      dataTable: {
        caption: 'Profil kaldırma yöntemleri karşılaştırması',
        columns: ['Yöntem', 'Klasörü siler', 'Kayıt defterini temizler', 'Güvenli mi?'],
        rows: [
          ['`C:\\Users\\ad` klasörünü Gezgin\'den silmek', 'Kısmen (kilitli dosyalar kalır)', 'Hayır', 'Hayır — artık bırakır'],
          ['`sysdm.cpl` > Kullanıcı Profilleri > Sil', 'Evet', 'Evet', 'Evet — hesap korunur'],
          ['Ayarlar > Hesaplar > Diğer kullanıcılar > Kaldır', 'Evet', 'Evet', 'Evet — hesabı da siler'],
          ['Disk Temizleme', 'Hayır', 'Hayır', 'Profillere dokunmaz'],
          ['Kayıt defterinden ProfileList girdisini elle silmek', 'Hayır', 'Evet', 'Hayır — tek başına yetersiz'],
        ],
      },
      howTo: {
        name: 'Windows\'ta eski kullanıcı profilini doğru şekilde silme',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Hangi profilin ne kadar yer kapladığını görün',
            text: 'Yönetici PowerShell\'de `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Ad=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending` komutunu çalıştırın.',
          },
          {
            name: 'Saklanacak dosyaları kurtarın',
            text: 'Silinecek profilin Masaüstü, Belgeler, Resimler ve İndirilenler klasörlerini gözden geçirin. Gerekli olanları başka bir konuma kopyalayın. Bu adım geri alınamaz olduğu için atlanmamalıdır.',
          },
          {
            name: 'Kullanıcının oturumunu kapatın',
            text: 'Hesap hâlâ açıksa profil dosyaları kilitlidir. Görev Yöneticisi > Kullanıcılar sekmesinden oturumu kapatın veya bilgisayarı yeniden başlatın.',
          },
          {
            name: 'Sistem Özellikleri üzerinden silin',
            text: 'Windows + R ile `sysdm.cpl` çalıştırın. Gelişmiş sekmesinde Kullanıcı Profilleri bölümündeki Ayarlar düğmesine tıklayın. Listeden ilgili profili seçip Sil deyin. Bu, klasörü ve kayıt defteri girdisini birlikte kaldırır.',
          },
          {
            name: 'Hesabı da kaldıracaksanız',
            text: 'Profil değil hesabın kendisi de gidecekse Ayarlar > Hesaplar > Diğer kullanıcılar yolundan hesabı seçip Kaldır deyin. Windows verileri de silmeyi teklif eder.',
          },
        ],
      },
      sections: [
        {
          title: 'Eski Profiller Neden Bu Kadar Yer Kaplıyor?',
          content: [
            'Bir kullanıcı profili yalnızca Masaüstü ve Belgeler klasörlerinden ibaret değildir. Asıl hacim `AppData` altında birikir: tarayıcı önbellekleri ve profilleri, e-posta istemcisinin yerel kopyaları, oyun kayıtları, geliştirici araçlarının önbellekleri ve her uygulamanın kendi verisi buradadır. Tek başına bir Chrome profili birkaç gigabayta ulaşabilir.',
            'Buna İndirilenler klasörü eklenir. Çoğu kullanıcı indirdiği kurulum dosyalarını hiç silmez; birkaç yıl kullanılmış bir hesapta bu klasör tek başına 10-20 GB olabilir. OneDrive veya benzeri bir bulut istemcisi kullanılmışsa, senkronize edilmiş dosyaların yerel kopyaları da profilin içindedir.',
            'Sonuç olarak devredilmiş bir iş bilgisayarında veya evde açılıp unutulmuş ikinci bir hesapta 20-100 GB\'lık bir profil bulmak sıra dışı değildir. Bu, çoğu makinede tek hamlede kazanılabilecek en büyük alandır ve genellikle kimsenin aklına gelmez, çünkü `C:\\Users` altındaki diğer kullanıcıların klasörleri normal yetkiyle açılamaz ve boyutları görünmez.',
          ],
        },
        {
          title: 'Klasörü Elle Silmek Neden Yanlış?',
          content: [
            'Windows bir profili iki yerde birden takip eder: diskteki `C:\\Users\\ad` klasörü ve kayıt defterindeki `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` altındaki girdi. Bu ikisi birbirine bağlıdır ve yalnızca birini silmek tutarsız bir durum yaratır.',
            'Klasörü Gezgin\'den sildiğinizde kayıt defteri girdisi olduğu yerde kalır. O hesap bir daha oturum açarsa Windows kayıtta profil görür ama diskte bulamaz; sonuç genellikle "Kullanıcı profili hizmeti oturum açma işlemini başarısız kıldı" hatası ya da her açılışta sıfırlanan geçici bir profildir. Alan adına katılmış makinelerde bu, düzeltilmesi zor bir arızaya dönüşür.',
            'Pratik bir engel daha var: profilin bir kısmı silinemez. Bazı dosyalar sistem tarafından kilitlidir, bazıları izin gerektirir. Sonuçta klasörün yarısı kalır, yer tam olarak açılmaz ve geride hangi dosyaların kaldığını bilemezsiniz.',
          ],
        },
        {
          title: 'Doğru Yöntem: Sistem Özellikleri',
          content: [
            'Windows bu iş için tasarlanmış bir arayüz sunar ama iyi gizlenmiştir. Windows tuşu + R ile `sysdm.cpl` yazın, Gelişmiş sekmesine geçin ve Kullanıcı Profilleri başlığındaki Ayarlar düğmesine tıklayın. Açılan pencerede makinedeki tüm profiller, boyutlarıyla birlikte listelenir.',
            'Silmek istediğiniz profili seçip Sil dediğinizde Windows hem klasörü hem de kayıt defteri girdisini birlikte kaldırır, kilitli dosyaları da düzgün biçimde ele alır. Bu pencere aynı zamanda hangi profilin ne kadar yer kapladığını görmenin de en kolay yoludur.',
            'Dikkat: bu işlem hesabı silmez, yalnızca profilini kaldırır. Kullanıcı tekrar oturum açarsa Windows ona sıfırdan yeni bir profil oluşturur. Hesabın kendisi de gidecekse Ayarlar > Hesaplar > Diğer kullanıcılar yolunu kullanın; oradaki Kaldır seçeneği hesabı ve verilerini birlikte siler.',
          ],
        },
        {
          title: 'Silmeden Önce Nelere Dikkat Etmeli?',
          content: [
            'Birincisi ve en önemlisi: bu işlem geri alınamaz. Profil silindiğinde Masaüstü, Belgeler, Resimler, İndirilenler ve tüm uygulama verileri gider. Geri Dönüşüm Kutusu\'na da gitmez. Silmeden önce o profilin içeriğini mutlaka gözden geçirin.',
            'İkincisi, hangi profillere dokunulmayacağını bilmek. `Default`, `Public`, `All Users` ve `Default User` Windows\'un kendi profil şablonlarıdır; bunlar silinirse yeni kullanıcı oluşturma bozulur. Listede `.bak` uzantılı veya `TEMP` adlı girdiler görüyorsanız bunlar bozuk profil kalıntılarıdır ve genellikle güvenle temizlenebilir, ama önce sorunun kaynağını araştırmak daha doğrudur.',
            'Üçüncüsü, profili silmek diskteki tek büyük kalem değildir. Aynı makinede genellikle `C:\\Windows\\Installer`, bileşen deposu `WinSxS`, sistem geri yükleme gölge kopyaları ve hazırda bekletme dosyası da onlarca gigabayt tutar. Disk Mop\'un Disk Analizi modülü tüm kullanıcı klasörlerini yönetici yetkisiyle tarayarak hangi profilin ne kadar yer kapladığını gösterir; Kullanılmayan Uygulamalar ve Kaldırma Artıkları modülleri de aynı temizlik turunda işe yarar.',
          ],
        },
      ],
      faq: [
        {
          question: 'Profili sildim ama disk alanı açılmadı, neden?',
          answer:
            'İki olasılık var: silme işlemi kilitli dosyalar yüzünden yarım kalmış olabilir, ya da klasörü Gezgin\'den silmişsinizdir ve bir kısmı kalmıştır. `sysdm.cpl` üzerinden tekrar deneyin; profil listede hâlâ görünüyorsa oradan silin.',
        },
        {
          question: 'Kullanıcı Profilleri listesinde ".bak" ile biten girdiler var, bunlar ne?',
          answer:
            'Windows bozuk bir profil tespit ettiğinde kayıt defterindeki girdiyi `.bak` ekiyle yeniden adlandırıp yeni bir profil oluşturur. Bu girdiler eski, artık kullanılmayan profillere işaret eder. Genellikle temizlenebilir ama önce ilgili kullanıcının verisinin başka yerde olduğundan emin olun.',
        },
        {
          question: 'Alan adına katılmış bir bilgisayarda da aynı yöntem geçerli mi?',
          answer:
            'Evet, `sysdm.cpl` penceresi alan ve Entra ID (Azure AD) hesaplarının profillerini de listeler ve aynı şekilde siler. Kurumsal ortamlarda grup ilkesiyle otomatik profil temizliği de yapılandırılabilir.',
        },
        {
          question: 'Kendi profilimi silebilir miyim?',
          answer:
            'Hayır, o an oturum açmış olduğunuz profil silinemez. Başka bir yönetici hesabıyla oturum açıp oradan silmeniz gerekir. Zaten kendi profilinizi silmeden önce verilerinizi taşıdığınızdan emin olun.',
        },
      ],
      verdict: [
        'Eski kullanıcı profilleri çoğu Windows makinesinde tek hamlede kazanılabilecek en büyük disk alanıdır, ama yanlış yöntemle silinince hem alan tam açılmaz hem de kayıt defterinde arıza bırakır. Kural basit: klasörü Gezgin\'den değil, `sysdm.cpl` > Kullanıcı Profilleri penceresinden silin.',
        'Aynı temizlik turunda diskteki diğer büyük kalemleri de görmek isterseniz Disk Mop\'un Disk Analizi modülü kullanıcı klasörleri dâhil tüm sürücüyü boyut sırasına dizer; Kaldırma Artıkları modülü de kaldırılmış programların geride bıraktıklarını ayrıca listeler.',
      ],
      ctaText: 'Hangi klasörün ne kadar yer kapladığını görün',
    },
    en: {
      title: 'Deleting Old User Profiles in Windows: The Correct Way',
      metaDescription:
        'Old accounts under C:\\Users can exceed 50 GB. Deleting the folder in Explorer leaves registry leftovers. Here are the correct removal steps via System Properties.',
      subtitle: 'Deleting the Folder Is Not Enough — and It Causes Damage',
      intro: [
        'Short answer: to remove an old user profile, do not delete the `C:\\Users\\name` folder in Explorer. The correct route is Windows key + R, run `sysdm.cpl`, open the Advanced tab, click Settings under User Profiles, select the profile and choose Delete. That removes both the folder and the `ProfileList` entry in the registry together. Delete the folder by hand and the registry entry stays behind; if that user signs in again Windows gives them a temporary profile or throws a corrupt-profile error, and part of the folder cannot be deleted anyway because of locked files. Old profiles are often the single largest item on a disk: a long-used account can hold 20-100 GB of downloads, browser caches, OneDrive copies and application data.',
        'This is one of the highest-yield cleanups on a machine that was handed down at work, that has a forgotten second household account, or that is domain-joined — and also one of the most commonly done wrong.',
      ],
      keyTakeaways: [
        'The correct tool is `sysdm.cpl` > Advanced > User Profiles > Settings; it removes the folder and the registry entry together.',
        'Deleting `C:\\Users\\name` in Explorer leaves a `ProfileList` entry in the registry and causes corrupt or temporary profile errors.',
        'To remove the account itself as well, use Settings > Accounts > Other users; that option offers to delete the data too.',
        'The `Default`, `Public` and `All Users` profiles belong to the system and must never be deleted.',
        'Check Documents, Desktop and Downloads before deleting a profile; the deletion cannot be undone.',
        'If the user is still signed in the profile is locked; sign that account out or restart before deleting.',
      ],
      dataTable: {
        caption: 'Comparison of profile removal methods',
        columns: ['Method', 'Removes folder', 'Cleans registry', 'Safe?'],
        rows: [
          ['Deleting `C:\\Users\\name` in Explorer', 'Partly (locked files remain)', 'No', 'No — leaves leftovers'],
          ['`sysdm.cpl` > User Profiles > Delete', 'Yes', 'Yes', 'Yes — keeps the account'],
          ['Settings > Accounts > Other users > Remove', 'Yes', 'Yes', 'Yes — deletes the account too'],
          ['Disk Cleanup', 'No', 'No', 'Does not touch profiles'],
          ['Deleting the ProfileList entry by hand', 'No', 'Yes', 'No — insufficient on its own'],
        ],
      },
      howTo: {
        name: 'Delete an old Windows user profile correctly',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'See how much space each profile uses',
            text: 'In an elevated PowerShell run `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Name=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending`.',
          },
          {
            name: 'Rescue anything worth keeping',
            text: 'Review the Desktop, Documents, Pictures and Downloads folders of the profile you are about to delete and copy anything needed elsewhere. This step must not be skipped, because the deletion is irreversible.',
          },
          {
            name: 'Sign the user out',
            text: 'If the account is still signed in, its profile files are locked. Sign the session out from Task Manager > Users, or restart the computer.',
          },
          {
            name: 'Delete via System Properties',
            text: 'Press Windows + R and run `sysdm.cpl`. On the Advanced tab click Settings under User Profiles. Select the profile in the list and choose Delete. This removes the folder and the registry entry together.',
          },
          {
            name: 'If the account should go too',
            text: 'To remove the account itself rather than just its profile, go to Settings > Accounts > Other users, select the account and choose Remove. Windows offers to delete its data as well.',
          },
        ],
      },
      sections: [
        {
          title: 'Why Do Old Profiles Take So Much Space?',
          content: [
            'A user profile is much more than the Desktop and Documents folders. The real bulk accumulates under `AppData`: browser caches and profiles, local copies from mail clients, game saves, developer tool caches and every application\'s own data. A single Chrome profile alone can reach several gigabytes.',
            'The Downloads folder adds to that. Most people never delete the installers they download; on an account used for a couple of years that folder alone can be 10-20 GB. If OneDrive or a similar cloud client was used, local copies of synced files live inside the profile as well.',
            'The result is that finding a 20-100 GB profile on a handed-down work computer, or on a second household account created and forgotten, is not unusual. On most machines this is the largest space reclaimable in one move, and it rarely occurs to anyone — because other users\' folders under `C:\\Users` cannot be opened with normal permissions and their sizes are invisible.',
          ],
        },
        {
          title: 'Why Is Deleting the Folder by Hand Wrong?',
          content: [
            'Windows tracks a profile in two places at once: the `C:\\Users\\name` folder on disk, and an entry under `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` in the registry. The two are linked, and removing only one creates an inconsistent state.',
            'Delete the folder in Explorer and the registry entry stays where it is. If that account signs in again, Windows sees a profile in the registry but cannot find it on disk; the usual result is a "The User Profile Service failed the sign-in" error, or a temporary profile that resets at every login. On domain-joined machines this turns into a fault that is hard to unwind.',
            'There is a practical obstacle too: part of the profile cannot be deleted. Some files are locked by the system, others require permission changes. You end up with half the folder still there, the space not fully reclaimed, and no idea which files remain.',
          ],
        },
        {
          title: 'The Correct Method: System Properties',
          content: [
            'Windows provides an interface designed for exactly this, but it is well hidden. Press Windows + R, type `sysdm.cpl`, switch to the Advanced tab and click Settings under User Profiles. The window that opens lists every profile on the machine along with its size.',
            'Select the profile you want gone and choose Delete: Windows removes both the folder and the registry entry, and handles locked files properly. This window is also the easiest way to see which profile is using how much space.',
            'Note that this removes the profile, not the account. If the user signs in again, Windows builds them a fresh profile from scratch. If the account should also go, use Settings > Accounts > Other users; the Remove option there deletes the account together with its data.',
          ],
        },
        {
          title: 'What to Check Before Deleting',
          content: [
            'First and most important: this cannot be undone. Deleting a profile removes the Desktop, Documents, Pictures, Downloads and all application data. It does not go to the Recycle Bin. Always review the contents first.',
            'Second, know which profiles to leave alone. `Default`, `Public`, `All Users` and `Default User` are Windows\'s own profile templates; deleting them breaks the creation of new users. If you see entries ending in `.bak` or named `TEMP`, those are remnants of corrupted profiles and can usually be cleared safely — though investigating the underlying cause first is wiser.',
            'Third, a profile is not the only large item on the disk. The same machine usually also carries tens of gigabytes in `C:\\Windows\\Installer`, the `WinSxS` component store, system restore shadow copies and the hibernation file. Disk Mop\'s Disk Analysis module scans all user folders with administrator rights and shows which profile takes what, and the Unused Apps and Uninstall Leftovers modules earn their place in the same cleanup pass.',
          ],
        },
      ],
      faq: [
        {
          question: 'I deleted a profile but no space was freed. Why?',
          answer:
            'Two possibilities: the deletion may have stalled on locked files, or you deleted the folder in Explorer and part of it survived. Try again through `sysdm.cpl`; if the profile still appears in that list, delete it from there.',
        },
        {
          question: 'What are the entries ending in ".bak" in the User Profiles list?',
          answer:
            'When Windows detects a corrupted profile it renames the registry entry with a `.bak` suffix and creates a new profile. Those entries point at old, no longer used profiles. They can usually be cleared, but confirm first that the user\'s data exists elsewhere.',
        },
        {
          question: 'Does the same method work on a domain-joined computer?',
          answer:
            'Yes. The `sysdm.cpl` window also lists profiles of domain and Entra ID (Azure AD) accounts and deletes them the same way. In managed environments automatic profile cleanup can also be configured through group policy.',
        },
        {
          question: 'Can I delete my own profile?',
          answer:
            'No, the profile you are currently signed in with cannot be deleted. You would need to sign in with another administrator account and delete it from there. And make sure your data has been moved first.',
        },
      ],
      verdict: [
        'Old user profiles are often the largest single reclaim available on a Windows machine, but deleting them the wrong way both fails to free the full space and leaves a fault in the registry. The rule is simple: remove them through `sysdm.cpl` > User Profiles, not through Explorer.',
        'To see the other large items on the disk in the same pass, Disk Mop\'s Disk Analysis module sorts the whole drive by size including user folders, and the Uninstall Leftovers module separately lists what removed programs left behind.',
      ],
      ctaText: 'See which folder is using how much space',
    },
    de: {
      title: 'Alte Benutzerprofile in Windows löschen: der richtige Weg',
      metaDescription:
        'Alte Konten unter C:\\Users können 50 GB überschreiten. Den Ordner im Explorer zu löschen hinterlässt Reste in der Registry. So entfernt man Profile korrekt über die Systemeigenschaften.',
      subtitle: 'Den Ordner zu löschen genügt nicht — und richtet Schaden an',
      intro: [
        'Kurze Antwort: Um ein altes Benutzerprofil zu entfernen, löschen Sie nicht den Ordner `C:\\Users\\Name` im Explorer. Der richtige Weg ist Windows-Taste + R, `sysdm.cpl` ausführen, Registerkarte Erweitert öffnen, unter Benutzerprofile auf Einstellungen klicken, das Profil auswählen und Löschen wählen. Damit verschwinden Ordner und der `ProfileList`-Eintrag in der Registry gemeinsam. Löschen Sie den Ordner von Hand, bleibt der Registry-Eintrag zurück; meldet sich der Benutzer erneut an, vergibt Windows ein temporäres Profil oder wirft einen Profilfehler — und wegen gesperrter Dateien lässt sich ein Teil des Ordners ohnehin nicht löschen. Alte Profile sind oft der größte Einzelposten auf der Platte: ein lange genutztes Konto kann 20-100 GB an Downloads, Browser-Caches, OneDrive-Kopien und Anwendungsdaten enthalten.',
        'Auf einem übernommenen Arbeitsrechner, bei einem vergessenen zweiten Haushaltskonto oder auf domänengebundenen Geräten ist das eine der ertragreichsten Aufräumaktionen — und zugleich eine der am häufigsten falsch ausgeführten.',
      ],
      keyTakeaways: [
        'Das richtige Werkzeug ist `sysdm.cpl` > Erweitert > Benutzerprofile > Einstellungen; es entfernt Ordner und Registry-Eintrag gemeinsam.',
        '`C:\\Users\\Name` im Explorer zu löschen hinterlässt einen `ProfileList`-Eintrag und führt zu beschädigten oder temporären Profilen.',
        'Soll auch das Konto weg, nutzen Sie Einstellungen > Konten > Andere Benutzer; dort wird das Löschen der Daten mit angeboten.',
        'Die Profile `Default`, `Public` und `All Users` gehören zum System und dürfen nie gelöscht werden.',
        'Prüfen Sie Dokumente, Desktop und Downloads vor dem Löschen; der Vorgang lässt sich nicht rückgängig machen.',
        'Ist der Benutzer noch angemeldet, ist das Profil gesperrt; melden Sie das Konto ab oder starten Sie neu.',
      ],
      dataTable: {
        caption: 'Vergleich der Methoden zum Entfernen von Profilen',
        columns: ['Methode', 'Entfernt Ordner', 'Bereinigt Registry', 'Sicher?'],
        rows: [
          ['`C:\\Users\\Name` im Explorer löschen', 'Teilweise (gesperrte Dateien bleiben)', 'Nein', 'Nein — hinterlässt Reste'],
          ['`sysdm.cpl` > Benutzerprofile > Löschen', 'Ja', 'Ja', 'Ja — Konto bleibt erhalten'],
          ['Einstellungen > Konten > Andere Benutzer > Entfernen', 'Ja', 'Ja', 'Ja — löscht auch das Konto'],
          ['Datenträgerbereinigung', 'Nein', 'Nein', 'Fasst Profile nicht an'],
          ['ProfileList-Eintrag von Hand löschen', 'Nein', 'Ja', 'Nein — allein nicht ausreichend'],
        ],
      },
      howTo: {
        name: 'Ein altes Windows-Benutzerprofil korrekt löschen',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Den Platzbedarf je Profil ermitteln',
            text: 'Führen Sie in einer PowerShell als Administrator `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Name=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending` aus.',
          },
          {
            name: 'Wichtiges sichern',
            text: 'Sehen Sie Desktop, Dokumente, Bilder und Downloads des zu löschenden Profils durch und kopieren Sie Benötigtes an einen anderen Ort. Dieser Schritt darf nicht übersprungen werden, da das Löschen unumkehrbar ist.',
          },
          {
            name: 'Den Benutzer abmelden',
            text: 'Ist das Konto noch angemeldet, sind die Profildateien gesperrt. Melden Sie die Sitzung über Task-Manager > Benutzer ab oder starten Sie den Rechner neu.',
          },
          {
            name: 'Über die Systemeigenschaften löschen',
            text: 'Drücken Sie Windows + R und führen Sie `sysdm.cpl` aus. Klicken Sie auf der Registerkarte Erweitert unter Benutzerprofile auf Einstellungen. Wählen Sie das Profil aus und klicken Sie Löschen. Ordner und Registry-Eintrag verschwinden gemeinsam.',
          },
          {
            name: 'Wenn auch das Konto weg soll',
            text: 'Soll nicht nur das Profil, sondern das Konto selbst entfernt werden, gehen Sie zu Einstellungen > Konten > Andere Benutzer, wählen das Konto und klicken Entfernen. Windows bietet an, auch die Daten zu löschen.',
          },
        ],
      },
      sections: [
        {
          title: 'Warum belegen alte Profile so viel Platz?',
          content: [
            'Ein Benutzerprofil besteht aus weit mehr als Desktop und Dokumenten. Das eigentliche Volumen sammelt sich unter `AppData`: Browser-Caches und -Profile, lokale Kopien von Mail-Clients, Spielstände, Caches von Entwicklerwerkzeugen und die Daten jeder einzelnen Anwendung. Ein einziges Chrome-Profil kann mehrere Gigabyte erreichen.',
            'Dazu kommt der Ordner Downloads. Die meisten löschen heruntergeladene Installationsdateien nie; bei einem seit ein paar Jahren genutzten Konto kann allein dieser Ordner 10-20 GB umfassen. Wurde OneDrive oder ein ähnlicher Cloud-Client genutzt, liegen auch die lokalen Kopien synchronisierter Dateien im Profil.',
            'So ist ein Profil von 20-100 GB auf einem weitergereichten Arbeitsrechner oder einem angelegten und vergessenen Zweitkonto keine Seltenheit. Auf den meisten Rechnern ist das der größte in einem Zug rückgewinnbare Platz — und kaum jemand denkt daran, weil die Ordner anderer Benutzer unter `C:\\Users` mit normalen Rechten nicht geöffnet werden können und ihre Größe unsichtbar bleibt.',
          ],
        },
        {
          title: 'Warum ist das manuelle Löschen des Ordners falsch?',
          content: [
            'Windows führt ein Profil an zwei Stellen zugleich: als Ordner `C:\\Users\\Name` auf der Platte und als Eintrag unter `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` in der Registry. Beide hängen zusammen; nur eines zu entfernen erzeugt einen inkonsistenten Zustand.',
            'Löschen Sie den Ordner im Explorer, bleibt der Registry-Eintrag bestehen. Meldet sich das Konto erneut an, sieht Windows ein Profil in der Registry, findet es aber nicht auf der Platte; typische Folge ist die Meldung "Der Benutzerprofildienst hat die Anmeldung verhindert" oder ein temporäres Profil, das sich bei jeder Anmeldung zurücksetzt. Auf domänengebundenen Rechnern wird daraus ein schwer zu behebender Fehler.',
            'Es gibt noch ein praktisches Hindernis: Ein Teil des Profils lässt sich nicht löschen. Manche Dateien sind vom System gesperrt, andere erfordern Berechtigungsänderungen. Am Ende bleibt der halbe Ordner stehen, der Platz wird nicht vollständig frei und Sie wissen nicht, welche Dateien geblieben sind.',
          ],
        },
        {
          title: 'Der richtige Weg: Systemeigenschaften',
          content: [
            'Windows bietet für genau diesen Zweck eine Oberfläche, versteckt sie aber gut. Drücken Sie Windows + R, geben Sie `sysdm.cpl` ein, wechseln Sie auf Erweitert und klicken Sie unter Benutzerprofile auf Einstellungen. Das Fenster listet alle Profile des Rechners samt Größe auf.',
            'Wählen Sie das zu entfernende Profil und klicken Sie Löschen: Windows beseitigt Ordner und Registry-Eintrag und geht mit gesperrten Dateien korrekt um. Dieses Fenster ist zugleich der einfachste Weg zu sehen, welches Profil wie viel belegt.',
            'Beachten Sie: Damit wird das Profil entfernt, nicht das Konto. Meldet sich der Benutzer erneut an, legt Windows ein frisches Profil an. Soll auch das Konto verschwinden, nutzen Sie Einstellungen > Konten > Andere Benutzer; die Option Entfernen löscht Konto und Daten zusammen.',
          ],
        },
        {
          title: 'Was vor dem Löschen zu prüfen ist',
          content: [
            'Zuerst und vor allem: Das lässt sich nicht rückgängig machen. Mit dem Profil verschwinden Desktop, Dokumente, Bilder, Downloads und sämtliche Anwendungsdaten. Nichts davon landet im Papierkorb. Sehen Sie den Inhalt vorher immer durch.',
            'Zweitens: Wissen, welche Profile unangetastet bleiben. `Default`, `Public`, `All Users` und `Default User` sind Windows-eigene Profilvorlagen; werden sie gelöscht, funktioniert das Anlegen neuer Benutzer nicht mehr. Einträge mit der Endung `.bak` oder dem Namen `TEMP` sind Überreste beschädigter Profile und lassen sich meist gefahrlos entfernen — klüger ist es jedoch, zuerst der Ursache nachzugehen.',
            'Drittens ist ein Profil nicht der einzige große Posten. Auf demselben Rechner belegen üblicherweise auch `C:\\Windows\\Installer`, der Komponentenspeicher `WinSxS`, Schattenkopien der Systemwiederherstellung und die Ruhezustandsdatei zig Gigabyte. Das Modul Festplattenanalyse von Disk Mop durchsucht alle Benutzerordner mit Administratorrechten und zeigt, welches Profil wie viel belegt; die Module Ungenutzte Apps und Deinstallations-Reste lohnen sich im selben Durchgang.',
          ],
        },
      ],
      faq: [
        {
          question: 'Ich habe ein Profil gelöscht, aber es wurde kein Platz frei. Warum?',
          answer:
            'Zwei Möglichkeiten: Das Löschen ist an gesperrten Dateien hängen geblieben, oder Sie haben den Ordner im Explorer gelöscht und ein Teil ist geblieben. Versuchen Sie es erneut über `sysdm.cpl`; erscheint das Profil dort noch, löschen Sie es von dort.',
        },
        {
          question: 'Was sind die Einträge mit der Endung ".bak" in der Profilliste?',
          answer:
            'Erkennt Windows ein beschädigtes Profil, benennt es den Registry-Eintrag mit dem Suffix `.bak` um und legt ein neues Profil an. Diese Einträge verweisen auf alte, nicht mehr genutzte Profile. Meist lassen sie sich entfernen — prüfen Sie zuvor, ob die Daten des Benutzers anderswo liegen.',
        },
        {
          question: 'Funktioniert das auch auf einem domänengebundenen Rechner?',
          answer:
            'Ja. Das Fenster `sysdm.cpl` listet auch Profile von Domänen- und Entra-ID-Konten (Azure AD) und löscht sie auf dieselbe Weise. In verwalteten Umgebungen lässt sich eine automatische Profilbereinigung zudem per Gruppenrichtlinie einrichten.',
        },
        {
          question: 'Kann ich mein eigenes Profil löschen?',
          answer:
            'Nein, das Profil, mit dem Sie gerade angemeldet sind, lässt sich nicht löschen. Sie müssten sich mit einem anderen Administratorkonto anmelden und es von dort entfernen. Verschieben Sie zuvor unbedingt Ihre Daten.',
        },
      ],
      verdict: [
        'Alte Benutzerprofile sind auf vielen Windows-Rechnern der größte in einem Zug rückgewinnbare Speicher, doch falsch gelöscht wird weder der Platz vollständig frei noch bleibt die Registry sauber. Die Regel ist einfach: nicht über den Explorer entfernen, sondern über `sysdm.cpl` > Benutzerprofile.',
        'Um im selben Durchgang die übrigen großen Posten zu sehen, sortiert das Modul Festplattenanalyse von Disk Mop das gesamte Laufwerk samt Benutzerordnern nach Größe, und das Modul Deinstallations-Reste listet gesondert auf, was entfernte Programme zurückgelassen haben.',
      ],
      ctaText: 'Sehen, welcher Ordner wie viel Platz belegt',
    },
    fr: {
      title: 'Supprimer les anciens profils utilisateur dans Windows : la bonne méthode',
      metaDescription:
        'Les anciens comptes sous C:\\Users peuvent dépasser 50 Go. Supprimer le dossier dans l\'Explorateur laisse des résidus dans le registre. Voici la procédure correcte via les Propriétés système.',
      subtitle: 'Supprimer le dossier ne suffit pas — et cause des dégâts',
      intro: [
        'Réponse courte : pour supprimer un ancien profil utilisateur, ne supprimez pas le dossier `C:\\Users\\nom` dans l\'Explorateur. La bonne voie est touche Windows + R, exécuter `sysdm.cpl`, onglet Paramètres système avancés, bouton Paramètres sous Profils des utilisateurs, sélectionner le profil et cliquer Supprimer. Cela retire à la fois le dossier et l\'entrée `ProfileList` du registre. Si vous supprimez le dossier à la main, l\'entrée de registre reste ; si l\'utilisateur se reconnecte, Windows lui donne un profil temporaire ou renvoie une erreur de profil corrompu, et de toute façon une partie du dossier ne peut pas être supprimée à cause des fichiers verrouillés. Les anciens profils sont souvent le plus gros poste du disque : un compte utilisé longtemps peut contenir 20 à 100 Go de téléchargements, caches de navigateur, copies OneDrive et données d\'applications.',
        'C\'est l\'un des nettoyages les plus rentables sur un ordinateur professionnel récupéré, avec un second compte familial oublié, ou joint à un domaine — et aussi l\'un des plus souvent mal exécutés.',
      ],
      keyTakeaways: [
        'Le bon outil est `sysdm.cpl` > Paramètres système avancés > Profils des utilisateurs > Paramètres ; il supprime dossier et entrée de registre ensemble.',
        'Supprimer `C:\\Users\\nom` dans l\'Explorateur laisse une entrée `ProfileList` dans le registre et provoque des profils corrompus ou temporaires.',
        'Pour supprimer aussi le compte, passez par Paramètres > Comptes > Autres utilisateurs ; cette option propose d\'effacer les données.',
        'Les profils `Default`, `Public` et `All Users` appartiennent au système et ne doivent jamais être supprimés.',
        'Vérifiez Documents, Bureau et Téléchargements avant de supprimer ; l\'opération est irréversible.',
        'Si l\'utilisateur est encore connecté, le profil est verrouillé ; déconnectez ce compte ou redémarrez avant de supprimer.',
      ],
      dataTable: {
        caption: 'Comparaison des méthodes de suppression de profil',
        columns: ['Méthode', 'Supprime le dossier', 'Nettoie le registre', 'Sans risque ?'],
        rows: [
          ['Supprimer `C:\\Users\\nom` dans l\'Explorateur', 'Partiellement (fichiers verrouillés restants)', 'Non', 'Non — laisse des résidus'],
          ['`sysdm.cpl` > Profils des utilisateurs > Supprimer', 'Oui', 'Oui', 'Oui — conserve le compte'],
          ['Paramètres > Comptes > Autres utilisateurs > Supprimer', 'Oui', 'Oui', 'Oui — supprime aussi le compte'],
          ['Nettoyage de disque', 'Non', 'Non', 'Ne touche pas aux profils'],
          ['Supprimer l\'entrée ProfileList à la main', 'Non', 'Oui', 'Non — insuffisant seul'],
        ],
      },
      howTo: {
        name: 'Supprimer correctement un ancien profil utilisateur Windows',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Voir l\'espace occupé par chaque profil',
            text: 'Dans une PowerShell administrateur, exécutez `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Nom=$_.Name; Go=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object Go -Descending`.',
          },
          {
            name: 'Récupérer ce qui doit être conservé',
            text: 'Passez en revue le Bureau, Documents, Images et Téléchargements du profil à supprimer et copiez ailleurs ce qui est nécessaire. Cette étape ne doit pas être sautée : la suppression est irréversible.',
          },
          {
            name: 'Déconnecter l\'utilisateur',
            text: 'Si le compte est encore connecté, ses fichiers de profil sont verrouillés. Fermez la session depuis Gestionnaire des tâches > Utilisateurs, ou redémarrez l\'ordinateur.',
          },
          {
            name: 'Supprimer via les Propriétés système',
            text: 'Appuyez sur Windows + R et exécutez `sysdm.cpl`. Dans l\'onglet Paramètres système avancés, cliquez Paramètres sous Profils des utilisateurs. Sélectionnez le profil et cliquez Supprimer. Dossier et entrée de registre partent ensemble.',
          },
          {
            name: 'Si le compte doit aussi disparaître',
            text: 'Pour retirer le compte lui-même et non seulement son profil, allez dans Paramètres > Comptes > Autres utilisateurs, sélectionnez le compte et choisissez Supprimer. Windows propose d\'effacer aussi ses données.',
          },
        ],
      },
      sections: [
        {
          title: 'Pourquoi les anciens profils occupent-ils autant de place ?',
          content: [
            'Un profil utilisateur, ce n\'est pas seulement le Bureau et Documents. Le vrai volume s\'accumule sous `AppData` : caches et profils de navigateurs, copies locales des clients de messagerie, sauvegardes de jeux, caches d\'outils de développement et données propres à chaque application. Un seul profil Chrome peut atteindre plusieurs gigaoctets.',
            'S\'y ajoute le dossier Téléchargements. La plupart des gens ne suppriment jamais les installateurs téléchargés ; sur un compte utilisé depuis deux ans, ce seul dossier peut peser 10 à 20 Go. Si OneDrive ou un client cloud similaire a été utilisé, les copies locales des fichiers synchronisés se trouvent aussi dans le profil.',
            'Résultat : trouver un profil de 20 à 100 Go sur un ordinateur de travail récupéré, ou sur un second compte familial créé puis oublié, n\'a rien d\'exceptionnel. Sur la plupart des machines c\'est le plus grand espace récupérable d\'un coup, et presque personne n\'y pense — car les dossiers des autres utilisateurs sous `C:\\Users` ne s\'ouvrent pas avec des droits normaux et leur taille reste invisible.',
          ],
        },
        {
          title: 'Pourquoi supprimer le dossier à la main est-il une erreur ?',
          content: [
            'Windows suit un profil à deux endroits en même temps : le dossier `C:\\Users\\nom` sur le disque et une entrée sous `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` dans le registre. Les deux sont liés, et n\'en retirer qu\'un crée un état incohérent.',
            'Supprimez le dossier dans l\'Explorateur et l\'entrée de registre reste en place. Si ce compte se reconnecte, Windows voit un profil dans le registre mais ne le trouve pas sur le disque ; le résultat habituel est l\'erreur « Le service de profil utilisateur a échoué à l\'ouverture de session », ou un profil temporaire réinitialisé à chaque connexion. Sur des machines jointes à un domaine, cela devient une panne difficile à défaire.',
            'Il y a aussi un obstacle pratique : une partie du profil ne peut pas être supprimée. Certains fichiers sont verrouillés par le système, d\'autres exigent des changements de permissions. Vous vous retrouvez avec la moitié du dossier encore là, l\'espace non entièrement libéré, et aucune idée des fichiers restants.',
          ],
        },
        {
          title: 'La bonne méthode : les Propriétés système',
          content: [
            'Windows fournit une interface conçue exactement pour cela, mais bien cachée. Appuyez sur Windows + R, tapez `sysdm.cpl`, passez à l\'onglet Paramètres système avancés et cliquez Paramètres sous Profils des utilisateurs. La fenêtre qui s\'ouvre liste tous les profils de la machine avec leur taille.',
            'Sélectionnez le profil à supprimer et cliquez Supprimer : Windows retire le dossier et l\'entrée de registre, et gère correctement les fichiers verrouillés. Cette fenêtre est aussi le moyen le plus simple de voir quel profil occupe combien.',
            'Notez que cela retire le profil, pas le compte. Si l\'utilisateur se reconnecte, Windows lui crée un profil neuf. Si le compte doit aussi disparaître, utilisez Paramètres > Comptes > Autres utilisateurs ; l\'option Supprimer efface le compte et ses données.',
          ],
        },
        {
          title: 'Que vérifier avant de supprimer ?',
          content: [
            'D\'abord et surtout : c\'est irréversible. Supprimer un profil efface le Bureau, Documents, Images, Téléchargements et toutes les données d\'applications. Rien ne passe par la Corbeille. Passez toujours le contenu en revue d\'abord.',
            'Ensuite, savoir quels profils laisser tranquilles. `Default`, `Public`, `All Users` et `Default User` sont les modèles de profil de Windows ; les supprimer casse la création de nouveaux utilisateurs. Si vous voyez des entrées terminées par `.bak` ou nommées `TEMP`, ce sont des restes de profils corrompus, généralement supprimables sans risque — mais il est plus sage d\'enquêter d\'abord sur la cause.',
            'Enfin, un profil n\'est pas le seul gros poste du disque. La même machine porte généralement aussi des dizaines de gigaoctets dans `C:\\Windows\\Installer`, le magasin de composants `WinSxS`, les clichés de restauration système et le fichier de mise en veille prolongée. Le module Analyse de disque de Disk Mop parcourt tous les dossiers utilisateur avec les droits administrateur et montre quel profil pèse combien ; les modules Applications inutilisées et Résidus de désinstallation ont leur place dans le même passage.',
          ],
        },
      ],
      faq: [
        {
          question: 'J\'ai supprimé un profil mais aucun espace n\'a été libéré. Pourquoi ?',
          answer:
            'Deux possibilités : la suppression a pu caler sur des fichiers verrouillés, ou vous avez supprimé le dossier dans l\'Explorateur et une partie a survécu. Réessayez via `sysdm.cpl` ; si le profil y figure encore, supprimez-le de là.',
        },
        {
          question: 'Que sont les entrées se terminant par « .bak » dans la liste des profils ?',
          answer:
            'Quand Windows détecte un profil corrompu, il renomme l\'entrée de registre avec le suffixe `.bak` et crée un nouveau profil. Ces entrées pointent vers d\'anciens profils inutilisés. On peut généralement les supprimer, mais vérifiez d\'abord que les données de l\'utilisateur existent ailleurs.',
        },
        {
          question: 'La méthode fonctionne-t-elle sur un ordinateur joint à un domaine ?',
          answer:
            'Oui. La fenêtre `sysdm.cpl` liste aussi les profils des comptes de domaine et Entra ID (Azure AD) et les supprime de la même façon. En environnement géré, un nettoyage automatique des profils peut aussi être configuré par stratégie de groupe.',
        },
        {
          question: 'Puis-je supprimer mon propre profil ?',
          answer:
            'Non, le profil avec lequel vous êtes actuellement connecté ne peut pas être supprimé. Il faut ouvrir une session avec un autre compte administrateur et le supprimer de là. Et assurez-vous d\'avoir déplacé vos données au préalable.',
        },
      ],
      verdict: [
        'Les anciens profils utilisateur représentent souvent le plus grand gain d\'espace réalisable d\'un coup sur une machine Windows, mais les supprimer de la mauvaise façon ne libère pas tout l\'espace et laisse une anomalie dans le registre. La règle est simple : passez par `sysdm.cpl` > Profils des utilisateurs, pas par l\'Explorateur.',
        'Pour voir les autres gros postes du disque dans le même passage, le module Analyse de disque de Disk Mop trie tout le lecteur par taille, dossiers utilisateur compris, et le module Résidus de désinstallation liste à part ce que les programmes supprimés ont laissé.',
      ],
      ctaText: 'Voyez quel dossier occupe combien de place',
    },
    es: {
      title: 'Borrar perfiles de usuario antiguos en Windows: el método correcto',
      metaDescription:
        'Las cuentas antiguas en C:\\Users pueden superar los 50 GB. Borrar la carpeta desde el Explorador deja restos en el registro. Estos son los pasos correctos desde Propiedades del sistema.',
      subtitle: 'Borrar la carpeta no basta, y encima hace daño',
      intro: [
        'Respuesta corta: para eliminar un perfil de usuario antiguo, no borres la carpeta `C:\\Users\\nombre` desde el Explorador. La vía correcta es tecla Windows + R, ejecutar `sysdm.cpl`, ir a la pestaña Opciones avanzadas, pulsar Configuración en Perfiles de usuario, seleccionar el perfil y elegir Eliminar. Eso quita a la vez la carpeta y la entrada `ProfileList` del registro. Si borras la carpeta a mano, la entrada del registro se queda; si ese usuario vuelve a iniciar sesión, Windows le da un perfil temporal o lanza un error de perfil dañado, y además parte de la carpeta no se puede borrar por archivos bloqueados. Los perfiles antiguos suelen ser la partida más grande del disco: una cuenta usada mucho tiempo puede acumular 20-100 GB de descargas, cachés de navegador, copias de OneDrive y datos de aplicaciones.',
        'Es una de las limpiezas más rentables en un equipo de trabajo heredado, con una segunda cuenta doméstica olvidada, o unido a un dominio, y también una de las que peor se hacen.',
      ],
      keyTakeaways: [
        'La herramienta correcta es `sysdm.cpl` > Opciones avanzadas > Perfiles de usuario > Configuración; elimina carpeta y entrada del registro juntas.',
        'Borrar `C:\\Users\\nombre` desde el Explorador deja una entrada `ProfileList` en el registro y provoca perfiles dañados o temporales.',
        'Para quitar también la cuenta usa Configuración > Cuentas > Otros usuarios; esa opción ofrece borrar los datos.',
        'Los perfiles `Default`, `Public` y `All Users` son del sistema y nunca deben borrarse.',
        'Revisa Documentos, Escritorio y Descargas antes de borrar; la operación no se puede deshacer.',
        'Si el usuario sigue con la sesión iniciada el perfil está bloqueado; cierra esa sesión o reinicia antes de borrar.',
      ],
      dataTable: {
        caption: 'Comparación de métodos para eliminar un perfil',
        columns: ['Método', 'Borra la carpeta', 'Limpia el registro', '¿Seguro?'],
        rows: [
          ['Borrar `C:\\Users\\nombre` en el Explorador', 'En parte (quedan archivos bloqueados)', 'No', 'No — deja restos'],
          ['`sysdm.cpl` > Perfiles de usuario > Eliminar', 'Sí', 'Sí', 'Sí — conserva la cuenta'],
          ['Configuración > Cuentas > Otros usuarios > Quitar', 'Sí', 'Sí', 'Sí — borra también la cuenta'],
          ['Liberador de espacio', 'No', 'No', 'No toca los perfiles'],
          ['Borrar la entrada ProfileList a mano', 'No', 'Sí', 'No — insuficiente por sí solo'],
        ],
      },
      howTo: {
        name: 'Eliminar correctamente un perfil de usuario antiguo en Windows',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ver cuánto ocupa cada perfil',
            text: 'En una PowerShell como administrador ejecuta `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Nombre=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending`.',
          },
          {
            name: 'Rescatar lo que merezca la pena',
            text: 'Revisa Escritorio, Documentos, Imágenes y Descargas del perfil que vas a borrar y copia a otro sitio lo necesario. Este paso no se puede saltar, porque el borrado es irreversible.',
          },
          {
            name: 'Cerrar la sesión del usuario',
            text: 'Si la cuenta sigue iniciada, sus archivos de perfil están bloqueados. Cierra la sesión desde Administrador de tareas > Usuarios, o reinicia el equipo.',
          },
          {
            name: 'Borrar desde Propiedades del sistema',
            text: 'Pulsa Windows + R y ejecuta `sysdm.cpl`. En la pestaña Opciones avanzadas pulsa Configuración bajo Perfiles de usuario. Selecciona el perfil de la lista y elige Eliminar. Esto quita carpeta y entrada del registro a la vez.',
          },
          {
            name: 'Si la cuenta también debe irse',
            text: 'Para quitar la cuenta y no solo su perfil, ve a Configuración > Cuentas > Otros usuarios, selecciona la cuenta y elige Quitar. Windows ofrece borrar también sus datos.',
          },
        ],
      },
      sections: [
        {
          title: '¿Por qué ocupan tanto los perfiles antiguos?',
          content: [
            'Un perfil de usuario es mucho más que Escritorio y Documentos. El grueso real se acumula bajo `AppData`: cachés y perfiles de navegadores, copias locales de clientes de correo, partidas guardadas, cachés de herramientas de desarrollo y los datos propios de cada aplicación. Solo un perfil de Chrome puede llegar a varios gigabytes.',
            'A eso se suma la carpeta Descargas. La mayoría nunca borra los instaladores que descarga; en una cuenta usada un par de años esa carpeta sola puede tener 10-20 GB. Si se usó OneDrive o un cliente de nube similar, las copias locales de los archivos sincronizados también viven dentro del perfil.',
            'El resultado es que encontrar un perfil de 20-100 GB en un ordenador de trabajo heredado, o en una segunda cuenta doméstica creada y olvidada, no es raro. En la mayoría de equipos es el mayor espacio recuperable de una vez, y casi nunca se le ocurre a nadie, porque las carpetas de otros usuarios bajo `C:\\Users` no se abren con permisos normales y su tamaño es invisible.',
          ],
        },
        {
          title: '¿Por qué está mal borrar la carpeta a mano?',
          content: [
            'Windows sigue un perfil en dos sitios a la vez: la carpeta `C:\\Users\\nombre` en el disco y una entrada bajo `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` en el registro. Ambas están ligadas, y quitar solo una crea un estado incoherente.',
            'Si borras la carpeta en el Explorador, la entrada del registro se queda donde está. Si esa cuenta vuelve a iniciar sesión, Windows ve un perfil en el registro pero no lo encuentra en el disco; el resultado habitual es el error «El servicio de perfil de usuario no pudo iniciar sesión» o un perfil temporal que se reinicia en cada arranque. En equipos unidos a dominio esto se convierte en una avería difícil de deshacer.',
            'Hay además un obstáculo práctico: parte del perfil no se puede borrar. Algunos archivos están bloqueados por el sistema y otros requieren cambios de permisos. Acabas con media carpeta ahí, el espacio sin liberar del todo y sin saber qué archivos quedan.',
          ],
        },
        {
          title: 'El método correcto: Propiedades del sistema',
          content: [
            'Windows ofrece una interfaz diseñada justo para esto, pero está bien escondida. Pulsa Windows + R, escribe `sysdm.cpl`, cambia a la pestaña Opciones avanzadas y pulsa Configuración bajo Perfiles de usuario. La ventana que se abre lista todos los perfiles del equipo con su tamaño.',
            'Selecciona el perfil que quieres eliminar y pulsa Eliminar: Windows quita carpeta y entrada del registro y gestiona correctamente los archivos bloqueados. Esa ventana es además la forma más sencilla de ver qué perfil ocupa cuánto.',
            'Ojo: esto elimina el perfil, no la cuenta. Si el usuario vuelve a iniciar sesión, Windows le crea un perfil nuevo desde cero. Si la cuenta también debe irse, usa Configuración > Cuentas > Otros usuarios; la opción Quitar borra la cuenta junto con sus datos.',
          ],
        },
        {
          title: '¿Qué comprobar antes de borrar?',
          content: [
            'Lo primero y más importante: no se puede deshacer. Borrar un perfil elimina Escritorio, Documentos, Imágenes, Descargas y todos los datos de aplicaciones. No pasa por la Papelera. Revisa siempre el contenido antes.',
            'Segundo, saber qué perfiles no tocar. `Default`, `Public`, `All Users` y `Default User` son las plantillas de perfil de Windows; borrarlas rompe la creación de nuevos usuarios. Si ves entradas acabadas en `.bak` o llamadas `TEMP`, son restos de perfiles dañados y suelen poder limpiarse, aunque es más prudente investigar antes la causa.',
            'Tercero, un perfil no es la única partida grande del disco. El mismo equipo suele llevar además decenas de gigabytes en `C:\\Windows\\Installer`, el almacén de componentes `WinSxS`, las instantáneas de restauración del sistema y el archivo de hibernación. El módulo Análisis de disco de Disk Mop recorre todas las carpetas de usuario con permisos de administrador y muestra qué perfil ocupa qué; los módulos Aplicaciones sin usar y Restos de desinstalación se ganan su sitio en la misma pasada.',
          ],
        },
      ],
      faq: [
        {
          question: 'Borré un perfil pero no se liberó espacio, ¿por qué?',
          answer:
            'Dos posibilidades: el borrado pudo atascarse en archivos bloqueados, o borraste la carpeta desde el Explorador y parte sobrevivió. Inténtalo de nuevo por `sysdm.cpl`; si el perfil sigue apareciendo ahí, bórralo desde ahí.',
        },
        {
          question: '¿Qué son las entradas terminadas en «.bak» en la lista de perfiles?',
          answer:
            'Cuando Windows detecta un perfil dañado, renombra la entrada del registro con el sufijo `.bak` y crea un perfil nuevo. Esas entradas apuntan a perfiles antiguos ya sin uso. Suelen poder limpiarse, pero confirma antes que los datos del usuario están en otro sitio.',
        },
        {
          question: '¿Sirve el mismo método en un equipo unido a un dominio?',
          answer:
            'Sí. La ventana `sysdm.cpl` también lista perfiles de cuentas de dominio y Entra ID (Azure AD) y los borra igual. En entornos gestionados también puede configurarse una limpieza automática de perfiles por directiva de grupo.',
        },
        {
          question: '¿Puedo borrar mi propio perfil?',
          answer:
            'No, el perfil con el que has iniciado sesión no se puede borrar. Tendrías que entrar con otra cuenta de administrador y eliminarlo desde ahí. Y asegúrate antes de haber movido tus datos.',
        },
      ],
      verdict: [
        'Los perfiles de usuario antiguos suelen ser el mayor espacio recuperable de una sola vez en un equipo Windows, pero borrarlos mal ni libera todo el espacio ni deja limpio el registro. La regla es simple: quítalos desde `sysdm.cpl` > Perfiles de usuario, no desde el Explorador.',
        'Para ver en la misma pasada las demás partidas grandes del disco, el módulo Análisis de disco de Disk Mop ordena toda la unidad por tamaño incluidas las carpetas de usuario, y el módulo Restos de desinstalación lista aparte lo que dejaron los programas eliminados.',
      ],
      ctaText: 'Descubre qué carpeta ocupa cuánto espacio',
    },
    it: {
      title: 'Eliminare i vecchi profili utente in Windows: il metodo corretto',
      metaDescription:
        'I vecchi account sotto C:\\Users possono superare i 50 GB. Cancellare la cartella da Esplora file lascia residui nel registro. Ecco la procedura corretta dalle Proprietà del sistema.',
      subtitle: 'Cancellare la cartella non basta — e fa danni',
      intro: [
        'Risposta breve: per rimuovere un vecchio profilo utente non cancellare la cartella `C:\\Users\\nome` da Esplora file. La via corretta è tasto Windows + R, eseguire `sysdm.cpl`, aprire la scheda Avanzate, fare clic su Impostazioni sotto Profili utente, selezionare il profilo e scegliere Elimina. Così spariscono insieme la cartella e la voce `ProfileList` nel registro. Se cancelli la cartella a mano, la voce di registro resta; se quell\'utente accede di nuovo, Windows gli assegna un profilo temporaneo o restituisce un errore di profilo danneggiato, e comunque parte della cartella non è cancellabile a causa dei file bloccati. I vecchi profili sono spesso la voce singola più grande del disco: un account usato a lungo può contenere 20-100 GB tra download, cache dei browser, copie di OneDrive e dati delle applicazioni.',
        'È una delle pulizie più redditizie su un computer di lavoro ereditato, con un secondo account domestico dimenticato o aggiunto a un dominio — ed è anche una di quelle eseguite più spesso in modo sbagliato.',
      ],
      keyTakeaways: [
        'Lo strumento corretto è `sysdm.cpl` > Avanzate > Profili utente > Impostazioni; rimuove insieme cartella e voce di registro.',
        'Cancellare `C:\\Users\\nome` da Esplora file lascia una voce `ProfileList` nel registro e provoca profili danneggiati o temporanei.',
        'Per rimuovere anche l\'account usa Impostazioni > Account > Altri utenti; quell\'opzione propone di eliminare anche i dati.',
        'I profili `Default`, `Public` e `All Users` appartengono al sistema e non vanno mai eliminati.',
        'Controlla Documenti, Desktop e Download prima di eliminare; l\'operazione non è annullabile.',
        'Se l\'utente è ancora connesso il profilo è bloccato; disconnetti quell\'account o riavvia prima di eliminare.',
      ],
      dataTable: {
        caption: 'Confronto dei metodi di rimozione del profilo',
        columns: ['Metodo', 'Rimuove la cartella', 'Pulisce il registro', 'Sicuro?'],
        rows: [
          ['Cancellare `C:\\Users\\nome` da Esplora file', 'In parte (restano file bloccati)', 'No', 'No — lascia residui'],
          ['`sysdm.cpl` > Profili utente > Elimina', 'Sì', 'Sì', 'Sì — mantiene l\'account'],
          ['Impostazioni > Account > Altri utenti > Rimuovi', 'Sì', 'Sì', 'Sì — elimina anche l\'account'],
          ['Pulizia disco', 'No', 'No', 'Non tocca i profili'],
          ['Eliminare a mano la voce ProfileList', 'No', 'Sì', 'No — da sola non basta'],
        ],
      },
      howTo: {
        name: 'Eliminare correttamente un vecchio profilo utente di Windows',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Vedere quanto occupa ogni profilo',
            text: 'In una PowerShell come amministratore esegui `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Nome=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending`.',
          },
          {
            name: 'Recuperare ciò che vale la pena tenere',
            text: 'Esamina Desktop, Documenti, Immagini e Download del profilo da eliminare e copia altrove ciò che serve. Questo passaggio non va saltato, perché l\'eliminazione è irreversibile.',
          },
          {
            name: 'Disconnettere l\'utente',
            text: 'Se l\'account è ancora connesso, i file del profilo sono bloccati. Disconnetti la sessione da Gestione attività > Utenti oppure riavvia il computer.',
          },
          {
            name: 'Eliminare dalle Proprietà del sistema',
            text: 'Premi Windows + R ed esegui `sysdm.cpl`. Nella scheda Avanzate fai clic su Impostazioni sotto Profili utente. Seleziona il profilo nell\'elenco e scegli Elimina. Cartella e voce di registro spariscono insieme.',
          },
          {
            name: 'Se deve sparire anche l\'account',
            text: 'Per rimuovere l\'account e non solo il profilo, vai in Impostazioni > Account > Altri utenti, seleziona l\'account e scegli Rimuovi. Windows propone di eliminare anche i suoi dati.',
          },
        ],
      },
      sections: [
        {
          title: 'Perché i vecchi profili occupano così tanto?',
          content: [
            'Un profilo utente è molto più di Desktop e Documenti. Il volume vero si accumula sotto `AppData`: cache e profili dei browser, copie locali dei client di posta, salvataggi dei giochi, cache degli strumenti di sviluppo e i dati propri di ogni applicazione. Un solo profilo di Chrome può arrivare a diversi gigabyte.',
            'A questo si aggiunge la cartella Download. Quasi nessuno elimina i file di installazione scaricati; su un account usato per un paio d\'anni quella cartella da sola può pesare 10-20 GB. Se è stato usato OneDrive o un client cloud analogo, anche le copie locali dei file sincronizzati stanno dentro il profilo.',
            'Il risultato è che trovare un profilo da 20-100 GB su un computer di lavoro ereditato, o su un secondo account domestico creato e dimenticato, non è insolito. Sulla maggior parte delle macchine è lo spazio più grande recuperabile in una sola mossa, e quasi a nessuno viene in mente — perché le cartelle degli altri utenti sotto `C:\\Users` non si aprono con i permessi normali e la loro dimensione è invisibile.',
          ],
        },
        {
          title: 'Perché cancellare la cartella a mano è sbagliato?',
          content: [
            'Windows tiene traccia di un profilo in due punti contemporaneamente: la cartella `C:\\Users\\nome` sul disco e una voce sotto `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` nel registro. Le due cose sono collegate e rimuoverne solo una crea uno stato incoerente.',
            'Cancella la cartella in Esplora file e la voce di registro resta dov\'è. Se quell\'account accede di nuovo, Windows vede un profilo nel registro ma non lo trova sul disco; l\'esito tipico è l\'errore «Il servizio Profilo utente non è riuscito ad accedere» oppure un profilo temporaneo che si azzera a ogni accesso. Su macchine aggiunte a un dominio diventa un guasto difficile da sbrogliare.',
            'C\'è anche un ostacolo pratico: parte del profilo non si può cancellare. Alcuni file sono bloccati dal sistema, altri richiedono modifiche ai permessi. Ti ritrovi con metà cartella ancora lì, lo spazio non del tutto liberato e nessuna idea di quali file siano rimasti.',
          ],
        },
        {
          title: 'Il metodo corretto: Proprietà del sistema',
          content: [
            'Windows offre un\'interfaccia pensata esattamente per questo, ma ben nascosta. Premi Windows + R, digita `sysdm.cpl`, passa alla scheda Avanzate e fai clic su Impostazioni sotto Profili utente. La finestra che si apre elenca tutti i profili della macchina con la relativa dimensione.',
            'Seleziona il profilo da eliminare e scegli Elimina: Windows rimuove cartella e voce di registro e gestisce correttamente i file bloccati. Questa finestra è anche il modo più semplice per vedere quale profilo occupa quanto.',
            'Attenzione: così si rimuove il profilo, non l\'account. Se l\'utente accede di nuovo, Windows gli crea un profilo nuovo da zero. Se deve sparire anche l\'account, usa Impostazioni > Account > Altri utenti; l\'opzione Rimuovi elimina account e dati insieme.',
          ],
        },
        {
          title: 'Cosa controllare prima di eliminare',
          content: [
            'Prima di tutto: non è annullabile. Eliminare un profilo cancella Desktop, Documenti, Immagini, Download e tutti i dati delle applicazioni. Nulla finisce nel Cestino. Esamina sempre prima il contenuto.',
            'Secondo, sapere quali profili lasciare stare. `Default`, `Public`, `All Users` e `Default User` sono i modelli di profilo di Windows; eliminarli rompe la creazione di nuovi utenti. Se vedi voci che finiscono in `.bak` o chiamate `TEMP`, sono resti di profili danneggiati e di solito si possono ripulire, anche se è più saggio indagare prima sulla causa.',
            'Terzo, un profilo non è l\'unica voce grande del disco. La stessa macchina di solito porta anche decine di gigabyte in `C:\\Windows\\Installer`, nell\'archivio componenti `WinSxS`, nelle copie shadow del ripristino di sistema e nel file di ibernazione. Il modulo Analisi disco di Disk Mop esamina tutte le cartelle utente con diritti di amministratore e mostra quale profilo occupa quanto; i moduli App inutilizzate e Residui di disinstallazione si guadagnano il posto nello stesso giro di pulizia.',
          ],
        },
      ],
      faq: [
        {
          question: 'Ho eliminato un profilo ma non si è liberato spazio, perché?',
          answer:
            'Due possibilità: l\'eliminazione può essersi bloccata su file in uso, oppure hai cancellato la cartella da Esplora file e una parte è sopravvissuta. Riprova da `sysdm.cpl`; se il profilo compare ancora in quell\'elenco, eliminalo da lì.',
        },
        {
          question: 'Cosa sono le voci che finiscono in «.bak» nell\'elenco dei profili?',
          answer:
            'Quando Windows rileva un profilo danneggiato rinomina la voce di registro con il suffisso `.bak` e crea un nuovo profilo. Quelle voci puntano a vecchi profili non più usati. Di solito si possono ripulire, ma verifica prima che i dati dell\'utente esistano altrove.',
        },
        {
          question: 'Lo stesso metodo vale su un computer aggiunto a un dominio?',
          answer:
            'Sì. La finestra `sysdm.cpl` elenca anche i profili di account di dominio ed Entra ID (Azure AD) e li elimina allo stesso modo. Negli ambienti gestiti si può inoltre configurare la pulizia automatica dei profili tramite criteri di gruppo.',
        },
        {
          question: 'Posso eliminare il mio profilo?',
          answer:
            'No, il profilo con cui hai effettuato l\'accesso non può essere eliminato. Dovresti accedere con un altro account amministratore ed eliminarlo da lì. E assicurati prima di aver spostato i tuoi dati.',
        },
      ],
      verdict: [
        'I vecchi profili utente sono spesso il recupero di spazio più grande ottenibile in una sola mossa su una macchina Windows, ma eliminarli nel modo sbagliato non libera tutto lo spazio e lascia un guasto nel registro. La regola è semplice: rimuovili da `sysdm.cpl` > Profili utente, non da Esplora file.',
        'Per vedere nello stesso giro le altre voci grandi del disco, il modulo Analisi disco di Disk Mop ordina l\'intera unità per dimensione incluse le cartelle utente, e il modulo Residui di disinstallazione elenca a parte ciò che i programmi rimossi hanno lasciato.',
      ],
      ctaText: 'Scopri quale cartella occupa quanto spazio',
    },
    pt: {
      title: 'Excluir perfis de usuário antigos no Windows: o jeito certo',
      metaDescription:
        'Contas antigas em C:\\Users podem passar de 50 GB. Apagar a pasta pelo Explorador deixa sobras no registro. Veja os passos corretos pelas Propriedades do Sistema.',
      subtitle: 'Apagar a pasta não basta — e ainda causa dano',
      intro: [
        'Resposta curta: para remover um perfil de usuário antigo, não apague a pasta `C:\\Users\\nome` pelo Explorador. O caminho correto é tecla Windows + R, executar `sysdm.cpl`, abrir a guia Avançado, clicar em Configurações sob Perfis de Usuário, selecionar o perfil e escolher Excluir. Isso remove ao mesmo tempo a pasta e a entrada `ProfileList` do registro. Se apagar a pasta à mão, a entrada do registro fica; se aquele usuário entrar de novo, o Windows dá a ele um perfil temporário ou gera um erro de perfil corrompido — e parte da pasta nem pode ser apagada por causa de arquivos bloqueados. Perfis antigos costumam ser o maior item isolado do disco: uma conta usada por muito tempo pode guardar 20-100 GB de downloads, cache de navegador, cópias do OneDrive e dados de aplicativos.',
        'É uma das limpezas mais rentáveis em um computador de trabalho herdado, com uma segunda conta doméstica esquecida ou ingressado em domínio — e também uma das mais feitas de forma errada.',
      ],
      keyTakeaways: [
        'A ferramenta certa é `sysdm.cpl` > Avançado > Perfis de Usuário > Configurações; remove pasta e entrada do registro juntas.',
        'Apagar `C:\\Users\\nome` pelo Explorador deixa uma entrada `ProfileList` no registro e causa perfis corrompidos ou temporários.',
        'Para remover também a conta use Configurações > Contas > Outros usuários; essa opção oferece apagar os dados junto.',
        'Os perfis `Default`, `Public` e `All Users` são do sistema e nunca devem ser apagados.',
        'Confira Documentos, Área de Trabalho e Downloads antes de excluir; a operação não pode ser desfeita.',
        'Se o usuário ainda estiver conectado o perfil fica bloqueado; encerre a sessão dele ou reinicie antes de excluir.',
      ],
      dataTable: {
        caption: 'Comparação dos métodos de remoção de perfil',
        columns: ['Método', 'Remove a pasta', 'Limpa o registro', 'Seguro?'],
        rows: [
          ['Apagar `C:\\Users\\nome` no Explorador', 'Em parte (arquivos bloqueados ficam)', 'Não', 'Não — deixa sobras'],
          ['`sysdm.cpl` > Perfis de Usuário > Excluir', 'Sim', 'Sim', 'Sim — mantém a conta'],
          ['Configurações > Contas > Outros usuários > Remover', 'Sim', 'Sim', 'Sim — apaga também a conta'],
          ['Limpeza de Disco', 'Não', 'Não', 'Não toca nos perfis'],
          ['Apagar a entrada ProfileList à mão', 'Não', 'Sim', 'Não — insuficiente sozinho'],
        ],
      },
      howTo: {
        name: 'Excluir corretamente um perfil de usuário antigo no Windows',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ver quanto cada perfil ocupa',
            text: 'Em um PowerShell como administrador execute `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ Nome=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending`.',
          },
          {
            name: 'Salvar o que vale a pena',
            text: 'Revise Área de Trabalho, Documentos, Imagens e Downloads do perfil que será excluído e copie o necessário para outro lugar. Este passo não pode ser pulado, porque a exclusão é irreversível.',
          },
          {
            name: 'Desconectar o usuário',
            text: 'Se a conta ainda estiver conectada, os arquivos do perfil ficam bloqueados. Encerre a sessão pelo Gerenciador de Tarefas > Usuários, ou reinicie o computador.',
          },
          {
            name: 'Excluir pelas Propriedades do Sistema',
            text: 'Pressione Windows + R e execute `sysdm.cpl`. Na guia Avançado clique em Configurações sob Perfis de Usuário. Selecione o perfil na lista e escolha Excluir. Isso remove pasta e entrada do registro juntas.',
          },
          {
            name: 'Se a conta também deve ir',
            text: 'Para remover a conta em si e não só o perfil, vá em Configurações > Contas > Outros usuários, selecione a conta e escolha Remover. O Windows oferece apagar também os dados dela.',
          },
        ],
      },
      sections: [
        {
          title: 'Por que perfis antigos ocupam tanto espaço?',
          content: [
            'Um perfil de usuário é muito mais que Área de Trabalho e Documentos. O volume real se acumula em `AppData`: caches e perfis de navegadores, cópias locais de clientes de e-mail, saves de jogos, caches de ferramentas de desenvolvimento e os dados de cada aplicativo. Só um perfil do Chrome pode chegar a vários gigabytes.',
            'Some-se a isso a pasta Downloads. A maioria nunca apaga os instaladores que baixa; numa conta usada por uns dois anos essa pasta sozinha pode ter 10-20 GB. Se o OneDrive ou um cliente de nuvem parecido foi usado, as cópias locais dos arquivos sincronizados também ficam dentro do perfil.',
            'O resultado é que encontrar um perfil de 20-100 GB num computador de trabalho herdado, ou numa segunda conta doméstica criada e esquecida, não é incomum. Na maioria das máquinas esse é o maior espaço recuperável de uma vez, e quase nunca ocorre a ninguém — porque as pastas de outros usuários em `C:\\Users` não abrem com permissões normais e seu tamanho fica invisível.',
          ],
        },
        {
          title: 'Por que apagar a pasta à mão é errado?',
          content: [
            'O Windows acompanha um perfil em dois lugares ao mesmo tempo: a pasta `C:\\Users\\nome` no disco e uma entrada em `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` no registro. Os dois estão ligados, e remover apenas um cria um estado inconsistente.',
            'Apague a pasta no Explorador e a entrada do registro continua lá. Se aquela conta entrar de novo, o Windows vê um perfil no registro mas não o encontra no disco; o resultado costuma ser o erro «O Serviço de Perfil de Usuário falhou no logon» ou um perfil temporário que zera a cada entrada. Em máquinas ingressadas em domínio isso vira uma falha difícil de desfazer.',
            'Há ainda um obstáculo prático: parte do perfil não pode ser apagada. Alguns arquivos ficam bloqueados pelo sistema, outros exigem mudança de permissões. Você acaba com metade da pasta ainda lá, o espaço não totalmente liberado e sem saber quais arquivos sobraram.',
          ],
        },
        {
          title: 'O método correto: Propriedades do Sistema',
          content: [
            'O Windows oferece uma interface feita exatamente para isso, mas bem escondida. Pressione Windows + R, digite `sysdm.cpl`, vá para a guia Avançado e clique em Configurações sob Perfis de Usuário. A janela que abre lista todos os perfis da máquina com o tamanho de cada um.',
            'Selecione o perfil que deve sair e escolha Excluir: o Windows remove pasta e entrada do registro e lida corretamente com os arquivos bloqueados. Essa janela também é o jeito mais fácil de ver qual perfil ocupa quanto.',
            'Atenção: isso remove o perfil, não a conta. Se o usuário entrar de novo, o Windows cria um perfil novo do zero. Se a conta também deve sair, use Configurações > Contas > Outros usuários; a opção Remover apaga a conta junto com os dados.',
          ],
        },
        {
          title: 'O que conferir antes de excluir',
          content: [
            'Primeiro e mais importante: não dá para desfazer. Excluir um perfil apaga Área de Trabalho, Documentos, Imagens, Downloads e todos os dados de aplicativos. Nada vai para a Lixeira. Revise sempre o conteúdo antes.',
            'Segundo, saber quais perfis não tocar. `Default`, `Public`, `All Users` e `Default User` são os modelos de perfil do próprio Windows; apagá-los quebra a criação de novos usuários. Se você vir entradas terminadas em `.bak` ou chamadas `TEMP`, são restos de perfis corrompidos e em geral podem ser limpas — embora seja mais sensato investigar a causa antes.',
            'Terceiro, um perfil não é o único item grande do disco. A mesma máquina costuma carregar também dezenas de gigabytes em `C:\\Windows\\Installer`, no armazenamento de componentes `WinSxS`, nas cópias de sombra da restauração do sistema e no arquivo de hibernação. O módulo Análise de disco do Disk Mop varre todas as pastas de usuário com direitos de administrador e mostra qual perfil ocupa o quê; os módulos Aplicativos sem uso e Sobras de desinstalação valem a pena na mesma rodada.',
          ],
        },
      ],
      faq: [
        {
          question: 'Excluí um perfil mas nenhum espaço foi liberado. Por quê?',
          answer:
            'Duas possibilidades: a exclusão pode ter travado em arquivos bloqueados, ou você apagou a pasta pelo Explorador e parte sobreviveu. Tente de novo por `sysdm.cpl`; se o perfil ainda aparecer naquela lista, exclua por ali.',
        },
        {
          question: 'O que são as entradas terminadas em «.bak» na lista de perfis?',
          answer:
            'Quando o Windows detecta um perfil corrompido, ele renomeia a entrada do registro com o sufixo `.bak` e cria um perfil novo. Essas entradas apontam para perfis antigos, sem uso. Em geral podem ser limpas, mas confirme antes que os dados do usuário existem em outro lugar.',
        },
        {
          question: 'O mesmo método funciona em um computador ingressado em domínio?',
          answer:
            'Sim. A janela `sysdm.cpl` também lista perfis de contas de domínio e Entra ID (Azure AD) e os exclui do mesmo jeito. Em ambientes gerenciados também dá para configurar limpeza automática de perfis por política de grupo.',
        },
        {
          question: 'Posso excluir meu próprio perfil?',
          answer:
            'Não, o perfil com o qual você está conectado não pode ser excluído. Seria preciso entrar com outra conta de administrador e excluí-lo de lá. E garanta antes que seus dados foram movidos.',
        },
      ],
      verdict: [
        'Perfis de usuário antigos costumam ser a maior recuperação de espaço possível de uma só vez em uma máquina Windows, mas excluí-los do jeito errado não libera todo o espaço e ainda deixa uma falha no registro. A regra é simples: remova por `sysdm.cpl` > Perfis de Usuário, não pelo Explorador.',
        'Para ver na mesma rodada os outros itens grandes do disco, o módulo Análise de disco do Disk Mop ordena a unidade inteira por tamanho incluindo pastas de usuário, e o módulo Sobras de desinstalação lista à parte o que os programas removidos deixaram.',
      ],
      ctaText: 'Veja qual pasta ocupa quanto espaço',
    },
    ja: {
      title: 'Windows で古いユーザープロファイルを削除する正しい方法',
      metaDescription:
        'C:\\Users にある古いアカウントは 50 GB を超えることがあります。エクスプローラーでフォルダーを削除するとレジストリに残骸が残ります。システムのプロパティからの正しい手順を解説します。',
      subtitle: 'フォルダーを消すだけでは足りず、しかも害がある',
      intro: [
        '短い答え: 古いユーザープロファイルを削除するとき、`C:\\Users\\名前` フォルダーをエクスプローラーで消してはいけません。正しい手順は、Windows キー + R で `sysdm.cpl` を実行し、詳細設定タブの「ユーザー プロファイル」の設定ボタンを開き、対象のプロファイルを選んで削除することです。これでフォルダーとレジストリの `ProfileList` エントリが同時に削除されます。手作業でフォルダーを消すとレジストリのエントリが残り、そのユーザーが再びサインインすると Windows は一時プロファイルを割り当てるか、プロファイル破損のエラーを出します。しかもロックされたファイルのせいで、フォルダーの一部はそもそも削除できません。古いプロファイルはディスク上で最大の単一項目であることが多く、長く使われたアカウントはダウンロード、ブラウザーキャッシュ、OneDrive のコピー、アプリのデータで 20〜100 GB を占めることがあります。',
        '譲り受けた業務用パソコン、忘れられた家庭内の 2 つ目のアカウント、ドメイン参加した端末では、最も効果の大きい片付けの 1 つであり、同時に最も誤ったやり方で行われがちな作業でもあります。',
      ],
      keyTakeaways: [
        '正しいツールは `sysdm.cpl` > 詳細設定 > ユーザー プロファイル > 設定 です。フォルダーとレジストリのエントリを同時に削除します。',
        'エクスプローラーで `C:\\Users\\名前` を削除するとレジストリに `ProfileList` エントリが残り、破損プロファイルや一時プロファイルのエラーを招きます。',
        'アカウント自体も削除したい場合は 設定 > アカウント > 他のユーザー を使います。この方法ではデータの削除も提案されます。',
        '`Default`、`Public`、`All Users` プロファイルはシステムのものです。決して削除しないでください。',
        '削除前にドキュメント、デスクトップ、ダウンロードを確認してください。この操作は元に戻せません。',
        'ユーザーがサインインしたままだとプロファイルはロックされています。そのアカウントをサインアウトさせるか再起動してから削除します。',
      ],
      dataTable: {
        caption: 'プロファイル削除方法の比較',
        columns: ['方法', 'フォルダー削除', 'レジストリ整理', '安全性'],
        rows: [
          ['エクスプローラーで `C:\\Users\\名前` を削除', '一部のみ（ロック済みは残る）', 'いいえ', '不可 — 残骸が残る'],
          ['`sysdm.cpl` > ユーザー プロファイル > 削除', 'はい', 'はい', '安全 — アカウントは残る'],
          ['設定 > アカウント > 他のユーザー > 削除', 'はい', 'はい', '安全 — アカウントも削除'],
          ['ディスク クリーンアップ', 'いいえ', 'いいえ', 'プロファイルには触れない'],
          ['ProfileList エントリを手で削除', 'いいえ', 'はい', '不可 — 単独では不十分'],
        ],
      },
      howTo: {
        name: 'Windows の古いユーザープロファイルを正しく削除する',
        totalTime: 'PT10M',
        steps: [
          {
            name: '各プロファイルの使用容量を確認する',
            text: '管理者権限の PowerShell で `Get-ChildItem C:\\Users -Force -Directory | ForEach-Object { [PSCustomObject]@{ 名前=$_.Name; GB=[math]::Round((Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum/1GB,1) } } | Sort-Object GB -Descending` を実行します。',
          },
          {
            name: '必要なものを退避する',
            text: '削除するプロファイルのデスクトップ、ドキュメント、ピクチャ、ダウンロードを確認し、必要なものを別の場所にコピーします。削除は取り消せないため、この手順を飛ばしてはいけません。',
          },
          {
            name: 'ユーザーをサインアウトさせる',
            text: 'アカウントがまだサインイン中だと、プロファイルのファイルはロックされています。タスク マネージャー > ユーザー からサインアウトするか、パソコンを再起動します。',
          },
          {
            name: 'システムのプロパティから削除する',
            text: 'Windows + R で `sysdm.cpl` を実行します。詳細設定タブの「ユーザー プロファイル」で設定をクリックし、一覧から対象を選んで削除します。フォルダーとレジストリのエントリが同時に消えます。',
          },
          {
            name: 'アカウントも削除する場合',
            text: 'プロファイルだけでなくアカウント自体も削除するなら、設定 > アカウント > 他のユーザー でアカウントを選び「削除」を選びます。Windows がデータの削除も提案します。',
          },
        ],
      },
      sections: [
        {
          title: 'なぜ古いプロファイルはこれほど容量を使うのか',
          content: [
            'ユーザープロファイルはデスクトップとドキュメントだけではありません。本当の容量は `AppData` の下にたまります。ブラウザーのキャッシュとプロファイル、メールクライアントのローカルコピー、ゲームのセーブデータ、開発ツールのキャッシュ、そして各アプリ固有のデータです。Chrome のプロファイル 1 つだけでも数ギガバイトに達することがあります。',
            'そこにダウンロードフォルダーが加わります。ダウンロードしたインストーラーを削除する人はほとんどおらず、2 年ほど使ったアカウントではこのフォルダーだけで 10〜20 GB になることもあります。OneDrive などのクラウドクライアントを使っていた場合、同期ファイルのローカルコピーもプロファイル内にあります。',
            '結果として、譲り受けた業務用パソコンや、作って忘れられた家庭内の 2 つ目のアカウントで 20〜100 GB のプロファイルが見つかるのは珍しくありません。多くのマシンではこれが一度に取り戻せる最大の容量ですが、めったに思い至りません。`C:\\Users` 配下の他ユーザーのフォルダーは通常の権限では開けず、サイズも見えないからです。',
          ],
        },
        {
          title: 'なぜフォルダーを手で消すのが間違いなのか',
          content: [
            'Windows はプロファイルを 2 か所で同時に管理しています。ディスク上の `C:\\Users\\名前` フォルダーと、レジストリの `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList` 配下のエントリです。両者は結び付いており、片方だけを消すと不整合な状態になります。',
            'エクスプローラーでフォルダーを削除すると、レジストリのエントリはそのまま残ります。そのアカウントが再びサインインすると、Windows はレジストリ上のプロファイルを見つけるのにディスク上には見つけられません。典型的な結果は「ユーザー プロファイル サービスによるサインインの処理に失敗しました」というエラーか、サインインのたびにリセットされる一時プロファイルです。ドメイン参加したマシンでは、これは元に戻しにくい障害になります。',
            '実務上の障害もあります。プロファイルの一部は削除できません。システムにロックされたファイルもあれば、権限の変更が必要なものもあります。結局フォルダーの半分が残り、容量は完全には解放されず、どのファイルが残ったのかも分かりません。',
          ],
        },
        {
          title: '正しい方法: システムのプロパティ',
          content: [
            'Windows にはまさにこの用途のための画面がありますが、よく隠されています。Windows + R を押して `sysdm.cpl` と入力し、詳細設定タブに切り替えて「ユーザー プロファイル」の設定をクリックします。開いたウィンドウには、このマシンのすべてのプロファイルがサイズ付きで一覧表示されます。',
            '削除したいプロファイルを選んで「削除」を押すと、Windows はフォルダーとレジストリのエントリを取り除き、ロックされたファイルも適切に処理します。このウィンドウは、どのプロファイルがどれだけ使っているかを知る最も簡単な手段でもあります。',
            '注意点として、これで削除されるのはプロファイルであってアカウントではありません。そのユーザーが再びサインインすると、Windows は新しいプロファイルを一から作成します。アカウントも削除するなら 設定 > アカウント > 他のユーザー を使ってください。そこの「削除」はアカウントとデータをまとめて消します。',
          ],
        },
        {
          title: '削除前に確認すべきこと',
          content: [
            'まず何より、この操作は元に戻せません。プロファイルを削除するとデスクトップ、ドキュメント、ピクチャ、ダウンロード、そしてすべてのアプリデータが消えます。ごみ箱にも入りません。必ず先に中身を確認してください。',
            '次に、触れてはいけないプロファイルを知ることです。`Default`、`Public`、`All Users`、`Default User` は Windows 自身のプロファイル テンプレートで、削除すると新規ユーザーの作成が壊れます。`.bak` で終わるエントリや `TEMP` という名前のものは破損プロファイルの残骸で、たいていは安全に片付けられますが、まず原因を調べるほうが賢明です。',
            '3 つ目に、プロファイルだけがディスク上の大きな項目ではありません。同じマシンでは通常、`C:\\Windows\\Installer`、コンポーネント ストア `WinSxS`、システムの復元のシャドウ コピー、休止状態ファイルも数十ギガバイトを占めます。Disk Mop の「ディスク解析」モジュールは管理者権限ですべてのユーザーフォルダーを走査し、どのプロファイルがどれだけ使っているかを示します。「未使用アプリ」と「アンインストールの残骸」モジュールも同じ片付けの流れで役立ちます。',
          ],
        },
      ],
      faq: [
        {
          question: 'プロファイルを削除したのに空き容量が増えません。なぜですか。',
          answer:
            '2 つの可能性があります。ロックされたファイルで削除が止まったか、エクスプローラーでフォルダーを消して一部が残ったかです。`sysdm.cpl` から再度試してください。その一覧にプロファイルがまだ表示されるなら、そこから削除します。',
        },
        {
          question: 'プロファイル一覧にある「.bak」で終わる項目は何ですか。',
          answer:
            'Windows は破損したプロファイルを検出すると、レジストリのエントリ名に `.bak` を付けて新しいプロファイルを作成します。これらは古い、もう使われていないプロファイルを指します。たいていは片付けられますが、そのユーザーのデータが別の場所にあることを先に確認してください。',
        },
        {
          question: 'ドメイン参加したパソコンでも同じ方法が使えますか。',
          answer:
            'はい。`sysdm.cpl` の画面はドメインおよび Entra ID（Azure AD）アカウントのプロファイルも一覧表示し、同じように削除できます。管理された環境ではグループ ポリシーで自動的なプロファイル整理を設定することもできます。',
        },
        {
          question: '自分のプロファイルを削除できますか。',
          answer:
            'いいえ、現在サインインしているプロファイルは削除できません。別の管理者アカウントでサインインして、そこから削除する必要があります。もちろん事前にデータを移しておいてください。',
        },
      ],
      verdict: [
        '古いユーザープロファイルは、多くの Windows マシンで一度に取り戻せる最大の容量ですが、誤った方法で削除すると容量は完全には解放されず、レジストリに不具合を残します。ルールは単純です。エクスプローラーではなく `sysdm.cpl` > ユーザー プロファイル から削除してください。',
        '同じ片付けの流れでディスク上の他の大きな項目も見たい場合、Disk Mop の「ディスク解析」モジュールはユーザーフォルダーを含めてドライブ全体をサイズ順に並べ、「アンインストールの残骸」モジュールは削除済みプログラムが残したものを別途一覧にします。',
      ],
      ctaText: 'どのフォルダーがどれだけ使っているか確認する',
    },
  },
};
