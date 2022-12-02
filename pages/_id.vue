<template>
  <div class="page">
    <Back />
    <h1>{{ title }}</h1>
    <RichTextRenderer :document="body" :node-renderers="renderNodes()" />
  </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import createClient from '~/plugins/contentful'
import Back from '~/components/Back'
import ResponsiveImage from '~/components/ResponsiveImage'

const contentfulClient = createClient()

function preserveLinebreaks (text, h) {
  if (typeof text === 'string' || text instanceof String) {
    return text.split('\n').flatMap((part, i) => [i > 0 && h('br'), part])
  }
  return text
}

export default {
  name: 'Page',
  components: {
    Back,
    RichTextRenderer
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug': params.id
    }).then((response) => {
      const page = response.items[0]
      return page.fields
    })
  },
  methods: {
    renderNodes () {
      return {
        [BLOCKS.PARAGRAPH]: (node, _, h, text) => h('p', text(node.content).map(t => preserveLinebreaks(t, h))),
        [INLINES.ASSET_HYPERLINK]: (node, _, h, text) => {
          const target = node.data.target.fields
          const attributes = { domProps: { href: target.file.url, target: '_blank', title: target.title } }
          return h('a', attributes, text(node.content))
        },
        [INLINES.HYPERLINK]: (node, _, h, text) => {
          const attributes = { domProps: { href: node.data.uri, target: '_blank' } }
          return h('a', attributes, text(node.content))
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          return new ResponsiveImage({ propsData: { image: node } })
        }
      }
    }
  }
}
</script>
