<script setup lang="ts">
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  background: {
    color: {
      value: '#e7e5e4'
    }
  },
  particles: {
    color: {
      value: "#a8a29e"
    },
    links: {
      color: "#78716c",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}
</script>

<template>
  <NuxtParticles id="tsparticles" :options="options">
  </NuxtParticles>
</template>
