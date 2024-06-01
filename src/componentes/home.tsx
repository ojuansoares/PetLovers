import { Component } from "react";
import "../styles/bg12.css"
import "../index.css"

export default class Home extends Component {
    render() {
        return (
        <div>
            <div className="bg12"></div>
            <div className="container-fluid fundo-escuro welcome">
                <h4>Welcome to PetLovers!</h4>
            </div>
        </div>
        )
    }
}