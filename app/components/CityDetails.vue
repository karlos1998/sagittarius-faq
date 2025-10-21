<script setup lang="ts">
import type {CityData} from '~/types/city'

interface Props {
  city: CityData
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ city.city }}</h1>
      <p class="text-gray-600">{{ city.department }}</p>
    </div>

    <!-- Payment Information -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Informacje o płatnościach</h2>
      <UCard>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-700">Odbiorca</p>
            <p class="text-gray-900">{{ city.payment.account_holder }}</p>
          </div>

          <div v-if="city.payment.bank">
            <p class="text-sm font-medium text-gray-700">Bank</p>
            <p class="text-gray-900">{{ city.payment.bank }}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-700">Numer konta</p>
            <p class="font-mono text-gray-900">{{ city.payment.account_number }}</p>
            <p v-if="city.payment.account_note" class="text-sm text-gray-600 mt-1">
              {{ city.payment.account_note }}
            </p>
          </div>

          <div v-if="city.payment.payment_location">
            <p class="text-sm font-medium text-gray-700">Miejsce wpłaty</p>
            <p class="text-gray-900">{{ city.payment.payment_location }}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-700 mb-2">Opłaty</p>
            <div class="space-y-2">
              <div
                  v-for="(fee, index) in city.payment.fees"
                  :key="index"
                  class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span class="text-sm text-gray-700">{{ fee.name }}</span>
                <span class="font-bold text-gray-900">{{ fee.amount }} zł</span>
              </div>
            </div>
          </div>

          <div v-if="city.payment.note" class="bg-blue-50 p-4 rounded-lg">
            <p class="text-sm text-blue-900">{{ city.payment.note }}</p>
          </div>
        </div>
      </UCard>
    </section>

    <!-- Shipping Address -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Adres do wysyłki</h2>
      <UCard>
        <div class="space-y-2">
          <p class="font-medium text-gray-900">{{ city.shipping.name }}</p>
          <p class="text-gray-700">{{ city.shipping.street }}</p>
          <p class="text-gray-700">{{ city.shipping.postal_code }} {{ city.shipping.city }}</p>

          <div v-if="city.shipping.phone || city.shipping.email" class="pt-3 mt-3 border-t border-gray-200">
            <p v-if="city.shipping.phone" class="text-gray-700">
              <span class="font-medium">Tel:</span> {{ city.shipping.phone }}
            </p>
            <p v-if="city.shipping.email" class="text-gray-700">
              <span class="font-medium">Email:</span> {{ city.shipping.email }}
            </p>
          </div>

          <div v-if="city.shipping.note" class="pt-3 mt-3 border-t border-gray-200">
            <UBadge color="info">{{ city.shipping.note }}</UBadge>
          </div>
        </div>
      </UCard>
    </section>

    <!-- Office Hours -->
    <section v-if="city.office_hours">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Godziny otwarcia</h2>
      <UCard>
        <div class="space-y-2">
          <p v-if="city.office_hours.days" class="text-gray-700">
            <span class="font-medium">Dni:</span> {{ city.office_hours.days }}
          </p>
          <p v-if="city.office_hours.hours" class="text-gray-700">
            <span class="font-medium">Godziny:</span> {{ city.office_hours.hours }}
          </p>
          <p v-if="city.office_hours.monday" class="text-gray-700">
            <span class="font-medium">Poniedziałek:</span> {{ city.office_hours.monday }}
          </p>
          <p v-if="city.office_hours.tuesday_thursday" class="text-gray-700">
            <span class="font-medium">Wtorek-Czwartek:</span> {{ city.office_hours.tuesday_thursday }}
          </p>
          <p v-if="city.office_hours.note" class="text-sm text-gray-600 mt-2">
            {{ city.office_hours.note }}
          </p>
        </div>
      </UCard>
    </section>

    <!-- Weapon Limits -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Limity broni</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Sport -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900">Broń sportowa</h3>
          </template>
          <div class="space-y-3">
            <div v-if="city.weapon_limits.sport.default" class="flex justify-between">
              <span class="text-gray-700">Domyślnie:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.sport.default }} szt.</span>
            </div>
            <div v-if="city.weapon_limits.sport.max" class="flex justify-between">
              <span class="text-gray-700">Maksymalnie:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.sport.max }} szt.</span>
            </div>
            <div v-if="city.weapon_limits.sport.with_competitions" class="flex justify-between">
              <span class="text-gray-700">Z zawodami:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.sport.with_competitions }} szt.</span>
            </div>
            <div class="pt-3 mt-3 border-t border-gray-200">
              <p class="text-sm text-gray-600 whitespace-pre-line">{{ city.weapon_limits.sport.description }}</p>
            </div>
          </div>
        </UCard>

        <!-- Collector -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900">Broń kolekcjonerska</h3>
          </template>
          <div class="space-y-3">
            <div v-if="city.weapon_limits.collector.default" class="flex justify-between">
              <span class="text-gray-700">Domyślnie:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.collector.default }} szt.</span>
            </div>
            <div v-if="city.weapon_limits.collector.max" class="flex justify-between">
              <span class="text-gray-700">Maksymalnie:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.collector.max }} szt.</span>
            </div>
            <div v-if="city.weapon_limits.collector.recommended" class="flex justify-between">
              <span class="text-gray-700">Zalecane:</span>
              <span class="font-bold text-gray-900">{{ city.weapon_limits.collector.recommended }} szt.</span>
            </div>
            <div class="pt-3 mt-3 border-t border-gray-200">
              <p class="text-sm text-gray-600 whitespace-pre-line">{{ city.weapon_limits.collector.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Additional Permits -->
    <section v-if="city.additional_permits.work_permit">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Dopuszczenia</h2>
      <UCard>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-medium text-gray-900">Dopuszczenie do pracy z bronią sportową</span>
            <UBadge color="success">{{ city.additional_permits.work_permit.fee }} zł</UBadge>
          </div>
          <p class="text-sm text-gray-600 whitespace-pre-line">
            {{ city.additional_permits.work_permit.description }}
          </p>
        </div>
      </UCard>
    </section>

    <!-- Document Submission -->
    <section v-if="city.document_submission && city.document_submission.length > 0">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Składanie dokumentów</h2>
      <UCard>
        <ul class="space-y-2">
          <li
              v-for="(item, index) in city.document_submission"
              :key="index"
              class="flex items-start"
          >
            <span class="text-gray-400 mr-2">•</span>
            <span class="text-gray-700">{{ item }}</span>
          </li>
        </ul>
      </UCard>
    </section>

    <!-- Important Notes -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Ważne uwagi</h2>
      <UCard>
        <ul class="space-y-3">
          <li
              v-for="(note, index) in city.important_notes"
              :key="index"
              class="flex items-start"
          >
            <span class="text-blue-500 mr-2">ℹ️</span>
            <span class="text-gray-700">{{ note }}</span>
          </li>
        </ul>
      </UCard>
    </section>
  </div>
</template>
