<template>
  <section class="py-8 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <div class="mb-7 text-center">
          <h2 class="text-3xl font-extrabold text-blue-800 mb-3 drop-shadow">Materiały do nauki i przygotowań</h2>
          <p class="text-lg text-gray-700">PDFy, quizy, ustawy, regulaminy — wszystko do egzaminów i formalności</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- PDFy -->
          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
            <h3 class="text-xl font-bold text-indigo-800 mb-3">Najważniejsze materiały PDF</h3>
            <ul class="space-y-3">
              <li>
                <a href="/ustawa-o-broni.pdf" target="_blank"
                   class="font-semibold text-indigo-700 underline hover:text-indigo-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="8" height="2" rx="1" fill="#6366F1"/>
                    <rect x="6" y="8" width="8" height="2" rx="1" fill="#6366F1"/>
                    <rect x="6" y="12" width="8" height="2" rx="1" fill="#6366F1"/>
                  </svg>
                  Ustawa o broni i amunicji
                </a>
              </li>
              <li>
                <a href="/wzorcowy-regulamin-strzelnic.pdf" target="_blank"
                   class="font-semibold text-red-700 underline hover:text-red-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="12" height="2" rx="1" fill="#EF4444"/>
                    <rect x="4" y="8" width="12" height="2" rx="1" fill="#EF4444"/>
                    <rect x="4" y="12" width="12" height="2" rx="1" fill="#EF4444"/>
                  </svg>
                  Wzorcowy regulamin strzelnic
                </a>
              </li>
              <li>
                <a href="/rozporzadzenie-o-przechowywaniu.pdf" target="_blank"
                   class="font-semibold text-blue-700 underline hover:text-blue-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" x="2" y="4" rx="1" fill="#3B82F6"/>
                    <rect width="16" height="2" x="2" y="8" rx="1" fill="#3B82F6"/>
                    <rect width="16" height="2" x="2" y="12" rx="1" fill="#3B82F6"/>
                  </svg>
                  Rozporządzenie o przechowywaniu broni
                </a>
              </li>
            </ul>
          </div>

          <!-- Quizy i strony -->
          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 class="text-xl font-bold text-pink-800 mb-3">Quizy, kompendia i interaktywne materiały</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/kompendium"
                          class="font-semibold text-pink-700 underline hover:text-pink-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="8" height="2" rx="1" fill="#EC4899"/>
                    <rect x="6" y="8" width="8" height="2" rx="1" fill="#EC4899"/>
                    <rect x="6" y="12" width="8" height="2" rx="1" fill="#EC4899"/>
                  </svg>
                  Kompendium egzaminacyjne
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/skrocona-ustawa-o-broni-i-amunicji"
                          class="font-semibold text-orange-700 underline hover:text-orange-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" x="2" y="4" rx="1" fill="#F59E42"/>
                    <rect width="16" height="2" x="2" y="8" rx="1" fill="#F59E42"/>
                    <rect width="16" height="2" x="2" y="12" rx="1" fill="#F59E42"/>
                  </svg>
                  Skrócona ustawa o broni i amunicji
                </NuxtLink>
              </li>
              <li>
                <a href="https://egzaminy.kssagittarius.pl/" target="_blank"
                   class="font-semibold text-indigo-700 underline hover:text-indigo-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="12" height="2" rx="1" fill="#818CF8"/>
                    <rect x="4" y="8" width="12" height="2" rx="1" fill="#818CF8"/>
                    <rect x="4" y="12" width="12" height="2" rx="1" fill="#818CF8"/>
                  </svg>
                  Ćwicz pytania egzaminacyjne
                </a>
              </li>
              <li>
                <NuxtLink to="/ustawa-o-broni-i-amunicji"
                          class="font-semibold text-orange-700 underline hover:text-orange-900 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" x="2" y="4" rx="1" fill="#F59E42"/>
                    <rect width="16" height="2" x="2" y="8" rx="1" fill="#F59E42"/>
                    <rect width="16" height="2" x="2" y="12" rx="1" fill="#F59E42"/>
                  </svg>
                  Pełna ustawa o broni i amunicji
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pozostałe rekomendowane zasoby -->
        <div class="mt-10 bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
          <h3 class="text-xl font-bold text-green-800 mb-3">Pozostałe przydatne zasoby</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/zasady-bezpieczenstwa"
                        class="font-semibold text-green-700 underline hover:text-green-900 flex items-center gap-2">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="2" x="2" y="4" rx="1" fill="#4ADE80"/>
                  <rect width="16" height="2" x="2" y="8" rx="1" fill="#4ADE80"/>
                  <rect width="16" height="2" x="2" y="12" rx="1" fill="#4ADE80"/>
                </svg>
                Ogólne zasady bezpieczeństwa w sporcie strzeleckim
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rozporzadzenie-transport"
                        class="font-semibold text-indigo-700 underline hover:text-indigo-900 flex items-center gap-2">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="2" x="2" y="4" rx="1" fill="#818CF8"/>
                  <rect width="16" height="2" x="2" y="8" rx="1" fill="#818CF8"/>
                  <rect width="16" height="2" x="2" y="12" rx="1" fill="#818CF8"/>
                </svg>
                Rozporządzenie o przewożeniu broni środkami transportu publicznego
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
