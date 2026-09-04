import type { Article } from '../types';

export const windowsSlowAfterUpdate: Article = {
  slug: 'windows-slow-after-update',
  type: 'guide',
  category: 'Performance',
  date: '2026-09-04',
  updated: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'Windows Güncellemesinden Sonra Bilgisayar Yavaşladı: Sebepleri ve Çözümü',
      metaDescription:
        'Büyük bir Windows güncellemesinden sonraki yavaşlığın çoğu 24-48 saatte kendiliğinden geçer. Hangi süreç normal, hangisi müdahale ister ve bir hafta sonra hâlâ yavaşsa ne yapmalı?',
      subtitle: 'İlk İki Gün Sabır, Sonrası Müdahale',
      intro: [
        'Kısa cevap: Büyük bir Windows güncellemesinden sonraki yavaşlık çoğu zaman geçicidir ve 24-48 saat içinde kendiliğinden düzelir. Sebebi arka planda tamamlanmayı bekleyen üç iştir: arama indeksinin yeniden oluşturulması, bileşen deposunun temizlenmesi (`TiWorker.exe`) ve güncelleme dosyalarının diğer bilgisayarlara dağıtılması. Bunlar bittiğinde makine eski hızına döner. Ancak iki durum kendiliğinden düzelmez ve müdahale ister: güncellemenin ekran kartı veya yonga seti sürücüsünü Microsoft\'un genel sürücüsüyle değiştirmesi, ve `Windows.old` klasörünün diski doldurarak SSD\'yi yavaşlatması. Bir hafta sonra hâlâ yavaşsa sebep güncellemenin oturması değil, bu ikisinden biridir.',
        'Bu rehberde önce neyin normal olduğunu, sonra Görev Yöneticisi\'nde gördüğünüz sürecin ne anlama geldiğini, en son da bir hafta geçtiği hâlde düzelmeyen durumlarda ne yapılacağını anlatıyoruz.',
      ],
      keyTakeaways: [
        'Büyük güncelleme sonrası yavaşlığın çoğu 24-48 saatte kendiliğinden geçer; arama indeksi ve bileşen temizliği arka planda tamamlanıyordur.',
        'Görev Yöneticisi\'nde `TiWorker.exe` veya `MoUsoCoreWorker.exe` görüyorsanız güncelleme işini henüz bitirmemiştir — bu normaldir.',
        'Güncelleme bazen ekran kartı ve yonga seti sürücüsünü Microsoft\'un genel sürücüsüyle değiştirir; bu kendiliğinden düzelmez, üreticinin sürücüsü yeniden kurulmalıdır.',
        '`Windows.old` klasörü 10-30 GB tutar ve diski doldurarak SSD yazma hızını düşürür; sistem kararlıysa 10 gün içinde silinebilir.',
        'Teslim İyileştirmesi (Delivery Optimization) güncelleme dosyalarını başka bilgisayarlara yükler; kapatmak ağ ve disk yükünü azaltır.',
        'Bir hafta sonra hâlâ yavaşsa sebep güncellemenin oturması değildir; sürücü, başlangıç programları veya disk doluluğu araştırılmalıdır.',
      ],
      dataTable: {
        caption: 'Güncelleme sonrası: neyi bekleyin, neye müdahale edin',
        columns: ['Belirti', 'Ne kadar sürer', 'Normal mi?', 'Ne yapmalı'],
        rows: [
          ['`TiWorker.exe` diski meşgul ediyor', '2-24 saat', 'Evet', 'Bekleyin, makineyi açık bırakın'],
          ['`SearchIndexer.exe` sürekli çalışıyor', '4-48 saat', 'Evet', 'Bekleyin; haftalarca sürüyorsa indeksi yeniden oluşturun'],
          ['Oyunlarda ve videoda takılma', 'Kalıcı', 'Hayır', 'Ekran kartı sürücüsünü üreticiden yeniden kurun'],
          ['Disk %90 üzeri dolu', 'Kalıcı', 'Hayır', '`Windows.old` klasörünü kaldırın'],
          ['Açılış eskisinden yavaş', 'Kalıcı', 'Hayır', 'Başlangıç programlarını gözden geçirin'],
          ['Yükleme hızı yüksek, indirme yokken', 'Değişken', 'Kısmen', 'Teslim İyileştirmesi\'ni kapatın'],
        ],
      },
      howTo: {
        name: 'Güncelleme sonrası yavaşlığı giderme',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Önce 24-48 saat verin',
            text: 'Makineyi açık ve boşta bırakın. Arama indeksi ve bileşen temizliği ancak boşta zamanda ilerler; sürekli kapatıp açarsanız bu işler hiç bitmez ve yavaşlık uzar.',
          },
          {
            name: 'Hangi sürecin çalıştığına bakın',
            text: 'Görev Yöneticisi > Ayrıntılar sekmesini açıp Disk sütununa göre sıralayın. `TiWorker.exe`, `MoUsoCoreWorker.exe` veya `SearchIndexer.exe` üstteyse güncelleme henüz oturmamıştır ve beklemek doğru olandır.',
          },
          {
            name: 'Ekran kartı ve yonga seti sürücüsünü yenileyin',
            text: 'Oyun, video veya arayüz akıcılığında kayıp varsa sürücü değişmiş olabilir. Ekran kartı üreticisinin sitesinden güncel sürücüyü indirip kurun; Aygıt Yöneticisi\'nde "Microsoft Temel Görüntü Bağdaştırıcısı" yazıyorsa sorun kesinleşmiştir.',
          },
          {
            name: 'Windows.old klasörünü kaldırın',
            text: 'Sistem birkaç gündür kararlıysa Ayarlar > Sistem > Depolama > Geçici dosyalar yolundan "Önceki Windows kurulumu" seçeneğini işaretleyip kaldırın. Bu genellikle 10-30 GB açar.',
          },
          {
            name: 'Teslim İyileştirmesi\'ni kısın',
            text: 'Ayarlar > Windows Update > Gelişmiş seçenekler > Teslim İyileştirmesi yolunda "Diğer bilgisayarlardan indirmelere izin ver" seçeneğini kapatın. Bu, makinenizin başkalarına güncelleme yüklemesini durdurur.',
          },
        ],
      },
      sections: [
        {
          title: 'Güncelleme Sonrası Yavaşlık Normal mi, Ne Kadar Sürer?',
          content: [
            'Büyük bir Windows güncellemesi yalnızca dosyaları değiştirmez; kurulum bittikten sonra da günlerce süren bir dizi arka plan işi başlatır. En büyük üçü şunlardır: arama indeksinin sıfırdan yeniden oluşturulması, bileşen deposundaki eski sürümlerin temizlenmesi ve yeni güncelleme dosyalarının ağdaki diğer bilgisayarlara dağıtılması.',
            'Bu işler bilinçli olarak düşük öncelikte çalışır ve yalnızca makine boştayken ilerler. Tipik bir bilgisayarda 24-48 saatte tamamlanır. Ancak günde birkaç saat kullanılıp kapatılan bir dizüstü bilgisayarda aynı işler bir haftaya yayılabilir; bu yüzden "güncellemeden sonra bilgisayar bir hafta yavaştı" deneyimi çok yaygındır.',
            'Bu süreçte makineyi açık ve boşta bırakmak en hızlı çözümdür. Sürekli kapatıp açmak veya hemen ağır işlere girişmek bu işleri erteler ve yavaşlığın süresini uzatır. Yani ilk iki günün doğru cevabı bir ayar değil, sabırdır.',
          ],
        },
        {
          title: 'Görev Yöneticisi\'nde Gördüğünüz Süreç Ne Anlama Geliyor?',
          content: [
            'Görev Yöneticisi > Ayrıntılar sekmesini açıp Disk sütununa göre sıralayın. Üstte göreceğiniz isimler size ne olduğunu doğrudan söyler. `TiWorker.exe` (Windows Modules Installer Worker) bileşen bakımını yapar; güncelleme sonrası saatlerce yüksek disk kullanması normaldir ve bittiğinde kendiliğinden durur.',
            '`MoUsoCoreWorker.exe` güncelleme oturumunu yöneten süreçtir; hâlâ çalışıyorsa güncelleme zinciri tamamlanmamıştır. `SearchIndexer.exe` arama indeksini yeniden kuruyordur. Bu üçü de bekleme gerektiren, müdahale istemeyen isimlerdir.',
            'Buna karşılık `System` süreci veya bir güvenlik yazılımı sürekli tepedeyse durum farklıdır: güncelleme sonrası tam tarama başlatılmış olabilir. Antivirüsün tarama geçmişine bakmak bunu doğrular. Tarama bittiğinde yük düşer; düşmüyorsa sorun taramada değildir.',
          ],
        },
        {
          title: 'Sürücüler: Güncellemenin Sessizce Geri Aldığı Şey',
          content: [
            'Kendiliğinden düzelmeyen en yaygın sorun budur. Büyük güncellemeler bazen üreticinin kurduğu ekran kartı, yonga seti veya ses sürücüsünü Microsoft\'un genel sürümüyle değiştirir. Sistem çalışır ama performans düşer: oyunlarda kare hızı düşer, video oynatma takılır, hatta arayüz animasyonları akıcılığını kaybeder.',
            'Kontrolü kolaydır. Aygıt Yöneticisi\'ni açın ve Görüntü bağdaştırıcıları başlığına bakın. "Microsoft Temel Görüntü Bağdaştırıcısı" yazıyorsa gerçek sürücü gitmiştir. Ekran kartınızın üreticisinden güncel sürücüyü indirip kurmak sorunu tamamen çözer.',
            'Aynı kontrolü yonga seti için de yapın. Anakart üreticisinin sitesindeki yonga seti sürücü paketi, güncellemenin bozduğu güç yönetimi ve depolama denetleyicisi ayarlarını geri getirir. Özellikle dizüstü bilgisayarlarda güncelleme sonrası pil ömrü kısaldıysa sebep genellikle budur.',
          ],
        },
        {
          title: 'Bir Hafta Sonra Hâlâ Yavaşsa',
          content: [
            'Bir hafta geçtiği hâlde düzelme yoksa artık "güncelleme oturuyor" açıklaması geçerli değildir ve üç yere bakmak gerekir. Birincisi disk doluluğudur. Güncelleme `Windows.old` klasörünü bırakır ve bu 10-30 GB tutar; disk zaten doluysa toplam doluluk %90\'ı geçer ve SSD yazma hızı belirgin biçimde düşer. Sistem kararlıysa Ayarlar > Sistem > Depolama üzerinden bu klasörü kaldırın.',
            'İkincisi başlangıç programlarıdır. Bazı güncellemeler daha önce devre dışı bıraktığınız başlangıç öğelerini yeniden etkinleştirir. Görev Yöneticisi > Başlangıç uygulamaları sekmesini açıp listeyi gözden geçirin; beklemediğiniz girdileri tekrar kapatın.',
            'Üçüncüsü arama indeksinin bozulmasıdır. `SearchIndexer.exe` haftalardır çalışıyor ama arama hâlâ sonuç vermiyorsa indeks tutarsızdır ve elle yeniden oluşturulması gerekir. Bu üçünü kontrol ettikten sonra hâlâ yavaşlık varsa sorun güncellemeyle ilgili değildir; disk sağlığı, bellek yetersizliği veya arka planda çalışan başka bir yazılım araştırılmalıdır.',
          ],
        },
      ],
      faq: [
        {
          question: 'Güncellemeyi geri almak yavaşlığı çözer mi?',
          answer:
            'Nadiren. Geri alma penceresi genellikle 10 gündür ve geri almak arka planda tamamlanmayı bekleyen işleri yeniden başlatır, yani kısa vadede daha da yavaşlatır. Sürücü kaynaklı bir sorun varsa da geri alma değil, doğru sürücüyü kurmak çözer.',
        },
        {
          question: 'Windows.old klasörünü silmek güvenli mi?',
          answer:
            'Sistem birkaç gündür sorunsuz çalışıyorsa evet. Bu klasör önceki Windows sürümüne dönebilmeniz için tutulur ve Windows onu zaten 10 gün sonra otomatik siler. Sildikten sonra artık eski sürüme geri dönemeyeceğinizi unutmayın.',
        },
        {
          question: 'DISM ile bileşen deposunu temizlemeli miyim?',
          answer:
            'Sistem kararlı hâle geldikten sonra `DISM /Online /Cleanup-Image /StartComponentCleanup` yer kazandırır. `/ResetBase` parametresini eklerseniz daha fazla yer açılır ama yüklü güncellemeleri artık kaldıramazsınız; bunu yalnızca her şeyin düzgün çalıştığından eminken kullanın.',
        },
        {
          question: 'Her güncellemede aynı şey olacak mı?',
          answer:
            'Aylık güvenlik güncellemeleri bu etkiyi genellikle yaratmaz. Uzun süren yavaşlık büyük sürüm güncellemelerine özgüdür ve yılda bir ya da iki kez yaşanır.',
        },
      ],
      verdict: [
        'Güncelleme sonrası yavaşlığın büyük kısmı gerçek bir arıza değil, arka planda tamamlanmayı bekleyen işlerdir; makineyi 24-48 saat açık ve boşta bırakmak çoğu durumda yeterlidir. Kendiliğinden düzelmeyen iki şey vardır: değiştirilmiş sürücüler ve `Windows.old` yüzünden dolan disk.',
        'İkinci maddeyi çözerken diskte başka nelerin biriktiğini de görmek mantıklıdır. Disk Mop\'un Disk Analizi modülü sistem klasörleri dâhil sürücüyü boyut sırasına dizer, Başlangıç Yöneticisi güncellemenin yeniden etkinleştirdiği başlangıç öğelerini gösterir, Disk Sağlığı modülü de sürücünün gerçekten yıpranıp yıpranmadığını söyler.',
      ],
      ctaText: 'Güncelleme sonrası diskte ne birikti, görün',
    },
    en: {
      title: 'PC Slow After a Windows Update: Causes and Fixes',
      metaDescription:
        'Most slowdowns after a major Windows update clear on their own within 24-48 hours. Which process is normal, which needs action, and what to do if it is still slow a week later.',
      subtitle: 'Patience for Two Days, Then Intervention',
      intro: [
        'Short answer: slowness after a major Windows update is usually temporary and clears on its own within 24-48 hours. The cause is three background jobs waiting to finish: the search index being rebuilt, the component store being cleaned (`TiWorker.exe`), and update files being shared out to other computers. Once those complete, the machine returns to its old speed. Two situations, however, do not fix themselves and need action: the update replacing your graphics or chipset driver with Microsoft\'s generic one, and the `Windows.old` folder filling the disk and slowing the SSD. If it is still slow a week later, the cause is not the update settling but one of those two.',
        'This guide covers what is normal first, then what the process you see in Task Manager actually means, and finally what to do when a week has passed and nothing has improved.',
      ],
      keyTakeaways: [
        'Most post-update slowness clears within 24-48 hours; the search index and component cleanup are finishing in the background.',
        'If you see `TiWorker.exe` or `MoUsoCoreWorker.exe` in Task Manager, the update has not finished its work — that is normal.',
        'Updates sometimes replace graphics and chipset drivers with Microsoft\'s generic versions; that does not fix itself and the vendor driver must be reinstalled.',
        'The `Windows.old` folder holds 10-30 GB and slows SSD writes by filling the disk; it can be removed within 10 days once the system is stable.',
        'Delivery Optimization uploads update files to other computers; turning it off reduces network and disk load.',
        'If it is still slow after a week, the update settling is not the cause; look at drivers, startup programs and disk fullness.',
      ],
      dataTable: {
        caption: 'After an update: what to wait out and what to act on',
        columns: ['Symptom', 'How long', 'Normal?', 'What to do'],
        rows: [
          ['`TiWorker.exe` keeping the disk busy', '2-24 hours', 'Yes', 'Wait, leave the machine on'],
          ['`SearchIndexer.exe` running constantly', '4-48 hours', 'Yes', 'Wait; rebuild the index if it lasts weeks'],
          ['Stutter in games and video', 'Permanent', 'No', 'Reinstall the graphics driver from the vendor'],
          ['Disk over 90% full', 'Permanent', 'No', 'Remove the `Windows.old` folder'],
          ['Boot slower than before', 'Permanent', 'No', 'Review startup programs'],
          ['High upload with nothing downloading', 'Variable', 'Partly', 'Turn off Delivery Optimization'],
        ],
      },
      howTo: {
        name: 'Fix a slowdown after a Windows update',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Give it 24-48 hours first',
            text: 'Leave the machine on and idle. The search index and component cleanup only make progress while idle; shutting down repeatedly means those jobs never finish and the slowness drags on.',
          },
          {
            name: 'See which process is running',
            text: 'Open Task Manager > Details and sort by the Disk column. If `TiWorker.exe`, `MoUsoCoreWorker.exe` or `SearchIndexer.exe` is at the top, the update has not settled yet and waiting is the correct response.',
          },
          {
            name: 'Refresh graphics and chipset drivers',
            text: 'If games, video or interface smoothness got worse, a driver may have been swapped. Download the current driver from your graphics card vendor and install it; if Device Manager says "Microsoft Basic Display Adapter", that confirms the problem.',
          },
          {
            name: 'Remove the Windows.old folder',
            text: 'Once the system has been stable for a few days, go to Settings > System > Storage > Temporary files, tick "Previous Windows installation" and remove it. That usually frees 10-30 GB.',
          },
          {
            name: 'Reduce Delivery Optimization',
            text: 'Under Settings > Windows Update > Advanced options > Delivery Optimization, turn off "Allow downloads from other PCs". That stops your machine uploading updates to other people.',
          },
        ],
      },
      sections: [
        {
          title: 'Is Post-Update Slowness Normal, and How Long Does It Last?',
          content: [
            'A major Windows update does not just replace files; once setup finishes it starts a set of background jobs that run for days. The three biggest are rebuilding the search index from scratch, cleaning superseded versions out of the component store, and distributing the new update files to other computers on the network.',
            'These jobs deliberately run at low priority and only progress while the machine is idle. On a typical computer they finish within 24-48 hours. But on a laptop used a few hours a day and then shut down, the same work can stretch across a week — which is why "my computer was slow for a week after the update" is such a common experience.',
            'Leaving the machine on and idle is the fastest fix during this period. Repeatedly shutting down, or immediately starting heavy work, postpones these jobs and extends the slowness. So the right answer for the first two days is not a setting but patience.',
          ],
        },
        {
          title: 'What Does the Process in Task Manager Mean?',
          content: [
            'Open Task Manager > Details and sort by the Disk column. The names at the top tell you directly what is happening. `TiWorker.exe` (Windows Modules Installer Worker) performs component servicing; high disk usage for hours after an update is normal and it stops on its own when done.',
            '`MoUsoCoreWorker.exe` is the process managing the update session; if it is still running, the update chain has not completed. `SearchIndexer.exe` is rebuilding the search index. All three are names that call for waiting, not intervention.',
            'By contrast, if the `System` process or a security product sits permanently at the top, the situation is different: a full scan may have been triggered after the update. Checking your antivirus scan history confirms it. Load drops when the scan finishes; if it does not, the scan is not the problem.',
          ],
        },
        {
          title: 'Drivers: What the Update Quietly Rolled Back',
          content: [
            'This is the most common problem that does not fix itself. Major updates sometimes replace the vendor-installed graphics, chipset or audio driver with Microsoft\'s generic version. The system still works but performance drops: frame rates fall in games, video playback stutters, and even interface animations lose their smoothness.',
            'Checking is easy. Open Device Manager and look under Display adapters. If it says "Microsoft Basic Display Adapter", the real driver is gone. Downloading and installing the current driver from your graphics card vendor resolves it completely.',
            'Do the same check for the chipset. The chipset driver package from your motherboard vendor restores the power management and storage controller settings the update disturbed. On laptops in particular, if battery life shortened after an update, this is usually why.',
          ],
        },
        {
          title: 'If It Is Still Slow After a Week',
          content: [
            'Once a week has passed with no improvement, "the update is settling" no longer explains it, and there are three places to look. The first is disk fullness. The update leaves a `Windows.old` folder holding 10-30 GB; if the disk was already tight, total usage passes 90% and SSD write speed drops noticeably. Once the system is stable, remove that folder via Settings > System > Storage.',
            'The second is startup programs. Some updates re-enable startup items you had previously disabled. Open Task Manager > Startup apps and review the list; switch off anything you did not expect to see.',
            'The third is a corrupted search index. If `SearchIndexer.exe` has been running for weeks and search still returns nothing, the index is inconsistent and needs a manual rebuild. If slowness persists after checking all three, it is not update-related; look into drive health, insufficient memory, or other software running in the background.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does rolling the update back fix the slowness?',
          answer:
            'Rarely. The rollback window is usually 10 days, and rolling back restarts the same background jobs, making things slower in the short term. If a driver is the cause, installing the correct driver — not rolling back — is the fix.',
        },
        {
          question: 'Is it safe to delete the Windows.old folder?',
          answer:
            'Yes, if the system has run without problems for a few days. That folder exists so you can return to the previous Windows version, and Windows deletes it automatically after 10 days anyway. Note that once removed, you can no longer roll back.',
        },
        {
          question: 'Should I clean the component store with DISM?',
          answer:
            'Once the system is stable, `DISM /Online /Cleanup-Image /StartComponentCleanup` frees space. Adding `/ResetBase` frees more but means you can no longer uninstall installed updates; use it only when you are confident everything works.',
        },
        {
          question: 'Will this happen with every update?',
          answer:
            'Monthly security updates usually do not produce this effect. Prolonged slowness is specific to major feature updates, which arrive once or twice a year.',
        },
      ],
      verdict: [
        'Most post-update slowness is not a fault but background work waiting to finish; leaving the machine on and idle for 24-48 hours is enough in most cases. Two things do not fix themselves: swapped drivers, and a disk filled by `Windows.old`.',
        'While addressing the second, it makes sense to see what else has piled up. Disk Mop\'s Disk Analysis module sorts the drive by size including system folders, the Startup Manager shows the startup items the update re-enabled, and the Disk Health module tells you whether the drive itself is genuinely worn.',
      ],
      ctaText: 'See what piled up on your disk after the update',
    },
    de: {
      title: 'PC nach Windows-Update langsam: Ursachen und Lösungen',
      metaDescription:
        'Die meisten Verlangsamungen nach einem großen Windows-Update verschwinden binnen 24-48 Stunden von selbst. Welcher Prozess normal ist, welcher Eingriff verlangt und was nach einer Woche zu tun ist.',
      subtitle: 'Zwei Tage Geduld, danach eingreifen',
      intro: [
        'Kurze Antwort: Langsamkeit nach einem großen Windows-Update ist meist vorübergehend und legt sich binnen 24-48 Stunden von selbst. Ursache sind drei Hintergrundaufgaben, die noch abgeschlossen werden müssen: der Neuaufbau des Suchindex, das Bereinigen des Komponentenspeichers (`TiWorker.exe`) und die Weitergabe der Updatedateien an andere Rechner. Sind sie erledigt, kehrt die alte Geschwindigkeit zurück. Zwei Situationen beheben sich jedoch nicht von selbst: wenn das Update den Grafik- oder Chipsatztreiber durch Microsofts generische Version ersetzt hat, und wenn der Ordner `Windows.old` die Platte füllt und damit die SSD bremst. Ist der Rechner nach einer Woche noch langsam, liegt es nicht am Update, sondern an einem dieser beiden Punkte.',
        'Dieser Leitfaden erklärt zuerst, was normal ist, dann was der Prozess im Task-Manager tatsächlich bedeutet, und schließlich, was zu tun ist, wenn nach einer Woche nichts besser wurde.',
      ],
      keyTakeaways: [
        'Die meiste Langsamkeit nach dem Update verschwindet binnen 24-48 Stunden; Suchindex und Komponentenbereinigung laufen im Hintergrund noch.',
        'Sehen Sie `TiWorker.exe` oder `MoUsoCoreWorker.exe` im Task-Manager, hat das Update seine Arbeit noch nicht beendet — das ist normal.',
        'Updates ersetzen manchmal Grafik- und Chipsatztreiber durch Microsofts generische Versionen; das behebt sich nicht von selbst, der Herstellertreiber muss neu installiert werden.',
        'Der Ordner `Windows.old` fasst 10-30 GB und bremst die SSD, indem er die Platte füllt; bei stabilem System kann er binnen 10 Tagen entfernt werden.',
        'Die Übermittlungsoptimierung lädt Updatedateien zu anderen Rechnern hoch; sie abzuschalten senkt Netz- und Plattenlast.',
        'Ist der Rechner nach einer Woche noch langsam, liegt es nicht am Update; prüfen Sie Treiber, Autostart-Programme und Plattenfüllstand.',
      ],
      dataTable: {
        caption: 'Nach dem Update: abwarten oder handeln',
        columns: ['Symptom', 'Dauer', 'Normal?', 'Was tun'],
        rows: [
          ['`TiWorker.exe` belastet die Platte', '2-24 Stunden', 'Ja', 'Abwarten, Rechner eingeschaltet lassen'],
          ['`SearchIndexer.exe` läuft ständig', '4-48 Stunden', 'Ja', 'Abwarten; bei Wochen den Index neu erstellen'],
          ['Ruckeln in Spielen und Videos', 'Dauerhaft', 'Nein', 'Grafiktreiber vom Hersteller neu installieren'],
          ['Platte über 90 % voll', 'Dauerhaft', 'Nein', 'Ordner `Windows.old` entfernen'],
          ['Start langsamer als vorher', 'Dauerhaft', 'Nein', 'Autostart-Programme prüfen'],
          ['Hoher Upload ohne Download', 'Wechselnd', 'Teilweise', 'Übermittlungsoptimierung abschalten'],
        ],
      },
      howTo: {
        name: 'Verlangsamung nach einem Windows-Update beheben',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Erst 24-48 Stunden Zeit geben',
            text: 'Lassen Sie den Rechner eingeschaltet und im Leerlauf. Suchindex und Komponentenbereinigung kommen nur im Leerlauf voran; wiederholtes Herunterfahren verhindert den Abschluss und verlängert die Langsamkeit.',
          },
          {
            name: 'Nachsehen, welcher Prozess läuft',
            text: 'Öffnen Sie Task-Manager > Details und sortieren Sie nach der Spalte Datenträger. Stehen `TiWorker.exe`, `MoUsoCoreWorker.exe` oder `SearchIndexer.exe` oben, hat sich das Update noch nicht gesetzt und Abwarten ist richtig.',
          },
          {
            name: 'Grafik- und Chipsatztreiber erneuern',
            text: 'Sind Spiele, Video oder die Oberfläche unrunder geworden, wurde womöglich ein Treiber getauscht. Laden Sie den aktuellen Treiber beim Grafikkartenhersteller und installieren Sie ihn; steht im Geräte-Manager "Microsoft Basisanzeigetreiber", ist das Problem bestätigt.',
          },
          {
            name: 'Den Ordner Windows.old entfernen',
            text: 'Läuft das System seit einigen Tagen stabil, gehen Sie zu Einstellungen > System > Speicher > Temporäre Dateien, setzen Sie das Häkchen bei "Vorherige Windows-Installation" und entfernen Sie sie. Das gibt meist 10-30 GB frei.',
          },
          {
            name: 'Übermittlungsoptimierung reduzieren',
            text: 'Schalten Sie unter Einstellungen > Windows Update > Erweiterte Optionen > Übermittlungsoptimierung die Option "Downloads von anderen PCs zulassen" ab. So lädt Ihr Rechner keine Updates mehr zu anderen hoch.',
          },
        ],
      },
      sections: [
        {
          title: 'Ist Langsamkeit nach dem Update normal, und wie lange dauert sie?',
          content: [
            'Ein großes Windows-Update tauscht nicht nur Dateien aus; nach Abschluss des Setups startet es eine Reihe von Hintergrundaufgaben, die tagelang laufen. Die drei größten sind der Neuaufbau des Suchindex von Grund auf, das Entfernen überholter Versionen aus dem Komponentenspeicher und die Verteilung der neuen Updatedateien an andere Rechner im Netz.',
            'Diese Aufgaben laufen bewusst mit niedriger Priorität und kommen nur voran, während der Rechner im Leerlauf ist. Auf einem typischen Gerät sind sie binnen 24-48 Stunden erledigt. Auf einem Notebook, das täglich ein paar Stunden genutzt und dann heruntergefahren wird, kann sich dieselbe Arbeit über eine Woche ziehen — daher ist die Erfahrung "nach dem Update war der Rechner eine Woche langsam" so verbreitet.',
            'Den Rechner in dieser Phase eingeschaltet und im Leerlauf zu lassen ist die schnellste Lösung. Wiederholtes Herunterfahren oder sofortige schwere Arbeit verschiebt diese Aufgaben und verlängert die Langsamkeit. Die richtige Antwort für die ersten beiden Tage ist also keine Einstellung, sondern Geduld.',
          ],
        },
        {
          title: 'Was bedeutet der Prozess im Task-Manager?',
          content: [
            'Öffnen Sie Task-Manager > Details und sortieren Sie nach der Spalte Datenträger. Die Namen ganz oben sagen Ihnen direkt, was los ist. `TiWorker.exe` (Windows Modules Installer Worker) führt die Komponentenwartung durch; stundenlange hohe Plattenlast nach einem Update ist normal, und der Prozess endet von selbst.',
            '`MoUsoCoreWorker.exe` steuert die Updatesitzung; läuft er noch, ist die Updatekette nicht abgeschlossen. `SearchIndexer.exe` baut den Suchindex neu auf. Alle drei Namen bedeuten: abwarten, nicht eingreifen.',
            'Steht dagegen der Prozess `System` oder eine Sicherheitssoftware dauerhaft oben, ist die Lage anders: Nach dem Update wurde womöglich eine vollständige Prüfung gestartet. Der Prüfverlauf des Virenschutzes bestätigt das. Nach Abschluss sinkt die Last; sinkt sie nicht, liegt es nicht an der Prüfung.',
          ],
        },
        {
          title: 'Treiber: Was das Update still zurückgenommen hat',
          content: [
            'Das ist das häufigste Problem, das sich nicht von selbst behebt. Große Updates ersetzen mitunter den vom Hersteller installierten Grafik-, Chipsatz- oder Audiotreiber durch Microsofts generische Version. Das System läuft weiter, aber die Leistung sinkt: Bildraten in Spielen fallen, Videowiedergabe ruckelt, sogar Animationen der Oberfläche verlieren ihre Geschmeidigkeit.',
            'Die Prüfung ist einfach. Öffnen Sie den Geräte-Manager und sehen Sie unter Grafikkarten nach. Steht dort "Microsoft Basisanzeigetreiber", ist der echte Treiber weg. Den aktuellen Treiber beim Grafikkartenhersteller zu laden und zu installieren behebt das vollständig.',
            'Führen Sie dieselbe Prüfung für den Chipsatz durch. Das Chipsatz-Treiberpaket des Mainboardherstellers stellt die vom Update gestörten Einstellungen für Energieverwaltung und Speichercontroller wieder her. Gerade bei Notebooks liegt eine nach dem Update verkürzte Akkulaufzeit meist daran.',
          ],
        },
        {
          title: 'Wenn es nach einer Woche noch langsam ist',
          content: [
            'Ist nach einer Woche keine Besserung eingetreten, erklärt "das Update setzt sich" nichts mehr, und es gibt drei Stellen zu prüfen. Erstens den Füllstand. Das Update hinterlässt den Ordner `Windows.old` mit 10-30 GB; war die Platte ohnehin knapp, übersteigt die Belegung 90 % und die Schreibrate der SSD fällt spürbar. Entfernen Sie den Ordner bei stabilem System über Einstellungen > System > Speicher.',
            'Zweitens die Autostart-Programme. Manche Updates aktivieren zuvor deaktivierte Autostart-Einträge wieder. Öffnen Sie Task-Manager > Autostart-Apps und gehen Sie die Liste durch; schalten Sie alles ab, was Sie dort nicht erwartet haben.',
            'Drittens einen beschädigten Suchindex. Läuft `SearchIndexer.exe` seit Wochen und liefert die Suche trotzdem nichts, ist der Index inkonsistent und muss von Hand neu erstellt werden. Bleibt es nach allen drei Prüfungen langsam, hängt es nicht mit dem Update zusammen; prüfen Sie Laufwerkszustand, zu wenig Arbeitsspeicher oder andere Hintergrundsoftware.',
          ],
        },
      ],
      faq: [
        {
          question: 'Behebt ein Zurücksetzen des Updates die Langsamkeit?',
          answer:
            'Selten. Das Zeitfenster beträgt meist 10 Tage, und ein Rückgängigmachen startet dieselben Hintergrundaufgaben erneut, macht es also kurzfristig langsamer. Liegt es an einem Treiber, hilft nicht das Zurücksetzen, sondern die Installation des richtigen Treibers.',
        },
        {
          question: 'Ist es sicher, den Ordner Windows.old zu löschen?',
          answer:
            'Ja, wenn das System einige Tage einwandfrei lief. Der Ordner existiert, damit Sie zur vorherigen Windows-Version zurückkehren können, und Windows löscht ihn nach 10 Tagen ohnehin automatisch. Nach dem Entfernen ist eine Rückkehr nicht mehr möglich.',
        },
        {
          question: 'Sollte ich den Komponentenspeicher mit DISM bereinigen?',
          answer:
            'Sobald das System stabil ist, gibt `DISM /Online /Cleanup-Image /StartComponentCleanup` Platz frei. Mit `/ResetBase` wird mehr frei, aber installierte Updates lassen sich dann nicht mehr deinstallieren; nutzen Sie das nur, wenn Sie sicher sind, dass alles funktioniert.',
        },
        {
          question: 'Passiert das bei jedem Update?',
          answer:
            'Monatliche Sicherheitsupdates lösen diesen Effekt in der Regel nicht aus. Anhaltende Langsamkeit ist typisch für große Funktionsupdates, die ein- bis zweimal jährlich kommen.',
        },
      ],
      verdict: [
        'Der Großteil der Langsamkeit nach einem Update ist kein Defekt, sondern Hintergrundarbeit, die noch abgeschlossen werden muss; den Rechner 24-48 Stunden eingeschaltet und im Leerlauf zu lassen genügt meist. Zwei Dinge beheben sich nicht von selbst: ausgetauschte Treiber und eine durch `Windows.old` gefüllte Platte.',
        'Beim zweiten Punkt lohnt der Blick darauf, was sich sonst angesammelt hat. Das Modul Festplattenanalyse von Disk Mop sortiert das Laufwerk samt Systemordnern nach Größe, die Autostart-Verwaltung zeigt die vom Update reaktivierten Einträge, und das Modul Festplattenzustand sagt Ihnen, ob das Laufwerk tatsächlich verschlissen ist.',
      ],
      ctaText: 'Sehen, was sich nach dem Update auf der Platte angesammelt hat',
    },
    fr: {
      title: 'PC lent après une mise à jour Windows : causes et solutions',
      metaDescription:
        'La plupart des ralentissements après une grosse mise à jour Windows disparaissent seuls en 24 à 48 heures. Quel processus est normal, lequel exige une action, et que faire une semaine après.',
      subtitle: 'Deux jours de patience, puis intervention',
      intro: [
        'Réponse courte : la lenteur après une grosse mise à jour Windows est le plus souvent temporaire et se dissipe seule en 24 à 48 heures. Elle vient de trois tâches d\'arrière-plan à terminer : la reconstruction de l\'index de recherche, le nettoyage du magasin de composants (`TiWorker.exe`) et la distribution des fichiers de mise à jour vers d\'autres ordinateurs. Une fois ces travaux achevés, la machine retrouve sa vitesse. Deux situations, en revanche, ne se règlent pas seules et demandent une action : la mise à jour qui a remplacé votre pilote graphique ou de chipset par la version générique de Microsoft, et le dossier `Windows.old` qui remplit le disque et ralentit le SSD. Si c\'est encore lent une semaine après, la cause n\'est pas la mise à jour qui « se pose », mais l\'un de ces deux points.',
        'Ce guide explique d\'abord ce qui est normal, puis ce que signifie réellement le processus visible dans le Gestionnaire des tâches, et enfin quoi faire quand une semaine a passé sans amélioration.',
      ],
      keyTakeaways: [
        'La plupart des lenteurs post-mise à jour disparaissent en 24 à 48 heures ; l\'index de recherche et le nettoyage des composants s\'achèvent en arrière-plan.',
        'Si vous voyez `TiWorker.exe` ou `MoUsoCoreWorker.exe` dans le Gestionnaire des tâches, la mise à jour n\'a pas fini son travail — c\'est normal.',
        'Les mises à jour remplacent parfois les pilotes graphiques et de chipset par les versions génériques de Microsoft ; cela ne se corrige pas seul, il faut réinstaller le pilote du constructeur.',
        'Le dossier `Windows.old` occupe 10 à 30 Go et ralentit l\'écriture du SSD en remplissant le disque ; il peut être supprimé dans les 10 jours une fois le système stable.',
        'L\'optimisation de distribution envoie les fichiers de mise à jour vers d\'autres ordinateurs ; la désactiver réduit la charge réseau et disque.',
        'Si c\'est encore lent après une semaine, la mise à jour n\'est pas en cause ; regardez les pilotes, les programmes au démarrage et le remplissage du disque.',
      ],
      dataTable: {
        caption: 'Après une mise à jour : attendre ou agir',
        columns: ['Symptôme', 'Durée', 'Normal ?', 'Que faire'],
        rows: [
          ['`TiWorker.exe` occupe le disque', '2 à 24 heures', 'Oui', 'Attendre, laisser la machine allumée'],
          ['`SearchIndexer.exe` tourne en continu', '4 à 48 heures', 'Oui', 'Attendre ; reconstruire l\'index si cela dure des semaines'],
          ['Saccades dans les jeux et la vidéo', 'Permanent', 'Non', 'Réinstaller le pilote graphique du constructeur'],
          ['Disque rempli à plus de 90 %', 'Permanent', 'Non', 'Supprimer le dossier `Windows.old`'],
          ['Démarrage plus lent qu\'avant', 'Permanent', 'Non', 'Passer en revue les programmes au démarrage'],
          ['Envoi élevé sans téléchargement', 'Variable', 'En partie', 'Désactiver l\'optimisation de distribution'],
        ],
      },
      howTo: {
        name: 'Corriger un ralentissement après une mise à jour Windows',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Laisser d\'abord 24 à 48 heures',
            text: 'Laissez la machine allumée et inactive. L\'index de recherche et le nettoyage des composants n\'avancent qu\'au repos ; éteindre sans cesse empêche ces tâches de se terminer et prolonge la lenteur.',
          },
          {
            name: 'Voir quel processus tourne',
            text: 'Ouvrez Gestionnaire des tâches > Détails et triez par la colonne Disque. Si `TiWorker.exe`, `MoUsoCoreWorker.exe` ou `SearchIndexer.exe` est en tête, la mise à jour n\'est pas encore posée et attendre est la bonne réponse.',
          },
          {
            name: 'Réinstaller les pilotes graphique et chipset',
            text: 'Si les jeux, la vidéo ou la fluidité de l\'interface se sont dégradés, un pilote a peut-être été remplacé. Téléchargez le pilote actuel chez le fabricant de votre carte graphique ; si le Gestionnaire de périphériques affiche « Carte graphique de base Microsoft », le diagnostic est confirmé.',
          },
          {
            name: 'Supprimer le dossier Windows.old',
            text: 'Une fois le système stable depuis quelques jours, allez dans Paramètres > Système > Stockage > Fichiers temporaires, cochez « Installation précédente de Windows » et supprimez. Cela libère en général 10 à 30 Go.',
          },
          {
            name: 'Réduire l\'optimisation de distribution',
            text: 'Dans Paramètres > Windows Update > Options avancées > Optimisation de distribution, désactivez « Autoriser les téléchargements à partir d\'autres PC ». Votre machine cessera d\'envoyer des mises à jour à d\'autres.',
          },
        ],
      },
      sections: [
        {
          title: 'La lenteur après mise à jour est-elle normale, et combien de temps dure-t-elle ?',
          content: [
            'Une grosse mise à jour Windows ne se contente pas de remplacer des fichiers ; une fois l\'installation terminée, elle lance une série de tâches d\'arrière-plan qui durent des jours. Les trois principales sont la reconstruction complète de l\'index de recherche, le retrait des versions obsolètes du magasin de composants, et la distribution des nouveaux fichiers de mise à jour aux autres ordinateurs du réseau.',
            'Ces tâches tournent volontairement à faible priorité et n\'avancent que lorsque la machine est inactive. Sur un ordinateur classique, elles se terminent en 24 à 48 heures. Mais sur un portable utilisé quelques heures par jour puis éteint, le même travail peut s\'étaler sur une semaine — d\'où l\'expérience très répandue du « mon ordinateur a été lent une semaine après la mise à jour ».',
            'Laisser la machine allumée et inactive pendant cette période est la solution la plus rapide. L\'éteindre sans cesse, ou attaquer aussitôt des travaux lourds, repousse ces tâches et allonge la lenteur. La bonne réponse pour les deux premiers jours n\'est donc pas un réglage mais de la patience.',
          ],
        },
        {
          title: 'Que signifie le processus visible dans le Gestionnaire des tâches ?',
          content: [
            'Ouvrez Gestionnaire des tâches > Détails et triez par la colonne Disque. Les noms en tête vous disent directement ce qui se passe. `TiWorker.exe` (Windows Modules Installer Worker) effectue la maintenance des composants ; une forte activité disque pendant des heures après une mise à jour est normale et s\'arrête d\'elle-même.',
            '`MoUsoCoreWorker.exe` pilote la session de mise à jour ; s\'il tourne encore, la chaîne n\'est pas terminée. `SearchIndexer.exe` reconstruit l\'index de recherche. Ces trois noms appellent l\'attente, pas l\'intervention.',
            'En revanche, si le processus `System` ou un logiciel de sécurité reste durablement en tête, la situation est différente : une analyse complète a peut-être été déclenchée après la mise à jour. L\'historique d\'analyse de l\'antivirus le confirme. La charge retombe à la fin de l\'analyse ; sinon, ce n\'est pas elle le problème.',
          ],
        },
        {
          title: 'Pilotes : ce que la mise à jour a discrètement annulé',
          content: [
            'C\'est le problème le plus fréquent qui ne se corrige pas seul. Les grosses mises à jour remplacent parfois le pilote graphique, de chipset ou audio installé par le constructeur par la version générique de Microsoft. Le système fonctionne toujours mais les performances chutent : le nombre d\'images par seconde baisse dans les jeux, la lecture vidéo saccade, et même les animations de l\'interface perdent leur fluidité.',
            'La vérification est simple. Ouvrez le Gestionnaire de périphériques et regardez sous Cartes graphiques. S\'il est écrit « Carte graphique de base Microsoft », le vrai pilote a disparu. Télécharger et installer le pilote actuel chez le fabricant de votre carte règle complètement le problème.',
            'Faites la même vérification pour le chipset. Le pack de pilotes chipset du fabricant de la carte mère rétablit les réglages de gestion de l\'alimentation et du contrôleur de stockage perturbés par la mise à jour. Sur les portables en particulier, si l\'autonomie a chuté après une mise à jour, c\'est généralement la cause.',
          ],
        },
        {
          title: 'Si c\'est encore lent au bout d\'une semaine',
          content: [
            'Une fois la semaine passée sans amélioration, « la mise à jour se pose » n\'explique plus rien, et trois endroits méritent un examen. Le premier est le remplissage du disque. La mise à jour laisse un dossier `Windows.old` de 10 à 30 Go ; si le disque était déjà juste, l\'occupation dépasse 90 % et la vitesse d\'écriture du SSD chute nettement. Système stable, supprimez ce dossier via Paramètres > Système > Stockage.',
            'Le deuxième, ce sont les programmes au démarrage. Certaines mises à jour réactivent des éléments que vous aviez désactivés. Ouvrez Gestionnaire des tâches > Applications de démarrage et passez la liste en revue ; désactivez ce que vous n\'attendiez pas.',
            'Le troisième est un index de recherche corrompu. Si `SearchIndexer.exe` tourne depuis des semaines et que la recherche ne renvoie toujours rien, l\'index est incohérent et doit être reconstruit à la main. Si la lenteur persiste après ces trois vérifications, elle n\'est pas liée à la mise à jour : examinez la santé du disque, un manque de mémoire, ou un autre logiciel en arrière-plan.',
          ],
        },
      ],
      faq: [
        {
          question: 'Revenir en arrière sur la mise à jour règle-t-il la lenteur ?',
          answer:
            'Rarement. La fenêtre de retour est généralement de 10 jours, et revenir en arrière relance les mêmes tâches d\'arrière-plan, ce qui ralentit davantage à court terme. Si un pilote est en cause, la solution est d\'installer le bon pilote, pas de revenir en arrière.',
        },
        {
          question: 'Est-il sûr de supprimer le dossier Windows.old ?',
          answer:
            'Oui, si le système fonctionne sans problème depuis quelques jours. Ce dossier existe pour permettre de revenir à la version précédente de Windows, et Windows le supprime automatiquement au bout de 10 jours de toute façon. Une fois retiré, le retour arrière n\'est plus possible.',
        },
        {
          question: 'Faut-il nettoyer le magasin de composants avec DISM ?',
          answer:
            'Une fois le système stable, `DISM /Online /Cleanup-Image /StartComponentCleanup` libère de l\'espace. Ajouter `/ResetBase` en libère davantage mais empêche ensuite de désinstaller les mises à jour installées ; ne l\'utilisez que si vous êtes certain que tout fonctionne.',
        },
        {
          question: 'Cela se reproduira-t-il à chaque mise à jour ?',
          answer:
            'Les mises à jour de sécurité mensuelles ne produisent généralement pas cet effet. La lenteur prolongée est propre aux grosses mises à jour de fonctionnalités, qui arrivent une ou deux fois par an.',
        },
      ],
      verdict: [
        'L\'essentiel de la lenteur après une mise à jour n\'est pas une panne mais du travail d\'arrière-plan en attente ; laisser la machine allumée et inactive 24 à 48 heures suffit dans la plupart des cas. Deux choses ne se corrigent pas seules : des pilotes remplacés, et un disque rempli par `Windows.old`.',
        'En traitant le second point, autant voir ce qui s\'est accumulé par ailleurs. Le module Analyse de disque de Disk Mop trie le lecteur par taille, dossiers système compris ; le Gestionnaire de démarrage montre les éléments réactivés par la mise à jour ; et le module Santé du disque indique si le lecteur est réellement usé.',
      ],
      ctaText: 'Voyez ce qui s\'est accumulé sur votre disque après la mise à jour',
    },
    es: {
      title: 'PC lento tras una actualización de Windows: causas y soluciones',
      metaDescription:
        'La mayoría de ralentizaciones tras una gran actualización de Windows se resuelven solas en 24-48 horas. Qué proceso es normal, cuál exige acción y qué hacer si sigue lento una semana después.',
      subtitle: 'Dos días de paciencia y luego intervenir',
      intro: [
        'Respuesta corta: la lentitud tras una gran actualización de Windows suele ser temporal y desaparece sola en 24-48 horas. La causa son tres trabajos en segundo plano pendientes: la reconstrucción del índice de búsqueda, la limpieza del almacén de componentes (`TiWorker.exe`) y el reparto de los archivos de actualización a otros equipos. Cuando terminan, la máquina recupera su velocidad. Pero hay dos situaciones que no se arreglan solas y requieren acción: que la actualización haya sustituido el controlador de gráficos o del chipset por el genérico de Microsoft, y que la carpeta `Windows.old` llene el disco y ralentice el SSD. Si sigue lento una semana después, la causa no es que la actualización «se asiente», sino uno de esos dos puntos.',
        'Esta guía explica primero qué es normal, después qué significa realmente el proceso que ves en el Administrador de tareas, y por último qué hacer cuando ha pasado una semana sin mejoría.',
      ],
      keyTakeaways: [
        'La mayor parte de la lentitud tras actualizar se resuelve en 24-48 horas; el índice de búsqueda y la limpieza de componentes están terminando en segundo plano.',
        'Si ves `TiWorker.exe` o `MoUsoCoreWorker.exe` en el Administrador de tareas, la actualización no ha terminado su trabajo — es normal.',
        'Las actualizaciones a veces sustituyen los controladores de gráficos y chipset por los genéricos de Microsoft; eso no se arregla solo, hay que reinstalar el del fabricante.',
        'La carpeta `Windows.old` ocupa 10-30 GB y ralentiza la escritura del SSD al llenar el disco; puede eliminarse en 10 días cuando el sistema esté estable.',
        'La Optimización de entrega sube archivos de actualización a otros equipos; desactivarla reduce la carga de red y disco.',
        'Si sigue lento tras una semana, la actualización no es la causa; revisa controladores, programas de inicio y el llenado del disco.',
      ],
      dataTable: {
        caption: 'Tras actualizar: qué esperar y sobre qué actuar',
        columns: ['Síntoma', 'Cuánto dura', '¿Normal?', 'Qué hacer'],
        rows: [
          ['`TiWorker.exe` ocupando el disco', '2-24 horas', 'Sí', 'Esperar, dejar el equipo encendido'],
          ['`SearchIndexer.exe` funcionando sin parar', '4-48 horas', 'Sí', 'Esperar; reconstruir el índice si dura semanas'],
          ['Tirones en juegos y vídeo', 'Permanente', 'No', 'Reinstalar el controlador gráfico del fabricante'],
          ['Disco por encima del 90 %', 'Permanente', 'No', 'Eliminar la carpeta `Windows.old`'],
          ['Arranque más lento que antes', 'Permanente', 'No', 'Revisar los programas de inicio'],
          ['Subida alta sin estar descargando', 'Variable', 'En parte', 'Desactivar la Optimización de entrega'],
        ],
      },
      howTo: {
        name: 'Solucionar la lentitud tras una actualización de Windows',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Dar primero 24-48 horas',
            text: 'Deja el equipo encendido y sin usar. El índice de búsqueda y la limpieza de componentes solo avanzan en reposo; apagarlo una y otra vez impide que terminen y alarga la lentitud.',
          },
          {
            name: 'Ver qué proceso está funcionando',
            text: 'Abre Administrador de tareas > Detalles y ordena por la columna Disco. Si arriba están `TiWorker.exe`, `MoUsoCoreWorker.exe` o `SearchIndexer.exe`, la actualización aún no ha asentado y esperar es lo correcto.',
          },
          {
            name: 'Renovar los controladores de gráficos y chipset',
            text: 'Si los juegos, el vídeo o la fluidez de la interfaz han empeorado, puede que se haya cambiado un controlador. Descarga el actual desde el fabricante de tu tarjeta gráfica; si el Administrador de dispositivos dice «Adaptador de pantalla básico de Microsoft», el diagnóstico queda confirmado.',
          },
          {
            name: 'Eliminar la carpeta Windows.old',
            text: 'Con el sistema estable unos días, ve a Configuración > Sistema > Almacenamiento > Archivos temporales, marca «Instalación anterior de Windows» y elimínala. Suele liberar 10-30 GB.',
          },
          {
            name: 'Reducir la Optimización de entrega',
            text: 'En Configuración > Windows Update > Opciones avanzadas > Optimización de entrega, desactiva «Permitir descargas desde otros equipos». Así tu máquina deja de subir actualizaciones a otros.',
          },
        ],
      },
      sections: [
        {
          title: '¿Es normal la lentitud tras actualizar y cuánto dura?',
          content: [
            'Una gran actualización de Windows no solo sustituye archivos; cuando termina la instalación pone en marcha una serie de trabajos en segundo plano que duran días. Los tres mayores son reconstruir el índice de búsqueda desde cero, retirar del almacén de componentes las versiones sustituidas y repartir los nuevos archivos de actualización a otros equipos de la red.',
            'Estos trabajos corren a propósito con baja prioridad y solo avanzan mientras el equipo está en reposo. En un ordenador normal terminan en 24-48 horas. Pero en un portátil que se usa unas horas al día y luego se apaga, el mismo trabajo puede estirarse una semana: por eso es tan común la experiencia de «el ordenador estuvo lento una semana tras la actualización».',
            'Dejar el equipo encendido y sin usar durante ese periodo es la solución más rápida. Apagarlo constantemente, o ponerse enseguida con tareas pesadas, retrasa esos trabajos y alarga la lentitud. Así que la respuesta correcta para los dos primeros días no es un ajuste, es paciencia.',
          ],
        },
        {
          title: '¿Qué significa el proceso que ves en el Administrador de tareas?',
          content: [
            'Abre Administrador de tareas > Detalles y ordena por la columna Disco. Los nombres de arriba te dicen directamente qué pasa. `TiWorker.exe` (Windows Modules Installer Worker) realiza el mantenimiento de componentes; un uso alto de disco durante horas tras una actualización es normal y se detiene solo al acabar.',
            '`MoUsoCoreWorker.exe` es el proceso que gestiona la sesión de actualización; si sigue funcionando, la cadena no ha terminado. `SearchIndexer.exe` está reconstruyendo el índice de búsqueda. Los tres son nombres que piden esperar, no intervenir.',
            'En cambio, si el proceso `System` o un antivirus se mantienen arriba de forma permanente, la situación es distinta: puede haberse lanzado un análisis completo tras la actualización. El historial de análisis del antivirus lo confirma. La carga baja al terminar el análisis; si no baja, el análisis no es el problema.',
          ],
        },
        {
          title: 'Controladores: lo que la actualización revirtió en silencio',
          content: [
            'Es el problema más común que no se arregla solo. Las grandes actualizaciones a veces sustituyen el controlador de gráficos, chipset o audio instalado por el fabricante por la versión genérica de Microsoft. El sistema sigue funcionando pero el rendimiento cae: bajan los fotogramas en juegos, la reproducción de vídeo da tirones e incluso las animaciones de la interfaz pierden fluidez.',
            'Comprobarlo es fácil. Abre el Administrador de dispositivos y mira en Adaptadores de pantalla. Si pone «Adaptador de pantalla básico de Microsoft», el controlador real ha desaparecido. Descargar e instalar el controlador actual desde el fabricante de tu tarjeta lo resuelve por completo.',
            'Haz la misma comprobación con el chipset. El paquete de controladores del fabricante de la placa base restaura los ajustes de gestión de energía y del controlador de almacenamiento que la actualización alteró. En portátiles, sobre todo, si la autonomía se acortó tras actualizar, suele ser por esto.',
          ],
        },
        {
          title: 'Si sigue lento tras una semana',
          content: [
            'Pasada una semana sin mejora, «la actualización se está asentando» ya no explica nada, y hay tres sitios donde mirar. El primero es el llenado del disco. La actualización deja una carpeta `Windows.old` de 10-30 GB; si el disco ya iba justo, la ocupación pasa del 90 % y la velocidad de escritura del SSD cae de forma notable. Con el sistema estable, elimina esa carpeta desde Configuración > Sistema > Almacenamiento.',
            'El segundo son los programas de inicio. Algunas actualizaciones vuelven a activar elementos que habías deshabilitado. Abre Administrador de tareas > Aplicaciones de inicio y repasa la lista; desactiva lo que no esperabas ver.',
            'El tercero es un índice de búsqueda dañado. Si `SearchIndexer.exe` lleva semanas funcionando y la búsqueda sigue sin devolver nada, el índice es incoherente y hay que reconstruirlo a mano. Si la lentitud persiste tras estas tres comprobaciones, no tiene que ver con la actualización: revisa la salud del disco, falta de memoria u otro software en segundo plano.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Deshacer la actualización soluciona la lentitud?',
          answer:
            'Rara vez. La ventana para revertir suele ser de 10 días, y revertir reinicia los mismos trabajos en segundo plano, con lo que a corto plazo va aún más lento. Si la causa es un controlador, la solución es instalar el correcto, no revertir.',
        },
        {
          question: '¿Es seguro borrar la carpeta Windows.old?',
          answer:
            'Sí, si el sistema lleva unos días funcionando sin problemas. Esa carpeta existe para poder volver a la versión anterior de Windows, y Windows la borra automáticamente a los 10 días de todos modos. Ten en cuenta que, una vez eliminada, ya no podrás revertir.',
        },
        {
          question: '¿Debo limpiar el almacén de componentes con DISM?',
          answer:
            'Cuando el sistema esté estable, `DISM /Online /Cleanup-Image /StartComponentCleanup` libera espacio. Añadir `/ResetBase` libera más pero impide desinstalar las actualizaciones ya instaladas; úsalo solo si estás seguro de que todo funciona.',
        },
        {
          question: '¿Pasará esto en cada actualización?',
          answer:
            'Las actualizaciones de seguridad mensuales no suelen producir este efecto. La lentitud prolongada es propia de las grandes actualizaciones de características, que llegan una o dos veces al año.',
        },
      ],
      verdict: [
        'La mayor parte de la lentitud tras actualizar no es una avería sino trabajo en segundo plano pendiente; dejar el equipo encendido y en reposo 24-48 horas basta en la mayoría de casos. Dos cosas no se arreglan solas: los controladores sustituidos y un disco lleno por `Windows.old`.',
        'Al resolver lo segundo, conviene ver qué más se ha acumulado. El módulo Análisis de disco de Disk Mop ordena la unidad por tamaño incluidas las carpetas de sistema, el Gestor de inicio muestra los elementos que la actualización volvió a activar, y el módulo Salud del disco dice si la unidad está realmente desgastada.',
      ],
      ctaText: 'Descubre qué se acumuló en tu disco tras la actualización',
    },
    it: {
      title: 'PC lento dopo un aggiornamento di Windows: cause e soluzioni',
      metaDescription:
        'La maggior parte dei rallentamenti dopo un grande aggiornamento di Windows si risolve da sola in 24-48 ore. Quale processo è normale, quale richiede un intervento e cosa fare dopo una settimana.',
      subtitle: 'Due giorni di pazienza, poi si interviene',
      intro: [
        'Risposta breve: la lentezza dopo un grande aggiornamento di Windows è di solito temporanea e si risolve da sola entro 24-48 ore. La causa sono tre lavori in background da completare: la ricostruzione dell\'indice di ricerca, la pulizia dell\'archivio componenti (`TiWorker.exe`) e la distribuzione dei file di aggiornamento ad altri computer. Quando finiscono, la macchina torna alla velocità di prima. Due situazioni però non si sistemano da sole e richiedono un intervento: l\'aggiornamento che ha sostituito il driver video o del chipset con quello generico di Microsoft, e la cartella `Windows.old` che riempie il disco rallentando l\'SSD. Se dopo una settimana è ancora lento, la causa non è l\'aggiornamento che «si assesta» ma uno di questi due punti.',
        'Questa guida spiega prima cosa è normale, poi cosa significa davvero il processo che vedi in Gestione attività, e infine cosa fare quando è passata una settimana senza miglioramenti.',
      ],
      keyTakeaways: [
        'Gran parte della lentezza post-aggiornamento sparisce entro 24-48 ore; indice di ricerca e pulizia componenti stanno finendo in background.',
        'Se vedi `TiWorker.exe` o `MoUsoCoreWorker.exe` in Gestione attività, l\'aggiornamento non ha finito il suo lavoro — è normale.',
        'Gli aggiornamenti a volte sostituiscono i driver video e del chipset con le versioni generiche di Microsoft; non si sistema da solo, va reinstallato il driver del produttore.',
        'La cartella `Windows.old` occupa 10-30 GB e rallenta la scrittura dell\'SSD riempiendo il disco; può essere rimossa entro 10 giorni a sistema stabile.',
        'L\'Ottimizzazione recapito carica i file di aggiornamento verso altri computer; disattivarla riduce il carico di rete e disco.',
        'Se dopo una settimana è ancora lento, l\'aggiornamento non è la causa; controlla driver, programmi all\'avvio e riempimento del disco.',
      ],
      dataTable: {
        caption: 'Dopo un aggiornamento: cosa aspettare e su cosa intervenire',
        columns: ['Sintomo', 'Quanto dura', 'Normale?', 'Cosa fare'],
        rows: [
          ['`TiWorker.exe` impegna il disco', '2-24 ore', 'Sì', 'Aspettare, lasciare la macchina accesa'],
          ['`SearchIndexer.exe` lavora di continuo', '4-48 ore', 'Sì', 'Aspettare; ricostruire l\'indice se dura settimane'],
          ['Scatti in giochi e video', 'Permanente', 'No', 'Reinstallare il driver video dal produttore'],
          ['Disco oltre il 90% pieno', 'Permanente', 'No', 'Rimuovere la cartella `Windows.old`'],
          ['Avvio più lento di prima', 'Permanente', 'No', 'Rivedere i programmi all\'avvio'],
          ['Upload elevato senza download', 'Variabile', 'In parte', 'Disattivare l\'Ottimizzazione recapito'],
        ],
      },
      howTo: {
        name: 'Risolvere il rallentamento dopo un aggiornamento di Windows',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Concedere prima 24-48 ore',
            text: 'Lascia la macchina accesa e inattiva. Indice di ricerca e pulizia componenti avanzano solo a riposo; spegnere in continuazione impedisce a questi lavori di concludersi e allunga la lentezza.',
          },
          {
            name: 'Vedere quale processo è in esecuzione',
            text: 'Apri Gestione attività > Dettagli e ordina per la colonna Disco. Se in cima ci sono `TiWorker.exe`, `MoUsoCoreWorker.exe` o `SearchIndexer.exe`, l\'aggiornamento non si è ancora assestato e aspettare è la risposta giusta.',
          },
          {
            name: 'Rinnovare driver video e chipset',
            text: 'Se giochi, video o fluidità dell\'interfaccia sono peggiorati, potrebbe essere stato sostituito un driver. Scarica il driver aggiornato dal produttore della scheda video; se Gestione dispositivi indica «Scheda video di base Microsoft», il problema è confermato.',
          },
          {
            name: 'Rimuovere la cartella Windows.old',
            text: 'Con il sistema stabile da qualche giorno, vai in Impostazioni > Sistema > Archiviazione > File temporanei, spunta «Installazione precedente di Windows» e rimuovila. Di solito libera 10-30 GB.',
          },
          {
            name: 'Ridurre l\'Ottimizzazione recapito',
            text: 'In Impostazioni > Windows Update > Opzioni avanzate > Ottimizzazione recapito disattiva «Consenti download da altri PC». Così la tua macchina smette di caricare aggiornamenti verso altri.',
          },
        ],
      },
      sections: [
        {
          title: 'La lentezza dopo l\'aggiornamento è normale e quanto dura?',
          content: [
            'Un grande aggiornamento di Windows non si limita a sostituire file; finita l\'installazione avvia una serie di lavori in background che durano giorni. I tre principali sono la ricostruzione da zero dell\'indice di ricerca, la rimozione delle versioni superate dall\'archivio componenti e la distribuzione dei nuovi file di aggiornamento agli altri computer in rete.',
            'Questi lavori girano volutamente a bassa priorità e avanzano solo mentre la macchina è a riposo. Su un computer tipico si concludono in 24-48 ore. Ma su un portatile usato qualche ora al giorno e poi spento, lo stesso lavoro può distendersi su una settimana: ecco perché l\'esperienza «dopo l\'aggiornamento il computer è stato lento per una settimana» è così diffusa.',
            'Lasciare la macchina accesa e inattiva in questo periodo è la soluzione più rapida. Spegnerla di continuo, o mettersi subito a lavori pesanti, rinvia questi processi e allunga la lentezza. Quindi la risposta giusta per i primi due giorni non è un\'impostazione ma la pazienza.',
          ],
        },
        {
          title: 'Cosa significa il processo che vedi in Gestione attività?',
          content: [
            'Apri Gestione attività > Dettagli e ordina per la colonna Disco. I nomi in cima ti dicono direttamente cosa sta succedendo. `TiWorker.exe` (Windows Modules Installer Worker) esegue la manutenzione dei componenti; un uso elevato del disco per ore dopo un aggiornamento è normale e si ferma da solo.',
            '`MoUsoCoreWorker.exe` è il processo che gestisce la sessione di aggiornamento; se è ancora in esecuzione, la catena non è completata. `SearchIndexer.exe` sta ricostruendo l\'indice di ricerca. Tutti e tre sono nomi che chiedono attesa, non intervento.',
            'Se invece il processo `System` o un software di sicurezza restano stabilmente in cima, la situazione è diversa: dopo l\'aggiornamento potrebbe essere partita una scansione completa. La cronologia delle scansioni dell\'antivirus lo conferma. Al termine il carico scende; se non scende, il problema non è la scansione.',
          ],
        },
        {
          title: 'Driver: ciò che l\'aggiornamento ha silenziosamente ripristinato',
          content: [
            'È il problema più comune che non si risolve da solo. I grandi aggiornamenti a volte sostituiscono il driver video, del chipset o audio installato dal produttore con la versione generica di Microsoft. Il sistema funziona ancora ma le prestazioni calano: gli fps scendono nei giochi, la riproduzione video scatta e persino le animazioni dell\'interfaccia perdono fluidità.',
            'Il controllo è semplice. Apri Gestione dispositivi e guarda sotto Schede video. Se compare «Scheda video di base Microsoft», il driver vero non c\'è più. Scaricare e installare il driver aggiornato dal produttore della scheda risolve completamente.',
            'Fai lo stesso controllo per il chipset. Il pacchetto driver del produttore della scheda madre ripristina le impostazioni di gestione dell\'alimentazione e del controller di archiviazione alterate dall\'aggiornamento. Sui portatili in particolare, se dopo l\'aggiornamento l\'autonomia si è accorciata, di solito il motivo è questo.',
          ],
        },
        {
          title: 'Se dopo una settimana è ancora lento',
          content: [
            'Passata una settimana senza miglioramenti, «l\'aggiornamento si sta assestando» non spiega più nulla, e ci sono tre punti da controllare. Il primo è il riempimento del disco. L\'aggiornamento lascia una cartella `Windows.old` da 10-30 GB; se il disco era già stretto, l\'occupazione supera il 90% e la velocità di scrittura dell\'SSD cala sensibilmente. A sistema stabile, rimuovi quella cartella da Impostazioni > Sistema > Archiviazione.',
            'Il secondo sono i programmi all\'avvio. Alcuni aggiornamenti riabilitano voci che avevi disattivato. Apri Gestione attività > App di avvio e rivedi l\'elenco; disattiva quello che non ti aspettavi di trovare.',
            'Il terzo è un indice di ricerca danneggiato. Se `SearchIndexer.exe` lavora da settimane e la ricerca continua a non restituire nulla, l\'indice è incoerente e va ricostruito a mano. Se la lentezza persiste dopo questi tre controlli, non dipende dall\'aggiornamento: verifica salute del disco, memoria insufficiente o altro software in background.',
          ],
        },
      ],
      faq: [
        {
          question: 'Tornare indietro dall\'aggiornamento risolve la lentezza?',
          answer:
            'Raramente. La finestra per il ripristino è di solito 10 giorni, e tornare indietro riavvia gli stessi lavori in background, rendendo tutto più lento nel breve periodo. Se la causa è un driver, la soluzione è installare quello giusto, non tornare indietro.',
        },
        {
          question: 'È sicuro eliminare la cartella Windows.old?',
          answer:
            'Sì, se il sistema funziona senza problemi da qualche giorno. Quella cartella serve a permetterti di tornare alla versione precedente di Windows, e Windows la elimina comunque in automatico dopo 10 giorni. Una volta rimossa non potrai più tornare indietro.',
        },
        {
          question: 'Devo pulire l\'archivio componenti con DISM?',
          answer:
            'A sistema stabile, `DISM /Online /Cleanup-Image /StartComponentCleanup` libera spazio. Aggiungendo `/ResetBase` se ne libera di più ma non potrai più disinstallare gli aggiornamenti installati; usalo solo quando sei certo che tutto funzioni.',
        },
        {
          question: 'Succederà a ogni aggiornamento?',
          answer:
            'Gli aggiornamenti di sicurezza mensili di solito non producono questo effetto. La lentezza prolungata è tipica dei grandi aggiornamenti delle funzionalità, che arrivano una o due volte l\'anno.',
        },
      ],
      verdict: [
        'La maggior parte della lentezza dopo un aggiornamento non è un guasto ma lavoro in background da completare; lasciare la macchina accesa e inattiva per 24-48 ore basta nella maggior parte dei casi. Due cose non si sistemano da sole: i driver sostituiti e un disco riempito da `Windows.old`.',
        'Mentre affronti il secondo punto, conviene vedere cos\'altro si è accumulato. Il modulo Analisi disco di Disk Mop ordina l\'unità per dimensione incluse le cartelle di sistema, Gestione avvio mostra le voci riabilitate dall\'aggiornamento e il modulo Salute disco dice se l\'unità è davvero usurata.',
      ],
      ctaText: 'Scopri cosa si è accumulato sul disco dopo l\'aggiornamento',
    },
    pt: {
      title: 'PC lento depois de uma atualização do Windows: causas e soluções',
      metaDescription:
        'A maioria das lentidões após uma grande atualização do Windows some sozinha em 24-48 horas. Qual processo é normal, qual exige ação e o que fazer se ainda estiver lento uma semana depois.',
      subtitle: 'Dois dias de paciência, depois intervenção',
      intro: [
        'Resposta curta: a lentidão depois de uma grande atualização do Windows costuma ser temporária e some sozinha em 24-48 horas. A causa são três tarefas em segundo plano esperando terminar: a reconstrução do índice de busca, a limpeza do armazenamento de componentes (`TiWorker.exe`) e a distribuição dos arquivos de atualização para outros computadores. Quando isso acaba, a máquina volta à velocidade de antes. Duas situações, porém, não se resolvem sozinhas e pedem ação: a atualização ter trocado o driver de vídeo ou do chipset pelo genérico da Microsoft, e a pasta `Windows.old` encher o disco e deixar o SSD lento. Se ainda estiver lento uma semana depois, a causa não é a atualização «assentando», e sim um desses dois pontos.',
        'Este guia explica primeiro o que é normal, depois o que o processo visível no Gerenciador de Tarefas realmente significa e, por fim, o que fazer quando passou uma semana sem melhora.',
      ],
      keyTakeaways: [
        'A maior parte da lentidão após atualizar some em 24-48 horas; o índice de busca e a limpeza de componentes estão terminando em segundo plano.',
        'Se você vê `TiWorker.exe` ou `MoUsoCoreWorker.exe` no Gerenciador de Tarefas, a atualização ainda não terminou o trabalho — isso é normal.',
        'Atualizações às vezes trocam os drivers de vídeo e do chipset pelos genéricos da Microsoft; isso não se resolve sozinho, é preciso reinstalar o do fabricante.',
        'A pasta `Windows.old` ocupa 10-30 GB e deixa a gravação do SSD lenta ao encher o disco; pode ser removida em 10 dias quando o sistema estiver estável.',
        'A Otimização de Entrega envia arquivos de atualização para outros computadores; desligar reduz a carga de rede e disco.',
        'Se ainda estiver lento após uma semana, a atualização não é a causa; verifique drivers, programas de inicialização e o quanto o disco está cheio.',
      ],
      dataTable: {
        caption: 'Depois de atualizar: o que esperar e o que exige ação',
        columns: ['Sintoma', 'Quanto dura', 'Normal?', 'O que fazer'],
        rows: [
          ['`TiWorker.exe` ocupando o disco', '2-24 horas', 'Sim', 'Esperar, deixar a máquina ligada'],
          ['`SearchIndexer.exe` rodando o tempo todo', '4-48 horas', 'Sim', 'Esperar; reconstruir o índice se durar semanas'],
          ['Travadas em jogos e vídeo', 'Permanente', 'Não', 'Reinstalar o driver de vídeo do fabricante'],
          ['Disco acima de 90% cheio', 'Permanente', 'Não', 'Remover a pasta `Windows.old`'],
          ['Inicialização mais lenta que antes', 'Permanente', 'Não', 'Revisar os programas de inicialização'],
          ['Upload alto sem estar baixando', 'Variável', 'Em parte', 'Desligar a Otimização de Entrega'],
        ],
      },
      howTo: {
        name: 'Resolver a lentidão depois de uma atualização do Windows',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'Dar primeiro 24-48 horas',
            text: 'Deixe a máquina ligada e sem uso. O índice de busca e a limpeza de componentes só avançam em ociosidade; desligar repetidamente impede que essas tarefas terminem e prolonga a lentidão.',
          },
          {
            name: 'Ver qual processo está rodando',
            text: 'Abra Gerenciador de Tarefas > Detalhes e ordene pela coluna Disco. Se `TiWorker.exe`, `MoUsoCoreWorker.exe` ou `SearchIndexer.exe` estiver no topo, a atualização ainda não assentou e esperar é a resposta certa.',
          },
          {
            name: 'Renovar os drivers de vídeo e chipset',
            text: 'Se jogos, vídeo ou a fluidez da interface pioraram, um driver pode ter sido trocado. Baixe o driver atual no site do fabricante da placa de vídeo; se o Gerenciador de Dispositivos disser «Adaptador de Vídeo Básico da Microsoft», o problema está confirmado.',
          },
          {
            name: 'Remover a pasta Windows.old',
            text: 'Com o sistema estável há alguns dias, vá em Configurações > Sistema > Armazenamento > Arquivos temporários, marque «Instalação anterior do Windows» e remova. Costuma liberar 10-30 GB.',
          },
          {
            name: 'Reduzir a Otimização de Entrega',
            text: 'Em Configurações > Windows Update > Opções avançadas > Otimização de Entrega, desligue «Permitir downloads de outros PCs». Assim sua máquina para de enviar atualizações para outras pessoas.',
          },
        ],
      },
      sections: [
        {
          title: 'A lentidão depois de atualizar é normal e quanto dura?',
          content: [
            'Uma grande atualização do Windows não apenas troca arquivos; quando a instalação termina, ela inicia uma série de tarefas em segundo plano que duram dias. As três maiores são reconstruir o índice de busca do zero, remover as versões substituídas do armazenamento de componentes e distribuir os novos arquivos de atualização para outros computadores da rede.',
            'Essas tarefas rodam de propósito com prioridade baixa e só avançam enquanto a máquina está ociosa. Num computador típico terminam em 24-48 horas. Mas num notebook usado algumas horas por dia e depois desligado, o mesmo trabalho pode se arrastar por uma semana — por isso a experiência «meu computador ficou lento uma semana depois da atualização» é tão comum.',
            'Deixar a máquina ligada e ociosa nesse período é a solução mais rápida. Desligar toda hora, ou partir logo para tarefas pesadas, adia essas rotinas e alonga a lentidão. Ou seja, a resposta certa para os dois primeiros dias não é uma configuração, é paciência.',
          ],
        },
        {
          title: 'O que significa o processo que aparece no Gerenciador de Tarefas?',
          content: [
            'Abra Gerenciador de Tarefas > Detalhes e ordene pela coluna Disco. Os nomes no topo dizem diretamente o que está acontecendo. O `TiWorker.exe` (Windows Modules Installer Worker) faz a manutenção de componentes; uso alto de disco por horas depois de uma atualização é normal e ele para sozinho ao terminar.',
            'O `MoUsoCoreWorker.exe` é o processo que gerencia a sessão de atualização; se ainda está rodando, a cadeia não terminou. O `SearchIndexer.exe` está reconstruindo o índice de busca. Os três são nomes que pedem espera, não intervenção.',
            'Já se o processo `System` ou um software de segurança ficam permanentemente no topo, a situação é outra: pode ter sido disparada uma varredura completa depois da atualização. O histórico de varreduras do antivírus confirma. A carga cai quando a varredura termina; se não cair, a varredura não é o problema.',
          ],
        },
        {
          title: 'Drivers: o que a atualização reverteu em silêncio',
          content: [
            'É o problema mais comum que não se resolve sozinho. Grandes atualizações às vezes trocam o driver de vídeo, chipset ou áudio instalado pelo fabricante pela versão genérica da Microsoft. O sistema continua funcionando, mas o desempenho cai: os quadros por segundo caem nos jogos, a reprodução de vídeo trava e até as animações da interface perdem fluidez.',
            'Conferir é fácil. Abra o Gerenciador de Dispositivos e veja em Adaptadores de vídeo. Se estiver escrito «Adaptador de Vídeo Básico da Microsoft», o driver de verdade se foi. Baixar e instalar o driver atual do fabricante da placa resolve por completo.',
            'Faça a mesma checagem para o chipset. O pacote de drivers do fabricante da placa-mãe restaura as configurações de gerenciamento de energia e do controlador de armazenamento que a atualização mexeu. Em notebooks, principalmente, se a autonomia caiu depois da atualização, o motivo costuma ser esse.',
          ],
        },
        {
          title: 'Se ainda estiver lento depois de uma semana',
          content: [
            'Passada uma semana sem melhora, «a atualização está assentando» já não explica nada, e há três lugares para olhar. O primeiro é o quanto o disco está cheio. A atualização deixa uma pasta `Windows.old` de 10-30 GB; se o disco já estava apertado, a ocupação passa de 90% e a velocidade de gravação do SSD cai bastante. Com o sistema estável, remova essa pasta em Configurações > Sistema > Armazenamento.',
            'O segundo são os programas de inicialização. Algumas atualizações reativam itens que você havia desativado. Abra Gerenciador de Tarefas > Aplicativos de inicialização e revise a lista; desligue o que você não esperava ver ali.',
            'O terceiro é um índice de busca corrompido. Se o `SearchIndexer.exe` roda há semanas e a busca continua sem retornar nada, o índice está inconsistente e precisa ser reconstruído manualmente. Se a lentidão persistir depois dessas três checagens, não tem a ver com a atualização: investigue saúde do disco, memória insuficiente ou outro software em segundo plano.',
          ],
        },
      ],
      faq: [
        {
          question: 'Reverter a atualização resolve a lentidão?',
          answer:
            'Raramente. A janela de reversão costuma ser de 10 dias, e reverter reinicia as mesmas tarefas em segundo plano, deixando tudo mais lento no curto prazo. Se a causa for um driver, a solução é instalar o driver correto, não reverter.',
        },
        {
          question: 'É seguro apagar a pasta Windows.old?',
          answer:
            'Sim, se o sistema roda sem problemas há alguns dias. Essa pasta existe para permitir voltar à versão anterior do Windows, e o Windows a apaga automaticamente depois de 10 dias de qualquer forma. Depois de removida, não dá mais para reverter.',
        },
        {
          question: 'Devo limpar o armazenamento de componentes com DISM?',
          answer:
            'Com o sistema estável, `DISM /Online /Cleanup-Image /StartComponentCleanup` libera espaço. Acrescentar `/ResetBase` libera mais, mas impede desinstalar atualizações já instaladas; use só quando tiver certeza de que tudo funciona.',
        },
        {
          question: 'Isso vai acontecer em toda atualização?',
          answer:
            'As atualizações mensais de segurança em geral não produzem esse efeito. A lentidão prolongada é típica das grandes atualizações de recursos, que chegam uma ou duas vezes por ano.',
        },
      ],
      verdict: [
        'A maior parte da lentidão depois de uma atualização não é defeito, e sim trabalho em segundo plano esperando terminar; deixar a máquina ligada e ociosa por 24-48 horas basta na maioria dos casos. Duas coisas não se resolvem sozinhas: drivers trocados e um disco cheio por causa do `Windows.old`.',
        'Ao tratar do segundo ponto, vale ver o que mais se acumulou. O módulo Análise de disco do Disk Mop ordena a unidade por tamanho incluindo pastas de sistema, o Gerenciador de inicialização mostra os itens que a atualização reativou, e o módulo Saúde do disco diz se a unidade está mesmo desgastada.',
      ],
      ctaText: 'Veja o que se acumulou no seu disco depois da atualização',
    },
    ja: {
      title: 'Windows Update の後に PC が遅くなった: 原因と対処法',
      metaDescription:
        '大型の Windows 更新後の遅さは、多くの場合 24〜48 時間で自然に解消します。どのプロセスが正常でどれが対処を要するか、1 週間経っても遅い場合の対応も解説します。',
      subtitle: '最初の 2 日は待つ、その後は手を打つ',
      intro: [
        '短い答え: 大型の Windows 更新の後に遅くなるのは、たいてい一時的で 24〜48 時間で自然に収まります。原因は、完了を待っている 3 つのバックグラウンド処理です。検索インデックスの再構築、コンポーネント ストアの整理（`TiWorker.exe`）、そして更新ファイルを他のパソコンへ配布する処理です。これらが終われば元の速度に戻ります。ただし自然には直らず対処が必要な状況が 2 つあります。更新がグラフィックスまたはチップセットのドライバーを Microsoft の汎用版に置き換えてしまった場合と、`Windows.old` フォルダーがディスクを埋めて SSD を遅くしている場合です。1 週間経っても遅いなら、原因は更新が「落ち着く」ことではなく、このどちらかです。',
        'この記事では、まず何が正常かを説明し、次にタスク マネージャーに見えるプロセスが実際に何を意味するのかを述べ、最後に 1 週間経っても改善しない場合の対処を扱います。',
      ],
      keyTakeaways: [
        '更新後の遅さの大半は 24〜48 時間で解消します。検索インデックスとコンポーネント整理がバックグラウンドで完了しつつあるためです。',
        'タスク マネージャーに `TiWorker.exe` や `MoUsoCoreWorker.exe` が見えるなら、更新はまだ作業を終えていません。これは正常です。',
        '更新はときにグラフィックスやチップセットのドライバーを Microsoft の汎用版に置き換えます。これは自然には直らず、メーカー製ドライバーの再インストールが必要です。',
        '`Windows.old` フォルダーは 10〜30 GB を占め、ディスクを埋めることで SSD の書き込みを遅くします。システムが安定していれば 10 日以内に削除できます。',
        '配信の最適化は更新ファイルを他のパソコンへアップロードします。無効にするとネットワークとディスクの負荷が下がります。',
        '1 週間経っても遅いなら更新の落ち着きが原因ではありません。ドライバー、スタートアップ プログラム、ディスクの空き容量を確認してください。',
      ],
      dataTable: {
        caption: '更新後: 待つべきものと手を打つべきもの',
        columns: ['症状', '継続時間', '正常か', '対応'],
        rows: [
          ['`TiWorker.exe` がディスクを使用', '2〜24 時間', '正常', '待つ。マシンは電源を入れたままに'],
          ['`SearchIndexer.exe` が動き続ける', '4〜48 時間', '正常', '待つ。数週間続くならインデックスを再構築'],
          ['ゲームや動画のカクつき', '継続的', '異常', 'メーカーのグラフィックス ドライバーを再インストール'],
          ['ディスク使用率 90% 超', '継続的', '異常', '`Windows.old` フォルダーを削除'],
          ['起動が以前より遅い', '継続的', '異常', 'スタートアップ プログラムを見直す'],
          ['ダウンロードしていないのに上り通信が多い', '不定', '一部正常', '配信の最適化を無効にする'],
        ],
      },
      howTo: {
        name: 'Windows 更新後の速度低下を解消する',
        totalTime: 'PT30M',
        steps: [
          {
            name: 'まず 24〜48 時間置く',
            text: 'マシンの電源を入れたまま、操作しない状態にしておきます。検索インデックスとコンポーネント整理はアイドル時にしか進みません。頻繁にシャットダウンすると処理が終わらず、遅さが長引きます。',
          },
          {
            name: 'どのプロセスが動いているか確認する',
            text: 'タスク マネージャー > 詳細 を開き、ディスク列で並べ替えます。`TiWorker.exe`、`MoUsoCoreWorker.exe`、`SearchIndexer.exe` が上位なら更新はまだ落ち着いておらず、待つのが正しい対応です。',
          },
          {
            name: 'グラフィックスとチップセットのドライバーを入れ直す',
            text: 'ゲーム、動画、画面の滑らかさが悪化したなら、ドライバーが入れ替わった可能性があります。グラフィックス カードのメーカーから最新ドライバーを入手して導入してください。デバイス マネージャーに「Microsoft 基本ディスプレイ アダプター」と出ていれば確定です。',
          },
          {
            name: 'Windows.old フォルダーを削除する',
            text: 'システムが数日安定していれば、設定 > システム > ストレージ > 一時ファイル で「以前の Windows のインストール」にチェックを入れて削除します。通常 10〜30 GB 空きます。',
          },
          {
            name: '配信の最適化を抑える',
            text: '設定 > Windows Update > 詳細オプション > 配信の最適化 で「他の PC からのダウンロードを許可する」をオフにします。これで自分のマシンが他人へ更新をアップロードしなくなります。',
          },
        ],
      },
      sections: [
        {
          title: '更新後に遅くなるのは正常か、どれくらい続くのか',
          content: [
            '大型の Windows 更新はファイルを置き換えるだけではありません。セットアップが終わった後も、数日にわたって続く一連のバックグラウンド処理を始めます。主なものは 3 つ、検索インデックスをゼロから作り直すこと、コンポーネント ストアから古い版を取り除くこと、そして新しい更新ファイルをネットワーク内の他のパソコンへ配布することです。',
            'これらの処理は意図的に低い優先度で動き、マシンがアイドルのときにだけ進みます。一般的なパソコンなら 24〜48 時間で終わります。しかし 1 日数時間だけ使って電源を切るノートパソコンでは、同じ作業が 1 週間に及ぶこともあります。「更新の後 1 週間パソコンが遅かった」という体験が非常に多いのはこのためです。',
            'この期間はマシンの電源を入れたまま放置するのが最速の解決策です。何度も電源を切ったり、すぐに重い作業を始めたりすると、これらの処理が先送りされ遅さが長引きます。つまり最初の 2 日間の正しい答えは設定ではなく、待つことです。',
          ],
        },
        {
          title: 'タスク マネージャーのプロセスは何を意味するのか',
          content: [
            'タスク マネージャー > 詳細 を開き、ディスク列で並べ替えてください。上位に出る名前が状況を直接教えてくれます。`TiWorker.exe`（Windows Modules Installer Worker）はコンポーネントの保守を行うプロセスで、更新後に数時間ディスクを使い続けるのは正常で、終われば自然に止まります。',
            '`MoUsoCoreWorker.exe` は更新セッションを管理するプロセスです。まだ動いているなら更新の一連の処理が完了していません。`SearchIndexer.exe` は検索インデックスを再構築中です。この 3 つはいずれも、介入ではなく待機を意味する名前です。',
            '一方、`System` プロセスやセキュリティ ソフトが常時上位にいる場合は状況が異なります。更新後にフル スキャンが始まった可能性があります。ウイルス対策ソフトのスキャン履歴を見れば確認できます。スキャンが終われば負荷は下がります。下がらないなら、スキャンが原因ではありません。',
          ],
        },
        {
          title: 'ドライバー: 更新が静かに巻き戻したもの',
          content: [
            'これが自然には直らない最も一般的な問題です。大型更新は、メーカーが導入したグラフィックス、チップセット、オーディオのドライバーを Microsoft の汎用版に置き換えてしまうことがあります。システムは動きますが性能は落ちます。ゲームのフレームレートが下がり、動画再生がカクつき、画面のアニメーションまで滑らかさを失います。',
            '確認は簡単です。デバイス マネージャーを開き「ディスプレイ アダプター」を見てください。「Microsoft 基本ディスプレイ アダプター」と表示されていれば、本来のドライバーは失われています。グラフィックス カードのメーカーから最新ドライバーを入手して導入すれば完全に解決します。',
            '同じ確認をチップセットについても行ってください。マザーボード メーカーのチップセット ドライバー パッケージは、更新によって乱れた電源管理やストレージ コントローラーの設定を元に戻します。特にノートパソコンで更新後にバッテリー持ちが短くなった場合、原因はたいていこれです。',
          ],
        },
        {
          title: '1 週間経っても遅い場合',
          content: [
            '1 週間経って改善がなければ「更新が落ち着いている最中」という説明はもう通用せず、確認すべき場所は 3 つです。1 つ目はディスクの空き容量です。更新は 10〜30 GB の `Windows.old` フォルダーを残します。もともと空きが少なければ使用率は 90% を超え、SSD の書き込み速度が目に見えて落ちます。システムが安定していれば 設定 > システム > ストレージ からこのフォルダーを削除してください。',
            '2 つ目はスタートアップ プログラムです。一部の更新は、以前に無効化したスタートアップ項目を再び有効にします。タスク マネージャー > スタートアップ アプリ を開いて一覧を見直し、覚えのない項目をオフにしてください。',
            '3 つ目は検索インデックスの破損です。`SearchIndexer.exe` が何週間も動いているのに検索が何も返さないなら、インデックスが不整合で手動の再構築が必要です。この 3 つを確認しても遅さが残るなら、原因は更新ではありません。ドライブの健康状態、メモリ不足、他のバックグラウンド ソフトを調べてください。',
          ],
        },
      ],
      faq: [
        {
          question: '更新を元に戻せば遅さは解消しますか。',
          answer:
            'めったに解消しません。復元できる期間はたいてい 10 日で、元に戻すと同じバックグラウンド処理が再び始まるため、短期的にはさらに遅くなります。ドライバーが原因なら、元に戻すのではなく正しいドライバーを入れることが解決策です。',
        },
        {
          question: 'Windows.old フォルダーを削除しても安全ですか。',
          answer:
            'システムが数日問題なく動いているなら安全です。このフォルダーは以前の Windows に戻せるようにするためのもので、いずれにせよ Windows が 10 日後に自動削除します。削除後は以前のバージョンに戻せなくなる点にご注意ください。',
        },
        {
          question: 'DISM でコンポーネント ストアを整理すべきですか。',
          answer:
            'システムが安定してからなら `DISM /Online /Cleanup-Image /StartComponentCleanup` で容量が空きます。`/ResetBase` を付けるとさらに空きますが、インストール済みの更新をアンインストールできなくなります。すべて正常に動作していると確信できるときにだけ使ってください。',
        },
        {
          question: '毎回の更新で同じことが起きますか。',
          answer:
            '毎月のセキュリティ更新では通常この現象は起きません。長引く遅さは年に 1〜2 回の大型機能更新に特有のものです。',
        },
      ],
      verdict: [
        '更新後の遅さの大半は故障ではなく、完了を待っているバックグラウンド作業です。多くの場合、マシンを 24〜48 時間電源を入れたままアイドルにしておけば十分です。自然には直らないものは 2 つ、置き換えられたドライバーと `Windows.old` で埋まったディスクです。',
        '2 つ目に対処するついでに、他に何がたまっているかも確認する価値があります。Disk Mop の「ディスク解析」モジュールはシステムフォルダーを含めてドライブをサイズ順に並べ、「スタートアップ管理」は更新が再び有効にした項目を示し、「ディスク健康状態」モジュールはドライブが本当に消耗しているかを教えてくれます。',
      ],
      ctaText: '更新後にディスクに何がたまったか確認する',
    },
  },
};
