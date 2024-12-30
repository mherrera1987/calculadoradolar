// Función para obtener el valor de venta y actualizar el HTML
fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(datos => {
        const HTMLResponse = document.querySelector("#cotDolar");
        HTMLResponse.dataset.cotizacion = datos.venta;
        HTMLResponse.innerHTML = '$ ' + datos.venta;
    })
    .catch(error => console.error('Error fetching data:', error));

// Función para calcular los valores y actualizar el HTML
function porcentaje() {
    let cotDolarScrap = document.getElementById('cotDolar').dataset.cotizacion;
    let cotDolar = cotDolarScrap.replace(/,/g, '.');
    const impGanancias = 30; 
    let dolares = document.getElementById("dolares").value;
    let valorDolar = dolares * cotDolar;
    let valorGanancias = valorDolar * (impGanancias / 100);
    let valorTotal = valorDolar + valorGanancias;
    
    // Función para formatear los números con separadores de miles y decimales
    function formatearNumero(numero) {
        return numero.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    document.getElementById("valorDolar").innerHTML = '$ ' + formatearNumero(valorDolar);
    document.getElementById("valorGanancias").innerHTML = '$ ' + formatearNumero(valorGanancias);
    document.getElementById("valorTotal").innerHTML = '$ ' + formatearNumero(valorTotal);
}

// Función para detectar la tecla Enter y ejecutar la función porcentaje
const visitanteApretoEnter = (event) => {
    if(event.keyCode == 13)
        porcentaje();
}
