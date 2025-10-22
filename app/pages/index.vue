<script setup lang="ts">
import type {CityData} from '~/types/city'

// Fetch cities from API endpoint
const {data: cities} = await useFetch<CityData[]>('/api/cities')

</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Składanie wniosków na broń
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Znajdź wszystkie informacje dotyczące składania wniosków w poszczególnych miastach
          </p>
        </div>
      </div>
    </section>

    <!-- Cities Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Wybierz miasto</h2>

          <div v-if="cities && cities.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
                v-for="city in cities"
                :key="city.slug"
                :to="`/miasta/${city.slug}`"
            >
              <CityCard :city="city"/>
            </NuxtLink>
          </div>

          <div v-else class="text-center py-12">
            <p class="text-gray-600">Brak dostępnych miast</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <UCard>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Informacje ogólne</h3>
              <p class="text-gray-600 mb-4">
                W tej sekcji znajdziesz szczegółowe informacje dotyczące składania wniosków
                o wydanie pozwolenia na broń sportową, kolekcjonerską oraz dopuszczenia do pracy
                z bronią w różnych Wydziałach Postępowań Administracyjnych w Polsce.
              </p>
              <p class="text-gray-600">
                Każde miasto może mieć różne wymagania, opłaty i procedury. Wybierz interesujące
                Cię miasto z listy powyżej, aby zobaczyć wszystkie szczegóły.
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>
