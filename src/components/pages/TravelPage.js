import React from 'react';
import api from '../utils/api';

class TravelPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cedula: '',
            tiempo: '',
            distancia: '',
            valor: '',
        };
    }
    submit(){
        const { cedula, tiempo, distancia, valor } = this.state;
        api.saveTravel(cedula, tiempo, distancia, valor)
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
                    <h1>Iniciar viaje</h1>
                    <div className="form-group">
                        <label >Cedula Cliente</label>
                        <input type="email" className="form-control" onChange={e => this.setState({cedula: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label >Tiempo</label>
                        <input type="text" className="form-control" onChange={e => this.setState({tiempo: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label >Distancia</label>
                        <input type="text" className="form-control" onChange={e => this.setState({distancia: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label >Valor</label>
                        <input type="text" className="form-control" onChange={e => this.setState({valor: e.target.value})} />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export { TravelPage };