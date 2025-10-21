<script setup lang="ts">
import type {CityData} from '~/types/city'

const route = useRoute()

const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug

const {data: city} = await useAsyncData(`city-${slug}`, async () => {
  const cities = await queryContent<CityData>('cities')
      .where('slug', '=', slug)
      .findOne()

  console.log('Found city:', cities)
  return cities
})

if (!city.value) {
  throw createError({
    statusCode: 404,
    message: 'Miasto nie zostało znalezione'
  })
}

useHead({
  title: `${city.value.city} - Sagittarius FAQ`,
  meta: [
    {
      name: 'description',
      content: `Informacje o składaniu wniosków na broń w ${city.value.city}`
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

        <!-- City Details -->
        <CityDetails v-if="city" :city="city"/>
      </div>
    </div>
  </div>
</template>
