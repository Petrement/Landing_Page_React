import React from "react";


const Navbar = () => {
	return (
		<div className="text-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b8/One_Don_Music_Logo.jpg" alt="Logo" width="50" height="50" className="rounded-circle"/>
            <span className="p-3 fs-5 t-4"><strong>ONE DOM</strong>Music</span>
          </a>
          <button className="navbar-toggler btn-close-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Now Playing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Concerts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Upcoming</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
		</div>
	);
};

export default Navbar;