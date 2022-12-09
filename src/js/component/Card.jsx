import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
    return (
            <div className="card-group ">               
                    <div className="card-body card">
                        <img src={props.image} className="card-img-top rounded cardfoto" alt="New Picture"/>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}.</p>
                        <a href={props.buttonUrl} target="_blank" className="btn btn-dark mt-auto align-self-center">More</a>
                    </div>
            </div>        
        
    );
};

Card.propTypes = {
    image: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
    buttonUrl: propTypes.string,

};

export default Card;
 