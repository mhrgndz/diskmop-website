import type { Article } from '../types';

export const flushDnsCache: Article = {
  slug: 'flush-dns-cache',
  type: 'guide',
  category: 'Windows Tips',
  date: '2026-07-08',
  readingTime: 6,
  content: {
    tr: {
      title: 'DNS Önbelleğini Temizleme: Windows ve Mac (2 Yöntem)',
      metaDescription:
        'DNS önbelleğini temizleme rehberi: Windows\'ta ipconfig /flushdns, Mac\'te Terminal komutları ve terminal gerektirmeyen tek tıklık yöntemi öğrenin.',
      subtitle: 'İki Sistem İçin Kopyala-Yapıştır Komutlar ve Terminalsiz Bir Alternatif',
      intro: [
        'Windows\'ta DNS önbelleğini temizlemek için Komut İstemi\'ni açıp ipconfig /flushdns komutunu çalıştırın. Mac\'te ise Terminal\'i açın ve sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder komutunu girin. Her iki komut da yaklaşık bir saniyede tamamlanır ve kayıtlı tüm DNS girdilerini silerek bilgisayarınızın bir sonraki ziyarette güncel adresleri sorgulamasını sağlar.',
        'Kısa cevap bu ve çoğu kullanıcı için gerçekten yeterli. Bu rehberde her iki komutu adım adım anlatacak, DNS temizlemenin tam olarak ne işe yaradığını açıklayacak, terminale hiç dokunmak istemeyenler için tek tıklık bir alternatif gösterecek ve DNS temizliğinin çözemeyeceği bağlantı sorunları konusunda dürüst olacağız.',
      ],
      sections: [
        {
          title: 'DNS Önbelleği Ne İşe Yarar, Ne Zaman Temizlenmeli?',
          content: [
            'DNS (Alan Adı Sistemi), internetin adres defteridir: example.com gibi bir adı, bilgisayarınızın gerçekte bağlandığı sayısal IP adresine çevirir. Her sayfa yüklemesinde bu sorguyu tekrarlamamak için işletim sisteminiz yerel bir DNS önbelleği tutar — yakın zamanda çözümlenen adların ve adreslerinin küçük bir veritabanı. Sık ziyaret ettiğiniz sitelerin bu kadar hızlı açılmasının nedenlerinden biri de budur.',
            'Peki DNS önbelleğini temizlemek ne yapar? Yalnızca bu yerel veritabanını boşaltır. Hiçbir program kaldırılmaz, hiçbir ayar değişmez; sisteminiz bir sonraki ziyarette her site için DNS sunucusundan taze sorgu yapar. Temizlikten sonraki ilk ziyaret saniyenin küçük bir bölümü kadar daha uzun sürebilir, sonrasında her şey eskisi gibi çalışır.',
            'Bir site yeni bir sunucuya taşındıysa ve siz hâlâ eskisine yönlendiriliyorsanız, bir site telefonunuzda açılıp bilgisayarınızda açılmıyorsa, DNS sağlayıcınızı değiştirdiyseniz veya tarayıcıda DNS_PROBE_FINISHED_NXDOMAIN gibi hatalar görüyorsanız temizlik denemeye değer. Ayrıca küçük bir gizlilik kazancı da vardır: Windows\'ta klavyenizin başına geçen herkes ipconfig /displaydns komutuyla son ziyaret edilen alan adlarını listeleyebilir; temizlik bu listeyi siler.',
          ],
        },
        {
          title: 'Windows 10 ve 11\'de ipconfig /flushdns ile DNS Temizleme',
          content: [
            'Windows 11\'de Başlat düğmesine sağ tıklayıp Terminal\'i seçin; Windows 10\'da Windows tuşuna basıp cmd yazın ve Komut İstemi\'ni açın. Bu komut için yönetici yetkisi gerekmez. Açılan pencereye ipconfig /flushdns yazın ve Enter\'a basın.',
            'Windows, DNS Çözümleyici Önbelleği başarıyla temizlendi mesajıyla yanıt verir. İşlemin tamamı budur — yeniden başlatma yok, kesinti yok ve dilediğiniz sıklıkta güvenle tekrarlayabilirsiniz. PowerShell kullanmayı tercih ediyorsanız Clear-DnsClientCache komutu aynı işi yapar.',
            'Bilmeye değer iki ilgili komut daha var. ipconfig /displaydns, önbelleğin mevcut içeriğini listeler; inatçı bir kaydın gerçekten silinip silinmediğini kontrol etmek için kullanışlıdır. Daha derin bir ağ sorunundan şüpheleniyorsanız, ipconfig /release ve ardından ipconfig /renew komutları IP adresi kiralamanızı da yeniler — Windows 11\'de bağlantı sorunlarını giderirken sık kullanılan bir ek adımdır.',
          ],
        },
        {
          title: 'macOS\'te Terminal ile DNS Temizleme',
          content: [
            'Mac\'te DNS önbelleğini temizlemek için Terminal\'i açın — Command ve Boşluk tuşlarına basıp Terminal yazın, ya da Uygulamalar altındaki İzlenceler klasöründen bulun. Şu satırı yapıştırıp Return\'e basın: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Aynı komut macOS 12 Monterey ve sonraki tüm sürümlerde çalışır.',
            'Komut sudo ile başladığı için macOS yönetici parolanızı ister. Parolayı yazıp Return\'e basın — yazarken imleç hareket etmez ve hiçbir karakter görünmez; bu Terminal\'in normal davranışıdır, pencere donmuş değildir. Windows\'un aksine macOS bir onay mesajı göstermez: komut sessizce tamamlanır ve önbellek temizlenmiş olur.',
            'Komutun iki parçası farklı işler yapar: dscacheutil -flushcache dizin hizmeti önbelleğini boşaltır, killall -HUP mDNSResponder ise DNS sorgularını yöneten sürece yeniden yükleme sinyali gönderir. İkisini birlikte çalıştırmak, modern bir Mac\'te bayat kayıtların tamamen silindiğinden emin olmanın yaygın olarak önerilen yoludur.',
          ],
        },
        {
          title: 'DNS Önbelleğinizi Terminal Olmadan Temizleyin',
          content: [
            'Yukarıdaki komutlar ücretsizdir, hızlıdır ve her iki işletim sistemine yerleşiktir — komut satırıyla aranız iyiyse gerçekten başka bir şeye ihtiyacınız yok. Ancak birçok kullanıcı için durum böyle değil; rutin bir bakım işleminin komut sözdizimi ezberlemeyi veya hiçbir geri bildirim vermeyen bir pencereye sudo yazmayı gerektirmesi için bir neden yok.',
            'Disk Mop\'un DNS önbellek temizleyicisi (DNS Cache Cleaner), aynı işi hem Windows 10/11\'de hem de macOS 12 ve sonrasında tek tıkla yapar. Uygulamayı açın, DNS Cache Cleaner\'ı seçin, bir kez tıklayın — ezberlenecek komut yok, yanlış yazma riski yok ve sonuç terminal yöntemiyle birebir aynı.',
            'Bu kolaylık katlanarak artar, çünkü DNS temizliği nadiren tek başına yapılır. Sorun giderirken genellikle tarayıcı önbelleklerini de temizlemek istersiniz ve Disk Mop iki aracı aynı arayüzde yan yana sunar. Sınırlı özelliklere sahip ücretsiz bir sürümü vardır; Pro lisansı ise abonelik olmadan tek seferlik $19.90\'dır.',
          ],
        },
        {
          title: 'Sayfalar Sorun Çıkarıyorsa Tarayıcı Önbelleğini de Temizleyin',
          content: [
            'İşletim sisteminizin DNS önbelleği, sizinle bir web sitesi arasındaki tek önbellek değildir. Chrome kendi dahili DNS önbelleğini tutar: adres çubuğuna chrome://net-internals/#dns yazın ve Clear host cache düğmesine tıklayarak boşaltın. Tarayıcılar ayrıca sayfaların, görsellerin ve betiklerin kopyalarını da saklar; bu yüzden başarılı bir DNS temizliğinden sonra bile bir sitenin eski veya bozuk sürümünü görmeye devam edebilirsiniz.',
            'Chrome, Edge veya Firefox\'ta normal tarayıcı önbelleğini temizlemek için Ctrl+Shift+Delete (Mac\'te Command+Shift+Delete) tuşlarına basın, önbelleğe alınmış görseller ve dosyalar seçeneğini işaretleyin ve onaylayın. Safari\'de Ayarlar altındaki Gelişmiş bölümünden Geliştir menüsünü etkinleştirin, ardından Geliştir menüsünden Önbellekleri Boşalt seçeneğini kullanın. Bunu DNS temizliğiyle birlikte yapmak, bayat verilerin saklanabileceği her iki katmanı da kapsar.',
            'Disk Mop\'un tarayıcı önbellek temizleyicisi (Browser Cache Cleaner) Chrome, Firefox, Edge ve Safari\'yi tek ekrandan yönetir; her tarayıcıda ayrı ayrı kısayol kombinasyonları tekrarlamak yerine hepsinin önbelleğini tek seferde temizlersiniz. DNS Cache Cleaner ile birlikte kullanıldığında, sorun gidermenin klasik önbellek temizleme rutini iki tıklamaya iner.',
          ],
        },
        {
          title: 'DNS Temizliği Hangi Sorunları Çözmez?',
          content: [
            'Dürüst bir kapsam notu: DNS temizliği yalnızca bilgisayarınızdaki bayat ad çözümlemelerini düzeltir, başka hiçbir şeyi değil. Web sitesinin kendisi çöktüyse, Wi-Fi bağlantınız kopuyorsa veya internet sağlayıcınızda kesinti varsa DNS temizliği yardımcı olmaz. Günlük gezinmeyi ölçülebilir şekilde hızlandırmaz da — önbellek zaten işleri hızlandırmak için vardır; temizlemek bir sorun giderme adımıdır, performans ayarı değil.',
            'Yönlendiriciniz de kendi DNS önbelleğini tutar ve bu katman bilgisayarınızın erişiminin dışındadır. Temizlik işe yaramadıysa yönlendiriciyi yeniden başlatın ve sorunun düzelip düzelmediğine bakın. Israrla devam eden DNS_PROBE_FINISHED hataları çoğu zaman kullandığınız DNS sunucusunun sorun yaşadığı anlamına gelir; ağ ayarlarınızı 1.1.1.1 veya 8.8.8.8 gibi genel bir çözümleyiciye geçirmek, tekrar tekrar temizlik yapmaktan daha sık sonuç verir.',
            'Son olarak, bir cihaz bir ağda çalışıp diğerinde çalışmıyorsa ya da diğer uygulamalar çevrimiçiyken tüm tarayıcılar başarısız oluyorsa, sorun büyük olasılıkla DNS önbelleği değil güvenlik duvarı, VPN veya proxy yapılandırmasıdır. DNS temizliği ücretsiz ve risksiz bir ilk adımdır — ancak belirtiler başka yeri işaret ediyorsa burada durmayın.',
          ],
        },
      ],
      verdict: [
        'DNS önbelleğini temizleme tek bir komuttan ibarettir: Windows\'ta ipconfig /flushdns, Mac\'te sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Güvenli ve anlıktır; bir site yanlış çözümlendiğinde, DNS hataları göründüğünde veya yalnızca tek bir makinede açılmadığında atılacak ilk doğru adımdır.',
        'Terminali hiç açmak istemiyorsanız, Disk Mop aynı işlemi tek tıklamaya indirir ve yanına Chrome, Firefox, Edge ve Safari için tarayıcı önbellek temizleyicisini ekler — genellikle birlikte ihtiyaç duyduğunuz iki araç. Windows 10/11 ve macOS 12+ üzerinde çalışır; ömür boyu Pro lisansı abonelik olmadan tek seferlik $19.90\'dır.',
      ],
      ctaText: 'Disk Mop ile DNS önbelleğinizi tek tıkla temizleyin',
    },
    en: {
      title: 'How to Flush DNS Cache on Windows and Mac (2 Ways)',
      metaDescription:
        'Learn how to flush DNS cache on Windows with ipconfig /flushdns and on Mac via Terminal. Fix DNS errors fast, or skip the command line with one click.',
      subtitle: 'Copy-Paste Commands for Both Systems, Plus a No-Terminal Option',
      intro: [
        'To flush the DNS cache on Windows, open Command Prompt and run ipconfig /flushdns. On a Mac, open Terminal and run sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Both commands finish in about a second and clear every stored DNS entry, forcing your computer to look up fresh addresses the next time you open a website.',
        'That is the short answer, and for most people it is genuinely all you need. In this guide we\'ll walk through both commands step by step, explain what flushing DNS actually does, show a one-click alternative for anyone who would rather not touch a terminal, and be honest about which connection problems a DNS flush cannot solve.',
      ],
      sections: [
        {
          title: 'What the DNS Cache Does and When to Flush It',
          content: [
            'DNS (Domain Name System) is the internet\'s address book: it translates a name like example.com into the numeric IP address your computer actually connects to. To avoid repeating that lookup for every page load, your operating system keeps a local DNS cache — a small database of recently resolved names and their addresses. Cached lookups are one of the reasons sites you visit often reconnect so quickly.',
            'So what does flushing DNS do? It simply empties that local database. Nothing gets uninstalled and no settings change; your system just performs fresh lookups from your DNS server the next time each site is requested. The first visit after a flush may take a fraction of a second longer, and then everything behaves exactly as before.',
            'Flushing is worth trying when a website recently moved to a new server and you still land on the old one, when a site loads on your phone but not on your computer, after you change DNS providers, or when your browser shows errors like DNS_PROBE_FINISHED_NXDOMAIN. It is also a small privacy win: on Windows, anyone at your keyboard can list recently visited domains with ipconfig /displaydns, and a flush wipes that list.',
          ],
        },
        {
          title: 'Flush DNS on Windows 10 and 11 with ipconfig /flushdns',
          content: [
            'On Windows 11, right-click the Start button and choose Terminal; on Windows 10, press the Windows key, type cmd, and open Command Prompt. You do not need administrator rights for this command. In the window that appears, type ipconfig /flushdns and press Enter.',
            'Windows responds with the message Successfully flushed the DNS Resolver Cache. That is the entire operation — no restart, no downtime, and it is completely safe to repeat as often as you like. If you prefer PowerShell, the equivalent command is Clear-DnsClientCache, which does exactly the same thing.',
            'Two related commands are worth knowing. ipconfig /displaydns prints the current contents of the cache, which is useful for checking whether a stubborn entry is really gone. And if you suspect a deeper network issue, running ipconfig /release followed by ipconfig /renew refreshes your IP address lease as well — a common companion step when troubleshooting connection problems on Windows 11.',
          ],
        },
        {
          title: 'Flush DNS on macOS via Terminal',
          content: [
            'To clear the DNS cache on a Mac, open Terminal — press Command and Space, type Terminal and hit Return, or find it under Applications, then Utilities. Paste this single line and press Return: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. The same command works on macOS 12 Monterey and every later version.',
            'Because the command starts with sudo, macOS asks for your administrator password. Type it and press Return — no characters appear while you type, which is normal Terminal behavior, not a frozen window. Unlike Windows, macOS prints no confirmation message: the command simply returns to the prompt, and the cache is gone.',
            'The two halves of the command do different jobs: dscacheutil -flushcache empties the directory service cache, while killall -HUP mDNSResponder tells the process that handles DNS lookups to reload. Running them together is the widely recommended way to make sure stale entries are fully cleared on a modern Mac.',
          ],
        },
        {
          title: 'Flush Your DNS Cache Without the Terminal',
          content: [
            'The commands above are free, fast, and built into both operating systems — if you are comfortable with a command line, you genuinely do not need anything else. But plenty of people are not, and there is no reason a routine maintenance task should require memorizing syntax or typing sudo into a window that gives no feedback.',
            'Disk Mop includes a DNS Cache Cleaner that does the same job with a single click, on both Windows 10/11 and macOS 12 and later. Open the app, choose DNS Cache Cleaner, click once — no commands to remember, nothing to mistype, and the exact same result as the terminal method.',
            'The convenience compounds because a DNS flush rarely happens in isolation. When you are troubleshooting, you usually want to clear browser caches too, and Disk Mop keeps both tools side by side in the same interface. There is a free version with limited features, and the Pro license is a one-time $19.90 payment with no subscription.',
          ],
        },
        {
          title: 'Also Clear the Browser Cache When Pages Misbehave',
          content: [
            'Your operating system\'s DNS cache is not the only cache between you and a website. Chrome maintains its own internal DNS cache: type chrome://net-internals/#dns into the address bar and click Clear host cache to empty it. Browsers also store copies of pages, images, and scripts, so even after a successful DNS flush you may still see an outdated or broken version of a site.',
            'To clear the regular browser cache in Chrome, Edge, or Firefox, press Ctrl+Shift+Delete (Command+Shift+Delete on a Mac), select cached images and files, and confirm. In Safari, enable the Develop menu under Settings, Advanced, then choose Empty Caches from the Develop menu. Doing this alongside a DNS flush covers both layers where stale data can hide.',
            'Disk Mop\'s Browser Cache Cleaner handles Chrome, Firefox, Edge, and Safari from one screen, so you can clear every browser\'s cache in a single pass instead of repeating keyboard shortcuts in each one. Combined with the DNS Cache Cleaner, it turns the classic have-you-tried-clearing-your-cache routine into two clicks.',
          ],
        },
        {
          title: 'When Flushing DNS Won\'t Fix Your Problem',
          content: [
            'An honest scope note: flushing DNS fixes stale name lookups on your computer, and nothing else. If the website itself is down, if your Wi-Fi keeps dropping, or if your internet provider is having an outage, a DNS flush will not help. It also will not make everyday browsing measurably faster — the cache exists to speed things up, so clearing it is a troubleshooting step, not a performance tweak.',
            'Your router keeps its own DNS cache too, one layer beyond your computer\'s reach. If a flush does not help, restart the router and see whether the problem clears. Persistent DNS_PROBE_FINISHED errors often mean the DNS server you are using is struggling; switching your network settings to a public resolver such as 1.1.1.1 or 8.8.8.8 fixes this more often than repeated flushing does.',
            'Finally, if a device works on one network but not another, or every browser fails while other apps stay online, the problem is more likely firewall, VPN, or proxy configuration than DNS caching. Flushing is a free, zero-risk first step — just do not stop there when the symptoms point elsewhere.',
          ],
        },
      ],
      verdict: [
        'Flushing your DNS cache takes one command: ipconfig /flushdns on Windows, or sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder on a Mac. It is safe, instant, and the right first move when a website resolves incorrectly, shows DNS errors, or refuses to load on one machine only.',
        'If you would rather never open a terminal, Disk Mop wraps the same operation in a single click and pairs it with a Browser Cache Cleaner for Chrome, Firefox, Edge, and Safari — the two tools you usually need together. It runs on Windows 10/11 and macOS 12+, and a lifetime Pro license is a one-time $19.90 with no subscription.',
      ],
      ctaText: 'Flush your DNS cache in one click with Disk Mop',
    },
    de: {
      title: 'DNS-Cache leeren: Windows und Mac (2 Methoden)',
      metaDescription:
        'DNS-Cache leeren: mit ipconfig /flushdns unter Windows, per Terminal am Mac — oder ganz ohne Kommandozeile mit einem Klick. Jetzt Schritt für Schritt lernen.',
      subtitle: 'Befehle zum Kopieren für beide Systeme — plus eine Option ohne Terminal',
      intro: [
        'Um den DNS-Cache unter Windows zu leeren, öffnen Sie die Eingabeaufforderung und führen ipconfig /flushdns aus. Am Mac öffnen Sie das Terminal und geben sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder ein. Beide Befehle sind in etwa einer Sekunde erledigt und löschen alle gespeicherten DNS-Einträge, sodass Ihr Computer beim nächsten Seitenaufruf frische Adressen abfragt.',
        'Das ist die kurze Antwort — und für die meisten völlig ausreichend. In diesem Leitfaden gehen wir beide Befehle Schritt für Schritt durch, erklären, was das Leeren des DNS-Cache tatsächlich bewirkt, zeigen eine Ein-Klick-Alternative für alle, die kein Terminal öffnen möchten, und sagen ehrlich, welche Verbindungsprobleme ein DNS-Flush nicht löst.',
      ],
      sections: [
        {
          title: 'Was der DNS-Cache tut und wann Sie ihn leeren sollten',
          content: [
            'DNS (Domain Name System) ist das Adressbuch des Internets: Es übersetzt einen Namen wie example.com in die numerische IP-Adresse, mit der sich Ihr Computer tatsächlich verbindet. Damit diese Abfrage nicht bei jedem Seitenaufruf wiederholt werden muss, führt Ihr Betriebssystem einen lokalen DNS-Cache — eine kleine Datenbank kürzlich aufgelöster Namen und Adressen. Zwischengespeicherte Abfragen sind mit ein Grund dafür, dass häufig besuchte Seiten so schnell wieder erscheinen.',
            'Was bewirkt das Leeren des DNS-Cache also? Es leert lediglich diese lokale Datenbank. Es wird nichts deinstalliert und keine Einstellung geändert; Ihr System fragt beim nächsten Besuch jeder Website einfach frische Daten vom DNS-Server ab. Der erste Aufruf danach dauert einen Sekundenbruchteil länger, danach läuft alles wie zuvor.',
            'Das Leeren lohnt sich, wenn eine Website auf einen neuen Server umgezogen ist und Sie noch auf dem alten landen, wenn eine Seite am Handy lädt, aber nicht am Computer, nach einem Wechsel des DNS-Anbieters oder bei Fehlern wie DNS_PROBE_FINISHED_NXDOMAIN im Browser. Unter Windows löscht ein Flush zudem die mit ipconfig /displaydns einsehbare Liste zuletzt besuchter Domains — ein kleiner Datenschutzgewinn.',
          ],
        },
        {
          title: 'DNS unter Windows 10 und 11 mit ipconfig /flushdns leeren',
          content: [
            'Klicken Sie unter Windows 11 mit der rechten Maustaste auf die Start-Schaltfläche und wählen Sie Terminal; unter Windows 10 drücken Sie die Windows-Taste, tippen cmd und öffnen die Eingabeaufforderung. Administratorrechte sind nicht nötig. Geben Sie ipconfig /flushdns ein und drücken Sie die Eingabetaste.',
            'Windows bestätigt mit einer Meldung, dass der DNS-Auflösungscache erfolgreich geleert wurde. Das ist bereits alles — kein Neustart, keine Ausfallzeit, und der Befehl lässt sich völlig gefahrlos so oft wiederholen, wie Sie möchten. In PowerShell erledigt der Befehl Clear-DnsClientCache exakt dasselbe.',
            'Zwei verwandte Befehle sind nützlich. ipconfig /displaydns zeigt den aktuellen Cache-Inhalt an — praktisch, um zu prüfen, ob ein hartnäckiger Eintrag wirklich verschwunden ist. Und wenn Sie ein tiefer liegendes Netzwerkproblem vermuten, erneuern ipconfig /release und anschließend ipconfig /renew zusätzlich die Zuweisung Ihrer IP-Adresse — ein häufiger Begleitschritt bei der Fehlersuche unter Windows 11.',
          ],
        },
        {
          title: 'DNS am Mac per Terminal leeren',
          content: [
            'Um den DNS-Cache am Mac zu leeren, öffnen Sie das Terminal — suchen Sie mit Befehlstaste und Leertaste nach Terminal oder finden Sie es unter Programme, Dienstprogramme. Fügen Sie diese Zeile ein und drücken Sie Return: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Der Befehl funktioniert ab macOS 12 Monterey in allen neueren Versionen.',
            'Wegen sudo fragt macOS nach Ihrem Administratorpasswort. Beim Tippen erscheinen keine Zeichen — das ist normales Terminal-Verhalten, kein eingefrorenes Fenster. Anders als Windows zeigt macOS keine Bestätigung: Der Befehl kehrt still zur Eingabezeile zurück, und der Cache ist geleert.',
            'Die beiden Teile des Befehls erledigen unterschiedliche Aufgaben: dscacheutil -flushcache leert den Verzeichnisdienst-Cache, killall -HUP mDNSResponder weist den für DNS-Abfragen zuständigen Prozess an, neu zu laden. Beide zusammen sind der allgemein empfohlene Weg, veraltete Einträge auf einem modernen Mac zuverlässig zu entfernen.',
          ],
        },
        {
          title: 'DNS-Cache leeren ohne Terminal',
          content: [
            'Die obigen Befehle sind kostenlos, schnell und in beiden Systemen eingebaut — wer mit der Kommandozeile vertraut ist, braucht nichts weiter. Viele Nutzer sind es aber nicht, und eine Routineaufgabe sollte weder auswendig gelernte Syntax noch ein sudo in einem Fenster ohne Rückmeldung erfordern.',
            'Disk Mops DNS-Cache-Bereiniger (DNS Cache Cleaner) erledigt dieselbe Aufgabe mit einem einzigen Klick — unter Windows 10/11 und auf macOS 12 und neuer. App öffnen, DNS Cache Cleaner wählen, einmal klicken: kein Befehl zum Merken, nichts zu vertippen, exakt dasselbe Ergebnis wie im Terminal.',
            'Der Komfort zahlt sich doppelt aus, weil ein DNS-Flush selten allein kommt: Bei der Fehlersuche will man meist auch die Browser-Caches leeren, und Disk Mop bietet beide Werkzeuge in einer Oberfläche. Es gibt eine kostenlose Version mit eingeschränkten Funktionen; die Pro-Lizenz kostet einmalig $19.90 — ohne Abo.',
          ],
        },
        {
          title: 'Bei hartnäckigen Seiten auch den Browser-Cache leeren',
          content: [
            'Der DNS-Cache des Betriebssystems ist nicht der einzige Cache zwischen Ihnen und einer Website. Chrome führt einen eigenen internen DNS-Cache: Geben Sie chrome://net-internals/#dns in die Adressleiste ein und klicken Sie auf Clear host cache. Browser speichern außerdem Kopien von Seiten, Bildern und Skripten — selbst nach einem erfolgreichen DNS-Flush kann daher eine veraltete Version einer Website erscheinen.',
            'Den normalen Browser-Cache leeren Sie in Chrome, Edge oder Firefox mit Strg+Umschalt+Entf (am Mac Befehl+Umschalt+Entf); wählen Sie zwischengespeicherte Bilder und Dateien und bestätigen Sie. In Safari aktivieren Sie unter Einstellungen, Erweitert das Entwickler-Menü und wählen dort die Option zum Leeren der Cache-Speicher. Zusammen mit dem DNS-Flush deckt das beide Ebenen ab, auf denen sich veraltete Daten verstecken können.',
            'Disk Mops Browser-Cache-Bereiniger (Browser Cache Cleaner) deckt Chrome, Firefox, Edge und Safari von einem Bildschirm aus ab — ein Durchgang statt Tastenkombinationen in jedem Browser einzeln. Zusammen mit dem DNS Cache Cleaner wird aus der klassischen Frage, ob Sie es schon mit dem Leeren des Caches versucht haben, eine Sache von zwei Klicks.',
          ],
        },
        {
          title: 'Wann das Leeren des DNS-Cache nicht hilft',
          content: [
            'Ein ehrlicher Hinweis zum Umfang: Ein DNS-Flush behebt veraltete Namensauflösungen auf Ihrem Computer — sonst nichts. Ist die Website selbst offline, bricht Ihr WLAN ab oder hat Ihr Provider eine Störung, hilft er nicht. Auch das alltägliche Surfen wird dadurch nicht messbar schneller: Der Cache existiert, um Dinge zu beschleunigen; ihn zu leeren ist ein Diagnose-Schritt, kein Performance-Trick.',
            'Auch Ihr Router führt einen eigenen DNS-Cache, außerhalb der Reichweite Ihres Computers. Hilft der Flush nicht, starten Sie den Router neu. Hartnäckige DNS_PROBE_FINISHED-Fehler bedeuten oft, dass der genutzte DNS-Server Probleme hat; der Wechsel zu einem öffentlichen Resolver wie 1.1.1.1 oder 8.8.8.8 löst das häufiger als wiederholtes Leeren.',
            'Funktioniert ein Gerät in einem Netzwerk, aber nicht in einem anderen, oder versagen alle Browser, während andere Apps online bleiben, liegt es meist an Firewall-, VPN- oder Proxy-Einstellungen statt am DNS-Cache. Der Flush ist ein kostenloser, risikofreier erster Schritt — hören Sie dort nur nicht auf, wenn die Symptome in eine andere Richtung zeigen.',
          ],
        },
      ],
      verdict: [
        'Den DNS-Cache zu leeren ist ein einziger Befehl: ipconfig /flushdns unter Windows oder sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder am Mac. Sicher, sofort erledigt und der richtige erste Schritt, wenn eine Website falsch aufgelöst wird, DNS-Fehler zeigt oder nur auf einem Rechner nicht lädt.',
        'Wer nie ein Terminal öffnen möchte, bekommt mit Disk Mop dieselbe Operation als einen einzigen Klick — ergänzt um einen Browser-Cache-Bereiniger für Chrome, Firefox, Edge und Safari, die beiden Werkzeuge, die man meist zusammen braucht. Läuft unter Windows 10/11 und macOS 12+; die Pro-Lizenz kostet einmalig $19.90, ohne Abo.',
      ],
      ctaText: 'DNS-Cache mit einem Klick leeren — mit Disk Mop',
    },
    fr: {
      title: "Vider le cache DNS sur Windows et Mac (2 méthodes)",
      metaDescription:
        "Vider le cache DNS sous Windows avec ipconfig /flushdns ou sur Mac dans le Terminal. Corrigez les erreurs DNS en une seconde, ou faites-le en un seul clic.",
      subtitle: "Des commandes à copier-coller pour les deux systèmes, et une option sans terminal",
      intro: [
        "Pour vider le cache DNS sous Windows, ouvrez l'Invite de commandes et lancez ipconfig /flushdns. Sur un Mac, ouvrez Terminal et saisissez sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Les deux commandes s'exécutent en une seconde environ et suppriment toutes les entrées DNS enregistrées : votre ordinateur ira chercher des adresses à jour dès la prochaine visite d'un site.",
        "C'est la réponse courte, et elle suffit largement dans la plupart des cas. Dans ce guide, nous détaillons les deux commandes étape par étape, expliquons ce que vide réellement une purge DNS, montrons une alternative en un clic pour ceux qui préfèrent éviter le terminal, et disons franchement quels problèmes de connexion cette manipulation ne résoudra pas.",
      ],
      sections: [
        {
          title: "À quoi sert le cache DNS et quand faut-il le vider ?",
          content: [
            "Le DNS (Domain Name System) est le carnet d'adresses d'Internet : il traduit un nom comme example.com en adresse IP numérique, celle à laquelle votre ordinateur se connecte réellement. Pour ne pas refaire cette requête à chaque chargement de page, votre système d'exploitation conserve un cache DNS local, une petite base de données des noms récemment résolus et de leurs adresses. C'est aussi l'une des raisons pour lesquelles les sites que vous consultez souvent s'ouvrent si vite.",
            "Que fait donc le vidage du cache DNS ? Il se contente de vider cette base locale. Rien n'est désinstallé, aucun réglage n'est modifié : votre système interroge simplement à nouveau votre serveur DNS la prochaine fois que chaque site est demandé. La première visite après l'opération prendra une fraction de seconde de plus, puis tout redeviendra exactement comme avant.",
            "L'opération vaut le coup quand un site vient de changer de serveur et que vous atterrissez encore sur l'ancien, quand une page s'affiche sur votre téléphone mais pas sur votre ordinateur, après un changement de fournisseur DNS, ou lorsque votre navigateur affiche des erreurs du type DNS_PROBE_FINISHED_NXDOMAIN. C'est aussi un petit gain de confidentialité : sous Windows, n'importe qui devant votre clavier peut lister les domaines récemment visités avec ipconfig /displaydns, et un vidage efface cette liste.",
          ],
        },
        {
          title: "Vider le DNS sous Windows 10 et 11 avec ipconfig /flushdns",
          content: [
            "Sous Windows 11, faites un clic droit sur le bouton Démarrer et choisissez Terminal ; sous Windows 10, appuyez sur la touche Windows, tapez cmd et ouvrez l'Invite de commandes. Aucun droit d'administrateur n'est nécessaire pour cette commande. Dans la fenêtre qui s'affiche, saisissez ipconfig /flushdns et appuyez sur Entrée.",
            "Windows répond par un message confirmant que le cache de résolution DNS a bien été vidé. C'est toute l'opération : aucun redémarrage, aucune interruption, et vous pouvez la répéter aussi souvent que vous le souhaitez, sans le moindre risque. Si vous préférez PowerShell, la commande équivalente est Clear-DnsClientCache, qui fait exactement la même chose.",
            "Deux commandes voisines méritent d'être connues. ipconfig /displaydns affiche le contenu actuel du cache, pratique pour vérifier qu'une entrée récalcitrante a bien disparu. Et si vous soupçonnez un problème réseau plus profond, ipconfig /release suivi de ipconfig /renew renouvelle également le bail de votre adresse IP : un complément fréquent lors du dépannage des soucis de connexion sous Windows 11.",
          ],
        },
        {
          title: "Vider le DNS sur macOS depuis Terminal",
          content: [
            "Pour effacer le cache DNS sur un Mac, ouvrez Terminal : appuyez sur Commande et Espace, tapez Terminal et validez, ou allez le chercher dans Applications > Utilitaires. Collez cette ligne unique et appuyez sur Retour : sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. La même commande fonctionne sur macOS 12 Monterey et sur toutes les versions ultérieures.",
            "Comme la commande commence par sudo, macOS demande votre mot de passe administrateur. Saisissez-le et appuyez sur Retour : aucun caractère ne s'affiche pendant la frappe, c'est le comportement normal du terminal et non une fenêtre figée. Contrairement à Windows, macOS n'affiche aucun message de confirmation : l'invite réapparaît simplement, et le cache est vidé.",
            "Les deux moitiés de la commande ont des rôles distincts : dscacheutil -flushcache vide le cache du service d'annuaire, tandis que killall -HUP mDNSResponder demande au processus chargé des requêtes DNS de se recharger. Les exécuter ensemble est la méthode la plus largement recommandée pour être sûr que les entrées périmées ont totalement disparu sur un Mac récent.",
          ],
        },
        {
          title: "Vider votre cache DNS sans passer par le terminal",
          content: [
            "Les commandes ci-dessus sont gratuites, rapides et intégrées aux deux systèmes : si la ligne de commande ne vous fait pas peur, vous n'avez sincèrement besoin de rien d'autre. Mais ce n'est pas le cas de tout le monde, et rien ne justifie qu'une tâche d'entretien courante impose de mémoriser une syntaxe ou de taper sudo dans une fenêtre qui ne renvoie aucun retour.",
            "Disk Mop intègre un nettoyeur de cache DNS (DNS Cache Cleaner) qui fait exactement le même travail en un seul clic, sous Windows 10/11 comme sur macOS 12 et versions ultérieures. Ouvrez l'application, sélectionnez DNS Cache Cleaner, cliquez une fois : aucune commande à retenir, aucune faute de frappe possible, et un résultat rigoureusement identique à celui du terminal.",
            "Le gain de confort se cumule, car on vide rarement le DNS de façon isolée. En plein dépannage, on veut généralement effacer aussi les caches des navigateurs, et Disk Mop réunit les deux outils dans la même interface. Une version gratuite aux fonctions limitées est disponible ; la licence Pro se paie une seule fois, 19,90 $, sans abonnement.",
          ],
        },
        {
          title: "Videz aussi le cache du navigateur quand une page s'entête",
          content: [
            "Le cache DNS du système n'est pas le seul cache entre vous et un site web. Chrome tient son propre cache DNS interne : tapez chrome://net-internals/#dns dans la barre d'adresse et cliquez sur Clear host cache pour le vider. Les navigateurs conservent aussi des copies des pages, des images et des scripts ; même après un vidage DNS réussi, vous pouvez donc encore voir une version périmée ou cassée d'un site.",
            "Pour vider le cache classique dans Chrome, Edge ou Firefox, appuyez sur Ctrl+Maj+Suppr (Commande+Maj+Suppr sur Mac), cochez les images et fichiers en cache, puis confirmez. Dans Safari, activez le menu Développement depuis Réglages > Avancé, puis choisissez Vider les caches dans ce menu. Combiner cette manipulation avec un vidage DNS couvre les deux couches où des données périmées peuvent se cacher.",
            "Le nettoyeur de cache navigateur (Browser Cache Cleaner) de Disk Mop gère Chrome, Firefox, Edge et Safari depuis un seul écran : vous videz le cache de tous vos navigateurs en une passe au lieu de répéter les mêmes raccourcis dans chacun. Associé au DNS Cache Cleaner, il réduit le classique « avez-vous essayé de vider votre cache ? » à deux clics.",
          ],
        },
        {
          title: "Ce qu'un vidage DNS ne réglera pas",
          content: [
            "Une note honnête sur la portée : vider le DNS corrige les résolutions de noms périmées sur votre ordinateur, rien de plus. Si le site lui-même est hors service, si votre Wi-Fi décroche sans arrêt ou si votre fournisseur d'accès subit une panne, cela n'aidera pas. Cela n'accélérera pas non plus votre navigation quotidienne de façon mesurable : le cache existe justement pour gagner du temps, le vider est une étape de diagnostic, pas un réglage de performance.",
            "Votre box ou votre routeur conserve lui aussi son propre cache DNS, une couche hors de portée de votre ordinateur. Si le vidage ne change rien, redémarrez le routeur et voyez si le problème disparaît. Des erreurs DNS_PROBE_FINISHED persistantes signifient souvent que le serveur DNS utilisé est en difficulté : basculer vos paramètres réseau vers un résolveur public comme 1.1.1.1 ou 8.8.8.8 règle la situation bien plus souvent que des vidages répétés.",
            "Enfin, si un appareil fonctionne sur un réseau mais pas sur un autre, ou si tous les navigateurs échouent alors que les autres applications restent connectées, la cause est plus probablement une configuration de pare-feu, de VPN ou de proxy que le cache DNS. Le vidage reste une première étape gratuite et sans risque : ne vous y arrêtez simplement pas quand les symptômes pointent ailleurs.",
          ],
        },
      ],
      verdict: [
        "Vider son cache DNS tient en une seule commande : ipconfig /flushdns sous Windows, ou sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder sur un Mac. C'est sûr, immédiat, et c'est le bon premier réflexe quand un site est mal résolu, affiche des erreurs DNS ou refuse de se charger sur une seule machine.",
        "Si vous préférez ne jamais ouvrir de terminal, Disk Mop ramène la même opération à un clic et l'accompagne d'un nettoyeur de cache pour Chrome, Firefox, Edge et Safari : les deux outils dont on a généralement besoin ensemble. L'application tourne sous Windows 10/11 et macOS 12+, et la licence Pro à vie coûte 19,90 $ en une seule fois, sans abonnement.",
      ],
      ctaText: "Videz votre cache DNS en un clic avec Disk Mop",
    },
    es: {
      title: "Cómo vaciar la caché DNS en Windows y Mac (2 métodos)",
      metaDescription:
        "Vacía la caché DNS en Windows con ipconfig /flushdns y en Mac desde el Terminal. Soluciona errores DNS al instante o hazlo en un clic, sin línea de comandos.",
      subtitle: "Comandos para copiar y pegar en ambos sistemas, más una opción sin terminal",
      intro: [
        "Para vaciar la caché DNS en Windows, abre el Símbolo del sistema y ejecuta ipconfig /flushdns. En un Mac, abre Terminal y ejecuta sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Ambos comandos terminan en aproximadamente un segundo y borran todas las entradas DNS guardadas, de modo que el equipo consultará direcciones actualizadas la próxima vez que abras una página.",
        "Esa es la respuesta corta y, para la mayoría de la gente, es realmente todo lo que hace falta. En esta guía repasamos ambos comandos paso a paso, explicamos qué hace exactamente vaciar la caché DNS, mostramos una alternativa de un solo clic para quien prefiera no abrir Terminal y decimos con franqueza qué problemas de conexión no se solucionan así.",
      ],
      sections: [
        {
          title: "Para qué sirve la caché DNS y cuándo conviene vaciarla",
          content: [
            "El DNS (Sistema de Nombres de Dominio) es la agenda de direcciones de internet: traduce un nombre como example.com a la dirección IP numérica a la que se conecta realmente tu equipo. Para no repetir esa consulta en cada carga de página, el sistema operativo mantiene una caché DNS local, una pequeña base de datos con los nombres resueltos recientemente y sus direcciones. Esa es una de las razones por las que las webs que visitas a menudo se abren tan rápido.",
            "¿Y qué hace entonces vaciar la caché DNS? Simplemente deja vacía esa base de datos local. No se desinstala nada ni cambia ninguna configuración: el sistema vuelve a consultar tu servidor DNS la próxima vez que pidas cada sitio. La primera visita después del vaciado puede tardar una fracción de segundo más y, a partir de ahí, todo funciona igual que antes.",
            "Merece la pena probarlo cuando una web se ha mudado hace poco a un servidor nuevo y sigues llegando al antiguo, cuando una página carga en el móvil pero no en el ordenador, después de cambiar de proveedor de DNS o cuando el navegador muestra errores como DNS_PROBE_FINISHED_NXDOMAIN. Además, aporta algo de privacidad: en Windows, cualquiera que se siente ante tu teclado puede listar los dominios visitados hace poco con ipconfig /displaydns, y el vaciado borra esa lista.",
          ],
        },
        {
          title: "Vaciar el DNS en Windows 10 y 11 con ipconfig /flushdns",
          content: [
            "En Windows 11, haz clic derecho en el botón Inicio y elige Terminal; en Windows 10, pulsa la tecla Windows, escribe cmd y abre el Símbolo del sistema. No necesitas permisos de administrador para este comando. En la ventana que aparece, escribe ipconfig /flushdns y pulsa Intro.",
            "Windows responde con un mensaje que confirma que la caché de resolución DNS se ha vaciado correctamente. Eso es toda la operación: sin reinicios, sin cortes y se puede repetir tantas veces como quieras sin ningún riesgo. Si prefieres PowerShell, el comando equivalente es Clear-DnsClientCache, que hace exactamente lo mismo.",
            "Conviene conocer otros dos comandos relacionados. ipconfig /displaydns muestra el contenido actual de la caché, útil para comprobar si una entrada rebelde ha desaparecido de verdad. Y si sospechas de un problema de red más profundo, ejecutar ipconfig /release y después ipconfig /renew también renueva la concesión de tu dirección IP: un paso habitual al diagnosticar fallos de conexión en Windows 11.",
          ],
        },
        {
          title: "Vaciar el DNS en macOS desde Terminal",
          content: [
            "Para borrar la caché DNS en un Mac, abre Terminal: pulsa Comando y Espacio, escribe Terminal y pulsa Retorno, o búscalo en Aplicaciones > Utilidades. Pega esta única línea y pulsa Retorno: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. El mismo comando funciona en macOS 12 Monterey y en todas las versiones posteriores.",
            "Como el comando empieza por sudo, macOS pide tu contraseña de administrador. Escríbela y pulsa Retorno: no aparece ningún carácter mientras escribes, algo normal en el terminal y no una ventana bloqueada. A diferencia de Windows, macOS no muestra ningún mensaje de confirmación: el comando devuelve el cursor al indicador y la caché ya está vacía.",
            "Las dos mitades del comando hacen cosas distintas: dscacheutil -flushcache vacía la caché del servicio de directorio, mientras que killall -HUP mDNSResponder ordena recargarse al proceso que gestiona las consultas DNS. Ejecutar ambas es la forma más recomendada de asegurarte de que en un Mac moderno no queda ninguna entrada obsoleta.",
          ],
        },
        {
          title: "Vacía la caché DNS sin usar el terminal",
          content: [
            "Los comandos anteriores son gratuitos, rápidos y vienen incluidos en ambos sistemas operativos: si te manejas con la línea de comandos, sinceramente no necesitas nada más. Pero mucha gente no se maneja, y no hay razón para que una tarea de mantenimiento rutinaria obligue a memorizar una sintaxis o a escribir sudo en una ventana que no da ninguna respuesta.",
            "Disk Mop incluye un limpiador de caché DNS (DNS Cache Cleaner) que hace el mismo trabajo con un solo clic, tanto en Windows 10/11 como en macOS 12 y posteriores. Abre la aplicación, elige DNS Cache Cleaner y haz clic una vez: ningún comando que recordar, nada que escribir mal y exactamente el mismo resultado que por terminal.",
            "La comodidad se multiplica porque un vaciado de DNS casi nunca va solo. Cuando estás buscando la causa de un fallo, normalmente también quieres limpiar las cachés del navegador, y Disk Mop tiene las dos herramientas juntas en la misma interfaz. Hay una versión gratuita con funciones limitadas, y la licencia Pro es un pago único de 19,90 $ sin suscripción.",
          ],
        },
        {
          title: "Limpia también la caché del navegador si las páginas fallan",
          content: [
            "La caché DNS del sistema operativo no es la única caché entre tú y una página web. Chrome mantiene su propia caché DNS interna: escribe chrome://net-internals/#dns en la barra de direcciones y pulsa Clear host cache para vaciarla. Los navegadores también guardan copias de páginas, imágenes y scripts, así que incluso después de un vaciado DNS correcto puedes seguir viendo una versión antigua o rota de un sitio.",
            "Para borrar la caché normal del navegador en Chrome, Edge o Firefox, pulsa Ctrl+Mayús+Supr (Comando+Mayús+Supr en Mac), marca las imágenes y archivos almacenados en caché y confirma. En Safari, activa el menú Desarrollo en Ajustes > Avanzado y luego elige Vaciar cachés en ese menú. Hacerlo junto con el vaciado de DNS cubre las dos capas donde se esconden los datos obsoletos.",
            "El limpiador de caché del navegador (Browser Cache Cleaner) de Disk Mop se ocupa de Chrome, Firefox, Edge y Safari desde una sola pantalla, así que vacías la caché de todos los navegadores de una pasada en vez de repetir atajos de teclado en cada uno. Junto con el DNS Cache Cleaner, convierte el clásico ¿has probado a borrar la caché? en dos clics.",
          ],
        },
        {
          title: "Qué problemas no soluciona vaciar el DNS",
          content: [
            "Una nota honesta sobre su alcance: vaciar el DNS arregla las resoluciones de nombres obsoletas en tu equipo y nada más. Si la web está caída, si el Wi-Fi se corta cada poco o si tu operador tiene una avería, no servirá de nada. Tampoco hará que la navegación diaria sea más rápida de forma apreciable: la caché existe precisamente para acelerar las cosas, así que vaciarla es un paso de diagnóstico, no un ajuste de rendimiento.",
            "Tu router también mantiene su propia caché DNS, una capa fuera del alcance del ordenador. Si el vaciado no ayuda, reinicia el router y comprueba si el problema desaparece. Los errores DNS_PROBE_FINISHED persistentes suelen significar que el servidor DNS que usas está teniendo problemas: cambiar la configuración de red a un resolutor público como 1.1.1.1 o 8.8.8.8 lo arregla mucho más a menudo que vaciar la caché una y otra vez.",
            "Por último, si un dispositivo funciona en una red pero no en otra, o si fallan todos los navegadores mientras el resto de aplicaciones siguen conectadas, lo más probable es que el problema esté en el firewall, la VPN o la configuración del proxy, y no en la caché DNS. Vaciarla es un primer paso gratuito y sin riesgo, pero no te quedes ahí cuando los síntomas apunten a otro sitio.",
          ],
        },
      ],
      verdict: [
        "Vaciar la caché DNS es cuestión de un solo comando: ipconfig /flushdns en Windows o sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder en un Mac. Es seguro, instantáneo y es el primer movimiento correcto cuando una web se resuelve mal, muestra errores DNS o se niega a cargar solo en un equipo.",
        "Si prefieres no abrir nunca un terminal, Disk Mop reduce la misma operación a un clic y la acompaña de un limpiador de caché del navegador para Chrome, Firefox, Edge y Safari: las dos herramientas que suelen hacer falta a la vez. Funciona en Windows 10/11 y macOS 12+, y la licencia Pro de por vida es un pago único de 19,90 $ sin suscripción.",
      ],
      ctaText: "Vacía tu caché DNS con un clic gracias a Disk Mop",
    },
    it: {
      title: "Come svuotare la cache DNS su Windows e Mac (2 metodi)",
      metaDescription:
        "Svuota la cache DNS su Windows con ipconfig /flushdns e su Mac dal Terminale. Risolvi subito gli errori DNS oppure fallo con un clic, senza riga di comando.",
      subtitle: "Comandi pronti da copiare per entrambi i sistemi, più un metodo senza terminale",
      intro: [
        "Per svuotare la cache DNS su Windows, apri il Prompt dei comandi ed esegui ipconfig /flushdns. Su un Mac apri Terminal ed esegui sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Entrambi i comandi si concludono in circa un secondo e cancellano tutte le voci DNS memorizzate, così il computer richiede indirizzi aggiornati alla prima apertura di un sito.",
        "Questa è la risposta breve e, per la maggior parte delle persone, è davvero tutto ciò che serve. In questa guida vediamo i due comandi passo dopo passo, spieghiamo che cosa fa davvero lo svuotamento della cache DNS, mostriamo un'alternativa in un clic per chi preferisce non aprire Terminal e diciamo con franchezza quali problemi di connessione questa operazione non risolve.",
      ],
      sections: [
        {
          title: "A cosa serve la cache DNS e quando conviene svuotarla",
          content: [
            "Il DNS (Domain Name System) è la rubrica di internet: traduce un nome come example.com nell'indirizzo IP numerico a cui il computer si collega davvero. Per non ripetere questa richiesta a ogni caricamento di pagina, il sistema operativo conserva una cache DNS locale, un piccolo archivio dei nomi risolti di recente e dei relativi indirizzi. È anche per questo che i siti visitati spesso si aprono così in fretta.",
            "Che cosa fa quindi lo svuotamento della cache DNS? Semplicemente azzera quell'archivio locale. Non viene disinstallato nulla e nessuna impostazione cambia: il sistema si limita a interrogare di nuovo il server DNS alla richiesta successiva di ciascun sito. La prima visita dopo lo svuotamento può richiedere una frazione di secondo in più, poi tutto torna esattamente come prima.",
            "Vale la pena provarci quando un sito si è appena spostato su un nuovo server e continui a finire su quello vecchio, quando una pagina si apre sul telefono ma non sul computer, dopo un cambio di provider DNS o quando il browser mostra errori come DNS_PROBE_FINISHED_NXDOMAIN. C'è anche un piccolo vantaggio per la privacy: su Windows chiunque si sieda alla tua tastiera può elencare i domini visitati di recente con ipconfig /displaydns, e lo svuotamento cancella quell'elenco.",
          ],
        },
        {
          title: "Svuotare il DNS su Windows 10 e 11 con ipconfig /flushdns",
          content: [
            "Su Windows 11 fai clic con il tasto destro sul pulsante Start e scegli Terminal; su Windows 10 premi il tasto Windows, digita cmd e apri il Prompt dei comandi. Per questo comando non servono i diritti di amministratore. Nella finestra che compare digita ipconfig /flushdns e premi Invio.",
            "Windows risponde con un messaggio che conferma il corretto svuotamento della cache di risoluzione DNS. L'operazione finisce qui: nessun riavvio, nessuna interruzione e la si può ripetere quante volte si vuole in tutta sicurezza. Se preferisci PowerShell, il comando equivalente è Clear-DnsClientCache e fa esattamente la stessa cosa.",
            "Vale la pena conoscere altri due comandi collegati. ipconfig /displaydns stampa il contenuto attuale della cache, comodo per verificare se una voce ostinata è davvero sparita. Se invece sospetti un problema di rete più profondo, ipconfig /release seguito da ipconfig /renew rinnova anche l'assegnazione dell'indirizzo IP: un passaggio che accompagna spesso la diagnosi dei problemi di connessione su Windows 11.",
          ],
        },
        {
          title: "Svuotare il DNS su macOS con Terminal",
          content: [
            "Per cancellare la cache DNS su un Mac apri Terminal: premi Comando e Barra spaziatrice, scrivi Terminal e premi Invio, oppure cercalo in Applicazioni > Utility. Incolla questa singola riga e premi Invio: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Lo stesso comando funziona su macOS 12 Monterey e su tutte le versioni successive.",
            "Poiché il comando inizia con sudo, macOS chiede la password di amministratore. Digitala e premi Invio: mentre scrivi non compare alcun carattere, è il comportamento normale del terminale e non una finestra bloccata. A differenza di Windows, macOS non mostra alcun messaggio di conferma: il comando torna semplicemente al prompt e la cache è svuotata.",
            "Le due metà del comando svolgono compiti diversi: dscacheutil -flushcache azzera la cache del servizio directory, mentre killall -HUP mDNSResponder chiede al processo che gestisce le richieste DNS di ricaricarsi. Eseguirli insieme è il modo più consigliato per essere certi che su un Mac moderno le voci obsolete siano state eliminate del tutto.",
          ],
        },
        {
          title: "Svuotare la cache DNS senza aprire il terminale",
          content: [
            "I comandi qui sopra sono gratuiti, rapidi e già inclusi in entrambi i sistemi operativi: se te la cavi con la riga di comando, sinceramente non ti serve altro. Molte persone però non se la cavano, e non c'è motivo per cui una normale operazione di manutenzione debba richiedere di imparare a memoria una sintassi o di digitare sudo in una finestra che non risponde nulla.",
            "Disk Mop include un pulitore della cache DNS (DNS Cache Cleaner) che fa lo stesso lavoro con un solo clic, sia su Windows 10/11 sia su macOS 12 e versioni successive. Apri l'app, scegli DNS Cache Cleaner, fai clic una volta: nessun comando da ricordare, niente da sbagliare a digitare e lo stesso identico risultato del metodo da terminale.",
            "Il vantaggio si moltiplica, perché lo svuotamento del DNS raramente arriva da solo. Quando cerchi la causa di un problema di solito vuoi cancellare anche le cache dei browser, e Disk Mop tiene i due strumenti affiancati nella stessa interfaccia. Esiste una versione gratuita con funzioni limitate; la licenza Pro si paga una volta sola, 19,90 $, senza abbonamento.",
          ],
        },
        {
          title: "Quando le pagine fanno i capricci, svuota anche la cache del browser",
          content: [
            "La cache DNS del sistema operativo non è l'unica cache tra te e un sito web. Chrome mantiene una propria cache DNS interna: digita chrome://net-internals/#dns nella barra degli indirizzi e fai clic su Clear host cache per svuotarla. I browser conservano anche copie di pagine, immagini e script, quindi persino dopo uno svuotamento DNS riuscito potresti vedere ancora una versione vecchia o difettosa di un sito.",
            "Per cancellare la normale cache del browser in Chrome, Edge o Firefox premi Ctrl+Maiusc+Canc (Comando+Maiusc+Canc su Mac), seleziona immagini e file memorizzati nella cache e conferma. In Safari attiva il menu Sviluppo da Impostazioni > Avanzate, poi scegli Svuota cache in quel menu. Farlo insieme allo svuotamento del DNS copre entrambi i livelli in cui possono nascondersi dati obsoleti.",
            "Il pulitore della cache dei browser (Browser Cache Cleaner) di Disk Mop gestisce Chrome, Firefox, Edge e Safari da un'unica schermata: svuoti la cache di tutti i browser in un colpo solo invece di ripetere le stesse scorciatoie in ognuno. Insieme al DNS Cache Cleaner, riduce a due clic il classico hai provato a svuotare la cache?",
          ],
        },
        {
          title: "Che cosa non risolve lo svuotamento della cache DNS",
          content: [
            "Una nota onesta sui limiti: svuotare il DNS corregge le risoluzioni dei nomi ormai obsolete sul tuo computer, e nient'altro. Se il sito è offline, se il Wi-Fi continua a cadere o se il tuo operatore ha un disservizio, non servirà. Non rende nemmeno la navigazione quotidiana più veloce in modo percepibile: la cache esiste proprio per accelerare le cose, quindi svuotarla è un passaggio diagnostico, non un'ottimizzazione delle prestazioni.",
            "Anche il router mantiene una propria cache DNS, uno strato fuori dalla portata del computer. Se lo svuotamento non aiuta, riavvia il router e verifica se il problema sparisce. Gli errori DNS_PROBE_FINISHED persistenti spesso indicano che il server DNS in uso sta facendo fatica: passare nelle impostazioni di rete a un resolver pubblico come 1.1.1.1 o 8.8.8.8 risolve molto più spesso di svuotamenti ripetuti.",
            "Infine, se un dispositivo funziona su una rete ma non su un'altra, oppure se tutti i browser falliscono mentre le altre app restano online, la causa è più probabilmente la configurazione di firewall, VPN o proxy che non la cache DNS. Lo svuotamento resta un primo passo gratuito e senza rischi: semplicemente non fermarti lì quando i sintomi indicano altro.",
          ],
        },
      ],
      verdict: [
        "Svuotare la cache DNS richiede un solo comando: ipconfig /flushdns su Windows oppure sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder su Mac. È sicuro, immediato ed è la prima mossa giusta quando un sito viene risolto in modo sbagliato, mostra errori DNS o si rifiuta di caricarsi solo su una macchina.",
        "Se preferisci non aprire mai un terminale, Disk Mop racchiude la stessa operazione in un clic e la affianca a un pulitore della cache per Chrome, Firefox, Edge e Safari: i due strumenti che di solito servono insieme. Funziona su Windows 10/11 e macOS 12+, e la licenza Pro a vita costa 19,90 $ una tantum, senza abbonamento.",
      ],
      ctaText: "Svuota la cache DNS con un clic grazie a Disk Mop",
    },
    pt: {
      title: "Como limpar o cache DNS no Windows e no Mac (2 métodos)",
      metaDescription:
        "Limpe o cache DNS no Windows com ipconfig /flushdns e no Mac pelo Terminal. Resolva erros de DNS na hora ou faça tudo em um clique, sem linha de comando.",
      subtitle: "Comandos prontos para copiar nos dois sistemas e uma opção sem terminal",
      intro: [
        "Para limpar o cache DNS no Windows, abra o Prompt de Comando e execute ipconfig /flushdns. No Mac, abra o Terminal e execute sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. Os dois comandos terminam em cerca de um segundo e apagam todas as entradas DNS guardadas, fazendo o computador buscar endereços atualizados na próxima vez que você abrir um site.",
        "Essa é a resposta curta e, para a maioria das pessoas, ela realmente basta. Neste guia mostramos os dois comandos passo a passo, explicamos o que a limpeza do DNS faz de verdade, apresentamos uma alternativa em um clique para quem prefere não abrir o Terminal e falamos com sinceridade sobre os problemas de conexão que ela não resolve.",
      ],
      sections: [
        {
          title: "Para que serve o cache DNS e quando limpá-lo",
          content: [
            "O DNS (Sistema de Nomes de Domínio) é a agenda de endereços da internet: ele traduz um nome como example.com no endereço IP numérico ao qual o seu computador realmente se conecta. Para não repetir essa consulta a cada carregamento de página, o sistema operacional mantém um cache DNS local, um pequeno banco de dados com os nomes resolvidos recentemente e seus endereços. É também por isso que os sites que você visita com frequência abrem tão rápido.",
            "Então o que a limpeza do cache DNS faz? Ela apenas esvazia esse banco de dados local. Nada é desinstalado e nenhuma configuração muda: o sistema simplesmente faz consultas novas ao seu servidor DNS na próxima vez que cada site for solicitado. A primeira visita depois da limpeza pode demorar uma fração de segundo a mais e, a partir daí, tudo funciona exatamente como antes.",
            "Vale a pena tentar quando um site mudou de servidor há pouco tempo e você continua caindo no antigo, quando uma página abre no celular mas não no computador, depois de trocar de provedor de DNS ou quando o navegador mostra erros como DNS_PROBE_FINISHED_NXDOMAIN. Há ainda um pequeno ganho de privacidade: no Windows, qualquer pessoa no seu teclado pode listar os domínios visitados recentemente com ipconfig /displaydns, e a limpeza apaga essa lista.",
          ],
        },
        {
          title: "Limpar o DNS no Windows 10 e 11 com ipconfig /flushdns",
          content: [
            "No Windows 11, clique com o botão direito no botão Iniciar e escolha Terminal; no Windows 10, pressione a tecla Windows, digite cmd e abra o Prompt de Comando. Este comando não exige direitos de administrador. Na janela que aparecer, digite ipconfig /flushdns e pressione Enter.",
            "O Windows responde com uma mensagem confirmando que o cache do resolvedor DNS foi limpo com êxito. A operação acaba aí: sem reinicialização, sem interrupção e pode ser repetida com toda a segurança quantas vezes você quiser. Se preferir o PowerShell, o comando equivalente é Clear-DnsClientCache, que faz exatamente a mesma coisa.",
            "Dois comandos relacionados valem a pena. O ipconfig /displaydns mostra o conteúdo atual do cache, útil para conferir se uma entrada teimosa realmente sumiu. E, se você desconfia de um problema de rede mais profundo, executar ipconfig /release e depois ipconfig /renew também renova a concessão do seu endereço IP: um passo comum ao investigar falhas de conexão no Windows 11.",
          ],
        },
        {
          title: "Limpar o DNS no macOS pelo Terminal",
          content: [
            "Para apagar o cache DNS em um Mac, abra o Terminal: pressione Command e Espaço, digite Terminal e tecle Return, ou procure em Aplicativos > Utilitários. Cole esta única linha e pressione Return: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder. O mesmo comando funciona no macOS 12 Monterey e em todas as versões seguintes.",
            "Como o comando começa com sudo, o macOS pede a sua senha de administrador. Digite e pressione Return: nenhum caractere aparece enquanto você digita, o que é o comportamento normal do terminal e não uma janela travada. Diferente do Windows, o macOS não exibe mensagem de confirmação: o comando simplesmente volta ao prompt e o cache já foi apagado.",
            "As duas metades do comando fazem trabalhos diferentes: dscacheutil -flushcache esvazia o cache do serviço de diretório, enquanto killall -HUP mDNSResponder manda o processo responsável pelas consultas DNS recarregar. Executar os dois juntos é a forma mais recomendada de garantir que as entradas antigas realmente sumiram em um Mac atual.",
          ],
        },
        {
          title: "Limpe o cache DNS sem abrir o terminal",
          content: [
            "Os comandos acima são gratuitos, rápidos e já vêm nos dois sistemas operacionais: se você se dá bem com a linha de comando, sinceramente não precisa de mais nada. Só que muita gente não se dá, e não existe motivo para uma tarefa rotineira de manutenção exigir decorar sintaxe ou digitar sudo em uma janela que não devolve nenhum retorno.",
            "O Disk Mop traz um limpador de cache DNS (DNS Cache Cleaner) que faz o mesmo trabalho com um único clique, tanto no Windows 10/11 quanto no macOS 12 e versões mais recentes. Abra o aplicativo, escolha DNS Cache Cleaner e clique uma vez: nenhum comando para lembrar, nada para digitar errado e exatamente o mesmo resultado do método pelo terminal.",
            "A comodidade se soma, porque a limpeza de DNS raramente acontece sozinha. Durante a investigação de um problema, você normalmente também quer limpar os caches do navegador, e o Disk Mop mantém as duas ferramentas lado a lado na mesma interface. Existe uma versão gratuita com recursos limitados, e a licença Pro é um pagamento único de 19,90 $, sem assinatura.",
          ],
        },
        {
          title: "Quando as páginas insistem no erro, limpe também o cache do navegador",
          content: [
            "O cache DNS do sistema operacional não é o único cache entre você e um site. O Chrome mantém o próprio cache DNS interno: digite chrome://net-internals/#dns na barra de endereços e clique em Clear host cache para esvaziá-lo. Os navegadores também guardam cópias de páginas, imagens e scripts, então, mesmo depois de uma limpeza de DNS bem-sucedida, você pode continuar vendo uma versão antiga ou quebrada do site.",
            "Para limpar o cache comum do navegador no Chrome, no Edge ou no Firefox, pressione Ctrl+Shift+Delete (Command+Shift+Delete no Mac), marque as imagens e arquivos armazenados em cache e confirme. No Safari, ative o menu Desenvolvedor em Ajustes > Avançado e depois escolha Esvaziar caches nesse menu. Fazer isso junto com a limpeza do DNS cobre as duas camadas onde dados desatualizados costumam se esconder.",
            "O limpador de cache de navegadores (Browser Cache Cleaner) do Disk Mop cuida de Chrome, Firefox, Edge e Safari em uma única tela, então você limpa o cache de todos eles de uma vez em vez de repetir atalhos de teclado em cada um. Junto com o DNS Cache Cleaner, ele transforma a clássica rotina de limpar o cache em dois cliques.",
          ],
        },
        {
          title: "O que a limpeza do DNS não resolve",
          content: [
            "Um aviso honesto sobre o alcance: limpar o DNS corrige resoluções de nome desatualizadas no seu computador, e nada além disso. Se o site em si estiver fora do ar, se o Wi-Fi cair o tempo todo ou se o seu provedor estiver com falha, a limpeza não vai ajudar. Ela também não deixa a navegação do dia a dia visivelmente mais rápida: o cache existe justamente para acelerar as coisas, então esvaziá-lo é um passo de diagnóstico, não um ajuste de desempenho.",
            "O seu roteador também mantém um cache DNS próprio, uma camada fora do alcance do computador. Se a limpeza não resolver, reinicie o roteador e veja se o problema some. Erros DNS_PROBE_FINISHED persistentes costumam indicar que o servidor DNS em uso está com dificuldades: mudar as configurações de rede para um resolvedor público como 1.1.1.1 ou 8.8.8.8 resolve com muito mais frequência do que limpezas repetidas.",
            "Por fim, se um aparelho funciona em uma rede e não em outra, ou se todos os navegadores falham enquanto os outros aplicativos continuam online, a causa provável é a configuração de firewall, VPN ou proxy, e não o cache DNS. A limpeza continua sendo um primeiro passo gratuito e sem risco: só não pare por aí quando os sintomas apontarem para outro lugar.",
          ],
        },
      ],
      verdict: [
        "Limpar o cache DNS é um comando só: ipconfig /flushdns no Windows ou sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder no Mac. É seguro, instantâneo e é o primeiro passo certo quando um site é resolvido de forma errada, mostra erros de DNS ou se recusa a carregar em apenas uma máquina.",
        "Se você prefere nunca abrir um terminal, o Disk Mop resume a mesma operação a um clique e ainda traz um limpador de cache de navegadores para Chrome, Firefox, Edge e Safari: as duas ferramentas que costumam ser usadas juntas. Ele roda no Windows 10/11 e no macOS 12+, e a licença Pro vitalícia é um pagamento único de 19,90 $, sem assinatura.",
      ],
      ctaText: "Limpe o cache DNS em um clique com o Disk Mop",
    },
    ja: {
      title: "WindowsとMacでDNSキャッシュをクリアする方法（2つの手順）",
      metaDescription:
        "DNSキャッシュのクリア手順を解説します。Windowsは ipconfig /flushdns、MacはTerminalでsudo dscacheutil -flushcacheを実行するだけ。サイトが表示されない、DNSエラーが出るときの直し方と、コマンドを使わずワンクリックで済ませる方法もあわせて紹介します。",
      subtitle: "両方のOSでそのまま使えるコマンドと、ターミナル不要の選択肢",
      intro: [
        "WindowsでDNSキャッシュをクリアするには、コマンド プロンプトを開いて ipconfig /flushdns を実行します。Macの場合はTerminalを開き、sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder を実行してください。どちらのコマンドも1秒ほどで完了し、保存されているDNSの記録をすべて削除します。次にサイトを開いたときには、最新のアドレスが改めて問い合わせられます。",
        "答えとしてはこれで十分で、実際ほとんどの方はここまでで解決します。この記事では両方のコマンドを手順ごとに説明し、DNSキャッシュのクリアが実際に何をしているのかを解き明かします。さらに、ターミナル操作を避けたい方に向けてワンクリックで済ませる方法を紹介し、この操作では解決できない接続トラブルについても正直にお伝えします。",
      ],
      sections: [
        {
          title: "DNSキャッシュの役割とクリアすべきタイミング",
          content: [
            "DNS（Domain Name System）はインターネットの住所録です。example.com のような名前を、コンピューターが実際に接続する数字のIPアドレスへ変換します。ページを開くたびにこの問い合わせを繰り返さずに済むよう、OSはローカルにDNSキャッシュ、つまり最近解決した名前とアドレスの小さなデータベースを保持しています。よく見るサイトの表示が速いのは、この仕組みのおかげでもあります。",
            "では、DNSキャッシュのクリアは何をするのでしょうか。行われるのは、このローカルのデータベースを空にすることだけです。アプリがアンインストールされることも、設定が変わることもありません。次に各サイトへアクセスした際に、DNSサーバーへ改めて問い合わせが行われるだけです。クリア直後の初回アクセスはコンマ数秒ほど長くかかりますが、その後は以前とまったく同じ動作に戻ります。",
            "サイトが新しいサーバーへ移転したのに古いほうへつながってしまうとき、スマートフォンでは開けるのにパソコンでは開けないとき、DNSサーバーの設定を変更した後、あるいはブラウザーに DNS_PROBE_FINISHED_NXDOMAIN のようなエラーが表示されるときは、試してみる価値があります。プライバシー面のささやかな利点もあります。Windowsでは、キーボードの前に座った人なら誰でも ipconfig /displaydns で最近アクセスしたドメインを一覧表示できますが、クリアするとこの一覧も消えます。",
          ],
        },
        {
          title: "Windows 10・11で ipconfig /flushdns を使う手順",
          content: [
            "Windows 11では、スタートボタンを右クリックしてTerminalを選びます。Windows 10では、Windowsキーを押して cmd と入力し、コマンド プロンプトを開いてください。このコマンドに管理者権限は必要ありません。表示されたウィンドウで ipconfig /flushdns と入力し、Enterキーを押します。",
            "Windowsは、DNSリゾルバーキャッシュを正常にクリアしたというメッセージを返します。作業はこれで終わりです。再起動も待ち時間もなく、何度繰り返しても危険はありません。PowerShellを使いたい場合は、Clear-DnsClientCache がまったく同じ働きをします。",
            "関連して覚えておくと便利なコマンドが2つあります。ipconfig /displaydns は現在のキャッシュの中身を表示するので、しつこく残る記録が本当に消えたかを確認するのに役立ちます。より深いネットワークの不具合が疑われる場合は、ipconfig /release に続けて ipconfig /renew を実行すると、IPアドレスの割り当ても更新できます。Windows 11で接続トラブルを切り分けるときによく併用される手順です。",
          ],
        },
        {
          title: "macOSでTerminalからDNSキャッシュをクリアする",
          content: [
            "MacでDNSキャッシュを消すには、Terminalを開きます。CommandキーとSpaceキーを押してTerminalと入力するか、「アプリケーション」>「ユーティリティ」から起動してください。次の1行を貼り付けてreturnキーを押します。sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder。同じコマンドはmacOS 12 Monterey以降のすべてのバージョンで使えます。",
            "コマンドが sudo で始まるため、macOSは管理者パスワードの入力を求めます。入力してreturnキーを押してください。打っている間は文字が一切表示されませんが、これはTerminalの正常な動作であり、画面が固まっているわけではありません。Windowsとは違い、macOSは完了メッセージを表示しません。プロンプトに戻れば、それでキャッシュは消えています。",
            "このコマンドの前半と後半は別々の仕事をしています。dscacheutil -flushcache はディレクトリサービスのキャッシュを空にし、killall -HUP mDNSResponder はDNSの問い合わせを担当するプロセスに再読み込みを指示します。2つをまとめて実行するのが、最近のMacで古い記録を確実に消すために広く推奨されている方法です。",
          ],
        },
        {
          title: "ターミナルを使わずにDNSキャッシュをクリアする",
          content: [
            "ここまでのコマンドは無料で、実行も一瞬で、どちらのOSにも最初から用意されています。コマンドラインに慣れている方なら、これ以外に必要なものは本当にありません。とはいえ、そうでない方も大勢います。日常的なメンテナンス作業のために構文を覚えたり、何の反応も返さない画面に sudo と打ち込んだりしなければならない理由はないはずです。",
            "Disk Mopには、同じ処理をワンクリックで実行できるDNSキャッシュクリーナー（DNS Cache Cleaner）が用意されています。Windows 10/11でも、macOS 12以降でも動作します。アプリを開いてDNS Cache Cleanerを選び、一度クリックするだけです。覚えるコマンドも打ち間違いの心配もなく、結果はTerminalで実行した場合とまったく同じです。",
            "DNSキャッシュのクリアは単独で行うことが少ないため、この手軽さはさらに効いてきます。トラブルの原因を探しているときは、たいていブラウザーのキャッシュも消したくなるものですが、Disk Mopは両方のツールを同じ画面にまとめています。機能を絞った無料版があり、Proライセンスはサブスクリプションなしの買い切りで19.90ドルです。",
          ],
        },
        {
          title: "ページの表示がおかしいときはブラウザーのキャッシュも消す",
          content: [
            "あなたとWebサイトの間にあるキャッシュは、OSのDNSキャッシュだけではありません。Chromeは独自の内部DNSキャッシュを持っています。アドレスバーに chrome://net-internals/#dns と入力し、Clear host cache をクリックすれば空にできます。さらにブラウザーはページや画像、スクリプトのコピーも保存しているため、DNSキャッシュのクリアに成功しても古い表示や崩れた表示が残ることがあります。",
            "Chrome、Edge、Firefoxで通常のブラウザーキャッシュを消すには、Ctrl+Shift+Delete（MacではCommand+Shift+Delete）を押し、キャッシュされた画像とファイルを選んで実行します。Safariの場合は「設定」>「詳細」で開発メニューを有効にし、「開発」メニューから「キャッシュを空にする」を選びます。DNSキャッシュのクリアと合わせて行えば、古いデータが残り得る両方の層をカバーできます。",
            "Disk Mopのブラウザーキャッシュクリーナー（Browser Cache Cleaner）は、Chrome、Firefox、Edge、Safariを1つの画面から扱えます。ブラウザーごとにショートカットを繰り返す必要はなく、まとめて一度に消せます。DNS Cache Cleanerと組み合わせれば、「とりあえずキャッシュを消してみる」という定番の手順が2クリックで完了します。",
          ],
        },
        {
          title: "DNSキャッシュのクリアでは直らない問題",
          content: [
            "範囲について正直にお伝えします。DNSキャッシュのクリアで直るのは、お使いのコンピューターに残った古い名前解決だけで、それ以外には効きません。サイト自体が停止している場合、Wi-Fiが切れ続ける場合、契約しているプロバイダーで障害が起きている場合には役に立ちません。また、普段の閲覧が目に見えて速くなることもありません。キャッシュはそもそも表示を速くするためのものなので、消す作業は原因の切り分けであって、パフォーマンス改善策ではないのです。",
            "ルーターもまた独自のDNSキャッシュを保持しており、この層はコンピューターからは操作できません。クリアしても改善しない場合は、ルーターを再起動して様子を見てください。DNS_PROBE_FINISHED 系のエラーが続くときは、利用中のDNSサーバー自体が不安定なことが多く、ネットワーク設定を 1.1.1.1 や 8.8.8.8 のようなパブリックDNSに切り替えるほうが、クリアを繰り返すよりもはるかに高い確率で解決します。",
            "最後に、ある機器が特定のネットワークでは使えるのに別のネットワークでは使えない場合や、他のアプリは通信できているのにブラウザーだけがすべて失敗する場合は、DNSキャッシュよりもファイアウォール、VPN、プロキシの設定が原因である可能性が高いです。クリアは無料でリスクのない最初の一手ですが、症状が別の方向を指しているときは、そこで止まらないでください。",
          ],
        },
      ],
      verdict: [
        "DNSキャッシュのクリアはコマンド1つで完了します。Windowsなら ipconfig /flushdns、Macなら sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder です。安全ですぐに終わるため、サイトが誤ったアドレスに解決される、DNSエラーが表示される、特定の1台だけで開けないといった場面での最初の一手として適しています。",
        "ターミナルを開きたくない場合は、Disk Mopが同じ処理をワンクリックにまとめ、Chrome、Firefox、Edge、Safari向けのブラウザーキャッシュクリーナーも併せて提供します。たいてい一緒に必要になる2つのツールです。Windows 10/11とmacOS 12以降に対応し、買い切りのPro永続ライセンスはサブスクリプションなしで19.90ドルです。",
      ],
      ctaText: "Disk MopでDNSキャッシュをワンクリック削除",
    },
  },
};
