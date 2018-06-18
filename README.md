# Fake MTA service changes
A bot that listens for tweets from [@NYCTSubway](http://twitter.com/NYCTSubway) and retweets them along with a fake service change announcement. Follow [@NotMTA](http://twitter.com/notmta) to see it in action!

## Usage
1. `yarn install`
2. `yarn dev` to inspect some individual modules (served at `localhost:5000`):
    - `/change`: text of a randomly-generated service change announcement.
    - `/bullet`: a randomly-generated service bullet (the colored logos for each train line) using the MTA's font, layout and color schemes. In the future, this module could be used to generate fake service change posters like the ones you see hanging in the station.
    - `/reason`: just a randomly-generated reasons for the service change.
3. `cp .env.example .env` and configure envs. You'll need [credentials from your Twitter account](http://apps.twitter.com/) for the Twitter envs, and you must specify a PostgreSQL production database URL. If you do not specify a staging database URL, it will use the production database. If you do not specify a development database URL, it will default sqlite (`./dev.sqlite3`) for development.
4. Configure envs `track` and `NODE_ENV`. When `track=actual`, the actual NYCTSubway account is monitored. Otherwise, the phrase 'javascript' is passed to the streaming filter, to ensure plenty of tweets to test the settings. `NODE_ENV=production` enables sending of tweets, in addition to `console.log`ing them.
5. `knex migrate:latest` (you'll need to `npm install -g knex` first)
6. `yarn devstream` to connect to the Twitter Streaming API and start sending tweets.
