import React from 'react';
import PropTypes from 'prop-types';
import '../css/articleFeed.css';

//Renders a list of tweets with links to the original tweet and the author
const TwitterFeed = props =>
    <div>
        <h2 className='article-list-title'>Toledo on Twitter</h2>
        <ul className='article-list'>
            {props.tweets.map((tweet, index) => {
                const articleParity = (index % 2 === 0 ? 'even-entry' : 'odd-entry')
                return (
                    <div className={'article-list-entry ' + articleParity} key={index}>
                        <a className='article-link' href={`https://twitter.com/${tweet.username}/status/${tweet.id}`} target='_blank' rel='noopener noreferrer'>{tweet.text}</a>
                        <br />{' - Tweeted by '}
                        <a className='article-link' href={`https://www.twitter.com/${tweet.username}`} target='_blank' rel='noopener noreferrer'>${tweet.username}</a>
                    </div>
                )
            })}
        </ul>
    </div>

export default TwitterFeed;

TwitterFeed.propTypes = {
    tweets: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
            link: PropTypes.string
        })
    )
}