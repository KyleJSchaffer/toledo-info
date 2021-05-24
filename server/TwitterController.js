let Twitter = require('twitter');
const config = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
}
const twitter = new Twitter(config)

//Returns 10 recent tweets with the "Toledo" hashtag
exports.getTweets = (req, res, next) => {
    //Parameters for API request
    const params = {
        q: '#toledo',
        count: 10,
        result_type: 'recent',
        lang: 'en',
        tweet_mode: 'extended'
    }

    //Request the tweet data from the Twitter API
    twitter.get('search/tweets', params, (err, data, response) => {
        if (!err) {
            const tweets = data.statuses.map(tweet => {
                let text;
                //Gets the tweets full text even if it is a retweet
                if (tweet.retweeted_status) {
                    text = tweet.retweeted_status.full_text
                } else {
                    text = tweet.full_text
                }
                return {
                    text: text,
                    username: tweet.user.screen_name,
                    id: tweet.id_str
                }
            })
            res.send({ tweets: tweets })
        } else {
            next();
        }
    })
}
