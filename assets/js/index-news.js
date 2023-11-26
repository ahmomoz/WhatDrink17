const lastestNews = document.querySelector("#lastestNews");
let lastestNewsData = [];
//取得列表功能本體function
function lastestNewsRender() {
  let str = "";
  lastestNewsData.forEach(function (item) {
    str += `
        <div class="swiper-slide">
        <img src="${item.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${item.title}</p>
        <a href="news-info.html?id=${item.id}" class="stretched-link"></a>
      </div>
      `;
  });

  lastestNews.innerHTML = str;
  // console.log(lastestNews);
}

import axios from "axios";

//使用axios去get新消息資料後執行newsListRender
axios
  .get("https://json-server-project-wtkt.onrender.com/latestNews")
  .then((response) => {
    lastestNewsData = response.data;
    lastestNewsRender();
  });
