import type { Article } from '../types';

export const uninstallLeftovers: Article = {
  slug: 'uninstall-leftovers-cleaner',
  type: 'guide',
  category: 'Disk Cleanup',
  date: '2026-06-18',
  readingTime: 6,
  content: {
    tr: {
      title: 'Kaldırma Artıkları Nedir? Windows\'ta Geriye Kalan Dosyaları Temizleme',
      metaDescription:
        'Program kaldırdıktan sonra geriye kalan dosya ve registry kayıtlarını temizleyin. Kaldırma artıkları nedir, nasıl bulunur ve güvenle silinir? Disk Mop ile otomatik temizlik.',
      subtitle: 'Kaldırdığınız Programlardan Geriye Kalanları Bulun ve Temizleyin',
      intro: [
        'Windows\'ta bir programı kaldırdığınızda, gerçekten tamamen silindiğini düşünürsünüz. Ancak çoğu durumda geride dosyalar, klasörler ve registry kayıtları kalır. Bu "kaldırma artıkları" zamanla birikir, disk alanı kaplar ve sisteminizi yavaşlatır.',
        'Revo Uninstaller gibi araçlar bu sorunu çözmek için var, ancak Disk Mop v1.0.15 ile artık ayrı bir program kurmanıza gerek yok. Yeni Kaldırma Artıkları Temizleyici özelliği, yetim klasörleri ve registry kayıtlarını otomatik olarak tespit eder.',
      ],
      sections: [
        {
          title: 'Kaldırma Artıkları Neden Oluşur?',
          content: [
            'Windows\'un program kaldırma mekanizması mükemmel değildir. Birçok program, Denetim Masası üzerinden kaldırıldığında kendi oluşturduğu tüm dosyaları silmez. Ayar dosyaları, önbellek verileri, log kayıtları ve kullanıcı verileri geride kalır.',
            'Özellikle Program Files, AppData, LocalAppData ve ProgramData gibi klasörlerde artık klasörler birikir. Registry\'de ise HKCU\\Software ve HKLM\\SOFTWARE altında artık anahtarlar kalır. Bu kayıtlar sistemin performansını doğrudan etkilemese de disk alanını gereksiz yere kaplar.',
            'Bazı büyük uygulamalar (oyunlar, geliştirme araçları, grafik yazılımları) kaldırıldığında gigabaytlarca artık dosya bırakabilir. Düzenli olarak program kurup kaldıran kullanıcılarda bu sorun daha belirgin hale gelir.',
          ],
        },
        {
          title: 'Disk Mop ile Artık Dosyaları Taramak',
          content: [
            'Disk Mop\'un yeni Kaldırma Artıkları Temizleyici özelliği, sisteminizde yüklü olan programları Windows Registry\'den okur ve bunu referans alarak yetim klasörleri tespit eder. Yüklü programa ait olmayan ancak program adı taşıyan klasörler "artık" olarak işaretlenir.',
            'Tarama işlemi 4 ana dizini kontrol eder: Program Files, Program Files (x86), AppData\\Local, AppData\\Roaming ve ProgramData. Ayrıca Registry\'de HKCU\\Software ve HKLM\\SOFTWARE anahtarlarını tarar.',
            'Akıllı beyaz liste sistemi, Microsoft, Windows, Intel, NVIDIA, AMD, Dell, HP gibi kritik sistem klasörlerini korur. Bu sayede yanlışlıkla sistem dosyalarının silinmesi önlenir. Tarama birkaç saniye içinde tamamlanır ve sonuçlar detaylı bir liste halinde sunulur.',
          ],
        },
        {
          title: 'Sonuçları Filtreleme ve Silme',
          content: [
            'Tarama tamamlandığında sonuçlar iki kategoride listelenir: Dosyalar (artık klasörler) ve Registry (artık kayıt anahtarları). Üstteki filtre butonlarıyla sadece dosyaları, sadece registry kayıtlarını veya tümünü görebilirsiniz.',
            'Arama çubuğunu kullanarak belirli bir program adına göre filtreleme yapabilirsiniz. Örneğin "Steam" yazarak yalnızca Steam ile ilgili artıkları görebilirsiniz. Her öğenin yanında dosya boyutu ve tam yolu görüntülenir.',
            'Silmek istediğiniz öğeleri checkbox ile seçin veya "Tümünü Seç" ile hepsini işaretleyin. Silme işlemi öncesinde bir onay dialogu gösterilir, böylece yanlışlıkla silme önlenir. Silme tamamlandığında kaç dosya ve registry kaydının temizlendiği bildirilir.',
          ],
        },
        {
          title: 'Ne Kadar Alan Kazanabilirsiniz?',
          content: [
            'Kaldırma artıklarından kazanılacak alan, bilgisayar kullanım alışkanlıklarınıza bağlıdır. Düzenli olarak program kurup kaldıran bir kullanıcı, kolayca 5-50 GB arasında artık dosya biriktirebilir. Oyun yükleyip kaldıranlar için bu rakam çok daha yüksek olabilir.',
            'Registry artıkları disk alanı açısından küçük olsa da, temiz bir registry sisteminizin genel sağlığı için önemlidir. Artık registry anahtarları bazı durumlarda yazılım çakışmalarına neden olabilir.',
            'Disk Mop\'un özet kartı, toplam artık klasör sayısını, registry kayıt sayısını ve toplam boyutu bir bakışta gösterir. Bu sayede temizlik öncesi ve sonrası ne kadar alan kazandığınızı kolayca takip edebilirsiniz.',
          ],
        },
      ],
      verdict: [
        'Kaldırma artıkları, Windows kullanıcılarının en sık görmezden geldiği disk alanı sorunlarından biridir. Program kaldırmak, o programın tüm izlerini silmek anlamına gelmez.',
        'Disk Mop v1.0.15 ile gelen Kaldırma Artıkları Temizleyici, bu sorunu tek tıkla çözer. Akıllı beyaz liste ile sistem dosyalarını korurken, yetim klasörleri ve registry kayıtlarını güvenle temizler. 8 dilde kullanılabilir ve PRO lisans ile aktif edilir.',
        'Bilgisayarınızdaki görünmeyen çöpleri temizleyin. Disk Mop ile kaldırma artıklarını tarayın ve disk alanınızı geri kazanın.',
      ],
      ctaText: 'Disk Mop ile Artıkları Temizleyin',
    },
    en: {
      title: 'What Are Uninstall Leftovers? How to Clean Residual Files on Windows',
      metaDescription:
        'Clean up leftover files and registry entries after uninstalling programs. Learn what uninstall leftovers are, how to find them, and safely remove them with Disk Mop.',
      subtitle: 'Find and Remove Traces Left Behind by Uninstalled Programs',
      intro: [
        'When you uninstall a program on Windows, you assume it\'s completely gone. But in most cases, files, folders, and registry entries are left behind. These "uninstall leftovers" accumulate over time, consume disk space, and slow down your system.',
        'Tools like Revo Uninstaller exist to solve this problem, but with Disk Mop v1.0.15, you no longer need a separate program. The new Uninstall Leftovers Cleaner automatically detects orphan folders and registry entries.',
      ],
      sections: [
        {
          title: 'Why Do Uninstall Leftovers Exist?',
          content: [
            'Windows\' program uninstallation mechanism isn\'t perfect. Many programs don\'t delete all their files when removed through the Control Panel. Configuration files, cached data, log files, and user data remain behind.',
            'Orphan folders accumulate particularly in Program Files, AppData, LocalAppData, and ProgramData directories. In the Registry, leftover keys remain under HKCU\\Software and HKLM\\SOFTWARE. While these entries may not directly impact system performance, they unnecessarily consume disk space.',
            'Some large applications (games, development tools, graphics software) can leave gigabytes of residual files when uninstalled. This problem becomes more pronounced for users who regularly install and remove programs.',
          ],
        },
        {
          title: 'Scanning for Leftover Files with Disk Mop',
          content: [
            'Disk Mop\'s new Uninstall Leftovers Cleaner reads installed programs from the Windows Registry and uses this as a reference to detect orphan folders. Folders that carry a program name but don\'t belong to any installed program are flagged as "leftovers."',
            'The scan checks 4 main directories: Program Files, Program Files (x86), AppData\\Local, AppData\\Roaming, and ProgramData. It also scans Registry keys under HKCU\\Software and HKLM\\SOFTWARE.',
            'The smart whitelist system protects critical system folders from Microsoft, Windows, Intel, NVIDIA, AMD, Dell, HP, and other OEM vendors. This prevents accidental deletion of system files. The scan completes within seconds and presents results in a detailed list.',
          ],
        },
        {
          title: 'Filtering and Deleting Results',
          content: [
            'Once the scan completes, results are listed in two categories: Files (orphan folders) and Registry (leftover registry keys). Use the filter buttons at the top to view only files, only registry entries, or all results.',
            'Use the search bar to filter by a specific program name. For example, typing "Steam" shows only Steam-related leftovers. Each item displays its file size and full path.',
            'Select items you want to delete using checkboxes, or use "Select All" to mark everything. A confirmation dialog appears before deletion to prevent accidental removal. After deletion, you\'re notified how many files and registry entries were cleaned.',
          ],
        },
        {
          title: 'How Much Space Can You Recover?',
          content: [
            'The space recovered from uninstall leftovers depends on your computer usage habits. A user who regularly installs and removes programs can easily accumulate 5-50 GB of leftover files. For gamers, this number can be much higher.',
            'While registry leftovers are small in terms of disk space, a clean registry is important for your system\'s overall health. Leftover registry keys can sometimes cause software conflicts.',
            'Disk Mop\'s summary card shows the total number of orphan folders, registry entries, and total size at a glance. This makes it easy to track how much space you\'ve recovered before and after cleanup.',
          ],
        },
      ],
      verdict: [
        'Uninstall leftovers are one of the most overlooked disk space issues for Windows users. Uninstalling a program doesn\'t mean all its traces are removed.',
        'The Uninstall Leftovers Cleaner in Disk Mop v1.0.15 solves this with one click. It safely cleans orphan folders and registry entries while protecting system files with a smart whitelist. Available in 8 languages and activated with a PRO license.',
        'Clean the invisible junk on your computer. Scan for uninstall leftovers with Disk Mop and reclaim your disk space.',
      ],
      ctaText: 'Clean Leftovers with Disk Mop',
    },
    de: {
      title: 'Was sind Deinstallationsreste? Übriggebliebene Dateien unter Windows bereinigen',
      metaDescription:
        'Bereinigen Sie übrig gebliebene Dateien und Registry-Einträge nach der Deinstallation. Erfahren Sie, was Deinstallationsreste sind und wie Sie sie mit Disk Mop sicher entfernen.',
      subtitle: 'Finden und entfernen Sie Spuren deinstallierter Programme',
      intro: [
        'Wenn Sie ein Programm unter Windows deinstallieren, denken Sie, es sei vollständig entfernt. In den meisten Fällen bleiben jedoch Dateien, Ordner und Registry-Einträge zurück. Diese „Deinstallationsreste" sammeln sich mit der Zeit an, belegen Speicherplatz und verlangsamen Ihr System.',
        'Mit Disk Mop v1.0.15 benötigen Sie kein separates Tool mehr. Der neue Deinstallationsreste-Reiniger erkennt automatisch verwaiste Ordner und Registry-Einträge.',
      ],
      sections: [
        {
          title: 'Warum entstehen Deinstallationsreste?',
          content: [
            'Der Deinstallationsmechanismus von Windows ist nicht perfekt. Viele Programme löschen nicht alle ihre Dateien, wenn sie über die Systemsteuerung entfernt werden. Konfigurationsdateien, Cache-Daten, Protokolldateien und Benutzerdaten bleiben zurück.',
            'Verwaiste Ordner sammeln sich besonders in Program Files, AppData, LocalAppData und ProgramData. In der Registry bleiben Einträge unter HKCU\\Software und HKLM\\SOFTWARE zurück.',
            'Einige große Anwendungen (Spiele, Entwicklungstools, Grafiksoftware) können Gigabytes an Restdateien hinterlassen. Dieses Problem wird bei Benutzern, die regelmäßig Programme installieren und entfernen, deutlicher.',
          ],
        },
        {
          title: 'Restdateien mit Disk Mop scannen',
          content: [
            'Der neue Deinstallationsreste-Reiniger von Disk Mop liest installierte Programme aus der Windows-Registry und erkennt verwaiste Ordner.',
            'Der Scan überprüft 4 Hauptverzeichnisse: Program Files, AppData\\Local, AppData\\Roaming und ProgramData. Außerdem werden Registry-Schlüssel unter HKCU\\Software und HKLM\\SOFTWARE gescannt.',
            'Das intelligente Whitelist-System schützt kritische Systemordner von Microsoft, Windows, Intel, NVIDIA, AMD, Dell und HP. Der Scan wird innerhalb von Sekunden abgeschlossen.',
          ],
        },
        {
          title: 'Ergebnisse filtern und löschen',
          content: [
            'Nach dem Scan werden die Ergebnisse in zwei Kategorien aufgelistet: Dateien (verwaiste Ordner) und Registry (übrige Registry-Schlüssel). Verwenden Sie die Filterbuttons, um nur Dateien, nur Registry-Einträge oder alle anzuzeigen.',
            'Verwenden Sie die Suchleiste, um nach einem bestimmten Programmnamen zu filtern. Jedes Element zeigt seine Dateigröße und den vollständigen Pfad an.',
            'Wählen Sie Elemente mit Kontrollkästchen aus oder verwenden Sie "Alle auswählen". Ein Bestätigungsdialog erscheint vor dem Löschen. Nach dem Löschen werden Sie benachrichtigt, wie viele Dateien und Registry-Einträge bereinigt wurden.',
          ],
        },
        {
          title: 'Wie viel Speicherplatz können Sie zurückgewinnen?',
          content: [
            'Der wiedergewonnene Speicherplatz hängt von Ihren Nutzungsgewohnheiten ab. Ein Benutzer, der regelmäßig Programme installiert und entfernt, kann leicht 5-50 GB an Restdateien ansammeln.',
            'Obwohl Registry-Reste platzmäßig klein sind, ist eine saubere Registry wichtig für die Gesamtgesundheit Ihres Systems.',
            'Die Übersichtskarte von Disk Mop zeigt die Gesamtzahl der verwaisten Ordner, Registry-Einträge und die Gesamtgröße auf einen Blick.',
          ],
        },
      ],
      verdict: [
        'Deinstallationsreste sind eines der am meisten übersehenen Speicherplatzprobleme für Windows-Benutzer.',
        'Der Deinstallationsreste-Reiniger in Disk Mop v1.0.15 löst dieses Problem mit einem Klick. Er bereinigt sicher verwaiste Ordner und Registry-Einträge und schützt Systemdateien mit einer intelligenten Whitelist. Verfügbar in 8 Sprachen.',
        'Bereinigen Sie den unsichtbaren Müll auf Ihrem Computer. Scannen Sie nach Deinstallationsresten mit Disk Mop.',
      ],
      ctaText: 'Reste bereinigen mit Disk Mop',
    },
    fr: {
      title: 'Que sont les résidus de désinstallation ? Nettoyer les fichiers résiduels sous Windows',
      metaDescription:
        'Nettoyez les fichiers et entrées de registre résiduels après la désinstallation. Découvrez comment les trouver et les supprimer en toute sécurité avec Disk Mop.',
      subtitle: 'Trouvez et supprimez les traces laissées par les programmes désinstallés',
      intro: [
        'Lorsque vous désinstallez un programme sous Windows, vous pensez qu\'il a complètement disparu. Mais dans la plupart des cas, des fichiers, des dossiers et des entrées de registre restent. Ces « résidus de désinstallation » s\'accumulent, occupent de l\'espace disque et ralentissent votre système.',
        'Avec Disk Mop v1.0.15, vous n\'avez plus besoin d\'un programme séparé. Le nouveau Nettoyeur de résidus détecte automatiquement les dossiers orphelins et les entrées de registre.',
      ],
      sections: [
        {
          title: 'Pourquoi des résidus de désinstallation existent-ils ?',
          content: [
            'Le mécanisme de désinstallation de Windows n\'est pas parfait. De nombreux programmes ne suppriment pas tous leurs fichiers lorsqu\'ils sont supprimés via le Panneau de configuration.',
            'Les dossiers orphelins s\'accumulent dans Program Files, AppData, LocalAppData et ProgramData. Dans le Registre, des clés restent sous HKCU\\Software et HKLM\\SOFTWARE.',
            'Certaines grandes applications peuvent laisser des gigaoctets de fichiers résiduels lors de la désinstallation.',
          ],
        },
        {
          title: 'Scanner les fichiers résiduels avec Disk Mop',
          content: [
            'Le nouveau Nettoyeur de résidus de Disk Mop lit les programmes installés depuis le Registre Windows et détecte les dossiers orphelins.',
            'L\'analyse vérifie 4 répertoires principaux : Program Files, AppData\\Local, AppData\\Roaming et ProgramData. Elle analyse également les clés de registre.',
            'Le système de liste blanche intelligent protège les dossiers système critiques de Microsoft, Windows, Intel, NVIDIA, AMD, Dell et HP.',
          ],
        },
        {
          title: 'Filtrer et supprimer les résultats',
          content: [
            'Après l\'analyse, les résultats sont listés en deux catégories : Fichiers et Registre. Utilisez les boutons de filtre pour afficher uniquement les fichiers, les entrées de registre ou tout.',
            'Utilisez la barre de recherche pour filtrer par nom de programme. Chaque élément affiche sa taille et son chemin complet.',
            'Sélectionnez les éléments avec les cases à cocher ou utilisez « Tout sélectionner ». Une boîte de dialogue de confirmation apparaît avant la suppression.',
          ],
        },
        {
          title: 'Combien d\'espace pouvez-vous récupérer ?',
          content: [
            'L\'espace récupéré dépend de vos habitudes d\'utilisation. Un utilisateur qui installe et supprime régulièrement des programmes peut facilement accumuler 5 à 50 Go de fichiers résiduels.',
            'Bien que les résidus de registre soient petits en taille, un registre propre est important pour la santé globale de votre système.',
            'La carte de résumé de Disk Mop affiche le nombre total de dossiers orphelins, d\'entrées de registre et la taille totale en un coup d\'œil.',
          ],
        },
      ],
      verdict: [
        'Les résidus de désinstallation sont l\'un des problèmes d\'espace disque les plus négligés pour les utilisateurs Windows.',
        'Le Nettoyeur de résidus dans Disk Mop v1.0.15 résout ce problème en un clic. Disponible en 8 langues et activé avec une licence PRO.',
        'Nettoyez les déchets invisibles sur votre ordinateur avec Disk Mop.',
      ],
      ctaText: 'Nettoyer les résidus avec Disk Mop',
    },
    es: {
      title: '¿Qué son los residuos de desinstalación? Cómo limpiar archivos residuales en Windows',
      metaDescription:
        'Limpie archivos y entradas de registro residuales después de desinstalar programas. Aprenda a encontrarlos y eliminarlos de forma segura con Disk Mop.',
      subtitle: 'Encuentre y elimine rastros dejados por programas desinstalados',
      intro: [
        'Cuando desinstalas un programa en Windows, asumes que ha desaparecido por completo. Pero en la mayoría de los casos, quedan archivos, carpetas y entradas de registro. Estos "residuos de desinstalación" se acumulan, ocupan espacio en disco y ralentizan tu sistema.',
        'Con Disk Mop v1.0.15, ya no necesitas un programa separado. El nuevo Limpiador de residuos detecta automáticamente carpetas huérfanas y entradas de registro.',
      ],
      sections: [
        {
          title: '¿Por qué existen los residuos de desinstalación?',
          content: [
            'El mecanismo de desinstalación de Windows no es perfecto. Muchos programas no eliminan todos sus archivos cuando se eliminan a través del Panel de control.',
            'Las carpetas huérfanas se acumulan en Program Files, AppData, LocalAppData y ProgramData. En el Registro, quedan claves bajo HKCU\\Software y HKLM\\SOFTWARE.',
            'Algunas aplicaciones grandes pueden dejar gigabytes de archivos residuales al desinstalarse.',
          ],
        },
        {
          title: 'Escanear archivos residuales con Disk Mop',
          content: [
            'El nuevo Limpiador de residuos de Disk Mop lee los programas instalados del Registro de Windows y detecta carpetas huérfanas.',
            'El escaneo verifica 4 directorios principales: Program Files, AppData\\Local, AppData\\Roaming y ProgramData. También escanea claves de registro.',
            'El sistema de lista blanca inteligente protege las carpetas críticas del sistema de Microsoft, Windows, Intel, NVIDIA, AMD, Dell y HP.',
          ],
        },
        {
          title: 'Filtrar y eliminar resultados',
          content: [
            'Después del escaneo, los resultados se listan en dos categorías: Archivos y Registro. Usa los botones de filtro para ver solo archivos, solo entradas de registro o todo.',
            'Usa la barra de búsqueda para filtrar por nombre de programa. Cada elemento muestra su tamaño y ruta completa.',
            'Selecciona elementos con casillas de verificación o usa "Seleccionar todo". Un diálogo de confirmación aparece antes de la eliminación.',
          ],
        },
        {
          title: '¿Cuánto espacio puedes recuperar?',
          content: [
            'El espacio recuperado depende de tus hábitos de uso. Un usuario que instala y elimina programas regularmente puede acumular fácilmente de 5 a 50 GB de archivos residuales.',
            'Aunque los residuos de registro son pequeños en tamaño, un registro limpio es importante para la salud general de tu sistema.',
            'La tarjeta de resumen de Disk Mop muestra el número total de carpetas huérfanas, entradas de registro y tamaño total de un vistazo.',
          ],
        },
      ],
      verdict: [
        'Los residuos de desinstalación son uno de los problemas de espacio en disco más ignorados por los usuarios de Windows.',
        'El Limpiador de residuos en Disk Mop v1.0.15 resuelve esto con un clic. Disponible en 8 idiomas y activado con licencia PRO.',
        'Limpia la basura invisible en tu computadora con Disk Mop.',
      ],
      ctaText: 'Limpiar residuos con Disk Mop',
    },
    it: {
      title: 'Cosa sono i residui di disinstallazione? Come pulire i file residui su Windows',
      metaDescription:
        'Pulisci file e voci di registro residue dopo la disinstallazione. Scopri cosa sono i residui di disinstallazione e come rimuoverli in sicurezza con Disk Mop.',
      subtitle: 'Trova e rimuovi le tracce lasciate dai programmi disinstallati',
      intro: [
        'Quando disinstalli un programma su Windows, pensi che sia completamente sparito. Ma nella maggior parte dei casi, restano file, cartelle e voci di registro. Questi "residui di disinstallazione" si accumulano, occupano spazio su disco e rallentano il sistema.',
        'Con Disk Mop v1.0.15, non hai più bisogno di un programma separato. Il nuovo Pulitore di residui rileva automaticamente cartelle orfane e voci di registro.',
      ],
      sections: [
        {
          title: 'Perché esistono i residui di disinstallazione?',
          content: [
            'Il meccanismo di disinstallazione di Windows non è perfetto. Molti programmi non eliminano tutti i loro file quando vengono rimossi tramite il Pannello di controllo.',
            'Le cartelle orfane si accumulano in Program Files, AppData, LocalAppData e ProgramData. Nel Registro, restano chiavi sotto HKCU\\Software e HKLM\\SOFTWARE.',
            'Alcune grandi applicazioni possono lasciare gigabyte di file residui quando disinstallate.',
          ],
        },
        {
          title: 'Scansione dei file residui con Disk Mop',
          content: [
            'Il nuovo Pulitore di residui di Disk Mop legge i programmi installati dal Registro di Windows e rileva le cartelle orfane.',
            'La scansione controlla 4 directory principali: Program Files, AppData\\Local, AppData\\Roaming e ProgramData. Scansiona anche le chiavi di registro.',
            'Il sistema di whitelist intelligente protegge le cartelle di sistema critiche di Microsoft, Windows, Intel, NVIDIA, AMD, Dell e HP.',
          ],
        },
        {
          title: 'Filtrare ed eliminare i risultati',
          content: [
            'Dopo la scansione, i risultati sono elencati in due categorie: File e Registro. Usa i pulsanti filtro per visualizzare solo file, solo voci di registro o tutto.',
            'Usa la barra di ricerca per filtrare per nome del programma. Ogni elemento mostra la sua dimensione e il percorso completo.',
            'Seleziona gli elementi con le caselle di controllo o usa "Seleziona tutto". Una finestra di conferma appare prima dell\'eliminazione.',
          ],
        },
        {
          title: 'Quanto spazio puoi recuperare?',
          content: [
            'Lo spazio recuperato dipende dalle tue abitudini di utilizzo. Un utente che installa e rimuove regolarmente programmi può facilmente accumulare da 5 a 50 GB di file residui.',
            'Anche se i residui di registro sono piccoli in termini di dimensioni, un registro pulito è importante per la salute generale del sistema.',
            'La scheda riepilogativa di Disk Mop mostra il numero totale di cartelle orfane, voci di registro e dimensione totale a colpo d\'occhio.',
          ],
        },
      ],
      verdict: [
        'I residui di disinstallazione sono uno dei problemi di spazio su disco più trascurati dagli utenti Windows.',
        'Il Pulitore di residui in Disk Mop v1.0.15 risolve questo con un clic. Disponibile in 8 lingue e attivato con licenza PRO.',
        'Pulisci la spazzatura invisibile sul tuo computer con Disk Mop.',
      ],
      ctaText: 'Pulisci i residui con Disk Mop',
    },
    pt: {
      title: 'O que são resíduos de desinstalação? Como limpar arquivos residuais no Windows',
      metaDescription:
        'Limpe arquivos e entradas de registro residuais após desinstalar programas. Aprenda a encontrá-los e removê-los com segurança usando o Disk Mop.',
      subtitle: 'Encontre e remova rastros deixados por programas desinstalados',
      intro: [
        'Quando você desinstala um programa no Windows, assume que ele foi completamente removido. Mas na maioria dos casos, arquivos, pastas e entradas de registro ficam para trás. Esses "resíduos de desinstalação" se acumulam, ocupam espaço em disco e deixam seu sistema mais lento.',
        'Com o Disk Mop v1.0.15, você não precisa mais de um programa separado. O novo Limpador de resíduos detecta automaticamente pastas órfãs e entradas de registro.',
      ],
      sections: [
        {
          title: 'Por que existem resíduos de desinstalação?',
          content: [
            'O mecanismo de desinstalação do Windows não é perfeito. Muitos programas não excluem todos os seus arquivos quando removidos pelo Painel de Controle.',
            'Pastas órfãs se acumulam em Program Files, AppData, LocalAppData e ProgramData. No Registro, chaves permanecem em HKCU\\Software e HKLM\\SOFTWARE.',
            'Alguns aplicativos grandes podem deixar gigabytes de arquivos residuais ao serem desinstalados.',
          ],
        },
        {
          title: 'Escanear arquivos residuais com o Disk Mop',
          content: [
            'O novo Limpador de resíduos do Disk Mop lê os programas instalados do Registro do Windows e detecta pastas órfãs.',
            'A verificação checa 4 diretórios principais: Program Files, AppData\\Local, AppData\\Roaming e ProgramData. Também escaneia chaves de registro.',
            'O sistema de lista branca inteligente protege pastas críticas do sistema da Microsoft, Windows, Intel, NVIDIA, AMD, Dell e HP.',
          ],
        },
        {
          title: 'Filtrar e excluir resultados',
          content: [
            'Após a verificação, os resultados são listados em duas categorias: Arquivos e Registro. Use os botões de filtro para ver apenas arquivos, apenas entradas de registro ou tudo.',
            'Use a barra de pesquisa para filtrar por nome do programa. Cada item exibe seu tamanho e caminho completo.',
            'Selecione itens com caixas de seleção ou use "Selecionar tudo". Um diálogo de confirmação aparece antes da exclusão.',
          ],
        },
        {
          title: 'Quanto espaço você pode recuperar?',
          content: [
            'O espaço recuperado depende dos seus hábitos de uso. Um usuário que instala e remove programas regularmente pode facilmente acumular de 5 a 50 GB de arquivos residuais.',
            'Embora os resíduos de registro sejam pequenos em tamanho, um registro limpo é importante para a saúde geral do sistema.',
            'O cartão de resumo do Disk Mop mostra o número total de pastas órfãs, entradas de registro e tamanho total em uma olhada.',
          ],
        },
      ],
      verdict: [
        'Resíduos de desinstalação são um dos problemas de espaço em disco mais ignorados pelos usuários do Windows.',
        'O Limpador de resíduos no Disk Mop v1.0.15 resolve isso com um clique. Disponível em 8 idiomas e ativado com licença PRO.',
        'Limpe o lixo invisível no seu computador com o Disk Mop.',
      ],
      ctaText: 'Limpar resíduos com o Disk Mop',
    },
    ja: {
      title: 'アンインストール残留物とは？Windowsの残留ファイルをクリーンアップする方法',
      metaDescription:
        'プログラムのアンインストール後に残ったファイルとレジストリエントリをクリーンアップ。Disk Mopで安全に検出・削除する方法を解説。',
      subtitle: 'アンインストールしたプログラムの痕跡を見つけて削除',
      intro: [
        'Windowsでプログラムをアンインストールすると、完全に削除されたと思いがちです。しかし、ほとんどの場合、ファイル、フォルダ、レジストリエントリが残ります。これらの「アンインストール残留物」は時間とともに蓄積し、ディスク容量を消費し、システムを遅くします。',
        'Disk Mop v1.0.15では、別のプログラムは不要です。新しいアンインストール残留物クリーナーが、孤立したフォルダとレジストリエントリを自動的に検出します。',
      ],
      sections: [
        {
          title: 'なぜアンインストール残留物が発生するのか？',
          content: [
            'Windowsのプログラムアンインストール機能は完璧ではありません。多くのプログラムは、コントロールパネルから削除してもすべてのファイルを削除しません。',
            '孤立したフォルダはProgram Files、AppData、LocalAppData、ProgramDataに蓄積します。レジストリではHKCU\\SoftwareとHKLM\\SOFTWAREの下に残留キーが残ります。',
            '大規模なアプリケーション（ゲーム、開発ツール、グラフィックソフト）は、アンインストール時にギガバイト単位の残留ファイルを残すことがあります。',
          ],
        },
        {
          title: 'Disk Mopで残留ファイルをスキャン',
          content: [
            'Disk Mopの新しいアンインストール残留物クリーナーは、Windowsレジストリからインストール済みプログラムを読み取り、孤立したフォルダを検出します。',
            'スキャンは4つの主要ディレクトリを確認します：Program Files、AppData\\Local、AppData\\Roaming、ProgramData。レジストリキーもスキャンします。',
            'スマートホワイトリストシステムがMicrosoft、Windows、Intel、NVIDIA、AMD、Dell、HPの重要なシステムフォルダを保護します。',
          ],
        },
        {
          title: '結果のフィルタリングと削除',
          content: [
            'スキャン完了後、結果は2つのカテゴリで表示されます：ファイル（孤立フォルダ）とレジストリ（残留レジストリキー）。フィルターボタンで表示を切り替えできます。',
            '検索バーでプログラム名によるフィルタリングが可能です。各項目にはファイルサイズとフルパスが表示されます。',
            'チェックボックスで項目を選択するか、「すべて選択」を使用します。削除前に確認ダイアログが表示されます。',
          ],
        },
        {
          title: 'どのくらいの容量を回復できますか？',
          content: [
            '回復できる容量は使用習慣によります。定期的にプログラムをインストール・削除するユーザーは、簡単に5～50GBの残留ファイルを蓄積します。',
            'レジストリの残留物はサイズは小さいですが、クリーンなレジストリはシステムの全体的な健全性にとって重要です。',
            'Disk Mopのサマリーカードは、孤立フォルダの総数、レジストリエントリ数、合計サイズを一目で表示します。',
          ],
        },
      ],
      verdict: [
        'アンインストール残留物は、Windowsユーザーが最も見落としがちなディスク容量の問題の一つです。',
        'Disk Mop v1.0.15のアンインストール残留物クリーナーはワンクリックでこれを解決します。8言語対応、PROライセンスで有効化。',
        'コンピュータの見えないゴミをクリーンアップしましょう。Disk Mopでアンインストール残留物をスキャンしてディスク容量を取り戻しましょう。',
      ],
      ctaText: 'Disk Mopで残留物をクリーンアップ',
    },
  },
};
