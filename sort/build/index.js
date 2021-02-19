"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort(); -- refactor sorter to method
/* const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */
/*  const charactersCollection = new CharactersCollection('xaayb');
 const sorter = new Sorter(charactersCollection);
 sorter.sort();
 console.log(charactersCollection.data); */
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
