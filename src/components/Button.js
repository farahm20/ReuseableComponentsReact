import React from 'react'
import PropTypes from 'prop-types'


function Button({ value, onClick }) {
    return (
        < button
            className="app-button"
            onClick={(event) => onClick(event)
            }>
            { value}
        </button >
    )
};



Button.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button
