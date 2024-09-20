<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { requestGetDashboard } from '@/services/DepositAccount.get'
import { transactions } from '@/services/transactions.get'
import baseLayoutSidebar from '@/layouts/baseLayoutSidebar.vue'
import BankCard from '@/components/common/bankCard.vue'
import baseCard from '@/components/common/baseCard.vue'
import baseButton from '@/components/common/baseButton.vue'
import arrowIconRed from '@/assets/images/dashboard/arrow-red.svg'
import arrowIconGreen from '@/assets/images/dashboard/arrow-green.svg'
import { useRouter } from 'vue-router'
import { depositAccountDelete } from '@/services/depositAccount.delete'
import { useUserStore } from '@/stores/registerAccount'

const router = useRouter()
const registerStore = useUserStore()

const userAccountInfo = ref(null)
const userTransaction = ref(null)

async function fetchUserInfo() {
  try {
    const response = await requestGetDashboard()
    userAccountInfo.value = response.data.result
    localStorage.setItem('userAccountInfo', JSON.stringify(userAccountInfo.value))
    console.log('userinfo', userAccountInfo.value, response)
  } catch (error) {
    console.error('fetchUserInfo', error)
  }
}
async function fetchUserTransaction() {
  try {
    const response = await transactions()
    userTransaction.value = response.data.results
    console.log(userTransaction.value)
  } catch (error) {
    console.error('fetchUserTransaction', error)
  }
}

onMounted(async () => {
  await fetchUserInfo()
  const savedUserAccountInfo = localStorage.getItem('userAccountInfo')
  if (savedUserAccountInfo) {
    userAccountInfo.value = JSON.parse(savedUserAccountInfo)
  }
  await fetchUserTransaction()
})
const showCreateAccountSection = computed(
  () => !userAccountInfo.value || Object.keys(userAccountInfo.value).length === 0
)
//pagination
const buttonsPerPage = ref(3)
const currentPage = ref(1)
const totalButtons = computed(() => {
  if (!userTransaction.value?.length) return 1
  return Math.ceil(userTransaction.value.length / buttonsPerPage.value)
})

const transactionShown = computed(() => {
  const count = 5

  if (!userTransaction.value) return []

  const index = count * currentPage.value

  return userTransaction.value.slice(index, index + count)
})

const resultLength = computed(() => {
  return userAccountInfo.value ? Object.keys(userAccountInfo.value).length : 0
})

const upcomingInstalment = computed(() => {
  return userAccountInfo.value ? userAccountInfo.value.upcomingInstalment : {}
})

const totalPages = computed(() => Math.ceil(totalButtons.value / buttonsPerPage.value))

const displayedButtons = computed(() => {
  let start = currentPage.value - 1

  if (currentPage.value === totalPages.value) {
    start = currentPage.value - 2
  } else if (currentPage.value === 1) {
    start = 1
  }

  const end = Math.min(totalButtons.value, start + buttonsPerPage.value - 1)
  const buttons = []
  for (let i = start; i <= end; i++) {
    buttons.push(i)
  }
  return buttons
})

const activeButton = computed(() => {
  if (currentPage.value === 1) {
    return 1
  } else if (currentPage.value === totalPages.value) {
    return currentPage.value
  }
  const middleIndex = Math.floor(buttonsPerPage.value / 2)
  return displayedButtons.value[middleIndex]
})

const goToPage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// delete account
function clearUserInfo() {
  userAccountInfo.value = {}
}
async function deleteAccount() {
  try {
    const response = await depositAccountDelete()

    registerStore.deleteAccount()
    clearUserInfo()
    // router.push({ name: 'dashboard' })
  } catch (error) {
    console.log('error in deleteAccount')
  }
}
</script>

