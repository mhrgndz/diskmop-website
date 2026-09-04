import type { Article } from '../types';

export const driveCapacityLessThanAdvertised: Article = {
  slug: 'drive-capacity-less-than-advertised',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-09-04',
  readingTime: 7,
  content: {
    tr: {
      title: '1 TB Disk Neden 931 GB Görünüyor? Eksik Kapasitenin Açıklaması',
      metaDescription:
        '1 TB sürücü Windows\'ta 931 GB görünür. Sebep kayıp alan değil, birim farkıdır: üretici 1000, Windows 1024 tabanını kullanır. Geri kalan farkı ne açıklar?',
      subtitle: 'Kayıp Alan Değil, Ölçü Birimi Farkı',
      intro: [
        'Kısa cevap: Kaybolan bir alan yok. Üretici 1 TB derken 1.000.000.000.000 bayt kastediyor; Windows ise aynı sayıyı 1024 tabanında bölüp "931 GB" yazıyor. Yaklaşık %7\'lik fark tamamen bu birim uyuşmazlığından kaynaklanır ve her marka, her model için aynıdır.',
        'Bunun üzerine bir de gerçekten alan tüketen birkaç kalem eklenir: kurtarma bölümü, EFI önyükleme bölümü ve dosya sisteminin kendi defteri. Bu rehberde farkın hangi kısmının matematik, hangi kısmının gerçek olduğunu; ayrıca farkın ne zaman bir dolandırıcılık işareti olduğunu anlatıyoruz.',
      ],
      keyTakeaways: [
        'Üreticiler ondalık sistem kullanır: 1 TB = 1.000.000.000.000 bayt. Windows ikili sistemle böler (1024³) ama sonucu "GB" diye etiketler.',
        '1 TB sürücü Windows\'ta 931 GB, 2 TB sürücü 1863 GB, 500 GB sürücü 465 GB görünür. Bu oran her zaman aynıdır.',
        'macOS 10.6\'dan beri ondalık sistem kullanır, bu yüzden aynı disk Mac\'te etiketteki değere çok daha yakın görünür.',
        'Gerçekten alan tüketenler: kurtarma bölümü (500 MB-20 GB), EFI bölümü (100-300 MB) ve NTFS\'in ana dosya tablosu.',
        'Fark %10\'u aşıyorsa ve disk yeni değilse, gizli üretici kurtarma bölümü veya biçimlendirilmemiş alan olabilir.',
        'Beklenenden ÇOK daha az alan (ör. "2 TB" yazan diskte 8 GB veri sonrası bozulma) sahte kapasiteli sürücü işaretidir.',
      ],
      howTo: {
        name: 'Sürücünün gerçek kapasitesini doğrulama',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Tam bayt sayısını okuyun',
            text: 'Windows Gezgini\'nde sürücüye sağ tıklayıp Özellikler\'i açın. "Kapasite" satırında hem GB hem de parantez içinde tam bayt sayısı yazar. Bu bayt sayısını 1.000.000.000\'a bölerseniz üreticinin GB değerini bulursunuz.',
          },
          {
            name: 'Bölümleri kontrol edin',
            text: 'Başlat\'a sağ tıklayıp Disk Yönetimi\'ni açın. Diskinizin şeridinde C: dışında EFI Sistem Bölümü, Kurtarma bölümü veya üretici kurtarma bölümü olabilir. Bunlar gerçek alan tüketir ve Gezgin\'de görünmez.',
          },
          {
            name: 'Ayrılmış depolamayı görün',
            text: 'Yönetici PowerShell\'de `DISM /Online /Get-ReservedStorageState` komutunu çalıştırın. Windows güncellemeler için birkaç gigabayt ayırmış olabilir.',
          },
          {
            name: 'Şüpheli bir sürücüyü test edin',
            text: 'Ucuz bir USB bellek veya harici disk beklenenden çok küçük çıkıyorsa, kapasitesini gerçek yazma testiyle doğrulayın. Disk gerçekten iddia ettiği kadar veri tutabiliyor mu, ancak diski sonuna kadar doldurup okuyarak anlaşılır.',
          },
        ],
      },
      sections: [
        {
          title: 'Asıl Sebep: 1000 mü, 1024 mü?',
          content: [
            'Sabit disk ve SSD üreticileri kapasiteyi ondalık sistemle sayar. Onlara göre 1 kilobayt 1000 bayt, 1 megabayt 1.000.000 bayt, 1 terabayt ise 1.000.000.000.000 bayttır. Etiketteki "1 TB" tam olarak budur ve yanlış değildir; uluslararası birim sisteminde "tera" öneki zaten 10¹² anlamına gelir.',
            'Windows ise aynı baytları ikili sistemle böler: 1024, 1024², 1024³. Sorun bölmede değil, etikettedir — Windows sonucu "GiB" (gibibayt) yerine "GB" diye yazar. 1.000.000.000.000 baytı 1024³\'e böldüğünüzde 931,32 çıkar ve ekranda "931 GB" görürsünüz.',
            'Bu yüzden fark her zaman aynı orandadır: yaklaşık %7,4. 500 GB sürücü 465 GB, 1 TB sürücü 931 GB, 2 TB sürücü 1863 GB, 4 TB sürücü 3725 GB görünür. Farklı bir marka almak bunu değiştirmez, çünkü hesap her diskte aynıdır.',
          ],
        },
        {
          title: 'Mac Neden Farklı Gösteriyor?',
          content: [
            'Aynı diski bir Mac\'e takarsanız kapasite etiketteki değere çok daha yakın görünür. Sebep basit: macOS, 10.6 Snow Leopard\'dan beri depolama boyutlarını ondalık sistemle raporlar. Yani Apple da üreticiyle aynı dili konuşur.',
            'Bu, Mac\'in size "daha fazla alan verdiği" anlamına gelmez. İki işletim sistemi de aynı sayıda baytı görür, yalnızca farklı biçimde yazar. Aynı diskteki aynı dosya Windows\'ta 4,66 GB, Mac\'te 5,0 GB görünebilir — dosya değişmemiştir, ölçü birimi değişmiştir.',
            'Linux dağıtımları ikisini de kullanır. `df -h` komutu ikili sistemi (GiB) kullanırken `df -H` ondalık sistemi kullanır; birçok araç ayrımı "GiB" ve "GB" yazarak açıkça belirtir. Bu, aslında Windows\'un da yapması gereken şeydir.',
          ],
        },
        {
          title: 'Gerçekten Alan Tüketen Şeyler',
          content: [
            'Birim farkının ötesinde, gerçekten kaybolan birkaç gigabayt vardır. Birincisi bölümlerdir. Modern bir Windows kurulumunda diskte C: dışında en az iki bölüm daha bulunur: 100-300 MB\'lık EFI Sistem Bölümü ve 500 MB ile birkaç gigabayt arasında değişen Kurtarma bölümü. Hazır satılan bilgisayarlarda buna üreticinin fabrika geri yükleme bölümü de eklenir ve bu 10-20 GB olabilir.',
            'İkincisi dosya sisteminin kendi yapılarıdır. NTFS, diskteki her dosyanın kaydını tuttuğu Ana Dosya Tablosu (MFT) için alan ayırır; buna günlük dosyası ve yedek önyükleme kayıtları eklenir. Tipik olarak kapasitenin %1\'inden azıdır ama sıfır değildir.',
            'Üçüncüsü Windows\'un kendi ayırdığı alandır. Windows 10 sürüm 1903\'ten itibaren "Ayrılmış Depolama" özelliği güncellemelerin sorunsuz kurulabilmesi için birkaç gigabayt ayırır. Bu alan Gezgin\'de dolu görünmez ama kullanılamaz. `DISM /Online /Get-ReservedStorageState` komutuyla durumunu görebilirsiniz.',
          ],
        },
        {
          title: 'Ne Zaman Endişelenmeli: Sahte Kapasiteli Sürücüler',
          content: [
            'Şimdiye kadar anlatılan farklar öngörülebilir ve normaldir. Ama bir durum gerçekten sorunludur: sahte kapasiteli USB bellek ve hafıza kartları. Bu cihazların denetleyicisi işletim sistemine yalan söyler — kendini 1 TB olarak tanıtır, oysa içinde yalnızca 8 veya 16 GB gerçek yonga vardır.',
            'Belirtisi şudur: disk normal görünür, ilk dosyalar sorunsuz kopyalanır, ama gerçek kapasite aşıldığında yazılan veriler sessizce kaybolur veya bozulur. Dosya listede durur, açıldığında bozuk çıkar. Bu, aylar sonra yedeğinize ihtiyaç duyduğunuzda fark edilen türden bir sorundur.',
            'Korunmanın yolu, yeni bir sürücüyü kullanmaya başlamadan önce sonuna kadar doldurup geri okumaktır. Kapasitesinin gerçekten iddia edildiği kadar olduğunu ancak böyle bilirsiniz. Alışılmadık derecede ucuz, tanınmayan markalı yüksek kapasiteli belleklerde bu test isteğe bağlı değil, gerekli bir adımdır.',
          ],
        },
      ],
      faq: [
        {
          question: 'Diski yeniden biçimlendirirsem kayıp alanı geri alır mıyım?',
          answer:
            'Hayır, birim farkından kaynaklanan kısmı geri alamazsınız çünkü kaybolmuş bir alan yoktur. Ancak eski bir kurtarma bölümü veya ayrılmamış alan varsa, bölümleri birleştirerek birkaç gigabayt kazanabilirsiniz. Fabrika geri yükleme bölümünü silmeden önce kurtarma ortamınızın olduğundan emin olun.',
        },
        {
          question: 'exFAT, NTFS ve APFS arasında kapasite farkı var mı?',
          answer:
            'Küçük bir fark vardır. Her dosya sistemi kendi defteri için alan ayırır ve farklı küme boyutları kullanır. Çok sayıda küçük dosyada bu fark büyüyebilir, ama tek başına birkaç gigabaytı açıklamaz.',
        },
        {
          question: 'SSD\'lerde "aşırı sağlama" kapasiteyi düşürür mü?',
          answer:
            'Denetleyicinin yıpranma dengelemesi için ayırdığı alan zaten etiket kapasitesinin dışındadır; yani 1 TB yazan bir SSD\'de o alan reklam edilen 1 TB\'ın içinden çıkmaz. Ayrıca kullanıcı olarak diskin bir kısmını boş bırakmak da ek aşırı sağlama görevi görür ve performansa yardımcı olur.',
        },
        {
          question: 'Telefonumda da aynı fark var mı?',
          answer:
            'Evet, aynı matematik geçerlidir. Ek olarak telefonlarda işletim sistemi ve önyüklü uygulamalar dâhili depolamada yer kaplar; bu yüzden 128 GB\'lık bir telefonda kullanılabilir alan genellikle 105-112 GB civarındadır.',
        },
      ],
      verdict: [
        '1 TB diskin 931 GB görünmesi bir arıza değil, iki farklı sayma biçiminin sonucudur. Buna kurtarma bölümleri ve dosya sistemi defteri eklenince tipik bir Windows makinesinde kullanılabilir alan etiketin yaklaşık %90-92\'si olur. Bu tamamen normaldir.',
        'Asıl mesele diskin ne kadar büyük olduğu değil, içinde ne olduğudur. Disk Mop\'un Disk Analizi ve Disk Haritası modülleri kalan alanın nereye gittiğini klasör klasör gösterir; çoğu kullanıcı için birim farkını dert etmek yerine 30-40 GB\'lık gereksiz birikintiyi temizlemek çok daha kazançlıdır.',
      ],
      ctaText: 'Diskinizde yeri gerçekte ne kaplıyor, görün',
    },
    en: {
      title: 'Why Does a 1 TB Drive Show as 931 GB? The Missing Capacity Explained',
      metaDescription:
        'A 1 TB drive shows 931 GB in Windows. Nothing is missing: manufacturers count in 1000s, Windows divides by 1024. Here is what explains the rest of the difference.',
      subtitle: 'Not Lost Space, a Difference in Units',
      intro: [
        'Short answer: no space is missing. When a manufacturer says 1 TB they mean 1,000,000,000,000 bytes; Windows divides that same number by 1024 and labels the result "931 GB". The roughly 7% difference comes entirely from that unit mismatch, and it is identical for every brand and model.',
        'On top of that sit a few items that genuinely do consume space: a recovery partition, the EFI boot partition and the filesystem\'s own bookkeeping. This guide separates the part of the gap that is pure arithmetic from the part that is real — and explains when the gap is actually a sign of fraud.',
      ],
      keyTakeaways: [
        'Manufacturers use decimal units: 1 TB = 1,000,000,000,000 bytes. Windows divides in binary (1024³) but still labels the result "GB".',
        'A 1 TB drive shows 931 GB, a 2 TB drive 1863 GB, a 500 GB drive 465 GB. The ratio is always the same.',
        'macOS has used decimal units since 10.6, so the same disk looks much closer to the label on a Mac.',
        'What genuinely consumes space: the recovery partition (500 MB-20 GB), the EFI partition (100-300 MB) and NTFS\'s Master File Table.',
        'If the gap exceeds 10% on a drive that is not new, look for a hidden manufacturer recovery partition or unallocated space.',
        'Far less space than expected — for example a "2 TB" drive corrupting data after 8 GB — is the signature of a fake-capacity drive.',
      ],
      howTo: {
        name: 'Verify a drive\'s real capacity',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Read the exact byte count',
            text: 'Right-click the drive in File Explorer and open Properties. The "Capacity" line shows both GB and, in brackets, the exact number of bytes. Divide that byte count by 1,000,000,000 to get the manufacturer\'s GB figure.',
          },
          {
            name: 'Check the partitions',
            text: 'Right-click Start and open Disk Management. Besides C:, your disk may carry an EFI System Partition, a Recovery partition or a manufacturer restore partition. Those consume real space and never appear in Explorer.',
          },
          {
            name: 'Look at reserved storage',
            text: 'In an elevated PowerShell run `DISM /Online /Get-ReservedStorageState`. Windows may have set aside several gigabytes so updates can install cleanly.',
          },
          {
            name: 'Test a suspicious drive',
            text: 'If a cheap USB stick or external disk comes up far smaller than expected, verify its capacity with a real write test. Only by filling the drive completely and reading it back can you tell whether it really holds as much as it claims.',
          },
        ],
      },
      sections: [
        {
          title: 'The Real Cause: 1000 or 1024?',
          content: [
            'Hard drive and SSD manufacturers count capacity in decimal. To them a kilobyte is 1000 bytes, a megabyte 1,000,000 bytes and a terabyte 1,000,000,000,000 bytes. The "1 TB" on the label is exactly that, and it is not wrong; in the international system of units the prefix "tera" already means 10¹².',
            'Windows divides the same bytes in binary: 1024, 1024², 1024³. The problem is not the division but the label — Windows writes the result as "GB" rather than "GiB" (gibibyte). Divide 1,000,000,000,000 bytes by 1024³ and you get 931.32, which appears on screen as "931 GB".',
            'That is why the gap is always the same proportion: about 7.4%. A 500 GB drive shows 465 GB, 1 TB shows 931 GB, 2 TB shows 1863 GB and 4 TB shows 3725 GB. Buying a different brand changes nothing, because the arithmetic is identical on every disk.',
          ],
        },
        {
          title: 'Why Does a Mac Report It Differently?',
          content: [
            'Plug the same disk into a Mac and the capacity looks much closer to the label. The reason is simple: since 10.6 Snow Leopard, macOS reports storage sizes in decimal. Apple speaks the same language as the manufacturer.',
            'That does not mean the Mac "gives you more space". Both operating systems see the same number of bytes; they just write it differently. The same file on the same disk can read as 4.66 GB in Windows and 5.0 GB on a Mac — the file did not change, the unit did.',
            'Linux distributions use both. `df -h` reports in binary (GiB) while `df -H` reports in decimal, and many tools state the distinction explicitly by writing "GiB" and "GB". That is, in fact, what Windows ought to do too.',
          ],
        },
        {
          title: 'What Genuinely Takes Space',
          content: [
            'Beyond the unit difference, a few gigabytes really are gone. First, partitions. A modern Windows install carries at least two more partitions besides C:: a 100-300 MB EFI System Partition and a Recovery partition ranging from 500 MB to a few gigabytes. On pre-built machines the manufacturer adds a factory restore partition on top, which can be 10-20 GB.',
            'Second, the filesystem\'s own structures. NTFS reserves space for the Master File Table, where it records every file on the disk, plus a journal and backup boot records. Typically that is under 1% of capacity, but it is not zero.',
            'Third, the space Windows sets aside for itself. Since Windows 10 version 1903, the Reserved Storage feature holds back several gigabytes so updates can install without running out of room. That space does not show as used in Explorer but is not available either. `DISM /Online /Get-ReservedStorageState` shows its status.',
          ],
        },
        {
          title: 'When to Worry: Fake-Capacity Drives',
          content: [
            'Every difference described so far is predictable and normal. One situation, though, is genuinely a problem: USB sticks and memory cards with faked capacity. Their controller lies to the operating system — it reports itself as 1 TB while the chip inside holds only 8 or 16 GB.',
            'The symptom is this: the drive looks normal, the first files copy fine, but once the real capacity is passed, everything written afterwards silently disappears or corrupts. The file stays in the listing and turns out to be broken when opened. This is the kind of problem you discover months later, when you need the backup.',
            'The way to protect yourself is to fill a new drive to the end and read it back before you start relying on it. Only then do you know its capacity is genuinely what it claims. For unusually cheap, high-capacity sticks from unknown brands, that test is not optional — it is a required step.',
          ],
        },
      ],
      faq: [
        {
          question: 'Will reformatting the drive get the missing space back?',
          answer:
            'No, not the part caused by units, because no space is actually missing. However, if there is an old recovery partition or unallocated space, merging partitions can recover a few gigabytes. Make sure you have recovery media before deleting a factory restore partition.',
        },
        {
          question: 'Is there a capacity difference between exFAT, NTFS and APFS?',
          answer:
            'A small one. Every filesystem reserves space for its own bookkeeping and uses different cluster sizes. With very many small files the difference grows, but on its own it does not account for several gigabytes.',
        },
        {
          question: 'Does SSD over-provisioning reduce capacity?',
          answer:
            'The area the controller reserves for wear levelling already sits outside the labelled capacity, so on a 1 TB SSD it is not carved out of the advertised 1 TB. Separately, leaving part of the drive free yourself acts as extra over-provisioning and helps performance.',
        },
        {
          question: 'Does my phone show the same difference?',
          answer:
            'Yes, the same arithmetic applies. On top of that, the operating system and preinstalled apps occupy internal storage, which is why a 128 GB phone typically shows around 105-112 GB usable.',
        },
      ],
      verdict: [
        'A 1 TB drive showing 931 GB is not a fault, it is the result of two different ways of counting. Add recovery partitions and filesystem bookkeeping and usable space on a typical Windows machine lands at roughly 90-92% of the label. That is entirely normal.',
        'What matters is not how big the drive is but what is inside it. Disk Mop\'s Disk Analysis and Disk Treemap modules show folder by folder where the remaining space went; for most people, clearing 30-40 GB of genuine clutter beats worrying about the unit difference.',
      ],
      ctaText: 'See what is really using space on your drive',
    },
    de: {
      title: 'Warum zeigt eine 1-TB-Festplatte nur 931 GB? Die fehlende Kapazität erklärt',
      metaDescription:
        'Eine 1-TB-Platte zeigt unter Windows 931 GB. Es fehlt nichts: Hersteller rechnen in 1000ern, Windows teilt durch 1024. Was den Rest der Differenz erklärt.',
      subtitle: 'Kein verlorener Speicher, sondern ein Unterschied in den Einheiten',
      intro: [
        'Kurze Antwort: Es fehlt kein Speicher. Wenn ein Hersteller 1 TB angibt, meint er 1.000.000.000.000 Byte; Windows teilt dieselbe Zahl durch 1024 und beschriftet das Ergebnis als "931 GB". Die rund 7 % Unterschied stammen vollständig aus dieser Einheiten-Diskrepanz und sind bei jeder Marke und jedem Modell gleich.',
        'Hinzu kommen einige Posten, die tatsächlich Platz verbrauchen: eine Wiederherstellungspartition, die EFI-Startpartition und die Verwaltungsstrukturen des Dateisystems. Dieser Leitfaden trennt den rein rechnerischen Teil der Lücke vom realen — und erklärt, wann die Lücke tatsächlich auf Betrug hindeutet.',
      ],
      keyTakeaways: [
        'Hersteller rechnen dezimal: 1 TB = 1.000.000.000.000 Byte. Windows teilt binär (1024³), beschriftet das Ergebnis aber weiterhin als "GB".',
        'Eine 1-TB-Platte zeigt 931 GB, eine 2-TB-Platte 1863 GB, eine 500-GB-Platte 465 GB. Das Verhältnis ist immer gleich.',
        'macOS nutzt seit 10.6 dezimale Einheiten, weshalb dieselbe Platte am Mac deutlich näher am Aufdruck liegt.',
        'Wirklich Platz verbrauchen: die Wiederherstellungspartition (500 MB-20 GB), die EFI-Partition (100-300 MB) und die Master File Table von NTFS.',
        'Übersteigt die Lücke bei einer nicht neuen Platte 10 %, suchen Sie nach einer versteckten Hersteller-Wiederherstellungspartition oder nicht zugewiesenem Speicher.',
        'Deutlich weniger Platz als erwartet — etwa eine "2 TB"-Platte, die nach 8 GB Daten beschädigt — ist das Kennzeichen eines Laufwerks mit gefälschter Kapazität.',
      ],
      howTo: {
        name: 'Die tatsächliche Kapazität eines Laufwerks prüfen',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Die genaue Byte-Zahl ablesen',
            text: 'Klicken Sie im Explorer mit der rechten Maustaste auf das Laufwerk und öffnen Sie Eigenschaften. Die Zeile "Kapazität" zeigt sowohl GB als auch in Klammern die exakte Byte-Zahl. Diese Zahl durch 1.000.000.000 geteilt ergibt den GB-Wert des Herstellers.',
          },
          {
            name: 'Die Partitionen prüfen',
            text: 'Rechtsklick auf Start und Datenträgerverwaltung öffnen. Neben C: kann Ihre Platte eine EFI-Systempartition, eine Wiederherstellungspartition oder eine Hersteller-Wiederherstellungspartition tragen. Diese belegen echten Platz und erscheinen nie im Explorer.',
          },
          {
            name: 'Reservierten Speicher ansehen',
            text: 'Führen Sie in einer PowerShell als Administrator `DISM /Online /Get-ReservedStorageState` aus. Windows hat möglicherweise mehrere Gigabyte zurückgehalten, damit Updates sauber installieren können.',
          },
          {
            name: 'Ein verdächtiges Laufwerk testen',
            text: 'Fällt ein günstiger USB-Stick oder eine externe Platte deutlich kleiner aus als erwartet, prüfen Sie die Kapazität mit einem echten Schreibtest. Nur wer das Laufwerk vollständig füllt und wieder ausliest, weiß, ob es wirklich so viel fasst wie angegeben.',
          },
        ],
      },
      sections: [
        {
          title: 'Die eigentliche Ursache: 1000 oder 1024?',
          content: [
            'Hersteller von Festplatten und SSDs zählen Kapazität dezimal. Für sie ist ein Kilobyte 1000 Byte, ein Megabyte 1.000.000 Byte und ein Terabyte 1.000.000.000.000 Byte. Das "1 TB" auf dem Etikett ist genau das und keineswegs falsch; im internationalen Einheitensystem bedeutet die Vorsilbe "Tera" bereits 10¹².',
            'Windows teilt dieselben Byte binär: 1024, 1024², 1024³. Das Problem ist nicht die Division, sondern die Beschriftung — Windows schreibt das Ergebnis als "GB" statt "GiB" (Gibibyte). Teilt man 1.000.000.000.000 Byte durch 1024³, ergibt sich 931,32, auf dem Bildschirm erscheint "931 GB".',
            'Deshalb ist die Lücke immer derselbe Anteil: etwa 7,4 %. Eine 500-GB-Platte zeigt 465 GB, 1 TB zeigt 931 GB, 2 TB zeigt 1863 GB und 4 TB zeigt 3725 GB. Eine andere Marke ändert daran nichts, denn die Rechnung ist auf jeder Platte identisch.',
          ],
        },
        {
          title: 'Warum meldet ein Mac andere Werte?',
          content: [
            'Schließen Sie dieselbe Platte an einen Mac an, liegt die Kapazität deutlich näher am Aufdruck. Der Grund ist einfach: Seit 10.6 Snow Leopard meldet macOS Speichergrößen dezimal. Apple spricht damit dieselbe Sprache wie der Hersteller.',
            'Das bedeutet nicht, dass der Mac "mehr Platz gibt". Beide Betriebssysteme sehen dieselbe Byte-Zahl, sie schreiben sie nur anders. Dieselbe Datei auf derselben Platte kann unter Windows 4,66 GB und am Mac 5,0 GB anzeigen — die Datei hat sich nicht geändert, die Einheit schon.',
            'Linux-Distributionen nutzen beides. `df -h` meldet binär (GiB), `df -H` dezimal, und viele Werkzeuge machen den Unterschied durch "GiB" und "GB" ausdrücklich sichtbar. Genau das sollte Windows eigentlich auch tun.',
          ],
        },
        {
          title: 'Was wirklich Platz belegt',
          content: [
            'Jenseits des Einheitenunterschieds sind einige Gigabyte tatsächlich weg. Erstens Partitionen. Eine moderne Windows-Installation bringt neben C: mindestens zwei weitere Partitionen mit: eine 100-300 MB große EFI-Systempartition und eine Wiederherstellungspartition zwischen 500 MB und einigen Gigabyte. Bei Fertiggeräten kommt eine Werksrücksetzungspartition des Herstellers hinzu, die 10-20 GB groß sein kann.',
            'Zweitens die Strukturen des Dateisystems selbst. NTFS reserviert Platz für die Master File Table, in der jede Datei der Platte verzeichnet ist, dazu ein Journal und Sicherungs-Bootsektoren. Typischerweise ist das weniger als 1 % der Kapazität, aber eben nicht null.',
            'Drittens der Platz, den Windows für sich selbst zurücklegt. Seit Windows 10 Version 1903 hält die Funktion "Reservierter Speicher" mehrere Gigabyte frei, damit Updates ohne Platzmangel installieren. Dieser Bereich erscheint im Explorer nicht als belegt, ist aber auch nicht verfügbar. `DISM /Online /Get-ReservedStorageState` zeigt den Status.',
          ],
        },
        {
          title: 'Wann Sie stutzig werden sollten: gefälschte Kapazitäten',
          content: [
            'Alle bisher beschriebenen Unterschiede sind vorhersehbar und normal. Eine Situation ist jedoch wirklich problematisch: USB-Sticks und Speicherkarten mit gefälschter Kapazität. Ihr Controller belügt das Betriebssystem — er meldet 1 TB, während der Chip im Inneren nur 8 oder 16 GB fasst.',
            'Das Symptom: Das Laufwerk wirkt normal, die ersten Dateien kopieren einwandfrei, doch sobald die echte Kapazität überschritten ist, verschwindet oder beschädigt sich alles Weitere stillschweigend. Die Datei bleibt in der Liste und erweist sich beim Öffnen als defekt. Solche Probleme bemerkt man Monate später — wenn man das Backup braucht.',
            'Der Schutz besteht darin, ein neues Laufwerk vor dem produktiven Einsatz vollständig zu füllen und wieder auszulesen. Erst dann wissen Sie, dass die Kapazität wirklich stimmt. Bei ungewöhnlich günstigen Sticks unbekannter Marken mit hoher Kapazität ist dieser Test keine Option, sondern Pflicht.',
          ],
        },
      ],
      faq: [
        {
          question: 'Bringt eine Neuformatierung den fehlenden Platz zurück?',
          answer:
            'Nein, den einheitenbedingten Teil nicht, denn es fehlt tatsächlich nichts. Gibt es allerdings eine alte Wiederherstellungspartition oder nicht zugewiesenen Speicher, lassen sich durch Zusammenführen einige Gigabyte gewinnen. Sorgen Sie vor dem Löschen einer Werksrücksetzungspartition für ein Wiederherstellungsmedium.',
        },
        {
          question: 'Gibt es Kapazitätsunterschiede zwischen exFAT, NTFS und APFS?',
          answer:
            'Einen kleinen. Jedes Dateisystem reserviert Platz für die eigene Verwaltung und nutzt unterschiedliche Clustergrößen. Bei sehr vielen kleinen Dateien wächst der Unterschied, erklärt für sich allein aber keine mehreren Gigabyte.',
        },
        {
          question: 'Verringert Over-Provisioning bei SSDs die Kapazität?',
          answer:
            'Der Bereich, den der Controller für die Abnutzungsverteilung reserviert, liegt bereits außerhalb der angegebenen Kapazität; bei einer 1-TB-SSD wird er also nicht von den beworbenen 1 TB abgezogen. Unabhängig davon wirkt selbst frei gelassener Platz als zusätzliches Over-Provisioning und hilft der Leistung.',
        },
        {
          question: 'Zeigt mein Telefon denselben Unterschied?',
          answer:
            'Ja, dieselbe Rechnung gilt. Zusätzlich belegen Betriebssystem und vorinstallierte Apps internen Speicher, weshalb ein 128-GB-Telefon in der Regel rund 105-112 GB nutzbar anzeigt.',
        },
      ],
      verdict: [
        'Dass eine 1-TB-Platte 931 GB zeigt, ist kein Defekt, sondern das Ergebnis zweier Zählweisen. Rechnet man Wiederherstellungspartitionen und Dateisystemverwaltung hinzu, liegt der nutzbare Platz auf einem typischen Windows-Rechner bei etwa 90-92 % des Aufdrucks. Das ist völlig normal.',
        'Entscheidend ist nicht, wie groß die Platte ist, sondern was darauf liegt. Die Module Festplattenanalyse und Disk Treemap von Disk Mop zeigen Ordner für Ordner, wohin der restliche Platz gegangen ist; für die meisten bringt es weit mehr, 30-40 GB echten Ballast zu entfernen, als sich über den Einheitenunterschied zu ärgern.',
      ],
      ctaText: 'Sehen Sie, was auf Ihrem Laufwerk wirklich Platz belegt',
    },
    fr: {
      title: 'Pourquoi un disque de 1 To affiche-t-il 931 Go ? La capacité manquante expliquée',
      metaDescription:
        'Un disque de 1 To affiche 931 Go sous Windows. Rien ne manque : les fabricants comptent en milliers, Windows divise par 1024. Voici ce qui explique le reste de l\'écart.',
      subtitle: 'Pas de l\'espace perdu, une différence d\'unités',
      intro: [
        'Réponse courte : aucun espace ne manque. Quand un fabricant annonce 1 To, il parle de 1 000 000 000 000 octets ; Windows divise ce même nombre par 1024 et affiche « 931 Go ». Les quelque 7 % d\'écart viennent entièrement de cette différence d\'unités, identique pour toutes les marques et tous les modèles.',
        'S\'y ajoutent quelques éléments qui, eux, consomment réellement de l\'espace : une partition de récupération, la partition de démarrage EFI et la comptabilité interne du système de fichiers. Ce guide sépare la part purement arithmétique de l\'écart de la part réelle — et explique quand cet écart trahit une fraude.',
      ],
      keyTakeaways: [
        'Les fabricants utilisent le système décimal : 1 To = 1 000 000 000 000 octets. Windows divise en binaire (1024³) mais étiquette toujours « Go ».',
        'Un disque de 1 To affiche 931 Go, un 2 To 1863 Go, un 500 Go 465 Go. La proportion est toujours la même.',
        'macOS utilise le décimal depuis 10.6, donc le même disque paraît bien plus proche de l\'étiquette sur un Mac.',
        'Ce qui consomme réellement : la partition de récupération (500 Mo-20 Go), la partition EFI (100-300 Mo) et la table de fichiers maîtresse de NTFS.',
        'Si l\'écart dépasse 10 % sur un disque qui n\'est pas neuf, cherchez une partition de récupération constructeur cachée ou de l\'espace non alloué.',
        'Beaucoup moins d\'espace que prévu — par exemple un disque « 2 To » qui corrompt les données après 8 Go — signale une capacité falsifiée.',
      ],
      howTo: {
        name: 'Vérifier la capacité réelle d\'un disque',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Lire le nombre exact d\'octets',
            text: 'Faites un clic droit sur le disque dans l\'Explorateur et ouvrez Propriétés. La ligne « Capacité » indique les Go et, entre parenthèses, le nombre exact d\'octets. Divisez ce nombre par 1 000 000 000 pour retrouver la valeur du fabricant.',
          },
          {
            name: 'Vérifier les partitions',
            text: 'Clic droit sur Démarrer, puis Gestion des disques. Outre C:, votre disque peut porter une partition système EFI, une partition de récupération ou une partition de restauration constructeur. Elles occupent un espace réel et n\'apparaissent jamais dans l\'Explorateur.',
          },
          {
            name: 'Regarder le stockage réservé',
            text: 'Dans une PowerShell administrateur, exécutez `DISM /Online /Get-ReservedStorageState`. Windows a peut-être réservé plusieurs gigaoctets pour que les mises à jour s\'installent proprement.',
          },
          {
            name: 'Tester un disque suspect',
            text: 'Si une clé USB bon marché ou un disque externe s\'avère bien plus petit que prévu, vérifiez sa capacité par un vrai test d\'écriture. Seul un remplissage complet suivi d\'une relecture permet de savoir s\'il contient vraiment ce qu\'il annonce.',
          },
        ],
      },
      sections: [
        {
          title: 'La vraie cause : 1000 ou 1024 ?',
          content: [
            'Les fabricants de disques durs et de SSD comptent la capacité en décimal. Pour eux, un kilooctet vaut 1000 octets, un mégaoctet 1 000 000 octets et un téraoctet 1 000 000 000 000 octets. Le « 1 To » de l\'étiquette est exactement cela, et ce n\'est pas faux : dans le système international d\'unités, le préfixe « téra » signifie déjà 10¹².',
            'Windows divise les mêmes octets en binaire : 1024, 1024², 1024³. Le problème n\'est pas la division mais l\'étiquette — Windows écrit le résultat « Go » au lieu de « Gio » (gibioctet). Divisez 1 000 000 000 000 octets par 1024³ et vous obtenez 931,32, affiché « 931 Go » à l\'écran.',
            'C\'est pourquoi l\'écart est toujours dans la même proportion : environ 7,4 %. Un disque de 500 Go affiche 465 Go, 1 To affiche 931 Go, 2 To affiche 1863 Go et 4 To affiche 3725 Go. Changer de marque n\'y change rien, car le calcul est identique sur tous les disques.',
          ],
        },
        {
          title: 'Pourquoi un Mac affiche-t-il autre chose ?',
          content: [
            'Branchez le même disque sur un Mac et la capacité paraît bien plus proche de l\'étiquette. La raison est simple : depuis 10.6 Snow Leopard, macOS rapporte les tailles de stockage en décimal. Apple parle donc la même langue que le fabricant.',
            'Cela ne veut pas dire que le Mac « donne plus de place ». Les deux systèmes voient le même nombre d\'octets, ils l\'écrivent seulement différemment. Le même fichier sur le même disque peut afficher 4,66 Go sous Windows et 5,0 Go sur Mac — le fichier n\'a pas changé, l\'unité si.',
            'Les distributions Linux utilisent les deux. `df -h` affiche en binaire (Gio) et `df -H` en décimal, et de nombreux outils explicitent la distinction en écrivant « Gio » et « Go ». C\'est d\'ailleurs ce que Windows devrait faire.',
          ],
        },
        {
          title: 'Ce qui occupe réellement de la place',
          content: [
            'Au-delà de la différence d\'unités, quelques gigaoctets disparaissent bel et bien. D\'abord les partitions. Une installation Windows moderne comporte au moins deux partitions en plus de C: : une partition système EFI de 100 à 300 Mo et une partition de récupération de 500 Mo à quelques gigaoctets. Sur les machines de grande distribution s\'ajoute une partition de restauration constructeur, qui peut peser 10 à 20 Go.',
            'Ensuite, les structures propres au système de fichiers. NTFS réserve de l\'espace pour la table de fichiers maîtresse, où il consigne chaque fichier du disque, plus un journal et des secteurs d\'amorçage de secours. C\'est en général moins de 1 % de la capacité, mais ce n\'est pas nul.',
            'Enfin, l\'espace que Windows se réserve. Depuis Windows 10 version 1903, la fonction Stockage réservé met de côté plusieurs gigaoctets pour que les mises à jour s\'installent sans manquer de place. Cet espace n\'apparaît pas comme utilisé dans l\'Explorateur mais n\'est pas disponible non plus. `DISM /Online /Get-ReservedStorageState` en donne l\'état.',
          ],
        },
        {
          title: 'Quand s\'inquiéter : les capacités falsifiées',
          content: [
            'Tous les écarts décrits jusqu\'ici sont prévisibles et normaux. Une situation, en revanche, pose un vrai problème : les clés USB et cartes mémoire à capacité falsifiée. Leur contrôleur ment au système d\'exploitation — il se présente comme 1 To alors que la puce ne contient que 8 ou 16 Go.',
            'Le symptôme : le disque paraît normal, les premiers fichiers se copient sans souci, mais une fois la capacité réelle dépassée, tout ce qui est écrit ensuite disparaît ou se corrompt silencieusement. Le fichier reste dans la liste et s\'avère illisible à l\'ouverture. C\'est le genre de problème que l\'on découvre des mois plus tard, au moment où l\'on a besoin de la sauvegarde.',
            'La parade consiste à remplir un disque neuf jusqu\'au bout et à le relire avant de compter dessus. C\'est seulement ainsi que l\'on sait que sa capacité est réelle. Pour des clés de forte capacité anormalement bon marché et de marque inconnue, ce test n\'est pas facultatif : il est indispensable.',
          ],
        },
      ],
      faq: [
        {
          question: 'Reformater le disque récupère-t-il l\'espace manquant ?',
          answer:
            'Non, pas la part due aux unités, puisque rien ne manque réellement. En revanche, s\'il subsiste une ancienne partition de récupération ou de l\'espace non alloué, fusionner les partitions peut récupérer quelques gigaoctets. Assurez-vous d\'avoir un support de récupération avant de supprimer une partition de restauration constructeur.',
        },
        {
          question: 'Y a-t-il une différence de capacité entre exFAT, NTFS et APFS ?',
          answer:
            'Une petite. Chaque système de fichiers réserve de l\'espace pour sa propre comptabilité et utilise des tailles de cluster différentes. Avec de très nombreux petits fichiers l\'écart grandit, mais à lui seul il n\'explique pas plusieurs gigaoctets.',
        },
        {
          question: 'Le surprovisionnement des SSD réduit-il la capacité ?',
          answer:
            'La zone que le contrôleur réserve pour le nivellement d\'usure se situe déjà hors de la capacité annoncée : sur un SSD de 1 To, elle n\'est pas prélevée sur le 1 To publicitaire. Par ailleurs, laisser vous-même une part du disque libre agit comme un surprovisionnement supplémentaire et aide aux performances.',
        },
        {
          question: 'Mon téléphone présente-t-il le même écart ?',
          answer:
            'Oui, le même calcul s\'applique. S\'y ajoute le fait que le système et les applications préinstallées occupent le stockage interne, d\'où les 105 à 112 Go utilisables typiques sur un téléphone de 128 Go.',
        },
      ],
      verdict: [
        'Qu\'un disque de 1 To affiche 931 Go n\'est pas un défaut, c\'est le résultat de deux façons de compter. En ajoutant les partitions de récupération et la comptabilité du système de fichiers, l\'espace utilisable d\'une machine Windows typique se situe autour de 90 à 92 % de l\'étiquette. C\'est parfaitement normal.',
        'Ce qui compte n\'est pas la taille du disque mais ce qu\'il contient. Les modules Analyse de disque et Disk Treemap de Disk Mop montrent dossier par dossier où est passé l\'espace restant ; pour la plupart des gens, libérer 30 à 40 Go de véritable encombrement vaut mieux que de s\'inquiéter d\'une différence d\'unités.',
      ],
      ctaText: 'Voyez ce qui occupe vraiment votre disque',
    },
    es: {
      title: '¿Por qué un disco de 1 TB muestra 931 GB? La capacidad que falta, explicada',
      metaDescription:
        'Un disco de 1 TB aparece como 931 GB en Windows. No falta nada: los fabricantes cuentan en miles y Windows divide entre 1024. Esto explica el resto de la diferencia.',
      subtitle: 'No es espacio perdido, es una diferencia de unidades',
      intro: [
        'Respuesta corta: no falta espacio. Cuando un fabricante dice 1 TB se refiere a 1.000.000.000.000 bytes; Windows divide ese mismo número entre 1024 y etiqueta el resultado como «931 GB». Esa diferencia de un 7 % aproximado procede íntegramente del desajuste de unidades, y es idéntica en todas las marcas y modelos.',
        'A eso se suman unos pocos elementos que sí consumen espacio de verdad: una partición de recuperación, la partición de arranque EFI y la contabilidad interna del sistema de archivos. Esta guía separa la parte de la diferencia que es pura aritmética de la que es real, y explica cuándo esa diferencia sí es señal de fraude.',
      ],
      keyTakeaways: [
        'Los fabricantes usan unidades decimales: 1 TB = 1.000.000.000.000 bytes. Windows divide en binario (1024³) pero sigue etiquetando «GB».',
        'Un disco de 1 TB muestra 931 GB, uno de 2 TB muestra 1863 GB y uno de 500 GB muestra 465 GB. La proporción es siempre la misma.',
        'macOS usa unidades decimales desde 10.6, así que el mismo disco se ve mucho más cerca de la etiqueta en un Mac.',
        'Lo que consume espacio de verdad: la partición de recuperación (500 MB-20 GB), la partición EFI (100-300 MB) y la tabla maestra de archivos de NTFS.',
        'Si la diferencia supera el 10 % en un disco que no es nuevo, busca una partición de recuperación del fabricante oculta o espacio sin asignar.',
        'Mucho menos espacio del esperado —por ejemplo un disco «de 2 TB» que corrompe datos tras 8 GB— es la firma de una unidad con capacidad falsificada.',
      ],
      howTo: {
        name: 'Verificar la capacidad real de una unidad',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Leer el número exacto de bytes',
            text: 'Haz clic derecho en la unidad en el Explorador y abre Propiedades. La línea «Capacidad» muestra los GB y, entre paréntesis, el número exacto de bytes. Divide esa cifra entre 1.000.000.000 para obtener los GB del fabricante.',
          },
          {
            name: 'Comprobar las particiones',
            text: 'Clic derecho en Inicio y abre Administración de discos. Además de C:, tu disco puede tener una partición del sistema EFI, una de recuperación o una de restauración del fabricante. Ocupan espacio real y nunca aparecen en el Explorador.',
          },
          {
            name: 'Mirar el almacenamiento reservado',
            text: 'En una PowerShell como administrador ejecuta `DISM /Online /Get-ReservedStorageState`. Windows puede haber apartado varios gigabytes para que las actualizaciones se instalen sin problemas.',
          },
          {
            name: 'Probar una unidad sospechosa',
            text: 'Si un pendrive barato o un disco externo resulta mucho más pequeño de lo esperado, verifica su capacidad con una prueba de escritura real. Solo llenando la unidad por completo y leyéndola de vuelta sabrás si de verdad guarda lo que promete.',
          },
        ],
      },
      sections: [
        {
          title: 'La causa real: ¿1000 o 1024?',
          content: [
            'Los fabricantes de discos duros y SSD cuentan la capacidad en decimal. Para ellos un kilobyte son 1000 bytes, un megabyte 1.000.000 de bytes y un terabyte 1.000.000.000.000 de bytes. El «1 TB» de la etiqueta es exactamente eso y no es incorrecto; en el sistema internacional de unidades el prefijo «tera» ya significa 10¹².',
            'Windows divide esos mismos bytes en binario: 1024, 1024², 1024³. El problema no es la división sino la etiqueta: Windows escribe el resultado como «GB» en lugar de «GiB» (gibibyte). Divide 1.000.000.000.000 bytes entre 1024³ y obtienes 931,32, que aparece en pantalla como «931 GB».',
            'Por eso la diferencia es siempre la misma proporción: alrededor del 7,4 %. Un disco de 500 GB muestra 465 GB, uno de 1 TB muestra 931 GB, uno de 2 TB muestra 1863 GB y uno de 4 TB muestra 3725 GB. Cambiar de marca no altera nada, porque la aritmética es idéntica en todos los discos.',
          ],
        },
        {
          title: '¿Por qué un Mac lo muestra distinto?',
          content: [
            'Conecta el mismo disco a un Mac y la capacidad aparece mucho más cerca de la etiqueta. El motivo es simple: desde 10.6 Snow Leopard, macOS informa de los tamaños de almacenamiento en decimal. Apple habla el mismo idioma que el fabricante.',
            'Eso no significa que el Mac «te dé más espacio». Ambos sistemas ven el mismo número de bytes; solo lo escriben distinto. El mismo archivo en el mismo disco puede verse como 4,66 GB en Windows y 5,0 GB en un Mac: el archivo no cambió, cambió la unidad.',
            'Las distribuciones de Linux usan ambas. `df -h` informa en binario (GiB) y `df -H` en decimal, y muchas herramientas explicitan la distinción escribiendo «GiB» y «GB». Eso es, de hecho, lo que Windows debería hacer también.',
          ],
        },
        {
          title: 'Lo que sí ocupa espacio',
          content: [
            'Más allá de la diferencia de unidades, unos cuantos gigabytes desaparecen de verdad. Primero, las particiones. Una instalación moderna de Windows lleva al menos dos particiones además de C:: una partición del sistema EFI de 100-300 MB y una de recuperación de entre 500 MB y unos pocos gigabytes. En equipos prefabricados se añade la partición de restauración del fabricante, que puede ocupar 10-20 GB.',
            'Segundo, las estructuras propias del sistema de archivos. NTFS reserva espacio para la tabla maestra de archivos, donde registra cada archivo del disco, más un diario y sectores de arranque de respaldo. Normalmente es menos del 1 % de la capacidad, pero no es cero.',
            'Tercero, el espacio que Windows aparta para sí. Desde Windows 10 versión 1903, la función Almacenamiento reservado retiene varios gigabytes para que las actualizaciones se instalen sin quedarse sin sitio. Ese espacio no figura como usado en el Explorador, pero tampoco está disponible. `DISM /Online /Get-ReservedStorageState` muestra su estado.',
          ],
        },
        {
          title: 'Cuándo preocuparse: unidades con capacidad falsa',
          content: [
            'Todas las diferencias descritas hasta aquí son previsibles y normales. Hay una situación, en cambio, que sí es un problema: los pendrives y tarjetas de memoria con capacidad falsificada. Su controlador miente al sistema operativo: se presenta como 1 TB cuando el chip interior solo guarda 8 o 16 GB.',
            'El síntoma es este: la unidad parece normal, los primeros archivos se copian bien, pero al superar la capacidad real todo lo que se escribe después desaparece o se corrompe en silencio. El archivo permanece en el listado y al abrirlo resulta estar dañado. Es el tipo de problema que se descubre meses después, justo cuando necesitas la copia de seguridad.',
            'La protección consiste en llenar una unidad nueva hasta el final y volver a leerla antes de confiar en ella. Solo así sabrás que su capacidad es realmente la que dice. En pendrives de gran capacidad, sospechosamente baratos y de marca desconocida, esa prueba no es opcional: es un paso obligado.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Formatear de nuevo el disco recupera el espacio que falta?',
          answer:
            'No, la parte causada por las unidades no, porque en realidad no falta espacio. Ahora bien, si hay una partición de recuperación antigua o espacio sin asignar, fusionar particiones puede recuperar unos gigabytes. Asegúrate de tener medios de recuperación antes de borrar una partición de restauración de fábrica.',
        },
        {
          question: '¿Hay diferencia de capacidad entre exFAT, NTFS y APFS?',
          answer:
            'Una pequeña. Cada sistema de archivos reserva espacio para su propia contabilidad y usa tamaños de clúster distintos. Con muchísimos archivos pequeños la diferencia crece, pero por sí sola no explica varios gigabytes.',
        },
        {
          question: '¿El sobreaprovisionamiento de los SSD reduce la capacidad?',
          answer:
            'El área que el controlador reserva para el nivelado de desgaste ya queda fuera de la capacidad etiquetada; en un SSD de 1 TB no se resta del 1 TB anunciado. Aparte, dejar tú mismo parte del disco libre actúa como sobreaprovisionamiento adicional y ayuda al rendimiento.',
        },
        {
          question: '¿Mi teléfono muestra la misma diferencia?',
          answer:
            'Sí, se aplica la misma aritmética. Además, el sistema operativo y las apps preinstaladas ocupan almacenamiento interno, por eso un teléfono de 128 GB suele mostrar unos 105-112 GB utilizables.',
        },
      ],
      verdict: [
        'Que un disco de 1 TB muestre 931 GB no es un fallo, es el resultado de dos formas distintas de contar. Si sumas las particiones de recuperación y la contabilidad del sistema de archivos, el espacio utilizable en un equipo Windows típico queda en torno al 90-92 % de la etiqueta. Es completamente normal.',
        'Lo que importa no es cómo de grande es el disco, sino qué hay dentro. Los módulos Análisis de disco y Disk Treemap de Disk Mop muestran carpeta por carpeta a dónde fue el espacio restante; para la mayoría, liberar 30-40 GB de basura real compensa mucho más que preocuparse por la diferencia de unidades.',
      ],
      ctaText: 'Descubre qué ocupa realmente tu disco',
    },
    it: {
      title: 'Perché un disco da 1 TB mostra 931 GB? La capacità mancante spiegata',
      metaDescription:
        'Un disco da 1 TB appare come 931 GB in Windows. Non manca nulla: i produttori contano in migliaia, Windows divide per 1024. Ecco cosa spiega il resto della differenza.',
      subtitle: 'Non spazio perduto, ma una differenza di unità',
      intro: [
        'Risposta breve: non manca spazio. Quando un produttore dichiara 1 TB intende 1.000.000.000.000 byte; Windows divide lo stesso numero per 1024 ed etichetta il risultato come «931 GB». La differenza di circa il 7% deriva interamente da questa discrepanza di unità ed è identica per ogni marca e modello.',
        'A ciò si aggiungono alcune voci che consumano davvero spazio: una partizione di ripristino, la partizione di avvio EFI e le strutture interne del file system. Questa guida separa la parte puramente aritmetica della differenza da quella reale e spiega quando il divario è invece il segnale di una truffa.',
      ],
      keyTakeaways: [
        'I produttori usano unità decimali: 1 TB = 1.000.000.000.000 byte. Windows divide in binario (1024³) ma continua a scrivere «GB».',
        'Un disco da 1 TB mostra 931 GB, uno da 2 TB 1863 GB, uno da 500 GB 465 GB. La proporzione è sempre la stessa.',
        'macOS usa unità decimali dalla 10.6, perciò lo stesso disco appare molto più vicino all\'etichetta su un Mac.',
        'Ciò che occupa spazio davvero: la partizione di ripristino (500 MB-20 GB), la partizione EFI (100-300 MB) e la Master File Table di NTFS.',
        'Se il divario supera il 10% su un disco non nuovo, cerca una partizione di ripristino del produttore nascosta o spazio non allocato.',
        'Molto meno spazio del previsto — per esempio un disco «da 2 TB» che corrompe i dati dopo 8 GB — è la firma di un\'unità con capacità falsificata.',
      ],
      howTo: {
        name: 'Verificare la capacità reale di un\'unità',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Leggere il numero esatto di byte',
            text: 'Fai clic destro sull\'unità in Esplora file e apri Proprietà. La riga «Capacità» mostra i GB e, tra parentesi, il numero esatto di byte. Dividi quel numero per 1.000.000.000 per ottenere i GB del produttore.',
          },
          {
            name: 'Controllare le partizioni',
            text: 'Fai clic destro su Start e apri Gestione disco. Oltre a C:, il disco può contenere una partizione di sistema EFI, una di ripristino o una di ripristino del produttore. Occupano spazio reale e non compaiono mai in Esplora file.',
          },
          {
            name: 'Guardare lo spazio riservato',
            text: 'In una PowerShell come amministratore esegui `DISM /Online /Get-ReservedStorageState`. Windows potrebbe aver messo da parte diversi gigabyte perché gli aggiornamenti si installino correttamente.',
          },
          {
            name: 'Testare un\'unità sospetta',
            text: 'Se una chiavetta USB economica o un disco esterno risulta molto più piccolo del previsto, verifica la capacità con un vero test di scrittura. Solo riempiendo del tutto l\'unità e rileggendola si capisce se contiene davvero quanto dichiara.',
          },
        ],
      },
      sections: [
        {
          title: 'La causa vera: 1000 o 1024?',
          content: [
            'I produttori di dischi rigidi e SSD contano la capacità in decimale. Per loro un kilobyte è 1000 byte, un megabyte 1.000.000 di byte e un terabyte 1.000.000.000.000 di byte. Il «1 TB» sull\'etichetta è esattamente questo e non è sbagliato: nel sistema internazionale di unità il prefisso «tera» significa già 10¹².',
            'Windows divide gli stessi byte in binario: 1024, 1024², 1024³. Il problema non è la divisione ma l\'etichetta: Windows scrive il risultato come «GB» anziché «GiB» (gibibyte). Dividendo 1.000.000.000.000 byte per 1024³ si ottiene 931,32, che a schermo compare come «931 GB».',
            'Per questo il divario è sempre nella stessa proporzione: circa il 7,4%. Un disco da 500 GB mostra 465 GB, uno da 1 TB mostra 931 GB, uno da 2 TB mostra 1863 GB e uno da 4 TB mostra 3725 GB. Cambiare marca non modifica nulla, perché il calcolo è identico su ogni disco.',
          ],
        },
        {
          title: 'Perché un Mac riporta valori diversi?',
          content: [
            'Collega lo stesso disco a un Mac e la capacità appare molto più vicina all\'etichetta. Il motivo è semplice: dalla 10.6 Snow Leopard macOS riporta le dimensioni di archiviazione in decimale. Apple parla la stessa lingua del produttore.',
            'Questo non significa che il Mac «dia più spazio». Entrambi i sistemi vedono lo stesso numero di byte, lo scrivono soltanto in modo diverso. Lo stesso file sullo stesso disco può risultare 4,66 GB in Windows e 5,0 GB su Mac: il file non è cambiato, è cambiata l\'unità.',
            'Le distribuzioni Linux usano entrambe. `df -h` riporta in binario (GiB), `df -H` in decimale, e molti strumenti esplicitano la distinzione scrivendo «GiB» e «GB». È in effetti ciò che dovrebbe fare anche Windows.',
          ],
        },
        {
          title: 'Cosa occupa spazio davvero',
          content: [
            'Oltre alla differenza di unità, qualche gigabyte se ne va sul serio. Primo, le partizioni. Un\'installazione moderna di Windows porta almeno due partizioni oltre a C:: una partizione di sistema EFI da 100-300 MB e una di ripristino da 500 MB a qualche gigabyte. Sui computer preassemblati si aggiunge la partizione di ripristino del produttore, che può pesare 10-20 GB.',
            'Secondo, le strutture proprie del file system. NTFS riserva spazio per la Master File Table, dove registra ogni file del disco, più un journal e settori di avvio di riserva. In genere è meno dell\'1% della capacità, ma non è zero.',
            'Terzo, lo spazio che Windows riserva a sé stesso. Dalla versione 1903 di Windows 10, la funzione Spazio riservato trattiene diversi gigabyte perché gli aggiornamenti possano installarsi senza rimanere senza posto. Quello spazio non compare come occupato in Esplora file ma non è nemmeno disponibile. `DISM /Online /Get-ReservedStorageState` ne mostra lo stato.',
          ],
        },
        {
          title: 'Quando preoccuparsi: unità con capacità falsificata',
          content: [
            'Tutte le differenze descritte finora sono prevedibili e normali. Una situazione però è un problema vero: chiavette USB e schede di memoria con capacità falsificata. Il loro controller mente al sistema operativo: si presenta come 1 TB mentre il chip interno contiene solo 8 o 16 GB.',
            'Il sintomo è questo: l\'unità sembra normale, i primi file si copiano senza problemi, ma superata la capacità reale tutto ciò che viene scritto dopo sparisce o si corrompe in silenzio. Il file resta nell\'elenco e all\'apertura risulta danneggiato. È il tipo di problema che si scopre mesi dopo, proprio quando serve il backup.',
            'La difesa consiste nel riempire fino in fondo un\'unità nuova e rileggerla prima di fidarsene. Solo così si sa che la capacità è davvero quella dichiarata. Su chiavette ad alta capacità insolitamente economiche e di marca sconosciuta questo test non è facoltativo: è un passaggio necessario.',
          ],
        },
      ],
      faq: [
        {
          question: 'Riformattare il disco recupera lo spazio mancante?',
          answer:
            'No, non la parte dovuta alle unità, perché in realtà non manca nulla. Tuttavia, se c\'è una vecchia partizione di ripristino o spazio non allocato, unire le partizioni può recuperare qualche gigabyte. Assicurati di avere un supporto di ripristino prima di eliminare una partizione di ripristino di fabbrica.',
        },
        {
          question: 'C\'è differenza di capacità tra exFAT, NTFS e APFS?',
          answer:
            'Una piccola. Ogni file system riserva spazio per le proprie strutture e usa dimensioni di cluster diverse. Con moltissimi file piccoli la differenza cresce, ma da sola non spiega diversi gigabyte.',
        },
        {
          question: 'L\'over-provisioning degli SSD riduce la capacità?',
          answer:
            'L\'area che il controller riserva al livellamento dell\'usura si trova già fuori dalla capacità dichiarata: su un SSD da 1 TB non viene sottratta al TB pubblicizzato. A parte questo, lasciare tu stesso una porzione del disco libera funziona come over-provisioning aggiuntivo e aiuta le prestazioni.',
        },
        {
          question: 'Il mio telefono mostra la stessa differenza?',
          answer:
            'Sì, vale la stessa aritmetica. In più, sistema operativo e app preinstallate occupano la memoria interna, ecco perché un telefono da 128 GB mostra tipicamente 105-112 GB utilizzabili.',
        },
      ],
      verdict: [
        'Che un disco da 1 TB mostri 931 GB non è un guasto, è il risultato di due modi diversi di contare. Aggiungendo partizioni di ripristino e strutture del file system, lo spazio utilizzabile su una macchina Windows tipica si attesta intorno al 90-92% dell\'etichetta. È del tutto normale.',
        'Ciò che conta non è quanto è grande il disco, ma cosa c\'è dentro. I moduli Analisi disco e Disk Treemap di Disk Mop mostrano cartella per cartella dove è finito lo spazio residuo; per la maggior parte delle persone liberare 30-40 GB di vero ingombro rende molto più che preoccuparsi della differenza di unità.',
      ],
      ctaText: 'Scopri cosa occupa davvero il tuo disco',
    },
    pt: {
      title: 'Por que um disco de 1 TB aparece como 931 GB? A capacidade que falta, explicada',
      metaDescription:
        'Um disco de 1 TB aparece como 931 GB no Windows. Nada está faltando: fabricantes contam em milhares e o Windows divide por 1024. Veja o que explica o resto da diferença.',
      subtitle: 'Não é espaço perdido, é diferença de unidades',
      intro: [
        'Resposta curta: não falta espaço. Quando um fabricante diz 1 TB, ele quer dizer 1.000.000.000.000 bytes; o Windows divide esse mesmo número por 1024 e rotula o resultado como «931 GB». A diferença de cerca de 7% vem inteiramente desse descompasso de unidades e é idêntica em qualquer marca e modelo.',
        'A isso somam-se alguns itens que realmente consomem espaço: uma partição de recuperação, a partição de inicialização EFI e a contabilidade interna do sistema de arquivos. Este guia separa a parte puramente aritmética da diferença daquela que é real — e explica quando essa diferença é de fato sinal de fraude.',
      ],
      keyTakeaways: [
        'Fabricantes usam unidades decimais: 1 TB = 1.000.000.000.000 bytes. O Windows divide em binário (1024³) mas ainda rotula «GB».',
        'Um disco de 1 TB mostra 931 GB, um de 2 TB mostra 1863 GB, um de 500 GB mostra 465 GB. A proporção é sempre a mesma.',
        'O macOS usa unidades decimais desde a 10.6, então o mesmo disco aparece bem mais próximo do rótulo em um Mac.',
        'O que consome espaço de verdade: a partição de recuperação (500 MB-20 GB), a partição EFI (100-300 MB) e a tabela mestra de arquivos do NTFS.',
        'Se a diferença passar de 10% em um disco que não é novo, procure uma partição de recuperação do fabricante oculta ou espaço não alocado.',
        'Muito menos espaço do que o esperado — por exemplo um disco «de 2 TB» que corrompe dados após 8 GB — é a marca de uma unidade com capacidade falsificada.',
      ],
      howTo: {
        name: 'Verificar a capacidade real de uma unidade',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ler o número exato de bytes',
            text: 'Clique com o botão direito na unidade no Explorador e abra Propriedades. A linha «Capacidade» mostra os GB e, entre parênteses, o número exato de bytes. Divida esse número por 1.000.000.000 para obter o valor em GB do fabricante.',
          },
          {
            name: 'Conferir as partições',
            text: 'Clique com o botão direito em Iniciar e abra o Gerenciamento de Disco. Além de C:, seu disco pode ter uma partição de sistema EFI, uma de recuperação ou uma de restauração do fabricante. Elas ocupam espaço real e nunca aparecem no Explorador.',
          },
          {
            name: 'Ver o armazenamento reservado',
            text: 'Em um PowerShell como administrador execute `DISM /Online /Get-ReservedStorageState`. O Windows pode ter separado vários gigabytes para que as atualizações instalem sem problemas.',
          },
          {
            name: 'Testar uma unidade suspeita',
            text: 'Se um pen drive barato ou um disco externo vier bem menor que o esperado, verifique a capacidade com um teste de escrita real. Só enchendo a unidade até o fim e lendo de volta dá para saber se ela guarda mesmo o que promete.',
          },
        ],
      },
      sections: [
        {
          title: 'A causa real: 1000 ou 1024?',
          content: [
            'Fabricantes de discos rígidos e SSDs contam a capacidade em decimal. Para eles um kilobyte são 1000 bytes, um megabyte 1.000.000 de bytes e um terabyte 1.000.000.000.000 de bytes. O «1 TB» do rótulo é exatamente isso, e não está errado: no sistema internacional de unidades o prefixo «tera» já significa 10¹².',
            'O Windows divide esses mesmos bytes em binário: 1024, 1024², 1024³. O problema não é a divisão, é o rótulo — o Windows escreve o resultado como «GB» em vez de «GiB» (gibibyte). Divida 1.000.000.000.000 bytes por 1024³ e você obtém 931,32, que aparece na tela como «931 GB».',
            'Por isso a diferença está sempre na mesma proporção: cerca de 7,4%. Um disco de 500 GB mostra 465 GB, o de 1 TB mostra 931 GB, o de 2 TB mostra 1863 GB e o de 4 TB mostra 3725 GB. Trocar de marca não muda nada, porque a conta é idêntica em todos os discos.',
          ],
        },
        {
          title: 'Por que um Mac mostra outro valor?',
          content: [
            'Conecte o mesmo disco a um Mac e a capacidade aparece bem mais perto do rótulo. O motivo é simples: desde a 10.6 Snow Leopard o macOS informa os tamanhos de armazenamento em decimal. A Apple fala a mesma língua do fabricante.',
            'Isso não significa que o Mac «dê mais espaço». Os dois sistemas veem o mesmo número de bytes; apenas escrevem de forma diferente. O mesmo arquivo no mesmo disco pode aparecer como 4,66 GB no Windows e 5,0 GB no Mac — o arquivo não mudou, a unidade mudou.',
            'As distribuições Linux usam as duas. `df -h` informa em binário (GiB) e `df -H` em decimal, e muitas ferramentas deixam a distinção explícita escrevendo «GiB» e «GB». É, aliás, o que o Windows também deveria fazer.',
          ],
        },
        {
          title: 'O que realmente ocupa espaço',
          content: [
            'Além da diferença de unidades, alguns gigabytes somem de verdade. Primeiro, as partições. Uma instalação moderna do Windows traz pelo menos duas partições além de C:: uma partição de sistema EFI de 100-300 MB e uma de recuperação de 500 MB a alguns gigabytes. Em máquinas prontas soma-se a partição de restauração do fabricante, que pode ter 10-20 GB.',
            'Segundo, as estruturas do próprio sistema de arquivos. O NTFS reserva espaço para a tabela mestra de arquivos, onde registra cada arquivo do disco, além de um diário e setores de inicialização de reserva. Normalmente é menos de 1% da capacidade, mas não é zero.',
            'Terceiro, o espaço que o Windows reserva para si. Desde o Windows 10 versão 1903, o recurso Armazenamento Reservado retém vários gigabytes para que as atualizações instalem sem ficar sem espaço. Esse espaço não aparece como usado no Explorador, mas também não está disponível. `DISM /Online /Get-ReservedStorageState` mostra o estado.',
          ],
        },
        {
          title: 'Quando se preocupar: unidades com capacidade falsa',
          content: [
            'Todas as diferenças descritas até aqui são previsíveis e normais. Uma situação, porém, é um problema real: pen drives e cartões de memória com capacidade falsificada. O controlador deles mente para o sistema operacional — apresenta-se como 1 TB enquanto o chip interno guarda apenas 8 ou 16 GB.',
            'O sintoma é este: a unidade parece normal, os primeiros arquivos copiam sem problema, mas passada a capacidade real tudo o que é gravado depois some ou se corrompe em silêncio. O arquivo continua na lista e, ao abrir, está danificado. É o tipo de problema que se descobre meses depois, exatamente quando você precisa do backup.',
            'A proteção é encher uma unidade nova até o fim e lê-la de volta antes de confiar nela. Só assim você sabe que a capacidade é mesmo a anunciada. Em pen drives de alta capacidade estranhamente baratos e de marca desconhecida, esse teste não é opcional: é um passo necessário.',
          ],
        },
      ],
      faq: [
        {
          question: 'Formatar o disco de novo recupera o espaço que falta?',
          answer:
            'Não, a parte causada pelas unidades não, porque nada está realmente faltando. Mas, se houver uma partição de recuperação antiga ou espaço não alocado, unir partições pode recuperar alguns gigabytes. Garanta uma mídia de recuperação antes de apagar uma partição de restauração de fábrica.',
        },
        {
          question: 'Há diferença de capacidade entre exFAT, NTFS e APFS?',
          answer:
            'Uma pequena. Cada sistema de arquivos reserva espaço para a própria contabilidade e usa tamanhos de cluster diferentes. Com muitos arquivos pequenos a diferença cresce, mas sozinha não explica vários gigabytes.',
        },
        {
          question: 'O over-provisioning dos SSDs reduz a capacidade?',
          answer:
            'A área que o controlador reserva para nivelamento de desgaste já fica fora da capacidade rotulada; num SSD de 1 TB ela não sai do 1 TB anunciado. À parte disso, deixar você mesmo parte do disco livre funciona como over-provisioning extra e ajuda o desempenho.',
        },
        {
          question: 'Meu celular mostra a mesma diferença?',
          answer:
            'Sim, vale a mesma conta. Além disso, o sistema operacional e os apps pré-instalados ocupam o armazenamento interno, por isso um celular de 128 GB costuma mostrar cerca de 105-112 GB utilizáveis.',
        },
      ],
      verdict: [
        'Um disco de 1 TB aparecer como 931 GB não é defeito, é o resultado de duas formas diferentes de contar. Somando partições de recuperação e a contabilidade do sistema de arquivos, o espaço utilizável numa máquina Windows típica fica em torno de 90-92% do rótulo. Isso é completamente normal.',
        'O que importa não é o tamanho do disco, mas o que há dentro dele. Os módulos Análise de disco e Disk Treemap do Disk Mop mostram pasta a pasta para onde foi o espaço restante; para a maioria das pessoas, liberar 30-40 GB de entulho real vale muito mais do que se preocupar com a diferença de unidades.',
      ],
      ctaText: 'Veja o que realmente ocupa o seu disco',
    },
    ja: {
      title: '1 TB のドライブが 931 GB と表示されるのはなぜか: 消えた容量の正体',
      metaDescription:
        '1 TB のドライブは Windows で 931 GB と表示されます。容量が失われているのではなく、メーカーは 1000 進、Windows は 1024 進で計算しているためです。残りの差の理由も解説します。',
      subtitle: '失われた容量ではなく、単位の違い',
      intro: [
        '短い答え: 容量は失われていません。メーカーが 1 TB と言うとき、それは 1,000,000,000,000 バイトを指します。Windows は同じ数値を 1024 で割り、その結果に「931 GB」というラベルを付けます。約 7% の差はすべてこの単位の食い違いによるもので、どのメーカーのどのモデルでも同じです。',
        'それに加えて、実際に容量を消費するものがいくつかあります。回復パーティション、EFI ブートパーティション、そしてファイルシステム自体の管理領域です。この記事では、差のうち単なる計算による部分と実際に消費されている部分を切り分け、さらにこの差が本当に詐欺のサインとなる場合を説明します。',
      ],
      keyTakeaways: [
        'メーカーは 10 進法を使います。1 TB = 1,000,000,000,000 バイト。Windows は 2 進法（1024³）で割りますが、結果に「GB」と表記します。',
        '1 TB のドライブは 931 GB、2 TB は 1863 GB、500 GB は 465 GB と表示されます。この比率は常に同じです。',
        'macOS は 10.6 以降 10 進法を使うため、同じディスクでも Mac ではラベルにずっと近い値で表示されます。',
        '実際に容量を消費するもの: 回復パーティション（500 MB〜20 GB）、EFI パーティション（100〜300 MB）、NTFS のマスターファイルテーブル。',
        '新品でないディスクで差が 10% を超える場合は、隠れたメーカー回復パーティションや未割り当て領域を疑ってください。',
        '想定よりはるかに少ない容量（たとえば「2 TB」表示なのに 8 GB を超えるとデータが壊れる）は、容量偽装ドライブの特徴です。',
      ],
      howTo: {
        name: 'ドライブの実際の容量を確認する',
        totalTime: 'PT10M',
        steps: [
          {
            name: '正確なバイト数を読む',
            text: 'エクスプローラーでドライブを右クリックしてプロパティを開きます。「容量」の行に GB と、括弧内に正確なバイト数が表示されます。そのバイト数を 1,000,000,000 で割ると、メーカー表記の GB になります。',
          },
          {
            name: 'パーティションを確認する',
            text: 'スタートを右クリックしてディスクの管理を開きます。C: 以外に EFI システムパーティション、回復パーティション、メーカーの復元パーティションが存在することがあります。これらは実際に容量を占め、エクスプローラーには現れません。',
          },
          {
            name: '予約済み記憶域を確認する',
            text: '管理者権限の PowerShell で `DISM /Online /Get-ReservedStorageState` を実行します。更新プログラムを問題なくインストールするために、Windows が数ギガバイトを確保している場合があります。',
          },
          {
            name: '疑わしいドライブをテストする',
            text: '安価な USB メモリや外付けディスクが想定よりはるかに小さい場合は、実際の書き込みテストで容量を確認してください。ドライブを最後まで埋めて読み戻すことでしか、公称どおりの容量かどうかは分かりません。',
          },
        ],
      },
      sections: [
        {
          title: '本当の原因: 1000 か 1024 か',
          content: [
            'ハードディスクや SSD のメーカーは容量を 10 進法で数えます。彼らにとって 1 キロバイトは 1000 バイト、1 メガバイトは 1,000,000 バイト、1 テラバイトは 1,000,000,000,000 バイトです。ラベルの「1 TB」はまさにこれで、間違いではありません。国際単位系では接頭語「テラ」はもともと 10¹² を意味します。',
            '一方 Windows は同じバイト数を 2 進法で割ります。1024、1024²、1024³ です。問題は割り算ではなく表記にあります。Windows は結果を「GiB」（ギビバイト）ではなく「GB」と書きます。1,000,000,000,000 バイトを 1024³ で割ると 931.32 となり、画面には「931 GB」と表示されます。',
            'だから差は常に同じ割合、約 7.4% になります。500 GB のドライブは 465 GB、1 TB は 931 GB、2 TB は 1863 GB、4 TB は 3725 GB と表示されます。別のメーカーを買っても変わりません。計算はどのディスクでも同じだからです。',
          ],
        },
        {
          title: 'Mac では表示が違うのはなぜか',
          content: [
            '同じディスクを Mac に接続すると、容量はラベルにずっと近く見えます。理由は単純で、macOS は 10.6 Snow Leopard 以降、ストレージのサイズを 10 進法で報告するからです。つまり Apple はメーカーと同じ言葉を話しています。',
            'これは Mac が「容量を多くくれる」という意味ではありません。両方の OS が見ているバイト数は同じで、書き方が違うだけです。同じディスク上の同じファイルが Windows では 4.66 GB、Mac では 5.0 GB と表示されることがあります。ファイルは変わっておらず、単位が変わっただけです。',
            'Linux ディストリビューションは両方を使います。`df -h` は 2 進法（GiB）、`df -H` は 10 進法で報告し、多くのツールは「GiB」と「GB」を書き分けて区別を明示します。本来は Windows もそうすべきところです。',
          ],
        },
        {
          title: '実際に容量を消費しているもの',
          content: [
            '単位の違いを別にしても、数ギガバイトは本当に消えています。1 つ目はパーティションです。最近の Windows のインストールでは C: 以外に少なくとも 2 つのパーティションがあります。100〜300 MB の EFI システムパーティションと、500 MB から数ギガバイトの回復パーティションです。メーカー製 PC ではさらに工場出荷時復元パーティションが加わり、10〜20 GB になることもあります。',
            '2 つ目はファイルシステム自身の構造です。NTFS はディスク上のすべてのファイルを記録するマスターファイルテーブルのために領域を確保し、さらにジャーナルとバックアップ用のブートレコードを持ちます。通常は容量の 1% 未満ですが、ゼロではありません。',
            '3 つ目は Windows 自身が確保する領域です。Windows 10 バージョン 1903 以降、「予約済み記憶域」機能が、更新プログラムを容量不足なくインストールできるように数ギガバイトを確保します。この領域はエクスプローラーで使用済みとは表示されませんが、使うこともできません。`DISM /Online /Get-ReservedStorageState` で状態を確認できます。',
          ],
        },
        {
          title: '警戒すべきとき: 容量偽装ドライブ',
          content: [
            'ここまで説明した差はすべて予測可能で正常なものです。しかし 1 つだけ本当に問題となる状況があります。容量を偽装した USB メモリやメモリカードです。これらのコントローラーは OS に嘘をつきます。内部のチップは 8 GB や 16 GB しかないのに、1 TB として自分を申告します。',
            '症状はこうです。ドライブは正常に見え、最初のファイルは問題なくコピーできますが、実際の容量を超えた瞬間から、書き込んだデータは黙って消えるか壊れます。ファイルは一覧に残り、開くと破損しています。バックアップが必要になった数か月後に気づく類の問題です。',
            '身を守る方法は、新しいドライブを本格的に使い始める前に最後まで埋めて読み戻すことです。そうして初めて、公称どおりの容量であることが分かります。不自然に安い無名ブランドの大容量メモリでは、このテストは任意ではなく必須の手順です。',
          ],
        },
      ],
      faq: [
        {
          question: 'フォーマットし直せば消えた容量は戻りますか。',
          answer:
            'いいえ、単位に起因する分は戻りません。そもそも失われていないからです。ただし古い回復パーティションや未割り当て領域があるなら、パーティションを統合して数ギガバイトを取り戻せます。工場出荷時復元パーティションを削除する前に、回復メディアを用意してください。',
        },
        {
          question: 'exFAT、NTFS、APFS で容量に差はありますか。',
          answer:
            'わずかにあります。どのファイルシステムも自身の管理情報のために領域を確保し、クラスターサイズも異なります。非常に多くの小さなファイルがあると差は広がりますが、それだけで数ギガバイトを説明することはできません。',
        },
        {
          question: 'SSD のオーバープロビジョニングは容量を減らしますか。',
          answer:
            'コントローラーがウェアレベリング用に確保する領域は、もともと表示容量の外にあります。1 TB の SSD であれば、広告されている 1 TB から差し引かれるわけではありません。なお、利用者側でディスクの一部を空けておくことも追加のオーバープロビジョニングとして働き、性能に役立ちます。',
        },
        {
          question: 'スマートフォンでも同じ差がありますか。',
          answer:
            'はい、同じ計算が当てはまります。加えてスマートフォンでは OS とプリインストールアプリが内部ストレージを占めるため、128 GB の端末で実際に使えるのは通常 105〜112 GB 程度になります。',
        },
      ],
      verdict: [
        '1 TB のドライブが 931 GB と表示されるのは故障ではなく、2 つの異なる数え方の結果です。これに回復パーティションとファイルシステムの管理領域を加えると、一般的な Windows マシンで使える容量はラベルのおよそ 90〜92% になります。まったく正常です。',
        '重要なのはドライブの大きさではなく、中身です。Disk Mop の「ディスク解析」と Disk Treemap は、残りの容量がどこへ行ったのかをフォルダー単位で示します。多くの人にとっては、単位の差を気にするより、30〜40 GB の実際の不要データを片付けるほうがはるかに効果的です。',
      ],
      ctaText: 'ドライブの容量を実際に使っているものを確認する',
    },
  },
};
