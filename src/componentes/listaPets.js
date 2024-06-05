import React from 'react';
import "../styles/bg13.css"
import "../index.css"

export default function ListaPets() {
    return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Pets</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 1
                    </a>
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 2
                    </a>
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 3
                    </a>
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 4
                    </a>
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 5
                    </a>
                    <a href="/pet/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Pet 6
                    </a>
                </div>
            </div>
        </div>
    )
}