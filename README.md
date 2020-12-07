1. Create a HashMap class

    - Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?

        Looks like there was a collison. Only one 'Maiar' and one 'Hobbit' have been hashed.
    
    - What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.

        Sauron and Frodo were logged out. This is because of a collision
    
    - What is the capacity of your hash table after you have hashed all the above items? Explain your answer.

        The capacity of the table is 24. This is because once the loadRatio exceeds the MAX_RATIO, which in this case is when we set the 5th item, the resize function takes the capacity(8) times the SIZE_RATIO(3).
