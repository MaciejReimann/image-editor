import { openDb } from "idb";

const dbPromise = openDb("editor-store", 1, upgradeDB => {
  upgradeDB.createObjectStore("editor");
});

const idb = {
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
    return db
      .transaction("editor")
      .objectStore("editor")
      .getAllKeys();
  }
};

let version = 0;

function set(projectName, data, callback) {
  idb.set(`${projectName}_${version}`, JSON.stringify(data)).then(() => {
    console.log("Saving to DB, version: ", version);
    callback();
    version++;
  });
}

function get(projectName, callback) {
  idb.get(projectName).then(val => {
    callback(JSON.parse(val));
    console.log("Loading from DB: ", JSON.parse(val));
  });
}

function getAllKeys(callback) {
  idb.keys().then(all => {
    callback(all);
    console.log("Getting all keys from DB: ", all);
  });
}

const db = { set, get, getAllKeys };

export default db;
