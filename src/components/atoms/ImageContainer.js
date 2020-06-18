import React from 'react';

const ImageContainer = props => {
    return (
        <div className="img-wrap">
            <a {...props}>
                {props.children}
                {props.imageURL ? <img src={props.imageURL} alt="logo image" aria-label="app logo" width="150" height="17" /> : ''}

            </a>
        </div >
    );
}

export default ImageContainer;
