<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center"
       style="background:rgba(0,0,0,0.10);backdrop-filter:blur(2px)">
    <div class="bg-white rounded-2xl shadow-2xl max-w-xs w-full p-6 text-center relative">
      <button @click="close" class="absolute top-4 right-6 text-xl font-bold text-gray-400 hover:text-gray-600">×
      </button>
      <Icon name="uil:facebook-f" class="mx-auto mb-3 text-blue-600" style="font-size:56px"/>
      <div class="text-lg font-bold text-blue-700 mb-2">Obserwujesz nas na Facebooku?</div>
      <div class="text-gray-700 mb-4">Kliknij poniżej i dołącz do naszej społeczności na Facebooku! Dzięki temu będziesz
        na bieżąco z aktualnościami.
      </div>
      <a href="https://www.facebook.com/profile.php?id=100052521345682" target="_blank" rel="noopener"
         class="block w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg mb-2">Obserwuj
        nas na Facebooku</a>
      <button @click="close"
              class="block w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-lg">
        Zamknij
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ show: boolean, close: () => void }>()
</script>
