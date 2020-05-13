const fetch = require('node-fetch');
const { getTwitchAccessToken } = require('@jlengstorf/get-twitch-oauth');

exports.handler = async (event) => {
  const { user_login } = JSON.parse(event.body);

  // get the server-to-server OAuth token from Twitch
  const { access_token } = await getTwitchAccessToken();

  // send an authenticated request to the Twitch API
  // see https://dev.twitch.tv/docs/api/reference#get-streams
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${user_login}`,
      {
        method: 'GET',
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${access_token}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err.message);
      });

    // Twitch response with 20 streams that are currently live
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err.message),
    };
  }
};
