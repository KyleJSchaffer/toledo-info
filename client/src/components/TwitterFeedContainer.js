import React from 'react';
import { getTweets } from '../utils/api'
import TwitterFeed from './TwitterFeed';
import FetchingMessage from './FetchingMessage';
import ErrorMessage from './ErrorMessage';

class TwitterFeedContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchingData: true,
            tweets: []
        }
    }

    //Fetches the tweet data upon mounting
    componentDidMount() {
        getTweets()
            .then(tweets => {
                this.setState({
                    fetchingData: false,
                    tweets: tweets
                });
            });
    }

    //Renders a message while fetching data, an error message if the data failed to fetch,
    //or the TwitterFeed component if the data was successfully fetched
    render() {
        if (this.state.fetchingData) {
            return <FetchingMessage dataName='Twitter' />
        } else if (!this.state.tweets) {
            return <ErrorMessage dataName='Twitter' />
        } else {
            return <TwitterFeed tweets={this.state.tweets} />
        }
    }
}

export default TwitterFeedContainer;