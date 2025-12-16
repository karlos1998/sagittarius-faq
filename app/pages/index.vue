<script setup lang="ts">
import type {CityData} from '~/types/city'
import type {PromesaData} from '~/types/promesa'

// Fetch cities from API endpoint
const {data: cities} = await useFetch<CityData[]>('/api/cities')
const {data: promesy} = await useFetch<PromesaData[]>('/api/promesy')

// Active section state
const activeSection = ref<'komenda' | 'pzss' | 'materialy' | 'promesy'>('komenda')

const handleSectionChange = (section: 'komenda' | 'pzss' | 'materialy' | 'promesy') => {
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

    <!-- Promesy Section -->
    <PromesySection v-if="activeSection === 'promesy'" :promesy="promesy || null"/>

    <!-- PZSS Section -->
    <PzssSection v-if="activeSection === 'pzss'"/>

    <MaterialySection v-if="activeSection === 'materialy'"/>

    <!-- Info Section -->
    <InfoSection/>
  </div>
</template>
