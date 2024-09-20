<script setup>
import baseHeader from '@/components/common/baseHeader.vue'
import baseFormLayout from '@/layouts/baseFormLayout.vue'
import baseButton from '@/components/common/baseButton.vue'
import { useUserStore } from '@/stores/registerAccount'
import { requestPostDeposit } from '@/services/createDeposit.post'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = async () => {
  const userData = {
    firstName: userStore.firstName,
    lastName: userStore.lastName,
    address: userStore.address,
    postalCode: userStore.postalCode
  }

  try {
    const response = await requestPostDeposit(userData)
    console.log(response)
    localStorage.setItem('userAccountInfo', JSON.stringify(userData))

    await router.push({
      path: '/dashboard'
    })
  } catch (error) {
    console.error('Error during account creation:', error)
  }
}
</script>

<template>
  <header>
    <baseHeader />
  </header>
  <div class="confirm-information__body">
    <baseFormLayout title="تایید اطلاعات">
      <div class="box-form">
        <!-- code -->
        <div class="box-form__info">
          <p class="box-form__info-title">: کد پستی</p>
          <div class="box-form__info-value">
            <p id="user_info" class="box-form__info-text">
              {{ userStore.postalCode }}
            </p>
          </div>
        </div>
        <!-- lastName-->
        <div class="box-form__info">
          <p class="box-form__info-title">: نام خانوادگی</p>
          <div class="box-form__info-value">
            <p class="box-form__info-text">{{ userStore.lastName }}</p>
          </div>
        </div>
        <!-- name -->
        <div class="box-form__info">
          <p class="box-form__info-title">: نام</p>
          <div class="box-form__info-value">
            <p class="box-form__info-text">{{ userStore.firstName }}</p>
          </div>
        </div>
      </div>
      <!-- address-->
      <div class="box-form__address">
        <div class="box-form__info">
          <p class="box-form__info-title">: محل سکونت</p>
          <div class="box-form__info-value">
            <p class="box-form__info-text">
              {{ userStore.address }}
            </p>
          </div>
        </div>
      </div>
      <div class="box-form--submit">
        <baseButton :text="`افتتاح حساب`" type="primary" width="209px" @click="handleSubmit" />
        <baseButton :text="`قبلی`" type="secondary" width="209px" href="/uploader" />
      </div>
    </baseFormLayout>
  </div>
</template>

<style lang="scss" scoped>
.confirm-information__body {
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: #f7f8fa;
}
.box-form {
  @include flex-box(row, flex-end, flex-end);
  gap: 120px;
  width: 100%;

  &__info {
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
    @include flex-box(column, flex-end, flex-end);
    gap: 5px;
    opacity: 0.6;
    text-align: right;
    font-family: 'Peyda';
    word-wrap: break-word;
  }

  &__info-title {
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
    color: map-get($colors, text-title);
  }

  &__info-value {
    @include font-style(map-get($fonts, font-weight-semibold), map-get($fonts, font-size-medium));
  }

  &__info-text {
    @include font-style(map-get($fonts, font-weight-semibold), map-get($fonts, font-size-mid));
    text-align: right;
    font-family: 'Peyda';
    line-height: normal;
    color: #3c4351;
  }

  &__address {
    width: 100%;
  }

  &--submit {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  &__address {
    width: 100%;
  }
}
</style>
