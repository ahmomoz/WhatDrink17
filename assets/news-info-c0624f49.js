import"./bootstrap.min-66c8f441.js";const d=document.querySelector(".news-content"),i=document.querySelector(".page-button"),t=window.location.href.split("?id=").pop(),o=document.querySelector(".breadcrumb");axios.get(`https://json-server-project-wtkt.onrender.com/latestNews?id=${t}`).then(s=>{let a=s.data;c(a)});function c(s){let a=`
          <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
          <li class="breadcrumb-item d-inline"><a href="news-list.html" class="breadcrumb-item fs-16">最新消息</a></li>
          <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${s[0].title}</li>
        `;o.innerHTML=a;let r=`<h1 class="text-left">${s[0].title}</h1>
        <p class="text-left mb-20 text-gray">發布時間：${s[0].releaseTime}</p>
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <img src="${s[0].photo1}" class="img-fluid rounded-16" alt="滿版圖片1">
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <p class="mb-24 mt-24">${s[0].Description}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <hr class="mt-30 mb-30"> 
          </div>
        </div>`;d.innerHTML=r;function n(l){if(t==1){let e=`<div class="row">
    <div class="col-6 mb-60">
      <a class="text-gray"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(t)+1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}else if(t==l){let e=`<div class="row">
    <div class="col-6 mb-60">
    <a href="news-info.html?id=${Number(t)-1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a class="text-gray">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}else{let e=`<div class="row">
    <div class="col-6 mb-60">
      <a href="news-info.html?id=${Number(t)-1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(t)+1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}}axios.get("https://json-server-project-wtkt.onrender.com/latestNews").then(l=>{let e=0;e=l.data.length,n(e)})}
