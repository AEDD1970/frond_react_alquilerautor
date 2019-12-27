import axios from 'axios';


export default class utilsService {
    static savePropietario(cedula, licencia, correo, telefono, direccion ) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'https://floating-waters-90628.herokuapp.com/propietarios',
                headers: { 'Content-Type': 'application/json' },
                data: { cedula, licencia, correo, telefono, direccion }
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