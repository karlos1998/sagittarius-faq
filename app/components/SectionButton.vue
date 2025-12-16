<script setup lang="ts">
interface Props {
  id: string
  title: string
  description: string
  isActive: boolean
}

defineProps<Props>()
</script>

<template>
  <button
      :class="[
        'flex-1 py-4 px-6 rounded-lg font-semibold text-center transition-colors',
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
  >
    <div class="text-lg">{{ title }}</div>
    <div class="text-sm opacity-80">{{ description }}</div>
  </button>
</template>
