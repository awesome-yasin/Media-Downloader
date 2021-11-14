const instagram_download = require ('./instaGraphQl');

async function instagramGraphql(instaurl) 
{
  const value = await instagram_download.downloadMedia(instaurl)
  return Promise.resolve(value);
};

module.exports = instagramGraphql;