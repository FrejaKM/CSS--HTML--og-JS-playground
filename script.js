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
