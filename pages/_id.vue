<template>
  <div class="page">
    <Back />
    <h1>{{ title }}</h1>
    <RichTextRenderer :document="body" :node-renderers="renderNodes()" />
  </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import createClient from '~/plugins/contentful'
import Back from '~/components/Back'

const contentfulClient = createClient()

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
        [BLOCKS.PARAGRAPH] (node, key, h, next) {
          const preservedNewlines = next(node.content).map((text) => {
            if (typeof text === 'string' || text instanceof String) {
              const withNewlines = text.split('\n').map(part => [part, h('br')]).flat()
              withNewlines.pop()
              return withNewlines
            }
            return text
          })
          return h('p', preservedNewlines)
        }
      }
    }
  }
}
</script>
