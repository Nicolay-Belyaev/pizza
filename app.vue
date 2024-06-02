<script setup lang="ts">
  import CustomButton from "~/shared/customButton.vue";
  import {useAppStore} from "~/stores/app";
  import CartImage from "~/shared/assets/cart-image.vue";

  const { changeTheme } = useAppStore()
</script>

<template>
  <div class="wrapper">
    <custom-button style-class="selector">Выбрать размер</custom-button>
    <custom-button :click-handler="changeTheme" style-class="cart">
      <cart-image
          :start-x=-14
          :start-y=-12
          :height=95
          :width=95>
      </cart-image>
    </custom-button>
  </div>
</template>

<style>
  a {
    text-decoration: none;
  }
  .wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>