<template>
  <div class="main">
    <baseLayoutSidebar></baseLayoutSidebar>
    <div class="main-container">
      <section class="create-account" v-if="showCreateAccountSection">
        {{ resultLength }}
        <div class="create-account__content">
          <img
            class="create-account__content-icon"
            src="../assets/images/dashboard/EmptyStateIllustration.svg"
            alt="search image"
          />
          <p class="create-account__content-text">
            برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید
          </p>
          <button class="create-account__content-button">
            <a href="/info" class="create-account__content-link">افتتاح حساب</a>
          </button>
        </div>
      </section>

      <div class="all-cards">
        <BankCard v-if="userAccountInfo" :data="userAccountInfo" @delete="deleteAccount"></BankCard>
        <baseCard v-if="userAccountInfo">
          <template #title>امتیاز حساب</template>
          <template #detail>
            <img src="../assets/images/dashboard/info-circle.svg" alt="icon" />
          </template>
          <template #main>
            <div class="base-card__center-top">
              <span>{{ userAccountInfo?.score?.paymentPeriod || '0' }}</span>
              <span>ریال</span>
            </div>
            <div class="base__center-down">
              <span>{{ userAccountInfo?.score?.paymentPeriod || '0' }}</span>
              <span>ماهه</span>
            </div>
            <baseButton
              class="toggle"
              type="secondary"
              width="290px"
              text="محاسبه امتیاز "
            ></baseButton>
          </template>
        </baseCard>
        <baseCard v-if="userAccountInfo">
          <template #title>قسط پیش رو</template>
          <template #detail>
            <div class="detail">
              <span class="detail__text">جزئیات</span>
              <img src="../assets/images/dashboard/Angle-left.svg" alt="angle left" />
            </div>
          </template>
          <template #main>
            <div class="card__content-main">
              <div class="card__content-top">
                <span>مبلغ قسط:</span>
                <span>{{ upcomingInstalment?.amount || '0' }} ریال</span>
              </div>
              <div class="card__content-down">
                <span>تاریخ سررسید:</span>
                <span>{{ upcomingInstalment?.dueDate || '0' }}</span>
              </div>
            </div>
            <baseButton class="toggle" type="secondary" width="290px" text="پرداخت "></baseButton>
          </template>
        </baseCard>
      </div>
      <section class="dashboard__transactions transactions">
        <div class="transactions__head">
          <div class="transactions__head-title">
            <span>لیست تراکنش‌ها</span>
            <span> ( ریال )</span>
          </div>
          <div class="transactions__head-filter">
            <label for="filter">
              <img src="../assets/images/dashboard/filter.svg" alt="filter image" />
              مرتب سازی:</label
            >
            <select name="filter" id="filter">
              <option value="all">همه</option>
              <option value="newest">جدید ترین</option>
              <option value="precious">گرانترین</option>
              <option value="cheapest">ارزان‌ترین</option>
            </select>
          </div>
          <div class="transactions__head-search">
            <div class="transactions__head--search-container">
              <input
                type="text"
                placeholder="جستجو"
                name="search"
                class="transactions__head-search-input"
              />
              <button type="submit" class="transactions__head-search-btn">
                <img src="../assets/images/dashboard/search.svg" alt="search" />
              </button>
            </div>
          </div>
        </div>

        <!-- -----------table----------- -->
        <table class="transactions__table">
          <thead class="transactions__table-head">
            <tr class="transactions__table-head-row">
              <th>مبلغ تراکنش</th>
              <th>تاریخ و ساعت تراکنش</th>
              <th>نوع تراکنش</th>
            </tr>
          </thead>
          <tbody class="transactions__table-body">
            <tr
              v-for="transaction in transactionShown"
              :key="transaction.date"
              class="transactions__table-body-row"
            >
              <td>
                <p>{{ transaction.type === 'deposit' ? 'واریز' : 'برداشت' }}</p>
                <img
                  :src="transaction.type === 'deposit' ? arrowIconGreen : arrowIconRed"
                  alt="transaction icon"
                />
              </td>
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.amount }}</td>
            </tr>
          </tbody>
        </table>

        <!-- pagination -->
        <footer>
          <div class="pagination">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
              &gt;

              <!-- Previous -->
            </button>

            <button
              v-for="button in displayedButtons"
              :key="button"
              @click="goToPage(button)"
              :class="{ active: button === activeButton }"
            >
              {{ button }}
            </button>

            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
              &lt;
              <!-- Next -->
            </button>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.create-account {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: #f7f8face;
  backdrop-filter: blur(2px);
  border-radius: 12px;
  width: 1164px;

  &__content {
    @include flex-box(column, center, center);
    position: absolute;
    top: 40%;
    right: 35%;
    font-family: map-get($fonts, font-family-base);

    &-text {
      margin-top: 20px;
    }

    &-button {
      background-color: map-get($colors, light-blue);
      color: map-get($colors, white);
      border-radius: 8px;
      border: 0px solid;
      width: 200px;
      height: 48px;
      padding: 8px 16px;
      align-items: center;
      gap: 12px;
      margin-top: 32px;
      cursor: pointer;
    }

    &-link {
      text-decoration: none;
      color: map-get($colors, white);
      font-family: map-get($fonts, font-family-base);
    }
  }
}
.main {
  display: flex;
  flex-direction: row-reverse;
  align-content: stretch;
  min-height: 100vh;
  gap: 16px;
  background: #f7f8fa;
  width: 100vw;
  padding: 110px;
}

