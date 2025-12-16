<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'

const route = useRoute()

const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug

const {data: promesa} = await useFetch<PromesaData>(`/api/promesy/${slug}`)

if (!promesa.value) {
  throw createError({
    statusCode: 404,
    message: 'Promesa nie została znaleziona'
  })
}

useHead({
  title: `${promesa.value.city} - Promesa - Sagittarius FAQ`,
  meta: [
    {
      name: 'description',
      content: `Wniosek o nadanie promesy (zaświadczenia uprawniającego do zakupu broni) w ${promesa.value.city}`
    }
  ]
})
</script>

<template>
  <div class="py-8">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <!-- Back Button -->
        <div class="mb-6">
          <NuxtLink
              to="/"
              class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Powrót do listy miast
          </NuxtLink>
        </div>

        <!-- Promesa Details -->
        <PromesaDetails v-if="promesa" :promesa="promesa"/>
      </div>
    </div>
  </div>
</template>
