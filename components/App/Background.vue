<script setup lang="ts">
const numberOfDots = 50
const maxConnectionDistance = 100
const elasticity = 0.05

const dots = ref<BackgroundDot[]>([])
const lines = ref<BackgroundLine[]>([])

function createDot() {
  dots.value.push({
    style: {
      top: Math.random() * 100,
      left: Math.random() * 100,
    },
    velocityX: 0,
    velocityY: 0,
    targetLeft: Math.random() * window.innerWidth,
    targetTop: Math.random() * window.innerHeight,
  })
}

function connectDots(dot1: BackgroundDot, dot2: BackgroundDot) {
  const distance = Math.hypot(dot2.style.left - dot1.style.left, dot2.style.top - dot1.style.top)

  if (distance < maxConnectionDistance) {
    const line = {
      style: {
        width: distance,
        transform: `rotate(${Math.atan2(dot2.style.top - dot1.style.top, dot2.style.left - dot1.style.left)}rad)`,
        top: dot1.style.top,
        left: dot1.style.left,
      },
    }
    lines.value.push(line)
  }
}

function updateDots() {
  dots.value.forEach((dot) => {
    const dx = dot.targetLeft - dot.style.left
    const dy = dot.targetTop - dot.style.top

    dot.velocityX += dx * elasticity
    dot.velocityY += dy * elasticity

    dot.velocityX *= 0.9
    dot.velocityY *= 0.9

    dot.style.left = dot.style.left + dot.velocityX
    dot.style.top = dot.style.top + dot.velocityY
  })
}

onMounted(() => {
  for (let i = 0; i < numberOfDots; i++)
    createDot()

  dots.value.forEach((dot1, index1) => {
    dots.value.forEach((dot2, index2) => {
      if (index1 !== index2)
        connectDots(dot1, dot2)
    })
  })

  animate()
})

function animate() {
  updateDots()
  requestAnimationFrame(animate)
}
</script>

<template>
  <div class="container">
    <AppBackgroundDot v-for="(dot, index) in dots" :key="index" :dot="dot" />
    <AppBackgroundLine v-for="(line, index) in lines" :key="index" :line="line" />
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  pointer-events: none;
}
</style>
