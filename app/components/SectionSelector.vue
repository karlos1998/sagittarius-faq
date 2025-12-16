<script setup lang="ts">
import SectionButton from "~/components/SectionButton.vue";

interface Props {
  activeSection: 'komenda' | 'pzss' | 'materialy'
}

const emit = defineEmits<{
  sectionChange: [section: 'komenda' | 'pzss' | 'materialy']
}>()

defineProps<Props>()

const sections = [
  {
    id: 'komenda' as const,
    title: 'Komenda Wojewódzka',
    description: 'Składanie wniosków o pozwolenia na broń'
  },
  {
    id: 'pzss' as const,
    title: 'PZSS',
    description: 'Licencje zawodnicze w Polskim Związku Strzelectwa Sportowego'
  },
  {
    id: 'materialy' as const,
    title: 'Materiały do nauki',
    description: 'PDFy, quizy, ustawy, regulaminy – całość do przygotowań'
  }
]
</script>

<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <SectionButton
              v-for="section in sections"
              :id="section.id"
              :key="section.id"
              :title="section.title"
              :description="section.description"
              :is-active="activeSection === section.id"
              @click="emit('sectionChange', section.id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
