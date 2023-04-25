import fs from 'fs';
import axios from 'axios';
import colors from 'colors';

class Busquedas {

    historial = [];
    path = './DB/dataBase.json';
    constructor() {
        this.leerDB();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            //'proximity': 'ip',
            'language': 'es',
            'limit': '5'
        }
    }

    async ciudad(lugar = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,

            });

            const resp = await instance.get();
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                long: lugar.center[0],
                lat: lugar.center[1],
            }));

        } catch (error) {
            console.log(error.message);
            return [];
        }

    }

    static mostrarCiudad(lugar) {
        const { nombre, lat, long } = lugar;
        console.log("\n\t ** Descripcion de la Ciudad **\n".green);
        console.log(`Ciudad: ${nombre.green}`);
        console.log(`Latitud: ${colors.yellow(lat)}`);
        console.log(`Longitud: ${colors.yellow(long)}`);
    }

    static mostrarCiudadClima(lugar, clima) {
        Busquedas.mostrarCiudad(lugar);
        const { desc, min, max, temp } = clima;
        console.log(`Temperatura: ${colors.yellow(temp + '°C')}`);
        console.log(`Minima: ${colors.yellow(min + '°C')}`);
        console.log(`Maxima: ${colors.yellow(max + '°C')}`);
        console.log(`Estado del clima: ${desc.green}`);
    }


    static buscarCiudad(lugares = [], id) {
        return lugares.find(l => l.id === id);
    }

    get paramsOPENWEATHER() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'sp'
        }
    }

    async climaLugar(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOPENWEATHER, lat, lon }

            });

            const resp = await instance.get();
            const { weather, main } = resp.data;


            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            };

        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar) {
        if (!this.historial.includes(lugar)) {
            this.historial = this.historial.slice(0, 4);
            this.historial.unshift(lugar);
            this.grabarDB();
            return true;
        }
        return false;
    }

    grabarDB() {
        const payLoad = {
            historial: this.historial
        };

        fs.writeFileSync(this.path, JSON.stringify(payLoad));
    }

    leerDB() {

        if (!fs.existsSync(this.path)) {
            return null;
        }
        this.historial = JSON.parse(fs.readFileSync(this.path, { encoding: 'utf8' })).historial;
        return true;

    }

}

export {
    Busquedas
}