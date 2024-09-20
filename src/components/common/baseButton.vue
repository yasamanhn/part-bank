<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  width: {
    type: String,
    required: false,
    default: '200px'
  },
  href: {
    type: String,
    required: false,
    default: ''
  }
})
const buttonWidth = computed(() => props.width)
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :class="['btn', `btn-${props.type}`]"
    :style="{ width: buttonWidth }"
  >
    {{ props.text }}
  </component>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  @include flex-box(row, center, center);
}
.btn {
  padding: 8px 16px;
  border-radius: 8px;
  height: 48px;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  font-family: map-get($fonts, font-family-base), sans-serif;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
}

.btn-primary {
  color: white;
  background-color: #4152a0;
}

.btn-secondary {
  color: #3c4351;
  background-color: #eceef6;
}
</style>
