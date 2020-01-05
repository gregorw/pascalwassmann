const contentful = require('contentful')

function createClient () {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
}

export default createClient
