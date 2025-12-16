<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'

interface Props {
  promesy: PromesaData[] | null
}

defineProps<Props>()
</script>

<template>
  <section class="py-8 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Złóż wniosek o nadanie promes</h2>
          <p class="text-gray-600">Wybierz miasto, w którym chcesz złożyć wniosek o zaświadczenie uprawniające do zakupu
            broni (promesę)</p>
        </div>

        <div v-if="promesy && promesy.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
              v-for="promesa in promesy"
              :key="promesa.slug"
              :to="`/promesy/${promesa.slug}`"
          >
            <PromesaCard :promesa="promesa"/>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-12">
          <p class="text-gray-600">Brak dostępnych miast</p>
        </div>
      </div>
    </div>
  </section>
</template>
