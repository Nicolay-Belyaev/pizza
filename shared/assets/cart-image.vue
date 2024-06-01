<script setup lang="ts">
  defineProps({
    height: {
      type: Number,
      required: true,
      default: 32
    },
    width: {
      type: Number,
      required: true,
      default: 32
    },
    startX: {
      type: Number,
      required: true,
      default: 0
    },
    startY: {
      type: Number,
      required: true,
      default: 0
    },
  })
</script>

<template>
  <svg role="img" class="svg_class" xmlns="http://www.w3.org/2000/svg" :viewBox='startX + " " + startY + " " + height + " " + width'>
    <path fill="none" stroke="black" stroke-width="2" stroke-miterlimit="10" d="M44 18h10v45H10V18h10z"></path>
    <path fill="none" stroke="black" stroke-width="2" stroke-miterlimit="10" d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"></path>
  </svg>
</template>

<style scoped>
  .svg_class {
    display: flex;
    text-align: center;
  }

</style>
