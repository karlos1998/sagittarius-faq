<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'

// Fetch promesy from API endpoint
const {data: promesy} = await useFetch<PromesaData[]>('/api/promesy')
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector/>

    <!-- Promesy Section -->
    <PromesySection :promesy="promesy || null"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>
