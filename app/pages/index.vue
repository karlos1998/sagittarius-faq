<script setup lang="ts">
import type {CityData} from '~/types/city'

// Fetch cities from API endpoint
const {data: cities} = await useFetch<CityData[]>('/api/cities')

// Active section state
const activeSection = ref<'komenda' | 'pzss' | 'materialy'>('komenda')

const handleSectionChange = (section: 'komenda' | 'pzss' | 'materialy') => {
  activeSection.value = section
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection/>

    <!-- Section Selector -->
    <SectionSelector
        :active-section="activeSection"
        @section-change="handleSectionChange"
    />

    <!-- Komenda Wojewódzka Section -->
    <KomendaSection v-if="activeSection === 'komenda'" :cities="cities || null"/>

    <!-- PZSS Section -->
    <PzssSection v-if="activeSection === 'pzss'"/>

    <MaterialySection v-if="activeSection === 'materialy'"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>
