<script setup lang="ts">
import CustomButton from "~/features/customButton.vue";
const data = () => {
  return {
    isDark: true
  }
}
</script>

<template>
  <div>
    <custom-button style-class="selector" :is-dark='isDark'>Click!</custom-button>
    <custom-button style-class="cart" :is-dark=true>Click!</custom-button>
  </div>
</template>
