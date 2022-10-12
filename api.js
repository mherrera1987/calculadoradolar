fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(datos=>datos.json())
    .then(
        datos => {
            const HTMLResponse = document.querySelector("#cotDolar");
            HTMLResponse.dataset.cotizacion = datos[0]['casa']['venta'];
            HTMLResponse.innerHTML = '$ ' + datos[0]['casa']['venta'];
        }
    )