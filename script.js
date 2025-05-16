/*Lista para Fazer
    -Animações
   */

const toggleBtn = document.getElementById("toggle-box").checked;
const form = document.querySelector("form");
const submit = document.getElementById("submit-btn");
const sortearContainer = document.querySelector('.main-sec-container');
const sorteadoContainer = document.querySelector('.main-third-container');
const containerdoSorteado = document.querySelector('.sorted-container');
const quantidade = document.getElementById('Quantidade');
const minimo = document.getElementById('Minimo');
const maximo = document.getElementById('Maximo');


function numberFilter(event){
    event.target.value = event.target.value.replace(/\D/g, ""); // remove tudo que não for número
}


quantidade.addEventListener("input", numberFilter);
minimo.addEventListener("input", numberFilter);
maximo.addEventListener("input", numberFilter);


submit.addEventListener("click", function(event){
    event.preventDefault()
})
function sortear(){
    if (quantidade.value === 0 || minimo.value >= maximo.value){
        alert("Por Favor Insira corretamente os números!");
        return;
    }
    let numerosGerados = [];
    let evitarRepeticao = document.getElementById("toggle-box").checked;


    for (let i = 0; i < quantidade.value; i++){
    let numeroSorteado;
     


    do {
        numeroSorteado = Math.floor(Math.random() * (parseInt(maximo.value) - parseInt(minimo.value) + 1)) + parseInt(minimo.value);
    } while (numeroSorteado > parseInt(maximo.value) || numeroSorteado < parseInt(minimo.value));

        if (evitarRepeticao) {
            // Garante que os números não se repitam
            do {
                numeroSorteado = Math.floor(Math.random() * (parseInt(maximo.value) - parseInt(minimo.value) + 1)) + parseInt(minimo.value);
            } while (numerosGerados.includes(numeroSorteado));

            numerosGerados.push(numeroSorteado);
        } else {
            // Sorteia livremente
            numeroSorteado = Math.floor(Math.random() * (parseInt(maximo.value) - parseInt(minimo.value) + 1)) + parseInt(minimo.value);
        }

    
    // Criando o <p> dentro da sorted-container
let novoDiv = document.createElement("div");
novoDiv.classList.add("cubo");

containerdoSorteado.append(novoDiv); // Adiciona o cubo ao container

setTimeout(() => {
    let novoP = document.createElement("p");
    novoP.innerText = numeroSorteado;
    novoP.classList.add("resultado");
    
    novoDiv.appendChild(novoP);
}, 2000); 

// Adicionando ao container sorted-container
 
    sortearContainer.classList.add("Suma");

    sorteadoContainer.classList.add("Apareça");

    // adiciona um atraso antes de esconder o container
    setTimeout(() => {
        sortearContainer.classList.add("hidden");
        sortearContainer.classList.remove("visible");

        sorteadoContainer.classList.remove("hidden");
        sorteadoContainer.classList.add("visible");
    }, 500); 
}

}
function voltar(){
    // Aplica animação de saída
    sorteadoContainer.classList.add("Suma");
    sortearContainer.classList.remove("Suma");

    sortearContainer.classList.add("Apareça");
    sorteadoContainer.classList.remove("Apareça");
 
    // Espera a animação terminar antes de limpar os números
    setTimeout(() => {
        while (containerdoSorteado.firstChild) {
            containerdoSorteado.removeChild(containerdoSorteado.firstChild);
        }

        sorteadoContainer.classList.add("hidden");
        sorteadoContainer.classList.remove("visible");

        sortearContainer.classList.remove("hidden");
        sortearContainer.classList.add("visible");
    }, 500); // Tempo igual ao da animação
}
