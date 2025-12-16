<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'

interface Props {
  promesa: PromesaData
}

defineProps<Props>()
</script>

<template>
  <div
      class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold text-gray-900">{{ promesa.city }}</h3>
      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Promesa</span>
    </div>

    <!-- Content -->
    <div class="space-y-4 flex-grow">
      <div>
        <p class="text-sm font-medium text-gray-900 mb-1">Numer konta</p>
        <p class="text-sm text-gray-600 font-mono">{{ promesa.account_number }}</p>
      </div>

      <div>
        <p class="text-sm font-medium text-gray-900 mb-1">Opłata</p>
        <p class="text-sm text-gray-600">{{ promesa.fee }} zł</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
      <div class="flex items-center text-sm font-medium text-blue-600">
        Szczegóły i wniosek
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  </div>
</template>
