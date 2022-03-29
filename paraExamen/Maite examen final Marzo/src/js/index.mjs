// Contador Javascript 

let click = 0;
document.querySelector("#sum").addEventListener("click", ()=> {
    click = click + 1;
    document.querySelector("#text").innerText = "Has pulsado el botón: "+click+" veces";
})




 
 