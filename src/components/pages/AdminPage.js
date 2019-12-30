import React from 'react';
//import api from '../utils/api';

class AdminPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            correo: '',
            password: '',
        };
    }
    submit(){
        //const { correo, password } = this.state;
        console.log('agregar validación jwt');
    }
    render(){
        return(
            <div>
                <form style={{marginTop: 30}}>
                    <div className="form-group">
                        <label >Correo</label>
                        <input type="email" className="form-control" onChange={e => this.setState({correo: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" onChange={e => this.setState({password: e.target.value})} />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export { AdminPage };