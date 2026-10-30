import type { Article } from "../types";
import { translations } from "./i18n/remove-location-from-photos-iphone";

export const removeLocationFromPhotosIphone: Article = {
  slug: "remove-location-from-photos-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-30",
  readingTime: 7,
  content: {
    en: {
      title:
        "How to Remove Location and Metadata From iPhone Photos Before You Share Them",
      metaDescription:
        "Every iPhone photo can carry GPS coordinates, the date and the phone model. Here is what it reveals and how to strip it from photos and videos, in bulk or one by one.",
      subtitle:
        "What is hidden inside each file, the built-in switch, and clean copies that leave your originals untouched",
      intro: [
        "Short answer: photos and videos shot on an iPhone can carry the place they were taken (GPS coordinates), the date and time, the phone and camera model and the software version inside the file itself. This is called metadata, or EXIF data, and it travels with the file. To share without it, open the share sheet in Photos, tap Options and switch Location off, or make clean copies of many files at once with DiskMop for iPhone (version 1.1.10 and later).",
        "This guide shows what is stored and who can read it, three ways to remove it on an iPhone and where each one falls short, and what removing metadata does not change: the faces, street signs and license plates that are visible in the picture itself.",
      ],
      keyTakeaways: [
        "Photos and videos shot on an iPhone store where they were taken, the date and time, the device model and the software version inside the file; anyone who receives the original file can read them.",
        "The share sheet in Photos has an Options button with a Location switch. It removes the location from what you send and leaves the photo in your library unchanged.",
        "Settings > Privacy & Security > Location Services > Camera > Never stops new photos from being tagged with a place, but it does nothing for the photos you already have.",
        "Many social networks hide location when you post, but email, AirDrop, cloud links, classified ads and photos sent as files can pass the original data along, so do not rely on the other side to remove it.",
        "DiskMop for iPhone (1.1.10 and later) marks which of the photos you picked have a location, removes location and phone and camera information from copies, and opens the share sheet. Your originals are never changed. It is free and works on photos and videos.",
        "Removing metadata does not hide what is visible: faces, signs, house numbers and license plates stay in the picture.",
      ],
      dataTable: {
        caption: "Ways to remove location from iPhone photos",
        columns: [
          "Method",
          "Changes your original?",
          "Many photos at once",
          "Shows which photos have a location",
        ],
        rows: [
          [
            "Share sheet > Options > Location off",
            "No, only the copy you send",
            "Yes, select several",
            "No",
          ],
          [
            "Photos > Info > Adjust > No Location",
            "Yes, permanently in your library",
            "Yes, from the menu of a selection (iOS 15 and later)",
            "No",
          ],
          [
            "Location Services > Camera > Never",
            "No, affects only future photos",
            "Not applicable",
            "No",
          ],
          [
            "DiskMop > Tools > Remove location & info",
            "No, works on copies",
            "Yes",
            "Yes, a red pin marks each one",
          ],
        ],
      },
      howTo: {
        name: "Remove location from iPhone photos before sharing",
        totalTime: "PT3M",
        steps: [
          {
            name: "See what a photo carries",
            text: "Open a photo in Photos and swipe up or tap the info button. You will see the camera and lens, the file details and, when the photo has a location, a small map. That map is the same information anyone who receives the original file can read.",
          },
          {
            name: "Use the built-in switch for a quick share",
            text: "Select the photos, tap Share, then tap Options at the top of the share sheet and switch Location off before you send. Your library copy keeps its location.",
          },
          {
            name: "Stop tagging future photos (optional)",
            text: "Go to Settings > Privacy & Security > Location Services > Camera and choose Never. New photos will have no location, but the ones you already took are unchanged, and the Photos app can no longer group new photos by place.",
          },
          {
            name: "Make clean copies in bulk with DiskMop",
            text: "In DiskMop for iPhone open Tools > Remove location & info and pick photos and videos. A red pin marks every item that has a location. Leave Location and Phone, camera & captions switched on, decide whether to remove the date and time as well, then tap Clean & share.",
          },
          {
            name: "Check the result and share",
            text: "A summary at the top shows how many items were cleaned and how many had a location removed, then the iOS share sheet opens with the clean copies. Afterwards you can share again, save the copies to Photos next to your originals, or copy a single photo.",
          },
        ],
      },
      sections: [
        {
          title: "What Is Hidden Inside a Photo or Video",
          content: [
            "Every photo your iPhone takes is saved with extra information next to the picture. The most sensitive part is the location: when Camera is allowed to use Location Services, the GPS coordinates of where you stood are written into the file. Alongside it go the date and time, the phone and camera model, lens settings, the software version and any caption or comment you add later in Photos. Videos carry the same kind of information.",
            "You do not see this when you look at the picture, which is why it is easy to forget. It is only a few lines of text, but it is enough to show that a photo was taken at a particular address on a particular evening.",
          ],
        },
        {
          title: "When It Actually Matters",
          content: [
            "Most of the time nothing happens: friends already know where you were. It matters when you send a photo to someone you do not know, such as a buyer, a landlord, a forum or a support team, and the photo was taken at home or at work. A picture of a bike for sale, shot in the hallway, can point to your front door.",
            "Platforms behave differently. Many social networks remove location from the image they show when you post it, but that is up to the platform and it can change. Email attachments, AirDrop, files sent as documents, cloud links and classified ads can pass the original data along. If the photo matters, remove the metadata yourself before it leaves your phone.",
          ],
        },
        {
          title: "What iOS Already Offers (and Where It Stops)",
          content: [
            "Three built-in tools help. First, the Options button at the top of the share sheet in Photos has a Location switch, so you can share without it. Your library copy is not touched. Second, in the info panel of a photo, Adjust next to the location lets you choose No Location, which removes it from the photo in your library for good; recent iOS versions also offer this for a selection of photos from the menu. Third, Settings > Privacy & Security > Location Services > Camera > Never stops new photos from getting a location.",
            "What these tools do not give you is an overview. Nothing tells you which of the forty photos you picked actually have a location, the Options switch is set per share, and information about the device is not something the share sheet lets you inspect one item at a time. That is the gap a dedicated tool fills.",
          ],
        },
        {
          title: "Clean Copies in Bulk With DiskMop for iPhone",
          content: [
            "DiskMop for iPhone 1.1.10 adds Remove location & info to the Tools tab. You pick photos and videos from your library, and the screen shows how many you selected and how many have a location, with a red pin on each of those. Location and Phone, camera & captions (model, software, serial numbers and comments) are switched on. Date and time taken is off by default: without it, the order of the photos can get mixed up for whoever receives them, but you can switch it on.",
            "Tap Clean & share and DiskMop writes clean copies, then opens the iOS share sheet. Your originals never change and nothing is added to your library unless you ask. HEIC, JPEG and PNG photos and videos are supported; a video is not re-encoded. If an original lives only in iCloud, DiskMop asks before downloading it. RAW files are skipped and listed, and for a Live Photo only the still image is shared.",
            "After sharing, the shortcuts under the result let you share again, save the clean copies to Photos next to the originals, or copy a single photo to paste somewhere. The tool is free: there is no daily limit and no subscription, and it works entirely on the iPhone with no account and nothing uploaded.",
          ],
        },
        {
          title: "What Stays Visible",
          content: [
            "Removing metadata only removes what is hidden in the file. Faces, street signs, house numbers, shop names and license plates in the picture itself stay exactly as they are, and the same is true for anything a person can recognise by looking. Check the photo before you send it, and crop or blur it if the picture itself gives something away.",
            "If you want to keep some pictures out of sight rather than clean them, our guide on [hiding photos on iPhone](/blog/hide-photos-iphone) compares the hidden album with a locked vault. If you also want your library to find photos by place, keep Camera location switched on: [searching your iPhone photos by what is in them](/blog/search-photos-by-content-iphone) uses a photo's location to find, for example, everything taken in Paris.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Does the Options switch in Photos remove the location from my original photo?",
          answer:
            "No. The Location switch in the share sheet only changes what you send. The photo in your library keeps its location. To remove it from the library copy as well, use Adjust > No Location in the photo's info panel.",
        },
        {
          question:
            "Do photos sent through messaging apps and social networks keep their location?",
          answer:
            "It depends on the app, its version and whether you send the picture as a photo or as a file. Many apps remove location from the image they show, but email, AirDrop, cloud links and files sent as documents can keep the original data. The safe approach is to clean the photo before it leaves your phone.",
        },
        {
          question: "Can DiskMop remove location from videos too?",
          answer:
            "Yes. Videos are handled like photos: DiskMop writes a clean copy without re-encoding the video, and your original stays untouched. A Live Photo is shared as its still image only.",
        },
        {
          question: "Does DiskMop upload my photos to clean them?",
          answer:
            "No. The cleaning happens on your iPhone. There is no account, no analytics SDK and nothing leaves the device. Only if an original is stored in iCloud and you agree, the iPhone downloads it from your own iCloud first.",
        },
        {
          question: "Is removing location and info free in DiskMop?",
          answer:
            "Yes. The tool needs no subscription and has no daily limit. The free daily allowance of ten deletions applies only to deleting photos, not to cleaning copies.",
        },
        {
          question: "Does this make a photo anonymous?",
          answer:
            "No. It removes the hidden fields only. Faces, signs, license plates and anything else visible in the picture stay, so check the picture itself before you share it.",
        },
      ],
      verdict: [
        "If you share photos with people you do not know, treat the location inside the file as part of the photo. The Options switch in Photos is a quick fix for a single share, and turning off Camera location prevents the problem going forward, but neither shows you which photos are affected.",
        "DiskMop for iPhone makes that visible and fixes it in bulk: it marks the photos with a location, writes clean copies of photos and videos, and leaves your originals alone. The tool is free, works on the phone and needs version 1.1.10 or later.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    tr: {
      title:
        "iPhone Fotoğraflarından Konum ve Üstveriyi Paylaşmadan Önce Silme",
      metaDescription:
        "Her iPhone fotoğrafı GPS konumunu, tarihi ve telefon modelini taşıyabilir. Neyi ele verdiğini ve fotoğraf ile videolardan toplu ya da tek tek nasıl sileceğinizi anlatıyoruz.",
      subtitle:
        "Her dosyanın içinde saklı olanlar, yerleşik anahtar ve orijinallerinize dokunmayan temiz kopyalar",
      intro: [
        "Kısa cevap: iPhone ile çekilen fotoğraf ve videolar, dosyanın içinde çekildiği yeri (GPS koordinatları), tarih ve saati, telefon ve kamera modelini ve yazılım sürümünü taşıyabilir. Buna üstveri ya da EXIF verisi denir ve dosyayla birlikte gider. Bunlar olmadan paylaşmak için Fotoğraflar'da paylaş sayfasını açıp Seçenekler'e dokunun ve Konum'u kapatın; ya da çok sayıda dosyanın temiz kopyasını DiskMop iPhone sürümüyle (1.1.10 ve sonrası) tek seferde alın.",
        "Bu rehber neyin saklandığını ve bunu kimin okuyabildiğini, iPhone'da silmenin üç yolunu ve her birinin nerede yetersiz kaldığını, ayrıca üstveriyi silmenin neyi DEĞİŞTİRMEDİĞİNİ gösterir: fotoğrafın kendisinde görünen yüzler, sokak tabelaları ve plakalar.",
      ],
      keyTakeaways: [
        "iPhone ile çekilen fotoğraf ve videolar, çekildikleri yeri, tarih ve saati, cihaz modelini ve yazılım sürümünü dosyanın içinde saklar; özgün dosyayı alan herkes bunları okuyabilir.",
        "Fotoğraflar'daki paylaş sayfasında Seçenekler düğmesi ve Konum anahtarı vardır. Gönderdiğiniz kopyadan konumu çıkarır, kitaplığınızdaki fotoğrafa dokunmaz.",
        "Ayarlar > Gizlilik ve Güvenlik > Konum Servisleri > Kamera > Asla, yeni fotoğraflara konum yazılmasını durdurur; ama zaten çektiğiniz fotoğraflar için bir şey yapmaz.",
        "Birçok sosyal ağ paylaşım sırasında konumu gizler; ama e-posta, AirDrop, bulut bağlantıları, ilan siteleri ve dosya olarak gönderilen fotoğraflar özgün veriyi taşıyabilir. Karşı tarafın silmesine güvenmeyin.",
        "DiskMop iPhone sürümü (1.1.10 ve sonrası) seçtiğiniz fotoğraflardan hangilerinde konum olduğunu işaretler, kopyalardan konumu ve telefon ile kamera bilgisini siler ve paylaş sayfasını açar. Orijinaller asla değişmez. Ücretsizdir; fotoğraf ve videoda çalışır.",
        "Üstveriyi silmek görünür olanı gizlemez: yüzler, tabelalar, kapı numaraları ve plakalar fotoğrafta kalır.",
      ],
      dataTable: {
        caption: "iPhone fotoğraflarından konum silmenin yolları",
        columns: [
          "Yöntem",
          "Orijinali değiştirir mi?",
          "Birden çok fotoğraf",
          "Hangi fotoğrafta konum var gösterir mi?",
        ],
        rows: [
          [
            "Paylaş sayfası > Seçenekler > Konum kapalı",
            "Hayır, yalnızca gönderdiğiniz kopya",
            "Evet, birkaçını seçin",
            "Hayır",
          ],
          [
            "Fotoğraflar > Bilgi > Ayarla > Konum Yok",
            "Evet, kitaplıkta kalıcı olarak",
            "Evet, seçimin menüsünden (iOS 15 ve sonrası)",
            "Hayır",
          ],
          [
            "Konum Servisleri > Kamera > Asla",
            "Hayır, yalnızca yeni fotoğrafları etkiler",
            "Geçerli değil",
            "Hayır",
          ],
          [
            "DiskMop > Araçlar > Konumu ve bilgileri sil",
            "Hayır, kopyalar üzerinde çalışır",
            "Evet",
            "Evet, her birinde kırmızı iğne",
          ],
        ],
      },
      howTo: {
        name: "iPhone fotoğraflarından paylaşmadan önce konum silme",
        totalTime: "PT3M",
        steps: [
          {
            name: "Fotoğrafın ne taşıdığına bakın",
            text: "Fotoğraflar'da bir fotoğrafı açıp yukarı kaydırın ya da bilgi düğmesine dokunun. Kamera ve lens bilgisini, dosya ayrıntılarını ve fotoğrafın konumu varsa küçük bir haritayı görürsünüz. Bu harita, özgün dosyayı alan herkesin okuyabileceği bilgiyle aynıdır.",
          },
          {
            name: "Hızlı paylaşım için yerleşik anahtarı kullanın",
            text: "Fotoğrafları seçin, Paylaş'a dokunun, paylaş sayfasının üstündeki Seçenekler'e girin ve göndermeden önce Konum'u kapatın. Kitaplığınızdaki kopya konumunu korur.",
          },
          {
            name: "Yeni fotoğraflara konum yazılmasını durdurun (isteğe bağlı)",
            text: "Ayarlar > Gizlilik ve Güvenlik > Konum Servisleri > Kamera yolundan Asla'yı seçin. Yeni fotoğraflarda konum olmaz; ama önceki fotoğraflar değişmez ve Fotoğraflar uygulaması yeni fotoğrafları artık yere göre gruplayamaz.",
          },
          {
            name: "DiskMop ile toplu temiz kopya alın",
            text: "iPhone için DiskMop'ta Araçlar > Konumu ve bilgileri sil'i açıp fotoğraf ve videoları seçin. Konumu olan her öğede kırmızı iğne görünür. Konum ile Telefon, kamera ve açıklamalar açık kalsın, tarih ve saati de silip silmeyeceğinize karar verin, sonra Temizle ve paylaş'a dokunun.",
          },
          {
            name: "Sonucu kontrol edip paylaşın",
            text: "Üstte kaç öğenin temizlendiğini ve kaçından konum silindiğini gösteren bir özet çıkar, ardından iOS paylaş sayfası temiz kopyalarla açılır. Sonra tekrar paylaşabilir, kopyaları orijinallerin yanına Fotoğraflar'a kaydedebilir ya da tek bir fotoğrafı kopyalayabilirsiniz.",
          },
        ],
      },
      sections: [
        {
          title: "Fotoğrafın ya da Videonun İçinde Ne Saklı",
          content: [
            "iPhone'unuzun çektiği her fotoğraf, görüntünün yanında ek bilgiyle kaydedilir. En hassas kısım konumdur: Kamera Konum Servisleri'ni kullanabiliyorsa, durduğunuz yerin GPS koordinatları dosyaya yazılır. Yanında tarih ve saat, telefon ve kamera modeli, lens ayarları, yazılım sürümü ve sonradan Fotoğraflar'da eklediğiniz açıklama ya da yorum da bulunur. Videolar da aynı türden bilgiyi taşır.",
            "Fotoğrafa bakarken bunları görmezsiniz; unutmak bu yüzden kolaydır. Birkaç satırlık metindir, ama bir fotoğrafın belirli bir adreste, belirli bir akşam çekildiğini göstermeye yeter.",
          ],
        },
        {
          title: "Ne Zaman Gerçekten Önemli",
          content: [
            "Çoğu zaman hiçbir şey olmaz: arkadaşlarınız nerede olduğunuzu zaten bilir. Tanımadığınız birine, örneğin bir alıcıya, ev sahibine, bir foruma ya da destek ekibine fotoğraf gönderirken ve fotoğraf evde ya da işte çekildiyse önem kazanır. Koridorda çekilmiş satılık bir bisiklet fotoğrafı, ön kapınızı gösterebilir.",
            "Platformlar farklı davranır. Birçok sosyal ağ paylaşım sırasında gösterdiği görüntüden konumu çıkarır; ama bu platforma bağlıdır ve değişebilir. E-posta ekleri, AirDrop, belge olarak gönderilen dosyalar, bulut bağlantıları ve ilan siteleri özgün veriyi taşıyabilir. Fotoğraf önemliyse üstveriyi telefonunuzdan çıkmadan kendiniz silin.",
          ],
        },
        {
          title: "iOS Zaten Ne Sunuyor (ve Nerede Duruyor)",
          content: [
            "Üç yerleşik araç yardımcı olur. Birincisi, Fotoğraflar'daki paylaş sayfasının üstündeki Seçenekler düğmesinde bir Konum anahtarı vardır; konumsuz paylaşabilirsiniz, kitaplığınızdaki kopyaya dokunulmaz. İkincisi, fotoğrafın bilgi panelinde konumun yanındaki Ayarla ile Konum Yok'u seçerseniz konum kitaplıktaki fotoğraftan kalıcı olarak silinir; güncel iOS sürümleri bunu seçim menüsünden birkaç fotoğraf için de sunar. Üçüncüsü, Ayarlar > Gizlilik ve Güvenlik > Konum Servisleri > Kamera > Asla, yeni fotoğraflara konum yazılmasını durdurur.",
            "Bu araçların vermediği şey genel görünümdür. Seçtiğiniz kırk fotoğraftan hangilerinde gerçekten konum olduğunu söyleyen yoktur, Seçenekler anahtarı paylaşım başına ayarlanır ve cihaz bilgisini öğe öğe incelemenize paylaş sayfası izin vermez. Özel bir aracın doldurduğu boşluk budur.",
          ],
        },
        {
          title: "DiskMop iPhone Sürümüyle Toplu Temiz Kopya",
          content: [
            "DiskMop iPhone 1.1.10, Araçlar sekmesine Konumu ve bilgileri sil'i ekler. Kitaplığınızdan fotoğraf ve video seçersiniz; ekran kaç öğe seçtiğinizi ve kaçında konum olduğunu gösterir, konumu olan her öğede kırmızı bir iğne durur. Konum ile Telefon, kamera ve açıklamalar (model, yazılım, seri numaraları ve yorumlar) açıktır. Çekim tarihi ve saati varsayılan olarak kapalıdır: kapalı değilse alıcıda fotoğrafların sırası karışabilir; isterseniz açabilirsiniz.",
            "Temizle ve paylaş'a dokunduğunuzda DiskMop temiz kopyalar yazar, ardından iOS paylaş sayfasını açar. Orijinaller asla değişmez ve siz istemedikçe kitaplığınıza hiçbir şey eklenmez. HEIC, JPEG ve PNG fotoğraflar ile videolar desteklenir; video yeniden kodlanmaz. Bir orijinal yalnızca iCloud'daysa DiskMop indirmeden önce sorar. RAW dosyalar atlanır ve listelenir; Live Photo için yalnızca sabit kare paylaşılır.",
            "Paylaştıktan sonra sonucun altındaki kısa yollarla tekrar paylaşabilir, temiz kopyaları orijinallerin yanına Fotoğraflar'a kaydedebilir ya da tek bir fotoğrafı kopyalayıp başka yere yapıştırabilirsiniz. Araç ücretsizdir: günlük sınır ve abonelik yoktur; tamamen iPhone'da çalışır, hesap istemez ve hiçbir şey yüklenmez.",
          ],
        },
        {
          title: "Görünür Olan Ne Kalır",
          content: [
            "Üstveriyi silmek yalnızca dosyada saklı olanı siler. Fotoğrafın kendisindeki yüzler, sokak tabelaları, kapı numaraları, dükkân adları ve plakalar olduğu gibi kalır; bakınca tanınan her şey için de aynısı geçerlidir. Göndermeden önce fotoğrafa bakın; görüntünün kendisi bir şey ele veriyorsa kırpın ya da bulanıklaştırın.",
            "Bazı fotoğrafları temizlemek yerine gözden uzak tutmak isterseniz [iPhone'da fotoğrafları gizleme](/blog/hide-photos-iphone) rehberimiz gizli albümü kilitli bir kasayla karşılaştırır. Kitaplığınızın fotoğrafları yere göre de bulmasını istiyorsanız Kamera konumunu açık bırakın: [iPhone fotoğraflarını içeriğine göre arama](/blog/search-photos-by-content-iphone) rehberi, örneğin Paris'te çekilen her şeyi bulmak için fotoğrafın konumunu kullanır.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Fotoğraflar'daki Seçenekler anahtarı özgün fotoğraftan konumu siler mi?",
          answer:
            "Hayır. Paylaş sayfasındaki Konum anahtarı yalnızca gönderdiğiniz kopyayı değiştirir. Kitaplığınızdaki fotoğraf konumunu korur. Kitaplıktaki kopyadan da silmek için fotoğrafın bilgi panelinde Ayarla > Konum Yok'u kullanın.",
        },
        {
          question:
            "Mesajlaşma uygulamalarından ve sosyal ağlardan giden fotoğraflar konumunu korur mu?",
          answer:
            "Uygulamaya, sürümüne ve görseli fotoğraf mı dosya mı olarak gönderdiğinize bağlıdır. Birçok uygulama gösterdiği görüntüden konumu çıkarır; ama e-posta, AirDrop, bulut bağlantıları ve belge olarak gönderilen dosyalar özgün veriyi koruyabilir. Güvenli yol, fotoğrafı telefonunuzdan çıkmadan temizlemektir.",
        },
        {
          question: "DiskMop videolardan da konum silebilir mi?",
          answer:
            "Evet. Videolar fotoğraflar gibi işlenir: DiskMop videoyu yeniden kodlamadan temiz bir kopya yazar, orijinaliniz değişmez. Live Photo yalnızca sabit kare olarak paylaşılır.",
        },
        {
          question: "DiskMop temizlemek için fotoğraflarımı yüklüyor mu?",
          answer:
            "Hayır. Temizleme iPhone'unuzda olur. Hesap, analitik SDK'sı yoktur ve hiçbir şey cihazdan çıkmaz. Bir orijinal iCloud'daysa ve siz onay verirseniz, iPhone önce onu kendi iCloud'unuzdan indirir.",
        },
        {
          question: "DiskMop'ta konumu ve bilgileri silmek ücretsiz mi?",
          answer:
            "Evet. Araç abonelik istemez ve günlük sınırı yoktur. Günlük on ücretsiz silme hakkı yalnızca fotoğraf silmek için geçerlidir, kopya temizlemek için değil.",
        },
        {
          question: "Bu, fotoğrafı anonim yapar mı?",
          answer:
            "Hayır. Yalnızca gizli alanları siler. Yüzler, tabelalar, plakalar ve görüntüde görünen her şey kalır; paylaşmadan önce görüntünün kendisine de bakın.",
        },
      ],
      verdict: [
        "Tanımadığınız kişilerle fotoğraf paylaşıyorsanız dosyanın içindeki konumu fotoğrafın bir parçası sayın. Fotoğraflar'daki Seçenekler anahtarı tek bir paylaşım için hızlı çözümdür, Kamera konumunu kapatmak sorunu ileriye dönük önler; ama hiçbiri hangi fotoğrafların etkilendiğini göstermez.",
        "iPhone için DiskMop bunu görünür kılar ve toplu çözer: konumlu fotoğrafları işaretler, fotoğraf ve videoların temiz kopyalarını yazar ve orijinallerinize dokunmaz. Araç ücretsizdir, telefonda çalışır ve 1.1.10 ya da sonrasını gerektirir.",
      ],
      ctaText: "iPhone için DiskMop'u App Store'da edinin",
    },
    de: {
      title:
        "Standort und Metadaten aus iPhone-Fotos entfernen, bevor Sie sie teilen",
      metaDescription:
        "Jedes iPhone-Foto kann GPS-Koordinaten, Datum und Gerätemodell enthalten. Was das verrät und wie Sie es aus Fotos und Videos entfernen, einzeln oder gesammelt.",
      subtitle:
        "Was in jeder Datei steckt, der eingebaute Schalter und saubere Kopien, die Ihre Originale unberührt lassen",
      intro: [
        "Kurze Antwort: Fotos und Videos vom iPhone können in der Datei selbst den Aufnahmeort (GPS-Koordinaten), Datum und Uhrzeit, das Handy- und Kameramodell und die Softwareversion tragen. Das nennt man Metadaten oder EXIF-Daten, und sie wandern mit der Datei. Um ohne sie zu teilen, öffnen Sie in Fotos das Teilen-Blatt, tippen auf Optionen und schalten Standort aus, oder Sie erstellen mit DiskMop für das iPhone (ab Version 1.1.10) auf einmal saubere Kopien vieler Dateien.",
        "Dieser Ratgeber zeigt, was gespeichert wird und wer es lesen kann, drei Wege zum Entfernen auf dem iPhone und wo jeder an Grenzen stößt, sowie was das Entfernen NICHT ändert: Gesichter, Straßenschilder und Kennzeichen, die im Bild selbst zu sehen sind.",
      ],
      keyTakeaways: [
        "Fotos und Videos vom iPhone speichern in der Datei, wo sie entstanden sind, Datum und Uhrzeit, das Gerätemodell und die Softwareversion; wer die Originaldatei erhält, kann das lesen.",
        "Das Teilen-Blatt in Fotos hat eine Schaltfläche Optionen mit einem Schalter Standort. Er entfernt den Standort aus dem, was Sie senden, und lässt das Foto in Ihrer Mediathek unverändert.",
        "Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Kamera > Nie verhindert, dass neue Fotos einen Ort erhalten, ändert aber nichts an den Fotos, die Sie schon haben.",
        "Viele soziale Netzwerke verbergen den Standort beim Posten, aber E-Mail, AirDrop, Cloud-Links, Kleinanzeigen und als Datei gesendete Fotos können die Originaldaten weitergeben. Verlassen Sie sich nicht darauf, dass die Gegenseite sie entfernt.",
        "DiskMop für das iPhone (ab 1.1.10) markiert, welche der gewählten Fotos einen Standort haben, entfernt Standort sowie Handy- und Kamerainformationen aus Kopien und öffnet das Teilen-Blatt. Ihre Originale werden nie verändert. Es ist kostenlos und funktioniert mit Fotos und Videos.",
        "Das Entfernen von Metadaten verbirgt nichts Sichtbares: Gesichter, Schilder, Hausnummern und Kennzeichen bleiben im Bild.",
      ],
      dataTable: {
        caption: "Wege, den Standort aus iPhone-Fotos zu entfernen",
        columns: [
          "Methode",
          "Ändert das Original?",
          "Viele Fotos auf einmal",
          "Zeigt, welche Fotos einen Standort haben",
        ],
        rows: [
          [
            "Teilen-Blatt > Optionen > Standort aus",
            "Nein, nur die gesendete Kopie",
            "Ja, mehrere auswählen",
            "Nein",
          ],
          [
            "Fotos > Info > Anpassen > Kein Standort",
            "Ja, dauerhaft in Ihrer Mediathek",
            "Ja, über das Menü einer Auswahl (ab iOS 15)",
            "Nein",
          ],
          [
            "Ortungsdienste > Kamera > Nie",
            "Nein, betrifft nur künftige Fotos",
            "Nicht zutreffend",
            "Nein",
          ],
          [
            "DiskMop > Werkzeuge > Standort und Infos entfernen",
            "Nein, arbeitet mit Kopien",
            "Ja",
            "Ja, ein roter Pin markiert jedes",
          ],
        ],
      },
      howTo: {
        name: "Standort aus iPhone-Fotos vor dem Teilen entfernen",
        totalTime: "PT3M",
        steps: [
          {
            name: "Sehen, was ein Foto enthält",
            text: "Öffnen Sie ein Foto in Fotos und wischen Sie nach oben oder tippen Sie auf die Info-Taste. Sie sehen Kamera und Objektiv, die Dateidetails und, wenn das Foto einen Standort hat, eine kleine Karte. Das sind dieselben Informationen, die jeder lesen kann, der die Originaldatei erhält.",
          },
          {
            name: "Für schnelles Teilen den eingebauten Schalter nutzen",
            text: "Wählen Sie die Fotos, tippen Sie auf Teilen, dann oben im Teilen-Blatt auf Optionen und schalten Sie Standort vor dem Senden aus. Die Kopie in Ihrer Mediathek behält ihren Standort.",
          },
          {
            name: "Künftige Fotos nicht mehr verorten (optional)",
            text: "Wählen Sie unter Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Kamera die Option Nie. Neue Fotos haben dann keinen Standort, bereits aufgenommene bleiben unverändert, und die Fotos-App kann neue Fotos nicht mehr nach Orten gruppieren.",
          },
          {
            name: "Mit DiskMop gesammelt saubere Kopien erstellen",
            text: "Öffnen Sie in DiskMop für das iPhone Werkzeuge > Standort und Infos entfernen und wählen Sie Fotos und Videos. Ein roter Pin markiert jedes Element mit Standort. Lassen Sie Standort und Handy, Kamera und Beschreibungen eingeschaltet, entscheiden Sie, ob auch Datum und Uhrzeit entfernt werden sollen, und tippen Sie auf Bereinigen & teilen.",
          },
          {
            name: "Ergebnis prüfen und teilen",
            text: "Eine Zusammenfassung oben zeigt, wie viele Elemente bereinigt wurden und bei wie vielen der Standort entfernt wurde. Dann öffnet sich das iOS-Teilen-Blatt mit den sauberen Kopien. Danach können Sie erneut teilen, die Kopien neben den Originalen in Fotos sichern oder ein einzelnes Foto kopieren.",
          },
        ],
      },
      sections: [
        {
          title: "Was in einem Foto oder Video steckt",
          content: [
            "Jedes Foto, das Ihr iPhone aufnimmt, wird mit zusätzlichen Informationen neben dem Bild gespeichert. Am sensibelsten ist der Standort: Darf die Kamera die Ortungsdienste nutzen, werden die GPS-Koordinaten Ihres Standorts in die Datei geschrieben. Dazu kommen Datum und Uhrzeit, Handy- und Kameramodell, Objektiveinstellungen, die Softwareversion und jede Beschreibung oder jeder Kommentar, den Sie später in Fotos hinzufügen. Videos tragen dieselbe Art von Informationen.",
            "Beim Ansehen des Bildes bemerken Sie davon nichts, deshalb vergisst man es leicht. Es sind nur ein paar Zeilen Text, aber sie genügen, um zu zeigen, dass ein Foto an einem bestimmten Abend an einer bestimmten Adresse entstand.",
          ],
        },
        {
          title: "Wann es wirklich darauf ankommt",
          content: [
            "Meist passiert nichts: Freunde wissen ohnehin, wo Sie waren. Es kommt darauf an, wenn Sie ein Foto an jemanden schicken, den Sie nicht kennen, etwa einen Käufer, einen Vermieter, ein Forum oder den Support, und das Foto zuhause oder bei der Arbeit entstand. Ein im Flur aufgenommenes Bild eines Fahrrads zum Verkauf kann auf Ihre Haustür deuten.",
            "Plattformen verhalten sich unterschiedlich. Viele soziale Netzwerke entfernen den Standort aus dem Bild, das sie beim Posten anzeigen, aber das liegt an der Plattform und kann sich ändern. E-Mail-Anhänge, AirDrop, als Dokument gesendete Dateien, Cloud-Links und Kleinanzeigen können die Originaldaten weitergeben. Ist das Foto wichtig, entfernen Sie die Metadaten selbst, bevor es Ihr Handy verlässt.",
          ],
        },
        {
          title: "Was iOS schon bietet (und wo es endet)",
          content: [
            "Drei eingebaute Werkzeuge helfen. Erstens hat die Schaltfläche Optionen oben im Teilen-Blatt von Fotos einen Schalter Standort, sodass Sie ohne ihn teilen können; die Kopie in Ihrer Mediathek bleibt unberührt. Zweitens können Sie im Info-Bereich eines Fotos über Anpassen neben dem Standort Kein Standort wählen, was ihn dauerhaft aus dem Foto in Ihrer Mediathek entfernt; neuere iOS-Versionen bieten das im Menü auch für eine Auswahl mehrerer Fotos. Drittens verhindert Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Kamera > Nie, dass neue Fotos einen Standort bekommen.",
            "Was diese Werkzeuge nicht liefern, ist ein Überblick. Nichts sagt Ihnen, welche der vierzig gewählten Fotos tatsächlich einen Standort haben, der Optionen-Schalter gilt pro Teilvorgang, und Geräteinformationen lassen sich im Teilen-Blatt nicht Element für Element prüfen. Diese Lücke füllt ein eigenes Werkzeug.",
          ],
        },
        {
          title: "Saubere Kopien in großer Zahl mit DiskMop für das iPhone",
          content: [
            "DiskMop für das iPhone 1.1.10 fügt dem Tab Werkzeuge die Funktion Standort und Infos entfernen hinzu. Sie wählen Fotos und Videos aus Ihrer Mediathek; der Bildschirm zeigt, wie viele Sie gewählt haben und wie viele einen Standort tragen, jeweils mit rotem Pin. Standort sowie Handy, Kamera und Beschreibungen (Modell, Software, Seriennummern und Kommentare) sind eingeschaltet. Aufnahmedatum und -uhrzeit ist standardmäßig aus: Ohne sie kann die Reihenfolge der Fotos beim Empfänger durcheinandergeraten; Sie können sie aber einschalten.",
            "Tippen Sie auf Bereinigen & teilen, schreibt DiskMop saubere Kopien und öffnet danach das iOS-Teilen-Blatt. Ihre Originale ändern sich nie, und zu Ihrer Mediathek kommt nichts hinzu, solange Sie es nicht wollen. HEIC-, JPEG- und PNG-Fotos sowie Videos werden unterstützt; ein Video wird nicht neu kodiert. Liegt ein Original nur in iCloud, fragt DiskMop vor dem Laden. RAW-Dateien werden übersprungen und aufgelistet, und bei einem Live Photo wird nur das Standbild geteilt.",
            "Nach dem Teilen können Sie über die Kurzbefehle unter dem Ergebnis erneut teilen, die sauberen Kopien neben den Originalen in Fotos sichern oder ein einzelnes Foto kopieren, um es anderswo einzufügen. Das Werkzeug ist kostenlos: ohne Tageslimit und ohne Abo, es läuft vollständig auf dem iPhone, ohne Konto und ohne Upload.",
          ],
        },
        {
          title: "Was sichtbar bleibt",
          content: [
            "Das Entfernen von Metadaten löscht nur, was in der Datei verborgen ist. Gesichter, Straßenschilder, Hausnummern, Ladennamen und Kennzeichen im Bild selbst bleiben unverändert, ebenso alles, was ein Mensch beim Hinsehen erkennt. Prüfen Sie das Foto vor dem Senden und schneiden oder verpixeln Sie es, wenn das Bild selbst etwas verrät.",
            "Wenn Sie manche Bilder lieber aus dem Blickfeld nehmen als bereinigen möchten, vergleicht unser Ratgeber zum [Verstecken von Fotos auf dem iPhone](/blog/hide-photos-iphone) das versteckte Album mit einem gesperrten Tresor. Soll Ihre Mediathek Fotos auch nach Ort finden, lassen Sie den Kamera-Standort eingeschaltet: [Fotos auf dem iPhone nach Inhalt durchsuchen](/blog/search-photos-by-content-iphone) nutzt den Standort eines Fotos, um zum Beispiel alles zu finden, was in Paris entstand.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Entfernt der Optionen-Schalter in Fotos den Standort aus meinem Originalfoto?",
          answer:
            "Nein. Der Schalter Standort im Teilen-Blatt ändert nur, was Sie senden. Das Foto in Ihrer Mediathek behält seinen Standort. Um ihn auch aus der Mediathek-Kopie zu entfernen, nutzen Sie im Info-Bereich des Fotos Anpassen > Kein Standort.",
        },
        {
          question:
            "Behalten Fotos aus Messengern und sozialen Netzwerken ihren Standort?",
          answer:
            "Das hängt von der App, ihrer Version und davon ab, ob Sie das Bild als Foto oder als Datei senden. Viele Apps entfernen den Standort aus dem angezeigten Bild, aber E-Mail, AirDrop, Cloud-Links und als Dokument gesendete Dateien können die Originaldaten behalten. Am sichersten bereinigen Sie das Foto, bevor es Ihr Handy verlässt.",
        },
        {
          question: "Kann DiskMop den Standort auch aus Videos entfernen?",
          answer:
            "Ja. Videos werden wie Fotos behandelt: DiskMop schreibt eine saubere Kopie, ohne das Video neu zu kodieren, und Ihr Original bleibt unberührt. Ein Live Photo wird nur als Standbild geteilt.",
        },
        {
          question: "Lädt DiskMop meine Fotos zum Bereinigen hoch?",
          answer:
            "Nein. Die Bereinigung geschieht auf Ihrem iPhone. Es gibt kein Konto, kein Analyse-SDK, und nichts verlässt das Gerät. Nur wenn ein Original in iCloud liegt und Sie zustimmen, lädt das iPhone es zuvor aus Ihrer eigenen iCloud.",
        },
        {
          question:
            "Ist das Entfernen von Standort und Infos in DiskMop kostenlos?",
          answer:
            "Ja. Das Werkzeug braucht kein Abo und hat kein Tageslimit. Das kostenlose Tageskontingent von zehn Löschungen gilt nur für das Löschen von Fotos, nicht für das Bereinigen von Kopien.",
        },
        {
          question: "Macht das ein Foto anonym?",
          answer:
            "Nein. Es entfernt nur die verborgenen Felder. Gesichter, Schilder, Kennzeichen und alles andere Sichtbare im Bild bleiben, prüfen Sie also vor dem Teilen auch das Bild selbst.",
        },
      ],
      verdict: [
        "Wenn Sie Fotos mit Menschen teilen, die Sie nicht kennen, behandeln Sie den Standort in der Datei als Teil des Fotos. Der Optionen-Schalter in Fotos ist eine schnelle Lösung für ein einzelnes Teilen, und das Abschalten des Kamera-Standorts beugt dem Problem künftig vor, aber keines von beiden zeigt Ihnen, welche Fotos betroffen sind.",
        "DiskMop für das iPhone macht das sichtbar und behebt es gesammelt: Es markiert die Fotos mit Standort, schreibt saubere Kopien von Fotos und Videos und lässt Ihre Originale in Ruhe. Das Werkzeug ist kostenlos, läuft auf dem Handy und braucht Version 1.1.10 oder neuer.",
      ],
      ctaText: "DiskMop für das iPhone im App Store laden",
    },
    fr: {
      title:
        "Supprimer la position et les métadonnées des photos iPhone avant de les partager",
      metaDescription:
        "Chaque photo iPhone peut contenir des coordonnées GPS, la date et le modèle du téléphone. Ce que cela révèle et comment les supprimer des photos et vidéos, en lot ou une par une.",
      subtitle:
        "Ce que cache chaque fichier, l'interrupteur intégré et des copies propres qui laissent vos originaux intacts",
      intro: [
        "Réponse courte : les photos et vidéos prises avec un iPhone peuvent contenir, dans le fichier lui-même, le lieu de prise de vue (coordonnées GPS), la date et l'heure, le modèle du téléphone et de l'appareil photo et la version du logiciel. On parle de métadonnées, ou de données EXIF, et elles suivent le fichier. Pour partager sans elles, ouvrez la feuille de partage dans Photos, touchez Options et désactivez Position, ou créez des copies propres de nombreux fichiers d'un coup avec DiskMop pour iPhone (version 1.1.10 et suivantes).",
        "Ce guide montre ce qui est enregistré et qui peut le lire, trois façons de le supprimer sur iPhone et leurs limites, ainsi que ce que la suppression des métadonnées ne change PAS : les visages, les panneaux et les plaques d'immatriculation visibles dans l'image elle-même.",
      ],
      keyTakeaways: [
        "Les photos et vidéos prises avec un iPhone enregistrent dans le fichier le lieu de prise de vue, la date et l'heure, le modèle de l'appareil et la version du logiciel ; quiconque reçoit le fichier d'origine peut les lire.",
        "La feuille de partage de Photos a un bouton Options avec un interrupteur Position. Il retire la position de ce que vous envoyez et laisse la photo de votre photothèque inchangée.",
        "Réglages > Confidentialité et sécurité > Service de localisation > Appareil photo > Jamais empêche les nouvelles photos d'être géolocalisées, mais ne change rien aux photos que vous avez déjà.",
        "De nombreux réseaux sociaux masquent la position à la publication, mais l'e-mail, AirDrop, les liens cloud, les petites annonces et les photos envoyées comme fichiers peuvent transmettre les données d'origine. Ne comptez pas sur l'autre partie pour les retirer.",
        "DiskMop pour iPhone (1.1.10 et suivantes) signale lesquelles des photos choisies ont une position, retire la position et les informations sur le téléphone et l'appareil des copies, puis ouvre la feuille de partage. Vos originaux ne sont jamais modifiés. C'est gratuit et cela fonctionne pour les photos et les vidéos.",
        "Supprimer les métadonnées ne cache pas ce qui est visible : visages, panneaux, numéros de rue et plaques restent dans l'image.",
      ],
      dataTable: {
        caption: "Moyens de supprimer la position des photos iPhone",
        columns: [
          "Méthode",
          "Modifie votre original ?",
          "Plusieurs photos à la fois",
          "Indique quelles photos ont une position",
        ],
        rows: [
          [
            "Feuille de partage > Options > Position désactivée",
            "Non, seulement la copie envoyée",
            "Oui, en sélectionner plusieurs",
            "Non",
          ],
          [
            "Photos > Infos > Ajuster > Aucune position",
            "Oui, définitivement dans votre photothèque",
            "Oui, depuis le menu d'une sélection (iOS 15 et suivants)",
            "Non",
          ],
          [
            "Service de localisation > Appareil photo > Jamais",
            "Non, concerne seulement les futures photos",
            "Sans objet",
            "Non",
          ],
          [
            "DiskMop > Outils > Supprimer position et infos",
            "Non, travaille sur des copies",
            "Oui",
            "Oui, une épingle rouge marque chacune",
          ],
        ],
      },
      howTo: {
        name: "Supprimer la position des photos iPhone avant de les partager",
        totalTime: "PT3M",
        steps: [
          {
            name: "Voir ce qu'une photo contient",
            text: "Ouvrez une photo dans Photos et balayez vers le haut, ou touchez le bouton d'informations. Vous voyez l'appareil et l'objectif, les détails du fichier et, si la photo a une position, une petite carte. Ce sont les mêmes informations que peut lire quiconque reçoit le fichier d'origine.",
          },
          {
            name: "Utiliser l'interrupteur intégré pour un partage rapide",
            text: "Sélectionnez les photos, touchez Partager, puis Options en haut de la feuille de partage et désactivez Position avant d'envoyer. La copie de votre photothèque garde sa position.",
          },
          {
            name: "Ne plus géolocaliser les futures photos (facultatif)",
            text: "Allez dans Réglages > Confidentialité et sécurité > Service de localisation > Appareil photo et choisissez Jamais. Les nouvelles photos n'auront pas de position, celles déjà prises restent inchangées, et l'app Photos ne pourra plus regrouper les nouvelles photos par lieu.",
          },
          {
            name: "Créer des copies propres en lot avec DiskMop",
            text: "Dans DiskMop pour iPhone, ouvrez Outils > Supprimer position et infos et choisissez des photos et des vidéos. Une épingle rouge marque chaque élément ayant une position. Laissez Position et Téléphone, appareil et légendes activés, décidez si la date et l'heure doivent aussi être retirées, puis touchez Nettoyer et partager.",
          },
          {
            name: "Vérifier le résultat et partager",
            text: "Un récapitulatif en haut indique combien d'éléments ont été nettoyés et combien ont perdu leur position, puis la feuille de partage iOS s'ouvre avec les copies propres. Ensuite, vous pouvez partager à nouveau, enregistrer les copies dans Photos à côté de vos originaux, ou copier une seule photo.",
          },
        ],
      },
      sections: [
        {
          title: "Ce que cache une photo ou une vidéo",
          content: [
            "Chaque photo prise par votre iPhone est enregistrée avec des informations supplémentaires à côté de l'image. La plus sensible est la position : quand l'appareil photo est autorisé à utiliser le service de localisation, les coordonnées GPS de l'endroit où vous vous teniez sont écrites dans le fichier. S'y ajoutent la date et l'heure, le modèle du téléphone et de l'appareil, les réglages de l'objectif, la version du logiciel et toute légende ou commentaire ajouté plus tard dans Photos. Les vidéos portent le même type d'informations.",
            "On ne voit rien de tout cela en regardant l'image, d'où l'oubli facile. Ce ne sont que quelques lignes de texte, mais elles suffisent à montrer qu'une photo a été prise à une adresse précise, un soir précis.",
          ],
        },
        {
          title: "Quand cela compte vraiment",
          content: [
            "La plupart du temps, il ne se passe rien : vos amis savent déjà où vous étiez. Cela compte quand vous envoyez une photo à quelqu'un que vous ne connaissez pas, comme un acheteur, un propriétaire, un forum ou un support technique, et que la photo a été prise chez vous ou au travail. L'image d'un vélo à vendre prise dans le couloir peut désigner votre porte d'entrée.",
            "Les plateformes se comportent différemment. De nombreux réseaux sociaux retirent la position de l'image qu'ils affichent à la publication, mais cela dépend de la plateforme et peut changer. Les pièces jointes d'e-mail, AirDrop, les fichiers envoyés comme documents, les liens cloud et les petites annonces peuvent transmettre les données d'origine. Si la photo compte, supprimez vous-même les métadonnées avant qu'elle ne quitte votre téléphone.",
          ],
        },
        {
          title: "Ce qu'iOS offre déjà (et où cela s'arrête)",
          content: [
            "Trois outils intégrés aident. D'abord, le bouton Options en haut de la feuille de partage de Photos a un interrupteur Position, pour partager sans elle ; la copie de votre photothèque n'est pas touchée. Ensuite, dans le panneau d'informations d'une photo, Ajuster à côté de la position permet de choisir Aucune position, ce qui la retire définitivement de la photo dans votre photothèque ; les versions récentes d'iOS le proposent aussi pour une sélection de photos depuis le menu. Enfin, Réglages > Confidentialité et sécurité > Service de localisation > Appareil photo > Jamais empêche les nouvelles photos de recevoir une position.",
            "Ce que ces outils ne donnent pas, c'est une vue d'ensemble. Rien ne vous dit lesquelles des quarante photos choisies ont réellement une position, l'interrupteur Options se règle à chaque partage, et les informations sur l'appareil ne s'inspectent pas élément par élément dans la feuille de partage. C'est la lacune que comble un outil dédié.",
          ],
        },
        {
          title: "Des copies propres en lot avec DiskMop pour iPhone",
          content: [
            "DiskMop pour iPhone 1.1.10 ajoute Supprimer position et infos à l'onglet Outils. Vous choisissez des photos et des vidéos dans votre photothèque ; l'écran indique combien vous en avez choisi et combien ont une position, avec une épingle rouge sur chacune. Position et Téléphone, appareil et légendes (modèle, logiciel, numéros de série et commentaires) sont activés. Date et heure de prise de vue est désactivé par défaut : sans elle, l'ordre des photos peut se brouiller chez le destinataire, mais vous pouvez l'activer.",
            "Touchez Nettoyer et partager : DiskMop écrit des copies propres, puis ouvre la feuille de partage iOS. Vos originaux ne changent jamais et rien n'est ajouté à votre photothèque tant que vous ne le demandez pas. Les photos HEIC, JPEG et PNG ainsi que les vidéos sont prises en charge ; une vidéo n'est pas réencodée. Si un original n'existe que dans iCloud, DiskMop demande avant de le télécharger. Les fichiers RAW sont ignorés et listés, et pour une Live Photo, seule l'image fixe est partagée.",
            "Après le partage, les raccourcis sous le résultat permettent de partager à nouveau, d'enregistrer les copies propres dans Photos à côté des originaux ou de copier une seule photo pour la coller ailleurs. L'outil est gratuit : sans limite quotidienne ni abonnement, il fonctionne entièrement sur l'iPhone, sans compte et sans rien téléverser.",
          ],
        },
        {
          title: "Ce qui reste visible",
          content: [
            "Supprimer les métadonnées retire seulement ce qui est caché dans le fichier. Les visages, panneaux de rue, numéros, noms de magasins et plaques d'immatriculation dans l'image elle-même restent tels quels, comme tout ce qu'une personne reconnaît en regardant. Vérifiez la photo avant de l'envoyer et recadrez-la ou floutez-la si l'image elle-même révèle quelque chose.",
            "Si vous préférez mettre certaines images à l'abri des regards plutôt que les nettoyer, notre guide pour [masquer des photos sur iPhone](/blog/hide-photos-iphone) compare l'album masqué à un coffre verrouillé. Si vous voulez aussi que votre photothèque retrouve les photos par lieu, laissez la position de l'appareil photo activée : [rechercher ses photos iPhone par contenu](/blog/search-photos-by-content-iphone) utilise la position d'une photo pour retrouver, par exemple, tout ce qui a été pris à Paris.",
          ],
        },
      ],
      faq: [
        {
          question:
            "L'interrupteur Options de Photos supprime-t-il la position de ma photo d'origine ?",
          answer:
            "Non. L'interrupteur Position de la feuille de partage ne change que ce que vous envoyez. La photo de votre photothèque garde sa position. Pour la retirer aussi de la copie de la photothèque, utilisez Ajuster > Aucune position dans le panneau d'informations de la photo.",
        },
        {
          question:
            "Les photos envoyées par messagerie ou réseaux sociaux gardent-elles leur position ?",
          answer:
            "Cela dépend de l'app, de sa version et de l'envoi de l'image comme photo ou comme fichier. Beaucoup d'apps retirent la position de l'image affichée, mais l'e-mail, AirDrop, les liens cloud et les fichiers envoyés comme documents peuvent conserver les données d'origine. Le plus sûr est de nettoyer la photo avant qu'elle ne quitte votre téléphone.",
        },
        {
          question: "DiskMop peut-il aussi supprimer la position des vidéos ?",
          answer:
            "Oui. Les vidéos sont traitées comme les photos : DiskMop écrit une copie propre sans réencoder la vidéo, et votre original reste intact. Une Live Photo est partagée uniquement comme image fixe.",
        },
        {
          question: "DiskMop téléverse-t-il mes photos pour les nettoyer ?",
          answer:
            "Non. Le nettoyage se fait sur votre iPhone. Il n'y a ni compte, ni SDK d'analyse, et rien ne quitte l'appareil. Seulement si un original est stocké dans iCloud et que vous êtes d'accord, l'iPhone le télécharge d'abord depuis votre propre iCloud.",
        },
        {
          question:
            "Supprimer la position et les infos est-il gratuit dans DiskMop ?",
          answer:
            "Oui. L'outil ne demande aucun abonnement et n'a pas de limite quotidienne. Le quota gratuit de dix suppressions par jour concerne uniquement la suppression de photos, pas le nettoyage de copies.",
        },
        {
          question: "Cela rend-il une photo anonyme ?",
          answer:
            "Non. Cela retire seulement les champs cachés. Les visages, panneaux, plaques et tout ce qui est visible dans l'image restent ; vérifiez donc aussi l'image avant de partager.",
        },
      ],
      verdict: [
        "Si vous partagez des photos avec des personnes que vous ne connaissez pas, considérez la position inscrite dans le fichier comme une partie de la photo. L'interrupteur Options de Photos est une solution rapide pour un partage, et désactiver la position de l'appareil photo évite le problème à l'avenir, mais aucun des deux ne vous montre quelles photos sont concernées.",
        "DiskMop pour iPhone le rend visible et le corrige en lot : il signale les photos géolocalisées, écrit des copies propres de photos et de vidéos et laisse vos originaux tranquilles. L'outil est gratuit, fonctionne sur le téléphone et demande la version 1.1.10 ou plus récente.",
      ],
      ctaText: "Obtenir DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo quitar la ubicación y los metadatos de las fotos del iPhone antes de compartirlas",
      metaDescription:
        "Toda foto del iPhone puede llevar coordenadas GPS, la fecha y el modelo del teléfono. Qué revela y cómo quitarlo de fotos y vídeos, en bloque o una a una.",
      subtitle:
        "Qué hay oculto en cada archivo, el interruptor integrado y copias limpias que dejan intactos tus originales",
      intro: [
        "Respuesta corta: las fotos y los vídeos hechos con un iPhone pueden llevar dentro del propio archivo el lugar donde se tomaron (coordenadas GPS), la fecha y la hora, el modelo del teléfono y de la cámara y la versión del software. Se llaman metadatos, o datos EXIF, y viajan con el archivo. Para compartir sin ellos, abre la hoja de compartir en Fotos, toca Opciones y desactiva Ubicación, o crea copias limpias de muchos archivos a la vez con DiskMop para iPhone (versión 1.1.10 y posteriores).",
        "Esta guía explica qué se guarda y quién puede leerlo, tres formas de quitarlo en el iPhone y dónde se queda corta cada una, y lo que quitar los metadatos NO cambia: las caras, las señales de la calle y las matrículas que se ven en la propia imagen.",
      ],
      keyTakeaways: [
        "Las fotos y los vídeos del iPhone guardan en el archivo dónde se tomaron, la fecha y la hora, el modelo del dispositivo y la versión del software; quien reciba el archivo original puede leerlo.",
        "La hoja de compartir de Fotos tiene un botón Opciones con un interruptor Ubicación. Quita la ubicación de lo que envías y deja la foto de tu fototeca sin cambios.",
        "Ajustes > Privacidad y seguridad > Localización > Cámara > Nunca evita que las fotos nuevas se etiqueten con un lugar, pero no cambia nada de las fotos que ya tienes.",
        "Muchas redes sociales ocultan la ubicación al publicar, pero el correo, AirDrop, los enlaces en la nube, los anuncios clasificados y las fotos enviadas como archivo pueden transmitir los datos originales. No confíes en que la otra parte los quite.",
        "DiskMop para iPhone (1.1.10 y posteriores) marca cuáles de las fotos que elijas tienen ubicación, quita la ubicación y la información del teléfono y la cámara de las copias y abre la hoja de compartir. Tus originales nunca cambian. Es gratis y funciona con fotos y vídeos.",
        "Quitar los metadatos no oculta lo que se ve: las caras, las señales, los números de portal y las matrículas siguen en la imagen.",
      ],
      dataTable: {
        caption: "Formas de quitar la ubicación de las fotos del iPhone",
        columns: [
          "Método",
          "¿Cambia tu original?",
          "Muchas fotos a la vez",
          "Muestra qué fotos tienen ubicación",
        ],
        rows: [
          [
            "Hoja de compartir > Opciones > Ubicación desactivada",
            "No, solo la copia que envías",
            "Sí, selecciona varias",
            "No",
          ],
          [
            "Fotos > Información > Ajustar > Sin ubicación",
            "Sí, de forma permanente en tu fototeca",
            "Sí, desde el menú de una selección (iOS 15 y posteriores)",
            "No",
          ],
          [
            "Localización > Cámara > Nunca",
            "No, solo afecta a las fotos futuras",
            "No aplicable",
            "No",
          ],
          [
            "DiskMop > Herramientas > Quitar ubicación e info",
            "No, trabaja con copias",
            "Sí",
            "Sí, un pin rojo marca cada una",
          ],
        ],
      },
      howTo: {
        name: "Quitar la ubicación de las fotos del iPhone antes de compartirlas",
        totalTime: "PT3M",
        steps: [
          {
            name: "Ver qué lleva una foto",
            text: "Abre una foto en Fotos y desliza hacia arriba o toca el botón de información. Verás la cámara y el objetivo, los detalles del archivo y, si la foto tiene ubicación, un pequeño mapa. Es la misma información que puede leer quien reciba el archivo original.",
          },
          {
            name: "Usar el interruptor integrado para compartir rápido",
            text: "Selecciona las fotos, toca Compartir, luego Opciones en la parte superior de la hoja de compartir y desactiva Ubicación antes de enviar. La copia de tu fototeca conserva su ubicación.",
          },
          {
            name: "Dejar de etiquetar las fotos futuras (opcional)",
            text: "Ve a Ajustes > Privacidad y seguridad > Localización > Cámara y elige Nunca. Las fotos nuevas no tendrán ubicación, las ya hechas no cambian y la app Fotos ya no podrá agrupar las nuevas por lugar.",
          },
          {
            name: "Crear copias limpias en bloque con DiskMop",
            text: "En DiskMop para iPhone abre Herramientas > Quitar ubicación e info y elige fotos y vídeos. Un pin rojo marca cada elemento con ubicación. Deja activados Ubicación y Teléfono, cámara y descripciones, decide si también quieres quitar la fecha y la hora y toca Limpiar y compartir.",
          },
          {
            name: "Comprobar el resultado y compartir",
            text: "Un resumen en la parte superior indica cuántos elementos se limpiaron y a cuántos se les quitó la ubicación; después se abre la hoja de compartir de iOS con las copias limpias. Luego puedes compartir de nuevo, guardar las copias en Fotos junto a tus originales o copiar una sola foto.",
          },
        ],
      },
      sections: [
        {
          title: "Qué hay oculto dentro de una foto o un vídeo",
          content: [
            "Cada foto que hace tu iPhone se guarda con información extra junto a la imagen. Lo más sensible es la ubicación: cuando la cámara tiene permiso para usar la localización, las coordenadas GPS del lugar donde estabas se escriben en el archivo. Con ellas van la fecha y la hora, el modelo del teléfono y de la cámara, los ajustes del objetivo, la versión del software y cualquier descripción o comentario que añadas después en Fotos. Los vídeos llevan el mismo tipo de información.",
            "No lo ves al mirar la imagen, y por eso es fácil olvidarlo. Son apenas unas líneas de texto, pero bastan para demostrar que una foto se tomó en una dirección concreta una tarde concreta.",
          ],
        },
        {
          title: "Cuándo importa de verdad",
          content: [
            "La mayoría de las veces no pasa nada: tus amigos ya saben dónde estabas. Importa cuando envías una foto a alguien que no conoces, como un comprador, un casero, un foro o un servicio de soporte, y la foto se hizo en casa o en el trabajo. La imagen de una bici en venta tomada en el pasillo puede señalar tu puerta.",
            "Las plataformas se comportan de forma distinta. Muchas redes sociales quitan la ubicación de la imagen que muestran al publicar, pero depende de la plataforma y puede cambiar. Los adjuntos de correo, AirDrop, los archivos enviados como documento, los enlaces en la nube y los anuncios clasificados pueden transmitir los datos originales. Si la foto importa, quita tú mismo los metadatos antes de que salga de tu teléfono.",
          ],
        },
        {
          title: "Qué ofrece ya iOS (y dónde se queda corto)",
          content: [
            "Tres herramientas integradas ayudan. Primera: el botón Opciones, en la parte superior de la hoja de compartir de Fotos, tiene un interruptor Ubicación para compartir sin ella; la copia de tu fototeca no se toca. Segunda: en el panel de información de una foto, Ajustar junto a la ubicación permite elegir Sin ubicación, lo que la quita de forma definitiva de la foto en tu fototeca; las versiones recientes de iOS lo ofrecen también para una selección de fotos desde el menú. Tercera: Ajustes > Privacidad y seguridad > Localización > Cámara > Nunca evita que las fotos nuevas reciban ubicación.",
            "Lo que estas herramientas no dan es una visión de conjunto. Nada te dice cuáles de las cuarenta fotos que elegiste tienen realmente ubicación, el interruptor Opciones se ajusta en cada envío y la información del dispositivo no se puede revisar elemento a elemento desde la hoja de compartir. Ese es el hueco que cubre una herramienta específica.",
          ],
        },
        {
          title: "Copias limpias en bloque con DiskMop para iPhone",
          content: [
            "DiskMop para iPhone 1.1.10 añade Quitar ubicación e info a la pestaña Herramientas. Eliges fotos y vídeos de tu fototeca; la pantalla muestra cuántos elegiste y cuántos tienen ubicación, con un pin rojo en cada uno. Ubicación y Teléfono, cámara y descripciones (modelo, software, números de serie y comentarios) están activados. Fecha y hora de captura viene desactivada por defecto: sin ella, el orden de las fotos puede mezclarse para quien las recibe, pero puedes activarla.",
            "Toca Limpiar y compartir y DiskMop escribe copias limpias y después abre la hoja de compartir de iOS. Tus originales nunca cambian y no se añade nada a tu fototeca si no lo pides. Se admiten fotos HEIC, JPEG y PNG y vídeos; un vídeo no se recodifica. Si un original solo está en iCloud, DiskMop pregunta antes de descargarlo. Los archivos RAW se omiten y se enumeran, y de una Live Photo solo se comparte la imagen fija.",
            "Después de compartir, los accesos directos bajo el resultado permiten compartir de nuevo, guardar las copias limpias en Fotos junto a los originales o copiar una sola foto para pegarla en otro sitio. La herramienta es gratis: sin límite diario ni suscripción, funciona por completo en el iPhone, sin cuenta y sin subir nada.",
          ],
        },
        {
          title: "Qué sigue siendo visible",
          content: [
            "Quitar los metadatos solo elimina lo que está oculto en el archivo. Las caras, las señales de la calle, los números de portal, los nombres de tiendas y las matrículas de la propia imagen se quedan tal cual, igual que todo lo que una persona reconoce al mirar. Revisa la foto antes de enviarla y recórtala o difumínala si la propia imagen delata algo.",
            "Si prefieres apartar de la vista algunas imágenes en lugar de limpiarlas, nuestra guía para [ocultar fotos en el iPhone](/blog/hide-photos-iphone) compara el álbum Ocultas con una caja fuerte con bloqueo. Si además quieres que tu fototeca encuentre fotos por lugar, deja activada la ubicación de la cámara: [buscar fotos del iPhone por su contenido](/blog/search-photos-by-content-iphone) usa la ubicación de una foto para encontrar, por ejemplo, todo lo hecho en París.",
          ],
        },
      ],
      faq: [
        {
          question:
            "¿El interruptor Opciones de Fotos quita la ubicación de mi foto original?",
          answer:
            "No. El interruptor Ubicación de la hoja de compartir solo cambia lo que envías. La foto de tu fototeca conserva su ubicación. Para quitarla también de la copia de la fototeca, usa Ajustar > Sin ubicación en el panel de información de la foto.",
        },
        {
          question:
            "¿Las fotos enviadas por mensajería y redes sociales conservan su ubicación?",
          answer:
            "Depende de la app, de su versión y de si envías la imagen como foto o como archivo. Muchas apps quitan la ubicación de la imagen que muestran, pero el correo, AirDrop, los enlaces en la nube y los archivos enviados como documento pueden conservar los datos originales. Lo más seguro es limpiar la foto antes de que salga de tu teléfono.",
        },
        {
          question: "¿DiskMop también puede quitar la ubicación de los vídeos?",
          answer:
            "Sí. Los vídeos se tratan como las fotos: DiskMop escribe una copia limpia sin recodificar el vídeo y tu original queda intacto. Una Live Photo se comparte solo como imagen fija.",
        },
        {
          question: "¿DiskMop sube mis fotos para limpiarlas?",
          answer:
            "No. La limpieza ocurre en tu iPhone. No hay cuenta ni SDK de analítica y nada sale del dispositivo. Solo si un original está en iCloud y lo aceptas, el iPhone lo descarga antes desde tu propio iCloud.",
        },
        {
          question: "¿Quitar la ubicación y la info es gratis en DiskMop?",
          answer:
            "Sí. La herramienta no necesita suscripción ni tiene límite diario. El cupo gratuito de diez borrados al día solo se aplica al borrado de fotos, no a la limpieza de copias.",
        },
        {
          question: "¿Esto hace anónima una foto?",
          answer:
            "No. Solo quita los campos ocultos. Las caras, las señales, las matrículas y todo lo visible en la imagen se quedan, así que revisa también la propia imagen antes de compartir.",
        },
      ],
      verdict: [
        "Si compartes fotos con personas que no conoces, trata la ubicación guardada en el archivo como parte de la foto. El interruptor Opciones de Fotos es una solución rápida para un envío, y desactivar la ubicación de la cámara evita el problema a partir de ahora, pero ninguno de los dos te muestra qué fotos están afectadas.",
        "DiskMop para iPhone lo hace visible y lo arregla en bloque: marca las fotos con ubicación, escribe copias limpias de fotos y vídeos y deja tus originales en paz. La herramienta es gratis, funciona en el teléfono y requiere la versión 1.1.10 o posterior.",
      ],
      ctaText: "Descarga DiskMop para iPhone en la App Store",
    },
    it: {
      title:
        "Come rimuovere posizione e metadati dalle foto dell'iPhone prima di condividerle",
      metaDescription:
        "Ogni foto dell'iPhone può contenere coordinate GPS, data e modello del telefono. Cosa rivela e come toglierlo da foto e video, in blocco o una per una.",
      subtitle:
        "Cosa c'è nascosto in ogni file, l'interruttore integrato e copie pulite che lasciano intatti i tuoi originali",
      intro: [
        "Risposta breve: le foto e i video scattati con un iPhone possono contenere, nel file stesso, il luogo dello scatto (coordinate GPS), data e ora, il modello del telefono e della fotocamera e la versione del software. Si chiamano metadati, o dati EXIF, e viaggiano con il file. Per condividere senza, apri il foglio di condivisione in Foto, tocca Opzioni e disattiva Posizione, oppure crea in un colpo solo copie pulite di molti file con DiskMop per iPhone (versione 1.1.10 e successive).",
        "Questa guida mostra cosa viene salvato e chi può leggerlo, tre modi per rimuoverlo su iPhone e dove ciascuno è limitato, e cosa la rimozione dei metadati NON cambia: i volti, i cartelli stradali e le targhe visibili nell'immagine stessa.",
      ],
      keyTakeaways: [
        "Le foto e i video dell'iPhone salvano nel file dove sono stati scattati, data e ora, il modello del dispositivo e la versione del software; chi riceve il file originale può leggerli.",
        "Il foglio di condivisione di Foto ha un pulsante Opzioni con un interruttore Posizione. Toglie la posizione da ciò che invii e lascia la foto della tua libreria invariata.",
        "Impostazioni > Privacy e sicurezza > Localizzazione > Fotocamera > Mai impedisce che le nuove foto vengano etichettate con un luogo, ma non cambia nulla per quelle che hai già.",
        "Molti social network nascondono la posizione alla pubblicazione, ma e-mail, AirDrop, link cloud, annunci e foto inviate come file possono trasmettere i dati originali. Non contare sul fatto che l'altra parte li rimuova.",
        "DiskMop per iPhone (1.1.10 e successive) segnala quali foto scelte hanno una posizione, rimuove posizione e informazioni su telefono e fotocamera dalle copie e apre il foglio di condivisione. I tuoi originali non cambiano mai. È gratuito e funziona con foto e video.",
        "Rimuovere i metadati non nasconde ciò che si vede: volti, cartelli, numeri civici e targhe restano nell'immagine.",
      ],
      dataTable: {
        caption: "Modi per rimuovere la posizione dalle foto dell'iPhone",
        columns: [
          "Metodo",
          "Modifica l'originale?",
          "Molte foto insieme",
          "Mostra quali foto hanno una posizione",
        ],
        rows: [
          [
            "Foglio di condivisione > Opzioni > Posizione disattivata",
            "No, solo la copia che invii",
            "Sì, selezionane diverse",
            "No",
          ],
          [
            "Foto > Info > Regola > Nessuna posizione",
            "Sì, in modo permanente nella libreria",
            "Sì, dal menu di una selezione (iOS 15 e successivi)",
            "No",
          ],
          [
            "Localizzazione > Fotocamera > Mai",
            "No, riguarda solo le foto future",
            "Non applicabile",
            "No",
          ],
          [
            "DiskMop > Strumenti > Rimuovi posizione e info",
            "No, lavora su copie",
            "Sì",
            "Sì, un pin rosso segna ciascuna",
          ],
        ],
      },
      howTo: {
        name: "Rimuovere la posizione dalle foto dell'iPhone prima di condividerle",
        totalTime: "PT3M",
        steps: [
          {
            name: "Vedere cosa contiene una foto",
            text: "Apri una foto in Foto e scorri verso l'alto, oppure tocca il pulsante info. Vedi fotocamera e obiettivo, i dettagli del file e, se la foto ha una posizione, una piccola mappa. È la stessa informazione che può leggere chiunque riceva il file originale.",
          },
          {
            name: "Usare l'interruttore integrato per una condivisione rapida",
            text: "Seleziona le foto, tocca Condividi, poi Opzioni in alto nel foglio di condivisione e disattiva Posizione prima di inviare. La copia nella tua libreria mantiene la posizione.",
          },
          {
            name: "Smettere di etichettare le foto future (facoltativo)",
            text: "Vai in Impostazioni > Privacy e sicurezza > Localizzazione > Fotocamera e scegli Mai. Le nuove foto non avranno posizione, quelle già scattate non cambiano e l'app Foto non potrà più raggruppare le nuove per luogo.",
          },
          {
            name: "Creare copie pulite in blocco con DiskMop",
            text: "In DiskMop per iPhone apri Strumenti > Rimuovi posizione e info e scegli foto e video. Un pin rosso segna ogni elemento con una posizione. Lascia attivi Posizione e Telefono, fotocamera e didascalie, decidi se rimuovere anche data e ora e tocca Pulisci e condividi.",
          },
          {
            name: "Controllare il risultato e condividere",
            text: "Un riepilogo in alto indica quanti elementi sono stati puliti e a quanti è stata tolta la posizione, poi si apre il foglio di condivisione di iOS con le copie pulite. Dopo puoi condividere di nuovo, salvare le copie in Foto accanto agli originali o copiare una sola foto.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa c'è nascosto in una foto o in un video",
          content: [
            "Ogni foto scattata dal tuo iPhone viene salvata con informazioni extra accanto all'immagine. La più delicata è la posizione: quando la fotocamera può usare la localizzazione, le coordinate GPS del punto in cui ti trovavi vengono scritte nel file. Con esse vanno data e ora, il modello del telefono e della fotocamera, le impostazioni dell'obiettivo, la versione del software e qualsiasi didascalia o commento aggiunto in seguito in Foto. I video portano lo stesso tipo di informazioni.",
            "Guardando l'immagine non le vedi, ed è facile dimenticarle. Sono poche righe di testo, ma bastano per dimostrare che una foto è stata scattata a un indirizzo preciso in una sera precisa.",
          ],
        },
        {
          title: "Quando conta davvero",
          content: [
            "Il più delle volte non succede nulla: gli amici sanno già dove eri. Conta quando invii una foto a qualcuno che non conosci, come un acquirente, un padrone di casa, un forum o un servizio di assistenza, e la foto è stata scattata a casa o al lavoro. L'immagine di una bici in vendita scattata nel corridoio può indicare la tua porta di casa.",
            "Le piattaforme si comportano in modo diverso. Molti social network tolgono la posizione dall'immagine che mostrano alla pubblicazione, ma dipende dalla piattaforma e può cambiare. Gli allegati e-mail, AirDrop, i file inviati come documento, i link cloud e gli annunci possono trasmettere i dati originali. Se la foto è importante, rimuovi tu i metadati prima che lasci il telefono.",
          ],
        },
        {
          title: "Cosa offre già iOS (e dove si ferma)",
          content: [
            "Tre strumenti integrati aiutano. Primo: il pulsante Opzioni in alto nel foglio di condivisione di Foto ha un interruttore Posizione per condividere senza; la copia nella libreria non viene toccata. Secondo: nel pannello info di una foto, Regola accanto alla posizione permette di scegliere Nessuna posizione, che la rimuove definitivamente dalla foto nella libreria; le versioni recenti di iOS lo offrono dal menu anche per una selezione di foto. Terzo: Impostazioni > Privacy e sicurezza > Localizzazione > Fotocamera > Mai impedisce che le nuove foto ricevano una posizione.",
            "Ciò che questi strumenti non danno è una visione d'insieme. Niente ti dice quali delle quaranta foto scelte hanno davvero una posizione, l'interruttore Opzioni si imposta a ogni condivisione e le informazioni sul dispositivo non si possono ispezionare elemento per elemento dal foglio di condivisione. È il vuoto che colma uno strumento dedicato.",
          ],
        },
        {
          title: "Copie pulite in blocco con DiskMop per iPhone",
          content: [
            "DiskMop per iPhone 1.1.10 aggiunge Rimuovi posizione e info alla scheda Strumenti. Scegli foto e video dalla libreria; la schermata mostra quanti ne hai scelti e quanti hanno una posizione, con un pin rosso su ciascuno. Posizione e Telefono, fotocamera e didascalie (modello, software, numeri di serie e commenti) sono attivi. Data e ora dello scatto è disattivata per impostazione predefinita: senza, l'ordine delle foto può confondersi per chi le riceve, ma puoi attivarla.",
            "Tocca Pulisci e condividi e DiskMop scrive copie pulite, poi apre il foglio di condivisione di iOS. I tuoi originali non cambiano mai e nulla viene aggiunto alla libreria se non lo chiedi. Sono supportati foto HEIC, JPEG e PNG e video; un video non viene ricodificato. Se un originale si trova solo in iCloud, DiskMop chiede prima di scaricarlo. I file RAW vengono saltati ed elencati, e di una Live Photo si condivide solo l'immagine fissa.",
            "Dopo la condivisione, le scorciatoie sotto il risultato permettono di condividere di nuovo, salvare le copie pulite in Foto accanto agli originali o copiare una sola foto da incollare altrove. Lo strumento è gratuito: senza limite giornaliero né abbonamento, funziona interamente sull'iPhone, senza account e senza caricare nulla.",
          ],
        },
        {
          title: "Cosa resta visibile",
          content: [
            "Rimuovere i metadati elimina solo ciò che è nascosto nel file. I volti, i cartelli stradali, i numeri civici, le insegne dei negozi e le targhe nell'immagine stessa restano com'erano, come tutto ciò che una persona riconosce guardando. Controlla la foto prima di inviarla e ritagliala o sfocala se l'immagine stessa rivela qualcosa.",
            "Se preferisci togliere dalla vista alcune immagini invece di ripulirle, la nostra guida per [nascondere le foto su iPhone](/blog/hide-photos-iphone) confronta l'album Nascosti con una cassaforte bloccata. Se vuoi anche che la libreria trovi le foto per luogo, lascia attiva la posizione della fotocamera: [cercare le foto dell'iPhone per contenuto](/blog/search-photos-by-content-iphone) usa la posizione di una foto per trovare, ad esempio, tutto ciò che è stato scattato a Parigi.",
          ],
        },
      ],
      faq: [
        {
          question:
            "L'interruttore Opzioni di Foto toglie la posizione dalla mia foto originale?",
          answer:
            "No. L'interruttore Posizione nel foglio di condivisione cambia solo ciò che invii. La foto nella tua libreria mantiene la posizione. Per toglierla anche dalla copia in libreria, usa Regola > Nessuna posizione nel pannello info della foto.",
        },
        {
          question:
            "Le foto inviate tramite app di messaggistica e social network mantengono la posizione?",
          answer:
            "Dipende dall'app, dalla sua versione e dal fatto che tu invii l'immagine come foto o come file. Molte app tolgono la posizione dall'immagine mostrata, ma e-mail, AirDrop, link cloud e file inviati come documento possono conservare i dati originali. La via più sicura è pulire la foto prima che lasci il telefono.",
        },
        {
          question: "DiskMop può rimuovere la posizione anche dai video?",
          answer:
            "Sì. I video sono trattati come le foto: DiskMop scrive una copia pulita senza ricodificare il video e l'originale resta intatto. Una Live Photo viene condivisa solo come immagine fissa.",
        },
        {
          question: "DiskMop carica le mie foto per ripulirle?",
          answer:
            "No. La pulizia avviene sul tuo iPhone. Non c'è account, non c'è SDK di analisi e nulla lascia il dispositivo. Solo se un originale è in iCloud e tu acconsenti, l'iPhone lo scarica prima dal tuo iCloud.",
        },
        {
          question: "Rimuovere posizione e info è gratuito in DiskMop?",
          answer:
            "Sì. Lo strumento non richiede abbonamento e non ha limite giornaliero. La quota gratuita di dieci eliminazioni al giorno vale solo per l'eliminazione di foto, non per la pulizia delle copie.",
        },
        {
          question: "Questo rende anonima una foto?",
          answer:
            "No. Rimuove solo i campi nascosti. Volti, cartelli, targhe e tutto ciò che è visibile nell'immagine restano, quindi controlla anche l'immagine prima di condividere.",
        },
      ],
      verdict: [
        "Se condividi foto con persone che non conosci, considera la posizione nel file come parte della foto. L'interruttore Opzioni di Foto è una soluzione rapida per una singola condivisione, e disattivare la posizione della fotocamera previene il problema in futuro, ma nessuno dei due ti mostra quali foto sono coinvolte.",
        "DiskMop per iPhone lo rende visibile e lo risolve in blocco: segna le foto con una posizione, scrive copie pulite di foto e video e lascia in pace i tuoi originali. Lo strumento è gratuito, funziona sul telefono e richiede la versione 1.1.10 o successiva.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como remover a localização e os metadados das fotos do iPhone antes de compartilhar",
      metaDescription:
        "Toda foto do iPhone pode levar coordenadas GPS, a data e o modelo do celular. O que isso revela e como remover de fotos e vídeos, em lote ou uma a uma.",
      subtitle:
        "O que está escondido em cada arquivo, o botão embutido e cópias limpas que deixam seus originais intactos",
      intro: [
        "Resposta curta: fotos e vídeos feitos no iPhone podem levar, dentro do próprio arquivo, o local onde foram feitos (coordenadas GPS), a data e a hora, o modelo do celular e da câmera e a versão do software. Isso se chama metadados, ou dados EXIF, e viaja com o arquivo. Para compartilhar sem eles, abra a folha de compartilhamento no app Fotos, toque em Opções e desative Local, ou crie cópias limpas de muitos arquivos de uma vez com o DiskMop para iPhone (versão 1.1.10 e posteriores).",
        "Este guia mostra o que é guardado e quem pode ler, três jeitos de remover no iPhone e onde cada um fica a desejar, e o que remover os metadados NÃO muda: os rostos, as placas de rua e as placas de carro que aparecem na própria imagem.",
      ],
      keyTakeaways: [
        "Fotos e vídeos do iPhone guardam no arquivo onde foram feitos, a data e a hora, o modelo do aparelho e a versão do software; quem receber o arquivo original consegue ler.",
        "A folha de compartilhamento do app Fotos tem um botão Opções com um botão Local. Ele tira a localização do que você envia e deixa a foto da sua fototeca sem alteração.",
        "Ajustes > Privacidade e Segurança > Serviços de Localização > Câmera > Nunca impede que as fotos novas recebam um local, mas não muda nada nas fotos que você já tem.",
        "Muitas redes sociais escondem a localização ao publicar, mas e-mail, AirDrop, links na nuvem, anúncios classificados e fotos enviadas como arquivo podem repassar os dados originais. Não conte com o outro lado para removê-los.",
        "O DiskMop para iPhone (1.1.10 e posteriores) marca quais das fotos escolhidas têm localização, remove a localização e as informações do celular e da câmera das cópias e abre a folha de compartilhamento. Seus originais nunca mudam. É grátis e funciona com fotos e vídeos.",
        "Remover os metadados não esconde o que está visível: rostos, placas, números de casas e placas de carro continuam na imagem.",
      ],
      dataTable: {
        caption: "Jeitos de remover a localização de fotos do iPhone",
        columns: [
          "Método",
          "Altera o original?",
          "Várias fotos de uma vez",
          "Mostra quais fotos têm localização",
        ],
        rows: [
          [
            "Folha de compartilhamento > Opções > Local desativado",
            "Não, só a cópia que você envia",
            "Sim, selecione várias",
            "Não",
          ],
          [
            "Fotos > Info > Ajustar > Sem localização",
            "Sim, de forma permanente na fototeca",
            "Sim, pelo menu de uma seleção (iOS 15 e posteriores)",
            "Não",
          ],
          [
            "Serviços de Localização > Câmera > Nunca",
            "Não, afeta só as fotos futuras",
            "Não se aplica",
            "Não",
          ],
          [
            "DiskMop > Ferramentas > Remover local e infos",
            "Não, trabalha com cópias",
            "Sim",
            "Sim, um pino vermelho marca cada uma",
          ],
        ],
      },
      howTo: {
        name: "Remover a localização das fotos do iPhone antes de compartilhar",
        totalTime: "PT3M",
        steps: [
          {
            name: "Ver o que uma foto carrega",
            text: "Abra uma foto no app Fotos e deslize para cima ou toque no botão de informações. Você verá a câmera e a lente, os detalhes do arquivo e, se a foto tem localização, um mapa pequeno. É a mesma informação que quem receber o arquivo original consegue ler.",
          },
          {
            name: "Usar o botão embutido para um envio rápido",
            text: "Selecione as fotos, toque em Compartilhar, depois em Opções no topo da folha de compartilhamento e desative Local antes de enviar. A cópia da sua fototeca mantém a localização.",
          },
          {
            name: "Parar de marcar as fotos futuras (opcional)",
            text: "Vá em Ajustes > Privacidade e Segurança > Serviços de Localização > Câmera e escolha Nunca. As fotos novas ficam sem localização, as já tiradas não mudam e o app Fotos não consegue mais agrupar as novas por local.",
          },
          {
            name: "Criar cópias limpas em lote com o DiskMop",
            text: "No DiskMop para iPhone, abra Ferramentas > Remover local e infos e escolha fotos e vídeos. Um pino vermelho marca cada item com localização. Deixe Local e Celular, câmera e legendas ativados, decida se quer remover também a data e a hora e toque em Limpar e compartilhar.",
          },
          {
            name: "Conferir o resultado e compartilhar",
            text: "Um resumo no topo mostra quantos itens foram limpos e de quantos a localização foi removida, e então a folha de compartilhamento do iOS abre com as cópias limpas. Depois você pode compartilhar de novo, salvar as cópias em Fotos ao lado dos originais ou copiar uma única foto.",
          },
        ],
      },
      sections: [
        {
          title: "O que está escondido dentro de uma foto ou de um vídeo",
          content: [
            "Cada foto que o iPhone tira é salva com informações extras ao lado da imagem. A mais sensível é a localização: quando a câmera pode usar os Serviços de Localização, as coordenadas GPS de onde você estava são gravadas no arquivo. Junto vão a data e a hora, o modelo do celular e da câmera, os ajustes da lente, a versão do software e qualquer legenda ou comentário que você adicionar depois no app Fotos. Os vídeos levam o mesmo tipo de informação.",
            "Você não vê isso ao olhar a imagem, e por isso é fácil esquecer. São poucas linhas de texto, mas bastam para mostrar que uma foto foi tirada em um endereço específico numa noite específica.",
          ],
        },
        {
          title: "Quando isso realmente importa",
          content: [
            "Na maioria das vezes nada acontece: seus amigos já sabem onde você estava. Importa quando você manda uma foto para alguém que não conhece, como um comprador, um locador, um fórum ou o suporte, e a foto foi tirada em casa ou no trabalho. A imagem de uma bicicleta à venda tirada no corredor pode apontar para a sua porta.",
            "As plataformas se comportam de formas diferentes. Muitas redes sociais tiram a localização da imagem que mostram ao publicar, mas isso depende da plataforma e pode mudar. Anexos de e-mail, AirDrop, arquivos enviados como documento, links na nuvem e anúncios classificados podem repassar os dados originais. Se a foto importa, remova os metadados você mesmo antes de ela sair do celular.",
          ],
        },
        {
          title: "O que o iOS já oferece (e onde para)",
          content: [
            "Três ferramentas embutidas ajudam. Primeira: o botão Opções, no topo da folha de compartilhamento do app Fotos, tem um botão Local para compartilhar sem ela; a cópia da sua fototeca não é tocada. Segunda: no painel de informações de uma foto, Ajustar ao lado da localização permite escolher Sem localização, o que a remove de vez da foto na sua fototeca; as versões recentes do iOS oferecem isso também para uma seleção de fotos, pelo menu. Terceira: Ajustes > Privacidade e Segurança > Serviços de Localização > Câmera > Nunca impede que as fotos novas recebam localização.",
            "O que essas ferramentas não dão é uma visão geral. Nada diz quais das quarenta fotos escolhidas realmente têm localização, o botão Opções é ajustado a cada compartilhamento e as informações do aparelho não podem ser inspecionadas item a item na folha de compartilhamento. É a lacuna que uma ferramenta dedicada preenche.",
          ],
        },
        {
          title: "Cópias limpas em lote com o DiskMop para iPhone",
          content: [
            "O DiskMop para iPhone 1.1.10 adiciona Remover local e infos à aba Ferramentas. Você escolhe fotos e vídeos da fototeca; a tela mostra quantos escolheu e quantos têm localização, com um pino vermelho em cada um. Local e Celular, câmera e legendas (modelo, software, números de série e comentários) vêm ativados. Data e hora da captura vem desativada por padrão: sem ela, a ordem das fotos pode ficar confusa para quem as recebe, mas você pode ativar.",
            "Toque em Limpar e compartilhar e o DiskMop grava cópias limpas e depois abre a folha de compartilhamento do iOS. Seus originais nunca mudam e nada é adicionado à fototeca se você não pedir. Fotos HEIC, JPEG e PNG e vídeos são aceitos; o vídeo não é recodificado. Se um original está só no iCloud, o DiskMop pergunta antes de baixar. Arquivos RAW são ignorados e listados, e de uma Live Photo só a imagem estática é compartilhada.",
            "Depois de compartilhar, os atalhos abaixo do resultado permitem compartilhar de novo, salvar as cópias limpas em Fotos ao lado dos originais ou copiar uma única foto para colar em outro lugar. A ferramenta é grátis: sem limite diário nem assinatura, funciona inteiramente no iPhone, sem conta e sem enviar nada.",
          ],
        },
        {
          title: "O que continua visível",
          content: [
            "Remover os metadados tira só o que está escondido no arquivo. Rostos, placas de rua, números de casas, nomes de lojas e placas de carro na própria imagem ficam como estão, assim como tudo o que uma pessoa reconhece ao olhar. Confira a foto antes de enviar e corte ou desfoque se a própria imagem entregar algo.",
            "Se você prefere tirar algumas imagens de vista em vez de limpá-las, nosso guia para [ocultar fotos no iPhone](/blog/hide-photos-iphone) compara o álbum Ocultas com um cofre bloqueado. Se também quer que a fototeca encontre fotos por local, deixe a localização da câmera ativada: [buscar fotos do iPhone pelo conteúdo](/blog/search-photos-by-content-iphone) usa a localização de uma foto para achar, por exemplo, tudo o que foi feito em Paris.",
          ],
        },
      ],
      faq: [
        {
          question:
            "O botão Opções do app Fotos remove a localização da minha foto original?",
          answer:
            "Não. O botão Local na folha de compartilhamento muda só o que você envia. A foto da sua fototeca mantém a localização. Para removê-la também da cópia da fototeca, use Ajustar > Sem localização no painel de informações da foto.",
        },
        {
          question:
            "Fotos enviadas por aplicativos de mensagem e redes sociais mantêm a localização?",
          answer:
            "Depende do app, da versão e de você enviar a imagem como foto ou como arquivo. Muitos apps tiram a localização da imagem exibida, mas e-mail, AirDrop, links na nuvem e arquivos enviados como documento podem manter os dados originais. O mais seguro é limpar a foto antes de ela sair do celular.",
        },
        {
          question: "O DiskMop também remove a localização de vídeos?",
          answer:
            "Sim. Os vídeos são tratados como as fotos: o DiskMop grava uma cópia limpa sem recodificar o vídeo e o original fica intacto. Uma Live Photo é compartilhada só como imagem estática.",
        },
        {
          question: "O DiskMop envia minhas fotos para limpá-las?",
          answer:
            "Não. A limpeza acontece no seu iPhone. Não há conta nem SDK de análise e nada sai do aparelho. Só se um original está no iCloud e você concorda, o iPhone o baixa antes do seu próprio iCloud.",
        },
        {
          question: "Remover localização e infos é grátis no DiskMop?",
          answer:
            "Sim. A ferramenta não exige assinatura nem tem limite diário. A cota grátis de dez exclusões por dia vale só para apagar fotos, não para limpar cópias.",
        },
        {
          question: "Isso deixa a foto anônima?",
          answer:
            "Não. Remove apenas os campos escondidos. Rostos, placas, placas de carro e tudo o que está visível na imagem permanecem, então confira também a imagem antes de compartilhar.",
        },
      ],
      verdict: [
        "Se você compartilha fotos com pessoas que não conhece, trate a localização dentro do arquivo como parte da foto. O botão Opções do app Fotos é uma solução rápida para um envio, e desativar a localização da câmera evita o problema daqui para a frente, mas nenhum dos dois mostra quais fotos são afetadas.",
        "O DiskMop para iPhone torna isso visível e resolve em lote: marca as fotos com localização, grava cópias limpas de fotos e vídeos e deixa seus originais em paz. A ferramenta é grátis, funciona no celular e exige a versão 1.1.10 ou posterior.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title: "iPhone の写真から位置情報とメタデータを削除してから共有する方法",
      metaDescription:
        "iPhone の写真には GPS 座標、撮影日時、機種名が含まれることがあります。何がわかるのか、写真や動画から一括または 1 枚ずつ削除する方法を解説します。",
      subtitle:
        "ファイルの中に隠れているもの、標準のスイッチ、元の写真に手を加えないクリーンなコピー",
      intro: [
        "結論から言うと、iPhone で撮った写真や動画には、ファイルそのものの中に撮影場所（GPS 座標）、撮影日時、機種とカメラの名前、ソフトウェアのバージョンが入っていることがあります。これをメタデータ（EXIF データ）と呼び、ファイルと一緒に渡ってしまいます。これらなしで共有するには、「写真」の共有シートを開いて「オプション」をタップし「位置情報」をオフにするか、iPhone 版 DiskMop（バージョン 1.1.10 以降）で多数のファイルのクリーンなコピーを一度に作ります。",
        "このガイドでは、何が保存され誰が読めるのか、iPhone で削除する 3 つの方法とそれぞれの限界、そしてメタデータを削除しても変わらないもの、つまり写真そのものに写っている顔、道路標識、ナンバープレートについて説明します。",
      ],
      keyTakeaways: [
        "iPhone で撮った写真と動画は、撮影場所、日時、機種、ソフトウェアのバージョンをファイル内に保存しており、元のファイルを受け取った人は誰でも読めます。",
        "「写真」の共有シートには、「位置情報」スイッチのある「オプション」ボタンがあります。送る分から位置情報を外し、ライブラリ内の写真はそのままです。",
        "「設定」>「プライバシーとセキュリティ」>「位置情報サービス」>「カメラ」>「なし」にすると新しい写真に場所が付かなくなりますが、すでにある写真には何も起きません。",
        "多くの SNS は投稿時に位置情報を隠しますが、メール、AirDrop、クラウドのリンク、掲示板、ファイルとして送った写真では元のデータが渡ることがあります。相手側が消してくれるとは考えないでください。",
        "iPhone 版 DiskMop（1.1.10 以降）は、選んだ写真のうち位置情報を持つものに印を付け、コピーから位置情報と端末・カメラ情報を削除して共有シートを開きます。元の写真は一切変わりません。無料で、写真にも動画にも使えます。",
        "メタデータを消しても見えているものは隠れません。顔、看板、番地、ナンバープレートは写真に残ります。",
      ],
      dataTable: {
        caption: "iPhone の写真から位置情報を削除する方法",
        columns: [
          "方法",
          "元の写真は変わる？",
          "複数枚を一度に",
          "どの写真に位置情報があるか表示",
        ],
        rows: [
          [
            "共有シート >「オプション」>「位置情報」をオフ",
            "変わらない（送るコピーのみ）",
            "可能（複数選択）",
            "表示しない",
          ],
          [
            "「写真」>「情報」>「調整」>「位置情報なし」",
            "変わる（ライブラリ内で恒久的に）",
            "可能（選択のメニューから、iOS 15 以降）",
            "表示しない",
          ],
          [
            "位置情報サービス >「カメラ」>「なし」",
            "変わらない（今後の写真のみ）",
            "該当なし",
            "表示しない",
          ],
          [
            "DiskMop >「ツール」>「位置情報と詳細を削除」",
            "変わらない（コピーで処理）",
            "可能",
            "表示する（赤いピンで印）",
          ],
        ],
      },
      howTo: {
        name: "共有前に iPhone の写真から位置情報を削除する",
        totalTime: "PT3M",
        steps: [
          {
            name: "写真に何が入っているか確認する",
            text: "「写真」で写真を開き、上にスワイプするか情報ボタンをタップします。カメラとレンズ、ファイルの詳細、位置情報があれば小さな地図が表示されます。この情報は、元のファイルを受け取った人も読めるものと同じです。",
          },
          {
            name: "手早く共有するなら標準スイッチを使う",
            text: "写真を選び、「共有」をタップし、共有シート上部の「オプション」で送る前に「位置情報」をオフにします。ライブラリ内のコピーは位置情報を保ちます。",
          },
          {
            name: "今後の写真に場所を付けない（任意）",
            text: "「設定」>「プライバシーとセキュリティ」>「位置情報サービス」>「カメラ」で「なし」を選びます。新しい写真には位置情報が付きませんが、撮影済みの写真は変わらず、「写真」アプリは新しい写真を場所でまとめられなくなります。",
          },
          {
            name: "DiskMop でまとめてクリーンなコピーを作る",
            text: "iPhone 版 DiskMop で「ツール」>「位置情報と詳細を削除」を開き、写真と動画を選びます。位置情報があるものには赤いピンが付きます。「位置情報」と「端末・カメラ・コメント」はオンのまま、撮影日時も削除するか決めて、「クリーンアップして共有」をタップします。",
          },
          {
            name: "結果を確認して共有する",
            text: "上部の概要に、クリーンアップした件数と位置情報を削除した件数が表示され、続いて iOS の共有シートがクリーンなコピーとともに開きます。その後、もう一度共有する、コピーを元の写真の隣で「写真」に保存する、1 枚だけコピーする、といった操作もできます。",
          },
        ],
      },
      sections: [
        {
          title: "写真や動画の中に隠れているもの",
          content: [
            "iPhone が撮る写真はすべて、画像の隣に追加情報が付いて保存されます。最も重要なのが位置情報です。カメラが位置情報サービスを使える状態なら、あなたが立っていた場所の GPS 座標がファイルに書き込まれます。ほかにも、日時、機種とカメラの名前、レンズの設定、ソフトウェアのバージョン、あとから「写真」で付けた説明やコメントが入ります。動画にも同じ種類の情報が入っています。",
            "画像を見ているだけでは見えないため、つい忘れがちです。数行のテキストにすぎませんが、ある夜、ある住所で撮った写真だと示すには十分です。",
          ],
        },
        {
          title: "本当に問題になるとき",
          content: [
            "たいていは何も起きません。友人はあなたがどこにいたか知っています。問題になるのは、購入希望者、大家、フォーラム、サポート窓口など知らない相手に写真を送り、その写真が自宅や職場で撮られたものであるときです。廊下で撮った売り物の自転車の写真が、玄関のドアを指していることもあります。",
            "プラットフォームごとに挙動は異なります。多くの SNS は投稿時に表示する画像から位置情報を外しますが、それはプラットフォーム次第で、変わることもあります。メール添付、AirDrop、書類として送ったファイル、クラウドのリンク、掲示板では元のデータが渡ることがあります。大切な写真なら、スマホから出る前に自分でメタデータを削除してください。",
          ],
        },
        {
          title: "iOS が標準でできること（とその限界）",
          content: [
            "標準の機能が 3 つあります。1 つ目は、「写真」の共有シート上部の「オプション」ボタンにある「位置情報」スイッチで、位置情報なしで共有できます。ライブラリ内のコピーには触れません。2 つ目は、写真の情報パネルで位置情報の横にある「調整」から「位置情報なし」を選ぶ方法で、ライブラリ内の写真から恒久的に削除されます。最近の iOS では、選択した複数の写真にもメニューから使えます。3 つ目は、「設定」>「プライバシーとセキュリティ」>「位置情報サービス」>「カメラ」>「なし」で、新しい写真に位置情報が付かなくなります。",
            "これらにないのは全体像です。選んだ 40 枚のうち実際にどれに位置情報があるのかは教えてくれず、「オプション」のスイッチは共有のたびに設定が必要で、端末情報は共有シートで 1 件ずつ確認できません。専用ツールが埋めるのはこの隙間です。",
          ],
        },
        {
          title: "iPhone 版 DiskMop でまとめてクリーンなコピーを作る",
          content: [
            "iPhone 版 DiskMop 1.1.10 では、「ツール」タブに「位置情報と詳細を削除」が加わります。ライブラリから写真と動画を選ぶと、選んだ数と位置情報を持つ数が表示され、該当するものには赤いピンが付きます。「位置情報」と「端末・カメラ・コメント」（機種、ソフトウェア、シリアル番号、コメント）は最初からオンです。「撮影日時」は初期設定でオフです。消すと受け取った側で写真の順番が乱れることがあるためですが、必要ならオンにできます。",
            "「クリーンアップして共有」をタップすると、DiskMop がクリーンなコピーを作成し、iOS の共有シートを開きます。元の写真は一切変わらず、頼まない限りライブラリには何も追加されません。HEIC、JPEG、PNG の写真と動画に対応し、動画は再エンコードされません。元データが iCloud にしかない場合は、ダウンロードする前に確認します。RAW ファイルはスキップされて一覧に出ます。Live Photo は静止画のみが共有されます。",
            "共有後は、結果の下のショートカットから、もう一度共有する、クリーンなコピーを元の写真の隣で「写真」に保存する、1 枚だけコピーして別の場所に貼る、ができます。このツールは無料です。1 日の回数制限もサブスクリプションもなく、すべて iPhone 上で動作し、アカウントも不要で、何もアップロードされません。",
          ],
        },
        {
          title: "見えているものは残る",
          content: [
            "メタデータの削除で消えるのは、ファイルに隠れている情報だけです。写真そのものに写っている顔、道路標識、番地、店名、ナンバープレートはそのまま残り、見ればわかるものすべても同様です。送る前に写真を確認し、画像そのものが何かを漏らしているなら、トリミングやぼかしを加えてください。",
            "写真をクリーンアップするより目に触れないようにしたい場合は、[iPhone で写真を非表示にする方法](/blog/hide-photos-iphone)のガイドで、非表示アルバムとロック付きの金庫を比べています。ライブラリで写真を場所からも探したいなら、カメラの位置情報はオンのままにしてください。[iPhone の写真を内容で検索する](/blog/search-photos-by-content-iphone)では、たとえばパリで撮ったものをすべて探すのに、写真の位置情報を使います。",
          ],
        },
      ],
      faq: [
        {
          question:
            "「写真」の「オプション」スイッチは元の写真から位置情報を消しますか？",
          answer:
            "いいえ。共有シートの「位置情報」スイッチは送る分だけを変えます。ライブラリ内の写真は位置情報を保ちます。ライブラリのコピーからも消すには、写真の情報パネルで「調整」>「位置情報なし」を使います。",
        },
        {
          question:
            "メッセージアプリや SNS で送った写真は位置情報を保ちますか？",
          answer:
            "アプリ、そのバージョン、写真として送るかファイルとして送るかによります。多くのアプリは表示する画像から位置情報を外しますが、メール、AirDrop、クラウドのリンク、書類として送ったファイルでは元のデータが残ることがあります。確実なのは、スマホから出る前に写真をクリーンアップすることです。",
        },
        {
          question: "DiskMop は動画からも位置情報を削除できますか？",
          answer:
            "はい。動画も写真と同じように扱われ、DiskMop は動画を再エンコードせずにクリーンなコピーを作ります。元の動画は変わりません。Live Photo は静止画のみが共有されます。",
        },
        {
          question:
            "DiskMop はクリーンアップのために写真をアップロードしますか？",
          answer:
            "いいえ。クリーンアップは iPhone 上で行われます。アカウントも分析 SDK もなく、何もデバイスの外に出ません。元データが iCloud にある場合に限り、あなたが同意すれば、iPhone が先にあなた自身の iCloud からダウンロードします。",
        },
        {
          question: "DiskMop の「位置情報と詳細を削除」は無料ですか？",
          answer:
            "はい。サブスクリプションは不要で、1 日の回数制限もありません。1 日 10 枚までの無料削除枠は写真の削除にのみ適用され、コピーのクリーンアップには関係ありません。",
        },
        {
          question: "これで写真は匿名になりますか？",
          answer:
            "いいえ。消えるのは隠れたフィールドだけです。顔、看板、ナンバープレートなど画像に見えるものは残るので、共有前に画像そのものも確認してください。",
        },
      ],
      verdict: [
        "知らない相手と写真を共有するなら、ファイル内の位置情報も写真の一部と考えましょう。「写真」の「オプション」スイッチは 1 回の共有には手早い対策で、カメラの位置情報をオフにすれば今後は防げますが、どちらもどの写真が該当するかは教えてくれません。",
        "iPhone 版 DiskMop は、それを見える化してまとめて解決します。位置情報のある写真に印を付け、写真と動画のクリーンなコピーを作り、元の写真には触れません。ツールは無料で、スマホ上で動作し、バージョン 1.1.10 以降が必要です。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
    ...translations,
  },
};