.main-container {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.all-cards {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 260px;
  gap: 16px;
}

.base-card {
  &__content {
    display: flex;
    flex-direction: column;
  }

  &__center {
    @include flex-box(column, center, center);
    margin-top: 24px;

    &-top {
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

    &-down {
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

.detail {
  @include flex-box(row, flex-end, center);
  cursor: pointer;

  &__text {
    font-size: 14px;
    font-weight: 400;
    color: #8999b9;
  }
}

.card {
  &__content {
    &-main {
      @include flex-box(column, flex-end, center);
      gap: 12px;
      margin-top: 20px;
      width: 100%;
    }

    &-top {
      @include flex-box(row, space-between, center);
      color: #3c4351;
      width: 100%;

      :first-child {
        color: #8999b9;
      }
    }

    &-down {
      @include flex-box(row, space-between, center);
      color: #3c4351;
      width: 100%;

      :first-child {
        color: #8999b9;
      }
    }
  }
}

.transactions {
  width: 1164px;
  height: 520px;
  background-color: map-get($colors, white);
  border-radius: 12px;
  gap: 24px;
  padding: 24px 24px 16px 24px;
  margin-top: 24px;
  font-family: 'peyda';

  &__head {
    @include flex-box(row-reverse, space-between, center);
    text-wrap: nowrap;
    gap: 12px;

    &-title {
      :first-child {
        @include font-style(
          map-get($fonts, font-weight-semi-bold),
          map-get($fonts, font-size-large)
        );

        color: map-get($colors, text-title);
      }

      :last-child {
        color: map-get($colors, light-purple);
        font-size: map-get($fonts, font-size-medium);
      }
    }

    &-filter {
      @include flex-box(row, center, center);
      color: map-get($colors, light-purple);
      margin-right: 378px;
      direction: rtl;

      select {
        width: 183px;
        height: 34px;
        background-color: map-get($colors, white);
        border: 1px solid #e2edff;

        border-radius: 8px;
        padding: 8px;
        font-family: map-get($fonts, font-family-base);
        color: map-get($colors, text-title);
        margin-right: 8px;
        cursor: pointer;
      }
    }

    &-search {
      margin-top: -2px;
      direction: rtl;

      &-input {
        border: 1px solid #e2edff;
        border-radius: 8px;
        width: 257px;
        height: 34px;
        padding: 8px;
        font-family: map-get($fonts, font-family-base);
        color: map-get($colors, light-purple);
        line-height: 19.6px;
      }

      &-btn {
        border-radius: 7px 0px 0px 7px;
        border: 0px solid;
        width: 33px;
        height: 31px;
        position: relative;
        left: 34.5px;
        top: 3.3px;
      }
    }
  }
}

.transactions__table {
  width: 100%;
  margin-top: 24px;
  border-collapse: collapse;
  cursor: pointer;
  direction: ltr;

  &-head-row {
    @include flex-box(row, space-around, center);
    padding: 10px;
    border-radius: 8px;
    background-color: map-get($colors, light-blue);
    height: 60px;
    color: white;
  }

  &-body {
    > tr:hover {
      background-color: map-get($colors, hover-color);
    }

    > :nth-child(even) {
      background-color: map-get($colors, bg-input);
    }

    &-row {
      display: flex;
      flex-direction: row-reverse;
      border-radius: 8px;
      justify-content: space-around;

      td {
        @include flex-box(row, center, center);
        height: 60px;
        width: 100%;
        color: map-get($colors, text-title);
      }
    }
  }
}

/* pagination */
.pagination {
  @include flex-box(row-reverse, center, center);
  display: flex;
  gap: 10px;
  margin-top: 8px;

  button {
    width: 32px;
    height: 32px;
    padding: 8px 12px;
    color: #8999b9;
    border: 0px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
    outline: none;
    // transition: background-color 0.8s ease-out;

    &:hover {
      background-color: #e9e9e9;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e9e9e9;
    }
  }

  .active {
    background-color: map-get($colors, light-blue);
    color: map-get($colors, white);
  }
}
.toggle {
  margin-top: 40px;
}
</style>
