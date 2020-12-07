const HashMap = require("./hashmap");

//DRILL 1
function main() {
  const lotr = new HashMap();
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  for (let i = 0; i < lotr._capacity; i++) {
    console.log(lotr._hashTable[i]);
  }

  console.log(lotr.get("Maiar")); // sauron
  console.log(lotr.get("Hobbit")); // frodo
}

main();

//DRILL 2

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1)); // logs out 20. Because of collision! First one gets overwriten
  console.log(map2.get(str3)); // logs out 10  Because of collision! First one gets overwriten
};

WhatDoesThisDo();

//DRILL 4
function duplicates(string) {
  const map = new HashMap();
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    try {
      map.get(string[i]);
    } catch (e) {
      map.set(string[i], string[i]);
      newString += string[i];
    }
  }
  return newString;
}

console.log(duplicates("google")); //gole
console.log(duplicates("google all that you think can think of")); // gole athy

//DRILL 5
function anyPermutation(string) {
  const map = new HashMap();

  for (let i = 0; i < string.length; i++) {
    map.set(string[i], i);
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i]) !== i) {
      count--;
    } else {
      count++;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
}

anyPermutation("aceecarre");
anyPermutation("north");

//DRILL 6

function anagram(words) {
  const result = [];
  const map = new HashMap();
  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) result.push((map[key] = []));
    map[key].push(word);
  }
  return result;
}

let input = ["east", "cars", "acre", "arcs", "teas", "eats", "race"];
console.log(anagram(input));
