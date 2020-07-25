let db;
// create a new db request for a "budget" database.
const request = window.indexedDB.open("budget",1);

request.onupgradeneeded = function({target}) {
  
  db = target.result;
  // create object store called "pending" and set autoIncrement to true
  const objectStore = db.createObjectStore("pending", {key: "id", autoIncrement:true});
  
};

request.onsuccess = function({target}) {
  db = target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function() {

  // log error here
  console.log("These are not the droids you are looking for.." + request.error);
};

function saveRecord(record) {
  
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");
  // access your pending object store
  const objectStore = transaction.objectStore("pending");
  // add record to your store with add method.
  objectStore.add(record);
}

function checkDatabase() {
  
  // open a transaction on your pending db
  const transaction = db.transaction(["pending"], "readwrite");
  // access your pending object store
  const objectStore = transaction.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = objectStore.getAll();
  

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
          // if successful, open a transaction on your pending db
          const transaction = db.transaction(["pending"], "readwrite");
          // access your pending object store
          const objectStore = transaction.objectStore("pending");
          // clear all items in your store
          objectStore.clear();
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);