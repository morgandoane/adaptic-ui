const REACT_APP_AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const REACT_APP_AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const REACT_APP_AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;
const REACT_APP_API_URI = process.env.REACT_APP_API_URI;

if (!REACT_APP_AUTH0_DOMAIN)
    throw new Error('Failed to find REACT_APP_AUTH0_DOMAIN in env.');

if (!REACT_APP_AUTH0_CLIENT_ID)
    throw new Error('Failed to find REACT_APP_AUTH0_CLIENT_ID in env.');

if (!REACT_APP_AUTH0_AUDIENCE)
    throw new Error('Failed to find REACT_APP_AUTH0_AUDIENCE in env.');

if (!REACT_APP_API_URI)
    throw new Error('Failed to find REACT_APP_API_URI in env.');

export const env = {
    REACT_APP_AUTH0_DOMAIN,
    REACT_APP_AUTH0_CLIENT_ID,
    REACT_APP_AUTH0_AUDIENCE,
    REACT_APP_API_URI,
};
