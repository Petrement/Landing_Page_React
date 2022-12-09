import React from "react";
import Card from "./Card.jsx";

import Dance from "../../img/Dance.jpg";
import Indie from "../../img/Indie.jpg";
import PopRock from "../../img/PopRock.jpg";
import Festival from "../../img/Festival.jpg";

const musicstyles = {
    Dance : {
        image: Dance,
        title: "Dance & Electronica",
        text: "Eres de los pioneros del EDM... este es tu sitio, no te pierdas ¡NADA!",
        buttonURL: "https://www.ticketmaster.es/musica/dance-electronica/201/events",

    },
    Indie :{
        image: Indie,
        title: "Indie & Alternativo",
        text: "Artistas y grupos nuevos. «Do it yourself» y descubre todo lo nuevo que traen este nuevo año.",
        buttonURL: "https://www.ticketmaster.es/musica/indie-alternativo/60/events", 
    },
    PopRock: {
        image: PopRock,
        title: "Pop & Rock",
        text: "¿Te gusta el PopRock? Este es tu sitio, entra para ver todo lo que se mueve en esta categoría este año.",
        buttonURL: "https://www.ticketmaster.es/musica/pop-rock/1/events ",

    },
    Festival : {
        image: Festival,
        title: "UpComing Festivals",
        text: "Eres más de festivales, no te preocupes, te traemos todo con antelación para que puedas organizar esa agenda",
        buttonURL: "https://www.ticketmaster.es/festivales/todos-festivales/10101/events",
    }

}

const Cardholder = () => {
    return (
        <div className="container">
           <div class="row row-cols-md-4 d-flex justify-content-between mt-5 mb-5">
           <Card image={musicstyles.Dance.image} title={musicstyles.Dance.title} text={musicstyles.Dance.text} buttonUrl={musicstyles.Dance.buttonURL}/>
            <Card image={musicstyles.Indie.image} title={musicstyles.Indie.title} text={musicstyles.Indie.text} buttonUrl={musicstyles.Indie.buttonURL}/>
            <Card image={musicstyles.PopRock.image} title={musicstyles.PopRock.title} text={musicstyles.PopRock.text} buttonUrl={musicstyles.PopRock.buttonURL}/>
            <Card image={musicstyles.Festival.image} title={musicstyles.Festival.title} text={musicstyles.Festival.text} buttonUrl={musicstyles.Festival.buttonURL}/>
            </div>
        </div>    
    );
};

export default Cardholder;