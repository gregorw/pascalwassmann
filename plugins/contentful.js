const contentful = require('contentful')

module.exports = {
  createClient () {
    return contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  }
}
