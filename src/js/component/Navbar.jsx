import React from "react";
import Logo from "../../img/Logo.jpg";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
             <img src={Logo} alt="Logo" width="80" height="80" className="rounded-circle logogb d-inline-block align-text-top"/>
             <a className="navbar-brand" name="main" href="#main">MusicSpectrum</a>               
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#main">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank"href="https://www.youtube.com/watch?v=dj_OK0IwVZU">EDM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.youtube.com/watch?v=-gjiT_WLzXo">Indie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.youtube.com/watch?v=STyKwHUhytA">PopRock</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.youtube.com/watch?v=sjrcO6FWzdE&t=147s">Festival</a>
                        </li>
                    </ul>
              </div>
        </nav>
        );
};



export default NavBar;