<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'
import { onMounted, nextTick } from 'vue'

// Fetch promesy from API endpoint
const {data: promesy} = await useFetch<PromesaData[]>('/api/promesy')

// Auto-scroll to section on page load
onMounted(() => {
  nextTick(() => {
    const sectionElement = document.querySelector('[data-section="promesy"]')
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

    <!-- Promesy Section -->
    <PromesySection data-section="promesy" :promesy="promesy || null"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>
