 var APP = APP || {};
 APP.DB = (function() {

     var DB = {};
     DB.indexedDB = {};

     DB.indexedDB.db = null;

     DB.indexedDB.open = function() {
         var version = 1;
         var request = indexedDB.open("juegos", version);

         // We can only create Object stores in a versionchange transaction.
         request.onupgradeneeded = function(e) {
             var db = e.target.result;

             // A versionchange transaction is started automatically.
             e.target.transaction.onerror = DB.indexedDB.onerror;

             if (db.objectStoreNames.contains("programa")) {
                 db.deleteObjectStore("programa");
             }

             var store = db.createObjectStore("programa", {
                 keyPath: "timeStamp"
             });
         };
         request.onsuccess = function(e) {
             DB.indexedDB.db = e.target.result;
             DB.indexedDB.getAllItems();
         };

         request.onerror = DB.indexedDB.onerror;
     };

     DB.indexedDB.addProgram = function(program) {
         var db = DB.indexedDB.db;
         var trans = db.transaction(["programa"], "readwrite");
         var store = trans.objectStore("programa");
         var request = store.put({
             "prog": program,
             "timeStamp": new Date().getTime()
         });

         request.onsuccess = function(e) {

             console.log(e.value);
         };

         request.onerror = function(e) {
             console.log(e.value);
         };
     };

     DB.indexedDB.getAllItems = function() {

         var db = DB.indexedDB.db;
         var trans = db.transaction(["programa"], "readwrite");
         var store = trans.objectStore("programa");


         var keyRange = IDBKeyRange.lowerBound(0);
         var cursorRequest = store.openCursor(keyRange);

         cursorRequest.onsuccess = function(e) {
             var result = e.target.result;
             if ( !! result == false)
                 return;

             devolverDatos(result.value);
             result.
             continue ();
         };

         cursorRequest.onerror = DB.indexedDB.onerror;
     };

     function devolverDatos(row) {

         //TO-DO
     };

     DB.indexedDB.deleteProgram = function(id) {
         var db = DB.indexedDB.db;
         var trans = db.transaction(["programa"], "readwrite");
         var store = trans.objectStore("programa");

         var request = store.delete(id);

         request.onsuccess = function(e) {
             DB.indexedDB.getAllItems(); // Refresh the screen
         };

         request.onerror = function(e) {
             console.log(e);
         };
     };

     function init() {
         DB.indexedDB.open(); // Iniciar la BD
     }

     window.addEventListener("DOMContentLoaded", init, false);

     return {
         addProgram: DB.indexedDB.addProgram
     }

 })();