import type { Article } from '../types';

export const wslDockerDiskSpace: Article = {
  slug: 'wsl-docker-disk-space',
  type: 'guide',
  category: 'Disk Management',
  date: '2026-09-04',
  readingTime: 9,
  content: {
    tr: {
      title: 'WSL2 ve Docker Diski Neden Şişiyor? ext4.vhdx Küçültme Rehberi',
      metaDescription:
        'WSL2 ve Docker Desktop sanal diski büyür ama içindeki dosyalar silinince küçülmez. ext4.vhdx dosyasını diskpart ile sıkıştırarak onlarca gigabaytı geri alın.',
      subtitle: 'Sanal Disk Büyür, Ama Asla Kendiliğinden Küçülmez',
      intro: [
        'Kısa cevap: WSL2 dosya sistemini `ext4.vhdx` adlı bir sanal diskte tutar. Bu dosya ihtiyaç duydukça büyür ama içindeki dosyaları sildiğinizde KÜÇÜLMEZ. Alanı geri almak için önce dağıtımın içindeki gereksiz veriyi temizleyin, sonra `wsl --shutdown` çalıştırıp `diskpart` ile `compact vdisk` komutunu uygulayın.',
        'Bu, "C sürücüm doldu ama neyin doldurduğunu bulamıyorum" şikâyetinin geliştiricilerdeki en yaygın sebebidir. Disk analiz araçları size 80 GB\'lık tek bir dosya gösterir, siz de ona dokunmaya çekinirsiniz — çünkü sildiğinizde tüm Linux ortamınız gider. Bu rehberde o dosyanın ne olduğunu, güvenle nasıl küçültüleceğini ve bir daha şişmemesi için ne yapılacağını anlatıyoruz.',
      ],
      keyTakeaways: [
        'WSL2 tüm Linux dosya sisteminizi tek bir `ext4.vhdx` sanal disk dosyasında tutar; bu dosya büyür ama otomatik küçülmez.',
        'Dosya genellikle `%LOCALAPPDATA%\\Packages\\<dağıtım>\\LocalState\\ext4.vhdx` yolundadır; Docker Desktop ise kendi `docker_data.vhdx` dosyasını kullanır.',
        'Sıra önemlidir: önce dağıtımın İÇİNDEKİ veriyi silin, sonra sanal diski sıkıştırın. Sıkıştırma yalnızca içeride boşalmış alanı geri verir.',
        'Docker için `docker system prune -a --volumes` komutu çoğu zaman tek başına onlarca gigabayt boşaltır.',
        'Sıkıştırma öncesi `wsl --shutdown` şarttır; dosya kullanımdayken sıkıştırılamaz.',
        'WSL 2.0 ve sonrasında `.wslconfig` içine `sparseVhd=true` yazarak diskin kendiliğinden küçülmesini açabilirsiniz.',
      ],
      howTo: {
        name: 'WSL2 ve Docker sanal diskini küçültme',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Dağıtımın içindeki alanı boşaltın',
            text: 'WSL terminalinde `sudo apt clean`, kullanılmayan paketler için `sudo apt autoremove`, Docker kullanıyorsanız `docker system prune -a --volumes` çalıştırın. Sıkıştırma yalnızca içeride gerçekten boşalan alanı geri verebilir.',
          },
          {
            name: 'Sanal disk dosyasının yolunu bulun',
            text: 'PowerShell\'de `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName` komutunu çalıştırın. Docker Desktop için dosya genellikle `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx` yolundadır.',
          },
          {
            name: 'WSL\'i tamamen kapatın',
            text: 'PowerShell\'de `wsl --shutdown` yazın. Docker Desktop açıksa onu da kapatın. Dosya kullanımdayken sıkıştırma başarısız olur.',
          },
          {
            name: 'diskpart ile sıkıştırın',
            text: 'Yönetici PowerShell\'de `diskpart` yazın, ardından sırayla: `select vdisk file="TAM_YOL\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Sıkıştırma disk boyutuna göre birkaç dakika sürebilir.',
          },
          {
            name: 'Sonucu doğrulayın ve tekrarını önleyin',
            text: 'Dosya boyutuna yeniden bakın. Kalıcı çözüm için `%USERPROFILE%\\.wslconfig` dosyasına `[experimental]` başlığı altında `sparseVhd=true` satırını ekleyin; WSL 2.0+ sürümlerinde disk kendiliğinden küçülmeye başlar.',
          },
        ],
      },
      sections: [
        {
          title: 'Neden Büyüyor da Küçülmüyor?',
          content: [
            'WSL2 gerçek bir sanal makinedir ve Linux dosya sisteminin tamamını Windows tarafında tek bir dosyada saklar: `ext4.vhdx`. Bu, "dinamik olarak genişleyen" bir sanal disktir. İçeride 5 GB veri varsa dosya yaklaşık 5 GB yer kaplar; 60 GB veri yazarsanız dosya 60 GB\'a çıkar.',
            'Sorun ters yönde başlar. İçeride 50 GB\'lık Docker imajını sildiğinizde Linux tarafında alan boşalır, ama Windows tarafındaki VHDX dosyası aynı boyutta kalır. Sanal disk formatı boşalan blokları "artık kullanılmıyor" diye işaretler ama dosyayı fiziksel olarak kısaltmaz. Sonuç: `df -h` içeride bol boş alan gösterirken Windows\'ta C sürücüsü dolu görünür.',
            'Docker Desktop\'ın WSL2 arka ucu kullanması durumu ikiye katlar. Docker kendi dağıtımını kurar ve imajları, katmanları, birimleri ayrı bir `docker_data.vhdx` dosyasında tutar. Yıllardır kullanılan bir geliştirme makinesinde bu iki dosyanın toplamı 100 GB\'ı rahatlıkla geçer.',
          ],
        },
        {
          title: 'Önce İçerisi: Sıkıştırmadan Önce Ne Silinmeli?',
          content: [
            'Sıkıştırma sihir yapmaz; yalnızca içeride gerçekten boşalmış blokları geri verir. Bu yüzden ilk adım her zaman dağıtımın içini temizlemektir. Debian/Ubuntu tabanlı dağıtımlarda `sudo apt clean` indirilen paket önbelleğini, `sudo apt autoremove --purge` ise artık hiçbir paketin ihtiyaç duymadığı bağımlılıkları siler.',
            'Docker kullanıyorsanız asıl kazanç oradadır. `docker system df` komutu imajların, konteynerlerin, birimlerin ve derleme önbelleğinin ne kadar yer kapladığını ayrı ayrı gösterir. `docker system prune -a --volumes` komutu çalışmayan her şeyi siler — dikkat edin, bu komut kullanılmayan birimleri de siler, içinde saklamak istediğiniz veritabanı varsa önce onu dışa aktarın.',
            'Derleme önbelleği çoğu zaman en büyük kalemdir ve gözden kaçar. `docker builder prune -a` yalnızca önbelleği hedefler ve imajlarınıza dokunmaz. Node.js projelerinde ayrıca WSL içindeki `node_modules` klasörleri ve `~/.npm`, `~/.cache` dizinleri de onlarca gigabayt tutabilir.',
          ],
        },
        {
          title: 'Sıkıştırma: Alanı Windows Tarafına Geri Vermek',
          content: [
            'İçeriyi temizledikten sonra sıra sanal diski fiziksel olarak kısaltmaya gelir. Bunun ön koşulu WSL\'in tamamen kapalı olmasıdır: PowerShell\'de `wsl --shutdown` yazın, Docker Desktop açıksa onu da kapatın. Dosya bir süreç tarafından tutuluyorsa sıkıştırma "erişim reddedildi" hatası verir.',
            'Yönetici yetkisiyle açılmış bir PowerShell\'de `diskpart` aracını başlatın ve şu adımları sırayla uygulayın: `select vdisk file="C:\\Users\\ad\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, ardından `attach vdisk readonly`, sonra `compact vdisk`, en son `detach vdisk`. Salt okunur bağlama önemlidir; diski değiştirilebilir biçimde bağlarsanız sıkıştırma çalışmaz.',
            'Hyper-V bileşenleri kurulu bir sistemde tek satırlık alternatif de vardır: `Optimize-VHD -Path "yol\\ext4.vhdx" -Mode Full`. Bu komut Windows Home sürümlerinde bulunmaz, o yüzden `diskpart` yolu daha güvenli bir varsayılandır. İşlem bittiğinde dosya boyutunun içerideki gerçek kullanıma yaklaştığını göreceksiniz.',
          ],
        },
        {
          title: 'Bir Daha Şişmemesi İçin',
          content: [
            'WSL 2.0 sürümüyle birlikte Microsoft "seyrek" (sparse) sanal disk desteği ekledi. `%USERPROFILE%\\.wslconfig` dosyasına `[experimental]` başlığı altında `sparseVhd=true` satırını yazıp `wsl --shutdown` çalıştırdığınızda, yeni oluşturulan diskler içeride alan boşaldıkça kendiliğinden küçülmeye başlar. Var olan bir dağıtımı seyrek biçime çevirmek için `wsl --manage <dağıtım> --set-sparse true` komutunu kullanabilirsiniz.',
            'Alışkanlık tarafında iki şey işe yarar. Birincisi, Docker derleme önbelleğini düzenli aralıklarla temizlemek — `docker builder prune -a` komutunu ayda bir çalıştırmak çoğu makinede yeterlidir. İkincisi, büyük veri kümelerini WSL dosya sistemine değil, Windows tarafına koyup `/mnt/c` üzerinden erişmek; böylece veri sanal diski şişirmez.',
            'Bu dosyaları ilk etapta fark etmek de bir sorundur, çünkü tek bir dosya olarak görünürler ve klasör boyutu hesaplayan araçlar onları öne çıkarmaz. Disk Mop\'un Büyük Dosyalar (Large Files) modülü sürücüdeki en büyük dosyaları boyut sırasına dizer; `ext4.vhdx` böyle bir listede genellikle ilk üçe girer. Disk Haritası (Disk Treemap) görünümü de aynı dosyayı ekranın büyük bir bölümünü kaplayan tek bir dikdörtgen olarak gösterir.',
          ],
        },
      ],
      faq: [
        {
          question: 'ext4.vhdx dosyasını doğrudan silebilir miyim?',
          answer:
            'Hayır. Bu dosya WSL dağıtımınızın tamamıdır: kurduğunuz paketler, projeleriniz, veritabanlarınız hepsi içindedir. Sildiğinizde o dağıtım tamamen gider. Alanı geri almanın doğru yolu içeriği temizleyip diski sıkıştırmaktır.',
        },
        {
          question: 'Sıkıştırma verilerime zarar verir mi?',
          answer:
            'Hayır. `compact vdisk` yalnızca sanal disk dosyasının kullanılmayan bloklarını atar; dosya sistemindeki verilere dokunmaz. Yine de işlem öncesi WSL\'i düzgün kapatmak (`wsl --shutdown`) ve kritik projelerinizin yedeğinin olması iyi bir alışkanlıktır.',
        },
        {
          question: 'Docker Desktop dosyasını nerede bulurum?',
          answer:
            'Güncel Docker Desktop sürümlerinde `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx` yolundadır. Eski sürümlerde `docker-desktop-data` adlı ayrı bir WSL dağıtımı olarak `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx` yolunda bulunur.',
        },
        {
          question: 'sparseVhd açıksa artık hiç sıkıştırmam gerekmez mi?',
          answer:
            'Çoğu zaman gerekmez, ama seyrek disk anlık değil kademeli çalışır. Tek seferde çok büyük bir silme yaptıysanız elle sıkıştırma hâlâ daha hızlı sonuç verir. Ayrıca `sparseVhd` yalnızca ayar açıldıktan sonra oluşturulan disklerde otomatik geçerlidir.',
        },
      ],
      verdict: [
        'WSL2 ve Docker\'ın diski şişirmesi bir hata değil, sanal disklerin doğası. Kural basit: içeriyi temizle, WSL\'i kapat, diski sıkıştır. Bu üç adım çoğu geliştirme makinesinde tek seferde 20-60 GB geri kazandırır.',
        'Kalıcı çözüm için `sparseVhd=true` ayarını açın ve derleme önbelleğini düzenli temizleyin. Diskinizde başka nelerin biriktiğini görmek isterseniz Disk Mop\'un Büyük Dosyalar ve Disk Haritası modülleri bu tür tek-büyük-dosya durumlarını saniyeler içinde ortaya çıkarır.',
      ],
      ctaText: 'Diskinizde başka hangi dev dosyaların saklandığını görün',
    },
    en: {
      title: 'Why WSL2 and Docker Eat Your Disk: How to Shrink ext4.vhdx',
      metaDescription:
        'WSL2 and Docker Desktop virtual disks grow but never shrink when you delete files inside. Reclaim tens of gigabytes by compacting ext4.vhdx with diskpart.',
      subtitle: 'The Virtual Disk Grows, and Never Shrinks on Its Own',
      intro: [
        'Short answer: WSL2 keeps its entire Linux filesystem in a virtual disk called `ext4.vhdx`. That file grows on demand but does NOT shrink when you delete files inside it. To reclaim the space, first clear data inside the distribution, then run `wsl --shutdown` and compact the disk with `diskpart`.',
        'This is the single most common cause of "my C drive is full and I cannot find what is using it" on a developer machine. Disk analysis tools show you one 80 GB file and you hesitate to touch it — because deleting it would take your whole Linux environment with it. This guide explains what that file is, how to shrink it safely, and how to stop it from ballooning again.',
      ],
      keyTakeaways: [
        'WSL2 stores your whole Linux filesystem in a single `ext4.vhdx` virtual disk that grows but never shrinks automatically.',
        'The file usually sits at `%LOCALAPPDATA%\\Packages\\<distro>\\LocalState\\ext4.vhdx`; Docker Desktop keeps its own `docker_data.vhdx`.',
        'Order matters: delete data INSIDE the distribution first, then compact the virtual disk. Compacting only returns space that is already free inside.',
        'For Docker, `docker system prune -a --volumes` alone often frees tens of gigabytes.',
        '`wsl --shutdown` is mandatory before compacting; the file cannot be shrunk while it is in use.',
        'On WSL 2.0 and later, adding `sparseVhd=true` to `.wslconfig` lets the disk shrink itself over time.',
      ],
      howTo: {
        name: 'Shrink the WSL2 and Docker virtual disk',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Free space inside the distribution',
            text: 'In your WSL terminal run `sudo apt clean`, then `sudo apt autoremove` for orphaned packages, and `docker system prune -a --volumes` if you use Docker. Compacting can only reclaim space that is genuinely free inside.',
          },
          {
            name: 'Find the virtual disk file',
            text: 'In PowerShell run `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName`. For Docker Desktop the file is usually at `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'Shut WSL down completely',
            text: 'Run `wsl --shutdown` in PowerShell. Close Docker Desktop as well if it is running. Compacting fails while any process holds the file open.',
          },
          {
            name: 'Compact it with diskpart',
            text: 'In an elevated PowerShell run `diskpart`, then in order: `select vdisk file="FULL_PATH\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Depending on size this takes a few minutes.',
          },
          {
            name: 'Verify, then prevent a repeat',
            text: 'Check the file size again. For a lasting fix add `sparseVhd=true` under an `[experimental]` heading in `%USERPROFILE%\\.wslconfig`; on WSL 2.0+ the disk then starts shrinking on its own.',
          },
        ],
      },
      sections: [
        {
          title: 'Why It Grows but Never Shrinks',
          content: [
            'WSL2 is a real virtual machine, and it keeps the whole Linux filesystem in one file on the Windows side: `ext4.vhdx`. It is a dynamically expanding virtual disk. With 5 GB of data inside, the file takes roughly 5 GB; write 60 GB and the file grows to 60 GB.',
            'The problem starts in the other direction. Delete a 50 GB Docker image inside and Linux reports the space as free — but the VHDX file on Windows stays exactly the same size. The virtual disk format marks the freed blocks as unused without physically shortening the file. The result: `df -h` shows plenty of room inside while Windows reports a full C drive.',
            'Docker Desktop on the WSL2 backend doubles the effect. Docker installs its own distribution and keeps images, layers and volumes in a separate `docker_data.vhdx`. On a development machine used for a couple of years, those two files together comfortably pass 100 GB.',
          ],
        },
        {
          title: 'Inside First: What to Delete Before Compacting',
          content: [
            'Compacting is not magic; it only returns blocks that are genuinely free inside. So the first step is always cleaning the distribution. On Debian and Ubuntu based distros, `sudo apt clean` removes the downloaded package cache and `sudo apt autoremove --purge` drops dependencies nothing needs any more.',
            'If you use Docker, that is where the real win is. `docker system df` breaks down how much space images, containers, volumes and build cache each take. `docker system prune -a --volumes` removes everything not currently in use — note that this also deletes unused volumes, so export any database you want to keep first.',
            'Build cache is often the largest line item and the easiest to overlook. `docker builder prune -a` targets only the cache and leaves your images alone. On Node.js projects, `node_modules` folders inside WSL plus `~/.npm` and `~/.cache` can add tens of gigabytes of their own.',
          ],
        },
        {
          title: 'Compacting: Giving the Space Back to Windows',
          content: [
            'Once the inside is clean, the virtual disk has to be physically shortened. The prerequisite is that WSL is fully stopped: run `wsl --shutdown` in PowerShell and close Docker Desktop if it is open. If any process still holds the file, compacting fails with an access-denied error.',
            'In an elevated PowerShell, start `diskpart` and run these steps in order: `select vdisk file="C:\\Users\\name\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, then `attach vdisk readonly`, then `compact vdisk`, and finally `detach vdisk`. The read-only attach matters; if you mount the disk writable, compacting will not run.',
            'On systems with the Hyper-V components installed there is a one-line alternative: `Optimize-VHD -Path "path\\ext4.vhdx" -Mode Full`. That cmdlet is missing on Windows Home editions, which makes the `diskpart` route the safer default. When it finishes, the file size should be close to the real usage inside.',
          ],
        },
        {
          title: 'Stopping It From Happening Again',
          content: [
            'With WSL 2.0, Microsoft added support for sparse virtual disks. Add `sparseVhd=true` under an `[experimental]` heading in `%USERPROFILE%\\.wslconfig`, run `wsl --shutdown`, and newly created disks begin shrinking themselves as space frees up inside. To convert an existing distribution, use `wsl --manage <distro> --set-sparse true`.',
            'Two habits help on top of that. First, prune the Docker build cache on a schedule — running `docker builder prune -a` once a month is enough on most machines. Second, keep large datasets on the Windows side and reach them through `/mnt/c` instead of storing them in the WSL filesystem, so the data never inflates the virtual disk.',
            'Spotting these files in the first place is its own problem, because they appear as a single file and folder-size tools do not make them stand out. Disk Mop\'s Large Files module sorts the biggest files on a drive by size, and `ext4.vhdx` usually lands in the top three. The Disk Treemap view shows the same file as one rectangle covering a large part of the screen.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can I just delete ext4.vhdx?',
          answer:
            'No. That file is your entire WSL distribution: installed packages, projects and databases all live inside it. Deleting it removes the distribution completely. The correct way to reclaim space is to clean the contents and then compact the disk.',
        },
        {
          question: 'Does compacting risk my data?',
          answer:
            'No. `compact vdisk` only discards unused blocks of the virtual disk file; it does not touch the data in the filesystem. Even so, shutting WSL down properly with `wsl --shutdown` first, and having a backup of critical projects, is a good habit.',
        },
        {
          question: 'Where is the Docker Desktop file?',
          answer:
            'On current Docker Desktop versions it is at `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Older versions ship a separate `docker-desktop-data` WSL distribution with the file at `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'With sparseVhd on, do I never need to compact again?',
          answer:
            'Usually not, but sparse disks reclaim gradually rather than instantly. After one very large deletion, a manual compact still gets you the space faster. Note also that `sparseVhd` applies automatically only to disks created after you enable it.',
        },
      ],
      verdict: [
        'WSL2 and Docker inflating your disk is not a bug, it is how virtual disks behave. The rule is simple: clean the inside, shut WSL down, compact the disk. Those three steps reclaim 20-60 GB in one go on most development machines.',
        'For a lasting fix, turn on `sparseVhd=true` and prune the build cache regularly. If you want to see what else has quietly accumulated on the drive, Disk Mop\'s Large Files and Disk Treemap modules surface this kind of single-huge-file situation in seconds.',
      ],
      ctaText: 'See what other giant files are hiding on your drive',
    },
    de: {
      title: 'Warum WSL2 und Docker die Festplatte füllen: ext4.vhdx verkleinern',
      metaDescription:
        'Virtuelle Datenträger von WSL2 und Docker Desktop wachsen, schrumpfen aber nie von selbst. Holen Sie sich zig Gigabyte zurück, indem Sie ext4.vhdx mit diskpart komprimieren.',
      subtitle: 'Der virtuelle Datenträger wächst und schrumpft nie von allein',
      intro: [
        'Kurze Antwort: WSL2 speichert das gesamte Linux-Dateisystem in einer virtuellen Festplatte namens `ext4.vhdx`. Diese Datei wächst bei Bedarf, wird aber NICHT kleiner, wenn Sie darin Dateien löschen. Um Platz zurückzugewinnen, räumen Sie zuerst innerhalb der Distribution auf, führen dann `wsl --shutdown` aus und komprimieren die Datei mit `diskpart`.',
        'Das ist die häufigste Ursache für "meine Systempartition ist voll und ich finde nicht, was sie belegt" auf Entwicklerrechnern. Analysewerkzeuge zeigen eine einzelne 80-GB-Datei, und Sie trauen sich nicht, sie anzufassen — zu Recht, denn ein Löschen nimmt die gesamte Linux-Umgebung mit. Dieser Leitfaden erklärt, was die Datei ist, wie Sie sie gefahrlos verkleinern und wie Sie das Aufblähen künftig verhindern.',
      ],
      keyTakeaways: [
        'WSL2 legt das komplette Linux-Dateisystem in einer einzigen `ext4.vhdx` ab, die wächst, aber nie automatisch schrumpft.',
        'Die Datei liegt meist unter `%LOCALAPPDATA%\\Packages\\<Distribution>\\LocalState\\ext4.vhdx`; Docker Desktop nutzt eine eigene `docker_data.vhdx`.',
        'Die Reihenfolge zählt: erst Daten INNERHALB der Distribution löschen, dann den virtuellen Datenträger komprimieren.',
        'Bei Docker gibt `docker system prune -a --volumes` oft allein schon zig Gigabyte frei.',
        '`wsl --shutdown` ist vor dem Komprimieren zwingend; eine benutzte Datei lässt sich nicht verkleinern.',
        'Ab WSL 2.0 sorgt `sparseVhd=true` in der `.wslconfig` dafür, dass der Datenträger mit der Zeit von selbst schrumpft.',
      ],
      howTo: {
        name: 'Virtuellen Datenträger von WSL2 und Docker verkleinern',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Platz innerhalb der Distribution schaffen',
            text: 'Im WSL-Terminal `sudo apt clean` ausführen, dann `sudo apt autoremove` für verwaiste Pakete und bei Docker `docker system prune -a --volumes`. Komprimieren kann nur Platz zurückgeben, der innen wirklich frei ist.',
          },
          {
            name: 'Pfad der Datei ermitteln',
            text: 'In PowerShell `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName` ausführen. Bei Docker Desktop liegt die Datei meist unter `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'WSL vollständig beenden',
            text: '`wsl --shutdown` in PowerShell ausführen und Docker Desktop schließen, falls es läuft. Solange ein Prozess die Datei hält, schlägt das Komprimieren fehl.',
          },
          {
            name: 'Mit diskpart komprimieren',
            text: 'In einer PowerShell als Administrator `diskpart` starten und nacheinander: `select vdisk file="VOLLER_PFAD\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Je nach Größe dauert das einige Minuten.',
          },
          {
            name: 'Prüfen und Wiederholung verhindern',
            text: 'Dateigröße erneut ansehen. Dauerhaft hilft `sparseVhd=true` unter der Überschrift `[experimental]` in `%USERPROFILE%\\.wslconfig`; ab WSL 2.0 schrumpft der Datenträger dann selbstständig.',
          },
        ],
      },
      sections: [
        {
          title: 'Warum sie wächst und nie schrumpft',
          content: [
            'WSL2 ist eine echte virtuelle Maschine und legt das gesamte Linux-Dateisystem auf der Windows-Seite in einer einzigen Datei ab: `ext4.vhdx`. Es handelt sich um einen dynamisch wachsenden virtuellen Datenträger. Bei 5 GB Daten belegt die Datei etwa 5 GB; schreiben Sie 60 GB, wächst sie auf 60 GB.',
            'Das Problem beginnt in der Gegenrichtung. Löschen Sie innen ein 50 GB großes Docker-Image, meldet Linux den Platz als frei — die VHDX-Datei unter Windows bleibt jedoch exakt gleich groß. Das Format markiert die freigewordenen Blöcke lediglich als unbenutzt, ohne die Datei physisch zu kürzen. Ergebnis: `df -h` zeigt innen reichlich Platz, Windows meldet ein volles Laufwerk C.',
            'Docker Desktop mit WSL2-Backend verdoppelt den Effekt. Docker installiert eine eigene Distribution und hält Images, Layer und Volumes in einer separaten `docker_data.vhdx`. Auf einem Entwicklungsrechner, der ein paar Jahre in Betrieb ist, überschreiten beide Dateien zusammen mühelos 100 GB.',
          ],
        },
        {
          title: 'Zuerst innen: Was vor dem Komprimieren gelöscht wird',
          content: [
            'Komprimieren ist keine Zauberei; es gibt nur Blöcke zurück, die innen tatsächlich frei sind. Der erste Schritt ist deshalb immer das Aufräumen der Distribution. Unter Debian- und Ubuntu-basierten Systemen entfernt `sudo apt clean` den heruntergeladenen Paket-Cache, `sudo apt autoremove --purge` die Abhängigkeiten, die kein Paket mehr braucht.',
            'Bei Docker liegt der eigentliche Gewinn. `docker system df` schlüsselt auf, wie viel Images, Container, Volumes und Build-Cache jeweils belegen. `docker system prune -a --volumes` entfernt alles derzeit Ungenutzte — Achtung, das löscht auch unbenutzte Volumes, exportieren Sie also vorher jede Datenbank, die Sie behalten wollen.',
            'Der Build-Cache ist oft der größte und zugleich am leichtesten übersehene Posten. `docker builder prune -a` trifft nur den Cache und lässt Ihre Images unberührt. In Node.js-Projekten kommen `node_modules`-Ordner innerhalb von WSL sowie `~/.npm` und `~/.cache` mit weiteren zig Gigabyte hinzu.',
          ],
        },
        {
          title: 'Komprimieren: den Platz an Windows zurückgeben',
          content: [
            'Ist innen aufgeräumt, muss der virtuelle Datenträger physisch gekürzt werden. Voraussetzung ist, dass WSL vollständig steht: `wsl --shutdown` in PowerShell ausführen und Docker Desktop schließen. Hält noch ein Prozess die Datei, scheitert das Komprimieren mit einem Zugriffsfehler.',
            'Starten Sie in einer PowerShell mit Administratorrechten `diskpart` und führen Sie der Reihe nach aus: `select vdisk file="C:\\Users\\name\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, dann `attach vdisk readonly`, dann `compact vdisk` und zuletzt `detach vdisk`. Das schreibgeschützte Einhängen ist wichtig; schreibbar eingebunden läuft das Komprimieren nicht.',
            'Auf Systemen mit installierten Hyper-V-Komponenten gibt es eine Einzeiler-Alternative: `Optimize-VHD -Path "Pfad\\ext4.vhdx" -Mode Full`. Dieses Cmdlet fehlt in den Home-Editionen von Windows, weshalb der `diskpart`-Weg die sicherere Voreinstellung ist. Danach liegt die Dateigröße nahe an der tatsächlichen Belegung im Inneren.',
          ],
        },
        {
          title: 'Damit es nicht wieder passiert',
          content: [
            'Mit WSL 2.0 hat Microsoft Unterstützung für dünn besetzte (sparse) virtuelle Datenträger ergänzt. Tragen Sie in `%USERPROFILE%\\.wslconfig` unter der Überschrift `[experimental]` die Zeile `sparseVhd=true` ein und führen Sie `wsl --shutdown` aus; neu angelegte Datenträger schrumpfen dann von selbst, sobald innen Platz frei wird. Eine bestehende Distribution wandeln Sie mit `wsl --manage <Distribution> --set-sparse true` um.',
            'Zwei Gewohnheiten helfen zusätzlich. Erstens den Docker-Build-Cache regelmäßig leeren — `docker builder prune -a` einmal im Monat genügt auf den meisten Rechnern. Zweitens große Datenbestände auf der Windows-Seite halten und über `/mnt/c` darauf zugreifen, statt sie im WSL-Dateisystem zu speichern; so blähen die Daten den virtuellen Datenträger nicht auf.',
            'Solche Dateien überhaupt zu bemerken ist ein eigenes Problem, denn sie erscheinen als eine einzige Datei und fallen in ordnergrößenbasierten Werkzeugen nicht auf. Das Modul Große Dateien (Large Files) von Disk Mop sortiert die größten Dateien eines Laufwerks nach Größe; `ext4.vhdx` landet dabei meist unter den ersten drei. Die Ansicht Disk Treemap zeigt dieselbe Datei als ein Rechteck, das einen großen Teil des Bildschirms einnimmt.',
          ],
        },
      ],
      faq: [
        {
          question: 'Kann ich ext4.vhdx einfach löschen?',
          answer:
            'Nein. Diese Datei IST Ihre WSL-Distribution: installierte Pakete, Projekte und Datenbanken liegen alle darin. Ein Löschen entfernt die Distribution vollständig. Der richtige Weg ist, den Inhalt aufzuräumen und den Datenträger anschließend zu komprimieren.',
        },
        {
          question: 'Gefährdet das Komprimieren meine Daten?',
          answer:
            'Nein. `compact vdisk` verwirft nur ungenutzte Blöcke der Datei und fasst die Daten im Dateisystem nicht an. Trotzdem ist es gute Praxis, WSL vorher sauber mit `wsl --shutdown` zu beenden und ein Backup wichtiger Projekte zu haben.',
        },
        {
          question: 'Wo liegt die Datei von Docker Desktop?',
          answer:
            'In aktuellen Versionen unter `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Ältere Versionen liefern eine eigene WSL-Distribution `docker-desktop-data` mit der Datei unter `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'Muss ich mit sparseVhd nie wieder komprimieren?',
          answer:
            'Meist nicht, aber sparse-Datenträger geben Platz schrittweise frei, nicht sofort. Nach einer sehr großen Löschaktion führt manuelles Komprimieren schneller zum Ziel. Zudem gilt `sparseVhd` automatisch nur für Datenträger, die nach dem Aktivieren angelegt wurden.',
        },
      ],
      verdict: [
        'Dass WSL2 und Docker die Festplatte füllen, ist kein Fehler, sondern das Verhalten virtueller Datenträger. Die Regel ist einfach: innen aufräumen, WSL beenden, Datenträger komprimieren. Diese drei Schritte holen auf den meisten Entwicklungsrechnern 20-60 GB auf einmal zurück.',
        'Dauerhaft hilft `sparseVhd=true` zusammen mit regelmäßigem Leeren des Build-Cache. Wenn Sie sehen möchten, was sich sonst noch angesammelt hat: Die Module Große Dateien und Disk Treemap von Disk Mop bringen genau solche Einzeldatei-Fälle in Sekunden ans Licht.',
      ],
      ctaText: 'Sehen Sie, welche weiteren Riesendateien auf Ihrem Laufwerk liegen',
    },
    fr: {
      title: 'Pourquoi WSL2 et Docker saturent le disque : réduire ext4.vhdx',
      metaDescription:
        'Les disques virtuels de WSL2 et Docker Desktop grossissent mais ne se réduisent jamais seuls. Récupérez des dizaines de gigaoctets en compactant ext4.vhdx avec diskpart.',
      subtitle: 'Le disque virtuel grossit et ne rétrécit jamais tout seul',
      intro: [
        'Réponse courte : WSL2 conserve tout son système de fichiers Linux dans un disque virtuel nommé `ext4.vhdx`. Ce fichier grossit à la demande mais NE diminue PAS quand vous supprimez des fichiers à l\'intérieur. Pour récupérer l\'espace, nettoyez d\'abord la distribution, puis exécutez `wsl --shutdown` et compactez le fichier avec `diskpart`.',
        'C\'est la cause la plus fréquente du « mon disque C est plein et je ne trouve pas ce qui l\'occupe » sur une machine de développement. Les outils d\'analyse montrent un unique fichier de 80 Go et vous hésitez à y toucher — à raison, car le supprimer emporterait tout votre environnement Linux. Ce guide explique ce qu\'est ce fichier, comment le réduire sans risque et comment éviter qu\'il regonfle.',
      ],
      keyTakeaways: [
        'WSL2 stocke tout votre système de fichiers Linux dans un seul disque virtuel `ext4.vhdx` qui grossit mais ne rétrécit jamais automatiquement.',
        'Le fichier se trouve en général dans `%LOCALAPPDATA%\\Packages\\<distribution>\\LocalState\\ext4.vhdx` ; Docker Desktop utilise son propre `docker_data.vhdx`.',
        'L\'ordre compte : supprimez d\'abord les données À L\'INTÉRIEUR de la distribution, puis compactez le disque virtuel.',
        'Pour Docker, `docker system prune -a --volumes` libère souvent à lui seul des dizaines de gigaoctets.',
        '`wsl --shutdown` est obligatoire avant le compactage : un fichier en cours d\'utilisation ne peut pas être réduit.',
        'Depuis WSL 2.0, ajouter `sparseVhd=true` dans `.wslconfig` permet au disque de se réduire de lui-même.',
      ],
      howTo: {
        name: 'Réduire le disque virtuel de WSL2 et Docker',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Libérer de l\'espace dans la distribution',
            text: 'Dans le terminal WSL, exécutez `sudo apt clean`, puis `sudo apt autoremove` pour les paquets orphelins, et `docker system prune -a --volumes` si vous utilisez Docker. Le compactage ne récupère que l\'espace réellement libre à l\'intérieur.',
          },
          {
            name: 'Localiser le fichier du disque virtuel',
            text: 'Dans PowerShell, exécutez `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName`. Pour Docker Desktop, le fichier est généralement dans `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'Arrêter WSL complètement',
            text: 'Exécutez `wsl --shutdown` dans PowerShell et fermez Docker Desktop s\'il est ouvert. Tant qu\'un processus garde le fichier ouvert, le compactage échoue.',
          },
          {
            name: 'Compacter avec diskpart',
            text: 'Dans une session PowerShell administrateur, lancez `diskpart` puis, dans l\'ordre : `select vdisk file="CHEMIN_COMPLET\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Selon la taille, comptez quelques minutes.',
          },
          {
            name: 'Vérifier, puis prévenir la récidive',
            text: 'Revérifiez la taille du fichier. Pour une solution durable, ajoutez `sparseVhd=true` sous une section `[experimental]` dans `%USERPROFILE%\\.wslconfig` ; à partir de WSL 2.0, le disque se réduit ensuite tout seul.',
          },
        ],
      },
      sections: [
        {
          title: 'Pourquoi il grossit sans jamais rétrécir',
          content: [
            'WSL2 est une véritable machine virtuelle et conserve tout le système de fichiers Linux côté Windows dans un seul fichier : `ext4.vhdx`. C\'est un disque virtuel à expansion dynamique. Avec 5 Go de données à l\'intérieur, le fichier occupe environ 5 Go ; écrivez 60 Go et il monte à 60 Go.',
            'Le problème apparaît dans l\'autre sens. Supprimez une image Docker de 50 Go à l\'intérieur et Linux signale l\'espace comme libre — mais le fichier VHDX côté Windows garde exactement la même taille. Le format marque simplement les blocs libérés comme inutilisés sans raccourcir physiquement le fichier. Résultat : `df -h` affiche beaucoup de place à l\'intérieur tandis que Windows annonce un disque C plein.',
            'Docker Desktop sur le moteur WSL2 double l\'effet. Docker installe sa propre distribution et conserve images, couches et volumes dans un `docker_data.vhdx` distinct. Sur une machine de développement utilisée depuis deux ans, ces deux fichiers dépassent facilement 100 Go à eux deux.',
          ],
        },
        {
          title: 'D\'abord l\'intérieur : que supprimer avant de compacter',
          content: [
            'Le compactage ne fait pas de miracle ; il ne rend que les blocs réellement libres à l\'intérieur. La première étape est donc toujours le nettoyage de la distribution. Sur les systèmes Debian et Ubuntu, `sudo apt clean` supprime le cache des paquets téléchargés et `sudo apt autoremove --purge` retire les dépendances dont plus aucun paquet n\'a besoin.',
            'Avec Docker, c\'est là que se trouve le vrai gain. `docker system df` détaille l\'espace occupé par les images, les conteneurs, les volumes et le cache de construction. `docker system prune -a --volumes` supprime tout ce qui n\'est pas utilisé — attention, cela efface aussi les volumes inutilisés : exportez d\'abord toute base de données à conserver.',
            'Le cache de construction est souvent le poste le plus lourd et le plus facile à oublier. `docker builder prune -a` ne vise que ce cache et laisse vos images intactes. Sur les projets Node.js, les dossiers `node_modules` à l\'intérieur de WSL ainsi que `~/.npm` et `~/.cache` ajoutent leurs propres dizaines de gigaoctets.',
          ],
        },
        {
          title: 'Compacter : rendre l\'espace à Windows',
          content: [
            'Une fois l\'intérieur nettoyé, il faut raccourcir physiquement le disque virtuel. La condition préalable est que WSL soit totalement arrêté : exécutez `wsl --shutdown` dans PowerShell et fermez Docker Desktop. Si un processus tient encore le fichier, le compactage échoue avec une erreur d\'accès refusé.',
            'Dans une PowerShell administrateur, lancez `diskpart` et exécutez ces étapes dans l\'ordre : `select vdisk file="C:\\Users\\nom\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, puis `attach vdisk readonly`, puis `compact vdisk`, et enfin `detach vdisk`. Le montage en lecture seule est important ; monté en écriture, le compactage ne s\'exécute pas.',
            'Sur les systèmes disposant des composants Hyper-V, il existe une alternative en une ligne : `Optimize-VHD -Path "chemin\\ext4.vhdx" -Mode Full`. Cette applet manque dans les éditions Home de Windows, ce qui fait de `diskpart` le choix par défaut le plus sûr. À la fin, la taille du fichier doit être proche de l\'occupation réelle à l\'intérieur.',
          ],
        },
        {
          title: 'Éviter que cela recommence',
          content: [
            'Avec WSL 2.0, Microsoft a ajouté la prise en charge des disques virtuels creux (sparse). Ajoutez `sparseVhd=true` sous une section `[experimental]` dans `%USERPROFILE%\\.wslconfig`, exécutez `wsl --shutdown`, et les disques créés ensuite commencent à se réduire seuls dès que de l\'espace se libère à l\'intérieur. Pour convertir une distribution existante, utilisez `wsl --manage <distribution> --set-sparse true`.',
            'Deux habitudes aident en plus. D\'abord, purger régulièrement le cache de construction Docker — `docker builder prune -a` une fois par mois suffit sur la plupart des machines. Ensuite, garder les gros jeux de données côté Windows et y accéder via `/mnt/c` plutôt que de les stocker dans le système de fichiers WSL, pour que ces données ne gonflent jamais le disque virtuel.',
            'Repérer ces fichiers est un problème en soi, car ils apparaissent comme un fichier unique et ne ressortent pas dans les outils qui raisonnent par taille de dossier. Le module Gros fichiers (Large Files) de Disk Mop classe les plus gros fichiers d\'un disque par taille, et `ext4.vhdx` figure généralement dans les trois premiers. La vue Disk Treemap montre ce même fichier comme un rectangle occupant une large part de l\'écran.',
          ],
        },
      ],
      faq: [
        {
          question: 'Puis-je simplement supprimer ext4.vhdx ?',
          answer:
            'Non. Ce fichier EST votre distribution WSL : paquets installés, projets et bases de données s\'y trouvent tous. Le supprimer retire complètement la distribution. La bonne méthode consiste à nettoyer le contenu puis à compacter le disque.',
        },
        {
          question: 'Le compactage met-il mes données en danger ?',
          answer:
            'Non. `compact vdisk` ne fait qu\'écarter les blocs inutilisés du fichier de disque virtuel ; il ne touche pas aux données du système de fichiers. Il reste toutefois prudent d\'arrêter proprement WSL avec `wsl --shutdown` et de disposer d\'une sauvegarde des projets critiques.',
        },
        {
          question: 'Où se trouve le fichier de Docker Desktop ?',
          answer:
            'Dans les versions actuelles, à l\'emplacement `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Les versions plus anciennes installent une distribution WSL distincte `docker-desktop-data`, avec le fichier dans `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'Avec sparseVhd activé, faut-il encore compacter ?',
          answer:
            'Le plus souvent non, mais les disques creux récupèrent l\'espace progressivement et non instantanément. Après une suppression très volumineuse, un compactage manuel reste plus rapide. Notez aussi que `sparseVhd` ne s\'applique automatiquement qu\'aux disques créés après son activation.',
        },
      ],
      verdict: [
        'Que WSL2 et Docker remplissent le disque n\'est pas un défaut : c\'est le comportement des disques virtuels. La règle est simple : nettoyer l\'intérieur, arrêter WSL, compacter le disque. Ces trois étapes récupèrent 20 à 60 Go d\'un coup sur la plupart des machines de développement.',
        'Pour une solution durable, activez `sparseVhd=true` et purgez régulièrement le cache de construction. Si vous voulez voir ce qui s\'est accumulé ailleurs, les modules Gros fichiers et Disk Treemap de Disk Mop révèlent ce genre de situation en quelques secondes.',
      ],
      ctaText: 'Découvrez quels autres fichiers géants occupent votre disque',
    },
    es: {
      title: 'Por qué WSL2 y Docker llenan el disco: cómo reducir ext4.vhdx',
      metaDescription:
        'Los discos virtuales de WSL2 y Docker Desktop crecen pero nunca se reducen solos. Recupera decenas de gigabytes compactando ext4.vhdx con diskpart.',
      subtitle: 'El disco virtual crece y nunca se encoge por su cuenta',
      intro: [
        'Respuesta corta: WSL2 guarda todo su sistema de archivos Linux en un disco virtual llamado `ext4.vhdx`. Ese archivo crece según hace falta pero NO se reduce cuando borras archivos dentro. Para recuperar el espacio, limpia primero dentro de la distribución, luego ejecuta `wsl --shutdown` y compacta el archivo con `diskpart`.',
        'Es la causa más habitual del «mi disco C está lleno y no encuentro qué lo ocupa» en un equipo de desarrollo. Las herramientas de análisis muestran un único archivo de 80 GB y dudas en tocarlo — con razón, porque borrarlo se llevaría todo tu entorno Linux. Esta guía explica qué es ese archivo, cómo reducirlo con seguridad y cómo evitar que vuelva a hincharse.',
      ],
      keyTakeaways: [
        'WSL2 guarda todo tu sistema de archivos Linux en un único disco virtual `ext4.vhdx` que crece pero nunca se reduce automáticamente.',
        'El archivo suele estar en `%LOCALAPPDATA%\\Packages\\<distribución>\\LocalState\\ext4.vhdx`; Docker Desktop usa su propio `docker_data.vhdx`.',
        'El orden importa: borra primero los datos DENTRO de la distribución y después compacta el disco virtual.',
        'Con Docker, `docker system prune -a --volumes` por sí solo suele liberar decenas de gigabytes.',
        '`wsl --shutdown` es obligatorio antes de compactar: un archivo en uso no se puede reducir.',
        'Desde WSL 2.0, añadir `sparseVhd=true` en `.wslconfig` hace que el disco se reduzca solo con el tiempo.',
      ],
      howTo: {
        name: 'Reducir el disco virtual de WSL2 y Docker',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Liberar espacio dentro de la distribución',
            text: 'En la terminal de WSL ejecuta `sudo apt clean`, luego `sudo apt autoremove` para los paquetes huérfanos y `docker system prune -a --volumes` si usas Docker. Compactar solo recupera el espacio realmente libre dentro.',
          },
          {
            name: 'Localizar el archivo del disco virtual',
            text: 'En PowerShell ejecuta `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName`. En Docker Desktop el archivo suele estar en `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'Detener WSL por completo',
            text: 'Ejecuta `wsl --shutdown` en PowerShell y cierra Docker Desktop si está abierto. Mientras algún proceso mantenga el archivo abierto, la compactación falla.',
          },
          {
            name: 'Compactar con diskpart',
            text: 'En una PowerShell como administrador inicia `diskpart` y ejecuta en orden: `select vdisk file="RUTA_COMPLETA\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Según el tamaño tardará unos minutos.',
          },
          {
            name: 'Verificar y evitar que se repita',
            text: 'Comprueba de nuevo el tamaño del archivo. Como solución duradera añade `sparseVhd=true` bajo un encabezado `[experimental]` en `%USERPROFILE%\\.wslconfig`; a partir de WSL 2.0 el disco empieza a reducirse solo.',
          },
        ],
      },
      sections: [
        {
          title: 'Por qué crece y nunca se reduce',
          content: [
            'WSL2 es una máquina virtual real y guarda todo el sistema de archivos Linux en un único archivo del lado de Windows: `ext4.vhdx`. Es un disco virtual de expansión dinámica. Con 5 GB de datos dentro, el archivo ocupa unos 5 GB; si escribes 60 GB, crece hasta 60 GB.',
            'El problema aparece en el sentido contrario. Borra dentro una imagen de Docker de 50 GB y Linux informará del espacio como libre — pero el archivo VHDX en Windows conserva exactamente el mismo tamaño. El formato solo marca los bloques liberados como no usados, sin acortar físicamente el archivo. Resultado: `df -h` muestra espacio de sobra dentro mientras Windows informa de un disco C lleno.',
            'Docker Desktop con motor WSL2 duplica el efecto. Docker instala su propia distribución y guarda imágenes, capas y volúmenes en un `docker_data.vhdx` aparte. En un equipo de desarrollo con un par de años de uso, ambos archivos juntos superan cómodamente los 100 GB.',
          ],
        },
        {
          title: 'Primero por dentro: qué borrar antes de compactar',
          content: [
            'Compactar no hace magia; solo devuelve bloques que están realmente libres dentro. Por eso el primer paso siempre es limpiar la distribución. En sistemas basados en Debian y Ubuntu, `sudo apt clean` elimina la caché de paquetes descargados y `sudo apt autoremove --purge` quita las dependencias que ya nada necesita.',
            'Si usas Docker, ahí está la ganancia real. `docker system df` desglosa cuánto ocupan imágenes, contenedores, volúmenes y caché de compilación. `docker system prune -a --volumes` elimina todo lo que no esté en uso — ojo, también borra volúmenes sin usar, así que exporta antes cualquier base de datos que quieras conservar.',
            'La caché de compilación suele ser la partida más grande y la más fácil de pasar por alto. `docker builder prune -a` apunta solo a esa caché y deja intactas tus imágenes. En proyectos Node.js, las carpetas `node_modules` dentro de WSL más `~/.npm` y `~/.cache` añaden sus propias decenas de gigabytes.',
          ],
        },
        {
          title: 'Compactar: devolver el espacio a Windows',
          content: [
            'Con el interior limpio, toca acortar físicamente el disco virtual. El requisito es que WSL esté completamente detenido: ejecuta `wsl --shutdown` en PowerShell y cierra Docker Desktop. Si algún proceso sigue reteniendo el archivo, la compactación falla con un error de acceso denegado.',
            'En una PowerShell con permisos de administrador inicia `diskpart` y ejecuta estos pasos en orden: `select vdisk file="C:\\Users\\nombre\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, después `attach vdisk readonly`, luego `compact vdisk` y por último `detach vdisk`. El montaje en solo lectura es importante; montado con escritura, la compactación no se ejecuta.',
            'En sistemas con los componentes de Hyper-V instalados existe una alternativa de una línea: `Optimize-VHD -Path "ruta\\ext4.vhdx" -Mode Full`. Ese cmdlet no está en las ediciones Home de Windows, lo que hace de `diskpart` la opción predeterminada más segura. Al terminar, el tamaño del archivo debería acercarse al uso real de dentro.',
          ],
        },
        {
          title: 'Para que no vuelva a ocurrir',
          content: [
            'Con WSL 2.0, Microsoft añadió compatibilidad con discos virtuales dispersos (sparse). Añade `sparseVhd=true` bajo un encabezado `[experimental]` en `%USERPROFILE%\\.wslconfig`, ejecuta `wsl --shutdown`, y los discos creados a partir de entonces empiezan a reducirse solos a medida que se libera espacio dentro. Para convertir una distribución existente usa `wsl --manage <distribución> --set-sparse true`.',
            'Dos hábitos ayudan además. Primero, purgar la caché de compilación de Docker con regularidad — `docker builder prune -a` una vez al mes basta en la mayoría de equipos. Segundo, guardar los conjuntos de datos grandes del lado de Windows y acceder a ellos por `/mnt/c` en lugar de almacenarlos en el sistema de archivos de WSL, para que esos datos nunca hinchen el disco virtual.',
            'Detectar estos archivos es un problema en sí mismo, porque aparecen como un único archivo y no destacan en herramientas que razonan por tamaño de carpeta. El módulo Archivos grandes (Large Files) de Disk Mop ordena por tamaño los archivos más grandes de una unidad, y `ext4.vhdx` suele quedar entre los tres primeros. La vista Disk Treemap muestra ese mismo archivo como un rectángulo que ocupa buena parte de la pantalla.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Puedo borrar ext4.vhdx sin más?',
          answer:
            'No. Ese archivo ES tu distribución de WSL: paquetes instalados, proyectos y bases de datos están todos dentro. Borrarlo elimina la distribución por completo. La forma correcta es limpiar el contenido y luego compactar el disco.',
        },
        {
          question: '¿Compactar pone en riesgo mis datos?',
          answer:
            'No. `compact vdisk` solo descarta bloques sin usar del archivo de disco virtual; no toca los datos del sistema de archivos. Aun así, conviene detener WSL correctamente con `wsl --shutdown` antes y tener copia de seguridad de los proyectos críticos.',
        },
        {
          question: '¿Dónde está el archivo de Docker Desktop?',
          answer:
            'En las versiones actuales, en `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Las versiones antiguas instalan una distribución WSL aparte llamada `docker-desktop-data`, con el archivo en `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'Con sparseVhd activado, ¿ya no hay que compactar?',
          answer:
            'Normalmente no, pero los discos dispersos recuperan espacio de forma gradual, no instantánea. Tras un borrado muy grande, compactar a mano sigue siendo más rápido. Además, `sparseVhd` se aplica automáticamente solo a los discos creados después de activarlo.',
        },
      ],
      verdict: [
        'Que WSL2 y Docker llenen el disco no es un fallo: es el comportamiento de los discos virtuales. La regla es simple: limpia por dentro, detén WSL, compacta el disco. Esos tres pasos recuperan de 20 a 60 GB de una vez en la mayoría de equipos de desarrollo.',
        'Como solución duradera, activa `sparseVhd=true` y purga la caché de compilación con regularidad. Si quieres ver qué más se ha acumulado, los módulos Archivos grandes y Disk Treemap de Disk Mop sacan a la luz este tipo de casos en segundos.',
      ],
      ctaText: 'Descubre qué otros archivos gigantes ocupan tu disco',
    },
    it: {
      title: 'Perché WSL2 e Docker riempiono il disco: come ridurre ext4.vhdx',
      metaDescription:
        'I dischi virtuali di WSL2 e Docker Desktop crescono ma non si riducono mai da soli. Recupera decine di gigabyte compattando ext4.vhdx con diskpart.',
      subtitle: 'Il disco virtuale cresce e non si riduce mai da solo',
      intro: [
        'Risposta breve: WSL2 conserva l\'intero file system Linux in un disco virtuale chiamato `ext4.vhdx`. Quel file cresce quando serve ma NON si riduce quando elimini file al suo interno. Per recuperare spazio, pulisci prima dentro la distribuzione, poi esegui `wsl --shutdown` e compatta il file con `diskpart`.',
        'È la causa più comune del «il disco C è pieno e non trovo cosa lo occupa» su una macchina di sviluppo. Gli strumenti di analisi mostrano un unico file da 80 GB e non te la senti di toccarlo — giustamente, perché eliminarlo porterebbe via tutto il tuo ambiente Linux. Questa guida spiega cos\'è quel file, come ridurlo in sicurezza e come evitare che si gonfi di nuovo.',
      ],
      keyTakeaways: [
        'WSL2 conserva l\'intero file system Linux in un unico disco virtuale `ext4.vhdx` che cresce ma non si riduce mai automaticamente.',
        'Il file si trova di solito in `%LOCALAPPDATA%\\Packages\\<distribuzione>\\LocalState\\ext4.vhdx`; Docker Desktop usa un proprio `docker_data.vhdx`.',
        'L\'ordine conta: elimina prima i dati DENTRO la distribuzione, poi compatta il disco virtuale.',
        'Con Docker, `docker system prune -a --volumes` da solo libera spesso decine di gigabyte.',
        '`wsl --shutdown` è obbligatorio prima di compattare: un file in uso non può essere ridotto.',
        'Da WSL 2.0, aggiungere `sparseVhd=true` in `.wslconfig` fa sì che il disco si riduca da solo nel tempo.',
      ],
      howTo: {
        name: 'Ridurre il disco virtuale di WSL2 e Docker',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Liberare spazio dentro la distribuzione',
            text: 'Nel terminale WSL esegui `sudo apt clean`, poi `sudo apt autoremove` per i pacchetti orfani e `docker system prune -a --volumes` se usi Docker. La compattazione recupera solo lo spazio realmente libero all\'interno.',
          },
          {
            name: 'Individuare il file del disco virtuale',
            text: 'In PowerShell esegui `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName`. Per Docker Desktop il file è di solito in `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'Arrestare WSL completamente',
            text: 'Esegui `wsl --shutdown` in PowerShell e chiudi Docker Desktop se è aperto. Finché un processo tiene il file aperto, la compattazione fallisce.',
          },
          {
            name: 'Compattare con diskpart',
            text: 'In una PowerShell come amministratore avvia `diskpart` e poi, in ordine: `select vdisk file="PERCORSO_COMPLETO\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. A seconda della dimensione servono alcuni minuti.',
          },
          {
            name: 'Verificare e prevenire il ripetersi',
            text: 'Ricontrolla la dimensione del file. Per una soluzione duratura aggiungi `sparseVhd=true` sotto un\'intestazione `[experimental]` in `%USERPROFILE%\\.wslconfig`; da WSL 2.0 il disco inizia a ridursi da solo.',
          },
        ],
      },
      sections: [
        {
          title: 'Perché cresce e non si riduce mai',
          content: [
            'WSL2 è una vera macchina virtuale e conserva l\'intero file system Linux lato Windows in un unico file: `ext4.vhdx`. È un disco virtuale a espansione dinamica. Con 5 GB di dati dentro, il file occupa circa 5 GB; scrivendo 60 GB, cresce fino a 60 GB.',
            'Il problema nasce nella direzione opposta. Elimina all\'interno un\'immagine Docker da 50 GB e Linux segnala lo spazio come libero — ma il file VHDX su Windows resta esattamente della stessa dimensione. Il formato si limita a marcare i blocchi liberati come inutilizzati senza accorciare fisicamente il file. Risultato: `df -h` mostra molto spazio dentro mentre Windows segnala un disco C pieno.',
            'Docker Desktop con backend WSL2 raddoppia l\'effetto. Docker installa una propria distribuzione e conserva immagini, layer e volumi in un `docker_data.vhdx` separato. Su una macchina di sviluppo usata da un paio d\'anni, i due file insieme superano tranquillamente i 100 GB.',
          ],
        },
        {
          title: 'Prima l\'interno: cosa eliminare prima di compattare',
          content: [
            'La compattazione non fa magie; restituisce solo blocchi realmente liberi all\'interno. Per questo il primo passo è sempre pulire la distribuzione. Su sistemi basati su Debian e Ubuntu, `sudo apt clean` rimuove la cache dei pacchetti scaricati e `sudo apt autoremove --purge` elimina le dipendenze di cui nessun pacchetto ha più bisogno.',
            'Con Docker il guadagno vero è lì. `docker system df` mostra quanto occupano separatamente immagini, container, volumi e cache di build. `docker system prune -a --volumes` rimuove tutto ciò che non è in uso — attenzione, elimina anche i volumi inutilizzati: esporta prima qualsiasi database da conservare.',
            'La cache di build è spesso la voce più grande e la più facile da dimenticare. `docker builder prune -a` colpisce solo quella cache e lascia intatte le immagini. Nei progetti Node.js, le cartelle `node_modules` dentro WSL più `~/.npm` e `~/.cache` aggiungono altre decine di gigabyte.',
          ],
        },
        {
          title: 'Compattare: restituire lo spazio a Windows',
          content: [
            'Pulito l\'interno, resta da accorciare fisicamente il disco virtuale. Il presupposto è che WSL sia completamente fermo: esegui `wsl --shutdown` in PowerShell e chiudi Docker Desktop. Se un processo tiene ancora il file, la compattazione fallisce con un errore di accesso negato.',
            'In una PowerShell con privilegi di amministratore avvia `diskpart` ed esegui questi passaggi in ordine: `select vdisk file="C:\\Users\\nome\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, poi `attach vdisk readonly`, poi `compact vdisk` e infine `detach vdisk`. Il montaggio in sola lettura è importante; montato in scrittura, la compattazione non parte.',
            'Sui sistemi con i componenti Hyper-V installati esiste un\'alternativa da una riga: `Optimize-VHD -Path "percorso\\ext4.vhdx" -Mode Full`. Quel cmdlet manca nelle edizioni Home di Windows, il che rende `diskpart` la scelta predefinita più sicura. Al termine la dimensione del file dovrebbe avvicinarsi all\'occupazione reale interna.',
          ],
        },
        {
          title: 'Evitare che si ripeta',
          content: [
            'Con WSL 2.0 Microsoft ha aggiunto il supporto ai dischi virtuali sparsi. Aggiungi `sparseVhd=true` sotto un\'intestazione `[experimental]` in `%USERPROFILE%\\.wslconfig`, esegui `wsl --shutdown`, e i dischi creati da quel momento iniziano a ridursi da soli quando si libera spazio all\'interno. Per convertire una distribuzione esistente usa `wsl --manage <distribuzione> --set-sparse true`.',
            'Due abitudini aiutano ulteriormente. Primo, svuotare regolarmente la cache di build di Docker — `docker builder prune -a` una volta al mese basta sulla maggior parte delle macchine. Secondo, tenere i grandi insiemi di dati lato Windows e accedervi tramite `/mnt/c` invece di conservarli nel file system WSL, così quei dati non gonfiano mai il disco virtuale.',
            'Accorgersi di questi file è già di per sé un problema, perché appaiono come un unico file e non risaltano negli strumenti che ragionano per dimensione di cartella. Il modulo File di grandi dimensioni (Large Files) di Disk Mop ordina per dimensione i file più grandi di un\'unità, e `ext4.vhdx` finisce di solito tra i primi tre. La vista Disk Treemap mostra lo stesso file come un rettangolo che occupa buona parte dello schermo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Posso semplicemente eliminare ext4.vhdx?',
          answer:
            'No. Quel file È la tua distribuzione WSL: pacchetti installati, progetti e database si trovano tutti lì dentro. Eliminarlo rimuove del tutto la distribuzione. Il modo corretto è pulire il contenuto e poi compattare il disco.',
        },
        {
          question: 'La compattazione mette a rischio i miei dati?',
          answer:
            'No. `compact vdisk` scarta soltanto i blocchi inutilizzati del file di disco virtuale; non tocca i dati nel file system. Resta comunque buona pratica arrestare WSL correttamente con `wsl --shutdown` e avere un backup dei progetti critici.',
        },
        {
          question: 'Dove si trova il file di Docker Desktop?',
          answer:
            'Nelle versioni attuali in `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Le versioni più vecchie installano una distribuzione WSL separata chiamata `docker-desktop-data`, con il file in `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'Con sparseVhd attivo devo ancora compattare?',
          answer:
            'Di solito no, ma i dischi sparsi recuperano spazio gradualmente, non all\'istante. Dopo una cancellazione molto grande, compattare a mano resta più rapido. Inoltre `sparseVhd` si applica automaticamente solo ai dischi creati dopo averlo attivato.',
        },
      ],
      verdict: [
        'Che WSL2 e Docker riempiano il disco non è un difetto: è il comportamento dei dischi virtuali. La regola è semplice: pulisci l\'interno, arresta WSL, compatta il disco. Questi tre passaggi recuperano 20-60 GB in una volta sola sulla maggior parte delle macchine di sviluppo.',
        'Per una soluzione duratura attiva `sparseVhd=true` e svuota regolarmente la cache di build. Se vuoi vedere cos\'altro si è accumulato, i moduli File di grandi dimensioni e Disk Treemap di Disk Mop fanno emergere questo tipo di casi in pochi secondi.',
      ],
      ctaText: 'Scopri quali altri file enormi occupano il tuo disco',
    },
    pt: {
      title: 'Por que WSL2 e Docker enchem o disco: como reduzir o ext4.vhdx',
      metaDescription:
        'Os discos virtuais do WSL2 e do Docker Desktop crescem, mas nunca encolhem sozinhos. Recupere dezenas de gigabytes compactando o ext4.vhdx com o diskpart.',
      subtitle: 'O disco virtual cresce e nunca encolhe sozinho',
      intro: [
        'Resposta curta: o WSL2 guarda todo o seu sistema de arquivos Linux em um disco virtual chamado `ext4.vhdx`. Esse arquivo cresce conforme a necessidade, mas NÃO diminui quando você apaga arquivos lá dentro. Para recuperar espaço, limpe primeiro dentro da distribuição, depois execute `wsl --shutdown` e compacte o arquivo com o `diskpart`.',
        'É a causa mais comum do «meu disco C está cheio e não encontro o que está ocupando» em uma máquina de desenvolvimento. As ferramentas de análise mostram um único arquivo de 80 GB e você hesita em mexer nele — com razão, porque apagá-lo levaria junto todo o seu ambiente Linux. Este guia explica o que é esse arquivo, como reduzi-lo com segurança e como evitar que inche de novo.',
      ],
      keyTakeaways: [
        'O WSL2 guarda todo o sistema de arquivos Linux em um único disco virtual `ext4.vhdx` que cresce, mas nunca encolhe automaticamente.',
        'O arquivo costuma ficar em `%LOCALAPPDATA%\\Packages\\<distribuição>\\LocalState\\ext4.vhdx`; o Docker Desktop usa seu próprio `docker_data.vhdx`.',
        'A ordem importa: apague primeiro os dados DENTRO da distribuição e só depois compacte o disco virtual.',
        'No Docker, `docker system prune -a --volumes` sozinho costuma liberar dezenas de gigabytes.',
        '`wsl --shutdown` é obrigatório antes de compactar: um arquivo em uso não pode ser reduzido.',
        'A partir do WSL 2.0, incluir `sparseVhd=true` no `.wslconfig` faz o disco encolher sozinho com o tempo.',
      ],
      howTo: {
        name: 'Reduzir o disco virtual do WSL2 e do Docker',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'Liberar espaço dentro da distribuição',
            text: 'No terminal do WSL execute `sudo apt clean`, depois `sudo apt autoremove` para pacotes órfãos e `docker system prune -a --volumes` se usar Docker. A compactação só recupera o espaço realmente livre lá dentro.',
          },
          {
            name: 'Localizar o arquivo do disco virtual',
            text: 'No PowerShell execute `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName`. No Docker Desktop o arquivo costuma estar em `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`.',
          },
          {
            name: 'Encerrar o WSL por completo',
            text: 'Execute `wsl --shutdown` no PowerShell e feche o Docker Desktop se estiver aberto. Enquanto algum processo mantiver o arquivo aberto, a compactação falha.',
          },
          {
            name: 'Compactar com o diskpart',
            text: 'Em um PowerShell como administrador inicie o `diskpart` e execute na ordem: `select vdisk file="CAMINHO_COMPLETO\\ext4.vhdx"`, `attach vdisk readonly`, `compact vdisk`, `detach vdisk`, `exit`. Dependendo do tamanho leva alguns minutos.',
          },
          {
            name: 'Verificar e evitar a repetição',
            text: 'Confira o tamanho do arquivo novamente. Como solução duradoura, adicione `sparseVhd=true` sob um cabeçalho `[experimental]` em `%USERPROFILE%\\.wslconfig`; a partir do WSL 2.0 o disco passa a encolher sozinho.',
          },
        ],
      },
      sections: [
        {
          title: 'Por que ele cresce e nunca encolhe',
          content: [
            'O WSL2 é uma máquina virtual de verdade e guarda todo o sistema de arquivos Linux do lado do Windows em um único arquivo: `ext4.vhdx`. É um disco virtual de expansão dinâmica. Com 5 GB de dados dentro, o arquivo ocupa cerca de 5 GB; ao escrever 60 GB, ele cresce para 60 GB.',
            'O problema surge no sentido contrário. Apague lá dentro uma imagem Docker de 50 GB e o Linux informará o espaço como livre — mas o arquivo VHDX no Windows continua exatamente do mesmo tamanho. O formato apenas marca os blocos liberados como não usados, sem encurtar fisicamente o arquivo. Resultado: `df -h` mostra bastante espaço dentro enquanto o Windows acusa disco C cheio.',
            'O Docker Desktop com backend WSL2 dobra o efeito. O Docker instala a própria distribuição e guarda imagens, camadas e volumes em um `docker_data.vhdx` separado. Em uma máquina de desenvolvimento usada por alguns anos, os dois arquivos juntos passam facilmente de 100 GB.',
          ],
        },
        {
          title: 'Primeiro por dentro: o que apagar antes de compactar',
          content: [
            'Compactar não faz mágica; só devolve blocos que estão realmente livres lá dentro. Por isso o primeiro passo é sempre limpar a distribuição. Em sistemas baseados em Debian e Ubuntu, `sudo apt clean` remove o cache de pacotes baixados e `sudo apt autoremove --purge` tira as dependências de que nenhum pacote precisa mais.',
            'Se você usa Docker, é ali que está o ganho real. `docker system df` detalha quanto ocupam imagens, contêineres, volumes e cache de build. `docker system prune -a --volumes` remove tudo o que não está em uso — atenção, isso também apaga volumes não utilizados: exporte antes qualquer banco de dados que queira manter.',
            'O cache de build costuma ser o maior item e o mais fácil de esquecer. `docker builder prune -a` atinge somente esse cache e deixa suas imagens intactas. Em projetos Node.js, as pastas `node_modules` dentro do WSL mais `~/.npm` e `~/.cache` somam outras dezenas de gigabytes.',
          ],
        },
        {
          title: 'Compactar: devolver o espaço ao Windows',
          content: [
            'Com o interior limpo, resta encurtar fisicamente o disco virtual. O pré-requisito é que o WSL esteja totalmente parado: execute `wsl --shutdown` no PowerShell e feche o Docker Desktop. Se algum processo ainda segurar o arquivo, a compactação falha com erro de acesso negado.',
            'Em um PowerShell com privilégios de administrador inicie o `diskpart` e execute estes passos na ordem: `select vdisk file="C:\\Users\\nome\\AppData\\Local\\Packages\\...\\ext4.vhdx"`, depois `attach vdisk readonly`, então `compact vdisk` e por fim `detach vdisk`. A montagem somente leitura é importante; montado para escrita, a compactação não roda.',
            'Em sistemas com os componentes do Hyper-V instalados existe uma alternativa de uma linha: `Optimize-VHD -Path "caminho\\ext4.vhdx" -Mode Full`. Esse cmdlet não existe nas edições Home do Windows, o que torna o caminho do `diskpart` o padrão mais seguro. Ao terminar, o tamanho do arquivo deve ficar perto do uso real interno.',
          ],
        },
        {
          title: 'Para não acontecer de novo',
          content: [
            'Com o WSL 2.0 a Microsoft acrescentou suporte a discos virtuais esparsos. Adicione `sparseVhd=true` sob um cabeçalho `[experimental]` em `%USERPROFILE%\\.wslconfig`, execute `wsl --shutdown`, e os discos criados a partir daí começam a encolher sozinhos conforme o espaço é liberado por dentro. Para converter uma distribuição existente use `wsl --manage <distribuição> --set-sparse true`.',
            'Dois hábitos ajudam além disso. Primeiro, limpar o cache de build do Docker com regularidade — `docker builder prune -a` uma vez por mês basta na maioria das máquinas. Segundo, manter conjuntos de dados grandes do lado do Windows e acessá-los por `/mnt/c` em vez de guardá-los no sistema de arquivos do WSL, para que esses dados nunca inflem o disco virtual.',
            'Perceber esses arquivos já é um problema em si, porque aparecem como um único arquivo e não se destacam em ferramentas que raciocinam por tamanho de pasta. O módulo Arquivos grandes (Large Files) do Disk Mop ordena por tamanho os maiores arquivos de uma unidade, e o `ext4.vhdx` costuma ficar entre os três primeiros. A visão Disk Treemap mostra esse mesmo arquivo como um retângulo que ocupa boa parte da tela.',
          ],
        },
      ],
      faq: [
        {
          question: 'Posso simplesmente apagar o ext4.vhdx?',
          answer:
            'Não. Esse arquivo É a sua distribuição WSL: pacotes instalados, projetos e bancos de dados estão todos dentro dele. Apagá-lo remove a distribuição por completo. O caminho correto é limpar o conteúdo e depois compactar o disco.',
        },
        {
          question: 'Compactar coloca meus dados em risco?',
          answer:
            'Não. O `compact vdisk` apenas descarta blocos não utilizados do arquivo de disco virtual; ele não toca nos dados do sistema de arquivos. Ainda assim, é boa prática encerrar o WSL corretamente com `wsl --shutdown` antes e ter backup dos projetos críticos.',
        },
        {
          question: 'Onde fica o arquivo do Docker Desktop?',
          answer:
            'Nas versões atuais, em `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx`. Versões mais antigas instalam uma distribuição WSL separada chamada `docker-desktop-data`, com o arquivo em `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx`.',
        },
        {
          question: 'Com o sparseVhd ligado ainda preciso compactar?',
          answer:
            'Normalmente não, mas discos esparsos recuperam espaço de forma gradual, não instantânea. Depois de uma exclusão muito grande, compactar manualmente ainda é mais rápido. Além disso, o `sparseVhd` vale automaticamente apenas para discos criados após a ativação.',
        },
      ],
      verdict: [
        'O WSL2 e o Docker encherem o disco não é um defeito: é como discos virtuais funcionam. A regra é simples: limpe por dentro, encerre o WSL, compacte o disco. Esses três passos recuperam 20 a 60 GB de uma vez na maioria das máquinas de desenvolvimento.',
        'Como solução duradoura, ative `sparseVhd=true` e limpe o cache de build com regularidade. Se quiser ver o que mais se acumulou, os módulos Arquivos grandes e Disk Treemap do Disk Mop revelam esse tipo de caso em segundos.',
      ],
      ctaText: 'Veja quais outros arquivos gigantes estão no seu disco',
    },
    ja: {
      title: 'WSL2 と Docker がディスクを圧迫する理由と ext4.vhdx の縮小方法',
      metaDescription:
        'WSL2 と Docker Desktop の仮想ディスクは大きくなる一方で、中のファイルを削除しても縮みません。diskpart で ext4.vhdx を圧縮し、数十ギガバイトを取り戻す手順を解説します。',
      subtitle: '仮想ディスクは大きくなるだけで、自動的には縮まない',
      intro: [
        '短い答え: WSL2 は Linux のファイルシステム全体を `ext4.vhdx` という仮想ディスクに保存します。このファイルは必要に応じて大きくなりますが、中のファイルを削除しても小さくはなりません。空き容量を取り戻すには、まずディストリビューション内部を整理し、`wsl --shutdown` を実行してから `diskpart` で圧縮します。',
        '開発マシンで「C ドライブがいっぱいなのに原因が見つからない」という状況の最も多い原因がこれです。ディスク解析ツールは 80 GB の単一ファイルを示しますが、削除すると Linux 環境ごと消えるため手が出せません。この記事では、そのファイルの正体、安全に縮小する方法、そして再び膨らませないための設定を説明します。',
      ],
      keyTakeaways: [
        'WSL2 は Linux ファイルシステム全体を 1 つの `ext4.vhdx` 仮想ディスクに保存し、このファイルは拡大するだけで自動的には縮小しません。',
        'ファイルは通常 `%LOCALAPPDATA%\\Packages\\<ディストリビューション>\\LocalState\\ext4.vhdx` にあり、Docker Desktop は独自の `docker_data.vhdx` を使います。',
        '順序が重要です。まずディストリビューション「内部」のデータを削除し、その後で仮想ディスクを圧縮します。',
        'Docker では `docker system prune -a --volumes` だけで数十ギガバイトが空くことがよくあります。',
        '圧縮の前に `wsl --shutdown` が必須です。使用中のファイルは縮小できません。',
        'WSL 2.0 以降では `.wslconfig` に `sparseVhd=true` を追加すると、ディスクが自動的に縮むようになります。',
      ],
      howTo: {
        name: 'WSL2 と Docker の仮想ディスクを縮小する',
        totalTime: 'PT20M',
        steps: [
          {
            name: 'ディストリビューション内部の空き容量を増やす',
            text: 'WSL のターミナルで `sudo apt clean`、不要パッケージには `sudo apt autoremove`、Docker を使っているなら `docker system prune -a --volumes` を実行します。圧縮で戻せるのは内部で実際に空いた領域だけです。',
          },
          {
            name: '仮想ディスクファイルの場所を調べる',
            text: 'PowerShell で `(Get-ChildItem $env:LOCALAPPDATA\\Packages -Recurse -Filter ext4.vhdx).FullName` を実行します。Docker Desktop の場合は通常 `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx` にあります。',
          },
          {
            name: 'WSL を完全に停止する',
            text: 'PowerShell で `wsl --shutdown` を実行し、Docker Desktop が起動していれば閉じます。プロセスがファイルを掴んでいる間は圧縮に失敗します。',
          },
          {
            name: 'diskpart で圧縮する',
            text: '管理者権限の PowerShell で `diskpart` を起動し、順に `select vdisk file="完全なパス\\ext4.vhdx"`、`attach vdisk readonly`、`compact vdisk`、`detach vdisk`、`exit` を実行します。サイズによっては数分かかります。',
          },
          {
            name: '結果を確認し、再発を防ぐ',
            text: 'ファイルサイズを再確認します。恒久的な対策として `%USERPROFILE%\\.wslconfig` の `[experimental]` セクションに `sparseVhd=true` を追加してください。WSL 2.0 以降ではディスクが自動的に縮み始めます。',
          },
        ],
      },
      sections: [
        {
          title: 'なぜ大きくなる一方で縮まないのか',
          content: [
            'WSL2 は本物の仮想マシンであり、Linux のファイルシステム全体を Windows 側の 1 つのファイル `ext4.vhdx` に格納します。これは動的に拡張する仮想ディスクです。内部に 5 GB のデータがあればファイルは約 5 GB を占め、60 GB 書き込めば 60 GB まで成長します。',
            '問題は逆方向で起こります。内部で 50 GB の Docker イメージを削除すると Linux 側では空き容量として報告されますが、Windows 側の VHDX ファイルのサイズはまったく変わりません。仮想ディスク形式は解放されたブロックを「未使用」と印を付けるだけで、ファイルを物理的に短くしないからです。結果として `df -h` は内部に十分な空きを示す一方、Windows は C ドライブが満杯だと表示します。',
            'WSL2 バックエンドの Docker Desktop はこの影響を倍にします。Docker は独自のディストリビューションをインストールし、イメージ、レイヤー、ボリュームを別の `docker_data.vhdx` に保存します。数年使った開発マシンでは、この 2 つのファイルの合計が 100 GB を軽く超えます。',
          ],
        },
        {
          title: 'まず内部: 圧縮の前に何を削除するか',
          content: [
            '圧縮は魔法ではなく、内部で実際に空いているブロックだけを返します。したがって最初の手順は常にディストリビューションの掃除です。Debian や Ubuntu 系では `sudo apt clean` がダウンロード済みパッケージのキャッシュを削除し、`sudo apt autoremove --purge` がどのパッケージからも不要になった依存関係を取り除きます。',
            'Docker を使っているなら、本当の効果はそこにあります。`docker system df` はイメージ、コンテナ、ボリューム、ビルドキャッシュがそれぞれどれだけ占めているかを分けて表示します。`docker system prune -a --volumes` は使用中でないものをすべて削除します。未使用ボリュームも消えるため、残したいデータベースは先にエクスポートしてください。',
            'ビルドキャッシュは最大の項目でありながら見落とされがちです。`docker builder prune -a` はキャッシュだけを対象とし、イメージには触れません。Node.js のプロジェクトでは、WSL 内の `node_modules` フォルダーに加えて `~/.npm` や `~/.cache` がさらに数十ギガバイトを占めることがあります。',
          ],
        },
        {
          title: '圧縮: 領域を Windows に返す',
          content: [
            '内部を整理したら、仮想ディスクを物理的に短くします。前提として WSL が完全に停止していることが必要です。PowerShell で `wsl --shutdown` を実行し、Docker Desktop が開いていれば閉じます。プロセスがファイルを保持したままだと、アクセス拒否エラーで圧縮は失敗します。',
            '管理者権限の PowerShell で `diskpart` を起動し、次の手順を順に実行します。`select vdisk file="C:\\Users\\名前\\AppData\\Local\\Packages\\...\\ext4.vhdx"`、続いて `attach vdisk readonly`、`compact vdisk`、最後に `detach vdisk` です。読み取り専用でのアタッチが重要で、書き込み可能でマウントすると圧縮は実行されません。',
            'Hyper-V コンポーネントが導入済みのシステムには 1 行の代替手段もあります。`Optimize-VHD -Path "パス\\ext4.vhdx" -Mode Full` です。ただしこのコマンドレットは Windows Home エディションには存在しないため、既定としては `diskpart` の方が安全です。完了後、ファイルサイズは内部の実使用量に近づきます。',
          ],
        },
        {
          title: '再発を防ぐには',
          content: [
            'WSL 2.0 で Microsoft はスパース仮想ディスクのサポートを追加しました。`%USERPROFILE%\\.wslconfig` の `[experimental]` セクションに `sparseVhd=true` を追加して `wsl --shutdown` を実行すると、それ以降に作成されたディスクは内部で領域が空くたびに自動的に縮み始めます。既存のディストリビューションを変換するには `wsl --manage <ディストリビューション> --set-sparse true` を使います。',
            '習慣としては 2 点が有効です。1 つは Docker のビルドキャッシュを定期的に削除すること。ほとんどのマシンでは月に一度 `docker builder prune -a` を実行すれば十分です。もう 1 つは大きなデータセットを Windows 側に置き、`/mnt/c` 経由でアクセスすること。WSL のファイルシステムに保存しなければ、そのデータが仮想ディスクを膨らませることはありません。',
            'そもそもこれらのファイルに気づくこと自体が難題です。単一のファイルとして現れるため、フォルダーサイズで判断するツールでは目立ちません。Disk Mop の「大きいファイル」モジュールはドライブ上の最大サイズのファイルを順に並べ、`ext4.vhdx` はたいてい上位 3 件に入ります。Disk Treemap 表示では、同じファイルが画面の大部分を占める 1 つの長方形として現れます。',
          ],
        },
      ],
      faq: [
        {
          question: 'ext4.vhdx をそのまま削除してもよいですか。',
          answer:
            'いいえ。このファイルは WSL ディストリビューションそのものであり、インストール済みパッケージ、プロジェクト、データベースがすべて内部にあります。削除するとディストリビューションが完全に失われます。正しい手順は、中身を整理してからディスクを圧縮することです。',
        },
        {
          question: '圧縮でデータが危険にさらされますか。',
          answer:
            'いいえ。`compact vdisk` は仮想ディスクファイルの未使用ブロックを破棄するだけで、ファイルシステム内のデータには触れません。それでも事前に `wsl --shutdown` で WSL を正しく停止し、重要なプロジェクトのバックアップを持っておくのは良い習慣です。',
        },
        {
          question: 'Docker Desktop のファイルはどこにありますか。',
          answer:
            '現行バージョンでは `%LOCALAPPDATA%\\Docker\\wsl\\disk\\docker_data.vhdx` です。古いバージョンでは `docker-desktop-data` という別の WSL ディストリビューションが用意され、ファイルは `%LOCALAPPDATA%\\Docker\\wsl\\data\\ext4.vhdx` にあります。',
        },
        {
          question: 'sparseVhd を有効にすれば圧縮は不要になりますか。',
          answer:
            'たいていは不要ですが、スパースディスクの解放は即時ではなく段階的です。非常に大きな削除を行った直後は、手動での圧縮の方が早く結果が出ます。また `sparseVhd` が自動的に適用されるのは、有効化した後に作成されたディスクだけです。',
        },
      ],
      verdict: [
        'WSL2 と Docker がディスクを圧迫するのは不具合ではなく、仮想ディスクの性質です。手順は単純で、内部を整理し、WSL を停止し、ディスクを圧縮する。この 3 段階でほとんどの開発マシンは一度に 20〜60 GB を取り戻せます。',
        '恒久的な対策として `sparseVhd=true` を有効にし、ビルドキャッシュを定期的に削除してください。ドライブに他に何がたまっているか知りたい場合、Disk Mop の「大きいファイル」と Disk Treemap は、こうした巨大な単一ファイルを数秒で浮かび上がらせます。',
      ],
      ctaText: 'ドライブに潜む他の巨大ファイルを確認する',
    },
  },
};
