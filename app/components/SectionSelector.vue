<script setup lang="ts">
interface Props {
  activeSection: 'komenda' | 'pzss'
}

const emit = defineEmits<{
  sectionChange: [section: 'komenda' | 'pzss']
}>()

defineProps<Props>()
</script>

<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex gap-4 mb-8">
          <button
              @click="emit('sectionChange', 'komenda')"
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
              @click="emit('sectionChange', 'pzss')"
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
</template>
