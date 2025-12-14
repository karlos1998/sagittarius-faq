<template>
  <transition name="slide-up">
    <div v-if="show"
         class="fixed left-0 right-0 bottom-0 z-50 bg-white text-black border-t border-gray-300 px-4 py-3 shadow-lg flex items-center justify-between"
         style="max-width: 100vw;">
      <div class="flex flex-col md:flex-row md:items-center gap-1">
        <span class="font-semibold">Zainstaluj aplikację na swoim telefonie!</span>
        <span class="text-xs text-gray-500">Wygodniejszy dostęp offline i na pulpicie.</span>
      </div>
      <div class="flex gap-2 ml-4">
        <button @click="installPwa"
                class="bg-black text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800 transition-colors">Zainstaluj
        </button>
        <button @click="hideBanner"
                class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition-colors">
          Zamknij
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const show = ref(false)
let deferredPrompt: Event | null = null

function hideBanner() {
  show.value = false
}

function installPwa() {
  if (deferredPrompt && 'prompt' in deferredPrompt && 'userChoice' in deferredPrompt) {
    (deferredPrompt as any).prompt()
    (deferredPrompt as any).userChoice.then(() => {
      deferredPrompt = null
      hideBanner()
    })
  }
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    show.value = true
  })
})
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to, .slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
