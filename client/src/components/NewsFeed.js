import React from 'react';
import PropTypes from 'prop-types';
import '../css/articleFeed.css'

//Renders a list of the provided articles headlines with links to the source
const NewsFeed = props =>
    <div>
        <h2 className='article-list-title'>Local News via <a href='https://www.toledoblade.com/' target='_blank' rel='noopener noreferrer'>The Toledo Blade</a></h2>
        <ul className='article-list'>
            {props.articles.map((article, index) => {
                const articleParity = (index % 2 === 0 ? 'even-entry' : 'odd-entry')
                return (
                    <div className={'article-list-entry ' + articleParity} key={index}>
                        <a className='article-link' href={article.link} target='_blank' rel='noopener noreferrer'>{article.title}</a>
                    </div>
                )
            })}
        </ul>
    </div>

export default NewsFeed;

NewsFeed.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string
        })
    )
}