<template>
  <ul :class="['list-disc list-inside space-y-2', customClass]">
    <slot/>
  </ul>
</template>

<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
})
</script>
