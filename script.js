/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I datatype principali in Javascript sono:
1. String: le stringhe sono dati che vengono identificati come testo. Esse possono contenere lettere o numeri ma vengono comunque sempre intesi come caratteri testuali e vengono delimitati da doppie virgolette.
2. Number: sono esattamente dei valori numerici. Vengono indicati senza doppie virgolette e con essi si possono eseguire operazioni matematiche.
3. Valori booleani: i valori booleani sono entità logiche che possono essere o veri o falsi. Possiamo intenderli come degli interruttori che possono essere accesi o spenti. Su ON o su OFF. Grazie alle variabili booleane si possono determinare in modo semplice determinate condizioni utili al codice.
4. Objects: sono valori formati da una key e un value, cioè un valore che ne identifica il tipo e un altro che ne identifica il valore stesso. ???

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

/* Un oggetto in Javascript è un contenitore di informazioni. Possiamo definirlo come una variabile "più grande" e articolata che contiene diversi tipi di valori.
All'interno di un oggetto le informazioni sono catalogate assegnando ad ognuna di essere una KEY e un VALUE. La key serve per identificare il tipo di informazione, essa viene utilizzata come "etichetta", mentre il VALUE è il valore stesso che è contenuto all'interno.
*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log("ESERCIZIO 3: Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.");
console.log(12 + 20); 


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

console.log("ESERCIZIO 4: Crea una variable di nome \"x\" e assegna ad essa il numero 12.");
let x = 12;
console.log("x = " + (x));

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

console.log("ESERCIZIO 5: Crea una variable chiamata \"name\" e assegna ad essa il tuo nome, sotto forma di stringa.");
let name = "Andrea";
console.log("name: " + (name));

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("ESERCIZIO 6: Esegui una sottrazione tra i numeri 4 e la variable \"x\" appena dichiarata (che contiene il numero 12).");
console.log("4 - x: " + (4 - x));


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

console.log("ESERCIZIO 7: Crea due variabili: \"name1\" e \"name2\"...");
let name1 = "john";
let name2 = "John";
console.log("name1 diverso da name2: " + (name1 !== name2));
console.log("name1 uguale a name2: " + (name1 === name2));

console.log(name1 === name2.toLowerCase());
console.log(name2);
