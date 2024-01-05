console.log("Bonjour Merlin");

//const monUrl = "../data/compteurs.csv"; // chemin de la resoures "../data/compteurs.csv" que nous souhaitons recuperer
const monUrl = "../data/compteurs.csv"; // chemin de la resoures "../data/compteurs.csv" que nous souhaitons recuperer
fetch(monUrl)
    .then(res => res.text())
    .then(data =>{
        //console.table(data)
        const result = data.split(/*/\r?\n|\r/*/"\n").map(element =>{
            return element.split(",")
        });
        console.log(result);   // result est untableau  contenant un tableau d'élemnts


        // extraction du tableau json
        result.forEach(e =>{
            const unElement = e.map(e =>{
                return `<td>${e}</td>`;
            })

            // let monElement = document.createElement("tr");
            const monElement = document.createElement("tr");

            monElement.innerHTML= unElement;
            document.querySelector("table").appendChild(monElement);
            console.log(unElement);
        })

    })


// delimitateur
/*
const maVariable = "c'est une phrase.";
const monTableau =maVariable.split(" ",3);
console.table(monTableau)

*/