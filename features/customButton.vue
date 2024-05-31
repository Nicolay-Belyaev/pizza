<script setup lang="ts">
  const props = defineProps({
    clickHandler: Function,
    styleClass: String,
    isDark: Boolean
  })
  const style = computed(() => {
    return `${props.styleClass + " " + props.styleClass + "__"}${props.isDark ? 'dark' : 'light'}`
  })
</script>

<template>
  <button @click="clickHandler" :class=style>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  .selector {
    height: 35px;
    font-size: 13px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 20px;

    &__light {
      color: #ffffff;
      background-color: rgb(215, 82, 0);
    }
    &__dark {
      color: #000000;
      background-color: #009b95;
    }
  }
  .cart {
    border-radius: 50px;
    width: 80px;
    height: 80px;
    cursor: pointer;

    &__light {
      color: #000000;
      background-color: rgba(255, 255, 255, .8);
    }

    &__dark {
      color: #8a8a8a;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
</style>
