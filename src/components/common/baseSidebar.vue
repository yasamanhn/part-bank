<template>
  <header>
    <baseHeader></baseHeader>
  </header>

  <aside class="sidebar">
    <div class="sidebar__info">
      <div class="sidebar__title">
        <!-- <p class="sidebar__name">{{ name }}</p> -->
        <p class="sidebar__name">{{ userStore.firstName }} {{ userStore.lastName }}</p>
      </div>
      <div class="sidebar__description">
        <div class="sidebar__code">
          <span>: کد ملی</span>
        </div>
        <div class="sidebar__number">
          <!-- <span class="sidebar__number">{{ nationalCode }}</span> -->
          <span class="sidebar__number">{{ userStore.idNumber }}</span>
        </div>
      </div>
    </div>
    <hr class="sidebar__separator" />
    <div class="sidebar__menu menu">
      <ul class="menu__list">
        <li class="menu__items">
          <a href="#" class="menu__link"> داشبورد</a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/element-4">
              <g id="element-4">
                <path
                  id="Vector"
                  d="M16.475 11.4584H13.1083C11.4333 11.4584 10.625 10.6834 10.625 9.08342V3.41675C10.625 1.81675 11.4417 1.04175 13.1083 1.04175H16.475C18.15 1.04175 18.9583 1.81675 18.9583 3.41675V9.08342C18.9583 10.6834 18.1417 11.4584 16.475 11.4584ZM13.1083 2.29175C12.05 2.29175 11.875 2.57508 11.875 3.41675V9.08342C11.875 9.92508 12.05 10.2084 13.1083 10.2084H16.475C17.5333 10.2084 17.7083 9.92508 17.7083 9.08342V3.41675C17.7083 2.57508 17.5333 2.29175 16.475 2.29175H13.1083Z"
                />
                <path
                  id="Vector_2"
                  d="M16.475 18.9583H13.1083C11.4333 18.9583 10.625 18.1833 10.625 16.5833V15.0833C10.625 13.4833 11.4417 12.7083 13.1083 12.7083H16.475C18.15 12.7083 18.9583 13.4833 18.9583 15.0833V16.5833C18.9583 18.1833 18.1417 18.9583 16.475 18.9583ZM13.1083 13.9583C12.05 13.9583 11.875 14.2416 11.875 15.0833V16.5833C11.875 17.4249 12.05 17.7083 13.1083 17.7083H16.475C17.5333 17.7083 17.7083 17.4249 17.7083 16.5833V15.0833C17.7083 14.2416 17.5333 13.9583 16.475 13.9583H13.1083Z"
                />
                <path
                  id="Vector_3"
                  d="M6.89102 18.9584H3.52435C1.84935 18.9584 1.04102 18.1834 1.04102 16.5834V10.9167C1.04102 9.31675 1.85768 8.54175 3.52435 8.54175H6.89102C8.56602 8.54175 9.37435 9.31675 9.37435 10.9167V16.5834C9.37435 18.1834 8.55768 18.9584 6.89102 18.9584ZM3.52435 9.79175C2.46602 9.79175 2.29102 10.0751 2.29102 10.9167V16.5834C2.29102 17.4251 2.46602 17.7084 3.52435 17.7084H6.89102C7.94935 17.7084 8.12435 17.4251 8.12435 16.5834V10.9167C8.12435 10.0751 7.94935 9.79175 6.89102 9.79175H3.52435Z"
                />
                <path
                  id="Vector_4"
                  d="M6.89102 7.29175H3.52435C1.84935 7.29175 1.04102 6.51675 1.04102 4.91675V3.41675C1.04102 1.81675 1.85768 1.04175 3.52435 1.04175H6.89102C8.56602 1.04175 9.37435 1.81675 9.37435 3.41675V4.91675C9.37435 6.51675 8.55768 7.29175 6.89102 7.29175ZM3.52435 2.29175C2.46602 2.29175 2.29102 2.57508 2.29102 3.41675V4.91675C2.29102 5.75841 2.46602 6.04175 3.52435 6.04175H6.89102C7.94935 6.04175 8.12435 5.75841 8.12435 4.91675V3.41675C8.12435 2.57508 7.94935 2.29175 6.89102 2.29175H3.52435Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items">
          <a href="#" class="menu__link">حساب</a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/wallet">
              <g id="wallet">
                <path
                  id="Vector"
                  d="M4.33275 8.71665C4.17442 8.71665 4.00775 8.64998 3.89109 8.53331C3.71609 8.34998 3.65775 8.08331 3.75775 7.84998L5.30775 4.14998C5.34109 4.07498 5.35775 4.02498 5.38275 3.98331C6.61609 1.14165 8.19109 0.449979 10.9744 1.51665C11.1328 1.57498 11.2578 1.69998 11.3244 1.85831C11.3911 2.01665 11.3911 2.19165 11.3244 2.34998L8.88275 8.01665C8.78275 8.24998 8.55775 8.39165 8.30775 8.39165H5.93275C5.45775 8.39165 5.00775 8.48331 4.57442 8.66665C4.49942 8.69998 4.41609 8.71665 4.33275 8.71665ZM8.84109 2.29165C7.80775 2.29165 7.17442 2.96665 6.51609 4.49998C6.50775 4.52498 6.49109 4.54998 6.48275 4.57498L5.39109 7.16665C5.57442 7.14998 5.74942 7.14165 5.93275 7.14165H7.89109L9.89942 2.47498C9.50775 2.34998 9.15775 2.29165 8.84109 2.29165Z"
                />
                <path
                  id=" Vector_2"
                  d="M15.2415 8.55829C15.1832 8.55829 15.1165 8.54995 15.0582 8.53329C14.7415 8.44162 14.4082 8.39162 14.0582 8.39162H8.3082C8.09986 8.39162 7.89986 8.28329 7.7832 8.10829C7.67486 7.93329 7.64986 7.70829 7.7332 7.51662L10.1499 1.90829C10.2749 1.60829 10.6415 1.39995 10.9499 1.50829C11.0499 1.54162 11.1415 1.58329 11.2415 1.62495L13.2082 2.44995C14.3582 2.92495 15.1249 3.42495 15.6249 4.02495C15.7249 4.14162 15.8082 4.26662 15.8915 4.39995C15.9832 4.54162 16.0665 4.70829 16.1249 4.88329C16.1499 4.94162 16.1915 5.04995 16.2165 5.16662C16.4499 5.95829 16.3332 6.92495 15.8332 8.17495C15.7249 8.40829 15.4915 8.55829 15.2415 8.55829ZM9.2582 7.14162H14.0665C14.3332 7.14162 14.5915 7.16662 14.8499 7.20829C15.0832 6.48329 15.1332 5.92495 14.9999 5.47495C14.9832 5.39995 14.9665 5.36662 14.9582 5.33329C14.9082 5.19995 14.8749 5.12495 14.8332 5.05829C14.7749 4.96662 14.7332 4.89162 14.6665 4.81662C14.3082 4.38329 13.6749 3.98329 12.7249 3.59162L11.0832 2.90829L9.2582 7.14162Z"
                />
                <path
                  id="Vector_3"
                  d="M13.25 18.9583H6.75C6.51667 18.9583 6.3 18.9416 6.08333 18.9166C3.15833 18.7249 1.49167 17.0499 1.29167 14.0916C1.26667 13.9083 1.25 13.6833 1.25 13.4583V11.8333C1.25 9.95827 2.36667 8.2666 4.09167 7.5166C4.68333 7.2666 5.3 7.1416 5.94167 7.1416H14.075C14.55 7.1416 15.0083 7.20827 15.4333 7.3416C17.3917 7.93327 18.7667 9.78327 18.7667 11.8333V13.4583C18.7667 13.6416 18.7583 13.8166 18.75 13.9833C18.5667 17.2416 16.6667 18.9583 13.25 18.9583ZM5.93333 8.3916C5.45833 8.3916 5.00833 8.48327 4.575 8.6666C3.30833 9.2166 2.49167 10.4583 2.49167 11.8333V13.4583C2.49167 13.6333 2.50833 13.8083 2.525 13.9749C2.68333 16.3499 3.85 17.5166 6.19167 17.6749C6.4 17.6999 6.56667 17.7166 6.74167 17.7166H13.2417C15.9917 17.7166 17.3417 16.5083 17.475 13.9249C17.4833 13.7749 17.4917 13.6249 17.4917 13.4583V11.8333C17.4917 10.3249 16.4833 8.97493 15.05 8.53327C14.7333 8.4416 14.4 8.3916 14.05 8.3916H5.93333Z"
                />
                <path
                  id="Vector_4"
                  d="M1.86719 12.4584C1.52552 12.4584 1.24219 12.1751 1.24219 11.8334V9.39175C1.24219 6.76674 3.10052 4.50008 5.66719 4.00008C5.89219 3.95841 6.12552 4.04174 6.27552 4.21674C6.41719 4.39174 6.45885 4.64174 6.36719 4.85008L4.90885 8.33341C4.84219 8.48341 4.72552 8.60008 4.58385 8.66674C3.31719 9.21674 2.50052 10.4584 2.50052 11.8334C2.49219 12.1751 2.21719 12.4584 1.86719 12.4584ZM4.66719 5.68341C3.60052 6.28341 2.82552 7.33341 2.58385 8.55841C2.95052 8.18341 3.37552 7.86674 3.85885 7.63341L4.66719 5.68341Z"
                />
                <path
                  id="Vector_5"
                  d="M18.133 12.4584C17.7913 12.4584 17.508 12.1751 17.508 11.8334C17.508 10.3251 16.4996 8.97506 15.0663 8.53339C14.8996 8.48339 14.758 8.36673 14.683 8.20839C14.608 8.05006 14.5996 7.86673 14.6663 7.70839C15.058 6.73339 15.158 6.02506 14.9996 5.47506C14.983 5.40006 14.9663 5.36673 14.958 5.33339C14.8496 5.09173 14.908 4.80839 15.0996 4.62506C15.2913 4.44173 15.583 4.40006 15.8163 4.52506C17.633 5.47506 18.758 7.34173 18.758 9.39173V11.8334C18.758 12.1751 18.4746 12.4584 18.133 12.4584ZM16.0413 7.57506C16.5663 7.81673 17.033 8.15839 17.4246 8.56673C17.2663 7.75006 16.8746 7.00839 16.2996 6.42506C16.258 6.77506 16.1746 7.15839 16.0413 7.57506Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items">
          <a href="#" class="menu__link">تسهیلات</a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/strongbox-2">
              <g id="strongbox-2">
                <path
                  id="Vector"
                  d="M12.4993 18.9584H7.49935C2.97435 18.9584 1.04102 17.0251 1.04102 12.5001V7.50008C1.04102 2.97508 2.97435 1.04175 7.49935 1.04175H12.4993C17.0243 1.04175 18.9577 2.97508 18.9577 7.50008V12.5001C18.9577 17.0251 17.0243 18.9584 12.4993 18.9584ZM7.49935 2.29175C3.65768 2.29175 2.29102 3.65841 2.29102 7.50008V12.5001C2.29102 16.3417 3.65768 17.7084 7.49935 17.7084H12.4993C16.341 17.7084 17.7077 16.3417 17.7077 12.5001V7.50008C17.7077 3.65841 16.341 2.29175 12.4993 2.29175H7.49935Z"
                />
                <path
                  id="Vector_2"
                  d="M13.3327 16.4584H6.66602C4.64935 16.4584 3.54102 15.3501 3.54102 13.3334V6.66675C3.54102 4.65008 4.64935 3.54175 6.66602 3.54175H13.3327C15.3493 3.54175 16.4577 4.65008 16.4577 6.66675V13.3334C16.4577 15.3501 15.3493 16.4584 13.3327 16.4584ZM6.66602 4.79175C5.34935 4.79175 4.79102 5.35008 4.79102 6.66675V13.3334C4.79102 14.6501 5.34935 15.2084 6.66602 15.2084H13.3327C14.6493 15.2084 15.2077 14.6501 15.2077 13.3334V6.66675C15.2077 5.35008 14.6493 4.79175 13.3327 4.79175H6.66602Z"
                />
                <path
                  id="Vector_3"
                  d="M6.23268 12.7084H4.16602C3.82435 12.7084 3.54102 12.4251 3.54102 12.0834C3.54102 11.7417 3.82435 11.4584 4.16602 11.4584H6.23268C7.04101 11.4584 7.69101 10.8001 7.69101 10.0001C7.69101 9.20008 7.03268 8.54175 6.23268 8.54175H4.16602C3.82435 8.54175 3.54102 8.25841 3.54102 7.91675C3.54102 7.57508 3.82435 7.29175 4.16602 7.29175H6.23268C7.72435 7.29175 8.94101 8.50841 8.94101 10.0001C8.94101 11.4917 7.73268 12.7084 6.23268 12.7084Z"
                />
                <path
                  id="Vector_4"
                  d="M15.834 8.94995H13.334C12.9923 8.94995 12.709 8.66662 12.709 8.32495C12.709 7.98328 12.9923 7.69995 13.334 7.69995H15.834C16.1757 7.69995 16.459 7.98328 16.459 8.32495C16.459 8.66662 16.1757 8.94995 15.834 8.94995Z"
                />
                <path
                  id="Vector_5"
                  d="M15.834 12.2917H13.334C12.9923 12.2917 12.709 12.0084 12.709 11.6667C12.709 11.3251 12.9923 11.0417 13.334 11.0417H15.834C16.1757 11.0417 16.459 11.3251 16.459 11.6667C16.459 12.0084 16.1757 12.2917 15.834 12.2917Z"
                />
                <path
                  id="Vector_6"
                  d="M6.04232 10.8333C5.93398 10.8333 5.82565 10.8083 5.72565 10.7667C5.62565 10.725 5.53398 10.6667 5.45065 10.5917C5.29231 10.4334 5.20898 10.225 5.20898 10C5.20898 9.78335 5.30065 9.56666 5.45065 9.40833C5.68398 9.18333 6.05066 9.10003 6.35899 9.23336C6.46732 9.27503 6.55899 9.33333 6.63399 9.40833C6.78399 9.56666 6.87565 9.78335 6.87565 10C6.87565 10.225 6.79232 10.4334 6.63399 10.5917C6.55066 10.6667 6.45899 10.725 6.35899 10.7667C6.25899 10.8083 6.15065 10.8333 6.04232 10.8333Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items">
          <a href="#" class="menu__link"> عملیات کارت </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/cards">
              <g id="cards">
                <path
                  id="Vector"
                  d="M15.8327 11.1333H1.66602C1.32435 11.1333 1.04102 10.85 1.04102 10.5083C1.04102 10.1666 1.32435 9.8833 1.66602 9.8833H15.8327C16.1743 9.8833 16.4577 10.1666 16.4577 10.5083C16.4577 10.85 16.1743 11.1333 15.8327 11.1333Z"
                />
                <path
                  id="Vector_2"
                  d="M12.6827 18.1249H4.81604C1.95771 18.1249 1.04102 17.2166 1.04102 14.3916V8.56658C1.04102 6.32492 1.54937 4.99992 4.1327 4.84992C4.34937 4.84159 4.57437 4.83325 4.81604 4.83325H12.6827C15.541 4.83325 16.4577 5.74158 16.4577 8.56658V14.5249C16.4243 17.2499 15.5077 18.1249 12.6827 18.1249ZM4.81604 6.08325C4.59104 6.08325 4.38271 6.09159 4.19104 6.09992C2.69937 6.19159 2.29102 6.50825 2.29102 8.56658V14.3916C2.29102 16.5249 2.64104 16.8749 4.81604 16.8749H12.6827C14.8327 16.8749 15.1827 16.5416 15.2077 14.5166V8.56658C15.2077 6.43325 14.8577 6.08325 12.6827 6.08325H4.81604Z"
                />
                <path
                  id="Vector_3"
                  d="M15.8327 15.15C15.6743 15.15 15.516 15.0917 15.4077 14.9833C15.2827 14.8667 15.2077 14.7 15.2077 14.525V8.56667C15.2077 6.43333 14.8577 6.08333 12.6827 6.08333H4.81604C4.59104 6.08333 4.38271 6.09167 4.19104 6.1C4.02437 6.10833 3.85767 6.04167 3.73267 5.925C3.60767 5.80833 3.54102 5.64167 3.54102 5.46667C3.57435 2.75 4.49104 1.875 7.31604 1.875H15.1827C18.041 1.875 18.9577 2.78333 18.9577 5.60833V11.4333C18.9577 13.675 18.4493 15 15.866 15.15C15.8577 15.15 15.841 15.15 15.8327 15.15ZM4.81604 4.83333H12.6827C15.541 4.83333 16.4577 5.74167 16.4577 8.56667V13.8333C17.4243 13.6583 17.7077 13.1583 17.7077 11.4333V5.60833C17.7077 3.475 17.3577 3.125 15.1827 3.125H7.31604C5.41604 3.125 4.92437 3.38333 4.81604 4.83333Z"
                />
                <path
                  id="Vector_4"
                  d="M5.80055 15.4667H4.36719C4.02552 15.4667 3.74219 15.1833 3.74219 14.8417C3.74219 14.5 4.02552 14.2167 4.36719 14.2167H5.80055C6.14221 14.2167 6.42555 14.5 6.42555 14.8417C6.42555 15.1833 6.15055 15.4667 5.80055 15.4667Z"
                />
                <path
                  id="Vector_5"
                  d="M10.4585 15.4667H7.5918C7.25013 15.4667 6.9668 15.1833 6.9668 14.8417C6.9668 14.5 7.25013 14.2167 7.5918 14.2167H10.4585C10.8001 14.2167 11.0835 14.5 11.0835 14.8417C11.0835 15.1833 10.8085 15.4667 10.4585 15.4667Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items">
          <a href="#" class="menu__link"> سفته الکترونیک </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/receipt-search">
              <g id="receipt-search">
                <path
                  id="Vector"
                  d="M8.78361 18.2833C8.59194 18.2833 8.40861 18.2 8.28361 18.0333L7.44193 16.9083C7.26693 16.675 7.03362 16.5416 6.78362 16.5249C6.53362 16.5083 6.28359 16.625 6.08359 16.8333C4.87526 18.125 3.9586 18.0166 3.51694 17.85C3.06694 17.675 2.30859 17.0999 2.30859 15.2499V5.86663C2.30859 2.16663 3.37526 1.04163 6.86693 1.04163H13.1586C16.6503 1.04163 17.7169 2.16663 17.7169 5.86663V9.41662C17.7169 9.75828 17.4336 10.0416 17.0919 10.0416C16.7503 10.0416 16.4669 9.75828 16.4669 9.41662V5.86663C16.4669 2.8583 15.9419 2.29163 13.1586 2.29163H6.86693C4.08359 2.29163 3.55859 2.8583 3.55859 5.86663V15.2499C3.55859 16.1249 3.77526 16.6083 3.97526 16.6833C4.12526 16.7416 4.53361 16.6583 5.16695 15.9833C5.62528 15.5 6.22527 15.2416 6.85027 15.2749C7.46694 15.3083 8.05027 15.6333 8.44194 16.1583L9.29193 17.2833C9.50026 17.5583 9.44194 17.95 9.16694 18.1583C9.04194 18.25 8.90861 18.2833 8.78361 18.2833Z"
                />
                <path
                  id="Vector_2"
                  d="M13.3327 6.45837H6.66602C6.32435 6.45837 6.04102 6.17504 6.04102 5.83337C6.04102 5.49171 6.32435 5.20837 6.66602 5.20837H13.3327C13.6743 5.20837 13.9577 5.49171 13.9577 5.83337C13.9577 6.17504 13.6743 6.45837 13.3327 6.45837Z"
                />
                <path
                  id="Vector_3"
                  d="M12.5 9.79163H7.5C7.15833 9.79163 6.875 9.50829 6.875 9.16663C6.875 8.82496 7.15833 8.54163 7.5 8.54163H12.5C12.8417 8.54163 13.125 8.82496 13.125 9.16663C13.125 9.50829 12.8417 9.79163 12.5 9.79163Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items">
          <a href="#" class="menu__link"> خدمات </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/outline/card-pos">
              <g id="card-pos">
                <path
                  id="Vector"
                  d="M3.27526 13.8583C3.11693 13.8583 2.95859 13.8 2.83359 13.675C2.59193 13.4333 2.59193 13.0333 2.83359 12.7917L12.7919 2.83335C13.0336 2.59168 13.4336 2.59168 13.6753 2.83335C13.9169 3.07502 13.9169 3.47502 13.6753 3.71668L3.71693 13.6833C3.60026 13.8 3.43359 13.8583 3.27526 13.8583Z"
                />
                <path
                  id="Vector_2"
                  d="M9.24987 15.8584C9.09154 15.8584 8.9332 15.8001 8.8082 15.6751C8.56654 15.4334 8.56654 15.0334 8.8082 14.7917L9.8082 13.7917C10.0499 13.5501 10.4499 13.5501 10.6915 13.7917C10.9332 14.0334 10.9332 14.4334 10.6915 14.6751L9.69154 15.6751C9.57487 15.7917 9.41654 15.8584 9.24987 15.8584Z"
                />
                <path
                  id="Vector_3"
                  d="M11.4921 13.6167C11.3337 13.6167 11.1754 13.5583 11.0504 13.4333C10.8087 13.1917 10.8087 12.7917 11.0504 12.55L13.0421 10.5583C13.2837 10.3167 13.6837 10.3167 13.9254 10.5583C14.1671 10.8 14.1671 11.2 13.9254 11.4417L11.9337 13.4333C11.8171 13.55 11.6504 13.6167 11.4921 13.6167Z"
                />
                <path
                  id="Vector_4"
                  d="M9.24911 18.9583C8.43245 18.9583 7.61578 18.4583 6.62411 17.4666L2.53245 13.375C0.540781 11.3833 0.549115 10.1 2.55745 8.09164L8.09078 2.5583C10.0991 0.549969 11.3824 0.541636 13.3741 2.5333L17.4658 6.62497C19.4574 8.61664 19.4491 9.89997 17.4408 11.9083L11.9074 17.4416C10.8991 18.45 10.0741 18.9583 9.24911 18.9583ZM10.7491 2.29164C10.3158 2.29164 9.76578 2.64997 8.97412 3.44164L3.44078 8.97497C2.64911 9.76664 2.29078 10.3166 2.29078 10.7416C2.29078 11.175 2.62411 11.7 3.41578 12.4916L7.50745 16.5833C8.29912 17.375 8.81578 17.7083 9.24911 17.7083C9.24911 17.7083 9.24911 17.7083 9.25745 17.7083C9.69078 17.7083 10.2324 17.35 11.0241 16.5583L16.5574 11.025C17.3491 10.2333 17.7074 9.6833 17.7074 9.2583C17.7074 8.82497 17.3741 8.29997 16.5824 7.5083L12.4908 3.41664C11.7074 2.62497 11.1824 2.29164 10.7491 2.29164Z"
                />
                <path
                  id="Vector_5"
                  d="M18.3327 18.9584H1.66602C1.32435 18.9584 1.04102 18.675 1.04102 18.3334C1.04102 17.9917 1.32435 17.7084 1.66602 17.7084H18.3327C18.6743 17.7084 18.9577 17.9917 18.9577 18.3334C18.9577 18.675 18.6743 18.9584 18.3327 18.9584Z"
                />
              </g>
            </g>
          </svg>
        </li>
        <li class="menu__items menu__items--exit">
          <a href="#" class="menu__logout"> خروج </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
          >
            <path
              d="M5.5 9H13"
              stroke="#EB482B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 6L13 9L10 12"
              stroke="#EB482B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 15C9.99725 15.397 9.83833 15.7769 9.55762 16.0576C9.27691 16.3383 8.89698 16.4972 8.5 16.5H2.5C2.10302 16.4972 1.72309 16.3383 1.44238 16.0576C1.16167 15.7769 1.00275 15.397 1 15V3C1.00275 2.60302 1.16167 2.22309 1.44238 1.94238C1.72309 1.66167 2.10302 1.50275 2.5 1.5H8.5C8.89698 1.50275 9.27691 1.66167 9.55762 1.94238C9.83833 2.22309 9.99725 2.60302 10 3"
              stroke="#EB482B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import BaseHeader from '@/components/common/baseHeader.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const props = defineProps({
  name: {
    type: String,
    required: false
  },
  nationalCode: {
    type: String,
    required: false
  }
})
</script>

