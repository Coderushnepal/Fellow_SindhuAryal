import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import BeerModal from './BeerModal';
import { dummyBeerData as favourites } from "../../../constants/dummyData";

class Beer extends Component {
    constructor(props){
        super(props);

        this.state = {
            isFavorite: false,
            showModal: false,
        };
    }
    
    handleModalOpen =() => {
        this.setState({
            showModal: true,
        });
    };

    handleModalClose =() => {
        this.setState({
            showModal: false,
        });
    };

    render(){
        // const { isFavourite } = this.state;
        const { showModal } = this.state;
        const { id, name, description, image_url} = this.props.info;
        const beerIndex = favourites.findIndex(beer => beer.id === id);
        
        return(
            <Fragment>
            {showModal ? (
                <BeerModal
                    show={showModal} 
                    handleClose={this.handleModalClose} 
                    beerId={id}
                /> 
            ) : (null)}
            
            <div className="card">
                <span className={`favourite ${beerIndex > -1 ? "active" : "" }`}>
                    <i className="far fa-star" />
                </span>
                <div
                 className="card__imgcontainer" 
                 style={{backgroundImage : `url(${image_url})` }}
                />
               <h2 onClick={this.handleModalOpen}> {name}</h2>
            
               <span className="card__description"> {description}  </span>
            </div>  
            </Fragment>
        );
    }
}

Beer.propTypes = {
    info: PropTypes.shape ({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        image_url: PropTypes.string,
    }),
};


export default Beer;