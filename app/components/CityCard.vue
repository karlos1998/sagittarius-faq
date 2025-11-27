<script setup lang="ts">
import type {CityData} from '~/types/city'

interface Props {
  city: CityData
}

defineProps<Props>()
</script>

<template>
  <div
      class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold text-gray-900">{{ city.city }}</h3>
      <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">WPA</span>
    </div>

    <!-- Content -->
    <div class="space-y-4 flex-grow">
      <div>
        <p class="text-sm font-medium text-gray-900 mb-1">Departament</p>
        <p class="text-sm text-gray-600">{{ city.department }}</p>
      </div>

      <div>
        <p class="text-sm font-medium text-gray-900 mb-1">Adres</p>
        <p class="text-sm text-gray-600">
          {{ city.shipping.street }}<br>
          {{ city.shipping.postal_code }} {{ city.shipping.city }}
        </p>
      </div>

      <div v-if="city.shipping.phone || city.shipping.email" class="space-y-1">
        <p v-if="city.shipping.phone" class="text-sm text-gray-600">
          <span class="font-medium text-gray-900">Tel:</span> {{ city.shipping.phone }}
        </p>
        <p v-if="city.shipping.email" class="text-sm text-gray-600">
          <span class="font-medium text-gray-900">Email:</span> {{ city.shipping.email }}
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
<!--      <div class="text-sm text-gray-600">-->
<!--        <span class="font-medium text-gray-900">Opłaty:</span>-->
<!--        {{ city.payment.fees.reduce((sum, fee) => sum + fee.amount, 0) }} zł-->
<!--      </div>-->
      <div class="flex items-center text-sm font-medium text-blue-600">
        Szczegóły
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  </div>
</template>
