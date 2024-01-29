<script setup lang="ts">
const props = defineProps<{
  dot: BackgroundDot
}>()

const style = computed(() => ({
  top: `${props.dot.style.top}%`,
  left: `${props.dot.style.left}%`,
}))
</script>

<template>
  <div class="dot" :style="style" />
</template>

<style scoped>
.dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
