async function buscarCiudad() {
    const ciudad = document.getElementById("cityInput").value;

    if (!ciudad) {
        alert("Por favor ingresa una ciudad");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Verifica la respuesta completa
        console.log(datos);

        if (datos.cod !== 200) {
            alert("Ciudad no encontrada");
            return;
        }

        document.getElementById("ciudad").textContent = datos.name;
        document.getElementById("temperatura").textContent = `${Math.round(datos.main.temp)}°C`;
        document.getElementById("climaEstado").textContent = datos.weather[0].description;
        document.getElementById("humedad").textContent = `${datos.main.humidity}%`;
        document.getElementById("viento").textContent = `${datos.wind.speed} km/h`;

    } catch (error) {
        console.error("Error al obtener datos del clima:", error);
        alert("Ocurrió un error al conectar con el servicio.");
    }
}