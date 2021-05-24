import React from 'react';
import { getNews } from '../utils/api';
import NewsFeed from './NewsFeed';
import ErrorMessage from './ErrorMessage';
import FetchingMessage from './FetchingMessage';

class NewsFeedContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchingData: true,
            articles: []
        }
    }

    //Fetches the article headline data upon mounting
    componentDidMount() {
        getNews()
            .then(articles => {
                this.setState({
                    fetchingData: false,
                    articles: articles
                })
            })
    }

    //Renders a message while fetching data, an error message if the data failed to fetch,
    //or the NewsFeed component if the data was successfully fetched
    render() {
        if (this.state.fetchingData) {
            return <FetchingMessage dataName='News' />
        } else if (!this.state.articles) {
            return <ErrorMessage dataName='News' />

        } else {
            return <NewsFeed articles={this.state.articles} />
        }
    }
}

export default NewsFeedContainer;