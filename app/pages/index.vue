<script setup lang="ts">
import type {CityData} from '~/types/city'

// Fetch cities from API endpoint
const {data: cities} = await useFetch<CityData[]>('/api/cities')

// Active section state
const activeSection = ref<'komenda' | 'pzss'>('komenda')

const handleSectionChange = (section: 'komenda' | 'pzss') => {
  activeSection.value = section
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Składanie wniosków na broń
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Znajdź wszystkie informacje dotyczące składania wniosków w komendzie wojewódzkiej oraz PZSS
          </p>
        </div>
      </div>
    </section>

    <!-- Section Selector -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="flex gap-4 mb-8">
            <button
                @click="handleSectionChange('komenda')"
                :class="[
                  'flex-1 py-4 px-6 rounded-lg font-semibold text-center transition-colors',
                  activeSection === 'komenda'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
            >
              <div class="text-lg">Komenda Wojewódzka</div>
              <div class="text-sm opacity-80">Składanie wniosków o pozwolenia na broń</div>
            </button>
            <button
                @click="handleSectionChange('pzss')"
                :class="[
                  'flex-1 py-4 px-6 rounded-lg font-semibold text-center transition-colors',
                  activeSection === 'pzss'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
            >
              <div class="text-lg">PZSS</div>
              <div class="text-sm opacity-80">Licencje zawodnicze w Polskim Związku Strzelectwa Sportowego</div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Komenda Wojewódzka Section -->
    <section v-if="activeSection === 'komenda'" class="py-8 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Składanie wniosków w Komendzie Wojewódzkiej</h2>
            <p class="text-gray-600">Wybierz miasto, w którym chcesz złożyć wniosek o pozwolenie na broń sportową lub
              kolekcjonerską</p>
          </div>

          <div v-if="cities && cities.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
                v-for="city in cities"
                :key="city.slug"
                :to="`/miasta/${city.slug}`"
            >
              <CityCard :city="city"/>
            </NuxtLink>
          </div>

          <div v-else class="text-center py-12">
            <p class="text-gray-600">Brak dostępnych miast</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PZSS Section -->
    <section v-if="activeSection === 'pzss'" class="py-8 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Składanie wniosków do PZSS</h2>
            <p class="text-gray-600">Polski Związek Strzelectwa Sportowego - proces składania wniosków o licencje
              zawodnicze</p>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-8">
            <div class="space-y-6">
              <!-- Step 1 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Zaloguj się na swoje konto</h3>
                  <p class="text-gray-700 mb-2">
                    Zaloguj się na swoje konto w portalu
                    <a href="https://portal.pzss.org.pl/" target="_blank" rel="noopener noreferrer"
                       class="text-blue-600 hover:text-blue-700 underline">https://portal.pzss.org.pl/</a>
                    lub w systemie SOZ
                    <a href="https://soz.pzss.org.pl/" target="_blank" rel="noopener noreferrer"
                       class="text-blue-600 hover:text-blue-700 underline">https://soz.pzss.org.pl/</a>.
                  </p>
                  <p class="text-sm text-gray-600">Dane do logowania są takie same dla obu systemów.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Znajdź sekcję wniosków</h3>
                  <p class="text-gray-700">
                    W portalu przejdź do kategorii "Wnioski" lub "Licencje i Patenty". W systemie SOZ znajdź menu
                    "Wnioski".
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Złóż wniosek</h3>
                  <p class="text-gray-700 mb-2">
                    Wybierz "Złóż wniosek" i zaznacz odpowiedni typ wniosku (np. o nadanie lub przedłużenie licencji
                    zawodniczej).
                  </p>
                  <p class="text-sm text-gray-600">
                    W przypadku pierwszej licencji możesz ją uzyskać, przechodząc do "Licencje i Patenty" i zaznaczając
                    "uzyskaj nową licencję".
                  </p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Uzupełnij dane</h3>
                  <p class="text-gray-700">
                    System automatycznie uzupełni niektóre Twoje dane. Uzupełnij brakujące informacje, które są
                    oznaczone czerwoną gwiazdką, a także załącz wymagane skany (np. zdjęcia legitymacyjne).
                  </p>
                </div>
              </div>

              <!-- Step 5 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Potwierdź i wydrukuj</h3>
                  <p class="text-gray-700">
                    Gdy wszystkie dane są uzupełnione, kliknij "Zapisz". Następnie zaznacz odpowiednie zakresy strzelań
                    i kliknij "wyślij wniosek".
                  </p>
                </div>
              </div>

              <!-- Step 6 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Dokonaj opłat</h3>
                  <p class="text-gray-700">
                    Po złożeniu wniosku uiść wymagane opłaty za licencję oraz składkę członkowską zgodnie z instrukcją
                    podaną na portalu.
                  </p>
                </div>
              </div>

              <!-- Step 7 -->
              <div class="flex gap-4">
                <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  7
                </div>
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Oczekuj na zatwierdzenie</h3>
                  <p class="text-gray-700">
                    Wniosek najpierw zostanie zatwierdzony przez Twój klub, a następnie przez Wojewódzki Związek
                    Strzelectwa Sportowego (WZSS), co jest warunkiem rozpoczęcia procesu rozpatrywania wniosku przez
                    PZSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white border border-gray-200 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Informacje ogólne</h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              W tej sekcji znajdziesz szczegółowe informacje dotyczące składania wniosków
              o wydanie pozwolenia na broń sportową, kolekcjonerską oraz dopuszczenia do pracy
              z bronią w różnych Wydziałach Postępowań Administracyjnych w Polsce.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Każde miasto może mieć różne wymagania, opłaty i procedury. Wybierz interesujące
              Cię miasto z listy powyżej, aby zobaczyć wszystkie szczegóły.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
