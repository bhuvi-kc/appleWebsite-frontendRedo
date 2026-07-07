import React from "react";

const Nav = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#hero">NOIRE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#collections">COLLECTIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#atelier">ATELIER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/heritage">HERITAGE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/maison">MAISON</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" type="button">RESERVE A FITTING</button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav