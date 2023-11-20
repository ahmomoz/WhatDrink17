import"./bootstrap.min-a7e784e5.js";const l=document.querySelector(".newsArea");function c(e){let t="";for(let s=0;s<e.length;s++){const i=e[s].Description.substring(0,100);t+=`<div class="col-12 news-card mb-0" id="newsCard">
        <div class="card border-0">
            <div class="row">
                <div class="col-12 col-lg-6 px-12">
                    <img src="${e[s].photo1}" class="card-img" alt="縮圖${s}">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card-body">
                        <h2 class="card-title mb-0">${e[s].title}</h2>
                        <p class="card-text release-time mb-8 mt-8">發佈日期: ${e[s].releaseTime}</p>
                        <p class="card-text">
                        ${i}...</p>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <p class="mb-0 text-right align-items-end"><a href="news-info.html?id=${e[s].id}">繼續閱讀 ></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mb-40 mt-20 mt-lg-40">`}console.log(t),l.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/latestNews").then(e=>{let t=e.data;c(t)});
