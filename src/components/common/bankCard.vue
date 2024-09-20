<script setup>
import { ref } from 'vue'

const emit = defineEmits(['delete'])

const showDropdown = ref(false)

function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g)
  var match = (matches && matches[0]) || ''
  var parts = []

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}
function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

defineProps({
  data: {
    type: Object,
    default: {}
  }
})

function deleteAccount() {
  emit('delete')
}
</script>
<template>
  <article class="dashboard__card bank-card">
    <div class="bank-card__holder">
      <div class="bank-card__content">
        <div class="bank-card__content-total-balance">
          <p>موجودی کل</p>
          <p>{{ data?.balance || '0' }}</p>
        </div>
        <div class="bank-card__content-card-number">
          <span>
            {{ data?.cardNumber ? cc_format(data?.cardNumber) : '0' }}
          </span>
        </div>
      </div>
      <div class="bank-card__more-button" @click="toggleDropdown">
        <img src="../../assets/images/dashboard/more.svg" alt="more options" />
      </div>
      <div class="bank-card__drop-down" v-if="showDropdown">
        <div class="bank-card__drop-down-item">
          <img
            src="../../assets/images/dashboard/convert-card.png"
            alt="icon"
            style="width: 20px"
          />
          <span style="color: #c5c9d0">تغییر حساب متصل</span><br />
        </div>
        <hr />
        <div class="bank-card__drop-down-item bank-card__drop-down-item-down">
          <img src="../../assets/images/dashboard/icon-2.png" alt="icon" style="width: 20px" />
          <button
            style="color: #eb482b; appearance: none; background: none; border: none"
            @click="deleteAccount"
          >
            حذف حساب بانکی
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.dashboard {
  &__card {
    display: flex;
    justify-content: space-between;
    align-items: space-around;
    border-radius: 12px;
    font-family: 'peyda';
    width: 456px;
    height: 260px;
  }
}

.bank-card {
  &__holder {
    background-image: url('../../assets/images/dashboard/Pattern.png'),
      url('../../assets/images/dashboard/Noise.png'),
      linear-gradient(
        to right bottom,
        map-get($colors, light-blue),
        map-get($colors, gradient-light-color)
      );
    width: 456px;
    height: 100%;
    border-radius: 12px;
    position: relative;
    padding: 36px 24px 32px 36px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
    color: map-get($colors, white);

    &-total-balance {
      display: flex;
      flex-direction: column;
      gap: 6px;

      p:first-child {
        @include font-style(
          map-get($fonts, font-weight-semi-bold),
          map-get($fonts, font-size-medium)
        );
        line-height: 22.4px;
      }

      p:last-child {
        @include font-style(
          map-get($fonts, font-weight-semi-bold),
          map-get($fonts, font-size-xxlarge)
        );
      }
    }

    &-card-number {
      position: absolute;
      top: 0;
      word-spacing: 16px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 178px;
      gap: 16px;
      font-family: map-get($fonts, font-family-base);
      font-size: map-get($fonts, font-size-xlarge);
      line-height: 50.4px;
    }
  }

  &__more-button {
    position: absolute;
    right: 24px;
    top: 36px;

    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }

  &__drop-down {
    // display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
    padding: 12px;
    background-color: map-get($colors, white);
    border-radius: 12px;
    width: 187px;
    min-height: 88px;
    font-size: map-get($fonts, font-size-base);
    margin: 72px 36px 100px 233px;
    cursor: pointer;

    hr {
      margin-top: 7px;
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
