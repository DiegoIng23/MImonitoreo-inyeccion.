// URL de tu implementación en Google Apps Script (la obtendrás después)
const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbzY0WAHZ_E510p4P9LJ2GwBHEcFfg9-stJMyHPM1Ho-JlO99DQbAt5FbzMvAKkaq7I/exec";

// Función para enviar comandos o notas desde el tablero
async function enviarDato(maquina, mensaje) {
    if (!mensaje) return;

    console.log(`Enviando reporte de ${maquina}...`);
    
    const datos = {
        fecha: new Date().toLocaleString(),
        maquina: maquina,
        mensaje: mensaje
    };

    try {
        // Enviar a Google Workspace para registro histórico
        const respuesta = await fetch(URL_GOOGLE_SCRIPT, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(datos)
        });
        
        alert(`Reporte de ${maquina} enviado correctamente.`);
    } catch (error) {
        console.error("Error al sincronizar con Google:", error);
    }
}

// Escuchar cuando se presiona la tecla "Enviar" en el teclado del móvil
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const maquinaNombre = this.parentElement.querySelector('h3').innerText;
            enviarDato(maquinaNombre, this.value);
            this.value = ''; // Limpiar el cuadro tras enviar
        }
    });
});
