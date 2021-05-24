import React from 'react';
import PropTypes from 'prop-types';

//Displays an error message if a certain group of data was unabled to be fetched
const ErrorMessage = props =>
    <div>
        <p>Error Fetching {props.dataName} Data</p>
    </div>

export default ErrorMessage;

ErrorMessage.propTypes = {
    dataName: PropTypes.string
}