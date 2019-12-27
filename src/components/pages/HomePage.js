// IMPORT PACKAGE REFERENCES

import React from 'react';
import api from '../utils/api';

// COMPONENT
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cedula: '',
            licencia: '',
            correo: '',
            telefono: '',
            direccion: '',
        };
    }
    submit(){
        const { cedula, licencia, correo, telefono, direccion } = this.state;
        api.savePropietario(cedula, licencia, correo, telefono, direccion)
            .then(() => {
                alert('datos guardados');
            })
            .catch(() => {
                alert('error al guardar datos');
            });
    }
    render(){
        return(
            <div>
                <form style={{marginTop: 30}}>
                    <div className="form-group">
                        <label >Cedula</label>
                        <input type="number" className="form-control" onChange={e => this.setState({cedula: e})}  />
                    </div>
                    <div className="form-group">
                        <label >Licencia</label>
                        <input type="text" className="form-control" onChange={e => this.setState({licencia: e})} />
                    </div>
                    <div className="form-group">
                        <label >Correo</label>
                        <input type="email" className="form-control" onChange={e => this.setState({correo: e})} />
                    </div>
                    <div className="form-group">
                        <label >Teléfono</label>
                        <input type="number" className="form-control" onChange={e => this.setState({telefonos: e})} />
                    </div>
                    <div className="form-group">
                        <label >Dirección</label>
                        <input type="text" className="form-control" onChange={e => this.setState({direccion: e})} />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export { HomePage };