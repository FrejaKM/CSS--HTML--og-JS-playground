console.log("test af log")
// Her tester jeg, at der er hul igennem til console og at html og js snakker sammen.

const detTredjeBrand = document.querySelector("#brand3")

console.log("Hele vores variabel:",detTredjeBrand) 
// her beder jeg console om at vise mig værdien af id="brand3"

console.log("innerHTML af vores variabel:",detTredjeBrand.innerHTML)

// ved kun at bede om at se innerHTML får jeg kun hvad der står mellem <li id="brand3"> ... </> i detTredjeBrand som jeg har defineret #brand3 som

detTredjeBrand.innerHTML = "Ajax" //en string jeg laver

//Her ændrer jeg værdien af min innerHTML for detTredjeBrand

console.log("innerHTML af vores variabel efter ændring:", detTredjeBrand.innerHTML)


const detAndetBrand = document.querySelector("#brand2");
console.log(detAndetBrand.innerHTML);
detAndetBrand.innerHTML = "Änglamark"
console.log(detAndetBrand.innerHTML);

const detFørsteBrand = document.querySelector("#brand1")
console.log(detFørsteBrand.innerHTML)
detFørsteBrand.innerHTML = "Vanish"
console.log(detFørsteBrand.innerHTML)

// Objects:

let bird = {
    species: 'corvax',
    commonName: 'raven',
    callType: 'pip',
    noisy: true,
    deadly: false
};
console.log(bird)

let bear = {
    species: 'arctos',
    commonName: 'brown bear',
    callType: 'roar',
    noisy: true,
    deadl: false
};
console.log(bear);

console.log(bird.commonName);

console.log(bear.noisy,bear.callType,bird.callType);

// add things to an object: 

bird.color = 'black'
console.log(bird.color);

bird.whereItLives = 'in a tree'
console.log(bird.whereItLives);

// remove things from an object:
//delete bird.color
//console.log(bord.color) - her vil der altså nu være syntax error, da der ikke længere er noget der hedder bird.color=


// references:

let animal = {species: 'arctos',
    commonName: 'brown bear',
    callType: 'roar',
    noisy: true,
    deadl: false
};

console.log(animal);

let animal2 = animal;
console.log(animal2); // nu har animal2 samme værdier som animal. Der laves altså ikke en kopi, men man definerer, at animal2 og animal har de samme værdier.

animal2.commonName = "polar bear"
console.log(animal2); // nu er commonName for animal2 ændret 


// Hvis man i stedet vil kopiere alle værdier fra et object til et andet object, gør man sådan:

//animal2 = Object.assign({}, animal);
    //eller:
//animal2 = { ...animal };
    //eller:
//animal2 = JSON.parse(JSON.stringify(animal));

// Arrays:

let minArray = [];

let dageIUgen = ["mandag", "tirsdag", "onsdag", "torsdag"];
console.log(dageIUgen);

//her er der kun values displayed, fordi keys automatisk bliver tildelt fra 0 og opefter.

let minListe = [0, 1, 2, "string1", "string2", "string3", true, false];
console.log(minListe); //her ser man dem altså i samme rækkefølge

//arrays kan indeholde objekter og arrays: 

var ListOfStuff = [{navn: "værdi"},[1, 2, 3], true, "hejsa" ];
console.log(ListOfStuff);

//modsat et objekt, ved arrays og strings, hvor mange objekter, de indeholder. Arrays ved også, hvor lange de er

console.log(ListOfStuff.length); // her ser man hvor mange items, ens array indeholder. 

console.log(ListOfStuff[3]);

ListOfStuff[3]='hejsa med digsa' //her ændrer jeg på item 3 min array
console.log(ListOfStuff[3]);

ListOfStuff[4]='tilføjelse i mit array'
console.log(ListOfStuff[4])

/*
gør hellere sådan for at tilføje
til bunden af array'et:'*/

ListOfStuff[ListOfStuff.length] = 'endnu en tilføjelse i mit array'
console.log(ListOfStuff)
//eller gør sådan:
ListOfStuff.push("en tredje tilføjelse")
console.log(ListOfStuff)

ListOfStuff.pop() //fjerner den sidste tilføjelse i mit array
console.log(ListOfStuff)

//for at tilføje og fjerne ting i begyndelsen af et array:

ListOfStuff.unshift("en tilføjelse til toppen")
console.log(ListOfStuff)

ListOfStuff.shift() //her fjerner jeg fra toppen
console.log(ListOfStuff)

//for at tilføje og fjerne fra midten:

ListOfStuff.splice(2,1) //her fjerner jeg nr 3 fra arayet og jeg fjerner 1 item
 

