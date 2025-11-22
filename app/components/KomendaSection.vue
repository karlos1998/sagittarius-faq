<script setup lang="ts">
import type {CityData} from '~/types/city'

interface Props {
  cities: CityData[] | null
}

defineProps<Props>()
</script>

<template>
  <section class="py-8 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Składanie wniosków w Komendzie Wojewódzkiej</h2>
          <p class="text-gray-600">Wybierz miasto, w którym chcesz złożyć wniosek o pozwolenie na broń sportową lub
            kolekcjonerską</p>
        </div>

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
</template>
