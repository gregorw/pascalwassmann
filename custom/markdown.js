const md = require('markdown-it')({ breaks: true })

export default (markdown) => {
  return md.render(markdown || '')
}
