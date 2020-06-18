import React from 'react';
import Label from '../atoms/label/Label';
import Select from '../atoms/select/Select';
import Button from 'react-bootstrap/Button';

const SelecrForm = () => {
    return (
        <form>
            <Label for="selectCountry"> <strong>Country</strong></Label>
            <div>
                <Select name="selectCountry" id="selectCountry" />
            </div>
            <div className="pt-3">
                <Button variant="primary rounded" data-arrow="right" type="submit"><strong>Continue</strong></Button>
            </div>
        </form>
    );
}

export default SelecrForm;
