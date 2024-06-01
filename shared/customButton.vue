<script setup lang="ts">
  import {useAppStore} from "~/stores/app";
  import {storeToRefs} from "pinia";

  const appStore = useAppStore();
  const { themeColor } = storeToRefs(appStore);

  defineProps({
    clickHandler: {
      type: Function,
      required: true,
      default: () => {alert("Set a function on clickHandler")}
    },
    styleClass: {
      type: String,
      required: true,
      default: 'default'
    },
  });
</script>

<template>
  <button @click="clickHandler" :class="styleClass + ' ' + styleClass + '__' + themeColor">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  .default {
    background-color: red;
    height: 100px;
    width: 100px;
  }
  .selector {
    height: 35px;
    font-size: 13px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 20px;
    border: none;
    font-family: 'Yandex', Arial, sans-serif;
    font-weight: 700;
    cursor: pointer;

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
    display: flex;
    justify-content: center;
    align-items: center;


    border-radius: 50px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

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
