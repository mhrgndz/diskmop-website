import type { Article } from '../types';

export const iphoneStorageFull: Article = {
  slug: 'iphone-storage-full',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-17',
  readingTime: 8,
  content: {
    tr: {
      title: 'iPhone Depolama Alanı Dolu mu? Fotoğraf Silmek Neden Yer Açmadı (ve Ne Açar)',
      metaDescription:
        'iPhone\'da fotoğraf sildiniz ama yer açılmadı mı? Silinenler 30 gün Son Silinenler\'de bekler, iCloud\'un optimize ayarı gerisini gizler. Asıl yer açan adımlar.',
      subtitle: 'Son Silinenler, iCloud optimizasyonu ve Sistem Verileri; efsanesiz anlatım',
      intro: [
        'Kısa cevap: iPhone\'da fotoğraf silmek 30 gün boyunca hiç yer açmaz, çünkü silinen her fotoğraf ve video önce Son Silinenler albümüne taşınır. Bu albümü boşaltın, alan anında görünür. Hâlâ görünmüyorsa iCloud\'un "iPhone Depolama Alanını Optimize Et" ayarı açıktır; yani tam boyutlu fotoğraflar zaten telefonda hiç değildi ve asıl yük başka yerdedir: videolar, ekran kayıtları, Mesajlar ekleri ya da Sistem Verileri.',
        'Bu rehber, iPhone\'un depolama alanını gerçekte neyin kapladığını, en az pişmanlıkla en çok yer açan sırayla anlatıyor. Fotoğraf ve video boyutları için Apple\'ın kendi rakamlarını kullanıyor, silmeyi anlamsız gibi gösteren iki ayarı açıklıyor ve bugün güvenle kaldırılabilecek öğeleri gösteriyor.',
      ],
      keyTakeaways: [
        'Silinen fotoğraf ve videolar 30 gün boyunca Fotoğraflar > Albümler > Son Silinenler\'de kalır ve albümü boşaltana kadar depolama alanından sayılmaya devam eder.',
        'iCloud Fotoğraflar "iPhone Depolama Alanını Optimize Et" ayarındayken telefon yalnızca küçük önizlemeleri tutar; bunları silmek yerelde çok az yer açar ve fotoğrafı tüm cihazlardan kaldırır.',
        'Bir dakikalık 4K/60 video yaklaşık 400 MB\'tır, yani kabaca 200 sıradan fotoğraf kadar; videolar ve ekran kayıtları genellikle fotoğraflardan daha ağır basar.',
        'Sistem Verileri (eski adıyla "Diğer"), iOS\'in kendi yönettiği önbellek ve günlüklerdir; temizlemek için bir düğme yoktur, ama yeniden başlatmak, Safari verilerini silmek ve kullanılmayan uygulamaları kaldırıp verilerini korumak onu küçültür.',
        'Mesajlar varsayılan olarak her eki sonsuza dek saklar; Ayarlar > Mesajlar > Mesajları Sakla > 30 Gün, uzun süredir kullanılan bir telefonda gigabaytlarca yer açabilir.',
        'Bir temizleyici uygulama Son Silinenler\'i atlayamaz; fotoğraf sildikten hemen sonra yer açtığını iddia eden her şey size bir ölçüm değil, tahmin gösteriyordur.',
      ],
      dataTable: {
        caption: 'Yaygın iPhone medyasının yaklaşık boyutu (video için Apple\'ın tahminleri, fotoğraf için tipik değerler)',
        columns: ['Öğe', 'Tipik boyut'],
        rows: [
          ['12 MP fotoğraf (HEIF)', '1,5–2,5 MB'],
          ['48 MP ProRAW fotoğraf', '50–80 MB'],
          ['Live Photo', 'Fotoğraf + yaklaşık 3 MB video'],
          ['Ekran görüntüsü (PNG)', '2–8 MB'],
          ['1 dakika video, 30 fps\'de 1080p', 'Yaklaşık 60 MB'],
          ['1 dakika video, 30 fps\'de 4K', 'Yaklaşık 170 MB'],
          ['1 dakika video, 60 fps\'de 4K', 'Yaklaşık 400 MB'],
          ['1 dakika ekran kaydı', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Fotoğraf silmek işe yaramadığında iPhone\'da yer açma',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Yeri neyin kapladığını görün',
            text: 'Ayarlar > Genel > iPhone Depolama Alanı yolunu açın. Çubuğun hesaplamayı bitirmesini bekleyin, sonra listeyi yukarıdan aşağıya okuyun: boyuta göre sıralıdır. İlk üç sırada genellikle Fotoğraflar, Mesajlar ve Sistem Verileri bulunur.',
          },
          {
            name: 'Son Silinenler\'i boşaltın',
            text: 'Fotoğraflar\'da Albümler\'e gidin, Yardımcı Programlar\'a kadar kaydırın ve Son Silinenler\'i açın. Face ID ile kilidini açın, Seç\'e, ardından Tümünü Sil\'e dokunun. Daha önce açtığınız alanı gerçekten geri veren adım budur.',
          },
          {
            name: 'iCloud Fotoğraflar ayarını kontrol edin',
            text: 'Ayarlar > adınız > iCloud > Fotoğraflar yolunu izleyin. "iPhone Depolama Alanını Optimize Et" seçiliyse tam boyutlu orijinallerin çoğu iCloud\'dadır ve onları telefondan silmek yerel depolamayı neredeyse hiç değiştirmez; asıl açtığınız alan iCloud\'dakidir.',
          },
          {
            name: 'En büyük videoları gözden geçirin',
            text: 'Yeniden Ayarlar > Genel > iPhone Depolama Alanı\'na dönüp Fotoğraflar\'ı açın. iOS en büyük kişisel videolarınızı burada listeler. Ekran kayıtları ve 4K klipler genellikle en üsttedir; artık ihtiyaç duymadıklarınızı silin.',
          },
          {
            name: 'Mesajlar eklerini azaltın',
            text: 'iPhone Depolama Alanı\'nda Mesajlar\'ı açın ve Büyük Ekleri Gözden Geçir ile sohbetlerde gönderilmiş eski video ve fotoğrafları silin. Ardından Ayarlar > Mesajlar > Mesajları Sakla ayarını 30 Gün ya da 1 Yıl yapın.',
          },
          {
            name: 'Nadiren açtığınız uygulamaları kaldırıp verilerini koruyun',
            text: 'iPhone Depolama Alanı listesinde aylardır kullanmadığınız büyük bir uygulamaya dokunun ve Uygulamayı Kaldır (Verileri Koru) seçeneğini seçin. Uygulama kaldırılır ama belgeleri kalır ve tek dokunuşla yeniden yüklenir.',
          },
        ],
      },
      sections: [
        {
          title: 'iPhone\'da Alan Gerçekte Nereye Gidiyor',
          content: [
            'Ayarlar > Genel > iPhone Depolama Alanı, depolamanızın tek dürüst haritasıdır ve bir şey silmeden önce dikkatle okunmaya değer. Liste boyuta göre sıralıdır ve çoğu telefonda üç satır baskındır: Fotoğraflar, Mesajlar ve Sistem Verileri. Video ya da ses akışı yapan uygulamalar (YouTube, Netflix, Spotify, podcast oynatıcılar) genellikle bunları izler, çünkü çevrimdışı indirmeleri ve önbellekleri her biri birkaç gigabayta ulaşabilir.',
            'Fotoğraflar\'ın içindeki sürpriz genellikle fotoğraf ile video arasındaki orandır. Apple\'ın HEIF biçiminde kaydedilmiş 12 megapiksellik bir fotoğraf yaklaşık 1,5–2,5 MB tutar. Ayarlar > Kamera > Video Kaydet ekranında iOS\'in gösterdiği tahminlere göre, saniyede 60 karelik 4K videonun tek bir dakikası yaklaşık 400 MB\'tır. Dolayısıyla tek bir aile videosu iki yüz fotoğraf kadar, bir telefon görüşmesinin ya da oyun oturumunun ekran kaydı ise daha da fazla yer kaplayabilir.',
            'Aşağıdaki tablo Apple\'ın kendi tahminlerini kullanıyor. Çıkarılacak sonuç şu: birkaç yüz sıradan fotoğrafı silmek çubuğu nadiren değiştirirken, beş video ile iki ekran kaydını silmek birkaç gigabayt açabilir.',
          ],
        },
        {
          title: 'Fotoğraf Silmek Neden 30 Gün Boyunca Hiçbir Şeyi Değiştirmez',
          content: [
            'Fotoğraflar uygulamasında bir fotoğrafı ya da videoyu sildiğinizde iOS onu kaldırmaz. Yanlışlıkla yapılan bir silme geri alınabilsin diye onu 30 gün kalacağı Son Silinenler albümüne taşır. Bu 30 gün boyunca dosya flash depolamada var olmaya devam eder ve iOS onu saymayı sürdürür. Büyük bir temizlik seansından sonra depolama çubuğunun aynı görünmesinin nedeni budur.',
            'Alanı geri almak için Fotoğraflar > Albümler\'i açın, aşağıya Yardımcı Programlar\'a kaydırın ve Son Silinenler\'i açın. iOS 16\'dan beri bu albüm Face ID ya da parolanızla kilitlidir. Seç\'e, ardından Tümünü Sil\'e dokunun ve onaylayın. Değişiklik anındadır: Ayarlar > Genel > iPhone Depolama Alanı\'na dönün, çubuk birkaç saniye içinde güncellenir.',
            'Bu kural, temizleyici uygulamalar dahil Apple\'ın fotoğraf arşivi üzerinden fotoğraf silen her uygulama için geçerlidir. Örneğin iPhone için DiskMop her silme işleminden sonra açılan alan rakamı göstermek yerine size bunu söyler: silmeden hemen sonra ölçebileceği sayı sıfır olurdu ve uydurma bir sayı göstermez. Asıl kazanç Son Silinenler\'i boşalttığınızda gelir ve uygulama sizi tam o noktaya yönlendirir.',
          ],
        },
        {
          title: 'iCloud Fotoğraflar ve "iPhone Depolama Alanını Optimize Et"',
          content: [
            'iCloud Fotoğraflar açıksa Ayarlar > adınız > iCloud > Fotoğraflar iki mod sunar. "Orijinalleri İndir ve Sakla" her tam boyutlu fotoğrafı ve videoyu telefonda tutar. "iPhone Depolama Alanını Optimize Et" ise tam boyutlu orijinalleri iCloud\'da saklar ve alan daralınca telefonda yalnızca küçük, ekran boyutunda sürümleri bırakır. Çoğu kişi bunu seçtiğini hatırlamadan ikinci moddadır.',
            'Optimize modunda fotoğrafları telefondan silmek yerelde neredeyse hiç yer açmaz, çünkü yerel kopyalar zaten küçücüktür. Gerçekte yaptığınız şey, fotoğrafı 30 günlük Son Silinenler süresinin ardından iCloud\'dan, dolayısıyla iPad\'inizden, Mac\'inizden ve oturum açılmış diğer tüm cihazlardan silmektir. Kopyalar ve bulanık kareler için bunda sakınca yoktur, ama büyük bir temizlikten önce bilinmeye değer.',
            'Ters tuzak, neredeyse dolu bir telefonda "Orijinalleri İndir ve Sakla" seçeneğine geçmektir: iOS her orijinali indirmeye çalışır ve telefonu tamamen doldurabilir. Bir temizleyici uygulama bir fotoğrafın gerçek boyutunu okuyamıyorsa nedeni genellikle budur. DiskMop birkaç orijinali örnekleyerek Optimize modunun açık olduğunu saptar ve sizi baştan uyarır; böylece ana ekranındaki tahmin, tutamayacağı bir söz olmaz.',
          ],
        },
        {
          title: 'Sistem Verileri, Mesajlar ve Uygulama Önbellekleri',
          content: [
            'Eski iOS sürümlerinde "Diğer" olarak adlandırılan Sistem Verileri, iOS\'in bir uygulamaya atfetmediği her şeydir: Safari\'nin önbelleği, günlükler, Siri sesleri, indirilmiş fontlar, Spotlight dizinleri ve uygulamaların güncellenirken oluşturduğu geçici dosyalar. Bir yıldır kullanılan bir telefonda 10–20 GB\'a ulaşması normaldir. Temizlemek için tek bir düğme yoktur, ama üç şey onu güvenilir biçimde küçültür: telefonu yeniden başlatmak, Safari verilerini silmek (Ayarlar > Safari > Geçmişi ve Web Sitesi Verilerini Sil) ve artık kullanmadığınız uygulamaları kaldırıp verilerini korumak.',
            'Mesajlar sessiz devdir. iOS varsayılan olarak her mesajı ve her eki sonsuza dek saklar; bu yüzden üç yıldır kullanılan bir telefon grup sohbetlerinden kalma 5–10 GB eski fotoğraf ve video taşıyabilir. Ayarlar > Genel > iPhone Depolama Alanı > Mesajlar altındaki Büyük Ekleri Gözden Geçir bunları boyuta göre sıralı gösterir. Ayarlar > Mesajlar > Mesajları Sakla > 30 Gün ise yığının yeniden büyümesini önler.',
            'Son olarak, önce silinmeye değer fotoğraflar nadiren elle seçeceğiniz fotoğraflardır: aynı anın seri çekimleri ve tekrarları, aylar önceki ekran görüntüleri, ekran kayıtları ve üç saniyelik videosunu hiç izlemediğiniz Live Photo\'lar. DiskMop arşivi telefonun üzerinde tarar, neredeyse aynı kareleri ana göre gruplar, ekran görüntülerini fiş ve belgelerden ayırır, ekran kayıtlarını ve sıkıştırılabilir 4K videoları listeler. Hiçbir şey önceden seçili değildir; gidecekleri siz işaretlersiniz ve ücretsiz sürüm, sonuçların paraya değip değmediğini görmeniz için üç öğe silmenize izin verir.',
          ],
        },
      ],
      faq: [
        {
          question: 'iPhone\'da fotoğraf silmek yeri hemen açar mı?',
          answer:
            'Hayır. Silinen fotoğraf ve videolar 30 gün boyunca Son Silinenler\'e taşınır ve depolama alanından sayılmaya devam eder. Alanı hemen açmak için Fotoğraflar > Albümler > Son Silinenler\'i açın, Seç\'e, ardından Tümünü Sil\'e dokunun.',
        },
        {
          question: 'iPhone\'umda fotoğraf silersem iCloud\'dan da silinir mi?',
          answer:
            'iCloud Fotoğraflar açıksa evet. Arşiv eşzamanlı olduğu için telefonda silinen bir fotoğraf, 30 günlük Son Silinenler süresinin ardından iCloud\'dan ve diğer cihazlarınızdan da kaybolur. Bulut kopyasını korumak istiyorsanız önce iCloud Fotoğraflar\'ı kapatın.',
        },
        {
          question: 'iPhone\'umda Sistem Verileri neden 20 GB?',
          answer:
            'Sistem Verileri, iOS\'in kendi yönettiği önbellek, günlük ve geçici dosyalardır; bir yıl ya da daha uzun süredir kullanılan bir telefonda 10–20 GB normaldir. Yeniden başlatmak, Safari geçmişini ve web sitesi verilerini silmek ve kullanılmayan uygulamaları kaldırıp verilerini korumak onu küçültmenin güvenilir yollarıdır.',
        },
        {
          question: 'Bir iPhone temizleyici uygulamasının fotoğraflarımı yüklemesi gerekir mi?',
          answer:
            'Gerekmemeli. Kopyaları, bulanık kareleri ya da ekran görüntülerini bulmak Apple\'ın kendi çerçeveleriyle tamamen telefonun üzerinde yapılabilir. DiskMop sunucusuz ve hesapsız çalışır; App Store gizlilik etiketinde Veri Toplanmıyor yazar.',
        },
        {
          question: 'Son Silinenler\'i boşaltmak güvenli mi?',
          answer:
            'İçindekileri gerçekten silmek istediğiniz sürece evet. Tümünü Sil\'e dokunduğunuz anda albümdeki her şey kalıcı olarak gider ve yedek dışında başka bir kurtarma yolu yoktur.',
        },
      ],
      verdict: [
        'Temizlikten sonra dolu kalan bir iPhone bozuk değildir; çoğu kişinin hiç görmediği iki kurala uyuyordur. Silinen fotoğraflar Son Silinenler\'de 30 gün bekler ve Optimize modunda orijinaller zaten telefonda hiç olmamıştır. Albümü boşaltın, Ayarlar > Genel > iPhone Depolama Alanı\'nı yukarıdan aşağıya okuyun ve sıradan fotoğraflardan önce videoların, ekran kayıtlarının ve Mesajlar eklerinin peşine düşün.',
        'iPhone için DiskMop bu kurallara karşı değil, onların etrafında kurulmuştur. Telefonun üzerinde tarar, benzer kareleri gruplar, ekran görüntülerini belgelerden ayırır, ekran kayıtlarını ve büyük videoları listeler ve her silme işleminden sonra alanın Son Silinenler boşaltılınca geri geleceğini dürüstçe söyler. Tarama ücretsizdir, üç silme ücretsizdir ve tam sürüm aboneliksiz, tek seferlik bir satın almadır.',
      ],
      ctaText: 'DiskMop\'u App Store\'dan indirin',
    },
    en: {
      title: 'iPhone Storage Full? Why Deleting Photos Didn\'t Free Any Space (and What Does)',
      metaDescription:
        'Deleted photos but iPhone storage didn\'t change? They wait 30 days in Recently Deleted, and iCloud Optimize hides the rest. Here is what actually frees space.',
      subtitle: 'Recently Deleted, iCloud Optimize and System Data, explained without the myths',
      intro: [
        'Short answer: deleting photos on an iPhone frees nothing for 30 days, because every deleted photo and video moves to the Recently Deleted album first. Empty that album and the space appears immediately. If it still does not, iCloud\'s "Optimize iPhone Storage" is on, which means the full-size photos were never on the phone to begin with, and the real weight is somewhere else: videos, screen recordings, Messages attachments or System Data.',
        'This guide walks through what actually occupies an iPhone\'s storage, in the order that frees the most space with the least regret. It uses Apple\'s own figures for photo and video sizes, explains the two settings that make deleting feel pointless, and shows which items are safe to remove today.',
      ],
      keyTakeaways: [
        'Deleted photos and videos stay in Photos > Albums > Recently Deleted for 30 days and still count toward storage until you empty the album.',
        'With iCloud Photos set to "Optimize iPhone Storage", the phone keeps only small previews; deleting them frees very little locally and removes the photo from every device.',
        'One minute of 4K/60 video is about 400 MB, roughly the size of 200 ordinary photos; videos and screen recordings usually outweigh photos.',
        'System Data (formerly "Other") is caches and logs that iOS manages itself; there is no button to clear it, but a restart, clearing Safari data and offloading unused apps shrink it.',
        'Messages keeps every attachment forever by default; Settings > Messages > Keep Messages > 30 Days can free gigabytes on a long-used phone.',
        'A cleaner app cannot bypass Recently Deleted; anything that claims to free space instantly after deleting photos is showing you an estimate, not a measurement.',
      ],
      dataTable: {
        caption: 'Approximate size of common iPhone media (Apple\'s estimates for video, typical values for photos)',
        columns: ['Item', 'Typical size'],
        rows: [
          ['12 MP photo (HEIF)', '1.5–2.5 MB'],
          ['48 MP ProRAW photo', '50–80 MB'],
          ['Live Photo', 'Photo + about 3 MB of video'],
          ['Screenshot (PNG)', '2–8 MB'],
          ['1 minute of video, 1080p at 30 fps', 'About 60 MB'],
          ['1 minute of video, 4K at 30 fps', 'About 170 MB'],
          ['1 minute of video, 4K at 60 fps', 'About 400 MB'],
          ['1 minute of screen recording', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Free up space on an iPhone when deleting photos did nothing',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'See what is using the space',
            text: 'Open Settings > General > iPhone Storage. Wait for the bar to finish calculating, then read the list from the top: it is sorted by size. Photos, Messages and System Data are usually the first three.',
          },
          {
            name: 'Empty Recently Deleted',
            text: 'In Photos, go to Albums, scroll to Utilities and open Recently Deleted. Unlock it with Face ID, tap Select, then Delete All. This is the step that actually returns the space you freed earlier.',
          },
          {
            name: 'Check the iCloud Photos setting',
            text: 'Go to Settings > your name > iCloud > Photos. If "Optimize iPhone Storage" is selected, most full-size originals live in iCloud and deleting them from the phone barely changes local storage; you are mainly freeing iCloud space.',
          },
          {
            name: 'Review the largest videos',
            text: 'Back in Settings > General > iPhone Storage, open Photos. iOS lists your largest personal videos there. Screen recordings and 4K clips are typically at the top; delete the ones you no longer need.',
          },
          {
            name: 'Trim Messages attachments',
            text: 'In iPhone Storage, open Messages and use Review Large Attachments to delete old videos and photos sent in chats. Then set Settings > Messages > Keep Messages to 30 Days or 1 Year.',
          },
          {
            name: 'Offload apps you rarely open',
            text: 'In the iPhone Storage list, tap a large app you have not used in months and choose Offload App. The app is removed but its documents stay, and it reinstalls with one tap.',
          },
        ],
      },
      sections: [
        {
          title: 'Where the Space Really Goes on an iPhone',
          content: [
            'Settings > General > iPhone Storage is the only honest map of your storage, and it is worth reading carefully before deleting anything. The list is sorted by size, and on most phones three lines dominate: Photos, Messages and System Data. Apps that stream video or audio (YouTube, Netflix, Spotify, podcast players) often follow, because their offline downloads and caches can reach several gigabytes each.',
            'Inside Photos, the surprise is usually the ratio between photos and videos. A 12-megapixel photo saved in Apple\'s HEIF format takes about 1.5 to 2.5 MB. A single minute of video at 4K and 60 frames per second takes about 400 MB, according to the estimates iOS shows in Settings > Camera > Record Video. One family video can therefore weigh as much as two hundred photos, and a screen recording of a phone call or a game session can weigh even more.',
            'The table below uses Apple\'s own estimates. The takeaway is that deleting a few hundred ordinary photos rarely changes the bar, while deleting five videos and two screen recordings can free a couple of gigabytes.',
          ],
        },
        {
          title: 'Why Deleting Photos Changes Nothing for 30 Days',
          content: [
            'When you delete a photo or video in the Photos app, iOS does not remove it. It moves it to the Recently Deleted album, where it stays for 30 days so that an accidental deletion can be undone. During those 30 days the file still exists on the flash storage, and iOS keeps counting it. This is why the storage bar looks identical after a big cleanup session.',
            'To reclaim the space, open Photos > Albums, scroll down to Utilities and open Recently Deleted. Since iOS 16 the album is locked behind Face ID or your passcode. Tap Select, then Delete All, and confirm. The change is immediate: go back to Settings > General > iPhone Storage and the bar updates within a few seconds.',
            'This applies to every app that deletes photos through Apple\'s photo library, including cleaner apps. DiskMop for iPhone, for example, tells you this after each deletion instead of showing a freed-space figure: the number it could measure right after deleting would be zero, and it does not invent one. The real gain arrives when you empty Recently Deleted, and the app links you to the exact spot.',
          ],
        },
        {
          title: 'iCloud Photos and "Optimize iPhone Storage"',
          content: [
            'If iCloud Photos is on, Settings > your name > iCloud > Photos offers two modes. "Download and Keep Originals" stores every full-size photo and video on the phone. "Optimize iPhone Storage" keeps full-size originals in iCloud and leaves only small, screen-sized versions on the phone when space gets tight. Most people are in the second mode without remembering choosing it.',
            'In Optimize mode, deleting photos from the phone frees almost nothing locally, because the local copies are already tiny. What you are really doing is deleting the photo from iCloud, and therefore from your iPad, Mac and every other signed-in device, after the 30-day Recently Deleted window. That is fine for duplicates and blurry shots, but it is worth knowing before a large cleanup.',
            'The reverse trap is switching to "Download and Keep Originals" on a phone that is nearly full: iOS will try to download every original and may fill the phone completely. If a cleaner app cannot read a photo\'s real size, that is usually why. DiskMop detects when Optimize mode is active by sampling a few originals and warns you up front, so the estimate on its main screen is not a promise it cannot keep.',
          ],
        },
        {
          title: 'System Data, Messages and App Caches',
          content: [
            'System Data, called "Other" on older versions of iOS, is everything iOS does not attribute to an app: Safari\'s cache, logs, Siri voices, downloaded fonts, spotlight indexes and the temporary files apps create while updating. It is normal for it to reach 10 to 20 GB on a phone that has been used for a year. There is no single button to clear it, but three things reliably shrink it: restarting the phone, clearing Safari data (Settings > Safari > Clear History and Website Data) and offloading apps you no longer use.',
            'Messages is the quiet giant. By default iOS keeps every message and every attachment forever, so a phone that has been in use for three years can carry 5 to 10 GB of old photos and videos from group chats. In Settings > General > iPhone Storage > Messages, Review Large Attachments shows them sorted by size. Settings > Messages > Keep Messages > 30 Days prevents the pile from growing back.',
            'Finally, the photos worth removing first are rarely the ones you would pick by hand: bursts and retries of the same moment, screenshots from months ago, screen recordings, and Live Photos whose three-second video you never watch. DiskMop scans the library on the phone, groups near-identical shots by moment, separates screenshots from receipts and documents, and lists screen recordings and compressible 4K videos. Nothing is pre-selected; you tick what goes, and the free version lets you delete three items to see whether the results are worth paying for.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does deleting photos on iPhone free up space immediately?',
          answer:
            'No. Deleted photos and videos move to Recently Deleted for 30 days and still count toward storage. Open Photos > Albums > Recently Deleted, tap Select, then Delete All to free the space right away.',
        },
        {
          question: 'Will deleting photos on my iPhone delete them from iCloud?',
          answer:
            'Yes, if iCloud Photos is on. The library is synchronized, so a photo deleted on the phone disappears from iCloud and from your other devices after the 30-day Recently Deleted period. Turn iCloud Photos off first if you want to keep the cloud copy.',
        },
        {
          question: 'Why is System Data 20 GB on my iPhone?',
          answer:
            'System Data is caches, logs and temporary files that iOS manages itself, and 10 to 20 GB is normal on a phone used for a year or more. Restarting, clearing Safari history and website data, and offloading unused apps are the reliable ways to shrink it.',
        },
        {
          question: 'Does an iPhone cleaner app need to upload my photos?',
          answer:
            'It should not. Finding duplicates, blurry shots or screenshots can be done entirely on the phone with Apple\'s own frameworks. DiskMop works without a server or an account and its App Store privacy label says Data Not Collected.',
        },
        {
          question: 'Is it safe to empty Recently Deleted?',
          answer:
            'Yes, as long as you meant to delete what is in it. Everything in the album is gone permanently once you tap Delete All, and there is no further recovery except from a backup.',
        },
      ],
      verdict: [
        'An iPhone that stays full after a cleanup is not broken; it is following two rules most people never see. Deleted photos wait 30 days in Recently Deleted, and in Optimize mode the originals were never on the phone. Empty the album, read Settings > General > iPhone Storage from the top, and go after videos, screen recordings and Messages attachments before ordinary photos.',
        'DiskMop for iPhone is built around those rules rather than against them. It scans on the phone, groups similar shots, separates screenshots from documents, lists screen recordings and large videos, and after each deletion says honestly that the space returns when Recently Deleted is emptied. Scanning is free, three deletions are free, and the full version is a one-time purchase with no subscription.',
      ],
      ctaText: 'Get DiskMop for iPhone on the App Store',
    },
    de: {
      title: 'iPhone-Speicher voll? Warum das Löschen von Fotos nichts gebracht hat (und was hilft)',
      metaDescription:
        'Fotos gelöscht, aber der iPhone-Speicher bleibt voll? Sie liegen 30 Tage in "Zuletzt gelöscht", den Rest verbirgt die iCloud-Optimierung. Was wirklich hilft.',
      subtitle: 'Zuletzt gelöscht, iCloud-Optimierung und Systemdaten, erklärt ohne Mythen',
      intro: [
        'Kurze Antwort: Das Löschen von Fotos gibt auf einem iPhone 30 Tage lang keinen Platz frei, weil jedes gelöschte Foto und Video zuerst ins Album "Zuletzt gelöscht" wandert. Leeren Sie dieses Album, und der Platz erscheint sofort. Tut er das immer noch nicht, ist "iPhone-Speicher optimieren" in iCloud aktiv, das heißt, die Fotos in voller Größe waren nie auf dem Telefon, und das eigentliche Gewicht liegt woanders: bei Videos, Bildschirmaufnahmen, Anhängen in Nachrichten oder den Systemdaten.',
        'Dieser Leitfaden geht durch, was den Speicher eines iPhone tatsächlich belegt, und zwar in der Reihenfolge, die mit dem geringsten Bedauern den meisten Platz freigibt. Er verwendet Apples eigene Zahlen für Foto- und Videogrößen, erklärt die beiden Einstellungen, die das Löschen sinnlos erscheinen lassen, und zeigt, welche Elemente sich heute gefahrlos entfernen lassen.',
      ],
      keyTakeaways: [
        'Gelöschte Fotos und Videos bleiben 30 Tage in Fotos > Alben > Zuletzt gelöscht und zählen weiter zum Speicher, bis Sie das Album leeren.',
        'Steht iCloud-Fotos auf "iPhone-Speicher optimieren", behält das Telefon nur kleine Vorschauen; sie zu löschen gibt lokal kaum Platz frei und entfernt das Foto von allen Geräten.',
        'Eine Minute 4K/60-Video sind rund 400 MB, etwa so viel wie 200 gewöhnliche Fotos; Videos und Bildschirmaufnahmen wiegen meist schwerer als Fotos.',
        'Systemdaten (früher "Andere") sind Caches und Protokolle, die iOS selbst verwaltet; es gibt keine Schaltfläche zum Leeren, aber ein Neustart, das Löschen der Safari-Daten und das Auslagern ungenutzter Apps verkleinern sie.',
        'Nachrichten behält standardmäßig jeden Anhang für immer; Einstellungen > Nachrichten > Nachrichten behalten > 30 Tage kann auf einem lange genutzten Telefon Gigabytes freigeben.',
        'Eine Reinigungs-App kann "Zuletzt gelöscht" nicht umgehen; alles, was direkt nach dem Löschen von Fotos sofort freien Platz verspricht, zeigt Ihnen eine Schätzung, keine Messung.',
      ],
      dataTable: {
        caption: 'Ungefähre Größe gängiger iPhone-Medien (Apples Schätzungen für Video, typische Werte für Fotos)',
        columns: ['Element', 'Typische Größe'],
        rows: [
          ['12-MP-Foto (HEIF)', '1,5–2,5 MB'],
          ['48-MP-ProRAW-Foto', '50–80 MB'],
          ['Live Photo', 'Foto + etwa 3 MB Video'],
          ['Screenshot (PNG)', '2–8 MB'],
          ['1 Minute Video, 1080p bei 30 fps', 'Etwa 60 MB'],
          ['1 Minute Video, 4K bei 30 fps', 'Etwa 170 MB'],
          ['1 Minute Video, 4K bei 60 fps', 'Etwa 400 MB'],
          ['1 Minute Bildschirmaufnahme', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Speicherplatz auf dem iPhone freigeben, wenn das Löschen von Fotos nichts gebracht hat',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Sehen, was den Platz belegt',
            text: 'Öffnen Sie Einstellungen > Allgemein > iPhone-Speicher. Warten Sie, bis der Balken fertig berechnet ist, und lesen Sie die Liste dann von oben: Sie ist nach Größe sortiert. Fotos, Nachrichten und Systemdaten sind meist die ersten drei.',
          },
          {
            name: '"Zuletzt gelöscht" leeren',
            text: 'Gehen Sie in Fotos zu Alben, scrollen Sie zu Dienstprogramme und öffnen Sie "Zuletzt gelöscht". Entsperren Sie es mit Face ID, tippen Sie auf Auswählen und dann auf Alle löschen. Das ist der Schritt, der den zuvor freigegebenen Platz tatsächlich zurückbringt.',
          },
          {
            name: 'Die iCloud-Fotos-Einstellung prüfen',
            text: 'Gehen Sie zu Einstellungen > Ihr Name > iCloud > Fotos. Ist "iPhone-Speicher optimieren" ausgewählt, liegen die meisten Originale in voller Größe in iCloud, und sie vom Telefon zu löschen ändert am lokalen Speicher kaum etwas; Sie geben vor allem iCloud-Speicher frei.',
          },
          {
            name: 'Die größten Videos durchsehen',
            text: 'Öffnen Sie wieder unter Einstellungen > Allgemein > iPhone-Speicher den Eintrag Fotos. iOS listet dort Ihre größten persönlichen Videos auf. Bildschirmaufnahmen und 4K-Clips stehen typischerweise ganz oben; löschen Sie die, die Sie nicht mehr brauchen.',
          },
          {
            name: 'Anhänge in Nachrichten ausmisten',
            text: 'Öffnen Sie im iPhone-Speicher den Eintrag Nachrichten und nutzen Sie Große Anhänge überprüfen, um alte Videos und Fotos aus Chats zu löschen. Stellen Sie dann Einstellungen > Nachrichten > Nachrichten behalten auf 30 Tage oder 1 Jahr.',
          },
          {
            name: 'Selten geöffnete Apps auslagern',
            text: 'Tippen Sie in der Liste des iPhone-Speichers auf eine große App, die Sie seit Monaten nicht benutzt haben, und wählen Sie App auslagern. Die App wird entfernt, ihre Dokumente bleiben erhalten, und mit einem Tipp ist sie wieder installiert.',
          },
        ],
      },
      sections: [
        {
          title: 'Wohin der Platz auf einem iPhone wirklich geht',
          content: [
            'Einstellungen > Allgemein > iPhone-Speicher ist die einzige ehrliche Karte Ihres Speichers, und es lohnt sich, sie sorgfältig zu lesen, bevor Sie irgendetwas löschen. Die Liste ist nach Größe sortiert, und auf den meisten Telefonen dominieren drei Zeilen: Fotos, Nachrichten und Systemdaten. Apps, die Video oder Audio streamen (YouTube, Netflix, Spotify, Podcast-Player), folgen oft direkt danach, weil ihre Offline-Downloads und Caches jeweils mehrere Gigabyte erreichen können.',
            'Innerhalb von Fotos ist die Überraschung meist das Verhältnis zwischen Fotos und Videos. Ein 12-Megapixel-Foto im HEIF-Format von Apple belegt etwa 1,5 bis 2,5 MB. Eine einzige Minute Video in 4K mit 60 Bildern pro Sekunde belegt laut den Schätzungen, die iOS unter Einstellungen > Kamera > Video aufnehmen anzeigt, etwa 400 MB. Ein einziges Familienvideo kann also so viel wiegen wie zweihundert Fotos, und eine Bildschirmaufnahme eines Telefonats oder einer Spielsession noch mehr.',
            'Die Tabelle unten verwendet Apples eigene Schätzungen. Die Erkenntnis: Ein paar hundert gewöhnliche Fotos zu löschen verändert den Balken selten, während das Löschen von fünf Videos und zwei Bildschirmaufnahmen ein paar Gigabyte freigeben kann.',
          ],
        },
        {
          title: 'Warum das Löschen von Fotos 30 Tage lang nichts ändert',
          content: [
            'Wenn Sie in der Fotos-App ein Foto oder Video löschen, entfernt iOS es nicht. Es verschiebt es in das Album "Zuletzt gelöscht", wo es 30 Tage bleibt, damit ein versehentliches Löschen rückgängig gemacht werden kann. In diesen 30 Tagen existiert die Datei weiterhin im Flash-Speicher, und iOS zählt sie weiter mit. Deshalb sieht der Speicherbalken nach einer großen Aufräumaktion unverändert aus.',
            'Um den Platz zurückzuholen, öffnen Sie Fotos > Alben, scrollen nach unten zu Dienstprogramme und öffnen "Zuletzt gelöscht". Seit iOS 16 ist das Album hinter Face ID oder Ihrem Code gesperrt. Tippen Sie auf Auswählen, dann auf Alle löschen, und bestätigen Sie. Die Änderung ist sofort wirksam: Gehen Sie zurück zu Einstellungen > Allgemein > iPhone-Speicher, und der Balken aktualisiert sich innerhalb weniger Sekunden.',
            'Das gilt für jede App, die Fotos über Apples Fotomediathek löscht, Reinigungs-Apps eingeschlossen. DiskMop für iPhone zum Beispiel sagt Ihnen das nach jedem Löschen, statt eine Zahl für freigegebenen Platz anzuzeigen: Der Wert, den es direkt nach dem Löschen messen könnte, wäre null, und es erfindet keinen. Der echte Gewinn kommt, wenn Sie "Zuletzt gelöscht" leeren, und die App verlinkt Sie genau an diese Stelle.',
          ],
        },
        {
          title: 'iCloud-Fotos und "iPhone-Speicher optimieren"',
          content: [
            'Ist iCloud-Fotos aktiv, bietet Einstellungen > Ihr Name > iCloud > Fotos zwei Modi. "Laden und Originale behalten" speichert jedes Foto und Video in voller Größe auf dem Telefon. "iPhone-Speicher optimieren" behält die Originale in voller Größe in iCloud und lässt auf dem Telefon nur kleine, bildschirmgroße Versionen zurück, wenn der Platz knapp wird. Die meisten Menschen sind im zweiten Modus, ohne sich zu erinnern, ihn gewählt zu haben.',
            'Im Optimieren-Modus gibt das Löschen von Fotos auf dem Telefon lokal fast nichts frei, weil die lokalen Kopien ohnehin winzig sind. Was Sie in Wirklichkeit tun, ist, das Foto nach dem 30-Tage-Fenster von "Zuletzt gelöscht" aus iCloud zu löschen, und damit von Ihrem iPad, Mac und jedem anderen angemeldeten Gerät. Bei Duplikaten und verwackelten Aufnahmen ist das in Ordnung, aber vor einer großen Aufräumaktion sollte man es wissen.',
            'Die umgekehrte Falle ist, auf einem fast vollen Telefon zu "Laden und Originale behalten" zu wechseln: iOS versucht dann, jedes Original herunterzuladen, und kann das Telefon komplett füllen. Wenn eine Reinigungs-App die tatsächliche Größe eines Fotos nicht lesen kann, ist das meist der Grund. DiskMop erkennt anhand einer Stichprobe einiger Originale, ob der Optimieren-Modus aktiv ist, und warnt Sie vorab, damit die Schätzung auf dem Hauptbildschirm kein Versprechen ist, das die App nicht halten kann.',
          ],
        },
        {
          title: 'Systemdaten, Nachrichten und App-Caches',
          content: [
            'Systemdaten, in älteren iOS-Versionen "Andere" genannt, sind alles, was iOS keiner App zuordnet: der Safari-Cache, Protokolle, Siri-Stimmen, geladene Schriften, Spotlight-Indizes und die temporären Dateien, die Apps beim Aktualisieren anlegen. Auf einem ein Jahr lang genutzten Telefon sind 10 bis 20 GB normal. Es gibt keine einzelne Schaltfläche zum Leeren, aber drei Dinge verkleinern sie zuverlässig: das Telefon neu starten, die Safari-Daten löschen (Einstellungen > Safari > Verlauf und Websitedaten löschen) und Apps auslagern, die Sie nicht mehr nutzen.',
            'Nachrichten ist der stille Riese. Standardmäßig behält iOS jede Nachricht und jeden Anhang für immer, sodass ein drei Jahre lang genutztes Telefon 5 bis 10 GB alter Fotos und Videos aus Gruppenchats mit sich trägt. Unter Einstellungen > Allgemein > iPhone-Speicher > Nachrichten zeigt Große Anhänge überprüfen sie nach Größe sortiert. Einstellungen > Nachrichten > Nachrichten behalten > 30 Tage verhindert, dass der Haufen wieder anwächst.',
            'Und schließlich sind die Fotos, die zuerst weg sollten, selten die, die Sie von Hand auswählen würden: Serienaufnahmen und Wiederholungen desselben Moments, Screenshots von vor Monaten, Bildschirmaufnahmen und Live Photos, deren dreisekündiges Video Sie nie ansehen. DiskMop scannt die Mediathek auf dem Telefon, gruppiert nahezu identische Aufnahmen nach Moment, trennt Screenshots von Belegen und Dokumenten und listet Bildschirmaufnahmen sowie komprimierbare 4K-Videos auf. Nichts ist vorausgewählt; Sie haken ab, was gehen soll, und in der kostenlosen Version dürfen Sie drei Elemente löschen, um zu sehen, ob die Ergebnisse das Geld wert sind.',
          ],
        },
      ],
      faq: [
        {
          question: 'Gibt das Löschen von Fotos auf dem iPhone sofort Speicher frei?',
          answer:
            'Nein. Gelöschte Fotos und Videos wandern für 30 Tage nach "Zuletzt gelöscht" und zählen weiter zum Speicher. Öffnen Sie Fotos > Alben > Zuletzt gelöscht, tippen Sie auf Auswählen und dann auf Alle löschen, um den Platz sofort freizugeben.',
        },
        {
          question: 'Werden Fotos, die ich auf dem iPhone lösche, auch aus iCloud gelöscht?',
          answer:
            'Ja, wenn iCloud-Fotos aktiv ist. Die Mediathek wird synchronisiert, sodass ein auf dem Telefon gelöschtes Foto nach der 30-tägigen Frist von "Zuletzt gelöscht" aus iCloud und von Ihren anderen Geräten verschwindet. Schalten Sie iCloud-Fotos vorher aus, wenn Sie die Cloud-Kopie behalten möchten.',
        },
        {
          question: 'Warum sind die Systemdaten auf meinem iPhone 20 GB groß?',
          answer:
            'Systemdaten sind Caches, Protokolle und temporäre Dateien, die iOS selbst verwaltet, und 10 bis 20 GB sind auf einem ein Jahr oder länger genutzten Telefon normal. Ein Neustart, das Löschen von Safari-Verlauf und Websitedaten sowie das Auslagern ungenutzter Apps sind die zuverlässigen Wege, sie zu verkleinern.',
        },
        {
          question: 'Muss eine iPhone-Reinigungs-App meine Fotos hochladen?',
          answer:
            'Das sollte sie nicht. Duplikate, unscharfe Aufnahmen oder Screenshots lassen sich mit Apples eigenen Frameworks vollständig auf dem Telefon finden. DiskMop arbeitet ohne Server und ohne Konto, und sein Datenschutzlabel im App Store lautet "Daten werden nicht erfasst".',
        },
        {
          question: 'Ist es sicher, "Zuletzt gelöscht" zu leeren?',
          answer:
            'Ja, solange Sie den Inhalt wirklich löschen wollten. Alles in dem Album ist endgültig weg, sobald Sie auf Alle löschen tippen, und eine weitere Wiederherstellung gibt es nur aus einem Backup.',
        },
      ],
      verdict: [
        'Ein iPhone, das nach dem Aufräumen voll bleibt, ist nicht kaputt; es folgt zwei Regeln, die die meisten nie zu sehen bekommen. Gelöschte Fotos warten 30 Tage in "Zuletzt gelöscht", und im Optimieren-Modus waren die Originale nie auf dem Telefon. Leeren Sie das Album, lesen Sie Einstellungen > Allgemein > iPhone-Speicher von oben, und nehmen Sie sich Videos, Bildschirmaufnahmen und Anhänge in Nachrichten vor, bevor Sie an gewöhnliche Fotos gehen.',
        'DiskMop für iPhone ist um diese Regeln herum gebaut, nicht gegen sie. Es scannt auf dem Telefon, gruppiert ähnliche Aufnahmen, trennt Screenshots von Dokumenten, listet Bildschirmaufnahmen und große Videos auf und sagt nach jedem Löschen ehrlich, dass der Platz zurückkommt, sobald "Zuletzt gelöscht" geleert ist. Das Scannen ist kostenlos, drei Löschungen sind kostenlos, und die Vollversion ist ein einmaliger Kauf ohne Abo.',
      ],
      ctaText: 'DiskMop für iPhone im App Store laden',
    },
    fr: {
      title: 'Stockage iPhone plein ? Pourquoi supprimer des photos n\'a rien libéré (et que faire)',
      metaDescription:
        'Photos supprimées, stockage iPhone inchangé ? Elles restent 30 jours dans Supprimés récemment et l\'optimisation iCloud cache le reste. Ce qui libère vraiment.',
      subtitle: 'Supprimés récemment, optimisation iCloud et Données système, expliqués sans les mythes',
      intro: [
        'Réponse courte : supprimer des photos sur un iPhone ne libère rien pendant 30 jours, parce que chaque photo et vidéo supprimée passe d\'abord dans l\'album Supprimés récemment. Videz cet album et l\'espace apparaît immédiatement. S\'il n\'apparaît toujours pas, c\'est que « Optimiser le stockage de l\'iPhone » est activé dans iCloud, ce qui veut dire que les photos en taille réelle n\'ont jamais été sur le téléphone, et que le vrai poids est ailleurs : vidéos, enregistrements d\'écran, pièces jointes de Messages ou Données système.',
        'Ce guide passe en revue ce qui occupe réellement le stockage d\'un iPhone, dans l\'ordre qui libère le plus d\'espace avec le moins de regrets. Il s\'appuie sur les chiffres d\'Apple pour la taille des photos et vidéos, explique les deux réglages qui donnent l\'impression que supprimer ne sert à rien, et montre quels éléments peuvent être retirés sans risque dès aujourd\'hui.',
      ],
      keyTakeaways: [
        'Les photos et vidéos supprimées restent 30 jours dans Photos > Albums > Supprimés récemment et comptent toujours dans le stockage tant que vous n\'avez pas vidé l\'album.',
        'Avec Photos iCloud réglé sur « Optimiser le stockage de l\'iPhone », le téléphone ne garde que de petits aperçus ; les supprimer libère très peu en local et retire la photo de tous les appareils.',
        'Une minute de vidéo 4K/60 pèse environ 400 Mo, soit à peu près 200 photos ordinaires ; les vidéos et les enregistrements d\'écran pèsent généralement plus lourd que les photos.',
        'Les Données système (autrefois « Autre ») sont des caches et des journaux qu\'iOS gère lui-même ; il n\'y a pas de bouton pour les effacer, mais un redémarrage, l\'effacement des données Safari et la désinstallation des apps inutilisées les réduisent.',
        'Messages conserve chaque pièce jointe pour toujours par défaut ; Réglages > Messages > Conserver les messages > 30 jours peut libérer des gigaoctets sur un téléphone utilisé depuis longtemps.',
        'Une app de nettoyage ne peut pas contourner Supprimés récemment ; tout ce qui prétend libérer de l\'espace instantanément après la suppression de photos vous montre une estimation, pas une mesure.',
      ],
      dataTable: {
        caption: 'Taille approximative des médias iPhone courants (estimations d\'Apple pour la vidéo, valeurs typiques pour les photos)',
        columns: ['Élément', 'Taille typique'],
        rows: [
          ['Photo 12 Mpx (HEIF)', '1,5–2,5 Mo'],
          ['Photo ProRAW 48 Mpx', '50–80 Mo'],
          ['Live Photo', 'Photo + environ 3 Mo de vidéo'],
          ['Capture d\'écran (PNG)', '2–8 Mo'],
          ['1 minute de vidéo, 1080p à 30 i/s', 'Environ 60 Mo'],
          ['1 minute de vidéo, 4K à 30 i/s', 'Environ 170 Mo'],
          ['1 minute de vidéo, 4K à 60 i/s', 'Environ 400 Mo'],
          ['1 minute d\'enregistrement d\'écran', '100–200 Mo'],
        ],
      },
      howTo: {
        name: 'Libérer de l\'espace sur un iPhone quand supprimer des photos n\'a rien donné',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Voir ce qui occupe l\'espace',
            text: 'Ouvrez Réglages > Général > Stockage iPhone. Attendez que la barre finisse de calculer, puis lisez la liste depuis le haut : elle est triée par taille. Photos, Messages et Données système sont généralement les trois premiers.',
          },
          {
            name: 'Vider Supprimés récemment',
            text: 'Dans Photos, allez dans Albums, faites défiler jusqu\'à Utilitaires et ouvrez Supprimés récemment. Déverrouillez avec Face ID, touchez Sélectionner, puis Tout supprimer. C\'est l\'étape qui rend réellement l\'espace que vous aviez libéré plus tôt.',
          },
          {
            name: 'Vérifier le réglage Photos iCloud',
            text: 'Allez dans Réglages > votre nom > iCloud > Photos. Si « Optimiser le stockage de l\'iPhone » est sélectionné, la plupart des originaux en taille réelle sont dans iCloud et les supprimer du téléphone change à peine le stockage local ; vous libérez surtout de l\'espace iCloud.',
          },
          {
            name: 'Passer en revue les plus grosses vidéos',
            text: 'De retour dans Réglages > Général > Stockage iPhone, ouvrez Photos. iOS y liste vos plus grosses vidéos personnelles. Les enregistrements d\'écran et les clips 4K sont typiquement en tête ; supprimez ceux dont vous n\'avez plus besoin.',
          },
          {
            name: 'Alléger les pièces jointes de Messages',
            text: 'Dans Stockage iPhone, ouvrez Messages et utilisez Vérifier les pièces jointes volumineuses pour supprimer les vieilles vidéos et photos envoyées dans les conversations. Réglez ensuite Réglages > Messages > Conserver les messages sur 30 jours ou 1 an.',
          },
          {
            name: 'Désinstaller les apps que vous ouvrez rarement',
            text: 'Dans la liste Stockage iPhone, touchez une grosse app que vous n\'avez pas utilisée depuis des mois et choisissez Désinstaller l\'app. L\'app est retirée mais ses documents restent, et elle se réinstalle en une touche.',
          },
        ],
      },
      sections: [
        {
          title: 'Où part vraiment l\'espace sur un iPhone',
          content: [
            'Réglages > Général > Stockage iPhone est la seule carte honnête de votre stockage, et elle mérite une lecture attentive avant de supprimer quoi que ce soit. La liste est triée par taille, et sur la plupart des téléphones trois lignes dominent : Photos, Messages et Données système. Les apps qui diffusent de la vidéo ou de l\'audio (YouTube, Netflix, Spotify, lecteurs de podcasts) suivent souvent, parce que leurs téléchargements hors ligne et leurs caches peuvent atteindre plusieurs gigaoctets chacun.',
            'Dans Photos, la surprise vient généralement du rapport entre photos et vidéos. Une photo de 12 mégapixels enregistrée au format HEIF d\'Apple occupe environ 1,5 à 2,5 Mo. Une seule minute de vidéo en 4K à 60 images par seconde occupe environ 400 Mo, selon les estimations qu\'iOS affiche dans Réglages > Appareil photo > Enregistrement vidéo. Une vidéo de famille peut donc peser autant que deux cents photos, et un enregistrement d\'écran d\'un appel ou d\'une partie de jeu encore plus.',
            'Le tableau ci-dessous reprend les estimations d\'Apple. Ce qu\'il faut retenir : supprimer quelques centaines de photos ordinaires change rarement la barre, alors que supprimer cinq vidéos et deux enregistrements d\'écran peut libérer quelques gigaoctets.',
          ],
        },
        {
          title: 'Pourquoi supprimer des photos ne change rien pendant 30 jours',
          content: [
            'Quand vous supprimez une photo ou une vidéo dans l\'app Photos, iOS ne la retire pas. Il la déplace dans l\'album Supprimés récemment, où elle reste 30 jours pour qu\'une suppression accidentelle puisse être annulée. Pendant ces 30 jours, le fichier existe toujours sur la mémoire flash, et iOS continue de le compter. C\'est pour cela que la barre de stockage paraît identique après une grande séance de ménage.',
            'Pour récupérer l\'espace, ouvrez Photos > Albums, descendez jusqu\'à Utilitaires et ouvrez Supprimés récemment. Depuis iOS 16, l\'album est verrouillé par Face ID ou votre code. Touchez Sélectionner, puis Tout supprimer, et confirmez. Le changement est immédiat : revenez dans Réglages > Général > Stockage iPhone et la barre se met à jour en quelques secondes.',
            'Cela vaut pour toute app qui supprime des photos via la photothèque d\'Apple, apps de nettoyage comprises. DiskMop pour iPhone, par exemple, vous le rappelle après chaque suppression au lieu d\'afficher un chiffre d\'espace libéré : le nombre qu\'il pourrait mesurer juste après la suppression serait zéro, et il n\'en invente pas. Le vrai gain arrive quand vous videz Supprimés récemment, et l\'app vous renvoie à l\'endroit exact.',
          ],
        },
        {
          title: 'Photos iCloud et « Optimiser le stockage de l\'iPhone »',
          content: [
            'Si Photos iCloud est activé, Réglages > votre nom > iCloud > Photos propose deux modes. « Télécharger et conserver les originaux » stocke chaque photo et vidéo en taille réelle sur le téléphone. « Optimiser le stockage de l\'iPhone » garde les originaux en taille réelle dans iCloud et ne laisse sur le téléphone que de petites versions à la taille de l\'écran quand l\'espace vient à manquer. La plupart des gens sont dans le second mode sans se souvenir de l\'avoir choisi.',
            'En mode Optimiser, supprimer des photos du téléphone ne libère presque rien en local, parce que les copies locales sont déjà minuscules. Ce que vous faites réellement, c\'est supprimer la photo d\'iCloud, et donc de votre iPad, de votre Mac et de tout autre appareil connecté, après la fenêtre de 30 jours de Supprimés récemment. C\'est très bien pour les doublons et les photos floues, mais mieux vaut le savoir avant un grand ménage.',
            'Le piège inverse consiste à passer à « Télécharger et conserver les originaux » sur un téléphone presque plein : iOS essaiera de télécharger chaque original et peut remplir complètement le téléphone. Si une app de nettoyage n\'arrive pas à lire la taille réelle d\'une photo, c\'est généralement pour cette raison. DiskMop détecte que le mode Optimiser est actif en échantillonnant quelques originaux et vous prévient d\'emblée, pour que l\'estimation de son écran principal ne soit pas une promesse qu\'il ne peut pas tenir.',
          ],
        },
        {
          title: 'Données système, Messages et caches d\'apps',
          content: [
            'Les Données système, appelées « Autre » dans les anciennes versions d\'iOS, regroupent tout ce qu\'iOS n\'attribue pas à une app : le cache de Safari, les journaux, les voix de Siri, les polices téléchargées, les index Spotlight et les fichiers temporaires que les apps créent pendant leurs mises à jour. Il est normal qu\'elles atteignent 10 à 20 Go sur un téléphone utilisé depuis un an. Il n\'existe pas de bouton unique pour les effacer, mais trois choses les réduisent de façon fiable : redémarrer le téléphone, effacer les données Safari (Réglages > Safari > Effacer historique, données de site) et désinstaller les apps que vous n\'utilisez plus.',
            'Messages est le géant silencieux. Par défaut, iOS conserve chaque message et chaque pièce jointe pour toujours, si bien qu\'un téléphone utilisé depuis trois ans peut transporter 5 à 10 Go de vieilles photos et vidéos issues de discussions de groupe. Dans Réglages > Général > Stockage iPhone > Messages, Vérifier les pièces jointes volumineuses les affiche triées par taille. Réglages > Messages > Conserver les messages > 30 jours empêche la pile de se reformer.',
            'Enfin, les photos à retirer en premier sont rarement celles que vous choisiriez à la main : rafales et reprises du même instant, captures d\'écran datant de plusieurs mois, enregistrements d\'écran, et Live Photos dont vous ne regardez jamais les trois secondes de vidéo. DiskMop analyse la photothèque sur le téléphone, regroupe les clichés quasi identiques par moment, sépare les captures d\'écran des reçus et documents, et liste les enregistrements d\'écran et les vidéos 4K compressibles. Rien n\'est présélectionné ; vous cochez ce qui part, et la version gratuite vous laisse supprimer trois éléments pour voir si les résultats valent la dépense.',
          ],
        },
      ],
      faq: [
        {
          question: 'Supprimer des photos sur iPhone libère-t-il de l\'espace immédiatement ?',
          answer:
            'Non. Les photos et vidéos supprimées passent dans Supprimés récemment pendant 30 jours et comptent toujours dans le stockage. Ouvrez Photos > Albums > Supprimés récemment, touchez Sélectionner, puis Tout supprimer pour libérer l\'espace tout de suite.',
        },
        {
          question: 'Supprimer des photos sur mon iPhone les supprime-t-il d\'iCloud ?',
          answer:
            'Oui, si Photos iCloud est activé. La photothèque est synchronisée, donc une photo supprimée sur le téléphone disparaît d\'iCloud et de vos autres appareils après la période de 30 jours de Supprimés récemment. Désactivez d\'abord Photos iCloud si vous voulez garder la copie dans le cloud.',
        },
        {
          question: 'Pourquoi les Données système occupent-elles 20 Go sur mon iPhone ?',
          answer:
            'Les Données système sont des caches, des journaux et des fichiers temporaires qu\'iOS gère lui-même, et 10 à 20 Go sont normaux sur un téléphone utilisé depuis un an ou plus. Redémarrer, effacer l\'historique et les données de site de Safari, et désinstaller les apps inutilisées sont les moyens fiables de les réduire.',
        },
        {
          question: 'Une app de nettoyage pour iPhone doit-elle envoyer mes photos sur un serveur ?',
          answer:
            'Elle ne devrait pas. Trouver les doublons, les photos floues ou les captures d\'écran peut se faire entièrement sur le téléphone avec les frameworks d\'Apple. DiskMop fonctionne sans serveur ni compte et son étiquette de confidentialité sur l\'App Store indique « Données non collectées ».',
        },
        {
          question: 'Est-il sans risque de vider Supprimés récemment ?',
          answer:
            'Oui, tant que vous vouliez vraiment supprimer ce qui s\'y trouve. Tout le contenu de l\'album disparaît définitivement dès que vous touchez Tout supprimer, et il n\'y a plus de récupération possible sauf depuis une sauvegarde.',
        },
      ],
      verdict: [
        'Un iPhone qui reste plein après un ménage n\'est pas en panne ; il suit deux règles que la plupart des gens ne voient jamais. Les photos supprimées attendent 30 jours dans Supprimés récemment, et en mode Optimiser les originaux n\'ont jamais été sur le téléphone. Videz l\'album, lisez Réglages > Général > Stockage iPhone depuis le haut, et occupez-vous des vidéos, des enregistrements d\'écran et des pièces jointes de Messages avant les photos ordinaires.',
        'DiskMop pour iPhone est construit autour de ces règles plutôt que contre elles. Il analyse sur le téléphone, regroupe les clichés similaires, sépare les captures d\'écran des documents, liste les enregistrements d\'écran et les grosses vidéos, et après chaque suppression dit honnêtement que l\'espace revient une fois Supprimés récemment vidé. L\'analyse est gratuite, trois suppressions sont gratuites, et la version complète est un achat unique, sans abonnement.',
      ],
      ctaText: 'Télécharger DiskMop pour iPhone sur l\'App Store',
    },
    es: {
      title: '¿Almacenamiento del iPhone lleno? Por qué borrar fotos no liberó nada (y qué sí)',
      metaDescription:
        '¿Borraste fotos y el iPhone sigue lleno? Quedan 30 días en Eliminados recientemente y la optimización de iCloud oculta el resto. Qué libera espacio de verdad.',
      subtitle: 'Eliminados recientemente, la optimización de iCloud y los Datos del sistema, sin mitos',
      intro: [
        'Respuesta corta: borrar fotos en un iPhone no libera nada durante 30 días, porque cada foto y vídeo eliminado pasa primero al álbum Eliminados recientemente. Vacía ese álbum y el espacio aparece de inmediato. Si aun así no aparece, es que «Optimizar almacenamiento del iPhone» está activado en iCloud, lo que significa que las fotos a tamaño completo nunca estuvieron en el teléfono y el peso real está en otra parte: vídeos, grabaciones de pantalla, adjuntos de Mensajes o Datos del sistema.',
        'Esta guía repasa qué ocupa realmente el almacenamiento de un iPhone, en el orden que libera más espacio con menos arrepentimientos. Usa las cifras de la propia Apple para el tamaño de fotos y vídeos, explica los dos ajustes que hacen que borrar parezca inútil y muestra qué elementos se pueden eliminar hoy sin riesgo.',
      ],
      keyTakeaways: [
        'Las fotos y vídeos borrados permanecen 30 días en Fotos > Álbumes > Eliminados recientemente y siguen contando en el almacenamiento hasta que vacías el álbum.',
        'Con Fotos en iCloud en «Optimizar almacenamiento del iPhone», el teléfono solo guarda previsualizaciones pequeñas; borrarlas libera muy poco en local y elimina la foto de todos los dispositivos.',
        'Un minuto de vídeo 4K/60 ocupa unos 400 MB, más o menos lo mismo que 200 fotos normales; los vídeos y las grabaciones de pantalla suelen pesar más que las fotos.',
        'Los Datos del sistema (antes «Otros») son cachés y registros que iOS gestiona por su cuenta; no hay botón para limpiarlos, pero reiniciar, borrar los datos de Safari y desinstalar las apps sin usar conservando sus datos los reducen.',
        'Mensajes conserva todos los adjuntos para siempre por defecto; Ajustes > Mensajes > Conservar mensajes > 30 días puede liberar gigabytes en un teléfono con años de uso.',
        'Una app limpiadora no puede saltarse Eliminados recientemente; cualquiera que afirme liberar espacio al instante tras borrar fotos te está mostrando una estimación, no una medición.',
      ],
      dataTable: {
        caption: 'Tamaño aproximado de los archivos habituales del iPhone (estimaciones de Apple para vídeo, valores típicos para fotos)',
        columns: ['Elemento', 'Tamaño típico'],
        rows: [
          ['Foto de 12 MP (HEIF)', '1,5–2,5 MB'],
          ['Foto ProRAW de 48 MP', '50–80 MB'],
          ['Live Photo', 'Foto + unos 3 MB de vídeo'],
          ['Captura de pantalla (PNG)', '2–8 MB'],
          ['1 minuto de vídeo, 1080p a 30 fps', 'Unos 60 MB'],
          ['1 minuto de vídeo, 4K a 30 fps', 'Unos 170 MB'],
          ['1 minuto de vídeo, 4K a 60 fps', 'Unos 400 MB'],
          ['1 minuto de grabación de pantalla', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Liberar espacio en un iPhone cuando borrar fotos no sirvió de nada',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Ver qué está ocupando el espacio',
            text: 'Abre Ajustes > General > Almacenamiento del iPhone. Espera a que la barra termine de calcular y lee la lista desde arriba: está ordenada por tamaño. Fotos, Mensajes y Datos del sistema suelen ser los tres primeros.',
          },
          {
            name: 'Vaciar Eliminados recientemente',
            text: 'En Fotos, ve a Álbumes, baja hasta Utilidades y abre Eliminados recientemente. Desbloquéalo con Face ID, toca Seleccionar y luego Eliminar todo. Este es el paso que devuelve de verdad el espacio que liberaste antes.',
          },
          {
            name: 'Comprobar el ajuste de Fotos en iCloud',
            text: 'Ve a Ajustes > tu nombre > iCloud > Fotos. Si está seleccionado «Optimizar almacenamiento del iPhone», la mayoría de los originales a tamaño completo viven en iCloud y borrarlos del teléfono apenas cambia el almacenamiento local; sobre todo estás liberando espacio en iCloud.',
          },
          {
            name: 'Revisar los vídeos más grandes',
            text: 'De vuelta en Ajustes > General > Almacenamiento del iPhone, abre Fotos. iOS enumera ahí tus vídeos personales más grandes. Las grabaciones de pantalla y los clips 4K suelen estar arriba; borra los que ya no necesites.',
          },
          {
            name: 'Recortar los adjuntos de Mensajes',
            text: 'En Almacenamiento del iPhone, abre Mensajes y usa Revisar archivos adjuntos grandes para borrar vídeos y fotos antiguos enviados en los chats. Después pon Ajustes > Mensajes > Conservar mensajes en 30 días o 1 año.',
          },
          {
            name: 'Desinstalar las apps que casi nunca abres',
            text: 'En la lista de Almacenamiento del iPhone, toca una app grande que no hayas usado en meses y elige Desinstalar app. La app se elimina pero sus documentos se conservan, y se reinstala con un toque.',
          },
        ],
      },
      sections: [
        {
          title: 'A dónde se va realmente el espacio en un iPhone',
          content: [
            'Ajustes > General > Almacenamiento del iPhone es el único mapa honesto de tu almacenamiento, y merece una lectura atenta antes de borrar nada. La lista está ordenada por tamaño, y en la mayoría de los teléfonos dominan tres líneas: Fotos, Mensajes y Datos del sistema. Las apps que reproducen vídeo o audio en streaming (YouTube, Netflix, Spotify, reproductores de podcasts) suelen venir después, porque sus descargas sin conexión y sus cachés pueden alcanzar varios gigabytes cada una.',
            'Dentro de Fotos, la sorpresa suele ser la proporción entre fotos y vídeos. Una foto de 12 megapíxeles guardada en el formato HEIF de Apple ocupa entre 1,5 y 2,5 MB. Un solo minuto de vídeo en 4K a 60 fotogramas por segundo ocupa unos 400 MB, según las estimaciones que iOS muestra en Ajustes > Cámara > Grabar vídeo. Un vídeo familiar puede pesar, por tanto, lo mismo que doscientas fotos, y una grabación de pantalla de una llamada o una partida puede pesar aún más.',
            'La tabla siguiente usa las estimaciones de la propia Apple. La conclusión es que borrar unos cientos de fotos normales rara vez mueve la barra, mientras que borrar cinco vídeos y dos grabaciones de pantalla puede liberar un par de gigabytes.',
          ],
        },
        {
          title: 'Por qué borrar fotos no cambia nada durante 30 días',
          content: [
            'Cuando borras una foto o un vídeo en la app Fotos, iOS no lo elimina. Lo mueve al álbum Eliminados recientemente, donde permanece 30 días para que un borrado accidental pueda deshacerse. Durante esos 30 días el archivo sigue existiendo en la memoria flash, e iOS lo sigue contando. Por eso la barra de almacenamiento parece idéntica después de una gran sesión de limpieza.',
            'Para recuperar el espacio, abre Fotos > Álbumes, baja hasta Utilidades y abre Eliminados recientemente. Desde iOS 16 el álbum está bloqueado con Face ID o tu código. Toca Seleccionar, luego Eliminar todo, y confirma. El cambio es inmediato: vuelve a Ajustes > General > Almacenamiento del iPhone y la barra se actualiza en unos segundos.',
            'Esto se aplica a cualquier app que borre fotos a través de la fototeca de Apple, incluidas las apps limpiadoras. DiskMop para iPhone, por ejemplo, te lo recuerda tras cada borrado en lugar de mostrar una cifra de espacio liberado: el número que podría medir justo después de borrar sería cero, y no se inventa otro. La ganancia real llega cuando vacías Eliminados recientemente, y la app te lleva al sitio exacto.',
          ],
        },
        {
          title: 'Fotos en iCloud y «Optimizar almacenamiento del iPhone»',
          content: [
            'Si Fotos en iCloud está activado, Ajustes > tu nombre > iCloud > Fotos ofrece dos modos. «Descargar y conservar originales» guarda cada foto y vídeo a tamaño completo en el teléfono. «Optimizar almacenamiento del iPhone» mantiene los originales a tamaño completo en iCloud y deja en el teléfono solo versiones pequeñas, del tamaño de la pantalla, cuando el espacio escasea. La mayoría de la gente está en el segundo modo sin recordar haberlo elegido.',
            'En modo Optimizar, borrar fotos del teléfono no libera casi nada en local, porque las copias locales ya son diminutas. Lo que realmente estás haciendo es borrar la foto de iCloud y, por tanto, de tu iPad, tu Mac y cualquier otro dispositivo con la sesión iniciada, una vez pasados los 30 días de Eliminados recientemente. Para duplicados y fotos movidas está bien, pero conviene saberlo antes de una limpieza grande.',
            'La trampa inversa es cambiar a «Descargar y conservar originales» en un teléfono casi lleno: iOS intentará descargar todos los originales y puede llenar el teléfono por completo. Si una app limpiadora no puede leer el tamaño real de una foto, normalmente es por esto. DiskMop detecta si el modo Optimizar está activo tomando una muestra de algunos originales y te avisa desde el principio, para que la estimación de su pantalla principal no sea una promesa que no puede cumplir.',
          ],
        },
        {
          title: 'Datos del sistema, Mensajes y cachés de apps',
          content: [
            'Los Datos del sistema, llamados «Otros» en versiones antiguas de iOS, son todo lo que iOS no atribuye a una app: la caché de Safari, registros, voces de Siri, tipografías descargadas, índices de Spotlight y los archivos temporales que crean las apps al actualizarse. Es normal que alcancen 10 o 20 GB en un teléfono con un año de uso. No hay un único botón para limpiarlos, pero tres cosas los reducen de forma fiable: reiniciar el teléfono, borrar los datos de Safari (Ajustes > Safari > Borrar historial y datos de sitios web) y desinstalar, conservando sus datos, las apps que ya no usas.',
            'Mensajes es el gigante silencioso. Por defecto iOS conserva todos los mensajes y todos los adjuntos para siempre, así que un teléfono con tres años de uso puede cargar con 5 o 10 GB de fotos y vídeos antiguos de chats de grupo. En Ajustes > General > Almacenamiento del iPhone > Mensajes, Revisar archivos adjuntos grandes los muestra ordenados por tamaño. Ajustes > Mensajes > Conservar mensajes > 30 días evita que el montón vuelva a crecer.',
            'Por último, las fotos que conviene eliminar primero rara vez son las que elegirías a mano: ráfagas y repeticiones del mismo momento, capturas de pantalla de hace meses, grabaciones de pantalla y Live Photos cuyo vídeo de tres segundos nunca ves. DiskMop analiza la fototeca en el teléfono, agrupa las tomas casi idénticas por momento, separa las capturas de pantalla de los recibos y documentos, y enumera las grabaciones de pantalla y los vídeos 4K comprimibles. Nada viene preseleccionado; tú marcas lo que se va, y la versión gratuita te deja borrar tres elementos para ver si los resultados merecen el pago.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Borrar fotos en el iPhone libera espacio de inmediato?',
          answer:
            'No. Las fotos y vídeos borrados pasan a Eliminados recientemente durante 30 días y siguen contando en el almacenamiento. Abre Fotos > Álbumes > Eliminados recientemente, toca Seleccionar y luego Eliminar todo para liberar el espacio al momento.',
        },
        {
          question: '¿Si borro fotos en mi iPhone se borran también de iCloud?',
          answer:
            'Sí, si Fotos en iCloud está activado. La fototeca está sincronizada, así que una foto borrada en el teléfono desaparece de iCloud y de tus otros dispositivos pasados los 30 días de Eliminados recientemente. Desactiva antes Fotos en iCloud si quieres conservar la copia en la nube.',
        },
        {
          question: '¿Por qué los Datos del sistema ocupan 20 GB en mi iPhone?',
          answer:
            'Los Datos del sistema son cachés, registros y archivos temporales que iOS gestiona por su cuenta, y entre 10 y 20 GB es normal en un teléfono con un año o más de uso. Reiniciar, borrar el historial y los datos de sitios web de Safari y desinstalar las apps sin usar son las formas fiables de reducirlos.',
        },
        {
          question: '¿Una app limpiadora para iPhone necesita subir mis fotos?',
          answer:
            'No debería. Encontrar duplicados, fotos movidas o capturas de pantalla puede hacerse por completo en el teléfono con los propios frameworks de Apple. DiskMop funciona sin servidor ni cuenta, y su etiqueta de privacidad en el App Store dice «No se recopilan datos».',
        },
        {
          question: '¿Es seguro vaciar Eliminados recientemente?',
          answer:
            'Sí, siempre que quisieras borrar lo que contiene. Todo lo que hay en el álbum desaparece definitivamente en cuanto tocas Eliminar todo, y no hay más recuperación posible salvo desde una copia de seguridad.',
        },
      ],
      verdict: [
        'Un iPhone que sigue lleno después de una limpieza no está roto; está siguiendo dos reglas que la mayoría nunca ve. Las fotos borradas esperan 30 días en Eliminados recientemente, y en modo Optimizar los originales nunca estuvieron en el teléfono. Vacía el álbum, lee Ajustes > General > Almacenamiento del iPhone desde arriba y ve a por los vídeos, las grabaciones de pantalla y los adjuntos de Mensajes antes que a por las fotos normales.',
        'DiskMop para iPhone está construido alrededor de esas reglas, no en su contra. Analiza en el teléfono, agrupa las tomas parecidas, separa las capturas de pantalla de los documentos, enumera las grabaciones de pantalla y los vídeos grandes, y después de cada borrado dice con honestidad que el espacio vuelve cuando se vacía Eliminados recientemente. Analizar es gratis, tres borrados son gratis, y la versión completa es una compra única sin suscripción.',
      ],
      ctaText: 'Consigue DiskMop para iPhone en el App Store',
    },
    it: {
      title: 'Spazio iPhone pieno? Perché eliminare le foto non ha liberato nulla (e cosa funziona)',
      metaDescription:
        'Hai eliminato foto ma l\'iPhone resta pieno? Restano 30 giorni in Eliminati di recente e l\'ottimizzazione iCloud nasconde il resto. Cosa libera spazio davvero.',
      subtitle: 'Eliminati di recente, ottimizzazione iCloud e Dati di sistema, spiegati senza miti',
      intro: [
        'Risposta breve: eliminare le foto su un iPhone non libera nulla per 30 giorni, perché ogni foto e video eliminato passa prima nell\'album Eliminati di recente. Svuota quell\'album e lo spazio compare subito. Se ancora non compare, è attivo «Ottimizza spazio iPhone» di iCloud, il che significa che le foto a dimensione piena non sono mai state sul telefono e il peso vero è altrove: video, registrazioni dello schermo, allegati di Messaggi o Dati di sistema.',
        'Questa guida passa in rassegna ciò che occupa davvero lo spazio di un iPhone, nell\'ordine che libera più spazio con meno rimpianti. Usa i numeri della stessa Apple per le dimensioni di foto e video, spiega le due impostazioni che fanno sembrare inutile eliminare, e mostra quali elementi si possono rimuovere oggi in sicurezza.',
      ],
      keyTakeaways: [
        'Le foto e i video eliminati restano 30 giorni in Foto > Album > Eliminati di recente e continuano a contare nello spazio finché non svuoti l\'album.',
        'Con Foto di iCloud impostato su «Ottimizza spazio iPhone», il telefono conserva solo piccole anteprime; eliminarle libera pochissimo in locale e rimuove la foto da ogni dispositivo.',
        'Un minuto di video 4K/60 pesa circa 400 MB, più o meno quanto 200 foto normali; video e registrazioni dello schermo di solito pesano più delle foto.',
        'I Dati di sistema (un tempo «Altro») sono cache e log che iOS gestisce da sé; non c\'è un pulsante per cancellarli, ma un riavvio, la cancellazione dei dati di Safari e la rimozione delle app inutilizzate li riducono.',
        'Messaggi conserva ogni allegato per sempre per impostazione predefinita; Impostazioni > Messaggi > Conserva messaggi > 30 giorni può liberare gigabyte su un telefono usato da anni.',
        'Un\'app di pulizia non può aggirare Eliminati di recente; qualunque cosa affermi di liberare spazio all\'istante dopo aver eliminato le foto ti sta mostrando una stima, non una misurazione.',
      ],
      dataTable: {
        caption: 'Dimensione approssimativa dei contenuti più comuni su iPhone (stime di Apple per i video, valori tipici per le foto)',
        columns: ['Elemento', 'Dimensione tipica'],
        rows: [
          ['Foto da 12 MP (HEIF)', '1,5–2,5 MB'],
          ['Foto ProRAW da 48 MP', '50–80 MB'],
          ['Live Photo', 'Foto + circa 3 MB di video'],
          ['Screenshot (PNG)', '2–8 MB'],
          ['1 minuto di video, 1080p a 30 fps', 'Circa 60 MB'],
          ['1 minuto di video, 4K a 30 fps', 'Circa 170 MB'],
          ['1 minuto di video, 4K a 60 fps', 'Circa 400 MB'],
          ['1 minuto di registrazione dello schermo', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Liberare spazio su un iPhone quando eliminare le foto non è servito',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Vedere cosa occupa lo spazio',
            text: 'Apri Impostazioni > Generali > Spazio iPhone. Aspetta che la barra finisca di calcolare, poi leggi l\'elenco dall\'alto: è ordinato per dimensione. Foto, Messaggi e Dati di sistema sono di solito i primi tre.',
          },
          {
            name: 'Svuotare Eliminati di recente',
            text: 'In Foto vai su Album, scorri fino a Utility e apri Eliminati di recente. Sbloccalo con Face ID, tocca Seleziona e poi Elimina tutto. È questo il passaggio che restituisce davvero lo spazio liberato prima.',
          },
          {
            name: 'Controllare l\'impostazione di Foto di iCloud',
            text: 'Vai in Impostazioni > il tuo nome > iCloud > Foto. Se è selezionato «Ottimizza spazio iPhone», la maggior parte degli originali a dimensione piena vive su iCloud ed eliminarli dal telefono cambia a malapena lo spazio locale; stai liberando soprattutto spazio iCloud.',
          },
          {
            name: 'Rivedere i video più grandi',
            text: 'Torna in Impostazioni > Generali > Spazio iPhone e apri Foto. iOS elenca lì i tuoi video personali più grandi. Registrazioni dello schermo e clip 4K sono tipicamente in cima; elimina quelli che non ti servono più.',
          },
          {
            name: 'Sfoltire gli allegati di Messaggi',
            text: 'In Spazio iPhone apri Messaggi e usa Rivedi allegati di grandi dimensioni per eliminare vecchi video e foto inviati nelle chat. Poi imposta Impostazioni > Messaggi > Conserva messaggi su 30 giorni o 1 anno.',
          },
          {
            name: 'Rimuovere le app che apri di rado',
            text: 'Nell\'elenco di Spazio iPhone tocca un\'app grande che non usi da mesi e scegli Rimuovi app. L\'app viene rimossa ma i suoi documenti restano, e si reinstalla con un tocco.',
          },
        ],
      },
      sections: [
        {
          title: 'Dove va davvero lo spazio su un iPhone',
          content: [
            'Impostazioni > Generali > Spazio iPhone è l\'unica mappa onesta del tuo spazio, e vale la pena leggerla con attenzione prima di eliminare qualsiasi cosa. L\'elenco è ordinato per dimensione, e sulla maggior parte dei telefoni dominano tre righe: Foto, Messaggi e Dati di sistema. Le app che trasmettono video o audio in streaming (YouTube, Netflix, Spotify, lettori di podcast) seguono spesso subito dopo, perché i loro download offline e le loro cache possono raggiungere diversi gigabyte ciascuna.',
            'Dentro Foto, la sorpresa è di solito il rapporto tra foto e video. Una foto da 12 megapixel salvata nel formato HEIF di Apple occupa circa 1,5–2,5 MB. Un solo minuto di video in 4K a 60 fotogrammi al secondo occupa circa 400 MB, secondo le stime che iOS mostra in Impostazioni > Fotocamera > Registrazione video. Un video di famiglia può quindi pesare quanto duecento foto, e una registrazione dello schermo di una telefonata o di una partita anche di più.',
            'La tabella qui sotto usa le stime della stessa Apple. La conclusione è che eliminare qualche centinaio di foto normali sposta raramente la barra, mentre eliminare cinque video e due registrazioni dello schermo può liberare un paio di gigabyte.',
          ],
        },
        {
          title: 'Perché eliminare le foto non cambia nulla per 30 giorni',
          content: [
            'Quando elimini una foto o un video nell\'app Foto, iOS non lo rimuove. Lo sposta nell\'album Eliminati di recente, dove resta 30 giorni perché un\'eliminazione accidentale possa essere annullata. Durante quei 30 giorni il file esiste ancora nella memoria flash, e iOS continua a contarlo. Ecco perché la barra dello spazio sembra identica dopo una grande sessione di pulizia.',
            'Per recuperare lo spazio, apri Foto > Album, scorri in basso fino a Utility e apri Eliminati di recente. Da iOS 16 l\'album è bloccato dietro Face ID o il tuo codice. Tocca Seleziona, poi Elimina tutto, e conferma. Il cambiamento è immediato: torna in Impostazioni > Generali > Spazio iPhone e la barra si aggiorna in pochi secondi.',
            'Questo vale per ogni app che elimina foto attraverso la libreria foto di Apple, app di pulizia comprese. DiskMop per iPhone, per esempio, te lo dice dopo ogni eliminazione invece di mostrare una cifra di spazio liberato: il numero che potrebbe misurare subito dopo l\'eliminazione sarebbe zero, e non ne inventa uno. Il guadagno reale arriva quando svuoti Eliminati di recente, e l\'app ti rimanda al punto esatto.',
          ],
        },
        {
          title: 'Foto di iCloud e «Ottimizza spazio iPhone»',
          content: [
            'Se Foto di iCloud è attivo, Impostazioni > il tuo nome > iCloud > Foto offre due modalità. «Scarica e conserva gli originali» tiene ogni foto e video a dimensione piena sul telefono. «Ottimizza spazio iPhone» conserva gli originali a dimensione piena su iCloud e lascia sul telefono solo versioni piccole, a misura di schermo, quando lo spazio scarseggia. La maggior parte delle persone è nella seconda modalità senza ricordare di averla scelta.',
            'In modalità Ottimizza, eliminare le foto dal telefono libera quasi nulla in locale, perché le copie locali sono già minuscole. Quello che stai davvero facendo è eliminare la foto da iCloud, e quindi dal tuo iPad, dal Mac e da ogni altro dispositivo con lo stesso account, passata la finestra di 30 giorni di Eliminati di recente. Va bene per duplicati e scatti mossi, ma è meglio saperlo prima di una grande pulizia.',
            'La trappola opposta è passare a «Scarica e conserva gli originali» su un telefono quasi pieno: iOS proverà a scaricare ogni originale e può riempire completamente il telefono. Se un\'app di pulizia non riesce a leggere la dimensione reale di una foto, di solito il motivo è questo. DiskMop rileva se la modalità Ottimizza è attiva campionando alcuni originali e ti avvisa fin dall\'inizio, così la stima sulla sua schermata principale non è una promessa che non può mantenere.',
          ],
        },
        {
          title: 'Dati di sistema, Messaggi e cache delle app',
          content: [
            'I Dati di sistema, chiamati «Altro» nelle versioni precedenti di iOS, sono tutto ciò che iOS non attribuisce a un\'app: la cache di Safari, i log, le voci di Siri, i font scaricati, gli indici di Spotlight e i file temporanei che le app creano durante l\'aggiornamento. È normale che raggiungano 10–20 GB su un telefono usato da un anno. Non c\'è un solo pulsante per cancellarli, ma tre cose li riducono in modo affidabile: riavviare il telefono, cancellare i dati di Safari (Impostazioni > Safari > Cancella dati siti web e cronologia) e rimuovere le app che non usi più.',
            'Messaggi è il gigante silenzioso. Per impostazione predefinita iOS conserva ogni messaggio e ogni allegato per sempre, così un telefono in uso da tre anni può portarsi dietro 5–10 GB di vecchie foto e video dalle chat di gruppo. In Impostazioni > Generali > Spazio iPhone > Messaggi, Rivedi allegati di grandi dimensioni li mostra ordinati per dimensione. Impostazioni > Messaggi > Conserva messaggi > 30 giorni impedisce alla pila di ricrescere.',
            'Infine, le foto da rimuovere per prime sono raramente quelle che sceglieresti a mano: raffiche e ripetizioni dello stesso momento, screenshot di mesi fa, registrazioni dello schermo e Live Photo di cui non guardi mai i tre secondi di video. DiskMop analizza la libreria sul telefono, raggruppa gli scatti quasi identici per momento, separa gli screenshot da scontrini e documenti, ed elenca le registrazioni dello schermo e i video 4K comprimibili. Nulla è preselezionato; spunti tu ciò che va via, e la versione gratuita ti lascia eliminare tre elementi per vedere se i risultati valgono la spesa.',
          ],
        },
      ],
      faq: [
        {
          question: 'Eliminare le foto su iPhone libera spazio subito?',
          answer:
            'No. Le foto e i video eliminati passano in Eliminati di recente per 30 giorni e continuano a contare nello spazio. Apri Foto > Album > Eliminati di recente, tocca Seleziona e poi Elimina tutto per liberare lo spazio subito.',
        },
        {
          question: 'Se elimino le foto dal mio iPhone vengono eliminate anche da iCloud?',
          answer:
            'Sì, se Foto di iCloud è attivo. La libreria è sincronizzata, quindi una foto eliminata sul telefono sparisce da iCloud e dagli altri tuoi dispositivi dopo i 30 giorni di Eliminati di recente. Disattiva prima Foto di iCloud se vuoi conservare la copia nel cloud.',
        },
        {
          question: 'Perché i Dati di sistema occupano 20 GB sul mio iPhone?',
          answer:
            'I Dati di sistema sono cache, log e file temporanei che iOS gestisce da sé, e 10–20 GB sono normali su un telefono usato da un anno o più. Riavviare, cancellare cronologia e dati dei siti web di Safari e rimuovere le app inutilizzate sono i modi affidabili per ridurli.',
        },
        {
          question: 'Un\'app di pulizia per iPhone deve caricare le mie foto?',
          answer:
            'Non dovrebbe. Trovare duplicati, scatti mossi o screenshot si può fare interamente sul telefono con i framework della stessa Apple. DiskMop funziona senza server e senza account, e la sua etichetta sulla privacy nell\'App Store dice «Dati non raccolti».',
        },
        {
          question: 'È sicuro svuotare Eliminati di recente?',
          answer:
            'Sì, purché tu volessi davvero eliminare ciò che contiene. Tutto ciò che è nell\'album sparisce per sempre appena tocchi Elimina tutto, e non c\'è altro recupero possibile se non da un backup.',
        },
      ],
      verdict: [
        'Un iPhone che resta pieno dopo una pulizia non è rotto; sta seguendo due regole che la maggior parte delle persone non vede mai. Le foto eliminate aspettano 30 giorni in Eliminati di recente, e in modalità Ottimizza gli originali non sono mai stati sul telefono. Svuota l\'album, leggi Impostazioni > Generali > Spazio iPhone dall\'alto, e occupati di video, registrazioni dello schermo e allegati di Messaggi prima delle foto normali.',
        'DiskMop per iPhone è costruito attorno a queste regole, non contro di esse. Analizza sul telefono, raggruppa gli scatti simili, separa gli screenshot dai documenti, elenca registrazioni dello schermo e video grandi, e dopo ogni eliminazione dice onestamente che lo spazio torna quando Eliminati di recente viene svuotato. L\'analisi è gratuita, tre eliminazioni sono gratuite, e la versione completa è un acquisto una tantum senza abbonamento.',
      ],
      ctaText: 'Scarica DiskMop per iPhone dall\'App Store',
    },
    pt: {
      title: 'Armazenamento do iPhone cheio? Por que apagar fotos não liberou espaço (e o que libera)',
      metaDescription:
        'Apagou fotos e o iPhone continua cheio? Elas ficam 30 dias em Apagados Recentemente e a otimização do iCloud esconde o resto. O que libera espaço de verdade.',
      subtitle: 'Apagados Recentemente, otimização do iCloud e Dados do Sistema, explicados sem mitos',
      intro: [
        'Resposta curta: apagar fotos em um iPhone não libera nada por 30 dias, porque toda foto e vídeo apagado vai primeiro para o álbum Apagados Recentemente. Esvazie esse álbum e o espaço aparece na hora. Se ainda assim não aparecer, é porque «Otimizar Armazenamento do iPhone» está ativado no iCloud, o que significa que as fotos em tamanho original nunca estiveram no aparelho, e o peso real está em outro lugar: vídeos, gravações de tela, anexos do Mensagens ou Dados do Sistema.',
        'Este guia percorre o que realmente ocupa o armazenamento de um iPhone, na ordem que libera mais espaço com menos arrependimento. Ele usa os números da própria Apple para o tamanho de fotos e vídeos, explica os dois ajustes que fazem apagar parecer inútil e mostra quais itens podem ser removidos hoje com segurança.',
      ],
      keyTakeaways: [
        'Fotos e vídeos apagados ficam 30 dias em Fotos > Álbuns > Apagados Recentemente e continuam contando no armazenamento até você esvaziar o álbum.',
        'Com o Fotos do iCloud em «Otimizar Armazenamento do iPhone», o aparelho guarda só pré-visualizações pequenas; apagá-las libera muito pouco localmente e remove a foto de todos os dispositivos.',
        'Um minuto de vídeo 4K/60 tem cerca de 400 MB, mais ou menos o tamanho de 200 fotos comuns; vídeos e gravações de tela costumam pesar mais que as fotos.',
        'Dados do Sistema (antes «Outros») são caches e registros que o iOS gerencia sozinho; não há botão para limpar, mas reiniciar, limpar os dados do Safari e desinstalar apps sem uso mantendo os dados reduzem esse valor.',
        'O Mensagens guarda todo anexo para sempre por padrão; Ajustes > Mensagens > Manter Mensagens > 30 Dias pode liberar gigabytes em um aparelho usado há muito tempo.',
        'Um app de limpeza não consegue pular o Apagados Recentemente; qualquer coisa que prometa liberar espaço na hora depois de apagar fotos está mostrando uma estimativa, não uma medição.',
      ],
      dataTable: {
        caption: 'Tamanho aproximado das mídias mais comuns do iPhone (estimativas da Apple para vídeo, valores típicos para fotos)',
        columns: ['Item', 'Tamanho típico'],
        rows: [
          ['Foto de 12 MP (HEIF)', '1,5–2,5 MB'],
          ['Foto ProRAW de 48 MP', '50–80 MB'],
          ['Live Photo', 'Foto + cerca de 3 MB de vídeo'],
          ['Captura de tela (PNG)', '2–8 MB'],
          ['1 minuto de vídeo, 1080p a 30 fps', 'Cerca de 60 MB'],
          ['1 minuto de vídeo, 4K a 30 fps', 'Cerca de 170 MB'],
          ['1 minuto de vídeo, 4K a 60 fps', 'Cerca de 400 MB'],
          ['1 minuto de gravação de tela', '100–200 MB'],
        ],
      },
      howTo: {
        name: 'Liberar espaço em um iPhone quando apagar fotos não adiantou',
        totalTime: 'PT15M',
        steps: [
          {
            name: 'Veja o que está usando o espaço',
            text: 'Abra Ajustes > Geral > Armazenamento do iPhone. Espere a barra terminar de calcular e leia a lista de cima para baixo: ela é ordenada por tamanho. Fotos, Mensagens e Dados do Sistema costumam ser os três primeiros.',
          },
          {
            name: 'Esvazie o Apagados Recentemente',
            text: 'No Fotos, vá em Álbuns, role até Utilitários e abra Apagados Recentemente. Desbloqueie com o Face ID, toque em Selecionar e depois em Apagar Tudo. É esse o passo que realmente devolve o espaço que você liberou antes.',
          },
          {
            name: 'Confira o ajuste do Fotos do iCloud',
            text: 'Vá em Ajustes > seu nome > iCloud > Fotos. Se «Otimizar Armazenamento do iPhone» estiver selecionado, a maioria dos originais em tamanho completo está no iCloud, e apagá-los do aparelho quase não muda o armazenamento local; você está liberando principalmente espaço no iCloud.',
          },
          {
            name: 'Revise os maiores vídeos',
            text: 'De volta em Ajustes > Geral > Armazenamento do iPhone, abra Fotos. O iOS lista ali seus maiores vídeos pessoais. Gravações de tela e clipes em 4K normalmente ficam no topo; apague os que você não precisa mais.',
          },
          {
            name: 'Enxugue os anexos do Mensagens',
            text: 'Em Armazenamento do iPhone, abra Mensagens e use Revisar Anexos Grandes para apagar vídeos e fotos antigos enviados nas conversas. Depois defina Ajustes > Mensagens > Manter Mensagens como 30 Dias ou 1 Ano.',
          },
          {
            name: 'Desinstale os apps que você raramente abre',
            text: 'Na lista de Armazenamento do iPhone, toque em um app grande que você não usa há meses e escolha Desinstalar App. O app é removido, mas os documentos dele ficam, e ele se reinstala com um toque.',
          },
        ],
      },
      sections: [
        {
          title: 'Para onde o espaço realmente vai em um iPhone',
          content: [
            'Ajustes > Geral > Armazenamento do iPhone é o único mapa honesto do seu armazenamento, e vale a pena lê-lo com atenção antes de apagar qualquer coisa. A lista é ordenada por tamanho, e na maioria dos aparelhos três linhas dominam: Fotos, Mensagens e Dados do Sistema. Apps que transmitem vídeo ou áudio (YouTube, Netflix, Spotify, players de podcast) costumam vir em seguida, porque seus downloads offline e caches podem chegar a vários gigabytes cada um.',
            'Dentro de Fotos, a surpresa geralmente é a proporção entre fotos e vídeos. Uma foto de 12 megapixels salva no formato HEIF da Apple ocupa cerca de 1,5 a 2,5 MB. Um único minuto de vídeo em 4K a 60 quadros por segundo ocupa cerca de 400 MB, segundo as estimativas que o iOS mostra em Ajustes > Câmera > Gravar Vídeo. Um vídeo de família pode, portanto, pesar tanto quanto duzentas fotos, e uma gravação de tela de uma ligação ou de uma partida de jogo pode pesar ainda mais.',
            'A tabela abaixo usa as estimativas da própria Apple. A conclusão é que apagar algumas centenas de fotos comuns raramente mexe na barra, enquanto apagar cinco vídeos e duas gravações de tela pode liberar alguns gigabytes.',
          ],
        },
        {
          title: 'Por que apagar fotos não muda nada por 30 dias',
          content: [
            'Quando você apaga uma foto ou um vídeo no app Fotos, o iOS não o remove. Ele o move para o álbum Apagados Recentemente, onde fica por 30 dias para que uma exclusão acidental possa ser desfeita. Durante esses 30 dias o arquivo ainda existe na memória flash, e o iOS continua contando. É por isso que a barra de armazenamento parece idêntica depois de uma grande sessão de limpeza.',
            'Para recuperar o espaço, abra Fotos > Álbuns, role até Utilitários e abra Apagados Recentemente. Desde o iOS 16 o álbum fica trancado atrás do Face ID ou do seu código. Toque em Selecionar, depois em Apagar Tudo, e confirme. A mudança é imediata: volte em Ajustes > Geral > Armazenamento do iPhone e a barra se atualiza em poucos segundos.',
            'Isso vale para todo app que apaga fotos pela biblioteca de fotos da Apple, apps de limpeza inclusive. O DiskMop para iPhone, por exemplo, avisa isso depois de cada exclusão em vez de mostrar um número de espaço liberado: o valor que ele conseguiria medir logo depois de apagar seria zero, e ele não inventa outro. O ganho real chega quando você esvazia o Apagados Recentemente, e o app leva você ao ponto exato.',
          ],
        },
        {
          title: 'Fotos do iCloud e «Otimizar Armazenamento do iPhone»',
          content: [
            'Se o Fotos do iCloud estiver ativado, Ajustes > seu nome > iCloud > Fotos oferece dois modos. «Baixar e Manter Originais» guarda toda foto e vídeo em tamanho completo no aparelho. «Otimizar Armazenamento do iPhone» mantém os originais em tamanho completo no iCloud e deixa no aparelho apenas versões pequenas, do tamanho da tela, quando o espaço aperta. A maioria das pessoas está no segundo modo sem lembrar de tê-lo escolhido.',
            'No modo Otimizar, apagar fotos do aparelho libera quase nada localmente, porque as cópias locais já são minúsculas. O que você está fazendo de verdade é apagar a foto do iCloud e, portanto, do seu iPad, do Mac e de todos os outros dispositivos conectados, depois da janela de 30 dias do Apagados Recentemente. Para duplicatas e fotos tremidas tudo bem, mas vale saber antes de uma limpeza grande.',
            'A armadilha inversa é mudar para «Baixar e Manter Originais» em um aparelho quase cheio: o iOS vai tentar baixar todos os originais e pode lotar o aparelho por completo. Se um app de limpeza não consegue ler o tamanho real de uma foto, geralmente é por isso. O DiskMop detecta quando o modo Otimizar está ativo amostrando alguns originais e avisa você desde o início, para que a estimativa da tela principal não seja uma promessa que ele não pode cumprir.',
          ],
        },
        {
          title: 'Dados do Sistema, Mensagens e caches de apps',
          content: [
            'Dados do Sistema, chamados de «Outros» em versões antigas do iOS, são tudo o que o iOS não atribui a um app: o cache do Safari, registros, vozes da Siri, fontes baixadas, índices do Spotlight e os arquivos temporários que os apps criam ao atualizar. É normal chegar a 10 a 20 GB em um aparelho usado há um ano. Não há um botão único para limpar, mas três coisas reduzem esse valor de forma confiável: reiniciar o aparelho, limpar os dados do Safari (Ajustes > Safari > Limpar Histórico e Dados dos Sites) e desinstalar, mantendo os dados, os apps que você não usa mais.',
            'O Mensagens é o gigante silencioso. Por padrão, o iOS guarda toda mensagem e todo anexo para sempre, então um aparelho em uso há três anos pode carregar 5 a 10 GB de fotos e vídeos antigos de conversas em grupo. Em Ajustes > Geral > Armazenamento do iPhone > Mensagens, Revisar Anexos Grandes mostra esses itens ordenados por tamanho. Ajustes > Mensagens > Manter Mensagens > 30 Dias impede a pilha de crescer de novo.',
            'Por fim, as fotos que valem ser removidas primeiro raramente são as que você escolheria à mão: sequências e repetições do mesmo momento, capturas de tela de meses atrás, gravações de tela e Live Photos cujo vídeo de três segundos você nunca assiste. O DiskMop varre a biblioteca no aparelho, agrupa as fotos quase idênticas por momento, separa capturas de tela de recibos e documentos, e lista gravações de tela e vídeos 4K compressíveis. Nada vem pré-selecionado; você marca o que sai, e a versão gratuita deixa apagar três itens para ver se os resultados valem o pagamento.',
          ],
        },
      ],
      faq: [
        {
          question: 'Apagar fotos no iPhone libera espaço imediatamente?',
          answer:
            'Não. Fotos e vídeos apagados vão para Apagados Recentemente por 30 dias e continuam contando no armazenamento. Abra Fotos > Álbuns > Apagados Recentemente, toque em Selecionar e depois em Apagar Tudo para liberar o espaço na hora.',
        },
        {
          question: 'Apagar fotos no meu iPhone apaga também do iCloud?',
          answer:
            'Sim, se o Fotos do iCloud estiver ativado. A biblioteca é sincronizada, então uma foto apagada no aparelho some do iCloud e dos seus outros dispositivos depois do período de 30 dias do Apagados Recentemente. Desative o Fotos do iCloud antes se quiser manter a cópia na nuvem.',
        },
        {
          question: 'Por que os Dados do Sistema ocupam 20 GB no meu iPhone?',
          answer:
            'Dados do Sistema são caches, registros e arquivos temporários que o iOS gerencia sozinho, e 10 a 20 GB é normal em um aparelho usado há um ano ou mais. Reiniciar, limpar o histórico e os dados dos sites do Safari e desinstalar apps sem uso são as formas confiáveis de reduzir.',
        },
        {
          question: 'Um app de limpeza para iPhone precisa enviar minhas fotos para algum lugar?',
          answer:
            'Não deveria. Encontrar duplicatas, fotos tremidas ou capturas de tela pode ser feito inteiramente no aparelho com os frameworks da própria Apple. O DiskMop funciona sem servidor e sem conta, e o selo de privacidade dele na App Store diz «Dados Não Coletados».',
        },
        {
          question: 'É seguro esvaziar o Apagados Recentemente?',
          answer:
            'Sim, desde que você realmente quisesse apagar o que está lá. Tudo o que está no álbum some de forma permanente assim que você toca em Apagar Tudo, e não há mais recuperação a não ser por um backup.',
        },
      ],
      verdict: [
        'Um iPhone que continua cheio depois de uma limpeza não está com defeito; ele está seguindo duas regras que a maioria das pessoas nunca vê. Fotos apagadas esperam 30 dias em Apagados Recentemente, e no modo Otimizar os originais nunca estiveram no aparelho. Esvazie o álbum, leia Ajustes > Geral > Armazenamento do iPhone de cima para baixo, e vá atrás de vídeos, gravações de tela e anexos do Mensagens antes das fotos comuns.',
        'O DiskMop para iPhone foi construído em torno dessas regras, não contra elas. Ele varre no aparelho, agrupa fotos parecidas, separa capturas de tela de documentos, lista gravações de tela e vídeos grandes, e depois de cada exclusão diz com honestidade que o espaço volta quando o Apagados Recentemente é esvaziado. A varredura é gratuita, três exclusões são gratuitas, e a versão completa é uma compra única, sem assinatura.',
      ],
      ctaText: 'Baixe o DiskMop para iPhone na App Store',
    },
    ja: {
      title: 'iPhone のストレージがいっぱい? 写真を削除しても空き容量が増えない理由 (と本当に効く方法)',
      metaDescription:
        'iPhone で写真を削除したのにストレージが変わらない? 削除した写真は 30 日間「最近削除した項目」に残り、iCloud の最適化が残りを隠しています。本当に空き容量が増える方法を解説。',
      subtitle: '「最近削除した項目」、iCloud の最適化、システムデータを俗説なしで解説',
      intro: [
        '短い答え: iPhone で写真を削除しても 30 日間は空き容量が 1 バイトも増えません。削除した写真とビデオはまず「最近削除した項目」アルバムに移動するからです。このアルバムを空にすれば、空き容量はすぐに表示されます。それでも増えない場合は iCloud の「iPhone のストレージを最適化」がオンになっていて、フルサイズの写真はそもそも端末上に存在しなかったということです。本当の重さは別の場所にあります。ビデオ、画面収録、メッセージの添付ファイル、あるいはシステムデータです。',
        'この記事では、iPhone のストレージを実際に占めているものを、後悔が最も少なく、最も多くの容量を取り戻せる順番で見ていきます。写真とビデオのサイズには Apple 自身の数値を使い、削除が無意味に感じられる原因になる 2 つの設定を説明し、今日すぐに安全に消せる項目を示します。',
      ],
      keyTakeaways: [
        '削除した写真とビデオは 30 日間、写真 > アルバム > 最近削除した項目 に残り、アルバムを空にするまでストレージ使用量に数えられ続けます。',
        'iCloud 写真を「iPhone のストレージを最適化」に設定していると、端末には小さなプレビューしか残りません。それを削除してもローカルの空きはほとんど増えず、写真はすべてのデバイスから消えます。',
        '4K/60fps のビデオ 1 分は約 400 MB で、普通の写真およそ 200 枚分に相当します。ビデオと画面収録は、たいてい写真より重いのです。',
        'システムデータ (以前の「その他」) は iOS が自分で管理するキャッシュとログです。消去ボタンはありませんが、再起動、Safari のデータ消去、使っていない App を取り除くことで小さくなります。',
        'メッセージは初期設定ではすべての添付ファイルを永久に保存します。設定 > メッセージ > メッセージの保存期間 > 30 日間 にすると、長く使った端末では数ギガバイト空くことがあります。',
        'クリーナー App は「最近削除した項目」を迂回できません。写真を削除した直後に容量が空いたと表示するものは、測定値ではなく推定値を見せています。',
      ],
      dataTable: {
        caption: 'iPhone でよくあるメディアのおおよそのサイズ (ビデオは Apple の推定値、写真は一般的な値)',
        columns: ['項目', '一般的なサイズ'],
        rows: [
          ['12 MP の写真 (HEIF)', '1.5〜2.5 MB'],
          ['48 MP の ProRAW 写真', '50〜80 MB'],
          ['Live Photos', '写真 + 約 3 MB のビデオ'],
          ['スクリーンショット (PNG)', '2〜8 MB'],
          ['ビデオ 1 分、1080p / 30 fps', '約 60 MB'],
          ['ビデオ 1 分、4K / 30 fps', '約 170 MB'],
          ['ビデオ 1 分、4K / 60 fps', '約 400 MB'],
          ['画面収録 1 分', '100〜200 MB'],
        ],
      },
      howTo: {
        name: '写真を削除しても効果がなかったときに iPhone の空き容量を増やす',
        totalTime: 'PT15M',
        steps: [
          {
            name: '何が容量を使っているか確認する',
            text: '設定 > 一般 > iPhoneストレージ を開きます。バーの計算が終わるのを待ってから、リストを上から読みます。サイズ順に並んでいます。たいていは写真、メッセージ、システムデータが上位 3 つです。',
          },
          {
            name: '「最近削除した項目」を空にする',
            text: '写真 App でアルバムを開き、ユーティリティまでスクロールして「最近削除した項目」を開きます。Face ID でロックを解除し、「選択」、続いて「すべて削除」をタップします。先ほど空けたはずの容量が実際に戻ってくるのは、この手順です。',
          },
          {
            name: 'iCloud 写真の設定を確認する',
            text: '設定 > ユーザ名 > iCloud > 写真 を開きます。「iPhone のストレージを最適化」が選ばれていれば、フルサイズのオリジナルの大半は iCloud にあり、端末から削除してもローカルのストレージはほとんど変わりません。主に空くのは iCloud の容量です。',
          },
          {
            name: '大きなビデオを見直す',
            text: '設定 > 一般 > iPhoneストレージ に戻り、写真を開きます。iOS はそこに個人の大きなビデオを一覧表示します。画面収録と 4K のクリップがたいてい上位に来ますので、もう必要ないものを削除します。',
          },
          {
            name: 'メッセージの添付ファイルを減らす',
            text: 'iPhoneストレージでメッセージを開き、「サイズの大きい添付ファイルを確認」からチャットで送られた古いビデオや写真を削除します。続いて 設定 > メッセージ > メッセージの保存期間 を 30 日間か 1 年間に設定します。',
          },
          {
            name: 'めったに開かない App を取り除く',
            text: 'iPhoneストレージのリストで、何か月も使っていない大きな App をタップし、「Appを取り除く」を選びます。App 本体は削除されますが書類は残り、ワンタップで再インストールできます。',
          },
        ],
      },
      sections: [
        {
          title: 'iPhone の容量は実際にどこへ消えているのか',
          content: [
            '設定 > 一般 > iPhoneストレージ は、ストレージの唯一の正直な地図です。何かを削除する前に、ここをじっくり読む価値があります。リストはサイズ順で、ほとんどの端末では写真、メッセージ、システムデータの 3 行が大半を占めます。ビデオや音声をストリーミングする App (YouTube、Netflix、Spotify、ポッドキャストプレーヤー) がその後に続くことが多いのは、オフラインのダウンロードとキャッシュがそれぞれ数ギガバイトに達しうるからです。',
            '写真の内訳で驚かされるのは、たいてい写真とビデオの比率です。Apple の HEIF 形式で保存された 12 メガピクセルの写真は約 1.5〜2.5 MB です。一方、設定 > カメラ > ビデオ撮影 で iOS が示す推定値によれば、4K / 60 fps のビデオはわずか 1 分で約 400 MB になります。家族のビデオ 1 本が写真 200 枚分の重さになり得るわけで、通話やゲームの画面収録はそれ以上になることもあります。',
            '下の表は Apple 自身の推定値に基づいています。要するに、普通の写真を数百枚削除してもバーはほとんど動きませんが、ビデオ 5 本と画面収録 2 本を削除すれば数ギガバイト空くことがあるのです。',
          ],
        },
        {
          title: '写真を削除しても 30 日間は何も変わらない理由',
          content: [
            '写真 App で写真やビデオを削除しても、iOS はそれを取り除きません。誤った削除を取り消せるように「最近削除した項目」アルバムへ移動し、そこに 30 日間残します。その 30 日間、ファイルはフラッシュストレージ上に存在し続け、iOS は使用量に数え続けます。大掃除をしたあともストレージのバーがまったく同じに見えるのはこのためです。',
            '容量を取り戻すには、写真 > アルバム を開き、下のユーティリティまでスクロールして「最近削除した項目」を開きます。iOS 16 以降、このアルバムは Face ID かパスコードでロックされています。「選択」、続いて「すべて削除」をタップし、確認します。変化は即座です。設定 > 一般 > iPhoneストレージ に戻れば、バーは数秒以内に更新されます。',
            'これは、クリーナー App を含め、Apple の写真ライブラリを通じて写真を削除するすべての App に当てはまります。たとえば iPhone 版 DiskMop は、削除のたびに空いた容量の数字を出す代わりに、この事実を伝えます。削除直後に測定できる数値はゼロなので、それをでっち上げないのです。本当の効果は「最近削除した項目」を空にしたときに現れ、App はその場所へ直接案内します。',
          ],
        },
        {
          title: 'iCloud 写真と「iPhone のストレージを最適化」',
          content: [
            'iCloud 写真がオンの場合、設定 > ユーザ名 > iCloud > 写真 には 2 つのモードがあります。「オリジナルをダウンロード」は、すべての写真とビデオをフルサイズで端末に保存します。「iPhone のストレージを最適化」は、フルサイズのオリジナルを iCloud に置き、容量が逼迫すると端末には画面サイズの小さな版だけを残します。ほとんどの人は、選んだ覚えがないまま後者のモードになっています。',
            '最適化モードでは、端末から写真を削除してもローカルの空きはほとんど増えません。ローカルのコピーはもともと極小だからです。実際に行っているのは、30 日間の「最近削除した項目」の期間を経て iCloud から、つまり iPad や Mac、サインイン中の他のすべてのデバイスから写真を消すことです。重複やブレた写真なら問題ありませんが、大掃除の前に知っておく価値があります。',
            '逆の落とし穴は、ほぼ満杯の端末で「オリジナルをダウンロード」に切り替えることです。iOS はすべてのオリジナルをダウンロードしようとし、端末を完全に埋め尽くすことがあります。クリーナー App が写真の実サイズを読めないとしたら、たいていこれが原因です。DiskMop はいくつかのオリジナルをサンプリングして最適化モードが有効かどうかを検出し、最初に警告します。メイン画面の推定値が、守れない約束にならないようにするためです。',
          ],
        },
        {
          title: 'システムデータ、メッセージ、App のキャッシュ',
          content: [
            'システムデータは、古い iOS では「その他」と呼ばれていたもので、iOS がどの App にも割り当てないすべてです。Safari のキャッシュ、ログ、Siri の声、ダウンロードしたフォント、Spotlight のインデックス、App がアップデート中に作る一時ファイルなどです。1 年使った端末で 10〜20 GB に達するのは普通です。一括で消すボタンはありませんが、確実に小さくする方法が 3 つあります。端末の再起動、Safari のデータ消去 (設定 > Safari > 履歴とWebサイトデータを消去)、そして使わなくなった App を取り除くことです。',
            'メッセージは静かな巨人です。iOS は初期設定ですべてのメッセージと添付ファイルを永久に保存するため、3 年使った端末はグループチャット由来の古い写真とビデオを 5〜10 GB 抱えていることがあります。設定 > 一般 > iPhoneストレージ > メッセージ の「サイズの大きい添付ファイルを確認」で、サイズ順に一覧できます。設定 > メッセージ > メッセージの保存期間 > 30 日間 にすれば、山が再び積み上がるのを防げます。',
            '最後に、最初に消す価値のある写真は、手作業で選ぶものとはたいてい違います。同じ瞬間のバーストや撮り直し、何か月も前のスクリーンショット、画面収録、3 秒のビデオを一度も見ない Live Photos です。DiskMop は端末上でライブラリをスキャンし、ほぼ同一の写真を瞬間ごとにまとめ、スクリーンショットをレシートや書類と分け、画面収録と圧縮できる 4K ビデオを一覧にします。何も事前に選択されていません。消すものはあなたがチェックし、無料版では 3 項目まで削除して、結果が支払いに値するかを確かめられます。',
          ],
        },
      ],
      faq: [
        {
          question: 'iPhone で写真を削除するとすぐに空き容量が増えますか?',
          answer:
            'いいえ。削除した写真とビデオは 30 日間「最近削除した項目」に移り、引き続きストレージに数えられます。すぐに空けるには、写真 > アルバム > 最近削除した項目 を開き、「選択」、続いて「すべて削除」をタップします。',
        },
        {
          question: 'iPhone で写真を削除すると iCloud からも消えますか?',
          answer:
            'iCloud 写真がオンなら消えます。ライブラリは同期されているので、端末で削除した写真は 30 日間の「最近削除した項目」の期間を過ぎると iCloud と他のデバイスからも消えます。クラウドのコピーを残したいなら、先に iCloud 写真をオフにしてください。',
        },
        {
          question: 'iPhone のシステムデータが 20 GB もあるのはなぜですか?',
          answer:
            'システムデータは iOS が自分で管理するキャッシュ、ログ、一時ファイルで、1 年以上使った端末なら 10〜20 GB は普通です。再起動、Safari の履歴と Web サイトデータの消去、使っていない App を取り除くことが、確実に減らす方法です。',
        },
        {
          question: 'iPhone のクリーナー App は写真をアップロードする必要がありますか?',
          answer:
            '必要ないはずです。重複、ブレた写真、スクリーンショットの検出は Apple 自身のフレームワークで端末内だけで完結できます。DiskMop はサーバーもアカウントもなしで動作し、App Store のプライバシーラベルは「データが収集されません」です。',
        },
        {
          question: '「最近削除した項目」を空にしても安全ですか?',
          answer:
            '中身を本当に削除するつもりだったなら安全です。「すべて削除」をタップした時点でアルバム内のすべてが完全に消え、バックアップ以外に復元する手段はありません。',
        },
      ],
      verdict: [
        '掃除のあとも満杯のままの iPhone は壊れているのではなく、ほとんどの人が目にしない 2 つのルールに従っているだけです。削除した写真は「最近削除した項目」で 30 日間待ち、最適化モードではオリジナルはそもそも端末上にありません。アルバムを空にし、設定 > 一般 > iPhoneストレージ を上から読み、普通の写真より先にビデオ、画面収録、メッセージの添付ファイルに手を付けてください。',
        'iPhone 版 DiskMop は、このルールに逆らうのではなく、ルールを前提に作られています。端末上でスキャンし、似た写真をまとめ、スクリーンショットを書類と分け、画面収録と大きなビデオを一覧にし、削除のたびに「容量は最近削除した項目を空にしたときに戻る」と正直に伝えます。スキャンは無料、3 回の削除も無料、フル版はサブスクリプションなしの買い切りです。',
      ],
      ctaText: 'App Store で iPhone 版 DiskMop を入手',
    },
  },
};
