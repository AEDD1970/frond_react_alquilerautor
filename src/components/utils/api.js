import axios from 'axios';


export default class utilsService {
    static savePropietario(cedula, licencia, email, telefono, direccion ) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'https://floating-waters-90628.herokuapp.com/propietarios',
                headers: { 'Content-Type': 'application/json' },
                data: { cedula, licencia, email, telefono, direccion }
            })
                .then((response) => {
                    const data = response.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    static saveUser(cedula, email, telefono) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'https://floating-waters-90628.herokuapp.com/clientes',
                headers: { 'Content-Type': 'application/json' },
                data: { cedula, email, telefono }
            })
                .then((response) => {
                    const data = response.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    static saveTravel(cedula_id, tiempo, distancia, valor) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'https://floating-waters-90628.herokuapp.com/viajes',
                headers: { 'Content-Type': 'application/json' },
                data: { cedula_id, tiempo, distancia, valor }
            })
                .then((response) => {
                    const data = response.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}