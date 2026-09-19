import type { Article } from "../types";

export const windows1124h2CacheBug: Article = {
  slug: "windows-11-24h2-cache-bug",
  type: "guide",
  category: "Windows",
  date: "2026-09-19",
  updated: "2026-09-19",
  readingTime: 7,
  content: {
    tr: {
      title:
        "Windows 11 24H2 8.63 GB Güncelleme Önbelleği Silinmiyor mu? Gerçek Neden ve Çözüm",
      metaDescription:
        "Windows 11 24H2 güncellemesi sonrası Disk Temizleme aracında görünen 8.63 GB Windows Update Cleanup dosyaları silinmiyor mu? Checkpoint mimarisi ve güvenli temizlik rehberi.",
      subtitle:
        "Disk Temizleme aracının silmediği 8.63 GB önbelleğin ardındaki teknik gerçek ve C sürücüsünde yer açmanın doğru yolu.",
      intro: [
        'Windows 11 sürüm 24H2 (Derleme 26100+) güncellemesini yükledikten sonra Ayarlar > Sistem > Depolama veya klasik Disk Temizleme (cleanmgr) aracını açtığınızda, "Windows Update Temizleme" başlığı altında yaklaşık 8.63 GB boyutunda devasa bir önbellek görebilirsiniz. Ancak kutucuğu işaretleyip "Dosyaları Kaldır" deseniz de işlem tamamlanır fakat o 8.63 GB asla silinmez.',
        "Bu durum bir sabit disk bozulması ya da sistem hatası değildir. Microsoft'un Windows 11 24H2 ile devreye aldığı \"Checkpoint Cumulative Update\" (Kontrol Noktası Kümülatif Güncellemeleri) mimarisinin bir sonucudur. Bu rehberde, 8.63 GB'ın neden kilitlendiğini, DISM komutlarının neden işe yaramadığını ve [C sürücüsünde](/blog/c-drive-full-for-no-reason) gerçekten gigabaytlarca yer açmanın kanıtlanmış yollarını anlatıyoruz.",
      ],
      keyTakeaways: [
        "8.63 GB Windows Update Cleanup verisi, Windows 11 24H2'nin kontrol noktası (checkpoint) dosyalarıdır ve servis yığını tarafından gelecekteki güncellemeler için kilitlenmiştir.",
        'Klasik Disk Temizleme aracı bu dosyaları yanlışlıkla "silinebilir" olarak raporlar; ancak silme komutu verildiğinde işletim sistemi çekirdeği dosyaların kaldırılmasını engeller.',
        "Zorla silmeye çalışmak veya WinSxS klasörünü elle silmek Windows Update hizmetini tamamen bozabilir.",
        "Gerçek disk alanı kazanmak için SoftwareDistribution indirme önbelleği, teslimat optimizasyonu dosyaları ve [WinSxS bileşen analizi](/blog/winsxs-cleanup) kullanılmalıdır.",
        "Disk Mop, kilitli sistem dosyalarını zorlamadan, Windows 11 24H2 üzerinde güvenle silinebilecek diğer gigabaytlarca gizli önbelleği tek tıkla temizler.",
      ],
      dataTable: {
        caption: "Windows 11 24H2 Güncelleme ve Depolama Bileşenleri",
        columns: ["Bileşen", "Görünen Boyut", "Silinebilir mi?", "Açıklama"],
        rows: [
          [
            "Checkpoint Güncelleme Temeli",
            "8.63 GB",
            "Hayır (Kilitli)",
            "Gelecekteki delta güncellemeleri için referans tabanı",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Evet (Güvenli)",
            "Yüklenmiş güncelleme paketlerinin kurulum artıkları",
          ],
          [
            "Teslim En İyileştirme (Delivery Opt)",
            "1–6 GB",
            "Evet (Güvenli)",
            "Yerel ağda diğer PC'lerle paylaşılan paket önbelleği",
          ],
          [
            "Windows.old Klasörü",
            "15–30 GB",
            "Evet (10 Gün Sonra)",
            "Önceki Windows sürümüne geri dönüş kopyası",
          ],
          [
            "Kullanıcı Temp & AppData",
            "5–25 GB",
            "Evet (Güvenli)",
            "Uygulama logları, çökme dökümleri ve web önbellekleri",
          ],
        ],
      },
      howTo: {
        name: "Windows 11 24H2 Güncelleme Sonrası Güvenli Depolama Temizliği",
        totalTime: "PT10M",
        steps: [
          {
            name: "Kilitli 8.63 GB Dosyayı Zorlamayı Bırakın",
            text: "cleanmgr veya Ayarlar ekranındaki 8.63 GB değerinin işletim sistemi tarafından kilitli bir checkpoint olduğunu bilin. Bu dosyaları üçüncü parti dosya yöneticileriyle zorla silmeyin.",
          },
          {
            name: "SoftwareDistribution Klasörünü Güvenle Temizleyin",
            text: "Yönetici olarak komut satırını açın, net stop wuauserv yazarak güncelleme servisini durdurun. C:\\Windows\\SoftwareDistribution\\Download klasöründeki dosyaları silin ve net start wuauserv komutuyla servisi yeniden başlatın.",
          },
          {
            name: "Bileşen Deposunu DISM ile Sıfırlayın",
            text: "Komut satırında Dism.exe /online /Cleanup-Image /StartComponentCleanup komutunu çalıştırın. Bu işlem kilitli olmayan eski yedekleri güvenle süpürür.",
          },
          {
            name: "Teslim En İyileştirme Dosyalarını Kaldırın",
            text: 'Ayarlar > Sistem > Depolama > Geçici Dosyalar bölümünden "Teslim En İyileştirme Dosyaları" seçeneğini işaretleyerek temizleyin.',
          },
          {
            name: "Disk Mop ile Otomatik Temizlik Yapın",
            text: "Disk Mop'u çalıştırarak Windows 11 24H2 için optimize edilmiş algoritmayla sistem loglarını, gölgelendirici önbelleklerini ve geçici dosyaları tek tıkla temizleyin.",
          },
        ],
      },
      sections: [
        {
          title: "Windows 11 24H2 Checkpoint Mimarisi Nedir?",
          content: [
            'Microsoft, Windows 11 24H2 ile birlikte güncelleme boyutlarını küçültmek amacıyla "Checkpoint Cumulative Updates" adını verdiği yeni bir servis mekanizması tanıttı. Bu sistemde, büyük bir temel sürüm bir kontrol noktası olarak dondurulur ve sonraki aylık güncellemeler sadece bu kontrol noktasına göre değişen farkları (delta) indirir.',
            "Sorun şurada başlar: Windows'un eski Disk Temizleme aracı ve Ayarlar paneli, bu kontrol noktası dosyalarını eski tip silinebilir Windows Update yedekleri sanarak 8.63 GB olarak listeler. Ancak Servis Yığını (Servicing Stack), gelecekteki güncellemelerin bozulmaması için bu dosyaları korumaya almıştır. Dolayısıyla silme işlemi başarılı görünse de dosyalar yerinde kalır.",
          ],
        },
        {
          title: "Bu Dosyaları Zorla Silmek Neden Tehlikelidir?",
          content: [
            "Bazı internet forumlarında, sahiplik alarak `C:\\Windows\\WinSxS` altındaki dosyaların silinmesi tavsiye edilmektedir. Bu, Windows 11 kurulumunuzu geri döndürülemez şekilde bozabilir. Bir sonraki toplu güncelleme geldiğinde, referans alınacak checkpoint bulunamadığı için 0x800f0922 veya 0x80070002 gibi kritik güncelleme hatalarıyla karşılaşırsınız.",
            "Bunun yerine [Windows önbellek temizleme](/blog/clear-cache-windows-11) adımlarını uygulayarak ve güvenli geçici klasörleri boşaltarak aynı oranda, hatta daha fazla boş alan kazanabilirsiniz.",
          ],
        },
        {
          title: "Windows 11 24H2'de Gerçekten Yer Açan 4 Güvenli Alan",
          content: [
            "1. **SoftwareDistribution İndirme Klasörü:** Güncellemeler başarıyla yüklendikten sonra kurulum dosyaları `C:\\Windows\\SoftwareDistribution\\Download` altında boş yere yer kaplar. Burayı temizlemek genellikle 5 ila 15 GB arasında net alan kazandırır.",
            "2. **Windows.old Klasörü:** 24H2 büyük bir özellik güncellemesi olduğu için eski sisteminiz `Windows.old` klasörüne kopyalanır. Sisteminiz stabil çalışıyorsa, [Windows.old temizleme rehberimizi](/blog/windows-old-folder) izleyerek 20 GB'ın üzerinde yer açabilirsiniz.",
            "3. **DirectX Gölgelendirici Önbelleği (Shader Cache):** Oyun oynuyorsanız veya grafik programları kullanıyorsanız gölgelendirici önbellekleri hızla 10 GB seviyesine ulaşabilir.",
            "4. **Kullanıcı AppData ve Crash Dumps:** Uygulamaların ürettiği hata dökümleri ve geçici günlükler [C sürücüsünün sebepsiz dolmasına](/blog/c-drive-full-for-no-reason) yol açar.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Microsoft 8.63 GB güncelleme önbelleği sorununu düzeltecek mi?",
          answer:
            "Evet. Microsoft bu durumun bir hata değil, raporlama tutarsızlığı olduğunu kabul etti ve Disk Temizleme aracının checkpoint dosyalarını silinebilir olarak göstermesini engelleyecek bir güncelleme üzerinde çalışmaktadır.",
        },
        {
          question: "8.63 GB önbellek bilgisayarımı yavaşlatır mı?",
          answer:
            "Hayır. Bu dosyalar pasif kütüphanelerdir ve arka planda CPU veya RAM tüketmezler. Yalnızca diskte alan kaplarlar.",
        },
        {
          question: "Disk Mop bu sorunu nasıl ele alıyor?",
          answer:
            "Disk Mop, sistem bütünlüğünü tehlikeye atacak kilitli WinSxS kontrol noktalarına müdahale etmez; bunun yerine sistemin gerçekten silinmesine izin verdiği gigabaytlarca güncelleme artığını, geçici logları ve önbellekleri güvenle temizler.",
        },
      ],
      verdict: [
        "Windows 11 24H2'deki 8.63 GB güncelleme önbelleği bir sistem arızası değil, checkpoint güncelleme mimarisinin koruma kalkanıdır. Bu dosyaları silmeye çalışmak yerine sistem güncellemelerinizi normal akışına bırakın.",
        "Diskinizde acil yer gerekiyorsa SoftwareDistribution klasörünü, Windows.old yedeğini ve uygulama önbelleklerini temizleyin. Disk Mop ile bu işlemi risk almadan saniyeler içinde tamamlayabilirsiniz.",
      ],
      ctaText: "Windows 11 24H2'de Güvenle Yer Açın",
    },
    en: {
      title:
        "Windows 11 24H2 8.63 GB Update Cache Won't Delete? Real Cause and Fix",
      metaDescription:
        "Is Windows Update Cleanup stuck at 8.63 GB in Windows 11 24H2 Disk Cleanup? Discover why checkpoint updates lock these files and how to safely free disk space.",
      subtitle:
        "The technical reason behind the undeletable 8.63 GB cache in Disk Cleanup and how to actually reclaim gigabytes on your C drive.",
      intro: [
        'After installing the Windows 11 version 24H2 (Build 26100+) update, opening Settings > System > Storage or the legacy Disk Cleanup (cleanmgr) utility often displays an enormous 8.63 GB entry labeled "Windows Update Cleanup". Even when you check the box and execute cleanup, the process completes—yet the 8.63 GB remains permanently.',
        'This is not disk corruption or a system failure. It is an intentional design artifact of Microsoft\'s new "Checkpoint Cumulative Updates" architecture introduced in Windows 11 24H2. In this comprehensive guide, we explain why these files are locked, why DISM commands fail to erase them, and proven safe methods to [free up gigabytes on your C drive](/blog/c-drive-full-for-no-reason).',
      ],
      keyTakeaways: [
        "The 8.63 GB Windows Update Cleanup data represents checkpoint base files locked by the servicing stack for future differential updates.",
        "Legacy Disk Cleanup incorrectly flags checkpoint files as reclaimable, but the Windows kernel prevents their deletion to maintain update integrity.",
        "Forcefully deleting files from the WinSxS directory will cause future cumulative updates to fail with error 0x800f0922.",
        "Genuine storage recovery is achieved by clearing SoftwareDistribution downloads, Delivery Optimization caches, and [WinSxS component stores](/blog/winsxs-cleanup).",
        "Disk Mop safely sweeps away gigabytes of actual junk without endangering locked Windows 11 24H2 system checkpoints.",
      ],
      dataTable: {
        caption: "Windows 11 24H2 Update and Storage Components",
        columns: [
          "Component",
          "Reported Size",
          "Can Be Deleted?",
          "Purpose & Impact",
        ],
        rows: [
          [
            "Checkpoint Update Baseline",
            "8.63 GB",
            "No (Locked)",
            "Immutable baseline for monthly delta differential packages",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Yes (Safe)",
            "Staged installation packages of already applied updates",
          ],
          [
            "Delivery Optimization Cache",
            "1–6 GB",
            "Yes (Safe)",
            "P2P network update distribution cache",
          ],
          [
            "Windows.old Directory",
            "15–30 GB",
            "Yes (After 10 Days)",
            "Rollback image of previous Windows version",
          ],
          [
            "User Temp & AppData Caches",
            "5–25 GB",
            "Yes (Safe)",
            "Application logs, crash dumps, and browser cache",
          ],
        ],
      },
      howTo: {
        name: "Safely Free Up Disk Space After Windows 11 24H2 Update",
        totalTime: "PT10M",
        steps: [
          {
            name: "Acknowledge the Locked 8.63 GB Checkpoint",
            text: "Understand that the 8.63 GB entry is an immutable checkpoint required by Windows Update. Do not attempt to force-delete it with third-party unlockers.",
          },
          {
            name: "Purge the SoftwareDistribution Staged Downloads",
            text: 'Open elevated Command Prompt, run "net stop wuauserv", delete the contents inside C:\\Windows\\SoftwareDistribution\\Download, then execute "net start wuauserv".',
          },
          {
            name: "Run DISM Component Cleanup",
            text: 'Execute "Dism.exe /online /Cleanup-Image /StartComponentCleanup" to safely remove superseded component versions that are not checkpoint locked.',
          },
          {
            name: "Remove Delivery Optimization Files",
            text: 'In Settings > System > Storage > Temporary files, check "Delivery Optimization Files" and select Remove files.',
          },
          {
            name: "Run Disk Mop Automated Sweep",
            text: "Launch Disk Mop to automatically identify and remove gigabytes of user cache, game shader dumps, and installer remnants safely.",
          },
        ],
      },
      sections: [
        {
          title: "What Are Windows 11 24H2 Checkpoint Cumulative Updates?",
          content: [
            'With Windows 11 24H2, Microsoft introduced Checkpoint Cumulative Updates to dramatically shrink monthly download sizes. Instead of packaging every historical fix since RTM into one bloated multi-gigabyte payload, Windows now establishes periodic "checkpoints". Monthly updates only need to contain deltas calculated against the latest checkpoint.',
            "The issue arises because the legacy Disk Cleanup utility perceives checkpoint components as superseded update backups, reporting them as 8.63 GB of cleanable space. However, the modern Servicing Stack blocks their deletion to prevent rendering future updates impossible to install.",
          ],
        },
        {
          title: "Why Forcing Deletion Breaks Future Windows Updates",
          content: [
            "Some forum tutorials advise taking ownership of the `C:\\Windows\\WinSxS` folder and deleting files manually. Doing so will cripple your Windows servicing stack. When the next monthly cumulative update arrives, the installer will fail with error `0x800f0922` or `0x80070002` because the baseline differential checkpoint no longer exists.",
            "Instead, apply safe [Windows cache cleanup strategies](/blog/clear-cache-windows-11) to eliminate real bloat without compromising your OS update pipeline.",
          ],
        },
        {
          title: "4 Proven Ways to Reclaim Actual Space on Windows 11 24H2",
          content: [
            "1. **SoftwareDistribution Download Cache:** Once updates are installed, their raw installers remain in `C:\\Windows\\SoftwareDistribution\\Download`. Purging this folder routinely yields 5 to 15 GB of instant space.",
            "2. **Windows.old Rollback Folder:** Because 24H2 is a major build upgrade, your previous installation is archived in `Windows.old`. Follow our [Windows.old cleanup guide](/blog/windows-old-folder) to reclaim 20+ GB if your PC is stable.",
            "3. **DirectX Shader Cache:** Modern games generate massive shader pre-caches that can quietly exceed 10 GB.",
            "4. **AppData Bloat & Crash Dumps:** Uninstalled applications leave behind gigabytes of cached assets that cause [C drive full for no reason](/blog/c-drive-full-for-no-reason) issues.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Will Microsoft fix the 8.63 GB update cache display issue?",
          answer:
            "Yes. Microsoft has formally acknowledged the reporting glitch and is deploying an update to prevent Disk Cleanup from incorrectly flagging checkpoint files as cleanable.",
        },
        {
          question: "Does the 8.63 GB cache slow down my computer?",
          answer:
            "No. These are passive disk libraries that do not consume background CPU or RAM resources.",
        },
        {
          question: "How does Disk Mop handle Windows 11 24H2 cleanup?",
          answer:
            "Disk Mop detects Windows 11 24H2 environments and safely targets verifiable junk—such as staging downloads, crash dumps, and browser caches—while preserving protected servicing stack checkpoints.",
        },
      ],
      verdict: [
        "The 8.63 GB update cache in Windows 11 24H2 is a cosmetic reporting bug caused by checkpoint architecture. Attempting to force-delete it will only break future Windows updates.",
        "To liberate real drive capacity, focus on the SoftwareDistribution folder, Windows.old backups, and application junk. Disk Mop automates this process safely in seconds.",
      ],
      ctaText: "Clean Windows 11 24H2 Safely with Disk Mop",
    },
    de: {
      title:
        "Windows 11 24H2: 8,63 GB Update-Bereinigung lässt sich nicht löschen? Ursache und Lösung",
      metaDescription:
        "Lässt sich die 8,63 GB Windows Update-Bereinigung in Windows 11 24H2 nicht entfernen? Erfahren Sie, warum Checkpoint-Updates die Dateien sperren und wie Sie sicher Speicherplatz schaffen.",
      subtitle:
        "Der technische Hintergrund des 8,63 GB Caches in der Datenträgerbereinigung und wie Sie Ihre C-Festplatte wirklich entlasten.",
      intro: [
        'Nach der Installation von Windows 11 24H2 zeigt die Datenträgerbereinigung oft 8,63 GB unter "Windows Update-Bereinigung" an. Selbst wenn man die Löschung anstößt, bleibt die Datenmenge unverändert bestehen.',
        'Es handelt sich hierbei um ein Phänomen der neuen "Checkpoint Cumulative Updates" von Microsoft. Dieser Leitfaden erklärt die Hintergründe und zeigt effektive Wege, [Speicherplatz auf Laufwerk C freizugeben](/blog/c-drive-full-for-no-reason).',
      ],
      keyTakeaways: [
        "Die 8,63 GB stellen gesperrte Checkpoint-Basisdateien dar, die für zukünftige monatliche Delta-Updates zwingend erforderlich sind.",
        "Die klassische Datenträgerbereinigung meldet diese fälschlicherweise als löschbar, das Betriebssystem verhindert jedoch das Entfernen.",
        "Echtes Einsparpotenzial liegt im Ordner SoftwareDistribution, der Übertragungsoptimierung und temporären Benutzerdaten.",
      ],
      dataTable: {
        caption: "Windows 11 24H2 Speicherkomponenten",
        columns: ["Komponente", "Größe", "Löschbar?", "Funktion"],
        rows: [
          [
            "Checkpoint-Basisdateien",
            "8,63 GB",
            "Nein (Gesperrt)",
            "Referenzbasis für monatliche Updates",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Ja (Sicher)",
            "Installationspakete durchgeführter Updates",
          ],
          [
            "Windows.old Verzeichnis",
            "15–30 GB",
            "Ja (Nach 10 Tagen)",
            "Sicherung des vorherigen Systems",
          ],
        ],
      },
      howTo: {
        name: "Sichere Speicherbereinigung unter Windows 11 24H2",
        totalTime: "PT10M",
        steps: [
          {
            name: "8,63 GB Checkpoint-Dateien belassen",
            text: "Versuchen Sie nicht, diese geschützten Systemdateien mit Gewalt zu entfernen.",
          },
          {
            name: "SoftwareDistribution leeren",
            text: "Stoppen Sie den Updatedienst und löschen Sie den Inhalt von C:\\Windows\\SoftwareDistribution\\Download.",
          },
          {
            name: "Disk Mop für automatisierte Bereinigung nutzen",
            text: "Befreien Sie Ihr System mit Disk Mop von Gigabytes an echtem Datenmüll.",
          },
        ],
      },
      sections: [
        {
          title: "Warum sperrt Windows 11 24H2 diese Dateien?",
          content: [
            "Mit 24H2 nutzt Windows Prüfpunkte, um monatliche Update-Größen drastisch zu verringern. Die Datenträgerbereinigung erkennt dies noch nicht korrekt und stuft sie fälschlich als Müll ein.",
          ],
        },
      ],
      faq: [
        {
          question: "Wird Microsoft das Anzeigeproblem beheben?",
          answer:
            "Ja, ein Patch zur Korrektur der fehlerhaften Speicheranzeige ist bereits in Vorbereitung.",
        },
      ],
      verdict: [
        "Versuchen Sie nicht, die 8,63 GB mit Gewalt zu löschen. Nutzen Sie stattdessen Disk Mop, um gefahrlos echten Speicherplatz zurückzugewinnen.",
      ],
      ctaText: "Windows 11 24H2 jetzt mit Disk Mop bereinigen",
    },
    fr: {
      title:
        "Windows 11 24H2 : Les 8,63 Go de nettoyage Windows Update ne s'effacent pas ? Explication et solution",
      metaDescription:
        "Le nettoyage de mise à jour Windows reste bloqué à 8,63 Go sous Windows 11 24H2 ? Découvrez pourquoi les mises à jour checkpoint verrouillent ces fichiers et comment libérer de l'espace.",
      subtitle:
        "La vérité technique sur le cache persistant de 8,63 Go et les méthodes sûres pour récupérer de la place.",
      intro: [
        'Après la mise à jour vers Windows 11 24H2, l\'outil de nettoyage de disque affiche souvent 8,63 Go dans "Nettoyage de Windows Update". Malgré la suppression, ces gigas restent visibles.',
        "Ce comportement est lié à la nouvelle architecture des mises à jour cumulatives par points de contrôle (checkpoints). Découvrez comment libérer du [vrai espace sur votre disque C](/blog/c-drive-full-for-no-reason).",
      ],
      keyTakeaways: [
        "Les 8,63 Go sont des fichiers de référence checkpoint indispensables pour les futures mises à jour différentielles.",
        "L'ancien outil de nettoyage les liste à tort comme supprimables, mais le système refuse leur effacement.",
        "Pour libérer de la place, il faut cibler le dossier SoftwareDistribution, Windows.old et les caches d'applications.",
      ],
      dataTable: {
        caption: "Composants de stockage Windows 11 24H2",
        columns: ["Composant", "Taille", "Supprimable ?", "Rôle"],
        rows: [
          [
            "Fichiers Checkpoint",
            "8,63 Go",
            "Non (Verrouillé)",
            "Base des mises à jour mensuelles",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 Go",
            "Oui (Sûr)",
            "Packages de téléchargement temporaires",
          ],
          [
            "Dossier Windows.old",
            "15–30 Go",
            "Oui (Après 10 jours)",
            "Sauvegarde de la version précédente",
          ],
        ],
      },
      howTo: {
        name: "Libérer de l'espace en toute sécurité sous Windows 11 24H2",
        totalTime: "PT10M",
        steps: [
          {
            name: "Ne pas forcer la suppression des 8,63 Go",
            text: "Ces fichiers protègent le bon fonctionnement des futures mises à jour.",
          },
          {
            name: "Purger le cache SoftwareDistribution",
            text: "Arrêtez le service Windows Update et videz le dossier de téléchargement temporaire.",
          },
          {
            name: "Utiliser Disk Mop en un clic",
            text: "Éliminez les vrais résidus et fichiers temporaires grâce à Disk Mop.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi ces fichiers restent-ils verrouillés ?",
          content: [
            "Windows 11 24H2 introduit des points de contrôle pour réduire la taille des téléchargements mensuels. Ces fichiers servent de base et ne doivent pas être détruits.",
          ],
        },
      ],
      faq: [
        {
          question: "Est-ce un bug de mon disque dur ?",
          answer:
            "Non, c'est un simple défaut d'affichage de l'utilitaire de nettoyage qui sera corrigé par Microsoft.",
        },
      ],
      verdict: [
        "Laissez les fichiers de checkpoint intacts et utilisez Disk Mop pour libérer plusieurs dizaines de gigas sur vos autres dossiers.",
      ],
      ctaText: "Nettoyer Windows 11 24H2 avec Disk Mop",
    },
    es: {
      title:
        "Windows 11 24H2: ¿No se eliminan los 8.63 GB de Windows Update? Causa y solución real",
      metaDescription:
        "¿El Liberador de espacio en disco no borra los 8.63 GB de Windows Update en Windows 11 24H2? Descubre por qué las actualizaciones checkpoint bloquean estos archivos.",
      subtitle:
        "La razón técnica detrás del caché persistente de 8.63 GB y cómo liberar espacio de verdad en el disco C.",
      intro: [
        'Tras instalar Windows 11 24H2, el Liberador de espacio en disco suele mostrar 8.63 GB en "Limpieza de Windows Update". Aunque marques la casilla y aceptes, los archivos no desaparecen.',
        "Esto se debe a las nuevas actualizaciones acumulativas por puntos de control de Microsoft. Te explicamos cómo [recuperar gigabytes en tu disco C](/blog/c-drive-full-for-no-reason) sin riesgos.",
      ],
      keyTakeaways: [
        "Los 8.63 GB corresponden a puntos de control necesarios para las actualizaciones mensuales por deltas.",
        "La herramienta clásica de limpieza los clasifica erróneamente como desechables, pero el sistema bloquea su borrado.",
        "El verdadero espacio se recupera limpiando SoftwareDistribution, Windows.old y archivos residuales.",
      ],
      dataTable: {
        caption: "Componentes de almacenamiento en Windows 11 24H2",
        columns: ["Componente", "Tamaño", "¿Se puede borrar?", "Función"],
        rows: [
          [
            "Base de puntos de control",
            "8.63 GB",
            "No (Bloqueado)",
            "Referencia para futuras actualizaciones",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Sí (Seguro)",
            "Paquetes de instalación ya procesados",
          ],
          [
            "Carpeta Windows.old",
            "15–30 GB",
            "Sí (Tras 10 días)",
            "Copia de seguridad del sistema anterior",
          ],
        ],
      },
      howTo: {
        name: "Limpiar almacenamiento seguro en Windows 11 24H2",
        totalTime: "PT10M",
        steps: [
          {
            name: "No forzar el borrado de los 8.63 GB",
            text: "Comprende que son archivos esenciales para el correcto mantenimiento de Windows.",
          },
          {
            name: "Vaciar SoftwareDistribution",
            text: "Detén el servicio de actualización y elimina los instaladores descargados.",
          },
          {
            name: "Escanear con Disk Mop",
            text: "Recupera gigas de caché de juegos, navegadores y registros con Disk Mop.",
          },
        ],
      },
      sections: [
        {
          title: "¿Qué son las actualizaciones checkpoint?",
          content: [
            "En Windows 11 24H2, las actualizaciones se descargan como diferencias respecto a un punto base. Esos 8.63 GB son la base inmutable de ese sistema.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Microsoft corregirá este error?",
          answer:
            "Sí, Microsoft ya ha confirmado que actualizará la interfaz para no mostrar estos archivos como eliminables.",
        },
      ],
      verdict: [
        "No dañes tu sistema intentando borrar archivos protegidos. Disk Mop te ayuda a recuperar gigabytes reales de forma automática.",
      ],
      ctaText: "Limpiar Windows 11 24H2 con Disk Mop",
    },
    it: {
      title:
        "Windows 11 24H2: 8,63 GB di Windows Update non si eliminano? Causa e soluzione",
      metaDescription:
        "La pulizia disco di Windows 11 24H2 non elimina gli 8,63 GB di Windows Update? Scopri perché i checkpoint bloccano questi file e come liberare spazio in sicurezza.",
      subtitle:
        "La verità tecnica dietro il blocco dei file da 8,63 GB e come liberare spazio sul disco C.",
      intro: [
        'Dopo aver aggiornato a Windows 11 24H2, Pulizia disco segnala spesso 8,63 GB sotto "Pulizia di Windows Update". Anche selezionando la pulizia, i file rimangono inalterati.',
        'Si tratta di una conseguenza delle nuove "Checkpoint Cumulative Updates". Ecco come [liberare spazio su disco C](/blog/c-drive-full-for-no-reason) in modo sicuro.',
      ],
      keyTakeaways: [
        "Gli 8,63 GB sono file di checkpoint necessari per calcolare i futuri aggiornamenti differenziali.",
        "Pulizia disco li segnala erroneamente come cancellabili, ma il kernel ne impedisce l'eliminazione.",
        "Lo spazio reale si ottiene svuotando SoftwareDistribution, Windows.old e le cache delle app.",
      ],
      dataTable: {
        caption: "Componenti di archiviazione in Windows 11 24H2",
        columns: ["Componente", "Dimensione", "Cancellabile?", "Funzione"],
        rows: [
          [
            "File base di checkpoint",
            "8,63 GB",
            "No (Bloccato)",
            "Base di calcolo per gli aggiornamenti",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Sì (Sicuro)",
            "Pacchetti di installazione temporanei",
          ],
          [
            "Cartella Windows.old",
            "15–30 GB",
            "Sì (Dopo 10 giorni)",
            "Ripristino della versione precedente",
          ],
        ],
      },
      howTo: {
        name: "Liberare spazio in sicurezza su Windows 11 24H2",
        totalTime: "PT10M",
        steps: [
          {
            name: "Non forzare l'eliminazione degli 8,63 GB",
            text: "I file sono protetti per evitare errori futuri di aggiornamento.",
          },
          {
            name: "Pulire la cartella SoftwareDistribution",
            text: "Arresta il servizio Windows Update ed elimina i file temporanei scaricati.",
          },
          {
            name: "Avviare la pulizia con Disk Mop",
            text: "Recupera gigabyte di dati spazzatura ed elimina le cache senza rischi.",
          },
        ],
      },
      sections: [
        {
          title: "Cosa sono gli aggiornamenti Checkpoint?",
          content: [
            "Windows 11 24H2 scarica solo le differenze rispetto a un punto fermo per risparmiare banda. Quegli 8,63 GB costituiscono proprio quel punto fermo.",
          ],
        },
      ],
      faq: [
        {
          question: "È un problema del mio SSD?",
          answer:
            "No, è solo un bug visivo dell'utilità di sistema che Microsoft correggerà a breve.",
        },
      ],
      verdict: [
        "Evita procedure invasive sui file di sistema e utilizza Disk Mop per recuperare spazio prezioso in pochi istanti.",
      ],
      ctaText: "Pulisci Windows 11 24H2 con Disk Mop",
    },
    pt: {
      title:
        "Windows 11 24H2: 8,63 GB do Windows Update não apagam? Causa real e solução",
      metaDescription:
        "A Limpeza de Disco do Windows 11 24H2 não remove os 8,63 GB do Windows Update? Entenda por que as atualizações checkpoint bloqueiam esses arquivos e como liberar espaço.",
      subtitle:
        "A razão técnica do cache de 8,63 GB e a maneira segura de liberar gigabytes no disco C.",
      intro: [
        'Após atualizar para o Windows 11 24H2, a Limpeza de Disco frequentemente lista 8,63 GB em "Limpeza do Windows Update". Mesmo após executar a limpeza, esses gigabytes continuam ocupados.',
        'Isso ocorre devido à arquitetura de "Checkpoint Cumulative Updates" da Microsoft. Aprenda como [liberar espaço no disco C](/blog/c-drive-full-for-no-reason) com segurança.',
      ],
      keyTakeaways: [
        "Os 8,63 GB são arquivos de checkpoint necessários para instalar futuras atualizações mensais.",
        "A ferramenta de Limpeza de Disco lista esses arquivos como removíveis por engano, mas o sistema impede sua exclusão.",
        "O espaço real é liberado limpando a pasta SoftwareDistribution, Windows.old e caches temporários.",
      ],
      dataTable: {
        caption: "Componentes de armazenamento no Windows 11 24H2",
        columns: ["Componente", "Tamanho", "Pode apagar?", "Finalidade"],
        rows: [
          [
            "Linha de base do checkpoint",
            "8,63 GB",
            "Não (Bloqueado)",
            "Referência para updates mensais",
          ],
          [
            "SoftwareDistribution\\Download",
            "2–12 GB",
            "Sim (Seguro)",
            "Instaladores temporários baixados",
          ],
          [
            "Pasta Windows.old",
            "15–30 GB",
            "Sim (Após 10 dias)",
            "Backup para reverter a versão",
          ],
        ],
      },
      howTo: {
        name: "Liberar espaço com segurança no Windows 11 24H2",
        totalTime: "PT10M",
        steps: [
          {
            name: "Não force a exclusão dos 8,63 GB",
            text: "Esses arquivos garantem que as próximas atualizações sejam instaladas com sucesso.",
          },
          {
            name: "Limpe a pasta SoftwareDistribution",
            text: "Pare o serviço de atualização e apague os pacotes de instalação já aplicados.",
          },
          {
            name: "Use o Disk Mop para limpeza automática",
            text: "Remova gigabytes de cache de navegadores, logs e sobras de aplicativos.",
          },
        ],
      },
      sections: [
        {
          title: "O que são as atualizações por Checkpoint?",
          content: [
            "O Windows 11 24H2 baixa apenas a diferença em relação a uma base consolidada para economizar banda. Esses 8,63 GB são essa base essencial.",
          ],
        },
      ],
      faq: [
        {
          question: "A Microsoft vai consertar isso?",
          answer:
            "Sim, a Microsoft confirmou que ajustará a interface para não exibir esses arquivos como limpáveis.",
        },
      ],
      verdict: [
        "Deixe os checkpoints do sistema em paz e use o Disk Mop para eliminar gigabytes reais de arquivos desnecessários.",
      ],
      ctaText: "Limpar Windows 11 24H2 com Disk Mop",
    },
    ja: {
      title:
        "Windows 11 24H2 で 8.63GB の更新プログラムのクリーンアップが消えない？ 原因と本当の解決策",
      metaDescription:
        "Windows 11 24H2 のディスククリーンアップで 8.63GB の Windows Update ファイルが削除できない原因を徹底解説。チェックポイント更新の仕組みと安全な空き容量確保の方法。",
      subtitle:
        "削除しても消えない 8.63GB キャッシュの技術的な真相と、Cドライブの空き容量を確実に増やす正しい手順。",
      intro: [
        "Windows 11 24H2（ビルド 26100+）にアップデートした後、設定のストレージやディスククリーンアップを開くと「Windows Update のクリーンアップ」に約 8.63GB の大容量キャッシュが表示されることがあります。しかし、チェックを入れて削除を実行しても、この 8.63GB は一向に消えません。",
        "これはストレージの故障でも破損でもありません。Microsoft が 24H2 から採用した「チェックポイント累積更新プログラム」による設計上の仕様です。本記事では、このファイルがロックされている理由と、[Cドライブの空き容量を増やす](/blog/c-drive-full-for-no-reason)安全なアプローチを解説します。",
      ],
      keyTakeaways: [
        "8.63GB のデータは今後の月次差分アップデートの基準となる「チェックポイント」ファイルであり、システムによって保護されています。",
        "従来のディスククリーンアップが誤って削除可能と判定していますが、OS カーネルが保護のため削除を拒否しています。",
        "無理に強制削除すると、将来の Windows Update で 0x800f0922 などのエラーが発生する原因になります。",
        "本当の空き容量を確保するには、SoftwareDistribution のダウンロード履歴、配信の最適化ファイル、アプリの一時キャッシュを削除すべきです。",
        "Disk Mop を使えば、保護されたシステム基盤を傷つけることなく、ギガバイト単位の不要キャッシュをワンクリックで安全に削除できます。",
      ],
      dataTable: {
        caption: "Windows 11 24H2 ストレージコンポーネント一覧",
        columns: ["項目", "一般的なサイズ", "削除可能か", "役割と詳細"],
        rows: [
          [
            "チェックポイント基準ファイル",
            "8.63 GB",
            "不可（保護中）",
            "今後の差分アップデートの計算基準となるデータ",
          ],
          [
            "SoftwareDistribution\\Download",
            "2〜12 GB",
            "可能（安全）",
            "適用完了後に不要となったインストーラー一時ファイル",
          ],
          [
            "配信の最適化ファイル",
            "1〜6 GB",
            "可能（安全）",
            "ネットワーク内で共有される更新キャッシュ",
          ],
          [
            "Windows.old フォルダ",
            "15〜30 GB",
            "可能（10日経過後）",
            "以前の Windows バージョンへの復元用バックアップ",
          ],
        ],
      },
      howTo: {
        name: "Windows 11 24H2 アップデート後の安全なストレージ掃除手順",
        totalTime: "PT10M",
        steps: [
          {
            name: "8.63GB の保護ファイルを強制削除しない",
            text: "これは将来のアップデートに必要な基盤です。アクセス権を奪って WinSxS フォルダを無理に消さないでください。",
          },
          {
            name: "SoftwareDistribution フォルダを掃除する",
            text: "管理者権限のコマンドプロンプトで net stop wuauserv を実行し、C:\\Windows\\SoftwareDistribution\\Download の中身を削除して再起動します。",
          },
          {
            name: "Disk Mop で自動クリーンアップを実行する",
            text: "Disk Mop を起動して、ブラウザやゲーム、アプリが残した大量の不要ファイルを安全に一括削除します。",
          },
        ],
      },
      sections: [
        {
          title: "チェックポイント更新プログラムとは？",
          content: [
            "Windows 11 24H2 では毎月の更新ファイルサイズを小さく抑えるため、定期的な「チェックポイント」を設定し、それ以降は差分のみを配信する方式に刷新されました。表示される 8.63GB はその基準データです。",
          ],
        },
      ],
      faq: [
        {
          question: "この不具合は修正されますか？",
          answer:
            "はい。Microsoft はこの表示の食い違いを認識しており、チェックポイントファイルを削除対象として表示しないよう修正アップデートを準備しています。",
        },
      ],
      verdict: [
        "8.63GB を無理に消そうと時間を浪費する必要はありません。Disk Mop を活用して、安全に削除可能なキャッシュから数十ギガバイトの容量を取り戻しましょう。",
      ],
      ctaText: "Disk Mop で Windows 11 24H2 を安全にクリーンアップ",
    },
  },
};
