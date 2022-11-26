import React from "react";


//include images into your bundle

//create your first component
const Jumbotron = () => {
	return (
		<div className="text-start">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to the next step</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Find out More</button>
        </div>
      </div>
		</div>
	);
};

export default Jumbotron;