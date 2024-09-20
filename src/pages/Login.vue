<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import BaseInput from '@/components/common/baseInput.vue'
import baseButton from '@/components/common/baseButton.vue'
import { requestPostLogin } from '@/services/login.post'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const form = reactive({
  phoneNumber: '',
  password: ''
})
const router = useRouter()

const LoginSubmit = async (e) => {
  console.log('waiting')
  const DATA = {
    phoneNumber: form.phoneNumber,
    password: form.password
  }

  const response = await requestPostLogin(DATA)

  userStore.firstName = response.data.data.firstName
  userStore.lastName = response.data.data.lastName
  userStore.idNumber = response.data.data.idNumber
  userStore.postalCode = response.data.data.postalCode

  // localStorage.setItem('userAccountInfo', JSON.stringify(response.data.data))

  const { data } = response
  localStorage.setItem('token', data.data.token)
  localStorage.setItem('firstName', data.data.firstName)
  localStorage.setItem('lastName', data.data.lastName)
  localStorage.setItem('idNumber', data.data.idNumber)

  router.push('/dashboard')
  console.log(data.data.token)
}

const customInputStyles = { borderRadius: '6px', backgroundColor: '#f9fafb' }
</script>

<template>
  <main class="login">
    <div class="login__container">
      <div class="login__image">
        <img
          src="/src/assets/images/login/عکس.png"
          width="560px"
          height="800px"
          alt="عکس صفحه ورود پارت بانک"
        />
      </div>
      <form class="login__form" @submit.prevent="LoginSubmit">
        <div class="login__form-header">
          <div class="login__form-text">
            <p class="login__form-text--brand">پارت بانک</p>
            <p class="login__form-text--tagline">تجربه‌ای نوین در بانک داری</p>
          </div>
          <div class="login__form-logo">
            <img src="/src/assets/images/shared/logo.svg" alt="" width="96px" height="92px" />
          </div>
        </div>
        <div class="login__form-body">
          <BaseInput
            v-model="form.phoneNumber"
            name="phoneNumber"
            label="شماره همراه"
            type="text"
            placeholder="مثلا 09022301202"
            :inputStyles="customInputStyles"
            :showPasswordToggle="false"
          />

          <BaseInput
            v-model="form.password"
            name="password"
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            :inputStyles="customInputStyles"
            :showPasswordToggle="true"
          />
          <baseButton
            class="btn-primary"
            type="submit"
            :width="`354px`"
            :text="`ورود`"
          ></baseButton>
        </div>
        <div class="login__support">
          <p>۰۲۱-۱۲۳۴۵۶۷۸ : پشتیبانی</p>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
.login {
  background-image: url('/src/assets/images/login/BG\ Image\ \(2\).png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  border-radius: 20px;

  &__container {
    @include flex-box(row, center, center);
    box-shadow: map-get($colors, light-gray);
    border-radius: 20px;
    background-color: map-get($colors, white);
    margin: 120px 360px;
  }

  &__image {
    padding: 20px;
  }

  &__form {
    width: 600px;
    height: 840px;
    padding: 83.5px 123px 32px 123px;

    &-header {
      @include flex-box(row, center, center);
      gap: 16px;
    }

    &-text {
      @include flex-box(column, center, center);
      line-height: 32px;
    }

    &-text--brand {
      @include font-style(map-get($fonts, font-weight-bold), map-get($fonts, font-size-xxlarge));
      font-family: map-get($fonts, font-family-base), sans-serif;
      color: map-get($colors, light-blue);
    }

    &-text--tagline {
      @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
      font-family: map-get($fonts, font-family-base), sans-serif;
      color: map-get($colors, light-blue);
    }

    &-body {
      display: flex;
      flex-direction: column;
      margin-top: 129.5px;
      gap: 56px;
    }
  }

  &__submit-button {
    @include font-style(map-get($fonts, font-weight-bold), map-get($fonts, font-size-medium));
    color: map-get($colors, white);
    font-family: map-get($fonts, font-family-base), sans-serif;
    background-color: map-get($colors, light-blue);
    line-height: 28px;
  }

  &__text-button {
    @include font-style(map-get($fonts, font-weight-bold), map-get($fonts, font-size-medium));
    color: map-get($colors, white);
    text-align: center;
    font-family: map-get($fonts, font-family-base);
    line-height: 28px;
  }
  &__loader {
    border: 4px solid map-get($colors, loader-color);
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: map-get($colors, loader-border-top);
    border-radius: 89%;
    width: 26px;
    height: 26px;
    animation: spin 2s linear infinite;
    position: relative;
    bottom: 0;
    left: 46%;
    display: none;
  }

  &__support {
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-medium));
    color: map-get($colors, text-title);
    font-family: map-get($fonts, font-family-base), sans-serif;
    text-align: center;
    margin-top: 229px;
  }
}
</style>
