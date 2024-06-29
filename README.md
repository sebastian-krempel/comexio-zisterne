# comexio-zisterne
**Zisternenüberwachung mit Pumpensteuerung für Comexio Smart Home**

Diese InApp kann auf dem Comexio IO-Server installiert werden und bietet einen Funktionsbaustein mit dem man eine Zisterne mithilfe von drei Schwimmerschaltern überwachen kann. Zusätzlich steuert er eine Pumpe an und verhindert ein ungewolltes Trockenlaufen sobald der Wasserpegel zu niedrig ist. Der Zustand der Zisterne kann über das ebenfalls enthaltene Visualisierungsmodul grafisch dargestellt werden. Zudem gibt der Logik-Baustein RGB-Werte zur farblichen Anzeige des Füllstands aus.

![Zisterne_visu](https://github.com/sebastian-krempel/comexio-zisterne/assets/11726947/59cf4f86-33df-4ee8-9319-6d81b21f7b69)

## Installation

1. Die aktuelle Version der Datei [Zisterne.capp](https://github.com/sebastian-krempel/comexio-zisterne/raw/main/Zisterne.capp) herunterladen.
2. Auf dem IO-Server im Menü unter dem Punkt `Entwickler` den Punkt `InApp` anklicken.
3. Die dargestellte Box mit dem Plus anklicken, die eben heruntergeladene Datei ausgewählen und `Importieren` klicken.

Das System installiert und aktiviert sodann die neue InApp. Nach wenigen Minuten steht der Funktionsbaustein `Zisterne` dann im Logik-Bereich zur Verfügung. Das Visu-Modul wird automatisch mit dem Logik-Baustein verknüpft und steht dann unter dessen Name zur Verfügung. Alternativ kann das Modul auch unabhängig genutzt werden, jedoch müssen dann alle Eingänge manuell zugeordnet werden.

## Logik-Baustein

![Zisterne_fub](https://github.com/sebastian-krempel/comexio-zisterne/assets/11726947/d384198a-637d-46b1-800c-ff16e266e4df)

### Eingänge

Kanal | Beschreibung
--- | ---
Pumpe An | Schaltet den Pumpenausgang (Q) auf 1 sofern kein Sperrstatus vorliegt.
Pegel Oben | Oberer Schwimmerschalter
Pegel Mitte | Mittlerer Schwimmerschalter
Pegel Unten | Unterer Schwimmerschalter
Pumpe läuft | Gibt an, dass die Pumpe Leistung zieht
Trockenlauf erlauben | Pumpe auch bei leerem Tank laufen lassen

### Ausgänge

Kanal | Beschreibung
--- | ---
Q | Ausgang für Pumpe
R | Rot-Wert für RGB-Ampel
G | Grün-Wert für RGB-Ampel
B | Blau-Wert für RGB-Ampel
Alarm | Alarmausgang führt eine 1 wenn die Zisterne voll ist
Störung | Störungsmeldung führt eine 1 wenn die Pegel widersprüchlich sind
