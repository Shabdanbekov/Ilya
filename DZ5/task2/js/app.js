const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

let activeTabIndex = 0;

const hideTabsContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabsContent[i].style.display = "block";
  // tabsContent[i].style.animation = "fade 1.2s";
  tabs[i].classList.add("tabheader__item_active");
};

const switchTab = () => {
  hideTabsContent();
  activeTabIndex = (activeTabIndex + 1) % tabs.length;
  showTabContent(activeTabIndex);
};

hideTabsContent();
showTabContent();

let intervalId = setInterval(switchTab, 1000);
let timeoutId;

tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (item === target) {
        hideTabsContent();
        activeTabIndex = i;
        showTabContent(i);
      }
    });
  }
  clearInterval(intervalId);
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    intervalId = setInterval(switchTab, 1000);
  }, 5000);
});
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//button modal
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");
const openDownModalBtn = document.querySelector(".btn_dark");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

openModalBtn.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});

window.addEventListener("scroll", () => {
  if (
    window.scrollY + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
  }
});

openDownModalBtn.addEventListener("click", openModal);

// // 2)Написать POST запрос и после получения ответа выводить на экран модальное окно с сообщением зависящим от статуса ответа (200, 400, 500)

const forms = document.querySelectorAll("form");
const modalTitle = document.querySelector(".modal__title");

const postData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const obj = {};

    formData.forEach((item, name) => {
      obj[name] = item;
    });

    const json = JSON.stringify(obj);

    fetch("server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    }).then((response) => {
      if (response.ok) {
        document.body.style.overflow = "hidden";
        modalTitle.innerHTML = "CODE " + response.status;
        document.body.style.color = "green";
      } else {
        modalTitle.innerHTML = "CODE " + response.status;
        document.body.style.overflow = "";
        document.body.style.color = "red";
      }
    });
  });
};

forms.forEach((item) => {
  postData(item);
});