//Tutorial:

let jsTutorialEl = document.querySelector('.listeOverTutorials ol');

//opretter objects: 
let jsTutorialElA  = {
    title: 'Declaring and assigning variables',
    url: 'https://www.linkedin.com/learning-login/share?account=56748129&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-the-javascript-language-22309208%2Fdeclaring-and-assigning-variables%3Ftrk%3Dshare_video_url%26shareId%3DKbOziN10SDec2KM2AvSGOA%253D%253D'

};

let jsTutorialElB = {
    title: 'Strings',
    url: 'https://www.linkedin.com/learning-login/share?account=56748129&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-the-javascript-language-22309208%2Fstrings%3Ftrk%3Dshare_video_url%26shareId%3DaaL89OI%252BQwKwR5SBe%252FfhjA%253D%253D'

}
let jsTutorialElC = {
    title: 'String properties and methods',
    url: 'https://www.linkedin.com/learning-login/share?account=56748129&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-the-javascript-language-22309208%2Fstring-properties-and-methods%3Ftrk%3Dshare_video_url%26shareId%3Dzp1RaIUJTjWXJG8rX0IrNA%253D%253D'

}

//opretter array:
let jsTutorials = [jsTutorialElA, jsTutorialElB, jsTutorialElC];


jsTutorialEl.innerHTML = ''; //her fjerner jeg html teksten elementet

//lav anker-tag:
let jsLinkA = document.createElement('a');
jsLinkA.innerText = jsTutorialElA.title;
jsLinkA.setAttribute('href', jsTutorialElA.url);
//lav li-tag:
let linkAEl = document.createElement('li');
linkAEl.appendChild(jsLinkA)



let jsLinkB = document.createElement('a');
jsLinkB.innerText = jsTutorialElB.title;
jsLinkB.setAttribute('href', jsTutorialElB.url);
let linkBEl = document.createElement('li');
linkBEl.appendChild(jsLinkB)

let jsLinkC = document.createElement('a');
jsLinkC.innerText = jsTutorialElC.title;
jsLinkC.setAttribute('href', jsTutorialElC.url);
let linkCEl = document.createElement('li');
linkCEl.appendChild(jsLinkC)

jsTutorialEl.appendChild(linkAEl);
jsTutorialEl.appendChild(linkBEl);
jsTutorialEl.appendChild(linkCEl);

/* 
Simple comparisons:

let one = 1, two = 2;
one === one // er one identical to one? true
one !== one // er one not identical to one? false

one == one // true
one == '1' // også true, fordi kun to "=" er not strict. 
one === 1 // false
one != '1' // false
one != '2' // true
one < two //true
one > two //false
one <= two //true
one >= two //false
10 >= two //true


Arithmetic operators:

2 + 5 //7
2 - 1 //1
2 * 5 //15
36/6 //6

20 % 2 //0 fordi den viser resten
19 % 2 //1 fordi der vil være 1 i rest
20 % 2 === 0 // true fordi man spørger om det er equal til 0 

let counter = 0; 
counter = counter + 1 //1
counter += 1 //2
counter++ //2
counter += 5 //8
counter += -4 //4
counter -= 1 //3 fordi nu tæller den ned i stedet for op
counter -- // samme som -=
counter *= 2 //will double the value in counter
'cat' + 'dog' //'catdog'
'cat ' + 'dog' // 'cat dog'


Logical operators:


&& = and 
|| (opt i) = or


let animal1 = "abe", animal2 = "bjørn", animal3 = "haj"

animal1 === 'abe' && animal2 === 'bjørn' //true. De tog && tjekker begge strings på samme tid

animal1 ==='kat' && animal2 === 'bjørn' //false fordi ikke begge dele i dette statement er true

animal1 === 'abe' || animal2 === 'bjørn' // true
animal1 === 'abe' || animal2 === 'hund' //true fordi man spørger om enten det ene eller det andet er rigtigt. 
animal1 === 'mus' || animal2 === 'ko' //false fordi ingen af de to strings er true

// and's og or's kan også kombineres på samme linje. And's vil altid blive evalueret før or's. 

animal1 === 'abe' || animal2 === 'kat' && animal3 === 'haj' // true 
(animal1 === 'abe' || animal2 === 'kat') && animal3 === 'haj' // true

!true //false
!false //true

// udråbstegnet konverterer også && til || og omvendt

*/

