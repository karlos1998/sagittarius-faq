<script setup lang="ts">
import type {CityData} from '~/types/city'

// Fetch cities from API endpoint
const {data: cities} = await useFetch<CityData[]>('/api/cities')

// Auto-scroll to section on page load
onMounted(() => {
  nextTick(() => {
    const sectionElement = document.querySelector('[data-section="komenda"]')
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector/>

    <!-- Komenda Wojewódzka Section -->
    <KomendaSection data-section="komenda" :cities="cities || null"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>
