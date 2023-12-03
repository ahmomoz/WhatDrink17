// 變數區
import { API_BASE_DB_URL } from "./config";
const newsArea = document.querySelector(".news-content");
const pageButton = document.querySelector(".page-button");
const newsId = window.location.href.split("?id=").pop();
const breadcrumb = document.querySelector(".breadcrumb");

// 根據網址中的id取得相對應的新聞資料後渲染至頁面
axios.get(`${API_BASE_DB_URL}/latestNews?id=${newsId}`)
  .then(response => {
    let data = response.data;
    newsInfoRender(data);
  });

//渲染至頁面的function
function newsInfoRender(data) {

  // 麵包屑部分start
  let breadcrumbText = `
          <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
          <li class="breadcrumb-item d-inline"><a href="news-list.html" class="breadcrumb-item fs-16">最新消息</a></li>
          <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${data[0].title}</li>
        `
  breadcrumb.innerHTML = breadcrumbText;
  // 麵包屑部分end

  // 內文部分start
  let contentText = `<h1 class="text-left">${data[0].title}</h1>
        <p class="text-left mb-20 text-gray">發布時間：${data[0].releaseTime}</p>
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <img src="${data[0].photo1}" class="img-fluid rounded-16" alt="滿版圖片1">
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <p class="mb-24 mt-24">${data[0].Description}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <hr class="mt-30 mb-30"> 
          </div>
        </div>`
  newsArea.innerHTML = contentText;
  // 內文部分end

  // 翻頁按鈕渲染function
  function pageButtonRender(totalPage) {
    if(newsId == 1){
      let pageButtonText = `<div class="row">
    <div class="col-6 mb-60">
      <a class="text-gray"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(newsId) + 1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`
  pageButton.innerHTML = pageButtonText;
    }
    else if(newsId == totalPage){
      let pageButtonText = `<div class="row">
    <div class="col-6 mb-60">
    <a href="news-info.html?id=${Number(newsId) - 1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a class="text-gray">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`
  pageButton.innerHTML = pageButtonText;

    }
    else{
      let pageButtonText = `<div class="row">
    <div class="col-6 mb-60">
      <a href="news-info.html?id=${Number(newsId) - 1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(newsId) + 1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`
  pageButton.innerHTML = pageButtonText;
    }
  }

  // 從server上get最新消息總篇數，並根據篇數渲染上一篇下一篇按鈕
  axios.get(`${API_BASE_DB_URL}/latestNews`)
    .then(response => {
      let totalPage = 0;
      totalPage = response.data.length;
      pageButtonRender(totalPage)
    });
}
