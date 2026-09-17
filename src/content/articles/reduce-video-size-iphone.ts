import type { Article } from '../types';

export const reduceVideoSizeIphone: Article = {
  slug: 'reduce-video-size-iphone',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-17',
  readingTime: 8,
  content: {
    tr: {
      title: 'iPhone\'da Videoları Silmeden Video Boyutu Nasıl Küçültülür',
      metaDescription:
        'Bir dakikalık 4K/60 video 400 MB tutar. iPhone\'daki videoları küçültmenin, yenilerini küçük tutmanın ve yer kaplayan ekran kayıtlarını bulmanın yolları.',
      subtitle: 'Videolar, ekran kayıtları ve Live Photo\'lar genellikle bir fotoğraf arşivindeki en büyük öğelerdir',
      intro: [
        'Kısa cevap: çoğu iPhone\'da fotoğraf arşivinin ağır olmasının nedeni fotoğraflar değil videolardır. Saniyede 60 kare 4K video dakikada yaklaşık 400 MB, bir dakikalık ekran kaydı 100 ila 200 MB tutar; her Live Photo ise nadiren izlediğiniz üç saniyelik bir video taşır. Mevcut videoları telefon üzerinde 1080p\'ye küçültebilir, Live Photo\'ları sabit fotoğrafa dönüştürebilir ve iki kamera ayarını değiştirerek yeni videoların küçük kalmasını sağlayabilirsiniz.',
        'Bu rehber Apple\'ın kendi boyut tahminlerini kullanır, en büyük videoların nerede saklandığını gösterir, sıkıştırmanın neyi koruyup neyi kaybettirdiğini açıklar ve sorunun geri gelmesini önleyen ayarları listeler.',
      ],
      keyTakeaways: [
        'Apple\'ın tahminleri: 30 fps\'de 1080p dakikada yaklaşık 60 MB, 30 fps\'de 4K yaklaşık 170 MB, 60 fps\'de 4K ise yaklaşık 400 MB kullanır.',
        'Ayarlar > Genel > iPhone Depolama Alanı > Fotoğraflar en büyük videolarınızı listeler; ekran kayıtları ve 4K klipler genellikle listenin başındadır.',
        'Bir 4K klibi telefon üzerinde 1080p\'ye dönüştürmek, tarihi, konumu ve codec\'i korurken boyutu genellikle yüzde 80 ila 90 küçültür.',
        'Live Photo, bir sabit kare ile kısa bir videodan oluşur; sabit fotoğrafa dönüştürmek videoyu kaldırır ve boyutun kabaca yarısını kazandırır.',
        'Ayarlar > Kamera > Biçimler\'i Yüksek Verimlilik (HEVC) yapmak, En Uyumlu seçeneğine kıyasla video boyutunu gözle görülür kayıp olmadan yarıya indirir.',
        'Sıkıştırma tek yönlüdür: iOS onay istedikten sonra orijinal değiştirilir; tam kalitede ihtiyaç duyabileceğiniz videoların orijinallerini saklayın.',
      ],
      howTo: {
        name: 'iPhone\'unuzdaki videoları küçültün',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Önce kamera ayarlarını düzeltin',
            text: 'Ayarlar > Kamera > Biçimler\'i açın ve Yüksek Verimlilik\'i seçin. Ardından Video Kaydet\'i açıp gündelik klipler için 30 fps\'de 1080p\'yi seçin; iOS her seçeneğin yanında dakika başına boyutu gösterir. 4K\'yı hak eden anlara saklayın.',
          },
          {
            name: 'En büyük videoları bulun',
            text: 'Ayarlar > Genel > iPhone Depolama Alanı\'na gidin ve Fotoğraflar\'ı açın. En büyük videolarınızın listesi burada boyuta göre sıralı görünür; Fotoğraflar uygulamasının kendisi bunu yapamaz.',
          },
          {
            name: 'Artık gerekmeyen ekran kayıtlarını silin',
            text: 'Fotoğraflar > Albümler > Ortam Türleri içinde Ekran Kayıtları\'nı açın. Arama, oyun ve uygulama gösterimi kayıtları çoğu zaman telefondaki en büyük dosyalardır ve nadiren saklamaya değer.',
          },
          {
            name: '4K klipleri 1080p\'ye sıkıştırın',
            text: 'Cihaz üzerinde çalışan bir dönüştürücü kullanın. DiskMop sıkıştırılabilir videoları (4K ve 40 MB\'tan büyük) listeler, bunları telefonda 1080p\'ye dönüştürür ve orijinali değiştirmeden önce iOS\'un onayını ister. Testimizde 94 MB\'lık bir 4K klip yaklaşık 11 MB\'a indi.',
          },
          {
            name: 'Hiç oynatmadığınız Live Photo\'ları sabit fotoğrafa çevirin',
            text: 'Live Photo\'lar sabit karenin yanında üç saniyelik bir video tutar. DiskMop bunları toplu olarak sıradan fotoğrafa dönüştürebilir; Fotoğraflar\'da ise Çoğalt > Sabit Fotoğraf Olarak Çoğalt ile tek tek yapıp orijinali silmeniz gerekir.',
          },
          {
            name: 'Son Silinenler\'i boşaltın',
            text: 'Değiştirilen ve silinen videolar 30 gün boyunca Fotoğraflar > Albümler > Son Silinenler\'de bekler. Albümü açın, Seç\'e ve ardından Tümünü Sil\'e dokunarak alanı hemen geri kazanın.',
          },
        ],
      },
      sections: [
        {
          title: 'iPhone Videoları Gerçekte Ne Kadar Büyük?',
          content: [
            'Fotoğraflar uygulaması dosya boyutlarını hiç göstermez; videonun depolamadaki payının neredeyse herkesi şaşırtmasının nedeni budur. Oysa iOS bu sayıları yayınlar: Ayarlar > Kamera > Video Kaydet\'i açtığınızda her çözünürlüğün yanında dakika başına tahmini boyut görünür. Varsayılan olan 30 fps\'de 1080p ile bir dakika yaklaşık 60 MB tutar. Birçok kişinin bir kez açıp unuttuğu 60 fps\'de 4K ayarında ise bir dakika yaklaşık 400 MB\'a çıkar.',
            'Bu, bir çocuğun okul gösterisinden tek bir klip için kabaca iki yüz sıradan fotoğrafın boyutu demektir. Böyle yirmi klibin olduğu bir tatil 8 GB eder; bu, çoğu insanın tüm fotoğraf koleksiyonundan fazladır. Aşağıdaki tablo Apple\'ın tahminlerini listeler; Biçimler altındaki codec ayarı da önemlidir, çünkü En Uyumlu (H.264) seçeneği Yüksek Verimlilik\'e (HEVC) kıyasla yaklaşık iki kat büyük dosyalar üretir.',
            'Fotoğraflar uygulaması boyuta göre sıralayamadığı için gigabaytların nerede olduğunu görmenin en hızlı yolu, en büyük videolarınızı listeleyen Ayarlar > Genel > iPhone Depolama Alanı > Fotoğraflar ekranıdır. DiskMop aynı bilgiyi tüm arşivin türe ve yıla göre dökümü olarak gösterir; böylece ağırlığın videolarda mı, ekran kayıtlarında mı, Live Photo\'larda mı yoksa sıradan fotoğraflarda mı olduğunu bir bakışta görürsünüz.',
          ],
        },
        {
          title: 'Ekran Kayıtları: Çektiğinizi Unuttuğunuz En Büyük Dosyalar',
          content: [
            'Ekran kayıtları en kolay kazanımdır. Telefonun tam ekran çözünürlüğünde ve kare hızında kaydedilirler; bu yüzden bir dakikalık oyun, görüntülü arama ya da uygulama tanıtımı 100 ila 200 MB tutar ve çoğu birine bir şeyi bir kez göstermek için yapılmıştır. iOS bunları videolarınızla karışık hâlde normal arşivde tutar ve hiçbir şey onları atılabilir olarak işaretlemez.',
            'Fotoğraflar > Albümler > Ortam Türleri > Ekran Kayıtları hepsini tek yerde toplar. Arada bir gözden geçirip işini görmüş olanları silin. Sık kayıt alıyorsanız yalnızca ihtiyaç duyduğunuz bölgeyi kaydetmeyi ya da klibi kayıttan hemen sonra kırpmayı düşünün; kırpılan saniyeler kalıcı olarak gider.',
            'DiskMop, iOS\'un ekran kayıtlarına eklediği işareti kullanarak onları ayrı bir kategori olarak listeler; böylece tatil videolarının arasında kaybolmazlar. Ayrıca onları sıkıştırma listesinin dışında tutar: silmeyi planladığınız bir kaydın önce küçültülmesine gerek yoktur.',
          ],
        },
        {
          title: 'Mevcut Videoları Sıkıştırmak: Ne Kaybedersiniz, Ne Korursunuz',
          content: [
            'Bir 4K klibi 1080p\'ye dönüştürmek 3840 × 2160 pikselin 1920 × 1080\'ini korur; bu, telefon ekranında normal izleme mesafesinden ayırt edilemez. Bit hızı çözünürlüğü izlediği için dosya yüzde 80 ila 90 küçülür. Kendi ölçümümüzde iPhone\'da dönüştürülen 94 MB\'lık bir 4K klip yaklaşık 11 MB oldu; tek bir video için 83 MB kazanç.',
            'Koruduklarınız: kayıt tarihi, konum, süre ve modern bir dönüştürücüyle HEVC codec\'i ile HDR bilgisi. Kaybettikleriniz: yalnızca kareyi sonradan kırpmayı ya da klibi 4K bir televizyonda oynatmayı planlıyorsanız önemli olan ek ayrıntı. Dolayısıyla sıkıştırma gündelik klipler için doğru, bir gün düzenleyebileceğiniz o tek düğün videosu için yanlıştır.',
            'İşlem tek yönlüdür. DiskMop önce küçük kopyayı oluşturur, sonra iOS\'tan orijinali silmesini ister ve iOS hiçbir şey kaldırılmadan önce kendi onay penceresini gösterir. Orijinal 30 gün boyunca Son Silinenler\'de durur; tek güvenlik ağı budur. Bu yüzden toplu sıkıştırmadan önce yeri doldurulamayacak her şeyin tam boyutlu kopyalarını iCloud\'da ya da bir bilgisayarda saklayın.',
          ],
        },
        {
          title: 'Live Photo\'lar: Gizli Üç Saniyelik Videolar',
          content: [
            'Her Live Photo iki dosyadır: bir sabit görüntü ve küçük resme bastığınızda oynayan kısa bir video. Video, fotoğrafın boyutunu kabaca ikiye katlar; Live\'ın varsayılan olarak açık bırakıldığı bir telefonda sıradan anlık çekimlerden oluşan bir arşiv sessizce minik videolardan oluşan bir arşive dönüşür. Bunların pek azı bir kez bile oynatılır.',
            'Fotoğraflar uygulaması efekti fotoğraf başına kapatmanıza izin verir (Düzenle > Live > Kapalı), ama bu yalnızca videoyu gizler; dosya yerinde kalır. Kaldırmak için paylaşım menüsünden Çoğalt > Sabit Fotoğraf Olarak Çoğalt\'ı seçip orijinali silmeniz gerekir; hem de her fotoğraf için ayrı ayrı. Bin fotoğraf için bu gerçekçi değildir.',
            'DiskMop Live Photo\'ları toplu olarak sabit fotoğrafa çevirir: seçilen her fotoğrafın sabit bir kopyasını yazar, değiştirme için iOS\'tan onay ister ve gerçekten açılan alanı ölçer. Hareketin önemli olduğu fotoğrafları, örneğin mum üfleyen bir çocuğu, atlamak kolaydır çünkü hiçbir şey önceden seçili gelmez. Gelecekteki fotoğraflar için Kamera uygulamasındaki Live simgesine dokunarak özelliği kapatın ve kapalı kalması için Ayarlar > Kamera > Ayarları Koru\'yu kullanın.',
          ],
        },
      ],
      dataTable: {
        caption: 'iOS\'un Ayarlar > Kamera > Video Kaydet ekranında tahmin ettiği dakika başına video boyutu',
        columns: ['Ayar', 'Dakika başına boyut'],
        rows: [
          ['720p, 30 fps', 'Yaklaşık 40 MB'],
          ['1080p, 30 fps', 'Yaklaşık 60 MB'],
          ['1080p, 60 fps', 'Yaklaşık 90 MB'],
          ['4K, 24 fps', 'Yaklaşık 135 MB'],
          ['4K, 30 fps', 'Yaklaşık 170 MB'],
          ['4K, 60 fps', 'Yaklaşık 400 MB'],
          ['Ekran kaydı (tam ekran)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: '4K video iPhone\'da daha iyi görünür mü?',
          answer:
            'Telefonun kendisinde hayır: ekranın 4K bir kareden daha az pikseli vardır, bu yüzden 1080p ile 4K normal izleme mesafesinden aynı görünür. 4K yalnızca düzenlerken kareyi kırptığınızda ya da klibi 4K bir televizyonda oynattığınızda karşılığını verir.',
        },
        {
          question: 'Videoyu sıkıştırmak kalitesini düşürür mü?',
          answer:
            'Evet, biraz. 4K\'yı 1080p\'ye dönüştürmek piksellerin dörtte birini ve telefon ekranında görünen ayrıntının çoğunu korur; dosya ise yüzde 80 ila 90 küçülür. Düzenleyebileceğiniz ya da büyük ekranda gösterebileceğiniz her şeyin orijinalini saklayın.',
        },
        {
          question: 'Sıkıştırdıktan sonra orijinali geri alabilir miyim?',
          answer:
            'Yalnızca 30 gün içinde Son Silinenler\'den ya da bir yedekten. DiskMop orijinali iOS onay istedikten sonra değiştirir; bu yüzden sıkıştırmayı kalıcı sayın ve yeri doldurulamayacak videoların kopyalarını önce başka bir yerde saklayın.',
        },
        {
          question: 'Fotoğraflar uygulaması video boyutlarını neden göstermiyor?',
          answer:
            'Dosya boyutlarını göstermiyor, hepsi bu. Ayarlar > Genel > iPhone Depolama Alanı > Fotoğraflar en büyük videolarınızı listeler; DiskMop\'un depolama dökümü ise arşivin ne kadarının video, ekran kaydı, Live Photo ve fotoğraf olduğunu gösterir.',
        },
      ],
      verdict: [
        'Bir iPhone\'un depolaması videoya gider ve birkaç bilinçli hamleye yanıt verir: daha fazlasına ihtiyacınız yoksa HEVC ile 1080p\'de çekin, işini görmüş ekran kayıtlarını silin, sakladığınız 4K klipleri 1080p\'ye dönüştürün ve hiç oynatmadığınız Live Photo\'ları sabit fotoğrafa çevirin. Sonra Son Silinenler\'i boşaltın.',
        'Ağır işi DiskMop telefon üzerinde yapar: sıkıştırılabilir videoları ve ekran kayıtlarını bulur, iOS\'un kendi onayıyla toplu dönüştürür ve sabit fotoğrafa çevirir, tahmin yerine ölçtüğü alanı raporlar. Tarama ücretsizdir; tam sürüm tek seferlik bir satın almadır.',
      ],
      ctaText: 'DiskMop\'u App Store\'dan indirin',
    },
    en: {
      title: 'How to Reduce Video Size on iPhone Without Deleting Your Videos',
      metaDescription:
        'A minute of 4K/60 video is about 400 MB. How to shrink iPhone videos, keep new ones small, and find the screen recordings and Live Photos filling your storage.',
      subtitle: 'Videos, screen recordings and Live Photos are usually the biggest items in a photo library',
      intro: [
        'Short answer: on most iPhones the photo library is heavy because of video, not photos. A minute of 4K video at 60 frames per second takes about 400 MB, a minute of screen recording 100 to 200 MB, and every Live Photo carries a three-second video you rarely watch. You can shrink existing videos to 1080p on the phone, flatten Live Photos to stills, and change two camera settings so new videos stay small.',
        'This guide uses Apple\'s own size estimates, shows where the largest videos hide, explains what compression keeps and what it loses, and lists the settings that prevent the problem from coming back.',
      ],
      keyTakeaways: [
        'Apple\'s estimates: 1080p at 30 fps uses about 60 MB per minute, 4K at 30 fps about 170 MB, and 4K at 60 fps about 400 MB.',
        'Settings > General > iPhone Storage > Photos lists your largest videos; screen recordings and 4K clips are usually at the top.',
        'Converting a 4K clip to 1080p on the phone typically cuts its size by 80 to 90 percent while keeping the date, location and codec.',
        'A Live Photo is a still plus a short video; flattening it to a still removes the video and saves roughly half of its size.',
        'Setting Settings > Camera > Formats to High Efficiency (HEVC) halves video size compared with Most Compatible, with no visible loss.',
        'Compression is one-way: the original is replaced after iOS asks for confirmation, so keep originals of videos you may need in full quality.',
      ],
      howTo: {
        name: 'Shrink the videos on your iPhone',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Fix the camera settings first',
            text: 'Open Settings > Camera > Formats and choose High Efficiency. Then open Record Video and pick 1080p at 30 fps for everyday clips; iOS shows the size per minute next to each option. Leave 4K for occasions that deserve it.',
          },
          {
            name: 'Find the largest videos',
            text: 'Go to Settings > General > iPhone Storage and open Photos. The list of your largest videos appears here, sorted by size, which the Photos app itself cannot do.',
          },
          {
            name: 'Delete screen recordings you no longer need',
            text: 'In Photos > Albums > Media Types, open Screen Recordings. Recordings of calls, games and app demos are often the largest files on the phone and rarely worth keeping.',
          },
          {
            name: 'Compress 4K clips to 1080p',
            text: 'Use an on-device converter. DiskMop lists compressible videos (4K and larger than 40 MB), converts them to 1080p on the phone and asks iOS for confirmation before replacing the original. A 94 MB 4K clip became about 11 MB in our test.',
          },
          {
            name: 'Flatten Live Photos you never play',
            text: 'Live Photos keep a three-second video next to the still. DiskMop can turn them into ordinary photos in bulk; in Photos you can do it one at a time with Duplicate > Duplicate as Still Photo and then delete the original.',
          },
          {
            name: 'Empty Recently Deleted',
            text: 'Replaced and deleted videos wait in Photos > Albums > Recently Deleted for 30 days. Open it, tap Select and Delete All to reclaim the space immediately.',
          },
        ],
      },
      sections: [
        {
          title: 'How Big iPhone Videos Really Are',
          content: [
            'The Photos app never shows file sizes, which is why video\'s share of storage surprises almost everyone. iOS does publish the numbers, though: open Settings > Camera > Record Video and each resolution shows an estimate per minute. At the default of 1080p and 30 fps a minute takes about 60 MB. At 4K and 60 fps, the setting many people switch on once and forget, a minute takes about 400 MB.',
            'That is the size of roughly two hundred ordinary photos for one clip of a child\'s school play. A vacation with twenty such clips is 8 GB, more than most people\'s entire photo collection. The table below lists Apple\'s estimates; the codec setting under Formats matters too, since Most Compatible (H.264) produces files about twice as large as High Efficiency (HEVC).',
            'Because the Photos app cannot sort by size, the fastest way to see where the gigabytes are is Settings > General > iPhone Storage > Photos, which lists your largest videos. DiskMop shows the same information as a breakdown of the whole library by type and by year, so you can see at a glance whether the weight is in videos, screen recordings, Live Photos or ordinary photos.',
          ],
        },
        {
          title: 'Screen Recordings: the Biggest Files You Forgot You Made',
          content: [
            'Screen recordings are the single easiest win. They are recorded at the phone\'s full screen resolution and frame rate, so a minute of a game, a video call or an app walkthrough weighs 100 to 200 MB, and most of them were made to show someone something once. iOS keeps them in the regular library, mixed in with your videos, where nothing marks them as disposable.',
            'Photos > Albums > Media Types > Screen Recordings collects them in one place. Sort through it occasionally and delete what has served its purpose. If you record often, consider recording only the region you need or trimming the clip right after recording, since the trimmed-off seconds are gone for good.',
            'DiskMop lists screen recordings as their own category using the marker iOS attaches to them, so they never hide among holiday videos, and it keeps them out of the compression list: a recording you plan to delete does not need to be shrunk first.',
          ],
        },
        {
          title: 'Compressing Existing Videos: What You Lose, What You Keep',
          content: [
            'Converting a 4K clip to 1080p keeps 1920 by 1080 pixels out of 3840 by 2160, which on a phone screen is indistinguishable at normal viewing distance. The file shrinks by 80 to 90 percent because the bit rate follows the resolution. In our own measurement, a 94 MB 4K clip converted on an iPhone became about 11 MB, a saving of 83 MB for one video.',
            'What you keep: the recording date, the location, the duration and, with a modern converter, the HEVC codec and HDR information. What you lose: the extra detail that only matters if you plan to crop into the frame later or play the clip on a 4K television. Compression is therefore right for everyday clips and wrong for the one video of a wedding you might edit some day.',
            'The process is one-way. DiskMop creates the smaller copy first, then asks iOS to delete the original, and iOS shows its own confirmation sheet before anything is removed. The original still sits in Recently Deleted for 30 days, which is the only safety net, so keep full-size copies of anything irreplaceable in iCloud or on a computer before compressing in bulk.',
          ],
        },
        {
          title: 'Live Photos: the Hidden Three-Second Videos',
          content: [
            'Every Live Photo is two files: a still image and a short video that plays when you press the thumbnail. The video roughly doubles the size of the photo, and on a phone where Live is left on by default, a library of ordinary snapshots quietly becomes a library of tiny videos. Very few of them are ever played.',
            'The Photos app lets you turn the effect off per photo (Edit > Live > Off), but that only hides the video; the file stays. To remove it, choose Duplicate > Duplicate as Still Photo from the share menu, then delete the original, one photo at a time. For a thousand photos that is not realistic.',
            'DiskMop flattens Live Photos in bulk: it writes a still copy of each selected photo, asks iOS to confirm the replacement and measures the space it actually freed. Photos where the motion matters, such as a child blowing out candles, are easy to skip because nothing is pre-selected. For future photos, tap the Live icon in the Camera app to turn it off and use Settings > Camera > Preserve Settings to keep it off.',
          ],
        },
      ],
      dataTable: {
        caption: 'Video size per minute as estimated by iOS in Settings > Camera > Record Video',
        columns: ['Setting', 'Size per minute'],
        rows: [
          ['720p at 30 fps', 'About 40 MB'],
          ['1080p at 30 fps', 'About 60 MB'],
          ['1080p at 60 fps', 'About 90 MB'],
          ['4K at 24 fps', 'About 135 MB'],
          ['4K at 30 fps', 'About 170 MB'],
          ['4K at 60 fps', 'About 400 MB'],
          ['Screen recording (full screen)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: 'Does 4K video look better on an iPhone?',
          answer:
            'Not on the phone itself: the screen has fewer pixels than a 4K frame, so 1080p and 4K look the same at normal viewing distance. 4K pays off only when you crop into the frame while editing or play the clip on a 4K television.',
        },
        {
          question: 'Will compressing a video reduce its quality?',
          answer:
            'Yes, slightly. Converting 4K to 1080p keeps a quarter of the pixels and most of the visible detail on a phone screen, and the file becomes 80 to 90 percent smaller. Keep the original of anything you might edit or show on a large screen.',
        },
        {
          question: 'Can I get the original back after compressing?',
          answer:
            'Only from Recently Deleted within 30 days, or from a backup. DiskMop replaces the original after iOS asks for confirmation, so treat compression as permanent and keep copies of irreplaceable videos elsewhere first.',
        },
        {
          question: 'Why doesn\'t the Photos app show video sizes?',
          answer:
            'It simply does not display file sizes. Settings > General > iPhone Storage > Photos lists your largest videos, and DiskMop\'s storage breakdown shows how much of the library is video, screen recordings, Live Photos and photos.',
        },
      ],
      verdict: [
        'Video is where an iPhone\'s storage goes, and it responds to a few deliberate moves: record in HEVC at 1080p unless you need more, delete screen recordings once they have done their job, convert the 4K clips you keep to 1080p, and flatten the Live Photos you never play. Then empty Recently Deleted.',
        'DiskMop does the heavy lifting on the phone: it finds the compressible videos and screen recordings, converts and flattens in bulk with iOS\'s own confirmation, and reports the space it measured rather than an estimate. Scanning is free, and the full version is a one-time purchase.',
      ],
      ctaText: 'Get DiskMop for iPhone on the App Store',
    },
    de: {
      title: 'Videos auf dem iPhone verkleinern, ohne sie zu löschen',
      metaDescription:
        'Eine Minute 4K/60 belegt rund 400 MB. So verkleinern Sie iPhone-Videos, halten neue klein und finden Bildschirmaufnahmen und Live Photos, die Speicher füllen.',
      subtitle: 'Videos, Bildschirmaufnahmen und Live Photos sind meist die größten Posten in einer Fotomediathek',
      intro: [
        'Kurze Antwort: Auf den meisten iPhones ist die Fotomediathek wegen der Videos schwer, nicht wegen der Fotos. Eine Minute 4K-Video mit 60 Bildern pro Sekunde belegt rund 400 MB, eine Minute Bildschirmaufnahme 100 bis 200 MB, und jedes Live Photo trägt ein dreisekündiges Video mit sich, das Sie selten ansehen. Sie können vorhandene Videos direkt auf dem Telefon auf 1080p verkleinern, Live Photos in Standbilder umwandeln und zwei Kameraeinstellungen ändern, damit neue Videos klein bleiben.',
        'Dieser Leitfaden verwendet Apples eigene Größenangaben, zeigt, wo sich die größten Videos verstecken, erklärt, was die Komprimierung bewahrt und was sie kostet, und nennt die Einstellungen, mit denen das Problem nicht wiederkommt.',
      ],
      keyTakeaways: [
        'Apples Schätzungen: 1080p bei 30 fps belegt rund 60 MB pro Minute, 4K bei 30 fps rund 170 MB und 4K bei 60 fps rund 400 MB.',
        'Einstellungen > Allgemein > iPhone-Speicher > Fotos listet Ihre größten Videos; Bildschirmaufnahmen und 4K-Clips stehen meist ganz oben.',
        'Die Umwandlung eines 4K-Clips in 1080p auf dem Telefon verkleinert ihn in der Regel um 80 bis 90 Prozent und behält Datum, Ort und Codec bei.',
        'Ein Live Photo ist ein Standbild plus ein kurzes Video; wird es zum Standbild reduziert, verschwindet das Video und etwa die Hälfte der Größe wird frei.',
        'Wer unter Einstellungen > Kamera > Formate auf High Efficiency (HEVC) umstellt, halbiert die Videogröße gegenüber Maximale Kompatibilität, ohne sichtbaren Verlust.',
        'Komprimierung ist eine Einbahnstraße: Das Original wird ersetzt, nachdem iOS um Bestätigung gebeten hat. Bewahren Sie deshalb Originale von Videos auf, die Sie in voller Qualität brauchen könnten.',
      ],
      howTo: {
        name: 'Videos auf dem iPhone verkleinern',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Zuerst die Kameraeinstellungen korrigieren',
            text: 'Öffnen Sie Einstellungen > Kamera > Formate und wählen Sie High Efficiency. Öffnen Sie dann Video aufnehmen und wählen Sie für Alltagsclips 1080p bei 30 fps; iOS zeigt neben jeder Option die Größe pro Minute an. Heben Sie 4K für Anlässe auf, die es verdienen.',
          },
          {
            name: 'Die größten Videos finden',
            text: 'Gehen Sie zu Einstellungen > Allgemein > iPhone-Speicher und öffnen Sie Fotos. Dort erscheint die Liste Ihrer größten Videos, nach Größe sortiert, was die Fotos-App selbst nicht kann.',
          },
          {
            name: 'Nicht mehr benötigte Bildschirmaufnahmen löschen',
            text: 'Öffnen Sie unter Fotos > Alben > Medienarten den Eintrag Bildschirmaufnahmen. Aufzeichnungen von Anrufen, Spielen und App-Demos gehören oft zu den größten Dateien auf dem Telefon und sind selten aufhebenswert.',
          },
          {
            name: '4K-Clips auf 1080p komprimieren',
            text: 'Verwenden Sie einen Konverter, der auf dem Gerät arbeitet. DiskMop listet komprimierbare Videos (4K und größer als 40 MB), wandelt sie auf dem Telefon in 1080p um und bittet iOS um Bestätigung, bevor das Original ersetzt wird. Ein 94 MB großer 4K-Clip schrumpfte in unserem Test auf rund 11 MB.',
          },
          {
            name: 'Nie abgespielte Live Photos in Standbilder umwandeln',
            text: 'Live Photos bewahren neben dem Standbild ein dreisekündiges Video auf. DiskMop kann sie gesammelt in gewöhnliche Fotos umwandeln; in der Fotos-App geht das nur einzeln über Duplizieren > Als Standbild duplizieren mit anschließendem Löschen des Originals.',
          },
          {
            name: '"Zuletzt gelöscht" leeren',
            text: 'Ersetzte und gelöschte Videos warten 30 Tage unter Fotos > Alben > Zuletzt gelöscht. Öffnen Sie das Album, tippen Sie auf Auswählen und dann auf Alle löschen, um den Platz sofort zurückzubekommen.',
          },
        ],
      },
      sections: [
        {
          title: 'Wie groß iPhone-Videos wirklich sind',
          content: [
            'Die Fotos-App zeigt nie Dateigrößen an, weshalb der Anteil der Videos am Speicher fast jeden überrascht. Dabei veröffentlicht iOS die Zahlen: Öffnen Sie Einstellungen > Kamera > Video aufnehmen, und neben jeder Auflösung steht eine Schätzung pro Minute. Mit der Standardeinstellung 1080p bei 30 fps belegt eine Minute rund 60 MB. Mit 4K bei 60 fps, der Einstellung, die viele einmal aktivieren und dann vergessen, sind es rund 400 MB pro Minute.',
            'Das entspricht etwa zweihundert gewöhnlichen Fotos für einen einzigen Clip von der Schulaufführung des Kindes. Ein Urlaub mit zwanzig solcher Clips ergibt 8 GB, mehr als die gesamte Fotosammlung der meisten Menschen. Die Tabelle unten listet Apples Schätzungen; auch die Codec-Einstellung unter Formate zählt, denn Maximale Kompatibilität (H.264) erzeugt etwa doppelt so große Dateien wie High Efficiency (HEVC).',
            'Da die Fotos-App nicht nach Größe sortieren kann, führt der schnellste Weg zu den Gigabytes über Einstellungen > Allgemein > iPhone-Speicher > Fotos, wo Ihre größten Videos aufgelistet sind. DiskMop zeigt dieselbe Information als Aufschlüsselung der gesamten Mediathek nach Typ und Jahr, sodass Sie auf einen Blick sehen, ob das Gewicht bei Videos, Bildschirmaufnahmen, Live Photos oder gewöhnlichen Fotos liegt.',
          ],
        },
        {
          title: 'Bildschirmaufnahmen: die größten Dateien, an die Sie sich nicht mehr erinnern',
          content: [
            'Bildschirmaufnahmen sind der einfachste Gewinn. Sie werden in voller Bildschirmauflösung und Bildrate des Telefons aufgezeichnet, sodass eine Minute Spiel, Videoanruf oder App-Rundgang 100 bis 200 MB wiegt, und die meisten entstanden, um jemandem einmal etwas zu zeigen. iOS bewahrt sie in der normalen Mediathek auf, gemischt mit Ihren Videos, wo nichts sie als entbehrlich kennzeichnet.',
            'Fotos > Alben > Medienarten > Bildschirmaufnahmen sammelt sie an einem Ort. Gehen Sie das Album gelegentlich durch und löschen Sie, was seinen Zweck erfüllt hat. Wenn Sie oft aufnehmen, zeichnen Sie nur den benötigten Bereich auf oder kürzen Sie den Clip direkt nach der Aufnahme, denn die abgeschnittenen Sekunden sind endgültig weg.',
            'DiskMop führt Bildschirmaufnahmen anhand der Markierung, die iOS ihnen anhängt, als eigene Kategorie, sodass sie sich nie zwischen Urlaubsvideos verstecken, und hält sie aus der Komprimierungsliste heraus: Eine Aufnahme, die Sie ohnehin löschen wollen, muss nicht erst verkleinert werden.',
          ],
        },
        {
          title: 'Vorhandene Videos komprimieren: Was verloren geht, was bleibt',
          content: [
            'Die Umwandlung eines 4K-Clips in 1080p behält 1920 × 1080 von 3840 × 2160 Pixeln, was auf einem Telefonbildschirm bei normalem Betrachtungsabstand nicht zu unterscheiden ist. Die Datei schrumpft um 80 bis 90 Prozent, weil die Bitrate der Auflösung folgt. In unserer eigenen Messung wurde ein 94 MB großer 4K-Clip, auf einem iPhone umgewandelt, rund 11 MB groß, eine Ersparnis von 83 MB für ein einziges Video.',
            'Was bleibt: Aufnahmedatum, Ort, Dauer und, mit einem modernen Konverter, der HEVC-Codec samt HDR-Informationen. Was verloren geht: das zusätzliche Detail, das nur zählt, wenn Sie später in das Bild hineinzoomen oder den Clip auf einem 4K-Fernseher abspielen wollen. Komprimierung ist deshalb richtig für Alltagsclips und falsch für das eine Hochzeitsvideo, das Sie irgendwann schneiden möchten.',
            'Der Vorgang ist nicht umkehrbar. DiskMop erstellt zuerst die kleinere Kopie, bittet dann iOS, das Original zu löschen, und iOS zeigt seinen eigenen Bestätigungsdialog, bevor irgendetwas entfernt wird. Das Original liegt noch 30 Tage unter Zuletzt gelöscht, und das ist das einzige Sicherheitsnetz. Bewahren Sie deshalb vor dem Komprimieren in großen Mengen Kopien in voller Größe von allem Unersetzlichen in iCloud oder auf einem Computer auf.',
          ],
        },
        {
          title: 'Live Photos: die versteckten Drei-Sekunden-Videos',
          content: [
            'Jedes Live Photo besteht aus zwei Dateien: einem Standbild und einem kurzen Video, das abgespielt wird, wenn Sie auf die Miniatur drücken. Das Video verdoppelt die Größe des Fotos ungefähr, und auf einem Telefon, auf dem Live standardmäßig eingeschaltet bleibt, wird eine Mediathek aus gewöhnlichen Schnappschüssen still zu einer Mediathek aus winzigen Videos. Nur die wenigsten werden je abgespielt.',
            'Die Fotos-App lässt Sie den Effekt pro Foto abschalten (Bearbeiten > Live > Aus), doch das verbirgt das Video nur; die Datei bleibt. Um es zu entfernen, wählen Sie im Teilen-Menü Duplizieren > Als Standbild duplizieren und löschen dann das Original, ein Foto nach dem anderen. Bei tausend Fotos ist das nicht realistisch.',
            'DiskMop reduziert Live Photos gesammelt auf Standbilder: Es schreibt von jedem ausgewählten Foto eine Standbildkopie, lässt iOS den Austausch bestätigen und misst den tatsächlich freigegebenen Platz. Fotos, bei denen die Bewegung zählt, etwa ein Kind, das Kerzen ausbläst, lassen sich leicht überspringen, weil nichts vorausgewählt ist. Für künftige Fotos tippen Sie in der Kamera-App auf das Live-Symbol, um es abzuschalten, und halten es über Einstellungen > Kamera > Einstellungen beibehalten ausgeschaltet.',
          ],
        },
      ],
      dataTable: {
        caption: 'Videogröße pro Minute, wie iOS sie unter Einstellungen > Kamera > Video aufnehmen schätzt',
        columns: ['Einstellung', 'Größe pro Minute'],
        rows: [
          ['720p bei 30 fps', 'Rund 40 MB'],
          ['1080p bei 30 fps', 'Rund 60 MB'],
          ['1080p bei 60 fps', 'Rund 90 MB'],
          ['4K bei 24 fps', 'Rund 135 MB'],
          ['4K bei 30 fps', 'Rund 170 MB'],
          ['4K bei 60 fps', 'Rund 400 MB'],
          ['Bildschirmaufnahme (Vollbild)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: 'Sieht 4K-Video auf einem iPhone besser aus?',
          answer:
            'Auf dem Telefon selbst nicht: Der Bildschirm hat weniger Pixel als ein 4K-Bild, daher sehen 1080p und 4K bei normalem Betrachtungsabstand gleich aus. 4K zahlt sich nur aus, wenn Sie beim Bearbeiten in das Bild hineinzoomen oder den Clip auf einem 4K-Fernseher abspielen.',
        },
        {
          question: 'Verringert das Komprimieren die Qualität eines Videos?',
          answer:
            'Ja, geringfügig. Die Umwandlung von 4K in 1080p behält ein Viertel der Pixel und den Großteil des auf einem Telefonbildschirm sichtbaren Details, und die Datei wird 80 bis 90 Prozent kleiner. Behalten Sie das Original von allem, was Sie bearbeiten oder auf einem großen Bildschirm zeigen könnten.',
        },
        {
          question: 'Kann ich das Original nach dem Komprimieren zurückholen?',
          answer:
            'Nur innerhalb von 30 Tagen aus Zuletzt gelöscht oder aus einem Backup. DiskMop ersetzt das Original, nachdem iOS um Bestätigung gebeten hat; betrachten Sie die Komprimierung also als endgültig und legen Sie vorher Kopien unersetzlicher Videos an anderer Stelle ab.',
        },
        {
          question: 'Warum zeigt die Fotos-App keine Videogrößen an?',
          answer:
            'Sie zeigt schlicht keine Dateigrößen. Einstellungen > Allgemein > iPhone-Speicher > Fotos listet Ihre größten Videos, und die Speicheraufschlüsselung von DiskMop zeigt, wie viel der Mediathek auf Videos, Bildschirmaufnahmen, Live Photos und Fotos entfällt.',
        },
      ],
      verdict: [
        'Videos sind der Ort, an dem der Speicher eines iPhones verschwindet, und sie reagieren auf ein paar gezielte Schritte: in HEVC mit 1080p aufnehmen, sofern Sie nicht mehr brauchen, Bildschirmaufnahmen löschen, sobald sie ihren Zweck erfüllt haben, die 4K-Clips, die Sie behalten, in 1080p umwandeln und die Live Photos, die Sie nie abspielen, in Standbilder verwandeln. Dann Zuletzt gelöscht leeren.',
        'Die schwere Arbeit erledigt DiskMop auf dem Telefon: Es findet die komprimierbaren Videos und Bildschirmaufnahmen, wandelt und reduziert gesammelt mit der Bestätigung von iOS selbst und meldet den gemessenen statt eines geschätzten Platzgewinns. Das Scannen ist kostenlos, die Vollversion ein einmaliger Kauf.',
      ],
      ctaText: 'DiskMop für iPhone im App Store laden',
    },
    fr: {
      title: 'Réduire la taille des vidéos sur iPhone sans les supprimer',
      metaDescription:
        'Une minute de 4K/60 pèse 400 Mo. Réduisez vos vidéos iPhone, gardez les nouvelles légères et trouvez les enregistrements d\'écran et Live Photos trop lourds.',
      subtitle: 'Vidéos, enregistrements d\'écran et Live Photos sont généralement les éléments les plus lourds d\'une photothèque',
      intro: [
        'Réponse courte : sur la plupart des iPhone, c\'est la vidéo, et non les photos, qui alourdit la photothèque. Une minute de vidéo 4K à 60 images par seconde occupe environ 400 Mo, une minute d\'enregistrement d\'écran 100 à 200 Mo, et chaque Live Photo embarque une vidéo de trois secondes que vous ne regardez presque jamais. Vous pouvez réduire les vidéos existantes en 1080p directement sur le téléphone, convertir les Live Photos en photos fixes et modifier deux réglages de l\'appareil photo pour que les nouvelles vidéos restent légères.',
        'Ce guide s\'appuie sur les estimations de taille d\'Apple, montre où se cachent les plus grosses vidéos, explique ce que la compression conserve et ce qu\'elle sacrifie, et liste les réglages qui empêchent le problème de revenir.',
      ],
      keyTakeaways: [
        'Estimations d\'Apple : 1080p à 30 i/s occupe environ 60 Mo par minute, 4K à 30 i/s environ 170 Mo et 4K à 60 i/s environ 400 Mo.',
        'Réglages > Général > Stockage iPhone > Photos liste vos plus grosses vidéos ; les enregistrements d\'écran et les clips 4K sont généralement en tête.',
        'Convertir un clip 4K en 1080p sur le téléphone réduit en général sa taille de 80 à 90 % tout en conservant la date, le lieu et le codec.',
        'Une Live Photo est une image fixe plus une courte vidéo ; la convertir en photo fixe supprime la vidéo et libère environ la moitié de sa taille.',
        'Régler Réglages > Appareil photo > Formats sur Haute efficacité (HEVC) divise par deux la taille des vidéos par rapport à Compatibilité maximale, sans perte visible.',
        'La compression est à sens unique : l\'original est remplacé après une confirmation demandée par iOS, alors conservez les originaux des vidéos dont vous pourriez avoir besoin en pleine qualité.',
      ],
      howTo: {
        name: 'Réduire les vidéos de votre iPhone',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Corriger d\'abord les réglages de l\'appareil photo',
            text: 'Ouvrez Réglages > Appareil photo > Formats et choisissez Haute efficacité. Ouvrez ensuite Enregistrement vidéo et sélectionnez 1080p à 30 i/s pour les clips du quotidien ; iOS affiche la taille par minute à côté de chaque option. Réservez la 4K aux occasions qui le méritent.',
          },
          {
            name: 'Trouver les plus grosses vidéos',
            text: 'Allez dans Réglages > Général > Stockage iPhone et ouvrez Photos. La liste de vos plus grosses vidéos s\'affiche ici, triée par taille, ce que l\'app Photos elle-même ne sait pas faire.',
          },
          {
            name: 'Supprimer les enregistrements d\'écran devenus inutiles',
            text: 'Dans Photos > Albums > Types de médias, ouvrez Enregistrements de l\'écran. Les captures d\'appels, de jeux et de démonstrations d\'apps sont souvent les fichiers les plus lourds du téléphone et méritent rarement d\'être gardées.',
          },
          {
            name: 'Compresser les clips 4K en 1080p',
            text: 'Utilisez un convertisseur qui travaille sur l\'appareil. DiskMop liste les vidéos compressibles (4K et plus de 40 Mo), les convertit en 1080p sur le téléphone et demande la confirmation d\'iOS avant de remplacer l\'original. Dans notre test, un clip 4K de 94 Mo est passé à environ 11 Mo.',
          },
          {
            name: 'Convertir les Live Photos que vous ne lisez jamais',
            text: 'Les Live Photos conservent une vidéo de trois secondes à côté de l\'image fixe. DiskMop peut les transformer en photos ordinaires en lot ; dans Photos, il faut le faire une par une avec Dupliquer > Dupliquer en tant que photo, puis supprimer l\'original.',
          },
          {
            name: 'Vider Supprimés récemment',
            text: 'Les vidéos remplacées et supprimées attendent 30 jours dans Photos > Albums > Supprimés récemment. Ouvrez l\'album, touchez Sélectionner puis Tout supprimer pour récupérer l\'espace immédiatement.',
          },
        ],
      },
      sections: [
        {
          title: 'La taille réelle des vidéos d\'iPhone',
          content: [
            'L\'app Photos n\'affiche jamais la taille des fichiers, ce qui explique que la part de la vidéo dans le stockage surprenne presque tout le monde. iOS publie pourtant les chiffres : ouvrez Réglages > Appareil photo > Enregistrement vidéo et chaque résolution affiche une estimation par minute. Avec le réglage par défaut, 1080p à 30 i/s, une minute occupe environ 60 Mo. En 4K à 60 i/s, le réglage que beaucoup activent une fois puis oublient, une minute pèse environ 400 Mo.',
            'C\'est l\'équivalent d\'environ deux cents photos ordinaires pour un seul clip du spectacle de fin d\'année de votre enfant. Des vacances avec vingt clips de ce genre représentent 8 Go, plus que la collection de photos complète de la plupart des gens. Le tableau ci-dessous reprend les estimations d\'Apple ; le réglage du codec sous Formats compte aussi, puisque Compatibilité maximale (H.264) produit des fichiers environ deux fois plus lourds que Haute efficacité (HEVC).',
            'Comme l\'app Photos ne sait pas trier par taille, le moyen le plus rapide de voir où partent les gigaoctets est Réglages > Général > Stockage iPhone > Photos, qui liste vos plus grosses vidéos. DiskMop présente la même information sous forme de répartition de toute la photothèque par type et par année, pour voir d\'un coup d\'œil si le poids vient des vidéos, des enregistrements d\'écran, des Live Photos ou des photos ordinaires.',
          ],
        },
        {
          title: 'Enregistrements d\'écran : les plus gros fichiers que vous avez oublié avoir créés',
          content: [
            'Les enregistrements d\'écran sont le gain le plus facile. Ils sont capturés à la résolution et à la fréquence d\'images complètes de l\'écran, si bien qu\'une minute de jeu, d\'appel vidéo ou de démonstration d\'app pèse 100 à 200 Mo, et la plupart n\'ont servi qu\'à montrer quelque chose à quelqu\'un une seule fois. iOS les garde dans la photothèque ordinaire, mêlés à vos vidéos, sans rien qui les signale comme jetables.',
            'Photos > Albums > Types de médias > Enregistrements de l\'écran les rassemble au même endroit. Faites-y le tri de temps en temps et supprimez ce qui a rempli son rôle. Si vous enregistrez souvent, pensez à ne capturer que la zone nécessaire ou à raccourcir le clip juste après l\'enregistrement, car les secondes coupées disparaissent pour de bon.',
            'DiskMop classe les enregistrements d\'écran dans leur propre catégorie grâce au marqueur qu\'iOS leur attache, pour qu\'ils ne se cachent jamais parmi les vidéos de vacances, et les tient à l\'écart de la liste de compression : un enregistrement que vous comptez supprimer n\'a pas besoin d\'être réduit d\'abord.',
          ],
        },
        {
          title: 'Compresser les vidéos existantes : ce que vous perdez, ce que vous gardez',
          content: [
            'Convertir un clip 4K en 1080p conserve 1920 × 1080 pixels sur 3840 × 2160, ce qui est indiscernable sur l\'écran d\'un téléphone à distance de lecture normale. Le fichier rétrécit de 80 à 90 % parce que le débit suit la résolution. Dans notre propre mesure, un clip 4K de 94 Mo converti sur un iPhone est passé à environ 11 Mo, soit 83 Mo gagnés sur une seule vidéo.',
            'Ce que vous gardez : la date de prise de vue, le lieu, la durée et, avec un convertisseur moderne, le codec HEVC et les informations HDR. Ce que vous perdez : le surplus de détail qui ne compte que si vous prévoyez de recadrer l\'image plus tard ou de lire le clip sur un téléviseur 4K. La compression convient donc aux clips du quotidien et pas à la vidéo du mariage que vous pourriez monter un jour.',
            'Le processus est à sens unique. DiskMop crée d\'abord la copie réduite, puis demande à iOS de supprimer l\'original, et iOS affiche sa propre fenêtre de confirmation avant tout retrait. L\'original reste 30 jours dans Supprimés récemment, seul filet de sécurité ; gardez donc des copies en pleine taille de tout ce qui est irremplaçable dans iCloud ou sur un ordinateur avant de compresser en lot.',
          ],
        },
        {
          title: 'Live Photos : les vidéos cachées de trois secondes',
          content: [
            'Chaque Live Photo se compose de deux fichiers : une image fixe et une courte vidéo qui se lance quand vous appuyez sur la vignette. La vidéo double à peu près la taille de la photo, et sur un téléphone où Live reste activé par défaut, une photothèque d\'instantanés ordinaires devient en silence une photothèque de minuscules vidéos. Très peu d\'entre elles sont jamais lues.',
            'L\'app Photos permet de désactiver l\'effet photo par photo (Modifier > Live > Désactivé), mais cela ne fait que masquer la vidéo ; le fichier reste. Pour la supprimer, choisissez Dupliquer > Dupliquer en tant que photo dans le menu de partage, puis supprimez l\'original, une photo à la fois. Pour mille photos, ce n\'est pas réaliste.',
            'DiskMop convertit les Live Photos en lot : il écrit une copie fixe de chaque photo sélectionnée, demande à iOS de confirmer le remplacement et mesure l\'espace réellement libéré. Les photos où le mouvement compte, comme un enfant qui souffle ses bougies, sont faciles à laisser de côté, car rien n\'est présélectionné. Pour les prochaines photos, touchez l\'icône Live dans l\'app Appareil photo pour la désactiver et utilisez Réglages > Appareil photo > Conserver les réglages pour qu\'elle le reste.',
          ],
        },
      ],
      dataTable: {
        caption: 'Taille de vidéo par minute telle qu\'estimée par iOS dans Réglages > Appareil photo > Enregistrement vidéo',
        columns: ['Réglage', 'Taille par minute'],
        rows: [
          ['720p à 30 i/s', 'Environ 40 Mo'],
          ['1080p à 30 i/s', 'Environ 60 Mo'],
          ['1080p à 60 i/s', 'Environ 90 Mo'],
          ['4K à 24 i/s', 'Environ 135 Mo'],
          ['4K à 30 i/s', 'Environ 170 Mo'],
          ['4K à 60 i/s', 'Environ 400 Mo'],
          ['Enregistrement d\'écran (plein écran)', '100–200 Mo'],
        ],
      },
      faq: [
        {
          question: 'La vidéo 4K est-elle plus belle sur un iPhone ?',
          answer:
            'Pas sur le téléphone lui-même : l\'écran compte moins de pixels qu\'une image 4K, donc 1080p et 4K se ressemblent à distance de lecture normale. La 4K ne vaut le coup que si vous recadrez l\'image au montage ou lisez le clip sur un téléviseur 4K.',
        },
        {
          question: 'Compresser une vidéo réduit-il sa qualité ?',
          answer:
            'Oui, légèrement. Convertir la 4K en 1080p conserve un quart des pixels et l\'essentiel du détail visible sur l\'écran d\'un téléphone, et le fichier devient 80 à 90 % plus petit. Gardez l\'original de tout ce que vous pourriez monter ou montrer sur un grand écran.',
        },
        {
          question: 'Puis-je récupérer l\'original après compression ?',
          answer:
            'Uniquement depuis Supprimés récemment dans les 30 jours, ou depuis une sauvegarde. DiskMop remplace l\'original après une confirmation demandée par iOS ; considérez donc la compression comme définitive et conservez d\'abord ailleurs des copies des vidéos irremplaçables.',
        },
        {
          question: 'Pourquoi l\'app Photos n\'affiche-t-elle pas la taille des vidéos ?',
          answer:
            'Elle n\'affiche tout simplement pas la taille des fichiers. Réglages > Général > Stockage iPhone > Photos liste vos plus grosses vidéos, et la répartition du stockage de DiskMop montre quelle part de la photothèque revient aux vidéos, aux enregistrements d\'écran, aux Live Photos et aux photos.',
        },
      ],
      verdict: [
        'La vidéo est là où part le stockage d\'un iPhone, et elle réagit à quelques gestes délibérés : filmer en HEVC à 1080p sauf besoin particulier, supprimer les enregistrements d\'écran une fois leur rôle rempli, convertir en 1080p les clips 4K que vous gardez et transformer en photos fixes les Live Photos que vous ne lisez jamais. Puis vider Supprimés récemment.',
        'DiskMop fait le gros du travail sur le téléphone : il trouve les vidéos compressibles et les enregistrements d\'écran, convertit et aplatit en lot avec la confirmation d\'iOS lui-même, et rapporte l\'espace mesuré plutôt qu\'une estimation. L\'analyse est gratuite et la version complète est un achat unique.',
      ],
      ctaText: 'Télécharger DiskMop pour iPhone sur l\'App Store',
    },
    es: {
      title: 'Cómo reducir el tamaño de los vídeos en el iPhone sin borrarlos',
      metaDescription:
        'Un minuto de 4K/60 ocupa 400 MB. Reduce los vídeos de tu iPhone, mantén pequeños los nuevos y localiza las grabaciones de pantalla y Live Photos más pesadas.',
      subtitle: 'Vídeos, grabaciones de pantalla y Live Photos suelen ser los elementos más grandes de una fototeca',
      intro: [
        'Respuesta corta: en la mayoría de los iPhone la fototeca pesa por los vídeos, no por las fotos. Un minuto de vídeo 4K a 60 fotogramas por segundo ocupa unos 400 MB, un minuto de grabación de pantalla entre 100 y 200 MB, y cada Live Photo lleva un vídeo de tres segundos que casi nunca ves. Puedes reducir los vídeos existentes a 1080p en el propio teléfono, convertir las Live Photos en fotos fijas y cambiar dos ajustes de la cámara para que los vídeos nuevos sean pequeños.',
        'Esta guía usa las estimaciones de tamaño de la propia Apple, muestra dónde se esconden los vídeos más grandes, explica qué conserva y qué pierde la compresión, y enumera los ajustes que evitan que el problema vuelva.',
      ],
      keyTakeaways: [
        'Estimaciones de Apple: 1080p a 30 f/s ocupa unos 60 MB por minuto, 4K a 30 f/s unos 170 MB y 4K a 60 f/s unos 400 MB.',
        'Ajustes > General > Almacenamiento del iPhone > Fotos enumera tus vídeos más grandes; las grabaciones de pantalla y los clips 4K suelen estar arriba del todo.',
        'Convertir un clip 4K a 1080p en el teléfono suele reducir su tamaño entre un 80 y un 90 % conservando la fecha, la ubicación y el códec.',
        'Una Live Photo es una foto fija más un vídeo corto; convertirla en foto fija elimina el vídeo y ahorra aproximadamente la mitad de su tamaño.',
        'Poner Ajustes > Cámara > Formatos en Alta eficiencia (HEVC) reduce a la mitad el tamaño de los vídeos frente a Más compatible, sin pérdida visible.',
        'La compresión es de un solo sentido: el original se sustituye después de que iOS pida confirmación, así que guarda los originales de los vídeos que puedas necesitar a plena calidad.',
      ],
      howTo: {
        name: 'Reducir los vídeos de tu iPhone',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Corrige primero los ajustes de la cámara',
            text: 'Abre Ajustes > Cámara > Formatos y elige Alta eficiencia. Después abre Grabar vídeo y selecciona 1080p a 30 f/s para los clips del día a día; iOS muestra el tamaño por minuto junto a cada opción. Reserva el 4K para las ocasiones que lo merezcan.',
          },
          {
            name: 'Encuentra los vídeos más grandes',
            text: 'Ve a Ajustes > General > Almacenamiento del iPhone y abre Fotos. Aquí aparece la lista de tus vídeos más grandes, ordenada por tamaño, algo que la app Fotos no puede hacer por sí misma.',
          },
          {
            name: 'Borra las grabaciones de pantalla que ya no necesitas',
            text: 'En Fotos > Álbumes > Tipos de contenido, abre Grabaciones de pantalla. Las grabaciones de llamadas, juegos y demostraciones de apps suelen ser los archivos más grandes del teléfono y rara vez merece la pena conservarlas.',
          },
          {
            name: 'Comprime los clips 4K a 1080p',
            text: 'Usa un conversor que trabaje en el dispositivo. DiskMop enumera los vídeos comprimibles (4K y de más de 40 MB), los convierte a 1080p en el teléfono y pide confirmación a iOS antes de sustituir el original. En nuestra prueba, un clip 4K de 94 MB se quedó en unos 11 MB.',
          },
          {
            name: 'Convierte en fijas las Live Photos que nunca reproduces',
            text: 'Las Live Photos guardan un vídeo de tres segundos junto a la foto fija. DiskMop puede convertirlas en fotos normales en bloque; en Fotos hay que hacerlo de una en una con Duplicar > Duplicar como foto fija y borrar después el original.',
          },
          {
            name: 'Vacía Eliminados recientemente',
            text: 'Los vídeos sustituidos y borrados esperan 30 días en Fotos > Álbumes > Eliminados recientemente. Ábrelo, toca Seleccionar y luego Eliminar todo para recuperar el espacio de inmediato.',
          },
        ],
      },
      sections: [
        {
          title: 'Cuánto ocupan realmente los vídeos del iPhone',
          content: [
            'La app Fotos nunca muestra el tamaño de los archivos, y por eso la parte que el vídeo se lleva del almacenamiento sorprende a casi todo el mundo. iOS sí publica las cifras: abre Ajustes > Cámara > Grabar vídeo y cada resolución muestra una estimación por minuto. Con el valor por defecto de 1080p a 30 f/s, un minuto ocupa unos 60 MB. En 4K a 60 f/s, el ajuste que muchos activan una vez y olvidan, un minuto ocupa unos 400 MB.',
            'Eso equivale a unas doscientas fotos normales por un solo clip de la función escolar de un niño. Unas vacaciones con veinte clips así son 8 GB, más que la colección de fotos completa de la mayoría de la gente. La tabla de abajo recoge las estimaciones de Apple; el ajuste del códec en Formatos también importa, porque Más compatible (H.264) genera archivos aproximadamente el doble de grandes que Alta eficiencia (HEVC).',
            'Como la app Fotos no puede ordenar por tamaño, la forma más rápida de ver dónde están los gigabytes es Ajustes > General > Almacenamiento del iPhone > Fotos, que enumera tus vídeos más grandes. DiskMop muestra la misma información como un desglose de toda la fototeca por tipo y por año, para que veas de un vistazo si el peso está en los vídeos, las grabaciones de pantalla, las Live Photos o las fotos normales.',
          ],
        },
        {
          title: 'Grabaciones de pantalla: los archivos más grandes que olvidaste haber hecho',
          content: [
            'Las grabaciones de pantalla son la ganancia más fácil. Se graban a la resolución y la frecuencia de fotogramas completas de la pantalla, así que un minuto de un juego, una videollamada o un recorrido por una app pesa entre 100 y 200 MB, y la mayoría se hicieron para enseñarle algo a alguien una sola vez. iOS las guarda en la fototeca normal, mezcladas con tus vídeos, donde nada las marca como desechables.',
            'Fotos > Álbumes > Tipos de contenido > Grabaciones de pantalla las reúne en un solo sitio. Revísalo de vez en cuando y borra lo que ya cumplió su función. Si grabas a menudo, plantéate grabar solo la zona que necesitas o recortar el clip justo después de grabarlo, porque los segundos recortados desaparecen para siempre.',
            'DiskMop enumera las grabaciones de pantalla como categoría propia usando la marca que iOS les añade, así nunca se esconden entre los vídeos de las vacaciones, y las deja fuera de la lista de compresión: una grabación que piensas borrar no necesita reducirse antes.',
          ],
        },
        {
          title: 'Comprimir vídeos existentes: qué pierdes y qué conservas',
          content: [
            'Convertir un clip 4K a 1080p conserva 1920 × 1080 píxeles de 3840 × 2160, algo indistinguible en la pantalla de un teléfono a una distancia de visión normal. El archivo se reduce entre un 80 y un 90 % porque la tasa de bits sigue a la resolución. En nuestra propia medición, un clip 4K de 94 MB convertido en un iPhone se quedó en unos 11 MB, un ahorro de 83 MB en un solo vídeo.',
            'Lo que conservas: la fecha de grabación, la ubicación, la duración y, con un conversor moderno, el códec HEVC y la información HDR. Lo que pierdes: el detalle extra que solo importa si planeas recortar el encuadre más adelante o reproducir el clip en un televisor 4K. La compresión es, por tanto, adecuada para los clips del día a día e inadecuada para ese único vídeo de una boda que algún día podrías editar.',
            'El proceso es de un solo sentido. DiskMop crea primero la copia más pequeña, después pide a iOS que borre el original, e iOS muestra su propia hoja de confirmación antes de eliminar nada. El original sigue en Eliminados recientemente durante 30 días, que es la única red de seguridad, así que guarda copias a tamaño completo de todo lo irremplazable en iCloud o en un ordenador antes de comprimir en bloque.',
          ],
        },
        {
          title: 'Live Photos: los vídeos ocultos de tres segundos',
          content: [
            'Cada Live Photo son dos archivos: una imagen fija y un vídeo corto que se reproduce al mantener pulsada la miniatura. El vídeo duplica aproximadamente el tamaño de la foto, y en un teléfono donde Live queda activado por defecto, una fototeca de instantáneas corrientes se convierte en silencio en una fototeca de vídeos diminutos. Muy pocos se reproducen alguna vez.',
            'La app Fotos permite desactivar el efecto foto a foto (Editar > Live > Desactivado), pero eso solo oculta el vídeo; el archivo se queda. Para eliminarlo, elige Duplicar > Duplicar como foto fija en el menú de compartir y borra después el original, una foto cada vez. Para mil fotos no es realista.',
            'DiskMop convierte las Live Photos en bloque: escribe una copia fija de cada foto seleccionada, pide a iOS que confirme la sustitución y mide el espacio que realmente ha liberado. Las fotos en las que el movimiento importa, como un niño soplando las velas, son fáciles de saltar porque nada viene preseleccionado. Para las fotos futuras, toca el icono Live en la app Cámara para desactivarlo y usa Ajustes > Cámara > Mantener ajustes para que siga desactivado.',
          ],
        },
      ],
      dataTable: {
        caption: 'Tamaño de vídeo por minuto según la estimación de iOS en Ajustes > Cámara > Grabar vídeo',
        columns: ['Ajuste', 'Tamaño por minuto'],
        rows: [
          ['720p a 30 f/s', 'Unos 40 MB'],
          ['1080p a 30 f/s', 'Unos 60 MB'],
          ['1080p a 60 f/s', 'Unos 90 MB'],
          ['4K a 24 f/s', 'Unos 135 MB'],
          ['4K a 30 f/s', 'Unos 170 MB'],
          ['4K a 60 f/s', 'Unos 400 MB'],
          ['Grabación de pantalla (pantalla completa)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: '¿El vídeo 4K se ve mejor en un iPhone?',
          answer:
            'En el propio teléfono no: la pantalla tiene menos píxeles que un fotograma 4K, así que 1080p y 4K se ven igual a una distancia normal. El 4K solo compensa cuando recortas el encuadre al editar o reproduces el clip en un televisor 4K.',
        },
        {
          question: '¿Comprimir un vídeo reduce su calidad?',
          answer:
            'Sí, ligeramente. Convertir 4K a 1080p conserva una cuarta parte de los píxeles y la mayor parte del detalle visible en la pantalla de un teléfono, y el archivo queda entre un 80 y un 90 % más pequeño. Guarda el original de todo lo que puedas editar o mostrar en una pantalla grande.',
        },
        {
          question: '¿Puedo recuperar el original después de comprimir?',
          answer:
            'Solo desde Eliminados recientemente dentro de los 30 días, o desde una copia de seguridad. DiskMop sustituye el original después de que iOS pida confirmación, así que trata la compresión como permanente y guarda antes copias de los vídeos irremplazables en otro sitio.',
        },
        {
          question: '¿Por qué la app Fotos no muestra el tamaño de los vídeos?',
          answer:
            'Sencillamente no muestra el tamaño de los archivos. Ajustes > General > Almacenamiento del iPhone > Fotos enumera tus vídeos más grandes, y el desglose de almacenamiento de DiskMop muestra qué parte de la fototeca son vídeos, grabaciones de pantalla, Live Photos y fotos.',
        },
      ],
      verdict: [
        'El vídeo es a donde se va el almacenamiento de un iPhone, y responde a unos pocos movimientos deliberados: graba en HEVC a 1080p salvo que necesites más, borra las grabaciones de pantalla cuando hayan cumplido su función, convierte a 1080p los clips 4K que conserves y convierte en fijas las Live Photos que nunca reproduces. Después vacía Eliminados recientemente.',
        'DiskMop hace el trabajo pesado en el teléfono: encuentra los vídeos comprimibles y las grabaciones de pantalla, convierte y aplana en bloque con la confirmación del propio iOS, e informa del espacio que ha medido en lugar de una estimación. El análisis es gratuito y la versión completa es una compra única.',
      ],
      ctaText: 'Consigue DiskMop para iPhone en el App Store',
    },
    it: {
      title: 'Come ridurre le dimensioni dei video su iPhone senza cancellarli',
      metaDescription:
        'Un minuto di 4K/60 occupa 400 MB. Riduci i video dell\'iPhone, mantieni piccoli quelli nuovi e trova le registrazioni schermo e le Live Photo più pesanti.',
      subtitle: 'Video, registrazioni schermo e Live Photo sono di solito gli elementi più pesanti di una libreria foto',
      intro: [
        'Risposta breve: sulla maggior parte degli iPhone la libreria foto pesa per i video, non per le foto. Un minuto di video 4K a 60 fotogrammi al secondo occupa circa 400 MB, un minuto di registrazione schermo da 100 a 200 MB, e ogni Live Photo porta con sé un video di tre secondi che guardi di rado. Puoi ridurre i video esistenti a 1080p direttamente sul telefono, trasformare le Live Photo in foto statiche e cambiare due impostazioni della fotocamera perché i nuovi video restino piccoli.',
        'Questa guida usa le stime di dimensione di Apple, mostra dove si nascondono i video più grandi, spiega cosa la compressione conserva e cosa perde, ed elenca le impostazioni che impediscono al problema di ripresentarsi.',
      ],
      keyTakeaways: [
        'Stime di Apple: 1080p a 30 fps occupa circa 60 MB al minuto, 4K a 30 fps circa 170 MB e 4K a 60 fps circa 400 MB.',
        'Impostazioni > Generali > Spazio iPhone > Foto elenca i tuoi video più grandi; registrazioni schermo e clip 4K sono di solito in cima.',
        'Convertire una clip 4K in 1080p sul telefono ne riduce in genere le dimensioni dell\'80-90 % mantenendo data, posizione e codec.',
        'Una Live Photo è una foto statica più un breve video; trasformarla in foto statica rimuove il video e fa risparmiare circa metà delle dimensioni.',
        'Impostare Impostazioni > Fotocamera > Formati su Alta efficienza (HEVC) dimezza le dimensioni dei video rispetto a Più compatibile, senza perdite visibili.',
        'La compressione è a senso unico: l\'originale viene sostituito dopo che iOS chiede conferma, quindi conserva gli originali dei video che potresti volere a piena qualità.',
      ],
      howTo: {
        name: 'Ridurre i video sul tuo iPhone',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Sistema prima le impostazioni della fotocamera',
            text: 'Apri Impostazioni > Fotocamera > Formati e scegli Alta efficienza. Poi apri Registra video e seleziona 1080p a 30 fps per le clip di tutti i giorni; iOS mostra le dimensioni al minuto accanto a ogni opzione. Lascia il 4K alle occasioni che lo meritano.',
          },
          {
            name: 'Trova i video più grandi',
            text: 'Vai in Impostazioni > Generali > Spazio iPhone e apri Foto. Qui compare l\'elenco dei tuoi video più grandi, ordinato per dimensione, cosa che l\'app Foto da sola non sa fare.',
          },
          {
            name: 'Elimina le registrazioni schermo che non ti servono più',
            text: 'In Foto > Album > Tipi di file, apri Registrazioni schermo. Le registrazioni di chiamate, giochi e dimostrazioni di app sono spesso i file più grandi del telefono e raramente vale la pena tenerle.',
          },
          {
            name: 'Comprimi le clip 4K in 1080p',
            text: 'Usa un convertitore che lavora sul dispositivo. DiskMop elenca i video comprimibili (4K e più grandi di 40 MB), li converte in 1080p sul telefono e chiede conferma a iOS prima di sostituire l\'originale. Nel nostro test una clip 4K da 94 MB è scesa a circa 11 MB.',
          },
          {
            name: 'Trasforma in foto le Live Photo che non riproduci mai',
            text: 'Le Live Photo conservano un video di tre secondi accanto alla foto statica. DiskMop può trasformarle in foto normali in blocco; in Foto puoi farlo una alla volta con Duplica > Duplica come foto e poi eliminare l\'originale.',
          },
          {
            name: 'Svuota Eliminati di recente',
            text: 'I video sostituiti ed eliminati restano 30 giorni in Foto > Album > Eliminati di recente. Aprilo, tocca Seleziona e poi Elimina tutto per recuperare subito lo spazio.',
          },
        ],
      },
      sections: [
        {
          title: 'Quanto sono grandi davvero i video dell\'iPhone',
          content: [
            'L\'app Foto non mostra mai le dimensioni dei file, ed è per questo che la quota di spazio occupata dai video sorprende quasi tutti. iOS però pubblica i numeri: apri Impostazioni > Fotocamera > Registra video e accanto a ogni risoluzione compare una stima al minuto. Con l\'impostazione predefinita di 1080p a 30 fps un minuto occupa circa 60 MB. In 4K a 60 fps, l\'impostazione che molti attivano una volta e poi dimenticano, un minuto occupa circa 400 MB.',
            'È l\'equivalente di circa duecento foto normali per una sola clip della recita scolastica di un bambino. Una vacanza con venti clip così fa 8 GB, più dell\'intera raccolta di foto della maggior parte delle persone. La tabella qui sotto riporta le stime di Apple; conta anche l\'impostazione del codec sotto Formati, perché Più compatibile (H.264) produce file circa due volte più grandi di Alta efficienza (HEVC).',
            'Poiché l\'app Foto non può ordinare per dimensione, il modo più rapido per vedere dove sono i gigabyte è Impostazioni > Generali > Spazio iPhone > Foto, che elenca i tuoi video più grandi. DiskMop mostra la stessa informazione come ripartizione dell\'intera libreria per tipo e per anno, così vedi a colpo d\'occhio se il peso sta nei video, nelle registrazioni schermo, nelle Live Photo o nelle foto normali.',
          ],
        },
        {
          title: 'Registrazioni schermo: i file più grandi che hai dimenticato di aver fatto',
          content: [
            'Le registrazioni schermo sono il guadagno più facile. Vengono registrate alla risoluzione e alla frequenza di fotogrammi complete dello schermo, così un minuto di gioco, videochiamata o dimostrazione di un\'app pesa da 100 a 200 MB, e la maggior parte è nata per mostrare qualcosa a qualcuno una volta sola. iOS le tiene nella libreria normale, mescolate ai tuoi video, dove nulla le segnala come eliminabili.',
            'Foto > Album > Tipi di file > Registrazioni schermo le raccoglie in un unico posto. Dagli un\'occhiata ogni tanto ed elimina ciò che ha fatto il suo dovere. Se registri spesso, valuta di registrare solo l\'area che ti serve o di tagliare la clip subito dopo la registrazione, perché i secondi tagliati spariscono per sempre.',
            'DiskMop elenca le registrazioni schermo come categoria a sé grazie al contrassegno che iOS assegna loro, così non si nascondono mai tra i video delle vacanze, e le tiene fuori dall\'elenco di compressione: una registrazione che intendi eliminare non ha bisogno di essere prima ridotta.',
          ],
        },
        {
          title: 'Comprimere i video esistenti: cosa perdi, cosa conservi',
          content: [
            'Convertire una clip 4K in 1080p mantiene 1920 × 1080 pixel su 3840 × 2160, cosa indistinguibile sullo schermo di un telefono alla normale distanza di visione. Il file si riduce dell\'80-90 % perché il bitrate segue la risoluzione. Nella nostra misurazione, una clip 4K da 94 MB convertita su un iPhone è diventata di circa 11 MB, un risparmio di 83 MB per un solo video.',
            'Cosa conservi: la data di registrazione, la posizione, la durata e, con un convertitore moderno, il codec HEVC e le informazioni HDR. Cosa perdi: il dettaglio in più che conta solo se pensi di ritagliare l\'inquadratura in seguito o di riprodurre la clip su un televisore 4K. La compressione è quindi giusta per le clip di tutti i giorni e sbagliata per quell\'unico video di un matrimonio che un giorno potresti montare.',
            'Il processo è a senso unico. DiskMop crea prima la copia più piccola, poi chiede a iOS di eliminare l\'originale, e iOS mostra la propria finestra di conferma prima che qualcosa venga rimosso. L\'originale resta in Eliminati di recente per 30 giorni, che è l\'unica rete di sicurezza, quindi conserva copie a dimensione piena di tutto ciò che è insostituibile su iCloud o su un computer prima di comprimere in blocco.',
          ],
        },
        {
          title: 'Live Photo: i video nascosti da tre secondi',
          content: [
            'Ogni Live Photo è composta da due file: un\'immagine statica e un breve video che parte quando premi sulla miniatura. Il video raddoppia all\'incirca le dimensioni della foto, e su un telefono in cui Live resta attivo per impostazione predefinita una libreria di istantanee comuni diventa in silenzio una libreria di piccoli video. Pochissimi vengono mai riprodotti.',
            'L\'app Foto permette di disattivare l\'effetto foto per foto (Modifica > Live > Disattivato), ma questo nasconde soltanto il video; il file rimane. Per rimuoverlo, scegli Duplica > Duplica come foto dal menu di condivisione e poi elimina l\'originale, una foto alla volta. Per mille foto non è realistico.',
            'DiskMop trasforma le Live Photo in blocco: scrive una copia statica di ogni foto selezionata, chiede a iOS di confermare la sostituzione e misura lo spazio effettivamente liberato. Le foto in cui il movimento conta, come un bambino che spegne le candeline, sono facili da saltare perché nulla è preselezionato. Per le foto future, tocca l\'icona Live nell\'app Fotocamera per disattivarla e usa Impostazioni > Fotocamera > Mantieni impostazioni perché resti disattivata.',
          ],
        },
      ],
      dataTable: {
        caption: 'Dimensioni video al minuto secondo la stima di iOS in Impostazioni > Fotocamera > Registra video',
        columns: ['Impostazione', 'Dimensioni al minuto'],
        rows: [
          ['720p a 30 fps', 'Circa 40 MB'],
          ['1080p a 30 fps', 'Circa 60 MB'],
          ['1080p a 60 fps', 'Circa 90 MB'],
          ['4K a 24 fps', 'Circa 135 MB'],
          ['4K a 30 fps', 'Circa 170 MB'],
          ['4K a 60 fps', 'Circa 400 MB'],
          ['Registrazione schermo (schermo intero)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: 'Il video 4K si vede meglio su un iPhone?',
          answer:
            'Sul telefono stesso no: lo schermo ha meno pixel di un fotogramma 4K, quindi 1080p e 4K appaiono uguali alla normale distanza di visione. Il 4K ripaga solo quando ritagli l\'inquadratura in fase di montaggio o riproduci la clip su un televisore 4K.',
        },
        {
          question: 'Comprimere un video ne riduce la qualità?',
          answer:
            'Sì, leggermente. Convertire il 4K in 1080p mantiene un quarto dei pixel e gran parte del dettaglio visibile sullo schermo di un telefono, e il file diventa più piccolo dell\'80-90 %. Conserva l\'originale di tutto ciò che potresti montare o mostrare su uno schermo grande.',
        },
        {
          question: 'Posso recuperare l\'originale dopo la compressione?',
          answer:
            'Solo da Eliminati di recente entro 30 giorni, oppure da un backup. DiskMop sostituisce l\'originale dopo che iOS chiede conferma, quindi considera la compressione definitiva e conserva prima altrove le copie dei video insostituibili.',
        },
        {
          question: 'Perché l\'app Foto non mostra le dimensioni dei video?',
          answer:
            'Semplicemente non mostra le dimensioni dei file. Impostazioni > Generali > Spazio iPhone > Foto elenca i tuoi video più grandi, e la ripartizione dello spazio di DiskMop mostra quanta parte della libreria è fatta di video, registrazioni schermo, Live Photo e foto.',
        },
      ],
      verdict: [
        'I video sono il punto in cui finisce lo spazio di un iPhone, e rispondono a poche mosse mirate: registra in HEVC a 1080p a meno che non ti serva di più, elimina le registrazioni schermo una volta che hanno fatto il loro dovere, converti in 1080p le clip 4K che tieni e trasforma in foto statiche le Live Photo che non riproduci mai. Poi svuota Eliminati di recente.',
        'DiskMop fa il lavoro pesante sul telefono: trova i video comprimibili e le registrazioni schermo, converte e appiattisce in blocco con la conferma di iOS stesso, e riporta lo spazio misurato anziché una stima. La scansione è gratuita e la versione completa è un acquisto una tantum.',
      ],
      ctaText: 'Scarica DiskMop per iPhone dall\'App Store',
    },
    pt: {
      title: 'Como reduzir o tamanho dos vídeos no iPhone sem apagá-los',
      metaDescription:
        'Um minuto de 4K/60 ocupa 400 MB. Reduza os vídeos do seu iPhone, mantenha os novos pequenos e encontre as gravações de tela e Live Photos mais pesadas.',
      subtitle: 'Vídeos, gravações de tela e Live Photos costumam ser os itens mais pesados de uma biblioteca de fotos',
      intro: [
        'Resposta curta: na maioria dos iPhones, a biblioteca de fotos pesa por causa dos vídeos, não das fotos. Um minuto de vídeo 4K a 60 quadros por segundo ocupa cerca de 400 MB, um minuto de gravação de tela de 100 a 200 MB, e cada Live Photo carrega um vídeo de três segundos que você raramente assiste. Você pode reduzir os vídeos existentes para 1080p no próprio celular, transformar Live Photos em fotos estáticas e mudar dois ajustes da câmera para que os vídeos novos continuem pequenos.',
        'Este guia usa as estimativas de tamanho da própria Apple, mostra onde os maiores vídeos se escondem, explica o que a compressão preserva e o que perde, e lista os ajustes que impedem o problema de voltar.',
      ],
      keyTakeaways: [
        'Estimativas da Apple: 1080p a 30 qps usa cerca de 60 MB por minuto, 4K a 30 qps cerca de 170 MB e 4K a 60 qps cerca de 400 MB.',
        'Ajustes > Geral > Armazenamento do iPhone > Fotos lista seus maiores vídeos; gravações de tela e clipes 4K costumam estar no topo.',
        'Converter um clipe 4K para 1080p no celular normalmente reduz o tamanho em 80 a 90 %, mantendo data, localização e codec.',
        'Uma Live Photo é uma foto estática mais um vídeo curto; transformá-la em foto estática remove o vídeo e economiza cerca de metade do tamanho.',
        'Definir Ajustes > Câmera > Formatos como Alta Eficiência (HEVC) reduz o tamanho dos vídeos pela metade em relação a Mais Compatível, sem perda visível.',
        'A compressão é de mão única: o original é substituído depois que o iOS pede confirmação, então guarde os originais dos vídeos que você pode precisar em qualidade total.',
      ],
      howTo: {
        name: 'Reduzir os vídeos do seu iPhone',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Corrija primeiro os ajustes da câmera',
            text: 'Abra Ajustes > Câmera > Formatos e escolha Alta Eficiência. Depois abra Gravar Vídeo e selecione 1080p a 30 qps para os clipes do dia a dia; o iOS mostra o tamanho por minuto ao lado de cada opção. Deixe o 4K para as ocasiões que merecem.',
          },
          {
            name: 'Encontre os maiores vídeos',
            text: 'Vá em Ajustes > Geral > Armazenamento do iPhone e abra Fotos. A lista dos seus maiores vídeos aparece aqui, ordenada por tamanho, algo que o próprio app Fotos não consegue fazer.',
          },
          {
            name: 'Apague as gravações de tela que não precisa mais',
            text: 'Em Fotos > Álbuns > Tipos de Mídia, abra Gravações de Tela. Gravações de chamadas, jogos e demonstrações de apps costumam ser os maiores arquivos do celular e raramente valem a pena guardar.',
          },
          {
            name: 'Comprima os clipes 4K para 1080p',
            text: 'Use um conversor que trabalha no aparelho. O DiskMop lista os vídeos compressíveis (4K e maiores que 40 MB), converte para 1080p no celular e pede confirmação ao iOS antes de substituir o original. Um clipe 4K de 94 MB ficou com cerca de 11 MB no nosso teste.',
          },
          {
            name: 'Transforme em foto as Live Photos que você nunca reproduz',
            text: 'As Live Photos guardam um vídeo de três segundos ao lado da foto estática. O DiskMop pode transformá-las em fotos comuns em lote; no Fotos, é preciso fazer uma de cada vez com Duplicar > Duplicar como Foto e depois apagar o original.',
          },
          {
            name: 'Esvazie Apagados Recentemente',
            text: 'Vídeos substituídos e apagados ficam 30 dias em Fotos > Álbuns > Apagados Recentemente. Abra o álbum, toque em Selecionar e depois em Apagar Tudo para recuperar o espaço na hora.',
          },
        ],
      },
      sections: [
        {
          title: 'O tamanho real dos vídeos do iPhone',
          content: [
            'O app Fotos nunca mostra o tamanho dos arquivos, e é por isso que a fatia do armazenamento ocupada por vídeo surpreende quase todo mundo. O iOS, porém, publica os números: abra Ajustes > Câmera > Gravar Vídeo e cada resolução mostra uma estimativa por minuto. No padrão de 1080p a 30 qps, um minuto ocupa cerca de 60 MB. Em 4K a 60 qps, o ajuste que muita gente ativa uma vez e esquece, um minuto ocupa cerca de 400 MB.',
            'Isso equivale a cerca de duzentas fotos comuns por um único clipe da apresentação escolar de uma criança. Umas férias com vinte clipes assim dão 8 GB, mais do que a coleção inteira de fotos da maioria das pessoas. A tabela abaixo lista as estimativas da Apple; o ajuste de codec em Formatos também importa, já que Mais Compatível (H.264) produz arquivos cerca de duas vezes maiores que Alta Eficiência (HEVC).',
            'Como o app Fotos não consegue ordenar por tamanho, o jeito mais rápido de ver onde estão os gigabytes é Ajustes > Geral > Armazenamento do iPhone > Fotos, que lista seus maiores vídeos. O DiskMop mostra a mesma informação como um detalhamento de toda a biblioteca por tipo e por ano, para você ver de relance se o peso está nos vídeos, nas gravações de tela, nas Live Photos ou nas fotos comuns.',
          ],
        },
        {
          title: 'Gravações de tela: os maiores arquivos que você esqueceu que fez',
          content: [
            'As gravações de tela são o ganho mais fácil. Elas são gravadas na resolução e na taxa de quadros completas da tela, então um minuto de jogo, chamada de vídeo ou demonstração de app pesa de 100 a 200 MB, e a maioria foi feita para mostrar algo a alguém uma única vez. O iOS as mantém na biblioteca normal, misturadas com seus vídeos, onde nada as marca como descartáveis.',
            'Fotos > Álbuns > Tipos de Mídia > Gravações de Tela reúne todas num só lugar. Dê uma olhada de vez em quando e apague o que já cumpriu seu papel. Se você grava com frequência, considere gravar só a região necessária ou cortar o clipe logo após a gravação, porque os segundos cortados desaparecem de vez.',
            'O DiskMop lista as gravações de tela como categoria própria usando o marcador que o iOS anexa a elas, então nunca se escondem entre os vídeos de férias, e as mantém fora da lista de compressão: uma gravação que você pretende apagar não precisa ser reduzida antes.',
          ],
        },
        {
          title: 'Comprimir vídeos existentes: o que você perde, o que mantém',
          content: [
            'Converter um clipe 4K para 1080p mantém 1920 × 1080 pixels de 3840 × 2160, o que na tela de um celular é indistinguível à distância normal de visualização. O arquivo encolhe de 80 a 90 % porque a taxa de bits acompanha a resolução. Na nossa própria medição, um clipe 4K de 94 MB convertido num iPhone ficou com cerca de 11 MB, uma economia de 83 MB em um único vídeo.',
            'O que você mantém: a data da gravação, a localização, a duração e, com um conversor moderno, o codec HEVC e as informações de HDR. O que você perde: o detalhe extra que só importa se você pretende recortar o enquadramento depois ou reproduzir o clipe numa TV 4K. A compressão é, portanto, certa para clipes do dia a dia e errada para aquele único vídeo de casamento que você pode editar um dia.',
            'O processo é de mão única. O DiskMop cria primeiro a cópia menor, depois pede ao iOS que apague o original, e o iOS exibe a própria tela de confirmação antes de remover qualquer coisa. O original ainda fica em Apagados Recentemente por 30 dias, que é a única rede de segurança, então guarde cópias em tamanho completo de tudo que é insubstituível no iCloud ou num computador antes de comprimir em lote.',
          ],
        },
        {
          title: 'Live Photos: os vídeos escondidos de três segundos',
          content: [
            'Toda Live Photo são dois arquivos: uma imagem estática e um vídeo curto que toca quando você pressiona a miniatura. O vídeo praticamente dobra o tamanho da foto, e num celular em que o Live fica ligado por padrão, uma biblioteca de fotos comuns vira silenciosamente uma biblioteca de vídeos minúsculos. Pouquíssimos são reproduzidos alguma vez.',
            'O app Fotos permite desligar o efeito foto por foto (Editar > Live > Desativado), mas isso só esconde o vídeo; o arquivo continua lá. Para removê-lo, escolha Duplicar > Duplicar como Foto no menu de compartilhamento e depois apague o original, uma foto de cada vez. Para mil fotos, isso não é realista.',
            'O DiskMop transforma Live Photos em lote: grava uma cópia estática de cada foto selecionada, pede ao iOS para confirmar a substituição e mede o espaço que realmente liberou. Fotos em que o movimento importa, como uma criança soprando velas, são fáceis de pular porque nada vem pré-selecionado. Para as próximas fotos, toque no ícone Live no app Câmera para desligá-lo e use Ajustes > Câmera > Preservar Ajustes para que continue desligado.',
          ],
        },
      ],
      dataTable: {
        caption: 'Tamanho de vídeo por minuto conforme a estimativa do iOS em Ajustes > Câmera > Gravar Vídeo',
        columns: ['Ajuste', 'Tamanho por minuto'],
        rows: [
          ['720p a 30 qps', 'Cerca de 40 MB'],
          ['1080p a 30 qps', 'Cerca de 60 MB'],
          ['1080p a 60 qps', 'Cerca de 90 MB'],
          ['4K a 24 qps', 'Cerca de 135 MB'],
          ['4K a 30 qps', 'Cerca de 170 MB'],
          ['4K a 60 qps', 'Cerca de 400 MB'],
          ['Gravação de tela (tela cheia)', '100–200 MB'],
        ],
      },
      faq: [
        {
          question: 'Vídeo 4K fica melhor no iPhone?',
          answer:
            'No próprio celular, não: a tela tem menos pixels que um quadro 4K, então 1080p e 4K parecem iguais à distância normal. O 4K só compensa quando você recorta o enquadramento na edição ou reproduz o clipe numa TV 4K.',
        },
        {
          question: 'Comprimir um vídeo reduz a qualidade?',
          answer:
            'Sim, um pouco. Converter 4K para 1080p mantém um quarto dos pixels e a maior parte do detalhe visível na tela de um celular, e o arquivo fica de 80 a 90 % menor. Guarde o original de tudo que você pode editar ou exibir numa tela grande.',
        },
        {
          question: 'Dá para recuperar o original depois de comprimir?',
          answer:
            'Só em Apagados Recentemente dentro de 30 dias, ou a partir de um backup. O DiskMop substitui o original depois que o iOS pede confirmação, então trate a compressão como permanente e guarde antes cópias dos vídeos insubstituíveis em outro lugar.',
        },
        {
          question: 'Por que o app Fotos não mostra o tamanho dos vídeos?',
          answer:
            'Ele simplesmente não exibe o tamanho dos arquivos. Ajustes > Geral > Armazenamento do iPhone > Fotos lista seus maiores vídeos, e o detalhamento de armazenamento do DiskMop mostra quanto da biblioteca é vídeo, gravação de tela, Live Photo e foto.',
        },
      ],
      verdict: [
        'É no vídeo que o armazenamento de um iPhone vai embora, e ele responde a alguns movimentos deliberados: grave em HEVC a 1080p a menos que precise de mais, apague as gravações de tela depois que cumprirem seu papel, converta para 1080p os clipes 4K que você guarda e transforme em fotos estáticas as Live Photos que nunca reproduz. Depois esvazie Apagados Recentemente.',
        'O DiskMop faz o trabalho pesado no celular: encontra os vídeos compressíveis e as gravações de tela, converte e transforma em lote com a confirmação do próprio iOS, e informa o espaço que mediu em vez de uma estimativa. A verificação é gratuita e a versão completa é uma compra única.',
      ],
      ctaText: 'Baixe o DiskMop para iPhone na App Store',
    },
    ja: {
      title: 'iPhone の動画を削除せずにサイズを小さくする方法',
      metaDescription:
        '4K/60 fps の動画は 1 分で約 400 MB。iPhone にある動画を小さくし、新しい動画を軽く保ち、ストレージを圧迫する画面収録と Live Photo を見つける方法を解説します。',
      subtitle: '動画、画面収録、Live Photo は写真ライブラリで最も容量を使う項目であることがほとんどです',
      intro: [
        '短い答え: ほとんどの iPhone で写真ライブラリが重いのは写真ではなく動画のせいです。60 fps の 4K 動画は 1 分で約 400 MB、画面収録は 1 分で 100〜200 MB を使い、Live Photo はめったに見ない 3 秒の動画を 1 枚ごとに抱えています。既存の動画は iPhone 上で 1080p に縮小でき、Live Photo は静止画に変換でき、カメラの設定を 2 か所変えれば新しい動画を小さく保てます。',
        'この記事では Apple 自身のサイズ目安を使い、最も大きい動画がどこに隠れているかを示し、圧縮で何が残り何が失われるかを説明し、問題の再発を防ぐ設定を挙げます。',
      ],
      keyTakeaways: [
        'Apple の目安: 1080p/30 fps は 1 分あたり約 60 MB、4K/30 fps は約 170 MB、4K/60 fps は約 400 MB を使います。',
        '設定 > 一般 > iPhoneストレージ > 写真 には最も大きい動画が一覧表示され、画面収録と 4K クリップがたいてい上位に並びます。',
        '4K クリップを iPhone 上で 1080p に変換すると、日付・位置情報・コーデックを保ったままサイズがおおむね 80〜90% 減ります。',
        'Live Photo は静止画と短い動画の組み合わせです。静止画に変換すると動画が取り除かれ、サイズのほぼ半分が空きます。',
        '設定 > カメラ > フォーマット を高効率（HEVC）にすると、互換性優先に比べて動画サイズが半分になり、見た目の劣化はありません。',
        '圧縮は一方通行です。iOS が確認を求めたあとに元の動画は置き換えられるので、フル画質で必要になるかもしれない動画は元データを残しておいてください。',
      ],
      howTo: {
        name: 'iPhone の動画を小さくする',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'まずカメラの設定を直す',
            text: '設定 > カメラ > フォーマット を開き、高効率を選びます。次にビデオ撮影を開き、日常のクリップ用に 1080p/30 fps を選びます。iOS は各項目の横に 1 分あたりのサイズを表示します。4K はそれに値する場面のために取っておきましょう。',
          },
          {
            name: '最も大きい動画を見つける',
            text: '設定 > 一般 > iPhoneストレージ に進み、写真を開きます。ここに最も大きい動画がサイズ順に一覧表示されます。写真アプリ自体にはできないことです。',
          },
          {
            name: '不要になった画面収録を削除する',
            text: '写真 > アルバム > メディアタイプ で画面収録を開きます。通話、ゲーム、アプリのデモの収録は iPhone 内で最も大きいファイルであることが多く、残しておく価値はめったにありません。',
          },
          {
            name: '4K クリップを 1080p に圧縮する',
            text: '端末上で動く変換ツールを使います。DiskMop は圧縮できる動画（4K かつ 40 MB 超）を一覧表示し、iPhone 上で 1080p に変換して、元の動画を置き換える前に iOS の確認を求めます。テストでは 94 MB の 4K クリップが約 11 MB になりました。',
          },
          {
            name: '再生しない Live Photo を静止画にする',
            text: 'Live Photo は静止画の横に 3 秒の動画を保持しています。DiskMop はこれらをまとめて通常の写真に変換できます。写真アプリでは 複製 > 静止画として複製 で 1 枚ずつ行い、そのあと元の写真を削除する必要があります。',
          },
          {
            name: '「最近削除した項目」を空にする',
            text: '置き換えた動画と削除した動画は 写真 > アルバム > 最近削除した項目 に 30 日間残ります。開いて「選択」、続けて「すべて削除」をタップすると、すぐに容量が戻ります。',
          },
        ],
      },
      sections: [
        {
          title: 'iPhone の動画は実際どれくらい大きいか',
          content: [
            '写真アプリはファイルサイズを一切表示しないため、ストレージに占める動画の割合はほぼ誰にとっても驚きです。しかし iOS は数値を公開しています。設定 > カメラ > ビデオ撮影 を開くと、各解像度の横に 1 分あたりの目安が表示されます。初期設定の 1080p/30 fps では 1 分で約 60 MB。多くの人が一度オンにしたまま忘れている 4K/60 fps では、1 分で約 400 MB です。',
            'これは子どもの学芸会のクリップ 1 本で、普通の写真およそ 200 枚分に相当します。そうしたクリップが 20 本ある旅行なら 8 GB。多くの人の写真コレクション全体より大きい量です。下の表は Apple の目安をまとめたものです。フォーマットにあるコーデック設定も重要で、互換性優先（H.264）は高効率（HEVC）の約 2 倍の大きさのファイルを作ります。',
            '写真アプリはサイズ順に並べ替えられないため、ギガバイトがどこにあるかを見る最速の方法は、最も大きい動画を一覧表示する 設定 > 一般 > iPhoneストレージ > 写真 です。DiskMop は同じ情報をライブラリ全体の種類別・年別の内訳として表示するので、重さの原因が動画なのか、画面収録なのか、Live Photo なのか、普通の写真なのかが一目で分かります。',
          ],
        },
        {
          title: '画面収録: 撮ったことを忘れている最大のファイル',
          content: [
            '画面収録は最も簡単に効果が出る項目です。画面の最大解像度とフレームレートで記録されるため、ゲーム、ビデオ通話、アプリの操作説明は 1 分で 100〜200 MB になり、しかもその多くは誰かに一度見せるために作ったものです。iOS はこれらを通常のライブラリに動画と混ぜて保存し、使い捨てだと分かる印は何もありません。',
            '写真 > アルバム > メディアタイプ > 画面収録 に一か所にまとまっています。ときどき見直して、役目を終えたものを削除しましょう。頻繁に収録するなら、必要な範囲だけを収録するか、収録直後にクリップをトリミングすることを検討してください。切り落とした秒数は完全に消えます。',
            'DiskMop は iOS が付ける目印を使って画面収録を独立したカテゴリーとして表示するので、旅行の動画の中に埋もれることがありません。さらに圧縮リストからも除外します。削除するつもりの収録を先に小さくする必要はないからです。',
          ],
        },
        {
          title: '既存の動画の圧縮: 失うものと残るもの',
          content: [
            '4K クリップを 1080p に変換すると、3840 × 2160 ピクセルのうち 1920 × 1080 が残ります。スマートフォンの画面では通常の視聴距離で見分けがつきません。ビットレートは解像度に連動するので、ファイルは 80〜90% 小さくなります。私たちの計測では、iPhone 上で変換した 94 MB の 4K クリップが約 11 MB になり、動画 1 本で 83 MB の節約でした。',
            '残るもの: 撮影日、位置情報、長さ、そして最近の変換ツールなら HEVC コーデックと HDR 情報。失うもの: あとでフレームを切り出したり、4K テレビで再生したりする場合にだけ意味のある余分なディテール。つまり圧縮は日常のクリップには正しく、いつか編集するかもしれない結婚式の 1 本には向きません。',
            '処理は一方通行です。DiskMop はまず小さいコピーを作り、次に iOS に元の動画の削除を依頼し、iOS は何かが消える前に独自の確認画面を表示します。元の動画は 30 日間「最近削除した項目」に残り、これが唯一の安全網です。まとめて圧縮する前に、かけがえのない動画のフルサイズのコピーを iCloud かパソコンに保存しておいてください。',
          ],
        },
        {
          title: 'Live Photo: 隠れた 3 秒の動画',
          content: [
            'Live Photo はすべて 2 つのファイルでできています。静止画と、サムネイルを押し込むと再生される短い動画です。動画によって写真のサイズはほぼ 2 倍になり、Live が初期設定でオンのままの iPhone では、普通のスナップ写真のライブラリが知らないうちに小さな動画のライブラリに変わります。再生されるものはごくわずかです。',
            '写真アプリでは写真ごとに効果をオフにできますが（編集 > Live > オフ）、それは動画を隠すだけでファイルは残ります。取り除くには、共有メニューから 複製 > 静止画として複製 を選び、元の写真を削除する作業を 1 枚ずつ行います。1000 枚ではとても現実的ではありません。',
            'DiskMop は Live Photo をまとめて静止画にします。選択した各写真の静止画コピーを書き出し、iOS に置き換えの確認を求め、実際に空いた容量を計測します。ろうそくを吹き消す子どもなど動きが大事な写真は、何も事前に選択されていないので簡単に外せます。今後の写真については、カメラアプリの Live アイコンをタップしてオフにし、設定 > カメラ > 設定を保持 でオフのまま維持してください。',
          ],
        },
      ],
      dataTable: {
        caption: '設定 > カメラ > ビデオ撮影 で iOS が示す 1 分あたりの動画サイズ',
        columns: ['設定', '1 分あたりのサイズ'],
        rows: [
          ['720p/30 fps', '約 40 MB'],
          ['1080p/30 fps', '約 60 MB'],
          ['1080p/60 fps', '約 90 MB'],
          ['4K/24 fps', '約 135 MB'],
          ['4K/30 fps', '約 170 MB'],
          ['4K/60 fps', '約 400 MB'],
          ['画面収録（全画面）', '100〜200 MB'],
        ],
      },
      faq: [
        {
          question: '4K 動画は iPhone で見るときれいですか。',
          answer:
            'iPhone 上では違いません。画面のピクセル数は 4K のフレームより少ないため、通常の視聴距離では 1080p と 4K は同じに見えます。4K が役立つのは、編集でフレームを切り出すときや 4K テレビで再生するときだけです。',
        },
        {
          question: '動画を圧縮すると画質は落ちますか。',
          answer:
            'はい、わずかに落ちます。4K から 1080p への変換ではピクセルの 4 分の 1 と、スマートフォンの画面で見える細部の大半が残り、ファイルは 80〜90% 小さくなります。編集したり大きな画面で見せたりする可能性のあるものは元データを残してください。',
        },
        {
          question: '圧縮したあとに元の動画を戻せますか。',
          answer:
            '30 日以内なら「最近削除した項目」から、あるいはバックアップからのみ戻せます。DiskMop は iOS が確認を求めたあとに元の動画を置き換えるので、圧縮は取り消せないものと考え、かけがえのない動画は先に別の場所へコピーしておいてください。',
        },
        {
          question: '写真アプリはなぜ動画のサイズを表示しないのですか。',
          answer:
            '単にファイルサイズを表示しない仕様です。設定 > 一般 > iPhoneストレージ > 写真 には最も大きい動画が一覧表示され、DiskMop のストレージ内訳はライブラリのうち動画、画面収録、Live Photo、写真がそれぞれどれだけを占めるかを示します。',
        },
      ],
      verdict: [
        'iPhone のストレージが消えていく先は動画で、いくつかの意図的な手順で対処できます。必要がなければ HEVC の 1080p で撮影し、役目を終えた画面収録は削除し、残す 4K クリップは 1080p に変換し、再生しない Live Photo は静止画にする。そして「最近削除した項目」を空にします。',
        '重い作業は DiskMop が iPhone 上で引き受けます。圧縮できる動画と画面収録を見つけ、iOS 自身の確認を挟んでまとめて変換・静止画化し、推定値ではなく実測した空き容量を報告します。スキャンは無料で、フル版は買い切りです。',
      ],
      ctaText: 'App Store で iPhone 版 DiskMop を入手',
    },
  },
};
