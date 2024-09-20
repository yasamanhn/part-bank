<template>
  <div class="body-dashboard">
    <BaseSidebar></BaseSidebar>
    <div class="main-container__items">
      <router-view>
      </router-view>
    </div>

  </div>
</template>

<script setup>
import BaseSidebar from '@/components/common/baseSidebar.vue'
</script>

<style lang="scss" scoped>
.body-dashboard {
  margin-right: 90px;
}
</style>
