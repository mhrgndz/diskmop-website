import type { Article } from "../types";
import { translations } from "./i18n/search-photos-by-content-iphone";

export const searchPhotosByContentIphone: Article = {
  slug: "search-photos-by-content-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-30",
  readingTime: 7,
  content: {
    en: {
      title:
        "How to Search iPhone Photos by What Is in Them: Car, Beach, Paris, Food",
      metaDescription:
        "Find any iPhone photo by what it shows or where it was taken. How Photos search works, and how DiskMop searches on your iPhone so you can review and clear results.",
      subtitle:
        "Words instead of scrolling: things, topics and places, matched on the phone itself",
      intro: [
        "Short answer: type a word into the Search tab of the Photos app and your iPhone finds pictures by what they show, where they were taken, who is in them and when. To go one step further and use the result to clean up, DiskMop for iPhone has its own search on the Home tab: type a thing (car, baby, beach), a topic (food, animals, sunsets), a place (Paris) or two together (Paris food), and it lists the matching photos with their count and approximate size, ready to review.",
        "This guide covers what the Photos app already searches well, why searching is also the fastest way to find what to remove from a library of thousands, how DiskMop's search works and what stays on your phone, and the limits worth knowing: it needs the first scan to finish, place search needs a photo's location, and recognition is a best guess.",
      ],
      keyTakeaways: [
        "The Search tab in the Photos app finds photos by their contents, places, people and dates; start there when you only want to look at a picture.",
        "DiskMop for iPhone searches the same library for things (car, baby, beach), topics (food, animals, sunsets) and places (Paris), and you can combine two, such as Paris food.",
        "Matching runs on the iPhone: it uses labels from the library scan, each photo's own location and a built-in list of about 34,000 places. The words you type are not sent to a map service or anywhere else.",
        "A city search covers photos taken within roughly 8 to 25 km of its center, depending on the size of the city.",
        "The Food & drinks, Animals and Sunsets topics leave out photos with people in them, and nothing is selected for you: you choose what to delete.",
        "A photo without a location cannot be found by place, and the search opens only after the first scan has finished; you can follow it on the Home tab.",
      ],
      dataTable: {
        caption: "What you can type into DiskMop's search",
        columns: ["Type", "Example", "How it is matched", "Covers"],
        rows: [
          [
            "Thing or scene",
            "car, beach, baby",
            "Labels from the library scan, used when the app is reasonably sure",
            "Photos",
          ],
          [
            "Topic",
            "food, animals, sunsets",
            "A group of related labels; photos with people in them are left out",
            "Photos",
          ],
          [
            "Place",
            "Paris, Antalya, France",
            "The photo's own location against a built-in list of about 34,000 places",
            "Photos and videos",
          ],
          [
            "Combination",
            "Paris food",
            "Both conditions together: food photos taken in Paris",
            "Photos",
          ],
        ],
      },
      howTo: {
        name: "Search iPhone photos by content or place and clear what you do not need",
        totalTime: "PT10M",
        steps: [
          {
            name: "Let the first scan finish",
            text: "Open DiskMop and wait for the library scan to end; you can follow it on the Home tab. Search opens when the scan is done, because it uses what the scan finds.",
          },
          {
            name: "Type a thing, a topic or a place",
            text: "Open Search photos on the Home tab and type a word such as car, baby, beach, Paris or Paris food. Suggestions appear under Things and topics and under Places, with the number of matches.",
          },
          {
            name: "Open a suggestion and look at the results",
            text: "The results show the number of photos and their approximate size. Scroll through them and touch and hold a photo to see it larger before you decide.",
          },
          {
            name: "Choose what to remove",
            text: "Tick the photos you want to remove, or tap Select all if the whole list is disposable. Nothing is selected for you.",
          },
          {
            name: "Review and delete",
            text: "Tap Delete. When you chose two or more photos, Review before deleting shows exactly what will go, then iOS asks you to confirm. Deleted photos wait 30 days in Recently Deleted; empty that album to get the space back at once.",
          },
        ],
      },
      sections: [
        {
          title: "What the Photos App Already Searches",
          content: [
            "The built-in Photos app has a Search tab. Type a word and it finds pictures by what they show, by the place where they were taken, by the people recognised in them and by date. For finding one picture, such as the dog photo from last summer, it is the right tool, and it works without any extra app.",
            "What the Photos app is built for is looking at pictures, not deciding which ones to remove. It does not tell you how much space a set of results takes, and it is not organised around a clean-up routine. That is where a search made for cleaning helps.",
          ],
        },
        {
          title: "Why Search Is Also the Fastest Way to Clean Up",
          content: [
            "A library of several thousand photos is hard to clean by scrolling, because most of it is not clutter and you cannot tell by looking at tiny thumbnails which parts are. Search flips the order: first you name a category you suspect is full of junk, then you look at only those photos. All the dishes you photographed at one restaurant, every picture of the car you sold, the sunsets from a holiday where you took forty of the same one.",
            "It also lets you clean around an event or a place. Typing the name of a city brings up everything taken there, so you can keep the best photos of a trip and clear the rest in minutes. For the kinds of clutter that have their own tools, such as [near-identical shots](/blog/find-duplicate-similar-photos-iphone), [screenshots](/blog/delete-screenshots-iphone) or [blurry photos](/blog/delete-blurry-photos-iphone), use those lists first and search for everything else.",
          ],
        },
        {
          title: "How Search Works in DiskMop for iPhone",
          content: [
            "On the Home tab, open Search photos and type what you are looking for: a thing, a place or both. While you type, suggestions appear in two groups, Things and topics and Places, each with the number of matches. Typing two ideas together, such as Paris food, finds the food photos taken in Paris. The same words also work as a filter inside the lists DiskMop builds, for example to narrow a group of similar photos to the ones taken at one beach.",
            "Choose a suggestion and you see the matching photos with their count and approximate size. Tick the ones you want to remove or tap Select all. Nothing is selected for you; the Food & drinks, Animals and Sunsets topics even leave out photos with people in them, so a family dinner does not end up in a list of dishes. Deleting goes through the same review screen and iOS confirmation as everywhere else in the app.",
          ],
        },
        {
          title: "What Is Matched on Your iPhone",
          content: [
            "Nothing you type leaves the phone. Things and topics come from labels that the scan already produces on the iPhone, and a photo is found by a label only when the app is reasonably sure about it. Places come from the location stored in each photo and from a list of about 34,000 cities and regions built into the app, so the word you type is never sent to a map service. A city search includes photos taken within roughly 8 to 25 km of its center, depending on how large the city is.",
            "DiskMop works without an account, and the privacy label says Data Not Collected. Search follows the same rule as the rest of the app: it reads your library on the device and does not upload it.",
          ],
        },
        {
          title: "Limits Worth Knowing",
          content: [
            "Search opens after the first scan finishes, so on a very large library it is not available during the first minutes. Recognition is a best guess: expect an occasional wrong photo in a list, which is why nothing is selected for you and why the review screen exists. Videos are not classified by content, so they can be found by place but not by what they show.",
            "Place search needs photos that have a location. If you turned location off in the camera, or [removed the location before sharing](/blog/remove-location-from-photos-iphone) and kept only the clean copies, those copies cannot be found by place. And if you type something DiskMop does not recognise, it says so and suggests typing a place, a thing or a topic. For people by name, use the People album in the Photos app.",
          ],
        },
      ],
      faq: [
        {
          question: "Does DiskMop's photo search need an internet connection?",
          answer:
            "No. The matching runs on your iPhone, using labels from the library scan, each photo's own location and a place list built into the app. The words you type are not sent anywhere.",
        },
        {
          question: "Why can I not search right after installing DiskMop?",
          answer:
            "Search uses what the library scan finds, so it opens when the first scan has finished. You can follow the scan on the Home tab; later scans only look at new photos.",
        },
        {
          question: "Why is a photo not found when I search for a place?",
          answer:
            "Place search relies on the location stored in the photo. A photo taken with location turned off, or a copy from which the location was removed, has none and cannot be matched to a place.",
        },
        {
          question: "Can I search for a person by name?",
          answer:
            "DiskMop searches for things, topics and places. For people by name, use the People album and the Search tab in the Photos app.",
        },
        {
          question: "Does searching delete anything?",
          answer:
            "No. Searching only lists photos. Nothing is selected for you, and deleting goes through a review screen and iOS's own confirmation. Deleted photos then wait 30 days in Recently Deleted.",
        },
        {
          question: "Is search free in DiskMop?",
          answer:
            "Search and scanning are free. Without a subscription you can delete up to ten photos a day, plus extra deletions earned with streaks and trophies, and DiskMop Pro removes the limit.",
        },
      ],
      verdict: [
        "Searching is the quickest way to find a photo and, in a large library, the quickest way to decide what to remove: name a category, look only at those photos and clear the ones you do not need. The Photos app search is the right place to find a single picture.",
        "DiskMop for iPhone adds a search built for cleaning: things, topics and places, matched on the phone, with the count and approximate size of each result and a review before anything is deleted. Scanning and search are free, and up to ten photos a day can be deleted for free.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    tr: {
      title:
        "iPhone Fotoğraflarını İçeriğine Göre Arama: Araba, Plaj, Paris, Yemek",
      metaDescription:
        "Herhangi bir iPhone fotoğrafını gösterdiği şeye ya da çekildiği yere göre bulun. Fotoğraflar aramasının nasıl çalıştığını ve DiskMop'un iPhone'da nasıl aradığını anlatıyoruz.",
      subtitle:
        "Kaydırmak yerine kelimeler: nesneler, konular ve yerler, telefonun kendisinde eşleşir",
      intro: [
        "Kısa cevap: Fotoğraflar uygulamasının Ara sekmesine bir kelime yazın; iPhone'unuz fotoğrafları gösterdikleri şeye, çekildikleri yere, içindeki kişilere ve tarihe göre bulur. Bir adım ileri gidip sonucu temizlik için kullanmak isterseniz, iPhone için DiskMop'un Ana Sayfa sekmesinde kendi araması vardır: bir nesne (araba, bebek, plaj), bir konu (yemek, hayvanlar, gün batımı), bir yer (Paris) ya da ikisini birlikte (Paris yemek) yazın; eşleşen fotoğrafları sayıları ve yaklaşık boyutlarıyla, incelemeye hazır biçimde listeler.",
        "Bu rehber, Fotoğraflar uygulamasının zaten iyi aradığı şeyleri, aramanın binlerce fotoğraflık bir kitaplıkta neyin silineceğini bulmanın da en hızlı yolu olmasını, DiskMop aramasının nasıl çalıştığını ve telefonunuzda neyin kaldığını, ayrıca bilmeye değer sınırları anlatır: ilk taramanın bitmesi gerekir, yere göre arama fotoğrafın konumuna ihtiyaç duyar ve tanıma bir tahmindir.",
      ],
      keyTakeaways: [
        "Fotoğraflar uygulamasındaki Ara sekmesi fotoğrafları içeriğine, yerine, kişilere ve tarihe göre bulur; yalnızca bir fotoğrafa bakmak istiyorsanız oradan başlayın.",
        "iPhone için DiskMop aynı kitaplıkta nesne (araba, bebek, plaj), konu (yemek, hayvanlar, gün batımı) ve yer (Paris) arar; ikisini birleştirebilirsiniz, örneğin Paris yemek.",
        "Eşleştirme iPhone'da çalışır: kitaplık taramasının etiketlerini, her fotoğrafın kendi konumunu ve uygulamaya gömülü yaklaşık 34.000 yerlik bir listeyi kullanır. Yazdığınız kelimeler bir harita servisine ya da başka bir yere gönderilmez.",
        "Şehir araması, şehrin büyüklüğüne göre merkezine yaklaşık 8 ila 25 km mesafede çekilmiş fotoğrafları kapsar.",
        "Yemek ve içecek, Hayvanlar ve Gün batımı konuları içinde kişi olan fotoğrafları dışarıda bırakır ve sizin yerinize hiçbir şey seçilmez: neyin silineceğine siz karar verirsiniz.",
        "Konumu olmayan bir fotoğraf yere göre bulunamaz ve arama ilk tarama bittikten sonra açılır; taramayı Ana Sayfa sekmesinden izleyebilirsiniz.",
      ],
      dataTable: {
        caption: "DiskMop aramasına yazabilecekleriniz",
        columns: ["Tür", "Örnek", "Nasıl eşleşir", "Kapsam"],
        rows: [
          [
            "Nesne ya da sahne",
            "araba, plaj, bebek",
            "Kitaplık taramasının etiketleri; uygulama yeterince eminse kullanılır",
            "Fotoğraflar",
          ],
          [
            "Konu",
            "yemek, hayvanlar, gün batımı",
            "İlişkili etiketlerden oluşan grup; içinde kişi olan fotoğraflar dışarıda kalır",
            "Fotoğraflar",
          ],
          [
            "Yer",
            "Paris, Antalya, Fransa",
            "Fotoğrafın kendi konumu ile uygulamaya gömülü yaklaşık 34.000 yerlik liste",
            "Fotoğraflar ve videolar",
          ],
          [
            "Birleşik",
            "Paris yemek",
            "İki koşul birlikte: Paris'te çekilmiş yemek fotoğrafları",
            "Fotoğraflar",
          ],
        ],
      },
      howTo: {
        name: "iPhone fotoğraflarını içeriğe ya da yere göre arayıp gereksizleri temizleme",
        totalTime: "PT10M",
        steps: [
          {
            name: "İlk taramanın bitmesini bekleyin",
            text: "DiskMop'u açın ve kitaplık taramasının bitmesini bekleyin; Ana Sayfa sekmesinden izleyebilirsiniz. Arama, taramanın bulduklarını kullandığı için tarama bitince açılır.",
          },
          {
            name: "Bir nesne, konu ya da yer yazın",
            text: "Ana Sayfa'da Fotoğraflarda ara'yı açın ve araba, bebek, plaj, Paris ya da Paris yemek gibi bir kelime yazın. Öneriler, eşleşme sayısıyla birlikte Konular ve nesneler ile Yerler altında çıkar.",
          },
          {
            name: "Bir öneriyi açıp sonuçlara bakın",
            text: "Sonuçlar fotoğraf sayısını ve yaklaşık boyutu gösterir. Aralarında gezinin; karar vermeden önce bir fotoğrafı büyük görmek için üzerine basılı tutun.",
          },
          {
            name: "Neyi sileceğinizi seçin",
            text: "Silmek istediğiniz fotoğrafları işaretleyin ya da listenin tamamı gereksizse Tümünü seç'e dokunun. Sizin yerinize hiçbir şey seçilmez.",
          },
          {
            name: "İnceleyin ve silin",
            text: "Sil'e dokunun. İki ya da daha fazla fotoğraf seçtiyseniz Silmeden önce incele neyin gideceğini tam olarak gösterir, ardından iOS onay ister. Silinen fotoğraflar 30 gün Son Silinenler'de bekler; yeri hemen geri almak için o albümü boşaltın.",
          },
        ],
      },
      sections: [
        {
          title: "Fotoğraflar Uygulaması Zaten Neyi Arıyor",
          content: [
            "Yerleşik Fotoğraflar uygulamasında bir Ara sekmesi vardır. Bir kelime yazarsınız; fotoğrafları gösterdikleri şeye, çekildikleri yere, içlerinde tanınan kişilere ve tarihe göre bulur. Geçen yazın köpek fotoğrafı gibi tek bir fotoğrafı bulmak için doğru araçtır ve ek uygulama gerektirmez.",
            "Fotoğraflar uygulaması fotoğraflara bakmak için yapılmıştır; hangisinin silineceğine karar vermek için değil. Bir sonuç kümesinin ne kadar yer kapladığını söylemez ve bir temizlik düzeni etrafında kurulmamıştır. Temizlik için yapılmış bir arama burada işe yarar.",
          ],
        },
        {
          title: "Arama Neden En Hızlı Temizlik Yolu da",
          content: [
            "Birkaç bin fotoğraflık bir kitaplığı kaydırarak temizlemek zordur; çünkü çoğu fotoğraf çöp değildir ve minik küçük resimlere bakarak hangilerinin olduğunu anlayamazsınız. Arama sırayı tersine çevirir: önce çöp dolu olduğunu sandığınız bir kategorinin adını yazarsınız, sonra yalnızca o fotoğraflara bakarsınız. Bir lokantada çektiğiniz bütün yemekler, sattığınız arabanın bütün fotoğrafları, aynısından kırk tane çektiğiniz bir tatilin gün batımları.",
            "Bir olayın ya da yerin çevresini temizlemenize de izin verir. Bir şehrin adını yazınca orada çekilen her şey gelir; bir gezinin en iyi fotoğraflarını saklayıp gerisini dakikalar içinde silebilirsiniz. Kendi araçları olan dağınıklık türleri için, örneğin [birbirine çok benzeyen kareler](/blog/find-duplicate-similar-photos-iphone), [ekran görüntüleri](/blog/delete-screenshots-iphone) ya da [bulanık fotoğraflar](/blog/delete-blurry-photos-iphone), önce o listeleri kullanın; geri kalan her şey için arayın.",
          ],
        },
        {
          title: "iPhone İçin DiskMop'ta Arama Nasıl Çalışır",
          content: [
            "Ana Sayfa'da Fotoğraflarda ara'yı açın ve aradığınızı yazın: bir nesne, bir yer ya da ikisi. Yazarken öneriler iki grupta çıkar, Konular ve nesneler ile Yerler; her birinin yanında eşleşme sayısı vardır. İki fikri birlikte yazmak, örneğin Paris yemek, Paris'te çekilmiş yemek fotoğraflarını bulur. Aynı kelimeler DiskMop'un oluşturduğu listelerin içinde de süzgeç olarak çalışır; örneğin benzer fotoğraflardan oluşan bir grubu tek bir plajda çekilenlere daraltabilirsiniz.",
            "Bir öneriyi seçtiğinizde eşleşen fotoğrafları sayıları ve yaklaşık boyutlarıyla görürsünüz. Silmek istediklerinizi işaretleyin ya da Tümünü seç'e dokunun. Sizin yerinize hiçbir şey seçilmez; Yemek ve içecek, Hayvanlar ve Gün batımı konuları içinde kişi olan fotoğrafları bile dışarıda bırakır, böylece bir aile yemeği yemek listesine düşmez. Silme, uygulamanın başka her yerindeki gibi aynı inceleme ekranından ve iOS onayından geçer.",
          ],
        },
        {
          title: "iPhone'unuzda Neyin Eşleştiği",
          content: [
            "Yazdığınız hiçbir şey telefondan çıkmaz. Nesneler ve konular, taramanın iPhone'da zaten ürettiği etiketlerden gelir ve bir fotoğraf bir etiketle ancak uygulama o konuda yeterince eminse bulunur. Yerler, her fotoğrafta saklı konumdan ve uygulamaya gömülü yaklaşık 34.000 şehir ve bölgelik bir listeden gelir; yazdığınız kelime bu yüzden bir harita servisine gönderilmez. Şehir araması, şehrin büyüklüğüne göre merkezine yaklaşık 8 ila 25 km mesafede çekilmiş fotoğrafları da içerir.",
            "DiskMop hesapsız çalışır ve gizlilik etiketi Veri Toplanmıyor der. Arama uygulamanın geri kalanıyla aynı kuralı izler: kitaplığınızı cihazda okur, yüklemez.",
          ],
        },
        {
          title: "Bilmeye Değer Sınırlar",
          content: [
            "Arama ilk tarama bittikten sonra açılır; bu yüzden çok büyük bir kitaplıkta ilk dakikalarda kullanılamaz. Tanıma bir tahmindir: bir listede ara sıra yanlış fotoğraf bekleyin; sizin yerinize hiçbir şeyin seçilmemesi ve inceleme ekranının var olması bu yüzdendir. Videolar içeriğine göre sınıflandırılmaz; yere göre bulunabilir ama gösterdiği şeye göre bulunamaz.",
            "Yere göre arama, konumu olan fotoğraflar ister. Kamerada konumu kapattıysanız ya da [paylaşmadan önce konumu sildiyseniz](/blog/remove-location-from-photos-iphone) ve yalnızca temiz kopyaları tuttuysanız, o kopyalar yere göre bulunamaz. DiskMop'un tanımadığı bir şey yazarsanız bunu söyler ve bir yer, nesne ya da konu yazmanızı önerir. Kişileri ada göre bulmak için Fotoğraflar uygulamasındaki Kişiler albümünü kullanın.",
          ],
        },
      ],
      faq: [
        {
          question:
            "DiskMop'un fotoğraf araması internet bağlantısı gerektirir mi?",
          answer:
            "Hayır. Eşleştirme iPhone'unuzda çalışır; kitaplık taramasının etiketlerini, her fotoğrafın kendi konumunu ve uygulamaya gömülü yer listesini kullanır. Yazdığınız kelimeler hiçbir yere gönderilmez.",
        },
        {
          question: "DiskMop'u kurar kurmaz neden arama yapamıyorum?",
          answer:
            "Arama, kitaplık taramasının bulduklarını kullanır; bu yüzden ilk tarama bitince açılır. Taramayı Ana Sayfa sekmesinden izleyebilirsiniz; sonraki taramalar yalnızca yeni fotoğraflara bakar.",
        },
        {
          question: "Bir yer aradığımda neden bir fotoğraf bulunmuyor?",
          answer:
            "Yere göre arama fotoğrafta saklı konuma dayanır. Konum kapalıyken çekilmiş bir fotoğrafın ya da konumu silinmiş bir kopyanın konumu yoktur ve bir yerle eşleştirilemez.",
        },
        {
          question: "Bir kişiyi adıyla arayabilir miyim?",
          answer:
            "DiskMop nesne, konu ve yer arar. Kişileri ada göre bulmak için Fotoğraflar uygulamasındaki Kişiler albümünü ve Ara sekmesini kullanın.",
        },
        {
          question: "Arama bir şey siler mi?",
          answer:
            "Hayır. Arama yalnızca fotoğrafları listeler. Sizin yerinize hiçbir şey seçilmez ve silme bir inceleme ekranından ve iOS'un kendi onayından geçer. Silinen fotoğraflar sonra 30 gün Son Silinenler'de bekler.",
        },
        {
          question: "DiskMop'ta arama ücretsiz mi?",
          answer:
            "Arama ve tarama ücretsizdir. Abonelik olmadan günde on fotoğrafa kadar silebilir, ayrıca seriler ve kupalarla ek silme hakkı kazanabilirsiniz; DiskMop Pro sınırı kaldırır.",
        },
      ],
      verdict: [
        "Arama, bir fotoğrafı bulmanın en hızlı yoludur ve büyük bir kitaplıkta neyin silineceğine karar vermenin de en hızlı yoludur: bir kategorinin adını yazın, yalnızca o fotoğraflara bakın ve gereksiz olanları temizleyin. Tek bir fotoğrafı bulmak için Fotoğraflar uygulamasının araması doğru yerdir.",
        "iPhone için DiskMop temizlik için yapılmış bir arama ekler: nesneler, konular ve yerler, telefonda eşleşir; her sonucun sayısı ve yaklaşık boyutu gösterilir ve bir şey silinmeden önce inceleme vardır. Tarama ve arama ücretsizdir; günde on fotoğrafa kadar ücretsiz silinebilir.",
      ],
      ctaText: "iPhone için DiskMop'u App Store'da edinin",
    },
    de: {
      title: "iPhone-Fotos nach Inhalt durchsuchen: Auto, Strand, Paris, Essen",
      metaDescription:
        "Finden Sie jedes iPhone-Foto nach Inhalt oder Aufnahmeort. Wie die Fotos-Suche arbeitet und wie DiskMop auf dem iPhone sucht, damit Sie Treffer prüfen und löschen können.",
      subtitle:
        "Wörter statt Scrollen: Dinge, Themen und Orte, direkt auf dem Handy abgeglichen",
      intro: [
        "Kurze Antwort: Tippen Sie in der Fotos-App im Tab Suchen ein Wort ein, und Ihr iPhone findet Bilder nach dem, was sie zeigen, nach Aufnahmeort, nach den erkannten Personen und nach dem Datum. Wer einen Schritt weitergehen und das Ergebnis zum Aufräumen nutzen will: DiskMop für das iPhone hat auf dem Tab Start eine eigene Suche. Geben Sie ein Ding (Auto, Baby, Strand), ein Thema (Essen, Tiere, Sonnenuntergänge), einen Ort (Paris) oder zwei zusammen (Paris Essen) ein, und die passenden Fotos erscheinen mit Anzahl und ungefährer Größe, bereit zur Prüfung.",
        "Dieser Ratgeber behandelt, was die Fotos-App schon gut durchsucht, warum Suchen auch der schnellste Weg ist, in Tausenden Fotos zu finden, was weg kann, wie die Suche in DiskMop funktioniert und was auf Ihrem Handy bleibt, und die Grenzen, die man kennen sollte: Der erste Scan muss fertig sein, die Ortssuche braucht den Standort eines Fotos, und die Erkennung ist eine Schätzung.",
      ],
      keyTakeaways: [
        "Der Tab Suchen in der Fotos-App findet Fotos nach Inhalt, Orten, Personen und Datum; beginnen Sie dort, wenn Sie nur ein Bild ansehen wollen.",
        "DiskMop für das iPhone durchsucht dieselbe Mediathek nach Dingen (Auto, Baby, Strand), Themen (Essen, Tiere, Sonnenuntergänge) und Orten (Paris); zwei lassen sich verbinden, etwa Paris Essen.",
        "Der Abgleich läuft auf dem iPhone: Er nutzt Labels aus dem Mediathek-Scan, den Standort jedes Fotos und eine eingebaute Liste mit rund 34.000 Orten. Ihre Eingabe wird weder an einen Kartendienst noch sonst irgendwohin gesendet.",
        "Eine Stadtsuche umfasst Fotos, die je nach Größe der Stadt etwa 8 bis 25 km vom Zentrum entfernt aufgenommen wurden.",
        "Die Themen Essen & Getränke, Tiere und Sonnenuntergänge lassen Fotos mit Personen aus, und nichts wird für Sie ausgewählt: Sie entscheiden, was gelöscht wird.",
        "Ein Foto ohne Standort lässt sich nicht nach Ort finden, und die Suche öffnet sich erst, wenn der erste Scan fertig ist; Sie können ihn auf dem Tab Start verfolgen.",
      ],
      dataTable: {
        caption: "Was Sie in die Suche von DiskMop eingeben können",
        columns: ["Art", "Beispiel", "Wie abgeglichen wird", "Umfasst"],
        rows: [
          [
            "Ding oder Szene",
            "Auto, Strand, Baby",
            "Labels aus dem Mediathek-Scan, wenn die App ausreichend sicher ist",
            "Fotos",
          ],
          [
            "Thema",
            "Essen, Tiere, Sonnenuntergänge",
            "Eine Gruppe verwandter Labels; Fotos mit Personen werden ausgelassen",
            "Fotos",
          ],
          [
            "Ort",
            "Paris, Antalya, Frankreich",
            "Der Standort des Fotos gegen eine eingebaute Liste von rund 34.000 Orten",
            "Fotos und Videos",
          ],
          [
            "Kombination",
            "Paris Essen",
            "Beide Bedingungen zusammen: Essensfotos, die in Paris entstanden",
            "Fotos",
          ],
        ],
      },
      howTo: {
        name: "iPhone-Fotos nach Inhalt oder Ort suchen und Unnötiges löschen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Den ersten Scan abwarten",
            text: "Öffnen Sie DiskMop und warten Sie, bis der Mediathek-Scan fertig ist; Sie können ihn auf dem Tab Start verfolgen. Die Suche öffnet sich nach dem Scan, weil sie nutzt, was der Scan findet.",
          },
          {
            name: "Ein Ding, ein Thema oder einen Ort eingeben",
            text: "Öffnen Sie auf dem Tab Start Fotos durchsuchen und tippen Sie ein Wort wie Auto, Baby, Strand, Paris oder Paris Essen. Vorschläge erscheinen unter Dinge und Themen und unter Orte, jeweils mit der Zahl der Treffer.",
          },
          {
            name: "Einen Vorschlag öffnen und die Ergebnisse ansehen",
            text: "Die Ergebnisse zeigen die Zahl der Fotos und ihre ungefähre Größe. Blättern Sie durch und halten Sie ein Foto gedrückt, um es vor der Entscheidung größer zu sehen.",
          },
          {
            name: "Auswählen, was weg soll",
            text: "Haken Sie die Fotos an, die Sie entfernen wollen, oder tippen Sie auf Alle auswählen, wenn die ganze Liste entbehrlich ist. Für Sie wird nichts ausgewählt.",
          },
          {
            name: "Prüfen und löschen",
            text: "Tippen Sie auf Löschen. Haben Sie zwei oder mehr Fotos gewählt, zeigt Vor dem Löschen prüfen genau, was verschwindet, danach bittet iOS um Bestätigung. Gelöschte Fotos warten 30 Tage in Zuletzt gelöscht; leeren Sie dieses Album, um den Platz sofort zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Was die Fotos-App schon durchsucht",
          content: [
            "Die eingebaute Fotos-App hat einen Tab Suchen. Sie tippen ein Wort, und sie findet Bilder nach dem, was sie zeigen, nach dem Aufnahmeort, nach den erkannten Personen und nach dem Datum. Um ein einzelnes Bild zu finden, etwa das Hundefoto vom letzten Sommer, ist sie das richtige Werkzeug und braucht keine zusätzliche App.",
            "Die Fotos-App ist zum Ansehen von Bildern gebaut, nicht zur Entscheidung, welche entfernt werden. Sie sagt Ihnen nicht, wie viel Platz eine Ergebnismenge belegt, und ist nicht um einen Aufräumablauf herum aufgebaut. Hier hilft eine Suche, die fürs Aufräumen gemacht ist.",
          ],
        },
        {
          title: "Warum Suchen auch der schnellste Weg zum Aufräumen ist",
          content: [
            "Eine Mediathek mit mehreren Tausend Fotos lässt sich durch Scrollen kaum aufräumen, weil der Großteil kein Ballast ist und man an winzigen Vorschaubildern nicht erkennt, welcher Teil es ist. Die Suche kehrt die Reihenfolge um: Zuerst nennen Sie eine Kategorie, in der Sie Ballast vermuten, dann sehen Sie nur diese Fotos an. Alle Gerichte, die Sie in einem Restaurant fotografiert haben, jedes Bild des verkauften Autos, die Sonnenuntergänge eines Urlaubs, in dem Sie vierzigmal dasselbe aufnahmen.",
            "Sie erlaubt es auch, rund um ein Ereignis oder einen Ort aufzuräumen. Der Name einer Stadt zeigt alles, was dort entstand, sodass Sie die besten Fotos einer Reise behalten und den Rest in Minuten löschen können. Für Ballast, der eigene Werkzeuge hat, etwa [fast identische Aufnahmen](/blog/find-duplicate-similar-photos-iphone), [Screenshots](/blog/delete-screenshots-iphone) oder [unscharfe Fotos](/blog/delete-blurry-photos-iphone), nutzen Sie zuerst diese Listen und suchen Sie dann alles andere.",
          ],
        },
        {
          title: "So funktioniert die Suche in DiskMop für das iPhone",
          content: [
            "Öffnen Sie auf dem Tab Start Fotos durchsuchen und tippen Sie ein, was Sie suchen: ein Ding, einen Ort oder beides. Beim Tippen erscheinen Vorschläge in zwei Gruppen, Dinge und Themen sowie Orte, jeweils mit der Zahl der Treffer. Zwei Begriffe zusammen, etwa Paris Essen, finden die Essensfotos, die in Paris entstanden. Dieselben Wörter funktionieren auch als Filter in den Listen, die DiskMop aufbaut, zum Beispiel um eine Gruppe ähnlicher Fotos auf die von einem bestimmten Strand einzugrenzen.",
            "Wählen Sie einen Vorschlag, sehen Sie die passenden Fotos mit Anzahl und ungefährer Größe. Haken Sie an, was weg soll, oder tippen Sie auf Alle auswählen. Für Sie wird nichts ausgewählt; die Themen Essen & Getränke, Tiere und Sonnenuntergänge lassen sogar Fotos mit Personen aus, damit ein Familienessen nicht in einer Liste von Gerichten landet. Das Löschen läuft über denselben Prüfbildschirm und dieselbe iOS-Bestätigung wie überall in der App.",
          ],
        },
        {
          title: "Was auf Ihrem iPhone abgeglichen wird",
          content: [
            "Nichts, was Sie eintippen, verlässt das Handy. Dinge und Themen stammen aus Labels, die der Scan auf dem iPhone ohnehin erzeugt, und ein Foto wird über ein Label nur gefunden, wenn die App sich ausreichend sicher ist. Orte stammen aus dem in jedem Foto gespeicherten Standort und aus einer in die App eingebauten Liste von rund 34.000 Städten und Regionen; das eingegebene Wort wird deshalb nie an einen Kartendienst gesendet. Eine Stadtsuche umfasst Fotos, die je nach Größe der Stadt etwa 8 bis 25 km vom Zentrum entfernt aufgenommen wurden.",
            "DiskMop funktioniert ohne Konto, und das Datenschutzlabel sagt Daten werden nicht erfasst. Die Suche folgt derselben Regel wie der Rest der App: Sie liest Ihre Mediathek auf dem Gerät und lädt sie nicht hoch.",
          ],
        },
        {
          title: "Grenzen, die man kennen sollte",
          content: [
            "Die Suche öffnet sich, nachdem der erste Scan fertig ist; in einer sehr großen Mediathek steht sie also in den ersten Minuten nicht zur Verfügung. Die Erkennung ist eine Schätzung: Rechnen Sie mit gelegentlich einem falschen Foto in einer Liste, deshalb wird nichts für Sie ausgewählt und deshalb gibt es den Prüfbildschirm. Videos werden nicht nach Inhalt klassifiziert; sie lassen sich nach Ort finden, aber nicht nach dem, was sie zeigen.",
            "Die Ortssuche braucht Fotos mit Standort. Haben Sie in der Kamera den Standort ausgeschaltet oder [vor dem Teilen den Standort entfernt](/blog/remove-location-from-photos-iphone) und nur die sauberen Kopien behalten, lassen sich diese Kopien nicht nach Ort finden. Geben Sie etwas ein, das DiskMop nicht erkennt, sagt die App das und schlägt vor, einen Ort, ein Ding oder ein Thema einzugeben. Für Personen nach Namen nutzen Sie das Album Personen in der Fotos-App.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Braucht die Fotosuche von DiskMop eine Internetverbindung?",
          answer:
            "Nein. Der Abgleich läuft auf Ihrem iPhone, mit Labels aus dem Mediathek-Scan, dem Standort jedes Fotos und einer in die App eingebauten Ortsliste. Ihre Eingaben werden nirgendwohin gesendet.",
        },
        {
          question:
            "Warum kann ich direkt nach der Installation von DiskMop nicht suchen?",
          answer:
            "Die Suche nutzt, was der Mediathek-Scan findet, und öffnet sich deshalb, wenn der erste Scan fertig ist. Sie können den Scan auf dem Tab Start verfolgen; spätere Scans prüfen nur neue Fotos.",
        },
        {
          question: "Warum wird ein Foto bei der Ortssuche nicht gefunden?",
          answer:
            "Die Ortssuche stützt sich auf den im Foto gespeicherten Standort. Ein Foto, das bei ausgeschaltetem Standort entstand, oder eine Kopie, aus der der Standort entfernt wurde, hat keinen und lässt sich keinem Ort zuordnen.",
        },
        {
          question: "Kann ich eine Person nach Namen suchen?",
          answer:
            "DiskMop sucht nach Dingen, Themen und Orten. Für Personen nach Namen nutzen Sie das Album Personen und den Tab Suchen in der Fotos-App.",
        },
        {
          question: "Löscht die Suche etwas?",
          answer:
            "Nein. Die Suche listet nur Fotos auf. Für Sie wird nichts ausgewählt, und das Löschen läuft über einen Prüfbildschirm und die eigene Bestätigung von iOS. Gelöschte Fotos warten danach 30 Tage in Zuletzt gelöscht.",
        },
        {
          question: "Ist die Suche in DiskMop kostenlos?",
          answer:
            "Suche und Scan sind kostenlos. Ohne Abo können Sie bis zu zehn Fotos pro Tag löschen, dazu zusätzliche Löschungen, die Sie mit Serien und Pokalen verdienen; DiskMop Pro hebt das Limit auf.",
        },
      ],
      verdict: [
        "Suchen ist der schnellste Weg, ein Foto zu finden, und in einer großen Mediathek auch der schnellste Weg zu entscheiden, was weg kann: Nennen Sie eine Kategorie, sehen Sie nur diese Fotos an und löschen Sie, was Sie nicht brauchen. Für ein einzelnes Bild ist die Suche der Fotos-App die richtige Stelle.",
        "DiskMop für das iPhone ergänzt eine Suche, die fürs Aufräumen gebaut ist: Dinge, Themen und Orte, auf dem Handy abgeglichen, mit Anzahl und ungefährer Größe jedes Ergebnisses und einer Prüfung, bevor etwas gelöscht wird. Scan und Suche sind kostenlos, und bis zu zehn Fotos pro Tag lassen sich gratis löschen.",
      ],
      ctaText: "DiskMop für das iPhone im App Store laden",
    },
    fr: {
      title:
        "Rechercher ses photos iPhone par contenu : voiture, plage, Paris, repas",
      metaDescription:
        "Retrouvez n'importe quelle photo iPhone par ce qu'elle montre ou son lieu de prise de vue. Comment fonctionne la recherche de Photos, et celle de DiskMop sur l'iPhone.",
      subtitle:
        "Des mots plutôt que le défilement : objets, thèmes et lieux, appariés sur le téléphone lui-même",
      intro: [
        "Réponse courte : saisissez un mot dans l'onglet Recherche de l'app Photos et votre iPhone retrouve les images par ce qu'elles montrent, leur lieu, les personnes reconnues et leur date. Pour aller plus loin et utiliser le résultat pour faire du tri, DiskMop pour iPhone a sa propre recherche dans l'onglet Accueil : saisissez un objet (voiture, bébé, plage), un thème (repas, animaux, couchers de soleil), un lieu (Paris) ou deux ensemble (Paris repas), et il liste les photos correspondantes avec leur nombre et leur taille approximative, prêtes à être examinées.",
        "Ce guide couvre ce que l'app Photos recherche déjà bien, pourquoi chercher est aussi le moyen le plus rapide de trouver quoi supprimer dans une photothèque de milliers de photos, comment fonctionne la recherche de DiskMop et ce qui reste sur votre téléphone, ainsi que les limites à connaître : la première analyse doit être terminée, la recherche par lieu exige la position d'une photo et la reconnaissance est une estimation.",
      ],
      keyTakeaways: [
        "L'onglet Recherche de l'app Photos retrouve les photos par contenu, lieux, personnes et dates ; commencez par là si vous voulez seulement revoir une image.",
        "DiskMop pour iPhone recherche dans la même photothèque des objets (voiture, bébé, plage), des thèmes (repas, animaux, couchers de soleil) et des lieux (Paris), et vous pouvez en combiner deux, comme Paris repas.",
        "L'appariement s'effectue sur l'iPhone : il utilise les étiquettes issues de l'analyse de la photothèque, la position propre à chaque photo et une liste intégrée d'environ 34 000 lieux. Les mots saisis ne sont envoyés ni à un service de cartes ni ailleurs.",
        "Une recherche de ville couvre les photos prises à environ 8 à 25 km de son centre, selon la taille de la ville.",
        "Les thèmes Repas & boissons, Animaux et Couchers de soleil écartent les photos où figurent des personnes, et rien n'est sélectionné à votre place : vous choisissez ce qui sera supprimé.",
        "Une photo sans position ne peut pas être retrouvée par lieu, et la recherche ne s'ouvre qu'une fois la première analyse terminée ; vous pouvez la suivre dans l'onglet Accueil.",
      ],
      dataTable: {
        caption: "Ce que vous pouvez saisir dans la recherche de DiskMop",
        columns: ["Type", "Exemple", "Mode d'appariement", "Couvre"],
        rows: [
          [
            "Objet ou scène",
            "voiture, plage, bébé",
            "Étiquettes de l'analyse de la photothèque, utilisées quand l'app est raisonnablement sûre",
            "Photos",
          ],
          [
            "Thème",
            "repas, animaux, couchers de soleil",
            "Un groupe d'étiquettes liées ; les photos avec des personnes sont écartées",
            "Photos",
          ],
          [
            "Lieu",
            "Paris, Antalya, France",
            "La position de la photo comparée à une liste intégrée d'environ 34 000 lieux",
            "Photos et vidéos",
          ],
          [
            "Combinaison",
            "Paris repas",
            "Les deux conditions ensemble : photos de repas prises à Paris",
            "Photos",
          ],
        ],
      },
      howTo: {
        name: "Rechercher des photos iPhone par contenu ou lieu et supprimer le superflu",
        totalTime: "PT10M",
        steps: [
          {
            name: "Laisser la première analyse se terminer",
            text: "Ouvrez DiskMop et attendez la fin de l'analyse de la photothèque ; vous pouvez la suivre dans l'onglet Accueil. La recherche s'ouvre à la fin de l'analyse, car elle utilise ce que celle-ci trouve.",
          },
          {
            name: "Saisir un objet, un thème ou un lieu",
            text: "Dans l'onglet Accueil, ouvrez Rechercher des photos et saisissez un mot comme voiture, bébé, plage, Paris ou Paris repas. Des suggestions apparaissent sous Objets et thèmes et sous Lieux, avec le nombre de correspondances.",
          },
          {
            name: "Ouvrir une suggestion et regarder les résultats",
            text: "Les résultats indiquent le nombre de photos et leur taille approximative. Faites-les défiler et maintenez le doigt sur une photo pour la voir en grand avant de décider.",
          },
          {
            name: "Choisir ce qu'il faut retirer",
            text: "Cochez les photos à retirer, ou touchez Tout sélectionner si toute la liste est superflue. Rien n'est sélectionné à votre place.",
          },
          {
            name: "Examiner et supprimer",
            text: "Touchez Supprimer. Si vous avez choisi deux photos ou plus, Examiner avant de supprimer montre exactement ce qui part, puis iOS demande confirmation. Les photos supprimées attendent 30 jours dans Supprimés récemment ; videz cet album pour récupérer l'espace tout de suite.",
          },
        ],
      },
      sections: [
        {
          title: "Ce que l'app Photos recherche déjà",
          content: [
            "L'app Photos intégrée a un onglet Recherche. Vous saisissez un mot et elle retrouve les images par ce qu'elles montrent, par le lieu de prise de vue, par les personnes reconnues et par la date. Pour retrouver une seule image, comme la photo du chien de l'été dernier, c'est le bon outil, et il ne demande aucune app supplémentaire.",
            "L'app Photos est conçue pour regarder des images, pas pour décider lesquelles retirer. Elle ne vous dit pas quelle place occupe un ensemble de résultats et n'est pas organisée autour d'un nettoyage. C'est là qu'une recherche pensée pour le tri aide.",
          ],
        },
        {
          title:
            "Pourquoi chercher est aussi le moyen le plus rapide de faire le tri",
          content: [
            "Une photothèque de plusieurs milliers de photos se trie mal en faisant défiler, car l'essentiel n'est pas du désordre et l'on ne voit pas sur de minuscules vignettes quelle partie l'est. La recherche inverse l'ordre : vous nommez d'abord une catégorie que vous soupçonnez pleine de déchets, puis vous ne regardez que ces photos. Tous les plats photographiés dans un restaurant, chaque image de la voiture vendue, les couchers de soleil d'un voyage où vous avez pris quarante fois la même.",
            "Elle permet aussi de trier autour d'un événement ou d'un lieu. Saisir le nom d'une ville affiche tout ce qui y a été pris : vous gardez les meilleures photos d'un voyage et supprimez le reste en quelques minutes. Pour les désordres qui ont leurs propres outils, comme les [prises de vue quasi identiques](/blog/find-duplicate-similar-photos-iphone), les [captures d'écran](/blog/delete-screenshots-iphone) ou les [photos floues](/blog/delete-blurry-photos-iphone), utilisez d'abord ces listes, puis recherchez tout le reste.",
          ],
        },
        {
          title: "Comment fonctionne la recherche dans DiskMop pour iPhone",
          content: [
            "Dans l'onglet Accueil, ouvrez Rechercher des photos et saisissez ce que vous cherchez : un objet, un lieu ou les deux. Pendant la saisie, des suggestions apparaissent en deux groupes, Objets et thèmes et Lieux, chacune avec son nombre de correspondances. Saisir deux idées ensemble, comme Paris repas, retrouve les photos de repas prises à Paris. Les mêmes mots servent aussi de filtre dans les listes que DiskMop construit, par exemple pour réduire un groupe de photos semblables à celles prises sur une même plage.",
            "Choisissez une suggestion et vous voyez les photos correspondantes avec leur nombre et leur taille approximative. Cochez celles à retirer ou touchez Tout sélectionner. Rien n'est sélectionné à votre place ; les thèmes Repas & boissons, Animaux et Couchers de soleil écartent même les photos où figurent des personnes, afin qu'un dîner de famille ne finisse pas dans une liste de plats. La suppression passe par le même écran d'examen et la même confirmation iOS que partout ailleurs dans l'app.",
          ],
        },
        {
          title: "Ce qui est apparié sur votre iPhone",
          content: [
            "Rien de ce que vous saisissez ne quitte le téléphone. Les objets et les thèmes viennent d'étiquettes que l'analyse produit déjà sur l'iPhone, et une photo n'est retrouvée par une étiquette que si l'app en est raisonnablement sûre. Les lieux viennent de la position enregistrée dans chaque photo et d'une liste d'environ 34 000 villes et régions intégrée à l'app ; le mot saisi n'est donc jamais envoyé à un service de cartes. Une recherche de ville inclut les photos prises à environ 8 à 25 km de son centre, selon la taille de la ville.",
            "DiskMop fonctionne sans compte, et l'étiquette de confidentialité indique Données non collectées. La recherche suit la même règle que le reste de l'app : elle lit votre photothèque sur l'appareil et ne la téléverse pas.",
          ],
        },
        {
          title: "Les limites à connaître",
          content: [
            "La recherche s'ouvre une fois la première analyse terminée ; sur une très grande photothèque, elle n'est donc pas disponible pendant les premières minutes. La reconnaissance est une estimation : attendez-vous à une photo erronée de temps en temps dans une liste, ce qui explique que rien ne soit sélectionné à votre place et que l'écran d'examen existe. Les vidéos ne sont pas classées par contenu ; on peut les retrouver par lieu, mais pas par ce qu'elles montrent.",
            "La recherche par lieu exige des photos qui ont une position. Si vous avez désactivé la position dans l'appareil photo, ou [retiré la position avant de partager](/blog/remove-location-from-photos-iphone) en ne gardant que les copies propres, ces copies ne peuvent pas être retrouvées par lieu. Et si vous saisissez quelque chose que DiskMop ne reconnaît pas, l'app le dit et suggère de saisir un lieu, un objet ou un thème. Pour les personnes par leur nom, utilisez l'album Personnes de l'app Photos.",
          ],
        },
      ],
      faq: [
        {
          question:
            "La recherche de photos de DiskMop a-t-elle besoin d'une connexion internet ?",
          answer:
            "Non. L'appariement s'effectue sur votre iPhone, avec les étiquettes de l'analyse de la photothèque, la position de chaque photo et une liste de lieux intégrée à l'app. Les mots saisis ne sont envoyés nulle part.",
        },
        {
          question:
            "Pourquoi ne puis-je pas chercher juste après l'installation de DiskMop ?",
          answer:
            "La recherche utilise ce que l'analyse de la photothèque trouve ; elle s'ouvre donc quand la première analyse est terminée. Vous pouvez la suivre dans l'onglet Accueil ; les analyses suivantes ne regardent que les nouvelles photos.",
        },
        {
          question:
            "Pourquoi une photo n'est-elle pas retrouvée quand je cherche un lieu ?",
          answer:
            "La recherche par lieu repose sur la position enregistrée dans la photo. Une photo prise avec la position désactivée, ou une copie dont la position a été retirée, n'en a pas et ne peut pas être associée à un lieu.",
        },
        {
          question: "Puis-je chercher une personne par son nom ?",
          answer:
            "DiskMop recherche des objets, des thèmes et des lieux. Pour les personnes par leur nom, utilisez l'album Personnes et l'onglet Recherche de l'app Photos.",
        },
        {
          question: "La recherche supprime-t-elle quelque chose ?",
          answer:
            "Non. La recherche ne fait que lister des photos. Rien n'est sélectionné à votre place, et la suppression passe par un écran d'examen et la confirmation propre à iOS. Les photos supprimées attendent ensuite 30 jours dans Supprimés récemment.",
        },
        {
          question: "La recherche est-elle gratuite dans DiskMop ?",
          answer:
            "La recherche et l'analyse sont gratuites. Sans abonnement, vous pouvez supprimer jusqu'à dix photos par jour, plus des suppressions supplémentaires gagnées avec les séries et les trophées ; DiskMop Pro supprime la limite.",
        },
      ],
      verdict: [
        "Chercher est le moyen le plus rapide de retrouver une photo et, dans une grande photothèque, le plus rapide de décider quoi retirer : nommez une catégorie, ne regardez que ces photos et supprimez celles dont vous n'avez pas besoin. Pour une image isolée, la recherche de l'app Photos est le bon endroit.",
        "DiskMop pour iPhone ajoute une recherche conçue pour le tri : objets, thèmes et lieux, appariés sur le téléphone, avec le nombre et la taille approximative de chaque résultat et un examen avant toute suppression. L'analyse et la recherche sont gratuites, et jusqu'à dix photos par jour peuvent être supprimées gratuitement.",
      ],
      ctaText: "Obtenir DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo buscar fotos del iPhone por su contenido: coche, playa, París, comida",
      metaDescription:
        "Encuentra cualquier foto del iPhone por lo que muestra o por dónde se tomó. Cómo funciona la búsqueda de Fotos y cómo busca DiskMop en el propio iPhone.",
      subtitle:
        "Palabras en lugar de desplazarte: cosas, temas y lugares, comparados en el propio teléfono",
      intro: [
        "Respuesta corta: escribe una palabra en la pestaña Buscar de la app Fotos y tu iPhone encuentra imágenes por lo que muestran, dónde se tomaron, quién sale en ellas y cuándo. Para ir un paso más allá y usar el resultado para limpiar, DiskMop para iPhone tiene su propia búsqueda en la pestaña Inicio: escribe una cosa (coche, bebé, playa), un tema (comida, animales, atardeceres), un lugar (París) o dos juntos (París comida) y enumera las fotos que coinciden con su número y tamaño aproximado, listas para revisar.",
        "Esta guía cubre lo que la app Fotos ya busca bien, por qué buscar es también la forma más rápida de encontrar qué quitar en una fototeca de miles de fotos, cómo funciona la búsqueda de DiskMop y qué se queda en tu teléfono, y los límites que conviene conocer: el primer análisis debe haber terminado, la búsqueda por lugar necesita la ubicación de una foto y el reconocimiento es una estimación.",
      ],
      keyTakeaways: [
        "La pestaña Buscar de la app Fotos encuentra fotos por contenido, lugares, personas y fechas; empieza ahí si solo quieres ver una imagen.",
        "DiskMop para iPhone busca en la misma fototeca cosas (coche, bebé, playa), temas (comida, animales, atardeceres) y lugares (París), y puedes combinar dos, como París comida.",
        "La comparación se hace en el iPhone: usa etiquetas del análisis de la fototeca, la ubicación de cada foto y una lista integrada de unos 34.000 lugares. Lo que escribes no se envía a un servicio de mapas ni a ningún otro sitio.",
        "Una búsqueda de ciudad abarca las fotos tomadas a unos 8 a 25 km de su centro, según el tamaño de la ciudad.",
        "Los temas Comida y bebida, Animales y Atardeceres dejan fuera las fotos con personas, y nada se selecciona por ti: tú eliges qué se borra.",
        "Una foto sin ubicación no puede encontrarse por lugar, y la búsqueda solo se abre cuando el primer análisis ha terminado; puedes seguirlo en la pestaña Inicio.",
      ],
      dataTable: {
        caption: "Qué puedes escribir en la búsqueda de DiskMop",
        columns: ["Tipo", "Ejemplo", "Cómo se compara", "Abarca"],
        rows: [
          [
            "Cosa o escena",
            "coche, playa, bebé",
            "Etiquetas del análisis de la fototeca, usadas cuando la app está razonablemente segura",
            "Fotos",
          ],
          [
            "Tema",
            "comida, animales, atardeceres",
            "Un grupo de etiquetas relacionadas; se excluyen las fotos con personas",
            "Fotos",
          ],
          [
            "Lugar",
            "París, Antalya, Francia",
            "La ubicación de la foto frente a una lista integrada de unos 34.000 lugares",
            "Fotos y vídeos",
          ],
          [
            "Combinación",
            "París comida",
            "Ambas condiciones a la vez: fotos de comida tomadas en París",
            "Fotos",
          ],
        ],
      },
      howTo: {
        name: "Buscar fotos del iPhone por contenido o lugar y borrar lo que no necesitas",
        totalTime: "PT10M",
        steps: [
          {
            name: "Dejar que termine el primer análisis",
            text: "Abre DiskMop y espera a que termine el análisis de la fototeca; puedes seguirlo en la pestaña Inicio. La búsqueda se abre al terminar el análisis, porque usa lo que este encuentra.",
          },
          {
            name: "Escribir una cosa, un tema o un lugar",
            text: "En la pestaña Inicio abre Buscar fotos y escribe una palabra como coche, bebé, playa, París o París comida. Aparecen sugerencias en Cosas y temas y en Lugares, con el número de coincidencias.",
          },
          {
            name: "Abrir una sugerencia y mirar los resultados",
            text: "Los resultados muestran el número de fotos y su tamaño aproximado. Desplázate por ellos y mantén pulsada una foto para verla más grande antes de decidir.",
          },
          {
            name: "Elegir qué quitar",
            text: "Marca las fotos que quieras quitar o toca Seleccionar todo si toda la lista es prescindible. No se selecciona nada por ti.",
          },
          {
            name: "Revisar y borrar",
            text: "Toca Borrar. Si elegiste dos o más fotos, Revisar antes de borrar muestra exactamente qué se va, y luego iOS pide confirmación. Las fotos borradas esperan 30 días en Eliminados; vacía ese álbum para recuperar el espacio de inmediato.",
          },
        ],
      },
      sections: [
        {
          title: "Qué busca ya la app Fotos",
          content: [
            "La app Fotos integrada tiene una pestaña Buscar. Escribes una palabra y encuentra imágenes por lo que muestran, por el lugar donde se tomaron, por las personas reconocidas y por la fecha. Para encontrar una sola imagen, como la foto del perro del verano pasado, es la herramienta adecuada y no necesita ninguna app adicional.",
            "La app Fotos está hecha para mirar imágenes, no para decidir cuáles quitar. No te dice cuánto espacio ocupa un conjunto de resultados ni está organizada en torno a una limpieza. Ahí ayuda una búsqueda pensada para limpiar.",
          ],
        },
        {
          title: "Por qué buscar es también la forma más rápida de limpiar",
          content: [
            "Una fototeca de varios miles de fotos es difícil de limpiar desplazándote, porque la mayor parte no es desorden y no se distingue en miniaturas diminutas cuál lo es. La búsqueda invierte el orden: primero nombras una categoría que sospechas llena de basura y luego miras solo esas fotos. Todos los platos que fotografiaste en un restaurante, cada imagen del coche que vendiste, los atardeceres de unas vacaciones en las que hiciste cuarenta veces la misma.",
            "También permite limpiar en torno a un evento o un lugar. Escribir el nombre de una ciudad muestra todo lo tomado allí, así que puedes conservar las mejores fotos de un viaje y borrar el resto en minutos. Para el desorden que tiene sus propias herramientas, como las [tomas casi idénticas](/blog/find-duplicate-similar-photos-iphone), las [capturas de pantalla](/blog/delete-screenshots-iphone) o las [fotos borrosas](/blog/delete-blurry-photos-iphone), usa primero esas listas y busca después todo lo demás.",
          ],
        },
        {
          title: "Cómo funciona la búsqueda en DiskMop para iPhone",
          content: [
            "En la pestaña Inicio abre Buscar fotos y escribe lo que buscas: una cosa, un lugar o ambos. Mientras escribes aparecen sugerencias en dos grupos, Cosas y temas y Lugares, cada una con su número de coincidencias. Escribir dos ideas juntas, como París comida, encuentra las fotos de comida tomadas en París. Las mismas palabras sirven también de filtro dentro de las listas que construye DiskMop, por ejemplo para reducir un grupo de fotos parecidas a las tomadas en una misma playa.",
            "Elige una sugerencia y verás las fotos que coinciden con su número y tamaño aproximado. Marca las que quieras quitar o toca Seleccionar todo. No se selecciona nada por ti; los temas Comida y bebida, Animales y Atardeceres incluso dejan fuera las fotos con personas, para que una cena familiar no acabe en una lista de platos. Borrar pasa por la misma pantalla de revisión y la misma confirmación de iOS que en el resto de la app.",
          ],
        },
        {
          title: "Qué se compara en tu iPhone",
          content: [
            "Nada de lo que escribes sale del teléfono. Las cosas y los temas salen de etiquetas que el análisis ya produce en el iPhone, y una foto se encuentra por una etiqueta solo cuando la app está razonablemente segura. Los lugares salen de la ubicación guardada en cada foto y de una lista de unas 34.000 ciudades y regiones integrada en la app, así que la palabra que escribes nunca se envía a un servicio de mapas. Una búsqueda de ciudad incluye las fotos tomadas a unos 8 a 25 km de su centro, según lo grande que sea la ciudad.",
            "DiskMop funciona sin cuenta, y la etiqueta de privacidad dice Datos no recopilados. La búsqueda sigue la misma regla que el resto de la app: lee tu fototeca en el dispositivo y no la sube.",
          ],
        },
        {
          title: "Límites que conviene conocer",
          content: [
            "La búsqueda se abre cuando termina el primer análisis, así que en una fototeca muy grande no está disponible durante los primeros minutos. El reconocimiento es una estimación: espera de vez en cuando una foto equivocada en una lista, y por eso no se selecciona nada por ti y existe la pantalla de revisión. Los vídeos no se clasifican por contenido; se pueden encontrar por lugar, pero no por lo que muestran.",
            "La búsqueda por lugar necesita fotos con ubicación. Si desactivaste la ubicación en la cámara, o [quitaste la ubicación antes de compartir](/blog/remove-location-from-photos-iphone) y conservaste solo las copias limpias, esas copias no pueden encontrarse por lugar. Y si escribes algo que DiskMop no reconoce, la app lo dice y sugiere escribir un lugar, una cosa o un tema. Para personas por su nombre, usa el álbum Personas de la app Fotos.",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿La búsqueda de fotos de DiskMop necesita conexión a internet?",
          answer:
            "No. La comparación se hace en tu iPhone, con etiquetas del análisis de la fototeca, la ubicación de cada foto y una lista de lugares integrada en la app. Lo que escribes no se envía a ninguna parte.",
        },
        {
          question:
            "¿Por qué no puedo buscar justo después de instalar DiskMop?",
          answer:
            "La búsqueda usa lo que encuentra el análisis de la fototeca, así que se abre cuando termina el primer análisis. Puedes seguirlo en la pestaña Inicio; los análisis posteriores solo miran las fotos nuevas.",
        },
        {
          question: "¿Por qué una foto no aparece cuando busco un lugar?",
          answer:
            "La búsqueda por lugar se basa en la ubicación guardada en la foto. Una foto tomada con la ubicación desactivada, o una copia a la que se quitó la ubicación, no la tiene y no puede asociarse a un lugar.",
        },
        {
          question: "¿Puedo buscar a una persona por su nombre?",
          answer:
            "DiskMop busca cosas, temas y lugares. Para personas por su nombre, usa el álbum Personas y la pestaña Buscar de la app Fotos.",
        },
        {
          question: "¿Buscar borra algo?",
          answer:
            "No. Buscar solo enumera fotos. No se selecciona nada por ti, y borrar pasa por una pantalla de revisión y la confirmación propia de iOS. Las fotos borradas esperan después 30 días en Eliminados.",
        },
        {
          question: "¿La búsqueda es gratuita en DiskMop?",
          answer:
            "La búsqueda y el análisis son gratuitos. Sin suscripción puedes borrar hasta diez fotos al día, más borrados extra que ganas con rachas y trofeos; DiskMop Pro quita el límite.",
        },
      ],
      verdict: [
        "Buscar es la forma más rápida de encontrar una foto y, en una fototeca grande, la más rápida de decidir qué quitar: nombra una categoría, mira solo esas fotos y borra las que no necesitas. Para una sola imagen, la búsqueda de la app Fotos es el lugar adecuado.",
        "DiskMop para iPhone añade una búsqueda hecha para limpiar: cosas, temas y lugares, comparados en el teléfono, con el número y el tamaño aproximado de cada resultado y una revisión antes de borrar nada. El análisis y la búsqueda son gratuitos, y hasta diez fotos al día pueden borrarse sin coste.",
      ],
      ctaText: "Descarga DiskMop para iPhone en la App Store",
    },
    it: {
      title:
        "Come cercare le foto dell'iPhone per contenuto: auto, spiaggia, Parigi, cibo",
      metaDescription:
        "Trova qualsiasi foto dell'iPhone per ciò che mostra o per dove è stata scattata. Come funziona la ricerca di Foto e come cerca DiskMop direttamente sull'iPhone.",
      subtitle:
        "Parole invece dello scorrimento: oggetti, temi e luoghi, abbinati sul telefono stesso",
      intro: [
        "Risposta breve: scrivi una parola nella scheda Cerca dell'app Foto e il tuo iPhone trova le immagini per ciò che mostrano, dove sono state scattate, chi c'è e quando. Per fare un passo in più e usare il risultato per fare pulizia, DiskMop per iPhone ha una ricerca tutta sua nella scheda Home: scrivi un oggetto (auto, bambino, spiaggia), un tema (cibo, animali, tramonti), un luogo (Parigi) o due insieme (Parigi cibo) e mostra le foto corrispondenti con numero e dimensione approssimativa, pronte da controllare.",
        "Questa guida spiega cosa l'app Foto cerca già bene, perché cercare è anche il modo più rapido per trovare cosa togliere in una libreria di migliaia di foto, come funziona la ricerca di DiskMop e cosa resta sul tuo telefono, e i limiti da conoscere: serve che la prima scansione sia finita, la ricerca per luogo richiede la posizione di una foto e il riconoscimento è una stima.",
      ],
      keyTakeaways: [
        "La scheda Cerca dell'app Foto trova le foto per contenuto, luoghi, persone e date; parti da lì se vuoi solo rivedere un'immagine.",
        "DiskMop per iPhone cerca nella stessa libreria oggetti (auto, bambino, spiaggia), temi (cibo, animali, tramonti) e luoghi (Parigi), e puoi combinarne due, come Parigi cibo.",
        "L'abbinamento avviene sull'iPhone: usa le etichette della scansione della libreria, la posizione di ciascuna foto e un elenco integrato di circa 34.000 luoghi. Ciò che scrivi non viene inviato a un servizio di mappe né altrove.",
        "Una ricerca per città copre le foto scattate entro circa 8-25 km dal centro, a seconda delle dimensioni della città.",
        "I temi Cibo e bevande, Animali e Tramonti escludono le foto con persone, e nulla viene selezionato al posto tuo: decidi tu cosa eliminare.",
        "Una foto senza posizione non può essere trovata per luogo, e la ricerca si apre solo quando la prima scansione è finita; puoi seguirla nella scheda Home.",
      ],
      dataTable: {
        caption: "Cosa puoi scrivere nella ricerca di DiskMop",
        columns: ["Tipo", "Esempio", "Come viene abbinato", "Copre"],
        rows: [
          [
            "Oggetto o scena",
            "auto, spiaggia, bambino",
            "Etichette della scansione della libreria, usate quando l'app è ragionevolmente sicura",
            "Foto",
          ],
          [
            "Tema",
            "cibo, animali, tramonti",
            "Un gruppo di etichette correlate; le foto con persone vengono escluse",
            "Foto",
          ],
          [
            "Luogo",
            "Parigi, Antalya, Francia",
            "La posizione della foto confrontata con un elenco integrato di circa 34.000 luoghi",
            "Foto e video",
          ],
          [
            "Combinazione",
            "Parigi cibo",
            "Entrambe le condizioni insieme: foto di cibo scattate a Parigi",
            "Foto",
          ],
        ],
      },
      howTo: {
        name: "Cercare le foto dell'iPhone per contenuto o luogo e togliere ciò che non serve",
        totalTime: "PT10M",
        steps: [
          {
            name: "Lasciare finire la prima scansione",
            text: "Apri DiskMop e aspetta che la scansione della libreria termini; puoi seguirla nella scheda Home. La ricerca si apre a scansione finita, perché usa ciò che la scansione trova.",
          },
          {
            name: "Scrivere un oggetto, un tema o un luogo",
            text: "Nella scheda Home apri Cerca nelle foto e scrivi una parola come auto, bambino, spiaggia, Parigi o Parigi cibo. I suggerimenti compaiono sotto Oggetti e temi e sotto Luoghi, con il numero di corrispondenze.",
          },
          {
            name: "Aprire un suggerimento e guardare i risultati",
            text: "I risultati mostrano il numero di foto e la dimensione approssimativa. Scorrili e tieni premuta una foto per vederla più grande prima di decidere.",
          },
          {
            name: "Scegliere cosa togliere",
            text: "Spunta le foto da togliere, oppure tocca Seleziona tutto se l'intero elenco è superfluo. Nulla viene selezionato al posto tuo.",
          },
          {
            name: "Controllare ed eliminare",
            text: "Tocca Elimina. Se hai scelto due o più foto, Controlla prima di eliminare mostra esattamente cosa se ne va, poi iOS chiede conferma. Le foto eliminate restano 30 giorni in Eliminati di recente; svuota quell'album per riavere subito lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa cerca già l'app Foto",
          content: [
            "L'app Foto integrata ha una scheda Cerca. Scrivi una parola e trova le immagini per ciò che mostrano, per il luogo in cui sono state scattate, per le persone riconosciute e per data. Per trovare una sola immagine, come la foto del cane dell'estate scorsa, è lo strumento giusto e non richiede alcuna app in più.",
            "L'app Foto è fatta per guardare le immagini, non per decidere quali togliere. Non ti dice quanto spazio occupa un insieme di risultati e non è organizzata attorno a una pulizia. È qui che aiuta una ricerca pensata per fare ordine.",
          ],
        },
        {
          title: "Perché cercare è anche il modo più rapido per fare pulizia",
          content: [
            "Una libreria di qualche migliaio di foto è difficile da pulire scorrendo, perché la maggior parte non è disordine e dalle miniature minuscole non si capisce quale parte lo sia. La ricerca inverte l'ordine: prima nomini una categoria che sospetti piena di scarti, poi guardi solo quelle foto. Tutti i piatti fotografati in un ristorante, ogni immagine dell'auto che hai venduto, i tramonti di una vacanza in cui hai scattato quaranta volte la stessa.",
            "Permette anche di fare pulizia attorno a un evento o a un luogo. Scrivere il nome di una città mostra tutto ciò che è stato scattato lì, così puoi tenere le foto migliori di un viaggio ed eliminare il resto in pochi minuti. Per il disordine che ha strumenti propri, come gli [scatti quasi identici](/blog/find-duplicate-similar-photos-iphone), gli [screenshot](/blog/delete-screenshots-iphone) o le [foto sfocate](/blog/delete-blurry-photos-iphone), usa prima quegli elenchi e cerca poi tutto il resto.",
          ],
        },
        {
          title: "Come funziona la ricerca in DiskMop per iPhone",
          content: [
            "Nella scheda Home apri Cerca nelle foto e scrivi ciò che cerchi: un oggetto, un luogo o entrambi. Mentre scrivi compaiono suggerimenti in due gruppi, Oggetti e temi e Luoghi, ciascuno con il numero di corrispondenze. Scrivere due idee insieme, come Parigi cibo, trova le foto di cibo scattate a Parigi. Le stesse parole funzionano anche come filtro dentro gli elenchi che DiskMop costruisce, ad esempio per restringere un gruppo di foto simili a quelle scattate su una stessa spiaggia.",
            "Scegli un suggerimento e vedi le foto corrispondenti con numero e dimensione approssimativa. Spunta quelle da togliere o tocca Seleziona tutto. Nulla viene selezionato al posto tuo; i temi Cibo e bevande, Animali e Tramonti escludono perfino le foto con persone, così una cena in famiglia non finisce in un elenco di piatti. L'eliminazione passa dalla stessa schermata di controllo e dalla stessa conferma di iOS del resto dell'app.",
          ],
        },
        {
          title: "Cosa viene abbinato sul tuo iPhone",
          content: [
            "Nulla di ciò che scrivi lascia il telefono. Oggetti e temi derivano da etichette che la scansione produce già sull'iPhone, e una foto viene trovata tramite un'etichetta solo quando l'app è ragionevolmente sicura. I luoghi derivano dalla posizione salvata in ogni foto e da un elenco di circa 34.000 città e regioni integrato nell'app, quindi la parola che scrivi non viene mai inviata a un servizio di mappe. Una ricerca per città include le foto scattate entro circa 8-25 km dal centro, a seconda di quanto è grande la città.",
            "DiskMop funziona senza account e l'etichetta privacy dice Dati non raccolti. La ricerca segue la stessa regola del resto dell'app: legge la tua libreria sul dispositivo e non la carica.",
          ],
        },
        {
          title: "Limiti da conoscere",
          content: [
            "La ricerca si apre dopo la fine della prima scansione, quindi in una libreria molto grande non è disponibile nei primi minuti. Il riconoscimento è una stima: aspettati ogni tanto una foto sbagliata in un elenco, ed è per questo che nulla viene selezionato al posto tuo e che esiste la schermata di controllo. I video non vengono classificati per contenuto; si trovano per luogo, ma non per ciò che mostrano.",
            "La ricerca per luogo richiede foto con una posizione. Se hai disattivato la posizione nella fotocamera, o [rimosso la posizione prima di condividere](/blog/remove-location-from-photos-iphone) tenendo solo le copie pulite, quelle copie non possono essere trovate per luogo. E se scrivi qualcosa che DiskMop non riconosce, l'app lo dice e suggerisce di scrivere un luogo, un oggetto o un tema. Per le persone per nome, usa l'album Persone dell'app Foto.",
          ],
        },
      ],
      faq: [
        {
          question:
            "La ricerca foto di DiskMop richiede una connessione a internet?",
          answer:
            "No. L'abbinamento avviene sul tuo iPhone, con le etichette della scansione della libreria, la posizione di ogni foto e un elenco di luoghi integrato nell'app. Ciò che scrivi non viene inviato da nessuna parte.",
        },
        {
          question:
            "Perché non posso cercare subito dopo aver installato DiskMop?",
          answer:
            "La ricerca usa ciò che trova la scansione della libreria, quindi si apre quando la prima scansione è finita. Puoi seguirla nella scheda Home; le scansioni successive guardano solo le foto nuove.",
        },
        {
          question: "Perché una foto non viene trovata quando cerco un luogo?",
          answer:
            "La ricerca per luogo si basa sulla posizione salvata nella foto. Una foto scattata con la posizione disattivata, o una copia da cui è stata rimossa la posizione, non ne ha e non può essere associata a un luogo.",
        },
        {
          question: "Posso cercare una persona per nome?",
          answer:
            "DiskMop cerca oggetti, temi e luoghi. Per le persone per nome, usa l'album Persone e la scheda Cerca dell'app Foto.",
        },
        {
          question: "La ricerca elimina qualcosa?",
          answer:
            "No. La ricerca si limita a elencare le foto. Nulla viene selezionato al posto tuo, e l'eliminazione passa da una schermata di controllo e dalla conferma di iOS. Le foto eliminate restano poi 30 giorni in Eliminati di recente.",
        },
        {
          question: "La ricerca è gratuita in DiskMop?",
          answer:
            "Ricerca e scansione sono gratuite. Senza abbonamento puoi eliminare fino a dieci foto al giorno, più eliminazioni extra guadagnate con serie e trofei; DiskMop Pro toglie il limite.",
        },
      ],
      verdict: [
        "Cercare è il modo più rapido per trovare una foto e, in una grande libreria, il più rapido per decidere cosa togliere: nomina una categoria, guarda solo quelle foto ed elimina quelle che non ti servono. Per una singola immagine, la ricerca dell'app Foto è il posto giusto.",
        "DiskMop per iPhone aggiunge una ricerca fatta per fare pulizia: oggetti, temi e luoghi, abbinati sul telefono, con numero e dimensione approssimativa di ogni risultato e un controllo prima di eliminare qualsiasi cosa. Scansione e ricerca sono gratuite, e fino a dieci foto al giorno si possono eliminare gratis.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como buscar fotos do iPhone pelo conteúdo: carro, praia, Paris, comida",
      metaDescription:
        "Encontre qualquer foto do iPhone pelo que ela mostra ou por onde foi tirada. Como funciona a busca do app Fotos e como o DiskMop busca no próprio iPhone.",
      subtitle:
        "Palavras em vez de rolar a tela: coisas, temas e lugares, comparados no próprio celular",
      intro: [
        "Resposta curta: digite uma palavra na aba Buscar do app Fotos e o iPhone encontra imagens pelo que elas mostram, onde foram tiradas, quem aparece nelas e quando. Para ir um passo além e usar o resultado para limpar, o DiskMop para iPhone tem uma busca própria na aba Início: digite uma coisa (carro, bebê, praia), um tema (comida, animais, pôr do sol), um lugar (Paris) ou duas juntas (Paris comida), e ele lista as fotos correspondentes com a quantidade e o tamanho aproximado, prontas para revisar.",
        "Este guia cobre o que o app Fotos já busca bem, por que buscar também é o jeito mais rápido de achar o que remover numa fototeca de milhares de fotos, como funciona a busca do DiskMop e o que fica no seu celular, e os limites que vale conhecer: o primeiro escaneamento precisa ter terminado, a busca por lugar exige a localização de uma foto e o reconhecimento é uma estimativa.",
      ],
      keyTakeaways: [
        "A aba Buscar do app Fotos encontra fotos por conteúdo, lugares, pessoas e datas; comece por ela se você só quer ver uma imagem.",
        "O DiskMop para iPhone busca na mesma fototeca coisas (carro, bebê, praia), temas (comida, animais, pôr do sol) e lugares (Paris), e você pode combinar duas, como Paris comida.",
        "A comparação acontece no iPhone: usa rótulos do escaneamento da fototeca, a localização de cada foto e uma lista embutida de cerca de 34.000 lugares. O que você digita não é enviado a um serviço de mapas nem a outro lugar.",
        "Uma busca por cidade cobre as fotos tiradas a cerca de 8 a 25 km do centro, dependendo do tamanho da cidade.",
        "Os temas de comida e bebida, animais e pôr do sol deixam de fora fotos com pessoas, e nada é selecionado por você: você escolhe o que apagar.",
        "Uma foto sem localização não pode ser encontrada por lugar, e a busca só abre depois que o primeiro escaneamento termina; você pode acompanhá-lo na aba Início.",
      ],
      dataTable: {
        caption: "O que você pode digitar na busca do DiskMop",
        columns: ["Tipo", "Exemplo", "Como é comparado", "Abrange"],
        rows: [
          [
            "Coisa ou cena",
            "carro, praia, bebê",
            "Rótulos do escaneamento da fototeca, usados quando o app está razoavelmente seguro",
            "Fotos",
          ],
          [
            "Tema",
            "comida, animais, pôr do sol",
            "Um grupo de rótulos relacionados; fotos com pessoas ficam de fora",
            "Fotos",
          ],
          [
            "Lugar",
            "Paris, Antalya, França",
            "A localização da foto contra uma lista embutida de cerca de 34.000 lugares",
            "Fotos e vídeos",
          ],
          [
            "Combinação",
            "Paris comida",
            "As duas condições juntas: fotos de comida tiradas em Paris",
            "Fotos",
          ],
        ],
      },
      howTo: {
        name: "Buscar fotos do iPhone por conteúdo ou lugar e apagar o que não precisa",
        totalTime: "PT10M",
        steps: [
          {
            name: "Deixar o primeiro escaneamento terminar",
            text: "Abra o DiskMop e espere o escaneamento da fototeca acabar; você pode acompanhá-lo na aba Início. A busca abre quando o escaneamento termina, porque usa o que ele encontra.",
          },
          {
            name: "Digitar uma coisa, um tema ou um lugar",
            text: "Na aba Início, abra Buscar fotos e digite uma palavra como carro, bebê, praia, Paris ou Paris comida. As sugestões aparecem em Coisas e temas e em Lugares, com o número de correspondências.",
          },
          {
            name: "Abrir uma sugestão e olhar os resultados",
            text: "Os resultados mostram o número de fotos e o tamanho aproximado. Role por eles e mantenha uma foto pressionada para vê-la maior antes de decidir.",
          },
          {
            name: "Escolher o que remover",
            text: "Marque as fotos que quer remover ou toque em Selecionar tudo se a lista inteira for descartável. Nada é selecionado por você.",
          },
          {
            name: "Revisar e apagar",
            text: "Toque em Apagar. Se você escolheu duas ou mais fotos, Revisar antes de apagar mostra exatamente o que vai sair, e então o iOS pede confirmação. As fotos apagadas esperam 30 dias em Apagados recentemente; esvazie esse álbum para recuperar o espaço na hora.",
          },
        ],
      },
      sections: [
        {
          title: "O que o app Fotos já busca",
          content: [
            "O app Fotos tem uma aba Buscar. Você digita uma palavra e ele encontra imagens pelo que mostram, pelo lugar onde foram tiradas, pelas pessoas reconhecidas e pela data. Para achar uma única imagem, como a foto do cachorro do verão passado, é a ferramenta certa e não exige nenhum app extra.",
            "O app Fotos foi feito para olhar imagens, não para decidir quais remover. Ele não diz quanto espaço um conjunto de resultados ocupa e não é organizado em torno de uma limpeza. É aí que uma busca feita para limpar ajuda.",
          ],
        },
        {
          title: "Por que buscar também é o jeito mais rápido de limpar",
          content: [
            "Uma fototeca com vários milhares de fotos é difícil de limpar rolando a tela, porque a maior parte não é bagunça e não dá para saber, em miniaturas minúsculas, qual parte é. A busca inverte a ordem: primeiro você nomeia uma categoria que suspeita estar cheia de lixo, depois olha só essas fotos. Todos os pratos que você fotografou num restaurante, cada imagem do carro que vendeu, os pores do sol de uma viagem em que você tirou quarenta vezes a mesma.",
            "Ela também permite limpar em torno de um evento ou de um lugar. Digitar o nome de uma cidade traz tudo o que foi tirado lá, e você guarda as melhores fotos de uma viagem e apaga o resto em minutos. Para a bagunça que tem ferramentas próprias, como as [fotos quase idênticas](/blog/find-duplicate-similar-photos-iphone), as [capturas de tela](/blog/delete-screenshots-iphone) ou as [fotos desfocadas](/blog/delete-blurry-photos-iphone), use primeiro essas listas e busque todo o resto.",
          ],
        },
        {
          title: "Como a busca funciona no DiskMop para iPhone",
          content: [
            "Na aba Início, abra Buscar fotos e digite o que procura: uma coisa, um lugar ou os dois. Enquanto você digita, as sugestões aparecem em dois grupos, Coisas e temas e Lugares, cada uma com o número de correspondências. Digitar duas ideias juntas, como Paris comida, encontra as fotos de comida tiradas em Paris. As mesmas palavras funcionam também como filtro dentro das listas que o DiskMop monta, por exemplo para reduzir um grupo de fotos parecidas às tiradas numa mesma praia.",
            "Escolha uma sugestão e você vê as fotos correspondentes com a quantidade e o tamanho aproximado. Marque as que quer remover ou toque em Selecionar tudo. Nada é selecionado por você; os temas de comida e bebida, animais e pôr do sol até deixam de fora fotos com pessoas, para que um jantar em família não acabe numa lista de pratos. Apagar passa pela mesma tela de revisão e pela mesma confirmação do iOS que no resto do app.",
          ],
        },
        {
          title: "O que é comparado no seu iPhone",
          content: [
            "Nada do que você digita sai do celular. Coisas e temas vêm de rótulos que o escaneamento já produz no iPhone, e uma foto só é encontrada por um rótulo quando o app está razoavelmente seguro. Os lugares vêm da localização guardada em cada foto e de uma lista de cerca de 34.000 cidades e regiões embutida no app, então a palavra digitada nunca é enviada a um serviço de mapas. Uma busca por cidade inclui as fotos tiradas a cerca de 8 a 25 km do centro, dependendo do tamanho da cidade.",
            "O DiskMop funciona sem conta, e o rótulo de privacidade diz Dados não coletados. A busca segue a mesma regra do resto do app: lê sua fototeca no dispositivo e não a envia.",
          ],
        },
        {
          title: "Limites que vale conhecer",
          content: [
            "A busca abre depois que o primeiro escaneamento termina, então numa fototeca muito grande ela não fica disponível nos primeiros minutos. O reconhecimento é uma estimativa: espere, de vez em quando, uma foto errada numa lista, e por isso nada é selecionado por você e existe a tela de revisão. Vídeos não são classificados por conteúdo; podem ser encontrados por lugar, mas não pelo que mostram.",
            "A busca por lugar precisa de fotos com localização. Se você desativou a localização na câmera, ou [removeu a localização antes de compartilhar](/blog/remove-location-from-photos-iphone) e guardou só as cópias limpas, essas cópias não podem ser encontradas por lugar. E se você digitar algo que o DiskMop não reconhece, o app avisa e sugere digitar um lugar, uma coisa ou um tema. Para pessoas pelo nome, use o álbum Pessoas do app Fotos.",
          ],
        },
      ],
      faq: [
        {
          question:
            "A busca de fotos do DiskMop precisa de conexão com a internet?",
          answer:
            "Não. A comparação acontece no seu iPhone, com rótulos do escaneamento da fototeca, a localização de cada foto e uma lista de lugares embutida no app. O que você digita não é enviado a lugar nenhum.",
        },
        {
          question:
            "Por que não consigo buscar logo depois de instalar o DiskMop?",
          answer:
            "A busca usa o que o escaneamento da fototeca encontra, então abre quando o primeiro escaneamento termina. Você pode acompanhá-lo na aba Início; os escaneamentos seguintes olham só as fotos novas.",
        },
        {
          question: "Por que uma foto não aparece quando busco um lugar?",
          answer:
            "A busca por lugar depende da localização guardada na foto. Uma foto tirada com a localização desativada, ou uma cópia da qual a localização foi removida, não a tem e não pode ser associada a um lugar.",
        },
        {
          question: "Posso buscar uma pessoa pelo nome?",
          answer:
            "O DiskMop busca coisas, temas e lugares. Para pessoas pelo nome, use o álbum Pessoas e a aba Buscar do app Fotos.",
        },
        {
          question: "Buscar apaga alguma coisa?",
          answer:
            "Não. Buscar só lista fotos. Nada é selecionado por você, e apagar passa por uma tela de revisão e pela confirmação do próprio iOS. As fotos apagadas esperam depois 30 dias em Apagados recentemente.",
        },
        {
          question: "A busca é grátis no DiskMop?",
          answer:
            "A busca e o escaneamento são grátis. Sem assinatura você pode apagar até dez fotos por dia, além de exclusões extras ganhas com sequências e troféus; o DiskMop Pro tira o limite.",
        },
      ],
      verdict: [
        "Buscar é o jeito mais rápido de achar uma foto e, numa fototeca grande, o mais rápido de decidir o que remover: nomeie uma categoria, olhe só essas fotos e apague as que não precisa. Para uma imagem isolada, a busca do app Fotos é o lugar certo.",
        "O DiskMop para iPhone acrescenta uma busca feita para limpar: coisas, temas e lugares, comparados no celular, com a quantidade e o tamanho aproximado de cada resultado e uma revisão antes de apagar qualquer coisa. O escaneamento e a busca são grátis, e até dez fotos por dia podem ser apagadas sem custo.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title: "iPhone の写真を内容で検索する方法：車、ビーチ、パリ、料理",
      metaDescription:
        "iPhone の写真を、写っているものや撮影場所から探す方法。「写真」アプリの検索の仕組みと、iPhone 上で動く DiskMop の検索で結果を確認して整理する流れを解説します。",
      subtitle:
        "スクロールの代わりに言葉で：もの、トピック、場所を、スマホ上でそのまま照合",
      intro: [
        "結論から言うと、「写真」アプリの「検索」タブに言葉を入力すると、iPhone は写っているもの、撮影場所、写っている人、日付から写真を探してくれます。もう一歩進めて、その結果を整理に使いたいなら、iPhone 版 DiskMop には「ホーム」タブに独自の検索があります。もの（車、赤ちゃん、ビーチ）、トピック（料理、動物、夕焼け）、場所（パリ）、あるいは 2 つの組み合わせ（パリ 料理）を入力すると、該当する写真が件数とおおよそのサイズとともに並び、そのまま確認できます。",
        "このガイドでは、「写真」アプリがすでにうまく検索できること、数千枚のライブラリで消すものを見つける最短の方法が検索でもある理由、DiskMop の検索の仕組みとスマホに残るもの、そして知っておきたい制約を説明します。最初のスキャンが終わっている必要があること、場所の検索には写真の位置情報が必要なこと、認識は推定であることです。",
      ],
      keyTakeaways: [
        "「写真」アプリの「検索」タブは、内容、場所、人物、日付から写真を探せます。1 枚を見たいだけなら、まずそこから始めましょう。",
        "iPhone 版 DiskMop は同じライブラリから、もの（車、赤ちゃん、ビーチ）、トピック（料理、動物、夕焼け）、場所（パリ）を探せ、「パリ 料理」のように 2 つを組み合わせることもできます。",
        "照合は iPhone 上で行われます。ライブラリのスキャンで得たラベル、各写真自身の位置情報、アプリに内蔵された約 3 万 4 千か所のリストを使い、入力した言葉は地図サービスにもほかにも送られません。",
        "都市名での検索は、都市の規模に応じて中心からおよそ 8〜25 km 以内で撮った写真を対象にします。",
        "「料理・飲み物」「動物」「夕焼け・朝焼け」のトピックは人が写った写真を除外し、何も自動では選択されません。削除するものはあなたが決めます。",
        "位置情報のない写真は場所では見つからず、検索は最初のスキャンが終わってから開きます。進行状況は「ホーム」タブで確認できます。",
      ],
      dataTable: {
        caption: "DiskMop の検索に入力できるもの",
        columns: ["種類", "例", "照合の仕組み", "対象"],
        rows: [
          [
            "もの・シーン",
            "車、ビーチ、赤ちゃん",
            "ライブラリのスキャンで得たラベル。アプリが十分確からしいと判断したときに使用",
            "写真",
          ],
          [
            "トピック",
            "料理、動物、夕焼け",
            "関連ラベルのグループ。人が写った写真は除外",
            "写真",
          ],
          [
            "場所",
            "パリ、アンタルヤ、フランス",
            "写真自身の位置情報と、内蔵の約 3 万 4 千か所のリストを照合",
            "写真と動画",
          ],
          [
            "組み合わせ",
            "パリ 料理",
            "2 つの条件を同時に満たす：パリで撮った料理の写真",
            "写真",
          ],
        ],
      },
      howTo: {
        name: "iPhone の写真を内容や場所で検索して不要なものを整理する",
        totalTime: "PT10M",
        steps: [
          {
            name: "最初のスキャンが終わるのを待つ",
            text: "DiskMop を開き、ライブラリのスキャンが終わるのを待ちます。進行状況は「ホーム」タブで確認できます。検索はスキャンの結果を使うため、スキャン完了後に開きます。",
          },
          {
            name: "もの、トピック、場所を入力する",
            text: "「ホーム」タブで「写真を検索」を開き、車、赤ちゃん、ビーチ、パリ、パリ 料理などの言葉を入力します。候補は「もの・トピック」と「場所」の下に、該当件数とともに表示されます。",
          },
          {
            name: "候補を開いて結果を見る",
            text: "結果には写真の枚数とおおよそのサイズが表示されます。スクロールして確認し、判断する前に写真を長押しすると大きく表示できます。",
          },
          {
            name: "削除するものを選ぶ",
            text: "削除したい写真にチェックを付けるか、リスト全体が不要なら「すべて選択」をタップします。自動で選択されるものはありません。",
          },
          {
            name: "確認して削除する",
            text: "「削除」をタップします。2 枚以上選んだ場合は、まず「削除前に確認」で何が消えるのかを正確に確認でき、そのあと iOS が最終確認をします。削除した写真は「最近削除した項目」に 30 日間残ります。すぐに容量を戻したい場合は、そのアルバムを空にしてください。",
          },
        ],
      },
      sections: [
        {
          title: "「写真」アプリがすでに検索できること",
          content: [
            "標準の「写真」アプリには「検索」タブがあります。言葉を入力すると、写っているもの、撮影場所、認識された人物、日付から写真を探します。去年の夏の犬の写真のように 1 枚の写真を探すには最適で、追加のアプリも要りません。",
            "「写真」アプリは写真を眺めるためのもので、どれを消すか決めるためのものではありません。検索結果がどれだけ容量を使っているかは教えてくれず、整理の流れを前提に作られてもいません。整理のために作られた検索が役立つのはここです。",
          ],
        },
        {
          title: "検索が最速の整理方法でもある理由",
          content: [
            "数千枚のライブラリをスクロールして整理するのは大変です。大半は不要ではなく、小さなサムネイルではどの部分がそうなのか見分けられないからです。検索は順番を逆にします。まずゴミが多そうなカテゴリの名前を入力し、そのあとでその写真だけを見ます。1 軒のレストランで撮った料理すべて、売った車の写真すべて、同じ景色を 40 枚撮った旅行の夕焼け。",
            "出来事や場所を軸に整理することもできます。都市の名前を入力すると、そこで撮ったものがすべて出てくるので、旅行のベストショットだけを残して残りを数分で消せます。専用のツールがある種類の散らかりは、たとえば[ほぼ同じ写真](/blog/find-duplicate-similar-photos-iphone)、[スクリーンショット](/blog/delete-screenshots-iphone)、[ぼやけた写真](/blog/delete-blurry-photos-iphone)なら、先にそれぞれのリストを使い、そのほかを検索で探します。",
          ],
        },
        {
          title: "iPhone 版 DiskMop の検索の仕組み",
          content: [
            "「ホーム」タブで「写真を検索」を開き、探したいものを入力します。もの、場所、または両方です。入力中に、候補が「もの・トピック」と「場所」の 2 つのグループで、それぞれ該当件数とともに表示されます。「パリ 料理」のように 2 つの考えを一緒に入力すると、パリで撮った料理の写真が見つかります。同じ言葉は DiskMop が作るリストの中でも絞り込みとして使え、たとえば似た写真のグループを 1 つのビーチで撮ったものに絞れます。",
            "候補を選ぶと、該当する写真が件数とおおよそのサイズとともに表示されます。削除したいものにチェックを付けるか、「すべて選択」をタップします。自動で選択されるものはありません。「料理・飲み物」「動物」「夕焼け・朝焼け」のトピックは人が写った写真まで除外するので、家族の夕食が料理のリストに紛れ込むこともありません。削除は、アプリのほかの場所と同じ確認画面と iOS の確認を通ります。",
          ],
        },
        {
          title: "iPhone 上で照合されるもの",
          content: [
            "入力した言葉がスマホの外に出ることはありません。ものとトピックは、スキャンが iPhone 上ですでに作っているラベルに基づき、写真がラベルで見つかるのは、アプリが十分確からしいと判断したときだけです。場所は、各写真に保存された位置情報と、アプリに内蔵された約 3 万 4 千の都市・地域のリストに基づくため、入力した言葉が地図サービスに送られることはありません。都市名での検索は、都市の規模に応じて中心からおよそ 8〜25 km 以内で撮った写真を含みます。",
            "DiskMop はアカウントなしで動作し、プライバシーラベルは「データの収集なし」です。検索もアプリのほかの部分と同じルールに従い、ライブラリをデバイス上で読み取り、アップロードしません。",
          ],
        },
        {
          title: "知っておきたい制約",
          content: [
            "検索は最初のスキャンが終わってから開くため、非常に大きなライブラリでは最初の数分は使えません。認識は推定なので、リストに時々違う写真が混じることがあります。何も自動で選択されず、確認画面があるのはそのためです。動画は内容では分類されないため、場所では見つかりますが、写っているものでは見つかりません。",
            "場所の検索には位置情報のある写真が必要です。カメラの位置情報をオフにした場合や、[共有前に位置情報を削除](/blog/remove-location-from-photos-iphone)してクリーンなコピーだけを残した場合、そのコピーは場所では見つかりません。DiskMop が認識できない言葉を入力すると、その旨が表示され、場所、もの、トピックを入力するよう案内されます。人物を名前で探すには、「写真」アプリの「ピープル」アルバムを使ってください。",
          ],
        },
      ],
      faq: [
        {
          question: "DiskMop の写真検索にはインターネット接続が必要ですか？",
          answer:
            "いいえ。照合は iPhone 上で、ライブラリのスキャンのラベル、各写真の位置情報、アプリに内蔵された場所のリストを使って行われます。入力した言葉はどこにも送られません。",
        },
        {
          question: "DiskMop を入れた直後に検索できないのはなぜですか？",
          answer:
            "検索はライブラリのスキャンで得た結果を使うため、最初のスキャンが終わると開きます。進行状況は「ホーム」タブで確認でき、以降のスキャンは新しい写真だけを対象にします。",
        },
        {
          question: "場所で検索しても写真が見つからないのはなぜですか？",
          answer:
            "場所の検索は、写真に保存された位置情報に基づきます。位置情報をオフにして撮った写真や、位置情報を削除したコピーには位置情報がなく、場所と結び付けられません。",
        },
        {
          question: "人物を名前で検索できますか？",
          answer:
            "DiskMop が探せるのは、もの、トピック、場所です。人物を名前で探すには、「写真」アプリの「ピープル」アルバムと「検索」タブを使ってください。",
        },
        {
          question: "検索すると何かが削除されますか？",
          answer:
            "いいえ。検索は写真を一覧にするだけです。自動で選択されるものはなく、削除は確認画面と iOS 自身の確認を通ります。削除した写真はその後 30 日間「最近削除した項目」に残ります。",
        },
        {
          question: "DiskMop の検索は無料ですか？",
          answer:
            "検索とスキャンは無料です。サブスクリプションなしでも 1 日 10 枚まで削除でき、連続記録やトロフィーで追加の削除枠も獲得できます。DiskMop Pro なら制限がなくなります。",
        },
      ],
      verdict: [
        "検索は写真を見つける最速の方法であり、大きなライブラリでは、何を消すか決める最速の方法でもあります。カテゴリの名前を入力し、その写真だけを見て、不要なものを消します。1 枚の写真を探すなら、「写真」アプリの検索が適した場所です。",
        "iPhone 版 DiskMop は、整理のために作られた検索を加えます。もの、トピック、場所をスマホ上で照合し、各結果の件数とおおよそのサイズを示し、削除前には必ず確認が入ります。スキャンと検索は無料で、1 日 10 枚までは無料で削除できます。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
    ...translations,
  },
};
