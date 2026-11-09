import type { Article } from "../types";

export const deleteAppLeftoversMac: Article = {
  slug: "delete-app-leftovers-mac",
  type: "guide",
  category: "Mac Tips",
  date: "2026-11-09",
  updated: "2026-11-09",
  readingTime: 6,
  content: {
    en: {
      title: "How to Delete App Leftovers on Mac After Uninstalling",
      metaDescription:
        "Dragging an app to the Trash leaves files behind in your Library. Find and remove app leftovers and rebuildable caches on Mac safely, by hand or with DiskMop's Library & leftovers page.",
      subtitle:
        "What stays in your Library after an app is gone, and how to clear it without breaking anything",
      intro: [
        "Short answer: moving an app to the Trash removes the app itself, not the data it created. Settings, caches and support files stay in your Library folder, sometimes for years. You can find them by hand through Finder > Go > Go to Folder and the name of the app, or let DiskMop for Mac list them on its Library & leftovers page.",
        "This guide shows where leftovers live, which ones are safe to remove, how DiskMop decides that a folder belongs to an app that is gone, and why it sends leftovers to the Trash instead of deleting them.",
      ],
      keyTakeaways: [
        "Removing an app does not remove its files in Library: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages and WebKit keep data for apps that no longer exist.",
        "DiskMop's Library & leftovers page lists two kinds of items: rebuildable cache of apps you still have, and leftover folders of apps that are gone.",
        "A folder counts as a leftover only when macOS reports no app with that identifier installed and nothing wrote to the folder for 90 days; items under 5 MB are not listed.",
        "Leftovers go to the Trash so a wrong guess can be restored; cache the app rebuilds by itself is emptied. DiskMop does not uninstall apps.",
      ],
      dataTable: {
        caption: "Where an app leaves files in your Library",
        columns: [
          "Folder in Library",
          "What it holds",
          "After the app is gone",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Data, plug-ins and downloads of an app",
            "Usually safe to remove",
            "Lists leftovers and rebuildable cache",
          ],
          [
            "Containers and Group Containers",
            "Data of sandboxed apps",
            "Safe once the app is gone",
            "Lists leftovers and rebuildable cache",
          ],
          [
            "Preferences",
            "Settings files (.plist)",
            "Tiny; remove if you will not reinstall",
            "Only lists items of 5 MB or more, so tiny settings files are skipped",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Window state, web data and cookies of an app",
            "Safe to remove",
            "Lists leftovers of 5 MB or more",
          ],
        ],
      },
      howTo: {
        name: "Delete app leftovers on a Mac with DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Remove the app first",
            text: "Drag the app from Applications to the Trash, or delete it from Launchpad if it came from the App Store.",
          },
          {
            name: "Open Library & leftovers",
            text: "Start DiskMop and choose Library & leftovers in the sidebar. It scans automatically the first time.",
          },
          {
            name: "Read what is listed",
            text: "Each row shows the folder, whether it is rebuildable cache or a leftover of an app that is gone, and its size.",
          },
          {
            name: "Tick and clean",
            text: "Leave ticked what you recognise, untick anything you are unsure about, then press the clean button at the bottom and confirm.",
          },
          {
            name: "Check the Trash",
            text: "Leftovers are in the Trash. Look through it if you like, then empty it to get the space back.",
          },
        ],
      },
      sections: [
        {
          title: "What an App Leaves Behind",
          content: [
            "A Mac app is a package in Applications, but while it runs it also writes to your Library folder: settings in Preferences, data and downloads in Application Support, web data in WebKit and HTTPStorages, window state in Saved Application State, and for sandboxed apps a folder in Containers or Group Containers. When you drag the app to the Trash, none of that is touched.",
            "Most leftovers are small. A few are not: a chat app that cached years of media, a design tool that kept previews, an editor that stored extensions. That is the part worth reclaiming, and it adds up across the apps you tried once and deleted.",
          ],
        },
        {
          title: "Finding Leftovers by Hand",
          content: [
            "In Finder choose Go > Go to Folder, type ~/Library and press Return. Open Application Support, Containers and Preferences and look for the name of the app or of its company. Hold Option while opening the Go menu if you want the Library folder to appear there permanently.",
            "Be careful with names that look similar: a company often has several products and shares folders between them. Before you remove a folder, check that the app it belongs to is really gone, and never touch anything from Apple or anything you cannot identify.",
          ],
        },
        {
          title: "How DiskMop Finds Them",
          content: [
            "DiskMop's Library & leftovers page reads the same folders and asks macOS whether an app with each folder's identifier exists anywhere, including apps run from Downloads or an external drive. If none does and nothing has written to the folder for 90 days, it is listed as a leftover. Anything under 5 MB is left out, and protected system names are skipped.",
            "For apps you still have, the page lists the cache they keep inside their own folders, such as Cache, GPUCache and Logs, which the app rebuilds when it needs it. Files from the last 24 hours stay. A leftover goes to the Trash so you can restore it; this page never uninstalls an app.",
          ],
        },
        {
          title: "Cleaning Without Regrets",
          content: [
            "If you may reinstall an app one day, keep its Preferences and Application Support: they hold your settings and accounts. If it is gone for good, the leftovers are dead weight. Because DiskMop moves them to the Trash, you can bring a folder back before you empty it.",
            "Scanning is free. Cleaning many items at once is part of DiskMop Pro, a one-time purchase; the free version lets you try a few single removals. For what else fills the disk, see [what fills a Mac startup disk](/blog/mac-startup-disk-almost-full) and [how to find large files on Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Does dragging an app to the Trash remove everything?",
          answer:
            "No. It removes the app itself. Settings, caches and support files stay in your Library folder until you remove them.",
        },
        {
          question: "Is it safe to delete leftover files in Library?",
          answer:
            "It is safe for folders that belong to apps that are gone, and DiskMop moves them to the Trash so you can restore one. Do not delete folders you cannot identify or anything that belongs to Apple.",
        },
        {
          question: "How does DiskMop know an app is gone?",
          answer:
            "It asks macOS whether an app with that identifier is installed anywhere, and lists a folder as a leftover only when none is and nothing has written there for 90 days.",
        },
        {
          question: "Does DiskMop uninstall apps?",
          answer:
            "No. Remove the app yourself first; DiskMop then finds the files it left behind and the cache of apps you still use.",
        },
      ],
      verdict: [
        "Uninstalling on a Mac stops at the app. The settings, caches and support files it created remain, and over time they can take gigabytes.",
        "DiskMop for Mac lists leftovers of apps that are gone and rebuildable cache of the ones you keep, sends leftovers to the Trash and leaves the uninstalling to you. Scanning is free, so you can see how much is waiting.",
      ],
      ctaText: "Find app leftovers on your Mac with DiskMop",
    },
    tr: {
      title: "Mac'te Uygulamayı Sildikten Sonra Artıkları Silme",
      metaDescription:
        "Uygulamayı Çöp Kutusu'na sürüklemek Library'de dosya bırakır. Mac'te uygulama artıklarını ve yeniden oluşturulabilir önbellekleri elle ya da DiskMop ile güvenle temizleyin.",
      subtitle:
        "Uygulama gittikten sonra Library'nizde ne kalır ve hiçbir şeyi bozmadan nasıl temizlenir",
      intro: [
        "Kısa cevap: bir uygulamayı Çöp Kutusu'na taşımak uygulamanın kendisini kaldırır, oluşturduğu verileri değil. Ayarlar, önbellekler ve destek dosyaları Library klasörünüzde, bazen yıllarca kalır. Bunları Finder > Git > Klasöre Git ile uygulamanın adından elle bulabilir ya da Mac için DiskMop'un Library ve artıklar sayfasında listeletebilirsiniz.",
        "Bu rehber artıkların nerede durduğunu, hangilerinin silinebileceğini, DiskMop'un bir klasörün gitmiş bir uygulamaya ait olduğuna nasıl karar verdiğini ve artıkları neden silmek yerine Çöp Kutusu'na gönderdiğini gösterir.",
      ],
      keyTakeaways: [
        "Uygulamayı kaldırmak Library'deki dosyalarını kaldırmaz: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages ve WebKit artık var olmayan uygulamaların verilerini tutar.",
        "DiskMop'un Library ve artıklar sayfası iki tür öğe listeler: hâlâ sahip olduğunuz uygulamaların yeniden oluşturulabilir önbelleği ve gitmiş uygulamaların artık klasörleri.",
        "Bir klasör, yalnızca macOS o tanımlayıcıyla yüklü bir uygulama bildirmiyorsa ve klasöre 90 gündür hiçbir şey yazılmamışsa artık sayılır; 5 MB altındaki öğeler listelenmez.",
        "Artıklar Çöp Kutusu'na gider, yanlış bir tahmin geri alınabilir; uygulamanın kendi kendine yeniden oluşturduğu önbellek boşaltılır. DiskMop uygulama kaldırmaz.",
      ],
      dataTable: {
        caption: "Bir uygulamanın Library'de dosya bıraktığı yerler",
        columns: [
          "Library'deki klasör",
          "Ne tutar",
          "Uygulama gidince",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Uygulamanın verileri, eklentileri, indirilenleri",
            "Genellikle silinebilir",
            "Artıkları ve yeniden oluşturulabilir önbelleği listeler",
          ],
          [
            "Containers ve Group Containers",
            "Korumalı alandaki uygulamaların verileri",
            "Uygulama gidince silinebilir",
            "Artıkları ve yeniden oluşturulabilir önbelleği listeler",
          ],
          [
            "Preferences",
            "Ayar dosyaları (.plist)",
            "Küçüktür; yeniden kurmayacaksanız silin",
            "Yalnızca 5 MB ve üstünü listeler; küçük ayar dosyaları atlanır",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Bir uygulamanın pencere durumu, web verisi ve çerezleri",
            "Silinebilir",
            "5 MB ve üstü artıkları listeler",
          ],
        ],
      },
      howTo: {
        name: "DiskMop ile Mac'te uygulama artıklarını silin",
        totalTime: "PT10M",
        steps: [
          {
            name: "Önce uygulamayı kaldırın",
            text: "Uygulamayı Uygulamalar'dan Çöp Kutusu'na sürükleyin; App Store'dan geldiyse Launchpad'den silin.",
          },
          {
            name: "Library ve artıklar'ı açın",
            text: "DiskMop'u başlatın ve kenar çubuğunda Library ve artıklar'ı seçin. İlk seferde otomatik tarar.",
          },
          {
            name: "Listelenenleri okuyun",
            text: "Her satır klasörü, yeniden oluşturulabilir önbellek mi yoksa gitmiş bir uygulamanın artığı mı olduğunu ve boyutunu gösterir.",
          },
          {
            name: "İşaretleyin ve temizleyin",
            text: "Tanıdıklarınızı işaretli bırakın, emin olmadıklarınızın işaretini kaldırın, sonra alttaki temizle düğmesine basıp onaylayın.",
          },
          {
            name: "Çöp Kutusu'na bakın",
            text: "Artıklar Çöp Kutusu'ndadır. İsterseniz göz atın, sonra yeri geri almak için boşaltın.",
          },
        ],
      },
      sections: [
        {
          title: "Bir Uygulama Geride Ne Bırakır",
          content: [
            "Bir Mac uygulaması Uygulamalar'daki bir pakettir, ama çalışırken Library klasörünüze de yazar: Preferences'a ayarlar, Application Support'a veri ve indirilenler, WebKit ve HTTPStorages'a web verisi, Saved Application State'e pencere durumu ve korumalı alandaki uygulamalar için Containers veya Group Containers'a bir klasör. Uygulamayı Çöp Kutusu'na sürüklediğinizde bunların hiçbirine dokunulmaz.",
            "Çoğu artık küçüktür. Bazıları değildir: yıllarca medya önbellekleyen bir sohbet uygulaması, önizleme saklayan bir tasarım aracı, eklenti depolayan bir editör. Geri kazanmaya değer kısım budur ve bir kez deneyip sildiğiniz uygulamalarda birikir.",
          ],
        },
        {
          title: "Artıkları Elle Bulmak",
          content: [
            "Finder'da Git > Klasöre Git'i seçin, ~/Library yazıp Return'e basın. Application Support, Containers ve Preferences'ı açıp uygulamanın veya şirketin adını arayın. Library klasörünün orada kalıcı görünmesini istiyorsanız Git menüsünü açarken Option tuşunu basılı tutun.",
            "Benzer görünen adlara dikkat edin: bir şirketin çoğunlukla birden çok ürünü vardır ve klasörleri paylaşır. Bir klasörü kaldırmadan önce ait olduğu uygulamanın gerçekten gittiğini kontrol edin; Apple'a ait hiçbir şeye ve kimliğini bilmediğiniz hiçbir şeye dokunmayın.",
          ],
        },
        {
          title: "DiskMop Bunları Nasıl Bulur",
          content: [
            "DiskMop'un Library ve artıklar sayfası aynı klasörleri okur ve her klasörün tanımlayıcısıyla bir uygulamanın, İndirilenler'den veya harici diskten çalıştırılanlar dahil, herhangi bir yerde olup olmadığını macOS'a sorar. Yoksa ve klasöre 90 gündür bir şey yazılmamışsa artık olarak listelenir. 5 MB altındaki her şey dışarıda kalır, korumalı sistem adları atlanır.",
            "Hâlâ sahip olduğunuz uygulamalar için sayfa, kendi klasörlerinde tuttukları Cache, GPUCache ve Logs gibi önbelleği listeler; uygulama ihtiyaç duyunca bunu yeniden oluşturur. Son 24 saatin dosyaları kalır. Bir artık, geri yükleyebilmeniz için Çöp Kutusu'na gider; bu sayfa hiçbir uygulamayı kaldırmaz.",
          ],
        },
        {
          title: "Pişman Olmadan Temizlemek",
          content: [
            "Bir gün bir uygulamayı yeniden kurabilirseniz Preferences ve Application Support'unu tutun: ayarlarınızı ve hesaplarınızı taşırlar. Tamamen gittiyse artıklar ölü ağırlıktır. DiskMop bunları Çöp Kutusu'na taşıdığı için bir klasörü siz boşaltmadan önce geri getirebilirsiniz.",
            "Tarama ücretsizdir. Çok sayıda öğeyi aynı anda temizlemek tek seferlik satın alınan DiskMop Pro'nun parçasıdır; ücretsiz sürümde birkaç tekil kaldırmayı deneyebilirsiniz. Diskte başka ne yer kaplıyor için [Mac başlangıç diskini ne doldurur](/blog/mac-startup-disk-almost-full) ve [Mac'te büyük dosyalar nasıl bulunur](/blog/find-large-files-mac) yazılarına bakın.",
          ],
        },
      ],
      faq: [
        {
          question: "Uygulamayı Çöp Kutusu'na sürüklemek her şeyi kaldırır mı?",
          answer:
            "Hayır. Yalnızca uygulamanın kendisini kaldırır. Ayarlar, önbellekler ve destek dosyaları siz kaldırana kadar Library klasörünüzde kalır.",
        },
        {
          question: "Library'deki artık dosyaları silmek güvenli mi?",
          answer:
            "Gitmiş uygulamalara ait klasörler için güvenlidir ve DiskMop bunları Çöp Kutusu'na taşıdığı için birini geri yükleyebilirsiniz. Kimliğini bilmediğiniz klasörleri ve Apple'a ait hiçbir şeyi silmeyin.",
        },
        {
          question: "DiskMop bir uygulamanın gittiğini nasıl anlar?",
          answer:
            "macOS'a o tanımlayıcıyla yüklü bir uygulama olup olmadığını sorar ve bir klasörü yalnızca hiçbiri yoksa ve oraya 90 gündür bir şey yazılmamışsa artık olarak listeler.",
        },
        {
          question: "DiskMop uygulama kaldırır mı?",
          answer:
            "Hayır. Önce uygulamayı kendiniz kaldırın; DiskMop sonra geride bıraktığı dosyaları ve hâlâ kullandığınız uygulamaların önbelleğini bulur.",
        },
      ],
      verdict: [
        "Mac'te kaldırma işlemi uygulamada durur. Oluşturduğu ayarlar, önbellekler ve destek dosyaları kalır ve zamanla gigabaytlarca yer tutabilir.",
        "Mac için DiskMop gitmiş uygulamaların artıklarını ve tuttuklarınızın yeniden oluşturulabilir önbelleğini listeler, artıkları Çöp Kutusu'na gönderir ve kaldırma işini size bırakır. Tarama ücretsiz; ne kadarının beklediğini görebilirsiniz.",
      ],
      ctaText: "DiskMop ile Mac'inizdeki uygulama artıklarını bulun",
    },
    de: {
      title: "App-Überreste auf dem Mac nach dem Deinstallieren löschen",
      metaDescription:
        "Eine App in den Papierkorb zu ziehen, lässt Dateien in der Library zurück. So entfernen Sie App-Überreste und neu aufbaubare Caches sicher, von Hand oder mit DiskMop.",
      subtitle:
        "Was nach einer App in Ihrer Library bleibt und wie Sie es ohne Schaden aufräumen",
      intro: [
        "Kurz gesagt: Eine App in den Papierkorb zu legen entfernt die App selbst, nicht die Daten, die sie angelegt hat. Einstellungen, Caches und Supportdateien bleiben in Ihrer Library, manchmal jahrelang. Sie finden sie von Hand über Finder > Gehe zu > Gehe zu Ordner und den Namen der App oder lassen sie von DiskMop für Mac auf der Seite Library & Reste auflisten.",
        "Diese Anleitung zeigt, wo Überreste liegen, welche sich sicher entfernen lassen, wie DiskMop entscheidet, dass ein Ordner zu einer verschwundenen App gehört, und warum es Überreste in den Papierkorb legt statt sie zu löschen.",
      ],
      keyTakeaways: [
        "Das Entfernen einer App entfernt ihre Dateien in der Library nicht: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages und WebKit behalten Daten von Apps, die es nicht mehr gibt.",
        "DiskMops Seite Library & Reste listet zwei Arten von Einträgen: neu aufbaubaren Cache von Apps, die Sie noch haben, und Ordner verschwundener Apps.",
        "Ein Ordner gilt nur als Überrest, wenn macOS keine installierte App mit dieser Kennung meldet und 90 Tage lang nichts in den Ordner geschrieben wurde; Einträge unter 5 MB werden nicht gelistet.",
        "Überreste gehen in den Papierkorb, sodass sich eine Fehleinschätzung wiederherstellen lässt; Cache, den die App selbst neu aufbaut, wird geleert. DiskMop deinstalliert keine Apps.",
      ],
      dataTable: {
        caption: "Wo eine App Dateien in Ihrer Library hinterlässt",
        columns: [
          "Ordner in der Library",
          "Was er enthält",
          "Nach dem Entfernen der App",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Daten, Plug-ins und Downloads einer App",
            "Meist sicher zu entfernen",
            "Listet Überreste und neu aufbaubaren Cache",
          ],
          [
            "Containers und Group Containers",
            "Daten von Apps in der Sandbox",
            "Sicher, sobald die App weg ist",
            "Listet Überreste und neu aufbaubaren Cache",
          ],
          [
            "Preferences",
            "Einstellungsdateien (.plist)",
            "Winzig; entfernen, wenn Sie nicht neu installieren",
            "Listet nur ab 5 MB; winzige Einstellungsdateien werden übersprungen",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Fensterzustand, Webdaten und Cookies einer App",
            "Sicher zu entfernen",
            "Listet Überreste ab 5 MB",
          ],
        ],
      },
      howTo: {
        name: "App-Überreste auf dem Mac mit DiskMop löschen",
        totalTime: "PT10M",
        steps: [
          {
            name: "Zuerst die App entfernen",
            text: "Ziehen Sie die App aus Programme in den Papierkorb oder löschen Sie sie im Launchpad, wenn sie aus dem App Store stammt.",
          },
          {
            name: "Library & Reste öffnen",
            text: "Starten Sie DiskMop und wählen Sie in der Seitenleiste Library & Reste. Beim ersten Mal scannt es automatisch.",
          },
          {
            name: "Lesen, was gelistet ist",
            text: "Jede Zeile zeigt den Ordner, ob er neu aufbaubarer Cache oder Überrest einer verschwundenen App ist, und seine Größe.",
          },
          {
            name: "Markieren und bereinigen",
            text: "Lassen Sie Bekanntes markiert, heben Sie bei Unsicherem die Markierung auf, klicken Sie unten auf die Bereinigen-Taste und bestätigen Sie.",
          },
          {
            name: "Papierkorb prüfen",
            text: "Überreste liegen im Papierkorb. Sehen Sie bei Bedarf hinein und leeren Sie ihn dann, um den Platz zurückzubekommen.",
          },
        ],
      },
      sections: [
        {
          title: "Was eine App zurücklässt",
          content: [
            "Eine Mac-App ist ein Paket in Programme, schreibt beim Laufen aber auch in Ihre Library: Einstellungen in Preferences, Daten und Downloads in Application Support, Webdaten in WebKit und HTTPStorages, Fensterzustand in Saved Application State und bei Sandbox-Apps einen Ordner in Containers oder Group Containers. Wenn Sie die App in den Papierkorb ziehen, wird nichts davon angefasst.",
            "Die meisten Überreste sind klein. Manche nicht: eine Chat-App, die jahrelang Medien zwischengespeichert hat, ein Designwerkzeug, das Vorschauen behielt, ein Editor, der Erweiterungen ablegte. Das ist der Teil, den zurückzuholen sich lohnt, und er summiert sich über Apps, die Sie einmal ausprobiert und gelöscht haben.",
          ],
        },
        {
          title: "Überreste von Hand finden",
          content: [
            "Wählen Sie im Finder Gehe zu > Gehe zu Ordner, tippen Sie ~/Library und drücken Sie die Eingabetaste. Öffnen Sie Application Support, Containers und Preferences und suchen Sie den Namen der App oder ihres Herstellers. Halten Sie die Wahltaste beim Öffnen des Menüs Gehe zu, wenn die Library dort dauerhaft erscheinen soll.",
            "Vorsicht bei ähnlich aussehenden Namen: Ein Hersteller hat oft mehrere Produkte und teilt Ordner zwischen ihnen. Prüfen Sie vor dem Entfernen, dass die zugehörige App wirklich weg ist, und fassen Sie nichts von Apple und nichts Unbekanntes an.",
          ],
        },
        {
          title: "Wie DiskMop sie findet",
          content: [
            "DiskMops Seite Library & Reste liest dieselben Ordner und fragt macOS, ob irgendwo eine App mit der Kennung des Ordners existiert, auch Apps, die aus Downloads oder von einem externen Laufwerk laufen. Gibt es keine und wurde 90 Tage lang nichts in den Ordner geschrieben, wird er als Überrest gelistet. Alles unter 5 MB bleibt außen vor, geschützte Systemnamen werden übersprungen.",
            "Für Apps, die Sie noch haben, listet die Seite den Cache in deren eigenen Ordnern, etwa Cache, GPUCache und Logs, den die App bei Bedarf neu aufbaut. Dateien der letzten 24 Stunden bleiben. Ein Überrest geht in den Papierkorb, damit Sie ihn wiederherstellen können; diese Seite deinstalliert nie eine App.",
          ],
        },
        {
          title: "Aufräumen ohne Reue",
          content: [
            "Wenn Sie eine App eines Tages neu installieren könnten, behalten Sie ihre Preferences und Application Support: Sie enthalten Einstellungen und Konten. Ist sie endgültig weg, sind die Überreste toter Ballast. Da DiskMop sie in den Papierkorb legt, können Sie einen Ordner zurückholen, bevor Sie leeren.",
            "Das Scannen ist kostenlos. Viele Objekte auf einmal zu bereinigen gehört zu DiskMop Pro, einem einmaligen Kauf; in der kostenlosen Version können Sie ein paar einzelne Entfernungen testen. Was sonst das Laufwerk füllt, lesen Sie in [Was das Startvolume des Mac füllt](/blog/mac-startup-disk-almost-full) und [Große Dateien auf dem Mac finden](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Entfernt das Ziehen einer App in den Papierkorb alles?",
          answer:
            "Nein. Es entfernt die App selbst. Einstellungen, Caches und Supportdateien bleiben in Ihrer Library, bis Sie sie entfernen.",
        },
        {
          question: "Ist es sicher, Überreste in der Library zu löschen?",
          answer:
            "Für Ordner verschwundener Apps ja, und DiskMop legt sie in den Papierkorb, sodass Sie einen wiederherstellen können. Löschen Sie keine Ordner, die Sie nicht zuordnen können, und nichts von Apple.",
        },
        {
          question: "Woher weiß DiskMop, dass eine App weg ist?",
          answer:
            "Es fragt macOS, ob irgendwo eine App mit dieser Kennung installiert ist, und listet einen Ordner nur als Überrest, wenn keine existiert und dort 90 Tage lang nichts geschrieben wurde.",
        },
        {
          question: "Deinstalliert DiskMop Apps?",
          answer:
            "Nein. Entfernen Sie die App zuerst selbst; DiskMop findet danach ihre zurückgelassenen Dateien und den Cache von Apps, die Sie weiter nutzen.",
        },
      ],
      verdict: [
        "Das Deinstallieren auf dem Mac hört bei der App auf. Die angelegten Einstellungen, Caches und Supportdateien bleiben, und mit der Zeit können sie Gigabytes belegen.",
        "DiskMop für Mac listet Überreste verschwundener Apps und neu aufbaubaren Cache der behaltenen, legt Überreste in den Papierkorb und überlässt das Deinstallieren Ihnen. Das Scannen ist kostenlos, sodass Sie sehen, wie viel wartet.",
      ],
      ctaText: "App-Überreste auf Ihrem Mac mit DiskMop finden",
    },
    fr: {
      title: "Supprimer les restes d'une app sur Mac après la désinstallation",
      metaDescription:
        "Glisser une app dans la Corbeille laisse des fichiers dans la Bibliothèque. Retirez en sécurité les restes d'apps et les caches reconstructibles, à la main ou avec DiskMop.",
      subtitle:
        "Ce qui reste dans votre Bibliothèque quand une app a disparu, et comment le nettoyer sans rien casser",
      intro: [
        "En bref : placer une app dans la Corbeille supprime l'app, pas les données qu'elle a créées. Réglages, caches et fichiers de support restent dans votre dossier Bibliothèque, parfois des années. Vous pouvez les trouver à la main via Finder > Aller > Aller au dossier et le nom de l'app, ou laisser DiskMop pour Mac les lister sur sa page Library et restes.",
        "Ce guide montre où se trouvent les restes, lesquels peuvent être retirés sans risque, comment DiskMop décide qu'un dossier appartient à une app disparue et pourquoi il envoie les restes à la Corbeille au lieu de les supprimer.",
      ],
      keyTakeaways: [
        "Retirer une app ne retire pas ses fichiers dans la Bibliothèque : Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages et WebKit gardent les données d'apps qui n'existent plus.",
        "La page Library et restes de DiskMop liste deux sortes d'éléments : le cache reconstructible des apps que vous avez encore et les dossiers restants d'apps disparues.",
        "Un dossier n'est un reste que si macOS ne signale aucune app installée avec cet identifiant et que rien n'y a été écrit depuis 90 jours ; les éléments de moins de 5 Mo ne sont pas listés.",
        "Les restes vont à la Corbeille pour qu'une erreur de jugement se rattrape ; le cache que l'app reconstruit seule est vidé. DiskMop ne désinstalle pas les apps.",
      ],
      dataTable: {
        caption: "Où une app laisse des fichiers dans votre Bibliothèque",
        columns: [
          "Dossier de la Bibliothèque",
          "Ce qu'il contient",
          "Une fois l'app disparue",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Données, modules et téléchargements d'une app",
            "Généralement sûr à retirer",
            "Liste les restes et le cache reconstructible",
          ],
          [
            "Containers et Group Containers",
            "Données des apps en sandbox",
            "Sûr une fois l'app disparue",
            "Liste les restes et le cache reconstructible",
          ],
          [
            "Preferences",
            "Fichiers de réglages (.plist)",
            "Minuscule ; retirez si vous ne réinstallerez pas",
            "Ne liste que 5 Mo ou plus ; les petits fichiers de réglages sont ignorés",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "État des fenêtres, données web et cookies d'une app",
            "Sûr à retirer",
            "Liste les restes de 5 Mo ou plus",
          ],
        ],
      },
      howTo: {
        name: "Supprimer les restes d'apps sur Mac avec DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Retirer d'abord l'app",
            text: "Glissez l'app depuis Applications vers la Corbeille, ou supprimez-la depuis le Launchpad si elle vient de l'App Store.",
          },
          {
            name: "Ouvrir Library et restes",
            text: "Lancez DiskMop et choisissez Library et restes dans la barre latérale. Il analyse automatiquement la première fois.",
          },
          {
            name: "Lire ce qui est listé",
            text: "Chaque ligne indique le dossier, s'il s'agit de cache reconstructible ou du reste d'une app disparue, et sa taille.",
          },
          {
            name: "Cocher et nettoyer",
            text: "Laissez coché ce que vous reconnaissez, décochez ce dont vous doutez, puis cliquez sur le bouton de nettoyage en bas et confirmez.",
          },
          {
            name: "Vérifier la Corbeille",
            text: "Les restes sont dans la Corbeille. Jetez-y un œil si vous voulez, puis videz-la pour récupérer l'espace.",
          },
        ],
      },
      sections: [
        {
          title: "Ce qu'une app laisse derrière elle",
          content: [
            "Une app Mac est un paquet dans Applications, mais en fonctionnant elle écrit aussi dans votre Bibliothèque : réglages dans Preferences, données et téléchargements dans Application Support, données web dans WebKit et HTTPStorages, état des fenêtres dans Saved Application State et, pour les apps en sandbox, un dossier dans Containers ou Group Containers. Quand vous glissez l'app dans la Corbeille, rien de tout cela n'est touché.",
            "La plupart des restes sont petits. Certains non : une app de messagerie qui a mis en cache des années de médias, un outil de design qui a gardé des aperçus, un éditeur qui a stocké des extensions. C'est la part à récupérer, et elle s'additionne sur les apps essayées une fois puis supprimées.",
          ],
        },
        {
          title: "Trouver les restes à la main",
          content: [
            "Dans le Finder, choisissez Aller > Aller au dossier, tapez ~/Library et appuyez sur Retour. Ouvrez Application Support, Containers et Preferences et cherchez le nom de l'app ou de son éditeur. Maintenez Option en ouvrant le menu Aller si vous voulez que la Bibliothèque y apparaisse en permanence.",
            "Attention aux noms qui se ressemblent : un éditeur a souvent plusieurs produits et partage des dossiers entre eux. Avant de retirer un dossier, vérifiez que l'app correspondante a vraiment disparu, et ne touchez à rien d'Apple ni à rien que vous ne pouvez identifier.",
          ],
        },
        {
          title: "Comment DiskMop les trouve",
          content: [
            "La page Library et restes de DiskMop lit les mêmes dossiers et demande à macOS si une app portant l'identifiant de chaque dossier existe quelque part, y compris les apps lancées depuis Téléchargements ou un disque externe. Si aucune n'existe et que rien n'a été écrit dans le dossier depuis 90 jours, il est listé comme reste. Tout ce qui fait moins de 5 Mo est écarté et les noms système protégés sont ignorés.",
            "Pour les apps que vous avez encore, la page liste le cache qu'elles gardent dans leurs propres dossiers, comme Cache, GPUCache et Logs, que l'app reconstruit au besoin. Les fichiers des dernières 24 heures restent. Un reste va à la Corbeille pour que vous puissiez le restaurer ; cette page ne désinstalle jamais une app.",
          ],
        },
        {
          title: "Nettoyer sans regret",
          content: [
            "Si vous risquez de réinstaller une app un jour, gardez ses Preferences et son Application Support : ils contiennent vos réglages et comptes. Si elle a disparu pour de bon, les restes sont du poids mort. Comme DiskMop les place dans la Corbeille, vous pouvez récupérer un dossier avant de la vider.",
            "L'analyse est gratuite. Nettoyer beaucoup d'éléments à la fois fait partie de DiskMop Pro, un achat unique ; la version gratuite permet d'essayer quelques suppressions une par une. Pour ce qui remplit d'autre le disque, voir [ce qui remplit le disque de démarrage du Mac](/blog/mac-startup-disk-almost-full) et [comment trouver les gros fichiers sur Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Glisser une app dans la Corbeille supprime-t-il tout ?",
          answer:
            "Non. Cela supprime l'app elle-même. Réglages, caches et fichiers de support restent dans votre dossier Bibliothèque jusqu'à ce que vous les retiriez.",
        },
        {
          question: "Est-il sûr de supprimer les restes dans la Bibliothèque ?",
          answer:
            "C'est sûr pour les dossiers d'apps disparues, et DiskMop les place dans la Corbeille pour que vous puissiez en restaurer un. Ne supprimez pas les dossiers que vous ne pouvez pas identifier ni rien qui appartienne à Apple.",
        },
        {
          question: "Comment DiskMop sait-il qu'une app a disparu ?",
          answer:
            "Il demande à macOS si une app portant cet identifiant est installée quelque part, et ne liste un dossier comme reste que si aucune ne l'est et que rien n'y a été écrit depuis 90 jours.",
        },
        {
          question: "DiskMop désinstalle-t-il les apps ?",
          answer:
            "Non. Retirez d'abord l'app vous-même ; DiskMop trouve ensuite les fichiers qu'elle a laissés et le cache des apps que vous utilisez encore.",
        },
      ],
      verdict: [
        "La désinstallation sur Mac s'arrête à l'app. Les réglages, caches et fichiers de support qu'elle a créés restent et peuvent, avec le temps, occuper des gigaoctets.",
        "DiskMop pour Mac liste les restes des apps disparues et le cache reconstructible de celles que vous gardez, envoie les restes à la Corbeille et vous laisse la désinstallation. L'analyse est gratuite : vous voyez ce qui attend.",
      ],
      ctaText: "Trouvez les restes d'apps de votre Mac avec DiskMop",
    },
    es: {
      title: "Cómo eliminar los restos de apps en el Mac tras desinstalarlas",
      metaDescription:
        "Arrastrar una app a la Papelera deja archivos en tu Biblioteca. Encuentra y quita con seguridad los restos de apps y las cachés regenerables, a mano o con la página Library y restos de DiskMop.",
      subtitle:
        "Qué queda en tu Biblioteca cuando una app ya no está y cómo limpiarlo sin romper nada",
      intro: [
        "En resumen: mover una app a la Papelera elimina la app, no los datos que creó. Ajustes, cachés y archivos de soporte permanecen en tu carpeta Biblioteca, a veces durante años. Puedes encontrarlos a mano con Finder > Ir > Ir a la carpeta y el nombre de la app, o dejar que DiskMop para Mac los liste en su página Library y restos.",
        "Esta guía muestra dónde están los restos, cuáles se pueden quitar sin riesgo, cómo decide DiskMop que una carpeta pertenece a una app que ya no está y por qué envía los restos a la Papelera en lugar de borrarlos.",
      ],
      keyTakeaways: [
        "Quitar una app no quita sus archivos en Biblioteca: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages y WebKit conservan datos de apps que ya no existen.",
        "La página Library y restos de DiskMop lista dos tipos de elementos: caché regenerable de apps que aún tienes y carpetas sobrantes de apps que ya no están.",
        "Una carpeta cuenta como resto solo cuando macOS no informa de ninguna app instalada con ese identificador y nada ha escrito en ella en 90 días; los elementos de menos de 5 MB no se listan.",
        "Los restos van a la Papelera para poder restaurar una suposición errónea; la caché que la app regenera sola se vacía. DiskMop no desinstala apps.",
      ],
      dataTable: {
        caption: "Dónde deja archivos una app en tu Biblioteca",
        columns: [
          "Carpeta de Biblioteca",
          "Qué contiene",
          "Cuando la app ya no está",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Datos, extensiones y descargas de una app",
            "Normalmente seguro de quitar",
            "Lista restos y caché regenerable",
          ],
          [
            "Containers y Group Containers",
            "Datos de apps con sandbox",
            "Seguro cuando la app ya no está",
            "Lista restos y caché regenerable",
          ],
          [
            "Preferences",
            "Archivos de ajustes (.plist)",
            "Diminutos; quítalos si no vas a reinstalar",
            "Solo lista desde 5 MB; los archivos de ajustes diminutos se omiten",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Estado de ventanas, datos web y cookies de una app",
            "Seguro de quitar",
            "Lista restos de 5 MB o más",
          ],
        ],
      },
      howTo: {
        name: "Eliminar restos de apps en el Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Quita primero la app",
            text: "Arrastra la app de Aplicaciones a la Papelera, o bórrala desde Launchpad si vino de la App Store.",
          },
          {
            name: "Abre Library y restos",
            text: "Inicia DiskMop y elige Library y restos en la barra lateral. La primera vez analiza automáticamente.",
          },
          {
            name: "Lee lo que aparece",
            text: "Cada fila muestra la carpeta, si es caché regenerable o resto de una app que ya no está, y su tamaño.",
          },
          {
            name: "Marca y limpia",
            text: "Deja marcado lo que reconozcas, desmarca lo dudoso, pulsa el botón de limpiar de abajo y confirma.",
          },
          {
            name: "Revisa la Papelera",
            text: "Los restos están en la Papelera. Échales un vistazo si quieres y vacíala para recuperar el espacio.",
          },
        ],
      },
      sections: [
        {
          title: "Qué deja atrás una app",
          content: [
            "Una app de Mac es un paquete en Aplicaciones, pero al funcionar también escribe en tu Biblioteca: ajustes en Preferences, datos y descargas en Application Support, datos web en WebKit y HTTPStorages, estado de ventanas en Saved Application State y, para apps con sandbox, una carpeta en Containers o Group Containers. Al arrastrar la app a la Papelera, nada de eso se toca.",
            "La mayoría de los restos son pequeños. Algunos no: una app de chat que guardó años de contenido multimedia, una herramienta de diseño que conservó previsualizaciones, un editor que almacenó extensiones. Esa es la parte que merece recuperarse, y se suma entre las apps que probaste una vez y borraste.",
          ],
        },
        {
          title: "Encontrar restos a mano",
          content: [
            "En el Finder elige Ir > Ir a la carpeta, escribe ~/Library y pulsa Retorno. Abre Application Support, Containers y Preferences y busca el nombre de la app o de su empresa. Mantén pulsada Opción al abrir el menú Ir si quieres que la Biblioteca aparezca ahí de forma permanente.",
            "Cuidado con los nombres parecidos: una empresa suele tener varios productos y comparte carpetas entre ellos. Antes de quitar una carpeta, comprueba que la app a la que pertenece ya no está, y no toques nada de Apple ni nada que no puedas identificar.",
          ],
        },
        {
          title: "Cómo los encuentra DiskMop",
          content: [
            "La página Library y restos de DiskMop lee las mismas carpetas y pregunta a macOS si existe en algún sitio una app con el identificador de cada carpeta, incluidas las apps que se ejecutan desde Descargas o un disco externo. Si no existe ninguna y nada ha escrito en la carpeta en 90 días, se lista como resto. Se omite todo lo de menos de 5 MB y los nombres de sistema protegidos.",
            "Para las apps que aún tienes, la página lista la caché que guardan en sus propias carpetas, como Cache, GPUCache y Logs, que la app regenera cuando la necesita. Los archivos de las últimas 24 horas se quedan. Un resto va a la Papelera para que puedas restaurarlo; esta página nunca desinstala una app.",
          ],
        },
        {
          title: "Limpiar sin arrepentimientos",
          content: [
            "Si podrías reinstalar una app algún día, conserva sus Preferences y su Application Support: contienen tus ajustes y cuentas. Si se fue para siempre, los restos son lastre. Como DiskMop los mueve a la Papelera, puedes recuperar una carpeta antes de vaciarla.",
            "El análisis es gratuito. Limpiar muchos elementos a la vez forma parte de DiskMop Pro, una compra única; la versión gratuita permite probar unas pocas eliminaciones sueltas. Para lo demás que llena el disco, consulta [qué llena el disco de arranque del Mac](/blog/mac-startup-disk-almost-full) y [cómo encontrar archivos grandes en el Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "¿Arrastrar una app a la Papelera lo elimina todo?",
          answer:
            "No. Elimina la app en sí. Los ajustes, las cachés y los archivos de soporte permanecen en tu carpeta Biblioteca hasta que los quites.",
        },
        {
          question: "¿Es seguro borrar los archivos sobrantes de Biblioteca?",
          answer:
            "Es seguro para carpetas de apps que ya no están, y DiskMop las mueve a la Papelera para que puedas restaurar una. No borres carpetas que no puedas identificar ni nada que pertenezca a Apple.",
        },
        {
          question: "¿Cómo sabe DiskMop que una app ya no está?",
          answer:
            "Pregunta a macOS si hay instalada en algún sitio una app con ese identificador, y lista una carpeta como resto solo cuando no la hay y nada ha escrito allí en 90 días.",
        },
        {
          question: "¿Desinstala DiskMop las apps?",
          answer:
            "No. Quita primero la app tú mismo; DiskMop después encuentra los archivos que dejó y la caché de las apps que sigues usando.",
        },
      ],
      verdict: [
        "Desinstalar en un Mac se queda en la app. Los ajustes, cachés y archivos de soporte que creó permanecen y con el tiempo pueden ocupar gigabytes.",
        "DiskMop para Mac lista los restos de apps que ya no están y la caché regenerable de las que conservas, envía los restos a la Papelera y deja la desinstalación en tus manos. El análisis es gratuito, así que ves cuánto hay esperando.",
      ],
      ctaText: "Encuentra los restos de apps de tu Mac con DiskMop",
    },
    it: {
      title:
        "Come eliminare i residui delle app sul Mac dopo la disinstallazione",
      metaDescription:
        "Trascinare un'app nel Cestino lascia file nella tua Libreria. Trova e rimuovi in sicurezza i residui delle app e le cache rigenerabili, a mano o con la pagina Library e residui di DiskMop.",
      subtitle:
        "Cosa resta nella tua Libreria quando un'app non c'è più e come pulirlo senza rompere nulla",
      intro: [
        "In breve: spostare un'app nel Cestino rimuove l'app, non i dati che ha creato. Impostazioni, cache e file di supporto restano nella cartella Libreria, a volte per anni. Puoi trovarli a mano con Finder > Vai > Vai alla cartella e il nome dell'app, oppure farli elencare a DiskMop per Mac nella pagina Library e residui.",
        "Questa guida mostra dove stanno i residui, quali si possono rimuovere in sicurezza, come DiskMop decide che una cartella appartiene a un'app scomparsa e perché invia i residui al Cestino invece di cancellarli.",
      ],
      keyTakeaways: [
        "Rimuovere un'app non rimuove i suoi file nella Libreria: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages e WebKit conservano dati di app che non esistono più.",
        "La pagina Library e residui di DiskMop elenca due tipi di elementi: cache rigenerabile delle app che hai ancora e cartelle residue di app scomparse.",
        "Una cartella è un residuo solo quando macOS non segnala nessuna app installata con quell'identificatore e nulla vi ha scritto da 90 giorni; gli elementi sotto 5 MB non vengono elencati.",
        "I residui vanno nel Cestino così un errore di valutazione si può ripristinare; la cache che l'app ricrea da sola viene svuotata. DiskMop non disinstalla le app.",
      ],
      dataTable: {
        caption: "Dove un'app lascia file nella tua Libreria",
        columns: [
          "Cartella nella Libreria",
          "Cosa contiene",
          "Quando l'app non c'è più",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Dati, plug-in e download di un'app",
            "Di solito sicuro da rimuovere",
            "Elenca residui e cache rigenerabile",
          ],
          [
            "Containers e Group Containers",
            "Dati delle app in sandbox",
            "Sicuro quando l'app non c'è più",
            "Elenca residui e cache rigenerabile",
          ],
          [
            "Preferences",
            "File di impostazioni (.plist)",
            "Minuscoli; rimuovili se non reinstallerai",
            "Elenca solo da 5 MB in su; i piccoli file di impostazioni vengono saltati",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Stato delle finestre, dati web e cookie di un'app",
            "Sicuro da rimuovere",
            "Elenca residui da 5 MB in su",
          ],
        ],
      },
      howTo: {
        name: "Eliminare i residui delle app su Mac con DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Rimuovi prima l'app",
            text: "Trascina l'app da Applicazioni al Cestino, oppure eliminala da Launchpad se viene dall'App Store.",
          },
          {
            name: "Apri Library e residui",
            text: "Avvia DiskMop e scegli Library e residui nella barra laterale. La prima volta analizza automaticamente.",
          },
          {
            name: "Leggi cosa è elencato",
            text: "Ogni riga mostra la cartella, se è cache rigenerabile o residuo di un'app scomparsa, e la sua dimensione.",
          },
          {
            name: "Seleziona e pulisci",
            text: "Lascia selezionato ciò che riconosci, deseleziona ciò di cui dubiti, poi premi il pulsante di pulizia in basso e conferma.",
          },
          {
            name: "Controlla il Cestino",
            text: "I residui sono nel Cestino. Dai un'occhiata se vuoi, poi svuotalo per recuperare lo spazio.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa lascia dietro di sé un'app",
          content: [
            "Un'app per Mac è un pacchetto in Applicazioni, ma mentre gira scrive anche nella tua Libreria: impostazioni in Preferences, dati e download in Application Support, dati web in WebKit e HTTPStorages, stato delle finestre in Saved Application State e, per le app in sandbox, una cartella in Containers o Group Containers. Quando trascini l'app nel Cestino, nulla di tutto questo viene toccato.",
            "La maggior parte dei residui è piccola. Alcuni no: un'app di chat che ha messo in cache anni di contenuti multimediali, uno strumento di design che ha tenuto le anteprime, un editor che ha archiviato estensioni. È la parte che vale la pena recuperare e si somma tra le app provate una volta ed eliminate.",
          ],
        },
        {
          title: "Trovare i residui a mano",
          content: [
            "Nel Finder scegli Vai > Vai alla cartella, digita ~/Library e premi Invio. Apri Application Support, Containers e Preferences e cerca il nome dell'app o della sua azienda. Tieni premuto Opzione aprendo il menu Vai se vuoi che la Libreria vi compaia in modo permanente.",
            "Attenzione ai nomi simili: un'azienda ha spesso più prodotti e condivide cartelle tra loro. Prima di rimuovere una cartella, verifica che l'app a cui appartiene non ci sia davvero più e non toccare nulla di Apple né nulla che non sai identificare.",
          ],
        },
        {
          title: "Come li trova DiskMop",
          content: [
            "La pagina Library e residui di DiskMop legge le stesse cartelle e chiede a macOS se esiste da qualche parte un'app con l'identificatore di ciascuna cartella, comprese le app eseguite da Download o da un disco esterno. Se non ne esiste nessuna e nulla ha scritto nella cartella da 90 giorni, viene elencata come residuo. Tutto ciò che è sotto 5 MB viene escluso e i nomi di sistema protetti vengono saltati.",
            "Per le app che hai ancora, la pagina elenca la cache che tengono nelle proprie cartelle, come Cache, GPUCache e Logs, che l'app ricrea quando serve. I file delle ultime 24 ore restano. Un residuo va nel Cestino così puoi ripristinarlo; questa pagina non disinstalla mai un'app.",
          ],
        },
        {
          title: "Pulire senza rimpianti",
          content: [
            "Se un giorno potresti reinstallare un'app, tieni le sue Preferences e Application Support: contengono impostazioni e account. Se se n'è andata per sempre, i residui sono zavorra. Poiché DiskMop li sposta nel Cestino, puoi riportare indietro una cartella prima di svuotarlo.",
            "La scansione è gratuita. Pulire molti elementi insieme fa parte di DiskMop Pro, un acquisto una tantum; la versione gratuita permette di provare alcune rimozioni singole. Per ciò che altro riempie il disco, vedi [cosa riempie il disco di avvio del Mac](/blog/mac-startup-disk-almost-full) e [come trovare i file grandi su Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Trascinare un'app nel Cestino rimuove tutto?",
          answer:
            "No. Rimuove l'app stessa. Impostazioni, cache e file di supporto restano nella cartella Libreria finché non li rimuovi.",
        },
        {
          question: "È sicuro eliminare i file residui nella Libreria?",
          answer:
            "Lo è per le cartelle di app che non ci sono più, e DiskMop le sposta nel Cestino così puoi ripristinarne una. Non eliminare cartelle che non sai identificare né nulla che appartenga ad Apple.",
        },
        {
          question: "Come sa DiskMop che un'app non c'è più?",
          answer:
            "Chiede a macOS se un'app con quell'identificatore è installata da qualche parte ed elenca una cartella come residuo solo quando non lo è e nulla vi ha scritto da 90 giorni.",
        },
        {
          question: "DiskMop disinstalla le app?",
          answer:
            "No. Rimuovi prima l'app tu stesso; DiskMop poi trova i file che ha lasciato e la cache delle app che usi ancora.",
        },
      ],
      verdict: [
        "La disinstallazione su Mac si ferma all'app. Impostazioni, cache e file di supporto che ha creato restano e col tempo possono occupare gigabyte.",
        "DiskMop per Mac elenca i residui delle app scomparse e la cache rigenerabile di quelle che tieni, invia i residui al Cestino e lascia a te la disinstallazione. La scansione è gratuita, così vedi quanto aspetta.",
      ],
      ctaText: "Trova i residui delle app sul tuo Mac con DiskMop",
    },
    pt: {
      title: "Como apagar restos de apps no Mac depois de desinstalar",
      metaDescription:
        "Arrastar um app para o Lixo deixa arquivos na sua Biblioteca. Encontre e remova com segurança restos de apps e caches regeneráveis, à mão ou com a página Library e restos do DiskMop.",
      subtitle:
        "O que fica na Biblioteca depois que um app some e como limpar sem quebrar nada",
      intro: [
        "Resumindo: mover um app para o Lixo remove o app, não os dados que ele criou. Ajustes, caches e arquivos de suporte permanecem na sua pasta Biblioteca, às vezes por anos. Você pode encontrá-los à mão com Finder > Ir > Ir para a Pasta e o nome do app, ou deixar o DiskMop para Mac listá-los na página Library e restos.",
        "Este guia mostra onde ficam os restos, quais podem ser removidos com segurança, como o DiskMop decide que uma pasta pertence a um app que sumiu e por que ele envia os restos ao Lixo em vez de apagá-los.",
      ],
      keyTakeaways: [
        "Remover um app não remove seus arquivos na Biblioteca: Application Support, Containers, Group Containers, Preferences, Saved Application State, HTTPStorages e WebKit guardam dados de apps que não existem mais.",
        "A página Library e restos do DiskMop lista dois tipos de itens: cache regenerável de apps que você ainda tem e pastas restantes de apps que sumiram.",
        "Uma pasta só conta como resto quando o macOS não informa nenhum app instalado com aquele identificador e nada escreveu nela há 90 dias; itens abaixo de 5 MB não são listados.",
        "Os restos vão para o Lixo para que um palpite errado possa ser restaurado; o cache que o app regenera sozinho é esvaziado. O DiskMop não desinstala apps.",
      ],
      dataTable: {
        caption: "Onde um app deixa arquivos na sua Biblioteca",
        columns: [
          "Pasta na Biblioteca",
          "O que guarda",
          "Depois que o app some",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "Dados, plug-ins e downloads de um app",
            "Em geral seguro remover",
            "Lista restos e cache regenerável",
          ],
          [
            "Containers e Group Containers",
            "Dados de apps em sandbox",
            "Seguro quando o app some",
            "Lista restos e cache regenerável",
          ],
          [
            "Preferences",
            "Arquivos de ajustes (.plist)",
            "Minúsculos; remova se não for reinstalar",
            "Só lista a partir de 5 MB; arquivos de ajustes minúsculos são ignorados",
          ],
          [
            "Saved Application State, HTTPStorages, WebKit",
            "Estado de janelas, dados web e cookies de um app",
            "Seguro remover",
            "Lista restos de 5 MB ou mais",
          ],
        ],
      },
      howTo: {
        name: "Apagar restos de apps no Mac com o DiskMop",
        totalTime: "PT10M",
        steps: [
          {
            name: "Remova o app primeiro",
            text: "Arraste o app de Aplicativos para o Lixo, ou apague-o pelo Launchpad se veio da App Store.",
          },
          {
            name: "Abra Library e restos",
            text: "Inicie o DiskMop e escolha Library e restos na barra lateral. Na primeira vez ele verifica automaticamente.",
          },
          {
            name: "Leia o que está listado",
            text: "Cada linha mostra a pasta, se é cache regenerável ou resto de um app que sumiu, e o tamanho.",
          },
          {
            name: "Marque e limpe",
            text: "Deixe marcado o que reconhece, desmarque o que tiver dúvida, clique no botão de limpar embaixo e confirme.",
          },
          {
            name: "Confira o Lixo",
            text: "Os restos estão no Lixo. Dê uma olhada se quiser e esvazie-o para recuperar o espaço.",
          },
        ],
      },
      sections: [
        {
          title: "O que um app deixa para trás",
          content: [
            "Um app de Mac é um pacote em Aplicativos, mas ao rodar também escreve na sua Biblioteca: ajustes em Preferences, dados e downloads em Application Support, dados web em WebKit e HTTPStorages, estado de janelas em Saved Application State e, para apps em sandbox, uma pasta em Containers ou Group Containers. Ao arrastar o app para o Lixo, nada disso é tocado.",
            "A maioria dos restos é pequena. Alguns não: um app de chat que guardou anos de mídia em cache, uma ferramenta de design que manteve prévias, um editor que armazenou extensões. Essa é a parte que vale recuperar, e ela soma entre os apps que você testou uma vez e apagou.",
          ],
        },
        {
          title: "Encontrar restos à mão",
          content: [
            "No Finder, escolha Ir > Ir para a Pasta, digite ~/Library e pressione Return. Abra Application Support, Containers e Preferences e procure o nome do app ou da empresa. Segure Option ao abrir o menu Ir se quiser que a Biblioteca apareça ali de forma permanente.",
            "Cuidado com nomes parecidos: uma empresa costuma ter vários produtos e compartilha pastas entre eles. Antes de remover uma pasta, confirme que o app a que ela pertence realmente sumiu e não mexa em nada da Apple nem em nada que não consiga identificar.",
          ],
        },
        {
          title: "Como o DiskMop os encontra",
          content: [
            "A página Library e restos do DiskMop lê as mesmas pastas e pergunta ao macOS se existe em algum lugar um app com o identificador de cada pasta, incluindo apps executados de Downloads ou de um disco externo. Se nenhum existe e nada escreveu na pasta em 90 dias, ela é listada como resto. Tudo abaixo de 5 MB fica de fora e nomes de sistema protegidos são ignorados.",
            "Para os apps que você ainda tem, a página lista o cache que eles guardam nas próprias pastas, como Cache, GPUCache e Logs, que o app regenera quando precisa. Arquivos das últimas 24 horas ficam. Um resto vai para o Lixo para você poder restaurá-lo; essa página nunca desinstala um app.",
          ],
        },
        {
          title: "Limpar sem arrependimentos",
          content: [
            "Se você puder reinstalar um app um dia, mantenha as Preferences e o Application Support dele: guardam seus ajustes e contas. Se ele se foi para sempre, os restos são peso morto. Como o DiskMop os move para o Lixo, você pode trazer uma pasta de volta antes de esvaziá-lo.",
            "A verificação é gratuita. Limpar muitos itens de uma vez faz parte do DiskMop Pro, uma compra única; a versão gratuita permite testar algumas remoções individuais. Para o que mais enche o disco, veja [o que enche o disco de inicialização do Mac](/blog/mac-startup-disk-almost-full) e [como encontrar arquivos grandes no Mac](/blog/find-large-files-mac).",
          ],
        },
      ],
      faq: [
        {
          question: "Arrastar um app para o Lixo remove tudo?",
          answer:
            "Não. Remove o próprio app. Ajustes, caches e arquivos de suporte permanecem na sua pasta Biblioteca até você removê-los.",
        },
        {
          question: "É seguro apagar arquivos restantes na Biblioteca?",
          answer:
            "É seguro para pastas de apps que sumiram, e o DiskMop as move para o Lixo para você restaurar uma. Não apague pastas que não consiga identificar nem nada que pertença à Apple.",
        },
        {
          question: "Como o DiskMop sabe que um app sumiu?",
          answer:
            "Ele pergunta ao macOS se há um app com aquele identificador instalado em algum lugar e só lista uma pasta como resto quando não há e nada escreveu nela há 90 dias.",
        },
        {
          question: "O DiskMop desinstala apps?",
          answer:
            "Não. Remova o app você mesmo primeiro; o DiskMop depois encontra os arquivos que ele deixou e o cache dos apps que você ainda usa.",
        },
      ],
      verdict: [
        "Desinstalar no Mac para no app. Os ajustes, caches e arquivos de suporte que ele criou permanecem e, com o tempo, podem ocupar gigabytes.",
        "O DiskMop para Mac lista restos de apps que sumiram e o cache regenerável dos que você mantém, envia os restos ao Lixo e deixa a desinstalação com você. A verificação é gratuita, então você vê quanto está esperando.",
      ],
      ctaText: "Encontre restos de apps no seu Mac com o DiskMop",
    },
    ja: {
      title: "Macでアンインストール後に残るアプリの残骸を削除する方法",
      metaDescription:
        "アプリをゴミ箱に入れても、ライブラリにファイルが残ります。アプリの残骸と再生成できるキャッシュを手動で、またはDiskMopの「Libraryと残骸」ページで安全に見つけて削除します。",
      subtitle:
        "アプリがなくなった後にライブラリに残るものと、何も壊さずに片付ける方法",
      intro: [
        "結論から言うと、アプリをゴミ箱に入れて消えるのはアプリ本体だけで、アプリが作ったデータは残ります。設定、キャッシュ、サポートファイルは、ときに何年もライブラリフォルダに残ります。Finderの「移動」>「フォルダへ移動」とアプリ名で手動で探すか、Mac版DiskMopの「Libraryと残骸」ページに一覧させることができます。",
        "このガイドでは、残骸がどこにあるか、どれを安全に削除できるか、DiskMopがフォルダを「なくなったアプリのもの」と判断する方法、残骸を削除せずゴミ箱へ送る理由を説明します。",
      ],
      keyTakeaways: [
        "アプリを削除しても、ライブラリ内のファイルは消えません。Application Support、Containers、Group Containers、Preferences、Saved Application State、HTTPStorages、WebKitには、もう存在しないアプリのデータが残ります。",
        "DiskMopの「Libraryと残骸」ページは2種類の項目を一覧します。まだ使っているアプリの再生成できるキャッシュと、なくなったアプリの残骸フォルダです。",
        "フォルダが残骸と見なされるのは、macOSがその識別子のインストール済みアプリを報告せず、かつ90日間そのフォルダに何も書き込まれていない場合だけです。5MB未満の項目は一覧に出ません。",
        "残骸はゴミ箱へ移るので、判断を誤っても元に戻せます。アプリが自分で再生成するキャッシュは空にされます。DiskMopはアプリをアンインストールしません。",
      ],
      dataTable: {
        caption: "アプリがライブラリにファイルを残す場所",
        columns: [
          "ライブラリ内のフォルダ",
          "入っているもの",
          "アプリがなくなった後",
          "DiskMop",
        ],
        rows: [
          [
            "Application Support",
            "アプリのデータ、プラグイン、ダウンロード",
            "通常は削除して安全",
            "残骸と再生成できるキャッシュを一覧",
          ],
          [
            "ContainersとGroup Containers",
            "サンドボックス内アプリのデータ",
            "アプリがなくなれば安全",
            "残骸と再生成できるキャッシュを一覧",
          ],
          [
            "Preferences",
            "設定ファイル（.plist）",
            "ごく小さい。再インストールしないなら削除",
            "5MB以上のみ一覧し、小さな設定ファイルは対象外",
          ],
          [
            "Saved Application State、HTTPStorages、WebKit",
            "アプリのウィンドウ状態、Webデータ、Cookie",
            "削除して安全",
            "5MB以上の残骸を一覧",
          ],
        ],
      },
      howTo: {
        name: "DiskMopでMacのアプリの残骸を削除する",
        totalTime: "PT10M",
        steps: [
          {
            name: "まずアプリを削除する",
            text: "アプリを「アプリケーション」からゴミ箱へドラッグするか、App Store製ならLaunchpadから削除します。",
          },
          {
            name: "「Libraryと残骸」を開く",
            text: "DiskMopを起動し、サイドバーで「Libraryと残骸」を選びます。初回は自動でスキャンされます。",
          },
          {
            name: "表示された内容を読む",
            text: "各行に、フォルダ、再生成できるキャッシュかなくなったアプリの残骸か、サイズが表示されます。",
          },
          {
            name: "チェックして整理する",
            text: "見覚えのあるものはチェックしたまま、不安なもののチェックは外し、下部の整理ボタンを押して確定します。",
          },
          {
            name: "ゴミ箱を確認する",
            text: "残骸はゴミ箱に入っています。必要なら中を確認し、容量を取り戻すために空にします。",
          },
        ],
      },
      sections: [
        {
          title: "アプリが残すもの",
          content: [
            "Macのアプリは「アプリケーション」内のパッケージですが、動作中はライブラリにも書き込みます。設定はPreferences、データとダウンロードはApplication Support、WebデータはWebKitとHTTPStorages、ウィンドウ状態はSaved Application State、サンドボックス内のアプリではContainersまたはGroup Containersのフォルダです。アプリをゴミ箱に入れても、これらには触れません。",
            "残骸の多くは小さなものです。ただし、何年分ものメディアをキャッシュしたチャットアプリ、プレビューを保持したデザインツール、拡張機能を保存したエディタなど、そうでないものもあります。取り戻す価値があるのはその部分で、一度試して削除したアプリ分が積み重なります。",
          ],
        },
        {
          title: "残骸を手動で探す",
          content: [
            "Finderで「移動」>「フォルダへ移動」を選び、~/Libraryと入力してReturnキーを押します。Application Support、Containers、Preferencesを開き、アプリまたは開発元の名前を探します。ライブラリが「移動」メニューに常に表示されるようにするには、メニューを開くときにOptionキーを押します。",
            "似た名前に注意してください。開発元は複数の製品を持ち、フォルダを共有していることがよくあります。フォルダを削除する前に、それが属するアプリが本当になくなったか確認し、Apple製のものや識別できないものには触れないでください。",
          ],
        },
        {
          title: "DiskMopが残骸を見つける方法",
          content: [
            "DiskMopの「Libraryと残骸」ページは同じフォルダを読み、各フォルダの識別子を持つアプリが、ダウンロードや外付けドライブから実行されているものも含め、どこかに存在するかをmacOSに尋ねます。存在せず、90日間フォルダに何も書き込まれていなければ、残骸として一覧されます。5MB未満のものは除外され、保護されたシステム名はスキップされます。",
            "まだ使っているアプリについては、アプリ自身のフォルダ内にあるCache、GPUCache、Logsなどのキャッシュを一覧します。アプリは必要なときにこれを再生成します。直近24時間のファイルは残ります。残骸は復元できるようゴミ箱へ移り、このページがアプリをアンインストールすることはありません。",
          ],
        },
        {
          title: "後悔せずに整理する",
          content: [
            "いつか再インストールするかもしれないアプリは、PreferencesとApplication Supportを残しておきましょう。設定やアカウントが入っています。完全になくなったなら、残骸は不要な重荷です。DiskMopはそれらをゴミ箱へ移すので、空にする前ならフォルダを戻せます。",
            "スキャンは無料です。多数の項目をまとめて整理するのは買い切りのDiskMop Proの機能で、無料版では1件ずつの削除を数回試せます。ディスクを埋めているほかのものについては、[Macの起動ディスクを埋めているもの](/blog/mac-startup-disk-almost-full)と[Macで大きなファイルを見つける方法](/blog/find-large-files-mac)を参照してください。",
          ],
        },
      ],
      faq: [
        {
          question: "アプリをゴミ箱にドラッグすればすべて消えますか？",
          answer:
            "いいえ。消えるのはアプリ本体だけです。設定、キャッシュ、サポートファイルは、自分で削除するまでライブラリフォルダに残ります。",
        },
        {
          question: "ライブラリに残ったファイルを削除しても安全ですか？",
          answer:
            "なくなったアプリのフォルダなら安全で、DiskMopはそれらをゴミ箱へ移すので1つずつ復元できます。識別できないフォルダやApple製のものは削除しないでください。",
        },
        {
          question: "DiskMopはアプリがなくなったことをどう知りますか？",
          answer:
            "その識別子のアプリがどこかにインストールされているかをmacOSに尋ね、存在せず、かつ90日間何も書き込まれていない場合にだけ、フォルダを残骸として一覧します。",
        },
        {
          question: "DiskMopはアプリをアンインストールしますか？",
          answer:
            "いいえ。まず自分でアプリを削除してください。DiskMopはその後、残されたファイルと、まだ使っているアプリのキャッシュを見つけます。",
        },
      ],
      verdict: [
        "Macでのアンインストールはアプリ本体で止まります。作られた設定、キャッシュ、サポートファイルは残り、時間とともに数GBになることもあります。",
        "Mac版DiskMopは、なくなったアプリの残骸と使い続けるアプリの再生成できるキャッシュを一覧し、残骸をゴミ箱へ送り、アンインストールはあなたに任せます。スキャンは無料なので、どれだけ溜まっているか確認できます。",
      ],
      ctaText: "DiskMopでMacのアプリの残骸を見つける",
    },
  },
};
