<template>
  <div class="bg-white shadow-xl rounded-2xl p-7 mb-8 border-l-8" :class="`border-${color}-900`">
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true
  }
})
</script>
