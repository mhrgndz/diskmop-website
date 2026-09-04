import type { Article } from '../types';

export const systemRestorePointsTakingSpace: Article = {
  slug: 'system-restore-points-taking-space',
  type: 'guide',
  category: 'Windows',
  date: '2026-09-04',
  updated: '2026-09-04',
  readingTime: 7,
  content: {
    tr: {
      title: 'Sistem Geri Yükleme Noktaları Ne Kadar Yer Kaplıyor? Sınırını Ayarlama',
      metaDescription:
        'Sistem Koruması varsayılan olarak diskinizin %10\'una kadarını geri yükleme noktalarına ayırabilir. vssadmin ile gerçek kullanımı ölçme ve ayrılan alanı güvenle küçültme.',
      subtitle: 'Diskin Yüzde Onunu Sessizce Rezerve Eden Özellik',
      intro: [
        'Kısa cevap: Sistem geri yükleme noktaları gölge kopya (Volume Shadow Copy) olarak saklanır ve Windows bunlar için diskin belirli bir yüzdesini ayırır. Ne kadar kullanıldığını yönetici komut isteminde `vssadmin list shadowstorage` komutuyla görürsünüz; ayrılan sınırı ise Sistem Özellikleri > Sistem Koruması > Yapılandır penceresindeki kaydırıcıdan değiştirirsiniz. Küçük bir SSD\'de bu ayarı %10\'dan %3-5\'e çekmek 20-50 GB kazandırabilir ve koruma özelliğini kapatmaz; yalnızca daha az sayıda geri yükleme noktası saklanır. Aynı pencerede "Sil" düğmesi mevcut tüm noktaları temizler — bu hemen yer açar ama o ana kadarki geri dönüş imkânını da ortadan kaldırır.',
        'Bu alan Gezgin\'de hiç görünmez: klasör boyutu hesaplayan hiçbir araç gölge kopyaları saymaz. Bu yüzden "diskimde 40 GB\'lık bir boşluk var ama neyin kapladığını bulamıyorum" durumunun en sık gözden kaçan sebeplerinden biridir.',
      ],
      keyTakeaways: [
        'Geri yükleme noktaları gölge kopya olarak saklanır ve Gezgin\'de görünmez; klasör boyutu ölçen araçlar onları saymaz.',
        'Gerçek kullanımı `vssadmin list shadowstorage` komutu gösterir: kullanılan, ayrılan ve azami alan ayrı ayrı listelenir.',
        'Sınır Sistem Özellikleri > Sistem Koruması > Yapılandır penceresindeki kaydırıcıdan değiştirilir; küçük SSD\'lerde %3-5 makul bir hedeftir.',
        'Sınırı düşürmek koruma özelliğini kapatmaz; yalnızca daha az geri yükleme noktası saklanır, en eskiler otomatik silinir.',
        'Aynı penceredeki "Sil" düğmesi tüm noktaları anında temizler ama o ana kadarki geri dönüş imkânını da yok eder.',
        'Sistem Korumasını tamamen kapatmak en çok yeri açar ama sürücü bozulduğunda geri dönebileceğiniz bir nokta kalmaz.',
      ],
      dataTable: {
        caption: 'Gölge kopya alanı: seçenekler ve sonuçları',
        columns: ['İşlem', 'Kazanılan alan', 'Koruma üzerindeki etkisi', 'Ne zaman doğru'],
        rows: [
          ['Sınırı %10\'dan %5\'e düşürmek', 'Orta — genelde 10-30 GB', 'Daha az nokta saklanır, koruma sürer', 'Çoğu kullanıcı için en dengeli'],
          ['Sınırı %3\'e düşürmek', 'Yüksek', 'Genelde yalnız 1-2 nokta kalır', '256 GB ve altı SSD\'ler'],
          ['Mevcut noktaları silmek', 'Anında ve yüksek', 'Geçmişe dönüş imkânı sıfırlanır', 'Sistem sağlıklıyken, acil yer gerektiğinde'],
          ['Sistem Korumasını kapatmak', 'En yüksek', 'Geri yükleme noktası hiç oluşturulmaz', 'Düzenli imaj yedeği alanlar'],
          ['Hiçbir şey yapmamak', 'Yok', 'Tam koruma', 'Diski geniş olanlar'],
        ],
      },
      howTo: {
        name: 'Geri yükleme noktalarının kapladığı alanı ölçme ve sınırlama',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Gerçek kullanımı ölçün',
            text: 'Yönetici komut isteminde `vssadmin list shadowstorage` komutunu çalıştırın. Çıktıda "Kullanılan Gölge Kopya Depolama alanı", "Ayrılan" ve "Azami" değerleri ayrı ayrı görünür. İlk satır o an gerçekten kaplanan yerdir.',
          },
          {
            name: 'Kaç nokta olduğuna bakın',
            text: 'Aynı pencerede `vssadmin list shadows` komutu tüm gölge kopyaları tarihleriyle listeler. Sayı beklediğinizden fazlaysa yer kullanımının sebebi budur.',
          },
          {
            name: 'Sınırı ayarlayın',
            text: 'Windows + R ile `sysdm.cpl` çalıştırıp Sistem Koruması sekmesine geçin. C sürücüsünü seçip Yapılandır düğmesine tıklayın. "Azami Kullanım" kaydırıcısını küçük bir SSD\'de %3-5 aralığına çekin.',
          },
          {
            name: 'Gerekirse mevcut noktaları temizleyin',
            text: 'Aynı pencerenin altındaki Sil düğmesi o sürücüdeki tüm geri yükleme noktalarını kaldırır. Bunu yalnızca sistem düzgün çalışıyorken ve acil alana ihtiyacınız varken yapın.',
          },
          {
            name: 'Yeni bir nokta oluşturun',
            text: 'Temizlikten sonra aynı sekmedeki Oluştur düğmesiyle güncel bir geri yükleme noktası alın. Böylece hem alan kazanmış hem de bir güvenlik ağı bırakmış olursunuz.',
          },
        ],
      },
      sections: [
        {
          title: 'Geri Yükleme Noktaları Nerede Saklanıyor?',
          content: [
            'Windows bir geri yükleme noktası oluşturduğunda dosyaları normal bir klasöre kopyalamaz. Bunun yerine Birim Gölge Kopyası (Volume Shadow Copy) hizmetini kullanarak sürücünün o anki durumunun bir anlık görüntüsünü alır ve sonraki değişiklikleri blok düzeyinde kaydeder. Bu veri `System Volume Information` klasörü altında tutulur; klasör hem gizlidir hem de yönetici olsanız bile normal yollarla açılamaz.',
            'Sonuç şudur: hiçbir klasör boyutu hesaplayan araç bu alanı doğru gösteremez. Gezgin\'de sürücüye sağ tıklayıp Özellikler dediğinizde "kullanılan alan" içinde sayılır ama hangi klasörün kapladığı görünmez. Disk analiz araçlarında da genellikle açıklanamayan bir fark olarak belirir.',
            'Ne kadar yer kaplandığı Windows sürümüne ve ayara göre değişir. Varsayılan sınır genellikle sürücü kapasitesinin %3 ila %10\'u arasındadır; 512 GB\'lık bir SSD\'de bu 15-50 GB demektir. Sistem güncellemeleri, sürücü kurulumları ve program yüklemeleri otomatik nokta oluşturduğu için bu alan zamanla dolar.',
          ],
        },
        {
          title: 'Ne Kadarını Kullandığınızı Nasıl Ölçersiniz?',
          content: [
            'Tek güvenilir yol `vssadmin` aracıdır. Yönetici komut isteminde `vssadmin list shadowstorage` yazın. Çıktıda üç değer görürsünüz: kullanılan gölge kopya depolama alanı, ayrılan alan ve azami alan. Birincisi şu anda gerçekten dolu olan yerdir; üçüncüsü ise Windows\'un en fazla ne kadarını kullanabileceğidir.',
            '`vssadmin list shadows` komutu ise mevcut tüm anlık görüntüleri oluşturulma tarihleriyle listeler. Burada beklediğinizden çok daha fazla girdi görmek yaygındır; her Windows güncellemesi, her sürücü kurulumu ve bazı programların kurulumu kendi noktasını oluşturur.',
            'Bu iki komut aynı zamanda sorunun geri yükleme noktalarından mı yoksa başka bir şeyden mi kaynaklandığını kesinleştirir. Kullanılan alan birkaç yüz megabayt çıkıyorsa diskinizi dolduran başka bir şeydir ve bu ayarla uğraşmanın anlamı yoktur.',
          ],
        },
        {
          title: 'Sınırı Düşürmek mi, Noktaları Silmek mi?',
          content: [
            'İkisi farklı şeylerdir ve çoğu durumda doğru olan birincisidir. Sınırı düşürdüğünüzde Windows yeni sınırın üstündeki en eski noktaları otomatik siler, ama koruma çalışmaya devam eder ve yeni noktalar oluşturulur. Bu, güvenlik ağını korurken alanın büyük kısmını geri kazanmanın yoludur.',
            'Ayarı `sysdm.cpl` > Sistem Koruması > Yapılandır penceresinde bulursunuz. "Azami Kullanım" kaydırıcısı yüzde olarak çalışır. 256 GB ve altındaki SSD\'lerde %3-5 makul bir hedeftir; bu genellikle bir veya iki noktaya yer bırakır ki çoğu senaryo için yeterlidir. 1 TB ve üzeri disklerde varsayılanı değiştirmeye gerek yoktur.',
            'Aynı penceredeki Sil düğmesi ise mevcut tüm noktaları anında kaldırır ve en büyük anlık kazancı verir. Ama bedeli nettir: o ana kadar geri dönebileceğiniz hiçbir nokta kalmaz. Bunu yalnızca sistem düzgün çalışıyorken yapın ve hemen ardından Oluştur düğmesiyle yeni bir nokta alın.',
          ],
        },
        {
          title: 'Sistem Korumasını Tamamen Kapatmalı mı?',
          content: [
            'Kapatmak en çok yeri açar ve bazı durumlarda savunulabilir bir tercihtir: düzenli olarak tam sistem imajı alıyorsanız, ya da makineyi zaten sık sık sıfırdan kuruyorsanız geri yükleme noktalarının size kattığı fazla bir şey yoktur.',
            'Ama çoğu kullanıcı için bu kötü bir takas olur. Geri yükleme noktalarının asıl işe yaradığı an, bozuk bir sürücü güncellemesi veya kötü bir program kurulumu sonrası sistemin açılmaz hâle gelmesidir. O anda tek tıkla birkaç gün öncesine dönebilmek, makineyi baştan kurmakla arasındaki farktır. Kapatırsanız o seçenek tamamen ortadan kalkar.',
            'Dengeli yaklaşım şudur: korumayı açık bırakın, sınırı diskinizin boyutuna göre ayarlayın ve asıl yer sorununu başka yerde çözün. Aynı makinede genellikle `C:\\Windows\\Installer`, bileşen deposu `WinSxS`, eski kullanıcı profilleri ve arama indeksi de onlarca gigabayt tutar. Disk Mop\'un Disk Analizi ve Disk Haritası modülleri bu kalemleri gizli klasörler dâhil boyut sırasına dizerek hangisiyle uğraşmanın gerçekten değdiğini gösterir.',
          ],
        },
      ],
      faq: [
        {
          question: 'Geri yükleme noktalarını silersem dosyalarım gider mi?',
          answer:
            'Hayır. Geri yükleme noktaları sistem dosyalarını, kayıt defterini ve program kurulumlarını kapsar; Belgeler, Resimler gibi kişisel dosyalarınıza dokunmaz. Noktaları silmek yalnızca geçmişe dönme imkânını kaldırır, mevcut dosyalarınızı etkilemez.',
        },
        {
          question: 'Disk Temizleme bu alanı temizler mi?',
          answer:
            'Kısmen. Disk Temizleme > Sistem dosyalarını temizle > Diğer Seçenekler sekmesinde "Sistem Geri Yükleme ve Gölge Kopyalar" bölümü vardır ve en yeni hariç tüm noktaları siler. Ayrılan sınırı değiştirmez, o yüzden alan zamanla yeniden dolar.',
        },
        {
          question: 'Neden geri yükleme noktalarım kendiliğinden kayboluyor?',
          answer:
            'Ayrılan alan dolduğunda Windows en eski noktaları otomatik siler. Sınır düşükse yalnızca bir veya iki nokta saklanabilir. Ayrıca bazı disk temizleme işlemleri ve sürücü değişiklikleri de noktaları geçersiz kılabilir.',
        },
        {
          question: 'Sınırı sıfıra çekebilir miyim?',
          answer:
            'Kaydırıcı sıfıra indirildiğinde Sistem Koruması fiilen kapanır ve Windows uyarı verir. Korumayı kapatmak istiyorsanız zaten aynı penceredeki "Sistem korumasını devre dışı bırak" seçeneği daha açık bir tercihtir.',
        },
      ],
      verdict: [
        'Sistem geri yükleme noktaları Gezgin\'de hiç görünmediği için diski dolduran en çok gözden kaçan kalemdir. Doğru hamle onları toptan silmek değil, `vssadmin list shadowstorage` ile gerçek kullanımı ölçüp sınırı diskinizin boyutuna göre ayarlamaktır — küçük bir SSD\'de %5, geniş bir diskte varsayılan.',
        'Aynı makinede benzer biçimde gizli duran diğer kalemleri görmek için Disk Mop\'un Disk Analizi modülü sistem klasörleri dâhil sürücüyü boyut sırasına dizer; Disk Haritası görünümü de aynı veriyi tek bakışta okunur hâle getirir.',
      ],
      ctaText: 'Diskinizde görünmeyen alanı nerede kaybettiğinizi bulun',
    },
    en: {
      title: 'How Much Space Do System Restore Points Use? Setting the Limit',
      metaDescription:
        'System Protection can reserve up to 10% of your drive for restore points. How to measure real usage with vssadmin and safely reduce the space set aside.',
      subtitle: 'The Feature That Quietly Reserves a Tenth of Your Disk',
      intro: [
        'Short answer: system restore points are stored as Volume Shadow Copies, and Windows reserves a percentage of the drive for them. You can see how much is actually used by running `vssadmin list shadowstorage` in an elevated command prompt, and change the reserved limit with the slider under System Properties > System Protection > Configure. On a small SSD, dropping that setting from 10% to 3-5% can reclaim 20-50 GB without turning protection off; it simply keeps fewer restore points. The Delete button in the same window clears every existing point — that frees space immediately but also removes your ability to roll back to any earlier state.',
        'This space never appears in Explorer: no folder-size tool counts shadow copies. That makes it one of the most overlooked causes of "there is a 40 GB hole on my disk and I cannot find what is using it".',
      ],
      keyTakeaways: [
        'Restore points are stored as shadow copies and are invisible in Explorer; folder-size tools do not count them.',
        '`vssadmin list shadowstorage` shows real usage: used, allocated and maximum space are listed separately.',
        'The limit is set with the slider under System Properties > System Protection > Configure; 3-5% is a reasonable target on a small SSD.',
        'Lowering the limit does not disable protection; it just keeps fewer restore points, deleting the oldest automatically.',
        'The Delete button in the same window clears all points instantly but removes your ability to roll back to anything earlier.',
        'Turning System Protection off entirely frees the most space but leaves no point to return to when a driver breaks the system.',
      ],
      dataTable: {
        caption: 'Shadow copy space: options and consequences',
        columns: ['Action', 'Space reclaimed', 'Effect on protection', 'When it is right'],
        rows: [
          ['Lower the limit from 10% to 5%', 'Moderate — usually 10-30 GB', 'Fewer points kept, protection continues', 'The best balance for most people'],
          ['Lower the limit to 3%', 'High', 'Usually only 1-2 points survive', 'SSDs of 256 GB and below'],
          ['Delete existing points', 'Immediate and large', 'Rollback history reset to zero', 'When the system is healthy and space is urgent'],
          ['Turn System Protection off', 'The most', 'No restore points created at all', 'People taking regular image backups'],
          ['Do nothing', 'None', 'Full protection', 'People with a roomy drive'],
        ],
      },
      howTo: {
        name: 'Measure and limit the space used by restore points',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Measure actual usage',
            text: 'In an elevated command prompt run `vssadmin list shadowstorage`. The output shows "Used Shadow Copy Storage space", "Allocated" and "Maximum" separately. The first line is what is genuinely occupied right now.',
          },
          {
            name: 'See how many points exist',
            text: 'In the same window, `vssadmin list shadows` lists every shadow copy with its creation date. If there are more than you expected, that explains the space.',
          },
          {
            name: 'Set the limit',
            text: 'Press Windows + R, run `sysdm.cpl` and open the System Protection tab. Select drive C and click Configure. Drag the "Max Usage" slider down to 3-5% on a small SSD.',
          },
          {
            name: 'Clear existing points if needed',
            text: 'The Delete button at the bottom of that window removes every restore point on the drive. Only do this while the system is working properly and you urgently need the space.',
          },
          {
            name: 'Create a fresh point',
            text: 'After clearing, use the Create button on the same tab to take a current restore point. That way you reclaim space and still leave yourself a safety net.',
          },
        ],
      },
      sections: [
        {
          title: 'Where Are Restore Points Stored?',
          content: [
            'When Windows creates a restore point it does not copy files into an ordinary folder. Instead it uses the Volume Shadow Copy service to take a snapshot of the drive\'s current state and then records subsequent changes at block level. That data lives under the `System Volume Information` folder, which is both hidden and not openable by normal means even as an administrator.',
            'The consequence is that no folder-size tool can report this space correctly. Right-click the drive in Explorer and choose Properties and it counts within "used space", but no folder appears to account for it. In disk analysis tools it usually surfaces as an unexplained discrepancy.',
            'How much is used depends on the Windows version and the setting. The default limit is typically between 3% and 10% of drive capacity; on a 512 GB SSD that is 15-50 GB. Because system updates, driver installations and program setups all create automatic points, that space fills over time.',
          ],
        },
        {
          title: 'How Do You Measure What Is Being Used?',
          content: [
            'The only reliable route is the `vssadmin` tool. In an elevated command prompt, type `vssadmin list shadowstorage`. The output gives three values: used shadow copy storage space, allocated space and maximum space. The first is what is genuinely occupied right now; the third is the most Windows is allowed to take.',
            '`vssadmin list shadows` lists every existing snapshot with its creation date. It is common to see far more entries than expected; every Windows update, every driver installation and some program setups create their own point.',
            'These two commands also settle whether restore points are the cause at all. If used space comes back as a few hundred megabytes, something else is filling your disk and there is no point fiddling with this setting.',
          ],
        },
        {
          title: 'Lower the Limit, or Delete the Points?',
          content: [
            'These are different actions, and in most cases the first is the right one. When you lower the limit, Windows automatically deletes the oldest points above the new ceiling while protection keeps working and new points continue to be created. That is how you reclaim most of the space while keeping the safety net.',
            'You find the setting under `sysdm.cpl` > System Protection > Configure. The "Max Usage" slider works in percent. On SSDs of 256 GB and below, 3-5% is a reasonable target; that usually leaves room for one or two points, which covers most scenarios. On drives of 1 TB and above there is no need to change the default.',
            'The Delete button in the same window removes every existing point at once and gives the biggest immediate gain. But the cost is clear: no point remains that you could roll back to. Only do this while the system is behaving, and take a fresh point with the Create button immediately afterwards.',
          ],
        },
        {
          title: 'Should You Turn System Protection Off Entirely?',
          content: [
            'Turning it off frees the most space and is a defensible choice in some situations: if you take regular full system images, or you reinstall the machine from scratch often anyway, restore points add little for you.',
            'For most people, though, it is a bad trade. The moment restore points genuinely earn their keep is when a broken driver update or a bad program installation leaves the system unbootable. Being able to roll back a few days with one click is the difference between that and reinstalling the machine. Turn protection off and that option disappears entirely.',
            'The balanced approach is to leave protection on, set the limit according to the size of your drive, and solve the real space problem elsewhere. The same machine usually also carries tens of gigabytes in `C:\\Windows\\Installer`, the `WinSxS` component store, old user profiles and the search index. Disk Mop\'s Disk Analysis and Disk Treemap modules sort those items by size including hidden folders, showing which one is genuinely worth your time.',
          ],
        },
      ],
      faq: [
        {
          question: 'If I delete restore points, do I lose my files?',
          answer:
            'No. Restore points cover system files, the registry and program installations; they do not touch personal files such as Documents or Pictures. Deleting points only removes the ability to roll back — your current files are unaffected.',
        },
        {
          question: 'Does Disk Cleanup clear this space?',
          answer:
            'Partly. Under Disk Cleanup > Clean up system files > More Options there is a "System Restore and Shadow Copies" section that deletes all but the most recent point. It does not change the reserved limit, so the space fills up again over time.',
        },
        {
          question: 'Why do my restore points disappear on their own?',
          answer:
            'When the allocated space fills up, Windows automatically deletes the oldest points. If the limit is low, only one or two points may be kept. Certain disk cleanup operations and drive changes can also invalidate points.',
        },
        {
          question: 'Can I set the limit to zero?',
          answer:
            'Dragging the slider to zero effectively disables System Protection and Windows warns you about it. If you do want protection off, the explicit "Disable system protection" option in the same window is the clearer choice.',
        },
      ],
      verdict: [
        'System restore points are the most overlooked disk consumer precisely because they never appear in Explorer. The right move is not to wipe them but to measure real usage with `vssadmin list shadowstorage` and set the limit according to your drive size — 5% on a small SSD, the default on a roomy one.',
        'To see the other items hiding in the same way on the same machine, Disk Mop\'s Disk Analysis module sorts the drive by size including system folders, and the Disk Treemap view makes the same data readable at a glance.',
      ],
      ctaText: 'Find where the invisible space on your disk went',
    },
    de: {
      title: 'Wie viel Platz belegen Systemwiederherstellungspunkte? Das Limit einstellen',
      metaDescription:
        'Der Computerschutz kann bis zu 10 % des Laufwerks für Wiederherstellungspunkte reservieren. So messen Sie die echte Nutzung mit vssadmin und verkleinern den reservierten Bereich gefahrlos.',
      subtitle: 'Die Funktion, die still ein Zehntel der Platte reserviert',
      intro: [
        'Kurze Antwort: Systemwiederherstellungspunkte werden als Schattenkopien (Volume Shadow Copy) gespeichert, und Windows reserviert dafür einen Prozentsatz des Laufwerks. Wie viel tatsächlich belegt ist, zeigt `vssadmin list shadowstorage` in einer Eingabeaufforderung als Administrator; das reservierte Limit ändern Sie mit dem Schieberegler unter Systemeigenschaften > Computerschutz > Konfigurieren. Auf einer kleinen SSD bringt die Senkung von 10 % auf 3-5 % oft 20-50 GB zurück, ohne den Schutz abzuschalten — es werden lediglich weniger Wiederherstellungspunkte aufbewahrt. Die Schaltfläche Löschen im selben Fenster entfernt alle vorhandenen Punkte: Das schafft sofort Platz, nimmt Ihnen aber die Möglichkeit, auf einen früheren Zustand zurückzugehen.',
        'Dieser Bereich taucht im Explorer nie auf: Kein Werkzeug, das Ordnergrößen berechnet, zählt Schattenkopien mit. Damit gehört er zu den am häufigsten übersehenen Ursachen für "auf meiner Platte fehlen 40 GB und ich finde nicht, wodurch".',
      ],
      keyTakeaways: [
        'Wiederherstellungspunkte werden als Schattenkopien gespeichert und sind im Explorer unsichtbar; Werkzeuge für Ordnergrößen zählen sie nicht.',
        '`vssadmin list shadowstorage` zeigt die echte Nutzung: belegter, zugewiesener und maximaler Bereich werden getrennt aufgeführt.',
        'Das Limit stellen Sie mit dem Schieberegler unter Systemeigenschaften > Computerschutz > Konfigurieren ein; auf kleinen SSDs sind 3-5 % ein sinnvolles Ziel.',
        'Ein niedrigeres Limit schaltet den Schutz nicht ab; es werden nur weniger Punkte aufbewahrt, die ältesten fallen automatisch weg.',
        'Die Schaltfläche Löschen im selben Fenster räumt alle Punkte sofort ab, nimmt aber jede Rückkehrmöglichkeit.',
        'Den Computerschutz ganz abzuschalten bringt am meisten Platz, lässt aber keinen Punkt übrig, wenn ein Treiber das System zerstört.',
      ],
      dataTable: {
        caption: 'Schattenkopie-Speicher: Optionen und Folgen',
        columns: ['Maßnahme', 'Gewonnener Platz', 'Auswirkung auf den Schutz', 'Wann sinnvoll'],
        rows: [
          ['Limit von 10 % auf 5 % senken', 'Mittel — meist 10-30 GB', 'Weniger Punkte, Schutz bleibt aktiv', 'Beste Balance für die meisten'],
          ['Limit auf 3 % senken', 'Hoch', 'Meist bleiben nur 1-2 Punkte', 'SSDs mit 256 GB und weniger'],
          ['Vorhandene Punkte löschen', 'Sofort und viel', 'Rückkehrverlauf auf null', 'Wenn das System gesund ist und Platz dringend fehlt'],
          ['Computerschutz abschalten', 'Am meisten', 'Es entstehen gar keine Punkte mehr', 'Wer regelmäßig Systemabbilder erstellt'],
          ['Nichts tun', 'Keiner', 'Voller Schutz', 'Wer eine große Platte hat'],
        ],
      },
      howTo: {
        name: 'Den Platzbedarf von Wiederherstellungspunkten messen und begrenzen',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Die tatsächliche Nutzung messen',
            text: 'Führen Sie in einer Eingabeaufforderung als Administrator `vssadmin list shadowstorage` aus. Die Ausgabe zeigt "Verwendeter Schattenkopie-Speicherplatz", "Zugewiesener" und "Maximaler" getrennt. Die erste Zeile ist der aktuell tatsächlich belegte Platz.',
          },
          {
            name: 'Die Anzahl der Punkte prüfen',
            text: 'Im selben Fenster listet `vssadmin list shadows` alle Schattenkopien mit Erstellungsdatum auf. Sind es mehr als erwartet, erklärt das den Platzbedarf.',
          },
          {
            name: 'Das Limit einstellen',
            text: 'Drücken Sie Windows + R, führen Sie `sysdm.cpl` aus und öffnen Sie die Registerkarte Computerschutz. Wählen Sie Laufwerk C und klicken Sie auf Konfigurieren. Ziehen Sie den Regler "Max. Speicherplatzbelegung" auf einer kleinen SSD auf 3-5 %.',
          },
          {
            name: 'Bei Bedarf vorhandene Punkte löschen',
            text: 'Die Schaltfläche Löschen unten in diesem Fenster entfernt alle Wiederherstellungspunkte des Laufwerks. Tun Sie das nur, wenn das System einwandfrei läuft und Sie den Platz dringend brauchen.',
          },
          {
            name: 'Einen frischen Punkt anlegen',
            text: 'Erstellen Sie nach dem Aufräumen über die Schaltfläche Erstellen auf derselben Registerkarte einen aktuellen Wiederherstellungspunkt. So gewinnen Sie Platz und behalten ein Sicherheitsnetz.',
          },
        ],
      },
      sections: [
        {
          title: 'Wo werden Wiederherstellungspunkte gespeichert?',
          content: [
            'Legt Windows einen Wiederherstellungspunkt an, kopiert es keine Dateien in einen gewöhnlichen Ordner. Stattdessen erstellt der Volumeschattenkopie-Dienst eine Momentaufnahme des aktuellen Laufwerkszustands und protokolliert anschließende Änderungen auf Blockebene. Diese Daten liegen im Ordner `System Volume Information`, der versteckt ist und sich selbst als Administrator nicht auf normalem Weg öffnen lässt.',
            'Die Folge: Kein Werkzeug für Ordnergrößen kann diesen Bereich korrekt ausweisen. Klicken Sie im Explorer mit der rechten Maustaste auf das Laufwerk und wählen Eigenschaften, zählt er zum "belegten Speicher", doch kein Ordner erklärt ihn. In Analysewerkzeugen erscheint er meist als unerklärliche Differenz.',
            'Wie viel belegt wird, hängt von Windows-Version und Einstellung ab. Das Standardlimit liegt typischerweise zwischen 3 % und 10 % der Laufwerkskapazität; auf einer 512-GB-SSD sind das 15-50 GB. Da Systemupdates, Treiberinstallationen und Programminstallationen automatisch Punkte anlegen, füllt sich dieser Bereich mit der Zeit.',
          ],
        },
        {
          title: 'Wie misst man die tatsächliche Nutzung?',
          content: [
            'Der einzige verlässliche Weg ist das Werkzeug `vssadmin`. Geben Sie in einer Eingabeaufforderung als Administrator `vssadmin list shadowstorage` ein. Die Ausgabe liefert drei Werte: verwendeter Schattenkopie-Speicher, zugewiesener Speicher und maximaler Speicher. Der erste ist der aktuell tatsächlich belegte, der dritte die Obergrenze, die Windows nutzen darf.',
            '`vssadmin list shadows` listet alle vorhandenen Momentaufnahmen mit Erstellungsdatum auf. Häufig sind es weit mehr Einträge als erwartet; jedes Windows-Update, jede Treiberinstallation und manche Programminstallation legt einen eigenen Punkt an.',
            'Diese beiden Befehle klären zugleich, ob Wiederherstellungspunkte überhaupt die Ursache sind. Zeigt der belegte Speicher nur ein paar hundert Megabyte, füllt etwas anderes Ihre Platte und es lohnt nicht, an dieser Einstellung zu drehen.',
          ],
        },
        {
          title: 'Limit senken oder Punkte löschen?',
          content: [
            'Das sind zwei verschiedene Dinge, und meist ist das Erste richtig. Beim Senken des Limits löscht Windows automatisch die ältesten Punkte oberhalb der neuen Grenze, während der Schutz weiterläuft und neue Punkte entstehen. So gewinnen Sie den Großteil des Platzes zurück und behalten das Sicherheitsnetz.',
            'Die Einstellung finden Sie unter `sysdm.cpl` > Computerschutz > Konfigurieren. Der Regler "Max. Speicherplatzbelegung" arbeitet in Prozent. Auf SSDs mit 256 GB und weniger sind 3-5 % ein sinnvolles Ziel; das lässt meist Raum für ein bis zwei Punkte, was für die meisten Fälle genügt. Bei Laufwerken ab 1 TB besteht kein Anlass, den Standard zu ändern.',
            'Die Schaltfläche Löschen im selben Fenster entfernt alle vorhandenen Punkte auf einen Schlag und bringt den größten Sofortgewinn. Der Preis ist eindeutig: Es bleibt kein Punkt, auf den Sie zurückgehen könnten. Tun Sie das nur bei einwandfrei laufendem System und legen Sie sofort danach über Erstellen einen frischen Punkt an.',
          ],
        },
        {
          title: 'Sollte man den Computerschutz ganz abschalten?',
          content: [
            'Abschalten bringt am meisten Platz und ist in manchen Situationen vertretbar: Wer regelmäßig vollständige Systemabbilder erstellt oder die Maschine ohnehin häufig neu aufsetzt, hat von Wiederherstellungspunkten wenig.',
            'Für die meisten ist es jedoch ein schlechter Tausch. Der Moment, in dem Wiederherstellungspunkte sich wirklich auszahlen, ist ein fehlerhaftes Treiberupdate oder eine schlechte Programminstallation, nach der das System nicht mehr startet. Mit einem Klick ein paar Tage zurückzugehen, ist dann der Unterschied zum kompletten Neuaufsetzen. Ohne Schutz entfällt diese Möglichkeit vollständig.',
            'Der ausgewogene Weg: Schutz aktiv lassen, das Limit an die Laufwerksgröße anpassen und das eigentliche Platzproblem woanders lösen. Auf derselben Maschine belegen üblicherweise auch `C:\\Windows\\Installer`, der Komponentenspeicher `WinSxS`, alte Benutzerprofile und der Suchindex zig Gigabyte. Die Module Festplattenanalyse und Disk Treemap von Disk Mop sortieren diese Posten samt versteckter Ordner nach Größe und zeigen, welcher die Mühe wirklich lohnt.',
          ],
        },
      ],
      faq: [
        {
          question: 'Verliere ich meine Dateien, wenn ich Wiederherstellungspunkte lösche?',
          answer:
            'Nein. Wiederherstellungspunkte umfassen Systemdateien, die Registry und Programminstallationen; persönliche Dateien wie Dokumente oder Bilder bleiben unberührt. Das Löschen nimmt nur die Möglichkeit zur Rückkehr, Ihre aktuellen Dateien bleiben.',
        },
        {
          question: 'Räumt die Datenträgerbereinigung diesen Bereich auf?',
          answer:
            'Teilweise. Unter Datenträgerbereinigung > Systemdateien bereinigen > Weitere Optionen gibt es den Abschnitt "Systemwiederherstellung und Schattenkopien", der alle bis auf den neuesten Punkt löscht. Das reservierte Limit bleibt unverändert, der Bereich füllt sich also wieder.',
        },
        {
          question: 'Warum verschwinden meine Wiederherstellungspunkte von selbst?',
          answer:
            'Ist der zugewiesene Bereich voll, löscht Windows automatisch die ältesten Punkte. Bei niedrigem Limit bleiben vielleicht nur ein oder zwei erhalten. Auch manche Bereinigungsvorgänge und Laufwerksänderungen können Punkte ungültig machen.',
        },
        {
          question: 'Kann ich das Limit auf null setzen?',
          answer:
            'Zieht man den Regler auf null, ist der Computerschutz faktisch deaktiviert, und Windows warnt davor. Wenn Sie den Schutz wirklich abschalten wollen, ist die ausdrückliche Option "Computerschutz deaktivieren" im selben Fenster die klarere Wahl.',
        },
      ],
      verdict: [
        'Systemwiederherstellungspunkte sind der am häufigsten übersehene Platzfresser, gerade weil sie im Explorer nie erscheinen. Der richtige Schritt ist nicht, sie pauschal zu löschen, sondern mit `vssadmin list shadowstorage` die echte Nutzung zu messen und das Limit an die Laufwerksgröße anzupassen — 5 % auf einer kleinen SSD, der Standard auf einer großen.',
        'Um die übrigen, ähnlich versteckten Posten derselben Maschine zu sehen, sortiert das Modul Festplattenanalyse von Disk Mop das Laufwerk samt Systemordnern nach Größe, und die Ansicht Disk Treemap macht dieselben Daten auf einen Blick lesbar.',
      ],
      ctaText: 'Finden Sie, wo der unsichtbare Platz auf Ihrer Platte geblieben ist',
    },
    fr: {
      title: 'Quel espace occupent les points de restauration système ? Régler la limite',
      metaDescription:
        'La protection du système peut réserver jusqu\'à 10 % du disque aux points de restauration. Mesurer l\'usage réel avec vssadmin et réduire sans risque l\'espace réservé.',
      subtitle: 'La fonction qui réserve discrètement un dixième du disque',
      intro: [
        'Réponse courte : les points de restauration système sont stockés sous forme de clichés instantanés (Volume Shadow Copy), et Windows leur réserve un pourcentage du disque. Pour connaître l\'usage réel, exécutez `vssadmin list shadowstorage` dans une invite de commandes administrateur ; pour changer la limite réservée, utilisez le curseur sous Propriétés système > Protection du système > Configurer. Sur un petit SSD, passer ce réglage de 10 % à 3-5 % peut récupérer 20 à 50 Go sans désactiver la protection : simplement, moins de points sont conservés. Le bouton Supprimer de la même fenêtre efface tous les points existants — cela libère de l\'espace immédiatement, mais vous prive de toute possibilité de revenir en arrière.',
        'Cet espace n\'apparaît jamais dans l\'Explorateur : aucun outil de taille de dossiers ne compte les clichés instantanés. C\'est donc l\'une des causes les plus négligées du « il manque 40 Go sur mon disque et je ne trouve pas pourquoi ».',
      ],
      keyTakeaways: [
        'Les points de restauration sont des clichés instantanés, invisibles dans l\'Explorateur ; les outils de taille de dossiers ne les comptent pas.',
        '`vssadmin list shadowstorage` donne l\'usage réel : espace utilisé, alloué et maximal sont listés séparément.',
        'La limite se règle avec le curseur sous Propriétés système > Protection du système > Configurer ; 3-5 % est raisonnable sur un petit SSD.',
        'Baisser la limite ne désactive pas la protection ; simplement moins de points sont gardés, les plus anciens étant supprimés automatiquement.',
        'Le bouton Supprimer de la même fenêtre efface tous les points d\'un coup, mais retire toute possibilité de retour en arrière.',
        'Désactiver totalement la protection libère le plus d\'espace mais ne laisse aucun point si un pilote casse le système.',
      ],
      dataTable: {
        caption: 'Espace des clichés instantanés : options et conséquences',
        columns: ['Action', 'Espace récupéré', 'Effet sur la protection', 'Quand c\'est pertinent'],
        rows: [
          ['Baisser la limite de 10 % à 5 %', 'Moyen — souvent 10 à 30 Go', 'Moins de points, protection maintenue', 'Le meilleur équilibre pour la plupart'],
          ['Baisser la limite à 3 %', 'Élevé', 'Souvent seuls 1-2 points subsistent', 'SSD de 256 Go et moins'],
          ['Supprimer les points existants', 'Immédiat et important', 'Historique de retour remis à zéro', 'Système sain, besoin urgent d\'espace'],
          ['Désactiver la protection du système', 'Maximal', 'Plus aucun point n\'est créé', 'Ceux qui font des images système régulières'],
          ['Ne rien faire', 'Aucun', 'Protection complète', 'Ceux qui ont un disque spacieux'],
        ],
      },
      howTo: {
        name: 'Mesurer et limiter l\'espace des points de restauration',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Mesurer l\'usage réel',
            text: 'Dans une invite de commandes administrateur, exécutez `vssadmin list shadowstorage`. La sortie indique séparément « Espace de stockage des clichés instantanés utilisé », « alloué » et « maximal ». La première ligne correspond à ce qui est réellement occupé.',
          },
          {
            name: 'Voir combien de points existent',
            text: 'Dans la même fenêtre, `vssadmin list shadows` liste tous les clichés avec leur date de création. S\'ils sont plus nombreux que prévu, cela explique l\'espace consommé.',
          },
          {
            name: 'Régler la limite',
            text: 'Appuyez sur Windows + R, exécutez `sysdm.cpl` et ouvrez l\'onglet Protection du système. Sélectionnez le disque C et cliquez Configurer. Ramenez le curseur « Utilisation max. » à 3-5 % sur un petit SSD.',
          },
          {
            name: 'Supprimer les points existants si nécessaire',
            text: 'Le bouton Supprimer en bas de cette fenêtre retire tous les points de restauration du disque. Ne le faites que si le système fonctionne correctement et que l\'espace est urgent.',
          },
          {
            name: 'Créer un point récent',
            text: 'Après le nettoyage, utilisez le bouton Créer du même onglet pour prendre un point de restauration à jour. Vous récupérez ainsi de l\'espace tout en gardant un filet de sécurité.',
          },
        ],
      },
      sections: [
        {
          title: 'Où sont stockés les points de restauration ?',
          content: [
            'Quand Windows crée un point de restauration, il ne copie pas des fichiers dans un dossier ordinaire. Il utilise le service de cliché instantané de volume pour prendre un instantané de l\'état du disque, puis enregistre les modifications suivantes au niveau des blocs. Ces données résident dans le dossier `System Volume Information`, à la fois masqué et impossible à ouvrir par les voies normales, même en administrateur.',
            'Conséquence : aucun outil de taille de dossiers ne peut rendre compte correctement de cet espace. Un clic droit sur le disque puis Propriétés le compte dans « espace utilisé », mais aucun dossier ne l\'explique. Dans les outils d\'analyse, il apparaît généralement comme un écart inexpliqué.',
            'La quantité dépend de la version de Windows et du réglage. La limite par défaut se situe généralement entre 3 % et 10 % de la capacité ; sur un SSD de 512 Go, cela fait 15 à 50 Go. Comme les mises à jour système, les installations de pilotes et de programmes créent des points automatiques, cet espace se remplit avec le temps.',
          ],
        },
        {
          title: 'Comment mesurer ce qui est réellement utilisé ?',
          content: [
            'La seule voie fiable est l\'outil `vssadmin`. Dans une invite de commandes administrateur, tapez `vssadmin list shadowstorage`. La sortie fournit trois valeurs : espace de clichés utilisé, espace alloué et espace maximal. Le premier correspond à ce qui est réellement occupé ; le troisième au plafond que Windows peut atteindre.',
            '`vssadmin list shadows` liste tous les instantanés existants avec leur date de création. Il est courant d\'y voir bien plus d\'entrées que prévu : chaque mise à jour Windows, chaque installation de pilote et certaines installations de programmes créent leur propre point.',
            'Ces deux commandes tranchent aussi la question de savoir si les points de restauration sont bien en cause. Si l\'espace utilisé ne fait que quelques centaines de mégaoctets, autre chose remplit votre disque et il est inutile de toucher à ce réglage.',
          ],
        },
        {
          title: 'Baisser la limite ou supprimer les points ?',
          content: [
            'Ce sont deux choses différentes, et dans la plupart des cas la première est la bonne. En baissant la limite, Windows supprime automatiquement les points les plus anciens au-delà du nouveau plafond, tandis que la protection continue et que de nouveaux points sont créés. C\'est ainsi qu\'on récupère l\'essentiel de l\'espace tout en gardant le filet de sécurité.',
            'Le réglage se trouve sous `sysdm.cpl` > Protection du système > Configurer. Le curseur « Utilisation max. » fonctionne en pourcentage. Sur les SSD de 256 Go et moins, 3-5 % est un objectif raisonnable ; cela laisse en général la place pour un ou deux points, ce qui couvre la plupart des cas. Sur des disques de 1 To et plus, inutile de modifier la valeur par défaut.',
            'Le bouton Supprimer de la même fenêtre retire tous les points existants d\'un coup et offre le plus grand gain immédiat. Mais le coût est clair : plus aucun point vers lequel revenir. Ne le faites que sur un système qui fonctionne, et prenez aussitôt un nouveau point avec le bouton Créer.',
          ],
        },
        {
          title: 'Faut-il désactiver complètement la protection du système ?',
          content: [
            'La désactiver libère le plus d\'espace et se défend dans certains cas : si vous réalisez régulièrement des images système complètes, ou si vous réinstallez souvent la machine de toute façon, les points de restauration vous apportent peu.',
            'Pour la plupart des gens, c\'est cependant un mauvais échange. Le moment où les points de restauration prouvent leur valeur, c\'est quand une mise à jour de pilote défectueuse ou une mauvaise installation rend le système inamorçable. Pouvoir revenir quelques jours en arrière d\'un clic fait la différence avec une réinstallation complète. Désactivez la protection et cette option disparaît entièrement.',
            'L\'approche équilibrée : laisser la protection active, régler la limite selon la taille du disque, et régler le vrai problème d\'espace ailleurs. La même machine porte généralement aussi des dizaines de gigaoctets dans `C:\\Windows\\Installer`, le magasin de composants `WinSxS`, d\'anciens profils utilisateur et l\'index de recherche. Les modules Analyse de disque et Disk Treemap de Disk Mop trient ces postes par taille, dossiers masqués compris, et montrent lequel mérite vraiment votre temps.',
          ],
        },
      ],
      faq: [
        {
          question: 'Si je supprime les points de restauration, est-ce que je perds mes fichiers ?',
          answer:
            'Non. Les points de restauration couvrent les fichiers système, le registre et les installations de programmes ; ils ne touchent pas aux fichiers personnels comme Documents ou Images. Les supprimer retire seulement la possibilité de revenir en arrière.',
        },
        {
          question: 'Le Nettoyage de disque libère-t-il cet espace ?',
          answer:
            'En partie. Sous Nettoyage de disque > Nettoyer les fichiers système > Autres options, la section « Restauration du système et clichés instantanés » supprime tous les points sauf le plus récent. Elle ne change pas la limite réservée, l\'espace se remplit donc à nouveau.',
        },
        {
          question: 'Pourquoi mes points de restauration disparaissent-ils tout seuls ?',
          answer:
            'Quand l\'espace alloué est plein, Windows supprime automatiquement les points les plus anciens. Si la limite est basse, un ou deux points seulement peuvent être conservés. Certaines opérations de nettoyage et modifications de disque peuvent aussi invalider des points.',
        },
        {
          question: 'Puis-je mettre la limite à zéro ?',
          answer:
            'Amener le curseur à zéro désactive de fait la protection du système, et Windows vous en avertit. Si vous voulez vraiment couper la protection, l\'option explicite « Désactiver la protection du système » de la même fenêtre est plus claire.',
        },
      ],
      verdict: [
        'Les points de restauration système sont le poste le plus négligé précisément parce qu\'ils n\'apparaissent jamais dans l\'Explorateur. La bonne démarche n\'est pas de tout effacer mais de mesurer l\'usage réel avec `vssadmin list shadowstorage` et de régler la limite selon la taille du disque — 5 % sur un petit SSD, la valeur par défaut sur un grand.',
        'Pour voir les autres postes qui se cachent de la même façon sur la même machine, le module Analyse de disque de Disk Mop trie le lecteur par taille, dossiers système compris, et la vue Disk Treemap rend les mêmes données lisibles d\'un coup d\'œil.',
      ],
      ctaText: 'Trouvez où est passé l\'espace invisible de votre disque',
    },
    es: {
      title: '¿Cuánto espacio ocupan los puntos de restauración del sistema? Ajustar el límite',
      metaDescription:
        'La protección del sistema puede reservar hasta el 10 % del disco para puntos de restauración. Cómo medir el uso real con vssadmin y reducir con seguridad el espacio reservado.',
      subtitle: 'La función que reserva en silencio una décima parte del disco',
      intro: [
        'Respuesta corta: los puntos de restauración del sistema se guardan como instantáneas de volumen (Volume Shadow Copy) y Windows les reserva un porcentaje del disco. Puedes ver cuánto se usa realmente ejecutando `vssadmin list shadowstorage` en un símbolo del sistema como administrador, y cambiar el límite reservado con el control deslizante en Propiedades del sistema > Protección del sistema > Configurar. En un SSD pequeño, bajar ese ajuste del 10 % al 3-5 % puede recuperar 20-50 GB sin desactivar la protección; simplemente se conservan menos puntos. El botón Eliminar de esa misma ventana borra todos los puntos existentes: libera espacio al instante, pero también elimina la posibilidad de volver a un estado anterior.',
        'Ese espacio no aparece nunca en el Explorador: ninguna herramienta de tamaño de carpetas cuenta las instantáneas. Por eso es una de las causas más pasadas por alto del «me faltan 40 GB en el disco y no encuentro qué los ocupa».',
      ],
      keyTakeaways: [
        'Los puntos de restauración se guardan como instantáneas y son invisibles en el Explorador; las herramientas de tamaño de carpetas no los cuentan.',
        '`vssadmin list shadowstorage` muestra el uso real: espacio usado, asignado y máximo aparecen por separado.',
        'El límite se ajusta con el control deslizante en Propiedades del sistema > Protección del sistema > Configurar; 3-5 % es razonable en un SSD pequeño.',
        'Bajar el límite no desactiva la protección; solo se conservan menos puntos y los más antiguos se borran automáticamente.',
        'El botón Eliminar de esa ventana borra todos los puntos al instante, pero quita cualquier posibilidad de volver atrás.',
        'Desactivar la protección del sistema libera más espacio pero no deja ningún punto al que volver si un controlador rompe el sistema.',
      ],
      dataTable: {
        caption: 'Espacio de instantáneas: opciones y consecuencias',
        columns: ['Acción', 'Espacio recuperado', 'Efecto en la protección', 'Cuándo es adecuado'],
        rows: [
          ['Bajar el límite del 10 % al 5 %', 'Medio — normalmente 10-30 GB', 'Menos puntos, la protección sigue', 'El mejor equilibrio para la mayoría'],
          ['Bajar el límite al 3 %', 'Alto', 'Suelen quedar solo 1-2 puntos', 'SSD de 256 GB o menos'],
          ['Eliminar los puntos existentes', 'Inmediato y grande', 'El historial de reversión queda a cero', 'Sistema sano y necesidad urgente de espacio'],
          ['Desactivar la protección del sistema', 'El máximo', 'No se crea ningún punto', 'Quien hace imágenes del sistema con regularidad'],
          ['No hacer nada', 'Ninguno', 'Protección completa', 'Quien tiene un disco amplio'],
        ],
      },
      howTo: {
        name: 'Medir y limitar el espacio de los puntos de restauración',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Medir el uso real',
            text: 'En un símbolo del sistema como administrador ejecuta `vssadmin list shadowstorage`. La salida muestra por separado «Espacio de almacenamiento de instantáneas usado», «asignado» y «máximo». La primera línea es lo que está ocupado ahora mismo.',
          },
          {
            name: 'Ver cuántos puntos hay',
            text: 'En la misma ventana, `vssadmin list shadows` lista todas las instantáneas con su fecha de creación. Si hay más de las esperadas, ahí está la explicación del espacio.',
          },
          {
            name: 'Ajustar el límite',
            text: 'Pulsa Windows + R, ejecuta `sysdm.cpl` y abre la pestaña Protección del sistema. Selecciona la unidad C y pulsa Configurar. Baja el control «Uso máximo» al 3-5 % en un SSD pequeño.',
          },
          {
            name: 'Eliminar los puntos existentes si hace falta',
            text: 'El botón Eliminar de la parte inferior de esa ventana quita todos los puntos de restauración de la unidad. Hazlo solo si el sistema funciona bien y necesitas el espacio con urgencia.',
          },
          {
            name: 'Crear un punto nuevo',
            text: 'Tras limpiar, usa el botón Crear de esa misma pestaña para tomar un punto de restauración actual. Así recuperas espacio y te dejas una red de seguridad.',
          },
        ],
      },
      sections: [
        {
          title: '¿Dónde se guardan los puntos de restauración?',
          content: [
            'Cuando Windows crea un punto de restauración no copia archivos a una carpeta normal. Usa el servicio de instantáneas de volumen para tomar una foto del estado actual de la unidad y luego registra los cambios posteriores a nivel de bloque. Esos datos viven en la carpeta `System Volume Information`, que está oculta y no se puede abrir por vías normales ni siendo administrador.',
            'La consecuencia es que ninguna herramienta de tamaño de carpetas puede reflejar bien ese espacio. Si haces clic derecho en la unidad y abres Propiedades, cuenta dentro del «espacio usado», pero ninguna carpeta lo explica. En las herramientas de análisis suele aparecer como una diferencia inexplicable.',
            'Cuánto se ocupa depende de la versión de Windows y del ajuste. El límite predeterminado suele estar entre el 3 % y el 10 % de la capacidad; en un SSD de 512 GB eso son 15-50 GB. Como las actualizaciones del sistema, las instalaciones de controladores y de programas crean puntos automáticos, ese espacio se llena con el tiempo.',
          ],
        },
        {
          title: '¿Cómo se mide lo que realmente se usa?',
          content: [
            'La única vía fiable es la herramienta `vssadmin`. En un símbolo del sistema como administrador escribe `vssadmin list shadowstorage`. La salida da tres valores: espacio de instantáneas usado, espacio asignado y espacio máximo. El primero es lo que está realmente ocupado ahora; el tercero es el techo que Windows puede alcanzar.',
            '`vssadmin list shadows` enumera todas las instantáneas existentes con su fecha de creación. Es habitual ver muchas más entradas de las esperadas: cada actualización de Windows, cada instalación de controlador y algunas instalaciones de programas crean su propio punto.',
            'Estos dos comandos también zanjan si los puntos de restauración son realmente la causa. Si el espacio usado sale en unos cientos de megabytes, es otra cosa la que llena el disco y no tiene sentido tocar este ajuste.',
          ],
        },
        {
          title: '¿Bajar el límite o borrar los puntos?',
          content: [
            'Son cosas distintas y, en la mayoría de casos, lo correcto es lo primero. Al bajar el límite, Windows borra automáticamente los puntos más antiguos por encima del nuevo techo mientras la protección sigue funcionando y se crean puntos nuevos. Así recuperas la mayor parte del espacio y conservas la red de seguridad.',
            'El ajuste está en `sysdm.cpl` > Protección del sistema > Configurar. El control «Uso máximo» funciona en porcentaje. En SSD de 256 GB o menos, un 3-5 % es un objetivo razonable; eso suele dejar sitio para uno o dos puntos, suficiente para casi todos los escenarios. En discos de 1 TB o más no hace falta cambiar el valor por defecto.',
            'El botón Eliminar de esa ventana quita todos los puntos de golpe y da la mayor ganancia inmediata. Pero el coste es claro: no queda ningún punto al que volver. Hazlo solo con el sistema funcionando bien y toma enseguida un punto nuevo con el botón Crear.',
          ],
        },
        {
          title: '¿Conviene desactivar del todo la protección del sistema?',
          content: [
            'Desactivarla libera el máximo espacio y es defendible en algunas situaciones: si haces imágenes completas del sistema con regularidad, o si de todos modos reinstalas la máquina a menudo, los puntos de restauración te aportan poco.',
            'Para la mayoría, sin embargo, es un mal cambio. El momento en que los puntos de restauración se ganan su sitio es cuando una actualización de controlador defectuosa o una instalación mala dejan el sistema sin arrancar. Poder retroceder unos días con un clic marca la diferencia frente a reinstalar. Si desactivas la protección, esa opción desaparece por completo.',
            'El enfoque equilibrado es dejar la protección activa, ajustar el límite al tamaño del disco y resolver el problema real de espacio en otro sitio. La misma máquina suele llevar además decenas de gigabytes en `C:\\Windows\\Installer`, el almacén de componentes `WinSxS`, perfiles de usuario antiguos y el índice de búsqueda. Los módulos Análisis de disco y Disk Treemap de Disk Mop ordenan esos elementos por tamaño incluidas las carpetas ocultas y muestran cuál merece de verdad tu tiempo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Si borro los puntos de restauración, ¿pierdo mis archivos?',
          answer:
            'No. Los puntos de restauración cubren archivos del sistema, el registro e instalaciones de programas; no tocan archivos personales como Documentos o Imágenes. Borrarlos solo quita la posibilidad de volver atrás.',
        },
        {
          question: '¿El Liberador de espacio limpia esta zona?',
          answer:
            'En parte. En Liberador de espacio > Limpiar archivos de sistema > Más opciones hay una sección «Restaurar sistema e instantáneas» que borra todos los puntos salvo el más reciente. No cambia el límite reservado, así que el espacio vuelve a llenarse con el tiempo.',
        },
        {
          question: '¿Por qué desaparecen solos mis puntos de restauración?',
          answer:
            'Cuando el espacio asignado se llena, Windows borra automáticamente los más antiguos. Si el límite es bajo, puede que solo se conserven uno o dos. Además, ciertas operaciones de limpieza y cambios de unidad pueden invalidar puntos.',
        },
        {
          question: '¿Puedo poner el límite a cero?',
          answer:
            'Llevar el control a cero desactiva de hecho la protección del sistema y Windows lo advierte. Si de verdad quieres desactivarla, la opción explícita «Deshabilitar protección del sistema» de esa misma ventana es más clara.',
        },
      ],
      verdict: [
        'Los puntos de restauración del sistema son el consumidor de disco más pasado por alto justo porque nunca aparecen en el Explorador. Lo correcto no es borrarlos todos sino medir el uso real con `vssadmin list shadowstorage` y ajustar el límite al tamaño de la unidad: 5 % en un SSD pequeño, el valor por defecto en uno amplio.',
        'Para ver los otros elementos que se esconden igual en la misma máquina, el módulo Análisis de disco de Disk Mop ordena la unidad por tamaño incluidas las carpetas de sistema, y la vista Disk Treemap hace legibles esos mismos datos de un vistazo.',
      ],
      ctaText: 'Encuentra dónde se fue el espacio invisible de tu disco',
    },
    it: {
      title: 'Quanto spazio occupano i punti di ripristino del sistema? Impostare il limite',
      metaDescription:
        'La protezione del sistema può riservare fino al 10% del disco ai punti di ripristino. Come misurare l\'uso reale con vssadmin e ridurre in sicurezza lo spazio riservato.',
      subtitle: 'La funzione che riserva in silenzio un decimo del disco',
      intro: [
        'Risposta breve: i punti di ripristino del sistema sono salvati come copie shadow (Volume Shadow Copy) e Windows riserva loro una percentuale del disco. Quanto sia effettivamente usato lo vedi eseguendo `vssadmin list shadowstorage` in un prompt dei comandi come amministratore; il limite riservato si cambia con il dispositivo di scorrimento in Proprietà del sistema > Protezione sistema > Configura. Su un SSD piccolo, portare quell\'impostazione dal 10% al 3-5% può recuperare 20-50 GB senza disattivare la protezione: semplicemente vengono conservati meno punti. Il pulsante Elimina nella stessa finestra cancella tutti i punti esistenti — libera spazio subito, ma toglie anche la possibilità di tornare a uno stato precedente.',
        'Questo spazio non compare mai in Esplora file: nessuno strumento che misura le dimensioni delle cartelle conta le copie shadow. È quindi una delle cause più trascurate del «mi mancano 40 GB sul disco e non trovo cosa li occupa».',
      ],
      keyTakeaways: [
        'I punti di ripristino sono salvati come copie shadow e sono invisibili in Esplora file; gli strumenti per le dimensioni delle cartelle non li contano.',
        '`vssadmin list shadowstorage` mostra l\'uso reale: spazio usato, allocato e massimo sono elencati separatamente.',
        'Il limite si imposta con il cursore in Proprietà del sistema > Protezione sistema > Configura; 3-5% è un obiettivo ragionevole su un SSD piccolo.',
        'Abbassare il limite non disattiva la protezione; vengono solo conservati meno punti, i più vecchi eliminati automaticamente.',
        'Il pulsante Elimina nella stessa finestra cancella tutti i punti all\'istante, ma toglie ogni possibilità di tornare indietro.',
        'Disattivare del tutto la Protezione sistema libera più spazio, ma non lascia alcun punto a cui tornare se un driver rompe il sistema.',
      ],
      dataTable: {
        caption: 'Spazio delle copie shadow: opzioni e conseguenze',
        columns: ['Azione', 'Spazio recuperato', 'Effetto sulla protezione', 'Quando è giusto'],
        rows: [
          ['Abbassare il limite dal 10% al 5%', 'Medio — di solito 10-30 GB', 'Meno punti, la protezione continua', 'Il miglior equilibrio per la maggior parte'],
          ['Abbassare il limite al 3%', 'Alto', 'Di solito restano solo 1-2 punti', 'SSD da 256 GB in giù'],
          ['Eliminare i punti esistenti', 'Immediato e ampio', 'Cronologia di ripristino azzerata', 'Sistema sano e bisogno urgente di spazio'],
          ['Disattivare la Protezione sistema', 'Il massimo', 'Non viene creato alcun punto', 'Chi fa immagini di sistema regolari'],
          ['Non fare nulla', 'Nessuno', 'Protezione completa', 'Chi ha un disco capiente'],
        ],
      },
      howTo: {
        name: 'Misurare e limitare lo spazio dei punti di ripristino',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Misurare l\'uso reale',
            text: 'In un prompt dei comandi come amministratore esegui `vssadmin list shadowstorage`. L\'output mostra separatamente «Spazio di archiviazione copie shadow utilizzato», «allocato» e «massimo». La prima riga è ciò che è davvero occupato ora.',
          },
          {
            name: 'Vedere quanti punti esistono',
            text: 'Nella stessa finestra, `vssadmin list shadows` elenca tutte le copie shadow con la data di creazione. Se sono più del previsto, ecco la spiegazione dello spazio.',
          },
          {
            name: 'Impostare il limite',
            text: 'Premi Windows + R, esegui `sysdm.cpl` e apri la scheda Protezione sistema. Seleziona l\'unità C e fai clic su Configura. Porta il cursore «Utilizzo massimo» al 3-5% su un SSD piccolo.',
          },
          {
            name: 'Eliminare i punti esistenti se serve',
            text: 'Il pulsante Elimina in basso in quella finestra rimuove tutti i punti di ripristino dell\'unità. Fallo solo se il sistema funziona correttamente e ti serve spazio con urgenza.',
          },
          {
            name: 'Creare un punto nuovo',
            text: 'Dopo la pulizia usa il pulsante Crea nella stessa scheda per prendere un punto di ripristino aggiornato. Così recuperi spazio e ti lasci comunque una rete di sicurezza.',
          },
        ],
      },
      sections: [
        {
          title: 'Dove sono conservati i punti di ripristino?',
          content: [
            'Quando Windows crea un punto di ripristino non copia file in una cartella normale. Usa il servizio Copia shadow del volume per scattare un\'istantanea dello stato corrente dell\'unità e poi registra le modifiche successive a livello di blocco. Quei dati risiedono nella cartella `System Volume Information`, che è nascosta e non apribile per vie normali nemmeno da amministratore.',
            'La conseguenza è che nessuno strumento basato sulle dimensioni delle cartelle può rendere conto correttamente di questo spazio. Facendo clic destro sull\'unità e aprendo Proprietà, esso rientra nello «spazio utilizzato», ma nessuna cartella lo giustifica. Negli strumenti di analisi appare di solito come una differenza inspiegabile.',
            'Quanto venga occupato dipende dalla versione di Windows e dall\'impostazione. Il limite predefinito è tipicamente tra il 3% e il 10% della capacità; su un SSD da 512 GB significa 15-50 GB. Poiché aggiornamenti di sistema, installazioni di driver e di programmi creano punti automatici, quello spazio si riempie col tempo.',
          ],
        },
        {
          title: 'Come si misura quanto viene realmente usato?',
          content: [
            'L\'unica via affidabile è lo strumento `vssadmin`. In un prompt dei comandi come amministratore digita `vssadmin list shadowstorage`. L\'output fornisce tre valori: spazio copie shadow utilizzato, spazio allocato e spazio massimo. Il primo è ciò che è realmente occupato adesso; il terzo è il tetto che Windows può raggiungere.',
            '`vssadmin list shadows` elenca tutte le istantanee esistenti con la data di creazione. È comune vederne molte più del previsto: ogni aggiornamento di Windows, ogni installazione di driver e alcune installazioni di programmi creano un proprio punto.',
            'Questi due comandi chiariscono anche se i punti di ripristino siano davvero la causa. Se lo spazio usato risulta di qualche centinaio di megabyte, a riempire il disco è altro e non ha senso mettere mano a questa impostazione.',
          ],
        },
        {
          title: 'Abbassare il limite o eliminare i punti?',
          content: [
            'Sono due cose diverse e nella maggior parte dei casi la prima è quella giusta. Abbassando il limite, Windows elimina automaticamente i punti più vecchi oltre il nuovo tetto mentre la protezione continua a funzionare e nuovi punti vengono creati. È così che si recupera gran parte dello spazio mantenendo la rete di sicurezza.',
            'L\'impostazione si trova in `sysdm.cpl` > Protezione sistema > Configura. Il cursore «Utilizzo massimo» lavora in percentuale. Su SSD da 256 GB in giù, 3-5% è un obiettivo ragionevole: di solito lascia spazio per uno o due punti, sufficiente per quasi tutti gli scenari. Su dischi da 1 TB in su non serve modificare il valore predefinito.',
            'Il pulsante Elimina nella stessa finestra rimuove tutti i punti esistenti in un colpo e dà il maggior guadagno immediato. Ma il costo è chiaro: non resta alcun punto a cui tornare. Fallo solo con il sistema in salute e prendi subito dopo un punto nuovo con il pulsante Crea.',
          ],
        },
        {
          title: 'Conviene disattivare del tutto la Protezione sistema?',
          content: [
            'Disattivarla libera il massimo spazio ed è una scelta difendibile in alcune situazioni: se fai regolarmente immagini complete del sistema, o se comunque reinstalli spesso la macchina, i punti di ripristino ti aggiungono poco.',
            'Per la maggior parte delle persone, però, è un cattivo scambio. Il momento in cui i punti di ripristino si guadagnano davvero il posto è quando un aggiornamento di driver difettoso o una cattiva installazione lasciano il sistema che non si avvia. Poter tornare indietro di qualche giorno con un clic fa la differenza rispetto a reinstallare tutto. Disattivando la protezione quell\'opzione sparisce del tutto.',
            'L\'approccio equilibrato è lasciare la protezione attiva, impostare il limite in base alla dimensione del disco e risolvere altrove il vero problema di spazio. La stessa macchina di solito porta anche decine di gigabyte in `C:\\Windows\\Installer`, nell\'archivio componenti `WinSxS`, nei vecchi profili utente e nell\'indice di ricerca. I moduli Analisi disco e Disk Treemap di Disk Mop ordinano queste voci per dimensione incluse le cartelle nascoste e mostrano quale meriti davvero il tuo tempo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Se elimino i punti di ripristino perdo i miei file?',
          answer:
            'No. I punti di ripristino riguardano file di sistema, registro e installazioni di programmi; non toccano i file personali come Documenti o Immagini. Eliminarli toglie solo la possibilità di tornare indietro.',
        },
        {
          question: 'Pulizia disco libera questo spazio?',
          answer:
            'In parte. In Pulizia disco > Pulizia file di sistema > Altre opzioni c\'è una sezione «Ripristino configurazione di sistema e copie shadow» che elimina tutti i punti tranne il più recente. Non cambia il limite riservato, quindi lo spazio si riempie di nuovo col tempo.',
        },
        {
          question: 'Perché i miei punti di ripristino spariscono da soli?',
          answer:
            'Quando lo spazio allocato si riempie, Windows elimina automaticamente i più vecchi. Con un limite basso possono restarne solo uno o due. Anche alcune operazioni di pulizia e modifiche all\'unità possono invalidare i punti.',
        },
        {
          question: 'Posso portare il limite a zero?',
          answer:
            'Portare il cursore a zero disattiva di fatto la Protezione sistema e Windows lo segnala. Se vuoi davvero disattivarla, l\'opzione esplicita «Disattiva protezione sistema» nella stessa finestra è la scelta più chiara.',
        },
      ],
      verdict: [
        'I punti di ripristino del sistema sono il consumatore di disco più trascurato proprio perché non compaiono mai in Esplora file. La mossa giusta non è cancellarli in blocco ma misurare l\'uso reale con `vssadmin list shadowstorage` e impostare il limite in base alla dimensione del disco: 5% su un SSD piccolo, il valore predefinito su uno capiente.',
        'Per vedere le altre voci che si nascondono allo stesso modo sulla stessa macchina, il modulo Analisi disco di Disk Mop ordina l\'unità per dimensione incluse le cartelle di sistema, e la vista Disk Treemap rende gli stessi dati leggibili a colpo d\'occhio.',
      ],
      ctaText: 'Scopri dove è finito lo spazio invisibile del tuo disco',
    },
    pt: {
      title: 'Quanto espaço os pontos de restauração do sistema ocupam? Ajustando o limite',
      metaDescription:
        'A Proteção do Sistema pode reservar até 10% do disco para pontos de restauração. Como medir o uso real com vssadmin e reduzir com segurança o espaço reservado.',
      subtitle: 'O recurso que reserva silenciosamente um décimo do disco',
      intro: [
        'Resposta curta: os pontos de restauração do sistema são guardados como cópias de sombra (Volume Shadow Copy), e o Windows reserva para eles uma porcentagem do disco. Dá para ver quanto está realmente em uso executando `vssadmin list shadowstorage` num prompt de comando como administrador, e mudar o limite reservado no controle deslizante em Propriedades do Sistema > Proteção do Sistema > Configurar. Num SSD pequeno, baixar esse ajuste de 10% para 3-5% pode recuperar 20-50 GB sem desligar a proteção; simplesmente menos pontos são mantidos. O botão Excluir dessa mesma janela apaga todos os pontos existentes — libera espaço na hora, mas também tira a possibilidade de voltar a um estado anterior.',
        'Esse espaço nunca aparece no Explorador: nenhuma ferramenta de tamanho de pasta conta cópias de sombra. Por isso é uma das causas mais esquecidas do «faltam 40 GB no meu disco e não acho o que está ocupando».',
      ],
      keyTakeaways: [
        'Pontos de restauração são guardados como cópias de sombra e são invisíveis no Explorador; ferramentas de tamanho de pasta não os contam.',
        '`vssadmin list shadowstorage` mostra o uso real: espaço usado, alocado e máximo aparecem separadamente.',
        'O limite é ajustado no controle deslizante em Propriedades do Sistema > Proteção do Sistema > Configurar; 3-5% é razoável num SSD pequeno.',
        'Baixar o limite não desliga a proteção; apenas menos pontos são mantidos, e os mais antigos são apagados automaticamente.',
        'O botão Excluir dessa janela apaga todos os pontos na hora, mas tira qualquer possibilidade de voltar atrás.',
        'Desligar a Proteção do Sistema por completo libera mais espaço, mas não deixa nenhum ponto para voltar se um driver quebrar o sistema.',
      ],
      dataTable: {
        caption: 'Espaço de cópias de sombra: opções e consequências',
        columns: ['Ação', 'Espaço recuperado', 'Efeito na proteção', 'Quando faz sentido'],
        rows: [
          ['Baixar o limite de 10% para 5%', 'Médio — em geral 10-30 GB', 'Menos pontos, a proteção continua', 'O melhor equilíbrio para a maioria'],
          ['Baixar o limite para 3%', 'Alto', 'Em geral sobram só 1-2 pontos', 'SSDs de 256 GB ou menos'],
          ['Excluir os pontos existentes', 'Imediato e grande', 'Histórico de reversão zerado', 'Sistema saudável e espaço urgente'],
          ['Desligar a Proteção do Sistema', 'O máximo', 'Nenhum ponto é criado', 'Quem faz imagens do sistema regularmente'],
          ['Não fazer nada', 'Nenhum', 'Proteção completa', 'Quem tem disco folgado'],
        ],
      },
      howTo: {
        name: 'Medir e limitar o espaço dos pontos de restauração',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Medir o uso real',
            text: 'Num prompt de comando como administrador execute `vssadmin list shadowstorage`. A saída mostra separadamente «Espaço de armazenamento de cópia de sombra usado», «alocado» e «máximo». A primeira linha é o que está de fato ocupado agora.',
          },
          {
            name: 'Ver quantos pontos existem',
            text: 'Na mesma janela, `vssadmin list shadows` lista todas as cópias de sombra com a data de criação. Se houver mais do que você esperava, aí está a explicação do espaço.',
          },
          {
            name: 'Ajustar o limite',
            text: 'Pressione Windows + R, execute `sysdm.cpl` e abra a guia Proteção do Sistema. Selecione a unidade C e clique em Configurar. Baixe o controle «Uso Máximo» para 3-5% num SSD pequeno.',
          },
          {
            name: 'Excluir os pontos existentes se preciso',
            text: 'O botão Excluir na parte de baixo dessa janela remove todos os pontos de restauração da unidade. Faça isso só com o sistema funcionando bem e com necessidade urgente de espaço.',
          },
          {
            name: 'Criar um ponto novo',
            text: 'Depois da limpeza, use o botão Criar na mesma guia para tirar um ponto de restauração atual. Assim você recupera espaço e ainda deixa uma rede de segurança.',
          },
        ],
      },
      sections: [
        {
          title: 'Onde ficam os pontos de restauração?',
          content: [
            'Quando o Windows cria um ponto de restauração, ele não copia arquivos para uma pasta comum. Usa o serviço de Cópia de Sombra de Volume para tirar um instantâneo do estado atual da unidade e depois registra as mudanças seguintes em nível de bloco. Esses dados ficam na pasta `System Volume Information`, que é oculta e não pode ser aberta por vias normais nem como administrador.',
            'A consequência é que nenhuma ferramenta de tamanho de pasta consegue mostrar esse espaço corretamente. Clique com o botão direito na unidade e abra Propriedades: ele conta no «espaço usado», mas nenhuma pasta explica de onde vem. Em ferramentas de análise costuma aparecer como uma diferença inexplicada.',
            'O quanto é ocupado depende da versão do Windows e da configuração. O limite padrão fica em geral entre 3% e 10% da capacidade; num SSD de 512 GB isso dá 15-50 GB. Como atualizações do sistema, instalações de drivers e de programas criam pontos automáticos, esse espaço vai enchendo com o tempo.',
          ],
        },
        {
          title: 'Como medir o que está realmente em uso?',
          content: [
            'O único caminho confiável é a ferramenta `vssadmin`. Num prompt de comando como administrador digite `vssadmin list shadowstorage`. A saída traz três valores: espaço de cópias de sombra usado, espaço alocado e espaço máximo. O primeiro é o que está realmente ocupado agora; o terceiro é o teto que o Windows pode usar.',
            '`vssadmin list shadows` lista todos os instantâneos existentes com a data de criação. É comum ver muito mais entradas do que se esperava: cada atualização do Windows, cada instalação de driver e algumas instalações de programas criam o próprio ponto.',
            'Esses dois comandos também resolvem se os pontos de restauração são mesmo a causa. Se o espaço usado der algumas centenas de megabytes, é outra coisa que está enchendo o disco e não adianta mexer nessa configuração.',
          ],
        },
        {
          title: 'Baixar o limite ou apagar os pontos?',
          content: [
            'São coisas diferentes e, na maioria dos casos, a primeira é a certa. Ao baixar o limite, o Windows apaga automaticamente os pontos mais antigos acima do novo teto enquanto a proteção continua funcionando e novos pontos são criados. É assim que se recupera a maior parte do espaço mantendo a rede de segurança.',
            'A configuração está em `sysdm.cpl` > Proteção do Sistema > Configurar. O controle «Uso Máximo» trabalha em porcentagem. Em SSDs de 256 GB ou menos, 3-5% é uma meta razoável; costuma deixar espaço para um ou dois pontos, o que cobre quase todos os cenários. Em discos de 1 TB ou mais não é preciso mudar o padrão.',
            'O botão Excluir dessa janela remove todos os pontos de uma vez e dá o maior ganho imediato. Mas o custo é claro: não sobra nenhum ponto para o qual voltar. Faça isso só com o sistema saudável e tire logo em seguida um ponto novo com o botão Criar.',
          ],
        },
        {
          title: 'Vale desligar a Proteção do Sistema por completo?',
          content: [
            'Desligar libera o máximo de espaço e é uma escolha defensável em algumas situações: se você faz imagens completas do sistema com regularidade, ou se de qualquer forma reinstala a máquina com frequência, os pontos de restauração acrescentam pouco.',
            'Para a maioria, porém, é uma troca ruim. O momento em que os pontos de restauração realmente valem é quando uma atualização de driver defeituosa ou uma instalação ruim deixam o sistema sem iniciar. Poder voltar alguns dias com um clique é a diferença entre isso e reinstalar tudo. Desligue a proteção e essa opção some por completo.',
            'A abordagem equilibrada é deixar a proteção ligada, ajustar o limite ao tamanho do disco e resolver o problema real de espaço em outro lugar. A mesma máquina costuma carregar também dezenas de gigabytes em `C:\\Windows\\Installer`, no armazenamento de componentes `WinSxS`, em perfis de usuário antigos e no índice de busca. Os módulos Análise de disco e Disk Treemap do Disk Mop ordenam esses itens por tamanho incluindo pastas ocultas e mostram qual realmente vale o seu tempo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Se eu apagar os pontos de restauração, perco meus arquivos?',
          answer:
            'Não. Os pontos de restauração cobrem arquivos de sistema, registro e instalações de programas; não tocam em arquivos pessoais como Documentos ou Imagens. Apagá-los só remove a possibilidade de voltar atrás.',
        },
        {
          question: 'A Limpeza de Disco libera esse espaço?',
          answer:
            'Em parte. Em Limpeza de Disco > Limpar arquivos do sistema > Mais Opções há uma seção «Restauração do Sistema e Cópias de Sombra» que apaga todos os pontos menos o mais recente. Ela não muda o limite reservado, então o espaço volta a encher com o tempo.',
        },
        {
          question: 'Por que meus pontos de restauração somem sozinhos?',
          answer:
            'Quando o espaço alocado enche, o Windows apaga automaticamente os mais antigos. Com um limite baixo, talvez só um ou dois sejam mantidos. Além disso, certas operações de limpeza e mudanças na unidade podem invalidar pontos.',
        },
        {
          question: 'Posso colocar o limite em zero?',
          answer:
            'Levar o controle a zero desativa na prática a Proteção do Sistema, e o Windows avisa. Se você realmente quer desligar a proteção, a opção explícita «Desativar proteção do sistema» na mesma janela é a escolha mais clara.',
        },
      ],
      verdict: [
        'Os pontos de restauração do sistema são o consumidor de disco mais esquecido justamente porque nunca aparecem no Explorador. A jogada certa não é apagar tudo, e sim medir o uso real com `vssadmin list shadowstorage` e ajustar o limite ao tamanho da unidade — 5% num SSD pequeno, o padrão num disco folgado.',
        'Para ver os outros itens que se escondem do mesmo jeito na mesma máquina, o módulo Análise de disco do Disk Mop ordena a unidade por tamanho incluindo pastas de sistema, e a visão Disk Treemap deixa os mesmos dados legíveis num relance.',
      ],
      ctaText: 'Descubra para onde foi o espaço invisível do seu disco',
    },
    ja: {
      title: 'システムの復元ポイントはどれだけ容量を使うのか: 上限の設定方法',
      metaDescription:
        'システムの保護はドライブの最大 10% を復元ポイント用に確保することがあります。vssadmin で実際の使用量を測り、確保領域を安全に減らす方法。',
      subtitle: 'ディスクの 1 割を静かに予約している機能',
      intro: [
        '短い答え: システムの復元ポイントはシャドウ コピー（ボリューム シャドウ コピー）として保存され、Windows はそのためにドライブの一定割合を確保します。実際にどれだけ使われているかは、管理者のコマンド プロンプトで `vssadmin list shadowstorage` を実行すると分かります。確保する上限は システムのプロパティ > システムの保護 > 構成 のスライダーで変更します。容量の小さい SSD では、この設定を 10% から 3〜5% に下げるだけで 20〜50 GB を取り戻せることがあり、保護そのものは無効になりません。保持される復元ポイントの数が減るだけです。同じ画面の「削除」ボタンは既存のポイントをすべて消します。すぐに空き容量が増えますが、それ以前の状態に戻す手段も失われます。',
        'この領域はエクスプローラーにはまったく現れません。フォルダーサイズを測るツールはシャドウ コピーを数えないためです。そのため「ディスクの 40 GB が消えているのに原因が見つからない」という状況で最も見落とされる要因の 1 つになっています。',
      ],
      keyTakeaways: [
        '復元ポイントはシャドウ コピーとして保存され、エクスプローラーでは見えません。フォルダーサイズを測るツールも数えません。',
        '`vssadmin list shadowstorage` が実際の使用量を示します。使用領域、割り当て領域、最大領域が別々に表示されます。',
        '上限は システムのプロパティ > システムの保護 > 構成 のスライダーで設定します。小容量の SSD では 3〜5% が妥当な目標です。',
        '上限を下げても保護は無効になりません。保持されるポイントが減り、古いものから自動的に削除されるだけです。',
        '同じ画面の「削除」ボタンは全ポイントを即座に消しますが、過去に戻る手段も同時に失われます。',
        'システムの保護を完全に無効にすると空き容量は最大になりますが、ドライバーがシステムを壊したときに戻る先が残りません。',
      ],
      dataTable: {
        caption: 'シャドウ コピー領域: 選択肢と結果',
        columns: ['操作', '取り戻せる容量', '保護への影響', '適した場面'],
        rows: [
          ['上限を 10% から 5% に下げる', '中程度 — 通常 10〜30 GB', '保持数は減るが保護は継続', '多くの人にとって最もバランスが良い'],
          ['上限を 3% に下げる', '大きい', '通常 1〜2 個しか残らない', '256 GB 以下の SSD'],
          ['既存のポイントを削除', '即時かつ大きい', '復元履歴がゼロになる', 'システムが健全で容量が急ぎのとき'],
          ['システムの保護を無効化', '最大', '復元ポイントが一切作られない', '定期的にシステムイメージを取る人'],
          ['何もしない', 'なし', '完全な保護', 'ディスクに余裕がある人'],
        ],
      },
      howTo: {
        name: '復元ポイントの使用容量を測って制限する',
        totalTime: 'PT10M',
        steps: [
          {
            name: '実際の使用量を測る',
            text: '管理者のコマンド プロンプトで `vssadmin list shadowstorage` を実行します。出力には「使用されているシャドウ コピー記憶域」「割り当てられている」「最大」が別々に表示されます。1 行目が今まさに占有されている容量です。',
          },
          {
            name: 'ポイントの数を確認する',
            text: '同じ画面で `vssadmin list shadows` を実行すると、すべてのシャドウ コピーが作成日時とともに一覧表示されます。想定より多ければ、それが容量の説明になります。',
          },
          {
            name: '上限を設定する',
            text: 'Windows + R で `sysdm.cpl` を実行し、システムの保護タブを開きます。C ドライブを選んで「構成」をクリックします。小容量の SSD では「最大使用量」スライダーを 3〜5% まで下げます。',
          },
          {
            name: '必要なら既存のポイントを削除する',
            text: 'その画面の下にある「削除」ボタンは、そのドライブの復元ポイントをすべて取り除きます。システムが正常に動いていて、容量が急ぎで必要なときにだけ実行してください。',
          },
          {
            name: '新しいポイントを作成する',
            text: '整理後は同じタブの「作成」ボタンで最新の復元ポイントを取得します。これで容量を取り戻しつつ、安全網も残せます。',
          },
        ],
      },
      sections: [
        {
          title: '復元ポイントはどこに保存されているのか',
          content: [
            'Windows が復元ポイントを作成するとき、ファイルを普通のフォルダーにコピーするわけではありません。ボリューム シャドウ コピー サービスを使ってドライブの現在の状態のスナップショットを取り、以後の変更をブロック単位で記録します。このデータは `System Volume Information` フォルダーに置かれ、隠し属性が付いているうえ、管理者であっても通常の方法では開けません。',
            'その結果、フォルダーサイズを測るツールではこの領域を正しく示せません。エクスプローラーでドライブを右クリックしてプロパティを開くと「使用領域」には含まれますが、それを説明するフォルダーは見つかりません。ディスク解析ツールでは、たいてい説明のつかない差分として現れます。',
            'どれだけ使われるかは Windows のバージョンと設定によります。既定の上限は通常ドライブ容量の 3〜10% で、512 GB の SSD なら 15〜50 GB です。システム更新、ドライバーのインストール、プログラムのインストールが自動的にポイントを作るため、この領域は時間とともに埋まります。',
          ],
        },
        {
          title: '実際の使用量はどう測るのか',
          content: [
            '信頼できる唯一の方法は `vssadmin` です。管理者のコマンド プロンプトで `vssadmin list shadowstorage` と入力します。出力には 3 つの値が示されます。使用されているシャドウ コピー記憶域、割り当てられている領域、最大領域です。1 つ目が今実際に占有されている分、3 つ目が Windows が使ってよい上限です。',
            '`vssadmin list shadows` は既存のスナップショットをすべて作成日時とともに一覧にします。想定よりずっと多いことがよくあります。Windows の更新ごと、ドライバーのインストールごと、そして一部のプログラムのインストールが、それぞれ独自のポイントを作るためです。',
            'この 2 つのコマンドは、そもそも復元ポイントが原因なのかどうかもはっきりさせます。使用領域が数百メガバイトしかないなら、ディスクを埋めているのは別のもので、この設定をいじる意味はありません。',
          ],
        },
        {
          title: '上限を下げるか、ポイントを削除するか',
          content: [
            'この 2 つは別のことで、多くの場合は前者が正解です。上限を下げると Windows は新しい上限を超える古いポイントを自動的に削除しますが、保護は動き続け、新しいポイントも作られます。安全網を保ったまま容量の大半を取り戻せる方法です。',
            '設定は `sysdm.cpl` > システムの保護 > 構成 にあります。「最大使用量」スライダーはパーセント単位で動きます。256 GB 以下の SSD では 3〜5% が妥当な目標で、通常 1〜2 個のポイント分の余地が残り、ほとんどの場面をカバーできます。1 TB 以上のドライブでは既定値を変える必要はありません。',
            '同じ画面の「削除」ボタンは既存のポイントを一度にすべて取り除き、即効性は最大です。ただし代償は明確で、戻れるポイントが 1 つも残りません。システムが正常に動いているときにだけ行い、直後に「作成」ボタンで新しいポイントを取ってください。',
          ],
        },
        {
          title: 'システムの保護は完全に切るべきか',
          content: [
            '無効化すれば空き容量は最大になり、状況によっては妥当な選択です。定期的にシステム全体のイメージを取っている人や、どのみち頻繁にクリーンインストールする人にとって、復元ポイントの価値は小さいでしょう。',
            'しかし多くの人にとっては割に合わない取引です。復元ポイントが本当に役立つのは、不具合のあるドライバー更新や質の悪いプログラムのインストールでシステムが起動しなくなったときです。ワンクリックで数日前に戻せることが、再インストールとの分かれ目になります。保護を切ればその選択肢は完全に消えます。',
            'バランスの取れた方針は、保護は有効のままにし、上限をドライブの容量に合わせ、本当の容量問題は別の場所で解決することです。同じマシンではたいてい `C:\\Windows\\Installer`、コンポーネント ストア `WinSxS`、古いユーザー プロファイル、検索インデックスも数十ギガバイトを占めています。Disk Mop の「ディスク解析」と Disk Treemap は、隠しフォルダーを含めてこれらをサイズ順に並べ、どれに手を付ける価値があるかを示します。',
          ],
        },
      ],
      faq: [
        {
          question: '復元ポイントを削除すると自分のファイルは失われますか。',
          answer:
            'いいえ。復元ポイントが対象とするのはシステム ファイル、レジストリ、プログラムのインストール状態であり、ドキュメントやピクチャなどの個人ファイルには触れません。削除しても失われるのは過去に戻る手段だけで、現在のファイルは影響を受けません。',
        },
        {
          question: 'ディスク クリーンアップはこの領域を片付けますか。',
          answer:
            '部分的には片付けます。ディスク クリーンアップ > システム ファイルのクリーンアップ > その他のオプション に「システムの復元とシャドウ コピー」の項目があり、最新の 1 つを除くすべてのポイントを削除します。確保する上限は変わらないため、時間が経つとまた埋まります。',
        },
        {
          question: 'なぜ復元ポイントが勝手に消えるのですか。',
          answer:
            '割り当てられた領域がいっぱいになると、Windows は古いポイントから自動的に削除します。上限が低ければ 1〜2 個しか保持されないこともあります。また一部のクリーンアップ処理やドライブの変更もポイントを無効にすることがあります。',
        },
        {
          question: '上限をゼロにできますか。',
          answer:
            'スライダーをゼロにすると事実上システムの保護が無効になり、Windows が警告を出します。本当に保護を切りたいなら、同じ画面にある「システムの保護を無効にする」という明示的な選択肢のほうが分かりやすいです。',
        },
      ],
      verdict: [
        'システムの復元ポイントは、エクスプローラーにまったく現れないからこそ最も見落とされるディスク消費要因です。正しい対処は全部消すことではなく、`vssadmin list shadowstorage` で実際の使用量を測り、上限をドライブの容量に合わせることです。小容量の SSD なら 5%、余裕のあるディスクなら既定のままで構いません。',
        '同じように隠れている他の項目を同じマシンで確認するには、Disk Mop の「ディスク解析」モジュールがシステムフォルダーを含めてドライブをサイズ順に並べ、Disk Treemap 表示が同じデータを一目で読める形にします。',
      ],
      ctaText: 'ディスクの見えない容量がどこへ消えたか突き止める',
    },
  },
};
