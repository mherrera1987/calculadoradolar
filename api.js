const API_URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
const xhr = new XMLHttpRequest();
function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#cotDolar");
        HTMLResponse.dataset.cotizacion = data[0]['casa']['venta'];
        HTMLResponse.innerHTML = data[0]['casa']['venta'];
    } 
}
xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', API_URL);
xhr.send();