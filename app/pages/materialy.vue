<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector/>

    <!-- Materialy Section -->
    <MaterialySection data-section="materialy"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>

<script setup>
// Auto-scroll to section on page load
import { onMounted, nextTick } from 'vue'
onMounted(() => {
  nextTick(() => {
    const sectionElement = document.querySelector('[data-section="materialy"]')
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
</script>
