<script setup lang="ts">
  import {useAppStore} from "~/stores/app";

  const props = defineProps({
    clickHandler: Function,
    styleClass: String,
  })
  const appStore = useAppStore()
  const isDark = appStore.themeIsDark

  // я жду, что buttonClass будет меняться при изменении themeIsDark в сторе. Но что-то не взлетает.
  const buttonClass = computed(() => {
    return `${props.styleClass + " " + props.styleClass + "__"}${isDark ? 'dark' : 'light'}`
  })
</script>

<template>
  <button @click="clickHandler" :class=buttonClass>
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
