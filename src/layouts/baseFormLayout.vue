<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  textPrimary: {
    type: String,
    required: false,
    default: 'بعدی'
  },
  textSecondary: {
    type: String,
    required: false,
    default: 'قبلی'
  },
  width: {
    type: String,
    default: 'auto'
  }
})
</script>

<template>
  <div class="base-FormLayout">
    <section>
      <h2>{{ title }}</h2>
      <hr />
    </section>
    <slot></slot>
  </div>
</template>

<style scoped>
.base-FormLayout {
  background-color: white;
  max-width: 1320px;
  width: 100%;
  min-height: 412px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 110px auto;
  font-family: 'peyda';
  color: #3c4351;
}

header {
  margin-bottom: 20px;
}

h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

hr {
  border: none;
  border-top: 2px solid #e2edff;
  margin: 10px 0;
}

.base-FormLayout__button {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
</style>
