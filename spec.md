# Fejlesztési leírás

##Technológia
* JS
* HTML
* CSS

## Játéktér
*  egy div, amely magába foglalja a töbii divet, amelyek display inline beállításuak.
*  a méretezést egy függvény végzi, a mi nyitáskor fut le + átméretezéskor.
* a négyzetek méretét százalékosan adjuk meg.
* egy legördülő menüben lehet kiválasztani a játéktér szélességét. 
* a tile-osztályhoz rendeljük az egyes csempéket
* az üres csempe osztálya: empty
* a kaja food-osztályú
* a kígyós csempe snake-osztályú

## A kígyó mozgása
* a new gomb megnyomására a kígyó középen megjelenik
* azonnal elindul jobbra
* lépésenként csempeosztály-ellenőrzés, ha snake, akkor vége, meg akkor is ha nincs olyan osztály
* irányítás: keydown eseményre változik az irány
* óraütésre indig elvégezzük az összes ellenőrzést egy metódusban
* a kígyó testét egy tömbben táruljuk és lépés esetén minden tömbelem az előző helyébe lép

## Eredmény
* megvett ételenként points++
* random megjelenik egyszerre egy eledel, úgy hogy nem a kígyó testére kerül
* ha ételre lép, kap eg pontot és átállítjuk az osztályokat

