import React from 'react';

const Select = props => {
    const { name, value, ariaLabel, placeholder, arrow } = props;
    return (
        <div
            className="select-wrap"
            data-arrow="right"
        >
            <select {...props} className="form-control select-box" name={name ? name : ''} aria-lable={ariaLabel ? ariaLabel : 'Select dropdown'}>
                <option aria-label="select one from select dropdown" disabled value="" selected>{placeholder ? placeholder : 'Select one'}</option>
                <option value="First select">First select</option>
                <option value="Second select">Second select</option>
                <option value="Third select">Third select</option>
            </select>
        </div >
    );
}

export default Select;
