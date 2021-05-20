import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { validateInput } from '../utilities/Validator';
//uncontrolled componennt does not have its own value strored in state. It gets values from another component. 
function InputField({ value, label, placeholder, validators, type, onChange }) {
    //create state object for error
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        const { value } = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    }

    return (
        <div className="form-group">
            {/* //print label only if the label is recieved. enclose it in curly brackets  */}
            {label && <label htmlFor="app-input-field">{label}</label>}
            <input type="text"
                className="form-control"
                placeholder={placeholder}
                onChange={handleChange}
            />
            {error && <span className='text-danger'>{error.message}</span>}

        </div>
    )
}

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired //isRequired therefore we dont require a default prop. 
};

InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    validators: [],
    type: '',
}

export default InputField
