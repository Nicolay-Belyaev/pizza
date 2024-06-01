<script setup lang="ts">
  import CustomButton from "~/features/customButton.vue";
  import {useAppStore} from "~/stores/app";

  const { changeTheme } = useAppStore()


</script>

<template>
  <div>
    <custom-button style-class="selector">Click!</custom-button>
    <custom-button :click-handler="changeTheme" style-class="cart">Click!</custom-button>
  </div>
</template>
