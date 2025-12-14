<script setup lang="ts">
import {useRoute} from 'vue-router'
import {useHead} from '@unhead/vue'

const props = defineProps({
  title: {type: String, required: true},
  description: {type: String, required: true},
  keywords: {type: String, default: ''},
  canonical: {type: String, default: ''},
  image: {type: String, default: ''},
  noindex: {type: Boolean, default: false},
})

const route = useRoute()
const baseUrl = 'https://pomoc.kssagittarius.pl/'
const url = baseUrl + (props.canonical ? props.canonical : route.fullPath)

useHead({
  title: props.title,
  meta: [
    {name: 'description', content: props.description},
    {name: 'keywords', content: props.keywords || ''},
    {name: 'robots', content: props.noindex ? 'noindex, nofollow' : 'index, follow'},
    // OpenGraph
    {property: 'og:title', content: props.title},
    {property: 'og:description', content: props.description},
    {property: 'og:type', content: 'website'},
    {property: 'og:url', content: url},
    props.image ? {property: 'og:image', content: baseUrl + props.image} : {},
    // Twitter
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: props.title},
    {name: 'twitter:description', content: props.description},
    props.image ? {name: 'twitter:image', content: baseUrl + props.image} : {},
    // Canonical
    {rel: 'canonical', href: url}
  ].filter(Boolean),
})
</script>
