const axios = require('axios');

const getClima = async(lat, lng) => {
    let encodelat = encodeURI(lat)
    let encodelng = encodeURI(lng)

    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodelat}&lon=${encodelng}&units=metric&appid=ed25256d6a277ce26e849b29d5a7b488`)

    if (result.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    return result.data.main.temp;

}

module.exports = {
    getClima
}