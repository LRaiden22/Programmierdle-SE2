Verwendung von Logos
Hier sind einige Logos, die ich erstellt habe. Fühlt euch frei, sie zu verwenden oder neue hinzuzufügen. Um die Bilder in einer anderen Datei zu verwenden, musst du das Bild zuerst wie folgt importieren:

import logoWeiss from '$lib/img/logoWeiss.png';

Da die Bilder im "lib"-Verzeichnis gespeichert sind, musst du nicht den gesamten Pfad angeben. "$lib" funktioniert überall.

Nachdem du das Bild importiert hast, kannst du es frei in der Datei verwenden, in der du es importiert hast. Ein Beispiel dafür ist:

<img class="w-40 ml-5" src={logoWeiss} alt="Logo" />
Wenn du das -Tag nicht verwenden möchtest, kannst du auch das Avatar-Element aus der Skeleton-Bibliothek verwenden. Dies würde folgendermaßen aussehen:

<Avatar src={logoWeiss} class="w-9 h-9 mr-6 rounded-full" />
Vergiss dabei nicht die Importanweisung:

import { Avatar } from '@skeletonlabs/skeleton';
