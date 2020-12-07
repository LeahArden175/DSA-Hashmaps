const HashMap = require('./hashmap')

//DRILL 1
function main(){
  const lotr = new HashMap()
  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandalf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')

  for(let i = 0; i < lotr._capacity ; i ++) {
    console.log(lotr._hashTable[i])
  }

  console.log(lotr.get('Maiar')) // sauron
  console.log(lotr.get('Hobbit'))// frodo
}

main()

//DRILL 2

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));// logs out 20. Because of collision! First one gets overwriten
    console.log(map2.get(str3));// logs out 10  Because of collision! First one gets overwriten
}

WhatDoesThisDo()