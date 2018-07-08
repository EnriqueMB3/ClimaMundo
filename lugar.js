const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion)
    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (result.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = result.data.results[0];
    let coors = location.geometry.location;

    console.log('Direccion', location.formatted_address);
    console.log('lat', coors.lat);
    console.log('lng', coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLugarLatLng
}