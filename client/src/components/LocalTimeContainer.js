import React from 'react'
import { getLocalTime } from '../utils/api';
import LocalTime from './LocalTime';
import FetchingMessage from './FetchingMessage';
import ErrorMessage from './ErrorMessage';

class LocalTimeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchingData: true,
            hours: null,
            minutes: null
        }
    }

    //Fetches the local time from the server upon mounting
    componentDidMount() {
        getLocalTime()
            .then(time => {
                this.setState({
                    fetchingData: false,
                    hour: time.hours,
                    minutes: time.minutes
                })
            })
    }

    //Converts the 24 hour military time into 12 hour time into the hh:mm AM/PM format
    getTimeString(hour, minutes) {
        let timeString = hour % 12;
        if (timeString === 0) {
            timeString = 12;
        }
        timeString += ':'
        if (minutes < 10) {
            timeString += 0;
        }
        timeString += minutes
        if (hour < 12) {
            timeString += ' AM';
        } else {
            timeString += ' PM';
        }
        return timeString
    }

    //Renders a message while fetching data, an error message if the data failed to fetch,
    //or the LocalTime component if the data was successfully fetched
    render() {
        if (this.state.fetchingData) {
            return <FetchingMessage dataName='Local Time' />
        } else if (!this.state.hour) {
            return <ErrorMessage dataName='Local Time' />
        } else {
            return <LocalTime time={this.getTimeString(this.state.hour, this.state.minutes)} />
        }
    }
}

export default LocalTimeContainer;