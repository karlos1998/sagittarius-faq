<script setup lang="ts">
import type {CityData} from '~/types/city'

interface Props {
  city: CityData
}

defineProps<Props>()
</script>

<template>
  <UCard class="hover:shadow-lg transition-shadow cursor-pointer">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold text-gray-900">{{ city.city }}</h3>
        <UBadge color="neutral" variant="subtle">WPA</UBadge>
      </div>
    </template>

    <div class="space-y-4">
      <div>
        <p class="text-sm font-medium text-gray-700 mb-1">Departament</p>
        <p class="text-sm text-gray-600">{{ city.department }}</p>
      </div>

      <div>
        <p class="text-sm font-medium text-gray-700 mb-1">Adres</p>
        <p class="text-sm text-gray-600">
          {{ city.shipping.street }}<br>
          {{ city.shipping.postal_code }} {{ city.shipping.city }}
        </p>
      </div>

      <div v-if="city.shipping.phone || city.shipping.email" class="space-y-1">
        <p v-if="city.shipping.phone" class="text-sm text-gray-600">
          <span class="font-medium">Tel:</span> {{ city.shipping.phone }}
        </p>
        <p v-if="city.shipping.email" class="text-sm text-gray-600">
          <span class="font-medium">Email:</span> {{ city.shipping.email }}
        </p>
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-between">
        <div class="text-xs text-gray-500">
          <span class="font-medium">Opłaty:</span> {{ city.payment.fees.reduce((sum, fee) => sum + fee.amount, 0) }} zł
        </div>
        <UButton color="neutral" variant="ghost" size="sm" trailing-icon="i-heroicons-arrow-right">
          Szczegóły
        </UButton>
      </div>
    </template>
  </UCard>
</template>