<style scoped lang="scss">
.sidebar {
  @include flex-box(column, normal, center);
  width: 220px;
  height: 804px;
  padding: 24px 0px 8px 0px;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &__info {
    color: map-get($colors, text-title);
    text-align: center;
    font-family: map-get($fonts, font-family-base);
    font-size: map-get($fonts, font-size-medium-large);
    width: 172px;
    line-height: 28px;
    padding-top: 14px;
  }

  &__name {
    color: map-get($colors, text-title);
    text-align: center;
    font-family: map-get($fonts, font-family-base);
    font-weight: bold;
    font-size: map-get($fonts, font-size-medium-large);
    line-height: 28px;
  }

  &__description {
    @include flex-box(row-reverse, space-between, center);
    margin-top: 24px;
  }

  &__code {
    @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-small));
    color: map-get($colors, light-purple);
    font-family: map-get($fonts, font-family-base);
    line-height: normal;
  }

  &__number {
    @include font-style(map-get($fonts, font-weight-semi-bold), map-get($fonts, font-size-base));
    color: map-get($colors, text-title);
    font-family: map-get($fonts, font-family-base);
    font-style: normal;
    line-height: normal;
  }

  &__separator {
    color: map-get($colors, dashbord-header-hr);
    width: 196px;
    height: 0px;
    border: 1px solid;
    border-radius: 12px;
  }
  .menu {
    width: 100%;

    &__list {
      @include flex-box(column, normal, flex-end);
      @include font-style(map-get($fonts, font-weight-regular), map-get($fonts, font-size-base));
      position: relative;
      top: -10px;
      gap: 8px;
      padding: 0px 8px;
      font-family: map-get($fonts, font-family-base);
      line-height: 28px;
      color: map-get($colors, light-purple);
      text-align: center;
      list-style: none;
    }

    &__items {
      @include flex-box(row, flex-end, center);
      gap: 8px;
      width: 100%;
      padding: 8px 16px 8px 12px;
      font-family: 'Peyda';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }

    &__items:hover {
      background-color: map-get($colors, bg-input);
      width: 204px;
      cursor: pointer;
      color: map-get($colors, light-blue);
      border-radius: 6px;
    }

    &__link {
      color: inherit;
      font-family: map-get($fonts, font-family-base);
      text-decoration: none;
      font-size: map-get($fonts, font-size-medium);
      line-height: 28px;
    }

    &__logout {
      font-family: map-get($fonts, font-family-base);
      text-decoration: none;
      font-size: map-get($fonts, font-size-base);
      line-height: 28px;
      color: map-get($colors, error-color);
    }
  }
}
</style>
