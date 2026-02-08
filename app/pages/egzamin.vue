<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector/>

    <!-- Egzamin Section -->
    <EgzaminSection data-section="egzamin"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>

<script setup>
// Auto-scroll to section on page load
import { onMounted, nextTick } from 'vue'
onMounted(() => {
  nextTick(() => {
    const sectionElement = document.querySelector('[data-section="egzamin"]')
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
</script>
