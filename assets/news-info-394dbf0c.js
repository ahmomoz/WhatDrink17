import"./bootstrap.min-faf78b7c.js";import{A as n}from"./config-ca05e4f1.js";const o=document.querySelector(".news-content"),i=document.querySelector(".page-button"),s=window.location.href.split("?id=").pop(),c=document.querySelector(".breadcrumb");axios.get(`${n}/latestNews?id=${s}`).then(a=>{let l=a.data;m(l)});function m(a){let l=`
          <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
          <li class="breadcrumb-item d-inline"><a href="news-list.html" class="breadcrumb-item fs-16">最新消息</a></li>
          <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${a[0].title}</li>
        `;c.innerHTML=l;let r=`<h1 class="text-left">${a[0].title}</h1>
        <p class="text-left mb-20 text-gray">發布時間：${a[0].releaseTime}</p>
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <img src="${a[0].photo1}" class="img-fluid rounded-16" alt="滿版圖片1">
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <p class="mb-24 mt-24">${a[0].Description}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <hr class="mt-30 mb-30"> 
          </div>
        </div>`;o.innerHTML=r;function d(t){if(s==1){let e=`<div class="row">
    <div class="col-6 mb-60">
      <a class="text-gray"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(s)+1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}else if(s==t){let e=`<div class="row">
    <div class="col-6 mb-60">
    <a href="news-info.html?id=${Number(s)-1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a class="text-gray">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}else{let e=`<div class="row">
    <div class="col-6 mb-60">
      <a href="news-info.html?id=${Number(s)-1}"><span class="material-symbols-outlined align-middle">keyboard_arrow_left</span>上一篇</a>
    </div>
    <div class="col-6 text-end mb-60">
      <a href="news-info.html?id=${Number(s)+1}">下一篇<span class="material-symbols-outlined align-middle">keyboard_arrow_right</span></a>
    </div>
  </div>`;i.innerHTML=e}}axios.get(`${n}/latestNews`).then(t=>{let e=0;e=t.data.length,d(e)})}
