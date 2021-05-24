let Parser = require('rss-parser');
let parser = new Parser();

//Parses the local news RSS feed from the Toledo Blade website ad returns a list of article titles and links
exports.getNews = (req, res, next) => {
    parser.parseURL('https://www.toledoblade.com/rss/local/city')
        .then(response => {
            const articles = response.items.map(item => (
                {
                    title: item.title,
                    link: item.link
                }
            ))
            res.send({ articles: articles })

        })
        .catch(error => { next(error) })
}