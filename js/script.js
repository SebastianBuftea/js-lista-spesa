
// creiamo la lista della spesa
const lista=["guanciale", "uova", "pasta", "pepe", "pecorino"];

//creo il collegamento con il dom
const container_list= document.getElementById("carbonara-list");
// dopo aver inizializzato il contatore a zero  eseguiamo la stampa degli elementi della lista finche non arriveremo al ultimo
let i=0;
while (i < lista.length){
    console.log(lista[i]);

    //creo l elemento li a cui assegno l'ingrediente
    const li=document.createElement("li");
    li.innerText=lista[i];

    //inserisco tutto il compresso creato nel dom 
    container_list.appendChild(li);
    i++;

}
