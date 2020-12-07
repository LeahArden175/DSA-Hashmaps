1. Create a HashMap class

    - Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?

        Looks like there was a collison. Only one 'Maiar' and one 'Hobbit' have been hashed.
    
    - What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.

        Sauron and Frodo were logged out. This is because of a collision
    
    - What is the capacity of your hash table after you have hashed all the above items? Explain your answer.

        The capacity of the table is 24. This is because once the loadRatio exceeds the MAX_RATIO, which in this case is when we set the 5th item, the resize function takes the capacity(8) times the SIZE_RATIO(3).


3. 

Original: [10, 22, 31, 4, 15, 28, 17, 88, 59]
k % m:    [10,  0,  9, 4,  4,  6,  6,  0,  4]
Hashmap:  [22, 88, null, null, 4, 15, 28, 17, 59, 31, 10] ?????

Original: [5, 28, 19, 15, 20, 33, 12, 17, 10]
k % m:    [5,  1,  1,  6,  2,  6,  3,  8,  1]
Hashmap:  [null, (28 > 19 > 10), 20, 12, 5, (15 > 33), 17]
          [0,      1,   1    1,   2,  3, 5,   6,   6,   8] ??????