<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseHeader from '@/components/common/baseHeader.vue'
import BaseFormLayout from '@/layouts/baseFormLayout.vue'
import { useUserStore } from '@/stores/registerAccount'
import { useRouter } from 'vue-router'
import baseButton from '@/components/common/baseButton.vue'

const userStore = useUserStore()
const router = useRouter()

const backInput = ref(null)
const frontInput = ref(null)

const showDropdownFront = ref(false)
const showDropdownBack = ref(false)

function openBackInput() {
  backInput.value.click()
}

function openFrontInput() {
  frontInput.value.click()
}

function selectBackImg(event) {
  const file = event.target.files[0]
  if (file) {
    imgToBase64(file)
      .then((base64Image) => {
        userStore.idCardImgs.back = base64Image
        userStore.saveToLocalStorage()
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

function selectFrontImg(event) {
  const file = event.target.files[0]
  if (file) {
    imgToBase64(file)
      .then((base64Image) => {
        userStore.idCardImgs.front = base64Image
        userStore.saveToLocalStorage()
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

function imgToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function () {
      const base64Image = reader.result
      resolve(base64Image)
    }

    reader.onerror = function (error) {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}

function handleSubmit() {
  userStore.saveToLocalStorage()
  router.push('/confirm')
}

function toggleDropdownFront() {
  showDropdownFront.value = !showDropdownFront.value
}
function toggleDropdownBack() {
  showDropdownBack.value = !showDropdownBack.value
}

// Function to close dropdown when clicking outside
// function handleClickOutside(event) {
//   if (
//     showDropdownFront.value &&
//     !event.target.closest('.personal-info__drop-down') &&
//     !event.target.closest('.personal-info__card-label img')
//   ) {
//     showDropdownFront.value = false
//   }
// }
function handleClickOutside(event) {
  if (
    !event.target.closest('.personal-info__drop-down') &&
    !event.target.closest('.personal-info__card-label img')
  ) {
    showDropdownBack.value = false
    showDropdownFront.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header>
    <baseHeader />
  </header>
  <div class="uploader__body">
    <baseFormLayout title="تصویر کارت ملی">
      <div class="personal-info__content">
        <div class="personal-info__card">
          <div class="personal-info__card--show" v-show="!userStore.idCardImgs.back">
            <input
              class="personal-info__card-box"
              ref="backInput"
              type="file"
              @change="selectBackImg"
            />
            <img src="../assets/images/uploaderPage/Vector.svg" alt="upload image" />
            <div class="personal-info__card-text">
              <span
                >تصویر را بکشید و اینجا رها کنید<br />
                <button @click="openBackInput" class="personal-info__card-click">کلیک کنید</button>
                یا
              </span>
            </div>
          </div>
          <div v-show="userStore.idCardImgs.back">
            <img
              :src="userStore.idCardImgs.back"
              width="320px"
              height="180px"
              alt="national id image"
            />
          </div>
          <div class="personal-info__card-label">
            <img
              src="../assets/images/uploaderPage/more.svg"
              alt="more button"
              @click="toggleDropdownBack"
            />
            تصویر پشت کارت ملی
          </div>
          <div class="personal-info__drop-down" v-if="showDropdownBack">
            <div class="personal-info__drop-down-item">
              <img src="/src/assets/images/shared/edit-2.svg" alt="icon" style="width: 20px" />
              <span style="color: #3c4351">ویرایش</span><br />
            </div>
            <hr />
            <div class="personal-info__drop-down-item personal-info__drop-down-item-down">
              <img src="/src/assets/images/shared/trash.svg" alt="icon" style="width: 20px" />
              <span style="color: #eb482b">حذف </span>
            </div>
          </div>
        </div>

        <div class="personal-info__card">
          <div class="personal-info__card--show" v-show="!userStore.idCardImgs.front">
            <input
              class="personal-info__card-box"
              ref="frontInput"
              type="file"
              @change="selectFrontImg"
            />
            <img src="../assets/images/uploaderPage/Vector.svg" alt="upload image" />
            <div class="personal-info__card-text">
              <span
                >تصویر را بکشید و اینجا رها کنید<br />
                <button @click="openFrontInput" class="personal-info__card-click">کلیک کنید</button>
                یا
              </span>
            </div>
          </div>
          <div v-show="userStore.idCardImgs.front">
            <img
              :src="userStore.idCardImgs.front"
              width="320px"
              height="180px"
              alt="national id image"
            />
          </div>
          <div class="personal-info__card-label">
            <img
              src="../assets/images/uploaderPage/more.svg"
              @click="toggleDropdownFront"
              alt="more button"
            />
            تصویر روی کارت ملی
          </div>
          <div class="personal-info__drop-down" v-if="showDropdownFront">
            <div class="personal-info__drop-down-item">
              <img src="/src/assets/images/shared/edit-2.svg" alt="icon" style="width: 20px" />
              <span style="color: #3c4351">ویرایش</span><br />
            </div>
            <hr />
            <div class="personal-info__drop-down-item personal-info__drop-down-item-down">
              <img src="/src/assets/images/shared/trash.svg" alt="icon" style="width: 20px" />
              <span style="color: #eb482b">حذف </span>
            </div>
          </div>
        </div>
      </div>
      <div class="personal-info__card--submit">
        <baseButton :text="`ثبت و ادامه`" type="primary" width="209px" @click="handleSubmit" />
        <baseButton :text="`قبلی`" type="secondary" width="209px" href="/info" />
      </div>
    </baseFormLayout>
  </div>
</template>

<style lang="scss" scoped>
.uploader__body {
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: #f7f8fa;
}

.personal-info {
  &__content {
    align-self: stretch;
    @include flex-box(row, center, center);
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  &__card {
    width: 320px;
    height: 232px;
    @include flex-box(column, center, flex-start);
    position: relative;

    &--show {
      @include flex-box(column, center, center);
      gap: 5px;
      width: 100%;
      height: 180px;
    }

    &--submit {
      display: flex;
      flex-direction: row;
      gap: 16px;
    }
  }

  &__card-box {
    align-self: stretch;
    flex: 1 1 0;
    background: map-get($colors, bg-input);
    border-radius: 12px 12px 0 0;
    border: 1px dotted map-get($colors, border-textarea);
    @include flex-box(column, center, center);
    gap: 8px;
    display: none;
  }

  &__card-image {
    width: 68px;
    height: 50.54px;
    background: map-get($colors, border-input-focus);
  }

  &__card-text {
    text-align: center;
    color: map-get($colors, text-info);
    @include font-style(map-get($fonts, font-weight-semibold), 14px);
    word-wrap: break-word;
    line-height: normal;
  }

  &__card-click {
    color: map-get($colors, light-blue);
    border: none;
    background: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__card-label {
    align-self: stretch;
    height: 52px;
    padding: 16px;
    background: map-get($colors, bg-input);
    border-radius: 0 0 12px 12px;
    @include flex-box(row, space-between, center);
    text-align: right;
    color: map-get($colors, text-title);
    @include font-style(map-get($fonts, font-weight-regular), 14px);
    word-wrap: break-word;
  }
  &__drop-down {
    position: absolute;
    bottom: 0;
    left: ۰;
    z-index: 4;
    padding: 12px;
    background-color: map-get($colors, white);
    border-radius: 12px;
    width: 93px;
    margin: 12px;
    font-size: map-get($fonts, font-size-base);
    cursor: pointer;

    hr {
      border: 1px solid map-get($colors, dashbord-header-hr);
    }

    span :nth-child(2) {
      margin-top: 20px;
    }

    &-item {
      @include flex-box(row, flex-start, center);
      gap: 8px;

      &-down {
        margin-top: 10px;
      }
    }
  }
}
</style>
