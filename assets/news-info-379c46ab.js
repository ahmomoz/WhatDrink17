import"./bootstrap.min-a7e784e5.js";const t=document.querySelector(".news-content");console.log(t);const o=window.location.href.split("?id=").pop();console.log(o);axios.get(`https://json-server-project-wtkt.onrender.com/latestNews?id=${o}`).then(e=>{let s=e.data;l(s),console.log(s[0].id)});function l(e){let s="";s+=`<h1 class="text-left">${e[0].title}</h1>
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
        </div>`,console.log(s),t.innerHTML=s}
