import type { Article } from '../types';

export const ssdSlowsDownWhenFull: Article = {
  slug: 'ssd-slows-down-when-full',
  type: 'guide',
  category: 'Performance',
  date: '2026-09-04',
  readingTime: 8,
  content: {
    tr: {
      title: 'Dolu SSD Neden Yavaşlar? SLC Önbelleği ve Çöp Toplama',
      metaDescription:
        'SSD dolunca yazma hızı neden çöker? Sebep parçalanma değil: SLC önbelleğinin küçülmesi ve çöp toplamanın yazma sırasında devreye girmesi. Mekanizma ve çözümü.',
      subtitle: 'Sebep Parçalanma Değil, Yazma Mimarisi',
      intro: [
        'Kısa cevap: SSD dolduğunda yavaşlamasının iki sebebi vardır. Birincisi, sürücünün hızlı yazma bölgesi olan SLC önbelleği boş alanla orantılıdır ve disk dolunca küçülür ya da tamamen kaybolur. İkincisi, silinmiş blokları temizleyen çöp toplama işlemi boş yer kalmayınca arka planda değil, siz yazarken çalışmak zorunda kalır.',
        'Bu, sabit disklerdeki parçalanmayla ilgisi olmayan tamamen farklı bir olaydır — ve SSD\'yi birleştirmek (defrag) durumu iyileştirmez, aksine gereksiz yazma yaratıp ömrü kısaltır. Okuma hızları neredeyse hiç etkilenmez; çöken şey yazma hızıdır. Bu rehberde mekanizmayı ve ne kadar boş alan bırakmanız gerektiğini anlatıyoruz.',
      ],
      keyTakeaways: [
        'SSD yavaşlaması parçalanmadan kaynaklanmaz; SSD\'yi birleştirmek fayda sağlamaz ve gereksiz yazma yaratır.',
        'Modern SSD\'ler TLC/QLC hücreleri geçici olarak tek bitlik (SLC) modda kullanarak hızlı bir yazma önbelleği oluşturur; bu önbelleğin boyutu BOŞ ALANLA ORANTILIDIR.',
        'Önbellek tükendiğinde yazma hızı hücrenin gerçek hızına düşer: TLC\'de birkaç kat, QLC\'de 10 kata varan yavaşlama görülebilir.',
        'NAND belleğe üzerine yazılamaz; blok silinmeden yazılamaz. Boş blok kalmayınca çöp toplama yazma işleminin ortasında çalışır ve gecikme yaratır.',
        'Okuma performansı dolulukla neredeyse hiç değişmez. Yavaşlayan taraf yazmadır.',
        'Pratik kural: kapasitenin en az %10-15\'ini boş bırakın. QLC sürücülerde %20 daha güvenlidir.',
      ],
      howTo: {
        name: 'Dolu bir SSD\'de performansı geri kazanma',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Doluluk oranını ölçün',
            text: 'Sürücünün ne kadarının dolu olduğuna bakın. %85\'in üzerindeyse yavaşlamanın ilk açıklaması budur; %95\'in üzerindeyse yazma hızındaki düşüş dramatik olur.',
          },
          {
            name: 'TRIM\'in açık olduğunu doğrulayın',
            text: 'Windows\'ta komut isteminde `fsutil behavior query DisableDeleteNotify` yazın. Dönen değer 0 ise TRIM etkindir. 1 ise `fsutil behavior set DisableDeleteNotify 0` ile açın. macOS\'ta dâhili SSD\'lerde TRIM zaten açıktır.',
          },
          {
            name: 'Gerçekten yer açın',
            text: 'Hedef, kapasitenin en az %15\'ini boşaltmaktır. En hızlı kazanç genellikle önbellek dosyaları, eski indirmeler, yinelenen dosyalar ve unutulmuş büyük dosyalardan gelir.',
          },
          {
            name: 'Sürücüye toparlanma zamanı tanıyın',
            text: 'Yer açtıktan sonra bilgisayarı bir süre açık ama boşta bırakın. Denetleyici, çöp toplamayı ancak boş zamanda yapabilir; hemen ardından büyük bir kopyalama başlatırsanız aynı yavaşlığı görebilirsiniz.',
          },
          {
            name: 'Birleştirme yapmayın',
            text: 'Windows\'un "Sürücüleri Birleştir ve İyileştir" aracı SSD\'lerde zaten birleştirme değil TRIM çalıştırır. Üçüncü parti bir birleştirme aracını SSD\'ye elle uygulamayın.',
          },
        ],
      },
      sections: [
        {
          title: 'SLC Önbelleği: İlk 50 GB Neden Hızlı, Sonrası Neden Değil?',
          content: [
            'Modern tüketici SSD\'lerinin çoğu TLC (hücre başına 3 bit) veya QLC (hücre başına 4 bit) bellek kullanır. Bir hücreye ne kadar çok bit sıkıştırılırsa yazma o kadar yavaş ve karmaşık olur. Üreticiler bu sorunu şöyle çözer: sürücünün boş hücrelerinin bir kısmını geçici olarak tek bitlik (SLC) modda çalıştırır ve gelen veriyi önce oraya yazar. Bu bölgeye SLC önbelleği denir ve çok hızlıdır.',
            'Kritik nokta şudur: bu önbellek çoğu sürücüde sabit değil, dinamiktir. Boyutu boş alanla orantılıdır. 1 TB\'lık yarı boş bir sürücüde önbellek onlarca gigabayt olabilirken, aynı sürücü %95 dolduğunda birkaç gigabayta iner veya tamamen kaybolur.',
            'Sonucu günlük kullanımda şöyle görürsünüz: büyük bir dosyayı kopyalarken hız önce çok yüksektir, sonra bir anda düşer ve düşük seviyede kalır. Bu, önbelleğin dolduğu ve yazmanın hücrenin gerçek hızına indiği andır. Disk doluysa o "hızlı başlangıç" hiç yaşanmaz — sürücü baştan yavaş moddadır.',
          ],
        },
        {
          title: 'Çöp Toplama ve Yazma Yükseltmesi',
          content: [
            'NAND belleğin temel kısıtı şudur: veriyi doğrudan üzerine yazamazsınız. Yazma sayfa boyutunda yapılırken silme çok daha büyük blok boyutunda yapılır. Bir dosyayı sildiğinizde sürücü o anda hiçbir şeyi fiziksel olarak silmez; yalnızca ilgili sayfaları "geçersiz" diye işaretler.',
            'Gerçek temizlik daha sonra, çöp toplama sırasında olur: denetleyici bir bloktaki hâlâ geçerli sayfaları başka bir yere taşır, sonra bloğun tamamını siler ve yeniden kullanılabilir hâle getirir. Sürücü boştayken bu işlem arka planda yapılır ve siz hiç fark etmezsiniz.',
            'Disk dolduğunda ise temiz blok kalmaz. Denetleyici, siz yazarken aynı anda taşıma ve silme yapmak zorunda kalır. Buna yazma yükseltmesi denir: 1 MB\'lık veriyi yazmak için sürücü içeride birkaç megabayt taşımak zorunda kalır. Hem gecikme artar hem de sürücü daha çok yıpranır.',
          ],
        },
        {
          title: 'Ne Kadar Boş Alan Gerekir ve Neden QLC\'de Daha Fazla?',
          content: [
            'Pratik kural kapasitenin en az %10-15\'ini boş bırakmaktır. Bu rakam keyfi değildir: denetleyicinin çöp toplamayı arka planda yapabilmesi ve SLC önbelleğinin anlamlı bir boyutta kalması için gereken çalışma alanıdır. Kullanıcı olarak bıraktığınız boş alan, fiilen ek bir "aşırı sağlama" görevi görür.',
            'QLC sürücülerde daha cömert olmakta fayda var. QLC hücresi dört bit tuttuğu için doğal yazma hızı düşüktür ve SLC önbelleğine daha çok bağımlıdır. Önbellek tükendiğinde QLC\'de görülen düşüş TLC\'ye göre çok daha serttir; bazı modellerde yazma hızı bir sabit diskin altına inebilir. Böyle bir sürücüde %20 boş alan hedeflemek mantıklıdır.',
            'Bir de TRIM tarafı var. TRIM, işletim sisteminin sürücüye hangi blokların artık silinmiş dosyalara ait olduğunu bildirmesidir; onsuz denetleyici hangi blokların gerçekten boş olduğunu bilemez. TRIM açık olsa bile, temizlenecek blok yoksa faydası sınırlıdır — yani TRIM boş alanın yerine geçmez, boş alanla birlikte çalışır.',
          ],
        },
        {
          title: 'Zaten Doluysa Ne Yapmalı?',
          content: [
            'Yapılacak tek gerçek şey yer açmaktır; başka bir ayar veya araç bu fiziği değiştiremez. Hedefi somut koyun: kapasitenin %15\'i. 500 GB\'lık bir sürücüde bu 75 GB, 1 TB\'lık bir sürücüde 150 GB boş alan demektir.',
            'En hızlı kazanç genellikle dört yerden gelir: sistem ve uygulama önbellekleri, aylardır açılmamış büyük dosyalar, farklı klasörlere dağılmış birebir aynı kopyalar ve İndirilenler klasöründeki eski kurulum dosyaları. Bunlar birlikte tipik bir makinede 30-60 GB tutar ve hiçbiri kişisel veri değildir.',
            'Yer açtıktan sonra sürücüye biraz boş zaman tanıyın. Denetleyicinin biriken çöp toplama işini bitirmesi gerekir; bilgisayarı açık bırakıp hemen büyük bir kopyalamaya girişmezseniz eski hızın döndüğünü görürsünüz. Disk Mop\'un Önbellek Temizleyici, Büyük Dosyalar, Yinelenenler ve İndirilenler modülleri tam bu dört kalemi hedefler; her birinde ne silineceğini önce gösterir, Disk Sağlığı modülü de TRIM durumunu ve S.M.A.R.T. değerlerini aynı ekranda verir.',
          ],
        },
      ],
      faq: [
        {
          question: 'SSD\'yi birleştirmek (defrag) yardımcı olur mu?',
          answer:
            'Hayır. Parçalanma sabit disklerde okuma kafasının fiziksel hareketi yüzünden sorundur; SSD\'de böyle bir hareket yoktur. Birleştirme yalnızca gereksiz yazma yaratır ve ömrü kısaltır. Windows\'un iyileştirme aracı SSD\'lerde zaten birleştirme değil TRIM çalıştırır.',
        },
        {
          question: 'Diski boşaltınca hız hemen geri gelir mi?',
          answer:
            'Genellikle hemen değil, kısa bir süre sonra. Denetleyicinin biriken çöp toplama işini tamamlaması gerekir ve bunu boşta zamanda yapar. Bilgisayarı bir süre açık bırakmak çoğu durumda yeterlidir.',
        },
        {
          question: 'Okuma hızı da düşüyor mu?',
          answer:
            'Çok az. Doluluk esas olarak yazmayı etkiler. Okumada belirgin bir yavaşlama hissediyorsanız sebep büyük ihtimalle başka bir yerdedir: sistem belleği yetersizliği, arka plan taraması veya sürücünün gerçekten yıpranmış olması.',
        },
        {
          question: 'Bölüm oluşturup bir kısmını boş bırakmak işe yarar mı?',
          answer:
            'Evet, bu elle aşırı sağlama olarak bilinir ve çalışır — ama basitçe diski %15 boş tutmakla aynı sonucu verir. Ayrı bir bölüm oluşturmanın tek avantajı, o alanı yanlışlıkla doldurmanızı engellemesidir.',
        },
      ],
      verdict: [
        'Dolu bir SSD\'nin yavaşlaması bir arıza değil, tasarımın doğal sonucudur: hızlı yazma önbelleği boş alana bağlıdır ve çöp toplama nefes alacak yer ister. Çözüm tek bir cümlede özetlenir — kapasitenin %15\'ini boş tutun, QLC sürücülerde %20 hedefleyin.',
        'Bu alanı açmanın en kolay yolu kişisel dosyalarınıza dokunmadan biriken çöpü temizlemektir. Disk Mop\'un Önbellek Temizleyici, Büyük Dosyalar, Yinelenenler ve İndirilenler modülleri tam bunu yapar; Disk Sağlığı modülü ise TRIM durumunu ve sürücünün aşınma göstergelerini tek ekranda gösterir.',
      ],
      ctaText: 'SSD\'nizde yeri gerçekte ne kaplıyor, görün',
    },
    en: {
      title: 'Why Does a Full SSD Get Slow? SLC Cache and Garbage Collection',
      metaDescription:
        'Why does write speed collapse when an SSD fills up? Not fragmentation: the SLC cache shrinks and garbage collection has to run while you write. The mechanism, and the fix.',
      subtitle: 'The Cause Is Not Fragmentation, It Is How Writing Works',
      intro: [
        'Short answer: a full SSD slows down for two reasons. First, the drive\'s fast write area — the SLC cache — is proportional to free space, so it shrinks or disappears entirely as the disk fills. Second, garbage collection, which clears out deleted blocks, can no longer run in the background and has to work while you are writing.',
        'This has nothing to do with fragmentation on hard drives — and defragmenting an SSD does not help; it creates pointless writes and shortens the drive\'s life. Read speeds are barely affected; what collapses is writing. This guide explains the mechanism and how much free space you actually need to leave.',
      ],
      keyTakeaways: [
        'SSD slowdown is not caused by fragmentation; defragmenting an SSD does not help and creates needless writes.',
        'Modern SSDs run some TLC/QLC cells temporarily in single-bit (SLC) mode to form a fast write cache, and the size of that cache is PROPORTIONAL TO FREE SPACE.',
        'Once the cache is exhausted, write speed drops to the cell\'s native rate: several times slower on TLC, up to ten times slower on QLC.',
        'NAND cannot be overwritten; a block must be erased before it can be written. With no clean blocks left, garbage collection runs in the middle of your writes and adds latency.',
        'Read performance barely changes with fullness. It is writing that slows down.',
        'Practical rule: keep at least 10-15% of capacity free. On QLC drives, 20% is safer.',
      ],
      howTo: {
        name: 'Restore performance on a full SSD',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Measure how full it is',
            text: 'Check what share of the drive is used. Above 85% is the first explanation for slowdown; above 95% the drop in write speed becomes dramatic.',
          },
          {
            name: 'Confirm TRIM is on',
            text: 'On Windows run `fsutil behavior query DisableDeleteNotify` at a command prompt. A returned 0 means TRIM is enabled; if it is 1, enable it with `fsutil behavior set DisableDeleteNotify 0`. On macOS, TRIM is already on for internal SSDs.',
          },
          {
            name: 'Actually free space',
            text: 'Aim to free at least 15% of capacity. The quickest wins usually come from cache files, old downloads, duplicate files and forgotten large files.',
          },
          {
            name: 'Give the drive time to recover',
            text: 'After freeing space, leave the computer on but idle for a while. The controller can only do garbage collection when it is idle; start a huge copy immediately afterwards and you may see the same slowness.',
          },
          {
            name: 'Do not defragment',
            text: 'Windows\'s "Defragment and Optimize Drives" already runs TRIM rather than defragmentation on SSDs. Do not point a third-party defragmenter at an SSD manually.',
          },
        ],
      },
      sections: [
        {
          title: 'The SLC Cache: Why the First 50 GB Is Fast and the Rest Is Not',
          content: [
            'Most modern consumer SSDs use TLC (3 bits per cell) or QLC (4 bits per cell) memory. The more bits packed into a cell, the slower and more complex writing becomes. Manufacturers work around this by temporarily running some of the drive\'s empty cells in single-bit (SLC) mode and writing incoming data there first. That region is the SLC cache, and it is very fast.',
            'The critical point is this: on most drives that cache is not fixed but dynamic. Its size is proportional to free space. On a half-empty 1 TB drive the cache can be tens of gigabytes; at 95% full, the same drive drops to a couple of gigabytes or loses the cache entirely.',
            'In daily use you see it like this: copying a large file starts very fast, then suddenly drops and stays low. That is the moment the cache filled and writing fell back to the cell\'s native rate. On a full disk that fast start never happens — the drive is in slow mode from the first byte.',
          ],
        },
        {
          title: 'Garbage Collection and Write Amplification',
          content: [
            'The fundamental constraint of NAND is that you cannot overwrite data in place. Writing happens in pages, but erasing happens in much larger blocks. When you delete a file, the drive erases nothing at that moment; it only marks the relevant pages as invalid.',
            'The real cleanup happens later, during garbage collection: the controller moves the still-valid pages out of a block, then erases the whole block so it can be reused. While the drive is idle this happens in the background and you never notice it.',
            'On a full disk there are no clean blocks left. The controller has to move and erase at the same time as you are writing. This is write amplification: to store 1 MB of your data, the drive may shuffle several megabytes internally. Latency goes up and the drive wears faster.',
          ],
        },
        {
          title: 'How Much Free Space, and Why QLC Needs More',
          content: [
            'The practical rule is to keep at least 10-15% of capacity free. That figure is not arbitrary: it is the working room the controller needs to do garbage collection in the background and to keep the SLC cache at a meaningful size. Free space you leave as a user effectively acts as extra over-provisioning.',
            'On QLC drives it pays to be more generous. A QLC cell holds four bits, so its native write speed is low and it depends more heavily on the SLC cache. When the cache runs out, the drop on QLC is far sharper than on TLC; on some models write speed can fall below that of a hard drive. Targeting 20% free on such a drive is sensible.',
            'Then there is TRIM. TRIM is how the operating system tells the drive which blocks belong to deleted files; without it the controller cannot know which blocks are genuinely free. But even with TRIM enabled, its benefit is limited if there are no blocks to clean — TRIM does not replace free space, it works together with it.',
          ],
        },
        {
          title: 'What to Do When It Is Already Full',
          content: [
            'The only thing that genuinely works is freeing space; no setting or tool can change this physics. Make the target concrete: 15% of capacity. On a 500 GB drive that is 75 GB free; on a 1 TB drive, 150 GB.',
            'The quickest wins usually come from four places: system and application caches, large files you have not opened in months, byte-identical copies scattered across folders, and old installers in the Downloads folder. Together those hold 30-60 GB on a typical machine, and none of it is personal data.',
            'After freeing space, give the drive some idle time. The controller needs to work through its backlog of garbage collection; leave the computer on and avoid starting a huge copy right away, and you will see the old speed return. Disk Mop\'s Cache Cleaner, Large Files, Duplicates and Downloads modules target exactly those four categories, showing what will be deleted before anything happens, while the Disk Health module reports TRIM status and S.M.A.R.T. values on the same screen.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does defragmenting an SSD help?',
          answer:
            'No. Fragmentation is a problem on hard drives because of the physical movement of the read head; an SSD has no such movement. Defragmenting only creates needless writes and shortens life. Windows\'s optimize tool already runs TRIM rather than defragmentation on SSDs.',
        },
        {
          question: 'Does speed come back immediately after freeing space?',
          answer:
            'Usually not instantly, but shortly after. The controller has to finish its backlog of garbage collection, and it does that while idle. Leaving the computer on for a while is enough in most cases.',
        },
        {
          question: 'Do read speeds drop too?',
          answer:
            'Only slightly. Fullness mainly affects writing. If reading feels noticeably slower, the cause is probably elsewhere: not enough system memory, a background scan, or a drive that is genuinely worn.',
        },
        {
          question: 'Does creating a partition and leaving it empty help?',
          answer:
            'Yes, this is known as manual over-provisioning and it works — but it gives the same result as simply keeping the disk 15% free. The only advantage of a separate partition is that it stops you from filling that space by accident.',
        },
      ],
      verdict: [
        'A full SSD slowing down is not a fault, it is a natural consequence of the design: the fast write cache depends on free space, and garbage collection needs room to breathe. The fix fits in one sentence — keep 15% of capacity free, and aim for 20% on QLC drives.',
        'The easiest way to free that space is to clear accumulated junk without touching your personal files. Disk Mop\'s Cache Cleaner, Large Files, Duplicates and Downloads modules do exactly that, and the Disk Health module shows TRIM status and the drive\'s wear indicators on one screen.',
      ],
      ctaText: 'See what is really using space on your SSD',
    },
    de: {
      title: 'Warum wird eine volle SSD langsam? SLC-Cache und Garbage Collection',
      metaDescription:
        'Warum bricht die Schreibgeschwindigkeit ein, wenn eine SSD voll wird? Nicht wegen Fragmentierung: Der SLC-Cache schrumpft und die Garbage Collection läuft während des Schreibens.',
      subtitle: 'Die Ursache ist nicht Fragmentierung, sondern die Schreibarchitektur',
      intro: [
        'Kurze Antwort: Eine volle SSD wird aus zwei Gründen langsam. Erstens ist der schnelle Schreibbereich des Laufwerks — der SLC-Cache — proportional zum freien Speicher und schrumpft oder verschwindet, wenn die Platte voll wird. Zweitens kann die Garbage Collection, die gelöschte Blöcke aufräumt, nicht mehr im Hintergrund arbeiten und muss laufen, während Sie schreiben.',
        'Mit der Fragmentierung bei Festplatten hat das nichts zu tun — und eine SSD zu defragmentieren hilft nicht, sondern erzeugt sinnlose Schreibvorgänge und verkürzt die Lebensdauer. Lesegeschwindigkeiten sind kaum betroffen; was einbricht, ist das Schreiben. Dieser Leitfaden erklärt den Mechanismus und wie viel Platz Sie tatsächlich frei lassen sollten.',
      ],
      keyTakeaways: [
        'Die Verlangsamung von SSDs kommt nicht von Fragmentierung; Defragmentieren hilft nicht und erzeugt unnötige Schreibvorgänge.',
        'Moderne SSDs betreiben einen Teil der TLC/QLC-Zellen vorübergehend im Ein-Bit-Modus (SLC) als schnellen Schreib-Cache — dessen Größe ist PROPORTIONAL ZUM FREIEN SPEICHER.',
        'Ist der Cache erschöpft, fällt die Schreibrate auf die native Geschwindigkeit der Zelle: bei TLC um ein Mehrfaches, bei QLC bis zum Zehnfachen langsamer.',
        'NAND lässt sich nicht überschreiben; ein Block muss vor dem Beschreiben gelöscht werden. Ohne freie Blöcke läuft die Garbage Collection mitten in Ihren Schreibvorgängen und erzeugt Verzögerung.',
        'Die Leseleistung ändert sich mit dem Füllstand kaum. Langsamer wird das Schreiben.',
        'Faustregel: mindestens 10-15 % der Kapazität frei lassen. Bei QLC-Laufwerken sind 20 % sicherer.',
      ],
      howTo: {
        name: 'Leistung einer vollen SSD wiederherstellen',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Den Füllstand messen',
            text: 'Prüfen Sie, welcher Anteil des Laufwerks belegt ist. Über 85 % ist die erste Erklärung für die Verlangsamung; über 95 % wird der Einbruch der Schreibrate dramatisch.',
          },
          {
            name: 'TRIM prüfen',
            text: 'Führen Sie unter Windows in der Eingabeaufforderung `fsutil behavior query DisableDeleteNotify` aus. Ein zurückgegebener Wert 0 bedeutet, dass TRIM aktiv ist; bei 1 aktivieren Sie es mit `fsutil behavior set DisableDeleteNotify 0`. Unter macOS ist TRIM für interne SSDs bereits aktiv.',
          },
          {
            name: 'Tatsächlich Platz schaffen',
            text: 'Ziel sind mindestens 15 % der Kapazität. Die schnellsten Gewinne bringen meist Cache-Dateien, alte Downloads, doppelte Dateien und vergessene große Dateien.',
          },
          {
            name: 'Dem Laufwerk Zeit zur Erholung geben',
            text: 'Lassen Sie den Rechner nach dem Freiräumen eine Weile eingeschaltet, aber untätig. Der Controller kann Garbage Collection nur im Leerlauf erledigen; starten Sie sofort danach einen großen Kopiervorgang, sehen Sie womöglich dieselbe Langsamkeit.',
          },
          {
            name: 'Nicht defragmentieren',
            text: 'Das Windows-Werkzeug "Laufwerke defragmentieren und optimieren" führt bei SSDs ohnehin TRIM statt Defragmentierung aus. Setzen Sie kein Fremdprogramm zur Defragmentierung manuell auf eine SSD an.',
          },
        ],
      },
      sections: [
        {
          title: 'Der SLC-Cache: Warum die ersten 50 GB schnell sind und der Rest nicht',
          content: [
            'Die meisten modernen Consumer-SSDs nutzen TLC (3 Bit pro Zelle) oder QLC (4 Bit pro Zelle). Je mehr Bits in einer Zelle stecken, desto langsamer und komplexer wird das Schreiben. Die Hersteller umgehen das, indem sie einen Teil der leeren Zellen vorübergehend im Ein-Bit-Modus (SLC) betreiben und ankommende Daten zuerst dorthin schreiben. Dieser Bereich ist der SLC-Cache und er ist sehr schnell.',
            'Entscheidend ist: Auf den meisten Laufwerken ist dieser Cache nicht fest, sondern dynamisch. Seine Größe ist proportional zum freien Speicher. Auf einer halb leeren 1-TB-SSD kann der Cache mehrere zehn Gigabyte betragen; bei 95 % Füllstand schrumpft dieselbe SSD auf ein paar Gigabyte oder verliert den Cache ganz.',
            'Im Alltag sehen Sie das so: Beim Kopieren einer großen Datei ist die Geschwindigkeit zunächst sehr hoch, fällt dann plötzlich ab und bleibt niedrig. Genau dann war der Cache voll und das Schreiben fiel auf die native Rate der Zelle zurück. Auf einer vollen Platte gibt es diesen schnellen Start gar nicht — das Laufwerk ist vom ersten Byte an im langsamen Modus.',
          ],
        },
        {
          title: 'Garbage Collection und Write Amplification',
          content: [
            'Die grundlegende Beschränkung von NAND lautet: Daten lassen sich nicht an Ort und Stelle überschreiben. Geschrieben wird in Seiten, gelöscht jedoch in deutlich größeren Blöcken. Wenn Sie eine Datei löschen, löscht das Laufwerk in diesem Moment gar nichts; es markiert die betroffenen Seiten nur als ungültig.',
            'Die eigentliche Aufräumarbeit passiert später bei der Garbage Collection: Der Controller verschiebt die noch gültigen Seiten aus einem Block heraus und löscht dann den ganzen Block, damit er wiederverwendbar wird. Im Leerlauf geschieht das im Hintergrund und Sie merken nichts davon.',
            'Auf einer vollen Platte gibt es keine sauberen Blöcke mehr. Der Controller muss verschieben und löschen, während Sie schreiben. Das nennt man Write Amplification: Um 1 MB Ihrer Daten abzulegen, schaufelt das Laufwerk intern mehrere Megabyte um. Die Latenz steigt und die SSD nutzt sich schneller ab.',
          ],
        },
        {
          title: 'Wie viel frei — und warum QLC mehr braucht',
          content: [
            'Die praktische Regel lautet, mindestens 10-15 % der Kapazität frei zu lassen. Diese Zahl ist nicht willkürlich: Es ist der Arbeitsraum, den der Controller braucht, um Garbage Collection im Hintergrund zu erledigen und den SLC-Cache in sinnvoller Größe zu halten. Freier Platz, den Sie als Nutzer lassen, wirkt faktisch als zusätzliches Over-Provisioning.',
            'Bei QLC-Laufwerken lohnt sich Großzügigkeit. Eine QLC-Zelle hält vier Bit, ihre native Schreibrate ist niedrig und sie hängt stärker am SLC-Cache. Läuft der Cache leer, ist der Einbruch bei QLC weit schärfer als bei TLC; bei manchen Modellen sinkt die Schreibrate unter die einer Festplatte. Bei solchen Laufwerken sind 20 % frei sinnvoll.',
            'Dazu kommt TRIM. Mit TRIM teilt das Betriebssystem dem Laufwerk mit, welche Blöcke zu gelöschten Dateien gehören; ohne das kann der Controller nicht wissen, welche Blöcke wirklich frei sind. Doch selbst mit aktivem TRIM bleibt der Nutzen begrenzt, wenn es nichts zu reinigen gibt — TRIM ersetzt freien Platz nicht, es arbeitet mit ihm zusammen.',
          ],
        },
        {
          title: 'Was tun, wenn sie bereits voll ist?',
          content: [
            'Das Einzige, was wirklich hilft, ist Platz schaffen; keine Einstellung und kein Werkzeug ändert diese Physik. Setzen Sie ein konkretes Ziel: 15 % der Kapazität. Auf einer 500-GB-SSD sind das 75 GB frei, auf einer 1-TB-SSD 150 GB.',
            'Die schnellsten Gewinne kommen meist aus vier Quellen: System- und Anwendungs-Caches, große Dateien, die seit Monaten nicht geöffnet wurden, bitgenau identische Kopien in verschiedenen Ordnern und alte Installationsdateien im Ordner Downloads. Zusammen sind das auf einem typischen Rechner 30-60 GB, und nichts davon sind persönliche Daten.',
            'Geben Sie dem Laufwerk danach etwas Leerlauf. Der Controller muss seinen Rückstand an Garbage Collection abarbeiten; lassen Sie den Rechner an und starten Sie nicht sofort einen großen Kopiervorgang, dann kehrt die alte Geschwindigkeit zurück. Die Module Cache-Bereiniger, Große Dateien, Duplikate und Downloads von Disk Mop zielen genau auf diese vier Kategorien und zeigen vor jedem Schritt, was gelöscht wird; das Modul Festplattenzustand meldet TRIM-Status und S.M.A.R.T.-Werte auf demselben Bildschirm.',
          ],
        },
      ],
      faq: [
        {
          question: 'Hilft Defragmentieren bei einer SSD?',
          answer:
            'Nein. Fragmentierung ist bei Festplatten wegen der physischen Kopfbewegung ein Problem; eine SSD hat diese Bewegung nicht. Defragmentieren erzeugt nur unnötige Schreibvorgänge und verkürzt die Lebensdauer. Das Optimierungswerkzeug von Windows führt bei SSDs ohnehin TRIM aus.',
        },
        {
          question: 'Kommt die Geschwindigkeit nach dem Freiräumen sofort zurück?',
          answer:
            'Meist nicht sofort, aber kurz danach. Der Controller muss seinen Rückstand an Garbage Collection abarbeiten, und das tut er im Leerlauf. Den Rechner eine Weile eingeschaltet zu lassen genügt in den meisten Fällen.',
        },
        {
          question: 'Sinkt auch die Lesegeschwindigkeit?',
          answer:
            'Nur geringfügig. Der Füllstand betrifft vor allem das Schreiben. Fühlt sich das Lesen deutlich langsamer an, liegt die Ursache wahrscheinlich woanders: zu wenig Arbeitsspeicher, ein Hintergrundscan oder ein tatsächlich abgenutztes Laufwerk.',
        },
        {
          question: 'Hilft es, eine Partition anzulegen und leer zu lassen?',
          answer:
            'Ja, das nennt man manuelles Over-Provisioning und es funktioniert — es bringt aber dasselbe Ergebnis, wie die Platte einfach zu 15 % frei zu halten. Der einzige Vorteil einer eigenen Partition ist, dass Sie diesen Bereich nicht versehentlich füllen.',
        },
      ],
      verdict: [
        'Dass eine volle SSD langsam wird, ist kein Defekt, sondern die natürliche Folge des Designs: Der schnelle Schreib-Cache hängt am freien Platz, und die Garbage Collection braucht Luft zum Atmen. Die Lösung passt in einen Satz — halten Sie 15 % der Kapazität frei, bei QLC-Laufwerken besser 20 %.',
        'Am einfachsten schaffen Sie diesen Platz, indem Sie angesammelten Ballast entfernen, ohne persönliche Dateien anzufassen. Genau das tun die Module Cache-Bereiniger, Große Dateien, Duplikate und Downloads von Disk Mop; das Modul Festplattenzustand zeigt TRIM-Status und Abnutzungswerte auf einem Bildschirm.',
      ],
      ctaText: 'Sehen Sie, was auf Ihrer SSD wirklich Platz belegt',
    },
    fr: {
      title: 'Pourquoi un SSD plein devient-il lent ? Cache SLC et ramasse-miettes',
      metaDescription:
        'Pourquoi la vitesse d\'écriture s\'effondre-t-elle quand un SSD se remplit ? Pas la fragmentation : le cache SLC rétrécit et le ramasse-miettes doit tourner pendant que vous écrivez.',
      subtitle: 'La cause n\'est pas la fragmentation, c\'est le fonctionnement de l\'écriture',
      intro: [
        'Réponse courte : un SSD plein ralentit pour deux raisons. D\'abord, la zone d\'écriture rapide du disque — le cache SLC — est proportionnelle à l\'espace libre : elle rétrécit, voire disparaît, à mesure que le disque se remplit. Ensuite, le ramasse-miettes, qui nettoie les blocs supprimés, ne peut plus travailler en arrière-plan et doit s\'exécuter pendant que vous écrivez.',
        'Cela n\'a rien à voir avec la fragmentation des disques durs — et défragmenter un SSD n\'aide pas : cela crée des écritures inutiles et raccourcit sa durée de vie. Les vitesses de lecture sont à peine touchées ; ce qui s\'effondre, c\'est l\'écriture. Ce guide explique le mécanisme et la quantité d\'espace libre à conserver.',
      ],
      keyTakeaways: [
        'Le ralentissement d\'un SSD ne vient pas de la fragmentation ; le défragmenter n\'aide pas et génère des écritures inutiles.',
        'Les SSD modernes font fonctionner temporairement certaines cellules TLC/QLC en mode un bit (SLC) pour former un cache d\'écriture rapide, dont la taille est PROPORTIONNELLE À L\'ESPACE LIBRE.',
        'Une fois le cache épuisé, la vitesse d\'écriture retombe au débit natif de la cellule : plusieurs fois plus lent en TLC, jusqu\'à dix fois en QLC.',
        'La mémoire NAND ne se réécrit pas sur place ; un bloc doit être effacé avant d\'être écrit. Sans blocs propres, le ramasse-miettes s\'exécute au milieu de vos écritures et ajoute de la latence.',
        'Les performances en lecture changent à peine avec le taux de remplissage. C\'est l\'écriture qui ralentit.',
        'Règle pratique : gardez au moins 10 à 15 % de la capacité libre. Sur un SSD QLC, 20 % est plus sûr.',
      ],
      howTo: {
        name: 'Retrouver les performances d\'un SSD plein',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Mesurer le taux de remplissage',
            text: 'Regardez quelle part du disque est occupée. Au-delà de 85 %, c\'est la première explication du ralentissement ; au-delà de 95 %, la chute de vitesse d\'écriture devient spectaculaire.',
          },
          {
            name: 'Vérifier que TRIM est actif',
            text: 'Sous Windows, exécutez `fsutil behavior query DisableDeleteNotify` dans l\'invite de commandes. Une valeur 0 signifie que TRIM est actif ; si c\'est 1, activez-le avec `fsutil behavior set DisableDeleteNotify 0`. Sous macOS, TRIM est déjà actif sur les SSD internes.',
          },
          {
            name: 'Libérer réellement de l\'espace',
            text: 'Visez au moins 15 % de la capacité. Les gains les plus rapides viennent en général des fichiers de cache, des anciens téléchargements, des doublons et des gros fichiers oubliés.',
          },
          {
            name: 'Laisser au disque le temps de récupérer',
            text: 'Après avoir libéré de la place, laissez l\'ordinateur allumé mais inactif un moment. Le contrôleur ne peut faire son ramasse-miettes qu\'au repos ; si vous lancez aussitôt une grosse copie, la lenteur peut revenir.',
          },
          {
            name: 'Ne pas défragmenter',
            text: 'L\'outil « Défragmenter et optimiser les lecteurs » de Windows exécute déjà TRIM et non une défragmentation sur les SSD. N\'appliquez pas manuellement un défragmenteur tiers à un SSD.',
          },
        ],
      },
      sections: [
        {
          title: 'Le cache SLC : pourquoi les 50 premiers Go sont rapides, et pas le reste',
          content: [
            'La plupart des SSD grand public récents utilisent de la mémoire TLC (3 bits par cellule) ou QLC (4 bits par cellule). Plus on entasse de bits dans une cellule, plus l\'écriture devient lente et complexe. Les fabricants contournent le problème en faisant fonctionner temporairement une partie des cellules vides en mode un bit (SLC) et en y écrivant d\'abord les données entrantes. Cette zone est le cache SLC, et elle est très rapide.',
            'Le point crucial est le suivant : sur la plupart des disques, ce cache n\'est pas fixe mais dynamique. Sa taille est proportionnelle à l\'espace libre. Sur un SSD de 1 To à moitié vide, il peut atteindre plusieurs dizaines de gigaoctets ; à 95 % de remplissage, le même disque tombe à quelques gigaoctets ou perd totalement son cache.',
            'À l\'usage, cela se voit ainsi : la copie d\'un gros fichier démarre très vite, puis chute d\'un coup et reste basse. C\'est le moment où le cache s\'est rempli et où l\'écriture est retombée au débit natif de la cellule. Sur un disque plein, ce démarrage rapide n\'a jamais lieu — le disque est en mode lent dès le premier octet.',
          ],
        },
        {
          title: 'Ramasse-miettes et amplification d\'écriture',
          content: [
            'La contrainte fondamentale de la NAND est qu\'on ne peut pas réécrire les données sur place. L\'écriture se fait par pages, l\'effacement par blocs bien plus grands. Quand vous supprimez un fichier, le disque n\'efface rien à cet instant ; il se contente de marquer les pages concernées comme invalides.',
            'Le vrai nettoyage vient plus tard, lors du ramasse-miettes : le contrôleur déplace hors d\'un bloc les pages encore valides, puis efface le bloc entier pour le rendre réutilisable. Au repos, cela se fait en arrière-plan et vous ne le remarquez jamais.',
            'Sur un disque plein, il ne reste plus de blocs propres. Le contrôleur doit déplacer et effacer en même temps que vous écrivez. C\'est l\'amplification d\'écriture : pour stocker 1 Mo de vos données, le disque peut brasser plusieurs mégaoctets en interne. La latence augmente et le disque s\'use plus vite.',
          ],
        },
        {
          title: 'Combien d\'espace libre, et pourquoi le QLC en demande plus',
          content: [
            'La règle pratique est de garder au moins 10 à 15 % de la capacité libre. Ce chiffre n\'est pas arbitraire : c\'est la marge de manœuvre dont le contrôleur a besoin pour faire son ramasse-miettes en arrière-plan et conserver un cache SLC de taille utile. L\'espace que vous laissez libre agit de fait comme un surprovisionnement supplémentaire.',
            'Sur les SSD QLC, mieux vaut être généreux. Une cellule QLC contient quatre bits : sa vitesse d\'écriture native est faible et elle dépend davantage du cache SLC. Quand celui-ci s\'épuise, la chute est bien plus brutale qu\'en TLC ; sur certains modèles la vitesse d\'écriture passe sous celle d\'un disque dur. Viser 20 % d\'espace libre y est raisonnable.',
            'Reste TRIM. TRIM permet au système d\'exploitation d\'indiquer au disque quels blocs appartiennent à des fichiers supprimés ; sans lui, le contrôleur ignore quels blocs sont réellement libres. Mais même activé, son intérêt reste limité s\'il n\'y a rien à nettoyer — TRIM ne remplace pas l\'espace libre, il travaille avec lui.',
          ],
        },
        {
          title: 'Que faire quand il est déjà plein ?',
          content: [
            'La seule chose qui fonctionne vraiment est de libérer de l\'espace ; aucun réglage ni outil ne change cette physique. Fixez un objectif concret : 15 % de la capacité. Sur un disque de 500 Go, cela fait 75 Go libres ; sur 1 To, 150 Go.',
            'Les gains les plus rapides viennent en général de quatre endroits : les caches système et applicatifs, les gros fichiers non ouverts depuis des mois, les copies strictement identiques dispersées dans les dossiers, et les anciens installateurs du dossier Téléchargements. Ensemble, cela représente 30 à 60 Go sur une machine typique, et rien de tout cela n\'est une donnée personnelle.',
            'Après avoir libéré de la place, laissez le disque au repos un moment. Le contrôleur doit rattraper son retard de ramasse-miettes ; laissez l\'ordinateur allumé sans lancer aussitôt une grosse copie et vous verrez revenir la vitesse d\'origine. Les modules Nettoyeur de cache, Gros fichiers, Doublons et Téléchargements de Disk Mop visent exactement ces quatre catégories et montrent ce qui sera supprimé avant d\'agir, tandis que le module Santé du disque affiche l\'état de TRIM et les valeurs S.M.A.R.T. sur le même écran.',
          ],
        },
      ],
      faq: [
        {
          question: 'Défragmenter un SSD aide-t-il ?',
          answer:
            'Non. La fragmentation pose problème sur les disques durs à cause du déplacement physique de la tête de lecture ; un SSD n\'a pas ce mouvement. Défragmenter ne crée que des écritures inutiles et raccourcit la durée de vie. L\'outil d\'optimisation de Windows exécute déjà TRIM sur les SSD.',
        },
        {
          question: 'La vitesse revient-elle immédiatement après avoir fait de la place ?',
          answer:
            'Généralement pas tout de suite, mais peu après. Le contrôleur doit terminer son retard de ramasse-miettes, ce qu\'il fait au repos. Laisser l\'ordinateur allumé un moment suffit dans la plupart des cas.',
        },
        {
          question: 'Les vitesses de lecture baissent-elles aussi ?',
          answer:
            'À peine. Le remplissage affecte surtout l\'écriture. Si la lecture semble nettement plus lente, la cause est probablement ailleurs : mémoire vive insuffisante, analyse en arrière-plan, ou disque réellement usé.',
        },
        {
          question: 'Créer une partition et la laisser vide, est-ce utile ?',
          answer:
            'Oui, c\'est le surprovisionnement manuel et cela fonctionne — mais le résultat est le même que de garder simplement 15 % du disque libre. Le seul avantage d\'une partition dédiée est qu\'elle vous empêche de remplir cet espace par mégarde.',
        },
      ],
      verdict: [
        'Qu\'un SSD plein ralentisse n\'est pas un défaut, c\'est la conséquence naturelle de sa conception : le cache d\'écriture rapide dépend de l\'espace libre, et le ramasse-miettes a besoin de respirer. Le remède tient en une phrase — gardez 15 % de la capacité libre, et visez 20 % sur un SSD QLC.',
        'Le plus simple pour libérer cet espace est d\'éliminer l\'encombrement accumulé sans toucher à vos fichiers personnels. C\'est exactement ce que font les modules Nettoyeur de cache, Gros fichiers, Doublons et Téléchargements de Disk Mop ; le module Santé du disque affiche l\'état de TRIM et les indicateurs d\'usure sur un seul écran.',
      ],
      ctaText: 'Voyez ce qui occupe vraiment votre SSD',
    },
    es: {
      title: '¿Por qué se vuelve lento un SSD lleno? Caché SLC y recolección de basura',
      metaDescription:
        '¿Por qué se desploma la velocidad de escritura cuando un SSD se llena? No es la fragmentación: la caché SLC se encoge y la recolección de basura tiene que ejecutarse mientras escribes.',
      subtitle: 'La causa no es la fragmentación, es cómo se escribe',
      intro: [
        'Respuesta corta: un SSD lleno se ralentiza por dos motivos. Primero, la zona de escritura rápida de la unidad —la caché SLC— es proporcional al espacio libre, así que se encoge o desaparece a medida que el disco se llena. Segundo, la recolección de basura, que limpia los bloques borrados, ya no puede trabajar en segundo plano y tiene que hacerlo mientras tú escribes.',
        'Esto no tiene nada que ver con la fragmentación de los discos duros, y desfragmentar un SSD no ayuda: genera escrituras inútiles y acorta su vida. Las velocidades de lectura apenas se ven afectadas; lo que se desploma es la escritura. Esta guía explica el mecanismo y cuánto espacio libre conviene dejar.',
      ],
      keyTakeaways: [
        'La lentitud de un SSD no se debe a la fragmentación; desfragmentarlo no ayuda y provoca escrituras innecesarias.',
        'Los SSD modernos hacen funcionar temporalmente algunas celdas TLC/QLC en modo de un bit (SLC) para formar una caché de escritura rápida, y su tamaño es PROPORCIONAL AL ESPACIO LIBRE.',
        'Cuando la caché se agota, la velocidad de escritura cae al ritmo nativo de la celda: varias veces más lento en TLC y hasta diez veces en QLC.',
        'La NAND no se puede sobrescribir; hay que borrar un bloque antes de escribirlo. Sin bloques limpios, la recolección de basura se ejecuta en medio de tus escrituras y añade latencia.',
        'El rendimiento de lectura apenas cambia con el llenado. Lo que se ralentiza es la escritura.',
        'Regla práctica: deja libre al menos el 10-15 % de la capacidad. En unidades QLC, el 20 % es más seguro.',
      ],
      howTo: {
        name: 'Recuperar el rendimiento de un SSD lleno',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Medir cuán lleno está',
            text: 'Comprueba qué porcentaje de la unidad está ocupado. Por encima del 85 % esa es la primera explicación de la lentitud; por encima del 95 % la caída de velocidad de escritura se vuelve dramática.',
          },
          {
            name: 'Confirmar que TRIM está activo',
            text: 'En Windows ejecuta `fsutil behavior query DisableDeleteNotify` en el símbolo del sistema. Si devuelve 0, TRIM está activo; si devuelve 1, actívalo con `fsutil behavior set DisableDeleteNotify 0`. En macOS, TRIM ya está activo en los SSD internos.',
          },
          {
            name: 'Liberar espacio de verdad',
            text: 'Apunta a liberar al menos el 15 % de la capacidad. Las ganancias más rápidas suelen venir de archivos de caché, descargas antiguas, archivos duplicados y archivos grandes olvidados.',
          },
          {
            name: 'Dar tiempo de recuperación a la unidad',
            text: 'Después de liberar espacio, deja el ordenador encendido pero inactivo un rato. El controlador solo puede hacer recolección de basura cuando está ocioso; si empiezas de inmediato una copia enorme, puedes ver la misma lentitud.',
          },
          {
            name: 'No desfragmentar',
            text: 'La herramienta «Desfragmentar y optimizar unidades» de Windows ya ejecuta TRIM en lugar de desfragmentar en los SSD. No apliques manualmente un desfragmentador de terceros a un SSD.',
          },
        ],
      },
      sections: [
        {
          title: 'La caché SLC: por qué los primeros 50 GB van rápidos y el resto no',
          content: [
            'La mayoría de los SSD de consumo modernos usan memoria TLC (3 bits por celda) o QLC (4 bits por celda). Cuantos más bits se apilan en una celda, más lenta y compleja resulta la escritura. Los fabricantes lo sortean haciendo funcionar temporalmente parte de las celdas vacías en modo de un bit (SLC) y escribiendo allí primero los datos entrantes. Esa zona es la caché SLC y es muy rápida.',
            'El punto crítico es este: en la mayoría de unidades esa caché no es fija sino dinámica. Su tamaño es proporcional al espacio libre. En un SSD de 1 TB medio vacío la caché puede ser de decenas de gigabytes; al 95 % de ocupación, la misma unidad baja a un par de gigabytes o pierde la caché por completo.',
            'En el uso diario se ve así: al copiar un archivo grande la velocidad empieza muy alta, luego cae de golpe y se queda baja. Ese es el momento en que la caché se llenó y la escritura volvió al ritmo nativo de la celda. En un disco lleno ese arranque rápido no llega a existir: la unidad está en modo lento desde el primer byte.',
          ],
        },
        {
          title: 'Recolección de basura y amplificación de escritura',
          content: [
            'La restricción fundamental de la NAND es que no se puede sobrescribir en el sitio. La escritura se hace en páginas, pero el borrado en bloques mucho mayores. Cuando borras un archivo, la unidad no borra nada en ese momento; solo marca las páginas correspondientes como no válidas.',
            'La limpieza real llega después, en la recolección de basura: el controlador mueve fuera del bloque las páginas todavía válidas y luego borra el bloque entero para poder reutilizarlo. Mientras la unidad está ociosa esto ocurre en segundo plano y nunca lo notas.',
            'En un disco lleno ya no quedan bloques limpios. El controlador tiene que mover y borrar al mismo tiempo que tú escribes. Eso es la amplificación de escritura: para guardar 1 MB de tus datos, la unidad puede remover varios megabytes internamente. La latencia sube y la unidad se desgasta más rápido.',
          ],
        },
        {
          title: 'Cuánto espacio libre y por qué QLC necesita más',
          content: [
            'La regla práctica es dejar libre al menos el 10-15 % de la capacidad. Esa cifra no es arbitraria: es el margen de trabajo que necesita el controlador para hacer recolección de basura en segundo plano y mantener la caché SLC en un tamaño útil. El espacio libre que dejas como usuario actúa de hecho como sobreaprovisionamiento adicional.',
            'En unidades QLC conviene ser más generoso. Una celda QLC guarda cuatro bits, así que su velocidad nativa de escritura es baja y depende mucho más de la caché SLC. Cuando la caché se agota, la caída en QLC es bastante más brusca que en TLC; en algunos modelos la velocidad de escritura baja de la de un disco duro. En una unidad así, apuntar al 20 % libre es sensato.',
            'Y luego está TRIM. TRIM es la forma en que el sistema operativo indica a la unidad qué bloques pertenecen a archivos borrados; sin él, el controlador no sabe qué bloques están realmente libres. Pero incluso con TRIM activo, su beneficio es limitado si no hay bloques que limpiar: TRIM no sustituye al espacio libre, trabaja junto a él.',
          ],
        },
        {
          title: 'Qué hacer cuando ya está lleno',
          content: [
            'Lo único que funciona de verdad es liberar espacio; ningún ajuste ni herramienta cambia esta física. Ponte un objetivo concreto: el 15 % de la capacidad. En una unidad de 500 GB son 75 GB libres; en una de 1 TB, 150 GB.',
            'Las ganancias más rápidas suelen venir de cuatro sitios: cachés del sistema y de las aplicaciones, archivos grandes que no abres desde hace meses, copias idénticas repartidas por distintas carpetas e instaladores viejos en la carpeta Descargas. Juntos suman 30-60 GB en un equipo típico, y nada de eso son datos personales.',
            'Después de liberar espacio, dale a la unidad algo de tiempo ocioso. El controlador tiene que ponerse al día con la recolección de basura pendiente; deja el ordenador encendido y no arranques enseguida una copia enorme, y verás volver la velocidad de antes. Los módulos Limpiador de caché, Archivos grandes, Duplicados y Descargas de Disk Mop apuntan justo a esas cuatro categorías y muestran qué se va a borrar antes de actuar, mientras que el módulo Salud del disco informa del estado de TRIM y los valores S.M.A.R.T. en la misma pantalla.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Desfragmentar un SSD ayuda?',
          answer:
            'No. La fragmentación es un problema en discos duros por el movimiento físico del cabezal; un SSD no tiene ese movimiento. Desfragmentar solo genera escrituras innecesarias y acorta la vida útil. La herramienta de optimización de Windows ya ejecuta TRIM en los SSD.',
        },
        {
          question: '¿La velocidad vuelve enseguida tras liberar espacio?',
          answer:
            'Normalmente no al instante, pero poco después. El controlador tiene que terminar la recolección de basura pendiente, y lo hace cuando está ocioso. Dejar el ordenador encendido un rato basta en la mayoría de casos.',
        },
        {
          question: '¿También bajan las velocidades de lectura?',
          answer:
            'Solo ligeramente. El llenado afecta sobre todo a la escritura. Si notas la lectura claramente más lenta, la causa está probablemente en otro sitio: poca memoria del sistema, un análisis en segundo plano o una unidad realmente desgastada.',
        },
        {
          question: '¿Sirve crear una partición y dejarla vacía?',
          answer:
            'Sí, eso se conoce como sobreaprovisionamiento manual y funciona, pero da el mismo resultado que simplemente mantener el disco al 15 % libre. La única ventaja de una partición aparte es que te impide llenar ese espacio por descuido.',
        },
      ],
      verdict: [
        'Que un SSD lleno se ralentice no es un fallo, es la consecuencia natural del diseño: la caché de escritura rápida depende del espacio libre y la recolección de basura necesita margen para respirar. La solución cabe en una frase: mantén libre el 15 % de la capacidad y apunta al 20 % en unidades QLC.',
        'La forma más fácil de liberar ese espacio es limpiar la basura acumulada sin tocar tus archivos personales. Eso es exactamente lo que hacen los módulos Limpiador de caché, Archivos grandes, Duplicados y Descargas de Disk Mop; el módulo Salud del disco muestra el estado de TRIM y los indicadores de desgaste en una sola pantalla.',
      ],
      ctaText: 'Descubre qué ocupa realmente tu SSD',
    },
    it: {
      title: 'Perché un SSD pieno diventa lento? Cache SLC e garbage collection',
      metaDescription:
        'Perché la velocità di scrittura crolla quando un SSD si riempie? Non è la frammentazione: la cache SLC si riduce e la garbage collection deve girare mentre scrivi.',
      subtitle: 'La causa non è la frammentazione, ma il funzionamento della scrittura',
      intro: [
        'Risposta breve: un SSD pieno rallenta per due motivi. Primo, l\'area di scrittura veloce dell\'unità — la cache SLC — è proporzionale allo spazio libero, quindi si riduce o sparisce del tutto man mano che il disco si riempie. Secondo, la garbage collection, che ripulisce i blocchi cancellati, non può più lavorare in background e deve girare mentre stai scrivendo.',
        'Non ha nulla a che vedere con la frammentazione dei dischi rigidi — e deframmentare un SSD non aiuta: genera scritture inutili e ne accorcia la vita. Le velocità di lettura sono appena toccate; ciò che crolla è la scrittura. Questa guida spiega il meccanismo e quanto spazio libero conviene lasciare.',
      ],
      keyTakeaways: [
        'Il rallentamento degli SSD non dipende dalla frammentazione; deframmentarli non aiuta e genera scritture inutili.',
        'Gli SSD moderni fanno funzionare temporaneamente alcune celle TLC/QLC in modalità a un bit (SLC) creando una cache di scrittura veloce, e la sua dimensione è PROPORZIONALE ALLO SPAZIO LIBERO.',
        'Esaurita la cache, la velocità di scrittura scende al ritmo nativo della cella: diverse volte più lenta su TLC, fino a dieci volte su QLC.',
        'La NAND non si può sovrascrivere; un blocco va cancellato prima di essere scritto. Senza blocchi puliti, la garbage collection gira nel mezzo delle tue scritture e aggiunge latenza.',
        'Le prestazioni in lettura cambiano appena con il riempimento. A rallentare è la scrittura.',
        'Regola pratica: lascia libero almeno il 10-15% della capacità. Sugli SSD QLC il 20% è più sicuro.',
      ],
      howTo: {
        name: 'Recuperare le prestazioni di un SSD pieno',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Misurare quanto è pieno',
            text: 'Verifica quale percentuale dell\'unità è occupata. Oltre l\'85% è la prima spiegazione del rallentamento; oltre il 95% il calo della velocità di scrittura diventa drastico.',
          },
          {
            name: 'Verificare che TRIM sia attivo',
            text: 'Su Windows esegui `fsutil behavior query DisableDeleteNotify` dal prompt dei comandi. Se restituisce 0, TRIM è attivo; se restituisce 1, attivalo con `fsutil behavior set DisableDeleteNotify 0`. Su macOS TRIM è già attivo per gli SSD interni.',
          },
          {
            name: 'Liberare spazio sul serio',
            text: 'Punta a liberare almeno il 15% della capacità. I guadagni più rapidi arrivano di solito da file di cache, vecchi download, file duplicati e grandi file dimenticati.',
          },
          {
            name: 'Dare all\'unità il tempo di recuperare',
            text: 'Dopo aver liberato spazio, lascia il computer acceso ma inattivo per un po\'. Il controller può fare garbage collection solo quando è a riposo; se avvii subito una copia enorme potresti rivedere la stessa lentezza.',
          },
          {
            name: 'Non deframmentare',
            text: 'Lo strumento «Deframmenta e ottimizza unità» di Windows sugli SSD esegue già TRIM anziché la deframmentazione. Non puntare manualmente un deframmentatore di terze parti su un SSD.',
          },
        ],
      },
      sections: [
        {
          title: 'La cache SLC: perché i primi 50 GB sono veloci e il resto no',
          content: [
            'La maggior parte degli SSD consumer moderni usa memoria TLC (3 bit per cella) o QLC (4 bit per cella). Più bit si comprimono in una cella, più la scrittura diventa lenta e complessa. I produttori aggirano il problema facendo funzionare temporaneamente parte delle celle vuote in modalità a un bit (SLC) e scrivendo lì i dati in arrivo. Quell\'area è la cache SLC ed è molto veloce.',
            'Il punto cruciale è questo: sulla maggior parte delle unità quella cache non è fissa ma dinamica. La sua dimensione è proporzionale allo spazio libero. Su un SSD da 1 TB mezzo vuoto la cache può essere di decine di gigabyte; al 95% di riempimento la stessa unità scende a un paio di gigabyte o perde del tutto la cache.',
            'Nell\'uso quotidiano si vede così: copiando un file grande la velocità parte altissima, poi crolla di colpo e resta bassa. È il momento in cui la cache si è riempita e la scrittura è tornata al ritmo nativo della cella. Su un disco pieno quella partenza veloce non c\'è affatto: l\'unità è in modalità lenta dal primo byte.',
          ],
        },
        {
          title: 'Garbage collection e amplificazione di scrittura',
          content: [
            'Il vincolo fondamentale della NAND è che non si possono sovrascrivere i dati sul posto. La scrittura avviene per pagine, la cancellazione per blocchi molto più grandi. Quando elimini un file, l\'unità in quel momento non cancella nulla; si limita a marcare le pagine coinvolte come non valide.',
            'La pulizia vera arriva dopo, durante la garbage collection: il controller sposta fuori da un blocco le pagine ancora valide, poi cancella l\'intero blocco per renderlo riutilizzabile. Quando l\'unità è a riposo questo avviene in background e non te ne accorgi.',
            'Su un disco pieno non restano blocchi puliti. Il controller deve spostare e cancellare mentre tu stai scrivendo. Questa è l\'amplificazione di scrittura: per memorizzare 1 MB dei tuoi dati, l\'unità può rimescolare diversi megabyte al proprio interno. La latenza aumenta e l\'unità si consuma più in fretta.',
          ],
        },
        {
          title: 'Quanto spazio libero e perché il QLC ne chiede di più',
          content: [
            'La regola pratica è lasciare libero almeno il 10-15% della capacità. Quella cifra non è arbitraria: è il margine di manovra che serve al controller per fare garbage collection in background e mantenere la cache SLC di dimensioni utili. Lo spazio libero che lasci come utente funziona di fatto come over-provisioning aggiuntivo.',
            'Sugli SSD QLC conviene essere più generosi. Una cella QLC contiene quattro bit, quindi la sua velocità di scrittura nativa è bassa e dipende molto di più dalla cache SLC. Quando la cache si esaurisce, il calo su QLC è ben più netto che su TLC; su alcuni modelli la velocità di scrittura scende sotto quella di un disco rigido. Su un\'unità così puntare al 20% libero è ragionevole.',
            'Poi c\'è TRIM. TRIM è il modo in cui il sistema operativo dice all\'unità quali blocchi appartengono a file eliminati; senza di esso il controller non può sapere quali blocchi siano davvero liberi. Ma anche con TRIM attivo il beneficio è limitato se non c\'è nulla da ripulire: TRIM non sostituisce lo spazio libero, lavora insieme a esso.',
          ],
        },
        {
          title: 'Cosa fare quando è già pieno',
          content: [
            'L\'unica cosa che funziona davvero è liberare spazio; nessuna impostazione o strumento cambia questa fisica. Fissa un obiettivo concreto: il 15% della capacità. Su un\'unità da 500 GB sono 75 GB liberi; su una da 1 TB, 150 GB.',
            'I guadagni più rapidi arrivano di solito da quattro fonti: cache di sistema e delle applicazioni, file grandi non aperti da mesi, copie identiche sparse in cartelle diverse e vecchi installer nella cartella Download. Insieme fanno 30-60 GB su una macchina tipica, e nulla di ciò è un dato personale.',
            'Dopo aver liberato spazio, concedi all\'unità un po\' di inattività. Il controller deve smaltire l\'arretrato di garbage collection; lascia il computer acceso e non avviare subito una copia enorme, e vedrai tornare la velocità di prima. I moduli Pulizia cache, File di grandi dimensioni, Duplicati e Download di Disk Mop puntano esattamente a queste quattro categorie e mostrano cosa verrà eliminato prima di agire, mentre il modulo Salute disco riporta lo stato di TRIM e i valori S.M.A.R.T. nella stessa schermata.',
          ],
        },
      ],
      faq: [
        {
          question: 'Deframmentare un SSD serve?',
          answer:
            'No. La frammentazione è un problema sui dischi rigidi per via del movimento fisico della testina; un SSD non ha quel movimento. Deframmentare genera solo scritture inutili e accorcia la vita. Lo strumento di ottimizzazione di Windows sugli SSD esegue già TRIM.',
        },
        {
          question: 'La velocità torna subito dopo aver liberato spazio?',
          answer:
            'Di solito non all\'istante, ma poco dopo. Il controller deve completare l\'arretrato di garbage collection e lo fa quando è a riposo. Lasciare il computer acceso per un po\' basta nella maggior parte dei casi.',
        },
        {
          question: 'Calano anche le velocità in lettura?',
          answer:
            'Solo lievemente. Il riempimento incide soprattutto sulla scrittura. Se la lettura sembra nettamente più lenta, la causa è probabilmente altrove: memoria di sistema insufficiente, una scansione in background o un\'unità davvero usurata.',
        },
        {
          question: 'Creare una partizione e lasciarla vuota aiuta?',
          answer:
            'Sì, si chiama over-provisioning manuale e funziona — ma dà lo stesso risultato che tenere semplicemente il disco libero al 15%. L\'unico vantaggio di una partizione dedicata è che ti impedisce di riempire quello spazio per sbaglio.',
        },
      ],
      verdict: [
        'Che un SSD pieno rallenti non è un difetto, è la conseguenza naturale del progetto: la cache di scrittura veloce dipende dallo spazio libero e la garbage collection ha bisogno di respiro. Il rimedio sta in una frase: tieni libero il 15% della capacità e punta al 20% sugli SSD QLC.',
        'Il modo più semplice per liberare quello spazio è togliere l\'ingombro accumulato senza toccare i file personali. È esattamente ciò che fanno i moduli Pulizia cache, File di grandi dimensioni, Duplicati e Download di Disk Mop; il modulo Salute disco mostra lo stato di TRIM e gli indicatori di usura in un\'unica schermata.',
      ],
      ctaText: 'Scopri cosa occupa davvero il tuo SSD',
    },
    pt: {
      title: 'Por que um SSD cheio fica lento? Cache SLC e coleta de lixo',
      metaDescription:
        'Por que a velocidade de gravação despenca quando um SSD enche? Não é fragmentação: o cache SLC encolhe e a coleta de lixo precisa rodar enquanto você grava.',
      subtitle: 'A causa não é fragmentação, é como a gravação funciona',
      intro: [
        'Resposta curta: um SSD cheio fica lento por dois motivos. Primeiro, a área de gravação rápida da unidade — o cache SLC — é proporcional ao espaço livre, então encolhe ou desaparece à medida que o disco enche. Segundo, a coleta de lixo, que limpa os blocos apagados, já não consegue trabalhar em segundo plano e precisa rodar enquanto você grava.',
        'Isso não tem nada a ver com a fragmentação dos discos rígidos — e desfragmentar um SSD não ajuda: gera gravações inúteis e encurta a vida útil. As velocidades de leitura quase não são afetadas; o que despenca é a gravação. Este guia explica o mecanismo e quanto espaço livre você deve deixar.',
      ],
      keyTakeaways: [
        'A lentidão do SSD não vem da fragmentação; desfragmentar não ajuda e cria gravações desnecessárias.',
        'SSDs modernos operam temporariamente algumas células TLC/QLC em modo de um bit (SLC) para formar um cache de gravação rápido, e o tamanho desse cache é PROPORCIONAL AO ESPAÇO LIVRE.',
        'Esgotado o cache, a velocidade de gravação cai para a taxa nativa da célula: várias vezes mais lenta em TLC e até dez vezes em QLC.',
        'A NAND não pode ser sobrescrita; um bloco precisa ser apagado antes de ser gravado. Sem blocos limpos, a coleta de lixo roda no meio das suas gravações e acrescenta latência.',
        'O desempenho de leitura quase não muda com a ocupação. O que fica lento é a gravação.',
        'Regra prática: mantenha pelo menos 10-15% da capacidade livre. Em unidades QLC, 20% é mais seguro.',
      ],
      howTo: {
        name: 'Recuperar o desempenho de um SSD cheio',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Medir o quanto está cheio',
            text: 'Verifique que parte da unidade está ocupada. Acima de 85% essa é a primeira explicação para a lentidão; acima de 95% a queda na velocidade de gravação fica dramática.',
          },
          {
            name: 'Confirmar que o TRIM está ativo',
            text: 'No Windows execute `fsutil behavior query DisableDeleteNotify` no prompt de comando. Se retornar 0, o TRIM está ativo; se retornar 1, ative com `fsutil behavior set DisableDeleteNotify 0`. No macOS o TRIM já está ativo para SSDs internos.',
          },
          {
            name: 'Liberar espaço de verdade',
            text: 'Mire em liberar pelo menos 15% da capacidade. Os ganhos mais rápidos costumam vir de arquivos de cache, downloads antigos, arquivos duplicados e arquivos grandes esquecidos.',
          },
          {
            name: 'Dar tempo de recuperação à unidade',
            text: 'Depois de liberar espaço, deixe o computador ligado mas ocioso por um tempo. O controlador só faz coleta de lixo quando está parado; se iniciar uma cópia enorme logo depois, pode ver a mesma lentidão.',
          },
          {
            name: 'Não desfragmentar',
            text: 'A ferramenta «Desfragmentar e Otimizar Unidades» do Windows já executa TRIM em vez de desfragmentação nos SSDs. Não aponte manualmente um desfragmentador de terceiros para um SSD.',
          },
        ],
      },
      sections: [
        {
          title: 'O cache SLC: por que os primeiros 50 GB são rápidos e o resto não',
          content: [
            'A maioria dos SSDs de consumo atuais usa memória TLC (3 bits por célula) ou QLC (4 bits por célula). Quanto mais bits são espremidos numa célula, mais lenta e complexa fica a gravação. Os fabricantes contornam isso operando temporariamente parte das células vazias em modo de um bit (SLC) e gravando ali primeiro os dados que chegam. Essa região é o cache SLC e é muito rápida.',
            'O ponto crítico é este: na maioria das unidades esse cache não é fixo, mas dinâmico. Seu tamanho é proporcional ao espaço livre. Num SSD de 1 TB pela metade o cache pode ter dezenas de gigabytes; a 95% de ocupação, a mesma unidade cai para uns poucos gigabytes ou perde o cache por completo.',
            'No uso diário isso aparece assim: ao copiar um arquivo grande a velocidade começa altíssima, depois despenca de repente e fica baixa. É o momento em que o cache encheu e a gravação voltou à taxa nativa da célula. Num disco cheio esse começo rápido nem existe: a unidade está em modo lento desde o primeiro byte.',
          ],
        },
        {
          title: 'Coleta de lixo e amplificação de gravação',
          content: [
            'A restrição fundamental da NAND é que não dá para sobrescrever dados no lugar. A gravação acontece em páginas, mas o apagamento em blocos bem maiores. Quando você apaga um arquivo, a unidade não apaga nada naquele momento; apenas marca as páginas correspondentes como inválidas.',
            'A limpeza real vem depois, na coleta de lixo: o controlador move para fora de um bloco as páginas ainda válidas e então apaga o bloco inteiro para poder reutilizá-lo. Enquanto a unidade está ociosa isso acontece em segundo plano e você nunca percebe.',
            'Num disco cheio não sobram blocos limpos. O controlador precisa mover e apagar ao mesmo tempo em que você grava. Isso é amplificação de gravação: para armazenar 1 MB dos seus dados, a unidade pode remexer vários megabytes internamente. A latência sobe e a unidade se desgasta mais rápido.',
          ],
        },
        {
          title: 'Quanto espaço livre e por que o QLC exige mais',
          content: [
            'A regra prática é manter pelo menos 10-15% da capacidade livre. Esse número não é arbitrário: é a margem de trabalho de que o controlador precisa para fazer coleta de lixo em segundo plano e manter o cache SLC num tamanho útil. O espaço livre que você deixa como usuário funciona, na prática, como over-provisioning extra.',
            'Em unidades QLC vale ser mais generoso. Uma célula QLC guarda quatro bits, então sua velocidade nativa de gravação é baixa e ela depende muito mais do cache SLC. Quando o cache acaba, a queda no QLC é bem mais acentuada do que no TLC; em alguns modelos a velocidade de gravação fica abaixo da de um disco rígido. Numa unidade dessas, mirar em 20% livre é sensato.',
            'E há o TRIM. O TRIM é como o sistema operacional informa à unidade quais blocos pertencem a arquivos apagados; sem ele o controlador não sabe quais blocos estão realmente livres. Mas mesmo com TRIM ativo o benefício é limitado se não há blocos para limpar: o TRIM não substitui o espaço livre, ele trabalha junto com ele.',
          ],
        },
        {
          title: 'O que fazer quando já está cheio',
          content: [
            'A única coisa que realmente funciona é liberar espaço; nenhum ajuste ou ferramenta muda essa física. Estabeleça uma meta concreta: 15% da capacidade. Numa unidade de 500 GB são 75 GB livres; numa de 1 TB, 150 GB.',
            'Os ganhos mais rápidos costumam vir de quatro lugares: caches do sistema e dos aplicativos, arquivos grandes que você não abre há meses, cópias idênticas espalhadas por pastas diferentes e instaladores antigos na pasta Downloads. Juntos somam 30-60 GB numa máquina típica, e nada disso é dado pessoal.',
            'Depois de liberar espaço, dê à unidade algum tempo ocioso. O controlador precisa pôr em dia a coleta de lixo pendente; deixe o computador ligado e não inicie logo uma cópia enorme, e você verá a velocidade antiga voltar. Os módulos Limpador de cache, Arquivos grandes, Duplicados e Downloads do Disk Mop miram exatamente nessas quatro categorias e mostram o que será apagado antes de agir, enquanto o módulo Saúde do disco informa o estado do TRIM e os valores S.M.A.R.T. na mesma tela.',
          ],
        },
      ],
      faq: [
        {
          question: 'Desfragmentar um SSD ajuda?',
          answer:
            'Não. A fragmentação é problema em discos rígidos por causa do movimento físico da cabeça de leitura; um SSD não tem esse movimento. Desfragmentar só gera gravações desnecessárias e encurta a vida útil. A ferramenta de otimização do Windows já executa TRIM nos SSDs.',
        },
        {
          question: 'A velocidade volta na hora depois de liberar espaço?',
          answer:
            'Normalmente não na hora, mas pouco depois. O controlador precisa concluir a coleta de lixo pendente, e faz isso quando está ocioso. Deixar o computador ligado por um tempo basta na maioria dos casos.',
        },
        {
          question: 'As velocidades de leitura também caem?',
          answer:
            'Apenas um pouco. A ocupação afeta sobretudo a gravação. Se a leitura parece bem mais lenta, a causa provavelmente está em outro lugar: pouca memória do sistema, uma varredura em segundo plano ou uma unidade realmente desgastada.',
        },
        {
          question: 'Criar uma partição e deixá-la vazia ajuda?',
          answer:
            'Sim, isso é conhecido como over-provisioning manual e funciona — mas dá o mesmo resultado que simplesmente manter o disco 15% livre. A única vantagem de uma partição separada é impedir que você encha esse espaço sem querer.',
        },
      ],
      verdict: [
        'Um SSD cheio ficar lento não é defeito, é consequência natural do projeto: o cache de gravação rápido depende do espaço livre e a coleta de lixo precisa de folga para respirar. A solução cabe numa frase: mantenha 15% da capacidade livre e mire em 20% em unidades QLC.',
        'O jeito mais fácil de liberar esse espaço é limpar o entulho acumulado sem tocar nos seus arquivos pessoais. É exatamente o que fazem os módulos Limpador de cache, Arquivos grandes, Duplicados e Downloads do Disk Mop; o módulo Saúde do disco mostra o estado do TRIM e os indicadores de desgaste numa única tela.',
      ],
      ctaText: 'Veja o que realmente ocupa o seu SSD',
    },
    ja: {
      title: '容量がいっぱいの SSD はなぜ遅くなるのか: SLC キャッシュとガベージコレクション',
      metaDescription:
        'SSD が満杯に近づくと書き込み速度が落ちるのはなぜか。断片化ではありません。SLC キャッシュが縮小し、ガベージコレクションが書き込み中に走るためです。仕組みと対処法を解説します。',
      subtitle: '原因は断片化ではなく、書き込みの仕組み',
      intro: [
        '短い答え: SSD が満杯に近づくと遅くなる理由は 2 つです。1 つ目は、ドライブの高速書き込み領域である SLC キャッシュが空き容量に比例しており、ディスクが埋まるにつれて縮小し、やがて消えてしまうこと。2 つ目は、削除済みブロックを片付けるガベージコレクションがバックグラウンドで処理しきれなくなり、ユーザーが書き込んでいる最中に走らざるを得なくなることです。',
        'これはハードディスクの断片化とはまったく別の現象です。SSD をデフラグしても改善せず、むしろ無駄な書き込みを生んで寿命を縮めます。読み取り速度はほとんど影響を受けません。落ちるのは書き込みです。この記事では仕組みと、実際にどれだけ空き容量を残すべきかを説明します。',
      ],
      keyTakeaways: [
        'SSD の速度低下は断片化が原因ではありません。SSD のデフラグは効果がなく、無駄な書き込みを生みます。',
        '最近の SSD は TLC/QLC セルの一部を一時的に 1 ビット（SLC）モードで動かし高速書き込みキャッシュを作ります。その容量は「空き容量に比例」します。',
        'キャッシュを使い切ると書き込み速度はセル本来の速度まで落ちます。TLC で数分の 1、QLC では 10 分の 1 に達することもあります。',
        'NAND は上書きできず、書き込む前にブロックを消去する必要があります。空きブロックがないと、ガベージコレクションが書き込みの最中に走り遅延が生じます。',
        '読み取り性能は使用率でほとんど変わりません。遅くなるのは書き込みです。',
        '実用的な目安: 容量の 10〜15% は空けておく。QLC ドライブなら 20% がより安全です。',
      ],
      howTo: {
        name: '満杯の SSD の性能を取り戻す',
        totalTime: 'PT15M',
        steps: [
          {
            name: '使用率を測る',
            text: 'ドライブがどれくらい埋まっているか確認します。85% を超えていれば、それが速度低下の第一の説明です。95% を超えると書き込み速度の落ち込みは劇的になります。',
          },
          {
            name: 'TRIM が有効か確認する',
            text: 'Windows ではコマンドプロンプトで `fsutil behavior query DisableDeleteNotify` を実行します。戻り値が 0 なら TRIM は有効です。1 なら `fsutil behavior set DisableDeleteNotify 0` で有効にします。macOS では内蔵 SSD の TRIM は既に有効です。',
          },
          {
            name: '実際に空き容量を作る',
            text: '容量の 15% 以上を空けることを目標にします。手早く効くのはたいていキャッシュファイル、古いダウンロード、重複ファイル、忘れられた大きなファイルです。',
          },
          {
            name: 'ドライブに回復の時間を与える',
            text: '空き容量を作ったあと、パソコンを電源オンのまましばらく放置します。コントローラーはアイドル時にしかガベージコレクションを行えません。直後に大量コピーを始めると、同じ遅さが再現することがあります。',
          },
          {
            name: 'デフラグしない',
            text: 'Windows の「ドライブのデフラグと最適化」は SSD に対しては既にデフラグではなく TRIM を実行しています。サードパーティのデフラグツールを SSD に手動で適用しないでください。',
          },
        ],
      },
      sections: [
        {
          title: 'SLC キャッシュ: 最初の 50 GB が速く、その先が遅い理由',
          content: [
            '最近のコンシューマー向け SSD の多くは TLC（1 セル 3 ビット）または QLC（1 セル 4 ビット）を採用しています。1 つのセルに詰め込むビット数が増えるほど、書き込みは遅く複雑になります。メーカーはこれを回避するため、空いているセルの一部を一時的に 1 ビット（SLC）モードで動かし、届いたデータをまずそこへ書き込みます。この領域が SLC キャッシュで、非常に高速です。',
            '重要なのは、多くのドライブでこのキャッシュが固定ではなく動的だという点です。その大きさは空き容量に比例します。1 TB のドライブが半分空いていればキャッシュは数十ギガバイトになり得ますが、同じドライブが 95% 埋まると数ギガバイトに縮むか、キャッシュそのものが失われます。',
            '日常的にはこう現れます。大きなファイルをコピーすると最初は非常に速く、あるところで急に落ちて低いまま続く。それがキャッシュを使い切り、書き込みがセル本来の速度に戻った瞬間です。ディスクが満杯ならその「速い立ち上がり」自体がありません。最初の 1 バイトから低速モードです。',
          ],
        },
        {
          title: 'ガベージコレクションと書き込み増幅',
          content: [
            'NAND の根本的な制約は、データをその場で上書きできないことです。書き込みはページ単位、消去ははるかに大きいブロック単位で行われます。ファイルを削除しても、その時点でドライブは物理的に何も消しません。該当ページを「無効」と印を付けるだけです。',
            '実際の掃除は後から、ガベージコレクションで行われます。コントローラーはブロック内のまだ有効なページを別の場所へ移し、ブロック全体を消去して再利用できるようにします。ドライブがアイドルのときはこれがバックグラウンドで行われ、利用者は気づきません。',
            'ディスクが満杯だと、きれいなブロックが残っていません。コントローラーはユーザーが書き込んでいるのと同時に移動と消去を行わざるを得なくなります。これが書き込み増幅です。1 MB のデータを保存するために、ドライブ内部では数メガバイトが移動されることもあります。遅延が増え、ドライブの消耗も早まります。',
          ],
        },
        {
          title: 'どれだけ空けるか、なぜ QLC はより多く必要か',
          content: [
            '実用的な目安は容量の 10〜15% を空けておくことです。この数字は恣意的ではありません。コントローラーがバックグラウンドでガベージコレクションを行い、SLC キャッシュを意味のある大きさに保つために必要な作業領域です。利用者が空けておく領域は、事実上の追加オーバープロビジョニングとして働きます。',
            'QLC ドライブでは、もう少し余裕を持たせる価値があります。QLC セルは 4 ビットを保持するため本来の書き込み速度が低く、SLC キャッシュへの依存度が高くなります。キャッシュが尽きたときの落ち込みは TLC よりはるかに急で、一部のモデルでは書き込み速度がハードディスクを下回ることもあります。そうしたドライブでは 20% を目標にするのが妥当です。',
            'そして TRIM です。TRIM は、どのブロックが削除済みファイルのものかを OS がドライブに伝える仕組みで、これがないとコントローラーは本当に空いているブロックを判断できません。ただし TRIM が有効でも、片付けるべきブロックがなければ効果は限られます。TRIM は空き容量の代わりにはならず、空き容量と一緒に働くものです。',
          ],
        },
        {
          title: 'すでに満杯のときにすべきこと',
          content: [
            '本当に効くのは空き容量を作ることだけで、どんな設定やツールもこの物理を変えられません。目標は具体的に、容量の 15% と定めましょう。500 GB のドライブなら 75 GB、1 TB なら 150 GB の空きです。',
            '手早い効果はたいてい 4 か所から得られます。システムとアプリのキャッシュ、数か月開いていない大きなファイル、複数のフォルダーに散らばった内容が同一のコピー、そしてダウンロードフォルダーの古いインストーラーです。合わせると一般的なマシンで 30〜60 GB になり、いずれも個人データではありません。',
            '空き容量を作ったら、ドライブにアイドル時間を与えてください。コントローラーは溜まったガベージコレクションを片付ける必要があります。パソコンを電源オンのままにして、すぐに大量コピーを始めなければ、元の速度が戻るのが分かります。Disk Mop の「キャッシュクリーナー」「大きいファイル」「重複ファイル」「ダウンロード」の各モジュールはまさにこの 4 分類を対象とし、削除前に内容を表示します。「ディスク健康状態」モジュールは TRIM の状態と S.M.A.R.T. 値を同じ画面に表示します。',
          ],
        },
      ],
      faq: [
        {
          question: 'SSD のデフラグは効果がありますか。',
          answer:
            'いいえ。断片化はハードディスクで読み取りヘッドが物理的に移動するため問題になりますが、SSD にはその動きがありません。デフラグは無駄な書き込みを生み、寿命を縮めるだけです。Windows の最適化ツールは SSD に対しては既に TRIM を実行しています。',
        },
        {
          question: '空き容量を作れば速度はすぐ戻りますか。',
          answer:
            '通常は即座ではなく、少し経ってからです。コントローラーは溜まったガベージコレクションを終える必要があり、それはアイドル時に行われます。多くの場合、パソコンをしばらく電源オンにしておけば十分です。',
        },
        {
          question: '読み取り速度も落ちますか。',
          answer:
            'わずかです。使用率が主に影響するのは書き込みです。読み取りが明らかに遅いと感じるなら、原因は別のところにある可能性が高いです。メモリ不足、バックグラウンドのスキャン、あるいはドライブが実際に消耗している場合などです。',
        },
        {
          question: 'パーティションを作って空けておくのは有効ですか。',
          answer:
            'はい、これは手動オーバープロビジョニングと呼ばれ有効です。ただし結果は、単にディスクを 15% 空けておくのと同じです。専用パーティションの唯一の利点は、その領域をうっかり埋めてしまわないことです。',
        },
      ],
      verdict: [
        '満杯の SSD が遅くなるのは故障ではなく、設計上の自然な帰結です。高速書き込みキャッシュは空き容量に依存し、ガベージコレクションには余裕が必要だからです。対処は一文で済みます。容量の 15% を空けておく、QLC ドライブなら 20% を目指す。',
        'その空き容量を作る最も簡単な方法は、個人のファイルに触れずに溜まった不要データを片付けることです。Disk Mop の「キャッシュクリーナー」「大きいファイル」「重複ファイル」「ダウンロード」はまさにそれを行い、「ディスク健康状態」モジュールは TRIM の状態と消耗の指標を 1 画面で示します。',
      ],
      ctaText: 'SSD の容量を実際に使っているものを確認する',
    },
  },
};
