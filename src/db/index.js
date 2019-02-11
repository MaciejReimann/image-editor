import { openDb, deleteDb } from "idb";

const dbPromise = openDb("editor-store", 1, upgradeDB => {
  upgradeDB.createObjectStore("editor");
});

const idbKeyval = {
  async get(key) {
    const db = await dbPromise;
    return db
      .transaction("editor")
      .objectStore("editor")
      .get(key);
  },
  async set(key, val) {
    const db = await dbPromise;
    const tx = db.transaction("editor", "readwrite");
    tx.objectStore("editor").put(val, key);
    return tx.complete;
  },
  async delete(key) {
    const db = await dbPromise;
    const tx = db.transaction("editor", "readwrite");
    tx.objectStore("editor").delete(key);
    return tx.complete;
  },
  async clear() {
    const db = await dbPromise;
    const tx = db.transaction("editor", "readwrite");
    tx.objectStore("editor").clear();
    return tx.complete;
  },
  async keys() {
    const db = await dbPromise;
    return db.transaction("editor").objectStore("editor");
    // .getAllKeys(key);
  }
};

function set(projectName, data) {
  idbKeyval.set(projectName, JSON.stringify(data));
  console.log("Saving to DB");
}

function get(projectName, callback) {
  idbKeyval.get(projectName).then(val => callback(JSON.parse(val)));
  console.log("Loading from DB");
}

const db = { set, get };

export default db;
