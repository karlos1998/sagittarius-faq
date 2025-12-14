<script setup lang="ts">
const {data: doc} = await useAsyncData('ustawa', () =>
    queryCollection('content').path('/ustawa-o-broni-i-amunicji').first()
)
</script>

<template>
  <div class="bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen py-6 md:py-14">
    <div class="mx-auto max-w-4xl px-2 md:px-4">
      <h1 class="text-3xl md:text-5xl font-extrabold text-center text-black mb-4 md:mb-8 tracking-tight leading-tight drop-shadow-sm">
        Ustawa o broni i amunicji (pełna wersja)
      </h1>
      <div class="rounded-xl md:rounded-2xl shadow-xl bg-white px-1 md:px-8 py-5 md:py-10">
        <!-- EXTREMELY FORCE all headers/lists/etc to black using deep selectors & !important -->

        <a href="/ustawa-o-broni.pdf" target="_blank"
           class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow transition text-sm flex gap-2 items-center">
          <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="5" width="8" height="2" rx="1" fill="#6366F1"/>
            <rect x="8" y="9" width="8" height="2" rx="1" fill="#6366F1"/>
            <rect x="8" y="13" width="8" height="2" rx="1" fill="#6366F1"/>
          </svg>
          Kliknij tutaj, jeśli wolisz wersję PDF do pobrania
        </a>

        <div class="prose max-w-none" style="color:#111!important;">
          <ContentRenderer v-if="doc" :value="doc"/>
          <div v-else class="text-center text-lg text-gray-400">Nie znaleziono tekstu ustawy.</div>
        </div>
      </div>
      <div class="mt-12 flex flex-col items-center">
        <NuxtLink to="/skrocona-ustawa-o-broni-i-amunicji"
                  class="w-full max-w-xs px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition text-center">
          Przeczytaj skróconą wersję ustawy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose :is(h1,h2,h3,h4,h5,h6,p,li,pre,strong,code,span,ol,ul,a,blockquote,em,hr) {
  color: #111 !important;
  background: transparent !important;
}
</style>
