import React from 'react';
import logo from './icons/zapato.svg'
class nab extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sticky-top">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Replicalzado"></img>
                    Replicalzado
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mujer</a>
                        </li>
                    </ul>
                    <form className="form-inline justify-content-center">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
              
               
            </nav>
        </div>
    }
}
export default nab;