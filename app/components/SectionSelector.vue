<script setup lang="ts">
import SectionButton from "~/components/SectionButton.vue";
import { useRoute } from 'nuxt/app'
import { NuxtLink } from '#components'

const route = useRoute()

const sections = [
  {
    id: 'komenda' as const,
    route: '/komenda',
    title: 'Komenda Wojewódzka',
    description: 'Składanie wniosków o pozwolenia na broń'
  },
  {
    id: 'promesy' as const,
    route: '/promesy',
    title: 'Promesy',
    description: 'Złóż wniosek o nadanie promes'
  },
  {
    id: 'pzss' as const,
    route: '/pzss',
    title: 'PZSS',
    description: 'Licencje zawodnicze w Polskim Związku Strzelectwa Sportowego'
  },
  {
    id: 'materialy' as const,
    route: '/materialy',
    title: 'Materiały do nauki',
    description: 'PDFy, quizy, ustawy, regulaminy – całość do przygotowań'
  },
  {
    id: 'egzamin' as const,
    route: '/egzamin',
    title: 'Egzamin',
    description: 'Przygotuj się do egzaminu'
  }
]
</script>

<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <NuxtLink 
            v-for="section in sections" 
            :key="section.id" 
            :to="section.route"
          >
            <SectionButton
              :id="section.id"
              :title="section.title"
              :description="section.description"
              :is-active="route.path === section.route"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
