import type { Article } from '../types';

export const clearCacheAndroid: Article = {
  slug: 'clear-cache-android',
  type: 'guide',
  category: 'Mobile',
  date: '2026-09-17',
  readingTime: 7,
  content: {
    tr: {
      title:
        'Android\'de Önbellek Nasıl Temizlenir: Her Uygulama, Ne Silinir, Ne Zaman Yapmaya Değer',
      metaDescription:
        'Android 8 "tüm önbelleği temizle" düğmesini kaldırdı. Uygulama önbelleği nasıl temizlenir, "Depolama alanını temizle"den farkı ne ve neden hızlandırmaz.',
      subtitle:
        'Önbellek ile veri farkı, Pixel, Samsung ve Xiaomi\'de ayar yolu ve temizleyici uygulamaların gerçekte yaptığı',
      intro: [
        'Kısa cevap: Android\'de bir uygulamanın önbelleğini temizlemek güvenlidir, hiçbir şey kaybettirmez ve uygulama başına Ayarlar > Uygulamalar > uygulama > Depolama alanı ve önbellek > Önbelleği temizle yolundan yapılır. Android 8\'den beri sistem genelinde bir "tüm önbellekleri temizle" düğmesi yok; bu yüzden her uygulama için tek seferde yapmanın tek yolu bir temizleyici uygulamadır. Önbelleği temizlemek telefonu hızlandırmaz; yer açar ve yalnızca depolama dolmaya yaklaştığında önemlidir.',
        'Bu rehber önbellek ile uygulama verisi arasındaki farkı açıklıyor, en yaygın üç Android arayüzünde düğmenin nerede olduğunu gösteriyor, önbelleği gerçekten gigabaytlara ulaşan uygulamaları listeliyor ve yapmaya değer olanı pazarlama olandan ayırıyor.',
      ],
      keyTakeaways: [
        'Önbellek, uygulamanın yeniden oluşturabildiği geçici verilerdir: küçük resimler, ön izlemeler, indirilmiş görseller. Temizlemek sizi asla oturumdan çıkarmaz, ayarları değiştirmez.',
        'Depolama alanını temizle (Verileri temizle olarak da geçer) farklıdır: uygulamayı yeni kurulmuş hâline döndürür, oturumunuzu kapatır ve çevrimdışı içeriği siler.',
        'Android 8 (Oreo), tüm önbellekleri tek seferde temizleyen "Önbelleğe alınan veriler" satırını kaldırdı; o günden beri ayar uygulama başınadır.',
        'Olağan suçlular tarayıcılar, sosyal medya ve yayın uygulamalarıdır: Chrome, Instagram, YouTube ve Spotify önbelleklerinin her biri birkaç gigabayta ulaşabilir.',
        'Önbellek temizlemek Android\'i hızlandırmaz; performans yalnızca depolama yaklaşık %90\'ın üzerinde dolduğunda düşer ve RAM hızlandırıcılar durumu kötüleştirir.',
        'Galerilerin kullandığı küçük resim önbelleği tek başına gigabaytlara ulaşabilir ve silinmesi güvenlidir; siz gezindikçe yeniden oluşturulur.',
      ],
      howTo: {
        name: 'Android telefonda uygulama önbelleğini temizleme',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Önbelleği en büyük uygulamaları bulun',
            text: 'Ayarlar > Depolama alanı yolunu açıp Uygulamalar\'a dokunun (Samsung\'da Ayarlar > Cihaz bakımı > Depolama > Uygulamalar). Liste boyuta göre sıralıdır; önbellek temizlemenin işe yaradığı yer en üstteki kayıtlardır.',
          },
          {
            name: 'Tek bir uygulamanın önbelleğini temizleyin',
            text: 'Uygulamaya dokunun, ardından Depolama alanı ve önbellek (Pixel), Depolama (Samsung) ya da Verileri temizle (Xiaomi ve HyperOS) seçeneğine girip Önbelleği temizle\'yi seçin. Uygulamayı sıfırlamak istemiyorsanız Depolama alanını temizle veya Tüm verileri temizle\'ye dokunmayın.',
          },
          {
            name: 'Tarayıcı önbelleğini temizleyin',
            text: 'Chrome\'da üç noktaya dokunup Ayarlar > Gizlilik ve güvenlik > Tarama verilerini temizle yolunu izleyin, yalnızca Önbelleğe alınan resimler ve dosyalar kutusunu işaretleyip temizleyin. Web sitelerinden çıkış yapmak istemiyorsanız çerezleri işaretlemeyin.',
          },
          {
            name: 'Yayın uygulamalarında çevrimdışı içeriği kontrol edin',
            text: 'Spotify\'da Ayarlar > Depolama ekranı önbelleği ve indirilen müziği ayrı gösterir; Önbelleği temizle indirmelerinize dokunmaz. YouTube ve Netflix çevrimdışı videoları İndirilenler altında tutar; izlediklerinizi silin.',
          },
          {
            name: 'Küçük resim önbelleğini, kurulum dosyalarını ve artıkları kaldırın',
            text: '.thumbnails klasörüne, İndirilenler\'deki eski APK kurulum dosyalarına, geçici dosyalara ve boş klasörlere Ayarlar\'dan ulaşılamaz. Disk Mop\'un Android sürümü bunları tek dokunuşla temizler ve aynı ekranda uygulama önbelleklerini boyuta göre sıralar.',
          },
          {
            name: 'Depolama alanını temizle\'den önce durun',
            text: 'Bir uygulama düzgün çalışmıyorsa telefonu yeniden başlatmak ya da uygulamayı güncellemek genellikle sorunu çözer. Depolama alanını temizle\'yi yalnızca son çare olarak, oturum bilgilerinizin ve çevrimdışı içeriğinizin geri getirilebilir olduğundan emin olduktan sonra kullanın.',
          },
        ],
      },
      sections: [
        {
          title: 'Önbellek ve Depolama: Önemli Olan Fark',
          content: [
            'Her Android uygulaması iki tür dosya tutar. Önbellek, uygulamanın yeniden indirebileceği veya üretebileceği şeyleri barındırır: Instagram\'daki görsel ön izlemeleri, bir haber uygulamasındaki makale metni, galerinin kaydırırken gösterdiği küçük resimler. Bazen veri olarak etiketlenen uygulama depolaması ise yeniden oluşturulamayanları tutar: oturumunuz, ayarlarınız, çevrimdışı indirmeler ve gönderilmemiş taslaklar.',
            'Bu yüzden önbelleği temizlemek zararsızdır. Uygulama bir sonraki açılışta ön izlemelerini yeniden oluştururken biraz yavaş başlar, hepsi bu. Depolamayı temizlemek ise bir sıfırlamadır: uygulama yeni kurulmuş gibi davranır, oturumunuz kapanır; çevrimdışı haritalar, indirilmiş çalma listeleri ve yerel belgeler gider. Android iki düğmeyi yan yana koyar; insanların yer açmaya çalışırken veri kaybetmesinin sebebi budur.',
            'Aşağıdaki tablo her işlemin neyi kaldırdığını özetliyor. Tereddüt ederseniz önce önbelleği temizleyin ve Ayarlar > Depolama alanı ekranına yeniden bakın; üstüne bir de depolamayı temizlemenin kazancı genellikle küçük, bedeli yüksektir.',
          ],
        },
        {
          title: 'Pixel, Samsung ve Xiaomi\'de Düğme Nerede',
          content: [
            'Android\'de, 8 (Oreo) sürümü Ayarlar > Depolama alanı ekranındaki "Önbelleğe alınan veriler" satırını kaldırdığından beri genel bir önbellek düğmesi yok. Pixel\'de veya saf Android\'e yakın herhangi bir telefonda yol şudur: Ayarlar > Uygulamalar > Tüm uygulamaları gör > uygulama > Depolama alanı ve önbellek > Önbelleği temizle. Ayarlar > Depolama alanı > Uygulamalar aynı uygulamaları boyuta göre sıralı gösterir; ağır olanları bulmanın en hızlı yolu budur.',
            'Samsung\'un One UI arayüzü düğmeyi bir seviye aşağı taşır: Ayarlar > Uygulamalar > uygulama > Depolama > Önbelleği temizle, yanında da Verileri temizle düğmesi. Cihaz bakımı (Ayarlar > Cihaz bakımı > Depolama) boyuta göre sıralı bir Uygulamalar görünümü ve kendi temizlik önerilerini sunar; bunlar güvenlidir ama çoğunlukla Ayarlar\'ın zaten yaptığını yineler.',
            'MIUI veya HyperOS kullanan Xiaomi, Redmi ve POCO telefonlarda yol Ayarlar > Uygulamalar > Uygulamaları yönet > uygulama > Verileri temizle\'dir; bu, Önbelleği temizle ve Tüm verileri temizle seçeneklerini ayrı ayrı sunan küçük bir menü açar. Yerleşik Temizleyici uygulaması da önbellekleri hedefler, ancak silme önerilerinde agresiftir ve reklam gösterir; onaylamadan önce listesini okuyun.',
          ],
        },
        {
          title: 'Gerçekten Önemli Olan Önbellekler',
          content: [
            'Çoğu uygulama birkaç megabaytlık önbellek tutar ve bunları temizlemek dokunma zahmetine değmez. Gigabaytlar birkaç kategoride toplanır. Tarayıcılar: Chrome rutin olarak 1-3 GB önbelleğe alınmış sayfa ve görsel tutar. Sosyal uygulamalar: Instagram, TikTok, Facebook ve X kaydırıp geçtiğiniz her videoyu ve görseli önbelleğe alır; yoğun kullanıcıların telefonunda 2-5 GB sık görülür. Haritalar: Google Maps harita karolarını önbelleğe alır ve 1 GB\'ı aşabilir.',
            'Yayın uygulamaları özel bir durumdur, çünkü önbelleği çevrimdışı indirmelerle karıştırırlar. Spotify\'ın Ayarlar > Depolama ekranı ikisini ayırır ve yalnızca önbelleği 5 GB\'ı geçebilir. YouTube, Netflix ve podcast uygulamaları indirilmiş bölümleri önbellek değil çevrimdışı içerik olarak tutar; bunlar Ayarlar\'dan değil, uygulamanın İndirilenler bölümünden temizlenir.',
            'İki önbellek hiçbir uygulamanın ayarlarında görünmez. Galeri küçük resim önbelleği (DCIM dizinindeki gizli .thumbnails klasörü) her fotoğrafla büyür ve birkaç gigabayta ulaşabilir; yandan yükleme için indirilen kurulum dosyaları (.apk) ise kurulumdan çok sonra bile İndirilenler\'de durur. İkisi de güvenle silinebilir ve ikisi de geçici dosyalar ile boş klasörlerle birlikte Disk Mop\'un tek dokunuşlu çöp temizliğinin kapsamındadır; her öğenin boyutu onaylamadan önce gösterilir.',
          ],
        },
        {
          title: 'Önbellek Temizlemek Android\'i Hızlandırır mı?',
          content: [
            'Hayır; hızlandırdığı inancı, bu kadar çok temizleyici uygulamanın var olma sebebidir. Önbellek uygulamayı hızlandırmak için vardır; temizledikten sonra uygulama az önce kaybettiğini yeniden indirmek ya da üretmek zorunda kalır, dolayısıyla bir sonraki açılış daha hızlı değil daha yavaş olur. Android belleği kendisi yönetir ve gerektiğinde arka plan uygulamalarını kapatır; onları öldüren RAM hızlandırıcı uygulamalar sistemi her şeyi yeniden yüklemeye zorlar ve pili tüketir.',
            'Depolama performansı yalnızca belirli bir durumda etkiler: telefon yaklaşık %90\'ın üzerinde dolduğunda flaş depolama yazacak boş blok bulamaz ve her kayıt işlemi yavaşlar. Önbellekleri temizlemenin, büyük videoları silmenin ve eski indirmeleri kaldırmanın gözle görülür fark yarattığı an budur; önbellek yavaş olduğu için değil, boş alan bittiği için.',
            'Dürüst kural şudur: önbelleği bir takvime göre değil, yere ihtiyacınız olduğunda temizleyin. Disk Mop bu kurala uyar: telefonu hızlandırdığını iddia etmez, her öğenin depolamada ne kadar yer tuttuğunu gösterir; uygulama yöneticisi önbellekleri boyuta göre ve 30 gündür açmadığınız uygulamaları listeler, karar sizindir.',
          ],
        },
      ],
      dataTable: {
        caption: 'Android\'de her depolama işleminin kaldırdıkları',
        columns: ['İşlem', 'Ne silinir', 'Oturum kapanır mı?', 'Ayarlar korunur mu?'],
        rows: [
          ['Önbelleği temizle', 'Geçici dosyalar, küçük resimler, indirilmiş ön izlemeler', 'Hayır', 'Evet'],
          ['Depolama alanını temizle / Verileri temizle', 'Uygulamanın telefonda sakladığı her şey, çevrimdışı içerik dahil', 'Evet', 'Hayır'],
          ['Kaldır', 'Uygulama ve verileri; Android/media altında kalan klasörler hariç', 'Evet', 'Hayır'],
          ['Boşaltma veya Arşivleme (Android 15+)', 'Uygulamanın kodu; veri ve ayarlar yeniden yükleme için saklanır', 'Hayır', 'Evet'],
        ],
      },
      faq: [
        {
          question: 'Android\'de önbelleği ne sıklıkla temizlemeliyim?',
          answer:
            'Yalnızca yere ihtiyacınız olduğunda. Önbellek uygulamaları hızlandırır; takvime göre temizlemek uygulamaları aynı veriyi yeniden indirmeye zorlar. Telefon uyarı verdiğinde Ayarlar > Depolama alanı ekranına bakın ve en büyük önbellekleri o zaman temizleyin.',
        },
        {
          question: 'Tüm uygulamaların önbelleğini temizlemek güvenli mi?',
          answer:
            'Evet. Önbellek tanımı gereği uygulamanın yeniden oluşturabildiği veridir. Oturumunuz kapanmaz, hiçbir ayar değişmez. Uygulamayı sıfırlamak istemiyorsanız kaçınmanız gereken seçenek Depolama alanını temizle veya Verileri temizle\'dir.',
        },
        {
          question: 'Temizledikten sonra önbellek neden geri geliyor?',
          answer:
            'Çünkü uygulama siz kullandıkça onu yeniden oluşturur; önbelleğin amacı budur. Birkaç yüz megabayta geri büyümesi normaldir. Bir uygulama günler içinde gigabaytları yeniden oluşturuyorsa, kendi ayarlarında çevrimdışı ya da önbellek sınırı olup olmadığına bakın.',
        },
        {
          question: 'Hız artışı vadeden temizleyici uygulamalar işe yarar mı?',
          answer:
            'Hayır. Arka plan uygulamalarını kapatmak ve RAM\'i boşaltmak Android\'in her şeyi yeniden yüklemesine ve daha çok pil harcamasına yol açar. İşe yarar bir temizleyici depolama alanı açar ve ne sildiğini gösterir; hız vadeden, reklam gösteren veya hesap isteyenlere karşı temkinli olun.',
        },
      ],
      verdict: [
        'Android\'de önbellek temizlemek güvenlidir, uygulama başına yapılır ve takvime göre değil, depolama azaldığında yapmaya değer. Asıl alan tarayıcılarda, sosyal uygulamalarda, yayın önbelleklerinde, küçük resim klasöründe ve unutulmuş kurulum dosyalarındadır; kaçınılacak tek düğme uygulamayı sıfırlayan Depolama alanını temizle\'dir.',
        'Disk Mop\'un Android sürümü bunların hepsini tek ekrana koyar: boyuta göre sıralı uygulama önbellekleri, 30 gündür kullanılmayan uygulamalar ve küçük resimler, geçici dosyalar, kurulum dosyaları ve boş klasörler için tek dokunuşlu çöp temizliği. Silmeden önce her boyutu gösterir, sizin yerinize hiçbir şey seçmez ve telefonu hızlandırıyormuş gibi yapmaz.',
      ],
      ctaText: 'Disk Mop\'u Google Play\'den edinin',
    },
    en: {
      title: 'How to Clear Cache on Android: Every App, What It Deletes and When It Is Worth It',
      metaDescription:
        'Android has had no \'clear all cache\' button since version 8. How to clear app cache on any phone, how it differs from Clear storage, and why it won\'t go faster.',
      subtitle:
        'Cache versus data, the settings path on Pixel, Samsung and Xiaomi, and what cleaner apps really do',
      intro: [
        'Short answer: on Android, clearing an app\'s cache is safe, loses nothing and is done per app under Settings > Apps > the app > Storage and cache > Clear cache. There has been no system-wide "clear all caches" button since Android 8, so a cleaner app is the only way to do it for every app at once. Clearing cache does not make a phone faster; it frees space, and only matters when storage is nearly full.',
        'This guide explains the difference between cache and app data, shows where the button is on the three most common Android skins, lists the apps whose caches actually reach gigabytes, and separates what is worth doing from what is marketing.',
      ],
      keyTakeaways: [
        'Cache is temporary data an app can rebuild: thumbnails, previews, downloaded images. Clearing it never signs you out or changes settings.',
        'Clear storage (also called Clear data) is different: it resets the app to a fresh install, signs you out and deletes offline content.',
        'Android 8 (Oreo) removed the Cached data line that cleared every cache at once; since then the setting is per app.',
        'Browsers, social apps and streaming apps are the usual culprits: Chrome, Instagram, YouTube and Spotify caches can each reach several gigabytes.',
        'Clearing cache does not speed up Android; performance only suffers when storage is more than about 90 percent full, and RAM boosters make things worse.',
        'The thumbnail cache used by galleries can grow to gigabytes on its own and is safe to delete; it is rebuilt as you browse.',
      ],
      howTo: {
        name: 'Clear app cache on an Android phone',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Find the apps with the largest cache',
            text: 'Open Settings > Storage and tap Apps (on Samsung, Settings > Device care > Storage > Apps). The list is sorted by size; the top entries are where clearing cache pays off.',
          },
          {
            name: 'Clear the cache of one app',
            text: 'Tap the app, then Storage and cache (Pixel), Storage (Samsung) or Clear data (Xiaomi and HyperOS) and choose Clear cache. Do not tap Clear storage or Clear data unless you want to reset the app.',
          },
          {
            name: 'Clear the browser cache',
            text: 'In Chrome, tap the three dots > Settings > Privacy and security > Clear browsing data, tick Cached images and files only, and clear. Leave cookies ticked off unless you want to sign out of websites.',
          },
          {
            name: 'Check streaming apps for offline content',
            text: 'In Spotify, Settings > Storage shows the cache and the downloaded music separately; Clear cache keeps your downloads. YouTube and Netflix keep offline videos under Downloads; delete the ones you have watched.',
          },
          {
            name: 'Remove thumbnail cache, installers and leftovers',
            text: 'The .thumbnails folder, old APK installers in Downloads, temporary files and empty folders are not reachable from Settings. Disk Mop for Android clears them in one tap and lists app caches sorted by size on the same screen.',
          },
          {
            name: 'Stop before Clear storage',
            text: 'If an app misbehaves, restarting the phone or updating the app usually fixes it. Use Clear storage only as a last resort, after making sure your login details and offline content are recoverable.',
          },
        ],
      },
      sections: [
        {
          title: 'Cache Versus Storage: the Difference That Matters',
          content: [
            'Every Android app keeps two kinds of files. Cache holds things the app can download or generate again: image previews in Instagram, article text in a news app, the thumbnails a gallery shows while scrolling. App storage, sometimes labeled data, holds things that cannot be rebuilt: your login session, settings, offline downloads and unsent drafts.',
            'Clearing cache is therefore harmless. The app starts a little slower next time while it rebuilds its previews, and that is all. Clearing storage is a reset: the app behaves as if just installed, you are signed out, and offline maps, downloaded playlists and local documents are gone. Android puts both buttons next to each other, which is why people lose data while trying to save space.',
            'The table below summarizes what each action removes. If in doubt, clear cache first and look at Settings > Storage again; the gain from clearing storage on top of it is usually small and the cost is high.',
          ],
        },
        {
          title: 'Where the Button Is on Pixel, Samsung and Xiaomi',
          content: [
            'Android has not had a global cache button since version 8 (Oreo) removed the Cached data line from Settings > Storage. On a Pixel or any phone close to stock Android, the path is Settings > Apps > See all apps > the app > Storage and cache > Clear cache. Settings > Storage > Apps shows the same apps sorted by size, which is the fastest way to find the heavy ones.',
            'Samsung\'s One UI moves the button one level down: Settings > Apps > the app > Storage > Clear cache, with a Clear data button beside it. Device care (Settings > Device care > Storage) offers an Apps view sorted by size and its own cleanup suggestions, which are safe but mostly duplicate what Settings already does.',
            'Xiaomi, Redmi and POCO phones on MIUI or HyperOS use Settings > Apps > Manage apps > the app > Clear data, which opens a small menu with Clear cache and Clear all data as separate choices. The built-in Cleaner app also targets caches, but it is aggressive about recommending deletions and shows ads; read its list before confirming.',
          ],
        },
        {
          title: 'The Caches That Actually Matter',
          content: [
            'Most apps keep caches of a few megabytes, and clearing them is not worth the tapping. The gigabytes sit in a handful of categories. Browsers: Chrome routinely holds 1 to 3 GB of cached pages and images. Social apps: Instagram, TikTok, Facebook and X cache every video and image you scroll past, and 2 to 5 GB is common on a heavy user\'s phone. Maps: Google Maps caches map tiles and can pass 1 GB.',
            'Streaming apps are a special case because they mix cache with offline downloads. Spotify\'s Settings > Storage separates the two, and its cache alone can exceed 5 GB. YouTube, Netflix and podcast apps keep downloaded episodes as offline content rather than cache; those are cleared from the app\'s Downloads section, not from Settings.',
            'Two caches never appear in any app\'s settings. The gallery thumbnail cache (a hidden .thumbnails folder in the DCIM directory) grows with every photo and can reach several gigabytes, and installer files (.apk) downloaded for sideloading sit in Downloads long after installation. Both are safe to delete and both are covered by Disk Mop\'s one-tap junk clean, along with temporary files and empty folders, with the size of each item shown before you confirm.',
          ],
        },
        {
          title: 'Does Clearing Cache Speed Up Android?',
          content: [
            'No, and the belief that it does is the reason so many cleaner apps exist. A cache exists to make the app faster; after you clear it, the app has to download or regenerate what it just lost, so the next launch is slower, not faster. Android manages memory itself and closes background apps when it needs to; RAM booster apps that kill them force the system to reload everything and drain the battery.',
            'Storage does affect performance in one specific case: when the phone is more than about 90 percent full, the flash storage runs out of empty blocks to write to and every save slows down. That is when clearing caches, deleting large videos and removing old downloads produces a noticeable difference, not because the cache was slow but because free space was gone.',
            'So the honest rule is to clear cache when you need the space, not on a schedule. Disk Mop follows that rule: it does not claim to speed up the phone, it shows what each item costs in storage, and its app manager lists caches by size and apps you have not opened in 30 days so the decision is yours.',
          ],
        },
      ],
      dataTable: {
        caption: 'What each Android storage action removes',
        columns: ['Action', 'What is deleted', 'Signs you out?', 'Settings kept?'],
        rows: [
          ['Clear cache', 'Temporary files, thumbnails, downloaded previews', 'No', 'Yes'],
          ['Clear storage / Clear data', 'Everything the app stored on the phone, including offline content', 'Yes', 'No'],
          ['Uninstall', 'The app and its data, except folders left under Android/media', 'Yes', 'No'],
          ['Offload or Archive (Android 15+)', 'The app\'s code; data and settings are kept for reinstalling', 'No', 'Yes'],
        ],
      },
      faq: [
        {
          question: 'How often should I clear cache on Android?',
          answer:
            'Only when you need the space. Cache makes apps faster, and clearing it on a schedule just forces apps to download the same data again. Look at Settings > Storage when the phone warns you, and clear the largest caches then.',
        },
        {
          question: 'Is it safe to clear the cache of all apps?',
          answer:
            'Yes. Cache is by definition data the app can rebuild. You will not be signed out and no settings change. Clear storage or Clear data is the option to avoid unless you mean to reset the app.',
        },
        {
          question: 'Why does the cache come back after I clear it?',
          answer:
            'Because the app rebuilds it as you use it; that is what cache is for. Growth back to a few hundred megabytes is normal. If one app rebuilds gigabytes within days, check its own settings for an offline or cache limit.',
        },
        {
          question: 'Do cleaner apps that promise a speed boost work?',
          answer:
            'No. Killing background apps and clearing RAM makes Android reload everything and use more battery. A useful cleaner frees storage and shows you what it deletes; be wary of ones that promise speed, show ads or ask for an account.',
        },
      ],
      verdict: [
        'Clearing cache on Android is safe, per app, and worth doing when storage runs low rather than on a schedule. The real space is in browsers, social apps, streaming caches, the thumbnail folder and forgotten installers, and the one button to avoid is Clear storage, which resets the app.',
        'Disk Mop for Android puts all of that on one screen: app caches sorted by size, apps unused for 30 days, and a one-tap junk clean for thumbnails, temp files, installers and empty folders. It shows every size before deleting, selects nothing for you, and does not pretend to make the phone faster.',
      ],
      ctaText: 'Get Disk Mop for Android on Google Play',
    },
    de: {
      title: 'Cache leeren unter Android: jede App, was gelöscht wird und wann es sich lohnt',
      metaDescription:
        'Android 8 hat "gesamten Cache leeren" entfernt. So leeren Sie den App-Cache auf jedem Handy, der Unterschied zu "Speicher löschen" und warum Cache nicht bremst.',
      subtitle:
        'Cache oder Daten, der Einstellungspfad auf Pixel, Samsung und Xiaomi und was Cleaner-Apps wirklich tun',
      intro: [
        'Kurze Antwort: Unter Android ist das Leeren des App-Cache sicher, kostet nichts und geschieht pro App unter Einstellungen > Apps > App > Speicher und Cache > Cache leeren. Seit Android 8 gibt es keine systemweite Schaltfläche "alle Caches leeren" mehr, daher ist eine Cleaner-App der einzige Weg, es für alle Apps auf einmal zu erledigen. Cache leeren macht ein Telefon nicht schneller; es gibt Platz frei und ist nur wichtig, wenn der Speicher fast voll ist.',
        'Dieser Leitfaden erklärt den Unterschied zwischen Cache und App-Daten, zeigt, wo die Schaltfläche auf den drei verbreitetsten Android-Oberflächen sitzt, listet die Apps, deren Cache tatsächlich Gigabyte erreicht, und trennt, was sich lohnt, von dem, was Marketing ist.',
      ],
      keyTakeaways: [
        'Cache sind temporäre Daten, die eine App neu aufbauen kann: Miniaturbilder, Vorschauen, heruntergeladene Bilder. Das Leeren meldet Sie nie ab und ändert keine Einstellungen.',
        'Speicher löschen (auch Daten löschen genannt) ist etwas anderes: Es setzt die App auf den Zustand nach der Installation zurück, meldet Sie ab und löscht Offline-Inhalte.',
        'Android 8 (Oreo) hat die Zeile "Daten im Cache" entfernt, die alle Caches auf einmal leerte; seitdem gibt es die Einstellung nur pro App.',
        'Browser, soziale Netzwerke und Streaming-Apps sind die üblichen Verdächtigen: Die Caches von Chrome, Instagram, YouTube und Spotify können jeweils mehrere Gigabyte erreichen.',
        'Cache leeren beschleunigt Android nicht; die Leistung leidet erst, wenn der Speicher zu mehr als etwa 90 Prozent voll ist, und RAM-Booster machen alles schlimmer.',
        'Der Miniaturbild-Cache der Galerie-Apps kann allein auf Gigabyte anwachsen und lässt sich gefahrlos löschen; er wird beim Durchblättern neu aufgebaut.',
      ],
      howTo: {
        name: 'App-Cache auf einem Android-Telefon leeren',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Die Apps mit dem größten Cache finden',
            text: 'Öffnen Sie Einstellungen > Speicher und tippen Sie auf Apps (bei Samsung: Einstellungen > Gerätewartung > Speicher > Apps). Die Liste ist nach Größe sortiert; bei den obersten Einträgen lohnt sich das Leeren.',
          },
          {
            name: 'Den Cache einer einzelnen App leeren',
            text: 'Tippen Sie auf die App, dann auf Speicher und Cache (Pixel), Speicher (Samsung) oder Daten löschen (Xiaomi und HyperOS) und wählen Sie Cache leeren. Tippen Sie nicht auf Speicher löschen oder Alle Daten löschen, sofern Sie die App nicht zurücksetzen wollen.',
          },
          {
            name: 'Den Browser-Cache leeren',
            text: 'Tippen Sie in Chrome auf die drei Punkte > Einstellungen > Datenschutz und Sicherheit > Browserdaten löschen, setzen Sie nur bei Bilder und Dateien im Cache ein Häkchen und löschen Sie. Lassen Sie Cookies abgewählt, sofern Sie sich nicht von Websites abmelden wollen.',
          },
          {
            name: 'Streaming-Apps auf Offline-Inhalte prüfen',
            text: 'In Spotify zeigt Einstellungen > Speicher den Cache und die heruntergeladene Musik getrennt an; Cache leeren behält Ihre Downloads. YouTube und Netflix bewahren Offline-Videos unter Downloads auf; löschen Sie die, die Sie schon gesehen haben.',
          },
          {
            name: 'Miniaturbild-Cache, Installationsdateien und Reste entfernen',
            text: 'Der Ordner .thumbnails, alte APK-Installer unter Downloads, temporäre Dateien und leere Ordner sind über die Einstellungen nicht erreichbar. Disk Mop für Android räumt sie mit einem Tipp weg und listet auf demselben Bildschirm die App-Caches nach Größe.',
          },
          {
            name: 'Vor Speicher löschen innehalten',
            text: 'Spinnt eine App, hilft meist ein Neustart des Telefons oder ein Update der App. Nutzen Sie Speicher löschen nur als letztes Mittel, nachdem Sie sichergestellt haben, dass Anmeldedaten und Offline-Inhalte wiederherstellbar sind.',
          },
        ],
      },
      sections: [
        {
          title: 'Cache oder Speicher: der Unterschied, auf den es ankommt',
          content: [
            'Jede Android-App hält zwei Arten von Dateien vor. Der Cache enthält, was die App erneut herunterladen oder erzeugen kann: Bildvorschauen in Instagram, Artikeltexte in einer Nachrichten-App, die Miniaturbilder, die eine Galerie beim Scrollen zeigt. Der App-Speicher, manchmal als Daten bezeichnet, enthält, was sich nicht neu aufbauen lässt: Ihre Anmeldesitzung, Einstellungen, Offline-Downloads und nicht gesendete Entwürfe.',
            'Das Leeren des Cache ist deshalb harmlos. Die App startet beim nächsten Mal etwas langsamer, während sie ihre Vorschauen neu aufbaut, das ist alles. Speicher löschen ist dagegen ein Reset: Die App verhält sich wie frisch installiert, Sie sind abgemeldet, und Offline-Karten, heruntergeladene Playlists und lokale Dokumente sind weg. Android setzt beide Schaltflächen nebeneinander, weshalb Leute Daten verlieren, während sie Platz sparen wollen.',
            'Die Tabelle unten fasst zusammen, was jede Aktion entfernt. Im Zweifel erst den Cache leeren und wieder unter Einstellungen > Speicher nachsehen; der zusätzliche Gewinn durch Speicher löschen ist meist klein, der Preis hoch.',
          ],
        },
        {
          title: 'Wo die Schaltfläche auf Pixel, Samsung und Xiaomi sitzt',
          content: [
            'Android hat keine globale Cache-Schaltfläche mehr, seit Version 8 (Oreo) die Zeile "Daten im Cache" aus Einstellungen > Speicher entfernt hat. Auf einem Pixel oder jedem Telefon nahe am reinen Android lautet der Pfad Einstellungen > Apps > Alle Apps anzeigen > App > Speicher und Cache > Cache leeren. Einstellungen > Speicher > Apps zeigt dieselben Apps nach Größe sortiert, der schnellste Weg zu den schweren.',
            'Samsungs One UI verschiebt die Schaltfläche eine Ebene tiefer: Einstellungen > Apps > App > Speicher > Cache leeren, mit einer Schaltfläche Daten löschen daneben. Die Gerätewartung (Einstellungen > Gerätewartung > Speicher) bietet eine nach Größe sortierte Apps-Ansicht und eigene Aufräumvorschläge, die zwar sicher sind, aber meist nur wiederholen, was die Einstellungen ohnehin tun.',
            'Xiaomi-, Redmi- und POCO-Telefone mit MIUI oder HyperOS nutzen Einstellungen > Apps > Apps verwalten > App > Daten löschen, was ein kleines Menü mit Cache leeren und Alle Daten löschen als getrennte Optionen öffnet. Die integrierte Cleaner-App zielt ebenfalls auf Caches, empfiehlt Löschungen aber aggressiv und zeigt Werbung; lesen Sie ihre Liste, bevor Sie bestätigen.',
          ],
        },
        {
          title: 'Die Caches, die wirklich zählen',
          content: [
            'Die meisten Apps halten Caches von wenigen Megabyte, und die zu leeren lohnt das Tippen nicht. Die Gigabyte stecken in einer Handvoll Kategorien. Browser: Chrome hält routinemäßig 1 bis 3 GB an zwischengespeicherten Seiten und Bildern. Soziale Netzwerke: Instagram, TikTok, Facebook und X cachen jedes Video und jedes Bild, an dem Sie vorbeiscrollen; 2 bis 5 GB sind bei Vielnutzern üblich. Karten: Google Maps cacht Kartenkacheln und kann 1 GB überschreiten.',
            'Streaming-Apps sind ein Sonderfall, weil sie Cache mit Offline-Downloads mischen. Spotifys Einstellungen > Speicher trennt beides, und allein sein Cache kann 5 GB übersteigen. YouTube, Netflix und Podcast-Apps führen heruntergeladene Folgen als Offline-Inhalte statt als Cache; die werden im Bereich Downloads der App gelöscht, nicht in den Einstellungen.',
            'Zwei Caches tauchen in keinen App-Einstellungen auf. Der Miniaturbild-Cache der Galerie (ein versteckter Ordner .thumbnails im Verzeichnis DCIM) wächst mit jedem Foto und kann mehrere Gigabyte erreichen, und Installationsdateien (.apk), die zum Sideloading geladen wurden, liegen lange nach der Installation noch unter Downloads. Beide lassen sich gefahrlos löschen, und beide deckt die Ein-Tipp-Bereinigung von Disk Mop zusammen mit temporären Dateien und leeren Ordnern ab, wobei die Größe jedes Postens vor der Bestätigung angezeigt wird.',
          ],
        },
        {
          title: 'Macht Cache leeren Android schneller?',
          content: [
            'Nein, und der Glaube daran ist der Grund, warum es so viele Cleaner-Apps gibt. Ein Cache existiert, um die App schneller zu machen; nach dem Leeren muss die App herunterladen oder neu erzeugen, was sie gerade verloren hat, also ist der nächste Start langsamer, nicht schneller. Android verwaltet den Arbeitsspeicher selbst und schließt Hintergrund-Apps bei Bedarf; RAM-Booster, die sie abschießen, zwingen das System, alles neu zu laden, und leeren den Akku.',
            'Der Speicher beeinflusst die Leistung in genau einem Fall: Ist das Telefon zu mehr als etwa 90 Prozent voll, gehen dem Flash-Speicher die leeren Blöcke zum Schreiben aus, und jedes Speichern wird langsam. Dann bringt das Leeren von Caches, das Löschen großer Videos und das Entfernen alter Downloads einen spürbaren Unterschied, nicht weil der Cache langsam war, sondern weil der freie Platz weg war.',
            'Die ehrliche Regel lautet also: Cache leeren, wenn Sie den Platz brauchen, nicht nach Zeitplan. Disk Mop folgt dieser Regel: Es behauptet nicht, das Telefon zu beschleunigen, zeigt, was jeder Posten an Speicher kostet, und sein App-Manager listet Caches nach Größe sowie Apps, die Sie seit 30 Tagen nicht geöffnet haben, sodass die Entscheidung bei Ihnen liegt.',
          ],
        },
      ],
      dataTable: {
        caption: 'Was jede Android-Speicheraktion entfernt',
        columns: ['Aktion', 'Was gelöscht wird', 'Abmeldung?', 'Einstellungen bleiben?'],
        rows: [
          ['Cache leeren', 'Temporäre Dateien, Miniaturbilder, heruntergeladene Vorschauen', 'Nein', 'Ja'],
          ['Speicher löschen / Daten löschen', 'Alles, was die App auf dem Telefon gespeichert hat, inklusive Offline-Inhalte', 'Ja', 'Nein'],
          ['Deinstallieren', 'Die App und ihre Daten, außer Ordnern, die unter Android/media zurückbleiben', 'Ja', 'Nein'],
          ['Auslagern oder Archivieren (Android 15+)', 'Der Code der App; Daten und Einstellungen bleiben für die Neuinstallation erhalten', 'Nein', 'Ja'],
        ],
      },
      faq: [
        {
          question: 'Wie oft sollte ich unter Android den Cache leeren?',
          answer:
            'Nur wenn Sie den Platz brauchen. Cache macht Apps schneller, und ihn nach Zeitplan zu leeren zwingt die Apps nur, dieselben Daten erneut herunterzuladen. Sehen Sie unter Einstellungen > Speicher nach, wenn das Telefon warnt, und leeren Sie dann die größten Caches.',
        },
        {
          question: 'Ist es sicher, den Cache aller Apps zu leeren?',
          answer:
            'Ja. Cache ist per Definition Daten, die die App neu aufbauen kann. Sie werden nicht abgemeldet, und keine Einstellung ändert sich. Speicher löschen oder Daten löschen ist die Option, die Sie meiden sollten, sofern Sie die App nicht zurücksetzen wollen.',
        },
        {
          question: 'Warum kommt der Cache nach dem Leeren zurück?',
          answer:
            'Weil die App ihn beim Benutzen neu aufbaut; genau dafür ist Cache da. Ein Anwachsen auf einige hundert Megabyte ist normal. Baut eine App innerhalb von Tagen wieder Gigabyte auf, prüfen Sie in ihren eigenen Einstellungen, ob es ein Offline- oder Cache-Limit gibt.',
        },
        {
          question: 'Funktionieren Cleaner-Apps, die mehr Tempo versprechen?',
          answer:
            'Nein. Hintergrund-Apps abzuschießen und den RAM zu leeren zwingt Android, alles neu zu laden, und kostet mehr Akku. Ein nützlicher Cleaner gibt Speicher frei und zeigt, was er löscht; seien Sie vorsichtig bei solchen, die Tempo versprechen, Werbung zeigen oder ein Konto verlangen.',
        },
      ],
      verdict: [
        'Cache leeren unter Android ist sicher, erfolgt pro App und lohnt sich, wenn der Speicher knapp wird, nicht nach Zeitplan. Der eigentliche Platz steckt in Browsern, sozialen Apps, Streaming-Caches, dem Miniaturbild-Ordner und vergessenen Installationsdateien, und die eine Schaltfläche, die Sie meiden sollten, ist Speicher löschen, das die App zurücksetzt.',
        'Disk Mop für Android bringt all das auf einen Bildschirm: App-Caches nach Größe sortiert, seit 30 Tagen ungenutzte Apps und eine Ein-Tipp-Bereinigung für Miniaturbilder, temporäre Dateien, Installer und leere Ordner. Es zeigt jede Größe vor dem Löschen, wählt nichts für Sie aus und tut nicht so, als würde es das Telefon schneller machen.',
      ],
      ctaText: 'Disk Mop für Android bei Google Play holen',
    },
    fr: {
      title:
        'Vider le cache sur Android : chaque appli, ce qui est supprimé et quand cela vaut la peine',
      metaDescription:
        'Android 8 a retiré « vider tout le cache ». Vider le cache des applis sur Android, la différence avec « Effacer les données », et pourquoi cela n\'accélère rien.',
      subtitle:
        'Cache ou données, le chemin des réglages sur Pixel, Samsung et Xiaomi, et ce que font vraiment les applis de nettoyage',
      intro: [
        'Réponse courte : sur Android, vider le cache d\'une appli est sans risque, ne fait rien perdre et se fait appli par appli dans Paramètres > Applications > l\'appli > Espace de stockage et cache > Vider le cache. Depuis Android 8, il n\'y a plus de bouton système « vider tous les caches » ; seule une appli de nettoyage le fait pour toutes les applis d\'un coup. Vider le cache n\'accélère pas un téléphone ; cela libère de la place, et n\'a d\'intérêt que si le stockage est presque plein.',
        'Ce guide explique la différence entre cache et données d\'application, montre où est le bouton sur les trois surcouches Android les plus répandues, liste les applis dont le cache atteint vraiment des gigaoctets et sépare ce qui vaut la peine du marketing.',
      ],
      keyTakeaways: [
        'Le cache est constitué de données temporaires que l\'appli peut reconstruire : miniatures, aperçus, images téléchargées. Le vider ne vous déconnecte jamais et ne change aucun réglage.',
        'Effacer les données (parfois libellé Effacer le stockage) est différent : cela remet l\'appli à l\'état neuf, vous déconnecte et supprime le contenu hors ligne.',
        'Android 8 (Oreo) a supprimé la ligne « Données en cache » qui vidait tous les caches d\'un coup ; depuis, le réglage se fait appli par appli.',
        'Navigateurs, applis sociales et applis de streaming sont les coupables habituels : les caches de Chrome, Instagram, YouTube et Spotify peuvent chacun atteindre plusieurs gigaoctets.',
        'Vider le cache n\'accélère pas Android ; les performances ne souffrent que lorsque le stockage dépasse 90 % environ, et les boosters de RAM aggravent les choses.',
        'Le cache de miniatures utilisé par les galeries peut à lui seul atteindre des gigaoctets et se supprime sans risque ; il se reconstruit au fil de votre navigation.',
      ],
      howTo: {
        name: 'Vider le cache des applis sur un téléphone Android',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Repérer les applis au cache le plus volumineux',
            text: 'Ouvrez Paramètres > Stockage et touchez Applications (sur Samsung, Paramètres > Entretien de l\'appareil > Stockage > Applications). La liste est triée par taille ; c\'est en haut que vider le cache rapporte.',
          },
          {
            name: 'Vider le cache d\'une seule appli',
            text: 'Touchez l\'appli, puis Espace de stockage et cache (Pixel), Stockage (Samsung) ou Effacer les données (Xiaomi et HyperOS) et choisissez Vider le cache. Ne touchez ni Effacer le stockage ni Effacer toutes les données, sauf si vous voulez réinitialiser l\'appli.',
          },
          {
            name: 'Vider le cache du navigateur',
            text: 'Dans Chrome, touchez les trois points > Paramètres > Confidentialité et sécurité > Effacer les données de navigation, cochez uniquement Images et fichiers en cache, puis effacez. Laissez les cookies décochés, sauf si vous voulez être déconnecté des sites web.',
          },
          {
            name: 'Vérifier le contenu hors ligne des applis de streaming',
            text: 'Dans Spotify, Paramètres > Stockage affiche séparément le cache et la musique téléchargée ; Vider le cache conserve vos téléchargements. YouTube et Netflix gardent les vidéos hors ligne dans Téléchargements ; supprimez celles déjà regardées.',
          },
          {
            name: 'Supprimer le cache de miniatures, les installateurs et les résidus',
            text: 'Le dossier .thumbnails, les vieux installateurs APK dans Téléchargements, les fichiers temporaires et les dossiers vides ne sont pas accessibles depuis Paramètres. Disk Mop pour Android les nettoie en un geste et liste les caches d\'applis triés par taille sur le même écran.',
          },
          {
            name: 'S\'arrêter avant Effacer les données',
            text: 'Si une appli se comporte mal, redémarrer le téléphone ou mettre l\'appli à jour règle généralement le problème. N\'utilisez Effacer les données qu\'en dernier recours, après avoir vérifié que vos identifiants et votre contenu hors ligne sont récupérables.',
          },
        ],
      },
      sections: [
        {
          title: 'Cache ou stockage : la différence qui compte',
          content: [
            'Chaque appli Android conserve deux types de fichiers. Le cache contient ce que l\'appli peut retélécharger ou régénérer : aperçus d\'images dans Instagram, texte des articles dans une appli d\'actualités, miniatures qu\'une galerie affiche en défilant. Le stockage de l\'appli, parfois appelé données, contient ce qui ne se reconstruit pas : session, réglages, téléchargements hors ligne et brouillons non envoyés.',
            'Vider le cache est donc inoffensif. L\'appli démarre un peu plus lentement la fois suivante, le temps de reconstruire ses aperçus, c\'est tout. Effacer le stockage est une réinitialisation : l\'appli se comporte comme fraîchement installée, vous êtes déconnecté, et cartes hors ligne, playlists téléchargées et documents locaux ont disparu. Android place les deux boutons côte à côte, d\'où les données perdues en voulant gagner de la place.',
            'Le tableau ci-dessous résume ce que chaque action supprime. En cas de doute, videz d\'abord le cache et regardez à nouveau Paramètres > Stockage ; le gain supplémentaire d\'un effacement des données est faible et son coût élevé.',
          ],
        },
        {
          title: 'Où se trouve le bouton sur Pixel, Samsung et Xiaomi',
          content: [
            'Android n\'a plus de bouton de cache global depuis que la version 8 (Oreo) a retiré la ligne « Données en cache » de Paramètres > Stockage. Sur un Pixel ou tout téléphone proche d\'Android pur, le chemin est Paramètres > Applications > Afficher toutes les applis > l\'appli > Espace de stockage et cache > Vider le cache. Paramètres > Stockage > Applications affiche les mêmes applis triées par taille, le moyen le plus rapide de repérer les plus lourdes.',
            'One UI de Samsung déplace le bouton un niveau plus bas : Paramètres > Applications > l\'appli > Stockage > Vider le cache, avec un bouton Effacer les données à côté. L\'Entretien de l\'appareil (Paramètres > Entretien de l\'appareil > Stockage) propose une vue Applications triée par taille et ses propres suggestions de nettoyage, sans danger mais qui répètent surtout ce que Paramètres fait déjà.',
            'Les téléphones Xiaomi, Redmi et POCO sous MIUI ou HyperOS passent par Paramètres > Applications > Gérer les applications > l\'appli > Effacer les données, qui ouvre un petit menu avec Vider le cache et Effacer toutes les données comme choix distincts. L\'appli Nettoyeur intégrée cible aussi les caches, mais elle recommande agressivement des suppressions et affiche des publicités ; lisez sa liste avant de confirmer.',
          ],
        },
        {
          title: 'Les caches qui comptent vraiment',
          content: [
            'La plupart des applis gardent des caches de quelques mégaoctets, et les vider ne vaut pas les tapotements. Les gigaoctets se concentrent dans une poignée de catégories. Navigateurs : Chrome conserve couramment 1 à 3 Go de pages et d\'images en cache. Applis sociales : Instagram, TikTok, Facebook et X mettent en cache chaque vidéo et image que vous faites défiler, et 2 à 5 Go sont courants chez un gros utilisateur. Cartes : Google Maps met en cache les tuiles de carte et peut dépasser 1 Go.',
            'Les applis de streaming sont un cas à part, car elles mélangent cache et téléchargements hors ligne. Paramètres > Stockage de Spotify sépare les deux, et son cache seul peut dépasser 5 Go. YouTube, Netflix et les applis de podcasts conservent les épisodes téléchargés comme contenu hors ligne plutôt que comme cache ; ils se suppriment depuis la section Téléchargements de l\'appli, pas depuis Paramètres.',
            'Deux caches n\'apparaissent dans les réglages d\'aucune appli. Le cache de miniatures de la galerie (un dossier caché .thumbnails dans le répertoire DCIM) grossit avec chaque photo et peut atteindre plusieurs gigaoctets, et les fichiers d\'installation (.apk) téléchargés pour le sideloading restent dans Téléchargements longtemps après l\'installation. Les deux se suppriment sans risque et sont couverts par le nettoyage en un geste de Disk Mop, avec les fichiers temporaires et les dossiers vides, la taille de chaque élément étant affichée avant confirmation.',
          ],
        },
        {
          title: 'Vider le cache accélère-t-il Android ?',
          content: [
            'Non, et cette croyance explique pourquoi tant d\'applis de nettoyage existent. Un cache sert à rendre l\'appli plus rapide ; une fois vidé, l\'appli doit retélécharger ou régénérer ce qu\'elle vient de perdre, et le lancement suivant est plus lent, pas plus rapide. Android gère la mémoire lui-même et ferme les applis en arrière-plan quand il le faut ; les boosters de RAM qui les tuent forcent le système à tout recharger et vident la batterie.',
            'Le stockage influe sur les performances dans un cas précis : au-delà de 90 % de remplissage environ, la mémoire flash manque de blocs vides où écrire et chaque enregistrement ralentit. C\'est là que vider les caches, supprimer les grosses vidéos et retirer les vieux téléchargements fait une différence visible, non parce que le cache était lent, mais parce que l\'espace libre avait disparu.',
            'La règle honnête est donc de vider le cache quand vous avez besoin de place, pas selon un calendrier. Disk Mop suit cette règle : il ne prétend pas accélérer le téléphone, il montre ce que chaque élément coûte en stockage, et son gestionnaire d\'applis liste les caches par taille et les applis non ouvertes depuis 30 jours, pour que la décision vous revienne.',
          ],
        },
      ],
      dataTable: {
        caption: 'Ce que chaque action de stockage Android supprime',
        columns: ['Action', 'Ce qui est supprimé', 'Déconnexion ?', 'Réglages conservés ?'],
        rows: [
          ['Vider le cache', 'Fichiers temporaires, miniatures, aperçus téléchargés', 'Non', 'Oui'],
          ['Effacer les données / Effacer le stockage', 'Tout ce que l\'appli a stocké sur le téléphone, contenu hors ligne compris', 'Oui', 'Non'],
          ['Désinstaller', 'L\'appli et ses données, sauf les dossiers laissés sous Android/media', 'Oui', 'Non'],
          ['Décharger ou Archiver (Android 15+)', 'Le code de l\'appli ; données et réglages sont conservés pour la réinstallation', 'Non', 'Oui'],
        ],
      },
      faq: [
        {
          question: 'À quelle fréquence vider le cache sur Android ?',
          answer:
            'Seulement quand vous avez besoin de place. Le cache rend les applis plus rapides, et le vider à intervalles réguliers force juste les applis à retélécharger les mêmes données. Regardez Paramètres > Stockage quand le téléphone vous alerte, et videz alors les caches les plus gros.',
        },
        {
          question: 'Est-il sans risque de vider le cache de toutes les applis ?',
          answer:
            'Oui. Le cache est par définition une donnée que l\'appli peut reconstruire. Vous ne serez pas déconnecté et aucun réglage ne change. Effacer les données ou Effacer le stockage est l\'option à éviter, sauf si vous voulez réinitialiser l\'appli.',
        },
        {
          question: 'Pourquoi le cache revient-il après l\'avoir vidé ?',
          answer:
            'Parce que l\'appli le reconstruit à mesure que vous l\'utilisez ; c\'est le rôle du cache. Une remontée à quelques centaines de mégaoctets est normale. Si une appli reconstitue des gigaoctets en quelques jours, cherchez dans ses réglages une limite de cache ou de contenu hors ligne.',
        },
        {
          question:
            'Les applis de nettoyage qui promettent un gain de vitesse fonctionnent-elles ?',
          answer:
            'Non. Tuer les applis en arrière-plan et vider la RAM oblige Android à tout recharger et consomme plus de batterie. Un nettoyeur utile libère du stockage et vous montre ce qu\'il supprime ; méfiez-vous de ceux qui promettent de la vitesse, affichent des publicités ou exigent un compte.',
        },
      ],
      verdict: [
        'Vider le cache sur Android est sans risque, se fait appli par appli et vaut la peine quand le stockage manque, pas selon un calendrier. La vraie place est dans les navigateurs, les applis sociales, les caches de streaming, le dossier de miniatures et les installateurs oubliés, et le seul bouton à éviter est Effacer les données, qui réinitialise l\'appli.',
        'Disk Mop pour Android réunit tout cela sur un seul écran : les caches d\'applis triés par taille, les applis inutilisées depuis 30 jours, et un nettoyage en un geste des miniatures, fichiers temporaires, installateurs et dossiers vides. Il affiche chaque taille avant de supprimer, ne sélectionne rien à votre place et ne prétend pas rendre le téléphone plus rapide.',
      ],
      ctaText: 'Télécharger Disk Mop pour Android sur Google Play',
    },
    es: {
      title: 'Cómo borrar la caché en Android: cada app, qué elimina y cuándo merece la pena',
      metaDescription:
        'Android 8 quitó «borrar toda la caché». Cómo borrar la caché de las apps en Android, su diferencia con «Borrar almacenamiento» y por qué no acelera nada.',
      subtitle:
        'Caché frente a datos, la ruta de ajustes en Pixel, Samsung y Xiaomi, y lo que hacen de verdad las apps limpiadoras',
      intro: [
        'Respuesta corta: en Android, borrar la caché de una app es seguro, no pierde nada y se hace app por app en Ajustes > Aplicaciones > la app > Almacenamiento y caché > Borrar caché. Desde Android 8 no existe un botón general de «borrar todas las cachés», así que una app limpiadora es la única forma de hacerlo para todas las apps a la vez. Borrar la caché no hace el móvil más rápido; libera espacio, y solo importa cuando el almacenamiento está casi lleno.',
        'Esta guía explica la diferencia entre caché y datos de la app, muestra dónde está el botón en las tres capas de Android más comunes, enumera las apps cuya caché llega de verdad a los gigabytes y separa lo que merece la pena de lo que es marketing.',
      ],
      keyTakeaways: [
        'La caché son datos temporales que la app puede reconstruir: miniaturas, vistas previas, imágenes descargadas. Borrarla nunca cierra tu sesión ni cambia ajustes.',
        'Borrar almacenamiento (también llamado Borrar datos) es distinto: devuelve la app al estado recién instalado, cierra tu sesión y elimina el contenido sin conexión.',
        'Android 8 (Oreo) eliminó la línea «Datos almacenados en caché» que vaciaba todas las cachés a la vez; desde entonces el ajuste es app por app.',
        'Navegadores, apps sociales y apps de streaming son los sospechosos habituales: las cachés de Chrome, Instagram, YouTube y Spotify pueden llegar cada una a varios gigabytes.',
        'Borrar la caché no acelera Android; el rendimiento solo sufre cuando el almacenamiento supera aproximadamente el 90 por ciento, y los aceleradores de RAM empeoran las cosas.',
        'La caché de miniaturas que usan las galerías puede crecer sola hasta los gigabytes y es seguro borrarla; se reconstruye a medida que navegas.',
      ],
      howTo: {
        name: 'Borrar la caché de las apps en un teléfono Android',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Encuentra las apps con más caché',
            text: 'Abre Ajustes > Almacenamiento y toca Aplicaciones (en Samsung, Ajustes > Mantenimiento del dispositivo > Almacenamiento > Aplicaciones). La lista está ordenada por tamaño; en las primeras entradas es donde borrar la caché compensa.',
          },
          {
            name: 'Borra la caché de una sola app',
            text: 'Toca la app, luego Almacenamiento y caché (Pixel), Almacenamiento (Samsung) o Borrar datos (Xiaomi y HyperOS) y elige Borrar caché. No toques Borrar almacenamiento ni Borrar todos los datos a menos que quieras restablecer la app.',
          },
          {
            name: 'Borra la caché del navegador',
            text: 'En Chrome, toca los tres puntos > Configuración > Privacidad y seguridad > Borrar datos de navegación, marca solo Imágenes y archivos almacenados en caché y borra. Deja las cookies sin marcar a menos que quieras cerrar sesión en los sitios web.',
          },
          {
            name: 'Revisa el contenido sin conexión de las apps de streaming',
            text: 'En Spotify, Ajustes > Almacenamiento muestra por separado la caché y la música descargada; Borrar caché conserva tus descargas. YouTube y Netflix guardan los vídeos sin conexión en Descargas; elimina los que ya hayas visto.',
          },
          {
            name: 'Elimina la caché de miniaturas, los instaladores y los restos',
            text: 'La carpeta .thumbnails, los viejos instaladores APK en Descargas, los archivos temporales y las carpetas vacías no se alcanzan desde Ajustes. Disk Mop para Android los limpia con un toque y muestra en la misma pantalla las cachés de las apps ordenadas por tamaño.',
          },
          {
            name: 'Párate antes de Borrar almacenamiento',
            text: 'Si una app falla, reiniciar el móvil o actualizar la app suele resolverlo. Usa Borrar almacenamiento solo como último recurso, tras asegurarte de que tus datos de acceso y tu contenido sin conexión se pueden recuperar.',
          },
        ],
      },
      sections: [
        {
          title: 'Caché frente a almacenamiento: la diferencia que importa',
          content: [
            'Cada app de Android guarda dos tipos de archivos. La caché contiene lo que la app puede volver a descargar o generar: las vistas previas de imágenes en Instagram, el texto de los artículos en una app de noticias, las miniaturas que una galería muestra al desplazarte. El almacenamiento de la app, a veces etiquetado como datos, contiene lo que no se puede reconstruir: tu sesión, los ajustes, las descargas sin conexión y los borradores sin enviar.',
            'Por eso borrar la caché es inofensivo. La app arranca un poco más despacio la próxima vez mientras reconstruye sus vistas previas, y nada más. Borrar el almacenamiento es un restablecimiento: la app se comporta como recién instalada, tu sesión se cierra, y los mapas sin conexión, las listas descargadas y los documentos locales desaparecen. Android pone los dos botones uno al lado del otro, y por eso la gente pierde datos intentando ahorrar espacio.',
            'La tabla siguiente resume lo que elimina cada acción. En caso de duda, borra primero la caché y vuelve a mirar Ajustes > Almacenamiento; la ganancia adicional de borrar el almacenamiento suele ser pequeña y el coste, alto.',
          ],
        },
        {
          title: 'Dónde está el botón en Pixel, Samsung y Xiaomi',
          content: [
            'Android no tiene un botón de caché global desde que la versión 8 (Oreo) quitó la línea «Datos almacenados en caché» de Ajustes > Almacenamiento. En un Pixel o en cualquier móvil cercano al Android puro, la ruta es Ajustes > Aplicaciones > Ver todas las aplicaciones > la app > Almacenamiento y caché > Borrar caché. Ajustes > Almacenamiento > Aplicaciones muestra las mismas apps ordenadas por tamaño, la forma más rápida de encontrar las pesadas.',
            'One UI de Samsung baja el botón un nivel: Ajustes > Aplicaciones > la app > Almacenamiento > Borrar caché, con un botón Borrar datos al lado. Mantenimiento del dispositivo (Ajustes > Mantenimiento del dispositivo > Almacenamiento) ofrece una vista de Aplicaciones ordenada por tamaño y sus propias sugerencias de limpieza, que son seguras pero en su mayoría repiten lo que Ajustes ya hace.',
            'Los móviles Xiaomi, Redmi y POCO con MIUI o HyperOS usan Ajustes > Aplicaciones > Administrar aplicaciones > la app > Borrar datos, que abre un pequeño menú con Borrar caché y Borrar todos los datos como opciones separadas. La app Limpiador integrada también apunta a las cachés, pero es agresiva recomendando borrados y muestra anuncios; lee su lista antes de confirmar.',
          ],
        },
        {
          title: 'Las cachés que importan de verdad',
          content: [
            'La mayoría de las apps guardan cachés de unos pocos megabytes, y borrarlas no compensa los toques. Los gigabytes se concentran en un puñado de categorías. Navegadores: Chrome retiene habitualmente de 1 a 3 GB de páginas e imágenes en caché. Apps sociales: Instagram, TikTok, Facebook y X guardan en caché cada vídeo e imagen por los que pasas, y de 2 a 5 GB es habitual en el móvil de un usuario intensivo. Mapas: Google Maps almacena en caché las teselas del mapa y puede superar 1 GB.',
            'Las apps de streaming son un caso especial porque mezclan caché con descargas sin conexión. Ajustes > Almacenamiento de Spotify separa las dos, y solo su caché puede superar los 5 GB. YouTube, Netflix y las apps de pódcast guardan los episodios descargados como contenido sin conexión y no como caché; esos se borran desde la sección Descargas de la app, no desde Ajustes.',
            'Dos cachés no aparecen nunca en los ajustes de ninguna app. La caché de miniaturas de la galería (una carpeta oculta .thumbnails en el directorio DCIM) crece con cada foto y puede llegar a varios gigabytes, y los archivos de instalación (.apk) descargados para instalar manualmente se quedan en Descargas mucho después de la instalación. Ambos se pueden borrar con seguridad y ambos los cubre la limpieza de basura con un toque de Disk Mop, junto con los archivos temporales y las carpetas vacías, mostrando el tamaño de cada elemento antes de confirmar.',
          ],
        },
        {
          title: '¿Borrar la caché acelera Android?',
          content: [
            'No, y la creencia de que lo hace es la razón de que existan tantas apps limpiadoras. La caché existe para que la app vaya más rápido; después de borrarla, la app tiene que descargar o regenerar lo que acaba de perder, así que el siguiente arranque es más lento, no más rápido. Android gestiona la memoria por sí mismo y cierra las apps en segundo plano cuando lo necesita; los aceleradores de RAM que las matan obligan al sistema a recargarlo todo y gastan batería.',
            'El almacenamiento sí afecta al rendimiento en un caso concreto: cuando el móvil supera aproximadamente el 90 por ciento de ocupación, la memoria flash se queda sin bloques vacíos donde escribir y cada guardado se ralentiza. Ahí es cuando borrar cachés, eliminar vídeos grandes y quitar descargas antiguas produce una diferencia notable, no porque la caché fuera lenta, sino porque el espacio libre se había agotado.',
            'Así que la regla honesta es borrar la caché cuando necesites el espacio, no según un calendario. Disk Mop sigue esa regla: no afirma acelerar el móvil, muestra lo que cada elemento cuesta en almacenamiento, y su gestor de apps enumera las cachés por tamaño y las apps que no has abierto en 30 días para que la decisión sea tuya.',
          ],
        },
      ],
      dataTable: {
        caption: 'Qué elimina cada acción de almacenamiento en Android',
        columns: ['Acción', 'Qué se elimina', '¿Cierra la sesión?', '¿Conserva los ajustes?'],
        rows: [
          ['Borrar caché', 'Archivos temporales, miniaturas, vistas previas descargadas', 'No', 'Sí'],
          ['Borrar almacenamiento / Borrar datos', 'Todo lo que la app guardó en el móvil, incluido el contenido sin conexión', 'Sí', 'No'],
          ['Desinstalar', 'La app y sus datos, salvo las carpetas que quedan en Android/media', 'Sí', 'No'],
          ['Archivar o desinstalar conservando datos (Android 15+)', 'El código de la app; los datos y ajustes se conservan para reinstalarla', 'No', 'Sí'],
        ],
      },
      faq: [
        {
          question: '¿Cada cuánto debo borrar la caché en Android?',
          answer:
            'Solo cuando necesites el espacio. La caché hace que las apps vayan más rápido, y borrarla según un calendario solo obliga a las apps a descargar de nuevo los mismos datos. Mira Ajustes > Almacenamiento cuando el móvil te avise, y borra entonces las cachés más grandes.',
        },
        {
          question: '¿Es seguro borrar la caché de todas las apps?',
          answer:
            'Sí. La caché es por definición datos que la app puede reconstruir. No se cerrará tu sesión y ningún ajuste cambia. Borrar almacenamiento o Borrar datos es la opción a evitar, a menos que quieras restablecer la app.',
        },
        {
          question: '¿Por qué vuelve la caché después de borrarla?',
          answer:
            'Porque la app la reconstruye a medida que la usas; para eso está la caché. Que vuelva a crecer hasta unos cientos de megabytes es normal. Si una app reconstruye gigabytes en pocos días, busca en sus propios ajustes un límite de caché o de contenido sin conexión.',
        },
        {
          question: '¿Funcionan las apps limpiadoras que prometen más velocidad?',
          answer:
            'No. Matar las apps en segundo plano y vaciar la RAM hace que Android lo recargue todo y gaste más batería. Un limpiador útil libera almacenamiento y te muestra lo que borra; desconfía de los que prometen velocidad, muestran anuncios o piden una cuenta.',
        },
      ],
      verdict: [
        'Borrar la caché en Android es seguro, se hace app por app y merece la pena cuando el almacenamiento escasea, no según un calendario. El espacio real está en los navegadores, las apps sociales, las cachés de streaming, la carpeta de miniaturas y los instaladores olvidados, y el único botón a evitar es Borrar almacenamiento, que restablece la app.',
        'Disk Mop para Android pone todo eso en una sola pantalla: cachés de apps ordenadas por tamaño, apps sin usar durante 30 días y una limpieza de basura con un toque para miniaturas, archivos temporales, instaladores y carpetas vacías. Muestra cada tamaño antes de borrar, no selecciona nada por ti y no finge acelerar el móvil.',
      ],
      ctaText: 'Consigue Disk Mop para Android en Google Play',
    },
    it: {
      title: 'Come cancellare la cache su Android: ogni app, cosa elimina e quando ne vale la pena',
      metaDescription:
        'Android 8 ha tolto «cancella tutta la cache». Come svuotare la cache delle app, cosa cambia con «Cancella spazio di archiviazione» e perché non velocizza nulla.',
      subtitle:
        'Cache o dati, il percorso nelle impostazioni su Pixel, Samsung e Xiaomi, e cosa fanno davvero le app di pulizia',
      intro: [
        'Risposta breve: su Android cancellare la cache di un\'app è sicuro, non fa perdere nulla e si fa app per app in Impostazioni > App > l\'app > Spazio di archiviazione e cache > Cancella cache. Da Android 8 non esiste più un pulsante di sistema «cancella tutte le cache», quindi un\'app di pulizia è l\'unico modo per farlo per tutte le app in una volta. Cancellare la cache non rende il telefono più veloce; libera spazio, e conta solo quando la memoria è quasi piena.',
        'Questa guida spiega la differenza tra cache e dati dell\'app, mostra dove si trova il pulsante nelle tre interfacce Android più diffuse, elenca le app la cui cache arriva davvero ai gigabyte e separa ciò che vale la pena fare da ciò che è marketing.',
      ],
      keyTakeaways: [
        'La cache è costituita da dati temporanei che l\'app può ricostruire: miniature, anteprime, immagini scaricate. Cancellarla non ti disconnette mai e non cambia le impostazioni.',
        'Cancella spazio di archiviazione (detto anche Cancella dati) è diverso: riporta l\'app allo stato di prima installazione, ti disconnette ed elimina i contenuti offline.',
        'Android 8 (Oreo) ha rimosso la voce «Dati memorizzati nella cache» che svuotava tutte le cache in una volta; da allora l\'impostazione è per singola app.',
        'Browser, app social e app di streaming sono i soliti colpevoli: le cache di Chrome, Instagram, YouTube e Spotify possono raggiungere ciascuna diversi gigabyte.',
        'Cancellare la cache non velocizza Android; le prestazioni calano solo quando la memoria è piena oltre il 90 per cento circa, e i booster della RAM peggiorano le cose.',
        'La cache delle miniature usata dalle gallerie può crescere da sola fino ai gigabyte ed è sicura da eliminare; si ricostruisce mentre sfogli.',
      ],
      howTo: {
        name: 'Cancellare la cache delle app su un telefono Android',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Trova le app con la cache più grande',
            text: 'Apri Impostazioni > Spazio di archiviazione e tocca App (su Samsung, Impostazioni > Assistenza dispositivo > Memoria archiviazione > App). L\'elenco è ordinato per dimensione; le prime voci sono quelle in cui cancellare la cache rende.',
          },
          {
            name: 'Cancella la cache di una singola app',
            text: 'Tocca l\'app, poi Spazio di archiviazione e cache (Pixel), Memoria archiviazione (Samsung) o Cancella dati (Xiaomi e HyperOS) e scegli Cancella cache. Non toccare Cancella spazio di archiviazione o Cancella tutti i dati, a meno che tu non voglia reimpostare l\'app.',
          },
          {
            name: 'Cancella la cache del browser',
            text: 'In Chrome, tocca i tre puntini > Impostazioni > Privacy e sicurezza > Cancella dati di navigazione, spunta solo Immagini e file memorizzati nella cache e cancella. Lascia i cookie deselezionati, a meno che tu non voglia uscire dai siti web.',
          },
          {
            name: 'Controlla i contenuti offline delle app di streaming',
            text: 'In Spotify, Impostazioni > Archiviazione mostra separatamente la cache e la musica scaricata; Cancella cache conserva i tuoi download. YouTube e Netflix tengono i video offline in Download; elimina quelli che hai già visto.',
          },
          {
            name: 'Rimuovi la cache delle miniature, gli installer e i residui',
            text: 'La cartella .thumbnails, i vecchi installer APK in Download, i file temporanei e le cartelle vuote non sono raggiungibili dalle Impostazioni. Disk Mop per Android li pulisce con un tocco ed elenca nella stessa schermata le cache delle app ordinate per dimensione.',
          },
          {
            name: 'Fermati prima di Cancella spazio di archiviazione',
            text: 'Se un\'app fa i capricci, riavviare il telefono o aggiornare l\'app di solito risolve. Usa Cancella spazio di archiviazione solo come ultima risorsa, dopo esserti assicurato che credenziali di accesso e contenuti offline siano recuperabili.',
          },
        ],
      },
      sections: [
        {
          title: 'Cache o spazio di archiviazione: la differenza che conta',
          content: [
            'Ogni app Android conserva due tipi di file. La cache contiene ciò che l\'app può scaricare o generare di nuovo: le anteprime delle immagini in Instagram, il testo degli articoli in un\'app di notizie, le miniature che una galleria mostra mentre scorri. Lo spazio di archiviazione dell\'app, a volte etichettato come dati, contiene ciò che non si può ricostruire: la tua sessione di accesso, le impostazioni, i download offline e le bozze non inviate.',
            'Cancellare la cache è quindi innocuo. L\'app parte un po\' più lenta la volta successiva mentre ricostruisce le anteprime, e nient\'altro. Cancellare lo spazio di archiviazione è un reset: l\'app si comporta come appena installata, vieni disconnesso, e mappe offline, playlist scaricate e documenti locali spariscono. Android mette i due pulsanti uno accanto all\'altro, ed è per questo che si perdono dati cercando di guadagnare spazio.',
            'La tabella qui sotto riassume cosa rimuove ciascuna azione. In caso di dubbio, cancella prima la cache e guarda di nuovo Impostazioni > Spazio di archiviazione; il guadagno aggiuntivo del cancellare anche lo spazio di archiviazione è di solito piccolo e il costo alto.',
          ],
        },
        {
          title: 'Dove si trova il pulsante su Pixel, Samsung e Xiaomi',
          content: [
            'Android non ha più un pulsante globale per la cache da quando la versione 8 (Oreo) ha tolto la voce «Dati memorizzati nella cache» da Impostazioni > Spazio di archiviazione. Su un Pixel o su qualsiasi telefono vicino ad Android stock, il percorso è Impostazioni > App > Mostra tutte le app > l\'app > Spazio di archiviazione e cache > Cancella cache. Impostazioni > Spazio di archiviazione > App mostra le stesse app ordinate per dimensione, il modo più rapido per trovare quelle pesanti.',
            'La One UI di Samsung sposta il pulsante un livello più in basso: Impostazioni > App > l\'app > Memoria archiviazione > Svuota cache, con accanto un pulsante Cancella dati. Assistenza dispositivo (Impostazioni > Assistenza dispositivo > Memoria archiviazione) offre una vista App ordinata per dimensione e propri suggerimenti di pulizia, sicuri ma che per lo più duplicano ciò che le Impostazioni già fanno.',
            'I telefoni Xiaomi, Redmi e POCO con MIUI o HyperOS usano Impostazioni > App > Gestisci app > l\'app > Cancella dati, che apre un piccolo menu con Cancella cache e Cancella tutti i dati come scelte separate. Anche l\'app Pulizia integrata punta alle cache, ma è aggressiva nel consigliare eliminazioni e mostra pubblicità; leggi il suo elenco prima di confermare.',
          ],
        },
        {
          title: 'Le cache che contano davvero',
          content: [
            'La maggior parte delle app tiene cache di pochi megabyte, e cancellarle non vale i tocchi. I gigabyte stanno in una manciata di categorie. Browser: Chrome conserva abitualmente da 1 a 3 GB di pagine e immagini in cache. App social: Instagram, TikTok, Facebook e X mettono in cache ogni video e immagine che fai scorrere, e 2-5 GB sono comuni sul telefono di un utente intensivo. Mappe: Google Maps memorizza nella cache i riquadri delle mappe e può superare 1 GB.',
            'Le app di streaming sono un caso a parte perché mescolano cache e download offline. Impostazioni > Archiviazione di Spotify separa le due cose, e la sola cache può superare i 5 GB. YouTube, Netflix e le app di podcast conservano gli episodi scaricati come contenuti offline anziché come cache; quelli si eliminano dalla sezione Download dell\'app, non dalle Impostazioni.',
            'Due cache non compaiono mai nelle impostazioni di alcuna app. La cache delle miniature della galleria (una cartella nascosta .thumbnails nella directory DCIM) cresce con ogni foto e può raggiungere diversi gigabyte, e i file di installazione (.apk) scaricati per il sideload restano in Download molto dopo l\'installazione. Entrambi sono sicuri da eliminare ed entrambi sono coperti dalla pulizia con un tocco di Disk Mop, insieme a file temporanei e cartelle vuote, con la dimensione di ogni elemento mostrata prima della conferma.',
          ],
        },
        {
          title: 'Cancellare la cache velocizza Android?',
          content: [
            'No, e la convinzione che lo faccia è il motivo per cui esistono tante app di pulizia. Una cache esiste per rendere l\'app più veloce; dopo averla cancellata, l\'app deve scaricare o rigenerare ciò che ha appena perso, quindi l\'avvio successivo è più lento, non più veloce. Android gestisce la memoria da solo e chiude le app in background quando serve; i booster della RAM che le terminano costringono il sistema a ricaricare tutto e scaricano la batteria.',
            'La memoria influisce sulle prestazioni in un caso preciso: quando il telefono è pieno oltre il 90 per cento circa, la memoria flash esaurisce i blocchi vuoti su cui scrivere e ogni salvataggio rallenta. È allora che cancellare le cache, eliminare i video grandi e rimuovere i vecchi download produce una differenza evidente, non perché la cache fosse lenta ma perché lo spazio libero era finito.',
            'La regola onesta è quindi cancellare la cache quando ti serve spazio, non a scadenza fissa. Disk Mop segue questa regola: non promette di velocizzare il telefono, mostra quanto spazio costa ogni elemento, e il suo gestore app elenca le cache per dimensione e le app che non apri da 30 giorni, così la decisione è tua.',
          ],
        },
      ],
      dataTable: {
        caption: 'Cosa rimuove ogni azione di archiviazione su Android',
        columns: ['Azione', 'Cosa viene eliminato', 'Disconnette?', 'Impostazioni conservate?'],
        rows: [
          ['Cancella cache', 'File temporanei, miniature, anteprime scaricate', 'No', 'Sì'],
          ['Cancella spazio di archiviazione / Cancella dati', 'Tutto ciò che l\'app ha salvato sul telefono, contenuti offline inclusi', 'Sì', 'No'],
          ['Disinstalla', 'L\'app e i suoi dati, tranne le cartelle rimaste in Android/media', 'Sì', 'No'],
          ['Archivia o rimuovi conservando i dati (Android 15+)', 'Il codice dell\'app; dati e impostazioni restano per la reinstallazione', 'No', 'Sì'],
        ],
      },
      faq: [
        {
          question: 'Ogni quanto devo cancellare la cache su Android?',
          answer:
            'Solo quando ti serve spazio. La cache rende le app più veloci, e cancellarla a scadenza fissa costringe soltanto le app a scaricare di nuovo gli stessi dati. Guarda Impostazioni > Spazio di archiviazione quando il telefono ti avvisa, e cancella allora le cache più grandi.',
        },
        {
          question: 'È sicuro cancellare la cache di tutte le app?',
          answer:
            'Sì. La cache è per definizione un dato che l\'app può ricostruire. Non verrai disconnesso e nessuna impostazione cambia. Cancella spazio di archiviazione o Cancella dati è l\'opzione da evitare, a meno che tu non voglia reimpostare l\'app.',
        },
        {
          question: 'Perché la cache torna dopo che l\'ho cancellata?',
          answer:
            'Perché l\'app la ricostruisce mentre la usi; è a questo che serve la cache. Una ricrescita fino a qualche centinaio di megabyte è normale. Se un\'app ricostruisce gigabyte nel giro di giorni, controlla nelle sue impostazioni se esiste un limite per offline o cache.',
        },
        {
          question: 'Le app di pulizia che promettono più velocità funzionano?',
          answer:
            'No. Terminare le app in background e svuotare la RAM costringe Android a ricaricare tutto e consuma più batteria. Un\'app di pulizia utile libera spazio e ti mostra cosa elimina; diffida di quelle che promettono velocità, mostrano pubblicità o chiedono un account.',
        },
      ],
      verdict: [
        'Cancellare la cache su Android è sicuro, si fa app per app e vale la pena quando lo spazio scarseggia, non a scadenza fissa. Lo spazio vero è nei browser, nelle app social, nelle cache di streaming, nella cartella delle miniature e negli installer dimenticati, e l\'unico pulsante da evitare è Cancella spazio di archiviazione, che reimposta l\'app.',
        'Disk Mop per Android mette tutto questo in una sola schermata: cache delle app ordinate per dimensione, app inutilizzate da 30 giorni e una pulizia con un tocco per miniature, file temporanei, installer e cartelle vuote. Mostra ogni dimensione prima di eliminare, non seleziona nulla al posto tuo e non finge di rendere il telefono più veloce.',
      ],
      ctaText: 'Scarica Disk Mop per Android da Google Play',
    },
    pt: {
      title: 'Como limpar o cache no Android: cada app, o que é apagado e quando vale a pena',
      metaDescription:
        'O Android 8 removeu «limpar todo o cache». Como limpar o cache dos apps no Android, a diferença para «Limpar armazenamento» e por que não acelera o celular.',
      subtitle:
        'Cache versus dados, o caminho nas configurações do Pixel, Samsung e Xiaomi, e o que os apps de limpeza fazem de verdade',
      intro: [
        'Resposta curta: no Android, limpar o cache de um app é seguro, não perde nada e é feito app por app em Configurações > Apps > o app > Armazenamento e cache > Limpar cache. Desde o Android 8 não existe um botão «limpar todos os caches» do sistema, então um app de limpeza é a única forma de fazer isso para todos os apps de uma vez. Limpar o cache não deixa o celular mais rápido; libera espaço, e só importa quando o armazenamento está quase cheio.',
        'Este guia explica a diferença entre cache e dados do app, mostra onde fica o botão nas três interfaces Android mais comuns, lista os apps cujo cache chega de fato aos gigabytes e separa o que vale a pena fazer do que é marketing.',
      ],
      keyTakeaways: [
        'Cache são dados temporários que o app consegue reconstruir: miniaturas, prévias, imagens baixadas. Limpá-lo nunca desconecta você nem muda configurações.',
        'Limpar armazenamento (também chamado Limpar dados) é diferente: devolve o app ao estado de recém-instalado, desconecta você e apaga o conteúdo off-line.',
        'O Android 8 (Oreo) removeu a linha «Dados em cache» que limpava todos os caches de uma vez; desde então a opção é por app.',
        'Navegadores, apps sociais e apps de streaming são os suspeitos de sempre: os caches do Chrome, Instagram, YouTube e Spotify podem chegar, cada um, a vários gigabytes.',
        'Limpar o cache não acelera o Android; o desempenho só cai quando o armazenamento passa de cerca de 90 por cento, e os aceleradores de RAM pioram as coisas.',
        'O cache de miniaturas usado pelas galerias pode crescer sozinho até os gigabytes e é seguro apagá-lo; ele é reconstruído conforme você navega.',
      ],
      howTo: {
        name: 'Limpar o cache dos apps em um celular Android',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Encontre os apps com o maior cache',
            text: 'Abra Configurações > Armazenamento e toque em Apps (na Samsung, Configurações > Assistência do aparelho > Armazenamento > Apps). A lista é ordenada por tamanho; é nas primeiras entradas que limpar o cache compensa.',
          },
          {
            name: 'Limpe o cache de um único app',
            text: 'Toque no app, depois em Armazenamento e cache (Pixel), Armazenamento (Samsung) ou Limpar dados (Xiaomi e HyperOS) e escolha Limpar cache. Não toque em Limpar armazenamento nem em Limpar todos os dados, a menos que queira redefinir o app.',
          },
          {
            name: 'Limpe o cache do navegador',
            text: 'No Chrome, toque nos três pontos > Configurações > Privacidade e segurança > Limpar dados de navegação, marque apenas Imagens e arquivos armazenados em cache e limpe. Deixe os cookies desmarcados, a menos que queira sair dos sites.',
          },
          {
            name: 'Verifique o conteúdo off-line dos apps de streaming',
            text: 'No Spotify, Configurações > Armazenamento mostra o cache e as músicas baixadas separadamente; Limpar cache mantém seus downloads. YouTube e Netflix guardam os vídeos off-line em Downloads; apague os que você já assistiu.',
          },
          {
            name: 'Remova o cache de miniaturas, instaladores e sobras',
            text: 'A pasta .thumbnails, instaladores APK antigos em Downloads, arquivos temporários e pastas vazias não são alcançáveis pelas Configurações. O Disk Mop para Android limpa tudo isso com um toque e lista, na mesma tela, os caches dos apps ordenados por tamanho.',
          },
          {
            name: 'Pare antes de Limpar armazenamento',
            text: 'Se um app está se comportando mal, reiniciar o celular ou atualizar o app geralmente resolve. Use Limpar armazenamento só como último recurso, depois de garantir que seus dados de login e conteúdo off-line podem ser recuperados.',
          },
        ],
      },
      sections: [
        {
          title: 'Cache versus armazenamento: a diferença que importa',
          content: [
            'Todo app Android guarda dois tipos de arquivo. O cache contém o que o app pode baixar ou gerar de novo: prévias de imagens no Instagram, texto de matérias em um app de notícias, as miniaturas que uma galeria mostra enquanto você rola. O armazenamento do app, às vezes rotulado como dados, contém o que não pode ser reconstruído: sua sessão de login, configurações, downloads off-line e rascunhos não enviados.',
            'Por isso limpar o cache é inofensivo. O app abre um pouco mais devagar da próxima vez enquanto reconstrói as prévias, e só. Limpar o armazenamento é uma redefinição: o app se comporta como recém-instalado, você é desconectado, e mapas off-line, playlists baixadas e documentos locais somem. O Android coloca os dois botões lado a lado, e é por isso que as pessoas perdem dados tentando ganhar espaço.',
            'A tabela abaixo resume o que cada ação remove. Na dúvida, limpe primeiro o cache e olhe de novo em Configurações > Armazenamento; o ganho extra de limpar o armazenamento por cima costuma ser pequeno e o custo, alto.',
          ],
        },
        {
          title: 'Onde fica o botão no Pixel, Samsung e Xiaomi',
          content: [
            'O Android não tem um botão global de cache desde que a versão 8 (Oreo) removeu a linha «Dados em cache» de Configurações > Armazenamento. Em um Pixel ou em qualquer celular próximo do Android puro, o caminho é Configurações > Apps > Ver todos os apps > o app > Armazenamento e cache > Limpar cache. Configurações > Armazenamento > Apps mostra os mesmos apps ordenados por tamanho, a forma mais rápida de achar os pesados.',
            'A One UI da Samsung desce o botão um nível: Configurações > Apps > o app > Armazenamento > Limpar cache, com um botão Limpar dados ao lado. A Assistência do aparelho (Configurações > Assistência do aparelho > Armazenamento) oferece uma visão de Apps ordenada por tamanho e suas próprias sugestões de limpeza, que são seguras mas em geral repetem o que as Configurações já fazem.',
            'Celulares Xiaomi, Redmi e POCO com MIUI ou HyperOS usam Configurações > Apps > Gerenciar apps > o app > Limpar dados, que abre um pequeno menu com Limpar cache e Limpar todos os dados como escolhas separadas. O app Limpeza integrado também mira os caches, mas é agressivo ao recomendar exclusões e mostra anúncios; leia a lista dele antes de confirmar.',
          ],
        },
        {
          title: 'Os caches que importam de verdade',
          content: [
            'A maioria dos apps mantém caches de poucos megabytes, e limpá-los não vale os toques. Os gigabytes ficam em um punhado de categorias. Navegadores: o Chrome costuma guardar de 1 a 3 GB de páginas e imagens em cache. Apps sociais: Instagram, TikTok, Facebook e X colocam em cache cada vídeo e imagem por que você passa, e 2 a 5 GB é comum no celular de um usuário intenso. Mapas: o Google Maps guarda em cache os blocos do mapa e pode passar de 1 GB.',
            'Apps de streaming são um caso especial porque misturam cache com downloads off-line. Configurações > Armazenamento do Spotify separa os dois, e só o cache dele pode passar de 5 GB. YouTube, Netflix e apps de podcast guardam os episódios baixados como conteúdo off-line, não como cache; esses são apagados na seção Downloads do app, não nas Configurações.',
            'Dois caches nunca aparecem nas configurações de app nenhum. O cache de miniaturas da galeria (uma pasta oculta .thumbnails no diretório DCIM) cresce a cada foto e pode chegar a vários gigabytes, e arquivos de instalação (.apk) baixados para instalação manual ficam em Downloads muito depois de instalados. Os dois são seguros para apagar e os dois são cobertos pela limpeza com um toque do Disk Mop, junto com arquivos temporários e pastas vazias, com o tamanho de cada item mostrado antes de você confirmar.',
          ],
        },
        {
          title: 'Limpar o cache acelera o Android?',
          content: [
            'Não, e a crença de que acelera é o motivo de existirem tantos apps de limpeza. O cache existe para deixar o app mais rápido; depois de limpá-lo, o app precisa baixar ou regenerar o que acabou de perder, então a próxima abertura é mais lenta, não mais rápida. O Android gerencia a memória sozinho e fecha apps em segundo plano quando precisa; aceleradores de RAM que os matam forçam o sistema a recarregar tudo e drenam a bateria.',
            'O armazenamento afeta o desempenho em um caso específico: quando o celular está mais de cerca de 90 por cento cheio, a memória flash fica sem blocos vazios para gravar e cada salvamento fica lento. É aí que limpar caches, apagar vídeos grandes e remover downloads antigos produz uma diferença perceptível, não porque o cache era lento, mas porque o espaço livre tinha acabado.',
            'Então a regra honesta é limpar o cache quando você precisa do espaço, não em um cronograma. O Disk Mop segue essa regra: não afirma acelerar o celular, mostra quanto cada item custa em armazenamento, e seu gerenciador de apps lista os caches por tamanho e os apps que você não abriu em 30 dias, para que a decisão seja sua.',
          ],
        },
      ],
      dataTable: {
        caption: 'O que cada ação de armazenamento do Android remove',
        columns: ['Ação', 'O que é apagado', 'Desconecta você?', 'Configurações mantidas?'],
        rows: [
          ['Limpar cache', 'Arquivos temporários, miniaturas, prévias baixadas', 'Não', 'Sim'],
          ['Limpar armazenamento / Limpar dados', 'Tudo o que o app guardou no celular, incluindo conteúdo off-line', 'Sim', 'Não'],
          ['Desinstalar', 'O app e seus dados, exceto pastas deixadas em Android/media', 'Sim', 'Não'],
          ['Arquivar ou remover mantendo os dados (Android 15+)', 'O código do app; dados e configurações ficam guardados para reinstalar', 'Não', 'Sim'],
        ],
      },
      faq: [
        {
          question: 'Com que frequência devo limpar o cache no Android?',
          answer:
            'Só quando precisar do espaço. O cache deixa os apps mais rápidos, e limpá-lo em um cronograma só força os apps a baixar os mesmos dados de novo. Olhe Configurações > Armazenamento quando o celular avisar, e limpe então os maiores caches.',
        },
        {
          question: 'É seguro limpar o cache de todos os apps?',
          answer:
            'Sim. Cache é, por definição, um dado que o app consegue reconstruir. Você não será desconectado e nenhuma configuração muda. Limpar armazenamento ou Limpar dados é a opção a evitar, a menos que você queira redefinir o app.',
        },
        {
          question: 'Por que o cache volta depois que eu limpo?',
          answer:
            'Porque o app o reconstrói conforme você usa; é para isso que o cache serve. Voltar a algumas centenas de megabytes é normal. Se um app reconstrói gigabytes em poucos dias, procure nas configurações dele um limite de cache ou de conteúdo off-line.',
        },
        {
          question: 'Apps de limpeza que prometem mais velocidade funcionam?',
          answer:
            'Não. Matar apps em segundo plano e esvaziar a RAM faz o Android recarregar tudo e gastar mais bateria. Um limpador útil libera armazenamento e mostra o que apaga; desconfie dos que prometem velocidade, mostram anúncios ou pedem uma conta.',
        },
      ],
      verdict: [
        'Limpar o cache no Android é seguro, é feito por app e vale a pena quando o armazenamento fica baixo, não em um cronograma. O espaço de verdade está nos navegadores, apps sociais, caches de streaming, na pasta de miniaturas e nos instaladores esquecidos, e o único botão a evitar é Limpar armazenamento, que redefine o app.',
        'O Disk Mop para Android coloca tudo isso em uma só tela: caches dos apps ordenados por tamanho, apps sem uso há 30 dias e uma limpeza com um toque para miniaturas, arquivos temporários, instaladores e pastas vazias. Ele mostra cada tamanho antes de apagar, não seleciona nada por você e não finge deixar o celular mais rápido.',
      ],
      ctaText: 'Baixe o Disk Mop para Android no Google Play',
    },
    ja: {
      title: 'Android でキャッシュを削除する方法: アプリごとの手順、消えるもの、やる価値がある場合',
      metaDescription:
        'Android 8 で「キャッシュをすべて削除」ボタンは廃止されました。どの Android でもアプリのキャッシュを削除する手順、「ストレージを消去」との違い、キャッシュ削除で速くならない理由を解説します。',
      subtitle:
        'キャッシュとデータの違い、Pixel・Samsung・Xiaomi での設定の場所、クリーナーアプリが実際にしていること',
      intro: [
        '短い答え: Android では、アプリのキャッシュ削除は安全で何も失われず、設定 > アプリ > アプリ > ストレージとキャッシュ > キャッシュを削除 からアプリごとに行います。Android 8 以降、システム全体の「すべてのキャッシュを削除」ボタンは存在しないため、全アプリを一度に処理する唯一の方法はクリーナーアプリです。キャッシュを削除しても端末は速くなりません。空き容量が増えるだけで、意味があるのはストレージがほぼ満杯のときだけです。',
        'この記事では、キャッシュとアプリデータの違いを説明し、主要な 3 つの Android UI でボタンがどこにあるかを示し、キャッシュが実際にギガバイト単位に達するアプリを挙げ、やる価値のあることとマーケティング上の宣伝文句を切り分けます。',
      ],
      keyTakeaways: [
        'キャッシュはアプリが再生成できる一時データです。サムネイル、プレビュー、ダウンロード済み画像など。削除してもログアウトされず、設定も変わりません。',
        'ストレージを消去（データを削除とも表示されます）は別物です。アプリを初期インストール状態に戻し、ログアウトし、オフラインコンテンツを削除します。',
        'Android 8（Oreo）で、すべてのキャッシュを一度に消していた「キャッシュデータ」の項目が廃止されました。以降、設定はアプリごとです。',
        'ブラウザー、SNS、ストリーミングアプリが常連です。Chrome、Instagram、YouTube、Spotify のキャッシュはそれぞれ数ギガバイトに達することがあります。',
        'キャッシュ削除で Android は速くなりません。性能が落ちるのはストレージが約 90% を超えて埋まったときだけで、RAM ブースターは状況を悪化させます。',
        'ギャラリーが使うサムネイルキャッシュは単独でギガバイト単位に育つことがあり、削除しても安全です。閲覧するたびに再生成されます。',
      ],
      howTo: {
        name: 'Android スマートフォンでアプリのキャッシュを削除する',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'キャッシュが最も大きいアプリを見つける',
            text: '設定 > ストレージ を開き、アプリ をタップします（Samsung では 設定 > デバイスケア > ストレージ > アプリ）。一覧はサイズ順に並んでいるので、上位の項目がキャッシュ削除の効果が出る場所です。',
          },
          {
            name: 'アプリ 1 つのキャッシュを削除する',
            text: 'アプリをタップし、ストレージとキャッシュ（Pixel）、ストレージ（Samsung）、または データを消去（Xiaomi と HyperOS）に進んで キャッシュを削除 を選びます。アプリを初期化したいのでなければ、ストレージを消去 や すべてのデータを消去 はタップしないでください。',
          },
          {
            name: 'ブラウザーのキャッシュを削除する',
            text: 'Chrome で三点メニュー > 設定 > プライバシーとセキュリティ > 閲覧履歴データの削除 を開き、キャッシュされた画像とファイル だけにチェックを入れて削除します。ウェブサイトからログアウトしたいのでなければ、Cookie はチェックしないままにします。',
          },
          {
            name: 'ストリーミングアプリのオフラインコンテンツを確認する',
            text: 'Spotify では 設定 > ストレージ にキャッシュとダウンロード済みの音楽が別々に表示され、キャッシュを削除 してもダウンロードは残ります。YouTube と Netflix はオフライン動画を ダウンロード に保存しているので、視聴済みのものを削除します。',
          },
          {
            name: 'サムネイルキャッシュ、インストーラー、残骸を取り除く',
            text: '.thumbnails フォルダー、ダウンロード に残った古い APK インストーラー、一時ファイル、空のフォルダーは設定からは触れません。Disk Mop の Android 版はこれらをワンタップで削除し、同じ画面にアプリのキャッシュをサイズ順で一覧表示します。',
          },
          {
            name: 'ストレージを消去の前に立ち止まる',
            text: 'アプリの調子が悪いときは、端末の再起動かアプリの更新でたいてい直ります。ストレージを消去 は最後の手段として、ログイン情報とオフラインコンテンツを復元できることを確かめてから使ってください。',
          },
        ],
      },
      sections: [
        {
          title: 'キャッシュとストレージ: 重要な違い',
          content: [
            'Android のアプリはどれも 2 種類のファイルを持っています。キャッシュには、アプリが再ダウンロードや再生成できるものが入ります。Instagram の画像プレビュー、ニュースアプリの記事本文、ギャラリーがスクロール中に表示するサムネイルなどです。アプリのストレージ（データと表示されることもあります）には、再構築できないものが入ります。ログインセッション、設定、オフラインダウンロード、未送信の下書きです。',
            'したがってキャッシュの削除は無害です。次回の起動時にプレビューを作り直すぶん少し遅くなる、それだけです。ストレージの消去はリセットです。アプリはインストール直後のように振る舞い、ログアウトされ、オフライン地図、ダウンロード済みプレイリスト、ローカルの文書は消えます。Android はこの 2 つのボタンを隣り合わせに置いているため、容量を空けようとしてデータを失う人が出ます。',
            '下の表は、各操作で何が消えるかをまとめたものです。迷ったらまずキャッシュを削除し、設定 > ストレージ をもう一度確認してください。その上でストレージを消去しても得られる容量はたいてい小さく、代償は大きいです。',
          ],
        },
        {
          title: 'Pixel、Samsung、Xiaomi でボタンはどこにあるか',
          content: [
            'Android には、バージョン 8（Oreo）で 設定 > ストレージ から「キャッシュデータ」の項目が消えて以来、全体のキャッシュボタンがありません。Pixel や素の Android に近い端末では、設定 > アプリ > すべてのアプリを表示 > アプリ > ストレージとキャッシュ > キャッシュを削除 が経路です。設定 > ストレージ > アプリ には同じアプリがサイズ順に並ぶので、重いものを見つける最速の方法です。',
            'Samsung の One UI はボタンを 1 階層下に置いています。設定 > アプリ > アプリ > ストレージ > キャッシュを削除 で、隣に データを削除 ボタンがあります。デバイスケア（設定 > デバイスケア > ストレージ）にはサイズ順のアプリ表示と独自のクリーンアップ提案がありますが、安全とはいえ、ほとんどは設定ですでにできることの重複です。',
            'MIUI または HyperOS の Xiaomi、Redmi、POCO 端末では 設定 > アプリ > アプリを管理 > アプリ > データを消去 を使います。ここで キャッシュを削除 と すべてのデータを消去 が別々の選択肢として小さなメニューに出ます。内蔵のクリーナーアプリもキャッシュを対象にしますが、削除の提案が強引で広告も表示されるため、確定する前に一覧を読んでください。',
          ],
        },
        {
          title: '本当に意味のあるキャッシュ',
          content: [
            'ほとんどのアプリのキャッシュは数メガバイトで、削除する手間に見合いません。ギガバイト級は一握りのカテゴリーに集中しています。ブラウザー: Chrome は日常的に 1〜3 GB のキャッシュ済みページと画像を抱えます。SNS: Instagram、TikTok、Facebook、X はスクロールで通り過ぎた動画と画像をすべてキャッシュし、ヘビーユーザーの端末では 2〜5 GB が珍しくありません。地図: Google Maps は地図タイルをキャッシュし、1 GB を超えることがあります。',
            'ストリーミングアプリは、キャッシュとオフラインダウンロードが混在するため特殊です。Spotify の 設定 > ストレージ は両者を分けて表示し、キャッシュだけで 5 GB を超えることがあります。YouTube、Netflix、ポッドキャストアプリはダウンロード済みのエピソードをキャッシュではなくオフラインコンテンツとして保持しており、設定ではなくアプリ内の ダウンロード セクションから削除します。',
            'どのアプリの設定にも出てこないキャッシュが 2 つあります。ギャラリーのサムネイルキャッシュ（DCIM ディレクトリ内の隠しフォルダー .thumbnails）は写真が増えるたびに育ち、数ギガバイトに達することがあります。サイドロード用にダウンロードしたインストールファイル（.apk）は、インストール後もずっと ダウンロード に残ります。どちらも安全に削除でき、どちらも一時ファイルや空フォルダーとともに Disk Mop のワンタップ不要ファイル削除の対象で、確定前に各項目のサイズが表示されます。',
          ],
        },
        {
          title: 'キャッシュを削除すると Android は速くなる？',
          content: [
            'なりません。速くなるという思い込みこそ、これほど多くのクリーナーアプリが存在する理由です。キャッシュはアプリを速くするために存在します。削除すると、アプリは失ったものを再ダウンロードまたは再生成しなければならず、次の起動は速くなるどころか遅くなります。Android はメモリを自分で管理し、必要になればバックグラウンドのアプリを閉じます。それらを強制終了する RAM ブースターアプリはシステムにすべての再読み込みを強い、バッテリーを消耗させます。',
            'ストレージが性能に影響するのは特定の 1 つのケースだけです。端末が約 90% を超えて埋まると、フラッシュストレージは書き込める空きブロックを使い果たし、あらゆる保存が遅くなります。そのときこそ、キャッシュの削除、大きな動画の削除、古いダウンロードの整理が目に見える違いを生みます。キャッシュが遅かったからではなく、空き容量がなくなっていたからです。',
            'つまり正直なルールは、スケジュールではなく容量が必要なときにキャッシュを削除する、です。Disk Mop はこのルールに従います。端末を速くするとは言わず、各項目がストレージをどれだけ使っているかを示し、アプリマネージャーはキャッシュをサイズ順に、そして 30 日間開いていないアプリを一覧にして、判断はあなたに委ねます。',
          ],
        },
      ],
      dataTable: {
        caption: 'Android の各ストレージ操作で削除されるもの',
        columns: ['操作', '削除されるもの', 'ログアウトされる？', '設定は残る？'],
        rows: [
          ['キャッシュを削除', '一時ファイル、サムネイル、ダウンロード済みプレビュー', 'いいえ', 'はい'],
          ['ストレージを消去 / データを削除', 'オフラインコンテンツを含む、アプリが端末に保存したすべて', 'はい', 'いいえ'],
          ['アンインストール', 'アプリとそのデータ（Android/media 配下に残るフォルダーを除く）', 'はい', 'いいえ'],
          ['データを残して削除 または アーカイブ（Android 15 以降）', 'アプリのコード。データと設定は再インストール用に保持', 'いいえ', 'はい'],
        ],
      },
      faq: [
        {
          question: 'Android のキャッシュはどのくらいの頻度で削除すべき？',
          answer:
            '容量が必要なときだけです。キャッシュはアプリを速くするもので、定期的に削除すると同じデータを再ダウンロードさせるだけです。端末が警告を出したら 設定 > ストレージ を見て、そのときに最も大きいキャッシュを削除してください。',
        },
        {
          question: 'すべてのアプリのキャッシュを削除しても安全？',
          answer:
            '安全です。キャッシュは定義上、アプリが再生成できるデータです。ログアウトされず、設定も変わりません。避けるべきは ストレージを消去 や データを削除 で、アプリを初期化するつもりがない限り触らないでください。',
        },
        {
          question: '削除してもキャッシュが戻ってくるのはなぜ？',
          answer:
            '使うたびにアプリが作り直すからです。それがキャッシュの役割です。数百メガバイトまで戻るのは正常です。数日でギガバイト単位に戻るアプリがあれば、そのアプリ自身の設定にオフラインやキャッシュの上限がないか確認してください。',
        },
        {
          question: '高速化をうたうクリーナーアプリは効果がある？',
          answer:
            'ありません。バックグラウンドのアプリを終了して RAM を空けると、Android はすべてを再読み込みしてバッテリーを余計に使います。役に立つクリーナーはストレージを空け、何を消すかを見せるものです。速度をうたう、広告を出す、アカウントを要求するものには注意してください。',
        },
      ],
      verdict: [
        'Android のキャッシュ削除は安全で、アプリごとに行い、スケジュールではなくストレージが少なくなったときにやる価値があります。本当に容量を食っているのはブラウザー、SNS、ストリーミングのキャッシュ、サムネイルフォルダー、忘れられたインストーラーで、避けるべき唯一のボタンはアプリを初期化する ストレージを消去 です。',
        'Disk Mop の Android 版はそのすべてを 1 つの画面にまとめます。サイズ順のアプリキャッシュ、30 日間使っていないアプリ、そしてサムネイル・一時ファイル・インストーラー・空フォルダーのワンタップ削除。削除前にすべてのサイズを表示し、勝手に何も選ばず、端末が速くなるふりもしません。',
      ],
      ctaText: 'Google Play で Android 版 Disk Mop を入手',
    },
  },
};
