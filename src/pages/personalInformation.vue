<script setup>
import baseButton from '@/components/common/baseButton.vue'
import baseHeader from '@/components/common/baseHeader.vue'
import baseFormLayout from '@/layouts/baseFormLayout.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/registerAccount'
import { onMounted } from 'vue'

const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  userStore.loadUserData()
})

const handleSubmit = () => {
  userStore.saveToLocalStorage()
  router.push('/uploader')
}
</script>

<template>
  <header>
    <baseHeader />
  </header>
  <div class="personalInfo__body">
    <baseFormLayout title="اطلاعات فردی">
      <div class="form">
        <div class="form__info">
          <div class="form__info-input">
            <label class="form__info-title"> کد پستی </label>
            <input
              type="text"
              class="form__info-group form__info-group--active"
              placeholder="۹۱۷۵۶۸۷۴۲۳"
              v-model="userStore.postalCode"
            />
          </div>
        </div>
        <div class="form__info">
          <div class="form__info-input">
            <label class="form__info-title"> نام خانوادگی </label>
            <input
              type="text"
              class="form__info-group"
              placeholder="نام خانوادگی به صورت کامل "
              v-model="userStore.lastName"
            />
          </div>
        </div>
        <div class="form__info">
          <div class="form__info-input">
            <label class="form__info-title"> نام </label>
            <input
              v-model="userStore.firstName"
              type="text"
              class="form__info-group"
              placeholder="نام فارسی"
            />
          </div>
        </div>
      </div>
      <div class="textarea">
        <div class="textarea__info">
          <div class="textarea__info-input">
            <label class="textarea__info-title"> محل سکونت </label>
            <textarea
              class="textarea__info-boxarea"
              placeholder="آدرس کامل"
              v-model="userStore.address"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="textarea__info--submit">
        <baseButton :text="`ثبت و ادامه`" type="primary" width="209px" @click="handleSubmit" />
        <baseButton :text="`قبلی`" type="secondary" width="209px" href="/dashboard" />
      </div>
    </baseFormLayout>
  </div>
</template>

<style lang="scss" scoped>
.personalInfo__body {
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: #f7f8fa;
}

.form {
  @include flex-box(row, flex-end, flex-end);
  width: 100%;
  gap: 120px;
  margin-top: 40px;

  &__info {
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
    @include flex-box(column, flex-end, flex-end);
    gap: 5px;
    text-align: right;
    font-family: map-get($fonts, font-family-base), sans-serif;
    word-wrap: break-word;
    width: 100%;

    &-input {
      width: 100%;
      @include flex-box(column, flex-end, flex-end);
      gap: 4px;
    }

    &-title {
      font-family: map-get($fonts, font-family-base), sans-serif;
      font-weight: map-get($fonts, font-weight-semibold);
      font-size: map-get($fonts, font-size-medium);
      text-align: right;
      color: map-get($colors, text-info);
    }

    &-group {
      @include flex-box(column, flex-end, flex-end);
      color: map-get($colors, border-input-focus);
      gap: 4px;
      height: 48px;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 6px;
      font-family: map-get($fonts, font-family-base);
      @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-bases));
      text-align: right;
      background-color: map-get($colors, bg-input);

      &:focus {
        outline: 1px solid map-get($colors, border-input-focus);
        color: map-get($colors, text-input-focus);
      }
    }
  }
}

.textarea {
  width: 100%;
  margin-bottom: 40px;

  &__info {
    width: 100%;

    &-input {
      width: 100%;
      @include flex-box(column, flex-end, flex-end);
      gap: 4px;
      color: map-get($colors, bg-input);
      margin-top: 44px;
    }

    &-title {
      font-family: map-get($fonts, font-family-base), sans-serif;
      font-weight: map-get($fonts, font-weight-semibold);
      font-size: map-get($fonts, font-size-base);
      text-align: right;
      color: map-get($colors, text-info);
    }
    &--submit {
      display: flex;
      flex-direction: row;
      gap: 16px;
    }

    &-boxarea {
      width: 100%;
      resize: none;
      height: 120px;
      padding: 8px;
      border: 1px solid map-get($colors, border-textarea);
      border-radius: 6px;
      font-family: map-get($fonts, font-family-base);
      @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-bases));
      background-color: map-get($colors, bg-input);
      text-align: right;

      &:focus {
        outline: none;
        border-color: map-get($colors, border-input-focus);
      }
    }
  }
}
</style>
