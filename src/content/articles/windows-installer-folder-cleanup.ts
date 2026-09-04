import type { Article } from '../types';

export const windowsInstallerFolderCleanup: Article = {
  slug: 'windows-installer-folder-cleanup',
  type: 'guide',
  category: 'Windows',
  date: '2026-09-04',
  updated: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'C:\\Windows\\Installer Klasörü 30 GB: Nedir, Silinir mi?',
      metaDescription:
        'C:\\Windows\\Installer klasörü onlarca gigabayta çıkabilir ama silinmesi programların onarım ve kaldırma özelliğini bozar. Neyin güvenle temizlenebileceği ve nasıl.',
      subtitle: 'Diskteki En Büyük Gizli Klasör ve Neden Silinemez',
      intro: [
        'Kısa cevap: `C:\\Windows\\Installer`, Windows\'un kurulu programların yükleyici (MSI) ve yama (MSP) dosyalarını sakladığı gizli sistem klasörüdür. Windows bu dosyaları bir programı onarmak, değiştirmek veya kaldırmak için kullanır. Klasörü ya da içeriğini toptan silmek onarım ve kaldırma işlevlerini kalıcı olarak bozar, bazı durumlarda Windows güncellemelerini de başarısız kılar. Yıllar içinde 20-40 GB\'a ulaşması normaldir ve bunun büyük bölümü artık hiçbir kurulu ürüne ait olmayan öksüz yamalardır. Güvenli yol, klasörü silmek değil, hangi dosyaların gerçekten öksüz kaldığını yükleyici veritabanıyla karşılaştırarak tespit etmek ve yalnızca onları kaldırmaktır. Office ve Visual Studio gibi sık yama alan ürünlerin eski sürümlerini düzgün biçimde kaldırmak da bu klasörü kendiliğinden küçültür.',
        'Bu klasör Gezgin\'de varsayılan olarak görünmez; korumalı işletim sistemi dosyaları gizli olduğu için birçok kullanıcı diskini dolduran şeyin ne olduğunu hiç bulamaz. Aşağıda önce klasörün ne işe yaradığını, sonra neyin güvenle temizlenebileceğini anlatıyoruz.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` kurulu programların MSI/MSP önbelleğidir; Windows onu onarım, değiştirme ve kaldırma için kullanır.',
        'Klasörü veya içeriğini toptan silmek geri döndürülemez: programlar artık düzgün kaldırılamaz ve bazı güncellemeler başarısız olur.',
        'Yıllar içinde 20-40 GB\'a çıkması olağandır; büyük kısmı artık hiçbir kurulu ürüne ait olmayan öksüz yama dosyalarıdır.',
        'Disk Temizleme ve DISM bu klasöre DOKUNMAZ — DISM\'in bileşen temizliği WinSxS içindir, Installer değil.',
        'En güvenli ve en büyük kazanç: Office, Visual Studio gibi çok yama alan ürünlerin eski sürümlerini Ayarlar üzerinden düzgün kaldırmak.',
        'Klasör gizli ve sistem işaretlidir; boyutunu görmek için Gezgin\'de "korumalı işletim sistemi dosyalarını gizle" seçeneğinin kapatılması gerekir.',
      ],
      dataTable: {
        caption: 'C:\\Windows\\Installer içinde ne silinebilir?',
        columns: ['Öğe', 'Silinebilir mi?', 'Gerekçe'],
        rows: [
          ['Installer klasörünün tamamı', 'Asla', 'Kurulu programların onarım, değiştirme ve kaldırma yeteneği kalıcı olarak bozulur'],
          ['Kurulu ürünlere ait .msi dosyaları', 'Hayır', 'Programı kaldırmak veya özellik eklemek için gerekir'],
          ['Öksüz .msp yama dosyaları', 'Evet, doğrulanarak', 'Hiçbir kurulu ürün tarafından referans edilmiyorsa gereksizdir'],
          ['$PatchCache$ alt klasörü', 'Dikkatli', 'Yama temel kopyalarıdır; silinirse sonraki yamalar orijinal medya isteyebilir'],
          ['Klasörü başka sürücüye taşımak', 'Önerilmez', 'Desteklenmeyen bir yapılandırmadır, güncellemelerde sorun çıkarabilir'],
        ],
      },
      howTo: {
        name: 'C:\\Windows\\Installer klasörünü güvenle küçültme',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Klasörün gerçek boyutunu ölçün',
            text: 'Yönetici PowerShell\'de `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum` komutunu çalıştırın. Çıkan Sum değerini 1GB\'a bölerek gigabayt karşılığını bulun.',
          },
          {
            name: 'Önce gerçek sebebi kaldırın',
            text: 'Ayarlar > Uygulamalar > Yüklü uygulamalar listesinde Office, Visual Studio veya benzeri eski sürümler varsa bunları düzgün biçimde kaldırın. Kaldırma işlemi kendi yamalarını da temizler ve genellikle en büyük kazancı sağlar.',
          },
          {
            name: 'Bileşen deposunu ayrıca temizleyin',
            text: 'Yönetici komut isteminde `DISM /Online /Cleanup-Image /StartComponentCleanup` çalıştırın. Bu komut Installer klasörüne dokunmaz ama WinSxS tarafında ayrı bir kazanç sağlar ve çoğu kullanıcının aslında aradığı yer orasıdır.',
          },
          {
            name: 'Öksüz yamaları yalnızca doğrulayarak kaldırın',
            text: 'Kalan dosyalardan hangilerinin öksüz olduğunu elle anlayamazsınız; dosya adları rastgele GUID\'lerdir. Yalnızca Windows yükleyici veritabanıyla karşılaştırma yapan bir araç kullanın ve kaldırmadan önce yedek alın.',
          },
          {
            name: 'Sonucu doğrulayın',
            text: 'Temizlikten sonra bir programı Ayarlar üzerinden "Değiştir" ile açmayı deneyin. Hata alıyorsanız yedeği geri koyun; alıyorsanız işlem başarılıdır.',
          },
        ],
      },
      sections: [
        {
          title: 'C:\\Windows\\Installer Nedir ve Neden Bu Kadar Büyür?',
          content: [
            'Windows Installer teknolojisiyle kurulan her program, kurulum sırasında kendi MSI paketinin bir kopyasını bu klasöre bırakır. Amaç basittir: programı ileride kaldırmak, onarmak veya özelliklerini değiştirmek istediğinizde Windows\'un orijinal kurulum medyasını sizden istememesi. Aynı mantık yamalar için de geçerlidir; her MSP yaması da burada saklanır.',
            'Büyüme buradan gelir. Office gibi ayda birkaç kez yama alan bir ürün, yıllar içinde yüzlerce MSP dosyası biriktirir. Visual Studio, SQL Server ve büyük CAD paketleri de aynı şekilde davranır. Üstelik bir ürünün sürümü yükseltildiğinde eski sürümün yamaları her zaman temizlenmez; geride kalan bu dosyalara "öksüz yama" denir.',
            'Sonuç olarak beş yıllık bir Windows kurulumunda bu klasörün 20-40 GB olması sıra dışı değildir. Dosya adları rastgele GUID\'lerden oluştuğu için hangisinin neye ait olduğunu bakarak anlamak mümkün değildir — bu, klasörü elle temizlemeyi imkânsız kılan asıl sebeptir.',
          ],
        },
        {
          title: 'Neden Silmek Tehlikeli?',
          content: [
            'İnternette sık rastlanan "bu klasörü silin, gigabaytlarca yer açılır" tavsiyesi somut zarar verir. Bir programın MSI dosyası kaybolduğunda Windows o programı kaldıramaz: Ayarlar\'daki Kaldır düğmesi hata verir ve program listede takılı kalır. Onarım ve özellik ekleme de aynı şekilde çalışmaz.',
            'İkinci zarar güncellemelerde ortaya çıkar. Bir ürüne yeni bir yama uygulanırken Windows Installer, önceki yamanın temel kopyasına ihtiyaç duyabilir. O kopya silinmişse kurulum başarısız olur ve genellikle anlaşılmaz bir hata koduyla karşılaşırsınız. Sorunun kaynağını aylar sonra bulmak neredeyse imkânsızdır.',
            'Bu yüzden Windows bu klasörü gizli ve sistem olarak işaretler; Disk Temizleme aracı ona hiç dokunmaz. Microsoft\'un kendi konumu nettir: klasörün içeriği elle yönetilmemelidir.',
          ],
        },
        {
          title: 'Peki Gerçekten Ne Yapılabilir?',
          content: [
            'En büyük ve en güvenli kazanç, klasörün kendisiyle değil, onu besleyen programlarla uğraşmaktan gelir. Ayarlar > Uygulamalar listesinde artık kullanmadığınız eski Office sürümleri, birden fazla Visual Studio kurulumu veya eski SQL Server örnekleri varsa bunları düzgün biçimde kaldırın. Kaldırma işlemi kendi MSI ve MSP dosyalarını da temizler; tek bir eski Office sürümünün kaldırılması sıklıkla 5-10 GB açar.',
            'İkinci adım, çoğu kullanıcının aslında karıştırdığı yerdir: bileşen deposu. `DISM /Online /Cleanup-Image /StartComponentCleanup` komutu `C:\\Windows\\WinSxS` klasöründeki eski bileşen sürümlerini temizler. Installer klasörüne dokunmaz ama Windows klasörünü şişiren asıl kalem çoğu zaman odur.',
            'Üçüncü adım olan öksüz yama temizliği ise ancak yükleyici veritabanıyla karşılaştırma yapan bir araçla güvenlidir. Böyle bir araç, klasördeki her dosyayı kurulu ürünlerin referans listesiyle eşleştirir ve yalnızca hiçbir ürünün sahiplenmediği dosyaları işaretler. Bunu elle yapmaya çalışmayın ve işlem öncesi mutlaka bir geri yükleme noktası oluşturun.',
          ],
        },
        {
          title: 'Diskinizde Başka Nerede Bu Kadar Yer Var?',
          content: [
            'Installer klasörünü araştıran çoğu kişi aslında daha genel bir soruyla gelir: "C sürücüm dolu ve neyin doldurduğunu bulamıyorum." Bu klasör listenin üst sıralarında yer alsa da genellikle tek başına suçlu değildir.',
            'Aynı ölçekte yer kaplayan diğer gizli kalemler şunlardır: `C:\\Windows\\WinSxS` bileşen deposu, sistem geri yükleme noktalarının gölge kopyaları, hazırda bekletme dosyası `hiberfil.sys`, sayfa dosyası `pagefile.sys` ve eski kullanıcı profilleri. Hepsi gizlidir ve hiçbiri Gezgin\'de klasör boyutu hesaplarken doğru görünmez.',
            'Disk Mop\'un Disk Analizi modülü gizli ve sistem klasörleri dâhil olmak üzere sürücüyü klasör klasör dökerek bu kalemleri boyut sırasına dizer; Disk Haritası görünümü de aynı veriyi tek bakışta anlaşılır hâle getirir. Böylece hangi klasörle uğraşmanın gerçekten değdiğini tahmin etmek yerine görürsünüz.',
          ],
        },
      ],
      faq: [
        {
          question: 'Disk Temizleme bu klasörü temizler mi?',
          answer:
            'Hayır. Windows\'un yerleşik Disk Temizleme aracı ve Depolama Duyarlılığı `C:\\Windows\\Installer` klasörüne hiç dokunmaz. Bu bilinçli bir tasarımdır; klasörün içeriği kurulu programların işleyişi için gereklidir.',
        },
        {
          question: 'Klasörü başka bir sürücüye taşıyabilir miyim?',
          answer:
            'Teknik olarak bir bağlantı noktası (junction) ile mümkündür ama Microsoft tarafından desteklenmez. Güncellemeler ve onarım işlemleri beklenmedik biçimde başarısız olabilir. Sistem sürücüsü çok küçükse daha güvenli çözüm eski programları kaldırmaktır.',
        },
        {
          question: 'Neden dosya adları anlamsız harf ve rakamlardan oluşuyor?',
          answer:
            'Windows Installer her paketi benzersiz bir GUID ile kaydeder ve dosyaları o kimlikle saklar. Bu yüzden bir dosyaya bakarak hangi programa ait olduğunu anlayamazsınız; eşleştirme ancak yükleyici veritabanı üzerinden yapılabilir.',
        },
        {
          question: 'Bu klasör neden Gezgin\'de görünmüyor?',
          answer:
            'Gizli ve "korumalı işletim sistemi dosyası" olarak işaretlidir. Görmek için Gezgin > Görünüm > Seçenekler > Görünüm sekmesinde "Korumalı işletim sistemi dosyalarını gizle" seçeneğini kapatmanız gerekir.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` diskteki en büyük gizli klasörlerden biridir ama silinecek bir çöp yığını değildir. Doğru sıra şudur: önce artık kullanmadığınız eski programları düzgün kaldırın, sonra `DISM` ile bileşen deposunu temizleyin, en son öksüz yamaları yalnızca doğrulama yapan bir araçla kaldırın.',
        'Diskinizde bu klasörün yanında hangi gizli kalemlerin biriktiğini görmek için Disk Mop\'un Disk Analizi ve Disk Haritası modülleri sürücüyü sistem klasörleri dâhil boyut sırasına dizer; Kaldırma Artıkları modülü de kaldırılmış programların geride bıraktığı dosya ve kayıt defteri girdilerini ayrıca listeler.',
      ],
      ctaText: 'Diskinizdeki gizli klasörleri boyut sırasına dizin',
    },
    en: {
      title: 'C:\\Windows\\Installer Is 30 GB: What Is It, and Can You Delete It?',
      metaDescription:
        'The C:\\Windows\\Installer folder can grow to tens of gigabytes, but deleting it breaks repair and uninstall for installed programs. What can safely be cleared, and how.',
      subtitle: 'The Biggest Hidden Folder on Your Disk, and Why You Cannot Delete It',
      intro: [
        'Short answer: `C:\\Windows\\Installer` is the hidden system folder where Windows caches the installer (MSI) and patch (MSP) files of installed programs. Windows uses those files to repair, modify or uninstall a program. Deleting the folder or its contents wholesale permanently breaks repair and uninstall, and in some cases makes Windows updates fail. Reaching 20-40 GB over several years is normal, and most of that bulk is orphaned patches that no installed product refers to any more. The safe route is not to delete the folder but to identify which files are genuinely orphaned by checking them against the installer database, and remove only those. Properly uninstalling old versions of heavily patched products such as Office and Visual Studio also shrinks this folder on its own.',
        'The folder is hidden in Explorer by default; because protected operating system files are concealed, many people never find out what is filling their disk. Below we cover what the folder is for, and then what can safely be cleaned.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` is the MSI/MSP cache of installed programs; Windows uses it for repair, modify and uninstall.',
        'Deleting the folder or its contents is irreversible: programs can no longer be uninstalled cleanly and some updates fail.',
        'Growing to 20-40 GB over the years is normal; most of it is orphaned patch files no installed product references.',
        'Disk Cleanup and DISM do NOT touch this folder — DISM\'s component cleanup targets WinSxS, not Installer.',
        'The safest and largest win: properly uninstall old versions of heavily patched products like Office and Visual Studio through Settings.',
        'The folder is marked hidden and system; to see its size you must turn off "Hide protected operating system files" in Explorer.',
      ],
      dataTable: {
        caption: 'What can be deleted inside C:\\Windows\\Installer?',
        columns: ['Item', 'Safe to delete?', 'Why'],
        rows: [
          ['The whole Installer folder', 'Never', 'Permanently breaks repair, modify and uninstall for installed programs'],
          ['.msi files of installed products', 'No', 'Needed to uninstall the program or add features'],
          ['Orphaned .msp patch files', 'Yes, if verified', 'Unnecessary once no installed product references them'],
          ['The $PatchCache$ subfolder', 'With caution', 'Holds patch baselines; removing it can make later patches ask for original media'],
          ['Moving the folder to another drive', 'Not advised', 'An unsupported configuration that can break updates'],
        ],
      },
      howTo: {
        name: 'Shrink C:\\Windows\\Installer safely',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Measure the folder\'s real size',
            text: 'In an elevated PowerShell run `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum`. Divide the resulting Sum by 1GB for the size in gigabytes.',
          },
          {
            name: 'Remove the real cause first',
            text: 'In Settings > Apps > Installed apps, properly uninstall any old versions of Office, Visual Studio or similar. Uninstalling clears their own patches too, and usually delivers the biggest win.',
          },
          {
            name: 'Clean the component store separately',
            text: 'In an elevated command prompt run `DISM /Online /Cleanup-Image /StartComponentCleanup`. It does not touch the Installer folder, but frees space on the WinSxS side — which is often what people are actually looking for.',
          },
          {
            name: 'Remove orphaned patches only with verification',
            text: 'You cannot tell which remaining files are orphaned by looking; the names are random GUIDs. Use only a tool that compares them against the Windows installer database, and take a backup first.',
          },
          {
            name: 'Verify the result',
            text: 'After cleaning, try opening a program\'s "Modify" option from Settings. If it errors, restore your backup; if it works, the cleanup was sound.',
          },
        ],
      },
      sections: [
        {
          title: 'What Is C:\\Windows\\Installer and Why Does It Grow?',
          content: [
            'Every program installed with Windows Installer technology leaves a copy of its MSI package in this folder during setup. The purpose is simple: so that Windows does not have to ask you for the original installation media when you later want to uninstall, repair or modify the program. The same logic applies to patches; every MSP patch is stored here as well.',
            'That is where the growth comes from. A product like Office, which receives patches several times a month, accumulates hundreds of MSP files over the years. Visual Studio, SQL Server and large CAD suites behave the same way. On top of that, when a product is upgraded, the previous version\'s patches are not always cleaned up; those leftovers are called orphaned patches.',
            'The result is that 20-40 GB is not unusual on a five-year-old Windows installation. Because file names are random GUIDs, there is no way to tell what belongs to what by looking — which is the real reason the folder cannot be cleaned by hand.',
          ],
        },
        {
          title: 'Why Is Deleting It Dangerous?',
          content: [
            'The common online advice to "delete this folder and free gigabytes" causes concrete damage. When a program\'s MSI file disappears, Windows can no longer uninstall it: the Uninstall button in Settings throws an error and the program stays stuck in the list. Repair and adding features stop working in the same way.',
            'The second kind of damage shows up during updates. When a new patch is applied to a product, Windows Installer may need the baseline copy of the previous patch. If that copy has been deleted, installation fails, usually with an opaque error code. Tracing the cause months later is close to impossible.',
            'This is why Windows marks the folder hidden and system, and why Disk Cleanup never touches it. Microsoft\'s position is unambiguous: the contents of this folder are not meant to be managed by hand.',
          ],
        },
        {
          title: 'So What Can You Actually Do?',
          content: [
            'The biggest and safest win comes not from the folder itself but from the programs feeding it. If Settings > Apps lists old Office versions you no longer use, several Visual Studio installations or old SQL Server instances, uninstall them properly. Uninstalling clears their MSI and MSP files as well; removing a single old Office version often frees 5-10 GB.',
            'The second step is where most people are actually confused: the component store. `DISM /Online /Cleanup-Image /StartComponentCleanup` clears superseded component versions in `C:\\Windows\\WinSxS`. It does not touch the Installer folder, but WinSxS is frequently the item genuinely inflating the Windows folder.',
            'The third step, clearing orphaned patches, is only safe with a tool that compares against the installer database. Such a tool matches every file in the folder against the reference list of installed products and flags only files no product claims. Do not attempt this by hand, and always create a restore point first.',
          ],
        },
        {
          title: 'Where Else Is Space Hiding on Your Disk?',
          content: [
            'Most people researching the Installer folder arrive with a broader question: "my C drive is full and I cannot find what is filling it." This folder ranks high on the list, but it is rarely the sole culprit.',
            'Other hidden items of a similar scale are the `C:\\Windows\\WinSxS` component store, shadow copies of system restore points, the hibernation file `hiberfil.sys`, the page file `pagefile.sys` and old user profiles. All of them are hidden, and none of them appear correctly when Explorer calculates folder sizes.',
            'Disk Mop\'s Disk Analysis module walks the drive folder by folder including hidden and system directories and sorts these items by size, while the Disk Treemap view turns the same data into something readable at a glance. So instead of guessing which folder is worth your time, you see it.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does Disk Cleanup clear this folder?',
          answer:
            'No. Neither the built-in Disk Cleanup tool nor Storage Sense touches `C:\\Windows\\Installer`. That is deliberate; its contents are required for installed programs to work correctly.',
        },
        {
          question: 'Can I move the folder to another drive?',
          answer:
            'Technically it is possible with a junction, but Microsoft does not support it. Updates and repair operations can fail unexpectedly. If your system drive is very small, uninstalling old programs is the safer fix.',
        },
        {
          question: 'Why are the file names meaningless strings?',
          answer:
            'Windows Installer registers every package with a unique GUID and stores files under that identifier. That is why you cannot tell which program a file belongs to by looking at it; matching is only possible through the installer database.',
        },
        {
          question: 'Why can I not see this folder in Explorer?',
          answer:
            'It is marked hidden and as a "protected operating system file". To see it, turn off "Hide protected operating system files" under Explorer > View > Options > View.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` is one of the largest hidden folders on the disk, but it is not a pile of junk waiting to be deleted. The correct order is: properly uninstall programs you no longer use, then clean the component store with `DISM`, and only then remove orphaned patches using a tool that verifies them.',
        'To see which other hidden items have piled up alongside it, Disk Mop\'s Disk Analysis and Disk Treemap modules sort the drive by size including system folders, and the Uninstall Leftovers module separately lists files and registry entries left behind by removed programs.',
      ],
      ctaText: 'Sort the hidden folders on your disk by size',
    },
    de: {
      title: 'C:\\Windows\\Installer belegt 30 GB: Was ist das, darf man es löschen?',
      metaDescription:
        'Der Ordner C:\\Windows\\Installer kann auf zig Gigabyte anwachsen, doch sein Löschen zerstört Reparatur und Deinstallation installierter Programme. Was sich gefahrlos bereinigen lässt.',
      subtitle: 'Der größte versteckte Ordner der Festplatte — und warum er bleiben muss',
      intro: [
        'Kurze Antwort: `C:\\Windows\\Installer` ist der versteckte Systemordner, in dem Windows die Installations- (MSI) und Patchdateien (MSP) installierter Programme zwischenspeichert. Windows benötigt diese Dateien, um ein Programm zu reparieren, zu ändern oder zu deinstallieren. Den Ordner oder seinen Inhalt pauschal zu löschen zerstört Reparatur und Deinstallation dauerhaft und lässt in manchen Fällen Windows-Updates fehlschlagen. Dass er über Jahre auf 20-40 GB wächst, ist normal, und der größte Teil davon sind verwaiste Patches, auf die kein installiertes Produkt mehr verweist. Der sichere Weg besteht nicht darin, den Ordner zu löschen, sondern anhand der Installer-Datenbank festzustellen, welche Dateien wirklich verwaist sind, und nur diese zu entfernen. Auch das saubere Deinstallieren alter Versionen häufig gepatchter Produkte wie Office oder Visual Studio verkleinert diesen Ordner von selbst.',
        'Der Ordner ist im Explorer standardmäßig unsichtbar; weil geschützte Systemdateien ausgeblendet sind, erfahren viele nie, was ihre Festplatte füllt. Im Folgenden klären wir zuerst, wozu der Ordner dient, und dann, was sich gefahrlos bereinigen lässt.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` ist der MSI/MSP-Zwischenspeicher installierter Programme; Windows nutzt ihn für Reparatur, Änderung und Deinstallation.',
        'Das Löschen des Ordners oder seines Inhalts ist irreversibel: Programme lassen sich nicht mehr sauber entfernen und manche Updates schlagen fehl.',
        'Ein Wachstum auf 20-40 GB über die Jahre ist normal; das meiste sind verwaiste Patchdateien ohne zugehöriges Produkt.',
        'Datenträgerbereinigung und DISM fassen diesen Ordner NICHT an — die Komponentenbereinigung von DISM betrifft WinSxS, nicht Installer.',
        'Der sicherste und größte Gewinn: alte Versionen stark gepatchter Produkte wie Office und Visual Studio sauber über die Einstellungen deinstallieren.',
        'Der Ordner ist als versteckt und System markiert; um seine Größe zu sehen, muss im Explorer "Geschützte Systemdateien ausblenden" deaktiviert werden.',
      ],
      dataTable: {
        caption: 'Was darf in C:\\Windows\\Installer gelöscht werden?',
        columns: ['Element', 'Löschbar?', 'Begründung'],
        rows: [
          ['Der gesamte Installer-Ordner', 'Niemals', 'Zerstört Reparatur, Änderung und Deinstallation installierter Programme dauerhaft'],
          ['.msi-Dateien installierter Produkte', 'Nein', 'Werden zum Deinstallieren oder Hinzufügen von Funktionen benötigt'],
          ['Verwaiste .msp-Patchdateien', 'Ja, nach Prüfung', 'Überflüssig, sobald kein installiertes Produkt mehr darauf verweist'],
          ['Unterordner $PatchCache$', 'Mit Vorsicht', 'Enthält Patch-Basiskopien; ohne sie können spätere Patches Originalmedien verlangen'],
          ['Ordner auf ein anderes Laufwerk verschieben', 'Nicht empfohlen', 'Nicht unterstützte Konfiguration, kann Updates beschädigen'],
        ],
      },
      howTo: {
        name: 'C:\\Windows\\Installer sicher verkleinern',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Die tatsächliche Größe messen',
            text: 'Führen Sie in einer PowerShell als Administrator `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum` aus. Teilen Sie den Wert Sum durch 1GB für die Größe in Gigabyte.',
          },
          {
            name: 'Zuerst die eigentliche Ursache beseitigen',
            text: 'Deinstallieren Sie unter Einstellungen > Apps > Installierte Apps alte Versionen von Office, Visual Studio oder Ähnlichem sauber. Die Deinstallation entfernt auch deren Patches und bringt meist den größten Gewinn.',
          },
          {
            name: 'Den Komponentenspeicher separat bereinigen',
            text: 'Führen Sie in einer Eingabeaufforderung als Administrator `DISM /Online /Cleanup-Image /StartComponentCleanup` aus. Der Installer-Ordner bleibt unangetastet, aber auf der WinSxS-Seite wird Platz frei — oft genau das, wonach gesucht wird.',
          },
          {
            name: 'Verwaiste Patches nur mit Prüfung entfernen',
            text: 'Welche Dateien verwaist sind, lässt sich nicht ansehen; die Namen sind zufällige GUIDs. Nutzen Sie ausschließlich ein Werkzeug, das gegen die Windows-Installer-Datenbank abgleicht, und sichern Sie vorher.',
          },
          {
            name: 'Das Ergebnis prüfen',
            text: 'Öffnen Sie nach der Bereinigung bei einem Programm die Option "Ändern" in den Einstellungen. Erscheint ein Fehler, spielen Sie die Sicherung zurück; funktioniert es, war die Bereinigung sauber.',
          },
        ],
      },
      sections: [
        {
          title: 'Was ist C:\\Windows\\Installer und warum wächst er?',
          content: [
            'Jedes mit der Windows-Installer-Technologie installierte Programm legt während des Setups eine Kopie seines MSI-Pakets in diesem Ordner ab. Der Zweck ist einfach: Windows soll später nicht nach dem Originalmedium fragen müssen, wenn Sie das Programm deinstallieren, reparieren oder ändern wollen. Dasselbe gilt für Patches; auch jeder MSP-Patch wird hier gespeichert.',
            'Daher kommt das Wachstum. Ein Produkt wie Office, das mehrmals im Monat Patches erhält, sammelt über die Jahre Hunderte MSP-Dateien an. Visual Studio, SQL Server und große CAD-Pakete verhalten sich genauso. Hinzu kommt: Wird ein Produkt aktualisiert, werden die Patches der Vorversion nicht immer aufgeräumt; diese Überbleibsel heißen verwaiste Patches.',
            'Das Ergebnis: 20-40 GB sind bei einer fünf Jahre alten Windows-Installation nicht ungewöhnlich. Da die Dateinamen zufällige GUIDs sind, lässt sich durch Ansehen nicht erkennen, was wozu gehört — genau deshalb kann der Ordner nicht von Hand bereinigt werden.',
          ],
        },
        {
          title: 'Warum ist das Löschen gefährlich?',
          content: [
            'Der im Netz verbreitete Rat, "diesen Ordner zu löschen und Gigabyte freizugeben", richtet konkreten Schaden an. Fehlt die MSI-Datei eines Programms, kann Windows es nicht mehr deinstallieren: Die Schaltfläche Deinstallieren in den Einstellungen meldet einen Fehler und das Programm bleibt in der Liste hängen. Reparieren und das Hinzufügen von Funktionen scheitern ebenso.',
            'Der zweite Schaden zeigt sich bei Updates. Beim Einspielen eines neuen Patches benötigt Windows Installer unter Umständen die Basiskopie des vorherigen Patches. Ist diese gelöscht, schlägt die Installation fehl, meist mit einem nichtssagenden Fehlercode. Die Ursache Monate später zu finden, ist nahezu unmöglich.',
            'Deshalb markiert Windows den Ordner als versteckt und System, und deshalb fasst die Datenträgerbereinigung ihn nie an. Microsofts Haltung ist eindeutig: Der Inhalt dieses Ordners ist nicht für die manuelle Verwaltung gedacht.',
          ],
        },
        {
          title: 'Was lässt sich denn tun?',
          content: [
            'Der größte und sicherste Gewinn kommt nicht vom Ordner selbst, sondern von den Programmen, die ihn füllen. Listet Einstellungen > Apps alte Office-Versionen auf, die Sie nicht mehr nutzen, mehrere Visual-Studio-Installationen oder alte SQL-Server-Instanzen, deinstallieren Sie sie ordentlich. Die Deinstallation räumt auch deren MSI- und MSP-Dateien ab; allein das Entfernen einer alten Office-Version gibt oft 5-10 GB frei.',
            'Der zweite Schritt ist die Stelle, die die meisten tatsächlich verwechseln: der Komponentenspeicher. `DISM /Online /Cleanup-Image /StartComponentCleanup` entfernt überholte Komponentenversionen in `C:\\Windows\\WinSxS`. Der Installer-Ordner bleibt unberührt, aber WinSxS ist häufig der Posten, der den Windows-Ordner wirklich aufbläht.',
            'Der dritte Schritt, das Entfernen verwaister Patches, ist nur mit einem Werkzeug sicher, das gegen die Installer-Datenbank abgleicht. Ein solches Werkzeug prüft jede Datei im Ordner gegen die Referenzliste installierter Produkte und markiert nur Dateien, zu denen sich kein Produkt bekennt. Versuchen Sie das nicht von Hand und legen Sie vorher immer einen Wiederherstellungspunkt an.',
          ],
        },
        {
          title: 'Wo versteckt sich sonst noch Platz auf der Festplatte?',
          content: [
            'Die meisten, die zum Installer-Ordner recherchieren, kommen mit einer allgemeineren Frage: "Mein Laufwerk C ist voll und ich finde nicht, was es belegt." Dieser Ordner steht weit oben auf der Liste, ist aber selten allein schuld.',
            'Andere versteckte Posten ähnlicher Größenordnung sind der Komponentenspeicher `C:\\Windows\\WinSxS`, Schattenkopien der Systemwiederherstellungspunkte, die Ruhezustandsdatei `hiberfil.sys`, die Auslagerungsdatei `pagefile.sys` und alte Benutzerprofile. Alle sind versteckt, und keiner erscheint korrekt, wenn der Explorer Ordnergrößen berechnet.',
            'Das Modul Festplattenanalyse von Disk Mop durchläuft das Laufwerk Ordner für Ordner samt versteckter und Systemverzeichnisse und sortiert diese Posten nach Größe; die Ansicht Disk Treemap macht dieselben Daten auf einen Blick lesbar. Statt zu raten, welcher Ordner die Mühe lohnt, sehen Sie es.',
          ],
        },
      ],
      faq: [
        {
          question: 'Bereinigt die Datenträgerbereinigung diesen Ordner?',
          answer:
            'Nein. Weder die integrierte Datenträgerbereinigung noch die Speicheroptimierung fassen `C:\\Windows\\Installer` an. Das ist beabsichtigt; der Inhalt wird für den korrekten Betrieb installierter Programme benötigt.',
        },
        {
          question: 'Kann ich den Ordner auf ein anderes Laufwerk verschieben?',
          answer:
            'Technisch geht das über eine Junction, Microsoft unterstützt es aber nicht. Updates und Reparaturvorgänge können unerwartet fehlschlagen. Bei sehr kleinem Systemlaufwerk ist das Deinstallieren alter Programme die sicherere Lösung.',
        },
        {
          question: 'Warum bestehen die Dateinamen aus sinnlosen Zeichenfolgen?',
          answer:
            'Windows Installer registriert jedes Paket mit einer eindeutigen GUID und speichert Dateien unter dieser Kennung. Deshalb lässt sich an einer Datei nicht ablesen, zu welchem Programm sie gehört; die Zuordnung ist nur über die Installer-Datenbank möglich.',
        },
        {
          question: 'Warum sehe ich diesen Ordner im Explorer nicht?',
          answer:
            'Er ist als versteckt und als "geschützte Systemdatei" markiert. Zum Anzeigen deaktivieren Sie unter Explorer > Ansicht > Optionen > Ansicht die Einstellung "Geschützte Systemdateien ausblenden".',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` gehört zu den größten versteckten Ordnern der Festplatte, ist aber kein Müllhaufen zum Löschen. Die richtige Reihenfolge lautet: nicht mehr genutzte Programme sauber deinstallieren, dann mit `DISM` den Komponentenspeicher bereinigen und erst zuletzt verwaiste Patches mit einem prüfenden Werkzeug entfernen.',
        'Um zu sehen, welche weiteren versteckten Posten sich daneben angesammelt haben, sortieren die Module Festplattenanalyse und Disk Treemap von Disk Mop das Laufwerk samt Systemordnern nach Größe; das Modul Deinstallations-Reste listet zusätzlich Dateien und Registry-Einträge entfernter Programme auf.',
      ],
      ctaText: 'Versteckte Ordner Ihrer Festplatte nach Größe sortieren',
    },
    fr: {
      title: 'C:\\Windows\\Installer fait 30 Go : qu\'est-ce que c\'est, peut-on le supprimer ?',
      metaDescription:
        'Le dossier C:\\Windows\\Installer peut atteindre des dizaines de gigaoctets, mais le supprimer casse la réparation et la désinstallation des programmes. Ce qui peut être nettoyé sans risque.',
      subtitle: 'Le plus gros dossier caché du disque, et pourquoi il doit rester',
      intro: [
        'Réponse courte : `C:\\Windows\\Installer` est le dossier système caché où Windows conserve les fichiers d\'installation (MSI) et de correctif (MSP) des programmes installés. Windows s\'en sert pour réparer, modifier ou désinstaller un programme. Supprimer ce dossier ou son contenu en bloc casse définitivement la réparation et la désinstallation, et fait parfois échouer les mises à jour de Windows. Atteindre 20 à 40 Go en quelques années est normal, et l\'essentiel de ce volume correspond à des correctifs orphelins auxquels plus aucun produit installé ne fait référence. La bonne méthode n\'est pas de supprimer le dossier mais d\'identifier, à l\'aide de la base de données de l\'installeur, les fichiers réellement orphelins et de ne retirer qu\'eux. Désinstaller proprement les anciennes versions de produits très corrigés comme Office ou Visual Studio réduit aussi ce dossier de lui-même.',
        'Le dossier est masqué par défaut dans l\'Explorateur ; comme les fichiers système protégés sont cachés, beaucoup ne découvrent jamais ce qui remplit leur disque. Nous expliquons d\'abord à quoi sert ce dossier, puis ce qui peut être nettoyé sans risque.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` est le cache MSI/MSP des programmes installés ; Windows l\'utilise pour la réparation, la modification et la désinstallation.',
        'Supprimer le dossier ou son contenu est irréversible : les programmes ne se désinstallent plus proprement et certaines mises à jour échouent.',
        'Atteindre 20 à 40 Go au fil des ans est normal ; l\'essentiel est constitué de correctifs orphelins sans produit associé.',
        'Le Nettoyage de disque et DISM ne touchent PAS ce dossier — le nettoyage de composants de DISM concerne WinSxS, pas Installer.',
        'Le gain le plus sûr et le plus important : désinstaller proprement les anciennes versions de produits très corrigés comme Office et Visual Studio.',
        'Le dossier est marqué caché et système ; pour voir sa taille il faut désactiver « Masquer les fichiers protégés du système » dans l\'Explorateur.',
      ],
      dataTable: {
        caption: 'Que peut-on supprimer dans C:\\Windows\\Installer ?',
        columns: ['Élément', 'Suppression ?', 'Motif'],
        rows: [
          ['Tout le dossier Installer', 'Jamais', 'Casse définitivement réparation, modification et désinstallation des programmes'],
          ['Fichiers .msi des produits installés', 'Non', 'Nécessaires pour désinstaller le programme ou ajouter des fonctions'],
          ['Correctifs .msp orphelins', 'Oui, après vérification', 'Inutiles dès qu\'aucun produit installé n\'y fait référence'],
          ['Sous-dossier $PatchCache$', 'Avec prudence', 'Contient les bases des correctifs ; sans elles, les correctifs suivants peuvent réclamer le média d\'origine'],
          ['Déplacer le dossier sur un autre disque', 'Déconseillé', 'Configuration non prise en charge, risque de casser les mises à jour'],
        ],
      },
      howTo: {
        name: 'Réduire C:\\Windows\\Installer sans risque',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Mesurer la taille réelle du dossier',
            text: 'Dans une PowerShell administrateur, exécutez `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum`. Divisez la valeur Sum par 1GB pour obtenir la taille en gigaoctets.',
          },
          {
            name: 'Traiter d\'abord la vraie cause',
            text: 'Dans Paramètres > Applications > Applications installées, désinstallez proprement les anciennes versions d\'Office, Visual Studio ou équivalents. La désinstallation supprime aussi leurs correctifs et apporte en général le gain le plus important.',
          },
          {
            name: 'Nettoyer le magasin de composants séparément',
            text: 'Dans une invite de commandes administrateur, exécutez `DISM /Online /Cleanup-Image /StartComponentCleanup`. Cela ne touche pas au dossier Installer mais libère de l\'espace côté WinSxS — souvent ce que l\'on cherche réellement.',
          },
          {
            name: 'Retirer les correctifs orphelins uniquement après vérification',
            text: 'Impossible de deviner quels fichiers sont orphelins : les noms sont des GUID aléatoires. N\'utilisez qu\'un outil qui compare avec la base de données de l\'installeur Windows, et sauvegardez d\'abord.',
          },
          {
            name: 'Vérifier le résultat',
            text: 'Après le nettoyage, essayez d\'ouvrir l\'option « Modifier » d\'un programme depuis les Paramètres. En cas d\'erreur, restaurez la sauvegarde ; si cela fonctionne, le nettoyage était sain.',
          },
        ],
      },
      sections: [
        {
          title: 'Qu\'est-ce que C:\\Windows\\Installer et pourquoi grossit-il ?',
          content: [
            'Tout programme installé avec la technologie Windows Installer dépose une copie de son paquet MSI dans ce dossier au moment de l\'installation. L\'objectif est simple : éviter que Windows ne réclame le média d\'origine lorsque vous voudrez plus tard désinstaller, réparer ou modifier le programme. La même logique s\'applique aux correctifs ; chaque MSP y est également conservé.',
            'C\'est de là que vient la croissance. Un produit comme Office, corrigé plusieurs fois par mois, accumule des centaines de fichiers MSP au fil des ans. Visual Studio, SQL Server et les grandes suites de CAO se comportent de la même façon. De plus, lorsqu\'un produit est mis à niveau, les correctifs de la version précédente ne sont pas toujours nettoyés ; ces reliquats sont appelés correctifs orphelins.',
            'Résultat : 20 à 40 Go n\'a rien d\'inhabituel sur une installation Windows de cinq ans. Comme les noms de fichiers sont des GUID aléatoires, impossible de savoir ce qui appartient à quoi en regardant — c\'est la vraie raison pour laquelle ce dossier ne se nettoie pas à la main.',
          ],
        },
        {
          title: 'Pourquoi est-il dangereux de le supprimer ?',
          content: [
            'Le conseil répandu en ligne, « supprimez ce dossier et libérez des gigaoctets », cause des dégâts concrets. Quand le fichier MSI d\'un programme disparaît, Windows ne peut plus le désinstaller : le bouton Désinstaller des Paramètres renvoie une erreur et le programme reste coincé dans la liste. La réparation et l\'ajout de fonctions cessent également de fonctionner.',
            'Le second dégât apparaît lors des mises à jour. Lorsqu\'un nouveau correctif est appliqué à un produit, Windows Installer peut avoir besoin de la copie de base du correctif précédent. Si elle a été supprimée, l\'installation échoue, en général avec un code d\'erreur opaque. Retrouver la cause des mois plus tard est quasiment impossible.',
            'C\'est pourquoi Windows marque ce dossier comme caché et système, et pourquoi le Nettoyage de disque n\'y touche jamais. La position de Microsoft est sans ambiguïté : le contenu de ce dossier n\'est pas fait pour être géré à la main.',
          ],
        },
        {
          title: 'Que peut-on faire concrètement ?',
          content: [
            'Le gain le plus important et le plus sûr ne vient pas du dossier lui-même mais des programmes qui l\'alimentent. Si Paramètres > Applications liste d\'anciennes versions d\'Office que vous n\'utilisez plus, plusieurs installations de Visual Studio ou de vieilles instances SQL Server, désinstallez-les proprement. La désinstallation supprime aussi leurs fichiers MSI et MSP ; retirer une seule ancienne version d\'Office libère souvent 5 à 10 Go.',
            'La deuxième étape est l\'endroit que la plupart confondent réellement : le magasin de composants. `DISM /Online /Cleanup-Image /StartComponentCleanup` supprime les versions de composants remplacées dans `C:\\Windows\\WinSxS`. Cela ne touche pas au dossier Installer, mais WinSxS est souvent le poste qui gonfle véritablement le dossier Windows.',
            'La troisième étape, la suppression des correctifs orphelins, n\'est sûre qu\'avec un outil comparant à la base de données de l\'installeur. Un tel outil confronte chaque fichier du dossier à la liste de référence des produits installés et ne signale que ceux qu\'aucun produit ne revendique. N\'essayez pas de le faire à la main et créez toujours un point de restauration au préalable.',
          ],
        },
        {
          title: 'Où l\'espace se cache-t-il ailleurs sur le disque ?',
          content: [
            'La plupart des gens qui se renseignent sur le dossier Installer arrivent avec une question plus large : « mon disque C est plein et je ne trouve pas ce qui l\'occupe ». Ce dossier figure haut dans la liste, mais il est rarement seul en cause.',
            'D\'autres éléments cachés de même ampleur : le magasin de composants `C:\\Windows\\WinSxS`, les clichés instantanés des points de restauration système, le fichier de mise en veille prolongée `hiberfil.sys`, le fichier d\'échange `pagefile.sys` et les anciens profils utilisateur. Tous sont masqués, et aucun n\'apparaît correctement quand l\'Explorateur calcule des tailles de dossiers.',
            'Le module Analyse de disque de Disk Mop parcourt le lecteur dossier par dossier, répertoires cachés et système compris, et trie ces éléments par taille ; la vue Disk Treemap rend les mêmes données lisibles d\'un coup d\'œil. Au lieu de deviner quel dossier mérite votre temps, vous le voyez.',
          ],
        },
      ],
      faq: [
        {
          question: 'Le Nettoyage de disque vide-t-il ce dossier ?',
          answer:
            'Non. Ni l\'outil intégré Nettoyage de disque ni l\'Assistant Stockage ne touchent à `C:\\Windows\\Installer`. C\'est délibéré : son contenu est nécessaire au bon fonctionnement des programmes installés.',
        },
        {
          question: 'Puis-je déplacer le dossier sur un autre disque ?',
          answer:
            'Techniquement oui via une jonction, mais Microsoft ne le prend pas en charge. Les mises à jour et les réparations peuvent échouer de manière imprévisible. Si le disque système est très petit, désinstaller d\'anciens programmes est plus sûr.',
        },
        {
          question: 'Pourquoi les noms de fichiers sont-ils des suites de caractères sans sens ?',
          answer:
            'Windows Installer enregistre chaque paquet avec un GUID unique et stocke les fichiers sous cet identifiant. Impossible donc de savoir à quel programme appartient un fichier en le regardant ; la correspondance ne se fait que via la base de données de l\'installeur.',
        },
        {
          question: 'Pourquoi ce dossier n\'apparaît-il pas dans l\'Explorateur ?',
          answer:
            'Il est marqué caché et « fichier protégé du système d\'exploitation ». Pour l\'afficher, désactivez « Masquer les fichiers protégés du système » dans Explorateur > Affichage > Options > Affichage.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` est l\'un des plus gros dossiers cachés du disque, mais ce n\'est pas un tas de déchets à supprimer. Le bon ordre est : désinstaller proprement les programmes dont vous ne vous servez plus, puis nettoyer le magasin de composants avec `DISM`, et seulement ensuite retirer les correctifs orphelins avec un outil qui les vérifie.',
        'Pour voir quels autres éléments cachés se sont accumulés à côté, les modules Analyse de disque et Disk Treemap de Disk Mop trient le lecteur par taille, dossiers système compris, et le module Résidus de désinstallation liste en outre les fichiers et entrées de registre laissés par les programmes supprimés.',
      ],
      ctaText: 'Classez les dossiers cachés de votre disque par taille',
    },
    es: {
      title: 'C:\\Windows\\Installer ocupa 30 GB: ¿qué es y se puede borrar?',
      metaDescription:
        'La carpeta C:\\Windows\\Installer puede llegar a decenas de gigabytes, pero borrarla rompe la reparación y desinstalación de programas. Qué se puede limpiar con seguridad y cómo.',
      subtitle: 'La carpeta oculta más grande del disco y por qué debe quedarse',
      intro: [
        'Respuesta corta: `C:\\Windows\\Installer` es la carpeta de sistema oculta donde Windows guarda los archivos de instalación (MSI) y de parche (MSP) de los programas instalados. Windows los usa para reparar, modificar o desinstalar un programa. Borrar la carpeta o su contenido en bloque rompe de forma permanente la reparación y la desinstalación, y en algunos casos hace que fallen las actualizaciones de Windows. Que llegue a 20-40 GB con los años es normal, y la mayor parte son parches huérfanos a los que ya no hace referencia ningún producto instalado. La vía segura no es borrar la carpeta, sino identificar qué archivos están realmente huérfanos comparándolos con la base de datos del instalador y quitar solo esos. Desinstalar correctamente versiones antiguas de productos muy parcheados como Office o Visual Studio también reduce esta carpeta por sí solo.',
        'La carpeta está oculta en el Explorador por omisión; como los archivos de sistema protegidos se esconden, mucha gente nunca averigua qué le está llenando el disco. A continuación explicamos primero para qué sirve la carpeta y luego qué se puede limpiar con seguridad.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` es la caché MSI/MSP de los programas instalados; Windows la usa para reparar, modificar y desinstalar.',
        'Borrar la carpeta o su contenido es irreversible: los programas ya no se desinstalan limpiamente y algunas actualizaciones fallan.',
        'Que crezca a 20-40 GB con los años es normal; casi todo son archivos de parche huérfanos sin producto asociado.',
        'El Liberador de espacio y DISM NO tocan esta carpeta: la limpieza de componentes de DISM afecta a WinSxS, no a Installer.',
        'La ganancia más segura y más grande: desinstalar correctamente versiones antiguas de productos muy parcheados como Office y Visual Studio.',
        'La carpeta está marcada como oculta y de sistema; para ver su tamaño hay que desactivar «Ocultar archivos protegidos del sistema operativo» en el Explorador.',
      ],
      dataTable: {
        caption: '¿Qué se puede borrar dentro de C:\\Windows\\Installer?',
        columns: ['Elemento', '¿Se puede borrar?', 'Motivo'],
        rows: [
          ['Toda la carpeta Installer', 'Nunca', 'Rompe de forma permanente reparación, modificación y desinstalación de programas'],
          ['Archivos .msi de productos instalados', 'No', 'Se necesitan para desinstalar el programa o añadir funciones'],
          ['Parches .msp huérfanos', 'Sí, con verificación', 'Innecesarios cuando ningún producto instalado los referencia'],
          ['Subcarpeta $PatchCache$', 'Con cuidado', 'Guarda las bases de los parches; sin ellas los parches posteriores pueden pedir el medio original'],
          ['Mover la carpeta a otra unidad', 'No recomendado', 'Configuración no admitida que puede romper las actualizaciones'],
        ],
      },
      howTo: {
        name: 'Reducir C:\\Windows\\Installer con seguridad',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Medir el tamaño real de la carpeta',
            text: 'En una PowerShell como administrador ejecuta `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum`. Divide el valor Sum entre 1GB para obtener los gigabytes.',
          },
          {
            name: 'Atajar primero la causa real',
            text: 'En Configuración > Aplicaciones > Aplicaciones instaladas, desinstala correctamente versiones antiguas de Office, Visual Studio o similares. La desinstalación limpia también sus parches y suele dar la mayor ganancia.',
          },
          {
            name: 'Limpiar el almacén de componentes aparte',
            text: 'En un símbolo del sistema como administrador ejecuta `DISM /Online /Cleanup-Image /StartComponentCleanup`. No toca la carpeta Installer, pero libera espacio en WinSxS, que suele ser lo que en realidad se busca.',
          },
          {
            name: 'Quitar parches huérfanos solo con verificación',
            text: 'No puedes saber a simple vista cuáles están huérfanos; los nombres son GUID aleatorios. Usa solo una herramienta que compare con la base de datos del instalador de Windows y haz copia de seguridad antes.',
          },
          {
            name: 'Verificar el resultado',
            text: 'Tras la limpieza, prueba a abrir la opción «Modificar» de algún programa desde Configuración. Si da error, restaura la copia; si funciona, la limpieza fue correcta.',
          },
        ],
      },
      sections: [
        {
          title: '¿Qué es C:\\Windows\\Installer y por qué crece tanto?',
          content: [
            'Todo programa instalado con la tecnología Windows Installer deja una copia de su paquete MSI en esta carpeta durante la instalación. El propósito es simple: que Windows no tenga que pedirte el medio original cuando más adelante quieras desinstalar, reparar o modificar el programa. La misma lógica vale para los parches; cada MSP también se guarda aquí.',
            'De ahí viene el crecimiento. Un producto como Office, que recibe parches varias veces al mes, acumula cientos de archivos MSP con los años. Visual Studio, SQL Server y las grandes suites de CAD se comportan igual. Además, cuando se actualiza un producto, los parches de la versión anterior no siempre se limpian; esos restos se llaman parches huérfanos.',
            'El resultado es que 20-40 GB no es raro en una instalación de Windows de cinco años. Como los nombres de archivo son GUID aleatorios, no hay forma de saber qué pertenece a qué mirando: esa es la verdadera razón por la que la carpeta no se puede limpiar a mano.',
          ],
        },
        {
          title: '¿Por qué es peligroso borrarla?',
          content: [
            'El consejo habitual en internet de «borra esta carpeta y libera gigabytes» causa daños concretos. Cuando desaparece el archivo MSI de un programa, Windows ya no puede desinstalarlo: el botón Desinstalar de Configuración da error y el programa se queda atascado en la lista. Reparar y añadir funciones dejan de funcionar igual.',
            'El segundo daño aparece en las actualizaciones. Al aplicar un parche nuevo a un producto, Windows Installer puede necesitar la copia base del parche anterior. Si se ha borrado, la instalación falla, normalmente con un código de error opaco. Rastrear la causa meses después es casi imposible.',
            'Por eso Windows marca la carpeta como oculta y de sistema, y por eso el Liberador de espacio nunca la toca. La posición de Microsoft es inequívoca: el contenido de esta carpeta no está pensado para gestionarse a mano.',
          ],
        },
        {
          title: 'Entonces, ¿qué se puede hacer?',
          content: [
            'La ganancia más grande y segura no viene de la carpeta en sí, sino de los programas que la alimentan. Si Configuración > Aplicaciones muestra versiones antiguas de Office que ya no usas, varias instalaciones de Visual Studio o instancias viejas de SQL Server, desinstálalas correctamente. La desinstalación limpia también sus archivos MSI y MSP; quitar una sola versión antigua de Office suele liberar 5-10 GB.',
            'El segundo paso es donde la mayoría se confunde de verdad: el almacén de componentes. `DISM /Online /Cleanup-Image /StartComponentCleanup` elimina versiones de componentes reemplazadas en `C:\\Windows\\WinSxS`. No toca la carpeta Installer, pero WinSxS es a menudo lo que realmente infla la carpeta Windows.',
            'El tercer paso, quitar parches huérfanos, solo es seguro con una herramienta que compare con la base de datos del instalador. Esa herramienta contrasta cada archivo de la carpeta con la lista de referencia de productos instalados y marca únicamente los que ningún producto reclama. No lo intentes a mano y crea siempre un punto de restauración antes.',
          ],
        },
        {
          title: '¿Dónde más se esconde el espacio en tu disco?',
          content: [
            'La mayoría de quienes investigan la carpeta Installer llegan con una pregunta más amplia: «mi disco C está lleno y no encuentro qué lo ocupa». Esta carpeta está arriba en la lista, pero rara vez es la única culpable.',
            'Otros elementos ocultos de escala parecida son el almacén de componentes `C:\\Windows\\WinSxS`, las instantáneas de los puntos de restauración del sistema, el archivo de hibernación `hiberfil.sys`, el archivo de paginación `pagefile.sys` y los perfiles de usuario antiguos. Todos están ocultos y ninguno aparece correctamente cuando el Explorador calcula tamaños de carpeta.',
            'El módulo Análisis de disco de Disk Mop recorre la unidad carpeta por carpeta, incluidas las ocultas y de sistema, y ordena estos elementos por tamaño; la vista Disk Treemap convierte los mismos datos en algo legible de un vistazo. Así, en vez de adivinar qué carpeta merece tu tiempo, lo ves.',
          ],
        },
      ],
      faq: [
        {
          question: '¿El Liberador de espacio limpia esta carpeta?',
          answer:
            'No. Ni el Liberador de espacio integrado ni el Sensor de almacenamiento tocan `C:\\Windows\\Installer`. Es deliberado: su contenido hace falta para que los programas instalados funcionen correctamente.',
        },
        {
          question: '¿Puedo mover la carpeta a otra unidad?',
          answer:
            'Técnicamente se puede con una unión (junction), pero Microsoft no lo admite. Las actualizaciones y reparaciones pueden fallar de forma imprevista. Si la unidad del sistema es muy pequeña, desinstalar programas antiguos es la solución más segura.',
        },
        {
          question: '¿Por qué los nombres de archivo son cadenas sin sentido?',
          answer:
            'Windows Installer registra cada paquete con un GUID único y guarda los archivos con ese identificador. Por eso no puedes saber a qué programa pertenece un archivo mirándolo; la correspondencia solo se hace a través de la base de datos del instalador.',
        },
        {
          question: '¿Por qué no veo esta carpeta en el Explorador?',
          answer:
            'Está marcada como oculta y como «archivo protegido del sistema operativo». Para verla, desactiva «Ocultar archivos protegidos del sistema operativo» en Explorador > Vista > Opciones > Vista.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` es una de las carpetas ocultas más grandes del disco, pero no es un montón de basura esperando a ser borrado. El orden correcto es: desinstalar bien los programas que ya no usas, después limpiar el almacén de componentes con `DISM` y solo entonces quitar parches huérfanos con una herramienta que los verifique.',
        'Para ver qué otros elementos ocultos se han acumulado junto a ella, los módulos Análisis de disco y Disk Treemap de Disk Mop ordenan la unidad por tamaño incluidas las carpetas de sistema, y el módulo Restos de desinstalación lista además archivos y entradas del registro que dejaron los programas eliminados.',
      ],
      ctaText: 'Ordena por tamaño las carpetas ocultas de tu disco',
    },
    it: {
      title: 'C:\\Windows\\Installer occupa 30 GB: cos\'è e si può cancellare?',
      metaDescription:
        'La cartella C:\\Windows\\Installer può arrivare a decine di gigabyte, ma cancellarla rompe riparazione e disinstallazione dei programmi. Cosa si può pulire in sicurezza e come.',
      subtitle: 'La cartella nascosta più grande del disco e perché deve restare',
      intro: [
        'Risposta breve: `C:\\Windows\\Installer` è la cartella di sistema nascosta in cui Windows conserva i file di installazione (MSI) e di patch (MSP) dei programmi installati. Windows li usa per riparare, modificare o disinstallare un programma. Cancellare la cartella o il suo contenuto in blocco rompe in modo permanente riparazione e disinstallazione e in alcuni casi fa fallire gli aggiornamenti di Windows. Che arrivi a 20-40 GB nel giro di qualche anno è normale, e la maggior parte è costituita da patch orfane a cui nessun prodotto installato fa più riferimento. La strada sicura non è cancellare la cartella, ma individuare quali file sono davvero orfani confrontandoli con il database dell\'installer e rimuovere solo quelli. Anche disinstallare correttamente le vecchie versioni di prodotti molto aggiornati come Office o Visual Studio riduce da sé questa cartella.',
        'La cartella è nascosta in Esplora file per impostazione predefinita; poiché i file di sistema protetti sono celati, in molti non scoprono mai cosa stia riempiendo il disco. Di seguito spieghiamo prima a cosa serve la cartella e poi cosa si può pulire senza rischi.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` è la cache MSI/MSP dei programmi installati; Windows la usa per riparare, modificare e disinstallare.',
        'Cancellare la cartella o il suo contenuto è irreversibile: i programmi non si disinstallano più correttamente e alcuni aggiornamenti falliscono.',
        'Crescere fino a 20-40 GB negli anni è normale; per lo più sono file di patch orfani senza prodotto associato.',
        'Pulizia disco e DISM NON toccano questa cartella: la pulizia componenti di DISM riguarda WinSxS, non Installer.',
        'Il guadagno più sicuro e più grande: disinstallare correttamente le vecchie versioni di prodotti molto aggiornati come Office e Visual Studio.',
        'La cartella è contrassegnata come nascosta e di sistema; per vederne la dimensione occorre disattivare «Nascondi i file protetti di sistema» in Esplora file.',
      ],
      dataTable: {
        caption: 'Cosa si può eliminare dentro C:\\Windows\\Installer?',
        columns: ['Elemento', 'Eliminabile?', 'Motivo'],
        rows: [
          ['L\'intera cartella Installer', 'Mai', 'Rompe in modo permanente riparazione, modifica e disinstallazione dei programmi'],
          ['File .msi dei prodotti installati', 'No', 'Servono per disinstallare il programma o aggiungere funzioni'],
          ['Patch .msp orfane', 'Sì, se verificate', 'Superflue quando nessun prodotto installato vi fa riferimento'],
          ['Sottocartella $PatchCache$', 'Con cautela', 'Contiene le basi delle patch; senza di esse le patch successive possono richiedere il supporto originale'],
          ['Spostare la cartella su un altro disco', 'Sconsigliato', 'Configurazione non supportata, può compromettere gli aggiornamenti'],
        ],
      },
      howTo: {
        name: 'Ridurre C:\\Windows\\Installer in sicurezza',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Misurare la dimensione reale della cartella',
            text: 'In una PowerShell come amministratore esegui `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum`. Dividi il valore Sum per 1GB per ottenere i gigabyte.',
          },
          {
            name: 'Rimuovere prima la causa reale',
            text: 'In Impostazioni > App > App installate disinstalla correttamente eventuali vecchie versioni di Office, Visual Studio o simili. La disinstallazione rimuove anche le loro patch e di solito porta il guadagno maggiore.',
          },
          {
            name: 'Pulire separatamente l\'archivio componenti',
            text: 'In un prompt dei comandi come amministratore esegui `DISM /Online /Cleanup-Image /StartComponentCleanup`. Non tocca la cartella Installer ma libera spazio lato WinSxS, che spesso è ciò che si cerca davvero.',
          },
          {
            name: 'Rimuovere le patch orfane solo previa verifica',
            text: 'Non puoi capire a vista quali file siano orfani: i nomi sono GUID casuali. Usa solo uno strumento che confronti con il database dell\'installer di Windows e fai prima un backup.',
          },
          {
            name: 'Verificare il risultato',
            text: 'Dopo la pulizia prova ad aprire l\'opzione «Modifica» di un programma dalle Impostazioni. Se dà errore, ripristina il backup; se funziona, la pulizia è andata a buon fine.',
          },
        ],
      },
      sections: [
        {
          title: 'Cos\'è C:\\Windows\\Installer e perché cresce tanto?',
          content: [
            'Ogni programma installato con la tecnologia Windows Installer lascia in questa cartella una copia del proprio pacchetto MSI durante l\'installazione. Lo scopo è semplice: evitare che Windows debba chiederti il supporto originale quando più avanti vorrai disinstallare, riparare o modificare il programma. La stessa logica vale per le patch; anche ogni MSP viene conservato qui.',
            'Da qui deriva la crescita. Un prodotto come Office, che riceve patch più volte al mese, accumula centinaia di file MSP negli anni. Visual Studio, SQL Server e le grandi suite CAD si comportano allo stesso modo. Inoltre, quando un prodotto viene aggiornato, le patch della versione precedente non sempre vengono ripulite; quei resti si chiamano patch orfane.',
            'Il risultato è che 20-40 GB non è insolito su un\'installazione di Windows vecchia di cinque anni. Poiché i nomi dei file sono GUID casuali, guardandoli non si capisce cosa appartenga a cosa: è la vera ragione per cui la cartella non si può pulire a mano.',
          ],
        },
        {
          title: 'Perché cancellarla è pericoloso?',
          content: [
            'Il consiglio diffuso in rete di «cancellare questa cartella e liberare gigabyte» provoca danni concreti. Quando il file MSI di un programma sparisce, Windows non può più disinstallarlo: il pulsante Disinstalla nelle Impostazioni restituisce un errore e il programma resta bloccato in elenco. Riparazione e aggiunta di funzioni smettono di funzionare allo stesso modo.',
            'Il secondo danno emerge negli aggiornamenti. Applicando una nuova patch a un prodotto, Windows Installer può aver bisogno della copia base della patch precedente. Se è stata cancellata, l\'installazione fallisce, di solito con un codice di errore incomprensibile. Risalire alla causa mesi dopo è quasi impossibile.',
            'Per questo Windows contrassegna la cartella come nascosta e di sistema, e per questo Pulizia disco non la tocca mai. La posizione di Microsoft è inequivocabile: il contenuto di questa cartella non va gestito a mano.',
          ],
        },
        {
          title: 'Cosa si può fare concretamente?',
          content: [
            'Il guadagno più grande e sicuro non viene dalla cartella in sé ma dai programmi che la alimentano. Se Impostazioni > App elenca vecchie versioni di Office che non usi più, più installazioni di Visual Studio o vecchie istanze di SQL Server, disinstallale correttamente. La disinstallazione rimuove anche i loro file MSI e MSP; togliere una sola vecchia versione di Office libera spesso 5-10 GB.',
            'Il secondo passaggio è il punto che i più confondono davvero: l\'archivio componenti. `DISM /Online /Cleanup-Image /StartComponentCleanup` elimina le versioni di componenti sostituite in `C:\\Windows\\WinSxS`. Non tocca la cartella Installer, ma WinSxS è spesso la voce che gonfia realmente la cartella Windows.',
            'Il terzo passaggio, la rimozione delle patch orfane, è sicuro solo con uno strumento che confronti con il database dell\'installer. Uno strumento simile confronta ogni file della cartella con l\'elenco di riferimento dei prodotti installati e segnala solo i file che nessun prodotto rivendica. Non tentarlo a mano e crea sempre prima un punto di ripristino.',
          ],
        },
        {
          title: 'Dove altro si nasconde lo spazio sul disco?',
          content: [
            'Chi si informa sulla cartella Installer arriva quasi sempre con una domanda più ampia: «il disco C è pieno e non trovo cosa lo occupa». Questa cartella è in cima alla lista, ma raramente è l\'unica colpevole.',
            'Altre voci nascoste di scala simile sono l\'archivio componenti `C:\\Windows\\WinSxS`, le copie shadow dei punti di ripristino del sistema, il file di ibernazione `hiberfil.sys`, il file di paging `pagefile.sys` e i vecchi profili utente. Sono tutte nascoste e nessuna appare correttamente quando Esplora file calcola le dimensioni delle cartelle.',
            'Il modulo Analisi disco di Disk Mop percorre l\'unità cartella per cartella, incluse quelle nascoste e di sistema, e ordina queste voci per dimensione; la vista Disk Treemap rende gli stessi dati leggibili a colpo d\'occhio. Così, invece di indovinare quale cartella meriti il tuo tempo, lo vedi.',
          ],
        },
      ],
      faq: [
        {
          question: 'Pulizia disco svuota questa cartella?',
          answer:
            'No. Né lo strumento integrato Pulizia disco né Sensore memoria toccano `C:\\Windows\\Installer`. È voluto: il suo contenuto serve al corretto funzionamento dei programmi installati.',
        },
        {
          question: 'Posso spostare la cartella su un altro disco?',
          answer:
            'Tecnicamente è possibile con una giunzione, ma Microsoft non lo supporta. Aggiornamenti e riparazioni possono fallire in modo imprevedibile. Se il disco di sistema è molto piccolo, disinstallare i vecchi programmi è la soluzione più sicura.',
        },
        {
          question: 'Perché i nomi dei file sono stringhe senza senso?',
          answer:
            'Windows Installer registra ogni pacchetto con un GUID univoco e salva i file con quell\'identificatore. Per questo non si può capire a quale programma appartenga un file guardandolo; l\'abbinamento avviene solo tramite il database dell\'installer.',
        },
        {
          question: 'Perché non vedo questa cartella in Esplora file?',
          answer:
            'È contrassegnata come nascosta e come «file protetto di sistema». Per vederla disattiva «Nascondi i file protetti di sistema» in Esplora file > Visualizza > Opzioni > Visualizzazione.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` è una delle cartelle nascoste più grandi del disco, ma non è un cumulo di spazzatura da cancellare. L\'ordine corretto è: disinstallare correttamente i programmi che non usi più, poi pulire l\'archivio componenti con `DISM` e solo allora rimuovere le patch orfane con uno strumento che le verifichi.',
        'Per vedere quali altre voci nascoste si sono accumulate accanto, i moduli Analisi disco e Disk Treemap di Disk Mop ordinano l\'unità per dimensione incluse le cartelle di sistema, e il modulo Residui di disinstallazione elenca inoltre file e voci di registro lasciati dai programmi rimossi.',
      ],
      ctaText: 'Ordina per dimensione le cartelle nascoste del tuo disco',
    },
    pt: {
      title: 'C:\\Windows\\Installer com 30 GB: o que é e dá para apagar?',
      metaDescription:
        'A pasta C:\\Windows\\Installer pode chegar a dezenas de gigabytes, mas apagá-la quebra o reparo e a desinstalação dos programas. O que dá para limpar com segurança e como.',
      subtitle: 'A maior pasta oculta do disco e por que ela precisa ficar',
      intro: [
        'Resposta curta: `C:\\Windows\\Installer` é a pasta de sistema oculta onde o Windows guarda os arquivos de instalação (MSI) e de correção (MSP) dos programas instalados. O Windows os usa para reparar, modificar ou desinstalar um programa. Apagar a pasta ou o conteúdo em bloco quebra permanentemente o reparo e a desinstalação e, em alguns casos, faz as atualizações do Windows falharem. Chegar a 20-40 GB ao longo de alguns anos é normal, e a maior parte são correções órfãs às quais nenhum produto instalado se refere mais. O caminho seguro não é apagar a pasta, mas identificar quais arquivos estão de fato órfãos comparando-os com o banco de dados do instalador e remover apenas esses. Desinstalar corretamente versões antigas de produtos muito corrigidos como Office e Visual Studio também encolhe essa pasta por si só.',
        'A pasta fica oculta no Explorador por padrão; como os arquivos de sistema protegidos são escondidos, muita gente nunca descobre o que está enchendo o disco. A seguir explicamos primeiro para que serve a pasta e depois o que pode ser limpo com segurança.',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` é o cache MSI/MSP dos programas instalados; o Windows o usa para reparar, modificar e desinstalar.',
        'Apagar a pasta ou seu conteúdo é irreversível: os programas deixam de ser desinstalados corretamente e algumas atualizações falham.',
        'Crescer para 20-40 GB ao longo dos anos é normal; quase tudo são arquivos de correção órfãos sem produto associado.',
        'A Limpeza de Disco e o DISM NÃO tocam nessa pasta — a limpeza de componentes do DISM atinge o WinSxS, não o Installer.',
        'O ganho mais seguro e maior: desinstalar corretamente versões antigas de produtos muito corrigidos como Office e Visual Studio.',
        'A pasta é marcada como oculta e de sistema; para ver o tamanho é preciso desmarcar «Ocultar arquivos protegidos do sistema operacional» no Explorador.',
      ],
      dataTable: {
        caption: 'O que dá para apagar dentro de C:\\Windows\\Installer?',
        columns: ['Item', 'Pode apagar?', 'Motivo'],
        rows: [
          ['A pasta Installer inteira', 'Nunca', 'Quebra permanentemente reparo, modificação e desinstalação dos programas'],
          ['Arquivos .msi de produtos instalados', 'Não', 'São necessários para desinstalar o programa ou adicionar recursos'],
          ['Correções .msp órfãs', 'Sim, com verificação', 'Desnecessárias quando nenhum produto instalado as referencia'],
          ['Subpasta $PatchCache$', 'Com cuidado', 'Guarda as bases das correções; sem elas correções futuras podem pedir a mídia original'],
          ['Mover a pasta para outra unidade', 'Não recomendado', 'Configuração sem suporte que pode quebrar as atualizações'],
        ],
      },
      howTo: {
        name: 'Reduzir C:\\Windows\\Installer com segurança',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Medir o tamanho real da pasta',
            text: 'Em um PowerShell como administrador execute `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum`. Divida o valor Sum por 1GB para obter o tamanho em gigabytes.',
          },
          {
            name: 'Resolver primeiro a causa real',
            text: 'Em Configurações > Aplicativos > Aplicativos instalados, desinstale corretamente versões antigas de Office, Visual Studio ou semelhantes. A desinstalação limpa também as correções deles e costuma dar o maior ganho.',
          },
          {
            name: 'Limpar o armazenamento de componentes à parte',
            text: 'Em um prompt de comando como administrador execute `DISM /Online /Cleanup-Image /StartComponentCleanup`. Não toca na pasta Installer, mas libera espaço no WinSxS — muitas vezes é o que se procura de fato.',
          },
          {
            name: 'Remover correções órfãs apenas com verificação',
            text: 'Não dá para saber de olho quais arquivos estão órfãos; os nomes são GUIDs aleatórios. Use apenas uma ferramenta que compare com o banco de dados do instalador do Windows e faça backup antes.',
          },
          {
            name: 'Verificar o resultado',
            text: 'Depois da limpeza, tente abrir a opção «Modificar» de algum programa pelas Configurações. Se der erro, restaure o backup; se funcionar, a limpeza foi correta.',
          },
        ],
      },
      sections: [
        {
          title: 'O que é C:\\Windows\\Installer e por que ela cresce tanto?',
          content: [
            'Todo programa instalado com a tecnologia Windows Installer deixa uma cópia do seu pacote MSI nessa pasta durante a instalação. O objetivo é simples: evitar que o Windows precise pedir a mídia original quando você quiser mais tarde desinstalar, reparar ou modificar o programa. A mesma lógica vale para as correções; cada MSP também fica guardado aqui.',
            'É daí que vem o crescimento. Um produto como o Office, que recebe correções várias vezes por mês, acumula centenas de arquivos MSP ao longo dos anos. Visual Studio, SQL Server e grandes pacotes de CAD se comportam do mesmo jeito. Além disso, quando um produto é atualizado, as correções da versão anterior nem sempre são limpas; esses restos são chamados de correções órfãs.',
            'O resultado é que 20-40 GB não é incomum numa instalação do Windows de cinco anos. Como os nomes dos arquivos são GUIDs aleatórios, não há como saber o que pertence a quê apenas olhando — essa é a verdadeira razão pela qual a pasta não pode ser limpa à mão.',
          ],
        },
        {
          title: 'Por que é perigoso apagar?',
          content: [
            'O conselho comum na internet de «apague essa pasta e libere gigabytes» causa danos concretos. Quando o arquivo MSI de um programa some, o Windows não consegue mais desinstalá-lo: o botão Desinstalar nas Configurações dá erro e o programa fica preso na lista. Reparar e adicionar recursos param de funcionar do mesmo jeito.',
            'O segundo dano aparece nas atualizações. Ao aplicar uma nova correção a um produto, o Windows Installer pode precisar da cópia base da correção anterior. Se ela foi apagada, a instalação falha, normalmente com um código de erro obscuro. Rastrear a causa meses depois é praticamente impossível.',
            'Por isso o Windows marca a pasta como oculta e de sistema, e por isso a Limpeza de Disco nunca a toca. A posição da Microsoft é inequívoca: o conteúdo dessa pasta não foi feito para ser gerenciado à mão.',
          ],
        },
        {
          title: 'Então o que dá para fazer?',
          content: [
            'O ganho maior e mais seguro não vem da pasta em si, mas dos programas que a alimentam. Se Configurações > Aplicativos lista versões antigas do Office que você não usa mais, várias instalações do Visual Studio ou instâncias antigas do SQL Server, desinstale-as corretamente. A desinstalação limpa também os arquivos MSI e MSP delas; remover uma única versão antiga do Office costuma liberar 5-10 GB.',
            'O segundo passo é onde a maioria realmente se confunde: o armazenamento de componentes. `DISM /Online /Cleanup-Image /StartComponentCleanup` remove versões de componentes substituídas em `C:\\Windows\\WinSxS`. Não toca na pasta Installer, mas o WinSxS costuma ser o item que de fato incha a pasta Windows.',
            'O terceiro passo, remover correções órfãs, só é seguro com uma ferramenta que compare com o banco de dados do instalador. Essa ferramenta confronta cada arquivo da pasta com a lista de referência dos produtos instalados e marca apenas os que nenhum produto reivindica. Não tente fazer isso à mão e crie sempre um ponto de restauração antes.',
          ],
        },
        {
          title: 'Onde mais o espaço se esconde no seu disco?',
          content: [
            'A maioria de quem pesquisa a pasta Installer chega com uma pergunta mais ampla: «meu disco C está cheio e não encontro o que está ocupando». Essa pasta fica no topo da lista, mas raramente é a única culpada.',
            'Outros itens ocultos de escala parecida são o armazenamento de componentes `C:\\Windows\\WinSxS`, as cópias de sombra dos pontos de restauração do sistema, o arquivo de hibernação `hiberfil.sys`, o arquivo de paginação `pagefile.sys` e os perfis de usuário antigos. Todos são ocultos e nenhum aparece corretamente quando o Explorador calcula tamanhos de pasta.',
            'O módulo Análise de disco do Disk Mop percorre a unidade pasta a pasta, incluindo diretórios ocultos e de sistema, e ordena esses itens por tamanho; a visão Disk Treemap transforma os mesmos dados em algo legível num relance. Assim, em vez de adivinhar qual pasta vale o seu tempo, você vê.',
          ],
        },
      ],
      faq: [
        {
          question: 'A Limpeza de Disco limpa essa pasta?',
          answer:
            'Não. Nem a Limpeza de Disco integrada nem o Sensor de Armazenamento tocam em `C:\\Windows\\Installer`. Isso é proposital; o conteúdo é necessário para que os programas instalados funcionem corretamente.',
        },
        {
          question: 'Posso mover a pasta para outra unidade?',
          answer:
            'Tecnicamente dá com uma junção, mas a Microsoft não oferece suporte. Atualizações e reparos podem falhar de forma imprevisível. Se a unidade de sistema for muito pequena, desinstalar programas antigos é a solução mais segura.',
        },
        {
          question: 'Por que os nomes dos arquivos são sequências sem sentido?',
          answer:
            'O Windows Installer registra cada pacote com um GUID único e guarda os arquivos sob esse identificador. Por isso não dá para saber a qual programa um arquivo pertence só olhando; a correspondência só é possível pelo banco de dados do instalador.',
        },
        {
          question: 'Por que não vejo essa pasta no Explorador?',
          answer:
            'Ela é marcada como oculta e como «arquivo protegido do sistema operacional». Para vê-la, desmarque «Ocultar arquivos protegidos do sistema operacional» em Explorador > Exibir > Opções > Modo de Exibição.',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` é uma das maiores pastas ocultas do disco, mas não é um monte de lixo esperando ser apagado. A ordem correta é: desinstalar corretamente os programas que você não usa mais, depois limpar o armazenamento de componentes com `DISM` e só então remover correções órfãs com uma ferramenta que as verifique.',
        'Para ver quais outros itens ocultos se acumularam ao lado dela, os módulos Análise de disco e Disk Treemap do Disk Mop ordenam a unidade por tamanho incluindo pastas de sistema, e o módulo Sobras de desinstalação lista ainda arquivos e entradas de registro deixados por programas removidos.',
      ],
      ctaText: 'Ordene por tamanho as pastas ocultas do seu disco',
    },
    ja: {
      title: 'C:\\Windows\\Installer が 30 GB: これは何か、削除してよいのか',
      metaDescription:
        'C:\\Windows\\Installer フォルダーは数十ギガバイトに達することがありますが、削除するとインストール済みプログラムの修復とアンインストールが壊れます。安全に片付けられるものは何か。',
      subtitle: 'ディスク上で最大の隠しフォルダーと、削除できない理由',
      intro: [
        '短い答え: `C:\\Windows\\Installer` は、インストール済みプログラムのインストーラー（MSI）とパッチ（MSP）ファイルを Windows がキャッシュしている隠しシステムフォルダーです。Windows はこれらをプログラムの修復、変更、アンインストールに使います。フォルダーや中身をまとめて削除すると、修復とアンインストールが恒久的に壊れ、場合によっては Windows Update も失敗します。数年で 20〜40 GB に達するのは普通で、その大半はどのインストール済み製品からも参照されなくなった孤立パッチです。安全なやり方はフォルダーを削除することではなく、インストーラーのデータベースと照合して本当に孤立しているファイルを特定し、それだけを取り除くことです。Office や Visual Studio のようにパッチの多い製品の古いバージョンを正しくアンインストールするだけでも、このフォルダーは自然に小さくなります。',
        'このフォルダーはエクスプローラーで既定では表示されません。保護されたオペレーティングシステムファイルが隠されているため、多くの人はディスクを埋めているものが何なのか最後まで分かりません。以下ではまずフォルダーの役割を、次に安全に片付けられるものを説明します。',
      ],
      keyTakeaways: [
        '`C:\\Windows\\Installer` はインストール済みプログラムの MSI/MSP キャッシュで、Windows は修復・変更・アンインストールに使います。',
        'フォルダーや中身の削除は取り返しがつきません。プログラムを正しくアンインストールできなくなり、一部の更新が失敗します。',
        '年数を経て 20〜40 GB になるのは普通で、その多くはどの製品にも属さない孤立パッチです。',
        'ディスク クリーンアップと DISM はこのフォルダーに「触れません」。DISM のコンポーネント クリーンアップは WinSxS が対象です。',
        '最も安全で効果が大きいのは、Office や Visual Studio など更新の多い製品の古いバージョンを設定から正しくアンインストールすることです。',
        'フォルダーは隠しかつシステム属性です。サイズを見るにはエクスプローラーで「保護されたオペレーティング システム ファイルを表示しない」をオフにする必要があります。',
      ],
      dataTable: {
        caption: 'C:\\Windows\\Installer の中で何を削除できるか',
        columns: ['対象', '削除の可否', '理由'],
        rows: [
          ['Installer フォルダー全体', '不可', 'インストール済みプログラムの修復・変更・アンインストールが恒久的に壊れる'],
          ['インストール済み製品の .msi', '不可', 'プログラムのアンインストールや機能追加に必要'],
          ['孤立した .msp パッチ', '検証すれば可', 'どのインストール済み製品からも参照されなければ不要'],
          ['$PatchCache$ サブフォルダー', '要注意', 'パッチの基準コピー。削除すると以降のパッチが元のメディアを要求することがある'],
          ['フォルダーの別ドライブへの移動', '非推奨', 'サポートされない構成で、更新が壊れる可能性がある'],
        ],
      },
      howTo: {
        name: 'C:\\Windows\\Installer を安全に縮小する',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'フォルダーの実際のサイズを測る',
            text: '管理者権限の PowerShell で `Get-ChildItem C:\\Windows\\Installer -Force -Recurse | Measure-Object Length -Sum` を実行します。得られた Sum を 1GB で割るとギガバイト単位になります。',
          },
          {
            name: 'まず本当の原因を取り除く',
            text: '設定 > アプリ > インストールされているアプリ で、Office や Visual Studio などの古いバージョンを正しくアンインストールします。アンインストールは自身のパッチも片付けるため、たいてい最大の効果があります。',
          },
          {
            name: 'コンポーネント ストアを別途整理する',
            text: '管理者のコマンドプロンプトで `DISM /Online /Cleanup-Image /StartComponentCleanup` を実行します。Installer フォルダーには触れませんが WinSxS 側で空きが増え、多くの場合こちらが本当に探していた場所です。',
          },
          {
            name: '孤立パッチは検証したうえでのみ削除する',
            text: 'どのファイルが孤立しているかは見ても分かりません。名前はランダムな GUID です。Windows インストーラーのデータベースと照合するツールだけを使い、事前にバックアップを取ってください。',
          },
          {
            name: '結果を確認する',
            text: '整理後、設定からいずれかのプログラムの「変更」を開いてみます。エラーが出るならバックアップを戻し、正常に開くなら問題のない整理です。',
          },
        ],
      },
      sections: [
        {
          title: 'C:\\Windows\\Installer とは何か、なぜ大きくなるのか',
          content: [
            'Windows インストーラー技術でインストールされたプログラムは、セットアップ時に自身の MSI パッケージのコピーをこのフォルダーに置きます。目的は単純で、後でアンインストール・修復・変更をしたいときに Windows が元のインストールメディアを要求しなくて済むようにするためです。パッチも同じ理屈で、すべての MSP がここに保存されます。',
            '大きくなる原因はここにあります。月に何度もパッチが出る Office のような製品は、年月とともに数百の MSP ファイルを蓄積します。Visual Studio、SQL Server、大規模な CAD スイートも同様です。さらに製品をアップグレードしたとき、旧バージョンのパッチが必ず整理されるわけではありません。この残骸を孤立パッチと呼びます。',
            '結果として、5 年使った Windows で 20〜40 GB は珍しくありません。ファイル名がランダムな GUID であるため、見ただけでは何がどれに属するのか分かりません。これこそ、このフォルダーを手作業で整理できない本当の理由です。',
          ],
        },
        {
          title: 'なぜ削除が危険なのか',
          content: [
            'ネット上でよく見る「このフォルダーを削除すればギガバイト単位で空く」という助言は、具体的な損害をもたらします。プログラムの MSI ファイルが失われると、Windows はそのプログラムをアンインストールできなくなります。設定のアンインストールボタンはエラーを返し、プログラムは一覧に残り続けます。修復や機能の追加も同様に動かなくなります。',
            '2 つ目の損害は更新時に現れます。製品に新しいパッチを適用する際、Windows インストーラーは以前のパッチの基準コピーを必要とすることがあります。それが削除されているとインストールは失敗し、たいていは意味の分からないエラーコードが表示されます。数か月後に原因をたどるのはほぼ不可能です。',
            'だからこそ Windows はこのフォルダーを隠しかつシステムとして扱い、ディスク クリーンアップも決して触れません。マイクロソフトの立場は明確です。このフォルダーの中身は手作業で管理するものではありません。',
          ],
        },
        {
          title: 'では実際に何ができるのか',
          content: [
            '最大かつ最も安全な効果は、フォルダー自体ではなく、それを太らせているプログラム側から得られます。設定 > アプリ に、もう使っていない古い Office、複数の Visual Studio、古い SQL Server インスタンスが並んでいるなら、正しくアンインストールしてください。アンインストールは自身の MSI と MSP も片付けます。古い Office を 1 つ削除するだけで 5〜10 GB 空くことがよくあります。',
            '2 番目の手順は、多くの人が実際に取り違えている場所です。コンポーネント ストアです。`DISM /Online /Cleanup-Image /StartComponentCleanup` は `C:\\Windows\\WinSxS` にある置き換え済みのコンポーネントを削除します。Installer フォルダーには触れませんが、Windows フォルダーを本当に膨らませているのは WinSxS であることが多いのです。',
            '3 番目の孤立パッチの削除は、インストーラーのデータベースと照合するツールを使う場合にのみ安全です。そうしたツールはフォルダー内の各ファイルをインストール済み製品の参照リストと突き合わせ、どの製品も所有していないファイルだけを印付けします。手作業で試みず、作業前に必ず復元ポイントを作成してください。',
          ],
        },
        {
          title: 'ディスクの他のどこに容量が隠れているか',
          content: [
            'Installer フォルダーを調べる人の多くは、もっと広い疑問を抱えて来ます。「C ドライブがいっぱいなのに、何が使っているのか分からない」です。このフォルダーは上位に来ますが、単独の犯人であることはまれです。',
            '同じ規模の隠れた項目としては、コンポーネント ストア `C:\\Windows\\WinSxS`、システムの復元ポイントのシャドウ コピー、休止状態ファイル `hiberfil.sys`、ページ ファイル `pagefile.sys`、そして古いユーザー プロファイルがあります。いずれも隠されており、エクスプローラーがフォルダーサイズを計算するとき正しく現れません。',
            'Disk Mop の「ディスク解析」モジュールは、隠しフォルダーやシステム ディレクトリを含めてドライブをフォルダー単位でたどり、これらの項目をサイズ順に並べます。Disk Treemap 表示は同じデータを一目で読める形にします。どのフォルダーに時間をかける価値があるかを推測する代わりに、見て判断できます。',
          ],
        },
      ],
      faq: [
        {
          question: 'ディスク クリーンアップはこのフォルダーを整理しますか。',
          answer:
            'いいえ。標準のディスク クリーンアップもストレージ センサーも `C:\\Windows\\Installer` には触れません。これは意図的な設計で、その中身はインストール済みプログラムが正しく動作するために必要だからです。',
        },
        {
          question: 'フォルダーを別のドライブに移せますか。',
          answer:
            'ジャンクションを使えば技術的には可能ですが、マイクロソフトはサポートしていません。更新や修復が予期せず失敗することがあります。システムドライブが非常に小さい場合は、古いプログラムをアンインストールするほうが安全です。',
        },
        {
          question: 'なぜファイル名は意味のない文字列なのですか。',
          answer:
            'Windows インストーラーは各パッケージを一意の GUID で登録し、その識別子でファイルを保存します。そのため、ファイルを見てどのプログラムのものか判断することはできません。対応付けはインストーラーのデータベース経由でのみ可能です。',
        },
        {
          question: 'なぜエクスプローラーでこのフォルダーが見えないのですか。',
          answer:
            '隠し属性と「保護されたオペレーティング システム ファイル」として設定されているためです。表示するには エクスプローラー > 表示 > オプション > 表示 タブで「保護されたオペレーティング システム ファイルを表示しない」をオフにします。',
        },
      ],
      verdict: [
        '`C:\\Windows\\Installer` はディスク上で最大級の隠しフォルダーですが、削除を待つゴミの山ではありません。正しい順序は、まず使っていないプログラムを正しくアンインストールし、次に `DISM` でコンポーネント ストアを整理し、最後に検証を行うツールで孤立パッチを削除することです。',
        'その隣にどんな隠れた項目が積み上がっているかを見るには、Disk Mop の「ディスク解析」と Disk Treemap がシステムフォルダーを含めてドライブをサイズ順に並べます。「アンインストールの残骸」モジュールは、削除済みプログラムが残したファイルとレジストリ項目を別途一覧にします。',
      ],
      ctaText: 'ディスクの隠しフォルダーをサイズ順に並べる',
    },
  },
};
