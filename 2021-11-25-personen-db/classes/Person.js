import { persons as personsData } from "../data/model_data.js"; // Nur in der Person Klasse wird die "Datenbank" geladen. Das "as" gibt uns einen besseren Namen um es nicht mit der Klasse zu verwechseln.
import { v4 as uuid } from "uuid";
import database from "../database.js";

export default class Person {
  constructor({ id, name, lastName }) {
    // Hier werden aus dem übergebenen Parameter id und name herausgeladen; Der Parameter ist eigentlich so etwas: { id: 1, name: "Peter" }
    this.id = id;
    this.name = name;
    this.lastName = lastName;
  }

  fullName() {
    return this.name + " " + this.lastName;
  }

  // Liefert zu allen Datensätzen eine Person zurück
  static all() {
    // return personsData.map((object) => {
    //   // personsData ist eigentlich nur ein simples Array. Da wir haben ein Array mit `Person`en haben wollen, wandeln wir mit `map` das Array so für uns um.
    //   return new Person(object); // Baut aus dem Element im Array eine neue Person
    // });

    db.all("SELECT * FROM persons", function (err, rows) {
      console.log(rows);
    });
  }

  static find(id) {
    const data = personsData.find((object) => object.id === id); // Durchläfut das Array und gibt den ersten Treffer zurück. Dieser wird in die "data" variabel geschrieben
    if (data) {
      // Wenn ein Datensatz gefunden wurde ...
      return new Person(data); // ... erzeugen wir eine neue Person mit dem gefundenen Datensatz
    }
    return null; // ... Wenn nicht geben wir `null` zurück. Dieser Fall tritt nur ein, wenn kein Datensatz gefunden wurde, weil ansonsten `return` das Programm vorher abbricht.
  }

  static create(name, lastName) {
    const person = new Person({ id: uuid(), name: name, lastName: lastName });
    person.save();
    return person;
  }

  static delete(id) {
    const data = personsData.find((object) => object.id === id); // Durchläfut das Array und gibt den ersten Treffer zurück. Dieser wird in die "data" variabel geschrieben
    if (data) {
      // Wenn ein Datensatz gefunden wurde ...
      const personIndex = personsData.indexOf(data);
      personsData.splice(personIndex, 1);
    }
    console.log("Es wurde keine Person mit dieser Id gefunden.");
  }

  // Gibt die aktuelle Person in der Konsole aus
  log() {
    console.log(`- (${this.id}) ${this.fullName()}`);
  }

  // Speichert die Person in die "Datenbank". Wir holen uns aus der Person die benötigten Daten. Gespeichert wird nicht die Information über die Klasse, sondern nur die reinen Daten.
  save() {
    // personsData.push({
    //   // fügt dem Datensatz-Array ein Eintrag hinzu
    //   id: this.id,
    //   name: this.name,
    //   lastName: this.lastName,
    // });

    const sql = db.prepare(
      "INSERT INTO persons (id, first_name, last_name) VALUES (?,?,?)",
      [this.id, this.firstName, this.lastName]
    );
    sql.run([this.id, this.firstName, this.lastName]);
    sql.finalize();
  }
}
