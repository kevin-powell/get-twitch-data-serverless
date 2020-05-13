# Get Twitch Data Using OAuth and Netlify Functions

This is an example of using serverless functions to get a Twitch server-to-server OAuth token, which is [required as of May 11, 2020](https://discuss.dev.twitch.tv/t/requiring-oauth-for-helix-twitch-api-endpoints/23916/80). This uses Netlify Functions so we can avoid setting up a server, which keeps our bots running for free and without a bunch of extra hassle.

## Deploy this site to your Netlify account

Click this button to fork this repo and deploy this site to your own Netlify account. You’ll be prompted for your Twitch app’s client ID and secret.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/get-twitch-data-serverless)
