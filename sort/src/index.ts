import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort(); -- refactor sorter to method

/* const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */



/*  const charactersCollection = new CharactersCollection('xaayb');
 const sorter = new Sorter(charactersCollection);
 sorter.sort();
 console.log(charactersCollection.data); */



 const linkedList = new LinkedList();
 linkedList.add(500);
 linkedList.add(-10);
 linkedList.add(-3);
 linkedList.add(-4);

 const sorter = new Sorter(linkedList);
 sorter.sort();
 linkedList.print();