/* Conditionals: if 

let svar = window.confirm ("Click OK, get true. Click Anuller, get false.");

console.log(svar)

if(svar === true) {
    console.log("Du har trykket OK");
} else {
    console.log("Du sagde noget andet end OK");
}

let svar2 = window.prompt("Skriv JA, NEJ eller måske. Klik OK.");

if (svar2 === "JA") {
    console.log("Du svarede JA!");
} else if (svar2 === "NEJ") {
    console.log("Du svarede NEJ!");
} else if (svar2 === "MÅSKE") {
    console.log("Du svarede MÅSKE. Jeg ved ikke, hvad du mener med det");
} else {
    console.log("Dude, tag dig sammen");
}
*/


//Conditionals: switch

//Denne blok er det samme som blokken lavet med if-conditions, bare kortere/forsimplet. De kan cascade på en anden måde, som if-statement ikke gør

/*
let svar2 = window.prompt("Skriv JA, NEJ eller måske. Klik OK.");

switch (svar2) {
    case "JA":
        console.log("Du sagde JA!");
        break;
    case "MÅSKE":
        console.log("Du sagde MÅSKE!");
        break;
    case "NEJ":
        console.log("Du sagde NEJ!");
        break;
        default: //samme som et else-statement
            console.log("Tag dig sammen");
            break;
}


// Terse ifs: One-liners. Fine for quick checks. 

if (cherub === 'Cupid') consolge.log("Ouch, an arrow! OO I'm in love")
else console.log("I feel nothing");


var animal = 'cat'
animal === 'cat'
? console.log('You will be a cat herder')
: console.log('You will be a dog cather');

//The action to take if true = ?
//The action to take if false= :

// Type cheching: 

typeof (det du vil tjekke) -> fortæller hvad der er tale om.

osv... (se tutorial på LinkedIn Learning)
*/

// for loops: sequential:

for (let i = 0; i < 10; i += 1) {
console.log(i)
} 

//man kan også gøre sådan for at få den til at starte på 1:
   
for (let i = 1; i <= 10; i += 1) {
console.log("ny måde", i)
} 

//loop over the contents of an array: 

let pageNames = [
    "Home",
    "About us",
    "Contact us",
    "Playground",
    "News",
    "Blog"
];

// Writing a piece of code that will look through every item in the array and tell us the one we're looking at matches the actual title of the page we're on

for (i = 0; i < pageNames.length; i += 1) { 
    if (document.title === pageNames[i]) {
        console.log("We ARE here:" + pageNames[i]);
        break; //får den til at stoppe, når dette punkt er fundet
        } else {
        console.log("We are NOT here:" + pageNames[i]);
        }
    }

//for at undgå at gentage sig selv, kan man skrive koden sådan i stedet: 

let pageNames2 = [
    "Home",
    "About us",
    "Contact us",
    "Playground",
    "News",
    "Blog"
];
for (i = 0; i < pageNames2.length; i += 1) { 
    let currentPageTitle = pageNames2 // ændrer til et meningsfuldt navn

    if (document.title === currentPageTitle[i]) {
        console.log("We ARE here:" + currentPageTitle[i]);
        break; //får den til at stoppe, når dette punkt er fundet
        } else {
        console.log("We are NOT here:" + currentPageTitle[i]);
        }
    }

    // for loops: enumerative -> used on arrays or objects 

    //i array: 

for (let p in pageNames) {
    console.log(p, pageNames[p]);
}

// der findes også:

for (let v of pageNames) {
console.log(v);
}
    

// der findes også: 

let pages = {
    first: "home",
    second: "about us",
    third: "contact us"
};
for (let p in pages) {
    if (pages.hasOwnProperty(p)) {
        console.log(p, pages[p]);
    }
}

// set and map:

//let mySet = new Set(); - stores each value excatly and only once
//let myMap = new Map(); - must be accessed and changed using special methods

// while loops: indeholder en conditions der kan stoppe loopet, i stedet for at man skal andsætte et break 



var myList = [true, true, true, false, true, true];

var myItem = null; 

while (myItem !== false) { //my conditions is that as long as myItem is not false we're going to do som things:
    console.log(
        "myList has " + 
        myList.length + 
        " items now. This loop will keep going until we pop a false"
    );

    myItem = myList.pop()//will make my list one item shorter every loop
}

// der findes også do while loops

//FUNCTIONS

//en function declaration:
function lyde() {
    console.log("bøh");
    console.log("atju");
    console.log("muuuuuh");
    console.log("vuf");
}
lyde(); //envoking the function

//a function expression assigned to a variable:
const lyde2 = function() {
    console.log("bøh");
    console.log("atju");
    console.log("muuuuuh");
    console.log("vuf");
}

//fuddify

/* function fuddify() {

}
*/