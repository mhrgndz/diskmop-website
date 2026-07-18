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
            'Bu kolaylık katlanarak artar, çünkü DNS temizliği nadiren tek başına yapılır. Sorun giderirken genellikle tarayıcı önbelleklerini de temizlemek istersiniz ve Disk Mop iki aracı aynı arayüzde yan yana sunar. Sınırlı özelliklere sahip ücretsiz bir sürümü vardır; Pro lisansı ise abonelik olmadan tek seferlik $9.90\'dır.',
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
        'Terminali hiç açmak istemiyorsanız, Disk Mop aynı işlemi tek tıklamaya indirir ve yanına Chrome, Firefox, Edge ve Safari için tarayıcı önbellek temizleyicisini ekler — genellikle birlikte ihtiyaç duyduğunuz iki araç. Windows 10/11 ve macOS 12+ üzerinde çalışır; ömür boyu Pro lisansı abonelik olmadan tek seferlik $9.90\'dır.',
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
            'The convenience compounds because a DNS flush rarely happens in isolation. When you are troubleshooting, you usually want to clear browser caches too, and Disk Mop keeps both tools side by side in the same interface. There is a free version with limited features, and the Pro license is a one-time $9.90 payment with no subscription.',
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
        'If you would rather never open a terminal, Disk Mop wraps the same operation in a single click and pairs it with a Browser Cache Cleaner for Chrome, Firefox, Edge, and Safari — the two tools you usually need together. It runs on Windows 10/11 and macOS 12+, and a lifetime Pro license is a one-time $9.90 with no subscription.',
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
            'DNS (Domain Name System) ist das Adressbuch des Internets: Es übersetzt einen Namen wie example.com in die numerische IP-Adresse, mit der sich Ihr Computer tatsächlich verbindet. Damit diese Abfrage nicht bei jedem Seitenaufruf wiederholt werden muss, führt Ihr Betriebssystem einen lokalen DNS-Cache — eine kleine Datenbank kürzlich aufgelöster Namen und Adressen.',
            'Was bewirkt das Leeren des DNS-Cache also? Es leert lediglich diese lokale Datenbank. Es wird nichts deinstalliert und keine Einstellung geändert; Ihr System fragt beim nächsten Besuch jeder Website einfach frische Daten vom DNS-Server ab. Der erste Aufruf danach dauert einen Sekundenbruchteil länger, danach läuft alles wie zuvor.',
            'Das Leeren lohnt sich, wenn eine Website auf einen neuen Server umgezogen ist und Sie noch auf dem alten landen, wenn eine Seite am Handy lädt, aber nicht am Computer, nach einem Wechsel des DNS-Anbieters oder bei Fehlern wie DNS_PROBE_FINISHED_NXDOMAIN im Browser. Unter Windows löscht ein Flush zudem die mit ipconfig /displaydns einsehbare Liste zuletzt besuchter Domains — ein kleiner Datenschutzgewinn.',
          ],
        },
        {
          title: 'DNS unter Windows 10 und 11 mit ipconfig /flushdns leeren',
          content: [
            'Klicken Sie unter Windows 11 mit der rechten Maustaste auf die Start-Schaltfläche und wählen Sie Terminal; unter Windows 10 drücken Sie die Windows-Taste, tippen cmd und öffnen die Eingabeaufforderung. Administratorrechte sind nicht nötig. Geben Sie ipconfig /flushdns ein und drücken Sie die Eingabetaste.',
            'Windows bestätigt mit einer Meldung, dass der DNS-Auflösungscache geleert wurde. Das ist bereits alles — kein Neustart, keine Ausfallzeit, beliebig oft wiederholbar. In PowerShell erledigt der Befehl Clear-DnsClientCache exakt dasselbe.',
            'Zwei verwandte Befehle sind nützlich: ipconfig /displaydns zeigt den aktuellen Cache-Inhalt an, und bei tieferen Netzwerkproblemen erneuern ipconfig /release und anschließend ipconfig /renew zusätzlich Ihre IP-Adresse — ein häufiger Begleitschritt bei der Fehlersuche unter Windows 11.',
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
            'Der Komfort zahlt sich doppelt aus, weil ein DNS-Flush selten allein kommt: Bei der Fehlersuche will man meist auch die Browser-Caches leeren, und Disk Mop bietet beide Werkzeuge in einer Oberfläche. Es gibt eine kostenlose Version mit eingeschränkten Funktionen; die Pro-Lizenz kostet einmalig $9.90 — ohne Abo.',
          ],
        },
        {
          title: 'Bei hartnäckigen Seiten auch den Browser-Cache leeren',
          content: [
            'Der DNS-Cache des Betriebssystems ist nicht der einzige Cache zwischen Ihnen und einer Website. Chrome führt einen eigenen internen DNS-Cache: Geben Sie chrome://net-internals/#dns in die Adressleiste ein und klicken Sie auf Clear host cache. Browser speichern außerdem Kopien von Seiten, Bildern und Skripten — selbst nach einem erfolgreichen DNS-Flush kann daher eine veraltete Version einer Website erscheinen.',
            'Den normalen Browser-Cache leeren Sie in Chrome, Edge oder Firefox mit Strg+Umschalt+Entf (am Mac Befehl+Umschalt+Entf); wählen Sie zwischengespeicherte Bilder und Dateien und bestätigen Sie. In Safari aktivieren Sie unter Einstellungen, Erweitert das Entwickler-Menü und wählen dort die Option zum Leeren der Cache-Speicher.',
            'Disk Mops Browser-Cache-Bereiniger (Browser Cache Cleaner) deckt Chrome, Firefox, Edge und Safari von einem Bildschirm aus ab — ein Durchgang statt Tastenkombinationen in jedem Browser einzeln. Zusammen mit dem DNS Cache Cleaner wird die klassische Cache-Routine zu zwei Klicks.',
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
        'Wer nie ein Terminal öffnen möchte, bekommt mit Disk Mop dieselbe Operation als einen einzigen Klick — ergänzt um einen Browser-Cache-Bereiniger für Chrome, Firefox, Edge und Safari, die beiden Werkzeuge, die man meist zusammen braucht. Läuft unter Windows 10/11 und macOS 12+; die Pro-Lizenz kostet einmalig $9.90, ohne Abo.',
      ],
      ctaText: 'DNS-Cache mit einem Klick leeren — mit Disk Mop',
    },
  },
};
