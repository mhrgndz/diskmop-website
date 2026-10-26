import type { Article } from "../types";

export const mergeDuplicateContactsIphone: Article = {
  slug: "merge-duplicate-contacts-iphone",
  type: "guide",
  category: "Mobile",
  date: "2026-10-26",
  readingTime: 7,
  content: {
    tr: {
      title: "iPhone'da Kopya Kişileri Birleştirme (Geri Yüklenebilir Yedekle)",
      metaDescription:
        "iPhone yalnızca birebir aynı kişileri birleştirir. Numarası farklı biçimde iki kez kaydedilmiş kişiyi bulma, güvenle birleştirme ve gerekirse geri alma adımları.",
      subtitle:
        "Apple'ın Kopyalar Bulundu kartı, kaçırdıkları ve tek bir numara kaybetmeden birleştirme",
      intro: [
        'Kısa cevap: iOS 16\'dan beri Kişiler uygulaması kopya kartları kendisi arar ve Kartım\'ın altında bir Kopyalar Bulundu satırı gösterir; oradan kartları tek tek ya da Tümünü Birleştir ile birleştirebilirsiniz. Ama yalnızca birebir kopya saydığı kartları yakalar. Bir kartta "+90 532 123 45 67", diğerinde "0532 123 45 67" olarak kaydedilmiş aynı kişi ya da bir kez iCloud\'da, bir kez yalnızca e-postayla kaydedilmiş biri çoğu zaman gözden kaçar. Bunlar için telefon numarası ve e-postayla eşleştirme ve her değişiklikten önce bir yedek gerekir.',
        "Bu rehber kopya kişilerin nereden geldiğini, Apple'ın yerleşik birleştirmesinin nasıl kullanılacağını, telefon ve e-posta eşleştirmesinin geri kalanları nasıl bulduğunu ve iPhone için DiskMop'un kişileri geri yüklenebilir otomatik bir yedekle nasıl birleştirdiğini anlatıyor.",
      ],
      keyTakeaways: [
        "iOS 16 ve sonrasında Kişiler'i açıp Kartım'ın altında Kopyalar Bulundu satırını arayın; kartları tek tek ya da hepsini birden birleştirmek için ona dokunun.",
        "Apple'ın denetimi yalnızca birebir kopya saydığı kartları işaretler; farklı biçimde yazılmış aynı numara ya da yalnızca e-postası olan bir kart çoğu zaman fark edilmez.",
        'Her telefon numarasının son on hanesini karşılaştırmak "+90 532 123 45 67" ile "0532 123 45 67"yi aynı numara sayar; gizli kopyaların çoğu böyle bulunur.',
        "Yalnızca adın aynı olması birleştirmek için yetmez: iki farklı kişinin adı aynı olabilir, bu yüzden güvenli bir araç aynı telefon numarasını ya da e-postayı da arar.",
        "Farklı hesaplardan (iCloud, Gmail, Exchange) gelen kişiler ve aynı santral numarasını paylaşan şirket kartları otomatik olarak birleştirilmemelidir.",
        "Birleştirmeden önce yedek alın. DiskMop her birleştirme ve silmeden önce iPhone'a bir vCard yedeği kaydeder ve son beşini saklar; iCloud.com da iCloud kişilerinin önceki sürümlerini Veri Kurtarma altında tutar.",
      ],
      dataTable: {
        caption: "iPhone'da kopya kişileri temizlemenin yolları",
        columns: ["Yöntem", "Neyi eşleştirir", "Güvenlik ağı"],
        rows: [
          [
            "Kişiler > Kopyalar Bulundu (iOS 16+)",
            "iOS'un birebir kopya saydığı kartlar",
            "Geri al düğmesi yok; iCloud kişileri için iCloud.com Veri Kurtarma",
          ],
          [
            "Düzenle > Kişileri Bağla (elle)",
            "Kendi seçtiğiniz herhangi iki kart",
            "İstediğiniz zaman bağlantıyı kaldırma",
          ],
          [
            "DiskMop > Ekstralar > Kişiler",
            "Aynı hesapta aynı telefon numarası (son 10 hane) ya da aynı e-posta",
            "Her değişiklikten önce otomatik vCard yedeği, son 5'i geri yüklenebilir",
          ],
          [
            "Eksik kişiler (DiskMop)",
            "Adı olmayan ya da ne telefonu ne e-postası olan kartlar",
            "Aynı otomatik yedek; hiçbir şey önceden seçili değil",
          ],
        ],
      },
      howTo: {
        name: "iPhone'da kopya kişileri güvenle birleştirme",
        totalTime: "PT10M",
        steps: [
          {
            name: "Önce Apple'ın birleştirmesini kullanın",
            text: "Kişiler uygulamasını (ya da Telefon'daki Kişiler sekmesini) açın. Kartım'ın altında Kopyalar Bulundu görünüyorsa ona dokunun, her çifti inceleyip Birleştir'e, tüm çiftler doğru görünüyorsa Tümünü Birleştir'e dokunun.",
          },
          {
            name: "Apple'ın kaçırdığı kopyaları bulun",
            text: "DiskMop'ta Ekstralar > Kişiler'i açın ve erişime izin verin. Uygulama aynı hesapta telefon numarası ya da e-postası ortak olan kopya gruplarını, eksik kartları da ayrıca listeler.",
          },
          {
            name: "Birleşmiş kartı kontrol edin",
            text: "Bir grubu açınca birleşmiş kartın önizlemesini görürsünüz: en zengin kart korunur, diğerlerinin telefon numaraları, e-postaları, adresleri ve web siteleri ona eklenir. Yalnızca doğru görünüyorsa Birleştir'e dokunun.",
          },
          {
            name: "Boş kartları silin",
            text: "Eksik kişiler altında, adı ya da ulaşma yolu olmayan kartlara dokunun. Sizin yerinize hiçbir şey seçilmez.",
          },
          {
            name: "Bir sorun varsa geri yükleyin",
            text: "Her birleştirme ve silme önce bir yedek oluşturur. Özgün kartları hesaplarına geri koymak için Yedekler'i açıp Geri yükle'ye dokunun.",
          },
        ],
      },
      sections: [
        {
          title: "Kopya Kişiler Nereden Gelir",
          content: [
            "Neredeyse hiç kimse kopyayı bilerek oluşturmaz. Aynı kişiler birden fazla yoldan gelince birikirler: iCloud'dan ve ayrıca bir Gmail ya da Exchange hesabından eşitlenen kişiler, yıllar önce içe aktarılmış eski bir SIM kart, iki kez çalışmış bir telefon aktarımı ya da bir kez kartvizitten, bir kez e-posta imzasından kaydettiğiniz bir iş arkadaşı.",
            "Numara biçimleri işi zorlaştırır. Bir kart cep numarasını ülke koduyla, bir diğeri baştaki sıfırla, üçüncüsü boşluk ya da tirelerle saklar. Bir insan için bunlar açıkça aynı numaradır; katı bir karşılaştırma içinse üç farklı metindir, bu yüzden ne telefon ne de çoğu basit araç bir kopya görür.",
            "Kopyalar dağınıklıktan fazlasıdır. Bir kişinin arama ve mesaj geçmişini birkaç karta böler, aramada yanlış numaranın önce çıkmasına yol açar ve aynı kişiyi arabanıza ya da akıllı saatinize iki kez gönderir. Onları bir kez, dikkatle temizlemek bunların hepsini aynı anda düzeltir.",
          ],
        },
        {
          title: "Apple'ın Yerleşik Birleştirmesi: Kopyalar Bulundu",
          content: [
            "iOS 16'dan beri Kişiler uygulaması kartlarınızı arka planda tarar. Kopya bulduğunda listenin en üstünde, Kartım'ın altında bir Kopyalar Bulundu satırı belirir. Her kümeyi görmek için ona dokunun, kartları karşılaştırmak için bir kümeyi açın ve Birleştir'e ya da hepsini birden çözmek için Tümünü Birleştir'e dokunun. Satır hiç görünmüyorsa iOS birebir kopya saydığı bir kart bulmamıştır.",
            "iOS'un kaçırdığı çiftler için elle bir yol vardır: bir kartı açın, Düzenle'ye dokunun, aşağı kaydırıp Kişileri Bağla'ya dokunun ve diğer kartı seçin. Bağlanan kartlar alttan ayrı kalırken tek kişi olarak görünür ve bağlantıyı sonra kaldırabilirsiniz. Bir avuç kişi için iyi çalışır, ama düzinelerce kişi için yavaştır.",
            "Apple'ın birleştirmesinin geri al düğmesi yoktur. Kişileriniz iCloud'da duruyorsa iCloud.com önceki sürümleri Veri Kurtarma altında tutar; oradan tüm rehberi eski bir duruma geri yükleyebilirsiniz. Bu, saklamak istediğiniz değişiklikler dahil her şeyi geri getirir; bu yüzden geri almadan çok son çaredir.",
          ],
        },
        {
          title: "Telefon ve E-postayla Eşleştirme Gerisini Bulur",
          content: [
            "iPhone için DiskMop kopyaları bir insanın arayacağı gibi arar. İki kart aynı telefon numarasını ya da büyük-küçük harften bağımsız olarak aynı e-posta adresini paylaşıyorsa aynı kişi sayılır. Telefon numaralarında yalnızca rakamlar sayılır, bu yüzden boşluk, tire ve parantez önemli değildir; son on hane karşılaştırılır, yani on haneli bir cep numarası ülke koduyla da baştaki sıfırla da kaydedilmiş olsa eşleşir. Hizmet kodları ve dahili numaralar gibi yedi haneden kısa numaralar yok sayılır, çünkü birbiriyle ilgisiz pek çok kart onları paylaşır.",
            "Ad tek başına asla yetmez. Ayşe Kaya adlı iki kart, bir numara ya da e-posta da paylaşmıyorsa ayrı kalır; tek istisna, aynı tam ada sahip ama hiç telefonu ve e-postası olmayan bir karttır, o da neredeyse her zaman diğerinin boş bir artığıdır. Kişi adı olmayan şirket kartları asla birleştirilmez, çünkü farklı bölümler çoğu zaman tek bir santral numarasını paylaşır; farklı hesaplardaki kartlar da asla birleştirilmez.",
            "Bir grubu birleştirdiğinizde en çok bilgiyi taşıyan kart esas kart olur. Diğer kartların telefon numaraları, e-postaları, posta adresleri ve web siteleri ona eklenir; şirket, unvan, doğum günü ve fotoğrafı ise yalnızca eksikse diğerlerinden doldurulur. Onaylamadan önce birleşmiş kartın önizlemesi sonucu gösterir.",
          ],
        },
        {
          title: "Her Değişiklikten Önce Yedek ve Boş Kartlar",
          content: [
            "DiskMop her birleştirme ya da silmeden önce etkilenen kartların vCard yedeğini iPhone'a kaydeder. Son beş yedek Yedekler altında listelenir; birini geri yüklemek birleşmiş kartı kaldırır ve her özgün kartı geldiği hesaba geri koyar. Yedek yazılamazsa hiçbir şey değiştirilmez. Yedek, iOS'un ayrıca koruduğu kişi notlarını içermez, ama esas karttaki notlara birleştirme hiç dokunmaz.",
            "Aynı ekran eksik kişileri de listeler: adı olmayan ya da ne telefon numarası ne de e-postası olan kartlar. Bunlar genellikle eski içe aktarmaların artıklarıdır ve kimseye ulaşmak için kullanılamaz. Hiçbiri önceden seçili gelmez; silmek istediklerinize siz dokunursunuz ve önce yedek alınır.",
            "Her şey telefonda çalışır: DiskMop kişilerinizi yerelde okur, sunucusu yoktur ve rehberinizi yüklemez. Ona yalnızca bazı kişilere erişim verdiyseniz kopyaları yalnızca onlar arasında bulabilir. Birleştirme ve silme DiskMop Pro'nun parçasıdır, yedeği geri yüklemek ise her zaman ücretsizdir. Asıl sorun fotoğraf kitaplığınızsa [iPhone fotoğraflarını kaydırarak temizleme](/blog/swipe-to-delete-photos-iphone) rehberimize göz atın.",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone'um neden Kopyalar Bulundu göstermiyor?",
          answer:
            "Bu satır yalnızca iOS 16 ve sonrasında ve iOS birebir kopya saydığı kartlar bulduğunda görünür. Aynı numarayı farklı biçimlerde taşıyan ya da bilgileri yalnızca kısmen eşleşen kartlar orada gösterilmez.",
        },
        {
          question: "iPhone'da kişileri birleştirmek bir şey siler mi?",
          answer:
            "Kopya kartlar kaldırılır ve bilgileri tek bir kartta birleştirilir. Telefon numaraları ve e-postalar korunur; iCloud kişilerinde değişiklik tüm aygıtlarınıza eşitlenir.",
        },
        {
          question: "Bir kişi birleştirmesini geri alabilir miyim?",
          answer:
            "Apple'ın birleştirmesinde geri alma yoktur, ama iCloud.com Veri Kurtarma altında tüm iCloud kişilerinin önceki bir sürümünü geri yükleyebilir. DiskMop her birleştirmeden önce kartları yedekler ve onları Yedekler'den, her kartı özgün hesabına koyarak geri yükler.",
        },
        {
          question: "Adı aynı olan iki kişi birleştirilir mi?",
          answer:
            "DiskMop'ta hayır. Ad eşleşmesi tek başına asla yetmez; kartların bir telefon numarası ya da e-posta da paylaşması gerekir. Şirket kartları ve farklı hesaplardaki kartlar asla birleştirilmez.",
        },
        {
          question: "Kişilerim telefondan çıkar mı?",
          answer:
            "Hayır. DiskMop kişileri aygıtta okur ve birleştirir, yedeklerini iPhone'da tutar; sunucusu ya da hesabı yoktur.",
        },
      ],
      verdict: [
        "Ücretsiz olan ve birebir kopyaları iyi yöneten Apple'ın Kopyalar Bulundu özelliğiyle başlayın. Sonra onun göremediği kopyalara bakın: farklı biçimde yazılmış aynı numara, iki kartta aynı e-posta ve eski içe aktarmalardan kalan boş artıklar. Ne kullanırsanız kullanın, bir şey birleştirilmeden önce yedek olduğundan emin olun.",
        "iPhone için DiskMop kişileri aynı hesap içinde telefon numarası ve e-postayla eşleştirir, yalnızca ada bakarak ya da hesaplar arasında asla birleştirmez, onaylamadan önce birleşmiş kartı gösterir ve her değişiklikten önce geri yüklenebilir bir yedek alır. Birleştirme, 7 günlük ücretsiz denemesi olan aylık abonelik DiskMop Pro'nun parçasıdır; yedeği geri yüklemek her zaman ücretsizdir.",
      ],
      ctaText: "DiskMop'u App Store'dan indirin",
    },
    en: {
      title:
        "How to Merge Duplicate Contacts on iPhone (With a Backup You Can Restore)",
      metaDescription:
        "iPhone merges only exact duplicate contacts. Here is how to find the same person saved twice with a different number format, merge safely and undo it if needed.",
      subtitle:
        "Apple's Duplicates Found card, what it misses, and how to merge without losing a single number",
      intro: [
        'Short answer: since iOS 16 the Contacts app looks for duplicate cards on its own and shows a Duplicates Found line under My Card, where you can merge them one by one or with Merge All. It only catches cards it considers exact duplicates, though. The same person saved as "+44 7700 900123" in one card and "07700 900123" in another, or once in iCloud and once with only an email, usually slips through. For those you need matching by phone number and email, and a backup before anything is changed.',
        "This guide explains where duplicate contacts come from, how to use Apple's built-in merge, how phone-and-email matching finds the rest, and how DiskMop for iPhone merges contacts with an automatic backup you can restore.",
      ],
      keyTakeaways: [
        "On iOS 16 and later, open Contacts and look for Duplicates Found under My Card; tap it to merge cards one by one or all at once.",
        "Apple's check only flags cards it considers exact duplicates; the same number written in a different format, or a card that has only an email, often goes unnoticed.",
        'Comparing the last ten digits of every phone number treats "+44 7700 900123" and "07700 900123" as the same number, which is how most hidden duplicates are found.',
        "A name match alone is not enough to merge: two different people can share a name, so a safe tool requires the same phone number or email as well.",
        "Contacts from different accounts (iCloud, Gmail, Exchange) and company cards that share a switchboard number should not be merged automatically.",
        "Back up before merging. DiskMop saves a vCard backup on the iPhone before every merge or delete and keeps the last five, and iCloud.com keeps earlier versions of iCloud contacts under Data Recovery.",
      ],
      dataTable: {
        caption: "Ways to clean up duplicate contacts on iPhone",
        columns: ["Method", "What it matches", "Safety net"],
        rows: [
          [
            "Contacts > Duplicates Found (iOS 16+)",
            "Cards iOS considers exact duplicates",
            "No undo button; iCloud.com Data Recovery for iCloud contacts",
          ],
          [
            "Edit > Link Contacts (manual)",
            "Any two cards you pick yourself",
            "Unlink at any time",
          ],
          [
            "DiskMop > Extras > Contacts",
            "Same phone number (last 10 digits) or same email, within one account",
            "Automatic vCard backup before every change, last 5 restorable",
          ],
          [
            "Incomplete contacts (DiskMop)",
            "Cards with no name, or with neither phone nor email",
            "Same automatic backup; nothing preselected",
          ],
        ],
      },
      howTo: {
        name: "Merge duplicate contacts on iPhone safely",
        totalTime: "PT10M",
        steps: [
          {
            name: "Use Apple's merge first",
            text: "Open the Contacts app (or the Contacts tab in Phone). If Duplicates Found appears under My Card, tap it, review each pair and tap Merge, or Merge All if every pair looks right.",
          },
          {
            name: "Find the duplicates Apple missed",
            text: "In DiskMop, open Extras > Contacts and allow access. The app lists duplicate groups that share a phone number or email within the same account, and incomplete cards separately.",
          },
          {
            name: "Check the merged card",
            text: "Open a group to see the Merged card preview: the richest card is kept and the phone numbers, emails, addresses and websites of the others are added to it. Tap Merge only if it looks right.",
          },
          {
            name: "Delete empty cards",
            text: "Under Incomplete contacts, tap the cards that have no name or no way to reach the person. Nothing is selected for you.",
          },
          {
            name: "Restore if something is wrong",
            text: "Every merge and delete creates a backup first. Open Backups and tap Restore to put the original cards back in their accounts.",
          },
        ],
      },
      sections: [
        {
          title: "Where Duplicate Contacts Come From",
          content: [
            "Almost nobody creates duplicates on purpose. They pile up when the same people arrive through more than one route: contacts synced from iCloud and again from a Gmail or Exchange account, an old SIM card imported years ago, a phone transfer that ran twice, or a colleague you saved once from a business card and again from an email signature.",
            "Number formats make it worse. One card stores a mobile number with the country code, another with a leading zero, a third with spaces or dashes. To a person they are obviously the same number; to a strict comparison they are three different strings, so neither the phone nor most simple tools see a duplicate.",
            "Duplicates are more than clutter. They split the call and message history of one person across several cards, make the wrong number pop up first in search, and send the same contact to your car or smartwatch twice. Cleaning them up once, carefully, fixes all of that at the same time.",
          ],
        },
        {
          title: "Apple's Built-In Merge: Duplicates Found",
          content: [
            "Since iOS 16, the Contacts app scans your cards in the background. When it finds duplicates, a Duplicates Found line appears under My Card at the top of the list. Tap it to see each set, open a set to compare the cards, and tap Merge, or use Merge All to resolve everything at once. If the line never appears, iOS simply has not found any cards it considers exact duplicates.",
            "For pairs that iOS misses, there is a manual option: open one card, tap Edit, scroll down and tap Link Contacts, then pick the other card. Linked cards are shown as one person while staying separate underneath, and you can unlink them later. It works well for a handful of people, but it is slow for dozens.",
            "Apple's merge has no undo button. If your contacts are stored in iCloud, iCloud.com keeps earlier versions under Data Recovery, where you can restore the whole address book to an older state. That brings back everything, including changes you wanted to keep, so it is a last resort rather than an undo.",
          ],
        },
        {
          title: "Matching by Phone and Email Finds the Rest",
          content: [
            "DiskMop for iPhone looks for duplicates the way a person would. Two cards are treated as the same person if they share a phone number, or if they share an email address regardless of capital letters. For phone numbers only the digits count, so spaces, dashes and brackets do not matter, and the last ten digits are compared, which means a ten-digit mobile number matches whether it was saved with its country code or a leading zero. Short numbers under seven digits, such as service codes and office extensions, are ignored because many unrelated cards share them.",
            "A name alone is never enough. Two cards called John Smith stay separate unless they also share a number or an email; the only exception is a card with the same full name that has no phone and no email at all, which is almost always an empty leftover of the other. Company cards that have no person's name are never merged, because different departments often share one switchboard number, and cards from different accounts are never merged either.",
            "When you merge a group, the card with the most information becomes the main one. The phone numbers, emails, postal addresses and websites of the other cards are added to it, and its company, job title, birthday and photo are filled in from the others only where they are missing. A Merged card preview shows the result before you confirm.",
          ],
        },
        {
          title: "A Backup Before Every Change, and Empty Cards",
          content: [
            "Before every merge or delete, DiskMop saves a vCard backup of the affected cards on the iPhone. The last five backups are listed under Backups; restoring one removes the merged card and puts every original card back into the account it came from. If the backup cannot be written, nothing is changed. The backup does not include contact notes, which iOS protects separately, but notes on the main card are never touched by a merge.",
            "The same screen lists incomplete contacts: cards with no name, or with neither a phone number nor an email. They are usually leftovers of old imports and cannot be used to reach anyone. Nothing is preselected; you tap the ones you want to delete, and the backup is made first.",
            "Everything runs on the phone: DiskMop reads your contacts locally, has no server and does not upload your address book. If you gave it access to only some contacts, it can find duplicates only among those. Merging and deleting are part of DiskMop Pro, while restoring a backup is always free. If your photo library is the bigger problem, see [how to clean up iPhone photos by swiping](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "Why doesn't my iPhone show Duplicates Found?",
          answer:
            "The line appears only on iOS 16 and later and only when iOS finds cards it considers exact duplicates. Cards with the same number in different formats, or with only partly matching details, are not shown there.",
        },
        {
          question: "Does merging contacts on iPhone delete anything?",
          answer:
            "The duplicate cards are removed and their details are combined into one card. Phone numbers and emails are kept; with iCloud contacts, the change syncs to all your devices.",
        },
        {
          question: "Can I undo a contact merge?",
          answer:
            "Apple's merge has no undo, but iCloud.com can restore an earlier version of all iCloud contacts under Data Recovery. DiskMop backs up the cards before each merge and restores them from Backups, putting each card back into its original account.",
        },
        {
          question: "Will two people with the same name be merged?",
          answer:
            "Not in DiskMop. A name match alone is never enough; the cards must also share a phone number or email. Company cards and cards in different accounts are never merged.",
        },
        {
          question: "Do my contacts leave the phone?",
          answer:
            "No. DiskMop reads and merges contacts on the device, keeps its backups on the iPhone and has no server or account.",
        },
      ],
      verdict: [
        "Start with Apple's Duplicates Found, which is free and handles exact copies well. Then look for the duplicates it cannot see: the same number in a different format, the same email on two cards, and empty leftovers from old imports. Whatever you use, make sure there is a backup before anything is merged.",
        "DiskMop for iPhone matches contacts by phone number and email within the same account, never merges on a name alone or across accounts, shows the merged card before you confirm and saves a restorable backup before every change. Merging is part of DiskMop Pro, a monthly subscription with a 7-day free trial; restoring a backup is always free.",
      ],
      ctaText: "Get DiskMop for iPhone on the App Store",
    },
    de: {
      title:
        "Doppelte Kontakte auf dem iPhone zusammenführen (mit wiederherstellbarer Sicherung)",
      metaDescription:
        "Das iPhone führt nur exakt doppelte Kontakte zusammen. So finden Sie doppelt gespeicherte Personen mit anders geschriebener Nummer und machen es notfalls rückgängig.",
      subtitle:
        "Apples Hinweis „Duplikate gefunden“, was er übersieht und wie Sie zusammenführen, ohne eine einzige Nummer zu verlieren",
      intro: [
        "Kurze Antwort: Seit iOS 16 sucht die Kontakte-App selbst nach doppelten Karten und zeigt unter „Meine Karte“ eine Zeile „Duplikate gefunden“, über die Sie Karten einzeln oder mit „Alle zusammenführen“ vereinen. Sie erfasst aber nur Karten, die sie für exakte Duplikate hält. Dieselbe Person, einmal als „+49 151 2345 6789“ und einmal als „0151 2345 6789“ gespeichert, oder einmal in iCloud und einmal nur mit E-Mail-Adresse, rutscht meist durch. Dafür brauchen Sie einen Abgleich über Telefonnummer und E-Mail und eine Sicherung, bevor etwas geändert wird.",
        "Dieser Ratgeber erklärt, woher doppelte Kontakte kommen, wie Sie Apples eingebaute Zusammenführung nutzen, wie der Abgleich über Telefon und E-Mail den Rest findet und wie DiskMop für iPhone Kontakte mit einer automatischen, wiederherstellbaren Sicherung zusammenführt.",
      ],
      keyTakeaways: [
        "Öffnen Sie ab iOS 16 die Kontakte-App und suchen Sie unter „Meine Karte“ nach „Duplikate gefunden“; tippen Sie darauf, um Karten einzeln oder alle auf einmal zusammenzuführen.",
        "Apples Prüfung markiert nur Karten, die sie für exakte Duplikate hält; dieselbe Nummer in anderer Schreibweise oder eine Karte mit nur einer E-Mail-Adresse bleibt oft unbemerkt.",
        "Wer die letzten zehn Ziffern jeder Telefonnummer vergleicht, erkennt „+49 151 2345 6789“ und „0151 2345 6789“ als dieselbe Nummer; so werden die meisten versteckten Duplikate gefunden.",
        "Ein gleicher Name allein reicht zum Zusammenführen nicht: Zwei verschiedene Menschen können gleich heißen, daher verlangt ein sicheres Werkzeug zusätzlich dieselbe Telefonnummer oder E-Mail.",
        "Kontakte aus verschiedenen Accounts (iCloud, Gmail, Exchange) und Firmenkarten, die sich eine Zentralnummer teilen, sollten nicht automatisch zusammengeführt werden.",
        "Sichern Sie vor dem Zusammenführen. DiskMop legt vor jedem Zusammenführen oder Löschen eine vCard-Sicherung auf dem iPhone an und behält die letzten fünf; iCloud.com bewahrt frühere Stände der iCloud-Kontakte unter Datenwiederherstellung auf.",
      ],
      dataTable: {
        caption: "Wege, doppelte Kontakte auf dem iPhone zu bereinigen",
        columns: ["Methode", "Was abgeglichen wird", "Sicherheitsnetz"],
        rows: [
          [
            "Kontakte > Duplikate gefunden (iOS 16+)",
            "Karten, die iOS für exakte Duplikate hält",
            "Keine Rückgängig-Taste; iCloud.com-Datenwiederherstellung für iCloud-Kontakte",
          ],
          [
            "Bearbeiten > Kontakte verknüpfen (manuell)",
            "Zwei beliebige Karten, die Sie selbst auswählen",
            "Verknüpfung jederzeit lösbar",
          ],
          [
            "DiskMop > Extras > Kontakte",
            "Gleiche Telefonnummer (letzte 10 Ziffern) oder gleiche E-Mail im selben Account",
            "Automatische vCard-Sicherung vor jeder Änderung, letzte 5 wiederherstellbar",
          ],
          [
            "Unvollständige Kontakte (DiskMop)",
            "Karten ohne Namen oder ohne Telefon und E-Mail",
            "Dieselbe automatische Sicherung; nichts vorausgewählt",
          ],
        ],
      },
      howTo: {
        name: "Doppelte Kontakte auf dem iPhone sicher zusammenführen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Zuerst Apples Zusammenführung nutzen",
            text: "Öffnen Sie die Kontakte-App (oder den Tab Kontakte in der Telefon-App). Erscheint unter „Meine Karte“ der Hinweis „Duplikate gefunden“, tippen Sie darauf, prüfen Sie jedes Paar und tippen Sie auf Zusammenführen oder auf „Alle zusammenführen“, wenn alle Paare stimmen.",
          },
          {
            name: "Die Duplikate finden, die Apple übersieht",
            text: "Öffnen Sie in DiskMop Extras > Kontakte und erlauben Sie den Zugriff. Die App listet doppelte Gruppen mit gemeinsamer Telefonnummer oder E-Mail im selben Account und unvollständige Karten getrennt auf.",
          },
          {
            name: "Die zusammengeführte Karte prüfen",
            text: "Öffnen Sie eine Gruppe, um die Vorschau „Zusammengeführte Karte“ zu sehen: Die vollständigste Karte bleibt, die Telefonnummern, E-Mails, Adressen und Websites der anderen werden ergänzt. Tippen Sie nur auf Zusammenführen, wenn das Ergebnis stimmt.",
          },
          {
            name: "Leere Karten löschen",
            text: "Tippen Sie unter Unvollständige Kontakte auf die Karten ohne Namen oder ohne Erreichbarkeit. Nichts wird für Sie ausgewählt.",
          },
          {
            name: "Bei Problemen wiederherstellen",
            text: "Jedes Zusammenführen und Löschen erstellt zuerst eine Sicherung. Öffnen Sie Sicherungen und tippen Sie auf Wiederherstellen, um die ursprünglichen Karten in ihre Accounts zurückzulegen.",
          },
        ],
      },
      sections: [
        {
          title: "Woher doppelte Kontakte kommen",
          content: [
            "Kaum jemand legt Duplikate absichtlich an. Sie sammeln sich, wenn dieselben Menschen auf mehreren Wegen ankommen: Kontakte, die aus iCloud und zusätzlich aus einem Gmail- oder Exchange-Account synchronisiert werden, eine vor Jahren importierte alte SIM-Karte, ein Telefonumzug, der zweimal lief, oder ein Kollege, den Sie einmal von der Visitenkarte und einmal aus der E-Mail-Signatur gespeichert haben.",
            "Nummernformate verschärfen das Problem. Eine Karte speichert die Mobilnummer mit Ländervorwahl, eine andere mit führender Null, eine dritte mit Leerzeichen oder Bindestrichen. Für einen Menschen ist das offensichtlich dieselbe Nummer; für einen strengen Vergleich sind es drei verschiedene Zeichenfolgen, daher erkennen weder das Telefon noch die meisten einfachen Werkzeuge ein Duplikat.",
            "Duplikate sind mehr als Unordnung. Sie verteilen den Anruf- und Nachrichtenverlauf einer Person auf mehrere Karten, lassen in der Suche die falsche Nummer zuerst erscheinen und schicken denselben Kontakt doppelt an Auto oder Smartwatch. Einmal sorgfältig aufzuräumen behebt all das auf einen Schlag.",
          ],
        },
        {
          title: "Apples eingebaute Zusammenführung: Duplikate gefunden",
          content: [
            "Seit iOS 16 durchsucht die Kontakte-App Ihre Karten im Hintergrund. Findet sie Duplikate, erscheint oben in der Liste unter „Meine Karte“ die Zeile „Duplikate gefunden“. Tippen Sie darauf, um jede Gruppe zu sehen, öffnen Sie eine Gruppe, um die Karten zu vergleichen, und tippen Sie auf Zusammenführen oder mit „Alle zusammenführen“ auf alles auf einmal. Erscheint die Zeile nie, hat iOS schlicht keine Karten gefunden, die es für exakte Duplikate hält.",
            "Für Paare, die iOS übersieht, gibt es einen manuellen Weg: Öffnen Sie eine Karte, tippen Sie auf Bearbeiten, scrollen Sie nach unten, tippen Sie auf „Kontakte verknüpfen“ und wählen Sie die andere Karte. Verknüpfte Karten erscheinen als eine Person, bleiben darunter aber getrennt, und Sie können die Verknüpfung später lösen. Für eine Handvoll Menschen funktioniert das gut, für Dutzende ist es mühsam.",
            "Apples Zusammenführung hat keine Rückgängig-Taste. Liegen Ihre Kontakte in iCloud, bewahrt iCloud.com frühere Stände unter Datenwiederherstellung auf, von wo Sie das ganze Adressbuch auf einen älteren Stand zurücksetzen können. Das bringt alles zurück, auch Änderungen, die Sie behalten wollten, und ist daher eher letzter Ausweg als Rückgängig-Funktion.",
          ],
        },
        {
          title: "Der Abgleich über Telefon und E-Mail findet den Rest",
          content: [
            "DiskMop für iPhone sucht Duplikate so, wie ein Mensch es tun würde. Zwei Karten gelten als dieselbe Person, wenn sie eine Telefonnummer oder, unabhängig von Groß- und Kleinschreibung, dieselbe E-Mail-Adresse teilen. Bei Telefonnummern zählen nur die Ziffern, Leerzeichen, Bindestriche und Klammern spielen also keine Rolle; verglichen werden die letzten zehn Ziffern, sodass eine Mobilnummer wie 0151 2345 6789 auch mit Ländervorwahl gespeichert erkannt wird. Kurze Nummern unter sieben Ziffern wie Servicenummern und Durchwahlen werden ignoriert, weil viele unabhängige Karten sie teilen.",
            "Ein Name allein reicht nie. Zwei Karten namens Anna Müller bleiben getrennt, solange sie nicht auch eine Nummer oder E-Mail teilen; die einzige Ausnahme ist eine Karte mit demselben vollständigen Namen, die überhaupt kein Telefon und keine E-Mail hat und damit fast immer ein leerer Rest der anderen ist. Firmenkarten ohne Personennamen werden nie zusammengeführt, weil verschiedene Abteilungen oft eine Zentralnummer teilen, und Karten aus verschiedenen Accounts ebenfalls nicht.",
            "Beim Zusammenführen einer Gruppe wird die Karte mit den meisten Angaben zur Hauptkarte. Die Telefonnummern, E-Mails, Postadressen und Websites der anderen Karten werden ihr hinzugefügt, Firma, Position, Geburtstag und Foto nur dort aus den anderen ergänzt, wo sie fehlen. Eine Vorschau „Zusammengeführte Karte“ zeigt das Ergebnis, bevor Sie bestätigen.",
          ],
        },
        {
          title: "Eine Sicherung vor jeder Änderung und leere Karten",
          content: [
            "Vor jedem Zusammenführen oder Löschen speichert DiskMop eine vCard-Sicherung der betroffenen Karten auf dem iPhone. Die letzten fünf Sicherungen stehen unter Sicherungen; eine davon wiederherzustellen entfernt die zusammengeführte Karte und legt jede ursprüngliche Karte in den Account zurück, aus dem sie stammt. Kann die Sicherung nicht geschrieben werden, wird nichts geändert. Kontaktnotizen, die iOS gesondert schützt, sind nicht Teil der Sicherung, aber Notizen auf der Hauptkarte rührt ein Zusammenführen nie an.",
            "Derselbe Bildschirm listet unvollständige Kontakte auf: Karten ohne Namen oder ohne Telefonnummer und E-Mail. Meist sind es Reste alter Importe, über die niemand erreichbar ist. Nichts ist vorausgewählt; Sie tippen die zu löschenden selbst an, und vorher wird gesichert.",
            "Alles läuft auf dem Telefon: DiskMop liest Ihre Kontakte lokal, hat keinen Server und lädt Ihr Adressbuch nicht hoch. Haben Sie nur einen Teil der Kontakte freigegeben, findet es Duplikate nur darunter. Zusammenführen und Löschen gehören zu DiskMop Pro, das Wiederherstellen einer Sicherung ist immer kostenlos. Ist Ihre Fotomediathek das größere Problem, lesen Sie, [wie Sie iPhone-Fotos per Wischen aufräumen](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "Warum zeigt mein iPhone „Duplikate gefunden“ nicht an?",
          answer:
            "Die Zeile erscheint nur ab iOS 16 und nur, wenn iOS Karten findet, die es für exakte Duplikate hält. Karten mit derselben Nummer in anderer Schreibweise oder mit nur teilweise übereinstimmenden Angaben werden dort nicht angezeigt.",
        },
        {
          question:
            "Löscht das Zusammenführen von Kontakten auf dem iPhone etwas?",
          answer:
            "Die doppelten Karten werden entfernt und ihre Angaben in einer Karte vereint. Telefonnummern und E-Mails bleiben erhalten; bei iCloud-Kontakten wird die Änderung auf alle Ihre Geräte übertragen.",
        },
        {
          question: "Kann ich ein Zusammenführen rückgängig machen?",
          answer:
            "Apples Zusammenführung lässt sich nicht rückgängig machen, aber iCloud.com kann unter Datenwiederherstellung einen früheren Stand aller iCloud-Kontakte zurückholen. DiskMop sichert die Karten vor jedem Zusammenführen und stellt sie über Sicherungen wieder her, jede Karte in ihrem ursprünglichen Account.",
        },
        {
          question: "Werden zwei Personen mit demselben Namen zusammengeführt?",
          answer:
            "Nicht in DiskMop. Ein gleicher Name allein reicht nie; die Karten müssen auch eine Telefonnummer oder E-Mail teilen. Firmenkarten und Karten in verschiedenen Accounts werden nie zusammengeführt.",
        },
        {
          question: "Verlassen meine Kontakte das Telefon?",
          answer:
            "Nein. DiskMop liest und führt Kontakte auf dem Gerät zusammen, bewahrt seine Sicherungen auf dem iPhone auf und hat weder Server noch Benutzerkonto.",
        },
      ],
      verdict: [
        "Beginnen Sie mit Apples „Duplikate gefunden“, das kostenlos ist und exakte Kopien gut erledigt. Suchen Sie dann die Duplikate, die es nicht sieht: dieselbe Nummer in anderer Schreibweise, dieselbe E-Mail auf zwei Karten und leere Reste alter Importe. Womit auch immer Sie arbeiten: Sorgen Sie für eine Sicherung, bevor etwas zusammengeführt wird.",
        "DiskMop für iPhone gleicht Kontakte über Telefonnummer und E-Mail innerhalb desselben Accounts ab, führt nie allein wegen eines Namens oder über Accounts hinweg zusammen, zeigt die zusammengeführte Karte vor der Bestätigung und legt vor jeder Änderung eine wiederherstellbare Sicherung an. Zusammenführen gehört zu DiskMop Pro, einem Monatsabo mit 7-tägiger Gratis-Testphase; das Wiederherstellen einer Sicherung ist immer kostenlos.",
      ],
      ctaText: "DiskMop für iPhone im App Store laden",
    },
    fr: {
      title:
        "Fusionner les contacts en double sur iPhone (avec une sauvegarde restaurable)",
      metaDescription:
        "L'iPhone ne fusionne que les doublons exacts. Trouvez une personne enregistrée deux fois avec un numéro écrit autrement, fusionnez sans risque et annulez si besoin.",
      subtitle:
        "La ligne « Doublons trouvés » d'Apple, ce qu'elle laisse passer et comment fusionner sans perdre un seul numéro",
      intro: [
        "Réponse courte : depuis iOS 16, l'app Contacts cherche elle-même les fiches en double et affiche une ligne « Doublons trouvés » sous Ma fiche, d'où vous pouvez les fusionner une par une ou avec « Tout fusionner ». Mais elle ne repère que les fiches qu'elle considère comme des doublons exacts. La même personne enregistrée sous « 06 12 34 56 78 » dans une fiche et « 06.12.34.56.78 » dans une autre, ou une fois dans iCloud et une fois avec seulement une adresse e-mail, passe généralement à travers. Pour celles-là, il faut une comparaison par numéro de téléphone et par e-mail, et une sauvegarde avant toute modification.",
        "Ce guide explique d'où viennent les contacts en double, comment utiliser la fusion intégrée d'Apple, comment la comparaison par téléphone et e-mail trouve le reste, et comment DiskMop pour iPhone fusionne les contacts avec une sauvegarde automatique que vous pouvez restaurer.",
      ],
      keyTakeaways: [
        "Sous iOS 16 et versions ultérieures, ouvrez Contacts et cherchez « Doublons trouvés » sous Ma fiche ; touchez la ligne pour fusionner les fiches une par une ou toutes à la fois.",
        "La vérification d'Apple ne signale que les fiches qu'elle considère comme des doublons exacts ; le même numéro écrit autrement, ou une fiche qui n'a qu'un e-mail, passe souvent inaperçu.",
        "Ne comparer que les chiffres de chaque numéro traite « 06 12 34 56 78 », « 06.12.34.56.78 » et « 0612345678 » comme le même numéro ; c'est ainsi que l'on trouve la plupart des doublons cachés.",
        "Un même nom ne suffit pas pour fusionner : deux personnes différentes peuvent porter le même nom, donc un outil sûr exige aussi le même numéro ou le même e-mail.",
        "Les contacts de comptes différents (iCloud, Gmail, Exchange) et les fiches d'entreprise qui partagent un standard ne devraient pas être fusionnés automatiquement.",
        "Sauvegardez avant de fusionner. DiskMop enregistre une sauvegarde vCard sur l'iPhone avant chaque fusion ou suppression et conserve les cinq dernières ; iCloud.com garde aussi des versions antérieures des contacts iCloud dans Récupération des données.",
      ],
      dataTable: {
        caption: "Les façons de nettoyer les contacts en double sur iPhone",
        columns: ["Méthode", "Ce qui est comparé", "Filet de sécurité"],
        rows: [
          [
            "Contacts > Doublons trouvés (iOS 16+)",
            "Fiches qu'iOS considère comme des doublons exacts",
            "Pas de bouton Annuler ; Récupération des données sur iCloud.com pour les contacts iCloud",
          ],
          [
            "Modifier > Lier des contacts (manuel)",
            "Deux fiches de votre choix",
            "Dissociation possible à tout moment",
          ],
          [
            "DiskMop > Extras > Contacts",
            "Même numéro (10 derniers chiffres) ou même e-mail, dans un même compte",
            "Sauvegarde vCard automatique avant chaque changement, 5 dernières restaurables",
          ],
          [
            "Contacts incomplets (DiskMop)",
            "Fiches sans nom, ou sans téléphone ni e-mail",
            "Même sauvegarde automatique ; rien n'est présélectionné",
          ],
        ],
      },
      howTo: {
        name: "Fusionner sans risque les contacts en double sur iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Utiliser d'abord la fusion d'Apple",
            text: "Ouvrez l'app Contacts (ou l'onglet Contacts de Téléphone). Si « Doublons trouvés » apparaît sous Ma fiche, touchez la ligne, examinez chaque paire et touchez Fusionner, ou « Tout fusionner » si toutes les paires sont correctes.",
          },
          {
            name: "Trouver les doublons qu'Apple a manqués",
            text: "Dans DiskMop, ouvrez Extras > Contacts et autorisez l'accès. L'app liste les groupes de doublons qui partagent un numéro ou un e-mail dans un même compte, et les fiches incomplètes à part.",
          },
          {
            name: "Vérifier la fiche fusionnée",
            text: "Ouvrez un groupe pour voir l'aperçu « Fiche fusionnée » : la fiche la plus complète est conservée et les numéros, e-mails, adresses et sites web des autres y sont ajoutés. Touchez Fusionner seulement si le résultat est correct.",
          },
          {
            name: "Supprimer les fiches vides",
            text: "Sous Contacts incomplets, touchez les fiches sans nom ou sans moyen de joindre la personne. Rien n'est sélectionné à votre place.",
          },
          {
            name: "Restaurer en cas de problème",
            text: "Chaque fusion et suppression crée d'abord une sauvegarde. Ouvrez Sauvegardes et touchez Restaurer pour remettre les fiches d'origine dans leurs comptes.",
          },
        ],
      },
      sections: [
        {
          title: "D'où viennent les contacts en double",
          content: [
            "Presque personne ne crée de doublons volontairement. Ils s'accumulent quand les mêmes personnes arrivent par plusieurs chemins : des contacts synchronisés depuis iCloud puis depuis un compte Gmail ou Exchange, une vieille carte SIM importée il y a des années, un transfert de téléphone lancé deux fois, ou un collègue enregistré une fois depuis sa carte de visite et une autre fois depuis sa signature d'e-mail.",
            "Les formats de numéro aggravent le problème. Une fiche stocke le mobile avec des espaces, une autre avec des points, une troisième sans aucun séparateur. Pour un humain, c'est évidemment le même numéro ; pour une comparaison stricte, ce sont trois chaînes différentes, si bien que ni le téléphone ni la plupart des outils simples ne voient de doublon.",
            "Les doublons sont plus qu'un désordre. Ils répartissent l'historique d'appels et de messages d'une personne sur plusieurs fiches, font apparaître le mauvais numéro en premier dans la recherche et envoient le même contact deux fois à votre voiture ou à votre montre. Les nettoyer une fois, avec soin, règle tout cela d'un coup.",
          ],
        },
        {
          title: "La fusion intégrée d'Apple : Doublons trouvés",
          content: [
            "Depuis iOS 16, l'app Contacts analyse vos fiches en arrière-plan. Lorsqu'elle trouve des doublons, une ligne « Doublons trouvés » apparaît sous Ma fiche, en haut de la liste. Touchez-la pour voir chaque ensemble, ouvrez un ensemble pour comparer les fiches et touchez Fusionner, ou utilisez « Tout fusionner » pour tout régler d'un coup. Si la ligne n'apparaît jamais, iOS n'a simplement trouvé aucune fiche qu'il considère comme un doublon exact.",
            "Pour les paires qu'iOS laisse passer, il existe une option manuelle : ouvrez une fiche, touchez Modifier, faites défiler vers le bas, touchez « Lier des contacts » et choisissez l'autre fiche. Les fiches liées s'affichent comme une seule personne tout en restant séparées en dessous, et vous pouvez les dissocier plus tard. C'est efficace pour quelques personnes, mais lent pour des dizaines.",
            "La fusion d'Apple n'a pas de bouton Annuler. Si vos contacts sont stockés dans iCloud, iCloud.com conserve des versions antérieures dans Récupération des données, d'où vous pouvez ramener tout le carnet d'adresses à un état plus ancien. Cela rétablit tout, y compris les modifications que vous vouliez garder ; c'est donc un dernier recours plutôt qu'une annulation.",
          ],
        },
        {
          title: "La comparaison par téléphone et e-mail trouve le reste",
          content: [
            "DiskMop pour iPhone cherche les doublons comme le ferait une personne. Deux fiches sont considérées comme la même personne si elles partagent un numéro de téléphone ou, quelle que soit la casse, une adresse e-mail. Pour les numéros, seuls les chiffres comptent : les espaces, les points, les tirets et les parenthèses n'ont pas d'importance, et ce sont les dix derniers chiffres qui sont comparés. Les numéros courts de moins de sept chiffres, comme les numéros de service et les postes internes, sont ignorés, car beaucoup de fiches sans rapport les partagent.",
            "Un nom seul ne suffit jamais. Deux fiches au nom de Marie Martin restent séparées si elles ne partagent pas aussi un numéro ou un e-mail ; la seule exception est une fiche portant le même nom complet mais sans aucun téléphone ni e-mail, qui est presque toujours un reste vide de l'autre. Les fiches d'entreprise sans nom de personne ne sont jamais fusionnées, car différents services partagent souvent un même standard, et les fiches de comptes différents ne le sont jamais non plus.",
            "Lorsque vous fusionnez un groupe, la fiche la plus riche devient la fiche principale. Les numéros, e-mails, adresses postales et sites web des autres fiches lui sont ajoutés, et l'entreprise, le poste, l'anniversaire et la photo ne sont complétés depuis les autres que s'ils manquent. Un aperçu « Fiche fusionnée » montre le résultat avant votre confirmation.",
          ],
        },
        {
          title: "Une sauvegarde avant chaque changement, et les fiches vides",
          content: [
            "Avant chaque fusion ou suppression, DiskMop enregistre sur l'iPhone une sauvegarde vCard des fiches concernées. Les cinq dernières sauvegardes figurent dans Sauvegardes ; en restaurer une supprime la fiche fusionnée et remet chaque fiche d'origine dans le compte dont elle venait. Si la sauvegarde ne peut pas être écrite, rien n'est modifié. La sauvegarde n'inclut pas les notes des contacts, qu'iOS protège séparément, mais une fusion ne touche jamais aux notes de la fiche principale.",
            "Le même écran liste les contacts incomplets : les fiches sans nom, ou sans numéro ni e-mail. Ce sont généralement des restes d'anciennes importations qui ne permettent de joindre personne. Rien n'est présélectionné ; vous touchez celles que vous voulez supprimer, et la sauvegarde est faite avant.",
            "Tout se passe sur le téléphone : DiskMop lit vos contacts localement, n'a pas de serveur et n'envoie pas votre carnet d'adresses. Si vous ne lui avez donné accès qu'à une partie des contacts, il ne peut trouver des doublons que parmi ceux-là. La fusion et la suppression font partie de DiskMop Pro, tandis que la restauration d'une sauvegarde est toujours gratuite. Si c'est votre photothèque qui pose le plus problème, voyez [comment trier ses photos iPhone en balayant](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question:
            "Pourquoi mon iPhone n'affiche-t-il pas « Doublons trouvés » ?",
          answer:
            "La ligne n'apparaît que sous iOS 16 et versions ultérieures, et seulement quand iOS trouve des fiches qu'il considère comme des doublons exacts. Les fiches avec le même numéro écrit autrement, ou avec des informations qui ne concordent qu'en partie, n'y figurent pas.",
        },
        {
          question:
            "Fusionner des contacts sur iPhone supprime-t-il quelque chose ?",
          answer:
            "Les fiches en double sont retirées et leurs informations réunies dans une seule fiche. Les numéros et les e-mails sont conservés ; avec les contacts iCloud, la modification se synchronise sur tous vos appareils.",
        },
        {
          question: "Puis-je annuler une fusion de contacts ?",
          answer:
            "La fusion d'Apple n'a pas d'annulation, mais iCloud.com peut restaurer une version antérieure de tous les contacts iCloud dans Récupération des données. DiskMop sauvegarde les fiches avant chaque fusion et les restaure depuis Sauvegardes, en remettant chaque fiche dans son compte d'origine.",
        },
        {
          question:
            "Deux personnes portant le même nom seront-elles fusionnées ?",
          answer:
            "Pas dans DiskMop. Un nom identique ne suffit jamais ; les fiches doivent aussi partager un numéro ou un e-mail. Les fiches d'entreprise et les fiches de comptes différents ne sont jamais fusionnées.",
        },
        {
          question: "Mes contacts quittent-ils le téléphone ?",
          answer:
            "Non. DiskMop lit et fusionne les contacts sur l'appareil, garde ses sauvegardes sur l'iPhone et n'a ni serveur ni compte.",
        },
      ],
      verdict: [
        "Commencez par « Doublons trouvés » d'Apple, gratuit et efficace pour les copies exactes. Cherchez ensuite les doublons qu'il ne voit pas : le même numéro écrit autrement, le même e-mail sur deux fiches et les restes vides d'anciennes importations. Quel que soit l'outil, assurez-vous qu'une sauvegarde existe avant toute fusion.",
        "DiskMop pour iPhone compare les contacts par numéro et par e-mail au sein d'un même compte, ne fusionne jamais sur la seule base d'un nom ni entre comptes, montre la fiche fusionnée avant votre confirmation et crée une sauvegarde restaurable avant chaque changement. La fusion fait partie de DiskMop Pro, un abonnement mensuel avec essai gratuit de 7 jours ; restaurer une sauvegarde est toujours gratuit.",
      ],
      ctaText: "Télécharger DiskMop pour iPhone sur l'App Store",
    },
    es: {
      title:
        "Cómo combinar contactos duplicados en iPhone (con una copia que puedes restaurar)",
      metaDescription:
        "El iPhone solo combina duplicados exactos. Encuentra a quien está guardado dos veces con el número escrito distinto, combina con seguridad y deshazlo si hace falta.",
      subtitle:
        "El aviso Duplicados encontrados de Apple, lo que se le escapa y cómo combinar sin perder ni un número",
      intro: [
        "Respuesta corta: desde iOS 16, la app Contactos busca por sí sola tarjetas duplicadas y muestra una línea Duplicados encontrados debajo de Mi tarjeta, desde donde puedes combinarlas una a una o con Combinar todo. Pero solo detecta las tarjetas que considera duplicados exactos. La misma persona guardada como «612 345 678» en una tarjeta y «612-345-678» en otra, o una vez en iCloud y otra solo con su correo, suele pasar desapercibida. Para esos casos necesitas comparar por número de teléfono y por correo, y una copia de seguridad antes de cambiar nada.",
        "Esta guía explica de dónde salen los contactos duplicados, cómo usar la combinación integrada de Apple, cómo la comparación por teléfono y correo encuentra el resto y cómo DiskMop para iPhone combina contactos con una copia automática que puedes restaurar.",
      ],
      keyTakeaways: [
        "En iOS 16 y posteriores, abre Contactos y busca Duplicados encontrados debajo de Mi tarjeta; tócalo para combinar las tarjetas una a una o todas a la vez.",
        "La comprobación de Apple solo marca las tarjetas que considera duplicados exactos; el mismo número escrito de otra forma, o una tarjeta que solo tiene un correo, a menudo pasa inadvertida.",
        "Comparar solo las cifras de cada número trata «612 345 678», «612-345-678» y «612345678» como el mismo número; así se encuentran la mayoría de los duplicados ocultos.",
        "Que el nombre coincida no basta para combinar: dos personas distintas pueden llamarse igual, así que una herramienta segura exige también el mismo teléfono o el mismo correo.",
        "Los contactos de cuentas distintas (iCloud, Gmail, Exchange) y las tarjetas de empresa que comparten centralita no deberían combinarse automáticamente.",
        "Haz una copia antes de combinar. DiskMop guarda una copia vCard en el iPhone antes de cada combinación o eliminación y conserva las cinco últimas; iCloud.com también guarda versiones anteriores de los contactos de iCloud en Recuperación de datos.",
      ],
      dataTable: {
        caption: "Formas de limpiar contactos duplicados en iPhone",
        columns: ["Método", "Qué compara", "Red de seguridad"],
        rows: [
          [
            "Contactos > Duplicados encontrados (iOS 16+)",
            "Tarjetas que iOS considera duplicados exactos",
            "Sin botón de deshacer; Recuperación de datos en iCloud.com para contactos de iCloud",
          ],
          [
            "Editar > Enlazar contactos (manual)",
            "Dos tarjetas cualesquiera que elijas tú",
            "Se pueden desenlazar en cualquier momento",
          ],
          [
            "DiskMop > Extras > Contactos",
            "Mismo teléfono (últimas 10 cifras) o mismo correo, dentro de una cuenta",
            "Copia vCard automática antes de cada cambio, las 5 últimas restaurables",
          ],
          [
            "Contactos incompletos (DiskMop)",
            "Tarjetas sin nombre, o sin teléfono ni correo",
            "La misma copia automática; nada preseleccionado",
          ],
        ],
      },
      howTo: {
        name: "Combinar con seguridad los contactos duplicados en iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Usa primero la combinación de Apple",
            text: "Abre la app Contactos (o la pestaña Contactos de Teléfono). Si aparece Duplicados encontrados debajo de Mi tarjeta, tócalo, revisa cada pareja y toca Combinar, o Combinar todo si todas las parejas están bien.",
          },
          {
            name: "Encuentra los duplicados que Apple no vio",
            text: "En DiskMop, abre Extras > Contactos y permite el acceso. La app muestra los grupos duplicados que comparten teléfono o correo dentro de una misma cuenta y, aparte, las tarjetas incompletas.",
          },
          {
            name: "Revisa la tarjeta combinada",
            text: "Abre un grupo para ver la vista previa Tarjeta combinada: se conserva la tarjeta más completa y se le añaden los teléfonos, correos, direcciones y webs de las demás. Toca Combinar solo si el resultado es correcto.",
          },
          {
            name: "Elimina las tarjetas vacías",
            text: "En Contactos incompletos, toca las tarjetas que no tienen nombre ni forma de contactar con la persona. No se selecciona nada por ti.",
          },
          {
            name: "Restaura si algo sale mal",
            text: "Cada combinación y eliminación crea antes una copia. Abre Copias y toca Restaurar para devolver las tarjetas originales a sus cuentas.",
          },
        ],
      },
      sections: [
        {
          title: "De dónde salen los contactos duplicados",
          content: [
            "Casi nadie crea duplicados a propósito. Se acumulan cuando las mismas personas llegan por más de un camino: contactos sincronizados desde iCloud y además desde una cuenta de Gmail o Exchange, una vieja tarjeta SIM importada hace años, una transferencia de teléfono que se hizo dos veces o un compañero que guardaste una vez desde su tarjeta de visita y otra desde la firma de un correo.",
            "Los formatos de número lo empeoran. Una tarjeta guarda el móvil con espacios, otra con guiones, una tercera todo seguido. Para una persona es obviamente el mismo número; para una comparación estricta son textos distintos, así que ni el teléfono ni la mayoría de las herramientas sencillas ven un duplicado.",
            "Los duplicados son algo más que desorden. Reparten el historial de llamadas y mensajes de una persona entre varias tarjetas, hacen que el número equivocado salga primero en la búsqueda y envían el mismo contacto dos veces al coche o al reloj. Limpiarlos una vez, con cuidado, lo arregla todo a la vez.",
          ],
        },
        {
          title: "La combinación integrada de Apple: Duplicados encontrados",
          content: [
            "Desde iOS 16, la app Contactos analiza tus tarjetas en segundo plano. Cuando encuentra duplicados, aparece una línea Duplicados encontrados debajo de Mi tarjeta, en la parte superior de la lista. Tócala para ver cada grupo, abre uno para comparar las tarjetas y toca Combinar, o usa Combinar todo para resolverlo todo de una vez. Si la línea nunca aparece, iOS simplemente no ha encontrado tarjetas que considere duplicados exactos.",
            "Para las parejas que iOS no detecta hay una opción manual: abre una tarjeta, toca Editar, desplázate hacia abajo, toca Enlazar contactos y elige la otra tarjeta. Las tarjetas enlazadas se muestran como una sola persona, aunque por debajo siguen separadas, y puedes desenlazarlas más tarde. Funciona bien para unas pocas personas, pero es lento para decenas.",
            "La combinación de Apple no tiene botón de deshacer. Si tus contactos están en iCloud, iCloud.com guarda versiones anteriores en Recuperación de datos, desde donde puedes devolver toda la agenda a un estado anterior. Eso lo recupera todo, incluidos los cambios que querías conservar, así que es un último recurso más que un deshacer.",
          ],
        },
        {
          title: "Comparar por teléfono y correo encuentra el resto",
          content: [
            "DiskMop para iPhone busca duplicados como lo haría una persona. Dos tarjetas se consideran la misma persona si comparten un número de teléfono o, sin importar mayúsculas y minúsculas, una dirección de correo. En los números solo cuentan las cifras, así que los espacios, puntos, guiones y paréntesis no importan, y se comparan las diez últimas cifras. Los números cortos de menos de siete cifras, como los de servicios y las extensiones de oficina, se ignoran, porque muchas tarjetas sin relación los comparten.",
            "Un nombre por sí solo nunca basta. Dos tarjetas llamadas Lucía García siguen separadas si no comparten también un número o un correo; la única excepción es una tarjeta con el mismo nombre completo que no tiene ningún teléfono ni correo, que casi siempre es un resto vacío de la otra. Las tarjetas de empresa sin nombre de persona nunca se combinan, porque distintos departamentos suelen compartir una misma centralita, y las tarjetas de cuentas distintas tampoco.",
            "Al combinar un grupo, la tarjeta con más información pasa a ser la principal. Se le añaden los teléfonos, correos, direcciones postales y webs de las otras tarjetas, y la empresa, el cargo, el cumpleaños y la foto solo se completan desde las demás si le faltan. Una vista previa Tarjeta combinada muestra el resultado antes de que confirmes.",
          ],
        },
        {
          title: "Una copia antes de cada cambio, y las tarjetas vacías",
          content: [
            "Antes de cada combinación o eliminación, DiskMop guarda en el iPhone una copia vCard de las tarjetas afectadas. Las cinco últimas copias aparecen en Copias; restaurar una elimina la tarjeta combinada y devuelve cada tarjeta original a la cuenta de la que venía. Si la copia no puede guardarse, no se cambia nada. La copia no incluye las notas de los contactos, que iOS protege aparte, pero una combinación nunca toca las notas de la tarjeta principal.",
            "La misma pantalla muestra los contactos incompletos: tarjetas sin nombre, o sin teléfono ni correo. Suelen ser restos de importaciones antiguas que no sirven para localizar a nadie. Nada viene preseleccionado; tocas las que quieres eliminar y antes se hace la copia.",
            "Todo ocurre en el teléfono: DiskMop lee tus contactos en local, no tiene servidor y no sube tu agenda. Si le diste acceso solo a algunos contactos, solo puede encontrar duplicados entre ellos. Combinar y eliminar forman parte de DiskMop Pro, mientras que restaurar una copia es siempre gratis. Si el problema mayor es tu fototeca, mira [cómo limpiar las fotos del iPhone deslizando](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "¿Por qué mi iPhone no muestra Duplicados encontrados?",
          answer:
            "La línea solo aparece en iOS 16 y posteriores, y solo cuando iOS encuentra tarjetas que considera duplicados exactos. Las tarjetas con el mismo número escrito de otra forma, o con datos que solo coinciden en parte, no se muestran ahí.",
        },
        {
          question: "¿Combinar contactos en iPhone elimina algo?",
          answer:
            "Las tarjetas duplicadas se quitan y sus datos se reúnen en una sola tarjeta. Los teléfonos y correos se conservan; con los contactos de iCloud, el cambio se sincroniza en todos tus dispositivos.",
        },
        {
          question: "¿Puedo deshacer una combinación de contactos?",
          answer:
            "La combinación de Apple no se puede deshacer, pero iCloud.com puede restaurar una versión anterior de todos los contactos de iCloud en Recuperación de datos. DiskMop hace una copia de las tarjetas antes de cada combinación y las restaura desde Copias, devolviendo cada tarjeta a su cuenta original.",
        },
        {
          question: "¿Se combinarán dos personas con el mismo nombre?",
          answer:
            "En DiskMop, no. Que el nombre coincida nunca basta; las tarjetas tienen que compartir también un teléfono o un correo. Las tarjetas de empresa y las de cuentas distintas nunca se combinan.",
        },
        {
          question: "¿Mis contactos salen del teléfono?",
          answer:
            "No. DiskMop lee y combina los contactos en el dispositivo, guarda sus copias en el iPhone y no tiene servidor ni cuenta.",
        },
      ],
      verdict: [
        "Empieza por Duplicados encontrados de Apple, que es gratis y resuelve bien las copias exactas. Después busca los duplicados que no ve: el mismo número escrito de otra forma, el mismo correo en dos tarjetas y los restos vacíos de importaciones antiguas. Uses lo que uses, asegúrate de tener una copia antes de combinar nada.",
        "DiskMop para iPhone compara los contactos por teléfono y correo dentro de una misma cuenta, nunca combina solo por el nombre ni entre cuentas, muestra la tarjeta combinada antes de que confirmes y guarda una copia restaurable antes de cada cambio. Combinar forma parte de DiskMop Pro, una suscripción mensual con 7 días de prueba gratuita; restaurar una copia es siempre gratis.",
      ],
      ctaText: "Consigue DiskMop para iPhone en el App Store",
    },
    it: {
      title:
        "Come unire i contatti doppi su iPhone (con un backup ripristinabile)",
      metaDescription:
        "L'iPhone unisce solo i contatti doppi identici. Trova chi è salvato due volte con il numero scritto diversamente, unisci in sicurezza e annulla se serve.",
      subtitle:
        "L'avviso Duplicati trovati di Apple, cosa gli sfugge e come unire senza perdere nemmeno un numero",
      intro: [
        "Risposta breve: da iOS 16 l'app Contatti cerca da sola le schede doppie e mostra una riga Duplicati trovati sotto La mia scheda, da cui puoi unirle una alla volta o con Unisci tutti. Però individua solo le schede che considera duplicati esatti. La stessa persona salvata come «+39 333 123 4567» in una scheda e «333 123 4567» in un'altra, oppure una volta su iCloud e una volta solo con l'indirizzo e-mail, di solito passa inosservata. Per questi casi serve un confronto per numero di telefono ed e-mail, e un backup prima di modificare qualsiasi cosa.",
        "Questa guida spiega da dove arrivano i contatti doppi, come usare l'unione integrata di Apple, come il confronto per telefono ed e-mail trova il resto e come DiskMop per iPhone unisce i contatti con un backup automatico che puoi ripristinare.",
      ],
      keyTakeaways: [
        "Su iOS 16 e versioni successive apri Contatti e cerca Duplicati trovati sotto La mia scheda; toccalo per unire le schede una alla volta o tutte insieme.",
        "Il controllo di Apple segnala solo le schede che considera duplicati esatti; lo stesso numero scritto in un altro formato, o una scheda che ha solo un'e-mail, spesso passa inosservato.",
        "Confrontare le ultime dieci cifre di ogni numero tratta «+39 333 123 4567» e «333 123 4567» come lo stesso numero; è così che si trova la maggior parte dei doppioni nascosti.",
        "Un nome uguale non basta per unire: due persone diverse possono chiamarsi allo stesso modo, quindi uno strumento sicuro richiede anche lo stesso numero o la stessa e-mail.",
        "I contatti di account diversi (iCloud, Gmail, Exchange) e le schede aziendali che condividono un centralino non dovrebbero essere uniti automaticamente.",
        "Fai un backup prima di unire. DiskMop salva un backup vCard sull'iPhone prima di ogni unione o eliminazione e conserva gli ultimi cinque; iCloud.com conserva anche versioni precedenti dei contatti iCloud in Recupero dati.",
      ],
      dataTable: {
        caption: "I modi per ripulire i contatti doppi su iPhone",
        columns: ["Metodo", "Cosa confronta", "Rete di sicurezza"],
        rows: [
          [
            "Contatti > Duplicati trovati (iOS 16+)",
            "Schede che iOS considera duplicati esatti",
            "Nessun tasto Annulla; Recupero dati su iCloud.com per i contatti iCloud",
          ],
          [
            "Modifica > Collega contatti (manuale)",
            "Due schede qualsiasi scelte da te",
            "Scollegabili in qualsiasi momento",
          ],
          [
            "DiskMop > Extra > Contatti",
            "Stesso numero (ultime 10 cifre) o stessa e-mail, nello stesso account",
            "Backup vCard automatico prima di ogni modifica, ultimi 5 ripristinabili",
          ],
          [
            "Contatti incompleti (DiskMop)",
            "Schede senza nome, o senza telefono né e-mail",
            "Stesso backup automatico; nulla preselezionato",
          ],
        ],
      },
      howTo: {
        name: "Unire in sicurezza i contatti doppi su iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Usa prima l'unione di Apple",
            text: "Apri l'app Contatti (o la scheda Contatti di Telefono). Se sotto La mia scheda compare Duplicati trovati, toccalo, controlla ogni coppia e tocca Unisci, oppure Unisci tutti se tutte le coppie sono corrette.",
          },
          {
            name: "Trova i doppioni sfuggiti ad Apple",
            text: "In DiskMop apri Extra > Contatti e consenti l'accesso. L'app elenca i gruppi di doppioni che condividono un numero o un'e-mail nello stesso account e, a parte, le schede incomplete.",
          },
          {
            name: "Controlla la scheda unita",
            text: "Apri un gruppo per vedere l'anteprima Scheda unita: viene tenuta la scheda più completa e le si aggiungono numeri, e-mail, indirizzi e siti web delle altre. Tocca Unisci solo se il risultato è corretto.",
          },
          {
            name: "Elimina le schede vuote",
            text: "In Contatti incompleti tocca le schede senza nome o senza un modo per raggiungere la persona. Nulla viene selezionato al posto tuo.",
          },
          {
            name: "Ripristina se qualcosa non va",
            text: "Ogni unione ed eliminazione crea prima un backup. Apri Backup e tocca Ripristina per rimettere le schede originali nei loro account.",
          },
        ],
      },
      sections: [
        {
          title: "Da dove arrivano i contatti doppi",
          content: [
            "Quasi nessuno crea doppioni di proposito. Si accumulano quando le stesse persone arrivano da più strade: contatti sincronizzati da iCloud e poi anche da un account Gmail o Exchange, una vecchia SIM importata anni fa, un trasferimento di telefono eseguito due volte, oppure un collega salvato una volta dal biglietto da visita e un'altra dalla firma di un'e-mail.",
            "I formati dei numeri peggiorano le cose. Una scheda conserva il cellulare con il prefisso internazionale, un'altra senza, una terza con spazi o trattini. Per una persona è ovviamente lo stesso numero; per un confronto rigido sono tre stringhe diverse, quindi né il telefono né la maggior parte degli strumenti semplici vede un doppione.",
            "I doppioni sono più che disordine. Dividono la cronologia di chiamate e messaggi di una persona su più schede, fanno comparire per primo il numero sbagliato nella ricerca e mandano lo stesso contatto due volte all'auto o allo smartwatch. Ripulirli una volta, con cura, risolve tutto questo in un colpo solo.",
          ],
        },
        {
          title: "L'unione integrata di Apple: Duplicati trovati",
          content: [
            "Da iOS 16 l'app Contatti analizza le schede in background. Quando trova doppioni, in cima all'elenco, sotto La mia scheda, compare la riga Duplicati trovati. Toccala per vedere ogni gruppo, apri un gruppo per confrontare le schede e tocca Unisci, oppure usa Unisci tutti per risolvere tutto in una volta. Se la riga non compare mai, iOS semplicemente non ha trovato schede che considera duplicati esatti.",
            "Per le coppie che iOS non vede c'è un'opzione manuale: apri una scheda, tocca Modifica, scorri in basso, tocca Collega contatti e scegli l'altra scheda. Le schede collegate appaiono come una sola persona pur restando separate sotto, e puoi scollegarle in seguito. Funziona bene per poche persone, ma è lento per decine.",
            "L'unione di Apple non ha un tasto Annulla. Se i contatti sono su iCloud, iCloud.com conserva versioni precedenti in Recupero dati, da cui puoi riportare l'intera rubrica a uno stato precedente. In questo modo torna tutto, comprese le modifiche che volevi tenere, quindi è un'ultima risorsa più che un annullamento.",
          ],
        },
        {
          title: "Il confronto per telefono ed e-mail trova il resto",
          content: [
            "DiskMop per iPhone cerca i doppioni come farebbe una persona. Due schede sono considerate la stessa persona se condividono un numero di telefono oppure, senza distinguere maiuscole e minuscole, un indirizzo e-mail. Nei numeri contano solo le cifre, quindi spazi, trattini e parentesi non hanno importanza, e si confrontano le ultime dieci cifre: un cellulare italiano viene riconosciuto sia con sia senza +39. I numeri brevi sotto le sette cifre, come numeri di servizio e interni, vengono ignorati perché molte schede non collegate li condividono.",
            "Un nome da solo non basta mai. Due schede intestate a Giulia Rossi restano separate se non condividono anche un numero o un'e-mail; l'unica eccezione è una scheda con lo stesso nome completo ma senza alcun telefono né e-mail, che è quasi sempre un residuo vuoto dell'altra. Le schede aziendali senza nome di persona non vengono mai unite, perché reparti diversi condividono spesso lo stesso centralino, e nemmeno le schede di account diversi.",
            "Quando unisci un gruppo, la scheda con più informazioni diventa quella principale. Le si aggiungono numeri, e-mail, indirizzi postali e siti web delle altre schede, mentre azienda, ruolo, compleanno e foto vengono completati dalle altre solo se mancano. Un'anteprima Scheda unita mostra il risultato prima della conferma.",
          ],
        },
        {
          title: "Un backup prima di ogni modifica, e le schede vuote",
          content: [
            "Prima di ogni unione o eliminazione, DiskMop salva sull'iPhone un backup vCard delle schede coinvolte. Gli ultimi cinque backup sono elencati in Backup; ripristinarne uno rimuove la scheda unita e rimette ogni scheda originale nell'account da cui proveniva. Se il backup non può essere scritto, non viene modificato nulla. Il backup non include le note dei contatti, che iOS protegge a parte, ma un'unione non tocca mai le note della scheda principale.",
            "La stessa schermata elenca i contatti incompleti: schede senza nome, oppure senza telefono né e-mail. Di solito sono residui di vecchie importazioni che non permettono di raggiungere nessuno. Nulla è preselezionato; tocchi quelle da eliminare e prima viene fatto il backup.",
            "Tutto avviene sul telefono: DiskMop legge i contatti in locale, non ha server e non carica la tua rubrica. Se gli hai dato accesso solo ad alcuni contatti, può trovare doppioni solo tra quelli. Unire ed eliminare fanno parte di DiskMop Pro, mentre ripristinare un backup è sempre gratuito. Se il problema più grande è la libreria foto, leggi [come pulire le foto dell'iPhone scorrendo](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "Perché il mio iPhone non mostra Duplicati trovati?",
          answer:
            "La riga compare solo su iOS 16 e versioni successive, e solo quando iOS trova schede che considera duplicati esatti. Le schede con lo stesso numero in un altro formato, o con dati che coincidono solo in parte, non vengono mostrate lì.",
        },
        {
          question: "Unire i contatti su iPhone elimina qualcosa?",
          answer:
            "Le schede doppie vengono rimosse e i loro dati riuniti in un'unica scheda. Numeri ed e-mail vengono mantenuti; con i contatti iCloud la modifica si sincronizza su tutti i dispositivi.",
        },
        {
          question: "Posso annullare un'unione di contatti?",
          answer:
            "L'unione di Apple non si può annullare, ma iCloud.com può ripristinare una versione precedente di tutti i contatti iCloud in Recupero dati. DiskMop salva le schede prima di ogni unione e le ripristina da Backup, rimettendo ogni scheda nel suo account originale.",
        },
        {
          question: "Due persone con lo stesso nome verranno unite?",
          answer:
            "In DiskMop no. Un nome uguale non basta mai; le schede devono condividere anche un numero o un'e-mail. Le schede aziendali e quelle di account diversi non vengono mai unite.",
        },
        {
          question: "I miei contatti escono dal telefono?",
          answer:
            "No. DiskMop legge e unisce i contatti sul dispositivo, conserva i backup sull'iPhone e non ha server né account.",
        },
      ],
      verdict: [
        "Comincia da Duplicati trovati di Apple, gratuito ed efficace con le copie esatte. Poi cerca i doppioni che non vede: lo stesso numero scritto in un altro formato, la stessa e-mail su due schede e i residui vuoti di vecchie importazioni. Qualunque strumento usi, assicurati di avere un backup prima di unire qualcosa.",
        "DiskMop per iPhone confronta i contatti per numero ed e-mail all'interno dello stesso account, non unisce mai in base al solo nome né tra account diversi, mostra la scheda unita prima della conferma e salva un backup ripristinabile prima di ogni modifica. L'unione fa parte di DiskMop Pro, un abbonamento mensile con 7 giorni di prova gratuita; ripristinare un backup è sempre gratuito.",
      ],
      ctaText: "Scarica DiskMop per iPhone dall'App Store",
    },
    pt: {
      title:
        "Como combinar contatos duplicados no iPhone (com uma cópia que você pode restaurar)",
      metaDescription:
        "O iPhone só combina contatos duplicados idênticos. Veja como achar a mesma pessoa salva duas vezes com o número escrito diferente, combinar com segurança e desfazer.",
      subtitle:
        "O aviso Duplicatas Encontradas da Apple, o que ele deixa passar e como combinar sem perder nenhum número",
      intro: [
        'Resposta curta: desde o iOS 16, o app Contatos procura sozinho cartões duplicados e mostra uma linha Duplicatas Encontradas abaixo de Meu Cartão, de onde você pode combiná-los um a um ou com Combinar Tudo. Mas ele só detecta os cartões que considera duplicatas exatas. A mesma pessoa salva como "+55 11 91234-5678" num cartão e "(11) 91234-5678" em outro, ou uma vez no iCloud e outra só com o e-mail, costuma passar despercebida. Para esses casos você precisa comparar por número de telefone e por e-mail, e de uma cópia de segurança antes de mudar qualquer coisa.',
        "Este guia explica de onde vêm os contatos duplicados, como usar a combinação nativa da Apple, como a comparação por telefone e e-mail encontra o resto e como o DiskMop para iPhone combina contatos com uma cópia automática que você pode restaurar.",
      ],
      keyTakeaways: [
        "No iOS 16 ou posterior, abra Contatos e procure Duplicatas Encontradas abaixo de Meu Cartão; toque para combinar os cartões um a um ou todos de uma vez.",
        "A verificação da Apple só marca os cartões que considera duplicatas exatas; o mesmo número escrito em outro formato, ou um cartão que só tem e-mail, muitas vezes passa despercebido.",
        'Comparar os últimos dez dígitos de cada número trata "+55 11 91234-5678" e "(11) 91234-5678" como o mesmo número; é assim que se encontra a maioria das duplicatas escondidas.',
        "Nome igual não basta para combinar: duas pessoas diferentes podem ter o mesmo nome, então uma ferramenta segura exige também o mesmo telefone ou o mesmo e-mail.",
        "Contatos de contas diferentes (iCloud, Gmail, Exchange) e cartões de empresa que compartilham o mesmo PABX não devem ser combinados automaticamente.",
        "Faça uma cópia antes de combinar. O DiskMop salva uma cópia vCard no iPhone antes de cada combinação ou exclusão e guarda as cinco últimas; o iCloud.com também guarda versões anteriores dos contatos do iCloud em Recuperação de Dados.",
      ],
      dataTable: {
        caption: "Formas de limpar contatos duplicados no iPhone",
        columns: ["Método", "O que compara", "Rede de segurança"],
        rows: [
          [
            "Contatos > Duplicatas Encontradas (iOS 16+)",
            "Cartões que o iOS considera duplicatas exatas",
            "Sem botão de desfazer; Recuperação de Dados no iCloud.com para contatos do iCloud",
          ],
          [
            "Editar > Vincular Contatos (manual)",
            "Quaisquer dois cartões que você escolher",
            "Pode desvincular a qualquer momento",
          ],
          [
            "DiskMop > Extras > Contactos",
            "Mesmo telefone (últimos 10 dígitos) ou mesmo e-mail, na mesma conta",
            "Cópia vCard automática antes de cada mudança, as 5 últimas restauráveis",
          ],
          [
            "Contactos incompletos (DiskMop)",
            "Cartões sem nome, ou sem telefone nem e-mail",
            "A mesma cópia automática; nada pré-selecionado",
          ],
        ],
      },
      howTo: {
        name: "Combinar com segurança os contatos duplicados no iPhone",
        totalTime: "PT10M",
        steps: [
          {
            name: "Use primeiro a combinação da Apple",
            text: "Abra o app Contatos (ou a aba Contatos do Telefone). Se aparecer Duplicatas Encontradas abaixo de Meu Cartão, toque, revise cada par e toque em Combinar, ou em Combinar Tudo se todos os pares estiverem certos.",
          },
          {
            name: "Encontre as duplicatas que a Apple não viu",
            text: "No DiskMop, abra Extras > Contactos e permita o acesso. O app lista os grupos duplicados que compartilham telefone ou e-mail na mesma conta e, à parte, os cartões incompletos.",
          },
          {
            name: "Confira o cartão combinado",
            text: "Abra um grupo para ver a prévia Cartão combinado: o cartão mais completo é mantido e recebe os telefones, e-mails, endereços e sites dos outros. Toque em Juntar só se o resultado estiver certo.",
          },
          {
            name: "Apague os cartões vazios",
            text: "Em Contactos incompletos, toque nos cartões sem nome ou sem forma de falar com a pessoa. Nada é selecionado por você.",
          },
          {
            name: "Restaure se algo der errado",
            text: "Cada combinação e exclusão cria antes uma cópia. Abra Cópias e toque em Restaurar para devolver os cartões originais às suas contas.",
          },
        ],
      },
      sections: [
        {
          title: "De onde vêm os contatos duplicados",
          content: [
            "Quase ninguém cria duplicatas de propósito. Elas se acumulam quando as mesmas pessoas chegam por mais de um caminho: contatos sincronizados pelo iCloud e também por uma conta do Gmail ou do Exchange, um chip antigo importado anos atrás, uma transferência de celular que rodou duas vezes ou um colega que você salvou uma vez pelo cartão de visita e outra pela assinatura do e-mail.",
            "Os formatos de número pioram tudo. Um cartão guarda o celular com o código do país, outro com o DDD entre parênteses, um terceiro com espaços ou hífens. Para uma pessoa é obviamente o mesmo número; para uma comparação rígida são três textos diferentes, então nem o telefone nem a maioria das ferramentas simples enxerga uma duplicata.",
            "Duplicatas são mais que bagunça. Elas dividem o histórico de chamadas e mensagens de uma pessoa entre vários cartões, fazem o número errado aparecer primeiro na busca e mandam o mesmo contato duas vezes para o carro ou para o relógio. Limpá-las uma vez, com cuidado, resolve tudo isso de uma só vez.",
          ],
        },
        {
          title: "A combinação nativa da Apple: Duplicatas Encontradas",
          content: [
            "Desde o iOS 16, o app Contatos analisa seus cartões em segundo plano. Quando encontra duplicatas, aparece uma linha Duplicatas Encontradas abaixo de Meu Cartão, no topo da lista. Toque nela para ver cada grupo, abra um grupo para comparar os cartões e toque em Combinar, ou use Combinar Tudo para resolver tudo de uma vez. Se a linha nunca aparece, o iOS simplesmente não encontrou cartões que considera duplicatas exatas.",
            "Para os pares que o iOS deixa passar, existe uma opção manual: abra um cartão, toque em Editar, role para baixo, toque em Vincular Contatos e escolha o outro cartão. Cartões vinculados aparecem como uma só pessoa, mas continuam separados por baixo, e você pode desvinculá-los depois. Funciona bem para poucas pessoas, mas é lento para dezenas.",
            "A combinação da Apple não tem botão de desfazer. Se seus contatos estão no iCloud, o iCloud.com guarda versões anteriores em Recuperação de Dados, de onde você pode voltar a agenda inteira para um estado antigo. Isso traz tudo de volta, inclusive mudanças que você queria manter, então é um último recurso, não um desfazer.",
          ],
        },
        {
          title: "Comparar por telefone e e-mail encontra o resto",
          content: [
            "O DiskMop para iPhone procura duplicatas como uma pessoa faria. Dois cartões são considerados a mesma pessoa se compartilham um número de telefone ou, sem diferenciar maiúsculas e minúsculas, um endereço de e-mail. Nos números só contam os dígitos, então espaços, hífens e parênteses não importam, e os últimos dez dígitos são comparados: um celular brasileiro com DDD é reconhecido com ou sem o +55. Números curtos com menos de sete dígitos, como números de serviço e ramais, são ignorados, porque muitos cartões sem relação os compartilham.",
            "Um nome sozinho nunca basta. Dois cartões chamados Ana Souza continuam separados se não compartilharem também um número ou um e-mail; a única exceção é um cartão com o mesmo nome completo que não tem nenhum telefone nem e-mail, que quase sempre é uma sobra vazia do outro. Cartões de empresa sem nome de pessoa nunca são combinados, porque setores diferentes costumam compartilhar o mesmo PABX, e cartões de contas diferentes também não.",
            "Ao combinar um grupo, o cartão com mais informação vira o principal. Ele recebe os telefones, e-mails, endereços e sites dos outros cartões, e empresa, cargo, aniversário e foto só são preenchidos a partir dos outros se estiverem faltando. Uma prévia Cartão combinado mostra o resultado antes de você confirmar.",
          ],
        },
        {
          title: "Uma cópia antes de cada mudança, e os cartões vazios",
          content: [
            "Antes de cada combinação ou exclusão, o DiskMop salva no iPhone uma cópia vCard dos cartões afetados. As cinco últimas cópias ficam em Cópias; restaurar uma delas remove o cartão combinado e devolve cada cartão original à conta de onde veio. Se a cópia não puder ser gravada, nada é alterado. A cópia não inclui as notas dos contatos, que o iOS protege separadamente, mas uma combinação nunca mexe nas notas do cartão principal.",
            "A mesma tela lista os contatos incompletos: cartões sem nome, ou sem telefone nem e-mail. Geralmente são sobras de importações antigas que não servem para falar com ninguém. Nada vem pré-selecionado; você toca nos que quer apagar, e a cópia é feita antes.",
            "Tudo acontece no telefone: o DiskMop lê seus contatos localmente, não tem servidor e não envia sua agenda para lugar nenhum. Se você deu acesso só a alguns contatos, ele só encontra duplicatas entre eles. Combinar e apagar fazem parte do DiskMop Pro, enquanto restaurar uma cópia é sempre grátis. Se o problema maior é a sua fototeca, veja [como limpar as fotos do iPhone deslizando](/blog/swipe-to-delete-photos-iphone).",
          ],
        },
      ],
      faq: [
        {
          question: "Por que meu iPhone não mostra Duplicatas Encontradas?",
          answer:
            "A linha só aparece no iOS 16 ou posterior, e só quando o iOS encontra cartões que considera duplicatas exatas. Cartões com o mesmo número em outro formato, ou com dados que só coincidem em parte, não aparecem ali.",
        },
        {
          question: "Combinar contatos no iPhone apaga alguma coisa?",
          answer:
            "Os cartões duplicados são removidos e seus dados reunidos num só cartão. Telefones e e-mails são mantidos; com contatos do iCloud, a mudança é sincronizada em todos os seus aparelhos.",
        },
        {
          question: "Posso desfazer uma combinação de contatos?",
          answer:
            "A combinação da Apple não tem desfazer, mas o iCloud.com pode restaurar uma versão anterior de todos os contatos do iCloud em Recuperação de Dados. O DiskMop faz uma cópia dos cartões antes de cada combinação e os restaura em Cópias, devolvendo cada cartão à sua conta original.",
        },
        {
          question: "Duas pessoas com o mesmo nome serão combinadas?",
          answer:
            "No DiskMop, não. Nome igual nunca basta; os cartões precisam compartilhar também um telefone ou um e-mail. Cartões de empresa e cartões de contas diferentes nunca são combinados.",
        },
        {
          question: "Meus contatos saem do telefone?",
          answer:
            "Não. O DiskMop lê e combina os contatos no aparelho, guarda suas cópias no iPhone e não tem servidor nem conta.",
        },
      ],
      verdict: [
        "Comece pelas Duplicatas Encontradas da Apple, que são grátis e resolvem bem as cópias exatas. Depois procure as duplicatas que elas não veem: o mesmo número escrito de outro jeito, o mesmo e-mail em dois cartões e as sobras vazias de importações antigas. Seja qual for a ferramenta, garanta uma cópia antes de combinar qualquer coisa.",
        "O DiskMop para iPhone compara contatos por telefone e e-mail dentro da mesma conta, nunca combina só pelo nome nem entre contas, mostra o cartão combinado antes de você confirmar e salva uma cópia restaurável antes de cada mudança. Combinar faz parte do DiskMop Pro, uma assinatura mensal com 7 dias de teste gratuito; restaurar uma cópia é sempre grátis.",
      ],
      ctaText: "Baixe o DiskMop para iPhone na App Store",
    },
    ja: {
      title:
        "iPhone で重複した連絡先を結合する方法（復元できるバックアップ付き）",
      metaDescription:
        "iPhone が結合するのは完全に同じ連絡先だけ。番号の書き方が違うまま二重登録された人を見つけ、安全に結合し、必要なら元に戻す手順を解説します。",
      subtitle:
        "Apple の「重複が見つかりました」、その見逃し、番号をひとつも失わずに結合する方法",
      intro: [
        "結論から言うと、iOS 16 以降の連絡先アプリは重複したカードを自動で探し、「自分のカード」の下に「重複が見つかりました」という行を表示します。そこから 1 件ずつ、または「すべてを結合」でまとめて結合できます。ただし検出されるのは、iOS が完全な重複とみなしたカードだけです。あるカードでは「+81 90-1234-5678」、別のカードでは「090-1234-5678」と登録された同じ人や、一度は iCloud に、もう一度はメールアドレスだけで登録された人は、たいてい見逃されます。こうしたケースには電話番号とメールでの照合と、変更前のバックアップが必要です。",
        "このガイドでは、重複した連絡先が生まれる理由、Apple 標準の結合機能の使い方、電話番号とメールでの照合が残りをどう見つけるか、そして iPhone 版 DiskMop が復元可能な自動バックアップを取りながら連絡先を結合するしくみを解説します。",
      ],
      keyTakeaways: [
        "iOS 16 以降では連絡先アプリを開き、「自分のカード」の下にある「重複が見つかりました」を探します。タップすると 1 件ずつ、またはまとめて結合できます。",
        "Apple のチェックが示すのは、完全な重複とみなしたカードだけです。同じ番号の別表記や、メールアドレスしかないカードは見逃されがちです。",
        "電話番号の末尾 10 桁を比べれば、「+81 90-1234-5678」と「090-1234-5678」は同じ番号として扱われます。隠れた重複の多くはこうして見つかります。",
        "名前が同じというだけでは結合の理由になりません。別人が同姓同名のこともあるため、安全なツールは同じ電話番号かメールも条件にします。",
        "別のアカウント（iCloud、Gmail、Exchange）の連絡先や、代表番号を共有する会社の連絡先は、自動で結合すべきではありません。",
        "結合の前にバックアップを。DiskMop は結合や削除のたびに vCard バックアップを iPhone に保存し、最新の 5 件を残します。iCloud.com にも「データの復旧」に iCloud 連絡先の過去の状態が保存されています。",
      ],
      dataTable: {
        caption: "iPhone で重複した連絡先を整理する方法",
        columns: ["方法", "照合する内容", "安全策"],
        rows: [
          [
            "連絡先 >「重複が見つかりました」（iOS 16 以降）",
            "iOS が完全な重複とみなしたカード",
            "取り消しボタンなし。iCloud 連絡先は iCloud.com の「データの復旧」",
          ],
          [
            "編集 >「連絡先をリンク」（手動）",
            "自分で選んだ任意の 2 枚のカード",
            "いつでもリンク解除できる",
          ],
          [
            "DiskMop >「その他」>「連絡先」",
            "同じアカウント内で同じ電話番号（末尾 10 桁）または同じメール",
            "変更のたびに自動 vCard バックアップ、最新 5 件を復元可能",
          ],
          [
            "不完全な連絡先（DiskMop）",
            "名前がない、または電話番号もメールもないカード",
            "同じ自動バックアップ。事前選択なし",
          ],
        ],
      },
      howTo: {
        name: "iPhone で重複した連絡先を安全に結合する",
        totalTime: "PT10M",
        steps: [
          {
            name: "まず Apple の結合機能を使う",
            text: "連絡先アプリ（または電話アプリの「連絡先」タブ）を開きます。「自分のカード」の下に「重複が見つかりました」があればタップし、各ペアを確認して「結合」を、すべて問題なければ「すべてを結合」をタップします。",
          },
          {
            name: "Apple が見逃した重複を探す",
            text: "DiskMop で「その他」>「連絡先」を開き、アクセスを許可します。同じアカウント内で電話番号やメールが共通する重複グループと、不完全なカードが別々に一覧表示されます。",
          },
          {
            name: "結合後のカードを確認する",
            text: "グループを開くと「結合後の連絡先」のプレビューが表示されます。最も情報の多いカードが残り、ほかのカードの電話番号、メール、住所、Web サイトが追加されます。問題がなければ「結合」をタップします。",
          },
          {
            name: "空のカードを削除する",
            text: "「不完全な連絡先」で、名前がない、または連絡手段のないカードをタップします。勝手に選択されるものはありません。",
          },
          {
            name: "問題があれば復元する",
            text: "結合や削除の前には必ずバックアップが作成されます。「バックアップ」を開いて「復元」をタップすると、元のカードがそれぞれのアカウントに戻ります。",
          },
        ],
      },
      sections: [
        {
          title: "重複した連絡先が生まれる理由",
          content: [
            "わざと重複を作る人はほとんどいません。同じ人が複数の経路から入ってきたときに溜まっていきます。iCloud から同期した連絡先に Gmail や Exchange のアカウントからも同じ人が入ってくる、何年も前に古い SIM カードから読み込んだ、機種変更のデータ移行が 2 回走った、同僚を一度は名刺から、もう一度はメールの署名から登録した、といった具合です。",
            "番号の書き方の違いが、問題をさらに難しくします。あるカードは国番号付き、別のカードは先頭の 0 付き、3 枚目はスペースやハイフン入り。人が見れば明らかに同じ番号でも、厳密な比較では 3 つの別々の文字列なので、iPhone も多くの簡易ツールも重複とは判断しません。",
            "重複は単に散らかるだけではありません。1 人の通話やメッセージの履歴が複数のカードに分かれ、検索で違う番号が先に表示され、車やスマートウォッチに同じ連絡先が 2 回送られます。一度丁寧に整理すれば、これらがまとめて解決します。",
          ],
        },
        {
          title: "Apple 標準の結合機能：「重複が見つかりました」",
          content: [
            "iOS 16 以降、連絡先アプリはバックグラウンドでカードを調べています。重複が見つかると、リストの一番上、「自分のカード」の下に「重複が見つかりました」という行が現れます。タップすると各グループが表示され、グループを開いてカードを比べてから「結合」を、まとめて片付けるなら「すべてを結合」をタップします。この行が一度も現れない場合は、iOS が完全な重複とみなすカードを見つけていないだけです。",
            "iOS が見逃したペアには手動の方法があります。片方のカードを開いて「編集」をタップし、下までスクロールして「連絡先をリンク」をタップし、もう一方のカードを選びます。リンクしたカードは 1 人として表示されますが内部では別々のままで、あとからリンクを解除できます。数人なら便利ですが、数十人となると時間がかかります。",
            "Apple の結合には取り消しボタンがありません。連絡先を iCloud に保存している場合、iCloud.com の「データの復旧」に過去の状態が残っており、アドレス帳全体を以前の状態に戻せます。ただし残したかった変更まで含めてすべて戻るため、取り消しというより最後の手段です。",
          ],
        },
        {
          title: "電話番号とメールで照合すれば残りが見つかる",
          content: [
            "iPhone 版 DiskMop は、人が探すのと同じ考え方で重複を探します。電話番号が共通するか、大文字・小文字に関係なくメールアドレスが共通するカードを同一人物とみなします。電話番号は数字だけを見るので、スペースやハイフン、かっこは関係なく、末尾 10 桁で比較します。そのため日本の携帯番号は、国番号付きでも先頭 0 付きでも一致します。サービス番号や内線のような 7 桁未満の短い番号は、無関係な多くのカードが共有しているため無視されます。",
            "名前だけで結合することはありません。「佐藤 花子」という 2 枚のカードも、番号かメールが共通していなければ別々のままです。唯一の例外は、同じフルネームで電話番号もメールもまったくないカードで、これはほぼ確実にもう一方の空の残骸です。個人名のない会社のカードは、部署が違っても代表番号を共有していることが多いため結合されず、別のアカウントのカード同士も結合されません。",
            "グループを結合すると、最も情報の多いカードがメインになります。ほかのカードの電話番号、メール、住所、Web サイトが追加され、会社名、役職、誕生日、写真は足りない場合にだけほかのカードから補われます。確定する前に「結合後の連絡先」のプレビューで結果を確認できます。",
          ],
        },
        {
          title: "変更のたびにバックアップ、そして空のカード",
          content: [
            "DiskMop は結合や削除の前に、対象となるカードの vCard バックアップを iPhone に保存します。最新の 5 件は「バックアップ」に表示され、復元すると結合後のカードが削除され、元のカードがそれぞれ元のアカウントに戻ります。バックアップを書き込めなかった場合は何も変更しません。iOS が別途保護している連絡先のメモはバックアップに含まれませんが、結合でメインのカードのメモが変わることはありません。",
            "同じ画面には不完全な連絡先も表示されます。名前がない、または電話番号もメールもないカードです。多くは昔の読み込みの残骸で、誰にも連絡できません。事前選択はなく、削除したいものを自分でタップし、その前にバックアップが作成されます。",
            "処理はすべて iPhone 上で行われます。DiskMop は連絡先を端末内で読み取り、サーバーを持たず、アドレス帳をアップロードしません。一部の連絡先だけへのアクセスを許可した場合は、その範囲でのみ重複を探します。結合と削除は DiskMop Pro の機能で、バックアップの復元はいつでも無料です。写真ライブラリのほうが問題なら、[スワイプで iPhone の写真を整理する方法](/blog/swipe-to-delete-photos-iphone)もご覧ください。",
          ],
        },
      ],
      faq: [
        {
          question:
            "iPhone に「重複が見つかりました」が表示されないのはなぜですか？",
          answer:
            "この行は iOS 16 以降でのみ、しかも iOS が完全な重複とみなすカードを見つけたときだけ表示されます。同じ番号の別表記や、情報が一部しか一致しないカードはそこには表示されません。",
        },
        {
          question: "iPhone で連絡先を結合すると何かが削除されますか？",
          answer:
            "重複したカードは取り除かれ、その情報が 1 枚のカードにまとめられます。電話番号とメールは残ります。iCloud の連絡先なら、変更はすべてのデバイスに同期されます。",
        },
        {
          question: "連絡先の結合を取り消せますか？",
          answer:
            "Apple の結合には取り消しがありませんが、iCloud.com の「データの復旧」で iCloud 連絡先全体を以前の状態に戻せます。DiskMop は結合のたびにカードをバックアップし、「バックアップ」から各カードを元のアカウントに戻して復元します。",
        },
        {
          question: "同姓同名の 2 人が結合されてしまうことはありますか？",
          answer:
            "DiskMop ではありません。名前の一致だけでは結合せず、電話番号かメールも共通している必要があります。会社のカードや別アカウントのカードは結合されません。",
        },
        {
          question: "連絡先が iPhone の外に出ることはありますか？",
          answer:
            "ありません。DiskMop は連絡先を端末上で読み取って結合し、バックアップも iPhone に保存します。サーバーもアカウントもありません。",
        },
      ],
      verdict: [
        "まずは無料で完全な重複をきちんと片付けてくれる Apple の「重複が見つかりました」から始めましょう。そのうえで、Apple には見えない重複を探します。表記の違う同じ番号、2 枚のカードにある同じメール、昔の読み込みで残った空のカードです。どの方法を使うにしても、結合の前にバックアップがあることを確認してください。",
        "iPhone 版 DiskMop は、同じアカウント内で電話番号とメールによって連絡先を照合し、名前だけやアカウントをまたいだ結合はせず、確定前に結合後のカードを見せ、変更のたびに復元可能なバックアップを保存します。結合は 7 日間の無料トライアル付き月額サブスクリプション DiskMop Pro の機能で、バックアップの復元はいつでも無料です。",
      ],
      ctaText: "App Store で iPhone 版 DiskMop を入手",
    },
  },
};
