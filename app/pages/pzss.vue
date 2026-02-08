<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector/>

    <!-- PZSS Section -->
    <PzssSection data-section="pzss"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>

<script setup>
// Auto-scroll to section on page load
import { onMounted, nextTick } from 'vue'
onMounted(() => {
  nextTick(() => {
    const sectionElement = document.querySelector('[data-section="pzss"]')
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
</script>
