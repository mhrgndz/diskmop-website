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
  },
};
