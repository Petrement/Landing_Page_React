import React from "react";


//include images into your bundle

//create your first component
const Card = () => {
	return (
    <div className="col text-start mb-4">
      <div className="card h-100 p-2">
        <img src="https://img.freepik.com/vector-gratis/plantilla-poster-evento-musical-formas-coloridas_1361-1591.jpg?w=2000" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Earth</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Watch Live</a>
        </div>
      </div>
    </div>
	);
};

export default Card;