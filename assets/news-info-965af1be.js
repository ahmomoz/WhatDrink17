import"./bootstrap.min-0bbeed66.js";const a=document.querySelector(".news-content"),r=document.querySelector(".page-button"),s=window.location.href.split("?id=").pop(),n=document.querySelector(".breadcrumb");axios.get(`https://json-server-project-wtkt.onrender.com/latestNews?id=${s}`).then(e=>{let t=e.data;c(t)});function c(e){let t=`
          <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
          <li class="breadcrumb-item d-inline"><a href="news-list.html" class="breadcrumb-item fs-16">最新消息</a></li>
          <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${e[0].title}</li>
        `;n.innerHTML=t;let i=`<h1 class="text-left">${e[0].title}</h1>
        <p class="text-left mb-20 text-gray">發布時間：${e[0].releaseTime}</p>
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <img src="${e[0].photo1}" class="img-fluid rounded-16" alt="滿版圖片1">
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <p class="mb-24 mt-24">${e[0].Description}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <hr class="mt-30 mb-30"> 
          </div>
        </div>`;a.innerHTML=i;let l=`<div class="row">
    <div class="col-6 mb-60">
      <a href="news-info.html?id=${Number(s)-1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(s)+1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;r.innerHTML=l}
