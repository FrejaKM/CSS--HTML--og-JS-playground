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

