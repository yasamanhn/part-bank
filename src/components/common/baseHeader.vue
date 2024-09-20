<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>
<template>
  <header class="base-header">
    <div class="base-header__items">
      <img src="../../assets/images/header/Angle-down.svg" />
      <p class="base-header__items-text">{{ userStore.idNumber }}</p>
      <img src="../../assets/images/header/unsplash_7omHUGhhmZ0.svg" />
      <div class="base-header__items-notification">
        <img class="vector" src="../../assets/images/header/Notification.svg" />
      </div>
    </div>

    <div class="base-header__title">
      <p>پارت بانک</p>
      <img src="../../assets/images/header/Layer_1.svg" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-header {
  @include flex-box(row, space-between, center);
  position: fixed;
  width: 100vw;
  height: 68px;
  top: 0;
  left: 0;
  background-color: map-get($colors, white);
  box-shadow: $box-shadow;
  z-index: 999;

  &__items {
    @include flex-box(row, flex-start, center);
    gap: 8px;
    margin: 14px 40px;
    font-family: map-get($fonts, font-family-base);
    font-size: map-get($fonts, font-size-base);
    font-weight: map-get($fonts, font-weight-regular);
    color: map-get($colors, text-title);
    cursor: pointer;

    &-notification {
      text-align: center;
      margin-left: 16px;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  &__title {
    @include flex-box(row, flex-end, center);
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
    margin-right: 40px;
    gap: 12px;
    flex-shrink: 0;
    height: 31px;
    margin: 18px 40px;
    color: map-get($colors, text-title);
    font-family: map-get($fonts, font-family-base);
    line-height: normal;
    cursor: pointer;
  }
}
</style>
