// selectores

let inputText = document.querySelector("#inputText");
let inputShow = document.querySelector("#inputShow");
let inputForm = document.querySelector("#inputForm");

const showCard = () => {
    inputShow.style.display=("flex");
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputText.value}`)
    .then(response => response.json())
    .then(data => inputShow.innerHTML=`

    <h2>${data.name}</h2>
    <h2>HP: ${data.stats[0].base_stat}</h2>

    <img src="${data.sprites.other.dream_world.front_default}">
    <div class="info-card">
    <div class="info-text">
    <h3>Tipo:</h3>
    <h3> ${data.types[0].type.name}</h3>
    </div>
    <div class="info-text">
    <h3>Altura:</h3>
    <h3>${Math.round(data.height* 0.3048)} mtrs</h3>
    </div>
    <div class="info-text">
    <h3>Peso:</h3>
    <h3> ${Math.round(data.weight/2.20)} kg </h3>
    </div>

    </div>
    
    `)
    .catch (error => console.error(error))
    }
    
    
const validateData= (e) =>{
    e.preventDefault();
     if(!isEmptyInput()){
        showCard()
     }
     if(inputText.value){
        inputShow.innerHTML="<h2>datos invalidos</h2>"
     }form.reset();
}


const isEmptyInput = () => {
    inputShow.innerHTML="<h2>Por favor escriba un id</h2> ";
    
  };

const init = () => {
    inputForm.addEventListener("submit", validateData);
 };

 init();