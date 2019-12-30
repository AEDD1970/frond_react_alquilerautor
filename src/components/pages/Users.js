// IMPORT PACKAGE REFERENCES

import React from 'react';
import api from '../utils/api';

// COMPONENT
class UserPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cedula: '',
            correo: '',
            telefono: '',
        };
    }
    submit(){
        const { cedula, correo, telefono } = this.state;
        api.saveUser(cedula, correo, telefono)
            .then(() => {
                alert('datos guardados');
            })
            .error(() => alert('error al guardar datos'));
    }
    render(){
        return(
            <div>
                <form style={{marginTop: 30}}>
                    <h1>Datos cliente</h1>
                    <div className="form-group">
                        <label >Cedula</label>
                        <input type="number" className="form-control" onChange={e => this.setState({cedula: e.target.value})}  />
                    </div>
                    <div className="form-group">
                        <label >Correo</label>
                        <input type="email" className="form-control" onChange={e => this.setState({correo: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label >Teléfono</label>
                        <input type="number" className="form-control" onChange={e => this.setState({telefono: e.target.value})} />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export { UserPage };