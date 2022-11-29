import React from "react";


const Jumbotron = () => {
	return (
    <div className="text-start">
      <div className="p-5 mb-1 bg-light">
        <div className="card text-bg-dark rounded-1" height="100px">
          <img src="https://media.istockphoto.com/id/1247853982/photo/cheering-crowd-with-hands-in-air-at-music-festival.jpg?s=612x612&w=0&k=20&c=rDVKf3hTryuVgUZUme9wuwfsegfJptAvVEKsDwppvJc=" className="rounded-1" alt="music"></img>
          <div className="card-img-overlay">
            <div className="container-fluid py-5">
             <h1 className="display-4 fw-bold text-center">Welcome to the <u><strong>F.U.T.U.R.E</strong></u> of Music</h1>
              <div className="d-grid gap-2 col-6 mx-auto">
            <img src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" className="rounded mx-auto d-block m-5" width="425px" height="325px" alt="music2"></img>
            <audio id="sound1" src="https://www.youtube.com/watch?v=sjrcO6FWzdE" preload="auto"></audio>
        <button className="btn btn-primary m-5" type="button">Learn More</button>
              </div>
            </div>
          </div>
		    </div>
      </div>
    </div>
	);
};

export default Jumbotron;