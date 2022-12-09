import React from "react";


//include images into your bundle

import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CardContainer from "./Cardholder.jsx";


//create your first component
const Home = () => {
	return (
	<div className="all">	
		<div className="text-center">
			<NavBar/>
			<div>	
				<Jumbotron/>	
			</div>
		</div>
		<div className="card-group">
		<CardContainer/>
		</div>	
			<Footer/>
	</div>	
	);
};

export default Home;