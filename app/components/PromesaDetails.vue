<script setup lang="ts">
import type {PromesaData} from '~/types/promesa'

interface Props {
  promesa: PromesaData
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ promesa.city }}</h1>
      <p class="text-gray-700">Zaświadczenie uprawniające do zakupu broni (Promesa)</p>
    </div>

    <!-- Payment Information -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Informacje o płatności</h2>
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-700 mb-1">Numer konta</p>
            <p class="font-mono text-gray-900 text-lg">{{ promesa.account_number }}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-700 mb-3">Opłata</p>
            <div class="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <span class="text-sm text-gray-900">Opłata za wydanie zaświadczenia dla <b>IMIE I NAZWISKO</b></span>
              <span class="font-bold text-gray-900">{{ promesa.fee }} zł</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PDF Document -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Wniosek do pobrania</h2>
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <div class="space-y-4">
          <!-- Download Button -->
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-700">Pobierz formularz wniosku o wydanie zaświadczenia</p>
            <a
                :href="promesa.pdf_path"
                download
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Pobierz PDF
            </a>
          </div>

          <!-- PDF Viewer -->
          <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 600px;">
            <iframe
                :src="promesa.pdf_path"
                class="w-full"
                style="height: 600px; border: none;"
                title="Wniosek o wydanie zaświadczenia uprawniającego do zakupu broni"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Important Notes -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Ważne informacje</h2>
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <ul class="space-y-2 text-sm text-blue-900">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"/>
            </svg>
            Wypełnij dokument czytelnie, najlepiej drukowanymi literami lub na komputerze
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"/>
            </svg>
            Dołącz potwierdzenie wpłaty {{ promesa.fee }} zł na wskazany numer konta
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"/>
            </svg>
            Wniosek złóż osobiście w komendzie lub wyślij listem poleconym
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
