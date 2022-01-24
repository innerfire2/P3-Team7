import sqlite3 from "sqlite";

export default new sqlite3.Database(
  "../database.db",
  sqlite3.OPEN_READWRITE,
  function (err) {
    if (err) {
      console.log("FEHLER", err.message);
      return;
    }
    console.log("DATABASE CONNECTED");
  }
);
