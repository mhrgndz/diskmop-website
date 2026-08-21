import type { Article } from '../types';

export const windowsUpdateNotEnoughSpace: Article = {
  slug: 'windows-update-not-enough-space',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-08-17',
  readingTime: 8,
  content: {
    tr: {
      title: "Windows Güncellemesi İçin Yeterli Disk Alanı Yok: Kalıcı Çözüm",
      metaDescription:
        "Windows güncellemesi 0x80070070 hatası veriyor veya yeterli alan olmadığını söylüyorsa: ne kadar alan gerektiği, nereden açılacağı ve Ayrılmış Depolama'nın rolü.",
      subtitle: "20 GB'ı Nereden Bulacaksınız?",
      intro: [
        "Kısa cevap: Windows 11 özellik güncellemeleri sistem diskinde yaklaşık 20 GB boş alan ister. En hızlı yol, Ayarlar > Sistem > Depolama > Geçici dosyalar ekranından \"Windows Update temizliği\" ve \"Önceki Windows kurulumları\" kutularını işaretleyip temizlemektir; bu genellikle tek başına 10-25 GB kazandırır. Yetmezse SoftwareDistribution indirme klasörünü boşaltın ve DISM ile bileşen deposunu temizleyin.",
        "0x80070070 hata kodu veya \"Windows'u yüklemek için daha fazla alana ihtiyaç var\" mesajı, güncellemenin başlayamadığı anlamına gelir. İyi haber, bu hatanın nedeninin neredeyse her zaman geçici dosyalar olmasıdır: eski güncelleme paketleri, önceki Windows kurulumu ve yarım kalmış indirmeler. Bu rehberde alanı sırayla nereden açacağınızı, hangi adımın ne kadar kazandırdığını ve tekrar yaşamamak için ne yapmanız gerektiğini anlatıyoruz.",
      ],
      keyTakeaways: [
        "Windows 11 özellik güncellemeleri sistem diskinde yaklaşık 20 GB boş alan gerektirir.",
        "En yüksek kazanç genellikle \"Windows Update temizliği\" ve \"Önceki Windows kurulumları\" seçeneklerindedir — birlikte 10-25 GB.",
        "SoftwareDistribution\\Download klasörü güvenle boşaltılabilir; Windows gereken paketleri yeniden indirir.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup bileşen deposunu güvenli biçimde küçültür; WinSxS'i elle silmek ise sistemi bozar.",
        "Ayrılmış Depolama (Reserved Storage) güncellemeler için yaklaşık 7 GB tutar ve kapatılabilir, ancak bu sorunu ertelemekten öte bir şey yapmaz.",
        "Windows harici USB bellek kullanmayı teklif ederse bu geçici bir çözümdür; asıl mesele sistem diskinin sürekli dolu çalışmasıdır.",
      ],
      howTo: {
        name: "Windows güncellemesi için disk alanı açma",
        totalTime: "PT30M",
        steps: [
          {
            name: "Ne kadar alan gerektiğini öğrenin",
            text: "Ayarlar > Windows Update ekranındaki hata mesajı genellikle gereken alanı gigabayt cinsinden yazar. Yazmıyorsa özellik güncellemeleri için 20 GB'ı hedef alın.",
          },
          {
            name: "Geçici dosya temizliğini çalıştırın",
            text: "Ayarlar > Sistem > Depolama > Geçici dosyalar yolunu izleyin. Listede \"Windows Update temizliği\", \"Önceki Windows kurulumları\", \"Teslimat Optimizasyonu dosyaları\" ve \"Geçici dosyalar\" kutularını işaretleyip Dosyaları kaldır'a tıklayın.",
          },
          {
            name: "Windows Update indirme klasörünü boşaltın",
            text: "Yönetici komut isteminde net stop wuauserv ve net stop bits komutlarıyla servisleri durdurun. C:\\Windows\\SoftwareDistribution\\Download klasörünün içindekileri silin, ardından net start wuauserv ve net start bits ile servisleri yeniden başlatın.",
          },
          {
            name: "Bileşen deposunu temizleyin",
            text: "Yönetici komut isteminde DISM /Online /Cleanup-Image /StartComponentCleanup komutunu çalıştırın. İşlem birkaç dakika sürebilir ve yalnızca gerçekten gereksiz eski bileşen sürümlerini kaldırır.",
          },
          {
            name: "Kalan alanı kişisel dosyalardan açın",
            text: "Hâlâ yetmiyorsa büyük kişisel dosyaları harici bir diske taşıyın: video arşivleri, eski oyun kurulumları ve indirilenler klasörü en hızlı kazandıran yerlerdir.",
          },
          {
            name: "Güncellemeyi yeniden deneyin",
            text: "Ayarlar > Windows Update ekranına dönün ve Güncellemeleri denetle'ye tıklayın. Güncelleme artık indirilip kurulmaya başlamalıdır.",
          },
        ],
      },
      sections: [
        {
          title: "Windows Güncellemesi Neden Bu Kadar Alan İstiyor?",
          content: [
            "Bir özellik güncellemesi yalnızca indirilen paketin boyutu kadar yer istemez. Windows önce paketi indirir, sonra onu geçici bir alana açar, yeni sistem dosyalarını yerleştirir ve bu sırada eski sürümü geri dönüş için saklar. Üç kopya bir süre aynı anda diskte durur.",
            "Bu yüzden 4 GB'lık bir güncelleme paketi 20 GB boş alan isteyebilir. Kurulum tamamlandıktan sonra bu alanın çoğu serbest bırakılır ama Windows.old klasörü 10 gün boyunca durmaya devam eder.",
            "Aylık güvenlik güncellemeleri çok daha mütevazıdır, genellikle birkaç yüz megabayt ile birkaç gigabayt arasında yer ister. \"Yeterli alan yok\" hatası neredeyse her zaman büyük sürüm güncellemelerinde karşınıza çıkar.",
          ],
        },
        {
          title: "En Çok Kazandıran Adım: Windows Update Temizliği",
          content: [
            "Ayarlar > Sistem > Depolama > Geçici dosyalar ekranı, çoğu kullanıcının hiç bakmadığı ama en büyük kazancı barındıran yerdir. Listedeki \"Windows Update temizliği\" girdisi, kurulduktan sonra artık gerekmeyen eski güncelleme dosyalarını içerir ve tek başına 5-10 GB'ı bulabilir.",
            "\"Önceki Windows kurulumları\" satırı ise Windows.old klasörüdür ve genellikle 15-30 GB tutar. Bunu temizlemek, bir önceki Windows sürümüne geri dönme hakkınızı kaybetmeniz anlamına gelir; mevcut sürümde sorun yaşamıyorsanız güvenle işaretleyebilirsiniz.",
            "Aynı listede \"Teslimat Optimizasyonu dosyaları\" (diğer bilgisayarlarla paylaşılan güncelleme parçaları) ve klasik \"Geçici dosyalar\" da bulunur. Dördünü birlikte işaretlemek çoğu makinede gereken 20 GB'ın tamamını karşılar.",
          ],
        },
        {
          title: "SoftwareDistribution ve DISM ile İleri Temizlik",
          content: [
            "C:\\Windows\\SoftwareDistribution\\Download klasörü, Windows Update'in indirdiği paketleri tuttuğu yerdir. Başarısız veya yarım kalmış güncelleme denemeleri burada birikir ve zamanla gigabaytlara ulaşır. Klasörün içindekileri silmek güvenlidir; Windows ihtiyaç duyduğu paketleri yeniden indirir.",
            "Doğru sıra önce servisleri durdurmaktır: yönetici komut isteminde net stop wuauserv ve net stop bits yazın, klasörün içeriğini silin, ardından net start wuauserv ve net start bits ile servisleri geri açın. Servisleri durdurmadan silmeye çalışırsanız kullanımda olan dosyalar hata verir.",
            "İkinci ileri adım bileşen deposudur. DISM /Online /Cleanup-Image /StartComponentCleanup komutu, WinSxS klasöründeki artık kullanılmayan eski bileşen sürümlerini kaldırır ve birkaç gigabayt kazandırabilir. WinSxS klasörüne asla elle dokunmayın; bu komut o işi güvenli biçimde yapan tek yöntemdir.",
          ],
        },
        {
          title: "Ayrılmış Depolama ve Harici USB Teklifi",
          content: [
            "Windows 10 sürüm 2004'ten itibaren \"Ayrılmış Depolama\" (Reserved Storage) adında bir özellik var: Windows, güncellemeler ve geçici dosyalar için sistem diskinde yaklaşık 7 GB'lık bir alanı önceden ayırır. Amacı tam da bu hatayı önlemektir.",
            "Bu alanı yönetici komut isteminde DISM /Online /Set-ReservedStorageState /State:Disabled komutuyla serbest bırakabilirsiniz. Ancak dikkatli olun: bu, 7 GB kazandırırken güncellemelerin başarısız olma ihtimalini artırır. Diskiniz sürekli sınırda çalışıyorsa asıl çözüm kalıcı olarak yer açmaktır, tamponu kaldırmak değil.",
            "Güncelleme sırasında Windows harici bir USB bellek takmanızı teklif ederse bu geçerli bir yoldur ve 32 GB'lık bir bellek işi görür. Yine de bunu her seferinde tekrarlamak zorunda kalmak, sistem diskinin kalıcı olarak çok dolu olduğunun işaretidir.",
          ],
        },
        {
          title: "Bir Daha Yaşamamak İçin",
          content: [
            "Bu hatayı bir kez çözmek birkaç ay dayanır. Kalıcı çözüm, sistem diskinde 20 GB'lık bir tamponu sürekli boş tutmaktır. Depolama Alanı Algılayıcısı'nı açıp geçici dosyaların ve geri dönüşüm kutusunun otomatik temizlenmesini ayarlamak bunun ilk adımıdır.",
            "İkinci adım, alanın nereye gittiğini düzenli olarak görmektir. Disk Mop'un Disk Analizi (Disk Analysis) modülü sürücüyü treemap olarak çizer ve büyüyen klasörü fark etmenizi kolaylaştırır; Önbellek Temizleyici Windows geçici dosyalarından tarayıcı önbelleklerine yirmiye yakın kategoriyi tek ekranda toplar, zamanlanmış temizlik ise bunu haftalık bir göreve bağlar.",
            "Disk Mop'u ücretsiz indirip sınırlı özelliklerle deneyebilirsiniz; Pro sürüm 19,90 dolarlık tek seferlik ödemeyle ömür boyu lisans sunar. Windows 10 ve 11 (64-bit) ile macOS 12 ve üzerinde çalışır.",
          ],
        },
      ],
      faq: [
        {
          question: "Windows güncellemesi için ne kadar boş alan gerekir?",
          answer:
            "Windows 11 özellik güncellemeleri sistem diskinde yaklaşık 20 GB boş alan ister. Aylık güvenlik güncellemeleri çok daha azını, genellikle birkaç yüz megabayt ile birkaç gigabayt arasını gerektirir. Gereken alan indirilen paket, açılan geçici dosyalar ve geri dönüş için saklanan eski sürüm arasında paylaşılır.",
        },
        {
          question: "0x80070070 hatası ne anlama geliyor?",
          answer:
            "Bu kod disk alanının yetersiz olduğunu gösterir ve güncelleme başlamadan durur. Çözüm alan açmaktır: Ayarlar > Sistem > Depolama > Geçici dosyalar ekranından Windows Update temizliği ve önceki Windows kurulumlarını kaldırın, ardından SoftwareDistribution indirme klasörünü boşaltın.",
        },
        {
          question: "SoftwareDistribution klasörünü silmek güvenli mi?",
          answer:
            "Klasörün altındaki Download alt klasörünün içeriğini silmek güvenlidir; Windows ihtiyaç duyduğu paketleri yeniden indirir. Önce yönetici komut isteminde net stop wuauserv ve net stop bits ile servisleri durdurun, silme işleminden sonra aynı servisleri net start ile yeniden başlatın.",
        },
        {
          question: "Ayrılmış Depolama'yı kapatmalı mıyım?",
          answer:
            "Genellikle hayır. Ayrılmış Depolama, güncellemelerin yer bulabilmesi için ayrılan yaklaşık 7 GB'lık bir tampondur ve tam da bu hatayı önlemek için vardır. DISM /Online /Set-ReservedStorageState /State:Disabled komutuyla kapatılabilir, ancak bu güncelleme hatalarının olasılığını artırır. Kalıcı çözüm diskte gerçekten yer açmaktır.",
        },
        {
          question: "Güncelleme için harici USB bellek kullanabilir miyim?",
          answer:
            "Evet. Yeterli alan bulunamadığında Windows harici bir depolama aygıtı kullanmayı teklif eder ve 32 GB'lık bir USB bellek bu iş için yeterlidir. Bu geçerli bir çözümdür ama geçicidir; her güncellemede tekrarlamak zorunda kalıyorsanız sistem diskiniz kalıcı olarak fazla dolu demektir.",
        },
        {
          question: "Güncelleme sonrası Windows.old klasörünü silebilir miyim?",
          answer:
            "Evet. Windows.old yalnızca ilk 10 gün içinde önceki sürüme dönmenizi sağlar ve zaten 10 gün sonra otomatik silinir. Yeni sürümde sorun yaşamıyorsanız Ayarlar > Sistem > Depolama > Geçici dosyalar ekranından \"Önceki Windows kurulumları\" seçeneğiyle hemen kaldırabilir, 15-30 GB kazanabilirsiniz.",
        },
      ],
      verdict: [
        "\"Yeterli disk alanı yok\" hatasının çözümü sıralıdır: önce Geçici dosyalar ekranından Windows Update temizliği ve önceki Windows kurulumlarını kaldırın, sonra SoftwareDistribution indirme klasörünü boşaltın, gerekirse DISM ile bileşen deposunu temizleyin. Bu üç adım çoğu makinede gereken 20 GB'ı fazlasıyla karşılar.",
        "Ayrılmış Depolama'yı kapatmak ve harici USB kullanmak işe yarar ama ikisi de sorunu ertelemekten ibarettir. Diskiniz her güncellemede sınırda kalıyorsa asıl mesele kalıcı doluluktur.",
        "Kalıcı çözüm, sistem diskinde 20 GB'lık bir tamponu sürekli korumaktır. Depolama Alanı Algılayıcısı'nı açın, temizliği zamanlanmış bir göreve bağlayın ve alanın nereye gittiğini ara ara kontrol edin.",
      ],
      ctaText: "Güncellemeden Önce Yerinizi Açın",
    },
    en: {
      title: "Windows Update Says Not Enough Disk Space: The Permanent Fix",
      metaDescription:
        "If Windows Update fails with 0x80070070 or says it needs more space: how much is actually required, where to reclaim it, and what Reserved Storage has to do with it.",
      subtitle: "Where to Find the 20 GB",
      intro: [
        "Short answer: Windows 11 feature updates need roughly 20 GB free on the system drive. The fastest route is Settings > System > Storage > Temporary files, where ticking \"Windows Update Cleanup\" and \"Previous Windows installation(s)\" typically reclaims 10-25 GB on its own. If that is not enough, clear the SoftwareDistribution download folder and run a DISM component store cleanup.",
        "The error code 0x80070070, or the message that Windows needs more space to install, means the update never got started. The good news is that the cause is almost always temporary data: old update packages, the previous Windows installation and abandoned downloads. This guide walks through where to reclaim space in order, how much each step typically returns, and what to change so it does not happen again.",
      ],
      keyTakeaways: [
        "Windows 11 feature updates require roughly 20 GB of free space on the system drive.",
        "The biggest single win is usually \"Windows Update Cleanup\" plus \"Previous Windows installation(s)\" — together 10-25 GB.",
        "The SoftwareDistribution\\Download folder can be emptied safely; Windows re-downloads whatever it still needs.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup shrinks the component store safely, whereas deleting WinSxS by hand breaks the system.",
        "Reserved Storage holds about 7 GB for updates and can be disabled, but doing so only postpones the problem.",
        "If Windows offers to use an external USB drive, that works — but needing it every time means your system drive is permanently too full.",
      ],
      howTo: {
        name: "Free up disk space for a Windows update",
        totalTime: "PT30M",
        steps: [
          {
            name: "Find out how much space is required",
            text: "The error message under Settings > Windows Update usually states the required amount in gigabytes. If it does not, target 20 GB for a feature update.",
          },
          {
            name: "Run the temporary files cleanup",
            text: "Go to Settings > System > Storage > Temporary files. Tick \"Windows Update Cleanup\", \"Previous Windows installation(s)\", \"Delivery Optimization Files\" and \"Temporary files\", then click Remove files.",
          },
          {
            name: "Empty the Windows Update download folder",
            text: "In an administrator command prompt, stop the services with net stop wuauserv and net stop bits. Delete the contents of C:\\Windows\\SoftwareDistribution\\Download, then restart the services with net start wuauserv and net start bits.",
          },
          {
            name: "Clean up the component store",
            text: "In the same administrator command prompt, run DISM /Online /Cleanup-Image /StartComponentCleanup. It can take several minutes and removes only genuinely superseded component versions.",
          },
          {
            name: "Reclaim the rest from personal files",
            text: "If you are still short, move large personal files to an external drive. Video archives, old game installs and the Downloads folder are usually the fastest wins.",
          },
          {
            name: "Retry the update",
            text: "Return to Settings > Windows Update and click Check for updates. The update should now download and install.",
          },
        ],
      },
      sections: [
        {
          title: "Why Does a Windows Update Need So Much Space?",
          content: [
            "A feature update does not need only as much space as the package it downloads. Windows first downloads the package, then expands it into a working area, installs the new system files, and keeps the previous version for rollback throughout. Three copies coexist on the disk for a while.",
            "That is why a 4 GB update package can demand 20 GB of free space. Most of it is released once installation completes, but the Windows.old folder stays behind for 10 days.",
            "Monthly security updates are far more modest, typically wanting a few hundred megabytes to a few gigabytes. The \"not enough space\" error almost always appears on major version updates rather than routine patches.",
          ],
        },
        {
          title: "The Biggest Win: Windows Update Cleanup",
          content: [
            "Settings > System > Storage > Temporary files is the screen most users never open, and it holds the largest single win. The \"Windows Update Cleanup\" entry contains old update files that are no longer needed once installed, and it alone can reach 5-10 GB.",
            "\"Previous Windows installation(s)\" is the Windows.old folder and typically holds 15-30 GB. Clearing it means giving up the ability to roll back to your previous Windows version; if the current version is running fine, you can tick it safely.",
            "The same list includes \"Delivery Optimization Files\" (update fragments shared with other PCs) and the classic \"Temporary files\". Ticking all four together covers the full 20 GB requirement on most machines.",
          ],
        },
        {
          title: "Advanced Cleanup: SoftwareDistribution and DISM",
          content: [
            "C:\\Windows\\SoftwareDistribution\\Download is where Windows Update keeps the packages it downloads. Failed and abandoned update attempts accumulate here and grow into gigabytes over time. Deleting the contents is safe; Windows re-downloads whatever it needs.",
            "The correct order is to stop the services first: in an administrator command prompt run net stop wuauserv and net stop bits, delete the folder contents, then bring the services back with net start wuauserv and net start bits. Deleting without stopping the services produces in-use errors on the locked files.",
            "The second advanced step is the component store. DISM /Online /Cleanup-Image /StartComponentCleanup removes superseded component versions from WinSxS and can reclaim several gigabytes. Never touch the WinSxS folder by hand — this command is the only method that does that job safely.",
          ],
        },
        {
          title: "Reserved Storage and the External USB Offer",
          content: [
            "Since Windows 10 version 2004 there is a feature called Reserved Storage: Windows sets aside roughly 7 GB on the system drive for updates and temporary files. Its entire purpose is preventing this exact error.",
            "You can release that space with DISM /Online /Set-ReservedStorageState /State:Disabled in an administrator command prompt. Be careful though: it reclaims 7 GB while making future update failures more likely. If your drive runs permanently on the edge, the fix is to free real space rather than remove the safety buffer.",
            "If Windows offers to plug in an external USB drive during the update, that is a legitimate route and a 32 GB stick will do. Still, having to repeat it for every update is a clear signal that the system drive is permanently overfull.",
          ],
        },
        {
          title: "Making Sure It Does Not Happen Again",
          content: [
            "Solving this error once buys you a few months. The durable fix is keeping a 20 GB buffer permanently free on the system drive. Turning on Storage Sense and letting it clear temporary files and the recycle bin automatically is the first step.",
            "The second step is seeing where the space goes on a regular basis. Disk Mop's Disk Analysis draws the drive as a treemap so a folder that is growing becomes obvious; Cache Cleaner collects close to twenty categories on one screen, from Windows temporary files to browser caches; and scheduled cleanup turns all of it into a weekly task.",
            "You can download Disk Mop free and try it with limited features; the Pro version is a one-time $19.90 payment for a lifetime license. It runs on Windows 10 and 11 (64-bit) and macOS 12 or later.",
          ],
        },
      ],
      faq: [
        {
          question: "How much free space does a Windows update need?",
          answer:
            "Windows 11 feature updates require roughly 20 GB of free space on the system drive. Monthly security updates need far less, typically a few hundred megabytes to a few gigabytes. The required space is shared between the downloaded package, the temporary files it expands into, and the previous version kept for rollback.",
        },
        {
          question: "What does error 0x80070070 mean?",
          answer:
            "That code means insufficient disk space, and the update stops before starting. The fix is to reclaim space: use Settings > System > Storage > Temporary files to remove Windows Update Cleanup files and previous Windows installations, then empty the SoftwareDistribution download folder.",
        },
        {
          question: "Is it safe to delete the SoftwareDistribution folder?",
          answer:
            "Deleting the contents of its Download subfolder is safe; Windows re-downloads whatever packages it still needs. Stop the services first with net stop wuauserv and net stop bits in an administrator command prompt, and restart them with net start afterwards.",
        },
        {
          question: "Should I disable Reserved Storage?",
          answer:
            "Usually not. Reserved Storage is a buffer of about 7 GB set aside so updates always have room, and it exists precisely to prevent this error. It can be disabled with DISM /Online /Set-ReservedStorageState /State:Disabled, but that makes update failures more likely. Freeing real space is the better fix.",
        },
        {
          question: "Can I use an external USB drive for the update?",
          answer:
            "Yes. When there is not enough room, Windows offers to use external storage, and a 32 GB USB stick is sufficient. It is a valid solution but a temporary one; if you need it for every update, your system drive is permanently too full.",
        },
        {
          question: "Can I delete Windows.old after the update?",
          answer:
            "Yes. Windows.old only lets you roll back to the previous version within 10 days, and it is deleted automatically after that period. If the new version is working fine, remove it immediately via Settings > System > Storage > Temporary files by ticking \"Previous Windows installation(s)\" and reclaim 15-30 GB.",
        },
      ],
      verdict: [
        "The fix for \"not enough disk space\" follows a clear order: clear Windows Update Cleanup and previous Windows installations from the Temporary files screen, then empty the SoftwareDistribution download folder, then run a DISM component store cleanup if needed. Those three steps cover the required 20 GB on most machines with room to spare.",
        "Disabling Reserved Storage and using an external USB drive both work, but both only postpone the problem. If your drive is on the edge at every update, the real issue is permanent fullness.",
        "The durable answer is maintaining a 20 GB buffer on the system drive at all times. Turn on Storage Sense, put cleanup on a schedule, and check where the space is going from time to time.",
      ],
      ctaText: "Make Room Before the Next Update",
    },
    de: {
      title: "Windows Update meldet zu wenig Speicherplatz: die dauerhafte Lösung",
      metaDescription:
        "Wenn Windows Update mit 0x80070070 scheitert oder mehr Platz verlangt: Wie viel wirklich nötig ist, woher Sie ihn nehmen und welche Rolle der reservierte Speicher spielt.",
      subtitle: "Woher die 20 GB kommen",
      intro: [
        "Kurze Antwort: Funktionsupdates von Windows 11 benötigen rund 20 GB freien Speicher auf dem Systemlaufwerk. Der schnellste Weg führt über Einstellungen > System > Speicher > Temporäre Dateien: Dort die Punkte \"Bereinigung von Windows Update\" und \"Vorherige Windows-Installationen\" ankreuzen — das bringt meist schon 10-25 GB. Reicht das nicht, leeren Sie den Download-Ordner von SoftwareDistribution und bereinigen Sie den Komponentenspeicher mit DISM.",
        "Der Fehlercode 0x80070070 oder die Meldung, Windows benötige mehr Platz für die Installation, bedeutet, dass das Update gar nicht erst begonnen hat. Die gute Nachricht: Die Ursache sind fast immer temporäre Daten — alte Update-Pakete, die vorherige Windows-Installation und abgebrochene Downloads. Dieser Ratgeber zeigt der Reihe nach, woher Sie Platz holen, wie viel jeder Schritt typischerweise bringt und was Sie ändern sollten, damit es nicht wieder passiert.",
      ],
      keyTakeaways: [
        "Funktionsupdates von Windows 11 benötigen rund 20 GB freien Speicher auf dem Systemlaufwerk.",
        "Den größten Einzelgewinn bringen meist \"Bereinigung von Windows Update\" und \"Vorherige Windows-Installationen\" — zusammen 10-25 GB.",
        "Der Ordner SoftwareDistribution\\Download kann gefahrlos geleert werden; Windows lädt benötigte Pakete erneut herunter.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup verkleinert den Komponentenspeicher sicher, während manuelles Löschen von WinSxS das System zerstört.",
        "Der reservierte Speicher hält rund 7 GB für Updates frei und lässt sich abschalten, was das Problem allerdings nur vertagt.",
        "Bietet Windows die Nutzung eines externen USB-Sticks an, funktioniert das — wenn Sie ihn aber bei jedem Update brauchen, ist Ihr Systemlaufwerk dauerhaft zu voll.",
      ],
      howTo: {
        name: "Speicherplatz für ein Windows-Update freimachen",
        totalTime: "PT30M",
        steps: [
          {
            name: "Den benötigten Speicherplatz ermitteln",
            text: "Die Fehlermeldung unter Einstellungen > Windows Update nennt meist den benötigten Wert in Gigabyte. Fehlt die Angabe, rechnen Sie bei einem Funktionsupdate mit 20 GB.",
          },
          {
            name: "Die Bereinigung temporärer Dateien ausführen",
            text: "Öffnen Sie Einstellungen > System > Speicher > Temporäre Dateien. Kreuzen Sie \"Bereinigung von Windows Update\", \"Vorherige Windows-Installationen\", \"Dateien für die Übermittlungsoptimierung\" und \"Temporäre Dateien\" an und klicken Sie auf Dateien entfernen.",
          },
          {
            name: "Den Windows-Update-Download-Ordner leeren",
            text: "Stoppen Sie in einer Eingabeaufforderung als Administrator die Dienste mit net stop wuauserv und net stop bits. Löschen Sie den Inhalt von C:\\Windows\\SoftwareDistribution\\Download und starten Sie die Dienste anschließend mit net start wuauserv und net start bits wieder.",
          },
          {
            name: "Den Komponentenspeicher bereinigen",
            text: "Führen Sie in derselben Eingabeaufforderung DISM /Online /Cleanup-Image /StartComponentCleanup aus. Der Vorgang kann einige Minuten dauern und entfernt ausschließlich tatsächlich überflüssige Komponentenversionen.",
          },
          {
            name: "Den Rest aus eigenen Dateien holen",
            text: "Fehlt weiterhin Platz, verschieben Sie große eigene Dateien auf ein externes Laufwerk. Videoarchive, alte Spielinstallationen und der Downloads-Ordner bringen erfahrungsgemäß am schnellsten Ergebnisse.",
          },
          {
            name: "Das Update erneut versuchen",
            text: "Kehren Sie zu Einstellungen > Windows Update zurück und klicken Sie auf Nach Updates suchen. Das Update sollte nun heruntergeladen und installiert werden.",
          },
        ],
      },
      sections: [
        {
          title: "Warum braucht ein Windows-Update so viel Platz?",
          content: [
            "Ein Funktionsupdate benötigt nicht nur so viel Platz wie das heruntergeladene Paket. Windows lädt das Paket zunächst herunter, entpackt es in einen Arbeitsbereich, installiert die neuen Systemdateien und behält währenddessen die Vorversion für eine mögliche Rückkehr. Drei Kopien liegen eine Zeit lang gleichzeitig auf der Festplatte.",
            "Deshalb kann ein 4 GB großes Update-Paket 20 GB freien Speicher verlangen. Nach Abschluss der Installation wird der größte Teil wieder freigegeben, der Ordner Windows.old bleibt jedoch 10 Tage bestehen.",
            "Monatliche Sicherheitsupdates sind weit genügsamer und verlangen meist einige hundert Megabyte bis wenige Gigabyte. Die Meldung \"nicht genügend Speicherplatz\" erscheint fast ausschließlich bei großen Versionsupdates.",
          ],
        },
        {
          title: "Der größte Gewinn: Bereinigung von Windows Update",
          content: [
            "Einstellungen > System > Speicher > Temporäre Dateien ist der Bildschirm, den die meisten Nutzer nie öffnen — und er birgt den größten Einzelgewinn. Der Eintrag \"Bereinigung von Windows Update\" enthält alte Update-Dateien, die nach der Installation nicht mehr benötigt werden, und erreicht allein oft 5-10 GB.",
            "\"Vorherige Windows-Installationen\" ist der Ordner Windows.old und belegt typischerweise 15-30 GB. Ihn zu entfernen bedeutet, auf die Rückkehr zur vorherigen Windows-Version zu verzichten; läuft die aktuelle Version einwandfrei, können Sie den Punkt bedenkenlos ankreuzen.",
            "In derselben Liste finden sich \"Dateien für die Übermittlungsoptimierung\" (mit anderen PCs geteilte Update-Fragmente) und die klassischen \"Temporären Dateien\". Alle vier zusammen decken auf den meisten Rechnern die geforderten 20 GB vollständig ab.",
          ],
        },
        {
          title: "Fortgeschritten: SoftwareDistribution und DISM",
          content: [
            "In C:\\Windows\\SoftwareDistribution\\Download legt Windows Update die heruntergeladenen Pakete ab. Fehlgeschlagene und abgebrochene Update-Versuche sammeln sich dort an und wachsen mit der Zeit auf mehrere Gigabyte. Den Inhalt zu löschen ist sicher; Windows lädt benötigte Pakete erneut herunter.",
            "Die richtige Reihenfolge beginnt mit dem Stoppen der Dienste: In einer Eingabeaufforderung als Administrator net stop wuauserv und net stop bits ausführen, den Ordnerinhalt löschen und die Dienste anschließend mit net start wuauserv und net start bits wieder starten. Ohne vorheriges Stoppen erzeugen gesperrte Dateien Fehlermeldungen.",
            "Der zweite fortgeschrittene Schritt betrifft den Komponentenspeicher. DISM /Online /Cleanup-Image /StartComponentCleanup entfernt überholte Komponentenversionen aus WinSxS und kann mehrere Gigabyte freigeben. Fassen Sie den WinSxS-Ordner niemals von Hand an — dieser Befehl ist die einzige Methode, die diese Aufgabe sicher erledigt.",
          ],
        },
        {
          title: "Reservierter Speicher und das USB-Angebot",
          content: [
            "Seit Windows 10 Version 2004 gibt es den reservierten Speicher: Windows legt auf dem Systemlaufwerk rund 7 GB für Updates und temporäre Dateien beiseite. Der einzige Zweck ist die Vermeidung genau dieses Fehlers.",
            "Sie können diesen Bereich mit DISM /Online /Set-ReservedStorageState /State:Disabled in einer Eingabeaufforderung als Administrator freigeben. Vorsicht jedoch: Das bringt 7 GB, erhöht aber die Wahrscheinlichkeit künftig fehlschlagender Updates. Läuft Ihr Laufwerk dauerhaft am Limit, ist echtes Freiräumen die bessere Lösung als das Entfernen des Puffers.",
            "Bietet Windows während des Updates an, einen externen USB-Stick zu verwenden, ist das ein gangbarer Weg, und ein 32-GB-Stick genügt. Muss man das jedoch bei jedem Update wiederholen, ist das ein deutliches Zeichen für ein dauerhaft überfülltes Systemlaufwerk.",
          ],
        },
        {
          title: "Damit es nicht wieder passiert",
          content: [
            "Diesen Fehler einmal zu beheben verschafft einige Monate Ruhe. Die dauerhafte Lösung besteht darin, auf dem Systemlaufwerk ständig einen Puffer von 20 GB freizuhalten. Die Speicheroptimierung zu aktivieren und temporäre Dateien sowie den Papierkorb automatisch leeren zu lassen ist der erste Schritt.",
            "Der zweite Schritt ist, regelmäßig zu sehen, wohin der Platz geht. Die Datenträgeranalyse von Disk Mop zeichnet das Laufwerk als Treemap, sodass ein wachsender Ordner sofort auffällt; der Cache Cleaner bündelt knapp zwanzig Kategorien auf einem Bildschirm, von temporären Windows-Dateien bis zu Browser-Caches; und die geplante Bereinigung macht daraus eine wöchentliche Aufgabe.",
            "Sie können Disk Mop kostenlos herunterladen und mit eingeschränkten Funktionen testen; die Pro-Version kostet einmalig 19,90 US-Dollar und beinhaltet eine lebenslange Lizenz. Sie läuft unter Windows 10 und 11 (64-Bit) sowie macOS 12 und neuer.",
          ],
        },
      ],
      faq: [
        {
          question: "Wie viel freien Speicher braucht ein Windows-Update?",
          answer:
            "Funktionsupdates von Windows 11 benötigen rund 20 GB freien Speicher auf dem Systemlaufwerk. Monatliche Sicherheitsupdates brauchen deutlich weniger, meist einige hundert Megabyte bis wenige Gigabyte. Der benötigte Platz verteilt sich auf das heruntergeladene Paket, die daraus entpackten temporären Dateien und die zur Rückkehr aufbewahrte Vorversion.",
        },
        {
          question: "Was bedeutet der Fehler 0x80070070?",
          answer:
            "Der Code steht für unzureichenden Speicherplatz, das Update bricht vor dem Start ab. Die Lösung ist Platz schaffen: Entfernen Sie über Einstellungen > System > Speicher > Temporäre Dateien die Windows-Update-Bereinigung und vorherige Windows-Installationen und leeren Sie anschließend den Download-Ordner von SoftwareDistribution.",
        },
        {
          question: "Ist es sicher, den Ordner SoftwareDistribution zu löschen?",
          answer:
            "Den Inhalt des Unterordners Download zu löschen ist sicher; Windows lädt weiterhin benötigte Pakete erneut herunter. Stoppen Sie zuvor die Dienste mit net stop wuauserv und net stop bits in einer Eingabeaufforderung als Administrator und starten Sie sie danach mit net start wieder.",
        },
        {
          question: "Sollte ich den reservierten Speicher deaktivieren?",
          answer:
            "In der Regel nein. Der reservierte Speicher ist ein Puffer von etwa 7 GB, damit Updates stets Platz finden, und existiert genau zur Vermeidung dieses Fehlers. Deaktivieren lässt er sich mit DISM /Online /Set-ReservedStorageState /State:Disabled, das erhöht aber die Wahrscheinlichkeit fehlschlagender Updates. Echten Speicher freizumachen ist die bessere Lösung.",
        },
        {
          question: "Kann ich für das Update einen externen USB-Stick verwenden?",
          answer:
            "Ja. Fehlt Platz, bietet Windows die Nutzung eines externen Speichermediums an, und ein 32-GB-Stick genügt dafür. Das ist eine gültige, aber vorübergehende Lösung; wenn Sie sie bei jedem Update brauchen, ist Ihr Systemlaufwerk dauerhaft zu voll.",
        },
        {
          question: "Kann ich Windows.old nach dem Update löschen?",
          answer:
            "Ja. Windows.old erlaubt nur innerhalb von 10 Tagen die Rückkehr zur Vorversion und wird danach automatisch entfernt. Läuft die neue Version einwandfrei, entfernen Sie den Ordner sofort über Einstellungen > System > Speicher > Temporäre Dateien mit \"Vorherige Windows-Installationen\" und gewinnen 15-30 GB.",
        },
      ],
      verdict: [
        "Die Behebung von \"nicht genügend Speicherplatz\" folgt einer klaren Reihenfolge: erst Windows-Update-Bereinigung und vorherige Windows-Installationen über die temporären Dateien entfernen, dann den Download-Ordner von SoftwareDistribution leeren, bei Bedarf den Komponentenspeicher per DISM bereinigen. Diese drei Schritte decken auf den meisten Rechnern die nötigen 20 GB mit Reserve ab.",
        "Den reservierten Speicher abzuschalten und einen externen USB-Stick zu nutzen funktioniert zwar, vertagt das Problem aber nur. Steht Ihr Laufwerk bei jedem Update am Limit, ist die dauerhafte Überfüllung die eigentliche Ursache.",
        "Die dauerhafte Antwort lautet: auf dem Systemlaufwerk jederzeit einen Puffer von 20 GB halten. Aktivieren Sie die Speicheroptimierung, planen Sie die Bereinigung als wiederkehrende Aufgabe und kontrollieren Sie gelegentlich, wohin der Platz geht.",
      ],
      ctaText: "Schaffen Sie Platz vor dem nächsten Update",
    },
    fr: {
      title: "Pas assez d'espace disque pour Windows Update : la solution durable",
      metaDescription:
        "Windows Update échoue avec 0x80070070 ou réclame plus de place ? Voici combien d'espace il faut vraiment, où le récupérer et le rôle du stockage réservé.",
      subtitle: "Où trouver les 20 GB",
      intro: [
        "Réponse courte : les mises à jour de fonctionnalités de Windows 11 réclament environ 20 GB libres sur le disque système. Le chemin le plus rapide passe par Paramètres > Système > Stockage > Fichiers temporaires : cocher « Nettoyage de Windows Update » et « Installations précédentes de Windows » récupère à lui seul 10-25 GB dans la plupart des cas. Si cela ne suffit pas, videz le dossier de téléchargement de SoftwareDistribution et lancez un nettoyage du magasin de composants avec DISM.",
        "Le code d'erreur 0x80070070, ou le message indiquant que Windows a besoin de plus de place pour s'installer, signifie que la mise à jour n'a jamais démarré. La bonne nouvelle : la cause est presque toujours constituée de données temporaires — anciens paquets de mise à jour, installation Windows précédente et téléchargements abandonnés. Ce guide montre dans quel ordre récupérer de l'espace, combien chaque étape rapporte en général, et quoi changer pour que le problème ne revienne pas.",
      ],
      keyTakeaways: [
        "Les mises à jour de fonctionnalités de Windows 11 exigent environ 20 GB libres sur le disque système.",
        "Le gain le plus important vient généralement de « Nettoyage de Windows Update » et « Installations précédentes de Windows » — ensemble 10-25 GB.",
        "Le dossier SoftwareDistribution\\Download peut être vidé sans risque : Windows retélécharge ce dont il a encore besoin.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup réduit le magasin de composants en toute sécurité, alors que supprimer WinSxS à la main casse le système.",
        "Le stockage réservé garde environ 7 GB pour les mises à jour et peut être désactivé, mais cela ne fait que repousser le problème.",
        "Si Windows propose d'utiliser une clé USB externe, cela fonctionne — mais en avoir besoin à chaque fois signifie que votre disque système est durablement trop plein.",
      ],
      howTo: {
        name: "Libérer de l'espace disque pour une mise à jour Windows",
        totalTime: "PT30M",
        steps: [
          {
            name: "Déterminer l'espace nécessaire",
            text: "Le message d'erreur affiché sous Paramètres > Windows Update indique généralement la quantité requise en gigaoctets. À défaut, visez 20 GB pour une mise à jour de fonctionnalités.",
          },
          {
            name: "Lancer le nettoyage des fichiers temporaires",
            text: "Ouvrez Paramètres > Système > Stockage > Fichiers temporaires. Cochez « Nettoyage de Windows Update », « Installations précédentes de Windows », « Fichiers d'optimisation de la distribution » et « Fichiers temporaires », puis cliquez sur Supprimer les fichiers.",
          },
          {
            name: "Vider le dossier de téléchargement de Windows Update",
            text: "Dans une invite de commandes en tant qu'administrateur, arrêtez les services avec net stop wuauserv et net stop bits. Supprimez le contenu de C:\\Windows\\SoftwareDistribution\\Download, puis relancez les services avec net start wuauserv et net start bits.",
          },
          {
            name: "Nettoyer le magasin de composants",
            text: "Dans la même invite de commandes en tant qu'administrateur, exécutez DISM /Online /Cleanup-Image /StartComponentCleanup. L'opération peut durer plusieurs minutes et ne retire que les versions de composants réellement obsolètes.",
          },
          {
            name: "Récupérer le reste sur vos fichiers personnels",
            text: "S'il manque encore de la place, déplacez vos gros fichiers personnels vers un disque externe. Les archives vidéo, les anciennes installations de jeux et le dossier Téléchargements sont les gains les plus rapides.",
          },
          {
            name: "Relancer la mise à jour",
            text: "Retournez dans Paramètres > Windows Update et cliquez sur Rechercher des mises à jour. La mise à jour devrait maintenant se télécharger et s'installer.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi une mise à jour Windows réclame-t-elle autant de place ?",
          content: [
            "Une mise à jour de fonctionnalités ne demande pas seulement l'équivalent du paquet téléchargé. Windows télécharge d'abord ce paquet, le décompresse dans une zone de travail, installe les nouveaux fichiers système et conserve pendant toute l'opération la version précédente pour un éventuel retour en arrière. Trois copies cohabitent un moment sur le disque.",
            "C'est pourquoi un paquet de mise à jour de 4 GB peut exiger 20 GB d'espace libre. L'essentiel est restitué une fois l'installation terminée, mais le dossier Windows.old reste en place pendant 10 jours.",
            "Les mises à jour de sécurité mensuelles sont bien plus modestes : elles réclament généralement de quelques centaines de mégaoctets à quelques gigaoctets. L'erreur « espace insuffisant » apparaît presque toujours lors des grandes mises à jour de version, pas lors des correctifs de routine.",
          ],
        },
        {
          title: "Le plus gros gain : le nettoyage de Windows Update",
          content: [
            "Paramètres > Système > Stockage > Fichiers temporaires est l'écran que la plupart des utilisateurs n'ouvrent jamais, et c'est pourtant lui qui contient le gain le plus important. L'entrée « Nettoyage de Windows Update » regroupe les anciens fichiers de mise à jour devenus inutiles après installation, et peut à elle seule atteindre 5-10 GB.",
            "« Installations précédentes de Windows » correspond au dossier Windows.old et pèse généralement 15-30 GB. Le supprimer revient à renoncer au retour vers la version précédente de Windows ; si la version actuelle fonctionne bien, vous pouvez cocher la case sans crainte.",
            "La même liste contient « Fichiers d'optimisation de la distribution » (fragments de mise à jour partagés avec d'autres PC) et les classiques « Fichiers temporaires ». Cocher les quatre ensemble couvre la totalité des 20 GB requis sur la plupart des machines.",
          ],
        },
        {
          title: "Nettoyage avancé : SoftwareDistribution et DISM",
          content: [
            "C:\\Windows\\SoftwareDistribution\\Download est l'endroit où Windows Update conserve les paquets qu'il télécharge. Les tentatives de mise à jour échouées ou abandonnées s'y accumulent et atteignent plusieurs gigaoctets avec le temps. En supprimer le contenu ne présente aucun risque : Windows retélécharge ce dont il a besoin.",
            "Le bon ordre consiste à arrêter d'abord les services : dans une invite de commandes en tant qu'administrateur, exécutez net stop wuauserv et net stop bits, supprimez le contenu du dossier, puis relancez les services avec net start wuauserv et net start bits. Sans cet arrêt préalable, les fichiers verrouillés provoquent des erreurs de fichier en cours d'utilisation.",
            "La deuxième étape avancée concerne le magasin de composants. DISM /Online /Cleanup-Image /StartComponentCleanup retire de WinSxS les versions de composants remplacées et peut libérer plusieurs gigaoctets. Ne touchez jamais au dossier WinSxS à la main : cette commande est la seule méthode qui fasse ce travail en toute sécurité.",
          ],
        },
        {
          title: "Le stockage réservé et la proposition de clé USB",
          content: [
            "Depuis Windows 10 version 2004, une fonction appelée stockage réservé (Reserved Storage) existe : Windows met de côté environ 7 GB sur le disque système pour les mises à jour et les fichiers temporaires. Sa raison d'être est précisément d'éviter cette erreur.",
            "Vous pouvez libérer cet espace avec DISM /Online /Set-ReservedStorageState /State:Disabled dans une invite de commandes en tant qu'administrateur. Prudence toutefois : vous récupérez 7 GB, mais vous rendez les échecs de mise à jour plus probables. Si votre disque vit en permanence à la limite, la vraie solution est de libérer de l'espace réel plutôt que de retirer le matelas de sécurité.",
            "Si Windows propose de brancher une clé USB externe pendant la mise à jour, c'est une voie légitime et une clé de 32 GB suffit. Devoir la répéter à chaque mise à jour reste cependant le signe clair d'un disque système durablement saturé.",
          ],
        },
        {
          title: "Faire en sorte que cela ne se reproduise plus",
          content: [
            "Résoudre cette erreur une fois vous fait gagner quelques mois. La solution durable consiste à garder en permanence 20 GB libres sur le disque système. Activer l'Assistant Stockage (Storage Sense) et le laisser vider automatiquement les fichiers temporaires et la Corbeille est la première étape.",
            "La deuxième étape consiste à voir régulièrement où part la place. L'Analyse du disque (Disk Analysis) de Disk Mop dessine le lecteur sous forme de treemap : un dossier qui enfle saute immédiatement aux yeux. Le Nettoyeur de cache (Cache Cleaner) rassemble près de vingt catégories sur un seul écran, des fichiers temporaires de Windows aux caches des navigateurs, et le nettoyage planifié (Scheduled Cleanup) transforme tout cela en tâche hebdomadaire.",
            "Vous pouvez télécharger Disk Mop gratuitement et l'essayer avec des fonctions limitées ; la version Pro s'obtient pour un paiement unique de 19,90 $ et donne une licence à vie. Elle fonctionne sous Windows 10 et 11 (64 bits) et sur macOS 12 ou version ultérieure.",
          ],
        },
      ],
      faq: [
        {
          question: "Combien d'espace libre faut-il pour une mise à jour Windows ?",
          answer:
            "Les mises à jour de fonctionnalités de Windows 11 réclament environ 20 GB libres sur le disque système. Les mises à jour de sécurité mensuelles en demandent bien moins, de quelques centaines de mégaoctets à quelques gigaoctets. Cet espace se partage entre le paquet téléchargé, les fichiers temporaires qu'il décompresse et la version précédente conservée pour un retour en arrière.",
        },
        {
          question: "Que signifie l'erreur 0x80070070 ?",
          answer:
            "Ce code signale un espace disque insuffisant : la mise à jour s'arrête avant même de commencer. La solution est de libérer de la place. Passez par Paramètres > Système > Stockage > Fichiers temporaires pour supprimer le nettoyage de Windows Update et les installations précédentes de Windows, puis videz le dossier de téléchargement de SoftwareDistribution.",
        },
        {
          question: "Peut-on supprimer le dossier SoftwareDistribution sans risque ?",
          answer:
            "Supprimer le contenu de son sous-dossier Download ne présente aucun risque : Windows retélécharge les paquets dont il a encore besoin. Arrêtez d'abord les services avec net stop wuauserv et net stop bits dans une invite de commandes en tant qu'administrateur, puis relancez-les ensuite avec net start.",
        },
        {
          question: "Faut-il désactiver le stockage réservé ?",
          answer:
            "En général non. Le stockage réservé est un matelas d'environ 7 GB mis de côté pour que les mises à jour trouvent toujours de la place, et il existe précisément pour éviter cette erreur. Il se désactive avec DISM /Online /Set-ReservedStorageState /State:Disabled, mais cela rend les échecs de mise à jour plus probables. Libérer de l'espace réel reste la meilleure solution.",
        },
        {
          question: "Puis-je utiliser une clé USB externe pour la mise à jour ?",
          answer:
            "Oui. Quand la place manque, Windows propose d'utiliser un stockage externe, et une clé USB de 32 GB suffit. C'est une solution valable mais temporaire ; si vous en avez besoin à chaque mise à jour, votre disque système est durablement trop plein.",
        },
        {
          question: "Puis-je supprimer le dossier Windows.old après la mise à jour ?",
          answer:
            "Oui. Windows.old ne sert qu'à revenir à la version précédente dans les 10 jours, et il est supprimé automatiquement passé ce délai. Si la nouvelle version fonctionne bien, retirez-le immédiatement via Paramètres > Système > Stockage > Fichiers temporaires en cochant « Installations précédentes de Windows » : vous récupérez 15-30 GB.",
        },
      ],
      verdict: [
        "La résolution de « pas assez d'espace disque » suit un ordre précis : supprimez d'abord le nettoyage de Windows Update et les installations précédentes de Windows depuis l'écran Fichiers temporaires, videz ensuite le dossier de téléchargement de SoftwareDistribution, puis lancez au besoin un nettoyage du magasin de composants avec DISM. Ces trois étapes couvrent largement les 20 GB requis sur la plupart des machines.",
        "Désactiver le stockage réservé et passer par une clé USB externe fonctionnent, mais ces deux solutions ne font que repousser le problème. Si votre disque est à la limite à chaque mise à jour, la vraie cause est une saturation permanente.",
        "La réponse durable consiste à maintenir en permanence 20 GB libres sur le disque système. Activez l'Assistant Stockage, planifiez le nettoyage comme une tâche récurrente et vérifiez de temps en temps où part la place.",
      ],
      ctaText: "Faites de la place avant la prochaine mise à jour",
    },
    es: {
      title: "Windows Update dice que no hay espacio suficiente: la solución definitiva",
      metaDescription:
        "Si Windows Update falla con el error 0x80070070 o pide más espacio: cuánto hace falta de verdad, de dónde sacarlo y qué papel juega el almacenamiento reservado.",
      subtitle: "De dónde sacar los 20 GB",
      intro: [
        "Respuesta corta: las actualizaciones de características de Windows 11 necesitan unos 20 GB libres en el disco del sistema. La vía más rápida es Configuración > Sistema > Almacenamiento > Archivos temporales: marcar « Limpieza de Windows Update » e « Instalaciones anteriores de Windows » suele recuperar por sí solo entre 10 y 25 GB. Si no basta, vacía la carpeta de descargas de SoftwareDistribution y ejecuta una limpieza del almacén de componentes con DISM.",
        "El código de error 0x80070070, o el mensaje de que Windows necesita más espacio para instalarse, significa que la actualización ni siquiera llegó a empezar. La buena noticia es que la causa casi siempre son datos temporales: paquetes de actualización antiguos, la instalación anterior de Windows y descargas a medias. En esta guía verás en qué orden liberar espacio, cuánto aporta normalmente cada paso y qué cambiar para que no vuelva a ocurrir.",
      ],
      keyTakeaways: [
        "Las actualizaciones de características de Windows 11 necesitan unos 20 GB libres en el disco del sistema.",
        "La mayor ganancia suele estar en « Limpieza de Windows Update » e « Instalaciones anteriores de Windows »: juntas, entre 10 y 25 GB.",
        "La carpeta SoftwareDistribution\\Download se puede vaciar sin riesgo; Windows vuelve a descargar lo que siga necesitando.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup reduce el almacén de componentes de forma segura, mientras que borrar WinSxS a mano rompe el sistema.",
        "El almacenamiento reservado guarda unos 7 GB para las actualizaciones y se puede desactivar, pero eso solo aplaza el problema.",
        "Si Windows ofrece usar una memoria USB externa, funciona, pero necesitarla cada vez significa que tu disco del sistema está permanentemente demasiado lleno.",
      ],
      howTo: {
        name: "Liberar espacio en disco para una actualización de Windows",
        totalTime: "PT30M",
        steps: [
          {
            name: "Averigua cuánto espacio hace falta",
            text: "El mensaje de error de Configuración > Windows Update suele indicar la cantidad necesaria en gigabytes. Si no lo hace, cuenta con 20 GB para una actualización de características.",
          },
          {
            name: "Ejecuta la limpieza de archivos temporales",
            text: "Ve a Configuración > Sistema > Almacenamiento > Archivos temporales. Marca « Limpieza de Windows Update », « Instalaciones anteriores de Windows », « Archivos de Optimización de distribución » y « Archivos temporales », y pulsa Quitar archivos.",
          },
          {
            name: "Vacía la carpeta de descargas de Windows Update",
            text: "En un símbolo del sistema como administrador, detén los servicios con net stop wuauserv y net stop bits. Borra el contenido de C:\\Windows\\SoftwareDistribution\\Download y reinicia los servicios con net start wuauserv y net start bits.",
          },
          {
            name: "Limpia el almacén de componentes",
            text: "En el mismo símbolo del sistema como administrador, ejecuta DISM /Online /Cleanup-Image /StartComponentCleanup. Puede tardar varios minutos y solo elimina versiones de componentes realmente sustituidas.",
          },
          {
            name: "Consigue el resto de tus archivos personales",
            text: "Si aún te falta espacio, mueve los archivos personales grandes a un disco externo. Los archivos de vídeo, las instalaciones antiguas de juegos y la carpeta Descargas son lo que más rápido libera.",
          },
          {
            name: "Vuelve a intentar la actualización",
            text: "Regresa a Configuración > Windows Update y pulsa Buscar actualizaciones. La actualización debería descargarse e instalarse ya sin problemas.",
          },
        ],
      },
      sections: [
        {
          title: "¿Por qué una actualización de Windows pide tanto espacio?",
          content: [
            "Una actualización de características no necesita solo el tamaño del paquete que descarga. Windows descarga primero el paquete, lo descomprime en una zona de trabajo, instala los archivos de sistema nuevos y mantiene mientras tanto la versión anterior por si hay que volver atrás. Durante un rato conviven tres copias en el disco.",
            "Por eso un paquete de actualización de 4 GB puede exigir 20 GB libres. La mayor parte se devuelve al terminar la instalación, pero la carpeta Windows.old se queda 10 días más.",
            "Las actualizaciones de seguridad mensuales son mucho más modestas: suelen pedir desde unos cientos de megabytes hasta unos pocos gigabytes. El error de « espacio insuficiente » aparece casi siempre en las grandes actualizaciones de versión, no en los parches rutinarios.",
          ],
        },
        {
          title: "La mayor ganancia: la limpieza de Windows Update",
          content: [
            "Configuración > Sistema > Almacenamiento > Archivos temporales es la pantalla que casi nadie abre y, sin embargo, la que guarda la mayor ganancia. La entrada « Limpieza de Windows Update » reúne los archivos de actualización antiguos que ya no hacen falta una vez instalados, y por sí sola puede llegar a 5-10 GB.",
            "« Instalaciones anteriores de Windows » es la carpeta Windows.old y suele ocupar entre 15 y 30 GB. Borrarla implica renunciar a volver a la versión anterior de Windows; si la actual funciona bien, puedes marcarla sin riesgo.",
            "En la misma lista están « Archivos de Optimización de distribución » (fragmentos de actualización compartidos con otros equipos) y los clásicos « Archivos temporales ». Marcar los cuatro a la vez cubre los 20 GB necesarios en la mayoría de los equipos.",
          ],
        },
        {
          title: "Limpieza avanzada: SoftwareDistribution y DISM",
          content: [
            "C:\\Windows\\SoftwareDistribution\\Download es donde Windows Update guarda los paquetes que descarga. Los intentos de actualización fallidos o abandonados se acumulan ahí y con el tiempo llegan a varios gigabytes. Borrar su contenido es seguro; Windows vuelve a descargar lo que necesite.",
            "El orden correcto empieza por detener los servicios: en un símbolo del sistema como administrador ejecuta net stop wuauserv y net stop bits, borra el contenido de la carpeta y vuelve a arrancar los servicios con net start wuauserv y net start bits. Si borras sin detenerlos, los archivos bloqueados darán errores de archivo en uso.",
            "El segundo paso avanzado es el almacén de componentes. DISM /Online /Cleanup-Image /StartComponentCleanup elimina de WinSxS las versiones de componentes sustituidas y puede recuperar varios gigabytes. No toques nunca la carpeta WinSxS a mano: este comando es el único método que hace ese trabajo de forma segura.",
          ],
        },
        {
          title: "El almacenamiento reservado y la oferta del USB externo",
          content: [
            "Desde Windows 10 versión 2004 existe una función llamada almacenamiento reservado (Reserved Storage): Windows aparta unos 7 GB del disco del sistema para actualizaciones y archivos temporales. Su único propósito es evitar exactamente este error.",
            "Puedes liberar ese espacio con DISM /Online /Set-ReservedStorageState /State:Disabled en un símbolo del sistema como administrador. Pero cuidado: recuperas 7 GB a costa de que las actualizaciones fallen con más facilidad. Si tu disco vive permanentemente al límite, la solución es liberar espacio de verdad, no quitar el colchón de seguridad.",
            "Si Windows te ofrece conectar una memoria USB externa durante la actualización, es una vía legítima y con 32 GB basta. Aun así, tener que repetirlo en cada actualización es una señal clara de que el disco del sistema está permanentemente saturado.",
          ],
        },
        {
          title: "Para que no vuelva a pasar",
          content: [
            "Resolver este error una vez te da unos meses de tranquilidad. La solución duradera es mantener siempre 20 GB libres en el disco del sistema. Activar el Sensor de almacenamiento (Storage Sense) y dejar que borre automáticamente los archivos temporales y la papelera de reciclaje es el primer paso.",
            "El segundo paso es ver con regularidad adónde se va el espacio. El Análisis de disco (Disk Analysis) de Disk Mop dibuja la unidad como un treemap, así que la carpeta que crece salta a la vista; el Limpiador de caché (Cache Cleaner) reúne cerca de veinte categorías en una sola pantalla, desde los archivos temporales de Windows hasta las cachés de los navegadores; y la limpieza programada (Scheduled Cleanup) convierte todo eso en una tarea semanal.",
            "Puedes descargar Disk Mop gratis y probarlo con funciones limitadas; la versión Pro cuesta un pago único de 19,90 $ e incluye licencia de por vida. Funciona en Windows 10 y 11 (64 bits) y en macOS 12 o posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Cuánto espacio libre necesita una actualización de Windows?",
          answer:
            "Las actualizaciones de características de Windows 11 necesitan unos 20 GB libres en el disco del sistema. Las actualizaciones de seguridad mensuales piden mucho menos, desde unos cientos de megabytes hasta unos pocos gigabytes. Ese espacio se reparte entre el paquete descargado, los archivos temporales que se descomprimen y la versión anterior que se guarda por si hay que volver atrás.",
        },
        {
          question: "¿Qué significa el error 0x80070070?",
          answer:
            "Ese código indica espacio en disco insuficiente y la actualización se detiene antes de empezar. La solución es liberar espacio: usa Configuración > Sistema > Almacenamiento > Archivos temporales para eliminar la limpieza de Windows Update y las instalaciones anteriores de Windows, y después vacía la carpeta de descargas de SoftwareDistribution.",
        },
        {
          question: "¿Es seguro borrar la carpeta SoftwareDistribution?",
          answer:
            "Borrar el contenido de su subcarpeta Download es seguro; Windows vuelve a descargar los paquetes que aún necesite. Detén antes los servicios con net stop wuauserv y net stop bits en un símbolo del sistema como administrador, y arráncalos después con net start.",
        },
        {
          question: "¿Debo desactivar el almacenamiento reservado?",
          answer:
            "Normalmente no. El almacenamiento reservado es un colchón de unos 7 GB apartado para que las actualizaciones siempre tengan sitio, y existe precisamente para evitar este error. Se puede desactivar con DISM /Online /Set-ReservedStorageState /State:Disabled, pero eso hace más probables los fallos de actualización. Liberar espacio real es la mejor solución.",
        },
        {
          question: "¿Puedo usar una memoria USB externa para la actualización?",
          answer:
            "Sí. Cuando falta sitio, Windows ofrece usar almacenamiento externo, y con una memoria USB de 32 GB es suficiente. Es una solución válida, pero temporal; si la necesitas en cada actualización, tu disco del sistema está permanentemente demasiado lleno.",
        },
        {
          question: "¿Puedo borrar la carpeta Windows.old después de actualizar?",
          answer:
            "Sí. Windows.old solo sirve para volver a la versión anterior durante 10 días, y pasado ese plazo se borra sola. Si la versión nueva funciona bien, elimínala ya desde Configuración > Sistema > Almacenamiento > Archivos temporales marcando « Instalaciones anteriores de Windows » y recupera entre 15 y 30 GB.",
        },
      ],
      verdict: [
        "Arreglar el « espacio en disco insuficiente » tiene un orden claro: primero elimina la limpieza de Windows Update y las instalaciones anteriores de Windows desde la pantalla de Archivos temporales, después vacía la carpeta de descargas de SoftwareDistribution y, si hace falta, lanza una limpieza del almacén de componentes con DISM. Esos tres pasos cubren de sobra los 20 GB necesarios en la mayoría de los equipos.",
        "Desactivar el almacenamiento reservado y tirar de una memoria USB externa funcionan, pero ambas cosas solo aplazan el problema. Si tu disco se queda al límite en cada actualización, la causa real es que está permanentemente lleno.",
        "La respuesta duradera es mantener siempre 20 GB libres en el disco del sistema. Activa el Sensor de almacenamiento, programa la limpieza como una tarea recurrente y comprueba de vez en cuando adónde se va el espacio.",
      ],
      ctaText: "Haz sitio antes de la próxima actualización",
    },
    it: {
      title: "Windows Update dice che non c'è spazio sufficiente: la soluzione definitiva",
      metaDescription:
        "Se Windows Update fallisce con l'errore 0x80070070 o chiede più spazio: quanto ne serve davvero, dove recuperarlo e che ruolo ha l'archiviazione riservata.",
      subtitle: "Dove trovare i 20 GB",
      intro: [
        "Risposta breve: gli aggiornamenti delle funzionalità di Windows 11 richiedono circa 20 GB liberi sul disco di sistema. La strada più rapida è Impostazioni > Sistema > Archiviazione > File temporanei: spuntare « Pulizia di Windows Update » e « Installazioni precedenti di Windows » recupera da solo 10-25 GB nella maggior parte dei casi. Se non basta, svuota la cartella di download di SoftwareDistribution ed esegui una pulizia dell'archivio componenti con DISM.",
        "Il codice di errore 0x80070070, o il messaggio che dice che a Windows serve più spazio per installarsi, significa che l'aggiornamento non è mai partito. La buona notizia è che la causa sono quasi sempre dati temporanei: vecchi pacchetti di aggiornamento, l'installazione precedente di Windows e download rimasti a metà. In questa guida vedrai in che ordine liberare spazio, quanto rende di solito ogni passaggio e cosa cambiare perché non succeda di nuovo.",
      ],
      keyTakeaways: [
        "Gli aggiornamenti delle funzionalità di Windows 11 richiedono circa 20 GB liberi sul disco di sistema.",
        "Il guadagno maggiore arriva di solito da « Pulizia di Windows Update » e « Installazioni precedenti di Windows »: insieme 10-25 GB.",
        "La cartella SoftwareDistribution\\Download si può svuotare senza rischi: Windows riscarica ciò che gli serve ancora.",
        "DISM /Online /Cleanup-Image /StartComponentCleanup riduce l'archivio componenti in sicurezza, mentre eliminare WinSxS a mano rompe il sistema.",
        "L'archiviazione riservata tiene da parte circa 7 GB per gli aggiornamenti e si può disattivare, ma così il problema viene solo rimandato.",
        "Se Windows propone di usare una chiavetta USB esterna funziona, ma averne bisogno ogni volta significa che il disco di sistema è stabilmente troppo pieno.",
      ],
      howTo: {
        name: "Liberare spazio su disco per un aggiornamento di Windows",
        totalTime: "PT30M",
        steps: [
          {
            name: "Scopri quanto spazio serve",
            text: "Il messaggio di errore in Impostazioni > Windows Update indica di solito la quantità richiesta in gigabyte. Se non lo fa, punta a 20 GB per un aggiornamento delle funzionalità.",
          },
          {
            name: "Esegui la pulizia dei file temporanei",
            text: "Vai su Impostazioni > Sistema > Archiviazione > File temporanei. Spunta « Pulizia di Windows Update », « Installazioni precedenti di Windows », « File di Ottimizzazione recapito » e « File temporanei », poi fai clic su Rimuovi file.",
          },
          {
            name: "Svuota la cartella di download di Windows Update",
            text: "In un prompt dei comandi come amministratore, ferma i servizi con net stop wuauserv e net stop bits. Elimina il contenuto di C:\\Windows\\SoftwareDistribution\\Download, poi riavvia i servizi con net start wuauserv e net start bits.",
          },
          {
            name: "Pulisci l'archivio componenti",
            text: "Nello stesso prompt dei comandi come amministratore, esegui DISM /Online /Cleanup-Image /StartComponentCleanup. L'operazione può richiedere alcuni minuti e rimuove soltanto le versioni di componenti davvero sostituite.",
          },
          {
            name: "Recupera il resto dai file personali",
            text: "Se lo spazio non basta ancora, sposta i file personali di grandi dimensioni su un disco esterno. Archivi video, vecchie installazioni di giochi e la cartella Download sono di solito i guadagni più rapidi.",
          },
          {
            name: "Riprova l'aggiornamento",
            text: "Torna in Impostazioni > Windows Update e fai clic su Verifica disponibilità aggiornamenti. Ora l'aggiornamento dovrebbe scaricarsi e installarsi.",
          },
        ],
      },
      sections: [
        {
          title: "Perché un aggiornamento di Windows chiede tutto questo spazio?",
          content: [
            "Un aggiornamento delle funzionalità non richiede soltanto lo spazio del pacchetto che scarica. Windows prima scarica il pacchetto, poi lo espande in un'area di lavoro, installa i nuovi file di sistema e per tutto il tempo conserva la versione precedente per un eventuale ritorno indietro. Per un po' sul disco convivono tre copie.",
            "Ecco perché un pacchetto di aggiornamento da 4 GB può pretendere 20 GB liberi. La maggior parte viene restituita a installazione conclusa, ma la cartella Windows.old resta lì per 10 giorni.",
            "Gli aggiornamenti di sicurezza mensili sono molto più contenuti: chiedono in genere da qualche centinaio di megabyte a pochi gigabyte. L'errore « spazio insufficiente » compare quasi sempre sui grandi aggiornamenti di versione, non sulle patch di routine.",
          ],
        },
        {
          title: "Il guadagno maggiore: la pulizia di Windows Update",
          content: [
            "Impostazioni > Sistema > Archiviazione > File temporanei è la schermata che quasi nessuno apre, eppure è quella che nasconde il guadagno più grande. La voce « Pulizia di Windows Update » raccoglie i vecchi file di aggiornamento che dopo l'installazione non servono più e da sola può arrivare a 5-10 GB.",
            "« Installazioni precedenti di Windows » è la cartella Windows.old e occupa tipicamente 15-30 GB. Rimuoverla significa rinunciare al ritorno alla versione precedente di Windows; se quella attuale funziona bene, puoi spuntarla senza timori.",
            "Nella stessa lista compaiono « File di Ottimizzazione recapito » (frammenti di aggiornamento condivisi con altri PC) e i classici « File temporanei ». Spuntare tutte e quattro le voci copre l'intero fabbisogno di 20 GB sulla maggior parte delle macchine.",
          ],
        },
        {
          title: "Pulizia avanzata: SoftwareDistribution e DISM",
          content: [
            "In C:\\Windows\\SoftwareDistribution\\Download Windows Update conserva i pacchetti che scarica. I tentativi di aggiornamento falliti o interrotti si accumulano lì e con il tempo crescono fino a diversi gigabyte. Eliminarne il contenuto è sicuro: Windows riscarica quello che gli serve.",
            "L'ordine corretto parte dallo stop dei servizi: in un prompt dei comandi come amministratore esegui net stop wuauserv e net stop bits, elimina il contenuto della cartella e poi riavvia i servizi con net start wuauserv e net start bits. Se elimini senza fermarli, i file bloccati generano errori di file in uso.",
            "Il secondo passaggio avanzato riguarda l'archivio componenti. DISM /Online /Cleanup-Image /StartComponentCleanup rimuove da WinSxS le versioni di componenti sostituite e può liberare diversi gigabyte. Non toccare mai la cartella WinSxS a mano: questo comando è l'unico metodo che svolge quel lavoro in sicurezza.",
          ],
        },
        {
          title: "L'archiviazione riservata e la proposta della chiavetta USB",
          content: [
            "Da Windows 10 versione 2004 esiste una funzione chiamata archiviazione riservata (Reserved Storage): Windows mette da parte circa 7 GB sul disco di sistema per aggiornamenti e file temporanei. Il suo unico scopo è evitare proprio questo errore.",
            "Puoi liberare quello spazio con DISM /Online /Set-ReservedStorageState /State:Disabled in un prompt dei comandi come amministratore. Attenzione però: recuperi 7 GB, ma rendi più probabili i futuri fallimenti degli aggiornamenti. Se il disco vive stabilmente al limite, la soluzione è liberare spazio vero, non togliere il cuscinetto di sicurezza.",
            "Se durante l'aggiornamento Windows propone di collegare una chiavetta USB esterna, è una strada legittima e una chiavetta da 32 GB basta. Doverlo ripetere a ogni aggiornamento resta però un segnale chiaro di un disco di sistema stabilmente troppo pieno.",
          ],
        },
        {
          title: "Fare in modo che non si ripeta",
          content: [
            "Risolvere questo errore una volta ti regala qualche mese. La soluzione duratura è tenere sempre liberi 20 GB sul disco di sistema. Attivare il Sensore memoria (Storage Sense) e lasciargli cancellare in automatico i file temporanei e il cestino è il primo passo.",
            "Il secondo passo è controllare con regolarità dove finisce lo spazio. L'Analisi disco (Disk Analysis) di Disk Mop disegna l'unità come treemap, così la cartella che si gonfia salta subito all'occhio; Pulizia cache (Cache Cleaner) raccoglie quasi venti categorie in un'unica schermata, dai file temporanei di Windows alle cache dei browser; e la pulizia pianificata (Scheduled Cleanup) trasforma tutto questo in un'attività settimanale.",
            "Puoi scaricare Disk Mop gratuitamente e provarlo con funzioni limitate; la versione Pro costa un pagamento unico di 19,90 $ e include la licenza a vita. Funziona su Windows 10 e 11 (64 bit) e su macOS 12 o successivo.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto spazio libero serve per un aggiornamento di Windows?",
          answer:
            "Gli aggiornamenti delle funzionalità di Windows 11 richiedono circa 20 GB liberi sul disco di sistema. Gli aggiornamenti di sicurezza mensili ne chiedono molto meno, di solito da qualche centinaio di megabyte a pochi gigabyte. Lo spazio necessario si divide tra il pacchetto scaricato, i file temporanei in cui viene espanso e la versione precedente conservata per il ritorno indietro.",
        },
        {
          question: "Che cosa significa l'errore 0x80070070?",
          answer:
            "Quel codice segnala spazio su disco insufficiente e l'aggiornamento si ferma prima di partire. La soluzione è liberare spazio: da Impostazioni > Sistema > Archiviazione > File temporanei rimuovi la pulizia di Windows Update e le installazioni precedenti di Windows, poi svuota la cartella di download di SoftwareDistribution.",
        },
        {
          question: "È sicuro eliminare la cartella SoftwareDistribution?",
          answer:
            "Eliminare il contenuto della sottocartella Download è sicuro: Windows riscarica i pacchetti di cui ha ancora bisogno. Ferma prima i servizi con net stop wuauserv e net stop bits in un prompt dei comandi come amministratore e riavviali dopo con net start.",
        },
        {
          question: "Conviene disattivare l'archiviazione riservata?",
          answer:
            "In genere no. L'archiviazione riservata è un cuscinetto di circa 7 GB messo da parte perché gli aggiornamenti trovino sempre posto, e serve proprio a evitare questo errore. Si disattiva con DISM /Online /Set-ReservedStorageState /State:Disabled, ma così i fallimenti degli aggiornamenti diventano più probabili. Liberare spazio vero resta la scelta migliore.",
        },
        {
          question: "Posso usare una chiavetta USB esterna per l'aggiornamento?",
          answer:
            "Sì. Quando lo spazio non basta, Windows propone di usare una memoria esterna e una chiavetta da 32 GB è sufficiente. È una soluzione valida ma temporanea: se ti serve a ogni aggiornamento, il disco di sistema è stabilmente troppo pieno.",
        },
        {
          question: "Posso eliminare la cartella Windows.old dopo l'aggiornamento?",
          answer:
            "Sì. Windows.old serve solo a tornare alla versione precedente entro 10 giorni e dopo viene eliminata automaticamente. Se la nuova versione funziona bene, rimuovila subito da Impostazioni > Sistema > Archiviazione > File temporanei spuntando « Installazioni precedenti di Windows » e recupera 15-30 GB.",
        },
      ],
      verdict: [
        "La soluzione di « spazio su disco insufficiente » segue un ordine preciso: prima rimuovi la pulizia di Windows Update e le installazioni precedenti di Windows dalla schermata File temporanei, poi svuota la cartella di download di SoftwareDistribution e, se serve, esegui una pulizia dell'archivio componenti con DISM. Questi tre passaggi coprono con ampio margine i 20 GB richiesti sulla maggior parte delle macchine.",
        "Disattivare l'archiviazione riservata e ricorrere a una chiavetta USB esterna funzionano, ma entrambe le strade si limitano a rimandare il problema. Se il disco è al limite a ogni aggiornamento, la vera causa è la saturazione permanente.",
        "La risposta duratura è mantenere sempre 20 GB liberi sul disco di sistema. Attiva il Sensore memoria, metti la pulizia su un'attività pianificata e controlla ogni tanto dove sta finendo lo spazio.",
      ],
      ctaText: "Fai spazio prima del prossimo aggiornamento",
    },
    pt: {
      title: "Windows Update diz que não há espaço suficiente: a solução definitiva",
      metaDescription:
        "Se o Windows Update falha com o erro 0x80070070 ou pede mais espaço: quanto é realmente necessário, de onde tirar e qual o papel do armazenamento reservado.",
      subtitle: "De onde tirar os 20 GB",
      intro: [
        "Resposta curta: as atualizações de recursos do Windows 11 precisam de cerca de 20 GB livres no disco do sistema. O caminho mais rápido é Configurações > Sistema > Armazenamento > Arquivos temporários: marcar “Limpeza do Windows Update” e “Instalações anteriores do Windows” costuma recuperar sozinho de 10 a 25 GB. Se não bastar, esvazie a pasta de downloads do SoftwareDistribution e rode uma limpeza do armazenamento de componentes com o DISM.",
        "O código de erro 0x80070070, ou a mensagem de que o Windows precisa de mais espaço para instalar, significa que a atualização nem chegou a começar. A boa notícia é que a causa quase sempre são dados temporários: pacotes de atualização antigos, a instalação anterior do Windows e downloads pela metade. Neste guia você vê em que ordem liberar espaço, quanto cada etapa costuma render e o que mudar para que isso não volte a acontecer.",
      ],
      keyTakeaways: [
        "As atualizações de recursos do Windows 11 exigem cerca de 20 GB livres no disco do sistema.",
        "O maior ganho isolado costuma vir de “Limpeza do Windows Update” e “Instalações anteriores do Windows”: juntas, de 10 a 25 GB.",
        "A pasta SoftwareDistribution\\Download pode ser esvaziada com segurança; o Windows baixa de novo o que ainda precisar.",
        "O DISM /Online /Cleanup-Image /StartComponentCleanup reduz o armazenamento de componentes com segurança, enquanto apagar o WinSxS na mão quebra o sistema.",
        "O armazenamento reservado guarda cerca de 7 GB para as atualizações e pode ser desativado, mas isso apenas adia o problema.",
        "Se o Windows oferecer usar um pen drive externo, funciona — mas precisar dele toda vez significa que o disco do sistema está permanentemente cheio demais.",
      ],
      howTo: {
        name: "Liberar espaço em disco para uma atualização do Windows",
        totalTime: "PT30M",
        steps: [
          {
            name: "Descubra quanto espaço é necessário",
            text: "A mensagem de erro em Configurações > Windows Update costuma informar a quantidade exigida em gigabytes. Se não informar, mire em 20 GB para uma atualização de recursos.",
          },
          {
            name: "Rode a limpeza de arquivos temporários",
            text: "Vá em Configurações > Sistema > Armazenamento > Arquivos temporários. Marque “Limpeza do Windows Update”, “Instalações anteriores do Windows”, “Arquivos de Otimização de Entrega” e “Arquivos temporários” e clique em Remover arquivos.",
          },
          {
            name: "Esvazie a pasta de downloads do Windows Update",
            text: "Em um prompt de comando como administrador, pare os serviços com net stop wuauserv e net stop bits. Apague o conteúdo de C:\\Windows\\SoftwareDistribution\\Download e reinicie os serviços com net start wuauserv e net start bits.",
          },
          {
            name: "Limpe o armazenamento de componentes",
            text: "No mesmo prompt de comando como administrador, execute DISM /Online /Cleanup-Image /StartComponentCleanup. A operação pode levar alguns minutos e remove apenas versões de componentes de fato substituídas.",
          },
          {
            name: "Tire o restante dos arquivos pessoais",
            text: "Se ainda faltar espaço, mova os arquivos pessoais grandes para um disco externo. Arquivos de vídeo, instalações antigas de jogos e a pasta Downloads costumam ser os ganhos mais rápidos.",
          },
          {
            name: "Tente a atualização de novo",
            text: "Volte a Configurações > Windows Update e clique em Verificar se há atualizações. A atualização agora deve baixar e instalar.",
          },
        ],
      },
      sections: [
        {
          title: "Por que uma atualização do Windows pede tanto espaço?",
          content: [
            "Uma atualização de recursos não precisa apenas do tamanho do pacote que baixa. O Windows primeiro baixa o pacote, depois o expande em uma área de trabalho, instala os novos arquivos de sistema e, durante todo esse tempo, guarda a versão anterior para uma eventual volta atrás. Por um período, três cópias convivem no disco.",
            "É por isso que um pacote de atualização de 4 GB pode exigir 20 GB livres. A maior parte é devolvida quando a instalação termina, mas a pasta Windows.old fica por lá mais 10 dias.",
            "As atualizações mensais de segurança são bem mais modestas: normalmente pedem de algumas centenas de megabytes a poucos gigabytes. O erro de “espaço insuficiente” aparece quase sempre nas grandes atualizações de versão, não nas correções de rotina.",
          ],
        },
        {
          title: "O maior ganho: a limpeza do Windows Update",
          content: [
            "Configurações > Sistema > Armazenamento > Arquivos temporários é a tela que quase ninguém abre e, ainda assim, a que guarda o maior ganho isolado. O item “Limpeza do Windows Update” reúne os arquivos de atualização antigos que deixam de ser necessários depois da instalação, e sozinho pode chegar a 5-10 GB.",
            "“Instalações anteriores do Windows” é a pasta Windows.old e costuma ocupar de 15 a 30 GB. Apagá-la significa abrir mão de voltar para a versão anterior do Windows; se a versão atual está rodando bem, dá para marcar sem receio.",
            "Na mesma lista aparecem “Arquivos de Otimização de Entrega” (pedaços de atualização compartilhados com outros PCs) e os clássicos “Arquivos temporários”. Marcar os quatro juntos cobre os 20 GB exigidos na maioria das máquinas.",
          ],
        },
        {
          title: "Limpeza avançada: SoftwareDistribution e DISM",
          content: [
            "É em C:\\Windows\\SoftwareDistribution\\Download que o Windows Update guarda os pacotes que baixa. Tentativas de atualização que falharam ou ficaram pela metade se acumulam ali e, com o tempo, chegam a vários gigabytes. Apagar o conteúdo é seguro; o Windows baixa de novo o que precisar.",
            "A ordem correta começa por parar os serviços: em um prompt de comando como administrador, rode net stop wuauserv e net stop bits, apague o conteúdo da pasta e traga os serviços de volta com net start wuauserv e net start bits. Se apagar sem parar os serviços, os arquivos bloqueados geram erros de arquivo em uso.",
            "A segunda etapa avançada é o armazenamento de componentes. O DISM /Online /Cleanup-Image /StartComponentCleanup remove do WinSxS as versões de componentes substituídas e pode recuperar vários gigabytes. Nunca mexa na pasta WinSxS na mão — esse comando é o único método que faz esse serviço com segurança.",
          ],
        },
        {
          title: "O armazenamento reservado e a oferta do pen drive",
          content: [
            "Desde o Windows 10 versão 2004 existe um recurso chamado armazenamento reservado (Reserved Storage): o Windows separa cerca de 7 GB no disco do sistema para atualizações e arquivos temporários. Sua única finalidade é evitar exatamente esse erro.",
            "Você pode liberar esse espaço com DISM /Online /Set-ReservedStorageState /State:Disabled em um prompt de comando como administrador. Mas cuidado: você recupera 7 GB e, em troca, torna as falhas de atualização mais prováveis. Se o seu disco vive no limite, a solução é liberar espaço de verdade, não remover a folga de segurança.",
            "Se o Windows oferecer conectar um pen drive externo durante a atualização, é um caminho legítimo e um pen drive de 32 GB dá conta. Ainda assim, ter de repetir isso a cada atualização é um sinal claro de que o disco do sistema está permanentemente lotado.",
          ],
        },
        {
          title: "Para que não aconteça de novo",
          content: [
            "Resolver esse erro uma vez compra alguns meses de sossego. A solução duradoura é manter sempre 20 GB livres no disco do sistema. Ativar o Sensor de Armazenamento (Storage Sense) e deixá-lo apagar automaticamente os arquivos temporários e a lixeira é o primeiro passo.",
            "O segundo passo é olhar com regularidade para onde o espaço está indo. A Análise de Disco (Disk Analysis) do Disk Mop desenha a unidade como um treemap, então a pasta que está crescendo fica óbvia; o Limpador de Cache (Cache Cleaner) reúne quase vinte categorias em uma única tela, dos arquivos temporários do Windows aos caches dos navegadores; e a limpeza agendada (Scheduled Cleanup) transforma tudo isso em uma tarefa semanal.",
            "Você pode baixar o Disk Mop gratuitamente e testá-lo com recursos limitados; a versão Pro custa um pagamento único de 19,90 $ e inclui licença vitalícia. Funciona no Windows 10 e 11 (64 bits) e no macOS 12 ou posterior.",
          ],
        },
      ],
      faq: [
        {
          question: "Quanto espaço livre uma atualização do Windows precisa?",
          answer:
            "As atualizações de recursos do Windows 11 exigem cerca de 20 GB livres no disco do sistema. As atualizações mensais de segurança precisam de muito menos, normalmente de algumas centenas de megabytes a poucos gigabytes. Esse espaço é dividido entre o pacote baixado, os arquivos temporários em que ele é expandido e a versão anterior guardada para a volta atrás.",
        },
        {
          question: "O que significa o erro 0x80070070?",
          answer:
            "Esse código indica espaço em disco insuficiente, e a atualização para antes mesmo de começar. A saída é liberar espaço: em Configurações > Sistema > Armazenamento > Arquivos temporários, remova a limpeza do Windows Update e as instalações anteriores do Windows e depois esvazie a pasta de downloads do SoftwareDistribution.",
        },
        {
          question: "É seguro apagar a pasta SoftwareDistribution?",
          answer:
            "Apagar o conteúdo da subpasta Download é seguro; o Windows baixa de novo os pacotes de que ainda precisar. Pare antes os serviços com net stop wuauserv e net stop bits em um prompt de comando como administrador e reinicie-os depois com net start.",
        },
        {
          question: "Devo desativar o armazenamento reservado?",
          answer:
            "Em geral, não. O armazenamento reservado é uma folga de cerca de 7 GB separada para que as atualizações sempre tenham lugar, e existe justamente para evitar esse erro. Dá para desativá-lo com DISM /Online /Set-ReservedStorageState /State:Disabled, mas isso torna as falhas de atualização mais prováveis. Liberar espaço de verdade é a solução melhor.",
        },
        {
          question: "Posso usar um pen drive externo para a atualização?",
          answer:
            "Sim. Quando falta espaço, o Windows oferece usar um armazenamento externo, e um pen drive de 32 GB é suficiente. É uma solução válida, mas temporária; se você precisa dela em toda atualização, o seu disco do sistema está permanentemente cheio demais.",
        },
        {
          question: "Posso apagar a pasta Windows.old depois da atualização?",
          answer:
            "Sim. A Windows.old só serve para voltar à versão anterior dentro de 10 dias, e depois disso é apagada automaticamente. Se a versão nova está rodando bem, remova-a na hora em Configurações > Sistema > Armazenamento > Arquivos temporários marcando “Instalações anteriores do Windows” e recupere de 15 a 30 GB.",
        },
      ],
      verdict: [
        "A correção do “espaço em disco insuficiente” segue uma ordem clara: primeiro remova a limpeza do Windows Update e as instalações anteriores do Windows pela tela de Arquivos temporários, depois esvazie a pasta de downloads do SoftwareDistribution e, se precisar, rode uma limpeza do armazenamento de componentes com o DISM. Essas três etapas cobrem com folga os 20 GB exigidos na maioria das máquinas.",
        "Desativar o armazenamento reservado e recorrer a um pen drive externo funcionam, mas os dois caminhos apenas adiam o problema. Se o seu disco fica no limite em toda atualização, a causa real é a lotação permanente.",
        "A resposta duradoura é manter 20 GB livres no disco do sistema o tempo todo. Ative o Sensor de Armazenamento, coloque a limpeza em uma tarefa agendada e confira de vez em quando para onde o espaço está indo.",
      ],
      ctaText: "Abra espaço antes da próxima atualização",
    },
    ja: {
      title: "Windows Updateで空き容量が足りないときの根本的な解決法",
      metaDescription:
        "Windows Updateが0x80070070で失敗する、または空き容量が足りないと表示されるときに、実際に必要な容量、どこから空けるか、予約済み記憶域の役割、そして再発を防ぐ設定までを解説します。",
      subtitle: "20 GBをどこから捻出するか",
      intro: [
        "短い答えです。Windows 11の機能更新プログラムには、システムドライブに約20 GBの空き容量が必要です。最も手早い方法は「設定」>「システム」>「記憶域」>「一時ファイル」を開き、「Windows Update のクリーンアップ」と「以前のWindowsのインストール」にチェックを入れることで、これだけで10〜25 GBが戻ってくることも珍しくありません。それでも足りない場合は、SoftwareDistribution のダウンロードフォルダーを空にし、DISM でコンポーネント ストアを整理します。",
        "エラーコード 0x80070070、あるいはWindowsのインストールにもっと容量が必要だというメッセージは、更新プログラムがそもそも始まっていないことを意味します。幸いなことに、原因はほとんどの場合が一時的なデータです。古い更新パッケージ、以前のWindowsのインストール、そして途中で止まったダウンロードがその正体です。この記事では、どの順番で容量を空けるか、それぞれの手順でどのくらい戻るか、そして二度と同じことが起きないように何を変えるべきかを順に説明します。",
      ],
      keyTakeaways: [
        "Windows 11の機能更新プログラムには、システムドライブに約20 GBの空き容量が必要です。",
        "最も大きく効くのは「Windows Update のクリーンアップ」と「以前のWindowsのインストール」で、合わせて10〜25 GBになります。",
        "SoftwareDistribution\\Download フォルダーは安全に空にできます。必要なパッケージはWindowsが再びダウンロードします。",
        "DISM /Online /Cleanup-Image /StartComponentCleanup はコンポーネント ストアを安全に縮小しますが、WinSxS を手作業で削除するとシステムが壊れます。",
        "予約済み記憶域は更新用に約7 GBを確保するもので、無効化もできますが、それでは問題を先送りするだけです。",
        "Windowsが外付けUSBメモリの使用を提案してきた場合はそれで進められますが、毎回必要になるならシステムドライブが恒常的に詰まっている証拠です。",
      ],
      howTo: {
        name: "Windows Updateのためにディスクの空き容量を確保する",
        totalTime: "PT30M",
        steps: [
          {
            name: "必要な容量を確認する",
            text: "「設定」>「Windows Update」に表示されるエラーメッセージには、必要な容量がギガバイト単位で書かれていることがほとんどです。書かれていない場合は、機能更新プログラム向けに20 GBを目安にしてください。",
          },
          {
            name: "一時ファイルのクリーンアップを実行する",
            text: "「設定」>「システム」>「記憶域」>「一時ファイル」を開きます。「Windows Update のクリーンアップ」「以前のWindowsのインストール」「配信の最適化ファイル」「一時ファイル」にチェックを入れ、「ファイルの削除」をクリックします。",
          },
          {
            name: "Windows Updateのダウンロードフォルダーを空にする",
            text: "管理者としてコマンド プロンプトを開き、net stop wuauserv と net stop bits でサービスを停止します。C:\\Windows\\SoftwareDistribution\\Download の中身を削除したら、net start wuauserv と net start bits でサービスを再開してください。",
          },
          {
            name: "コンポーネント ストアを整理する",
            text: "同じ管理者のコマンド プロンプトで DISM /Online /Cleanup-Image /StartComponentCleanup を実行します。処理には数分かかることがありますが、本当に不要になった古いコンポーネントのバージョンだけが削除されます。",
          },
          {
            name: "残りを個人用ファイルから確保する",
            text: "それでも足りないときは、大きな個人用ファイルを外付けドライブへ移します。動画のアーカイブ、遊ばなくなったゲームのインストール、ダウンロードフォルダーが、最も手早く容量を稼げる場所です。",
          },
          {
            name: "更新プログラムを再実行する",
            text: "「設定」>「Windows Update」に戻り、「更新プログラムのチェック」をクリックします。これでダウンロードとインストールが始まるはずです。",
          },
        ],
      },
      sections: [
        {
          title: "Windows Updateはなぜこれほど容量を要求するのか",
          content: [
            "機能更新プログラムに必要なのは、ダウンロードするパッケージの分だけではありません。Windowsはまずパッケージをダウンロードし、それを作業用の領域に展開し、新しいシステムファイルを配置します。その間ずっと、元に戻せるように以前のバージョンも保持しています。つまり、しばらくのあいだ3つのコピーがディスク上に同居することになります。",
            "4 GBの更新パッケージが20 GBの空き容量を要求するのは、このためです。インストールが完了すればその大半は解放されますが、Windows.old フォルダーだけは10日間残り続けます。",
            "毎月の品質更新プログラムははるかに控えめで、必要な容量は数百メガバイトから数ギガバイト程度です。「空き容量が足りません」というエラーは、定例の修正プログラムではなく、大きなバージョン更新のときにほぼ必ず現れます。",
          ],
        },
        {
          title: "最も効く一手：Windows Update のクリーンアップ",
          content: [
            "「設定」>「システム」>「記憶域」>「一時ファイル」は、多くの人が一度も開かない画面ですが、最も大きな一手が眠っている場所でもあります。「Windows Update のクリーンアップ」の項目には、インストール後には不要になった古い更新ファイルが含まれており、これだけで5〜10 GBに達することがあります。",
            "「以前のWindowsのインストール」は Windows.old フォルダーのことで、通常15〜30 GBを占めます。これを削除すると以前のWindowsバージョンへ戻す権利は失われますが、現在のバージョンが問題なく動いているなら、安心してチェックを入れて構いません。",
            "同じ一覧には「配信の最適化ファイル」（ほかのPCと共有する更新プログラムの断片）と、おなじみの「一時ファイル」も並んでいます。この4つをまとめてチェックすれば、たいていのパソコンでは必要な20 GBをそっくり賄えます。",
          ],
        },
        {
          title: "一歩進んだ整理：SoftwareDistribution と DISM",
          content: [
            "C:\\Windows\\SoftwareDistribution\\Download は、Windows Updateがダウンロードしたパッケージを保管している場所です。失敗した更新や途中で止まった更新の残骸がここにたまり、時間とともに数ギガバイトにまで膨らみます。中身を削除しても安全です。必要なパッケージはWindowsが改めてダウンロードします。",
            "正しい手順は、まずサービスを停止することです。管理者としてコマンド プロンプトを開いて net stop wuauserv と net stop bits を実行し、フォルダーの中身を削除してから、net start wuauserv と net start bits でサービスを戻します。停止せずに削除しようとすると、使用中のファイルでエラーになります。",
            "もう1つの一歩進んだ手順が、コンポーネント ストアです。DISM /Online /Cleanup-Image /StartComponentCleanup を実行すると、WinSxS の中で使われなくなった古いコンポーネントのバージョンが取り除かれ、数ギガバイトを取り戻せることがあります。WinSxS フォルダーには決して手作業で触らないでください。この作業を安全に行える方法は、このコマンドだけです。",
          ],
        },
        {
          title: "予約済み記憶域と外付けUSBの提案",
          content: [
            "Windows 10 バージョン 2004 以降には、予約済み記憶域（Reserved Storage）という仕組みがあります。Windowsが更新プログラムと一時ファイルのために、システムドライブに約7 GBをあらかじめ確保しておくというものです。その目的は、まさにこのエラーを防ぐことにあります。",
            "この領域は、管理者としてコマンド プロンプトで DISM /Online /Set-ReservedStorageState /State:Disabled を実行すれば解放できます。ただし注意が必要です。7 GBは戻りますが、その分だけ今後の更新が失敗しやすくなります。ドライブが常にぎりぎりの状態なら、緩衝材を外すのではなく、本当の意味で容量を空けるほうが正しい解決です。",
            "更新の途中でWindowsが外付けUSBメモリの接続を提案してきた場合、それは正規の方法であり、32 GBのメモリがあれば足ります。とはいえ、更新のたびに同じことを繰り返さなければならないなら、システムドライブが恒常的に容量不足だというはっきりした合図です。",
          ],
        },
        {
          title: "二度と繰り返さないために",
          content: [
            "このエラーを一度解決しても、もつのは数か月です。長続きする対策は、システムドライブに20 GBの余裕を常に確保しておくことです。まずはストレージ センサー（Storage Sense）をオンにして、一時ファイルとごみ箱を自動的に整理させることから始めましょう。",
            "次の一手は、容量がどこへ消えているのかを定期的に見ることです。Disk Mopのディスク分析（Disk Analysis）はドライブをツリーマップとして描くため、膨らみつつあるフォルダーがひと目で分かります。キャッシュ クリーナー（Cache Cleaner）はWindowsの一時ファイルからブラウザーのキャッシュまで、20近いカテゴリーを1つの画面にまとめます。スケジュール クリーンアップ（Scheduled Cleanup）を使えば、これらをまとめて毎週のタスクにできます。",
            "Disk Mopは無料でダウンロードでき、機能を限定した状態で試せます。Pro版は19.90ドルの買い切りで、永続ライセンスが付属します。動作環境はWindows 10および11（64ビット）と、macOS 12以降です。",
          ],
        },
      ],
      faq: [
        {
          question: "Windows Updateにはどれくらいの空き容量が必要ですか？",
          answer:
            "Windows 11の機能更新プログラムには、システムドライブに約20 GBの空き容量が必要です。毎月の品質更新プログラムはもっと少なく、数百メガバイトから数ギガバイト程度で済みます。必要な容量は、ダウンロードしたパッケージ、それを展開した一時ファイル、そして元に戻すために保持される以前のバージョンで分け合う形になります。",
        },
        {
          question: "エラー 0x80070070 は何を意味しますか？",
          answer:
            "このコードはディスクの空き容量が足りないことを示し、更新プログラムは始まる前に止まります。解決策は容量を空けることです。「設定」>「システム」>「記憶域」>「一時ファイル」から「Windows Update のクリーンアップ」と「以前のWindowsのインストール」を削除し、続けて SoftwareDistribution のダウンロードフォルダーを空にしてください。",
        },
        {
          question: "SoftwareDistribution フォルダーは削除しても安全ですか？",
          answer:
            "その下にある Download サブフォルダーの中身を削除するのは安全です。まだ必要なパッケージはWindowsが再びダウンロードします。先に管理者としてコマンド プロンプトで net stop wuauserv と net stop bits を実行してサービスを停止し、削除が終わったら net start で同じサービスを再開してください。",
        },
        {
          question: "予約済み記憶域は無効にすべきですか？",
          answer:
            "たいていの場合は無効にしないほうがよいでしょう。予約済み記憶域は、更新プログラムが必ず置き場所を確保できるようにするための約7 GBの緩衝材で、まさにこのエラーを防ぐために存在します。DISM /Online /Set-ReservedStorageState /State:Disabled で無効にできますが、更新の失敗が起きやすくなります。実際に容量を空けるほうがよい解決です。",
        },
        {
          question: "更新に外付けUSBメモリを使えますか？",
          answer:
            "使えます。空き容量が足りないとき、Windowsは外付けストレージの使用を提案し、32 GBのUSBメモリがあれば十分です。有効な方法ではありますが、あくまで一時しのぎです。毎回の更新で必要になるなら、システムドライブが恒常的に詰まりすぎています。",
        },
        {
          question: "更新後に Windows.old フォルダーを削除できますか？",
          answer:
            "できます。Windows.old は更新から10日以内に以前のバージョンへ戻すためだけのもので、10日を過ぎれば自動的に削除されます。新しいバージョンが問題なく動いているなら、「設定」>「システム」>「記憶域」>「一時ファイル」で「以前のWindowsのインストール」にチェックを入れてすぐに削除し、15〜30 GBを取り戻せます。",
        },
      ],
      verdict: [
        "「空き容量が足りません」の解決には順番があります。まず「一時ファイル」の画面から「Windows Update のクリーンアップ」と「以前のWindowsのインストール」を削除し、次に SoftwareDistribution のダウンロードフォルダーを空にし、必要なら DISM でコンポーネント ストアを整理します。この3つの手順で、たいていのパソコンでは必要な20 GBを十分に上回る余裕が生まれます。",
        "予約済み記憶域を無効にすることも、外付けUSBメモリを使うことも確かに効果はありますが、どちらも問題の先送りにすぎません。更新のたびにドライブがぎりぎりになるなら、本当の問題は恒常的な容量不足です。",
        "長続きする答えは、システムドライブに常に20 GBの余裕を保つことです。ストレージ センサーをオンにし、クリーンアップをスケジュール化し、容量がどこへ消えているかを折に触れて確認しましょう。",
      ],
      ctaText: "次の更新の前に空き容量を確保する",
    },
  },
};
