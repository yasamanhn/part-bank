<script setup>
// import baseButton from '@/components/common/baseButton.vue'
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  textPrimary: {
    type: String,
    required: false,
    default: 'auto'
  },
  textSecondary: {
    type: String,
    required: false,
    default: ''
  },
  width: {
    type: String,
    default: 'auto' // default width
  }
})
</script>
<template>
  <article class="base-card">
    <div class="base-card__content">
      <div class="base-card__head">
        <slot name="title">
          <h3></h3>
        </slot>
        <slot name="detail"></slot>
      </div>

      <div class="base-card__center">
        <slot name="main"></slot>
      </div>
    </div>
    <baseButton class="btn-secondary" :text="textSecondary" type="secondary" :width="'290px'" />
  </article>
</template>
<style lang="scss" scoped>
.base-card {
  background-color: map-get($colors, white);
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-around;
  border-radius: 12px;
  font-family: 'peyda';
  width: 338px;
  height: 260px;

  &__content {
    display: flex;
    flex-direction: column;
    font-family: map-get($fonts, font-family-base);
    padding: 24px;
  }

  &__head {
    @include font-style(map-get($fonts, font-weight-semi-bold), map-get($fonts, font-size-large));
    @include flex-box(row, space-between, center);
    color: map-get($colors, text-title);

    img {
      cursor: pointer;
    }
  }

  &__center {
    @include flex-box(column, center, center);
    margin-top: 24px;

    &-cost {
      gap: 4px;
      display: flex;
      flex-direction: row;
      align-items: center;

      :first-child {
        @include font-style(
          map-get($fonts, font-weight-semi-bold),
          map-get($fonts, font-size-xxlarge)
        );
        color: map-get($colors, light-blue);
      }

      :last-child {
        color: map-get($colors, light-purple);
      }
    }

    &-month {
      gap: 4px;

      :first-child {
        @include font-style(
          map-get($fonts, font-weight-semi-bold),
          map-get($fonts, font-size-medium-large)
        );
        color: map-get($colors, light-blue);
      }

      :last-child {
        color: map-get($colors, light-purple);
      }
    }
  }
}

.btn-secondary {
  margin: auto 24px;
}
</style>
