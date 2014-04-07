var APP = APP || {};

APP.DBMODULE = (function() {
    'use strict';



    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction || window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange ||
        window.webkitIDBKeyRange || window.msIDBKeyRange;


    var db = null;

    function onerror(e) {
        console.log(e);
    }

    var open = function() {
        var version = 1;
        var request = indexedDB.open("todo-list", version);


        request.onupgradeneeded = function(e) {

            db = e.target.result;

            var store = db.createObjectStore("todo-list", {
                keyPath: "timeStamp"
            });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            if (db == null) {
                db = e.target.result;
            }
            console.log("DB opened");


        };


    }

    var add = function(todoText, callback) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": todoText,
            "timeStamp": new Date().getTime()
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: " + e);
            callback(data);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    }

    var update = function(id, txt, callback) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": txt,
            "timeStamp": id
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful update: " + e);

            callback(data);
        };

        request.onerror = function(e) {
            console.log("Error updating: ", e);
        };

    }

    var getAllTodoItems = function(callback) {
        //var todos = document.getElementById("todoItems");
        //todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var cursorRequest = store.openCursor();



        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if ( !! result == false) return;

            console.log(result.value);
            callback(result.value)
            result.
            continue ();
        };

        cursorRequest.onerror = onerror;
    };

    var addTodo = function() {
        var todo = document.getElementById("todo");
        add(todo.value);
        todo.value = "";
    };

    var init = function() {
        open();
    };

    var erase = function(key, callback) {

        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var request = store.delete(key);
        console.log(callback);

        request.onsuccess = function(e) {
            console.log("Sucessful removed");
            $('#resultados tr').remove();
            callback();
        };

        request.onerror = function(e) {
            console.log("Error deleting: ", e);
        };


    };



    // window.addEventListener("DOMContentLoaded", init, false);

    return {
        init: init,
        addTodo: addTodo,
        getAllTodoItems: getAllTodoItems,
        add: add,
        open: open,
        erase: erase,
        update: update
    };

})();