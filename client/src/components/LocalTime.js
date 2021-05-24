import React from 'react'
import PropTypes from 'prop-types';
import '../css/localTime.css'

//Displays the local time for Toledo
const LocalTime = props =>
    <div >
        <h3>
            Toledo Local Time
             <br />
            {props.time}
        </h3>
    </div>

export default LocalTime;

LocalTime.propTypes = {
    time: PropTypes.string
}
