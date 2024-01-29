<script setup lang="ts">
const props = defineProps<{
  line: BackgroundLine
}>()

const style = computed(() => ({
  width: `${props.line.style.width}px`,
  top: `${props.line.style.top}%`,
  left: `${props.line.style.left}%`,
  transform: props.line.style.transform,
}))
</script>

<template>
  <div class="line" :style="style" />
</template>

<style scoped>
.line {
  position: absolute;
  height: 2px;
  background-color: #3498db;
  transform-origin: 0% 50%;
  z-index: 0;
}
</style>
