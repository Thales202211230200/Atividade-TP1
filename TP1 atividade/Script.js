botãoClique= document.getElementById ("Cliques")
Textoo= document.getElementById ("texto")
var contagem=0
function ContCliques (){
contagem++
Textoo.innerHTML = `<u>Número de cliques:</u> ${contagem}`
    }