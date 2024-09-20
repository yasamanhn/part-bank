<template>
  <div :class="['base-input', styleClass]">
    <Field :name="name" :type="type" :rules="rules" v-slot="{ field, meta }">
      <div class="input-wrapper">
        <input
          v-model="model"
          v-bind="field"
          :type="inputType"
          :id="name"
          :class="['base-input__input', inputClass]"
          :style="inputStyles"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="showingPlaceholder ? placeholder : ''"
        />
        <!-- <p>{{ field }}</p> -->
        <label :for="name" :class="['base-input__label', labelClass, { 'has-value': hasValue }]">
          {{ label }}
        </label>
        <span v-if="meta.touched && meta.error" class="error-message">
          {{ meta.error }}
        </span>
        <img
          v-if="showPasswordToggle && type === 'password'"
          :src="
            showPassword
              ? '/src/assets/images/login/showIconPassword.svg'
              : '/src/assets/images/login/hideIconPassword.svg'
          "
          class="password-toggle-icon"
          @click="togglePasswordVisibility"
          alt="نمایش/مخفی کردن رمز عبور"
        />
      </div>
    </Field>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Field } from 'vee-validate'

const model = defineModel()
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  inputClass: {
    type: String,
    default: ''
  },
  inputStyles: {
    type: Object,
    default: () => ({})
  },
  labelClass: {
    type: String,
    default: ''
  },
  rules: {
    type: [String, Object],
    default: ''
  },
  showPasswordToggle: {
    type: Boolean,
    default: false
  }
})

const inputValue = ref('')
const hasValue = ref(false)
const showingPlaceholder = ref(false)
const showPassword = ref(false)

const inputType = computed(() => {
  return props.type === 'password' && props.showPasswordToggle
    ? showPassword.value
      ? 'text'
      : 'password'
    : props.type
})

const styleClass = 'default-style'
const handleFocus = () => {
  showingPlaceholder.value = true
}

const handleBlur = () => {
  if (!inputValue.value) {
    showingPlaceholder.value = false
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

watch(inputValue, (newValue) => {
  hasValue.value = newValue.length > 0
})
</script>

<style scoped lang="scss">
.base-input {
  position: relative;
}

.default-style .base-input__input {
  height: 48px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-family: map-get($fonts, font-family-base);
  text-align: right;
}

.default-style .base-input__input:focus {
  outline: 1px solid #d3d3d3;
  color: #333;
}

.default-style .base-input__label {
  font-family: map-get($fonts, font-family-base);
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
}

.default-style .base-input__input:focus + .base-input__label,
.default-style .base-input__input:not(:placeholder-shown) + .base-input__label,
.default-style .base-input__label.has-value {
  top: 0;
  transform: translateY(-150%) scale(1);
  color: #333;
  font-size: 16px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.input-wrapper {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
