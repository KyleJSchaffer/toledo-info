import React from 'react';
import PropTypes from 'prop-types';

//Displays a message while the data is still be fetched.
const FetchingMessage = props =>
    <div>
        <p>Fetching {props.dataName} Data</p>
    </div>

export default FetchingMessage;

FetchingMessage.propTypes = {
    dataName: PropTypes.string
}