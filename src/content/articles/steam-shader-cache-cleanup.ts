import type { Article } from "../types";

export const steamShaderCacheCleanup: Article = {
  slug: "steam-shader-cache-cleanup",
  type: "guide",
  category: "Gaming",
  date: "2026-09-19",
  updated: "2026-09-19",
  readingTime: 7,
  content: {
    tr: {
      title:
        "Steam Shader Cache (Gölgelendirici Önbelleği) Nasıl Temizlenir? GB'larca Yer Açma",
      metaDescription:
        "Steam oyunları C sürücünüzü gizlice dolduruyor mu? steamapps\\shadercache ve DirectX NV_Cache klasörlerini güvenle temizleme ve oyun performansını koruma rehberi.",
      subtitle:
        "Oyunları silmeden steamapps\\shadercache ve GPU önbelleklerinden 20–50 GB boş alan kazanmanın kanıtlanmış adımları.",
      intro: [
        "Steam kütüphaneniz D veya E gibi ikincil bir diskte olsa bile, Steam varsayılan olarak tüm oyunların derlenmiş gölgelendiricilerini (Shader Pre-Caching) ve DirectX/Vulkan önbelleklerini ana sistem diskiniz olan [C sürücüsünde](/blog/c-drive-full-for-no-reason) biriktirir. Zamanla bu klasörler 30 GB, hatta 80 GB seviyesine ulaşarak SSD'nizi tıkayabilir.",
        "Daha da kötüsü, bir oyunu Steam üzerinden kaldırsanız dahi, Steam o oyuna ait shadercache klasörünü ve GPU sürücü önbelleklerini otomatik olarak silmez! Bu kapsamlı rehberde, artık oyun gölgelendiricilerini nasıl güvenle sileceğinizi, takılmaları (stuttering) önlemek için neleri saklamanız gerektiğini ve [oyunlar için disk alanı açmayı](/blog/free-up-disk-space-for-gaming) adım adım inceliyoruz.",
      ],
      keyTakeaways: [
        "Steam Shader Cache, oyun içi takılmaları önlemek için önceden derlenmiş grafik kodlarını saklar; ancak silinen oyunların önbellekleri asla otomatik temizlenmez.",
        "Steam oyunları başka bir sürücüde kurulu olsa bile shadercache klasörü C:\\Program Files (x86)\\Steam veya AppData altında şişmeye devam eder.",
        "NVIDIA (DXCache/GLCache) ve AMD (DxCache) sürücüleri de kendi bağımsız gölgelendirici önbelleklerini C sürücüsünde tutar.",
        "Shader cache silindiğinde oyun bozulmaz; oyun ilk açılışta yalnızca ihtiyaç duyduğu gölgelendiricileri 1–2 dakika içinde yeniden derler.",
        "Disk Mop, kaldırılmış oyunlara ait yetim kalmış shader klasörlerini otomatik tespit ederek tek tıkla güvenle temizler.",
      ],
      dataTable: {
        caption: "Popüler Oyunların Tipik Shader ve Geçici Veri Boyutları",
        columns: [
          "Oyun / Platform",
          "Tipik Shader Boyutu",
          "Konum",
          "Güvenle Silinir mi?",
        ],
        rows: [
          [
            "Call of Duty (Warzone/MW3)",
            "15–28 GB",
            "AppData & Shadercache",
            "Evet (Yeniden derlenir)",
          ],
          [
            "Apex Legends",
            "8–14 GB",
            "steamapps\\shadercache\\1172470",
            "Evet (İlk açılışta yenilenir)",
          ],
          [
            "Baldur's Gate 3",
            "6–12 GB",
            "AppData\\Local\\Larian Studios",
            "Evet (Önbellek sıfırlanır)",
          ],
          [
            "Cyberpunk 2077",
            "5–10 GB",
            "steamapps\\shadercache\\1091500",
            "Evet (Grafik güncellemesinde önerilir)",
          ],
          [
            "NVIDIA DXCache / GLCache",
            "10–30 GB",
            "AppData\\Local\\NVIDIA\\DXCache",
            "Evet (Sürücü güncellemeleri sonrası)",
          ],
        ],
      },
      howTo: {
        name: "Steam ve GPU Shader Önbelleğini Güvenle Temizleme",
        totalTime: "PT8M",
        steps: [
          {
            name: "Steam Shader Pre-Caching Ayarını Kontrol Edin",
            text: 'Steam > Ayarlar > İndirmeler yolunu izleyin. "Shader Pre-Caching" (Gölgelendirici Önceden Önbelleğe Alma) seçeneğinin açık olduğunu doğrulayın.',
          },
          {
            name: "Steam Shadercache Klasörünü Temizleyin",
            text: "Steam'i tamamen kapatın. C:\\Program Files (x86)\\Steam\\steamapps\\shadercache konumuna gidin. Artık oynamadığınız veya sildiğiniz oyunların AppID numaralı klasörlerini silin.",
          },
          {
            name: "NVIDIA ve AMD DirectX Önbelleğini Boşaltın",
            text: "Çalıştır penceresine (Win+R) %localappdata% yazın. NVIDIA kullananlar NVIDIA\\DXCache klasörünü, AMD kullananlar AMD\\DxCache klasörünü temizleyebilir.",
          },
          {
            name: "Windows Disk Temizleme ile DirectX Önbelleğini Sıfırlayın",
            text: "Başlat menüsünden Disk Temizleme'yi açın, C sürücüsünü seçin ve \"DirectX Gölgelendirici Önbelleği\" seçeneğini işaretleyerek Tamam'a tıklayın.",
          },
          {
            name: "Disk Mop ile Yetim Oyun Artıklarını Kaldırın",
            text: "Disk Mop'u çalıştırarak kaldırılmış oyunların AppData ve ProgramData altında unuttuğu onlarca gigabaytlık çökme raporlarını ve eski paketleri otomatik temizleyin.",
          },
        ],
      },
      sections: [
        {
          title: "Shader Cache Neden Bu Kadar Çok Yer Kaplar?",
          content: [
            'Modern oyunlar DirectX 12 ve Vulkan API\'lerini kullanır. Eski oyunlar grafik efektlerini oynarken anlık hesaplarken, yeni oyunlar "gölgeleme takılmalarını" (shader compilation stuttering) önlemek için yüz binlerce grafik varyasyonunu önceden derleyip diske yazar.',
            "Steam bu dosyaları iki farklı yerde depolar: `steamapps\\shadercache` ve GPU sürücünüzün önbellek dizinleri (`%localappdata%\\NVIDIA\\DXCache`). Her büyük ekran kartı sürücüsü güncellemesinde eski gölgelendiriciler geçersiz kalır ama diskten silinmez; yenileri eklenerek diskinizi sessizce tüketir.",
          ],
        },
        {
          title: "Shader Cache Silinirse Oyuna Ne Olur?",
          content: [
            "Korkulacak hiçbir şey yoktur: Shader dosyaları oyun kayıt dosyası (savegame), profil bilgisi veya oyunun kendi ana dosyası değildir. Tamamen geçici performans ara belleğidir.",
            'Önbelleği temizledikten sonra oyunu açtığınızda ekranda "Gölgelendiriciler derleniyor..." çubuğu görürsünüz. Bu işlem bilgisayarınızın işlemcisine bağlı olarak 30 saniye ile 2 dakika arasında sürer ve oyun tertemiz yeni bir önbellekle çalışmaya başlar.',
            "Hatta grafik sürücüsü güncelledikten sonra oyunlarda ani FPS düşüşleri veya donmalar yaşıyorsanız, bozulmuş eski shader önbelleğini silmek bu sorunu çözen 1 numaralı yöntemdir.",
          ],
        },
        {
          title: "Oyun Bilgisayarlarında Ekstra 40 GB Açmanın Diğer Yolları",
          content: [
            "1. **Steam İndirme Artıkları:** İndirme yarıda kaldığında veya güncellemeler bittiğinde `steamapps\\downloading` klasöründe gigabaytlarca geçici veri unutulabilir.",
            "2. **Steam Atölye (Workshop) Modları:** Artık oynamadığınız oyunların atölye modları `steamapps\\workshop` klasöründe kalmaya devam eder.",
            "3. **Epic Games & Xbox Game Pass Artıkları:** Epic Games Store güncellemeleri `%localappdata%\\EpicGamesLauncher` altında devasa loglar tutar.",
            "4. **SSD Doluluk Seviyesini %80 Altında Tutmak:** SSD sürücünüz [doldukça yavaşlar](/blog/ssd-slows-down-when-full). Shader temizliği yaparak SSD'nize nefes aldırabilirsiniz.",
          ],
        },
      ],
      faq: [
        {
          question: "Shader cache silmek FPS düşürür mü?",
          answer:
            "Yalnızca ilk açılışta gölgelendiriciler derlenirken kısa süreli bir bekleme olur. Oyun derlemeyi tamamladıktan sonra performans normale döner; hatta bozuk önbellekler temizlendiği için takılmalar ortadan kalkar.",
        },
        {
          question:
            "Shader Pre-Caching ayarını Steam'den tamamen kapatmalı mıyım?",
          answer:
            "Eğer çok dar bir SSD'niz yoksa kapatmanız önerilmez. Kapatırsanız oyunlar shader derlemesini oyun sırasında yapmaya çalışır ve ani takılmalara (micro-stutter) neden olabilir. En iyi yöntem özelliği açık tutup düzenli temizlemektir.",
        },
        {
          question: "Hangi klasörün hangi oyuna ait olduğunu nasıl anlarım?",
          answer:
            "Klasör adları Steam AppID numaralarıdır. Örneğin 1172470 Apex Legends, 1091500 Cyberpunk 2077'dir. SteamDB sitesinden aratarak oyunun ID'sini öğrenebilir veya Disk Mop ile bunu otomatik yapabilirsiniz.",
        },
      ],
      verdict: [
        "Steam shader cache ve GPU önbellekleri modern oyunlar için gereklidir ancak kaldırılmış oyunların artıklarını temizlememek C sürücünüzün hızla tükenmesine neden olur.",
        "Düzenli olarak shadercache ve DXCache klasörlerini temizlemek hem diskinizde onlarca gigabayt yer açar hem de grafik sürücüsü güncellemelerinden sonra oyun kararlılığını artırır.",
      ],
      ctaText: "Oyun Artıklarını Disk Mop ile Temizleyin",
    },
    en: {
      title: "How to Clear Steam Shader Cache and Reclaim Gigabytes on Windows",
      metaDescription:
        "Is Steam secretly filling your C drive? Learn how to safely clean steamapps\\shadercache and DirectX GPU caches without hurting gaming performance.",
      subtitle:
        "Reclaim 20–50 GB of disk space from steamapps\\shadercache and graphics driver caches without uninstalling your favorite games.",
      intro: [
        "Even if your Steam games are stored on a secondary drive like D: or E:, Steam and your graphics card driver store pre-compiled graphics assets (Shader Pre-Caching) on your primary [C drive](/blog/c-drive-full-for-no-reason) by default. Over time, these caches swell to 30 GB or even 80 GB, pushing your SSD into critical capacity warning levels.",
        "Worse still, when you uninstall a game through Steam, the associated shader cache folders and DirectX pipeline caches are almost never purged automatically! In this complete guide, we examine how to safely delete orphaned shader caches, eliminate micro-stutters, and [free up drive space for gaming](/blog/free-up-disk-space-for-gaming).",
      ],
      keyTakeaways: [
        "Steam Shader Cache stores pre-compiled shaders to prevent in-game stuttering, but uninstalled games leave their caches behind permanently.",
        "Even when game libraries are hosted on secondary drives, shaders accumulate on C: inside Steam and AppData directories.",
        "Both NVIDIA (DXCache/GLCache) and AMD (DxCache) drivers store their own independent shader dumps on the primary drive.",
        "Deleting shader caches will never corrupt your games or saves; the game simply recompiles clean assets on next launch in 1–2 minutes.",
        "Disk Mop automatically detects orphaned game caches and leftover driver logs, allowing safe 1-click space recovery.",
      ],
      dataTable: {
        caption: "Typical Shader & Cache Footprint of Modern PC Games",
        columns: [
          "Game / Driver",
          "Typical Shader Size",
          "Directory Location",
          "Safe to Delete?",
        ],
        rows: [
          [
            "Call of Duty (Warzone/MW3)",
            "15–28 GB",
            "AppData & Shadercache",
            "Yes (Recompiled on boot)",
          ],
          [
            "Apex Legends",
            "8–14 GB",
            "steamapps\\shadercache\\1172470",
            "Yes (Refreshed on launch)",
          ],
          [
            "Baldur's Gate 3",
            "6–12 GB",
            "AppData\\Local\\Larian Studios",
            "Yes (Safe cache reset)",
          ],
          [
            "Cyberpunk 2077",
            "5–10 GB",
            "steamapps\\shadercache\\1091500",
            "Yes (Recommended post-patch)",
          ],
          [
            "NVIDIA DXCache & GLCache",
            "10–30 GB",
            "AppData\\Local\\NVIDIA\\DXCache",
            "Yes (Safe driver cache purge)",
          ],
        ],
      },
      howTo: {
        name: "Safely Clean Steam and GPU Shader Cache",
        totalTime: "PT8M",
        steps: [
          {
            name: "Verify Steam Shader Pre-Caching Settings",
            text: 'Open Steam > Settings > Downloads and check the status of "Enable Shader Pre-Caching".',
          },
          {
            name: "Clear Steam shadercache Directory",
            text: "Exit Steam completely. Navigate to C:\\Program Files (x86)\\Steam\\steamapps\\shadercache and delete the numeric AppID folders of games you no longer play.",
          },
          {
            name: "Purge NVIDIA and AMD GPU Caches",
            text: 'Press Win+R, enter "%localappdata%", and clear old cached files inside NVIDIA\\DXCache or AMD\\DxCache.',
          },
          {
            name: "Reset DirectX Shader Cache via Windows Disk Cleanup",
            text: 'Open Disk Cleanup, select drive C:, check "DirectX Shader Cache", and click OK.',
          },
          {
            name: "Run Disk Mop Automated Deep Clean",
            text: "Launch Disk Mop to automatically sweep orphaned game crash logs, leftover patches, and redundant temporary files.",
          },
        ],
      },
      sections: [
        {
          title: "Why Does Shader Cache Consume So Much Disk Space?",
          content: [
            "Modern DirectX 12 and Vulkan titles require graphic instructions to be compiled for your specific GPU hardware. To eliminate in-game stuttering during gameplay, games compile thousands of permutations ahead of time and store them locally.",
            "Whenever GPU drivers are updated, existing cached shaders become stale. Rather than overwriting old data, the system frequently creates new entries while leaving outdated caches abandoned on your drive.",
          ],
        },
        {
          title: "What Happens When You Delete Shader Cache?",
          content: [
            "Nothing harmful will happen: Shader files contain zero personal save data or core game binaries. They are purely performance caches.",
            'On your next game launch, you may observe a brief "Compiling shaders..." screen lasting 30 to 90 seconds. Once compiled, performance returns to 100% efficiency. In fact, clearing corrupted shader caches frequently resolves mysterious game crashes after major GPU driver updates.',
          ],
        },
      ],
      faq: [
        {
          question: "Does clearing shader cache hurt my frame rate (FPS)?",
          answer:
            "No. After the brief initial compile on startup, your frame rate will be identical or smoother, as corrupt cache bottlenecks are eliminated.",
        },
        {
          question: "Should I disable Shader Pre-Caching in Steam completely?",
          answer:
            "Unless your drive space is dangerously low, keep it enabled. Disabling it forces shaders to compile on the fly during gameplay, causing noticeable micro-stuttering.",
        },
      ],
      verdict: [
        "Shader caching is essential for smooth gameplay, but failing to clear orphaned game caches will slowly devour tens of gigabytes of valuable SSD space.",
        "Routine cleaning of shadercache and driver directories keeps your system responsive and ensures your SSD operates within peak performance thresholds.",
      ],
      ctaText: "Clean Game Leftovers with Disk Mop",
    },
    de: {
      title: "Steam Shader-Cache leeren und Gigabytes auf Windows freigeben",
      metaDescription:
        "Belegt Steam zu viel Speicherplatz auf Laufwerk C? Erfahren Sie, wie Sie den steamapps\\shadercache und GPU-Caches gefahrlos bereinigen.",
      subtitle:
        "Gewinnen Sie 20–50 GB Speicherplatz von veralteten Spiele- und Grafikkarten-Caches zurück.",
      intro: [
        "Selbst wenn Steam-Spiele auf einer zweiten Festplatte liegen, speichert Steam Shader-Caches standardmäßig auf [Laufwerk C](/blog/c-drive-full-for-no-reason). Mit der Zeit belegen diese Daten Dutzende Gigabytes.",
      ],
      keyTakeaways: [
        "Shader-Caches verhindern Ruckler im Spiel, deinstallierte Spiele hinterlassen diese Caches jedoch dauerhaft.",
        "Das Löschen von Shader-Caches beschädigt weder Spiele noch Spielstände; sie werden beim nächsten Start einfach neu erstellt.",
      ],
      dataTable: {
        caption: "Typische Shader-Größen moderner PC-Spiele",
        columns: ["Spiel", "Shader-Größe", "Speicherort", "Löschbar?"],
        rows: [
          [
            "Call of Duty",
            "15–28 GB",
            "AppData & Shadercache",
            "Ja (Wird neu erstellt)",
          ],
          ["Apex Legends", "8–14 GB", "steamapps\\shadercache", "Ja (Sicher)"],
        ],
      },
      howTo: {
        name: "Steam Shader-Cache sicher bereinigen",
        totalTime: "PT8M",
        steps: [
          {
            name: "Steam beenden und Ordner öffnen",
            text: "Beenden Sie Steam und navigieren Sie zu C:\\Program Files (x86)\\Steam\\steamapps\\shadercache.",
          },
        ],
      },
      sections: [
        {
          title: "Warum wächst der Shader-Cache so stark?",
          content: [
            "Bei jedem Treiber-Update werden neue Shader generiert, während alte Versionen oft ungenutzt auf der Festplatte verbleiben.",
          ],
        },
      ],
      faq: [
        {
          question: "Verliere ich dadurch Spielstände?",
          answer:
            "Nein, Spielstände werden völlig getrennt in Cloud- oder Dokumentordnern gesichert.",
        },
      ],
      verdict: [
        "Regelmäßiges Bereinigen von Shader-Caches schafft wertvollen Platz und beugt Fehlern nach Treiber-Updates vor.",
      ],
      ctaText: "Spiele-Caches jetzt mit Disk Mop bereinigen",
    },
    fr: {
      title: "Comment vider le cache des shaders Steam et libérer des gigas",
      metaDescription:
        "Steam sature votre disque C ? Découvrez comment vider steamapps\\shadercache et les caches DirectX sans impacter vos jeux.",
      subtitle:
        "Récupérez 20 à 50 Go d'espace sur vos caches graphiques et fichiers temporaires de jeux.",
      intro: [
        "Même installés sur un disque secondaire, les jeux Steam stockent leurs shaders pré-compilés sur le [disque C](/blog/c-drive-full-for-no-reason), occupant parfois plus de 50 Go.",
      ],
      keyTakeaways: [
        "Le cache de shaders prévient les saccades, mais les jeux désinstallés laissent leurs fichiers sur le disque.",
        "La suppression du cache ne supprime aucune sauvegarde et régénère des fichiers sains au lancement suivant.",
      ],
      dataTable: {
        caption: "Taille moyenne des shaders de jeux",
        columns: ["Jeu", "Taille du cache", "Emplacement", "Supprimable ?"],
        rows: [
          [
            "Call of Duty",
            "15–28 Go",
            "AppData & Shadercache",
            "Oui (Régénéré)",
          ],
          [
            "Cyberpunk 2077",
            "5–10 Go",
            "steamapps\\shadercache",
            "Oui (Recommandé)",
          ],
        ],
      },
      howTo: {
        name: "Nettoyer le cache des shaders Steam",
        totalTime: "PT8M",
        steps: [
          {
            name: "Fermer Steam et supprimer les caches orphelins",
            text: "Rendez-vous dans C:\\Program Files (x86)\\Steam\\steamapps\\shadercache et supprimez les dossiers des jeux désinstallés.",
          },
        ],
      },
      sections: [
        {
          title: "Pourquoi ce cache prend-il autant de place ?",
          content: [
            "Les pilotes graphiques modernes compilent des milliers d'instructions. À chaque mise à jour de pilote, l'ancien cache reste orphelin.",
          ],
        },
      ],
      faq: [
        {
          question: "Vais-je perdre mes sauvegardes ?",
          answer:
            "Non, les sauvegardes sont totalement indépendantes de ce cache temporaire.",
        },
      ],
      verdict: [
        "Nettoyer vos caches de shaders permet de restaurer les performances de votre SSD tout en évitant les crashs graphiques.",
      ],
      ctaText: "Nettoyer vos jeux avec Disk Mop",
    },
    es: {
      title:
        "Cómo borrar la caché de sombreadores de Steam y liberar gigabytes",
      metaDescription:
        "¿Steam llena tu disco C? Aprende a limpiar steamapps\\shadercache y las cachés de DirectX de tu tarjeta gráfica fácilmente.",
      subtitle:
        "Recupera entre 20 y 50 GB de espacio eliminando cachés de juegos sin desinstalar nada.",
      intro: [
        "Aunque instales tus juegos en un disco secundario, Steam almacena las cachés de sombreado en el [disco principal C](/blog/c-drive-full-for-no-reason), acumulando gigas invisibles.",
      ],
      keyTakeaways: [
        "La caché de sombreadores evita tirones en juegos, pero los juegos desinstalados no borran su caché.",
        "Borrar esta caché es 100% seguro: no pierdes partidas guardadas ni archivos principales.",
      ],
      dataTable: {
        caption: "Tamaño de sombreadores en juegos populares",
        columns: [
          "Juego",
          "Tamaño de caché",
          "Ubicación",
          "¿Seguro de borrar?",
        ],
        rows: [
          [
            "Call of Duty",
            "15–28 GB",
            "AppData & Shadercache",
            "Sí (Se recompila)",
          ],
          ["Apex Legends", "8–14 GB", "steamapps\\shadercache", "Sí (Seguro)"],
        ],
      },
      howTo: {
        name: "Limpiar la caché de sombreadores de Steam",
        totalTime: "PT8M",
        steps: [
          {
            name: "Borrar carpetas huérfanas en shadercache",
            text: "Cierra Steam y navega a C:\\Program Files (x86)\\Steam\\steamapps\\shadercache para borrar carpetas de juegos que ya no usas.",
          },
        ],
      },
      sections: [
        {
          title: "¿Por qué ocupa tanto espacio?",
          content: [
            "Cada actualización de controladores gráficos invalida los sombreadores anteriores sin borrarlos del disco.",
          ],
        },
      ],
      faq: [
        {
          question: "¿Afecta al rendimiento del juego?",
          answer:
            "Solo tardará un par de minutos en recompilarse la primera vez; luego el rendimiento será óptimo.",
        },
      ],
      verdict: [
        "Mantener limpia la caché de Steam y la GPU asegura que tu SSD rinda al máximo y no se llene sin explicación.",
      ],
      ctaText: "Optimizar espacio de juegos con Disk Mop",
    },
    it: {
      title: "Come svuotare la cache degli shader di Steam e recuperare spazio",
      metaDescription:
        "Steam sta occupando troppo spazio sul disco C? Scopri come eliminare steamapps\\shadercache e le cache grafiche in sicurezza.",
      subtitle:
        "Libera da 20 a 50 GB di spazio rimuovendo le cache residue dei giochi.",
      intro: [
        "Anche se installi i giochi su un secondo drive, Steam salva i file di cache degli shader sul [disco C](/blog/c-drive-full-for-no-reason), consumando decine di gigabyte.",
      ],
      keyTakeaways: [
        "I giochi disinstallati lasciano quasi sempre intatte le loro cartelle shadercache.",
        "La rimozione della cache è sicura e non cancella i salvataggi né danneggia i giochi.",
      ],
      dataTable: {
        caption: "Dimensioni medie della cache degli shader",
        columns: ["Gioco", "Dimensione cache", "Percorso", "Cancellabile?"],
        rows: [
          [
            "Call of Duty",
            "15–28 GB",
            "AppData & Shadercache",
            "Sì (Ricompilato)",
          ],
          ["Baldur's Gate 3", "6–12 GB", "AppData\\Local", "Sì (Sicuro)"],
        ],
      },
      howTo: {
        name: "Pulire la cache degli shader di Steam",
        totalTime: "PT8M",
        steps: [
          {
            name: "Eliminare le cartelle shadercache residue",
            text: "Chiudi Steam e rimuovi i file obsoleti da C:\\Program Files (x86)\\Steam\\steamapps\\shadercache.",
          },
        ],
      },
      sections: [
        {
          title: "Perché la cache cresce continuamente?",
          content: [
            "Ogni aggiornamento dei driver video genera nuovi shader senza eliminare automaticamente le versioni obsolete.",
          ],
        },
      ],
      faq: [
        {
          question: "I miei salvataggi sono a rischio?",
          answer:
            "No, i file di salvataggio sono archiviati separatamente nel cloud o nella cartella Documenti.",
        },
      ],
      verdict: [
        "Svuotare periodicamente la cache degli shader restituisce gigabyte preziosi e risolve problemi di scatti improvvisi.",
      ],
      ctaText: "Pulisci i file di gioco con Disk Mop",
    },
    pt: {
      title: "Como limpar o cache de sombreadores do Steam e liberar gigabytes",
      metaDescription:
        "O Steam está lotando seu disco C? Veja como limpar com segurança a pasta steamapps\\shadercache e os caches do DirectX.",
      subtitle:
        "Recupere de 20 a 50 GB de espaço em disco de jogos sem desinstalar nada.",
      intro: [
        "Mesmo quando seus jogos estão em outro drive, o Steam armazena caches de sombreadores no [disco C](/blog/c-drive-full-for-no-reason), sobrecarregando seu SSD.",
      ],
      keyTakeaways: [
        "Jogos desinstalados deixam seus arquivos de cache para trás permanentemente.",
        "Limpar o cache de shaders é seguro e não remove jogos nem dados salvos.",
      ],
      dataTable: {
        caption: "Tamanho médio de shaders em jogos modernos",
        columns: ["Jogo", "Tamanho do cache", "Localização", "Pode apagar?"],
        rows: [
          [
            "Call of Duty",
            "15–28 GB",
            "AppData & Shadercache",
            "Sim (Recompilado)",
          ],
          [
            "Cyberpunk 2077",
            "5–10 GB",
            "steamapps\\shadercache",
            "Sim (Recomendado)",
          ],
        ],
      },
      howTo: {
        name: "Limpar cache de sombreadores do Steam",
        totalTime: "PT8M",
        steps: [
          {
            name: "Limpar a pasta shadercache",
            text: "Feche o Steam e apague as pastas de jogos excluídos em C:\\Program Files (x86)\\Steam\\steamapps\\shadercache.",
          },
        ],
      },
      sections: [
        {
          title: "Por que o cache consome tanto espaço?",
          content: [
            "A cada atualização de drivers da placa de vídeo, novos shaders são compilados sem que os antigos sejam descartados.",
          ],
        },
      ],
      faq: [
        {
          question: "Isso afeta o FPS dos meus jogos?",
          answer:
            "Após uma breve compilação inicial ao abrir o jogo, o desempenho será idêntico ou até melhor.",
        },
      ],
      verdict: [
        "A limpeza de shaders é essencial para manter seu SSD rápido e livre de travamentos em jogos.",
      ],
      ctaText: "Limpar sobras de jogos com Disk Mop",
    },
    ja: {
      title:
        "Steam のシェーダーキャッシュを削除してギガ単位の空き容量を確保する方法",
      metaDescription:
        "Steam が C ドライブを圧迫していませんか？ steamapps\\shadercache や DirectX GPU キャッシュを安全にクリーンアップしてストレージ容量を回復する手順。",
      subtitle:
        "ゲームをアンインストールすることなく、シェーダーキャッシュから 20〜50GB の容量を取り戻す方法。",
      intro: [
        "Steam のゲームライブラリを D ドライブなどに逃がしていても、シェーダーキャッシュ（Shader Pre-Caching）はデフォルトでメインの [C ドライブ](/blog/c-drive-full-for-no-reason) に蓄積されます。",
      ],
      keyTakeaways: [
        "シェーダーキャッシュはゲーム中のカクつきを防ぎますが、アンインストールしたゲームのキャッシュは残り続けます。",
        "キャッシュを削除してもセーブデータやゲーム本体が消えることはありません。次回起動時に再生成されます。",
      ],
      dataTable: {
        caption: "人気タイトルのシェーダーキャッシュ容量目安",
        columns: ["タイトル", "キャッシュ目安容量", "保存先", "削除可能か"],
        rows: [
          [
            "Call of Duty",
            "15〜28 GB",
            "AppData & Shadercache",
            "可能（次回再構築）",
          ],
          [
            "Apex Legends",
            "8〜14 GB",
            "steamapps\\shadercache",
            "可能（安全）",
          ],
        ],
      },
      howTo: {
        name: "Steam シェーダーキャッシュの安全な掃除手順",
        totalTime: "PT8M",
        steps: [
          {
            name: "不要な AppID フォルダを削除する",
            text: "Steam を終了し、C:\\Program Files (x86)\\Steam\\steamapps\\shadercache 内の遊んでいないゲームのフォルダを削除します。",
          },
        ],
      },
      sections: [
        {
          title: "なぜシェーダーキャッシュが巨大化するのか？",
          content: [
            "グラフィックボードのドライバを更新するたびに新しいシェーダーが生成され、過去の古いデータが放置されるためです。",
          ],
        },
      ],
      faq: [
        {
          question: "ゲームの動作が遅くなりますか？",
          answer:
            "初回起動時に数十秒〜数分の再コンパイルが入るだけで、以降のフレームレートは変わりません。",
        },
      ],
      verdict: [
        "定期的なシェーダーキャッシュの整理は、Cドライブの容量回復とゲームの安定性向上に直結します。",
      ],
      ctaText: "Disk Mop でゲームのゴミファイルを一括削除",
    },
  },
};
