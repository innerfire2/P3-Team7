import Person from "./classes/Person.js"; // Unsere Person Klasse
import readlineLib from "readline"; // Hier wird ein per Default installiertes Paket "readline" importiert -> https://nodejs.org/api/readline.html
import { v4 as uuid } from "uuid"; // Ein von uns installiertes NPM Paket "uuid". Erstellt eine eindeutige ID. Damit wir besser verstehen, was wir hier geladen haben, nutzen wir "as" um es "uuid" nennen zu können
import faker from "faker";

// Hier erstellen wir eine Verbindung von unserem Node Prozess und der Eingabe/Ausgabe.
const readline = readlineLib.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Unsere Frage für unser "Menü"
const question = `Was möchtest du machen?
1: Personen auflisten
2: Person anlegen
3: Person suchen
4: Zufällige Person anlegen
`;

// Lädt alle Personen und gibt den Namen und die ID per console.log aus
function listAllPersons() {
  Person.all().forEach((person) => {
    // Durchläuft alle Personen
    person.log(); // Gibt eine Person per console.log aus
  });
}

// Fragt nach dem Namen einer Person und legt diese in unsere "Datenbank"
function addNewPerson() {
  readline.question("Wie soll die Person heißen?\n", (name) => {
    const person = new Person({ id: uuid(), name: name }); // Hier erzeugen wir eine neue Instanz mit einer von dem UUID Paket erzeugten ID und dem eingegebenen Namen.
    person.save(); // Speichert die Person in unserer "Datenbank"
    showMenu(); // Damit das Programm nach der Verarbeitung nicht "stehen bleibt". Springen wir wieder in die "showMenu" Funktion
  });
}

// Sucht nach einer Person in unserer "Datenbank" anhand der ID
function findPerson() {
  readline.question("Wie ist die ID?\n", (id) => {
    const person = Person.find(id); // Sucht nach ID
    if (person) {
      // Wenn person gefunden wurde
      person.log(); // Ausgabe der Person
    } else {
      // Person wurde nicht gefunden
      console.log("Nicht gefunden"); // info an Anwender:in
    }
    showMenu(); // Damit das Programm nach der Verarbeitung nicht "stehen bleibt". Springen wir wieder in die "showMenu" Funktion
  });
}

function createRandomPerson() {
  const person = new Person({ id: uuid(), name: faker.name.firstName() });
  person.save();
  showMenu();
}

// Zeigt unser "Hauptmenü", in dem eine Auswahl über eine Aktion getroffen werden kann.
function showMenu() {
  readline.question(question, (answer) => {
    if (answer === "1") {
      listAllPersons();
    } else if (answer === "2") {
      addNewPerson();
      return; // Weil wir hier eine neue Texteingabe vom User:in abfragen, brechen wir das weitere verabeiten der Funktion ab.
    } else if (answer === "3") {
      findPerson();
      return; // Weil wir hier eine neue Texteingabe vom User:in abfragen, brechen wir das weitere verabeiten der Funktion ab.
    } else if (answer === "4") {
      createRandomPerson();
    }
    showMenu(); // Im normalfall wollen wir wieder das Menu zeichnen, do sonst unser Script hängen bleiben würde.
  });
}

showMenu(); // Hier öffnen wir unser Menu zum ersten mal. Diese Stelle wird nur 1x aufgerufen beim Start des Programms. Denn Vorher sind nur Funkionen und Klassen definiert worden.
