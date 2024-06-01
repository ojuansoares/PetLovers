/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../public/logo.png';

export default function BarraNavegacao() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark" style={{ marginBottom: 10 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                    <img className="logo" src={logo} alt="PetLovers" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/clientes'); }}>Clientes</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/pets'); }}>Pets</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/produtos'); }}>Produtos</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/servicos'); }}>Serviços</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/cadastrar'); }}>Cadastrar</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/registrarcompra'); }}>Registrar Compra</a>
                            <hr className="d-lg-none hr-no-margin" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/listagens'); }}>Listagens</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}