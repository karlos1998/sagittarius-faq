<template>
  <section class="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <svg class="absolute opacity-20 top-0 right-0 w-64 h-64 text-blue-100" fill="currentColor" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="200"/>
      </svg>
      <svg class="absolute opacity-30 bottom-0 left-0 w-72 h-72 text-blue-300" fill="currentColor"
           viewBox="0 0 400 400">
        <rect x="50" y="50" width="300" height="300" rx="70"/>
      </svg>
    </div>
    <div class="relative z-10">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-10">
        <div class="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 leading-tight drop-shadow-lg">
            Twoja droga do<br>
            <span class="bg-blue-100 px-2 rounded-xl">pozwolenia na broń</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-7 md:mb-8">
            Najprościej, krok po kroku, przejdziesz od zgłoszenia do klubu aż po komplet dokumentów do WPA. <br>
            W każdym momencie znajdziesz instrukcję oraz wymagane materiały.
          </p>
          <div class="flex flex-col items-center md:items-start">
            <NuxtLink to="/jak-uzyskac-pozwolenie-na-bron-krok-po-kroku">
              <button
                  class="inline-flex items-center gap-3 text-lg md:text-xl bg-blue-600 hover:bg-blue-700 transition-colors shadow-xl text-white font-semibold py-4 px-8 rounded-2xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 mr-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1 4v-4m4 6H7a2 2 0 01-2-2V7a2 2 0 012-2h5.618a2 2 0 011.447.553l4.382 4.09A2 2 0 0120 10.09V18a2 2 0 01-2 2z"/>
                </svg>
                Jak uzyskać pozwolenie na broń – instrukcja krok po kroku
              </button>
            </NuxtLink>
            <span
                class="text-blue-700 text-base font-medium mb-6">Rozpocznij ścieżkę członkowską z klubem Sagittarius</span>
            <div class="mt-2">
              <button
                  class="inline-flex items-center gap-3 text-lg md:text-xl bg-green-500 hover:bg-green-600 transition-colors shadow-xl text-white font-semibold py-4 px-8 rounded-2xl mb-2 animate-bounce-slight"
                  @click="openQuiz"
                  style="box-shadow:0 0 0 5px #bbf7d0; border: 2px solid #22c55e">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 mr-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 17l4 4 4-4m-4-5v9"/>
                </svg>
                Sprawdź się w testach egzaminacyjnych!
              </button>
            </div>
            <!-- S1 Safe Info Box -->
            <div
                class="my-8 p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 flex items-center gap-4 shadow w-full max-w-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-500 flex-shrink-0" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M17.657 16.657a8 8 0 11-11.314 0 8 8 0 0111.314 0z"/>
              </svg>
              <div>
                <div class="text-lg font-semibold text-yellow-800 mb-1">Właśnie zrobiłeś pozwolenie na broń?</div>
                <div class="text-yellow-900 mb-1">W pierwszej kolejności musisz kupić atestowaną szafę klasy <b>S1</b>
                  na broń!
                </div>
                <a
                    href="https://militariaforty.pl/kategoria-produktu/szafy/"
                    target="_blank"
                    rel="noopener"
                    class="inline-block mt-2 px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white font-bold transition"
                >
                  Sprawdź polecane szafy S1
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Illustrative Onboarding SVG/graphic -->
        <div class="flex-1 flex items-center justify-center">
          <svg width="320" height="240" fill="none" viewBox="0 0 320 240">
            <rect width="320" height="240" rx="32" fill="#dbeafe"/>
            <circle cx="80" cy="90" r="50" fill="#2563eb" fill-opacity=".2"/>
            <circle cx="240" cy="90" r="40" fill="#6366f1" fill-opacity=".18"/>
            <rect x="120" y="140" width="80" height="26" rx="13" fill="#2563eb" fill-opacity=".45"/>
            <rect x="135" y="85" width="50" height="65" rx="11" fill="#fff" stroke="#2563eb" stroke-width="2.5"/>
            <path d="M140 130h40" stroke="#6366f1" stroke-width="2" stroke-linecap="round"/>
            <rect x="150" y="105" width="20" height="12" rx="3" fill="#6366f1"/>
            <circle cx="175" cy="110" r="3" fill="#2563eb"/>
            <rect x="158" y="116" width="4" height="5" rx="2" fill="#2563eb"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Delikatniejsza animacja bounce
import {onMounted} from 'vue'

onMounted(() => {
  const style = document.createElement('style')
  style.innerHTML = `.animate-bounce-slight { animation: bounce-slight 1.3s infinite; }
@keyframes bounce-slight {
  0%, 100% { transform: translateY(0); }
  15% { transform: translateY(-12px); }
  30% { transform: translateY(0); }
  55% { transform: translateY(-4px); }
  70% { transform: translateY(0); }
}`
  document.head.appendChild(style)
})
const openQuiz = () => {
  window.open('https://egzaminy.kssagittarius.pl/', '_blank')
}
</script>
